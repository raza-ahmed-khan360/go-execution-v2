import glob
files = ['components/desktop-hero-background.tsx', 'components/mobile-hero-story.tsx']
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'priority' not in content:
        content = content.replace('fill\n', 'fill\n        priority\n')
        content = content.replace('fill\r\n', 'fill\r\n        priority\r\n')
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Added priority to {file}")
