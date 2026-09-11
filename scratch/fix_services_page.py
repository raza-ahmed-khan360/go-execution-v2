import re

with open('app/services/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

code = code.replace(
    'className="ge-section ge-services-category-grid-section"',
    'className="ge-section ge-dark-section ge-services-category-grid-section"'
)

with open('app/services/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Services page fixed")
