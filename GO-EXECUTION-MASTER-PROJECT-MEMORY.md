# Go Execution — Master Project Memory & Continuation Handoff

**Last updated:** 19 August 2026  
**Project:** Go Execution WordPress-to-Next.js rebuild  
**Live website:** https://goexecution.com  
**Current workspace:** `D:\goexecution\go-execution-v2`  
**Purpose:** This is the complete working memory for the project from the initial WordPress conversion through the latest design, application, email, performance, blogging, and SEO work. Give this file to a new Codex chat so the project can continue without repeating discovery.

---

## 1. Owner's Core Requirement

The project began with a request to convert the complete Go Execution WordPress website into a modern Next.js application while preserving:

- All designs and responsive layouts
- All live content
- All portfolio content and media
- Existing visual effects, hover interactions, cursor behavior, and animations
- Useful CSS and JavaScript behavior
- Search visibility and WordPress URL equity

The project subsequently became a full redesign and modernization. The owner prefers bold, premium, animated presentation rather than generic cards or static agency templates.

### Original source locations

- WordPress theme source: `D:\goexecution\MAK-solutions\FINAL-Go-Execution-WordPress-Developer-Package\GO-EXECUTION-WORDPRESS-THEME-INSTALL\go-execution`
- Mobile design source supplied later: `C:\Users\Raheel\Downloads\goexecution-mobile-source-v6.zip`

### Current source of truth

- `D:\goexecution\go-execution-v2`
- Git branch currently observed: `main`
- Remote-tracking branch: `origin/main`
- Framework: Next.js 16.3.0 App Router, React, TypeScript

Before modifying Next.js code, read the relevant version-specific documentation inside `node_modules/next/dist/docs/` as required by the repository `AGENTS.md`.

---

## 2. Current Technology Stack

- Next.js 16.3.0 App Router
- React and React DOM
- TypeScript
- Next/Image and `next/font`
- Poppins via `next/font/google`
- Lucide and React Icons
- Nodemailer for SMTP delivery
- Resend HTTP API as email fallback
- Vercel Analytics
- Vercel Speed Insights
- Vercel AI SDK/Gateway for the website chatbot
- ESLint 9 with Next.js configuration
- Puppeteer currently present in local development dependencies for mobile/performance scanning

### Main commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

## 3. Repository Architecture

### Application routes

- `/` — homepage
- `/about/`
- `/services/`
- `/services/[category]/`
- `/services/[category]/[slug]/`
- `/industries/`
- `/industries/[slug]/`
- `/portfolio/`
- `/pricing/`
- `/blog/`
- `/blog/[slug]/`
- `/category/[slug]/`
- `/contact/`
- `/web-questionnaire/`
- `/logo-questionnaire/`
- `/privacy-policy/`
- `/terms-and-conditions/`
- `/api/contact`
- `/api/chat`
- `/robots.txt`
- `/sitemap.xml`
- Web manifest, favicon, Apple icon, and dynamic Open Graph image

### Important data/content files

- `lib/wp-content.json` — migrated WordPress services, portfolio, pricing, testimonials, and other source content
- `lib/services.ts` — modern service-category and sub-service content
- `lib/industries.ts` — industry landing-page content
- `lib/blog-posts.ts` — all Next.js blog content and article SEO data
- `lib/chatbot-answers.ts` — deterministic chatbot knowledge/fallbacks
- `lib/contact-request-email.ts` — branded HTML and text email template
- `lib/seo/site.ts` — centralized organization/contact data
- `lib/seo/jsonld.tsx` — reusable structured-data builders

### Global layout/components

