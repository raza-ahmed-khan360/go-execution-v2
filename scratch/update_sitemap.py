
import codecs

with open("app/sitemap.ts", "r", encoding="utf-8") as f:
    content = f.read()

target = """  "/portfolio/",
];"""

replacement = """  "/portfolio/",
  "/leave-review/",
];"""

if target in content:
    content = content.replace(target, replacement)
    with open("app/sitemap.ts", "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated sitemap successfully")
else:
    print("Target not found in sitemap")

