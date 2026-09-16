
import codecs

with open("lib/seo/jsonld.tsx", "r", encoding="utf-8") as f:
    content = f.read()

target = """: { "@id": `${site.url}/#organization` };"""
replacement = """: { "@type": "Organization", "@id": `${site.url}/#organization` };"""

if target in content:
    content = content.replace(target, replacement)
    with open("lib/seo/jsonld.tsx", "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated Article schema")
else:
    print("Target not found in Article schema")

