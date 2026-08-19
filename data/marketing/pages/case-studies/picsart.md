---
title: Picsart
description: Picsart, a global AI-powered creative platform, uses Cloudflare to deliver faster, safer creative experiences while scaling security and performance worldwide.
image: https://www.cloudflare.com/preview.png
---

# Picsart

> #### "  Cloudflare blocks about 3 billion malicious requests per month, which means faster experiences worldwide, lower operational overhead, and fewer after-hours incidents. " 

## Picsart scales global creative experiences with Cloudflare

Picsart's mission is to empower the creator in everyone, everywhere. The software company's digital creation platform serves a large global user base, as well as businesses that rely on fast, secure editing and publishing tools. With ambitions to become the world's largest AI creative platform, Picsart prioritizes performance, security, and developer velocity as they scale to hundreds of billions of requests each month.

### Challenge: Mitigating security threats while optimizing service performance

Picsart has grown rapidly since the company's founding in 2011, and faced higher standards when protecting their application and infrastructure. Specifically, they needed to stop injection attacks, distributed denial-of-service (DDoS) events, and malicious bots — and weather sudden traffic spikes — without slowing down users or overwhelming on-call teams.

Picsart also needed a better way to manage internal access, as the legacy VPN caused slow user experiences, latency, and operational complexity, while lacking the scalable, fine-grained access controls required as the company expanded globally.

To address both challenges, Picsart turned to Cloudflare's [connectivity cloud](https://www.cloudflare.com/connectivity-cloud/): a unified platform of security, connectivity, and developer services running on a programmable global network.

"We chose a single globally distributed platform for security, performance, and developer velocity so we can enforce consistent policy everywhere and keep teams focused," says Gevorg Khachatryan, who leads site reliability engineering and incident management at Picsart.

### Protecting applications with WAF, DDoS, and rate limiting

Picsart uses the [Cloudflare Web Application Firewall (WAF)](https://www.cloudflare.com/application-services/products/waf/), [DDoS protection](https://www.cloudflare.com/ddos/), and [Rate Limiting](https://www.cloudflare.com/application-services/products/rate-limiting/) to defend applications at scale. Managed, machine learning–driven protection absorbs attacks upstream — including traffic that could saturate last-mile links — preventing them from reaching Picsart's infrastructure.

This approach keeps PicArt services available for legitimate users. According to Khachatryan:

"Cloudflare blocks about 3 billion malicious requests per month, which means faster experiences worldwide, lower operational overhead, and fewer after-hours incidents."

Additionally, [bot management services](https://www.cloudflare.com/application-services/products/bot-management/) help protect monetized APIs by fronting them with Cloudflare WAF, DDoS, and rate limiting to absorb traffic spikes and malicious patterns at the edge before they reach the origin, which helped Picsart avoid major availability issues and on-call escalations as they scaled.

These services enable Picsart to automatically curb unwanted bot activity like scraping and fake signups across their web and mobile apps. This is primarily managed through content delivery—caching static assets, media, and preview content via Cloudflare CDN—while also protecting select public-facing endpoints to ensure a smooth product experience.

### Boosting performance using globally distributed services

Picsart uses [Cloudflare content delivery network (CDN)](https://www.cloudflare.com/cdn/) services to deliver a responsive experience to users. By employing content caching, static assets and previews are delivered closer to users, making creative workflows feel instant across regions.

"Each month we handle about 120 billion requests," says Khachatryan. "Around 85% are served from cache, delivering roughly five petabytes of content, about four petabytes straight from Cloudflare's edge."

By proxying traffic through Cloudflare, Picsart also keeps their public IP addresses shielded. This approach simplifies infrastructure changes and adds another layer of protection.

Picsart has further enhanced the performance of one of their most critical services by moving from a centralized architecture to globally distributed services built on Cloudflare. In particular, [Cloudflare Workers](https://www.cloudflare.com/developer-platform/products/workers/) and [Workers KV](https://www.cloudflare.com/developer-platform/products/workers-kv/) provide low-latency compute and a key-value store for applications running at the edge.

Running serverless compute at the edge allows Picsart to speed up developer velocity by automatically managing the infrastructure so engineers can concentrate on shipping code. 

"We roll out updates in hours, not weeks, with no servers to manage," explains Khachatryan. 

For example, Cloudflare Workers powers Picsart's A/B experimentation platform at the edge, accelerating iteration and learning.

### Simplifying access with Cloudflare Access

Picsart modernized their remote access approach by replacing their legacy VPN setup of multiple regional gateways with [Cloudflare Access](https://www.cloudflare.com/zero-trust/products/access/), a [Zero Trust Network Access (ZTNA) solution](https://www.cloudflare.com/learning/access-management/what-is-ztna/).

Cloudflare authenticates every employee request to corporate resources based on identity and context, strengthening Picsart's security posture. This solution also streamlines the access experience for end users compared to the latency-prone VPNs.

### What's next: Automating more at the edge and extending zero trust to move faster

Looking ahead, Picsart plans to unify policy management, expand automation using Cloudflare Workers, and extend zero trust across more workflows. By continuing to build on a single Cloudflare platform, Picsart aims to further reduce complexity and deliver creative experiences without interruption.

"Cloudflare helps us deliver a faster, safer, creative experience to millions of users so they can focus on creating, not waiting," says Khachatryan. "We block the bad, accelerate the good, and ship faster."

![Picsart logo](https://images.ctfassets.net/slt3lc6tev37/318WdQOx7cCeO9HEnMC0lG/2fe9b9d8d94e9b4ac34ea5df97a206d3/Picsart_Logo_Purple.png) 

Picsart, a global AI-powered creative platform, uses Cloudflare to deliver faster, safer creative experiences while scaling security and performance worldwide.

 Cloudflare Products 
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  DDoS Mitigation ](/ddos/)
* [  Rate Limiting ](/products/rate-limiting/)
* [  Rate Limiting ](/products/rate-limiting/)
* [  Bot Management ](/products/bot-management/)
* [  Workers ](/products/workers/)
* [  Workers KV ](/products/kv/)

 Details 

 Industry 

Media & Entertainment 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Picsart","description":"Picsart, a global AI-powered creative platform, uses Cloudflare to deliver faster, safer creative experiences while scaling security and performance worldwide.","url":"https://www.cloudflare.com/case-studies/picsart/","inLanguage":"en"}
```
