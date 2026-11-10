const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const explanations = require('./explanations');

async function scanWebsite(url) {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(resolve => setTimeout(resolve, 3000));

    const pageText = await page.evaluate(() => document.body ? document.body.innerText : '');
    const title = await page.title();
    if (/just a moment|security verification|verify you are human|access denied/i.test(title + ' ' + pageText)) {
      return { url, blocked: true, problems: [] };
    }

    const results = await new AxePuppeteer(page).analyze();
    const order = { critical: 0, serious: 1, moderate: 2, minor: 3 };
    const problems = results.violations
      .sort((a, b) => order[a.impact] - order[b.impact])
      .map(v => {
        const plain = explanations[v.id];
        return {
          code: v.id,
          severity: v.impact,
          title: plain ? plain.title : v.help,
          why: plain ? plain.why : null,
          fix: plain ? plain.fix : null,
          count: v.nodes.length
        };
      });

    return { url, blocked: false, problems };
  } finally {
    await browser.close();
  }
}

module.exports = scanWebsite;