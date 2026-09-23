---
title: Hack The Box &amp; Cloudflare | Customer Story
description: Hack The Box secures a global cybersecurity training platform with Cloudflare, stopping 13.37 million threats monthly while scaling to 4 million users.
image: https://www.cloudflare.com/preview.png
---

# Hack The Box

> #### "  Cloudflare's platform scales seamlessly alongside growth in traffic, users, and attack surface without introducing additional operational complexity. " 

## Hack The Box secures and scales a global cybersecurity platform with Cloudflare

Founded in 2017, Hack The Box is the leading cyber readiness platform for the agentic era, battle-testing and upskilling both humans and AI agents for organizational cyber resilience. Trusted by the Fortune 500, government agencies, and MSSPs, the platform delivers threat-informed learning paths consisting of real-world scenarios in gamified labs and live-fire simulations that build and validate offensive and defensive cyber capabilities. With a loyal community of more than 4 million members and 800+ enterprise customers, Hack The Box empowers teams and intelligent systems alike to strengthen cyber defenses and reduce breach risk effectively.

Operating with a scalable, cloud-first model and a distributed team across Europe, the US, and APAC, Hack The Box empowers both beginners and advanced practitioners to master offensive and defensive skills through simulations and AI agent security benchmarking.

### Anticipating threats before they can disrupt the platform

Hack The Box is, by design, a target. The platform exists to simulate adversarial conditions, which means it also attracts them. The team knew from day one that a globally accessible, security-sensitive environment would draw volumetric and application-layer DDoS attacks, credential stuffing, automated API abuse, and wild swings in traffic, especially during competitions, product launches, and large-scale simulation events. The question was whether the platform could absorb those attacks without the business feeling it.

Solving that problem the traditional way — with standalone DDoS mitigation, multiple regional CDNs, and custom edge security logic built and maintained in-house — would have consumed engineering resources that Hack The Box needed elsewhere. It also would have introduced exactly the kind of operational sprawl the company was trying to avoid. What they needed was a foundation that handled security, global delivery, workforce access, and edge compute together, without requiring a separate team or toolset for each.

"Cloudflare's platform could scale seamlessly alongside growth in traffic, users, and attack surface without introducing additional operational complexity," says Thiseas Meggos, Vice President of Infrastructure at Hack The Box. "That aligned with our need to operate a high-risk, high-variability platform where resilience, simplicity, and scale are foundational rather than reactive."

### Consolidating security, performance, and developer tools on a single platform

Cloudflare was built into Hack The Box's architecture from the start. [Cloudflare WAF](https://www.cloudflare.com/en-gb/application-services/products/waf/), DDoS mitigation, Rate Limiting, and Bot Management protect applications and APIs. The [Cloudflare CDN](https://www.cloudflare.com/application-services/products/cdn/) handles global delivery. [Cloudflare Workers](https://workers.cloudflare.com/) run edge compute. [Cloudflare Zero Trust](https://www.cloudflare.com/en-gb/sase/products/access/) manages internal access. All of these run on Cloudflare's connectivity cloud — a unified platform of security, connectivity, and developer services powered by a programmable global network. 

Cloudflare was already well known within Hack The Box's engineering and security leadership. Many on the team had used it in previous roles in high-traffic, high-risk environments, and it had a strong reputation as the industry standard for DDoS resilience, edge security, and global delivery. The company started on a pay-as-you-go basis and moved to an enterprise relationship as the platform grew.

### Stopping millions of threats without slowing down legitimate users

Volumetric and application-layer DDoS attacks intensify around major events and competition launches. Bot activity is sustained and varied, covering credential stuffing, scraping, and automated endpoint abuse. API-specific threats, including enumeration attempts and excessive automation, are a constant. And because the platform's users are themselves security professionals, the bar for what counts as sophisticated is higher than most.

Cloudflare's DDoS mitigation runs automatically, with no manual activation required. During coordinated attacks and sudden traffic spikes, Cloudflare absorbs the load without the team having to intervene. WAF gives them precise control over rulesets, so they can stop what needs stopping without interfering with legitimate users in the process. 

During a 30-day period in 2026, Cloudflare stopped 13.37 million threats targeting the Hack The Box platform.

"We were proactive, and we had Cloudflare backing us up from the early days with Under Attack mode and other protective mechanisms," says Thiseas. "The ability to absorb that traffic and keep the platform stable without manual intervention has been foundational to how we operate."

That stability extends beyond attack scenarios. Cloudflare gives Hack The Box a consistent, globally distributed front door for all applications and APIs, which means expanding into new regions or handling a surge in users during a major launch does not require scrambling to add capacity or reconfigure infrastructure.

### Reducing latency by 30% to 45% for users across 170 countries

