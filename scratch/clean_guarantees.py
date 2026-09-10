import re

with open('lib/wp-content.json', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('"Guaranteed Ranking on Google"', '"Advanced Search Optimization"')
content = content.replace('"100% Money Back Guarantee *"', '"Transparent Reporting & Milestones"')
content = content.replace('"Money Back Guarantee"', '"Transparent Reporting & Milestones"')
content = content.replace('"100% Satisfaction Guarantee"', '"Commitment to Quality"')
content = content.replace('"100% Unique Design Guarantee"', '"Original Custom Designs"')
content = content.replace('"Does Go Execution guarantee Google Page 1 rankings?"', '"How does Go Execution improve Google rankings?"')
content = content.replace('"We follow Google\\'s best practices to systematically push your target keywords to Page 1 with transparent monthly reporting."', '"We follow Google\\'s best practices to systematically improve your organic visibility, driving targeted traffic to your website through ethical, data-driven SEO techniques."')

with open('lib/wp-content.json', 'w', encoding='utf-8') as f:
    f.write(content)
