<div class="content-intro">
	<h3>About Us</h3>
	<p>At Cloudflare, we are on a mission to help build a better Internet. Today the company runs one of the world’s largest networks that powers millions of websites and other Internet properties for customers ranging from individual bloggers to SMBs to Fortune 500 companies. Cloudflare protects and accelerates any Internet application online without adding hardware, installing software, or changing a line of code. Internet properties powered by Cloudflare all have web traffic routed through its intelligent global network, which gets smarter with every request. As a result, they see significant improvement in performance and a decrease in spam and other attacks. Cloudflare was named to Entrepreneur Magazine’s Top Company Cultures list and ranked among the World’s Most Innovative Companies by Fast Company.</p>
	<p>At Cloudflare, we’re not looking for people who wait for a polished roadmap; we’re looking for the builders who see the cracks in the Internet that everyone else has simply learned to live with. We value candidates who have the instinct to spot a "normalized" problem and the AI-native curiosity to create a solution using the latest tools. Our culture is built on iteration, leveraging AI to ship faster today to make it better tomorrow, while ensuring that every improvement, no matter how small, is shared across the team to lift everyone up. If you’re the type of person who values curiosity over bureaucracy, and that AI is a partner in solving tough problems to keep the Internet moving forward, you’ll fit right in.</p>
</div>
<p><strong>Available Locations: </strong>Austin, TX | London, UK</p>
<h4>About the team</h4>
<p>Cloudflare's&nbsp;<strong>Packet Processing</strong> team builds and operates the L3/L4 dataplane services that sit at the front door of our global network. We own the systems that receive, inspect, route, and forward every packet entering Cloudflare — from DDoS-scrubbed IP transit to TCP/UDP application traffic — across every colo in the world. Our work spans <strong>Unimog</strong> (Cloudflare's L4 load balancer that steers traffic to the right machine in every datacenter), <strong>Magic Transit</strong> and <strong>Cloudflare WAN</strong> (our IP-layer DDoS protection and private connectivity products), and <strong>Spectrum</strong> (our L4 reverse proxy for arbitrary TCP and UDP applications). Together, these systems form the packet-processing foundation of the <strong>Traffic Management</strong> organization.</p>
<p>We are a team of engineers who obsess over performance, correctness, and reliability at massive scale. We work close to the metal, we own what we build in production, and we take pride in shipping systems that "just work" for a very large fraction of the internet.</p>
<h4>About Spectrum</h4>
<p>Spectrum is Cloudflare's Layer 4 reverse proxy — the front door for arbitrary TCP and UDP traffic. It gives customers Cloudflare's DDoS mitigation, anycast performance, TLS termination, and global footprint for any TCP or UDP application: gaming servers, SSH, MQTT, custom protocols, and TLS-terminated services of every shape. Spectrum's edge dataplane runs across every Cloudflare colo, terminating and forwarding a very large volume of concurrent connections per second, and its control plane manages configuration, provisioning, and integration with adjacent Cloudflare systems.</p>
<h4>About the role</h4>
<p>As a member of Spectrum in the Packet Processing team, we're looking for a Systems Engineer who wants to take shared ownership of a critical, high-scale L4 proxy and help evolve it into the next generation of Cloudflare's non-HTTP traffic platform. This is a rare opportunity to work on a product with massive existing scale while helping shape where it goes next as a first-class part of our L3/L4 dataplane story.</p>
<h4><strong>Responsibilities</strong></h4>
<p>Some of the things you'll work on:</p>
<ul>
	<li>The <strong>Spectrum edge dataplane</strong> (Go): TCP/UDP connection acceptance and forwarding, TLS termination, PROXY protocol, connection accounting, and eBPF integrations</li>
	<li>The <strong>Spectrum control plane</strong> (Go): application configuration APIs, provisioning, and the systems that push config globally to every edge machine</li>
	<li><strong>Cross-dataplane integrations</strong>: how Spectrum fits together with Unimog for L4 load balancing, with Magic Transit for IP transit, with Argo Smart Routing for accelerated origin paths, etc</li>
	<li><strong>Operational excellence</strong>: analytics pipelines, observability, on-call, incident response, and paying down technical debt in a product with a long production history</li>
	<li><strong>Roadmap evolution</strong>: help shape where Spectrum goes next as the L4 counterpart to our HTTP proxy stack</li>
</ul>
<p>You'll partner closely with the rest of Packet Processing, other Traffic Management teams, DDoS, DNS, Core SRE, and Edge SRE to solve problems that span the entire Cloudflare stack.</p>
<h4><strong>Desirable Skills, Knowledge, and Experience:</strong></h4>
<ul>
	<li>Experience building and shipping large-scale, reliable, highly distributed systems</li>
	<li>Strong programming experience in <strong>Go</strong>; familiarity with or willingness to work in <strong>Rust</strong> is a plus</li>
	<li>Solid understanding of <strong>L3 and L4 networking</strong>: TCP, UDP, IP, connection state, NAT, anycast, and packet flows</li>
	<li>Experience with <strong>Linux networking primitives</strong> — sockets, eBPF, network namespaces, netfilter/nftables, tc</li>
	<li>Experience designing and integrating <strong>RESTful APIs</strong> and backend systems</li>
	<li>Comfort with <strong>operating what you build</strong> in production — on-call rotations, incident response, and root-cause analysis</li>
	<li>Ability to reason about <strong>existing systems at scale</strong>: reading unfamiliar code, understanding hidden dependencies, and safely evolving software that has been in production for years</li>
	<li>Excellent debugging and optimization skills, particularly around performance and connection lifecycle issues</li>
	<li>Focus on clarity in written and verbal communication; ability to work across teams to land shared solutions</li>
