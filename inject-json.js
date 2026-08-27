const fs = require('fs');
const path = 'lib/wp-content.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

let updated = 0;
data.forEach(post => {
  if (post.contentHtml && !post.contentHtml.includes('ge-direct-answer-box')) {
    const pMatch = post.contentHtml.match(/<p>([\s\S]*?)<\/p>/);
    let snippet = post.excerpt || "Here is the direct answer and summary of this topic.";
    if (pMatch && pMatch[1]) {
      let cleanText = pMatch[1].replace(/<[^>]*>?/gm, '').trim();
      if (cleanText.length > 30) {
        snippet = cleanText;
      }
    }
    const aiBlock = `\n<aside class="ge-direct-answer-box"><p><strong>Direct answer:</strong> ${snippet}</p></aside>\n`;
    post.contentHtml = aiBlock + post.contentHtml;
    updated++;
  }
});

fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
console.log(`Injected AI Answer Blocks into ${updated} items in wp-content.json`);
