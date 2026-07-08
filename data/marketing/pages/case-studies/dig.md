---
title: Dig
description: Thanks to Cloudflare Workers and Pages, Dig has a fast, reliable, and secure ordering portal.
image: https://www.cloudflare.com/preview.png
---

# Dig

> #### "  Cloudflare Pages is very cost-effective, and it's very easy to deploy code. Additionally, Pages offers additional value through integration with Cloudflare's performance and security tools, such as the CDN and WAF, making it the perfect solution for this. " 

## **Cloudflare provides Dig with a fast and secure online ordering portal that rapidly scales during peak periods**

Dig, also known as Dig Inn, is a large chain of fast casual restaurants focusing on cooked-to-order, plant-based foods, sustainability, and working directly with farmers and partners to plan mindful recipes. It has nearly 50 locations, most of them in urban business districts, and serves six million customers each year.

### **Challenge: Develop a reliable and scalable online ordering site for a restaurant chain**

Dig did a significant amount of business online even prior to COVID-19\. After the pandemic began, online ordering spiked further. To ensure they had the scalability to meet this increased demand, Dig asked [Happy Cog](https://www.happycog.com/?atrkid=V3ADWAD8940F4%5F105383721308%5Fkwd-313621176205%5F%5F421246539061%5Fg%5Fc%5F%5F%5F&gclid=CjwKCAiAyc2BBhAaEiwA44-wWyyRZPdF9QxyJ1jHX-qplKdmQnxa%5F0eSXEW0qCEzWf3n5ZuDrA0RCxoCM3kQAvD%5FBwE), a full-service interactive agency and its long-time partner, to develop two new websites. One would contain an online ordering portal for customers, and the other would be an informational site where customers could learn more about Dig. 

Both websites needed to be secure, fast, and easy for Dig's customers to use. The ordering site needed to seamlessly scale during peak times, when traffic increases rapidly. 

"Uptime is a big priority for Dig," explains Matt Weinberg, President of Technology at Happy Cog. "During the lunch and dinner rushes, Dig's restaurants are incredibly busy. Because restaurant profit margins are razor-thin, even five minutes of downtime during lunch can have a material impact."

### **Cloudflare Workers and Pages keep Dig's website up, and its customers digging in**

Happy Cog decided to build Dig's websites using Cloudflare Pages, which allows developers to deploy and host their sites directly to the edge, closer to end users. Pages is a Jamstack-compatible platform that further simplifies the developer experience with full Git-integration, advanced collaboration with unlimited free seats for collaborators, automatic previews for every PR and commit, and more.

"Cloudflare Pages is very cost-effective, and it's very easy to deploy code," Weinberg explains. "Additionally, Pages offers additional value through integration with Cloudflare's performance and security tools, such as the CDN and WAF, making it the perfect solution for this."

Dig's [online ordering site](https://order.diginn.com/) is a headless React application that is entirely hosted on Cloudflare Pages. Javascript calls an underlying API to get and handle dynamic ordering logic. The developers at Happy Cog use Github Actions to build/deploy this to Cloudflare Pages when commits are approved and merged to master. 

Workers ensures that React routing happens properly. "Because this all runs on Workers, we never have to worry about a large spike in traffic or orders bringing down the system and causing a revenue loss," Weinberg notes.

The [informational site](https://www.diginn.com/), meanwhile, is a content management system (CMS) based site integrated with the Cloudflare Cache Break API. While the assets are stored on S3, they also go through Cloudflare to take advantage of Cloudflare CDN caching and Cloudflare Polish image compression. 

"We always recommend Polish to clients. We think it's amazing," Weinberg says. "We also use full-page caching. We built an integration in the CMS so that when they make an API call to effect a change, Cloudflare clears the cache quickly, and the site stays updated."

In addition, both the informational site and the ordering site are protected by the Cloudflare WAF, which blocks thousands of threats each month.

Now that Happy Cog has begun using Cloudflare Pages, he and his team appreciate the automatic preview URLs generated with every PR and commit, making it easy to gather feedback and iterate quickly. "There are many internal stakeholders at Dig, and many of them are non-technical staff, like culinary specialists," Weinberg explains. "The automatic preview URLs make it easy for us to send preview links to non-technical stakeholders who are part of the decision-making process for new features."

Since Dig's websites went live, Happy Cog has saved hundreds of hours annually by eliminating debugging from the server infrastructure. "In addition to saving us time, if my team doesn't have to debug, that means the customer's sites are running properly," Weinberg says. 

Dig is thrilled with their new websites. "Our new sites are very fast, and we haven't had one moment of downtime since they launched," says Danielle Cranmer, Digital Product Manager at Dig. "They've performed well even during our busiest times."

Weinberg feels that Cloudflare Workers and Pages lends very well to building web solutions for the restaurant industry. "Restaurants' core focus is making and serving food. They want to concentrate on making good food for their customers, not on their web servers, website, and other technical issues," he says. "They just want to make it as easy as possible for their customers to order food online. Cloudflare Workers and Pages lets us build fast, reliable sites that are very easy for restaurant customers to use."

![Dig logo](https://images.ctfassets.net/slt3lc6tev37/5NW8YHvmfBtlZD9voktwt6/59e178ff6083355da3a416d8975b387b/dig_logo.png) 

Thanks to Cloudflare Workers and Pages, Dig has a fast, reliable, and secure ordering portal.

 Products Used 

Workers Pages WAF 

 Details 

 Industry 

Travel & Leisure 

 Region 

North America 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Dig","description":"Thanks to Cloudflare Workers and Pages, Dig has a fast, reliable, and secure ordering portal.","url":"https://www.cloudflare.com/case-studies/dig/","inLanguage":"en"}
```
