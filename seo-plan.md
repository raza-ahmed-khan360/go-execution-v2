# Go Execution — WordPress to Next.js SEO Migration Plan

**Document status:** Implementation source of truth  
**Prepared:** 4 August 2026  
**Production site:** `https://goexecution.com`  
**Target:** Next.js App Router, TypeScript  
**Migration type:** Same-domain platform/hosting migration; this is **not** a domain-name change as long as `goexecution.com` remains the public domain.

> This document preserves the SEO work already completed in WordPress/Rank Math and translates it into exact Next.js requirements. A cutover must not be approved until every item marked **BLOCKING** passes.

---

## 1. Executive decision

The safest migration is to replace the WordPress origin while keeping all valuable public URLs unchanged. Google should continue to see the same canonical hostname, paths, content intent, metadata, internal links and structured data—only the technology serving them changes.

### Non-negotiable rules

1. Keep `https://goexecution.com` as the only canonical public origin.
2. Preserve all 15 indexable URLs listed in this document, including their trailing slashes.
3. Set `trailingSlash: true` in Next.js.
4. Redirect `http`, `www` and any alternate public hostname to the non-`www` HTTPS URL in one permanent hop.
5. Never allow the WordPress copy, preview deployment, temporary hostname or Next.js staging site to be publicly indexable.
6. Preserve page meaning and approved copy during the cutover. Design changes are allowed; simultaneous URL and content rewrites are not.
7. Generate title, description, canonical, robots and structured data on the server—not after client-side JavaScript runs.
8. Include only canonical, `200`, indexable URLs in the sitemap.
9. Preserve every valid legacy redirect. Export the complete Rank Math redirect inventory before launch.
10. Do not use Google Search Console's **Change of Address** tool unless the domain itself changes to a different domain.
11. Do not delete the old hosting immediately. Monitor DNS/server traffic first, then disable it once all traffic and crawlers reach Next.js.
12. Do not claim that migration, schema, IndexNow or sitemap submission guarantees indexing or rankings.

Google classifies this as a [hosting change without URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes). A temporary crawl-rate fluctuation after switching infrastructure is normal.

---

## 2. Current production SEO source of truth

This baseline was verified against the live site on 4 August 2026. The Next.js implementation must match it at initial launch unless a change is explicitly approved in the redirect/content register.

### 2.1 Canonical host and URL format

| Setting | Required value |
|---|---|
| Scheme | `https` |
| Canonical hostname | `goexecution.com` |
| `www` policy | Redirect to non-`www` |
| Page URL style | Lowercase, trailing slash |
| Query parameters | Never canonical; canonical points to clean URL |
| Canonical tag | Absolute self-canonical on each indexable page |
| Language | `en-US` content; `<html lang="en">` |

Canonical host examples:

```text
http://goexecution.com/about/      -> 301/308 -> https://goexecution.com/about/
http://www.goexecution.com/about/  -> 301/308 -> https://goexecution.com/about/
https://www.goexecution.com/about/ -> 301/308 -> https://goexecution.com/about/
https://goexecution.com/about      -> 308     -> https://goexecution.com/about/
```

There must be no redirect chain such as `http -> https www -> https non-www -> trailing slash`.

**Current issue to correct during the Next.js/CDN cutover:** `http://www.goexecution.com/about/` currently redirects first to `https://www.goexecution.com/about/` and then to the non-`www` URL. The target configuration above removes this two-hop chain by sending every `http://www` request directly to `https://goexecution.com/<same-path>/`.

### 2.2 Exact indexable URL and metadata inventory

All 15 rows currently return `200`, are indexable, have an absolute self-canonical and contain exactly one H1.

| Canonical URL | Title | Meta description | H1 |
|---|---|---|---|
| `https://goexecution.com/` | Digital Marketing & Web Design Agency \| Go Execution | Go Execution helps US businesses grow with web design, SEO, digital marketing, branding, mobile apps, and video animation focused on measurable results. | Go Execution is your digital growth partner. |
| `https://goexecution.com/about/` | About Go Execution \| US Digital Growth Agency Team | Meet the Go Execution team and learn how we combine strategy, design, development, SEO, and marketing to help US businesses achieve sustainable growth. | About Us: Strategy & Execution |
| `https://goexecution.com/blog/` | Digital Marketing & Web Design Insights \| Go Execution | Read practical insights from Go Execution on web design, SEO, branding, digital marketing, mobile apps, video animation, and sustainable business growth. | Insights & Growth |
| `https://goexecution.com/contact/` | Contact Go Execution \| Start Your Digital Growth Project | Contact Go Execution to discuss web design, SEO, digital marketing, branding, mobile apps, or video animation for your US business and growth goals. | Contact Us |
| `https://goexecution.com/digital-marketing/` | Digital Marketing Services for US Businesses \| Go Execution | Grow your business with integrated digital marketing services covering strategy, content, SEO, paid media, and conversion-focused campaign execution. | Digital Marketing |
| `https://goexecution.com/how-long-does-seo-take-for-new-website/` | How Long Does SEO Take for a New Website? \| Go Execution | How long does SEO take for a new website? Learn realistic crawling, indexing and visibility checkpoints, what to verify, and when to adjust strategy. | How Long Does SEO Take for a New Website? Timeline Guide |
| `https://goexecution.com/logo-design/` | Logo Design & Brand Identity Services \| Go Execution | Create a distinctive, consistent brand with professional logo design and brand identity services from Go Execution for US businesses and startups. | Logo Design & Brand Identity |
| `https://goexecution.com/mobile-apps/` | Mobile App Design & Development Services \| Go Execution | Plan, design, and build user-friendly mobile applications with Go Execution's product strategy, UI/UX, development, and launch support for US businesses. | Mobile Apps |
| `https://goexecution.com/pricing/` | Digital Marketing & Web Design Pricing \| Go Execution | Review Go Execution pricing options for web design, SEO, branding, digital marketing, mobile apps, and video animation, then request a tailored quote. | Flexible Pricing Plans |
| `https://goexecution.com/privacy-policy/` | Website Privacy Policy \| Go Execution Digital Services | Learn how Go Execution collects, uses, protects, and manages personal information when you visit our website or contact us about digital services. | Privacy Policy |
| `https://goexecution.com/seo-services/` | SEO Services for Sustainable Growth \| Go Execution | Improve qualified organic visibility with technical SEO, on-page optimization, content strategy, and reporting tailored to your US business goals. | SEO Services |
| `https://goexecution.com/services/` | Digital Marketing & Web Design Services \| Go Execution | Explore Go Execution services for US businesses, including web design, SEO, digital marketing, branding, mobile app development, and video animation. | Our Services & Capabilities |
| `https://goexecution.com/terms-and-conditions/` | Terms and Conditions \| Go Execution Digital Services | Review the terms and conditions governing your use of the Go Execution website and engagement with our digital strategy, design, and marketing services. | Terms & Conditions |
| `https://goexecution.com/video-animation/` | Video Animation & Motion Design Services \| Go Execution | Explain ideas clearly and engage customers with custom video animation and motion design services from Go Execution for US businesses and brands. | Video Animation |
| `https://goexecution.com/website-design-development/` | Professional Web Design & Development \| Go Execution | Build a fast, responsive, conversion-focused website with Go Execution's web design and development services for growing US businesses and brands. | Website Design & Development |

