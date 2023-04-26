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
		hasPermission: function(l) {
			return (0, n.z1)(o.Mr)(l) === !0
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
		hasPermission: function(l) {
			return !!(0, n.z1)("oauth-access-management")(l)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(l) {
			return !(0, h.n3)() && !(0, n.z1)("oauth-access-management")(l)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(l) {
			return !(0, n.z1)("oauth-access-management")(l)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(l) {
			return (0, n.z1)("registrar-account-home-copy-experiment")(l) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "/domains",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(l) {
				return (0, r.YV)(l)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			hasPermission: function(l) {
				return (0, r.YV)(l)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			labels: ["beta"],
			hasPermission: function(l) {
				return (0, r.gw)(l)
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
			hasPermission: function(l) {
				return (0, r.iY)(l)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: function(l) {
				return (0, a.Le)(l, "account_analytics", "dos_analytics_v2") ? "/network-analytics/all-traffic" : "/network-analytics"
			},
			hasPermission: function(l) {
				return (0, r.iY)(l) && !!(0, a.Le)(l, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(l) {
				return (0, r.iY)(l)
			}
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			labels: ["new"],
			hasPermission: function(l) {
				return (0, r.iY)(l) && (0, g.S6)(l) && !!(0, n.z1)("account-logpush")(l)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(l) {
				return (0, r.iY)(l) && !!(0, a.Le)(l, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			labels: ["beta"],
			hasPermission: function(l) {
				return (0, r.iY)(l) && !!(0, a.Le)(l, "account_analytics", "magic_network_monitoring")
			}
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(l) {
			return (0, r.iY)(l) && (0, C.xU)(l)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(l) {
				return (0, r.iY)(l) && (0, C.sL)(l)
			}
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			labels: ["beta"],
			hasPermission: function(l) {
				return (0, r.iY)(l) && !!(0, n.z1)("account-level-security-analytics")(l) && (0, u.p1)(l)
			}
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			labels: ["beta"],
			hasPermission: function(l) {
				return (0, r.iY)(l) && !!(0, n.z1)("account-level-security-analytics")(l) && (0, u.p1)(l)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(l) {
				return (0, r.iY)(l) && (0, C.sL)(l)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(l) {
				return (0, r.iY)(l) && (0, C.TT)(l)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			labels: ["beta"],
			hasPermission: function(l) {
				return (0, r.iY)(l) && (0, C.jD)(l)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: function(l) {
				return (0, r.iY)(l) && (0, C.BU)(l)
			}
		}, {
			title: "navigation.account.security_center.cfone",
			url: "/cloudforce-one",
			hasPermission: function(l) {
				return (0, r.iY)(l) && (0, C.sK)(l)
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
		hasPermission: function(l) {
			return !!(0, r.AB)(l)
		},
		tabs: T.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: function(l) {
			return (0, u.Ci)(l)
		}
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(l) {
			return (0, r.iY)(l) && !!(0, n.z1)("managed-challenge-ui")(l)
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
		hasPermission: function(l) {
			return (0, r.iY)(l) && !!(0, a.Le)(l, "magic_transit", "mt_home")
		},
		tabs: f.Lx.concat(f.SF, f.Jg)
	}, {
		title: "navigation.account.magic_firewall",
		url: "/network-security/magic_firewall",
		iconType: "magic-firewall",
		hasPermission: function(l) {
			return !!(0, r.zJ)(l)
		},
		tabs: T.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: function(l) {
			var j = !!(0, r.Wq)(l) && !!(0, r.fO)(l);
			return !!(0, r.Tk)(l) || j
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
			hasPermission: function(l) {
				return (0, r.iY)(l) && !!(0, a.Le)(l, "addressing", "ip_prefixes")
			}
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: function(l) {
				return (0, r.iY)(l) && !!(0, n.z1)("proxy-ips-ui")(l)
			}
		}],
		hasPermission: function(l) {
			return (0, r.iY)(l) && !!(0, a.Le)(l, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.group_title.cloudflare_one",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: function() {
			var l = (0, c.e1)(),
				j = "https://one.dash.cloudflare.com";
			return l ? "".concat(j, "/").concat(l, "/") : j
		},
		iconType: "cloudflare-zero-trust",
		labels: function(l) {
			return (0, n.z1)("zt-sidebar")(l) ? [] : ["external-link"]
		},
		hasPermission: function(l) {
			return (0, r.iY)(l)
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(l) {
			return (0, r.iY)(l) && !!(0, a.Le)(l, "magic_wan", "mw_home")
		},
		tabs: f.SF.concat(f.Jg)
	}, {
		hasPermission: function(l) {
			return (0, r.iY)(l)
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
		hasPermission: function(l) {
			return !(0, n.z1)("workers-and-pages-convergence")(l) && (0, r.iY)(l)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(l) {
				return !!(0, a.Le)(l, "workers", "origin_workers") && !!(0, a.Le)(l, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(l) {
				return !!(0, n.z1)("queues-ui")(l)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(l) {
				return !!(0, a.Le)(l, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(l) {
				var j = (0, i.tJ)(l);
				return !(0, s.ky)(j, [E.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_and_pages",
		url: "/workers-and-pages",
		iconType: "edgeworker",
		hasPermission: function(l) {
			return !!(0, n.z1)("workers-and-pages-convergence")(l) && (0, r.iY)(l)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers-and-pages"
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(l) {
				return !!(0, n.z1)("queues-ui")(l)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(l) {
				return !!(0, a.Le)(l, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(l) {
				var j = (0, i.tJ)(l);
				return !(0, s.ky)(j, [E.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(l) {
			return !!(0, n.z1)("workers-for-platforms")(l) && (0, r.iY)(l) && ((0, u.p1)(l) || !!(0, a.Le)(l, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(l) {
			return !(0, n.z1)("workers-and-pages-convergence")(l) && (0, r.iY)(l)
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(l) {
			return (0, r.iY)(l)
		},
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: function(l) {
				return (0, r.o_)(l)
			}
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			labels: ["beta"],
			hasPermission: function(l) {
				return (0, r.o_)(l)
			}
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(l) {
			return (0, r.iY)(l)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(l) {
				return (0, r.hv)(l)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(l) {
				return (0, r.hv)(l)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(l) {
				return (0, r.hv)(l)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: function(l) {
			return (0, r.iY)(l)
		},
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images/images",
			hasPermission: function(l) {
				return (0, r.IU)(l)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(l) {
				return (0, r.IU)(l)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(l) {
				return (0, r.IU)(l)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: function(l) {
				return (0, r.IU)(l)
			},
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link",
			hasPermission: function(l) {
				return (0, r.IU)(l) && (0, _.b8)(l)
			},
			labels: ["new"]
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(l) {
			return (0, r.iY)(l) && (!!(0, a.Le)(l, "calls", "enabled") || !!(0, a.Le)(l, "Calls", "enabled"))
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
			hasPermission: function(l) {
				return (0, r.iY)(l)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(l) {
				return (0, v.b)(l) ? (0, r.iY)(l) : (0, a.Yj)(l)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(l) {
				return (0, r.iY)(l)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(l) {
				return (0, r.iY)(l)
			}
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(l) {
			return (0, r.iY)(l)
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(l) {
			return (0, r.iY)(l)
		}
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(l) {
			return (0, r.iY)(l) && (0, M.dU)(l)
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
		hasPermission: function(l) {
			return (0, r.$n)(l, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "both",
			hasPermission: function(l) {
				return !(0, u.yD)(l)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return !(0, u.yD)(l)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return !(0, u.yD)(l)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: function(l) {
				var j = (0, m.nA)(l);
				return j ? !!(!(0, u.yD)(l) && !!(0, m.ZB)(l, "origin_reachability_dash", "dash_view") && (0, m.tU)(j, "enterprise") && !!(0, y.Ek)(l, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: function(l) {
				var j = (0, m.nA)(l);
				return j ? !!(!(0, u.yD)(l) && !!(0, m.ZB)(l, "edge_reachability_dash", "dash_view") && (0, m.tU)(j, "enterprise") && !!(0, y.Ek)(l, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationType: "global-settings",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return !(0, u.yD)(l)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return Object.values((0, g.H_)(l)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return !(0, u.yD)(l) && !!(0, m.ZB)(l, "logs", "instant_log") && !!(0, u.rV)(l, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "both",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: F.bB,
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, d.m7)(l)
		}
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(l) {
			return (0, r.$n)(l, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return !!(0, n.z1)("dns-tab-sections")(l)
			}
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return !!(0, n.z1)("dns-tab-sections")(l)
			}
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		navigationType: "global-settings",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "dns_records", "dns-record")
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
			hasPermission: function(l) {
				return !!(0, m.ZB)(l, "email", "dmarc_visible")
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
		hasPermission: function(l) {
			var j = (0, m.nA)(l);
			if ((0, u.yD)(l) || !(0, r.wB)(l, "zone_settings", "spectrum.app") || !j) return !1;
			var x = !!((0, R.l8)(l) || (0, m.DQ)(l)),
				N = !!(0, m.ZB)(l, "spectrum", "enabled"),
				W = !!(0, m.Ns)(j);
			return N || x || !W
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "ssl", "ssl.cert")
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
			hasPermission: function(l) {
				return (0, u.$f)(l, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return !!(0, n.z1)("client-certificates")(l) || !!(0, m.ZB)(l, "ssl", "client_certificates")
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
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			labels: ["beta"],
			hasPermission: function(l) {
				return (0, O.B_)(l)
			}
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version"
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: b.gn
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: b.mt
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version"
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return (0, u.du)(l, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			navigationType: "global-settings",
			hasPermission: function(l) {
				var j = (0, m.nA)(l);
				return j ? !!(0, m.ZB)(l, "firewall", "api_shield_tab") && (0, m.tU)(j, "business") : !1
			},
			tabs: b.Dw
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
		hasPermission: function(l) {
			return !(0, u.yD)(l) && ((0, r.wB)(l, "access", "access.app") || (0, r.wB)(l, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "zone_settings", "setting")
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
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "zone_settings", "setting")
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
			hasPermission: function(l) {
				return (0, r.$n)(l, "waf", "firewall.rule") || (0, r.$n)(l, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: function(l) {
				return (0, r.iY)(l)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			navigationType: "global-settings",
			url: "/caching/cache-reserve",
			hasPermission: function(l) {
				return !!(0, r.HO)(l)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		navigationType: "version",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.wB)(l, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationType: "version",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "zone_settings", "page-rule")
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
			hasPermission: function(l) {
				return (0, r.$n)(l, "waf", "firewall.rule") || (0, r.$n)(l, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: Y
		}, {
			title: "navigation.zone.rules.redirect_rules",
			labels: ["beta"],
			url: "/rules/redirect-rules",
			navigationType: "version",
			hasPermission: function(l) {
				return (0, r.$n)(l, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			navigationType: "version",
			hasPermission: function(l) {
				return (0, r.$n)(l, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			hasPermission: function(l) {
				return (0, r.$n)(l, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "version",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: function(l) {
			return (0, r.$n)(l, "lb", "load-balancer") || (0, r.$n)(l, "waitingroom", "waiting-room")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "version",
			hasPermission: function(l) {
				return !(0, u.yD)(l)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return !(0, u.yD)(l)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return (0, r.iY)(l)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return (0, r.iY)(l)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return !(0, u.yD)(l)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return !(0, u.yD)(l) && !!(0, y.Ek)(l, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: function(l) {
				return !(0, u.yD)(l) && ((0, u.du)(l, "waiting_rooms.allowed") || !!(0, m.ZB)(l, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationType: "global-settings",
		labels: function(l) {
			var j = [],
				x = (0, m.nA)(l);
			return x && !(0, m.tU)(x, "pro") && j.push("beta"), j
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationType: "global-settings",
			url: "/zaraz/tools-config",
			tabs: S.az
		}, {
			title: "navigation.zone.zaraz.history",
			navigationType: "global-settings",
			url: "/zaraz/history",
			hasPermission: function(l) {
				return l.zaraz.zarazWorkflow.isRequesting ? !1 : l.zaraz.zarazWorkflow.data === "preview"
			}
		}, {
			title: "navigation.zone.zaraz.monitoring",
			navigationType: "global-settings",
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.consent",
			navigationType: "global-settings",
			url: "/zaraz/consent",
			labels: function(l) {
				var j = [],
					x = (0, m.nA)(l);
				return x && (0, m.tU)(x, "pro") && j.push("beta"), j
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
		hasPermission: function(l) {
			var j = (0, a.uF)(l),
				x = (j == null ? void 0 : j.roles) || [];
			return x.includes("Trust and Safety") ? !1 : !(0, u.yD)(l)
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
		hasPermission: function(l) {
			return (0, u.Bs)(l)
		},
		iconType: "help"
	}, {
		title: "support_selector.compliance_documents",
		url: "/?to=/:account/compliance-docs",
		testId: "link-compliance-docs",
		hasPermission: function(l) {
			return (0, a.Yj)(l)("member").edit
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
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "ssl", "ssl.cert")
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
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "waf", "firewall.rule")
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
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(l) {
				return (0, r.iY)(l)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(l) {
				return (0, r.$n)(l, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(l) {
				return (0, r.$n)(l, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(l) {
				return (0, r.$n)(l, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(l) {
			return (0, r.$n)(l, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(l) {
				return !(0, u.yD)(l)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(l) {
			return !(0, u.yD)(l) && (0, r.$n)(l, "zone_settings", "setting")
		}
	}]
}