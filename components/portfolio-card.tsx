"use client";

import Image from "next/image";
import { useRef } from "react";

export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
};

const videoPattern = /\.(mp4|webm|ogg)(?:[?#].*)?$/i;

export function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasMedia = Boolean(item.image && item.image !== "#");
  const isVideo = hasMedia && videoPattern.test(item.image);

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
    <a
      className={`ge-project ge-project--${index + 1} is-visible no-lightbox${isVideo ? " ge-project--video" : ""}`}
      data-elementor-open-lightbox="no"
      data-no-lightbox="true"
      data-category={slug(item.category)}
      href={hasMedia ? item.image : "#"}
      target={hasMedia ? "_blank" : undefined}
      rel={hasMedia ? "noopener noreferrer" : undefined}
      aria-label={hasMedia ? `${item.title} portfolio ${isVideo ? "video" : "image"}` : `${item.title} portfolio preview unavailable`}
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
          <Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
        ) : (
          <span className="ge-project__placeholder">Portfolio Preview</span>
        )}
      </div>
      <div className="ge-project__meta">
        <span>{item.category || "Portfolio"}</span>
        <strong>{item.title}</strong>
        <b aria-hidden="true" />
      </div>
    </a>
  );
}

function slug(value: string) {
  return value.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