Millions of Hack The Box users are nowhere near the company's core infrastructure. Learners in APAC, South America, the Middle East, and parts of Africa were experiencing the kind of latency that makes interactive training frustrating. For a platform built around real-time, hands-on labs, that was a problem worth solving quickly.

[Cloudflare global CDN](https://www.cloudflare.com/application-services/products/cdn/) and edge caching cut page load times for cached assets by 30% to 45% on average, with meaningful improvements in time-to-first-byte for users in distant regions. During peak periods, edge caching keeps traffic from piling up at the origin. A substantial portion of static and semi-static content never reaches origin infrastructure at all, which has made bandwidth costs more predictable and reduced the pressure to scale origin capacity in lockstep with user growth.

"Cloudflare's CDN has helped us prevent performance-related churn during high-traffic events and maintain a consistent experience for enterprise customers during onboarding, assessments, and training programs," says Thiseas.

### Supporting a growing distributed workforce with Cloudflare Access

Hack the Box supports a rapidly growing workforce of 300+ employees across Europe, the U.S., and Asia Pacific. As the company has transitioned permanently to remote/ hybrid work, their traditional VPN became more complex. It was too cumbersome for end users and created risks by granting overly broad network access.

To modernize their remote access approach, Hack the Box implemented [Cloudflare Access](https://www.cloudflare.com/sase/products/access/), a [zero trust network access (ZTNA)](https://www.cloudflare.com/learning/access-management/what-is-ztna/) solution. Now, Hack the Box enforces identity-based access policies for specific apps, including internal dashboards and SaaS tools, rather than the entire network. Centralized management and visibility simplifies operations for IT and security teams, and seamless authentication and high-speed connectivity keeps workers productive. 

"Cloudflare Access secures access without slowing teams down, particularly for remote engineers and operators who frequently need to reach sensitive internal systems," says Thiseas. "Removing the friction of VPN-based access while strengthening our security posture has been a meaningful improvement for the whole organization."

### Processing 25 million monthly requests at the edge with Cloudflare Workers

Not everything needs to go back to the origin. Request routing, access control logic, traffic shaping, and a range of smaller application workflows run better at the edge, closer to users, with less latency and less load on backend services. Hack The Box uses [Cloudflare Workers](https://workers.cloudflare.com/) for that, offloading specific use cases from core backend services without building separate infrastructure to support them.

The team considered traditional cloud-based serverless platforms, but the architectural fit with Cloudflare was the deciding factor. Workers runs on the same global network as the CDN and security stack. Edge logic executes in an environment the team already knows, without additional networking complexity or runtime management.

Today, Hack The Box runs nearly 50 Workers projects across production, staging, and development environments. The platform processes approximately 25 million requests monthly through Workers, without manual scaling or capacity planning. During a traffic burst of 65 GB within a single hour, Workers held a 99.85% request success rate.

"Workers has reduced the need for additional backend services and regional deployments," says Thiseas. "Teams can ship changes faster by deploying edge logic independently of core application services, which shortens development cycles and reduces coordination overhead. From the repo to the edge in a single action."

### Expanding edge capabilities and deepening zero trust as the platform grows

Hack The Box plans to keep expanding its use of the [Cloudflare Developer Platform](https://www.cloudflare.com/developer-platform/), with new proofs of concept for edge-based workflows, experimentation with traffic-control patterns, and internal tooling that takes advantage of globally distributed, low-latency execution. On the security side, the team plans to deepen their zero trust posture as the workforce grows, keeping access controls tight without reintroducing the complexity they moved away from.

"As traffic, users, and workloads grow globally, Cloudflare will remain a core foundation for delivering secure, reliable, and high-performance experiences at scale," says Thiseas. "Cloudflare wants to work with us, hears our pain points, and helps solve them. I am always looking for opportunities to extend the partnership and achieve mutual success."

![Hack The Box logo](https://images.ctfassets.net/slt3lc6tev37/3oWMko8boDq7nnGBF7UfBs/d199bb16612c96b281f4aca5521b3375/hack_the_box_logo.png) 

Hack The Box secures a global cybersecurity training platform with Cloudflare, stopping 13.37 million threats monthly while scaling to 4 million users.

 Cloudflare Products 
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  DDoS Mitigation ](/ddos/)
* [  Rate Limiting ](/products/rate-limiting/)
* [  Bot Management ](/products/bot-management/)
* [  CDN ](/products/cdn/)
* [  Workers ](/products/workers/)
* [  Access ](/sase/products/access/)
* [  R2 ](/products/r2/)

 Details 

 Industry 

Hosting 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Hack The Box & Cloudflare | Customer Story","description":"Hack The Box secures a global cybersecurity training platform with Cloudflare, stopping 13.37 million threats monthly while scaling to 4 million users.","url":"https://www.cloudflare.com/case-studies/hack-the-box/","inLanguage":"en"}
```
