import re

with open('lib/blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

posts = re.findall(r'slug:\s*\"(.*?)\".*?contentHtml:\s*(.*?)', content, re.DOTALL)
print(f"Total posts with contentHtml found: {len(posts)}")

for slug, html in posts:
    # strip html tags for accurate word count
    text = re.sub(r'<[^>]+>', ' ', html)
    words = len(text.split())
    print(f"{slug}: {words} words")
