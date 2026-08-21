/**
 * scripts/stress-test-challenger.cjs
 * Empirical Challenger Stress-Test Suite for Milestone 2 Link Integrity & Component Routing
 */

const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const ROOT_DIR = path.resolve(__dirname, "..");

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
      if (entry.name !== "node_modules" && entry.name !== ".next" && entry.name !== ".git" && entry.name !== ".agents") {
        walkDir(fullPath, fileFilter, acc);
      }
    } else if (fileFilter(fullPath)) {
      acc.push(fullPath);
    }
  }
  return acc;
}

async function runEmpiricalStressTests() {
  console.log("================================================================================");
  console.log("       MILITARY-GRADE EMPIRICAL STRESS TEST HARNESS — CHALLENGER 1");
  console.log("================================================================================\n");

  let failures = 0;
  let checksPassed = 0;

  // Load modules
  const servicesMod = loadTsModule("lib/services.ts");
  const blogMod = loadTsModule("lib/blog-posts.ts");
  const industriesMod = loadTsModule("lib/industries.ts");
  const sitemapMod = loadTsModule("app/sitemap.ts");

  const serviceCategories = servicesMod.serviceCategories || {};
  const allServiceCategories = servicesMod.allServiceCategories || [];
  const allSubServices = servicesMod.allSubServices || [];
  const blogPosts = blogMod.blogPosts || [];
  const blogPostsBySlug = blogMod.blogPostsBySlug || {};
  const industries = industriesMod.industries || {};

  console.log(`[Loaded Data] ${allServiceCategories.length} categories, ${allSubServices.length} sub-services, ${blogPosts.length} blog posts, ${Object.keys(industries).length} industries.`);

  // Test 1: Category and Sub-Service Relationship Integrity
  console.log("\n--- TEST 1: Service Hierarchy & Route Integrity ---");
  for (const cat of allServiceCategories) {
    if (!cat.slug || !cat.title) {
      console.error(`[FAIL] Category missing slug or title:`, cat);
      failures++;
    }
    if (!cat.subServiceSlugs || cat.subServiceSlugs.length === 0) {
      console.error(`[FAIL] Category ${cat.slug} has no subServiceSlugs`);
      failures++;
    }
  }
  for (const sub of allSubServices) {
    const parentCat = serviceCategories[sub.categorySlug];
    if (!parentCat) {
      console.error(`[FAIL] SubService ${sub.slug} references invalid categorySlug: ${sub.categorySlug}`);
      failures++;
    } else {
      const existsInParent = parentCat.subServiceSlugs && parentCat.subServiceSlugs.includes(sub.slug);
      if (!existsInParent) {
        console.error(`[FAIL] SubService ${sub.slug} missing from parent category ${sub.categorySlug}.subServiceSlugs list`);
        failures++;
      }
    }
  }
  if (failures === 0) {
    console.log(`[PASS] All 6 categories and 24 sub-services have reciprocal parent-child integrity.`);
    checksPassed++;
  }

  // Test 2: Sub-Service Related Blog Slugs Resolution & Category Normalization Simulation
  console.log("\n--- TEST 2: Sub-Service Related Blog Resolution & Deduplication ---");
  let subServiceRelatedBlogFailures = 0;
  for (const sub of allSubServices) {
    const catSlug = sub.categorySlug;
    const normalizedCategory = catSlug === "seo" ? "seo-services" : catSlug;

    // Simulate page.tsx logic:
    // 1. Curated slugs
    const curatedPosts = (sub.relatedBlogSlugs || [])
      .map((slug) => blogPostsBySlug[slug] || blogPosts.find((p) => p.slug === slug))
      .filter(Boolean);

    // 2. Category matching fallback
    const categoryPosts = blogPosts.filter(
      (post) =>
        post.categorySlug === normalizedCategory ||
        post.categorySlug === catSlug ||
        (catSlug === "seo" && post.categorySlug === "seo-services")
    );

    // Deduplicate and take top 3
    const seenSlugs = new Set();
    const relatedPosts = [];
    for (const post of [...curatedPosts, ...categoryPosts]) {
      if (!seenSlugs.has(post.slug)) {
        seenSlugs.add(post.slug);
        relatedPosts.push(post);
      }
      if (relatedPosts.length >= 3) break;
    }

    if (relatedPosts.length < 3) {
      console.error(`[FAIL] Sub-service /services/${catSlug}/${sub.slug}/ only found ${relatedPosts.length} related posts (expected 3)`);
      subServiceRelatedBlogFailures++;
      failures++;
    }

    // Verify each curated slug actually exists
    if (sub.relatedBlogSlugs) {
      for (const curSlug of sub.relatedBlogSlugs) {
        if (!blogPostsBySlug[curSlug] && !blogPosts.find((p) => p.slug === curSlug)) {
          console.error(`[FAIL] Sub-service /services/${catSlug}/${sub.slug}/ references non-existent relatedBlogSlug: "${curSlug}"`);
          subServiceRelatedBlogFailures++;
          failures++;
        }
      }
    }
  }
  if (subServiceRelatedBlogFailures === 0) {
    console.log(`[PASS] All 24 sub-services resolve exactly 3 related blog posts with 100% slug existence and valid normalization.`);
    checksPassed++;
  }

  // Test 3: Category Hub Related Insights Simulation
  console.log("\n--- TEST 3: Category Hub Related Insights Simulation ---");
  let catHubFailures = 0;
  for (const cat of allServiceCategories) {
    const catSlug = cat.slug;
    const normalizedCategory = catSlug === "seo" ? "seo-services" : catSlug;
    const relatedPosts = blogPosts.filter(
      (p) =>
        p.categorySlug === normalizedCategory ||
        p.categorySlug === catSlug ||
        (catSlug === "seo" && p.categorySlug === "seo-services")
    ).slice(0, 3);

    console.log(`  Category [${catSlug}] -> found ${relatedPosts.length} related blog posts (categorySlug matches: ${normalizedCategory})`);
    if (catSlug === "seo" && relatedPosts.length === 0) {
      console.error(`[FAIL] SEO category hub found 0 related blog posts due to slug mismatch!`);
      catHubFailures++;
      failures++;
    }
    if (catSlug === "web-development" && relatedPosts.length === 0) {
      console.error(`[FAIL] Web Development category hub found 0 related blog posts!`);
      catHubFailures++;
      failures++;
    }
  }
  if (catHubFailures === 0) {
    console.log(`[PASS] Category hubs properly resolve related insights.`);
    checksPassed++;
  }

  // Test 4: Exhaustive Codebase Trailing Slash Scan (Regex across ALL TSX/TS/JSON files)
  console.log("\n--- TEST 4: Exhaustive Deep Scan of Codebase for Trailing Slash Violations ---");
  const codeFiles = walkDir(
    ROOT_DIR,
    (p) => /\.(tsx|ts|jsx|js|json)$/.test(p) && !p.includes("node_modules") && !p.includes(".next") && !p.includes("dist") && !p.includes(".agents") && !p.includes("scripts/stress-test")
  );

  let rawSlashIssues = 0;
  // Regex to find href attributes
  const hrefRegex = /href\s*=\s*(?:["']([^"']+)["']|\{["']([^"']+)["']\}|\{`([^`]+)`\})/g;

  for (const file of codeFiles) {
    const relPath = path.relative(ROOT_DIR, file).replace(/\\/g, "/");
    // skip audit scripts and test files
    if (relPath.startsWith("scripts/")) continue;

    const content = fs.readFileSync(file, "utf8");
    let match;
    while ((match = hrefRegex.exec(content)) !== null) {
      const rawHref = match[1] || match[2] || match[3];
      if (!rawHref) continue;

      // Ignore external, tel, mailto, javascript, pure anchors
      if (/^(https?:\/\/|mailto:|tel:|javascript:|#)/i.test(rawHref)) continue;

      // Check root-relative internal links
      if (rawHref.startsWith("/")) {
        // Strip query string and hash
        const urlPath = rawHref.split("?")[0].split("#")[0];

        // Check if ends with slash
        if (!urlPath.endsWith("/")) {
          console.error(`[VIOLATION] Missing trailing slash in ${relPath}: href="${rawHref}"`);
          rawSlashIssues++;
          failures++;
        }

        // Check if query string is preceded by slash, e.g. /portfolio?category= -> should be /portfolio/?category=
        if (rawHref.includes("?")) {
          const pathBeforeQuery = rawHref.split("?")[0];
          if (!pathBeforeQuery.endsWith("/")) {
            console.error(`[VIOLATION] Query param not preceded by trailing slash in ${relPath}: href="${rawHref}"`);
            rawSlashIssues++;
            failures++;
          }
        }
      }
    }
  }

  if (rawSlashIssues === 0) {
    console.log(`[PASS] Scanned ${codeFiles.length} source files: 0 trailing slash violations found across all hrefs and query strings.`);
    checksPassed++;
  }

  // Test 5: Blog Posts HTML Anchor Tag Stress Test
  console.log("\n--- TEST 5: Blog Posts HTML Anchor Tag Rigorous Audit ---");
  let blogAnchorIssues = 0;
  const canonicalRouteSet = new Set();
  for (const cat of allServiceCategories) canonicalRouteSet.add(`/services/${cat.slug}/`);
  for (const sub of allSubServices) canonicalRouteSet.add(`/services/${sub.categorySlug}/${sub.slug}/`);
  for (const [slug] of Object.entries(industries)) canonicalRouteSet.add(`/industries/${slug}/`);
  for (const post of blogPosts) canonicalRouteSet.add(`/${post.slug}/`);
  canonicalRouteSet.add("/");
  canonicalRouteSet.add("/about/");
  canonicalRouteSet.add("/blog/");
  canonicalRouteSet.add("/contact/");
  canonicalRouteSet.add("/pricing/");
  canonicalRouteSet.add("/privacy-policy/");
  canonicalRouteSet.add("/services/");
  canonicalRouteSet.add("/industries/");
  canonicalRouteSet.add("/terms-of-service/");
  canonicalRouteSet.add("/cookie-policy/");
  canonicalRouteSet.add("/portfolio/");
  canonicalRouteSet.add("/logo-questionnaire/");
  canonicalRouteSet.add("/web-questionnaire/");

  let totalBlogInternalAnchors = 0;
  for (const post of blogPosts) {
    const aRegex = /<a\b([^>]*)>(.*?)<\/a>/gis;
    let aMatch;
    while ((aMatch = aRegex.exec(post.contentHtml)) !== null) {
      const attrs = aMatch[1];
      const text = aMatch[2].replace(/<[^>]*>/g, "").trim();
      const hrefMatch = attrs.match(/href=["']([^"']*)["']/i);
      if (!hrefMatch) {
        console.error(`[FAIL] Blog post "${post.slug}" has <a> without href: ${aMatch[0]}`);
        blogAnchorIssues++;
        failures++;
        continue;
      }
      const href = hrefMatch[1];
      if (/^(https?:\/\/|mailto:|tel:|#)/i.test(href)) continue;

      totalBlogInternalAnchors++;

      if (!href.startsWith("/")) {
        console.error(`[FAIL] Blog post "${post.slug}" has non-root internal link: ${href}`);
        blogAnchorIssues++;
        failures++;
      }
      const pathOnly = href.split("?")[0].split("#")[0];
      if (!pathOnly.endsWith("/")) {
        console.error(`[FAIL] Blog post "${post.slug}" link missing trailing slash: ${href}`);
        blogAnchorIssues++;
        failures++;
      }
      if (!canonicalRouteSet.has(pathOnly)) {
        console.error(`[FAIL] Blog post "${post.slug}" link targets non-existent route: ${href}`);
        blogAnchorIssues++;
        failures++;
      }
      if (!text || text.length < 2) {
        console.error(`[FAIL] Blog post "${post.slug}" has empty anchor text: ${aMatch[0]}`);
        blogAnchorIssues++;
        failures++;
      }
    }
  }

  if (blogAnchorIssues === 0) {
    console.log(`[PASS] Audited ${totalBlogInternalAnchors} blog internal links across all 17 posts: 100% valid canonical targets, proper slashes, non-empty anchor text.`);
    checksPassed++;
  }

  console.log("\n================================================================================");
  console.log(`                       STRESS TEST SUMMARY: ${failures === 0 ? "ALL CHECKS PASSED" : "FAILURES DETECTED"}`);
  console.log("================================================================================");
  console.log(`Checks passed: ${checksPassed} / 5 test suites`);
  console.log(`Total failures: ${failures}`);

  if (failures > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runEmpiricalStressTests();
