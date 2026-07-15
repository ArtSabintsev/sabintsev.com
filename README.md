# sabintsev.com

Personal homepage for Arthur Sabintsev. Live at [sabintsev.com](https://sabintsev.com).

## What it is

A single-file static personal site in a full-bleed portrait style: large photo background, name and role, Grove / Ventures / Writing, and social links (email, GitHub, LinkedIn, Telegram, X, Substack).

## Local development

No build step. From the repo root:

```sh
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

Or open `index.html` directly in a browser.

## Deploy

Pushing to `master` on `origin` publishes via GitHub Pages (`CNAME` → sabintsev.com).

## Structure

- `index.html` — page + embedded styles + SEO/JSON-LD
- `images/backdrop.jpg` — full-bleed portrait
- `llms.txt`, `llms-full.txt`, `ai.txt` — agent-readable public summary
- `robots.txt`, `sitemap.xml` — crawl metadata
