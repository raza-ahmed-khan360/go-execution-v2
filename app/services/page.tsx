import Image from "next/image";
import Link from "next/link";
import { ConsultationCta, PageHero } from "@/components/page-hero";
import content from "@/lib/wp-content.json";

export const metadata = { title: "Services" };

export default function Services() {
  return (
    <main id="primary" className="site-main">
      <PageHero eyebrow="Capabilities" title="Our Services & Capabilities" copy="We combine strategy, design, technology, and marketing to build brands that perform and grow." />
      <section className="ge-section ge-service-index"><div className="ge-container"><div className="ge-services-index-grid">
        {Object.entries(content.services).map(([slug, service], index) => (
          <Link className="ge-project ge-project--service ge-reveal no-lightbox" href={`/services/${slug}`} key={slug}>
            <div className="ge-project__media"><Image src={service.image} alt={service.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div>
            <div className="ge-project__meta"><span>{String(index + 1).padStart(2, "0")}</span><strong>{service.title}</strong><b aria-hidden="true" /></div>
          </Link>
        ))}
      </div></div></section>
      <ConsultationCta />
    </main>
  );
}