</ul>
<h4>Bonus Points</h4>
<ul>
	<li>Experience with <strong>TLS termination</strong>, PROXY protocol, or L4/L7 proxies (Envoy, HAProxy, nginx stream, etc.)</li>
	<li>Experience with <strong>ClickHouse</strong>, Kafka, or large-scale connection/flow analytics pipelines</li>
	<li>Experience with globally-distributed KV or config-push systems</li>
	<li>Prior work on DDoS mitigation, anycast routing, L4 load balancing, or high-throughput edge network daemons</li>
	<li>Contributions to open-source networking or proxy projects</li>
</ul>
<p><strong>Compensation</strong></p>
<p>Compensation may be adjusted depending on work location.</p>
<p><strong>Equity</strong></p>
<p>This role is eligible to participate in Cloudflare’s equity plan.</p>
<p><strong>Benefits</strong></p>
<p>Cloudflare offers a complete package of benefits and programs to support you and your family.&nbsp; Our benefits programs can help you pay health care expenses, support caregiving, build capital for the future and make life a little easier and fun!&nbsp; The below is a description of our benefits for employees in the United States, and benefits may vary for employees based outside the U.S.</p>
<p><strong>Health &amp; Welfare Benefits</strong></p>
<ul>
	<li>Medical/Rx Insurance</li>
	<li>Dental Insurance</li>
	<li>Vision Insurance</li>
	<li>Flexible Spending Accounts</li>
	<li>Commuter Spending Accounts</li>
	<li>Fertility &amp; Family Forming Benefits</li>
	<li>On-demand mental health support and Employee Assistance Program</li>
	<li>Global Travel Medical Insurance</li>
</ul>
<p><strong>Financial Benefits</strong></p>
<ul>
	<li>Short and Long Term Disability Insurance</li>
	<li>Life &amp; Accident Insurance</li>
	<li>401(k) Retirement Savings Plan</li>
	<li>Employee Stock Participation Plan</li>
</ul>
<p><strong>Time Off</strong></p>
<ul>
	<li>Flexible paid time off covering vacation and sick leave</li>
	<li>Leave programs, including parental, pregnancy health, medical, and bereavement leave</li>
</ul>
<p>&nbsp;</p>
<div class="content-conclusion">
	<h3>What Makes Cloudflare Special?</h3>
	<p><span style="font-weight: 400;">We’re not just a highly ambitious, large-scale technology company. We’re a highly ambitious, large-scale technology company with a soul. Fundamental to our mission to help build a better Internet is protecting the free and open Internet.</span></p>
	<p><a href="https://blog.cloudflare.com/protecting-free-expression-online/"><strong>Project Galileo</strong></a><span style="font-weight: 400;">: Since 2014, we've equipped more than 2,400 journalism and civil society organizations in 111 countries with powerful tools to defend themselves against attacks that would otherwise censor their work, technology already used by Cloudflare’s enterprise customers--at no cost.</span></p>
	<p><strong><a href="https://www.cloudflare.com/athenian/">Athenian Project</a></strong><span style="font-weight: 400;">: In 2017, we created the Athenian Project to ensure that state and local governments have the highest level of protection and reliability for free, so that their constituents have access to election information and voter registration. Since the project, we've provided services to more than 425 local government election websites in 33 states.</span></p>
	<p><a href="https://1.1.1.1/"><strong>1.1.1.1</strong></a><span style="font-weight: 400;">: We released</span><a href="https://1.1.1.1/"> <span style="font-weight: 400;">1.1.1.1</span></a><span style="font-weight: 400;"> to help fix the foundation of the Internet by building a faster, more secure and privacy-centric public DNS resolver. This is available publicly for everyone to use - it is the first consumer-focused service Cloudflare has ever released. Here’s the deal - we don’t store client IP addresses never, ever. We will continue to abide by our</span><a href="https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver"> privacy commitment</a><span style="font-weight: 400;"> and ensure that no user data is sold to advertisers or used to target consumers.</span></p>
	<p><span style="font-weight: 400;">Sound like something you’d like to be a part of? We’d love to hear from you!</span></p>
	<p><span style="font-weight: 400;">Please note that applicants who progress to the offer stage of the interview process may be asked to attend an in-person interview within one of the Cloudflare Offices or Cloudflare Hubs.&nbsp; More details about this will be available at that stage of the interview process.</span></p>
	<p><span style="font-weight: 400;">This position may require access to information protected under U.S. export control laws, including the U.S. Export Administration Regulations. Please note that any offer of employment may be conditioned on your authorization to receive software or technology controlled under these U.S. export laws without sponsorship for an export license.</span></p>
	<p><span style="font-weight: 400;">Cloudflare is proud to be an equal opportunity employer. &nbsp;We are committed to providing equal employment opportunity for all people and place great value in both diversity and inclusiveness. &nbsp;All qualified applicants will be considered for employment without regard to their, or any other person's, perceived or actual</span> <span style="font-weight: 400;">race, color, religion, sex, gender, gender identity, gender expression, sexual orientation, national origin, ancestry, citizenship, age, physical or mental disability, medical condition, family care status, or any other basis protected by law. </span><span style="font-weight: 400;">We are an AA/Veterans/Disabled Employer.</span></p>
	<p><span style="font-weight: 400;">Cloudflare provides reasonable accommodations to qualified individuals with disabilities. &nbsp;Please tell us if you require a reasonable accommodation to apply for a job. Examples of reasonable accommodations include, but are not limited to, changing the application process, providing documents in an alternate format, using a sign language interpreter, or using specialized equipment. &nbsp;If you require a reasonable accommodation to apply for a job, please contact us via e-mail at </span><span style="font-weight: 400;">hr@cloudflare.com</span><span style="font-weight: 400;"> or via mail at 101 Townsend St. San Francisco, CA 94107.</span></p>
</div>