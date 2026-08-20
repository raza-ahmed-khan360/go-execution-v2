const fs = require('fs');
let content = fs.readFileSync('components/site-shell.tsx', 'utf8');
content = content.replace('<Link href="/terms-and-conditions">Terms & Conditions</Link><span aria-hidden="true">|</span><Link href="/privacy-policy">Privacy Policy</Link>', '<Link href="/terms-of-service">Terms of Service</Link><span aria-hidden="true">|</span><Link href="/privacy-policy">Privacy Policy</Link><span aria-hidden="true">|</span><Link href="/cookie-policy">Cookie Policy</Link>');
fs.writeFileSync('components/site-shell.tsx', content, 'utf8');
console.log('Replaced footer links');
