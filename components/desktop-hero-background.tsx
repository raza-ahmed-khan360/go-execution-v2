"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const cards = [
  ["top: -8%; left: -12%", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=520&q=65&fit=crop"],
  ["bottom: -12%; left: 5%", "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=520&q=65&fit=crop"],
  ["top: -10%; right: -8%", "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=520&q=65&fit=crop"],
  ["bottom: -8%; right: -5%", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=520&q=65&fit=crop"],
  ["top: 30%; left: 42%", "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=520&q=65&fit=crop"],
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
      // Match the broad, weighty cursor parallax used by the Outrbuzz hero.
      // The low interpolation value keeps the layer catching up after the
      // pointer stops instead of snapping directly to its destination.
      currentX += (targetX - currentX) * 0.075;
      currentY += (targetY - currentY) * 0.075;
      layer.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      const stillMoving = Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2;
      frame = stillMoving ? window.requestAnimationFrame(render) : 0;
    };
    const move = (event: PointerEvent) => {
      targetX = (event.clientX - window.innerWidth / 2) * -1.5;
      targetY = (event.clientY - window.innerHeight / 2) * -1.5;
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
    <div ref={layerRef} className="ge-hero__image-layer ge-hero__image-layer--interactive" aria-hidden="true">
      {cards.map(([position, source], index) => (
        <div
          className="ge-hero__image-card ge-hero__image-card--floating"
          style={{
            ...Object.fromEntries(position.split("; ").map((rule) => rule.split(": "))),
            animationDelay: `${index * -1.7}s`,
          }}
          key={source}
        >
          <Image src={source} alt="" fill sizes="460px" quality={70} />
        </div>
      ))}
    </div>
  );
}
