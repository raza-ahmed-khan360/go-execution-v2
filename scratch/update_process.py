import re

with open('components/homepage.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace process images
code = code.replace('/assets/images/generated/team-workspace.jpg', '/assets/images/real/professional-services.jpeg')
code = code.replace('/assets/images/generated/digital-mktg.jpg', '/assets/images/real/technology-saas.jpeg')
code = code.replace('/assets/images/generated/web-dev.jpg', '/assets/images/real/real-estate.jpeg')
code = code.replace('/assets/images/generated/mobile-apps.jpg', '/assets/images/real/hospitality.jpeg')
code = code.replace('/assets/images/generated/seo-analytics.jpg', '/assets/images/real/health-wellness.jpeg')

with open('components/homepage.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Process steps updated")
