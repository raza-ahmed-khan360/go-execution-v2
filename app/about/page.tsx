import Image from "next/image";
import { ConsultationCta, PageHero } from "@/components/page-hero";

export const metadata = { title: "About" };

const values = [
  ["01", "Clarity before activity", "We define the real objective before recommending deliverables, channels, or technology."],
  ["02", "Craft with purpose", "Every visual and interaction should support understanding, trust, or action."],
  ["03", "Visible ownership", "Clear communication, defined responsibilities, and accountable next steps keep work moving."],
  ["04", "Evidence over ego", "We improve the work through useful feedback, real data, and the needs of the audience."],
] as const;

export default function About() {
  return (
    <main id="primary" className="site-main">
      <PageHero
        eyebrow="About Go Execution"
        title="About Us: Strategy & Execution"
        copy="We are a multidisciplinary digital agency built for businesses that expect more than attractive ideas—they expect progress."
      />
      <section className="ge-section ge-about-story">
        <div className="ge-container ge-split ge-split--balanced">
          <div className="ge-section-heading ge-reveal">
            <p className="ge-eyebrow">Our point of view</p>
            <h2>Creative Work With Purpose</h2>
          </div>
          <div className="ge-about-story__copy ge-reveal">
            <p>Go Execution brings designers, developers, strategists, writers, and growth specialists together around one shared objective: helping ambitious businesses communicate better and move faster.</p>
            <p>We value thoughtful strategy, transparent relationships, and disciplined follow-through. That means less noise, clearer ownership, and work designed to perform in the real world—not just look impressive in a presentation.</p>
          </div>
        </div>
      </section>
      <section className="ge-section ge-values">
        <div className="ge-container">
          <div className="ge-section-heading ge-reveal">
            <p className="ge-eyebrow ge-eyebrow--light">How we work</p>
            <h2>Our Core Principles</h2>
          </div>
          <div className="ge-values__grid">
            {values.map(([number, title, copy]) => (
              <article className="ge-value ge-reveal" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="ge-section ge-about-facts">
        <div className="ge-container ge-about-facts__grid">
          <div className="ge-reveal">
            <Image src="/assets/images/ce-icon.png" alt="" width={720} height={720} sizes="(max-width: 820px) 72vw, 360px" />
          </div>
          <div className="ge-section-heading ge-reveal">
            <p className="ge-eyebrow">Built to execute</p>
            <h2>Our Expert Team</h2>
            <p>We assemble the right expertise for the objective while keeping the strategy and customer experience connected from beginning to end.</p>
            <ul className="ge-check-list">
              <li>Brand, digital product, content, and growth expertise</li>
              <li>Clear milestones and review stages</li>
              <li>Responsive collaboration across time zones</li>
              <li>Systems designed for long-term usability</li>
            </ul>
          </div>
        </div>
      </section>
      <ConsultationCta />
    </main>
  );
}
