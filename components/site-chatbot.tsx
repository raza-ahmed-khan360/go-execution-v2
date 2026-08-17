"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

const quickPrompts = ["What services do you offer?", "How does pricing work?", "How do I get started?"];

export function SiteChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, role: "assistant", text: "Hi! I’m the Go Execution assistant. Need a quick answer about our services or how to get started?" },
  ]);
  const scrollTarget = useRef<HTMLDivElement>(null);
  const nextMessageId = useRef(1);

  useEffect(() => {
    if (isOpen) scrollTarget.current?.scrollIntoView({ block: "end" });
  }, [isOpen, messages]);

  useEffect(() => {
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  async function ask(question: string) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion || isSending) return;

    const userMessage = { id: nextMessageId.current++, role: "user" as const, text: cleanQuestion };
    setMessages((current) => [...current, userMessage]);
    setMessage("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: cleanQuestion }),
      });
      const payload = await response.json() as { answer?: string };
      const answer = payload.answer ?? "I’m sorry, I couldn’t answer that just now. Please try again or book a free consultation.";
      setMessages((current) => [...current, { id: nextMessageId.current++, role: "assistant", text: answer }]);
    } catch {
      setMessages((current) => [...current, { id: nextMessageId.current++, role: "assistant", text: "I’m having trouble connecting right now. You can still book a free consultation below." }]);
    } finally {
      setIsSending(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(message);
  }

  function keyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      void ask(message);
    }
  }

  return (
    <div className="ge-chatbot">
      {isOpen ? (
        <section id="ge-chatbot-panel" className="ge-chatbot__panel" aria-label="Go Execution quick answers">
          <header className="ge-chatbot__header">
            <span className="ge-chatbot__brand-icon" aria-hidden="true"><Sparkles /></span>
            <span><strong>Quick answers</strong><small>Go Execution assistant</small></span>
            <button type="button" className="ge-chatbot__close" onClick={() => setIsOpen(false)} aria-label="Close quick answers"><X /></button>
          </header>
          <div className="ge-chatbot__messages" aria-live="polite">
            {messages.map((item) => <p className={`ge-chatbot__message ge-chatbot__message--${item.role}`} key={item.id}>{item.text}</p>)}
            {isSending ? <p className="ge-chatbot__typing" aria-label="Assistant is typing"><i /><i /><i /></p> : null}
            <div ref={scrollTarget} />
          </div>
          <div className="ge-chatbot__prompts">
            {quickPrompts.map((prompt) => <button type="button" key={prompt} onClick={() => void ask(prompt)} disabled={isSending}>{prompt}</button>)}
          </div>
          <form className="ge-chatbot__form" onSubmit={submit}>
            <input value={message} onChange={(event) => setMessage(event.target.value)} onKeyDown={keyDown} maxLength={800} placeholder="Ask a quick question…" aria-label="Ask a quick question" />
            <button type="submit" disabled={!message.trim() || isSending} aria-label="Send question"><Send /></button>
          </form>
          <Link href="/contact" className="ge-chatbot__consult-link" onClick={() => setIsOpen(false)}>Book a free consultation <span aria-hidden="true">→</span></Link>
        </section>
      ) : null}
      <button type="button" className="ge-chatbot__launcher" onClick={() => setIsOpen((current) => !current)} aria-expanded={isOpen} aria-controls="ge-chatbot-panel" aria-label="Open quick answers">
        <MessageCircle aria-hidden="true" />
        <span>Quick answers</span>
      </button>
    </div>
  );
}
