import { generateText, gateway } from "ai";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { chatbotInstructions, getQuickAnswer } from "@/lib/chatbot-answers";

export const runtime = "nodejs";

const maximumMessageLength = 800;

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;",
})[character] ?? character);

async function notifyChatbotMessage(message: string) {
  const recipient = process.env.CHATBOT_NOTIFICATION_EMAIL ?? "justin@goexecution.com";
  const smtpHost = process.env.SMTP_HOST ?? (process.env.GMAIL_APP_PASSWORD ? "smtp.gmail.com" : "smtp.hostinger.com");
  const smtpPort = Number(process.env.SMTP_PORT ?? 465);
  const smtpUser = process.env.SMTP_USER ?? "justin@goexecution.com";
  const rawPass = process.env.SMTP_PASS || process.env.HOSTINGER_SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
  const smtpPass = rawPass?.trim().replace(/^["']|["']$/g, "");
  const receivedAt = new Date().toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short", timeZone: "America/Chicago" });
  const text = `NEW CHATBOT MESSAGE\n\nMessage:\n${message}\n\nReceived: ${receivedAt} (Chicago time)\n\nSent from goexecution.com quick answers.`;
  const html = `<div style="font-family:Arial,sans-serif;color:#0d1b2a;line-height:1.6"><h2 style="margin:0 0 16px">New chatbot message</h2><p style="margin:0 0 8px;color:#6b7280;font-size:13px">Received ${escapeHtml(receivedAt)} (Chicago time)</p><div style="margin-top:18px;padding:18px;border-left:4px solid #c9a86a;background:#f7f8fa;white-space:pre-wrap">${escapeHtml(message)}</div><p style="margin-top:18px;color:#6b7280;font-size:12px">Sent from the goexecution.com Quick Answers widget.</p></div>`;

  if (smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
        tls: { rejectUnauthorized: false },
      });
      await transporter.sendMail({
        from: `"Go Execution Chatbot" <${smtpUser}>`,
        to: recipient,
        subject: "New website chatbot message",
        html,
        text,
      });
      return;
    } catch (error) {
      console.error("Chatbot SMTP notification failed:", error);
    }
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return;

  try {
    const from = process.env.RESEND_FROM_EMAIL ?? "Go Execution <website@send.goexecution.com>";
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [recipient], subject: "New website chatbot message", html, text }),
    });
    if (!response.ok) console.error("Chatbot Resend notification failed:", await response.text());
  } catch (error) {
    console.error("Chatbot Resend notification failed:", error);
  }
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 2_000) {
    return NextResponse.json({ answer: "Please shorten your question and try again." }, { status: 413 });
  }

  let body: { message?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ answer: "I couldn't read that question. Please try again." }, { status: 400 });
  }

  const message = typeof body.message === "string" ? body.message.trim().slice(0, maximumMessageLength) : "";
  if (!message) {
    return NextResponse.json({ answer: "Ask me anything about Go Execution or how to get started." }, { status: 400 });
  }

  // Delivery errors are handled inside the notifier, so a mail issue never
  // prevents the visitor from receiving a chat answer.
  await notifyChatbotMessage(message);

  // Vercel supplies Gateway authentication through OIDC. Local and non-Vercel
  // deployments can opt in by setting AI_GATEWAY_API_KEY.
  const hasGatewayAccess = Boolean(process.env.VERCEL || process.env.AI_GATEWAY_API_KEY);
  if (!hasGatewayAccess) {
    return NextResponse.json(getQuickAnswer(message));
  }

  try {
    const { text } = await generateText({
      model: gateway.languageModel("openai/gpt-oss-20b"),
      instructions: chatbotInstructions,
      prompt: message,
      maxOutputTokens: 180,
    });

    return NextResponse.json({ answer: text.trim() || getQuickAnswer(message).answer });
  } catch (error) {
    console.error("Website chatbot gateway request failed:", error);
    return NextResponse.json(getQuickAnswer(message));
  }
}
