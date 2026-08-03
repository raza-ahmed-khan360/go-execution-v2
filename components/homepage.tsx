import Image from "next/image";
import Link from "next/link";
import content from "@/lib/wp-content.json";
import { ServicesCarousel } from "@/components/services-carousel";
import { MobileHeroStory } from "@/components/mobile-hero-story";
import { DesktopHeroBackground } from "@/components/desktop-hero-background";
import { FaqAccordion, PortfolioGrid, PricingGrid } from "@/components/interactive-sections";

const services = [
  { slug: "website-design-development", title: "Website Design & Development", copy: "Conversion-focused websites engineered to look exceptional, load quickly, and turn attention into action." },
  { slug: "logo-design", title: "Graphic Designing", copy: "Distinct brand identities, logo systems, and marketing collateral designed for confident growth." },
  { slug: "digital-marketing", title: "Digital Marketing & Lead Generation", copy: "Get more clients through targeted lead generation, performance campaigns, video content, UGC creative, social media, and conversion-focused funnels." },
  { slug: "seo-services", title: "SEO Services", copy: "Sustainable search strategies built around technical clarity, useful content, and commercial intent." },
  { slug: "mobile-apps", title: "Mobile Apps", copy: "Intuitive mobile experiences shaped around real user needs and dependable product execution." },
  { slug: "video-animation", title: "Video Animation", copy: "Strategic motion and animated stories that explain, engage, and make your message memorable." },
].map((service, index) => ({
  ...service,
  number: String(index + 1).padStart(2, "0"),
  image: content.services[service.slug as keyof typeof content.services].image,
}));

const growthSteps = [
  {
    title: "Brand Value Communication",
    copy: "Your brand is not communicating its real value. We align your messaging and identity to resonate with your ideal customers.",
    image: "/assets/images/Brand_Value_Com.jpeg",
    alt: "Brand Value",
  },
  {
    title: "Conversion-Focused Presence",
    copy: "Your digital presence gets attention but not enough action. We optimize user journeys to turn traffic into qualified leads.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Conversion",
  },
  {
    title: "Unified Marketing Strategy",
    copy: "Marketing channels are moving without one clear strategy. We integrate SEO, paid media, and content into a single growth engine.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Tech Excellence",
  },
  {
    title: "Consistent Delivery & Ownership",
    copy: "Growth is slowed by inconsistent delivery and unclear ownership. Our dedicated teams take full accountability for your digital success.",
    image: "/assets/images/UFS.jpeg",
    alt: "Scale & Growth",
  },
] as const;

const testimonials = [
  ["Go Execution transformed our online presence. The new website generated 127% more qualified leads in the first quarter. Their strategic approach made all the difference.", "Maya Chen", "CEO, Meridian Labs"],
  ["We hit $2.4M in revenue in our first year with the ecommerce platform they built. The subscription system works flawlessly and our customers love the experience.", "Raj Patel", "Founder, Coastal Roasters"],
  ["Their digital marketing campaigns delivered a 312% ROI. We generated 847 qualified leads and closed $4.2M in sales. Best agency we've worked with.", "Lucia Torres", "Marketing Director, Velocity Motors"],
  ["The website redesign increased consultation requests by 94%. We now rank on page 1 for all our target keywords. Their SEO expertise is exceptional.", "Kwame Asante", "Managing Partner, Zenith Legal"],
  ["The brand identity they created perfectly captures our clean beauty philosophy. We gained 12,000 Instagram followers in 3 months and got featured in 5 major publications.", "Anika Bergström", "Brand Manager, Lumina Cosmetics"],
  ["The property management platform reduced our admin time by 73%. We now manage 240 properties efficiently with their custom solution.", "James Mitchell", "Owner, Horizon Real Estate"],
  ["The explainer videos they produced got 2.4M views and increased our conversion rate by 34%. The quality and storytelling are outstanding.", "Sofia Rodriguez", "Director, Pulse Marketing"],
  ["Our online ordering platform generated $180K in the first year. The custom cake builder is exactly what we needed. Customer satisfaction is at 92%.", "Chen Wei", "Owner, Artisan Bakery"],
  ["The rebrand positioned us perfectly for enterprise clients. We saw a 156% increase in qualified leads and secured 3 major partnerships.", "Emma Thompson", "VP Marketing, TechFlow Solutions"],
] as const;

