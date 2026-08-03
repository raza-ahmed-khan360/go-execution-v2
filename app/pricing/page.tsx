import content from "@/lib/wp-content.json";
import { PricingGrid } from "@/components/interactive-sections";
import { ConsultationCta, PageHero } from "@/components/page-hero";

export const metadata = { title: "Pricing" };

export default function Pricing() {
  return <main id="primary" className="site-main"><PageHero eyebrow="Packages" title="Flexible Pricing Plans" copy="We deliver high-end execution with structured, transparent pricing. Custom scopes are available upon request." /><section className="ge-section ge-pricing-page"><div className="ge-container"><PricingGrid groups={content.pricing} /></div></section><ConsultationCta /></main>;
}
