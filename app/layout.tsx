import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"
import { Poppins } from "next/font/google";
import { DeferredAnalytics } from "@/components/deferred-analytics";
import { ExecutingLoader } from "@/components/executing-loader";
import { FloatingConsultation } from "@/components/floating-consultation";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteChatbot } from "@/components/site-chatbot";
import { SiteEffects } from "@/components/site-effects";
import { Footer, Header } from "@/components/site-shell";
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
    default: "Digital Marketing Agency USA | Go Execution",
    template: "%s | Go Execution",
  },
  description:
    "Go Execution delivers web development, SEO, paid advertising, branding, content, and growth strategy for ambitious US businesses.",
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
    title: "Digital Marketing Agency USA | Go Execution",
    description:
      "Go Execution delivers web development, SEO, paid advertising, branding, content, and growth strategy for ambitious US businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency USA | Go Execution",
    description:
      "Go Execution delivers web development, SEO, paid advertising, branding, content, and growth strategy for ambitious US businesses.",
  },
  verification: {
    google: "googlef9d6a777118f2fa7",
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
        <SiteChatbot />
        <SpeedInsights />
        <Analytics />
        <div className="ge-custom-cursor" aria-hidden="true" />
        <SiteEffects />
      </body>
    </html>
  );
}
