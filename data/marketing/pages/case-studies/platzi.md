---
title: Platzi &amp; Cloudflare | Customer Story
description: Platzi accelerates development while protecting apps and resources with Cloudflare
image: https://www.cloudflare.com/preview.png
---

# Platzi

> #### "  With the powerful Cloudflare WARP client and robust Cloudflare Access authentication, developers can instantly and securely connect to mission-critical resources from anywhere, significantly streamlining their workflow. " 

## **Platzi simplifies developer access, accelerates workflows, and stops attacks with Cloudflare**

Platzi is Latin America's school of technology, offering a range of online courses that currently support more than 5 million students and more than 3,000 companies. Individuals use Platzi to advance their careers, gaining marketable tech skills and certifications. Meanwhile, companies use Platzi to efficiently train employees on a range of subjects, from cyber security and AI to leadership and English.

Providing access to rich educational resources can have a far-reaching impact. "By empowering individuals to pursue new careers in technology, Platzi is helping to boost the economy of the entire region," says Alejandro Parra, engineering manager at Platzi.

### **Speeding time to market while maintaining security**

Platzi developers are continuously working to create engaging experiences for students and corporate customers while providing useful apps for internal employees. To deliver new features and content rapidly, developers need ways to streamline essential tasks, such as deploying databases, migrating microservices, connecting with new endpoints, and more. They also need fast access to resources, even when working remotely. 

At the same time, security is a high priority. The Platzi IT team must defend against DDoS attacks and malicious bots that can hinder user experiences. In addition, the team must maintain granular access control over internal IT resources, providing access to specific applications and endpoints according to user roles.

### **Accelerating developer projects**

Adopting Cloudflare developer services — including Cloudflare Workers and Cloudflare Pages — has helped Platzi developers speed workflows. For example, when developers needed to route site traffic according to a user's country code, they were able to write a Workers script in just an hour. In the past, it would have taken up to two weeks. Workers ultimately helps them deliver new courses to market 99% faster. 

Platzi developers use Workers for Platforms — which extends the capabilities of Workers — to build all of the company's microservices. The team constructed a custom gateway to help move those microservices easily. "By using Workers for Platforms with our in-house gateway, we can dynamically move microservices from one cloud provider to another," says Edwar Barón, cloud architect at Platzi. "That gives us much greater scalability and flexibility for change."

Developers can draw from additional Cloudflare services to deploy infrastructure rapidly. "The Cloudflare developer platform has everything our developers need," says Parra. "They can quickly and easily spin up a database or add object storage in a matter of minutes."

Cloudflare services help eliminate tedious — but necessary — developer tasks, such as deleting DNS records. "Some companies create one or two DNS entries per day, but we might create more than 100," says Parra. "If developers need to work on a copy of the website, they create a hash of the registered DNS. Once they've finished, they need to delete the DNS records and clean up everything. This process used to take at least an hour, with the Cloudflare API, that process is fast and seamless, taking less than 5 minutes. They can get back to innovating."

### **Simplifying secure resource access with a Zero Trust model**

Cloudflare services are also helping Platzi simplify remote access to internal resources for developers and other employees. The company replaced the existing VPN with a Zero Trust security model based on Cloudflare Access.

For users, getting started with Access is simple. "With the powerful Cloudflare WARP client and robust Cloudflare Access authentication, developers can instantly and securely connect to mission-critical resources from anywhere, significantly streamlining their workflow," says Juan José Torres, cloud engineer on the SecOps team for Platzi. 

The WARP device posture capabilities make sure that devices adhere to security policies, like the encryption of a disk drive, which is required for complying with ISO 27001 standards. "If you don't have your disk drive encrypted, you can't access our internal network," says Torres.

The Platzi IT team maintains granular control over which resources different teams can access. "Our direct sales and success teams can access the specific applications they use," says Parra. "Meanwhile, our developers can tap into the information they need on endpoints, like in our AWS instances." 

The technology transition was fast. "The ease of implementing Cloudflare Access and replacing our legacy VPN was remarkable," says Barón. "It only took three days."

### **Streamlining access management and cutting costs**

For the IT team, Cloudflare Zero Trust Network Access capabilities are easier to manage than the previous VPN solution. The team can quickly set up accounts for new hires, disable accounts for departing employees, and configure role-based access controls with least-privilege access — all with just a few clicks in the dashboard. They no longer have to take time for tasks like rotating keys or updating software.

"We have saved at least 40 hours per month by avoiding VPN management," says Parra. "In addition, we have eliminated the costs of the VPN service, which was hosted on AWS." 

