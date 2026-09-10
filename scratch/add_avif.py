import re

with open('next.config.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# find images: {} or add it if not exists.
images_config = '''  images: {
    formats: ['image/avif', 'image/webp'],
  },'''

if 'images:' not in content:
    content = content.replace('const nextConfig: NextConfig = {', 'const nextConfig: NextConfig = {\n' + images_config)
    with open('next.config.ts', 'w', encoding='utf-8') as f:
        f.write(content)
        print("Success")
else:
    print("Already has images config")
