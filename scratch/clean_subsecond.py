import os
import glob

files = glob.glob('**/*.tsx', recursive=True) + glob.glob('**/*.ts', recursive=True)

for file in files:
    if 'node_modules' in file or '.next' in file:
        continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'Sub-Second' in content or 'sub-second' in content:
        content = content.replace('Sub-Second', 'High-Performance')
        content = content.replace('sub-second', 'high-performance')
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")
