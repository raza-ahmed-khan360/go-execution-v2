const { google } = require('googleapis');
const auth = new google.auth.GoogleAuth({
  keyFile: './service-account.json',
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
});
const searchconsole = google.searchconsole({ version: 'v1', auth });

async function checkQueries() {
  try {
    const res = await searchconsole.searchanalytics.query({
      siteUrl: 'https://goexecution.com/',
      requestBody: {
        startDate: '2026-05-25',
        endDate: '2026-08-25',
        dimensions: ['query'],
        rowLimit: 20,
        // Sort by impressions descending
      },
    });

    const rows = res.data.rows || [];
    // GSC API sorts by clicks descending by default. Let's sort by impressions in memory.
    rows.sort((a, b) => b.impressions - a.impressions);

    console.log("=== TOP 20 QUERIES BY IMPRESSIONS ===");
    console.table(rows.map(r => ({
      Query: r.keys[0],
      Clicks: r.clicks,
      Impressions: r.impressions,
      Position: r.position.toFixed(1)
    })));
  } catch (e) {
    console.error(e);
  }
}
checkQueries();
