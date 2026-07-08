---
title: VSCO &amp; Cloudflare | Customer Story
description: VSCO delivered more responsive user experiences, consolidated app security, and deployed innovative, real‑time AI image generation workflows with Cloudflare. 
image: https://www.cloudflare.com/preview.png
---

# VSCO

> #### "  Integrating AI with Cloudflare has been central to our recent strategy. We just launched VSCO Canvas, a mood board tool for photographers and visual creators to ideate and collaborate with their clients using generative AI to explore shot ideas in real time. Powered by Workers AI, it delivers a dynamic, creative experience that feels limitless, while remaining secure and easily scalable as traffic changes. " 

![about-vsco-og-image](//images.ctfassets.net/slt3lc6tev37/7ACtqLrH8PYuKuOXAkOgE5/bf445f806cc4dacdc9268fb5b2544a9a/about-vsco-og-image.png)

## **VSCO cuts overall cloud costs and delivers more responsive user experiences globally with Cloudflare**

[VSCO](https://www.vsco.co/) (pronounced Vis-co) is on a mission to nurture creativity so creators can make it. VSCO is a community-driven platform that gives photographers the tools and exposure for creative and professional growth. The organization's [VSCO Studio](https://www.vsco.co/studio) supports graphic workflows while offering a comprehensive suite of tools for managing business processes. [Canvas](https://www.vsco.co/features/canvas), VSCO's most recent product innovation, is a collaborative, multi-user moodboard, creative planning workspace, and AI tool that enables inspiration without overshadowing the photographer's creative input. As a creative community, VSCO also offers spaces where photographers can publicly share work and engage with brands looking to hire. The company maintains a library containing over 2.3 petabytes worth of professional-quality, user-generated images. With the collection growing at a rate of nearly 200 terabytes each month, protecting user-owned assets and IP while driving growth and product innovation tops VSCO's list of priorities. 

### **Facing high cloud costs and service limitations that restrained growth**

For years, VSCO ran core applications features like photo editing and media storage with another cloud service provider. They also used this provider's services to secure and connect their application and APIs — a common time-saving strategy for busy digital-native organizations. Unfortunately, VSCO was not able to achieve its goals with its existing provider. Most critically, the prior web application firewall (WAF) and distributed denial-of-service (DDoS) services were extremely expensive and did not provide granular enough control. "There were a lot of things we wanted to block, but if we tuned security more aggressively, it disrupted legitimate traffic," says Chris Haire, VSCO's Chief Technical Officer. "With invoices reaching six figures monthly — millions of dollars per year — the cost of using the solution seemed punitive. Cloudflare enabled VSCO to enforce the security controls we wanted without incurring the six-figure monthly costs we would have faced with its prior partner, making costs far more predictable and sustainable" In addition, [storage](https://r2-calculator.cloudflare.com/) and compute costs became hard to predict, which made it hard for VSCO to scale confidently. Moreover, the provider's network created latency issues in key growth regions like Asia and South America. "It was time to improve efficiency so we could invest more into R&D and AI feature development, product performance, and securing customer content against online threats," says Haire. 

### **Moving to the Cloudflare platform for better security, performance, and efficiency**

To enhance efficiency and unlock easier growth, VSCO adopted Cloudflare's connectivity cloud — a unified platform of security, connectivity, and developer services powered by a global cloud network. With the Cloudflare platform, the VSCO team realized they could modernize their application and its supporting infrastructure with greater control, better performance, and lower costs. "With other providers, we weren't confident that ROI would necessarily reflect costs, which could be unpredictable," says Haire. "The marriage of application-layer performance and security features with edge computing and R2 cloud object storage made Cloudflare the best option." 

### **Streamlining storage migration with help from the Cloudflare Developer Platform**

As the first step in their cloud migration, VSCO moved more than two petabytes of original images from its prior provider to [Cloudflare R2](https://www.cloudflare.com/developer-platform/products/r2/), Cloudflare's cloud-based object storage. The goal was to use R2 as VSCO's primary storage layer, supporting all user-uploaded content and editing workflows. To meet an aggressive image migration timeline, VSCO used the [Cloudflare Developer Platform](https://www.cloudflare.com/developer-platform/) to build their own migration tool. Leveraging the high-performance, serverless scalability of [Cloudflare Workers](https://workers.cloudflare.com/), VSCO developed a supercharged version of [Super Slurper](https://developers.cloudflare.com/r2/data-migration/super-slurper/) — the native Cloudflare migration service that copies data from other providers' environments to R2\. The custom tool helped VSCO complete the migration in under two weeks. "Cloudflare made it possible for us to migrate our assets quickly and start saving money," says Haire. "Using Workers, we found a creative way to pull everything over to R2 at once and limit our exposure to data egress fees."

### **Simplifying image optimization with Cloudflare Images**

To further enhance operational efficiency, VSCO replaced their custom-built image resizer with [Images](https://www.cloudflare.com/developer-platform/products/cloudflare-images/), Cloudflare's image optimization solution. Images improves user experiences by accelerating image delivery. At the same time, it cuts operational overhead by eliminating the need for ongoing tuning and storage management. "It's been great to hand the management and transformation processes over to Cloudflare and serve our images on demand without added complexity, wasted space, or excessive computing costs," says Haire. "By taking the need to manage our infrastructure off our plate, Cloudflare has helped us focus our team on other things." 

### **Building AI-powered experiences with Cloudflare Workers AI**

With a more efficient cloud platform in place, VSCO pivoted to AI product development. "Integrating AI with Cloudflare has been central to our recent strategy," says Haire. "We just launched [VSCO Canvas](https://www.vsco.co/features/canvas), a mood board tool for photographers and visual creators to ideate and collaborate with their clients using generative AI to explore shot ideas in real time. Powered by Workers AI, it delivers a dynamic, creative experience that feels limitless, while remaining secure and easily scalable as traffic changes." VSCO relies on Workers AI to run their models near the customer to reduce latency. "Latency needs to be as low as possible when you're working with AI to provide responsive, multi-user interactions," says Haire. "The superior performance and availability of Cloudflare's edge network enable us to deliver a best-in-class experience without added infrastructure costs. " With Workers AI, VSCO's developers can test, configure, and deploy inference workloads without sacrificing control or predictability. This ensures both a responsive user interface and an architecture that will grow alongside the platform.

### **Securing public applications and improving global API performance**

Migrating to Cloudflare also addressed VSCO's persistent application-layer bottlenecks. The organization deployed Cloudflare's [application security and performance solutions](https://www.cloudflare.com/application-services/solutions/), including [WAF](https://www.cloudflare.com/application-services/products/waf/), [DDoS protection](https://www.cloudflare.com/ddos/), [bot management](https://www.cloudflare.com/application-services/products/bot-management/), and [rate limiting](https://www.cloudflare.com/learning/bots/what-is-rate-limiting/) capabilities. With these capabilities, VSCO is able to secure previously vulnerable customer endpoints, such as user image galleries, against attacks. Across all applications, Cloudflare front the majority of VSCO networking traffic today. Improving visibility into their public traffic with Cloudflare's unified control plane has also enhanced VSCO's budget control and cost management efforts. "Using Cloudflare as the front door that secures our network is a huge win for us," says Haire. "We aren't worried about how much our prior provider's bill is going to spike because of DoS attacks, and we are no longer financially penalized for blocking malicious traffic, given that Cloudflare only charges for clean traffic." 

Cloudflare's security services have also helped VSCO gain greater control over their security posture. "Beyond being cost-effective, Cloudflare's WAF enables us to increase the granularity of our rulesets," says Haire. "We're able to stop malicious traffic we couldn't stop before without impacting legitimate users." 

### **Delivering more consistent, responsive user experiences**

After transitioning to the [Cloudflare CDN](https://www.cloudflare.com/application-services/products/cdn/) — supported by 335 points of presence in 120 countries across the global network — VSCO's application service latencies dropped significantly. Now the company can deliver faster, more consistent user experiences suited to supporting cloud-driven creative workflows. With Cloudflare handling routing and caching logic, VSCO has also eliminated the need to repeatedly fine-tune CDN routing or origin configurations. "We put Cloudflare in front of our APIs and we saw a 6x network performance gain in our poorest performing markets," says Haire. "Cloudflare slashed delays of over three seconds to less than 500 milliseconds." 

### **Expanding AI innovation and deepening platform security and integration**

As VSCO continues to [modernize their architecture](https://www.cloudflare.com/learning/network-layer/how-to-prepare-for-network-modernization-projects/) and bring new capabilities to creators, they plan to embed Cloudflare deeper into their technology roadmap, including expanding their catalogue of Workers AI-based image editing and collaboration tools. For example, The company is also exploring the potential of building and deploying their remote Model Context Protocol (MCP) server on Cloudflare (via the Agents SDK) to accelerate new product experiments and further optimize application performance. In addition, the company is exploring Cloudflare Zero Trust capabilities and Cloudflare Turnstile to strengthen fraud protection across web and mobile. "I would love to have more partnership and development with the Cloudflare platform," says Haire. "Cloudflare wants to work with us, hear our pain points, and help solve them. I'm always looking for opportunities to extend the partnership, work together, and achieve mutual success. For other companies: If secure, high-performance infrastructure matters to your business, take a long, hard look at Cloudflare."

![VSCO logo](https://images.ctfassets.net/slt3lc6tev37/1D5p7Rz0tOVRgCj2hIc6dq/015d66bbbb9ea9a49a93a6d2346af439/Logo.png) 

VSCO delivered more responsive user experiences, consolidated app security, and deployed innovative, real‑time AI image generation workflows with Cloudflare. 

 Cloudflare Products 
* [  R2 ](https://www.cloudflare.com/developer-platform/products/r2/)
* [  Workers ](https://workers.cloudflare.com/)
* [  Cloudflare Workers AI ](/developer-platform/products/workers-ai/)
* [  Image Optimization ](/application-services/products/website-optimization/)
* [  CDN ](/application-services/products/cdn/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  DDoS Mitigation ](/ddos/)
* [  Bot Management ](/application-services/products/bot-management/)

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
{"@context":"https://schema.org","@type":"WebPage","name":"VSCO & Cloudflare | Customer Story","description":"VSCO delivered more responsive user experiences, consolidated app security, and deployed innovative, real‑time AI image generation workflows with Cloudflare. ","url":"https://www.cloudflare.com/case-studies/vsco/","inLanguage":"en"}
```
