import re

with open('lib/services.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_sm = '''  "social-media-marketing": {
    slug: "social-media-marketing",
    categorySlug: "digital-marketing",
    title: "B2B Social Media Marketing",
    seoTitle: "B2B Social Media Marketing Agency | Expert Management Services",
    eyebrow: "Enterprise Social Engagement & Lead Gen",
    description: "Go Execution is a premier B2B social media agency specializing in B2B social media marketing strategy, lead generation, and corporate account management.",
    intro: "Turn professional networks into measurable pipeline influence. As a dedicated B2B social media marketing agency, we build executive credibility and generate enterprise leads on LinkedIn and beyond.",
    overview: "Consumer social strategies fail in the corporate world. We are a specialized B2B social media agency focused entirely on long sales cycles, buying committees, and complex industries. Our B2B social media marketing services encompass executive thought leadership, employee advocacy, and precision ABM campaigns. We execute a comprehensive B2B social media strategy designed to establish market authority and drive measurable social media B2B lead generation.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "B2B Social Media Marketing Agency Strategy",
      "Executive Thought Leadership & Ghostwriting",
      "Social Media B2B Lead Generation",
      "Corporate Social Media Content Creation Services"
    ],
    process: [
      ["Executive Discovery", "We analyze your leadership voices and define a clear B2B social media strategy tailored to your industry."],
      ["Asset Production", "Delivering high-end social media content creation services, transforming whitepapers into engaging carousels and posts."],
      ["Targeted Distribution", "Deploying native content and executing precise LinkedIn ABM campaigns to reach key decision-makers."],
      ["Pipeline Analytics", "Tracking direct pipeline influence and ROI from our B2B social media marketing services."]
    ],
    faq: [
      ["What makes a B2B social media agency different?", "A true B2B social media marketing agency understands how to market complex services to buying committees rather than relying on viral consumer trends."],
      ["Can social media actually drive enterprise sales?", "Absolutely. Our social media B2B lead generation tactics specifically target decision-makers through thought leadership and precise account-based marketing (ABM)."]
    ],
    relatedServices: ["paid-advertising", "content-marketing"],
    relatedIndustries: ["technology", "professional-services"],
    relatedBlogSlugs: ["b2b-saas-seo-strategy", "custom-web-development-vs-website-builders", "why-is-my-website-not-ranking-on-google"]
  },'''

pattern = re.compile(r'  "social-media-marketing": \{[\s\S]*?relatedBlogSlugs: \[.*?\]\n  \},')
content = pattern.sub(new_sm, content)

with open('lib/services.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully replaced social-media-marketing content with Content Gap keywords.")
