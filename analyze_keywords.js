const fs = require('fs');

function parseAhrefsCsv(filepath) {
  try {
    const raw = fs.readFileSync(filepath, 'utf16le').replace(/^\uFEFF/, '');
    const lines = raw.split('\n');
    if (lines.length < 2) return [];
    
    const headerLine = lines[0];
    const separator = headerLine.includes('\t') ? '\t' : ',';
    const headers = headerLine.split(separator).map(h => h.replace(/^"|"$/g, '').trim());
    
    const data = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      let cols = [];
      if (separator === '\t') {
        cols = line.split('\t').map(c => c.replace(/^"|"$/g, ''));
      } else {
        const re = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/;
        cols = line.split(re).map(c => c.replace(/^"|"$/g, ''));
      }
      
      const row = {};
      headers.forEach((h, idx) => {
        row[h] = cols[idx];
      });
      data.push(row);
    }
    return data;
  } catch (e) {
    console.error('Error parsing', filepath, e);
    return [];
  }
}

const gapData = parseAhrefsCsv('content-gap.csv');
const commonData = parseAhrefsCsv('common-keywords.csv');

// Top Content Gap Opportunities (High Volume, Low/Medium KD)
const topGaps = gapData
  .filter(row => {
    const vol = parseInt(row['Volume'] || 0, 10);
    const kd = parseInt(row['KD'] || 0, 10);
    return vol > 50 && kd < 60; // Focus on realistic targets
  })
  .sort((a, b) => parseInt(b['Volume']) - parseInt(a['Volume']))
  .slice(0, 10)
  .map(row => ({
    keyword: row['Keyword'],
    volume: row['Volume'],
    kd: row['KD'],
    intent: row['Intent'] || 'N/A'
  }));

console.log("=== TOP CONTENT GAP OPPORTUNITIES ===");
console.table(topGaps);

// Quick Wins (Keywords we rank for, but can improve)
// In common keywords, look for where our position is between 11 and 30 (Page 2-3)
const quickWins = commonData
  .filter(row => {
    // Ahrefs CSV might have a column for "Position" or the site's specific position
    // Usually it's "goexecution.com Position" or something. Let's find it dynamically.
    const myPosKey = Object.keys(row).find(k => k.toLowerCase().includes('goexecution') && k.toLowerCase().includes('position'));
    if (!myPosKey) return false;
    const pos = parseInt(row[myPosKey], 10);
    const vol = parseInt(row['Volume'] || 0, 10);
    return pos > 5 && pos <= 30 && vol > 50;
  })
  .sort((a, b) => parseInt(b['Volume']) - parseInt(a['Volume']))
  .slice(0, 10)
  .map(row => {
    const myPosKey = Object.keys(row).find(k => k.toLowerCase().includes('goexecution') && k.toLowerCase().includes('position'));
    return {
      keyword: row['Keyword'],
      volume: row['Volume'],
      ourPosition: row[myPosKey],
      kd: row['KD']
    };
  });

console.log("\n=== QUICK WINS (STRIKING DISTANCE) ===");
if (quickWins.length > 0) {
    console.table(quickWins);
} else {
    // If no specific position column found, just show general common keywords
    console.log("Showing top common keywords instead (Position data column not standard):");
    const topCommon = commonData.sort((a, b) => parseInt(b['Volume']) - parseInt(a['Volume'])).slice(0,10).map(row => ({
      keyword: row['Keyword'],
      volume: row['Volume'],
      kd: row['KD']
    }));
    console.table(topCommon);
}
