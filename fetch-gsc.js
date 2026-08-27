const { google } = require('googleapis');
const key = require('./service-account.json');

async function run() {
  console.log("Starting...");
  const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ['https://www.googleapis.com/auth/webmasters.readonly'],
    null
  );

  await jwtClient.authorize();
  console.log("Authorized.");

  const token = jwtClient.credentials.access_token;
  
  const siteUrl = 'https://goexecution.com/';
  const endDate = '2026-08-27';
  const startDate = '2026-08-25'; // Just the last couple days

  const response = await fetch('https://searchconsole.googleapis.com/webmasters/v3/sites/https%3A%2F%2Fgoexecution.com%2F/searchAnalytics/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      startDate,
      endDate,
      dimensions: ['date']
    })
  });

  const data = await response.json();
  console.log("=== DAILY METRICS ===");
  console.log(JSON.stringify(data, null, 2));
}
run();
