import re

with open('lib/services.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_cro = '''  "conversion-optimisation": {
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
  },'''

pattern = re.compile(r'  "conversion-optimisation": \{[\s\S]*?relatedBlogSlugs: \[.*?\]\n  \},')
content = pattern.sub(new_cro, content)

with open('lib/services.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully replaced conversion-optimisation content with Content Gap keywords.")
