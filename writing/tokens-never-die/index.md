---
title: Tokens Never Die
description: When a project stops shipping, the token keeps trading. Volume bots, momentum bots, MEV, and pump groups are the aftermarket.
date: 2026-05-26
canonical: https://sabintsev.com/writing/tokens-never-die/
---

# Tokens Never Die

*When a project stops shipping, the token keeps trading. Volume bots, momentum bots, MEV, and pump groups are the aftermarket.*

When a public company runs out of money there's a legal off-ramp. The court closes the cap table and marks the shares to zero on a specific date.

Token contracts have none of that. They keep executing transfers on every chain until the validators that secure that chain go offline.

The token is its own product, during the project's life and after. It tends to have no bearing on the work. The price tracks attention, narrative, and bots, not output.

So when a project stops shipping, the token doesn't die. It gets an afterlife, and the afterlife has its own economy.

## The Food Chain

Four algorithmic layers stack on every dead token with a stranded liquidity pool, the LP that nobody pulled when the project quit, still holding the token against ETH, SOL, USDC, or whatever else it was paired with. Ether, Solana, or a dollar coin.

**Volume bots.** Paid services that manufacture trades between rotating wallets. [Chainalysis traced one operator, Volume.li, to $257.5 million in cumulative fake volume](https://www.chainalysis.com/blog/crypto-market-manipulation-wash-trading-pump-and-dump-2025/). Packages are priced by output: tiers run from $50 of manufactured volume in 24 hours up to $100,000 in 24 hours. As of Chainalysis's 2025 reporting, the top tier cost about 0.2 ETH. The whole category exists to push pairs onto [DEXScreener](https://dexscreener.com/), [DEXTools](https://www.dextools.io/), [Photon](https://photon-sol.tinyastro.io/), and [pump.fun](https://pump.fun) trending feeds, because aggregator algorithms reward volume.

**Momentum bots.** Algorithmic traders watching the trending feeds and piling into anything that spikes. No thesis on the project.

**MEV and sandwich bots.** MEV is the cut from ordering someone else's trade. On illiquid pairs a small trade moves the price, so the buy just before that trade and the sell just after both pay. [Sandwich extraction on Ethereum cooled from roughly $10 million a month in late 2024 to $2.5 million by October 2025](https://www.tradingview.com/news/cointelegraph:fa12ba092094b:0-exclusive-data-from-eigenphi-reveals-that-sandwich-attacks-on-ethereum-have-w), but the bots never leave. Solana's [Jito](https://www.jito.wtf/) ecosystem runs the same playbook with different plumbing. [Sandwich bots have extracted between $370 and $500 million from Solana traders over a 16-month window](https://www.helius.dev/blog/solana-mev-report), and even after Jito, Marinade, and the Solana Foundation blacklisted 50+ malicious validators in 2025, October still saw roughly 18,000 SOL pulled from 200,000 victims.

**Pump groups.** They understand the food chain better than the average founder ever did. Find a zombie with a stranded LP. Accumulate quietly while attention is elsewhere. Fire a coordinated buy at a known block or slot. The volume spike registers on DEXScreener and pump.fun trending. The momentum bots watching those feeds pile in. The MEV bots trade immediately after every new trade. The pump group sells into that climbing bot stack. Retail isn't there anymore.

[Chainalysis counted 2.06 million tokens launched in 2024](https://www.chainalysis.com/blog/crypto-market-manipulation-wash-trading-pump-and-dump-2025/). Only 1.7% had meaningful trading inside thirty days. Layer in the tokens people mint on pump.fun, every Cosmos chain built for one app, every memecoin on a chain that settles onto a larger one, and the dead population is bigger than any single chain captures. The 98.3% don't go to zero. They go quiet for a while, and then they're raised from the dead.

[Older: Your Token Was An Equity Grant All Along](https://sabintsev.com/writing/your-token-was-an-equity-grant-all-along/) · [Newer: Zcash is Not Hard Money](https://sabintsev.com/writing/zcash-is-not-hard-money/)

[Arthur Sabintsev](https://sabintsev.com/) · [Writing](https://sabintsev.com/writing/)
