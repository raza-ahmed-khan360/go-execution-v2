import re

with open('lib/services.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_3d = '''  "3d-animation": {
    slug: "3d-animation",
    categorySlug: "video",
    title: "3D Product Animation",
    seoTitle: "3D Product Animation Company | Industrial 3D Animation Services",
    eyebrow: "Photorealistic 3D Modeling & Rendering",
    description: "Go Execution is a premier 3D product animation company offering technical and industrial 3D animation services for B2B manufacturing and tech brands.",
    intro: "Showcase complex products with photorealistic 3D detail. As a specialized 3D product animation company, we model, texture, and animate physical products and industrial equipment.",
    overview: "Our 3D video agency builds photorealistic renders, exploded CAD views, and technical animations for enterprise brands. Whether you need industrial 3D animation services for heavy machinery or sleek 3D product animation services for consumer electronics, our 3D product animation studio translates your CAD files into cinematic 4K motion that drives sales.",
    image: "/assets/images/logo-light.png",
    capabilities: [
      "3D Product Animation Company",
      "Industrial 3D Animation Services",
      "3D Product Animation Studio Renders",
      "3D Video Agency Cinematic Motion"
    ],
    process: [
      ["CAD / 3D Asset Import", "Importing physical CAD files or modeling industrial product geometry from scratch."],
      ["Lighting & Shader Setup", "Applying realistic materials, textures, and studio lighting in our 3D product animation studio."],
      ["Camera Rigging & Motion", "Animating dynamic camera moves, cross-sections, and product assembly flows."],
      ["High-Res 4K Render", "Rendering final frames with cinematic post-processing color grading."]
    ],
    faq: [
      ["Why partner with a 3D product animation agency?", "A specialized 3D product animation company produces photorealistic industrial visuals that are impossible or too expensive to capture with standard live-action cameras."],
      ["What is industrial 3D animation used for?", "Industrial 3D animation services are ideal for showcasing heavy machinery, technical hardware components, trade show displays, and digital twin training."]
    ],
    relatedServices: ["video-animation", "graphic-design"],
    relatedIndustries: ["real-estate", "technology"],
    relatedBlogSlugs: ["custom-web-development-vs-website-builders", "cost-of-poor-core-web-vitals-inp", "nextjs-replacing-headless-shopify-enterprise-ecommerce"]
  },'''

pattern = re.compile(r'  "3d-animation": \{[\s\S]*?relatedBlogSlugs: \[.*?\]\n  \},')
content = pattern.sub(new_3d, content)

with open('lib/services.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully replaced 3d-animation content with Content Gap keywords.")
