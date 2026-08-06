const fs = require("fs");
const path = require("path");

function walk(dir, filter, acc = []) {
  let entries = [];
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return acc; }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, filter, acc);
    else if (filter(p)) acc.push(p);
  }
  return acc;
}

// 1. dead WordPress refs anywhere in source or build output
const sources = [
  ...walk("lib", (p) => /\.(ts|tsx|json)$/.test(p)),
  ...walk("app", (p) => /\.(ts|tsx)$/.test(p)),
  ...walk("components", (p) => /\.(ts|tsx)$/.test(p)),
];
let wpHits = 0;
for (const f of sources) {
  const raw = fs.readFileSync(f, "utf8");
  const n = (raw.match(/wp-content/g) || []).length;
  if (n) { console.log(`  DEAD wp-content ref: ${f} (${n})`); wpHits += n; }
}
console.log(`wp-content refs in source: ${wpHits}`);

// 2. every local asset path referenced must exist in public/
const refs = new Set();
for (const f of sources) {
  const raw = fs.readFileSync(f, "utf8");
  for (const m of raw.matchAll(/["'`(](\/(?:uploads|assets)\/[^"'`)\s]+)/g)) refs.add(m[1]);
}
let missing = 0;
for (const r of [...refs].sort()) {
  const disk = path.join("public", decodeURIComponent(r));
  if (!fs.existsSync(disk)) { console.log(`  MISSING on disk: ${r}`); missing++; }
}
console.log(`local asset refs checked: ${refs.size}, missing: ${missing}`);

// 3. portfolio integrity
const c = JSON.parse(fs.readFileSync("lib/wp-content.json", "utf8"));
const vids = c.portfolio.filter((p) => /\.mp4$/i.test(p.image)).length;
console.log(`portfolio: ${c.portfolio.length} items (${vids} video, ${c.portfolio.length - vids} image), all resolve: ${c.portfolio.every((p) => fs.existsSync(path.join("public", p.image)))}`);
