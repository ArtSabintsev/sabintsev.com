---
title: The Resilience Premium
description: A second vendor fails as a backup when it goes down for the same reason as the first.
date: 2026-05-22
canonical: https://sabintsev.com/writing/the-resilience-premium/
---

# The Resilience Premium

*A second vendor fails as a backup when it goes down for the same reason as the first.*

I've been wanting to write this since early 2024.

Most software doesn't need decentralization. Gmail works. S3 works. Stripe works. Centralized providers win the happy path because the happy path rewards speed, polish, support, and procurement simplicity.

## Redundancy Is Not Resilience

Having a second vendor is the easy part. The test is whether your backup fails for a different reason than your primary.

Most redundancy doesn't pass that test. AWS, Azure, GCP, Cloudflare, the RPC vendors a wallet calls for chain data, and AI providers still share internet routing, DNS, identity systems, software supply chains, political compliance regimes, and capital-market incentives. Three vendors that fail for the same reason are functionally one.

## When Multi-Vendor Still Goes Dark

[Cloudflare's June 2025 outage](https://blog.cloudflare.com/cloudflare-service-outage-june-12-2025/) is the clean example. Workers KV failed for 2 hours and 28 minutes after an underlying third-party cloud dependency went down. Roughly 90% of requests failed, and the same dependency broke several other Cloudflare products.

The Tornado Cash sanctions showed a different kind of correlation. After [OFAC](https://home.treasury.gov/news/press-releases/sb0057) sanctioned Tornado Cash in August 2022, [Alchemy and Infura blocked RPC access](https://www.theblock.co/post/162402/infura-and-alchemy-blocking-access-to-tornado-cash). OFAC is the Treasury office that issues the sanctions. Tornado Cash mixes a payment until the trail breaks.

Unless you were running your own node, or routing through your own gateway on a decentralized network, you couldn't reach the contract.

The two biggest vendors were affected by one compliance regime, and all users were locked out of the contract.

## What Blockchains Actually Add

Nobody pays the premium because they believe in decentralization. They pay it so their backup doesn't go down on the same day their primary does.

A better name for the premium is resilience capacity: a backup that fails for reasons unrelated to your primary.

Blockchains made this practical. Tokens didn't make networks faster or fix bad products. They let you pay and coordinate independent operators across jurisdictions and balance sheets.

## The Market Is Already Pricing It

Developer tooling is already multi-provider.

- [viem](https://viem.sh/) ships [fallback transports](https://viem.sh/docs/clients/transports/fallback)
- [ethers](https://ethers.org/) ships a [FallbackProvider](https://docs.ethers.org/v6/api/providers/#FallbackProvider)
- MetaMask routes calls through [DIN](https://support.metamask.io/develop/what-is-din/), a decentralized set of more than 50 independent providers.

Regulators are pricing the same risk. Europe's [Digital Operational Resilience Act](https://www.springlex.eu/en/packages/dora/dora-regulation/article-29), DORA, requires financial firms to measure their dependence on any one technology vendor and to plan for more than one.

Insurers are writing policies on it. [Parametrix](https://www.parametrixinsurance.com/) and [Riskwolf](https://www.riskwolf.com/fact-sheets/cloudinsure/) sell insurance that pays when a measured cloud outage crosses a line set in advance.

## Who Buys Resilience Capacity?

The buyer is a wallet that can't go dark on any given Sunday, an exchange that can't lose read/write access when one provider changes policy, or an AI company that doesn't want one model vendor as a permanent chokepoint.

[Axe Compute](https://ecosystem.aethir.com/blog-posts/axe-compute-closes-260m-enterprise-deal-powered-by-aethir) (NASDAQ: AGPU) closed a $260M multi-year deal sourcing 2,304 GPUs through [Aethir's](https://aethir.com/) decentralized network, wrapped in an enterprise contract for uptime and support. I believe that is the buyer: a public company that needs decentralized supply for the resilience and a US-listed counterparty for the contract.

## The Better Pitch

Two pitches the industry should retire:

- "We're faster than the centralized provider." Most of the time, you won't be.
- "Decentralization is always better." It isn't.

Use the centralized provider on a normal day. Pay for a backup that fails for a different reason.

[Newer: Your Token Was An Equity Grant All Along](https://sabintsev.com/writing/your-token-was-an-equity-grant-all-along/)

[Arthur Sabintsev](https://sabintsev.com/) · [Writing](https://sabintsev.com/writing/)
