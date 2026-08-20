import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { JsonLd, buildWebPage, buildBreadcrumbList , buildOrganization, buildWebSite } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | Go Execution Digital Services" },
  description: "Read the Terms of Service for Go Execution. These terms govern your use of our website and digital services.",
  alternates: { canonical: "/terms-of-service/" },
  openGraph: { type: "website", siteName: "Go Execution", images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],  url: "/terms-of-service/" },
};

export default function TermsOfService() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
        buildOrganization(),
        buildWebSite(),
      buildWebPage({ path: "/terms-of-service/", title: "Terms of Service | Go Execution Digital Services" }),
      buildBreadcrumbList([
        { name: "Home", url: "/" },
        { name: "Terms of Service", url: "/terms-of-service/" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main id="primary" className="site-main">
        <PageHero 
          eyebrow="Legal" 
          title="Terms of Service" 
          copy="Please read these terms carefully before using our website or services. By using our services, you agree to these terms." 
          contact={true}
        />
        <section className="ge-section ge-legal py-12">
          <div className="ge-container">
            <div className="ge-legal__content prose prose-slate max-w-4xl mx-auto" style={{ maxWidth: 800, margin: "0 auto" }}>
              <p><strong>Last Updated:</strong> August 20, 2026</p>
              
              <p>Welcome to Go Execution. These Terms of Service ("Terms") govern your use of the goexecution.com website and any digital marketing, development, and consulting services (collectively, the "Services") provided by Go Execution ("we", "us", or "our").</p>

              <h2>1. Acceptance of Terms</h2>
              <p>By accessing our website or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our website or Services. We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting on this page.</p>

              <h2>2. User Account Responsibilities</h2>
              <p>If you create an account or provide information to us to use our Services, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

              <h2>3. Billing, Payments, and Subscriptions</h2>
              <p>We offer various digital services that may require payment. By purchasing a service, you agree to provide valid and up-to-date payment information.</p>
              <ul>
                <li><strong>Payment Processing:</strong> All payments are processed securely through our third-party payment provider, <strong>Stripe, Inc.</strong>. The processing of payments is subject to the terms, conditions, and privacy policies of Stripe in addition to our own Terms. We do not store your full credit card information.</li>
                <li><strong>Subscriptions:</strong> If you enroll in a recurring service or subscription, your payment method will be charged automatically at the start of each billing cycle until you cancel.</li>
                <li><strong>Refund Policy:</strong> Due to the nature of digital marketing and development services, refunds are evaluated on a case-by-case basis. Specific refund terms will be outlined in your individual service agreement or contract.</li>
              </ul>

              <h2>4. Intellectual Property</h2>
              <p>All content on this website, including but not limited to text, graphics, logos, images, code, and software, is the property of Go Execution or its content suppliers and is protected by international copyright, trademark, and intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without our express written permission.</p>
              <p>Upon full payment for custom deliverables (such as a website or design assets), intellectual property rights for those specific deliverables will be transferred to you, as explicitly outlined in your service contract.</p>

              <h2>5. Limitation of Liability</h2>
              <p>To the fullest extent permitted by applicable law, Go Execution shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Services; (b) any conduct or content of any third party on the Services; or (c) unauthorized access, use, or alteration of your transmissions or content.</p>

              <h2>6. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Go Execution operates, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in our jurisdiction.</p>

              <h2>7. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p><strong>Email:</strong> <a href="mailto:justin@goexecution.com">justin@goexecution.com</a></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
