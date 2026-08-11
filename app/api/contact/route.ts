import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createContactRequestEmail, type ContactRequest } from "@/lib/contact-request-email";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const readField = (value: unknown, maximum: number) => typeof value === "string" ? value.trim().slice(0, maximum) : "";

const error = (message: string, status = 400) => NextResponse.json({ success: false, message }, { status });

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) return error("Your message is too large. Please shorten it and try again.", 413);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return error("We couldn’t read that request. Please try again.");
  }

  if (body.botcheck) return NextResponse.json({ success: true });

  const enquiry: ContactRequest = {
    name: readField(body.name, 120),
    email: readField(body.email, 254),
    phone: readField(body.phone, 60),
    service: readField(body.service, 120),
    message: readField(body.message, 4_000),
  };

  if (!enquiry.name || !enquiry.phone || !enquiry.service || !enquiry.message || !emailPattern.test(enquiry.email)) {
    return error("Please complete all required fields with valid information.");
  }

  const recipient = process.env.CONTACT_RECIPIENT_EMAIL ?? "justin@goexecution.com";
  const template = createContactRequestEmail(enquiry);

  // 1. HOSTINGER & GMAIL SMTP SMART CONFIGURATION
  const smtpHost = process.env.SMTP_HOST ?? (process.env.GMAIL_APP_PASSWORD ? "smtp.gmail.com" : "smtp.hostinger.com");
  const smtpPort = Number(process.env.SMTP_PORT ?? 465);
  const smtpUser = process.env.SMTP_USER ?? "justin@goexecution.com";
  const rawPass = process.env.SMTP_PASS || process.env.HOSTINGER_SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

  // Clean password (strips leading/trailing quotes if user entered them in hosting dashboard)
  const smtpPass = rawPass ? rawPass.trim().replace(/^["']|["']$/g, "") : "";

  if (smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      await transporter.sendMail({
        from: `"Go Execution Leads" <${smtpUser}>`,
        to: recipient,
        replyTo: enquiry.email,
        subject: `New Lead: ${enquiry.service} - ${enquiry.name}`,
        html: template.html,
        text: template.text,
      });

      return NextResponse.json({ success: true, message: "Thank you—your request has been sent to Justin. We’ll be in touch shortly." });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error("SMTP delivery failure details:", { host: smtpHost, port: smtpPort, user: smtpUser, err: errorMessage });
      return error(`Email delivery failed via ${smtpHost} (${errorMessage}). Please check SMTP password in hosting env.`, 502);
    }
  }

  // 2. RESEND API FALLBACK
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const from = process.env.RESEND_FROM_EMAIL ?? "Go Execution <website@send.goexecution.com>";
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [recipient],
          reply_to: enquiry.email,
          subject: `goexecution.com "${enquiry.service}"`,
          html: template.html,
          text: template.text,
        }),
      });

      if (response.ok) {
        return NextResponse.json({ success: true, message: "Thank you—your request has been sent. We’ll be in touch shortly." });
      }
    } catch (err) {
      console.error("Resend API delivery error:", err);
    }
  }

  return error("Email delivery is not configured yet. Please set SMTP_PASS in environment variables.", 503);
}
