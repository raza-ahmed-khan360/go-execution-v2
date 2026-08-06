import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { JsonLd, buildContactPage, buildBreadcrumbList } from "@/lib/seo/jsonld";
import content from "@/lib/wp-content.json";

export const metadata: Metadata = {
  title: { absolute: "Contact Go Execution | Start Your Digital Growth Project" },
  description:
    "Contact Go Execution to discuss web design, SEO, digital marketing, branding, mobile apps, or video animation for your US business and growth goals.",
  alternates: { canonical: "/contact/" },
  openGraph: { url: "/contact/" },
};

export default function Contact() {
  const services = Object.values(content.services).map((service) => service.title);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildContactPage({ path: "/contact/", title: "Contact Go Execution | Start Your Digital Growth Project" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact/" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main">
      <PageHero eyebrow="Contact Go Execution" title="Get In Touch" copy="Share the objective, challenge, and timing. We’ll help clarify the strongest next step." />
      <section className="ge-section ge-contact-page"><div className="ge-container ge-contact__grid">
        <div className="ge-contact-page__details ge-reveal"><p className="ge-eyebrow">Start a conversation</p><h2>Start a Conversation</h2><div className="ge-contact-cards"><article><span>Email</span><strong><a href="mailto:justin@goexecution.com">justin@goexecution.com</a></strong></article><article><span>Phone</span><strong><a href="tel:+15872004832">+1 (587) 200-4832</a></strong></article><article><span>Address</span><strong><a href="https://www.google.com/maps/search/?api=1&query=13345+N+Central+Expy,+Suite+203,+Dallas,+Texas+75243" target="_blank" rel="noreferrer">13345 N Central Expy, Suite#203<br />Dallas, Texas 75243</a></strong></article></div></div>
        <ContactForm services={services} />
      </div><div className="ge-container ge-contact-map ge-reveal"><div className="ge-contact-map__heading"><div><p className="ge-eyebrow">Visit the studio</p><h2>Find Go Execution in Dallas</h2></div><a className="ge-text-link" href="https://www.google.com/maps/search/?api=1&query=13345+N+Central+Expy,+Suite+203,+Dallas,+Texas+75243" target="_blank" rel="noreferrer">Open in Google Maps <span aria-hidden="true">↗</span></a></div><div className="ge-contact-map__frame"><iframe title="Go Execution Dallas office location" src="https://www.google.com/maps?q=13345%20N%20Central%20Expy%2C%20Ste%20203%2C%20Dallas%2C%20TX%2075243&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>
      </main>
    </>
  );
}
