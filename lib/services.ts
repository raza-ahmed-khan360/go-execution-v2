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
  relatedBlogSlugs?: string[];
};

const serviceVisuals: Record<string, string> = {
  "web-development": "/assets/images/generated/service_web_dev_hero.jpg",
  seo: "/assets/images/generated/service_seo_hero.jpg",
  "digital-marketing": "/assets/images/generated/service_digital_marketing_hero.jpg",
  "design-branding": "/assets/images/generated/service_branding_hero.jpg",
  video: "/assets/images/generated/video-motion.jpg",
  "mobile-app-development": "/assets/images/generated/mobile-apps.jpg",
};

export const serviceCategories: Record<string, ServiceCategory> = {
  "web-development": {
    slug: "web-development",
    title: "Web Development Services",
    seoTitle: "Web Development Company USA & Web Agency | Go Execution",
    eyebrow: "Enterprise Web Engineering & Architectures",
    description: "Custom web development for US businesses, including Next.js, WordPress, ecommerce, landing pages, redesigns, and performance optimization.",
    intro: "We build sub-second web platforms engineered for maximum search visibility, enterprise security, and seamless user experiences across all devices.",
    image: serviceVisuals["web-development"],
    capabilities: [
      "Custom Web Development USA",
      "Enterprise WordPress Development USA",
      "Next.js Development Services & Applications",
      "Ecommerce Web Development USA",
      "Landing Page Design and Development",
      "Website Redesign Services USA",
      "Website Speed Optimization Services"
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
    seoTitle: "SEO Services USA | Go Execution",
    eyebrow: "Search Engine Optimization & Organic Growth",
    description: "SEO services for US businesses covering technical SEO, local search, ecommerce SEO, content strategy, and measurable organic growth.",
    intro: "We eliminate technical crawl barriers, engineer topical keyword authority, and secure high-intent search rankings that turn organic search into a predictable revenue stream.",
    image: serviceVisuals.seo,
    capabilities: [
      "Technical SEO Services & Audits",
      "Local SEO Services USA & Maps Optimization",
      "Ecommerce SEO Services & Revenue Growth",
      "Small Business SEO Services & Strategy"
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
    seoTitle: "Digital Marketing Services USA & Agency | Go Execution",
    eyebrow: "Performance Marketing & Customer Acquisition",
    description: "Digital marketing services for US businesses, combining PPC, content, social media, and conversion optimization to generate qualified demand.",
    intro: "We unify paid search, social ad creatives, content strategy, and conversion rate optimization into a single accountable customer acquisition engine.",
    image: serviceVisuals["digital-marketing"],
    capabilities: [
      "Content Marketing Services & Strategy",
      "Social Media Marketing Services USA",
      "PPC Management Services USA & Google Ads",
      "Conversion Rate Optimization Services (CRO)"
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
    seoTitle: "Branding Agency USA & Graphic Design Services | Go Execution",
    eyebrow: "Strategic Brand Identity & Graphic Design",
    description: "Branding and graphic design for US businesses, including logo design, visual identity systems, campaign assets, and creative direction.",
    intro: "We shape visual identities that command authority, build instant consumer trust, and differentiate your brand across every digital touchpoint.",
    image: serviceVisuals["design-branding"],
    capabilities: [
      "Graphic Design Services USA",
      "Logo Design Services USA",
      "Brand Identity Design Services",
      "Creative Design Services & Visual Media"
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
    seoTitle: "Video Animation Services USA | Go Execution",
    eyebrow: "High-Impact Video Motion & Animation",
    description: "Video animation for US businesses, including 2D animation, 3D product visuals, explainers, motion graphics, and campaign videos.",
    intro: "We translate complex value propositions into engaging visual stories, high-end motion graphics, and conversion-focused animated explainer videos.",
    image: serviceVisuals.video,
    capabilities: [
      "Video Animation Services & Motion Graphics",
      "2D Animation Services & Character Art",
      "3D Animation Services & Product Renders",
      "Explainer Video Services & Production"
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
    seoTitle: "Mobile App Development Company USA | Go Execution",
    eyebrow: "Native & Cross-Platform Mobile Engineering",
    description: "Custom mobile app development for US businesses, covering product strategy, UX, iOS, Android, cross-platform builds, and launch support.",
    intro: "We build intuitive, high-speed mobile experiences that connect businesses directly with users on iOS and Android platforms.",
    image: serviceVisuals["mobile-app-development"],
    capabilities: [
      "Mobile App Development Services USA",
      "Custom iOS & Android App Development",
      "Cross-Platform React Native & Flutter Apps",
      "Mobile Backend API & App Store Publishing"
    ],
    subServiceSlugs: [
      "custom-mobile-app-development"
    ]
  }
};

const subServiceEntries: Record<string, SubService> = {
  // --- WEB DEVELOPMENT ---
  "custom-web-development": {
    slug: "custom-web-development",
    categorySlug: "web-development",
    title: "Custom Web Development",
    seoTitle: "Custom Web Development Services & Agency | Go Execution",
    eyebrow: "Bespoke Website Development & Custom Web Applications",
    description: "Looking for a custom web development company? We provide custom web development services, bespoke website development, and web app engineering.",
    intro: "Off-the-shelf templates limit your brand's growth and operational scalability. As a premier custom web development agency, we engineer high-performance digital platforms built precisely for your unique business requirements. Whether you need a complex SaaS architecture or custom web application development services, our team delivers seamless, scalable solutions. When you hire a top-tier custom website developer, you ensure your platform integrates perfectly with your existing CRM, ERP, and marketing stacks.",
    overview: "We are a full-cycle custom web development company specializing in bespoke website development, API integrations, and robust server-side architectures.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Custom Web Development Services",
      "Bespoke Website Development",
      "Custom Web Application Development Services",
      "API Integration & Architecture"
    ],
    process: [
      ["Discovery & Architecture", "Mapping your exact database schema, user flows, and tech stack requirements."],
      ["UI/UX & Wireframing", "Designing intuitive, conversion-focused interfaces tailored to your audience."],
      ["Custom Web Development", "Writing clean, scalable code for both frontend and robust backend systems."],
      ["QA, Security & Launch", "Rigorous testing, vulnerability scanning, and seamless deployment."]
    ],
    faq: [
      ["Why should we hire a custom web development agency over using a template?", "A custom web development company builds scalable architectures that don't suffer from template bloat, ensuring sub-second load times and exact feature matches."],
      ["Do you provide custom web application development services?", "Yes, as a specialized custom website developer, we build complex web apps, client portals, and secure enterprise dashboards."]
    ],
    relatedServices: ["nextjs-development", "wordpress-development"],
    relatedIndustries: ["technology", "professional-services"],
    relatedBlogSlugs: ["custom-web-development-vs-website-builders", "how-much-does-custom-web-development-cost", "cost-of-poor-core-web-vitals-inp"]
  },
  "wordpress-development": {
    slug: "wordpress-development",
    categorySlug: "web-development",
    title: "WordPress Development",
    seoTitle: "WordPress Development Agency & Services | Go Execution",
    eyebrow: "Custom WordPress Development Services & Theme Design",
    description: "Looking for a top WordPress development company? We offer custom WordPress development services, theme design, and enterprise CMS solutions.",
    intro: "While WordPress powers the web, relying on bloated templates hinders both site performance and SEO. As a premier WordPress development agency, we engineer lightning-fast, highly secure websites built from the ground up. Whether you need custom WordPress development services or robust plugin architecture, our team delivers enterprise-grade solutions. When you partner with a specialized WordPress web design agency, you get a scalable platform that matches your brand's unique operational needs without the limitations of off-the-shelf themes.",
    overview: "We are a full-service custom WordPress development company specializing in bespoke theme creation, headless CMS architectures, and comprehensive WordPress website development services.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "WordPress Development Services",
      "Custom WordPress Development Company",
      "WordPress Web Design Agency",
      "WordPress Website Development Services"
    ],
    process: [
      ["CMS Architecture", "Structuring post types, taxonomies, and ACF (Advanced Custom Fields) for easy content management."],
      ["Custom Theme Design", "Building lightweight, bespoke themes from scratch for maximum Core Web Vitals performance."],
      ["Plugin Engineering", "Developing custom plugins for complex API integrations and backend functionality."],
      ["Security & Launch", "Hardening server security, database optimization, and seamless migration."]
    ],
    faq: [
      ["Why should we hire a specialized WordPress development agency?", "A specialized WordPress development company writes clean, custom code instead of relying on heavy page builders, ensuring much faster load times and better SEO rankings."],
      ["Do you provide custom WordPress development services for eCommerce?", "Yes! Our WordPress website development services fully integrate WooCommerce with custom checkout flows and inventory management systems."]
    ],
    relatedServices: ["custom-web-development", "technical-seo"],
    relatedIndustries: ["retail", "fashion"],
    relatedBlogSlugs: ["wordpress-vs-nextjs-for-business-websites", "cost-of-poor-core-web-vitals-inp", "technical-seo-audit-checklist"]
  },
  "nextjs-development": {
    slug: "nextjs-development",
    categorySlug: "web-development",
    title: "Next.js Development",
    seoTitle: "Next.js Development Company & Agency | Go Execution",
    eyebrow: "Sub-Second Load Times & Edge Rendering",
    description: "Looking for a specialized Next.js development company? We are a Next.js website development agency building fast, scalable React applications.",
    intro: "Modern users abandon slow websites. As a top-tier Next.js development company, we engineer React-based web applications that load in milliseconds and dominate Google's Core Web Vitals. Whether you need to migrate a legacy monolithic system or build a complex SaaS platform from scratch, our Next.js website development agency implements Server-Side Rendering (SSR) and Static Site Generation (SSG) for unmatched speed and SEO. Partner with a specialized Next.js website agency to future-proof your digital architecture.",
    overview: "We are a full-cycle Next.js development agency specializing in headless CMS integrations, custom React components, and enterprise-grade frontend scaling.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Next.js Development Company",
      "Next.js Website Development Agency",
      "Next.js Website Design Agency",
      "Headless Next.js E-Commerce"
    ],
    process: [
      ["Architecture & Vercel Setup", "Configuring the optimal rendering strategy (SSR, SSG, ISR) for your specific data needs."],
      ["React Component Design", "Our Next.js website design agency crafts reusable, accessible UI components."],
      ["API & Headless CMS Sync", "Integrating Contentful, Sanity, or Shopify via secure serverless functions."],
      ["Edge Deployment", "Deploying to Vercel or AWS Amplify for global edge-network content delivery."]
    ],
    faq: [
      ["Why hire a specialized Next.js development company?", "A specialized Next.js development agency understands advanced caching, React server components, and how to achieve perfect 100/100 Lighthouse performance scores."],
      ["Is Next.js good for SEO?", "Yes, it is the best React framework for SEO. Our Next.js website development agency uses Server-Side Rendering so Google bots can instantly crawl your content."]
    ],
    relatedServices: ["custom-web-development", "technical-seo"],
    relatedIndustries: ["technology", "e-commerce"],
    relatedBlogSlugs: ["wordpress-vs-nextjs-for-business-websites", "cost-of-poor-core-web-vitals-inp", "nextjs-replacing-headless-shopify-enterprise-ecommerce"]
  },
  "ecommerce-development": {
    slug: "ecommerce-development",
    categorySlug: "web-development",
    title: "E-Commerce Development",
    seoTitle: "Ecommerce Web Development USA | Ecommerce Website Company",
    eyebrow: "High-Converting Online Storefronts",
    description: "Ecommerce development for fast, conversion-focused online stores, including Shopify, WooCommerce, custom storefronts, and integrations.",
    intro: "We engineer online storefronts with custom ecommerce development, mobile-first navigation, and rapid page load speeds that turn store visitors into repeat buyers.",
    overview: "As a top ecommerce website development company, whether you need Shopify or custom headless commerce, we build storefronts that maximize sales.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Ecommerce Web Development USA Storefronts",
      "Ecommerce Website Development Services",
      "Ecommerce Development Agency USA Engineering",
      "Custom Ecommerce Development & Payment Gateways"
    ],
    process: [
      ["Storefront Strategy", "Analyzing product catalogs, customer journeys, and conversion paths."],
      ["UX & Checkout Design", "Crafting intuitive product pages and one-click checkout flows."],
      ["Custom Store Engineering", "Developing custom themes, app integrations, and inventory feeds."],
      ["Launch & CRO Testing", "Continuous A/B testing post-launch to increase conversion rates."]
    ],
    faq: [
      ["Which ecommerce development agency platform do you recommend?", "Shopify is ideal for rapid scaling, while custom ecommerce web development offers ultimate performance."],
      ["Do you migrate existing stores without losing SEO rankings?", "Yes! We manage full URL mapping, 301 redirects, and data migrations to protect rankings."]
    ],
    relatedServices: ["custom-web-development", "website-performance"],
    relatedIndustries: ["fashion", "retail"],
    relatedBlogSlugs: ["nextjs-replacing-headless-shopify-enterprise-ecommerce", "why-reddit-hates-headless-shopify", "top-nextjs-development-agencies-ecommerce"]
  },
  "landing-page-development": {
    slug: "landing-page-development",
    categorySlug: "web-development",
    title: "Landing Page Development",
    seoTitle: "Landing Page Design & Development USA | Landing Page Agency",
    eyebrow: "Precision Paid Traffic Acquisition Pages",
    description: "Landing page design and development for campaigns that need clear messaging, fast performance, strong UX, and measurable conversion paths.",
    intro: "Don't waste ad spend on slow, generic pages. Our landing page design agency builds high converting landing pages engineered to convert ad clicks into revenue.",
    overview: "Our landing page development USA services pair psychological copy, sub-second load speeds, and clear conversion focused landing page design.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Landing Page Design and Development",
      "Landing Page Development USA Campaigns",
      "Landing Page Design Agency UI/UX",
      "High Converting Landing Pages & CRO Copy"
    ],
    process: [
      ["Campaign Copy & Wireframing", "Drafting high-intent persuasive copy and layout structure."],
      ["High-Impact Visual Design", "Designing brand-aligned UI with clear focal conversion elements."],
      ["Fast Light Code Build", "Building clean code with instant form submission response."],
      ["Analytics & Event Tracking", "Setting up GA4 event tracking and conversion goals."]
    ],
    faq: [
      ["How fast can your landing page design agency launch a lander?", "Standard landing page design and development projects are delivered within 5 to 7 business days."],
      ["Why are high converting landing pages critical for ad campaigns?", "Dedicated conversion focused landing page design dramatically lowers Cost Per Lead (CPL) compared to generic site pages."]
    ],
    relatedServices: ["paid-advertising", "conversion-optimisation"],
    relatedIndustries: ["real-estate", "professional-services"],
    relatedBlogSlugs: ["custom-web-development-vs-website-builders", "cost-of-poor-core-web-vitals-inp", "how-much-does-custom-web-development-cost"]
  },
  "website-redesign": {
    slug: "website-redesign",
    categorySlug: "web-development",
    title: "Website Redesign",
    seoTitle: "Website Redesign Services USA | Website Redesign Company",
    eyebrow: "Modernizing Brand Digital Presence",
    description: "Website redesign services that improve UX, conversion, mobile performance, and SEO while protecting important content and URLs.",
    intro: "Transform your outdated website into a modern market leader with our website redesign company, preserving historical search engine rankings and domain authority.",
    overview: "Our website redesign agency analyzes current site performance, rebuilds user journeys, modernizes visual branding, and executes seamless 301 SEO migrations.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Website Redesign Services USA",
      "Website Redesign Company Strategy",
      "Website Redesign Agency USA Migrations",
      "Redesign Website for Better Conversions & Speed"
    ],
    process: [
      ["SEO Audit & URL Mapping", "Cataloging all existing URLs and ranking assets before design starts."],
      ["Brand Modernization", "Designing state-of-the-art UI components and interactive layouts."],
      ["Next.js / WordPress Rebuild", "Engineering sub-second performance code with modern frameworks."],
      ["Seamless 301 Migration Launch", "Executing 301 redirect maps to guarantee 0 ranking loss."]
    ],
    faq: [
      ["Will website redesign services USA harm our existing Google rankings?", "Not with Go Execution. Our website redesign agency follows strict SEO migration protocols."],
      ["How do we know if our business needs to redesign a website for better conversions?", "If your site loads in over 2.5 seconds or has low mobile conversion rates, a professional website redesign company is essential."]
    ],
    relatedServices: ["custom-web-development", "technical-seo"],
    relatedIndustries: ["professional-services", "technology"],
    relatedBlogSlugs: ["how-to-redesign-a-website-without-losing-seo", "custom-web-development-vs-website-builders", "how-much-does-custom-web-development-cost"]
  },
  "website-performance": {
    slug: "website-performance",
    categorySlug: "web-development",
    title: "Website Speed & Performance",
    seoTitle: "Website Speed Optimization Services | Go Execution",
    eyebrow: "Sub-second Loading & Core Web Vitals",
    description: "Website speed optimization focused on Core Web Vitals, image delivery, JavaScript efficiency, server response, and stable page rendering.",
    intro: "Every 100ms delay costs revenue. Our website speed optimization services resolve JavaScript execution bottlenecks, media assets, and server delivery.",
    overview: "Our website performance optimization engineers eliminate render-blocking scripts and optimize Core Web Vitals to maximize search visibility and conversions.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Website Speed Optimization Services USA",
      "Website Performance Optimization & Audits",
      "Page Speed Optimization Services & Minification",
      "Core Web Vitals Optimization (LCP, INP, CLS)"
    ],
    process: [
      ["Diagnostic Performance Audit", "Identifying exact scripts and assets slowing down your website."],
      ["Frontend Code Optimization", "Deferring non-critical scripts, compressing assets, and cleaning CSS."],
      ["Server & CDN Hardening", "Configuring edge caching, HTTP/3, and Gzip/Brotli compression."],
      ["Verification & Reporting", "Verifying green Core Web Vitals scores in Search Console and PageSpeed."]
    ],
    faq: [
      ["Why do website speed optimization services impact Google rankings?", "Google explicitly uses Core Web Vitals optimization metrics as key page experience ranking factors."],
      ["Can page speed optimization services accelerate WordPress or Shopify sites?", "Yes! We optimize database queries, remove heavy scripts, and implement advanced CDN caching."]
    ],
    relatedServices: ["wordpress-development", "technical-seo"],
    relatedIndustries: ["fashion", "retail"],
    relatedBlogSlugs: ["cost-of-poor-core-web-vitals-inp", "wordpress-vs-nextjs-for-business-websites", "what-is-technical-seo"]
  },
  "technical-seo": {
    slug: "technical-seo",
    categorySlug: "seo",
    title: "Technical SEO",
    seoTitle: "Technical SEO Services USA | Go Execution",
    eyebrow: "Search Engine Infrastructure & Indexing",
    description: "Technical SEO audits and implementation for crawlability, indexation, canonicals, schema, sitemaps, rendering, and site architecture.",
    intro: "Search engines cannot rank content they cannot properly crawl or index. Our technical SEO services audit and resolve deep technical infrastructure barriers.",
    overview: "As a specialized technical SEO agency, we fix crawl errors, implement schema graph markups, clean XML sitemaps, and optimize JavaScript rendering.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Technical SEO Services & Infrastructure",
      "Technical SEO Agency USA Audits",
      "Technical SEO Company Solutions",
      "Technical Website SEO & Schema Graphs"
    ],
    process: [
      ["Deep Technical Audit", "Scanning site architecture with Screaming Frog and Search Console."],
      ["Crawl Barrier Fixes", "Resolving 404s, redirect loops, and duplicate content issues."],
      ["Schema Graph Deployment", "Adding structured JSON-LD data for Organization, Services, and Articles."],
      ["Search Console Monitoring", "Verifying clean indexing coverage in Google Search Console."]
    ],
    faq: [
      ["What is included in technical SEO services?", "Technical SEO audit services ensure search crawlers can index, render, and understand your website codebase cleanly."],
      ["How quickly do fixes from a technical SEO company show results?", "Indexing and crawl improvements typically reflect in Search Console within 1 to 3 weeks."]
    ],
    relatedServices: ["website-performance", "local-seo"],
    relatedIndustries: ["technology", "real-estate"],
    relatedBlogSlugs: ["what-is-technical-seo", "why-is-my-website-not-ranking-on-google", "cost-of-poor-core-web-vitals-inp"]
  },
  "local-seo": {
    slug: "local-seo",
    categorySlug: "seo",
    title: "Local SEO Services",
    seoTitle: "Local SEO Services USA | Local SEO Agency & Google Maps SEO",
    eyebrow: "Dominating Local Search & Map Packs",
    description: "Local SEO services that improve Google Maps and local search visibility through profiles, location pages, citations, and technical optimization.",
    intro: "Capture ready-to-buy customers in your target area. Our local SEO services USA optimize Google Business Profiles and establish local search engine optimization authority.",
    overview: "Our local SEO agency strategies drive qualified calls and walk-in inquiries by claiming dominant Google Maps SEO rankings across your service areas.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Local SEO Services USA",
      "Local SEO Agency & Map Pack Dominance",
      "Local SEO Company USA Citations",
      "Google Maps SEO & Local Search Engine Optimization"
    ],
    process: [
      ["GBP & Audit Setup", "Claiming, verifying, and optimizing your Google Business Profile."],
      ["Local Keyword Mapping", "Identifying geo-targeted search terms with high buying intent."],
      ["Citation Building", "Distributing accurate business NAP across top local directories."],
      ["Monthly Tracking & Reporting", "Monitoring map rankings, phone calls, and direction requests."]
    ],
    faq: [
      ["How do local SEO services USA differ from general SEO?", "A local SEO company focuses specifically on Google Maps SEO, geo-targeted search terms, and local citations."],
      ["How fast can a local SEO agency improve Google Map rankings?", "Most clients see significant Google Map pack movement within 60 to 90 days."]
    ],
    relatedServices: ["technical-seo", "small-business-seo"],
    relatedIndustries: ["health-wellness", "hospitality"],
    relatedBlogSlugs: ["local-seo-for-franchises-multi-location", "why-is-my-website-not-ranking-on-google", "how-long-does-seo-take-for-new-website"]
  },
  "ecommerce-seo": {
    slug: "ecommerce-seo",
    categorySlug: "seo",
    title: "E-Commerce SEO",
    seoTitle: "Ecommerce SEO Services & Ecommerce SEO Agency | Go Execution",
    eyebrow: "Organic Product & Category Revenue",
    description: "Ecommerce SEO for Shopify and WooCommerce stores, covering product architecture, technical issues, category content, and organic revenue growth.",
    intro: "Stop relying solely on paid ad spend. Our ecommerce SEO services rank product categories and high-intent commercial terms at the top of Google search results.",
    overview: "As a dedicated ecommerce SEO agency, we optimize product titles, schema markup, collection page copy, and internal linking to maximize organic sales.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Ecommerce SEO Services & Category Optimization",
      "Ecommerce SEO Agency & Merchant Center",
      "Ecommerce SEO Company Technical Strategy",
      "Ecommerce Search Engine Optimization & Shopify SEO Services"
    ],
    process: [
      ["Catalog & Keyword Audit", "Mapping high-volume commercial keywords to product categories."],
      ["On-Page Category Optimization", "Writing compelling, keyword-rich copy for collection pages."],
      ["Technical E-Commerce Fixes", "Managing duplicate product parameter URLs and canonicals."],
      ["Revenue Tracking", "Measuring organic search revenue and transaction growth in GA4."]
    ],
    faq: [
      ["Do you offer specialized Shopify SEO services?", "Yes! Our ecommerce SEO company implements custom Shopify schema, clean collection tags, and optimized category content."],
      ["How does an ecommerce SEO agency handle out-of-stock products?", "We apply strategic canonicals or 301 redirects to preserve link authority and user experience."]
    ],
    relatedServices: ["ecommerce-development", "technical-seo"],
    relatedIndustries: ["fashion", "retail"],
    relatedBlogSlugs: ["enterprise-seo-vs-traditional-seo", "why-is-my-website-not-ranking-on-google", "nextjs-replacing-headless-shopify-enterprise-ecommerce"]
  },
  "small-business-seo": {
    slug: "small-business-seo",
    categorySlug: "seo",
    title: "Small Business SEO",
    seoTitle: "Small Business SEO Services USA | Small Business SEO Agency",
    eyebrow: "Cost-Effective Organic Business Growth",
    description: "Small business SEO combining technical fixes, local visibility, content planning, and practical reporting focused on qualified leads.",
    intro: "Level the playing field against larger market competitors with targeted small business SEO services tailored for growing US service providers.",
    overview: "Our small business SEO agency focuses on high-intent buyer search terms, affordable SEO for small business packages, and transparent ROI reporting.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Small Business SEO Services USA",
      "Small Business SEO Agency Strategy",
      "SEO for Small Businesses & Lead Generation",
      "Affordable SEO for Small Business & Search Optimization"
    ],
    process: [
      ["Competitor Analysis", "Identifying gaps where smaller businesses can quickly outrank market leaders."],
      ["Service Page Optimization", "Optimizing core commercial pages around exact service offerings."],
      ["Local Citation & Link Building", "Building genuine local backlink authority and directory listings."],
      ["Monthly Lead Tracking", "Tracking organic form submissions, calls, and business inquiries."]
    ],
    faq: [
      ["Why invest in small business SEO services?", "Targeted small business search engine optimization generates a predictable pipeline of qualified leads without perpetual ad costs."],
      ["Is affordable SEO for small business effective?", "Yes! We focus strictly on high-ROI commercial keywords that convert local searchers into paying clients."]
    ],
    relatedServices: ["local-seo", "website-redesign"],
    relatedIndustries: ["professional-services", "health-wellness"],
    relatedBlogSlugs: ["how-long-does-seo-take-for-new-website", "why-is-my-website-not-ranking-on-google", "best-b2b-seo-agencies-reddit-reviews"]
  },

  // --- DIGITAL MARKETING ---
  "content-marketing": {
    slug: "content-marketing",
    categorySlug: "digital-marketing",
    title: "B2B Content Marketing",
    seoTitle: "B2B Content Marketing Agency | Expert Content Creation Services",
    eyebrow: "Revenue-Driven Thought Leadership",
    description: "Go Execution is a premier B2B content marketing agency offering strategic content creation services, content development, and SEO content marketing.",
    intro: "Quality content is the engine of enterprise growth. As a specialized B2B content marketing agency, we research, draft, and publish high-authority assets that nurture complex buying committees.",
    overview: "Unlike a generic content marketing company, we operate as a dedicated B2B marketing agency and content marketing consultancy. Our strategists engineer SEO content marketing campaigns aligned with real search intent and long B2B sales cycles. From foundational content development and pipeline-focused blog writing to comprehensive content creation services, our B2B digital marketing agency ensures your thought leadership drives measurable revenue.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "B2B Content Marketing Agency Strategy",
      "Enterprise Content Creation Services",
      "SEO Content Marketing & Content Development",
      "B2B Digital Marketing Agency Lead Magnets"
    ],
    process: [
      ["Topical Research", "Our content marketing consultancy identifies high-value questions your target enterprise customers are asking."],
      ["Expert Content Creation", "Writing in-depth, well-researched articles and whitepapers that demonstrate industry authority."],
      ["Pipeline Alignment", "Integrating strategic internal links and calls-to-action to support the B2B sales cycle."],
      ["Performance Review", "Tracking traffic engagement, lead conversions, and pipeline influence generated by our content development."]
    ],
    faq: [
      ["What makes a B2B content marketing agency different?", "A dedicated B2B marketing agency understands long sales cycles, buying committees, and complex technical concepts, unlike B2C content mills."],
      ["Do you provide SEO content marketing?", "Yes, as a full-suite B2B digital marketing agency, our content creation services are deeply integrated with SEO strategies to ensure maximum organic visibility and lead generation."]
    ],
    relatedServices: ["social-media-marketing", "paid-advertising"],
    relatedIndustries: ["technology", "professional-services"],
    relatedBlogSlugs: ["b2b-saas-seo-strategy", "enterprise-seo-vs-traditional-seo", "how-long-does-seo-take-for-new-website"]
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    categorySlug: "digital-marketing",
    title: "B2B Social Media Marketing",
    seoTitle: "B2B Social Media Marketing Agency | Expert Management Services",
    eyebrow: "Enterprise Social Engagement & Lead Gen",
    description: "Go Execution is a premier B2B social media agency specializing in B2B social media marketing strategy, lead generation, and corporate account management.",
    intro: "Turn professional networks into measurable pipeline influence. As a dedicated B2B social media marketing agency, we build executive credibility and generate enterprise leads on LinkedIn and beyond.",
    overview: "Consumer social strategies fail in the corporate world. We are a specialized B2B social media agency focused entirely on long sales cycles, buying committees, and complex industries. Our B2B social media marketing services encompass executive thought leadership, employee advocacy, and precision ABM campaigns. We execute a comprehensive B2B social media strategy designed to establish market authority and drive measurable social media B2B lead generation.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "B2B Social Media Marketing Agency Strategy",
      "Executive Thought Leadership & Ghostwriting",
      "Social Media B2B Lead Generation",
      "Corporate Social Media Content Creation Services"
    ],
    process: [
      ["Executive Discovery", "We analyze your leadership voices and define a clear B2B social media strategy tailored to your industry."],
      ["Asset Production", "Delivering high-end social media content creation services, transforming whitepapers into engaging carousels and posts."],
      ["Targeted Distribution", "Deploying native content and executing precise LinkedIn ABM campaigns to reach key decision-makers."],
      ["Pipeline Analytics", "Tracking direct pipeline influence and ROI from our B2B social media marketing services."]
    ],
    faq: [
      ["What makes a B2B social media agency different?", "A true B2B social media marketing agency understands how to market complex services to buying committees rather than relying on viral consumer trends."],
      ["Can social media actually drive enterprise sales?", "Absolutely. Our social media B2B lead generation tactics specifically target decision-makers through thought leadership and precise account-based marketing (ABM)."]
    ],
    relatedServices: ["paid-advertising", "content-marketing"],
    relatedIndustries: ["technology", "professional-services"],
    relatedBlogSlugs: ["b2b-saas-seo-strategy", "custom-web-development-vs-website-builders", "why-is-my-website-not-ranking-on-google"]
  },
  "paid-advertising": {
    slug: "paid-advertising",
    categorySlug: "digital-marketing",
    title: "B2B PPC & Paid Media",
    seoTitle: "B2B PPC Agency | Enterprise Paid Media & Adwords Management",
    eyebrow: "Pipeline-Driven B2B Advertising",
    description: "Go Execution is a premier B2B PPC agency specializing in pipeline generation, B2B advertising, and enterprise paid media management.",
    intro: "Eliminate wasted ad spend with a high-performing B2B paid media approach. As a dedicated B2B PPC agency, we turn paid advertising into a predictable revenue channel for enterprise brands.",
    overview: "Managing B2B PPC campaigns requires entirely different mechanics than consumer ads. As a specialized B2B advertising agency, we focus on pipeline creation, LTV:CAC ratios, and targeting highly specific buying committees. Whether it is enterprise Adwords management, account-based LinkedIn strategies, or scaling as your core media buying agency, our B2B paid media agency model ensures every dollar spent is directly attributed to qualified sales opportunities.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "B2B PPC Agency Strategy & Execution",
      "Enterprise Adwords Agency Management",
      "B2B Paid Media Agency & Pipeline Attribution",
      "LinkedIn ABM & B2B Advertising Agency Campaigns"
    ],
    process: [
      ["Firmographic Targeting", "Using advanced data layers to target exact job titles, company sizes, and industries."],
      ["Campaign Restructuring", "Organizing Google Ads and paid media into tight, intent-based ad groups."],
      ["Creative & Copy", "Developing technical, value-driven ad copy tailored to B2B buying stages."],
      ["Pipeline Optimization", "Bidding directly to CRM pipeline metrics, not just cheap top-of-funnel clicks."]
    ],
    faq: [
      ["What is the difference between a B2B PPC agency and a regular paid ads agency?", "A B2B PPC agency optimizes for CRM pipeline and long sales cycles using firmographic targeting, rather than just optimizing for cheap clicks or immediate e-commerce checkouts."],
      ["Do you act as a full-service media buying agency?", "Yes. We manage multi-channel B2B advertising campaigns across Google Search, LinkedIn, and targeted programmatic platforms to capture enterprise intent."]
    ],
    relatedServices: ["landing-page-development", "conversion-optimisation"],
    relatedIndustries: ["technology", "professional-services"],
    relatedBlogSlugs: ["cost-of-poor-core-web-vitals-inp", "how-much-does-custom-web-development-cost", "b2b-saas-seo-strategy"]
  },
  "conversion-optimisation": {
    slug: "conversion-optimisation",
    categorySlug: "digital-marketing",
    title: "B2B Conversion Rate Optimization",
    seoTitle: "B2B CRO Agency | Conversion Rate Optimization Services",
    eyebrow: "Maximize Pipeline Conversions",
    description: "Go Execution is a premier B2B CRO agency offering data-driven conversion rate optimization services to increase enterprise lead volume.",
    intro: "Stop losing enterprise buyers to a confusing website journey. As a dedicated B2B CRO agency, we optimize complex SaaS and B2B websites to turn traffic into qualified pipeline.",
    overview: "Consumer CRO focuses on simple cart checkouts. B2B conversion rate optimization is entirely different—it requires navigating multi-stakeholder purchasing paths and complex technical messaging. Our CRO agency provides rigorous funnel research, heatmapping, and A/B testing designed exclusively for B2B. From optimizing demo request funnels to simplifying value propositions for procurement teams, our conversion rate optimization services lift your average conversion rates to generate measurable B2B revenue.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "B2B CRO Agency Services",
      "Enterprise Funnel & UX Audits",
      "B2B Conversion Rate Optimization",
      "A/B Testing & Pipeline Revenue Optimization"
    ],
    process: [
      ["Buyer Behavior Analysis", "Using session recordings, heatmaps, and enterprise analytics to identify B2B drop-off points."],
      ["Messaging & Friction Audit", "Refining complex B2B value propositions so decision-makers understand them instantly."],
      ["Lead Funnel Optimization", "Revamping demo request pages, pricing calculators, and enterprise contact forms."],
      ["Scientific A/B Testing", "Validating all CRO agency changes statistically before deploying permanent site updates."]
    ],
    faq: [
      ["Why do I need a specialized B2B CRO agency?", "A standard cro agency focuses on D2C cart friction. A B2B CRO agency understands how to optimize long, complex enterprise sales cycles and high-value lead forms."],
      ["What results can we expect from B2B conversion rate optimization services?", "Our conversion rate optimization services typically deliver a significant lift in qualified demo requests, MQLs, and ultimately, closed revenue pipeline."]
    ],
    relatedServices: ["landing-page-development", "paid-advertising"],
    relatedIndustries: ["technology", "professional-services"],
    relatedBlogSlugs: ["cost-of-poor-core-web-vitals-inp", "how-much-does-custom-web-development-cost", "b2b-saas-seo-strategy"]
  },

  // --- DESIGN & BRANDING ---
  "graphic-design": {
    slug: "graphic-design",
    categorySlug: "design-branding",
    title: "Graphic Design Services",
    seoTitle: "Graphic Design Services | Branding & Creative Design Agency",
    eyebrow: "Full Service Graphic Design & Visual Assets",
    description: "Go Execution is a premier website graphic design agency offering creative design services, illustration design, and complete branding and graphic design services.",
    intro: "First impressions are decided in milliseconds. Our comprehensive branding and graphic design services engineer visual assets that demand attention, communicate trust, and accelerate conversions for ambitious B2B and B2C brands.",
    overview: "As a leading graphic design services company, we provide full service graphic design tailored to scale with your business. Whether you need content design services for social media, complex B2B sales collateral, or illustration design services to simplify your SaaS product, our team acts as your dedicated creative partner. We operate far beyond basic aesthetics—positioning ourselves as a specialized website graphic design agency that integrates stunning visuals with high-performance digital marketing. Enjoy the flexibility of graphic design as a service, delivering consistent, top-tier creative design services exactly when you need them.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Branding and Graphic Design Services",
      "Creative Graphic Design Services & Strategy",
      "Website Graphic Design Agency Integration",
      "Illustration Design Services & Custom Vectors",
      "Content Design Services for Digital Marketing"
    ],
    process: [
      ["Strategic Discovery", "We evaluate your brand guidelines, target audience, and campaign objectives before providing any creative graphic design services."],
      ["Concept Development", "Our design team develops high-fidelity visual concepts that align with your required deliverables."],
      ["Refinement Cycles", "We collaborate closely to iterate and perfect the visual hierarchy, typography, and color balance."],
      ["Asset Handoff", "You receive fully organized, production-ready files (Vector AI, EPS, PDF, WebP) with 100% commercial ownership."]
    ],
    faq: [
      ["Do you provide graphic design as a service (retainer model)?", "Yes, we offer graphic design as a service for enterprise clients who need ongoing, full service graphic design without the overhead of hiring an internal team."],
      ["What is included in your creative design services?", "Our creative design services cover digital advertising creatives, social media content, corporate pitch decks, whitepapers, UI/UX asset creation, and custom illustration design services."],
      ["Why hire a dedicated graphic design services company?", "Partnering with a specialized graphic design services company ensures your visual assets are built strategically to drive conversions. As a top website graphic design agency, we ensure brand consistency across every single digital touchpoint."]
    ],
    relatedServices: ["logo-design", "brand-identity", "creative-design"],
    relatedIndustries: ["technology", "professional-services", "retail"],
    relatedBlogSlugs: ["custom-web-development-vs-website-builders", "how-to-redesign-a-website-without-losing-seo"]
  },
  "logo-design": {
    slug: "logo-design",
    categorySlug: "design-branding",
    title: "B2B Logo Design",
    seoTitle: "B2B Logo Design | Professional Logo Design Agency",
    eyebrow: "Distinctive & Timeless Brand Symbols",
    description: "Go Execution is a professional logo design agency specializing in B2B logo design. We craft scalable, timeless B2B logos that communicate corporate authority.",
    intro: "Your logo is the cornerstone of your corporate identity. Our professional logo design agency crafts timeless, authoritative B2B logos that convey instant market leadership and trust to enterprise clients.",
    overview: "Consumer logos are playful; B2B logos must project reliability, scalability, and corporate authority. We specialize in B2B logo design that works flawlessly across complex digital products, investor pitch decks, and physical touchpoints. From designing a primary b2b logo to engineering responsive lockups and icon systems, we ensure your brand symbol stands out in the competitive corporate landscape.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Custom B2B Logo Design",
      "Corporate Iconography & Vectoring",
      "Responsive Logo Architecture",
      "Professional Logo Design Agency Services"
    ],
    process: [
      ["Corporate Discovery", "We analyze your B2B market positioning, enterprise competitors, and target audience."],
      ["Conceptual Sketching", "Our design team explores unique icon concepts that project authority and trust."],
      ["Digital Vectorization", "We engineer precise vector geometry in Adobe Illustrator for infinite scalability."],
      ["Master Asset Delivery", "You receive all master files (SVG, EPS, PNG, PDF) for your new B2B logo."]
    ],
    faq: [
      ["What makes a great B2B logo design?", "Unlike B2C logos, B2B logos require a higher degree of trust and authority. A great B2B logo is simple, highly legible at small sizes, and relies on structural geometry rather than complex illustrations."],
      ["How many concepts does your professional logo design agency provide?", "We present 3 to 5 distinct b2b logo design directions for your executive team to evaluate, ensuring we capture your company's core values."]
    ],
    relatedServices: ["brand-identity", "graphic-design"],
    relatedIndustries: ["technology", "professional-services", "health-wellness"],
    relatedBlogSlugs: ["custom-web-development-vs-website-builders", "how-to-redesign-a-website-without-losing-seo"]
  },
  "brand-identity": {
    slug: "brand-identity",
    categorySlug: "design-branding",
    title: "Brand Identity Systems",
    seoTitle: "Brand Identity Agency & Corporate Identity Design",
    eyebrow: "Cohesive Corporate Visual Systems",
    description: "Build market authority with a leading brand identity agency. We deliver strategic corporate identity design, typography, and comprehensive brand guidelines.",
    intro: "Consistency builds consumer trust and premium brand equity. Our strategic corporate identity design and visual systems establish an unmistakable presence for enterprise and B2B organizations.",
    overview: "A logo is not a brand. As a premier brand identity agency, we engineer comprehensive visual systems that scale. We define exact color tokens, layout grids, typography hierarchies, and precise usage guidelines. This strategic foundation ensures that whether a customer is viewing your Next.js application, an investor pitch deck, or a billboard, they experience a unified, authoritative corporate identity design.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Corporate Identity Design & Strategy",
      "Typography & Color System Engineering",
      "Comprehensive Brand Style Guidelines",
      "Visual Identity Design & Component Rollouts"
    ],
    process: [
      ["Brand Strategy Workshop", "We define your core market positioning, archetype, and competitive visual landscape."],
      ["Visual Language Architecture", "Our team establishes scalable color tokens, typography scales, and geometric patterns."],
      ["Brand Book Documentation", "We compile strict, actionable guidelines for your internal teams and external agency partners."],
      ["Enterprise Asset Deployment", "We seamlessly roll out the new corporate identity design across your digital products and marketing collateral."]
    ],
    faq: [
      ["What is the difference between a logo and corporate identity design?", "A logo is just one element (the symbol). Corporate identity design encompasses the entire visual ecosystem—typography, color theory, photography style, UI elements, and the brand book that governs how these elements are applied."],
      ["Why should we hire a specialized brand identity agency?", "Without strict brand guidelines, companies suffer from 'brand drift'—where different departments produce inconsistent visuals. A specialized brand identity agency standardizes your look, immediately elevating your perceived market value and trust."]
    ],
    relatedServices: ["logo-design", "graphic-design", "creative-design"],
    relatedIndustries: ["technology", "hospitality", "professional-services"],
    relatedBlogSlugs: ["how-to-redesign-a-website-without-losing-seo", "enterprise-seo-vs-traditional-seo"]
  },
  "creative-design": {
    slug: "creative-design",
    categorySlug: "design-branding",
    title: "Creative Design",
    seoTitle: "Creative Design Services | Digital Creative Design Agency",
    eyebrow: "Innovative Visual Campaigns & Collateral",
    description: "Go Execution is a leading digital creative design agency providing enterprise creative design services, illustration design, and marketing collateral design.",
    intro: "Break through digital noise and captivate your target market. Our comprehensive creative design services blend artistic vision with conversion strategy to build bold visual campaigns.",
    overview: "As a specialized digital creative design agency, we produce high-impact assets that drive engagement across every channel. From complex marketing collateral design for B2B sales teams to digital graphic design services for global advertising campaigns, we act as your dedicated creative partner. Unlike a generic design services company, our creative design firm focuses on strategic outcomes—producing bespoke illustration design services and marketing materials that align perfectly with your corporate objectives.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Enterprise Creative Design Services",
      "B2B Marketing Collateral Design",
      "Digital Graphic Design Services & UI Art",
      "Custom Illustration Design Services",
      "Creative and Design Agency Strategy"
    ],
    process: [
      ["Creative Concepting", "Our creative design firm brainstorms bold visual angles aligned directly with your campaign objectives."],
      ["Art Direction & Design", "We execute high-end visual artwork, ensuring premium marketing collateral design."],
      ["Multi-Format Output", "Adapting digital graphic design services seamlessly across web, social, and print channels."],
      ["Review & Asset Handover", "Delivering high-resolution assets ready for immediate campaign launch."]
    ],
    faq: [
      ["What is included in your creative design services?", "Our creative design services cover digital advertising campaigns, illustration design services, corporate branding, and extensive marketing collateral design."],
      ["Why partner with a dedicated creative design firm?", "Partnering with a specialized digital creative design agency ensures your visuals aren't just aesthetically pleasing, but strategically engineered to generate ROI. We combine the agility of a boutique studio with the capabilities of a full-scale creative and design agency."]
    ],
    relatedServices: ["graphic-design", "video-animation"],
    relatedIndustries: ["technology", "retail", "professional-services"],
    relatedBlogSlugs: ["custom-web-development-vs-website-builders", "how-to-redesign-a-website-without-losing-seo"]
  },

  // --- VIDEO ---
  "video-animation": {
    slug: "video-animation",
    categorySlug: "video",
    title: "B2B Video Marketing",
    seoTitle: "B2B Video Marketing Agency | Expert Video Production Company",
    eyebrow: "Cinematic B2B Motion & Storytelling",
    description: "Go Execution is a premier B2B video marketing agency offering enterprise video production, 2D/3D animation, and SaaS video services.",
    intro: "Hook enterprise decision-makers in seconds. As a leading B2B video marketing agency, we produce cinematic motion graphics, live-action brand films, and animated product explainers.",
    overview: "Complex B2B products require specialized storytelling. A standard video advertising agency focuses on consumer trends, but we are a dedicated B2B video production agency. From crafting high-impact SaaS videos and corporate brand anthems to executing comprehensive B2B video production campaigns, our team translates dense technical features into compelling visual narratives that accelerate the B2B sales cycle.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "B2B Video Marketing Agency Strategy",
      "Enterprise SaaS Videos & Explainers",
      "B2B Video Production Company Services",
      "Video Advertising Agency Motion Graphics"
    ],
    process: [
      ["B2B Scriptwriting", "Translating complex software and enterprise services into clear, persuasive narrative scripts."],
      ["Storyboarding & Style", "Designing visual frame concepts that strictly align with your corporate brand guidelines."],
      ["Animation & Production", "Producing fluid 2D/3D animation, motion graphics, or cinematic live-action footage."],
      ["Pipeline Alignment", "Exporting optimized videos for landing pages, ABM campaigns, and LinkedIn video ads."]
    ],
    faq: [
      ["What makes a B2B video production agency different?", "A true B2B video agency understands long sales cycles, complex buying committees, and how to simplify technical concepts into engaging visual stories."],
      ["Do you produce SaaS videos and product explainers?", "Yes. Our core expertise includes abstract software UI animation and SaaS product marketing videos."]
    ],
    relatedServices: ["2d-animation", "explainer-videos"],
    relatedIndustries: ["technology", "real-estate"],
    relatedBlogSlugs: ["custom-web-development-vs-website-builders", "cost-of-poor-core-web-vitals-inp", "b2b-saas-seo-strategy"]
  },
  "2d-animation": {
    slug: "2d-animation",
    categorySlug: "video",
    title: "2D Animation Services",
    seoTitle: "2D Animation Services USA | Go Execution",
    eyebrow: "Fluid 2D Character & Vector Motion",
    description: "2D animation for explainers, campaigns, product stories, and branded content, from scripting and storyboards through final delivery.",
    intro: "Engage prospects with fluid 2D animation services. Perfect for storytelling, explaining service workflows, and launching social media video ads.",
    overview: "Our 2D animation company USA crafts custom character rigs, vibrant vector scenes, and smooth transition motion for 2D animated videos.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "2D Animation Services",
      "2D Animation Company USA Rigs",
      "2D Animation Agency USA Motion",
      "2D Animated Videos & Vector Characters"
    ],
    process: [
      ["Script & Character Design", "Designing unique brand characters and narrative scenes."],
      ["Storyboard Approval", "Reviewing frame-by-frame visual progression before animating."],
      ["2D Motion Production", "Keyframing smooth character movements and text motion."],
      ["Sound Mix & Delivery", "Adding background score, sound effects, and voiceover."]
    ],
    faq: [
      ["Why choose a 2D animation agency for marketing videos?", "2D animated videos deliver high engagement, fast production turnarounds, and easy updating."],
      ["Can 2D animation company assets be adapted for social media?", "Yes! 2D motion graphics perform exceptionally well on Instagram Reels, YouTube, and TikTok."]
    ],
    relatedServices: ["video-animation", "explainer-videos"],
    relatedIndustries: ["health-wellness", "technology"],
    relatedBlogSlugs: ["custom-web-development-vs-website-builders", "b2b-saas-seo-strategy", "how-much-does-custom-web-development-cost"]
  },
  "3d-animation": {
    slug: "3d-animation",
    categorySlug: "video",
    title: "3D Animation Services",
    seoTitle: "3D Animation Services USA | Go Execution",
    eyebrow: "Photorealistic 3D Modeling & Rendering",
    description: "3D animation for product visualization, demonstrations, advertising, and cinematic brand content, from modeling through final render.",
    intro: "Showcase products with photorealistic 3D detail. Our 3D animation services model, texture, and animate complex physical products and environments.",
    overview: "Our 3D animation company USA builds photorealistic renders, exploded CAD views, and 3D product animation for tech, real estate, and retail brands.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "3D Animation Services USA",
      "3D Animation Company USA Renders",
      "3D Animation Agency CAD Rigs",
      "3D Product Animation & Cinematic 4K Motion"
    ],
    process: [
      ["CAD / 3D Asset Import", "Importing physical CAD files or modeling product geometry from scratch."],
      ["Lighting & Shader Setup", "Applying realistic materials, textures, and studio lighting."],
      ["Camera Rigging & Motion", "Animating dynamic camera moves and product assembly flows."],
      ["High-Res 4K Render", "Rendering final frames with post-processing color grading."]
    ],
    faq: [
      ["Why partner with a 3D animation agency?", "A specialized 3D animation company produces photorealistic product visuals impossible to capture with standard cameras."],
      ["What is 3D product animation used for?", "It is ideal for hardware showcases, e-commerce product pages, crowdfunding, and ad campaigns."]
    ],
    relatedServices: ["video-animation", "graphic-design"],
    relatedIndustries: ["real-estate", "technology"],
    relatedBlogSlugs: ["custom-web-development-vs-website-builders", "cost-of-poor-core-web-vitals-inp", "nextjs-replacing-headless-shopify-enterprise-ecommerce"]
  },
  "explainer-videos": {
    slug: "explainer-videos",
    categorySlug: "video",
    title: "Explainer Videos",
    seoTitle: "Explainer Video Services & Explainer Video Company USA",
    eyebrow: "Simplifying Complex Value Propositions",
    description: "Explainer video production that turns complex products and services into clear, engaging stories through scripting, design, animation, and sound.",
    intro: "Turn complex service models into simple 60-second animated video stories with our explainer video services, driving website conversion rates.",
    overview: "As a leading explainer video company USA, we combine persuasive problem-solution scripts with animated explainer videos that convert prospects.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Explainer Video Services USA",
      "Explainer Video Company Scripts",
      "Explainer Video Agency USA Production",
      "Animated Explainer Videos & Business Explainer Videos"
    ],
    process: [
      ["Core Message Discovery", "Distilling your core value proposition into a clear 60-second script."],
      ["Storyboard & Style Frame", "Designing exact visual scenes matching your brand identity."],
      ["Voice & Sound Alignment", "Pairing professional voiceover with energetic background audio."],
      ["Production & Embedding", "Delivering final video files optimized for landing page embedding."]
    ],
    faq: [
      ["Why should businesses hire an explainer video agency?", "Animated explainer videos clarify value propositions within seconds, significantly increasing lead inquiries."],
      ["Where should we feature business explainer videos?", "Above the fold on key landing pages, main service pages, and paid search campaign funnels."]
    ],
    relatedServices: ["video-animation", "2d-animation"],
    relatedIndustries: ["technology", "professional-services"],
    relatedBlogSlugs: ["b2b-saas-seo-strategy", "custom-web-development-vs-website-builders", "how-much-does-custom-web-development-cost"]
  },

  // --- MOBILE APPS ---
  "custom-mobile-app-development": {
    slug: "custom-mobile-app-development",
    categorySlug: "mobile-app-development",
    title: "Custom Mobile App Development",
    seoTitle: "Custom Mobile App Development USA | Go Execution",
    eyebrow: "Native & Cross-Platform Mobile Engineering",
    description: "Custom mobile app development for iOS and Android, from product discovery and UX design to engineering, testing, launch, and iteration.",
    intro: "Bring your commercial platform into users' hands. As a leading mobile app development company USA, we build custom mobile apps for iOS and Android.",
    overview: "Our mobile app development agency engineers React Native and Flutter cross-platform applications with secure cloud backends and push notifications.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Mobile App Development Company USA",
      "Mobile App Development Services USA",
      "Mobile App Development Agency Engineering",
      "Custom Mobile App Development & iOS and Android App Development"
    ],
    process: [
      ["Mobile Scope & UX Wireframes", "Mapping user screens, navigation flows, and database architecture."],
      ["UI Design & Interactive Prototype", "Crafting intuitive mobile UI components adhering to iOS/Android guidelines."],
      ["Mobile Code Engineering", "Developing clean, performant mobile app code with real-time sync."],
      ["Store Testing & Submission", "Rigorous device testing and managing Apple/Google store approvals."]
    ],
    faq: [
      ["Why choose a mobile application development company in the USA?", "A top mobile app development agency ensures enterprise security, fluid UX design, and reliable App Store approvals."],
      ["Do custom mobile app development services cover both iOS and Android?", "Yes! With React Native or Flutter, we deliver native-performing apps for both platforms simultaneously."]
    ],
    relatedServices: ["custom-web-development", "nextjs-development"],
    relatedIndustries: ["technology", "health-wellness"],
    relatedBlogSlugs: ["wordpress-vs-nextjs-for-business-websites", "custom-web-development-vs-website-builders", "how-much-does-custom-web-development-cost"]
  }
};

export const subServices: Record<string, SubService> = Object.fromEntries(
  Object.entries(subServiceEntries).map(([slug, service]) => [
    slug,
    {
      ...service,
      image: serviceVisuals[service.categorySlug] ?? service.image,
    },
  ]),
);

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
