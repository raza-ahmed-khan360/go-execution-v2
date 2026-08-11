import Image from "next/image";
import Link from "next/link";
import content from "@/lib/wp-content.json";
import { ServicesCarousel } from "@/components/services-carousel";
import { MobileHeroStory } from "@/components/mobile-hero-story";
import { DesktopHeroBackground } from "@/components/desktop-hero-background";
import { FaqAccordion, PortfolioGrid, PricingGrid } from "@/components/interactive-sections";
import { TestimonialShowcase, type Testimonial } from "@/components/testimonial-showcase";

const servicesCarouselData = [
  {
    slug: "web-development",
    title: "Web Development Services",
    copy: "Build fast, responsive and conversion-focused websites with custom development, WordPress, Next.js, ecommerce and landing page solutions.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&fit=crop",
    anchorText: "Explore Web Development",
  },
  {
    slug: "seo",
    title: "SEO Services",
    copy: "Improve organic visibility and attract high-intent customers through technical SEO, local SEO, ecommerce SEO and search strategies built around your business.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80&fit=crop",
    anchorText: "Explore SEO Services",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    copy: "Create measurable growth with content marketing, social media marketing, paid advertising and conversion optimisation designed around your customer journey.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fit=crop",
    anchorText: "Explore Digital Marketing",
  },
  {
    slug: "design-branding",
    title: "Design & Branding",
    copy: "Build a consistent and recognisable brand through logo design, graphic design, brand identity and creative marketing assets.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80&fit=crop",
    anchorText: "Explore Design & Branding",
  },
  {
    slug: "video",
    title: "Video & Animation",
    copy: "Explain products, services and ideas through engaging 2D, 3D and explainer animation created for digital marketing and customer engagement.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80&fit=crop",
    anchorText: "Explore Video & Animation",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    copy: "Develop custom mobile applications for businesses and digital products across iOS and Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&fit=crop",
    anchorText: "Explore Mobile App Development",
  },
].map((service, index) => ({
  ...service,
  number: String(index + 1).padStart(2, "0"),
}));

const growthSteps = [
  {
    num: "01",
    label: "Discover",
    title: "Discover & Analyze",
    copy: "We analyse your business, audience, competitors and existing digital presence to identify the highest-value opportunities.",
    image: "/assets/images/Brand_Value_Com.jpeg",
    alt: "Digital Agency Discovery & Analysis by Go Execution",
  },
  {
    num: "02",
    label: "Strategise",
    title: "Strategise & Plan",
    copy: "We turn those findings into a practical digital strategy aligned with your commercial objectives.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Digital Strategy Planning by Go Execution",
  },
  {
    num: "03",
    label: "Build",
    title: "Build & Execute",
    copy: "Our developers, designers and marketers create the website, campaigns and digital experiences required to execute the strategy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Web Engineering & Marketing Execution by Go Execution",
  },
  {
    num: "04",
    label: "Launch",
    title: "Launch & Measure",
    copy: "We launch your digital assets and establish the measurement systems needed to track performance.",
    image: "/assets/images/UFS.jpeg",
    alt: "Digital Asset Launch & Performance Tracking by Go Execution",
  },
  {
    num: "05",
    label: "Optimise",
    title: "Optimise & Scale",
    copy: "We use performance data to identify improvements and continuously refine your digital presence and marketing activity.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&q=80&fit=crop",
    alt: "Digital Performance Optimization by Go Execution",
  },
] as const;

const testimonials: readonly Testimonial[] = [
  { quote: "Go Execution completely transformed our digital trajectory. The new custom web platform increased qualified consultation requests by 127% in Q1 alone.", name: "Maya Chen", role: "CEO, Meridian Labs", metric: "127%", metricLabel: "more qualified leads" },
  { quote: "We reached $2.4M in revenue during our first year on the ecommerce platform built by Go Execution. Their strategic guidance was instrumental to our growth.", name: "Raj Patel", role: "Founder, Coastal Roasters", metric: "$2.4M", metricLabel: "first-year revenue" },
  { quote: "Their multi-channel marketing campaigns generated a 312% return on ad spend. We closed $4.2M in sales within 6 months. By far our most accountable agency partner.", name: "Lucia Torres", role: "Marketing Director, Velocity Motors", metric: "312%", metricLabel: "campaign return on investment" },
  { quote: "The website overhaul and technical SEO strategy pushed us to top Google rankings for all our core practice areas. Consultation inquiries doubled.", name: "Kwame Asante", role: "Managing Partner, Zenith Legal", metric: "94%", metricLabel: "more consultation requests" },
  { quote: "The brand identity and packaging system they crafted elevated our positioning instantly. We gained 12,000 engaged followers and secured national press coverage.", name: "Anika Bergström", role: "Brand Manager, Lumina Cosmetics", metric: "12K", metricLabel: "new followers in 90 days" },
  { quote: "The custom property management portal reduced operational overhead by 73%. We now scale our property portfolio without adding administrative friction.", name: "James Mitchell", role: "Owner, Horizon Real Estate", metric: "73%", metricLabel: "less administration time" },
] as const;