- `app/layout.tsx` — font, metadata, analytics, header, footer, loader, floating CTAs, chatbot, cursor, and site effects
- `app/globals.css` — global visual system and responsive rules
- `components/site-shell.tsx` — glass header, navigation/dropdowns, footer, and newsletter UI
- `components/homepage.tsx` — homepage composition and content
- `components/page-hero.tsx` — reusable internal-page hero and CTA
- `components/mobile-hero-story.tsx` — mobile/tablet hero scroll animation
- `components/desktop-hero-background.tsx` — desktop pointer-driven parallax background
- `components/site-effects.tsx` — reveal effects, cursor, route-aware behavior, and interactive treatments

---

## 4. WordPress Migration Work Completed

- The WordPress theme was converted into a native Next.js App Router application.
- PHP templates, jQuery/AJAX-style behaviors, and theme scripts were replaced with React components and route handlers where applicable.
- WordPress content was captured into local structured data, especially `lib/wp-content.json`.
- Uploaded WordPress media was preserved under `public/uploads/2026/`.
- Portfolio assets were also organized under `public/assets/images/portfolio/`.
- Shared behavior was moved into reusable React components.
- Global CSS was consolidated into `app/globals.css`.
- Next.js navigation and component lifecycle behavior replaced old page-load-only scripts, addressing content/effect failures after client-side navigation.
- Old WordPress URLs, service slugs, blog URLs, sitemap filenames, Elementor junk URLs, and `www` variants received permanent redirect coverage in `next.config.ts`.

### Important limitation

`app/globals.css` is currently approximately **12,214 lines**. It works as the consolidated stylesheet, but it has accumulated many redesign layers and overrides. Future cleanup should be cautious and visual-regression tested rather than performed as a blind rewrite.

---

## 5. Header and Navigation Decisions

The current header direction was established from owner-supplied references:

- Premium glassmorphism/frosted treatment
- Centered container rather than full browser width
- Approximately three-quarters/max-width presentation on desktop
- Rounded capsule shape
- Logo on the left, navigation centered, consultation CTA on the right
- Responsive mobile navigation
- Proper chevron SVG icons rather than text characters

### Dropdown behavior

- Portfolio and Services are dropdown triggers.
- Desktop interaction is designed to support hover/focus.
- Clicking the trigger should expose the dropdown rather than unexpectedly navigating away.
- Dropdown links provide access to portfolio/service destinations.
- Mobile menu behavior is separate and uses expandable navigation.

---

## 6. Hero System

### Desktop homepage hero

- Large central content panel with strong Go Execution typography and CTAs
- Restored movable background imagery inspired by the original WordPress interaction and `outrbuzz.com`
- Pointer-driven high-sensitivity parallax on fine-pointer desktop devices
- Current maximum movement in `desktop-hero-background.tsx` is approximately:
  - X axis: `-1800px`
  - Y axis: `-1300px`
- Movement is smoothed with requestAnimationFrame interpolation.
- Motion is disabled for reduced-motion users and unsuitable devices.
- Text is layered above the visual background so it does not feel buried behind the artwork.

### Mobile/tablet hero

- The supplied mobile source ZIP was used as design direction for the homepage mobile hero.
- A dedicated `MobileHeroStory` component provides the mobile/tablet scroll animation.
- The same mobile-only story behavior was extended to internal-page hero sections.
- Desktop hover/parallax behavior and mobile scroll behavior intentionally remain separate.
- Mobile performance work prevents the loader/background effects from blocking primary hero content.

### Reusable inner-page hero

- `PageHero` is used across portfolio and other internal routes.
- Page-aware calls to action and mobile story variants are supported.

---

## 7. Homepage Sections and Redesign History

### Services section

The services presentation went through several iterations and is now a real React-driven 3D carousel:

- Automatic rotation every 3.2 seconds
- Perspective/coverflow card arrangement
- Hovering a rear card makes it active and brings it forward
- Hover pauses autoplay and lifts/emphasizes the selected card
- Focus interactions are supported for keyboard users
- Dot controls allow direct selection
- Reduced-motion preference disables autoplay
- Overflow rules were corrected so elevated/rear cards are not clipped
- All cards use controlled sizing and image treatment

