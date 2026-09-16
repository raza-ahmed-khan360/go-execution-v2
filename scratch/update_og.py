
import codecs

with open("app/portfolio/[slug]/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

target = """    openGraph: {
      title: `${title} | Go Execution Portfolio`,
      description: desc,
      url: url,
      type: "article",
    },"""

replacement = """    openGraph: {
      title: `${title} | Go Execution Portfolio`,
      description: desc,
      url: url,
      type: "article",
      siteName: "Go Execution",
      images: [{ url: project?.image || "/opengraph-image.png", width: 1200, height: 630 }],
    },"""

if target in content:
    content = content.replace(target, replacement)
    with open("app/portfolio/[slug]/page.tsx", "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated portfolio slug og")
else:
    print("Target not found in portfolio slug")

