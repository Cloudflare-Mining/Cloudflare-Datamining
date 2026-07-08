---
title: Rocket.net &amp; Cloudflare | Customer Story
description: This leading provider of fast and secure hosting for WordPress sites delivers responsive, low-latency experiences while accelerating innovation.
image: https://www.cloudflare.com/preview.png
---

# Rocket.net

> #### "  With Cloudflare, we can deliver websites as close as possible to visitors, which results in better visitor experiences. " 

## Rocket.net provides fast, secure, and innovative WordPress hosting services powered by Cloudflare

Founded in 2020, Rocket.net makes it easy for individuals and organizations around the world to build and run responsive, secure WordPress websites. From individual bloggers and agencies to e-commerce companies and WordPress resellers, Rocket.net customers have come to rely on the company for lightning-fast digital experiences and enterprise-level security.

In-house development of new services has also helped differentiate Rocket.net in a highly competitive marketplace. "In this industry, there are a lot of marketing companies that don't actually build anything of their own," says Rocket.net CEO and Founder Ben Gabler. "At Rocket.net, we are focused on building new, innovative services and features that our customers truly need."

### Delivering low-latency performance everywhere with Cloudflare

For any organization building a WordPress site or another web application, ensuring a low-latency experience for end users must be a top priority. But too many hosting services have origin servers that are far from those end users. 

"A pizza shop in California might set up a website with a hosting service, and the site will be hosted in Ohio. The result is a subpar experience for California customers," says Gabler. "From the beginning at Rocket.net, we wanted to deliver content from locations that are closer to users."

The solution was to implement a content delivery network (CDN) with Cloudflare. "Before I founded Rocket.net, I saw that Cloudflare was able to deliver low-latency performance, thanks to a large network footprint, smart routing, and edge caching," says Gabler. "When we decided to implement a CDN at Rocket.net, I knew I wanted to partner with Cloudflare. With Cloudflare, we can deliver websites as close as possible to visitors, which results in better visitor experiences."

### Speeding service delivery and streamlining SSL management

