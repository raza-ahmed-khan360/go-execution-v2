import type { Metadata } from "next";
import { Homepage, homepageFaqs } from "@/components/homepage";
import { JsonLd, buildOrganization, buildWebSite, buildWebPage, buildFAQPage } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: {
    absolute: "Global Digital Marketing Agency | Go Execution",
  },
  description:
    "Go Execution is a digital marketing agency for web development, SEO, paid advertising, branding, and measurable business growth.",
  alternates: {
    canonical: "/",
  },
  openGraph: { type: "website", siteName: "Go Execution", images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    url: "/",
    title: "Global Digital Marketing Agency | Go Execution",
    description:
      "Go Execution is a digital marketing agency for web development, SEO, paid advertising, branding, and measurable business growth.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {
  const homeGraph = {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganization(),
      buildWebSite(),
      buildWebPage({
        path: "/",
        title: "Global Digital Marketing Agency | Web, SEO & Growth | Go Execution",
      }),
      buildFAQPage({ path: "/" }, [...homepageFaqs]),
    ],
  };

  return (
    <>
      <JsonLd data={homeGraph} />
      <Homepage />
    </>
  );
}
