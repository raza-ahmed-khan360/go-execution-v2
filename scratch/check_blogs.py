import re

with open('lib/blog-posts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Try to find all slugs
slugs = re.findall(r'slug:\s*\"(.*?)\"', content)
print(f'Total slugs found: {len(slugs)}')

# Find the start of each post based on slug
for slug in slugs:
    start_idx = content.find(f'slug: "{slug}"')
    if start_idx == -1: continue
    content_start = content.find('content: ', start_idx)
    if content_start == -1: continue
    
    # Simple counting up to the end backtick
    in_backtick = False
    idx = content_start + 10
    word_count = 0
    text = ""
    while idx < len(content):
        if content[idx] == '':
            break
        text += content[idx]
        idx += 1
    
    print(f'{slug}: {len(text.split())} words')
