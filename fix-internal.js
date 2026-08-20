const fs = require('fs');
let content = fs.readFileSync('lib/wp-content.json', 'utf8');

let newContent = content.replace(/\/blog\/how-long-does-seo-take-for-new-website\/?/g, '/how-long-does-seo-take-for-new-website/');
newContent = newContent.replace(/\/blog\/why-is-my-website-not-ranking-on-google\/?/g, '/why-is-my-website-not-ranking-on-google/');

if (content !== newContent) {
    fs.writeFileSync('lib/wp-content.json', newContent, 'utf8');
    console.log('Fixed blog internal links');
} else {
    console.log('No links to fix found.');
}
