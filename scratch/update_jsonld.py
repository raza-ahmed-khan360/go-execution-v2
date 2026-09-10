with open('lib/seo/jsonld.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Change Organization to LocalBusiness or add it.
content = content.replace('\"@type\": \"Organization\"', '\"@type\": [\"Organization\", \"LocalBusiness\"]')

# Add areaServed to buildOrganization
if 'areaServed' not in content:
    content = content.replace('telephone: site.phone,', 'telephone: site.phone,\n    contactPoint: {\n      "@type": "ContactPoint",\n      "telephone": site.phone,\n      "contactType": "customer service",\n      "areaServed": "US"\n    },\n    areaServed: "US",')

with open('lib/seo/jsonld.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
