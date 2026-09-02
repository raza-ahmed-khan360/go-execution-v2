import type { Metadata } from "next";
import Link from "next/link";
import { industryList } from "@/lib/industries";
import { IndustryInteractiveHub } from "@/components/industry-interactive-hub";
import { JsonLd, buildWebPage, buildBreadcrumbList , buildOrganization, buildWebSite } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Industries We Scale | Go Execution",
  description:
    "Explore tailored digital marketing, custom web development, and SEO growth solutions engineered for key industries across the United States.",
  alternates: { canonical: "/industries/" },
  openGraph: { type: "website", siteName: "Go Execution", images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }], 
    title: "Industries We Scale | Go Execution",
    description:
      "Explore tailored digital marketing, custom web development, and SEO growth solutions engineered for key industries across the United States.",
    url: "/industries/",
  },
};

export default function IndustriesIndexPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
        buildOrganization(),
        buildWebSite(),
      buildWebPage({ path: "/industries/", title: "Industries We Scale | Go Execution" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Industries", url: "/industries/" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main ge-industries-page">
        {/* --- STUNNING DARK HERO BANNER --- */}
        <section className="ge-hero ge-hero--inner ge-industries-hero-new">
          <div className="ge-hero__bg-grid" aria-hidden="true" />
          <div className="ge-hero__bg-glow" aria-hidden="true" />

          <div className="ge-container">
            <div className="ge-hero__pill-tag">
              <span className="ge-hero__pill-dot" />
              <span>Sector-Specific Growth Engineering</span>
            </div>

            <h1 className="ge-hero__title ge-hero__title--large">
              Industries We Scale <br />
              <span className="ge-title-accent">Across the United States</span>
            </h1>

            <p className="ge-hero__copy">
              Generic marketing produces generic results. We combine deep sector domain knowledge, custom web engineering, and targeted performance advertising to eliminate friction and scale revenue across major industries.
            </p>

            {/* Quick Metrics Bar */}
            <div className="ge-hero-metrics-bar">
              <div className="ge-metric-pill">
                <strong>7 Core Sectors</strong>
                <span>Tailored Architectures</span>
              </div>
              <div className="ge-metric-pill">
                <strong>Sub-1s Speeds</strong>
                <span>Next.js & Shopify</span>
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
          </div>
        </section>

        {/* --- INTERACTIVE BENTO FILTERABLE GRID --- */}
        <section className="ge-section ge-industries-hub-section">
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 40 }}>
              <div>
                <p className="ge-eyebrow">Select Your Sector</p>
                <h2>Explore Sector Growth Architectures</h2>
              </div>
              <p>
                Filter by industry to explore custom technical setups, lead generation engines, and verified commercial growth strategies.
              </p>
            </div>

            <IndustryInteractiveHub industries={industryList} />
          </div>
        </section>

        {/* --- SECTOR COMPARISON MATRIX --- */}
        <section className="ge-section ge-sector-matrix-section">
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 48 }}>
              <div>
                <p className="ge-eyebrow">Sector Performance Matrix</p>
                <h2>Tailored Tech & Growth Blueprint</h2>
              </div>
              <p>
                How Go Execution configures technology and marketing assets for distinct business sectors.
              </p>
            </div>

            <div className="ge-matrix-wrapper">
              <table className="ge-matrix-table">
                <thead>
                  <tr>
                    <th>Industry Sector</th>
                    <th>Primary Digital Objective</th>
                    <th>Core Tech Stack</th>
                    <th>Growth Impact</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {industryList.map((ind) => (
                    <tr key={ind.slug}>
                      <td>
                        <strong className="ge-matrix-sector-title">{ind.title}</strong>
                      </td>
                      <td>{ind.intro.slice(0, 75)}...</td>
                      <td>
                        <span className="ge-matrix-tech-badge">Next.js / React</span>
                      </td>
                      <td>
                        <span className="ge-matrix-impact-tag">{ind.stats ? ind.stats[0][0] : "+200% Lead Growth"}</span>
                      </td>
                      <td>
                        <Link className="ge-text-link ge-matrix-link" href={`/industries/${ind.slug}/`}>
                          <span>View Solutions</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- WHY SECTOR ALIGNMENT MATTERS --- */}
        <section className="ge-section ge-sector-pillars-section ge-dark-section">
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide">
              <div>
                <p className="ge-eyebrow ge-eyebrow--light">The Go Execution Standard</p>
                <h2>Built for Sector Dominance</h2>
              </div>
              <p className="ge-light-copy">
                We align design aesthetics, search intent keywords, and conversion funnels to match exact buyer behaviors in your sector.
              </p>
            </div>

            <div className="ge-grid ge-grid--4col ge-pillars-grid">
              <div className="ge-pillar-card">
                <span className="ge-pillar-num">01</span>
                <h3>High-Intent Buyer UX</h3>
                <p>Layouts and copy structured around the exact questions your sector prospects ask before buying.</p>
              </div>
              <div className="ge-pillar-card">
                <span className="ge-pillar-num">02</span>
                <h3>Sub-Second Speed</h3>
                <p>Lightning-fast Next.js engineering that ranks higher on Google and lowers customer acquisition costs.</p>
              </div>
              <div className="ge-pillar-card">
                <span className="ge-pillar-num">03</span>
                <h3>Compliance Ready</h3>
                <p>IDX, HIPAA, or B2B enterprise security protocols integrated into your platform from day one.</p>
              </div>
              <div className="ge-pillar-card">
                <span className="ge-pillar-num">04</span>
                <h3>ROAS Accountability</h3>
                <p>Direct tracking linking ad campaign dollars to actual phone calls, forms, and closed sales.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
