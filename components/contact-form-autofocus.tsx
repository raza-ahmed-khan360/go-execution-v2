"use client";

import { useEffect } from "react";

export function ContactFormAutofocus() {
  useEffect(() => {
    const scrollToForm = () => {
      const form = document.getElementById("contact-form");
      if (!form) return;
      const headerOffset = 104;
      const top = Math.max(0, form.getBoundingClientRect().top + window.scrollY - headerOffset);
      window.scrollTo({ top, behavior: "auto" });
    };

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scrollToForm);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return null;
}
