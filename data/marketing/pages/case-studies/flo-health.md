---
title: Flo Health &amp; Cloudflare | Customer Story
description: Flo Health relies on Cloudflare solutions to implement Anonymous Mode and meet compliance goals
image: https://www.cloudflare.com/preview.png
---

# Flo Health

> #### "  After GPT4 was released, we analyzed our statistics in Cloudflare Email Security and found that attacks had jumped by 20% within one month. We rely on Cloudflare, which is handling these attacks very well. " 

## Flo Health secures personal data of a global user base with help from Cloudflare

**Flo Health relies on Cloudflare solutions to implement Anonymous Mode and meet compliance goals**

Flo is the #1 most popular female health app worldwide, with 400 million total installs and 75 million monthly active users. The app provides a wide variety of services to users, including period tracking, a fertility calendar, support throughout pregnancy, and a wealth of educational content. As a trusted platform for women's health, Flo collects and processes a vast amount of sensitive personal health data, making data security and privacy a top priority. 

According to Roman Bugaev, Flo's CTO: "At Flo, we firmly believe that every woman deserves the right to track their health without concern. It is the responsibility of every women's health app to commit to high privacy and security standards."

### Challenge: Protecting sensitive health data against misuse and cyber threats

Flo's mission to empower their users requires the company to protect sensitive health data from unauthorized access and misuse. With a global user base, Flo Health must comply with numerous regulations such as the EU's General Data Protection Regulation (GDPR) which requires strong security and data privacy controls. At the same time, the company faces the challenge of defending itself from the rapidly evolving threat landscape which is marked by increasingly sophisticated and frequent cyber attacks.

According to Bugaev, "We believe that no matter where users live, they should have the same level of protection. Their privacy should be protected no matter what."

### Managing the risks of GenAI in phishing and data protection

Generative AI (GenAI) tools like ChatGPT can be useful, but they also pose a significant threat to an organization's data privacy and security. In recent years, Flo Health has noted a substantial jump in the sophistication and volume of phishing attacks as cybercriminals have adopted GenAI.

According to Bugaev, Cloudflare Email Security has been critical to managing the company's exposure to this new threat. He commented, "After GPT4 was released, we analyzed our statistics in Cloudflare and found that attacks had jumped by 20% within one month. We rely on Cloudflare's email security solution, which is handling the increased volume of these phishing attacks very well, and helping us protect our users and our company."

### Simplifying secure access to applications

Flo Health continues to expand, now boasting approximately 520 employees. They use Cloudflare to secure employee access to internal applications and infrastructure. All company devices have Cloudflare's device agent installed, which allows them to protect corporate devices by securely and privately sending traffic from those devices to Cloudflare's global network, where Cloudflare Gateway can apply advanced web filtering. The Cloudflare One Client also makes it possible to apply advanced Zero Trust policies that check for a device's health before it connects to corporate applications. Bugaev comments, "The beauty of WARP, Cloudflare's device agent, is that it's invisible for employees and doesn't impact productivity — while still ensuring that they're secure by default."

Flo Health also took advantage of Cloudflare's integration with CrowdStrike to ensure that its employees had secure access to applications from anywhere. Using both product sets, Flo could easily deploy custom rules based on Crowdstrike's ZTNA score to ensure only employees with the right device posture got access to sensitive applications. Employees with low ZTA scores were either denied access or put in a sandbox environment.

### Going the extra mile on compliance

Flo has a truly global user base, which means it is subject to numerous data privacy regulations, such as the General Data Protection Regulation (GDPR). Rather than take a piecemeal, check-the-box approach to compliance, the company complies with the strongest requirements in place.

