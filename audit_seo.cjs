const fs = require('fs');
const path = require('path');

function getAllFiles(dir, all = []) {
  if (!fs.existsSync(dir)) return all;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      getAllFiles(full, all);
    } else {
      all.push(full);
    }
  }
  return all;
}

const srcFiles = getAllFiles('src');

// 1. Audit internal links
const linkRegex = /to=["']([^"']+)["']|href=["'](\/[^"']*)["']/g;
const allLinks = new Set();
for (const f of srcFiles) {
  const content = fs.readFileSync(f, 'utf8');
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const l = match[1] || match[2];
    if (l && l.startsWith('/') && !l.startsWith('//')) {
      allLinks.add(l);
    }
  }
}

console.log('=== UNIQUE INTERNAL LINKS IN CODEBASE ===');
console.log(Array.from(allLinks).sort());

// 2. Audit pages for H1, title, meta desc
const pages = fs.readdirSync('src/pages').filter(f => f.endsWith('.tsx'));
console.log('\n=== PAGE AUDIT (H1, title, meta) ===');
for (const p of pages) {
  const content = fs.readFileSync(path.join('src/pages', p), 'utf8');
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  const hasTitle = /document\.title\s*=/.test(content);
  const hasMetaDesc = /meta\[name=["']description["']\]/.test(content);
  const hasCanonical = /canonical/.test(content);
  console.log(`Page: ${p}`);
  console.log(`  H1 count: ${h1Matches.length} ${h1Matches.length === 0 ? '❌ NO H1' : h1Matches.length > 1 ? '⚠️ MULTIPLE H1' : '✅'}`);
  console.log(`  document.title: ${hasTitle ? '✅' : '❌'}`);
  console.log(`  meta description: ${hasMetaDesc ? '✅' : '❌'}`);
  console.log(`  canonical tag: ${hasCanonical ? '✅' : '❌'}`);
}