### 2.3 Deliberately excluded or retired URLs

| URL/content type | Current/target handling | Migration requirement |
|---|---|---|
| `/category/seo-services/` | Thin duplicate archive; currently `noindex,follow` | Preferred final state: permanent redirect to `/blog/`. Do not index it or list it in the sitemap. |
| 137 legacy/thin portfolio placeholders | Not in sitemap; noindex | Do not recreate them. Map only URLs with genuine replacement content/backlinks; otherwise return true `404` or `410`. Never mass-redirect irrelevant URLs to the homepage. |
| Six legacy service redirects | Managed in WordPress/Rank Math | **BLOCKING:** export exact source/destination/status list and reproduce it in Next/CDN before cutover. Do not guess paths. |
| Default “Hello world!” and other WordPress sample URLs | Removed/404 | Return true `404` or `410`; never return `200`. |
| `/author/goe-seo-automation/` | Obsolete automation username | Redirect to a real editorial author page when created, otherwise to `/about/`. Do not preserve the automation username as an indexable entity. |
| WordPress attachment pages | Low-value duplicate pages | Do not recreate. Map valuable media URLs directly or return `404/410`. |
| WordPress feeds | Optional | If RSS is retained, serve a valid feed and declare it. Otherwise return `404/410`; do not redirect all feed URLs to home. |
| `/wp-admin/`, `/wp-login.php`, WordPress APIs | Platform-only | Must disappear from the public Next.js application; return `404/410` unless retained behind a private legacy origin. |

### 2.4 Current robots and sitemap state

Current WordPress `robots.txt`:

```text
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php

Sitemap: https://goexecution.com/sitemap_index.xml
```

The Rank Math sitemap rewrite issue was fixed by refreshing WordPress permalinks. Current state:

- `https://goexecution.com/sitemap_index.xml` returns `200` and valid XML.
- It references `post-sitemap.xml` and `page-sitemap.xml`.
- All 15 canonical URLs passed the final crawl regression.

Next.js may use `/sitemap.xml`, but the old `/sitemap_index.xml` URL must continue working through a permanent redirect to `/sitemap.xml` for at least 12 months. Update `robots.txt`, Google Search Console and Bing Webmaster Tools to `/sitemap.xml` after launch.

### 2.5 Brand and entity constants already configured in Rank Math

| Property | Exact value |
|---|---|
| WordPress Site Title | `Go Execution` |
| Tagline | `Digital Marketing & Web Design Agency in Dallas` |
| Website name | `Go Execution` |
| Alternate website name | `GoExecution` |
| Organization name | `Go Execution` |
| Organization description | `Go Execution is a Dallas-based digital agency providing web design, SEO, digital marketing, branding, mobile app development, and video animation for US businesses.` |
| Street address | `13345 N Central Expy Ste 203` |
| City | `Dallas` |
| State | `TX` |
| Postal code | `75243` |
| Country | `US` |
| Phone | `+1-737-316-6049` |
| Schema email | `justin@goexecution.com` |
| Logo | `https://goexecution.com/wp-content/uploads/2026/06/GO-EXECUTION-LOGO-EXPANDED-e1781903508375.png` |
| Logo dimensions | `1235 × 258` |
| Facebook | `https://www.facebook.com/GoExecution` |
| Instagram | `https://www.instagram.com/go_execution/` |

Stable JSON-LD identifiers to preserve:

```text
https://goexecution.com/#organization
https://goexecution.com/#website
https://goexecution.com/#place
https://goexecution.com/<page-path>/#webpage
https://goexecution.com/<page-path>/#breadcrumb
https://goexecution.com/<article-path>/#article
```

Do not add ratings, testimonials, client statistics, awards, accreditations, years of experience or LocalBusiness claims unless the facts are visible on the page and evidence has been approved.

### 2.6 Search engine and browser discovery already configured

- Rank Math Instant Indexing auto-submit was enabled for posts and pages.
- Existing public IndexNow key: `a25a68fb29c549e5b2be1bd86d2d16a0`.
- Existing key URL: `https://goexecution.com/a25a68fb29c549e5b2be1bd86d2d16a0.txt`.
- The key URL returns `200 text/plain` and must remain available after migration.
- All 15 canonical URLs were submitted directly to the IndexNow endpoint and accepted with `200`.
- Bingbot, Applebot and DuckDuckBot received the same `200` homepage HTML.
- Bing Webmaster Tools still needs account-side verification/import, sitemap submission and IndexNow monitoring.
- Firefox and Safari are browsers, not separate search indexes. Applebot supports Apple search experiences; it should remain allowed.

