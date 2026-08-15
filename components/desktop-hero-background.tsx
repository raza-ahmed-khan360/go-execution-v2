"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const cards = [
  {
    id: "branding-design",
    source: "/assets/images/generated/branding-design.jpg",
    style: { top: "4%", left: "2%", width: "390px", height: "365px" },
  },
  {
    id: "web-dev",
    source: "/assets/images/generated/web-dev.jpg",
    style: { top: "3%", left: "36%", width: "355px", height: "415px" },
  },
  {
    id: "video-motion",
    source: "/assets/images/generated/video-motion.jpg",
    style: { top: "5%", left: "69%", width: "375px", height: "350px" },
  },
  {
    id: "seo-analytics",
    source: "/assets/images/generated/seo-analytics.jpg",
    style: { top: "36%", left: "18%", width: "365px", height: "395px" },
  },
  {
    id: "tech-saas",
    source: "/assets/images/generated/tech-saas.jpg",
    style: { top: "34%", left: "51%", width: "410px", height: "360px" },
  },
  {
    id: "mobile-apps",
    source: "/assets/images/generated/mobile-apps.jpg",
    style: { top: "37%", right: "2%", width: "360px", height: "390px" },
  },
  {
    id: "real-estate",
    source: "/assets/images/generated/real-estate.jpg",
    style: { top: "68%", left: "3%", width: "385px", height: "370px" },
  },
  {
    id: "digital-mktg",
    source: "/assets/images/generated/digital-mktg.jpg",
    style: { top: "66%", left: "37%", width: "350px", height: "420px" },
  },
  {
    id: "retail-ecommerce",
    source: "/assets/images/generated/retail-ecommerce.jpg",
    style: { top: "69%", left: "70%", width: "400px", height: "355px" },
  },
] as const;

export function DesktopHeroBackground() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const desktop = window.matchMedia("(min-width: 1025px) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      // Smooth responsive spring interpolation
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      layer.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      const stillMoving = Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1;
      frame = stillMoving ? window.requestAnimationFrame(render) : 0;
    };

    const move = (event: PointerEvent) => {
      // High-sensitivity dynamic parallax response across 200vw x 200vh canvas
      const normX = (event.clientX / window.innerWidth - 0.5) * 2;
      const normY = (event.clientY / window.innerHeight - 0.5) * 2;
      targetX = normX * -1800;
      targetY = normY * -1300;
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const reset = () => {
      targetX = 0;
      targetY = 0;
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const stop = () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", reset);
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      layer.style.transform = "translate3d(0, 0, 0)";
    };

    const sync = () => {
      stop();
      if (!desktop.matches || reduced.matches) return;
      window.addEventListener("pointermove", move, { passive: true });
      document.documentElement.addEventListener("mouseleave", reset);
    };

    sync();
    desktop.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    return () => {
      stop();
      desktop.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div ref={layerRef} className="ge-hero__image-layer" aria-hidden="true">
      {cards.map((card) => (
        <div
          key={card.id}
          className="ge-hero__image-card"
          style={card.style as React.CSSProperties}
        >
          <Image src={card.source} alt="" fill sizes="(max-width: 1400px) 380px, 450px" quality={85} priority />
        </div>
      ))}
    </div>
  );
}
