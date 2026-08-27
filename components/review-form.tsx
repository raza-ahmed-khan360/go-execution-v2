"use client";

import { useState } from "react";

export function ReviewForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      role: formData.get("role"),
      quote: formData.get("quote"),
      metric: formData.get("metric"),
      metricLabel: formData.get("metricLabel"),
    };

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit review");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
        <h3 style={{ fontSize: "24px", color: "#0d1b2a", marginBottom: "8px" }}>Thank You!</h3>
        <p style={{ color: "#475569" }}>Your review has been submitted and is pending approval.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <label htmlFor="name" style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#0d1b2a", marginBottom: "6px" }}>Full Name *</label>
        <input required type="text" id="name" name="name" placeholder="John Doe" style={{ width: "100%", padding: "12px", border: "1px solid #cbd5e1", borderRadius: "8px", fontSize: "15px" }} />
      </div>

      <div>
        <label htmlFor="role" style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#0d1b2a", marginBottom: "6px" }}>Role & Company *</label>
        <input required type="text" id="role" name="role" placeholder="CEO, TechCorp" style={{ width: "100%", padding: "12px", border: "1px solid #cbd5e1", borderRadius: "8px", fontSize: "15px" }} />
      </div>

      <div>
        <label htmlFor="quote" style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#0d1b2a", marginBottom: "6px" }}>Your Review *</label>
        <textarea required id="quote" name="quote" rows={4} placeholder="Working with Go Execution was..." style={{ width: "100%", padding: "12px", border: "1px solid #cbd5e1", borderRadius: "8px", fontSize: "15px", fontFamily: "inherit", resize: "vertical" }} />
      </div>

      <div style={{ padding: "20px", background: "#f1f5f9", borderRadius: "8px" }}>
        <p style={{ fontSize: "13px", color: "#475569", marginBottom: "12px", fontWeight: 600 }}>Optional: Highlight a key metric achieved</p>
        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{ flex: 1 }}>
            <input type="text" name="metric" placeholder="e.g. 150%" style={{ width: "100%", padding: "10px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "14px" }} />
          </div>
          <div style={{ flex: 2 }}>
            <input type="text" name="metricLabel" placeholder="e.g. Increase in leads" style={{ width: "100%", padding: "10px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "14px" }} />
          </div>
        </div>
      </div>

      {status === "error" && (
        <div style={{ padding: "12px", background: "#fee2e2", color: "#b91c1c", borderRadius: "8px", fontSize: "14px" }}>
          {errorMessage}
        </div>
      )}

      <button 
        type="submit" 
        disabled={status === "loading"}
        style={{ 
          background: "#b8860b", 
          color: "#fff", 
          padding: "16px", 
          border: "none", 
          borderRadius: "8px", 
          fontSize: "16px", 
          fontWeight: 700, 
          cursor: status === "loading" ? "not-allowed" : "pointer",
          opacity: status === "loading" ? 0.7 : 1
        }}
      >
        {status === "loading" ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}
