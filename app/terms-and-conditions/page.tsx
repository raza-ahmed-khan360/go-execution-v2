import type { Metadata } from "next";
import content from "@/lib/wp-content.json";
import { LegalPage } from "@/components/legal-page";
import { JsonLd, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Terms and Conditions | Go Execution Digital Services" },
  description:
    "Review the terms and conditions governing your use of the Go Execution website and engagement with our digital strategy, design, and marketing services.",
  alternates: { canonical: "/terms-and-conditions/" },
  openGraph: { url: "/terms-and-conditions/" },
};

export default function Terms() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPage({ path: "/terms-and-conditions/", title: "Terms and Conditions | Go Execution Digital Services" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Terms & Conditions", url: "/terms-and-conditions/" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <LegalPage eyebrow="Legal" title="Terms & Conditions" copy="The following terms and conditions apply to all projects, services, packages, and digital solutions provided by Go Execution." data={content.legal.terms} />
    </>
  );
}
