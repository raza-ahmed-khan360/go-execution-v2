import content from "@/lib/wp-content.json";
import { PortfolioGrid } from "@/components/interactive-sections";
import { ConsultationCta, PageHero } from "@/components/page-hero";

export const metadata = { title: "Portfolio" };

export default async function Portfolio({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  return <main id="primary" className="site-main"><PageHero eyebrow="Selected portfolio" title="Our Portfolio & Case Studies" copy="See how we combine strategy, design, and technology to solve real business challenges." /><section className="ge-section ge-portfolio-page"><div className="ge-container"><PortfolioGrid items={content.portfolio} initialCategory={category} /></div></section><ConsultationCta /></main>;
}
