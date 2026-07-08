---
title: Indeed &amp; Cloudflare | Customer Story
description: Global job matching and hiring platform Indeed reduces technical debt, secures employee and contractor access, and protects confidential information in Cloudflare's connectivity cloud
image: https://www.cloudflare.com/preview.png
---

# Indeed

> #### "  Cloudflare sets the standards for all the vendors we work with. By reducing complexity and improving security across the board, Cloudflare is safeguarding the trust of our most important stakeholders — the employers and job seekers at the heart of the Indeed platform. " 

## Indeed modernizes IT and security by replacing its VPN with a Zero Trust approach

Indeed is the world's #1 job site. Founded in 2004 and based in Austin, Texas, Indeed has over 15,000 employees across North America, Asia Pacific, and Europe. More than 350 million unique visitors use Indeed each month to search for jobs, post resumes, research companies and more. And over 3.5 million employers find candidates. Known for its easy-to-use design and advanced technologies for job matching and hiring, Indeed serves job seekers in over 60 countries and 28 languages.

### Challenge: Modernize security while reducing technical debt

Indeed's security team prioritizes ensuring the platform is safe for the hundreds of millions of employers and job seekers who rely on the platform, and protecting sensitive user data — like resumes, employment histories, and personally identifiable information — from leaks and theft.

"We have an obligation to be the best data stewards possible," explains Matthew Ortiz, senior manager of Indeed's information security, engineering, and operations teams. "People come to us in a vulnerable state looking for a job. They entrust us with their most valuable personal data and rely on us to provide a secure, efficient environment." 

