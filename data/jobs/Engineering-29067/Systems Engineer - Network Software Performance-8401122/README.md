<div class="content-intro">
	<h3>About Us</h3>
	<p>At Cloudflare, we are on a mission to help build a better Internet. Today the company runs one of the world’s largest networks that powers millions of websites and other Internet properties for customers ranging from individual bloggers to SMBs to Fortune 500 companies. Cloudflare protects and accelerates any Internet application online without adding hardware, installing software, or changing a line of code. Internet properties powered by Cloudflare all have web traffic routed through its intelligent global network, which gets smarter with every request. As a result, they see significant improvement in performance and a decrease in spam and other attacks. Cloudflare was named to Entrepreneur Magazine’s Top Company Cultures list and ranked among the World’s Most Innovative Companies by Fast Company.</p>
	<p>At Cloudflare, we’re not looking for people who wait for a polished roadmap; we’re looking for the builders who see the cracks in the Internet that everyone else has simply learned to live with. We value candidates who have the instinct to spot a "normalized" problem and the AI-native curiosity to create a solution using the latest tools. Our culture is built on iteration, leveraging AI to ship faster today to make it better tomorrow, while ensuring that every improvement, no matter how small, is shared across the team to lift everyone up. If you’re the type of person who values curiosity over bureaucracy, and that AI is a partner in solving tough problems to keep the Internet moving forward, you’ll fit right in.</p>