### Growth/featured section

- The earlier plain split layout and 2×2 card layout were replaced with a more animated presentation.
- Image dimensions were normalized so source aspect ratios do not create inconsistent card heights.
- Desktop and mobile layouts use separate responsive treatments.
- Feature cards and columns use movement/reveal effects rather than static blocks.

### Why Choose Go Execution

- The original four generic numbered boxes were redesigned into a more premium section.
- Decorative grid/orbit/brand elements were added while maintaining readable content.

### Testimonials

- The wide multi-card wall was replaced with `TestimonialShowcase`.
- One testimonial is highlighted at a time.
- Auto-advances every 3.5 seconds.
- Previous/next arrow controls are present.
- Includes client identity, outcome metric, “Verified client” treatment, timer animation, grid, and orbit elements.
- Reduced-motion preference is respected.

### CTA and footer transition

- Duplicate CTAs were removed; the older “Ready to Grow Your Revenue?” CTA was removed when two CTAs appeared together.
- The retained premium CTA is the dark “Let’s execute it.” section.
- Background grid, rings/orbits, glow, gold markers, and arrow treatment were added.

---

## 8. Portfolio System

- Portfolio content is read from `lib/wp-content.json`.
- The portfolio was aligned with the projects/categories present on the live Go Execution WordPress site at the time of migration.
- Category priority was changed so web development appears first, followed by logo/branding and the remaining categories.
- Current principal filters include:
  - Website Design & Development
  - Graphic Designing
  - Digital Marketing
  - Mobile Apps
  - Video Animation
- Filter state can be initialized from the portfolio URL query parameter.
- Catalogue content is lazily imported/cached in the interactive grid.
- A styled Load More Projects interaction replaced the browser-default button.
- Cards received stable media dimensions and Next/Image responsive sizing.
- Meaningful fallback alt text exists for named projects.

### Video portfolio behavior

- Video files are detected by extension.
- Videos use `preload="auto"`, `muted`, `loop`, and `playsInline`.
- They play silently on hover/focus.
- They pause and reset on mouse leave/blur.

### Portfolio caveat

Some portfolio entries may be visual/mockup work rather than independently verifiable case studies. Do not invent business outcomes or client authorization. Confirm which work can be publicly described before adding detailed case-study claims.

---

## 9. Footer

The footer was redesigned from the owner-supplied reference and now includes:

- Dark Go Execution brand treatment
- Light logo and agency description
- Navigation and service links
- Contact/address area
- Newsletter signup UI
- Legal links
- Premium CTA panel above the information footer

### Newsletter status

The newsletter form is currently **front-end UI only**. Its success copy says it is ready to connect to an email platform. It is not yet connected to Mailchimp, Brevo, HubSpot, Resend Audience, or another list provider.

---

## 10. Contact Page and Lead Capture

### Contact page

- Contact details panel
- Styled consultation form
- Google Maps embed for the Dallas address
- Open in Google Maps link/overlay
- Responsive map and form design

### Contact form flow

- The browser posts JSON to `/api/contact`.
- Server-side validation checks name, valid email, phone, service, message, payload size, and honeypot.
- The primary delivery method is SMTP through Nodemailer.
- Resend is implemented as a fallback when SMTP credentials are unavailable.
- Reply-To is set to the visitor's email.
- Success/error states are shown accessibly in the form.
- The default recipient in current code is `justin@goexecution.com`.

### Branded email template

`lib/contact-request-email.ts` contains the custom Go Execution HTML email requested by the owner:

- Navy branded header
- Go Execution logo
- Gold divider/accent
- “New Contact Form Submission” heading
- Structured name, email, phone, service, and message details
- Branded footer
- Text-only fallback

Web3Forms was tested earlier, but the current application uses the internal Next.js API route with SMTP/Resend so the email layout can be controlled.

### Required environment variables

Do not place secret values in documentation or Git. Configure these in the host:

