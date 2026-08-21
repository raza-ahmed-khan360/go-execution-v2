const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        if (file === 'node_modules' || file === '.next' || file === '.git') return;
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            results = results.concat(walk(fullPath));
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            results.push(fullPath);
        }
    });
    return results;
}

const files = walk(path.join(process.cwd(), 'app'));
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // skip app/page.tsx as it already has buildOrganization and buildWebSite
    if (file.endsWith('app\\page.tsx') || file.endsWith('app/page.tsx')) return;
    if (file.endsWith('layout.tsx')) return;
    if (!content.includes('@graph')) return;

    // 1. Add to imports if not there
    let importMatch = content.match(/import\s+\{([^}]+)\}\s+from\s+["']@\/lib\/seo\/jsonld["']/);
    if (importMatch) {
        let imports = importMatch[1];
        if (!imports.includes('buildOrganization')) {
            imports += ', buildOrganization';
        }
        if (!imports.includes('buildWebSite')) {
            imports += ', buildWebSite';
        }
        content = content.replace(importMatch[0], `import { ${imports.trim()} } from "@/lib/seo/jsonld"`);
    }

    // 2. Add to @graph array
    // Match `"@graph": [` or `'@graph': [`
    content = content.replace(/"@graph":\s*\[/g, '"@graph": [\n        buildOrganization(),\n        buildWebSite(),');
    
    // Check for duplicates
    // If it was already there, we might have added it twice.
    // Let's do a simple fix if we did:
    content = content.replace(/buildOrganization\(\),\s*buildWebSite\(\),\s*buildOrganization\(\),\s*buildWebSite\(\),/g, 'buildOrganization(),\n        buildWebSite(),');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        changedFiles++;
        console.log(`Updated schema in: ${file}`);
    }
});
console.log(`Finished. Updated ${changedFiles} files.`);
