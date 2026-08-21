const fs = require('fs');
let data = JSON.parse(fs.readFileSync('lib/wp-content.json', 'utf8'));

function removeMoneyBack(obj) {
  if (Array.isArray(obj)) {
    // Filter out strings containing "Money Back" or "Money-Back"
    let filtered = obj.filter(item => {
      if (typeof item === 'string' && /money-?back/i.test(item)) {
        return false;
      }
      return true;
    });
    // Recursively process the rest
    for (let i = 0; i < filtered.length; i++) {
      if (typeof filtered[i] === 'object' && filtered[i] !== null) {
        removeMoneyBack(filtered[i]);
      }
    }
    // Modify in place? We can't easily replace the array itself if we're filtering.
    // Let's just do an in-place splice.
    for (let i = obj.length - 1; i >= 0; i--) {
      if (typeof obj[i] === 'string' && /money-?back/i.test(obj[i])) {
        obj.splice(i, 1);
      } else if (typeof obj[i] === 'object' && obj[i] !== null) {
        removeMoneyBack(obj[i]);
      }
    }
  } else if (typeof obj === 'object' && obj !== null) {
    for (let key in obj) {
      if (typeof obj[key] === 'string' && /money-?back/i.test(obj[key])) {
        obj[key] = obj[key].replace(/100%\s+Money\s+Back\s+Guarantee\s*\*?/gi, '')
                           .replace(/Money\s+Back\s+Guarantee/gi, '')
                           .replace(/100%\s+Satisfaction\s+and\s+Money-Back\s+Guarantee\s*\*\*/gi, '100% Satisfaction Guarantee**');
        
        // Clean up any stray symbols if the entire string was just the guarantee
        if (obj[key].trim() === '' || obj[key].trim() === '*' || obj[key].trim() === '**') {
            // we should probably delete the key if it's an array element, but this branch handles object properties.
        }
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        removeMoneyBack(obj[key]);
      }
    }
  }
}

removeMoneyBack(data);
fs.writeFileSync('lib/wp-content.json', JSON.stringify(data, null, 2));
console.log('Removed Money Back guarantees from wp-content.json');
