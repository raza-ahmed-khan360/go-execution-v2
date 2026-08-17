export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateModified: string;
  category: string;
  categorySlug: string;
  image?: string;
  imageAlt?: string;
  contentHtml: string;
};

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "why-is-my-website-not-ranking-on-google",
    title: "Why Is My Website Not Ranking on Google? A Complete Diagnostic Guide",
    excerpt: "Discover why your website is not ranking on Google with a step-by-step diagnostic framework covering crawling, indexing, technical SEO, search intent, and Core Web Vitals.",
    date: "2026-08-04",
    dateModified: "2026-08-17",
    category: "SEO",
    categorySlug: "seo-services",
    imageAlt: "Google Search Console-style ranking diagnostics for a business website",
    contentHtml: `
      <p>If you are asking, “why is my website not ranking on Google?”, start with the basics: Google has to find the page, crawl it, decide it can be indexed, understand what it is about, and see a strong enough reason to show it ahead of other results. A problem at any one of those stages can hold a page back.</p>

      <aside class="ge-direct-answer-box"><p><strong>Direct answer:</strong> your website may not rank because it is not indexed, Google cannot crawl it correctly, the page does not match what searchers want, or competing pages are a better fit. Diagnose access and indexing first; then improve relevance, content quality, internal links, and technical performance.</p></aside>

      <h2>Why Is My Website Not Ranking on Google?</h2>
      <p>Ranking is not a single setting you can switch on. Use this guide as a diagnostic order, beginning with the checks that can make a page impossible to rank and ending with the competitive work that can improve visibility over time.</p>

      <h2>1. Your Website or Page Isn’t Indexed</h2>
      <p>Google cannot rank a URL it has not added to its index. A page can load perfectly in a browser and still be absent from Google.</p>
      <ul>
        <li>Use Google Search Console’s URL Inspection tool to see whether the URL is on Google and to review its indexing status.</li>
        <li>Check for a <code>noindex</code> meta tag or an <code>X-Robots-Tag: noindex</code> response header, especially after a staging launch or migration.</li>
        <li>Confirm the page’s canonical URL points to the preferred version. Google may choose a different canonical when the signals conflict.</li>
        <li>For a new page, submit a clean sitemap and link to it from a crawlable page. Requesting indexing can help discovery, but it does not guarantee indexing or rankings.</li>
      </ul>

      <h2>2. Google Can’t Crawl Your Website Properly</h2>
      <p>Before a page can be indexed, Google needs access to it. Check the URL itself as well as the routes that lead to it.</p>
      <ul>
        <li>Review <code>/robots.txt</code> for accidental blocks on important directories. A robots rule prevents crawling; it is not the right substitute for a <code>noindex</code> directive.</li>
        <li>Make sure the page is public, returns a successful HTTP response, and does not require a login or blocked resource to reveal its main content.</li>
        <li>Fix broken internal links, redirect loops, and unnecessarily long redirect chains.</li>
        <li>Keep XML sitemaps focused on canonical URLs you actually want indexed. Our <a href="/services/seo/technical-seo/">technical SEO services</a> can help when these checks uncover a broader site issue.</li>
      </ul>

      <h2>3. Your Content Doesn’t Match Search Intent</h2>
      <p>Google tries to return the type of answer people expect. A service page will often struggle for a query where the results are diagnostic guides, and a short blog post can struggle where people expect a comparison, calculator, local result, or product page.</p>
      <p>Search the target phrase, review the current results, and compare the intent, format, scope, and questions they answer. Do not copy competitors; make your page more useful for the same searcher need.</p>

      <h2>4. Your On-Page SEO Needs Improvement</h2>
      <p>On-page SEO gives Google and readers a clear description of the page. It is not about repeating one keyword in every paragraph.</p>
      <ul>
        <li>Write a descriptive title and a single, clear H1 that accurately represent the page.</li>
        <li>Use logical headings to answer the supporting questions a visitor is likely to have.</li>
        <li>Use a readable URL and write a useful meta description for searchers deciding whether to click.</li>
        <li>Add contextual internal links from relevant pages—not a generic list of links in the footer.</li>
        <li>Use meaningful image alt text where an image contributes information.</li>
      </ul>

      <h2>5. Your Website Doesn’t Have Enough Relevant Content</h2>
      <p>There is no universal word-count threshold for ranking. The real question is whether the page solves the query better than available alternatives. Thin, duplicated, or vague pages often fail because they add little unique value.</p>
      <p>Build useful supporting content around your services, customer questions, case studies, and expertise. Avoid creating several near-identical pages that compete for the same search intent.</p>

      <h2>6. Your Website Has Technical SEO Problems</h2>
      <p>Technical issues can make good content difficult for Google to interpret or consolidate correctly. Review mobile rendering, canonical signals, internal links, duplicate versions of URLs, HTTPS, structured data validity, and the HTML Google receives.</p>
      <p>Modern JavaScript does not automatically prevent ranking, but important content should be reliably available when Google renders the page. Server-rendered, well-structured pages are generally easier to inspect and maintain.</p>

      <h2>7. Your Website Is Slow or Has Poor Core Web Vitals</h2>
      <p>Performance affects how people experience a website. Core Web Vitals are useful field metrics: aim for an LCP of 2.5 seconds or less, INP under 200 milliseconds, and CLS under 0.1 for a good experience.</p>
      <p>Improving these metrics is worthwhile, but it is not a guaranteed route to a top position. Fix oversized images, unnecessary scripts, layout shifts, and slow server responses alongside your content work. See our <a href="/services/web-development/website-performance/">website performance service</a> for implementation support.</p>

      <h2>8. Your Website Is New</h2>
      <p>New sites need time to be discovered, crawled, and evaluated. Google says crawling can take from a few days to a few weeks, and visibility for competitive topics can take longer. Publishing consistently and fixing basic technical issues gives Google a clearer site to understand; it does not create an instant ranking guarantee.</p>
      <p>For a practical expectation-setting guide, read <a href="/blog/how-long-does-seo-take-for-new-website/">How Long Does SEO Take for a New Website?</a>.</p>

      <h2>9. Your Competitors Have Stronger Search Visibility</h2>
      <p>Search results are comparative. Competitors may have a more complete answer, clearer specialization, better internal linking, stronger brand recognition, or relevant independent mentions. Start by improving the page and site experience rather than chasing shortcuts or low-quality links.</p>

      <h2>10. Your Website Recently Changed</h2>
      <p>Redesigns, CMS moves, and URL changes can interrupt organic visibility. Check that old pages permanently redirect to their closest new equivalents, indexable content was not removed accidentally, canonicals match the new URLs, and no staging directives survived the launch.</p>
      <p>Planning a redesign? Our <a href="/services/web-development/website-redesign/">website redesign service</a> and guide to <a href="/blog/how-to-redesign-a-website-without-losing-seo/">redesigning without losing SEO</a> cover the key migration safeguards.</p>

      <h2>How to Find Out Why Your Website Isn’t Ranking</h2>
      <figure><table><thead><tr><th>Check</th><th>Where to look</th><th>What a healthy result looks like</th></tr></thead><tbody><tr><td>Indexing</td><td>Search Console URL Inspection</td><td>The preferred URL is indexed or has a clear, actionable exclusion reason.</td></tr><tr><td>Crawling</td><td>Robots rules, live URL test, server response</td><td>Google can fetch a public page that returns successfully.</td></tr><tr><td>Canonical</td><td>Page source and Search Console</td><td>Your preferred canonical is consistent with site signals.</td></tr><tr><td>Demand and relevance</td><td>Search Console Performance and result-page review</td><td>The page format and subject address the query’s intent.</td></tr><tr><td>Experience</td><td>PageSpeed Insights and real-device testing</td><td>Important content loads, responds, and remains stable.</td></tr></tbody></table></figure>

      <h2>What Should You Fix First?</h2>
      <ol>
        <li>Confirm the page is accessible, crawlable, and eligible for indexing.</li>
        <li>Resolve accidental <code>noindex</code> directives, canonical conflicts, redirects, and sitemap mistakes.</li>
        <li>Compare the page with the current search results and improve its intent match.</li>
        <li>Improve the title, headings, useful detail, and contextual internal links.</li>
        <li>Address material mobile, rendering, and performance issues.</li>
        <li>Measure Search Console impressions, clicks, and indexing changes over time before making the next round of decisions.</li>
      </ol>

      <h2>When Should You Hire an SEO Professional?</h2>
      <p>Bring in technical SEO help when indexing exclusions keep returning, traffic drops after a migration, a large site has duplicate or parameterized URLs, or your team cannot determine whether the problem is technical, editorial, or competitive. A good audit should prioritize the changes most likely to remove the actual blocker.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>Why is my website not showing up on Google?</h3><p>Check whether the specific URL is indexed in Google Search Console. If it is not, investigate crawl access, <code>noindex</code>, canonical selection, and whether Google has discovered the page.</p>
      <h3>How long does it take for a website to rank on Google?</h3><p>There is no fixed timeline. Crawling may take days or weeks, while earning visibility for competitive queries can take longer. The right next step depends on the page’s indexing and competitive situation.</p>
      <h3>Can a slow website hurt SEO?</h3><p>A slow or unstable experience can hurt users and makes performance work worthwhile. It should be addressed with content and technical fundamentals, not treated as a standalone ranking guarantee.</p>
      <h3>Do I need backlinks to rank?</h3><p>Relevant independent references can help establish trust, but links cannot compensate for pages that are blocked, unindexed, or a poor match for the query. Fix those fundamentals first.</p>

      <h2>Need Help Finding Out Why Your Website Isn’t Ranking?</h2>
      <p>Go Execution can assess index coverage, crawlability, on-page relevance, technical SEO, and the competitive landscape to create a prioritized plan. Explore our <a href="/services/seo/">SEO services</a> or <a href="/contact/">start a consultation</a>.</p>
    `,
  },
  {
    slug: "how-long-does-seo-take-for-new-website",
    title: "How Long Does SEO Take for a New Website? Timeline Guide",
    excerpt: "Learn about the technical process-based checkpoints for new websites, including crawling, indexing, and search visibility milestones using official Google guidance.",
    date: "2026-07-31",
    dateModified: "2026-07-30",
    category: "SEO",
    categorySlug: "seo-services",
    contentHtml: `
      <p><strong>How long does SEO take for a new website?</strong> There is no guaranteed deadline. Google says crawling can take a few days to a few weeks in its recrawl guidance, while the SEO Starter Guide says some changes may appear within hours and others may take several months.</p>
      <h2>Why SEO Takes Time</h2>
      <p>Search engines do not process web content in a simple, step-by-step manner. According to Google’s How Search Works guide, the process involves crawling, rendering, indexing, and ongoing quality evaluation. Learn more about infrastructure optimizations on our <a href="/services/seo/technical-seo/">Technical SEO Services</a> page.</p>
      <h2>How a Page Moves Through Search</h2>
      <figure><p><strong>Crawling • Rendering • Indexing • Ranking Evaluation</strong></p></figure>
      <h3>Month 0–1: Crawling and Baseline Measurement</h3>
      <p>In the first audit window, we set up technical tracking and verify that Googlebot can access the site. Check our <a href="/services/seo/small-business-seo/">Small Business SEO Services</a> for structured growth strategies.</p>
      <h3>Month 1–3: Index Coverage and Content Validation</h3>
      <p>Checking which pages are included in the Google index and resolving canonicalization issues.</p>
      <h3>Month 3–6: Search Visibility and Topic Development</h3>
      <p>Monitoring search impressions and topic cluster authority across competitive commercial queries.</p>
      <h2>Get a Prioritized SEO Action Plan</h2>
      <p>Explore <a href="/services/seo/">Go Execution SEO services</a> or <a href="/contact/">contact our strategy team</a> for a consultation.</p>`,
  },
  {
    slug: "custom-web-development-vs-website-builders",
    title: "Custom Web Development vs. Website Builders: Which Suits Your Business?",
    excerpt: "Compare custom web development against template builders like Wix and Squarespace for speed, scalability, SEO performance, and ownership.",
    date: "2026-08-08",
    dateModified: "2026-08-08",
    category: "Web Development",
    categorySlug: "web-development",
    contentHtml: `
      <p>Choosing between <strong>custom web development</strong> and off-the-shelf template website builders (like Wix, Squarespace, or generic WordPress themes) is one of the most critical digital decisions for a growing business.</p>
      <h2>1. Performance and Core Web Vitals</h2>
      <p>Template builders carry heavy code bloat, unoptimized scripts, and shared server overhead that frequently trigger poor PageSpeed Insights scores. In contrast, <a href="/services/web-development/custom-web-development/">custom web development</a> uses streamlined frameworks like Next.js and React to deliver sub-second loading speeds.</p>
      <h2>2. SEO Flexibility and Technical Control</h2>
      <p>Custom platforms grant total control over canonical tags, dynamic sitemaps, structured JSON-LD schemas, and server-side rendering (SSR). Read our guide on <a href="/services/web-development/nextjs-development/">Next.js Development Services</a> to see how modern web apps dominate Google search.</p>
      <h2>3. Code Ownership and Scalability</h2>
      <p>When you build on a proprietary builder, you are locked into their ecosystem. Custom engineering ensures 100% intellectual property ownership, zero vendor lock-in, and unlimited integration scalability.</p>
      <h2>Ready to Build a Custom Web Asset?</h2>
      <p>Learn how Go Execution delivers bespoke web platforms on our <a href="/services/web-development/custom-web-development/">Custom Web Development Services</a> page or <a href="/contact/">request a proposal</a> today.</p>`,
  },
  {
    slug: "how-much-does-custom-web-development-cost",
    title: "How Much Does Custom Web Development Cost? 2026 Pricing Breakdown",
    excerpt: "An honest breakdown of custom web development costs, scope factors, timeline expectations, and long-term business ROI.",
    date: "2026-08-07",
    dateModified: "2026-08-07",
    category: "Web Development",
    categorySlug: "web-development",
    contentHtml: `
      <p>Understanding <strong>custom web development pricing</strong> requires evaluating your project's technical scope, integration requirements, custom UI/UX design, and database complexity.</p>
      <h2>Cost Factors in Custom Web Projects</h2>
      <ul>
        <li><strong>Architecture & Stack:</strong> Next.js, React, and TypeScript builds compared to custom WordPress setups.</li>
        <li><strong>Third-Party Integrations:</strong> MLS/IDX real estate feeds, CRM webhooks, payment gateways, and custom APIs.</li>
        <li><strong>Conversion Rate Optimization:</strong> Custom landing page design vs generic layouts. Check our <a href="/services/web-development/landing-page-development/">Landing Page Development Services</a>.</li>
      </ul>
      <h2>Investment Ranges for US Businesses</h2>
      <p>Professional custom web development typically ranges from $3,000 for high-converting landing funnels to $15,000+ for enterprise e-commerce portals. Explore our transparent pricing on the <a href="/pricing/">Go Execution Pricing Page</a>.</p>
      <p>Ready to discuss your scope? Visit our <a href="/services/web-development/custom-web-development/">Custom Web Development</a> page or <a href="/contact/">schedule a consultation</a>.</p>`,
  },
  {
    slug: "wordpress-vs-nextjs-for-business-websites",
    title: "WordPress vs Next.js for Business Websites: A Performance Comparison",
    excerpt: "Compare WordPress CMS and Next.js React framework for speed, security, SEO rendering, content management, and scaling.",
    date: "2026-08-06",
    dateModified: "2026-08-06",
    category: "Web Development",
    categorySlug: "web-development",
    contentHtml: `
      <p>Both <strong>WordPress</strong> and <strong>Next.js</strong> power millions of business websites across the United States. Choosing the right framework depends on your content publishing frequency, speed targets, and technical requirements.</p>
      <h2>WordPress Advantages</h2>
      <p>WordPress is the leading Content Management System (CMS) for editorial content, blogs, and non-technical team publishing. Explore our <a href="/services/web-development/wordpress-development/">WordPress Development Services</a>.</p>
      <h2>Next.js Advantages</h2>
      <p>Next.js delivers sub-second page rendering, zero plugin vulnerability surface, server-side rendering (SSR), and top-tier Core Web Vitals. Explore our <a href="/services/web-development/nextjs-development/">Next.js Development Services</a>.</p>
      <h2>Headless WordPress: The Hybrid Approach</h2>
      <p>For brands that need WordPress content editing with Next.js frontend speed, a Headless setup combines the best of both worlds. Explore our <a href="/services/web-development/custom-web-development/">Custom Web Development Services</a> to get started.</p>`,
  },
  {
    slug: "what-is-technical-seo",
    title: "What Is Technical SEO? A Complete Guide for US Businesses",
    excerpt: "Discover the fundamentals of technical SEO including crawl efficiency, indexing controls, schema markup, Core Web Vitals, and site speed.",
    date: "2026-08-05",
    dateModified: "2026-08-05",
    category: "SEO",
    categorySlug: "seo-services",
    contentHtml: `
      <p><strong>Technical SEO</strong> refers to optimizing a website's underlying code, server infrastructure, and architecture so search engines can easily crawl, render, index, and rank its pages.</p>
      <h2>Key Pillars of Technical SEO</h2>
      <ul>
        <li><strong>Crawlability & Indexability:</strong> Robots.txt directives, XML sitemaps, and HTTP status codes.</li>
        <li><strong>Core Web Vitals:</strong> LCP, INP, and CLS performance metrics. Explore our <a href="/services/web-development/website-performance/">Website Speed Optimization Services</a>.</li>
        <li><strong>Structured Data:</strong> JSON-LD schema graphs for Organization, Services, Articles, and FAQs.</li>
      </ul>
      <p>To audit and fix technical search barriers on your site, visit our dedicated <a href="/services/seo/technical-seo/">Technical SEO Services</a> page or <a href="/contact/">contact our technical team</a>.</p>`,
  },
  {
    slug: "how-to-redesign-a-website-without-losing-seo",
    title: "How to Redesign a Website Without Losing SEO Rankings",
    excerpt: "A step-by-step guide to executing a website redesign while protecting historical organic traffic, backlink equity, and search engine rankings.",
    date: "2026-08-03",
    dateModified: "2026-08-03",
    category: "Web Development",
    categorySlug: "web-development",
    contentHtml: `
      <p>A website redesign is an opportunity to modernize your brand and improve conversion rates. However, without a strict <strong>SEO migration plan</strong>, redesigns can cause severe drops in organic search traffic.</p>
      <h2>1. Pre-Launch URL Mapping</h2>
      <p>Catalog every indexable URL on your existing website and prepare a comprehensive 301 redirect map matching old paths to new canonical URLs.</p>
      <h2>2. Content & On-Page Preservation</h2>
      <p>Ensure primary headings, body copy keywords, title tags, and meta descriptions are preserved or enhanced during redesign.</p>
      <h2>3. Technical & Speed Auditing</h2>
      <p>Verify that your new platform delivers sub-second page performance. Learn more on our <a href="/services/web-development/website-redesign/">Website Redesign Services</a> page.</p>
      <p>Planning a redesign? Partner with Go Execution's team on our <a href="/services/web-development/website-redesign/">Website Redesign</a> page or <a href="/contact/">get in touch</a>.</p>`,
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}
