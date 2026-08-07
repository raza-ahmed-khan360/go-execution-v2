import Image from "next/image";
import Link from "next/link";
import content from "@/lib/wp-content.json";
import { ServicesCarousel } from "@/components/services-carousel";
import { MobileHeroStory } from "@/components/mobile-hero-story";
import { DesktopHeroBackground } from "@/components/desktop-hero-background";
import { FaqAccordion, PortfolioGrid, PricingGrid } from "@/components/interactive-sections";
import { TestimonialShowcase, type Testimonial } from "@/components/testimonial-showcase";

const services = [
  { slug: "website-design-development", title: "Web Development in USA", copy: "Conversion-focused web development in USA engineered to load lightning fast, look exceptional, and turn traffic into clients." },
  { slug: "logo-design", title: "Graphic Designing & Branding", copy: "Distinct brand identities, logo systems, and marketing collateral designed for confident growth in the US market." },
  { slug: "digital-marketing", title: "Digital Marketing in USA", copy: "Scale your revenue through targeted digital marketing in USA, performance campaigns, lead generation, and high-converting funnels." },
  { slug: "seo-services", title: "SEO & Search Marketing in USA", copy: "Dominate Google search results with sustainable SEO strategies, keyword authority, and commercial search intent." },
  { slug: "mobile-apps", title: "Mobile Apps Development", copy: "Intuitive iOS & Android mobile applications built for US enterprises and growing digital products by Go Execution." },
  { slug: "video-animation", title: "Video Animation & Motion", copy: "Strategic video animation and motion stories that explain, engage, and elevate your marketing in USA." },
].map((service, index) => ({
  ...service,
  number: String(index + 1).padStart(2, "0"),
  image: content.services[service.slug as keyof typeof content.services].image,
}));

const growthSteps = [
  {
    title: "Strategic Marketing in USA",
    copy: "Aligning your brand messaging and digital presence to resonate with high-intent buyers across the United States.",
    image: "/assets/images/Brand_Value_Com.jpeg",
    alt: "Strategic Marketing in USA by Go Execution",
  },
  {
    title: "Conversion-Driven Web Development",
    copy: "Optimizing user journeys with fast, responsive web development in USA that turns visitors into qualified sales leads.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Conversion-Focused Web Development in USA",
  },
  {
    title: "Unified Digital Marketing Strategy",
    copy: "Integrating SEO, paid media, and content marketing under one premier digital marketing agency in USA.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Digital Marketing Agency in USA Strategy",
  },
  {
    title: "Accountable Growth by Go Execution",
    copy: "Our dedicated growth teams at Go Execution take full accountability for your commercial performance and scaling ROI.",
    image: "/assets/images/UFS.jpeg",
    alt: "Accountable Marketing Execution in USA",
  },
] as const;

const testimonials: readonly Testimonial[] = [
  { quote: "Go Execution transformed our online presence. The new web development in USA generated 127% more qualified leads in the first quarter. Their strategic approach made all the difference.", name: "Maya Chen", role: "CEO, Meridian Labs", metric: "127%", metricLabel: "more qualified leads" },
  { quote: "We hit $2.4M in revenue in our first year with the ecommerce platform built by Go Execution. Their digital marketing in USA works flawlessly.", name: "Raj Patel", role: "Founder, Coastal Roasters", metric: "$2.4M", metricLabel: "first-year revenue" },
  { quote: "Their digital marketing in USA campaigns delivered a 312% ROI. We generated 847 qualified leads and closed $4.2M in sales. Best marketing agency in USA we've worked with.", name: "Lucia Torres", role: "Marketing Director, Velocity Motors", metric: "312%", metricLabel: "campaign return on investment" },
  { quote: "The website redesign increased consultation requests by 94%. We now rank #1 in the US for key terms. Go Execution SEO expertise is exceptional.", name: "Kwame Asante", role: "Managing Partner, Zenith Legal", metric: "94%", metricLabel: "more consultation requests" },
  { quote: "The brand identity they created perfectly captures our clean beauty philosophy. We gained 12,000 Instagram followers in 3 months and got featured in 5 major publications.", name: "Anika Bergström", role: "Brand Manager, Lumina Cosmetics", metric: "12K", metricLabel: "new followers in 90 days" },
  { quote: "The property management platform reduced our admin time by 73%. We now manage 240 properties efficiently with their custom solution.", name: "James Mitchell", role: "Owner, Horizon Real Estate", metric: "73%", metricLabel: "less administration time" },
  { quote: "The explainer videos produced by Go Execution got 2.4M views and increased our conversion rate by 34%. The quality and storytelling are outstanding.", name: "Sofia Rodriguez", role: "Director, Pulse Marketing", metric: "2.4M", metricLabel: "campaign video views" },
  { quote: "Our online ordering platform generated $180K in the first year. The custom cake builder is exactly what we needed. Customer satisfaction is at 92%.", name: "Chen Wei", role: "Owner, Artisan Bakery", metric: "$180K", metricLabel: "online sales in year one" },
  { quote: "The rebrand positioned us perfectly for enterprise clients in USA. We saw a 156% increase in qualified leads and secured 3 major partnerships.", name: "Emma Thompson", role: "VP Marketing, TechFlow Solutions", metric: "156%", metricLabel: "growth in qualified leads" },
] as const;