```text
CONTACT_RECIPIENT_EMAIL
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASS
HOSTINGER_SMTP_PASS       # optional alias/fallback
GMAIL_APP_PASSWORD       # optional alternate SMTP path
RESEND_API_KEY            # optional fallback
RESEND_FROM_EMAIL         # verified Resend sender/domain
```

### Email/DNS decision

- Hostinger MX records should remain in place so the Hostinger mailbox continues receiving email.
- Adding Resend SPF/DKIM/sending-domain records does not require replacing Hostinger MX records.
- `justin@goexecution.com` was chosen as the lead recipient.

### Security warning

The owner pasted a Resend API key and Web3Forms access key into an earlier chat. Those values must be considered exposed. Rotate/revoke them before production use. This memory intentionally does not repeat either secret.

---

## 11. Project Questionnaires

Two dedicated multi-step questionnaires exist:

- `/web-questionnaire/`
- `/logo-questionnaire/`

### Website questionnaire

- Four-step project brief
- Contact/company information
- Goals and style
- Existing assets and inspiration links
- Features, notes, and launch timing
- Client-side validation and progress controls
- Formatted summary submitted to `/api/contact`
- Service label: `Website Project Brief`

### Logo questionnaire

- Four-step brand brief
- Logo name, tagline, business, and audience
- Style and color preferences
- Symbols, inspiration, and usage
- Brand communication and notes
- Formatted summary submitted to `/api/contact`
- Service label: `Logo Design Brief`

### Routing decision

Questionnaire CTA buttons should open their dedicated questionnaire routes, not send users to the generic contact page. Website-related services use the web questionnaire; logo/branding services use the logo questionnaire.

### Current submission dependency

Both questionnaires depend on `/api/contact`, so the SMTP/recipient configuration must work for questionnaire delivery as well as the normal contact form.

---

## 12. Chatbot and Floating Conversion Tools

- Floating WhatsApp control
- Floating consultation CTA
- Website chatbot/quick-answer widget
- Chatbot answers common Go Execution/service questions
- On supported Vercel environments it can call the AI Gateway model
- Without gateway access it returns deterministic answers from `lib/chatbot-answers.ts`
- Visitor chatbot messages can notify Justin through SMTP or Resend
- Chatbot email failures do not block the visitor from receiving an answer

Additional optional environment variables:

```text
CHATBOT_NOTIFICATION_EMAIL
AI_GATEWAY_API_KEY
```

Vercel deployments may provide gateway authentication through platform identity.

---

## 13. Loader, Cursor, and Interaction System

### Executing loader

- The requested “Executing” loading animation was restored.
- It temporarily locks root scrolling, then removes itself.
- Mobile performance adjustments prevent it from harming primary content/LCP as heavily as the original version.

### Custom cursor

- Custom cursor rendering and interactive-state detection are managed by `SiteEffects`.
- Links, buttons, form controls, cards, FAQs, price cards, service cards, and other interactive elements are included.
- Native/reduced-motion/touch behavior is protected.

### Route-navigation issue

Earlier, content/effects sometimes failed after Next.js client navigation until the page was refreshed. Site effects and navigation-sensitive logic were revised to respond to route changes rather than only the initial document load.

---

## 14. Responsive Design Rules Established

- Desktop hover/pointer animation should not be forced onto touch devices.
- Homepage and internal-page heroes have dedicated mobile/tablet scroll animation.
- Services carousel has desktop 3D coverflow and responsive mobile handling.
- Cards use fixed, predictable aspect ratios instead of inheriting arbitrary source dimensions.
- Elevated carousel cards must not be clipped.
- Mobile navigation uses expandable dropdown sections.
- Motion respects `prefers-reduced-motion`.
- Important content must remain readable above decorative elements.

---

## 15. Performance Work

The project was audited and modernized to reduce client-side and image cost.

### Completed changes

