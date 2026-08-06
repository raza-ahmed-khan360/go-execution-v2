import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { ExecutingLoader } from "@/components/executing-loader";
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
    default: "Digital Marketing & Web Design Agency | Go Execution",
    template: "%s | Go Execution",
  },
  description:
    "Go Execution helps US businesses grow with web design, SEO, digital marketing, branding, mobile apps, and video animation focused on measurable results.",
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
    title: "Digital Marketing & Web Design Agency | Go Execution",
    description:
      "Go Execution helps US businesses grow with web design, SEO, digital marketing, branding, mobile apps, and video animation focused on measurable results.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Go Execution" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Web Design Agency | Go Execution",
    description:
      "Go Execution helps US businesses grow with web design, SEO, digital marketing, branding, mobile apps, and video animation focused on measurable results.",
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1c2c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable} data-scroll-behavior="smooth">
      <body className="ge-loaded">
        <ExecutingLoader />
        <a className="ge-skip-link" href="#primary">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <div className="ge-custom-cursor" aria-hidden="true" />
        <SiteEffects />
      </body>
    </html>
  );
}
