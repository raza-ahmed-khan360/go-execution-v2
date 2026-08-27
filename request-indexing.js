const { google } = require('googleapis');
const fs = require('fs');

const auth = new google.auth.GoogleAuth({
  keyFile: './service-account.json',
  scopes: ['https://www.googleapis.com/auth/indexing'],
});

const indexing = google.indexing({ version: 'v3', auth });

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function requestIndexing() {
  const siteUrl = 'https://goexecution.com';
  
  // The 15 unindexed URLs identified from the previous scan
  const urlsToUpdate = [
    `${siteUrl}/seo-and-digital-marketing-statistics-2026/`,
    `${siteUrl}/custom-web-development-vs-website-builders/`,
    `${siteUrl}/how-much-does-custom-web-development-cost/`,
    `${siteUrl}/what-is-technical-seo/`,
    `${siteUrl}/enterprise-seo-vs-traditional-seo/`,
    `${siteUrl}/top-web-development-agencies-reddit-consensus/`,
    `${siteUrl}/wordpress-vs-nextjs-for-business-websites/`,
    `${siteUrl}/how-to-redesign-a-website-without-losing-seo/`,
    `${siteUrl}/nextjs-replacing-headless-shopify-enterprise-ecommerce/`,
    `${siteUrl}/local-seo-for-franchises-multi-location/`,
    `${siteUrl}/cost-of-poor-core-web-vitals-inp/`,
    `${siteUrl}/b2b-saas-seo-strategy/`,
    `${siteUrl}/best-b2b-seo-agencies-reddit-reviews/`,
    `${siteUrl}/best-enterprise-seo-agencies-comparison/`,
    `${siteUrl}/top-nextjs-development-agencies-ecommerce/`
  ];

  console.log(`Submitting ${urlsToUpdate.length} URLs to Google Indexing API...`);
  
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < urlsToUpdate.length; i++) {
    const url = urlsToUpdate[i];
    try {
      const res = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        }
      });
      
      console.log(`[SUCCESS] Submitted: ${url}`);
      successCount++;
    } catch (err) {
      console.error(`[ERROR] Failed to submit ${url}:`, err.message);
      failCount++;
    }
    
    // Sleep for 2 seconds to respect rate limiting constraints
    await sleep(2000); 
  }

  console.log("\n=== SUMMARY ===");
  console.log(`Successfully Requested Indexing: ${successCount}`);
  console.log(`Failed: ${failCount}`);
}

requestIndexing();