- Deferred non-critical analytics until interaction/timeout
- Added Vercel Speed Insights and Analytics
- Removed unnecessary hero preloads
- Corrected responsive image sizing
- Reduced image quality where acceptable
- Enabled AVIF/WebP output through Next.js
- Deduplicated and resized app/manifest icons
- Lazy-loaded non-critical media
- Prevented mobile loader from blocking LCP
- Used static/server rendering for core content wherever possible

### Recorded local production Lighthouse comparison

| Mobile metric | Before | After |
|---|---:|---:|
| Performance score | 66 | 82 |
| FCP | 2.0 s | 1.5 s |
| LCP | 4.8 s | 3.5 s |
| TBT | 440 ms | 320 ms |
| CLS | 0 | 0 |
| Speed Index | 5.5 s | 3.9 s |
| Transfer size | 791 KB | 495 KB |
| JavaScript transfer | 360 KB | 174 KB |
| LCP render delay | 2354 ms | 994 ms |

These are local lab results, not current Google field data.

### Current performance risk

Several newly added generated/service/blog JPG assets are approximately 600 KB–1.2 MB each. Next/Image can transform them when used correctly, but the original files should still be compressed and audited. Re-run live mobile PageSpeed and Search Console Core Web Vitals after every deployment affecting hero or article media.

---

## 16. SEO Foundation

Detailed SEO documentation also exists at:

- `GO-EXECUTION-SEO-HANDOFF-2026-08-19.md`
- `backlink-plan.md`
- Original supplied handoff: `C:\Users\Raheel\Downloads\go-execution-seo-blogging-handoff.md`

### Implemented technical SEO

- Central metadata base and site defaults
- Unique route metadata and canonical URLs
- Open Graph and Twitter metadata
- Google Search Console verification
- Dynamic sitemap
- Robots rules
- AI crawler access
- `llms.txt`
- Organization, Place, WebSite, WebPage, Service, Article, ContactPage, AboutPage, CollectionPage, BreadcrumbList, and FAQPage schema builders
- FAQ schema on blog, service-detail, and industry pages where FAQs are rendered
- WordPress migration redirects
- Non-www canonicalization
- Static generation for blog, service, and industry routes
- Contextual internal linking

### Current local SEO route inventory

- 10 primary/static sitemap pages
- 6 service-category pages
- 24 sub-service pages
- 7 industry pages
- 17 blog articles
- Blog category pages generated from article categories

The local sitemap should therefore be larger than the previously live 56-URL sitemap after deployment. The live sitemap was last directly verified at **56 URLs before the latest ten articles were added**. Recheck the deployed sitemap rather than assuming deployment occurred.

---

## 17. Blog and Content Work

### Original seven Next.js articles

1. Why Is My Website Not Ranking on Google? A Complete Diagnostic Guide
2. How Long Does SEO Take for a New Website? A Realistic Timeline
3. Custom Web Development vs. Website Builders: Which Suits Your Business?
4. How Much Does Custom Web Development Cost? 2026 Pricing Breakdown
5. WordPress vs Next.js for Business Websites
6. What Is Technical SEO? A Complete Guide for US Businesses
7. How to Redesign a Website Without Losing SEO Rankings

### Ten additional predictive/GEO articles added on 19 August 2026

8. Why Next.js is Replacing Headless Shopify for Enterprise E-commerce
9. Enterprise SEO vs. Traditional SEO: What Large Scale Brands Need to Know
10. Local SEO for Franchises: Scaling Multi-Location Visibility
11. The Financial Cost of Poor Core Web Vitals and INP
12. B2B SaaS SEO Strategy: Building a Product-Led Moat
13. Top Enterprise Web Development Agencies (According to Reddit)
14. Why Reddit Developers Hate Headless Shopify (And The Next.js Alternative)
15. Best B2B SEO Agencies for 2026: Summarizing Reddit Reviews
16. 7 Best Enterprise SEO Agencies in the US (2026 Comparison)
17. 5 Top Next.js Development Agencies for Enterprise E-Commerce

