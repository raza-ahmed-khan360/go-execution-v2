"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/interactive-sections";

type ServiceData = {
  title: string;
  image: string;
  eyebrow: string;
  intro: string;
  overview: string;
  capabilities: string[];
  process: string[][];
  faq: string[][];
};

const serviceList = [
  { slug: "website-design-development", title: "Web Development in USA" },
  { slug: "logo-design", title: "Graphic Designing & Branding" },
  { slug: "video-animation", title: "Video Animation Services in USA" },
  { slug: "seo-services", title: "SEO Services in USA" },
  { slug: "digital-marketing", title: "Digital Marketing in USA" },
  { slug: "mobile-apps", title: "Mobile App Development in USA" },
] as const;

const techStacks: Record<string, string[]> = {
  "website-design-development": ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress", "Node.js", "GraphQL", "Vercel"],
  "logo-design": ["Figma", "Adobe Illustrator", "Photoshop", "Brand Systems", "Vector Assets"],
  "video-animation": ["After Effects", "Premiere Pro", "3D Motion", "Lottie Animation", "Sound Design"],
  "seo-services": ["Ahrefs", "Google Search Console", "SEMrush", "Screaming Frog", "Schema Markup"],
  "digital-marketing": ["Google Ads", "Meta Ads", "HubSpot", "Google Analytics 4", "Conversion Tracking"],
  "mobile-apps": ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Firebase"],
};

const metricHighlights: Record<string, Array<[string, string]>> = {
  "website-design-development": [
    ["< 1.2s", "Page Load Speed"],
    ["99.9%", "Uptime Guarantee"],
    ["100%", "Mobile Responsive"],
    ["SEO Ready", "Technical Schema"],
  ],
  "logo-design": [
    ["100%", "Vector Precision"],
    ["Complete", "Brand Guide"],
    ["Full", "Commercial Ownership"],
    ["Multi-Format", "Export Package"],
  ],
  "video-animation": [
    ["4K Ultra HD", "Render Quality"],
    ["60 FPS", "Smooth Motion"],
    ["Custom", "Sound Effects"],
    ["Web & Social", "Format Ready"],
  ],
  "seo-services": [
    ["+240%", "Organic Growth Avg."],
    ["Top 3", "Target Keywords"],
    ["100%", "Clean Technical Audit"],
    ["Monthly", "Transparent Reporting"],
  ],
  "digital-marketing": [
    ["3.8x", "Average Campaign ROAS"],
    ["Real-Time", "Conversion Tracking"],
    ["A/B Tested", "Ad Creatives"],
    ["Focused", "Lead Generation"],
  ],
  "mobile-apps": [
    ["Cross-Platform", "iOS & Android"],
    ["Fast", "Native Performance"],
    ["Secure", "Backend Integrations"],
    ["App Store", "Launch Support"],
  ],
};

