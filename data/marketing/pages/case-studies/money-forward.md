---
title: Money Forward &amp; Cloudflare | Customer Story
description: Market-leading Japanese fintech SaaS Money Forward chose Cloudflare to encrypt its web traffic and secure its websites, applications, and infrastructure.
image: https://www.cloudflare.com/preview.png
---

# Money Forward

> #### "  Cloudflare's speed, stability, and ease of deployment convinced us to use it to secure all of our services. " 

## Money Forward secures applications and infrastructure using Cloudflare

Founded in 2012, Tokyo-based Money Forward is a fintech/SaaS developer dedicated to creating fair and open financial platforms that provide essential services to businesses, individuals, and institutions. Its product offerings range from personal financial management services for individual consumers — like [Money Forward ME](https://moneyforward.com/me) — to the SaaS application for back office operations with its online back office service [Money Forward Cloud](https://biz.moneyforward.com/). The [Money Forward Fintech Platform](https://corp.moneyforward.com/en/service/business/) provides comprehensive services for financial institutions.

Money Forward offers over 60 services for both corporate and individual clients. In corporate services, the number of paying customers exceeds 340,000 — a number that has grown by 20%.

The user base for "Money Forward ME," a financial management service for individuals, has surpassed 16 million. A key characteristic of Money Forward is its extensive user base, encompassing both corporate and individual users. The company is expanding its development operations into Vietnam.

### Challenge: Keeping public applications secure and available during periods of peak activity

Following the rapid growth of its user base and product portfolio, Money Forward needed to upgrade its existing performance and security tooling. The company's infrastructure — particularly its web application firewall (WAF) — lacked the resilience, capacity, and scalability to handle its steadily growing traffic and security requirements. These shortcomings became especially problematic during periods of increased financial activity and high transactional volumes at the beginning and end of every month. With its existing WAF unable to cope, Money Forward's origin servers were exposed to a potentially dangerous combination of security and availability issues.

"As we grew, regular traffic surges began to overwhelm our infrastructure," explains Tsukasa Takada from Money Forward's Corporate Information and Security Office. "To keep everything running, every month we had to temporarily reconfigure our WAF or take it offline altogether to deal with the increased bandwidth demands." 

In addition to its ineffective WAF, Money Forward had a secondary issue — managing the rapidly growing volume of domains and [SSL/TLS certificates](https://www.cloudflare.com/application-services/products/ssl/) required to secure its financial applications. Keeping track of a growing number of customer websites and secondary domains was a drain on the company's resources. 

To address the mounting complexity, lack of consistency, and periods of increased vulnerability associated with its existing security tools, the Money Forward security team began looking for a more robust, scalable, single-vendor solution that could cope with its dynamic requirements. 

### Solution: Scalable, highly available application security services on the Cloudflare global network

Money Forward began its search for a solution by comparing [Cloudflare application services](https://www.cloudflare.com/application-services/) and the [cloud-based WAF](https://www.cloudflare.com/application-services/products/waf/) to the products of several other established Internet security and WAF vendors. Equipped with native global threat intelligence, machine learning-based threat detection, managed rules, and custom rulesets, Cloudflare quickly emerged as the company's preferred WAF and application security solution. 

"Based on cost, performance, and functionality across several tests, we chose Cloudflare to secure Money Forward ME, one of our flagship products," says Tsukasa Takada. "Cloudflare's speed, stability, and ease of deployment convinced us to use it to secure all of our services." 

The Cloudflare WAF automatically detects and mitigates over 3.36 million monthly firewall events for Money Forward, effectively securing the company's entire suite of financial applications and liberating its development and IT teams for other strategic tasks.

"Cloudflare provides regular follow-ups to ensure we are always up to date," says Tsukasa Takada. "It responds immediately to requests and automatically updates our technology to keep us safe from newer, emerging threats like DDoS and automated bot attacks." 

### Adding value with Mitsui Bussan Secure Directions (MBSD), a Cloudflare solutions partner

To further streamline its Cloudflare implementation and security management processes, Money Forward received support from [Mitsui Bussan Secure Directions(MBSD)](https://www.mbsd.jp/en/), an established Japanese Internet security pioneer.

"With the MBSD SOC team monitoring our traffic and supporting Cloudflare's rich set of managed rules with their own situation-specific, professionally developed custom rulesets, our development teams can concentrate on other tasks for better service management," says Tsukasa Takada. "Cloudflare gives us the peace of mind to stop worrying about our infrastructure and security and focus on improving the business."

With decades of cyber security experience, the local security experts brought extensive knowledge of Cloudflare solutions to the company-wide Cloudflare WAF and application services deployment. This improved security overall and compounded the amount of time and effort Money Forward saves. 

### Automating time-consuming tasks and reducing operational loads

With its public web apps and infrastructure secured using the Cloudflare WAF, Money Forward focused on addressing its next pain point — simplifying the administration of its large portfolio of domains and subdomains.

Money Forward selected [Advanced Certificate Manager](https://www.cloudflare.com/application-services/products/advanced-certificate-manager/), Cloudflare's [enterprise-grade TLS certificate lifecycle management tool](https://www.cloudflare.com/application-services/solutions/certificate-lifecycle-management/), to improve security team productivity and enhance its security posture. By automatically issuing and renewing Money Forward's TLS certificates from its global data centers, Cloudflare has slashed the administrative effort required to encrypt the company's web traffic and secure its DNS hostnames. Advanced Certificate Manager also prevents Money Forward's security certificates from expiring due to human oversight. 

Using the Cloudflare API and the Terraform Cloudflare Provider, Money Forward also leverages an infrastructure-as-code approach to simplify customizing TLS deployments and provisioning and maintaining domain security. Transform Rules, the Cloudflare tool for rewriting URLs dynamically on the global network, helps the Money Forward teams to alter the request headers that are sent to its origin servers.

"Our application service delivery teams and the security staff that protect our IT infrastructure love Cloudflare. It has reduced our operational overheads and automated our most time-consuming tasks," says Tsukasa Takada. "Cloudflare combines everything into a centralized dashboard, making it easy to maintain full visibility into our security posture even though we outsource security management."

Having worked closely with Cloudflare and Mitsui Bussan Secure Directions, to ensure a successful deployment at Money Forward, Tsukasa Takada is confident that the relationship will continue.

"Cloudflare continues to be remarkably helpful whether we are working to secure our applications or infrastructure or to improve performance," says Tsukasa Takada. "The whole solution is functionally rich, well-supported, and easy to use. I recommend Cloudflare to any business seeking a long-term security partner."

![Money Forward logo](https://images.ctfassets.net/slt3lc6tev37/5WfJIXAd6FHUrf8JX87P7R/a0f06474b7a410c1e43b0890cb7450dd/___________Main.jpg) 

Market-leading Japanese fintech SaaS Money Forward chose Cloudflare to encrypt its web traffic and secure its websites, applications, and infrastructure.

 Cloudflare Products 
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)

 Products Used 

WAF 

 Details 

 Industry 

Financial Services 

 Region 

Asia-Pacific 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Money Forward & Cloudflare | Customer Story","description":"Market-leading Japanese fintech SaaS Money Forward chose Cloudflare to encrypt its web traffic and secure its websites, applications, and infrastructure.","url":"https://www.cloudflare.com/case-studies/money-forward/","inLanguage":"en"}
```
