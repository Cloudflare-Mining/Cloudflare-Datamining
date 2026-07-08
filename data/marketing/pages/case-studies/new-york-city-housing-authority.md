---
title: New York City Housing Authority &amp; Cloudflare | Customer Story
description: New York City Housing Authority delivers a high-profile housing assistance app used by 1.5 million people with help from Cloudflare
image: https://www.cloudflare.com/preview.png
---

# New York City Housing Authority

> #### "  We needed to prevent too many people from accessing the app at the same time. And we wanted the ability to filter people in or out in case we had to make an app update. Cloudflare Waiting Room allows us to address both of those requirements. " 

## NYCHA delivers a high-profile housing assistance app used by 1.5 million people with help from Cloudflare

As the largest public housing authority in North America, the New York City Housing Authority (NYCHA) provides affordable housing to more than 520,000 people across the city. In addition to offering public housing for those who need it, NYCHA runs a Housing Choice Voucher program (also known as Section 8), which provides rental subsidies to eligible families. These subsidies are a critical source of assistance for low- and moderate-income families living in one of the country's most expensive cities. 

### Challenge: Meeting pent up demand

The waitlist for receiving Section 8 subsidies is long, and the organization is rarely able to accept new applicants. But in 2024, NYCHA prepared to open the waitlist for the first time in 15 years. The organization would accept applicants and then run a lottery to see which eligible applicants would be added to the waitlist. To serve hundreds of thousands of new applicants within a short open waitlist period, the organization had to replace the previous paper-only process with a digital experience.

"We knew that most applicants would have mobile devices, so it was critical to build a responsive, mobile-ready app," said Michael Deutsch, VP of Infrastructure and Operations at NYCHA. The team also planned to offer access to the digital application through kiosks in walk-in centers while continuing to provide paper applications.

Pressure was on from the beginning. The IT team was given only a few months to build the new app. And early on in the process, the organization's leadership team was concerned that the initial app development plan would not work. When the mayor announced in his State of the City address that the Section 8 waitlist would open later in the year, the clock started ticking. 

Speed and efficiency were key. "We had about five months to build, test, and deploy an app that would be very publicly exposed," said Deutsch. "And we had to complete that work with a core team of fewer than 10 people."

### Building a cloud-native app to support an influx of visitors

The team considered building the new digital experience on the organization's existing customer relationship management (CRM) solution, which was running on premises. But doing so would have required scaling up infrastructure. 

Instead, the team decided to develop a cloud-native app, which could provide the elasticity for a large number of users. "We had to build something quickly — and the app had to support potentially a million visitors in the first hour," said Deutsch.

Taking the original paper form as a starting point, the team created a straightforward, mobile-responsive app to make it easy for people to apply for Section 8 vouchers. The app offered a simple sign-in process and a multi-lingual interface to help applicants navigate the process quickly. "Our goal was to enable most applicants to finish the process in under ten minutes," said Franklin Ramos, Director of IT Infrastructure Management at NYCHA. 

### Ensuring reliable, low-latency digital experiences for users everywhere with a CDN

With media attention focused on the opening of the waitlist, the team knew that the user experience would be highly scrutinized. The team needed to provide a smooth, uninterrupted, and low-latency experience, even if hundreds of thousands of people were using the app at once. 

The team recognized that implementing a content delivery network (CDN) with caching capabilities could help deliver reliable, low-latency digital experiences while reducing the strain on backend resources. A CDN could also provide strong app performance regardless of user location. Though the NYCHA Section 8 program only offers vouchers for housing within New York City, not all online applicants use the app while located within the city. New York residents might be visiting another state during the application period or currently living outside of the city. "We needed to be ready for applicants from across the country," said Ramos.

After exploring CDN options, the NYCHA team selected Cloudflare. In addition to Cloudflare's massive global network and caching capabilities, the Cloudflare Waiting Room function was a key draw. The Waiting Room allows organizations to temporarily direct users to a virtual waiting room during surges in traffic.

"We needed to prevent too many people from accessing the app at the same time," said Deutsch. "And we wanted the ability to filter people in or out in case we had to make an app update. Cloudflare Waiting Room allows us to address both of those requirements." 

### Controlling solution costs by selecting a unified platform

Deploying the Cloudflare platform helped the NYCHA team reduce costs of the app implementation. "The competing CDN vendor we considered did not have a waiting room capability," said Ramos. "They recommended partnering with a third party — and that would have added costs. We saved money by gaining all the capabilities we needed from the single Cloudflare platform."

### Implementing performance and security services within one week

Though the NYCHA IT team faced an aggressive timeline, all of the pieces came together quickly — including implementation of Cloudflare services. "We were able to integrate the application access through Cloudflare in under a week," said Ramos. 

"The final step just required the DNS record change, so it was simple and easy for us," said Deutsch. 

### Blocking 250,000 attacks on day 1 with Cloudflare security

Before launching the new app, the NYCHA team had to ensure that they could prevent disruptive cyber attacks and protect the citizen information entered into the Section 8 waitlist application. "We were concerned about malicious bots, cross-site scripting, and DDoS attacks," said Ramos. "So we started looking at security vendors."

