---
title: VistaPrint &amp; Cloudflare | Customer Story
description: VistaPrint enhances global content delivery and secure employee access with Cloudflare performance services and Zero Trust Network Access.
image: https://www.cloudflare.com/preview.png
---

# VistaPrint

> #### "  It used to take nearly an hour to prepare and deploy a global rollout. With Cloudflare in our automation pipeline, we can do it in seven minutes. Reversing a broken configuration is even faster. " 

## VistaPrint partners with Cloudflare to modernize legacy content delivery and remote user access following a major infrastructure transformation

VistaPrint is the design and marketing partner to millions of small businesses around the world, empowering each one to live their dreams. For 25 years, VistaPrint has helped small businesses look, work, and feel credible through high-quality marketing products and solutions that include signage, logo apparel, promotional products, flyers, postcards, business cards, websites and digital marketing.

### Updating legacy solutions to secure and streamline content delivery management and remote user access

VistaPrint sought a flexible foundation for global printing operations after moving from an outdated monolithic architecture to an agile microservices framework for future innovation, including AI-driven design tools like [VistaCreate](https://create.vista.com) and [Logomaker](https://www.vistaprint.com/logomaker). This shift revealed weaknesses in their third-party content delivery and VPN access. Legacy JSON configurations (40,000 lines) delayed updates, while the VPN created security gaps, slowed management, and complicated onboarding, hindering innovation.

To address these challenges, VistaPrint turned to Cloudflare to:

* Improve performance of their web application — to support stronger customer experiences
* Streamline key development steps to speed up innovation
* Boost secure access for their remote workforce

"We ran a proof of concept involving four or five vendors," explains Andrew Dobson, VistaPrint's Senior Software Engineer for Edge Services. "Cloudflare came out on top. A greater global presence, lower latency, and improved configurability were why we pivoted."

### Improving global performance and availability with Cloudflare

Following the shift to microservices, VistaPrint's content delivery network (CDN) solution struggled to support the new microservices architecture. The dated solution impacted VistaPrint's ability to respond quickly to incidents or to meet performance expectations.

"We faced constant delays, with simple configuration changes taking over 40 minutes for global convergence," says Dobson. "Only vendor admins could make routing adjustments, disrupting workflows and costing valuable time. We needed a faster, more flexible solution."

VistaPrint adopted Cloudflare's [performance solutions](https://www.cloudflare.com/application-services/solutions/performance/) to improve speed, increase availability, and simplify scaling—starting with the [Cloudflare CDN](https://www.cloudflare.com/application-services/products/cdn/). Running in 335 cities in over 125 countries, the Cloudflare network ensures that VistaPrint's international users can reliably access the company's content and digital services.[ Cloudflare DNS](https://www.cloudflare.com/application-services/products/dns/), the unified Cloudflare platform, and a consolidated control plane played a pivotal role in smoothing the transition.

"For the microservices cutover, we deployed a new configuration—flipping 'false' to 'true'—hit go, and we were on Cloudflare," says Dobson. "It was so seamless, it felt like magic."

Complementing the CDN, Cloudflare's [Argo Smart Routing](https://www.cloudflare.com/application-services/products/argo-smart-routing/) — which dynamically detects network congestion and reroutes user traffic — provided significant performance gains both in testing and under real-world conditions.

"Switching on Argo improved the performance of our customer-facing applications in Australia by over 100 milliseconds," says Dobson. "Cloudflare is 30 percent faster overall in regions critical to our business."

With Cloudflare streamlining content delivery to customers worldwide, VistaPrint increased content cache rates to over 70%. The switch improved site and application performance while reducing the expense of passing regional traffic through origin servers. Dobson estimates that in addition to outperforming the other vendors tested, Cloudflare was about 25% more cost-effective than their previous vendor.

### Enhancing global application performance while eliminating legacy complexity with Workers

Initially drawn to Cloudflare for the performance and content delivery, VistaPrint rapidly recognized the benefits of Cloudflare as a single-vendor solution. The [Cloudflare developer platform](https://www.cloudflare.com/developer-platform/), specifically [Workers](https://workers.cloudflare.com/) — serverless computing on the Cloudflare global network — offered unmatched flexibility and control in configuring global traffic. Running as close to the customer as possible, Workers is central to maximizing the potential of VistaPrint's new cloud-native applications, automating routing and optimizing cloud-native applications by directing traffic to the right microservices.

"Cloudflare gives us dynamic, path-based routing and edge logic that just weren't possible before," says Dobson. "We can achieve way more, and we no longer rely on someone else for critical configurations. The biggest impact has been our improved time to deployment — our customers benefit from the changes in minutes."

Using Terraform and the IaC Integration allowed VistaPrint to reduce human error within Workers and the Cloudflare API, cutting complexity and deployment times. Replacing their prior vendor's UI and JSON configs, VistaPrint was able to centralize and automate routing in Cloudflare, ensuring consistency and reducing human error.

"Scrolling through 40,000 lines of clunky JSON to manage our original configurations made even the smallest change difficult. Unifying everything in Cloudflare means we no longer need to create separate page rules or manage massive files," says Dobson. "It used to take nearly an hour for a global rollout to complete. With Cloudflare in our automation pipeline, we can do it in seven minutes. Reversing a broken configuration is even quicker — we can roll back changes faster than we roll them out. "

Automating routing with Cloudflare lets VistaPrint's edge team focus on innovation over maintenance. Workers-driven routing, dynamic rules, and targeted configurations enhance efficiency, performance, and user experience. Since switching, 40–60 Workers now handle 90% of public traffic, optimizing traffic management and testing.

"We only had a handful of routes in the old system, now we have a lot more — Workers helped us refine and optimize our edge routing," says Dobson. "They are the ultimate tool for solving multiple challenges — what started as a backfill for old configurations has become our go-to tool."

### Securing global access and eliminating risks with Zero Trust Network Access

As VistaPrint shifted to a remote-first model during the pandemic, their legacy VPN Client software caused high latency, unreliable connections, and security risks due to inflexible access policies.

For example, an internal review of their existing user and third-party VPN client solutions' security exposed some vulnerabilities that may be exploited.

"We recognized the potential for the vulnerabilities that lie within our Current VPN client solution to be exploited, which made us question whether the vulnerability extended beyond our contractors," says Michael Lee, VistaPrint's Manager of Network Engineering. "Retrofitting legacy user access just wouldn't work — we wanted the cloud connectivity, network automation, and programmability that Cloudflare offered." 

VistaPrint deployed Cloudflare Access, a ZTNA service, starting with third-party contractors and later extending to 1,200 employees over roughly 4 months. Lee estimates that the first phase reduced perimeter security vulnerabilities by 20%, with further improvements as the full workforce of 7,000 is onboarded. 

"Our users no longer connect to everything — they can only access the applications they need," says Lee. "Cloudflare gave us the ability to microsegment, moving from an allow-all topology to a more secure model that protects our users and our infrastructure regardless of their location in or outside our offices." 

Adopting this Zero Trust approach has supported VistaPrint's strategy to deprecate physical offices and data centers and has helped improve the end-user experience with faster, more reliable connections. With Cloudflare ZTNA, VistaPrint no longer has to backhaul remote user traffic through on-prem VPN appliances.

"One of the reasons I love Cloudflare is because the global network provides a direct, low latency connection that improves the experience of everyone accessing our SaaS applications, cloud networks, and other remote access tools and services," says Lee. "Compared to the old VPN, our users see up to a 250-millisecond improvement connecting to our updated cloud-first infrastructure."

### Friction-free user access and improved administrative efficiency

"Adopting ZTNA simplified onboarding for contractors and employees, making it easier than with GlobalProtect, and freeing VistaPrint's engineers from administrative tasks."

"Cloudflare has improved our team's overall efficiency — we no longer need costly, time-consuming cycles of upkeep, patches, maintenance, hardware revisions, and everything else that came with maintaining the old remote access infrastructure," says Lee. "Before, when someone couldn't connect, they went straight to the network team. Now, because Cloudflare is so straightforward, we rely on the service desk to handle user errors and other common problems, only escalating critical issues."

Based on its successes, VistaPrint sees Cloudflare as an important development and security partner. The company plans to continue harnessing tools like ZTNA and Workers to help drive development and enhance the quality of its products, customer services, and customer user experience. 

"There is so much potential there," says Lee. "Cloudflare's low cost and global presence offer us endless opportunities as we shift more toward infrastructure-as-code, programmability and automation, AI, and a greater understanding of how we can use Zero Trust to improve cloud security and visibility."

![VistaPrint logo](https://images.ctfassets.net/slt3lc6tev37/7znGAC2v639IvB8PgCxlgH/d5c79b8f342424115ea3bce27f7db264/Logo_RGB_Vista_Color.png) 

VistaPrint enhances global content delivery and secure employee access with Cloudflare performance services and Zero Trust Network Access.

 Products Used 

CDN DNS Workers Access 

 Details 

 Industry 

Publishing 

 Region 

North America 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"VistaPrint & Cloudflare | Customer Story","description":"VistaPrint enhances global content delivery and secure employee access with Cloudflare performance services and Zero Trust Network Access.","url":"https://www.cloudflare.com/case-studies/vistaprint/","inLanguage":"en"}
```
