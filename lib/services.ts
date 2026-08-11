export type ServiceCategory = {
  slug: string;
  title: string;
  seoTitle: string;
  eyebrow: string;
  description: string;
  intro: string;
  image: string;
  capabilities: string[];
  subServiceSlugs: string[];
};

export type SubService = {
  slug: string;
  categorySlug: string;
  title: string;
  seoTitle: string;
  eyebrow: string;
  description: string;
  intro: string;
  overview: string;
  image: string;
  capabilities: string[];
  process: string[][];
  faq: string[][];
  relatedServices?: string[];
  relatedIndustries?: string[];
};

export const serviceCategories: Record<string, ServiceCategory> = {
  "web-development": {
    slug: "web-development",
    title: "Web Development Services",
    seoTitle: "Custom Web Development Services & Company in USA | Go Execution",
    eyebrow: "Enterprise Web Engineering & Architectures",
    description: "Go Execution engineers high-performance custom web applications, Next.js platforms, WordPress CMS builds, and e-commerce storefronts built for speed and conversions.",
    intro: "We build sub-second web platforms engineered for maximum search visibility, enterprise security, and seamless user experiences across all devices.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&fit=crop",
    capabilities: [
      "Custom Next.js & React Applications",
      "Enterprise WordPress Development",
      "Scalable E-Commerce Storefronts",
      "High-Converting Landing Pages",
      "Full Website Redesign & SEO Migrations",
      "Website Speed & Core Web Vitals Optimization"
    ],
    subServiceSlugs: [
      "custom-web-development",
      "wordpress-development",
      "nextjs-development",
      "ecommerce-development",
      "landing-page-development",
      "website-redesign",
      "website-performance"
    ]
  },
  "seo": {
    slug: "seo",
    title: "SEO Services",
    seoTitle: "Professional SEO Services & Search Agency in USA | Go Execution",
    eyebrow: "Search Engine Optimization & Organic Growth",
    description: "Go Execution delivers data-driven technical SEO, local search optimization, e-commerce SEO, and organic growth strategies for US businesses.",
    intro: "We eliminate technical crawl barriers, engineer topical keyword authority, and secure high-intent search rankings that turn organic search into a predictable revenue stream.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80&fit=crop",
    capabilities: [
      "Technical SEO & Crawl Audits",
      "Local Search & Google Business Profile SEO",
      "E-Commerce SEO & Revenue Optimization",
      "Small Business SEO & Keyword Targeting"
    ],
    subServiceSlugs: [
      "technical-seo",
      "local-seo",
      "ecommerce-seo",
      "small-business-seo"
    ]
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing Services",
    seoTitle: "Full-Funnel Digital Marketing Agency in USA | Go Execution",
    eyebrow: "Performance Marketing & Customer Acquisition",
    description: "Go Execution executes high-ROAS paid advertising, social media marketing, content marketing, and conversion rate optimization campaigns for US growth brands.",
    intro: "We unify paid search, social ad creatives, content strategy, and conversion rate optimization into a single accountable customer acquisition engine.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fit=crop",
    capabilities: [
      "Content Marketing & Thought Leadership",
      "Social Media Marketing & UGC Campaigns",
      "Paid Advertising (PPC & Meta Ads)",
      "Conversion Rate Optimization (CRO)"
    ],
    subServiceSlugs: [
      "content-marketing",
      "social-media-marketing",
      "paid-advertising",
      "conversion-optimisation"
    ]
  },
  "design-branding": {
    slug: "design-branding",
    title: "Design & Branding Services",
    seoTitle: "Brand Identity & Graphic Design Agency in USA | Go Execution",
    eyebrow: "Strategic Brand Identity & Graphic Design",
    description: "Go Execution crafts distinctive corporate brand identities, logo designs, graphic design systems, and creative visual assets for ambitious brands in the USA.",
    intro: "We shape visual identities that command authority, build instant consumer trust, and differentiate your brand across every digital touchpoint.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80&fit=crop",
    capabilities: [
      "Custom Graphic Design Services",
      "Corporate Logo Design & Vector Branding",
      "Comprehensive Brand Identity Systems",
      "Creative Marketing Assets & Collateral"
    ],
    subServiceSlugs: [
      "graphic-design",
      "logo-design",
      "brand-identity",
      "creative-design"
    ]
  },
  "video": {
    slug: "video",
    title: "Video Animation Services",
    seoTitle: "2D & 3D Video Animation Services in USA | Go Execution",
    eyebrow: "High-Impact Video Motion & Animation",
    description: "Go Execution produces custom 2D explainer videos, 3D product animations, and motion graphics that clarify product value and boost conversion rates.",
    intro: "We translate complex value propositions into engaging visual stories, high-end motion graphics, and conversion-focused animated explainer videos.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80&fit=crop",
    capabilities: [
      "2D Motion Graphics & Character Animation",
      "3D Product Visualizations & Rendering",
      "Animated SaaS Explainer Videos",
      "High-Converting Ad Motion Creatives"
    ],
    subServiceSlugs: [
      "video-animation",
      "2d-animation",
      "3d-animation",
      "explainer-videos"
    ]
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development Services",
    seoTitle: "Custom Mobile App Development Company in USA | Go Execution",
    eyebrow: "Native & Cross-Platform Mobile Engineering",
    description: "Go Execution engineers custom iOS and Android mobile applications using React Native and Flutter, built for enterprise performance and seamless user retention.",
    intro: "We build intuitive, high-speed mobile experiences that connect businesses directly with users on iOS and Android platforms.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&fit=crop",
    capabilities: [
      "Custom iOS & Android App Development",
      "Cross-Platform React Native & Flutter Apps",
      "Mobile Backend API Integrations",
      "App Store Deployment & Optimization"
    ],
    subServiceSlugs: [
      "custom-mobile-app-development"
    ]
  }
};

