---
title: County of San Luis Obispo
description: The County of San Luis Obispo uses Cloudflare's Project Fair Shot to provide equal access to COVID-19 appointments.
image: https://www.cloudflare.com/preview.png
---

# County of San Luis Obispo

> #### "  With Cloudflare Waiting Room, we can see everything fill up over time, but it happens at a pace that's manageable. To be able to breathe a little bit and watch the numbers, watch the registrations happen, watch all the slots fill up, it's really great. " 

## **County of San Luis Obispo Ensures Equitable COVID-19 Vaccine Access with Project Fair Shot**

The County of San Luis Obispo, California provides over 700 public services to its 277,000 residents — including distributing vaccines during the COVID-19 pandemic. The county operates three vaccination clinics located at its major population centers. Each week, between 2,000 and 7,000 COVID-19 vaccine doses are distributed within the county. An estimated 81,000 residents are eligible for vaccination in the first phase of the country's program, and it has issued over 31,000 first doses and 14,000 second doses to date.

On Thursday mornings at 9 AM, when appointment slots for the next week are made available, approximately 23,000 people visit the county's vaccination website attempting to book an appointment for eligible residents. These traffic surges frequently overwhelmed the scheduling application, resulting in site outages and accidental double-bookings. 

### **Searching for the Right Solution**

The County of San Luis Obispo is committed to providing equal access to the vaccine. This includes operating a call center and enabling online vaccine scheduling. However, ensuring fairness with an online portal is difficult, as visitors with faster Internet connections and clicking speeds have a distinct advantage.

The county has explored several options for its vaccine portal. Platforms designed for event registration exist but often have language about selling tickets, which did not fit their use case. Additionally, some of these platforms were found to fail under the heavy traffic associated with COVID-19 appointment scheduling. Other options designed for scheduling meetings within an organization had similar scalability issues.

The county's web team settled on Google Forms and Worksheets for implementing its vaccine registration system. Google Forms allowed the creation of scripts that automatically opened and closed appointment time slots as they are filled. Forms also feeds data to a Google Worksheet which is used by the call center and for email confirmations.

### **Cloudflare's Project Fair Shot Enables Equal Access**

The switch to Google Forms enabled the site to scale to meet load, but the county still had a problem: the scripts running behind Google Forms needed time to run and close booked appointment slots. Thousands of simultaneous visitors didn't allow for this time, and slots were occasionally double-booked. These double-bookings could be resolved by the call center, but it was still a disappointment for those who needed to reschedule.

A county employee following the Cloudflare blog learned of the launch of [Project Fair Shot](https://www.cloudflare.com/fair-shot/). This is a free program that enables COVID-19 vaccine distributors to set up Cloudflare Waiting Room in front of their scheduling sites and applications. Waiting Room creates a queue for visitors to the site and limits the number of visitors interacting with the application at one time. This ensures that sites are not overwhelmed and provides fair, first-come-first-served access to appointments with no modifications needed to the scheduling application.

Because vaccines are allocated on a weekly basis, the county's web team had a few days to design its waiting room. According to Tyler Penney, the county's Web Services Administrator, "We spent a couple days working with our media relations folks, working with our web team, to be able to build out this nice little waiting room. So we had a little bit of fun with the design of it, we made these little icons with people in line with masks on and we tried to make it kind of just a nice place to be."

The day before the next batch of vaccines was due to be released, the team filled out the form to activate their waiting room. Working with the Cloudflare team, they were able to configure Cloudflare Waiting Room and improved their caching configurations to minimize load on their servers. The next morning, the county's web team performed a test to ensure that everything was working as expected. Penney says that it was a quick and painless process, "The Cloudflare team was wonderful helping us. When we have any questions, they're able to quickly answer and help us to set it up."

On Thursday morning, the site experienced the usual rush of visitors. At 7 AM, the first of the approximately 23,000 visitors started to arrive, waiting for vaccine appointment registration to begin at 9\. This time, the site was ready, and visitors were placed in the Waiting Room and provided with information about their current position in line. Starting at 9 AM, the doors opened and the first group was allowed into the scheduling application.

### **Appointment Scheduling is Transparent and Fair with Cloudflare Waiting Room**

With Project Fair Shot, the County of San Luis Obispo is able to ensure that scheduling vaccine appointments is an equitable and transparent process for its citizens. According to Penney, "It's not Lord of the Flies anymore, which, you know, basically is what it was before. If you had a fast Internet connection or you could click really quickly, that would give you an advantage on getting a vaccine."

Cloudflare Waiting Room allows residents to enter in groups of two hundred with a few minutes between groups. This ensures that the Forms-based portal is able to keep up with the load and that the backend scripts have time to run. These smaller groups also allow the county's web team to monitor progress and ensure that everything is working correctly. Penney says, "With Cloudflare Waiting Room, we can see everything fill up over time, but it happens at a pace that's manageable. To be able to breathe a little bit and watch the numbers, watch the registrations happen, watch all the slots fill up, it's really great."

Citizens in the Waiting Room receive regular updates regarding their place in line and the availability of vaccine appointments. When their turn comes, the page automatically refreshes and grants access to the scheduling application. As appointment slots become full, typically within the first hour, residents are advised to check back the following day for any available slots.

Recently, the County of San Luis Obispo has transitioned to a lottery-based appointment scheduling system to improve access to vaccines. Residents eligible for a COVID-19 vaccine can sign up once and are automatically notified each week if they have been selected for an appointment that week. Cloudflare Waiting Room remains in place to ensure that residents still have a positive experience even if traffic suddenly surges, such as when eligibility opens up for a new group.

The county has received positive feedback from several citizens on the usability and transparency of the new system. Penney says, "Our County Motto is 'Not for Ourselves Alone'. It's a joy to work with a company that shares our values and our commitment to a better society."

![County of San Luis Obispo logo](https://images.ctfassets.net/slt3lc6tev37/45kexUlzvZG8y8vPXDcGMY/80d3f5f1108e061300373eaecddc7450/cslo_logo.png) 

The County of San Luis Obispo uses Cloudflare's Project Fair Shot to provide equal access to COVID-19 appointments.

 Cloudflare Products 
* [  Cloudflare Waiting Room ](https://www.cloudflare.com/application-services/products/waiting-room/)

 Products Used 

Waiting Room 

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
{"@context":"https://schema.org","@type":"WebPage","name":"County of San Luis Obispo","description":"The County of San Luis Obispo uses Cloudflare's Project Fair Shot to provide equal access to COVID-19 appointments.","url":"https://www.cloudflare.com/case-studies/county-of-san-luis-obispo/","inLanguage":"en"}
```