Though the team evaluated multiple options, they selected Cloudflare's cloud-native security services. "Cloudflare provided all the app security functionality we needed — all in the same platform as the CDN and Waiting Room features we had already selected," said Ramos.

When the Section 8 app launched, the attacks flowed in, but none affected users. "We experienced over 250,000 bot attacks within the first nine hours," said Deutsch. "Cloudflare security blocked everything, with no impact to application performance."

### Supporting a fast, convenient online process

The new app was accessed by more than half a million people within just the first hour following the launch. And the metrics collected by the NYCHA IT team showed that users were able to navigate the process quickly. "Our goal was to enable users to complete the application in under ten minutes — and the average was approximately seven," said Ramos. 

The Cloudflare caching capabilities helped reduce any potential latency when using the app. "The feedback we received was that it was a very responsive app," said Ramos. "We were able to push almost the entire app into the user's cache, which delivered a better user experience while reducing stress on the infrastructure."

### Avoiding crashes and optimizing the app in real time with Waiting Room

On the day the Section 8 enrollment period opened, the NYCHA team was able to finely control how many users accessed the app at once using the Waiting Room functionality. "Initially, we tuned it pretty low, to just 250,000 people. But over the course of a few hours, we dialed it up incrementally to 750,000 active users," said Deutsch. 

"We were continuously monitoring the infrastructure to see how the load was impacting the back end," said Ramos. "Waiting Room allowed us to take a faucet approach and gradually let in more people while making sure they had a good user experience."

Waiting Room also enabled the team to update the app in real time. "In a few cases, we needed to modify the language on the page or fix a small bug," said Deutsch. "We placed new users in the virtual waiting room while current users worked on a cached copy of the page. We were able to make the changes without significantly disrupting the user experience."

"Cloudflare was very user friendly and made it possible for us to make changes in the moment based on real-world applicant volumes," said Alex Henry, Senior Manager for Data Governance, Leased Housing. "This flexibility contributed to the positive feedback we got from applicants on their experience applying for assistance."

The team deployed Cloudflare services to a second NYCHA app when the app saw a surge of visitors during the open waitlist period. "We extended the CDN and the Waiting Room capability to our Self-Service Portal, which can only support 7,000 simultaneous users. That portal came up first in Google searches, so many people visited it mistakenly, instead of the Section 8 app," said Deutsch. "Waiting Room worked perfectly. We made sure we never exceeded the maximum number of users and prevented the system from crashing."

Once the app was launched, its cloud-native architecture helped the team control ongoing costs. "As we let in more users with Waiting Room and monitored the infrastructure, we saw that we could start to scale down some of our back end," said Ramos. "We reduced our resources and our spending by about 30% without negatively affecting the user experience."

### Creating a framework for efficient application delivery

By the end of the one-week waitlist application period, 1.5 million people had visited the app, and NYCHA had processed more than 600,000 completed applications. After checking eligibility and running a random lottery, 200,000 households were added to the Section 8 waitlist, putting them on the path to affordable housing. 

"IT's use of Cloudflare in the Section 8 application process worked well for the business and the public," said Lakesha Miller, Executive Vice President, Leased Housing. "After 15 years of not accepting applications from the public, I wanted the public's reintroduction to our application process to be one that was clear, concise, and user friendly. Cloudflare enabled our IT colleagues to exceed this goal." Even after the waitlist application period closed, the IT team continued to benefit from Cloudflare services. For example, the Waiting Room feature now redirects users to a page that tells them the application deadline has passed. 

Meanwhile, the highly successful project earned NYCHA an award for the Best Application Serving the Public, presented by the NYC Office of Technology and Innovation and e.Republic. The award acknowledged the exceptional work in [modernizing](https://www.cloudflare.com/learning/network-layer/how-to-prepare-for-network-modernization-projects/) a critical process and setting a new standard for inclusivity, accessibility, and scalability in government services. 

Going forward, the team can use lessons learned from this project to deliver new digital experiences, quickly and efficiently. "We created a solid framework for building large, public-facing applications," said Deutsch. "With help from Cloudflare and other technology partners, we know that we can be successful and deliver results with even a small team."

![New York City Housing Authority logo](https://images.ctfassets.net/slt3lc6tev37/6ijgqj2hiGJL9Vj9x3LLO4/fdc74f8db78b71efc413271afc6831e6/NYCHA-logo-1-300x300.png) 

New York City Housing Authority opens the housing assistance waitlist for the first time in 15 years, implementing Cloudflare services to deliver reliable, secure access to a new online portal

 Cloudflare Products 
* [  CDN ](/application-services/products/cdn/)
* [  Cloudflare Waiting Room ](https://www.cloudflare.com/application-services/products/waiting-room/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  DDoS Mitigation ](/ddos/)
* [  Bot Management ](/application-services/products/bot-management/)

 Products Used 

CDN Waiting Room WAF DDoS Protection Bot Management 

 Details 

 Industry 

Public Sector 

 Region 

North America 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"New York City Housing Authority & Cloudflare | Customer Story","description":"New York City Housing Authority delivers a high-profile housing assistance app used by 1.5 million people with help from Cloudflare","url":"https://www.cloudflare.com/case-studies/new-york-city-housing-authority/","inLanguage":"en"}
```
