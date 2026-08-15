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
    seoTitle: "Web Development Company USA & Web Agency | Go Execution",
    eyebrow: "Enterprise Web Engineering & Architectures",
    description: "Go Execution is a leading web development company in the USA providing custom web development agency services, Next.js engineering, WordPress CMS builds, and scalable e-commerce storefronts.",
    intro: "We build sub-second web platforms engineered for maximum search visibility, enterprise security, and seamless user experiences across all devices.",
    image: "/assets/images/logo-light.png",
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
    seoTitle: "SEO Services USA & Search Engine Optimization Agency | Go Execution",
    eyebrow: "Search Engine Optimization & Organic Growth",
    description: "Go Execution is a top SEO agency in the USA offering professional SEO services, search engine optimization services, technical SEO, local SEO, and e-commerce SEO.",
    intro: "We eliminate technical crawl barriers, engineer topical keyword authority, and secure high-intent search rankings that turn organic search into a predictable revenue stream.",
    image: "/assets/images/logo-light.png",
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
    description: "Go Execution is a premier digital marketing agency in the USA providing digital marketing services, PPC management, content marketing, social media marketing, and CRO solutions.",
    intro: "We unify paid search, social ad creatives, content strategy, and conversion rate optimization into a single accountable customer acquisition engine.",
    image: "/assets/images/logo-light.png",
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
    description: "Go Execution is a leading branding agency in the USA offering graphic design and branding services, custom logo design services, brand identity systems, and creative direction.",
    intro: "We shape visual identities that command authority, build instant consumer trust, and differentiate your brand across every digital touchpoint.",
    image: "/assets/images/logo-light.png",
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
    seoTitle: "Video Animation Services & Production Agency USA | Go Execution",
    eyebrow: "High-Impact Video Motion & Animation",
    description: "Go Execution is a video animation agency in the USA providing 2D animation services, 3D product animation, and animated explainer video production.",
    intro: "We translate complex value propositions into engaging visual stories, high-end motion graphics, and conversion-focused animated explainer videos.",
    image: "/assets/images/logo-light.png",
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
    seoTitle: "Mobile App Development Company USA | App Services | Go Execution",
    eyebrow: "Native & Cross-Platform Mobile Engineering",
    description: "Go Execution is a premier mobile app development company in the USA providing custom mobile app development services for iOS and Android platforms.",
    intro: "We build intuitive, high-speed mobile experiences that connect businesses directly with users on iOS and Android platforms.",
    image: "/assets/images/logo-light.png",
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

