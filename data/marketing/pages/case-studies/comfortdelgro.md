---
title: ComfortDelGro &amp; Cloudflare | Customer Story
description: ComfortDelGro Strengthens Digital Resilience Across Its Global Operations with Cloudflare
image: https://cf-assets.www.cloudflare.com/slt3lc6tev37/EnIeQ7lpMYZ7rzkVOHjW6/398dd7d4012669b53a02b9c0771603b8/CDG_CFCS_Meta.JPG
---

# ComfortDelGro

> #### "  Since we deployed Cloudflare with advanced rate limiting and advanced blocking capabilities, our external-facing applications and websites have a much higher accessibility ratio than before. " 

## ComfortDelGro strengthens digital resilience across its global operations with Cloudflare

ComfortDelGro (CDG) is one of the largest multi-modal transport operators in the world, with a presence across 13 countries. The Singapore-headquartered company runs both private mobility — taxi and point-to-point transport, concentrated in Singapore, Australia, the UK, and China — and public transport, operating buses and rail in Singapore, the UK, Sweden, Australia, and New Zealand. Under the CMAC Group which they acquired, the company also provides travel disruption management, helping travelers navigate airport closures and missed connections..

Running that many transport and travel businesses across that many regulatory environments means ComfortDelGro's IT organization has to balance a consistent Group-wide cybersecurity baseline with the flexibility required by local operations. "Singapore's threat landscape differs significantly from Australia's, which in turn looks quite different from what we see in Europe and the UK," says Dirk Paul Sibiet, Group Chief Information Officer at ComfortDelGro. Over the past three years, the company has moved away from a business-unit-siloed structure towards a more standardized, consolidated operating model — both technically and operationally — making it possible to compare security metrics across regions because the underlying data now comes from the same set of solutions.

Today, Cloudflare forms an important external-facing layer of that model. ComfortDelGro's public-facing environments route through Cloudflare first for DDoS, WAF and advanced bot protection, which — in combination with the Group's broader layered security framework — giving the business confidence that services will remain reliably available to customers.

### Standing at the front gates of a 13-country mobility network

To run public-facing booking systems in markets as different as Singapore and Sweden means that uptime is critical. ComfortDelGro brought in Cloudflare roughly four and a half to five years ago specifically to optimize the uptime and accessibility, and the results have compounded since: Reduced bot-driven disruption on affected booking services by approximately 90% in the initial months after deployment Maintained availability above 99.9% for in-scope external-facing applications Blocked a targeted API attack pattern against a subsidiary over an 18-month period using Cloudflare API Shield and its self-learning, dynamic rule creation Consolidated global DNS management for every business unit onto a single Cloudflare portal Cut the onboarding time for a new market integraton, compressing from roughly four-and-a-half month process into less than one week

"Cloudflare comes into the strategy, in essence, as the front-gate security guards to filter out everything that comes to us from the external world," says Dirk .

What follows is the story of how a mobility company with a genuinely global attack surface used Cloudflare to go from having no real answer for bot-driven outages in early 2021 to running a unified, globally deployed security solution across the URLs the company operates.

### When driving-school bots locked out real learners

Before Cloudflare, existing controls did not provide the bot-management and API-protection capabilities required for these use cases. "Before Cloudflare, one of our biggest challenges was that we had no tools available to manage the uptime of our internet-facing applications, which were at that point being targeted by bots," Dirk says.

The trigger was a pair of concrete problems, both driven by bots competing for scarce, high-demand slots. First, ComfortDelGro's driving school released new lesson slots to learners on a schedule, and bots would snap up the available slots within seconds — leaving genuine learners facing an unresponsive site and unable to book. Second, on the taxi platform, some drivers used bots to secure published advance bookings, degrading service for other drivers competing for the same jobs. In both cases, automated traffic was disadvantaging legitimate users and affecting the availability and fairness of the service. 

"The result of those bots was that the bots were eating up both the bandwidth and the processing capability of the applications at the backend, users were not able to complete their transactions in a timely manner, which in turn resulted in a lot of negative feedback on social media on the quality of the services being offered," Dirk says.

### Fending off learner-booking bots with Rate Limiting and a Global CDN

Following a proof of concept evaluation, Cloudflare best met ComfortDelGro requirements for stability, mitigation effectiveness and performance. "Cloudflare was the most stable, and the solution that was able to mitigate the bot attacks in the most effective manner at that time," Dirk says.

Cloudflare went in first as a CDN with basic rate limiting protecting the applications hit hardest by bots. From there, deployment expanded until it covered the entire company. "Cloudflare is now globally deployed," Dirk says. That footprint underpins a broader, multi-layered security architecture, which pairs Cloudflare's external-facing filtering with a more traditional IT stack — firewalls, IDS, IPS, and endpoint detection and response — as the company shifts from purely preventive controls toward active defense built on early detection and rapid containment.

