const navigation = {
	root: [{
		title: "navigation.root.organizations",
		url: "/organizations",
		labels: ["new"],
		iconType: "globe",
		hasPermission: M => !!(0, e.z1)("control-plane-large-orgs")(M)
	}, {
		title: "navigation.root.accounts",
		url: "/",
		iconType: "cloud-internet"
	}, {
		title: "navigation.root.websites",
		url: "/zones",
		iconType: "internet-browser"
	}, {
		title: "navigation.root.profile",
		url: "/profile",
		iconType: "user-outline"
	}, {
		title: "navigation.root.partners",
		url: "/partners/tenant",
		iconType: "carbon",
		hasPermission: M => (0, e.z1)(b.Mr)(M) && (0, z.z7)(M) && !!(0, z.z$)(M).length
	}],
	partners: [{
		title: "navigation.partners.tenant",
		url: "/partners/tenant",
		iconType: "cloudflare-magic-wan"
	}, {
		title: "navigation.partners.accounts",
		url: "/partners/account",
		iconType: "user-multi"
	}],
	profile: [{
		title: "navigation.profile.preferences",
		url: "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: M => !!(0, e.z1)("oauth-access-management")(M)
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: M => !(0, c.n3)() && !(0, e.z1)("oauth-access-management")(M)
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: M => !(0, e.z1)("oauth-access-management")(M)
	}],
	account: [{
		title: "navigation.account.home",
		url: "/home",
		iconType: "home",
		testId: "sidenav-home-link",
		hasPermission: M => !!(0, e.z1)("dashnav-developer-platform-home")(M) && !!(0, e.z1)("dx-account-zone-selector-table-view-v2")(M) && (0, o.iY)(M)
	}, {
		title: "navigation.account.home",
		url: "/",
		iconType: "home",
		testId: "sidenav-home-link",
		hasPermission: M => !!(0, e.z1)("dx-account-zone-selector-table-view-v2")(M) && (!(0, e.z1)("dashnav-developer-platform-home")(M) || !(0, o.iY)(M))
	}, {
		title: "navigation.root.websites",
		url: "/websites",
		testId: "sidenav-websites-link",
		iconType: "internet-browser",
		hasPermission: M => !(0, e.z1)("dx-account-zone-selector-table-view-v2")(M)
	}, {
		title: "navigation.account.discover",
		url: "/discover",
		testId: "sidenav-discover-link",
		iconType: "discover"
	}, {
		title: "navigation.account.registrar",
		url: "/domains",
		testId: "sidenav-domains-link",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains",
			state: {
				forceRenderIfNoDomains: !0
			}
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer"
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register"
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			labels: ["beta"],
			hasPermission: M => (0, o.gw)(M)
		}]
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		testId: "sidenav-analytics-link",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: M => (0, o.iY)(M)
		}, {
			title: "navigation.account.account_http_traffic",
			url: "/http-traffic",
			labels: ["beta"],
			hasPermission: M => (0, o.iY)(M) && !!(0, e.z1)("account-traffic-analytics")(M)
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics/all-traffic",
			hasPermission: M => (0, o.iY)(M) && (0, O.Ob)(M)
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: M => (0, o.iY)(M)
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			hasPermission: M => (0, o.iY)(M) && (0, f.S6)(M) && !!(0, e.z1)("account-logpush")(M)
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: M => (0, o.iY)(M) && !!(0, r.Le)(M, "account_analytics", "carbon_dashboard")
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			hasPermission: M => (0, o.iY)(M) && (!!(0, r.Le)(M, "account_analytics", "magic_network_monitoring") || !!(0, u.$f)(M, "rulesets.magic_transit_allowed"))
		}, {
			title: "navigation.account.dashboards",
			url: "/dashboards",
			hasPermission: M => !!(0, e.z1)("custom-dashboards")(M)
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		testId: "sidenav-security-center-link",
		hasPermission: M => (0, o.iY)(M) && (0, d.xU)(M),
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: M => (0, o.iY)(M) && (0, d.sL)(M)
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			hasPermission: M => (0, o.iY)(M) && (0, d.en)(M)
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			hasPermission: M => (0, o.iY)(M) && (0, d.en)(M)
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: M => (0, o.iY)(M) && (0, d.sL)(M)
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: M => (0, o.iY)(M) && (0, d.TT)(M)
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: M => (0, o.iY)(M) && (0, d.jD)(M)
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: M => (0, o.iY)(M) && (0, d.BU)(M) && (0, r.hI)(M)
		}, {
			title: "navigation.account.security_center.blocked_content",
			url: "/security-center/blocked-content",
			labels: ["new"],
			hasPermission: M => (0, o.iY)(M) && (0, d.XB)(M)
		}, {
			title: "navigation.account.security_center.cfone_priorities",
			url: "/cloudforce-one/priorities",
			hasPermission: M => (0, o.iY)(M) && (0, d.fs)(M)
		}, {
			title: "navigation.account.security_center.cfone_reports",
			url: "/cloudforce-one/reports",
			hasPermission: M => (0, o.iY)(M) && (0, d.Bc)(M)
		}, {
			title: "navigation.account.security_center.cfone_requests",
			url: "/cloudforce-one/requests",
			hasPermission: M => (0, o.iY)(M) && (0, d.gA)(M)
		}]
	}, {
		title: "navigation.account.request_tracer",
		url: "/trace",
		iconType: "trace",
		testId: "sidenav-trace-link",
		labels: ["beta"],
		hasPermission: k.T
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.waf",
		url: "/application-security/waf",
		iconType: "cloudflare-security-application",
		testId: "sidenav-waf-link",
		tabs: A.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: M => (0, u.Ci)(M)
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		hasPermission: M => (0, o.iY)(M) && !!(0, e.z1)("managed-challenge-ui")(M)
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.interconnects",
		url: "/interconnects",
		iconType: "cloudflare-magic-wan",
		testId: "sidenav-interconnects-link",
		hasPermission: M => !!((0, o.iY)(M) && (0, e.z1)("magic-interconnects")(M) && (!!(0, r.Le)(M, "magic_wan", "mw_home") || !!(0, r.Le)(M, "magic_transit", "mt_home")))
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		testId: "sidenav-magic-transit-link",
		hasPermission: M => (0, o.iY)(M) && !!(0, r.Le)(M, "magic_transit", "mt_home"),
		pages: [{
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-transit/configuration",
			tabs: I.Lx.concat(I.SF, I.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-transit/tunnel-healthchecks"
		}, {
			title: "account.magic.packet_captures.menu",
			url: "/magic-transit/packet-captures/captures"
		}]
	}, {
		title: "navigation.account.magic_firewall",
		url: "/network-security/magic_firewall",
		iconType: "magic-firewall",
		testId: "sidenav-magic-firewall-link",
		hasPermission: M => !!(0, o.zJ)(M),
		tabs: A.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		testId: "sidenav-ddos-link",
		hasPermission: M => {
			const R = !!(0, o.Wq)(M) && !!(0, o.fO)(M);
			return !!(0, o.us)(M) || R
		},
		tabs: A.Dn,
		pages: [{
			title: "navigation.account.l3l4.ddos.ddos_managed_rules",
			url: "/network-security/ddos",
			hasPermission: M => !!(0, o.Wq)(M) && !!(0, o.fO)(M)
		}, {
			title: "navigation.account.l3l4.ddos.ddos_protection",
			url: "/network-security/ddos-protection",
			hasPermission: M => (0, o.us)(M),
			tabs: A.O1
		}]
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/proxy-ips",
		iconType: "network",
		testId: "sidenav-ip-addresses-link",
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: M => (0, o.iY)(M) && ((0, u.$f)(M, "addressing.byoip_allowed") || !!(0, r.Le)(M, "addressing", "ip_prefixes"))
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips"
		}]
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: () => {
			const M = (0, i.e1)(),
				R = "https://one.dash.cloudflare.com";
			return M ? `${R}/${M}/` : R
		},
		iconType: "cloudflare-zero-trust",
		testId: "sidenav-zero-trust-link",
		labels: M => (0, e.z1)("zt-sidebar")(M) ? [] : ["external-link"],
		hasPermission: M => (0, o.iY)(M)
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		testId: "sidenav-magic-wan-link",
		hasPermission: M => (0, o.iY)(M) && !!(0, r.Le)(M, "magic_wan", "mw_home") || !!(0, r.Le)(M, "magic_wan", "mc_home"),
		pages: [{
			title: "navigation.account.magic_connectors.overview",
			url: "/magic-wan/overview",
			hasPermission: M => (0, o.iY)(M) && !!(0, r.Le)(M, "magic_wan", "mc_home") && !(0, e.z1)("magic-cf-site")(M)
		}, {
			title: "navigation.account.magic_connectors.sites",
			url: "/magic-wan/sites",
			hasPermission: M => (0, o.iY)(M) && !!(0, r.Le)(M, "magic_wan", "mc_home") && !(0, e.z1)("magic-cf-site")(M)
		}, {
			title: "navigation.account.magic_connectors.network_overview",
			url: "/magic-wan/network",
			labels: ["beta"],
			hasPermission: M => (0, o.iY)(M) && !!(0, r.Le)(M, "magic_wan", "mc_home") && !!(0, e.z1)("magic-cf-site")(M)
		}, {
			title: "navigation.account.magic_connectors.mconn_onramp",
			url: "/magic-wan/mconn-onramp",
			labels: ["beta"],
			hasPermission: M => (0, o.iY)(M) && !!(0, r.Le)(M, "magic_wan", "mc_home") && !!(0, e.z1)("magic-cf-site")(M)
		}, {
			title: "navigation.account.magic_connectors.cloud_onramp",
			url: "/magic-wan/cloud",
			labels: M => (0, e.z1)("magic-beta-flags-disabled")(M) ? [] : ["beta"],
			hasPermission: M => !!(0, u.$f)(M, "magic_cloud.enabled")
		}, {
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-wan/configuration",
			tabs: I.SF.concat(I.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-wan/tunnel-healthchecks"
		}, {
			title: "account.magic.packet_captures.menu",
			url: "/magic-wan/packet-captures/captures"
		}]
	}, {
		hasPermission: M => (0, o.iY)(M),
		iconType: "email-forwarding",
		title: "navigation.account.area_one",
		url: "/area1",
		testId: "sidenav-area-one-link",
		pages: [{
			url: "/area1",
			title: "navigation.common.overview"
		}, {
			url: () => (0, O.Uj)("email-security/overview"),
			title: "navigation.account.zero_trust.email_security.overview",
			labels: ["external-link"]
		}, {
			url: "/area1/retro-scan",
			title: "navigation.account.area_one.retro_scan",
			hasPermission: M => (0, e.z1)("area-1-retro-scan")(M) === !0
		}]
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.workers_and_pages",
		url: "/workers-and-pages",
		additionalMatchUrls: ["/workers/services", "/workers/subdomain", "/workers/analytics-engine", "/workers/compute-setting", "/pages/view", "/pages/new"],
		iconType: "workers-pages",
		hasPermission: M => (0, o.iY)(M),
		testId: "sidenav-workers-pages-link",
		pages: [{
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces",
			hasPermission: M => !(0, e.z1)("storage-and-databases-account-navigation")(M)
		}, {
			title: "navigation.account.workers.durable_objects",
			url: "/workers/durable-objects",
			hasPermission: M => !!(0, e.z1)("durable-objects-ui")(M)
		}, {
			title: "navigation.account.workers.workflows",
			url: "/workers/workflows",
			labels: ["beta"],
			hasPermission: M => !!(0, e.z1)("workflows-ui")(M)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: M => (0, r.Le)(M, "CloudflareQueues", "beta") ? ["beta"] : [],
			hasPermission: M => !!(0, e.z1)("queues-ui")(M) && !(0, e.z1)("storage-and-databases-account-navigation")(M),
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			hasPermission: M => !(0, e.z1)("storage-and-databases-account-navigation")(M)
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: M => !!(0, e.z1)("constellation-ui")(M) && !(0, r.RO)(M)
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: M => !!(0, e.z1)("hyperdrive-ui")(M) && !(0, e.z1)("storage-and-databases-account-navigation")(M)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: M => (0, ee.r)(M) && (0, ee._)(M) && !(0, e.z1)("storage-and-databases-account-navigation")(M)
		}, {
			title: "navigation.account.workers.browser_rendering",
			url: "/workers/browser-rendering"
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: M => {
				const R = (0, L.tJ)(M);
				return !(0, p.ky)(R, [y.uD.EnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: M => (0, o.iY)(M) && (0, D.k)(M)
	}, {
		title: "navigation.account.storage_and_databases",
		url: "/workers/kv/namespaces",
		iconType: "d1",
		testId: "sidenav-d1-link",
		hasPermission: M => !!(0, e.z1)("storage-and-databases-account-navigation")(M),
		pages: [{
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1"
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: M => !!(0, e.z1)("hyperdrive-ui")(M)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: M => (0, ee.r)(M) && (0, ee._)(M)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: M => (0, r.Le)(M, "CloudflareQueues", "beta") ? ["beta"] : [],
			hasPermission: M => !!(0, e.z1)("queues-ui")(M),
			testId: "sidenav-queues-link"
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2/overview",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: M => (0, o.iY)(M),
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: M => (0, o.o_)(M)
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: M => (0, o.o_)(M)
		}]
	}, {
		title: "navigation.account.workers.ai",
		url: "/ai/workers-ai",
		iconType: "workers-constellation",
		hasPermission: M => !!(0, r.RO)(M) || !!(0, r.B)(M),
		testId: "sidenav-ai-link",
		pages: [{
			title: "navigation.account.workers.ai.workers-ai",
			url: "/ai/workers-ai",
			testId: "sidenav-ai-workers-link",
			hasPermission: M => (0, r.RO)(M)
		}, {
			title: "navigation.account.workers.ai.vectorize",
			url: "/ai/vectorize",
			testId: "sidenav-ai-vectorize-link",
			hasPermission: M => (0, r.RO)(M)
		}, {
			title: "navigation.account.workers.ai.ai-gateway",
			url: "/ai/ai-gateway",
			testId: "sidenav-ai-gateway-link",
			hasPermission: M => !!(0, r.B)(M)
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		testId: "sidenav-stream-link",
		hasPermission: M => (0, o.iY)(M),
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: M => (0, o.hv)(M)
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: M => (0, o.hv)(M)
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			hasPermission: M => (0, o.hv)(M)
		}, {
			title: "navigation.account.stream.plans",
			url: "/stream/plans",
			hasPermission: M => !(0, o.hv)(M)
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: M => (0, o.iY)(M),
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images"
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: M => (0, o.dL)(M)
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: M => (0, o.dL)(M)
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: M => (0, o.dL)(M),
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link"
		}, {
			title: "navigation.account.images.plans",
			url: "/images/plans",
			testId: "sidenav-plans-link",
			hasPermission: M => !(0, o.IU)(M)
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "calls",
		testId: "sidenav-calls-link",
		hasPermission: M => (0, o.iY)(M)
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.manage_account",
		url: "/members",
		iconType: "gear",
		testId: "manage-account-link",
		pages: [{
			title: "navigation.account.members",
			url: "/members",
			testId: "account-homepage-members",
			hasPermission: M => (0, o.iY)(M)
		}, {
			title: "navigation.account.api_tokens",
			url: "/api-tokens",
			testId: "account-homepage-api-tokens",
			hasPermission: M => (0, o.iY)(M)
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: M => (0, a.b)(M) ? (0, o.iY)(M) : (0, r.Yj)(M)("auditlogs").read
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: M => (0, o.iY)(M)
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: M => (0, o.iY)(M)
		}, {
			title: "navigation.account.shared_configurations",
			url: "/shared-configurations",
			testId: "shared-config-link",
			labels: ["alpha"],
			hasPermission: M => (0, X.K)(M, "account")
		}, {
			title: "navigation.account.mcn",
			url: "/mcn/integrations",
			labels: M => (0, e.z1)("magic-beta-flags-disabled")(M) ? [] : ["beta"],
			hasPermission: M => !!((0, o.iY)(M) && !!(0, u.$f)(M, "magic_cloud.enabled")),
			testId: "sidenav-mcn-pages-link"
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		testId: "sidenav-notifications-link",
		hasPermission: M => (0, o.iY)(M)
	}, {
		title: "navigation.account.account_inbox",
		url: "/account-inbox",
		iconType: "inbox",
		hasPermission: M => (0, o.iY)(M) && !!(0, e.z1)("dx-message-inbox")(M),
		testId: "sidenav-account-inbox-link"
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		testId: "sidenav-bulk-redirects-link",
		hasPermission: M => (0, o.iY)(M)
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview",
		navigationType: "global-settings"
	}, {
		title: "navigation.zone.ai",
		url: "/ai",
		testId: "sidenav-ai-zones",
		iconType: "ai-audit",
		labels: ["beta"],
		navigationType: "global-settings",
		hasPermission: M => !!(0, e.z1)("ai-audit")(M)
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		navigationType: "version",
		hasPermission: M => (0, o.$n)(M, "analytics", "analytics"),
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "version",
			hasPermission: M => !(0, u.yD)(M)
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: M => !(0, u.yD)(M)
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: M => !(0, u.yD)(M)
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: M => {
				const R = (0, m.nA)(M);
				return R ? !!(!(0, u.yD)(M) && !!(0, m.ZB)(M, "origin_reachability_dash", "dash_view") && (0, m.tU)(R, "enterprise") && !!(0, g.Ek)(M, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: M => {
				const R = (0, m.nA)(M);
				return R ? !!(!(0, u.yD)(M) && !!(0, m.ZB)(M, "edge_reachability_dash", "dash_view") && (0, m.tU)(R, "enterprise") && !!(0, g.Ek)(M, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationType: "global-settings",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: M => !(0, u.yD)(M)
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "both",
			hasPermission: M => (0, f.Xu)(M)
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: M => !(0, u.yD)(M) && !!(0, m.ZB)(M, "logs", "instant_log") && !!(0, u.rV)(M, "logpush.max_instant_logs_jobs_allowed")
		}, {
			title: "navigation.zone.analytics.log_explorer",
			url: "/analytics/log-explorer",
			labels: ["beta"],
			navigationType: "global-settings",
			hasPermission: M => !!(0, w.V)(M)
		}, {
			title: "navigation.zone.analytics.dashboards",
			url: "/analytics/dashboards",
			navigationType: "global-settings",
			hasPermission: M => !!(0, e.z1)("custom-dashboards")(M)
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "global-settings",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: x.bB,
		hasPermission: M => !(0, u.yD)(M) && (0, _.m7)(M)
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: M => (0, o.$n)(M, "dns_records", "dns-record"),
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			navigationType: "global-settings"
		}, {
			title: "navigation.common.analytics",
			url: "/dns/analytics",
			labels: ["new"],
			testId: "zone-navigation-link-dns-overview",
			navigationType: "global-settings"
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			navigationType: "global-settings"
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		navigationType: "global-settings",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		pages: [{
			title: "navigation.zone.email.routing",
			navigationType: "global-settings",
			url: "/email/routing",
			tabs: E.hg,
			hasPermission: M => (0, o.iY)(M) && !(0, u.yD)(M) && (0, o.$n)(M, "dns_records", "dns-record")
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			labels: ["beta"],
			hasPermission: M => (0, h.ig)(M) ? !1 : (0, o.$n)(M, "dns_records", "dns-record") && !!(0, m.ZB)(M, "email", "dmarc_visible")
		}, {
			title: "navigation.zone.email.security",
			navigationType: "global-settings",
			url: "/email/security"
		}]
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		navigationType: "global-settings",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: M => {
			const R = (0, m.nA)(M);
			if ((0, u.yD)(M) || !(0, o.wB)(M, "zone_settings", "spectrum.app") || !R) return !1;
			const U = !!((0, v.l8)(M) || (0, m.DQ)(M)),
				J = !!(0, m.ZB)(M, "spectrum", "enabled"),
				G = !!(0, m.Ns)(R);
			return J || U || !G
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: M => !(0, u.yD)(M) && (0, o.$n)(M, "ssl", "ssl.cert"),
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls",
			navigationType: "both"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates",
			navigationType: "both"
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			navigationType: "global-settings",
			hasPermission: M => (0, u.$f)(M, "staging_certificates")
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: M => !!(0, e.z1)("client-certificates")(M) || !!(0, m.ZB)(M, "ssl", "client_certificates")
		}, {
			title: "navigation.zone.ssl-tls.origin_server",
			navigationType: "global-settings",
			url: "/ssl-tls/origin"
		}, {
			title: "navigation.zone.ssl-tls.custom_hostnames",
			navigationType: "global-settings",
			url: "/ssl-tls/custom-hostnames"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security",
		iconType: "shield",
		testId: "zone-navigation-link-security",
		navigationType: "version",
		hasPermission: M => !(0, u.yD)(M) && (0, o.$n)(M, "waf", "firewall.rule") || (0, o.$n)(M, "page_shield", "script-monitor"),
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			hasPermission: M => (0, o.$n)(M, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version",
			hasPermission: M => (0, o.$n)(M, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: s.gn,
			hasPermission: M => (0, o.$n)(M, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: l.mt,
			hasPermission: M => (0, o.$n)(M, "page_shield", "script-monitor")
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version",
			hasPermission: M => (0, o.$n)(M, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: M => (0, u.du)(M, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed") && (0, o.$n)(M, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			navigationType: "version",
			hasPermission: M => (0, V.R0)(M),
			tabs: l.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationType: "version",
			hasPermission: M => (0, o.$n)(M, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationType: "version",
			hasPermission: M => (0, o.$n)(M, "waf", "firewall.rule")
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationType: "global-settings",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: M => !(0, u.yD)(M) && ((0, o.wB)(M, "access", "access.app") || (0, o.wB)(M, "access", "access.zone.app"))
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: M => !(0, u.yD)(M) && (0, o.$n)(M, "zone_settings", "setting"),
		pages: [{
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			navigationType: "version",
			labels: ["beta"]
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			navigationType: "version",
			tabs: S.x
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationType: "global-settings",
		hasPermission: M => !(0, u.yD)(M) && (0, o.$n)(M, "zone_settings", "setting"),
		pages: [{
			title: "navigation.common.overview",
			navigationType: "global-settings",
			url: "/caching",
			tabs: j
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationType: "both"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationType: "version",
			hasPermission: M => (0, o.$n)(M, "waf", "firewall.rule") || (0, o.$n)(M, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: M => (0, o.iY)(M)
		}, {
			title: "navigation.zone.caching.cache_reserve",
			navigationType: "global-settings",
			url: "/caching/cache-reserve"
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		navigationType: "version",
		hasPermission: M => !(0, u.yD)(M) && (0, o.wB)(M, "worker", "worker.route")
	}, {
		title: "navigation.zone.rules",
		url: "/rules/overview",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationType: "version",
		hasPermission: M => !(0, u.yD)(M) && (0, o.$n)(M, "zone_settings", "page-rule"),
		pages: [{
			title: "navigation.zone.rules.templates",
			url: "/rules/templates",
			labels: ["new"],
			tabs: $.HI,
			navigationType: "version",
			hasPermission: M => !(0, e.z1)("rules-overview")(M) && ((0, o.$n)(M, "waf", "firewall.rule") || (0, o.$n)(M, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.configuration_rules",
			url: "/rules/configuration-rules",
			navigationType: "version",
			hasPermission: M => !(0, e.z1)("rules-overview")(M) && ((0, o.$n)(M, "waf", "firewall.rule") || (0, o.$n)(M, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.overview",
			url: "/rules/overview",
			labels: ["new"],
			navigationType: "global-settings",
			additionalMatchUrls: ["/:accountId/:zoneName/rules/url-normalization", "/:accountId/:zoneName/rules/redirect-rules", "/:accountId/:zoneName/rules/transform-rules", "/:accountId/:zoneName/rules/configuration-rules", "/:accountId/:zoneName/rules/cache-rules", "/:accountId/:zoneName/rules/origin-rules", "/:accountId/:zoneName/rules/compression-rules", "/:accountId/:zoneName/rules/templates"],
			hasPermission: M => !!(0, e.z1)("rules-overview")(M)
		}, {
			title: "navigation.zone.rules.snippets",
			url: "/rules/snippets",
			labels: ["beta"],
			navigationType: "version",
			hasPermission: M => (0, o.$n)(M, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: $.mI,
			hasPermission: M => !(0, e.z1)("rules-overview")(M)
		}, {
			title: "navigation.zone.rules.redirect_rules",
			url: "/rules/redirect-rules",
			navigationType: "version",
			tabs: $.KZ,
			hasPermission: M => !(0, e.z1)("rules-overview")(M) && (0, o.$n)(M, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			navigationType: "version",
			hasPermission: M => !(0, e.z1)("rules-overview")(M) && (0, o.$n)(M, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/rules/cache-rules",
			navigationType: "version",
			hasPermission: M => !(0, e.z1)("rules-overview")(M) && (0, o.$n)(M, "zone_settings", "setting") && ((0, o.$n)(M, "waf", "firewall.rule") || (0, o.$n)(M, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.cloud_connector",
			labels: ["beta"],
			url: "/rules/cloud-connector",
			navigationType: "version",
			hasPermission: M => !!(0, e.z1)("cloud-connector-enabled")(M)
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: M => !(0, e.z1)("rules-overview")(M) && (0, o.$n)(M, "waf", "page-rule", "read") && !!(0, u.rV)(M, "rulesets.response_compression_max_rules")
		}, {
			title: "navigation.account.request_tracer",
			url: "/rules/trace/search",
			labels: ["beta"],
			navigationType: "version",
			hasPermission: M => !!(0, e.z1)("rules-overview")(M) && !!(0, k.T)(M)
		}, {
			title: "navigation.zone.rules.page_rules",
			url: "/rules",
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.url_normalization",
			url: "/rules/url-normalization",
			navigationType: "version",
			hasPermission: M => !(0, e.z1)("rules-overview")(M) && (0, o.$n)(M, "waf", "page-rule", "read")
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "both",
		hasPermission: M => !(0, u.yD)(M) && (0, o.$n)(M, "zone_settings", "setting")
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: M => (0, o.$n)(M, "lb", "load-balancer") || (0, o.$n)(M, "waitingroom", "waiting-room"),
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "global-settings",
			hasPermission: M => !(0, u.yD)(M)
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: M => (0, o.iY)(M)
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: M => (0, o.iY)(M)
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: M => !(0, u.yD)(M)
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: M => !(0, u.yD)(M) && !!(0, g.Ek)(M, "healthCheckEventsAdaptiveGroups")
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: M => !(0, u.yD)(M)
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: M => !(0, u.yD)(M) && (0, o.$n)(M, "zone_settings", "custom-page")
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: M => !(0, u.yD)(M) && (0, o.$n)(M, "app", "com.cloudflare.api.app.manage", "edit")
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: M => !(0, u.yD)(M) && (0, o.$n)(M, "zone_settings", "setting")
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationType: "global-settings",
		labels: M => [],
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: M => !(0, u.yD)(M) && (0, o.$n)(M, "zaraz", "zaraz"),
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationType: "global-settings",
			url: "/zaraz/tools-config",
			tabs: C.az
		}, {
			title: "navigation.zone.zaraz.consent",
			navigationType: "global-settings",
			url: "/zaraz/consent"
		}, {
			title: "navigation.zone.zaraz.history",
			navigationType: "global-settings",
			url: "/zaraz/history"
		}, {
			title: "navigation.zone.zaraz.analytics",
			navigationType: "global-settings",
			url: "/zaraz/monitoring",
			tabs: C.EV
		}, {
			title: "navigation.zone.zaraz.settings",
			navigationType: "global-settings",
			url: "/zaraz/settings"
		}, {
			title: "navigation.zone.zaraz.plans",
			navigationType: "global-settings",
			url: "/zaraz/plans",
			hasPermission: M => !!(0, Q.GM)(M) && !!(0, e.z1)("zaraz-plans-page-access")(M)
		}]
	}, {
		title: "navigation.zone.web3.title",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		hasPermission: M => {
			const R = (0, r.uF)(M);
			return ((R == null ? void 0 : R.roles) || []).includes("Trust and Safety") ? !1 : !(0, u.yD)(M)
		}
	}],
	zeroTrust: [{
		url: () => (0, O.Uj)("home"),
		title: "navigation.account.zero_trust",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, O.Uj)("analytics/access"),
		title: "navigation.account.zero_trust.analytics",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("analytics/access"),
			title: "navigation.account.zero_trust.analytics.access"
		}, {
			url: () => (0, O.Uj)("analytics/gateway"),
			title: "navigation.account.zero_trust.analytics.gateway"
		}, {
			url: () => (0, O.Uj)("analytics/overview"),
			title: "navigation.account.zero_trust.analytics.analytics_and_reporting"
		}]
	}, {
		url: () => (0, O.Uj)("risk-score/scoring"),
		title: "navigation.account.zero_trust.risk_score",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("risk-score/scoring"),
			title: "navigation.account.zero_trust.risk_score.user_risk_scoring"
		}, {
			url: () => (0, O.Uj)("risk-score/behaviors"),
			title: "navigation.account.zero_trust.risk_score.risk_behaviors"
		}]
	}, {
		url: () => (0, O.Uj)("gateway/locations"),
		title: "navigation.account.zero_trust.gateway",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("gateway/locations"),
			title: "navigation.account.zero_trust.gateway.dns_locations"
		}, {
			url: () => (0, O.Uj)("gateway/policies"),
			title: "navigation.account.zero_trust.gateway.firewall_policies"
		}, {
			url: () => (0, O.Uj)("gateway/proxy-endpoints"),
			title: "navigation.account.zero_trust.gateway.proxy_endpoints"
		}, {
			url: () => (0, O.Uj)("gateway/egress-policies"),
			title: "navigation.account.zero_trust.gateway.egress_policies"
		}, {
			url: () => (0, O.Uj)("gateway/resolver-policies"),
			title: "navigation.account.zero_trust.gateway.resolver_policies"
		}]
	}, {
		url: () => (0, O.Uj)("access/apps"),
		title: "navigation.account.zero_trust.access",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("access/apps"),
			title: "navigation.account.zero_trust.access.applications"
		}, {
			url: () => (0, O.Uj)("access/groups"),
			title: "navigation.account.zero_trust.access.access_groups"
		}, {
			url: () => (0, O.Uj)("access/service-auth"),
			title: "navigation.account.zero_trust.access.service_auth"
		}, {
			url: () => (0, O.Uj)("access/tags"),
			title: "navigation.account.zero_trust.access.tags"
		}]
	}, {
		url: () => (0, O.Uj)("networks/tunnels"),
		title: "navigation.account.zero_trust.networks",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("networks/tunnels"),
			title: "navigation.account.zero_trust.networks.tunnels"
		}, {
			url: () => (0, O.Uj)("networks/routes"),
			title: "navigation.account.zero_trust.networks.routes"
		}]
	}, {
		url: () => (0, O.Uj)("casb/findings"),
		title: "navigation.account.zero_trust.casb",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("casb/findings"),
			title: "navigation.account.zero_trust.casb.findings"
		}, {
			url: () => (0, O.Uj)("casb/integration"),
			title: "navigation.account.zero_trust.casb.integrations"
		}]
	}, {
		url: () => (0, O.Uj)("dlp/profiles"),
		title: "navigation.account.zero_trust.dlp",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("dlp/profiles"),
			title: "navigation.account.zero_trust.dlp.profiles"
		}, {
			url: () => (0, O.Uj)("dlp/dataset"),
			title: "navigation.account.zero_trust.dlp.datasets"
		}]
	}, {
		url: () => (0, O.Uj)("dex/monitoring"),
		title: "navigation.account.zero_trust.dex",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("dex/monitoring"),
			title: "navigation.account.zero_trust.dex.monitoring"
		}, {
			url: () => (0, O.Uj)("dex/tests"),
			title: "navigation.account.zero_trust.dex.tests"
		}]
	}, {
		url: () => (0, O.Uj)("email-security/overview"),
		title: "navigation.account.zero_trust.email_security",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("email-security/overview"),
			title: "navigation.account.zero_trust.email_security.monitoring"
		}, {
			url: () => (0, O.Uj)("email-security/investigation"),
			title: "navigation.account.zero_trust.email_security.investigation"
		}, {
			url: () => (0, O.Uj)("email-security/settings"),
			title: "navigation.account.zero_trust.email_security.settings"
		}, {
			url: () => (0, O.Uj)("email-security/directories"),
			title: "navigation.account.zero_trust.email_security.directories"
		}, {
			url: () => (0, O.Uj)("email-security/phishguard"),
			title: "navigation.account.zero_trust.email_security.phishGuard"
		}]
	}, {
		url: () => (0, O.Uj)("team/devices"),
		title: "navigation.account.zero_trust.my_team",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("team/devices"),
			title: "navigation.account.zero_trust.my_team.devices"
		}, {
			url: () => (0, O.Uj)("team/users"),
			title: "navigation.account.zero_trust.my_team.users"
		}, {
			url: () => (0, O.Uj)("team/lists"),
			title: "navigation.account.zero_trust.my_team.lists"
		}]
	}, {
		url: () => (0, O.Uj)("logs/admin"),
		title: "navigation.account.zero_trust.logs",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("logs/admin"),
			title: "navigation.account.zero_trust.logs.admin"
		}, {
			url: () => (0, O.Uj)("logs/access"),
			title: "navigation.account.zero_trust.logs.access"
		}, {
			url: () => (0, O.Uj)("logs/gateway"),
			title: "navigation.account.zero_trust.logs.gateway"
		}, {
			url: () => (0, O.Uj)("logs/logpush"),
			title: "navigation.account.zero_trust.logs.logpush"
		}, {
			url: () => (0, O.Uj)("logs/posture"),
			title: "navigation.account.zero_trust.logs.posture"
		}]
	}, {
		url: () => (0, O.Uj)("settings"),
		title: "navigation.account.zero_trust.settings",
		iconType: "cloudflare-zero-trust"
	}],
	support: T.G
}