---
title: Hapag-Lloyd &amp; Cloudflare | Customer Story
description: Cloudflare helps Hapag-Lloyd consolidate security and performance, cut costs, and improve reliability worldwide.
image: https://images.ctfassets.net/slt3lc6tev37/6yrtCaucx5pm9mwhEuYngu/d8f9b68c72bf216b503d0fe5024e02c1/hapag_lloyd_meta_image.png
---

# Hapag-Lloyd

> #### "  Cloudflare has really made our lives easier. Everybody who has a single sign-on can use it right away without any hassle. Developers can stay focused on delivering solutions to our customers. " 

## Hapag-Lloyd builds a faster, more reliable digital backbone with Cloudflare

Hapag-Lloyd is the world's fifth-largest container shipping company, moving essential goods like medicine, cars, and consumer products across more than 140 countries. Based in Germany, the company operates at massive scale while holding themselves to a simple but demanding mission: To be the undisputed leader in quality from the customers' perspective.

### Challenge: Delivering a quality user experience at global scale

As Hapag-Lloyd continued to invest in their customer-facing applications, they adopted more and more security and network connectivity services, making the overall stack harder to manage. Simple policy and network changes took longer than they should have. It was difficult to see what kind of traffic was hitting the platform. Security teams struggled to detect malicious traffic — particularly content scraper bots — and to block them quickly.

"I didn't have any visibility on how many bots we had, how the bots were using our systems, or how we could mitigate the bot issues," says Björn Klatt, Director of the Web and Mobile team at Hapag-Lloyd.

Hapag-Lloyd's operations in China raised the stakes even further. The company depended on a separate provider to manage connectivity and security on China's unique network architecture. This operational split made it harder to compare performance, troubleshoot issues, and deliver consistent customer experiences.

The team needed a simpler way to protect their platforms, improve performance, and support customers everywhere — without slowing developers down or adding operational burden.

### Protecting the online platform and cutting bot-driven costs

