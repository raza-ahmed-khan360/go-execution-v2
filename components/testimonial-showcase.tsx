"use client";

import { useEffect, useState } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  metric: string;
  metricLabel: string;
};

const AUTOPLAY_DELAY = 3500;

export function TestimonialShowcase({ items }: { items: readonly Testimonial[] }) {
  const [active, setActive] = useState(0);
  const item = items[active];

  useEffect(() => {
    if (items.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % items.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearTimeout(timer);
  }, [active, items.length]);

  if (!item) return null;

  const show = (index: number) => setActive((index + items.length) % items.length);

  return (
    <section
      className="ge-testimonial-showcase"
      aria-labelledby="testimonial-showcase-title"
    >
      <div className="ge-testimonial-showcase__grid" aria-hidden="true" />
      <div className="ge-testimonial-showcase__orbit" aria-hidden="true" />
      <div className="ge-container">
        <header className="ge-testimonial-showcase__heading ge-reveal">
          <div>
            <p className="ge-eyebrow ge-eyebrow--light">Client perspective</p>
            <h2 id="testimonial-showcase-title">Proof lives in<br />the outcome.</h2>
          </div>
          <p>Real partnerships, measurable momentum, and work that keeps performing after launch.</p>
        </header>

        <div className="ge-testimonial-showcase__stage ge-reveal">
          <aside className="ge-testimonial-showcase__impact" key={`impact-${active}`}>
            <span>Measured impact</span>
            <strong>{item.metric}</strong>
            <p>{item.metricLabel}</p>
          </aside>

          <blockquote className="ge-testimonial-showcase__quote" key={`quote-${active}`}>
            <span className="ge-testimonial-showcase__quote-mark" aria-hidden="true">“</span>
            <p>{item.quote}</p>
            <footer>
              <span className="ge-testimonial-showcase__avatar" aria-hidden="true">{item.name.charAt(0)}</span>
              <span className="ge-testimonial-showcase__author">
                <strong>{item.name}</strong>
                <small>{item.role}</small>
              </span>
              <span className="ge-testimonial-showcase__verified">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 12 2 2 4-5" /><circle cx="12" cy="12" r="9" /></svg>
                Verified client
              </span>
            </footer>
          </blockquote>

          <div className="ge-testimonial-showcase__controls">
            <button type="button" onClick={() => show(active - 1)} aria-label="Previous testimonial">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button type="button" onClick={() => show(active + 1)} aria-label="Next testimonial">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
          <span className="ge-testimonial-showcase__timer" key={`timer-${active}`} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
