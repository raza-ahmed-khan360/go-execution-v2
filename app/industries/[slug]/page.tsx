import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "@/lib/industries";
import { FaqAccordion } from "@/components/interactive-sections";
import { JsonLd, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries[slug];
  if (!ind) return {};

  const path = `/industries/${slug}/`;
  return {
    title: { absolute: ind.seoTitle },
    description: ind.description,
    alternates: { canonical: path },
    openGraph: { title: ind.seoTitle, description: ind.description, url: path },
    twitter: { card: "summary_large_image", title: ind.seoTitle, description: ind.description },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const ind = industries[slug];

  if (!ind) {
    notFound();
  }

  const path = `/industries/${slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPage({ path, title: ind.seoTitle }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Industries", url: "/industries/" },
        { name: ind.title, url: path },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main ge-industry-detail-page">
        {/* --- CINEMATIC INDUSTRY HERO --- */}
        <section className="ge-hero ge-hero--inner ge-industry-hero">
          <div className="ge-hero__media-backdrop">
            <Image
              src={ind.image}
              alt={ind.title}
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
              <span className="ge-eyebrow ge-eyebrow--gold">{ind.eyebrow}</span>
            </div>
            <h1 className="ge-hero__title">
              {ind.title} <span className="ge-title-accent">Growth Engineering</span>
            </h1>
            <p className="ge-hero__copy">{ind.intro}</p>

            {/* Quick Stat Badges */}
            {ind.stats && ind.stats.length > 0 && (
              <div className="ge-hero-stats">
                {ind.stats.map(([metric, label], i) => (
                  <div key={i} className="ge-hero-stat-pill">
                    <strong>{metric}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="ge-hero__actions">
              <Link className="ge-button ge-button--gold ge-magnetic" href="/contact">
                <span>Book Free Industry Strategy Session</span>
              </Link>
              <a className="ge-button ge-button--outline" href="#solutions">
                <span>Explore Solutions</span>
              </a>
            </div>
          </div>
        </section>

        {/* --- CHALLENGES VS SOLUTIONS SPLIT SECTION --- */}
        <section id="solutions" className="ge-section ge-challenges-solutions-section">
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 48 }}>
              <div>
                <p className="ge-eyebrow">Strategic Analysis</p>
                <h2>Overcoming {ind.title} Market Friction</h2>
              </div>
              <p>
                We analyze your sector's distinct buyer friction points and deploy custom engineered solutions that outpace competitors.
              </p>
            </div>

            <div className="ge-grid ge-grid--2col ge-split-challenge-grid">
              {/* Sector Challenges */}
              <div className="ge-split-card ge-split-card--challenge">
                <div className="ge-split-card__header">
                  <span className="ge-split-card__badge ge-split-card__badge--red">Key Sector Obstacles</span>
                  <h3>Challenges in {ind.title}</h3>
                </div>
                <ul className="ge-split-list">
                  {ind.challenges.map((challenge, i) => (
                    <li key={i}>
                      <span className="ge-split-list__icon ge-split-list__icon--warn">✕</span>
                      <div>
                        <strong>Friction Point 0{i + 1}</strong>
                        <p>{challenge}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Go Execution Solutions */}
              <div className="ge-split-card ge-split-card--solution">
                <div className="ge-split-card__header">
                  <span className="ge-split-card__badge ge-split-card__badge--gold">Proven Growth Blueprint</span>
                  <h3>How Go Execution Solves It</h3>
                </div>
                <ul className="ge-split-list">
                  {ind.solutions.map((solution, i) => (
                    <li key={i}>
                      <span className="ge-split-list__icon ge-split-list__icon--check">✓</span>
                      <div>
                        <strong>Engineered Solution 0{i + 1}</strong>
                        <p>{solution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- RECOMMENDED SERVICES FOR INDUSTRY --- */}
        <section className="ge-section ge-industry-services-section">
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 48 }}>
              <div>
                <p className="ge-eyebrow">Tailored Capabilities</p>
                <h2>Recommended Solutions for {ind.title}</h2>
              </div>
              <p>
                Integrated services specifically configured for higher buyer acquisition and market leadership in the {ind.title} sector.
              </p>
            </div>

            <div className="ge-grid ge-grid--3col ge-industry-services-grid">
              {ind.services.map((srv) => (
                <div key={srv.slug} className="ge-industry-service-card ge-reveal">
                  <span className="ge-eyebrow ge-eyebrow--gold">Core Capability</span>
                  <h3>{srv.title}</h3>
                  <p>{srv.desc}</p>
                  <Link
                    className="ge-text-link ge-industry-service-card__link"
                    href={`/services/${srv.categorySlug}/${srv.slug}/`}
                  >
                    <span>Explore Capability Details</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CLIENT IMPACT CALLOUT --- */}
        <section className="ge-section ge-industry-impact-banner ge-dark-section">
          <div className="ge-container">
            <div className="ge-impact-card">
              <div className="ge-impact-card__header">
                <p className="ge-eyebrow ge-eyebrow--light">Accountable Results</p>
                <h2>Why {ind.title} Brands Partner With Go Execution</h2>
                <p className="ge-light-copy">
                  We don't deliver generic templates. We build custom web applications, high-converting search funnels, and data-driven ad campaigns focused strictly on your bottom-line return on investment.
                </p>
              </div>
              <div className="ge-impact-card__actions">
                <Link className="ge-button ge-button--gold ge-magnetic" href="/contact">
                  <span>Schedule Industry Growth Audit</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- INDUSTRY FAQS --- */}
        {ind.faq && ind.faq.length > 0 && (
          <section className="ge-section ge-faq">
            <div className="ge-container">
              <div className="ge-section-heading" style={{ marginBottom: 48 }}>
                <p className="ge-eyebrow">Industry Insights</p>
                <h2>Frequently Asked Questions</h2>
              </div>
              <FaqAccordion items={ind.faq as unknown as readonly [string, string][]} idPrefix={`ind-${slug}`} />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
