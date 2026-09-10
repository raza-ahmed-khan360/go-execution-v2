import re

with open('components/homepage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('import { ServicesCarousel } from "@/components/services-carousel";\n', '')
content = content.replace('import { ServicesCarousel } from "@/components/services-carousel";\r\n', '')

with open('components/homepage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
