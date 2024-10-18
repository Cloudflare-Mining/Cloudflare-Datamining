const navigation = {
	root: [{
		title: "navigation.root.organizations",
		url: "/organizations",
		labels: ["new"],
		iconType: "globe",
		hasPermission: D => !!(0, e.z1)("control-plane-large-orgs")(D)
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
		hasPermission: D => (0, e.z1)(y.Mr)(D) && (0, k.z7)(D) && !!(0, k.z$)(D).length
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
		hasPermission: D => !!(0, e.z1)("oauth-access-management")(D)
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: D => !(0, A.n3)() && !(0, e.z1)("oauth-access-management")(D)
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: D => !(0, e.z1)("oauth-access-management")(D)
	}],
	account: [{
		title: "navigation.account.home",
		url: "/",
		iconType: "home",
		labels: ["beta"],
		hasPermission: D => !!(0, e.z1)("dash-account-home-v2")(D)
	}, {
		title: "navigation.root.websites",
		url: "/websites",
		iconType: "internet-browser"
	}, {
		title: "navigation.account.discover",
		url: "/discover",
		iconType: "discover"
	}, {
		title: "navigation.account.registrar",
		url: "/domains",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
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
			hasPermission: D => (0, r.gw)(D)
		}]
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: D => (0, r.iY)(D)
		}, {
			title: "navigation.account.account_http_traffic",
			url: "/http-traffic",
			labels: ["beta"],
			hasPermission: D => (0, r.iY)(D) && !!(0, e.z1)("account-traffic-analytics")(D)
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics/all-traffic",
			hasPermission: D => (0, r.iY)(D) && (0, p.Ob)(D)
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: D => (0, r.iY)(D)
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			hasPermission: D => (0, r.iY)(D) && (0, v.S6)(D) && !!(0, e.z1)("account-logpush")(D)
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: D => (0, r.iY)(D) && !!(0, o.Le)(D, "account_analytics", "carbon_dashboard")
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			hasPermission: D => (0, r.iY)(D) && (!!(0, o.Le)(D, "account_analytics", "magic_network_monitoring") || !!(0, l.$f)(D, "rulesets.magic_transit_allowed"))
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: D => (0, r.iY)(D) && (0, u.xU)(D),
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: D => (0, r.iY)(D) && (0, u.sL)(D)
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			hasPermission: D => (0, r.iY)(D) && (0, u.en)(D)
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			labels: ["beta"],
			hasPermission: D => (0, r.iY)(D) && (0, u.en)(D)
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: D => (0, r.iY)(D) && (0, u.sL)(D)
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: D => (0, r.iY)(D) && (0, u.TT)(D)
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			labels: ["beta"],
			hasPermission: D => (0, r.iY)(D) && (0, u.jD)(D)
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: D => (0, r.iY)(D) && (0, u.BU)(D)
		}, {
			title: "navigation.account.security_center.blocked_content",
			url: "/security-center/blocked-content",
			labels: ["new"],
			hasPermission: D => (0, r.iY)(D) && (0, u.XB)(D)
		}, {
			title: "navigation.account.security_center.cfone_priorities",
			url: "/cloudforce-one/priorities",
			hasPermission: D => (0, r.iY)(D) && (0, u.fs)(D)
		}, {
			title: "navigation.account.security_center.cfone_reports",
			url: "/cloudforce-one/reports",
			hasPermission: D => (0, r.iY)(D) && (0, u.Bc)(D)
		}, {
			title: "navigation.account.security_center.cfone_requests",
			url: "/cloudforce-one/requests",
			hasPermission: D => (0, r.iY)(D) && (0, u.gA)(D)
		}]
	}, {
		title: "navigation.account.request_tracer",
		url: "/trace",
		iconType: "trace",
		testId: "trace-link",
		labels: ["beta"],
		hasPermission: Z.T
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.waf",
		url: "/application-security/waf",
		iconType: "cloudflare-security-application",
		tabs: s.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: D => (0, l.Ci)(D)
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		hasPermission: D => (0, r.iY)(D) && !!(0, e.z1)("managed-challenge-ui")(D)
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.interconnects",
		url: "/interconnects",
		iconType: "cloudflare-magic-wan",
		hasPermission: D => !!((0, r.iY)(D) && (0, e.z1)("magic-interconnects")(D) && (!!(0, o.Le)(D, "magic_wan", "mw_home") || !!(0, o.Le)(D, "magic_transit", "mt_home")))
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: D => (0, r.iY)(D) && !!(0, o.Le)(D, "magic_transit", "mt_home"),
		pages: [{
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-transit/configuration",
			tabs: L.Lx.concat(L.SF, L.Jg)
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
		hasPermission: D => !!(0, r.zJ)(D),
		tabs: s.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: D => {
			const z = !!(0, r.Wq)(D) && !!(0, r.fO)(D);
			return !!(0, r.us)(D) || z
		},
		tabs: s.Dn,
		pages: [{
			title: "navigation.account.l3l4.ddos.ddos_managed_rules",
			url: "/network-security/ddos",
			hasPermission: D => !!(0, r.Wq)(D) && !!(0, r.fO)(D)
		}, {
			title: "navigation.account.l3l4.ddos.ddos_protection",
			url: "/network-security/ddos-protection",
			hasPermission: D => (0, r.us)(D),
			tabs: s.O1
		}]
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/proxy-ips",
		iconType: "network",
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: D => (0, r.iY)(D) && ((0, l.$f)(D, "addressing.byoip_allowed") || !!(0, o.Le)(D, "addressing", "ip_prefixes"))
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
			const D = (0, i.e1)(),
				z = "https://one.dash.cloudflare.com";
			return D ? `${z}/${D}/` : z
		},
		iconType: "cloudflare-zero-trust",
		labels: D => (0, e.z1)("zt-sidebar")(D) ? [] : ["external-link"],
		hasPermission: D => (0, r.iY)(D)
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		hasPermission: D => (0, r.iY)(D) && !!(0, o.Le)(D, "magic_wan", "mw_home") || !!(0, o.Le)(D, "magic_wan", "mc_home"),
		pages: [{
			title: "navigation.account.magic_connectors.overview",
			url: "/magic-wan/overview",
			hasPermission: D => (0, r.iY)(D) && !!(0, o.Le)(D, "magic_wan", "mc_home")
		}, {
			title: "navigation.account.magic_connectors.sites",
			url: "/magic-wan/sites",
			hasPermission: D => (0, r.iY)(D) && !!(0, o.Le)(D, "magic_wan", "mc_home")
		}, {
			title: "navigation.account.magic_connectors.network_overview",
			url: "/magic-wan/network",
			labels: ["beta"],
			hasPermission: D => (0, r.iY)(D) && !!(0, o.Le)(D, "magic_wan", "mc_home") && !!(0, e.z1)("magic-cf-site")(D)
		}, {
			title: "navigation.account.magic_connectors.mconn_onramp",
			url: "/magic-wan/mconn-onramp",
			labels: ["beta"],
			hasPermission: D => (0, r.iY)(D) && !!(0, o.Le)(D, "magic_wan", "mc_home") && !!(0, e.z1)("magic-cf-site")(D)
		}, {
			title: "navigation.account.magic_connectors.cloud_onramp",
			url: "/magic-wan/cloud",
			labels: ["beta"],
			hasPermission: D => !!(0, l.$f)(D, "magic_cloud.enabled")
		}, {
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-wan/configuration",
			tabs: L.SF.concat(L.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-wan/tunnel-healthchecks"
		}, {
			title: "account.magic.packet_captures.menu",
			url: "/magic-wan/packet-captures/captures"
		}]
	}, {
		hasPermission: D => (0, r.iY)(D),
		iconType: "email-forwarding",
		title: "navigation.account.area_one",
		url: "/area1",
		pages: [{
			url: "/area1",
			title: "navigation.common.overview"
		}, {
			url: () => (0, p.Uj)("email-security/overview"),
			title: "navigation.account.zero_trust.email_security.overview",
			labels: ["external-link"]
		}, {
			url: "/area1/retro-scan",
			title: "navigation.account.area_one.retro_scan",
			hasPermission: D => (0, e.z1)("area-1-retro-scan")(D) === !0
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
		hasPermission: D => (0, r.iY)(D),
		testId: "sidenav-workers-pages-link",
		pages: [{
			title: "navigation.common.overview",
			url: "/workers-and-pages"
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces",
			hasPermission: D => !(0, e.z1)("storage-and-databases-account-navigation")(D)
		}, {
			title: "navigation.account.workers.durable_objects",
			url: "/workers/durable-objects",
			hasPermission: D => !!(0, e.z1)("durable-objects-ui")(D)
		}, {
			title: "navigation.account.workers.workflows",
			url: "/workers/workflows",
			labels: ["beta"],
			hasPermission: D => !!(0, e.z1)("workflows-ui")(D)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: D => (0, o.Le)(D, "CloudflareQueues", "beta") ? ["beta"] : [],
			hasPermission: D => !!(0, e.z1)("queues-ui")(D) && !(0, e.z1)("storage-and-databases-account-navigation")(D),
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			hasPermission: D => !(0, e.z1)("storage-and-databases-account-navigation")(D)
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: D => !!(0, e.z1)("constellation-ui")(D) && !(0, o.RO)(D)
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: D => !!(0, e.z1)("hyperdrive-ui")(D) && !(0, e.z1)("storage-and-databases-account-navigation")(D)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: D => (0, F.r)(D) && (0, F._)(D) && !(0, e.z1)("storage-and-databases-account-navigation")(D)
		}, {
			title: "navigation.account.workers.browser_rendering",
			url: "/workers/browser-rendering"
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: D => {
				const z = (0, f.tJ)(D);
				return !(0, I.ky)(z, [_.uD.EnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: D => (0, r.iY)(D) && (0, G.k)(D)
	}, {
		title: "navigation.account.storage_and_databases",
		url: "/workers/kv/namespaces",
		iconType: "d1",
		hasPermission: D => !!(0, e.z1)("storage-and-databases-account-navigation")(D),
		pages: [{
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1"
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: D => !!(0, e.z1)("hyperdrive-ui")(D)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: D => (0, F.r)(D) && (0, F._)(D)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: D => (0, o.Le)(D, "CloudflareQueues", "beta") ? ["beta"] : [],
			hasPermission: D => !!(0, e.z1)("queues-ui")(D),
			testId: "sidenav-queues-link"
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2/overview",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: D => (0, r.iY)(D),
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: D => (0, r.o_)(D)
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: D => (0, r.o_)(D)
		}]
	}, {
		title: "navigation.account.workers.ai",
		url: "/ai/workers-ai",
		iconType: "workers-constellation",
		hasPermission: D => !!(0, o.RO)(D) || !!(0, o.B)(D),
		testId: "sidenav-ai-link",
		pages: [{
			title: "navigation.account.workers.ai.workers-ai",
			url: "/ai/workers-ai",
			testId: "sidenav-ai-workers-link",
			hasPermission: D => (0, o.RO)(D)
		}, {
			title: "navigation.account.workers.ai.vectorize",
			url: "/ai/vectorize",
			testId: "sidenav-ai-vectorize-link",
			hasPermission: D => (0, o.RO)(D)
		}, {
			title: "navigation.account.workers.ai.ai-gateway",
			url: "/ai/ai-gateway",
			testId: "sidenav-ai-gateway-link",
			hasPermission: D => !!(0, o.B)(D)
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: D => (0, r.iY)(D),
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: D => (0, r.hv)(D)
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: D => (0, r.hv)(D)
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			hasPermission: D => (0, r.hv)(D)
		}, {
			title: "navigation.account.stream.plans",
			url: "/stream/plans",
			hasPermission: D => !(0, r.hv)(D)
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: D => (0, r.iY)(D),
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images"
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: D => (0, r.dL)(D)
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: D => (0, r.dL)(D)
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: D => (0, r.dL)(D),
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link"
		}, {
			title: "navigation.account.images.plans",
			url: "/images/plans",
			testId: "sidenav-plans-link",
			hasPermission: D => !(0, r.IU)(D)
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "calls",
		hasPermission: D => (0, r.iY)(D)
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
			hasPermission: D => (0, r.iY)(D)
		}, {
			title: "navigation.account.api_tokens",
			url: "/api-tokens",
			testId: "account-homepage-api-tokens",
			labels: ["beta"],
			hasPermission: D => (0, r.iY)(D) && !!(0, e.z1)("account-owned-api-tokens")(D)
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: D => (0, a.b)(D) ? (0, r.iY)(D) : (0, o.Yj)(D)("auditlogs").read
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: D => (0, r.iY)(D)
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: D => (0, r.iY)(D)
		}, {
			title: "navigation.account.shared_configurations",
			url: "/shared-configurations",
			testId: "shared-config-link",
			labels: ["alpha"],
			hasPermission: D => (0, $.K)(D, "account")
		}, {
			title: "navigation.account.mcn",
			url: "/mcn",
			labels: ["beta"],
			hasPermission: D => !!((0, r.iY)(D) && !!(0, l.$f)(D, "magic_cloud.enabled")),
			testId: "sidenav-mcn-pages-link"
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: D => (0, r.iY)(D)
	}, {
		title: "navigation.account.account_inbox",
		url: "/account-inbox",
		iconType: "inbox",
		hasPermission: D => (0, r.iY)(D) && !!(0, e.z1)("dx-message-inbox")(D),
		testId: "sidenav-account-inbox-link"
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		hasPermission: D => (0, r.iY)(D)
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
		hasPermission: D => !!(0, e.z1)("ai-audit")(D)
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		navigationType: "version",
		hasPermission: D => (0, r.$n)(D, "analytics", "analytics"),
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "version",
			hasPermission: D => !(0, l.yD)(D)
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: D => !(0, l.yD)(D)
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: D => !(0, l.yD)(D)
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: D => {
				const z = (0, g.nA)(D);
				return z ? !!(!(0, l.yD)(D) && !!(0, g.ZB)(D, "origin_reachability_dash", "dash_view") && (0, g.tU)(z, "enterprise") && !!(0, d.Ek)(D, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: D => {
				const z = (0, g.nA)(D);
				return z ? !!(!(0, l.yD)(D) && !!(0, g.ZB)(D, "edge_reachability_dash", "dash_view") && (0, g.tU)(z, "enterprise") && !!(0, d.Ek)(D, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationType: "global-settings",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: D => !(0, l.yD)(D)
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "both",
			hasPermission: D => (0, v.Xu)(D)
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: D => !(0, l.yD)(D) && !!(0, g.ZB)(D, "logs", "instant_log") && !!(0, l.rV)(D, "logpush.max_instant_logs_jobs_allowed")
		}, {
			title: "navigation.zone.analytics.log_explorer",
			url: "/analytics/log-explorer",
			labels: ["beta"],
			navigationType: "global-settings",
			hasPermission: D => !!(0, B.V)(D)
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "global-settings",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: h.bB,
		hasPermission: D => !(0, l.yD)(D) && (0, C.m7)(D)
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: D => (0, r.$n)(D, "dns_records", "dns-record"),
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
			tabs: M.hg,
			hasPermission: D => (0, r.iY)(D) && !(0, l.yD)(D) && (0, r.$n)(D, "dns_records", "dns-record")
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			labels: ["beta"],
			hasPermission: D => (0, E.ig)(D) ? !1 : (0, r.$n)(D, "dns_records", "dns-record") && !!(0, g.ZB)(D, "email", "dmarc_visible")
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
		hasPermission: D => {
			const z = (0, g.nA)(D);
			if ((0, l.yD)(D) || !(0, r.wB)(D, "zone_settings", "spectrum.app") || !z) return !1;
			const K = !!((0, m.l8)(D) || (0, g.DQ)(D)),
				Q = !!(0, g.ZB)(D, "spectrum", "enabled"),
				q = !!(0, g.Ns)(z);
			return Q || K || !q
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: D => !(0, l.yD)(D) && (0, r.$n)(D, "ssl", "ssl.cert"),
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
			hasPermission: D => (0, l.$f)(D, "staging_certificates")
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: D => !!(0, e.z1)("client-certificates")(D) || !!(0, g.ZB)(D, "ssl", "client_certificates")
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
		hasPermission: D => !(0, l.yD)(D) && (0, r.$n)(D, "waf", "firewall.rule") || (0, r.$n)(D, "page_shield", "script-monitor"),
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			hasPermission: D => (0, r.$n)(D, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version",
			hasPermission: D => (0, r.$n)(D, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: c.gn,
			hasPermission: D => (0, r.$n)(D, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: c.mt,
			hasPermission: D => (0, r.$n)(D, "page_shield", "script-monitor")
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version",
			hasPermission: D => (0, r.$n)(D, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: D => (0, l.du)(D, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed") && (0, r.$n)(D, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			navigationType: "version",
			hasPermission: D => (0, V.R0)(D),
			tabs: c.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationType: "version",
			hasPermission: D => (0, r.$n)(D, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationType: "version",
			hasPermission: D => (0, r.$n)(D, "waf", "firewall.rule")
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationType: "global-settings",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: D => !(0, l.yD)(D) && ((0, r.wB)(D, "access", "access.app") || (0, r.wB)(D, "access", "access.zone.app"))
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: D => !(0, l.yD)(D) && (0, r.$n)(D, "zone_settings", "setting"),
		pages: [{
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			navigationType: "version",
			labels: ["beta"]
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			navigationType: "version",
			tabs: w.x
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationType: "global-settings",
		hasPermission: D => !(0, l.yD)(D) && (0, r.$n)(D, "zone_settings", "setting"),
		pages: [{
			title: "navigation.common.overview",
			navigationType: "global-settings",
			url: "/caching",
			tabs: x
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationType: "both"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationType: "version",
			hasPermission: D => (0, r.$n)(D, "waf", "firewall.rule") || (0, r.$n)(D, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: D => (0, r.iY)(D)
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
		hasPermission: D => !(0, l.yD)(D) && (0, r.wB)(D, "worker", "worker.route")
	}, {
		title: "navigation.zone.rules",
		url: "/rules/templates",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationType: "version",
		hasPermission: D => !(0, l.yD)(D) && (0, r.$n)(D, "zone_settings", "page-rule"),
		pages: [{
			title: "navigation.zone.rules.templates",
			url: "/rules/templates",
			labels: ["new"],
			tabs: T.HI,
			navigationType: "version",
			hasPermission: D => !!(0, e.z1)("page-rules-templates")(D) && ((0, r.$n)(D, "waf", "firewall.rule") || (0, r.$n)(D, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.configuration_rules",
			url: "/rules/configuration-rules",
			navigationType: "version",
			hasPermission: D => (0, r.$n)(D, "waf", "firewall.rule") || (0, r.$n)(D, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.snippets",
			url: "/rules/snippets",
			labels: ["beta"],
			navigationType: "version",
			hasPermission: D => (!!(0, N.GM)(D) || !!(0, e.z1)("snippets-enabled")(D)) && (0, r.$n)(D, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: T.mI
		}, {
			title: "navigation.zone.rules.redirect_rules",
			url: "/rules/redirect-rules",
			navigationType: "version",
			hasPermission: D => (0, r.$n)(D, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			navigationType: "version",
			hasPermission: D => (0, r.$n)(D, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/rules/cache-rules",
			navigationType: "version",
			hasPermission: D => (0, r.$n)(D, "zone_settings", "setting") && ((0, r.$n)(D, "waf", "firewall.rule") || (0, r.$n)(D, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.cloud_connector",
			labels: ["beta"],
			url: "/rules/cloud-connector",
			navigationType: "version",
			hasPermission: D => !!(0, e.z1)("cloud-connector-enabled")(D)
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: D => (0, r.$n)(D, "waf", "page-rule", "read") && !!(0, l.rV)(D, "rulesets.response_compression_max_rules") && !!(0, e.z1)("compression-rules")(D)
		}, {
			title: "navigation.zone.rules.page_rules",
			url: "/rules",
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			hasPermission: D => (0, r.$n)(D, "waf", "page-rule", "read")
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "both",
		hasPermission: D => !(0, l.yD)(D) && (0, r.$n)(D, "zone_settings", "setting")
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: D => (0, r.$n)(D, "lb", "load-balancer") || (0, r.$n)(D, "waitingroom", "waiting-room"),
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "global-settings",
			hasPermission: D => !(0, l.yD)(D)
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: D => (0, r.iY)(D)
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: D => (0, r.iY)(D)
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: D => !(0, l.yD)(D)
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: D => !(0, l.yD)(D) && !!(0, d.Ek)(D, "healthCheckEventsAdaptiveGroups")
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: D => !(0, l.yD)(D) && ((0, l.du)(D, "waiting_rooms.allowed") || !!(0, g.ZB)(D, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: D => !(0, l.yD)(D) && (0, r.$n)(D, "zone_settings", "custom-page")
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: D => !(0, l.yD)(D) && (0, r.$n)(D, "app", "com.cloudflare.api.app.manage", "edit")
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: D => !(0, l.yD)(D) && (0, r.$n)(D, "zone_settings", "setting")
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationType: "global-settings",
		labels: D => [],
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: D => !(0, l.yD)(D) && (0, r.$n)(D, "zaraz", "zaraz"),
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationType: "global-settings",
			url: "/zaraz/tools-config",
			tabs: b.az
		}, {
			title: "navigation.zone.zaraz.consent",
			navigationType: "global-settings",
			url: "/zaraz/consent"
		}, {
			title: "navigation.zone.zaraz.history",
			navigationType: "global-settings",
			url: "/zaraz/history"
		}, {
			title: "navigation.zone.zaraz.monitoring",
			navigationType: "global-settings",
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.settings",
			navigationType: "global-settings",
			url: "/zaraz/settings"
		}, {
			title: "navigation.zone.zaraz.plans",
			navigationType: "global-settings",
			url: "/zaraz/plans",
			hasPermission: D => !!(0, J.GM)(D) && !!(0, e.z1)("zaraz-plans-page-access")(D)
		}]
	}, {
		title: "navigation.zone.web3.title",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		hasPermission: D => {
			const z = (0, o.uF)(D);
			return ((z == null ? void 0 : z.roles) || []).includes("Trust and Safety") ? !1 : !(0, l.yD)(D)
		}
	}],
	zeroTrust: [{
		url: () => (0, p.Uj)("home"),
		title: "navigation.account.zero_trust",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, p.Uj)("analytics/access"),
		title: "navigation.account.zero_trust.analytics",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, p.Uj)("analytics/access"),
			title: "navigation.account.zero_trust.analytics.access"
		}, {
			url: () => (0, p.Uj)("analytics/gateway"),
			title: "navigation.account.zero_trust.analytics.gateway"
		}, {
			url: () => (0, p.Uj)("analytics/overview"),
			title: "navigation.account.zero_trust.analytics.analytics_and_reporting"
		}]
	}, {
		url: () => (0, p.Uj)("risk-score/scoring"),
		title: "navigation.account.zero_trust.risk_score",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, p.Uj)("risk-score/scoring"),
			title: "navigation.account.zero_trust.risk_score.user_risk_scoring"
		}, {
			url: () => (0, p.Uj)("risk-score/behaviors"),
			title: "navigation.account.zero_trust.risk_score.risk_behaviors"
		}]
	}, {
		url: () => (0, p.Uj)("gateway/locations"),
		title: "navigation.account.zero_trust.gateway",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, p.Uj)("gateway/locations"),
			title: "navigation.account.zero_trust.gateway.dns_locations"
		}, {
			url: () => (0, p.Uj)("gateway/policies"),
			title: "navigation.account.zero_trust.gateway.firewall_policies"
		}, {
			url: () => (0, p.Uj)("gateway/proxy-endpoints"),
			title: "navigation.account.zero_trust.gateway.proxy_endpoints"
		}, {
			url: () => (0, p.Uj)("gateway/egress-policies"),
			title: "navigation.account.zero_trust.gateway.egress_policies"
		}, {
			url: () => (0, p.Uj)("gateway/resolver-policies"),
			title: "navigation.account.zero_trust.gateway.resolver_policies"
		}]
	}, {
		url: () => (0, p.Uj)("access/apps"),
		title: "navigation.account.zero_trust.access",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, p.Uj)("access/apps"),
			title: "navigation.account.zero_trust.access.applications"
		}, {
			url: () => (0, p.Uj)("access/groups"),
			title: "navigation.account.zero_trust.access.access_groups"
		}, {
			url: () => (0, p.Uj)("access/service-auth"),
			title: "navigation.account.zero_trust.access.service_auth"
		}, {
			url: () => (0, p.Uj)("access/tags"),
			title: "navigation.account.zero_trust.access.tags"
		}]
	}, {
		url: () => (0, p.Uj)("networks/tunnels"),
		title: "navigation.account.zero_trust.networks",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, p.Uj)("networks/tunnels"),
			title: "navigation.account.zero_trust.networks.tunnels"
		}, {
			url: () => (0, p.Uj)("networks/routes"),
			title: "navigation.account.zero_trust.networks.routes"
		}]
	}, {
		url: () => (0, p.Uj)("casb/findings"),
		title: "navigation.account.zero_trust.casb",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, p.Uj)("casb/findings"),
			title: "navigation.account.zero_trust.casb.findings"
		}, {
			url: () => (0, p.Uj)("casb/integration"),
			title: "navigation.account.zero_trust.casb.integrations"
		}]
	}, {
		url: () => (0, p.Uj)("dlp/profiles"),
		title: "navigation.account.zero_trust.dlp",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, p.Uj)("dlp/profiles"),
			title: "navigation.account.zero_trust.dlp.profiles"
		}, {
			url: () => (0, p.Uj)("dlp/dataset"),
			title: "navigation.account.zero_trust.dlp.datasets"
		}]
	}, {
		url: () => (0, p.Uj)("dex/monitoring"),
		title: "navigation.account.zero_trust.dex",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, p.Uj)("dex/monitoring"),
			title: "navigation.account.zero_trust.dex.monitoring"
		}, {
			url: () => (0, p.Uj)("dex/tests"),
			title: "navigation.account.zero_trust.dex.tests"
		}]
	}, {
		url: () => (0, p.Uj)("email-security/overview"),
		title: "navigation.account.zero_trust.email_security",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, p.Uj)("email-security/overview"),
			title: "navigation.account.zero_trust.email_security.monitoring"
		}, {
			url: () => (0, p.Uj)("email-security/investigation"),
			title: "navigation.account.zero_trust.email_security.investigation"
		}, {
			url: () => (0, p.Uj)("email-security/settings"),
			title: "navigation.account.zero_trust.email_security.settings"
		}, {
			url: () => (0, p.Uj)("email-security/directories"),
			title: "navigation.account.zero_trust.email_security.directories"
		}, {
			url: () => (0, p.Uj)("email-security/phishguard"),
			title: "navigation.account.zero_trust.email_security.phishGuard"
		}]
	}, {
		url: () => (0, p.Uj)("team/devices"),
		title: "navigation.account.zero_trust.my_team",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, p.Uj)("team/devices"),
			title: "navigation.account.zero_trust.my_team.devices"
		}, {
			url: () => (0, p.Uj)("team/users"),
			title: "navigation.account.zero_trust.my_team.users"
		}, {
			url: () => (0, p.Uj)("team/lists"),
			title: "navigation.account.zero_trust.my_team.lists"
		}]
	}, {
		url: () => (0, p.Uj)("logs/admin"),
		title: "navigation.account.zero_trust.logs",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, p.Uj)("logs/admin"),
			title: "navigation.account.zero_trust.logs.admin"
		}, {
			url: () => (0, p.Uj)("logs/access"),
			title: "navigation.account.zero_trust.logs.access"
		}, {
			url: () => (0, p.Uj)("logs/gateway"),
			title: "navigation.account.zero_trust.logs.gateway"
		}, {
			url: () => (0, p.Uj)("logs/logpush"),
			title: "navigation.account.zero_trust.logs.logpush"
		}, {
			url: () => (0, p.Uj)("logs/posture"),
			title: "navigation.account.zero_trust.logs.posture"
		}]
	}, {
		url: () => (0, p.Uj)("settings"),
		title: "navigation.account.zero_trust.settings",
		iconType: "cloudflare-zero-trust"
	}],
	support: O.G
}