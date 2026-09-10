import re
with open('lib/blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

links = re.findall(r'<a\s+[^>]*href=["\'](http[^"\']+)["\'][^>]*>', content)
print("External links found:")
for link in set(links):
    print(link)

tags = re.findall(r'<a\s+[^>]*href=["\']http[^"\']+["\'][^>]*>', content)
print("\nFull tags:")
for tag in set(tags):
    print(tag)
