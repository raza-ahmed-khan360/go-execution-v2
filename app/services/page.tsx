import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { allServiceCategories, allSubServices } from "@/lib/services";
import { JsonLd, buildWebPage, buildBreadcrumbList , buildOrganization, buildWebSite } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Digital Marketing & Web Design Services | Go Execution" },
  description:
    "Explore Go Execution services for US businesses, including web design, SEO, digital marketing, branding, mobile app development, and video animation.",
  alternates: { canonical: "/services/" },
  openGraph: { type: "website", siteName: "Go Execution", images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],  url: "/services/" },
};

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
        buildOrganization(),
        buildWebSite(),
      buildWebPage({ path: "/services/", title: "Digital Marketing & Web Design Services | Go Execution" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services/" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main ge-services-index-page">
        {/* --- CINEMATIC HERO --- */}
        <section className="ge-hero ge-hero--inner ge-services-hero-new">
          <div className="ge-hero__bg-grid" aria-hidden="true" />
          <div className="ge-hero__bg-glow" aria-hidden="true" />

          <div className="ge-container">
            <div className="ge-hero__pill-tag">
              <span className="ge-hero__pill-dot" />
              <span>360° Commercial Growth Capabilities</span>
            </div>

            <h1 className="ge-hero__title ge-hero__title--large">
              Engineered Services Built <br />
              <span className="ge-title-accent">For Market Dominance</span>
            </h1>

            <p className="ge-hero__copy">
              We unite custom web development, search engine optimization, performance advertising, and brand design into a single accountable growth engine for US businesses.
            </p>

            {/* Quick Metrics Bar */}
            <div className="ge-hero-metrics-bar">
              <div className="ge-metric-pill">
                <strong>6 Core Hubs</strong>
                <span>Complete Digital Spectrum</span>
              </div>
              <div className="ge-metric-pill">
                <strong>Sub-1s Speeds</strong>
                <span>Next.js & React</span>
              </div>
              <div className="ge-metric-pill">
                <strong>3.8x Avg ROAS</strong>
                <span>Performance Marketing</span>
              </div>
              <div className="ge-metric-pill">
                <strong>100% Custom</strong>
                <span>Zero Generic Templates</span>
              </div>
            </div>

            <div className="ge-hero__actions" style={{ marginTop: 32 }}>
              <Link className="ge-button ge-button--gold ge-magnetic" href="/contact">
                <span>Book Strategy Consultation</span>
              </Link>
            </div>
          </div>
        </section>

        {/* --- CATEGORY CARDS GRID --- */}
        <section className="ge-section ge-services-category-grid-section">
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 48 }}>
              <div>
                <p className="ge-eyebrow">Service Capabilities</p>
                <h2>Full-Stack Digital Solutions</h2>
              </div>
              <p>
                Select a service category to explore dedicated architectures, specialized sub-services, and growth strategies.
              </p>
            </div>

            <div className="ge-grid ge-grid--3col ge-industry-dark-grid">
              {allServiceCategories.map((cat, idx) => {
                const subServices = allSubServices.filter((s) => s.categorySlug === cat.slug);
                return (
                  <article key={cat.slug} className="ge-dark-bento-card ge-reveal">
                    {/* Media Banner */}
                    <div className="ge-dark-bento-card__media">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                        className="ge-dark-bento-card__img"
                      />
                      <div className="ge-dark-bento-card__shade" />
                      
                      <div className="ge-dark-bento-card__header-bar">
                        <span className="ge-dark-bento-card__num-pill">
                          0{idx + 1} &bull; CATEGORY HUB
                        </span>
                        <span className="ge-dark-bento-card__stat-pill">
                          {subServices.length} Services
                        </span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="ge-dark-bento-card__body">
                      <div className="ge-dark-bento-card__eyebrow-wrap">
                        <span className="ge-eyebrow ge-eyebrow--gold">{cat.eyebrow}</span>
                      </div>

                      <h3 className="ge-dark-bento-card__title">
                        <Link href={`/services/${cat.slug}/`}>{cat.title}</Link>
                      </h3>

                      <p className="ge-dark-bento-card__desc">{cat.description}</p>

                      {/* Sub-Service Link Chips */}
                      <div className="ge-dark-bento-card__chips">
                        {subServices.slice(0, 4).map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/services/${cat.slug}/${sub.slug}/`}
                            className="ge-dark-chip"
                          >
                            <span className="ge-chip-icon">⚡</span>
                            {sub.title}
                          </Link>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="ge-dark-bento-card__action">
                        <Link
                          className="ge-button ge-button--gold ge-button--full ge-magnetic"
                          href={`/services/${cat.slug}/`}
                        >
                          <span>Explore {cat.title}</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- AGENCY STANDARD PILLARS --- */}
        <section className="ge-section ge-dark-section">
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide">
              <div>
                <p className="ge-eyebrow ge-eyebrow--light">The Go Execution Standard</p>
                <h2>Built for Conversion & Revenue</h2>
              </div>
              <p className="ge-light-copy">
                We combine code quality, search visibility, and conversion design to ensure your digital investments generate verifiable return on investment.
              </p>
            </div>

            <div className="ge-grid ge-grid--4col ge-pillars-grid">
              <div className="ge-pillar-card">
                <span className="ge-pillar-num">01</span>
                <h3>Custom Code Engineering</h3>
                <p>Zero template bloat. Next.js and React architectures built for sub-second speeds.</p>
              </div>
              <div className="ge-pillar-card">
                <span className="ge-pillar-num">02</span>
                <h3>Search Engine Dominance</h3>
                <p>Technical search infrastructure designed to capture high-intent commercial buyers.</p>
              </div>
              <div className="ge-pillar-card">
                <span className="ge-pillar-num">03</span>
                <h3>Conversion UX Design</h3>
                <p>Psychological sales funnels engineered to convert clicks into phone calls and leads.</p>
              </div>
              <div className="ge-pillar-card">
                <span className="ge-pillar-num">04</span>
                <h3>Strict ROAS Accountability</h3>
                <p>Continuous monitoring and data analytics linking campaign dollars to closed deals.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
