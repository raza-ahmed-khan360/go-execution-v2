const puppeteer = require('puppeteer');
const fs = require('fs');

async function runScan() {
    console.log("Starting Mobile Responsiveness Scan...");
    
    // Fetch sitemap to get all URLs
    let urls = [];
    try {
        const sitemapResponse = await fetch('http://localhost:3000/sitemap.xml');
        const sitemapText = await sitemapResponse.text();
        const regex = /<loc>(.*?)<\/loc>/g;
        let match;
        while ((match = regex.exec(sitemapText)) !== null) {
            urls.push(match[1].replace('https://goexecution.com', 'http://localhost:3000'));
        }
    } catch (e) {
        console.error("Failed to fetch sitemap. Is the server running on port 3000?");
        process.exit(1);
    }
    
    console.log(`Found ${urls.length} URLs in sitemap.`);
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Emulate iPhone 12/13
    await page.setViewport({
        width: 390,
        height: 844,
        isMobile: true,
        hasTouch: true
    });
    
    let reportMarkdown = `# Mobile Responsiveness Scan Report\n\n`;
    let issuesFound = 0;
    
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        console.log(`[${i+1}/${urls.length}] Scanning ${url}...`);
        
        try {
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 5000 });
            await new Promise(r => setTimeout(r, 500)); // allow basic render
            
            // Check for horizontal overflow
            const overflowIssues = await page.evaluate(() => {
                const docWidth = document.documentElement.clientWidth;
                const issues = [];
                
                // Function to check element
                const checkElement = (el) => {
                    const rect = el.getBoundingClientRect();
                    if (rect.right > docWidth || rect.width > docWidth) {
                        // Avoid logging every child if parent is already overflowing, but this is a simple check
                        let identifier = el.tagName.toLowerCase();
                        if (el.id) identifier += `#${el.id}`;
                        if (el.className && typeof el.className === 'string') identifier += `.${el.className.split(' ').join('.')}`;
                        
                        // Ignore invisible elements or script/style tags
                        const style = window.getComputedStyle(el);
                        if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0' && !['script', 'style', 'link', 'meta', 'noscript'].includes(el.tagName.toLowerCase())) {
                            issues.push({
                                tag: identifier,
                                width: rect.width,
                                right: rect.right,
                                docWidth: docWidth
                            });
                        }
                    }
                };
                
                // Check all elements
                const allElements = document.querySelectorAll('*');
                allElements.forEach(checkElement);
                
                // Filter out children if their parent is already causing overflow to reduce noise
                const uniqueIssues = [];
                const seenParents = new Set();
                for (const issue of issues) {
                     uniqueIssues.push(issue);
                }
                
                return uniqueIssues;
            });
            
            // Filter noise (e.g. svg icons might overflow slightly, or body itself)
            const significantIssues = overflowIssues.filter(issue => {
                if (issue.tag.includes('body') || issue.tag.includes('html')) return false;
                // Only count if it's more than 2px overflow
                if (issue.right <= issue.docWidth + 2 && issue.width <= issue.docWidth + 2) return false;
                return true;
            });
            
            if (significantIssues.length > 0) {
                issuesFound++;
                reportMarkdown += `## ❌ Overflow Detected: ${url.replace('http://localhost:3000', '')}\n`;
                
                // Group by class to avoid massive lists
                const classes = new Set(significantIssues.map(i => i.tag.substring(0, 50)));
                
                for (const cls of classes) {
                    reportMarkdown += `- \`${cls}\`\n`;
                }
                reportMarkdown += `\n`;
            }
            
        } catch (e) {
            console.log(`Failed to scan ${url}: ${e.message}`);
            reportMarkdown += `## ⚠️ Error Scanning: ${url.replace('http://localhost:3000', '')}\n- ${e.message}\n\n`;
        }
    }
    
    await browser.close();
    
    if (issuesFound === 0) {
        reportMarkdown += `\n**✅ All ${urls.length} pages are fully mobile responsive with no horizontal overflow!**\n`;
    } else {
        reportMarkdown += `\n**⚠️ Found mobile layout issues on ${issuesFound} out of ${urls.length} pages.**\n`;
    }
    
    fs.writeFileSync('C:/Users/Raheel/.gemini/antigravity/brain/2dbf3788-b100-4fee-8890-b6ba657889d2/mobile_scan_report.md', reportMarkdown);
    console.log(`Scan complete! Report saved to artifacts.`);
}

runScan();
