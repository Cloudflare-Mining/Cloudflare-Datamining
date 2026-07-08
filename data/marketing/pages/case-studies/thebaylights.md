---
title: The Bay Lights
description: TheBayLights.org reached out to Cloudflare to make sure the site was ready to handle the increase in traffic.
image: https://www.cloudflare.com/preview.png
---

# The Bay Lights

> #### "  We are thrilled with the guidance and help Cloudflare offered in keeping us online during our biggest moment of the year. " 

TheBayLights.org reached out to Cloudflare to make sure the site was ready to handle the increase in traffic.

When you think of San Francisco, undoubtedly one bridge in particular comes to mind - The Golden Gate Bridge. In 2013, however, the Bay Bridge is getting its moment in the spotlight thanks to [Words Pictures Ideas](http://wordspicturesideas.com/).

Words Pictures Ideas works with brands and organizations in need of smarter communications. While thinking of ways to commemorate the 75th anniversary of the Bay Bridge, WPI founder Ben Davis came up with the idea to turn the West Span of the bridge into a canvas for light art.

**Business challenge**

The Bay Lights were officially unveiled on March 5, 2013\. Brian VanderZanden, Lead Developer at WPI, knew there would be a surge in traffic to TheBayLights.org leading up to that day, and most likely a huge surge in traffic on the day of the unveiling. WPI has many sites on Cloudflare, including TheBayLights.org. He reached out to Cloudflare to make sure the site was ready to handle the increase in traffic.

Cloudflare suggested a few small optimizations (minification, an image that wasn't proxied because on a "grey cloud" DNS record), one useful reminder (allowlist the Cloudflare IPs), and a powerful recommendation: Cache Everything.

By default, Cloudflare will cache obviously static assets, but pass dynamic HTML through to the customer's webserver. For heavy load, on content that is not changing rapidly, full HTML pages -- or the entire site -- can be delivered from Cloudflare's global network, preserving the customer's webserver, database and other infrastructure. (Note: combined with single file purge, Cloudflare can serve as the global network for delivering a static site even with rapid changes, much as the Obama 2012 web team did.)

# **100%**

### **IMPROVEMENT IN RESOURCE UTILIZATION**

### by utilizing Cloudflare's caching

**Cloudflare's impact**

On the day of the unveiling, with Cache Everything turned on, TheBayLights.org saw traffic increase with a decrease on their system's resource utilization. By mid-day, a rush in traffic caused more load than the event's peak at 8:00 pm. The graph below shows an interesting resource demand for the site pre/post cache everything:

The site saw the largest influx of traffic between 8:00-9:00 pm, but the average I/O during that hour was under 2Mb/s. By midnight traffic was back down to only 2X of baseline traffic levels.

"We began to celebrate at 9:15 pm as we were confident that the peak in site traffic had been reached and there were no issues," said Brian. "We are thrilled with the guidance and help Cloudflare offered in keeping us online during our biggest moment of the year, as well as the day to day performance and security they provide for all of our sites."

The Bay Lights will continue to shine for the next two years, creating yet another tourist stop in San Francisco. At Cloudflare, we are excited to be a part of the experience and look forward to helping keep TheBayLights.org shining online.

![The Bay Lights logo](https://images.ctfassets.net/slt3lc6tev37/5Hb9VyMXjUWimmEuuiQcAM/2fe4ff6958a38a1e5f75e9912f064b30/baylights.svg) 

TheBayLights.org reached out to Cloudflare to make sure the site was ready to handle the increase in traffic.

 Cloudflare Products 
* [  Content Delivery Network (CDN) ](/application-services/products/cdn/)
* [  Web Optimizations ](/application-services/products/website-optimization/)

 Products Used 

CDN 

 Details 

 Industry 

Media & Entertainment 

 Region 

North America 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"The Bay Lights","description":"TheBayLights.org reached out to Cloudflare to make sure the site was ready to handle the increase in traffic.","url":"https://www.cloudflare.com/case-studies/thebaylights/","inLanguage":"en"}
```
