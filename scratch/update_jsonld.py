
import codecs

with open("lib/seo/jsonld.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Organization / LocalBusiness
old_org = """export function buildOrganization() {
  return {
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: site.alternateName,
    url: `${site.url}/`,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/assets/images/logo-dark.png`,
      width: 1600,
      height: 369,
    },
    email: site.email,
    telephone: site.phone,
    contactPoint: {
      "@type": "ContactPoint",
      "telephone": site.phone,
      "contactType": "customer service",
      "areaServed": "US"
    },
    areaServed: "US",
    sameAs: site.sameAs,
    location: { "@id": `${site.url}/#place` },
  };
}"""

new_org = """export function buildOrganization() {
  return {
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: site.alternateName,
    url: `${site.url}/`,
    image: `${site.url}/assets/images/logo-dark.png`,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/assets/images/logo-dark.png`,
      width: 1600,
      height: 369,
    },
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      "telephone": site.phone,
      "contactType": "customer service",
      "areaServed": "US"
    },
    areaServed: "US",
    sameAs: site.sameAs,
    location: { "@id": `${site.url}/#place` },
    priceRange: "$$",
  };
}"""

# 2. BreadcrumbList
old_bread = """export function buildBreadcrumbList(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${site.url}${items[items.length - 1]?.url || "/"}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": `${site.url}${item.url}`,
        name: item.name,
      },
    })),
  };
}"""

new_bread = """export function buildBreadcrumbList(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${site.url}${items[items.length - 1]?.url || "/"}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        "@id": `${site.url}${item.url}`,
        name: item.name,
      },
    })),
  };
}"""

# 3. Service
old_service = """export function buildService(opts: { path: string; name: string; description: string; serviceType?: string }) {
  return {
    "@type": "Service",
    "@id": `${site.url}${opts.path}#service`,
    name: opts.name,
    description: opts.description,
    provider: { "@id": `${site.url}/#organization` },
    serviceType: opts.serviceType || opts.name,
    areaServed: {
      "@type": "Country",
      name: "US"
    },
    inLanguage: "en-US",
  };
}"""

new_service = """export function buildService(opts: { path: string; name: string; description: string; serviceType?: string }) {
  return {
    "@type": "Service",
    "@id": `${site.url}${opts.path}#service`,
    name: opts.name,
    description: opts.description,
    provider: { "@id": `${site.url}/#organization` },
    serviceType: opts.serviceType || opts.name,
    areaServed: {
      "@type": "Country",
      name: "US"
    },
  };
}"""

content = content.replace(old_org, new_org)
content = content.replace(old_bread, new_bread)
content = content.replace(old_service, new_service)

with open("lib/seo/jsonld.tsx", "w", encoding="utf-8") as f:
    f.write(content)
print("Updated JSON-LD schema builder")

