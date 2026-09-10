import re

with open('lib/services.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_gd = '''  "graphic-design": {
    slug: "graphic-design",
    categorySlug: "design-branding",
    title: "Graphic Design Services",
    seoTitle: "Graphic Design Services | Branding & Creative Design Agency",
    eyebrow: "Full Service Graphic Design & Visual Assets",
    description: "Go Execution is a premier website graphic design agency offering creative design services, illustration design, and complete branding and graphic design services.",
    intro: "First impressions are decided in milliseconds. Our comprehensive branding and graphic design services engineer visual assets that demand attention, communicate trust, and accelerate conversions for ambitious B2B and B2C brands.",
    overview: "As a leading graphic design services company, we provide full service graphic design tailored to scale with your business. Whether you need content design services for social media, complex B2B sales collateral, or illustration design services to simplify your SaaS product, our team acts as your dedicated creative partner. We operate far beyond basic aesthetics—positioning ourselves as a specialized website graphic design agency that integrates stunning visuals with high-performance digital marketing. Enjoy the flexibility of graphic design as a service, delivering consistent, top-tier creative design services exactly when you need them.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Branding and Graphic Design Services",
      "Creative Graphic Design Services & Strategy",
      "Website Graphic Design Agency Integration",
      "Illustration Design Services & Custom Vectors",
      "Content Design Services for Digital Marketing"
    ],
    process: [
      ["Strategic Discovery", "We evaluate your brand guidelines, target audience, and campaign objectives before providing any creative graphic design services."],
      ["Concept Development", "Our design team develops high-fidelity visual concepts that align with your required deliverables."],
      ["Refinement Cycles", "We collaborate closely to iterate and perfect the visual hierarchy, typography, and color balance."],
      ["Asset Handoff", "You receive fully organized, production-ready files (Vector AI, EPS, PDF, WebP) with 100% commercial ownership."]
    ],
    faq: [
      ["Do you provide graphic design as a service (retainer model)?", "Yes, we offer graphic design as a service for enterprise clients who need ongoing, full service graphic design without the overhead of hiring an internal team."],
      ["What is included in your creative design services?", "Our creative design services cover digital advertising creatives, social media content, corporate pitch decks, whitepapers, UI/UX asset creation, and custom illustration design services."],
      ["Why hire a dedicated graphic design services company?", "Partnering with a specialized graphic design services company ensures your visual assets are built strategically to drive conversions. As a top website graphic design agency, we ensure brand consistency across every single digital touchpoint."]
    ],
    relatedServices: ["logo-design", "brand-identity", "creative-design"],
    relatedIndustries: ["technology", "professional-services", "retail"],
    relatedBlogSlugs: ["custom-web-development-vs-website-builders", "how-to-redesign-a-website-without-losing-seo"]
  },'''

# We need to replace the specific graphic-design block
pattern = re.compile(r'  "graphic-design": \{[\s\S]*?relatedBlogSlugs: \[.*?\]\n  \},')
content = pattern.sub(new_gd, content)

with open('lib/services.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully replaced graphic-design content with Content Gap keywords.")