export const subServices: Record<string, SubService> = {
  // --- WEB DEVELOPMENT ---
  "custom-web-development": {
    slug: "custom-web-development",
    categorySlug: "web-development",
    title: "Custom Web Development",
    seoTitle: "Custom Web Development USA | Custom Web Development Company",
    eyebrow: "Tailored Engineering for Growth",
    description: "Leading custom web development company in the USA. Go Execution provides custom website development services, bespoke web platforms, and custom web development services.",
    intro: "Off-the-shelf templates limit scalability. We build bespoke custom web development solutions engineered around your exact commercial goals, technical integrations, and user acquisition funnels.",
    overview: "Our custom web development company combines clean modern architecture, Next.js framework power, and robust API backends to deliver sub-second page performance.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Custom Web Development USA",
      "Custom Website Development Services",
      "Custom Web Development Company Architecture",
      "Bespoke Web Development USA & API Systems"
    ],
    process: [
      ["Discovery & Technical Architecture", "Analyzing commercial requirements and designing custom data models."],
      ["UI/UX Design & Component Prototyping", "Building interactive wireframes tailored for high-conversion user journeys."],
      ["Clean Code Engineering", "Developing lightweight, accessible code using Next.js, React, and TypeScript."],
      ["QA, Speed Audit & Deployment", "Rigorous cross-device testing, Core Web Vitals optimization, and live launch."]
    ],
    faq: [
      ["What makes custom web development better than standard templates?", "Custom web development provides zero code bloat, sub-second load speeds, infinite scalability, and total ownership of your digital platform."],
      ["How long does a custom web development project take?", "Timeline varies by scope, but typical custom website development builds take 4 to 8 weeks from design approval to deployment."]
    ],
    relatedServices: ["wordpress-development", "nextjs-development", "ecommerce-development"],
    relatedIndustries: ["technology", "real-estate", "professional-services"]
  },
  "wordpress-development": {
    slug: "wordpress-development",
    categorySlug: "web-development",
    title: "WordPress Development",
    seoTitle: "WordPress Development Company USA | Custom WordPress Services",
    eyebrow: "High-Performance Content Management Systems",
    description: "Top-rated WordPress development company in the USA. Custom WordPress web development services, enterprise CMS builds, and custom WordPress development by Go Execution.",
    intro: "We transform WordPress into a lightning-fast, highly secure content platform with custom WordPress development, theme architecture, zero plugin bloat, and intuitive editing tools.",
    overview: "Our WordPress development company builds custom themes and plugins tailored to your brand, ensuring sub-second speeds and complete editor autonomy.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "WordPress Development Company USA Architecture",
      "WordPress Development Services USA & Theme Engineering",
      "Custom WordPress Development USA & Gutenberg Blocks",
      "WordPress Web Development & Plugin Integration"
    ],
    process: [
      ["Architecture Planning", "Mapping custom post types, fields, and workflow requirements."],
      ["Custom Block Development", "Building native Gutenberg blocks for effortless page publishing."],
      ["Speed Optimization", "Eliminating bloat to achieve green PageSpeed Insights scores."],
      ["Launch & Training", "Hands-on team training for internal content publishing."]
    ],
    faq: [
      ["Why hire a WordPress development company in the USA?", "A specialized WordPress development company engineers clean code, custom blocks, and bulletproof security without plugin bloat."],
      ["Is custom WordPress web development secure?", "With custom code, dedicated security protocols, and proper server setup, WordPress is rock-solid."]
    ],
    relatedServices: ["custom-web-development", "website-performance"],
    relatedIndustries: ["professional-services", "health-wellness"]
  },
  "nextjs-development": {
    slug: "nextjs-development",
    categorySlug: "web-development",
    title: "Next.js Development",
    seoTitle: "Next.js Development Company USA | Next.js Development Agency",
    eyebrow: "Next-Generation React Web Applications",
    description: "Premier Next.js development company in the USA. Go Execution delivers custom Next.js development services, headless web applications, and React platforms.",
    intro: "Next.js is the gold standard for modern web performance. We build lightning-fast Next.js web development SSR applications that rank higher and convert faster.",
    overview: "As a premier Next.js development agency, we leverage Next.js App Router, Turbopack, and Vercel edge deployment to build sub-second web platforms.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Next.js Development Company USA Engineering",
      "Next.js Development Services & App Router",
      "Next.js Web Development USA & SSR Platforms",
      "Custom Next.js Development & Headless CMS"
    ],
    process: [
      ["System Architecture", "Designing modular React component trees and state management."],
      ["SSR/SSG Optimization", "Configuring fast server rendering and static page generation."],
      ["API Integration", "Connecting headless CMS content, payment gateways, and CRM endpoints."],
      ["Vercel Edge Deployment", "Deploying across global CDN nodes for zero-latency page delivery."]
    ],
    faq: [
      ["Why choose a Next.js development agency for your platform?", "Next.js development services combine sub-second speeds, top-tier SEO rendering, and enterprise-grade security."],
      ["Can Next.js web development connect to an existing CMS?", "Yes! Next.js easily connects to WordPress, Shopify, Sanity, or custom GraphQL backends."]
    ],
    relatedServices: ["custom-web-development", "ecommerce-development"],
    relatedIndustries: ["technology", "fashion"]
  },
  "ecommerce-development": {
    slug: "ecommerce-development",
    categorySlug: "web-development",
    title: "E-Commerce Development",
    seoTitle: "Ecommerce Web Development USA | Ecommerce Website Company",
    eyebrow: "High-Converting Online Storefronts",
    description: "Leading ecommerce web development agency in the USA. Custom ecommerce website development services, Shopify builds, and custom ecommerce development.",
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
    relatedIndustries: ["fashion", "retail"]
  },
  "landing-page-development": {
    slug: "landing-page-development",
    categorySlug: "web-development",
    title: "Landing Page Development",
    seoTitle: "Landing Page Design & Development USA | Landing Page Agency",
    eyebrow: "Precision Paid Traffic Acquisition Pages",
    description: "Expert landing page design and development agency in the USA. We craft conversion focused landing page design and high converting landing pages.",
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
    relatedIndustries: ["real-estate", "professional-services"]
  },
  "website-redesign": {
    slug: "website-redesign",
    categorySlug: "web-development",
    title: "Website Redesign",
    seoTitle: "Website Redesign Services USA | Website Redesign Company",
    eyebrow: "Modernizing Brand Digital Presence",
    description: "Professional website redesign services in the USA. Go Execution is a top website redesign agency helping businesses redesign websites for better conversions.",
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
    relatedIndustries: ["professional-services", "technology"]
  },
  "website-performance": {
    slug: "website-performance",
    categorySlug: "web-development",
    title: "Website Speed & Performance",
    seoTitle: "Website Speed Optimization Services USA | Page Speed Optimization",
    eyebrow: "Sub-second Loading & Core Web Vitals",
    description: "Professional website speed optimization services in the USA. Expert page speed optimization services, Core Web Vitals optimization, and website performance optimization.",
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
    relatedIndustries: ["fashion", "retail"]
  },

  // --- SEO ---
  "technical-seo": {
    slug: "technical-seo",
    categorySlug: "seo",
    title: "Technical SEO",
    seoTitle: "Technical SEO Services & Technical SEO Agency USA | Go Execution",
    eyebrow: "Search Engine Infrastructure & Indexing",
    description: "Expert technical SEO services and technical website SEO audits in the USA. Resolve crawl barriers with a leading technical SEO agency and technical SEO company.",
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
    relatedIndustries: ["technology", "real-estate"]
  },
  "local-seo": {
    slug: "local-seo",
    categorySlug: "seo",
    title: "Local SEO Services",
    seoTitle: "Local SEO Services USA | Local SEO Agency & Google Maps SEO",
    eyebrow: "Dominating Local Search & Map Packs",
    description: "Top-rated local SEO services in the USA. Go Execution is a leading local SEO company and agency specializing in local search engine optimization & Google Maps SEO.",
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
    relatedIndustries: ["health-wellness", "hospitality"]
  },
  "ecommerce-seo": {
    slug: "ecommerce-seo",
    categorySlug: "seo",
    title: "E-Commerce SEO",
    seoTitle: "Ecommerce SEO Services & Ecommerce SEO Agency | Go Execution",
    eyebrow: "Organic Product & Category Revenue",
    description: "Specialized ecommerce SEO services for US online stores. Our ecommerce search engine optimization agency drives organic revenue on Shopify & WooCommerce.",
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
    relatedIndustries: ["fashion", "retail"]
  },
  "small-business-seo": {
    slug: "small-business-seo",
    categorySlug: "seo",
    title: "Small Business SEO",
    seoTitle: "Small Business SEO Services USA | Small Business SEO Agency",
    eyebrow: "Cost-Effective Organic Business Growth",
    description: "Affordable small business SEO services in the USA. Tailored SEO for small businesses and small business search engine optimization strategies by Go Execution.",
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
    relatedIndustries: ["professional-services", "health-wellness"]
  },

  // --- DIGITAL MARKETING ---
  "content-marketing": {
    slug: "content-marketing",
    categorySlug: "digital-marketing",
    title: "Content Marketing",
    seoTitle: "Content Marketing Services & Content Marketing Agency USA",
    eyebrow: "Authority & Thought Leadership Content",
    description: "High-impact content marketing services in the USA. Go Execution is a top content marketing agency delivering SEO content marketing and content strategy services.",
    intro: "Quality content builds consumer trust before the sale. Our content marketing services research, draft, and publish high-authority articles and strategic guides.",
    overview: "As a leading content marketing company, our strategists engineer SEO content marketing campaigns aligned with real search intent and buyer journeys.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Content Marketing Services & Editorial Strategy",
      "Content Marketing Agency USA Authority Content",
      "SEO Content Marketing & Keyword Clusters",
      "Content Strategy Services & Lead Magnets"
    ],
    process: [
      ["Topical Research", "Finding high-value questions your target customers are actively asking online."],
      ["Expert Content Creation", "Writing in-depth, well-researched articles that demonstrate first-hand expertise."],
      ["Internal Linking & CTAs", "Integrating strategic links to relevant service pages and consultation offers."],
      ["Performance Review", "Tracking traffic engagement, time-on-page, and lead conversions."]
    ],
    faq: [
      ["How do content strategy services support SEO?", "Search engine algorithms reward websites that demonstrate topical depth and publish comprehensive content."],
      ["Why hire a content marketing agency USA?", "A professional content marketing company ensures consistent, high-quality editorial writing that converts readers into active leads."]
    ],
    relatedServices: ["social-media-marketing", "paid-advertising"],
    relatedIndustries: ["technology", "professional-services"]
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    categorySlug: "digital-marketing",
    title: "Social Media Marketing",
    seoTitle: "Social Media Marketing Services USA | Social Media Agency",
    eyebrow: "Brand Engagement & Paid Social Ads",
    description: "Leading social media marketing services in the USA. Go Execution is a social media marketing agency providing social media management services & advertising.",
    intro: "Build active brand communities and launch high-converting ad campaigns with our social media marketing services USA across Meta, LinkedIn, and TikTok.",
    overview: "As a premier social media marketing company, we combine eye-catching graphics, UGC video creatives, and social media advertising services.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Social Media Marketing Services USA",
      "Social Media Marketing Agency USA Campaigns",
      "Social Media Management Services & Scheduling",
      "Social Media Advertising Services & UGC Ads"
    ],
    process: [
      ["Audience Segmentation", "Identifying target buyer personas, interests, and online behaviors."],
      ["Creative Production", "Designing visual graphic assets, video Reels, and ad copy variants."],
      ["Campaign Management", "Launching paid social ads with real-time ROAS monitoring."],
      ["Optimization & Scaling", "Scaling winning ad creatives and reallocating budget for maximum ROI."]
    ],
    faq: [
      ["Why hire a social media marketing agency in the USA?", "A dedicated agency creates high-impact ad creatives, manages daily post scheduling, and optimizes campaign ROAS."],
      ["What is included in social media management services?", "We handle content creation, graphic design, copywriting, audience engagement, and performance analytics."]
    ],
    relatedServices: ["paid-advertising", "graphic-design"],
    relatedIndustries: ["fashion", "retail"]
  },
  "paid-advertising": {
    slug: "paid-advertising",
    categorySlug: "digital-marketing",
    title: "Paid Advertising (PPC)",
    seoTitle: "PPC Management Services USA | PPC Agency & Google Ads",
    eyebrow: "Immediate High-Intent Customer Acquisition",
    description: "High-ROAS PPC management services in the USA. Premier paid search marketing agency and PPC agency offering Google Ads management & paid advertising.",
    intro: "Capture buyers at the exact moment they search online. Our PPC management services USA build targeted Google Search and paid advertising campaigns.",
    overview: "As a top PPC agency USA, we eliminate wasted ad spend through negative keyword sculpting, Google Ads management, and high-converting landing pages.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "PPC Management Services USA",
      "PPC Agency USA & Campaign Strategy",
      "Paid Advertising Agency & Ad Copywriting",
      "Google Ads Management & Paid Search Marketing Services"
    ],
    process: [
      ["Account Restructuring", "Organizing campaigns into tightly targeted ad groups and match types."],
      ["Ad Copywriting", "Testing multi-headline responsive search ads to maximize CTR."],
      ["Landing Page Alignment", "Ensuring ad message matches landing page content for top Quality Scores."],
      ["Daily Bid Optimization", "Continuously optimizing bids for target Cost Per Acquisition (CPA)."]
    ],
    faq: [
      ["Why hire a paid advertising agency for Google Ads management?", "A certified PPC agency eliminates ad budget waste, optimizes keyword quality scores, and increases lead volume."],
      ["How fast do paid search marketing services generate leads?", "PPC search campaigns generate immediate high-intent traffic and lead submissions upon launch."]
    ],
    relatedServices: ["landing-page-development", "conversion-optimisation"],
    relatedIndustries: ["real-estate", "professional-services"]
  },
  "conversion-optimisation": {
    slug: "conversion-optimisation",
    categorySlug: "digital-marketing",
    title: "Conversion Rate Optimization (CRO)",
    seoTitle: "Conversion Rate Optimization Services USA | CRO Agency",
    eyebrow: "Maximizing Revenue From Existing Traffic",
    description: "Data-driven conversion rate optimization services in the USA. Go Execution is a top CRO agency optimizing website conversion rate optimization and leads.",
    intro: "Scale revenue without buying more ad traffic. Our conversion rate optimization services evaluate heatmaps and user journeys to turn clicks into sales.",
    overview: "As a specialized CRO agency USA, we combine behavioral analytics, A/B split testing, and website conversion optimization to increase customer conversions.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Conversion Rate Optimization Services",
      "CRO Agency USA & Behavioral Analytics",
      "Conversion Optimization Services & A/B Testing",
      "Website Conversion Optimization & Funnel Design"
    ],
    process: [
      ["Funnel Data Audit", "Analyzing drop-off points in Google Analytics 4 and Hotjar heatmaps."],
      ["Hypothesis Formation", "Developing data-driven hypotheses for higher converting page layouts."],
      ["A/B Test Execution", "Running split tests to compare variant pages against control pages."],
      ["Winning Implementation", "Permanently deploying winning layout variations."]
    ],
    faq: [
      ["How do conversion optimization services increase revenue?", "By removing checkout friction and optimizing CTA positioning, a CRO agency doubles sales from your current traffic."],
      ["Why select Go Execution for website conversion optimization?", "We combine deep technical web engineering with conversion psychology to deliver measurable ROI."]
    ],
    relatedServices: ["landing-page-development", "website-performance"],
    relatedIndustries: ["fashion", "technology"]
  },

  // --- DESIGN & BRANDING ---
  "graphic-design": {
    slug: "graphic-design",
    categorySlug: "design-branding",
    title: "Graphic Design Services",
    seoTitle: "Graphic Design Services USA | Graphic Design Agency",
    eyebrow: "Professional Visual Communication Assets",
    description: "Professional graphic design services in the USA. Premier graphic design agency delivering professional graphic design services for US business collateral.",
    intro: "Distinction begins with exceptional visual design. Our graphic design services USA craft custom visual collateral that builds undeniable brand authority.",
    overview: "Our graphic design agency produces vector marketing materials, social media graphics, pitch decks, and business collateral tailored to your brand.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Graphic Design Services USA",
      "Graphic Design Agency Collateral",
      "Professional Graphic Design Services",
      "Business Graphic Design Services & Digital Assets"
    ],
    process: [
      ["Design Briefing", "Aligning on brand guidelines, color palettes, and project goals."],
      ["Concept Creation", "Developing initial creative design concepts for review."],
      ["Refinement & Polish", "Incorporating feedback to perfect visual hierarchy and details."],
      ["Final Deliverable Package", "Exporting print-ready vector PDFs and digital WebP/PNG assets."]
    ],
    faq: [
      ["Why hire a professional graphic design agency?", "Expert business graphic design services ensure all visual touchpoints maintain high quality and brand authority."],
      ["Do we receive full vector files?", "Yes! You own 100% full commercial rights and receive original master vector files."]
    ],
    relatedServices: ["logo-design", "brand-identity"],
    relatedIndustries: ["fashion", "real-estate"]
  },
  "logo-design": {
    slug: "logo-design",
    categorySlug: "design-branding",
    title: "Logo Design",
    seoTitle: "Logo Design Services USA | Professional Logo Design Agency",
    eyebrow: "Distinctive & Timeless Brand Symbols",
    description: "Custom logo design services in the USA. Go Execution is a professional logo design company & logo design agency crafting iconic custom logos.",
    intro: "Your logo represents your company's identity. Our logo design services USA craft timeless vector marks that convey instant quality and market leadership.",
    overview: "As a leading logo design company USA, we craft custom logo marks engineered for flawless scalability across digital and physical touchpoints.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Logo Design Services USA",
      "Logo Design Agency & Icon Vectoring",
      "Professional Logo Design Concepts",
      "Custom Logo Design Services & Usage Rules"
    ],
    process: [
      ["Brand Discovery", "Understanding your company values, target audience, and competitors."],
      ["Conceptual Sketching", "Exploring unique icon ideas and typography combinations."],
      ["Digital Vectorization", "Engineering precise vector geometry in Adobe Illustrator."],
      ["Master Asset Delivery", "Packaging SVG, EPS, PNG, PDF, and brand guideline PDFs."]
    ],
    faq: [
      ["How many concepts does your logo design agency provide?", "We present 3 to 5 distinct professional logo design directions for your team to evaluate."],
      ["Are custom logo design services scalable for all media?", "Yes, all vector logos scale infinitely without any resolution loss."]
    ],
    relatedServices: ["brand-identity", "graphic-design"],
    relatedIndustries: ["professional-services", "health-wellness"]
  },
  "brand-identity": {
    slug: "brand-identity",
    categorySlug: "design-branding",
    title: "Brand Identity Systems",
    seoTitle: "Brand Identity Design Services | Corporate Brand Identity Agency",
    eyebrow: "Cohesive Corporate Identity & Guidelines",
    description: "Comprehensive brand identity design services in the USA. Corporate brand identity agency building branding and identity design systems that command authority.",
    intro: "Establish an unmistakable corporate presence. Our brand identity design services build cohesive visual guidelines and brand style standards.",
    overview: "As a corporate brand identity agency, we define color tokens, typography rules, logo usage, and visual identity design assets for long-term consistency.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Brand Identity Design Services",
      "Brand Identity Agency & Style Books",
      "Branding and Identity Design Guidelines",
      "Corporate Brand Identity & Visual Systems"
    ],
    process: [
      ["Brand Strategy Workshop", "Defining brand personality, positioning, and target appeal."],
      ["Visual Language Design", "Establishing consistent color tokens, typography, and patterns."],
      ["Brand Book Documentation", "Compiling clear rules for internal team and external vendor use."],
      ["Asset Deployment", "Rolling out updated branding across website and collateral."]
    ],
    faq: [
      ["What is included in branding and identity design?", "Complete visual identity design includes logo systems, color palettes, typography, pattern rules, and brand style guides."],
      ["Why partner with a brand identity agency?", "Consistency builds consumer trust, market recognition, and premium brand equity."]
    ],
    relatedServices: ["logo-design", "graphic-design"],
    relatedIndustries: ["technology", "hospitality"]
  },
  "creative-design": {
    slug: "creative-design",
    categorySlug: "design-branding",
    title: "Creative Design",
    seoTitle: "Creative Design Services & Creative Agency USA | Go Execution",
    eyebrow: "Innovative Visual Concepts & Campaigns",
    description: "Innovative creative design services in the USA. Full-service creative agency offering digital creative services and marketing design services.",
    intro: "Break through digital noise with our creative design services. We build bold visual campaign art and marketing design assets that captivate prospects.",
    overview: "As a full-service creative agency USA, we blend artistic vision with marketing strategy to produce digital creative services that drive engagement.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Creative Design Services",
      "Creative Design Agency Art Direction",
      "Digital Creative Services & Campaign Art",
      "Marketing Design Services & Creative Agency USA"
    ],
    process: [
      ["Creative Concepting", "Brainstorming bold visual angles aligned with campaign objectives."],
      ["Art Direction & Design", "Executing high-end visual artwork with meticulous detail."],
      ["Multi-Format Output", "Adapting creative assets across web, social, and print channels."],
      ["Review & Asset Handover", "Delivering high-resolution assets ready for campaign launch."]
    ],
    faq: [
      ["What marketing design services do you offer?", "We produce campaign graphics, packaging concepts, ad visuals, and interactive digital assets."],
      ["Why choose Go Execution as your creative agency USA?", "We combine high-end aesthetics with commercial conversion strategy for maximum impact."]
    ],
    relatedServices: ["graphic-design", "video-animation"],
    relatedIndustries: ["fashion", "retail"]
  },

  // --- VIDEO ---
  "video-animation": {
    slug: "video-animation",
    categorySlug: "video",
    title: "Video Animation",
    seoTitle: "Video Animation Services & Video Animation Agency USA",
    eyebrow: "High-Converting Motion Graphics & Video",
    description: "Professional video animation services in the USA. Go Execution is a top animation company USA offering animated video production and video animation agency services.",
    intro: "Hook audience attention in seconds. Our video animation services produce dynamic motion graphics, 2D/3D visual assets, and animated explainer videos.",
    overview: "As a video animation agency USA, we combine scriptwriting, custom sound design, and 4K motion graphics to communicate complex product value.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Video Animation Services USA",
      "Video Animation Agency Motion Graphics",
      "Animation Company USA Production",
      "Animated Video Production & Video Production and Animation"
    ],
    process: [
      ["Scriptwriting & Storyboarding", "Drafting compelling narrative arcs and visual frame concepts."],
      ["Custom Voiceover & Audio", "Recording professional voiceover tracks and sound effects."],
      ["Animation & Rendering", "Bringing illustrations to life with fluid 60FPS motion."],
      ["Final 4K Delivery", "Exporting optimized video files for web, YouTube, and ad platforms."]
    ],
    faq: [
      ["Why hire an animated video production agency?", "Professional animation clarifies complex services, increases landing page retention, and boosts conversion rates."],
      ["How long does a video animation agency take to deliver a video?", "Standard animated video production takes 3 to 4 weeks from script approval to final render."]
    ],
    relatedServices: ["2d-animation", "explainer-videos"],
    relatedIndustries: ["technology", "real-estate"]
  },
  "2d-animation": {
    slug: "2d-animation",
    categorySlug: "video",
    title: "2D Animation Services",
    seoTitle: "2D Animation Services & 2D Animation Company USA | Go Execution",
    eyebrow: "Fluid 2D Character & Vector Motion",
    description: "Professional 2D animation services in the USA. Go Execution is a leading 2D animation company & 2D animation agency producing custom 2D animated videos.",
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
    relatedIndustries: ["health-wellness", "technology"]
  },
  "3d-animation": {
    slug: "3d-animation",
    categorySlug: "video",
    title: "3D Animation Services",
    seoTitle: "3D Animation Services & 3D Animation Company USA | Go Execution",
    eyebrow: "Photorealistic 3D Modeling & Rendering",
    description: "High-end 3D animation services in the USA. Premier 3D animation agency and 3D animation company specializing in 3D product animation & cinematic motion.",
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
    relatedIndustries: ["real-estate", "technology"]
  },
  "explainer-videos": {
    slug: "explainer-videos",
    categorySlug: "video",
    title: "Explainer Videos",
    seoTitle: "Explainer Video Services & Explainer Video Company USA",
    eyebrow: "Simplifying Complex Value Propositions",
    description: "High-converting explainer video services in the USA. Professional explainer video agency crafting animated explainer videos for companies.",
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
    relatedIndustries: ["technology", "professional-services"]
  },

  // --- MOBILE APPS ---
  "custom-mobile-app-development": {
    slug: "custom-mobile-app-development",
    categorySlug: "mobile-app-development",
    title: "Custom Mobile App Development",
    seoTitle: "Mobile App Development Company USA | App Development Services",
    eyebrow: "Native & Cross-Platform Mobile Engineering",
    description: "Top mobile app development company in the USA. Mobile app development services USA, custom mobile app development, iOS and Android app development agency.",
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
