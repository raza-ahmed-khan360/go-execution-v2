import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, getSubServicesForCategory, serviceCategories } from "@/lib/services";
import { JsonLd, buildService, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";
import { BrandMediaMark } from "@/components/brand-media-mark";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(serviceCategories).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: catSlug } = await params;
  const cat = getCategory(catSlug);
  if (!cat) return {};

  const path = `/services/${cat.slug}/`;
  return {
    title: { absolute: cat.seoTitle },
    description: cat.description,
    alternates: { canonical: path },
    openGraph: { title: cat.seoTitle, description: cat.description, url: path },
    twitter: { card: "summary_large_image", title: cat.seoTitle, description: cat.description },
  };
}

export default async function CategoryHubPage({ params }: Props) {
  const { category: catSlug } = await params;
  const cat = getCategory(catSlug);

  if (!cat) {
    notFound();
  }

  const path = `/services/${cat.slug}/`;
  const subServicesList = getSubServicesForCategory(cat.slug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildService({ path, name: cat.title, description: cat.intro }),
      buildWebPage({ path, title: cat.title }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services/" },
        { name: cat.title, url: path },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main ge-service-category-hub-page">
        {/* --- CINEMATIC CATEGORY HERO --- */}
        <section className="ge-hero ge-hero--inner ge-industry-hero">
          <div className="ge-hero__media-backdrop">
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              priority
              sizes="100vw"
              quality={85}
              className="ge-hero__bg-img"
            />
            <div className="ge-hero__media-overlay" />
          </div>

          <div className="ge-container ge-hero__content">
            <div className="ge-hero__badge-wrap">
              <span className="ge-eyebrow ge-eyebrow--gold">{cat.eyebrow}</span>
            </div>

            <h1 className="ge-hero__title">
              {cat.title} <span className="ge-title-accent">For US Businesses</span>
            </h1>

            <p className="ge-hero__copy">{cat.intro}</p>

            {/* Metrics Bar */}
            <div className="ge-hero-stats">
              <div className="ge-hero-stat-pill">
                <strong>Sub-1s Speed</strong>
                <span>Core Web Vitals Optimized</span>
              </div>
              <div className="ge-hero-stat-pill">
                <strong>100% Custom</strong>
                <span>Zero Code Bloat</span>
              </div>
              <div className="ge-hero-stat-pill">
                <strong>{subServicesList.length} Specialized</strong>
                <span>Service Architectures</span>
              </div>
            </div>

            <div className="ge-hero__actions">
              <Link className="ge-button ge-button--gold ge-magnetic" href="/contact">
                <span>Book Free Strategy Consultation</span>
              </Link>
              <a className="ge-button ge-button--outline" href="#sub-services">
                <span>Explore Specialized Services</span>
              </a>
            </div>
          </div>
        </section>

        {/* --- CAPABILITIES SPLIT SECTION --- */}
        <section className="ge-section ge-service-capabilities-section">
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 44 }}>
              <div>
                <p className="ge-eyebrow">Category Architecture</p>
                <h2>Core Capabilities & Engineering Standards</h2>
              </div>
              <p>{cat.description}</p>
            </div>

            <div className="ge-grid ge-grid--2col ge-split-challenge-grid">
              {/* Category Philosophy */}
              <div className="ge-split-card ge-split-card--challenge">
                <div className="ge-split-card__header">
                  <span className="ge-split-card__badge ge-split-card__badge--gold">Commercial Objective</span>
                  <h3>Why Our {cat.title} Wins</h3>
                </div>
                <p style={{ color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.7, fontSize: "1.02rem" }}>
                  We replace slow, generic templates with high-performance engineered platforms. Every component is built for rapid search engine indexing, sub-second loading, and maximum visitor lead conversion.
                </p>
              </div>

              {/* Deliverables List */}
              <div className="ge-split-card ge-split-card--solution">
                <div className="ge-split-card__header">
                  <span className="ge-split-card__badge ge-split-card__badge--gold">Deliverables Blueprint</span>
                  <h3>What We Build & Deliver</h3>
                </div>
                <ul className="ge-split-list">
                  {cat.capabilities.map((cap, i) => (
                    <li key={i}>
                      <span className="ge-split-list__icon ge-split-list__icon--check">✓</span>
                      <div>
                        <strong>Capability 0{i + 1}</strong>
                        <p>{cap}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- SUB-SERVICES SHOWCASE LIST (HORIZONTAL FEATURE ROWS V3) --- */}
        <section id="sub-services" className="ge-section ge-sub-services-bento-section">
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 40 }}>
              <div>
                <p className="ge-eyebrow">Specialized Capabilities</p>
                <h2>Dedicated {cat.title} Architectures</h2>
              </div>
              <p>
                Explore our specialized service modules below. Each solution is configured for maximum performance and conversion.
              </p>
            </div>

            <div className="ge-services-showcase-list">
              {subServicesList.map((sub, idx) => (
                <article key={sub.slug} className="ge-service-feature-row ge-reveal">
                  {/* Left Media Box */}
                  <div className="ge-service-feature-row__media">
                    <Image
                      src={sub.image}
                      alt={sub.title}
                      fill
                      sizes="(max-width: 860px) 100vw, 320px"
                      quality={85}
                      className="ge-service-feature-row__img"
                    />
                    <div className="ge-service-feature-row__media-shade" />
                    <BrandMediaMark />
                    <span className="ge-service-feature-row__num">0{idx + 1}</span>
                  </div>

                  {/* Right Content Column */}
                  <div className="ge-service-feature-row__body">
                    <span className="ge-service-feature-row__eyebrow">✦ {sub.eyebrow}</span>
                    
                    <h3 className="ge-service-feature-row__title">
                      <Link href={`/services/${cat.slug}/${sub.slug}/`}>{sub.title}</Link>
                    </h3>

                    <p className="ge-service-feature-row__desc">{sub.description}</p>

                    {/* Capability Tags */}
                    <div className="ge-service-feature-row__tags">
                      {sub.capabilities.slice(0, 3).map((cap, i) => (
                        <span key={i} className="ge-feature-tag">
                          ⚡ {cap}
                        </span>
                      ))}
                    </div>

                    {/* Capsule Action Button */}
                    <div className="ge-service-feature-row__action">
                      <Link className="ge-btn-capsule ge-magnetic" href={`/services/${cat.slug}/${sub.slug}/`}>
                        <span>Explore {sub.title} Architecture</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- EXECUTION PROCESS --- */}
        <section className="ge-section ge-dark-section">
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 44 }}>
              <div>
                <p className="ge-eyebrow ge-eyebrow--light">Execution Methodology</p>
                <h2 style={{ color: "#ffffff" }}>
                  Our 4-Stage <span className="ge-title-accent">Delivery Blueprint</span>
                </h2>
              </div>
              <p className="ge-light-copy">
                A proven, transparent engineering process ensuring zero technical debt and high-converting commercial results.
              </p>
            </div>

            <div className="ge-process-media-strip">
              <Image
                src={cat.image}
                alt={`${cat.title} team delivery process`}
                fill
                sizes="(max-width: 900px) 100vw, 1200px"
                quality={85}
              />
              <div className="ge-process-media-strip__shade" />
              <BrandMediaMark />
              <p>People, process and technology aligned from discovery through launch.</p>
            </div>

            <div className="ge-grid ge-grid--4col" style={{ marginTop: 24 }}>
              <div className="ge-process-step-v5">
                <div className="ge-process-step-v5__top">
                  <span className="ge-process-step-v5__num">01</span>
                  <span className="ge-process-step-v5__badge">PHASE ONE</span>
                </div>
                <h3 className="ge-process-step-v5__title">Discovery & Architecture</h3>
                <p className="ge-process-step-v5__desc">Analyzing commercial goals, user search intent, and technical specs.</p>
                <ul className="ge-process-step-v5__bullets">
                  <li>Scope & Architecture Plan</li>
                  <li>Competitor Benchmark</li>
                </ul>
              </div>

              <div className="ge-process-step-v5">
                <div className="ge-process-step-v5__top">
                  <span className="ge-process-step-v5__num">02</span>
                  <span className="ge-process-step-v5__badge">PHASE TWO</span>
                </div>
                <h3 className="ge-process-step-v5__title">UX & Wireframing</h3>
                <p className="ge-process-step-v5__desc">Designing interactive prototypes built for visitor conversion performance.</p>
                <ul className="ge-process-step-v5__bullets">
                  <li>Figma Design System</li>
                  <li>Conversion Funnel Test</li>
                </ul>
              </div>

              <div className="ge-process-step-v5">
                <div className="ge-process-step-v5__top">
                  <span className="ge-process-step-v5__num">03</span>
                  <span className="ge-process-step-v5__badge">PHASE THREE</span>
                </div>
                <h3 className="ge-process-step-v5__title">Clean Code Engineering</h3>
                <p className="ge-process-step-v5__desc">Developing lightweight Next.js 16, React 19, and TypeScript code.</p>
                <ul className="ge-process-step-v5__bullets">
                  <li>Zero Code Bloat</li>
                  <li>Schema & API Sync</li>
                </ul>
              </div>

              <div className="ge-process-step-v5">
                <div className="ge-process-step-v5__top">
                  <span className="ge-process-step-v5__num">04</span>
                  <span className="ge-process-step-v5__badge">PHASE FOUR</span>
                </div>
                <h3 className="ge-process-step-v5__title">QA, Speed & Launch</h3>
                <p className="ge-process-step-v5__desc">Rigorous Core Web Vitals audits, security hardening, and live launch.</p>
                <ul className="ge-process-step-v5__bullets">
                  <li>Sub-1s LCP Speed Audit</li>
                  <li>SEO Indexing Guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
