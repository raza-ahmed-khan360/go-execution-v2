import re

with open('components/homepage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove servicesCarouselData definition
data_match = re.search(r'const servicesCarouselData = \[.*?\n\]\.map\(\(service, index\) => \(\{\n  \.\.\.service,\n  number: String\(index \+ 1\)\.padStart\(2, "0"\),\n\}\)\);', content, re.DOTALL)
if data_match:
    content = content.replace(data_match.group(0), '')
    with open('components/homepage.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
        print("Success")
else:
    print("Not found")
