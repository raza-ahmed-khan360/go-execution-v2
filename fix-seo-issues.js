const fs = require('fs');

// 1. Update next.config.ts
let nextConfig = fs.readFileSync('next.config.ts', 'utf8');
nextConfig = nextConfig.replace(
  '{ source: "/terms/", destination: "/terms-and-conditions/", permanent: true },',
  '{ source: "/terms/", destination: "/terms-of-service/", permanent: true },\n      { source: "/terms-and-conditions/", destination: "/terms-of-service/", permanent: true },\n      { source: "/terms-and-conditions", destination: "/terms-of-service/", permanent: true },'
);
nextConfig = nextConfig.replace(
  /      \/\/ Legacy portfolio individual pages \(redirect to main portfolio gallery\)\n      \{ source: "\/portfolio\/:slug\/", destination: "\/portfolio\/", permanent: true \},\n      \{ source: "\/portfolio\/:slug", destination: "\/portfolio\/", permanent: true \},\n/g,
  ''
);
fs.writeFileSync('next.config.ts', nextConfig);
console.log('Updated next.config.ts');

// 2. Update app/sitemap.ts
let sitemap = fs.readFileSync('app/sitemap.ts', 'utf8');
if (!sitemap.includes('wp-content.json')) {
  sitemap = sitemap.replace(
    'import { allServiceCategories, allSubServices } from "@/lib/services";',
    'import { allServiceCategories, allSubServices } from "@/lib/services";\nimport wpContent from "@/lib/wp-content.json";\n\nconst slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");\n'
  );
  sitemap = sitemap.replace(
    'const blogCategoryPages = Array.from(',
    'const portfolioPages = wpContent.portfolio.map((p) => `/portfolio/${slugify(p.title)}/`);\n\nconst blogCategoryPages = Array.from('
  );
  sitemap = sitemap.replace(
    ']\n}',
    '    ...portfolioPages.map((path) => ({\n      url: `${site.url}${path}`,\n      changeFrequency: "monthly" as const,\n      priority: 0.7,\n    })),\n  ];\n}'
  );
  fs.writeFileSync('app/sitemap.ts', sitemap);
  console.log('Updated app/sitemap.ts');
}
