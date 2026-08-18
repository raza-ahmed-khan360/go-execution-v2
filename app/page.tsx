import type { Metadata } from "next";
import { Homepage, homepageFaqs } from "@/components/homepage";
import { JsonLd, buildOrganization, buildWebSite, buildWebPage, buildFAQPage } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Agency USA | Go Execution",
  },
  description:
    "Go Execution is a US digital marketing agency for web development, SEO, paid advertising, branding, and measurable business growth.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Digital Marketing Agency USA | Go Execution",
    description:
      "Go Execution is a US digital marketing agency for web development, SEO, paid advertising, branding, and measurable business growth.",
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
        title: "Digital Marketing Agency in USA | Web, SEO & Growth | Go Execution",
      }),
      buildFAQPage({ path: "/" }, homepageFaqs.map(([q, a]) => ({ question: q, answer: a }))),
    ],
  };

  return (
    <>
      <JsonLd data={homeGraph} />
      <Homepage />
    </>
  );
}
