# Sabintsev.com Agent Instructions

## Shared Agent Skills

Shared skills are the bootstrapper catalog. Cursor already loads them from the user skill directories. Do not clone a skills repo, and do not add `.agents/skills` in this project.

- Catalog: `~/Developer/bootstrapper/skills`
- Router: `~/Developer/bootstrapper/skills/AGENTS.md`
- Cursor reads `~/.cursor/skills` and `~/.agents/skills`. `up` keeps those links current.

Read the router and use it to decide whether a shared skill applies. Do not copy shared skill instructions into this repo. The old `~/Developer/skills` checkout and ArtSabintsev/skills are gone.

## Project Guidance

Sabintsev.com is Arthur Ariel Sabintsev's personal site, served via GitHub Pages from this repo with the `sabintsev.com` CNAME.

- Main page: `index.html` (single-file static site)
- App Store legal/support pages: `apps/phonetic-russian-keyboard/` (Support) and `apps/phonetic-russian-keyboard/privacy/` (Privacy). These must remain public and functional — App Review rejects private GitHub links.
- Public metadata: `llms.txt`, `llms-full.txt`, `ai.txt`, `robots.txt`, `sitemap.xml`
- Deploy: pushing to `master` on `origin` publishes via GitHub Pages — no build step.
- Local development: open `index.html` directly in a browser; no build step or dev server is required.
- Keep changes small and static-first. Do not add a framework, package manager, or build pipeline unless the user explicitly asks for one.
- Preserve SEO/AIO metadata (meta tags, JSON-LD, llms.txt, ai.txt) when editing copy or page structure.
- Keep `README.md` aligned when project structure, setup, deployment, or visible behavior changes.
