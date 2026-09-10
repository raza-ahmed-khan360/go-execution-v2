import re

with open('lib/services.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_gd = '''  "graphic-design": {
    slug: "graphic-design",
    categorySlug: "design-branding",
    title: "Graphic Design Services",
    seoTitle: "Graphic Design Services | Premier Graphic Design Agency",
    eyebrow: "Professional Visual Communication",
    description: "Scale your brand with expert graphic design services. Our graphic design agency produces premium sales collateral, digital marketing assets, and corporate presentations.",
    intro: "First impressions are decided in milliseconds. Our professional graphic design services engineer visual assets that demand attention, communicate trust, and accelerate conversions for ambitious B2B and B2C brands.",
    overview: "As a full-service graphic design agency, we move beyond basic aesthetics. We analyze your market positioning to deliver strategic visual communication—from high-converting social media graphics and investor pitch decks to enterprise sales collateral and print-ready marketing materials. Whether you are launching a new campaign or standardizing your visual identity, our dedicated design team ensures every asset aligns seamlessly with your overarching brand strategy.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Digital Marketing & Social Media Assets",
      "Sales Collateral & Presentation Decks",
      "Print-Ready Advertising & Packaging Design",
      "Corporate Reports & Whitepaper Formatting"
    ],
    process: [
      ["Strategic Discovery", "We evaluate your brand guidelines, target audience, and campaign objectives before any pixels are pushed."],
      ["Concept Development", "Our design team develops high-fidelity visual concepts that align with your required deliverables."],
      ["Refinement Cycles", "We collaborate closely to iterate and perfect the visual hierarchy, typography, and color balance."],
      ["Asset Handoff", "You receive fully organized, production-ready files (Vector AI, EPS, PDF, WebP) with 100% commercial ownership."]
    ],
    faq: [
      ["Why should we partner with a specialized graphic design agency?", "Partnering with a specialized graphic design agency ensures your visual assets are built strategically to drive conversions, rather than just looking pretty. We ensure brand consistency across every single touchpoint."],
      ["What types of graphic design services do you offer?", "Our graphic design services cover digital advertising creatives, social media content, corporate pitch decks, whitepapers, brochures, out-of-home (OOH) print materials, and custom illustrations."],
      ["Do we own the copyright to the final designs?", "Absolutely. Once the project is completed and paid for, you retain 100% full commercial rights and receive all original source files and vector assets."]
    ],
    relatedServices: ["logo-design", "brand-identity", "creative-design"],
    relatedIndustries: ["technology", "professional-services", "retail"],
    relatedBlogSlugs: ["custom-web-development-vs-website-builders", "how-to-redesign-a-website-without-losing-seo"]
  },'''

# Use regex to find the graphic-design block and replace it
pattern = re.compile(r'  "graphic-design": \{[\s\S]*?relatedBlogSlugs: \[.*?\]\n  \},')
content = pattern.sub(new_gd, content)

with open('lib/services.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully replaced graphic-design content.")
