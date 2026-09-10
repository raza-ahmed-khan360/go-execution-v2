import re

with open('lib/services.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_explainer = '''  "explainer-videos": {
    slug: "explainer-videos",
    categorySlug: "video",
    title: "SaaS & B2B Explainer Videos",
    seoTitle: "B2B Explainer Video Company | SaaS Explainer Video Agency",
    eyebrow: "Simplifying Complex Value Propositions",
    description: "Go Execution is a leading B2B explainer video company offering animated explainer video production for SaaS startups and enterprise tech brands.",
    intro: "Turn complex enterprise workflows into simple 60-second video stories. As a specialized B2B explainer video company, we create animated product narratives that drive demo requests and pipeline.",
    overview: "SaaS products and enterprise platforms are notoriously difficult to explain through text alone. Our explainer video agency combines persuasive problem-solution scripts with broadcast-quality motion graphics to convert prospects instantly. Consistently ranked among the best explainer video companies for B2B, we offer full-service animated explainer video production—handling everything from messaging strategy to storyboards, voiceover, and final animation.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "B2B Explainer Video Company",
      "SaaS Explainer Video Agency Scripts",
      "Animated Explainer Video Production",
      "Explainer Video Services for Enterprise Tech"
    ],
    process: [
      ["Core Message Discovery", "Distilling your complex B2B value proposition into a clear, compelling 60-second script."],
      ["Storyboard & Style Frame", "Designing exact visual scenes matching your brand identity and UI/UX flows."],
      ["Voice & Sound Alignment", "Pairing professional voiceover with energetic background audio and custom sound design."],
      ["Production & Embedding", "Delivering final video files optimized for landing pages, LinkedIn ads, and sales enablement."]
    ],
    faq: [
      ["Why hire a specialized B2B explainer video agency?", "Consumer video agencies struggle to understand complex SaaS architectures. As a B2B explainer video company, we specialize in simplifying dense technical information into high-converting stories."],
      ["Where should we feature B2B explainer videos?", "Place them above the fold on your homepage, core product pages, and embed them in outbound sales emails to immediately clarify your value."]
    ],
    relatedServices: ["video-animation", "2d-animation"],
    relatedIndustries: ["technology", "professional-services"],
    relatedBlogSlugs: ["b2b-saas-seo-strategy", "custom-web-development-vs-website-builders", "how-much-does-custom-web-development-cost"]
  },'''

pattern = re.compile(r'  "explainer-videos": \{[\s\S]*?relatedBlogSlugs: \[.*?\]\n  \},')
content = pattern.sub(new_explainer, content)

with open('lib/services.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully replaced explainer-videos content with Content Gap keywords.")
