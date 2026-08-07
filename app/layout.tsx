import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { ExecutingLoader } from "@/components/executing-loader";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
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
    default: "Go Execution | Top Digital Marketing Agency & Web Development in USA",
    template: "%s | Go Execution",
  },
  description:
    "Go Execution is a leading digital marketing agency in USA. We specialize in custom web development in USA, targeted digital marketing in USA, SEO, branding, and mobile apps to scale US businesses.",
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
    title: "Go Execution | Top Digital Marketing Agency & Web Development in USA",
    description:
      "Go Execution is a leading digital marketing agency in USA. We specialize in custom web development in USA, targeted digital marketing in USA, SEO, branding, and mobile apps to scale US businesses.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Go Execution Digital Marketing Agency in USA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Execution | Top Digital Marketing Agency & Web Development in USA",
    description:
      "Go Execution is a leading digital marketing agency in USA. We specialize in custom web development in USA, targeted digital marketing in USA, SEO, branding, and mobile apps to scale US businesses.",
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
    <html lang="en" className={poppins.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="ge-loaded" suppressHydrationWarning>
        <ExecutingLoader />
        <a className="ge-skip-link" href="#primary">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <div className="ge-custom-cursor" aria-hidden="true" />
        <SiteEffects />
      </body>
    </html>
  );
}
