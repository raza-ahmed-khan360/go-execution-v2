import re

with open('components/homepage.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

code = code.replace('/assets/images/generated/real-estate.jpg', '/assets/images/real/real-estate.jpeg')
code = code.replace('/assets/images/generated/fashion-apparel.jpg', '/assets/images/real/fashion-retail.jpeg')
code = code.replace('/assets/images/generated/health-wellness-growth.png', '/assets/images/real/health-wellness.jpeg')
code = code.replace('/assets/images/generated/tech-saas.jpg', '/assets/images/real/technology-saas.jpeg')
code = code.replace('/assets/images/generated/prof-services.jpg', '/assets/images/real/professional-services.jpeg')
code = code.replace('/assets/images/generated/hospitality.jpg', '/assets/images/real/hospitality.jpeg')

with open('components/homepage.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Industries updated")
