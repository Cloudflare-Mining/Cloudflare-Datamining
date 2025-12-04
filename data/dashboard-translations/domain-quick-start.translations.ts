{
	header: {
		title: "Quick start guide",
		description: (0, i.p)(s(), "zoneName")
	},
	buttons: {
		hide: "Hide",
		dismiss: "Do not show again"
	},
	sections: {
		plan: {
			header: (0, i.p)(a(), "planName"),
			description: "Several features are on by default, including CDN/caching, DDoS protection, SSL/TLS, and WAF. Explore other features included in your plan below and in the menu.",
			information: (0, i.p)(l()),
			tabs: {
				security: {
					header: "Security",
					description: (0, i.p)(c())
				},
				performance: {
					header: "Performance",
					description: (0, i.p)(d())
				}
			}
		},
		messages: {
			max_rules_exceeded: (0, i.p)(u(), "zonePlan"),
			rule_deployed: (0, i.p)(p())
		},
		configurations: {
			header: "Feature",
			actionTitle: "Activate?",
			activationButton: "Activate",
			user_has_no_permission: "You don't have permission to use this feature. To get permission, please contact your account administrator.",
			always_use_https: {
				title: "Always use HTTPS",
				description: "Protect your users and data, and avoid browser security warnings by redirecting all HTTP (unencrypted) requests to the HTTPS (encrypted) equivalent."
			},
			automatic_https_rewrites: {
				title: "Automatic HTTPS Rewrites",
				description: "Increase security and prevent “mixed content” errors and by automatically rewriting linked URLs from HTTP (unencrypted) to HTTPS (encrypted) if available."
			},
			bot_fight_mode: {
				title: "Bot Fight Mode",
				description: "Challenge known bots that may carry out attacks. Defend against threats like content scraping, click fraud, and credential stuffing by challenging simple bots with known traffic signatures."
			},
			super_bot_fight_mode: {
				title: "Super Bot Fight Mode",
				business_description: "Block AI bots and challenge complex bots using machine learning and prevent threats like content scraping using the standard configuration of Super Bot Fight Mode.",
				pro_description: "Block AI bots and challenge bots from any source that may carry out attacks like content scraping and credential stuffing using the standard configuration of Super Bot Fight Mode.",
				footer: (0, i.p)(m())
			},
			page_shield: {
				title: "Page Shield",
				description: "Ensure the safety and privacy of your visitors by monitoring third-party scripts, connections, and cookies loaded in web browsers."
			},
			managed_rules: {
				title: "Cloudflare Managed Ruleset for WAF",
				description: "Minimize security risk from new attack types as they are identified by deploying the constantly updated, Cloudflare Managed Ruleset."
			},
			leaked_credentials: {
				title: "Leaked credentials mitigation",
				description: "Turn on leaked credentials detection and deploy a rate limiting rule to meter the number of requests from IP addresses attempting to use leaked or stolen passwords for 10 seconds."
			},
			owasp_managed_rules: {
				title: "OWASP Core Ruleset for WAF",
				description: "Block common, yet critical attack types like cross-site scripting (XSS) and SQL injection (SQLi) by deploying the OWASP Core Ruleset."
			},
			attack_score: {
				title: "WAF Attack Score Lite",
				description: "Block previously unknown threats scored as attacks by creating a custom rule based on WAF Attack Score Lite's machine learning."
			},
			always_online: {
				title: "Always Online™",
				description: "Allow visitors to access your domain even when your origin server is unavailable by serving limited copies of pages from the Internet Archive's Wayback Machine.",
				supplementalDetails: (0, i.p)(f())
			},
			speed_optimization: {
				title: "Speed optimizations",
				description: "Improve page load times by enabling tools like most likely next page prefetch and resumed connections for returning visitors.",
				paid_description: "Improve page load times by enabling tools like automatic image compression, prioritized loading of key site assets, and most likely next page prefetch."
			}
		},
		customization: {
			header: "Customize and test your configuration",
			how_cloudflare_interact: {
				header: "Learn",
				title: "How Cloudflare products interact with your HTTP traffic",
				description: (0, i.p)(h(), "zoneName"),
				traffic_sequence: "Traffic Sequence"
			},
			rules: {
				title: "Cloudflare Rules",
				description: "Modify HTTP requests and responses, perform URL redirects, configure settings, and trigger actions for matching requests."
			},
			trace: {
				title: "Trace",
				description: "Simulate an HTTP request to understand the impact of your Cloudflare configurations."
			}
		},
		monitor: {
			header: "Monitor traffic and threats",
			rum: {
				title: "Web Analytics/RUM",
				description: "View web page performance as experienced by your visitors with real-user measurements."
			},
			observatory: {
				title: "Observatory",
				description: "Find ways to improve performance by running tests with synthetic data."
			},
			analytics: {
				title: "Analytics & Logs",
				description: "Review requests processed by Cloudflare to assess trends and tune your configuration."
			},
			security: {
				title: "Security Analytics",
				description: "Review threat indicators such as traffic spikes and likelihood of attackers or bots."
			}
		},
		notification: {
			header: "Get notified",
			card: {
				title: "Notifications",
				description: "Set up alerts for billing, DDoS attacks, origin health, and more via email, Webhooks, or PagerDuty."
			}
		}
	},
	accessibility: {
		feature_title: "Feature title",
		documentation_link_feature: "documentation link for feature",
		description: "description",
		book_icon: "book icon",
		toggle_section: "section toggle",
		toggle: "toggle",
		supplemental_terms: "supplemental terms"
	}
}