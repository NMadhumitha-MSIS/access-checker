# Access Checker

**Scans small business websites for accessibility problems and explains them in plain English.**

## The problem

Many small business websites can't be used properly by people with disabilities. Pictures have no descriptions for blind visitors, text is too faint to read, and buttons have no names that read-aloud software can announce. This shuts out customers, and in the US it can also expose businesses to legal complaints.

Free accessibility checkers already exist, but they're built for developers. They return long lists of technical warnings like "Select element must have an accessible name," which a bakery owner or dental office manager has no way to act on.

## What this tool does

You type in a website address. The tool checks the page and returns a short report that a non-technical owner can understand:

- Problems ranked from most to least serious
- A plain-English title for each problem
- Why it matters, using everyday examples
- What to ask their web designer to fix

## What I found on real local businesses

I tested the tool on small business websites in the Boston area.

| Business | Type | Result |
|---|---|---|
| Chestnut Hill Dental | Dental office, own website | 9 types of problems, including hard-to-read text in 18 places |
| Tina's Hair Salon Brighton | Salon, own website | 7 types, including a button with no name |
| SmileDMD | Dental office, own website | 6 types, including hard-to-read text in 53 places |
| Daniel's Bakery Brighton | Bakery, own website | 4 types, including a wrong language setting |
| Gentle Dental | Multi-location dental group | 3 types, none critical |
| Pretty Chic PMU | Makeup studio, own website | 1 type: hard-to-read text in 9 places |
| Emme (on Zenoti) | Salon, booking platform page | 6 types, mostly the platform's to fix |
| Lolly's Bakery (on Toast) | Bakery, ordering platform page | Passed all automatic checks |
| Bakey Babka | Bakery | Could not be scanned (site blocks automated visitors) |

**Key pattern:** hard-to-read text appeared on every site I could scan, except the one hosted on a large ordering platform. Early results suggest that businesses with their own websites have more problems than those using big platforms, though this is a small sample.

## Decisions I made along the way

**Detecting security blocks instead of reporting misleading results.** My first scan of a bakery reported only one problem. When I had the tool take a screenshot of what it actually saw, it turned out to be a security check page, not the bakery's site. The tool was confidently giving a wrong answer. I changed it to recognize these pages and clearly say it couldn't scan the site, rather than trying to get around the business's security.

**Hand-written explanations first, AI later.** I wrote the plain-English explanations myself for the most common problems, so they're always accurate and free to generate. Every time a scan found a problem without an explanation, I added one. AI could later cover rare cases the phrasebook doesn't.

**Being honest about limits.** Automated checks only catch some accessibility problems, and a scan doesn't prove a site meets legal requirements. Every report says so, and a "no problems found" result says a person should still review the site.

**Passing its own test.** The tool's own page passes its own automated scan.

## How it works

1. **Puppeteer** opens the website in a real browser, the way a visitor would.
2. **axe-core**, a widely used open-source accessibility engine, checks the page against accessibility rules.
3. A **plain-English phrasebook** translates each technical finding into a simple explanation and fix.
4. An **Express** server connects it to a simple web page where anyone can run a scan.

## Run it yourself

You'll need [Node.js](https://nodejs.org) installed.

    git clone https://github.com/NMadhumitha-MSIS/access-checker.git
    cd access-checker
    npm install
    node server.js

Then open http://localhost:3000 in your browser.

To scan from the command line instead:

    node scan.js "https://example.com"

## What's next

- Put the tool online so anyone can use it with a link
- Use AI to explain rare problems the phrasebook doesn't cover yet
- A downloadable report owners can send to their web designer