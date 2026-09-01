import re

with open('lib/blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

posts = re.findall(r'slug:\s*\"(.*?)\".*?contentHtml:\s*(.*?)', content, re.DOTALL)
if posts:
    print(posts[0][1][:100])
