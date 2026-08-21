# Project: goexecution.com Comprehensive SEO Internal Linking Strategy & Implementation

## Architecture
- **Framework**: Next.js 16 (React 19, Turbopack, TypeScript).
- **Routing Protocol**: `trailingSlash: true` in `next.config.ts`. All internal links must terminate with a trailing slash `/`.
- **Blog Storage & Rendering**: `lib/blog-posts.ts` contains 17 strongly-typed `BlogPost` entries with `contentHtml` strings rendered via `dangerouslySetInnerHTML` in `app/[slug]/page.tsx`. Links inside `contentHtml` MUST use standard HTML `<a href="...">` tags with relative canonical paths.
- **Service Structure & Rendering**: `lib/services.ts` defines 6 category hubs (`/services/[category]/`) and 24 sub-services (`/services/[category]/[slug]/`). Rendered in `app/services/[category]/page.tsx` and `app/services/[category]/[slug]/page.tsx`. Component links MUST use `next/link` `<Link href="...">`.
- **Legacy WordPress Data**: `lib/wp-content.json` holds legacy data for pricing, portfolio, legal, and services.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | E2E Link & Route Audit Infrastructure | Programmatic script (`scripts/audit-internal-links.cjs`) to audit all internal links across blog posts and components, verifying canonical paths, trailing slashes, zero redirect hops, and link count growth | E2E Test Track | Spec Miner / Survey |
| 2 | Blog Post Contextual Internal Linking (SEO Cluster) | Insert contextual, keyword-optimized HTML `<a>` links across all 8 SEO blog posts in `lib/blog-posts.ts` targeting relevant SEO, web dev, and digital marketing sub-services | Milestone 1 | Explorer 1 |
| 3 | Blog Post Contextual Internal Linking (Web Dev Cluster) | Insert contextual, keyword-optimized HTML `<a>` links across all 9 Web Development blog posts in `lib/blog-posts.ts` targeting web development, performance, e-commerce, and SEO sub-services | Milestone 1 | Explorer 1 |
| 4 | Blog-to-Blog Companion Article Linking | Add high-relevance cross-links between complementary blog posts in `lib/blog-posts.ts` to form strong topic clusters | Milestone 1 | Explorer 1 |
| 5 | Sub-Service Related Blog Filter Bug Fix | Fix the `catSlug === "seo"` vs `post.categorySlug === "seo-services"` mismatch in `app/services/[category]/[slug]/page.tsx` so related articles display on all SEO sub-service pages | Milestone 2 | Explorer 2 |
| 6 | Service-to-Blog & Service-to-Service Contextual Linking | Enrich sub-service definitions in `lib/services.ts` and service components with contextual `<Link>` anchors to in-depth diagnostic guides and complementary services | Milestone 2 | Explorer 2 |
| 7 | Full Build & SSG Validation | Ensure `npm run build` generates 100% of static pages (79+ pages) with 0 TypeScript, lint, or route generation errors | Milestone 3 | ORIGINAL_REQUEST |
| 8 | Adversarial Coverage & Integrity Hardening | Verify zero broken links, zero hardcoded cheat bypasses, correct anchor text distribution, and 100% compliance with SEO best practices | Milestone 3 | Project Pattern |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| E2E | E2E Link & Route Audit Harness | Create `scripts/audit-internal-links.cjs` and publish `TEST_READY.md` | none | DONE |
| 1 | Blog Content Internal Linking (`lib/blog-posts.ts`) | Contextual internal links across all 17 blog posts in `lib/blog-posts.ts` | E2E | DONE |
| 2 | Service Component Linking & Filter Fix | Fix SEO category slug bug in `app/services/[category]/[slug]/page.tsx` and enrich `lib/services.ts` with contextual links | Milestone 1 | IN_PROGRESS |
| 3 | Final E2E Verification & Adversarial Hardening | Run complete test suite, link audits, `npm run build`, forensic audit gate | Milestone 1, Milestone 2 | PLANNED |

## Interface Contracts
### `scripts/audit-internal-links.cjs` ↔ Implementation
- Script extracts all `<a href="...">` from `lib/blog-posts.ts` and `<Link href="...">` from `.tsx` files.
- Checks each href against valid routes extracted from `app/sitemap.ts` (`/`, `/about/`, `/pricing/`, `/portfolio/`, `/contact/`, `/services/`, `/services/[category]/`, `/services/[category]/[slug]/`, `/[slug]/`, etc.).
- Verifies:
  1. Href starts with `/` and ends with `/` (trailing slash enforcement).
  2. Target route exists in canonical route inventory.
  3. No legacy single-level redirects (e.g., `/services/technical-seo/` is forbidden; `/services/seo/technical-seo/` is required).
  4. Total internal links added >= 5 (target is 40+).
  5. Returns exit code 0 on success, exit code 1 on any invalid route.

### `lib/blog-posts.ts` ↔ Next.js Page Renderer (`app/[slug]/page.tsx`)
- `contentHtml` must remain a valid HTML string.
- HTML anchor tags `<a href="/target/">Anchor Text</a>` must be properly closed.
- TypeScript exports `blogPosts` array without type errors.

### `lib/services.ts` ↔ Next.js Sub-Service Page (`app/services/[category]/[slug]/page.tsx`)
- Category slug normalization: `catSlug === "seo" ? "seo-services" : catSlug` (or alias handling) ensures `blogPosts.filter` populates related articles for both `web-development` and `seo`.
- Sub-service `overview` and `capabilities` fields support clean rendering.

## Code Layout
- `lib/blog-posts.ts`: Blog post data array and `contentHtml` strings.
- `lib/services.ts`: Service categories and sub-services data.
- `app/services/[category]/[slug]/page.tsx`: Dynamic sub-service page template and related blog post filter.
- `scripts/audit-internal-links.cjs`: Automated link validation test harness.
- `next.config.ts`: URL redirect and routing rules.
