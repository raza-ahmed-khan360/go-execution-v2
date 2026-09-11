import re

with open('components/desktop-hero-background.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# We need to replace these images:
replacements = {
    '/assets/images/generated/branding-design.jpg': '/assets/images/real/professional-services.jpeg',
    '/assets/images/generated/web-dev.jpg': '/assets/images/real/technology-saas.jpeg',
    '/assets/images/generated/video-motion.jpg': '/assets/images/real/fashion-retail.jpeg',
    '/assets/images/generated/seo-analytics.jpg': '/assets/images/real/real-estate.jpeg',
    '/assets/images/generated/tech-saas.jpg': '/assets/images/real/health-wellness.jpeg',
    '/assets/images/generated/mobile-apps.jpg': '/assets/images/real/hospitality.jpeg',
    '/assets/images/generated/real-estate.jpg': '/assets/images/real/real-estate.jpeg',
    '/assets/images/generated/digital-mktg.jpg': '/assets/images/real/technology-saas.jpeg',
    '/assets/images/generated/retail-ecommerce.jpg': '/assets/images/real/fashion-retail.jpeg'
}

for old, new in replacements.items():
    code = code.replace(old, new)

with open('components/desktop-hero-background.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Hero updated")
