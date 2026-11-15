// Render every <figure class="fig"> diagram in a web edition to PNG, for the email edition.
// Usage: node scripts/figures.js <web.html> <out dir>
// Writes fig-<article id>.png for each article that has a figure, and prints one line per file.
// Uses the Playwright + Chromium preinstalled in the cloud environment.
const path = require('path');
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch (e) {
  console.error('playwright not available: ' + e.message);
  process.exit(2);
}

(async () => {
  const [web, out] = process.argv.slice(2);
  if (!web || !out) { console.error('usage: node figures.js <web.html> <out dir>'); process.exit(2); }
  const browser = await chromium.launch();
  // 640 CSS px wide at 2x: crisp on phones, about 1280 px PNGs.
  const page = await browser.newPage({ viewport: { width: 680, height: 1200 }, deviceScaleFactor: 2, colorScheme: 'light' });
  await page.goto('file://' + path.resolve(web));
  const figs = await page.$$('article figure.fig');
  for (const fig of figs) {
    const id = await fig.evaluate(el => el.closest('article').id);
    const svg = await fig.$('svg');
    if (!svg) continue;
    const file = path.join(out, `fig-${id}.png`);
    await svg.screenshot({ path: file });
    console.log(file);
  }
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });
