---
title: Berkeley Lab Case Study
description: Berkeley Lab Case Study
image: https://www.cloudflare.com/preview.png
---

# Lawrence Berkeley National Laboratory

## **Lawrence Berkeley National Laboratory (Berkeley Lab) chooses Cloudflare as its Zero Trust security partner**

Lawrence Berkeley National Laboratory, otherwise known as Berkeley Lab, is a Department of Energy (DOE) National Laboratory, managed by the University of California. Berkeley Lab conducts open scientific research intended for publication across both fundamental and applied scientific domains. The Lab is located adjacent to the University of California, Berkeley, and it is closely affiliated with the university. In addition to Berkeley Lab's 5,000 employees, students and researchers from all over the world perform research on-site and electronically access the lab's resources.

### **Challenge: Secure a decentralized web server architecture and implement more rigorous application access policies**

Although it conducts research for the U.S. DOE, Berkeley Lab more closely resembles a research and education institute, not a government agency. While other government organizations focus heavily on restricting access, Berkeley Lab's goal is to make its information as accessible as possible to the researchers who need it, while at the same time protecting its systems from abuse.

Berkeley Lab's IT infrastructure is decentralized, with thousands of on-prem and cloud web servers operated by and for different scientific projects and collaborations. For some time, Berkeley Lab was challenged by visibility into cloud assets, in particular web servers that were subject to defacements or other attacks. 

Berkeley Lab attempted to mitigate the attacks through penetration testing and vulnerability scanning, but these methods proved resource intensive. After considering security tools from several vendors, Berkeley Lab signed up for Cloudflare's security and performance suite, which includes the Cloudflare Web Application Firewall (WAF), Cloudflare Content Delivery Network (CDN) and Load Balancing.

However, that was just Phase 1, and Berkeley Lab turned to Cloudflare again when new challenges emerged and existing Cloudflare services offered an easy opportunity to address them:

* Cloudflare Access, which uses a Zero Trust model to help teams secure enterprise applications with better performance, security, and privacy than a traditional VPN.
* Cloudflare Rate Limiting, which helps protect against Distributed-Denial-of-Service attacks, vulnerability scanning, and reconnaissance.
* Super Bot Fight Mode, which can block malicious automated attacks early, inexpensively, and at scale, giving Cloudflare-protected resources "herd immunity" against them.

### **Cloudflare WAF provides Berkeley Lab with complete visibility and control over hundreds of web servers**

The Cloudflare WAF enables Berkeley Lab to monitor and control traffic to its cloud-hosted resources, including traditional VMs, SaaS, and serverless apps as well as on-premises devices. Berkeley Lab uses the WAF as a reverse proxy for both HTTP and HTTPS, which has allowed them to regain critical visibility that's been lost with encryption. Because the lab is proxying the web server to the client, they can also terminate TLS connections at Cloudflare's edge, enabling them to meet BOD 18-01 requirements without making changes at their origin servers.

The WAF blocks over 2 million threats each month from reaching Berkeley Lab's primary domain, lbl.gov. In addition, the WAF's logging capabilities are essential to securing the lab's extensive distributed data environment, since log data can be fed directly into its intrusion detection system (IDS).

Cloudflare's logging capabilities also aligned with the lab's goal of pervasive visibility across their systems

Berkeley Labs still does automated security scanning, but their web environment is constantly changing. Each change could introduce a vulnerability, and they are unable to scan every server every day. By using a cloud-based WAF, the lab is able to stop cybercriminals from taking advantage of vulnerabilities they haven't yet found, which lets them be more proactive than reactive with their security.

### **Cloudflare Access supports Berkeley Lab's Zero Trust architecture**

Prior to implementing Cloudflare Access, employees could only access certain self-hosted tools - like Berkeley Lab's office supply procurement system - on-premises. This became problematic when the COVID-19 pandemic forced more employees to work remotely, and more users were relying on the VPN for remote application access. 

Berkeley Lab still offers a full-tunnel VPN today for visibility purposes, but Cloudflare Access is being used to incrementally reduce reliance on it for application access. Critical enterprise applications ranging from the procurement system to HR information system, as well as groundbreaking scientific projects are protected by Cloudflare Access, and users don't need a VPN to access them. Instead, users connect to these resources through a regular web browser. As requests are routed and accelerated through Cloudflare's edge, they are evaluated against Zero Trust rules incorporating signals from Berkeley Lab's identity providers, devices, and other contexts. 

Cloudflare Access enables employees to easily and securely access tools like procurement systems from any location, through any web browser, and it lets Berkeley Lab monitor their usage of protected systems. Their employees were able to migrate seamlessly from their VPN to Access without much notice.

Cloudflare Access is integrated with their identity provider, which allows Berkeley Lab to enable multi-factor authentication (MFA) on legacy applications that didn't natively support it. This helped them get ahead of the curve on compliance with the White House Executive Order that mandates MFA for federal agencies and contractors. MFA is also a key component of a Zero Trust security architecture.

Berkeley Lab had been thinking about Zero Trust Architectures for a very long time, and Cloudflare Access was able to give them the ability to enact it. 

Berkeley Lab is still in the process of replacing its VPN with Cloudflare Access throughout the organization. The Lab predicts that within a year, Access will have replaced their VPN for the vast majority of users. 

By combining Berkeley Lab's existing protocols with Access and the rest of the Cloudflare security suite, they are able to make good progress on their zero-trust journey.

### **Cloudflare's security and performance solutions are deployed organization-wide**

In addition to the Cloudflare WAF and Access, Berkeley Lab uses Cloudflare Rate Limiting, Super Bot Fight Mode, and Cloudflare's performance suite, which includes the Cloudflare CDN and Load Balancing.

Cloudflare Rate Limiting and Cloudflare Super Bot Fight Mode enable Berkeley Lab to prevent automated traffic and malicious bots from attacking their systems and straining network resources.

Cloudflare's security and performance solutions are deployed organization-wide. Berkeley Lab's business systems group, which operates the human resources, finance, and other enterprise systems, used Cloudflare Load Balancing to replace on-premises hardware that was expensive, time-consuming to manage, and represented a single point of failure.

The Cloudflare CDN serves approximately 2TB of Berkeley Lab's traffic from cache each month, saving the lab valuable bandwidth that its researchers can use for compute-intensive research activities.

After implementing the Cloudflare CDN and Load Balancing, the lab was able to see significant improvements in their WordPress hosts. 

![Lawrence Berkeley National Laboratory logo](https://images.ctfassets.net/slt3lc6tev37/2cSlDzTqnKrMtCrFxWHWby/fd658bb94dc17bf7d5ae08539f97a18e/5_BL_Horiz_Tile_rgb.png) 

Cloudflare's security suite is an important component of Lawrence Berkeley National Laboratory's security model

 Cloudflare Products 
* [  Access ](/sase/products/access/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)

 Products Used 

Access WAF Zero Trust 

 Details 

 Industry 

Healthcare & Life Sciences 

 Region 

North America 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Berkeley Lab Case Study","description":"Berkeley Lab Case Study","url":"https://www.cloudflare.com/case-studies/lawrence-berkeley-national-laboratory/","inLanguage":"en"}
```
