---
title: Intility &amp; Cloudflare | Customer Story
description: Platform-as-a-service provider Intility consolidated internal and external security for its digital infrastructure onto Cloudflare, improving security and reducing multi-vendor complexity.
image: https://www.cloudflare.com/preview.png
---

# Intility

> #### "  We now run everything — WAF, DDoS protection, Bot Management, CDN, DNS, and Zero Trust — in Cloudflare's connectivity cloud. Consolidating onto a single, global platform lowers tool sprawl, simplifies management, and accelerates mitigation when issues arise. " 

## Intility consolidates security and extends connectivity for global users with Cloudflare SASE for a faster, more connected, and more secure digital foundation

An innovator in the platform-as-a-service marketplace, Intility combines infrastructure, services, and expertise to deliver the Intility Platform Manager — a unified digital core that helps organizations move faster, more securely, and with greater control. Based in Oslo, Norway, Intility is driving a shift away from the limitations of traditional managed services to a composable, infrastructure-as-code-driven cloud solution, with automation, observability, sustainability, and compliance built in. 

Founded in 2000, Intility now supports over 650 customers and 50,000 users across 2,500 locations in Scandinavia and around the world. Its flexible, end-to-end platform provides scalable, supported access to cloud infrastructure, devices, applications, productivity tools, and security services.

"Intility is an industrialized, technical foundation that reduces complexity, improves resilience, and gives organizations a simpler way to run modern technology," explains Erik Sebastian Ranberg, Intility's Head of Application Platform Services. "We don't just offer functionality, we offer partnership."

### Securing a multi-tenant digital services platform against evolving modern threats

As a multi-tenanted platform and service provider with an expanding customer base and growing global footprint, Intility faced mounting security challenges. Increasing pressure on their tenants' public infrastructure and applications from global DDoS risks and increasingly sophisticated automated threats was one of the company's core concerns. 

"We were seeing a clear shift in traffic towards automated agents, particularly bots and [AI crawlers](https://www.cloudflare.com/learning/ai/how-to-block-ai-crawlers/) that put pressure on origin services and security operations," explains Ranberg. "We needed advanced bot management techniques to help us distinguish good automation from malicious activities like scraping, credential stuffing, L7 DDoS, and API abuse." 

Hosting over 1000 different web applications for multiple clients across multiple verticals — each with unique security and authentication requirements — only compounded the urgency of finding a secure, easy-to-manage security solution for public traffic. 

The Intility team's concerns extended beyond public-facing systems — Intility's private infrastructure, specifically their legacy VPN, also presented urgent operational, security, and performance challenges. 

"Our traditional VPN model was increasingly inadequate. Maintaining multiple VPN concentrators for each customer and ensuring availability across data centers demanded constant patching and scaling," says Ranberg. "The administrative and maintenance burdens distracted our SOC and engineering teams from strategic product development and working to improve our platform and customer services." 

Combined, these issues hindered Intility's ability to react rapidly to changing network conditions and meet customer requirements. To address these problems, the company focused on several key objectives:

* Implementing device posture checks and context-aware access control to enhance security.
* Reducing complexity by consolidating fragmented, multi-vendor security tools across its diverse customer base.
* Simplifying the user experience while minimizing exposure to these fragmented solutions.

### Uniting disparate public and private security solutions with Cloudflare

Cloudflare's [connectivity cloud](https://www.cloudflare.com/connectivity-cloud/) — the comprehensive, centrally administered global platform that enhances how organizations connect, protect, and build public and private digital environments — aligned perfectly with Intility's mission of providing customers with secure, integrated, and easy-to-use infrastructure services.

