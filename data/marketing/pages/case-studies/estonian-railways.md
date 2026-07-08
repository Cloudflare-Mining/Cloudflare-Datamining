---
title: Estonian Railways &amp; Cloudflare | Customer Story
description: Estonian Railways reduces complexity by modernizing application access and network security with Cloudflare
image: https://www.cloudflare.com/preview.png
---

# Estonian Railways

> #### "  There can't just be one key to open every door; each user or device should only reach what they strictly need. With Cloudflare, we now have better control and visibility over who, what, and how applications are accessed. " 

## Estonian Railways modernizes how it connects and secures critical IT infrastructure using Cloudflare

Since 1870, state-owned Estonian Railways has been responsible for the high-quality and safe operations of the country's railway. Today, they manage more than 1,200 km of railroad tracks, including 61 rail stations — three of which are border stations (two at the Russian border, and one at the Latvian border). 

As the owner of the country's railway infrastructure, Estonian Railways also acts as a partner in solving cross-border issues, setting transit standards, and fostering Estonia's passenger and cargo transport business. 

### Challenge: Reduce IT complexity and accelerate secure access and hybrid work

As a 155-year-old critical infrastructure provider, Estonian Railways has accrued numerous technologies – many of which (such as legacy VPNs) are increasingly cumbersome to maintain. However, with the COVID pandemic and once-isolated Operational Technology (OT) systems becoming more Internet-connected, they recognized the need to modernize their IT systems and reduce complexity.

Estonian Railways has also seen heightened cyber risks arising from the region's geopolitical conflicts. As their chief information officer, Tonu Tammer describes, "The threat landscape is evolving. As a critical infrastructure provider, we are under constant attack not just from cyber criminals, but also hacktivists and state-sponsored actors."

To support the organization's mission to become the region's most digitally advanced railway infrastructure — while also defending against cyber risks — Estonian Railways sought to:

