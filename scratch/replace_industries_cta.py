import re

filepath = 'components/homepage.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add cta to each industry object
replacements = [
    ('feature: "MLS/IDX Integration & Listing Leads",\n    },', 'feature: "MLS/IDX Integration & Listing Leads",\n      cta: "Explore Property Growth",\n    },'),
    ('feature: "Headless E-Commerce & UGC Ads",\n    },', 'feature: "Headless E-Commerce & UGC Ads",\n      cta: "Scale Your Brand",\n    },'),
    ('feature: "HIPAA Portals & Local Map Pack SEO",\n    },', 'feature: "HIPAA Portals & Local Map Pack SEO",\n      cta: "View Patient Funnels",\n    },'),
    ('feature: "Demo Booking & Technical SEO",\n    },', 'feature: "Demo Booking & Technical SEO",\n      cta: "Scale SaaS Revenue",\n    },'),
    ('feature: "Consultation Funnels & Organic Growth",\n    },', 'feature: "Consultation Funnels & Organic Growth",\n      cta: "Grow Firm Authority",\n    },'),
    ('feature: "Direct Booking & Video Marketing",\n    },', 'feature: "Direct Booking & Video Marketing",\n      cta: "Boost Direct Bookings",\n    },')
]

for old, new in replacements:
    content = content.replace(old, new)

# Replace the JSX
content = content.replace('<span>Explore Strategy</span>', '<span>{ind.cta}</span>')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done replacing.")
