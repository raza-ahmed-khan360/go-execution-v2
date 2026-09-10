import re
with open('lib/services.ts', 'r', encoding='utf-8') as f:
    content = f.read()

tags = re.findall(r'<a\s+[^>]*href=["\']http[^"\']+["\'][^>]*>', content)
print("Services Full tags:")
for tag in set(tags):
    print(tag)
