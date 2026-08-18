# Go Execution SEO Project — Complete Continuation Handoff

**Prepared:** 19 August 2026  
**Website:** https://goexecution.com  
**Next.js workspace:** `D:\goexecution\go-execution-v2`  
**Purpose:** This document continues the earlier `go-execution-seo-blogging-handoff.md`. It records the SEO work completed or audited after that handoff, the current verified state, unresolved issues, and the exact next priorities. It should be supplied to a new Codex chat so work can continue without restarting the project.

---

## 1. Project Objective

Improve Go Execution's organic visibility for commercially valuable US searches related to:

- Web development and website redesign
- Next.js and WordPress development
- Technical, local, ecommerce, and small-business SEO
- Digital marketing and paid advertising
- Branding, graphic design, animation, and mobile apps
- Relevant industry-specific solutions

The goal is sustainable improvement in qualified impressions, clicks, leads, and rankings. A top-five-page or first-page result cannot be guaranteed because rankings depend on competition, authority, Google's systems, and continued execution.

---

## 2. Starting Point Inherited from the Previous Handoff

The earlier handoff had already defined:

- The primary Blog 1 keyword: **“why is my website not ranking on Google”**
- Blog 1 target URL: `/blog/why-is-my-website-not-ranking-on-google/`
- The diagnostic framework: **Discover → Crawl → Index → Understand → Match Intent → Compete → Rank**
- A service-page and blog-cluster strategy
- Search Console as the source of truth for indexing and query performance
- A requirement to avoid ranking guarantees, fabricated statistics, keyword stuffing, and generic AI copy

This handoff records what happened after that point.

---

## 3. Work Completed After the Previous Handoff

### 3.1 Blog 1 was fully rewritten

The article is now:

- **Title:** Why Is My Website Not Ranking on Google? A Complete Diagnostic Guide
- **SEO title:** Why Is My Website Not Ranking on Google? | Go Execution
- **URL:** https://goexecution.com/blog/why-is-my-website-not-ranking-on-google/
- **Primary keyword:** why is my website not ranking on Google
- **Published date in code:** 4 August 2026
- **Last modified date in code:** 18 August 2026

The rewrite now includes:

- A direct-answer summary near the top
- Indexing, crawling, canonical, intent, content, technical SEO, performance, site-age, competition, and migration diagnostics
- A prioritized “what to fix first” workflow
- A diagnostic table
- Four reader-facing FAQs
- Contextual internal links to technical SEO, website performance, website redesign, the SEO timeline article, SEO services, and contact
- More cautious claims and no ranking promises
- Article metadata, canonical URL, Open Graph data, Twitter card data, Article schema, WebPage schema, and BreadcrumbList schema

The live article was checked on 19 August 2026 and returned HTTP `200`.

### 3.2 Legacy Blog 1 URLs were redirected

Permanent redirects exist from the old WordPress/root variations to the new canonical article, including:

- `/why-your-business-website-is-not-ranking/`
- `/blog/why-your-business-website-is-not-ranking/`

These redirect to:

- `/blog/why-is-my-website-not-ranking-on-google/`

This protects migration signals and prevents the old and new versions from competing.

### 3.3 The Next.js blog system was completed and validated

The current codebase contains seven statically generated blog articles:

1. Why Is My Website Not Ranking on Google? A Complete Diagnostic Guide
2. How Long Does SEO Take for a New Website? Timeline Guide
3. Custom Web Development vs. Website Builders: Which Suits Your Business?
4. How Much Does Custom Web Development Cost? 2026 Pricing Breakdown
5. WordPress vs Next.js for Business Websites: A Performance Comparison
6. What Is Technical SEO? A Complete Guide for US Businesses
7. How to Redesign a Website Without Losing SEO Rankings

The implementation includes:

- Static generation through `generateStaticParams`
- Per-article metadata through `generateMetadata`
- Canonical URLs
- Article Open Graph and Twitter metadata
- Article, WebPage, and breadcrumb structured data
- Blog archive and category pages
- Related-article links
- Contextual service and conversion links inside articles

### 3.4 Service and industry SEO architecture was validated

The current route/content inventory contains:

