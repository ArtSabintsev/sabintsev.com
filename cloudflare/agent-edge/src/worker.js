/**
 * Edge helpers for agent discovery on sabintsev.com (GitHub Pages origin).
 * - Link response headers (RFC 8288 / RFC 9727)
 * - Accept: text/markdown negotiation → /index.md
 * - Correct Content-Type for /.well-known/api-catalog
 */

function linkHeader(pathname) {
  const md = markdownAsset(pathname) || "/index.md";
  return [
    '</.well-known/api-catalog>; rel="api-catalog"',
    '</llms.txt>; rel="alternate"; type="text/plain"; title="LLM summary"',
    '</llms-full.txt>; rel="alternate"; type="text/plain"; title="LLM full summary"',
    '</ai.txt>; rel="alternate"; type="text/plain"; title="AI usage guidance"',
    `<${md}>; rel="alternate"; type="text/markdown"; title="Markdown"`,
    '</.well-known/agent-skills/index.json>; rel="describedby"; title="Agent Skills"',
    '</auth.md>; rel="describedby"; title="auth.md"',
    '</sitemap.xml>; rel="describedby"; type="application/xml"; title="Sitemap"',
  ].join(", ");
}

function wantsMarkdown(request) {
  const accept = request.headers.get("Accept") || "";
  const parts = accept.split(",").map((p) => p.trim().toLowerCase());
  let md = -1;
  let html = -1;
  for (const part of parts) {
    if (!part || part === "*/*") continue;
    const [type, ...params] = part.split(";").map((s) => s.trim());
    let q = 1;
    for (const param of params) {
      if (param.startsWith("q=")) {
        const n = Number(param.slice(2));
        if (!Number.isNaN(n)) q = n;
      }
    }
    if (type === "text/markdown" || type === "text/x-markdown") {
      md = Math.max(md, q);
    }
    if (type === "text/html") {
      html = Math.max(html, q);
    }
  }
  if (md <= 0) return false;
  if (html < 0) return true;
  return md >= html;
}

function isHomepage(pathname) {
  return pathname === "/" || pathname === "" || pathname === "/index.html";
}

function markdownAsset(pathname) {
  if (isHomepage(pathname)) return "/index.md";
  return null;
}

function estimateTokens(text) {
  return Math.max(1, Math.ceil(text.length / 4));
}

function withAgentHeaders(headers, { contentType, markdownTokens, link } = {}) {
  const next = new Headers(headers);
  next.set("x-sabintsev-agent-edge", "1");

  if (link) {
    const existing = next.get("Link");
    if (!existing || !existing.includes('rel="api-catalog"')) {
      next.set("Link", existing ? `${existing}, ${link}` : link);
    }
  }

  if (contentType) {
    next.set("Content-Type", contentType);
  }
  if (markdownTokens != null) {
    next.set("x-markdown-tokens", String(markdownTokens));
    const vary = next.get("Vary");
    if (!vary) {
      next.set("Vary", "Accept");
    } else if (!vary.toLowerCase().includes("accept")) {
      next.set("Vary", `${vary}, Accept`);
    }
  }

  if (contentType || markdownTokens != null) {
    next.delete("Content-Length");
    next.delete("Content-Encoding");
    next.delete("ETag");
    next.delete("Last-Modified");
  }

  return next;
}

/**
 * Fetch the zone origin (GitHub Pages). Same-zone Worker subrequests go to
 * origin rather than re-entering this script.
 */
function fetchOrigin(url, init = {}) {
  return fetch(url, {
    ...init,
    // Ensure we do not send the client Accept: text/markdown to origin asset
    // fetches in a way that confuses intermediate caches.
    redirect: init.redirect ?? "manual",
  });
}

export default {
  async fetch(request) {
    try {
      const url = new URL(request.url);

      // Markdown for Agents: homepage
      const mdAsset =
        request.method === "GET" ? markdownAsset(url.pathname) : null;
      if (wantsMarkdown(request) && mdAsset) {
        const mdUrl = new URL(mdAsset, url.origin).toString();
        const mdRes = await fetchOrigin(mdUrl, {
          method: "GET",
          headers: {
            Accept: "*/*",
            "User-Agent": "sabintsev-agent-edge",
          },
        });

        if (mdRes.ok) {
          const body = await mdRes.text();
          if (
            body &&
            !body.trimStart().toLowerCase().startsWith("<!doctype") &&
            !body.trimStart().toLowerCase().startsWith("<html")
          ) {
            const headers = withAgentHeaders(mdRes.headers, {
              contentType: "text/markdown; charset=utf-8",
              markdownTokens: estimateTokens(body),
              link: linkHeader(url.pathname),
            });
            return new Response(body, { status: 200, headers });
          }
        }
        // Fall through to HTML if markdown is unavailable
      }

      const response = await fetchOrigin(request.url, {
        method: request.method,
        headers: request.headers,
        body:
          request.method === "GET" || request.method === "HEAD"
            ? undefined
            : request.body,
      });

      const headers = withAgentHeaders(response.headers, {
        link: linkHeader(url.pathname),
      });

      if (url.pathname === "/.well-known/api-catalog") {
        headers.set(
          "Content-Type",
          'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"'
        );
        headers.delete("Content-Length");
      }

      if (url.pathname === "/index.md" || url.pathname.endsWith(".md")) {
        const ct = headers.get("Content-Type") || "";
        if (!ct.includes("markdown") && !ct.includes("text/plain")) {
          headers.set("Content-Type", "text/markdown; charset=utf-8");
        }
      }

      // Help caches separate HTML vs markdown variants of /
      if (isHomepage(url.pathname) || markdownAsset(url.pathname)) {
        const vary = headers.get("Vary");
        if (!vary) {
          headers.set("Vary", "Accept");
        } else if (!vary.toLowerCase().includes("accept")) {
          headers.set("Vary", `${vary}, Accept`);
        }
      }

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    } catch (err) {
      return new Response(
        `agent-edge error: ${err && err.message ? err.message : String(err)}`,
        {
          status: 502,
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "x-sabintsev-agent-edge": "error",
          },
        }
      );
    }
  },
};
