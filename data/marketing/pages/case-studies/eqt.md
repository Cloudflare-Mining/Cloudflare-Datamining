---
title: EQT &amp; Cloudflare | Case Study
description: Leveraging unified Cloudflare services in the connectivity cloud, leading global investment and private equity firm EQT improves security, performance, accessibility, and reliability
image: https://www.cloudflare.com/preview.png
---

# EQT

> #### "  The cloud migration and global expansion compelled us to reimagine our technology stack and strengthen our security posture. We wanted to bring on cloud-native security like Cloudflare that could support us on a global scale into the future. " 

## **EQT reduces administrative complexity, boosts security, and streamlines development productivity with Cloudflare's connectivity cloud**

Founded in 1994, and publicly listed since 2019, [EQT](https://eqtgroup.com/) is a global investment company headquartered in Stockholm, Sweden. With over €100 billion in assets under management, EQT's business lines cover private equity, venture capital, infrastructure, real estate, and other sectors. 

EQT's investment strategy combines sector-specific expertise (e.g. healthcare, technology, services) with thematic focuses on macro challenges, which today include climate and nature, health and wellbeing, inclusion and equality, and urbanization. Over the past five years, [EQT has continued its strong historic performance — its portfolio companies grew revenue by 17%, EBITDA by 18%, and employee count by 7% on average annually](https://eqtgroup.com/about/business-model/). In particular, its private equity business is one of the largest in the world, ranking third in Private Equity International's PEI 300 in 2023 based on capital raised over the past five years.

In 2022, EQT grew its Asian presence by acquiring Baring Private Equity Asia (BPEA). As a result of the expansion, EQT now operates in countries representing [80% of the global GDP](https://eqtgroup.com/news/2022/eqt-combines-with-bpea-to-capture-growth-opportunities-in-asia/) across Europe, North America, and Asia Pacific.

### **Challenge: Securing growth — A rapidly expanding global footprint**

In addition to expanding its global and regional presence, over the past few years, EQT completed a major cloud migration and rapidly scaled its workforce. The combined changes and growth raised the stakes for its central IT and security team, which is responsible for both protecting its employees and investors and supporting security for its portfolio companies.

To prepare for its expansion, in 2017, EQT began migrating all of its on-prem infrastructure and applications to a 100% multi-cloud architecture. To aid in scaling its [broader digital transformation goals](https://eqtgroup.com/digitalization/), EQT began to explore cloud-based security vendors. 

More recently, with the 2022 BPEA EQT merger, the company's global headcount jumped from roughly 800 employees to more than 1800\. In response, EQT has focused on scaling protections for EQT workers and strengthening cybersecurity across its new portfolio companies. EQT also continues to grow as a public company, increasing investor attention and regulatory scrutiny. 

"The cloud migration and global expansion compelled us to reimagine our technology stack and strengthen our security posture," says João Pedro Gonçalves, EQT's Global Chief Information Security Officer. "We wanted to bring on a [cloud-native security](https://www.cloudflare.com/learning/cloud/cloud-native-security/) like Cloudflare that could support us on a global scale into the future."

### **Protecting public resources and streamlining configuration**

EQT's first challenge is a common starting point for Cloudflare customers: protecting its public websites with a [Web Application Firewall (WAF)](https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf/). Gonçalves was aware of Cloudflare's strong reputation in this area and, in fact, had direct positive experiences setting up Cloudflare in prior companies and for his personal use. 

"Cloudflare was the first solution we turned to. We set it up, and it worked wonderfully," he says. "As engineers, we like the fact that we could just sign up and start using and testing the service without the weeks of negotiation we have experienced with other vendors." 

The ease of the initial WAF rollout motivated EQT to displace its incumbent vendor for [DNS record management](https://www.cloudflare.com/learning/dns/dns-records/) with Cloudflare. 

"We weren't looking for a new DNS management solution," says Kristian Petersen, EQT Group SRE Team lead, "But we quickly recognized that we could reduce our operational complexity with Cloudflare. By putting everything in Cloudflare's connectivity cloud, we streamlined service management and improved our security by limiting the potential for human error."

Today, Cloudflare manages 5 primary and 70 secondary domains for EQT, improves the performance of those websites with caching and dynamic content delivery via a [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/), and protects them from threats like [DDoS attacks](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/). 

"Cloudflare WAF, DDoS, and DNS Management are more robust, reliable, easier to use, and throw fewer false positives than any solution I have experienced," says Petersen. "Because of that, we depend more and more on Cloudflare." 

Impressed by its early results, EQT continues to expand its use of Cloudflare applications. To transform the user experience and [improve application security](https://www.cloudflare.com/application-services/solutions/) across its operations in China, EQT adopted the newly introduced Cloudflare China Zero Trust/WARP solution. This provides EQT users behind the Great Firewall with protection and performant, reliable network access consistent with the rest of the company's global workforce — all on the Cloudflare platform. 

EQT also leveraged the Cloudflare Developer Platform, specifically Workers, to manage caching and dynamic content delivery and further improve the performance of its public websites. In addition to providing performance benefits, the Workers configuration allows EQT to completely isolate its public websites from its cloud-hosted applications, protecting critical internal systems from [potential threats](https://www.cloudflare.com/cybersecurity/). 

### **Securing and scaling access to self-hosted cloud applications**

EQT's cloud migration in 2017 set in motion efforts to reimagine how employees accessed internal resources.

Previously, EQT relied on traditional tools like Microsoft's on-premises Active Directory to set access policies for its on-prem apps. Complicating matters, briefly after its cloud migration, EQT relied on a mix of its own custom proxies and on-premise VPN, which were, according to Petersen, "a lot of pain to maintain" and "not always secure." 

At the same time, EQT was focusing on building its own internal applications to drive business growth, and in turn, hiring more developers who needed safe, streamlined access. One of EQT's major internal projects is [Motherbrain](https://eqtgroup.com/motherbrain/), a proprietary AI language model for identifying and analyzing investment opportunities. 

"The custom solutions we developed were fine when we had one or two local applications to protect," says Petersen. "But we soon had over 20 proprietary web applications that were used every day for important work by a growing number of users. When Cloudflare showed us its portfolio of Zero Trust security services, it was exactly what we needed."

Today, EQT protects access to all self-hosted applications for all employees and contractors using Cloudflare Access, a [Zero Trust Network Access (ZTNA)](https://www.cloudflare.com/learning/access-management/what-is-ztna/) service. Using a [secure access service edge (SASE)](https://www.cloudflare.com/learning/access-management/what-is-sase/) and [secure service edge (SSE)](https://www.cloudflare.com/learning/access-management/security-service-edge-sse/) approach, Cloudflare authenticates a request to an application only after verifying a user's identity – in this case, based on integration with EQT's identity provider, Okta. 

EQT's security teams value that they can strengthen security with default-deny, least-privilege policies that are consistent with [Zero Trust best practices](https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/), while still streamlining the experience for their employees. 

"The experience for end users is very smooth, and using a centralized service like Cloudflare to manage application access policies makes it easier for our IT and security teams," says Gonçalves. "Plus, we now have visibility into who is using each of our services, which helps us improve our security holistically."

EQT has also been able to automate the vast majority of the policy configuration process via Cloudflare [integration with Terraform](https://developers.cloudflare.com/terraform/), the infrastructure-as-code tool. Before Cloudflare, changing or creating application access policies could take up to a full week, now the process takes five minutes.

"The time saved is a radical shift for us and allows our teams to focus on more strategic efforts," says Gonçalves.

EQT's positive experiences with Cloudflare have encouraged the company to continue growing the partnership. The manageability, ease of implementation, user-friendly interface, and extensive functionality of the Cloudflare platform have led the company to reconsider its attitude toward [consolidation](https://www.cloudflare.com/learning/security/eliminate-cybersecurity-complexity-with-consolidation/). The unified Cloudflare ecosystem with its core [Application Services](https://www.cloudflare.com/application-services/) — WAF, DDoS Protection, and DNS and Bot Management solutions — alongside the Cloudflare Developer Platform and Cloudflare Zero Trust, SASE/SSE network security have become the foundations of EQT's connectivity cloud. 

"We have always taken a best-of-breed approach to our IT and security stack," says Gonçalves. "We are not afraid of killing security services that don't work, but, with everything Cloudflare offers and the positive experiences we've had, we keep increasing our adoption of a unified solution. That's a very positive sign for the future." 

![EQT logo](https://images.ctfassets.net/slt3lc6tev37/4LY5HKIWEcIjvJPfuQ8uF/23016b6b020ab208f952fbe40d14cd50/EQT_Logo.png) 

Leveraging unified Cloudflare services in a connectivity cloud, leading global investment and private equity firm EQT improves security, performance, accessibility, and reliability

 Cloudflare Products 
* [  Access ](/sase/products/access/)
* [  Workers ](https://workers.cloudflare.com/)

 Products Used 

Access CDN DNS Teams Zero Trust Workers 

 Details 

 Industry 

Financial Services 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"EQT & Cloudflare | Case Study","description":"Leveraging unified Cloudflare services in the connectivity cloud, leading global investment and private equity firm EQT improves security, performance, accessibility, and reliability","url":"https://www.cloudflare.com/case-studies/eqt/","inLanguage":"en"}
```
