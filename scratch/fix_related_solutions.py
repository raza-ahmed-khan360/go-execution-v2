import re

filepath = 'app/services/[category]/[slug]/page.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    code = f.read()

code = code.replace(
    'className="ge-section ge-related-solutions-section"',
    'className="ge-section ge-dark-section ge-related-solutions-section"'
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(code)

print("Related solutions page fixed")
