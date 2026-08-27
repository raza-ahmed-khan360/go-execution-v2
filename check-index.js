const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const auth = new google.auth.GoogleAuth({
  keyFile: './service-account.json',
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
});

const searchconsole = google.searchconsole({ version: 'v1', auth });

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkIndexStatus() {
  console.log("Gathering URLs from codebase...");
  
  const siteUrl = 'https://goexecution.com';
  let urls = [
    `${siteUrl}/`,
    `${siteUrl}/about/`,
    `${siteUrl}/contact/`,
    `${siteUrl}/pricing/`,
    `${siteUrl}/portfolio/`,
    `${siteUrl}/blog/`,
    `${siteUrl}/website-design-development/`,
    `${siteUrl}/digital-marketing/`
  ];

  // Add blogs
  const { blogPosts } = require('./lib/blog-posts.ts');
  blogPosts.forEach(post => {
    urls.push(`${siteUrl}/${post.slug}/`);
  });

  console.log(`Found ${urls.length} URLs to inspect. Starting Inspection API calls...`);
  
  const notIndexed = [];
  const indexed = [];
  const errors = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      const res = await searchconsole.urlInspection.index.inspect({
        requestBody: {
          inspectionUrl: url,
          siteUrl: siteUrl + '/', // GSC property usually needs trailing slash
          languageCode: 'en-US'
        }
      });
      
      const status = res.data.inspectionResult.indexStatusResult.coverageState;
      if (status !== 'Indexed') {
        notIndexed.push({ url, status });
      } else {
        indexed.push(url);
      }
      process.stdout.write('.');
    } catch (err) {
      errors.push({ url, error: err.message });
      process.stdout.write('x');
    }
    // Respect QPS limits
    await sleep(500); 
  }

  console.log("\n\n=== RESULTS ===");
  console.log(`Indexed URLs: ${indexed.length}`);
  console.log(`Not Indexed URLs: ${notIndexed.length}`);
  
  if (notIndexed.length > 0) {
    console.log("\n--- NOT INDEXED ---");
    notIndexed.forEach(item => {
      console.log(`- ${item.url} (${item.status})`);
    });
  }

  if (errors.length > 0) {
    console.log("\n--- ERRORS ---");
    errors.forEach(item => console.log(`- ${item.url}: ${item.error}`));
  }
}

checkIndexStatus();
