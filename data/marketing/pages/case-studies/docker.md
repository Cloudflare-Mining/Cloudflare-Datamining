---
title: Cloudflare &amp; Docker | Case Study
description: Cloudflare boosts Docker's cache hit ratio to more than 99%, eliminating two-thirds of S3 egress and cutting costs
image: https://www.cloudflare.com/preview.png
---

# Docker

> #### "  The 2% cache hit ratio improvement enabled by Cloudflare Cache Reserve has eliminated roughly two-thirds of our S3 egress activity. The reduction in egress charges is almost an order of magnitude larger than the price we paid for Cache Reserve. " 

## **Cloudflare boosts Docker's cache hit ratio to more than 99%, eliminating two-thirds of S3 egress and cutting costs**

Docker Inc.'s introduction of container technology in 2013 set the industry standard for containers, a software development approach that isolates an app from its environment. The result: Developers can effortlessly create modern apps that run on many different types of machines and system environments.

Docker combines Docker Hub, the world's largest marketplace of trusted content and integrations, with leading tools that allow developers to efficiently and collaboratively build, run, and share applications. Docker Hub supports more than 2 million active developers monthly and handles more than 500 million downloads daily. Through Docker Hub, developers can access free public repositories for storing and sharing images or subscribe to private repositories where they can upload their own app code.

Docker's developer platform provides an unmatched experience for creating an integrated, reliable, and secure workflow that speeds app delivery to the cloud. Docker Desktop provides Mac, Linux, and Windows environments for building and sharing containerized applications and microservices.

### **Challenge: Contain rapidly rising S3 egress costs**

When Docker's contract for its AWS-based content delivery network (CDN) came up for renewal, the company's platform group thoroughly investigated available options as part of the contract renewal process. The research led to implementing the Cloudflare CDN to handle download requests from Docker Hub. The primary reason was Cloudflare's ability to cache content closer to users, which speeds the fulfillment of user download requests while ensuring security and reliability. 

According to Brett Inman, Senior Manager of Engineering at Docker, implementing Cloudflare was simple and straightforward. However, the company became increasingly concerned about the rapidly rising egress fees incurred when download requests required the transfer of content from Amazon Simple Storage Service (S3) to Cloudflare servers.

"Essentially, the egress from S3 was costing us almost as much as we were paying Cloudflare to then serve that traffic to users," Inman explains. "Our cache hit ratio was already at 97%, which is quite high and more than sufficient for many companies. But, because of our huge request volume, we needed to boost the ratio even higher to bring down the costs associated with pulling content from S3 to satisfy requests." 

### **Solution: Cloudflare Cache Reserve boosts cache hit ratios even further to lower egress costs**

Cloudflare CDN's tiered caching ensures that the content users request the most is stored as close as possible to them. For Docker, this means faster and more efficient downloads. When cache storage in a particular data center nears capacity, Cloudflare "evicts" less-popular content to make room for the content that's requested more frequently.

"Using eviction as a caching approach works well for most companies," Inman says. "But when a developer requests content that has been evicted from our cache, that content has to be served from its origin in S3\. Because of our massive content volume and huge number of requests, the egress costs are substantial. So when Cloudflare announced the Cache Reserve beta, we were enthusiastic about trying it."

Cache Reserve ensures that cached content that hasn't been requested for a long time remains in cache. This eliminates the need to go back to the source for that content. Cache Reserve increased Docker's cache hit ratio from 97% to more than 99%. 

"The 2% cache hit ratio improvement enabled by Cache Reserve has eliminated roughly two-thirds of our S3 egress. The reduction in egress charges is almost an order of magnitude larger than the price we paid for Cache Reserve."

### **Securing private data repositories**

While Docker Hub is a place where people go for public content, many Docker customers also upload private application code and images, which they store in their own repositories on the Docker platform. Preventing unauthorized access to these private repositories is essential. Docker uses Cloudflare Workers to keep private content safe.

"We need exceptionally strong security for our customers who upload private app code to Docker Hub," Inman notes. "Cloudflare Workers provides an authentication layer that ensures that anyone who tries to access user data is authorized to do so."

When Docker first implemented Cloudflare's network, the platform group used the Cloudflare Workers serverless compute solution to create a script that acts as the authentication layer between the user and the actual download. In this way, Docker confirms that users are who they say they are. This ensures that private repositories are accessible only by authorized users. The Workers script also comes into play when Cloudflare pulls data from repositories in S3, ensuring that Cloudflare serves data from the origin server only to authorized users.

After the platform group started using Cache Reserve, applying the Workers script to content stored in Cache Reserve was simply a matter of flipping a switch. "It required only minimal effort on our part." Inman recalls. "That simplicity and ease of use is very beneficial to us."

### **Increasing developer productivity while saving time and money**

Inman appreciates the reliability of the Cloudflare global network and the ease of managing it. "We don't have to spend a lot of engineering time getting Cloudflare capabilities to work or chasing down problems. So it's economical to manage," he said. "Most of our interactions with the Cloudflare team are about how we can leverage new Cloudflare features to increase developer productivity while at the same time saving us money."

Container technology has revolutionized application development and Docker is the go-to platform for container developers. The company provides millions of active developers worldwide with fast, reliable downloads and airtight security for their applications and data. Docker is always looking for new ways to serve its developer community and Cloudflare will continue to play a key role in that endeavor.

![Docker logo](https://images.ctfassets.net/slt3lc6tev37/371ISH6NzDSX5IoOdA1RpM/5ba2c6e9f6dc86253824fb44baa218c2/docker_logo.png) 

With Cloudflare Cache Reserve, Docker ensures swift, reliable, and secure delivery of 500+ million downloads daily

 Cloudflare Products 
* [  Workers ](https://workers.cloudflare.com/)
* [  Cache Reserve ](https://www.cloudflare.com/application-services/products/cache-reserve/)

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
{"@context":"https://schema.org","@type":"WebPage","name":"Cloudflare & Docker | Case Study","description":"Cloudflare boosts Docker's cache hit ratio to more than 99%, eliminating two-thirds of S3 egress and cutting costs","url":"https://www.cloudflare.com/case-studies/docker/","inLanguage":"en"}
```
