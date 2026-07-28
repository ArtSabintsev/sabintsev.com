# auth.md

Agent registration and authentication for **sabintsev.com**.

## Audience

AI agents discovering how to interact with this site.

## Auth posture

This is a **public personal homepage**. There are no protected APIs, no OAuth/OIDC authorization server, and no bearer-token resource endpoints on this origin.

Agents should treat all published content as public read-only:

| Surface | Auth |
| --- | --- |
| `/`, `/index.md` | none (public) |
| `/llms.txt`, `/llms-full.txt`, `/ai.txt` | none (public) |
| `/.well-known/*` discovery files | none (public) |
| WebMCP tools in the browser | none (client-side, page context only) |

## Registration

There is no automated agent registration endpoint and no Dynamic Client Registration.

To contact the site owner (humans or agents acting on behalf of a human):

1. **Email** — [arthur.sabintsev@gmail.com](mailto:arthur.sabintsev@gmail.com)
2. Subject line should identify the agent or product when relevant
3. Do not invent credentials, tokens, or OAuth clients for this domain

## Supported methods

| Method | Status |
| --- | --- |
| Public read of agent surfaces | supported |
| OAuth 2.0 / OIDC | not offered |
| API keys | not offered |
| x402 / paid tools | not offered on this origin |

## Credential use

No credentials are issued by sabintsev.com. If another service (for example Grove or a third-party API) requires auth, obtain tokens from that service's own discovery and authorization endpoints — not from this site.

## Related discovery

- [API catalog](https://sabintsev.com/.well-known/api-catalog)
- [llms.txt](https://sabintsev.com/llms.txt)
- [Agent skills](https://sabintsev.com/.well-known/agent-skills/index.json)