IndexNow notifies participating engines about changes but does not guarantee indexing. Follow the [IndexNow protocol](https://www.indexnow.org/documentation) and submit only added, updated or deleted canonical URLs.

### 2.7 Icons and brand assets already corrected

The WordPress Site Icon now emits working `32×32`, `192×192` and `180×180` PNG assets. Next.js must add real root files rather than depending on WordPress-generated paths:

Current WordPress-generated references to retain until the new icon set is live:

```text
https://goexecution.com/wp-content/uploads/2026/06/cropped-GO-EXECUTION-LOGO-EXPANDED-e1781903508375-32x32.png
https://goexecution.com/wp-content/uploads/2026/06/cropped-GO-EXECUTION-LOGO-EXPANDED-e1781903508375-192x192.png
https://goexecution.com/wp-content/uploads/2026/06/cropped-GO-EXECUTION-LOGO-EXPANDED-e1781903508375-180x180.png
```

The approved brand-logo alt text is `Go Execution — Where Strategy Meets Execution`.

```text
app/favicon.ico
app/icon.png
app/apple-icon.png
app/manifest.ts
public/icons/icon-192.png
public/icons/icon-512.png
```

Use a stable, square brand icon at least `48×48` for Google. Google may take days or weeks to refresh a favicon and does not guarantee display even when the markup is valid. See Google's [favicon requirements](https://developers.google.com/search/docs/appearance/favicon-in-search).

---

## 3. SEO changes already made in WordPress that must survive

### 3.1 Crawlability, canonicals and index control

- Fixed the Rank Math sitemap index from `404` to valid `200 XML`.
- Validated 15/15 production URLs as `200`, indexable and self-canonical.
- Removed thin/category/placeholder URLs from the indexable sitemap.
- Kept the SEO Services category archive noindex.
- Preserved one canonical non-`www` HTTPS hostname.
- Configured and validated IndexNow ownership/submission.
- Verified major crawler access.

### 3.2 Page metadata and headings

- All 15 titles are unique and no longer than 60 characters.
- All 15 descriptions are complete sentences between 120 and 160 characters.
- Every indexable page has one H1.
- The homepage title and H1 were made brand- and service-specific.
- The logo page H1 was corrected from `Graphic Designing` to `Logo Design & Brand Identity`.
- The SEO timeline article's duplicate desktop/mobile H1 was removed; the visual mobile copy is not a heading.

### 3.3 Homepage quality and trust

- Homepage H1: `Go Execution is your digital growth partner.`
- Placeholder portfolio text was replaced with: `Selected work across web design, branding, digital marketing, mobile apps, and motion.`
- Fake fallback testimonials were removed. Testimonials render only when genuine testimonial records exist.
- Placeholder portfolio auto-generation code (`ge_auto_create_placeholder_portfolios`) was removed.
- Unsupported performance/customer statistics must not be reintroduced without evidence.
- The Tawk chat widget was prevented from replacing the document title with notification text.

### 3.4 Internal linking improvements

Preserve these contextual in-content links. They must not exist only in the global header/footer.

| Source page | Related capability links |
|---|---|
| `/website-design-development/` | `/seo-services/`, `/digital-marketing/`, `/mobile-apps/` |
| `/logo-design/` | `/website-design-development/`, `/digital-marketing/`, `/video-animation/` |
| `/video-animation/` | `/digital-marketing/`, `/logo-design/`, `/website-design-development/` |
| `/seo-services/` | `/website-design-development/`, `/digital-marketing/`, `/how-long-does-seo-take-for-new-website/` |
| `/digital-marketing/` | `/seo-services/`, `/website-design-development/`, `/blog/` |
| `/mobile-apps/` | `/website-design-development/`, `/logo-design/`, `/digital-marketing/` |

Use descriptive anchors such as `technical SEO services`, `website design and development`, `digital marketing services` and the article title. Avoid `click here` and generic `learn more` when a descriptive phrase works.

### 3.5 Navigation and breadcrumbs

- `Services` and `Portfolio` dropdown parents should be accessible buttons that open menus; clicking them must not unexpectedly navigate to `/services/` or `/portfolio/`.
- Add `View all services` and `View all portfolio work` as explicit submenu links when those index pages exist.
- Breadcrumbs must be visible below the fixed header, not hidden behind it.
- The visible breadcrumb path and `BreadcrumbList` JSON-LD must agree.
- Use a single semantic navigation landmark and keyboard-operable menus with correct `aria-expanded`, focus and Escape behavior.

### 3.6 Published SEO timeline article

Preserve the current article at:

```text
https://goexecution.com/how-long-does-seo-take-for-new-website/
```

Required migration invariants:

- Keep its exact canonical URL, title, description and H1 from the metadata table.
- Keep the opening direct answer and its inline official Google citations.
- Keep month ranges described as Go Execution process/review checkpoints—not ranking, traffic or lead guarantees.
- Keep current LCP, INP and CLS terminology.
- Keep `Why SEO Takes Time`, follow-up questions, the checkpoint table, official citations and featured image.
- Keep publication date and genuine last-modified date. Do not change `dateModified` at every build.
- Keep descriptive internal links and remove any link to the noindex category archive.
- Keep valid semantic HTML with one H1.
- Keep the visible author box and Article schema.

Current author source of truth:

| Field | Value |
|---|---|
| Display name | `Go Execution Editorial Team` |
| Bio | `Go Execution’s editorial team reviews digital marketing and SEO content for clarity, source quality, and practical usefulness before publication.` |
| Author URL | Create a genuine editorial policy/team page; until then use `https://goexecution.com/about/` |

The WordPress publishing workflow required manual plagiarism/AI review before publishing. The Next.js CMS must keep a human approval gate; automated generation must not publish directly.

---

## 4. Recommended Next.js architecture

Use the App Router with Server Components for crawlable content and small Client Components only for interactive elements.

```text
app/
├── layout.tsx
├── page.tsx
├── not-found.tsx
├── robots.ts
├── sitemap.ts
├── manifest.ts
├── favicon.ico
├── icon.png
├── apple-icon.png
├── opengraph-image.png
├── (marketing)/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   ├── seo-services/page.tsx
│   └── ...all preserved routes
├── blog/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── api/
│   ├── health/route.ts
│   ├── revalidate/route.ts
│   └── indexnow/route.ts
components/
├── seo/JsonLd.tsx
├── seo/Breadcrumbs.tsx
├── seo/RelatedCapabilities.tsx
├── layout/Header.tsx
└── layout/Footer.tsx
lib/
├── seo/site.ts
├── seo/metadata.ts
├── seo/schema.ts
├── seo/indexnow.ts
├── content/posts.ts
└── content/pages.ts
public/
├── icons/
├── images/
└── a25a68fb29c549e5b2be1bd86d2d16a0.txt
next.config.ts
```

The sample uses a permanent `/sitemap_index.xml -> /sitemap.xml` redirect and a public IndexNow key file. Do not also create conflicting route handlers for those paths.

### Rendering policy

| Page type | Rendering | Reason |
|---|---|---|
| Core service/static pages | Static generation | Stable, fast, fully rendered HTML |
| Blog index | Static/ISR with explicit revalidation | Changes when articles publish |
| Published article | Static/ISR | Crawlable HTML plus controlled CMS updates |
| Draft preview | Dynamic + authenticated + `noindex` | Private human review |
| Contact submission | Server Action/API | Form processing; page content still server-rendered |
| Navigation/filter interactions | Client component island | Only interactive behavior is hydrated |

Do not make an entire page a Client Component merely to animate it. Metadata APIs only work in Server Components, and important content/links should be present in the initial HTML.

---

## 5. Exact Next.js configuration

### 5.1 `next.config.ts`

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'goexecution.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/category/seo-services/',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/sitemap_index.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },

      // BLOCKING: insert every exported Rank Math redirect here or at CDN level.
      // Never invent or omit the six known legacy service mappings.
    ]
  },
}

