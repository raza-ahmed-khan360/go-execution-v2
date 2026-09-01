with open('lib/blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

parts = content.split('contentHtml: ')
print(f"Found {len(parts)-1} contentHtml blocks")

for i in range(1, len(parts)):
    block = parts[i]
    end_idx = block.find(',')
    html = block[:end_idx]
    
    # Simple word count
    import re
    text = re.sub(r'<[^>]+>', ' ', html)
    words = len(text.split())
    
    # Find slug
    prev = parts[i-1]
    slug_match = re.search(r'slug:\s*"([^"]+)"', prev)
    slug = slug_match.group(1) if slug_match else "unknown"
    
    print(f"{slug}: {words} words")
