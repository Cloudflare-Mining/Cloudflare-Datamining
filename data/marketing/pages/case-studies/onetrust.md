---
title: OneTrust | Cloudflare
description: Cloudflare Workers acts as OneTrust serverless architecture, and Cloudflare security and access management solutions enhance OneTrust's context-aware zero trust security.
image: https://www.cloudflare.com/preview.png
---

# OneTrust

> #### "  We've implemented Cloudflare's products across our business - from our core customer cloud product to our internal company apps and websites. Cloudflare is an integral part of OneTrust's privacy, security, and governance technology solution and helps us differentiate in the market. " 

## OneTrust integrates Cloudflare solutions into its own infrastructure & customer applications

OneTrust helps companies be more trusted and use technology to make trust a competitive advantage. It is the fastest-growing privately held company in the U.S., with a stunning 48,000% three-year growth rate. Over 7,500 businesses worldwide utilize OneTrust's SaaS solutions to manage privacy, security, and governance to comply with regulations such as the CCPA, GDPR, LGPD, PDPA, and ISO27001\. 

### **Challenge: Deploy efficient, scalable, and cost-effective performance & security solutions to support tremendous growth**

When CTO Blake Brannon first joined OneTrust, the company was using its cloud service provider's native security tools to protect its SaaS platform, as well as the cloud provider's compute function to run custom code for its most visible product: website cookie banners. Access to OneTrust's internal apps was protected by a VPN. Brannon wanted more efficient, scalable, and cost-effective performance and security solutions to support the company's tremendous growth. 

"OneTrust is growing very quickly, and international privacy regulations are continuously changing," Brannon explains. "We need agility and the ability to scale quickly and efficiently. The solutions we were using weren't robust enough to handle our growth."

OneTrust started with Cloudflare's core performance and security suite, including Cloudflare WAF. As OneTrust grew, the company added Rate Limiting, Argo Smart Routing, SSL for SaaS, Workers, and Access.

### **Cloudflare Workers halves latency & dramatically reduces egress costs**

Cloudflare Workers acts as OneTrust's serverless architecture, helping the company deliver crucial product features while minimizing latency, costs, and development time. 

One such product is OneTrust's [Cookie Consent](https://www.onetrust.com/products/cookie-compliance/) product, privacy pop-up banners that are personalized based on each site visitor's location. These banners — which are often key to complying with the GDPR, the California Consumer Privacy Act (CCPA), and other regional privacy regulations — appear when a visitor from a jurisdiction covered by one of these regulations visits a website. The banners inform visitors that their data may be collected and used for certain purposes and to obtain their consent to use the data. 

"Until a user sets their consent preferences, certain functions on the website, such as tracking functions, stay off until the user gives consent," Brannon explains. "The banners depend on custom code that runs a geo-locator to look up the visitor's jurisdiction, then dynamically load the appropriate policy banner. Depending on where a visitor is located, they may not need to see a banner at all, or they may need to see one that disables certain functions but not others."

Prior to implementing Cloudflare Workers, OneTrust used their cloud services provider's compute functions to run the code for these banners. This added a lot of complexity to the code and development process. Additionally, because the service gets approximately 64 billion hits each week, OneTrust also encountered latency issues and very high egress costs. Switching to Workers significantly reduced costs and latency. "It was massive," Brannon says. "Latency was halved, and our costs went down by 90%." 

OneTrust also used Workers to deploy a new product feature that synchronizes a visitor's consent across devices. "If a user visits a website on a desktop and provides their consent preferences, Workers pulls that consent down to their other devices, which is very convenient for the user. Additionally, user content preferences are delivered through a Worker node closest to their geographic location, which dramatically speeds things up." 

Workers now acts as OneTrust's serverless architecture. In addition to saving the company money and enabling it to build low-latency applications, Workers has improved internal development processes. "Because Workers is a highly distributed architecture, I don't have to spend time with my team figuring out how to build features to be highly available. Our time to market has dramatically sped up, and we know that anything we code through Workers will meet our service-level agreements (SLA) for high availability."

