const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        if (file === 'node_modules' || file === '.next' || file === '.git') return;
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(fullPath));
        } else {
            if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.json')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = walkDir(process.cwd());

let changedFiles = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace support and info with justin
    content = content.replace(/support@goexecution\.com/gi, 'justin@goexecution.com');
    content = content.replace(/info@goexecution\.com/gi, 'justin@goexecution.com');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        changedFiles++;
        console.log(`Updated emails in: ${file}`);
    }
});

console.log(`Finished. Updated ${changedFiles} files.`);