Hapag-Lloyd protects their online platform — which hosts critical customer-facing applications — using [Cloudflare WAF](https://www.cloudflare.com/application-services/products/waf/) and [Cloudflare Bot Management](https://www.cloudflare.com/application-services/products/bot-management/). These security services sit in front of customer-facing applications at the network edge, giving Hapag-Lloyd's team clear visibility into incoming traffic and improving their ability to respond quickly when something looks off.

Before adopting this approach, Hapag-Lloyd found it difficult to distinguish between legitimate partner bots — which they needed to allow access to data — and malicious content scraper bots. As a result, malicious bots were able to frequently scrape schedules and tracking data, driving up bandwidth consumption and network costs.

That changed once traffic filtering moved to the edge. Malicious bot traffic dropped to almost zero, and unwanted requests were blocked before reaching internal systems.

"Before, the bots already hit our network," Klatt says. "But now, Cloudflare prevents this network hit and saves several thousand euros per month." 

The team also gained flexibility they didn't have before. With Cloudflare, bot policies can be configured per domain, allowing different thresholds and responses for global traffic vs. China-specific traffic. Approved partners that legitimately need access can be accommodated through dedicated routes, without weakening security for everyone else.

### Improving speed and reliability in China with a unified network approach

China is a critical market for Hapag-Lloyd, and performance there directly affects customer satisfaction and trust. Historically, the company relied on a dedicated China network provider to handle latency and reliability challenges, while using different providers for other regional needs.

To simplify that model, the team began evaluating whether Cloudflare could support both global and China-specific delivery. Performance was measured closely, comparing results against existing providers.

Once performance matched expectations, Hapag-Lloyd gradually transitioned traffic in China to the same network used elsewhere. Today, the company sees average website delivery times of around three seconds in China, while competitors often start at eight seconds or more. Reliability has also improved significantly, increasing to about 98% compared to previous dips as low as 90%.

"Now, with Cloudflare, we have one provider there, which we can challenge," Klatt says. "Which is a nice position to be in."

### Streamlining architecture and lowering costs with integrated storage and video

Hapag-Lloyd also saw dramatic benefits after further consolidating their digital architecture with Cloudflare R2 and Cloudflare Stream.

The team replaced their previous solutions with [Cloudflare R2](https://www.cloudflare.com/developer-platform/products/r2/), Cloudflare's object storage service, which helps store and deliver static web assets. The result is a unified architecture that's easier to manage, faster for customers, and less expensive to operate.

"We saw a cost reduction of 10% compared to our previous solutions, which is nice to have," Klatt says, adding that R2 ensured faster delivery of static assets to customers.

Hapag-Lloyd also transitioned video delivery to [Cloudflare Stream](https://www.cloudflare.com/developer-platform/products/cloudflare-stream/) after finding it was both faster and more cost-effective than their previous Azure-based service. While these changes may seem incremental, together they reduce complexity and reinforce the company's focus on quality and efficiency across every digital touchpoint. With Cloudflare Stream, Hapag-Lloyd's engineers do not need to manage video streaming and playback infrastructure — and can concentrate instead on shipping software. 

### Replacing VPNs with zero trust access for developers

To modernize access to their internal systems, Hapag-Lloyd replaced their traditional VPNs with [Cloudflare Access](https://www.cloudflare.com/zero-trust/products/access/), a [zero trust network access (ZTNA)](https://www.cloudflare.com/learning/access-management/what-is-ztna/) solution. Today, around 300 developers use single sign-on identity verification to authenticate access to Hapag-Lloyd's critical engineering environments. 

This approach supports the developer team's flexible working model. Third-party partners and controls can be onboarded quickly for testing, offboarded just as easily, and unused capacity doesn't linger. From end to end, the user experience is fast and helps developers maximize their productivity without operational headaches. 

"Cloudflare has really made our lives easier. Everybody who has a single sign-on can use it right away without any hassle," Klatt says. "Developers can stay focused on delivering solutions to our customers. I think that's the best praise we can give."

### Unifying performance, security, and developer services on Cloudflare's connectivity cloud

What makes this transformation sustainable is that these improvements don't operate in isolation. Hapag-Lloyd runs Cloudflare WAF, Bot Management, China Network, R2 object storage, Stream , Workers, and Zero Trust on a [connectivity cloud](https://www.cloudflare.com/connectivity-cloud/) — a unified global platform that integrates network connectivity, security, and developer services on a single architecture.

Instead of managing separate tools across regions and functions, the team applies consistent policies, performance optimizations, and identity controls across their entire environment. That unified approach reduces operational complexity while strengthening resilience, visibility, and scalability, giving Hapag-Lloyd a digital foundation that supports their mission to deliver a quality user experience worldwide.

### What's next: Continuing a long-term journey with Cloudflare

Hapag-Lloyd views their work as an ongoing journey rather than a one-time transformation. Over the years, the team has steadily expanded the services they use, adding new capabilities as needs shift and challenges emerge.

"It's always something new and exciting," Klatt says.

Looking ahead, the team plans to continue replacing remaining VPN connections with [Cloudflare Zero Trust](https://www.cloudflare.com/zero-trust/products/access/), explore [Cloudflare Workers](https://www.cloudflare.com/products/workers/) as a potential alternative to AWS Lambda, and evaluate new AI-driven capabilities as they become relevant. The focus is on staying flexible and continuing to improve how teams build and operate digital experiences — with less complexity over time.

![Hapag-Lloyd logo](https://cf-assets.www.cloudflare.com/slt3lc6tev37/5l90tbVQdTHipEbyBMgqcU/dad1fd451b49c25c430211612ad1e772/hapag_lloyd_logo.png) 

Cloudflare helps Hapag-Lloyd consolidate security and performance, cut costs, and improve reliability worldwide.

 Cloudflare Products 
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  Bot Management ](/products/bot-management/)
* [  China Network ](/application-services/products/china-network/)
* [  Cloudflare Stream ](/developer-platform/products/cloudflare-stream/)
* [  R2 ](/developer-platform/products/r2/)
* [  Workers ](https://workers.cloudflare.com/)
* [  Zero Trust Network Access (ZTNA) ](/products/access/)

 Details 

 Industry 

Manufacturing 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Hapag-Lloyd & Cloudflare | Customer Story","description":"Cloudflare helps Hapag-Lloyd consolidate security and performance, cut costs, and improve reliability worldwide.","url":"https://www.cloudflare.com/case-studies/hapag-lloyd/","inLanguage":"en"}
```
