"use client";
import { site } from "@/lib/seo/site";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const dropdowns = {
  portfolio: [
    ["View All Projects", "/portfolio/?category=all-projects"],
    ["Website Design & Development", "/portfolio/?category=website-design-development"],
    ["Graphic Designing", "/portfolio/?category=graphic-designing"],
    ["Digital Marketing", "/portfolio/?category=digital-marketing"],
    ["Video Animation", "/portfolio/?category=video-animation"],
    ["Mobile Apps", "/portfolio/?category=mobile-apps"],
  ],
  services: [
    ["Explore All Services", "/services/"],
      ["Web Development", "/services/web-development/"],
    ["SEO Services", "/services/seo/"],
    ["Digital Marketing", "/services/digital-marketing/"],
    ["Design & Branding", "/services/design-branding/"],
    ["Video Animation", "/services/video/"],
    ["Mobile Apps", "/services/mobile-app-development/"],
  ],
  industries: [
    ["Explore All Industries", "/industries/"],
      ["Real Estate", "/industries/real-estate/"],
    ["Fashion", "/industries/fashion/"],
    ["Retail", "/industries/retail/"],
    ["Hospitality", "/industries/hospitality/"],
    ["Technology & SaaS", "/industries/technology/"],
    ["Professional Services", "/industries/professional-services/"],
    ["Health & Wellness", "/industries/health-wellness/"],
  ],
} as const;

type DropdownName = keyof typeof dropdowns;

function ChevronDownIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path d="m5.25 7.5 4.75 4.75 4.75-4.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path d="m14.75 12.5-4.75-4.75-4.75 4.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<DropdownName | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const fixedRef = useRef(false);
  const darkRef = useRef(false);

  useEffect(() => {
    document.body.classList.toggle("ge-menu-open", open);
    return () => document.body.classList.remove("ge-menu-open");
  }, [open]);

  useEffect(() => {
    let frame = 0;
    const updateHeader = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const fixed = window.scrollY > 80;
        if (fixedRef.current !== fixed) {
          fixedRef.current = fixed;
          setIsFixed(fixed);
        }
        if (!fixed || !headerRef.current) {
          if (darkRef.current) {
            darkRef.current = false;
            setIsOverDark(false);
          }
          return;
        }
        const headerRect = headerRef.current.getBoundingClientRect();
        const overDark = Array.from(document.querySelectorAll(".ge-industries, .ge-cta, .ge-footer, .ge-inner-cta, .ge-contact-note")).some((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= headerRect.bottom && rect.bottom >= headerRect.top;
        });
        if (darkRef.current !== overDark) {
          darkRef.current = overDark;
          setIsOverDark(overDark);
        }
      });
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setDropdown(null);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setDropdown(null);
      setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeNavigation = () => {
    setDropdown(null);
    setOpen(false);
  };

  const renderDropdown = (name: DropdownName, label: string) => (
    <li
      className={`ge-menu__item ge-menu__item--dropdown${dropdown === name ? " is-open" : ""}`}
      onMouseEnter={() => setDropdown(name)}
      onMouseLeave={() => setDropdown(null)}
      onFocusCapture={() => setDropdown(name)}
    >
      <button
        className="ge-menu__trigger"
        type="button"
        aria-expanded={dropdown === name}
        aria-controls={`ge-${name}-dropdown`}
        onClick={() => setDropdown((current) => (current === name ? null : name))}
      >
        {label}<ChevronDownIcon className="ge-nav-chevron" />
      </button>
      <ul id={`ge-${name}-dropdown`} className="ge-nav-dropdown">
        {dropdowns[name].map(([itemLabel, href]) => (
          <li key={href}>
            <Link href={href} onClick={closeNavigation}><span>{itemLabel}</span></Link>
          </li>
        ))}
      </ul>
    </li>
  );

  return (
    <header ref={headerRef} className={`ge-header${isFixed ? " is-fixed" : ""}${isOverDark ? " is-over-dark" : ""}`}>
      <div className="ge-container ge-header__inner">
        <Link className="ge-brand" href="/" aria-label="Go Execution home">
          <Image
            src="/assets/images/logo-dark.png"
            alt="Go Execution"
            width={340}
            height={79}
            sizes="(max-width: 580px) 140px, (max-width: 1100px) 220px, 270px"
            quality={60}
            preload
          />
        </Link>
        <button className="ge-menu-toggle" type="button" aria-expanded={open} aria-controls="ge-primary-menu" onClick={() => { setOpen((current) => !current); setDropdown(null); }}>
          <span /><span /><span className="screen-reader-text">Toggle menu</span>
        </button>
        <nav id="ge-primary-menu" className={`ge-navigation ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          <div className="ge-mobile-menu-header">
            <Link className="ge-brand" href="/" onClick={closeNavigation} aria-label="Go Execution home">
              <Image src="/assets/images/logo-light.png" alt="Go Execution" width={180} height={42} sizes="180px" />
            </Link>
            <button className="ge-mobile-menu-close" type="button" onClick={closeNavigation} aria-label="Close menu">
              ✕
            </button>
          </div>
          <ul className="ge-menu">
            <li><Link href="/" onClick={closeNavigation}>Home</Link></li>
            {renderDropdown("portfolio", "Portfolio")}
            {renderDropdown("services", "Services")}
            {renderDropdown("industries", "Industries")}
            <li><Link href="/pricing/" onClick={closeNavigation}>Pricing</Link></li>
            <li><Link href="/about/" onClick={closeNavigation}>About</Link></li>
            <li><Link href="/contact/" onClick={closeNavigation}>Contact</Link></li>
            <li><Link href="/blog/" onClick={closeNavigation}>Insights</Link></li>
          </ul>
          <Link className="ge-header-cta ge-magnetic" href="/contact/" onClick={closeNavigation}><span>Book a Free Consultation</span></Link>
        </nav>
      </div>
    </header>
  );
}

function getPageSpecificCta(pathname: string) {
  if (pathname === "/contact" || pathname === "/contact/") {
    return null;
  }

  // Web Development Sub-services
  if (pathname.includes("/services/web-development/custom-web-development")) {
    return {
      eyebrow: "Custom Full-Stack Engineering",
      headline: "Build Your Custom Next.js Platform.",
      copy: "Zero template bloat. Enterprise Next.js and React architectures built for sub-second speeds.",
    };
  }
  if (pathname.includes("/services/web-development/wordpress-development")) {
    return {
      eyebrow: "Enterprise WordPress Architecture",
      headline: "Upgrade Your WordPress Platform.",
      copy: "Custom WordPress theme development, Gutenberg blocks, and speed-optimized CMS platforms.",
    };
  }
  if (pathname.includes("/services/web-development/nextjs-development")) {
    return {
      eyebrow: "Next.js 16 & React 19 Engineering",
      headline: "Accelerate Your Web Application.",
      copy: "Server-side rendering, static site generation, and sub-second Core Web Vitals performance.",
    };
  }
  if (pathname.includes("/services/web-development/ecommerce-development")) {
    return {
      eyebrow: "High-Converting Online Storefronts",
      headline: "Scale Your E-Commerce Sales.",
      copy: "Headless Shopify, custom WooCommerce, and frictionless checkout conversion flows.",
    };
  }
  if (pathname.includes("/services/web-development/landing-page-development")) {
    return {
      eyebrow: "Paid Campaign Lead Funnels",
      headline: "Launch Your High-ROAS Landing Page.",
      copy: "Conversion rate optimized landing pages designed to turn ad clicks into sales leads.",
    };
  }
  if (pathname.includes("/services/web-development/website-redesign")) {
    return {
      eyebrow: "Brand Modernization & Migration",
      headline: "Redesign Without Losing SEO Ranks.",
      copy: "Modernize your website UX while preserving search engine traffic and authority.",
    };
  }
  if (pathname.includes("/services/web-development/website-speed")) {
    return {
      eyebrow: "Core Web Vitals Remediation",
      headline: "Achieve Sub-Second Load Speeds.",
      copy: "Eliminate code bloat, optimize JavaScript bundles, and pass Google PageSpeed audits.",
    };
  }
  if (pathname.includes("/services/web-development")) {
    return {
      eyebrow: "Enterprise Web Engineering",
      headline: "Build Your High-Performance Web Platform.",
      copy: "Custom Next.js, React, and WordPress web development tailored for market dominance.",
    };
  }

  // SEO Services Sub-services
  if (pathname.includes("/services/seo/technical-seo")) {
    return {
      eyebrow: "Search Engine Infrastructure",
      headline: "Audit Your Technical SEO Graph.",
      copy: "Structured schema graphs, crawl budget optimization, and Core Web Vitals technical fixes.",
    };
  }
  if (pathname.includes("/services/seo/local-seo")) {
    return {
      eyebrow: "Geo-Targeted Customer Acquisition",
      headline: "Dominate Local Search & Maps.",
      copy: "Rank your business in Google Local 3-Pack search results and capture nearby buyers.",
    };
  }
  if (pathname.includes("/services/seo/ecommerce-seo")) {
    return {
      eyebrow: "Organic Product Catalog Revenue",
      headline: "Rank Product Collections on Google.",
      copy: "Product schema, faceted filter SEO, and organic collection page optimization.",
    };
  }
  if (pathname.includes("/services/seo/small-business-seo")) {
    return {
      eyebrow: "Targeted Organic Growth",
      headline: "Outrank Competitors in Your Market.",
      copy: "High-intent commercial keyword targeting and content optimization for US businesses.",
    };
  }
  if (pathname.includes("/services/seo")) {
    return {
      eyebrow: "Search Engine Dominance",
      headline: "Capture Organic Buyer Traffic.",
      copy: "Technical SEO, local maps optimization, and revenue-driven search engine strategies.",
    };
  }

  // Digital Marketing
  if (pathname.includes("/services/digital-marketing")) {
    return {
      eyebrow: "Paid Growth & Customer Acquisition",
      headline: "Scale Your Performance Campaign ROAS.",
      copy: "Data-driven Google Ads, Meta Ads, and conversion rate optimization campaigns.",
    };
  }

  // Design & Branding
  if (pathname.includes("/services/design-branding")) {
    return {
      eyebrow: "Luxury Brand Identity & Design",
      headline: "Elevate Your Brand Perception.",
      copy: "Iconic brand identity systems, UI/UX interface design, and premium creative assets.",
    };
  }

  // Video Animation
  if (pathname.includes("/services/video")) {
    return {
      eyebrow: "Commercial Motion Graphics",
      headline: "Bring Your Product Story to Life.",
      copy: "Custom 2D/3D animation, explainer videos, and high-converting video ad creatives.",
    };
  }

  // Mobile Apps
  if (pathname.includes("/services/mobile-app")) {
    return {
      eyebrow: "Cross-Platform Mobile Engineering",
      headline: "Launch Your Custom Mobile App.",
      copy: "Native-performing iOS and Android mobile applications built for scale.",
    };
  }

  // General Services Hub
  if (pathname.startsWith("/services")) {
    return {
      eyebrow: "360° Commercial Growth Spectrum",
      headline: "Engineer Your Market Advantage.",
      copy: "Select a specialized service hub or request a custom growth strategy proposal.",
    };
  }

  // Industries
  if (pathname.includes("/industries/real-estate")) {
    return {
      eyebrow: "Real Estate Growth Platforms",
      headline: "Scale Your Property Deals & Listings.",
      copy: "Custom MLS web integrations, IDX listing search, and real estate lead funnels.",
    };
  }
  if (pathname.includes("/industries/fashion")) {
    return {
      eyebrow: "Luxury Apparel Storefronts",
      headline: "Build Your High-Converting Fashion Brand.",
      copy: "Headless e-commerce, lookbook UX design, and social media growth campaigns.",
    };
  }
  if (pathname.includes("/industries/retail")) {
    return {
      eyebrow: "Omnichannel Commerce",
      headline: "Scale Your Retail Operations Online.",
      copy: "Inventory synchronization, local store pickup, and high-ROAS ad funnels.",
    };
  }
  if (pathname.includes("/industries/hospitality")) {
    return {
      eyebrow: "Direct Hotel & Resort Bookings",
      headline: "Drive Direct Guest Revenue.",
      copy: "Direct booking engines, local search optimization, and luxury hospitality branding.",
    };
  }
  if (pathname.includes("/industries/technology")) {
    return {
      eyebrow: "SaaS & Tech Scaleups",
      headline: "Accelerate User Acquisition & Demos.",
      copy: "Sub-second Next.js marketing sites, product onboarding UX, and tech SEO graphs.",
    };
  }
  if (pathname.includes("/industries/professional-services")) {
    return {
      eyebrow: "B2B Practice Growth",
      headline: "Attract High-Value Business Clients.",
      copy: "High-trust corporate website design, local SEO, and B2B lead generation.",
    };
  }
  if (pathname.includes("/industries/health-wellness")) {
    return {
      eyebrow: "Healthcare & Clinic Growth",
      headline: "Expand Patient Consultations & Appointments.",
      copy: "HIPAA-compliant appointment booking, local maps SEO, and patient trust design.",
    };
  }
  if (pathname.startsWith("/industries")) {
    return {
      eyebrow: "Sector-Specific Growth Solutions",
      headline: "Dominate Your Vertical Industry.",
      copy: "Custom digital platforms and search strategies engineered for your market segment.",
    };
  }

  // Pricing
  if (pathname.startsWith("/pricing")) {
    return {
      eyebrow: "Transparent Investment Frameworks",
      headline: "Request Your Custom Scope & Proposal.",
      copy: "Get an itemized technical proposal and growth scope tailored to your business goals.",
    };
  }

  // Portfolio
  if (pathname.startsWith("/portfolio")) {
    return {
      eyebrow: "Proven Commercial Case Studies",
      headline: "Start Your Digital Transformation.",
      copy: "Explore past case studies and discover how we scale brands through custom engineering.",
    };
  }

  // Blog
  if (pathname.startsWith("/blog")) {
    return {
      eyebrow: "Actionable Digital Insights",
      headline: "Elevate Your Digital Strategy.",
      copy: "Read our technical web, search engine, and marketing guides or request a strategy audit.",
    };
  }

  // Default Homepage & General Pages
  return {
    eyebrow: "Have a commercial goal in mind?",
    headline: "Let’s execute your growth strategy.",
    copy: "Strategy, creative, technology, and growth—aligned around your next commercial move.",
  };
}

export function Footer() {
  const pathname = usePathname();
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "invalid" | "ready">("idle");
  const [footerDropdown, setFooterDropdown] = useState<DropdownName | null>(null);
  const ctaData = getPageSpecificCta(pathname || "/");

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setNewsletterStatus("invalid");
      form.reportValidity();
      return;
    }
    setNewsletterStatus("ready");
    form.reset();
  };

  const renderFooterDropdownNav = (name: DropdownName, label: string) => (
    <div
      className={`ge-footer__nav-dropdown-wrap${footerDropdown === name ? " is-open" : ""}`}
      onMouseEnter={() => setFooterDropdown(name)}
      onMouseLeave={() => setFooterDropdown(null)}
    >
      <button
        type="button"
        className="ge-footer__nav-trigger"
        onClick={() => setFooterDropdown((cur) => (cur === name ? null : name))}
        aria-expanded={footerDropdown === name}
      >
        <span>{label}</span>
        {footerDropdown === name ? <ChevronUpIcon className="ge-nav-chevron" /> : <ChevronDownIcon className="ge-nav-chevron" />}
      </button>
      <ul className="ge-footer__popover-menu">
        {dropdowns[name].map(([itemLabel, href]) => (
          <li key={href}>
            <Link href={href} onClick={() => setFooterDropdown(null)}>
              <span>{itemLabel}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="ge-footer">
      <div className="ge-container">
        {ctaData && (
          <div className="ge-footer__lead ge-reveal">
            <div className="ge-footer__lead-background" aria-hidden="true">
              <span className="ge-footer__lead-glow" />
              <span className="ge-footer__lead-orbit" />
              <span className="ge-footer__lead-orbit ge-footer__lead-orbit--inner" />
              <span className="ge-footer__lead-cross">+</span>
              <span className="ge-footer__lead-dot" />
            </div>
            <div className="ge-footer__lead-content">
              <p className="ge-eyebrow ge-eyebrow--light">{ctaData.eyebrow}</p>
              <Link className="ge-footer__headline" href="/contact/">
                {ctaData.headline}
              </Link>
              <p className="ge-footer__lead-copy">{ctaData.copy}</p>
              <div className="ge-footer__lead-action">
                <Link className="ge-button ge-button--gold ge-magnetic" href="/contact/">
                  <span>Book a Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* --- MULTI-COLUMN LINK TREE GRID --- */}
        <div className="ge-footer__columns ge-reveal">
          {/* Col 1: Services */}
          <div>
            <h4 className="ge-footer__col-title">Services Hub</h4>
            <ul className="ge-footer__col-links">
              <li><Link href="/services/">All Services</Link></li>
                <li><Link href="/services/web-development/">Web Development</Link></li>
              <li><Link href="/services/web-development/custom-web-development/">Custom Web Dev</Link></li>
              <li><Link href="/services/web-development/nextjs-development/">Next.js 16 Engineering</Link></li>
              <li><Link href="/services/web-development/wordpress-development/">WordPress Platforms</Link></li>
              <li><Link href="/services/seo/">Search Engine Optimization</Link></li>
              <li><Link href="/services/seo/technical-seo/">Technical SEO Graph</Link></li>
              <li><Link href="/services/digital-marketing/">Digital Marketing</Link></li>
              <li><Link href="/services/design-branding/">Design &amp; Branding</Link></li>
              <li><Link href="/services/video/">Video Animation</Link></li>
              <li><Link href="/services/mobile-app-development/">Mobile App Dev</Link></li>
            </ul>
          </div>

          {/* Col 2: Industries */}
          <div>
            <h4 className="ge-footer__col-title">Industry Verticals</h4>
            <ul className="ge-footer__col-links">
              <li><Link href="/industries/">All Industries</Link></li>
                <li><Link href="/industries/real-estate/">Real Estate Platforms</Link></li>
              <li><Link href="/industries/fashion/">Luxury Fashion Brands</Link></li>
              <li><Link href="/industries/retail/">Omnichannel Retail</Link></li>
              <li><Link href="/industries/hospitality/">Hotel &amp; Direct Booking</Link></li>
              <li><Link href="/industries/technology/">SaaS &amp; Tech Scaleups</Link></li>
              <li><Link href="/industries/professional-services/">B2B Practice Growth</Link></li>
              <li><Link href="/industries/health-wellness/">Healthcare &amp; Clinics</Link></li>
            </ul>
          </div>

          {/* Col 3: Portfolio */}
          <div>
            <h4 className="ge-footer__col-title">Portfolio &amp; Work</h4>
            <ul className="ge-footer__col-links">
              <li><Link href="/portfolio/?category=all-projects">View All Projects</Link></li>
              <li><Link href="/portfolio/?category=website-design-development">Web Engineering</Link></li>
              <li><Link href="/portfolio/?category=graphic-designing">Graphic &amp; UI Design</Link></li>
              <li><Link href="/portfolio/?category=digital-marketing">Digital Ad Campaigns</Link></li>
              <li><Link href="/portfolio/?category=video-animation">Video Motion Ads</Link></li>
              <li><Link href="/portfolio/?category=mobile-apps">Mobile Apps</Link></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="ge-footer__col-title">Company</h4>
            <ul className="ge-footer__col-links">
              <li><Link href="/about/">About Go Execution</Link></li>
              <li><Link href="/pricing/">Investment &amp; Pricing</Link></li>
              <li><Link href="/blog/">Industry Insights &amp; Blog</Link></li>
              <li><Link href="/why-is-my-website-not-ranking-on-google/">Website Ranking Diagnostic</Link></li>
              <li><Link href="/how-long-does-seo-take-for-new-website/">New Website SEO Timeline</Link></li>
              <li><Link href="/contact/">Book Strategy Consultation</Link></li>
              <li><Link href="/terms-of-service/">Terms of Service</Link></li>
                <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
                <li><Link href="/cookie-policy/">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="ge-footer__main">
          <div className="ge-footer__brand-block">
            <Image
              className="ge-footer__logo"
              src="/assets/images/logo-light.png"
              alt="Go Execution"
              width={360}
              height={84}
              sizes="(max-width: 580px) 220px, 275px"
            />
            <p>We are a multidisciplinary digital agency built for businesses that expect more than attractive ideas—they expect progress.</p>
            <div className="ge-footer__socials" aria-label="Social Media Links">
              <a
                href="https://wa.me/17738653770"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp (+1 773 865-3770)"
                className="ge-footer__social-link ge-footer__social-link--whatsapp"
              >
                <FaWhatsapp className="ge-footer__social-icon" />
              </a>
              <a
                href="https://www.facebook.com/GoExecution"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="ge-footer__social-link ge-footer__social-link--facebook"
              >
                <FaFacebookF className="ge-footer__social-icon" />
              </a>
              <a
                href="https://www.instagram.com/go_execution"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="ge-footer__social-link ge-footer__social-link--instagram"
              >
                <FaInstagram className="ge-footer__social-icon" />
              </a>
            </div>
          </div>
          <div className="ge-footer__newsletter">
            <p className="ge-footer__newsletter-title">Join Our Newsletter</p>
            <p className="ge-footer__newsletter-copy">Sign up for our newsletter to enjoy free marketing tips, inspirations, and more.</p>
            <form className="ge-footer__newsletter-form" onSubmit={handleNewsletterSubmit} noValidate>
              <label className="screen-reader-text" htmlFor="footer-email">Email address</label>
              <input id="footer-email" name="email" type="email" autoComplete="email" placeholder="Email Address" required aria-describedby={newsletterStatus === "idle" ? undefined : "footer-newsletter-status"} />
              <button type="submit">Sign Up</button>
            </form>
            <p id="footer-newsletter-status" className={`ge-footer__newsletter-status${newsletterStatus === "idle" ? "" : " is-visible"}`} aria-live="polite">
              {newsletterStatus === "invalid" ? "Please enter a valid email address." : "Newsletter signup is ready to connect to your email platform."}
            </p>
          </div>
        </div>

        {/* --- INTERACTIVE FOOTER NAV BAR WITH DROPDOWNS --- */}
        <nav className="ge-footer__nav" aria-label="Footer navigation">
          <Link className="is-active" href="/">Home</Link>
          {renderFooterDropdownNav("portfolio", "Portfolio")}
          {renderFooterDropdownNav("services", "Services")}
          {renderFooterDropdownNav("industries", "Industries")}
          <Link href="/pricing/">Pricing</Link>
          <Link href="/about/">About</Link>
          <Link href="/contact/">Contact</Link>
          <Link href="/blog/">Blog</Link>
          <Link href="/terms-of-service/">Terms of Service</Link>
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/cookie-policy/">Cookie Policy</Link>
        </nav>

        <div className="ge-footer__details">
          <a href="https://www.google.com/maps/search/?api=1&query=13345+N+Central+Expy,+Suite+203,+Dallas,+Texas+75243" target="_blank" rel="noreferrer">13345 N Central Expy, Suite#203<br />Dallas, Texas 75243</a>
          <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <div className="ge-footer__bottom"><p>© {new Date().getFullYear()} Go Execution. All rights reserved.</p><div className="ge-footer__legal"><Link href="/terms-of-service/">Terms of Service</Link><span aria-hidden="true">|</span><Link href="/privacy-policy/">Privacy Policy</Link><span aria-hidden="true">|</span><Link href="/cookie-policy/">Cookie Policy</Link></div><p>Where Strategy Meets Execution</p></div>
      </div>
    </footer>
  );
}

