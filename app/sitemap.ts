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
  (slug) => `/${slug}/`
);

const categoryPages = Array.from(new Set(blogPosts.map((post) => post.categorySlug))).map(
  (slug) => `/category/${slug}/`
);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteLastUpdated = new Date("2026-08-07T00:00:00.000Z");

  return [
    ...staticPages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: siteLastUpdated,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1.0 : 0.8,
    })),
    ...servicePages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...categoryPages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: siteLastUpdated,
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
