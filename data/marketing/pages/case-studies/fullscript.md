---
title: Fullscript &amp; Cloudflare | Customer Story
description: By adopting Cloudflare's Connectivity Cloud, Fullscript accelerated deployments by 8x and reduced daily infrastructure costs by tens of thousands of dollars.
image: https://www.cloudflare.com/preview.png
---

# Fullscript

> #### "  We went from taking half a day to make security changes to making them instantly. Cloudflare's connectivity cloud makes even complicated tasks feel simple. " 

## How Fullscript Modernizes Healthcare and Delivers 8x Faster Deployments with Cloudflare's Connectivity Cloud

Fullscript is a leading SaaS platform empowering healthcare practitioners and naturopathic doctors to practice whole-person care with their patients. The Canadian company provides comprehensive tools for prescribing labs, creating treatment plans, and monitoring patient wellness journeys, serving millions of healthcare practitioners globally.

### Challenge: Legacy complexity threatened rapid growth

When Jeff Fouchard, now VP of Engineering, joined Fullscript, the company's rapid expansion were straining against a fragmented legacy infrastructure unable to support its ambitious growth plans.

With traffic doubling to the Fullscript web applications annually for five consecutive years, the company needed an infrastructure that could scale seamlessly to meet the explosive growth demands of the healthcare technology sector. Operating on legacy infrastructure, Fullscript had migrated core apps from a legacy orchestrator to Kubernetes but hit a wall with AWS's first-generation web application firewall (WAF), which generated false positives and created multiple operational bottlenecks.

"The AWS WAF gave us almost no information when something went wrong. We'd have a blocked request and barely any data to figure out why it happened. The interface was incredibly difficult to use, and even simple changes required extensive manual work," Jeff recalls. Security rule changes consumed more than four hours per modification, combining unintuitive UI navigation with cumbersome Terraform state management. With increasing point-solution sprawl, mounting operational friction, and a small three-person infrastructure team wearing multiple hats, Fullscript needed a partner who could support their growth trajectory—not just provide another tool to manage.

### Rehosting security foundations for immediate impact

Fullscript's journey with Cloudflare began as a classic rehost scenario. Fullscript sought the Connectivity Cloud to enable them to:

* Rehost application security and delivery infrastructure with Cloudflare while maintaining core Ruby on Rails application
* Consolidate systems for unified modernization
* Build Cloud-native experiences at the edge

Discovering Cloudflare's free tier, Fullscript quickly found the platform both richer in features and easier to use than AWS's native solutions. The company migrated critical security and delivery elements, automating configuration through Terraform to accelerate deployments and adoption, which eliminated the manual processes plaguing their previous setup. The transformation delivered an immediate 8x improvement in deployment efficiency, reducing security rule changes from more than four hours to under 30 seconds.

A defining moment came during a major security crisis when malicious traffic overwhelmed their platform, incurring tens of thousands of dollars daily in infrastructure costs. Cloudflare's customer success team provided immediate beta access to their Security Analytics Dashboard, enabling rapid threat identification and mitigation.

"Within 15 minutes of using Cloudflare's security dashboard, we found exactly where the bad traffic was coming from, blocked it, and immediately fixed the problem — saving us from days of expensive downtime," explains Fouchard.

The rehost not only improved reliability and reduced manual work — it freed up Fullscript's team to focus on more strategic initiatives.

Following a standout support experience, the organization upgraded to Enterprise to unlock **proactive security and optimization tools**—including bot scanning and load balancing—further insulating their ecosystem from emerging threats.

"With Cloudflare's connectivity cloud, making security changes is now effortless — we don't even think about it anymore. Our small team can handle much more complex infrastructure than we ever could with fragmented point solutions," adds Fouchard.

This crisis response mitigated the financial impact and demonstrated Cloudflare's commitment to customer success beyond just providing technology, establishing trust that would drive expanded adoption across Fullscript's infrastructure.

### Consolidating systems for unified modernization

Adopting a "Cloudflare-first" approach for new infrastructure requirements, Fullscript began consolidating multiple point solutions to reduce vendor complexity and operational overhead. One of the first wins came from replacing an aging VPN with Cloudflare Zero Trust. The legacy VPN required frequent Friday night patches to address critical zero-day vulnerabilities and suffered from bandwidth limitations — especially challenging for decentralized and remote teams.

