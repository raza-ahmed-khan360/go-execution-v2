import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, formatBlogDate } from "@/lib/blog-posts";
import { JsonLd, buildCollectionPage, buildBreadcrumbList } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: { absolute: "SEO & Digital Marketing Insights Blog | Go Execution" },
  description:
    "Practical ideas on SEO, digital strategy, design, and building brands that demand attention, written by the Go Execution editorial team.",
  alternates: { canonical: "/blog/" },
  openGraph: { url: "/blog/", type: "website" },
};

export default function BlogPage() {
  const [featured, ...posts] = blogPosts;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildCollectionPage({ path: "/blog/", title: "SEO & Digital Marketing Insights Blog | Go Execution" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog/" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main ge-blog-page">
        <section className="ge-blog-page__hero">
          <div className="ge-container">
            <p className="ge-eyebrow">Our Journal</p>
            <h1>Insights <em>&amp;</em> Growth</h1>
            <p>Thoughts on design, digital strategy, and building brands that demand attention.</p>
          </div>
        </section>
        <section className="ge-blog-page__content">
          <div className="ge-container">
            <div className="ge-blog-page__category">
              <span>All articles</span>
              <Link href="/category/seo-services/">SEO</Link>
              <b>{String(blogPosts.length).padStart(2, "0")} published insights</b>
            </div>
            <article className="ge-blog-featured">
              <Link href={`/blog/${featured.slug}/`} className="ge-blog-featured__visual" aria-label={`Read ${featured.title}`}>
                {featured.image ? (
                  <Image src={featured.image} alt={featured.imageAlt ?? ""} fill sizes="(max-width: 900px) 100vw, 52vw" priority />
                ) : (
                  <>
                    <span>SEO</span>
                    <strong>Search<br />visibility<br />starts here.</strong>
                    <i>01</i>
                  </>
                )}
              </Link>
              <div className="ge-blog-featured__content">
                <p className="ge-eyebrow">{featured.category} <span /> {formatBlogDate(featured.date)}</p>
                <h2><Link href={`/blog/${featured.slug}/`}>{featured.title}</Link></h2>
                <p>{featured.excerpt}</p>
                <Link className="ge-text-link" href={`/blog/${featured.slug}/`}>Read article</Link>
              </div>
            </article>
            {posts.length > 0 && (
              <div className="ge-blog-grid">
                {posts.map((post, index) => (
                  <article className="ge-blog-card" key={post.slug}>
                    <Link className="ge-blog-card__image" href={`/blog/${post.slug}/`}>
                      {post.image ? <Image src={post.image} alt={post.imageAlt ?? ""} fill sizes="(max-width: 700px) 100vw, 50vw" /> : <span>{String(index + 2).padStart(2, "0")}</span>}
                    </Link>
                    <p className="ge-eyebrow">{post.category}</p>
                    <h3><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                    <div>
                      <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                      <Link href={`/blog/${post.slug}/`}>Read more</Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
