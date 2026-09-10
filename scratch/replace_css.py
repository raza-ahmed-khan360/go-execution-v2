import re

filepath = 'app/globals.css'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace width: min(100%, 1080px); with width: 100%;
content = content.replace('width: min(100%, 1080px);', 'width: 100%;')

# Replace grid-template-columns for odd and even cards
content = content.replace('grid-template-columns: minmax(360px, 440px) minmax(330px, 1fr);', 'grid-template-columns: 1fr 1fr;')
content = content.replace('grid-template-columns: minmax(330px, 1fr) minmax(360px, 440px);', 'grid-template-columns: 1fr 1fr;')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done replacing.")
