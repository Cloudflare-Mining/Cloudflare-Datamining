<div class="content-intro">
	<div><strong>About Us</strong></div>
	<div>
		<p>At Cloudflare, we are on a mission to help build a better Internet. Today the company runs one of the world’s largest networks that powers millions of websites and other Internet properties for customers ranging from individual bloggers to SMBs to Fortune 500 companies. Cloudflare protects and accelerates any Internet application online without adding hardware, installing software, or changing a line of code. Internet properties powered by Cloudflare all have web traffic routed through its intelligent global network, which gets smarter with every request. As a result, they see significant improvement in performance and a decrease in spam and other attacks. Cloudflare was named to Entrepreneur Magazine’s Top Company Cultures list and ranked among the World’s Most Innovative Companies by Fast Company.&nbsp;</p>
		<p>At Cloudflare, we’re not looking for people who wait for a polished roadmap; we’re looking for the builders who see the cracks in the Internet that everyone else has simply learned to live with. We value candidates who have the instinct to spot a "normalized" problem and the AI-native curiosity to create a solution using the latest tools. Our culture is built on iteration, leveraging AI to ship faster today to make it better tomorrow, while ensuring that every improvement, no matter how small, is shared across the team to lift everyone up. If you’re the type of person who values curiosity over bureaucracy, and that AI is a partner in solving tough problems to keep the Internet moving forward, you’ll fit right in.</p>
	</div>
</div>
<p><strong>Available Locations: Lisbon, Portugal&nbsp;</strong></p>
<p><strong>About the Role&nbsp;</strong></p>
<p>Cloudflare built its reputation helping build a better Internet, defending millions of sites, giving away SSL and DDoS mitigation when the industry charged premium prices. In an acceleratingly dangerous world, the scope of that mission has changed. We are becoming something more: critical infrastructure. Banks run their payment rails on us. Governments run public services on us. Media companies depend on us during live events. Health systems depend on us to provide care. Reliability for these customers is no longer a feature of our product. It is a mission.</p>
<p>Serving that customer base demands a different operating model. Traditional support organizations route tickets. Traditional engineering organizations ship features. Neither alone is enough when the stakes are this high. We are pivoting to something different: a customer-facing engineering organization, directly engaged with our customers at scale. This is work a central dev team cannot do from the inside of the network.</p>
<p>The Customer Reliability Engineering function is the spine of that pivot. CRE is SRE applied outward, the same engineering discipline, applied to the reliability of the systems our customers run on Cloudflare. You are the engineer who owns the problems that matter most to the customers who matter most, and you contribute directly to our products and tooling, in partnership with Product Engineering, to hold that standard across the entire customer base.</p>
<h2><strong>The Role</strong></h2>
<p>CRE is a rapid response team and a proactive engineering team. You fix things at the edge as they come up, and you help build the product capabilities that identify customer issues before they become a crisis. Both modes are equally core.</p>
<p><strong>Rapid response.</strong> When a customer issue surfaces that is high-severity, cross-layer and complex, you are the engineer who answers. You reproduce the defect, isolate the root cause across Cloudflare's infrastructure and the customer's stack, drive the fix with Product Engineering, and confirm resolution. You hold on-call for high-severity incidents as part of a global shift rotation.</p>
<p><strong>Proactive engineering.</strong> When no fire is burning, you work with Product Engineering and our platform teams to build the capabilities that make the next fire cheaper or unnecessary: telemetry pipelines that correlate signals across the customer base, detectors that fire before a human notices, diagnostic tooling that scales across hundreds of customers, automation that reduces toil for Customer Support. Every incident you carry generates engineering output that reduces the cost of recurrence. The work compounds.</p>
<p>Cloudflare is building CRE as an AI-native function. You will work with and help build agents and tooling that pre-diagnose incidents, surface relevant logs and configuration, and propose fixes with cited evidence. Engineers who ship AI-assisted diagnostics are the ones defining this discipline.</p>
<h2><strong>What You Might Work On</strong></h2>
<p><strong>Rapid response:</strong><br>Own a Sev-1 incident where a large financial services customer sees asymmetric latency from a single POP. Trace it through BGP routing and identify transit provider policy change that is required to resolve.<br>Diagnose a recurring WebSocket disconnect a media customer has been experiencing across multiple release cycles. Isolate it to a specific interaction between a Cloudflare service release and the customer's connection lifecycle. Drive the fix with the owning engineering team.<br>Partner with a government customer's SRE team during an active DDoS event. Help them shape their Magic Transit and WAF configuration in real time.</p>
<p><strong>Proactive engineering:</strong></p>
<ul>
	<li>Build, with Product Engineering, a distributed tracing capability that correlates Cloudflare edge signals with customer origin metrics so a single query tells the story of a failing request end-to-end.</li>
	<li>Ship a detector for a class of WAF false positives silently degrading several customers. Get it into production before the next renewal cycle.</li>
	<li>Prototype an AI agent that takes a new customer case, pulls relevant logs and config, and proposes a root cause with linked evidence. Deploy it internally. Measure whether it makes engineers faster. Iterate.</li>
