import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/preview/",
          "/drafts/",
          "/web-questionnaire/",
          "/logo-questionnaire/",
          "/_next/static/media/",
          "/wp-admin/",
          "/wp-content/",
          "/wp-content/themes/",
          "/wp-includes/",
          "/wp-login.php",
          "/xmlrpc.php",
        ],
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "cohere-ai",
          "Bingbot",
          "CCBot",
        ],
        allow: "/",
        disallow: [
          "/api/",
          "/preview/",
          "/drafts/",
          "/web-questionnaire/",
          "/logo-questionnaire/",
          "/_next/static/media/",
          "/wp-admin/",
          "/wp-content/",
          "/wp-content/themes/",
          "/wp-includes/",
          "/wp-login.php",
          "/xmlrpc.php",
        ],
      },
    ],
    sitemap: "https://goexecution.com/sitemap.xml",
    host: "https://goexecution.com",
  };
}