const faqs = [
  ["Why choose Go Execution as your digital marketing agency in USA?", "Go Execution offers integrated web development in USA, data-driven digital marketing in USA, and dedicated account management focused on proven commercial ROI."],
  ["How long does web development in USA take?", "Timelines vary depending on scope, but most custom web development in USA projects take between 4 to 8 weeks from strategy to live launch."],
  ["What is included in your digital marketing in USA packages?", "Our marketing in USA packages cover search engine optimization (SEO), paid ad management, content strategy, landing page funnels, and continuous monthly optimization."],
  ["Does Go Execution customize marketing plans for US businesses?", "Yes! All packages are structured starting points. Go Execution tailors custom deliverables and strategic pricing for startups and established US enterprises."],
  ["How fast can Go Execution launch a campaign?", "Most digital marketing in USA campaigns and initial website builds launch within 1 to 2 weeks following initial discovery and strategy alignment."],
] as const;

function HeroContent() {
  return (
    <div className="ge-hero__content">
      <p className="ge-eyebrow ge-eyebrow--light ge-hero-reveal"><span />#1 Premier Digital Marketing Agency in USA</p>
      <h1 className="ge-hero__title">
        <span className="ge-hero-reveal">Web Development &</span>
        <span className="ge-hero-reveal ge-hero__title-accent">Digital Marketing in USA</span>
      </h1>
      <p className="ge-hero__copy ge-hero-reveal">Go Execution is a leading digital marketing agency in USA. We combine high-performance web development in USA, search engine marketing, and strategic growth solutions to scale US businesses.</p>
      <div className="ge-hero__actions ge-hero-reveal">
        <Link className="ge-button ge-button--gold ge-magnetic" href="/contact">Get Free USA Growth Audit<span aria-hidden="true">↗</span></Link>
        <a className="ge-text-link" href="#work">Explore Our Services<span aria-hidden="true">↓</span></a>
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
        {[["500", "+", "US Websites Created"], ["300", "+", "Marketing Campaigns"], ["70", "+", "Mobile Apps Built"], ["1", "M+", "Client Revenue Generated"]].map(([value, suffix, label]) => <div className="ge-stat ge-reveal" key={label}><strong data-counter={value} data-suffix={suffix}>{value}{suffix}</strong><span>{label}</span></div>)}
      </div></section>

      <section className="ge-industries"><div className="ge-container ge-reveal"><p className="ge-eyebrow ge-eyebrow--light">Industries We Scale in USA</p><div className="ge-marquee" aria-label="Industries"><div><span>Fashion & Retail</span><i>✦</i><span>Health & Wellness</span><i>✦</i><span>Real Estate</span><i>✦</i><span>Technology</span><i>✦</i><span>Professional Services</span><i>✦</i><span>Hospitality</span><i>✦</i></div></div></div></section>

      <section className="ge-section ge-problems ge-growth-redesign ge-growth-redesign--story"><div className="ge-container">
        <div className="ge-problems-heading ge-reveal"><p className="ge-eyebrow">Go Execution Growth Engine</p><h2>Full-Service Marketing Agency in USA</h2><p className="ge-growth-redesign__intro">Four integrated growth systems combining custom web development in USA with data-driven marketing in USA to scale your commercial revenue.</p></div>
        <div className="ge-scroll-section"><div className="ge-scroll-text">
          {growthSteps.map((step, index) => <article className={`ge-scroll-step ge-growth-card ge-growth-story ge-reveal${index === 0 ? " is-active" : ""}`} data-index={index} data-reveal={index % 2 === 0 ? "left" : "right"} key={step.title} style={{ "--card-index": index } as React.CSSProperties}><div className="ge-scroll-step__mobile-img-wrap"><Image src={step.image} alt={step.alt} fill sizes="(max-width: 820px) 100vw, 50vw" quality={80} /></div><div className="ge-growth-story__content"><div className="ge-scroll-step__header"><span className="ge-scroll-step__badge">{String(index + 1).padStart(2, "0")}</span><span className="ge-growth-story__label">Growth System</span></div><h3>{step.title}</h3><p>{step.copy}</p><span className="ge-growth-story__line" aria-hidden="true" /></div></article>)}
        </div></div>
      </div></section>

      <section id="services" className="ge-section ge-services"><div className="ge-container">
        <div className="ge-section-heading ge-section-heading--wide ge-reveal"><div><p className="ge-eyebrow">360° Growth Solutions</p><h2>Web Development & Digital Marketing in USA</h2></div><div><p style={{ marginBottom: 20 }}>Go Execution unites strategy, design, technology, and performance marketing in USA so every campaign generates measurable commercial return.</p><Link className="ge-button ge-button--outline" href="/services">Explore All Services</Link></div></div>
        <ServicesCarousel services={services} />
      </div></section>

      <section id="work" className="ge-section ge-work"><div className="ge-container">
        <div className="ge-section-heading ge-section-heading--wide ge-reveal"><div><p className="ge-eyebrow">Proven Results</p><h2>Featured USA Client Projects</h2></div><p>Explore selected work published from our live portfolio across web development in USA, digital marketing, and branding.</p></div>
        <PortfolioGrid items={content.portfolio.filter((project) => project.category === "Website Design & Development")} initialLimit={6} includeAll={false} deferCatalogue />
      </div></section>

      <section className="ge-section ge-why ge-why--split"><div className="ge-why__watermark" aria-hidden="true"><Image src="/assets/images/ce-icon.png" alt="" width={1200} height={1200} sizes="100vw" /></div><div className="ge-container ge-why__grid">
        <div className="ge-why__lead ge-reveal" data-reveal="left"><p className="ge-eyebrow ge-eyebrow--light">Why Go Execution</p><h2>Top Digital Marketing Agency in USA</h2><p>Strategy, web development in USA, creative, and performance marketing move together under one dedicated growth team.</p><Link className="ge-why__cta-btn" href="/about"><span>Discover Our Approach</span><b aria-hidden="true">↗</b></Link></div>
        <div className="ge-why-cards">
          {[
            { title: "All-in-One Marketing Agency in USA", copy: "No fragmented agency hand-offs. Strategy, web development in USA, SEO, and paid performance marketing work under one dedicated team." },
            { title: "Transparent Scope & Guaranteed ROI", copy: "Clear milestones, direct communication, and real-time performance analytics so you always know your growth trajectory." },
            { title: "Premium Creative & High-Speed Builds", copy: "Aesthetics engineered for commercial impact. We craft high-end designs and fast web development in USA built to convert." },
            { title: "Scalable Architecture for US Market Dominance", copy: "Enterprise-grade code built for search visibility, speed, enterprise security, and frictionless business expansion." },
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
        <div className="ge-faq-grid ge-reveal"><div className="ge-faq-card"><div className="ge-faq-card-header"><div className="ge-faq-email"><span className="ge-faq-email-label">Have questions for our USA team?</span><a href="mailto:justin@goexecution.com" className="ge-faq-email-link">justin@goexecution.com</a></div><Link href="/contact" className="ge-button ge-button--gold ge-magnetic ge-faq-contact-btn"><span>Get in touch</span><span aria-hidden="true">↗</span></Link></div>
          <FaqAccordion items={faqs} hoverToOpen idPrefix="home-faq" className="ge-faq-accordion" />
        </div><div className="ge-faq-image-wrapper"><Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=70&fit=crop" alt="Go Execution Digital Marketing Agency in USA Team" className="ge-faq-img" fill sizes="(max-width: 991px) 100vw, 50vw" quality={85} /><div className="ge-faq-image-badge"><span className="ge-faq-image-badge__dot" /><div className="ge-faq-image-badge__text"><strong>Direct Access to Founders</strong><span>Fast responses within 2 hours</span></div></div></div></div>
      </div></section>

      <section className="ge-section ge-pricing"><div className="ge-container"><div className="ge-section-heading ge-reveal"><div><p className="ge-eyebrow">Growth Offers</p><h2>Flexible Marketing & Web Packages</h2></div></div>
        <PricingGrid groups={content.pricing} />
      </div></section>

    </main>
  );
}
