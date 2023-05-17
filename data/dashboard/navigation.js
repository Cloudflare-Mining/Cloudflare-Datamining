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
		hasPermission: function(m) {
			return (0, n.z1)(a.Mr)(m) === !0
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
		hasPermission: function(m) {
			return !!(0, n.z1)("oauth-access-management")(m)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(m) {
			return !(0, p.n3)() && !(0, n.z1)("oauth-access-management")(m)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(m) {
			return !(0, n.z1)("oauth-access-management")(m)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: "navigation.account.discover",
		url: "/discover",
		iconType: "discover",
		hasPermission: function(m) {
			return (0, n.z1)("dx-product-discovery-page")(m) === "experiment"
		}
	}, {
		title: function(m) {
			return (0, n.z1)("registrar-account-home-copy-experiment")(m) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "/domains",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(m) {
				return (0, o.YV)(m)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			hasPermission: function(m) {
				return (0, o.YV)(m)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			labels: ["beta"],
			hasPermission: function(m) {
				return (0, o.gw)(m)
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
			hasPermission: function(m) {
				return (0, o.iY)(m)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: function(m) {
				return (0, r.Le)(m, "account_analytics", "dos_analytics_v2") ? "/network-analytics/all-traffic" : "/network-analytics"
			},
			hasPermission: function(m) {
				return (0, o.iY)(m) && !!(0, r.Le)(m, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(m) {
				return (0, o.iY)(m)
			}
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			labels: ["new"],
			hasPermission: function(m) {
				return (0, o.iY)(m) && (0, f.S6)(m) && !!(0, n.z1)("account-logpush")(m)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(m) {
				return (0, o.iY)(m) && !!(0, r.Le)(m, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			labels: ["beta"],
			hasPermission: function(m) {
				return (0, o.iY)(m) && !!(0, r.Le)(m, "account_analytics", "magic_network_monitoring")
			}
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(m) {
			return (0, o.iY)(m) && (0, O.xU)(m)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(m) {
				return (0, o.iY)(m) && (0, O.sL)(m)
			}
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			labels: ["beta"],
			hasPermission: function(m) {
				return (0, o.iY)(m) && !!(0, n.z1)("account-level-security-analytics")(m) && (0, s.p1)(m)
			}
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			labels: ["beta"],
			hasPermission: function(m) {
				return (0, o.iY)(m) && !!(0, n.z1)("account-level-security-analytics")(m) && (0, s.p1)(m)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(m) {
				return (0, o.iY)(m) && (0, O.sL)(m)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(m) {
				return (0, o.iY)(m) && (0, O.TT)(m)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			labels: ["beta"],
			hasPermission: function(m) {
				return (0, o.iY)(m) && (0, O.jD)(m)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: function(m) {
				return (0, o.iY)(m) && (0, O.BU)(m)
			}
		}, {
			title: "navigation.account.security_center.cfone",
			url: "/cloudforce-one",
			hasPermission: function(m) {
				return (0, o.iY)(m) && (0, O.sK)(m)
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
		hasPermission: function(m) {
			return !!(0, o.AB)(m)
		},
		tabs: P.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: function(m) {
			return (0, s.Ci)(m)
		}
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(m) {
			return (0, o.iY)(m) && !!(0, n.z1)("managed-challenge-ui")(m)
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
		hasPermission: function(m) {
			return (0, o.iY)(m) && !!(0, r.Le)(m, "magic_transit", "mt_home")
		},
		tabs: d.Lx.concat(d.SF, d.Jg)
	}, {
		title: "navigation.account.magic_firewall",
		url: "/network-security/magic_firewall",
		iconType: "magic-firewall",
		hasPermission: function(m) {
			return !!(0, o.zJ)(m)
		},
		tabs: P.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: function(m) {
			var w = !!(0, o.Wq)(m) && !!(0, o.fO)(m);
			return !!(0, o.Tk)(m) || w
		},
		tabs: P.Dn
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: function(m) {
				return (0, o.iY)(m) && !!(0, r.Le)(m, "addressing", "ip_prefixes")
			}
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: function(m) {
				return (0, o.iY)(m) && !!(0, n.z1)("proxy-ips-ui")(m)
			}
		}],
		hasPermission: function(m) {
			return (0, o.iY)(m) && !!(0, r.Le)(m, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.group_title.cloudflare_one",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: function() {
			var m = (0, N.e1)(),
				w = "https://one.dash.cloudflare.com";
			return m ? "".concat(w, "/").concat(m, "/") : w
		},
		iconType: "cloudflare-zero-trust",
		labels: function(m) {
			return (0, n.z1)("zt-sidebar")(m) ? [] : ["external-link"]
		},
		hasPermission: function(m) {
			return (0, o.iY)(m)
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(m) {
			return (0, o.iY)(m) && !!(0, r.Le)(m, "magic_wan", "mw_home")
		},
		tabs: d.SF.concat(d.Jg)
	}, {
		hasPermission: function(m) {
			return (0, o.iY)(m)
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
		hasPermission: function(m) {
			return !(0, n.z1)("workers-and-pages-convergence")(m) && (0, o.iY)(m)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(m) {
				return !!(0, r.Le)(m, "workers", "origin_workers") && !!(0, r.Le)(m, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(m) {
				return !!(0, n.z1)("queues-ui")(m)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(m) {
				return !!(0, r.Le)(m, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: function(m) {
				return !!(0, n.z1)("constellation-ui")(m)
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(m) {
				var w = (0, y.tJ)(m);
				return !(0, z.ky)(w, [D.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_and_pages",
		url: "/workers-and-pages",
		iconType: "workers-pages",
		hasPermission: function(m) {
			return !!(0, n.z1)("workers-and-pages-convergence")(m) && (0, o.iY)(m)
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
			hasPermission: function(m) {
				return !!(0, n.z1)("queues-ui")(m)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(m) {
				return !!(0, r.Le)(m, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: function(m) {
				return !!(0, n.z1)("constellation-ui")(m)
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(m) {
				var w = (0, y.tJ)(m);
				return !(0, z.ky)(w, [D.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(m) {
			return !!(0, n.z1)("workers-for-platforms")(m) && (0, o.iY)(m) && ((0, s.p1)(m) || !!(0, r.Le)(m, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(m) {
			return !(0, n.z1)("workers-and-pages-convergence")(m) && (0, o.iY)(m)
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(m) {
			return (0, o.iY)(m)
		},
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: function(m) {
				return (0, o.o_)(m)
			}
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: function(m) {
				return (0, o.o_)(m)
			}
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(m) {
			return (0, o.iY)(m)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(m) {
				return (0, o.hv)(m)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(m) {
				return (0, o.hv)(m)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(m) {
				return (0, o.hv)(m)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: function(m) {
			return (0, o.iY)(m)
		},
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images/images",
			hasPermission: function(m) {
				return (0, o.IU)(m)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(m) {
				return (0, o.IU)(m)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(m) {
				return (0, o.IU)(m)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: function(m) {
				return (0, o.IU)(m)
			},
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link",
			hasPermission: function(m) {
				return (0, o.IU)(m) && (0, C.b8)(m)
			},
			labels: ["new"]
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(m) {
			return (0, o.iY)(m) && (!!(0, r.Le)(m, "calls", "enabled") || !!(0, r.Le)(m, "Calls", "enabled"))
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
			hasPermission: function(m) {
				return (0, o.iY)(m)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(m) {
				return (0, h.b)(m) ? (0, o.iY)(m) : (0, r.Yj)(m)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(m) {
				return (0, o.iY)(m)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(m) {
				return (0, o.iY)(m)
			}
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(m) {
			return (0, o.iY)(m)
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(m) {
			return (0, o.iY)(m)
		}
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(m) {
			return (0, o.iY)(m) && (0, b.dU)(m)
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
		hasPermission: function(m) {
			return (0, o.$n)(m, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "both",
			hasPermission: function(m) {
				return !(0, s.yD)(m)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return !(0, s.yD)(m)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return !(0, s.yD)(m)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: function(m) {
				var w = (0, l.nA)(m);
				return w ? !!(!(0, s.yD)(m) && !!(0, l.ZB)(m, "origin_reachability_dash", "dash_view") && (0, l.tU)(w, "enterprise") && !!(0, E.Ek)(m, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: function(m) {
				var w = (0, l.nA)(m);
				return w ? !!(!(0, s.yD)(m) && !!(0, l.ZB)(m, "edge_reachability_dash", "dash_view") && (0, l.tU)(w, "enterprise") && !!(0, E.Ek)(m, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationType: "global-settings",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return !(0, s.yD)(m)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return Object.values((0, f.H_)(m)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return !(0, s.yD)(m) && !!(0, l.ZB)(m, "logs", "instant_log") && !!(0, s.rV)(m, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "both",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: k.bB,
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, I.m7)(m)
		}
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(m) {
			return (0, o.$n)(m, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return !!(0, n.z1)("dns-tab-sections")(m)
			}
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return !!(0, n.z1)("dns-tab-sections")(m)
			}
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		navigationType: "global-settings",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.email.routing",
			navigationType: "global-settings",
			url: "/email/routing",
			tabs: T.hg
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			labels: ["beta"],
			hasPermission: function(m) {
				return !!(0, l.ZB)(m, "email", "dmarc_visible")
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
		hasPermission: function(m) {
			var w = (0, l.nA)(m);
			if ((0, s.yD)(m) || !(0, o.wB)(m, "zone_settings", "spectrum.app") || !w) return !1;
			var _ = !!((0, B.l8)(m) || (0, l.DQ)(m)),
				U = !!(0, l.ZB)(m, "spectrum", "enabled"),
				K = !!(0, l.Ns)(w);
			return U || _ || !K
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "ssl", "ssl.cert")
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
			hasPermission: function(m) {
				return (0, s.$f)(m, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return !!(0, n.z1)("client-certificates")(m) || !!(0, l.ZB)(m, "ssl", "client_certificates")
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
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			labels: ["beta"],
			hasPermission: function(m) {
				return (0, A.B_)(m)
			}
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version"
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: S.gn
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: S.mt
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "both"
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return (0, s.du)(m, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			navigationType: "global-settings",
			hasPermission: function(m) {
				var w = (0, l.nA)(m);
				return w ? !!(0, l.ZB)(m, "firewall", "api_shield_tab") && (0, l.tU)(w, "business") : !1
			},
			tabs: S.Dw
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
		hasPermission: function(m) {
			return !(0, s.yD)(m) && ((0, o.wB)(m, "access", "access.app") || (0, o.wB)(m, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "zone_settings", "setting")
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
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "zone_settings", "setting")
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
			hasPermission: function(m) {
				return (0, o.$n)(m, "waf", "firewall.rule") || (0, o.$n)(m, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: function(m) {
				return (0, o.iY)(m)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			navigationType: "global-settings",
			url: "/caching/cache-reserve",
			hasPermission: function(m) {
				return !!(0, o.HO)(m)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		navigationType: "version",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.wB)(m, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationType: "version",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "zone_settings", "page-rule")
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
			hasPermission: function(m) {
				return (0, o.$n)(m, "waf", "firewall.rule") || (0, o.$n)(m, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: Q
		}, {
			title: "navigation.zone.rules.redirect_rules",
			labels: ["beta"],
			url: "/rules/redirect-rules",
			navigationType: "version",
			hasPermission: function(m) {
				return (0, o.$n)(m, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			navigationType: "version",
			hasPermission: function(m) {
				return (0, o.$n)(m, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.compression_rules",
			labels: ["new"],
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: function(m) {
				return (0, o.$n)(m, "waf", "page-rule", "read") && !!(0, s.rV)(m, "rulesets.response_compression_max_rules") && !!(0, n.z1)("compression-rules")(m)
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			hasPermission: function(m) {
				return (0, o.$n)(m, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "version",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: function(m) {
			return (0, o.$n)(m, "lb", "load-balancer") || (0, o.$n)(m, "waitingroom", "waiting-room")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "version",
			hasPermission: function(m) {
				return !(0, s.yD)(m)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return !(0, s.yD)(m)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return (0, o.iY)(m)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return (0, o.iY)(m)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return !(0, s.yD)(m)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return !(0, s.yD)(m) && !!(0, E.Ek)(m, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: function(m) {
				return !(0, s.yD)(m) && ((0, s.du)(m, "waiting_rooms.allowed") || !!(0, l.ZB)(m, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationType: "global-settings",
		labels: function(m) {
			var w = [],
				_ = (0, l.nA)(m);
			return _ && !(0, l.tU)(_, "pro") && w.push("beta"), w
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationType: "global-settings",
			url: "/zaraz/tools-config",
			tabs: g.az
		}, {
			title: "navigation.zone.zaraz.history",
			navigationType: "global-settings",
			url: "/zaraz/history",
			hasPermission: function(m) {
				return m.zaraz.zarazWorkflow.isRequesting ? !1 : m.zaraz.zarazWorkflow.data === "preview"
			}
		}, {
			title: "navigation.zone.zaraz.monitoring",
			navigationType: "global-settings",
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.consent",
			navigationType: "global-settings",
			url: "/zaraz/consent",
			labels: function(m) {
				var w = [],
					_ = (0, l.nA)(m);
				return _ && (0, l.tU)(_, "pro") && w.push("beta"), w
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
		hasPermission: function(m) {
			var w = (0, r.uF)(m),
				_ = (w == null ? void 0 : w.roles) || [];
			return _.includes("Trust and Safety") ? !1 : !(0, s.yD)(m)
		}
	}],
	zeroTrust: [{
		url: function() {
			return (0, R.Uj)("home")
		},
		title: "navigation.account.zero_trust",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, R.Uj)("analytics/access")
		},
		title: "navigation.account.zero_trust.analytics",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, R.Uj)("gateway/locations")
		},
		title: "navigation.account.zero_trust.gateway",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, R.Uj)("access/apps")
		},
		title: "navigation.account.zero_trust.access",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, R.Uj)("team/devices")
		},
		title: "navigation.account.zero_trust.my_team",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, R.Uj)("logs/admin")
		},
		title: "navigation.account.zero_trust.logs",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, R.Uj)("settings")
		},
		title: "navigation.account.zero_trust.settings",
		iconType: "cloudflare-zero-trust"
	}],
	support: x.G,
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "ssl", "ssl.cert")
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
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "waf", "firewall.rule")
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
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(m) {
				return (0, o.iY)(m)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(m) {
				return (0, o.$n)(m, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(m) {
				return (0, o.$n)(m, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			labels: ["new"],
			hasPermission: function(m) {
				return (0, o.$n)(m, "waf", "page-rule", "read") && !!(0, s.rV)(m, "rulesets.response_compression_max_rules") && !!(0, n.z1)("compression-rules")(m)
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(m) {
				return (0, o.$n)(m, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(m) {
			return (0, o.$n)(m, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(m) {
				return !(0, s.yD)(m)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(m) {
			return !(0, s.yD)(m) && (0, o.$n)(m, "zone_settings", "setting")
		}
	}]
}