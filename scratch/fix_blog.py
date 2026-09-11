import re

with open('lib/blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace any contentHtml that is NOT followed by a backtick
content = re.sub(r'contentHtml:\s*<p>If', r'contentHtml: <p>If', content)

with open('lib/blog-posts.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Regex replace applied")
