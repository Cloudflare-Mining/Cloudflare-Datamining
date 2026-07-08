---
title: Cloudflare and LendingTree
description: Cloudflare and LendingTree
image: https://www.cloudflare.com/preview.png
---

# LendingTree 

> #### "  Cloudflare Workers has been a game changer for LendingTree. We can run JavaScript asynchronously within or alongside a client session, manipulate data, and make decisions, without impacting performance or availability. No other solution offers this functionality. " 

## **Cloudflare's security, performance, and serverless solutions provide LendingTree with security at the speed of business**

LendingTree is an online marketplace that enables consumer and business borrowers to connect with multiple lenders to find optimal terms for mortgages, student loans, business loans, credit cards, deposit accounts, and insurance. LendingTree is partnered with over 400 financial institutions worldwide. Over 15 million active users use LendingTree to monitor their credit, shop for loans, and manage their financial health.

### **Challenge: Replace a very expensive security solution that blocked a lot of legitimate traffic**

When John Turner, Application Security Lead, joined the team at LendingTree, the company was experiencing multiple cost and performance issues with its security vendor. The vendor's DDoS protection was metered, which caused LendingTree to incur massive overage costs. The solution also blocked legitimate traffic.

"Their solution wasn't intelligent; it was static," Turner explains. "We had to manually specify arbitrary limits on requests per minute. Once we exceeded that number, the vendor would offload that traffic, handle it for us, and bill us for the overages."

These limitations caused significant issues whenever LendingTree launched a marketing campaign. "Whenever we ran a new TV spot or a new social media campaign, requests would spike beyond the arbitrary limit that our vendor had us specify, which meant the vendor would interpret the spike as a DDoS attack and block legitimate traffic," Turner recalls. "Not only did we lose those potential customers, but we also lost the money that we spent to get them to our site, and our vendor would bill us for the 'DDoS protection'."

Turner turned to Cloudflare because of his previous experience working with the company. "In my consulting work, I've recommended Cloudflare to clients many times. I knew that Cloudflare's products worked well and offered a good value," he says. At LendingTree, Turner decided to implement Cloudflare's performance and security suites, including Bot Management, WAF, and DDoS protection, along with Workers, Cloudflare's serverless platform.

### **Cloudflare Bot Management stops malicious bots from abusing LendingTree's APIs**

Cloudflare's DDoS mitigation is unmetered and offers 51 Tbps of mitigation capacity, so LendingTree doesn't have to worry about setting arbitrary traffic limits. LendingTree has also gotten many other security benefits from Cloudflare, including bot management.

Malicious bots that were abusing LendingTree's APIs were costing the company a lot of money, not only in terms of bandwidth costs but also opportunity cost. Due to the sophistication of the bots and the fact that they were scraping financial data, Turner believed that some of them were being deployed by competitors. LendingTree couldn't restrict the APIs completely, as its partners needed to be able to access them for current rate information. 

"Our bill for a particular API service went from $10,000 a month to $75,000 practically overnight. The next month, it rose to $150,000," Turner explains. "My team had to spend a lot of time investigating these attacks and writing custom rules in an attempt to stop them. Because the attackers were constantly adjusting their tactics, the rules we wrote would only be partially effective for only a short amount of time."

Cloudflare Bot Management gave LendingTree immediate results. "Within 48 hours of enabling Cloudflare Bot Management, attacks against a particular API endpoint dropped by 70%," Turner reports. 

Unlike the solutions LendingTree used previously, Cloudflare Bot Management doesn't impede legitimate automated traffic. "Out of hundreds of thousands of requests, we found only one instance where a legitimate request was marked as malicious," Turner says. 

Turner also received confirmation that at least one competitor had, indeed, been abusing LendingTree's API. "As soon as we stopped the API abuse, one particular competitor's rates immediately rose," he recalls. "Then, I saw a news article remarking that, suddenly, everyone except for LendingTree was quoting high mortgage rates. We strongly suspect that our competitors were scraping our API and using our own data to undercut us."

### **Cloudflare Workers enables LendingTree to conduct A/B testing and route traffic at the network edge**

