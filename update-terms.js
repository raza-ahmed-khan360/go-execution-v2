const fs = require('fs');

let content = fs.readFileSync('app/(legal)/terms-of-service/page.tsx', 'utf8');

const originalBillingSection = `<h2>3. Billing, Payments, and Subscriptions</h2>
              <p>We offer various digital services that may require payment. By purchasing a service, you agree to provide valid and up-to-date payment information.</p>
              <ul>
                <li><strong>Payment Processing:</strong> All payments are processed securely through our third-party payment provider, <strong>Stripe, Inc.</strong>. The processing of payments is subject to the terms, conditions, and privacy policies of Stripe in addition to our own Terms. We do not store your full credit card information.</li>
                <li><strong>Subscriptions:</strong> If you enroll in a recurring service or subscription, your payment method will be charged automatically at the start of each billing cycle until you cancel.</li>
                <li><strong>Refund Policy:</strong> Due to the nature of digital marketing and development services, refunds are evaluated on a case-by-case basis. Specific refund terms will be outlined in your individual service agreement or contract.</li>
              </ul>`;

const newBillingSection = `<h2>3. Billing, Payments, and Cancellations</h2>
              <p>We offer various digital services that may require payment. By purchasing a service, you agree to provide valid and up-to-date payment information.</p>
              <ul>
                <li><strong>Payment Processing:</strong> All payments are processed securely through our third-party payment provider, <strong>Stripe, Inc.</strong>. The processing of payments is subject to the terms, conditions, and privacy policies of Stripe in addition to our own Terms. We do not store your full credit card information.</li>
                <li><strong>Subscriptions:</strong> If you enroll in a recurring service or subscription, your payment method will be charged automatically at the start of each billing cycle until you cancel.</li>
                <li><strong>Cancellation Policy:</strong> Clients may request to cancel a project before work commences. Once work has commenced or any deliverables have been approved, cancellations are subject to applicable charges for the work already completed, and our refund policy will apply based on the project's current stage.</li>
                <li><strong>Refund Policy:</strong> Due to the nature of digital marketing and development services, refunds are conditional and evaluated on a case-by-case basis based on project milestones. Specific refund terms will be outlined in your individual service agreement or contract.</li>
              </ul>`;

content = content.replace(originalBillingSection, newBillingSection);

fs.writeFileSync('app/(legal)/terms-of-service/page.tsx', content, 'utf8');
console.log('Terms of service updated successfully.');
