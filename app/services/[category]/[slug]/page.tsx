import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, getSubService, allSubServices } from "@/lib/services";
import { blogPosts, formatBlogDate } from "@/lib/blog-posts";
import { FaqAccordion } from "@/components/interactive-sections";
import { JsonLd, buildService, buildWebPage, buildBreadcrumbList, buildFAQPage , buildOrganization, buildWebSite } from "@/lib/seo/jsonld";

type Props = { params: Promise<{ category: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return allSubServices.map((sub) => ({
    category: sub.categorySlug,
    slug: sub.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: catSlug, slug } = await params;
  const sub = getSubService(slug);
  if (!sub || sub.categorySlug !== catSlug) return {};

  const path = `/services/${catSlug}/${slug}/`;
  return {
    title: { absolute: sub.seoTitle },
    description: sub.description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: "Go Execution", images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],  title: sub.seoTitle, description: sub.description, url: path },
    twitter: { card: "summary_large_image", title: sub.seoTitle, description: sub.description },
  };
}

export default async function SubServicePage({ params }: Props) {
  const { category: catSlug, slug } = await params;
  const sub = getSubService(slug);
  const cat = getCategory(catSlug);

  if (!sub || sub.categorySlug !== catSlug || !cat) {
    notFound();
  }

  const path = `/services/${catSlug}/${slug}/`;
  const schema: { "@context": string; "@graph": any[] } = {
    "@context": "https://schema.org",
    "@graph": [
        buildOrganization(),
        buildWebSite(),
      buildService({ path, name: sub.title, description: sub.intro }),
      buildWebPage({ path, title: sub.title }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services/" },
        { name: cat.title, url: `/services/${cat.slug}/` },
        { name: sub.title, url: path },
      ]),
    ],
  };

  if (sub.faq && sub.faq.length > 0) {
    schema["@graph"].push(
      buildFAQPage({ path: `/services/${cat.slug}/${sub.slug}/` }, sub.faq.map(([q, a]) => ({ question: q, answer: a })))
    );
  }

  const related = sub.relatedServices
    ? sub.relatedServices.map((sSlug) => getSubService(sSlug)).filter(Boolean)
    : [];
  const questionnaire = catSlug === "web-development"
    ? { href: "/web-questionnaire/", label: "Start Website Questionnaire" }
    : slug === "logo-design"
      ? { href: "/logo-questionnaire/", label: "Start Logo Questionnaire" }
      : { href: "/contact/", label: "Request Free Custom Proposal" };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main ge-sub-service-detail-page">
        {/* --- CINEMATIC SUB-SERVICE HERO --- */}
        <section className="ge-hero ge-hero--inner ge-industry-hero">
          <div className="ge-hero__media-backdrop">
            <Image
              src={sub.image}
              alt={sub.title}
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
              <span className="ge-eyebrow ge-eyebrow--gold">{sub.eyebrow}</span>
            </div>

            <h1 className="ge-hero__title">
              {sub.title} <span className="ge-title-accent">For Growth Brands</span>
            </h1>

            <p className="ge-hero__copy">{sub.intro}</p>

            {/* Quick Performance Stat Badges */}
            <div className="ge-hero-stats">
              <div className="ge-hero-stat-pill">
                <strong>Sub-1s Speed</strong>
                <span>Core Web Vitals Optimized</span>
              </div>
              <div className="ge-hero-stat-pill">
                <strong>Zero Code Bloat</strong>
                <span>Custom Architecture</span>
              </div>
              <div className="ge-hero-stat-pill">
                <strong>Top 1% Standards</strong>
                <span>Security & Scalability</span>
              </div>
            </div>

            <div className="ge-hero__actions">
              <Link className="ge-button ge-button--gold ge-magnetic" href={questionnaire.href}>
                <span>{questionnaire.label}</span>
              </Link>
              <a className="ge-button ge-button--outline" href="#overview">
                <span>Explore Service Details</span>
              </a>
            </div>
          </div>
        </section>

        {/* --- SERVICE OVERVIEW & CAPABILITIES SPLIT SECTION --- */}
        <section id="overview" className="ge-section ge-sub-service-overview-section">
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 44 }}>
              <div>
                <p className="ge-eyebrow">Service Engineering</p>
                <h2>High-Impact Commercial Capabilities</h2>
              </div>
              <p>{sub.overview}</p>
            </div>

            <div className="ge-grid ge-grid--2col ge-split-challenge-grid">
              {/* Commercial Objective */}
              <div className="ge-split-card ge-split-card--challenge">
                <div className="ge-split-card__header">
                  <span className="ge-split-card__badge ge-split-card__badge--gold">Commercial Objective</span>
                  <h3>Why Choose Go Execution for {sub.title}</h3>
                </div>
                <p style={{ color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.7, fontSize: "1.02rem", marginBottom: 20 }}>
                  Generic templates limit brand scalability and cause slow load times that hurt conversions. Our {sub.title} services combine sub-second engineering, conversion rate psychology, and robust security to turn visitors into buyers.
                </p>
                <div style={{ marginTop: "auto" }}>
                  <Link className="ge-button ge-button--gold ge-magnetic" href={questionnaire.href}>
                    <span>{questionnaire.label}</span>
                  </Link>
                </div>
              </div>

              {/* Core Capabilities List */}
              <div className="ge-split-card ge-split-card--solution">
                <div className="ge-split-card__header">
                  <span className="ge-split-card__badge ge-split-card__badge--gold">Engineered Capabilities</span>
                  <h3>Core Deliverables Included</h3>
                </div>
                <ul className="ge-split-list">
                  {sub.capabilities.map((cap, i) => (
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

        {/* --- EXECUTION METHODOLOGY PROCESS --- */}
        <section className="ge-section ge-sub-service-process-section ge-dark-section">
          <div className="ge-container">
            <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 44 }}>
              <div>
                <p className="ge-eyebrow ge-eyebrow--light">Execution Methodology</p>
                <h2 style={{ color: "#ffffff" }}>
                  How We Deliver <span className="ge-title-accent">{sub.title}</span>
                </h2>
              </div>
              <p className="ge-light-copy">
                A transparent, step-by-step process designed to guarantee high-performance execution.
              </p>
            </div>

            <div className="ge-process-media-strip">
              <Image
                src={sub.image}
                alt={`${sub.title} team execution process`}
                fill
                sizes="(max-width: 900px) 100vw, 1200px"
                quality={85}
              />
              <div className="ge-process-media-strip__shade" />
              
              <p>Senior specialists, clear milestones and measurable digital systems.</p>
            </div>

            <div className="ge-grid ge-grid--4col" style={{ marginTop: 24 }}>
              {sub.process.map(([title, desc], i) => (
                <div key={i} className="ge-process-step-v5">
                  <div className="ge-process-step-v5__top">
                    <span className="ge-process-step-v5__num">0{i + 1}</span>
                    <span className="ge-process-step-v5__badge">PHASE 0{i + 1}</span>
                  </div>
                  <h3 className="ge-process-step-v5__title">{title}</h3>
                  <p className="ge-process-step-v5__desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- RELATED SOLUTIONS --- */}
        {related.length > 0 && (
          <section className="ge-section ge-related-solutions-section">
            <div className="ge-container">
              <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 48 }}>
                <div>
                  <p className="ge-eyebrow">Complementary Solutions</p>
                  <h2>Explore Related Services</h2>
                </div>
                <p>Integrate related growth services to maximize your website performance and customer acquisition.</p>
              </div>

              <div className="ge-grid ge-grid--3col ge-industry-dark-grid">
                {related.map((rel) => rel && (
                  <article key={rel.slug} className="ge-dark-bento-card ge-reveal">
                    <div className="ge-dark-bento-card__media">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        quality={85}
                        className="ge-dark-bento-card__img"
                      />
                      <div className="ge-dark-bento-card__shade" />
                      
                      <div className="ge-dark-bento-card__header-bar">
                        <span className="ge-dark-bento-card__num-pill">RELATED SOLUTION</span>
                      </div>
                    </div>
                    <div className="ge-dark-bento-card__body">
                      <span className="ge-eyebrow ge-eyebrow--gold">{rel.eyebrow}</span>
                      <h3 className="ge-dark-bento-card__title">
                        <Link href={`/services/${rel.categorySlug}/${rel.slug}/`}>{rel.title}</Link>
                      </h3>
                      <p className="ge-dark-bento-card__desc">{rel.description}</p>
                      <div className="ge-dark-bento-card__action">
                        <Link
                          className="ge-button ge-button--gold ge-button--full ge-magnetic"
                          href={`/services/${rel.categorySlug}/${rel.slug}/`}
                        >
                          <span>Explore Solution</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* --- RELATED INSIGHTS & ARTICLES (INTERNAL LINKING) --- */}
        {(() => {
          const relatedCategorySlug = catSlug === "seo" ? "seo-services" : catSlug;
          const curatedBlogs = sub.relatedBlogSlugs
            ? sub.relatedBlogSlugs
                .map((s) => blogPosts.find((p) => p.slug === s))
                .filter((p): p is typeof blogPosts[0] => Boolean(p))
            : [];
          const fallbackBlogs = blogPosts.filter((p) => p.categorySlug === relatedCategorySlug);
          const combinedBlogs = [...curatedBlogs, ...fallbackBlogs];
          const relatedBlogs = combinedBlogs
            .filter((post, idx, self) => self.findIndex((p) => p.slug === post.slug) === idx)
            .slice(0, 3);
          if (relatedBlogs.length === 0) return null;
          return (
            <section className="ge-section ge-related-posts ge-bg-light">
              <div className="ge-container ge-container--narrow">
                <div className="ge-section-heading" style={{ marginBottom: 48 }}>
                  <p className="ge-eyebrow">Industry Insights</p>
                  <h2>Related Articles & Resources</h2>
                </div>
                <div className="ge-blog-grid">
                  {relatedBlogs.map((rel) => (
                    <article key={rel.slug} className="ge-blog-card">
                      {rel.image ? (
                        <Link href={`/${rel.slug}/`} className="ge-blog-card__image">
                          <Image src={rel.image} alt={rel.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
                        </Link>
                      ) : (
                        <Link href={`/${rel.slug}/`} className="ge-blog-card__image">
                          <span>{String(1).padStart(2, "0")}</span>
                        </Link>
                      )}
                      <p className="ge-eyebrow">{rel.category}</p>
                      <h3><Link href={`/${rel.slug}/`}>{rel.title}</Link></h3>
                      <p>{rel.excerpt}</p>
                      <div>
                        <time dateTime={rel.date}>{formatBlogDate(rel.date)}</time>
                        <Link href={`/${rel.slug}/`}>Read more</Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* --- SERVICE FAQS --- */}
        {sub.faq && sub.faq.length > 0 && (
          <section className="ge-section ge-faq">
            <div className="ge-container">
              <div className="ge-section-heading" style={{ marginBottom: 48 }}>
                <p className="ge-eyebrow">Service FAQs</p>
                <h2>Frequently Asked Questions</h2>
              </div>
              <FaqAccordion items={sub.faq.map(([q, a]) => ({ question: q, answer: a }))} idPrefix={`sub-${slug}`} />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
