import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import wpContent from "@/lib/wp-content.json";
import { JsonLd, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// We can pre-generate all the paths we know about
export function generateStaticParams() {
  return wpContent.portfolio.map((p) => ({
    slug: slugify(p.title),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = wpContent.portfolio.find((p) => slugify(p.title) === slug);
  
  // Format slug to readable title if project not found
  const fallbackTitle = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const title = project ? `${project.title} Case Study` : `${fallbackTitle} Project`;

  return {
    title: `${title} | Go Execution Portfolio`,
    description: `Read the case study and project details for ${title} by Go Execution.`,
    alternates: { canonical: `/portfolio/${slug}/` },
  };
}

export default async function PortfolioCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Try to find the actual project from our 40 items
  const project = wpContent.portfolio.find((p) => slugify(p.title) === slug);
  
  // If we don't have this project in our JSON anymore (e.g. it was an old URL), 
  // we still render a generic case study page to preserve the SEO link juice and avoid Soft 404s!
  const fallbackTitle = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const title = project ? project.title : fallbackTitle;
  const category = project ? project.category : "Digital Project";
  const image = project ? project.image : "/assets/images/generated/web-dev.jpg";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPage({ path: `/portfolio/${slug}/`, title: `${title} Case Study | Go Execution` }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Portfolio", url: "/portfolio/" },
        { name: title, url: `/portfolio/${slug}/` },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main">
        {/* HERO */}
        <section className="ge-hero ge-hero--inner" style={{ background: "#0d1b2a", padding: "120px 0 80px" }}>
          <div className="ge-container" style={{ textAlign: "center" }}>
            <div style={{ 
              display: "inline-block", 
              padding: "6px 16px", 
              background: "rgba(255,255,255,0.1)", 
              borderRadius: "99px", 
              color: "#b8860b", 
              fontWeight: 600, 
              fontSize: "14px", 
              marginBottom: "24px" 
            }}>
              {category}
            </div>
            <h1 className="ge-hero__title ge-hero__title--large" style={{ color: "#fff", marginBottom: "20px" }}>
              {title}
            </h1>
            <p className="ge-hero__copy" style={{ color: "rgba(255,255,255,0.7)", maxWidth: "700px", margin: "0 auto" }}>
              Explore how our tailored digital strategy, robust engineering, and data-driven approach helped {title} achieve their growth objectives.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="ge-section" style={{ padding: "80px 0" }}>
          <div className="ge-container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
              
              <div style={{ borderRadius: "24px", overflow: "hidden", marginBottom: "60px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                <Image
                  src={image}
                  alt={`${title} project preview`}
                  width={1000}
                  height={560}
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", backgroundColor: "#f1f5f9" }}
                />
              </div>

              <div className="ge-grid ge-grid--2col" style={{ gap: "60px", alignItems: "start" }}>
                <div>
                  <h2 style={{ fontSize: "32px", color: "#0d1b2a", marginBottom: "24px" }}>The Challenge</h2>
                  <p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
                    Businesses in the {category.toLowerCase()} sector face immense competition. The primary challenge was to architect a digital presence that not only stood out aesthetically but performed exceptionally well in user acquisition and conversion.
                  </p>
                  <p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.8" }}>
                    Legacy systems and fragmented marketing channels were causing friction. A unified, high-performance approach was required to scale operations effectively.
                  </p>
                </div>

                <div style={{ background: "#f8fafc", padding: "40px", borderRadius: "16px" }}>
                  <h3 style={{ fontSize: "24px", color: "#0d1b2a", marginBottom: "24px" }}>Our Solution</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                    <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ color: "#b8860b", fontSize: "18px" }}>✓</span>
                      <span style={{ color: "#475569", fontSize: "16px", lineHeight: "1.5" }}>Comprehensive digital audit and architecture overhaul</span>
                    </li>
                    <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ color: "#b8860b", fontSize: "18px" }}>✓</span>
                      <span style={{ color: "#475569", fontSize: "16px", lineHeight: "1.5" }}>Deployment of a conversion-optimized frontend</span>
                    </li>
                    <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ color: "#b8860b", fontSize: "18px" }}>✓</span>
                      <span style={{ color: "#475569", fontSize: "16px", lineHeight: "1.5" }}>Integration of advanced tracking and analytics</span>
                    </li>
                    <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ color: "#b8860b", fontSize: "18px" }}>✓</span>
                      <span style={{ color: "#475569", fontSize: "16px", lineHeight: "1.5" }}>Targeted user acquisition strategy</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ge-section" style={{ background: "#0d1b2a", padding: "100px 0", textAlign: "center" }}>
          <div className="ge-container">
            <h2 style={{ color: "#fff", fontSize: "36px", marginBottom: "24px" }}>Ready to Build Your Success Story?</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", maxWidth: "600px", margin: "0 auto 40px" }}>
              Partner with Go Execution to engineer a digital platform that drives measurable business growth.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
              <Link href="/contact/" className="ge-btn ge-btn--primary">Start Your Project</Link>
              <Link href="/portfolio/" className="ge-btn ge-btn--outline" style={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}>View More Work</Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