- 6 service-category pages
- 24 detailed sub-service pages
- 7 industry pages
- 7 blog posts
- 2 blog-category pages
- 10 primary/static pages in the sitemap
- **56 total sitemap URLs**

Service categories:

1. Web Development
2. SEO
3. Digital Marketing
4. Design & Branding
5. Video
6. Mobile App Development

Industry pages:

1. Real Estate
2. Fashion
3. Retail
4. Hospitality
5. Technology
6. Professional Services
7. Health & Wellness

Dynamic service and industry pages have indexable server-rendered content, unique metadata, canonical URLs, breadcrumbs, and contextual cross-links.

### 3.5 Core technical SEO was implemented or verified

The following technical foundation is present:

- Site-wide metadata base: `https://goexecution.com`
- Index/follow directives
- Googlebot snippet, image-preview, and video-preview settings
- Google Search Console verification token
- Canonicals on primary, service, industry, category, and article routes
- Open Graph and Twitter metadata
- Dynamic XML sitemap
- Robots route
- Trailing-slash normalization
- Non-www to non-www canonical host redirects
- Compression enabled
- `X-Powered-By` disabled
- AVIF and WebP image support
- Many WordPress, old service, old sitemap, and junk URLs permanently redirected

The live checks on 19 August 2026 returned:

| URL | Result |
|---|---:|
| `https://goexecution.com/` | 200 |
| `https://goexecution.com/robots.txt` | 200 |
| `https://goexecution.com/sitemap.xml` | 200 |
| Blog 1 canonical URL | 200 |

The live sitemap contained **56 URLs**.

### 3.6 Structured data foundation was implemented

Reusable JSON-LD builders currently exist for:

- Organization
- Place
- WebSite
- WebPage
- CollectionPage
- ContactPage
- AboutPage
- Service
- Article
- BreadcrumbList

Current usage includes:

- Organization, WebSite, and WebPage graph on the homepage
- Service, WebPage, and breadcrumb graphs on service routes
- Article, WebPage, and breadcrumb graphs on blog posts
- Collection and breadcrumb graphs on blog/category pages
- Appropriate page-type and breadcrumb schema on contact, about, industry, portfolio, pricing, and legal pages

### 3.7 AI search and citation-readiness foundation was added

Explicit crawler access is configured for:

- GPTBot
- OAI-SearchBot
- ChatGPT-User
- ClaudeBot
- anthropic-ai
- PerplexityBot
- Google-Extended
- Applebot-Extended
- cohere-ai
- Bingbot
- CCBot

`/api/`, `/preview/`, and `/drafts/` remain blocked.

A public `llms.txt` file was added to summarize the agency, services, industries, contact routes, sitemap, and rendering architecture for AI systems. This is a supplementary discovery/citation aid; it is not a substitute for indexable pages, authority, or structured data.

### 3.8 WordPress migration redirects were expanded

Redirect coverage includes:

- Old root-level service URLs
- Old one-level service URLs
- New two-level service canonicals
- Old `/service/:slug/` paths
- About/contact legacy paths
- Legacy portfolio detail paths
- Old Blog 1 paths
- WordPress/Elementor junk URLs
- Old legal page names
- Rank Math/WordPress sitemap filenames
- `www` to non-`www`

This reduces broken backlinks, duplicate URLs, and crawl waste after the WordPress-to-Next.js migration.

### 3.9 Mobile performance optimization work was completed locally

A local production Lighthouse comparison was recorded:

| Mobile metric | Before | After |
|---|---:|---:|
| Performance score | 66 | 82 |
| First Contentful Paint | 2.0 s | 1.5 s |
| Largest Contentful Paint | 4.8 s | 3.5 s |
| Total Blocking Time | 440 ms | 320 ms |
| Cumulative Layout Shift | 0 | 0 |
| Speed Index | 5.5 s | 3.9 s |
| Transfer size | 791 KB | 495 KB |
| JavaScript transfer | 360 KB | 174 KB |
| LCP render delay | 2354 ms | 994 ms |

Changes contributing to the improvement included:

- Deferring analytics until interaction or a timeout
- Preventing the mobile “Executing” overlay from blocking LCP
- Removing unnecessary hero asset preloading
- Reducing image quality where visually acceptable
- Correcting responsive image sizing
- Deduplicating and resizing app/manifest icons
- Improving Next/Image use and modern image format configuration
- Lazy-loading non-critical visual assets

