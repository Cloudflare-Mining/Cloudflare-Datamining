---
title: Securing Cloudflare with Cloudflare One
description: Cloudflare protects our growing hybrid workforce with our own Security Services Edge (SSE) / Zero Trust platform
image: https://www.cloudflare.com/preview.png
---

# Securing Cloudflare with Cloudflare One

> #### "  Securing Cloudflare with our own services is the most effective way not only to protect our business, but also to innovate for our customers. Our commitment to protecting Cloudflare with Cloudflare helps our security team and services stay ahead of the curve as our organization continues to grow in ambition and complexity. " 

## **Securing a growing hybrid workforce**

Since our founding in 2010, Cloudflare has prioritized using our own services to solve our internal IT and security challenges. This approach helps us test and improve capabilities before shipping them to customers and has been foundational in how Cloudflare has secured our own workforce.

As Cloudflare's attack surfaces grow with the addition of more employees, customers, and technology, we have an obligation to further strengthen our security posture and equip our IT and security teams with strong visibility and control. In response, we've built and adopted services from [Cloudflare One](https://www.cloudflare.com/sase/), our [SASE](https://www.cloudflare.com/learning/access-management/what-is-sase/) and [SSE](https://www.cloudflare.com/learning/access-management/security-service-edge-sse/) platform, to secure access to applications, [defend against cyber threats](https://www.cloudflare.com/cybersecurity/), and protect sensitive data.

Cloudflare spans more than 3,500 people in dozens of offices and remote locations. This case study explores how Cloudflare uses our own Cloudflare One services to keep users safe and productive across the organization.

"Securing Cloudflare with our own services is the most effective way not only to protect our business, but also to innovate for our customers," says Grant Bourzikas, Chief Security Officer. "Our commitment to protecting Cloudflare with Cloudflare helps our security team and services stay ahead of the curve as our organization continues to grow in ambition and complexity."

### **Securing access to applications**

Cloudflare follows [Zero Trust best practices](https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/) to secure access to all self-hosted applications for all users, whether remote or in-office. Specifically, we use our own [Zero Trust Network Access ](https://www.cloudflare.com/learning/access-management/what-is-ztna/)(ZTNA) service (Cloudflare Access) to verify identity, enforce [multi-factor authentication (MFA)](https://www.cloudflare.com/learning/access-management/what-is-multi-factor-authentication/) with hardware keys, and [evaluate device posture](https://www.cloudflare.com/cybersecurity-risk-management/) for every request. This posture evolved over several years and has enabled Cloudflare to better protect our growing workforce more effectively and advise customers based on our own experiences.

### _Our ZTNA origin story: Replacing our VPN_

Cloudflare's interest in Zero Trust began with a practical problem that our engineers solved for themselves: streamlining access to developer environments without the hassle of a Virtual Private Network (VPN).

In 2015, on the rare occasions when employees worked remotely, they were forced to backhaul traffic through an [on-prem VPN appliance](https://www.cloudflare.com/learning/access-management/what-is-a-vpn/) to reach internally-hosted applications. The VPN's latency and unresponsiveness particularly frustrated on-call engineers, who had to log in at odd hours to triage time-sensitive problems. 

To solve their own pain point, our engineers built [Cloudflare Access](https://www.cloudflare.com/sase/products/access/), which started as a reverse proxy service that routed access requests through the closest Cloudflare data center, instead of backhauling through VPN hardware. For each request, Access verified users based on our [identity provider](https://www.cloudflare.com/learning/access-management/what-is-an-identity-provider/) in a browser window, freeing them from the inconvenience and risks of remembering VPN client login credentials. 

The smooth authentication experience drove organic adoption of Access for more apps and further reduced reliance on the VPN. Engineers started by protecting Grafana with this new authentication workflow, followed by web apps like our Atlassian suite and eventually even non-HTTP resources. 

The sudden transition to remote work during the pandemic only accelerated this migration of apps behind Access. By summer 2020, Cloudflare's IT teams had achieved an \~80% reduction in the time spent servicing VPN-related tickets and a \~70% reduction in ticket volume compared to the prior year, resulting in time savings estimated at $100K annually.

In early 2021, Cloudflare's security team mandated that all internally-hosted applications move behind Access, helping us reduce our [attack surface](https://www.cloudflare.com/learning/security/what-is-an-attack-surface/) with least privilege, default-deny and identity-based controls. Later that year, Cloudflare had deprecated its VPN entirely, and we have translated our experiences into [prescriptive guidance for other organizations](https://blog.cloudflare.com/how-to-augment-or-replace-your-vpn/).

Onboarding and offboarding employees has also gotten simpler. New employees no longer have to learn to set up a VPN, saving upwards of 300 hours annually for the hundreds of new hires in 2020\. Instead, configuring application access is now largely automated via Cloudflare's integration with the infrastructure-as-code tool [Terraform](https://developers.cloudflare.com/terraform/). 

 "By replacing our VPN and adopting Zero Trust internally, our colleagues now have a faster, safer, and simpler way to connect to apps and stay productive, says Derek Pitts, Director of Security. "With our ZTNA service, Cloudflare does not have to make any trade-offs between improving security and creating an amazing user experience."

### _Hard key MFA and thwarting a targeted phishing attack_

Since rolling out ZTNA internally, Cloudflare has embraced MFA. The journey began by allowing MFA with soft keys like Time-Based One-Time passwords (TOTPs) delivered over text, email, and apps. Starting in 2018, Cloudflare's security team began distributing hard keys and allowing them as an optional form of authentication across specific applications. 

The [biggest change in this MFA approach](https://blog.cloudflare.com/how-cloudflare-implemented-fido2-and-zero-trust/) began in February 2021, when [social engineering attacks](https://www.cloudflare.com/learning/security/threats/social-engineering-attack/) against employees – including calls impersonating Cloudflare IT – became more frequent. In response, Cloudflare began requiring [FIDO2-compliant](https://www.yubico.com/resources/glossary/fido-2/) hard keys authentication for all apps and users – a more phishing-resistant approach. Whether on corporate laptops or personal mobile devices, all employees must now tap their [FIPS-validated](https://csrc.nist.gov/glossary/term/fips%5Fvalidated%5Fcryptography#:~:text=Definitions%3A,%2D3%20%28as%20amended%29.) security key from YubiKey to reach an application, and all other forms of MFA have been disabled. This method also takes advantage of stronger cryptography via the [WebAuthn](https://blog.cloudflare.com/cloudflare-now-supports-security-keys-with-web-authentication-webauthn/) standard protocol.

This hard key approach was put to the test in August 2022, when Cloudflare thwarted a [targeted phishing attack](https://blog.cloudflare.com/2022-07-sms-phishing-attacks/) that successfully breached other large enterprises. Seventy-six Cloudflare employees received legitimate-looking texts which led to a fake Okta login page. The threat actors entered any harvested credentials into the identity provider's actual login site in real-time to prompt a TOTP code back to the user. For organizations that relied on TOTP codes, once an employee entered that TOTP into the fake login page, the threat actors would initiate a phishing payload to control the employee's machine remotely. 

Even though a few Cloudflare employees entered their credentials, Cloudflare's approach prevented the attackers from taking over any machines. After identifying the attack, Cloudflare took several further steps to neutralize risk:

* Blocked the phishing domain with our own [secure web gateway](https://www.cloudflare.com/learning/access-management/what-is-a-secure-web-gateway/) (SWG)
* Isolated access to all newly registered [domains](https://www.cloudflare.com/products/registrar/) with our [remote browser isolation](https://www.cloudflare.com/learning/access-management/what-is-browser-isolation/) (RBI) service
* Collaborated with industry partners to shut down the attacker's infrastructure
* Killed active sessions via ZTNA and reset compromised credentials
* Scanned for identities and devices with unverified two factor authentication per our activity logs
* Blocked IPs used by threat actor from accessing any Cloudflare service

Altogether, Cloudflare's multiple layers of security – with strong MFA as the first line of defense – thwarted this sophisticated attack. 

_**To learn more about this chapter in the story, read our [blog post](https://blog.cloudflare.com/2022-07-sms-phishing-attacks/) and [solution brief](http://cfl.re/targeted-SMS-phishing-attack-case-study) on the incident.**_

### _Extending device posture checks_

Cloudflare has a strong focus on extending device posture checks across users and apps, using context from both first- and third-party software.

Today, Cloudflare's [device client](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/) forward proxies traffic via encrypted outbound connections and is rolled out [via our mobile device manager](https://www.cloudflare.com/partners/mdm/) to all corporate-issued laptops. Employees can also use personal mobile devices that meet certain security criteria, including enrolling in our endpoint management. The device client is now required to access some critical internal resources for corporate laptops and will soon be required for access from personal mobile devices. 

Cloudflare also runs Crowdstrike's Falcon software for endpoint protection across all corporate devices and builds conditional access policies that incorporate Crowdstrike telemetry. Specifically, access is only granted to resources if Crowdstrike's Zero Trust Assessment (ZTA) score – a number that represents the real-time health of a device – is above a minimum threshold. This ZTNA integration is just one of several facets of [ongoing collaboration ](https://blog.cloudflare.com/cloudflare-crowdstrike-partnership/)between Cloudflare and Crowdstrike. 

Altogether, Cloudflare's security has gained detailed logging across every access request to every resource (even [SSH command logging](https://blog.cloudflare.com/ssh-command-logging/)). This widespread visibility across identities and devices helps us investigate incidents with greater agility.

### **Defending against cyber threats**

We also deploy Cloudflare One services internally to defend against cyber threats. Examples include using our SWG and RBI to secure Internet browsing and using our [email security service](https://www.cloudflare.com/sase/use-cases/email-security-services) to protect inboxes from phishing attacks.

"Cloudflare One's services protect us throughout the entire attack lifecycle by reducing our attack surface, mitigating Internet-based threats, restricting lateral movement, and preventing data or financial theft," says Bourzikas. "Layering our web and email security over the past few years has helped us achieve consistent protections and visibility across our growing hybrid workforce."

### _Protecting Internet browsing for remote users and offices_

Cloudflare began using our own SWG (also known as Gateway) when faced with a similar challenge as our customers: securing a workforce from a rise in online threats after shifting to remote work during the pandemic. 

Our first priority was rolling out DNS filtering to block users from reaching harmful or unwanted Internet domains based on security and content categories, which was achieved in the following phases within a year of the shift to remote work:

* **DNS Filtering for all office locations.** Setup took just a few days and only required pointing DNS traffic from office routers to our network. This location-based filtering protected the handful of users who still performed business-critical functions on-site, helped our administrators fine tune policy configurations, and are still in place today.
* **Deploying Cloudflare's device client.** Forward proxying traffic via the device client provides the foundation for user- and device-specific security controls and visibility, including encrypting every outbound connection to the Internet.
* **DNS filtering for all remote users.** By early 2021, Cloudflare had set up consistent DNS filtering policies and Internet experiences across remote and office users.

As Cloudflare has settled into more routine hybrid work, our security teams have benefited from additional controls and visibility for forward-proxied Internet traffic, including:

* **Granular HTTP controls**\- Our security teams [inspect HTTPS traffic](https://www.cloudflare.com/learning/security/what-is-https-inspection/) to block access to specific websites identified as malicious by our security team, conduct [antivirus scanning](https://developers.cloudflare.com/cloudflare-one/policies/gateway/http-policies/antivirus-scanning/), and apply identity-aware browsing policies.
* **Selectively isolating Internet browsing**\- In isolated browsing sessions, all web code is run on Cloudflare's network far from local devices, insulating users from any untrusted and malicious content. Today, social media, news outlets, personal email, and other potentially risky Internet categories are isolated. Newly seen domains, for example, fall into that last category, and Cloudflare excels in identifying them given the high volume of DNS queries we resolve (2B+ queries per day, on average).
* **Geography-based logging**\- Seeing where outbound requests originate helps our security teams understand the geographic distribution of our workforce, including our presence in high-risk areas.

"Today, Cloudflare has user- and device-specific visibility across all our employees, which helps us evaluate our risk more comprehensively," says Derek Pitts, Director of Security. "As our risk profile evolves, our security teams calibrate our Internet browsing controls to ensure that threats are mitigated with minimal impact on user productivity."

_**To learn more about this chapter in the story, read our [blog post](https://blog.cloudflare.com/how-cloudflare-security-does-zero-trust/).**_

### _Protecting inboxes with cloud email security_

In early 2020, Cloudflare experienced a surge in phishing attempts. Our email provider (Google Workspace) was strong in spam filtering for its native web application, but struggled with advanced threats, such as [business email compromise](https://www.cloudflare.com/learning/email-security/business-email-compromise-bec/) (BEC). and other methods of accessing email like an iOS mobile app. Plus, as phishing volume increased, our IT teams spent too much time on manual investigations – roughly 15 to 30 minutes for simple attacks, and even longer for more sophisticated ones.

To address this issue, Cloudflare implemented cloud email security – at that time a third-party vendor – alongside Google Workspace. Within 30 days, we blocked 90,000 total attacks, leading to a significant and prolonged drop in phishing emails. Plus, the low false positive rate reduced the time spent on investigations, and security teams benefited from a wider array of insights, including the most-targeted employees.

"In fact, the technology was so effective at launch, that our CEO reached out to our Chief Security Officer to inquire if our email security was broken," [wrote](https://blog.cloudflare.com/why-we-are-acquiring-area-1/) John Graham-Cumming, Cloudflare's Chief Technology Officer, "Our CEO hadn't seen any phishing attempts reported by our employees for many weeks, a rare occurrence. It turns out our employees weren't reporting any phishing attempts, because the technology was catching all phishing attempts before they reached our employee's inboxes."

In light of this positive experience, [Cloudflare acquired Area 1](https://blog.cloudflare.com/why-we-are-acquiring-area-1/) in early 2022 and integrated it with Cloudflare One, enabling our customers and ourselves to take a more proactive security posture across multiple channels. 

For example, [email link isolation](https://blog.cloudflare.com/safe-email-links/) uses RBI and email security functionality to open potentially suspicious links in an isolated browser. This neutralizes malicious code, and prevents users from taking risky actions on the webpage via tactics like restricting keyboard inputs and copy-paste. Among other applications, Cloudflare uses this functionality to stymie deferred phishing attacks that evade typical detections, helping keep our security teams safe while investigating phishing incidents.

"Cloudflare's email security catches phishing attempts before they reach our employees' inboxes," says Derek Pitts, Director of Security. "Email continues to be one of the most popular attack vectors, and it gives me peace of mind knowing our service is so effective and straightforward for our staff to manage."

### **Protecting sensitive data**

Limiting who can access what apps with Zero Trust policies and defending against phishing and ransomware threats helps Cloudflare prevent [data exfiltration](https://www.cloudflare.com/learning/security/what-is-data-exfiltration/). We are further mitigating the risks of data leaks with services like our [cloud access security broker](https://www.cloudflare.com/learning/access-management/what-is-a-casb/?cf%5Ftarget%5Fid=62BEC593CF1D122C32D4721FB8958B1C) (CASB) and [data loss prevention](https://www.cloudflare.com/learning/access-management/what-is-dlp/?cf%5Ftarget%5Fid=5986994BF23D5FCE37D11A1A3F080015) (DLP) to detect sensitive data. 

* **Managing data exposure risks in SaaS apps**. This includes scanning our SaaS suites via API (like Google Workspace, GitHub, and Salesforce) for sensitive data and misconfigurations that risk leaks, and then acting on prescriptive guidance to remediate via SWG policies
* **Detecting and controlling movement of sensitive data**. This includes proprietary and regulated classes of data like credentials and secrets, financials, and health information.

_**To learn more about Cloudflare One's approach to data protection, read our [blog post](https://blog.cloudflare.com/cloudflare-one-data-protection-announcement/).**_

### **Our security-first culture**

The security services referenced earlier are only as valuable as the people and processes involved in implementing them. In particular, the milestones we've reached so far are a credit to our organization's overall security-first culture, which is rooted in the principle that "security is part of everyone's job." 

For example, Cloudflare operates its own internal 24x7 Security Incident Response Team (SIRT) and encourages all employees to report suspicious activity early and often. This transparent "see something, say something approach" creates a first line of defense and a positive feedback loop: these reports from the front lines improve our approach. Leadership accepts and expects that more than 90% of employee reports to SIRT will turn out to be benign, because when real cyber attacks occur – as with the 2022 targeted phishing incident – timely alerts are critical. Moreover, this "blame-free" proactive approach applies to bug reporting for the internal deployment of our own services, helping make them stronger in the process.

"Cloudflare's security-first culture makes my job easier," says Bourzikas. "Our employees are invested in making sure they have the highest quality security experiences, which in turn helps our teams build better services for our customers. This commitment is critical as we continue to extend capabilities and services with our Cloudflare One platform."

![Securing Cloudflare with Cloudflare One logo](https://images.ctfassets.net/slt3lc6tev37/2KfOnCxEoRIFcSZjL5r6BY/768f898d3af1bb682823bc10e521a8a7/Cloudflare-logo.png) 

Cloudflare protects our growing hybrid workforce with our own Security Services Edge (SSE) / Zero Trust platform

 Products Used 

Access Email Security Gateway Teams Zero Trust 

 Details 

 Industry 

High Technology 

 Region 

North America 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Securing Cloudflare with Cloudflare One","description":"Cloudflare protects our growing hybrid workforce with our own Security Services Edge (SSE) / Zero Trust platform","url":"https://www.cloudflare.com/case-studies/cloudflare-one/","inLanguage":"en"}
```
