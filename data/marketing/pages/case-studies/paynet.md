---
title: PayNet Case Study
description: Payments Network Malaysia Sdn Bhd (PayNet) is the national payments network and shared central infrastructure for Malaysia's financial markets.
image: https://www.cloudflare.com/preview.png
---

# PayNet

> #### "  Cloudflare helps us see what types of attacks we're getting, take proactive measures to prevent them, and share relevant data with all internal team members. " 

## **PayNet transitions to a cloud-based computing model to further its mission of making electronic payments more accessible in Malaysia**

Payments Network Malaysia Sdn Bhd (PayNet) is the operator of Malaysia's shared payments system and shared financial market infrastructures created following the merger of MyClear and MEPS on 1 Aug 2017\. In line with the developmental objective of providing inclusive and efficient payments to Malaysia's financial ecosystem, PayNet's shareholders do not receive dividends, and surplus profits are instead reinvested to ensure that the nation's financial market infrastructures and payment ecosystems are resilient, competitive, and accessible to all. Services provided span almost every payment type, from large value to retail payments and from securities settlement to ATMs to bills pay, to ACH. Bank Negara Malaysia (BNM), the country's central bank, is PayNet's single largest shareholder, with 11 other financial institutions in the country holding equal shares.

PayNet operates the MyDebit domestic payment card program, with over 47 million cards in circulation. Malaysian consumers can use the MyDebit card to access automated teller machines (ATMs) and make purchases both online and at brick-and-mortar merchants.

Additionally, PayNet is the developer and operator of the DuitNow service which comprising of DuitNow QR is which is Malaysia's interoperable standard for QR codes and DuitNow Transfer where consumers can instantly transfer funds using their mobile number, national ID card number, or other proxy options. 

### **Challenge: Optimize security while transitioning from mainframes to a modern cloud-based data environment**

The Malaysian financial services industry still depends on legacy technologies, such as mainframe systems. For this reason, PayNet traditionally built private connections between itself and financial institutions -- meaning that the connections were not through the open internet. 

However, as cloud computing became the technology of choice over the past several years, electronic payment providers emerged. PayNet had to transition to internet-based connections, using a technology called Application Programming Interfaces (APIs), to continue serving banks and furthering its mission to promote electronic payments in Malaysia.

This transition from private connectivity to APIs made it necessary for PayNet to enhance its security using a methodology called Zero Trust, which would allow PayNet to continue to provide secure and trusted transactions. PayNet also needed to ensure that their API connections could handle spikes in usage, and they needed to protect them from distributed denial of service (DDoS) cyberattacks. In a DDoS attack, cybercriminals flood a website or application with "junk" traffic from multiple sources, slowing the site or app, or even bringing it down completely.

Prior to deploying Cloudflare, PayNet used an older web application firewall (WAF) to block cyberattacks, with DDoS protection provided by their internet service provider. However, the WAF was complex and time-consuming to configure and manage, and their DDoS protection was insufficient to meet PayNet's needs. Additionally, neither service scaled well to handle traffic spikes, nor did either service support a modern Zero Trust security model. 

PayNet needed easy-to-use, scalable, cloud-based solutions that supported a Zero Trust security model. PayNet also wanted greater visibility into their web traffic, so that they could monitor where security threats were coming from. After evaluating both Cloudflare and a competing vendor, PayNet chose Cloudflare because of its ease of use, pace of innovation, transparency, customer-centric approach, and competitive pricing.

### **PayNet ensures availability of services with Cloudflare Magic Transit and the Cloudflare WAF**

Cloudflare Magic Transit is a cloud-based security tool that uses the Cloudflare global network to protect against DDoS attacks while also accelerating network traffic. Using Magic Transit, PayNet now mitigates all DDoS attacks within minutes, ensuring that its services are always available. Magic Transit is also more scalable and easier to use than PayNet's previous DDoS solution, and it provides PayNet with valuable data on its web traffic.

