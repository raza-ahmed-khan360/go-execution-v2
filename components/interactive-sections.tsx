"use client";

import Link from "next/link";

import { startTransition, useMemo, useState } from "react";
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

  const chooseCategory = (category: string) => {
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
      <div className="ge-filter" aria-label="Portfolio categories" aria-busy={isLoading}>
        {categories.map((category) => (
          <button
            className={active === category ? "is-active" : ""}
            type="button"
            aria-pressed={active === category}
            onClick={() => chooseCategory(category)}
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

  return (
    <>
      <div className="ge-pricing-tabs" role="tablist" aria-label="Pricing package groups">
        {names.map((name) => (
          <button
            className={active === name ? "is-active" : ""}
            type="button"
            role="tab"
            aria-selected={active === name}
            onClick={() => setActive(name)}
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
          return (
            <article className="ge-package" key={`${active}-${pkg.name}`}>
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
              <Link className={`ge-button ${index === 1 ? "ge-button--gold" : "ge-button--outline"}`} href="/contact">Book a Free Consultation</Link>
            </article>
          );
        })}
      </div>
    </>
  );
}

export function FaqAccordion({
  items,
  hoverToOpen = false,
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
            <div id={panelId} className="ge-accordion__panel" hidden={!hoverToOpen && !isOpen}>
              <div><p>{answer}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