</ul>
<h2><strong>Responsibilities</strong></h2>
<p><strong>Rapid incident response and root cause analysis.</strong> Own the most complex, high-severity customer issues end-to-end, from first signal through confirmed resolution. Lead deep-dive debugging across the full stack: edge, network, DNS, transport, APIs, application, customer-side configuration. Reproduce defects, validate fixes with Engineering, and confirm customer-side resolution. Produce postmortems other engineers rely on. Hold on-call for high-severity incidents as part of a global rotation that includes weekends.</p>
<p><strong>Proactive reliability engineering.</strong> Analyze support and telemetry signals across the customer base to find systemic risks before they become incidents. Contribute monitoring, detection, and diagnostic capability to the core product and the engineering systems that give Customer Support early visibility into customer-affecting issues. Define customer-facing reliability metrics (error rates, resolution times, repeat-contact rates) and drive measurable improvement. Write automation that reduces mean-time-to-detect and mean-time-to-resolve.</p>
<p><strong>Cross-functional partnership.</strong> Manage the technical escalation lifecycle with clear ownership and timely communication. Partner with Product Engineering to drive fixes, workarounds, and configuration changes that address underlying gaps. Represent the customer reliability perspective in engineering syncs, incident reviews, and post-mortem processes.</p>
<p><strong>Technical leadership and enablement.</strong> Raise the technical floor of Customer Support through pair-debugging, structured knowledge transfer, and shared tooling. Document diagnostic procedures and resolution patterns in runbooks, internal knowledge bases, and AI skills. Share insights from customer-facing incidents to improve product documentation and operational readiness.</p>
<p><strong>Product and platform depth.</strong> Maintain deep, current expertise across Cloudflare's product portfolio: edge networking, DNS, CDN, WAF, DDoS mitigation, Zero Trust, Workers, and our developer platform. Anticipate customer impact from new releases and architecture changes. Serve as a go-to subject-matter expert in one or more domains.</p>
<h2><strong>Requirements</strong></h2>
<ul>
	<li>Minimum 5 years of hands-on experience in site reliability engineering, escalation engineering, systems engineering, or a comparable deeply technical support / operations role, with at least 2 years in customer-facing environments.</li>
	<li>Strong foundation in networking and security:</li>
	<ul>
		<li>TCP/IP fundamentals: OSI model, IPv4/IPv6 addressing, subnetting, routing, switching.</li>
		<li>Core protocols: DNS, HTTP/S, TLS/SSL, SMTP, SNMP, NTP.</li>
		<li>Routing protocols: BGP, OSPF, including path selection and route propagation.</li>
		<li>Firewall concepts: stateful/stateless inspection, rule sets, NAT, ACLs.</li>
		<li>VPN and encryption: IPSec, SSL/TLS tunnels, GRE.</li>
		<li>Zero Trust architecture, network segmentation, modern security models.</li>
	</ul>
	<li>Proficiency with observability and diagnostic tooling: packet capture and analysis (Wireshark, tcpdump), log aggregation (Kibana, Elasticsearch), metrics dashboards (Grafana), distributed tracing.</li>
	<li>Strong scripting and automation skills (Bash, Python) with a track record of shipping tooling that improves reliability and reduces toil.</li>
	<li>Experience with incident management, postmortem culture, and SLO/SLI-based reliability practices.</li>
	<li>Excellent written and verbal communication. Able to convey complex technical information clearly to engineers, leadership, and customers.</li>
	<li>Comfort owning ambiguous, cross-layer problems. Composure under pressure during high-severity incidents.</li>
</ul>
<h2><strong>Desired Skills &amp; Experience</strong></h2>
<ul>
	<li>SRE, DevOps, or platform engineering experience with direct customer-facing accountability.</li>
	<li>Deep expertise at both L3/L4 (network infrastructure) and L7 (application protocols, DNS, HTTP, WebSocket).</li>
	<li>Expert-level proficiency with Linux command-line tools: curl, dig, git, traceroute, mtr, strace, ss.</li>
	<li>Data-at-scale analysis using SQL, PromQL, or equivalent.</li>
	<li>Familiarity with CI/CD pipelines, infrastructure-as-code (Terraform, Pulumi), and container orchestration (Kubernetes, Docker).</li>
	<li>Track record of building internal tooling or diagnostic utilities that measurably improved team efficiency.</li>
	<li>Demonstrated technical leadership: mentoring engineers, driving cross-team initiatives, influencing outcomes without direct authority.</li>
	<li>Experience applying AI/ML to production engineering or operational workflows.</li>
	<li>Comfort engaging directly with enterprise customer engineering teams, including on calls during incidents.</li>
</ul>
<h2><strong>Bonus Points</strong></h2>
<ul>
	<li>Active Cloudflare user who understands the platform as a practitioner.</li>
	<li>Hands-on experience with Workers, Pages, R2, D1, or other developer platform services.</li>
	<li>Cloud networking and security experience across AWS, Azure, or GCP.</li>
	<li>Web programming (HTML, JavaScript) and regular expressions.</li>
	<li>Chaos engineering or formal reliability frameworks (e.g., Google SRE principles).</li>
	<li>Managing or configuring non-HTTP services: email, DNS authoritative/recursive, FTP, SSH.</li>
</ul>
<h3 data-path-to-node="0"><strong data-path-to-node="0" data-index-in-node="0">Compensation</strong></h3>
<p data-path-to-node="1">● For Portugal based hires: Estimated annual salary is between € 61,000 - 84,000</p>
<ul data-path-to-node="2">
	<li>
		<p data-path-to-node="2,0,0">The final offer will be inclusive of time exemption, in alignment with the applicable law and collective bargaining agreements.</p>
	</li>
</ul>
<h3 data-path-to-node="3"><strong data-path-to-node="3" data-index-in-node="0">Equity</strong></h3>
<p data-path-to-node="4">This role is eligible to participate in Cloudflare’s equity plan.</p>
<div class="content-conclusion">
	<p><strong>What Makes Cloudflare Special?</strong></p>
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