These numbers are from a **local production Lighthouse run**, not confirmed Google field data. Search Console Core Web Vitals and live PageSpeed must be used to validate real-user impact after deployment.

### 3.10 Initial authority/backlink audit and plan were created

A separate detailed file exists at:

- `D:\goexecution\go-execution-v2\backlink-plan.md`

It contains:

- A preliminary public backlink baseline
- Manual brand/search visibility checks
- Required Ahrefs and Search Console exports
- Link-target mapping
- A 90-day authority plan
- Client/partner link outreach
- Linkable asset ideas
- Outreach templates
- A quality gate rejecting PBNs, paid link packages, irrelevant directories, and manipulative exact-match anchors

The preliminary third-party check suggested a very weak authority baseline, but it must be cross-checked with authenticated Ahrefs data before being treated as definitive.

The proposed 90-day authority goal is **12–20 legitimate referring domains**, subject to outreach quality and partner response. It is not a ranking guarantee.

---

## 4. Search Console and Ahrefs Status

The user is logged into Google Search Console and previously logged into Ahrefs in the Codex in-app browser. However, the browser session was not programmatically accessible to the coding agent. Therefore:

- No authenticated Search Console export has yet been stored in the repository.
- No authenticated Ahrefs export has yet been stored in the repository.
- Exact current clicks, impressions, average position, indexed-page counts, backlink counts, keyword ranks, and Search Console issue totals must not be claimed as verified.
- Public search checks not surfacing the brand are not proof that the site is absent from Google's index.

### Data still required from Google Search Console

Export the following with the longest useful comparison range, ideally last 3 months vs previous period:

1. Performance → Search results → Queries
2. Performance → Search results → Pages
3. Performance → Search results → Countries
4. Performance → Search results → Devices
5. Indexing → Pages report
6. Sitemaps report
7. Core Web Vitals → Mobile and Desktop
8. Manual Actions
9. Security Issues
10. URL Inspection results for homepage, each service category, Blog 1, and other priority URLs

### Data still required from Ahrefs

1. Site Explorer Overview
2. Organic keywords
3. Top pages
4. Backlinks
5. Referring domains
6. Broken backlinks
7. Best by links
8. Competing domains
9. Content gap
10. Site Audit issues export

Once exported as CSV/XLSX, place files in the workspace and analyze them before making keyword, pruning, or outreach decisions.

---

## 5. Important Problems Found but Not Yet Fixed

### Priority 0 — Contact/NAP inconsistency

Business/contact signals currently conflict:

- Structured-data phone: `+1-737-316-6049`
- Contact-page phone: `+1 (587) 200-4832`
- Structured-data email: `info@goexecution.com`
- Visible site email: `info@goexecution.com`
- The visible email links currently open `justin@goexecution.com`
- The footer and about page have the same visible-email/link mismatch

This must be resolved before serious local SEO or citation building. Choose one canonical public phone and decide whether the public address is `info@goexecution.com` or `justin@goexecution.com`. Then make the website, Organization schema, Google Business Profile, social profiles, and directory citations identical.

### Priority 0 — Search Console indexing must be verified

The site is crawlable and the live sitemap works, but that does not prove every priority URL is indexed. Check URL Inspection and the Pages report for:

- Crawled — currently not indexed
- Discovered — currently not indexed
- Duplicate/canonical conflicts
- Redirect errors
- Soft 404s
- Server errors
- Blocked resources

### Priority 1 — FAQ schema is missing

Service, industry, homepage, and Blog 1 FAQ content is visible, but no `FAQPage` JSON-LD builder/implementation was found. The `llms.txt` file currently claims FAQPage schema exists, so either:

1. Add valid FAQPage schema only where the same questions and answers are visibly rendered; or
2. Remove that claim from `llms.txt`.

Do not expect FAQ rich results: Google restricts their display heavily. The purpose is accurate machine-readable content, not a guaranteed SERP feature.

### Priority 1 — Sitemap dates are inaccurate for static pages

