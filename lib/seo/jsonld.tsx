import { site } from "./site";

type JsonLdProps = { data: Record<string, unknown> };

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function buildOrganization() {
  return {
    "@type": "Organization",
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
    sameAs: site.sameAs,
    location: { "@id": `${site.url}/#place` },
  };
}

export function buildPlace() {
  return {
    "@type": "Place",
    "@id": `${site.url}/#place`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
  };
}

export function buildWebSite() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    alternateName: site.alternateName,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function buildWebPage(opts: { path: string; title: string }) {
  return {
    "@type": "WebPage",
    "@id": `${site.url}${opts.path}#webpage`,
    url: `${site.url}${opts.path}`,
    name: opts.title,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function buildBreadcrumbList(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${site.url}${items[items.length - 1]?.url || "/"}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.url}`,
    })),
  };
}

export function buildService(opts: { path: string; name: string; description: string }) {
  return {
    "@type": "Service",
    "@id": `${site.url}${opts.path}#service`,
    name: opts.name,
    description: opts.description,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "US",
    inLanguage: "en-US",
  };
}

export function buildArticle(opts: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  authorName?: string;
  authorUrl?: string;
  reviewerName?: string;
}) {
  const author = opts.authorName
    ? { "@type": "Person", name: opts.authorName, url: opts.authorUrl || `${site.url}/about/` }
    : { "@id": `${site.url}/#organization` };

  const article: any = {
    "@type": "Article",
    "@id": `${site.url}${opts.path}#article`,
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    mainEntityOfPage: { "@id": `${site.url}${opts.path}#webpage` },
    author: author,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
  };

  if (opts.reviewerName) {
    article.reviewedBy = {
      "@type": "Person",
      name: opts.reviewerName,
    };
  }

  if (opts.image) {
    article.image = {
      "@type": "ImageObject",
      url: opts.image,
    };
  }

  return article;
}

export function buildCollectionPage(opts: { path: string; title: string }) {
  return {
    "@type": "CollectionPage",
    "@id": `${site.url}${opts.path}#collectionpage`,
    url: `${site.url}${opts.path}`,
    name: opts.title,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function buildContactPage(opts: { path: string; title: string }) {
  return {
    "@type": "ContactPage",
    "@id": `${site.url}${opts.path}#contactpage`,
    url: `${site.url}${opts.path}`,
    name: opts.title,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function buildAboutPage(opts: { path: string; title: string }) {
  return {
    "@type": "AboutPage",
    "@id": `${site.url}${opts.path}#aboutpage`,
    url: `${site.url}${opts.path}`,
    name: opts.title,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function buildFAQPage(opts: { path: string }, faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${site.url}${opts.path}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
