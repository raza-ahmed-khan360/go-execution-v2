const fs = require('fs');

const filePaths = ['lib/services.ts', 'lib/industries.ts'];

for (const filePath of filePaths) {
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');

  const regex = /contentHtml:\s*`([\s\S]*?)`/g;

  let updatedCount = 0;

  const updatedContent = content.replace(regex, (match, htmlContent) => {
    if (htmlContent.includes('ge-direct-answer-box')) return match;

    const pMatch = htmlContent.match(/<p>([\s\S]*?)<\/p>/);
    let snippet = "Learn about our expert services and industry solutions tailored for your business needs.";
    
    if (pMatch && pMatch[1]) {
      let cleanText = pMatch[1].replace(/<[^>]*>?/gm, '').trim();
      if (cleanText.length > 30) {
        snippet = cleanText;
      }
    }

    const aiBlock = `\n      <aside class="ge-direct-answer-box"><p><strong>Direct answer:</strong> ${snippet}</p></aside>\n      `;
    
    const newHtml = aiBlock + htmlContent.trimStart();
    updatedCount++;
    
    return `contentHtml: \`${newHtml}\``;
  });

  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log(`Injected AI Answer Blocks into ${updatedCount} items in ${filePath}.`);
}
