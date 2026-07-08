---
title: Cloudflare | Case Study | Gyazo
description: Gyazo optimizes uploads to their screenshot sharing platforms with Cloudflare Load Balancing.
image: https://www.cloudflare.com/preview.png
---

# Gyazo

> #### "  Cloudflare allows us to focus more on our own development. Sometimes we were spending half our engineering resources on maintaining our network. Plus, when things were slow everyone in the organization, like marketing and customer support, heard about it and it slowed them down too. Now everyone can focus on our users. " 

Gyazo optimizes uploads to their screenshot sharing platforms with Cloudflare Load Balancing.

[Gyazo](https://www.gyazo.com/), leveraging a cloud-based infrastructure, allows users to quickly take screenshots, and then easily share them through instantly created links. With millions of active users Gyazo is the largest, fastest screenshot and screen-GIF creation tool in the world.

**Gyazo's Challenge: Optimize Uploading for Global User Base**

Initially, all of Gyazo's servers were based in the United States and Gyazo used a CDN (Content Delivery Network) to distribute their content to users. Gyazo's users are roughly split 45% in Europe, 15% in Asia, and 40% in the United States, so this strategy worked well for users in the US, but users outside of US noticed extreme upload times. "That's because CDN's are great at distributing content," explained Isshu Rakusai, CEO of Nota, the maker of Gyazo, "but they aren't good for uploading content. Some of our users, in Australia for example, were seeing upload times over 30 seconds just to upload a small screenshot." That upload latency was due to the fact that content from the example Australia Gyazo user was being routed through South Asia, across the Pacific Ocean, to one of Gyazo's servers somewhere in the US and then back across the same route.

To combat this issue Gyazo built out its own network of upload edge servers around the world, but that lead to a further issue: These edge servers would experience spikes in traffic, and then have degraded performance when they were being used most.

**Gyazo's Solution: Global Load Balancing With Failover**

Gyazo saw Cloudflare's Early Access program for Load Balancing and thought it might provide the complementary functionality needed to perfect their proprietary solution. Cloudflare's Global Load Balancing now intelligently sends traffic from Gyazo's users to the nearest and healthiest upload server, which ensures that users are experiencing the fastest upload speeds possible and servers are not getting overloaded.

![gyazo-graphic](//images.ctfassets.net/slt3lc6tev37/6lIoA4gbzauWuMg4ckGoeM/a1b461fd0d79bdfabc691d60a1583c6c/gyazo-graphic.png)

Furthermore, by distributing traffic and maintaining server health, Load Balancing ensures Gyazo's users don't see the degraded performance that they were initially experiencing. Plus, with the Failover feature of Load Balancing, Gyazo's users are rapidly rerouted when a server goes down so they don't even notice if a server failed. "Failover was also very helpful for us," explained Rakusai, "With our previous DNS provider, we created a quick hack to do DNS based Failover, but this was complicated to set up, and changes took hours to fully propagate."

![Gyazo logo](https://images.ctfassets.net/slt3lc6tev37/QlaUSEuuE8KOmmkaUeqMM/10e795d458b2067a841eed15aa45298a/gyazo.png) 

Gyazo optimizes uploads to their screenshot sharing platforms with Cloudflare Load Balancing.

 Cloudflare Products 
* [  Load Balancing ](/application-services/products/load-balancing/)
* [  Content Delivery Network (CDN) ](/application-services/products/cdn/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)

 Products Used 

CDN Load Balancing WAF 

 Details 

 Industry 

High Technology 

 Region 

Asia-Pacific 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Cloudflare | Case Study | Gyazo","description":"Gyazo optimizes uploads to their screenshot sharing platforms with Cloudflare Load Balancing.","url":"https://www.cloudflare.com/case-studies/gyazo/","inLanguage":"en"}
```
