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
		hasPermission: function(i) {
			return (0, t.z1)(h.Mr)(i) === !0
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
		hasPermission: function(i) {
			return !!(0, t.z1)("oauth-access-management")(i)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(i) {
			return !(0, r.n3)() && !(0, t.z1)("oauth-access-management")(i)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(i) {
			return !(0, t.z1)("oauth-access-management")(i)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(i) {
			return (0, t.z1)("registrar-account-home-copy-experiment")(i) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(i) {
				return (0, n.YV)(i)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			hasPermission: function(i) {
				return (0, n.YV)(i)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			labels: ["beta"],
			hasPermission: function(i) {
				return (0, n.gw)(i)
			}
		}]
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: function(i) {
				return (0, n.iY)(i)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: function(i) {
				return (0, a.Le)(i, "account_analytics", "dos_analytics_v2") ? "/network-analytics/all-traffic" : "/network-analytics"
			},
			hasPermission: function(i) {
				return (0, n.iY)(i) && !!(0, a.Le)(i, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(i) {
				return (0, n.iY)(i)
			}
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			labels: ["new"],
			hasPermission: function(i) {
				return (0, n.iY)(i) && (0, _.S6)(i) && !!(0, t.z1)("account-logpush")(i)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(i) {
				return (0, n.iY)(i) && !!(0, a.Le)(i, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			labels: ["beta"],
			hasPermission: function(i) {
				return (0, n.iY)(i) && !!(0, a.Le)(i, "account_analytics", "magic_network_monitoring")
			}
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(i) {
			return (0, n.iY)(i) && (0, v.xU)(i)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(i) {
				return (0, n.iY)(i) && (0, v.sL)(i)
			}
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			labels: ["beta"],
			hasPermission: function(i) {
				return (0, n.iY)(i) && !!(0, t.z1)("account-level-security-analytics")(i) && (0, s.p1)(i)
			}
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			labels: ["beta"],
			hasPermission: function(i) {
				return (0, n.iY)(i) && !!(0, t.z1)("account-level-security-analytics")(i) && (0, s.p1)(i)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(i) {
				return (0, n.iY)(i) && (0, v.sL)(i)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(i) {
				return (0, n.iY)(i) && (0, v.TT)(i)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			labels: ["beta"],
			hasPermission: function(i) {
				return (0, n.iY)(i) && (0, v.jD)(i)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: function(i) {
				return (0, n.iY)(i) && (0, v.BU)(i)
			}
		}, {
			title: "navigation.account.security_center.cfone",
			url: "/cloudforce-one",
			hasPermission: function(i) {
				return (0, n.iY)(i) && (0, v.sK)(i)
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
		hasPermission: function(i) {
			return !!(0, n.AB)(i)
		},
		tabs: b.D
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(i) {
			return (0, n.iY)(i) && !!(0, t.z1)("managed-challenge-ui")(i)
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
		hasPermission: function(i) {
			return (0, n.iY)(i) && !!(0, a.Le)(i, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_firewall",
		url: "/network-security/magic_firewall",
		iconType: "magic-firewall",
		hasPermission: function(i) {
			return !!(0, n.zJ)(i)
		}
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: function(i) {
			var z = !!(0, n.Wq)(i) && !!(0, n.fO)(i);
			return !!(0, n.Tk)(i) || z
		}
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: function(i) {
				return (0, n.iY)(i) && !!(0, a.Le)(i, "addressing", "ip_prefixes")
			}
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: function(i) {
				return (0, n.iY)(i) && !!(0, t.z1)("proxy-ips-ui")(i)
			}
		}],
		hasPermission: function(i) {
			return (0, n.iY)(i) && !!(0, a.Le)(i, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.group_title.cloudflare_one",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: function() {
			var i = (0, u.e1)(),
				z = "https://one.dash.cloudflare.com";
			return i ? "".concat(z, "/").concat(i, "/") : z
		},
		iconType: "cloudflare-zero-trust",
		labels: function(i) {
			return (0, t.z1)("zt-sidebar")(i) ? [] : ["external-link"]
		},
		hasPermission: function(i) {
			return (0, n.iY)(i)
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(i) {
			return (0, n.iY)(i) && !!(0, a.Le)(i, "magic_wan", "mw_home")
		}
	}, {
		hasPermission: function(i) {
			return (0, n.iY)(i)
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
		hasPermission: function(i) {
			return (0, n.iY)(i)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(i) {
				return !!(0, a.Le)(i, "workers", "origin_workers") && !!(0, a.Le)(i, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(i) {
				return !!(0, t.z1)("queues-ui")(i)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(i) {
				return !!(0, a.Le)(i, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(i) {
				var z = (0, o.tJ)(i);
				return !(0, E.ky)(z, [P.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(i) {
			return !!(0, t.z1)("workers-for-platforms")(i) && (0, n.iY)(i) && ((0, s.p1)(i) || !!(0, a.Le)(i, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(i) {
			return (0, n.iY)(i)
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(i) {
			return (0, n.iY)(i)
		},
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: function(i) {
				return (0, n.o_)(i)
			}
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			labels: ["beta"],
			hasPermission: function(i) {
				return (0, n.o_)(i)
			}
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(i) {
			return (0, n.iY)(i)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(i) {
				return (0, n.hv)(i)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(i) {
				return (0, n.hv)(i)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(i) {
				return (0, n.hv)(i)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: function(i) {
			return (0, n.iY)(i)
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(i) {
				return (0, n.IU)(i)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(i) {
				return (0, n.IU)(i)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(i) {
				return (0, n.IU)(i)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: function(i) {
				return (0, n.IU)(i)
			},
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link",
			hasPermission: function(i) {
				return (0, n.IU)(i) && (0, C.b8)(i)
			},
			labels: ["new"]
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(i) {
			return (0, n.iY)(i) && (!!(0, a.Le)(i, "calls", "enabled") || !!(0, a.Le)(i, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.group_title.account_management",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.manage_account",
		url: "",
		iconType: "gear",
		testId: "manage-account-link",
		pages: [{
			title: "navigation.account.members",
			url: "/members",
			testId: "account-homepage-members",
			hasPermission: function(i) {
				return (0, n.iY)(i)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(i) {
				return (0, j.b)(i) ? (0, n.iY)(i) : (0, a.Yj)(i)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(i) {
				return (0, n.iY)(i)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(i) {
				return (0, n.iY)(i)
			}
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(i) {
			return (0, n.iY)(i)
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(i) {
			return (0, n.iY)(i)
		}
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(i) {
			return (0, n.iY)(i) && (0, D.dU)(i)
		}
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview",
		navigationAvailable: "global"
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		navigationAvailable: "version",
		hasPermission: function(i) {
			return (0, n.$n)(i, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationAvailable: "version",
			hasPermission: function(i) {
				return !(0, s.yD)(i)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return !(0, s.yD)(i)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return !(0, s.yD)(i)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationAvailable: "global",
			hasPermission: function(i) {
				var z = (0, y.nA)(i);
				return z ? !!(!(0, s.yD)(i) && !!(0, y.ZB)(i, "origin_reachability_dash", "dash_view") && (0, y.tU)(z, "enterprise") && !!(0, O.Ek)(i, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationAvailable: "global",
			hasPermission: function(i) {
				var z = (0, y.nA)(i);
				return z ? !!(!(0, s.yD)(i) && !!(0, y.ZB)(i, "edge_reachability_dash", "dash_view") && (0, y.tU)(z, "enterprise") && !!(0, O.Ek)(i, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationAvailable: "global",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return !(0, s.yD)(i)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return Object.values((0, _.H_)(i)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return !(0, s.yD)(i) && !!(0, y.ZB)(i, "logs", "instant_log") && !!(0, s.rV)(i, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationAvailable: "both",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, f.m7)(i)
		}
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationAvailable: "global",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(i) {
			return (0, n.$n)(i, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return !!(0, t.z1)("dns-tab-sections")(i)
			}
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return !!(0, t.z1)("dns-tab-sections")(i)
			}
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		navigationAvailable: "global",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.email.routing",
			navigationAvailable: "global",
			url: "/email/routing"
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationAvailable: "global",
			url: "/email/dmarc-management",
			labels: ["beta"],
			hasPermission: function(i) {
				return !!(0, y.ZB)(i, "email", "dmarc_visible")
			}
		}, {
			title: "navigation.zone.email.security",
			navigationAvailable: "global",
			url: "/email/security"
		}]
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		navigationAvailable: "global",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(i) {
			var z = (0, y.nA)(i);
			if ((0, s.yD)(i) || !(0, n.wB)(i, "zone_settings", "spectrum.app") || !z) return !1;
			var Z = !!((0, B.l8)(i) || (0, y.DQ)(i)),
				U = !!(0, y.ZB)(i, "spectrum", "enabled"),
				N = !!(0, y.Ns)(z);
			return U || Z || !N
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationAvailable: "version",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls",
			navigationAvailable: "version"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates",
			navigationAvailable: "version"
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return (0, s.$f)(i, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return !!(0, t.z1)("client-certificates")(i) || !!(0, y.ZB)(i, "ssl", "client_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.origin_server",
			navigationAvailable: "global",
			url: "/ssl-tls/origin"
		}, {
			title: "navigation.zone.ssl-tls.custom_hostnames",
			navigationAvailable: "global",
			url: "/ssl-tls/custom-hostnames"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security",
		iconType: "shield",
		testId: "zone-navigation-link-security",
		navigationAvailable: "version",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationAvailable: "version",
			url: "/security/analytics",
			labels: ["beta"],
			hasPermission: function(i) {
				return (0, p.B_)(i)
			}
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationAvailable: "version"
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationAvailable: "version",
			pages: c.gn
		}, {
			title: "navigation.zone.security.page_shield",
			navigationAvailable: "global",
			url: "/security/page-shield",
			pages: c.mt
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationAvailable: "version"
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return (0, s.du)(i, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			navigationAvailable: "global",
			hasPermission: function(i) {
				var z = (0, y.nA)(i);
				return z ? !!(0, y.ZB)(i, "firewall", "api_shield_tab") && (0, y.tU)(z, "business") : !1
			},
			pages: c.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationAvailable: "version"
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationAvailable: "version"
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationAvailable: "global",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && ((0, n.wB)(i, "access", "access.app") || (0, n.wB)(i, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationAvailable: "version",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			navigationAvailable: "version",
			labels: ["beta"]
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			navigationAvailable: "version"
		}, {
			title: "navigation.zone.speed.browser_insights",
			navigationAvailable: "global",
			url: "/speed/browser-insights"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationAvailable: "version",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			navigationAvailable: "version",
			url: "/caching"
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationAvailable: "version"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationAvailable: "version",
			labels: ["beta"],
			hasPermission: function(i) {
				return (0, n.$n)(i, "waf", "firewall.rule") || (0, n.$n)(i, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationAvailable: "version",
			hasPermission: function(i) {
				return (0, n.iY)(i)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			navigationAvailable: "global",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(i) {
				return !!(0, n.HO)(i)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		navigationAvailable: "version",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.wB)(i, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationAvailable: "version",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules",
			navigationAvailable: "version"
		}, {
			title: "navigation.zone.rules.configuration_rules",
			labels: ["beta"],
			url: "/rules/configuration-rules",
			navigationAvailable: "version",
			hasPermission: function(i) {
				return (0, n.$n)(i, "waf", "firewall.rule") || (0, n.$n)(i, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationAvailable: "version"
		}, {
			title: "navigation.zone.rules.redirect_rules",
			labels: ["beta"],
			url: "/rules/redirect-rules",
			navigationAvailable: "version",
			hasPermission: function(i) {
				return (0, n.$n)(i, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			navigationAvailable: "version",
			hasPermission: function(i) {
				return (0, n.$n)(i, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationAvailable: "version",
			hasPermission: function(i) {
				return (0, n.$n)(i, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationAvailable: "version",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationAvailable: "version",
		hasPermission: function(i) {
			return (0, n.$n)(i, "lb", "load-balancer") || (0, n.$n)(i, "waitingroom", "waiting-room")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationAvailable: "version",
			hasPermission: function(i) {
				return !(0, s.yD)(i)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return !(0, s.yD)(i)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return (0, n.iY)(i)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return (0, n.iY)(i)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return !(0, s.yD)(i)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return !(0, s.yD)(i) && !!(0, O.Ek)(i, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationAvailable: "global",
			hasPermission: function(i) {
				return !(0, s.yD)(i) && ((0, s.du)(i, "waiting_rooms.allowed") || !!(0, y.ZB)(i, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationAvailable: "version",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationAvailable: "global",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationAvailable: "version",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationAvailable: "global",
		labels: function(i) {
			var z = [],
				Z = (0, y.nA)(i);
			return Z && !(0, y.tU)(Z, "pro") && z.push("beta"), z
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationAvailable: "global",
			url: "/zaraz/tools-config"
		}, {
			title: "navigation.zone.zaraz.history",
			navigationAvailable: "global",
			url: "/zaraz/history",
			hasPermission: function(i) {
				return i.zaraz.zarazWorkflow.isRequesting ? !1 : i.zaraz.zarazWorkflow.data === "preview"
			}
		}, {
			title: "navigation.zone.zaraz.monitoring",
			navigationAvailable: "global",
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.consent",
			navigationAvailable: "global",
			url: "/zaraz/consent",
			labels: function(i) {
				var z = [],
					Z = (0, y.nA)(i);
				return Z && (0, y.tU)(Z, "pro") && z.push("beta"), z
			}
		}, {
			title: "navigation.zone.zaraz.settings",
			navigationAvailable: "global",
			url: "/zaraz/settings"
		}]
	}, {
		title: "navigation.zone.web3",
		url: "/web3",
		navigationAvailable: "global",
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(i) {
			var z = (0, a.uF)(i),
				Z = (z == null ? void 0 : z.roles) || [];
			return Z.includes("Trust and Safety") ? !1 : !(0, s.yD)(i)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "ssl", "ssl.cert")
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
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "waf", "firewall.rule")
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
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(i) {
				return (0, n.iY)(i)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(i) {
				return (0, n.$n)(i, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(i) {
				return (0, n.$n)(i, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(i) {
				return (0, n.$n)(i, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(i) {
			return (0, n.$n)(i, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(i) {
				return !(0, s.yD)(i)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(i) {
			return !(0, s.yD)(i) && (0, n.$n)(i, "zone_settings", "setting")
		}
	}]
}