Intility [began the modernization initiative](https://www.cloudflare.com/learning/network-layer/how-to-prepare-for-network-modernization-projects/) with Cloudflare [Application Security and Performance Solutions](https://www.cloudflare.com/application-services/solutions/). Deploying the [Cloudflare Web Application Firewall (WAF)](https://www.cloudflare.com/application-services/products/waf/), the Intility team immediately saw improvements. Cloudflare's global network-powered threat intelligence, machine learning, and managed OWASP rulesets helped Intility reduce unwanted traffic to customer origin servers by over 25%. Across the Intility platform, Cloudflare stopped nearly 1.6 million malicious WAF events in 30 days — a number expected to grow as Intility continues to add custom rules and fine-tune the WAF settings for each customer. 

Intility saw similar results with Cloudflare [Bot Management](https://www.cloudflare.com/application-services/products/bot-management/), further reducing malicious automated traffic and its associated infrastructure costs. It also helped detect and block fake account creation bots and promo or coupon abuse, which had previously disrupted analytics and inflated downstream costs. By giving the team access to accurate, actionable traffic data, Cloudflare also enhanced observability, sustainability, and compliance across Intility's services.

"Bot and AI crawler traffic really distort reality at the edge, but Cloudflare allows us to separate genuine customer signals from automated noise to protect our logins, APIs, and content at scale," says Ranberg.

Ranberg credits Cloudflare Bot Management with improved SLA adherence and uptime and improving services by reducing false-positive bot detections. Cloudflare also protects Intility and their customers against once-problematic, fingerprint-evasive bots able to defeat the simple reputation filters and CAPTCHAs of their legacy security tooling.

Cloudflare [DDoS protection](https://www.cloudflare.com/ddos/) further enhances the availability of the Intility platform, protecting 1000+ customer web apps from volumetric attacks. By absorbing unwanted traffic spikes via the 449 Tbps [global network](https://www.cloudflare.com/network/), Cloudflare shields Intility with a capacity 23x greater than the largest DDoS attack ever recorded. Shifting [content delivery](https://www.cloudflare.com/application-services/products/cdn/) to the global network — connected directly to 13,000 networks, with a presence in 330 cities across more than 125 countries — Intility brings static and dynamic content to within 50ms of end users everywhere. "Since switching to Cloudflare, we have improved performance and reduced latency across our entire client base — our tenants with users on other continents report the most significant improvement," says Ranberg. 

### Automating DNS migration, streamlining operations, and enhancing platform resilience

Offering centralized control over 60 unified cloud services powered on the global network, Cloudflare's connectivity cloud is the linchpin of the Intility platform modernization.

"We run everything — WAF, DDoS protection, Bot Management, CDN, DNS, and zero trust — in Cloudflare's connectivity cloud," says Ranberg. "Consolidating onto a single, global platform lowers tool sprawl, simplifies management, and accelerates mitigation when issues arise."

Intility's migration of over 40,000 DNS records — fragmented across several providers — into [Cloudflare DNS](https://www.cloudflare.com/application-services/products/dns/) illustrates the company's dedication to automating and simplifying complex processes using the single-vendor Cloudflare ecosystem. Leaning into Cloudflare's superior connectivity and the vast interoperability of Cloudflare's APIs, Intility scripted the export, normalization, and import of the fragmented legacy records. Maintaining a rollback path for safety, the Cloudflare-powered, zero-touch process helped Intility coordinate registrar updates, monitor and verify propagation via synthetic checks and health probes, and move the records onto Cloudflare without downtime.

"We completely automated the onboarding," says Ranberg. "We rebuilt everything in Cloudflare via Terraform and switched over with zero customer-visible impact."

The shift to Cloudflare DNS bolstered operational efficiency and platform resilience. Global anycast resolution improved performance for all tenants, while DNSSEC and Cloudflare's enterprise-grade SLAs provided stronger security and reliability guarantees. The migration also centralized visibility, role-based access, and telemetry, while extending automation to other services, including [SSL certificate management](https://www.cloudflare.com/application-services/solutions/certificate-lifecycle-management/).

"Cloudflare's API-first design and Terraform integration give us full control," says Ranberg. "We automated DNS, security policies, and certificate management at scale while maintaining governance and traceability across all tenants."

### Modernizing workspace security with Cloudflare's SASE platform

Intility's next phase of consolidation focused on modernizing workspace security, protecting how employees connect with private, web, and SaaS applications with Cloudflare's [secure access service edge (SASE) platform](https://www.cloudflare.com/sase/).

Intility's initial focus was on supplementing their existing remote access technology stack by introducing Cloudflare's Zero Trust Network Access (ZTNA) service, with the goal of improving secure access for customers with a geographically distributed user base. They enforce least-privilege access based on identity provider signals and device posture. By using Terraform, the infrastructure-as-code tool, the team automates policy configuration, making it simple to onboard new users and applications.

With Cloudflare Access, the Intility platform can enforce policies with greater granularity. For example, workers in branch offices experience secure, low-latency access to internal networks, while contractors or temporary employees receive tightly scoped, time-boxed access to specific resources.

"Cloudflare has eliminated performance bottlenecks caused by backhauling or hairpinning customer traffic through the VPN while allowing our developers secure low-friction access to production environments."

Cloudflare is also central to Intility's efforts to prevent data loss and support their customers by exposing and eliminating shadow IT.

"With Cloudflare, we have implemented protections that allow our customers to secure or restrict application usage on a case-by-case basis," says Ranberg. "Securing the Intility platform and enforcing identity-, device posture-, and context–aware policies protects end users from unsanctioned generative AI tools and unauthorized SaaS usage."

### Future Vision

Looking forward, Intility plans to deepen its Cloudflare partnership through broader SASE adoption, expanding its use of ZTNA and secure web gateway (SWG) while exploring cloud access security broker (CASB) and data protection capabilities across SaaS environments. The goal is to block cyber threats and implement [data loss prevention (DLP)](https://www.cloudflare.com/sase/products/dlp/) controls to mitigate risks of data leaks. Proxying traffic through Cloudflare helps enforce consistent protections against malware and phishing across workers - whether in-office, remote, or on mobile devices.

Aligned with their workload automation and AI-readiness initiatives, Intility is also focused on automating per-tenant policy orchestration with Terraform and Cloudflare APIs.

"If Intility is the digital foundation that supports the cloud, the network, and the workplace for our customers, Cloudflare is part of the base that makes that foundation faster and safer," says Ranberg. "Investing in Cloudflare has improved platform performance, lowered incident volumes, and reduced our mean time to repair/mean time to maintenance."

![Intility logo](https://images.ctfassets.net/slt3lc6tev37/4zpRz4MGbigyzNhxcU2U0A/01148843b0eac3f6b99a21c77d2eca49/intility_logo.png) 

Intility consolidated internal and external security for its digital infrastructure onto Cloudflare, improving security and reducing multi-vendor complexity in the connectivity cloud

 Cloudflare Products 
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  Bot Management ](/application-services/products/bot-management/)
* [  DDoS Mitigation ](/ddos/)
* [  Content Delivery Network (CDN) ](/application-services/products/cdn/)
* [  DNS ](/application-services/products/dns/)
* [  Zero Trust ](/sase/)
* [  Gateway ](/sase/products/gateway/)

 Products Used 

WAF Bot Management DDoS Protection CDN DNS Zero Trust Gateway 

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
{"@context":"https://schema.org","@type":"WebPage","name":"Intility & Cloudflare | Customer Story","description":"Platform-as-a-service provider Intility consolidated internal and external security for its digital infrastructure onto Cloudflare, improving security and reducing multi-vendor complexity.","url":"https://www.cloudflare.com/case-studies/intility/","inLanguage":"en"}
```