As Rocket.net grew, the team needed to scale some key operational tasks, such as managing [SSL certificates](https://www.cloudflare.com/application-services/products/ssl/). The team turned again to Cloudflare to [automate the setup process](https://www.cloudflare.com/application-services/solutions/certificate-lifecycle-management/) for Rocket.net customers with [SSL for SaaS](https://www.cloudflare.com/application-services/products/ssl-for-saas-providers/), "We used to spend up to 48 hours issuing and deploying SSL certificates manually, something nobody in the world wants to do" says Gabler, "Now, with Cloudflare, it takes 30 seconds at most globally."

"Our brand was built on being the fastest in the world. Cloudflare lets us manage those certificates at scale, completely automated. The speed of delivering all of our services helps us maintain very high customer satisfaction and reduce churn."

### Protecting sites from bad bots

In addition to simplifying website encryption, Rocket.net offers an array of cybersecurity capabilities to protect customer sites from attacks — including new AI-based threats. In the case of [AI-powered bots](https://www.cloudflare.com/learning/ai/how-to-block-ai-crawlers/), the team needed a solution with some flexibility. 

"We want to make sure that sites are open to some bots, like search-engine crawlers, but not others," says Gabler. "With Cloudflare's WAF, we can block bots by default to protect our customers' content, while still allowing exceptions for specific domains when needed. The platform gives us the granular control we require—we run one of the most complex sets of custom rules on our WAF. Automating these protections at the edge has saved us thousands of support hours, eliminating costly incidents before they ever reach our team."

### Accelerating innovation with Cloudflare Workers

Drawing on Cloudflare services for performance and security helps the Rocket.net team stay focused on developing new, differentiating services. And the Cloudflare Developer Platform accelerates that work. 

"We don't expect Cloudflare to offer every single feature that we need as a WordPress hosting company. But the Cloudflare Developer Platform gives us the tools to build our own new features on the same delivery pipeline," says Gabler. "We used Cloudflare Workers to build a new offering called ShopShield, which helps our WooCommerce customers to accommodate sudden spikes in traffic. We wouldn't have been able to build ShopShield without Workers."

E-commerce sites might experience traffic spikes after sending a newsletter that announces a large sale, for example. ShopShield intelligently manages those large bursts of traffic, slowing requests down only slightly so that origin servers won't be overwhelmed. "In the last 30 days, we handled over 50 million requests for our customers, and the average request duration was just 73 milliseconds, which is incredible," says Gabler.

Offerings such as ShopShield give customers another reason to rely on Rocket.net. "Cloudflare Workers helps us stand out from the crowd by enabling us to build things that do not exist yet," says Gabler. "And that is a definite growth driver for our company."

### Addressing challenges and optimizing experiences with Workers

Cloudflare Workers also helps the Rocket.net team handle small, but important challenges easily. For example, at Rocket.net, every WordPress site starts with a temporary URL and is immediately accessible. This allows customers to immediately begin creating their WordPress project or start migrating their existing WordPress project for testing. 

During this phase, content is publicly accessible on the temporary URLs that may differ from the live and indexed URLs. The Rocket.net team needed a way to prevent crawlers from indexing the WordPress site's temporary URL, which could result in duplicate content on search engines, which can be bad for SEO.

"We started to solve this by running lightweight code to override the x-robots-tag header in every web server we launched," says Gabler. "But then I thought, 'Wait a minute, why don't we just use Workers?' Workers enabled us to prevent search engines from crawling temporary URLs from a single configuration point at the edge, which enabled our developers to focus on other key product features. Now we can programmatically block those crawlers from the edge. It's easier for us and our customers." 

Meanwhile, the Rocket.net team uses Workers KV — a globally distributed, edge-based key-value store — to help optimize end-user experiences. "We're leveraging Workers KV for fingerprinting," says Gabler. "If a website visitor encounters our ShopShield service and is slightly delayed in reaching an e-commerce site, we want to ensure that the same visitor isn't delayed again. With KV, we can keep a record of the visitor and prevent them from further delays."

"Cloudflare Workers have allowed us to focus our developers on rapid product growth instead of infrastructure challenges. We've been able to scale without adding headcount—saving Rocket.net hundreds of thousands of dollars in employment costs each year," explains Gabler.

### Moving forward with Cloudflare

The Rocket.net team plans to build on their momentum by capitalizing on Cloudflare's global network. "We're going full-throttle with moving as much logic to the edge as possible," says Gabler. "With Cloudflare, we can deliver new services closer to our customers and their users."

At the same time, the Cloudflare Developer Platform will enable the company to construct new offerings that help attract and retain customers. "We're doubling down on Cloudflare," says Gabler. "By building with Cloudflare Workers, we can create innovative offerings that keep our company ahead of the pack in this competitive field."

![Rocket.net logo](https://images.ctfassets.net/slt3lc6tev37/7IVO89riWhloLPFEayW3Si/1179c3096c9825d3fc368661705c8d5b/Rocket-Logo.png) 

This leading provider of fast and secure hosting for WordPress sites delivers responsive, low-latency experiences while accelerating innovation.

 Cloudflare Products 
* [  Workers KV ](https://www.cloudflare.com/developer-platform/products/workers-kv/)
* [  Content Delivery Network (CDN) ](/application-services/products/cdn/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  SSL for SaaS ](/application-services/products/ssl-for-saas-providers/)

 Products Used 

Workers 

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
{"@context":"https://schema.org","@type":"WebPage","name":"Rocket.net & Cloudflare | Customer Story","description":"This leading provider of fast and secure hosting for WordPress sites delivers responsive, low-latency experiences while accelerating innovation.","url":"https://www.cloudflare.com/case-studies/rocket-net/","inLanguage":"en"}
```
