with open('lib/seo/jsonld.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import re

org_match = re.search(r'export function buildOrganization\(\) \{.*?\};?\n\}', content, re.DOTALL)
if org_match:
    old_org = org_match.group(0)
    new_org = old_org.replace(
        'telephone: site.phone,',
        'telephone: site.phone,\n    contactPoint: {\n      "@type": "ContactPoint",\n      "telephone": site.phone,\n      "contactType": "customer service",\n      "areaServed": "US"\n    },\n    areaServed: "US",'
    )
    content = content.replace(old_org, new_org)

with open('lib/seo/jsonld.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
