---
title: TrueLayer | Cloudflare Case Study
description: TrueLayer uses Cloudflare #ZeroTrust to ensure seamless employee access to its infrastructure and secure customer financial transactions
image: https://www.cloudflare.com/preview.png
---

# TrueLayer

> #### "  Cloudflare Zero Trust was an easy win. It's simple to configure and use, and we no longer need to dedicate resources to cumbersome VPN maintenance. This allows us to save hours of dedicated employee time. " 

## **TrueLayer uses Cloudflare Zero trust to ensure seamless employee access to its infrastructure and secure customer financial transactions**

TrueLayer is a front runner in the open banking sector, allowing businesses in any industry to effortlessly connect to bank data, verify accounts, and complete instant, secure account-to account payments and other financial transactions. The TrueLayer open banking API toolkit lets companies rapidly develop and deploy secure consumer and SMB applications for online payments, loans, insurance, investments, and cryptocurrencies in addition to traditional B2B and B2C transactions.

Although a relatively young company, TrueLayer is already one of the largest open banking platforms in Europe and one of the first platforms to bring true open banking to the UK, and its EU and worldwide operations continue to expand rapidly. 

### **The Challenge: Securely connect consumers, businesses, and banks while maintaining seamless employee access during rapid international expansion**

Frictionless connectivity between consumers, businesses, and banks are prerequisites for success in the Fintech marketplace. For TrueLayer, that starts with APIs — which must be both performant and highly secure. 

"Because TrueLayer deals with private data and banking information, security is our paramount concern," explains Alessio Casco, TrueLayer Head of DevOps and Infrastructure. "Only when we have a secure infrastructure in place, can we develop our API services." 

Since its formation, TrueLayer has seen vigorous growth in the UK, Europe, and Australia. With this growth bringing a significant increase in end-user traffic to TrueLayer APIs, the company wanted a DNS solution with widespread coverage in its current and future markets. It also sought the flexibility to support its increasing network demands and a way to maintain a clear distinction between its DNS services and its cloud network provider.

In addition, TrueLayer sets bold development schedules for its teams in London, Sydney, Milan, and Dublin. To operate at maximum efficiency, Truelayer needed to give employees secure, seamless access to internal resources. As a result, TrueLayer was evaluating ways to replace its VPN-based access management approach with a complete Zero Trust tool set. 

"Our existing VPN-based infrastructure was difficult to maintain, and it wasn't very manageable. For every user that wants to access a specific portal, we need to create a certificate, sign the certificate, sign the configuration, and send the configuration. After all that, the user still had to install it manually," says Casco. "Although not ideal, it was fine for our engineers, but we wanted to remove the VPN altogether using tested tools to improve all user access to specific things within the cluster, like our tools and dashboards." 

### **100% of traffic served with Cloudflare DNS**

In 2021, TrueLayer began with Cloudflare DNS. From the outset, the solution met TrueLayer's expectations — it provided the company's APIs with superior performance, high availability, unparalleled resilience, and redundancy, in addition to built-in DDoS and DNSSEC protection.

"Cloudflare has been doing DNS since the beginning, they have alot of technical experience." says Casco. "We wanted greater control over our infrastructure and to isolate ourselves by using a system separate from our cloud provider in case we needed to switch — Cloudflare gave us that option." 

Since implementing Cloudflare DNS, TrueLayer has bolstered its [API security](https://www.cloudflare.com/application-services/solutions/api-security/) and performance while reducing complexity.

"With the Cloudflare DNS in place, it is one less thing to think about," says Casco. "We know that the Cloudflare technical team tested the solution with their development and testing partners. We also know Cloudflare can manage almost any scenario. I don't go to sleep worrying about my DNS servers." 

### **Cloudflare Access reduces maintenance and ensures secure, seamless employee access**

With Cloudflare DNS in place, TrueLayer began its [Zero Trust implementation](https://www.cloudflare.com/learning/access-management/how-to-implement-zero-trust/), beginning with enabling more granular role-based controls across its internal assets and applications. It accomplished this with Cloudflare Access, a [Zero Trust Network Access service](https://www.cloudflare.com/sase/use-cases/) that enforces default-deny rules for users accessing any application in any type of infrastructure. 

"Setting up Access was simple. It just works," says Casco. "Unlike our traditional VPN, we configure it once. From there, it is just a matter of adding or removing employees from a group or creating a new Terraform resource. The real savings are in time spent and hassle avoided. With Access, we avoid the long tail of managing individual permissions and portals because everything is an API." 

With almost 500 Access user licenses, TrueLayer has enabled low-friction availability of internal resources to all core employees across the UK, Europe, APAC, and Australia. For TrueLayer employees, this means instant access without configuring a VPN client or installing additional software. Now, connecting to the TrueLayer infrastructure and tools is as simple as opening a webpage and authenticating using a single sign-on (SSO) and Multi Factor Authorization (MFA) with the company's identity provider.

Casco estimates the shift to Access from their self-hosted VPN has helped TrueLayer recover several hours of dedicated employee time per week in maintenance alone. Then there are the efficiency gains of providing every user with a seamless connection to internal resources and ensuring those resources are accessible without interruption.

"Cloudflare Zero Trust was an easy win. It's simple to configure and use, and we no longer need to dedicate resources to cumbersome VPN maintenance," says Casco. "This allows us to save hours of dedicated employee time."

### **A long-term partner on the TrueLayer growth roadmap**

As TrueLayer grows its portfolio of API-based open banking services, increases its European coverage, and expands further into new markets, the company intends for Cloudflare to play a significant role along its development roadmap. 

"As we bring on more services and move into new territories, Cloudflare will be alongside us to provide our DNS, geographic and advanced routing, and traffic management services," says Casco. "Cloudflare will also provide the protection and rules that secure our internal infrastructure as our workforce expands."

Explaining TrueLayer's intention to continue development with Cloudflare as a partner, Casco adds: 

"Like TrueLayer, Cloudflare is very dynamic — they are constantly developing, releasing, and improving their services. They are very modern in their approach to customer support and the way they present information. Cloudflare is also easy to use, has an edge network, and a provider for Terraform — three things every DevOps wants." 

![TrueLayer logo](https://images.ctfassets.net/slt3lc6tev37/3gyuFpouzx2kTp4i35b8b4/93e2cce00fdad2b1020ecdbf41adfb43/truelayer_logo.png) 

TrueLayer secures open-banking APIs, protects end-user information, and improves access to internal resources with Cloudflare Zero Trust

 Cloudflare Products 
* [  Access ](/sase/products/access/)
* [  DNS ](/application-services/products/dns/)

 Products Used 

Access DNS Zero Trust 

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
{"@context":"https://schema.org","@type":"WebPage","name":"TrueLayer | Cloudflare Case Study","description":"TrueLayer uses Cloudflare #ZeroTrust to ensure seamless employee access to its infrastructure and secure customer financial transactions","url":"https://www.cloudflare.com/case-studies/truelayer/","inLanguage":"en"}
```
