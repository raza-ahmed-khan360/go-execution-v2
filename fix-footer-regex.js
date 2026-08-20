const fs = require('fs');
let content = fs.readFileSync('components/site-shell.tsx', 'utf8');

content = content.replace(
    /<li><Link href="\/terms-and-conditions">Terms &amp; Conditions<\/Link><\/li>\s*<li><Link href="\/privacy-policy">Privacy Policy<\/Link><\/li>/g,
    '<li><Link href="/terms-of-service">Terms of Service</Link></li>\n                <li><Link href="/privacy-policy">Privacy Policy</Link></li>\n                <li><Link href="/cookie-policy">Cookie Policy</Link></li>'
);

content = content.replace(
    /<Link href="\/terms-and-conditions">Terms &amp; Conditions<\/Link>\s*<Link href="\/privacy-policy">Privacy Policy<\/Link>/g,
    '<Link href="/terms-of-service">Terms of Service</Link>\n            <Link href="/privacy-policy">Privacy Policy</Link>\n            <Link href="/cookie-policy">Cookie Policy</Link>'
);

fs.writeFileSync('components/site-shell.tsx', content, 'utf8');
console.log('Fixed legal links with regex');