const faqs = [
  ["What's included in the service?", "Timelines vary depending on scope, but most website and branding projects take between 4 to 8 weeks from strategy to launch."],
  ["How much does it cost?", "Absolutely. We provide dedicated support and digital marketing retainers to ensure your brand continues to grow post-launch."],
  ["How long does it take?", "Yes! Our packages are structured starting points. We can customize deliverables and pricing based on your unique business needs."],
  ["Do you only work with luxury properties?", "You will have a dedicated project manager who will act as your primary point of contact and coordinate with our design and development teams."],
  ["Can I use the content for ads?", "Yes, all content is fully licensed for you to use in your digital campaigns and paid ads."],
] as const;

function HeroContent() {
  return (
    <div className="ge-hero__content">
      <p className="ge-eyebrow ge-eyebrow--light ge-hero-reveal"><span />Strategy is only powerful when it moves.</p>
      <h1 className="ge-hero__title">
        <span className="ge-hero-reveal">Ideas spark potential.</span>
        <span className="ge-hero-reveal ge-hero__title-accent">Execution creates growth.</span>
      </h1>
      <p className="ge-hero__copy ge-hero-reveal">Go Execution transforms ambitious strategy into high-performing brands, digital experiences, and measurable business momentum.</p>
      <div className="ge-hero__actions ge-hero-reveal">
        <Link className="ge-button ge-button--gold ge-magnetic" href="/contact">Claim Your Growth Discount<span aria-hidden="true" /></Link>
        <a className="ge-text-link" href="#work">Explore our work<span aria-hidden="true">↓</span></a>
      </div>
    </div>
  );
}

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <blockquote className="ge-marquee-card">
      <span className="ge-marquee-quote-icon">“</span>
      <p>{item[0]}</p>
      <footer>
        <div className="ge-marquee-avatar">{item[1][0]}</div>
        <div className="ge-marquee-author-info"><strong>{item[1]}</strong><span>{item[2]}</span></div>
      </footer>
    </blockquote>
  );
}

