import re

with open('lib/services.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_cd = '''  "creative-design": {
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
  },'''

# We need to replace the specific creative-design block
pattern = re.compile(r'  "creative-design": \{[\s\S]*?relatedBlogSlugs: \[.*?\]\n  \},')
content = pattern.sub(new_cd, content)

with open('lib/services.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully replaced creative-design content with Content Gap keywords.")
