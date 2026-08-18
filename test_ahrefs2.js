const token = 'qUbvdOOfVOE_ywjHwECn-P1_qL4lEhkPHEGVXUUR';
const target = 'goexecution.com';
async function testAhrefs() {
  try {
    const res = await fetch('https://api.ahrefs.com/v3/site-explorer/domain-rating?target=https://' + target + '/&date=2026-08-19', {
      headers: { 'Authorization': 'Bearer ' + token, 'Accept': 'application/json' }
    });
    const data = await res.json();
    console.log('DR Data:', JSON.stringify(data, null, 2));
  } catch(e) { console.error(e); }
}
testAhrefs();
