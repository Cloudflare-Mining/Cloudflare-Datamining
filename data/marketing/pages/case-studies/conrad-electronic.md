---
title: Conrad Electronic &amp; Cloudflare | Case Study
description: Conrad Electronic cuts costs and reduces system complexity by consolidating vendors with Cloudflare
image: https://www.cloudflare.com/preview.png
---

# Conrad Electronic

> #### "  Not having to maintain 1000 VPN profiles improves our security and saves us time and money. Everything is easier with Cloudflare Access. " 

## **Conrad Electronic cuts costs and reduces system complexity by consolidating vendors with Cloudflare**

Since 1923, Conrad Electronic have been a reliable partner when it comes to technology and Electronics. Today, as a sourcing platform, the company provides all parts for a successful sourcing of technical supplies. At Conrad, business customers get exactly what makes their project or business a success: a wide and deep product range comprising seven million products, customer-centric solutions and services, and face-to-face expert advice. Conrad's tailored e-procurement solutions simplify complex sourcing processes and help business of all types and sizes save time and costs. By selling their products on Conrad Marketplace, manufacturers and distributors are able to attract new customers and open up new markets quickly. Private customers also benefit from industrial-grade products and services. Conrad Electronic are a family-owned business based in Hirschau (Bavaria, Germany) that operates in 17 European countries.

### **Challenge: Automating threat protection, securing a cloud migration, empowering business agility, and improving the customer experience**

When Conrad Electronic began migrating its data centers and web hosting to the cloud, they struggled to find a suitable partner to secure their public-facing infrastructure against external threats. Their existing cloud provider's DDoS and bot mitigation tools failed to handle brute force attacks, and other providers they evaluated provided sub-par customer service. 

"Our cloud provider didn't offer the automated protection we needed — when we had to address a new attack vector, they would provide configuration sets we could enable, but, to stay protected, we had to take care of everything manually," says Janek Wonner, Conrad Electronic's Head of SRE and Cloud Technology. "When we looked for a better alternative, most vendors just weren't as customer friendly as Cloudflare. One even wanted to bill us for every customer support call." 

On top of these security concerns, Conrad needed a technology partner that could support a strategic shift in its business model. Five years ago, Conrad changed course from a classic technology retailer to a B2B sourcing platform. The majority of this transformation is almost complete. The focus is on business customers and digital business. Here, ecommerce and the related possibilities of modern procurement are becoming increasingly important in order to optimize purchasing processes and make them more efficient.

"Ecommerce will be our primary sales channel," explains Wonner. "We must ensure our customers have a reliable online purchasing experience. "We also need to reduce our DevOps effort with a stable platform to create and deploy applications on." 

The dramatic shift in strategy instilled urgency for the nine-person Site Reliability Engineering (SRE) team to bolster security for their ecommerce platform and 15 online shops. 

To unlock the business agility they needed to support this e-commerce shift, Conrad also sought to deliver a faster, safer way for employees to access internal resources and developer environments. The starting point for this initiative would be retiring Conrad's legacy VPN, which demanded excessive maintenance and slowed connectivity for end users.

### **Solution: Mitigating bot attacks and securing an ecommerce platform with out-of-the-box Cloudflare security**

After exploring several options, Conrad turned to Cloudflare, adopting the Cloudflare Web Application Firewall (WAF), DDoS mitigation, and Rate Limiting to address its security concerns while migrating their web hosting to the cloud. From the outset, Cloudflare addressed both Conrad's customer service and automated security requirements. 

"It's a good partnership. Cloudflare offers us excellent value, and interacting with their entire team is uncomplicated. That had a huge impact on our decision," says Wonner. "We just set it and forget it. We don't need to think about security — that is why we outsourced in the first place."

Since its implementation, Cloudflare has prevented several potentially costly incidents. These include multiple credential-stuffing attacks on Conrad's ecommerce platform following a series of security breaches, e.g. at a major German telecom.

"When other companies experienced a data leak, the attackers would often try the stolen email and password combinations on our sites," says Wonner. "We always knew when there was another attack, but it was business as usual because Cloudflare detected and stopped it before it became a problem."

### **Cloudflare Access — Eliminating VPN maintenance distractions to focus on critical business application development**

