export type Industry = {
  slug: string;
  title: string;
  seoTitle: string;
  eyebrow: string;
  description: string;
  intro: string;
  image: string;
  stats: Array<[string, string]>;
  challenges: string[];
  solutions: string[];
  services: Array<{ categorySlug: string; slug: string; title: string; desc: string }>;
  faq: string[][];
};

export const industries: Record<string, Industry> = {
  "real-estate": {
    slug: "real-estate",
    title: "Real Estate",
    seoTitle: "Real Estate Web Design & Digital Marketing Agency in USA | Go Execution",
    eyebrow: "Lead Generation & Digital Platforms for Real Estate",
    description: "Go Execution crafts high-converting real estate websites, property portals, and digital marketing campaigns for brokerages, developers, and agents in USA.",
    intro: "Real estate decisions start online. We design immersive property showcase platforms, interactive map search tools, and lead generation funnels that capture high-intent buyers and sellers.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&fit=crop",
    stats: [
      ["MLS/IDX Sync", "Sub-second Property Search"],
      ["+240%", "Average Seller Lead Growth"],
      ["Hyper-Targeted", "PPC & Meta Campaign ROAS"]
    ],
    challenges: [
      "Standing out among national property portals and local brokerages",
      "Capturing qualified seller listings and high-net-worth buyers",
      "Slow property search interfaces causing high bounce rates"
    ],
    solutions: [
      "Custom MLS/IDX integrated web platforms with sub-second search filtering",
      "Hyper-targeted PPC lead generation campaigns for seller listings",
      "High-end visual branding and property video marketing assets"
    ],
    services: [
      { categorySlug: "web-development", slug: "custom-web-development", title: "Property Web Portals", desc: "Fast MLS/IDX map search portals built with Next.js." },
      { categorySlug: "web-development", slug: "landing-page-development", title: "Seller Valuation Landers", desc: "High-converting valuation landing pages for listing leads." },
      { categorySlug: "digital-marketing", slug: "paid-advertising", title: "PPC Lead Generation", desc: "Targeted Google Ads capturing active home buyers & sellers." },
      { categorySlug: "seo", slug: "local-seo", title: "Local Map Pack SEO", desc: "Dominating local search in target property markets." }
    ],
    faq: [
      ["Can you integrate MLS/IDX feeds into our real estate website?", "Yes, we build custom MLS/IDX integrations with fast map searches, saved favorites, and automated lead capture."],
      ["How do you generate seller leads for real estate agents?", "We combine targeted Google Search ads with high-converting property valuation landing pages to capture motivated sellers."]
    ]
  },
  "fashion": {
    slug: "fashion",
    title: "Fashion & Apparel",
    seoTitle: "Fashion Web Design & Digital Marketing Services in USA | Go Execution",
    eyebrow: "E-Commerce & Digital Growth for Fashion Brands",
    description: "Go Execution provides luxury fashion web design, e-commerce development, and social media marketing in USA for fashion labels and apparel brands.",
    intro: "Fashion and apparel brands require visual elegance, sub-second web performance, and conversion-focused shopping experiences. We engineer luxury e-commerce platforms and performance marketing campaigns.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&fit=crop",
    stats: [
      ["< 1.0s", "Mobile Store Load Speed"],
      ["3.8x Avg", "Paid Social Campaign ROAS"],
      ["100% Custom", "Shopify & Headless UX"]
    ],
    challenges: [
      "High competition in online fashion search and paid ad channels",
      "Slow page load speeds destroying mobile conversion rates",
      "Low customer lifetime value and retention across seasonal collections"
    ],
    solutions: [
      "Sub-second Next.js and Shopify custom storefront development",
      "High-ROI paid social & UGC performance video marketing",
      "Automated email & SMS post-purchase retention funnels"
    ],
    services: [
      { categorySlug: "web-development", slug: "ecommerce-development", title: "Luxury E-Commerce Storefronts", desc: "Mobile-first Shopify & Next.js stores engineered for conversion." },
      { categorySlug: "digital-marketing", slug: "social-media-marketing", title: "Paid Social & UGC Ads", desc: "High-converting video creative campaigns across Meta & TikTok." },
      { categorySlug: "design-branding", slug: "brand-identity", title: "Fashion Brand Systems", desc: "Luxury identity, typography, and visual brand guidelines." }
    ],
    faq: [
      ["Why choose Go Execution for fashion web design?", "We build luxury e-commerce platforms with mobile-first checkout flows, sub-second loading speeds, and seamless inventory management."],
      ["Can you integrate our fashion store with Shopify or custom backends?", "Yes, we develop custom headless storefronts using Next.js and Shopify APIs for ultimate performance."]
    ]
  },
  "retail": {
    slug: "retail",
    title: "Retail & Consumer Goods",
    seoTitle: "Retail Web Development & Digital Marketing Agency in USA | Go Execution",
    eyebrow: "Omnichannel Growth & E-Commerce Platforms",
    description: "Go Execution builds high-converting retail e-commerce websites, product catalog SEO, and performance advertising for retail brands across the USA.",
    intro: "Modern retail demands seamless integration between online store experiences and customer acquisition channels. We engineer fast retail storefronts that scale transaction volume.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80&fit=crop",
    stats: [
      ["1-Click Checkout", "Instant Frictionless Purchasing"],
      ["+210%", "Organic Search Transaction Growth"],
      ["Multi-Channel", "Catalog & Inventory Sync"]
    ],
    challenges: [
      "Friction in mobile shopping carts leading to abandoned checkouts",
      "Managing complex inventory and multi-channel product catalogs",
      "High customer acquisition cost in competitive retail categories"
    ],
    solutions: [
      "Custom Shopify & Next.js storefronts with instant 1-click checkout",
      "E-Commerce SEO targeting high-volume category search queries",
      "Retargeting ad campaigns to convert browsing shoppers into buyers"
    ],
    services: [
      { categorySlug: "web-development", slug: "ecommerce-development", title: "Omnichannel Retail Stores", desc: "Scalable e-commerce platforms with real-time inventory sync." },
      { categorySlug: "seo", slug: "ecommerce-seo", title: "Product Catalog SEO", desc: "Ranking category pages and product SKUs at top of Google." },
      { categorySlug: "digital-marketing", slug: "conversion-optimisation", title: "Conversion Rate Optimization", desc: "Streamlining cart flows to boost Average Order Value (AOV)." }
    ],
    faq: [
      ["How do you optimize retail sites for higher conversions?", "We streamline navigation, optimize mobile speed, simplify checkout steps, and run A/B conversion tests."],
      ["Can you optimize our product catalogs for Google Search?", "Yes, we execute full e-commerce SEO optimization across category and product pages."]
    ]
  },
  "hospitality": {
    slug: "hospitality",
    title: "Hospitality & Leisure",
    seoTitle: "Hospitality Web Design & Direct Booking Services in USA | Go Execution",
    eyebrow: "Direct Booking Platforms & Growth for Hotels & Venues",
    description: "Go Execution designs luxury websites, direct booking engines, and digital marketing campaigns for hotels, resorts, luxury venues, and hospitality brands in USA.",
    intro: "Hospitality brands thrive on sensory storytelling and seamless direct bookings. We create visual web experiences and multi-channel marketing campaigns that drive direct reservations and lower OTA commissions.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80&fit=crop",
    stats: [
      ["0% Commission", "Direct Booking Engines"],
      ["4K Motion", "Visual Sensory Storytelling"],
      ["+175%", "Direct Reservation Revenue"]
    ],
    challenges: [
      "High commissions paid to third-party Online Travel Agencies (OTAs)",
      "Slow, outdated booking engines leading to abandoned reservations",
      "Building brand loyalty across seasonal travel periods"
    ],
    solutions: [
      "Custom luxury web portals with frictionless direct booking integration",
      "Visual storytelling with motion graphics and immersive gallery design",
      "Hyper-targeted social and search ad campaigns for seasonal travel packages"
    ],
    services: [
      { categorySlug: "web-development", slug: "custom-web-development", title: "Direct Booking Portals", desc: "Luxury resort & hotel sites with zero OTA commission friction." },
      { categorySlug: "video", slug: "video-animation", title: "Hospitality Motion Video", desc: "High-end 4K video storytelling for destinations and venues." },
      { categorySlug: "seo", slug: "local-seo", title: "Destination Search SEO", desc: "Capturing local travel queries and Google Maps positioning." }
    ],
    faq: [
      ["How can a custom website increase direct bookings?", "By offering a faster, visually stunning experience with zero booking friction and exclusive direct-book perks."],
      ["Do you handle social media ad campaigns for hospitality brands?", "Yes, we design visual ad campaigns targeting travelers actively planning trips to your destination."]
    ]
  },
  "technology": {
    slug: "technology",
    title: "Technology & SaaS",
    seoTitle: "Tech & SaaS Web Development & Marketing Agency in USA | Go Execution",
    eyebrow: "Scalable Web Platforms & Growth Funnels for Tech Companies",
    description: "Go Execution builds high-speed Next.js web applications, product landing pages, and B2B SaaS digital marketing campaigns for tech companies in USA.",
    intro: "Tech companies demand cutting-edge engineering and clear value propositions. We design high-converting SaaS websites, custom mobile apps, and technical B2B growth engines.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&fit=crop",
    stats: [
      ["Next.js SSR", "Sub-second Page Speeds"],
      ["Lower CAC", "Optimized B2B Acquisition"],
      ["Interactive", "SaaS Demo & Trial Funnels"]
    ],
    challenges: [
      "Communicating complex tech architectures in simple, persuasive terms",
      "High customer acquisition cost (CAC) in B2B SaaS marketing",
      "Converting free trial users into long-term paid subscribers"
    ],
    solutions: [
      "Lightning-fast Next.js marketing sites with interactive product demos",
      "Targeted LinkedIn and Google Search campaigns for enterprise decision makers",
      "2D/3D animated product explainer videos that boost trial signups"
    ],
    services: [
      { categorySlug: "web-development", slug: "nextjs-development", title: "Next.js Web Platforms", desc: "Sub-second SSR web applications built with Next.js and React." },
      { categorySlug: "mobile-app-development", slug: "custom-mobile-app-development", title: "Custom Mobile Applications", desc: "Cross-platform iOS and Android apps with cloud backends." },
      { categorySlug: "video", slug: "explainer-videos", title: "Animated Explainer Videos", desc: "60-second animated product demos that boost trial signups." }
    ],
    faq: [
      ["Why is Next.js ideal for tech and SaaS websites?", "Next.js offers sub-second load times, superior SEO rendering, enterprise security, and effortless scaling for global traffic."],
      ["How do you reduce customer acquisition costs (CAC) for SaaS?", "We optimize user signup funnels, refine ad copy targeting high-intent decision makers, and implement automated retargeting."]
    ]
  },
  "professional-services": {
    slug: "professional-services",
    title: "Professional Services",
    seoTitle: "Professional Services Web Design & SEO Agency in USA | Go Execution",
    eyebrow: "Authority-Driven Digital Growth for Law, Finance & Consulting",
    description: "Go Execution builds authoritative websites and targeted lead generation campaigns for law firms, financial advisors, consulting agencies, and B2B firms in USA.",
    intro: "High-ticket professional services win on trust, reputation, and authority. We build premium corporate websites and execute targeted SEO strategies that generate high-value client inquiries.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&fit=crop",
    stats: [
      ["Authority-First", "High-Trust Corporate Identity"],
      ["Page 1 Rankings", "High-Value Commercial Queries"],
      ["3.5x More", "Qualified Lead Inquiries"]
    ],
    challenges: [
      "Differentiating your practice from established corporate competitors",
      "Converting website visitors into scheduled consultation calls",
      "Dominating Google Page 1 search results for high-value legal and financial terms"
    ],
    solutions: [
      "Authority-building corporate web design with clear consultation scheduling",
      "High-intent SEO campaigns targeting high-value commercial queries",
      "Corporate brand identity and executive presentation materials"
    ],
    services: [
      { categorySlug: "web-development", slug: "custom-web-development", title: "Corporate Web Portals", desc: "High-trust corporate web design built for consultation bookings." },
      { categorySlug: "seo", slug: "technical-seo", title: "Technical & B2B SEO", desc: "Dominating high-value commercial search terms in your market." },
      { categorySlug: "design-branding", slug: "brand-identity", title: "Brand Identity Systems", desc: "Corporate branding and executive media kits." }
    ],
    faq: [
      ["How can a website redesign help our firm win bigger clients?", "A premium, fast website signals market leadership, presents clear case results, and makes consultation scheduling effortless."],
      ["How do you measure SEO success for professional service firms?", "We track high-intent organic search rankings, qualified phone calls, form submissions, and actual consultation bookings."]
    ]
  },
  "health-wellness": {
    slug: "health-wellness",
    title: "Health & Wellness",
    seoTitle: "Health & Wellness Web Design & Marketing Services in USA | Go Execution",
    eyebrow: "HIPAA-Compliant Digital Solutions for Healthcare & Wellness",
    description: "Go Execution builds trusted health & wellness websites, booking platforms, and local SEO marketing campaigns for clinics, wellness brands, and medical practices in USA.",
    intro: "Trust and credibility are paramount in healthcare. We build secure, accessible digital experiences and local SEO search strategies that attract and retain wellness clients.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80&fit=crop",
    stats: [
      ["Encrypted & Secure", "Patient Intake & Booking"],
      ["Top Local Rank", "Google Map Pack Dominance"],
      ["High-Trust", "Patient Acquisition Engine"]
    ],
    challenges: [
      "Building patient trust online while complying with privacy standards",
      "Friction in online appointment scheduling and patient intake",
      "High customer acquisition costs in competitive local markets"
    ],
    solutions: [
      "Secure, responsive web portals with integrated appointment booking",
      "Local SEO and Google Business Profile optimization for patient acquisition",
      "Educative video animation content that clarifies treatment value"
    ],
    services: [
      { categorySlug: "web-development", slug: "custom-web-development", title: "Healthcare Web Portals", desc: "Encrypted, accessible websites with seamless online booking." },
      { categorySlug: "seo", slug: "local-seo", title: "Local Patient SEO", desc: "Dominating local clinic searches and Google Maps results." },
      { categorySlug: "video", slug: "video-animation", title: "Treatment Explainer Videos", desc: "Educative motion graphics clarifying medical treatments." }
    ],
    faq: [
      ["Are your health and wellness websites secure?", "Yes, we build encrypted, accessible, and compliant web platforms designed to protect patient inquiries and data."],
      ["How can local SEO help our wellness clinic?", "Local SEO puts your clinic at the top of Google Maps and local search when patients in your area search for your services."]
    ]
  }
};

export const industryList = Object.values(industries);
