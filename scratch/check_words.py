import re

with open('lib/blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

posts = content.split('slug: "')[1:]
for post in posts:
    slug = post.split('"')[0]
    html_match = re.search(r'contentHtml:\s*([^]*)', post)
    if html_match:
        html = html_match.group(1)
        text = re.sub(r'<[^>]+>', '', html)
        words = len(text.split())
        print(f'{slug}: {words} words')
