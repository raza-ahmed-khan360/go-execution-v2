import os

legal_files = [
    'app/(legal)/cookie-policy/page.tsx',
    'app/(legal)/privacy-policy/page.tsx',
    'app/(legal)/terms-of-service/page.tsx'
]

for filepath in legal_files:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        content = content.replace('>justin@goexecution.com</a>', '>info@goexecution.com</a>')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Replaced in {filepath}')
