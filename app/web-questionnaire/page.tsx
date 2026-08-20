import type { Metadata } from "next";
import { WebsiteQuestionnaireForm } from "@/components/website-questionnaire-form";
import { JsonLd, buildWebPage, buildBreadcrumbList , buildOrganization, buildWebSite } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Website Project Brief & Questionnaire | Go Execution" },
  description:
    "Complete our interactive Website Project Brief to share your scope, design preferences, required features, and commercial goals with Go Execution.",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: { canonical: "/web-questionnaire/" },
  openGraph: { type: "website", siteName: "Go Execution", images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }], 
    title: "Website Project Brief & Questionnaire | Go Execution",
    description:
      "Complete our interactive Website Project Brief to share your scope, design preferences, required features, and commercial goals with Go Execution.",
    url: "/web-questionnaire/",
  },
};

export default function WebsiteQuestionnairePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
        buildOrganization(),
        buildWebSite(),
      buildWebPage({ path: "/web-questionnaire/", title: "Website Project Brief & Questionnaire | Go Execution" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Web Questionnaire", url: "/web-questionnaire/" },
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
              <span className="ge-eyebrow ge-eyebrow--gold">Interactive Project Brief</span>
            </div>

            <h1 className="ge-hero__title">
              Website Project <span className="ge-title-accent">Questionnaire</span>
            </h1>

            <p className="ge-hero__copy">
              Please complete the 13 quick questions below to help us understand your commercial objectives, design aesthetic, required functionality, and target launch timeline.
            </p>
          </div>
        </section>

        {/* --- QUESTIONNAIRE FORM SECTION --- */}
        <section className="ge-section ge-questionnaire-section">
          <div className="ge-container">
            <WebsiteQuestionnaireForm />
          </div>
        </section>
      </main>
    </>
  );
}
