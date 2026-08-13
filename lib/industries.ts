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
    seoTitle: "Real Estate Digital Marketing & Web Development Agency | Go Execution",
    eyebrow: "Lead Generation & Digital Platforms for Real Estate",
    description: "Go Execution is a top real estate marketing agency in the USA providing real estate digital marketing, real estate website development, real estate web development, and real estate SEO services.",
    intro: "Real estate decisions start online. Our real estate marketing agency builds immersive property showcase platforms, MLS search tools, and real estate digital marketing campaigns.",
    image: "/assets/images/generated/real-estate.jpg",
    stats: [
      ["MLS/IDX Sync", "Sub-second Property Search"],
      ["+240%", "Real Estate Digital Marketing Growth"],
      ["Hyper-Targeted", "PPC & Meta Campaign ROAS"]
    ],
    challenges: [
      "Standing out among national property portals and local brokerages",
      "Capturing qualified seller listings and high-net-worth buyers",
      "Slow property search interfaces causing high bounce rates"
    ],
    solutions: [
      "Real estate web development with sub-second property search filtering",
      "Real estate digital marketing campaigns for seller listings",
      "Real estate SEO services and local Map Pack dominance"
    ],
    services: [
      { categorySlug: "web-development", slug: "custom-web-development", title: "Real Estate Web Development", desc: "Fast MLS/IDX map search portals built with Next.js." },
      { categorySlug: "web-development", slug: "landing-page-development", title: "Real Estate Website Development", desc: "High-converting valuation landing pages for listing leads." },
      { categorySlug: "digital-marketing", slug: "paid-advertising", title: "Real Estate Digital Marketing", desc: "Targeted Google Ads capturing active home buyers & sellers." },
      { categorySlug: "seo", slug: "local-seo", title: "Real Estate SEO Services", desc: "Dominating local search in target property markets." }
    ],
    faq: [
      ["Why hire a specialized real estate marketing agency?", "A real estate marketing agency builds high-converting MLS portals and executes real estate digital marketing tailored to home buyers and sellers."],
      ["What is included in your real estate SEO services?", "Our real estate SEO services optimize property collection pages, local Map pack visibility, and neighborhood keyword targeting."]
    ]
  },
  "fashion": {
    slug: "fashion",
    title: "Fashion & Apparel",
    seoTitle: "Fashion Digital Marketing & Fashion Website Development Agency",
    eyebrow: "E-Commerce & Digital Growth for Fashion Brands",
    description: "Go Execution is a premier fashion marketing agency in the USA providing fashion digital marketing, fashion website development, fashion ecommerce marketing, and fashion SEO services.",
    intro: "Fashion and apparel brands require visual elegance and high performance. Our fashion marketing agency engineers luxury ecommerce platforms and fashion digital marketing campaigns.",
    image: "/assets/images/generated/fashion-apparel.jpg",
    stats: [
      ["< 1.0s", "Fashion Store Load Speed"],
      ["3.8x Avg", "Fashion Ecommerce Marketing ROAS"],
      ["100% Custom", "Shopify & Headless UX"]
    ],
    challenges: [
      "High competition in online fashion search and paid ad channels",
      "Slow page load speeds destroying mobile conversion rates",
      "Low customer lifetime value and retention across seasonal collections"
    ],
    solutions: [
      "Sub-second fashion website development for mobile storefronts",
      "Fashion ecommerce marketing with UGC video motion graphics",
      "Fashion SEO services targeting high-volume category terms"
    ],
    services: [
      { categorySlug: "web-development", slug: "ecommerce-development", title: "Fashion Website Development", desc: "Mobile-first Shopify & Next.js stores engineered for conversion." },
      { categorySlug: "digital-marketing", slug: "social-media-marketing", title: "Fashion Ecommerce Marketing", desc: "High-converting video creative campaigns across Meta & TikTok." },
      { categorySlug: "seo", slug: "ecommerce-seo", title: "Fashion SEO Services", desc: "Ranking apparel collection categories at top of Google." }
    ],
    faq: [
      ["Why choose Go Execution for fashion website development?", "We build luxury e-commerce platforms with sub-second loading speeds, mobile-first navigation, and seamless checkout flows."],
      ["What results do fashion digital marketing campaigns deliver?", "Our fashion digital marketing strategies combine paid social ads, influencer UGC, and fashion SEO services to scale online orders."]
    ]
  },
  "retail": {
    slug: "retail",
    title: "Retail & Consumer Goods",
    seoTitle: "Retail Digital Marketing & Retail Ecommerce Development Agency",
    eyebrow: "Omnichannel Growth & E-Commerce Platforms",
    description: "Go Execution is a top retail marketing agency in the USA offering retail digital marketing, retail website development, retail ecommerce development, and retail SEO services.",
    intro: "Modern retail demands seamless integration between online stores and customer acquisition channels. Our retail marketing agency builds scalable retail ecommerce development storefronts.",
    image: "/assets/images/generated/retail-ecommerce.jpg",
    stats: [
      ["1-Click Checkout", "Instant Frictionless Purchasing"],
      ["+210%", "Retail SEO Services Transaction Growth"],
      ["Multi-Channel", "Catalog & Inventory Sync"]
    ],
    challenges: [
      "Friction in mobile shopping carts leading to abandoned checkouts",
      "Managing complex inventory and multi-channel product catalogs",
      "High customer acquisition cost in competitive retail categories"
    ],
    solutions: [
      "Retail website development and custom Shopify storefronts",
      "Retail SEO services targeting commercial product keywords",
      "Retail digital marketing campaigns to re-engage browsing shoppers"
    ],
    services: [
      { categorySlug: "web-development", slug: "ecommerce-development", title: "Retail Ecommerce Development", desc: "Scalable e-commerce platforms with real-time inventory sync." },
      { categorySlug: "seo", slug: "ecommerce-seo", title: "Retail SEO Services", desc: "Ranking category pages and product SKUs at top of Google." },
      { categorySlug: "digital-marketing", slug: "conversion-optimisation", title: "Retail Digital Marketing", desc: "Streamlining cart flows to boost Average Order Value (AOV)." }
    ],
    faq: [
      ["How does retail ecommerce development boost sales?", "By offering 1-click checkout, fast page speeds, and clean product discovery navigation."],
      ["What is included in retail SEO services?", "We optimize category hierarchy, product schema data, and high-volume commercial retail search terms."]
    ]
  },
  "hospitality": {
    slug: "hospitality",
    title: "Hospitality & Leisure",
    seoTitle: "Hospitality Digital Marketing & Website Development Agency",
    eyebrow: "Direct Booking Platforms & Growth for Hotels & Venues",
    description: "Go Execution is a premier hospitality marketing agency in the USA offering hospitality digital marketing, hospitality website development, hotel digital marketing, and hospitality SEO services.",
    intro: "Hospitality brands thrive on sensory storytelling and direct bookings. Our hospitality marketing agency engineers fast booking portals and hotel digital marketing campaigns.",
    image: "/assets/images/generated/hospitality.jpg",
    stats: [
      ["0% Commission", "Direct Booking Engines"],
      ["4K Motion", "Hotel Digital Marketing"],
      ["+175%", "Direct Reservation Revenue"]
    ],
    challenges: [
      "High commissions paid to third-party Online Travel Agencies (OTAs)",
      "Slow, outdated booking engines leading to abandoned reservations",
      "Building brand loyalty across seasonal travel periods"
    ],
    solutions: [
      "Hospitality website development with direct booking engines",
      "Hotel digital marketing campaigns for targeted travel intent",
      "Hospitality SEO services targeting destination search terms"
    ],
    services: [
      { categorySlug: "web-development", slug: "custom-web-development", title: "Hospitality Website Development", desc: "Luxury resort & hotel sites with zero OTA commission friction." },
      { categorySlug: "digital-marketing", slug: "social-media-marketing", title: "Hotel Digital Marketing", desc: "Visual ad campaigns targeting travelers actively planning trips." },
      { categorySlug: "seo", slug: "local-seo", title: "Hospitality SEO Services", desc: "Capturing local travel queries and Google Maps positioning." }
    ],
    faq: [
      ["How can hospitality website development reduce OTA commissions?", "Custom direct booking portals offer faster reservations, exclusive rates, and zero third-party fees."],
      ["What makes hospitality SEO services essential?", "Hospitality SEO puts your resort or venue at the top of Google search when travelers look for destination accommodations."]
    ]
  },
  "technology": {
    slug: "technology",
    title: "Technology & SaaS",
    seoTitle: "Technology Digital Marketing Agency & SaaS Marketing | Go Execution",
    eyebrow: "Scalable Web Platforms & Growth Funnels for Tech Companies",
    description: "Go Execution is a leading technology digital marketing agency and SaaS marketing agency providing technology website development, SaaS digital marketing, and technology SEO services.",
    intro: "Tech companies demand technical precision and clear value propositions. Our technology digital marketing agency builds Next.js platforms and SaaS growth engines.",
    image: "/assets/images/generated/tech-saas.jpg",
    stats: [
      ["Next.js SSR", "Technology Website Development"],
      ["Lower CAC", "SaaS Digital Marketing"],
      ["Interactive", "SaaS Demo & Trial Funnels"]
    ],
    challenges: [
      "Communicating complex tech architectures in simple, persuasive terms",
      "High customer acquisition cost (CAC) in B2B SaaS marketing",
      "Converting free trial users into long-term paid subscribers"
    ],
    solutions: [
      "Sub-second technology website development using Next.js",
      "SaaS digital marketing campaigns targeting decision makers",
      "Technology SEO services capturing high-intent B2B search volume"
    ],
    services: [
      { categorySlug: "web-development", slug: "nextjs-development", title: "Technology Website Development", desc: "Sub-second SSR web applications built with Next.js and React." },
      { categorySlug: "digital-marketing", slug: "paid-advertising", title: "SaaS Digital Marketing", desc: "Targeted LinkedIn and Google Search campaigns for decision makers." },
      { categorySlug: "seo", slug: "technical-seo", title: "Technology SEO Services", desc: "Technical B2B SEO strategies for tech platforms." }
    ],
    faq: [
      ["Why hire a dedicated technology marketing agency?", "We understand complex SaaS products, technical target audiences, and B2B customer acquisition funnels."],
      ["What is included in SaaS digital marketing?", "We combine search ads, LinkedIn lead generation, automated trial retargeting, and technology SEO services."]
    ]
  },
  "professional-services": {
    slug: "professional-services",
    title: "Professional Services",
    seoTitle: "Professional Services Marketing Agency & SEO Services | Go Execution",
    eyebrow: "Authority-Driven Digital Growth for Law, Finance & Consulting",
    description: "Go Execution is a top professional services marketing agency in the USA providing professional services digital marketing, professional services website development, and professional services SEO.",
    intro: "High-ticket professional services win on authority. Our professional services marketing agency builds high-trust corporate websites and targeted SEO lead engines.",
    image: "/assets/images/generated/prof-services.jpg",
    stats: [
      ["Authority-First", "High-Trust Corporate Identity"],
      ["Page 1 Rankings", "Professional Services SEO"],
      ["3.5x More", "Qualified Lead Inquiries"]
    ],
    challenges: [
      "Differentiating your practice from established corporate competitors",
      "Converting website visitors into scheduled consultation calls",
      "Dominating Google Page 1 search results for high-value legal and financial terms"
    ],
    solutions: [
      "Professional services website development built for consultations",
      "Professional services SEO campaigns targeting commercial queries",
      "Professional services digital marketing driving qualified client leads"
    ],
    services: [
      { categorySlug: "web-development", slug: "custom-web-development", title: "Professional Services Web Development", desc: "High-trust corporate web design built for consultation bookings." },
      { categorySlug: "seo", slug: "technical-seo", title: "Professional Services SEO", desc: "Dominating high-value commercial search terms in your market." },
      { categorySlug: "digital-marketing", slug: "paid-advertising", title: "Professional Services Marketing", desc: "Targeted B2B lead generation campaigns for law, finance & consulting." }
    ],
    faq: [
      ["How does professional services marketing generate corporate leads?", "We target high-intent decision makers through search ads, authority web platforms, and consultation booking flows."],
      ["What results can we expect from professional services SEO?", "Our professional services SEO strategies secure Page 1 rankings for competitive legal, financial, and consulting search terms."]
    ]
  },
  "health-wellness": {
    slug: "health-wellness",
    title: "Health & Wellness",
    seoTitle: "Healthcare Digital Marketing Agency & Wellness Marketing",
    eyebrow: "HIPAA-Compliant Digital Solutions for Healthcare & Wellness",
    description: "Go Execution is a premier health and wellness marketing agency and healthcare digital marketing agency providing healthcare website development and healthcare SEO services.",
    intro: "Trust and credibility are essential in healthcare. Our health and wellness marketing agency builds secure web portals and healthcare digital marketing strategies.",
    image: "/assets/images/generated/prof-services.jpg",
    stats: [
      ["Encrypted & Secure", "Patient Intake & Booking"],
      ["Top Local Rank", "Google Map Pack Dominance"],
      ["High-Trust", "Healthcare SEO Services Engine"]
    ],
    challenges: [
      "Building patient trust online while complying with privacy standards",
      "Friction in online appointment scheduling and patient intake",
      "High customer acquisition costs in competitive local markets"
    ],
    solutions: [
      "Healthcare website development with online booking integration",
      "Healthcare digital marketing and local search campaigns",
      "Healthcare SEO services driving clinic and practice visibility"
    ],
    services: [
      { categorySlug: "web-development", slug: "custom-web-development", title: "Healthcare Website Development", desc: "Encrypted, accessible websites with seamless online booking." },
      { categorySlug: "seo", slug: "local-seo", title: "Healthcare SEO Services", desc: "Dominating local clinic searches and Google Maps results." },
      { categorySlug: "digital-marketing", slug: "social-media-marketing", title: "Healthcare Digital Marketing", desc: "Targeted patient awareness campaigns for clinics and wellness practices." }
    ],
    faq: [
      ["Why hire a specialized healthcare digital marketing agency?", "A healthcare digital marketing agency understands medical trust, local patient acquisition, and compliant booking flows."],
      ["How do healthcare SEO services increase patient appointments?", "Healthcare SEO services optimize your practice for local searches like 'best clinic near me' and top medical treatment terms."]
    ]
  }
};

export const industryList = Object.values(industries);
