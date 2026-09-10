import re

with open('components/site-shell.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('className={ge-footer__newsletter-status}', 'className={ge-footer__newsletter-status}')

with open('components/site-shell.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
