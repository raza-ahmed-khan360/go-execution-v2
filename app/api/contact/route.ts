import { NextResponse } from "next/server";
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

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? "Go Execution <website@send.goexecution.com>";
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL ?? "justin@goexecution.com";
  if (!apiKey) return error("Email delivery is not configured yet. Please try again shortly.", 503);

  const template = createContactRequestEmail(enquiry);
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

    if (!response.ok) {
      console.error("Resend contact request delivery failed", response.status);
      return error("We couldn’t send your request right now. Please try again shortly.", 502);
    }
  } catch {
    return error("We couldn’t send your request right now. Please try again shortly.", 502);
  }

  return NextResponse.json({ success: true, message: "Thank you—your request has been sent. We’ll be in touch shortly." });
}
