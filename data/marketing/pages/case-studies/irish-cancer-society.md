---
title: Irish Cancer Society &amp; Cloudflare | Case Study
description: Irish Cancer Society leverages Cloudflare to make its annual day of giving a huge success
image: https://www.cloudflare.com/preview.png
---

# Irish Cancer Society

> #### "  We measured web response times during the week leading up to this year's Daffodil Day, and again after enabling Cloudflare. Response times were 60% faster with Cloudflare. " 

## **Irish Cancer Society leverages Cloudflare to make its annual day of giving a huge success**

An estimated 44,000 people in Ireland are diagnosed with cancer each year. The mission of the Irish Cancer Society is to save and improve their lives. The society provides free information and care, raises funds for cancer research, and works with government officials to improve the Irish healthcare system for cancer patients.

As a nonprofit, the society relies on donations. And while fundraising occurs year-round, the vast majority of donations occur in March during the society's annual Daffodil Day event.

The most recent Daffodil Day brought in over €5,000,000 to fund services such as informational booklets and webpages, night nursing services, volunteer drivers, free phone support, and Daffodil information centers. The society also funds state-of-the-art cancer research and life-saving trials. 

Approximately one-quarter of donations are received online through the society's website. Consequently, keeping the website online — while also providing fast response times — is critical to their fundraising and support efforts.

### **Challenge: Deliver 100% availability during peak fundraising times**

In 2020, Ireland's Friday night Late Late Show featured the Irish Cancer Society's Daffodil Day, during which celebrities encouraged viewers to donate to the society. The show generated an unexpectedly large amount of website traffic. During the peak, IT staff struggled to keep the society's online cancer information services available.

During the 2021 fundraising period, the staff decided to redirect donor traffic to a Lambda service running in AWS. Unfortunately, that approach rendered cancer information services unavailable.

Moving forward, the staff needed to find a way to keep cancer information services readily available, while also boosting web page response times. Only a few weeks remained before Daffodil Day, so the pressure was on. 

Moreover, this year, Ireland's national rugby team would be talking up Daffodil Day on The Late Late Show. Consequently, the society was expecting an unprecedented number of viewers, which would likely cause donation traffic to reach extraordinarily high levels. Being prepared for the event was a top priority.

### **Solution: Cloudflare's rapid response to a tight onboarding deadline helped ensure successful fundraising with 2X more traffic than the previous year**

Head of Technology Transformation Mark Coffey and his staff were familiar with Cloudflare and impressed with the company's reputation. After investigating multiple solutions, they determined that Cloudflare was the best option for tackling the upcoming day of giving. 

With that crucial day only weeks away, the society approached Cloudflare for help to get the new services tuned and running smoothly. Cloudflare recognized the urgency of the situation and immediately set up a technical support call. With Cloudflare's expert assistance, the staff was able to implement caching and the Cloudflare Web Application Firewall (WAF) in time to be fully operational for Daffodil Day. Cloudflare helped the society set up a single-page donation form, through which donors could make payments via a third-party fundraising platform. By redirecting donor traffic away from their main website, the society was able to keep cancer support services available even while experiencing traffic spikes.

As expected, traffic spiked during The Late Late Show.

![ICS Graph 1](//images.ctfassets.net/slt3lc6tev37/6Flxn1QGW1fhN2oBLhbUCO/d8ab78f01e324e7ecf67bbe2473ede56/image005__1_.png)

"During the Daffodil Day peak, we redirected 90% of donor traffic away from our website to Cloudflare, allowing us to keep our cancer information and support services available for people who needed them," Coffey recalls. 

The staff closely monitored website performance and was able to keep the site running with faster response times and no availability issues, even though traffic on Daffodil Day was 100% higher than the previous year.

![ICS Chart 2](//images.ctfassets.net/slt3lc6tev37/2jU94qdZYOgoP2n6JKZ1ti/9820f62e3fb7c127eb57d6c7700228cf/unnamed__2_.png)

"We measured response times during the week leading up to this year's Daffodil Day, and then again after enabling Cloudflare," Coffey notes. "Response times were 60% faster with Cloudflare." 

### **Eliminating credit card fraud**

The society also had security concerns such as DDoS attacks and malicious bots. Fraudulent credit card transactions were of particular concern. During the 2022 Daffodil Day, the finance team had alerted Coffey about these transactions and how much they were costing the nonprofit.

To counteract this, the staff enabled the Cloudflare WAF geolocation capability to flag transactions from certain locales and submit them for additional verification processes. The fraudulent transactions stopped immediately. The finance team was able to quantify the impact the following month, reporting that the annual volume was nearly 200,000 fraudulent charges.

"Our payment processing vendor charges us three cents per fraudulent transaction," Coffey says. "That amounts to around €6,000 a year. The extra Cloudflare verification saves us that money, which is better spent on services for cancer patients and their families."

### **Building on success with Cloudflare**

Coffey, his team, and senior management are all delighted with the successes Cloudflare helped the society achieve. "We are actively looking for ways to continue improving our site's performance and security," he explains. "We are starting a proof of concept with the Cloudflare Zero Trust platform, which will reduce reliance on VPN hardware for remote access while enhancing security." 

Solutions like Cloudflare Zero Trust are available to the Irish Cancer Society through Project Galileo, a Cloudflare programme that offers significant discounts to nonprofits. The Irish Cancer Society joined [Project Galileo](https://www.cloudflare.com/galileo/) shortly after Daffodil Day as they plan to continue working with Cloudflare for years to come.

"Other vendors give us heavy discounts, but Project Galileo's discount structure goes above and beyond what others provide," Coffey concludes. "It's very, very generous. And it gives us an affordable way to leverage Cloudflare's extensive functionality in support of our mission to assist cancer patients and their families."

![Irish Cancer Society logo](https://images.ctfassets.net/slt3lc6tev37/6KYicW5jaKhXppaT1Bo5aS/98ceb95a598a115d5829c2707e29aa1d/ICS_MotherBrand_Linear_CMYK.png) 

With Cloudflare application services, Irish Cancer Society handled a 2X increase in fundraising traffic while cutting web response times by more than half

 Cloudflare Products 
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  Page Rules ](https://developers.cloudflare.com/rules/)

 Products Used 

CDN DDoS Protection 

 Details 

 Industry 

Public Interest 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Irish Cancer Society & Cloudflare | Case Study","description":"Irish Cancer Society leverages Cloudflare to make its annual day of giving a huge success","url":"https://www.cloudflare.com/case-studies/irish-cancer-society/","inLanguage":"en"}
```
