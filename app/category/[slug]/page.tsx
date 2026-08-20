import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, formatBlogDate } from "@/lib/blog-posts";
import { JsonLd, buildCollectionPage, buildBreadcrumbList } from "@/lib/seo/jsonld";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

const categories = Array.from(
  new Map(blogPosts.map((post) => [post.categorySlug, post.category])).entries()
).map(([slug, name]) => ({ slug, name }));

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).slug);
  if (!category) return {};

  const path = `/category/${category.slug}/`;
  const title = `${category.name} Articles & Insights | Go Execution`;
  const description = `Read Go Execution articles on ${category.name.toLowerCase()}, covering practical guidance on search visibility, technical health, and sustainable growth.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: "Go Execution", images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],  title, description, url: path },
  };
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategory((await params).slug);
  if (!category) notFound();

  const path = `/category/${category.slug}/`;
  const posts = blogPosts.filter((post) => post.categorySlug === category.slug);
  const title = `${category.name} Articles & Insights | Go Execution`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildCollectionPage({ path, title }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog/" },
        { name: category.name, url: path },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main ge-blog-page">
        <section className="ge-blog-page__hero">
          <div className="ge-container">
            <p className="ge-eyebrow">Category</p>
            <h1>{category.name}</h1>
            <p>Practical guidance on {category.name.toLowerCase()} from the Go Execution team.</p>
          </div>
        </section>
        <section className="ge-blog-page__content">
          <div className="ge-container">
            <div className="ge-blog-page__category">
              <Link href="/blog/">All articles</Link>
              {categories.map(c => (
                c.slug === category.slug ? (
                  <span key={c.slug}>{c.name}</span>
                ) : (
                  <Link key={c.slug} href={`/category/${c.slug}/`}>{c.name}</Link>
                )
              ))}
              <b>{String(posts.length).padStart(2, "0")} published insights</b>
            </div>
            <div className="ge-blog-grid">
              {posts.map((post, index) => (
                <article className="ge-blog-card" key={post.slug}>
                  <Link className="ge-blog-card__image" href={`/${post.slug}/`}>
                    {post.image ? <Image src={post.image} alt={post.imageAlt ?? ""} fill sizes="(max-width: 700px) 100vw, 50vw" /> : <span>{String(index + 1).padStart(2, "0")}</span>}
                  </Link>
                  <p className="ge-eyebrow">{post.category}</p>
                  <h2><Link href={`/${post.slug}/`}>{post.title}</Link></h2>
                  <p>{post.excerpt}</p>
                  <div>
                    <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                    <Link href={`/${post.slug}/`}>Read more</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