The sitemap assigns the current build/deployment date as `lastModified` to static, category, sub-service, industry, and blog-category pages. Every deployment therefore tells crawlers that all those pages changed.

Replace build-time dates with actual content modification dates or omit `lastModified` when no reliable date exists. Blog post dates are already derived from content data.

### Priority 1 — One article has an invalid date relationship

“How Long Does SEO Take for a New Website?” currently has:

- Published: `2026-07-31`
- Modified: `2026-07-30`

The modified date must not precede the publication date.

### Priority 1 — Article image/social-preview coverage is incomplete

The blog post records contain image fields, but the current seven entries do not define full article images. Consequently, article-specific Open Graph/Twitter images are usually absent and the blog archive uses visual fallbacks.

Create unique, useful 1200×630 images for priority articles, with descriptive alt text and compressed AVIF/WebP delivery.

### Priority 1 — Author and trust signals need strengthening

Articles use “Go Execution Editorial” and Organization as author. Improve E-E-A-T/citation readiness by adding:

- A real reviewer or author with role and expertise
- Author/reviewer bio pages where appropriate
- Editorial policy
- Last-reviewed date when genuinely reviewed
- References to primary sources for factual/technical claims
- Relevant first-party examples or case studies

### Priority 1 — `llms.txt` contains claims that need validation

The file currently uses claims such as sub-second delivery, authoritative/top rankings, and FAQPage schema. Keep only statements supported by the live site or documented evidence. AI-citation files should be factual, consistent, and conservative.

### Priority 1 — Backlink/authority execution has not started at scale

The plan exists, but profile completion, citation cleanup, client/partner links, linkable assets, and outreach still need execution and tracking.

### Priority 2 — Remaining blog articles need editorial upgrades

Blog 1 received the full diagnostic rewrite. The other six posts are much shorter and should be upgraded with:

- SERP/intention analysis
- Strong direct answers
- Original examples
- Better supporting sections
- Primary-source references
- Useful tables/checklists
- Contextual internal links
- Accurate FAQ schema where justified
- Conversion paths aligned with the article's intent

### Priority 2 — Category and topic-cluster depth

Only two blog categories are generated from current content. Expand clusters based on Search Console demand, not arbitrary volume. Planned themes from the earlier handoff included:

- New-site SEO process and timeline
- Technical SEO diagnostics
- Website migrations and SEO-hour estimation
- Website performance/Core Web Vitals
- WordPress vs Next.js
- Local/Dallas service intent where business eligibility and NAP are confirmed

### Priority 2 — Internal linking needs a crawl-based audit

Internal links exist, but a full crawl is still needed to identify:

- Orphan or weakly linked service pages
- Pages with excessive or generic anchors
- Broken internal links
- Redirecting internal links
- Pages competing for the same query intent
- Blog posts that should link into commercial service pages and vice versa

---

## 6. Recommended Next Execution Order

### Phase 1 — Measurement and trust consistency (immediate)

1. Export Search Console data listed above.
2. Export authenticated Ahrefs data listed above.
3. Decide the canonical public phone and email.
4. Fix contact information everywhere in the site and structured data.
5. Check Google Business Profile eligibility and make NAP identical if a valid profile exists.
6. Inspect priority URLs in Search Console and request indexing only after resolving reported issues.

### Phase 2 — Technical corrections (week 1)

1. Fix sitemap `lastModified` logic.
2. Correct the invalid blog publication/modification dates.
3. Add accurate FAQPage schema or remove unsupported claims.
4. Validate all JSON-LD with Schema.org validator and Google Rich Results Test where applicable.
5. Crawl all 56 sitemap URLs and test redirects, canonicals, status codes, titles, descriptions, headings, and internal links.
6. Re-run live mobile PageSpeed and compare with Search Console field data.

### Phase 3 — Content and on-page work (weeks 1–4)

1. Use Search Console query/page data to map one primary intent per URL.
2. Upgrade the six shorter articles in priority order.
3. Add original images and article social previews.
4. Create stronger author/reviewer and editorial trust signals.
5. Add bidirectional internal links between articles, service categories, sub-services, and industry pages.
6. Avoid publishing overlapping articles until cannibalization is checked.

### Phase 4 — Authority and local presence (months 1–3)

