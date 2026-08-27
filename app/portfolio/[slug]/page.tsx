import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import wpContent from "@/lib/wp-content.json";
import { JsonLd, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function generateStaticParams() {
  return wpContent.portfolio.map((p) => ({
    slug: slugify(p.title),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = wpContent.portfolio.find((p) => slugify(p.title) === slug);
  const fallbackTitle = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const title = project ? `${project.title} Case Study` : `${fallbackTitle} Project`;

  return {
    title: `${title} | Go Execution Portfolio`,
    description: `Read the case study and project details for ${title} by Go Execution.`,
    alternates: { canonical: `/portfolio/${slug}/` },
  };
}

const getCategoryContent = (category: string, title: string) => {
  const cat = category.toLowerCase();
  
  if (cat.includes("web") || cat.includes("development")) {
    return {
      challenge1: `In the modern digital landscape, ${title} needed a high-performance web architecture. The primary challenge was overcoming legacy infrastructure that caused slow page load times, poor mobile responsiveness, and high bounce rates.`,
      challenge2: `They required a scalable, technically sound platform that not only met Google's Core Web Vitals but also provided a seamless, intuitive user experience (UX) to maximize conversion rates.`,
      solutionItems: [
        "Architected a custom Next.js frontend for sub-second page loads",
        "Implemented conversion rate optimization (CRO) methodologies",
        "Restructured technical SEO and schema markup for search visibility",
        "Designed a mobile-first, highly accessible UI system"
      ],
      heroText: `Explore how our advanced web engineering and performance-driven design helped ${title} scale their digital presence.`
    };
  }
  
  if (cat.includes("graphic") || cat.includes("design") || cat.includes("brand")) {
    return {
      challenge1: `To stand out in a saturated market, ${title} required a cohesive and memorable visual identity. Their previous branding was inconsistent and failed to accurately communicate their premium value proposition to the target audience.`,
      challenge2: `The challenge was to distill their core mission into a powerful visual language that would build instant trust and recognition across all customer touchpoints, from digital to print.`,
      solutionItems: [
        "Developed a comprehensive, psychology-driven brand identity system",
        "Designed bespoke typography and modern color palettes",
        "Created scalable visual assets for multi-channel marketing",
        "Established strict brand guidelines to ensure future consistency"
      ],
      heroText: `Discover how our strategic design and branding elevated ${title}'s market positioning and customer perception.`
    };
  }

  if (cat.includes("marketing") || cat.includes("seo") || cat.includes("ad")) {
    return {
      challenge1: `Despite having a solid product, ${title} was struggling with customer acquisition costs (CAC) and stagnant organic traffic. They needed a data-driven marketing engine to predictably generate qualified leads.`,
      challenge2: `The main obstacle was fragmented data tracking and inefficient ad spend. They required a unified strategy that combined high-intent SEO with aggressive, high-converting paid campaigns.`,
      solutionItems: [
        "Executed a deep-dive technical SEO and content gap analysis",
        "Restructured paid ad campaigns for maximum Return on Ad Spend (ROAS)",
        "Implemented precise audience segmentation and retargeting loops",
        "Set up advanced server-side tracking for accurate attribution"
      ],
      heroText: `See how our aggressive, data-driven marketing campaigns accelerated revenue growth and lead generation for ${title}.`
    };
  }

  if (cat.includes("video") || cat.includes("animation")) {
    return {
      challenge1: `${title} had a complex value proposition that was difficult to explain through static text and images. They were losing potential customers due to a lack of immediate engagement and understanding.`,
      challenge2: `The goal was to craft a compelling visual narrative that could capture attention within the first 3 seconds, simplify complex concepts, and drive viewers to take immediate action.`,
      solutionItems: [
        "Scripted a psychology-backed, persuasive storyboard",
        "Developed custom story-driven motion graphics and animations",
        "Integrated professional voiceover and cinematic sound design",
        "Optimized video formats for social media and landing page conversions"
      ],
      heroText: `Watch how our immersive video animation and storytelling simplified ${title}'s message and skyrocketed engagement.`
    };
  }

  if (cat.includes("app") || cat.includes("mobile")) {
    return {
      challenge1: `${title} needed to provide their users with a flawless native mobile experience. The challenge was building an application that felt incredibly fast, intuitive, and engaging enough to retain users long-term.`,
      challenge2: `They required a robust cross-platform solution with seamless API integrations, secure data handling, and an interface that strictly adhered to iOS and Android design guidelines.`,
      solutionItems: [
        "Engineered a high-performance cross-platform mobile application",
        "Designed intuitive, thumb-friendly UX/UI navigation patterns",
        "Integrated secure, low-latency backend APIs and push notifications",
        "Executed App Store Optimization (ASO) for improved discoverability"
      ],
      heroText: `Explore the robust mobile architecture and native user experience we engineered for the ${title} app.`
    };
  }

  // Default / Generic
  return {
    challenge1: `Operating in a highly competitive sector, ${title} faced the challenge of differentiating their digital presence while optimizing for both user acquisition and retention.`,
    challenge2: `Legacy systems and fragmented marketing channels were causing operational friction. A unified, high-performance approach was required to scale their business effectively and sustainably.`,
    solutionItems: [
      "Comprehensive digital audit and architecture overhaul",
      "Deployment of a conversion-optimized user interface",
      "Integration of advanced data tracking and analytics",
      "Targeted customer acquisition and retention strategy"
    ],
    heroText: `Explore how our tailored digital strategy, robust engineering, and data-driven approach helped ${title} achieve their growth objectives.`
  };
};

export default async function PortfolioCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const project = wpContent.portfolio.find((p) => slugify(p.title) === slug);
  const fallbackTitle = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  
  const title = project ? project.title : fallbackTitle;
  const category = project ? project.category : "Digital Project";
  const image = project ? project.image : "/assets/images/generated/web-dev.jpg";

  const content = getCategoryContent(category, title);

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
              {content.heroText}
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
                    {content.challenge1}
                  </p>
                  <p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.8" }}>
                    {content.challenge2}
                  </p>
                </div>

                <div style={{ background: "#f8fafc", padding: "40px", borderRadius: "16px" }}>
                  <h3 style={{ fontSize: "24px", color: "#0d1b2a", marginBottom: "24px" }}>Strategic Execution</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                    {content.solutionItems.map((item, idx) => (
                      <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ color: "#b8860b", fontSize: "18px", marginTop: "2px" }}>✓</span>
                        <span style={{ color: "#475569", fontSize: "16px", lineHeight: "1.6" }}>{item}</span>
                      </li>
                    ))}
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
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact/" className="ge-btn ge-btn--primary">Start Your Project</Link>
              <Link href="/portfolio/" className="ge-btn ge-btn--outline" style={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}>View More Work</Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
