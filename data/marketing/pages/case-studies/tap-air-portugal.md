---
title: TAP Air Portugal &amp; Cloudflare | Customer Story
description: TAP Air Portugal gains operational agility by adopting Cloudflare cybersecurity.
image: https://images.ctfassets.net/slt3lc6tev37/30uSTBvFacBQClE0Dr5E89/b92a0163f53fe0dd955950bf9f1c2e1d/tap_meta_image.png
---

# TAP Air Portugal

> #### "  Cloudflare provides the agility we require to support a fast-moving e-commerce business. We now have the autonomy to protect our own infrastructure. " 

## TAP Air Portugal gets on board enhancing operational agility with Cloudflare

TAP Air Portugal connects people from Portugal to the world being the largest national service exporter and has one of the youngest fleets in Europe. TAP was founded in 1945 and today, they fly in 34 countries worldwide. TAP has approximately 99 planes and travels to 90 destinations across Europe, Africa, North America, and South America. In 2025, the company reported €4.3 billion in revenue. 

A significant share of that revenue flows through TAP's website making flytap.com the largest e-commerce platform in Portugal by transaction volume. The company oversees a complex ecosystem of flight bookings, loyalty programs, and passenger services that must remain accessible 24/7 to travelers in every time zone. For TAP, keeping their website secure, fast, and available is a core business priority. 

### Challenge: Scaling beyond a stagnant security stack

Operating a high-traffic global airline means facing constant security threats: traditional web application attacks, distributed denial-of-service (DDoS) attacks, price scraping by sophisticated bot traffic, authentication brute-force attacks, and SMS pumping attacks. The stakes are high for their digital performance. Delays in the booking experience or security breach threats impact daily operations, creating a ripple effect. TAP requires a tech stack that can match the speed and scale of the modern world. 

Before the transition to Cloudflare, TAP maintained a security provider for years and while the relationship was stable, the stability quietly became stagnant. They were seeking more innovative products and seamless licensing models. TAP also faced a lack of operational agility. Rules and configuration changes took minutes to apply due to a staging/testing environment transition with the previous partner, which was slow for threat containment. The lack of agility turns the security layer into a bottleneck rather than an enabler. 

### Solution: Choosing agility and local support through Cloudflare

António Carrilho leads the Cybersecurity Department at TAP Air Portugal. He and his team approached Cloudflare with the intention to increase security growth for the company. "We are on this journey of digitalization and are taking advantage of technological developments," Carrilho says. "Cloud computing, artificial intelligence to support innovation in our processes, to transform our business model, and keep up with the evolution trends of the industry." He added the goal is to maintain operational efficiency by investing in such products, "to simplify, reduce costs, and increase our efficiency." 

TAP initiated the partnership with Cloudflare in 2024\. There were several factors that made Cloudflare stand from competitors: simplicity, speed, and local support. Cloudflare allows for rules and changes to be applied and reflected globally in seconds — a key advantage for containment. Carrilho mentioned the ease of use with the simple graphic interface, allowing the team to increase efficiencies in daily operations. 

Product implementation included a multi-layered defense strategy that leverages the Cloudflare global network. By moving security logic to the edge, TAP ensures that malicious traffic is mitigated before it ever reaches the origin servers. 

[Cloudflare Web Application Firewall (WAF)](https://www.cloudflare.com/application-services/products/waf/) provides an intelligent security layer that addresses traditional web application attack patterns across all zones. The managed rulesets update regularly, and Jorge Príncipe, TAP's Cybersecurity Specialist, monitors those updates directly in the platform. Currently, with hundreds of predefined rules, this managed ruleset detects and protects against several known vulnerabilities (e.g., CVEs) and attack patterns (e.g., header anomalies). "Cloudflare's managed rulesets do the heavy lifting for us. In most cases, we no longer need to manually activate or deactivate WAF rules or create custom rules to address new and emerging threats, as Cloudflare proactively manages and updates these protections." Príncipe says.

TAP recorded more than 40 DDoS attacks in 2025\. Not one of them caused website interruption or manual intervention. And by adopting [Cloudflare DDoS Protection](https://www.cloudflare.com/ddos/), the attacks were handled and mitigated automatically. The team receives the dashboard alerts when the attacks are detected, with full visibility into geographic origins, autonomous system numbers, and attack signatures. The DDoS always-on solution mitigates large-scale attacks at the edge, ensuring the booking engine remains available even during volumetric events. 

Price scraping is a persistent challenge for any airline. Competitors and travel sites use automated tools to collect flight prices, which puts pressure on systems and can hurt business strategy. TAP adopted [Cloudflare Bot Management](https://www.cloudflare.com/application-services/products/bot-management/) which helps them identify and block sophisticated bots that try to bypass traditional protections. The tools include bot scoring, bot detection ids, JavaScript checks, combined in custom and rate limiting rules to block unwanted traffic. "We are blocking between 30% to 40% of bot traffic on our availability search endpoints," Príncipe says. 

Although not originally planned, TAP eventually saw the value in adding [Cloudflare Turnstile](https://www.cloudflare.com/application-services/products/turnstile/) as an added layer against automated account threats. As bot tactics have evolved, adopting this additional method of protection was necessary. What started as a useful add-on has become a meaningful part of how TAP thinks about bot mitigation: no single tool is sufficient on its own, but several complementary layers together produce the required level of protection. 

TAP uses [Cloudflare Workers](https://workers.cloudflare.com/) to implement serverless functions, such as integrating third-party APIs to combat SMS pumping attacks. They can deploy these defenses without managing additional servers or infrastructure, letting developers focus on passenger experience while the edge handles the threat. This helped reduce latency and prevent fraudulent requests from ever reaching TAP's servers. Building with Workers takes just a single day, compared to the one-to-three-month timeline required by traditional internal development. This shift delivers massive savings in both engineering time and infrastructure costs.

### What's next: Shaping the future on bot defense in aviation

TAP's digital transformation demonstrates how moving into a stronger security model can unlock developer agility and protect vital revenue streams. Additionally, the shift to Cloudflare positions TAP for future growth. They are better equipped to serve their global passengers, ensuring their journey starts with a proper, secure, and efficient digital experience. 

"You can tell the Cloudflare platform is in constant evolution — we are always seeing that the interface is changing or the menus are changing or a new functionality appears. You can tell it's a product that is constantly delivering more," Príncipe says. 

Looking ahead, the team continues to invest and plans to find new ways to maintain their status as a leader in the global aviation industry. They plan to deepen their integration with the Cloudflare platform by exploring new solutions like zero trust network Access, Client-Side Protection, and advanced Fraud Detection. 

"Cloudflare provides the agility we require to support a fast-moving e-commerce business. We now have the autonomy to protect our own infrastructure," Carrilho says.

![TAP Air Portugal logo](https://images.ctfassets.net/slt3lc6tev37/2mhFhTALgwfhv1CH6G1J0v/2f8efd687136266d4d2ca2b691f8b225/TAP-Portugal-Logo.png) 

TAP Air Portugal gains operational agility by adopting Cloudflare cybersecurity.

 Cloudflare Products 
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  DDoS Protection ](/ddos/)
* [  Rate Limiting ](/products/rate-limiting/)
* [  Bot Management ](/products/bot-management/)
* [  Turnstile ](/products/turnstile/)
* [  Workers ](/products/workers/)

 Details 

 Industry 

Travel & Leisure 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"TAP Air Portugal & Cloudflare | Customer Story","description":"TAP Air Portugal gains operational agility by adopting Cloudflare cybersecurity.","url":"https://www.cloudflare.com/case-studies/tap-air-portugal/","inLanguage":"en"}
```
