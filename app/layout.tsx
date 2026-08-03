import type { Metadata } from "next";
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
  title: {
    default: "Go Execution | Digital Growth Agency",
    template: "%s | Go Execution",
  },
  description: "Strategy, creative, technology and growth—executed with purpose.",
  icons: { icon: "/assets/images/favicon.png" },
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