### Latest content improvements

- Predictive content-gap topics
- Direct-answer sections
- Table/listicle formatting for search and AI citation readability
- E-E-A-T fields and author/reviewer signals
- Article FAQ data and matching FAQPage schema
- Expanded internal linking
- Article-specific supporting graphics
- Related-article layout and mobile readability fixes

### Editorial caution

Comparison, “best agency,” Reddit-consensus, pricing, and performance claims must be fact-checked and backed by primary or clearly attributed sources. Do not present synthetic consensus, unverifiable rankings, or invented statistics as fact. Update time-sensitive 2026 comparisons when market data changes.

---

## 18. Google Search Console Snapshot

Search Console exports were added to the repository and analyzed for:

- **Search type:** Web
- **Selected period:** Last 3 months
- **Actual chart range in export:** 15 July 2026 to 16 August 2026
- **Total clicks:** 10
- **Total impressions:** 143

### Leading page data in the export

| Page | Clicks | Impressions | CTR | Avg. position |
|---|---:|---:|---:|---:|
| Homepage | 9 | 48 | 18.75% | 5.54 |
| About | 1 | 17 | 5.88% | 8.29 |
| Old website-design-development URL | 1 | 7 | 14.29% | 16.29 |
| Old digital-marketing URL | 0 | 48 | 0% | 80.23 |
| Old SEO timeline URL | 0 | 31 | 0% | 68.29 |
| Contact | 0 | 15 | 0% | 61.13 |
| Portfolio | 0 | 10 | 0% | 14.80 |

Clicks in individual tables can differ from chart totals because of Google privacy/anonymization and table filtering.

### Leading query signals

- `marketing execution services` — 42 impressions
- `how many hours should i estimate for site migration seo` — 5 impressions
- `seo process for new website` — 5 impressions
- `cost of custom web development 2026` — 3 impressions
- `go execution` — 2 impressions
- `custom web development pricing` — 2 impressions

### Device split

- Desktop: 8 clicks, 131 impressions, 6.11% CTR, average position 57.16
- Mobile: 2 clicks, 12 impressions, 16.67% CTR, average position 24.83

### Country signals

- United States: 6 clicks, 93 impressions
- Pakistan: 3 clicks, 18 impressions
- Saudi Arabia: 1 click, 1 impression

### Interpretation already used

- Homepage/brand visibility exists.
- Google is still showing legacy WordPress URLs in performance data; redirects must remain in place while signals consolidate.
- Early impressions validate site-migration SEO, new-site SEO, custom-development cost, and marketing-execution themes.
- Commercial non-brand visibility remains very early and weak.
- The US is the main target and already the largest impression source.
- More data is needed before aggressive pruning or cannibalization decisions.

### Export files

- `gsc-queries.csv`
- `gsc-Pages.csv`
- `gsc-Countries.csv`
- `gsc-Devices.csv`
- `gsc-Chart.csv`
- `gsc-Search appearance.csv`
- `gsc-Filters.csv`
- `goexecution.com_-Performance-on-Search-2026-08-19.xlsx`

---

## 19. Backlink and Authority Work

`backlink-plan.md` contains the full execution plan.

### Preliminary conclusion

- Public backlink visibility appeared very weak.
- The preliminary public checker baseline must be cross-checked with authenticated Ahrefs exports.
- Exact Ahrefs authority/referring-domain figures were not stored as an authenticated export at the time of this memory.

### Planned authority program

- Normalize entity/NAP profiles
- Google Business Profile work only if the business is eligible and details are accurate
- Legitimate Dallas and industry citations
- Client and partner editorial links
- WordPress-to-Next.js/PageSpeed case study
- Dallas SMB website performance benchmark
- Downloadable website-ranking diagnostic checklist
- Targeted, relevant publication/resource outreach
- Reject PBNs, bulk directory spam, paid link packages, and exact-match anchor manipulation

