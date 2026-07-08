---
title: EQS Group &amp; Cloudflare | Customer Story
description: EQS Group accelerates global growth and secures sensitive compliance workflows with a self-managed Zero Trust architecture powered by Cloudflare.
image: https://www.cloudflare.com/preview.png
---

# EQS Group

> #### "  Cloudflare fits the way we operate. As highly proactive, motivated, and engineering-driven companies with an appetite for discovering new solutions, we are very like-minded. There is a strong chemistry between us. " 

## EQS Group replaces its VPN and modernizes access and threat defense with Cloudflare

[EQS Group](https://www.eqs.com/en-us/) is a German-based regulatory technology (or 'RegTech') company that develops cloud software for corporate compliance, data privacy, sustainability, and investor relations. Founded in 2000, EQS operates with a globally distributed team of over 700 employees and contractors across Europe, the UK, the US, and Asia.

The company provides SaaS solutions to over 14,000 organizations, including all the DAX40 — top-performing companies on the Frankfurt Stock Exchange, like Airbus, Allianz, Siemens, and Volkswagen. At the heart of their compliance offering are two key products: Compliance COCKPIT and EQS Integrity Line. Together, they deliver scalable, secure platforms for managing anti-bribery, anti-corruption, and whistleblowing workflows — helping customers meet regulatory requirements and build trust with stakeholders.

### Safely supporting expansion and innovation in the global investor relations and corporate compliance marketplace

[In 2024](https://www.thomabravo.com/press-releases/thoma-bravo-announces-closing-of-eqs-acquisition), EQS Group was acquired by private equity firm [Thomas Bravo](https://www.thomabravo.com/), beginning a new chapter of ambitious growth, including expanding into new geographies and technology categories while embracing hybrid work. This rapid growth exposed the limitations of their traditional IT and security architecture, including the inefficiencies and risks of point solutions like their legacy VPN.

"We are expanding rapidly, especially in the US. Facing that growth, our biggest challenge was remaining agile while limited by outdated technology," explains Marco Ermini, Chief Information Security Officer at EQS Group. "It was time to modernize not just our technology, but the way the organization works — an impossible task with our old managed-services solution."

To that end, EQS chose to adopt services from Cloudflare's [secure access service edge (SASE) platform](https://www.cloudflare.com/sase/) to address two priority initiatives:

* Replacing its legacy VPN with a modern Zero Trust approach to streamline scaling and onboarding
* Modernizing threat protection across email inboxes and the Internet

"The Cloudflare platform stood out for its simplicity and functionality," explains Ermini. "Every other solution we tested added complexity, requiring additional servers or a VM — exactly what we were moving away from. Only Cloudflare worked out of the box. There were no caveats, nothing else we had to deploy." 

### Replacing a VPN with Zero Trust Network Access (ZTNA)

One of EQS Group's top modernization projects was replacing its traditional VPN, which required outsourcing troubleshooting support to external partners and frustrated employees with unreliable connectivity.

"Using VPNs or deploying a dedicated network for every workspace wasn't feasible," says Ermini. "We wanted to sever our reliance on third-party services."

Instead, EQS adopted [Cloudflare Access](https://www.cloudflare.com/sase/products/access/), a [Zero Trust Network Access](https://www.cloudflare.com/learning/access-management/what-is-ztna/) (ZTNA) service, to secure how users connect to internal applications. Specifically, Cloudflare verifies access for every request to specific apps based on identity and device posture in line with [Zero Trust](https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/) best practices. This cloud-native approach proved much simpler to manage with better performance. Altogether, EQS was able to start implementing a VPN replacement within a few days, and ultimately replace its VPN for hundreds of users in circa 10 months.

"Cloudflare gives us a more agile method to connect our people to resources wherever they are — onsite, at home, a hotel in India, or at a cafe in Germany," says Ermini. "Now, our IT teams manage Cloudflare internally. We don't need a regular meeting to troubleshoot issues or chase support to keep everything running. Plus, our salespeople, development teams, and executives are happy because everything works — every time." 

Plus, this Zero Trust approach helped EQS maintain high security standards as a trusted compliance provider. Centralized access controls, automated policy creation via Terraform, and detailed logging across requests and policy violations have all improved EQS's security posture and management efficiency.

### ZTNA in action: Onboarding newly acquired teams in hours, not weeks

EQS underscored the agility of their new Zero Trust approach when they acquired the U.S.-based compliance and ethics business division of [OneTrust](https://www.onetrust.com/) in [late 2024](https://www.thomabravo.com/press-releases/eqs-group-acquires-the-ethics-and-compliance-business-division-from-onetrust). 

Previously, EQS would spend weeks deploying, configuring, and troubleshooting VPN software to onboard newly acquired teams. Now, the company ships corporate devices with Cloudflare's device client pre-installed and assigns users to groups with specific identity-based access permissions to apps. In the case of OneTrust, workers were ready to work within hours.

"Onboarding new teams is easy — with Cloudflare, we don't need firewalls, VPN appliances, or complex provisioning," says Ermini. "Our new users just receive the laptops, log in with their Microsoft Entra ID, and they get started with zero friction."

Cloudflare's compatibility across device types and operating systems also helps when onboarding users and supporting a growing hybrid workforce.

"Over 50% of our estate uses Mac, so multi-OS support is very important to us," says Ermini. "Our executive team loves the fact that they can securely access information through Cloudflare on their iPads."

Furthermore, when contractors and other third parties on unmanaged devices need to reach specific apps, EQS often isolates their access with [Cloudflare Browser Isolation](https://www.cloudflare.com/sase/products/browser-isolation/). This means running all browser code on Cloudflare's network. In this way, EQS is able to control how users interact with data within those apps (e.g. restrict copy/paste, uploads/downloads, keyboard inputs, and printing), reducing risks of data leaks. 

### Extending security across web browsing and email inboxes

After securing access to internal apps, EQS prioritized modernizing its threat defense and extending Cloudflare's protections to email and web security. 

A key catalyst was EQS's migration from an on-prem Microsoft Exchange email server to the cloud. With this migration, EQS wanted to augment Microsoft's built-in filters with cloud-native detections against advanced phishing attacks and business email compromise. To that end, EQS deployed [Cloudflare Email Security](https://www.cloudflare.com/sase/products/email-security/) to protect their email inboxes.

"Area 1 is much more clever than the old provider or even Exchange at detecting threats," says Ermini. "It took us 10 minutes to set up, and within the first hour, it detected three phishing attempts none of the other email security tools even noticed." 

To protect Internet browsing, EQS applies Cloudflare's [DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) to block employees from reaching harmful and inappropriate domains and IPs. This is a common, lightweight method to strengthen defenses against malware, ransomware, phishing, and other cyber threats.

### Building a Future-Proof Security Platform

Going forward, EQS is interested in modernizing its data protection approach with other SASE services, including piloting Cloudflare's [Cloud Access Security Broker](https://www.cloudflare.com/sase/products/casb/) (CASB) and [Data Loss Prevention (DLP)](https://www.cloudflare.com/sase/products/dlp/). They aspire to continue extending Cloudflare's visibility and controls across more web, SaaS, and private environments and then send that telemetry to their Security Information and Event Management (SIEM) platform for a holistic defense-in-depth approach. 

Looking ahead, EQS sees Cloudflare as a strategic partner, supporting secure expansion into new markets, streamlining future acquisitions, and reinforcing their role as a global leader in trusted compliance services.

"Cloudflare fits the way we operate," says Ermini. "As highly proactive, motivated, and engineering-driven companies with an appetite for discovering new solutions, we are very like-minded. There is a strong chemistry between us."

![EQS Group logo](https://images.ctfassets.net/slt3lc6tev37/2wTdilp9fenkO3OPdlnwPm/7936b6a3fa3546d174dd57d660c38863/EQS_Group_vertical.png) 

EQS Group accelerates global growth and secures sensitive compliance workflows with a self-managed Zero Trust architecture powered by Cloudflare.

 Cloudflare Products 
* [  Zero Trust ](/sase/)
* [  Access ](/sase/products/access/)
* [  Email Security ](/sase/products/email-security/)
* [  Remote Browser Isolation (RBI) ](https://www.cloudflare.com/sase/products/browser-isolation/)

 Products Used 

Zero Trust Access Browser Isolation Email Security 

 Details 

 Industry 

High Technology 

 Region 

Europe, Middle East & Africa 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"EQS Group & Cloudflare | Customer Story","description":"EQS Group accelerates global growth and secures sensitive compliance workflows with a self-managed Zero Trust architecture powered by Cloudflare.","url":"https://www.cloudflare.com/case-studies/eqs-group/","inLanguage":"en"}
```
