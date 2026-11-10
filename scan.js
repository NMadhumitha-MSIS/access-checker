const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const explanations = require('./explanations');

const url = process.argv[2];
if (!url) {
  console.log('Please give a website address, like: node scan.js https://example.com');
  process.exit(1);
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(resolve => setTimeout(resolve, 3000));
  await page.screenshot({ path: 'what-robot-saw.png', fullPage: true });
  const pageText = await page.evaluate(() => document.body.innerText);
  const title = await page.title();
  if (/just a moment|security verification|verify you are human|access denied/i.test(title + ' ' + pageText)) {
    console.log(`Could not scan ${url}: the website showed a security check that blocks automatic visitors.`);
    console.log('Any results would describe the security page, not the real website, so no report was made.');
    await browser.close();
    return;
  }
  const results = await new AxePuppeteer(page).analyze();

  const order = { critical: 0, serious: 1, moderate: 2, minor: 3 };
  results.violations.sort((a, b) => order[a.impact] - order[b.impact]);

  console.log(`Found ${results.violations.length} types of problems on ${url}`);
  results.violations.forEach((v, i) => {
    const plain = explanations[v.id];
        console.log(`\n${i + 1}. [${v.impact.toUpperCase()}] ${plain ? plain.title : v.help} (${v.nodes.length} ${v.nodes.length === 1 ? 'place' : 'places'})`);
    if (plain) {
      console.log(`   Why it matters: ${plain.why}`);
      console.log(`   How to fix: ${plain.fix}`);
    } else {
      console.log('   (No plain-English explanation yet)');
    }
  });
  await browser.close();
})();