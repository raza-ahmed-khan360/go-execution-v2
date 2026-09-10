import re

with open('lib/services.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_2d = '''  "2d-animation": {
    slug: "2d-animation",
    categorySlug: "video",
    title: "2D Animation Services",
    seoTitle: "2D Animation Services & Professional 2D Animation Company",
    eyebrow: "Fluid 2D Character & Vector Motion",
    description: "Our 2D animation company provides professional 2D animation services, creating vector motion graphics and explainer videos for B2B brands.",
    intro: "Engage prospects with fluid, professional 2D animation services. We specialize in B2B storytelling, explaining complex service workflows, and launching high-converting video campaigns.",
    overview: "As a specialized 2D animation company, we craft custom character rigs, vibrant vector scenes, and smooth transitions that capture attention. Our 2D video animation services go beyond basic templates—we design custom 2D animation styles tailored to your enterprise brand. Whether you need an engaging explainer video or short-form content for LinkedIn, our 2D animation studio delivers broadcast-quality motion graphics.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "Professional 2D Animation Services",
      "2D Animation Company Rigs",
      "2D Video Animation Services",
      "2D Animation Studio Motion Graphics"
    ],
    process: [
      ["Script & Character Design", "Designing unique brand characters and narrative scenes optimized for B2B audiences."],
      ["Storyboard Approval", "Reviewing frame-by-frame visual progression in your chosen 2D animation style."],
      ["2D Motion Production", "Keyframing smooth character movements and text motion in our 2D animation studio."],
      ["Sound Mix & Delivery", "Adding background score, sound effects, and voiceover for final delivery."]
    ],
    faq: [
      ["Why choose a professional 2D animation company?", "Professional 2D animation services ensure your brand looks credible. We create custom assets rather than using stock vectors, delivering higher engagement."],
      ["What is included in your 2D video animation services?", "Our 2D animation studio handles end-to-end production, including scriptwriting, storyboarding, custom illustration, animation, and professional voiceover."]
    ],
    relatedServices: ["video-animation", "explainer-videos"],
    relatedIndustries: ["health-wellness", "technology"],
    relatedBlogSlugs: ["custom-web-development-vs-website-builders", "b2b-saas-seo-strategy", "how-much-does-custom-web-development-cost"]
  },'''

pattern = re.compile(r'  "2d-animation": \{[\s\S]*?relatedBlogSlugs: \[.*?\]\n  \},')
content = pattern.sub(new_2d, content)

with open('lib/services.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully replaced 2d-animation content with Content Gap keywords.")
