---
title: Soracom &amp; Cloudflare | Customer Story
description: IoT connectivity provider Soracom improves the stability and performance of their dashboard service while increasing development efficiency
image: https://www.cloudflare.com/preview.png
---

# Soracom

> #### "  The only platform that met our technical needs was Cloudflare Workers. With Workers, we have reduced the load on the origin server while enabling real-time processing of large amounts of data for dashboards. " 

## Soracom delivers responsive IoT dashboard experiences and enhances development efficiency with Cloudflare

Soracom is dedicated to democratizing the Internet of Things (IoT), making it possible for anyone to turn IoT ideas into reality. Offering multi-carrier cellular connectivity, the company enables organizations to connect and manage IoT devices and machine-to-machine (M2M) sensors, at scale, all over the world. Currently more than 6 million devices are connected through Soracom worldwide. 

Though headquartered in Japan, the company also has locations in the United States and United Kingdom, with a global team of 150 employees. The engineering team responsible for developing new services works as one cohesive unit, seamlessly collaborating across multiple time zones. Together, these engineers continuously enhance the Soracom platform and support a wide variety of services, including services that provide private connections to cloud environments, inline data processing, secure device provisioning, remote device access, and more.

### Facing the challenge of providing a stable IoT dashboard service

Soracom gives customers an easy way to visualize data collected from IoT devices through Soracom Lagoon — a customizable dashboard service. Lagoon also includes an alert feature that notifies users when data traffic exceeds certain thresholds. Traffic spikes are not uncommon: IoT systems and businesses can experience explosive growth in the number of clients after a commercial launch. 

Soracom had to make sure the company's own cloud-based infrastructure could handle the sudden increases in data traffic that trigger customer alerts. "Soracom Lagoon uses a multi-tenant architecture, so we needed to ensure that a sudden spike in access from one account wouldn't impact the whole service," says Christian Inkster, principal software engineer at Soracom. "Specifically, we had to find a way to cache responses for POST requests — which usually aren't cached — in a distributed manner."

As Soracom worked to maintain reliable dashboard experiences, the company also wanted to accelerate delivery of new features and services by streamlining software development. Soracom provides developers with access to subdomains within a development environment. But developers often had to wait for those subdomains to be allocated. "Managing fine-grained control over the development environment took time, and that led to significant waits during simultaneous testing," says Inkster. "We needed a way to improve the efficiency of providing secure access to resources."

### Delivering reliable, responsive dashboard experiences with Cloudflare

To help ensure that Soracom could deliver a reliable dashboard, even when requests surged, the company searched for a serverless edge computing service that could cache responses for POST requests. "The only platform that met our technical needs was Cloudflare Workers," says Inkster. "With Workers, we have reduced the load on the origin server while enabling real-time processing of large amounts of data for dashboards."

This caching approach has enabled Soracom to provide the stability required for the dashboard service. "Before the Cloudflare Worker POST cache implementation, a development server could be overwhelmed far too easily by concurrent requests for the feature to be viable," says Inkster. "Now this is a part of the application we never have to worry about."

Dynamic routing plays a key role in maintaining stability. "Dynamic routing to different instances allows us to easily split our service into two parts: one serving the web side of things and another handling scheduled tasks," says Inkster. "Prior to the implementation of dynamic routing, instances would become unresponsive every few days. Since the implementation, instances are rock solid."

The Cloudflare platform has also helped Soracom dramatically enhance the speed and scale of processing. "Complex POST requests that used to take over 10 seconds to complete are now returned in milliseconds with Cloudflare," says Inkster. "No matter how many requests there are, we only need to access the origin server once a minute. That gives us high cost efficiency and scalability."

### Safeguarding applications from cyber attacks

The Soracom team is capitalizing on key security capabilities from Cloudflare to protect applications from a variety of threats. "Cloudflare automatically provides WAF and DDoS protection, which helps us maintain both security and flexibility," says Motokatsu Matsui, CTO of Soracom in Japan. "As a result, we're delivering stable, high-speed, and secure dashboards to Soracom customers."

### Enhancing development efficiency and security

In the past, the whole developer team shared a single staging environment, which slowed workflows. "If someone was conducting testing, other developers would have to wait a day for the environment to be available," says Matsui. 

With Cloudflare, the Soracom team has accelerated workflows by enabling developers to work in parallel. "Thanks to Cloudflare, we've been able to easily issue subdomains through the Cloudflare Registrar and grant immediate access to developers," says Matsui. "This has significantly reduced wait times for developers and greatly improved our development efficiency. Development is at least two or three times faster."

Cloudflare Workers also helps Soracom keep development and staging secure. "With Workers, we were able to incorporate our own authentication mechanism, making it easy for us to grant cookie-based access to the development environment," says Matsui. "This approach simplified the process of making a public URL accessible as a development environment while maintaining high security."

### Envisioning the future with Cloudflare

Given the positive results with the Cloudflare Workers platform and security services, the Soracom team has begun investigating additional capabilities from Cloudflare. For example, the team is exploring Cloudflare Durable Objects, which helps organizations build high-performing stateful applications. 

In the meantime, the company continues to benefit from Cloudflare capabilities in bringing new services to market. The release of Soracom Flux provides a perfect example. "Soracom Flux is a low-code IoT application builder. With help from Cloudflare, we can use edge computing to perform initial processing of the massive amounts of data generated by IoT devices," explains Matsui. "We can achieve cost efficiency and speed, making it a valuable solution for our customers."

![Soracom logo](https://images.ctfassets.net/slt3lc6tev37/3y9ngWgmpOfpiNtOyYdGrU/55c75df2f4c528e989c823c0e7e5a6ad/SORACOM_Logo.png) 

IoT connectivity provider Soracom improves the stability and performance of their dashboard service while increasing development efficiency.

 Products Used 

Workers WAF DDoS Protection Argo Smart Routing 

 Details 

 Industry 

Manufacturing 

 Region 

Asia-Pacific 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Soracom & Cloudflare | Customer Story","description":"IoT connectivity provider Soracom improves the stability and performance of their dashboard service while increasing development efficiency","url":"https://www.cloudflare.com/case-studies/soracom/","inLanguage":"en"}
```
