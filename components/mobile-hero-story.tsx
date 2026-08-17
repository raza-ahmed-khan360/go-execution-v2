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
  eyebrow = "FULL-SERVICE DIGITAL MARKETING AGENCY",
  title = "Full-Service Digital",
  titleAccent = "Marketing Agency in USA",
  copy = "Go Execution helps US businesses turn digital traffic into measurable growth through conversion-focused web development, SEO, paid advertising, content, branding and digital strategy.",
  primaryLabel = "Get a Free Growth Audit",
  primaryHref = "/contact",
  secondaryLabel = "Explore Our Services",
  secondaryHref = "/services",
  variant = "home",
}: MobileHeroStoryProps = {}) {
  const storyRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const story = storyRef.current;
    if (!story) return;

    const mobile = window.matchMedia("(max-width: 1024px)");
    let frame = 0;
    let targetProgress = 0;
    let currentProgress = 0;
    let cachedOffsetTop = 0;
    let cachedTravel = 1;

    const measure = () => {
      const rect = story.getBoundingClientRect();
      cachedOffsetTop = rect.top + window.scrollY;
      cachedTravel = Math.max(1, story.offsetHeight - window.innerHeight);
    };

    const render = () => {
      // Butter-smooth spring interpolation on mobile scroll
      currentProgress += (targetProgress - currentProgress) * 0.2;
      if (Math.abs(targetProgress - currentProgress) < 0.001) {
        currentProgress = targetProgress;
      }
      story.style.setProperty("--ge-mobile-story", currentProgress.toFixed(4));
      if (currentProgress !== targetProgress) {
        frame = window.requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };

    const handleScroll = () => {
      if (!mobile.matches) return;
      const scrollY = window.scrollY;
      const progress = Math.min(1, Math.max(0, (scrollY - cachedOffsetTop) / cachedTravel));
      targetProgress = progress;
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const sync = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      if (!mobile.matches) return;
      measure();
      handleScroll();
    };

    sync();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", sync, { passive: true });
    mobile.addEventListener("change", sync);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", sync);
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
          <div className="ge-mobile-machine__final"><Image src="/assets/images/ce-icon.png" alt="" width={512} height={512} sizes="320px" priority /></div>
          <div className="ge-mobile-machine__label"><span>Strategy</span><i /><strong>Execution</strong></div>
        </div>

        <svg className="ge-mobile-story__trail" viewBox="0 0 390 844" preserveAspectRatio="none" aria-hidden="true">
          <path d="M346 -18 C285 92 366 153 312 239 C260 323 348 369 286 451 C221 538 315 605 211 696 C166 735 132 795 150 880" />
        </svg>

        <div className="ge-mobile-story__copy">
          <p className="ge-mobile-story__kicker">{eyebrow}</p>
          <div className="ge-mobile-story__title" role="heading" aria-level={1}>
            <span>{title}</span>
            {titleAccent ? <span className="ge-hero__title-accent">{titleAccent}</span> : null}
          </div>
          <p className="ge-mobile-story__lead">{copy}</p>
          <div className="ge-mobile-story__actions">
            <Link className="ge-mobile-story__button" href={primaryHref}>{primaryLabel}</Link>
            <Link className="ge-mobile-story__link" href={secondaryHref}>{secondaryLabel}</Link>
          </div>
        </div>

        <div className="ge-mobile-story__scroll" aria-hidden="true"><span>Scroll to execute</span><i /></div>
        <div className="ge-mobile-story__chapter" aria-hidden="true"><span>01</span><b>Strategy</b><i /><b>Execution</b></div>
        <div className="ge-mobile-story__exit" aria-hidden="true" />
      </div>
    </section>
  );
}