### **Cloudflare performance & security solutions are tightly integrated into OneTrust's SaaS platform**

OneTrust uses Cloudflare products on approximately 33 top-level domains and about 16,000 subdomains, and the company just exceeded 2 petabytes of traffic a month served through the Cloudflare CDN. Thanks to Cloudflare SSL for SaaS, all OneTrust customers have the option of deploying a vanity domain.

"We've implemented Cloudflare's products across our business - from our core customer cloud product to our internal company apps and websites. Cloudflare is an integral part of OneTrust's privacy, security, and governance technology solution and helps us differentiate in the market." -- Blake Brannon, CTO

The Cloudflare WAF blocks over 30 million threats a month for OneTrust. It also provides Brannon and his team with visibility into security threats and granular control over policies. "The WAF is simple but very powerful. Some of our API calls are very open, and others are very restrictive. The WAF enables us to easily create very specific policies for individual pages within our app."

OneTrust's cloud services bill would be much higher without Cloudflare. "We have many large enterprise customers, so there's a huge amount of compute and performance on the server side, and demand is growing," he says. "Thanks to Cloudflare's CDN, Rate Limiting, and traffic shielding, everything isn't coming back to our Azure account. In addition to saving money, we're able to scale globally while maintaining high performance and reliability."

### **Cloudflare Access enables seamless, secure connections to internal apps**

Prior to implementing Access, OneTrust secured some of its internal apps using Azure AD with multi-factor authentication (MFA), and others through IP restrictions, a VPN, or both. Brannon did not want to depend on a VPN. It required users to be on-site, and all of the traffic from the VPN had to travel through its three corporate offices. "We have 12 global offices, and all of that traffic coming back to our firewall/VPN system made zero sense. Then, the COVID-19 pandemic happened, and it made even less sense."

After a successful pilot of Cloudflare Access in OneTrust's development environment, Brannon secured the remainder of OneTrust's internal environment behind Access. Now, all of the company's developers and testers use it, aout 550 people. Feedback from users has been overwhelmingly positive, and Access has improved OneTrust's security posture. "In addition to integrating Access with our Azure AD infrastructure and MFA, all of our highly sensitive services, which require a hardware-generated certificate, are mapped back to our Access controls. Access greatly increased our security posture over VPN, which didn't even support MFA."

Access has also improved employee efficiency. "Some of our users wanted to use mobile for virtual meetings, but our VPN didn't support it; Access does. Meetings go more smoothly because users don't experience latency issues that require them to disconnect and reconnect. That was a big problem with the VPN." 

### **Cloudflare enables OneTrust to focus on its core competency**

With Cloudflare solutions integrated into its IT infrastructure and customer application, OneTrust's developers are able to spend less time on administrative tasks and more time on projects that further the organization's goals.

"OneTrust relies on Cloudflare to maintain our network perimeter, so we can focus on delivering technology that helps our customers be more trusted," Brannon adds. "With Cloudflare, we can easily build context-aware Zero Trust policies for secure access to our developer tools. Employees can connect to the tools they need so simply teams don't even know Cloudflare is powering the backend. It just works."

![OneTrust logo](https://images.ctfassets.net/slt3lc6tev37/7LlGbIRbzwjQUcR7wMGih/32f4568927e7f93ce1f2d734438f98d3/onetrustlogo_new.png) 

Cloudflare Workers acts as OneTrust serverless architecture, and Cloudflare security and access management solutions enhance OneTrust's context-aware zero trust security.

 Cloudflare Products 
* [  Workers ](https://workers.cloudflare.com/)
* [  Access ](/sase/products/access/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)

 Products Used 

WAF Workers Access Zero Trust 

 Details 

 Industry 

High Technology 

 Region 

North America 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"OneTrust | Cloudflare","description":"Cloudflare Workers acts as OneTrust serverless architecture, and Cloudflare security and access management solutions enhance OneTrust's context-aware zero trust security.","url":"https://www.cloudflare.com/case-studies/onetrust/","inLanguage":"en"}
```