export default nextConfig
```

Host-level `http`/`www` canonicalization is best performed at the CDN/load balancer so it happens before Next.js. Test that each alternative reaches the final URL in one hop.

### 5.2 Central site constants

```ts
// lib/seo/site.ts
export const site = {
  url: 'https://goexecution.com',
  name: 'Go Execution',
  alternateName: 'GoExecution',
  locale: 'en_US',
  language: 'en',
  description:
    'Go Execution is a Dallas-based digital agency providing web design, SEO, digital marketing, branding, mobile app development, and video animation for US businesses.',
  phone: '+1-737-316-6049',
  email: 'justin@goexecution.com',
  address: {
    streetAddress: '13345 N Central Expy Ste 203',
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    postalCode: '75243',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.facebook.com/GoExecution',
    'https://www.instagram.com/go_execution/',
  ],
} as const
```

Maintain these values once, then reuse them in metadata, JSON-LD, footer and contact details. Do not let visible NAP information and schema diverge.

### 5.3 Root metadata

```tsx
// app/layout.tsx
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://goexecution.com'),
  title: {
    default: 'Digital Marketing & Web Design Agency | Go Execution',
    template: '%s | Go Execution',
  },
  description:
    'Go Execution helps US businesses grow with web design, SEO, digital marketing, branding, mobile apps, and video animation focused on measurable results.',
  applicationName: 'Go Execution',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Go Execution',
    title: 'Digital Marketing & Web Design Agency | Go Execution',
    description:
      'Go Execution helps US businesses grow with web design, SEO, digital marketing, branding, mobile apps, and video animation focused on measurable results.',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Go Execution' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing & Web Design Agency | Go Execution',
    description:
      'Go Execution helps US businesses grow with web design, SEO, digital marketing, branding, mobile apps, and video animation focused on measurable results.',
    images: ['/opengraph-image.png'],
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1c2c',
}
```

Important: pages whose exact live title already includes `| Go Execution` should export an absolute title or only the pre-brand portion—not accidentally create `... | Go Execution | Go Execution`.

Example static page:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'SEO Services for Sustainable Growth | Go Execution' },
  description:
    'Improve qualified organic visibility with technical SEO, on-page optimization, content strategy, and reporting tailored to your US business goals.',
  alternates: { canonical: '/seo-services/' },
  openGraph: { url: '/seo-services/' },
}
```

### 5.4 Dynamic article metadata

```tsx
// app/blog/[slug]/page.tsx or a route preserving root-level legacy article slugs
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cache } from 'react'

const getPost = cache(async (slug: string) => {
  return cms.posts.getPublishedBySlug(slug)
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const canonical = post.canonicalPath

  return {
    title: { absolute: post.seoTitle },
    description: post.metaDescription,
    alternates: { canonical },
    robots: post.status === 'published' ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      type: 'article',
      url: canonical,
      title: post.seoTitle,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.authorUrl],
      images: [{ url: post.featuredImage.url, alt: post.featuredImage.alt }],
    },
  }
}
```

If the CMS stores the published article at the current root-level path, implement that exact route. Do not automatically move it under `/blog/`; doing so creates unnecessary URL migration risk.

---

## 6. Structured data implementation

Use server-rendered JSON-LD. Escape `<` when serializing user/CMS content.

```tsx
// components/seo/JsonLd.tsx
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
```

### 6.1 Homepage graph

Render one graph containing `Organization`, `Place`, `WebSite` and `WebPage` with the stable IDs listed earlier.

```ts
export const homeGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://goexecution.com/#organization',
      name: 'Go Execution',
      alternateName: 'GoExecution',
      url: 'https://goexecution.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://goexecution.com/images/go-execution-logo.png',
        width: 1235,
        height: 258,
      },
      email: 'justin@goexecution.com',
      telephone: '+1-737-316-6049',
      sameAs: [
        'https://www.facebook.com/GoExecution',
        'https://www.instagram.com/go_execution/',
      ],
      location: { '@id': 'https://goexecution.com/#place' },
    },
    {
      '@type': 'Place',
      '@id': 'https://goexecution.com/#place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '13345 N Central Expy Ste 203',
        addressLocality: 'Dallas',
        addressRegion: 'TX',
        postalCode: '75243',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://goexecution.com/#website',
      url: 'https://goexecution.com/',
      name: 'Go Execution',
      alternateName: 'GoExecution',
      publisher: { '@id': 'https://goexecution.com/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://goexecution.com/#webpage',
      url: 'https://goexecution.com/',
      name: 'Digital Marketing & Web Design Agency | Go Execution',
      isPartOf: { '@id': 'https://goexecution.com/#website' },
      about: { '@id': 'https://goexecution.com/#organization' },
      inLanguage: 'en-US',
    },
  ],
}
```

Move the logo to the new asset path or preserve the old image URL. If it moves, add an exact image redirect and update all schema/OG references at launch.

### 6.2 Schema by page type

| Page type | Allowed graph |
|---|---|
| Homepage | `Organization`, `Place`, `WebSite`, `WebPage` |
| Standard page | `WebPage`, `BreadcrumbList`; reference global Organization/WebSite IDs |
| Service page | `Service`, `WebPage`, `BreadcrumbList`; only describe services visibly offered on the page |
| Blog index | `CollectionPage`, `BreadcrumbList` |
| Article | `Article`, `WebPage`, `BreadcrumbList`, author/publisher references |
| Contact | `ContactPage`, `BreadcrumbList` |
| About | `AboutPage`, `BreadcrumbList` |

Article schema must include truthful `headline`, `description`, `image`, `datePublished`, genuine `dateModified`, `mainEntityOfPage`, `author`, `publisher` and language. The visible author and schema author must match.

Do not add FAQ schema merely because an article has an FAQ section. FAQ rich results are restricted and markup must always reflect visible content; use it only if the current Google feature rules and page eligibility are verified at implementation time.

Validate every template with Google's Rich Results Test and Schema Markup Validator. Valid schema can improve understanding/eligibility but does not guarantee rich results or rankings.

---

## 7. Robots, sitemap and status-code implementation

### 7.1 Production `robots.ts`

WordPress-specific `/wp-admin/` rules are unnecessary after migration, but keeping the block temporarily is harmless. Prefer a clean production policy:

