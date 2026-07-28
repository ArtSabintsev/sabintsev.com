# DNS for AI Discovery (DNS-AID)

[DNS-AID](https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/) publishes agent entrypoints under `_agents.<domain>` using SVCB/HTTPS records ([RFC 9460](https://www.rfc-editor.org/rfc/rfc9460)).

These records must be created in the **Cloudflare DNS** zone for `sabintsev.com` (not in this git repo). Wrangler OAuth for this account currently has `zone:read` only, so records need a token with **DNS Edit** or a dashboard edit.

## Recommended records

Use **HTTPS** (type 65) or **SVCB** (type 64) ServiceMode records.

### Index entrypoint (minimum for scanners)

Point agents at the site root as the discovery landing zone:

| Field | Value |
| --- | --- |
| Name | `_index._agents` |
| Type | `HTTPS` |
| Priority | `1` |
| Target | `sabintsev.com` |
| SvcParams | `alpn="h2,h3"` |

Cloudflare UI: DNS → Records → Add record → HTTPS.

If the dashboard requires a raw presentation form:

```text
_index._agents.sabintsev.com. 3600 IN HTTPS 1 sabintsev.com. alpn="h2,h3"
```

Optional TXT index (some clients probe this as a fallback):

| Field | Value |
| --- | --- |
| Name | `_index._agents` |
| Type | `TXT` |
| Content | `v=dnsaid1; https://sabintsev.com/` |

### Optional protocol-specific names

Only add these if you later host the matching protocol:

| Name | When |
| --- | --- |
| `_mcp._agents` | Real MCP Streamable HTTP endpoint exists |
| `_a2a._agents` | A2A agent card / endpoint exists |

Example MCP (do **not** publish until `/mcp` is real):

```text
_mcp._agents.sabintsev.com. 3600 IN HTTPS 1 sabintsev.com. alpn="h2" port=443
```

## DNSSEC

Cloudflare DNSSEC: DNS → Settings → DNSSEC → Enable. Validating resolvers then return authenticated answers (`AD` bit). isitagentready reports `dnssecValidated` when this is on and records resolve.

## Verify

```sh
# DoH (same path the scanner uses)
curl -sG 'https://cloudflare-dns.com/dns-query' \
  --data-urlencode 'name=_index._agents.sabintsev.com' \
  --data-urlencode 'type=HTTPS' \
  -H 'Accept: application/dns-json' | jq .

dig HTTPS _index._agents.sabintsev.com +dnssec
```

Scanner check: `checks.discoverability.dnsAid.status === "pass"`.
