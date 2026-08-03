---
description: Technical deep dives, product updates, and insights from the teams that are helping to build a better Internet.
title: The Cloudflare Blog
image: https://blog.cloudflare.com/_emdash/api/media/file/01KXJHDG7CJT3B3133XAY31N4V.png
---

[Skip to content](#main-content)

August 3, 2026[Your agent needs a computer, not a container — introducing @cloudflare/computer](https://blog.cloudflare.com/cloudflare-computer/)

Agents need more than just a container to scale. We're introducing @cloudflare/computer, an agent runtime that dynamically orchestrates between fast, efficient isolates and full Linux containers to give every agent a computer of its own.

![Matt Carey](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW46BHQSGCBKVGAAVQVS4V3E.png&w=64&h=64&f=webp&fit=cover&position=center)![Aron Carroll](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KZ0QBKB6JZ26WGQW2DHCS5M4.jpeg&w=64&h=64&f=webp&fit=cover&position=center)

[Matt Carey](https://blog.cloudflare.com/author/matt-carey/) and [Aron Carroll](https://blog.cloudflare.com/author/aron-carroll/)

[![](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KZ0Q510F63VHS6DFGP9SAV3H.png&w=1999&h=1125&f=webp&fit=cover&position=center)](https://blog.cloudflare.com/cloudflare-computer/)

August 3, 2026[Cloudflare Workers and Containers now support inbound TCP connections and gRPC](https://blog.cloudflare.com/grpc-workers/)

Cloudflare Workers now support inbound TCP connections via Spectrum, allowing direct socket forwarding to Durable Objects and Containers. Developers can run full-duplex gRPC applications or leverage automatic gRPC-to-gRPC-web translation directly within Workers.

![Mar Witek](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KZ235CPB4AH0E1QF256SHBFJ.webp&w=64&h=64&f=webp&fit=cover&position=center)![Thomas Rubini](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KZ23W8FJDE19KMKKPMZSP5PP.webp&w=64&h=64&f=webp&fit=cover&position=center)

[Mar Witek](https://blog.cloudflare.com/author/mar-witek/) and [Thomas Rubini](https://blog.cloudflare.com/author/thomas-rubini/)

August 3, 2026[Introducing the Billable Usage API: programmatic cost visibility for Cloudflare](https://blog.cloudflare.com/billable-usage-api/)

Cloudflare has launched a new Billable Usage API for accounts, giving developers and FinOps teams single-endpoint programmatic visibility into cost and usage across all self-serve products. Built around the FOCUS specification, spend can now be tracked seamlessly alongside the rest of your cloud stack.

![Ryan Noel](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KZ1X993V2NQBSHZCEDTSYH99.webp&w=64&h=64&f=webp&fit=cover&position=center)![Zunayed Ali](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KZ1X7VHNGDVK1WPDK7WS7DWR.webp&w=64&h=64&f=webp&fit=cover&position=center)![Filipa Nóbrega](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KZ1X62NSE3TRWSABF7J6JR84.webp&w=64&h=64&f=webp&fit=cover&position=center)

[Ryan Noel](https://blog.cloudflare.com/author/ryan-noel/), [Zunayed Ali](https://blog.cloudflare.com/author/zunayed-ali/), and [Filipa Nóbrega](https://blog.cloudflare.com/author/filipa-nobrega/)

August 3, 2026[Smaller, faster, safer: running Kimi and GLM at scale](https://blog.cloudflare.com/smaller-faster-safer-models/)

Serving frontier models like Kimi and GLM means fighting for GPU memory. Here's how we quantize KV caches, compress model weights, and add integrity checks to serve them faster, cheaper, and safely.

![Alex Reneau](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW9WKWJ94JZDRJM354AYKYXG.jpeg&w=64&h=64&f=webp&fit=cover&position=center)![Kevin Flansburg](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW452TM72EKFE8RQCD3JMXND.png&w=64&h=64&f=webp&fit=cover&position=center)![Chi McIsaac](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KZ1QJYZF8GBATHV6TF6MD5KE.png&w=64&h=64&f=webp&fit=cover&position=center)

[Alex Reneau](https://blog.cloudflare.com/author/alex-reneau/), [Kevin Flansburg](https://blog.cloudflare.com/author/kevin-flansburg/), and [Chi McIsaac](https://blog.cloudflare.com/author/chi-mcisaac/)

August 3, 2026[Workers RPC now works across Python and JavaScript](https://blog.cloudflare.com/python-workers-rpc/)

One coding agent can write a Python Worker and another can write a JavaScript Worker. At runtime, those Workers can exchange references to live objects and call their methods without defining APIs, schemas, or serialization code

![Dominik Picheta](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW46P5G8RRA9GKFZA6BYERZ1.jpg&w=64&h=64&f=webp&fit=cover&position=center)![Gyeongjae Choi](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KYT1GVVH6V865W8Z5B63CYZT.webp&w=64&h=64&f=webp&fit=cover&position=center)

[Dominik Picheta](https://blog.cloudflare.com/author/dominik/) and [Gyeongjae Choi](https://blog.cloudflare.com/author/gyeongjae-choi/)

August 2, 2026[Welcome to Agents Week](https://blog.cloudflare.com/agents-week-welcome/)

Agents Week explores how cloud infrastructure must evolve to serve autonomous agents rather than human browsers. Join us as we unpack the storage, execution, and security primitives needed for an agent-native web.

![Rita Kozlov](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW4775C0A7PYM3T9XKH4PH9J.png&w=64&h=64&f=webp&fit=cover&position=center)

[Rita Kozlov](https://blog.cloudflare.com/author/rita/)

July 31, 2026[An API for MoQ: provision your own isolated relays](https://blog.cloudflare.com/moq-relays/)

Last year we made every Cloudflare server a Media over QUIC (MoQ) relay. Now the new provisioning API lets you create your own isolated relay and control who can publish and who can only watch.

![Jacob Curtis](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KYWTSMKPNBYED7CGRDERCH1G.jpg&w=64&h=64&f=webp&fit=cover&position=center)![Manish Pandit](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KYVX7C6NS9762W5KTANHJ704.webp&w=64&h=64&f=webp&fit=cover&position=center)![Mike English](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW456AKXY6NZWXBX72F7RG6T.png&w=64&h=64&f=webp&fit=cover&position=center)

[Jacob Curtis](https://blog.cloudflare.com/author/jacob-curtis/), [Manish Pandit](https://blog.cloudflare.com/author/manish-pandit/), and [Mike English](https://blog.cloudflare.com/author/mike-english/)

July 30, 2026[Dogfooding at scale: migrating cdnjs to Cloudflare's Developer Platform](https://blog.cloudflare.com/cdnjs-dev-platform-migration/)

We moved cdnjs, serving 9 billion requests a day, entirely onto Cloudflare's Developer Platform. That means we're running one of the Internet's busiest open-source CDNs on our own building blocks, and we pushed Workflows and Workers limits higher for everyone.

![Simona Badoiu](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW49BY2VVWXQKZQA2SJ3N42J.jpeg&w=64&h=64&f=webp&fit=cover&position=center)

[Simona Badoiu](https://blog.cloudflare.com/author/simona-badoiu/)

July 29, 2026[Post-quantum authentication to origins is now supported](https://blog.cloudflare.com/post-quantum-authentication-to-origins/)

Cloudflare now supports post-quantum (PQ) authentication when connecting to customer origin servers via Authenticated Origin Pulls and Custom Origin Trust Store. This is the first step towards providing PQ authentication for all Cloudflare products.

![Luke Valenta](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW455BBR3DXDBC0E9512XF44.jpg&w=64&h=64&f=webp&fit=cover&position=center)![Kevin Guthrie](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW47VQ8K1T55ANDEX70V1EEQ.jpg&w=64&h=64&f=webp&fit=cover&position=center)

[Luke Valenta](https://blog.cloudflare.com/author/luke/) and [Kevin Guthrie](https://blog.cloudflare.com/author/kevin-guthrie/)

July 28, 2026[Natural disasters and government interference: examining Q2 2026's major Internet disruption events](https://blog.cloudflare.com/q2-2026-internet-disruption-summary/)

Cloudflare Radar tracked Internet disruptions driven by natural disasters, government-mandated shutdowns, and DNSSEC key rollovers over the last quarter. This post analyzes traffic telemetry to explain how these events impacted global connectivity.

![Lai Yi Ohlsen](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW49DGMNXAW2CZQQAX92W97V.png&w=64&h=64&f=webp&fit=cover&position=center)

[Lai Yi Ohlsen](https://blog.cloudflare.com/author/lai-yi-ohlsen/)

July 27, 2026[We're open-sourcing our privacy proxy CLI](https://blog.cloudflare.com/open-sourcing-our-privacy-proxy-cli/)

pvcli is a curl-like tool designed to simplify the testing of complex privacy protocols like OHTTP.

![Hannah Wang](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KYHF9MV2X49QE0SXTCSPH1N2.jpeg&w=64&h=64&f=webp&fit=cover&position=center)![Ben Yang](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW495TVKCM4J39JXG32VTCNG.jpg&w=64&h=64&f=webp&fit=cover&position=center)![Fisher Darling](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW463PVCFZWEEPCE2T84TW2R.jpg&w=64&h=64&f=webp&fit=cover&position=center)

[Hannah Wang](https://blog.cloudflare.com/author/hannah-wang/), [Ben Yang](https://blog.cloudflare.com/author/ben-yang/), and [Fisher Darling](https://blog.cloudflare.com/author/fisher/)

July 24, 2026[BGP ORIGIN attribute manipulation and its impact on the Internet](https://blog.cloudflare.com/bgp-origin-attribute/)

By doing in-depth testing, we found nearly 70% of BGP paths experience ORIGIN attribute rewrites by transit providers seeking traffic advantages. We examine the global impact of this practice and argue for deprecating ORIGIN in route selection.

![Iliana Xygkou](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KYAGC1W8ZPJBM3V4CJ2523N8.png&w=64&h=64&f=webp&fit=cover&position=center)![Bryton Herdes](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KYAJP648S3013NEXJ8RKZF1Y.jpg&w=64&h=64&f=webp&fit=cover&position=center)

[Iliana Xygkou](https://blog.cloudflare.com/author/iliana-xygkou/) and [Bryton Herdes](https://blog.cloudflare.com/author/bryton/)

July 23, 2026[Introducing Cache Response Rules](https://blog.cloudflare.com/introducing-cache-response-rules/)

Perhaps you've seen something that should sail out of cache get dragged back to the origin by a stray Set-Cookie or Cache-Control, headers that can be difficult to change on the origin itself. Cache Response Rules is the fix, applied at the right time.

![Alex Krivit](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW44Q0QQ4YF44E63CZ5V25R6.jpg&w=64&h=64&f=webp&fit=cover&position=center)![Anthony Turcios](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KY7YXQR9B85CTTBSQ2JN7BGD.png&w=64&h=64&f=webp&fit=cover&position=center)

[Alex Krivit](https://blog.cloudflare.com/author/alex/) and [Anthony Turcios](https://blog.cloudflare.com/author/anthony-turcios/)

July 21, 2026[How the 2026 World Cup affected Internet traffic](https://blog.cloudflare.com/2026-world-cup-internet-traffic/)

We analyzed global HTTP traffic to explore how kickoff times, streaming habits, and hydration breaks reshaped online activity worldwide. From late-night traffic surges to halftime browsing spikes, here is how the world connected during the global tournament. 

![Sabina Zejnilovic](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW49B114HP8HRQ7MA3FAFRSN.JPG&w=64&h=64&f=webp&fit=cover&position=center)![Francisco Contente](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KY2CF3W577J0ES3RM3DTCG49.webp&w=64&h=64&f=webp&fit=cover&position=center)![Lai Yi Ohlsen](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW49DGMNXAW2CZQQAX92W97V.png&w=64&h=64&f=webp&fit=cover&position=center)

[Sabina Zejnilovic](https://blog.cloudflare.com/author/sabina/), [Francisco Contente](https://blog.cloudflare.com/author/francisco-content/), and [Lai Yi Ohlsen](https://blog.cloudflare.com/author/lai-yi-ohlsen/)

July 20, 2026[Cloudflare Internal DNS is now generally available](https://blog.cloudflare.com/internal-dns/)

Cloudflare Internal DNS brings authoritative and recursive DNS for private networks to the same global network and control plane that runs Cloudflare's Zero Trust, networking, and public DNS.

![Enrique Somoza](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KY0CFW3DJ9J69XDCMWR1NNSG.jpg&w=64&h=64&f=webp&fit=cover&position=center)![Hannes Gerhart](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW46P53YA8A3G53W0H9FH0TT.jpg&w=64&h=64&f=webp&fit=cover&position=center)

[Enrique Somoza](https://blog.cloudflare.com/author/enrique-somoza/) and [Hannes Gerhart](https://blog.cloudflare.com/author/hannes/)

July 17, 2026[Cloudflare WAF protects WordPress applications from two high-severity vulnerabilities ](https://blog.cloudflare.com/wordpress-vulnerabilities/)

Cloudflare has deployed two WAF rules in response to high-severity vulnerabilities disclosed to us by the WordPress security team. The new rules protect all Cloudflare customers using affected WordPress versions, but customers should still update immediately to a patched release

![Daniele Molteni](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW464793D50Z8QJQK451PK2A.jpg&w=64&h=64&f=webp&fit=cover&position=center)![Ah-young Choi](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW499N66WDQ6E6CZPNZ7JJ9W.png&w=64&h=64&f=webp&fit=cover&position=center)![Georgie Yoxall](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW45HTH4Y5JB9BR4J2PDNJZG.jpeg&w=64&h=64&f=webp&fit=cover&position=center)![Kuber Nandwani](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KXRZS93GCE4CXP81WJ1TX25Y.webp&w=64&h=64&f=webp&fit=cover&position=center)![Vikram Grover](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KXRZQ9V87C8WK94DX4J9EPSD.webp&w=64&h=64&f=webp&fit=cover&position=center)

[Daniele Molteni](https://blog.cloudflare.com/author/daniele/), [Ah-young Choi](https://blog.cloudflare.com/author/ah-young-choi/), [Georgie Yoxall](https://blog.cloudflare.com/author/georgie/), [Kuber Nandwani](https://blog.cloudflare.com/author/kuber-nandwani/), and [Vikram Grover](https://blog.cloudflare.com/author/vikram-grover/)

July 14, 2026[A broken DNSSEC rollover took down .al. Now 1.1.1.1 tells you when validation is bypassed](https://blog.cloudflare.com/dnssec-nta-ede-33/)

When a failed DNSSEC key rollover took down the .al TLD, we deployed a Negative Trust Anchor to restore resolution. This time, though, clients didn't have to take our word for it: 1.1.1.1 returned EDE 33, a new DNS error code that signals directly in the response that DNSSEC validation was bypassed.

![Sebastiaan Neuteboom](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW48GH720TA5A2634QYMAXZR.png&w=64&h=64&f=webp&fit=cover&position=center)

[Sebastiaan Neuteboom](https://blog.cloudflare.com/author/sebastiaan-neuteboom/)

July 13, 2026[Introducing Precursor: detecting agentic behavior with continuous client-side signals](https://blog.cloudflare.com/introducing-precursor/)

Precursor, our new continuous behavioral validation engine for bot management, offers visibility into how humans and bots actually interact across the full user journey. By turning session-level behavior into bot detection signals, it identifies advanced automation with higher precision — while reducing friction for legitimate users.

![Marina Elmore](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW477HVM8X1SKDG8ADKQJ9T3.png&w=64&h=64&f=webp&fit=cover&position=center)![Benedikt Wolters](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW46T3SF8G510C5WQF4XNFC1.png&w=64&h=64&f=webp&fit=cover&position=center)

[Marina Elmore](https://blog.cloudflare.com/author/marina-elmore/) and [Benedikt Wolters](https://blog.cloudflare.com/author/benedikt/)

July 10, 2026[Improving Smart Tiered Cache for Public Cloud Regions](https://blog.cloudflare.com/smart-tiered-cache-for-public-clouds/)

Smart Tiered Cache allows for precise upper tier selection for origins hosted on AWS, GCP, Azure, and Oracle Cloud with customer-provided cloud region hints.

![Chenxi Zhang](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KXJM6F0PHPE4PQMNC0W1H579.webp&w=64&h=64&f=webp&fit=cover&position=center)

[Chenxi Zhang](https://blog.cloudflare.com/author/chenxi-zhang/)

Load more

Search is temporarily unavailable.

[Login opens in a new tab](https://dash.cloudflare.com/login)[Contact Sales opens in a new tab](https://www.cloudflare.com/resource/contact-enterprise-sales/)[Start Building opens in a new tab](https://dash.cloudflare.com/sign-up)

[ opens in a new tab](https://x.com/cloudflare)[ opens in a new tab](https://www.linkedin.com/company/cloudflare-inc-)[ opens in a new tab](https://blog.cloudflare.com/rss/)

All Categories

* [AI](https://blog.cloudflare.com/tag/ai/)
* [Developers](https://blog.cloudflare.com/tag/developers/)
* [Radar](https://blog.cloudflare.com/tag/cloudflare-radar/)
* [Product News](https://blog.cloudflare.com/tag/product-news/)
* [Security](https://blog.cloudflare.com/tag/security/)
* [Policy & Legal](https://blog.cloudflare.com/tag/policy/)
* [Zero Trust](https://blog.cloudflare.com/tag/zero-trust/)
* [Speed & Reliability](https://blog.cloudflare.com/tag/speed-and-reliability/)
* [Life at Cloudflare](https://blog.cloudflare.com/tag/life-at-cloudflare/)
* [Partners](https://blog.cloudflare.com/tag/partners/)

English

* Switch Site Language
* [English](https://blog.cloudflare.com/)
* [Deutsch](https://blog.cloudflare.com/de-de/)
* [Español](https://blog.cloudflare.com/es-es/)
* [Español (Latinoamérica)](https://blog.cloudflare.com/es-la/)
* [Français](https://blog.cloudflare.com/fr-fr/)
* [Italiano](https://blog.cloudflare.com/it-it/)
* [日本語](https://blog.cloudflare.com/ja-jp/)
* [한국어](https://blog.cloudflare.com/ko-kr/)
* [繁體中文](https://blog.cloudflare.com/zh-tw/)
* [简体中文](https://blog.cloudflare.com/zh-cn/)
* [Português](https://blog.cloudflare.com/pt-br/)
* [Русский](https://blog.cloudflare.com/ru-ru/)
* [Bahasa Indonesia](https://blog.cloudflare.com/id-id/)
* [ภาษาไทย](https://blog.cloudflare.com/th-th/)
* [Tiếng Việt](https://blog.cloudflare.com/vi-vn/)
* [Polski](https://blog.cloudflare.com/pl-pl/)
* [العربية](https://blog.cloudflare.com/ar-ar/)
* [עברית](https://blog.cloudflare.com/he-il/)
* [Svenska](https://blog.cloudflare.com/sv-se/)
* [Nederlands](https://blog.cloudflare.com/nl-nl/)
* [Türkçe](https://blog.cloudflare.com/tr-tr/)

LightDark

```json
{"@context":"https://schema.org","@type":"WebSite","name":"The Cloudflare Blog","url":"https://blog.cloudflare.com"}
```
