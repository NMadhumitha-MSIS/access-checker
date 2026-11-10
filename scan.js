const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');

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

  console.log(`Found ${results.violations.length} types of problems on ${url}:`);
  results.violations.forEach(v => {
    console.log(`${v.impact}: ${v.help} (${v.nodes.length} places)`);
  });
  await browser.close();
})();