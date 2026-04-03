{
	page: {
		title: "Add a site",
		description: "Connect or transfer existing domains to Cloudflare, or buy a new domain."
	},
	paths: {
		add: {
			title: "Connect a domain",
			description: "Make your site faster, more secure, and more reliable"
		},
		transfer: {
			title: "Transfer a domain",
			description: "Move your domain to Cloudflare and save on renewals"
		},
		buy: {
			title: "Buy a domain",
			description: "Register a new domain with zero markup fees"
		}
	},
	form: {
		onboard_title: "Connect your domain",
		onboard_description: "Make your site faster, more secure, and more reliable.",
		transfer_title: "Transfer your domain",
		transfer_description: "Move your domain to Cloudflare and save on renewals.",
		transfer_banner: "To transfer your domain, your site needs to be connected to Cloudflare first. After that, you can enter your authorization code to begin the transfer.",
		domain_label: "Domain name",
		placeholder: "example.com"
	},
	advanced: {
		title: "Configure DNS records import and AI crawler preferences"
	},
	dns: {
		title: "How should DNS records be imported?",
		tooltip: "DNS records contain information about your domain and are used to make your website available to visitors.",
		scan: {
			title: "Import DNS records automatically",
			description: "We will scan for common DNS records and import them for you"
		},
		manual: {
			title: "Manually enter DNS records",
			description: "You can add DNS records manually after setup"
		},
		upload: {
			title: "Upload a DNS zone file",
			description: "Import records from a BIND format zone file"
		},
		zone_transfer: {
			title: "Set up DNS zone transfers",
			description: "Keep your primary DNS provider and use Cloudflare as a secondary DNS provider",
			tooltip: "You can keep your primary DNS provider and use Cloudflare as a secondary DNS provider."
		},
		mode_label: "DNS mode",
		primary: {
			title: "Primary DNS",
			description: "Manage your DNS records on Cloudflare."
		},
		secondary: {
			title: "Secondary DNS"
		}
	},
	bots: {
		title: "Control how AI crawlers scrape content for training",
		tooltip: "Deploys a Cloudflare-managed rule that blocks known and new AI bots.",
		block_all: {
			title: "Block AI crawlers on all pages",
			description: "AI training bots will not be able to scrape any content on your site"
		},
		block_ads: {
			title: "Block on pages with ads",
			description: "AI training bots will be blocked on pages that show ads, but allowed otherwise"
		},
		allow: {
			title: "Do not block (allow crawlers)",
			description: "AI training bots will be allowed to scrape content"
		},
		robots_txt: {
			title: "Instruct AI bot traffic with robots.txt",
			tooltip: "Creates or updates your robots.txt file to signal that your content should not be used for AI training."
		}
	},
	domain_available_modal: {
		title: "%{domainName} doesn't appear to be a registered domain",
		description: "You can continue adding this site to your Cloudflare account, or you can register this domain for %{price}. If you entered the wrong domain, you can go back and enter a new one.",
		add_site: "Add site anyway",
		register_domain: "Register domain"
	},
	unsupported_tld_modal: {
		title: ".%{tld} domains aren't supported yet",
		description: "You can't transfer this domain right now, but you can still add it to Cloudflare to improve performance and security.",
		go_back: "Go back",
		add_anyway: "Add site anyway"
	},
	hosted_platform_modal: {
		title: "Your site seems to be built on %{platformName}",
		description: "%{platformName} doesn't support direct domain transfers to Cloudflare. You can still transfer your site, but you need to transfer to another registrar first and wait 60 days.",
		already_cloudflare: "Your site is already benefiting from Cloudflare's network through %{platformName}'s integration.",
		see_transfer_options: "See transfer options",
		not_using: "Not using %{platformName}?",
		add_site: "Add site to Cloudflare"
	},
	already_onboarded: {
		title: "%{domain} is already active on Cloudflare",
		body: "This site has been added to this Cloudflare account already.",
		transfer_already_registered_body: "%{domain} is already active and transferred to Cloudflare Registrar.",
		go_back: "Go back",
		go_to_domain: "Manage %{domain}"
	},
	errors: {
		empty_domain: "Enter a domain name",
		generic: "Please enter a valid domain",
		already_exists: "That domain has already been added to your account. Go to <0>%{domainName}</0> overview",
		zone_held: "The zone name provided is <0>subject to a hold</0> which disallows the creation of this zone. Please contact the owner of the Cloudflare account that manages this domain to have the hold removed."
	},
	common: {
		back: "Back",
		continue: "Continue",
		change: "Change",
		learn_more: "Learn more",
		recommended: "Recommended",
		most_common: "Most common",
		advanced: "Advanced",
		close: "Close"
	}
}