---
title: Kinsta | Case Study
description: Kinsta uses Cloudflare solutions to prevent DDoS attacks and provide a premium tailored hosting experience
image: https://www.cloudflare.com/preview.png
---

# Kinsta

> #### "  Everything that we do is focused on building a solution that can scale while providing the level of service that our customers expect. Cloudflare solutions give us that scalability and free up our teams' time and energy to focus on proactive features and solutions. " 

## **Kinsta uses Cloudflare technology to deliver premium cloud-hosted solutions that are secure and fast**

[Kinsta](https://kinsta.com/) is a provider of tailored cloud hosting to tens of thousands of organizations in 128 countries. The company was founded in 2013 with the idea that hosting should be feature-rich, powerful, fast, and secure — and that support should be exceptional.

Initially famous for its [Managed WordPress Hosting](https://kinsta.com/wordpress-hosting/), Kinsta's offerings also include [Application Hosting](https://kinsta.com/application-hosting/), [Database Hosting](https://kinsta.com/database-hosting/), and [Static Site Hosting](https://kinsta.com/static-site-hosting/) — all fronted by Cloudflare. Using the fastest machines on the Google Cloud Platform for WordPress, Application, and Database Hosting, Kinsta's services have been winning awards for years. The company is regularly ranked near the top of the Managed Hosting category of G2's crowdsourced reviews, and in 2023 was ranked third across G2's Satisfaction, Popularity, and Easiest to Use ratings. Kinsta has also earned recognition as a leader or high performer in G2's Europe Regional Grid, Mid-Market Grid, Small Business Grid, and Momentum Grid.

### **The initial challenge: Highly visible websites create DDoS risks**

Kinsta was already hosting tens of thousands of websites — ranging from small businesses to global enterprises — when it first turned to Cloudflare for protection from distributed denial-of-service (DDoS) attacks. Many of Kinsta's customers have high profiles, making them popular targets for cybercriminals. While the company had in-house DDoS mitigation solutions, handling attacks was expensive and required significant time and manual effort by system administrators. DDoS attacks also caused noticeable downtime, which was undesirable for Kinsta and its customers.

### **Cloudflare eliminates the threat of DDoS attacks**

Kinsta's in-house DDoS mitigation solution was built using load balancers hosted on Google's platform. Using a combination of automated scripts and manual tuning, this in-house infrastructure could mitigate most attacks with minimal downtime for customers. However, a DDoS attack against one site could affect other customers behind the same load balancer. Managing DDoS attacks in-house also took personnel away from other tasks — a problem eliminated by a switch to Cloudflare DDoS protection. Jenna Recktenwald, a DevOps engineer at Kinsta, says, "I remember some days when it would take two or three admins per shift to handle a DDoS attack or even multiple ones. Now, we just get alerts from Cloudflare saying that it has detected an attack and is mitigating it."

Cloudflare DDoS protection has stopped thousands of attacks for Kinsta. For customer sites protected by Cloudflare, DDoS attacks have become a non-event. According to Recktenwald, "We have Cloudflare DDoS alerts sent to our Slack channel. When we get an alert about an in-progress attack that Cloudflare is mitigating, our sysadmins will just acknowledge it and move on." The switch to Cloudflare has enabled Kinsta to eliminate its Google-hosted load-balancing infrastructure, which has dramatically simplified the process of applying updates. In the past, sysadmins needed to coordinate updates across more than 100 load balancers to ensure a smooth rollout. Now, updates require only a single configuration change or a tweak to some code and are automatically rolled out across Cloudflare's infrastructure.

### **Cloudflare Workers enables customized cloud hosting at scale**

Kinsta's rapid growth — including adding new services like Application Hosting and Database Hosting — has made scalability even more critical. Kinsta has containerized its hosting infrastructure, which decreases overhead and improves reliability and scalability. However, containerization has made routing more complex, since routing traffic to a particular container requires specifying that container's IP address and port.

Cloudflare Workers, a next-generation development service, makes it possible for Kinsta to implement the necessary routing logic for customer domains hosting WordPress sites, applications, or static content. Each domain Kinsta manages has a record in Workers KV (key-value) that stores the necessary routing information. Inbound traffic is processed by a Cloudflare Workers script that looks up the relevant record and routes the traffic to the appropriate location.

With Workers and Workers KV, Kinsta is also able to apply custom settings for each domain. Says Recktenwald, "There was no good way for us to scale before we started using Cloudflare Workers. By storing data in Workers KV and manipulating requests before they reach the server and on their way back, we can just turn on or off so many features for our clients."

Among those features, Kinsta has made use of Cloudflare's cache customization options (including Cache API) to offer its clients static CDN as well as dynamic Edge Cache. These features helped Kinsta slash website loading times in half.

Kinsta also offers their customers more speed-enhancement options by combining Workers with Cloudflare features like image optimization, code minification, and Early Hints — the latter of which preemptively sends browsers website rendering information.

Overall, Workers has become a vital part of how Kinsta provides value to its customers. Each month, Cloudflare Workers handles more than 69 billion requests from Kinsta's infrastructure.

### **SSL for SaaS simplifies certificate management and improves site performance**

Kinsta hosts over 100,000 domains for its customers. Previously, it managed [SSL certificates](https://www.cloudflare.com/application-services/products/ssl/) using Let's Encrypt, but updating a certificate required a manual rollout to each load balancer supporting its domain. Doing so across all of Kinsta's infrastructure usually required a couple of hours' work by a system administrator.

According to Recktenwald, "After making the switch to Cloudflare for DDoS protection, using [SSL for SaaS](https://www.cloudflare.com/application-services/products/ssl-for-saas-providers/) was a no-brainer." SSL for SaaS [automates the SSL certificate creation process](https://www.cloudflare.com/application-services/solutions/certificate-lifecycle-management/), eliminating a task for system administrators and support tickets from customers struggling with updates. The switch to SSL for SaaS even improved load times for customer sites by as much as 40%.

### **Enabling Kinsta to deliver exceptional service**

By automating the process of protecting against DDoS, managing SSL certificates, caching content, and hosting static sites, Cloudflare helps Kinsta concentrate on its customers and continue growing. Daniel Pataki, Kinsta's CTO, says, "Everything that we do is focused on building a solution that can scale while providing the level of service that our customers expect. Cloudflare solutions give us that scalability and free up our teams' time and energy to focus on proactive features and solutions."

![Kinsta logo](https://images.ctfassets.net/slt3lc6tev37/1X1A0BFihIS8JMrYHBGmi2/1b831a3b9a0e2f2152da22dcbbb78a93/Kinsta_black.png) 

Kinsta uses Cloudflare solutions to prevent DDoS attacks and provide a premium tailored hosting experience

 Cloudflare Products 
* [  SSL for SaaS ](/application-services/products/ssl-for-saas-providers/)
* [  Workers ](https://workers.cloudflare.com/)

 Products Used 

Workers SSL/TLS SSL for SaaS 

 Details 

 Industry 

Hosting 

 Region 

North America 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Kinsta | Case Study","description":"Kinsta uses Cloudflare solutions to prevent DDoS attacks and provide a premium tailored hosting experience","url":"https://www.cloudflare.com/case-studies/kinsta/","inLanguage":"en"}
```