const faqs = [
  ["What does a digital marketing agency do?", "A digital marketing agency helps businesses attract, engage, and convert clients through strategy, custom web development, SEO, paid advertising, content marketing, and conversion optimization."],
  ["What digital marketing services does Go Execution provide?", "We provide full-service digital solutions including web development, technical SEO, digital marketing, design & branding, video animation, and mobile app development."],
  ["How can a digital marketing agency help my business grow?", "By unifying your digital channels, optimizing user journeys for conversion, and continuously refining traffic acquisition strategies based on performance data."],
  ["Does Go Execution work with small businesses?", "Yes. We engineer scalable digital platforms and targeted search strategies tailored to the budget, market, and growth goals of US small businesses."],
  ["Does Go Execution provide SEO services?", "Yes. We deliver technical SEO, local Google Maps optimization, ecommerce SEO, and content strategies designed to increase organic search rankings."],
  ["Does Go Execution build custom websites?", "Yes. We build high-performance custom websites using Next.js, React, WordPress, Shopify, and custom landing page architectures."],
  ["How long does a digital marketing project take?", "Project timelines vary by scope: custom website development typically takes 4 to 8 weeks, while marketing campaigns and SEO launch within 1 to 2 weeks."],
  ["How much do digital marketing services cost?", "Pricing depends on your scope, technical requirements, and business objectives. Explore our starting packages or request a custom proposal."],
] as const;

function HeroContent() {
  return (
    <div className="ge-hero__content">
      <p className="ge-eyebrow ge-hero-reveal"><span />FULL-SERVICE DIGITAL MARKETING AGENCY</p>
      <h1 className="ge-hero__title">
        <span className="ge-hero-reveal">Full-Service Digital</span>
        <span className="ge-hero-reveal ge-hero__title-accent">Marketing Agency in USA</span>
      </h1>
      <p className="ge-hero__copy ge-hero-reveal">
        Go Execution helps US businesses turn digital traffic into measurable growth through conversion-focused web development, SEO, paid advertising, content, branding and digital strategy.
      </p>
      <div className="ge-hero__actions ge-hero-reveal">
        <Link className="ge-button ge-button--gold ge-magnetic" href="/contact/">
          <span>Get a Free Growth Audit ↗</span>
        </Link>
        <Link className="ge-button ge-button--outline" href="/services/">
          <span>Explore Our Services ↓</span>
        </Link>
      </div>
    </div>
  );
}

