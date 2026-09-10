import os

filepath = 'app/contact/page.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('{site.email}</a></strong></article>', '{site.displayEmail}</a></strong></article>')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Replaced in app/contact/page.tsx')
