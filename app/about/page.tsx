import { site } from "@/lib/seo/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/interactive-sections";
import { JsonLd, buildAboutPage, buildBreadcrumbList , buildOrganization, buildWebSite } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: { absolute: "About Our Digital Growth Agency | Go Execution" },
  description:
    "Learn how Go Execution combines custom web development, technical SEO, performance marketing, and brand strategy to help US businesses scale revenue.",
  alternates: { canonical: "/about/" },
  openGraph: { type: "website", siteName: "Go Execution", images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],  url: "/about/" },
};

const principles = [
  {
    num: "01",
    eyebrow: "COMMERCIAL STRATEGY",
    title: "Clarity Before Code",
    desc: "We define commercial growth goals, audience search intent, and conversion metrics before recommending technology, channels, or design.",
    icon: "🎯",
  },
  {
    num: "02",
    eyebrow: "SUB-SECOND SPEED",
    title: "Crafted With Purpose",
    desc: "Every component, layout, and line of code is engineered to load in under 1 second and turn site visitors into paying clients.",
    icon: "⚡",
  },
  {
    num: "03",
    eyebrow: "DIRECT ACCOUNTABILITY",
    title: "Transparent Ownership",
    desc: "Dedicated senior lead communication, milestone-based delivery, and clear reporting keep your digital projects moving rapidly.",
    icon: "🤝",
  },
  {
    num: "04",
    eyebrow: "DATA DRIVEN",
    title: "Evidence Over Ego",
    desc: "We continuously optimize campaigns and web platforms using real user data, Core Web Vitals audits, and conversion performance.",
    icon: "📊",
  },
];

