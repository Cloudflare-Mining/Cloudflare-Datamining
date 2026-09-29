<div class="content-intro">
	<h3>About Us</h3>
	<p>At Cloudflare, we are on a mission to help build a better Internet. Today the company runs one of the world’s largest networks that powers millions of websites and other Internet properties for customers ranging from individual bloggers to SMBs to Fortune 500 companies. Cloudflare protects and accelerates any Internet application online without adding hardware, installing software, or changing a line of code. Internet properties powered by Cloudflare all have web traffic routed through its intelligent global network, which gets smarter with every request. As a result, they see significant improvement in performance and a decrease in spam and other attacks. Cloudflare was named to Entrepreneur Magazine’s Top Company Cultures list and ranked among the World’s Most Innovative Companies by Fast Company.</p>
	<p>At Cloudflare, we’re not looking for people who wait for a polished roadmap; we’re looking for the builders who see the cracks in the Internet that everyone else has simply learned to live with. We value candidates who have the instinct to spot a "normalized" problem and the AI-native curiosity to create a solution using the latest tools. Our culture is built on iteration, leveraging AI to ship faster today to make it better tomorrow, while ensuring that every improvement, no matter how small, is shared across the team to lift everyone up. If you’re the type of person who values curiosity over bureaucracy, and that AI is a partner in solving tough problems to keep the Internet moving forward, you’ll fit right in.</p>
</div>
<h3>Available Locations: Austin, London, or Lisbon (Hybrid)</h3>
<h3 id="JD—SeniorSoftwareEngineer,PKI&amp;CryptographicSystems(MergedDraft)-Abouttherole">About the role</h3>
<p>TLS is the connective tissue of the Internet, and Cloudflare terminates a large fraction of it. Every day our network handles tens of millions of certificate operations across products like Universal SSL, SSL for SaaS, Origin CA, Cloudflare Access, and Cloudflare Tunnel — and the WebPKI ecosystem underneath all of it is undergoing its largest structural change in a generation: shorter certificate lifetimes, a shift toward post-quantum-safe signature algorithms, and new automation and trust-establishment mechanisms on the horizon.</p>
<p>We are investing in the next generation of Cloudflare’s PKI and cryptographic infrastructure to keep up with, and stay ahead of, that shift. As a Senior Software Engineer on this team, you will design and build the systems that manage certificate lifecycles, protect and use private keys at scale, integrate with hardware security modules, automate issuance and renewal, and take Cloudflare’s cryptographic stack into the post-quantum era. You will work at the intersection of applied cryptography, distributed systems, and security engineering — on infrastructure that a large fraction of the Internet quietly depends on.</p>
<p>This is an early-days role on a growing team. The design decisions you make in the first year will shape how Cloudflare’s certificate and key infrastructure operates for years to come.</p>
<h3 id="JD—SeniorSoftwareEngineer,PKI&amp;CryptographicSystems(MergedDraft)-Responsibilities">Responsibilities</h3>
<ul>
	<li><strong>Design and build core PKI systems</strong>&nbsp;— certificate lifecycle management, X.509 issuance and validation logic, key parameter enforcement, and policy engines aligned with industry standards including CA/Browser Forum guidance and browser root program policies.</li>
	<li><strong>Own the cryptographic core.</strong>&nbsp;Integrate with FIPS 140-2 Level 3 (and, where required, Level 4) HSMs via PKCS#11 and vendor-native SDKs; build key ceremony and key-lifecycle tooling; enforce strict key-usage boundaries in code.</li>
	<li><strong>Automate at scale.</strong>&nbsp;Build and evolve ACME-based issuance and renewal pipelines, short-lived certificate rotation, and revocation mechanisms that serve at Cloudflare’s global scale.</li>
	<li><strong>Instrument transparency and audit trails.</strong>&nbsp;Integrate with Certificate Transparency, build append-only tamper-evident logging, and design evidence pipelines that hold up to rigorous third-party audit.</li>
	<li><strong>Maintain accreditation and respond to a changing compliance landscape.</strong>&nbsp;PKI operations must maintain compliance under CA/B Forum, WebTrust, and root store program frameworks. You will be aware of, and adapt to, changes in relevant policies, participate in public incident disclosure and discourse, and participate in regular third-party audits.</li>
	<li><strong>Represent Cloudflare in the WebPKI community.</strong>&nbsp;Write public CA incident reports and serve as a primary contact with the WebPKI community; clear technical writing is core to this role.</li>
	<li><strong>Ship the post-quantum future.</strong>&nbsp;Contribute to Cloudflare’s ongoing post-quantum migration — including work on post-quantum encryption and authentication — so that Cloudflare’s cryptographic infrastructure stays ahead of the transition.</li>
	<li><strong>Own code end-to-end</strong>&nbsp;from design through production incident response. Cryptographic infrastructure cannot silently fail; you will build the observability, runbooks, and on-call posture that keep the service inside SLO.</li>
	<li><strong>Partner across the org</strong>&nbsp;— with the SSL/TLS product teams, the HSM and data-centre infrastructure teams, the Cloudflare Research applied cryptography group, and adjacent product teams that consume PKI as a platform.</li>
	<li><strong>Raise the bar.</strong>&nbsp;Mentor other engineers joining an early-stage team, run design reviews, and establish the engineering standards, threat models, and secure-development practices this team will operate under for years.</li>