"Cloudflare Magic Transit's scale, dashboard analytics, and dynamic capabilities are highly valuable," says Preman Padmanabhan, senior principal engineer. "We get immediate attack alerts, and we can see where the attacks are coming from."

Magic Transit includes a feature called Cloudflare Network Firewall, which allows PayNet to easily block web traffic coming from specific sources or using specific protocols. Previously, PayNet had to contact its ISP and request that they perform the block. Not having to contact Cloudflare to perform this type of task is easier and much faster for PayNet.

Using the Cloudflare WAF analytics, PayNet can rapidly pinpoint the root causes of problems and resolve them quickly, ensuring that its services remain fast and secure. Additionally, PayNet's engineering team can focus on internal projects instead of getting bogged down with security issues.

By applying these modernizing tools, PayNet was able to integrate an end-to-end solution for non-sovereign operations and develop a modern sovereign operations platform. Further, this new infrastructure enables PayNet staff members to work together like an integrated system, with everyone striving to reach a common goal. There is a synergy of ideas, actions, and solutions when people come together to improve productivity and efficiency.

"We have a small security team, and our engineers need to spend their time on product development," explains Kenny Tse, Head of Information Technology Security. "Cloudflare has the security expertise to maintain firewall rules that are much more current and comprehensive than what we could have come up with."

PayNet uses Cloudflare's analytics to gain actionable insights into its web traffic and security posture. PayNet uses these insights to both optimize security and ensure that its services scale rapidly to accommodate increasing demand. PayNet's application developers use this data to perform capacity planning and optimize application response times.

"Cloudflare helps us see what types of attacks we're getting, take proactive measures to prevent them, and share relevant data with all internal team members," Gomez says. 

PayNet also uses Cloudflare's analytics to simplify compliance reporting and demonstrate to its customers that it adheres to the highest levels of security. 

"We use Cloudflare's analytics and reporting to prove that our security isn't just sufficient, but significantly better than what we had previously, helping us remain compliant," Padmanabhan explains.

### **PayNet uses mTLS for an upcoming product that will greatly expand electronic payments in Malaysia**

Mutual TLS (mTLS) ensures that traffic between a client and server is both secure and trusted in both directions. PayNet deployed mTLS in preparation for a new online e-commerce service with Malaysia's Debit Card Scheme, which began rolling out in July 2021\. In Malaysia, the ability to make online payments is largely restricted to consumers who have online bank accounts. PayNet's new service will make it easier for more Malaysians to purchase goods and services digitally, even if they don't have an online banking account.

"A Zero Trust implementation is a marathon, not a sprint," Tse points out. "By helping us with user authentication on our new service, Cloudflare gets us one step closer to our ultimate goal of a full-on Zero Trust architecture."

The PayNet team also appreciates the ease of having an integrated set of security solutions provided by one single vendor.

These added services and [Zero Trust solutions](https://www.cloudflare.com/sase/use-cases/) further secure PayNet's infrastructure, which provides an added layer of security for their customers who rely on PayNet every day. 

![PayNet logo](https://images.ctfassets.net/slt3lc6tev37/1DRSSzXgWdXwgdvCLbzBSu/bf737fc8a183b2a57e5db260511b1c4b/paynet_logo.png) 

Cloudflare solutions enable PayNet to easily and securely adopt a secure, resilient modern cloud computing model

 Cloudflare Products 
* [  Access ](/sase/products/access/)
* [  Magic Transit ](/network-services/products/magic-transit/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)
* [  DNS ](/application-services/products/dns/)

 Products Used 

Access DNS Magic Transit WAF Zero Trust 

 Details 

 Industry 

Financial Services 

 Region 

Asia-Pacific 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"PayNet Case Study","description":"Payments Network Malaysia Sdn Bhd (PayNet) is the national payments network and shared central infrastructure for Malaysia's financial markets.","url":"https://www.cloudflare.com/case-studies/paynet/","inLanguage":"en"}
```