export const subServices: Record<string, SubService> = {
  // --- WEB DEVELOPMENT ---
  "custom-web-development": {
    slug: "custom-web-development",
    categorySlug: "web-development",
    title: "Custom Web Development",
    seoTitle: "Custom Web Development Services in USA | Go Execution",
    eyebrow: "Tailored Engineering for Growth",
    description: "Custom web development services for US businesses built for sub-second speeds, scalability, search engine visibility, and maximum conversions.",
    intro: "Off-the-shelf templates limit scalability. We build bespoke custom web solutions engineered around your exact commercial goals, technical integrations, and user acquisition funnels.",
    overview: "Our custom web development services combine clean modern architecture, Next.js framework power, and robust API backends to deliver sub-second page performance.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&fit=crop",
    capabilities: [
      "Custom Frontend & Backend Architecture",
      "API & Database Systems Integration",
      "Sub-second Core Web Vitals Engineering",
      "Automated Security & Scalability Controls"
    ],
    process: [
      ["Discovery & Technical Architecture", "Analyzing commercial requirements and designing custom data models."],
      ["UI/UX Design & Component Prototyping", "Building interactive wireframes tailored for high-conversion user journeys."],
      ["Clean Code Engineering", "Developing lightweight, accessible code using Next.js, React, and TypeScript."],
      ["QA, Speed Audit & Deployment", "Rigorous cross-device testing, Core Web Vitals optimization, and live launch."]
    ],
    faq: [
      ["What makes custom web development better than standard templates?", "Custom development provides zero code bloat, sub-second load speeds, infinite scalability, and total ownership of your digital platform."],
      ["How long does a custom web development project take?", "Timeline varies by scope, but typical custom web application builds take 4 to 8 weeks from design approval to deployment."]
    ],
    relatedServices: ["wordpress-development", "nextjs-development", "ecommerce-development"],
    relatedIndustries: ["technology", "real-estate", "professional-services"]
  },
  "wordpress-development": {
    slug: "wordpress-development",
    categorySlug: "web-development",
    title: "WordPress Development",
    seoTitle: "Custom WordPress Development Services in USA | Go Execution",
    eyebrow: "High-Performance Content Management Systems",
    description: "Custom WordPress development services engineered for speed, custom Gutenberg block builders, and robust security for US businesses.",
    intro: "We transform WordPress into a lightning-fast, highly secure content platform with custom theme architecture, zero plugin bloat, and intuitive editing tools.",
    overview: "Our WordPress developers build custom themes and plugins tailored to your brand, ensuring sub-second speeds and complete editor autonomy.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=80&fit=crop",
    capabilities: [
      "Custom Theme & Gutenberg Block Development",
      "Plugin Development & API Integration",
      "WordPress Performance & Security Hardening",
      "Headless WordPress & GraphQL APIs"
    ],
    process: [
      ["Architecture Planning", "Mapping custom post types, fields, and workflow requirements."],
      ["Custom Block Development", "Building native Gutenberg blocks for effortless page publishing."],
      ["Speed Optimization", "Eliminating bloat to achieve green PageSpeed Insights scores."],
      ["Launch & Training", "Hands-on team training for internal content publishing."]
    ],
    faq: [
      ["Will our WordPress site be fast?", "Yes. We avoid slow page builders and write clean, custom themes that score top PageSpeed metrics."],
      ["Is WordPress secure for enterprise business?", "With custom code, dedicated security protocols, and proper server setup, WordPress is rock-solid."]
    ],
    relatedServices: ["custom-web-development", "website-performance"],
    relatedIndustries: ["professional-services", "health-wellness"]
  },
  "nextjs-development": {
    slug: "nextjs-development",
    categorySlug: "web-development",
    title: "Next.js Development",
    seoTitle: "Next.js Development Services & Agency in USA | Go Execution",
    eyebrow: "Next-Generation React Web Applications",
    description: "High-speed Next.js web application development services engineered for sub-second page loads, server-side rendering, and maximum SEO visibility.",
    intro: "Next.js is the gold standard for modern web performance. We build lightning-fast SSR web applications that rank higher and convert faster.",
    overview: "We leverage Next.js App Router, Turbopack, and Vercel edge deployment to build sub-second web platforms that dominate competitive US search markets.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&fit=crop",
    capabilities: [
      "Next.js App Router & Server Components",
      "Server-Side Rendering (SSR) & Static Generation (SSG)",
      "Headless CMS Integration (Sanity, Strapi, WordPress)",
      "Edge Network API Engineering"
    ],
    process: [
      ["System Architecture", "Designing modular React component trees and state management."],
      ["SSR/SSG Optimization", "Configuring fast server rendering and static page generation."],
      ["API Integration", "Connecting head-less CMS content, payment gateways, and CRM endpoints."],
      ["Vercel Edge Deployment", "Deploying across global CDN nodes for zero-latency page delivery."]
    ],
    faq: [
      ["Why choose Next.js for our business website?", "Next.js combines sub-second speeds, top-tier SEO rendering, and enterprise-grade security."],
      ["Can Next.js connect to an existing CMS?", "Yes! Next.js easily connects to WordPress, Shopify, Sanity, or custom GraphQL backends."]
    ],
    relatedServices: ["custom-web-development", "ecommerce-development"],
    relatedIndustries: ["technology", "fashion"]
  },
  "ecommerce-development": {
    slug: "ecommerce-development",
    categorySlug: "web-development",
    title: "E-Commerce Development",
    seoTitle: "E-Commerce Web Development Services in USA | Go Execution",
    eyebrow: "High-Converting Online Storefronts",
    description: "Custom e-commerce development services using Shopify, Next.js Headless Commerce, and WooCommerce, built to scale sales and revenue.",
    intro: "We engineer online storefronts with frictionless checkout flows, mobile-first navigation, and rapid page load speeds that turn store visitors into repeat buyers.",
    overview: "Whether you need a custom Shopify theme or a custom headless commerce platform, we build e-commerce solutions that maximize Average Order Value (AOV).",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&q=80&fit=crop",
    capabilities: [
      "Custom Shopify & Shopify Plus Development",
      "Headless E-Commerce Architectures",
      "Custom WooCommerce & Payment Gateways",
      "Cart & Checkout Conversion Optimization"
    ],
    process: [
      ["Storefront Strategy", "Analyzing product catalogs, customer journeys, and conversion paths."],
      ["UX & Checkout Design", "Crafting intuitive product pages and one-click checkout flows."],
      ["Custom Store Engineering", "Developing custom themes, app integrations, and inventory feeds."],
      ["Launch & CRO Testing", "Continuous A/B testing post-launch to increase conversion rates."]
    ],
    faq: [
      ["Which e-commerce platform do you recommend?", "Shopify is ideal for rapid scaling, while Headless Next.js Commerce offers ultimate custom performance."],
      ["Do you migrate existing stores without losing SEO rankings?", "Yes! We manage full URL mapping, 301 redirects, and data migrations to protect rankings."]
    ],
    relatedServices: ["custom-web-development", "website-performance"],
    relatedIndustries: ["fashion", "retail"]
  },
  "landing-page-development": {
    slug: "landing-page-development",
    categorySlug: "web-development",
    title: "Landing Page Development",
    seoTitle: "High-Converting Landing Page Development in USA | Go Execution",
    eyebrow: "Precision Paid Traffic Acquisition Pages",
    description: "High-converting landing page development services engineered specifically to maximize ROAS for PPC, Meta Ads, and direct campaign campaigns.",
    intro: "Don't waste ad spend on slow, generic pages. We design and build ultra-fast, persuasive landing pages engineered to convert ad clicks into revenue.",
    overview: "Our landing pages pair psychological copy, sub-second load speeds, and clear call-to-actions to deliver industry-leading conversion percentages.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fit=crop",
    capabilities: [
      "High-ROAS Ad Campaign Landing Pages",
      "A/B Split Testing & Conversion Copy",
      "Sub-second Mobile Loading Architecture",
      "CRM & Lead Capture Integrations"
    ],
    process: [
      ["Campaign Copy & Wireframing", "Drafting high-intent persuasive copy and layout structure."],
      ["High-Impact Visual Design", "Designing brand-aligned UI with clear focal conversion elements."],
      ["Fast Light Code Build", "Building clean code with instant form submission response."],
      ["Analytics & Event Tracking", "Setting up GA4 event tracking and conversion goals."]
    ],
    faq: [
      ["How fast can you deliver a campaign landing page?", "Standard landing pages are typically designed, built, and launched within 5 to 7 business days."],
      ["Do you include A/B testing?", "Yes, we build variant pages to test headlines, CTAs, and layout variations for optimal conversion."]
    ],
    relatedServices: ["paid-advertising", "conversion-optimisation"],
    relatedIndustries: ["real-estate", "professional-services"]
  },
  "website-redesign": {
    slug: "website-redesign",
    categorySlug: "web-development",
    title: "Website Redesign",
    seoTitle: "Professional Website Redesign Services in USA | Go Execution",
    eyebrow: "Modernizing Brand Digital Presence",
    description: "Complete website redesign services that upgrade outdated websites into modern, fast, high-converting digital platforms while preserving SEO value.",
    intro: "Transform your outdated website into a modern market leader without losing historical search engine rankings, domain authority, or organic traffic.",
    overview: "We analyze your current site performance, rebuild user journeys, modernize visual branding, and execute seamless 301 SEO migration plans.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=80&fit=crop",
    capabilities: [
      "Full UX/UI Modernization",
      "SEO Traffic & Ranking Preservation Strategy",
      "Mobile-First Responsive Redesign",
      "Core Web Vitals Performance Upgrade"
    ],
    process: [
      ["SEO Audit & URL Mapping", "Cataloging all existing URLs and ranking assets before design starts."],
      ["Brand Modernization", "Designing state-of-the-art UI components and interactive layouts."],
      ["Next.js / WordPress Rebuild", "Engineering sub-second performance code with modern frameworks."],
      ["Seamless 301 Migration Launch", "Executing 301 redirect maps to guarantee 0 ranking loss."]
    ],
    faq: [
      ["Will a website redesign harm our existing Google rankings?", "Not with Go Execution. We follow strict SEO migration protocols to preserve and improve rankings."],
      ["How do we know if our website needs a redesign?", "If your site loads in over 2.5 seconds, looks outdated on mobile, or has low conversion rates, it's time."]
    ],
    relatedServices: ["custom-web-development", "technical-seo"],
    relatedIndustries: ["professional-services", "technology"]
  },
  "website-performance": {
    slug: "website-performance",
    categorySlug: "web-development",
    title: "Website Speed & Performance",
    seoTitle: "Website Speed Optimization Services in USA | Go Execution",
    eyebrow: "Sub-second Loading & Core Web Vitals",
    description: "Technical website speed optimization services engineered to pass Google Core Web Vitals (LCP, INP, CLS) and accelerate user conversions.",
    intro: "Every 100ms delay costs revenue. We optimize JavaScript execution, media assets, and server delivery to achieve sub-second speeds and 90+ PageSpeed scores.",
    overview: "Our performance engineers eliminate render-blocking scripts, optimize caching, and refine frontend code to maximize speed and Google search favorability.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&fit=crop",
    capabilities: [
      "Core Web Vitals Remediation (LCP, INP, CLS)",
      "JavaScript & CSS Bundle Minification",
      "Image & Video AVIF/WebP Compression",
      "Server Response & CDN Optimization"
    ],
    process: [
      ["Diagnostic Performance Audit", "Identifying exact scripts and assets slowing down your website."],
      ["Frontend Code Optimization", "Deferring non-critical scripts, compressing assets, and cleaning CSS."],
      ["Server & CDN Hardening", "Configuring edge caching, HTTP/3, and Gzip/Brotli compression."],
      ["Verification & Reporting", "Verifying green Core Web Vitals scores in Search Console and PageSpeed."]
    ],
    faq: [
      ["Why does website speed affect Google rankings?", "Google explicitly uses Core Web Vitals as page experience ranking signals."],
      ["Can you speed up slow WordPress or Shopify sites?", "Yes! We optimize database queries, remove heavy plugins, and implement advanced caching."]
    ],
    relatedServices: ["wordpress-development", "technical-seo"],
    relatedIndustries: ["fashion", "retail"]
  },

  // --- SEO ---
  "technical-seo": {
    slug: "technical-seo",
    categorySlug: "seo",
    title: "Technical SEO",
    seoTitle: "Technical SEO Services & Audit Agency in USA | Go Execution",
    eyebrow: "Search Engine Infrastructure & Indexing",
    description: "Technical SEO services to resolve indexing errors, crawl budget issues, canonical mismatches, structured data, and site speed barriers.",
    intro: "Search engine algorithms cannot rank content they cannot properly crawl or understand. We audit and resolve deep technical search infrastructure barriers.",
    overview: "We fix crawl errors, implement schema graph markups, clean sitemaps, and optimize JavaScript rendering so Google indexes every high-value page.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80&fit=crop",
    capabilities: [
      "Crawl Budget & Indexing Diagnostics",
      "Structured Data & Schema Graph Implementation",
      "Canonical Tag & 301 Redirect Mapping",
      "XML Sitemap & Robots.txt Architecture"
    ],
    process: [
      ["Deep Technical Audit", "Scanning site architecture with Screaming Frog and Search Console."],
      ["Crawl Barrier Fixes", "Resolving 404s, redirect loops, and duplicate content issues."],
      ["Schema Graph Deployment", "Adding structured JSON-LD data for Organization, Services, and Articles."],
      ["Search Console Monitoring", "Verifying clean indexing coverage in Google Search Console."]
    ],
    faq: [
      ["What is Technical SEO?", "Technical SEO ensures Google can easily crawl, index, and understand your website's underlying code."],
      ["How quickly do technical SEO fixes show results?", "Indexing and crawl improvements typically reflect in Search Console within 1 to 3 weeks."]
    ],
    relatedServices: ["website-performance", "local-seo"],
    relatedIndustries: ["technology", "real-estate"]
  },
  "local-seo": {
    slug: "local-seo",
    categorySlug: "seo",
    title: "Local SEO Services",
    seoTitle: "Local SEO Services & Google Maps Agency in USA | Go Execution",
    eyebrow: "Dominating Local Search & Map Packs",
    description: "Local SEO services engineered to rank your business at the top of Google Maps and local search results for high-intent nearby buyers.",
    intro: "Capture ready-to-buy customers in your area. We optimize Google Business Profiles, build local citation authority, and rank local landing pages.",
    overview: "Our local SEO strategies drive qualified phone calls, walk-ins, and consultation bookings by claiming Google Map pack dominance in your market.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80&fit=crop",
    capabilities: [
      "Google Business Profile (GBP) Optimization",
      "Local Citation & NAP Synchronization",
      "Localized Landing Page SEO",
      "Review Management & Local Reputation"
    ],
    process: [
      ["GBP & Audit Setup", "Claiming, verifying, and optimizing your Google Business Profile."],
      ["Local Keyword Mapping", "Identifying geo-targeted search terms with high buying intent."],
      ["Citation Building", "Distributing accurate business NAP across top local directories."],
      ["Monthly Tracking & Reporting", "Monitoring map rankings, phone calls, and direction requests."]
    ],
    faq: [
      ["How does Local SEO differ from regular SEO?", "Local SEO focuses specifically on ranking in Google Map packs and localized geo-searches."],
      ["How long does it take to rank on Google Maps?", "Most clients see significant Map pack movement within 60 to 90 days."]
    ],
    relatedServices: ["technical-seo", "small-business-seo"],
    relatedIndustries: ["health-wellness", "hospitality"]
  },
  "ecommerce-seo": {
    slug: "ecommerce-seo",
    categorySlug: "seo",
    title: "E-Commerce SEO",
    seoTitle: "E-Commerce SEO Services for Shopify & WooCommerce | Go Execution",
    eyebrow: "Organic Product & Category Revenue",
    description: "E-commerce SEO services that rank product catalogs, collection pages, and brand terms to drive sustainable organic sales.",
    intro: "Stop relying solely on paid ads. We rank your product categories and high-intent commercial keywords at the top of Google search results.",
    overview: "We optimize product titles, schema markup, collection page copy, and internal linking structures to maximize organic e-commerce revenue.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&q=80&fit=crop",
    capabilities: [
      "Product & Collection Category Optimization",
      "E-Commerce Product Schema & Merchant Center",
      "Faceted Navigation & Technical Filtering SEO",
      "Organic Product Link Building"
    ],
    process: [
      ["Catalog & Keyword Audit", "Mapping high-volume commercial keywords to product categories."],
      ["On-Page Category Optimization", "Writing compelling, keyword-rich copy for collection pages."],
      ["Technical E-Commerce Fixes", "Managing duplicate product parameter URLs and canonicals."],
      ["Revenue Tracking", "Measuring organic search revenue and transaction growth in GA4."]
    ],
    faq: [
      ["Can SEO work for Shopify stores?", "Yes! We implement advanced Shopify schema, clean tag structures, and custom collection page content."],
      ["How do you handle out-of-stock product pages?", "We apply smart canonicals or 301 redirects to preserve link equity and customer experience."]
    ],
    relatedServices: ["ecommerce-development", "technical-seo"],
    relatedIndustries: ["fashion", "retail"]
  },
  "small-business-seo": {
    slug: "small-business-seo",
    categorySlug: "seo",
    title: "Small Business SEO",
    seoTitle: "Small Business SEO Services in USA | Go Execution",
    eyebrow: "Cost-Effective Organic Business Growth",
    description: "Small business SEO services designed to outrank regional competitors and generate a steady stream of qualified customer inquiries.",
    intro: "Level the playing field against larger competitors with targeted organic search strategies tailored specifically for growing US small businesses.",
    overview: "We focus on high-intent buyer keywords, localized search visibility, and transparent monthly reporting that connects SEO to actual revenue.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&fit=crop",
    capabilities: [
      "High-Intent Small Business Keyword Targeting",
      "On-Page Content & Service Page Optimization",
      "Google Business & Local Map Visibility",
      "Transparent Monthly Growth Reports"
    ],
    process: [
      ["Competitor Analysis", "Identifying gaps where smaller businesses can quickly outrank market leaders."],
      ["Service Page Optimization", "Optimizing core commercial pages around exact service offerings."],
      ["Local Citation & Link Building", "Building genuine local backlink authority and directory listings."],
      ["Monthly Lead Tracking", "Tracking organic form submissions, calls, and business inquiries."]
    ],
    faq: [
      ["Is SEO affordable for small businesses?", "Yes! We focus on high-ROI commercial keywords that generate leads quickly without wasting budget."],
      ["How do we track our SEO ROI?", "We provide clear monthly reports showing ranking positions, organic traffic, and verified lead actions."]
    ],
    relatedServices: ["local-seo", "website-redesign"],
    relatedIndustries: ["professional-services", "health-wellness"]
  },

  // --- DIGITAL MARKETING ---
  "content-marketing": {
    slug: "content-marketing",
    categorySlug: "digital-marketing",
    title: "Content Marketing",
    seoTitle: "Content Marketing Services & Agency in USA | Go Execution",
    eyebrow: "Authority & Thought Leadership Content",
    description: "Content marketing services that build brand authority, engage target audiences, and drive organic traffic through expert editorial articles and guides.",
    intro: "Quality content builds trust before the sale. We research, write, and distribute high-authority articles, whitepapers, and guides that convert readers into leads.",
    overview: "Our content strategists craft editorial pieces aligned with real search intent, positioning your business as the definitive expert in your industry.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80&fit=crop",
    capabilities: [
      "Topical Keyword & Cluster Planning",
      "High-Authority Copywriting & Editing",
      "Lead Magnet & Whitepaper Creation",
      "Content Syndication & Distribution"
    ],
    process: [
      ["Topical Research", "Finding high-value questions your target customers are actively asking online."],
      ["Expert Content Creation", "Writing in-depth, well-researched articles that demonstrate first-hand expertise."],
      ["Internal Linking & CTAs", "Integrating strategic links to relevant service pages and consultation offers."],
      ["Performance Review", "Tracking traffic engagement, time-on-page, and lead conversions."]
    ],
    faq: [
      ["How does content marketing support SEO?", "Search engines reward sites that demonstrate topical depth and answer user questions thoroughly."],
      ["Who writes the content?", "Our expert US editorial team writes custom content tailored specifically to your industry tone."]
    ],
    relatedServices: ["social-media-marketing", "paid-advertising"],
    relatedIndustries: ["technology", "professional-services"]
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    categorySlug: "digital-marketing",
    title: "Social Media Marketing",
    seoTitle: "Social Media Marketing & Ad Agency in USA | Go Execution",
    eyebrow: "Brand Engagement & Paid Social Ads",
    description: "Social media marketing services including content curation, Meta ads, LinkedIn campaigns, and short-form video strategies for US growth brands.",
    intro: "Build active brand communities and launch high-converting paid social ad campaigns across Meta (Facebook & Instagram), LinkedIn, and TikTok.",
    overview: "We combine eye-catching visual creatives, UGC video motion, and precise demographic targeting to scale social media brand awareness and sales.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80&fit=crop",
    capabilities: [
      "Meta Ads (Facebook & Instagram PPC)",
      "LinkedIn B2B Lead Generation Campaigns",
      "UGC & Short-Form Video Content Strategy",
      "Organic Social Content Curation & Scheduling"
    ],
    process: [
      ["Audience Segmentation", "Identifying target buyer personas, interests, and online behaviors."],
      ["Creative Production", "Designing visual graphic assets, video Reels, and ad copy variants."],
      ["Campaign Management", "Launching paid social ads with real-time ROAS monitoring."],
      ["Optimization & Scaling", "Scaling winning ad creatives and reallocating budget for maximum ROI."]
    ],
    faq: [
      ["Which social platforms are best for our business?", "B2B brands thrive on LinkedIn & Google, while B2C retail brands scale fastest on Instagram & TikTok."],
      ["Do you handle social ad creation?", "Yes, we produce all ad graphics, copy, and video motion assets in-house."]
    ],
    relatedServices: ["paid-advertising", "graphic-design"],
    relatedIndustries: ["fashion", "retail"]
  },
  "paid-advertising": {
    slug: "paid-advertising",
    categorySlug: "digital-marketing",
    title: "Paid Advertising (PPC)",
    seoTitle: "PPC & Google Ads Management Agency in USA | Go Execution",
    eyebrow: "Immediate High-Intent Customer Acquisition",
    description: "Paid advertising and PPC management services for Google Search, Shopping, and Display ads, engineered around strict ROAS and CAC goals.",
    intro: "Get your business in front of customers at the exact moment they are searching to buy. We manage high-ROI Google Ads and PPC search campaigns.",
    overview: "We eliminate wasted ad spend through negative keyword sculpting, high-converting ad copy, landing page alignment, and strict bid management.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80&fit=crop",
    capabilities: [
      "Google Search & Shopping Campaign PPC",
      "High-Intent Keyword Bidding Strategy",
      "Negative Keyword & Waste Elimination",
      "Real-Time Conversion & GA4 Tracking"
    ],
    process: [
      ["Account Restructuring", "Organizing campaigns into tightly targeted ad groups and match types."],
      ["Ad Copywriting", "Testing multi-headline responsive search ads to maximize CTR."],
      ["Landing Page Alignment", "Ensuring ad message matches landing page content for top Quality Scores."],
      ["Daily Bid Optimization", "Continuously optimizing bids for target Cost Per Acquisition (CPA)."]
    ],
    faq: [
      ["How quickly can Google Ads generate leads?", "Google Search ads begin generating clicks and leads immediately upon campaign activation."],
      ["How do you prevent wasted ad spend?", "We monitor match types daily, add negative keywords, and focus strictly on high-intent buyer terms."]
    ],
    relatedServices: ["landing-page-development", "conversion-optimisation"],
    relatedIndustries: ["real-estate", "professional-services"]
  },
  "conversion-optimisation": {
    slug: "conversion-optimisation",
    categorySlug: "digital-marketing",
    title: "Conversion Rate Optimization (CRO)",
    seoTitle: "Conversion Rate Optimization (CRO) Agency in USA | Go Execution",
    eyebrow: "Maximizing Revenue From Existing Traffic",
    description: "Conversion rate optimization (CRO) services using heatmaps, user testing, and A/B split testing to increase website sales and lead capture.",
    intro: "Double your revenue without spending more on traffic. We identify funnel friction points and optimize user experiences to convert more visitors.",
    overview: "Our CRO specialists combine data analytics, behavior heatmaps, and psychological UI tweaks to dramatically improve conversion percentages.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&fit=crop",
    capabilities: [
      "User Heatmap & Session Recording Analysis",
      "A/B & Multivariate Split Testing",
      "Form & Checkout Friction Elimination",
      "UX/UI Behavioral Psychology Optimization"
    ],
    process: [
      ["Funnel Data Audit", "Analyzing drop-off points in Google Analytics 4 and Hotjar heatmaps."],
      ["Hypothesis Formation", "Developing data-driven hypotheses for higher converting page layouts."],
      ["A/B Test Execution", "Running split tests to compare variant pages against control pages."],
      ["Winning Implementation", "Permanently deploying winning layout variations."]
    ],
    faq: [
      ["What is a good conversion rate?", "Average web conversion rates range from 2% to 5%, but optimized sites achieve 8% to 15%+."],
      ["How long does a CRO test take?", "A/B tests typically run for 2 to 4 weeks depending on site traffic volume."]
    ],
    relatedServices: ["landing-page-development", "website-performance"],
    relatedIndustries: ["fashion", "technology"]
  },

  // --- DESIGN & BRANDING ---
  "graphic-design": {
    slug: "graphic-design",
    categorySlug: "design-branding",
    title: "Graphic Design Services",
    seoTitle: "Custom Graphic Design Services & Agency in USA | Go Execution",
    eyebrow: "Professional Visual Communication Assets",
    description: "Custom graphic design services for marketing collateral, social media assets, digital ads, pitch decks, and brand print materials.",
    intro: "High-quality visual design makes your business memorable. We craft custom graphic design assets that reinforce your brand authority across all channels.",
    overview: "Our senior graphic designers deliver polished vector assets, digital banners, marketing collateral, and brand identity materials.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80&fit=crop",
    capabilities: [
      "Digital Marketing & Ad Banner Design",
      "Corporate Pitch Decks & Presentations",
      "Print Collateral & Brochure Design",
      "Vector Graphics & Illustration Assets"
    ],
    process: [
      ["Design Briefing", "Aligning on brand guidelines, color palettes, and project goals."],
      ["Concept Creation", "Developing initial creative design concepts for review."],
      ["Refinement & Polish", "Incorporating feedback to perfect visual hierarchy and details."],
      ["Final Deliverable Package", "Exporting print-ready vector PDFs and digital WebP/PNG assets."]
    ],
    faq: [
      ["Do we own the final vector source files?", "Yes! You receive 100% full commercial ownership and all original editable vector files."],
      ["Can you follow our existing brand guidelines?", "Absolutely. We strictly adhere to your brand book, fonts, and color palettes."]
    ],
    relatedServices: ["logo-design", "brand-identity"],
    relatedIndustries: ["fashion", "real-estate"]
  },
  "logo-design": {
    slug: "logo-design",
    categorySlug: "design-branding",
    title: "Logo Design",
    seoTitle: "Custom Logo Design Services & Branding in USA | Go Execution",
    eyebrow: "Distinctive & Timeless Brand Symbols",
    description: "Custom logo design services crafting iconic, scalable vector logos and brand marks for startups and established US businesses.",
    intro: "Your logo is the front door of your brand. We design timeless, memorable logos that convey instant quality, trust, and market leadership.",
    overview: "We craft custom vector marks engineered to look flawless on everything from mobile favicon icons to giant outdoor billboards.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&q=80&fit=crop",
    capabilities: [
      "Custom Vector Logo Concepts",
      "Primary & Secondary Logo Marks",
      "Typography & Color Palette System",
      "Complete Brand Usage Guidelines"
    ],
    process: [
      ["Brand Discovery", "Understanding your company values, target audience, and competitors."],
      ["Conceptual Sketching", "Exploring unique icon ideas and typography combinations."],
      ["Digital Vectorization", "Engineering precise vector geometry in Adobe Illustrator."],
      ["Master Asset Delivery", "Packaging SVG, EPS, PNG, PDF, and brand guideline PDFs."]
    ],
    faq: [
      ["How many logo concepts do you provide?", "We present 3 to 5 distinct design directions for your team to choose from."],
      ["Will the logo be scalable?", "Yes, all logos are vector-based and scale infinitely without quality loss."]
    ],
    relatedServices: ["brand-identity", "graphic-design"],
    relatedIndustries: ["professional-services", "health-wellness"]
  },
  "brand-identity": {
    slug: "brand-identity",
    categorySlug: "design-branding",
    title: "Brand Identity Systems",
    seoTitle: "Brand Identity Design Services & Agency in USA | Go Execution",
    eyebrow: "Cohesive Corporate Identity & Guidelines",
    description: "Comprehensive brand identity design services including visual systems, typography rules, brand books, and strategic positioning.",
    intro: "Build a consistent, unmistakable brand presence. We create comprehensive brand identity systems that guide every visual and verbal asset.",
    overview: "Our brand strategists build complete brand guidelines—defining typography hierarchy, color codes, imagery tone, and messaging standards.",
    image: "https://images.unsplash.com/photo-1542744094-3a31b272c490?w=1200&q=80&fit=crop",
    capabilities: [
      "Comprehensive Brand Books & Style Guides",
      "Typography & Color System Rules",
      "Brand Voice & Messaging Frameworks",
      "Digital & Physical Touchpoint Application"
    ],
    process: [
      ["Brand Strategy Workshop", "Defining brand personality, positioning, and target appeal."],
      ["Visual Language Design", "Establishing consistent color tokens, typography, and patterns."],
      ["Brand Book Documentation", "Compiling clear rules for internal team and external vendor use."],
      ["Asset Deployment", "Rolling out updated branding across website and collateral."]
    ],
    faq: [
      ["What is included in a brand book?", "It includes logo usage, clear space, color codes (HEX/RGB/CMYK), typography rules, and do's/don'ts."],
      ["Why is brand consistency important?", "Consistent branding builds market recognition, customer trust, and higher perceived value."]
    ],
    relatedServices: ["logo-design", "graphic-design"],
    relatedIndustries: ["technology", "hospitality"]
  },
  "creative-design": {
    slug: "creative-design",
    categorySlug: "design-branding",
    title: "Creative Design",
    seoTitle: "Creative Design & Digital Media Agency in USA | Go Execution",
    eyebrow: "Innovative Visual Concepts & Campaigns",
    description: "Creative design services producing unique visual concepts, packaging, marketing campaign assets, and digital media art.",
    intro: "Stand out from sea-of-sameness competitors with bold creative direction, innovative visual concepts, and bespoke design assets.",
    overview: "We combine artistic vision with commercial strategy to produce eye-catching creative designs that captivate target audiences.",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=1200&q=80&fit=crop",
    capabilities: [
      "Creative Ad & Campaign Art Direction",
      "Packaging & Product Design Concepts",
      "Interactive Digital Experience Assets",
      "Custom Graphic Artwork & Illustration"
    ],
    process: [
      ["Creative Concepting", "Brainstorming bold visual angles aligned with campaign objectives."],
      ["Art Direction & Design", "Executing high-end visual artwork with meticulous detail."],
      ["Multi-Format Output", "Adapting creative assets across web, social, and print channels."],
      ["Review & Asset Handover", "Delivering high-resolution assets ready for campaign launch."]
    ],
    faq: [
      ["Can you handle packaging design?", "Yes! We design custom product packaging and label artwork ready for print manufacturing."],
      ["What industries do you create designs for?", "We work across retail, SaaS, real estate, hospitality, and corporate services."]
    ],
    relatedServices: ["graphic-design", "video-animation"],
    relatedIndustries: ["fashion", "retail"]
  },

  // --- VIDEO ---
  "video-animation": {
    slug: "video-animation",
    categorySlug: "video",
    title: "Video Animation",
    seoTitle: "Video Animation Services & Motion Agency in USA | Go Execution",
    eyebrow: "High-Converting Motion Graphics & Video",
    description: "Professional video animation services creating engaging motion graphics, 2D/3D animations, and social video ads for US businesses.",
    intro: "Capture audience attention in seconds with high-definition video animation. We build dynamic motion graphics that explain products and drive sales.",
    overview: "From social ad hooks to corporate explainer videos, our animation studio delivers 4K motion graphics with custom sound design.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80&fit=crop",
    capabilities: [
      "2D & 3D Custom Motion Graphics",
      "Social Media Video Ad Creatives",
      "Product & Feature Demonstration Videos",
      "Professional Voiceover & Sound Design"
    ],
    process: [
      ["Scriptwriting & Storyboarding", "Drafting compelling narrative arcs and visual frame concepts."],
      ["Custom Voiceover & Audio", "Recording professional voiceover tracks and sound effects."],
      ["Animation & Rendering", "Bringing illustrations to life with fluid 60FPS motion."],
      ["Final 4K Delivery", "Exporting optimized video files for web, YouTube, and ad platforms."]
    ],
    faq: [
      ["How long does an animated video take to create?", "Standard 60-second animated videos take 3 to 4 weeks from script approval to final render."],
      ["Do you write the video script?", "Yes, our scriptwriters craft persuasive video scripts tailored to your target audience."]
    ],
    relatedServices: ["2d-animation", "explainer-videos"],
    relatedIndustries: ["technology", "real-estate"]
  },
  "2d-animation": {
    slug: "2d-animation",
    categorySlug: "video",
    title: "2D Animation Services",
    seoTitle: "2D Animation Services & Motion Studio in USA | Go Execution",
    eyebrow: "Fluid 2D Character & Vector Motion",
    description: "2D animation services for character animation, educational content, animated explainer videos, and social media ad campaigns.",
    intro: "Engage viewers with colorful, fluid 2D vector animation. Perfect for storytelling, explaining service workflows, and building brand warmth.",
    overview: "Our 2D animators craft custom character rigs, vibrant vector scenes, and smooth transition animations that hold viewer attention.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&q=80&fit=crop",
    capabilities: [
      "Custom 2D Character Rigging & Animation",
      "Vector Motion Graphics & Dynamic Typography",
      "Infographic & Process Flow Animations",
      "Multi-Format Video Exports for Web & Social"
    ],
    process: [
      ["Script & Character Design", "Designing unique brand characters and narrative scenes."],
      ["Storyboard Approval", "Reviewing frame-by-frame visual progression before animating."],
      ["2D Motion Production", "Keyframing smooth character movements and text motion."],
      ["Sound Mix & Delivery", "Adding background score, sound effects, and voiceover."]
    ],
    faq: [
      ["Why choose 2D animation over live-action video?", "2D animation offers complete creative freedom, lower production costs, and easy updating."],
      ["Can we use 2D animations for social ads?", "Yes! 2D short clips perform exceptionally well on Instagram, TikTok, and YouTube Shorts."]
    ],
    relatedServices: ["video-animation", "explainer-videos"],
    relatedIndustries: ["health-wellness", "technology"]
  },
  "3d-animation": {
    slug: "3d-animation",
    categorySlug: "video",
    title: "3D Animation Services",
    seoTitle: "3D Animation Services & Product Rendering in USA | Go Execution",
    eyebrow: "Photorealistic 3D Modeling & Rendering",
    description: "3D animation services delivering photorealistic 3D product visualizations, architectural walkthroughs, and cinematic commercial motion.",
    intro: "Showcase products with stunning photorealistic 3D detail. We model, texture, and animate complex physical products and spatial environments.",
    overview: "Our 3D studio creates high-end product renders, exploded CAD views, and cinematic motion graphics that elevate high-ticket offerings.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80&fit=crop",
    capabilities: [
      "Photorealistic 3D Product Modeling & Texturing",
      "Exploded View & Mechanical CAD Animations",
      "Architectural 3D Walkthroughs & Flythroughs",
      "Cinematic Lighting & 4K Render Output"
    ],
    process: [
      ["CAD / 3D Asset Import", "Importing physical CAD files or modeling product geometry from scratch."],
      ["Lighting & Shader Setup", "Applying realistic materials, textures, and studio lighting."],
      ["Camera Rigging & Motion", "Animating dynamic camera moves and product assembly flows."],
      ["High-Res 4K Render", "Rendering final frames with post-processing color grading."]
    ],
    faq: [
      ["Do we need to provide 3D CAD files?", "If you have CAD files we can use them! Otherwise, we can model your product from photos and dimensions."],
      ["What industries use 3D animation?", "Tech hardware, real estate development, luxury retail, and industrial manufacturing."]
    ],
    relatedServices: ["video-animation", "graphic-design"],
    relatedIndustries: ["real-estate", "technology"]
  },
  "explainer-videos": {
    slug: "explainer-videos",
    categorySlug: "video",
    title: "Explainer Videos",
    seoTitle: "Animated Explainer Video Production Services | Go Execution",
    eyebrow: "Simplifying Complex Value Propositions",
    description: "Animated explainer video services designed to educate potential customers, boost website conversions, and clarify SaaS product features.",
    intro: "Turn complex business concepts into simple, persuasive 60-second video stories that drive website conversion rates and demo requests.",
    overview: "We combine problem-solution story scripts with engaging animation to ensure your target prospects instantly understand why they should buy.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80&fit=crop",
    capabilities: [
      "Problem-Agitate-Solution Scriptwriting",
      "Custom Animated SaaS Product Demos",
      "Professional Voiceover Casting & Recording",
      "High-Conversion Video Player Integration"
    ],
    process: [
      ["Core Message Discovery", "Distilling your core value proposition into a clear 60-second script."],
      ["Storyboard & Style Frame", "Designing exact visual scenes matching your brand identity."],
      ["Voice & Sound Alignment", "Pairing professional voiceover with energetic background audio."],
      ["Production & Embedding", "Delivering final video files optimized for landing page embedding."]
    ],
    faq: [
      ["Where should we place our explainer video?", "Above the fold on your homepage, main service pages, and paid ad landing pages."],
      ["How long should an explainer video be?", "60 to 90 seconds is optimal for retaining viewer attention and maximizing conversions."]
    ],
    relatedServices: ["video-animation", "2d-animation"],
    relatedIndustries: ["technology", "professional-services"]
  },

  // --- MOBILE APPS ---
  "custom-mobile-app-development": {
    slug: "custom-mobile-app-development",
    categorySlug: "mobile-app-development",
    title: "Custom Mobile App Development",
    seoTitle: "Custom Mobile App Development Services in USA | Go Execution",
    eyebrow: "Native & Cross-Platform Mobile Engineering",
    description: "Custom mobile app development services building high-speed iOS and Android applications using React Native, Flutter, and native Swift/Kotlin.",
    intro: "Bring your business directly into your customers' hands with custom mobile applications engineered for fluid performance, security, and scalability.",
    overview: "We build cross-platform and native mobile apps with secure cloud backends, real-time push notifications, and intuitive UI/UX navigation.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&fit=crop",
    capabilities: [
      "Cross-Platform React Native & Flutter Apps",
      "Native iOS (Swift) & Android (Kotlin) Development",
      "Secure REST / GraphQL Mobile Backends",
      "App Store & Google Play Publishing"
    ],
    process: [
      ["Mobile Scope & UX Wireframes", "Mapping user screens, navigation flows, and database architecture."],
      ["UI Design & Interactive Prototype", "Crafting intuitive mobile UI components adhering to iOS/Android guidelines."],
      ["Mobile Code Engineering", "Developing clean, performant mobile app code with real-time sync."],
      ["Store Testing & Submission", "Rigorous device testing and managing Apple/Google store approvals."]
    ],
    faq: [
      ["Should we choose React Native, Flutter, or Native?", "React Native and Flutter allow building for both iOS and Android simultaneously, saving up to 40% in development costs."],
      ["Do you handle App Store submissions?", "Yes, we handle complete app store provisioning, metadata setup, and approval submissions."]
    ],
    relatedServices: ["custom-web-development", "nextjs-development"],
    relatedIndustries: ["technology", "health-wellness"]
  }
};

export const allSubServices = Object.values(subServices);
export const allServiceCategories = Object.values(serviceCategories);

export function getCategory(slug: string): ServiceCategory | undefined {
  return serviceCategories[slug];
}

export function getSubService(slug: string): SubService | undefined {
  return subServices[slug];
}

export function getSubServicesForCategory(categorySlug: string): SubService[] {
  return allSubServices.filter((s) => s.categorySlug === categorySlug);
}
