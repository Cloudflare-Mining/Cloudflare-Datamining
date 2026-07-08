---
title: Applied Systems &amp; Cloudflare | Case Study
description: Applied Systems unifies security and networking with Cloudflare, reducing risk, improving productivity for employees, and delivering superior cloud-native experiences for customers
image: https://www.cloudflare.com/preview.png
---

# Applied Systems

> #### "  By consolidating controls onto Cloudflare rather than the many control planes of multiple-vendor systems, my teams can focus on driving business forward. I don't know of a lot of security teams that can say that. " 

## **Consolidating security across employees, applications, and networks to accelerate digital transformation**

Founded in 1983, Applied Systems builds SaaS solutions for the insurance industry. Based in Chicago, the company has over 2,500 employees across the US, UK, Canada, Western Europe, and India. Applied Systems is a global leader in the insurance industry, serving independent insurance brokerages of all sizes – from international and enterprise companies to local agencies and SMBs.

Applied Systems has won global recognition for its pioneering approach to insurtech, including awards as the [Best Broker Software Management House](https://awards.insurancetimes.co.uk/techawards/winners4568/) in the UK for 2022 by Insurance Times and first place in its category at the [US 2023 Golden Bridge Business and Innovation Awards.](https://www1.appliedsystems.com/en-us/news/press-releases/2023/applied-systems-wins-gold-in-the-15th-annual-2023-golden-bridge-awards/)

### **Challenge: Accelerating digital transformation**

Security has always been of paramount importance to Applied Systems. The company must safeguard large volumes of financial data, payment records, personally identifiable information (PII), and other regulated and sensitive classes of information for its insurance customers.

With the introduction of a new CEO and executive team in 2019, Applied has increasingly prioritized digital transformation initiatives to help it serve larger, more demanding enterprise customers. When Chief Information Security Officer Tanner Randolph started in 2021, this meant re-evaluating Applied's technology architecture, seeking opportunities to become more agile, more efficient, and more secure. 

"Applied is on a journey. We're rapidly accelerating into a cloud-native company," he says. "When I joined, we had various components from different security vendors like Zscaler and Cisco and different networking paths to our data centers. Over the past few years, we've really focused on consolidating around a unified security and networking stack."

Starting in 2022, Applied Systems began consolidating large swaths of security and networking functionalities on Cloudflare, including:

* Protections and performance enhancements across public-facing websites and apps
* [Secure](https://www.cloudflare.com/network-services/solutions/enterprise-network-security/) and scalable connectivity [across network infrastructure](https://www.cloudflare.com/the-net/network-infrastructure/)
* Zero Trust security posture for employees and internal resources

"By consolidating controls onto Cloudflare rather than the many control planes of multiple-vendor systems, my teams can focus on driving the business forward," he continues. " I don't know of a lot of security teams that can say that." 

### **Protecting websites and applications**

One major impetus for evaluating Cloudflare was the need to modernize software experiences for customers, particularly as they migrated functionality from Applied Systems' heritage thick client apps to SaaS environments.

"We wanted to build a partnership with a vendor that was cloud-native and understood what cloud native customers expected," says Randolph. "That way, we could consistently deliver great and secure experiences for our customers across our newest applications."

Applied Systems has deployed Cloudflare's application services, including [web application firewall (WAF)](https://www.cloudflare.com/application-services/products/waf/), [content delivery network (CDN)](https://www.cloudflare.com/application-services/products/cdn/), [DDoS mitigation](https://www.cloudflare.com/ddos/), and [rate limiting](https://www.cloudflare.com/application-services/products/rate-limiting/), to block malicious traffic and improve performance across its apps. According to Randolph, the reliability of Cloudflare has helped ease the process of migrating Applied Systems' web-facing apps to the cloud.

"Cloudflare has been extremely performant and consistent in securing our applications against malicious traffic and reducing latency across the board," he says. 

### **Securing network connections**

To support its business growth and ambitions, Applied Systems has streamlined its architecture for network connectivity with Cloudflare, specifically implementing [Magic Transit](https://www.cloudflare.com/network-services/products/magic-transit/) and [Cloudflare Network Firewall](https://www.cloudflare.com/network-services/products/network-firewall/), a [firewall-as-a-service](https://www.cloudflare.com/learning/cloud/what-is-a-cloud-firewall/). Together, as the company has grown, these services have accelerated network traffic, protected against threats (including L3 DDoS attacks), and enabled administrators to apply security filters when necessary.

"Cloudflare scales with us — that's our biggest win," says Randolph. "As our largest customers switch over to our cloud-native deployments, Cloudflare can handle the increased traffic without us adding network appliances or buying additional bandwidth. Using our previous vendors would have more than doubled our costs."

Applied Systems has been particularly agile in expanding and layering firewall policies. Its first firewall policies were basic — like blocking traffic from certain geographies. Over time, however, Applied Systems has begun writing its own firewall rules based on [log data](https://developers.cloudflare.com/logs/reference/log-fields/zone/firewall%5Fevents/) analyzed in its [SIEM](https://www.cloudflare.com/learning/security/what-is-siem/) and automating the deployment of those custom rules by leveraging Cloudflare's [API-based integration with Terraform](https://developers.cloudflare.com/terraform/), the infrastructure-as-code tool.

"We have seen a dramatic reduction in the amount of threat traffic. Being able to write universal rules across all of our data centers is amazing," he says. "Adopting DevOps best practices and using automation has made us extremely efficient at rolling out changes with Cloudflare."

### **Adopting Zero Trust and replacing Zscaler and Cisco**

Adopting a [Zero Trust](https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/) architecture was a top priority for Randolph when he joined. 

Previously, Applied Systems used Zscaler and Cisco services — specifically, Zscaler Internet Access for outbound connections to the Internet and Cisco AnyConnect VPN for access to internal apps. According to Randolph, managing these disparate point solutions created complexity and visibility gaps for his team and projected to be expensive in the long run as the company continues to grow. 

He also cited a few pain points specific to each service: Developers complained frequently about Zscaler blocking work-critical websites and hurting productivity, and in response, Applied Systems began relaxing policies and accepting more risk than it wanted. The Cisco AnyConnect VPN was not only sluggish for end users, but also created excessive risk by granting employees access to the entire network, as opposed to verifying each request to specific apps. 

Replacing these vendors with [Cloudflare Zero Trust](https://www.cloudflare.com/sase/) has helped Applied to unify [security controls](https://www.cloudflare.com/learning/ai/what-is-ai-security/) across web, cloud, and private app environments. 

"We have received great feedback on Cloudflare Zero Trust — it's easier to deploy and better for our employees," he says. "We are much more secure as an organization with the same amount of time available to us."

### **Use case: Default-deny access to self-hosted apps**

Specifically, Cloudflare's Zero Trust Network Access (ZTNA) service has helped Applied Systems [implement more granular policies](https://www.cloudflare.com/learning/access-management/how-to-implement-zero-trust/) across its self-hosted applications and infrastructure for all 2500+ employees.

"Cloudflare has helped us transition from a default-allow to a default-deny security posture," Randolph says. "We have posture checking in place, so we can grant access based on what we know about what user group you're in, what device you're on, and more."

The security team has flexibility to apply more rigorous or less rigorous controls to meet different user needs and fit the risk level of the application. For example, employees with Cloudflare's device client deployed on a personal device can still access their HR portal to submit vacation requests, but developers must be on a managed device and pass more stringent checks to access comparatively higher-risk production environments.

### **Use case: Securing emerging AI tools and protecting data**

Cloudflare Zero Trust also helps Applied Systems secure how users interact with and use sensitive data in emerging artificial intelligence (AI) tools like ChatGPT.

Specifically, Applied runs the public instance of ChatGPT in a Cloudflare [isolated browser](https://www.cloudflare.com/learning/access-management/what-is-browser-isolation/). By running all web code for this ChatGPT tool on the Cloudflare network, Randolph's security team can control how users manipulate data in the tool — including restricting download, upload, copy-paste, and more.

"We wanted to let employees take advantage of AI while keeping it safe," says Randolph. "We prevent users from copying and pasting sensitive data from other apps into our isolated instance of ChatGPT, which prevents a lot of company info from being exposed to the tool."

Isolating ChatGPT has helped the company be more secure while experimenting with the tool, which in turn gave confidence for Applied Systems to build and improve its own instance in Slack. This use case speaks to Randolph's broader approach to data protection: security controls should be "pragmatic" and not come at the expense of workforce productivity. 

"We're taking this philosophy to email," he says. "People want to be able to check their personal email, but they don't necessarily need to be able to copy/paste, upload/download in their personal email."

Deploying Cloudflare services like [email security](https://www.cloudflare.com/learning/email-security/what-is-email-security/), [cloud access security broker (CASB)](https://www.cloudflare.com/learning/access-management/what-is-a-casb/), and [data loss prevention (DLP)](https://www.cloudflare.com/learning/access-management/what-is-dlp/) will help Randolph and team continue to extend control and visibility across more environments and data. The business will be equipped not only to protect information, but also to comply with evolving regulations across the U.S. and globally.

"When we get asked about regulatory compliance by our customers, we can just tell the CISO on the other side that we are Cloudflare customers and explain the products we are using," he says. "That usually answers the questions they would normally ask."

### **What's next**

Investing in new security controls goes hand-in-hand with investing in a high-quality IT and security experience. To that end, Applied Systems was an early adopter of Cloudflare [Digital Experience Monitoring (DEX).](https://www.cloudflare.com/learning/performance/what-is-digital-experience-monitoring/) DEX provides historical and real-time visibility into end user and device connectivity, application performance, and network connections across an organization.

"The more information we have available to us, the more effective my teams can be in delivering IT that keeps our employees productive," says Randolph. "Tools like Cloudflare DEX have the potential to make a huge difference in equipping us with the visibility and insights to drive future development decisions."

### **Working with Cloudflare**

In just a few years, Applied Systems has already made significant progress consolidating and modernizing security across its employees, [applications](https://www.cloudflare.com/application-services/solutions/), and network with Cloudflare. 

Working so closely with Cloudflare across multiple types of deployments has helped strengthen the responsiveness and quality of customer support over time, particularly as Cloudflare's teams become more familiar with Applied's architecture.

"I can see the difference on a month-to-month basis in terms of the quality of the product and support," says Randolph. "With Cloudflare backing us, my teams work more effectively and can focus on our security strategy."

![Applied Systems logo](https://images.ctfassets.net/slt3lc6tev37/4rqhRHQTLc1hKqOO33owO4/a1f6d8dcbdec0f065e2e8cb818085ac9/Applied_Logo_2C_2021_1200x600.svg) 

Applied Systems unifies security and networking with Cloudflare, reducing risk, improving productivity for employees, and delivering superior cloud-native experiences for customers

 Cloudflare Products 
* [  Application Services ](/application-services/)
* [  Access ](/sase/products/access/)
* [  Email Security ](/sase/products/email-security/)
* [  Browser Isolation ](/sase/products/browser-isolation/)
* [  Cloudflare Network Firewall ](/network-services/products/network-firewall/)
* [  Magic Transit ](/network-services/products/magic-transit/)

 Products Used 

Access Magic Transit Zero Trust Browser Isolation 

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
{"@context":"https://schema.org","@type":"WebPage","name":"Applied Systems & Cloudflare | Case Study","description":"Applied Systems unifies security and networking with Cloudflare, reducing risk, improving productivity for employees, and delivering superior cloud-native experiences for customers","url":"https://www.cloudflare.com/case-studies/applied-systems/","inLanguage":"en"}
```