The Conrad group has 2,300 employees, with around 1,000 regularly connecting to internal applications via a traditional VPN. Unfortunately, the process for end users to configure VPNs on their devices was complex and prevented many employees from accessing what they needed in a timely manner.

"Everyone who wanted to access an internal system had to install a VPN client and configure it according to a specific VPN profile, but not everyone has a technical background," says Wonner. "Just keeping people online created a series of administrative bottlenecks." 

Addressing VPN-related help desk tickets created a maintenance burden for the SRE team, which took away time and attention from the strategic shift to a B2B-first e-commerce model. As a result, maintaining this legacy VPN was becoming increasingly inefficient and costly. 

Encouraged by their prior positive experience with Cloudflare, Conrad decided that Cloudflare Access, a [Zero Trust Network Access (ZTNA) service](https://www.cloudflare.com/learning/access-management/what-is-ztna/), would enable the organization to retire its VPN and deliver a faster, safer authentication experience. In just over a year, Conrad retired over 1,000 VPN connections and enabled identity-based security checks for hundreds of applications. This ensured their employees had a consistent, low-friction authentication experience. 

"Everything is easier with Access," says Wonner. "All internal and external resources that have an account with our identity provider can quickly connect to specific systems using a single sign-on. We can also restrict specific individuals or secure sensitive areas with a mouse click. Not having to maintain 1,000 VPN profiles improves our security and saves us time and money."

Conrad's SRE team also takes advantage of Cloudflare's compatibility with Terraform, an infrastructure-as-code service, to automate key workflows. Specifically, the SRE team has automated the process of onboarding employees, provisioning and configuring policies for new applications, updating user groups, and creating service tokens.

"We have hundreds of Access applications, but when we configure something once, it's automatically done for all domains and subdomains," says Wonner. "Every month that frees up at least 10 hours we can dedicate to improving our ecommerce platform." 

### **Reducing developer and administrative efforts with the Cloudflare Developer Platform and Advanced Certificate Management**

Committed to reducing system complexity using the Cloudflare single-solution ecosystem, Conrad has also implemented the Cloudflare Workers development platform. The six-person front-end development team uses Workers to redirect and route traffic on the Cloudflare network and perform hardware-intensive tasks like edge-side includes. 

"We have plenty going on with Workers and Workers KV," says Wonner. "We currently generate over 1 billion Workers requests every month across several use cases." 

The Cloudflare Wrangler command-line tool allows the team to generate, configure, build, preview, and publish Cloudflare Worker projects directly from their development environments.

Conrad also uses Cloudflare Advanced Certificate Management. According to Wonner, this service saves the company 120 hours every year while effortlessly maintaining the secure encryption of its 15 ecommerce sites and 33 domains.

"SSL certificates were awful to manage, but now we just add our domains and Cloudflare automatically renews them," says Wonner. "We have no more work to do there, and we no longer risk one of our shops going down because somebody forgot to renew the SSL."

Conrad wants to become Europe's leading sourcing platform for technical supplies and currently plans to continue its relationship with Cloudflare. It is a decision based on the no-nonsense partnership the two companies have formed. 

"Cloudflare are reliable both in terms of the security they provide and the instant availability of their support. I can rely on that — I don't need to check to be sure the system is working."

![Conrad Electronic logo](https://images.ctfassets.net/slt3lc6tev37/5ZUyBqXSUMwtyH6WxUxa1T/1263acfbc4cd0a308e973eccdcbed8ef/Conrad_Electronic_logo.svg) 

As online business becomes more important for Conrad Electronic, they use Cloudflare to streamline development, protect ecommerce websites against sophisticated bot attacks, and simplify user access

 Cloudflare Products 
* [  Workers ](https://workers.cloudflare.com/)
* [  DDoS Mitigation ](/ddos/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  Access ](/sase/products/access/)

 Products Used 

Access Rate Limiting DDoS Protection WAF Zero Trust Workers 

 Details 

 Industry 

eCommerce 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Conrad Electronic & Cloudflare | Case Study","description":"Conrad Electronic cuts costs and reduces system complexity by consolidating vendors with Cloudflare","url":"https://www.cloudflare.com/case-studies/conrad-electronic/","inLanguage":"en"}
```
