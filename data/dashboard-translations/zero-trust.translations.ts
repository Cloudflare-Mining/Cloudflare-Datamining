{
	common: {
		heading: "Zero Trust",
		widgetHeading: "Zero trust security",
		api_error: "An error occurred while retrieving account information. Refresh the page to try again.",
		permission_denied_error: "You do not have Zero Trust permissions. Contact your account administrator for more details.",
		documentationLabel: "Zero Trust documentation",
		subheading: "Replace legacy security perimeters with Cloudflare's global network. Zero Trust tools help make the Internet faster and safer for both teams and home networks."
	},
	zeroTrustView: {
		teamName: (0, o.p)(s(), "teamName"),
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
			seats: "Used / total seats",
			access: "Access controls applications",
			integrations: "SaaS integrations",
			casb: "Cloud and SaaS findings",
			http: "Gateway HTTP policies",
			dns: "DNS policies",
			network: "Gateway network policies",
			tunnels: "Tunnels"
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
			zeroTrust: (0, o.p)(i(), "plan"),
			access: (0, o.p)(l(), "plan"),
			gateway: (0, o.p)(c(), "plan")
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
			noPermissionError: (0, o.p)(u(), "label"),
			otherErrors: (0, o.p)(d(), "label")
		}
	},
	landingPage: {
		header: {
			title: "Welcome to Cloudflare Zero Trust",
			subtitle: "Protect your internal users, apps, networks, and data with Zero Trust security."
		},
		actions: {
			get_started: "Get started",
			documentation: "Zero Trust documentation"
		},
		sections: {
			getting_started: {
				title: "Get started with Zero Trust"
			},
			about: {
				title: "About Zero Trust",
				description: "Replace legacy security tools with faster, more consistent security controls delivered from Cloudflare's global network — scalable yet intuitive enough for both enterprise administration and DIY home networks."
			},
			core_features: {
				title: "Core features",
				manage_access: "Manage access to web, SaaS, and private apps with granular, contextual controls",
				stop_threats: "Stop application and network layer threats before they reach your network",
				scan_data: "Scan for sensitive data at rest, in transit, and in use across your organization"
			},
			plans: {
				title: "Included in all plans",
				remote_access: "Zero Trust remote access",
				traffic_filtering: "Device traffic filtering",
				api_access: "API and Terraform access",
				explore_plans: "Explore plans"
			}
		}
	}
}