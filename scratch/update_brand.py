
import codecs

with open("lib/seo/site.ts", "r", encoding="utf-8") as f:
    site_content = f.read()

site_content = site_content.replace(
    "alternateName: \"GoExecution\",",
    "alternateName: \"Go Execution\","
)

with open("lib/seo/site.ts", "w", encoding="utf-8") as f:
    f.write(site_content)

with open("app/page.tsx", "r", encoding="utf-8") as f:
    page_content = f.read()

page_content = page_content.replace(
    "absolute: \"Global Digital Marketing Agency | Go Execution\",",
    "absolute: \"Go Execution | Global Digital Marketing Agency\","
)
page_content = page_content.replace(
    "title: \"Global Digital Marketing Agency | Go Execution\",",
    "title: \"Go Execution | Global Digital Marketing Agency\","
)
page_content = page_content.replace(
    "title: \"Global Digital Marketing Agency | Web, SEO & Growth | Go Execution\",",
    "title: \"Go Execution | Global Digital Marketing Agency\","
)

with open("app/page.tsx", "w", encoding="utf-8") as f:
    f.write(page_content)

with open("app/layout.tsx", "r", encoding="utf-8") as f:
    layout_content = f.read()

layout_content = layout_content.replace(
    "default: \"Global Digital Marketing Agency | Go Execution\",",
    "default: \"Go Execution | Global Digital Marketing Agency\","
)
layout_content = layout_content.replace(
    "title: \"Global Digital Marketing Agency | Go Execution\",",
    "title: \"Go Execution | Global Digital Marketing Agency\","
)

with open("app/layout.tsx", "w", encoding="utf-8") as f:
    f.write(layout_content)

print("Brand updates complete.")

