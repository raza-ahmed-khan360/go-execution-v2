import re

with open('lib/blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Using regex to extract contentHtml blocks accurately
matches = re.finditer(r'slug:\s*"([^"]+)",[\s\S]*?contentHtml:\s*([\s\S]*?),\s*faq:', content)

for m in matches:
    slug = m.group(1)
    html = m.group(2)
    # Remove all HTML tags
    text = re.sub(r'<[^>]+>', ' ', html)
    # Count words
    words = len(text.split())
    print(f"{slug}: {words} words")
