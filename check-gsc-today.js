const { google } = require('googleapis');
const auth = new google.auth.GoogleAuth({
  keyFile: './service-account.json',
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
});
const searchconsole = google.searchconsole({ version: 'v1', auth });

async function checkGSCToday() {
  const siteUrl = 'https://goexecution.com/';
  const endDate = '2026-08-27';
  const startDate = '2026-08-20'; 

  try {
    const resTotal = await searchconsole.searchanalytics.query({
      siteUrl: siteUrl,
      requestBody: {
        startDate: startDate,
        endDate: endDate,
        dimensions: ['date'],
      },
    });

    console.log("=== DAILY METRICS (LAST 7 DAYS) ===");
    if (resTotal.data.rows) {
      console.table(resTotal.data.rows.map(r => ({
        Date: r.keys[0],
        Clicks: r.clicks,
        Impressions: r.impressions,
      })));
    }

    const resPages = await searchconsole.searchanalytics.query({
      siteUrl: siteUrl,
      requestBody: {
        startDate: startDate,
        endDate: endDate,
        dimensions: ['page'],
        rowLimit: 5,
      },
    });

    console.log("\n=== TOP PAGES (LAST 7 DAYS) ===");
    if (resPages.data.rows) {
      console.table(resPages.data.rows.map(r => ({
        Page: r.keys[0].replace(siteUrl, '/'),
        Clicks: r.clicks,
        Impressions: r.impressions,
        Position: r.position.toFixed(1)
      })));
    }

    const resQueries = await searchconsole.searchanalytics.query({
      siteUrl: siteUrl,
      requestBody: {
        startDate: startDate,
        endDate: endDate,
        dimensions: ['query'],
        rowLimit: 5,
      },
    });

    console.log("\n=== TOP QUERIES (LAST 7 DAYS) ===");
    if (resQueries.data.rows) {
      console.table(resQueries.data.rows.map(r => ({
        Query: r.keys[0],
        Clicks: r.clicks,
        Impressions: r.impressions,
        Position: r.position.toFixed(1)
      })));
    }
  } catch (e) {
    console.error("Error querying GSC:", e.message);
  }
  process.exit(0);
}

checkGSCToday();