</div>
<p><strong>Locations: Austin TX, Champaign IL, Lisbon Portugal, London England, Atlanta GA, Washington DC,&nbsp;</strong></p>
<h2>About the team</h2>
<p>Cloudflare is redefining the way networks are run at scale, and some of the largest networks in the world now run their traffic through us. Cloudflare's network runs in hundreds of cities on general-purpose Linux servers, not dedicated routers, so the routers, firewalls, load balancers, and proxies that carry our customers' traffic are software that we write, ship, and operate ourselves.</p>
<p>Our Packet Processing team builds and operates that software: high-performance code that processes customer traffic at the packet level as it moves through Cloudflare's network, in every Cloudflare data center. That includes the L4 load balancer at the front door of every server, a per-customer routing and forwarding data plane, a stateful network firewall, and a TCP/UDP reverse proxy (the engines behind products like Magic Transit, Cloudflare WAN, Cloudflare Network Firewall, and Spectrum).</p>
<p>We are a team of engineers who obsess over performance, correctness, and reliability at massive scale. We own what we build in production, a lot of our work happens close to the kernel and the NIC.</p>
<h2>About the role</h2>
<p>For us, performance is a product feature. Customers notice single-flow throughput, packet loss, and latency right away, and every CPU cycle we spend on a packet is multiplied across every server in our network. We're looking for engineers who love finding out where the time goes, and then making it go away.</p>
<p>Some of the things you'd work on:</p>
<ul>
	<li>Pushing single large flows (e.g., one tunnel carrying a customer's whole data center) to multiple Gbps and beyond, and making that performance consistent</li>
	<li>Finding out exactly where packets get dropped and why: NIC queues, interrupts and softirq, XDP, veth and namespaces, userspace rings, and everything in between</li>
	<li>CPU placement: NUMA, RSS, core isolation, and steering traffic to the right cores on servers that also run many other services</li>
	<li>Cutting the CPU cost per packet in hot paths written in Rust, C, and Go: batching, cache-friendly data structures, fewer copies, fewer locks</li>
	<li>Measuring all of it: profiling with perf, eBPF tracing, and flame graphs; continuous profiling across the fleet; benchmarks in the lab and careful experiments in production</li>
	<li>Building the benchmark and test tooling that keeps performance regressions from shipping</li>
	<li>Helping shape a unified data plane platform so that it's fast from the start</li>
</ul>
<p>We write mostly Go and Rust (plus C for eBPF) on Linux, and the work ranges from NIC configuration and the kernel network stack to userspace packet pipelines.</p>
<p>You'll build, deploy, and operate these systems on top of one of the largest edge networks in the world. You'll partner with some of the best engineers and product managers, on our team and across Cloudflare, to solve big problems that have a meaningful impact in the lives of our customers and users.</p>
<p>We're looking for curious, empathetic engineers who are excited to join us in changing the way networking is done!</p>
<h2>Examples of desirable skills, knowledge, and experience</h2>
<ul>
	<li>Systems programming experience in Rust, Go, C, or C++</li>
	<li>Performance analysis on Linux: perf, eBPF-based tracing (e.g., bpftrace, BCC), flame graphs, hardware counters</li>
	<li>A working model of modern CPUs and memory: caches, NUMA, branch prediction, SIMD, and how they show up in a profile</li>
	<li>Knowledge of how packets move through Linux: NIC queues, RSS, NAPI, GRO/GSO, softirq, and the socket layer</li>
	<li>Experience making high-throughput or low-latency systems faster, and proving it with good measurements</li>
	<li>A solid understanding of L3 and L4 networking: IP, TCP, UDP, and tunneling</li>
	<li>Building and operating large-scale, reliable, distributed systems</li>
	<li>Operating what you build: on-call, incident response, and root cause analysis</li>
	<li>Reading unfamiliar code and safely evolving systems that have been in production for years</li>
	<li>Owning work end to end, from design through deployment, and working across teams to land shared solutions</li>
	<li>Clear written and verbal communication; we design in written specs and review each other's work</li>
</ul>
<h2>Bonus points</h2>
<ul>
	<li>Tuning AF_XDP, DPDK, or other kernel-bypass systems</li>
	<li>Low-latency backgrounds such as trading systems, HPC, games, or storage</li>
	<li>Go runtime or Rust async performance work</li>
	<li>NIC offloads and features (e.g., checksum, TSO/LRO, flow steering, SR-IOV)</li>
	<li>Contributions to the Linux kernel or open-source performance tooling</li>
</ul>
<h3 data-path-to-node="1"><strong data-path-to-node="1" data-index-in-node="0">Compensation</strong></h3>
<ul data-path-to-node="2">
	<li>
		<p data-path-to-node="2,0,0">Compensation may be adjusted depending on work location.</p>
	</li>
	<li>
		<p data-path-to-node="2,1,0">For Champaign IL based hires: Estimated annual salary of $168,000 - $210,000.</p>
	</li>
	<li>
		<p data-path-to-node="2,2,0">For Washington, DC based hires: Estimated annual salary of $185,000 - $230,000.</p>
	</li>
	<li>
		<p data-path-to-node="2,3,0">For Seattle, WA based hires: Estimated annual salary of $185,000 - $230,000.</p>
	</li>
</ul>
<ul data-path-to-node="4">
	<li>
		<p data-path-to-node="4,0,0">For Portugal based hires: Estimated annual salary is between €66,000 - 83,000.</p>
	</li>
</ul>
<h3 data-path-to-node="5"><strong data-path-to-node="5" data-index-in-node="0">Equity</strong></h3>
<ul data-path-to-node="6">
	<li>
		<p data-path-to-node="6,0,0">This role is eligible to participate in Cloudflare's equity plan.</p>
	</li>
</ul>
<h3 data-path-to-node="7"><strong data-path-to-node="7" data-index-in-node="0">Benefits</strong></h3>
<ul data-path-to-node="8">
	<li>
		<p data-path-to-node="8,0,0">Cloudflare offers a complete package of benefits and programs to support you and your family. Our benefits programs can help you pay health care expenses, support caregiving, build capital for the future and make life a little easier and fun! The below is a description of our benefits for employees in the United States, and benefits may vary for employees based outside the U.S.</p>
	</li>
	<li>
		<p data-path-to-node="8,1,0">Health &amp; Welfare Benefits</p>
		<ul data-path-to-node="8,1,1">
			<li>
				<p data-path-to-node="8,1,1,0,0">Medical/Rx Insurance</p>
			</li>
			<li>
				<p data-path-to-node="8,1,1,1,0">Dental Insurance</p>
			</li>
			<li>
				<p data-path-to-node="8,1,1,2,0">Vision Insurance</p>
			</li>
			<li>
				<p data-path-to-node="8,1,1,3,0">Flexible Spending Accounts</p>
			</li>
			<li>
				<p data-path-to-node="8,1,1,4,0">Commuter Spending Accounts</p>
			</li>
			<li>
				<p data-path-to-node="8,1,1,5,0">Fertility &amp; Family Forming Benefits</p>
			</li>
			<li>
				<p data-path-to-node="8,1,1,6,0">On-demand mental health support and Employee Assistance Program</p>
			</li>
			<li>
				<p data-path-to-node="8,1,1,7,0">Global Travel Medical Insurance</p>
			</li>
		</ul>
	</li>
	<li>
		<p data-path-to-node="8,2,0">Financial Benefits</p>
		<ul data-path-to-node="8,2,1">
			<li>
				<p data-path-to-node="8,2,1,0,0">Short and Long Term Disability Insurance</p>
			</li>
			<li>
				<p data-path-to-node="8,2,1,1,0">Life &amp; Accident Insurance</p>
			</li>
			<li>
				<p data-path-to-node="8,2,1,2,0">401(k) Retirement Savings Plan</p>
			</li>
			<li>
				<p data-path-to-node="8,2,1,3,0">Employee Stock Participation Plan</p>
			</li>
		</ul>
	</li>
	<li>
		<p data-path-to-node="8,3,0">Time Off</p>
		<ul data-path-to-node="8,3,1">
			<li>
				<p data-path-to-node="8,3,1,0,0">Flexible paid time off covering vacation and sick leave</p>
			</li>
			<li>
				<p data-path-to-node="8,3,1,1,0">Leave programs, including parental, pregnancy health, medical, and bereavement leave</p>
			</li>
		</ul>
	</li>
</ul>
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