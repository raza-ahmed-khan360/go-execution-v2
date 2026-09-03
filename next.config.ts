import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75, 80],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      // Legacy root & 1-level service URLs -> 2-level canonical paths
      { source: "/website-design-development/", destination: "/services/web-development/", permanent: true },
      { source: "/website-design-development", destination: "/services/web-development/", permanent: true },
      { source: "/services/website-design-development/", destination: "/services/web-development/", permanent: true },
      { source: "/services/website-design-development", destination: "/services/web-development/", permanent: true },

      { source: "/logo-design/", destination: "/services/design-branding/logo-design/", permanent: true },
      { source: "/logo-design", destination: "/services/design-branding/logo-design/", permanent: true },
      { source: "/services/logo-design/", destination: "/services/design-branding/logo-design/", permanent: true },
      { source: "/services/logo-design", destination: "/services/design-branding/logo-design/", permanent: true },

      { source: "/video-animation/", destination: "/services/video/video-animation/", permanent: true },
      { source: "/video-animation", destination: "/services/video/video-animation/", permanent: true },
      { source: "/services/video-animation/", destination: "/services/video/video-animation/", permanent: true },
      { source: "/services/video-animation", destination: "/services/video/video-animation/", permanent: true },

      { source: "/seo-services/", destination: "/services/seo/", permanent: true },
      { source: "/seo-services", destination: "/services/seo/", permanent: true },
      { source: "/services/seo-services/", destination: "/services/seo/", permanent: true },
      { source: "/services/seo-services", destination: "/services/seo/", permanent: true },

      { source: "/mobile-apps/", destination: "/services/mobile-app-development/", permanent: true },
      { source: "/mobile-apps", destination: "/services/mobile-app-development/", permanent: true },
      { source: "/digital-marketing/", destination: "/services/digital-marketing/", permanent: true },
      { source: "/digital-marketing", destination: "/services/digital-marketing/", permanent: true },

      // 1-Level Service Alias Redirects -> 2-Level Canonical URLs
      { source: "/services/custom-web-development/", destination: "/services/web-development/custom-web-development/", permanent: true },
      { source: "/services/wordpress-development/", destination: "/services/web-development/wordpress-development/", permanent: true },
      { source: "/services/nextjs-development/", destination: "/services/web-development/nextjs-development/", permanent: true },
      { source: "/services/ecommerce-development/", destination: "/services/web-development/ecommerce-development/", permanent: true },
      { source: "/services/ecommerce-web-development/", destination: "/services/web-development/ecommerce-development/", permanent: true },
      { source: "/services/landing-page-development/", destination: "/services/web-development/landing-page-development/", permanent: true },
      { source: "/services/website-redesign/", destination: "/services/web-development/website-redesign/", permanent: true },
      { source: "/services/website-performance/", destination: "/services/web-development/website-performance/", permanent: true },
      { source: "/services/website-speed-optimisation/", destination: "/services/web-development/website-performance/", permanent: true },
      
      { source: "/services/technical-seo/", destination: "/services/seo/technical-seo/", permanent: true },
      { source: "/services/local-seo/", destination: "/services/seo/local-seo/", permanent: true },
      { source: "/services/ecommerce-seo/", destination: "/services/seo/ecommerce-seo/", permanent: true },
      { source: "/services/small-business-seo/", destination: "/services/seo/small-business-seo/", permanent: true },

      { source: "/services/content-marketing/", destination: "/services/digital-marketing/content-marketing/", permanent: true },
      { source: "/services/social-media-marketing/", destination: "/services/digital-marketing/social-media-marketing/", permanent: true },
      { source: "/services/paid-advertising/", destination: "/services/digital-marketing/paid-advertising/", permanent: true },
      { source: "/services/conversion-optimisation/", destination: "/services/digital-marketing/conversion-optimisation/", permanent: true },

      { source: "/services/graphic-design/", destination: "/services/design-branding/graphic-design/", permanent: true },
      { source: "/services/brand-identity/", destination: "/services/design-branding/brand-identity/", permanent: true },
      { source: "/services/creative-design/", destination: "/services/design-branding/creative-design/", permanent: true },

      { source: "/services/2d-animation/", destination: "/services/video/2d-animation/", permanent: true },
      { source: "/services/3d-animation/", destination: "/services/video/3d-animation/", permanent: true },
      { source: "/services/explainer-videos/", destination: "/services/video/explainer-videos/", permanent: true },

      { source: "/services/custom-mobile-app-development/", destination: "/services/mobile-app-development/custom-mobile-app-development/", permanent: true },
      { source: "/services/mobile-apps/custom-mobile-app-development/", destination: "/services/mobile-app-development/custom-mobile-app-development/", permanent: true },
      { source: "/services/mobile-apps/custom-mobile-app-development", destination: "/services/mobile-app-development/custom-mobile-app-development/", permanent: true },

      // Legacy WP singular /service/:slug/ -> /services/:slug/
      { source: "/service/:slug/", destination: "/services/", permanent: true },
      { source: "/service/:slug", destination: "/services/", permanent: true },

      // Legacy WP page variations
      { source: "/about-us/", destination: "/about/", permanent: true },
      { source: "/about-us", destination: "/about/", permanent: true },
      { source: "/contact-us/", destination: "/contact/", permanent: true },
      { source: "/contact-us", destination: "/contact/", permanent: true },
      { source: "/services-2/", destination: "/services/", permanent: true },
      { source: "/services-2", destination: "/services/", permanent: true },


      // Root blog slugs -> /:slug/
      { source: "/why-your-business-website-is-not-ranking/", destination: "/why-is-my-website-not-ranking-on-google/", permanent: true },
      { source: "/why-your-business-website-is-not-ranking", destination: "/why-is-my-website-not-ranking-on-google/", permanent: true },
            
      // Redirect all old /blog/ slugs to root (except the blog index itself)
      { source: "/blog/:slug/", destination: "/:slug/", permanent: true },
      { source: "/blog/:slug", destination: "/:slug/", permanent: true },

      // Junk / WP defaults
      { source: "/elementor-24/", destination: "/", permanent: true },
      { source: "/elementor-24", destination: "/", permanent: true },
      { source: "/elementor-page-201/", destination: "/", permanent: true },
      { source: "/elementor-page-201", destination: "/", permanent: true },
      { source: "/hello-world/", destination: "/blog/", permanent: true },
      { source: "/hello-world", destination: "/blog/", permanent: true },
      { source: "/category/uncategorized/", destination: "/blog/", permanent: true },
      { source: "/category/uncategorized", destination: "/blog/", permanent: true },

      // Renamed legal pages
      { source: "/privacy/", destination: "/privacy-policy/", permanent: true },
      { source: "/terms/", destination: "/terms-of-service/", permanent: true },
      { source: "/terms-and-conditions/", destination: "/terms-of-service/", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms-of-service/", permanent: true },

      // Old sitemap compatibility
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },

      // www -> non-www
      { source: "/:path*", has: [{ type: "host", value: "www.goexecution.com" }], destination: "https://goexecution.com/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