Bugaev credits Cloudflare as a central part of the company's security by design and default strategy. Flo Health has deployed numerous Cloudflare solutions to meet compliance requirements and [hit their data security goals](https://www.cloudflare.com/learning/cloud/what-is-dspm/). In addition to Cloudflare Email Security and Zero Trust,, the company uses the Cloudflare Web Application Firewall's (WAF) to identify and block attempts to exploit vulnerable web applications and access sensitive user data. Flo leverages the ability to create custom WAF rules to provide surgical protection against threats specific to its unique products and infrastructure. Rate limiting functionality effectively safeguards Flo from automated attacks, brute force attempts, and API abuse. Additionally, Flo utilizes Cloudflare WAF managed rulesets to proactively neutralize attempts to exploit various types of vulnerabilities, including those outlined in the OWASP Top 10.

Flo also takes advantage of various Cloudflare features to ensure compliance with various regulations and standards. For example, they strictly enforce minimum TLS versions to prevent sensitive data from being transferred via an insecure protocol. Additionally, Cloudflare's ability to restrict traffic to certain countries or regions allows the company to comply with sanctions.

### Guaranteeing user privacy with Anonymous Mode

To fulfill their privacy-focused goals and simplify compliance with data privacy laws, Flo Health decided to implement Anonymous Mode within their application. This allows users to take advantage of their services without revealing any identifying data, such as their IP address, email, or name.

Cloudflare Relay is a critical component of this feature, because it acts as a proxy in the connection between Flo Health and a user's device. When traffic flows from the app to the company's servers, the user's IP address is replaced with Cloudflare's IP address. As a result, Flo Health has no visibility into the source of the data being sent to their app. Additionally, all traffic is encrypted with a post-quantum cryptographic algorithm, protecting sensitive data against even the most sophisticated eavesdroppers.

This design ensures that a user's data can't be linked to their identity, since no party has access to all of the pieces needed to identify them and carry out potential attacks or data theft.

"Cloudflare sits between our servers and our users and guarantees that we don't see what we don't need to see," says Bugaev. "We can't see the user's identity, and Cloudflare can't see their data."

This innovative approach to ensuring user privacy earned Flo multiple awards and accolades. It was highlighted as an "area of excellence" in the company's ISO 27001 certification audit and was recognized as TIME's Best Invention 2023\. Anonymous Mode also earned the 2022 IAPP Privacy Innovation Award and was a finalist for Fast Company's 2023 World Changing Ideas Awards in the Rapid Response category.

### Edge networking ensures high application performance worldwide

Flo Health's website and API are hosted in the US, but they have users around the world. As a result, the company relies on Cloudflare to ensure a positive experience for all of their users.

In addition to the Cloudflare CDN, Flo Health also uses Argo Smart Routing to optimize routing of their API traffic over the Cloudflare network. In general, Argo helps accelerate Flo's API traffic by 20% on average.

To further improve performance, important API endpoints are implemented using Cloudflare Workers. This allows them to be implemented in the Cloudflare data center closest to the user, helping reduce latency and enhance performance.

Workers is also part of Flo's continuous improvement strategy. The company performs an estimated 400 A/B tests per quarter to test potential enhancements to their app and the user experience. With Workers, Flo can check to see if a particular API request is part of an active experiment, and whether or not it is returned to the user with a latency of less than 200 ms.

![Flo Health logo](https://images.ctfassets.net/slt3lc6tev37/6WJwkmFXP9H7GdqlL3wVGM/74b4cbe488b8b0a8ee1b0810b95d6a80/Flo_Health_Logo.png) 

Flo Health secures personal data of a global user base with help from Cloudflare

 Cloudflare Products 
* [  Workers ](https://workers.cloudflare.com/)
* [  Email Security ](/sase/products/email-security/)
* [  Argo Smart Routing ](/application-services/products/argo-smart-routing/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  Zero Trust ](/sase/)
* [  CDN ](/application-services/products/cdn/)

 Products Used 

WAF CDN Argo Smart Routing Workers 

 Details 

 Industry 

Healthcare & Life Sciences 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Flo Health & Cloudflare | Customer Story","description":"Flo Health relies on Cloudflare solutions to implement Anonymous Mode and meet compliance goals","url":"https://www.cloudflare.com/case-studies/flo-health/","inLanguage":"en"}
```
