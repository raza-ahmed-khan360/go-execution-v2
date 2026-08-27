const { google } = require('googleapis');
const auth = new google.auth.GoogleAuth({
  keyFile: './service-account.json',
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
});
const searchconsole = google.searchconsole({ version: 'v1', auth });

async function listProperties() {
  try {
    const res = await searchconsole.sites.list();
    console.log("=== AVAILABLE GSC PROPERTIES ===");
    if (res.data.siteEntry) {
      res.data.siteEntry.forEach(site => {
        console.log(`- ${site.siteUrl}`);
      });
    } else {
      console.log("No properties found for this service account.");
    }
  } catch (e) {
    console.error("Error listing properties:", e.message);
  }
}

listProperties();
