---
title: PhonePe &amp; Cloudflare | Video
description: Improving PhonePe — Accelerating and securing over 3.6 billion monthly mobile payment transactions with Cloudflare
image: https://www.cloudflare.com/preview.png
---

# PhonePe

> #### "  Using the Cloudflare WAF, we cut off more than 90% of malicious attacks by restricting traffic to sources within India. It gives us peace of mind to know that because everything flows through Cloudflare, we can protect our ingress and egress and keep our customers' data and money safe. " 

## **Improving PhonePe — Accelerating and securing over 3.6 billion monthly mobile payment transactions with Cloudflare**

Mobile payment systems are changing how the world transacts, and no country has adopted digital payments more rapidly and on a larger scale than India. PhonePe leads that paradigm shift. 

With a user base of nearly one in every four Indian citizens, PhonePe is a clear leader in the Indian digital payment space and in India's premier mobile payment platform [in every metric](https://inc42.com/buzz/phonepe-maintains-lead-in-upi-with-49-market-share-in-jan-2022-whatsapp-at-0-02/), consistently outperforming competitors. 

### **The Challenge: Ensuring compliant, secure, and low-latency financial transactions during daily high-traffic clusters**

Scaling to meet their rapid growth — PhonePe has over 435 million registered users and processes over 3.6 billion transactions monthly. Given the scale the company operates at, PhonePe was under pressure to provide secure, frictionless and quick service. 

With their peak periods defining their network requirements, PhonePe sought a content delivery network (CDN) with the elasticity to absorb every daily traffic surge. More importantly, that solution had to handle dynamic traffic without introducing any latency that might undermine the user experience.

"Each transaction should take three seconds to complete — as that time increases, people lose patience. Once a transaction reaches 12 seconds, our users assume we are having problems, and volumes drop to zero as they turn to our competitors," says Burzin Engineer, PhonePe Co-founder and Chief Reliability Officer. 

Because the quality of their customer experience is so significant to customer retention, PhonePe also needed a way to manage and efficiently deliver their static image and video content. 

Next, as a fintech platform partnering with banks, PhonePe wanted a single solution to provide real-time protection against threats like DDoS, malicious bots, and SQL injections. It also had to ensure instantaneous financial transactions on a massive scale. 

"Over 33 million merchants depend on PhonePe to fulfill their transactions, and we are under attack 24/7, 365 days a year," says Engineer. "We needed the right partner and security tooling to thrive."

### **Blocking malicious international traffic and promoting regulatory compliance with the Cloudflare WAF**

PhonePe selected Cloudflare as their [security solution](https://www.cloudflare.com/application-services/solutions/) and content delivery partner based on a shared commitment to providing modern solutions and exceptional customer service. 

"The Cloudflare tech stack interested us. Compared to the other vendors, it wasn't carrying the baggage of 20-year-old technologies," says Engineer. "Cloudflare was newer and had a modern API-driven CDN purpose-built from the ground up." 

The company leadership was also banking on Cloudflare's commitment to developing relationships in India and improving the topology of its content delivery infrastructure nationwide.

PhonePe began with the Cloudflare core security portfolio. With all of PhonePe's business conducted domestically, the Cloudflare Web Application Firewall (WAF), managed rulesets, and the ability to geo-block traffic resulted in immediate security benefits. 

"Using the Cloudflare WAF, we cut off more than 90% of malicious attacks by restricting traffic to sources within India," says Engineer. "It gives us peace of mind to know that because everything flows through Cloudflare, we can protect our ingress and egress and keep our customers' data and money safe."

Cloudflare plays a key role in ensuring PhonePe maintains that critical uptime. Monthly, it detected and neutralized 180 million threats to the PhonePe application layer. 

In addition to protecting PhonePe's applications, Cloudflare simplifies the security auditing process and helps the platform meet its compliance requirements. The announcement that Cloudflare will [comply fully](https://www.livemint.com/companies/people/will-become-data-localization-compliant-in-india-by-decend-11661716747206.html) with India's incoming data localization and data residency requirements by the end of 2022 further eased PhonePe's regulatory needs. 

### **Cloudflare Workers and Stream: serverless image resizing and adaptive bitrate video delivery for a smooth, responsive user experience**

With their security and compliance concerns addressed and their applications and networks protected, PhonePe concentrated on further enhancing their user experience using Workers and the API-first Cloudflare global network.

Initially, PhonePe optimized their millions of source images locally to ensure they were responsive on any device and to improve performance at the point of service. The resizing process required over 50 bare-metal origin servers — Cloudflare Workers eliminated the need for those machines. 

"Once we offloaded the dynamic resizing and delivery of images for over 200 devices to Workers, all we needed to provide was a single high-resolution source image," explains Engineer. "Workers resize, cache, and serve those images for us. It saves PhonePe resources, space and power. It also improves the user experience because it's faster."

With support from the Cloudflare engineering team, PhonePe conceived and implemented the change in under two months.

After the success of offloading their responsive image processing to the edge, PhonePe moved on to optimizing their video content delivery. They chose Stream, the [live](https://www.cloudflare.com/developer-platform/solutions/live-streaming/) and on-demand Cloudflare video service that dynamically adapts each stream to network conditions. The Stream service proved ideal for mitigating video delivery issues caused by inconsistent mobile internet performance.

"Stream changes bitrate based on available bandwidth," says Engineer. "Before we could choose from three bitrates but it was a one-time decision. Now, Stream changes rate dynamically and eliminates stall and jitter and improves our customer experience." 

Using Workers and the Cloudflare global network, PhonePe now offloads an average of 80% of the traffic from their origin servers and enjoys corresponding savings in bandwidth and a 10x reduction in infrastructure costs. In a month, Cloudflare serves 775 billion requests for PhonePe — over 289,000 requests per second and their merchant notifications and image resizing use cases trigger 50 billion Workers requests.

For PhonePe, where network and security issues directly affect their customers and merchant partners, proactive Cloudflare support translates to peace of mind. 

"It is comforting to have Cloudflare to tell us exactly what is happening, why it happened, and how the support team is coming together to fix it," says Engineer. "While no company can guarantee perfection, how they react to problems shows you their true character, and Cloudflare's character is impeccable."

![PhonePe logo](https://images.ctfassets.net/slt3lc6tev37/3Vjcj5r39nYQK9FAZ6tx1i/15048294cd989a6e460a61e56ad73d3e/PhonePe-horizontal-small2.png) 

PhonePe protects over 33 million merchants and provides a frictionless and low-latency customer experience to over 400 million registered users, using Cloudflare.

 Cloudflare Products 
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  Content Delivery Network (CDN) ](/application-services/products/cdn/)
* [  Cloudflare Stream ](/developer-platform/products/cloudflare-stream/)
* [  Workers ](https://workers.cloudflare.com/)

 Products Used 

Workers Stream CDN WAF 

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
{"@context":"https://schema.org","@type":"WebPage","name":"PhonePe & Cloudflare | Video","description":"Improving PhonePe — Accelerating and securing over 3.6 billion monthly mobile payment transactions with Cloudflare","url":"https://www.cloudflare.com/case-studies/phonepe/","inLanguage":"en"}
```
