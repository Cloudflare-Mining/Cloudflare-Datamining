const navigation = {
	root: [{
		title: "navigation.root.organizations",
		url: "/organizations",
		labels: ["new"],
		iconType: "globe",
		hasPermission: I => !!(0, o.z1)("control-plane-large-orgs")(I)
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
		hasPermission: I => (0, o.z1)(c.Mr)(I) && (0, D.z7)(I) && !!(0, D.z$)(I).length
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
		title: I => (0, o.z1)("fractus-managed-profile")(I) ? "navigation.profile.settings" : "navigation.profile.preferences",
		url: I => (0, o.z1)("fractus-managed-profile")(I) ? "/managed-profile" : "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: I => !!(0, o.z1)("oauth-access-management")(I)
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: I => !(0, h.n3)() && !(0, o.z1)("oauth-access-management")(I)
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: I => !(0, o.z1)("oauth-access-management")(I)
	}],
	account: [{
		title: "navigation.account.home",
		url: "/home",
		iconType: "home",
		testId: "sidenav-home-link",
		hasPermission: I => (0, f.iY)(I)
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
			hasPermission: I => (0, f.gw)(I)
		}]
	}, {
		title: "navigation.common.observability",
		url: "/observability",
		labels: ["beta"],
		iconType: "chart",
		hasPermission: I => (0, s.GU)(I, "eos-navigation") && ((0, E.q)(I) || (0, H.Ko)(I)),
		pages: [{
			title: "navigation.account.log_explorer",
			url: "/observability/log-explorer",
			hasPermission: I => (0, f.iY)(I) && (0, E.q)(I)
		}, {
			title: "navigation.account.dashboards",
			url: "/observability/dashboards",
			hasPermission: I => !!(0, H.Ko)(I)
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
			hasPermission: I => (0, f.iY)(I)
		}, {
			title: "navigation.account.account_http_traffic",
			url: "/http-traffic",
			labels: ["beta"],
			hasPermission: I => (0, f.iY)(I) && !!(0, o.z1)("account-traffic-analytics")(I)
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics/all-traffic",
			hasPermission: I => (0, f.iY)(I) && (0, T.Ob)(I)
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: I => (0, f.iY)(I)
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			hasPermission: I => (0, f.iY)(I) && (0, b.S6)(I) && !!(0, o.z1)("account-logpush")(I)
		}, {
			title: "navigation.account.log_explorer",
			url: "/log-explorer",
			labels: ["beta"],
			hasPermission: I => (0, f.iY)(I) && (0, E.q)(I) && !(0, s.GU)(I, "eos-navigation")
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: I => (0, f.iY)(I) && !!(0, e.Le)(I, "account_analytics", "carbon_dashboard")
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			hasPermission: I => (0, f.iY)(I) && (!!(0, e.Le)(I, "account_analytics", "magic_network_monitoring") || !!(0, r.$f)(I, "rulesets.magic_transit_allowed"))
		}, {
			title: "navigation.account.dashboards",
			url: "/dashboards",
			hasPermission: I => !!(0, H.Ko)(I) && !(0, s.GU)(I, "eos-navigation")
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		testId: "sidenav-security-center-link",
		hasPermission: I => (0, f.iY)(I) && (0, u.xU)(I),
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: I => (0, f.iY)(I) && (0, u.v_)(I)
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			hasPermission: I => (0, f.iY)(I) && (0, u.en)(I)
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			hasPermission: I => (0, f.iY)(I) && (0, u.en)(I)
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: I => (0, f.iY)(I) && (0, u.sL)(I)
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: I => (0, f.iY)(I) && (0, u.TT)(I)
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: I => (0, f.iY)(I) && (0, u.jD)(I)
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: I => (0, f.iY)(I) && (0, u.BU)(I) && ((0, e.hI)(I) || (0, e.CV)(I))
		}, {
			title: "navigation.account.security_center.blocked_content",
			url: "/security-center/blocked-content",
			labels: ["new"],
			hasPermission: I => (0, f.iY)(I) && (0, u.XB)(I)
		}, {
			title: "navigation.account.security_center.threat_intelligence",
			url: "/security-center/threat-intelligence",
			hasPermission: I => (0, f.iY)(I) && (0, u.fS)(I)
		}]
	}, {
		title: "navigation.account.request_tracer",
		url: "/trace",
		iconType: "trace",
		testId: "sidenav-trace-link",
		labels: ["beta"],
		hasPermission: Y.T
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
		tabs: _.DW
	}, {
		title: "navigation.account.internal_dns",
		url: "/internal-dns",
		labels: ["beta"],
		iconType: "zerotrust-networks-logo",
		testId: "sidenav-internal-dns-link",
		hasPermission: I => G(I)
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: I => (0, r.Ci)(I)
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		hasPermission: I => (0, f.iY)(I) && !!(0, o.z1)("managed-challenge-ui")(I)
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.zone.traffic.load_balancing",
		url: "/load-balancing",
		iconType: "reliability-load-balancer",
		hasPermission: I => !!(0, o.z1)("account-load-balancing")(I)
	}, {
		title: "navigation.account.interconnects",
		url: "/interconnects",
		iconType: "cloudflare-magic-wan",
		testId: "sidenav-interconnects-link",
		hasPermission: I => !!((0, f.iY)(I) && (!!(0, e.Le)(I, "magic_wan", "mw_home") || !!(0, e.Le)(I, "magic_transit", "mt_home")))
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		testId: "sidenav-magic-transit-link",
		hasPermission: I => (0, f.iY)(I) && !!(0, e.Le)(I, "magic_transit", "mt_home"),
		pages: [{
			title: "navigation.account.magic_connectors.network_overview",
			url: "/magic-transit/network",
			labels: ["beta"],
			hasPermission: I => !!(0, o.z1)("magic-transit-cf-site")(I)
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
		hasPermission: I => !!(0, f.zJ)(I),
		tabs: _.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		testId: "sidenav-ddos-link",
		hasPermission: I => {
			const ie = !!(0, f.Wq)(I) && !!(0, f.fO)(I);
			return !!(0, f.us)(I) || ie
		},
		tabs: _.Dn,
		pages: [{
			title: "navigation.account.l3l4.ddos.ddos_managed_rules",
			url: "/network-security/ddos",
			hasPermission: I => !!(0, f.Wq)(I) && !!(0, f.fO)(I)
		}, {
			title: "navigation.account.l3l4.ddos.ddos_protection",
			url: "/network-security/ddos-protection",
			hasPermission: I => (0, f.us)(I),
			tabs: _.O1
		}]
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/proxy-ips",
		iconType: "network",
		testId: "sidenav-ip-addresses-link",
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: I => (0, f.iY)(I) && ((0, r.$f)(I, "addressing.byoip_allowed") || !!(0, e.Le)(I, "addressing", "ip_prefixes"))
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
		url: I => "/magic-networking/overview",
		iconType: "cloudflare-magic-wan",
		testId: "sidenav-magic-networks-link",
		hasPermission: I => (0, f.iY)(I) && !!(0, o.z1)("magic-fractus-networking")(I) && (!!(0, e.Le)(I, "magic_wan", "mw_home") || !!(0, e.Le)(I, "magic_wan", "mc_home") || !!(0, e.Le)(I, "magic_transit", "mt_home")),
		pages: [{
			title: "navigation.account.magic_networks.overview",
			url: "/magic-networking/overview"
		}, {
			title: "navigation.account.magic_networks.firewall",
			url: "/magic-networking/firewall",
			hasPermission: I => !!(0, o.z1)("magic-fractus-firewall")(I)
		}]
	}, {
		title: "navigation.account.magic_networks",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser",
		hasPermission: I => !!(0, o.z1)("magic-fractus-networking")(I)
	}, {
		title: "navigation.account.zero_trust",
		url: () => {
			const I = (0, A.e1)(),
				ie = "https://one.dash.cloudflare.com";
			return I ? `${ie}/${I}/` : ie
		},
		iconType: "cloudflare-zero-trust",
		testId: "sidenav-zero-trust-link",
		labels: I => (0, o.z1)("zt-sidebar")(I) ? [] : ["external-link"],
		hasPermission: I => (0, f.iY)(I)
	}, {
		title: "navigation.account.magic_wan",
		url: I => (0, o.z1)("magic-cf-site")(I) ? "/magic-wan/network" : "/magic-wan/overview",
		iconType: "cloudflare-magic-wan",
		testId: "sidenav-magic-wan-link",
		hasPermission: I => (0, f.iY)(I) && !!(0, e.Le)(I, "magic_wan", "mw_home") || !!(0, e.Le)(I, "magic_wan", "mc_home"),
		pages: [{
			title: "navigation.account.magic_connectors.overview",
			url: "/magic-wan/overview",
			hasPermission: I => (0, f.iY)(I) && !!(0, e.Le)(I, "magic_wan", "mc_home") && !(0, o.z1)("magic-cf-site")(I)
		}, {
			title: "navigation.account.magic_connectors.sites",
			url: "/magic-wan/sites",
			hasPermission: I => (0, f.iY)(I) && !!(0, e.Le)(I, "magic_wan", "mc_home") && !(0, o.z1)("magic-cf-site")(I)
		}, {
			title: "navigation.account.magic_connectors.network_overview",
			url: "/magic-wan/network",
			labels: I => (0, o.z1)("magic-beta-flags-disabled")(I) ? [] : ["beta"],
			hasPermission: I => (0, f.iY)(I) && !!(0, o.z1)("magic-cf-site")(I)
		}, {
			title: "navigation.account.magic_connectors.mconn_onramp",
			url: "/magic-wan/mconn-onramp",
			labels: I => (0, o.z1)("magic-beta-flags-disabled")(I) ? [] : ["beta"],
			hasPermission: I => (0, f.iY)(I) && !!(0, e.Le)(I, "magic_wan", "mc_home") && !!(0, o.z1)("magic-cf-site")(I)
		}, {
			title: "navigation.account.magic_connectors.cloud_onramp",
			url: "/magic-wan/cloud-onramp",
			labels: I => (0, o.z1)("magic-beta-flags-disabled")(I) ? [] : ["beta"],
			hasPermission: I => !!(0, r.$f)(I, "magic_cloud.enabled")
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
		hasPermission: I => (0, f.iY)(I),
		testId: "sidenav-workers-pages-link",
		pages: [{
			title: "navigation.account.workers_and_pages",
			url: "/workers-and-pages"
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces",
			hasPermission: I => !(0, o.z1)("storage-and-databases-account-navigation")(I)
		}, {
			title: "navigation.account.workers.durable_objects",
			url: "/workers/durable-objects",
			hasPermission: I => !!(0, o.z1)("durable-objects-ui")(I)
		}, {
			title: "navigation.account.workers.containers",
			url: "/workers/containers",
			labels: ["beta"],
			hasPermission: I => !!(0, o.z1)("containers-ui")(I)
		}, {
			title: "navigation.account.workers.observability",
			url: "/workers-and-pages/observability",
			labels: ["beta"],
			hasPermission: I => !!(0, o.z1)("query-builder")(I)
		}, {
			title: "navigation.account.workers.workflows",
			url: "/workers/workflows",
			hasPermission: I => !!(0, o.z1)("workflows-ui")(I)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			hasPermission: I => !(0, o.z1)("storage-and-databases-account-navigation")(I),
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			hasPermission: I => !(0, o.z1)("storage-and-databases-account-navigation")(I)
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: I => !!(0, o.z1)("constellation-ui")(I) && !(0, e.RO)(I)
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: I => !!(0, o.z1)("hyperdrive-ui")(I) && !(0, o.z1)("storage-and-databases-account-navigation")(I)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: I => (0, S.r)(I) && (0, S._)(I) && !(0, o.z1)("storage-and-databases-account-navigation")(I)
		}, {
			title: "navigation.account.workers.browser_rendering",
			url: "/workers/browser-rendering"
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: I => {
				const ie = (0, l.tJ)(I);
				return !(0, v.ky)(ie, [g.uD.EnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.secrets_store",
		url: "/secrets-store",
		labels: ["new"],
		iconType: "lock",
		testId: "secrets-store",
		hasPermission: I => (0, a.j)(I)
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: I => (0, f.iY)(I) && (0, Q.k)(I)
	}, {
		title: "navigation.account.storage_and_databases",
		url: "/workers/kv/namespaces",
		iconType: "d1",
		testId: "sidenav-d1-link",
		hasPermission: I => !!(0, o.z1)("storage-and-databases-account-navigation")(I),
		pages: [{
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1"
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: I => !!(0, o.z1)("hyperdrive-ui")(I)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: I => (0, S.r)(I) && (0, S._)(I)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.clipboard",
			url: "/workers/clipboards",
			testId: "sidenav-clipboard-link",
			hasPermission: I => !!(0, o.z1)("queues-clipboard")(I)
		}, {
			title: "navigation.account.workers.analytics",
			url: "/workers/analytics-engine"
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2/overview",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: I => (0, f.iY)(I),
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: I => (0, f.o_)(I)
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: I => (0, f.o_)(I)
		}]
	}, {
		title: "navigation.account.workers.ai",
		url: "/ai/workers-ai",
		iconType: "workers-constellation",
		hasPermission: I => (0, f.iY)(I),
		testId: "sidenav-ai-link",
		pages: [{
			title: "navigation.account.workers.ai.workers-ai",
			url: "/ai/workers-ai",
			testId: "sidenav-ai-workers-link"
		}, {
			title: "navigation.account.workers.ai.vectorize",
			url: "/ai/vectorize",
			testId: "sidenav-ai-vectorize-link",
			hasPermission: I => (0, e.RO)(I)
		}, {
			title: "navigation.account.workers.ai.ai-gateway",
			url: "/ai/ai-gateway",
			testId: "sidenav-ai-gateway-link",
			hasPermission: I => !!(0, e.B)(I)
		}, {
			title: "navigation.account.workers.ai.ai-rag",
			url: "/ai/autorag",
			labels: ["beta"],
			hasPermission: I => !!(0, o.z1)("ai-auto-rag")(I)
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		testId: "sidenav-stream-link",
		hasPermission: I => (0, f.iY)(I),
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: I => (0, f.hv)(I)
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: I => (0, f.hv)(I)
		}, {
			title: "navigation.account.stream.video_transformations",
			labels: ["beta"],
			url: "/stream/video-transformations",
			hasPermission: I => (0, f.hv)(I) && (0, s.GU)(I, "stream-video-transformations-beta-enabled")
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			hasPermission: I => (0, f.hv)(I)
		}, {
			title: "navigation.account.stream.plans",
			url: "/stream/plans",
			hasPermission: I => !(0, f.hv)(I)
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: I => (0, f.iY)(I),
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images"
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: I => (0, f.dL)(I)
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: I => (0, f.dL)(I)
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: I => (0, f.dL)(I),
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link"
		}, {
			title: "navigation.account.images.plans",
			url: "/images/plans",
			testId: "sidenav-plans-link",
			hasPermission: I => !(0, f.IU)(I)
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		iconType: "calls",
		testId: "sidenav-calls-link",
		hasPermission: I => (0, f.iY)(I) && !(0, s.GU)(I, "realtime-ui")
	}, {
		title: "navigation.account.realtime",
		url: "/realtime",
		iconType: "calls",
		testId: "sidenav-realtime-link",
		hasPermission: I => (0, f.iY)(I) && (0, s.GU)(I, "realtime-ui"),
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
			hasPermission: I => (0, f.iY)(I)
		}, {
			title: "navigation.account.api_tokens",
			url: "/api-tokens",
			testId: "account-homepage-api-tokens",
			hasPermission: I => (0, f.iY)(I)
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: I => (0, i.b)(I) ? (0, f.iY)(I) : (0, e.Yj)(I)("auditlogs").read
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: I => (0, f.iY)(I)
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: I => (0, f.iY)(I)
		}, {
			title: "navigation.account.shared_configurations",
			url: "/shared-configurations",
			testId: "shared-config-link",
			labels: ["alpha"],
			hasPermission: I => (0, B.K)(I, "account")
		}, {
			title: "navigation.account.abuse",
			url: "/abuse",
			labels: ["beta"],
			hasPermission: I => (0, f.iY)(I) && (0, u.V0)(I)
		}, {
			title: "navigation.account.mcn",
			url: "/mcn/integrations",
			labels: I => (0, o.z1)("magic-beta-flags-disabled")(I) ? [] : ["beta"],
			hasPermission: I => !!((0, f.iY)(I) && !!(0, r.$f)(I, "magic_cloud.enabled")),
			testId: "sidenav-mcn-pages-link"
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		testId: "sidenav-notifications-link",
		hasPermission: I => (0, f.iY)(I)
	}, {
		title: "navigation.account.account_inbox",
		url: "/account-inbox",
		iconType: "inbox",
		hasPermission: I => (0, f.iY)(I) && !!(0, o.z1)("dx-message-inbox")(I),
		testId: "sidenav-account-inbox-link"
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		testId: "sidenav-bulk-redirects-link",
		hasPermission: I => (0, f.iY)(I)
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
		hasPermission: I => !Z(I) && !!(0, o.z1)("ai-audit")(I)
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		navigationType: "version",
		hasPermission: I => (0, f.$n)(I, "analytics", "analytics"),
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "version",
			hasPermission: I => !Z(I)
		}, {
			title: "navigation.account.web_analytics",
			url: "/analytics/web/overview",
			navigationType: "global-settings",
			hasPermission: I => {
				const ie = (0, d.nA)(I),
					ce = !!(0, o.z1)("zone-level-rum")(I);
				return (ie == null ? void 0 : ie.status) === "active" && ce && !Z(I)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: I => !Z(I)
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: I => !Z(I)
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: I => {
				const ie = (0, d.nA)(I);
				return ie ? !!(!Z(I) && !!(0, d.ZB)(I, "origin_reachability_dash", "dash_view") && (0, d.tU)(ie, "enterprise") && !!(0, y.Ek)(I, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: I => {
				const ie = (0, d.nA)(I);
				return ie ? !!(!Z(I) && !!(0, d.ZB)(I, "edge_reachability_dash", "dash_view") && (0, d.tU)(ie, "enterprise") && !!(0, y.Ek)(I, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: I => !Z(I)
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "both",
			hasPermission: I => (0, b.Xu)(I)
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: I => !Z(I) && !!(0, d.ZB)(I, "logs", "instant_log") && !!(0, r.rV)(I, "logpush.max_instant_logs_jobs_allowed")
		}, {
			title: "navigation.zone.analytics.log_explorer",
			url: "/analytics/log-explorer",
			labels: ["beta"],
			navigationType: "global-settings",
			hasPermission: I => !!(0, E.q)(I)
		}, {
			title: "navigation.zone.analytics.dashboards",
			url: "/analytics/dashboards",
			navigationType: "global-settings",
			hasPermission: I => (0, H.Vp)(I)
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "global-settings",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: X.bB,
		hasPermission: I => !Z(I) && (0, ee.m7)(I)
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: I => (0, f.$n)(I, "dns_records", "dns-record"),
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
			tabs: M.hg,
			hasPermission: I => (0, f.iY)(I) && !Z(I) && (0, f.$n)(I, "dns_records", "dns-record")
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			hasPermission: I => (0, L.ig)(I) ? !1 : (0, f.$n)(I, "dns_records", "dns-record") && !!(0, d.ZB)(I, "email", "dmarc_visible")
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
		hasPermission: I => {
			const ie = (0, d.nA)(I);
			if (Z(I) || !(0, f.wB)(I, "zone_settings", "spectrum.app") || !ie) return !1;
			const ce = !!((0, s.l8)(I) || (0, d.DQ)(I)),
				ae = !!(0, d.ZB)(I, "spectrum", "enabled"),
				de = !!(0, d.Ns)(ie);
			return ae || ce || !de
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: f.jq,
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
			hasPermission: I => (0, r.$f)(I, "staging_certificates")
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: I => !!(0, o.z1)("client-certificates")(I) || !!(0, d.ZB)(I, "ssl", "client_certificates")
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
		hasPermission: I => !Z(I) && ((0, f.$n)(I, "waf", "firewall.rule") || (0, f.$n)(I, "page_shield", "script-monitor")),
		pages: [{
			title: "navigation.zone.security.overview",
			navigationType: "version",
			url: "/security/overview",
			hasPermission: I => (0, f.$n)(I, "waf", "firewall.rule") && ((0, K.P8)(I) || !!(0, o.z1)("appsec-overview")(I)),
			guidedTooltipStep: ne.t.OVERVIEW
		}, {
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			tabs: W.Wu,
			hasPermission: I => (0, f.$n)(I, "waf", "firewall.rule"),
			guidedTooltipStep: ne.t.ANALYTICS
		}, {
			title: "navigation.zone.security.web_assets",
			navigationType: "version",
			url: "/security/web-assets",
			guidedTooltipStep: ne.t.WEB_ASSETS,
			hasPermission: I => (0, K.P8)(I) && ((0, f.$n)(I, "waf", "firewall.rule") || (0, f.$n)(I, "page_shield", "script-monitor") || (0, K.rb)(I))
		}, {
			title: "navigation.zone.security_rules",
			navigationType: "version",
			guidedTooltipStep: ne.t.SECURITY_RULES,
			url: "/security/security-rules",
			hasPermission: I => (0, K.P8)(I) && ((0, f.$n)(I, "waf", "firewall.rule") || (0, K.O5)(I))
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version",
			hasPermission: I => !(0, K.P8)(I) && (0, f.$n)(I, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: x.gn,
			hasPermission: I => !(0, K.P8)(I) && (0, f.$n)(I, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: R.mt,
			hasPermission: I => !(0, K.P8)(I) && (0, f.$n)(I, "page_shield", "script-monitor")
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version",
			hasPermission: I => !(0, K.P8)(I) && (0, f.$n)(I, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: I => !(0, K.P8)(I) && (0, r.du)(I, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed") && (0, f.$n)(I, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			navigationType: "version",
			hasPermission: I => !(0, K.P8)(I) && (0, N.R0)(I),
			tabs: R.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationType: "version",
			hasPermission: I => !(0, K.P8)(I) && (0, f.$n)(I, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationType: "version",
			hasPermission: I => !(0, K.P8)(I) && (0, f.$n)(I, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/detections",
			guidedTooltipStep: ne.t.SETTINGS,
			navigationType: "version",
			hasPermission: I => (0, K.P8)(I) && ((0, f.$n)(I, "waf", "firewall.rule") || (0, K.rb)(I))
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationType: "global-settings",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: I => !Z(I) && ((0, f.wB)(I, "access", "access.app") || (0, f.wB)(I, "access", "access.zone.app"))
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: I => !Z(I) && (0, f.$n)(I, "zone_settings", "setting"),
		pages: [{
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			navigationType: "version",
			labels: ["beta"]
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			navigationType: "version",
			tabs: U.x
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationType: "global-settings",
		hasPermission: I => !Z(I) && (0, f.$n)(I, "zone_settings", "setting"),
		pages: [{
			title: "navigation.common.overview",
			navigationType: "global-settings",
			url: "/caching",
			tabs: C
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationType: "both"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationType: "version",
			hasPermission: I => (0, f.$n)(I, "waf", "firewall.rule") || (0, f.$n)(I, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: I => (0, f.iY)(I)
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
		hasPermission: I => !Z(I) && (0, f.wB)(I, "worker", "worker.route")
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		navigationType: "version",
		iconType: "filter",
		testId: "zone-navigation-link-rules",
		hasPermission: I => !Z(I) && (0, f.$n)(I, "zone_settings", "page-rule"),
		pages: [{
			title: "navigation.zone.rules.overview",
			url: "/rules/overview",
			labels: ["new"],
			navigationType: "version",
			hasPermission: I => !!(0, o.z1)("rules-overview")(I)
		}, {
			title: "navigation.zone.rules.configuration_rules",
			url: "/rules/configuration-rules",
			navigationType: "version",
			hasPermission: I => !(0, o.z1)("rules-overview")(I) && ((0, f.$n)(I, "waf", "firewall.rule") || (0, f.$n)(I, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.snippets",
			url: "/rules/snippets",
			navigationType: "global-settings",
			hasPermission: I => (0, f.$n)(I, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: O.mI,
			hasPermission: I => !(0, o.z1)("rules-overview")(I)
		}, {
			title: "navigation.zone.rules.redirect_rules",
			url: "/rules/redirect-rules",
			navigationType: "version",
			tabs: O.KZ,
			hasPermission: I => !(0, o.z1)("rules-overview")(I) && (0, f.$n)(I, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			navigationType: "version",
			hasPermission: I => !(0, o.z1)("rules-overview")(I) && (0, f.$n)(I, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/rules/cache-rules",
			navigationType: "version",
			hasPermission: I => !(0, o.z1)("rules-overview")(I) && (0, f.$n)(I, "zone_settings", "setting") && ((0, f.$n)(I, "waf", "firewall.rule") || (0, f.$n)(I, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.cloud_connector",
			labels: ["beta"],
			url: "/rules/cloud-connector",
			navigationType: "version",
			hasPermission: I => !!(0, o.z1)("cloud-connector-enabled")(I)
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: I => !(0, o.z1)("rules-overview")(I) && (0, f.$n)(I, "waf", "page-rule", "read") && !!(0, r.rV)(I, "rulesets.response_compression_max_rules")
		}, {
			title: "navigation.account.request_tracer",
			url: "/rules/trace/search",
			labels: ["beta"],
			navigationType: "version",
			additionalMatchUrls: ["/:accountId/:zoneName/rules/trace/results"],
			hasPermission: I => !!(0, o.z1)("rules-overview")(I) && !!(0, Y.T)(I)
		}, {
			title: "navigation.zone.rules.page_rules",
			url: "/rules/page-rules",
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			tabs: O.od
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/error-pages",
		labels: ["new"],
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: I => !Z(I) && (0, f.$n)(I, "zone_settings", "custom-page")
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "both",
		hasPermission: I => !Z(I) && (0, f.$n)(I, "zone_settings", "setting")
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: I => (0, f.$n)(I, "lb", "load-balancer") || (0, f.$n)(I, "waitingroom", "waiting-room"),
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "global-settings",
			hasPermission: I => !Z(I)
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: I => (0, f.iY)(I)
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: I => (0, f.iY)(I)
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: I => !Z(I)
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: I => !Z(I) && !!(0, y.Ek)(I, "healthCheckEventsAdaptiveGroups")
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: I => !Z(I)
		}]
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: I => !Z(I) && (0, f.$n)(I, "zone_settings", "setting")
	}, {
		title: "navigation.zone.web3.title",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		hasPermission: I => {
			const ie = (0, e.uF)(I);
			return ((ie == null ? void 0 : ie.roles) || []).includes("Trust and Safety") ? !1 : !Z(I)
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
	support: m.Gj
}