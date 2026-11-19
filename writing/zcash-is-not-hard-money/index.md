---
title: Zcash is Not Hard Money
description: Naval called ZEC insurance against Bitcoin. It does not pay out if Bitcoin fails, and the shielded supply is harder to audit than Bitcoin's.
date: 2026-06-08
canonical: https://sabintsev.com/writing/zcash-is-not-hard-money/
---

# Zcash is Not Hard Money

*Naval called ZEC insurance against Bitcoin. It does not pay out if Bitcoin fails, and the shielded supply is harder to audit than Bitcoin's.*

## Naval got it wrong

When [Naval Ravikant called Zcash "insurance against Bitcoin,"](https://x.com/naval/status/1973254136394293708) the line worked because it made privacy sound like risk management.

But insurance pays when the thing you insured against fails.

ZEC, Zcash's token, does not pay if Bitcoin fails. If Bitcoin fails, the monetary network that makes ZEC interesting shrinks with it. ZEC is only mildly interesting if Bitcoin works so well that its transparent ledger becomes a liability.

Even then, surveillance only creates the opening. It does not prove ZEC is the asset that captures it.

## Two risks

Bitcoin is a response to one kind of state risk: monetary discretion. Debasement, bailouts, capital controls, confiscatory policy, the slow political capture of money.

Bitcoin does not stop a government from printing money. It gives people an asset outside that issuance regime.

Zcash is aimed at a different risk: financial surveillance.

If Bitcoin becomes real settlement infrastructure, the chain becomes a searchable map of economic relationships. Exchanges label it. Analytics firms package it. Creditors, competitors, lawyers, and governments can query it.

Zcash's pitch is that people will pay to get off that graph. That can be useful, but it does not make ZEC Bitcoin.

## Privacy

The obvious Bitcoiner objection is simple: privacy is a feature, not a separate monetary asset.

Use better wallets. [CoinJoin](https://bitcoinops.org/en/topics/coinjoin/), [PayJoin](https://bitcoinops.org/en/topics/payjoin/), and [Silent Payments](https://bitcoinops.org/en/topics/silent-payments/) improve the public map of who paid whom. [Lightning](https://bitcoinops.org/en/topics/transaction-origin-privacy/) moves everyday payments off the public ledger, although it leaks different metadata and is not Monero-style privacy. [Fedimint](https://fedimint.org/) adds private digital cash held by a small group you have to trust. None of this is perfect, but that is the Bitcoiner point: privacy can keep moving into Bitcoin without making ZEC the asset that captures it.

If Bitcoin leaks too much metadata, the Bitcoiner fix is to make Bitcoin usage less leaky.

ZEC has to prove more than privacy matters. It has to prove the privacy value belongs in a separate money.

## Monero

Monero is the cleaner privacy-coin comparison because it does not pretend to be Bitcoin with a privacy upgrade.

Monero chose privacy-first cash. Its transactions are private by default. It also has no fixed maximum supply. Under the current consensus rules, Monero's tail emission stays at [0.6 XMR](https://www.getmonero.org/get-started/faq/), Monero's token, per block indefinitely, so miners keep getting paid after the main emission.

Monero's messaging is coherent: privacy-first money, predictable ongoing issuance.

Zcash wants the Bitcoin scarcity story and the privacy story at the same time. The privacy system is exactly what makes the scarcity claim harder to audit in the Bitcoin sense.

## Auditability

Bitcoin is not private. Its stronger claim is that the money is publicly verifiable. Run a node and the supply either adds up or it doesn't. You are not asking a foundation, a lab, or a cryptographer to certify the monetary base.

Zcash is different. It has transparent addresses and [shielded addresses](https://zcash.readthedocs.io/en/master/rtd_pages/addresses.html). The shielded side hides addresses and amounts while still letting nodes check that a transaction follows the rules without seeing who paid whom or how much.

The public chain can count value moving into and out of shielded pools through [turnstiles](https://zebra.zfnd.org/dev/rfcs/0012-value-pools.html). It cannot inspect every private note inside the pool the way a Bitcoin node can inspect each unspent coin in the open.

A ZEC buyer is not getting Bitcoin's audit model with privacy bolted on for free. They are buying a system where private payments depend on the proofs staying sound, on that count of value in and out, on audits, upgrades, and the judgment of the people maintaining the shielded pool.

## Orchard

Orchard, Zcash's current shielded-pool system, made the hard-money claim harder to defend. [Shielded Labs said](https://forum.zcashcommunity.com/t/the-orchard-counterfeiting-vulnerability-and-next-steps/56015) a local exploit could create counterfeit ZEC inside the shielded pool. [Zcash Foundation said](https://zfnd.org/zebra-4-5-3-and-5-0-0-emergency-soft-fork-and-nu6-2-activation/) there was no evidence it happened on the live network, and turnstiles showed total supply had not leaked past the pool boundary.

This is not the first time Zcash has had to repair confidence in a shielded pool, which is part of the problem in viewing ZEC as hard money. If the privacy layer needs periodic expert maintenance to defend the monetary claim, the supply claim depends on that maintenance.

## ZEC is Unnecessary

Bitcoin's strongest pitch is self-custodied savings with a supply users can verify for themselves.

Zcash's strongest pitch is that your payments should not be easy for strangers to look up.

ZEC can be useful if Bitcoin wins and becomes watched. But if ZEC needs Bitcoin to create the demand, and then needs expert coordination when its private audit layer breaks, it is not insurance against Bitcoin. It is a surveillance hedge trying to borrow Bitcoin's money story, even though Monero already shows that privacy can be valuable without pretending to be Bitcoin. That is the part I don't buy.

[Older: Tokens Never Die](https://sabintsev.com/writing/tokens-never-die/)

[Arthur Sabintsev](https://sabintsev.com/) · [Writing](https://sabintsev.com/writing/)
