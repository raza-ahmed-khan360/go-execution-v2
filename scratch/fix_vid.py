import re

with open('lib/services.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_vid = '''  "video-animation": {
    slug: "video-animation",
    categorySlug: "video",
    title: "B2B Video Marketing",
    seoTitle: "B2B Video Marketing Agency | Expert Video Production Company",
    eyebrow: "Cinematic B2B Motion & Storytelling",
    description: "Go Execution is a premier B2B video marketing agency offering enterprise video production, 2D/3D animation, and SaaS video services.",
    intro: "Hook enterprise decision-makers in seconds. As a leading B2B video marketing agency, we produce cinematic motion graphics, live-action brand films, and animated product explainers.",
    overview: "Complex B2B products require specialized storytelling. A standard video advertising agency focuses on consumer trends, but we are a dedicated B2B video production agency. From crafting high-impact SaaS videos and corporate brand anthems to executing comprehensive B2B video production campaigns, our team translates dense technical features into compelling visual narratives that accelerate the B2B sales cycle.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "B2B Video Marketing Agency Strategy",
      "Enterprise SaaS Videos & Explainers",
      "B2B Video Production Company Services",
      "Video Advertising Agency Motion Graphics"
    ],
    process: [
      ["B2B Scriptwriting", "Translating complex software and enterprise services into clear, persuasive narrative scripts."],
      ["Storyboarding & Style", "Designing visual frame concepts that strictly align with your corporate brand guidelines."],
      ["Animation & Production", "Producing fluid 2D/3D animation, motion graphics, or cinematic live-action footage."],
      ["Pipeline Alignment", "Exporting optimized videos for landing pages, ABM campaigns, and LinkedIn video ads."]
    ],
    faq: [
      ["What makes a B2B video production agency different?", "A true B2B video agency understands long sales cycles, complex buying committees, and how to simplify technical concepts into engaging visual stories."],
      ["Do you produce SaaS videos and product explainers?", "Yes. Our core expertise includes abstract software UI animation and SaaS product marketing videos."]
    ],
    relatedServices: ["2d-animation", "explainer-videos"],
    relatedIndustries: ["technology", "real-estate"],
    relatedBlogSlugs: ["custom-web-development-vs-website-builders", "cost-of-poor-core-web-vitals-inp", "b2b-saas-seo-strategy"]
  },'''

pattern = re.compile(r'  "video-animation": \{[\s\S]*?relatedBlogSlugs: \[.*?\]\n  \},')
content = pattern.sub(new_vid, content)

with open('lib/services.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully replaced video-animation content with Content Gap keywords.")
