import type { Metadata } from "next";
import { LogoQuestionnaireForm } from "@/components/logo-questionnaire-form";
import { JsonLd, buildWebPage, buildBreadcrumbList , buildOrganization, buildWebSite } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Logo Design Brief & Questionnaire | Go Execution" },
  description:
    "Complete our interactive Logo Design Brief to share your brand name, tagline, preferred style, colors, symbols, and brand identity goals with Go Execution.",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: { canonical: "/logo-questionnaire/" },
  openGraph: { type: "website", siteName: "Go Execution", images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }], 
    title: "Logo Design Brief & Questionnaire | Go Execution",
    description:
      "Complete our interactive Logo Design Brief to share your brand name, tagline, preferred style, colors, symbols, and brand identity goals with Go Execution.",
    url: "/logo-questionnaire/",
  },
};

export default function LogoQuestionnairePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
        buildOrganization(),
        buildWebSite(),
      buildWebPage({ path: "/logo-questionnaire/", title: "Logo Design Brief & Questionnaire | Go Execution" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Logo Questionnaire", url: "/logo-questionnaire/" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main ge-questionnaire-page">
        {/* --- STANDALONE HERO --- */}
        <section className="ge-hero ge-hero--inner ge-questionnaire-hero">
          <div className="ge-hero__media-backdrop">
            <div className="ge-hero__media-overlay" />
          </div>

          <div className="ge-container ge-hero__content">
            <div className="ge-hero__badge-wrap">
              <span className="ge-eyebrow ge-eyebrow--gold">Interactive Brand Identity Brief</span>
            </div>

            <h1 className="ge-hero__title">
              Logo Design <span className="ge-title-accent">Questionnaire</span>
            </h1>

            <p className="ge-hero__copy">
              Please complete the 12 quick questions below to guide our brand identity design team on your brand name, tagline, style preferences, color palette, and visual vision.
            </p>
          </div>
        </section>

        {/* --- QUESTIONNAIRE FORM SECTION --- */}
        <section className="ge-section ge-questionnaire-section">
          <div className="ge-container">
            <LogoQuestionnaireForm />
          </div>
        </section>
      </main>
    </>
  );
}
