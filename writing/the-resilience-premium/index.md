---
title: The Resilience Premium
description: The decentralization tax isn't a tax. It's a resilience budget.
date: 2026-05-22
canonical: https://sabintsev.com/writing/the-resilience-premium/
original: https://artsabintsev.substack.com/p/the-resilience-premium
---

# The Resilience Premium

*The decentralization tax isn't a tax. It's a resilience budget.*

I've been wanting to write this since early 2024.

Most software doesn't need decentralization. Gmail works. S3 works. Stripe works. Centralized providers win the happy path because the happy path rewards speed, polish, support, and procurement simplicity.

## Redundancy Is Not Resilience

Having a second vendor is the easy part. The test is whether your backup fails for a different reason than your primary.

Most redundancy doesn't pass that test. AWS, Azure, GCP, Cloudflare, major RPC vendors, and AI providers still share internet routing, DNS, identity systems, software supply chains, political compliance regimes, and capital-market incentives.

Three vendors that fail for the same reason are functionally one.

## When Multi-Vendor Still Goes Dark

[Cloudflare's June 2025 outage](https://blog.cloudflare.com/cloudflare-service-outage-june-12-2025/) is the clean example. Workers KV failed for 2 hours and 28 minutes after an underlying third-party cloud dependency went down. Roughly 90% of requests failed, and the same dependency broke several other Cloudflare products.

The Tornado Cash sanctions showed a different kind of correlation. After [OFAC sanctioned Tornado Cash](https://home.treasury.gov/news/press-releases/sb0057) in August 2022, [Alchemy and Infura blocked RPC access](https://www.theblock.co/post/162402/infura-and-alchemy-blocking-access-to-tornado-cash).

Unless you were running your own node or routing through a decentralized network with a sovereign API gateway, you couldn't reach the smart contract.

The two biggest vendors were affected by one compliance regime, and all users were locked out of it.

## What Blockchains Actually Add

Nobody pays the premium because they believe in decentralization. They pay it so their backup doesn't go down on the same day their primary does.

A better name for the premium is resilience capacity: a backup that fails for reasons unrelated to your primary.

Blockchains made this practical. Tokens didn't make networks faster or fix bad products. They let you pay and coordinate independent operators across jurisdictions and balance sheets.

## The Market Is Already Pricing It

Developer tooling is already multi-provider.

- [viem](https://viem.sh/) ships [fallback transports](https://viem.sh/docs/clients/transports/fallback)
- [ethers](https://ethers.org/) ships a [FallbackProvider](https://docs.ethers.org/v6/api/providers/#FallbackProvider)
- MetaMask's [DIN](https://support.metamask.io/develop/what-is-din/) routes through more than 50 independent providers.

Regulators are pricing the same risk. [EU DORA](https://www.springlex.eu/en/packages/dora/dora-regulation/article-29) requires financial entities to manage how dependent they are on any single tech provider and to plan for multi-vendor alternatives.

Insurers are writing policies on it. [Parametrix](https://www.parametrixinsurance.com/) and [Riskwolf](https://www.riskwolf.com/fact-sheets/cloudinsure/) sell parametric cloud-outage coverage.

## Who Buys Resilience Capacity

The buyer is a wallet that can't go dark on any given Sunday, an exchange that can't lose read/write access when one provider changes policy, or an AI company that doesn't want one model vendor as a permanent chokepoint.

[Axe Compute](https://ecosystem.aethir.com/blog-posts/axe-compute-closes-260m-enterprise-deal-powered-by-aethir) (NASDAQ: AGPU) closed a $260M multi-year deal sourcing 2,304 GPUs through [Aethir's](https://aethir.com/) decentralized network, wrapped in enterprise SLAs. I believe that is the buyer: a public company that needs decentralized supply for the resilience and a US-listed counterparty for the contract.

## The Better Pitch

Two pitches the industry should retire:

- "We're faster than the centralized provider." Most of the time, you won't be.
- "Decentralization is always better." It isn't.

Use centralized infrastructure for the happy path. Buy resilience capacity for the day it breaks.

On a good day, the fastest provider wins. On a bad day, the only provider that didn't go down does.
