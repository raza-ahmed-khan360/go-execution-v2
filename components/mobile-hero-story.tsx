"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type MobileHeroStoryProps = {
  eyebrow?: string;
  title?: string;
  titleAccent?: string;
  copy?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "home" | "inner";
};

export function MobileHeroStory({
  eyebrow = "#1 Digital Marketing Agency in USA",
  title = "Web Development in USA.",
  titleAccent = "Go Execution Drives Real Growth.",
  copy = "Go Execution is a premier digital marketing agency in USA. We integrate high-performing web development in USA, data-driven SEO, and strategic marketing in USA to scale ambitious brands.",
  primaryLabel = "Book Free Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Our Work",
  secondaryHref = "#work",
  variant = "home",
}: MobileHeroStoryProps = {}) {
  const storyRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const story = storyRef.current;
    if (!story) return;

    const mobile = window.matchMedia("(max-width: 1024px)");
    story.style.setProperty("--ge-mobile-story", "0");

    let frame = 0;
    const update = () => {
      frame = 0;
      const travel = Math.max(1, story.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -story.getBoundingClientRect().top / travel));
      story.style.setProperty("--ge-mobile-story", progress.toFixed(4));
    };
    const requestUpdate = () => {
      if (!mobile.matches) return;
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const sync = () => {
      if (frame) cancelAnimationFrame(frame);
      if (!mobile.matches) return;
      update();
    };

    sync();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    mobile.addEventListener("change", sync);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      mobile.removeEventListener("change", sync);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <section ref={storyRef} className={`ge-mobile-story ge-mobile-story--${variant}`} aria-label={`${eyebrow} introduction`}>
      <div className="ge-mobile-story__hero">
        <div className="ge-mobile-machine" aria-hidden="true">
          <div className="ge-mobile-machine__orbit ge-mobile-machine__orbit--outer" />
          <div className="ge-mobile-machine__orbit ge-mobile-machine__orbit--inner" />
          <span className="ge-mobile-machine__piece ge-mobile-machine__arc-a" />
          <span className="ge-mobile-machine__piece ge-mobile-machine__arc-b" />
          <span className="ge-mobile-machine__piece ge-mobile-machine__check-a" />
          <span className="ge-mobile-machine__piece ge-mobile-machine__check-b" />
          <span className="ge-mobile-machine__piece ge-mobile-machine__e-a" />
          <span className="ge-mobile-machine__piece ge-mobile-machine__e-b" />
          <div className="ge-mobile-machine__glow" />
          <div className="ge-mobile-machine__final"><Image src="/assets/images/ce-icon.png" alt="" width={512} height={512} sizes="320px" /></div>
          <div className="ge-mobile-machine__label"><span>Strategy</span><i /><strong>Execution</strong></div>
        </div>

        <svg className="ge-mobile-story__trail" viewBox="0 0 390 844" preserveAspectRatio="none" aria-hidden="true">
          <path d="M346 -18 C285 92 366 153 312 239 C260 323 348 369 286 451 C221 538 315 605 211 696 C166 735 132 795 150 880" />
        </svg>

        <div className="ge-mobile-story__copy">
          <p className="ge-mobile-story__kicker">{eyebrow}</p>
          <h1><span>{title}</span>{titleAccent ? <> {titleAccent}</> : null}</h1>
          <p className="ge-mobile-story__lead">{copy}</p>
          <div className="ge-mobile-story__actions">
            <Link className="ge-mobile-story__button" href={primaryHref}>{primaryLabel} <b aria-hidden="true">↗</b></Link>
            <Link className="ge-mobile-story__link" href={secondaryHref}>{secondaryLabel} <b aria-hidden="true">↓</b></Link>
          </div>
        </div>

        <div className="ge-mobile-story__scroll" aria-hidden="true"><span>Scroll to execute</span><i /></div>
        <div className="ge-mobile-story__chapter" aria-hidden="true"><span>01</span><b>Strategy</b><i /><b>Execution</b></div>
        <div className="ge-mobile-story__exit" aria-hidden="true" />
      </div>
    </section>
  );
}
