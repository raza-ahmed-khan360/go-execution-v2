"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useEffect, useRef, useState } from "react";

const dropdowns = {
  portfolio: [
    ["View All Projects", "/portfolio?category=all-projects"],
    ["Website Design & Development", "/portfolio?category=website-design-development"],
    ["Graphic Designing", "/portfolio?category=graphic-designing"],
    ["Digital Marketing", "/portfolio?category=digital-marketing"],
    ["Video Animation", "/portfolio?category=video-animation"],
    ["Mobile Apps", "/portfolio?category=mobile-apps"],
  ],
  services: [
    ["Website Design & Development", "/services/website-design-development"],
    ["Graphic Designing", "/services/logo-design"],
    ["Video Animation", "/services/video-animation"],
    ["SEO Services", "/services/seo-services"],
    ["Digital Marketing", "/services/digital-marketing"],
    ["Mobile Apps", "/services/mobile-apps"],
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
            <Link href={href} onClick={closeNavigation}><span>{itemLabel}</span><b aria-hidden="true">↗</b></Link>
          </li>
        ))}
      </ul>
    </li>
  );

  return (
    <header ref={headerRef} className={`ge-header${isFixed ? " is-fixed" : ""}${isOverDark ? " is-over-dark" : ""}`}>
      <div className="ge-container ge-header__inner">
        <Link className="ge-brand" href="/" aria-label="Go Execution home">
          <Image src={isOverDark ? "/assets/images/logo-light.png" : "/assets/images/logo-dark.png"} alt="Go Execution" width={340} height={79} priority />
        </Link>
        <button className="ge-menu-toggle" type="button" aria-expanded={open} aria-controls="ge-primary-menu" onClick={() => { setOpen((current) => !current); setDropdown(null); }}>
          <span /><span /><span className="screen-reader-text">Toggle menu</span>
        </button>
        <nav id="ge-primary-menu" className={`ge-navigation ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          <ul className="ge-menu">
            <li><Link href="/" onClick={closeNavigation}>Home</Link></li>
            {renderDropdown("portfolio", "Portfolio")}
            {renderDropdown("services", "Services")}
            <li><Link href="/pricing" onClick={closeNavigation}>Pricing</Link></li>
            <li><Link href="/about" onClick={closeNavigation}>About</Link></li>
            <li><Link href="/contact" onClick={closeNavigation}>Contact</Link></li>
          </ul>
          <Link className="ge-header-cta ge-magnetic" href="/contact" onClick={closeNavigation}><span>Book a Free</span><span>Consultation</span></Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "invalid" | "ready">("idle");

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

  return (
    <footer className="ge-footer">
      <div className="ge-container">
        <div className="ge-footer__lead ge-reveal">
          <div className="ge-footer__lead-background" aria-hidden="true"><span className="ge-footer__lead-glow" /><span className="ge-footer__lead-orbit" /><span className="ge-footer__lead-orbit ge-footer__lead-orbit--inner" /><span className="ge-footer__lead-cross">+</span><span className="ge-footer__lead-dot" /></div>
          <div className="ge-footer__lead-content"><p className="ge-eyebrow ge-eyebrow--light">Have a project in mind?</p><Link className="ge-footer__headline" href="/contact">Let’s execute it.<span aria-hidden="true">↗</span></Link><p className="ge-footer__lead-copy">Strategy, creative, technology and growth—aligned around your next commercial move.</p></div>
        </div>
        <div className="ge-footer__main">
          <div className="ge-footer__brand-block">
            <Image className="ge-footer__logo" src="/assets/images/logo-light.png" alt="Go Execution" width={360} height={84} />
            <p>We are a multidisciplinary digital agency built for businesses that expect more than attractive ideas—they expect progress.</p>
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
        <nav className="ge-footer__nav" aria-label="Footer navigation">
          <Link className="is-active" href="/">Home</Link>
          <Link href="/portfolio">Portfolio <ChevronDownIcon className="ge-footer__nav-icon" /></Link>
          <Link href="/services">Services <ChevronDownIcon className="ge-footer__nav-icon" /></Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://goexecution.com/blog/">Blog</a>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </nav>
        <div className="ge-footer__details">
          <a href="https://www.google.com/maps/search/?api=1&query=13345+N+Central+Expy,+Ste+203,+Dallas,+Texas+75243" target="_blank" rel="noreferrer">13345 N Central Expy, Ste 203<br />Dallas, Texas 75243</a>
          <a href="tel:+17373166049">+1 (737) 316-6049</a>
          <a href="mailto:justin@goexecution.com">justin@goexecution.com</a>
        </div>
        <div className="ge-footer__bottom"><p>© {new Date().getFullYear()} Go Execution. All rights reserved.</p><div className="ge-footer__legal"><Link href="/terms">Terms & Conditions</Link><span aria-hidden="true">|</span><Link href="/privacy">Privacy Policy</Link></div><p>Where Strategy Meets Execution</p></div>
      </div>
    </footer>
  );
}