export function ServiceDetailView({
  slug,
  service,
}: {
  slug: string;
  service: ServiceData;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const currentStack = techStacks[slug] || ["Custom Engineering", "Strategy", "Design", "Optimization"];
  const currentMetrics = metricHighlights[slug] || [
    ["100%", "Quality Focused"],
    ["Fast", "Turnaround Time"],
    ["Dedicated", "Project Support"],
    ["Proven", "Commercial Results"],
  ];

  const mobileTabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 820;
    if (!isMobile) return;
    const container = mobileTabsRef.current;
    if (!container) return;

    let isPaused = false;
    const autoSlide = () => {
      if (isPaused) return;
      const scrollAmount = 140;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 5) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const timer = setInterval(autoSlide, 3200);
    const handlePointer = () => {
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
      }, 5000);
    };

    container.addEventListener("pointerdown", handlePointer, { passive: true });
    return () => {
      clearInterval(timer);
      container.removeEventListener("pointerdown", handlePointer);
    };
  }, []);

  const currentServiceIndex = serviceList.findIndex((s) => s.slug === slug) + 1;

  return (
    <div className="ge-service-detail-container">
      {/* --- HERO BANNER --- */}
      <section className="ge-service-hero">
        <div className="ge-container">
          <div className="ge-service-hero__grid">
            <div className="ge-service-hero__main">
              <span className="ge-service-hero__badge">{service.eyebrow}</span>
              <h1 className="ge-service-hero__title">{service.title}</h1>
              <p className="ge-service-hero__copy">{service.intro}</p>

              <div className="ge-service-hero__actions">
                <Link className="ge-button ge-button--gold ge-magnetic" href="/contact">
                  Discuss Your Project <span aria-hidden="true">↗</span>
                </Link>
                <Link className="ge-text-link ge-text-link--light" href="#capabilities">
                  Explore Capabilities <span aria-hidden="true">↓</span>
                </Link>
              </div>

              {/* Metrics Highlights Bar */}
              <div className="ge-service-metrics">
                {currentMetrics.map(([val, label]) => (
                  <div className="ge-service-metric-item" key={label}>
                    <strong>{val}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Media Card */}
            <div className="ge-service-hero__media">
              <div className="ge-service-hero__image-card">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 991px) 100vw, 45vw"
                  priority
                />
                <div className="ge-service-hero__overlay-badge">
                  <span className="ge-service-hero__dot" />
                  <div>
                    <strong>Custom Scopes Available</strong>
                    <span>Built specifically for your business goals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING MOBILE DRAWER TRIGGER BAR */}
      <div className="ge-service-drawer-bar">
        <button
          type="button"
          className="ge-service-drawer-btn"
          onClick={() => setDrawerOpen(true)}
        >
          <span className="ge-service-drawer-btn__icon">⚡</span>
          <span className="ge-service-drawer-btn__label">Our Capabilities ({currentServiceIndex}/6)</span>
          <span className="ge-service-drawer-btn__arrow">View All ↗</span>
        </button>
      </div>

      {/* MOBILE CAPABILITIES DRAWER (BOTTOM SHEET) */}
      <div
        className={`ge-service-drawer-overlay${drawerOpen ? " is-open" : ""}`}
        onClick={() => setDrawerOpen(false)}
      >
        <div className="ge-service-drawer-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="ge-service-drawer-handle" />
          <div className="ge-service-drawer-header">
            <div>
              <p className="ge-eyebrow">Explore Services</p>
              <h3>Our Capabilities</h3>
            </div>
            <button
              type="button"
              className="ge-service-drawer-close"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close drawer"
            >
              ✕
            </button>
          </div>

          <nav className="ge-service-drawer-nav">
            {serviceList.map((item) => {
              const isActive = item.slug === slug;
              return (
                <Link
                  key={item.slug}
                  href={`/${item.slug}/`}
                  className={`ge-service-drawer-link${isActive ? " is-active" : ""}`}
                  onClick={() => setDrawerOpen(false)}
                >
                  <span>{item.title}</span>
                  <span className="ge-service-drawer-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Drawer Callout Card */}
          <div className="ge-service-drawer-cta">
            <p className="ge-eyebrow ge-eyebrow--light">NEED A CUSTOM SCOPE?</p>
            <h4>Let’s build a solution tailored to your target.</h4>
            <Link
              className="ge-button ge-button--gold"
              href="/contact"
              onClick={() => setDrawerOpen(false)}
            >
              Book Free Consultation ↗
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE SERVICE CAPSULE TABS */}
      <div className="ge-service-mobile-tabs-container">
        <div className="ge-service-mobile-tabs" ref={mobileTabsRef}>
          {serviceList.map((item) => {
            const isActive = item.slug === slug;
            return (
              <Link
                key={item.slug}
                href={`/${item.slug}/`}
                className={`ge-service-mobile-tab${isActive ? " is-active" : ""}`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="ge-section ge-service-main-content">
        <div className="ge-container">
          <div className="ge-service-layout-grid">
            {/* STICKY SIDEBAR NAVIGATION */}
            <aside className="ge-service-sidebar">
              <div className="ge-service-sidebar__inner">
                <h3 className="ge-service-sidebar__title">Our Capabilities</h3>
                <nav className="ge-service-sidebar__nav" aria-label="Services Navigation">
                  {serviceList.map((item) => {
                    const isActive = item.slug === slug;
                    return (
                      <Link
                        key={item.slug}
                        href={`/${item.slug}/`}
                        className={`ge-service-sidebar__link${isActive ? " is-active" : ""}`}
                      >
                        <span>{item.title}</span>
                        <span className="ge-service-sidebar__arrow" aria-hidden="true">
                          ↗
                        </span>
                      </Link>
                    );
                  })}
                </nav>

                {/* Sidebar Callout Card */}
                <div className="ge-service-sidebar__cta">
                  <p className="ge-eyebrow ge-eyebrow--light">Need a custom scope?</p>
                  <h4>Let’s build a solution tailored to your target.</h4>
                  <Link className="ge-button ge-button--gold" href="/contact">
                    Book Free Consultation ↗
                  </Link>
                </div>
              </div>
            </aside>

            {/* SERVICE BODY CONTENT */}
            <div className="ge-service-body">
              {/* SECTION: OVERVIEW */}
              <article className="ge-service-card-block ge-reveal">
                <p className="ge-eyebrow">Strategic Approach</p>
                <h2>Built around outcomes—not just deliverables</h2>
                <p className="ge-service-body__lead">{service.overview}</p>
              </article>

              {/* SECTION: TECH STACK */}
              <article className="ge-service-card-block ge-reveal">
                <p className="ge-eyebrow">Technology & Tools</p>
                <h2>Modern Engineering Stack</h2>
                <p className="ge-service-body__sub">
                  We leverage battle-tested technologies engineered for maximum performance, security, and scalable growth.
                </p>
                <div className="ge-tech-stack-grid">
                  {currentStack.map((tech) => (
                    <div className="ge-tech-tag" key={tech}>
                      <span className="ge-tech-tag__dot" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION: CAPABILITIES */}
              <article className="ge-service-card-block ge-reveal" id="capabilities">
                <p className="ge-eyebrow">What We Offer</p>
                <h2>Focused Capabilities & Solutions</h2>
                <div className="ge-capabilities-list-grid">
                  {service.capabilities.map((cap, index) => (
                    <div className="ge-capability-feature-card" key={cap}>
                      <span className="ge-capability-feature-card__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3>{cap}</h3>
                      <p>Custom engineered with precision, responsive design, and conversion optimization.</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION: EXECUTION PROCESS */}
              <article className="ge-service-card-block ge-reveal">
                <p className="ge-eyebrow">How We Execute</p>
                <h2>Disciplined 4-Stage Workflow</h2>
                <div className="ge-workflow-vertical-timeline">
                  {service.process.map(([stageTitle, stageCopy], index) => (
                    <div className="ge-workflow-step-card" key={stageTitle}>
                      <div className="ge-workflow-step-card__badge">
                        <span>Stage 0{index + 1}</span>
                      </div>
                      <div className="ge-workflow-step-card__content">
                        <h3>{stageTitle}</h3>
                        <p>{stageCopy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
              <article className="ge-service-card-block ge-reveal">
                <p className="ge-eyebrow">Got Questions?</p>
                <h2>Frequently Asked Questions</h2>
                <div className="ge-service-faq-wrapper">
                  <FaqAccordion
                    items={service.faq.map(([q, a]) => [q, a] as const)}
                    idPrefix={`service-${slug}-faq`}
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
