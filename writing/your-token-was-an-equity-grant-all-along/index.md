---
title: Your Token Was An Equity Grant All Along
description: Customers want the work priced in dollars. Operators still hold the token for the upside.
date: 2026-05-25
canonical: https://sabintsev.com/writing/your-token-was-an-equity-grant-all-along/
---

# Your Token Was An Equity Grant All Along

*Customers want the work priced in dollars. Operators still hold the token for the upside.*

Most customers don't want your token. They want a GPU hour, an RPC call, a map mile, storage, vehicle data, wireless coverage, and so on. Price that in dollars and the buyer can budget. Price it in your native asset and the buyer becomes an unwitting community member inheriting your baggage: treasury policy, tax treatment, and a view on your chart.

DePIN made that trade because the industry was scared to say the obvious. Between 2018 and 2022, a token that looked like ownership also looked like the thing the [SEC's digital-asset framework](https://www.sec.gov/corpfin/framework-investment-contract-analysis-digital-assets) called an investment contract. So networks gave tokens jobs: gas, access, settlement, security, governance.

Anything except a cap table, which is funny, because the token was behaving like equity all along, and that equity-like upside landed on the network operators.

## Payroll Is Not Capital

Operators don't run on upside. They run on opex: [power](https://www.eia.gov/electricity/monthly/), bandwidth, GPUs, rent, labor, and taxes. Those are dollar liabilities. Pay them in a token that can [lose 90% from peak in eighteen months, as HNT did](https://www.coingecko.com/en/coins/helium), and a hardware business unwittingly gets a trading desk attached.

The unemotional disciplined operators sell immediately on receipt. Hedging isn't really on the menu, because most DePIN tokens don't have the perps or options depth to short into. The holders ride the price down and leave. Capacity goes first, then quality, then demand.

When the payment rail is the token, the operator's P&L and the token chart become the same chart.

## The Networks That Recovered

The networks that recovered split the two assets: the token for ownership and the stablecoin (or stake) for the work.

[Render](https://know.rendernetwork.com/basics/burn-mint-equilibrium) prices jobs in fiat terms and burns RENDER on settlement.

[Filecoin Onchain Cloud](https://docs.filecoin.cloud/cookbooks/payments-and-storage/) streams USDFC through [Filecoin Pay](https://docs.secured.finance/) directly to storage providers.

[DIMO](https://docs.dimo.org/) sells vehicle data through credits. [Hivemapper](https://docs.hivemapper.com/) sells map credits and pays contributors in HONEY.

[IO.net](https://io.net) takes USDC from customers and pays suppliers in IO.

[Akash](https://akash.network/) named the trade-off in writing when they shipped [Burn-Mint Equilibrium](https://akash.network/blog/what-burn-mint-equilibrium-means-for-akash/): stable payments help adoption but can weaken native-token demand, while native-token payments keep token demand alive but scare buyers and squeeze providers. They picked stable pricing with native-token settlement and moved on.

[Pocket Network](https://pokt.network/), which I helped build, was early to a different primitive: apps stake POKT to reserve relay capacity instead of paying per call. That keeps the customer (demand) side off the token-price treadmill and supplies buy-pressure, but node runners (supply-side) still earn POKT and still face the same selling pressure as every other DePIN operator. [PIP-41's deflationary mint](https://forum.pokt.network/t/pip-41-introducing-a-deflationary-mint-mechanism-for-shannon-tokenomics/5622) closes part of that gap: every relay served burns more POKT than it mints, so usage tightens supply instead of inflating it. Operators still earn POKT, but the POKT they hold appreciates with the network's success rather than getting diluted by it.

[Helium](https://docs.helium.com/tokens/data-credit/) prices data in USD-pegged Data Credits, minted by burning HNT. [Messari's 2025 DePIN report](https://messari.io/report/state-of-depin-2025) shows what that fix is producing in practice: Helium's onchain revenue grew 8x in 2025 while HNT fell 77%. The token is decoupling from operational performance, which is what equity does. Operators still earned HNT and still ate the drawdown, so the supply side remains the harder fix, but the token's behavior in the data is already telling you what the token actually is. Split from the work, the token starts behaving like a standalone financial product priced on what the network might be worth in five years, not what it earned this quarter.

## The Token Is The Cap Table

Different designs, same admission: work needs insulation from token volatility, and the token should do the one job nobody else can, which is represent ownership.

Strip away the payment-rail story and a DePIN token looks less like money and more like an [employee stock option](https://www.investor.gov/introduction-investing/investing-basics/glossary/employee-stock-options-esos). Operators show up before revenue is real. They buy hardware, sign leases, keep machines online, and take reputational risk on a network most customers haven't heard of yet. Cash pays for the month, and the token is the upside if the network matters five years later. That's a barbell payoff, and it's the same shape as every Series A engineer's comp package: small monthly draw, large terminal upside, conditional on the product actually mattering.

Look at the analogies. Emissions are the option pool. Burns are buybacks. Staking is the vesting cliff. Slashing is clawback. [AKT](https://akash.network/token/) is Akash's incentive pool. [FIL collateral](https://docs.filecoin.io/storage-providers/filecoin-economics/fil-collateral) is Filecoin's clawback. [POKT burns are explicitly deflationary](https://pocket.network/pocket-network-pioneers-the-deflationary-frontier/), funded by app demand. None of that requires the same token to denominate the work itself.

This is the useful DePIN invention, and the industry still under-sells it. A public company can't hand meaningful equity to an individual hardware operator without lawyers, transfer agents, jurisdiction checks, tax paperwork, and a lot of "we'll get back to you." That's the friction for a Frankfurt-based Render miner or a Singapore-based Akash provider. For a Hivemapper driver in São Paulo or a Helium hotspot host in rural Kansas, the legal scaffolding barely exists at all. A tokenized network can grant upside in a block. DePIN accidentally built what functions like a global [ESOP](https://www.esop.org/) for operators public markets can't structurally reach.

The token functions as a claim on whatever the network becomes. The Hivemapper driver who shot map data in 2023 and the Helium hotspot host who built coverage in 2021 each hold a slice of however much those networks are worth in 2030.

[Older: The Resilience Premium](https://sabintsev.com/writing/the-resilience-premium/) · [Newer: Tokens Never Die](https://sabintsev.com/writing/tokens-never-die/)

[Arthur Sabintsev](https://sabintsev.com/) · [Writing](https://sabintsev.com/writing/)
