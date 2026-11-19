---
title: Zcash is Not Hard Money
description: ZEC is not Bitcoin insurance. It is a privacy feature trying to be priced like Bitcoin.
date: 2026-06-08
canonical: https://sabintsev.com/writing/zcash-is-not-hard-money/
image: https://sabintsev.com/images/writing/zcash-is-not-hard-money.jpg
---

# Zcash is Not Hard Money

*ZEC is not Bitcoin insurance. It is a privacy feature trying to be priced like Bitcoin.*

![Closed vault door of the Eastern Bank of Alabama, Eufaula.](https://sabintsev.com/images/writing/zcash-is-not-hard-money.jpg)

Closed vault door, Eastern Bank of Alabama, Eufaula. W. N. Manning, Historic American Buildings Survey, May 16, 1935. [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:VAULT_DOOR,_CLOSED_-_Eastern_Bank_of_Alabama,_201_Broad_Street,_Eufaula,_Barbour_County,_AL_HABS_ALA,3-EUFA,8-14.tif).

## Naval got it wrong

When [Naval Ravikant called Zcash "insurance against Bitcoin,"](https://x.com/naval/status/1973254136394293708) the line worked because it made privacy sound like risk management.

But insurance pays when the thing you insured against fails.

ZEC does not pay if Bitcoin fails. If Bitcoin fails, the monetary network that makes ZEC interesting shrinks with it. ZEC is only mildly interesting if Bitcoin works so well that its transparent ledger becomes a liability.

Even then, surveillance only creates the opening. It does not prove ZEC is the asset that captures it.

Privacy can be a feature without becoming the money.

## Two risks

Bitcoin is a response to one kind of state risk: monetary discretion. Debasement, bailouts, capital controls, confiscatory policy, the slow political capture of money.

Bitcoin does not stop a government from printing money. It gives people an asset outside that issuance regime.

Zcash is aimed at a different risk: financial surveillance.

If Bitcoin becomes real settlement infrastructure, the chain becomes a searchable map of economic relationships. Exchanges label it. Analytics firms package it. Creditors, competitors, lawyers, and governments can query it.

Zcash's pitch is that people will pay to get off that graph. That can be useful, but it does not make ZEC Bitcoin.

Both risks are real. They are not the same product.

## Privacy

The obvious Bitcoiner objection is simple: privacy is a feature, not a separate monetary asset.

Use better wallets. [CoinJoin](https://bitcoinops.org/en/topics/coinjoin/), [PayJoin](https://bitcoinops.org/en/topics/payjoin/), and [Silent Payments](https://bitcoinops.org/en/topics/silent-payments/) improve the on-chain graph. [Lightning](https://bitcoinops.org/en/topics/transaction-origin-privacy/) moves everyday payments off the public ledger, although it leaks different metadata and is not Monero-style privacy. [Fedimint](https://fedimint.org/) adds federated e-cash privacy with custody and trust tradeoffs. None of this is perfect, but that is the Bitcoiner point: privacy can keep moving into Bitcoin without making ZEC the asset that captures it.

If Bitcoin leaks too much metadata, the Bitcoiner fix is to make Bitcoin usage less leaky.

ZEC has to prove more than privacy matters. It has to prove the privacy value belongs in a separate money.

## Monero

Monero is the cleaner privacy-coin comparison because it does not pretend to be Bitcoin with a privacy upgrade.

Monero chose privacy-first cash. Its transactions are private by default. It also has no fixed maximum supply. Under the current consensus rules, Monero's tail emission stays at [0.6 XMR per block](https://www.getmonero.org/get-started/faq/) indefinitely, so miners keep getting paid after the main emission.

Monero's messaging is coherent: privacy-first money, predictable ongoing issuance.

Zcash wants the Bitcoin scarcity story and the privacy story at the same time. The privacy system is exactly what makes the scarcity claim harder to audit in the Bitcoin sense.

## Auditability

Bitcoin is not private. Its stronger claim is that the money is publicly verifiable. Run a node and the supply either adds up or it doesn't. You are not asking a foundation, a lab, or a cryptographer to certify the monetary base.

Zcash is different. It has transparent addresses and [shielded addresses](https://zcash.readthedocs.io/en/master/rtd_pages/addresses.html). The shielded side hides addresses and amounts while still letting nodes verify transactions with zero-knowledge proofs.

The public chain can count value moving into and out of shielded pools through [turnstiles](https://zebra.zfnd.org/dev/rfcs/0012-value-pools.html). It cannot inspect every private note inside the pool the way a Bitcoin node can inspect public UTXOs.

A ZEC buyer is not getting Bitcoin's audit model with privacy bolted on for free. They are buying a system where private payments depend on proof-system correctness, turnstile accounting, audits, upgrades, and the judgment of the people maintaining the shielded pool.

That does not justify ZEC as hard money. It makes ZEC look like a privacy feature with Bitcoin's hard-money language bolted on.

## Orchard

Orchard made the hard-money claim harder to defend. [Shielded Labs said](https://forum.zcashcommunity.com/t/the-orchard-counterfeiting-vulnerability-and-next-steps/56015) a local exploit could create counterfeit ZEC inside the shielded pool. [Zcash Foundation said](https://zfnd.org/zebra-4-5-3-and-5-0-0-emergency-soft-fork-and-nu6-2-activation/) there was no evidence it happened on mainnet, and turnstiles showed total supply had not leaked past the pool boundary.

This is not the first time Zcash has had to repair confidence in a shielded pool, which is part of the problem in viewing ZEC as hard money. If the privacy layer needs periodic expert maintenance to defend the monetary claim, ZEC stops looking like hard money, and begins to look like a privacy feature with infrastructure and a token attached.

## ZEC is Unnecessary

Bitcoin's strongest pitch is self-custodied savings with a supply users can verify for themselves.

Zcash's strongest pitch is that your payments should not be easy for strangers to look up.

Those are different risks. They do not deserve the same price.

ZEC can be useful if Bitcoin wins and becomes watched. But if ZEC needs Bitcoin to create the demand, and then needs expert coordination when its private audit layer breaks, it is not insurance against Bitcoin. It is a surveillance hedge trying to borrow Bitcoin's money story, even though Monero already shows that privacy can be valuable without pretending to be Bitcoin.

That is the hole ZEC has to climb out of. Privacy is valuable, but value does not automatically accrue to the coin that wraps it. Bitcoin can make payments less leaky. Zcash is asking the market to price a feature like base money. That is the part I don't buy.

[Arthur Sabintsev](https://sabintsev.com/) · [Writing](https://sabintsev.com/writing/)
