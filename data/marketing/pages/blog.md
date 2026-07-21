---
description: Technical deep dives, product updates, and insights from the teams that are helping to build a better Internet.
title: The Cloudflare Blog
image: https://blog.cloudflare.com/_emdash/api/media/file/01KXJHDG7CJT3B3133XAY31N4V.png
---

[Skip to content](#main-content)

July 21, 2026[How the 2026 World Cup affected Internet traffic](https://blog.cloudflare.com/2026-world-cup-internet-traffic/)

We analyzed global HTTP traffic to explore how kickoff times, streaming habits, and hydration breaks reshaped online activity worldwide. From late-night traffic surges to halftime browsing spikes, here is how the world connected during the global tournament.

![Sabina Zejnilovic](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW49B114HP8HRQ7MA3FAFRSN.JPG&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Francisco Contente](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KY2CF3W577J0ES3RM3DTCG49.webp&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Lai Yi Ohlsen](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW49DGMNXAW2CZQQAX92W97V.png&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Sabina Zejnilovic](https://blog.cloudflare.com/author/sabina/), [Francisco Contente](https://blog.cloudflare.com/author/francisco-content/), and [Lai Yi Ohlsen](https://blog.cloudflare.com/author/lai-yi-ohlsen/)

[![](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KY2S8WG5GK2XNGGD1S4H5H3B.png&w=1200&h=675&f=webp&fit=cover&position=center)](https://blog.cloudflare.com/2026-world-cup-internet-traffic/)

July 20, 2026[Cloudflare Internal DNS is now generally available](https://blog.cloudflare.com/internal-dns/)

Cloudflare Internal DNS brings authoritative and recursive DNS for private networks to the same global network and control plane that runs Cloudflare's Zero Trust, networking, and public DNS.

![Enrique Somoza](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KY0CFW3DJ9J69XDCMWR1NNSG.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Hannes Gerhart](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW46P53YA8A3G53W0H9FH0TT.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Enrique Somoza](https://blog.cloudflare.com/author/enrique-somoza/) and [Hannes Gerhart](https://blog.cloudflare.com/author/hannes/)

July 17, 2026[Cloudflare WAF protects WordPress applications from two high-severity vulnerabilities ](https://blog.cloudflare.com/wordpress-vulnerabilities/)

Cloudflare has deployed two WAF rules in response to high-severity vulnerabilities disclosed to us by the WordPress security team. The new rules protect all Cloudflare customers using affected WordPress versions, but customers should still update immediately to a patched release

![Daniele Molteni](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW464793D50Z8QJQK451PK2A.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Ah-young Choi](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW499N66WDQ6E6CZPNZ7JJ9W.png&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Georgie Yoxall](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW45HTH4Y5JB9BR4J2PDNJZG.jpeg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Kuber Nandwani](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KXRZS93GCE4CXP81WJ1TX25Y.webp&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Vikram Grover](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KXRZQ9V87C8WK94DX4J9EPSD.webp&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Daniele Molteni](https://blog.cloudflare.com/author/daniele/), [Ah-young Choi](https://blog.cloudflare.com/author/ah-young-choi/), [Georgie Yoxall](https://blog.cloudflare.com/author/georgie/), [Kuber Nandwani](https://blog.cloudflare.com/author/kuber-nandwani/), and [Vikram Grover](https://blog.cloudflare.com/author/vikram-grover/)

July 14, 2026[A broken DNSSEC rollover took down .al. Now 1.1.1.1 tells you when validation is bypassed](https://blog.cloudflare.com/dnssec-nta-ede-33/)

When a failed DNSSEC key rollover took down the .al TLD, we deployed a Negative Trust Anchor to restore resolution. This time, though, clients didn't have to take our word for it: 1.1.1.1 returned EDE 33, a new DNS error code that signals directly in the response that DNSSEC validation was bypassed.

![Sebastiaan Neuteboom](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW48GH720TA5A2634QYMAXZR.png&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Sebastiaan Neuteboom](https://blog.cloudflare.com/author/sebastiaan-neuteboom/)

July 13, 2026[Introducing Precursor: detecting agentic behavior with continuous client-side signals](https://blog.cloudflare.com/introducing-precursor/)

Precursor, our new continuous behavioral validation engine for bot management, offers visibility into how humans and bots actually interact across the full user journey. By turning session-level behavior into bot detection signals, it identifies advanced automation with higher precision — while reducing friction for legitimate users.

![Marina Elmore](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW477HVM8X1SKDG8ADKQJ9T3.png&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Benedikt Wolters](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW46T3SF8G510C5WQF4XNFC1.png&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Marina Elmore](https://blog.cloudflare.com/author/marina-elmore/) and [Benedikt Wolters](https://blog.cloudflare.com/author/benedikt/)

July 10, 2026[Improving Smart Tiered Cache for Public Cloud Regions](https://blog.cloudflare.com/smart-tiered-cache-for-public-clouds/)

Smart Tiered Cache allows for precise upper tier selection for origins hosted on AWS, GCP, Azure, and Oracle Cloud with customer-provided cloud region hints.

![Chenxi Zhang](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KXJM6F0PHPE4PQMNC0W1H579.webp&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Chenxi Zhang](https://blog.cloudflare.com/author/chenxi-zhang/)

July 9, 2026[Why we cannot wait for better post-quantum signature algorithms](https://blog.cloudflare.com/ml-dsa-will-have-to-do/)

NIST is advancing nine new post-quantum signature algorithms as potential candidates for future standardization. We look at all of them, and argue that while they are in the works and show great potential, we should use ML-DSA for now — the best one currently available.

![Bas Westerbaan](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW46N3BWJ6WS6790KRRJ4RWD.png&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Christopher Patton](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW471WT491ZC11M0S5HA34X3.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Bas Westerbaan](https://blog.cloudflare.com/author/bas/) and [Christopher Patton](https://blog.cloudflare.com/author/christopher-patton/)

July 8, 2026[Introducing Meerkat: an experiment in global consensus](https://blog.cloudflare.com/meerkat-introduction/)

Cloudflare Research is building a global consensus service called Meerkat that uses a new consensus algorithm called QuePaxa. We plan to use Meerkat to build a strongly consistent, fault-tolerant key-value store, and other applications.

![James Larisch](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW44C9J5HQA4MAD7AN1K285E.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![ Bob Halley](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KXJFYHRZYTBR06JDENDTQ12N.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![João Pedro Leite](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KWW2Q3HR5NWBDTW5N6DCXWKT.webp&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[James Larisch](https://blog.cloudflare.com/author/james-larisch/), [ Bob Halley](https://blog.cloudflare.com/author/bob-halley/), and [João Pedro Leite](https://blog.cloudflare.com/author/joao-pedro-leite/)

July 7, 2026[Cloudflare proudly joins the UK government's Cyber Resilience Pledge](https://blog.cloudflare.com/cloudflare-joins-uk-cyber-resilience-pledge/)

The pledge is a voluntary framework inviting organizations to commit to foundational cyber security governance, board-level accountability, and supply chain rigor. For over a decade, Cloudflare has pioneered the core pillars of this framework: democratizing security, leadership accountability, and radical transparency.

![Ling Wu](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW467KF763JFZEBQ3XWDEM6N.JPG&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Katie Visser](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KXJNTKKMP1NE3Z3NQENZHHMY.webp&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Ling Wu](https://blog.cloudflare.com/author/ling/) and [Katie Visser](https://blog.cloudflare.com/author/katie-visser/)

July 6, 2026[Your Worker can now have its own cache in front of it](https://blog.cloudflare.com/workers-cache/)

We are launching Workers Cache, a regionally tiered cache that sits directly in front of your Worker entrypoints. Infinitely composable, configured via standard HTTP headers

![Dan Lapid](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW49J56Y8QNB56HN77FKK7EM.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Connor Harwood](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW48PA3429BFXAR99YP0Z2ZX.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Dan Lapid](https://blog.cloudflare.com/author/dan-lapid/) and [Connor Harwood](https://blog.cloudflare.com/author/connor-harwood/)

July 1, 2026[Unmasking the crawls with Attribution Business Insights](https://blog.cloudflare.com/attribution-business-insights/)

Cloudflare's new Attribution Business Insights dashboard helps website owners understand crawler behavior, appetite, and potential value, fueling business-level conversations around crawl compensation.

![Jin-Hee Lee](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW46GG1XJCDV61NM8YJGK6YN.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Oliver Payne](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW46AC0A90AS7JQ9KWA8Q85Z.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Jin-Hee Lee](https://blog.cloudflare.com/author/jin-hee-lee/) and [Oliver Payne](https://blog.cloudflare.com/author/oliver-payne/)

July 1, 2026[Making AI search smarter](https://blog.cloudflare.com/making-ai-search-smarter/)

Search is how we find nearly everything on the web — creators, merchants, answers. AI is rewriting the rules, leaving creators caught between staying discoverable in an agentic era and getting paid for their work. Today we're launching two initiatives to help.

![Matthew Conroy](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KWW2PW1QZW47KMHA09RY62FC.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Matthew Conroy](https://blog.cloudflare.com/author/matthew-conroy/)

July 1, 2026[Your site, your rules: new AI traffic options for all customers](https://blog.cloudflare.com/content-independence-day-ai-options/)

For our second Content Independence Day, we're giving website owners finer options to manage AI traffic. Instead of a one-size-fits-all block, all customers can now easily distinguish and manage Search, Agent, and Training bots, alongside the new ability to protect ad-monetized pages.

![Jin-Hee Lee](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW46GG1XJCDV61NM8YJGK6YN.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Bryan Becker](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KWW2PPX6Y9F64M9HHDMGBP2Q.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Jin-Hee Lee](https://blog.cloudflare.com/author/jin-hee-lee/) and [Bryan Becker](https://blog.cloudflare.com/author/bryan-becker/)

July 1, 2026[Announcing the Monetization Gateway: charge for any resource behind Cloudflare via x402](https://blog.cloudflare.com/monetization-gateway/)

We're opening the waitlist for our Monetization Gateway, which will allow you to charge for any web page, dataset, API, or MCP tool behind Cloudflare. The charges will settle in stablecoins over the x402 open protocol, with no payments stack of your own to build.

![Rohin Lohe](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW4732TDPVKGF30GJC5C5KJV.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Justin Ridgely](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KWW2PGKA3M43DHXBD4JK7ZH5.webp&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Will Papper](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KWW2PWAJT5VPPRZ9Y73A1FEB.webp&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Rohin Lohe](https://blog.cloudflare.com/author/rohin/), [Justin Ridgely](https://blog.cloudflare.com/author/justin-ridgely/), and [Will Papper](https://blog.cloudflare.com/author/will-papper/)

July 1, 2026[Content Independence Day, one year on: building the business model for the agentic Internet](https://blog.cloudflare.com/agentic-internet-bot-report/)

One year after declaring Content Independence Day, a dynamic market for monetized content has officially emerged. In this report, we examine how the rise of autonomous AI agents is upending traditional search referrals and detail the new infrastructure required to support a sustainable web economy. 

![Arielle Weiss](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KWW2Q27P8MJVNRWP3T72QCMX.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Zach Albertson](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW9WMPKP5X812DFFWSFK61EG.png&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Emily Lanfear](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KWW2PF8NNKWVPXS9KJSP1PP9.png&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Arielle Weiss](https://blog.cloudflare.com/author/arielle-weiss/), [Zach Albertson](https://blog.cloudflare.com/author/zach-albertson/), and [Emily Lanfear](https://blog.cloudflare.com/author/emily-lanfear/)

June 25, 2026[How we built saga rollbacks for Cloudflare Workflows](https://blog.cloudflare.com/rollbacks-for-workflows/)

Cloudflare Workflows, our durable execution engine for multi-step applications, now supports saga-style rollbacks, allowing developers to specify a compensating action for each step.do(). 

![Vaishnav Kavitha](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW9WMMZ8JJQ1SE783SASV4PJ.jpeg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Mia Malden](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW4559TC07A12MQHAEK8YM1R.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![André Venceslau](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW45TZTSTWQ6JMKEC8GX38NE.png&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Vaishnav Kavitha](https://blog.cloudflare.com/author/vaishnav-kavitha/), [Mia Malden](https://blog.cloudflare.com/author/mia/), and [André Venceslau](https://blog.cloudflare.com/author/andre-venceslau/)

June 24, 2026[Unlocking the Cloudflare app ecosystem with OAuth for all](https://blog.cloudflare.com/oauth-for-all/)

Self-Managed OAuth is now available to all developers on Cloudflare. Here's how we executed a zero-downtime migration of our core OAuth engine to make it happen.

![Sam Cabell](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW9WMQHZ06NRJ1P977MAN3W6.webp&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Mike Escalante](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW49ABPBC57VY77RQCNPXWNP.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Adam Bouhmad](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW46V48CPK64MWTYNSCVTA3E.webp&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Nick Comer](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW9WMBJG5ZDTS3AWWAWA2DVW.webp&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Sam Cabell](https://blog.cloudflare.com/author/sam-cabell/), [Mike Escalante](https://blog.cloudflare.com/author/mike-escalante/), [Adam Bouhmad](https://blog.cloudflare.com/author/adam-bouhmad/), and [Nick Comer](https://blog.cloudflare.com/author/nick-comer/)

June 23, 2026[The White House's post-quantum executive order is an important milestone. It's time to get to work](https://blog.cloudflare.com/post-quantum-eo-2026/)

The new executive order sets a 2030 migration deadline and establishes a powerful foundation for post-quantum resilience. We look at what it gets right, where it can go further, and our migration playbook for government and industry.

![Sharon Goldberg](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW488S3YN4RV24QXC7PM57EC.png&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Vincent Voci](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW48RVKNDARQNRQJA3MNV87H.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Sharon Goldberg](https://blog.cloudflare.com/author/goldbe/) and [Vincent Voci](https://blog.cloudflare.com/author/vincent-voci/)

June 22, 2026[How we found a bug in the hyper HTTP library](https://blog.cloudflare.com/hyper-bug/)

By rearchitecting the Images binding, we accidentally uncovered a bug that existed in the open-source hyper library across multiple major versions.

![Deanna Lam](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW47KFXCHBMAHQ4B20STFNCC.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Diretnan Domnan](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW47Q4B9ZYMXFBZ5X354KFW2.jpg&w=32&h=32&q=60&f=webp&fit=cover&position=center)![Matt Lewis](https://blog.cloudflare.com/_image?href=https%3A%2F%2Fblog.cloudflare.com%2F_emdash%2Fapi%2Fmedia%2Ffile%2F01KW9WMRANK371K7W3Y3CXQT0M.webp&w=32&h=32&q=60&f=webp&fit=cover&position=center)

[Deanna Lam](https://blog.cloudflare.com/author/deanna/), [Diretnan Domnan](https://blog.cloudflare.com/author/diretnan-domnan/), and [Matt Lewis](https://blog.cloudflare.com/author/matt-lewis-2/)

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
