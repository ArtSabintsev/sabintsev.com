# sabintsev.com

Personal homepage for Arthur Sabintsev. Live at [sabintsev.com](https://sabintsev.com).

## What it is

A single-file static personal site in a full-bleed portrait style: large photo background, name and role, Modern Intelligence / Ventures / Writing, and social links (email, GitHub, LinkedIn, Substack, Telegram, X).

## Local development

No build step. From the repo root:

```sh
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

Or open `index.html` directly in a browser.

## Deploy

Pushing to `master` on `origin` publishes via GitHub Pages (`CNAME` → sabintsev.com).

DNS and CDN sit on **Cloudflare** (orange-cloud proxy in front of GitHub Pages). Agent-facing response headers and `Accept: text/markdown` negotiation are handled by the Worker in `cloudflare/agent-edge/`:

```sh
cd cloudflare/agent-edge && wrangler deploy
```

### DNS for AI Discovery (DNS-AID)

DNS-AID records are **not** in this repo (they live in the Cloudflare DNS zone). See [cloudflare/DNS-AID.md](cloudflare/DNS-AID.md).

## Structure

- `index.html` — page + styles + SEO/JSON-LD + WebMCP tools
- `index.md` — markdown homepage (`Accept: text/markdown` via Worker)
- `images/backdrop.jpg` — full-bleed portrait
- `llms.txt`, `llms-full.txt`, `ai.txt` — agent-readable public summary
- `auth.md` — agent auth posture (public site; no OAuth on this origin)
- `robots.txt`, `sitemap.xml` — crawl metadata + Content Signals
- `.well-known/api-catalog` — RFC 9727 linkset
- `.well-known/agent-skills/` — skills discovery index + `sabintsev-profile` skill
- `cloudflare/agent-edge/` — Worker: Link headers + markdown negotiation

## Intentionally not published

This origin has **no protected APIs**. The following discovery surfaces are omitted on purpose so agents are not sent into dead OAuth/MCP flows:

- `/.well-known/openid-configuration` / `oauth-authorization-server`
- `/.well-known/oauth-protected-resource`
- `/.well-known/mcp/server-card.json` (no MCP server on this origin)
