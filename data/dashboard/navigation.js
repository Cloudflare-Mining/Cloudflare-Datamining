const navigation = {
	root: [{
		title: "navigation.root.organizations",
		url: "/organizations",
		labels: ["new"],
		iconType: "globe",
		hasPermission: D => !!(0, o.z1)("control-plane-large-orgs")(D)
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
		hasPermission: D => (0, o.z1)(c.Mr)(D) && (0, O.z7)(D) && !!(0, O.z$)(D).length
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
		title: D => (0, o.z1)("fractus-managed-profile")(D) ? "navigation.profile.settings" : "navigation.profile.preferences",
		url: D => (0, o.z1)("fractus-managed-profile")(D) ? "/managed-profile" : "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: D => !!(0, o.z1)("oauth-access-management")(D)
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: D => !(0, E.n3)() && !(0, o.z1)("oauth-access-management")(D)
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: D => !(0, o.z1)("oauth-access-management")(D)
	}],
	account: [{
		title: "navigation.account.home",
		url: "/home",
		iconType: "home",
		testId: "sidenav-home-link",
		hasPermission: D => !!(0, o.z1)("dashnav-developer-platform-home")(D) && !!(0, o.z1)("dx-account-zone-selector-table-view-v2")(D) && (0, m.iY)(D)
	}, {
		title: "navigation.account.home",
		url: "/",
		iconType: "home",
		testId: "sidenav-home-link",
		hasPermission: D => !!(0, o.z1)("dx-account-zone-selector-table-view-v2")(D) && (!(0, o.z1)("dashnav-developer-platform-home")(D) || !(0, m.iY)(D))
	}, {
		title: "navigation.root.websites",
		url: "/websites",
		testId: "sidenav-websites-link",
		iconType: "internet-browser",
		hasPermission: D => !(0, o.z1)("dx-account-zone-selector-table-view-v2")(D)
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
			hasPermission: D => (0, m.gw)(D)
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
			hasPermission: D => (0, m.iY)(D)
		}, {
			title: "navigation.account.account_http_traffic",
			url: "/http-traffic",
			labels: ["beta"],
			hasPermission: D => (0, m.iY)(D) && !!(0, o.z1)("account-traffic-analytics")(D)
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics/all-traffic",
			hasPermission: D => (0, m.iY)(D) && (0, T.Ob)(D)
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: D => (0, m.iY)(D)
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			hasPermission: D => (0, m.iY)(D) && (0, C.S6)(D) && !!(0, o.z1)("account-logpush")(D)
		}, {
			title: "navigation.account.log_explorer",
			url: "/log-explorer",
			labels: ["beta"],
			hasPermission: D => (0, m.iY)(D) && (0, g.V)(D)
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: D => (0, m.iY)(D) && !!(0, e.Le)(D, "account_analytics", "carbon_dashboard")
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			hasPermission: D => (0, m.iY)(D) && (!!(0, e.Le)(D, "account_analytics", "magic_network_monitoring") || !!(0, r.$f)(D, "rulesets.magic_transit_allowed"))
		}, {
			title: "navigation.account.dashboards",
			url: "/dashboards",
			hasPermission: D => !!(0, J.Ko)(D)
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		testId: "sidenav-security-center-link",
		hasPermission: D => (0, m.iY)(D) && (0, u.xU)(D),
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: D => (0, m.iY)(D) && (0, u.v_)(D)
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			hasPermission: D => (0, m.iY)(D) && (0, u.en)(D)
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			hasPermission: D => (0, m.iY)(D) && (0, u.en)(D)
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: D => (0, m.iY)(D) && (0, u.sL)(D)
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: D => (0, m.iY)(D) && (0, u.TT)(D)
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: D => (0, m.iY)(D) && (0, u.jD)(D)
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: D => (0, m.iY)(D) && (0, u.BU)(D) && ((0, e.hI)(D) || (0, e.CV)(D))
		}, {
			title: "navigation.account.security_center.blocked_content",
			url: "/security-center/blocked-content",
			labels: ["new"],
			hasPermission: D => (0, m.iY)(D) && (0, u.XB)(D)
		}, {
			title: "navigation.account.security_center.threat_intelligence",
			url: "/security-center/threat-intelligence",
			hasPermission: D => (0, m.iY)(D) && (0, u.fS)(D)
		}]
	}, {
		title: "navigation.account.request_tracer",
		url: "/trace",
		iconType: "trace",
		testId: "sidenav-trace-link",
		labels: ["beta"],
		hasPermission: Q.T
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
		hasPermission: D => (0, r.Ci)(D)
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		hasPermission: D => (0, m.iY)(D) && !!(0, o.z1)("managed-challenge-ui")(D)
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.zone.traffic.load_balancing",
		url: "/load-balancing",
		iconType: "reliability-load-balancer",
		hasPermission: D => !!(0, o.z1)("account-load-balancing")(D)
	}, {
		title: "navigation.account.interconnects",
		url: "/interconnects",
		iconType: "cloudflare-magic-wan",
		testId: "sidenav-interconnects-link",
		hasPermission: D => !!((0, m.iY)(D) && (!!(0, e.Le)(D, "magic_wan", "mw_home") || !!(0, e.Le)(D, "magic_transit", "mt_home")))
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		testId: "sidenav-magic-transit-link",
		hasPermission: D => (0, m.iY)(D) && !!(0, e.Le)(D, "magic_transit", "mt_home"),
		pages: [{
			title: "navigation.account.magic_connectors.network_overview",
			url: "/magic-transit/network",
			labels: ["beta"],
			hasPermission: D => !!(0, o.z1)("magic-transit-cf-site")(D)
		}, {
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-transit/configuration",
			tabs: p.Lx.concat(p.SF, p.Jg)
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
		hasPermission: D => !!(0, m.zJ)(D),
		tabs: A.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		testId: "sidenav-ddos-link",
		hasPermission: D => {
			const W = !!(0, m.Wq)(D) && !!(0, m.fO)(D);
			return !!(0, m.us)(D) || W
		},
		tabs: A.Dn,
		pages: [{
			title: "navigation.account.l3l4.ddos.ddos_managed_rules",
			url: "/network-security/ddos",
			hasPermission: D => !!(0, m.Wq)(D) && !!(0, m.fO)(D)
		}, {
			title: "navigation.account.l3l4.ddos.ddos_protection",
			url: "/network-security/ddos-protection",
			hasPermission: D => (0, m.us)(D),
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
			hasPermission: D => (0, m.iY)(D) && ((0, r.$f)(D, "addressing.byoip_allowed") || !!(0, e.Le)(D, "addressing", "ip_prefixes"))
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
		title: "navigation.account.magic_networks",
		labels: ["new"],
		url: D => "/magic-networking/overview",
		iconType: "cloudflare-magic-wan",
		testId: "sidenav-magic-networks-link",
		hasPermission: D => (0, m.iY)(D) && !!(0, o.z1)("magic-fractus-networking")(D) && (!!(0, e.Le)(D, "magic_wan", "mw_home") || !!(0, e.Le)(D, "magic_wan", "mc_home") || !!(0, e.Le)(D, "magic_transit", "mt_home")),
		pages: [{
			title: "navigation.account.magic_networks.overview",
			url: "/magic-networking/overview"
		}, {
			title: "navigation.account.magic_networks.firewall",
			url: "/magic-networking/firewall",
			hasPermission: D => !!(0, o.z1)("magic-fractus-firewall")(D)
		}]
	}, {
		title: "navigation.account.magic_networks",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser",
		hasPermission: D => !!(0, o.z1)("magic-fractus-networking")(D)
	}, {
		title: "navigation.account.zero_trust",
		url: () => {
			const D = (0, y.e1)(),
				W = "https://one.dash.cloudflare.com";
			return D ? `${W}/${D}/` : W
		},
		iconType: "cloudflare-zero-trust",
		testId: "sidenav-zero-trust-link",
		labels: D => (0, o.z1)("zt-sidebar")(D) ? [] : ["external-link"],
		hasPermission: D => (0, m.iY)(D)
	}, {
		title: "navigation.account.magic_wan",
		url: D => (0, o.z1)("magic-cf-site")(D) ? "/magic-wan/network" : "/magic-wan/overview",
		iconType: "cloudflare-magic-wan",
		testId: "sidenav-magic-wan-link",
		hasPermission: D => (0, m.iY)(D) && !!(0, e.Le)(D, "magic_wan", "mw_home") || !!(0, e.Le)(D, "magic_wan", "mc_home"),
		pages: [{
			title: "navigation.account.magic_connectors.overview",
			url: "/magic-wan/overview",
			hasPermission: D => (0, m.iY)(D) && !!(0, e.Le)(D, "magic_wan", "mc_home") && !(0, o.z1)("magic-cf-site")(D)
		}, {
			title: "navigation.account.magic_connectors.sites",
			url: "/magic-wan/sites",
			hasPermission: D => (0, m.iY)(D) && !!(0, e.Le)(D, "magic_wan", "mc_home") && !(0, o.z1)("magic-cf-site")(D)
		}, {
			title: "navigation.account.magic_connectors.network_overview",
			url: "/magic-wan/network",
			labels: ["beta"],
			hasPermission: D => (0, m.iY)(D) && !!(0, o.z1)("magic-cf-site")(D)
		}, {
			title: "navigation.account.magic_connectors.mconn_onramp",
			url: "/magic-wan/mconn-onramp",
			labels: ["beta"],
			hasPermission: D => (0, m.iY)(D) && !!(0, e.Le)(D, "magic_wan", "mc_home") && !!(0, o.z1)("magic-cf-site")(D)
		}, {
			title: "navigation.account.magic_connectors.cloud_onramp",
			url: "/magic-wan/cloud-onramp",
			labels: D => (0, o.z1)("magic-beta-flags-disabled")(D) ? [] : ["beta"],
			hasPermission: D => !!(0, r.$f)(D, "magic_cloud.enabled")
		}, {
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-wan/configuration",
			tabs: p.SF.concat(p.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-wan/tunnel-healthchecks"
		}, {
			title: "account.magic.packet_captures.menu",
			url: "/magic-wan/packet-captures/captures"
		}]
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.compute_workers",
		url: "/workers-and-pages",
		additionalMatchUrls: ["/workers/services", "/workers/subdomain", "/workers/compute-setting", "/pages/view", "/pages/new"],
		iconType: "workers-pages",
		hasPermission: D => (0, m.iY)(D),
		testId: "sidenav-workers-pages-link",
		pages: [{
			title: "navigation.account.workers_and_pages",
			url: "/workers-and-pages"
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces",
			hasPermission: D => !(0, o.z1)("storage-and-databases-account-navigation")(D)
		}, {
			title: "navigation.account.workers.durable_objects",
			url: "/workers/durable-objects",
			hasPermission: D => !!(0, o.z1)("durable-objects-ui")(D)
		}, {
			title: "navigation.account.workers.containers",
			url: "/workers/containers",
			labels: ["beta"],
			hasPermission: D => !!(0, o.z1)("containers-ui")(D)
		}, {
			title: "navigation.account.workers.observability",
			url: "/workers-and-pages/observability",
			labels: ["beta"],
			hasPermission: D => !!(0, o.z1)("query-builder")(D)
		}, {
			title: "navigation.account.workers.workflows",
			url: "/workers/workflows",
			hasPermission: D => !!(0, o.z1)("workflows-ui")(D)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			hasPermission: D => !(0, o.z1)("storage-and-databases-account-navigation")(D),
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			hasPermission: D => !(0, o.z1)("storage-and-databases-account-navigation")(D)
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: D => !!(0, o.z1)("constellation-ui")(D) && !(0, e.RO)(D)
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: D => !!(0, o.z1)("hyperdrive-ui")(D) && !(0, o.z1)("storage-and-databases-account-navigation")(D)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: D => (0, x.r)(D) && (0, x._)(D) && !(0, o.z1)("storage-and-databases-account-navigation")(D)
		}, {
			title: "navigation.account.workers.browser_rendering",
			url: "/workers/browser-rendering"
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: D => {
				const W = (0, l.tJ)(D);
				return !(0, v.ky)(W, [h.uD.EnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.secrets_store",
		url: "/secrets-store",
		labels: ["new"],
		iconType: "lock",
		testId: "secrets-store",
		hasPermission: D => (0, a.j)(D)
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: D => (0, m.iY)(D) && (0, U.k)(D)
	}, {
		title: "navigation.account.storage_and_databases",
		url: "/workers/kv/namespaces",
		iconType: "d1",
		testId: "sidenav-d1-link",
		hasPermission: D => !!(0, o.z1)("storage-and-databases-account-navigation")(D),
		pages: [{
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1"
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: D => !!(0, o.z1)("hyperdrive-ui")(D)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: D => (0, x.r)(D) && (0, x._)(D)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.clipboard",
			url: "/workers/clipboards",
			testId: "sidenav-clipboard-link",
			hasPermission: D => !!(0, o.z1)("queues-clipboard")(D)
		}, {
			title: "navigation.account.workers.analytics",
			url: "/workers/analytics-engine"
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2/overview",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: D => (0, m.iY)(D),
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: D => (0, m.o_)(D)
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: D => (0, m.o_)(D)
		}]
	}, {
		title: "navigation.account.workers.ai",
		url: "/ai/workers-ai",
		iconType: "workers-constellation",
		hasPermission: D => !!(0, e.RO)(D) || !!(0, e.B)(D),
		testId: "sidenav-ai-link",
		pages: [{
			title: "navigation.account.workers.ai.workers-ai",
			url: "/ai/workers-ai",
			testId: "sidenav-ai-workers-link",
			hasPermission: D => (0, e.RO)(D)
		}, {
			title: "navigation.account.workers.ai.vectorize",
			url: "/ai/vectorize",
			testId: "sidenav-ai-vectorize-link",
			hasPermission: D => (0, e.RO)(D)
		}, {
			title: "navigation.account.workers.ai.ai-gateway",
			url: "/ai/ai-gateway",
			testId: "sidenav-ai-gateway-link",
			hasPermission: D => !!(0, e.B)(D)
		}, {
			title: "navigation.account.workers.ai.ai-rag",
			url: "/ai/autorag",
			labels: ["beta"],
			hasPermission: D => !!(0, o.z1)("ai-auto-rag")(D)
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		testId: "sidenav-stream-link",
		hasPermission: D => (0, m.iY)(D),
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: D => (0, m.hv)(D)
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: D => (0, m.hv)(D)
		}, {
			title: "navigation.account.stream.video_transformations",
			labels: ["beta"],
			url: "/stream/video-transformations",
			hasPermission: D => (0, m.hv)(D) && (0, s.GU)(D, "stream-video-transformations-beta-enabled")
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			hasPermission: D => (0, m.hv)(D)
		}, {
			title: "navigation.account.stream.plans",
			url: "/stream/plans",
			hasPermission: D => !(0, m.hv)(D)
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: D => (0, m.iY)(D),
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images"
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: D => (0, m.dL)(D)
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: D => (0, m.dL)(D)
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: D => (0, m.dL)(D),
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link"
		}, {
			title: "navigation.account.images.plans",
			url: "/images/plans",
			testId: "sidenav-plans-link",
			hasPermission: D => !(0, m.IU)(D)
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		iconType: "calls",
		testId: "sidenav-calls-link",
		hasPermission: D => (0, m.iY)(D) && !(0, s.GU)(D, "realtime-ui")
	}, {
		title: "navigation.account.realtime",
		url: "/realtime",
		iconType: "calls",
		testId: "sidenav-realtime-link",
		hasPermission: D => (0, m.iY)(D) && (0, s.GU)(D, "realtime-ui"),
		pages: [{
			title: "navigation.account.realtime.kit",
			url: "/realtime/kit",
			testId: "sidenav-realtime-kit-link",
			labels: ["beta"]
		}, {
			title: "navigation.account.realtime.turn",
			url: "/realtime/turn",
			testId: "sidenav-realtime-turn-link"
		}, {
			title: "navigation.account.realtime.sfu",
			url: "/realtime/sfu",
			testId: "sidenav-realtime-sfu-link"
		}]
	}, {
		title: "navigation.account.tag_management",
		url: "/tag-management",
		iconType: "zaraz",
		pages: [{
			title: "navigation.account.tag_management.tag_setup",
			url: "/tag-management/zaraz"
		}, {
			title: "navigation.account.tag_management.consent",
			url: "/tag-management/consent"
		}, {
			title: "navigation.account.tag_management.history",
			url: "/tag-management/history"
		}, {
			title: "navigation.account.tag_management.monitoring",
			url: "/tag-management/monitoring"
		}, {
			title: "navigation.account.tag_management.settings",
			url: "/tag-management/settings"
		}, {
			title: "navigation.account.tag_management.plans",
			url: "/tag-management/plans"
		}, {
			title: "navigation.account.tag_management.gmt_fp",
			url: "/tag-management/google-tag-gateway"
		}]
	}, {
		title: "navigation.account.event_hub",
		url: "/event-subscriptions",
		iconType: "queues",
		testId: "sidenav-event-hub-link",
		labels: ["beta"],
		hasPermission: D => !!(0, o.z1)("event-hub-ui")(D)
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
			hasPermission: D => (0, m.iY)(D)
		}, {
			title: "navigation.account.api_tokens",
			url: "/api-tokens",
			testId: "account-homepage-api-tokens",
			hasPermission: D => (0, m.iY)(D)
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: D => (0, i.b)(D) ? (0, m.iY)(D) : (0, e.Yj)(D)("auditlogs").read
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: D => (0, m.iY)(D)
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: D => (0, m.iY)(D)
		}, {
			title: "navigation.account.shared_configurations",
			url: "/shared-configurations",
			testId: "shared-config-link",
			labels: ["alpha"],
			hasPermission: D => (0, B.K)(D, "account")
		}, {
			title: "navigation.account.abuse",
			url: "/abuse",
			labels: ["beta"],
			hasPermission: D => (0, m.iY)(D) && (0, u.V0)(D)
		}, {
			title: "navigation.account.mcn",
			url: "/mcn/integrations",
			labels: D => (0, o.z1)("magic-beta-flags-disabled")(D) ? [] : ["beta"],
			hasPermission: D => !!((0, m.iY)(D) && !!(0, r.$f)(D, "magic_cloud.enabled")),
			testId: "sidenav-mcn-pages-link"
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		testId: "sidenav-notifications-link",
		hasPermission: D => (0, m.iY)(D)
	}, {
		title: "navigation.account.account_inbox",
		url: "/account-inbox",
		iconType: "inbox",
		hasPermission: D => (0, m.iY)(D) && !!(0, o.z1)("dx-message-inbox")(D),
		testId: "sidenav-account-inbox-link"
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		testId: "sidenav-bulk-redirects-link",
		hasPermission: D => (0, m.iY)(D)
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
		hasPermission: D => !Z(D) && !!(0, o.z1)("ai-audit")(D)
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		navigationType: "version",
		hasPermission: D => (0, m.$n)(D, "analytics", "analytics"),
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "version",
			hasPermission: D => !Z(D)
		}, {
			title: "navigation.account.web_analytics",
			url: "/analytics/web/overview",
			navigationType: "global-settings",
			hasPermission: D => {
				const W = (0, d.nA)(D),
					H = !!(0, o.z1)("zone-level-rum")(D);
				return (W == null ? void 0 : W.status) === "active" && H && !Z(D)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: D => !Z(D)
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: D => !Z(D)
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: D => {
				const W = (0, d.nA)(D);
				return W ? !!(!Z(D) && !!(0, d.ZB)(D, "origin_reachability_dash", "dash_view") && (0, d.tU)(W, "enterprise") && !!(0, _.Ek)(D, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: D => {
				const W = (0, d.nA)(D);
				return W ? !!(!Z(D) && !!(0, d.ZB)(D, "edge_reachability_dash", "dash_view") && (0, d.tU)(W, "enterprise") && !!(0, _.Ek)(D, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: D => !Z(D)
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "both",
			hasPermission: D => (0, C.Xu)(D)
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: D => !Z(D) && !!(0, d.ZB)(D, "logs", "instant_log") && !!(0, r.rV)(D, "logpush.max_instant_logs_jobs_allowed")
		}, {
			title: "navigation.zone.analytics.log_explorer",
			url: "/analytics/log-explorer",
			labels: ["beta"],
			navigationType: "global-settings",
			hasPermission: D => !!(0, g.V)(D)
		}, {
			title: "navigation.zone.analytics.dashboards",
			url: "/analytics/dashboards",
			navigationType: "global-settings",
			hasPermission: D => (0, J.Vp)(D)
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "global-settings",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: K.bB,
		hasPermission: D => !Z(D) && (0, ee.m7)(D)
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: D => (0, m.$n)(D, "dns_records", "dns-record"),
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
			tabs: I.hg,
			hasPermission: D => (0, m.iY)(D) && !Z(D) && (0, m.$n)(D, "dns_records", "dns-record")
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			hasPermission: D => (0, L.ig)(D) ? !1 : (0, m.$n)(D, "dns_records", "dns-record") && !!(0, d.ZB)(D, "email", "dmarc_visible")
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
			const W = (0, d.nA)(D);
			if (Z(D) || !(0, m.wB)(D, "zone_settings", "spectrum.app") || !W) return !1;
			const H = !!((0, s.l8)(D) || (0, d.DQ)(D)),
				se = !!(0, d.ZB)(D, "spectrum", "enabled"),
				ce = !!(0, d.Ns)(W);
			return se || H || !ce
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: m.jq,
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
			hasPermission: D => (0, r.$f)(D, "staging_certificates")
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: D => !!(0, o.z1)("client-certificates")(D) || !!(0, d.ZB)(D, "ssl", "client_certificates")
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
		hasPermission: D => !Z(D) && ((0, m.$n)(D, "waf", "firewall.rule") || (0, m.$n)(D, "page_shield", "script-monitor")),
		pages: [{
			title: "navigation.zone.security.overview",
			navigationType: "version",
			url: "/security/overview",
			hasPermission: D => (0, m.$n)(D, "waf", "firewall.rule") && ((0, q.P8)(D) || !!(0, o.z1)("appsec-overview")(D)),
			guidedTooltipStep: re.t.OVERVIEW
		}, {
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			tabs: V.Wu,
			hasPermission: D => (0, m.$n)(D, "waf", "firewall.rule"),
			guidedTooltipStep: re.t.ANALYTICS
		}, {
			title: "navigation.zone.security.web_assets",
			navigationType: "version",
			url: "/security/web-assets",
			guidedTooltipStep: re.t.WEB_ASSETS,
			hasPermission: D => (0, q.P8)(D) && ((0, m.$n)(D, "waf", "firewall.rule") || (0, m.$n)(D, "page_shield", "script-monitor") || (0, q.rb)(D))
		}, {
			title: "navigation.zone.security_rules",
			navigationType: "version",
			guidedTooltipStep: re.t.SECURITY_RULES,
			url: "/security/security-rules",
			hasPermission: D => (0, q.P8)(D) && ((0, m.$n)(D, "waf", "firewall.rule") || (0, q.O5)(D))
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version",
			hasPermission: D => !(0, q.P8)(D) && (0, m.$n)(D, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: w.gn,
			hasPermission: D => !(0, q.P8)(D) && (0, m.$n)(D, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: j.mt,
			hasPermission: D => !(0, q.P8)(D) && (0, m.$n)(D, "page_shield", "script-monitor")
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version",
			hasPermission: D => !(0, q.P8)(D) && (0, m.$n)(D, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: D => !(0, q.P8)(D) && (0, r.du)(D, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed") && (0, m.$n)(D, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			navigationType: "version",
			hasPermission: D => !(0, q.P8)(D) && (0, S.R0)(D),
			tabs: j.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationType: "version",
			hasPermission: D => !(0, q.P8)(D) && (0, m.$n)(D, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationType: "version",
			hasPermission: D => !(0, q.P8)(D) && (0, m.$n)(D, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/detections",
			guidedTooltipStep: re.t.SETTINGS,
			navigationType: "version",
			hasPermission: D => (0, q.P8)(D) && ((0, m.$n)(D, "waf", "firewall.rule") || (0, q.rb)(D))
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationType: "global-settings",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: D => !Z(D) && ((0, m.wB)(D, "access", "access.app") || (0, m.wB)(D, "access", "access.zone.app"))
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: D => !Z(D) && (0, m.$n)(D, "zone_settings", "setting"),
		pages: [{
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			navigationType: "version",
			labels: ["beta"]
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			navigationType: "version",
			tabs: z.x
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationType: "global-settings",
		hasPermission: D => !Z(D) && (0, m.$n)(D, "zone_settings", "setting"),
		pages: [{
			title: "navigation.common.overview",
			navigationType: "global-settings",
			url: "/caching",
			tabs: b
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationType: "both"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationType: "version",
			hasPermission: D => (0, m.$n)(D, "waf", "firewall.rule") || (0, m.$n)(D, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: D => (0, m.iY)(D)
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
		hasPermission: D => !Z(D) && (0, m.wB)(D, "worker", "worker.route")
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		navigationType: "version",
		iconType: "filter",
		testId: "zone-navigation-link-rules",
		hasPermission: D => !Z(D) && (0, m.$n)(D, "zone_settings", "page-rule"),
		pages: [{
			title: "navigation.zone.rules.overview",
			url: "/rules/overview",
			labels: ["new"],
			navigationType: "version",
			hasPermission: D => !!(0, o.z1)("rules-overview")(D)
		}, {
			title: "navigation.zone.rules.configuration_rules",
			url: "/rules/configuration-rules",
			navigationType: "version",
			hasPermission: D => !(0, o.z1)("rules-overview")(D) && ((0, m.$n)(D, "waf", "firewall.rule") || (0, m.$n)(D, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.snippets",
			url: "/rules/snippets",
			navigationType: "global-settings",
			hasPermission: D => (0, m.$n)(D, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: M.mI,
			hasPermission: D => !(0, o.z1)("rules-overview")(D)
		}, {
			title: "navigation.zone.rules.redirect_rules",
			url: "/rules/redirect-rules",
			navigationType: "version",
			tabs: M.KZ,
			hasPermission: D => !(0, o.z1)("rules-overview")(D) && (0, m.$n)(D, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			navigationType: "version",
			hasPermission: D => !(0, o.z1)("rules-overview")(D) && (0, m.$n)(D, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/rules/cache-rules",
			navigationType: "version",
			hasPermission: D => !(0, o.z1)("rules-overview")(D) && (0, m.$n)(D, "zone_settings", "setting") && ((0, m.$n)(D, "waf", "firewall.rule") || (0, m.$n)(D, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.cloud_connector",
			labels: ["beta"],
			url: "/rules/cloud-connector",
			navigationType: "version",
			hasPermission: D => !!(0, o.z1)("cloud-connector-enabled")(D)
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: D => !(0, o.z1)("rules-overview")(D) && (0, m.$n)(D, "waf", "page-rule", "read") && !!(0, r.rV)(D, "rulesets.response_compression_max_rules")
		}, {
			title: "navigation.account.request_tracer",
			url: "/rules/trace/search",
			labels: ["beta"],
			navigationType: "version",
			additionalMatchUrls: ["/:accountId/:zoneName/rules/trace/results"],
			hasPermission: D => !!(0, o.z1)("rules-overview")(D) && !!(0, Q.T)(D)
		}, {
			title: "navigation.zone.rules.page_rules",
			url: "/rules/page-rules",
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			tabs: M.od
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/error-pages",
		labels: ["new"],
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: D => !Z(D) && (0, m.$n)(D, "zone_settings", "custom-page")
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "both",
		hasPermission: D => !Z(D) && (0, m.$n)(D, "zone_settings", "setting")
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: D => (0, m.$n)(D, "lb", "load-balancer") || (0, m.$n)(D, "waitingroom", "waiting-room"),
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "global-settings",
			hasPermission: D => !Z(D)
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: D => (0, m.iY)(D)
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: D => (0, m.iY)(D)
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: D => !Z(D)
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: D => !Z(D) && !!(0, _.Ek)(D, "healthCheckEventsAdaptiveGroups")
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: D => !Z(D)
		}]
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: D => !Z(D) && (0, m.$n)(D, "zone_settings", "setting")
	}, {
		title: "navigation.zone.web3.title",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		hasPermission: D => {
			const W = (0, e.uF)(D);
			return ((W == null ? void 0 : W.roles) || []).includes("Trust and Safety") ? !1 : !Z(D)
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
		url: () => (0, T.Uj)("email-security/overview"),
		title: "navigation.account.zero_trust.email_security",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, T.Uj)("email-security/overview"),
			title: "navigation.account.zero_trust.email_security.monitoring"
		}, {
			url: () => (0, T.Uj)("email-security/investigation"),
			title: "navigation.account.zero_trust.email_security.investigation"
		}, {
			url: () => (0, T.Uj)("email-security/settings"),
			title: "navigation.account.zero_trust.email_security.settings"
		}, {
			url: () => (0, T.Uj)("email-security/directories"),
			title: "navigation.account.zero_trust.email_security.directories"
		}, {
			url: () => (0, T.Uj)("email-security/phishguard"),
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
	support: f.Gj
}