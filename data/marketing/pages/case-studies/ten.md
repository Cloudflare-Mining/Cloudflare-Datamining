---
title: TeN &amp; Cloudflare | Customer Story
description: TeN migrated to Cloudflare to enhance security, speed development and reduce costs for the company's LandingHub service, which delivers their customer's online contents efficiently.
image: https://www.cloudflare.com/preview.png
---

# TeN

> #### "  Cloudflare is the perfect partner for us, combining reliability, efficiency, and flexibility, and we're truly excited about building on this partnership going forward. " 

## TeN enhances security and reduces costs for their LandingHub services by migrating to Cloudflare

Established in 2020, TeN creates online marketing and media content as part of their mission to "make a place for that idea." Recently, they've improved client conversion rates and reduced costs for their clients by building fast-loading and smooth-running customer web pages using a platform they created called [LandingHub](https://www.landinghub.net/).

LandingHub is the first service in Japan to use proprietary image processing technology and digital content management architecture to improve the display speed of their customer's landing pages. Over the past few years, LandingHub has had an increasing impact on TeN's sales — so finding the right infrastructure to drive profitability became a key priority.

### Rising content distribution costs impact profit margins

TeN built LandingHub with content delivery network (CDN), object storage, and serverless features provided by AWS. By helping improve landing page display speed and distributing content efficiently, LandingHub drove profitability. However, the recent decline in the value of the Japanese Yen brought on price increases across Japan's IT industry, and this had a clear impact on LandingHub profit margins.

TeN also found that, all too often when using these existing solutions from AWS, core business app features were prioritized over security measures, which were usually deployed only after an actual attack was detected. Although the TeN team had yet to experience any major security incidents, they wanted to proactively protect their infrastructure and safeguard their clients' digital content. 

### Reducing both content distribution and operational costs with Cloudflare

The rising costs of AWS drove the TeN team to explore other options for the services that supported LandingHub. The team was already aware that Cloudflare provided similar features as AWS. So, they conducted a trial with Cloudflare's free plan alongside AWS while performing evaluations of both solutions. As prices continued to go up for AWS services, TeN decided to use Cloudflare across the company. In addition to competitive pricing, the Cloudflare platform offered several superior capabilities, including lower operational costs, comprehensive monitoring, flexible cache rules, streamlined management, and more.

The TeN team was initially concerned they might run into unexpected problems when migrating from AWS. But the migration went smoothly, thanks to strong preparation and responsive assistance from Cloudflare. "As well as offering great products, Cloudflare also provided us with really comprehensive support all the way from PoC until we completed migration," says Kudo. 

Moving to Cloudflare not only helped reduce content distribution costs — it also helped drive down operational costs. From "Day 2" of operation, TeN was able to enhance their traffic analytics visualization, using standard monitoring features to give them greater control over traffic trends, which subsequently enabled them to reduce overall operational burdens.

"Because of how LandingHub runs, we sometimes wanted to delete cached content, but AWS would charge us every time, so we couldn't do it as we like," says Tsubasa Kudo, LandingHub Product Manager at TeN. "By contrast, the Cloudflare cache charges us based on the amount of data transferred and the number of requests, which means we can use the API to delete the cache at no cost. As a result, we now have an optimized cache management system for our LandingHub operations." 

Meanwhile, the TeN team has gained greater control while simplifying management. "Cloudflare allows for greater flexibility via the cache rules within cache control," says Kudo. "And its UI is really intuitive, which I really appreciate."

### Shifting from reactive security to security by default

Rolling out Cloudflare has also helped TeN enhance security. Although LandingHub had not experienced any major security incidents, the TeN team knew they needed to strengthen their security posture to prevent future attacks.

To address potential vulnerabilities, TeN implemented Cloudflare advanced DDoS protection and advanced application security with the Cloudflare web application firewall (WAF) and rate limiting capabilities.

 "By implementing Cloudflare services, our security resilience has significantly improved," says Kudo. "Before Cloudflare, we were only bringing in countermeasures after detecting signs of an attack, so we weren't adequately prepared for unknown threats. But now we have active protection." 

The Cloudflare security services enable the team to customize protection according to their unique requirements. "I really like how it prioritizes security while allowing us to overwrite the action for each rule, so we can fine-tune it to our needs while still being protected by default," says Kudo "Similarly, the WAF comes with multiple managed rule options as default. But we can also define extra rules more flexibly and adjust actions as needed."

### Accelerating app releases with the Cloudflare Developer Platform

To help streamline development of new features for LandingHub, TeN moved from AWS Lambda and S3 to the Cloudflare Developer Platform with the Cloudflare Workers serverless development environment and [Cloudflare R2 object storage](https://www.cloudflare.com/developer-platform/products/r2/). 

"The Workers documentation made it easy to understand the workflow from development to release," says Kudo. "When we were using Lambda on AWS, we needed to first estimate how much memory we'd need, and how much CPU power we'd need as a result. To do this, we first needed to monitor the traffic, essentially performing capacity planning. But now, Workers offers us scalable architecture and a simple billing system based on the number of requests and CPU processing time. We don't need to take capacity planning steps like determining how many resources are required for each deployment, and I think that's great." 

As a result, the TeN team can accelerate delivery of new app features that improve their clients' site performance while TeN experiences fewer issues with the app in production. 

"The deployment speed has dramatically improved," says Kudo. "With AWS, we needed a lead time of around 10 to 15 minutes before we could actually deploy new source content to the AWS environment. On top of that, we also encountered cases where things that worked locally would break once we deployed them to the server. With Workers, we can deploy in just a few minutes, and we don't even need to think about server architecture or resources. We've been able to remove many of the barriers we faced when making changes on the app."

### Exploring additional Workers capabilities

Now that TeN has completed their Cloudflare migration, the team is interested in taking advantage of additional Workers features, as well as Cloudflare for SaaS, which expands the current SaaS architecture into a multi-tenant version that can support TeN's continued customer growth. In the next phase, they are also looking at performing regular performance evaluations of services using Browser Rendering API of Workers, implementing Workers AI, and making use of Workers Logs.

Hiroiku Inoue, Head of LandingHub / Executive Officer shares, as the TeN team moves forward, they know they can count on the Cloudflare partnership. "Despite the complexities of being a global team that transcends borders, they responded flexibly to our business requests, which has been super helpful. Cloudflare is the perfect partner for us, combining reliability, efficiency, and flexibility, and we're truly excited about building on this partnership going forward.".

![TeN logo](https://images.ctfassets.net/slt3lc6tev37/4v32Eo0RpWeHTBghqCaJsN/33767832869a4000f3d067ddebef5629/TeN_Meta.png) 

TeN migrated to Cloudflare to enhance security, speed development and reduce costs for the company's LandingHub service, which delivers their customer's online contents efficiently

 Products Used 

CDN DDoS Protection WAF Workers 

 Details 

 Industry 

High Technology 

 Region 

Asia-Pacific 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"TeN & Cloudflare | Customer Story","description":"TeN migrated to Cloudflare to enhance security, speed development and reduce costs for the company's LandingHub service, which delivers their customer's online contents efficiently.","url":"https://www.cloudflare.com/case-studies/ten/","inLanguage":"en"}
```