* [Modernize security](https://www.cloudflare.com/learning/network-layer/how-to-prepare-for-network-modernization-projects/) for their users, apps, and networks by shifting to a Zero Trust model
* Simplify IT management and free up time by consolidating security vendors
* Improve their security posture by increasing visibility into cloud app usage

To address these goals, Estonian Railways turned to Cloudflare's [connectivity cloud](https://www.cloudflare.com/connectivity-cloud/) for secure any-to-any connectivity.

### Accelerating transformation with Zero Trust for secure access

When Tammer joined Estonian Railways, he recognized that the mix of legacy technologies would be challenging for his lean team to manage long-term. "We have a lot of legacy IT, which is very typical when it comes to OT and supervisory control and data acquisition (SCADA) systems. For example, one contract has lasted over 50 years," he notes. Amidst this backdrop, the company's growing hybrid workforce (which includes remote employees and third-party contractors and partners) also increases risk.

Estonian Railways decided to reduce their overreliance on outdated perimeter-based network security and shift toward Zero Trust for secure application access, instead. 

After a public procurement process, Estonian Railways chose to consolidate with Cloudflare's [Security Service Edge (SSE)](https://www.cloudflare.com/learning/access-management/security-service-edge-sse/) platform, namely: [Zero Trust Network Access (ZTNA)](https://www.cloudflare.com/learning/access-management/what-is-ztna/), [secure web gateway (SWG)](https://www.cloudflare.com/learning/access-management/what-is-a-secure-web-gateway/), [cloud access security broker (CASB)](https://www.cloudflare.com/learning/access-management/what-is-a-casb/), and [remote browser isolation (RBI)](https://www.cloudflare.com/learning/access-management/what-is-browser-isolation/). Cloudflare collaborated with the local software partner, Mosaic OÜ, on the delivery.

In their first phase of deployment, Estonian Railways has made early progress on key Zero Trust access initiatives, including:

* Enforcing [multi-factor authentication (MFA)](https://www.cloudflare.com/learning/access-management/what-is-multi-factor-authentication/) for critical applications
* Managing and enforcing device posture checks
* Providing secure access to internal and public-facing web applications

"We can't give everyone VPN access to consume whatever they want. It can't be one key to open every door. Each user should only be able to access what they strictly need," emphasizes Tammer. "With Cloudflare, we have better control and visibility over who, what, and how applications are accessed." 

As Estonian Railways migrates workloads to the cloud, [network segmentation](https://www.cloudflare.com/learning/access-management/what-is-network-segmentation/) helps maintain business continuity. "We've used VPNs to connect a lot of different on-premises services, but they are like cardboard when it comes to security," says Tammer. "Cloudflare allows us to build concrete walls around legacy apps while we migrate to a Zero Trust architecture."

Furthermore, they have combined Cloudflare and Microsoft Entra and Intune capabilities to authenticate endpoint user device traffic, and enforce consistent device posture policies. Tammer says, "Combining Cloudflare and Microsoft is the simplest solution we have found that delivers all the possibilities of Zero Trust – without all the complexities. I've been pleasantly surprised with how seamlessly it all just works."

### Mitigating data loss and SaaS vulnerabilities

Cloudflare's CASB service has given Estonian Railways a greater understanding of their SaaS security posture by identifying potential data leaks and misconfigurations with easy API integrations.

For instance, before Cloudflare, Tammer says, "Let's say there were sensitive SharePoint files that should have been restricted to a small group of users, but were actually being widely shared internally. CASB suddenly exposes if that's happening. We can take faster action to prevent unauthorized activity and minimize data loss."

Cloudflare's CASB API integrations for monitoring critical platforms like Microsoft, Atlassian, and ServiceNow also saves time. "Cloudflare's connectivity cloud helps us put different clouds together in ways that we couldn't do ourselves," describes Tammer. "We could try to build the integrations ourselves, but it isn't my job to twist different things together to perform basic functions," describes Tammer. "Cloudflare lets me focus more on my actual job — making sure the overall system works and delivers value."

Cloudflare's overall ease of use also extends to its single-pane-of-glass management. Tammer says, "Unlike other cloud services that can overcomplicate things in their dashboard, Cloudflare has the right knobs when I've needed them. It's comprehensive — not cumbersome." 

### Accelerating and protecting web applications

Estonian Railways has further reduced complexity by consolidating key web application services onto Cloudflare. As Tammer notes, "Business needs are changing, and the way we do work is changing. It's difficult to minimize all of our organization's risks if we keep using so many vendors. Cloudflare has helped us reduce the amount of solutions and reduce technical complexity." 

Instead of multiple point solutions to connect to the Internet, the organization now uses Cloudflare's [content delivery network (CDN)](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/), [web application firewall (WAF)](https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf/), [DDoS protection](https://www.cloudflare.com/learning/ddos/how-to-prevent-ddos-attacks/), and real-time [smart routing](https://www.cloudflare.com/learning/performance/routing-vs-smart-routing/). 

"Defense must be layered, like an onion. The hope is that, if one layer fails, you always have the next, and the next, and so on," Tammer adds. "Cloudflare helps align all those layers so that the bad things won't derail our organization." 

Tammer has been particularly impressed by the scale of Cloudflare's network when it comes to protecting against DDoS and other web attacks, reducing latency, and serving content closer to Estonian Railways' customers.

"With Cloudflare, most, if not all, of the traffic from our users actually gets processed in Estonia. We don't need to backhaul traffic to some other data center, so round-trip times for network traffic are smaller," Tammer explains. "The responsiveness of Cloudflare's network is on a different level."

### What's next: Evolving to a SASE architecture

To continue building upon their initial [Zero Trust success](https://www.cloudflare.com/the-net/business-case-zero-trust/) for high-priority use cases, Estonian Railways ultimately plans to evolve to a [secure access service edge (SASE) architecture](https://developers.cloudflare.com/reference-architecture/architectures/sase/). Compared to traditional network security, [SASE](https://www.cloudflare.com/learning/access-management/what-is-sase/) offers several benefits such as reduced risk, more operational agility, stronger data policy enforcement, and improved hybrid work experiences. 

In describing the journey to SASE, Tammer says Estonian Railways is creating "a harmonized approach for our end users to connect to our services, irrespective of where they're located." 

He adds, "We need to separate the network paths that employees and partners use to connect to work applications from their personal Internet usage. Because if they're connecting to our infrastructure, it needs to have all the necessary network encryption, security, and performance." 

"Transitioning legacy architecture isn't easy," Tammer concludes. "Each business use case is very nuanced, and it's not one-size-fits-all. However, Cloudflare provides the toolbox we need to modernize our approach."

![Estonian Railways logo](https://images.ctfassets.net/slt3lc6tev37/5g3RFVSGwVYo8xce59SNhL/6e8c6abecb1d0f8bca78d6639a7d6794/estonian.png) 

Estonian Railways reduces complexity by modernizing application access and network security with Cloudflare

 Cloudflare Products 
* [  Access ](/sase/products/access/)
* [  Gateway ](/sase/products/gateway/)
* [  Browser Isolation ](/sase/products/browser-isolation/)
* [  DDoS Mitigation ](/ddos/)
* [  Argo Smart Routing ](/application-services/products/argo-smart-routing/)
* [  Content Delivery Network (CDN) ](/application-services/products/cdn/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)

 Products Used 

Access Gateway Browser Isolation DDoS Protection Argo Smart Routing CDN WAF 

 Details 

 Industry 

Travel & Leisure 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Estonian Railways & Cloudflare | Customer Story","description":"Estonian Railways reduces complexity by modernizing application access and network security with Cloudflare","url":"https://www.cloudflare.com/case-studies/estonian-railways/","inLanguage":"en"}
```
