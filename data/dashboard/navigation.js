const navigation = {
	root: [{
		title: "navigation.root.organizations",
		url: "/organizations",
		labels: ["new"],
		iconType: "globe",
		hasPermission: O => !!(0, e.z1)("control-plane-large-orgs")(O)
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
		hasPermission: O => (0, e.z1)(C.Mr)(O) && (0, j.z7)(O) && !!(0, j.z$)(O).length
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
		hasPermission: O => !!(0, e.z1)("oauth-access-management")(O)
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: O => !(0, i.n3)() && !(0, e.z1)("oauth-access-management")(O)
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: O => !(0, e.z1)("oauth-access-management")(O)
	}],
	account: [{
		title: "navigation.account.home",
		url: "/",
		iconType: "home",
		labels: ["beta"],
		hasPermission: O => !!(0, e.z1)("dash-account-home-v2")(O)
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
			hasPermission: O => (0, a.gw)(O)
		}]
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: O => (0, a.iY)(O)
		}, {
			title: "navigation.account.account_http_traffic",
			url: "/http-traffic",
			labels: ["beta"],
			hasPermission: O => (0, a.iY)(O) && !!(0, e.z1)("account-traffic-analytics")(O)
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics/all-traffic",
			hasPermission: O => (0, a.iY)(O) && (0, T.Ob)(O)
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: O => (0, a.iY)(O)
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			hasPermission: O => (0, a.iY)(O) && (0, g.S6)(O) && !!(0, e.z1)("account-logpush")(O)
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: O => (0, a.iY)(O) && !!(0, r.Le)(O, "account_analytics", "carbon_dashboard")
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			hasPermission: O => (0, a.iY)(O) && (!!(0, r.Le)(O, "account_analytics", "magic_network_monitoring") || !!(0, l.$f)(O, "rulesets.magic_transit_allowed"))
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: O => (0, a.iY)(O) && (0, d.xU)(O),
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: O => (0, a.iY)(O) && (0, d.sL)(O)
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			hasPermission: O => (0, a.iY)(O) && (0, d.B_)(O)
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			labels: ["beta"],
			hasPermission: O => (0, a.iY)(O) && (0, d.B_)(O)
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: O => (0, a.iY)(O) && (0, d.sL)(O)
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: O => (0, a.iY)(O) && (0, d.TT)(O)
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			labels: ["beta"],
			hasPermission: O => (0, a.iY)(O) && (0, d.jD)(O)
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: O => (0, a.iY)(O) && (0, d.BU)(O)
		}, {
			title: "navigation.account.security_center.cfone_priorities",
			url: "/cloudforce-one/priorities",
			hasPermission: O => (0, a.iY)(O) && (0, d.fs)(O)
		}, {
			title: "navigation.account.security_center.cfone_reports",
			url: "/cloudforce-one/reports",
			hasPermission: O => (0, a.iY)(O) && (0, d.Bc)(O)
		}, {
			title: "navigation.account.security_center.cfone_requests",
			url: "/cloudforce-one/requests",
			hasPermission: O => (0, a.iY)(O) && (0, d.gA)(O)
		}]
	}, {
		title: "navigation.account.request_tracer",
		url: "/trace",
		iconType: "trace",
		testId: "trace-link",
		labels: ["beta"],
		hasPermission: R.T
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.waf",
		url: "/application-security/waf",
		iconType: "cloudflare-security-application",
		tabs: y.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: O => (0, l.Ci)(O)
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		hasPermission: O => (0, a.iY)(O) && !!(0, e.z1)("managed-challenge-ui")(O)
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.interconnects",
		url: "/interconnects",
		iconType: "cloudflare-magic-wan",
		hasPermission: O => !!((0, a.iY)(O) && (0, e.z1)("magic-interconnects")(O) && (!!(0, r.Le)(O, "magic_wan", "mw_home") || !!(0, r.Le)(O, "magic_transit", "mt_home")))
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: O => (0, a.iY)(O) && !!(0, r.Le)(O, "magic_transit", "mt_home"),
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
		hasPermission: O => !!(0, a.zJ)(O),
		tabs: y.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: O => {
			const x = !!(0, a.Wq)(O) && !!(0, a.fO)(O);
			return !!(0, a.us)(O) || x
		},
		tabs: y.Dn,
		pages: [{
			title: "navigation.account.l3l4.ddos.ddos_managed_rules",
			url: "/network-security/ddos",
			hasPermission: O => !!(0, a.Wq)(O) && !!(0, a.fO)(O)
		}, {
			title: "navigation.account.l3l4.ddos.ddos_protection",
			url: "/network-security/ddos-protection",
			hasPermission: O => (0, a.us)(O),
			tabs: y.O1
		}]
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/ip-prefixes",
		iconType: "network",
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: O => (0, a.iY)(O) && !!(0, r.Le)(O, "addressing", "ip_prefixes")
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: O => (0, a.iY)(O) && !!(0, e.z1)("proxy-ips-ui")(O)
		}],
		hasPermission: O => (0, a.iY)(O) && !!(0, r.Le)(O, "addressing", "ip_prefixes")
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: () => {
			const O = (0, o.e1)(),
				x = "https://one.dash.cloudflare.com";
			return O ? `${x}/${O}/` : x
		},
		iconType: "cloudflare-zero-trust",
		labels: O => (0, e.z1)("zt-sidebar")(O) ? [] : ["external-link"],
		hasPermission: O => (0, a.iY)(O)
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		hasPermission: O => (0, a.iY)(O) && !!(0, r.Le)(O, "magic_wan", "mw_home") || !!(0, r.Le)(O, "magic_wan", "mc_home"),
		pages: [{
			title: "navigation.account.magic_connectors.overview",
			url: "/magic-wan/overview",
			hasPermission: O => (0, a.iY)(O) && !!(0, r.Le)(O, "magic_wan", "mc_home")
		}, {
			title: "navigation.account.magic_connectors.sites",
			url: "/magic-wan/sites",
			hasPermission: O => (0, a.iY)(O) && !!(0, r.Le)(O, "magic_wan", "mc_home")
		}, {
			title: "navigation.account.magic_connectors.cloud_connectors",
			url: "/magic-wan/cloud",
			labels: ["beta"],
			hasPermission: O => !!(0, l.$f)(O, "magic_cloud.enabled")
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
		hasPermission: O => (0, a.iY)(O),
		iconType: "email-forwarding",
		title: "navigation.account.area_one",
		url: "/area1",
		pages: [{
			title: "navigation.common.overview",
			url: "/area1"
		}, {
			title: "navigation.account.area_one.retro_scan",
			url: "/area1/retro-scan",
			hasPermission: O => (0, e.z1)("area-1-retro-scan")(O) === !0
		}, {
			title: "navigation.account.area_one.dashboard",
			url: "https://horizon.area1security.com/api/cf-auth/login",
			labels: ["external-link"]
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
		hasPermission: O => (0, a.iY)(O),
		testId: "sidenav-workers-pages-link",
		pages: [{
			title: "navigation.common.overview",
			url: "/workers-and-pages"
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces",
			hasPermission: O => !(0, e.z1)("storage-and-databases-account-navigation")(O)
		}, {
			title: "navigation.account.workers.durable_objects",
			url: "/workers/durable-objects",
			hasPermission: O => !!(0, e.z1)("durable-objects-ui")(O)
		}, {
			title: "navigation.account.workers.workflows",
			url: "/workers/workflows",
			labels: ["beta"],
			hasPermission: O => !!(0, e.z1)("workflows-ui")(O)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: O => (0, r.Le)(O, "CloudflareQueues", "beta") ? ["beta"] : [],
			hasPermission: O => !!(0, e.z1)("queues-ui")(O) && !(0, e.z1)("storage-and-databases-account-navigation")(O),
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			hasPermission: O => !(0, e.z1)("storage-and-databases-account-navigation")(O)
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: O => !!(0, e.z1)("constellation-ui")(O) && !(0, r.RO)(O)
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: O => !!(0, e.z1)("hyperdrive-ui")(O) && !(0, e.z1)("storage-and-databases-account-navigation")(O)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: O => (0, ge.r)(O) && (0, ge._)(O) && !(0, e.z1)("storage-and-databases-account-navigation")(O)
		}, {
			title: "navigation.account.workers.browser_rendering",
			url: "/workers/browser-rendering"
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: O => {
				const x = (0, p.tJ)(O);
				return !(0, E.ky)(x, [I.uD.EnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: O => (0, a.iY)(O) && (0, q.k)(O)
	}, {
		title: "navigation.account.storage_and_databases",
		url: "/workers/kv/namespaces",
		iconType: "d1",
		hasPermission: O => !!(0, e.z1)("storage-and-databases-account-navigation")(O),
		pages: [{
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1"
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: O => !!(0, e.z1)("hyperdrive-ui")(O)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: O => (0, ge.r)(O) && (0, ge._)(O)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: O => (0, r.Le)(O, "CloudflareQueues", "beta") ? ["beta"] : [],
			hasPermission: O => !!(0, e.z1)("queues-ui")(O),
			testId: "sidenav-queues-link"
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2/overview",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: O => (0, a.iY)(O),
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: O => (0, a.o_)(O)
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: O => (0, a.o_)(O)
		}]
	}, {
		title: "navigation.account.workers.ai",
		url: "/ai/workers-ai",
		iconType: "workers-constellation",
		hasPermission: O => !!(0, r.RO)(O) || !!(0, r.B)(O),
		testId: "sidenav-ai-link",
		pages: [{
			title: "navigation.account.workers.ai.workers-ai",
			url: "/ai/workers-ai",
			testId: "sidenav-ai-workers-link",
			hasPermission: O => (0, r.RO)(O)
		}, {
			title: "navigation.account.workers.ai.vectorize",
			url: "/ai/vectorize",
			testId: "sidenav-ai-vectorize-link",
			hasPermission: O => (0, r.RO)(O) && !!(0, l.BF)(O, "vector_db.enabled")
		}, {
			title: "navigation.account.workers.ai.ai-gateway",
			url: "/ai/ai-gateway",
			testId: "sidenav-ai-gateway-link",
			hasPermission: O => !!(0, r.B)(O)
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: O => (0, a.iY)(O),
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: O => (0, a.hv)(O)
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: O => (0, a.hv)(O)
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			hasPermission: O => (0, a.hv)(O)
		}, {
			title: "navigation.account.stream.plans",
			url: "/stream/plans",
			hasPermission: O => !(0, a.hv)(O)
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: O => (0, a.iY)(O),
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images",
			hasPermission: O => (0, a.X9)(O)
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: O => (0, a.dL)(O)
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: O => (0, a.dL)(O)
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: O => (0, a.dL)(O),
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link",
			hasPermission: O => (0, a.X9)(O)
		}, {
			title: "navigation.account.images.plans",
			url: "/images/plans",
			testId: "sidenav-plans-link",
			hasPermission: O => !(0, a.IU)(O)
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "calls",
		hasPermission: O => (0, a.iY)(O)
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
			hasPermission: O => (0, a.iY)(O)
		}, {
			title: "navigation.account.api_tokens",
			url: "/api-tokens",
			testId: "account-homepage-api-tokens",
			hasPermission: O => (0, a.iY)(O) && !!(0, e.z1)("account-owned-api-tokens")(O)
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: O => (0, _.b)(O) ? (0, a.iY)(O) : (0, r.Yj)(O)("auditlogs").read
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: O => (0, a.iY)(O)
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: O => (0, a.iY)(O)
		}, {
			title: "navigation.account.shared_configurations",
			url: "/shared-configurations",
			testId: "shared-config-link",
			labels: ["alpha"],
			hasPermission: O => (0, se.K)(O, "account")
		}, {
			title: "navigation.account.mcn",
			url: "/mcn",
			labels: ["beta"],
			hasPermission: O => !!((0, a.iY)(O) && !!(0, l.$f)(O, "magic_cloud.enabled")),
			testId: "sidenav-mcn-pages-link"
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: O => (0, a.iY)(O)
	}, {
		title: "navigation.account.account_inbox",
		url: "/account-inbox",
		iconType: "inbox",
		hasPermission: O => (0, a.iY)(O) && !!(0, e.z1)("dx-message-inbox")(O),
		testId: "sidenav-account-inbox-link"
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		hasPermission: O => (0, a.iY)(O)
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview",
		navigationType: "global-settings"
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		navigationType: "version",
		hasPermission: O => (0, a.$n)(O, "analytics", "analytics"),
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "version",
			hasPermission: O => !(0, l.yD)(O)
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: O => !(0, l.yD)(O)
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: O => !(0, l.yD)(O)
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: O => {
				const x = (0, f.nA)(O);
				return x ? !!(!(0, l.yD)(O) && !!(0, f.ZB)(O, "origin_reachability_dash", "dash_view") && (0, f.tU)(x, "enterprise") && !!(0, s.Ek)(O, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: O => {
				const x = (0, f.nA)(O);
				return x ? !!(!(0, l.yD)(O) && !!(0, f.ZB)(O, "edge_reachability_dash", "dash_view") && (0, f.tU)(x, "enterprise") && !!(0, s.Ek)(O, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationType: "global-settings",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: O => !(0, l.yD)(O)
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "both",
			hasPermission: O => (0, g.Xu)(O)
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: O => !(0, l.yD)(O) && !!(0, f.ZB)(O, "logs", "instant_log") && !!(0, l.rV)(O, "logpush.max_instant_logs_jobs_allowed")
		}, {
			title: "navigation.zone.analytics.log_explorer",
			url: "/analytics/log-explorer",
			labels: ["beta"],
			navigationType: "global-settings",
			hasPermission: O => !!(0, ee.V)(O)
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "global-settings",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: D.bB,
		hasPermission: O => !(0, l.yD)(O) && (0, c.m7)(O)
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: O => (0, a.$n)(O, "dns_records", "dns-record"),
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
			navigationType: "global-settings",
			hasPermission: O => {
				const x = (0, f.nA)(O),
					K = (x == null ? void 0 : x.type) === ie.K.PARTIAL;
				return (!!(0, l.k4)(O) || !!(0, e.z1)("dns-gql-analytics-for-all")(O)) && !K
			}
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
			tabs: h.hg,
			hasPermission: O => (0, a.iY)(O) && !(0, l.yD)(O) && (0, a.$n)(O, "dns_records", "dns-record")
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			labels: ["beta"],
			hasPermission: O => (0, A.ig)(O) ? !1 : (0, a.$n)(O, "dns_records", "dns-record") && !!(0, f.ZB)(O, "email", "dmarc_visible")
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
		hasPermission: O => {
			const x = (0, f.nA)(O);
			if ((0, l.yD)(O) || !(0, a.wB)(O, "zone_settings", "spectrum.app") || !x) return !1;
			const K = !!((0, m.l8)(O) || (0, f.DQ)(O)),
				Q = !!(0, f.ZB)(O, "spectrum", "enabled"),
				z = !!(0, f.Ns)(x);
			return Q || K || !z
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: O => !(0, l.yD)(O) && (0, a.$n)(O, "ssl", "ssl.cert"),
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
			hasPermission: O => (0, l.$f)(O, "staging_certificates")
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: O => !!(0, e.z1)("client-certificates")(O) || !!(0, f.ZB)(O, "ssl", "client_certificates")
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
		hasPermission: O => !(0, l.yD)(O) && (0, a.$n)(O, "waf", "firewall.rule") || (0, a.$n)(O, "page_shield", "script-monitor"),
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			hasPermission: O => (0, M.B_)(O) && (0, a.$n)(O, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version",
			hasPermission: O => (0, a.$n)(O, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: u.gn,
			hasPermission: O => (0, a.$n)(O, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: u.mt,
			hasPermission: O => (0, a.$n)(O, "page_shield", "script-monitor")
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version",
			hasPermission: O => (0, a.$n)(O, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: O => (0, l.du)(O, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed") && (0, a.$n)(O, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			navigationType: "version",
			hasPermission: O => (0, oe.R0)(O),
			tabs: u.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationType: "version",
			hasPermission: O => (0, a.$n)(O, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationType: "version",
			hasPermission: O => (0, a.$n)(O, "waf", "firewall.rule")
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationType: "global-settings",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: O => !(0, l.yD)(O) && ((0, a.wB)(O, "access", "access.app") || (0, a.wB)(O, "access", "access.zone.app"))
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: O => !(0, l.yD)(O) && (0, a.$n)(O, "zone_settings", "setting"),
		pages: [{
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			navigationType: "version",
			labels: ["beta"]
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			navigationType: "version",
			tabs: G.x
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationType: "global-settings",
		hasPermission: O => !(0, l.yD)(O) && (0, a.$n)(O, "zone_settings", "setting"),
		pages: [{
			title: "navigation.common.overview",
			navigationType: "global-settings",
			url: "/caching",
			tabs: k
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationType: "both"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationType: "version",
			hasPermission: O => (0, a.$n)(O, "waf", "firewall.rule") || (0, a.$n)(O, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: O => (0, a.iY)(O)
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
		hasPermission: O => !(0, l.yD)(O) && (0, a.wB)(O, "worker", "worker.route")
	}, {
		title: "navigation.zone.rules",
		url: "/rules/templates",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationType: "version",
		hasPermission: O => !(0, l.yD)(O) && (0, a.$n)(O, "zone_settings", "page-rule"),
		pages: [{
			title: "navigation.zone.rules.templates",
			url: "/rules/templates",
			labels: ["new"],
			tabs: b.HI,
			navigationType: "version",
			hasPermission: O => !!(0, e.z1)("page-rules-templates")(O) && ((0, a.$n)(O, "waf", "firewall.rule") || (0, a.$n)(O, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.configuration_rules",
			url: "/rules/configuration-rules",
			navigationType: "version",
			hasPermission: O => (0, a.$n)(O, "waf", "firewall.rule") || (0, a.$n)(O, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.snippets",
			url: "/rules/snippets",
			labels: ["beta"],
			navigationType: "version",
			hasPermission: O => (!!(0, w.GM)(O) || !!(0, e.z1)("snippets-enabled")(O)) && (0, a.$n)(O, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: b.mI
		}, {
			title: "navigation.zone.rules.redirect_rules",
			url: "/rules/redirect-rules",
			navigationType: "version",
			hasPermission: O => (0, a.$n)(O, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			navigationType: "version",
			hasPermission: O => (0, a.$n)(O, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/rules/cache-rules",
			navigationType: "version",
			hasPermission: O => (0, a.$n)(O, "zone_settings", "setting") && ((0, a.$n)(O, "waf", "firewall.rule") || (0, a.$n)(O, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.cloud_connector",
			labels: ["beta"],
			url: "/rules/cloud-connector",
			navigationType: "version",
			hasPermission: O => !!(0, e.z1)("cloud-connector-enabled")(O)
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: O => (0, a.$n)(O, "waf", "page-rule", "read") && !!(0, l.rV)(O, "rulesets.response_compression_max_rules") && !!(0, e.z1)("compression-rules")(O)
		}, {
			title: "navigation.zone.rules.page_rules",
			url: "/rules",
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			hasPermission: O => (0, a.$n)(O, "waf", "page-rule", "read")
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "both",
		hasPermission: O => !(0, l.yD)(O) && (0, a.$n)(O, "zone_settings", "setting")
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: O => (0, a.$n)(O, "lb", "load-balancer") || (0, a.$n)(O, "waitingroom", "waiting-room"),
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "global-settings",
			hasPermission: O => !(0, l.yD)(O)
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: O => (0, a.iY)(O)
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: O => (0, a.iY)(O)
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: O => !(0, l.yD)(O)
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: O => !(0, l.yD)(O) && !!(0, s.Ek)(O, "healthCheckEventsAdaptiveGroups")
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: O => !(0, l.yD)(O) && ((0, l.du)(O, "waiting_rooms.allowed") || !!(0, f.ZB)(O, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: O => !(0, l.yD)(O) && (0, a.$n)(O, "zone_settings", "custom-page")
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: O => !(0, l.yD)(O) && (0, a.$n)(O, "app", "com.cloudflare.api.app.manage", "edit")
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: O => !(0, l.yD)(O) && (0, a.$n)(O, "zone_settings", "setting")
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationType: "global-settings",
		labels: O => [],
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: O => !(0, l.yD)(O) && (0, a.$n)(O, "zaraz", "zaraz"),
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationType: "global-settings",
			url: "/zaraz/tools-config",
			tabs: v.az
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
			hasPermission: O => !!(0, ne.GM)(O) && !!(0, e.z1)("zaraz-plans-page-access")(O)
		}]
	}, {
		title: "navigation.zone.web3.title",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		hasPermission: O => {
			const x = (0, r.uF)(O);
			return ((x == null ? void 0 : x.roles) || []).includes("Trust and Safety") ? !1 : !(0, l.yD)(O)
		}
	}],
	zeroTrust: [{
		url: () => (0, T.Uj)("home"),
		title: "navigation.account.zero_trust",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, T.Uj)("analytics/access"),
		title: "navigation.account.zero_trust.analytics",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, T.Uj)("analytics/access"),
			title: "navigation.account.zero_trust.analytics.access"
		}, {
			url: () => (0, T.Uj)("analytics/gateway"),
			title: "navigation.account.zero_trust.analytics.gateway"
		}, {
			url: () => (0, T.Uj)("analytics/overview"),
			title: "navigation.account.zero_trust.analytics.analytics_and_reporting"
		}]
	}, {
		url: () => (0, T.Uj)("risk-score/scoring"),
		title: "navigation.account.zero_trust.risk_score",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, T.Uj)("risk-score/scoring"),
			title: "navigation.account.zero_trust.risk_score.user_risk_scoring"
		}, {
			url: () => (0, T.Uj)("risk-score/behaviors"),
			title: "navigation.account.zero_trust.risk_score.risk_behaviors"
		}]
	}, {
		url: () => (0, T.Uj)("gateway/locations"),
		title: "navigation.account.zero_trust.gateway",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, T.Uj)("gateway/locations"),
			title: "navigation.account.zero_trust.gateway.dns_locations"
		}, {
			url: () => (0, T.Uj)("gateway/policies"),
			title: "navigation.account.zero_trust.gateway.firewall_policies"
		}, {
			url: () => (0, T.Uj)("gateway/proxy-endpoints"),
			title: "navigation.account.zero_trust.gateway.proxy_endpoints"
		}, {
			url: () => (0, T.Uj)("gateway/egress-policies"),
			title: "navigation.account.zero_trust.gateway.egress_policies"
		}, {
			url: () => (0, T.Uj)("gateway/resolver-policies"),
			title: "navigation.account.zero_trust.gateway.resolver_policies"
		}]
	}, {
		url: () => (0, T.Uj)("access/apps"),
		title: "navigation.account.zero_trust.access",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, T.Uj)("access/apps"),
			title: "navigation.account.zero_trust.access.applications"
		}, {
			url: () => (0, T.Uj)("access/groups"),
			title: "navigation.account.zero_trust.access.access_groups"
		}, {
			url: () => (0, T.Uj)("access/service-auth"),
			title: "navigation.account.zero_trust.access.service_auth"
		}, {
			url: () => (0, T.Uj)("access/tags"),
			title: "navigation.account.zero_trust.access.tags"
		}]
	}, {
		url: () => (0, T.Uj)("networks/tunnels"),
		title: "navigation.account.zero_trust.networks",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, T.Uj)("networks/tunnels"),
			title: "navigation.account.zero_trust.networks.tunnels"
		}, {
			url: () => (0, T.Uj)("networks/routes"),
			title: "navigation.account.zero_trust.networks.routes"
		}]
	}, {
		url: () => (0, T.Uj)("casb/findings"),
		title: "navigation.account.zero_trust.casb",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, T.Uj)("casb/findings"),
			title: "navigation.account.zero_trust.casb.findings"
		}, {
			url: () => (0, T.Uj)("casb/integration"),
			title: "navigation.account.zero_trust.casb.integrations"
		}]
	}, {
		url: () => (0, T.Uj)("dlp/profiles"),
		title: "navigation.account.zero_trust.dlp",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, T.Uj)("dlp/profiles"),
			title: "navigation.account.zero_trust.dlp.profiles"
		}, {
			url: () => (0, T.Uj)("dlp/dataset"),
			title: "navigation.account.zero_trust.dlp.datasets"
		}]
	}, {
		url: () => (0, T.Uj)("dex/monitoring"),
		title: "navigation.account.zero_trust.dex",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, T.Uj)("dex/monitoring"),
			title: "navigation.account.zero_trust.dex.monitoring"
		}, {
			url: () => (0, T.Uj)("dex/tests"),
			title: "navigation.account.zero_trust.dex.tests"
		}]
	}, {
		url: () => (0, T.Uj)("ces/overview"),
		title: "navigation.account.zero_trust.email_security",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, T.Uj)("ces/overview"),
			title: "navigation.account.zero_trust.email_security.monitoring"
		}, {
			url: () => (0, T.Uj)("ces/investigation"),
			title: "navigation.account.zero_trust.email_security.investigation"
		}, {
			url: () => (0, T.Uj)("ces/settings"),
			title: "navigation.account.zero_trust.email_security.settings"
		}, {
			url: () => (0, T.Uj)("ces/directories"),
			title: "navigation.account.zero_trust.email_security.directories"
		}, {
			url: () => (0, T.Uj)("ces/phishguard"),
			title: "navigation.account.zero_trust.email_security.phishGuard"
		}]
	}, {
		url: () => (0, T.Uj)("team/devices"),
		title: "navigation.account.zero_trust.my_team",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, T.Uj)("team/devices"),
			title: "navigation.account.zero_trust.my_team.devices"
		}, {
			url: () => (0, T.Uj)("team/users"),
			title: "navigation.account.zero_trust.my_team.users"
		}, {
			url: () => (0, T.Uj)("team/lists"),
			title: "navigation.account.zero_trust.my_team.lists"
		}]
	}, {
		url: () => (0, T.Uj)("logs/admin"),
		title: "navigation.account.zero_trust.logs",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, T.Uj)("logs/admin"),
			title: "navigation.account.zero_trust.logs.admin"
		}, {
			url: () => (0, T.Uj)("logs/access"),
			title: "navigation.account.zero_trust.logs.access"
		}, {
			url: () => (0, T.Uj)("logs/gateway"),
			title: "navigation.account.zero_trust.logs.gateway"
		}, {
			url: () => (0, T.Uj)("logs/logpush"),
			title: "navigation.account.zero_trust.logs.logpush"
		}, {
			url: () => (0, T.Uj)("logs/posture"),
			title: "navigation.account.zero_trust.logs.posture"
		}]
	}, {
		url: () => (0, T.Uj)("settings"),
		title: "navigation.account.zero_trust.settings",
		iconType: "cloudflare-zero-trust"
	}],
	support: S.G
}