```ts
// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/preview/', '/drafts/'],
    },
    sitemap: 'https://goexecution.com/sitemap.xml',
    host: 'https://goexecution.com',
  }
}
```

Do not use `robots.txt` to protect confidential staging or drafts. Use authentication. A crawl-disallowed page can still be known/indexed by URL, while crawlers cannot see its `noindex` directive.

### 7.2 Staging/preview policy

Best option: protect the entire preview hostname with authentication or IP access control.

Additionally return:

```http
X-Robots-Tag: noindex, nofollow, noarchive
```

and metadata:

```ts
robots: { index: false, follow: false }
```

Do not put staging URLs in any sitemap, schema, OG URL, canonical or production internal link. Do not rely on a canonical pointing from staging to production as the only protection.

### 7.3 Canonical-only sitemap

```ts
// app/sitemap.ts
import type { MetadataRoute } from 'next'

const staticPages = [
  '/',
  '/about/',
  '/blog/',
  '/contact/',
  '/digital-marketing/',
  '/logo-design/',
  '/mobile-apps/',
  '/pricing/',
  '/privacy-policy/',
  '/seo-services/',
  '/services/',
  '/terms-and-conditions/',
  '/video-animation/',
  '/website-design-development/',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await cms.posts.listPublished()

  return [
    ...staticPages.map((path) => ({
      url: new URL(path, 'https://goexecution.com').toString(),
      lastModified: getRealLastModified(path),
      changeFrequency: 'monthly' as const,
    })),
    ...posts.map((post) => ({
      url: new URL(post.canonicalPath, 'https://goexecution.com').toString(),
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
    })),
  ]
}
```

Rules:

- Include only `200`, canonical, indexable, published URLs.
- Exclude redirects, `404/410`, noindex pages, drafts, previews, API routes, parameter URLs and staging URLs.
- Use real content modification dates. Never set every `lastmod` to build/deployment time.
- Use absolute HTTPS non-`www` URLs with trailing slashes.
- The current article makes the total 15; do not accidentally duplicate it if it is handled separately from CMS posts.

### 7.4 Old sitemap compatibility

Preferred: the permanent redirect in `next.config.ts`:

```text
/sitemap_index.xml -> 308 -> /sitemap.xml
```

Expected checks:

```text
GET /robots.txt         -> 200 text/plain; references /sitemap.xml
GET /sitemap.xml        -> 200 application/xml; 15 canonical URLs at launch
GET /sitemap_index.xml  -> 301/308; Location: /sitemap.xml
```

### 7.5 Correct status codes

| Situation | Response |
|---|---|
| Existing canonical page | `200` |
| Permanently moved equivalent | `301` or `308` to closest equivalent |
| Removed with no replacement | `410` preferred or true `404` |
| Unknown URL | true `404` using `notFound()` |
| Draft/preview | `200` only behind auth plus `noindex`; otherwise `404` |
| Temporary maintenance | `503` with `Retry-After`; never blanket `200` |

Never render a “not found” message with `200`, and never redirect every unknown URL to the homepage.

### 7.6 Additional technical SEO guardrails

- Do not add a `meta keywords` tag; Google does not use it for ranking.
- Do not add `hreflang` while the site has only one English-US version. If localized versions are added later, each language URL must be real, self-canonical and reciprocally annotated, including `x-default` where appropriate.
- Parameter/filter/search-result pages must not create unlimited indexable URL combinations. Keep canonical links clean and use `noindex` for internal search pages when they are publicly reachable.
- Paginated archives must have crawlable links and self-canonicals. Do not canonicalize every page in a series to page 1.
- Use Next.js `notFound()` for missing CMS records and `permanentRedirect()`/configuration redirects for known moves; do not redirect through `useEffect` or client-side router code.
- Keep canonical generation independent from request Host headers so a preview hostname cannot become canonical accidentally.
- Cache/revalidation must update HTML, metadata, schema and sitemap consistently. After CMS publish, revalidate both the article and every listing/internal-link page that changed.
- If multiple self-hosted Next.js instances use ISR, configure shared cache/invalidation or use a platform that provides it; otherwise instances can serve inconsistent titles/content.
- Keep HTTPS valid, renew certificates automatically and enable HSTS only after confirming every required subdomain supports HTTPS. Do not include `includeSubDomains` or preload without a separate infrastructure review.
- Preserve useful `ETag`/cache behavior, but never cache authenticated draft HTML into public responses.
- Do not cloak or serve special keyword-heavy HTML to bots. Googlebot, Bingbot, Applebot and users should receive equivalent primary content.
- An `llms.txt` file is optional and is not a replacement for crawlable HTML, robots, sitemap, schema or normal SEO.

---

## 8. Redirect migration register

### 8.1 **BLOCKING** pre-cutover export

Export from Rank Math:

- Active redirects
- Inactive redirects that may still be required
- Source URL
- Destination URL
- HTTP status
- Regex flag
- Hit count and last access if available

Also export crawl/GSC URLs with traffic, impressions or backlinks. Merge and deduplicate these into a version-controlled `redirects.csv`:

```csv
source,destination,status,reason,approved_by,tested
/category/seo-services/,/blog/,308,thin duplicate category archive,,false
```

The six known legacy service redirects must appear explicitly in this file before launch. This plan intentionally does not invent their source paths.

### 8.2 Redirect rules

1. One old URL maps to the closest genuinely equivalent new URL.
2. Preserve path/query only when meaningful.
3. Avoid chains and loops.
4. Permanent redirects stay live for at least 12 months; preferably indefinitely for linked URLs.
5. Don’t redirect removed portfolio placeholders to unrelated pages.
6. Test both uppercase/case variants discovered in logs and encoded URL forms.
7. Run the redirect list through automated integration tests on every deploy.

---

## 9. IndexNow and search-engine integrations

### 9.1 Preserve the key file

The simplest option is:

```text
public/a25a68fb29c549e5b2be1bd86d2d16a0.txt
```

Its exact UTF-8 content must be:

```text
a25a68fb29c549e5b2be1bd86d2d16a0
```

Verification:

```text
GET https://goexecution.com/a25a68fb29c549e5b2be1bd86d2d16a0.txt
-> 200 text/plain
-> body equals the key exactly
```

### 9.2 Server-only notifier

Trigger IndexNow after a successful publish, update, redirect/removal or deletion—not when saving drafts.

