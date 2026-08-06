import type { Metadata } from "next";
import content from "@/lib/wp-content.json";
import { LegalPage } from "@/components/legal-page";
import { JsonLd, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Website Privacy Policy | Go Execution Digital Services" },
  description:
    "Learn how Go Execution collects, uses, protects, and manages personal information when you visit our website or contact us about digital services.",
  alternates: { canonical: "/privacy-policy/" },
  openGraph: { url: "/privacy-policy/" },
};

export default function Privacy() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPage({ path: "/privacy-policy/", title: "Website Privacy Policy | Go Execution Digital Services" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Privacy Policy", url: "/privacy-policy/" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <LegalPage eyebrow="Legal" title="Privacy Policy" copy="At Go Execution, your privacy is important to us. This Privacy Policy explains how we collect, use, protect, and manage personal information." data={content.legal.privacy} />
    </>
  );
}
