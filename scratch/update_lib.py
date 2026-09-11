import re

def update_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        code = f.read()
    for old, new in replacements.items():
        code = code.replace(old, new)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(code)

ind_repl = {
    '/assets/images/generated/real-estate.jpg': '/assets/images/real/real-estate.jpeg',
    '/assets/images/generated/fashion-apparel.jpg': '/assets/images/real/fashion-retail.jpeg',
    '/assets/images/generated/retail-ecommerce.jpg': '/assets/images/real/fashion-retail.jpeg',
    '/assets/images/generated/hospitality.jpg': '/assets/images/real/hospitality.jpeg',
    '/assets/images/generated/tech-saas.jpg': '/assets/images/real/technology-saas.jpeg',
    '/assets/images/generated/prof-services.jpg': '/assets/images/real/professional-services.jpeg',
    '/assets/images/generated/health-wellness-growth.png': '/assets/images/real/health-wellness.jpeg'
}

serv_repl = {
    '/assets/images/generated/service_web_dev_hero.jpg': '/assets/images/real/technology-saas.jpeg',
    '/assets/images/generated/service_seo_hero.jpg': '/assets/images/real/real-estate.jpeg',
    '/assets/images/generated/service_digital_marketing_hero.jpg': '/assets/images/real/technology-saas.jpeg',
    '/assets/images/generated/service_branding_hero.jpg': '/assets/images/real/professional-services.jpeg',
    '/assets/images/generated/video-motion.jpg': '/assets/images/real/fashion-retail.jpeg',
    '/assets/images/generated/mobile-apps.jpg': '/assets/images/real/hospitality.jpeg'
}

update_file('lib/industries.ts', ind_repl)
update_file('lib/services.ts', serv_repl)
print("Libs updated")