The earlier planning target was 12–20 legitimate referring domains over roughly 90 days. This is an outreach target, not a ranking guarantee.

---

## 20. Known Data and Configuration Conflicts

### Urgent NAP/contact inconsistency

Current code contains conflicting public data:

- `lib/seo/site.ts` phone: `+1-737-316-6049`
- Contact-page phone: `+1 (587) 200-4832`
- Visible email text: `info@goexecution.com`
- Email link target: `justin@goexecution.com`
- Default form recipient: `justin@goexecution.com`
- Dallas address: `13345 N Central Expy, Suite/Ste 203, Dallas, TX 75243`

The owner must confirm the canonical public phone and whether public email text should be `info@` or `justin@`. Then update site UI, schema, map/citations, Google Business Profile, directories, and social profiles consistently.

### Live/local sitemap difference

- Last live verification before the ten new articles: 56 URLs
- Current local blog inventory: 17 articles
- Rebuild, deploy, and verify live sitemap count and new article status codes.

### Newsletter

- Styled but not connected to a list provider.

### Contact delivery

- Code has SMTP defaults and Resend fallback.
- Production still depends on correctly configured host environment variables and a valid mailbox/password.
- A prior error said “No recipients defined”; recipient normalization/fallback code was subsequently added, but production delivery should be tested again.

### Questionnaires

- They submit through the same `/api/contact` route and therefore share its delivery configuration.

---

## 21. Current Working-Tree State

At the time this memory was prepared, unrelated/in-progress local changes existed and must be preserved:

```text
M next-env.d.ts
M package-lock.json
M package.json
?? mobile-scan.js
```

The package changes add Puppeteer for local/mobile scanning. Do not discard or overwrite these files without first reviewing why they are present.

This master memory file is also new until committed.

---

## 22. Git Milestones

Major observed commits, in chronological intent:

- Initial WordPress clone
- Testimonial update
- Initial blog/basic SEO work
- Image/address updates
- Large design/application updates
- Sitemap and analytics updates
- Homepage SEO-intent rewrite
- Email configuration and SPF/DKIM work
- New service/industry pages
- AI crawler and `llms.txt` setup
- Blog 1 diagnostic rewrite
- Blog typography/link styling
- Route/layout CSS-loading fix
- Hero parallax sensitivity and mobile scroll story
- Production CSS/mobile hero fixes
- Generated service/process/industry assets
- Chatbot and floating CTA
- Vercel Speed Insights and Analytics
- Sitemap date update, later corrected to avoid false modification dates
- Search Console-driven predictive content gaps, E-E-A-T, internal linking, FAQ/GEO content
- Related-article/mobile readability fix

Do not assume a feature is deployed solely because it exists in Git; verify the live site after deployment.

---

## 23. Recommended Next Work Order

### Priority 0 — Make production dependable

1. Confirm canonical public phone and public email.
2. Fix NAP/contact mismatches everywhere.
3. Rotate the exposed Resend and Web3Forms credentials.
4. Verify SMTP/Resend environment variables on the actual host.
5. Submit one normal contact form, one website brief, one logo brief, and one chatbot message; confirm all arrive at `justin@goexecution.com` with the branded template.
6. Verify the latest commit is deployed.

### Priority 1 — Validate latest SEO deployment

1. Confirm all 17 blog URLs return 200.
2. Confirm the live sitemap includes the ten new articles.
3. Submit/re-submit sitemap in Search Console.
4. Inspect priority URLs using URL Inspection.
5. Validate Article, FAQPage, Service, Breadcrumb, Organization, and WebSite JSON-LD.
6. Confirm old WordPress URLs redirect once to their closest new canonical.

### Priority 1 — Performance

