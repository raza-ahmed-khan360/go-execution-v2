"use client";

import Link from "next/link";

import { useEffect, useRef, startTransition, useMemo, useState } from "react";
import { PortfolioCard, type PortfolioItem } from "@/components/portfolio-card";

type Package = {
  name: string;
  price: string;
  striked?: string;
  benefits: string[];
};

const portfolioCategories = [
  "Website Design & Development",
  "Graphic Designing",
  "Digital Marketing",
  "Video Animation",
  "Mobile Apps",
] as const;

let portfolioCatalogueRequest: Promise<PortfolioItem[]> | undefined;

function loadPortfolioCatalogue() {
  portfolioCatalogueRequest ??= import("@/lib/wp-content.json").then((module) => module.default.portfolio as PortfolioItem[]);
  return portfolioCatalogueRequest;
}

function slug(value: string) {
  return value.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function PortfolioGrid({
  items,
  initialCategory,
  initialLimit = 9,
  includeAll = true,
  deferCatalogue = false,
}: {
  items: PortfolioItem[];
  initialCategory?: string;
  initialLimit?: number;
  includeAll?: boolean;
  deferCatalogue?: boolean;
}) {
  const categories = includeAll ? [...portfolioCategories, "All Projects"] : [...portfolioCategories];
  const requestedCategory = categories.find((category) => slug(category) === initialCategory);
  const [active, setActive] = useState(requestedCategory ?? categories[0]);
  const [visibleCount, setVisibleCount] = useState(initialLimit);
  const [catalogue, setCatalogue] = useState(items);
  const [hasFullCatalogue, setHasFullCatalogue] = useState(!deferCatalogue);
  const [isLoading, setIsLoading] = useState(false);
  const filtered = useMemo(
    () => (active === "All Projects" ? catalogue : catalogue.filter((item) => item.category === active)),
    [active, catalogue],
  );
  const shown = filtered.slice(0, visibleCount);
  const filterRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);

  useEffect(() => {
    const isMobile = () => window.innerWidth <= 820;
    let intervalId: NodeJS.Timeout;

    const startAutoSlide = () => {
      intervalId = setInterval(() => {
        if (!isMobile() || !filterRef.current || isInteractingRef.current) return;
        const container = filterRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (maxScrollLeft <= 5) return;

        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 140, behavior: "smooth" });
        }
      }, 3000);
    };

    startAutoSlide();
    return () => clearInterval(intervalId);
  }, []);

  const chooseCategory = (category: string, targetEl?: HTMLButtonElement) => {
    isInteractingRef.current = true;
    if (window.innerWidth <= 820 && targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 6000);

    if (deferCatalogue && !hasFullCatalogue && category !== active) {
      setIsLoading(true);
      void loadPortfolioCatalogue().then((fullCatalogue) => {
        startTransition(() => {
          setCatalogue(fullCatalogue);
          setHasFullCatalogue(true);
          setActive(category);
          setVisibleCount(initialLimit);
        });
      }).finally(() => setIsLoading(false));
      return;
    }
    startTransition(() => {
      setActive(category);
      setVisibleCount(initialLimit);
    });
  };

  const preloadCatalogue = () => {
    if (deferCatalogue && !hasFullCatalogue) void loadPortfolioCatalogue();
  };

  return (
    <>
      <div
        ref={filterRef}
        className="ge-filter"
        aria-label="Portfolio categories"
        aria-busy={isLoading}
        onTouchStart={() => {
          isInteractingRef.current = true;
        }}
        onTouchEnd={() => {
          setTimeout(() => {
            isInteractingRef.current = false;
          }, 5000);
        }}
      >
        {categories.map((category) => (
          <button
            className={active === category ? "is-active" : ""}
            type="button"
            aria-pressed={active === category}
            onClick={(e) => chooseCategory(category, e.currentTarget)}
            onMouseEnter={preloadCatalogue}
            onFocus={preloadCatalogue}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="ge-work__grid">
        {shown.map((item, index) => (
          <PortfolioCard item={item} index={index} key={`${item.title}-${index}`} />
        ))}
      </div>
      {filtered.length > visibleCount && (
        <div className="ge-work__actions">
          <button className="ge-button ge-button--outline" type="button" onClick={() => setVisibleCount((count) => count + initialLimit)}>
            Load More Projects
          </button>
        </div>
      )}
    </>
  );
}

export function PricingGrid({ groups }: { groups: Record<string, Package[]> }) {
  const names = Object.keys(groups);
  const [active, setActive] = useState(names[0]);
  const [openFeatures, setOpenFeatures] = useState<string | null>(null);
  const packages = groups[active] ?? [];
  const questionnaire = (() => {
    if (["Website Design", "E-Commerce", "Shopify", "Website Maintenance", "Combo"].includes(active)) {
      return { href: "/web-questionnaire/", label: "Start Website Questionnaire" };
    }
    if (["Logo", "Branding"].includes(active)) {
      return { href: "/logo-questionnaire/", label: "Start Logo Questionnaire" };
    }
    return { href: "/contact/", label: "Book a Free Consultation" };
  })();
  const tabsRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);

  useEffect(() => {
    const isMobile = () => window.innerWidth <= 820;
    let intervalId: NodeJS.Timeout;

    const startAutoSlide = () => {
      intervalId = setInterval(() => {
        if (!isMobile() || !tabsRef.current || isInteractingRef.current) return;
        const container = tabsRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (maxScrollLeft <= 5) return;

        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 130, behavior: "smooth" });
        }
      }, 3000);
    };

    startAutoSlide();
    return () => clearInterval(intervalId);
  }, []);

  const handleTabClick = (name: string, targetEl: HTMLButtonElement) => {
    setActive(name);
    isInteractingRef.current = true;
    if (window.innerWidth <= 820 && targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 6000);
  };

  return (
    <>
      <div
        ref={tabsRef}
        className="ge-pricing-tabs"
        role="tablist"
        aria-label="Pricing package groups"
        onTouchStart={() => {
          isInteractingRef.current = true;
        }}
        onTouchEnd={() => {
          setTimeout(() => {
            isInteractingRef.current = false;
          }, 5000);
        }}
      >
        {names.map((name) => (
          <button
            className={active === name ? "is-active" : ""}
            type="button"
            role="tab"
            aria-selected={active === name}
            onClick={(e) => handleTabClick(name, e.currentTarget)}
            key={name}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="ge-package-panel" role="tabpanel">
        {packages.map((pkg, index) => {
          const id = `${slug(active)}-${index}`;
          const isOpen = openFeatures === id;
          const isFeatured = index === 1;
          return (
            <article className={`ge-package ${isFeatured ? "ge-package--featured" : ""}`} key={`${active}-${pkg.name}`} style={{ "--card-index": index } as React.CSSProperties}>
              <div>
                <p>{active}</p>
                <h2>{pkg.name}</h2>
              </div>
              <strong>{pkg.price}</strong>
              {pkg.striked && <div className="ge-package__striked"><span>{pkg.striked}</span> ONLY</div>}
              <button
                type="button"
                className="ge-package-features-toggle"
                aria-expanded={isOpen}
                aria-controls={`features-${id}`}
                onClick={() => setOpenFeatures((current) => (current === id ? null : id))}
              >
                <span>View Features</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <ul id={`features-${id}`} className="ge-package-features-list" hidden={!isOpen}>
                {pkg.benefits.map((benefit, benefitIndex) => <li key={`${benefit}-${benefitIndex}`}>{benefit}</li>)}
              </ul>
              <Link className="ge-button ge-button--outline" href={questionnaire.href}>
                {questionnaire.label}
              </Link>
            </article>
          );
        })}
      </div>
    </>
  );
}

export function FaqAccordion({
  items,
  hoverToOpen = true,
  idPrefix,
  className = "",
}: {
  items: readonly (readonly [string, string])[];
  hoverToOpen?: boolean;
  idPrefix: string;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={`ge-accordion ${className}`.trim()}>
      {items.map(([question, answer], index) => {
        const isOpen = open === index;
        const panelId = `${idPrefix}-${index + 1}`;
        return (
          <div
            className="ge-accordion__item"
            data-open={isOpen ? "true" : "false"}
            onMouseEnter={hoverToOpen ? () => setOpen(index) : undefined}
            onMouseLeave={hoverToOpen ? () => setOpen(null) : undefined}
            key={question}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen((current) => (current === index ? null : index))}
            >
              <span>{question}</span>
              <b aria-hidden="true">+</b>
            </button>
            <div id={panelId} className="ge-accordion__panel" role="region">
              <div className="ge-accordion__panel-inner">
                <p>{answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