</ul>
<h3 id="JD—SeniorSoftwareEngineer,PKI&amp;CryptographicSystems(MergedDraft)-DesirableSkills,Knowledge&amp;Experience">Desirable Skills, Knowledge &amp; Experience</h3>
<ul>
	<li><strong>5+ years of production systems software experience,</strong>&nbsp;with a strong operational track record — you have carried a pager for something people depend on.</li>
	<li><strong>Deep working knowledge of applied cryptography and PKI.</strong>&nbsp;X.509, ASN.1/DER, RFC 5280, CRL distribution, Certificate Transparency, ACME, and the CA/Browser Forum Baseline Requirements. You do not need to be a cryptographer, but you need to reason precisely about certificate profiles, key parameters, and issuance policy.</li>
	<li><strong>Familiarity with HSMs.</strong>&nbsp;PKCS#11 integration, key ceremonies, key-attestation flows, and understanding of what FIPS 140-2/3 validation actually means in production.</li>
	<li><strong>Strong systems programming background</strong>&nbsp;in at least one of Go, Rust, or C/C++.</li>
	<li><strong>Distributed systems fluency</strong>&nbsp;— you have built or operated globally replicated, availability-critical services with strict correctness guarantees.</li>
	<li><strong>Experience designing and operating database schemas for high-integrity systems</strong>&nbsp;(Postgres or equivalent).</li>
	<li><strong>Security-hardened system design instincts</strong>&nbsp;— threat modelling, defence in depth, least privilege, and secure key handling.</li>
	<li><strong>Comfort with high-consequence work.</strong>&nbsp;A mis-issued or mis-revoked certificate is a public, industry-visible event. You need the temperament to move quickly and the discipline to be careful.</li>
</ul>
<h3 id="JD—SeniorSoftwareEngineer,PKI&amp;CryptographicSystems(MergedDraft)-BonusPoints">Bonus Points</h3>
<ul>
	<li>Direct experience working on or with a publicly-trusted or private CA, or a large-scale internal PKI (Let’s Encrypt / Boulder, Google Trust Services, DigiCert, Sectigo, ISRG, Entrust, Microsoft PKI, HashiCorp Vault PKI, step-ca, CFSSL, or an internal CA at scale).</li>
	<li>Experience with&nbsp;<code>crypto/x509</code>, BoringSSL, OpenSSL/AWS-LC, CFSSL, or an equivalent PKI codebase.</li>
	<li>Experience with WebTrust for CAs / WebTrust BR / WebTrust Network Security audit engagements.</li>
	<li>Familiarity with post-quantum cryptography — ML-DSA, ML-KEM, hybrid signature schemes, and the current state of PQ signature standardisation.</li>
	<li>Familiarity with emerging browser trust-establishment proposals (e.g. Merkle Tree Certificates).</li>
	<li>Prior participation in the CA/Browser Forum, IETF LAMPS / TLS / PLANTS / PQUIP working groups, the transparency.dev community, or a browser root program review.</li>
	<li>Experience running or automating offline key ceremonies.</li>
	<li>Experience operating Certificate Transparency log infrastructure or CT monitoring at scale.</li>
	<li>Familiarity with formal methods, differential fuzzing, or property-based testing for cryptographic protocol code.</li>
	<li>Kubernetes experience.</li>
</ul>
<h4 data-path-to-node="0"><strong data-path-to-node="0" data-index-in-node="0">Compensation</strong></h4>
<ul data-path-to-node="1">
	<li>
		<p data-path-to-node="1,0,0">For Portugal based hires: Estimated annual salary is between €66,000 - €83,000.</p>
	</li>
</ul>
<h4 data-path-to-node="2"><strong data-path-to-node="2" data-index-in-node="0">Equity</strong></h4>
<ul data-path-to-node="3">
	<li>
		<p data-path-to-node="3,0,0">This role is eligible to participate in Cloudflare's equity plan.</p>
	</li>
</ul>
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