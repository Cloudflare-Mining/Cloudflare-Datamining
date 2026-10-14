---
title: Caliente &amp; Cloudflare | Customer Story
description: Learn how Caliente.mx used Cloudflare to cut latency by 56%, strengthen security, and deliver faster, more reliable betting.
image: https://images.ctfassets.net/slt3lc6tev37/sOvE1WhMMLneHD2Dku8VL/3f942b314949102c542b19fd3c3635ed/Grupo-Caliente-Logo.png
---

# Caliente

> #### "  One of the things we wanted to do is consolidate all those providers into one if it was possible. We must provide the best experience while ensuring security for ourselves and our platforms. The way Cloudflare helps us to do that is by letting us connect people faster to their platform, to what they're trying to see, serving them better from data centers within Mexico. " 

Caliente.mx is Mexico's leading online gambling company, holding a 90% market share and serving millions of customers across the country. Since its launch in 2014, Caliente.mx has grown its online division into a national powerhouse. The platform offers a wide list of digital experiences, including popular casino gaming, slot machines, sports betting, and exclusive live streaming of major sporting events. As its customer base has grown, so has the company's focus on reliability, security, and modernizing its digital infrastructure to keep pace with that scale.

What makes Caliente.mx unique is the scale and sensitivity of its services to customers in cities and rural areas of Mexico, where a single second of delay or downtime can mean lost trust and revenue. Few platforms in the region operate at this scale while requiring split-second reliability. That becomes especially critical during unpredictable, high-stakes moments, such as a last-minute goal or a knockout punch in a boxing match.

### Single vendor solution improved performance and scalability

Before partnering with Cloudflare, Caliente.mx managed a fragmented infrastructure. They relied on several different providers for various needs such as a content delivery network (CDN) and individual security tools. The disparity created a challenge to get a single view of what was happening across the platform. So, when traffic spikes grew during major sports moments, conventional autoscaling couldn't react fast enough to absorb these spikes without risking outages. For an organization built on real-money and real-time wagers, that risk carried real financial consequences.

"One of the things we wanted to do is consolidate all those providers into one if it was possible," says Lior Gross, Director of Technology at Caliente.mx. "We must provide the best experience while ensuring security for ourselves and our platforms"

Caliente.mx partnered with Cloudflare to bring security, performance, and developer tools together on a single, modern cloud platform. They sought a partner that could provide serverless infrastructure that scaled automatically without manual configuration, and a network with a strong presence for Mexico to serve customers faster and more reliably than their existing cloud provider, which had no local data centers.

"The way Cloudflare helps us to do that is by letting us connect people faster to their platform, to what they're trying to see, serving them better from data centers within Mexico," says Gross. Caliente.mx now operates on nearly the entire Cloudflare platform— one modern cloud platform for security, connectivity, and development.

### From autoscaling to serverless scale

Before using Cloudflare's developer platform, managing high-load streaming events was difficult because their infrastructure was not equipped to handle immediate, unpredictable traffic spikes. Specifically, when broadcasting exclusive sports matches, the previous infrastructure experienced issues that caused service interruptions, preventing customers from watching the events.

Caliente.mx migrated its core components to the Cloudflare developer platform, utilizing Cloudflare Workers and Cloudflare Containers. The move allowed the team to offload the challenges of server configuration and manual auto-scaling to Cloudflare's infrastructure. Developers can now focus on writing software rather than managing the overhead of virtual machines or server load balancers.

"With Cloudflare Workers, we were able to sign our streams so they're unique and can't be stolen or abused from outside our platform," says Gross. "We also built a custom Worker that tracks the streaming data and writes it to D1 in real time." Since moving these streaming components to Cloudflare, Caliente.mx has not experienced any interruptions during live programming.

The Cloudflare developer platform capability is critically important to their business for the following reasons:

* **Content Protection**: Using Workers to sign streams ensures that the content is unique and secure, preventing unauthorized parties from stealing or abusing the streams to offer them outside of the Caliente platform.
* **Operational Reliability**: Since exclusive streaming is a core offering, any downtime or interruptions directly impact the customer experience. Because live betting is highly sensitive to delays, even a millisecond of lag or a service outage can drive customers to competitors.
* **Seamless Scalability**: Migrating these components to the Cloudflare developer platform allows them to handle massive, immediate spikes in traffic—such as those triggered by a sudden goal or a knockout punch—without the overhead or reliability risks associated with conventional autoscaling.

