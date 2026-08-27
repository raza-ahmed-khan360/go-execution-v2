const fs = require('fs');

const filePath = 'lib/blog-posts.ts';
let content = fs.readFileSync(filePath, 'utf8');

// A regex to match each blog object's contentHtml property safely.
// We'll look for `contentHtml: \`` and the corresponding closing \``.
const regex = /contentHtml:\s*`([\s\S]*?)`/g;

let updatedCount = 0;

const updatedContent = content.replace(regex, (match, htmlContent) => {
  // If it already has the answer box, skip it
  if (htmlContent.includes('ge-direct-answer-box')) {
    return match;
  }

  // Extract a snippet for the AI answer from the first paragraph
  const pMatch = htmlContent.match(/<p>([\s\S]*?)<\/p>/);
  let snippet = "Here is the direct answer and summary of this topic.";
  
  if (pMatch && pMatch[1]) {
    // Strip inner HTML tags
    let cleanText = pMatch[1].replace(/<[^>]*>?/gm, '').trim();
    if (cleanText.length > 50) {
      snippet = cleanText;
    }
  }

  // Generate the AI answer block
  const aiBlock = `\n      <aside class="ge-direct-answer-box"><p><strong>Direct answer:</strong> ${snippet}</p></aside>\n      `;
  
  // Clean up existing whitespace at the start of htmlContent and prepend
  const newHtml = aiBlock + htmlContent.trimStart();
  
  updatedCount++;
  
  return `contentHtml: \`${newHtml}\``;
});

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log(`Successfully injected AI Answer Blocks into ${updatedCount} blog posts.`);
