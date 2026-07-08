---
title: BridgerPay
description: Cloudflare Access allow BridgerPay's global ecommerce merchants to follow a Zero Trust model and securely connect to their online stores.
image: https://www.cloudflare.com/preview.png
---

# BridgerPay

> #### "  Using Access instead of developing our own solution saved us hundreds of work-hours, but the savings goes beyond payroll. We wouldn't be able to grow our client base if we didn't have the time to focus on building new features. " 

## **BridgerPay secures its merchant portal with Cloudflare Access**

Based in Cyprus, BridgerPay offers a SaaS platform that enables [ecommerce merchants](https://www.cloudflare.com/retail/) to connect their online stores to over 300 payment service providers in 170 countries in just a few clicks. BridgerPay's platform frees merchants from having to manage multiple payment providers and enables merchants to scale globally by making it simple for them to add payment options that are local to a specific area. Currently, BridgerPay works with approximately 250 merchants worldwide and facilitates over $250 million in transactions monthly.

### **Challenge: Mitigate frequent DDoS attacks and secure remote access to merchant admin portal**

Shortly after launching their platform, BridgerPay began experiencing complex DDoS attacks that would slow HTTP requests and strain their resources. As part of the BridgerPay product is embedded within websites, they had to protect themselves as well as their software from any attacks that might also occur on outside websites. Additionally, these attacks were preventing access to BridgerPay's merchant portal, which its customers used to configure and maintain their accounts. BridgerPay also wanted a simpler and more secure way to [protect user access](https://www.cloudflare.com/learning/access-management/what-is-remote-access-security/) to the merchant portal, which was being protected by authentication secrets. 

BridgerPay signed up for Cloudflare's performance and security suite, along with Cloudflare Access, which uses a Zero Trust model to help teams [secure corporate applications](https://www.cloudflare.com/application-services/solutions/) with better performance and security than a VPN; Cloudflare Rate Limiting, which helps protect against DDoS and other automated cyber attacks; and Argo Smart Routing, which detects real-time network congestion and routes web traffic across the fastest and most reliable network paths. 

### **Cloudflare Access lets BridgerPay secure its merchant portal the easy way**

While Access is designed to enable distributed workforces to securely connect to internal resources, BridgerPay easily adapted it for a different use case: ensuring that their merchants could securely access their online admin portal. 

"Access was the perfect solution for securing our merchant portal," recalls Yaron Hersh, CTO. "Within five minutes, we had it completely set up, without having to rewrite code or make any other changes."

Cloudflare Access adds an authentication page in front of applications an organization doesn't want to be publicly accessible, as well as securing merchant logins with Zero Trust authentication. Access also shields the portal from DDoS and other automated attacks, since the portal is no longer visible on the public internet.

"Some DDoS attacks were slowing the portal," Hersh adds. "Putting Access in front of it helped prevent DDoS attacks and potential downtime, and it also made merchant logins more secure."

Currently, BridgerPay has about 200 Access seats. The company is planning to expand its usage to protect internal resources for employees, who currently use VPNs.

"Our VPN clients are constantly under attack. They're also very difficult for our IT team to configure, and for our employees to use," Hersh says. "Access is an easier, faster, and simpler solution for everyone, not to mention more secure."

Without Cloudflare Access, BridgerPay would have had to develop its own internal authentication solution, a process that would take months -- and could come at a severe opportunity cost, since developers wouldn't have time to work on internal projects.

"Using Access instead of developing our own solution saved us hundreds of work-hours, but the savings goes beyond payroll," says Ran Cohen, Co-Founder and CEO. "We wouldn't be able to grow our client base if we didn't have the time to focus on building new features."

"Access gave us time to work on our business instead of just at it," Hersh adds. "Security isn't a revenue driver, but it's essential to the business. Cloudflare Access enabled us to quickly deploy a secure access solution for our business."

### **Cloudflare solutions are sprinkled throughout BridgerPay's infrastructure**

In addition to Access, BridgerPay uses a number of other Cloudflare products, including Rate Limiting, Argo Smart Routing, and Cloudflare Workers.

"In addition to stopping DDoS attacks, it's also important to throttle other types of malicious traffic, like automated scrapers," Hersh says. "Rate Limiting throttles many thousands of bad requests every day."

After enabling Argo Smart Routing, BridgerPay saw a 68% improvement in page load times for customers located in Singapore. Beforehand, users in Singapore had experienced poor performance because they were located far from BridgerPay's data center in Europe.

"Once we enabled Argo, I haven't heard a single customer complaint about site slowness," Hersh says. "Clients have actually complimented us about improvement in transaction speed." 

BridgerPay also uses Cloudflare Workers, which provides developers with a serverless execution environment that enables them to create entirely new applications or augment existing apps with custom code at the edge — without configuring or maintaining infrastructure. Currently, BridgerPay uses Workers to inject headers into their customers' checkout pages. These headers perform tasks like IP filtering, so malicious traffic can't access the page.

"The benefit of using Workers is that if I need to make a change, I just update the Worker, and the merchant doesn't have to do anything," Hersh explains.

Moving forward, Hersh would like to expand BridgerPay's use of Workers so that the company can leverage the edge to [improve performance](https://www.cloudflare.com/retail/), especially for compute-intensive tasks.

"Right now, I use my cloud providers' tools for compute-intensive tasks, but then, they're limited by the cloud provider's region," Hersh explains. "Workers would eliminate that limitation."

Cohen sees BridgerPay's partnership with Cloudflare as integral to BridgerPay's continued growth. "Security keeps many CEOs awake at night, but with Cloudflare in place, I sleep soundly. One of the most important things we can offer to our merchants is the confidence that we have the highest levels of security in place. Cloudflare gives us that confidence, and with it, we can continue scaling."

![BridgerPay logo](https://images.ctfassets.net/slt3lc6tev37/13LSF7fO5TLVWfBh4ofjby/d0d6b9282436579b242e4c8b4f55e6fd/bridgerpay.png) 

Cloudflare Access allow BridgerPay's global ecommerce merchants to follow a Zero Trust model and securely connect to their online stores

 Cloudflare Products 
* [  Access ](/sase/products/access/)

 Products Used 

Access Workers Zero Trust 

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
{"@context":"https://schema.org","@type":"WebPage","name":"BridgerPay","description":"Cloudflare Access allow BridgerPay's global ecommerce merchants to follow a Zero Trust model and securely connect to their online stores.","url":"https://www.cloudflare.com/case-studies/bridgerpay/","inLanguage":"en"}
```
