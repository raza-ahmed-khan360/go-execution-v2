import re

with open('lib/services.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_bi = '''  "brand-identity": {
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
  },'''

# Use regex to find the brand-identity block and replace it
pattern = re.compile(r'  "brand-identity": \{[\s\S]*?relatedBlogSlugs: \[.*?\]\n  \},')
content = pattern.sub(new_bi, content)

with open('lib/services.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully replaced brand-identity content.")