const aboutFaqs = [
  { question: "What sets Go Execution apart from generic web agencies?", answer: "We do not use slow, bloated pre-made templates. We engineer custom high-performance web platforms (Next.js, React, custom WordPress) integrated with technical SEO graphs and high-ROAS marketing funnels under one roof." },
  { question: "Do you only work with enterprise clients?", answer: "No. We partner with ambitious small and medium-sized US businesses ready to scale. Our strategies adapt to your budget while maintaining enterprise-level execution." },
  { question: "Where is your team located?", answer: "We are headquartered in Dallas, Texas. Our entire team operates within the US, ensuring seamless communication, cultural alignment, and legal compliance for American businesses." },
  { question: "Who will manage my project?", answer: "You will be assigned a dedicated Account Strategist based in the US. They will act as your single point of contact, coordinating our internal engineering, design, and marketing teams." }
];

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
        buildOrganization(),
        buildWebSite(),
      buildAboutPage({ path: "/about/", title: "About Go Execution | US Digital Growth Agency Team" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "About", url: "/about/" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main ge-about-light-page" style={{ background: "#ffffff" }}>
        {/* --- LIGHT MODERN AGENCY HERO --- */}
        <section className="ge-hero ge-hero--inner" style={{ background: "#ffffff", color: "#0d1b2a", paddingTop: 160, paddingBottom: 80 }}>
          <div className="ge-container">
            <div className="ge-hero__badge-wrap" style={{ background: "#f8fafc", border: "1px solid rgba(229, 193, 88, 0.4)" }}>
              <span className="ge-eyebrow" style={{ color: "#0d1b2a", margin: 0 }}>● US DIGITAL GROWTH &amp; WEB ENGINEERING AGENCY</span>
            </div>

            <h1 className="ge-hero__title" style={{ color: "#0d1b2a", margin: "24px 0" }}>
              We Engineer Digital Growth <br />
              <span className="ge-title-accent">For Ambitious US Brands</span>
            </h1>

            <p className="ge-hero__copy" style={{ color: "#475569", maxWidth: 720 }}>
              Go Execution is an elite multidisciplinary digital agency uniting custom Next.js web engineering, technical SEO, performance advertising, and luxury brand design for businesses that expect progress.
            </p>

            {/* Stat Pills Grid */}
            <div className="ge-hero-stats" style={{ marginTop: 36, marginBottom: 40 }}>
              <div className="ge-hero-stat-pill" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <strong style={{ color: "#0d1b2a" }}>250+ Projects</strong>
                <span style={{ color: "#64748b" }}>Delivered for US Brands</span>
              </div>
              <div className="ge-hero-stat-pill" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <strong style={{ color: "#0d1b2a" }}>Sub-1s Speeds</strong>
                <span style={{ color: "#64748b" }}>Next.js 16 Standard</span>
              </div>
              <div className="ge-hero-stat-pill" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <strong style={{ color: "#0d1b2a" }}>3.8x Avg ROAS</strong>
                <span style={{ color: "#64748b" }}>Performance Marketing</span>
              </div>
              <div className="ge-hero-stat-pill" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <strong style={{ color: "#0d1b2a" }}>Dallas, Texas</strong>
                <span style={{ color: "#64748b" }}>Agency Headquarters</span>
              </div>
            </div>

            <div className="ge-hero__actions" style={{ justifyContent: "flex-start", gap: 24 }}>
              <Link className="ge-button ge-button--gold ge-magnetic" href="/contact">
                <span>Book Strategy Consultation</span>
              </Link>
              <a className="ge-button ge-button--outline" href="#our-story">
                <span>Explore Agency Story</span>
              </a>
            </div>
          </div>
        </section>

        {/* --- HERO MEDIA SHOWCASE BANNER --- */}
        <section className="ge-section" style={{ padding: "0 0 60px" }}>
          <div className="ge-container">
            <div style={{ position: "relative", width: "100%", height: 420, borderRadius: 28, overflow: "hidden", boxShadow: "0 20px 60px rgba(13, 27, 42, 0.08)" }}>
              <Image
                src="/assets/images/generated/team-workspace.jpg"
                alt="Go Execution Digital Agency Team"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                quality={85}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
        </section>

        {/* --- OUR STORY & PHILOSOPHY (LIGHT BENTO SPLIT) --- */}
        <section id="our-story" className="ge-section" style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 44 }}>
              <div>
                <p className="ge-eyebrow">Our Agency Story</p>
                <h2>Built for Businesses That Expect Revenue Growth</h2>
              </div>
              <p style={{ color: "#475569" }}>
                Go Execution was founded on a simple realization: most businesses are let down by agencies that deliver either pretty designs with slow code, or technical code with zero conversion psychology.
              </p>
            </div>

            <div className="ge-grid ge-grid--2col ge-split-challenge-grid">
              {/* Mission Statement */}
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 24, padding: 36, boxShadow: "0 12px 36px rgba(13, 27, 42, 0.04)" }}>
                <div style={{ marginBottom: 20 }}>
                  <span style={{ background: "#f8fafc", border: "1px solid rgba(229, 193, 88, 0.5)", color: "#0d1b2a", fontSize: "0.78rem", fontWeight: 700, padding: "4px 14px", borderRadius: 20 }}>Our Point of View</span>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0d1b2a", marginTop: 14, marginBottom: 12 }}>Creative Engineering With Commercial Purpose</h3>
                </div>
                <p style={{ color: "#334155", lineHeight: 1.7, fontSize: "1rem", marginBottom: 16 }}>
                  We bring senior designers, full-stack developers, search strategists, and performance marketers together under one disciplined execution process.
                </p>
                <p style={{ color: "#64748b", lineHeight: 1.65, fontSize: "0.95rem" }}>
                  We value thoughtful strategy, transparent communication, and clean follow-through. That means zero code bloat, clear project ownership, and platforms designed to outrank competitors in the real world.
                </p>
              </div>

              {/* Agency Guarantees */}
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 24, padding: 36, boxShadow: "0 12px 36px rgba(13, 27, 42, 0.04)" }}>
                <div style={{ marginBottom: 20 }}>
                  <span style={{ background: "rgba(229, 193, 88, 0.12)", color: "#b8860b", fontSize: "0.78rem", fontWeight: 700, padding: "4px 14px", borderRadius: 20 }}>The Go Execution Standard</span>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0d1b2a", marginTop: 14, marginBottom: 12 }}>Our Core Commitments</h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    ["100% Custom Engineering", "Zero pre-made template bloat or slow plugins."],
                    ["Sub-Second Speed Guarantee", "Core Web Vitals optimized for top Google rankings."],
                    ["Revenue & ROAS Accountability", "Campaigns and web funnels connected to real leads and sales."],
                    ["Direct Senior Lead Accessibility", "Direct communication with senior engineers and strategists."],
                  ].map(([title, desc]) => (
                    <li key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <span style={{ color: "#d4af37", fontWeight: 700, fontSize: "1.1rem" }}>✓</span>
                      <div>
                        <strong style={{ color: "#0d1b2a", fontSize: "0.98rem", display: "block" }}>{title}</strong>
                        <p style={{ color: "#64748b", fontSize: "0.88rem", margin: "2px 0 0" }}>{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- CORE PRINCIPLES (LIGHT CARD GRID) --- */}
        <section className="ge-section" style={{ background: "#ffffff" }}>
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 44 }}>
              <div>
                <p className="ge-eyebrow">How We Work</p>
                <h2 style={{ color: "#0d1b2a" }}>
                  Our 4 Core <span className="ge-title-accent">Operating Principles</span>
                </h2>
              </div>
              <p style={{ color: "#64748b" }}>
                The foundational values that guide every line of code, design system, and marketing campaign we launch.
              </p>
            </div>

            <div className="ge-grid ge-grid--4col">
              {principles.map((item) => (
                <article key={item.num} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 20, padding: 28, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#d4af37", fontFamily: "var(--ge-font-heading)" }}>{item.num}</span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", color: "#64748b", background: "#ffffff", padding: "4px 10px", borderRadius: 12, border: "1px solid #e2e8f0" }}>{item.eyebrow}</span>
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0d1b2a", margin: "4px 0" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- HEADQUARTERS & CAPABILITIES SHOWCASE --- */}
        <section className="ge-section" style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 44 }}>
              <div>
                <p className="ge-eyebrow">Agency Infrastructure</p>
                <h2 style={{ color: "#0d1b2a" }}>Dallas, Texas Headquarters &amp; Execution Powerhouse</h2>
              </div>
              <p style={{ color: "#475569" }}>
                Strategically headquartered in Dallas, Texas, we serve clients across North America with responsive communication and disciplined project delivery.
              </p>
            </div>

            <div className="ge-grid ge-grid--2col ge-split-challenge-grid">
              {/* HQ Details Card */}
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 24, padding: 36, boxShadow: "0 12px 36px rgba(13, 27, 42, 0.04)" }}>
                <div style={{ marginBottom: 20 }}>
                  <span style={{ background: "rgba(229, 193, 88, 0.12)", color: "#b8860b", fontSize: "0.78rem", fontWeight: 700, padding: "4px 14px", borderRadius: 20 }}>Dallas Headquarters</span>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0d1b2a", marginTop: 14, marginBottom: 12 }}>Office &amp; Contact Details</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14, color: "#475569", fontSize: "0.95rem" }}>
                  <p>
                    <strong style={{ color: "#0d1b2a" }}>📍 Address:</strong><br />
                    13345 N Central Expy, Suite#203<br />
                    Dallas, Texas 75243, United States
                  </p>
                  <p>
                    <strong style={{ color: "#0d1b2a" }}>📞 Phone:</strong> <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} style={{ color: "#b8860b", fontWeight: 600 }}>{site.phone}</a> / <a href="https://wa.me/17738653770" target="_blank" rel="noreferrer" style={{ color: "#b8860b", fontWeight: 600 }}>+1 (773) 865-3770 (WhatsApp)</a>
                  </p>
                  <p>
                    <strong style={{ color: "#0d1b2a" }}>✉️ Email:</strong> <a href={`mailto:${site.email}`} style={{ color: "#b8860b", fontWeight: 600 }}>{site.email}</a>
                  </p>
                </div>
              </div>

              {/* Capabilities Stack */}
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 24, padding: 36, boxShadow: "0 12px 36px rgba(13, 27, 42, 0.04)" }}>
                <div style={{ marginBottom: 20 }}>
                  <span style={{ background: "rgba(229, 193, 88, 0.12)", color: "#b8860b", fontSize: "0.78rem", fontWeight: 700, padding: "4px 14px", borderRadius: 20 }}>Full-Stack Spectrum</span>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0d1b2a", marginTop: 14, marginBottom: 12 }}>Our Multidisciplinary Expertise</h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    ["Web Engineering & Next.js 16", "Custom React applications, headless Shopify, and WordPress platforms."],
                    ["Technical SEO & Organic Rankings", "Schema graphs, crawl budget remediation, and local search dominance."],
                    ["Performance Advertising & ROAS", "Google Ads, Meta Ads, and conversion funnel optimization."],
                    ["Luxury Brand Design & Motion", "Brand identity systems, UI/UX design, and 2D/3D explainer videos."],
                  ].map(([title, desc]) => (
                    <li key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <span style={{ color: "#d4af37", fontWeight: 700, fontSize: "1.1rem" }}>⚡</span>
                      <div>
                        <strong style={{ color: "#0d1b2a", fontSize: "0.98rem", display: "block" }}>{title}</strong>
                        <p style={{ color: "#64748b", fontSize: "0.88rem", margin: "2px 0 0" }}>{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT FAQS --- */}
        <section className="ge-section ge-faq">
          <div className="ge-container">
            <div className="ge-section-heading" style={{ marginBottom: 48 }}>
              <p className="ge-eyebrow">Agency Insights</p>
              <h2>Frequently Asked Questions</h2>
            </div>
            <FaqAccordion items={aboutFaqs} idPrefix="about" />
          </div>
        </section>
      </main>
    </>
  );
}
