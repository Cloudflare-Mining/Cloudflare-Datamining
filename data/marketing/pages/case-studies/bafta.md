---
title: BAFTA &amp; Cloudflare | Customer Story
description: The British Academy of Film and Television Arts (BAFTA) has used Cloudflare's platform to bring their public voting system in‐house, prioritizing brand trust, security, and scalability.
image: https://cf-assets.www.cloudflare.com/slt3lc6tev37/68WTRpzd7zVAfH0hP0oi9m/99f4cb6a6993d519aaed088c8ea67886/bafta_meta_image.png
---

# BAFTA

> #### "  The developer platform works nicely, the APIs are intuitive, and the documentation makes sense. It was affordable, easy to implement. It all just worked. " 

## **BAFTA updates their public voting system with Cloudflare to achieve scalability, resilience, and cost efficiency**

The British Academy of Film and Television Arts is a world-leading independent arts charity that supports, develops, and promotes the film, games, and television industries. With over 14,000 members, BAFTA celebrates excellence through annual awards, fosters new talent through year-round learning initiatives, and drives industry sustainability, equality, and inclusion.

### **BAFTA's requirement for scalability and resilience**

BAFTA is known around the globe for its highly coveted film and television awards. While most are determined by members and panels of industry professionals, the winner of the prestigious P&O Cruises Memorable Moment Award is decided by an online vote open to the general public.

The availability, security, and integrity of that system are critical to BAFTA's reputation. Any failure or compromise would pose significant reputational risk. "The BAFTA brand has to be associated with trustworthiness and excellence," says Ben Jefferson, CTO of BAFTA.

Nominees are typically announced in March with voting closing in late April. Open and closing dates, active marketing by BAFTA and sponsors, and less predictable viral trends create highly variable traffic involving millions of voters mean that the traffic profile is spiky and unpredictable. This would put a conventional architecture under considerable strain.

BAFTA's previous voting solution had been outsourced, limiting visibility, control, and cost efficiency. The system had to be sized for peak load, and then kept this significant compute resource standing idle for most of the year, making it prohibitively expensive to roll out public voting to additional awards. "Those core business systems are so critical to BAFTA that it's really important we know exactly what's going on and that we're in control of them," Jefferson explains.

### **Reducing costs with Cloudflare**

BAFTA first adopted Cloudflare to reduce load on the organization's public website, deploying the [Cloudflare Content Delivery Network (CDN)](https://www.cloudflare.com/application-services/products/cdn/) in front of its origin servers.

The decision was driven by ease of implementation, affordability, and a recommendation from BAFTA's web agency. It quickly became apparent that Cloudflare offered day-to-day operational value well beyond CDN. The platform enabled BAFTA to detect and block unusual traffic patterns, prevent minor denial-of-service events, and stop third-party proxy sites from republishing BAFTA content for SEO manipulation — all without touching web server configurations.

"Having all the traffic go through Cloudflare gives us really powerful visibility into what's happening on the site," Jefferson notes. "Being able to block traffic using Cloudflare rules without changing server configuration is a powerful day-to-day admin tool."

### **Bringing public voting in-house**

Faced with the cost, scale, and resilience challenges of the existing platform, BAFTA decided to bring public voting in-house rather than continue relying on third-party providers. This delivered greater cost control, improved security and transparency, and full architectural ownership of a mission-critical system. "Any security compromise would be catastrophic for the brand," says Jefferson.

The team identified serverless architecture as the natural fit, given the extreme variance in traffic and near-zero usage for most of the year.

### **Building a public voting system on Cloudflare**

[Cloudflare Workers](https://workers.cloudflare.com/) provided the automated scalability needed to handle volatile public voting traffic. With pricing based on active execution time rather than per-request charges, the economics work well at very high volumes — and the computational tasks involved, such as vote counting and encryption, are well supported by the platform's built-in capabilities. "Under busy conditions, our new system will cost us tens of dollars per million votes. That's a pretty good price point," says Jefferson. "If we get a million votes, that's a great outcome — and we're happy to pay a few tens of dollars for that." 

For most of the year, when voting is inactive, costs drop to zero entirely. "We can now run multiple public votes without incurring significant additional cost. We couldn't get close to this cost profile using a conventional server-based approach," notes Jefferson. 

[Cloudflare Durable Objects](https://developers.cloudflare.com/durable-objects/) handle vote batching and geographic redundancy. [Cloudflare R2](https://www.cloudflare.com/products/r2/) serves as the durable backing store between edge processing and internal systems, absorbing unpredictable traffic peaks by feeding votes into backend systems at a steady, controlled rate. Internal teams push new vote-round metadata via a Workers API endpoint, stored directly in R2\. [Cloudflare KV](https://developers.cloudflare.com/kv/) handles statistics and internal monitoring, while [Cloudflare Logpush](https://developers.cloudflare.com/logs/logpush/) provides an encrypted failsafe for vote recovery. 

"What we wanted to do was use Cloudflare to receive the votes, take that big peak, and batch them up so our internal systems are insulated from those unpredictable spikes," Jefferson explains. "The worst case is we back up votes in R2 and wait a short while for the data to flow through — but our backend systems are never exposed to sudden traffic spikes."

### **What's next: scaling the public voting platform**

Cloudflare's solutions have opened the door to expanding public voting beyond the P&O Cruises Memorable Moment Award — potentially including the BAFTA Games Award and other prominent categories. 

BAFTA is also evaluating Cloudflare Workers for future architecture initiatives, including a potential iteration of the member voting system."The developer platform works nicely, the APIs are intuitive, and the documentation makes sense," Jefferson concludes. "It was affordable, easy to implement. It all just worked."

![BAFTA logo](https://cf-assets.www.cloudflare.com/slt3lc6tev37/7J46Cg1yvhVCD1dYz6YT0V/925507482f4fe3fa314c1ccf40f167d1/bafta_logo.jpg) 

The British Academy of Film and Television Arts (BAFTA) has used Cloudflare's platform to bring their public voting system in‐house, prioritizing brand trust, security, and scalability.

 Cloudflare Products 
* [  CDN ](/application-services/products/cdn/)
* [  Workers ](/products/workers/)
* [  Durable Objects ](/developer-platform/products/durable-objects/)
* [  R2 ](/developer-platform/products/r2/)
* [  Workers KV ](/developer-platform/products/workers-kv/)
* [  Logpush ](https://developers.cloudflare.com/logs/logpush/)

 Details 

 Industry 

Media & Entertainment 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"BAFTA & Cloudflare | Customer Story","description":"The British Academy of Film and Television Arts (BAFTA) has used Cloudflare's platform to bring their public voting system in‐house, prioritizing brand trust, security, and scalability.","url":"https://www.cloudflare.com/case-studies/bafta/","inLanguage":"en"}
```
