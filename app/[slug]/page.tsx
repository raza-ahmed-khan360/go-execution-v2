import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, formatBlogDate, getBlogPost } from "@/lib/blog-posts";
import { ServiceDetailView } from "@/components/service-detail-view";
import { JsonLd, buildArticle, buildService, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";
import { site } from "@/lib/seo/site";
import content from "@/lib/wp-content.json";

type Service = {
  title: string;
  image: string;
  eyebrow: string;
  intro: string;
  overview: string;
  capabilities: string[];
  process: string[][];
  faq: string[][];
};

const services = content.services as Record<string, Service>;

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  const blogSlugs = blogPosts.map(({ slug }) => ({ slug }));
  const serviceSlugs = Object.keys(services).map((slug) => ({ slug }));
  return [...blogSlugs, ...serviceSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (service) {
    const path = `/${slug}/`;
    return {
      title: { absolute: service.title },
      description: service.intro,
      alternates: { canonical: path },
      openGraph: { title: service.title, description: service.intro, url: path },
    };
  }

  const post = getBlogPost(slug);
  if (!post) return {};

  const path = `/${post.slug}/`;
  return {
    title: { absolute: post.title },
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: path,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      images: post.image ? [{ url: post.image, alt: post.imageAlt ?? post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;

  // Check if slug is a Service Page
  const service = services[slug];
  if (service) {
    const path = `/${slug}/`;
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        buildService({ path, name: service.title, description: service.intro }),
        buildWebPage({ path, title: service.title }),
        buildBreadcrumbList([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services/" },
          { name: service.title, url: path },
        ]),
      ],
    };

    return (
      <>
        <JsonLd data={schema} />
        <main id="primary" className="site-main">
          <ServiceDetailView slug={slug} service={service} />
        </main>
      </>
    );
  }

  // Check if slug is a Blog Post
  const post = getBlogPost(slug);
  if (!post) notFound();

  const path = `/${post.slug}/`;
  const related = blogPosts.filter(({ slug: s }) => s !== post.slug)[0];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildArticle({
        path,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.dateModified,
        image: post.image,
      }),
      buildWebPage({ path, title: post.title }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog/" },
        { name: post.title, url: path },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main ge-blog-post">
        <header className="ge-blog-post__header">
          <div className="ge-container">
            <Link className="ge-blog-post__back" href="/blog/">← All insights</Link>
            <p className="ge-eyebrow"><Link href={`/category/${post.categorySlug}/`}>{post.category}</Link></p>
            <h1>{post.title}</h1>
            <p className="ge-blog-post__meta">
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
              <span>Go Execution Editorial Team</span>
            </p>
          </div>
        </header>
        {post.image && (
          <div className="ge-container ge-blog-post__feature">
            <Image src={post.image} alt={post.imageAlt ?? ""} width={1600} height={900} sizes="(max-width: 1200px) 100vw, 1120px" priority />
          </div>
        )}
        <article className="ge-blog-post__article">
          <div className="ge-blog-post__share">
            <span>Share</span>
            <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`${site.url}${path}`)}`}>Email ↗</a>
          </div>
          <div className="ge-prose" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
        {related && (
          <section className="ge-blog-post__related">
            <div className="ge-container">
              <p className="ge-eyebrow">Keep reading</p>
              <Link href={`/${related.slug}/`}>
                <span>Next insight</span><strong>{related.title}</strong><i aria-hidden="true">↗</i>
              </Link>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
