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
  await page.goto(url);
  const results = await new AxePuppeteer(page).analyze();

  const order = { critical: 0, serious: 1, moderate: 2, minor: 3 };
  results.violations.sort((a, b) => order[a.impact] - order[b.impact]);

  console.log(`Found ${results.violations.length} types of problems on ${url}`);
  results.violations.forEach((v, i) => {
    const plain = explanations[v.id];
    console.log(`\n${i + 1}. [${v.impact.toUpperCase()}] ${plain ? plain.title : v.help} (${v.nodes.length} places)`);
    if (plain) {
      console.log(`   Why it matters: ${plain.why}`);
      console.log(`   How to fix: ${plain.fix}`);
    } else {
      console.log('   (No plain-English explanation yet)');
    }
  });
  await browser.close();
})();