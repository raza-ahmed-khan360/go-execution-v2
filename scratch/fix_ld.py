import re

with open('lib/services.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_ld = '''  "logo-design": {
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
  },'''

pattern = re.compile(r'  "logo-design": \{[\s\S]*?relatedBlogSlugs: \[.*?\]\n  \},')
content = pattern.sub(new_ld, content)

with open('lib/services.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully replaced logo-design content.")
