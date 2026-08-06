"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Service = {
  slug: string;
  title: string;
  copy: string;
  number: string;
  image: string;
};

export function ServicesCarousel({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % services.length), 3200);
    return () => window.clearInterval(timer);
  }, [paused, services.length]);

  const move = (direction: number) => {
    setActive((current) => (current + direction + services.length) % services.length);
  };

  return (
    <div
      className="ge-services-3d"
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Digital services"
    >
      <div className="ge-services-3d__stage">
        {services.map((service, index) => {
          let slot = (index - active + services.length) % services.length;
          if (slot > services.length / 2) slot -= services.length;
          const isActive = slot === 0;
          const isVisible = Math.abs(slot) <= 2;
          const isHovered = hovered === index;

          return (
            <a
              className={`ge-services-3d__card ge-services-3d__card--slot-${slot}${isHovered ? " is-hovered" : ""}`}
              href={`/${service.slug}/`}
              aria-current={isActive ? "true" : undefined}
              aria-hidden={!isVisible ? true : undefined}
              tabIndex={isVisible ? 0 : -1}
              onMouseEnter={() => {
                if (!isVisible) return;
                setHovered(index);
                setPaused(true);
              }}
              onMouseLeave={() => {
                setHovered((current) => (current === index ? null : current));
                setPaused(false);
              }}
              onFocus={() => isVisible && setHovered(index)}
              onBlur={() => setHovered((current) => (current === index ? null : current))}
              key={service.slug}
            >
              <Image src={service.image} alt={service.title} fill sizes="(max-width: 700px) 72vw, (max-width: 1100px) 44vw, 32vw" />
              <span className="ge-services-3d__shade" aria-hidden="true" />
              <span className="ge-services-3d__number">{service.number}</span>
              <span className="ge-services-3d__content">
                <strong>{service.title}</strong>
                <span>{service.copy}</span>
                <b>Explore Service <i aria-hidden="true">→</i></b>
              </span>
            </a>
          );
        })}
      </div>

      <div className="ge-services-3d__controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous service">←</button>
        <div className="ge-services-3d__dots" aria-label={`Service ${active + 1} of ${services.length}`}>
          {services.map((service, index) => (
            <button
              type="button"
              className={index === active ? "is-active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Show ${service.title}`}
              aria-current={index === active ? "true" : undefined}
              key={service.slug}
            />
          ))}
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Next service">→</button>
      </div>
    </div>
  );
}
