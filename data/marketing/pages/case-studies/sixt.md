---
title: SIXT | Case Study
description: SIXT &amp; Cloudflare | Case Study
image: https://www.cloudflare.com/preview.png
---

# SIXT

> #### "  Cloudflare Bot Management lets us block bad bots as soon as we see them. Since implementing Cloudflare, our website has not had any downtime. " 

## **Cloudflare helps SIXT stop bot attacks and build proactive security defenses**

Headquartered in Pullach, near Munich, Germany, SIXT SE is a leading international provider of high-quality mobility services. With its products [SIXT rent](https://www.sixt.com/#/), [SIXT share](https://www.sixt.com/share/#/), [SIXT ride](https://www.sixt.com/ride) and [SIXT+](https://www.sixt.com/plus/#/) the company offers a uniquely integrated premium mobility service across the fields of vehicle and commercial vehicle rental, car sharing, ride hailing and car subscriptions that can all be booked via the SIXT App. SIXT is present in approximately 110 countries worldwide. The listed family-owned company's strengths lie in its consistent customer focus, a living culture of innovation with strong technological expertise, its fleet of premium cars and its exceptional value for money. Since 2009, Sixt SE has more than doubled its revenue in the Mobility business segment and generated revenue of EUR 2.49 billion in this segment in its previous record year 2019 (total group EUR 3.31 billion). It is ranked as one of the most profitable mobility companies in the world. In the third quarter 2021, Sixt SE posted the best quarterly operating result in the company's history and is heading for a full-year result that exceeds the record year 2019\. Sixt SE, the Group's parent company, has been listed on the Frankfurt Stock Exchange since 1986 (WKN common shares: 723132, WKN preferred shares: 723133).

### **Challenge: Mitigate daily bot attacks that were degrading performance and preventing overnight system upgrades and testing**

SIXT was facing a major problem with [price-scraping bots](https://www.cloudflare.com/learning/ai/how-to-prevent-web-scraping/), which attacked SIXT's systems on a daily basis. The bots significantly degraded performance on both the company's website and mobile app, and the regular early-morning attacks prevented SIXT from scheduling overnight system upgrades and testing. This could prevent customers from being able to access the SIXT website and its services. 

SIXT's engineers attempted to mitigate the bots with a previous solution, but the product was not robust enough to fit SIXT's needs. The solution did not allow them to act quickly enough, so by the time SIXT managed to block the bots, the threat actors behind the attacks would alter the bots to evade SIXT's defenses. Additionally, the past solution could not differentiate between malicious bots and legitimate automated traffic from SIXT's extensive partner network.

SIXT turned to Cloudflare for a more comprehensive solution. In addition to Cloudflare Bot Management, SIXT implemented a performance and security suite that includes the Cloudflare Web Application Firewall (WAF), CDN, and Rate Limiting. To complement these products, SIXT added Cloudflare Workers, which provides developers with a serverless execution environment that enables them to create entirely new applications or augment existing apps with custom code at the edge, without configuring or maintaining infrastructure.

### **Cloudflare Bot Management puts a halt to daily bot attacks and enables SIXT to take a proactive security stance**

After deploying Cloudflare Bot Management, SIXT stopped experiencing daily early-morning bot attacks. After first mirroring the setup they had had with their previous provider, SIXT configured Bot Management to perform additional logging, which enabled their engineers to block problematic endpoints, proactively hardening their defenses against malicious traffic.

"Cloudflare Bot Management lets us block bad bots as soon as we see them," explains Anthony Davis, senior engineering manager, IT software operations. "Since implementing Cloudflare, we have not had any downtime due to bots."

In addition to making SIXT's website far more reliable, which enhances the customer experience, Cloudflare Bot Management saves SIXT money on infrastructure and personnel.

"My engineers no longer have to get up at 4:00 a.m., and we no longer have to run specific clusters just to handle bot traffic," Davis notes. "We are also able to perform upgrades and testing in the overnight hours without worrying about our infrastructure being overtaxed."

Bot Management's analytics have also made it easier for SIXT to have difficult conversations with some of their partners. These partners are permitted to use bots to obtain data from SIXT. However, some of them had been using unapproved methods to access the data, resulting in them inadvertently bombarding SIXT's systems with automated requests — and being blocked.

"These partners did not mean to cause problems; they just did not realize how many requests they were sending in short periods of time," Davis explains. "Now, when they complain about being blocked, we can show them Bot Management data demonstrating that they were sending far more requests than they thought."

In addition to preventing SIXT's daily bot attacks, Bot Management protects the company's systems around the clock. On one occasion, Bot Management stopped a very large bot attack in its tracks.

"We were experiencing a bot attack that could have taken us offline for some time," Davis recalls. "It would have taken a considerable amount of time for us to rewrite code and block it manually. Bot Management stopped the attack immediately." 

### **Cloudflare Workers and WAF complement Bot Management to provide SIXT with a total security solution**

The Cloudflare Workers serverless platform saves SIXT's engineers a great deal of development time by enabling them to easily augment existing code, as opposed to having to do a rewrite. Among other use cases, SIXT leverages Workers as a complement to Bot Management.

"The combination of the Cloudflare Workers serverless platform and Bot Management makes it easy to differentiate bad bots from legitimate automated traffic," says Davis. "We use Workers scripts to allow traffic through if the Bot Management bot score falls below a certain number."

SIXT is also using Workers to set up a new development environment that integrates with its version control system. This will enable engineers to safely "break" code in production, enhancing innovation and letting SIXT get new products and features to market faster.

The Cloudflare WAF works in conjunction with Bot Management and Workers to enhance SIXT's security while saving the company time and money by allowing them to properly use their resources. SIXT uses the WAF to set up IP blocking and allow lists on endpoints that are restricted only to certain customers.

"We can immediately accomplish things with the WAF that would take weeks if we had to refactor our app code," Davis says. "Cloudflare WAF frees up my team to work on new products and features instead of security configurations."

Davis can see SIXT is getting great value from Cloudflare, and he plans to use Cloudflare solutions to protect more domains and services. "I am a big believer in voting with my feet," Davis says. "If I do not like a service, I will go elsewhere, and if I am happy, I will grow the relationship. I am thrilled with Cloudflare, and I intend to put as many assets behind it as possible." 

Klaus Kolitz, Chief Technology Officer at Sixt adds, "With Cloudflare we have confidence that we have the tools we need to ensure a safe and fast online experience for our customers, while providing our teams a flexible and secure way to build and deploy applications."

![SIXT logo](https://images.ctfassets.net/slt3lc6tev37/6RHs99pcEFudUGal6170nd/832ede109615f8de354d602de2ad41ed/Sixt_Logo_basis_pos_HKS7.png) 

SIXT partners with Cloudflare to halt daily bot attacks that degrade website and app performance

 Cloudflare Products 
* [  Bot Management ](/application-services/products/bot-management/)
* [  Workers ](https://workers.cloudflare.com/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)

 Products Used 

Bot Management WAF Workers 

 Details 

 Industry 

Travel & Leisure 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"SIXT | Case Study","description":"SIXT & Cloudflare | Case Study","url":"https://www.cloudflare.com/case-studies/sixt/","inLanguage":"en"}
```
