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

const industryVisuals: Record<string, string> = {
  "real-estate": "/assets/images/generated/real-estate.jpg",
  fashion: "/assets/images/generated/fashion-apparel.jpg",
  retail: "/assets/images/generated/retail-ecommerce.jpg",
  hospitality: "/assets/images/generated/hospitality.jpg",
  technology: "/assets/images/generated/tech-saas.jpg",
  "professional-services": "/assets/images/generated/prof-services.jpg",
  "health-wellness": "/assets/images/generated/health-wellness-growth.png",
};

const industryEntries: Record<string, Industry> = {
  "real-estate": {
    slug: "real-estate",
    title: "Real Estate",
    seoTitle: "Real Estate SEO Services & Digital Marketing Agency | Go Execution",
    eyebrow: "Leading Real Estate SEO Expert & Digital Growth Firm",
    description: "Looking for the best SEO company for real estate? Go Execution delivers proven real estate SEO services, high-converting web design, and digital marketing.",
    intro: "In a hyper-competitive housing and commercial market, search visibility is everything. As a specialized real estate SEO agency and digital marketing company, Go Execution engineers custom growth strategies for brokerages, investors, and agencies. Whether you need hyper-local SEO for real estate agents or comprehensive paid ad campaigns, our real estate SEO experts ensure your brand captures active home buyers and commercial clients before your competitors do.",
    image: "/assets/images/logo-light.png",
    stats: [
      ["#1 Map Pack", "Local SEO Visibility"],
      ["Sub-second", "Property Search Speeds"],
      ["3x Higher", "Lead Conversion Rates"]
    ],
    challenges: [
      "Struggling to rank organically against massive national property portals (like Zillow or Realtor.com).",
      "Wasting advertising budget on low-intent clicks instead of capturing qualified sellers and high-net-worth buyers.",
      "Outdated, slow MLS/IDX website interfaces that cause potential clients to bounce immediately."
    ],
    solutions: [
      "Specialized real estate SEO services targeting high-value commercial and residential search terms.",
      "Custom property portals and broker websites optimized for fast, frictionless property discovery.",
      "Data-driven digital marketing campaigns to capture and re-engage in-market buyers and sellers."
    ],
    services: [
      { categorySlug: "seo", slug: "ecommerce-seo", title: "Real Estate SEO Services", desc: "Aggressive organic search optimization for top-tier residential and commercial real estate queries." },
      { categorySlug: "digital-marketing", slug: "paid-advertising", title: "Real Estate Marketing Company", desc: "High-ROAS Meta and Google Search campaigns designed for lead generation." },
      { categorySlug: "seo", slug: "local-seo", title: "SEO for Real Estate Agents", desc: "Dominating local map packs and hyper-local property search results." }
    ],
    faq: [
      ["Why do I need a specialized real estate SEO agency?", "A specialized real estate SEO expert understands how to structure complex MLS data, target the right neighborhood keywords, and outrank massive aggregator sites like Zillow in your local market."],
      ["What is included in your real estate SEO services?", "Our real estate SEO services include in-depth technical audits, property page schema markup, high-quality backlink building, and localized content strategies tailored for agents and brokerages."],
      ["Can a commercial real estate SEO company really drive leads?", "Absolutely. By targeting highly specific, high-intent B2B search terms, our commercial real estate SEO strategies connect you directly with investors and corporate leasing clients."]
    ]
  },
  "fashion": {
    slug: "fashion",
    title: "Fashion & Apparel",
    seoTitle: "Fashion SEO Agency | Top SEO for Fashion Ecommerce | Go Execution",
    eyebrow: "The Premier Fashion SEO Company & Digital Growth Agency",
    description: "Looking for the best fashion SEO agency? Go Execution specializes in SEO for fashion ecommerce, clothing brands, and high-growth retail startups.",
    intro: "The fashion industry moves fast, and your digital presence needs to move faster. As a leading fashion SEO agency and specialized digital marketing firm, Go Execution builds immersive ecommerce experiences and high-ROI search campaigns. From highly technical SEO for fashion ecommerce to luxury brand storytelling, our fashion SEO company ensures your clothing brand captures high-intent shoppers and outranks established competitors.",
    image: "/assets/images/logo-light.png",
    stats: [
      ["Visual Commerce", "Luxury Brand Design"],
      ["+240%", "Organic Fashion Traffic"],
      ["Omnichannel", "Global Social & Search"]
    ],
    challenges: [
      "High bounce rates due to slow-loading high-resolution product imagery and video assets.",
      "Struggling to rank against massive fast-fashion conglomerates for competitive apparel keywords.",
      "Inconsistent ROAS and wasted ad spend on broad audiences without a solid organic SEO foundation."
    ],
    solutions: [
      "Custom fashion ecommerce web design prioritizing sub-second load times and visual storytelling.",
      "Targeted SEO for fashion ecommerce, optimizing category pages and individual SKUs for high-intent buyers.",
      "Integrated digital marketing strategies that combine organic fashion SEO with hyper-targeted paid media."
    ],
    services: [
      { categorySlug: "web-development", slug: "ecommerce-development", title: "Fashion Ecommerce Web Design", desc: "Immersive, mobile-first Shopify and headless builds for luxury clothing brands." },
      { categorySlug: "seo", slug: "ecommerce-seo", title: "Fashion SEO Services", desc: "Aggressive SEO strategies tailored specifically to rank fashion brands at the top of Google." },
      { categorySlug: "digital-marketing", slug: "social-media-marketing", title: "Fashion Digital Marketing", desc: "Visual-first paid social and Google Shopping campaigns for high-converting sales." },
      { categorySlug: "seo", slug: "local-seo", title: "SEO for Clothing Brands", desc: "Specialized search visibility strategies connecting your physical stores with online shoppers." }
    ],
    faq: [
      ["Why do I need a specialized fashion SEO agency?", "General SEO doesn't work for apparel. A specialized fashion SEO company understands how to optimize visual commerce, manage out-of-stock product pages, and target high-converting fashion ecommerce SEO keywords."],
      ["What is included in your SEO services for fashion company?", "Our SEO services for fashion industry clients include technical site speed audits, category page optimization, high-quality backlink building, and content strategies tailored specifically for clothing brands."],
      ["Do you provide SEO for clothing brands and startups?", "Yes, we provide scalable SEO for clothing company startups and established luxury retailers alike, helping them capture market share in highly competitive apparel niches."],
      ["How does SEO for fashion ecommerce differ from regular SEO?", "SEO agencies for fashion ecommerce must know how to optimize faceted navigation, handle seasonal product variations without creating duplicate content, and ensure lightning-fast load times for mobile shoppers."]
    ]
  },
  "retail": {
    slug: "retail",
    title: "Retail & Consumer Goods",
    seoTitle: "Retail SEO Services & Digital Marketing Agency | Go Execution",
    eyebrow: "The Top Retail SEO Company & Omnichannel Growth Agency",
    description: "Looking for the best retail SEO agency? Go Execution offers specialized retail SEO services, ecommerce web design, and digital marketing for retailers.",
    intro: "Modern retail demands seamless integration between online store transactions and in-store foot traffic. As a premier retail SEO company and digital marketing agency, Go Execution builds scalable ecommerce storefronts and highly profitable search campaigns. From specialized SEO for retail to high-ROAS paid media, our retail SEO agency ensures your products outrank big-box competitors and capture high-intent consumer goods shoppers.",
    image: "/assets/images/logo-light.png",
    stats: [
      ["1-Click Checkout", "Instant Frictionless Purchasing"],
      ["+210%", "Organic Retail SEO Growth"],
      ["Multi-Channel", "Catalog & Inventory Sync"]
    ],
    challenges: [
      "Friction in mobile shopping carts and slow load times leading to abandoned checkouts and lost revenue.",
      "Struggling to rank organically against giant big-box retailers for competitive consumer goods keywords.",
      "High customer acquisition costs (CAC) due to wasting ad spend without a solid foundation in SEO for retailers."
    ],
    solutions: [
      "Targeted retail SEO services that optimize category pages and individual product SKUs for high-intent searchers.",
      "Custom retail website development and Shopify storefronts engineered for sub-second speeds and 1-click checkouts.",
      "Comprehensive digital marketing campaigns bridging online retail SEO with hyper-local foot traffic strategies."
    ],
    services: [
      { categorySlug: "web-development", slug: "ecommerce-development", title: "Retail Ecommerce Web Design", desc: "Scalable e-commerce platforms with real-time inventory sync and frictionless checkout." },
      { categorySlug: "seo", slug: "ecommerce-seo", title: "Retail SEO Services", desc: "Aggressive SEO for retail brands to rank product catalogs at the top of Google search." },
      { categorySlug: "digital-marketing", slug: "paid-advertising", title: "Retail Digital Marketing", desc: "High-ROAS Google Shopping and Meta ad campaigns tailored for consumer goods." },
      { categorySlug: "seo", slug: "local-seo", title: "Local SEO for Retailers", desc: "Specialized retail services SEO firm strategies to drive in-store foot traffic via Map Pack dominance." }
    ],
    faq: [
      ["Why do I need a specialized retail SEO agency?", "A specialized retail SEO company understands the unique challenges of complex inventory, faceted navigation, and bridging the gap between online e-commerce sales and physical in-store footfall."],
      ["What do your retail SEO services include?", "Our retail SEO services cover technical site audits, optimizing thousands of product SKUs, managing out-of-stock variations, and executing high-ROI SEO for retailers across local and national markets."],
      ["How is SEO for retail different from general marketing?", "SEO for retail requires a highly technical approach to handle large product catalogs without causing duplicate content issues, while ensuring your category pages rank for broad commercial terms."]
    ]
  },
  "hospitality": {
    slug: "hospitality",
    title: "Hospitality & Leisure",
    seoTitle: "Hotel Web Design Agency & Hospitality Website Development | Go Execution",
    eyebrow: "The Premium Hotel Website Design Company & Branding Firm",
    description: "Looking for a top hotel web design agency? Go Execution specializes in custom hospitality website development, web design, and branding to drive direct bookings.",
    intro: "Hospitality brands thrive on sensory storytelling and frictionless direct bookings. As a leading hotel web design agency and digital branding firm, Go Execution engineers visually stunning booking portals. From custom hotel website development to high-converting user experiences, our hotel website design company ensures your property stands out, minimizes OTA dependency, and maximizes direct revenue.",
    image: "/assets/images/logo-light.png",
    stats: [
      ["Direct Sync", "PMS/Booking Integrations"],
      ["+160%", "Increase in Direct Bookings"],
      ["Immersive", "Video & 3D Tour UX"]
    ],
    challenges: [
      "Over-reliance on OTAs (Expedia, Booking.com) resulting in massive commission losses and lower profit margins.",
      "Outdated, clunky hotel websites that fail to convey the luxury of your property and cause high bounce rates.",
      "Poor mobile booking experiences that frustrate travelers trying to reserve rooms on their smartphones."
    ],
    solutions: [
      "Custom hotel website development by expert web designers, integrated seamlessly with your PMS and booking engine.",
      "Immersive hospitality web design that uses high-impact photography, video, and intuitive UI to sell the experience.",
      "Conversion-optimized booking flows that shift reservations away from OTAs and directly to your own platform."
    ],
    services: [
      { categorySlug: "web-development", slug: "custom-web-development", title: "Hotel Website Development Agency", desc: "Custom Next.js & WordPress sites fully integrated with major booking engines." },
      { categorySlug: "web-development", slug: "landing-page-development", title: "Hospitality Web Design", desc: "Visually stunning, mobile-first designs for luxury resorts and boutique hotels." },
      { categorySlug: "digital-marketing", slug: "social-media-marketing", title: "Hotel Branding & Identity", desc: "Crafting premium brand stories that resonate with high-net-worth travelers." },
      { categorySlug: "seo", slug: "local-seo", title: "Hospitality SEO", desc: "Driving organic traffic to your new hotel website through targeted local search." }
    ],
    faq: [
      ["Why should I hire a specialized hotel web design agency?", "A specialized hotel website design company understands the technical requirements of integrating Property Management Systems (PMS), optimizing for ADA compliance, and designing mobile-first booking engines."],
      ["What is included in your hotel website development services?", "Our hotel website development agency handles everything from immersive UI/UX design and copywriting to technical API integrations with systems like SynXis, TravelClick, and Cloudbeds."],
      ["Can a new hotel website help reduce OTA commissions?", "Yes! By investing in a premium hotel web design company, you create a frictionless, trustworthy direct booking experience that convinces travelers to book directly rather than through third-party platforms."]
    ]
  },
  "technology": {
    slug: "technology",
    title: "Technology & SaaS",
    seoTitle: "B2B SaaS Marketing Agency & SaaS Web Design Agency | Go Execution",
    eyebrow: "The Premier B2B Tech Marketing & SaaS Web Design Agency",
    description: "Looking for a top B2B SaaS marketing agency? Go Execution is a specialized SaaS web design agency and technology marketing firm driving ARR growth.",
    intro: "In the fast-paced SaaS and tech landscape, product superiority isn't enough to guarantee pipeline growth. As a leading B2B SaaS marketing agency and specialized SaaS web design agency, Go Execution builds the growth engines that software companies rely on. From highly technical B2B tech marketing campaigns that lower CAC to Next.js web development for high-converting SaaS product pages, our technology marketing agency connects you with enterprise decision-makers.",
    image: "/assets/images/logo-light.png",
    stats: [
      ["Next.js SSR", "SaaS Web Design Agency"],
      ["Lower CAC", "B2B SaaS Marketing Agency"],
      ["Predictable", "Tech Marketing Pipeline"]
    ],
    challenges: [
      "High customer acquisition cost (CAC) and long sales cycles in enterprise B2B SaaS marketing.",
      "Outdated SaaS web design that fails to clearly communicate complex technical features and product architecture.",
      "Converting free-trial and freemium users into long-term, high-LTV paid software subscribers."
    ],
    solutions: [
      "Custom SaaS web design and Next.js development to build lightning-fast, high-converting product landing pages.",
      "Data-driven B2B SaaS marketing agency strategies focused on pipeline velocity, MQL generation, and churn reduction.",
      "Comprehensive B2B tech marketing campaigns across LinkedIn Ads, Google Search, and technical content SEO."
    ],
    services: [
      { categorySlug: "web-development", slug: "nextjs-development", title: "SaaS Web Design Agency", desc: "Sub-second Next.js web applications and conversion-optimized product marketing sites." },
      { categorySlug: "digital-marketing", slug: "paid-advertising", title: "B2B SaaS Marketing Agency", desc: "Demand generation and Account-Based Marketing (ABM) for tech companies." },
      { categorySlug: "seo", slug: "technical-seo", title: "SaaS SEO & Content", desc: "Technical B2B SEO strategies and topic clusters to capture high-intent software buyers." }
    ],
    faq: [
      ["Why should we hire a specialized B2B SaaS marketing agency?", "A specialized B2B tech marketing agency understands complex software architectures, long B2B buying cycles, and SaaS-specific metrics like ARR, CAC, and LTV."],
      ["What is included in your SaaS web design agency services?", "Our SaaS web design services include UX/UI design for product marketing pages, conversion rate optimization (CRO) for trial signups, and scalable CMS architectures like Webflow or headless CMS."],
      ["Can your technology marketing agency help us pivot to enterprise sales?", "Yes, our B2B SaaS marketing agency implements highly targeted Account-Based Marketing (ABM) strategies specifically designed to engage enterprise C-suite decision-makers."]
    ]
  },
  "professional-services": {
    slug: "professional-services",
    title: "Professional Services",
    seoTitle: "Professional Services Marketing Agency | Go Execution",
    eyebrow: "Authority-Driven Digital Growth for Law, Finance & Consulting",
    description: "Digital marketing for professional service firms, combining credible websites, lead generation, content, SEO, paid media, and conversion strategy.",
    intro: "High-ticket professional services win on authority. Our professional services marketing agency builds high-trust corporate websites and targeted SEO lead engines.",
    image: "/assets/images/logo-light.png",
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
    description: "Digital marketing for health and wellness brands, including accessible websites, local SEO, content, paid campaigns, and customer acquisition.",
    intro: "Trust and credibility are essential in healthcare. Our health and wellness marketing agency builds secure web portals and healthcare digital marketing strategies.",
    image: "/assets/images/logo-light.png",
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

export const industries: Record<string, Industry> = Object.fromEntries(
  Object.entries(industryEntries).map(([slug, industry]) => [
    slug,
    {
      ...industry,
      image: industryVisuals[slug] ?? industry.image,
    },
  ]),
);

export const industryList = Object.values(industries);