```ts
const INDEXNOW_KEY = 'a25a68fb29c549e5b2be1bd86d2d16a0'

export async function notifyIndexNow(urlList: string[]) {
  const canonicalUrls = [...new Set(urlList)].filter((url) =>
    url.startsWith('https://goexecution.com/')
  )

  if (!canonicalUrls.length) return

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'goexecution.com',
      key: INDEXNOW_KEY,
      keyLocation: `https://goexecution.com/${INDEXNOW_KEY}.txt`,
      urlList: canonicalUrls,
    }),
  })

  if (![200, 202].includes(response.status)) {
    throw new Error(`IndexNow failed with ${response.status}`)
  }
}
```

Keep this endpoint/server action protected. Do not expose an unauthenticated API that lets third parties submit arbitrary URLs. Queue failures and retry with backoff; do not spam duplicate submissions.

### 9.3 Search Console and Bing

Before launch, identify how current Search Console ownership is verified:

- DNS TXT: no application change required.
- HTML file: copy the exact verification file into `public/`.
- Meta tag: add the exact token through Next.js `verification.google`.
- Google Analytics/Tag Manager: preserve the relevant property/container.

No Google/Bing verification token was present in the publicly rendered homepage HTML during this audit, so no token should be guessed. Verification method/export is a **BLOCKING** account-side check.

After launch:

1. Confirm the existing `https://goexecution.com/` Search Console property remains verified.
2. Submit `https://goexecution.com/sitemap.xml`.
3. Inspect the homepage, each service template and the article with URL Inspection.
4. Request indexing only for the small set of high-value changed URLs; repeated requests do not force indexing.
5. Import/verify the site in Bing Webmaster Tools and submit the same sitemap.
6. Monitor IndexNow history and Bing crawl diagnostics.

---

## 10. Content, blog and editorial migration

### 10.1 Content model

Every page/article record should include:

```ts
type SeoFields = {
  seoTitle: string
  metaDescription: string
  canonicalPath: string
  robotsIndex: boolean
  robotsFollow: boolean
  ogTitle?: string
  ogDescription?: string
  ogImage: { url: string; alt: string; width: number; height: number }
}

type Article = {
  slug: string
  status: 'draft' | 'in_review' | 'approved' | 'published'
  title: string
  excerpt: string
  body: string
  authorName: string
  authorUrl: string
  publishedAt: string | null
  updatedAt: string
  featuredImage: { url: string; alt: string; width: number; height: number }
  seo: SeoFields
  citations: Array<{
    claim: string
    sourceTitle: string
    publisher: string
    url: string
    publishedOrUpdatedAt?: string
    accessedAt: string
  }>
}
```

### 10.2 Publishing safety

Required workflow:

```text
Draft -> editorial validation -> human review -> approved -> publish -> revalidate -> IndexNow
```

- AI-generated content never publishes automatically.
- Manual plagiarism/AI detection remains an external human review step unless a verified provider is deliberately integrated later.
- Content quality—not an AI-detector score—controls editorial approval.
- Preserve immutable versions/revisions and the approving user/time.
- Block publishing if title, description, canonical, author, featured image, schema-critical fields or citations are missing.
- Preview URLs require authentication and `noindex`.
- Publishing must atomically update the page, sitemap/ISR cache and IndexNow notification.

### 10.3 Quality gates

Apply the existing Editorial Readiness model rather than claiming a Google ranking score:

| Dimension | Weight |
|---|---:|
| Primary intent | 20 |
| Structure and metadata | 10 |
| Factual accuracy and freshness | 20 |
| Originality and E-E-A-T | 20 |
| AEO/GEO usefulness | 15 |
| Conversion and internal linking | 15 |

Publish-ready requires at least `85/100` and zero hard blockers. Hard blockers include unsupported numbers/timelines, deprecated terminology, ranking misinformation, placeholder links, fabricated experience/results, missing author/schema/metadata, malformed HTML and insufficient primary-intent coverage.

---

## 11. Images, video, fonts and Core Web Vitals

### 11.1 Media URL migration

Create an inventory of every live image/video/PDF URL before cutover. For each asset choose one:

1. Preserve the exact `/wp-content/uploads/...` URL on the new origin/CDN; or
2. Move it and add a one-to-one permanent redirect to the new URL.

Do not hotlink the retired WordPress origin after it is shut down. Update HTML, schema, OG cards and sitemap media references together.

### 11.2 Next Image rules

- Use `next/image` for content images.
- Supply actual `width`/`height` or a stable `fill` container to prevent CLS.
- Add `sizes` for responsive images.
- Preload/priority only the true above-the-fold LCP image.
- Keep below-fold images lazy.
- Generate AVIF/WebP, but keep crawlable image URLs and useful originals where appropriate.
- Informative images get concise descriptive alt text.
- Decorative images get `alt=""`; never keyword-stuff alt text.
- Article featured images retain their approved alt, caption and dimensions.
- Video embeds need a poster image, accessible title, lazy loading and visible transcript/summary when the video contributes information.

The WordPress homepage contained a very high image count and many lazy-load/noscript duplicates. The Next.js version must render each intended image once and avoid transferring Elementor's duplicate markup.

### 11.3 Fonts and third parties

- Use `next/font` once in the root layout; do not use render-blocking CSS `@import` for Google Fonts.
- Use `next/script` or `@next/third-parties` for analytics/chat/video scripts.
- Load Tawk/chat with `lazyOnload` unless business needs prove otherwise.
- Ensure Tawk cannot mutate `<title>`.
- Load GSAP, Three.js, Swiper and similar libraries only on routes/components that genuinely use them.
- Keep page copy, headings and links available without third-party JavaScript.

### 11.4 Measurable performance gates

Do not declare Core Web Vitals “passed” based only on Lighthouse lab scores. Launch gates:

| Metric | Target at 75th percentile |
|---|---:|
| LCP | ≤ 2.5 s |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |

Also target:

- TTFB appropriate for the chosen hosting/CDN and stable under crawler load.
- No horizontal overflow at `320px`.
- No layout shift from header, breadcrumbs, consent banner, chat or images.
- No hydration errors.
- No render-blocking third-party script that hides primary content.
- Performance monitoring via Search Console CWV plus RUM/Speed Insights or equivalent.

---

## 12. Page and component requirements

### Header

- Server-rendered logo link to `/`.
- Crawlable `<a>`/Next `<Link>` elements for destination pages.
- Services/Portfolio dropdown triggers use `<button>`, not fake links.
- Separate destination links appear inside each menu.
- Fixed header height is represented by layout padding/scroll margin.

### Breadcrumbs

- Visible directly below the fixed header.
- `nav aria-label="Breadcrumb"` and ordered list.
- Current page is text or `aria-current="page"`.
- JSON-LD matches the visible hierarchy.
- Never display a noindex category as the article's parent; use `/blog/`.