This consolidation strategy allowed Fullscript to eliminate the management burden of multiple disparate systems while gaining enhanced capabilities.

"The new remote access system is incredibly simple to set up and customize. For our employees, it's just a matter of clicking one button. The experience is so much better, and we can even reward people for following good security practices through integrated policy management," explains Fouchard.

This approach reduced vendor sprawl, cut support escalations, and simplified both security and remote access management, allowing Fullscript to centralize knowledge and accelerate ramp-up times for new projects. The deployment success also exceeded expectations:

"We finished the rollout 30 days ahead of the projected 90-day window — a 33% schedule gain — and had very few problems along the way. Whenever we had questions, Cloudflare's team gave us clear technical options and excellent implementation support," says Fouchard.

### Building cloud-native experiences at the edge

With core infrastructure successfully modernized and consolidated, Fullscript and Cloudflare began collaborating on cutting-edge applications that would define the future of their healthcare platform, moving beyond "lifting" existing apps to architecting entirely new capabilities using modern, cloud-native approaches.

During an M&A integration, the company needed intelligent routing capabilities to seamlessly direct users between different platforms post-login, depending on their account. Instead of complex backend development requiring an estimated 3-6 months, they leveraged Cloudflare Workers to build serverless logic that operates at the network edge — delivering the solution in under 2 weeks.

"Workers allowed us to build smart authentication flows right at the network edge, which was much simpler than trying to connect everything on the backend. It allowed us to create entirely new user experiences while maintaining SOC 2 compliance and dramatically reducing audit friction," Jeff says.

"As our technology stack gets more complex, Cloudflare helps us grow without losing control or slowing down. We can deploy modern applications globally while maintaining the simplicity our generalist team needs," explains Jeff.

### Results: A partnership that scales with success

Fullscript's adoption of Cloudflare's Connectivity Cloud delivered transformative operational efficiency gains. Deployment agility improved dramatically, reducing workflow times from half a day to near-instant changes that boosted team productivity. The company also achieved 90–95% automation coverage across infrastructure changes through infrastructure-as-code workflows, while saving at least one full-time headcount by consolidating point solutions under Cloudflare.

"If we had to cobble together solutions from different vendors for all the different services Cloudflare provides us, we'd need to hire at least one more full-time person, maybe two. Having everything in one place means our team can easily manage it all, and learning new features is much simpler," states Fouchard.

Cloudflare's unified platform helped Fullscript scale with rising demand, eliminating the need for frequent infrastructure interventions or team expansion. Security and performance analytics provided visibility across the stack, strengthening posture and optimizing user experience. Most importantly, the relationship evolved beyond vendor-customer. Cloudflare's team operated as an extension of Fullscript's engineering organization, offering guidance, support, and consistent partnership.

"Cloudflare has been amazing. I work with many technology vendors, and I can't think of a better partnership. Even though we're not their biggest customer, they treat us like we're the most important one," concludes Fouchard.

![Fullscript logo](https://images.ctfassets.net/slt3lc6tev37/f41oJ1WdDsALCqzUJc9hY/0c54a0364b3d4d50f5bc39ebb658ff71/Fullscript_Logo.png) 

By adopting Cloudflare's Connectivity Cloud, Fullscript accelerated deployments by 8x and reduced daily infrastructure costs by tens of thousands of dollars.

 Cloudflare Products 
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  Bot Management ](/application-services/products/bot-management/)
* [  Zero Trust ](/sase/)
* [  Workers ](https://workers.cloudflare.com/)
* [  R2 ](https://www.cloudflare.com/developer-platform/products/r2/)

 Products Used 

WAF Bot Management Zero Trust Workers 

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
{"@context":"https://schema.org","@type":"WebPage","name":"Fullscript & Cloudflare | Customer Story","description":"By adopting Cloudflare's Connectivity Cloud, Fullscript accelerated deployments by 8x and reduced daily infrastructure costs by tens of thousands of dollars.","url":"https://www.cloudflare.com/case-studies/fullscript/","inLanguage":"en"}
```
