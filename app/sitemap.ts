import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { site } from "@/lib/seo/site";
import content from "@/lib/wp-content.json";

const staticPages = [
  "/",
  "/about/",
  "/blog/",
  "/contact/",
  "/pricing/",
  "/privacy-policy/",
  "/services/",
  "/terms-and-conditions/",
  "/portfolio/",
];

const servicePages = Object.keys(content.services as Record<string, unknown>).map(
  (slug) => `/services/${slug}/`
);

const categoryPages = Array.from(new Set(blogPosts.map((post) => post.categorySlug))).map(
  (slug) => `/category/${slug}/`
);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  return [
    ...staticPages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1.0 : 0.8,
    })),
    ...servicePages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...categoryPages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...blogPosts.map((post) => ({
      url: `${site.url}/${post.slug}/`,
      lastModified: post.dateModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
