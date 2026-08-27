const { google } = require('googleapis');

async function checkGSC() {
  const auth = new google.auth.GoogleAuth({
    keyFile: './service-account.json',
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });

  const searchconsole = google.searchconsole({
    version: 'v1',
    auth: auth,
  });

  const siteUrl = 'https://goexecution.com/';
  const endDate = '2026-08-25';
  const startDate = '2026-05-25'; // 3 months
  
  try {
    const resTotal = await searchconsole.searchanalytics.query({
      siteUrl: siteUrl,
      requestBody: {
        startDate: startDate,
        endDate: endDate,
        dimensions: ['date'],
      },
    });

    let totalClicks = 0;
    let totalImpressions = 0;
    if (resTotal.data.rows) {
      resTotal.data.rows.forEach(r => {
        totalClicks += r.clicks;
        totalImpressions += r.impressions;
      });
    }
    
    console.log("=== TOTAL METRICS (LAST 3 MONTHS) ===");
    console.log(`Clicks: ${totalClicks}`);
    console.log(`Impressions: ${totalImpressions}`);

    const resPages = await searchconsole.searchanalytics.query({
      siteUrl: siteUrl,
      requestBody: {
        startDate: startDate,
        endDate: endDate,
        dimensions: ['page'],
        rowLimit: 10,
      },
    });

    console.log("\n=== TOP PAGES (URL PREFIX) ===");
    if (resPages.data.rows) {
      console.table(resPages.data.rows.map(r => ({
        Page: r.keys[0].replace(siteUrl, '/'),
        Clicks: r.clicks,
        Impressions: r.impressions,
        Position: r.position.toFixed(1)
      })));
    }
  } catch (e) {
    console.error("Error querying GSC:", e.message);
  }
}

checkGSC();
