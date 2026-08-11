"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const interactiveSelector = "a, button, input, textarea, select, label, .ge-interactive, .ge-project, .ge-service-card, .ge-faq-card, .ge-price-card, .ge-growth-card, .ge-hero__image-card, [role='button'], [tabindex]";

export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".ge-reveal"));
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-counter]"));

    reveals.forEach((element, index) => {
      element.style.setProperty("--ge-reveal-order", String(index % 4));
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      reveals.forEach((element) => element.classList.add("is-visible"));
      counters.forEach((element) => {
        element.textContent = `${element.dataset.counter ?? "0"}${element.dataset.suffix ?? ""}`;
      });
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -5% 0px" },
      );
      reveals.forEach((element) => revealObserver.observe(element));

      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target as HTMLElement;
            const target = Number(element.dataset.counter ?? 0);
            const suffix = element.dataset.suffix ?? "";
            const startedAt = performance.now();
            const duration = 1100;

            const update = (now: number) => {
              const progress = Math.min((now - startedAt) / duration, 1);
              const eased = 1 - (1 - progress) ** 3;
              element.textContent = `${Math.round(target * eased)}${suffix}`;
              if (progress < 1) requestAnimationFrame(update);
            };

            requestAnimationFrame(update);
            counterObserver.unobserve(element);
          });
        },
        { threshold: 0.5 },
      );
      counters.forEach((element) => counterObserver.observe(element));
    }

    // --- LUXURY CUSTOM CURSOR EFFECT ---
    const cursor = document.querySelector<HTMLElement>(".ge-custom-cursor");
    if (!cursor) return undefined;

    let frame = 0;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let started = false;
    let magneticTarget: HTMLElement | null = null;

    const renderCursor = () => {
      frame = 0;
      cursorX += (mouseX - cursorX) * 0.25;
      cursorY += (mouseY - cursorY) * 0.25;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    };

    const onPointerMove = (event: MouseEvent | PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      const target = event.target instanceof Element ? event.target : null;
      cursor.classList.toggle("ge-cursor-hover", Boolean(target?.closest(interactiveSelector)));

      const nextMagneticTarget = target?.closest<HTMLElement>(".ge-magnetic") ?? null;
      if (magneticTarget && magneticTarget !== nextMagneticTarget) magneticTarget.style.transform = "";
      magneticTarget = nextMagneticTarget;
      if (magneticTarget) {
        const rect = magneticTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.14;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.14;
        magneticTarget.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      if (!started) {
        cursorX = mouseX;
        cursorY = mouseY;
        started = true;
        cursor.style.opacity = "1";
      }
      if (!frame) frame = requestAnimationFrame(renderCursor);
    };

    const onPointerLeave = () => {
      cursor.style.opacity = "0";
      if (magneticTarget) magneticTarget.style.transform = "";
      magneticTarget = null;
    };
    const onPointerEnter = () => {
      if (started) cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);
    document.documentElement.addEventListener("mouseenter", onPointerEnter);

    return () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      document.documentElement.removeEventListener("mouseenter", onPointerEnter);
      if (frame) cancelAnimationFrame(frame);
      if (magneticTarget) magneticTarget.style.transform = "";
    };
  }, [pathname]);

  return null;
}

