
import codecs

with open("app/portfolio/[slug]/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

target = """export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = wpContent.portfolio.find((p) => slugify(p.title) === slug);
  const fallbackTitle = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const title = project ? `${project.title} Case Study` : `${fallbackTitle} Project`;
  const url = `/portfolio/${slug}/`;
  const desc = `Read the complete case study and project details for ${title} by Go Execution. Discover how our tailored digital strategy, engineering, and execution drove measurable business growth.`;

  return {
    title: `${title} | Go Execution Portfolio`,
    description: desc,
    alternates: { canonical: url },
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: `${title} | Go Execution Portfolio`,
      description: desc,
      url: url,
      type: "article",
      siteName: "Go Execution",
      images: [{ url: project?.image || "/opengraph-image.png", width: 1200, height: 630 }],
    },
  };
}"""

replacement = """export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = wpContent.portfolio.find((p) => slugify(p.title) === slug);
  const fallbackTitle = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const title = project ? `${project.title} Case Study` : `${fallbackTitle} Project`;
  const url = `/portfolio/${slug}/`;
  const desc = `Explore the ${title}. Discover how Go Execution digital strategy and engineering drove measurable business growth.`;

  return {
    title: { absolute: `${title} | Go Execution` },
    description: desc,
    alternates: { canonical: url },
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: `${title} | Go Execution`,
      description: desc,
      url: url,
      type: "article",
      siteName: "Go Execution",
      images: [{ url: project?.image || "/opengraph-image.png", width: 1200, height: 630 }],
    },
  };
}"""

if target in content:
    content = content.replace(target, replacement)
    with open("app/portfolio/[slug]/page.tsx", "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated portfolio slug metadata successfully.")
else:
    print("Target not found in app/portfolio/[slug]/page.tsx")

