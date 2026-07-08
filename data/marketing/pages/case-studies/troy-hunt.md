---
title: HaveIBeenPwned? | Case study
description: Troy Hunt uses Cloudflare to protect his website and API to help people stay safe and secure online.
image: https://www.cloudflare.com/preview.png
---

# HaveIBeenPwned? 

> #### "  Rate Limiting ensures I can keep running my service reliably, cost effectively and ethically. " 

Troy Hunt uses Cloudflare to protect his website and [API](https://www.cloudflare.com/application-services/solutions/api-security/) to help people stay safe and secure online.

Troy Hunt is a Microsoft Regional Director and an independent Internet security researcher. He is well known for both his Internet security blog [www.troyhunt.com](https://www.troyhunt.com/), and his [HaveIBeenPwned (HIBP)](https://www.haveibeenpwned.com/) service, which aggregates data breaches and helps people establish if they've been impacted by malicious activity on the web. Hunt's goal is to help as many people as possible with his knowledge and service.

**Troy Hunt's Challenge: Helping People Without Enabling the Bad Guys**

Helping as many people as possible can be difficult when resources are limited. A major challenge for Hunt is managing rapid spikes in traffic to his websites and API running on Microsoft's Azure infrastructure. These spikes cause performance issues, increase bandwidth costs, and mean down time and loss of confidence for a service where trust and integrity are everything. When data breaches at large institutions get highly publicized (like the recent Ashley Madison and Dropbox breaches) Hunt's HIBP service sees huge spikes in traffic. According to Hunt these traffic spikes "max out the CPUs and degrade performance until more instances are put on. Autoscale, Azure's automatic load handling, works beautifully when traffic ramps up steadily, but I'm going to take a performance hit when traffic suddenly goes off the charts." Not only do these traffic spikes mean performance loss, but also because autoscale adapts to load on demand the spikes act as direct levers attached to Hunt's wallet.

Additionally, Hunt was worried about some actors maliciously using HIBP's API. While the API was created to help people find out if they've been impacted by a data breach, Hunt explained that "recently there have been various indicators that the API has been used in ways that aren't in keeping with the spirit of why it was created. . . It's not something that I want to see continuing."

Hunt was thus looking for a solution to maintain web performance and mitigate costs in the wake of traffic spikes and prevent his API from being abused.

**Troy Hunt's Solution: Rate Limiting Malicious Actors**

Troy Hunt found a single solution for his multiple requirements in Cloudflare's Rate Limiting service. Rate Limiting helps Hunt manage traffic spikes by allowing him to set a limit on the number of requests from individual IP addresses that respectively hit his websites and API over a given period of time. Rate limiting prevents spikes in traffic from reducing performance because each unique user is limited to a certain number of requests. Hunt has set this limit such that normal users don't see any change in service, while people abusing Hunt's websites and API get throttled ensuring that his API stays high performing and reliable for legitimate traffic, while abusers are prevented and blocked. Hunt applauded, **"You have made the entire site more stable, faster for legitimate users, and more secure while reducing my costs."**

![HaveIBeenPwned?  logo](https://images.ctfassets.net/slt3lc6tev37/3JbqHDe6SseiYamYwqoiQC/ba7a66d29089e31b923469122cea6c44/hibp.png) 

Troy Hunt uses Cloudflare to protect his website and API to help people stay safe and secure online.

 Cloudflare Products 
* [  Rate Limiting ](/application-services/products/rate-limiting/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  Content Delivery Network (CDN) ](/application-services/products/cdn/)

 Products Used 

Rate Limiting WAF CDN 

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
{"@context":"https://schema.org","@type":"WebPage","name":"HaveIBeenPwned? | Case study","description":"Troy Hunt uses Cloudflare to protect his website and API to help people stay safe and secure online.","url":"https://www.cloudflare.com/case-studies/troy-hunt/","inLanguage":"en"}
```
