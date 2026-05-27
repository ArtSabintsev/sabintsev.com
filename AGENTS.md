# Sabintsev.com Agent Instructions

## Shared Agent Skills

Arthur's shared agent skills are the first routing layer for non-project-specific work.

- Local checkout: [~/Developer/skills](/Users/arthur/Developer/skills)
- Remote repo: [ArtSabintsev/skills](https://github.com/ArtSabintsev/skills)
- Project link: `.agents/skills` should point at the local checkout.

Before starting work, ensure the shared skills repo exists and this project links to it:

```sh
SKILLS_DIR="$HOME/Developer/skills"
SKILLS_REMOTE="https://github.com/ArtSabintsev/skills.git"

if [ ! -d "$SKILLS_DIR/.git" ]; then
  mkdir -p "$(dirname "$SKILLS_DIR")"
  git clone "$SKILLS_REMOTE" "$SKILLS_DIR"
else
  git -C "$SKILLS_DIR" pull --ff-only
fi

mkdir -p .agents
if [ ! -e .agents/skills ]; then
  ln -s "$SKILLS_DIR" .agents/skills
fi
```

After bootstrapping, read `$SKILLS_DIR/AGENTS.md` and use its routing table to decide whether a shared skill applies. Do not copy shared skill instructions into this repo; update the shared skill repo instead.

If the private remote cannot be cloned because GitHub auth is unavailable, report that clearly and continue with the repo-local guidance below.

## Project Guidance

Sabintsev.com is Arthur Ariel Sabintsev's personal site, served via GitHub Pages from this repo with the `sabintsev.com` CNAME.

- Main page: `index.html` (single-file static site)
- Public metadata: `llms.txt`, `llms-full.txt`, `ai.txt`, `robots.txt`, `sitemap.xml`
- Deploy: pushing to `master` on `origin` publishes via GitHub Pages — no build step.
- Local development: open `index.html` directly in a browser; no build step or dev server is required.
- Keep changes small and static-first. Do not add a framework, package manager, or build pipeline unless the user explicitly asks for one.
- Preserve SEO/AIO metadata (meta tags, JSON-LD, llms.txt, ai.txt) when editing copy or page structure.
- Keep `README.md` aligned when project structure, setup, deployment, or visible behavior changes.
