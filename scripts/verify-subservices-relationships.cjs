#!/usr/bin/env node
/**
 * scripts/verify-subservices-relationships.cjs
 * Empirical Challenger Verification Harness for Sub-Services & Category Hubs
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

  const fn = new Function("exports", "require", "module", "__filename", "__dirname", js);
  fn(mod.exports, customRequire, mod, absPath, path.dirname(absPath));
  return mod.exports;
}

console.log("=== EMPIRICAL VERIFICATION HARNESS ===");

const servicesMod = loadTsModule("lib/services.ts");
const blogPostsMod = loadTsModule("lib/blog-posts.ts");

const { serviceCategories, subServices } = servicesMod;
const { blogPosts } = blogPostsMod;

console.log(`Loaded ${Object.keys(serviceCategories).length} service categories.`);
console.log(`Loaded ${Object.keys(subServices).length} sub-services.`);
console.log(`Loaded ${blogPosts.length} blog posts.\n`);

let failures = 0;

// 1. Verify Category Hub Related Blogs
console.log("--- 1. CATEGORY HUBS RELATED BLOGS VERIFICATION ---");
const categories = Object.keys(serviceCategories);
categories.forEach((catSlug) => {
  const cat = serviceCategories[catSlug];
  const categoryBlogSlug = catSlug === "seo" ? "seo-services" : catSlug;
  const relatedBlogs = blogPosts
    .filter((p) => p.categorySlug === categoryBlogSlug || (catSlug !== "seo" && catSlug !== "web-development" && p.categorySlug === "web-development"))
    .slice(0, 3);

  console.log(`Category: [${catSlug}] ("${cat.title}")`);
  console.log(`  Target Blog Category Slug: "${categoryBlogSlug}"`);
  console.log(`  Resolved Blog Count: ${relatedBlogs.length}`);
  relatedBlogs.forEach((b, i) => {
    console.log(`    ${i + 1}. [${b.slug}] "${b.title}" (${b.categorySlug})`);
  });

  if (relatedBlogs.length < 3) {
    console.error(`  FAIL: Category [${catSlug}] resolved fewer than 3 related blog posts (${relatedBlogs.length})`);
    failures++;
  } else {
    console.log(`  PASS`);
  }
  console.log();
});

// 2. Verify All 24 Sub-Services Related Blogs
console.log("--- 2. ALL 24 SUB-SERVICES RELATED BLOGS VERIFICATION ---");
const subServiceKeys = Object.keys(subServices);

let totalSubServices = 0;
let seoSubServicesCount = 0;

subServiceKeys.forEach((subKey) => {
  totalSubServices++;
  const sub = subServices[subKey];
  const catSlug = sub.categorySlug;
  const isSeo = catSlug === "seo";
  if (isSeo) seoSubServicesCount++;

  const relatedCategorySlug = catSlug === "seo" ? "seo-services" : catSlug;
  const curatedBlogs = sub.relatedBlogSlugs
    ? sub.relatedBlogSlugs
        .map((s) => blogPosts.find((p) => p.slug === s))
        .filter((p) => Boolean(p))
    : [];
  const fallbackBlogs = blogPosts.filter((p) => p.categorySlug === relatedCategorySlug);
  const combinedBlogs = [...curatedBlogs, ...fallbackBlogs];
  const relatedBlogs = combinedBlogs
    .filter((post, idx, self) => self.findIndex((p) => p.slug === post.slug) === idx)
    .slice(0, 3);

  console.log(`Sub-Service ${totalSubServices}/24: /services/${catSlug}/${sub.slug}/`);
  console.log(`  Title: "${sub.title}"`);
  console.log(`  Curated Slugs: ${JSON.stringify(sub.relatedBlogSlugs || [])}`);
  console.log(`  Resolved Blog Count: ${relatedBlogs.length}`);
  relatedBlogs.forEach((b, i) => {
    console.log(`    ${i + 1}. [${b.slug}] "${b.title}" (${b.categorySlug})`);
  });

  // Check uniqueness
  const slugs = relatedBlogs.map((b) => b.slug);
  const uniqueSlugs = new Set(slugs);
  if (uniqueSlugs.size !== slugs.length) {
    console.error(`  FAIL: Duplicate blog posts resolved for /services/${catSlug}/${sub.slug}/`);
    failures++;
  }

  if (relatedBlogs.length < 3) {
    console.error(`  FAIL: Sub-service /services/${catSlug}/${sub.slug}/ resolved fewer than 3 blog posts (${relatedBlogs.length})`);
    failures++;
  } else {
    console.log(`  PASS`);
  }
  console.log();
});

// 3. Specifically verify 4 SEO sub-services
console.log("--- 3. SEO SUB-SERVICES SPECIFIC AUDIT ---");
const seoSubSlugs = ["technical-seo", "local-seo", "ecommerce-seo", "small-business-seo"];
seoSubSlugs.forEach((slug) => {
  const sub = subServices[slug];
  if (!sub) {
    console.error(`FAIL: Missing SEO sub-service ${slug}`);
    failures++;
    return;
  }
  const relatedCategorySlug = "seo-services";
  const curatedBlogs = (sub.relatedBlogSlugs || [])
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean);
  const fallbackBlogs = blogPosts.filter((p) => p.categorySlug === relatedCategorySlug);
  const combinedBlogs = [...curatedBlogs, ...fallbackBlogs];
  const relatedBlogs = combinedBlogs
    .filter((post, idx, self) => self.findIndex((p) => p.slug === post.slug) === idx)
    .slice(0, 3);

  console.log(`SEO Sub-Service: /services/seo/${slug}/`);
  console.log(`  Resolved Count: ${relatedBlogs.length}/3`);
  relatedBlogs.forEach((b, i) => {
    console.log(`    ${i + 1}. [${b.slug}] "${b.title}"`);
  });

  if (relatedBlogs.length !== 3) {
    console.error(`FAIL: Expected exactly 3 related blogs for /services/seo/${slug}/, got ${relatedBlogs.length}`);
    failures++;
  } else {
    console.log(`  PASS: Valid 3 companion articles confirmed.`);
  }
  console.log();
});

console.log("=== SUMMARY ===");
console.log(`Total Categories Audited: ${categories.length}`);
console.log(`Total Sub-Services Audited: ${totalSubServices}`);
console.log(`SEO Sub-Services Audited: ${seoSubServicesCount}`);
console.log(`Total Verification Failures: ${failures}`);

if (failures > 0) {
  process.exit(1);
} else {
  console.log("\nALL EMPIRICAL RELATIONSHIP TESTS PASSED!");
  process.exit(0);
}
