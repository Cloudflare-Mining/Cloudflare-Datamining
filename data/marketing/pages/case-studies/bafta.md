---
title: BAFTA &amp; Cloudflare | Customer Story | Cloudflare
description: The British Academy of Film and Television Arts (BAFTA) has used Cloudflare's platform to bring their public voting system in‐house, prioritizing brand trust, security, and scalability.
image: https://cf-assets.www.cloudflare.com/slt3lc6tev37/68WTRpzd7zVAfH0hP0oi9m/99f4cb6a6993d519aaed088c8ea67886/bafta_meta_image.png
---

# BAFTA

#### **BAFTA updates their public voting system with Cloudflare to achieve scalability, resilience, and cost efficiency**

The British Academy of Film and Television Arts is a world-leading independent arts charity that supports, develops, and promotes the film, games, and television industries. With over 14,000 members, BAFTA celebrates excellence through annual awards, fosters new talent through year-round learning initiatives, and drives industry sustainability, equality, and inclusion.

##### **BAFTA's requirement for scalability and resilience**

BAFTA is known around the globe for its highly coveted film and television awards. While most are determined by members and panels of industry professionals, the winner of the prestigious P&O Cruises Memorable Moment Award is decided by an online vote open to the general public.

The availability, security, and integrity of that system are critical to BAFTA's reputation. Any failure or compromise would pose significant reputational risk. "The BAFTA brand has to be associated with trustworthiness and excellence," says Ben Jefferson, CTO of BAFTA.

Nominees are typically announced in March with voting closing in late April. Open and closing dates, active marketing by BAFTA and sponsors, and less predictable viral trends create highly variable traffic involving millions of voters mean that the traffic profile is spiky and unpredictable. This would put a conventional architecture under considerable strain.

BAFTA's previous voting solution had been outsourced, limiting visibility, control, and cost efficiency. The system had to be sized for peak load, and then kept this significant compute resource standing idle for most of the year, making it prohibitively expensive to roll out public voting to additional awards. "Those core business systems are so critical to BAFTA that it's really important we know exactly what's going on and that we're in control of them," Jefferson explains.

##### **Reducing costs with Cloudflare**

BAFTA first adopted Cloudflare to reduce load on the organization's public website, deploying the [Cloudflare Content Delivery Network (CDN)](https://www.cloudflare.com/application-services/products/cdn/) in front of its origin servers.

The decision was driven by ease of implementation, affordability, and a recommendation from BAFTA's web agency. It quickly became apparent that Cloudflare offered day-to-day operational value well beyond CDN. The platform enabled BAFTA to detect and block unusual traffic patterns, prevent minor denial-of-service events, and stop third-party proxy sites from republishing BAFTA content for SEO manipulation — all without touching web server configurations.

"Having all the traffic go through Cloudflare gives us really powerful visibility into what's happening on the site," Jefferson notes. "Being able to block traffic using Cloudflare rules without changing server configuration is a powerful day-to-day admin tool."

##### **Bringing public voting in-house**

Faced with the cost, scale, and resilience challenges of the existing platform, BAFTA decided to bring public voting in-house rather than continue relying on third-party providers. This delivered greater cost control, improved security and transparency, and full architectural ownership of a mission-critical system. "Any security compromise would be catastrophic for the brand," says Jefferson.

The team identified serverless architecture as the natural fit, given the extreme variance in traffic and near-zero usage for most of the year.

##### **Building a public voting system on Cloudflare**

