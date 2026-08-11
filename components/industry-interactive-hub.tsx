"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Industry } from "@/lib/industries";

type Props = {
  industries: Industry[];
};

export function IndustryInteractiveHub({ industries }: Props) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredIndustries =
    activeTab === "all"
      ? industries
      : industries.filter((ind) => ind.slug === activeTab);

  return (
    <div className="ge-industry-hub">
      {/* --- SECTOR FILTER TABS --- */}
      <div className="ge-industry-hub__filters" role="tablist" aria-label="Industry Sector Filter">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "all"}
          className={`ge-industry-filter-pill${activeTab === "all" ? " is-active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          <span>All Sectors ({industries.length})</span>
        </button>
        {industries.map((ind) => (
          <button
            key={ind.slug}
            type="button"
            role="tab"
            aria-selected={activeTab === ind.slug}
            className={`ge-industry-filter-pill${activeTab === ind.slug ? " is-active" : ""}`}
            onClick={() => setActiveTab(ind.slug)}
          >
            <span>{ind.title}</span>
          </button>
        ))}
      </div>

      {/* --- DARK LUXURY BENTO CARDS GRID --- */}
      <div className="ge-grid ge-grid--3col ge-industry-dark-grid">
        {filteredIndustries.map((ind, idx) => (
          <article key={ind.slug} className="ge-dark-bento-card">
            {/* Ambient Media Banner */}
            <div className="ge-dark-bento-card__media">
              <Image
                src={ind.image}
                alt={ind.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                className="ge-dark-bento-card__img"
              />
              <div className="ge-dark-bento-card__shade" />

              {/* Floating Glass Header Bar */}
              <div className="ge-dark-bento-card__header-bar">
                <span className="ge-dark-bento-card__num-pill">
                  0{idx + 1} &bull; SECTOR
                </span>
                {ind.stats && ind.stats[0] && (
                  <span className="ge-dark-bento-card__stat-pill">
                    <span className="ge-stat-icon">✦</span> {ind.stats[0][0]}
                  </span>
                )}
              </div>
            </div>

            {/* Dark Content Body */}
            <div className="ge-dark-bento-card__body">
              <div className="ge-dark-bento-card__eyebrow-wrap">
                <span className="ge-eyebrow ge-eyebrow--gold">{ind.eyebrow}</span>
              </div>

              <h3 className="ge-dark-bento-card__title">
                <Link href={`/industries/${ind.slug}/`}>{ind.title}</Link>
              </h3>

              <p className="ge-dark-bento-card__desc">{ind.description}</p>

              {/* Glowing Capability Chips */}
              <div className="ge-dark-bento-card__chips">
                {ind.services.slice(0, 3).map((srv, i) => (
                  <span key={srv.slug} className="ge-dark-chip">
                    <span className="ge-chip-icon">{i === 0 ? "⚡" : i === 1 ? "🎯" : "📈"}</span>
                    {srv.title}
                  </span>
                ))}
              </div>

              {/* Full-Width Gold Action Button */}
              <div className="ge-dark-bento-card__action">
                <Link
                  className="ge-button ge-button--gold ge-button--full ge-magnetic"
                  href={`/industries/${ind.slug}/`}
                >
                  <span>Explore {ind.title} Architecture</span>
                  <span className="ge-btn-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
