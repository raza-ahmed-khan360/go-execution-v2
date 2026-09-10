import os
import re

search_dir = '.'
pattern = r'justin@goexecution\.com'

for root, dirs, files in os.walk(search_dir):
    if '.next' in root or 'node_modules' in root or '.git' in root or 'scratch' in root:
        continue
    for file in files:
        if file.endswith(('.tsx', '.ts', '.json')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                if re.search(pattern, content):
                    print(f'Found in: {filepath}')
