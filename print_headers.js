const fs = require('fs');

function printHeaders(filepath) {
    const raw = fs.readFileSync(filepath, 'utf16le').replace(/^\uFEFF/, '');
    const lines = raw.split('\n');
    const headerLine = lines[0];
    const separator = headerLine.includes('\t') ? '\t' : ',';
    const headers = headerLine.split(separator).map(h => h.replace(/^"|"$/g, '').trim());
    console.log(`Headers for ${filepath}:`);
    console.log(headers.join(' | '));
    if (lines.length > 1) {
        console.log(`First row: ${lines[1]}`);
    }
}

printHeaders('content-gap.csv');
