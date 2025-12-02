{
	common: {
		heading: "Zero Trust",
		api_error: "An error occurred while retrieving account information. Refresh the page to try again.",
		permission_denied_error: "You do not have Zero Trust permissions. Contact your account administrator for more details.",
		documentationLabel: "Zero Trust documentation",
		subheading: "Replace legacy security perimeters with Cloudflare's global network. Zero Trust tools help make the Internet faster and safer for both teams and home networks."
	},
	zeroTrustView: {
		teamName: (0, o.p)(a(), "teamName"),
		zeroTrustHomeLink: "Go to Zero Trust",
		zeroTrustUsersLink: "Manage active users",
		zeroTrustAnalyticsLink: "View detailed analytics",
		zeroTrustPlanLink: "View plan",
		addMenu: {
			users: "Users",
			devices: "Devices",
			applications: "Applications",
			networkConnectors: "Network connectors",
			networkRoutes: "Network routes",
			resolversAndProxies: "Resolvers & proxies"
		},
		analytics: {
			seats: "Used seats / Total seats",
			access: "Access applications",
			integrations: "SaaS integrations",
			casb: "CASB findings",
			http: "Gateway HTTP policies",
			dns: "Gateway DNS policies",
			network: "Gateway network policies",
			tunnels: "Cloudflare Tunnels"
		},
		products: {
			title: "Explore Zero Trust products",
			sections: {
				access: "Secure Access",
				networking: "Networking",
				traffic: "Traffic",
				data: "Data security",
				insights: "Insights"
			},
			cards: s.$N
		}
	},
	onboarding: {
		pick_task: {
			heading: "What do you want to do first?",
			subheading: "We'll quickly guide you through set-up and how to get started."
		},
		select_product: {
			access: {
				heading: "Protect your applications",
				description: "Replace your traditional VPN and enforce consistent role-based user access"
			},
			gateway: {
				heading: "Protect your path to the Internet",
				description: "Scan, filter, and log all Internet-bound traffic."
			},
			tunnels: {
				heading: "Build a private network",
				description: ""
			},
			general: {
				heading: "Explore Cloudflare Zero Trust",
				description: "Discover everything Cloudflare Zero Trust has to offer."
			},
			casb: {
				heading: "Secure data in the cloud",
				description: "Protect sensitive data at rest in SaaS applications."
			},
			dlp: {
				heading: "Safeguard sensitive data",
				description: "Detect and filter sensitive data before it leaves your organization."
			}
		}
	},
	plans: {
		categories: {
			zeroTrust: (0, o.p)(c(), "plan"),
			access: (0, o.p)(l(), "plan"),
			gateway: (0, o.p)(u(), "plan")
		},
		basic: "Basic",
		premium: "Premium",
		business: "Business",
		enterprise: "Enterprise",
		enterprise_trial: "Enterprise Trial",
		premium_election: "Premium Elections",
		access_free_startup: "Free Startup",
		partners_ent: "Partners Enterprise",
		free: "Free",
		standard_free: "Standard Free",
		standard: "Standard",
		access_enterprise: "Enterprise",
		gateway_enterprise: "Enterprise",
		access: "Access",
		gateway: "Gateway",
		browser_isolation: "Browser Isolation",
		threat_isolation: "Threat Isolation",
		casb: "Cloud Access Security Broker",
		dlp: "Data Loss Prevention",
		email_security: "Email Security"
	},
	analyticsError: {
		error: "Error",
		tooltips: {
			noPermissionError: (0, o.p)(d(), "label"),
			otherErrors: (0, o.p)(p(), "label")
		}
	}
}