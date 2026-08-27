const { google } = require('googleapis');
const key = require('./service-account.json');

async function listSites() {
  const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ['https://www.googleapis.com/auth/webmasters.readonly'],
    null
  );

  const searchconsole = google.searchconsole({
    version: 'v1',
    auth: jwtClient,
  });

  try {
    const res = await searchconsole.sites.list();
    console.log("Sites authorized for this service account:", res.data.siteEntry);
  } catch (e) {
    console.error("Error listing sites:", e.message);
  }
  process.exit(0);
}

listSites();
