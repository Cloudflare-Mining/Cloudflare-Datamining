---
title: Kaizen Gaming &amp; Cloudflare | Customer Story
description: How Kaizen Gaming optimized their infrastructure with Cloudflare Durable Objects
image: https://www.cloudflare.com/preview.png
---

# Kaizen Gaming

> #### "  Durable Objects respond closer to the end user, so messages travel through the ocean fewer times than they did before, and they actually then fan out closer to the customers. " 

## **How Kaizen Gaming optimized their infrastructure with Cloudflare Durable Objects**

Kaizen Gaming is one of the world's largest and best-known game technology companies. Founded in Athens, Greece in 2012, Kaizen features 1.5 million events each year, and livestreams over 400,000 events across 19 markets. They are also an official sponsor of Copa América, UEFA Conference and Europa Leagues.

Kaizen owns Betano, a premium online sports betting and gaming brand that uses proprietary technology to deliver a user-friendly interface and engaging betting and casino experience to over 13 million customers worldwide.

The Betano platform provides real-time updates from a live betting data stream on sporting results. Delivering these updates during major sporting events can present a challenge, as hundreds of thousands of devices access Kaizen applications at once. The company was looking for ways to support live-streaming with optimal efficiency and scalability.

### **Challenge: Inefficient traffic routing and excessive connections**

Kaizen has a distinctly high-pressure data distribution challenge. When a customer wants to place a bet, they need to know what's going on in the event without any significant delays.

According to Kostas Stefanopoulos, a Principal Site Reliability Engineer at Kaizen: "If you see a goal scored and you want to bet, there is no time to lose, so everything has to be real-time. This creates a major traffic load for our software."

Meeting these expectations was a significant challenge with Kaizen's previous infrastructure. To deliver real-time data to a global customer base, they used a custom backend built on Microsoft SignalR for handling WebSocket connections.

The core problem was one of efficiency and scale: Every end-user's device established a dedicated, persistent WebSocket connection back to Kaizen's origin servers located in Europe. When a game update occurred — like a goal being scored — the same data was duplicated and sent across the ocean to hundreds of thousands of individual devices.

This architecture created three critical problems:

* **Excessive load and cost:** At peak, over 600,000 concurrent client connections needed to be supported. Since each custom backend pod could handle only about 2,000 SignalR connections, **Kaizen required roughly 300 custom servers just for this one function**. This created an unwieldy, resource-intensive configuration.
* **Unnecessary bandwidth:** The constant, duplicated transfer of data resulted in a massive, costly network load.
* **High latency and lost revenue:** Routing global traffic (e.g., from Brazil) back to Europe resulted in high latency, often around one second. In sports betting, speed is everything. If a customer tries to place a bet on an outdated view of the game, **even a 10-second delay can cause the bet to be cancelled or rejected**, directly impacting the customer experience and Kaizen's core business metrics.

But for Kaizen, there was no alternative. "We had to be prepared for the worst," explained Stefanopoulos. "Imagine if half of Brazil decides to log in at the same time. There's no room for autoscaling there."

### **Solution: Cloudflare helps Kaizen improve efficiency and scale to meet user expectations**

Kaizen originally implemented Cloudflare for DDoS mitigation. As Kaizen sought a solution for their connectivity challenges, they engaged with Cloudflare to find an intelligent way to offload their origin, streamline data delivery, and drastically cut costs.

First, Kaizen deployed Cloudflare Workers and Durable Objects to serve as a reverse proxy at the edge. This new architecture aggregates client connections close to the user and establishes a single, streamlined WebSocket connection from Cloudflare back to the European backend, fundamentally solving the fan-out problem.

Durable Objects handles this in two key ways:

1. **Connection consolidation**: Each Durable Object aggregates thousands of individual user connections. Instead of \~600,000 connections hitting Kaizen's origin at peak, **the load is now aggregated to only \~1,000 connections**. Durable Objects absorbs the immense traffic spikes and offloads the scaling burden from Kaizen's infrastructure.
2. **Edge-based fan-out**: Each Durable Object acts as a subscription-based hub. If 10,000 users are subscribed to the same livestream, **the Durable Object only fetches the update from the origin once and then distributes it instantly** to all subscribers from the Cloudflare edge location closest to them.

