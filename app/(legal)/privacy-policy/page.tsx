import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { JsonLd, buildWebPage, buildBreadcrumbList } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Go Execution Digital Services" },
  description: "Learn how Go Execution collects, uses, protects, and manages personal information. Read our full Privacy Policy.",
  alternates: { canonical: "/privacy-policy/" },
  openGraph: { url: "/privacy-policy/" },
};

export default function PrivacyPolicy() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPage({ path: "/privacy-policy/", title: "Privacy Policy | Go Execution Digital Services" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Privacy Policy", url: "/privacy-policy/" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main">
        <PageHero 
          eyebrow="Legal" 
          title="Privacy Policy" 
          copy="At Go Execution, your privacy is important to us. This Privacy Policy explains how we collect, use, protect, and manage personal information." 
          contact={true}
        />
        <section className="ge-section ge-legal py-12">
          <div className="ge-container">
            <div className="ge-legal__content prose prose-slate max-w-4xl mx-auto" style={{ maxWidth: 800, margin: "0 auto" }}>
              <p><strong>Last Updated:</strong> August 20, 2026</p>
              
              <p>Go Execution ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines the types of information we collect when you visit our website (goexecution.com), engage with our digital marketing services, or interact with us, and how we process and safeguard that information.</p>

              <h2>1. Information We Collect</h2>
              <p>We may collect, use, store, and transfer different kinds of personal data about you, which we have grouped together as follows:</p>
              <ul>
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website, products, and services.</li>
                <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
              </ul>

              <h2>2. How We Collect Your Data</h2>
              <p>We use different methods to collect data from and about you including through:</p>
              <ul>
                <li><strong>Direct interactions:</strong> You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email, or otherwise.</li>
                <li><strong>Automated technologies or interactions:</strong> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions, and patterns. We collect this personal data by using cookies, server logs, and other similar technologies.</li>
              </ul>

              <h2>3. Payment Processing & Billing (Stripe)</h2>
              <p>When you purchase services from Go Execution, we collect billing and shipping details to process your transaction securely. However, <strong>we do not store your raw credit card numbers or sensitive financial data on our servers.</strong></p>
              <p>All payment data is securely transferred to and processed by Stripe, Inc., our third-party payment processor. The processing of those payments is governed strictly by Stripe's Privacy Policy and terms of service. For more information on how Stripe handles your payment data, please review the <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe Privacy Policy</a>.</p>

              <h2>4. Third-Party Advertising and Analytics (Google)</h2>
              <p>We use third-party vendors, including Google, to serve ads based on your prior visits to our website or other websites. These vendors use cookies and web beacons to collect data in the ad serving process.</p>
              <p>Specifically, Google’s use of advertising cookies (such as the DoubleClick cookie) enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.</p>
              <p>You may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://aboutads.info" target="_blank" rel="noopener noreferrer">aboutads.info</a>.</p>

              <h2>5. Your Privacy Rights (GDPR & CCPA)</h2>
              <p>Depending on your location, you may have specific rights regarding your personal data under the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), or other applicable privacy laws. These rights include:</p>
              <ul>
                <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
                <li><strong>Right to Deletion (Erasure):</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or incomplete.</li>
                <li><strong>Right to Object/Restrict Processing:</strong> You have the right to object to or request that we restrict the processing of your personal data, under certain conditions.</li>
              </ul>
              <p>If you make a request, we have one month to respond to you. To exercise any of these rights, please contact us at our provided email address.</p>

              <h2>6. Data Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>

              <h2>7. Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this document. You are advised to review this Privacy Policy periodically for any changes.</p>

              <h2>8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
              <p><strong>Email:</strong> <a href="mailto:justin@goexecution.com">justin@goexecution.com</a></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