1. Compress oversized new article/service images.
2. Run `npm run build` and `npm run lint` on the current tree.
3. Run mobile Lighthouse against production.
4. Compare live lab results with Search Console Core Web Vitals field data.
5. Audit duplicate analytics loading; `DeferredAnalytics`, Vercel Analytics, and Speed Insights should each have a clear purpose without duplicate page tracking.

### Priority 1 — Content accuracy

1. Fact-check all 17 articles.
2. Verify every “best,” comparison, Reddit, pricing, performance, and market claim.
3. Add/retain primary-source citations.
4. Confirm author/reviewer identities and descriptions are accurate.
5. Avoid publishing invented client outcomes or unverified portfolio claims.

### Priority 2 — Growth systems

1. Connect newsletter signup to an approved platform.
2. Execute the backlink plan and maintain an outreach ledger.
3. Create real case studies and first-party data assets.
4. Monitor Search Console monthly and update page/query mappings.
5. Improve pages already earning impressions before adding overlapping topics.

### Priority 3 — Code maintenance

1. Audit `app/globals.css` for obsolete duplicated blocks using screenshot regression tests.
2. Remove unused/generated assets only after confirming no runtime references.
3. Consider splitting large content modules when it improves maintainability without shifting core content to client JavaScript.
4. Preserve server rendering and static generation for SEO pages.

---

## 24. Rules for Future Work

- Preserve the owner's premium navy/gold visual language.
- Maintain glass header, high-motion desktop hero, and mobile scroll story unless explicitly changed.
- Do not remove the Executing loader without approval.
- Do not replace the 3D service carousel with a generic horizontal slider.
- Rear carousel cards must come forward on hover.
- Do not allow carousel overflow to clip active cards.
- Portfolio video must preload and play muted on hover/focus.
- Portfolio and Services navigation should expose dropdowns rather than surprise-navigation.
- Questionnaires must remain dedicated routes and submit to Justin.
- Do not reintroduce jQuery/PHP/WordPress runtime dependencies.
- Prefer native Next.js server components; use client components only for interaction.
- Respect reduced motion and keyboard accessibility.
- Never commit secrets.
- Never claim rankings, ROI, client outcomes, consensus, or performance numbers without evidence.
- Preserve existing user changes in the dirty worktree.
- After changes, verify lint/build and the affected live/user flow in proportion to risk.

---

## 25. Ready-to-Use Prompt for a New Codex Chat

Attach this file and use:

> Continue the Go Execution project using `GO-EXECUTION-MASTER-PROJECT-MEMORY.md` as the complete source of context. Do not restart the WordPress migration or redesign from scratch. The workspace is `D:\goexecution\go-execution-v2`, and the repository uses Next.js 16.3.0 with version-specific instructions in `AGENTS.md`. Preserve the current premium design, animations, portfolio behavior, questionnaires, email flow, and SEO architecture. First inspect the current Git status and the exact files relevant to my new request. Do not expose or commit secrets, do not overwrite existing dirty-worktree changes, and verify implemented changes with the appropriate lint/build/runtime checks.

---

## 26. One-Paragraph Current State

Go Execution has been transformed from a WordPress theme into a modern Next.js agency website with a glass navigation system, responsive desktop/mobile hero experiences, high-sensitivity parallax, a 3D autoplay service carousel, redesigned growth/CTA/testimonial sections, filtered image/video portfolio, contact map, branded SMTP/Resend lead delivery, dedicated website and logo questionnaires, floating conversion tools, an AI-assisted chatbot, WordPress redirect preservation, a service-and-industry SEO architecture, 17 SEO/GEO articles, structured data, sitemap/robots/AI-crawler support, Search Console exports, and an authority plan. The most urgent remaining work is to normalize contact/NAP data, rotate exposed credentials, verify production email delivery and deployment of the latest articles, compress new assets, validate the live sitemap/schema/indexing, fact-check comparative content, and then execute authority building based on measured Search Console/Ahrefs data.
