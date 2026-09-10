import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const readField = (value: unknown, maximum: number) => typeof value === "string" ? value.trim().slice(0, maximum) : "";
const readEnv = (value: string | undefined) => value?.trim().replace(/^["']|["']$/g, "") ?? "";
const error = (message: string, status = 400) => NextResponse.json({ success: false, message }, { status });

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return error("We couldn't read that request. Please try again.");
  }

  const email = readField(body.email, 254);
  if (!email || !emailPattern.test(email)) {
    return error("Please enter a valid email address.");
  }

  const recipient = readEnv(process.env.CONTACT_RECIPIENT_EMAIL) || "justin@goexecution.com";
  
  const smtpHost = readEnv(process.env.SMTP_HOST) || (process.env.GMAIL_APP_PASSWORD ? "smtp.gmail.com" : "smtp.hostinger.com");
  const smtpPort = Number(process.env.SMTP_PORT ?? 465);
  const smtpUser = readEnv(process.env.SMTP_USER) || "justin@goexecution.com";
  const rawPass = process.env.SMTP_PASS || process.env.HOSTINGER_SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
  const smtpPass = rawPass ? rawPass.trim().replace(/^["']|["']$/g, "") : "";

  const html = `<div style="font-family:sans-serif;color:#333;">
    <h2>New Newsletter Signup</h2>
    <p>A new user has subscribed to the Go Execution newsletter:</p>
    <p><strong>Email:</strong> ${email}</p>
  </div>`;
  const text = `New Newsletter Signup\n\nEmail: ${email}`;

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
        from: `"Go Execution Subscriptions" <${smtpUser}>`,
        to: recipient,
        subject: `New Newsletter Subscriber: ${email}`,
        html: html,
        text: text,
      });

      return NextResponse.json({ success: true, message: "Thank you for subscribing to our newsletter!" });
    } catch (err: unknown) {
      console.error("Newsletter SMTP delivery failure:", err);
      return error("Email delivery failed. Please try again later.", 502);
    }
  }

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
          subject: `New Newsletter Subscriber: ${email}`,
          html,
          text,
        }),
      });

      if (response.ok) {
        return NextResponse.json({ success: true, message: "Thank you for subscribing to our newsletter!" });
      }
    } catch (err) {
      console.error("Resend API delivery error:", err);
    }
  }

  return error("Email delivery is not configured yet. Please set SMTP_PASS.", 503);
}
