import re

with open('lib/blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'slug: "best-enterprise-seo-agencies-comparison",[\s\S]*?(?=  \{|\];)', content)
if match:
    print(match.group(0))