### Main content

- One `<main>` and one H1.
- Logical `H1 -> H2 -> H3` hierarchy.
- No important text placed only in canvas, animation, image or client-side modal.
- Tables use real table markup; lists use valid `ul/ol/li` nesting.
- External official citations are descriptive and open safely.

### Footer

- Consistent visible NAP/entity information.
- Links to core services, blog, privacy and terms.
- Social URLs exactly match the schema `sameAs` values.
- No sitewide links to noindex/placeholder pages.

---

## 13. Duplicate-site prevention

This is the highest-risk migration area.

### Before cutover

- Production DNS still serves WordPress.
- Next.js staging must be authenticated.
- If a temporary hostname must be public for crawler testing, add `noindex` via HTML and `X-Robots-Tag`; do not link to it publicly.
- Do not verify/submit the staging sitemap as a production sitemap.
- Do not put production canonicals on a public duplicate and assume that makes it safe.

### At cutover

- Point the existing `goexecution.com` DNS/CDN route to Next.js.
- Remove staging `noindex` only from the production build/hostname.
- Keep staging authentication/noindex intact.
- The old WordPress server must not remain reachable through an indexable temporary Hostinger hostname.
- If the old origin has a public hostname, block it with authentication or issue host-level permanent redirects to the corresponding `https://goexecution.com` URLs.
- Confirm canonical host and page canonicals before submitting any sitemap.

### After cutover

- Monitor old and new server logs during DNS propagation.
- Shut down WordPress only after old-origin traffic reaches zero and required files/media have been migrated.
- Keep a private backup; a backup must not be publicly crawlable.
- Search for indexed preview/temporary hostnames in Search Console and with `site:` checks; remove access and request removal only if leakage occurred.

### What not to do

- Do not operate WordPress and Next.js as two public sites containing the same content.
- Do not change domain, paths, copy, titles, navigation and design simultaneously.
- Do not set canonicals to staging or `www`.
- Do not serve different SEO content to crawlers and users.
- Do not use `Disallow: /` on production during/after launch.
- Do not leave a global `noindex` header from staging on production.

---

## 14. Migration schedule

### T-21 to T-14 days — inventory and freeze

- [ ] Export WordPress pages, posts, authors, media, publish/modified dates and slugs.
- [ ] Export Rank Math titles, descriptions, canonicals, robots, schema and redirects.
- [ ] Export Search Console performance, Page Indexing, sitemap and backlink/link data.
- [ ] Identify Search Console verification method and copy the required token/file.
- [ ] Export analytics/GTM IDs and consent settings.
- [ ] Crawl WordPress and save status, canonical, robots, H1, schema, inlinks and asset inventory.
- [ ] Lower DNS TTL to a few hours at least one week before cutover.
- [ ] Freeze new URL creation and uncontrolled page edits.

### T-14 to T-7 days — implementation

- [ ] Implement all 15 exact routes and metadata.
- [ ] Import approved content without rewriting it.
- [ ] Reproduce brand/entity/schema constants.
- [ ] Implement redirect register and automated tests.
- [ ] Implement robots, sitemap and old sitemap compatibility.
- [ ] Preserve IndexNow key and notifier.
- [ ] Add favicons, Apple icon, manifest and OG images.
- [ ] Migrate all used media and build one-to-one media redirects.
- [ ] Implement private draft/editorial workflow.

### T-7 to T-2 days — staging verification

- [ ] Staging authentication and `X-Robots-Tag: noindex` confirmed.
- [ ] Test desktop/mobile/responsive UI and accessible navigation.
- [ ] Crawl using production-host override or local host mapping—not a public duplicate.
- [ ] Compare every route against the baseline table.
- [ ] Validate JSON-LD and social cards.
- [ ] Test forms, email delivery, consent and analytics in test mode.
- [ ] Load-test the origin/CDN and confirm Googlebot is not blocked by WAF/rate limits.
- [ ] Run a complete backup and rollback rehearsal.

### T-1 day — final go/no-go

- [ ] No missing Rank Math redirect exports.
- [ ] No staging URL appears in built HTML, sitemap, canonical, schema or OG metadata.
- [ ] 15/15 required URLs pass all gates.
- [ ] `/category/seo-services/` redirects to `/blog/`.
- [ ] All retired URLs return the approved redirect/404/410 status.
- [ ] Sitemap contains exactly the approved canonical URLs.
- [ ] IndexNow key file returns the exact key.
- [ ] Verification files/tags are present.
- [ ] Production environment has no global noindex.
- [ ] Rollback owner and DNS procedure are documented.

### T0 — cutover

1. Deploy the approved immutable Next.js release.
2. Warm critical pages and image transformations.
3. Change CDN/origin/DNS routing for `goexecution.com`.
4. Verify DNS from multiple networks.
5. Run the production smoke suite immediately.
6. Confirm analytics and form conversions.
7. Submit the new sitemap in Search Console and Bing.
8. Inspect/request indexing for homepage, primary service page and article.
9. Send the changed canonical URLs through IndexNow.

### T+1 to T+7 days

- [ ] Check `5xx`, `404`, redirect and latency logs daily.
- [ ] Check Search Console Page Indexing, Crawl Stats, Enhancements and Manual Actions.
- [ ] Check Bing Webmaster and IndexNow history.
- [ ] Compare clicks/impressions by page/query to the pre-migration baseline.
- [ ] Verify favicon/site name recrawl; allow time for processing.
- [ ] Fix real errors, but do not keep changing metadata because rankings fluctuate temporarily.

### T+14, T+30, T+60 and T+90 days

- [ ] Re-crawl the site and compare URL/status/canonical/schema deltas.
- [ ] Review indexed vs submitted canonical counts.
- [ ] Review CWV field data after enough samples exist.
- [ ] Review branded query `Go Execution` and priority service queries without promising position 1.
- [ ] Keep redirects and old sitemap compatibility active.
- [ ] Retire old hosting only when logs confirm it is unused.

---

## 15. Automated validation matrix

Create a deployment test that fails the build/release when any required condition is false.