### **Securing endpoint connections and increasing multi-cloud flexibility**

To help ensure secure access to cloud endpoints, Platzi uses Cloudflare Tunnel. This service creates an encrypted tunnel between the nearest Cloudflare data center and Platzi's environment in AWS. 

"We can communicate securely between a Cloudflare Worker and an AWS Lambda serverless compute service without any execution problems," says Parra. "With Cloudflare Tunnel, any company can build a hybrid, multi-cloud environment — deploying anything they want on AWS, Azure, or Cloudflare — while maintaining secure connections."

### **Optimizing and monitoring AI applications**

Platzi is tapping into Cloudflare capabilities to support the integration of AI into digital experiences. For example, Platzi enables students to generate a personalized learning path by entering goals into a prompt on Platzi's homepage. To help optimize and [monitor](https://www.cloudflare.com/learning/ai/what-is-ai-security/) the use of AI for the site, the Platzi team implemented Cloudflare AI Gateway, replacing a homegrown solution created before the Cloudflare service was released.

"We moved from our internal AI gateway to the Cloudflare AI Gateway as soon as it was available," says Parra. "AI Gateway has helped save time and alleviate stress from developers by making it easy to connect to AI endpoints and monitor usage from the dashboard. We also gained control over runaway costs with the [rate-limiting capability](https://developers.cloudflare.com/ai-gateway/configuration/rate-limiting/) and reduced errors by configuring [fallback](https://developers.cloudflare.com/ai-gateway/configuration/fallbacks/) models."

### **Stopping cyber attacks and keeping courses available**

Platzi uses multiple Cloudflare capabilities to address cyber security threats that could cause service disruptions, including the Cloudflare Web Application Firewall (WAF). "The Cloudflare WAF is our primary security tool," says Torres. "With the WAF, we can implement numerous custom web rules — and we are continuously creating and testing new ones."

The team uses a WAF rate-limiting rule to block excessive requests for videos. "If we see too many requests for course videos in a short amount of time, it might be an attempt at piracy," says Torres. "We can block those requests easily." 

The team implemented advanced rate limiting from Cloudflare to dial in more precise protection than IP-based rate limiting. "With advanced rate limiting, we can fine-tune what requests we block," says Torres. "In some Latin American countries, a single IP address might be used by 20 different people in different places. Now we can differentiate each person so we can block only the users that are making excessive requests."

Similarly, Cloudflare Bot Management enables the Platzi team to distinguish malicious bots from legitimate bot traffic. The company has eliminated the false positives that were produced by a previous bot mitigation solution.

### **Continuing the Cloudflare exploration**

Just like the Platzi students who are pursuing new ideas and topics, the Platzi team continues to explore additional Cloudflare offerings. For example, the team recently implemented Cloudflare's cache reserve capability, which provides a large, persistent data store on top of [R2 storage](https://www.cloudflare.com/developer-platform/products/r2/). "Cache reserve provides the best response for students — it helps ensure each student receives videos and other content very fast," says Parra.

Looking ahead, the Platzi team knows that they can work together with Cloudflare to deliver the most engaging experiences for students. "We are always eager to try the latest offerings, and the Cloudflare team is very responsive when we have feedback or requests," says Parra. "With Cloudflare, it is a true collaboration that ultimately benefits millions of students."

![Platzi logo](https://images.ctfassets.net/slt3lc6tev37/3xJnDZG3yw1qQ1WL2sLCKN/8f5c756dd9e327afa91243fb5a8298eb/logo-platzi.svg) 

Platzi accelerates development while protecting apps and resources with Cloudflare

 Cloudflare Products 
* [  Access ](/sase/products/access/)
* [  Bot Management ](/application-services/products/bot-management/)
* [  Workers ](https://workers.cloudflare.com/)
* [  Cloudflare AI Gateway ](/developer-platform/products/ai-gateway/)
* [  Cloudflare Pages ](/developer-platform/products/pages/)
* [  Cloudflare Tunnel ](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)
* [  Web Application Firewall (WAF) ](/application-services/products/waf/)

 Products Used 

Access Workers Bot Management Zero Trust Gateway Pages WAF 

 Details 

 Industry 

Education 

 Region 

Latin America & the Caribbean 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Platzi & Cloudflare | Customer Story","description":"Platzi accelerates development while protecting apps and resources with Cloudflare","url":"https://www.cloudflare.com/case-studies/platzi/","inLanguage":"en"}
```