On top of these day-to-day security concerns, Indeed recognized the need to [modernize](https://www.cloudflare.com/learning/network-layer/how-to-prepare-for-network-modernization-projects/) an IT ecosystem that had grown increasingly complex. This complexity resulted in inconsistent traffic controls to the company's SaaS apps, data centers, and cloud resources. It also meant inefficient backhauling of traffic to data centers and an overreliance on traditional, perimeter-based tools like an on-premises virtual private network (VPN).

"As we grew, our technical debt grew with us," says Ortiz. "We developed increasingly complex networking and security stacks which created risk and hurt productivity. We needed to simplify — complexity only leads to challenges and vulnerabilities."

To address these security and modernization goals, Indeed turned to Cloudflare's [connectivity cloud](https://www.cloudflare.com/connectivity-cloud/) for secure any-to-any connectivity. In partnership with Cloudflare, Indeed began transforming its IT ecosystem, reducing complexity, improving security, and modernizing its architecture in the cloud.

### Use case: Securing Indeed's job search website

One initial step towards this transformation was modernizing security for Indeed's main public-facing website. To achieve this, Indeed onboarded Cloudflare's web application firewall (WAF) and bot management capabilities to its job platform to neutralize threats and reduce fraud.

"Fraudulent job posts and employment applications represent a serious potential risk to our business, endangering users and eroding trust," says Ortiz, "With the help of Cloudflare, we're able to proactively prevent and mitigate such risks to help keep the hundreds of millions of job seekers on our platform safe."

### Accelerating transformation by replacing a legacy VPN

Within a few months of this initial adoption, Indeed began collaborating with Cloudflare on a longer-term strategic effort to modernize connectivity and security across their workforce, including reimagining how their employees accessed resources. The first phase of this project focused on replacing Indeed's traditional VPN, which created risk and frustrated users.

"Our legacy architecture relied on implicit trust — meaning, employees had access to more data and resources than we wanted just by being inside an office," says Ortiz. "Plus, the VPN could be slow or add friction in ways that annoyed users and made them turn off the connection, which created blind spots for us."

To modernize its access approach, Indeed began onboarding Cloudflare, specifically the Zero Trust Network Access (ZTNA) service. To evaluate the solution, Indeed rolled out Cloudflare progressively over a few weeks to dedicated test groups of hundreds of users, representing different device types and roles, including contractors. Testing helped Indeed become comfortable with how Cloudflare fit within its existing architecture and protected critical apps, developer environments, and its AWS infrastructure.

In just over 3 months, Indeed had deprecated its VPN entirely. This included migrating hundreds of preexisting access policies and rolling out Cloudflare to over 13,000 employees and contractors around the world. Today, Indeed uses the infrastructure-as-code tool Terraform to automate the vast majority of its ongoing management, including onboarding new users and configuring new policies. 

### ZTNA impact: Better user experiences and reduced risk

The feedback on Cloudflare's access approach has been positive. 

"Compared to the VPN, our users everywhere report a much better and more consistent access experience with Cloudflare," says Ortiz, who specifically cited less latency and more reliable connections, especially in regions that traditionally experienced problems with the VPN.

Replacing its VPN with Cloudflare helps Indeed [reduce risk](https://www.cloudflare.com/the-net/consolidating-risk-management/) with Zero Trust best practices — meaning least-privilege, default-deny access based on context.

"Cloudflare has empowered us to be more intentional in how we grant access, enabling us to verify based on identity, device posture, location, and other variables," says Ortiz. "This Zero Trust approach helps us adapt to risk and gives us way more confidence than our legacy architecture."

In particular, Cloudflare restores visibility for Indeed's security teams. With the VPN, the majority of users did not maintain a persistent connection, whether because of dropped service, workarounds, or other connectivity issues. Now with Cloudflare, Indeed's users stay connected for effectively all of their working hours.

"Cloudflare has helped resolve blind spots in our security and ultimately allows us to make better decisions in what access policies to set," says Ortiz.

The impact of replacing the legacy VPN with Cloudflare ZTNA is felt at the highest levels internally.

"Cloudflare simplifies how we deliver Zero Trust across our organization — that helps us mitigate risk more effectively with less effort," says Anthony Moisant, SVP, Indeed's Chief Information Officer, and Chief Security Officer. 

### Identifying and mitigating generative AI risks

The visibility Cloudflare provides is helping Indeed [reduce the risk of data leaks to AI tools](https://www.cloudflare.com/learning/ai/what-is-ai-security/). Specifically, Cloudflare is helping Ortiz and his colleagues identify which unsanctioned AI apps (known as "shadow AI") employees are using and establish controls when appropriate to prevent information exposure. Today, those controls include restricting access to unapproved generative AI (GenAI) tools, and over time, will include more specific detections of sensitive data via data loss prevention (DLP) scanning.

"Despite its many legitimate users, AI presents major security and privacy concerns," says Ortiz. "Cloudflare helps us find what shadow AI risks exist and block unsanctioned AI apps and chatbots."

### Future plans: Shift more security and networking to the cloud

Going forward, Indeed plans to continue simplifying its IT architecture by migrating more security controls and network connectivity to the cloud. Indeed will continue extending Zero Trust principles across environments in pursuit of what Ortiz calls the holy grail: [company-wide Zero Trust](https://www.cloudflare.com/the-net/business-case-zero-trust/). 

While the company's recent focus has been securing traffic from users to applications, one use case on the horizon includes identity-based verification for machine-to-machine workloads. In addition to simplifying access workflows, Indeed is also exploring how Cloudflare can further protect data, secure SaaS environments, and defend against threats with DLP, [cloud access security broker (CASB)](https://www.cloudflare.com/learning/access-management/what-is-a-casb/), and other [secure access service edge (SASE)](https://www.cloudflare.com/learning/access-management/what-is-sase/) capabilities.

Reflecting on Indeed's collaboration with Cloudflare to date, Ortiz is positive.

"Cloudflare sets the standard for all the vendors we work with," he says. "By reducing complexity and improving security across the board, Cloudflare is safeguarding the trust of our most important stakeholders — the employers and job seekers at the heart of the Indeed platform."

![Indeed logo](https://images.ctfassets.net/slt3lc6tev37/6dy6dqjDdhCwfgpXk8KblO/07daf69f03ddabdf5ead6cf2fecd20bc/Indeed_Logo_RGB.png) 

Global job matching and hiring platform Indeed reduces technical debt, secures employee and contractor access, and protects confidential information in Cloudflare's connectivity cloud

 Products Used 

Access Zero Trust 

 Details 

 Industry 

Public Interest 

 Region 

North America 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Indeed & Cloudflare | Customer Story","description":"Global job matching and hiring platform Indeed reduces technical debt, secures employee and contractor access, and protects confidential information in Cloudflare's connectivity cloud","url":"https://www.cloudflare.com/case-studies/indeed/","inLanguage":"en"}
```
