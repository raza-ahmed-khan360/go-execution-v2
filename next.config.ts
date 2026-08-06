import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      // Service pages: redirect /services/:slug to top-level /:slug/
      { source: "/services/:slug/", destination: "/:slug/", permanent: true },
      { source: "/services/:slug", destination: "/:slug/", permanent: true },

      // Renamed legal pages
      { source: "/privacy/", destination: "/privacy-policy/", permanent: true },
      { source: "/terms/", destination: "/terms-and-conditions/", permanent: true },

      // Old sitemap compatibility
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },

      // Blog posts moved from /blog/[slug] to root (preserves indexed URLs)
      { source: "/blog/:slug/", destination: "/:slug/", permanent: true },
      { source: "/blog/:slug", destination: "/:slug/", permanent: true },

      // www -> non-www
      { source: "/:path*", has: [{ type: "host", value: "www.goexecution.com" }], destination: "https://goexecution.com/:path*", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