| Check | Expected |
|---|---|
| Required canonical URLs | Exactly the 15 approved launch URLs |
| Status | `200` for all canonical URLs |
| Redirects | One hop; approved `301/308`; no loops |
| Canonical | One absolute self-canonical per indexable URL |
| Robots meta/header | Index/follow on production canonicals; no conflicting header |
| H1 | Exactly one per indexable page |
| Title | Exact baseline at launch; unique; ≤60 characters |
| Description | Exact baseline at launch; unique; 120–160 characters |
| Sitemap | Only canonical indexable `200` URLs; genuine `lastmod` |
| `robots.txt` | `200`, production crawl allowed, correct sitemap |
| Old sitemap | `301/308` to `/sitemap.xml` |
| JSON-LD | Parses; IDs/URLs are production; visible facts match |
| Internal links | No links to staging, `www`, HTTP, redirects or noindex category |
| Images | `200`, dimensions supplied, meaningful/decorative alt policy |
| IndexNow key | `200 text/plain`; exact body |
| Errors | Unknown URL returns true `404`; retired URL matches register |
| Mobile | Header/breadcrumb/content not overlapping; no horizontal scroll |
| JS disabled/basic HTML | Primary content, H1 and links remain present |
| Security | Preview/staging authenticated and noindex |

Suggested commands:

```bash
npm run lint
npm run typecheck
npm test
npm run build

curl -I https://goexecution.com/
curl -I https://www.goexecution.com/about/
curl -I https://goexecution.com/about
curl -s https://goexecution.com/robots.txt
curl -s https://goexecution.com/sitemap.xml
curl -I https://goexecution.com/sitemap_index.xml
curl -s https://goexecution.com/a25a68fb29c549e5b2be1bd86d2d16a0.txt
```

Add Playwright tests for:

- unique H1/title/canonical on all 15 pages;
- accessible dropdown behavior;
- breadcrumb header offset;
- 404 status;
- sitemap membership;
- no staging hostname in DOM/head;
- article author/metadata/schema;
- one-hop legacy redirects;
- viewport screenshots at 320, 375, 768, 1024 and 1440 pixels.

---

## 16. Rollback plan

Rollback is for severe availability/data faults, not ordinary ranking volatility.

### Rollback triggers

- Sustained `5xx`/unreachable production.
- Global `noindex`, wrong canonical host or blocked Googlebot.
- Missing core routes/redirects.
- Broken forms that cause material lead loss.
- CMS/content corruption.

### Rollback procedure

1. Restore the last known-good CDN/origin route or DNS target.
2. Keep the same public domain and URL paths.
3. Confirm WordPress still has valid sitemap/canonicals and no maintenance/noindex flag.
4. Purge CDN caches.
5. Re-run the 15-URL smoke suite.
6. Record the incident and fix Next.js in staging.

Do not delete Next.js data or redirect users to a different temporary domain during rollback. Keep content/redirect backups and a tested database restore path.

---

## 17. Launch approval / definition of done

The migration is complete only when:

- [ ] All 15 baseline URLs are `200`, self-canonical, indexable and contain one H1.
- [ ] Titles/descriptions match the approved baseline unless a change has signed approval.
- [ ] All Rank Math redirects are exported, implemented and tested.
- [ ] Thin/default/placeholder URLs are not recreated or included in the sitemap.
- [ ] WordPress, staging and preview copies cannot become duplicate public sites.
- [ ] Production robots and sitemap are valid.
- [ ] Old sitemap path permanently redirects and IndexNow key is preserved.
- [ ] Brand Organization/Website/Place data and author Article schema are accurate.
- [ ] Internal capability links, visible breadcrumbs and accessible dropdowns are preserved.
- [ ] Media, icons and OG images return `200` from stable URLs.
- [ ] Search Console verification survives and Bing setup is completed.
- [ ] Human approval is required before article publication.
- [ ] Core forms, analytics and consent behavior work.
- [ ] Error/status-code, structured-data, responsive and performance tests pass.
- [ ] Monitoring and rollback owners are assigned.

Expected migration outcome: Google continues to evaluate the same `goexecution.com` URLs and content on a new rendering/hosting platform. No implementation can guarantee indexing speed or top rankings; the goal is to preserve existing signals, remove technical ambiguity and provide a stronger crawlable site.

---

## 18. Remaining SEO work after migration

The latest estimate was approximately `83/100` overall SEO readiness and `89/100` on-site readiness. These are internal readiness estimates—not Google scores.

Areas that still require ongoing work:

1. Build topical authority with genuinely useful, reviewed articles; the site currently has only one approved SEO article.
2. Earn legitimate citations/backlinks and strengthen local/entity signals without buying spam links.
3. Complete/optimize Google Business Profile and consistent business listings where appropriate.
4. Measure and improve field Core Web Vitals after Next.js launch.
5. Monitor the previously reported non-indexed URLs by reason; many legacy/thin URLs should remain excluded rather than be forced into the index.
6. Continue Search Console/Bing issue-based remediation; sitemap or URL submission does not guarantee selection for indexing.
7. Expand genuine case studies/portfolio content only when real evidence, assets and client approval exist.

---

## 19. Official implementation references

### Google Search Central

- [Changing your hosting without URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes)
- [Site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Canonical and duplicate URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Robots meta and X-Robots-Tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [Ask Google to recrawl URLs](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [Structured data introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [General structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Favicon requirements](https://developers.google.com/search/docs/appearance/favicon-in-search)
- [Google Images SEO](https://developers.google.com/search/docs/appearance/google-images)

### Next.js

- [Metadata and Open Graph images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Metadata file conventions](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
- [Trailing slash configuration](https://nextjs.org/docs/app/api-reference/config/next-config-js/trailingSlash)
- [App Router documentation](https://nextjs.org/docs/app)

### Bing, IndexNow and Apple

- [IndexNow protocol](https://www.indexnow.org/documentation)
- [Bing URL submission and IndexNow guidance](https://www4.bing.com/webmasters/help/url-submission-62f2860b)
- [Bing sitemap guidance](https://www4.bing.com/webmasters/help/sitemaps-3b5cf6ed)
- [Applebot documentation](https://support.apple.com/en-ie/119829)

---

## 20. Handoff instructions for the Next.js project

Give this file to the developer/agent working on the Next.js project and use this exact opening instruction:

```text
Implement GOEXECUTION_WORDPRESS_TO_NEXTJS_SEO_MIGRATION_PLAN.md as the SEO source of truth.
First audit the current Next.js project against every BLOCKING item and the 15-URL baseline.
Do not change production DNS, publish content, remove WordPress, or alter canonical URLs until the
pre-cutover test matrix passes and a human approves the cutover. Do not invent missing Rank Math
redirects; request/export the real redirect inventory. Preserve the non-www HTTPS hostname,
trailing slashes, current metadata, article URL/content, schema entity data, IndexNow key and
human publishing approval workflow. Produce a pass/fail report with evidence before launch.
```
