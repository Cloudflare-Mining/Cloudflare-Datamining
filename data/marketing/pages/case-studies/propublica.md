---
title: ProPublica
description: ProPublica uses Cloudflare Workers for a webpage caching system that helps guarantee availability and avoids cache stampedes
image: https://www.cloudflare.com/preview.png
---

# ProPublica

> #### "  With Workers, we now have the guarantee that our origin would be protected from high traffic volumes. Our readers depend on us, and Workers has been the solidly reliable platform we needed to deliver for them. " 

## **Cloudflare ensures that ProPublica's site scales and remains available and performant during sudden traffic surges**

[ProPublica](https://www.propublica.org "ProPublica") is a non-profit, independent newsroom with a focus on investigative journalism. It has a moral focus targeted at exposing abuse of power and betrayal of public trust. To ensure their website is at its best for its readers, ProPublica has partnered with [Happy Cog](https://www.happycog.com/), a full-service interactive agency. Happy Cog designs, builds, and markets websites, mobile apps, and [ecommerce platforms](https://www.cloudflare.com/retail/) for organizations around the world.

### **Challenge: High-visibility stories could cause ProPublica's site to experience downtime**

As a newsroom with a focus on investigative journalism with moral force, ProPublica's stories occasionally capture sudden, national attention. When this occurs, ProPublica's website is flooded with requests from users. Keeping such important stories online and available for readers is critical to ProPublica's mission and goals. 

This sudden increase in traffic can pose challenges for any webpage, but the scale of the challenge increased after ProPublica started to use a new CMS that allowed for a better experience both for members of their production team, and for their designers and developers. However, the resulting webpages — articles — were more complex, meaning that page rendering was more taxing on servers. Although its origin servers have been long situated behind traditional caching systems, huge traffic spikes could tax the site to the point of making it crash. Overall, the team wanted to keep their site dynamic, while still maintaining the performance and stability offered by a static site generator and benefiting from the simplicity offered by their content management system (CMS).

To avoid such crashes, ProPublica needed to add additional front-end origin capacity, which added complexity and expense. Additionally, cache stampedes could cause cascading failures of pages and servers, resulting in the whole site becoming unavailable.

### **ProPublica and Happy Cog use Cloudflare Workers to build a unique caching system**

In partnership with Happy Cog, ProPublica developed the 'Baconator,' a new model for serving web content. According to Matt Weinberg, Co-founder and President of Development and Technology at Happy Cog, the model's purpose was "Keeping the site up and available. ProPublica was okay with stories being five minutes out of date if it meant that they were always online."

To implement the Baconator, ProPublica and Happy Cog turned to Cloudflare Workers. Workers enables serverless applications to be deployed at the edge of the Cloudflare network, supported by Workers KV, a globally distributed, low latency key value store. According to Weinberg, "ProPublica was convinced about the flexibility of Cloudflare's edge network because of Workers. It was the perfect fit."

In the Baconator, Workers and Workers KV act as a reverse proxy for ProPublica's primary webserver. When a story is created or updated, a new task is added to a queue. When a Queue Worker processes this task, it requests a copy of the page's HTML from the origin server and stores it in Workers KV. When a reader requests a page, they receive the cached copy from Workers KV. If the age of the cached page exceeds a threshold, the cache is still served, but a background queue item is created to refresh the cached page from the origin.

![Baconator](//images.ctfassets.net/slt3lc6tev37/6LzX66vLJmsaOfz0YCIEDD/b2a8cd7675b21fc90421ca203c175018/Screen_Shot_2021-05-19_at_6.13.33_PM.png)

This approach provides a number of benefits to ProPublica. One is that user traffic never touches ProPublica's origin servers, but instead interacts with Cloudflare's high-capacity global edge network. This means high traffic volumes have little impact on [site performance](https://www.cloudflare.com/retail/). Since implementing Workers for caching ProPublica's time-to-first-byte (TTFB) is 50% faster than before. 

The Baconator also supports ProPublica's business continuity plan. With Workers, most of the ProPublica site will remain available even if the newsroom's origin servers are down. According to Weinberg, "Workers works really well. We cache everything to Workers KV, and if our origin has problems, we could just serve older content from workers KV." This also simplifies maintenance and upgrades to the site because ProPublic and Happy Cog can make changes without disrupting availability.

According to Frank Sharpe, Product Developer at ProPublica, "We appreciate the degree of control these tools have given us. Performant and malleable, Workers has improved our platform stability while giving us enormous flexibility."

Weinberg is also happy about the visibility and tooling Workers makes available. He says, "When your caching system is Workers, you get all the tooling that Workers gives you, which means you get access to Wrangler and Wrangler logs. It's much easier to reason about that kind of layer than it is about a lot of other caching systems, which are kind of opaque."

### **Cloudflare Workers helps guarantee that ProPublica's site is always up**

For ProPublica, the accessibility of its website is a primary priority. Using Cloudflare Workers, ProPublica and Happy Cog designed and built a system that promised constant website availability even in the face of sudden traffic surges. According to Sharpe, "With Workers, we now have the guarantee that our origin would be protected from high traffic volumes. Our readers depend on us, and Workers has been the solidly reliable platform we needed to deliver for them." 

![ProPublica logo](https://images.ctfassets.net/slt3lc6tev37/1s9if3EyH8f1ig9BQKy570/193b79acf5f6c0cfb0a9685e023fef7c/logo_propublica.svg) 

ProPublica uses Cloudflare Workers for a webpage caching system that helps guarantee availability and avoids cache stampedes

 Cloudflare Products 
* [  Workers ](https://workers.cloudflare.com/)

 Products Used 

Workers 

 Details 

 Industry 

Media & Entertainment 

 Region 

North America 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"ProPublica","description":"ProPublica uses Cloudflare Workers for a webpage caching system that helps guarantee availability and avoids cache stampedes","url":"https://www.cloudflare.com/case-studies/propublica/","inLanguage":"en"}
```
