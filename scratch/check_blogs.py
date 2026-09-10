import re

with open('lib/blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

posts = re.split(r'  {\n    slug: ', content)[1:]
for post in posts:
    slug = post.split(',')[0].strip('"').strip("'")
    word_count = len(post.split())
    if word_count < 350:
        print(f'{slug}: {word_count} words')
