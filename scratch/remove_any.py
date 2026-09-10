import re

with open('components/site-shell.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('setNewsletterStatus("success" as any);', 'setNewsletterStatus("success");')
content = content.replace('setNewsletterStatus("error" as any);', 'setNewsletterStatus("error");')

with open('components/site-shell.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
