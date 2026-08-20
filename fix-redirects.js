const fs = require('fs');
let cfg = fs.readFileSync('next.config.ts', 'utf8');
cfg = cfg.replace(/\{\s*source:\s*"\/how-long-does-seo-take-for-new-website\/?",\s*destination:\s*"\/how-long-does-seo-take-for-new-website\/",\s*permanent:\s*true\s*\},?\n?/g, '');
fs.writeFileSync('next.config.ts', cfg);
console.log('Fixed redirect loops in next.config.ts');
