const fs = require('fs');
let content = fs.readFileSync('components/site-shell.tsx', 'utf8');

// List 1
content = content.replace(
    '<li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>\n                <li><Link href="/privacy-policy">Privacy Policy</Link></li>',
    '<li><Link href="/terms-of-service">Terms of Service</Link></li>\n                <li><Link href="/privacy-policy">Privacy Policy</Link></li>\n                <li><Link href="/cookie-policy">Cookie Policy</Link></li>'
);

// List 2
content = content.replace(
    '<Link href="/terms-and-conditions">Terms &amp; Conditions</Link>\n            <Link href="/privacy-policy">Privacy Policy</Link>',
    '<Link href="/terms-of-service">Terms of Service</Link>\n            <Link href="/privacy-policy">Privacy Policy</Link>\n            <Link href="/cookie-policy">Cookie Policy</Link>'
);

fs.writeFileSync('components/site-shell.tsx', content, 'utf8');
console.log('Fixed legal links in footer lists');
