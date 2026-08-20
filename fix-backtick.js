const fs = require('fs');
let content = fs.readFileSync('components/site-shell.tsx', 'utf8');
content = content.replace('"use client";`nimport { site } from "@/lib/seo/site";', '"use client";\nimport { site } from "@/lib/seo/site";');
fs.writeFileSync('components/site-shell.tsx', content, 'utf8');
console.log('Fixed syntax error in site-shell.tsx');
