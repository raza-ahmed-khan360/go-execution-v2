"use client";

import { type FormEvent, useState } from "react";

export function ContactForm({ services }: { services: string[] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "success">("idle");
  const [message, setMessage] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus("error");
      setMessage("Please complete all required fields with valid information.");
      form.reportValidity();
      return;
    }

    setStatus("sending");
    setMessage("Sending your consultation request…");

    try {
      const formData = new FormData(form);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          message: formData.get("message"),
          botcheck: formData.get("botcheck"),
        }),
      });
      const data = await response.json().catch(() => null) as { success?: boolean; message?: string } | null;

      if (!response.ok || !data?.success) throw new Error(data?.message ?? "Email delivery failed");

      form.reset();
      setStatus("success");
      setMessage(data.message ?? "Thank you—your request has been sent. We’ll be in touch shortly.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We couldn’t send your request right now. Please try again shortly.");
    }
  };

  return (
    <form className="ge-form ge-reveal" noValidate onSubmit={submit} aria-busy={status === "sending"}>
      <input className="ge-form__botcheck" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="ge-form__row">
        <label>Name<input name="name" type="text" autoComplete="name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      </div>
      <div className="ge-form__row">
        <label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label>
        <label>Service Interested In<select name="service" required defaultValue=""><option value="">Select a service</option>{services.map((service) => <option value={service} key={service}>{service}</option>)}</select></label>
      </div>
      <label>Message<textarea name="message" rows={5} required /></label>
      <button className="ge-button ge-button--navy" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request Consultation"}<span aria-hidden="true">↗</span></button>
      {status !== "idle" && (
        <p className={`ge-form__status${status === "error" ? " is-error" : ""}${status === "success" ? " is-success" : ""}`} role="status" aria-live="polite">
          {message}
        </p>
      )}
    </form>
  );
}
