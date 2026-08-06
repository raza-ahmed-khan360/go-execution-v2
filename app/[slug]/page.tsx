import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, formatBlogDate, getBlogPost } from "@/lib/blog-posts";
import { JsonLd, buildArticle, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";
import { site } from "@/lib/seo/site";

type Props = { params: Promise<{ slug: string }> };

// Only the known post slugs resolve here; every other root path 404s
// instead of being swallowed by this catch-all segment.
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
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

export default async function ArticlePage({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();

  const path = `/${post.slug}/`;
  const related = blogPosts.filter(({ slug }) => slug !== post.slug)[0];

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
