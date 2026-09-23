---
title: Gusto &amp; Cloudflare | Customer Story
description: Gusto improved remote access reliability, enhanced vendor relationships and upgraded their support levels by switching to Cloudflare.
image: https://www.cloudflare.com/preview.png
---

# Gusto

> #### "  We pulled up Gartner's Magic Quadrant and Cloudflare emerged as the clear choice — not just for their industry leadership and technical capabilities, but for their approach to customer relationships. The global presence and built-in redundancy of the Cloudflare network made the decision much easier. " 

## Gusto securely, reliably delivers HR solutions to over 500,000 businesses with help from Cloudflare

[Gusto](https://gusto.com/) is the leading partner for small businesses, helping them with a wide variety of critical tasks, including payroll, health benefits, tax credits, compliance, 401(k), HR, and much more. Gusto serves over 500,000 small businesses across the US and is on a multi-decade journey to grow the small business economy with technology and heart.

### Challenge: Modernizing access for a distributed workforce

Gusto's commitment to distributed work models extends beyond their products to their own policies, empowering "Gusties" to work remotely, in-office, or both. Their commitment to distributed work models extends beyond their products to their own policies, empowering "Gusties" to work remotely, in-office, or both.

Modernizing remote access security became a top priority. In particular, Gusto sought to migrate from their traditional [virtual private network (VPN)](https://www.cloudflare.com/learning/access-management/what-is-a-vpn/) tool, which was inflexible for administrators and frustrating for end users, to a cloud-delivered [Zero Trust Network Access (ZTNA)](https://www.cloudflare.com/learning/access-management/what-is-ztna/) approach. They needed a system that could self-correct when issues arose so they could avoid service disruptions. When issues came up, the system often couldn't self-correct, which led to service disruptions.

"We needed a solution that prioritized both performance and security, no matter where our users connect from," says Thomas Kitamura, Head of AIT Engineering at Gusto. "Cloudflare's solutions promised to give us a much more streamlined and reliable approach."

### Migrating to Cloudflare Access 4x faster

With their remote access project stalled, Gusto began evaluating Cloudflare as an alternative.

"Security, reliability, and partnership were our three points of focus," says Kitamura. "As we researched vendors, in reviewing Gartner analyst reports, Cloudflare emerged as the clear choice — not just for their industry leadership and technical capabilities, but for their approach to customer relationships. The global scale and built-in resiliency of the Cloudflare network made the decision much easier."

Specifically, Gusto selected Cloudflare Access, a ZTNA service to secure access to internal applications for their 4,000-plus users. "With Cloudflare, the ZTNA migration took less than 3 months, whereas the previous transition took over a year," says Chandler.

"Since moving to Cloudflare, we haven't just added new tools — we've changed how we work," says Kitamura. "There are plenty of vendors that offer solid products. What we were really looking for was a true partner. From day one, Cloudflare demonstrated not just interest, but real commitment to our success."

### Partnering with CDW for a smooth transition to the new system

Gusto credits collaboration with Cloudflare and delivery partner [CDW](https://www.cdw.com/) for a successful phased implementation. For example, the first phase focused on migrating existing policies "as is" for a subset of tech-savvy users with minimal changes, custom rules, and one-off configurations.

"The tiered rollout allowed our engineers, who are tech-literate and use non-standard or customized devices to troubleshoot and identify complex edge cases early in the implementation process. A pilot team from customer service later validated Cloudflare's compatibility with our core internal toolsets," explains Chandler.

[CDW](https://www.cdw.com/) supported Gusto throughout the multi-phase rollout, including with pricing, logistics, procurement, onboarding, and security compliance documentation.

Today, Cloudflare Access verifies access for all users to self-hosted and SaaS apps based on Gusto's [identity provider](https://www.cloudflare.com/learning/access-management/what-is-an-identity-provider/), Okta, in accordance with [Zero Trust](https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/) best practices. Integrating Cloudflare with Okta helps automate how Gusto provisions new apps and onboards new employees, contractors, and other outsourced partners.

"We have put strict standards in place so when we spin up a new application or add a user to our environment, the setup and policy configuration are pretty much automated," Chandler says. "We don't have to add new firewall policies or create new posture checks or user groups. Okta kicks off a workflow and pushes it off to Cloudflare without any additional effort."

### Maturing Gusto's Zero Trust approach at scale

Migrating to Cloudflare has provided a more resilient foundation for Gusto's security modernization efforts. Optimized traffic routing across Cloudflare's global network minimizes disruptions and latency.

"It doesn't matter where our users are — network incidents don't impact operations. Cloudflare just handles it," says Chandler. "If a data center goes down Cloudflare will immediately spot the outage and then automatically reroute that server's traffic without us getting involved. I don't see offices full of people complaining on Slack that the cloud is down again."

With this more reliable foundation, Gusto is better able to monitor organizational activity. Specifically, Gusto takes advantage of Cloudflare's [Digital Experience Monitoring (DEX)](https://developers.cloudflare.com/cloudflare-one/insights/dex/) for visibility into connectivity issues across users, applications, and devices. For example, Gusto's IT team uses DEX to troubleshoot user-reported performance issues, investigate network connectivity problems, and shift internal support conversations from speculation to evidence.

"With Cloudflare, we have complete, 100% visibility into all of our users' activities, allowing us to pinpoint and resolve issues faster than before," says Chandler.

### A collaborative approach to resolve issues at speed

By responding directly to feedback and resolving issues in real time, without requiring formal escalation, Cloudflare helped address many of the support and accountability challenges Gusto had faced previously. Early in the Cloudflare implementation, when Gusto identified a use case they hadn't yet solved for; Cloudflare engineers immediately developed a solution by providing the Gusto team access to [Cloudflare's developer services](https://www.cloudflare.com/developer-platform/products/) and [Workers](https://workers.cloudflare.com/) — the dynamic platform that allows developers to run serverless code across the Cloudflare network.

By giving Gusto direct access to developer services, Cloudflare was able to build and deploy a fully customized tool in less than 48 hours.

"Rather than pushing the problem back on us, the Cloudflare team created a custom solution," says Chandler. "It was a huge metric confirming Cloudflare's commitment to partnership — a big indicator that things were going to be a lot better."

"It's super helpful to have that kind of customization in place," says Chandler. "With Cloudflare Workers, we're able to script solutions that automate recovery processes — which is a huge step forward from what we had before. Being able to handle issues programmatically instead of relying on manual workarounds has made a real difference."

### Scaling for the future through a long-term partnership with Cloudflare

Looking ahead, Gusto is exploring ways to mature its Zero Trust posture, including protecting sensitive data with controls like Cloudflare's [data loss prevention](https://www.cloudflare.com/learning/access-management/what-is-dlp/) (DLP), and automating policy configuration with Terraform workflows. With Cloudflare's scalable, programmable edge, Gusto also sees long-term potential in Cloudflare's developer ecosystem to support evolving needs — from security to performance to rapid deployment.

"The more we think about what can be automated or unique stuff we want to do, the more we turn to Cloudflare Workers. It's super helpful to have that kind of flexibility. Instead of every employee running some manual script during an outage, Workers lets us automate that recovery — and so much more," says Chandler.

What sets Cloudflare apart for Gusto is not just the technology but the partnership mindset: a team willing to listen, adapt, and actively collaborate to overcome challenges as they arise.

"We wanted more than just a product — we wanted a partner who truly cared and was motivated to help us succeed. From day one, Cloudflare didn't just deliver a service; they showed real commitment to solving problems alongside us," says Kitamura. "That kind of collaboration is rare — and incredibly valuable."

![Gusto logo](https://images.ctfassets.net/dzlvafdwdttg/1jzZ7mD168RiQ7J3bxYTxv/80710328be459666347b2d32bfc93b0f/Gusto_Logo.png) 

Gusto improved remote access reliability, enhanced vendor relationships and upgraded their support levels by switching to Cloudflare.

 Cloudflare Products 
* [  Access ](/products/access/)
* [  Workers ](/products/workers/)
* [  Data Loss Prevention (DLP) ](/products/dlp/)
* [  Digital Experience Monitoring (DEX) ](https://developers.cloudflare.com/cloudflare-one/insights/dex/)

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
{"@context":"https://schema.org","@type":"WebPage","name":"Gusto & Cloudflare | Customer Story","description":"Gusto improved remote access reliability, enhanced vendor relationships and upgraded their support levels by switching to Cloudflare.","url":"https://www.cloudflare.com/case-studies/gusto/","inLanguage":"en"}
```
