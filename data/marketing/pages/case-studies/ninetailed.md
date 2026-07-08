---
title: Ninetailed &amp; Cloudflare | Case Study
description: Ninetailed uses Cloudflare Workers and Durable Objects to enable webpage personalization and experimentation at the network edge
image: https://www.cloudflare.com/preview.png
---

# Ninetailed

> #### "  Where Cloudflare Durable Objects really shines is linking data near the edge. I personally don't know another service that can provide that. " 

## **Ninetailed builds low-latency [personalization](https://ninetailed.io/blog/personalization-guide/?utm%5Fsource=partner&utm%5Fmedium=cloudflare&utm%5Fcampaign=case+study) solution on Cloudflare and gains 2-3x cost savings**

Ninetailed enables companies to build personalized web experiences for their customers. When a user requests a webpage, a company can access stored profile data via the Ninetailed API and use this information to customize even static, pre-cached web content.

Ninetailed's solution enables companies to run A/B testing and serve tailored content at the network edge. Their services are used by numerous major organizations, including Ruggable and Ace & Tate.

### **Challenge: Low-latency access to customer personalization data**

To personalize websites and simplify A/B testing, Ninetailed stores profile information for each customer. One of the main challenges with implementing web personalization is minimizing latency or the time it takes for a page to reach the user after they make a request. If fetching profile data and building pages based on it introduces delays, then websites may have decreased customer conversions, resulting in lost revenue for the firm.

### **Workers moves customization to the network edge**

Edge computing is the logical fit for Ninetailed's mission to provide personalization with minimal latency or performance impacts. Ninetailed has been using Cloudflare since the company was founded in 2021\. According to Alexander Braunreuther, Ninetailed's Co-Founder and CTO, "We created our very first product on Workers. Workers took in events and evaluated the property data directly on the edge, which made it possible to serve customers globally, with a very low latency personalization engine." In addition to offering low latency and global reach, Workers also provided a cost-effective platform for building Ninetailed's services. Compared to traditional serverless platforms, Workers is more cost-efficient, leading to 2-3x cost savings.

In addition to using Workers for their own infrastructure, Ninetailed also recommends it to clients to implement edge site re-rendering. Ninetailed provides a blueprint for clients to personalize web pages on the fly using HTML Rewriter on Cloudflare Workers.

By implementing edge site re-rendering, Ninetailed clients are able to serve personalized webpages with minimal latency. First, static, cached content can be fetched from a CDN node with minimal latency. Then, the page's HTML can be personalized using the customer's profile data on Workers before being sent on to the end user.

### **Durable Objects eliminates data consistency challenges**

Cloudflare Workers enabled Ninetailed to apply profile-based customizations with minimal latency. However, customer profile data needed to be stored somewhere where it could be quickly accessed by Workers.

Initially, Ninetailed implemented data storage via a network of multiple Redis clusters distributed around the world. Data would be fetched from the nearest Redis cluster by Workers and used to customize a requested page.

While this was a very low-latency solution, it struggled with data consistency. When new data was added to a Redis cluster, it required about 300 ms to sync to other clusters. This could present an issue if a customer had a render server and client system that connected to different Redis servers. If the render server updated the state on its local server and the client made a request too quickly, then the client would receive outdated data.

Since updates arrived milliseconds later, these types of issues were difficult and time-consuming to trouble. Also, operating their own network of Redis clusters meant that Ninetailed spent significant time and effort ensuring that Redis servers were scaled appropriately and data was syncing properly between them.

With the introduction of Cloudflare's Durable Objects, which enable applications to store state data on the Cloudflare Network, Ninetailed had an alternative to their homegrown Redis cluster network. Instead of storing data at multiple, distributed locations, Durable Objects moved data stored to the network edge.

Braunreuther says, "Durable Objects is an ideal fit for Ninetailed. We can scale horizontally across Durable Objects without sending large volumes of traffic to any single one.

Under normal circumstances, a user's requests come from the same location as when they first accessed Ninetailed's API. In the rare situation when a user relocates — such as going on a vacation — they remain at their new location for some time. According to Braunreuther, "Durable Objects works very well for us because you have your data where you are, and it's transactional, so data consistency issues are eliminated." 

After successfully testing the solution, Ninetailed replaced their entire network of 10 Redis clusters with Durable Objects. Gabriel Dillon, Head of Partnerships at Ninetailed, says, "Durable Objects is fundamental to the way that Ninetailed is built. But it's also kind of cool that our clients never see that at all. It just works."

### **Workers and Durable Objects enable low-latency, edge-based personalization**

Ninetailed chose Cloudflare over other serverless and data storage offerings because of the unique capabilities that Cloudflare offers. According to Braunreuther, "I couldn't find another system in the market that can offer this low of latency. Where Durable Objects really shines is linking data near the edge. I personally don't know another service that can provide that." Ninetailed remains on the cutting edge of the Cloudflare Network, testing new features as they come out to determine if they offer opportunities to improve the experience for Ninetailed's users and their customers.

![Ninetailed logo](https://images.ctfassets.net/slt3lc6tev37/3okxvbgnM8AaK867rChXuK/d089418b344d5e4d9bba5ac10cc00274/NinetailedLogoPositive_2x.png) 

Ninetailed uses Cloudflare Workers and Durable Objects to enable webpage personalization and experimentation at the network edge

 Cloudflare Products 
* [  Workers ](https://workers.cloudflare.com/)

 Products Used 

Workers 

 Details 

 Industry 

High Technology 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Ninetailed & Cloudflare | Case Study","description":"Ninetailed uses Cloudflare Workers and Durable Objects to enable webpage personalization and experimentation at the network edge","url":"https://www.cloudflare.com/case-studies/ninetailed/","inLanguage":"en"}
```
