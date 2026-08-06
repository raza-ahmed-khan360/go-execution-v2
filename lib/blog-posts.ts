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
    slug: "why-your-business-website-is-not-ranking",
    title: "Why Your Business Website Isn’t Ranking: A Diagnostic Guide",
    excerpt: "Diagnose why your business website is not ranking with practical checks for crawling, indexing, technical health, and search intent alignment.",
    date: "2026-08-04",
    dateModified: "2026-08-04",
    category: "SEO",
    categorySlug: "seo-services",
    contentHtml: `
      <p><strong>Direct answer:</strong> If your business website is not ranking well, the issue is usually connected to one of three stages: discovery, indexing, or visibility. First confirm that search engines can crawl the site, that important pages are indexed, and that the content gives users real value beyond repeated keywords.</p>
      <h2>Why your business website is not ranking</h2>
      <p>When looking into why your business website is not ranking, it helps to separate the problem into a clear sequence. Discovery, or crawling, is when search engine bots find your URLs. Indexing is when the search engine processes and stores those pages. Ranking is how an indexed page appears for a specific search query.</p>
      <p>Results can differ because search systems evaluate many signals. Before changing titles, rewriting content, or buying links, first determine whether the issue is discovery, indexing, or query-level visibility.</p>
      <h2>The visibility diagnostic matrix</h2>
      <p>Use this framework with Google Search Console and analytics data to diagnose performance plateaus and choose the next corrective action.</p>
      <figure><table><thead><tr><th>Symptom</th><th>Evidence to check</th><th>Likely interpretation</th><th>Recommended action</th><th>Verification method</th></tr></thead><tbody><tr><td>URL not found in search results</td><td>Search Console says “URL is not on Google”</td><td>Technical indexing barrier or crawl block</td><td>Audit robots.txt, canonical tags, and meta noindex tags</td><td>Use Search Console’s live URL test</td></tr><tr><td>High impressions but low clicks</td><td>Search Console performance report</td><td>Meta title or description may not match user intent</td><td>Rewrite search snippets around the page’s real value</td><td>Monitor CTR trends in Search Console</td></tr><tr><td>Visibility drop around a core update</td><td>Compare affected pages, queries, technical changes, competitors, and Google’s update guidance</td><td>Timing alone does not prove the update caused the change</td><td>Investigate page-level evidence before changing content</td><td>Compare Search Console data over a suitable date range</td></tr><tr><td>No traffic for service terms</td><td>Impressions appear only for generic or non-commercial terms</td><td>Search intent mismatch or insufficient evidence to diagnose</td><td>Map pages to specific buyer journey stages</td><td>Filter Search Console queries by service intent</td></tr><tr><td>Slow mobile experience</td><td>Core Web Vitals report for LCP, INP, and CLS</td><td>Technical performance friction</td><td>Improve server response, image delivery, and script execution</td><td>Check PageSpeed Insights and field data</td></tr></tbody></table></figure>
      <h2>Technical health and performance standards</h2>
      <p>Mobile usability and HTTPS support a better user experience and stronger security, but neither guarantees search visibility on its own. Core Web Vitals measure aspects of loading, responsiveness, and visual stability through Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).</p>
      <p>Google documents Core Web Vitals as one set of page experience signals, but strong scores do not guarantee top positions. Source: <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer">Google Search Central Core Web Vitals documentation</a>.</p>
      <p>Search Console and analytics metrics such as impressions, clicks, bounce rate, and verified conversions are useful diagnostic and business measurements. They should guide investigation, but they should not be treated as proof of one direct ranking cause.</p>
      <h2>Content quality and search intent alignment</h2>
      <p>A page can be indexed yet remain difficult to find for its target queries when it does not answer the searcher’s actual need. Google’s people-first content guidance recommends useful content created primarily for people and asks publishers to consider whether their work demonstrates first-hand expertise and provides substantial value.</p>
      <p>Source: <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer">Google Search Central guidance on helpful, reliable, people-first content</a>. Review whether each business page answers a specific customer problem with accurate, useful detail instead of repeating generic keyword-focused copy.</p>
      <h2>Go Execution review checkpoints</h2>
      <p>The following checkpoints are part of a standard Go Execution SEO review schedule. These milestones are designed to verify technical health and content relevance. They are not promises of specific ranking, traffic, lead, or performance outcomes.</p>
      <ul><li><strong>Month 0–1: Technical audit and baseline setup.</strong> We analyze Search Console coverage and baseline performance metrics to verify technical eligibility for indexing.</li><li><strong>Month 1–3: Index verification and remediation.</strong> We focus on resolving critical technical barriers and verifying that primary service pages are eligible for discovery.</li><li><strong>Month 3–6: Visibility development and intent alignment.</strong> We refine content to better match user intent and verify that it answers the intended audience’s questions with useful, original detail.</li></ul>
      <p>For more context on organic growth cycles, read <a href="/how-long-does-seo-take-for-new-website/">How Long Does SEO Take for a New Website?</a>. Professional <a href="/services/seo-services/">SEO services for sustainable growth</a> can help identify these barriers through data-led diagnostics rather than guesswork.</p>
      <h2>Need a prioritized diagnosis?</h2>
      <p>If you need a practical next-step plan, <a href="/contact/">request an SEO readiness review</a>. The review checks indexing, technical health, search intent alignment, and priority actions. It does not promise rankings, traffic, leads, or a fixed recovery time.</p>`,
  },
  {
    slug: "how-long-does-seo-take-for-new-website",
    title: "How Long Does SEO Take for a New Website? Timeline Guide",
    excerpt: "Learn about the technical process-based checkpoints for new websites, including crawling, indexing, and search visibility milestones using official Google guidance.",
    date: "2026-07-31",
    dateModified: "2026-07-30",
    category: "SEO",
    categorySlug: "seo-services",
    image: "https://goexecution.com/wp-content/uploads/2026/07/new-website-seo-timeline-featured.jpg",
    imageAlt: "New website SEO journey from crawling and indexing to search visibility growth",
    contentHtml: `
      <p><strong>How long does SEO take for a new website?</strong> There is no guaranteed deadline. Google says crawling can take a few days to a few weeks in its <a href="https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl" target="_blank" rel="noopener noreferrer">recrawl guidance</a>, while the <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">SEO Starter Guide</a> says some changes may appear within hours and others may take several months. For planning—not prediction—Go Execution uses Month 0–1 for audit and baseline setup, Month 1–3 for index coverage verification, Month 3–6 for visibility development, and Month 6–12+ for strategy review. These are process checkpoints, not guarantees of rankings, traffic, or leads.</p>
      <h2>Why SEO Takes Time</h2>
      <p>Search engines do not process web content in a simple, step-by-step manner.</p>
      <p>According to <a href="https://developers.google.com/search/docs/fundamentals/how-search-works" target="_blank" rel="noopener noreferrer">Google’s How Search Works guide</a>, the process involves crawling, where Googlebot finds URLs, and rendering, where it processes JavaScript to understand the content. For modern websites, JavaScript SEO is important because search engines might delay rendering until certain resources are available. Once rendered, pages enter indexing, followed by ongoing evaluation based on factors such as relevance, competition, and authority. New domains typically take time to develop these quality signals compared to already established competitors.</p>
      <h2>How a Page Moves Through Search</h2>
      <figure><p><strong>Crawling → Rendering → Indexing → Ranking Evaluation</strong></p><figcaption>A simplified technical flow; ranking evaluation continues after indexing.</figcaption></figure>
      <figure><img src="https://goexecution.com/wp-content/uploads/2026/07/seo-timeline-checkpoints-infographic.jpg" alt="SEO timeline checkpoints for months 0–1, 1–3, 3–6 and 6–12+" /><figcaption>Review crawling, technical signals, visibility trends and growth at defined checkpoints—without treating them as guarantees.</figcaption></figure>
      <h3>Month 0–1: Crawling and Baseline Measurement</h3><p>In the first audit window, we set up technical tracking and verify that Googlebot can access the site. This includes submitting an XML sitemap and using the URL Inspection Tool in Search Console to monitor early discovery. This phase is focused on removing any barriers that prevent the site from being indexed.</p>
      <h3>Month 1–3: Index Coverage and Content Validation</h3><p>During this period, the focus is on checking which pages are included in the Google index. We use the Indexing report to identify URLs that are “crawled – currently not indexed” or have canonicalization issues. This is a time to ensure the content meets people-first standards.</p>
      <h3>Month 3–6: Search Visibility and Topic Development</h3><p>Once indexing is stable, we look for the first signs of visibility, such as recorded impressions for targeted topics. This checkpoint reviews how well internal links connect related pages and whether search engines are starting to associate the domain with specific expertise.</p>
      <h3>Month 6–12+: Strategy Review and Compounding Efforts</h3><p>This long-term stage assesses the site’s growth in topic coverage. We review which clusters are gaining visibility and where further development is needed. SEO at this stage is about building on the value of early technical and content foundations to support broader business goals.</p>
      <h2>Why Isn’t My New Website Ranking Yet</h2><p>Low early search visibility is often normal. If key pages remain invisible, inspect robots directives, server responses, rendered HTML, canonical selection, internal links, and the Page Indexing report. Use the URL Inspection Tool to confirm what Googlebot can fetch and whether Google selected the intended canonical.</p>
      <h2>SEO Planning Decision Framework</h2>
      <table><thead><tr><th>Situation</th><th>Business Impact</th><th>Recommended Action</th><th>Expected Signal</th><th>Verification Method</th></tr></thead><tbody><tr><td>Low URL discovery</td><td>Content remains invisible</td><td>Update XML sitemap</td><td>Crawl request in logs</td><td>Search Console Stats</td></tr><tr><td>JS-heavy pages</td><td>Indexing delays</td><td>Review rendering</td><td>Rendered HTML visible</td><td>URL Inspection Tool</td></tr><tr><td>Multiple URL variants</td><td>Split ranking signals</td><td>Apply canonical tags</td><td>Preferred URL selection</td><td>Indexing Report</td></tr><tr><td>New service launch</td><td>No topical authority</td><td>Internal link building</td><td>Topic cluster impressions</td><td>Performance Report</td></tr></tbody></table>
      <h3>Audit observation: Identifying indexing blockers</h3><p>A standard Go Execution audit involves checking crawlable but unindexed pages for specific issues. This includes looking for duplicate URLs, canonical conflicts, thin or overlapping content, orphan pages, and weak internal linking.</p>
      <h2>Frequently Asked Questions</h2><h3>Can SEO work in one month?</h3><p>While some technical changes may show results within hours, achieving consistent search visibility for a new domain usually requires a longer evaluation period by search engines. One month is typically used for baseline audits.</p><h3>Does a new domain take longer to rank?</h3><p>Yes, a new domain may take longer to show stable search signals because its pages may still need to be discovered, rendered, indexed, and evaluated alongside established results.</p><h3>Why isn’t Google indexing my website?</h3><p>Common issues include robots.txt blocks, “noindex” tags, thin content, or server errors.</p><h3>Do backlinks matter?</h3><p>Backlinks from reputable sites can help Google discover your pages and understand your site’s importance, but they must be built naturally over time.</p><h3>Does Google Ads improve SEO?</h3><p>No. Google Ads is a paid advertising platform. Buying ads does not result in organic rankings or guaranteed better search visibility.</p>
      <h2>Get a Prioritized SEO Action Plan</h2><p>Use <a href="/services/seo-services/">Go Execution SEO services</a> to understand available support, or request an <a href="/contact/">SEO readiness review</a>. We will identify issues affecting crawl, page-indexing, content, internal linking, and measurement, then provide a prioritized action plan with evidence to verify at each stage—without promising a specific ranking deadline.</p>
      <h2>About This Guidance</h2><p><strong>Author:</strong> Go Execution Editorial Team</p><p><strong>Reviewer:</strong> Go Execution SEO Review Team</p><p><strong>Experience:</strong> Technical SEO, content and measurement-readiness reviews</p><p><strong>Last Updated:</strong> July 30, 2026</p>`,
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}