1. Normalize business details on all owned profiles.
2. Complete legitimate company profiles and relevant Dallas/industry citations.
3. Request editorial links from real clients and partners.
4. Publish linkable assets:
   - WordPress-to-Next.js/PageSpeed case study
   - Dallas small-business website performance benchmark
   - Downloadable website ranking diagnostic checklist
5. Run targeted outreach to relevant publications and resource pages.
6. Track acquired/refused links, anchors, targets, and referral traffic.

---

## 7. Success Measurement

Track improvements by page and query, not only total traffic.

### Weekly

- Indexing changes for priority URLs
- Crawl/server errors
- New referring domains and lost links
- Search Console clicks and impressions for priority pages
- Contact/consultation conversions from organic landing pages

### Monthly

- Non-brand clicks and impressions
- Queries moving into positions 1–10, 11–20, and 21–50
- Click-through rate by page/query
- Organic leads and qualified consultations
- Indexed sitemap URLs
- Mobile Core Web Vitals field status
- Referring-domain quality and relevance
- Branded-search growth

### Do not use as the sole KPI

- A single vanity keyword
- Domain-rating changes without qualified traffic
- Total article count
- AI crawler access alone
- PageSpeed score without real-user data and conversions

---

## 8. Critical Files

- Main SEO handoff: `D:\goexecution\go-execution-v2\GO-EXECUTION-SEO-HANDOFF-2026-08-19.md`
- Earlier handoff: `C:\Users\Raheel\Downloads\go-execution-seo-blogging-handoff.md`
- Backlink plan: `D:\goexecution\go-execution-v2\backlink-plan.md`
- Blog content: `D:\goexecution\go-execution-v2\lib\blog-posts.ts`
- Sitemap: `D:\goexecution\go-execution-v2\app\sitemap.ts`
- Robots: `D:\goexecution\go-execution-v2\app\robots.ts`
- Root metadata: `D:\goexecution\go-execution-v2\app\layout.tsx`
- Site/NAP data: `D:\goexecution\go-execution-v2\lib\seo\site.ts`
- JSON-LD utilities: `D:\goexecution\go-execution-v2\lib\seo\jsonld.tsx`
- Redirects/images config: `D:\goexecution\go-execution-v2\next.config.ts`
- Service data: `D:\goexecution\go-execution-v2\lib\services.ts`
- Industry data: `D:\goexecution\go-execution-v2\lib\industries.ts`
- AI discovery file: `D:\goexecution\go-execution-v2\public\llms.txt`

---

## 9. Instructions for the Next Codex Chat

Copy this prompt into the next chat and attach this Markdown file plus any Search Console/Ahrefs exports:

> We are continuing the Go Execution SEO project. Use the attached `GO-EXECUTION-SEO-HANDOFF-2026-08-19.md` as the source of truth and do not restart the audit from scratch. The Next.js workspace is `D:\goexecution\go-execution-v2`. First inspect any attached Search Console and Ahrefs exports, then resolve the Priority 0 items from the handoff. Separate verified data from assumptions, preserve existing design/functionality, follow the repository's Next.js AGENTS.md rules, and verify every code change with relevant tests/builds. Do not promise rankings or create fabricated statistics.

### If no exports are attached

Start with these code fixes in order:

1. Resolve the phone/email/NAP inconsistency after confirming the owner's canonical details.
2. Correct sitemap modification dates.
3. Fix the invalid Blog 2 date relationship.
4. Implement accurate FAQPage schema where FAQ content is visibly rendered.
5. Clean unsupported claims from `llms.txt`.
6. Run a production build and crawl the generated routes.

---

## 10. Final Current-State Summary

Go Execution now has a modern, crawlable Next.js SEO foundation with 56 sitemap URLs, canonicalized service/industry/blog architecture, migration redirects, reusable structured data, rewritten Blog 1, AI crawler access, and improved local mobile Lighthouse performance. The largest remaining blockers are not basic crawl access; they are authenticated Search Console validation, inconsistent business contact signals, inaccurate sitemap dates, missing FAQ schema, incomplete article trust/media depth, and weak external authority. The next phase should be driven by Search Console and Ahrefs exports, followed by technical cleanup, content-cluster strengthening, and legitimate authority building.
