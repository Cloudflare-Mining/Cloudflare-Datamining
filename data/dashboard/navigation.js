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
		hasPermission: function(y) {
			return (0, n.z1)(o.Mr)(y) === !0
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
		hasPermission: function(y) {
			return !!(0, n.z1)("oauth-access-management")(y)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(y) {
			return !(0, i.n3)() && !(0, n.z1)("oauth-access-management")(y)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(y) {
			return !(0, n.z1)("oauth-access-management")(y)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(y) {
			return (0, n.z1)("registrar-account-home-copy-experiment")(y) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(y) {
				return (0, r.YV)(y)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			hasPermission: function(y) {
				return (0, r.YV)(y)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			labels: ["beta"],
			hasPermission: function(y) {
				return (0, r.gw)(y)
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
			hasPermission: function(y) {
				return (0, r.iY)(y)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: function(y) {
				return (0, a.Le)(y, "account_analytics", "dos_analytics_v2") ? "/network-analytics/all-traffic" : "/network-analytics"
			},
			hasPermission: function(y) {
				return (0, r.iY)(y) && !!(0, a.Le)(y, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(y) {
				return (0, r.iY)(y)
			}
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			labels: ["new"],
			hasPermission: function(y) {
				return (0, r.iY)(y) && (0, M.S6)(y) && !!(0, n.z1)("account-logpush")(y)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(y) {
				return (0, r.iY)(y) && !!(0, a.Le)(y, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			labels: ["beta"],
			hasPermission: function(y) {
				return (0, r.iY)(y) && !!(0, a.Le)(y, "account_analytics", "magic_network_monitoring")
			}
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(y) {
			return (0, r.iY)(y) && (0, O.xU)(y)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(y) {
				return (0, r.iY)(y) && (0, O.sL)(y)
			}
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			labels: ["beta"],
			hasPermission: function(y) {
				return (0, r.iY)(y) && !!(0, n.z1)("account-level-security-analytics")(y) && (0, l.p1)(y)
			}
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			labels: ["beta"],
			hasPermission: function(y) {
				return (0, r.iY)(y) && !!(0, n.z1)("account-level-security-analytics")(y) && (0, l.p1)(y)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(y) {
				return (0, r.iY)(y) && (0, O.sL)(y)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(y) {
				return (0, r.iY)(y) && (0, O.TT)(y)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			labels: ["beta"],
			hasPermission: function(y) {
				return (0, r.iY)(y) && (0, O.jD)(y)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: function(y) {
				return (0, r.iY)(y) && (0, O.BU)(y)
			}
		}, {
			title: "navigation.account.security_center.cfone",
			url: "/cloudforce-one",
			hasPermission: function(y) {
				return (0, r.iY)(y) && (0, O.sK)(y)
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
		hasPermission: function(y) {
			return !!(0, r.AB)(y)
		},
		tabs: b.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: function(y) {
			return (0, l.Ci)(y)
		}
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(y) {
			return (0, r.iY)(y) && !!(0, n.z1)("managed-challenge-ui")(y)
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
		hasPermission: function(y) {
			return (0, r.iY)(y) && !!(0, a.Le)(y, "magic_transit", "mt_home")
		},
		tabs: f.Lx.concat(f.SF, f.Jg)
	}, {
		title: "navigation.account.magic_firewall",
		url: "/network-security/magic_firewall",
		iconType: "magic-firewall",
		hasPermission: function(y) {
			return !!(0, r.zJ)(y)
		},
		tabs: b.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: function(y) {
			var w = !!(0, r.Wq)(y) && !!(0, r.fO)(y);
			return !!(0, r.Tk)(y) || w
		},
		tabs: b.Dn
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: function(y) {
				return (0, r.iY)(y) && !!(0, a.Le)(y, "addressing", "ip_prefixes")
			}
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: function(y) {
				return (0, r.iY)(y) && !!(0, n.z1)("proxy-ips-ui")(y)
			}
		}],
		hasPermission: function(y) {
			return (0, r.iY)(y) && !!(0, a.Le)(y, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.group_title.cloudflare_one",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: function() {
			var y = (0, d.e1)(),
				w = "https://one.dash.cloudflare.com";
			return y ? "".concat(w, "/").concat(y, "/") : w
		},
		iconType: "cloudflare-zero-trust",
		labels: function(y) {
			return (0, n.z1)("zt-sidebar")(y) ? [] : ["external-link"]
		},
		hasPermission: function(y) {
			return (0, r.iY)(y)
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(y) {
			return (0, r.iY)(y) && !!(0, a.Le)(y, "magic_wan", "mw_home")
		},
		tabs: f.SF.concat(f.Jg)
	}, {
		hasPermission: function(y) {
			return (0, r.iY)(y)
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
		hasPermission: function(y) {
			return (0, r.iY)(y)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(y) {
				return !!(0, a.Le)(y, "workers", "origin_workers") && !!(0, a.Le)(y, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(y) {
				return !!(0, n.z1)("queues-ui")(y)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(y) {
				return !!(0, a.Le)(y, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(y) {
				var w = (0, s.tJ)(y);
				return !(0, A.ky)(w, [E.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(y) {
			return !!(0, n.z1)("workers-for-platforms")(y) && (0, r.iY)(y) && ((0, l.p1)(y) || !!(0, a.Le)(y, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(y) {
			return (0, r.iY)(y)
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(y) {
			return (0, r.iY)(y)
		},
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: function(y) {
				return (0, r.o_)(y)
			}
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			labels: ["beta"],
			hasPermission: function(y) {
				return (0, r.o_)(y)
			}
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(y) {
			return (0, r.iY)(y)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(y) {
				return (0, r.hv)(y)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(y) {
				return (0, r.hv)(y)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(y) {
				return (0, r.hv)(y)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: function(y) {
			return (0, r.iY)(y)
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(y) {
				return (0, r.IU)(y)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(y) {
				return (0, r.IU)(y)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(y) {
				return (0, r.IU)(y)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: function(y) {
				return (0, r.IU)(y)
			},
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link",
			hasPermission: function(y) {
				return (0, r.IU)(y) && (0, _.b8)(y)
			},
			labels: ["new"]
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(y) {
			return (0, r.iY)(y) && (!!(0, a.Le)(y, "calls", "enabled") || !!(0, a.Le)(y, "Calls", "enabled"))
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
			hasPermission: function(y) {
				return (0, r.iY)(y)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(y) {
				return (0, h.b)(y) ? (0, r.iY)(y) : (0, a.Yj)(y)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(y) {
				return (0, r.iY)(y)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(y) {
				return (0, r.iY)(y)
			}
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(y) {
			return (0, r.iY)(y)
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(y) {
			return (0, r.iY)(y)
		}
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(y) {
			return (0, r.iY)(y) && (0, C.dU)(y)
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
		hasPermission: function(y) {
			return (0, r.$n)(y, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationAvailable: "version",
			hasPermission: function(y) {
				return !(0, l.yD)(y)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return !(0, l.yD)(y)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return !(0, l.yD)(y)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationAvailable: "global",
			hasPermission: function(y) {
				var w = (0, c.nA)(y);
				return w ? !!(!(0, l.yD)(y) && !!(0, c.ZB)(y, "origin_reachability_dash", "dash_view") && (0, c.tU)(w, "enterprise") && !!(0, S.Ek)(y, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationAvailable: "global",
			hasPermission: function(y) {
				var w = (0, c.nA)(y);
				return w ? !!(!(0, l.yD)(y) && !!(0, c.ZB)(y, "edge_reachability_dash", "dash_view") && (0, c.tU)(w, "enterprise") && !!(0, S.Ek)(y, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationAvailable: "global",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return !(0, l.yD)(y)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return Object.values((0, M.H_)(y)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return !(0, l.yD)(y) && !!(0, c.ZB)(y, "logs", "instant_log") && !!(0, l.rV)(y, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationAvailable: "both",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, v.m7)(y)
		}
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationAvailable: "global",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(y) {
			return (0, r.$n)(y, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return !!(0, n.z1)("dns-tab-sections")(y)
			}
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return !!(0, n.z1)("dns-tab-sections")(y)
			}
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		navigationAvailable: "global",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.email.routing",
			navigationAvailable: "global",
			url: "/email/routing",
			tabs: u.hg
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationAvailable: "global",
			url: "/email/dmarc-management",
			labels: ["beta"],
			hasPermission: function(y) {
				return !!(0, c.ZB)(y, "email", "dmarc_visible")
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
		hasPermission: function(y) {
			var w = (0, c.nA)(y);
			if ((0, l.yD)(y) || !(0, r.wB)(y, "zone_settings", "spectrum.app") || !w) return !1;
			var D = !!((0, W.l8)(y) || (0, c.DQ)(y)),
				m = !!(0, c.ZB)(y, "spectrum", "enabled"),
				B = !!(0, c.Ns)(w);
			return m || D || !B
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationAvailable: "version",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls",
			navigationAvailable: "both"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates",
			navigationAvailable: "both"
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return (0, l.$f)(y, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return !!(0, n.z1)("client-certificates")(y) || !!(0, c.ZB)(y, "ssl", "client_certificates")
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
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationAvailable: "version",
			url: "/security/analytics",
			labels: ["beta"],
			hasPermission: function(y) {
				return (0, g.B_)(y)
			}
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationAvailable: "version"
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationAvailable: "version",
			tabs: p.gn
		}, {
			title: "navigation.zone.security.page_shield",
			navigationAvailable: "global",
			url: "/security/page-shield",
			tabs: p.mt
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationAvailable: "version"
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return (0, l.du)(y, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			navigationAvailable: "global",
			hasPermission: function(y) {
				var w = (0, c.nA)(y);
				return w ? !!(0, c.ZB)(y, "firewall", "api_shield_tab") && (0, c.tU)(w, "business") : !1
			},
			tabs: p.Dw
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
		hasPermission: function(y) {
			return !(0, l.yD)(y) && ((0, r.wB)(y, "access", "access.app") || (0, r.wB)(y, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationAvailable: "version",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "zone_settings", "setting")
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
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationAvailable: "version",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "zone_settings", "setting")
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
			hasPermission: function(y) {
				return (0, r.$n)(y, "waf", "firewall.rule") || (0, r.$n)(y, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationAvailable: "version",
			hasPermission: function(y) {
				return (0, r.iY)(y)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			navigationAvailable: "global",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(y) {
				return !!(0, r.HO)(y)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		navigationAvailable: "version",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.wB)(y, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationAvailable: "version",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "zone_settings", "page-rule")
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
			hasPermission: function(y) {
				return (0, r.$n)(y, "waf", "firewall.rule") || (0, r.$n)(y, "zone_settings", "page-rule")
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
			hasPermission: function(y) {
				return (0, r.$n)(y, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			navigationAvailable: "version",
			hasPermission: function(y) {
				return (0, r.$n)(y, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationAvailable: "version",
			hasPermission: function(y) {
				return (0, r.$n)(y, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationAvailable: "version",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationAvailable: "version",
		hasPermission: function(y) {
			return (0, r.$n)(y, "lb", "load-balancer") || (0, r.$n)(y, "waitingroom", "waiting-room")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationAvailable: "version",
			hasPermission: function(y) {
				return !(0, l.yD)(y)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return !(0, l.yD)(y)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return (0, r.iY)(y)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return (0, r.iY)(y)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return !(0, l.yD)(y)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return !(0, l.yD)(y) && !!(0, S.Ek)(y, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationAvailable: "global",
			hasPermission: function(y) {
				return !(0, l.yD)(y) && ((0, l.du)(y, "waiting_rooms.allowed") || !!(0, c.ZB)(y, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationAvailable: "version",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationAvailable: "global",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationAvailable: "version",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationAvailable: "global",
		labels: function(y) {
			var w = [],
				D = (0, c.nA)(y);
			return D && !(0, c.tU)(D, "pro") && w.push("beta"), w
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationAvailable: "global",
			url: "/zaraz/tools-config",
			tabs: T.az
		}, {
			title: "navigation.zone.zaraz.history",
			navigationAvailable: "global",
			url: "/zaraz/history",
			hasPermission: function(y) {
				return y.zaraz.zarazWorkflow.isRequesting ? !1 : y.zaraz.zarazWorkflow.data === "preview"
			}
		}, {
			title: "navigation.zone.zaraz.monitoring",
			navigationAvailable: "global",
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.consent",
			navigationAvailable: "global",
			url: "/zaraz/consent",
			labels: function(y) {
				var w = [],
					D = (0, c.nA)(y);
				return D && (0, c.tU)(D, "pro") && w.push("beta"), w
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
		hasPermission: function(y) {
			var w = (0, a.uF)(y),
				D = (w == null ? void 0 : w.roles) || [];
			return D.includes("Trust and Safety") ? !1 : !(0, l.yD)(y)
		}
	}],
	support: [{
		title: "support_selector.community_support",
		url: "https://community.cloudflare.com",
		testId: "link-cloudflare-community",
		iconType: "help"
	}, {
		title: "support_selector.help_center",
		url: function() {
			return "https://developers.cloudflare.com?dash_area=".concat((0, d.Fl)(location.pathname))
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
		hasPermission: function(y) {
			return (0, l.Bs)(y)
		},
		iconType: "help"
	}, {
		title: "support_selector.compliance_documents",
		url: "/?to=/:account/compliance-docs",
		testId: "link-compliance-docs",
		hasPermission: function(y) {
			return (0, a.Yj)(y)("member").edit
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
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "ssl", "ssl.cert")
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
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "waf", "firewall.rule")
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
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(y) {
				return (0, r.iY)(y)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(y) {
				return (0, r.$n)(y, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(y) {
				return (0, r.$n)(y, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(y) {
				return (0, r.$n)(y, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(y) {
			return (0, r.$n)(y, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(y) {
				return !(0, l.yD)(y)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(y) {
			return !(0, l.yD)(y) && (0, r.$n)(y, "zone_settings", "setting")
		}
	}]
}