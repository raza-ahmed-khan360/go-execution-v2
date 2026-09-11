import re

with open('components/homepage.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

code = code.replace(
    '<p className="ge-eyebrow">Transparent Investment</p>',
    '<p className="ge-eyebrow">Our Pricings</p>'
)

with open('components/homepage.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Eyebrow updated")
