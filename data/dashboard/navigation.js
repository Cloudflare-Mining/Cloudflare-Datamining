const navigation = {
	root: [{
		title: "navigation.root.accounts",
		url: "/",
		iconType: "user-multi"
	}, {
		title: "navigation.root.websites",
		url: "/websites",
		iconType: "internet-browser"
	}, {
		title: "navigation.root.profile",
		url: "/profile",
		iconType: "user-outline"
	}, {
		title: "navigation.root.partners",
		url: "/partners",
		iconType: "user-multi",
		hasPermission: function(s) {
			return (0, n.z1)(o.Mr)(s) === !0
		}
	}],
	partners: [],
	profile: [{
		title: "navigation.profile.preferences",
		url: "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: function(s) {
			return !!(0, n.z1)("oauth-access-management")(s)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(s) {
			return !(0, h.n3)() && !(0, n.z1)("oauth-access-management")(s)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(s) {
			return !(0, n.z1)("oauth-access-management")(s)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(s) {
			return (0, n.z1)("registrar-account-home-copy-experiment")(s) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "/domains",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(s) {
				return (0, r.YV)(s)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			hasPermission: function(s) {
				return (0, r.YV)(s)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			labels: ["beta"],
			hasPermission: function(s) {
				return (0, r.gw)(s)
			}
		}]
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: function(s) {
				return (0, r.iY)(s)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: function(s) {
				return (0, a.Le)(s, "account_analytics", "dos_analytics_v2") ? "/network-analytics/all-traffic" : "/network-analytics"
			},
			hasPermission: function(s) {
				return (0, r.iY)(s) && !!(0, a.Le)(s, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(s) {
				return (0, r.iY)(s)
			}
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			labels: ["new"],
			hasPermission: function(s) {
				return (0, r.iY)(s) && (0, v.S6)(s) && !!(0, n.z1)("account-logpush")(s)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(s) {
				return (0, r.iY)(s) && !!(0, a.Le)(s, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			labels: ["beta"],
			hasPermission: function(s) {
				return (0, r.iY)(s) && !!(0, a.Le)(s, "account_analytics", "magic_network_monitoring")
			}
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(s) {
			return (0, r.iY)(s) && (0, C.xU)(s)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(s) {
				return (0, r.iY)(s) && (0, C.sL)(s)
			}
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			labels: ["beta"],
			hasPermission: function(s) {
				return (0, r.iY)(s) && !!(0, n.z1)("account-level-security-analytics")(s) && (0, u.p1)(s)
			}
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			labels: ["beta"],
			hasPermission: function(s) {
				return (0, r.iY)(s) && !!(0, n.z1)("account-level-security-analytics")(s) && (0, u.p1)(s)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(s) {
				return (0, r.iY)(s) && (0, C.sL)(s)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(s) {
				return (0, r.iY)(s) && (0, C.TT)(s)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			labels: ["beta"],
			hasPermission: function(s) {
				return (0, r.iY)(s) && (0, C.jD)(s)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: function(s) {
				return (0, r.iY)(s) && (0, C.BU)(s)
			}
		}, {
			title: "navigation.account.security_center.cfone",
			url: "/cloudforce-one",
			hasPermission: function(s) {
				return (0, r.iY)(s) && (0, C.sK)(s)
			}
		}]
	}, {
		title: "navigation.account.group_title.application_services",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.waf",
		url: "/application-security/waf",
		iconType: "cloudflare-security-application",
		hasPermission: function(s) {
			return !!(0, r.AB)(s)
		},
		tabs: T.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: function(s) {
			return (0, u.Ci)(s)
		}
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(s) {
			return (0, r.iY)(s) && !!(0, n.z1)("managed-challenge-ui")(s)
		}
	}, {
		title: "navigation.account.group_title.network_services",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(s) {
			return (0, r.iY)(s) && !!(0, a.Le)(s, "magic_transit", "mt_home")
		},
		tabs: f.Lx.concat(f.SF, f.Jg)
	}, {
		title: "navigation.account.magic_firewall",
		url: "/network-security/magic_firewall",
		iconType: "magic-firewall",
		hasPermission: function(s) {
			return !!(0, r.zJ)(s)
		},
		tabs: T.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: function(s) {
			var Z = !!(0, r.Wq)(s) && !!(0, r.fO)(s);
			return !!(0, r.Tk)(s) || Z
		},
		tabs: T.Dn
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: function(s) {
				return (0, r.iY)(s) && !!(0, a.Le)(s, "addressing", "ip_prefixes")
			}
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: function(s) {
				return (0, r.iY)(s) && !!(0, n.z1)("proxy-ips-ui")(s)
			}
		}],
		hasPermission: function(s) {
			return (0, r.iY)(s) && !!(0, a.Le)(s, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.group_title.cloudflare_one",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: function() {
			var s = (0, c.e1)(),
				Z = "https://one.dash.cloudflare.com";
			return s ? "".concat(Z, "/").concat(s, "/") : Z
		},
		iconType: "cloudflare-zero-trust",
		labels: function(s) {
			return (0, n.z1)("zt-sidebar")(s) ? [] : ["external-link"]
		},
		hasPermission: function(s) {
			return (0, r.iY)(s)
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(s) {
			return (0, r.iY)(s) && !!(0, a.Le)(s, "magic_wan", "mw_home")
		},
		tabs: f.SF.concat(f.Jg)
	}, {
		hasPermission: function(s) {
			return (0, r.iY)(s)
		},
		iconType: "email-forwarding",
		title: "navigation.account.area_one",
		url: "/area1"
	}, {
		title: "navigation.account.group_title.developer_platform",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(s) {
			return !(0, n.z1)("workers-and-pages-convergence")(s) && (0, r.iY)(s)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(s) {
				return !!(0, a.Le)(s, "workers", "origin_workers") && !!(0, a.Le)(s, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(s) {
				return !!(0, n.z1)("queues-ui")(s)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(s) {
				return !!(0, a.Le)(s, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(s) {
				var Z = (0, l.tJ)(s);
				return !(0, i.ky)(Z, [E.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_and_pages",
		url: "/workers-and-pages",
		iconType: "edgeworker",
		hasPermission: function(s) {
			return !!(0, n.z1)("workers-and-pages-convergence")(s) && (0, r.iY)(s)
		},
		pages: [{
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(s) {
				return !!(0, n.z1)("queues-ui")(s)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(s) {
				return !!(0, a.Le)(s, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(s) {
				var Z = (0, l.tJ)(s);
				return !(0, i.ky)(Z, [E.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(s) {
			return !!(0, n.z1)("workers-for-platforms")(s) && (0, r.iY)(s) && ((0, u.p1)(s) || !!(0, a.Le)(s, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(s) {
			return !(0, n.z1)("workers-and-pages-convergence")(s) && (0, r.iY)(s)
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(s) {
			return (0, r.iY)(s)
		},
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: function(s) {
				return (0, r.o_)(s)
			}
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			labels: ["beta"],
			hasPermission: function(s) {
				return (0, r.o_)(s)
			}
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(s) {
			return (0, r.iY)(s)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(s) {
				return (0, r.hv)(s)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(s) {
				return (0, r.hv)(s)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(s) {
				return (0, r.hv)(s)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: function(s) {
			return (0, r.iY)(s)
		},
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images/images",
			hasPermission: function(s) {
				return (0, r.IU)(s)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(s) {
				return (0, r.IU)(s)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(s) {
				return (0, r.IU)(s)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: function(s) {
				return (0, r.IU)(s)
			},
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link",
			hasPermission: function(s) {
				return (0, r.IU)(s) && (0, _.b8)(s)
			},
			labels: ["new"]
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(s) {
			return (0, r.iY)(s) && (!!(0, a.Le)(s, "calls", "enabled") || !!(0, a.Le)(s, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.group_title.account_management",
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
			hasPermission: function(s) {
				return (0, r.iY)(s)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(s) {
				return (0, g.b)(s) ? (0, r.iY)(s) : (0, a.Yj)(s)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(s) {
				return (0, r.iY)(s)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(s) {
				return (0, r.iY)(s)
			}
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(s) {
			return (0, r.iY)(s)
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(s) {
			return (0, r.iY)(s)
		}
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(s) {
			return (0, r.iY)(s) && (0, M.dU)(s)
		}
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
		navigationType: "both",
		hasPermission: function(s) {
			return (0, r.$n)(s, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "both",
			hasPermission: function(s) {
				return !(0, u.yD)(s)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return !(0, u.yD)(s)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return !(0, u.yD)(s)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: function(s) {
				var Z = (0, m.nA)(s);
				return Z ? !!(!(0, u.yD)(s) && !!(0, m.ZB)(s, "origin_reachability_dash", "dash_view") && (0, m.tU)(Z, "enterprise") && !!(0, b.Ek)(s, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: function(s) {
				var Z = (0, m.nA)(s);
				return Z ? !!(!(0, u.yD)(s) && !!(0, m.ZB)(s, "edge_reachability_dash", "dash_view") && (0, m.tU)(Z, "enterprise") && !!(0, b.Ek)(s, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationType: "global-settings",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return !(0, u.yD)(s)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return Object.values((0, v.H_)(s)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return !(0, u.yD)(s) && !!(0, m.ZB)(s, "logs", "instant_log") && !!(0, u.rV)(s, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "both",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: R.bB,
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, d.m7)(s)
		}
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(s) {
			return (0, r.$n)(s, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return !!(0, n.z1)("dns-tab-sections")(s)
			}
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return !!(0, n.z1)("dns-tab-sections")(s)
			}
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		navigationType: "global-settings",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.email.routing",
			navigationType: "global-settings",
			url: "/email/routing",
			tabs: p.hg
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			labels: ["beta"],
			hasPermission: function(s) {
				return !!(0, m.ZB)(s, "email", "dmarc_visible")
			}
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
		hasPermission: function(s) {
			var Z = (0, m.nA)(s);
			if ((0, u.yD)(s) || !(0, r.wB)(s, "zone_settings", "spectrum.app") || !Z) return !1;
			var Q = !!((0, U.l8)(s) || (0, m.DQ)(s)),
				G = !!(0, m.ZB)(s, "spectrum", "enabled"),
				B = !!(0, m.Ns)(Z);
			return G || Q || !B
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "ssl", "ssl.cert")
		},
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
			hasPermission: function(s) {
				return (0, u.$f)(s, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return !!(0, n.z1)("client-certificates")(s) || !!(0, m.ZB)(s, "ssl", "client_certificates")
			}
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
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			labels: ["beta"],
			hasPermission: function(s) {
				return (0, S.B_)(s)
			}
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version"
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: A.gn
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: A.mt
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version"
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return (0, u.du)(s, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			navigationType: "global-settings",
			hasPermission: function(s) {
				var Z = (0, m.nA)(s);
				return Z ? !!(0, m.ZB)(s, "firewall", "api_shield_tab") && (0, m.tU)(Z, "business") : !1
			},
			tabs: A.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationType: "version"
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationType: "version"
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationType: "global-settings",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && ((0, r.wB)(s, "access", "access.app") || (0, r.wB)(s, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			navigationType: "version",
			labels: ["beta"]
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			navigationType: "version"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationType: "global-settings",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			navigationType: "global-settings",
			url: "/caching"
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationType: "version"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationType: "version",
			labels: ["beta"],
			hasPermission: function(s) {
				return (0, r.$n)(s, "waf", "firewall.rule") || (0, r.$n)(s, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: function(s) {
				return (0, r.iY)(s)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			navigationType: "global-settings",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(s) {
				return !!(0, r.HO)(s)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		navigationType: "version",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.wB)(s, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationType: "version",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules",
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.configuration_rules",
			labels: ["beta"],
			url: "/rules/configuration-rules",
			navigationType: "version",
			hasPermission: function(s) {
				return (0, r.$n)(s, "waf", "firewall.rule") || (0, r.$n)(s, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: X
		}, {
			title: "navigation.zone.rules.redirect_rules",
			labels: ["beta"],
			url: "/rules/redirect-rules",
			navigationType: "version",
			hasPermission: function(s) {
				return (0, r.$n)(s, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			navigationType: "version",
			hasPermission: function(s) {
				return (0, r.$n)(s, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			hasPermission: function(s) {
				return (0, r.$n)(s, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "version",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: function(s) {
			return (0, r.$n)(s, "lb", "load-balancer") || (0, r.$n)(s, "waitingroom", "waiting-room")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "version",
			hasPermission: function(s) {
				return !(0, u.yD)(s)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return !(0, u.yD)(s)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return (0, r.iY)(s)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return (0, r.iY)(s)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return !(0, u.yD)(s)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return !(0, u.yD)(s) && !!(0, b.Ek)(s, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: function(s) {
				return !(0, u.yD)(s) && ((0, u.du)(s, "waiting_rooms.allowed") || !!(0, m.ZB)(s, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationType: "global-settings",
		labels: function(s) {
			var Z = [],
				Q = (0, m.nA)(s);
			return Q && !(0, m.tU)(Q, "pro") && Z.push("beta"), Z
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationType: "global-settings",
			url: "/zaraz/tools-config",
			tabs: O.az
		}, {
			title: "navigation.zone.zaraz.history",
			navigationType: "global-settings",
			url: "/zaraz/history",
			hasPermission: function(s) {
				return s.zaraz.zarazWorkflow.isRequesting ? !1 : s.zaraz.zarazWorkflow.data === "preview"
			}
		}, {
			title: "navigation.zone.zaraz.monitoring",
			navigationType: "global-settings",
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.consent",
			navigationType: "global-settings",
			url: "/zaraz/consent",
			labels: function(s) {
				var Z = [],
					Q = (0, m.nA)(s);
				return Q && (0, m.tU)(Q, "pro") && Z.push("beta"), Z
			}
		}, {
			title: "navigation.zone.zaraz.settings",
			navigationType: "global-settings",
			url: "/zaraz/settings"
		}]
	}, {
		title: "navigation.zone.web3.title",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(s) {
			var Z = (0, a.uF)(s),
				Q = (Z == null ? void 0 : Z.roles) || [];
			return Q.includes("Trust and Safety") ? !1 : !(0, u.yD)(s)
		}
	}],
	zeroTrust: [{
		url: function() {
			return (0, D.Uj)("home")
		},
		title: "navigation.account.zero_trust",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, D.Uj)("analytics/access")
		},
		title: "navigation.account.zero_trust.analytics",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, D.Uj)("gateway/locations")
		},
		title: "navigation.account.zero_trust.gateway",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, D.Uj)("access/apps")
		},
		title: "navigation.account.zero_trust.access",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, D.Uj)("team/devices")
		},
		title: "navigation.account.zero_trust.my_team",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, D.Uj)("logs/admin")
		},
		title: "navigation.account.zero_trust.logs",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, D.Uj)("settings")
		},
		title: "navigation.account.zero_trust.settings",
		iconType: "cloudflare-zero-trust"
	}],
	support: [{
		title: "support_selector.community_support",
		url: "https://community.cloudflare.com",
		testId: "link-cloudflare-community",
		iconType: "help"
	}, {
		title: "support_selector.help_center",
		url: function() {
			return "https://developers.cloudflare.com?dash_area=".concat((0, c.Fl)(location.pathname))
		},
		testId: "link-help-center",
		iconType: "help"
	}, {
		title: "support_selector.my_activities",
		url: "https://support.cloudflare.com/hc/en-us/requests",
		testId: "link-my-activities",
		iconType: "help"
	}, {
		title: "support_selector.enterprise_customer_portal",
		url: "https://cloudflare.com/ecp/overview",
		testId: "link-enterprise-customer-portal",
		hasPermission: function(s) {
			return (0, u.Bs)(s)
		},
		iconType: "help"
	}, {
		title: "support_selector.compliance_documents",
		url: "/?to=/:account/compliance-docs",
		testId: "link-compliance-docs",
		hasPermission: function(s) {
			return (0, a.Yj)(s)("member").edit
		},
		iconType: "help"
	}, {
		title: "support_selector.contact_cloudflare",
		url: "/?to=/:account/support",
		testId: "link-account-support",
		iconType: "help"
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security/waf",
		iconType: "shield",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots"
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos"
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings"
		}]
	}, {
		title: "navigation.zone.speed",
		url: "/speed/optimization",
		iconType: "bolt",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(s) {
				return (0, r.iY)(s)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(s) {
				return (0, r.$n)(s, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(s) {
				return (0, r.$n)(s, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(s) {
				return (0, r.$n)(s, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(s) {
			return (0, r.$n)(s, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(s) {
				return !(0, u.yD)(s)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(s) {
			return !(0, u.yD)(s) && (0, r.$n)(s, "zone_settings", "setting")
		}
	}]
}