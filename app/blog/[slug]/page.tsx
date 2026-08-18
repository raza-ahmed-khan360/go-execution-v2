import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, formatBlogDate, getBlogPost } from "@/lib/blog-posts";
import { JsonLd, buildArticle, buildWebPage, buildBreadcrumbList, buildFAQPage } from "@/lib/seo/jsonld";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const path = `/blog/${post.slug}/`;
  return {
    title: { absolute: post.seoTitle },
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      title: post.seoTitle,
      description: post.excerpt,
      url: path,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      images: post.image ? [{ url: post.image, alt: post.imageAlt ?? post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}/`;
  const schema: { "@context": string; "@graph": any[] } = {
    "@context": "https://schema.org",
    "@graph": [
      buildArticle({
        path,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.dateModified,
        image: post.image,
        authorName: post.author?.name || "Go Execution Editorial",
        authorUrl: post.author?.url || "https://goexecution.com/about/",
        reviewerName: post.reviewer?.name,
      }),
      buildWebPage({ path, title: post.title }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog/" },
        { name: post.title, url: path },
      ]),
    ],
  };

  if (post.faq && post.faq.length > 0) {
    schema["@graph"].push(
      buildFAQPage({ path: `/blog/${post.slug}/` }, post.faq.map(([q, a]) => ({ question: q, answer: a })))
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main ge-blog-post-page">
        <article className="ge-blog-post">
          <header className="ge-blog-post__header">
            <div className="ge-container ge-container--narrow">
              <div className="ge-blog-post__meta-top">
                <Link className="ge-blog-post__category" href={`/category/${post.categorySlug}/`}>
                  {post.category}
                </Link>
                <span className="ge-blog-post__dot" aria-hidden="true">•</span>
                <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                <span className="ge-blog-post__dot" aria-hidden="true">•</span>
                <span>5 min read</span>
              </div>
              <h1 className="ge-blog-post__title">{post.title}</h1>
              <p className="ge-blog-post__lead">{post.excerpt}</p>
              
              <div className="ge-blog-post__trust-signals" style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                <div className="ge-blog-post__author" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="ge-blog-post__author-avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1e293b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {post.author?.avatarInitials || 'GE'}
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0f172a' }}>{post.author?.name || 'Go Execution Editorial'}</strong>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{post.author?.role || 'Growth Strategy Team'}</span>
                  </div>
                </div>
                
                {post.reviewer && (
                  <div className="ge-blog-post__reviewer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '1px solid #cbd5e1', paddingLeft: '2rem' }}>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', fontWeight: 'bold' }}>Fact Checked By</span>
                      <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0f172a' }}>{post.reviewer.name}</strong>
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{post.reviewer.role}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>

          {post.image && (
            <div className="ge-container ge-blog-post__hero-image">
              <Image
                src={post.image}
                alt={post.imageAlt ?? post.title}
                width={1200}
                height={630}
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          )}

          <div className="ge-container ge-container--narrow">
            <div
              className="ge-blog-post__content ge-prose"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </article>

        {related.length > 0 && (
          <section className="ge-section ge-related-posts">
            <div className="ge-container ge-container--narrow">
              <h2>Related Articles</h2>
              <div className="ge-blog-grid">
                {related.map((rel) => (
                  <article key={rel.slug} className="ge-blog-card">
                    {rel.image && (
                      <Link href={`/blog/${rel.slug}/`} className="ge-blog-card__image">
                        <Image src={rel.image} alt={rel.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
                      </Link>
                    )}
                    <div className="ge-blog-card__content">
                      <div className="ge-blog-card__meta">
                        <Link href={`/category/${rel.categorySlug}/`}>{rel.category}</Link>
                        <span>•</span>
                        <time>{formatBlogDate(rel.date)}</time>
                      </div>
                      <h3>
                        <Link href={`/blog/${rel.slug}/`}>{rel.title}</Link>
                      </h3>
                      <p>{rel.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
