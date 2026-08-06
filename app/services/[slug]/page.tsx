import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/interactive-sections";
import { ConsultationCta, PageHero } from "@/components/page-hero";
import { JsonLd, buildService, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";
import content from "@/lib/wp-content.json";

type Service = {
  title: string;
  image: string;
  eyebrow: string;
  intro: string;
  overview: string;
  capabilities: string[];
  process: string[][];
  faq: string[][];
};

const services = content.services as Record<string, Service>;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};

  return {
    title: { absolute: service.title },
    description: service.intro,
    alternates: { canonical: `/services/${slug}/` },
    openGraph: { url: `/services/${slug}/` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildService({ path: `/services/${slug}/`, name: service.title, description: service.intro }),
      buildWebPage({ path: `/services/${slug}/`, title: service.title }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services/" },
        { name: service.title, url: `/services/${slug}/` },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main">
      <PageHero eyebrow={service.eyebrow} title={service.title} copy={service.intro} />
      <section className="ge-section ge-service-overview"><div className="ge-container ge-split ge-split--balanced"><div className="ge-section-heading ge-reveal"><p className="ge-eyebrow">Service overview</p><h2>Built around the outcome—not just the deliverable.</h2></div><div className="ge-service-overview__copy ge-reveal"><p>{service.overview}</p><Link className="ge-text-link ge-text-link--dark" href="/contact">Discuss your project<span aria-hidden="true">↗</span></Link></div></div></section>
      <section className="ge-section ge-capabilities"><div className="ge-container"><div className="ge-section-heading ge-reveal"><p className="ge-eyebrow ge-eyebrow--light">What we offer</p><h2>Focused capabilities for a stronger result.</h2></div><div className="ge-capability-grid">{service.capabilities.map((capability, index) => <article className="ge-capability ge-reveal" key={capability}><span>{String(index + 1).padStart(2, "0")}</span><h3>{capability}</h3></article>)}</div></div></section>
      <section className="ge-section ge-process"><div className="ge-container"><div className="ge-section-heading ge-section-heading--wide ge-reveal"><div><p className="ge-eyebrow">How we execute</p><h2>A clear process keeps ambitious work moving.</h2></div><p>Every stage has a purpose, an owner, and a clear decision before the next stage begins.</p></div><div className="ge-process__grid">{service.process.map(([title, copy], index) => <article className="ge-process-step ge-reveal" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
      <section className="ge-section ge-faq"><div className="ge-container ge-split ge-split--balanced"><div className="ge-section-heading ge-reveal"><p className="ge-eyebrow">Frequently asked</p><h2>Useful answers before we begin.</h2></div><FaqAccordion items={service.faq.map(([question, answer]) => [question, answer] as const)} idPrefix={`service-${slug}-faq`} /></div></section>
        <ConsultationCta />
      </main>
    </>
  );
}
