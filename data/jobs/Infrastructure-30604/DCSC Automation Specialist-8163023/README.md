<div class="content-intro">
	<h3>About Us</h3>
	<p>At Cloudflare, we are on a mission to help build a better Internet. Today the company runs one of the world’s largest networks that powers millions of websites and other Internet properties for customers ranging from individual bloggers to SMBs to Fortune 500 companies. Cloudflare protects and accelerates any Internet application online without adding hardware, installing software, or changing a line of code. Internet properties powered by Cloudflare all have web traffic routed through its intelligent global network, which gets smarter with every request. As a result, they see significant improvement in performance and a decrease in spam and other attacks. Cloudflare was named to Entrepreneur Magazine’s Top Company Cultures list and ranked among the World’s Most Innovative Companies by Fast Company.</p>
	<p>At Cloudflare, we’re not looking for people who wait for a polished roadmap; we’re looking for the builders who see the cracks in the Internet that everyone else has simply learned to live with. We value candidates who have the instinct to spot a "normalized" problem and the AI-native curiosity to create a solution using the latest tools. Our culture is built on iteration, leveraging AI to ship faster today to make it better tomorrow, while ensuring that every improvement, no matter how small, is shared across the team to lift everyone up. If you’re the type of person who values curiosity over bureaucracy, and that AI is a partner in solving tough problems to keep the Internet moving forward, you’ll fit right in.</p>
</div>
<p><strong>Available Locations: Austin</strong></p>
<p><strong>Position Overview</strong></p>
<p>Cloudflare is looking for an Automation Specialist to transform how our global Data Center Security Compliance (DCSC) team operates. This critical role is part of the Infrastructure Operations organization, which is responsible for building, scaling, and running Cloudflare's data center and network infrastructure across 700+ sites worldwide.</p>
<p>The DCSC team manages physical access control and compliance auditing across one of the most complex and distributed infrastructure footprints in the industry, spanning more than 105 vendor portals, hundreds of non-portal carrier-neutral and edge partner sites, and multiple regulatory frameworks including SOC 2, ISO 27001, FedRAMP, ISMAP, and IRAP. The operational burden of this work is substantial and largely manual: user lists are pulled by hand, access control lists are reconciled by eye, evidence packages are assembled ticket by ticket, and attestation cycles consume weeks of coordinator time every quarter.</p>
<p>This role exists to change that. The DCSC Automation -Specialist will design, build, and operate AI-assisted and automated workflows that eliminate the most time-consuming manual work in the DCSC operating model, freeing compliance coordinators to focus on exception handling, stakeholder relationships, and regulatory judgment rather than data gathering and reconciliation.</p>
<p>This is a builder role. You will interview the team to understand each workflow, identify the highest-leverage automation targets, and ship tooling that demonstrably reduces the time it takes to close a QAR cycle, produce an audit evidence package, or manage a batch of access provisioning requests. You will work in close partnership with the DCSC coordinators, and existing automation developers, and will own the DCSC operational tooling roadmap.</p>
<p><strong>Key Responsibilities</strong></p>
<ol>
	<li><strong> Portal Automation &amp; User List Extraction</strong></li>
</ol>
<ul>
	<li>Browser Automation: Design and maintain automated scripts (Playwright, Puppeteer, or equivalent) that log into vendor data center portals, extract user access lists, and feed structured output into the DCSC Portal and comparison pipelines replacing manual portal-by-portal data collection across 105+ portals covering 338+ sites.</li>
	<li>Resilience &amp; Coverage: Build fallback handling for portals that block or rate-limit automated access; document exceptions and maintain a coverage registry tracking automation status per portal.</li>
	<li>Scheduled Execution: Operationalize extraction jobs on a recurring cadence aligned to QAR and MAR cycles, with alerting for failures and drift.</li>
</ul>
<ol>
	<li><strong> ACL Reconciliation &amp; Diff Engine</strong></li>
</ol>
<ul>
	<li>Automated Comparison: Build tooling that ingests portal-extracted user lists and compares them against the master Access Control List (ACL), automatically surfacing discrepancies: users present in a portal but absent from the ACL, users on the ACL without active portal access, and role or access-level mismatches.</li>
	<li>Exception-Only Output: Route confirmed discrepancies directly to pre-populated Jira tickets for human review and action, eliminating the need for coordinators to perform full manual review of every user record each quarter.</li>
	<li>Audit Trail: Ensure all comparison runs produce immutable, timestamped records suitable for SOC 2, ISO 27001, and FedRAMP evidence requirements.</li>
</ul>
<ol>
	<li><strong> Attestation &amp; Evidence Automation</strong></li>
