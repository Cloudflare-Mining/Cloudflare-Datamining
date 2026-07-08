---
title: Umbraco
description: Umbraco uses Cloudflare to expand functionality and improve performance for customer sites hosted on Umbraco Cloud.
image: https://www.cloudflare.com/preview.png
---

# Umbraco

> #### "  With Cloudflare Workers we were able to change the constraints that would normally have been imposed by our Azure infrastructure, and thus implement the deployment flow exactly as we wanted it on Umbraco Cloud. And, of course, the fact that it's at the edge is also a huge benefit. We don't want it to be something that imposes longer wait times since it will be a part of all incoming requests. " 

## **Umbraco uses Cloudflare Workers and performance tools to optimize their CMS platform**

Umbraco is the world's largest content management platform based on the .Net stack and currently hosts websites accounting for more than 10,000 domains on its cloud platform. Umbraco's content management system (CMS) has a passionate following among developers, with over 220,000 community members actively engaged in the Umbraco developer community. For this company, highly-performant and secure websites are essential to customer satisfaction.

### **Challenge: Pivoting from open-source to a cloud-based hosted service**

Umbraco has existed as an open source CMS for more than 16 years. As Umbraco gained more success with the CMS, they also added a cloud-based Umbraco service. With Umbraco Cloud, Umbraco is able to deliver a complete end-to-end service and experience using Umbraco as well as adding additional SaaS features to the existing CMS. Today Umbraco Cloud provides numerous developer-centric offerings such as a headless CMS, a complete deployment workflow and also more end-user focused features.

When Umbraco launched Umbraco Cloud, it needed to consider the infrastructure requirements of a hosted solution. Customer satisfaction depended on fast site load times, so the company needed a high-performance solution to support its customers' pages. Additionally, Umbraco Cloud offers API-based access for their headless offering. Umbraco wanted the ability to implement rate-limiting for the headless API requests and to protect against malicious bots — They also wanted to provide a unified point of entry for customers hosting multiple different sites on the Umbraco Cloud platform.

As Umbraco Cloud continued to mature they've opted to switch to Cloudflare to meet these needs because of its focus on both website performance and security. Cloudflare's broad solution portfolio enabled Umbraco to offer value-added services like DDoS protection and HTTPS by default to its customers. This partnership also allowed Umbraco to hand over responsibility for certain core functionality to Cloudflare, enabling Umbraco to focus on delivering a great developer experience on the cloud platform and expanding their hosting offering with new features as the relationship continues to grow.

### **Cloudflare Workers supports site customization for Umbraco customers**

Cloudflare enables Umbraco to offer a simpler, more streamlined experience for developers. A developer using Umbraco Cloud has a single username and password, even if they manage multiple different sites. This is possible thanks to Workers, the serverless computing platform that operates on Cloudflare's global edge network. Behind the scenes, Workers enables Umbraco to handle different authentication scenarios without exposing the complexities to their users, and at the same time reap the benefits of Workers being at the edge close to the end-user.

According to Morten Christensen, Platform Team Lead, "With Cloudflare Workers we were able to change the constraints that would normally have been imposed by our Azure infrastructure, and thus implement the deployment flow exactly as we wanted it on Umbraco Cloud. And, of course, the fact that it's at the edge is also a huge benefit. We don't want it to be something that imposes longer wait times since it will be a part of all incoming requests."

Umbraco also makes use of Cloudflare Workers to provide a unique and customizable experience to their customers. These serverless applications are applied to a variety of different uses, ranging from image processing to request management.

For example, Umbraco Cloud is hosted on Microsoft Azure and uses multiple instances of Azure Blob Storage to store images related to its hosted sites. When an image request comes in, Workers determines which Blob Storage instance to retrieve it from based on the request parameters. Before passing the image on to the user, Workers also performs image manipulation, including resizing, cropping, and scaling.

In addition, Umbraco uses Workers KV, a global, low-latency key-value data store, to hold feature flags for each of its sites based on its headless offering. This enables Workers to determine if a particular site supports GraphQL and other functionality. In the future, Umbraco plans to expand this functionality to let developers customize the caching and security settings for their sites on a per-hostname basis.

According to Umbraco, Cloudflare Workers enables them to do things that would not otherwise be possible. Morten Christensen says, "We can attach a Worker to a specific route for our hostnames, and I think that's something that's pretty unique to Cloudflare."

### **Cloudflare Improves Performance for Hosted Sites**

As a hosted CMS, high performance for sites located on Umbraco Cloud is an important driver of customer satisfaction. Cloudflare helps Umbraco to exceed customer expectations.

Argo Smart Routing produced measurable improvements in page load times as well. By finding the fastest network paths for traffic to and from origin servers, Argo produced a 43% improvement in network latency for sites hosted on Umbraco Cloud. 

With Cloudflare, Umbraco is able to provide a single point of entry to its infrastructure and have all traffic intelligently routed to the appropriate web app. The use of Cloudflare's DNS infrastructure also provides increased resiliency and enables Umbraco to add further improvements in this area. 

Umbraco also takes advantage of Cloudflare SSL for SaaS offering to generate certificates and configure SSL for its customers' sites. Previously, Umbraco used a custom solution to create and renew Let's Encrypt certificates for each of its customer sites. Now, all of this is handled automatically by Cloudflare.

### **Developing a Positive Customer Experience**

By providing many of the backend features that Umbraco Cloud requires, Cloudflare provides an improved customer experience and enables Umbraco to focus on developing a world-class cloud platform and CMS.

Jacob Mitgaard-Olesen, CTO at Umbraco, sums up Umbraco's experience with Cloudflare, "Cloudflare offers a wide range of features and services that fit well with what we want to provide with Umbraco Cloud. It benefits Umbraco as a company as well as all our Umbraco Cloud customers because it is secure and fast."

![Umbraco logo](https://images.ctfassets.net/slt3lc6tev37/37XSTw3i7E5lJY2t3OWgS7/ed817f2979097d5b338c49a18a2f1d1e/umbraco.png) 

Umbraco uses Cloudflare to expand functionality and improve performance for customer sites hosted on Umbraco Cloud.

 Cloudflare Products 
* [  Workers ](https://workers.cloudflare.com/)
* [  Argo Smart Routing ](/application-services/products/argo-smart-routing/)

 Products Used 

Workers Argo Smart Routing 

 Details 

 Industry 

High Technology 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Umbraco","description":"Umbraco uses Cloudflare to expand functionality and improve performance for customer sites hosted on Umbraco Cloud.","url":"https://www.cloudflare.com/case-studies/umbraco/","inLanguage":"en"}
```
