import type { Metadata } from "next";
import content from "@/lib/wp-content.json";
import { PortfolioGrid } from "@/components/interactive-sections";
import { ConsultationCta, PageHero } from "@/components/page-hero";
import { AutoScrollTo } from "@/components/auto-scroll";
import { JsonLd, buildWebPage, buildBreadcrumbList , buildOrganization, buildWebSite } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Digital Marketing Portfolio & Case Studies | Go Execution" },
  description: "See how Go Execution combines data-driven strategy, bespoke UI/UX design, and cutting-edge web development technology to solve real business challenges. Explore our case studies and successful digital marketing projects.",
  alternates: { canonical: "/portfolio/" },
  openGraph: { type: "website", siteName: "Go Execution", images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],  url: "/portfolio/" },
};

export default async function Portfolio({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
        buildOrganization(),
        buildWebSite(),
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
      <main id="primary" className="site-main"><PageHero eyebrow="Selected portfolio" title="Our Portfolio & Case Studies" copy="See how Go Execution combines data-driven strategy, bespoke UI/UX design, and cutting-edge web development technology to solve real business challenges. Explore our case studies and successful digital marketing projects." /><AutoScrollTo targetId="portfolio-grid" delay={600} />
<section id="portfolio-grid" className="ge-section ge-portfolio-page"><div className="ge-container"><PortfolioGrid items={content.portfolio} initialCategory={category} /></div></section></main>
    </>
  );
}
