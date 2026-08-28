import type { Metadata } from "next";
import { ReviewForm } from "@/components/review-form";
import { JsonLd, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Leave a Review | Go Execution",
  description: "Share your experience working with Go Execution. Leave a review to help us continue providing top-tier digital strategy and engineering solutions.",
  alternates: { canonical: "/leave-review/" },
  openGraph: {
    title: "Leave a Review | Go Execution",
    description: "Share your experience working with Go Execution. Leave a review to help us continue providing top-tier digital strategy and engineering solutions.",
    url: "/leave-review/",
    type: "website",
  },
};

export default function LeaveReviewPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPage({ path: "/leave-review/", title: "Leave a Review | Go Execution" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Leave a Review", url: "/leave-review/" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main className="ge-leave-review-page" style={{ padding: "120px 0", background: "#f8fafc", minHeight: "100vh" }}>
        <div className="ge-container" style={{ maxWidth: "600px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1 style={{ fontSize: "36px", color: "#0d1b2a", marginBottom: "16px" }}>Share Your Experience</h1>
            <p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.6" }}>
              Your feedback helps us improve and helps other businesses make informed decisions.
            </p>
          </div>
          
          <div style={{ background: "#ffffff", padding: "40px", borderRadius: "16px", boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}>
            <ReviewForm />
          </div>
        </div>
      </main>
    </>
  );
}
