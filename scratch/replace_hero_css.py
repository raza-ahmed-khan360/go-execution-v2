import re

filepath = 'app/globals.css'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('background: rgba(255, 255, 255, 0.94) !important;', 'background: #ffffff !important;')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done replacing.")
