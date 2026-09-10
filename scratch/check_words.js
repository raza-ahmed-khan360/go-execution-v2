const fs = require('fs');
const content = fs.readFileSync('lib/blog-posts.ts', 'utf8');

const posts = content.split('slug: "').slice(1);
posts.forEach(post => {
    const slug = post.split('"')[0];
    const match = post.match(/contentHtml:\s*([^]*)/);
    if (match) {
        const html = match[1];
        const text = html.replace(/<[^>]+>/g, ' ');
        const words = text.split(/\s+/).filter(w => w.length > 0).length;
        console.log(slug + ': ' + words + ' words');
    }
});
