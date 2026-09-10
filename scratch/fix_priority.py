import glob
files = ['components/desktop-hero-background.tsx', 'components/mobile-hero-story.tsx']
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('alt="" fill ', 'alt="" fill priority ')
    content = content.replace('alt="" fill\n', 'alt="" fill priority\n')
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
        print(f"Added priority to {file}")
