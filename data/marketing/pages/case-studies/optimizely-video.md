---
title: Optimizely Harnesses Cloudflare Workers to Reinvent Web Optimization
description: Optimizely leveraged Cloudflare Workers to reinvent its leading experimentation platform.
image: https://www.cloudflare.com/preview.png
---

# Optimizely Harnesses Cloudflare Workers to Reinvent Web Optimization

> #### "  We needed a way to push this kind of decision making and computation out to the edge. And Workers ultimately surfaced as the no-brainer tool of choice. " 

If you're looking to grow your business online, there's no substitute for running objective tests to see how your website is performing. [Optimizely](https://optimizely.com "Optimizely") is one of the world's leading experimentation platforms — with thousands of customers including global brands like IBM, HP, and Microsoft — who cumulatively deliver billions of experiences every week.

These tests help Optimizely's customers improve everything from their website layout, to copy, to identifying which products have the most growth potential.

Optimizely offers a straightforward, easy way to get up and running on its platform: simply drop its Javascript snippet into your website header. This approach has helped drive Optimizely's popularity — and has served its customers well. However, it comes with tradeoffs. 

Because the Javascript is loaded in the website's header, it has to download and execute before the page itself can render. This typically happens so quickly that users don't notice a difference. But as Optimizely's customers add more and more tests to their pages, this Javascript can take longer to load. In other words, there's a tradeoff between how many tests Optimizely's customers can run, and the potential impact on performance.

**The Cloudflare Difference**

When Optimizely heard about Cloudflare's new [Workers platform](https://www.cloudflare.com/products/cloudflare-workers/ "Cloudflare Workers"), it realized there was an opportunity to develop a robust new implementation of its experimentation platform — one that would still be easy for its customers to install, but that doesn't come with the same tradeoffs in performance.

Cloudflare Workers allows developers to leverage Cloudflare's global network — spanning over %{DataCenterCount} cities in 90 countries worldwide — to deploy and execute their own code, in the programming language of their choice. This allows developers to do everything from customizing Cloudflare's own products, to developing entirely new applications that perform complex logic at the network edge. 

When Optimizely's customers use this new, Workers-powered implementation of its experimentation platform, they can now concurrently run ten or even one hundred times as many tests without a noticeable impact on performance. That's because the test logic runs on the servers on Cloudflare's edge network, rather than in the user's browser. And because Cloudflare has servers within 100 milliseconds of 99% of the Internet-connected population in the developed world — those tests are blazing fast. 

Want more of the technical details? Learn more from our [joint blog post](https://blog.cloudflare.com/enhancing-optimizely-with-cloudflare-workers/ "Cloudflare + Optimizely Blog Post") and Optimizely's [press release](https://www.optimizely.com/insights/blog/performance-edge/ "Optimizely Performance Edge Launch Announcement") announcing Performance Edge, powered by Cloudflare Workers.

**Transcript**

Claire Vo, SVP of Product: Optimizely is the world's leading experimentation platform. Our customers come to Optimizely, quite frankly, to grow their business.

Whelan Boyd, Senior Product Manager: They are able to test all of their assumptions and make more decisions based on insights and data. 

Claire Vo: We serve some of the largest enterprises in the world, and those enterprises have quite high standards for the scalability and performance of the products that Optimizely is bringing into their organization. 

Greeshma Yellareddy, Senior Performance Engineer: We have a Javascript snippet that goes on customers' websites that executes all the experiments that they have configured, all the changes that they have configured for any of the experiments. 

Lauren Pappone, Senior Software Engineer: That Javascript takes time to download, to parse, and also to execute and so customers have become increasingly performance conscious. 

Claire Vo: The reason we partnered with Cloudflare is to improve the performance aspects of some of our core experimentation products.

Whelan Boyd: We needed a way to push this kind of decision making and computation out to the edge. And Workers ultimately surfaced as the no-brainer tool of choice there. 

Lauren Pappone: Once we started using Workers it was really fast to get up to speed. It was like, "Oh, I can just go into this playground and write Javascript which I totally know how to do — and then it just works. So that was pretty cool."

Whelan Boyd: Our customers will be able to run 10x, 100x the number of experiments. And from our perspective that ultimately means they'll get more value out of it. And the business impact for our bottom line and our top line, will also start to mirror that as well. 

Claire Vo: Workers has allowed us to accelerate our product velocity around performance innovation which I'm very excited about. But that's just the beginning. There's a lot that Cloudflare is doing from a technology perspective that we're really excited to partner on so that we can bring our innovation to market faster. 

![Optimizely Harnesses Cloudflare Workers to Reinvent Web Optimization logo](https://images.ctfassets.net/slt3lc6tev37/4v4GHVEpu8apXgJUz8KEKX/0765bdf6580bf3979257778339d2793e/optimizelylogoresized.jpg) 

Optimizely leveraged Cloudflare Workers to reinvent its leading experimentation platform.

 Cloudflare Products 
* [  Workers ](https://workers.cloudflare.com/)

 Products Used 

Workers 

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
{"@context":"https://schema.org","@type":"WebPage","name":"Optimizely Harnesses Cloudflare Workers to Reinvent Web Optimization","description":"Optimizely leveraged Cloudflare Workers to reinvent its leading experimentation platform.","url":"https://www.cloudflare.com/case-studies/optimizely-video/","inLanguage":"en"}
```
