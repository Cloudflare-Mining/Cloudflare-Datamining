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
		hasPermission: function(h) {
			return (0, n.z1)(o.Mr)(h) === !0
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
		hasPermission: function(h) {
			return !!(0, n.z1)("oauth-access-management")(h)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(h) {
			return !(0, i.n3)() && !(0, n.z1)("oauth-access-management")(h)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(h) {
			return !(0, n.z1)("oauth-access-management")(h)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(h) {
			return (0, n.z1)("registrar-account-home-copy-experiment")(h) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(h) {
				return (0, r.YV)(h)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			hasPermission: function(h) {
				return (0, r.YV)(h)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			labels: ["beta"],
			hasPermission: function(h) {
				return (0, r.gw)(h)
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
			hasPermission: function(h) {
				return (0, r.iY)(h)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: function(h) {
				return (0, a.Le)(h, "account_analytics", "dos_analytics_v2") ? "/network-analytics/all-traffic" : "/network-analytics"
			},
			hasPermission: function(h) {
				return (0, r.iY)(h) && !!(0, a.Le)(h, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(h) {
				return (0, r.iY)(h)
			}
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			labels: ["new"],
			hasPermission: function(h) {
				return (0, r.iY)(h) && (0, T.S6)(h) && !!(0, n.z1)("account-logpush")(h)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(h) {
				return (0, r.iY)(h) && !!(0, a.Le)(h, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			labels: ["beta"],
			hasPermission: function(h) {
				return (0, r.iY)(h) && !!(0, a.Le)(h, "account_analytics", "magic_network_monitoring")
			}
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(h) {
			return (0, r.iY)(h) && (0, M.xU)(h)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(h) {
				return (0, r.iY)(h) && (0, M.sL)(h)
			}
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			labels: ["beta"],
			hasPermission: function(h) {
				return (0, r.iY)(h) && !!(0, n.z1)("account-level-security-analytics")(h) && (0, l.p1)(h)
			}
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			labels: ["beta"],
			hasPermission: function(h) {
				return (0, r.iY)(h) && !!(0, n.z1)("account-level-security-analytics")(h) && (0, l.p1)(h)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(h) {
				return (0, r.iY)(h) && (0, M.sL)(h)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(h) {
				return (0, r.iY)(h) && (0, M.TT)(h)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			labels: ["beta"],
			hasPermission: function(h) {
				return (0, r.iY)(h) && (0, M.jD)(h)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: function(h) {
				return (0, r.iY)(h) && (0, M.BU)(h)
			}
		}, {
			title: "navigation.account.security_center.cfone",
			url: "/cloudforce-one",
			hasPermission: function(h) {
				return (0, r.iY)(h) && (0, M.sK)(h)
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
		hasPermission: function(h) {
			return !!(0, r.AB)(h)
		},
		tabs: b.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: function(h) {
			return (0, l.Ci)(h)
		}
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(h) {
			return (0, r.iY)(h) && !!(0, n.z1)("managed-challenge-ui")(h)
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
		hasPermission: function(h) {
			return (0, r.iY)(h) && !!(0, a.Le)(h, "magic_transit", "mt_home")
		},
		tabs: m.Lx.concat(m.SF, m.Jg)
	}, {
		title: "navigation.account.magic_firewall",
		url: "/network-security/magic_firewall",
		iconType: "magic-firewall",
		hasPermission: function(h) {
			return !!(0, r.zJ)(h)
		},
		tabs: b.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: function(h) {
			var j = !!(0, r.Wq)(h) && !!(0, r.fO)(h);
			return !!(0, r.Tk)(h) || j
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
			hasPermission: function(h) {
				return (0, r.iY)(h) && !!(0, a.Le)(h, "addressing", "ip_prefixes")
			}
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: function(h) {
				return (0, r.iY)(h) && !!(0, n.z1)("proxy-ips-ui")(h)
			}
		}],
		hasPermission: function(h) {
			return (0, r.iY)(h) && !!(0, a.Le)(h, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.group_title.cloudflare_one",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: function() {
			var h = (0, c.e1)(),
				j = "https://one.dash.cloudflare.com";
			return h ? "".concat(j, "/").concat(h, "/") : j
		},
		iconType: "cloudflare-zero-trust",
		labels: function(h) {
			return (0, n.z1)("zt-sidebar")(h) ? [] : ["external-link"]
		},
		hasPermission: function(h) {
			return (0, r.iY)(h)
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(h) {
			return (0, r.iY)(h) && !!(0, a.Le)(h, "magic_wan", "mw_home")
		},
		tabs: m.SF.concat(m.Jg)
	}, {
		hasPermission: function(h) {
			return (0, r.iY)(h)
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
		hasPermission: function(h) {
			return (0, r.iY)(h)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(h) {
				return !!(0, a.Le)(h, "workers", "origin_workers") && !!(0, a.Le)(h, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(h) {
				return !!(0, n.z1)("queues-ui")(h)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(h) {
				return !!(0, a.Le)(h, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(h) {
				var j = (0, s.tJ)(h);
				return !(0, D.ky)(j, [E.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(h) {
			return !!(0, n.z1)("workers-for-platforms")(h) && (0, r.iY)(h) && ((0, l.p1)(h) || !!(0, a.Le)(h, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(h) {
			return (0, r.iY)(h)
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(h) {
			return (0, r.iY)(h)
		},
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: function(h) {
				return (0, r.o_)(h)
			}
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			labels: ["beta"],
			hasPermission: function(h) {
				return (0, r.o_)(h)
			}
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(h) {
			return (0, r.iY)(h)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(h) {
				return (0, r.hv)(h)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(h) {
				return (0, r.hv)(h)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(h) {
				return (0, r.hv)(h)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: function(h) {
			return (0, r.iY)(h)
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(h) {
				return (0, r.IU)(h)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(h) {
				return (0, r.IU)(h)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(h) {
				return (0, r.IU)(h)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: function(h) {
				return (0, r.IU)(h)
			},
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link",
			hasPermission: function(h) {
				return (0, r.IU)(h) && (0, _.b8)(h)
			},
			labels: ["new"]
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(h) {
			return (0, r.iY)(h) && (!!(0, a.Le)(h, "calls", "enabled") || !!(0, a.Le)(h, "Calls", "enabled"))
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
			hasPermission: function(h) {
				return (0, r.iY)(h)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(h) {
				return (0, y.b)(h) ? (0, r.iY)(h) : (0, a.Yj)(h)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(h) {
				return (0, r.iY)(h)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(h) {
				return (0, r.iY)(h)
			}
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(h) {
			return (0, r.iY)(h)
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(h) {
			return (0, r.iY)(h)
		}
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(h) {
			return (0, r.iY)(h) && (0, A.dU)(h)
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
		hasPermission: function(h) {
			return (0, r.$n)(h, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "both",
			hasPermission: function(h) {
				return !(0, l.yD)(h)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return !(0, l.yD)(h)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return !(0, l.yD)(h)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: function(h) {
				var j = (0, d.nA)(h);
				return j ? !!(!(0, l.yD)(h) && !!(0, d.ZB)(h, "origin_reachability_dash", "dash_view") && (0, d.tU)(j, "enterprise") && !!(0, O.Ek)(h, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: function(h) {
				var j = (0, d.nA)(h);
				return j ? !!(!(0, l.yD)(h) && !!(0, d.ZB)(h, "edge_reachability_dash", "dash_view") && (0, d.tU)(j, "enterprise") && !!(0, O.Ek)(h, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationType: "global-settings",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return !(0, l.yD)(h)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return Object.values((0, T.H_)(h)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return !(0, l.yD)(h) && !!(0, d.ZB)(h, "logs", "instant_log") && !!(0, l.rV)(h, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "both",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, v.m7)(h)
		}
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(h) {
			return (0, r.$n)(h, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return !!(0, n.z1)("dns-tab-sections")(h)
			}
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return !!(0, n.z1)("dns-tab-sections")(h)
			}
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		navigationType: "global-settings",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.email.routing",
			navigationType: "global-settings",
			url: "/email/routing",
			tabs: u.hg
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			labels: ["beta"],
			hasPermission: function(h) {
				return !!(0, d.ZB)(h, "email", "dmarc_visible")
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
		hasPermission: function(h) {
			var j = (0, d.nA)(h);
			if ((0, l.yD)(h) || !(0, r.wB)(h, "zone_settings", "spectrum.app") || !j) return !1;
			var S = !!((0, W.l8)(h) || (0, d.DQ)(h)),
				g = !!(0, d.ZB)(h, "spectrum", "enabled"),
				U = !!(0, d.Ns)(j);
			return g || S || !U
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "ssl", "ssl.cert")
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
			hasPermission: function(h) {
				return (0, l.$f)(h, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return !!(0, n.z1)("client-certificates")(h) || !!(0, d.ZB)(h, "ssl", "client_certificates")
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
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			labels: ["beta"],
			hasPermission: function(h) {
				return (0, f.B_)(h)
			}
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version"
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: p.gn
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: p.mt
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version"
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return (0, l.du)(h, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			navigationType: "global-settings",
			hasPermission: function(h) {
				var j = (0, d.nA)(h);
				return j ? !!(0, d.ZB)(h, "firewall", "api_shield_tab") && (0, d.tU)(j, "business") : !1
			},
			tabs: p.Dw
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
		hasPermission: function(h) {
			return !(0, l.yD)(h) && ((0, r.wB)(h, "access", "access.app") || (0, r.wB)(h, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "zone_settings", "setting")
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
		navigationType: "version",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			navigationType: "version",
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
			hasPermission: function(h) {
				return (0, r.$n)(h, "waf", "firewall.rule") || (0, r.$n)(h, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: function(h) {
				return (0, r.iY)(h)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			navigationType: "global-settings",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(h) {
				return !!(0, r.HO)(h)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		navigationType: "version",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.wB)(h, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationType: "version",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "zone_settings", "page-rule")
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
			hasPermission: function(h) {
				return (0, r.$n)(h, "waf", "firewall.rule") || (0, r.$n)(h, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.redirect_rules",
			labels: ["beta"],
			url: "/rules/redirect-rules",
			navigationType: "version",
			hasPermission: function(h) {
				return (0, r.$n)(h, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			navigationType: "version",
			hasPermission: function(h) {
				return (0, r.$n)(h, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			hasPermission: function(h) {
				return (0, r.$n)(h, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "version",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: function(h) {
			return (0, r.$n)(h, "lb", "load-balancer") || (0, r.$n)(h, "waitingroom", "waiting-room")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "version",
			hasPermission: function(h) {
				return !(0, l.yD)(h)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return !(0, l.yD)(h)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return (0, r.iY)(h)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return (0, r.iY)(h)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return !(0, l.yD)(h)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return !(0, l.yD)(h) && !!(0, O.Ek)(h, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: function(h) {
				return !(0, l.yD)(h) && ((0, l.du)(h, "waiting_rooms.allowed") || !!(0, d.ZB)(h, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationType: "global-settings",
		labels: function(h) {
			var j = [],
				S = (0, d.nA)(h);
			return S && !(0, d.tU)(S, "pro") && j.push("beta"), j
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationType: "global-settings",
			url: "/zaraz/tools-config",
			tabs: C.az
		}, {
			title: "navigation.zone.zaraz.history",
			navigationType: "global-settings",
			url: "/zaraz/history",
			hasPermission: function(h) {
				return h.zaraz.zarazWorkflow.isRequesting ? !1 : h.zaraz.zarazWorkflow.data === "preview"
			}
		}, {
			title: "navigation.zone.zaraz.monitoring",
			navigationType: "global-settings",
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.consent",
			navigationType: "global-settings",
			url: "/zaraz/consent",
			labels: function(h) {
				var j = [],
					S = (0, d.nA)(h);
				return S && (0, d.tU)(S, "pro") && j.push("beta"), j
			}
		}, {
			title: "navigation.zone.zaraz.settings",
			navigationType: "global-settings",
			url: "/zaraz/settings"
		}]
	}, {
		title: "navigation.zone.web3",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(h) {
			var j = (0, a.uF)(h),
				S = (j == null ? void 0 : j.roles) || [];
			return S.includes("Trust and Safety") ? !1 : !(0, l.yD)(h)
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
		hasPermission: function(h) {
			return (0, l.Bs)(h)
		},
		iconType: "help"
	}, {
		title: "support_selector.compliance_documents",
		url: "/?to=/:account/compliance-docs",
		testId: "link-compliance-docs",
		hasPermission: function(h) {
			return (0, a.Yj)(h)("member").edit
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
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "ssl", "ssl.cert")
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
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "waf", "firewall.rule")
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
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(h) {
				return (0, r.iY)(h)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(h) {
				return (0, r.$n)(h, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(h) {
				return (0, r.$n)(h, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(h) {
				return (0, r.$n)(h, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(h) {
			return (0, r.$n)(h, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(h) {
				return !(0, l.yD)(h)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(h) {
			return !(0, l.yD)(h) && (0, r.$n)(h, "zone_settings", "setting")
		}
	}]
}