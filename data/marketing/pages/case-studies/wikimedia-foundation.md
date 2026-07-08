---
title: Wikimedia Foundation
description: Cloudflare Magic Transit got Wikimedia's network back online after a massive DDoS attack, and it continues to safeguard the security and reliability of their data centers.
image: https://www.cloudflare.com/preview.png
---

# Wikimedia Foundation

> #### "  From an infrastructure risk perspective, DDoS is very high on our list, and Cloudflare Magic Transit is foundational to our DDoS mitigation strategy. " 

## Cloudflare Magic Transit Gets Wikimedia Back Online After Massive DDoS Attack

The Wikimedia Foundation is the nonprofit organization that operates Wikipedia and a range of other free knowledge projects, including Wikimedia Commons, Wikiquote, and Wiktionary. The Foundation is committed to free knowledge, and its vision is to create a world in which all people can freely share in the sum of all knowledge. 

While these projects are run by a global community of volunteers, the Foundation's staff maintains these projects' technology backbone, advocates for policies and protections that support free knowledge, and supports volunteers in their efforts to capture knowledge across languages, cultures, and continents.

**Challenge: Halt a massive DDoS attack that took Wikimedia sites offline worldwide**

"Wikimedia wants to become the essential infrastructure of the ecosystem of free knowledge," explains Grant Ingersoll, CTO of the Wikimedia Foundation. "We want everyone to be able to access our content, use and incorporate it into their lives, enrich their lives, and help build a better internet."

Achieving this goal means Wikimedia's sites must be reliable, secure and fast. "The volunteers who create and edit all of our content can't do their work if our sites aren't accessible, or they're hard to use, or they're being vandalized by bots," says Faidon Liambotis, Director of Site Reliability Engineering. "I want my team to be able to sleep at night, confident that all of our websites are working."

On the security front, Wikimedia had not suffered a large DDoS attack for several years. Unfortunately, the organization's luck ran out on September 7, 2019, when a massive attack rendered its sites inaccessible—first in Europe, Africa, and the Middle East, and then in other parts of the world, including the U.S. and Asia. "At the attack's peak, it was hundreds of Gbps," recalls Chris Danis, Staff Site Reliability Engineer.

During the initial hours of the outage, Wikimedia's team tried unsuccessfully to stop the attacks and get its sites back online. "We attempted several mitigations that involved remapping our GeoDNS-based load balancing, and tried some traffic engineering measures when traffic was entering via our peering links," explains Danis. 

**Solution: Wikimedia uses Magic Transit to get back online quickly**

Cloudflare reached out to Wikimedia and offered to assist using Magic Transit, a solution that protects network infrastructure. Liambotis recalls that they reached out immediately at the time of the attack, even though it was Friday evening at the time. "When the team contacted us, they already knew what was going on." he says.

"I think Cloudflare's security operations center and threat intelligence team already knew the attack signature—TCP ACK from port 65535 —before we asked them for anything," adds Danis. "Cloudflare quoted us attack estimates that were significantly more than what we were able to measure. Once Magic Transit was turned on, Cloudflare measured the attack (at different points, in different units) at \~300Gbps of bandwidth, 105MPPS of TCP ACK traffic, and 340MPPS of UDP floods."

Liambotis reports that with Magic Transit, his team was able to stop the attack by making the necessary changes in their routing policies. "However," he notes, "This is a simplification. The attack was on and off, changing patterns. Magic Transit resolved the problem, even as the attack moved."

**Results & Benefits: Magic Transit Is an Essential Piece of Wikimedia's DDoS Defense Strategy**

Wikimedia continues to use Magic Transit to mitigate DDoS attacks. Liambotis appreciates that the tool can be turned on and off as needed. "Being able to turn off Cloudflare's announcements of our IP space gives us options in the event that something goes wrong."

Magic Transit also does not interfere with the existing end-to-end encryption between Wikimedia projects and their users, even when it is active. This, in addition to its technical capabilities, made Magic Transit the right choice for the team. "We appreciated Cloudflare's responsiveness to our security and privacy needs. As an organization, we are very sensitive to privacy concerns."

Wikimedia also appreciates that Magic Transit filters traffic at the network edge instead of diverting it to a centralized scrubbing center, as some cloud "scrubbing" vendors do. Other options use a more centralized architecture," Liambotis says. "They don't filter at the edge but in a few distant scrubbing centers, so they didn't meet our requirements for capacity and capabilities. If they had a problem in one of their scrubbing centers, and our traffic got diverted there, we'd end up with latency problems."

"The routing changes required to enable a centralized scrubbing center affect both user latency and also time-to-mitigate," Danis adds. "Filtering globally at the edge, like Magic Transit does, saves on latency for legitimate traffic."

"From an infrastructure risk perspective, DDoS is very high on our list," Liambotis says, "and Cloudflare Magic Transit is foundational to our DDoS mitigation strategy."

The Wikimedia team continues to be impressed with Cloudflare's responsiveness when issues arise. "We've had to interact with Cloudflare's team on a few different occasions since deploying Magic Transit, including a tricky issue involving routing loops within parts of Cloudflare's network," Danis recalls. "We've been impressed with their speed of response and technical competency."

"Cloudflare has reliable infrastructure and an extremely competent and responsive team. They are well-positioned to deflect even the largest of attacks," adds Ingersoll.

![Wikimedia Foundation logo](https://images.ctfassets.net/slt3lc6tev37/7i7wo9ehGsB6Hdg1v6yplL/f3d2c8db7b2aefe9bca16c152f659c91/Wikimedia_Foundation_Logo.png) 

Cloudflare Magic Transit got Wikimedia's network back online after a massive DDoS attack, and it continues to safeguard the security and reliability of their data centers.

 Cloudflare Products 
* [  Magic Transit ](/network-services/products/magic-transit/)

 Products Used 

Magic Transit 

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
{"@context":"https://schema.org","@type":"WebPage","name":"Wikimedia Foundation","description":"Cloudflare Magic Transit got Wikimedia's network back online after a massive DDoS attack, and it continues to safeguard the security and reliability of their data centers.","url":"https://www.cloudflare.com/case-studies/wikimedia-foundation/","inLanguage":"en"}
```
