with open('lib/blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('\,\n    faq: [', ',\n    faq: [')
content = content.replace('\,\n    author: {', ',\n    author: {')
content = content.replace('\,\n    faq: [', ',\n    faq: [')
content = content.replace('\,', '')
content = content.replace('from ,000 to ,000+', 'from ,000 to ,000+')

with open('lib/blog-posts.ts', 'w', encoding='utf-8') as f:
    f.write(content)
