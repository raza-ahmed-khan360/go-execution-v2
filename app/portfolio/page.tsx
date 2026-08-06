import type { Metadata } from "next";
import content from "@/lib/wp-content.json";
import { PortfolioGrid } from "@/components/interactive-sections";
import { ConsultationCta, PageHero } from "@/components/page-hero";
import { JsonLd, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "See how we combine strategy, design, and technology to solve real business challenges.",
  alternates: { canonical: "/portfolio/" },
  openGraph: { url: "/portfolio/" },
};

export default async function Portfolio({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPage({ path: "/portfolio/", title: "Our Portfolio & Case Studies" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Portfolio", url: "/portfolio/" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main"><PageHero eyebrow="Selected portfolio" title="Our Portfolio & Case Studies" copy="See how we combine strategy, design, and technology to solve real business challenges." /><section className="ge-section ge-portfolio-page"><div className="ge-container"><PortfolioGrid items={content.portfolio} initialCategory={category} /></div></section><ConsultationCta /></main>
    </>
  );
}
