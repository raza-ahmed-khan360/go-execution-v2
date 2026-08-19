"use client";

import { useEffect } from "react";

export function AutoScrollTo({ targetId, delay = 500 }: { targetId: string; delay?: number }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [targetId, delay]);

  return null;
}
