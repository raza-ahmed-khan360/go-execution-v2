
import codecs

with open("app/leave-review/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

target = """  openGraph: {
    title: "Leave a Review | Go Execution",
    description: "Share your experience working with Go Execution. Leave a review to help us continue providing top-tier digital strategy and engineering solutions.",
    url: "/leave-review/",
    type: "website",
  },"""

replacement = """  openGraph: {
    title: "Leave a Review | Go Execution",
    description: "Share your experience working with Go Execution. Leave a review to help us continue providing top-tier digital strategy and engineering solutions.",
    url: "/leave-review/",
    type: "website",
    siteName: "Go Execution",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },"""

if target in content:
    content = content.replace(target, replacement)
    with open("app/leave-review/page.tsx", "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated leave-review")
else:
    print("Target not found")

