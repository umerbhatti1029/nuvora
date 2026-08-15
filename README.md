# Current Ledger

A lightweight, static U.S.-focused home energy information site built for GitHub + Vercel.

## Before publishing

1. Pick the final domain/project name.
2. Replace `https://currentledger.vercel.app` everywhere with the actual canonical domain.
3. Replace the placeholder contact email in `contact.html`.
4. Review every article and update any time-sensitive electricity-price assumptions.
5. Add Google Search Console and submit `/sitemap.xml`.
6. Add analytics only if needed; keep third-party scripts minimal.

## Deploy to Vercel

- Create a GitHub repository.
- Upload this folder's contents to the repository root.
- Import the repository into Vercel.
- Framework preset: **Other** / static site.
- Build command: leave empty.
- Output directory: `.`.
- Deploy.

Vercel will provide a free `*.vercel.app` URL.

## SEO structure

- Homepage: broad topic + calculator
- `/articles/`: content hub
- Three tightly related long-tail guides
- Internal links between every guide
- Canonicals, robots.txt, XML sitemap
- Article + FAQ structured data
- No client-side rendering required for article content
- Minimal CSS/JS and no external image dependencies

## Important SEO note

No honest SEO workflow can guarantee "high search volume + very low competition" without access to paid keyword databases and a live manual SERP review. The selected topics are practical long-tail queries with clear U.S. intent and room to build a focused topical cluster. Validate exact U.S. volume, trend direction, and SERP difficulty in Google Search Console/Keyword Planner/Ahrefs/Semrush before scaling the cluster.
