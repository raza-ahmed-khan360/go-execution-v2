#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * scripts/audit-internal-links.cjs
 * Comprehensive E2E Internal Link & Route Verification Harness for goexecution.com
 *
 * Validates:
 * 1. Dynamic Canonical Route Inventory extraction from sitemap.ts, services.ts, industries.ts, blog-posts.ts, and app/ routes.
 * 2. Blog contentHtml <a> link syntax, trailing slashes, target canonical route validity, tag closure, and anchor text quality.
 * 3. Component <Link> & <a> references across app/ and components/ directory, including template literal pattern checking.
 * 4. Zero legacy redirect paths (e.g. /services/technical-seo/ vs /services/seo/technical-seo/).
 * 5. Link distribution analytics across categories, sub-services, blog companion articles, and anchor text quality.
 *
 * CLI Flags:
 *   --only-blog         Run audit only on lib/blog-posts.ts
 *   --only-components   Run audit only on React components (app/ and components/)
 *   --json              Output audit report in JSON format
 */

const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const ROOT_DIR = path.resolve(__dirname, "..");
const BASELINE_BLOG_LINKS_COUNT = 33; // Pre-optimization baseline count in lib/blog-posts.ts

// Parse CLI flags
const args = process.argv.slice(2);
const FLAG_ONLY_BLOG = args.includes("--only-blog");
const FLAG_ONLY_COMPONENTS = args.includes("--only-components");
const FLAG_JSON = args.includes("--json");

// Helper to transpile and load TS modules in-memory
function loadTsModule(filePath) {
  const absPath = path.isAbsolute(filePath) ? filePath : path.resolve(ROOT_DIR, filePath);
  const code = fs.readFileSync(absPath, "utf8");
  const js = ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  }).outputText;

  const mod = { exports: {} };
  const customRequire = (id) => {
    if (id.startsWith("@/")) {
      const relPath = id.replace("@/", "");
      let resolved = path.resolve(ROOT_DIR, relPath);
      if (!fs.existsSync(resolved)) {
        if (fs.existsSync(resolved + ".ts")) resolved += ".ts";
        else if (fs.existsSync(resolved + ".tsx")) resolved += ".tsx";
        else if (fs.existsSync(resolved + ".js")) resolved += ".js";
        else if (fs.existsSync(path.join(resolved, "index.ts"))) resolved = path.join(resolved, "index.ts");
      }
      return loadTsModule(resolved);
    }
    return require(id);
  };

  const fn = new Function("exports", "module", "require", "__filename", "__dirname", js);
  fn(mod.exports, mod, customRequire, absPath, path.dirname(absPath));
  return mod.exports;
}

// Recursively walk directory
function walkDir(dir, fileFilter, acc = []) {
  let entries = [];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, fileFilter, acc);
    } else if (fileFilter(fullPath)) {
      acc.push(fullPath);
    }
  }
  return acc;
}