export function Homepage() {
  const firstRow = testimonials.slice(0, 5);
  const secondRow = testimonials.slice(5);
  const firstTrack = [...firstRow, ...firstRow];
  const secondTrack = [...secondRow, ...secondRow, ...secondRow];

  return (
    <main id="primary" className="site-main">
      <section className="ge-hero ge-hero--desktop">
        <DesktopHeroBackground />
        <div className="ge-container ge-hero__centered-container"><HeroContent /></div>
        <div className="ge-hero__scroll" aria-hidden="true"><span />Scroll to execute</div>
      </section>

      <MobileHeroStory />

      <section className="ge-stats" aria-label="Agency highlights"><div className="ge-container ge-stats__grid ge-stats--navy">
        {[["500", "+", "Websites created"], ["300", "+", "Custom portals"], ["70", "+", "Apps created"], ["1", "M+", "Revenue generated"]].map(([value, suffix, label]) => <div className="ge-stat ge-reveal" key={label}><strong data-counter={value} data-suffix={suffix}>{value}{suffix}</strong><span>{label}</span></div>)}
      </div></section>

      <section className="ge-industries"><div className="ge-container ge-reveal"><p className="ge-eyebrow ge-eyebrow--light">Industries we understand</p><div className="ge-marquee" aria-label="Industries"><div><span>Fashion & Retail</span><i>✦</i><span>Health & Wellness</span><i>✦</i><span>Real Estate</span><i>✦</i><span>Technology</span><i>✦</i><span>Professional Services</span><i>✦</i><span>Hospitality</span><i>✦</i></div></div></div></section>

      <section className="ge-section ge-problems ge-growth-redesign ge-growth-redesign--story"><div className="ge-container">
        <div className="ge-problems-heading ge-reveal"><p className="ge-eyebrow">Limited growth offer</p><h2>Digital Strategy & Growth</h2><p className="ge-growth-redesign__intro">Four connected growth systems designed to sharpen your brand, improve conversion, and create accountable momentum.</p></div>
        <div className="ge-scroll-section"><div className="ge-scroll-text">
          {growthSteps.map((step, index) => <article className={`ge-scroll-step ge-growth-card ge-growth-story ge-reveal${index === 0 ? " is-active" : ""}`} data-index={index} data-reveal={index % 2 === 0 ? "left" : "right"} key={step.title}><div className="ge-scroll-step__mobile-img-wrap"><Image src={step.image} alt={step.alt} fill sizes="(max-width: 820px) 100vw, 50vw" quality={80} /></div><div className="ge-growth-story__content"><div className="ge-scroll-step__header"><span className="ge-scroll-step__badge">{String(index + 1).padStart(2, "0")}</span><span className="ge-growth-story__label">Growth system</span></div><h3>{step.title}</h3><p>{step.copy}</p><span className="ge-growth-story__line" aria-hidden="true" /></div></article>)}
        </div></div>
      </div></section>

      <section id="services" className="ge-section ge-services"><div className="ge-container">
        <div className="ge-section-heading ge-section-heading--wide ge-reveal"><div><p className="ge-eyebrow">360° growth solutions</p><h2>Comprehensive Digital Services</h2></div><div><p style={{ marginBottom: 20 }}>We connect strategy, creative, technology, and growth so every deliverable moves in the same direction.</p><Link className="ge-button ge-button--outline" href="/services">Explore Services</Link></div></div>
        <ServicesCarousel services={services} />
      </div></section>

      <section id="work" className="ge-section ge-work"><div className="ge-container">
        <div className="ge-section-heading ge-section-heading--wide ge-reveal"><div><p className="ge-eyebrow">Real examples</p><h2>Our Recent Projects</h2></div><p>Explore selected work published from our live portfolio across design, technology, and growth.</p></div>
        <PortfolioGrid items={content.portfolio.filter((project) => project.category === "Website Design & Development")} initialLimit={6} includeAll={false} deferCatalogue />
      </div></section>

      <section className="ge-section ge-why ge-why--option-3 ge-why--split"><div className="ge-why__watermark" aria-hidden="true"><Image src="/assets/images/ce-icon.png" alt="" width={1200} height={1200} sizes="100vw" /></div><div className="ge-container">
        <div className="ge-section-heading ge-section-heading--center ge-reveal"><p className="ge-eyebrow">Why Go Execution</p><h2>Built for momentum.<br />Accountable by design.</h2><p>Strategy, creative, technology, and marketing move together under one focused growth team.</p><Link className="ge-why--split__link" href="/about">Discover our approach <span aria-hidden="true">↗</span></Link></div>
        <div className="ge-why-cards">{["Strategy and delivery under one roof", "Transparent scope and communication", "Premium creative with commercial purpose", "Responsive, scalable, performance-aware builds"].map((title, index) => <div className="ge-why-card ge-reveal" data-reveal="right" style={{ transitionDelay: `${index * 90}ms` }} key={title}><span className="ge-why-card__num">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><span className="ge-why-card__arrow" aria-hidden="true">↗</span></div>)}</div>
      </div></section>

      <section className="ge-section ge-testimonials-marquee-section"><div className="ge-container"><div className="ge-section-heading ge-reveal"><p className="ge-eyebrow ge-eyebrow--light">Client perspective</p><h2>Client Success Stories</h2></div></div><div className="ge-reveal"><div className="ge-marquee-wrapper"><div className="ge-marquee-track">{firstTrack.map((item, index) => <TestimonialCard item={item} key={`${item[1]}-${index}`} />)}</div><div className="ge-marquee-track ge-marquee-track--reverse">{secondTrack.map((item, index) => <TestimonialCard item={item} key={`${item[1]}-${index}`} />)}</div></div></div></section>

      <section className="ge-section ge-faq"><div className="ge-container"><div className="ge-section-heading ge-section-heading--center ge-reveal" style={{ marginBottom: 60 }}><h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", margin: 0, lineHeight: 1.1 }}>Frequently Asked<br /><span style={{ fontFamily: "var(--ge-serif)", fontStyle: "italic", fontWeight: 400 }}>Questions</span></h2></div>
        <div className="ge-faq-grid ge-reveal"><div className="ge-faq-card"><div className="ge-faq-card-header"><div className="ge-faq-email"><span className="ge-faq-email-label">Email</span><a href="mailto:info@goexecution.com" className="ge-faq-email-link">info@goexecution.com</a></div><Link href="/contact" className="ge-faq-contact-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg><span>Get in touch</span></Link></div>
          <FaqAccordion items={faqs} hoverToOpen idPrefix="home-faq" className="ge-faq-accordion" />
        </div><div className="ge-faq-image-wrapper"><Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=70&fit=crop" alt="Digital Agency Team" className="ge-faq-img" fill sizes="(max-width: 991px) 100vw, 50vw" quality={75} /></div></div>
      </div></section>

      <section className="ge-section ge-pricing"><div className="ge-container"><div className="ge-section-heading ge-reveal"><div><p className="ge-eyebrow">Growth offers</p><h2>Flexible Pricing Packages</h2></div></div>
        <PricingGrid groups={content.pricing} />
      </div></section>

    </main>
  );
}