As Stefanopoulos noted, this new edge architecture is a significant win.

"Durable Objects respond closer to the end user, so messages travel through the ocean fewer times than they did before, and they actually then fan out closer to the customers."

For Kaizen, system stability and scale is the main benefit of using Cloudflare. The reduction in load on their back-end infrastructure has allowed them to handle immense traffic spikes without any concerns. The number of concurrent connections from \~600K at peak times is now aggregated to \~1K hitting their back-end — a significant decrease.

The solution also delivered latency wins, which Kaizen referred to as a "happy accident." For users in Latin America connecting to European servers, latency was reduced from \~1s down to 800-900ms range, helping to decrease the number of rejected bets.

### **The result: System stability, cost savings, and accepted bets**

For Kaizen, the move to Cloudflare delivered not only technical wins but direct, measurable business benefits that helped optimize stability, cost, and core performance.

**System stability and scale**

The most immediate win for Kaizen was gaining system stability and scale. By aggregating \~600,000 client connections down to \~1,000 hitting their backend, **they eliminated the risk of traffic spikes** causing instability and the need to constantly over-provision \~300 backend servers.

"One enormous victory for us (apart from the bandwidth savings) is that whenever we receive spikes of connections, we do not have to worry about the stability of the system. It's a real win, because we are prepared for all scenarios."

**Massive bandwidth cost reduction**

By solving the data duplication issue at the edge, Kaizen achieved a significant reduction in network traffic and cost.

At peak, their required Internet bandwidth was slashed from \~50 Gb to only \~2-3 Gb — **a reduction of over 90%** (and easily 200% compared to previous usage). This also meant that Kaizen avoided continuous, expensive upgrades to routers and firewalls as they rapidly expanded into multiple new markets each year.

**Core performance and revenue**

The solution delivered a "happy accident" in the form of latency reduction.

For users in Latin America connecting to European servers, **latency was cut from \~1 second to the 800-900 ms range**. This seemingly small edge-compute improvement has a profound impact on their core business: It means customers receive live updates fast enough to place bets before the system automatically rejects them as outdated.

"One enormous victory for us is that whenever we receive spikes of connections, we do not have to worry about the stability of the system," says Stefanopoulos. "It's a real win, because we are prepared for all scenarios."

By reducing the load on their origin, cutting bandwidth costs, and improving the success rate of live bets, Cloudflare Durable Objects has helped Kaizen secure a competitive advantage in the fast-paced, real-time sports betting industry.

### **Looking to the future**

Kaizen is working with Cloudflare to build new features into Betano. The company is poised for growth, and plans to expand their presence into new markets now that they have solved their initial traffic efficiency and data delivery challenges.

They may also add more events in each market, because their infrastructure is now better-positioned to handle a bigger load without overtaxing infrastructure and internal resources. Kaizen intends to continue leveraging edge computing and reap business benefits from moving computing and data closer to their end users — and Cloudflare is there to support them every step of the way.

As Stefanopoulos puts it: "We want to benefit from having Cloudflare infrastructure across the world — which allows us to continue to deploy as close as possible to our customers."

![Kaizen Gaming logo](https://images.ctfassets.net/slt3lc6tev37/2NKJazG9qmcQ5L9M5Ut3Us/4c8a7d4c93090500536edd9df2d71071/kaizen-logo.png) 

Kaizen Gaming improved the efficiency, scale, and stability of its real-time sports betting platform by leveraging Cloudflare.

 Cloudflare Products 
* [  Durable Objects ](https://www.cloudflare.com/developer-platform/products/durable-objects/)
* [  Workers ](https://workers.cloudflare.com/)
* [  DDoS Mitigation ](/ddos/)

 Products Used 

Workers DDoS Protection 

 Details 

 Industry 

Gaming 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Kaizen Gaming & Cloudflare | Customer Story","description":"How Kaizen Gaming optimized their infrastructure with Cloudflare Durable Objects","url":"https://www.cloudflare.com/case-studies/kaizen-gaming/","inLanguage":"en"}
```
