---
title: Once &amp; Cloudflare | Customer Story
description: Realtime data specialists Once partner with Cloudflare to secure audience interactions during large-scale international broadcast events like Eurovision.
image: https://www.cloudflare.com/preview.png
---

# Once 

> #### "  Cloudflare brings a personal touch to their client relationships that encourages collaboration and innovation. Working together, we have built a better product. " 

  
## **Once deflects over 2 billion malicious requests and secures the Eurovision vote with Cloudflare**

[Once](http://Once.net) brings real-time, data-driven interactivity to live events, productions, and platforms of any scale. They partner with media producers and news outlets to power digital experiences using [Based](https://www.based.io/), a scalable, live data platform, and [Tally](https://tally.tv/), an intuitive solution to help broadcasters empower and encourage user engagement with real-time interactions. 

"'Everyone, everywhere, all at once' — our company motto — explains it all," says Jim de Beer, Chief Technical Officer at Once and Founder of Based. "We focus on connecting organizations and creators to large amounts of information, people, and things, bringing in that live component that creates an endless flow of possibilities." 

Among their media clients, Once is a long-term partner of the [European Broadcasting Union (EBU)](https://www.ebu.ch/home), producers of the [Eurovision Song Contest](https://once.net/our-work/eurovision). Beginning with pan-European SMS voting in 2004, the company later pioneered live virtual cheering for Eurovision viewers during 2021's COVID-19 lockdowns. When Eurovision opened polling to a global audience, Once connected millions of international viewers outside Europe, and then collecting, counting, and publishing votes on the fly as the live contest unfolded. Since 2024, Eurovision called upon Once to support an extended global voting window of almost 24 hours. 

### **Challenge: Securing the Eurovision Song Contest against sophisticated DDoS and botnet attacks**

Once's core challenge is ensuring real-time delivery, uninterrupted availability, and the scalability to handle massive traffic surges of limited duration. It is a daunting responsibility, particularly during the annual high-visibility, high-traffic Eurovision Song Contest where Once supports millions of concurrent user interactions across approximately 150 countries.

"Audience participation is the wild card that makes Eurovision exciting — every delay has the potential to ruin the integrity of the event," explains de Beer. "There is only one chance to get it right, and Once takes responsibility for that." 

As the company that powers interactivity for Eurovision's high-visibility events, online security is also a major concern for Once. De Beer explains how the urgency of maintaining a security-first focus became especially clear when a series of large-scale DDoS and botnet attacks struck the Junior Eurovision Contest and caused 30% of Once's servers to fail. 

"Using many unique IP addresses, botnets made a sophisticated strategic attempt to test our infrastructure for vulnerabilities. You can't block that kind of attack manually, " explains de Beer. "Feeling the heat, we knew we had to invest in rebuilding a big part of our security infrastructure." 

With political conflicts escalating in Ukraine and Northern Europe, Once and the EBU took the possibility of future attacks extremely seriously. That is when de Beer reached out to Cloudflare.

"I sent Cloudflare a message via one of their 'Contact Us' forms. I explained our situation, saying we had another Eurovision event coming up and that we had to secure the new global voting process from end to end," says de Beer. "The response was very personal. I did not expect the attention of some of Cloudflare's top people." 

### **Improving threat response times and blocking malicious IP addresses in real time with Cloudflare**

Collaborating with Cloudflare to address their mounting challenges, Once upgraded and modernized their security infrastructure. The company began with Cloudflare [application security and performance services](https://www.cloudflare.com/application-services/solutions/) to close vulnerabilities, block attacks, ensure availability, and accelerate interactions on the Based.io platform. These early changes exceeded the capabilities of their old provider, eliminating one of their most pressing pain points.

"Adopting the Cloudflare API to instantly block malicious IP addresses is one of our biggest wins. Now we can mitigate threats globally — in seconds," says de Beer. "Cloudflare's focus on security and scale was an excellent combination for our use cases." 

### **Mitigating 2 billion threat requests to secure the Eurovision vote**

Next, they harnessed the flexibility of the Cloudflare [Web Application Firewall](https://www.cloudflare.com/application-services/products/waf/) (WAF) and the Cloudflare API to rapidly deploy custom and managed rulesets to identify and block malicious IP addresses. During the 2023 Eurovision Song Contest, Once faced over 100 million malicious requests intended to disrupt the then 40-minute international voting window. As the clock ticked, the Cloudflare WAF automatically flagged and blocked hostile traffic at the access key level, ensuring the event ran smoothly. 

According to de Beer, implementing Cloudflare also helped Once reduce defensive response deployments from over 15 to only 2 seconds (an 86% percent improvement), a critical improvement during live viewer interactions where any delay can lead to global disruptions. 

"On a large scale like Eurovision, Cloudflare is the difference between a successful event and a disaster," says de Beer. In 2025, Cloudflare blocked 2 billion malicious requests in 15 minutes. 

To thwart the rare unwanted traffic that did get through, Once implemented [Turnstile](https://www.cloudflare.com/application-services/products/turnstile/) — Cloudflare's friction-free CAPTCHA alternative — to differentiate between real visitors and malicious bots. Turnstile integrates with the Cloudflare WAF to manage user authentication challenges, identifying and blocking malicious access attempts on pages used to validate the Eurovision vote and speeding up connections for genuine voters. 

### **Improving availability and scalability with Cloudflare performance services on the global network**

The [Cloudflare global network](https://www.cloudflare.com/network/) — which covers 330+ cities in more than 120 countries around the world — played another critical role in Once's Eurovision success. With [Cloudflare's Tiered Caching](https://blog.cloudflare.com/tiered-cache-smart-topology/), a smart network topology that dynamically distributes user traffic, Once's cache hit ratio reached 80%, protecting Once's origin servers and ensuring uninterrupted performance throughout the Eurovision Grand Finale — despite increasingly high traffic volumes and an expanded global voting window. 

"Interest in Eurovision exploded beyond Europe to North and South America — the interest in the contest was huge in the US and even Brazil. Over 163 million people from 189 countries watched in 2024," says de Beer. "Routing traffic through the Cloudflare global network was the key to delivering the high levels of service and reliability Eurovision demands."

### **Offloading encryption duties for cost savings and operational efficiency gains**

While Cloudflare helps Once ensure maximum uptime and enhance service speeds, they also deliver cost savings and business advantages. Optimizing with Cloudflare enabled Once to handle loads exceeding 1.3 million concurrent users during Eurovision's peak — for a fraction of the cost of competing edge solutions.

According to de Beer, Once was able to reduce their server load and computing costs by 40% after offloading HTTPS termination and [SSL/TLS encryption duties](https://www.cloudflare.com/application-services/products/ssl/) to Cloudflare. Additionally, Cloudflare [Advanced Certificate Manager](https://www.cloudflare.com/application-services/products/advanced-certificate-manager/) helped streamline Once's certificate issuance, management, and renewal workflows, [automatically encrypting](https://www.cloudflare.com/application-services/solutions/certificate-lifecycle-management/) all of the company's new domains. 

"The Eurovision savings are impressive, but as we launch our data platform and begin serving multiple clients, our margins are everything," says de Beer. "Using Cloudflare to deliver edge encryption and distribute real-time data at scale — while hitting a more competitive price point — makes our platform a lot more profitable." 

Once also leverages the flexibility and rich functionality of the Cloudflare developer platform to speed up the creation and deployment of Eurovision's voting portals and seamlessly integrate the Cloudflare solutions that secure them — all while improving their bottom line. 

"Cloudflare increases our flexibility while cutting our costs," says de Beer. "Pages integrate with GitHub for one-click deployments, rapid iterations, and scalability. [R2](https://www.cloudflare.com/developer-platform/products/r2/) gives us cost-effective event data storage, eliminating egress fees and reducing administrative effort." 

### **Everything in one place — how Cloudflare helps consolidate multi-vendor solutions**

Eliminating third-party services and consolidating toolsets under Cloudflare also helps Once focus on innovating and developing their new platforms rather than administering multiple tools and vendor relationships.

"Before, we would use external services. Now, we have everything from security, content delivery, and image optimization to domain and certificate management set up and running in one place," says de Beer. "Cloudflare just makes life easier." 

Looking ahead, Once plans to continue working with Cloudflare to scale platforms and deliver high-volume live video streams coupled with more robust, feature-rich, and real-time data interactions. 

"Cloudflare brings a personal touch to their client relationships that encourages collaboration and innovation, " says de Beer. "Working together, we have built a better product — that's the Cloudflare difference."

![Once  logo](https://images.ctfassets.net/slt3lc6tev37/7wsuOgU9EcU4a5C8VQN4k1/821497ebe932f32519b7dc02efac2a70/once_logo.png) 

Realtime data specialists Once partner with Cloudflare to secure audience interactions during large-scale international broadcast events like Eurovision.

 Cloudflare Products 
* [  Access ](/sase/products/access/)
* [  Secure Web Gateway ](/sase/products/gateway/)
* [  Browser Isolation ](/sase/products/browser-isolation/)
* [  CASB ](/sase/products/casb/)
* [  DDoS Mitigation ](/ddos/)
* [  Argo Smart Routing ](/application-services/products/argo-smart-routing/)

 Products Used 

WAF Argo Smart Routing DDoS Protection Browser Isolation 

 Details 

 Industry 

Media & Entertainment 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Once & Cloudflare | Customer Story","description":"Realtime data specialists Once partner with Cloudflare to secure audience interactions during large-scale international broadcast events like Eurovision.","url":"https://www.cloudflare.com/case-studies/once/","inLanguage":"en"}
```