### Securing Caliente.mx with API Shield

As a company that processes high volumes of online transactions, it is critical that Caliente.mx manages cyber attacks. With Cloudflare WAF and Cloudflare API Shield, the company has reduced attempted bot and exploit attacks while gaining visibility into its full API footprint that it didn't have before. As example, this led the team to discover an endpoint that had been exploited by a former employee.

"Prior to using Cloudflare, we had no visibility into the APIs we had exposed," says Gross. "API Shield gave us the ability to observe and act on data." The Cloudflare WAF dashboard has become part of the team's daily routine, used to monitor activity and spot any patterns from the previous 24 hours. Caliente.mx further consolidated fragmented security tools, adopting Cloudflare's SASE platform and Cloudflare Email Security alongside API Shield as a unified, simplified security posture.

Beyond strengthening security, Cloudflare also helped improve application performance. Bringing Cloudflare CDN, Cloudflare Argo Smart Routing, and Cloudflare's Mexico-based network together was significant for the team and the company. By doing so, Caliente.mx cut latency by 56% and now caches 99.7% of eligible traffic — a 90% reduction in requests reaching origin servers. Consolidating security, networking, and developer services on one platform helped improve responsiveness while reducing latency. When delayed odds updates or slow page loads can drive customers to a competitor, these enhancements provide a faster, more dependable experience and help reduce support requests for the team.

The impact of routing through local Mexican data centers was significant for customers in rural areas, where internet connectivity can be less reliable. Cloudflare now enables Caliente.mx to connect those customers more securely while delivering faster, more reliable service.

"By using Cloudflare, we are able to route traffic through data centers in Mexico so our users receive faster responses and can place bets more quickly," says Gross. "At the same time, our systems remain securely interconnected and fast enough to eliminate delays in algorithms, betting options, odds, scores, and everything our users see in real time."

### What's next: Modernizing infrastructure with AI integrations

Looking ahead, Caliente.mx is exploring ways to modernize its infrastructure by building new AI-powered components. The company plans to host and deploy these features using Cloudflare's computing capabilities to keep processing as close to end users as possible. Gross sees Cloudflare's expanding network of points of presence across Mexico as key to bringing that infrastructure even closer to customers as these initiatives progress.

The partnership with Cloudflare has grown around a shared mission to help build a better, faster, and more secure Internet for millions of users in Mexico. Gross says one of Caliente's biggest advantages is the reliability of a trusted partner like Cloudflare. "A company I trust, that listens, and that innovates together with its customers." As Caliente.mx continues to grow, that combination of serverless scale, consolidated security, and a hands-on partnership positions the company to continue delivering a fast, secure experience for millions of customers across Mexico.

![Caliente logo](https://images.ctfassets.net/slt3lc6tev37/sOvE1WhMMLneHD2Dku8VL/3f942b314949102c542b19fd3c3635ed/Grupo-Caliente-Logo.png) 

Mexico's leading online gambling company consolidates security, performance, and developer tools to scale for millions of users.

 Cloudflare Products 
* [  Workers ](https://workers.cloudflare.com/)
* [  Durable Objects ](https://www.cloudflare.com/products/durable-objects/)
* [  D1 ](https://www.cloudflare.com/products/d1/)
* [  R2 ](https://www.cloudflare.com/products/r2/)
* [  Containers ](https://www.cloudflare.com/products/containers/)
* [  Load Balancing ](https://www.cloudflare.com/products/load-balancing/)
* [  Stream ](https://www.cloudflare.com/products/stream/)
* [  WAF ](https://www.cloudflare.com/products/waf/)
* [  API Shield ](https://www.cloudflare.com/products/api-shield/)
* [  Zero Trust ](https://www.cloudflare.com/sase/)
* [  Email Security ](https://www.cloudflare.com/products/email-security/)

 Details 

 Industry 

Online Betting and Sports Gaming 

 Region 

Latin America & the Caribbean 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Caliente & Cloudflare | Customer Story","description":"Learn how Caliente.mx used Cloudflare to cut latency by 56%, strengthen security, and deliver faster, more reliable betting.","url":"https://www.cloudflare.com/case-studies/caliente/","inLanguage":"en"}
```
