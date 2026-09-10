import re

with open('lib/services.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_pa = '''  "paid-advertising": {
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
  },'''

pattern = re.compile(r'  "paid-advertising": \{[\s\S]*?relatedBlogSlugs: \[.*?\]\n  \},')
content = pattern.sub(new_pa, content)

with open('lib/services.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully replaced paid-advertising content with Content Gap keywords.")