</ol>
<ul>
	<li>Attestation Module: Own and extend the attestation workflow within the DCSC Portal, including automated cycle triggering, manager notification, time-stamped confirmation capture, and exception escalation, replacing manual screenshot-based evidence gathering.</li>
	<li>Evidence Package Builder: Build automated pipelines that compile audit-ready evidence packages for SOC 2, ISO 27001, FedRAMP, ISMAP, and IRAP control cycles, pulling attestation logs, portal extraction results, diff reports, and correspondence into structured packages keyed to specific control IDs.</li>
	<li>GRC Alignment: Work directly with GRC counterparts to validate that automated evidence formats meet auditor and regulatory requirements before deployment.</li>
</ul>
<ol>
	<li><strong> AI-Assisted Anomaly Detection &amp; Triage</strong></li>
</ol>
<ul>
	<li>Access Pattern Analysis: Implement LLM-based review passes over QAR cycle output to surface patterns warranting human escalation: former employees retaining access, access creep over time, dormant accounts, and anomalous role assignments across sites.</li>
	<li>Ticket Intelligence: Build automation that reads incoming Jira onboarding and offboarding tickets and generates structured, portal-specific action checklists reducing coordinator cognitive load and preventing missed steps across multi-portal provisioning workflows.</li>
	<li>Continuous Improvement: Monitor automation output quality over time, retrain or recalibrate models as portal structures change, and maintain a feedback loop with coordinators on false positives and missed detections.</li>
</ul>
<ol>
	<li><strong> DCSC Portal Ownership &amp; Tooling Roadmap</strong></li>
</ol>
<ul>
	<li>Platform Stewardship: Own the DCSC Portal as the operational runtime for all automation and workflow tooling ensuring it remains stable, documented, and usable by coordinators without engineering support for day-to-day tasks.</li>
	<li>Roadmap Management: Maintain a prioritized backlog of automation opportunities, assessed by time savings, compliance impact, and implementation complexity; present quarterly progress and priorities to DCSC leadership.</li>
	<li>Documentation: Produce runbooks for every automation, ensuring that no operational capability lives only in one person's head or on a local machine.</li>
</ul>
<p><strong>Desirable skills / Experience:</strong></p>
<ul>
	<li>Automation Engineering: Demonstrated experience building browser automation (Playwright, Puppeteer, Selenium, or equivalent) against real-world web applications, including handling authentication flows, dynamic content, and anti-bot mitigations.</li>
	<li>TypeScript Proficiency: Strong skills for scripting, data wrangling, structured file I/O, and API integration. Ability to write maintainable, documented code that non-engineers can operate.</li>
	<li>LLM Integration: Hands-on experience integrating LLM APIs (OpenAI, Anthropic, Google, or equivalent) into production workflows for classification, drafting, summarization, or anomaly detection tasks.</li>
	<li>Data Engineering Fundamentals: Comfort working with structured and semi-structured data at scale, diffing datasets, normalizing inconsistent formats, and producing clean outputs for downstream audit use.</li>
	<li>API &amp; Workflow Integration: Experience building integrations with ticketing or ITSM systems (Jira preferred) via REST API, including automated ticket creation, status updates, and attachment handling.</li>
	<li>Systems Thinking: Ability to map an end-to-end manual workflow, identify the highest-leverage automation insertion points, and ship incrementally without waiting for a perfect solution.</li>
	<li>Workflow Archaeology: Comfortable extracting process knowledge from subject-matter experts through structured interviews turning tribal knowledge into documented, automatable workflows.</li>
	<li>Bias Toward Simplicity: Strong product intuition for the minimum viable automation that delivers real time savings, rather than over-engineering for edge cases.</li>
	<li>Compliance Awareness: Appreciation for the stakes of accuracy in a compliance context, understanding that an incorrect ACL diff or a missing evidence artifact has real audit consequences.</li>
</ul>
<p><strong>Soft Skills:</strong></p>
<ul>
	<li>Communication: Able to explain automation design decisions and tradeoffs clearly to non-technical stakeholders including compliance coordinators and GRC partners.</li>
	<li>Ambiguity Tolerance: Vendor portals don't come with documentation. Workflows are passed down verbally. You need to be energized by figuring things out from scratch.</li>
	<li>Preferred Qualifications</li>
	<li>Experience with Cloudflare Workers or similar edge compute platforms</li>
	<li>Familiarity with GRC/compliance frameworks (SOC 2, FedRAMP, ISO 27001) at an operational level — not as an auditor, but enough to understand why evidence integrity matters</li>
	<li>RPA tooling experience (UiPath, Power Automate) as fallback for portals that defeat headless browsers</li>
	<li>Prior work in infrastructure operations, data center, or physical security environments</li>
	<li>Experience building internal tooling or developer-facing portals (not just scripts)</li>
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