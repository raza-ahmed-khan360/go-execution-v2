import re
with open('lib/blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the opening backticks
content = re.sub(r'contentHtml:\s+<aside', 'contentHtml: <aside', content)

with open('lib/blog-posts.ts', 'w', encoding='utf-8') as f:
    f.write(content)
