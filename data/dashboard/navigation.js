const navigation = {
	root: [{
		title: "navigation.root.organizations",
		url: "/organizations",
		labels: ["new"],
		iconType: "globe",
		hasPermission: A => !!(0, o.z1)("control-plane-large-orgs")(A)
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
		hasPermission: A => (0, o.z1)(l.Mr)(A) && (0, j.z7)(A) && !!(0, j.z$)(A).length
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
		title: A => (0, o.z1)("fractus-managed-profile")(A) ? "navigation.profile.settings" : "navigation.profile.preferences",
		url: A => (0, o.z1)("fractus-managed-profile")(A) ? "/managed-profile/preferences" : "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: A => !!(0, o.z1)("oauth-access-management")(A)
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: A => !(0, b.n3)() && !(0, o.z1)("oauth-access-management")(A)
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: A => !(0, o.z1)("oauth-access-management")(A)
	}],
	account: [{
		title: "navigation.account.home",
		url: "/home",
		iconType: "home",
		testId: "sidenav-home-link",
		hasPermission: A => !!(0, o.z1)("dashnav-developer-platform-home")(A) && !!(0, o.z1)("dx-account-zone-selector-table-view-v2")(A) && (0, g.iY)(A)
	}, {
		title: "navigation.account.home",
		url: "/",
		iconType: "home",
		testId: "sidenav-home-link",
		hasPermission: A => !!(0, o.z1)("dx-account-zone-selector-table-view-v2")(A) && (!(0, o.z1)("dashnav-developer-platform-home")(A) || !(0, g.iY)(A))
	}, {
		title: "navigation.root.websites",
		url: "/websites",
		testId: "sidenav-websites-link",
		iconType: "internet-browser",
		hasPermission: A => !(0, o.z1)("dx-account-zone-selector-table-view-v2")(A)
	}, {
		title: "navigation.account.discover",
		url: "/discover",
		testId: "sidenav-discover-link",
		iconType: "discover"
	}, {
		title: "navigation.account.registrar",
		url: "/registrar/domains",
		testId: "sidenav-domains-link",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/registrar/domains",
			state: {
				forceRenderIfNoDomains: !0
			}
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/registrar/transfer"
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/registrar/register"
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/registrar/protection",
			labels: ["beta"],
			hasPermission: A => (0, g.gw)(A)
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
			hasPermission: A => (0, g.iY)(A)
		}, {
			title: "navigation.account.account_http_traffic",
			url: "/http-traffic",
			labels: ["beta"],
			hasPermission: A => (0, g.iY)(A) && !!(0, o.z1)("account-traffic-analytics")(A)
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics/all-traffic",
			hasPermission: A => (0, g.iY)(A) && (0, K.Ob)(A)
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: A => (0, g.iY)(A)
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			hasPermission: A => (0, g.iY)(A) && (0, _.S6)(A) && !!(0, o.z1)("account-logpush")(A)
		}, {
			title: "navigation.account.log_explorer",
			url: "/log-explorer",
			labels: ["beta"],
			hasPermission: A => (0, g.iY)(A) && (0, d.V)(A)
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: A => (0, g.iY)(A) && !!(0, e.Le)(A, "account_analytics", "carbon_dashboard")
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			hasPermission: A => (0, g.iY)(A) && (!!(0, e.Le)(A, "account_analytics", "magic_network_monitoring") || !!(0, r.$f)(A, "rulesets.magic_transit_allowed"))
		}, {
			title: "navigation.account.dashboards",
			url: "/dashboards",
			hasPermission: A => !!(0, o.z1)("custom-dashboards")(A)
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		testId: "sidenav-security-center-link",
		hasPermission: A => (0, g.iY)(A) && (0, c.xU)(A),
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: A => (0, g.iY)(A) && (0, c.v_)(A)
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			hasPermission: A => (0, g.iY)(A) && (0, c.en)(A)
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			hasPermission: A => (0, g.iY)(A) && (0, c.en)(A)
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: A => (0, g.iY)(A) && (0, c.sL)(A)
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: A => (0, g.iY)(A) && (0, c.TT)(A)
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: A => (0, g.iY)(A) && (0, c.jD)(A)
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: A => (0, g.iY)(A) && (0, c.BU)(A) && ((0, e.hI)(A) || (0, e.CV)(A))
		}, {
			title: "navigation.account.security_center.blocked_content",
			url: "/security-center/blocked-content",
			labels: ["new"],
			hasPermission: A => (0, g.iY)(A) && (0, c.XB)(A)
		}, {
			title: "navigation.account.security_center.threat_intelligence",
			url: "/security-center/threat-intelligence",
			hasPermission: A => (0, g.iY)(A) && (0, c.fS)(A)
		}]
	}, {
		title: "navigation.account.request_tracer",
		url: "/trace",
		iconType: "trace",
		testId: "sidenav-trace-link",
		labels: ["beta"],
		hasPermission: N.T
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
		tabs: E.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: A => (0, r.Ci)(A)
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		hasPermission: A => (0, g.iY)(A) && !!(0, o.z1)("managed-challenge-ui")(A)
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.zone.traffic.load_balancing",
		url: "/load-balancing",
		iconType: "reliability-load-balancer",
		hasPermission: A => !!(0, o.z1)("account-load-balancing")(A)
	}, {
		title: "navigation.account.interconnects",
		url: "/interconnects",
		iconType: "cloudflare-magic-wan",
		testId: "sidenav-interconnects-link",
		hasPermission: A => !!((0, g.iY)(A) && (0, o.z1)("magic-interconnects")(A) && (!!(0, e.Le)(A, "magic_wan", "mw_home") || !!(0, e.Le)(A, "magic_transit", "mt_home")))
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		testId: "sidenav-magic-transit-link",
		hasPermission: A => (0, g.iY)(A) && !!(0, e.Le)(A, "magic_transit", "mt_home"),
		pages: [{
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-transit/configuration",
			tabs: x.Lx.concat(x.SF, x.Jg)
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
		hasPermission: A => !!(0, g.zJ)(A),
		tabs: E.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		testId: "sidenav-ddos-link",
		hasPermission: A => {
			const Z = !!(0, g.Wq)(A) && !!(0, g.fO)(A);
			return !!(0, g.us)(A) || Z
		},
		tabs: E.Dn,
		pages: [{
			title: "navigation.account.l3l4.ddos.ddos_managed_rules",
			url: "/network-security/ddos",
			hasPermission: A => !!(0, g.Wq)(A) && !!(0, g.fO)(A)
		}, {
			title: "navigation.account.l3l4.ddos.ddos_protection",
			url: "/network-security/ddos-protection",
			hasPermission: A => (0, g.us)(A),
			tabs: E.O1
		}]
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/proxy-ips",
		iconType: "network",
		testId: "sidenav-ip-addresses-link",
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: A => (0, g.iY)(A) && ((0, r.$f)(A, "addressing.byoip_allowed") || !!(0, e.Le)(A, "addressing", "ip_prefixes"))
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
			const A = (0, C.e1)(),
				Z = "https://one.dash.cloudflare.com";
			return A ? `${Z}/${A}/` : Z
		},
		iconType: "cloudflare-zero-trust",
		testId: "sidenav-zero-trust-link",
		labels: A => (0, o.z1)("zt-sidebar")(A) ? [] : ["external-link"],
		hasPermission: A => (0, g.iY)(A)
	}, {
		title: "navigation.account.magic_wan",
		url: A => (0, o.z1)("magic-cf-site")(A) ? "/magic-wan/network" : "/magic-wan/overview",
		iconType: "cloudflare-magic-wan",
		testId: "sidenav-magic-wan-link",
		hasPermission: A => (0, g.iY)(A) && !!(0, e.Le)(A, "magic_wan", "mw_home") || !!(0, e.Le)(A, "magic_wan", "mc_home"),
		pages: [{
			title: "navigation.account.magic_connectors.overview",
			url: "/magic-wan/overview",
			hasPermission: A => (0, g.iY)(A) && !!(0, e.Le)(A, "magic_wan", "mc_home") && !(0, o.z1)("magic-cf-site")(A)
		}, {
			title: "navigation.account.magic_connectors.sites",
			url: "/magic-wan/sites",
			hasPermission: A => (0, g.iY)(A) && !!(0, e.Le)(A, "magic_wan", "mc_home") && !(0, o.z1)("magic-cf-site")(A)
		}, {
			title: "navigation.account.magic_connectors.network_overview",
			url: "/magic-wan/network",
			labels: ["beta"],
			hasPermission: A => (0, g.iY)(A) && !!(0, o.z1)("magic-cf-site")(A)
		}, {
			title: "navigation.account.magic_connectors.mconn_onramp",
			url: "/magic-wan/mconn-onramp",
			labels: ["beta"],
			hasPermission: A => (0, g.iY)(A) && !!(0, e.Le)(A, "magic_wan", "mc_home") && !!(0, o.z1)("magic-cf-site")(A)
		}, {
			title: "navigation.account.magic_connectors.cloud_onramp",
			url: "/magic-wan/cloud-onramp",
			labels: A => (0, o.z1)("magic-beta-flags-disabled")(A) ? [] : ["beta"],
			hasPermission: A => !!(0, r.$f)(A, "magic_cloud.enabled")
		}, {
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-wan/configuration",
			tabs: x.SF.concat(x.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-wan/tunnel-healthchecks"
		}, {
			title: "account.magic.packet_captures.menu",
			url: "/magic-wan/packet-captures/captures"
		}]
	}, {
		hasPermission: A => (0, g.iY)(A),
		iconType: "email-forwarding",
		title: "navigation.account.area_one",
		url: "/area1",
		testId: "sidenav-area-one-link",
		pages: [{
			url: "/area1",
			title: "navigation.common.overview"
		}, {
			url: () => (0, K.Uj)("email-security/overview"),
			title: "navigation.account.zero_trust.email_security.overview",
			labels: ["external-link"]
		}, {
			url: "/area1/retro-scan",
			title: "navigation.account.area_one.retro_scan",
			hasPermission: A => (0, o.z1)("area-1-retro-scan")(A) === !0
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
		hasPermission: A => (0, g.iY)(A),
		testId: "sidenav-workers-pages-link",
		pages: [{
			title: "navigation.account.workers_and_pages",
			url: "/workers-and-pages"
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces",
			hasPermission: A => !(0, o.z1)("storage-and-databases-account-navigation")(A)
		}, {
			title: "navigation.account.workers.durable_objects",
			url: "/workers/durable-objects",
			hasPermission: A => !!(0, o.z1)("durable-objects-ui")(A)
		}, {
			title: "navigation.account.workers.containers",
			url: "/workers/containers",
			labels: ["beta"],
			hasPermission: A => !!(0, o.z1)("containers-ui")(A)
		}, {
			title: "navigation.account.workers.observability",
			url: "/workers-and-pages/observability",
			hasPermission: A => !!(0, o.z1)("query-builder")(A)
		}, {
			title: "navigation.account.workers.workflows",
			url: "/workers/workflows",
			labels: ["beta"],
			hasPermission: A => !!(0, o.z1)("workflows-ui")(A)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			hasPermission: A => !(0, o.z1)("storage-and-databases-account-navigation")(A),
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			hasPermission: A => !(0, o.z1)("storage-and-databases-account-navigation")(A)
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: A => !!(0, o.z1)("constellation-ui")(A) && !(0, e.RO)(A)
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: A => !!(0, o.z1)("hyperdrive-ui")(A) && !(0, o.z1)("storage-and-databases-account-navigation")(A)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: A => (0, B.r)(A) && (0, B._)(A) && !(0, o.z1)("storage-and-databases-account-navigation")(A)
		}, {
			title: "navigation.account.workers.browser_rendering",
			url: "/workers/browser-rendering"
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: A => {
				const Z = (0, i.tJ)(A);
				return !(0, m.ky)(Z, [p.uD.EnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.secrets_store",
		url: "/secrets-store",
		labels: ["new"],
		iconType: "lock",
		testId: "secrets-store",
		hasPermission: A => (0, a.j)(A)
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: A => (0, g.iY)(A) && (0, W.k)(A)
	}, {
		title: "navigation.account.storage_and_databases",
		url: "/workers/kv/namespaces",
		iconType: "d1",
		testId: "sidenav-d1-link",
		hasPermission: A => !!(0, o.z1)("storage-and-databases-account-navigation")(A),
		pages: [{
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1"
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: A => !!(0, o.z1)("hyperdrive-ui")(A)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: A => (0, B.r)(A) && (0, B._)(A)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.clipboard",
			url: "/workers/clipboards",
			testId: "sidenav-clipboard-link",
			hasPermission: A => !!(0, o.z1)("queues-clipboard")(A)
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2/overview",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: A => (0, g.iY)(A),
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: A => (0, g.o_)(A)
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: A => (0, g.o_)(A)
		}]
	}, {
		title: "navigation.account.workers.ai",
		url: "/ai/workers-ai",
		iconType: "workers-constellation",
		hasPermission: A => !!(0, e.RO)(A) || !!(0, e.B)(A),
		testId: "sidenav-ai-link",
		pages: [{
			title: "navigation.account.workers.ai.workers-ai",
			url: "/ai/workers-ai",
			testId: "sidenav-ai-workers-link",
			hasPermission: A => (0, e.RO)(A)
		}, {
			title: "navigation.account.workers.ai.vectorize",
			url: "/ai/vectorize",
			testId: "sidenav-ai-vectorize-link",
			hasPermission: A => (0, e.RO)(A)
		}, {
			title: "navigation.account.workers.ai.ai-gateway",
			url: "/ai/ai-gateway",
			testId: "sidenav-ai-gateway-link",
			hasPermission: A => !!(0, e.B)(A)
		}, {
			title: "navigation.account.workers.ai.ai-rag",
			url: "/ai/ai-rag",
			labels: ["beta"],
			hasPermission: A => !!(0, o.z1)("ai-auto-rag")(A)
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		testId: "sidenav-stream-link",
		hasPermission: A => (0, g.iY)(A),
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: A => (0, g.hv)(A)
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: A => (0, g.hv)(A)
		}, {
			title: "navigation.account.stream.video_transformations",
			labels: ["beta"],
			url: "/stream/video-transformations",
			hasPermission: A => (0, g.hv)(A) && (0, f.GU)(A, "stream-video-transformations-beta-enabled")
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			hasPermission: A => (0, g.hv)(A)
		}, {
			title: "navigation.account.stream.plans",
			url: "/stream/plans",
			hasPermission: A => !(0, g.hv)(A)
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: A => (0, g.iY)(A),
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images"
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: A => (0, g.dL)(A)
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: A => (0, g.dL)(A)
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: A => (0, g.dL)(A),
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link"
		}, {
			title: "navigation.account.images.plans",
			url: "/images/plans",
			testId: "sidenav-plans-link",
			hasPermission: A => !(0, g.IU)(A)
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		iconType: "calls",
		testId: "sidenav-calls-link",
		hasPermission: A => (0, g.iY)(A)
	}, {
		title: "navigation.account.tag_management",
		url: "/tag-management",
		iconType: "zaraz",
		hasPermission: A => (0, g.iY)(A),
		pages: [{
			title: "navigation.account.tag_management.tag_setup",
			url: "/tag-management/zaraz",
			hasPermission: A => (0, g.iY)(A)
		}, {
			title: "navigation.account.tag_management.consent",
			url: "/tag-management/consent",
			hasPermission: A => (0, g.iY)(A)
		}, {
			title: "navigation.account.tag_management.history",
			url: "/tag-management/history",
			hasPermission: A => (0, g.iY)(A)
		}, {
			title: "navigation.account.tag_management.monitoring",
			url: "/tag-management/monitoring",
			hasPermission: A => (0, g.iY)(A)
		}, {
			title: "navigation.account.tag_management.settings",
			url: "/tag-management/settings",
			hasPermission: A => (0, g.iY)(A)
		}, {
			title: "navigation.account.tag_management.plans",
			url: "/tag-management/plans",
			hasPermission: A => (0, g.iY)(A)
		}]
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
			hasPermission: A => (0, g.iY)(A)
		}, {
			title: "navigation.account.user_groups",
			url: "/user-groups",
			labels: ["alpha"],
			testId: "account-homepage-user-groups",
			hasPermission: A => (0, g.iY)(A) && !!(0, o.z1)(M.Fq)(A)
		}, {
			title: "navigation.account.api_tokens",
			url: "/api-tokens",
			testId: "account-homepage-api-tokens",
			hasPermission: A => (0, g.iY)(A)
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: A => (0, s.b)(A) ? (0, g.iY)(A) : (0, e.Yj)(A)("auditlogs").read
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: A => (0, g.iY)(A)
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: A => (0, g.iY)(A)
		}, {
			title: "navigation.account.shared_configurations",
			url: "/shared-configurations",
			testId: "shared-config-link",
			labels: ["alpha"],
			hasPermission: A => (0, T.K)(A, "account")
		}, {
			title: "navigation.account.mcn",
			url: "/mcn/integrations",
			labels: A => (0, o.z1)("magic-beta-flags-disabled")(A) ? [] : ["beta"],
			hasPermission: A => !!((0, g.iY)(A) && !!(0, r.$f)(A, "magic_cloud.enabled")),
			testId: "sidenav-mcn-pages-link"
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		testId: "sidenav-notifications-link",
		hasPermission: A => (0, g.iY)(A)
	}, {
		title: "navigation.account.account_inbox",
		url: "/account-inbox",
		iconType: "inbox",
		hasPermission: A => (0, g.iY)(A) && !!(0, o.z1)("dx-message-inbox")(A),
		testId: "sidenav-account-inbox-link"
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		testId: "sidenav-bulk-redirects-link",
		hasPermission: A => (0, g.iY)(A)
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
		hasPermission: A => !!(0, o.z1)("ai-audit")(A)
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		navigationType: "version",
		hasPermission: A => (0, g.$n)(A, "analytics", "analytics"),
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "version",
			hasPermission: A => !(0, r.yD)(A)
		}, {
			title: "navigation.account.web_analytics",
			url: "/analytics/web/overview",
			navigationType: "global-settings",
			hasPermission: A => {
				const Z = (0, u.nA)(A),
					z = !!(0, o.z1)("zone-level-rum")(A);
				return (Z == null ? void 0 : Z.status) === "active" && z && !(0, r.yD)(A)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: A => !(0, r.yD)(A)
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: A => !(0, r.yD)(A)
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: A => {
				const Z = (0, u.nA)(A);
				return Z ? !!(!(0, r.yD)(A) && !!(0, u.ZB)(A, "origin_reachability_dash", "dash_view") && (0, u.tU)(Z, "enterprise") && !!(0, y.Ek)(A, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: A => {
				const Z = (0, u.nA)(A);
				return Z ? !!(!(0, r.yD)(A) && !!(0, u.ZB)(A, "edge_reachability_dash", "dash_view") && (0, u.tU)(Z, "enterprise") && !!(0, y.Ek)(A, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: A => !(0, r.yD)(A)
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "both",
			hasPermission: A => (0, _.Xu)(A)
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: A => !(0, r.yD)(A) && !!(0, u.ZB)(A, "logs", "instant_log") && !!(0, r.rV)(A, "logpush.max_instant_logs_jobs_allowed")
		}, {
			title: "navigation.zone.analytics.log_explorer",
			url: "/analytics/log-explorer",
			labels: ["beta"],
			navigationType: "global-settings",
			hasPermission: A => !!(0, d.V)(A)
		}, {
			title: "navigation.zone.analytics.dashboards",
			url: "/analytics/dashboards",
			navigationType: "global-settings",
			hasPermission: A => !!(0, o.z1)("custom-dashboards")(A)
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "global-settings",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: Y.bB,
		hasPermission: A => !(0, r.yD)(A) && (0, Q.m7)(A)
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: A => (0, g.$n)(A, "dns_records", "dns-record"),
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			navigationType: "global-settings"
		}, {
			title: "navigation.common.analytics",
			url: "/dns/analytics",
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
			tabs: D.hg,
			hasPermission: A => (0, g.iY)(A) && !(0, r.yD)(A) && (0, g.$n)(A, "dns_records", "dns-record")
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			hasPermission: A => (0, v.ig)(A) ? !1 : (0, g.$n)(A, "dns_records", "dns-record") && !!(0, u.ZB)(A, "email", "dmarc_visible")
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
		hasPermission: A => {
			const Z = (0, u.nA)(A);
			if ((0, r.yD)(A) || !(0, g.wB)(A, "zone_settings", "spectrum.app") || !Z) return !1;
			const z = !!((0, f.l8)(A) || (0, u.DQ)(A)),
				F = !!(0, u.ZB)(A, "spectrum", "enabled"),
				$ = !!(0, u.Ns)(Z);
			return F || z || !$
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: g.jq,
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
			hasPermission: A => (0, r.$f)(A, "staging_certificates")
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: A => !!(0, o.z1)("client-certificates")(A) || !!(0, u.ZB)(A, "ssl", "client_certificates")
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
		labels: A => (0, ee.P8)(A) ? ["beta"] : [],
		hasPermission: A => !(0, r.yD)(A) && (0, g.$n)(A, "waf", "firewall.rule") || (0, g.$n)(A, "page_shield", "script-monitor"),
		pages: [{
			title: "navigation.zone.security.overview",
			navigationType: "version",
			url: "/security/overview",
			hasPermission: A => (0, g.$n)(A, "waf", "firewall.rule") && !!(0, o.z1)("appsec-overview")(A)
		}, {
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			tabs: H.Wu,
			hasPermission: A => (0, g.$n)(A, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.web_asset_discovery",
			navigationType: "version",
			url: "/security/web-asset-discovery",
			hasPermission: A => (0, ee.P8)(A) && ((0, g.$n)(A, "waf", "firewall.rule") || (0, g.$n)(A, "page_shield", "script-monitor"))
		}, {
			title: "navigation.zone.security_rules",
			navigationType: "version",
			url: "/security/security-rules",
			hasPermission: A => (0, ee.P8)(A) && (0, g.$n)(A, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version",
			hasPermission: A => !(0, ee.P8)(A) && (0, g.$n)(A, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: O.gn,
			hasPermission: A => !(0, ee.P8)(A) && (0, g.$n)(A, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: S.mt,
			hasPermission: A => !(0, ee.P8)(A) && (0, g.$n)(A, "page_shield", "script-monitor")
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version",
			hasPermission: A => !(0, ee.P8)(A) && (0, g.$n)(A, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: A => !(0, ee.P8)(A) && (0, r.du)(A, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed") && (0, g.$n)(A, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			navigationType: "version",
			hasPermission: A => !(0, ee.P8)(A) && (0, w.R0)(A),
			tabs: S.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationType: "version",
			hasPermission: A => !(0, ee.P8)(A) && (0, g.$n)(A, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationType: "version",
			hasPermission: A => !(0, ee.P8)(A) && (0, g.$n)(A, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/detections",
			navigationType: "version",
			hasPermission: A => (0, ee.P8)(A) && (0, g.$n)(A, "waf", "firewall.rule")
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationType: "global-settings",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: A => !(0, r.yD)(A) && ((0, g.wB)(A, "access", "access.app") || (0, g.wB)(A, "access", "access.zone.app"))
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: A => !(0, r.yD)(A) && (0, g.$n)(A, "zone_settings", "setting"),
		pages: [{
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			navigationType: "version",
			labels: ["beta"]
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			navigationType: "version",
			tabs: P.x
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationType: "global-settings",
		hasPermission: A => !(0, r.yD)(A) && (0, g.$n)(A, "zone_settings", "setting"),
		pages: [{
			title: "navigation.common.overview",
			navigationType: "global-settings",
			url: "/caching",
			tabs: L
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationType: "both"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationType: "version",
			hasPermission: A => (0, g.$n)(A, "waf", "firewall.rule") || (0, g.$n)(A, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: A => (0, g.iY)(A)
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
		hasPermission: A => !(0, r.yD)(A) && (0, g.wB)(A, "worker", "worker.route")
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		navigationType: "version",
		iconType: "filter",
		testId: "zone-navigation-link-rules",
		hasPermission: A => !(0, r.yD)(A) && (0, g.$n)(A, "zone_settings", "page-rule"),
		pages: [{
			title: "navigation.zone.rules.overview",
			url: "/rules/overview",
			labels: ["new"],
			navigationType: "version",
			hasPermission: A => !!(0, o.z1)("rules-overview")(A)
		}, {
			title: "navigation.zone.rules.templates",
			url: "/rules/templates",
			labels: ["new"],
			tabs: I.HI,
			navigationType: "version",
			hasPermission: A => !(0, o.z1)("rules-overview")(A) && ((0, g.$n)(A, "waf", "firewall.rule") || (0, g.$n)(A, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.configuration_rules",
			url: "/rules/configuration-rules",
			navigationType: "version",
			hasPermission: A => !(0, o.z1)("rules-overview")(A) && ((0, g.$n)(A, "waf", "firewall.rule") || (0, g.$n)(A, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.snippets",
			url: "/rules/snippets",
			labels: ["beta"],
			navigationType: "version",
			hasPermission: A => (0, g.$n)(A, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: I.mI,
			hasPermission: A => !(0, o.z1)("rules-overview")(A)
		}, {
			title: "navigation.zone.rules.redirect_rules",
			url: "/rules/redirect-rules",
			navigationType: "version",
			tabs: I.KZ,
			hasPermission: A => !(0, o.z1)("rules-overview")(A) && (0, g.$n)(A, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			navigationType: "version",
			hasPermission: A => !(0, o.z1)("rules-overview")(A) && (0, g.$n)(A, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/rules/cache-rules",
			navigationType: "version",
			hasPermission: A => !(0, o.z1)("rules-overview")(A) && (0, g.$n)(A, "zone_settings", "setting") && ((0, g.$n)(A, "waf", "firewall.rule") || (0, g.$n)(A, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.cloud_connector",
			labels: ["beta"],
			url: "/rules/cloud-connector",
			navigationType: "version",
			hasPermission: A => !!(0, o.z1)("cloud-connector-enabled")(A)
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: A => !(0, o.z1)("rules-overview")(A) && (0, g.$n)(A, "waf", "page-rule", "read") && !!(0, r.rV)(A, "rulesets.response_compression_max_rules")
		}, {
			title: "navigation.account.request_tracer",
			url: "/rules/trace/search",
			labels: ["beta"],
			navigationType: "version",
			additionalMatchUrls: ["/:accountId/:zoneName/rules/trace/results"],
			hasPermission: A => !!(0, o.z1)("rules-overview")(A) && !!(0, N.T)(A)
		}, {
			title: "navigation.zone.rules.page_rules",
			url: "/rules/page-rules",
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.url_normalization",
			url: "/rules/url-normalization",
			navigationType: "version",
			hasPermission: A => !(0, o.z1)("rules-overview")(A) && (0, g.$n)(A, "waf", "page-rule", "read")
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "both",
		hasPermission: A => !(0, r.yD)(A) && (0, g.$n)(A, "zone_settings", "setting")
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: A => (0, g.$n)(A, "lb", "load-balancer") || (0, g.$n)(A, "waitingroom", "waiting-room"),
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "global-settings",
			hasPermission: A => !(0, r.yD)(A)
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: A => (0, g.iY)(A)
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: A => (0, g.iY)(A)
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: A => !(0, r.yD)(A)
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: A => !(0, r.yD)(A) && !!(0, y.Ek)(A, "healthCheckEventsAdaptiveGroups")
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: A => !(0, r.yD)(A)
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: A => !(0, r.yD)(A) && (0, g.$n)(A, "zone_settings", "custom-page")
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: A => !(0, r.yD)(A) && (0, g.$n)(A, "app", "com.cloudflare.api.app.manage", "edit")
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: A => !(0, r.yD)(A) && (0, g.$n)(A, "zone_settings", "setting")
	}, {
		title: "navigation.zone.web3.title",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		hasPermission: A => {
			const Z = (0, e.uF)(A);
			return ((Z == null ? void 0 : Z.roles) || []).includes("Trust and Safety") ? !1 : !(0, r.yD)(A)
		}
	}],
	zeroTrust: [{
		url: () => (0, K.Uj)("home"),
		title: "navigation.account.zero_trust",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, K.Uj)("analytics/access"),
		title: "navigation.account.zero_trust.analytics",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("analytics/access"),
			title: "navigation.account.zero_trust.analytics.access"
		}, {
			url: () => (0, K.Uj)("analytics/gateway"),
			title: "navigation.account.zero_trust.analytics.gateway"
		}, {
			url: () => (0, K.Uj)("analytics/overview"),
			title: "navigation.account.zero_trust.analytics.analytics_and_reporting"
		}]
	}, {
		url: () => (0, K.Uj)("risk-score/scoring"),
		title: "navigation.account.zero_trust.risk_score",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("risk-score/scoring"),
			title: "navigation.account.zero_trust.risk_score.user_risk_scoring"
		}, {
			url: () => (0, K.Uj)("risk-score/behaviors"),
			title: "navigation.account.zero_trust.risk_score.risk_behaviors"
		}]
	}, {
		url: () => (0, K.Uj)("gateway/locations"),
		title: "navigation.account.zero_trust.gateway",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("gateway/locations"),
			title: "navigation.account.zero_trust.gateway.dns_locations"
		}, {
			url: () => (0, K.Uj)("gateway/policies"),
			title: "navigation.account.zero_trust.gateway.firewall_policies"
		}, {
			url: () => (0, K.Uj)("gateway/proxy-endpoints"),
			title: "navigation.account.zero_trust.gateway.proxy_endpoints"
		}, {
			url: () => (0, K.Uj)("gateway/egress-policies"),
			title: "navigation.account.zero_trust.gateway.egress_policies"
		}, {
			url: () => (0, K.Uj)("gateway/resolver-policies"),
			title: "navigation.account.zero_trust.gateway.resolver_policies"
		}]
	}, {
		url: () => (0, K.Uj)("access/apps"),
		title: "navigation.account.zero_trust.access",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("access/apps"),
			title: "navigation.account.zero_trust.access.applications"
		}, {
			url: () => (0, K.Uj)("access/groups"),
			title: "navigation.account.zero_trust.access.access_groups"
		}, {
			url: () => (0, K.Uj)("access/service-auth"),
			title: "navigation.account.zero_trust.access.service_auth"
		}, {
			url: () => (0, K.Uj)("access/tags"),
			title: "navigation.account.zero_trust.access.tags"
		}]
	}, {
		url: () => (0, K.Uj)("networks/tunnels"),
		title: "navigation.account.zero_trust.networks",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("networks/tunnels"),
			title: "navigation.account.zero_trust.networks.tunnels"
		}, {
			url: () => (0, K.Uj)("networks/routes"),
			title: "navigation.account.zero_trust.networks.routes"
		}]
	}, {
		url: () => (0, K.Uj)("casb/findings"),
		title: "navigation.account.zero_trust.casb",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("casb/findings"),
			title: "navigation.account.zero_trust.casb.findings"
		}, {
			url: () => (0, K.Uj)("casb/integration"),
			title: "navigation.account.zero_trust.casb.integrations"
		}]
	}, {
		url: () => (0, K.Uj)("dlp/profiles"),
		title: "navigation.account.zero_trust.dlp",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("dlp/profiles"),
			title: "navigation.account.zero_trust.dlp.profiles"
		}, {
			url: () => (0, K.Uj)("dlp/dataset"),
			title: "navigation.account.zero_trust.dlp.datasets"
		}]
	}, {
		url: () => (0, K.Uj)("dex/monitoring"),
		title: "navigation.account.zero_trust.dex",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("dex/monitoring"),
			title: "navigation.account.zero_trust.dex.monitoring"
		}, {
			url: () => (0, K.Uj)("dex/tests"),
			title: "navigation.account.zero_trust.dex.tests"
		}]
	}, {
		url: () => (0, K.Uj)("email-security/overview"),
		title: "navigation.account.zero_trust.email_security",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("email-security/overview"),
			title: "navigation.account.zero_trust.email_security.monitoring"
		}, {
			url: () => (0, K.Uj)("email-security/investigation"),
			title: "navigation.account.zero_trust.email_security.investigation"
		}, {
			url: () => (0, K.Uj)("email-security/settings"),
			title: "navigation.account.zero_trust.email_security.settings"
		}, {
			url: () => (0, K.Uj)("email-security/directories"),
			title: "navigation.account.zero_trust.email_security.directories"
		}, {
			url: () => (0, K.Uj)("email-security/phishguard"),
			title: "navigation.account.zero_trust.email_security.phishGuard"
		}]
	}, {
		url: () => (0, K.Uj)("team/devices"),
		title: "navigation.account.zero_trust.my_team",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("team/devices"),
			title: "navigation.account.zero_trust.my_team.devices"
		}, {
			url: () => (0, K.Uj)("team/users"),
			title: "navigation.account.zero_trust.my_team.users"
		}, {
			url: () => (0, K.Uj)("team/lists"),
			title: "navigation.account.zero_trust.my_team.lists"
		}]
	}, {
		url: () => (0, K.Uj)("logs/admin"),
		title: "navigation.account.zero_trust.logs",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("logs/admin"),
			title: "navigation.account.zero_trust.logs.admin"
		}, {
			url: () => (0, K.Uj)("logs/access"),
			title: "navigation.account.zero_trust.logs.access"
		}, {
			url: () => (0, K.Uj)("logs/gateway"),
			title: "navigation.account.zero_trust.logs.gateway"
		}, {
			url: () => (0, K.Uj)("logs/logpush"),
			title: "navigation.account.zero_trust.logs.logpush"
		}, {
			url: () => (0, K.Uj)("logs/posture"),
			title: "navigation.account.zero_trust.logs.posture"
		}]
	}, {
		url: () => (0, K.Uj)("settings"),
		title: "navigation.account.zero_trust.settings",
		iconType: "cloudflare-zero-trust"
	}],
	support: h.G
}