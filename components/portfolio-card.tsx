"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  alt?: string;
};

const projectAltMap: Record<string, string> = {
  "Band Of Travellers": "Band of Travellers website design by Go Execution",
  "Convoy Platform": "Convoy Platform website design and interface by Go Execution",
  "Ka’Chava": "Ka’Chava website design and ecommerce interface by Go Execution",
  "Ka'Chava": "Ka’Chava website design and ecommerce interface by Go Execution",
  "Lorraine Travel": "Lorraine Travel website design by Go Execution",
  "Stone Wood Construction": "Stone Wood Construction website design by Go Execution",
  "Vee-Vee’s African Restaurant": "Vee-Vee's African Restaurant website design by Go Execution",
  "Vee-Vee's African Restaurant": "Vee-Vee's African Restaurant website design by Go Execution",
};

const videoPattern = /\.(mp4|webm|ogg)(?:[?#].*)?$/i;

export function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasMedia = Boolean(item.image && item.image !== "#");
  const isVideo = hasMedia && videoPattern.test(item.image);
  const altText = item.alt || projectAltMap[item.title] || `${item.title} project by Go Execution`;

  const playPreview = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = true;
    void videoRef.current.play().catch(() => undefined);
  };

  const stopPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    if (video.readyState > 0) video.currentTime = 0;
  };

  return (
    <Link
      className={`ge-project ge-project--${index + 1} is-visible no-lightbox${isVideo ? " ge-project--video" : ""}`}
      data-category={slug(item.category)}
      href={`/portfolio/${slug(item.title)}/`}
      aria-label={`View case study for ${item.title}`}
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
      onFocus={playPreview}
      onBlur={stopPreview}
    >
      <div className="ge-project__media">
        {isVideo ? (
          <video
            ref={videoRef}
            src={item.image}
            preload="auto"
            muted
            loop
            playsInline
            aria-label={`${item.title} muted preview`}
          />
        ) : hasMedia ? (
          <Image src={item.image} alt={altText} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
        ) : (
          <span className="ge-project__placeholder">Portfolio Preview</span>
        )}
      </div>
      <div className="ge-project__meta">
        <span>{item.category || "Portfolio"}</span>
        <strong>{item.title}</strong>
        <b aria-hidden="true" />
      </div>
    </Link>
  );
}

function slug(value: string) {
  return value.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
