import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"
import { Poppins } from "next/font/google";
import { DeferredAnalytics } from "@/components/deferred-analytics";
import { ExecutingLoader } from "@/components/executing-loader";
import { FloatingConsultation } from "@/components/floating-consultation";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteEffects } from "@/components/site-effects";
import { Footer, Header } from "@/components/site-shell";
import { JsonLd, buildOrganization, buildWebSite, buildPlace } from "@/lib/seo/jsonld";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goexecution.com"),
  title: {
    default: "Global Digital Marketing Agency | Go Execution",
    template: "%s | Go Execution",
  },
  description:
    "Go Execution delivers web development, SEO, paid advertising, branding, content, and growth strategy for ambitious businesses.",
  applicationName: "Go Execution",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Go Execution",
    title: "Global Digital Marketing Agency | Go Execution",
    description:
      "Go Execution delivers web development, SEO, paid advertising, branding, content, and growth strategy for ambitious businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Digital Marketing Agency | Go Execution",
    description:
      "Go Execution delivers web development, SEO, paid advertising, branding, content, and growth strategy for ambitious businesses.",
  },
  verification: {
    google: "googlef9d6a777118f2fa7",
    other: {
      "ahrefs-site-verification": ["b1cbe76ec8870d21b1b5f29fc257102bdd1e8f4b191d52db05f0f0925455abe9"],
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1c2c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="ge-loaded" suppressHydrationWarning>
        <DeferredAnalytics />
        <ExecutingLoader />
        <a className="ge-skip-link" href="#primary">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <FloatingConsultation />
        <SpeedInsights />
        <Analytics />
        <div className="ge-custom-cursor" aria-hidden="true" />
        <SiteEffects />
        <JsonLd data={{ "@context": "https://schema.org", "@graph": [buildOrganization(), buildWebSite(), buildPlace()] }} />
      </body>
    </html>
  );
}
