import type { Metadata } from "next";
import { Homepage } from "@/components/homepage";
import { JsonLd, buildOrganization, buildWebSite, buildWebPage } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Agency USA | Web, SEO & Growth | Go Execution",
  },
  description:
    "Go Execution is a premier full-service digital marketing agency in the USA offering custom web development, SEO, paid advertising, and growth marketing services for US businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Digital Marketing Agency USA | Web, SEO & Growth | Go Execution",
    description:
      "Go Execution is a premier full-service digital marketing agency in the USA offering custom web development, SEO, paid advertising, and growth marketing services for US businesses.",
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
    ],
  };

  return (
    <>
      <JsonLd data={homeGraph} />
      <Homepage />
    </>
  );
}
