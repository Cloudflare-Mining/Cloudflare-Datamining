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
			return (0, n.z1)(H.Mr)(i) === !0
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
			return !!(0, n.z1)("oauth-access-management")(i)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(i) {
			return !(0, u.n3)() && !(0, n.z1)("oauth-access-management")(i)
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
			return !(0, n.z1)("oauth-access-management")(i)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(i) {
			return (0, n.z1)("registrar-account-home-copy-experiment")(i) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
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
				return k(i)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			hasPermission: function(i) {
				return k(i)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			hasPermission: function(i) {
				return F(i)
			}
		}]
	}, {
		title: "navigation.common.analytics",
		url: "",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: function(i) {
				return O(i)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: function(i) {
				return (0, t.getAccountFlipperFlag)(i, "account_analytics", "dos_analytics_v2") ? "/network-analytics/all-traffic" : "/network-analytics"
			},
			hasPermission: function(i) {
				return O(i) && !!(0, t.getAccountFlipperFlag)(i, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(i) {
				return O(i)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(i) {
				return O(i) && !!(0, t.getAccountFlipperFlag)(i, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "account.magic.network_monitoring.navigation",
			url: "/network-monitoring",
			labels: ["beta"],
			hasPermission: function(i) {
				return O(i) && !!(0, t.getAccountFlipperFlag)(i, "account_analytics", "magic_network_monitoring")
			}
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			labels: ["new"],
			hasPermission: function(i) {
				return O(i) && (0, h.S6)(i) && !!(0, n.z1)("account-logpush")(i)
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(i) {
			return O(i) && (0, D.dU)(i)
		}
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(i) {
			return O(i) && (!!(0, t.getAccountFlipperFlag)(i, "calls", "enabled") || !!(0, t.getAccountFlipperFlag)(i, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(i) {
			return O(i)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(i) {
			return O(i)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(i) {
				return !!(0, t.getAccountFlipperFlag)(i, "workers", "origin_workers") && !!(0, t.getAccountFlipperFlag)(i, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(i) {
				return !!(0, n.z1)("queues-ui")(i)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(i) {
				return !!(0, t.getAccountFlipperFlag)(i, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(i) {
				var X = (0, o.getSubscriptions)(i);
				return !(0, j.ky)(X, [I.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(i) {
			return !!(0, n.z1)("workers-for-platforms")(i) && O(i) && ((0, f.hasEnterpriseAccountEntitlement)(i) || !!(0, t.getAccountFlipperFlag)(i, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(i) {
			return O(i)
		},
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: function(i) {
				return P(i)
			}
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			labels: ["beta"],
			hasPermission: function(i) {
				return P(i)
			}
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(i) {
			return O(i)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(i) {
				return d(i)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(i) {
				return d(i)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(i) {
				return d(i)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: function(i) {
			return O(i) && !!(0, t.getAccountFlipperFlag)(i, "cloudflare_images", "early_release_access")
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(i) {
				return W(i)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(i) {
				return W(i)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(i) {
				return W(i)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: function(i) {
				return W(i)
			},
			labels: ["beta"]
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(i) {
			return O(i) && (0, M.xU)(i)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(i) {
				return O(i) && (0, M.sL)(i)
			}
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			labels: ["beta"],
			hasPermission: function(i) {
				return O(i) && (0, M.sL)(i) && !!(0, n.z1)("account-level-security-analytics")(i)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(i) {
				return O(i) && (0, M.sL)(i)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(i) {
				return O(i) && (0, M.TT)(i)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(i) {
				return O(i) && (0, M.jD)(i)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(i) {
				return O(i) && (0, M.BU)(i)
			}
		}, {
			title: "navigation.account.security_center.cfone",
			url: "/security-center/cloudforce-one",
			hasPermission: function(i) {
				return O(i) && (0, M.sK)(i)
			}
		}]
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/application-security",
		iconType: "cloudflare-security-application",
		hasPermission: function(i) {
			return O(i) && !!$(i)
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: "/application-security/waf",
			hasPermission: function(i) {
				return !!$(i)
			}
		}]
	}, {
		title: "navigation.account.network_security",
		url: "/network-security",
		iconType: "cloudflare-security-network",
		hasPermission: function(i) {
			return O(i) && !!Q(i)
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/network-security/ddos",
			hasPermission: function(i) {
				var X = !!J(i) && !!fe(i);
				return !!ne(i) || X
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/network-security/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(i) {
				return !!Q(i)
			}
		}]
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(i) {
			return O(i) && !!(0, n.z1)("managed-challenge-ui")(i)
		}
	}, {
		title: "navigation.account.teams",
		url: function() {
			var i = (0, V.e1)(),
				X = "https://one.dash.cloudflare.com";
			return i ? "".concat(X, "/").concat(i, "/") : X
		},
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(i) {
			return O(i)
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
				return O(i) && !!(0, t.getAccountFlipperFlag)(i, "addressing", "ip_prefixes")
			}
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: function(i) {
				return O(i) && !!(0, n.z1)("proxy-ips-ui")(i)
			}
		}],
		hasPermission: function(i) {
			return O(i) && !!(0, t.getAccountFlipperFlag)(i, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(i) {
			return O(i) && !!(0, t.getAccountFlipperFlag)(i, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(i) {
			return O(i) && !!(0, t.getAccountFlipperFlag)(i, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(i) {
			return O(i)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(i) {
			return O(i)
		}
	}, {
		title: "navigation.account.manage_account",
		url: "",
		iconType: "gear",
		labels: ["border-top"],
		testId: "manage-account-link",
		pages: [{
			title: "navigation.account.members",
			url: "/members",
			testId: "account-homepage-members",
			hasPermission: function(i) {
				return O(i)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(i) {
				return (0, A.b)(i) ? O(i) : (0, t.getPermission)(i)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(i) {
				return O(i)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(i) {
				return O(i)
			}
		}]
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview",
		canBeVersioned: !1
	}, {
		title: "navigation.common.analytics",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		canBeVersioned: !0,
		hasPermission: function(i) {
			return g(i, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			canBeVersioned: !0,
			hasPermission: function(i) {
				return !(0, f.zoneIsDNSOnly)(i)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return !(0, f.zoneIsDNSOnly)(i)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return !(0, f.zoneIsDNSOnly)(i)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			canBeVersioned: !1,
			hasPermission: function(i) {
				var X = (0, B.getZone)(i);
				return X ? !!(!(0, f.zoneIsDNSOnly)(i) && !!(0, B.getZoneFlipperFlag)(i, "origin_reachability_dash", "dash_view") && (0, B.isPlanAtLeast)(X, "enterprise") && !!(0, a.getZoneGraphQLSettingEnabled)(i, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			canBeVersioned: !1,
			hasPermission: function(i) {
				var X = (0, B.getZone)(i);
				return X ? !!(!(0, f.zoneIsDNSOnly)(i) && !!(0, B.getZoneFlipperFlag)(i, "edge_reachability_dash", "dash_view") && (0, B.isPlanAtLeast)(X, "enterprise") && !!(0, a.getZoneGraphQLSettingEnabled)(i, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			canBeVersioned: !1,
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return !(0, f.zoneIsDNSOnly)(i)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return Object.values((0, h.H_)(i)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return !(0, f.zoneIsDNSOnly)(i) && !!(0, B.getZoneFlipperFlag)(i, "logs", "instant_log") && !!(0, f.getZoneEntitlement)(i, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.http_applications_v2",
		url: "/versioning",
		canBeVersioned: !0,
		iconType: "git-branch",
		testId: "zone-navigation-link-http_applications_v2",
		hasPermission: function(i) {
			return !!(0, n.z1)("versioning-enablement")(i) && g(i, "zone_versioning", "versioning")
		}
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		canBeVersioned: !1,
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(i) {
			return g(i, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return !!(0, n.z1)("dns-tab-sections")(i)
			}
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return !!(0, n.z1)("dns-tab-sections")(i)
			}
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		canBeVersioned: !1,
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.email.routing",
			canBeVersioned: !1,
			url: "/email/routing"
		}, {
			title: "navigation.zone.email.security",
			canBeVersioned: !1,
			url: "/email/security"
		}]
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		canBeVersioned: !1,
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(i) {
			var X = (0, B.getZone)(i);
			if ((0, f.zoneIsDNSOnly)(i) || !l(i, "zone_settings", "spectrum.app") || !X) return !1;
			var re = !!((0, s.userHasEntZones)(i) || (0, B.userHasDelegatedEntZones)(i)),
				se = !!(0, B.getZoneFlipperFlag)(i, "spectrum", "enabled"),
				De = !!(0, B.isFree)(X);
			return se || re || !De
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		canBeVersioned: !0,
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return (0, f.hasAccountEntitlement)(i, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return !!(0, n.z1)("client-certificates")(i) || !!(0, B.getZoneFlipperFlag)(i, "ssl", "client_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.origin_server",
			canBeVersioned: !1,
			url: "/ssl-tls/origin"
		}, {
			title: "navigation.zone.ssl-tls.custom_hostnames",
			canBeVersioned: !1,
			url: "/ssl-tls/custom-hostnames"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security",
		iconType: "shield",
		testId: "zone-navigation-link-security",
		canBeVersioned: !0,
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.analytics",
			canBeVersioned: !0,
			url: "/security/analytics",
			labels: ["beta"],
			hasPermission: function(i) {
				return (0, S.B_)(i)
			}
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.security.page_shield",
			canBeVersioned: !1,
			url: "/security/page-shield"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return (0, f.hasZoneEntitlement)(i, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			canBeVersioned: !1,
			labels: ["new"],
			hasPermission: function(i) {
				var X = (0, B.getZone)(i);
				return X ? !!(0, B.getZoneFlipperFlag)(i, "firewall", "api_shield_tab") && (0, B.isPlanAtLeast)(X, "business") : !1
			}
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			canBeVersioned: !0
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		canBeVersioned: !1,
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && (l(i, "access", "access.app") || l(i, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		canBeVersioned: !0,
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/speed",
			canBeVersioned: !0,
			hasPermission: function(i) {
				return (0, n.z1)("speed-test-result")(i) !== !0
			}
		}, {
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			canBeVersioned: !0,
			labels: ["beta"],
			hasPermission: function(i) {
				return (0, n.z1)("speed-test-result")(i) === !0
			}
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.speed.browser_insights",
			canBeVersioned: !1,
			url: "/speed/browser-insights"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		canBeVersioned: !0,
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			canBeVersioned: !0,
			url: "/caching"
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			canBeVersioned: !0,
			labels: ["beta"],
			hasPermission: function(i) {
				return g(i, "waf", "firewall.rule") || g(i, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			canBeVersioned: !0,
			hasPermission: function(i) {
				return O(i)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			canBeVersioned: !1,
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(i) {
				return !!R(i)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		canBeVersioned: !0,
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && l(i, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		canBeVersioned: !0,
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.rules.configuration_rules",
			labels: ["beta"],
			url: "/rules/configuration-rules",
			canBeVersioned: !0,
			hasPermission: function(i) {
				return g(i, "waf", "firewall.rule") || g(i, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.rules.redirect_rules",
			labels: ["beta"],
			url: "/rules/redirect-rules",
			canBeVersioned: !0,
			hasPermission: function(i) {
				return g(i, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			canBeVersioned: !0,
			hasPermission: function(i) {
				return g(i, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			canBeVersioned: !0,
			hasPermission: function(i) {
				return g(i, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		canBeVersioned: !0,
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		canBeVersioned: !0,
		hasPermission: function(i) {
			return g(i, "lb", "load-balancer") || g(i, "waitingroom", "waiting-room")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return !(0, f.zoneIsDNSOnly)(i)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			canBeVersioned: !0,
			hasPermission: function(i) {
				return !(0, f.zoneIsDNSOnly)(i)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return O(i)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return O(i)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return !(0, f.zoneIsDNSOnly)(i)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return !(0, f.zoneIsDNSOnly)(i) && !!(0, a.getZoneGraphQLSettingEnabled)(i, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			canBeVersioned: !1,
			hasPermission: function(i) {
				return !(0, f.zoneIsDNSOnly)(i) && ((0, f.hasZoneEntitlement)(i, "waiting_rooms.allowed") || !!(0, B.getZoneFlipperFlag)(i, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		canBeVersioned: !0,
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		canBeVersioned: !1,
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		canBeVersioned: !0,
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		canBeVersioned: !1,
		labels: function(i) {
			var X = [],
				re = (0, B.getZone)(i);
			return re && !(0, B.isPlanAtLeast)(re, "pro") && X.push("beta"), X
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			canBeVersioned: !1,
			url: "/zaraz/tools-config"
		}, {
			title: "navigation.zone.zaraz.history",
			canBeVersioned: !1,
			url: "/zaraz/history",
			hasPermission: function(i) {
				return i.zaraz.zarazWorkflow.isRequesting ? !1 : i.zaraz.zarazWorkflow.data === "preview"
			}
		}, {
			title: "navigation.zone.zaraz.monitoring",
			canBeVersioned: !1,
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.consent",
			canBeVersioned: !1,
			url: "/zaraz/consent"
		}, {
			title: "navigation.zone.zaraz.settings",
			canBeVersioned: !1,
			url: "/zaraz/settings"
		}]
	}, {
		title: "navigation.zone.web3",
		url: "/web3",
		canBeVersioned: !1,
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(i) {
			var X = (0, t.getMembership)(i),
				re = (X == null ? void 0 : X.roles) || [];
			return re.includes("Trust and Safety") ? !1 : !(0, f.zoneIsDNSOnly)(i)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "ssl", "ssl.cert")
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
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "waf", "firewall.rule")
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
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "zone_settings", "setting")
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
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(i) {
				return O(i)
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
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(i) {
				return g(i, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(i) {
				return g(i, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(i) {
				return g(i, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(i) {
			return g(i, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(i) {
				return !(0, f.zoneIsDNSOnly)(i)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(i) {
			return !(0, f.zoneIsDNSOnly)(i) && g(i, "zone_settings", "setting")
		}
	}]
}