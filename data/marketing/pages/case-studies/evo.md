---
title: evo | Cloudflare
description: evo secures its site against DDoS and malicious requests, and reduces complexity by consolidating performance, security, and serverless solutions with a single vendor, Cloudflare.
image: https://www.cloudflare.com/preview.png
---

# evo 

> #### "  Thanks to Cloudflare Workers, we no longer have to pay to run a special service just to maintain file names. We don't have to maintain it, worry about it going down, or worry about it becoming a vulnerability. Eliminating it reduced our potential cyberattack surface by simplifying our service topology. " 

## evo uses Cloudflare to reduce internal complexity, enhance security, and improve performance

Based in Seattle, Washington, evo is an omni-channel retailer specializing in outdoor sports and lifestyle gear, including skiing, snowboarding, mountain biking, surfing, and camping gear. Its online store is responsible for about 85% of its sales, and evo's two biggest selling days of the year are Black Friday and Cyber Monday.

Like all [online retailers](https://www.cloudflare.com/retail/), evo has to deal with automated traffic, nefarious crawlers, malicious bots, and the threat of DDoS and other attacks. Unlike legitimate customer traffic, which is stable and predictable, malicious requests often come in giant spikes, which can degrade site performance.

### **Challenge: Protect against DDoS and malicious requests, and reduce complexity by consolidating performance & security solutions**

As evo's business has grown, so too has their risk of DDoS and other forms of cyber attack. At key times of the year, an attack leading to downtime could prove extremely costly. This risk concerned Ben Plehal, Director of Technology. "When sales are at their holiday peak and every minute of website uptime is critical, we simply can't afford to have an attack disrupt our ability to serve our customers."

evo was also unsatisfied with its content delivery network (CDN). evo's first CDN partner was Akamai, which became expensive as they scaled. The company then switched to Verizon Edgecast. However, Verizon's CDN was difficult to configure, and Verizon didn't offer other services evo needed.

"Verizon simply offered a CDN - WAF, DDoS protection, and DNS services were all expensive add-ons or integrations with other vendors," Plehal recalled. "We were using a separate managed DNS service. It wasn't expensive, but it was yet another bill and another set of configurations for us to manage. Complexity is my team's enemy. We wanted one vendor to provide us with all of the security and performance solutions we needed."

Cloudflare turned out to be that vendor. evo signed up for Cloudflare's security and performance product suites, which includes Cloudflare WAF, DDoS, CDN, Rate Limiting, DNS, and Argo Smart Routing, as well as Workers, Cloudflare's serverless computing solution.

### **Cloudflare WAF blocks malicious requests and lets evo's team isolate problematic pockets of traffic**

After implementing WAF with all features enabled in test mode, evo pushed it live and has been happy with it ever since. Most of the time, his team uses the built-in rules, and Plehal reports that it's easy to configure custom rules for specific use cases when needed.

"My team no longer has to work to stay ahead of bad actors, because Cloudflare protects our site from DDoS and malicious requests," Plehal says. "Cloudflare's WAF blocks an average of 80,000 to 90,000 malicious requests per week. My team and I sleep much better now, especially during the holiday shopping season." 

Plehal likes the insight he gets from the WAF analytics and the log simulate feature, which allow his team to identify potentially problematic traffic. Recently, when an evo engineer noticed a big spike in TCP incoming requests, the team quickly created a log simulate rule within the WAF, which enabled them to identify the traffic as originating from one of its own vendors. 

"The vendor was aggressively spidering our pages in the wake of an email blast to see if our products were in stock," Plehal explains. "Their intentions weren't malicious, but they were making 150 requests each second to our product details pages, which caused performance degradation. Thanks to the WAF analytics and log simulate rule, we discerned what was going on, which allowed us to work with the vendor and find an alternative way for them to confirm our products were in stock."

With the WAF taking care of traffic spikes from malicious requests, evo focuses on ensuring its site can scale to handle legitimate traffic. "Because we don't need to accommodate giant spikes of automated traffic, we can service the same amount of human traffic with fewer resources. For example, if we had 10 web service instances before deploying Cloudflare WAF, we might get by with only 6 or 8 now."

### **Cloudflare Workers enables evo to retire a legacy web service, reducing complexity and minimizing their potential attack surface**

evo had built a legacy web service to perform file-name mapping for millions of product images. The service took incoming requests from evo.com and mapped them to the image blob files in cloud storage. When evo decided to migrate to Microsoft Azure, they were looking at having to redesign this service and build it out in Azure, a complicated and time-consuming process.

Instead, evo decided to use Cloudflare Workers to perform this function and pass image requests straight from the edge to Azure Blob Storage, without the requests hitting evo's servers. "Thanks to Cloudflare Workers, we no longer have to maintain a special service just to map legacy file names," Plehal says. "We don't have to pay to run it, worry about it going down, or worry about it becoming a vulnerability. Eliminating it reduced our potential cyberattack surface by simplifying our service topology."

Plehal is seeking out additional use cases for Workers. "Workers holds great promise in the way it could simplify tasks for our servers. Because it enables us to perform compute operations at the network edge, we're investigating whether we can use it to handle more logic and reduce load on our origin services."

### **Cloudflare simplifies internal processes, and Argo Smart Routing dramatically improves page load times**

Plehal reports that his team was thrilled when he demonstrated Cloudflare's dashboard. "Our previous CDN dashboards were notoriously difficult to use. Not only is Cloudflare's dashboard much simpler, but we now have one place to manage and view analytics for our DNS, performance suite, and security suite."

[Improving page load times is always](https://www.cloudflare.com/retail/) a focus for retailers like evo, which uses many media- and image-rich pages. Argo Smart Routing, which finds the fastest network paths for traffic, has significantly improved evo's page load times. "There's a direct correlation between site speed and conversions, so speed is the same as money for us," Plehal says. "Argo Smart Routing has improved our page load times by nearly 40%."

![evo  logo](https://images.ctfassets.net/slt3lc6tev37/3IP6Rj5CgJwaCeAuEk8zeT/2ebe1e656711c5b00d1646c58c586f80/evo_logo.png) 

evo secures its site against DDoS and malicious requests, and reduces complexity by consolidating performance, security, and serverless solutions with a single vendor, Cloudflare.

 Cloudflare Products 
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  Workers ](https://workers.cloudflare.com/)
* [  Argo Smart Routing ](/application-services/products/argo-smart-routing/)

 Products Used 

WAF Argo Smart Routing Workers 

 Details 

 Industry 

eCommerce 

 Region 

North America 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"evo | Cloudflare","description":"evo secures its site against DDoS and malicious requests, and reduces complexity by consolidating performance, security, and serverless solutions with a single vendor, Cloudflare.","url":"https://www.cloudflare.com/case-studies/evo/","inLanguage":"en"}
```
