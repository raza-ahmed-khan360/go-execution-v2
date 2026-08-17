"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const analyticsDelay = 12_000;

export function DeferredAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const enable = () => setEnabled(true);
    const events: (keyof WindowEventMap)[] = ["pointerdown", "keydown", "scroll"];
    const options: AddEventListenerOptions = { once: true, passive: true };

    events.forEach((eventName) => window.addEventListener(eventName, enable, options));
    const fallback = window.setTimeout(enable, analyticsDelay);

    return () => {
      events.forEach((eventName) => window.removeEventListener(eventName, enable));
      window.clearTimeout(fallback);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="ilS/q7/J4bpZlkyqyoNbWA"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T0VM2DPWQK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T0VM2DPWQK');
        `}
      </Script>
    </>
  );
}
