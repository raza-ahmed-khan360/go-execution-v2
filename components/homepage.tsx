import Image from "next/image";
import Link from "next/link";
import content from "@/lib/wp-content.json";
import { ServicesCarousel } from "@/components/services-carousel";
import { MobileHeroStory } from "@/components/mobile-hero-story";
import { DesktopHeroBackground } from "@/components/desktop-hero-background";
import { FaqAccordion, PortfolioGrid, PricingGrid } from "@/components/interactive-sections";
import { TestimonialShowcase, type Testimonial } from "@/components/testimonial-showcase";

const servicesCarouselData = [
  { slug: "web-development", title: "Web Development Services", copy: "Sub-second Next.js web applications, custom React platforms, and e-commerce architectures engineered for speed, security, and sales conversions.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&fit=crop" },
  { slug: "seo", title: "SEO Services", copy: "Technical search infrastructure, local Google Maps optimization, and organic growth strategies designed to dominate competitive commercial queries.", image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80&fit=crop" },
  { slug: "digital-marketing", title: "Digital Marketing Services", copy: "High-ROAS Google Ads, paid social campaigns, UGC creative assets, and conversion rate optimization scaled around strict customer acquisition targets.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fit=crop" },
  { slug: "design-branding", title: "Design & Branding Services", copy: "Iconic brand identity systems, logo designs, vector graphics, and digital marketing collateral that command market authority.", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80&fit=crop" },
  { slug: "mobile-app-development", title: "Mobile App Development", copy: "Cross-platform iOS & Android mobile applications built for high user engagement, native performance, and cloud scalability.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&fit=crop" },
  { slug: "video", title: "Video Animation & Motion", copy: "High-converting 2D/3D motion graphics and explainer videos that translate complex value propositions into compelling visual narratives.", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80&fit=crop" },
].map((service, index) => ({
  ...service,
  number: String(index + 1).padStart(2, "0"),
}));

const growthSteps = [
  {
    title: "Market-Positioned Branding",
    copy: "We refine your value proposition and brand messaging to instantly communicate authority to high-intent buyers across the United States.",
    image: "/assets/images/Brand_Value_Com.jpeg",
    alt: "Market-Positioned Branding by Go Execution",
  },
  {
    title: "Conversion-Focused Web Architecture",
    copy: "Custom web development engineered for sub-second performance, intuitive user journeys, and maximum customer acquisition rates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Conversion-Focused Web Development in USA",
  },
  {
    title: "Multi-Channel Digital Marketing",
    copy: "Unifying paid search, social advertising, and SEO into a single, high-ROAS client acquisition engine for US businesses.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Multi-Channel Digital Marketing Strategy in USA",
  },
  {
    title: "Dedicated Delivery & Accountability",
    copy: "No fragmented vendors or agency hand-offs. Our specialist growth team takes direct responsibility for your commercial targets.",
    image: "/assets/images/UFS.jpeg",
    alt: "Accountable Digital Execution by Go Execution",
  },
] as const;

const testimonials: readonly Testimonial[] = [
  { quote: "Go Execution completely transformed our digital trajectory. The new custom web platform increased qualified consultation requests by 127% in Q1 alone.", name: "Maya Chen", role: "CEO, Meridian Labs", metric: "127%", metricLabel: "more qualified leads" },
  { quote: "We reached $2.4M in revenue during our first year on the ecommerce platform built by Go Execution. Their strategic guidance was instrumental to our growth.", name: "Raj Patel", role: "Founder, Coastal Roasters", metric: "$2.4M", metricLabel: "first-year revenue" },
  { quote: "Their multi-channel marketing campaigns generated a 312% return on ad spend. We closed $4.2M in sales within 6 months. By far our most accountable agency partner.", name: "Lucia Torres", role: "Marketing Director, Velocity Motors", metric: "312%", metricLabel: "campaign return on investment" },
  { quote: "The website overhaul and technical SEO strategy pushed us to top Google rankings for all our core practice areas. Consultation inquiries doubled.", name: "Kwame Asante", role: "Managing Partner, Zenith Legal", metric: "94%", metricLabel: "more consultation requests" },
  { quote: "The brand identity and packaging system they crafted elevated our positioning instantly. We gained 12,000 engaged followers and secured national press coverage.", name: "Anika Bergström", role: "Brand Manager, Lumina Cosmetics", metric: "12K", metricLabel: "new followers in 90 days" },
  { quote: "The custom property management portal reduced operational overhead by 73%. We now scale our property portfolio without adding administrative friction.", name: "James Mitchell", role: "Owner, Horizon Real Estate", metric: "73%", metricLabel: "less administration time" },
  { quote: "The 3D animated explainer video produced by Go Execution generated over 2.4M views and boosted our landing page conversion rate by 34%.", name: "Sofia Rodriguez", role: "Director, Pulse Marketing", metric: "2.4M", metricLabel: "campaign video views" },
  { quote: "Our custom ordering web app generated $180K in its inaugural year. Customer feedback on the user interface has been overwhelmingly positive.", name: "Chen Wei", role: "Owner, Artisan Bakery", metric: "$180K", metricLabel: "online sales in year one" },
  { quote: "Their rebrand positioned us perfectly for enterprise-level clients. We saw a 156% surge in inbound enterprise leads within 90 days.", name: "Emma Thompson", role: "VP Marketing, TechFlow Solutions", metric: "156%", metricLabel: "growth in qualified leads" },
] as const;

const faqs = [
  ["What sets Go Execution apart from typical digital marketing agencies?", "Go Execution integrates strategy, high-speed custom web engineering, and performance marketing under one dedicated growth team with strict commercial accountability."],
  ["How long does custom web development take from strategy to launch?", "Most custom website builds take between 4 to 8 weeks depending on technical complexity, integrations, and content scope."],
  ["What is included in your full-funnel digital marketing services?", "Our marketing retainers cover search engine optimization (SEO), paid search (PPC), social ad management, conversion rate optimization, and dedicated reporting."],
  ["Can Go Execution customize a growth package for our business?", "Yes. We evaluate your current market positioning, revenue goals, and technical infrastructure to build a custom growth roadmap."],
  ["How quickly can we launch a marketing or development campaign?", "Initial discovery, brand alignment, and campaign setups typically launch within 1 to 2 weeks following onboarding."],
] as const;

function HeroContent() {
  return (
    <div className="ge-hero__content">
      <p className="ge-eyebrow ge-hero-reveal"><span />Full-Service Growth Partner for US Businesses</p>
      <h1 className="ge-hero__title">
        <span className="ge-hero-reveal">Strategy Meets Precision.</span>
        <span className="ge-hero-reveal ge-hero__title-accent">Execution Drives Growth.</span>
      </h1>
      <p className="ge-hero__copy ge-hero-reveal">
        Go Execution helps ambitious American brands outpace competition. We engineer sub-second web platforms, execute technical search engine strategies, and launch data-driven marketing campaigns that convert digital visibility into bottom-line revenue.
      </p>
      <div className="ge-hero__actions ge-hero-reveal">
        <Link className="ge-button ge-button--gold ge-magnetic" href="/contact">
          <span>Get Free Growth Audit ↗</span>
        </Link>
        <a className="ge-button ge-button--outline" href="#work">
          <span>Explore Our Services ↓</span>
        </a>
      </div>
    </div>
  );
}

export function Homepage() {
  return (
    <main id="primary" className="site-main">
      <section className="ge-hero ge-hero--desktop">
        <DesktopHeroBackground />
        <div className="ge-container ge-hero__centered-container"><HeroContent /></div>
        <div className="ge-hero__scroll" aria-hidden="true"><span />Scroll to execute</div>
      </section>

      <MobileHeroStory />

      <section className="ge-stats" aria-label="Agency highlights"><div className="ge-container ge-stats__grid ge-stats--navy">
        {[["500", "+", "US Web Platforms Built"], ["300", "+", "Growth Campaigns"], ["70", "+", "Mobile Apps Deployed"], ["1", "M+", "Client Revenue Scaled"]].map(([value, suffix, label]) => <div className="ge-stat ge-reveal" key={label}><strong data-counter={value} data-suffix={suffix}>{value}{suffix}</strong><span>{label}</span></div>)}
      </div></section>

      <section className="ge-industries"><div className="ge-container ge-reveal"><p className="ge-eyebrow ge-eyebrow--light">Industries We Scale in USA</p><div className="ge-marquee" aria-label="Industries"><div><span>Fashion & Retail</span><i>✦</i><span>Health & Wellness</span><i>✦</i><span>Real Estate</span><i>✦</i><span>Technology</span><i>✦</i><span>Professional Services</span><i>✦</i><span>Hospitality</span><i>✦</i></div></div></div></section>

      <section className="ge-section ge-problems ge-growth-redesign ge-growth-redesign--story"><div className="ge-container">
        <div className="ge-problems-heading ge-reveal"><p className="ge-eyebrow">The Go Execution Growth Engine</p><h2>Full-Service Digital Marketing Agency in USA</h2><p className="ge-growth-redesign__intro">Four connected growth disciplines combining high-performance web development with data-driven marketing to eliminate scaling friction and maximize commercial ROI.</p></div>
        <div className="ge-scroll-section"><div className="ge-scroll-text">
          {growthSteps.map((step, index) => <article className={`ge-scroll-step ge-growth-card ge-growth-story ge-reveal${index === 0 ? " is-active" : ""}`} data-index={index} data-reveal={index % 2 === 0 ? "left" : "right"} key={step.title} style={{ "--card-index": index } as React.CSSProperties}><div className="ge-scroll-step__mobile-img-wrap"><Image src={step.image} alt={step.alt} fill sizes="(max-width: 820px) 100vw, 50vw" quality={80} /></div><div className="ge-growth-story__content"><div className="ge-scroll-step__header"><span className="ge-scroll-step__badge">{String(index + 1).padStart(2, "0")}</span><span className="ge-growth-story__label">Growth System</span></div><h3>{step.title}</h3><p>{step.copy}</p><span className="ge-growth-story__line" aria-hidden="true" /></div></article>)}
        </div></div>
      </div></section>

      <section id="services" className="ge-section ge-services"><div className="ge-container">
        <div className="ge-section-heading ge-section-heading--wide ge-reveal"><div><p className="ge-eyebrow">360° Growth Solutions</p><h2>Web Development & Digital Marketing in USA</h2></div><div><p style={{ marginBottom: 20 }}>We integrate brand positioning, custom engineering, search optimization, and performance advertising so every marketing dollar moves in the same direction.</p><Link className="ge-button ge-button--outline" href="/services">Explore All Services</Link></div></div>
        <ServicesCarousel services={servicesCarouselData} />
      </div></section>

      <section id="work" className="ge-section ge-work"><div className="ge-container">
        <div className="ge-section-heading ge-section-heading--wide ge-reveal"><div><p className="ge-eyebrow">Proven Case Studies</p><h2>Featured Client Engineering & Campaigns</h2></div><p>Explore selected work from our live portfolio spanning custom web development, digital marketing, and brand identity systems.</p></div>
        <PortfolioGrid items={content.portfolio.filter((project) => project.category === "Website Design & Development")} initialLimit={6} includeAll={false} deferCatalogue />
      </div></section>

      <section className="ge-section ge-why ge-why--split"><div className="ge-why__watermark" aria-hidden="true"><Image src="/assets/images/ce-icon.png" alt="" width={1200} height={1200} sizes="100vw" /></div><div className="ge-container ge-why__grid">
        <div className="ge-why__lead ge-reveal" data-reveal="left"><p className="ge-eyebrow ge-eyebrow--light">Why Choose Go Execution</p><h2>Built for Momentum.<br />Accountable by Design.</h2><p>Strategy, web development in USA, creative, and performance marketing operate together under one focused growth team.</p><Link className="ge-why__cta-btn" href="/about"><span>Discover Our Approach</span><b aria-hidden="true">↗</b></Link></div>
        <div className="ge-why-cards">
          {[
            { title: "Integrated Marketing & Tech Ecosystem", copy: "No fragmented vendors or agency hand-offs. Strategy, custom web development in USA, SEO, and paid performance marketing work under one dedicated team." },
            { title: "Transparent ROI & Real-Time Reporting", copy: "Clear campaign milestones, direct executive updates, and live performance dashboards so you always track your commercial return." },
            { title: "Premium Aesthetic & Conversion Design", copy: "Visual excellence engineered for commercial impact. We craft luxury designs and fast web development in USA built to convert traffic into clients." },
            { title: "Scalable Architecture for Market Leadership", copy: "Enterprise-grade Next.js code built for search engine visibility, sub-second load times, security, and frictionless business expansion." },
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

      <TestimonialShowcase items={testimonials} />

      <section className="ge-section ge-faq"><div className="ge-container"><div className="ge-section-heading ge-reveal" style={{ marginBottom: 48 }}><p className="ge-eyebrow">Clear Answers</p><h2>Frequently Asked Questions</h2></div>
        <div className="ge-faq-grid ge-reveal"><div className="ge-faq-card"><div className="ge-faq-card-header"><div className="ge-faq-email"><span className="ge-faq-email-label">Have questions for our US team?</span><a href="mailto:justin@goexecution.com" className="ge-faq-email-link">justin@goexecution.com</a></div><Link href="/contact" className="ge-button ge-button--gold ge-magnetic ge-faq-contact-btn"><span>Get in touch</span><span aria-hidden="true">↗</span></Link></div>
          <FaqAccordion items={faqs} hoverToOpen idPrefix="home-faq" className="ge-faq-accordion" />
        </div><div className="ge-faq-image-wrapper"><Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=70&fit=crop" alt="Go Execution Digital Marketing Agency in USA Team" className="ge-faq-img" fill sizes="(max-width: 991px) 100vw, 50vw" quality={85} /><div className="ge-faq-image-badge"><span className="ge-faq-image-badge__dot" /><div className="ge-faq-image-badge__text"><strong>Direct Access to Founders</strong><span>Fast responses within 2 hours</span></div></div></div></div>
      </div></section>

      <section className="ge-section ge-pricing"><div className="ge-container"><div className="ge-section-heading ge-reveal"><div><p className="ge-eyebrow">Growth Packages</p><h2>Transparent Marketing & Web Solutions</h2></div></div>
        <PricingGrid groups={content.pricing} />
      </div></section>

    </main>
  );
}
