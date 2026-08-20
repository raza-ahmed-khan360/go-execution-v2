import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { JsonLd, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Cookie Policy | Go Execution Digital Services" },
  description: "Understand how Go Execution uses cookies and similar technologies on our website to improve user experience and deliver relevant ads.",
  alternates: { canonical: "/cookie-policy/" },
  openGraph: { type: "website", siteName: "Go Execution", images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],  url: "/cookie-policy/" },
};

export default function CookiePolicy() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPage({ path: "/cookie-policy/", title: "Cookie Policy | Go Execution Digital Services" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Cookie Policy", url: "/cookie-policy/" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main">
        <PageHero 
          eyebrow="Legal" 
          title="Cookie Policy" 
          copy="Learn about how we use cookies, web beacons, and similar technologies to improve your experience on our website." 
          contact={true}
        />
        <section className="ge-section ge-legal py-12">
          <div className="ge-container">
            <div className="ge-legal__content prose prose-slate max-w-4xl mx-auto" style={{ maxWidth: 800, margin: "0 auto" }}>
              <p><strong>Last Updated:</strong> August 20, 2026</p>
              
              <p>This Cookie Policy explains how Go Execution ("we", "us", or "our") uses cookies and similar tracking technologies when you visit our website (goexecution.com). It explains what these technologies are, why we use them, and your right to control our use of them.</p>

              <h2>1. What Are Cookies?</h2>
              <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information. Cookies set by the website owner are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies".</p>

              <h2>2. How We Use Cookies</h2>
              <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "Strictly Necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes.</p>

              <h3>Categories of Cookies We Use</h3>
              <ul>
                <li><strong>Strictly Necessary Cookies:</strong> These cookies are essential to provide you with services available through our website and to use some of its features, such as access to secure areas.</li>
                <li><strong>Functional Cookies:</strong> These cookies allow our website to remember choices you make when you use the website, such as remembering your language preferences or login details. The purpose of these cookies is to provide you with a more personal experience.</li>
                <li><strong>Analytics Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are. <strong>Specifically, we use Google Analytics tracking cookies</strong> to analyze visitor behavior and improve our site.</li>
                <li><strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests. <strong>Specifically, we use Google AdSense tracking cookies (including the DoubleClick cookie)</strong> to serve targeted advertisements based on your prior visits to our site and other websites.</li>
              </ul>

              <h2>3. Managing Your Cookie Preferences</h2>
              <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in our Cookie Consent Banner when you first visit the site, or by modifying your web browser controls to accept or refuse cookies.</p>
              <p>If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted.</p>

              <h3>Google Analytics and Advertising Opt-Out</h3>
              <p>To specifically withdraw consent or opt out of Google’s use of cookies for analytics and targeted advertising, you can:</p>
              <ul>
                <li>Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
                <li>Visit <a href="https://myadcenter.google.com" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> to opt out of personalized ads.</li>
                <li>Use the Digital Advertising Alliance's opt-out tool at <a href="https://aboutads.info" target="_blank" rel="noopener noreferrer">aboutads.info</a>.</li>
              </ul>

              <h2>4. Changes to This Cookie Policy</h2>
              <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>

              <h2>5. Contact Us</h2>
              <p>If you have any questions about our use of cookies or other technologies, please contact us at:</p>
              <p><strong>Email:</strong> <a href="mailto:justin@goexecution.com">justin@goexecution.com</a></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