[Cloudflare Workers](https://workers.cloudflare.com/) provided the automated scalability needed to handle volatile public voting traffic. With pricing based on active execution time rather than per-request charges, the economics work well at very high volumes — and the computational tasks involved, such as vote counting and encryption, are well supported by the platform's built-in capabilities. "Under busy conditions, our new system will cost us tens of dollars per million votes. That's a pretty good price point," says Jefferson. "If we get a million votes, that's a great outcome — and we're happy to pay a few tens of dollars for that."

For most of the year, when voting is inactive, costs drop to zero entirely. "We can now run multiple public votes without incurring significant additional cost. We couldn't get close to this cost profile using a conventional server-based approach," notes Jefferson.

[Cloudflare Durable Objects](https://developers.cloudflare.com/durable-objects/) handle vote batching and geographic redundancy. [Cloudflare R2](https://www.cloudflare.com/products/r2/) serves as the durable backing store between edge processing and internal systems, absorbing unpredictable traffic peaks by feeding votes into backend systems at a steady, controlled rate. Internal teams push new vote-round metadata via a Workers API endpoint, stored directly in R2. [Cloudflare KV](https://developers.cloudflare.com/kv/) handles statistics and internal monitoring, while [Cloudflare Logpush](https://developers.cloudflare.com/logs/logpush/) provides an encrypted failsafe for vote recovery.

"What we wanted to do was use Cloudflare to receive the votes, take that big peak, and batch them up so our internal systems are insulated from those unpredictable spikes," Jefferson explains. "The worst case is we back up votes in R2 and wait a short while for the data to flow through — but our backend systems are never exposed to sudden traffic spikes."

##### **What's next: scaling the public voting platform**

Cloudflare's solutions have opened the door to expanding public voting beyond the P&O Cruises Memorable Moment Award — potentially including the BAFTA Games Award and other prominent categories.

BAFTA is also evaluating Cloudflare Workers for future architecture initiatives, including a potential iteration of the member voting system."The developer platform works nicely, the APIs are intuitive, and the documentation makes sense," Jefferson concludes. "It was affordable, easy to implement. It all just worked."

[![BAFTA](https://cf-assets.www.cloudflare.com/slt3lc6tev37/7J46Cg1yvhVCD1dYz6YT0V/925507482f4fe3fa314c1ccf40f167d1/bafta_logo.jpg)](https://www.bafta.org/)

Related Case Studies

- [Eurovision](https://www.cloudflare.com/case-studies/eurovision/)
- [Once](https://www.cloudflare.com/case-studies/once/)
- [RTE](https://www.cloudflare.com/case-studies/rte/)
- [Cybernews](https://www.cloudflare.com/case-studies/cybernews/)

Related Products

- [CDN](https://www.cloudflare.com/application-services/products/cdn/)
- [Workers](https://workers.cloudflare.com/)
- [Durable Objects](https://www.cloudflare.com/developer-platform/products/durable-objects/)
- [R2](https://www.cloudflare.com/developer-platform/products/r2/)
- [Workers KV](https://www.cloudflare.com/developer-platform/products/workers-kv/)
- [Logpush](https://developers.cloudflare.com/logs/logpush/)

Key Results

- Built a system capable of handling 300,000+ votes per minute
- Reduced peak operational costs to double-digit dollars per million votes
- Eliminated dormant system costs during off-peak months via serverless architecture

" The developer platform works nicely, the APIs are intuitive, and the documentation makes sense. It was affordable, easy to implement. It all just worked. "

**Ben Jefferson**  
CTO

" We can now run multiple public votes without incurring significant additional cost. We couldn't get close to this cost profile using a conventional server-based approach. "

**Ben Jefferson**  
CTO

GETTING STARTED

- [Free plans](https://www.cloudflare.com/plans/free/)
- [Small business plans](https://www.cloudflare.com/small-business/)
- [For enterprises](https://www.cloudflare.com/enterprise/)
- [Get a recommendation](https://www.cloudflare.com/about-your-website/)
- [Request a demo](https://www.cloudflare.com/plans/enterprise/demo/)
- [Contact sales](https://www.cloudflare.com/plans/enterprise/contact/)

SOLUTIONS

- [Connectivity cloud](https://www.cloudflare.com/connectivity-cloud/)
- [Application services](https://www.cloudflare.com/application-services/)
- [SASE and workspace security](https://www.cloudflare.com/sase/)
- [Network services](https://www.cloudflare.com/network-services/)
- [Developer platform](https://www.cloudflare.com/developer-platform/)

SUPPORT

- [Help center](https://support.cloudflare.com)
- [Customer support](https://dash.cloudflare.com/?to=/:account/support)
- [Community forum](https://community.cloudflare.com)
- [Developers Discord](https://discord.com/invite/cloudflaredev)
- [Lost account access?](https://developers.cloudflare.com/support/account-management-billing/common-account-questions/login-and-account-issues/)
- [Cloudflare status](https://www.cloudflarestatus.com/)

COMPLIANCE

- [Compliance resources](https://www.cloudflare.com/trust-hub/compliance-resources/)
- [Trust](https://www.cloudflare.com/trust-hub/)
- [GDPR](https://www.cloudflare.com/trust-hub/gdpr/)
- [Responsible AI](https://www.cloudflare.com/trust-hub/responsible-ai/)
- [Transparency report](https://www.cloudflare.com/transparency/)
- [Report abuse](https://www.cloudflare.com/trust-hub/abuse-approach/)

PUBLIC INTEREST

- [Project Galileo](https://www.cloudflare.com/galileo/)
- [Athenian Project](https://www.cloudflare.com/athenian/)
- [Cloudflare for Campaigns](https://www.cloudflare.com/campaigns/)
- [Project Fairshot](https://www.cloudflare.com/fair-shot/)

COMPANY

- [About Cloudflare](https://www.cloudflare.com/about-overview/)
- [Network map](https://www.cloudflare.com/network/)
- [Our team](https://www.cloudflare.com/people/)
- [Logos & press kit](https://www.cloudflare.com/press/press-kit/)
- [Diversity, equity, & inclusion](https://www.cloudflare.com/diversity-equity-and-inclusion/)
- [Impact/ESG](https://www.cloudflare.com/impact/)

[Facebook](https://www.facebook.com/cloudflare) [X](https://x.com/cloudflare) [LinkedIn](https://www.linkedin.com/company/cloudflare) [Youtube](https://www.youtube.com/cloudflare) [Instagram](https://instagram.com/cloudflare)

© 2026 Cloudflare, Inc. [Privacy Policy](https://www.cloudflare.com/privacypolicy/) [Terms of Use](https://www.cloudflare.com/website-terms/) [Report Security Issues](https://www.cloudflare.com/disclosure/)![privacy options](https://www.cloudflare.com/img/privacyoptions.svg)Cookie Preferences [Trademark](https://www.cloudflare.com/trademark/)