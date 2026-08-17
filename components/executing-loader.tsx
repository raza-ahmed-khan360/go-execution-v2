"use client";

import { useEffect, useState } from "react";

export function ExecutingLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const mobile = window.matchMedia("(max-width: 1024px)").matches;

    // The branded loader remains part of the desktop experience. On mobile it
    // must not cover the real hero or wait for every image/script to finish.
    if (mobile) return;

    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    let dismissed = false;
    let timer = 0;
    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      timer = window.setTimeout(() => {
        setHidden(true);
        root.style.overflow = previousOverflow;
      }, 280);
    };

    if (document.readyState === "complete") dismiss();
    else window.addEventListener("load", dismiss, { once: true });

    const fallback = window.setTimeout(dismiss, 1400);
    return () => {
      window.removeEventListener("load", dismiss);
      window.clearTimeout(timer);
      window.clearTimeout(fallback);
      root.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div className={`ge-preloader${hidden ? " is-hidden" : ""}`} role="status" aria-label="Executing site loading" suppressHydrationWarning>
      <svg width="0" height="0" aria-hidden="true" focusable="false"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" /><feBlend in="SourceGraphic" in2="goo" /></filter></defs></svg>
      <div className="ge-preloader__inner">
        <span className="ge-preloader__text">Executing</span>
        <div className="ge-gooey-loader" aria-hidden="true"><span className="dot" /><span className="dot" /></div>
      </div>
    </div>
  );
}
