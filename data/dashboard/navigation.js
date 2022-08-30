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
	}],
	profile: [{
		title: "navigation.profile.preferences",
		url: "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: function(ae) {
			return !!(0, Ee.z1)("oauth-access-management")(ae)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(ae) {
			return !(0, je.n3)() && !(0, Ee.z1)("oauth-access-management")(ae)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(ae) {
			return !(0, Ee.z1)("oauth-access-management")(ae)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(ae) {
			return (0, Ee.z1)("registrar-account-home-copy-experiment")(ae) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(ae) {
				return F(ae)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			labels: ["new"],
			hasPermission: function(ae) {
				return F(ae)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			hasPermission: function(ae) {
				return Se(ae)
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
			hasPermission: function(ae) {
				return G(ae)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics",
			hasPermission: function(ae) {
				return G(ae) && !!(0, L.getAccountFlipperFlag)(ae, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(ae) {
				return G(ae)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(ae) {
				return G(ae) && !!(0, L.getAccountFlipperFlag)(ae, "account_analytics", "carbon_dashboard")
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(ae) {
			return G(ae) && (0, me.dU)(ae)
		}
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(ae) {
			return G(ae) && (!!(0, L.getAccountFlipperFlag)(ae, "calls", "enabled") || !!(0, L.getAccountFlipperFlag)(ae, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(ae) {
			return G(ae)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(ae) {
			return G(ae)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(ae) {
				return !!(0, L.getAccountFlipperFlag)(ae, "workers", "origin_workers") && !!(0, L.getAccountFlipperFlag)(ae, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(ae) {
				return !!(0, L.getAccountFlipperFlag)(ae, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans"
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		labels: ["beta"],
		hasPermission: function(ae) {
			return G(ae)
		}
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/rulesets",
		iconType: "shield",
		hasPermission: function(ae) {
			return G(ae) && !!(se(ae) || B(ae))
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/rulesets",
			hasPermission: function(ae) {
				var Ye = !!K(ae) && !!w(ae);
				return !!x(ae) || Ye
			}
		}, {
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: function(ae) {
				var Ye = !!x(ae) || !!K(ae) && !!w(ae);
				return Ye ? "/rulesets/managed" : "/rulesets"
			},
			hasPermission: function(ae) {
				return !!se(ae)
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/rulesets/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(ae) {
				return !!B(ae)
			}
		}, {
			title: "navigation.account.firewall_rulesets.browse_rulesets",
			url: "/rulesets/custom"
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(ae) {
			return G(ae)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(ae) {
				return j(ae)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(ae) {
				return j(ae)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(ae) {
				return j(ae)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		labels: ["new"],
		hasPermission: function(ae) {
			return G(ae) && !!(0, L.getAccountFlipperFlag)(ae, "cloudflare_images", "early_release_access")
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(ae) {
				return Q(ae)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(ae) {
				return Q(ae)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(ae) {
				return Q(ae)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit/waitlist",
			hasPermission: function(ae) {
				return Q(ae)
			}
		}, {
			title: "navigation.account.images.sourcing_kit_dev",
			url: "/images/sourcing-kit/d",
			labels: ["beta"],
			hasPermission: function(ae) {
				return ne(ae)
			}
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(ae) {
			return G(ae) && (0, Te.sL)(ae)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(ae) {
				return G(ae) && (0, Te.sL)(ae)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(ae) {
				return G(ae) && (0, Te.sL)(ae)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(ae) {
				return G(ae) && (0, Te.TT)(ae)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(ae) {
				return G(ae) && (0, Te.jD)(ae)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(ae) {
				return G(ae) && (0, Te.BU)(ae)
			}
		}]
	}, {
		title: "navigation.account.teams",
		url: "https://dash.teams.cloudflare.com",
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(ae) {
			return G(ae)
		}
	}, {
		title: "navigation.account.ip_prefixes",
		url: "/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		hasPermission: function(ae) {
			return G(ae) && !!(0, L.getAccountFlipperFlag)(ae, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(ae) {
			return G(ae) && !!(0, L.getAccountFlipperFlag)(ae, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(ae) {
			return G(ae) && !!(0, L.getAccountFlipperFlag)(ae, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(ae) {
			return G(ae)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(ae) {
			return G(ae)
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
			hasPermission: function(ae) {
				return G(ae)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(ae) {
				return (0, O.b)(ae) ? G(ae) : (0, L.getPermission)(ae)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(ae) {
				return G(ae)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(ae) {
				return G(ae)
			}
		}]
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview"
	}, {
		title: "navigation.common.analytics",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		hasPermission: function(ae) {
			return R(ae, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			hasPermission: function(ae) {
				return !(0, r.zoneIsDNSOnly)(ae)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			hasPermission: function(ae) {
				return !(0, r.zoneIsDNSOnly)(ae)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			hasPermission: function(ae) {
				return !(0, r.zoneIsDNSOnly)(ae)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			hasPermission: function(ae) {
				var Ye = (0, N.getZone)(ae);
				return Ye ? !!(!(0, r.zoneIsDNSOnly)(ae) && !!(0, N.getZoneFlipperFlag)(ae, "origin_reachability_dash", "dash_view") && (0, N.isPlanAtLeast)(Ye, "enterprise") && !!(0, ie.getZoneGraphQLSettingEnabled)(ae, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			hasPermission: function(ae) {
				var Ye = (0, N.getZone)(ae);
				return Ye ? !!(!(0, r.zoneIsDNSOnly)(ae) && !!(0, N.getZoneFlipperFlag)(ae, "edge_reachability_dash", "dash_view") && (0, N.isPlanAtLeast)(Ye, "enterprise") && !!(0, ie.getZoneGraphQLSettingEnabled)(ae, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			hasPermission: function(ae) {
				return !(0, r.zoneIsDNSOnly)(ae)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			hasPermission: function(ae) {
				return Object.values((0, X.H_)(ae)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			hasPermission: function(ae) {
				return !(0, r.zoneIsDNSOnly)(ae) && !!(0, N.getZoneFlipperFlag)(ae, "logs", "instant_log") && !!(0, r.getZoneEntitlement)(ae, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(ae) {
			return R(ae, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.email",
		url: "/email",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		labels: ["beta"],
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(ae) {
			var Ye = (0, N.getZone)(ae);
			if ((0, r.zoneIsDNSOnly)(ae) || !V(ae, "zone_settings", "spectrum.app") || !Ye) return !1;
			var gt = !!((0, Ce.userHasEntZones)(ae) || (0, N.userHasDelegatedEntZones)(ae)),
				vt = !!(0, N.getZoneFlipperFlag)(ae, "spectrum", "enabled"),
				Et = !!(0, N.isFree)(Ye);
			return vt || gt || !Et
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates"
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			hasPermission: function(ae) {
				return (0, r.hasAccountEntitlement)(ae, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			hasPermission: function(ae) {
				return !!(0, Ee.z1)("client-certificates")(ae) || !!(0, N.getZoneFlipperFlag)(ae, "ssl", "client_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.origin_server",
			url: "/ssl-tls/origin"
		}, {
			title: "navigation.zone.ssl-tls.custom_hostnames",
			url: "/ssl-tls/custom-hostnames"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security",
		iconType: "shield",
		testId: "zone-navigation-link-security",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/security"
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.page_shield",
			url: "/security/page-shield"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(ae) {
				return !!(0, L.getAccountFlipperFlag)(ae, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			hasPermission: function(ae) {
				return (0, r.hasZoneEntitlement)(ae, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			hasPermission: function(ae) {
				var Ye = (0, N.getZone)(ae);
				return Ye ? !!(0, N.getZoneFlipperFlag)(ae, "firewall", "api_shield_tab") && (0, N.isPlanAtLeast)(Ye, "business") : !1
			}
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos"
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings"
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && (V(ae, "access", "access.app") || V(ae, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/speed"
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}, {
			title: "navigation.zone.speed.browser_insights",
			url: "/speed/browser-insights"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/caching"
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(ae) {
				return G(ae)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(ae) {
				return !!re(ae)
			}
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && V(ae, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules"
		}, {
			title: "account.bulk_redirects.title",
			labels: ["beta", "absolute"],
			url: function(ae) {
				var Ye = (0, L.getAccount)(ae);
				return "/".concat(Ye == null ? void 0 : Ye.id, "/bulk-redirects")
			},
			hasPermission: function(ae) {
				return G(ae)
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(ae) {
				return !!(0, N.getZoneFlipperFlag)(ae, "page_rules", "normalization") && R(ae, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		hasPermission: function(ae) {
			return R(ae, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(ae) {
				return !(0, r.zoneIsDNSOnly)(ae)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			hasPermission: function(ae) {
				return !(0, r.zoneIsDNSOnly)(ae)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			hasPermission: function(ae) {
				return G(ae)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			hasPermission: function(ae) {
				return G(ae)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			hasPermission: function(ae) {
				return !(0, r.zoneIsDNSOnly)(ae)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			hasPermission: function(ae) {
				return !(0, r.zoneIsDNSOnly)(ae) && !!(0, ie.getZoneGraphQLSettingEnabled)(ae, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			hasPermission: function(ae) {
				return !(0, r.zoneIsDNSOnly)(ae) && ((0, r.hasZoneEntitlement)(ae, "waiting_rooms.allowed") || !!(0, N.getZoneFlipperFlag)(ae, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		labels: function(ae) {
			var Ye = [],
				gt = (0, N.getZone)(ae);
			return gt && !(0, N.isPlanAtLeast)(gt, "pro") && Ye.push("beta"), Ye
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools",
			url: "/zaraz"
		}, {
			title: "navigation.zone.zaraz.triggers",
			url: "/zaraz/triggers"
		}, {
			title: "navigation.zone.zaraz.consent",
			hasPermission: function() {
				return !1
			},
			url: "/zaraz/consent"
		}, {
			title: "navigation.zone.zaraz.settings",
			url: "/zaraz/settings"
		}]
	}, {
		title: "navigation.zone.web3",
		url: "/web3",
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "ssl", "ssl.cert")
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
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(ae) {
				return !!(0, L.getAccountFlipperFlag)(ae, "bots", "paygo")
			}
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
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(ae) {
				return G(ae)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(ae) {
				return R(ae, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(ae) {
				return !!(0, N.getZoneFlipperFlag)(ae, "page_rules", "normalization") && R(ae, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(ae) {
			return R(ae, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(ae) {
				return !(0, r.zoneIsDNSOnly)(ae)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(ae) {
			return !(0, r.zoneIsDNSOnly)(ae) && R(ae, "zone_settings", "setting")
		}
	}]
}