Turner says he utilizes the Cloudflare Workers serverless platform to solve coding problems quickly at the network edge. "Workers is my Swiss Army Knife. I have multiple use cases for it," he explains. "It lets me easily resolve problems that can't be quickly patched by rewriting code." These use cases include injecting cross-origin resource sharing headers, rewriting parameters, inspecting packets, performing A/B testing, and examining and routing incoming TLS traffic.

"Workers examines incoming requests to confirm that they're TLS 1.0, then routes these requests," Turner explains. "Thanks to Workers, I was able to identify that a lot of this traffic was coming from our own servers, which were communicating over the Internet even though they sit next to each other in the same data center. I couldn't have identified this issue without Workers. Being able to execute code on the edge and route traffic accordingly saves us money and time."

Recently, Turner used Workers to inject cross-origin resource sharing (CORS) headers and solve a communications problem between LendingTree's systems and one of its partner sites, operated by AOL. "We were able to use Workers to identify the issue and restore service within minutes, with zero downtime and without any code changes," Turner recalls. "Without Workers, we would have had to refactor the code and change servers, which would have taken weeks."

Workers has changed the way LendingTree conducts A/B testing. Prior to Workers, LendingTree had to perform all A/B testing on their side, using NGINX proxies. "We had an entire A/B testing system that was written internally," Turner says. Now, LendingTree is beginning to use Cloudflare Workers to conduct A/B testing at the network edge, resulting in better performance with less complexity.

"Cloudflare Workers has been a game changer for LendingTree. We can run JavaScript asynchronously within or alongside a client session, manipulate data, and make decisions, without impacting performance or availability," Turner says. "No other solution offers this functionality."

### **Additional Cloudflare security and performance tools provide more protection, optimization, and cost savings**

LendingTree has integrated a number of Cloudflare security and performance tools across the organization.

For example, LendingTree further hardened their protection against malicious bots by combining Bot Management with Cloudflare Rate Limiting and custom WAF rules. "In the past four to five months, Cloudflare Rate Limiting has saved us approximately $250,000 by stopping abuse of our API endpoints," Turner says.

The Cloudflare WAF is another critical component of LendingTree's security defenses. "The Cloudflare WAF is priced very well for all it offers, but more importantly, it's easy to use, and it works very well," Turner says. "We no longer need dedicated teams to manage WAF rules or stay on top of threat intelligence feeds. The Cloudflare WAF takes care of everything for us."

When LendingTree noticed that conversions were down, Google suggested that the company improve its page load times. Turner used Cloudflare's performance optimization tools to make some changes, then asked Google to check LendingTree's page load times again. Google's employees were astounded. "Just by leveraging the built-in Cloudflare performance features, we improved page load times up to 70%," Turner recalls. "Google's employees said they'd never seen site performance increase so quickly just by someone making a few changes."

LendingTree uses [Cloudflare TLS certificates](https://www.cloudflare.com/application-services/products/ssl/) to save money and prevent outages due to expired certificates. "We have thousands of different properties. At that scale, it was only a matter of time before we'd miss renewing a certificate," Turner explains. "Using Cloudflare's TLS certificates, which automatically renew, we save about $50,000 a year, both in administrative costs and lost revenue from outages due to expired certificates."

Turner says that the savings LendingTree reaps from Cloudflare more than pays for the cost of Cloudflare's services. "By enabling us to deliver our products fast, securely, and reliably, Cloudflare provides us with security at the speed of business," he says.

![LendingTree  logo](https://images.ctfassets.net/slt3lc6tev37/pkscEDGNH7a7H1kOB4K1m/c538b968dd198b14ca32335a0c301b40/logo_lending-tree_color_32px-wrapper.svg) 

Cloudflare helped LendingTree save over $250,000 in just 5 months and reduced Bot attacks by over 70%

 Cloudflare Products 
* [  Bot Management ](/application-services/products/bot-management/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  Rate Limiting ](/application-services/products/rate-limiting/)
* [  Workers ](https://workers.cloudflare.com/)

 Products Used 

Rate Limiting Workers Bot Management WAF 

 Details 

 Industry 

Financial Services 

 Region 

North America 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Cloudflare and LendingTree","description":"Cloudflare and LendingTree","url":"https://www.cloudflare.com/case-studies/lendingtree/","inLanguage":"en"}
```
