const token = 'qUbvdOOfVOE_ywjHwECn-P1_qL4lEhkPHEGVXUUR';
const target = 'goexecution.com';

async function testAhrefs() {
  try {
    const res = await fetch(`https://api.ahrefs.com/v3/site-explorer/all-backlinks?target=${target}&limit=10&select=url_from,domain_rating&mode=subdomains`, {
      headers: { 'Authorization': 'Bearer ' + token, 'Accept': 'application/json' }
    });
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
  } catch(e) { console.error(e); }
}
testAhrefs();
