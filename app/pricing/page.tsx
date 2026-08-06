import type { Metadata } from "next";
import content from "@/lib/wp-content.json";
import { PricingGrid } from "@/components/interactive-sections";
import { ConsultationCta, PageHero } from "@/components/page-hero";
import { JsonLd, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Digital Marketing & Web Design Pricing | Go Execution" },
  description:
    "Review Go Execution pricing options for web design, SEO, branding, digital marketing, mobile apps, and video animation, then request a tailored quote.",
  alternates: { canonical: "/pricing/" },
  openGraph: { url: "/pricing/" },
};

export default function Pricing() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPage({ path: "/pricing/", title: "Digital Marketing & Web Design Pricing | Go Execution" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Pricing", url: "/pricing/" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main"><PageHero eyebrow="Packages" title="Flexible Pricing Plans" copy="We deliver high-end execution with structured, transparent pricing. Custom scopes are available upon request." /><section className="ge-section ge-pricing-page"><div className="ge-container"><PricingGrid groups={content.pricing} /></div></section><ConsultationCta /></main>
    </>
  );
}
