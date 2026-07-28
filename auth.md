# auth.md

You are an agent discovering how to register and authenticate against **sabintsev.com**.

This origin is a **public personal homepage**, not a multi-tenant API product. There is no agentic registration endpoint, no OAuth authorization server, and no access tokens to issue.

## Hosts

- **Resource / site** — `https://sabintsev.com` — public HTML, markdown, and discovery files
- **No auth server** — there is no `https://auth.sabintsev.com` (or equivalent) for this site

## Current state

sabintsev.com does **not** support agent registration today.

- Do **not** call `POST /agent/identity`, `POST /agent/auth`, or `POST /oauth2/token` on this origin
- Do **not** invent OAuth clients, API keys, or bearer credentials for this domain
- Treat every published surface as **public read-only** (no login, no scopes, no claim ceremony)

## Discover

There is no Protected Resource Metadata for protected APIs on this origin. Prefer these public discovery files instead:

1. [llms.txt](https://sabintsev.com/llms.txt) — short profile summary
2. [llms-full.txt](https://sabintsev.com/llms-full.txt) — full profile summary
3. [index.md](https://sabintsev.com/index.md) — markdown homepage (`Accept: text/markdown` on `/` also works)
4. [API catalog](https://sabintsev.com/.well-known/api-catalog) — RFC 9727 linkset (no callable APIs)
5. [Agent skills](https://sabintsev.com/.well-known/agent-skills/index.json) — skill index
6. WebMCP tools on the homepage (`get_profile`, `get_contact`, `list_links`) when `navigator.modelContext` is available

If you receive a `401` from this origin, treat it as a misconfiguration or edge error — not as an invitation to register.

## Supported registration methods

| Method | Status | Notes |
| --- | --- | --- |
| `identity_assertion` / ID-JAG | not supported | no authorization server |
| `service_auth` / claim ceremony | not supported | no claim or verification URI |
| `anonymous` registration | not supported | no pre-claim credentials |
| Out-of-band API key | not supported | no API keys on this origin |
| Public read (no registration) | **supported** | default and only method |

### How to "register" for public access

No registration is required. Proceed without credentials:

```http
GET /llms.txt HTTP/1.1
Host: sabintsev.com
Accept: text/plain
```

```http
GET / HTTP/1.1
Host: sabintsev.com
Accept: text/markdown
```

## Contact (human provisioning only)

If a human needs to reach Arthur (not an automated registration flow):

1. Email [arthur.sabintsev@gmail.com](mailto:arthur.sabintsev@gmail.com)
2. Identify your agent or product in the subject when relevant
3. Do not send passwords, private keys, or OAuth client secrets

There is no automated provisioning endpoint and no device-authorization claim flow on this site.

## Credentials and use

No credentials are issued by sabintsev.com. Do not present `Authorization: Bearer` headers to this origin expecting a protected API.

If you need authenticated access to **other** products Arthur is associated with (for example Grove), obtain tokens from **that** product's own `auth.md` / OAuth discovery documents — never from sabintsev.com.

## Errors

| Situation | Meaning | What to do |
| --- | --- | --- |
| `404` on `/.well-known/oauth-protected-resource` | expected | public site; no PRM |
| `404` on `/.well-known/oauth-authorization-server` | expected | no AS on this origin |
| `401` / `403` on public paths | unexpected | retry; do not attempt registration |
| `429` | rate limited | back off and retry |

## Revocation

Nothing to revoke. No access tokens or agent registrations are minted here.
