import re

filepath = 'components/homepage.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    new_lines.append(line)
    if 'feature: "MLS/IDX Integration & Listing Leads",' in line:
        new_lines.append('      cta: "Explore Property Growth",\n')
    elif 'feature: "Headless E-Commerce & UGC Ads",' in line:
        new_lines.append('      cta: "Scale Your Brand",\n')
    elif 'feature: "HIPAA Portals & Local Map Pack SEO",' in line:
        new_lines.append('      cta: "View Patient Funnels",\n')
    elif 'feature: "Demo Booking & Technical SEO",' in line:
        new_lines.append('      cta: "Scale SaaS Revenue",\n')
    elif 'feature: "Consultation Funnels & Organic Growth",' in line:
        new_lines.append('      cta: "Grow Firm Authority",\n')
    elif 'feature: "Direct Booking & Video Marketing",' in line:
        new_lines.append('      cta: "Boost Direct Bookings",\n')

content = "".join(new_lines)
content = content.replace('<span>Explore Strategy</span>', '<span>{ind.cta}</span>')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done replacing line by line.")
