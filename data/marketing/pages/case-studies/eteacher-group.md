---
title: eTeacher Group | Cloudflare
description: eTeacher Group uses Cloudflare to simplify remote access and accelerate its Zero Trust journey.
image: https://www.cloudflare.com/preview.png
---

# eTeacher Group

> #### "  IT is evolving by leaps and bounds, and more sophisticated, more destructive cyber threats are emerging every day. Zero Trust is the only viable security model in this environment, and Cloudflare is making it a lot easier for eTeacher Group to get there. " 

## **Cloudflare supports eTeacher Group towards a Zero Trust security model**

Founded in 2000, Israel-based eTeacher Group uses modern technology to provide virtual learning to over 35,000 students in 200 countries and regions, ranging from small children to adults. With over 850 employees worldwide, eTeacher operates almost on an entirely remote basis. The company currently offers classes in nine different languages and is continually seeking to expand its reach through new course offerings and collaboration with ed-tech professionals.

### **Challenge: Simplify remote access to internal resources while moving towards a Zero Trust security model**

Approximately two weeks prior to Israel officially issuing COVID-19 shutdown mandates, eTeacher Group anticipated having to shift to a remote work model, so they set up VPN access for all of its employees, including its global workforce of call center employees.

However, the company found the VPN very difficult to configure — especially for its call center employees, who are distributed worldwide and work from their own devices. Additionally, eTeacher Group wanted to [implement a Zero Trust security model](https://www.cloudflare.com/learning/access-management/how-to-implement-zero-trust/) to better secure its digital IP and [harden its defenses](https://www.cloudflare.com/cybersecurity/) against credential stuffing and other cyberattacks that involve weak or stolen passwords. The VPN didn't support this plan. Neither did the company's WAF, which was difficult to configure and didn't provide advanced security analytics. 

After a local cybersecurity company suggested that eTeacher's CTO, Boaz Borovsky, contact Cloudflare, the company did a proof of concept (POC) of Cloudflare Access, which helps teams secure corporate applications with a Zero Trust model. 

After a successful POC of Access, Borovsky integrated Cloudflare Tunnel, a secure tunneling software that establishes a private connection between internal applications and the Cloudflare edge, along with Cloudflare WAF. To ensure high performance and availability as eTeacher's traffic rapidly grew post-pandemic, he also implemented Cloudflare's performance suite.

### **Cloudflare Access & Tunnel enable eTeacher Group to eliminate its VPN**

After implementing Cloudflare Access, eTeacher Group reduced its employee onboarding time by 60%. The added efficiency of Access helped all teams get up to speed faster.

"Configuring VPN access for new employees was time-consuming, extremely difficult, and prone to mistakes," Borovsky explains. "Setting up new employees on Access is simple, and we know it's secure."

eTeacher's employees appreciate Access' ease of use in contrast to the VPN. "Cloudflare Access provides a simple, seamless logon experience for non-technical employees like me," says Itay Shalital, CFO. "It's so easy to use, I don't even know it exists! It just works."

Access also made it simpler for eTeacher Group to block public access to certain URLs, such as the company's login link for its content management system (CMS). "Without Access, restricting access to a CMS login page is difficult and requires special plugins. Meanwhile, CMS login pages are very susceptible to brute-force attacks like credential stuffing," Borovsky explains. "Access made it amazingly easy for us to hide that URL from the public internet."

By integrating Access with Cloudflare Tunnel, eTeacher Group can deploy a private networking model on Cloudflare's edge. For example, sensitive applications they need to keep off of the public Internet are connected to Cloudflare via Cloudflare Tunnel, and Access sits in front of the applications, enforcing multiple complexity based rules about who can log in. 

"We wanted to go a bit 'off-grid' when publishing these particular apps," Borovsky recalls. "Without Tunnel, this wouldn't have been an easy thing to accomplish, but Cloudflare made it easy."

Tunnel also enabled eTeacher Group to begin the process of closing all inbound communication to the Cloudflare WAF and segue to outbound traffic only. 

"Eventually, we want to use Access and Tunnel to implement a Zero Trust security model company-wide," Borovsky explains. "We want to fully integrate Cloudflare with our cloud services provider and all of our other technical solutions."

### **Cloudflare WAF enhances security by providing actionable insights into traffic patterns**

Cloudflare WAF has become a critical part of eTeacher Group's security defense, particularly because of the security analytics it provides.

"Cloudflare WAF's analytics let us see exactly what's going on with our traffic, which gives us insight that we never had before," Borovsky says. "For example, we were able to identify and eliminate DNS problems that we struggled with in the past." 

The company also found out it was being targeted by non-existent domain attacks, which Borovsky's team had no way of knowing before. On another occasion, Borovsky's team identified a script that was attempting to learn more about eTeacher Group's certificates. The team used this information to build a custom rule in the WAF to block the script, preventing a potential security incident.

"With Cloudflare WAF, our company's security is already on a higher level," Borovsky says. "The default rules cover nearly all of our needs. When we do need a custom rule, it's very easy to build, test, and deploy one."

### **Cloudflare is helping eTeacher improve performance and implement Zero Trust security**

Cloudflare's security solutions are playing a key role in eTeacher Group's journey towards a Zero Trust security model, which Borovsky sees as a necessity in an increasingly digital world and a highly dynamic threat environment.

"IT is evolving by leaps and bounds, and more sophisticated, more destructive cyber threats are emerging every day," Borvosky says. "Zero Trust is the only viable security model in this environment, and Cloudflare is making it a lot easier for eTeacher Group to get there."

"Cloudflare is helping us achieve Zero Trust while saving us a lot of time," says Ehud Ashkenazi, Team Leader. "Additionally, Access and Tunnel enable us to get rid of our VPN, and the WAF is much easier to manage than our previous firewall."

In addition to continuing to integrate Cloudflare's security solutions organization-wide, Borovsky wants to do more with Cloudflare's performance suite, as well as with Cloudflare Workers, a serverless platform that simplifies running custom code at the network edge. 

"Workers looks amazing, and there are also a lot of caching and speed tools that we want to implement, like Load Balancing," Borovsky says. "The depth of Cloudflare's offerings is incredible, and Cloudflare is adding new features and tools all the time. Clearly, Cloudflare deeply understands the cyber threat environment and the needs of online businesses."

![eTeacher Group logo](https://images.ctfassets.net/slt3lc6tev37/2NO0WFDZPeWVCTqYm9CFSI/ba4d1a2852e9f146fa447e018c933696/eteacher.png) 

eTeacher Group uses Cloudflare to simplify remote access and accelerate its Zero Trust journey.

 Cloudflare Products 
* [  Access ](/sase/products/access/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)

 Products Used 

Access WAF Teams Zero Trust 

 Details 

 Industry 

Education 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"eTeacher Group | Cloudflare","description":"eTeacher Group uses Cloudflare to simplify remote access and accelerate its Zero Trust journey.","url":"https://www.cloudflare.com/case-studies/eteacher-group/","inLanguage":"en"}
```
