---
title: Stack Overflow &amp; Cloudflare | Customer Story
description: Global developer platform Stack Overflow stops DDoS attacks and launches AI-driven revenue model using the Cloudflare application security and developer platform.
image: https://www.cloudflare.com/preview.png
---

# Stack Overflow

> #### "  Whenever an undesired request hits the origin, it costs us money. If we're able to block it at the edge, that's less money we're spending on cloud infrastructure. " 

## Stack Overflow eliminates DDoS attacks and scales security with a lean team

Stack Overflow is one of the Internet's most trusted destinations for engineers, serving millions who rely on the platform for technical knowledge and collaboration. Alongside their public platform, the company offers a software-as-a-service (SaaS) product that allows organizations to run private instances of Stack Overflow for internal collaboration and knowledge management. The company's traffic profile has changed in the AI era. While traffic from humans has declined, automated scraping has surged, turning Stack Overflow's content into a highly valuable target for bots and AI crawlers — and making edge security a top priority.

### Persistent DDoS attacks pose operational risks

In 2022, Stack Overflow became overwhelmed with layer 7 DDoS attacks that repeatedly disrupted availability. Blocking those attacks was difficult with their existing content delivery network (CDN). The CDN used local agents at each ingress point, introducing delays as distributed systems attempted to block attacks. These delays were long enough for traffic spikes to cause visible site "blips" for users, lasting several seconds or more. And because threat detection and mitigation occurred at the application and origin layer rather than at the edge, halting malicious traffic strained infrastructure and forced conservative thresholds that left little room for error.

When their CDN contract with Fastly came up for renewal, Stack Overflow evaluated alternatives with the priority to eliminate DDoS impact entirely. Cloudflare stood out for the company's reputation in large-scale DDoS mitigation, competitive economics, and hands-on support. The decision was a "no-brainer," according to Josh Zhang, Team Lead, Site Reliability at Stack Overflow. By moving to Cloudflare, Zhang's team could save approximately 33% of their CDN costs and remove the need to hire data scientists and additional SREs to manage edge security.

### Accelerating migration with hands-on professional services

With DDoS attacks escalating and a CDN contract deadline approaching, Stack Overflow had just one month to complete a full migration. "Realistically speaking, any CDN migration…should take at least six months," says Zhang. By completing the migration in a month, including modernizing configurations and translating Fastly's Varnish Configuration Language (VCL) logic, Stack Overflow avoided contractual penalties and ongoing risk from attacks. 

Zhang credits [Cloudflare Professional Services](https://www.cloudflare.com/professional-services/) for making this possible. "Cloudflare's Professional Services team worked closely with my team to rewrite everything from scratch, migrating everything into Terraform and converting the code. It's very well done and we're still using it to this day," says Zhang.

### Stopping DDoS attacks at the edge, not the origin

After deploying [Cloudflare DDoS protection](https://www.cloudflare.com/ddos/) and the [Cloudflare Web Application Firewall](https://www.cloudflare.com/application-services/products/waf/), Stack Overflow shifted mitigation entirely to the edge. Attacks that once caused alerts, scrambling, and downtime are now absorbed automatically‚ often without the team noticing until later, "because somebody just happened to be looking at the dashboard," Zhang explains. By blocking malicious traffic before it ever reaches the origin, Stack Overflow reduces both operational risk and infrastructure strain. The company maintains consistent availability with automated protections that pre-empt and mitigate large-scale attacks.

### Scaling bot management without scaling headcount

As bot traffic grew to represent most inbound requests, [Cloudflare Bot Management](https://www.cloudflare.com/application-services/products/bot-management/) became central to Stack Overflow's security strategy. Verified bot lists and AI crawler identification removed the need for manual research and custom allowlists, freeing the team to focus on advanced threats instead of known actors.

According to Zhang, using Cloudflare solutions means his small team can handle levels of bot management that takes peers at another company "two giant teams" of 25–30 people. "My team's only me and two others," says Zhang.

With confidence that legitimate crawlers and search engines would not be blocked, the team became more aggressive with enforcement. Rules that once required cautious, day-long rollout cycles can now be deployed and adjusted in minutes, dramatically improving responsiveness by 99.5%

### Turning edge visibility into operational and business value

Cloudflare logs provide Stack Overflow with detailed, end-to-end visibility into traffic patterns and security events. That visibility has helped uncover subtle application-layer vulnerabilities and understand complex attack behaviors that would have been nearly impossible to diagnose otherwise. 

Stronger edge security also brings cost savings. "Whenever an undesired request hits the origin, it costs us money," Zhang explains. "If we're able to block it at the edge, that's less money we're spending on cloud infrastructure." 

**Simplifying infrastructure with Cloudflare Workers**

Stack Overflow uses [Cloudflare Workers](https://www.cloudflare.com/products/workers/) to achieve feature parity with their prior system, specifically for logging and deleting headers. Since Cloudflare's logging happens last, and deletion happens beforehand, Workers is critical for intercepting requests, grabbing the necessary telemetry headers, deleting them, and then logging them so they appear in the centralized logs. 

Without this approach, Zhang notes, "We would have had to figure out a way to record and then restitch \[the headers\] into the logs to make them useful."

Because Cloudflare Workers is highly customizable, Zhang is exploring additional capabilities such as using it to manage a necessary session tracking cookie. This would simplify the core infrastructure by consolidating logic that's currently scattered across multiple applications into a single location at the edge. 

**What's next: Monetizing AI traffic and advancing bot intelligence**

With disruptive attacks eliminated and security operations under control, Stack Overflow is focused on the future. A key initiative is launching a pay-per-crawl program that allows the company to monetize AI access to their content. Thanks to the insights they now have into bot traffic data, Stack Overflow is becoming the first Cloudflare customer to commercialize their data in the pay-per-crawl content marketplace. 

Beyond that, the team is investing in more advanced bot categorization techniques to identify and block sophisticated bots automatically, even as tactics evolve. One such technique involves using [Cloudflare Challenges](https://developers.cloudflare.com/cloudflare-challenges/). These security mechanisms actively degrade the bot scores of new, advanced bots, which begin at 99\. 

With Cloudflare, Stack Overflow now has a way to protect their site from attacks and even profit from the rise in AI bot traffic. Stack Overflow sees Cloudflare as a long-term partner in operating a resilient and efficient platform that's ready for whatever the next phase of the Internet brings.

![Stack Overflow logo](https://images.ctfassets.net/slt3lc6tev37/3aUBcykRSnmX6YeKSMHV4s/1ef020c06d76fba8f3d8d4796a4e532a/Stack_Overflow_Logo_0.svg) 

Global developer platform Stack Overflow stops DDoS attacks and launches AI-driven revenue model using the Cloudflare application security and developer platform.

 Cloudflare Products 
* [  DDoS Mitigation ](/ddos/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  Bot Management ](/application-services/products/bot-management/)
* [  Workers ](https://workers.cloudflare.com/)

 Products Used 

DDoS Protection Bot Management WAF Workers 

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
{"@context":"https://schema.org","@type":"WebPage","name":"Stack Overflow & Cloudflare | Customer Story","description":"Global developer platform Stack Overflow stops DDoS attacks and launches AI-driven revenue model using the Cloudflare application security and developer platform.","url":"https://www.cloudflare.com/case-studies/stack-overflow/","inLanguage":"en"}
```
