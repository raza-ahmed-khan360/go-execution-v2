import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { industries } from "@/lib/industries";
import { site } from "@/lib/seo/site";
import { allServiceCategories, allSubServices } from "@/lib/services";

const staticPages = [
  "/",
  "/about/",
  "/blog/",
  "/contact/",
  "/pricing/",
  "/privacy-policy/",
  "/services/",
  "/industries/",
  "/terms-and-conditions/",
  "/portfolio/",
];

const categoryPages = allServiceCategories.map(
  (cat) => `/services/${cat.slug}/`
);

const subServicePages = allSubServices.map(
  (sub) => `/services/${sub.categorySlug}/${sub.slug}/`
);

const industryPages = Object.keys(industries).map(
  (slug) => `/industries/${slug}/`
);

const blogCategoryPages = Array.from(
  new Set(blogPosts.map((post) => post.categorySlug))
).map((slug) => `/category/${slug}/`);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1.0 : 0.8,
    })),

    ...categoryPages.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),

    ...subServicePages.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),

    ...industryPages.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    ...blogCategoryPages.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),

    ...blogPosts.map((post) => ({
      url: `${site.url}/blog/${post.slug}/`,
      lastModified: new Date(`${post.dateModified}T00:00:00.000Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