// 1. Build Canonical Route Inventory
function buildCanonicalRouteInventory() {
  const canonicalRoutes = new Map(); // path -> { type, description }

  // Load services
  const servicesModule = loadTsModule("lib/services.ts");
  const allServiceCategories = servicesModule.allServiceCategories || [];
  const allSubServices = servicesModule.allSubServices || [];

  for (const cat of allServiceCategories) {
    const route = `/services/${cat.slug}/`;
    canonicalRoutes.set(route, {
      type: "service-category",
      categorySlug: cat.slug,
      title: cat.title,
    });
  }

  for (const sub of allSubServices) {
    const route = `/services/${sub.categorySlug}/${sub.slug}/`;
    canonicalRoutes.set(route, {
      type: "sub-service",
      categorySlug: sub.categorySlug,
      subServiceSlug: sub.slug,
      title: sub.title,
    });
  }

  // Load industries
  const industriesModule = loadTsModule("lib/industries.ts");
  const industries = industriesModule.industries || {};
  for (const [slug, ind] of Object.entries(industries)) {
    const route = `/industries/${slug}/`;
    canonicalRoutes.set(route, {
      type: "industry",
      industrySlug: slug,
      title: ind.title,
    });
  }

  // Load blog posts
  const blogModule = loadTsModule("lib/blog-posts.ts");
  const blogPosts = blogModule.blogPosts || [];

  const blogCategories = new Set();
  for (const post of blogPosts) {
    const route = `/${post.slug}/`;
    canonicalRoutes.set(route, {
      type: "blog-post",
      slug: post.slug,
      title: post.title,
      categorySlug: post.categorySlug,
    });
    if (post.categorySlug) {
      blogCategories.add(post.categorySlug);
    }
  }

  for (const catSlug of blogCategories) {
    const route = `/category/${catSlug}/`;
    canonicalRoutes.set(route, {
      type: "blog-category",
      categorySlug: catSlug,
      title: `Blog Category: ${catSlug}`,
    });
  }

  // Static pages from sitemap.ts and app/ structure
  const staticRoutes = [
    "/",
    "/about/",
    "/blog/",
    "/contact/",
    "/pricing/",
    "/privacy-policy/",
    "/services/",
    "/industries/",
    "/terms-of-service/",
    "/cookie-policy/",
    "/portfolio/",
    "/logo-questionnaire/",
    "/web-questionnaire/",
  ];

  for (const route of staticRoutes) {
    if (!canonicalRoutes.has(route)) {
      canonicalRoutes.set(route, {
        type: "static-page",
        title: route,
      });
    }
  }

  // Load and verify against app/sitemap.ts
  const sitemapModule = loadTsModule("app/sitemap.ts");
  const sitemapEntries = typeof sitemapModule.default === "function" ? sitemapModule.default() : [];
  for (const entry of sitemapEntries) {
    const urlPath = entry.url.replace(/^https?:\/\/[^\/]+/, "") || "/";
    if (!canonicalRoutes.has(urlPath)) {
      canonicalRoutes.set(urlPath, {
        type: "sitemap-route",
        title: urlPath,
      });
    }
  }

  // Build legacy redirect lookup map from next.config.ts
  const legacyRedirects = new Map();
  const nextConfigPath = path.resolve(ROOT_DIR, "next.config.ts");
  if (fs.existsSync(nextConfigPath)) {
    const rawConfig = fs.readFileSync(nextConfigPath, "utf8");
    const redirectMatches = rawConfig.matchAll(/\{\s*source:\s*["']([^"']+)["'],\s*destination:\s*["']([^"']+)["']/g);
    for (const match of redirectMatches) {
      legacyRedirects.set(match[1], match[2]);
    }
  }

  return { canonicalRoutes, legacyRedirects, blogPosts, allServiceCategories, allSubServices, industries };
}

// 2. Validate HTML syntax and tag balancing
function validateHtmlStructure(html, contextName) {
  const errors = [];
  
  const openTags = [];
  const tagRegex = /<\/?([a-z0-9]+)(\s+[^>]*)?>/gi;
  const selfClosing = new Set(["img", "br", "hr", "input", "meta", "link", "source", "area"]);
  
  let match;
  while ((match = tagRegex.exec(html)) !== null) {
    const fullTag = match[0];
    const tagName = match[1].toLowerCase();
    const isClosing = fullTag.startsWith("</");
    const isSelfClosing = fullTag.endsWith("/>") || selfClosing.has(tagName);

    if (isSelfClosing) continue;

    if (isClosing) {
      if (openTags.length === 0) {
        errors.push(`Unmatched closing tag </${tagName}> in ${contextName}`);
      } else {
        const lastOpen = openTags.pop();
        if (lastOpen.tagName !== tagName) {
          errors.push(`Mismatched closing tag </${tagName}> (expected </${lastOpen.tagName}>) in ${contextName}`);
        }
      }
    } else {
      openTags.push({ tagName, tag: fullTag });
    }
  }

  if (openTags.length > 0) {
    const unclosed = openTags.map((t) => `<${t.tagName}>`).join(", ");
    errors.push(`Unclosed HTML tags [${unclosed}] in ${contextName}`);
  }

  return errors;
}

// 3. Main Audit Function
function runLinkAudit() {
  const { canonicalRoutes, legacyRedirects, blogPosts, allServiceCategories, allSubServices, industries } =
    buildCanonicalRouteInventory();

  const issues = [];
  const warnings = [];
  const blogLinkRecords = [];
  const componentLinkRecords = [];

  const categoryDistribution = {
    "web-development": 0,
    seo: 0,
    "digital-marketing": 0,
    "design-branding": 0,
    video: 0,
    "mobile-app-development": 0,
    industries: 0,
    "blog-posts": 0,
    "blog-categories": 0,
    static: 0,
    external: 0,
    unknown: 0,
  };

  const subServiceDistribution = {};

  // ---------------------------------------------------------------------------
  // A. Audit Blog Post Links (lib/blog-posts.ts)
  // ---------------------------------------------------------------------------
  if (!FLAG_ONLY_COMPONENTS) {
    for (const post of blogPosts) {
      const postSlug = post.slug;
      const content = post.contentHtml || "";

      // 1. Tag structure validation
      const htmlErrors = validateHtmlStructure(content, `blog post "${postSlug}"`);
      for (const err of htmlErrors) {
        issues.push({
          file: "lib/blog-posts.ts",
          location: `Post: ${postSlug}`,
          type: "HTML_SYNTAX_ERROR",
          message: err,
        });
      }

      // 2. Parse <a> tags
      const aTagRegex = /<a\b([^>]*)>(.*?)<\/a>/gis;
      let match;
      while ((match = aTagRegex.exec(content)) !== null) {
        const fullAnchor = match[0];
        const attributes = match[1];
        const anchorText = match[2].replace(/<[^>]*>/g, "").trim();

        const hrefMatch = attributes.match(/href=["']([^"']*)["']/i);
        if (!hrefMatch) {
          issues.push({
            file: "lib/blog-posts.ts",
            location: `Post: ${postSlug}`,
            type: "MISSING_HREF",
            message: `Anchor tag is missing href attribute: ${fullAnchor}`,
          });
          continue;
        }

        const href = hrefMatch[1].trim();

        // Check external or mailto/tel
        if (/^(https?:\/\/|mailto:|tel:)/i.test(href)) {
          if (href.startsWith("https://goexecution.com")) {
            const relativePath = href.replace("https://goexecution.com", "");
            issues.push({
              file: "lib/blog-posts.ts",
              location: `Post: ${postSlug}`,
              type: "ABSOLUTE_INTERNAL_URL",
              message: `Internal link should use root-relative path instead of absolute URL: "${href}" -> "${relativePath}"`,
            });
          } else {
            categoryDistribution.external++;
            continue;
          }
        }

        // Pure anchor fragment on same page
        if (href.startsWith("#")) {
          continue;
        }

        blogLinkRecords.push({
          sourcePost: postSlug,
          sourceCategory: post.categorySlug,
          href,
          anchorText,
          fullAnchor,
        });

        // Verification checks for internal links
        // Check 1: Leading slash
        if (!href.startsWith("/")) {
          issues.push({
            file: "lib/blog-posts.ts",
            location: `Post: ${postSlug}`,
            type: "MISSING_LEADING_SLASH",
            message: `Internal link "${href}" in post "${postSlug}" must start with leading slash '/'`,
          });
        }

        // Check 2: Trailing slash enforcement
        const urlWithoutHashOrQuery = href.split("?")[0].split("#")[0];
        if (!urlWithoutHashOrQuery.endsWith("/")) {
          issues.push({
            file: "lib/blog-posts.ts",
            location: `Post: ${postSlug}`,
            type: "MISSING_TRAILING_SLASH",
            message: `Internal link "${href}" violates Next.js trailingSlash requirement. Expected "${urlWithoutHashOrQuery}/"`,
          });
        }

        // Check 3: Check against legacy redirects
        const normalizedPath = urlWithoutHashOrQuery.endsWith("/") ? urlWithoutHashOrQuery : `${urlWithoutHashOrQuery}/`;
        if (legacyRedirects.has(normalizedPath) || legacyRedirects.has(normalizedPath.slice(0, -1))) {
          const canonicalDest = legacyRedirects.get(normalizedPath) || legacyRedirects.get(normalizedPath.slice(0, -1));
          issues.push({
            file: "lib/blog-posts.ts",
            location: `Post: ${postSlug}`,
            type: "LEGACY_REDIRECT_LINK",
            message: `Internal link "${href}" points to a legacy redirect path. Update to canonical destination: "${canonicalDest}"`,
          });
        }

        // Check 4: Existence in Canonical Route Inventory
        if (!canonicalRoutes.has(normalizedPath)) {
          issues.push({
            file: "lib/blog-posts.ts",
            location: `Post: ${postSlug}`,
            type: "DEAD_ROUTE_404",
            message: `Internal link "${href}" in post "${postSlug}" does not resolve to any canonical route.`,
          });
          categoryDistribution.unknown++;
        } else {
          const routeMeta = canonicalRoutes.get(normalizedPath);
          if (routeMeta.type === "sub-service") {
            categoryDistribution[routeMeta.categorySlug] = (categoryDistribution[routeMeta.categorySlug] || 0) + 1;
            const subKey = `${routeMeta.categorySlug}/${routeMeta.subServiceSlug}`;
            subServiceDistribution[subKey] = (subServiceDistribution[subKey] || 0) + 1;
          } else if (routeMeta.type === "service-category") {
            categoryDistribution[routeMeta.categorySlug] = (categoryDistribution[routeMeta.categorySlug] || 0) + 1;
          } else if (routeMeta.type === "industry") {
            categoryDistribution.industries++;
          } else if (routeMeta.type === "blog-post") {
            categoryDistribution["blog-posts"]++;
          } else if (routeMeta.type === "blog-category") {
            categoryDistribution["blog-categories"]++;
          } else {
            categoryDistribution.static++;
          }
        }

        // Check 5: Anchor text quality
        if (!anchorText || anchorText.length < 2) {
          issues.push({
            file: "lib/blog-posts.ts",
            location: `Post: ${postSlug}`,
            type: "EMPTY_OR_SHORT_ANCHOR_TEXT",
            message: `Anchor tag has empty or excessively short text: ${fullAnchor}`,
          });
        } else if (/^(click here|read more|link|here|more|this page)$/i.test(anchorText)) {
          warnings.push({
            file: "lib/blog-posts.ts",
            location: `Post: ${postSlug}`,
            type: "POOR_SEO_ANCHOR_TEXT",
            message: `Generic non-descriptive anchor text "${anchorText}" found in post "${postSlug}". Use keyword-relevant descriptive anchor text.`,
          });
        }
      }
    }
  }

  // ---------------------------------------------------------------------------
  // B. Audit React Components (app/ and components/)
  // ---------------------------------------------------------------------------
  if (!FLAG_ONLY_BLOG) {
    const componentFiles = [
      ...walkDir(path.join(ROOT_DIR, "app"), (p) => /\.(tsx|ts)$/.test(p) && !p.includes("sitemap.ts")),
      ...walkDir(path.join(ROOT_DIR, "components"), (p) => /\.(tsx|ts)$/.test(p)),
    ];

    for (const filePath of componentFiles) {
      const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, "/");
      const code = fs.readFileSync(filePath, "utf8");

      // Scan static <Link href="..."> and <a href="...">
      const staticLinkMatches = [
        ...code.matchAll(/<Link\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi),
        ...code.matchAll(/<Link\b[^>]*\bhref=\{["']([^"']+)["']\}[^>]*>/gi),
        ...code.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi),
      ];

      for (const match of staticLinkMatches) {
        const rawHref = match[1].trim();

        // Skip external, mailto, tel, anchors
        if (/^(https?:\/\/|mailto:|tel:|#)/i.test(rawHref)) continue;

        componentLinkRecords.push({
          file: relPath,
          href: rawHref,
          type: "static",
        });

        // Verify trailing slash for static routes (checking path portion before query/hash)
        const cleanPath = rawHref.split("?")[0].split("#")[0];
        if (!cleanPath.endsWith("/")) {
          issues.push({
            file: relPath,
            location: relPath,
            type: "COMPONENT_MISSING_TRAILING_SLASH",
            message: `Component link "${rawHref}" in ${relPath} is missing trailing slash '/'. Change to "${cleanPath}/${rawHref.includes("?") ? "?" + rawHref.split("?")[1] : ""}"`,
          });
        }

        // Check legacy redirects
        const normalizedPath = cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`;
        if (legacyRedirects.has(normalizedPath) || legacyRedirects.has(normalizedPath.slice(0, -1))) {
          const canonicalDest = legacyRedirects.get(normalizedPath) || legacyRedirects.get(normalizedPath.slice(0, -1));
          issues.push({
            file: relPath,
            location: relPath,
            type: "COMPONENT_LEGACY_REDIRECT_LINK",
            message: `Component link "${rawHref}" in ${relPath} targets a legacy redirect. Use "${canonicalDest}"`,
          });
        }

        // Verify route existence
        if (!canonicalRoutes.has(normalizedPath)) {
          issues.push({
            file: relPath,
            location: relPath,
            type: "COMPONENT_DEAD_ROUTE_404",
            message: `Component link "${rawHref}" in ${relPath} points to non-existent route.`,
          });
        }
      }

      // Scan dynamic template literal links: <Link href={`...`}>
      const dynamicMatches = [...code.matchAll(/<Link\b[^>]*\bhref=\{`([^`]+)`\}[^>]*>/gi)];
      for (const match of dynamicMatches) {
        const template = match[1].trim();
        if (/^(https?:\/\/|mailto:|tel:|#)/i.test(template)) continue;

        componentLinkRecords.push({
          file: relPath,
          href: template,
          type: "dynamic",
        });

        // Check if template literal starts with / and ends with /
        if (!template.startsWith("/")) {
          issues.push({
            file: relPath,
            location: relPath,
            type: "COMPONENT_DYNAMIC_MISSING_LEADING_SLASH",
            message: `Dynamic component link \`${template}\` in ${relPath} must start with leading slash '/'`,
          });
        }

        const templatePathOnly = template.split("?")[0].split("#")[0];
        if (!templatePathOnly.endsWith("/")) {
          issues.push({
            file: relPath,
            location: relPath,
            type: "COMPONENT_DYNAMIC_MISSING_TRAILING_SLASH",
            message: `Dynamic component link \`${template}\` in ${relPath} is missing trailing slash '/'`,
          });
        }
      }
    }
  }

  // ---------------------------------------------------------------------------
  // C. JSON Output Support
  // ---------------------------------------------------------------------------
  if (FLAG_JSON) {
    const report = {
      timestamp: new Date().toISOString(),
      canonicalRoutesCount: canonicalRoutes.size,
      blogLinksCount: blogLinkRecords.length,
      baselineBlogLinksCount: BASELINE_BLOG_LINKS_COUNT,
      newBlogLinksAdded: blogLinkRecords.length - BASELINE_BLOG_LINKS_COUNT,
      componentLinksScanned: componentLinkRecords.length,
      categoryDistribution,
      subServiceDistribution,
      issuesCount: issues.length,
      warningsCount: warnings.length,
      issues,
      warnings,
      status: issues.length === 0 ? "PASSED" : "FAILED",
    };
    console.log(JSON.stringify(report, null, 2));
    process.exit(issues.length === 0 ? 0 : 1);
  }

  // ---------------------------------------------------------------------------
  // D. Human Readable Reporting
  // ---------------------------------------------------------------------------
  console.log("================================================================================");
  console.log("       GOEXECUTION.COM COMPREHENSIVE INTERNAL LINKING E2E AUDIT");
  console.log("================================================================================\n");

  console.log(`[+] Canonical Route Inventory: ${canonicalRoutes.size} Routes Loaded`);
  console.log(`    - Service Categories: ${allServiceCategories.length}`);
  console.log(`    - Sub-Services:       ${allSubServices.length}`);
  console.log(`    - Industry Portals:   ${Object.keys(industries).length}`);
  console.log(`    - Blog Posts:         ${blogPosts.length}`);
  console.log(`    - Static Pages:       13\n`);

  if (!FLAG_ONLY_COMPONENTS) {
    console.log("--- [1] Blog Post Content (`lib/blog-posts.ts`) ---");
    console.log(`    - Total internal <a> links in blogs:  ${blogLinkRecords.length}`);
    console.log(`    - Baseline count:                    ${BASELINE_BLOG_LINKS_COUNT}`);
    console.log(`    - New links added:                   ${blogLinkRecords.length - BASELINE_BLOG_LINKS_COUNT}\n`);
  }

  if (!FLAG_ONLY_BLOG) {
    console.log("--- [2] React Components (`app/` and `components/`) ---");
    console.log(`    - Total links scanned in components: ${componentLinkRecords.length}\n`);
  }

  console.log("================================================================================");
  console.log("                          INTERNAL LINK DISTRIBUTION");
  console.log("================================================================================");
  console.log("Target Category Breakdown (Blog Content Links):");
  for (const [cat, count] of Object.entries(categoryDistribution)) {
    if (count > 0) {
      console.log(`  - ${cat.padEnd(25)} : ${count} links`);
    }
  }

  console.log("\nTop Sub-Services Targeted in Blog Posts:");
  const sortedSubServices = Object.entries(subServiceDistribution).sort((a, b) => b[1] - a[1]);
  if (sortedSubServices.length === 0) {
    console.log("  (None)");
  } else {
    for (const [subKey, count] of sortedSubServices) {
      console.log(`  - /services/${subKey}/`.padEnd(55) + ` : ${count} links`);
    }
  }

  if (warnings.length > 0) {
    console.log("\n================================================================================");
    console.log(`                            WARNINGS (${warnings.length})`);
    console.log("================================================================================");
    for (let i = 0; i < warnings.length; i++) {
      const w = warnings[i];
      console.log(`  ${i + 1}. [${w.type}] in ${w.file} (${w.location})`);
      console.log(`     Warning: ${w.message}\n`);
    }
  }

  console.log("\n================================================================================");
  console.log("                                AUDIT RESULTS");
  console.log("================================================================================");

  if (issues.length === 0) {
    console.log("[PASS] 100% of internal links are valid, canonical, and compliant with trailingSlash.");
    console.log(`       - Canonical Routes Inventory: ${canonicalRoutes.size}`);
    console.log(`       - Blog Content Links:         ${blogLinkRecords.length}`);
    console.log(`       - Component Links:            ${componentLinkRecords.length}`);
    console.log(`       - Issues / Broken Links:      0\n`);
    process.exit(0);
  } else {
    console.error(`[FAIL] Found ${issues.length} link or route issues:\n`);
    for (let i = 0; i < issues.length; i++) {
      const issue = issues[i];
      console.error(`  ${i + 1}. [${issue.type}] in ${issue.file} (${issue.location})`);
      console.error(`     Error: ${issue.message}\n`);
    }
    process.exit(1);
  }
}

// Run audit
runLinkAudit();