export function Homepage() {
  return (
    <main id="primary" className="site-main">
      {/* --- HERO SECTION --- */}
      <section className="ge-hero ge-hero--desktop">
        <DesktopHeroBackground />
        <div className="ge-container ge-hero__centered-container"><HeroContent /></div>
        <div className="ge-hero__scroll" aria-hidden="true"><span />Scroll to explore</div>
      </section>

      <MobileHeroStory />

      {/* --- TRUST STATISTICS --- */}
      <section className="ge-stats" aria-label="Agency statistics"><div className="ge-container ge-stats__grid ge-stats--navy">
        {[["500", "+", "US Websites Created"], ["300", "+", "Marketing Campaigns"], ["70", "+", "Mobile Apps Built"], ["1", "M+", "Client Revenue Generated"]].map(([value, suffix, label]) => (
          <div className="ge-stat ge-reveal" key={label}>
            <strong data-counter={value} data-suffix={suffix}>{value}{suffix}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div></section>

      {/* --- INTRODUCTION SECTION --- */}
      <section className="ge-section ge-about-story-section" style={{ background: "#ffffff", padding: "70px 0" }}>
        <div className="ge-container">
          <div className="ge-section-heading ge-section-heading--wide ge-reveal" style={{ marginBottom: 28 }}>
            <div>
              <p className="ge-eyebrow">Strategic Digital Agency</p>
              <h2>Digital Growth Solutions Built Around Your Business</h2>
            </div>
            <div style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.75 }}>
              <p style={{ marginBottom: 16 }}>
                Successful digital growth requires more than a website or a single marketing channel. Go Execution brings strategy, technology, creative and performance marketing together to help US businesses attract the right audience, convert more visitors and build a stronger digital presence.
              </p>
              <p>
                From custom websites and ecommerce platforms to SEO, paid advertising, content and conversion optimisation, our team builds connected digital experiences around measurable business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="ge-section ge-services"><div className="ge-container">
        <div className="ge-section-heading ge-section-heading--wide ge-reveal">
          <div>
            <p className="ge-eyebrow">360° Growth Spectrum</p>
            <h2>Digital Marketing Services That Drive Business Growth</h2>
          </div>
          <div>
            <p style={{ marginBottom: 20 }}>
              Our full-service approach combines web development, search marketing, paid media, creative and conversion strategy so your digital channels work together instead of operating in isolation.
            </p>
            <Link className="ge-button ge-button--outline" href="/services/">
              <span>Explore All Services ↗</span>
            </Link>
          </div>
        </div>
        <ServicesCarousel services={servicesCarouselData} />
      </div></section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="work" className="ge-section ge-work"><div className="ge-container">
        <div className="ge-section-heading ge-section-heading--wide ge-reveal">
          <div>
            <p className="ge-eyebrow">Proven Case Studies</p>
            <h2>Featured Web, Marketing &amp; Branding Projects</h2>
          </div>
          <p>
            Explore selected Go Execution projects across web development, ecommerce, branding, digital marketing, video and mobile applications. Each project is built around a specific business challenge, audience and growth objective.
          </p>
        </div>
        <PortfolioGrid items={content.portfolio.filter((project) => project.category === "Website Design & Development")} initialLimit={6} includeAll={false} deferCatalogue />
      </div></section>

      {/* --- INDUSTRIES SECTION --- */}
      <section className="ge-industries ge-section" style={{ background: "#f8fafc", padding: "60px 0", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div className="ge-container ge-reveal">
          <div className="ge-section-heading ge-section-heading--wide" style={{ marginBottom: 32 }}>
            <div>
              <p className="ge-eyebrow">Sector-Specific Strategy</p>
              <h2 style={{ color: "#0d1b2a" }}>Digital Marketing for US Businesses Across Industries</h2>
            </div>
            <p style={{ color: "#475569" }}>
              Our digital strategies are adapted to the audience, buying journey and competitive environment of each business. Explore solutions for industries where strong digital experiences and measurable marketing can create meaningful growth.
            </p>
          </div>
          <div className="ge-marquee" aria-label="Industries">
            <div>
              <Link href="/industries/fashion/"><span>Fashion &amp; Retail</span></Link><i>✦</i>
              <Link href="/industries/health-wellness/"><span>Health &amp; Wellness</span></Link><i>✦</i>
              <Link href="/industries/real-estate/"><span>Real Estate</span></Link><i>✦</i>
              <Link href="/industries/technology/"><span>Technology &amp; SaaS</span></Link><i>✦</i>
              <Link href="/industries/professional-services/"><span>Professional Services</span></Link><i>✦</i>
              <Link href="/industries/hospitality/"><span>Hospitality</span></Link><i>✦</i>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY GO EXECUTION SECTION --- */}
      <section className="ge-section ge-why ge-why--split"><div className="ge-why__watermark" aria-hidden="true"><Image src="/assets/images/ce-icon.png" alt="" width={1200} height={1200} sizes="100vw" /></div><div className="ge-container ge-why__grid">
        <div className="ge-why__lead ge-reveal" data-reveal="left">
          <p className="ge-eyebrow ge-eyebrow--light">Integrated Growth Team</p>
          <h2>Why Businesses Choose Go Execution</h2>
          <p>Strategy, technology, creative and performance marketing work together under one team, giving businesses a clearer path from digital presence to measurable growth.</p>
          <Link className="ge-why__cta-btn" href="/about/"><span>Discover Our Approach</span><b aria-hidden="true">↗</b></Link>
        </div>
        <div className="ge-why-cards">
          {[
            { title: "Full-Service Digital Marketing", copy: "Bring web development, SEO, paid advertising, content and creative together without managing disconnected agency teams." },
            { title: "Conversion-Focused Development", copy: "We design digital experiences around usability, performance and the actions that matter to your business." },
            { title: "Data-Driven Marketing", copy: "Use measurable performance data to understand what is working, identify opportunities and improve digital campaigns over time." },
            { title: "Scalable Digital Solutions", copy: "Build websites, marketing systems and digital products that can evolve as your audience, content and business requirements grow." },
          ].map((item, index) => (
            <div className="ge-why-card ge-reveal" data-reveal="right" style={{ "--card-index": index, transitionDelay: `${index * 120}ms` } as React.CSSProperties} key={item.title}>
              <div className="ge-why-card__top">
                <span className="ge-why-card__num">{String(index + 1).padStart(2, "0")}</span>
                <span className="ge-why-card__arrow" aria-hidden="true">↗</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </div></section>

      {/* --- DIGITAL GROWTH PROCESS SECTION --- */}
      <section className="ge-section ge-problems ge-growth-redesign ge-growth-redesign--story"><div className="ge-container">
        <div className="ge-problems-heading ge-reveal">
          <p className="ge-eyebrow">5-Step Delivery Framework</p>
          <h2>Our Digital Growth Process</h2>
          <p className="ge-growth-redesign__intro">A structured, data-informed workflow designed to turn commercial objectives into measurable results across web engineering and marketing campaigns.</p>
        </div>
        <div className="ge-scroll-section"><div className="ge-scroll-text">
          {growthSteps.map((step, index) => (
            <article className={`ge-scroll-step ge-growth-card ge-growth-story ge-reveal${index === 0 ? " is-active" : ""}`} data-index={index} data-reveal={index % 2 === 0 ? "left" : "right"} key={step.title} style={{ "--card-index": index } as React.CSSProperties}>
              <div className="ge-scroll-step__mobile-img-wrap">
                <Image src={step.image} alt={step.alt} fill sizes="(max-width: 820px) 100vw, 50vw" quality={80} />
              </div>
              <div className="ge-growth-story__content">
                <div className="ge-scroll-step__header">
                  <span className="ge-scroll-step__badge">{step.num}</span>
                  <span className="ge-growth-story__label">{step.label}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <span className="ge-growth-story__line" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div></div>
      </div></section>

      <TestimonialShowcase items={testimonials} />

      {/* --- PRICING SECTION --- */}
      <section className="ge-section ge-pricing"><div className="ge-container">
        <div className="ge-section-heading ge-reveal">
          <div>
            <p className="ge-eyebrow">Transparent Investment</p>
            <h2>Website &amp; Digital Growth Packages</h2>
            <p style={{ marginTop: 12, color: "#cbd5e1" }}>Choose a starting package for your website or speak with our team about a solution tailored to your business, goals and technical requirements.</p>
          </div>
        </div>
        <PricingGrid groups={content.pricing} />
      </div></section>

      {/* --- FAQ SECTION --- */}
      <section className="ge-section ge-faq"><div className="ge-container">
        <div className="ge-section-heading ge-reveal" style={{ marginBottom: 48 }}>
          <p className="ge-eyebrow">Clear Answers</p>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="ge-faq-grid ge-reveal"><div className="ge-faq-card"><div className="ge-faq-card-header"><div className="ge-faq-email"><span className="ge-faq-email-label">Have questions for our US team?</span><a href="mailto:justin@goexecution.com" className="ge-faq-email-link">justin@goexecution.com</a></div><Link href="/contact/" className="ge-button ge-button--gold ge-magnetic ge-faq-contact-btn"><span>Get in touch</span><span aria-hidden="true">↗</span></Link></div>
          <FaqAccordion items={faqs} hoverToOpen idPrefix="home-faq" className="ge-faq-accordion" />
        </div><div className="ge-faq-image-wrapper"><Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=70&fit=crop" alt="Go Execution Digital Marketing Agency in USA Team" className="ge-faq-img" fill sizes="(max-width: 991px) 100vw, 50vw" quality={85} /><div className="ge-faq-image-badge"><span className="ge-faq-image-badge__dot" /><div className="ge-faq-image-badge__text"><strong>Direct Access to Founders</strong><span>Fast responses within 2 hours</span></div></div></div></div>
      </div></section>

    </main>
  );
}
