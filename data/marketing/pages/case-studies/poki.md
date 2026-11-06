---
title: Poki &amp; Cloudflare | Customer Story
description: Poki uses Cloudflare's edge to run global multiplayer for 100M+ users from one data center.
image: https://cf-assets.www.cloudflare.com/slt3lc6tev37/wr0dVwwi7CTvAbvCISIau/be02287efb769329108ff196079f6aa3/poki-meta-image.png
---

# Poki

> #### "  With Cloudflare Workers, our backend engineers can adopt a 'build it, run it' mentality. It completely removes the complexity of scalability. " 

## How Poki runs live, global multiplayer gaming from a single data center with Cloudflare

330 locations. 100 million players. Real-time multiplayer across every time zone. One data center. Poki uses Cloudflare's edge to run live, cross-region multiplayer and market-by-market personalization — turning one country like the US into dozens of local experiences — without owning a single regional server.

Running a global web gaming platform from a single data center in the Netherlands sounds like a bad idea. And for most companies at this scale, it would be. From Amsterdam, Poki serves more than 1 billion monthly gameplays across every continent, with the United States among its biggest markets. No downloads, no installs, no waiting, and, increasingly, no single-player limit: players in different states, time zones, and countries now drop into the same match in real time. The infrastructure making that experience possible is Cloudflare.

### Challenge: Scaling a global platform

The obvious solution for large platforms like Poki looking to solve the distance problem is to simply build data centers everywhere. This approach works, but it comes with a lot of unwanted overhead. Instead of building product, engineering costs and time are spent managing complex infrastructure. 

"Theoretically, we could have done this by opening a data center in the US, Latin America, Europe, or Asia, which would come with overhead," says [Casper van Wezel](http://linkedin.com/in/caspervw/), Poki's CTO. "Now, we can still stick to a single data center and fan-out through the edge compute of Cloudflare."

That single data center in the Netherlands still serves as Poki's static HTML base. But the moment a user anywhere in the world requests a page, Cloudflare Workers intercept that response and patch in localized, personalized content before it ever reaches the player. The result is a \~99% cache ratio globally, with game assets and localized elements delivered directly from more than 330 distributed network locations. Origin load is virtually eliminated.

### From terabytes to petabytes

Poki's traffic has scaled from terabyte to petabyte level. That same edge infrastructure that handles content delivery now also powers edge compute. This means that the platform's traffic growth hasn't meant a growth in engineering complexity.

A big part of that is how Poki deploys. Using Cloudflare Workers alongside a CI/CD pipeline built on GitHub Actions, Wrangler, and Terraform, Poki manages its entire platform under one unified domain with a fully automated, infrastructure-as-code model. Compare that to their previous provider, which required a three-month wait for SSL certificates.

"With Cloudflare Workers, our backend engineers can adopt a 'build it, run it' mentality," van Wezel explains. "It completely removes the complexity of scalability. You deploy your code once, it pushes out to 330 locations, and it just works."

### Personalization and experimentation at the edge

It may be functional, but it is not a great user experience to serve the same static page to a player in Jakarta and a player in New York. And the gap is just as real inside a single country. A player in New York, one in Chicago, and one in Los Angeles are in three different time zones, three different peaks, and three different local contexts. Poki uses Cloudflare Workers KV and D1 to deliver region-aware, personalized content at the edge, without adding the extra loading time from latency or round-trips. The same logic applies for experimentation.

"A/B testing is a simple thing," van Wezel says. "When a first-time user lands on the site, the Worker decides right at the edge whether to route them to variant A, B, or C. The Worker can hard-cache those variants and just route traffic through the network, instead of everything hitting our data center."

That routing can differ by region. An experiment can run differently in Texas than in California, without a single request reaching Amsterdam.

### Multiplayer and safe chat

As Poki has expanded [multiplayer gaming](https://poki.com/en/multiplayer), keeping gameplay fast and player interactions safe has become just as important as keeping the platform online.

For multiplayer games, Poki built a communication layer using Cloudflare Realtime to handle the communication between players in real time, across the world, without needing to build or run their own supporting infrastructure. The enemy is latency. Every extra hop between two players is felt in the game. Poki's netlib connects players peer-to-peer over WebRTC datachannels, brokered by Poki's own signaling service, and relays through Cloudflare's TURN service when a direct link can't be made. What it unlocks is concrete. [Battle Blast](https://poki.com/en/g/battle-blast), a browser-native arena shooter from No Pressure Studios, holds a live match together with seamless tab-switching and a dynamic-difficulty AI that masks a competitor dropping out. A few years ago that would have needed the studio's own global servers. 

When introducing safe chat, Poki built a moderation layer using Cloudflare Vectorize that filters player messages as they happen, moderating player interactions in real time at the edge. This catches anything that shouldn't be there before it ever reaches another player, all without a significant backend investment.

"Cloudflare helps us move faster because we can build features on top of Cloudflare Workers, Cloudflare D1, and Cloudflare Vectorize without immediately having to think about the scalability of our solutions," van Wezel says.

The result: a platform that has supported more than 100 million monthly active users with zero downtime, maintaining stability and seamless player performance through every traffic spike.

### What's next

Poki sees Cloudflare as a long-term partner as it continues to push the boundaries of what instant play can mean, with plans to deepen D1 regional personalization, and use edge-compute to get gaming experiences even closer to the players loading them.

With Cloudflare's rapidly evolving developer platform, Poki expects to ship features faster, strengthen multiplayer experiences, and keep doing what they've always done: letting the world play.

![Poki logo](https://cf-assets.www.cloudflare.com/slt3lc6tev37/3ovkLCQAKgdI3uBeO0Rvbw/42050ece62ce23ed4f19c8ddf5dba411/logo_Poki.svg) 

Poki uses Cloudflare's edge to run global multiplayer for 100M+ users from one data center.

 Cloudflare Products 
* [  Workers ](https://workers.cloudflare.com/)
* [  Workers KV ](https://www.cloudflare.com/developer-platform/products/workers-kv/)
* [  D1 ](https://www.cloudflare.com/products/d1/)
* [  Realtime ](https://www.cloudflare.com/products/realtime/)
* [  TURN service ](https://www.cloudflare.com/products/turn-sfu/)
* [  Vectorize ](https://www.cloudflare.com/products/vectorize/)
* [  CDN ](https://www.cloudflare.com/application-services/products/cdn/)
* [  SSL ](https://www.cloudflare.com/application-services/products/ssl/)
* [  Wrangler ](https://developers.cloudflare.com/workers/wrangler/)

 Details 

 Industry 

Gaming 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Poki & Cloudflare | Customer Story","description":"Poki uses Cloudflare's edge to run global multiplayer for 100M+ users from one data center.","url":"https://cf-assets.www.cloudflare.com/slt3lc6tev37/5gEjMQLB2G2eBQb3TpuZRX/433f003c00be70985561faa69b3b2f9c/new-harbor-meta-image.jpg","inLanguage":"en"}
```
