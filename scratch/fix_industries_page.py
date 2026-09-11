import re

filepath = 'app/industries/page.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    code = f.read()

code = code.replace(
    'className="ge-section ge-industries-hub-section"',
    'className="ge-section ge-dark-section ge-industries-hub-section"'
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(code)

print("Industries page fixed")
