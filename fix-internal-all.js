const fs = require('fs');
let content = fs.readFileSync('lib/blog-posts.ts', 'utf8');
content = content.replace(/href="\/blog\/([a-zA-Z0-9-]+)\/"/g, 'href="/$1/"');
fs.writeFileSync('lib/blog-posts.ts', content, 'utf8');
console.log('Replaced all /blog/ internal links in blog-posts.ts');
