---
title: ZIPAIR &amp; Cloudflare | Customer Story
description: Cloudflare enables ZIPAIR to block bots, safeguard ticketing systems, and maintain stable bookings during peak periods.
image: https://www.cloudflare.com/preview.png
---

# ZIPAIR

> #### "  Although customers may not perceive a 0.2‑second improvement in page load time, the more meaningful impact is increased server stability, which reduces customer frustration. " 

## **ZIPAIR reduces bot abuse and scraping with Cloudflare to protect booking revenue and customer experience.**

ZIPAIR Tokyo is a wholly owned subsidiary of Japan Airlines and a medium‑ to long‑haul low‑cost carrier (LCC) with a distinctive focus on routes between North America and Asia—unlike typical short‑haul LCCs. Its objective is to provide safe, secure, and efficient service to customers. As CIO and Vice President of IT Strategy & Development, Daisuke Nishiyama defines ZIPAIR's IT mission as "providing stable IT infrastructure and strengthening security to support safe, secure flights." 

### **A deep-seated bot problem is driving server instability**

The team's immediate need was an effective way to [block bot and scraper traffic](https://www.cloudflare.com/learning/ai/how-to-prevent-web-scraping/). ZIPAIR's booking site faced unauthorized bot activity—including scraping and fraudulent bookings—that, for some flights, accounted for up to 90% of traffic, according to ZIPAIR. This drove high origin load and, at times, caused failures on booking pages, reducing availability. With Akamai, the incumbent WAF provider, the team lacked direct insight into suspicious traffic and had to engage the account team repeatedly. As Nishiyama noted, "when traffic exceeded certain thresholds at the origin, it was impractical to determine whether it came from bots or legitimate users." In evaluating a new WAF provider, Cloudflare was recommended internally and offered cost‑effective, competitive commercial terms. ZIPAIR therefore ran a proof-of-concept comparison between Cloudflare and Akamai to validate stronger bot-mitigation options and improved visibility.

After a successful PoC, ZIPAIR adopted Cloudflare Bot Management, Cloudflare Web Application Firewall (WAF), and Cloudflare CDN to secure and strengthen its digital infrastructure. These capabilities now protect critical systems, including the booking website, backend APIs, and the login page.

### **Observability as the key to maintaining a complex multi-layer defense**

One of ZIPAIR's primary use cases for Cloudflare products is mitigating fraud and bots. Cloudflare Bot Management detects and blocks malicious automated traffic, while the Cloudflare dashboard [surfaces suspicious activity](https://www.cloudflare.com/learning/performance/what-is-observability/), enabling rapid rule validation and tuning. "Cloudflare Bot Management allowed us to optimize our rules quickly. In particular, traffic detected by the bot rules we created was visualized in real time, allowing us to confirm rule effectiveness immediately," said Nishiyama. This level of visibility lets the team fine‑tune defenses independently and adopt a multi‑layered approach that combines bot‑management rules, WAF rules, and rate‑limiting rules to protect every entry point. "We want to own our understanding of threats and countermeasures rather than outsource it entirely—reducing business risk in the process." Nishiyama also added.

Another key use case is performance-driven traffic management. By leveraging Cloudflare CDN, ZIPAIR caches high-demand content at the edge, offloading requests from the origin and sustaining stable access during peak booking periods.

According to ZIPAIR, on the booking page alone, Cloudflare CDN served \~70% of requests from the edge, reducing data-transfer volume by \~35%.

Compared with Akamai, Cloudflare detected and blocked 26% more bot requests and reduced origin‑bound requests by \~10%. By blocking more bot traffic—including scraping—ZIPAIR reduced server response time by \~20% versus its legacy CDN (0.945 → 0.786 seconds per request).

Regarding impact on end customers, Nishiyama notes, "Although customers may not perceive a 0.2‑second improvement in page load time, the more meaningful impact is increased server stability, which reduces customer frustration."

### **Expanding operations on dependable infrastructure**

Five years after its first flight, the company now operates eight Boeing 787 aircraft. Until recently, its flights reached only as far as the U.S. West Coast; new routes added this year extend service to Houston, Texas, in the Central U.S. As the fleet grows, ZIPAIR will focus on customer convenience by expanding the network and increasing daily frequencies.

In the near term, the IT team will implement more granular rate-limiting rules to reduce bot traffic further. The team is also preparing to introduce Cloudflare Waiting Room to handle concentrated access during sales events, and to evaluate Cloudflare Zero Trust to protect developer devices and prevent unauthorized access to internal assets.

![ZIPAIR logo](https://images.ctfassets.net/slt3lc6tev37/KOMwffCaWuw89qgfrLcgm/168b98f611dd417722a1605949d83ec0/Case_study_-_Logo_-_ZIPAIR.png) 

Cloudflare enables ZIPAIR to block bots, safeguard ticketing systems, and maintain stable bookings during peak periods.

 Products Used 

Bot Management WAF CDN 

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
{"@context":"https://schema.org","@type":"WebPage","name":"ZIPAIR & Cloudflare | Customer Story","description":"Cloudflare enables ZIPAIR to block bots, safeguard ticketing systems, and maintain stable bookings during peak periods.","url":"https://www.cloudflare.com/case-studies/zipair/","inLanguage":"en"}
```
