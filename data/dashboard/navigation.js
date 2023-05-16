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
		hasPermission: function(p) {
			return (0, n.z1)(a.Mr)(p) === !0
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
		hasPermission: function(p) {
			return !!(0, n.z1)("oauth-access-management")(p)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(p) {
			return !(0, d.n3)() && !(0, n.z1)("oauth-access-management")(p)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(p) {
			return !(0, n.z1)("oauth-access-management")(p)
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
		hasPermission: function(p) {
			return (0, n.z1)("dx-product-discovery-page")(p) === "experiment"
		}
	}, {
		title: function(p) {
			return (0, n.z1)("registrar-account-home-copy-experiment")(p) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "/domains",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(p) {
				return (0, i.YV)(p)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			hasPermission: function(p) {
				return (0, i.YV)(p)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			labels: ["beta"],
			hasPermission: function(p) {
				return (0, i.gw)(p)
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
			hasPermission: function(p) {
				return (0, i.iY)(p)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: function(p) {
				return (0, r.Le)(p, "account_analytics", "dos_analytics_v2") ? "/network-analytics/all-traffic" : "/network-analytics"
			},
			hasPermission: function(p) {
				return (0, i.iY)(p) && !!(0, r.Le)(p, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(p) {
				return (0, i.iY)(p)
			}
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			labels: ["new"],
			hasPermission: function(p) {
				return (0, i.iY)(p) && (0, f.S6)(p) && !!(0, n.z1)("account-logpush")(p)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(p) {
				return (0, i.iY)(p) && !!(0, r.Le)(p, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			labels: ["beta"],
			hasPermission: function(p) {
				return (0, i.iY)(p) && !!(0, r.Le)(p, "account_analytics", "magic_network_monitoring")
			}
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(p) {
			return (0, i.iY)(p) && (0, O.xU)(p)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(p) {
				return (0, i.iY)(p) && (0, O.sL)(p)
			}
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			labels: ["beta"],
			hasPermission: function(p) {
				return (0, i.iY)(p) && !!(0, n.z1)("account-level-security-analytics")(p) && (0, m.p1)(p)
			}
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			labels: ["beta"],
			hasPermission: function(p) {
				return (0, i.iY)(p) && !!(0, n.z1)("account-level-security-analytics")(p) && (0, m.p1)(p)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(p) {
				return (0, i.iY)(p) && (0, O.sL)(p)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(p) {
				return (0, i.iY)(p) && (0, O.TT)(p)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			labels: ["beta"],
			hasPermission: function(p) {
				return (0, i.iY)(p) && (0, O.jD)(p)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: function(p) {
				return (0, i.iY)(p) && (0, O.BU)(p)
			}
		}, {
			title: "navigation.account.security_center.cfone",
			url: "/cloudforce-one",
			hasPermission: function(p) {
				return (0, i.iY)(p) && (0, O.sK)(p)
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
		hasPermission: function(p) {
			return !!(0, i.AB)(p)
		},
		tabs: N.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: function(p) {
			return (0, m.Ci)(p)
		}
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(p) {
			return (0, i.iY)(p) && !!(0, n.z1)("managed-challenge-ui")(p)
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
		hasPermission: function(p) {
			return (0, i.iY)(p) && !!(0, r.Le)(p, "magic_transit", "mt_home")
		},
		tabs: u.Lx.concat(u.SF, u.Jg)
	}, {
		title: "navigation.account.magic_firewall",
		url: "/network-security/magic_firewall",
		iconType: "magic-firewall",
		hasPermission: function(p) {
			return !!(0, i.zJ)(p)
		},
		tabs: N.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: function(p) {
			var k = !!(0, i.Wq)(p) && !!(0, i.fO)(p);
			return !!(0, i.Tk)(p) || k
		},
		tabs: N.Dn
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: function(p) {
				return (0, i.iY)(p) && !!(0, r.Le)(p, "addressing", "ip_prefixes")
			}
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: function(p) {
				return (0, i.iY)(p) && !!(0, n.z1)("proxy-ips-ui")(p)
			}
		}],
		hasPermission: function(p) {
			return (0, i.iY)(p) && !!(0, r.Le)(p, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.group_title.cloudflare_one",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: function() {
			var p = (0, P.e1)(),
				k = "https://one.dash.cloudflare.com";
			return p ? "".concat(k, "/").concat(p, "/") : k
		},
		iconType: "cloudflare-zero-trust",
		labels: function(p) {
			return (0, n.z1)("zt-sidebar")(p) ? [] : ["external-link"]
		},
		hasPermission: function(p) {
			return (0, i.iY)(p)
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(p) {
			return (0, i.iY)(p) && !!(0, r.Le)(p, "magic_wan", "mw_home")
		},
		tabs: u.SF.concat(u.Jg)
	}, {
		hasPermission: function(p) {
			return (0, i.iY)(p)
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
		hasPermission: function(p) {
			return !(0, n.z1)("workers-and-pages-convergence")(p) && (0, i.iY)(p)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(p) {
				return !!(0, r.Le)(p, "workers", "origin_workers") && !!(0, r.Le)(p, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(p) {
				return !!(0, n.z1)("queues-ui")(p)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(p) {
				return !!(0, r.Le)(p, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: function(p) {
				return !!(0, n.z1)("constellation-ui")(p)
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(p) {
				var k = (0, l.tJ)(p);
				return !(0, z.ky)(k, [_.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_and_pages",
		url: "/workers-and-pages",
		iconType: "workers-pages",
		hasPermission: function(p) {
			return !!(0, n.z1)("workers-and-pages-convergence")(p) && (0, i.iY)(p)
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
			hasPermission: function(p) {
				return !!(0, n.z1)("queues-ui")(p)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(p) {
				return !!(0, r.Le)(p, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: function(p) {
				return !!(0, n.z1)("constellation-ui")(p)
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(p) {
				var k = (0, l.tJ)(p);
				return !(0, z.ky)(k, [_.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(p) {
			return !!(0, n.z1)("workers-for-platforms")(p) && (0, i.iY)(p) && ((0, m.p1)(p) || !!(0, r.Le)(p, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(p) {
			return !(0, n.z1)("workers-and-pages-convergence")(p) && (0, i.iY)(p)
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(p) {
			return (0, i.iY)(p)
		},
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: function(p) {
				return (0, i.o_)(p)
			}
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: function(p) {
				return (0, i.o_)(p)
			}
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(p) {
			return (0, i.iY)(p)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(p) {
				return (0, i.hv)(p)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(p) {
				return (0, i.hv)(p)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(p) {
				return (0, i.hv)(p)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: function(p) {
			return (0, i.iY)(p)
		},
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images/images",
			hasPermission: function(p) {
				return (0, i.IU)(p)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(p) {
				return (0, i.IU)(p)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(p) {
				return (0, i.IU)(p)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: function(p) {
				return (0, i.IU)(p)
			},
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link",
			hasPermission: function(p) {
				return (0, i.IU)(p) && (0, C.b8)(p)
			},
			labels: ["new"]
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(p) {
			return (0, i.iY)(p) && (!!(0, r.Le)(p, "calls", "enabled") || !!(0, r.Le)(p, "Calls", "enabled"))
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
			hasPermission: function(p) {
				return (0, i.iY)(p)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(p) {
				return (0, b.b)(p) ? (0, i.iY)(p) : (0, r.Yj)(p)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(p) {
				return (0, i.iY)(p)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(p) {
				return (0, i.iY)(p)
			}
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(p) {
			return (0, i.iY)(p)
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(p) {
			return (0, i.iY)(p)
		}
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(p) {
			return (0, i.iY)(p) && (0, h.dU)(p)
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
		hasPermission: function(p) {
			return (0, i.$n)(p, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "both",
			hasPermission: function(p) {
				return !(0, m.yD)(p)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return !(0, m.yD)(p)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return !(0, m.yD)(p)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: function(p) {
				var k = (0, g.nA)(p);
				return k ? !!(!(0, m.yD)(p) && !!(0, g.ZB)(p, "origin_reachability_dash", "dash_view") && (0, g.tU)(k, "enterprise") && !!(0, A.Ek)(p, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: function(p) {
				var k = (0, g.nA)(p);
				return k ? !!(!(0, m.yD)(p) && !!(0, g.ZB)(p, "edge_reachability_dash", "dash_view") && (0, g.tU)(k, "enterprise") && !!(0, A.Ek)(p, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationType: "global-settings",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return !(0, m.yD)(p)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return Object.values((0, f.H_)(p)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return !(0, m.yD)(p) && !!(0, g.ZB)(p, "logs", "instant_log") && !!(0, m.rV)(p, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "both",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: j.bB,
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, T.m7)(p)
		}
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(p) {
			return (0, i.$n)(p, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return !!(0, n.z1)("dns-tab-sections")(p)
			}
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return !!(0, n.z1)("dns-tab-sections")(p)
			}
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		navigationType: "global-settings",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.email.routing",
			navigationType: "global-settings",
			url: "/email/routing",
			tabs: M.hg
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			labels: ["beta"],
			hasPermission: function(p) {
				return !!(0, g.ZB)(p, "email", "dmarc_visible")
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
		hasPermission: function(p) {
			var k = (0, g.nA)(p);
			if ((0, m.yD)(p) || !(0, i.wB)(p, "zone_settings", "spectrum.app") || !k) return !1;
			var w = !!((0, W.l8)(p) || (0, g.DQ)(p)),
				F = !!(0, g.ZB)(p, "spectrum", "enabled"),
				H = !!(0, g.Ns)(k);
			return F || w || !H
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "ssl", "ssl.cert")
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
			hasPermission: function(p) {
				return (0, m.$f)(p, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return !!(0, n.z1)("client-certificates")(p) || !!(0, g.ZB)(p, "ssl", "client_certificates")
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
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			labels: ["beta"],
			hasPermission: function(p) {
				return (0, S.B_)(p)
			}
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version"
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: I.gn
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: I.mt
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "both"
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return (0, m.du)(p, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			navigationType: "global-settings",
			hasPermission: function(p) {
				var k = (0, g.nA)(p);
				return k ? !!(0, g.ZB)(p, "firewall", "api_shield_tab") && (0, g.tU)(k, "business") : !1
			},
			tabs: I.Dw
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
		hasPermission: function(p) {
			return !(0, m.yD)(p) && ((0, i.wB)(p, "access", "access.app") || (0, i.wB)(p, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "zone_settings", "setting")
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
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "zone_settings", "setting")
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
			hasPermission: function(p) {
				return (0, i.$n)(p, "waf", "firewall.rule") || (0, i.$n)(p, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: function(p) {
				return (0, i.iY)(p)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			navigationType: "global-settings",
			url: "/caching/cache-reserve",
			hasPermission: function(p) {
				return !!(0, i.HO)(p)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		navigationType: "version",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.wB)(p, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationType: "version",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "zone_settings", "page-rule")
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
			hasPermission: function(p) {
				return (0, i.$n)(p, "waf", "firewall.rule") || (0, i.$n)(p, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: U
		}, {
			title: "navigation.zone.rules.redirect_rules",
			labels: ["beta"],
			url: "/rules/redirect-rules",
			navigationType: "version",
			hasPermission: function(p) {
				return (0, i.$n)(p, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			navigationType: "version",
			hasPermission: function(p) {
				return (0, i.$n)(p, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.compression_rules",
			labels: ["new"],
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: function(p) {
				return (0, i.$n)(p, "waf", "page-rule", "read") && !!(0, m.rV)(p, "rulesets.response_compression_max_rules") && !!(0, n.z1)("compression-rules")(p)
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			hasPermission: function(p) {
				return (0, i.$n)(p, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "version",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: function(p) {
			return (0, i.$n)(p, "lb", "load-balancer") || (0, i.$n)(p, "waitingroom", "waiting-room")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "version",
			hasPermission: function(p) {
				return !(0, m.yD)(p)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return !(0, m.yD)(p)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return (0, i.iY)(p)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return (0, i.iY)(p)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return !(0, m.yD)(p)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return !(0, m.yD)(p) && !!(0, A.Ek)(p, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: function(p) {
				return !(0, m.yD)(p) && ((0, m.du)(p, "waiting_rooms.allowed") || !!(0, g.ZB)(p, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationType: "global-settings",
		labels: function(p) {
			var k = [],
				w = (0, g.nA)(p);
			return w && !(0, g.tU)(w, "pro") && k.push("beta"), k
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationType: "global-settings",
			url: "/zaraz/tools-config",
			tabs: y.az
		}, {
			title: "navigation.zone.zaraz.history",
			navigationType: "global-settings",
			url: "/zaraz/history",
			hasPermission: function(p) {
				return p.zaraz.zarazWorkflow.isRequesting ? !1 : p.zaraz.zarazWorkflow.data === "preview"
			}
		}, {
			title: "navigation.zone.zaraz.monitoring",
			navigationType: "global-settings",
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.consent",
			navigationType: "global-settings",
			url: "/zaraz/consent",
			labels: function(p) {
				var k = [],
					w = (0, g.nA)(p);
				return w && (0, g.tU)(w, "pro") && k.push("beta"), k
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
		hasPermission: function(p) {
			var k = (0, r.uF)(p),
				w = (k == null ? void 0 : k.roles) || [];
			return w.includes("Trust and Safety") ? !1 : !(0, m.yD)(p)
		}
	}],
	zeroTrust: [{
		url: function() {
			return (0, Q.Uj)("home")
		},
		title: "navigation.account.zero_trust",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, Q.Uj)("analytics/access")
		},
		title: "navigation.account.zero_trust.analytics",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, Q.Uj)("gateway/locations")
		},
		title: "navigation.account.zero_trust.gateway",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, Q.Uj)("access/apps")
		},
		title: "navigation.account.zero_trust.access",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, Q.Uj)("team/devices")
		},
		title: "navigation.account.zero_trust.my_team",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, Q.Uj)("logs/admin")
		},
		title: "navigation.account.zero_trust.logs",
		iconType: "cloudflare-zero-trust"
	}, {
		url: function() {
			return (0, Q.Uj)("settings")
		},
		title: "navigation.account.zero_trust.settings",
		iconType: "cloudflare-zero-trust"
	}],
	support: D.G,
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "ssl", "ssl.cert")
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
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "waf", "firewall.rule")
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
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(p) {
				return (0, i.iY)(p)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(p) {
				return (0, i.$n)(p, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(p) {
				return (0, i.$n)(p, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			labels: ["new"],
			hasPermission: function(p) {
				return (0, i.$n)(p, "waf", "page-rule", "read") && !!(0, m.rV)(p, "rulesets.response_compression_max_rules") && !!(0, n.z1)("compression-rules")(p)
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(p) {
				return (0, i.$n)(p, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(p) {
			return (0, i.$n)(p, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(p) {
				return !(0, m.yD)(p)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(p) {
			return !(0, m.yD)(p) && (0, i.$n)(p, "zone_settings", "setting")
		}
	}]
}