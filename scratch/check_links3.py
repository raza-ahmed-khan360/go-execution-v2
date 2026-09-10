import re
with open('lib/blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

tags = re.findall(r'<a\s+[^>]*href=["\']([^"\']+)["\'][^>]*>', content)
print("All links:")
print(list(set(tags))[:20])