### Turning an unexplained breach into dynamic, self-learning API Rules

The next expansion of the Cloudflare relationship came out of an incident, not a plan. Following a security incident involving a subsidiary API environment, the team sought greater visibility into traffic patterns and additional mitigation options. Working with its Cloudflare support partner, First Wave Technology, the company deployed Cloudflare API Shield as a proof of concept specifically to reconstruct the incident.

The tool delivered on both fronts. "With the implementation of the Proof of Concept (POC), we were able to identify how the threat actor was behaving, get in-depth visibility of the patterns that the threat actor was leveraging on, and create the customized rules to block those patterns in a dynamic manner," Dirk says. What set API Shield apart from competing tools, in his view, was how limited ongoing manual tuning it required. "That is what I think made the Cloudflare API Shield stand out from the competitors — that ability to easily create those customized rules, and when necessary, have the trigger point of the rules become a dynamic factor, so that you don't necessarily need to have eyes on the screen 24/7, but that it can actually learn and adapt the application of the trigger as and when needed."

The team reports that, since the implementation of tailored dynamic mitigation controls, the same or similar attack patterns have not been observed over the past 18 months. First Wave Technology's role in getting there went beyond a single deployment. "They've been instrumental in enabling us to get the best value out of the products that we have from Cloudflare," Dirk says. First Wave Technology now provides ComfortDelGro's with a fully managed service for its Cloudflare deployment.

### From social media backlash to faster market entry

"We have seen the continuous availability of our external-facing applications improve to beyond 99.9%," Dirk says. "Since we deployed Cloudflare with advanced rate limiting and advanced blocking capabilities, our external-facing applications and websites have a much higher accessibility ratio than before." Improved availability supports customer access and business continuity across ComfortDelGro's digital services. On the taxi platform, earlier driver frustration has given way to unprompted comments about how much easier it has become for drivers to secure advance booking jobs.

Cloudflare has also changed how quickly ComfortDelGro can bring new markets and new applications online. The company has centralised DNS management for in-scope Group domains through a common management plane. "It has enabled us to consolidate globally all our DNS within Cloudflare, which saves a substantial amount of operational overhead in managing different DNS platforms and solutions," Dirk says. "Everything is now centralized on Cloudflare, accessible and manageable through a single portal globally."

That consolidation showed its value directly in April 2026, when one of ComfortDelGro's UK subsidiaries switched providers. "When we switched out from a different provider for one of our UK subsidiaries in April 2026, the whole migration from the previous solution to Cloudflare was completed in less than a week," Dirk says. By comparison, the UK team's original implementation of its previous solution had taken about four and a half months. 

### Preparing the front gates for the Age of Generative AI

Looking ahead, Dirk is candid that ComfortDelGro's next security priority isn't really about the mobility business at all — it's about how employees across the company are already using generative AI tools. "The hottest topic is going to be how do I secure the organization against the proliferation of AI and Gen AI tools being used in the organization," he says. "How do I structure — and I'm not going to say control, but have at least oversight of what is the data that is being used by the AI tools. Getting that security framework defined and implemented is top of my mind for the next 12 to 18 months."

Where Cloudflare fits into that picture is still being worked out. ComfortDelGro is currently drawing up its own AI governance framework and policies, and will then evaluate which tools can enforce and provide oversight over them — a decision Dirk says the company will make as that framework takes shape over the coming months.

![ComfortDelGro logo](https://cf-assets.www.cloudflare.com/slt3lc6tev37/35a1jsxlPkyHOOWLY3HVCy/64a6c8e1e2717b079872823e0dd44764/CDG_Logo_H_RGB.png) 

ComfortDelGro Strengthens Digital Resilience Across Its Global Operations with Cloudflare

 Cloudflare Products 
* [  Cloudflare WAF ](/application-services/products/waf/)
* [  Cloudflare DDoS Protection ](/ddos/)
* [  Cloudflare Bot Management ](/application-services/products/bot-management/)
* [  Cloudflare Advanced Rate Limiting ](/application-services/products/rate-limiting/)
* [  Cloudflare API Shield ](/application-services/products/api-shield/)
* [  Cloudflare CDN ](/application-services/products/cdn/)
* [  Cloudflare DNS ](/application-services/products/dns/)

 Details 

 Industry 

Travel & Leisure 

 Region 

Asia-Pacific 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"ComfortDelGro & Cloudflare | Customer Story","description":"ComfortDelGro Strengthens Digital Resilience Across Its Global Operations with Cloudflare","url":"https://cf-assets.www.cloudflare.com/slt3lc6tev37/EnIeQ7lpMYZ7rzkVOHjW6/398dd7d4012669b53a02b9c0771603b8/CDG_CFCS_Meta.JPG","inLanguage":"en"}
```
