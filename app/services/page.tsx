import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConsultationCta, PageHero } from "@/components/page-hero";
import { JsonLd, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";
import content from "@/lib/wp-content.json";

export const metadata: Metadata = {
  title: { absolute: "Digital Marketing & Web Design Services | Go Execution" },
  description:
    "Explore Go Execution services for US businesses, including web design, SEO, digital marketing, branding, mobile app development, and video animation.",
  alternates: { canonical: "/services/" },
  openGraph: { url: "/services/" },
};

export default function Services() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
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
      <main id="primary" className="site-main">
      <PageHero eyebrow="Capabilities" title="Our Services & Capabilities" copy="We combine strategy, design, technology, and marketing to build brands that perform and grow." />
      <section className="ge-section ge-service-index"><div className="ge-container"><div className="ge-services-index-grid">
        {Object.entries(content.services).map(([slug, service], index) => (
          <Link className="ge-project ge-project--service ge-reveal no-lightbox" href={`/${slug}/`} key={slug}>
            <div className="ge-project__media"><Image src={service.image} alt={service.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div>
            <div className="ge-project__meta"><span>{String(index + 1).padStart(2, "0")}</span><strong>{service.title}</strong><b aria-hidden="true" /></div>
          </Link>
        ))}
      </div></div></section>
      </main>
    </>
  );
}
