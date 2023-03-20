(() => {
	var e = {
			343: e => {
				"use strict";
				for (var n = [], t = 0; t < 256; ++t) n[t] = (t + 256).toString(16).substr(1);
				e.exports = function(e, t) {
					var r = t || 0,
						i = n;
					return [i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]]].join("")
				}
			},
			944: e => {
				"use strict";
				var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
				if (n) {
					var t = new Uint8Array(16);
					e.exports = function() {
						return n(t), t
					}
				} else {
					var r = new Array(16);
					e.exports = function() {
						for (var e, n = 0; n < 16; n++) 0 == (3 & n) && (e = 4294967296 * Math.random()), r[n] = e >>> ((3 & n) << 3) & 255;
						return r
					}
				}
			},
			508: (e, n, t) => {
				"use strict";
				var r = t(944),
					i = t(343);
				e.exports = function(e, n, t) {
					var o = n && t || 0;
					"string" == typeof e && (n = "binary" === e ? new Array(16) : null, e = null);
					var a = (e = e || {}).random || (e.rng || r)();
					if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, n)
						for (var c = 0; c < 16; ++c) n[o + c] = a[c];
					return n || i(a)
				}
			},
			168: function(e, n, t) {
				"use strict";
				var r = this && this.__assign || function() {
					return r = Object.assign || function(e) {
						for (var n, t = 1, r = arguments.length; t < r; t++)
							for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
						return e
					}, r.apply(this, arguments)
				};
				n.__esModule = !0;
				var i = t(699),
					o = t(752),
					a = t(511),
					c = t(508);
				! function() {
					function e(e) {
						var n = "";
						if (n = window.location.origin ? window.location.origin : "".concat(window.location.protocol, "://").concat(window.location.host), e && "string" == typeof e)
							if (0 === e.indexOf("/")) n += e;
							else try {
								var t = new URL(e);
								return "".concat(t.protocol, "://").concat(t.host).concat(t.pathname)
							} catch (e) {} else {
								var r = window.location.pathname;
								r && r.length > 0 && (n += r)
							}
						return n
					}

					function n(e) {
						return null == e ? void 0 : Math.round(1e3 * e) / 1e3
					}

					function t(e, n) {
						for (var t in e) {
							var r = e[t];
							void 0 !== n && ("number" == typeof r || "string" == typeof r ? n[t] = r : Array.isArray(r) && (n[t] = JSON.parse(JSON.stringify(r))))
						}
					}! function() {
						var s, u, f = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
							d = "data-cf-beacon",
							l = document.currentScript || ("function" == typeof document.querySelector ? document.querySelector("script[".concat(d, "]")) : void 0),
							p = c(),
							v = [],
							m = window.__cfBeacon ? window.__cfBeacon : {};
						if (m && "single" === m.load) return;
						if (l) {
							var g = l.getAttribute(d);
							if (g) try {
								m = r(r({}, m), JSON.parse(g))
							} catch (e) {} else {
								var y = l.getAttribute("src");
								if (y && "function" == typeof URLSearchParams) {
									var h = new URLSearchParams(y.replace(/^[^\?]+\??/, "")),
										w = h.get("token");
									w && (m.token = w);
									var T = h.get("spa");
									m.spa = null === T || "true" === T
								}
							}
							m && "multi" !== m.load && (m.load = "single"), window.__cfBeacon = m
						}
						if (!f || !m || !m.token) return;
						var E, b = !1;
						document.addEventListener("visibilitychange", (function() {
							if ("hidden" === document.visibilityState) {
								if (R && A()) {
									var n = e();
									(null == E ? void 0 : E.url) == n && (null == E ? void 0 : E.triggered) || B(), I(n)
								}!b && E && (b = !0, _())
							} else "visible" === document.visibilityState && (new Date).getTime()
						}));
						var S = {},
							C = function(e) {
								if (!e) return "";
								var n = e.localName;
								return e.id && e.id.length > 0 && (n += "#".concat(e.id)), e.className && e.className.length > 0 && (n += ".".concat(e.className.split(" ").join("."))), n
							},
							L = function(e) {
								var n, t = window.location.pathname,
									r = (n = e.entries) && 0 !== n.length ? n[n.length - 1] : null;
								switch (S[e.name.toLowerCase()] = {
										value: e.value,
										path: t
									}, e.name) {
									case "CLS":
										r = function(e) {
											if (!e || 0 === e.length) return null;
											var n = e.reduce((function(e, n) {
												return e && e.value > n.value ? e : n
											}));
											if (n && n.sources && n.sources.length) {
												var t = n.sources.reduce((function(e, n) {
													return e.node && e.previousRect.width * e.previousRect.height > n.previousRect.width * n.previousRect.height ? e : n
												}));
												if (t) return t
											}
										}(e.entries), r && S.cls && (S.cls.element = C(r.node), S.cls.currentRect = r.currentRect, S.cls.previousRect = r.previousRect);
										break;
									case "FID":
										r && S.fid && (S.fid.element = C(r.target), S.fid.name = r.name);
										break;
									case "LCP":
										r && S.lcp && (S.lcp.element = C(r.element), S.lcp.size = r.size, S.lcp.url = r.url)
								}
							};
						"function" == typeof PerformanceObserver && ((0, a.onLCP)(L), (0, a.onFID)(L), (0, a.onFCP)(L), (0, a.onINP)(L), (0, a.onTTFB)(L), PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("layout-shift") && (0, a.onCLS)(L));
						var R = m && (void 0 === m.spa || !0 === m.spa),
							P = m.send && m.send.to ? m.send.to : void 0 === m.version ? "https://cloudflareinsights.com/cdn-cgi/rum" : null,
							B = function(r) {
								var a = function(e, n) {
										c.resources = e, 0 != n && (c.bypassTiming = !0), m && (1 === m.r && (c.resources = []), (0, o.sendObjectBeacon)("", c, (function() {}), !1, P), void 0 !== m.forward && void 0 !== m.forward.url && (0, o.sendObjectBeacon)("", c, (function() {}), !1, m.forward.url))
									},
									c = function(r) {
										var o, a = 1,
											c = f.timing,
											u = f.memory,
											d = r || e(),
											l = {
												memory: {},
												timings: {},
												resources: [],
												tempResources: [],
												referrer: x(),
												errorCount: 0,
												eventType: i.EventType.Load,
												firstPaint: 0,
												firstContentfulPaint: 0,
												si: m ? m.si : 0,
												startTime: k(),
												versions: {
													fl: m ? m.version : "",
													js: "2023.3.0",
													timings: a
												},
												pageloadId: p,
												location: d,
												wd: N(),
												b: m.b
											};
										if (null == s) {
											if ("function" == typeof f.getEntriesByType) {
												var v = f.getEntriesByType("navigation");
												if (v && Array.isArray(v) && v.length > 0) l.timingsV2 = {}, l.versions.timings = 2, delete l.timings, t(v[0], l.timingsV2)
											}
											if (1 === l.versions.timings) t(c, l.timings);
											t(u, l.memory)
										} else F(l);
										l.firstPaint = M("first-paint"), l.firstContentfulPaint = M("first-contentful-paint"), l.errorCount = window.__cfErrCount || 0, m && (m.icTag && (l.icTag = m.icTag), l.siteToken = m.token);
										if ("function" == typeof f.getEntriesByType) {
											var g = null !== (o = f.getEntriesByType("resource")) && void 0 !== o ? o : [],
												y = 0,
												h = 0;
											g.forEach((function(e) {
												var t = {
													n: e.name,
													s: n(e.startTime),
													d: n(e.duration),
													i: e.initiatorType,
													p: e.nextHopProtocol,
													rs: n(e.redirectStart),
													re: n(e.redirectEnd),
													fs: n(e.fetchStart),
													ds: n(e.domainLookupStart),
													de: n(e.domainLookupEnd),
													cs: n(e.connectStart),
													ce: n(e.connectEnd),
													qs: n(e.requestStart),
													ps: n(e.responseStart),
													pe: n(e.responseEnd),
													ws: n(e.workerStart),
													ss: n(e.secureConnectionStart),
													ts: e.transferSize,
													ec: e.encodedBodySize,
													dc: e.decodedBodySize
												};
												l.tempResources && void 0 === l.tempResources[h] && (l.tempResources[h] = []);
												var r = JSON.stringify(t).length;
												y + r < 62e3 && l.tempResources ? (y += r, l.tempResources[h].push(t)) : (h++, y = 0)
											}))
										}
										JSON.stringify(l).length >= 64e3 && (l.resources = []);
										void 0 !== s && (delete l.timings, delete l.memory, delete l.errorCount);
										return l
									}(r);
								if (c && m) {
									var u = c.tempResources;
									if (delete c.tempResources, R && u && 0 === u.length && a([], 0), !u) return;
									u.forEach((function(e, n) {
										a(e, n)
									}))
								}
							},
							_ = function() {
								var n = function() {
									var n = f.getEntriesByType("navigation")[0],
										t = "";
									try {
										t = "function" == typeof f.getEntriesByType ? new URL(null == n ? void 0 : n.name).pathname : u ? new URL(u).pathname : window.location.pathname
									} catch (e) {}
									var r = {
										referrer: document.referrer || "",
										eventType: i.EventType.WebVitalsV2,
										si: m ? m.si : 0,
										versions: {
											js: "2023.3.0"
										},
										pageloadId: p,
										location: e(),
										landingPath: t,
										startTime: k(),
										wd: N(),
										b: m.b
									};
									m && (m.version && (r.versions.fl = m.version), m.icTag && (r.icTag = m.icTag), r.siteToken = m.token);
									S && ["lcp", "fid", "cls", "fcp", "ttfb", "inp"].forEach((function(e) {
										r[e] = {
											value: -1,
											path: void 0
										}, S[e] && void 0 !== S[e].value && (r[e] = S[e])
									}));
									return F(r), r
								}();
								R || (n.resources = [], delete n.tempResources), m && (0, o.sendObjectBeacon)("", n, (function() {}), !0, P)
							},
							O = function() {
								var n = window.__cfRl && window.__cfRl.done || window.__cfQR && window.__cfQR.done;
								n ? n.then(B) : B(), E = {
									id: p,
									url: e(),
									ts: (new Date).getTime(),
									triggered: !0
								}
							};
						"complete" === window.document.readyState ? O() : window.addEventListener("load", (function() {
							window.setTimeout(O)
						}));
						var A = function() {
								return R && 0 === v.filter((function(e) {
									return e.id === p
								})).length
							},
							I = function(e) {
								v.push({
									id: p,
									url: e,
									ts: (new Date).getTime()
								}), v.length > 3 && v.shift()
							};
						R && (u = e(), function(n) {
							var t = n.pushState;
							if (t) {
								var r = function() {
									p = c(), "function" == typeof f.clearResourceTimings && f.clearResourceTimings(), 0
								};
								n.pushState = function(i, o, a) {
									s = e(a);
									var c = e(),
										u = !0;
									return s == c && (u = !1), u && (A() && ((null == E ? void 0 : E.url) == c && (null == E ? void 0 : E.triggered) || B(c), I(c)), r()), t.apply(n, [i, o, a])
								}, window.addEventListener("popstate", (function(n) {
									A() && ((null == E ? void 0 : E.url) == s && (null == E ? void 0 : E.triggered) || B(s), I(s)), s = e(), r()
								}))
							}
						}(window.history));

						function k() {
							return f.timeOrigin
						}

						function x() {
							var e = document.referrer || "",
								n = v[v.length - 1];
							return R && E && n ? n.url : e
						}

						function N() {
							return navigator.webdriver
						}

						function F(e) {
							if ("function" == typeof f.getEntriesByType) {
								var n = f.getEntriesByType("navigation"),
									r = {};
								e.timingsV2 = {}, n && n[0] && n[0].nextHopProtocol && (r.nextHopProtocol = n[0].nextHopProtocol), t(r, e.timingsV2)
							}
						}

						function M(e) {
							var n;
							if ("first-contentful-paint" === e && S.fcp && S.fcp.value) return S.fcp.value;
							if ("function" == typeof f.getEntriesByType) {
								var t = null === (n = f.getEntriesByType("paint")) || void 0 === n ? void 0 : n.filter((function(n) {
									return n.name === e
								}))[0];
								return t ? t.startTime : 0
							}
							return 0
						}
					}()
				}()
			},
			752: (e, n) => {
				"use strict";
				n.__esModule = !0, n.sendObjectBeacon = void 0, n.sendObjectBeacon = function(e, n, t, r, i) {
					void 0 === r && (r = !1), void 0 === i && (i = null);
					var o = i || (n.siteToken && n.versions.fl ? "/cdn-cgi/rum?".concat(e) : "/cdn-cgi/beacon/performance?".concat(e)),
						a = !0;
					if (navigator && "string" == typeof navigator.userAgent) try {
						var c = navigator.userAgent.match(/Chrome\/([0-9]+)/);
						c && c[0].toLowerCase().indexOf("chrome") > -1 && parseInt(c[1]) < 81 && (a = !1)
					} catch (e) {}
					if (navigator && "function" == typeof navigator.sendBeacon && a && r) {
						n.st = 1;
						var s = JSON.stringify(n);
						navigator.sendBeacon(o, new Blob([s], {
							type: "application/json"
						}))
					} else {
						n.st = 2;
						s = JSON.stringify(n);
						var u = new XMLHttpRequest;
						t && (u.onreadystatechange = function() {
							4 == this.readyState && 204 == this.status && t()
						}), u.open("POST", o, !0), u.setRequestHeader("content-type", "application/json"), u.send(s)
					}
				}
			},
			699: (e, n) => {
				"use strict";
				n.__esModule = !0, n.EventType = void 0,
					function(e) {
						e[e.Load = 1] = "Load", e[e.Additional = 2] = "Additional", e[e.WebVitalsV2 = 3] = "WebVitalsV2"
					}(n.EventType || (n.EventType = {}))
			},
			511: function(e, n) {
				! function(e) {
					"use strict";
					var n, t, r, i, o, a = -1,
						c = function(e) {
							addEventListener("pageshow", (function(n) {
								n.persisted && (a = n.timeStamp, e(n))
							}), !0)
						},
						s = function() {
							return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
						},
						u = function() {
							var e = s();
							return e && e.activationStart || 0
						},
						f = function(e, n) {
							var t = s(),
								r = "navigate";
							return a >= 0 ? r = "back-forward-cache" : t && (r = document.prerendering || u() > 0 ? "prerender" : document.wasDiscarded ? "restore" : t.type.replace(/_/g, "-")), {
								name: e,
								value: void 0 === n ? -1 : n,
								rating: "good",
								delta: 0,
								entries: [],
								id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
								navigationType: r
							}
						},
						d = function(e, n, t) {
							try {
								if (PerformanceObserver.supportedEntryTypes.includes(e)) {
									var r = new PerformanceObserver((function(e) {
										Promise.resolve().then((function() {
											n(e.getEntries())
										}))
									}));
									return r.observe(Object.assign({
										type: e,
										buffered: !0
									}, t || {})), r
								}
							} catch (e) {}
						},
						l = function(e, n, t, r) {
							var i, o;
							return function(a) {
								n.value >= 0 && (a || r) && ((o = n.value - (i || 0)) || void 0 === i) && (i = n.value, n.delta = o, n.rating = function(e, n) {
									return e > n[1] ? "poor" : e > n[0] ? "needs-improvement" : "good"
								}(n.value, t), e(n))
							}
						},
						p = function(e) {
							requestAnimationFrame((function() {
								return requestAnimationFrame((function() {
									return e()
								}))
							}))
						},
						v = function(e) {
							var n = function(n) {
								"pagehide" !== n.type && "hidden" !== document.visibilityState || e(n)
							};
							addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
						},
						m = function(e) {
							var n = !1;
							return function(t) {
								n || (e(t), n = !0)
							}
						},
						g = -1,
						y = function() {
							return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
						},
						h = function(e) {
							"hidden" === document.visibilityState && g > -1 && (g = "visibilitychange" === e.type ? e.timeStamp : 0, T())
						},
						w = function() {
							addEventListener("visibilitychange", h, !0), addEventListener("prerenderingchange", h, !0)
						},
						T = function() {
							removeEventListener("visibilitychange", h, !0), removeEventListener("prerenderingchange", h, !0)
						},
						E = function() {
							return g < 0 && (g = y(), w(), c((function() {
								setTimeout((function() {
									g = y(), w()
								}), 0)
							}))), {
								get firstHiddenTime() {
									return g
								}
							}
						},
						b = function(e) {
							document.prerendering ? addEventListener("prerenderingchange", (function() {
								return e()
							}), !0) : e()
						},
						S = function(e, n) {
							n = n || {}, b((function() {
								var t, r = [1800, 3e3],
									i = E(),
									o = f("FCP"),
									a = d("paint", (function(e) {
										e.forEach((function(e) {
											"first-contentful-paint" === e.name && (a.disconnect(), e.startTime < i.firstHiddenTime && (o.value = Math.max(e.startTime - u(), 0), o.entries.push(e), t(!0)))
										}))
									}));
								a && (t = l(e, o, r, n.reportAllChanges), c((function(i) {
									o = f("FCP"), t = l(e, o, r, n.reportAllChanges), p((function() {
										o.value = performance.now() - i.timeStamp, t(!0)
									}))
								})))
							}))
						},
						C = function(e, n) {
							n = n || {}, S(m((function() {
								var t, r = [.1, .25],
									i = f("CLS", 0),
									o = 0,
									a = [],
									s = function(e) {
										e.forEach((function(e) {
											if (!e.hadRecentInput) {
												var n = a[0],
													t = a[a.length - 1];
												o && e.startTime - t.startTime < 1e3 && e.startTime - n.startTime < 5e3 ? (o += e.value, a.push(e)) : (o = e.value, a = [e])
											}
										})), o > i.value && (i.value = o, i.entries = a, t())
									},
									u = d("layout-shift", s);
								u && (t = l(e, i, r, n.reportAllChanges), v((function() {
									s(u.takeRecords()), t(!0)
								})), c((function() {
									o = 0, i = f("CLS", 0), t = l(e, i, r, n.reportAllChanges), p((function() {
										return t()
									}))
								})), setTimeout(t, 0))
							})))
						},
						L = {
							passive: !0,
							capture: !0
						},
						R = new Date,
						P = function(e, i) {
							n || (n = i, t = e, r = new Date, O(removeEventListener), B())
						},
						B = function() {
							if (t >= 0 && t < r - R) {
								var e = {
									entryType: "first-input",
									name: n.type,
									target: n.target,
									cancelable: n.cancelable,
									startTime: n.timeStamp,
									processingStart: n.timeStamp + t
								};
								i.forEach((function(n) {
									n(e)
								})), i = []
							}
						},
						_ = function(e) {
							if (e.cancelable) {
								var n = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
								"pointerdown" == e.type ? function(e, n) {
									var t = function() {
											P(e, n), i()
										},
										r = function() {
											i()
										},
										i = function() {
											removeEventListener("pointerup", t, L), removeEventListener("pointercancel", r, L)
										};
									addEventListener("pointerup", t, L), addEventListener("pointercancel", r, L)
								}(n, e) : P(n, e)
							}
						},
						O = function(e) {
							["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(n) {
								return e(n, _, L)
							}))
						},
						A = function(e, r) {
							r = r || {}, b((function() {
								var o, a = [100, 300],
									s = E(),
									u = f("FID"),
									p = function(e) {
										e.startTime < s.firstHiddenTime && (u.value = e.processingStart - e.startTime, u.entries.push(e), o(!0))
									},
									g = function(e) {
										e.forEach(p)
									},
									y = d("first-input", g);
								o = l(e, u, a, r.reportAllChanges), y && v(m((function() {
									g(y.takeRecords()), y.disconnect()
								}))), y && c((function() {
									var c;
									u = f("FID"), o = l(e, u, a, r.reportAllChanges), i = [], t = -1, n = null, O(addEventListener), c = p, i.push(c), B()
								}))
							}))
						},
						I = 0,
						k = 1 / 0,
						x = 0,
						N = function(e) {
							e.forEach((function(e) {
								e.interactionId && (k = Math.min(k, e.interactionId), x = Math.max(x, e.interactionId), I = x ? (x - k) / 7 + 1 : 0)
							}))
						},
						F = function() {
							return o ? I : performance.interactionCount || 0
						},
						M = function() {
							"interactionCount" in performance || o || (o = d("event", N, {
								type: "event",
								buffered: !0,
								durationThreshold: 0
							}))
						},
						V = 0,
						j = function() {
							return F() - V
						},
						D = [],
						H = {},
						J = function(e) {
							var n = D[D.length - 1],
								t = H[e.interactionId];
							if (t || D.length < 10 || e.duration > n.latency) {
								if (t) t.entries.push(e), t.latency = Math.max(t.latency, e.duration);
								else {
									var r = {
										id: e.interactionId,
										latency: e.duration,
										entries: [e]
									};
									H[r.id] = r, D.push(r)
								}
								D.sort((function(e, n) {
									return n.latency - e.latency
								})), D.splice(10).forEach((function(e) {
									delete H[e.id]
								}))
							}
						},
						q = function(e, n) {
							n = n || {}, b((function() {
								var t = [200, 500];
								M();
								var r, i = f("INP"),
									o = function(e) {
										e.forEach((function(e) {
											e.interactionId && J(e), "first-input" === e.entryType && !D.some((function(n) {
												return n.entries.some((function(n) {
													return e.duration === n.duration && e.startTime === n.startTime
												}))
											})) && J(e)
										}));
										var n, t = (n = Math.min(D.length - 1, Math.floor(j() / 50)), D[n]);
										t && t.latency !== i.value && (i.value = t.latency, i.entries = t.entries, r())
									},
									a = d("event", o, {
										durationThreshold: n.durationThreshold || 40
									});
								r = l(e, i, t, n.reportAllChanges), a && (a.observe({
									type: "first-input",
									buffered: !0
								}), v((function() {
									o(a.takeRecords()), i.value < 0 && j() > 0 && (i.value = 0, i.entries = []), r(!0)
								})), c((function() {
									D = [], V = F(), i = f("INP"), r = l(e, i, t, n.reportAllChanges)
								})))
							}))
						},
						z = {},
						U = function(e, n) {
							n = n || {}, b((function() {
								var t, r = [2500, 4e3],
									i = E(),
									o = f("LCP"),
									a = function(e) {
										var n = e[e.length - 1];
										if (n) {
											var r = Math.max(n.startTime - u(), 0);
											r < i.firstHiddenTime && (o.value = r, o.entries = [n], t())
										}
									},
									s = d("largest-contentful-paint", a);
								if (s) {
									t = l(e, o, r, n.reportAllChanges);
									var g = m((function() {
										z[o.id] || (a(s.takeRecords()), s.disconnect(), z[o.id] = !0, t(!0))
									}));
									["keydown", "click"].forEach((function(e) {
										addEventListener(e, g, !0)
									})), v(g), c((function(i) {
										o = f("LCP"), t = l(e, o, r, n.reportAllChanges), p((function() {
											o.value = performance.now() - i.timeStamp, z[o.id] = !0, t(!0)
										}))
									}))
								}
							}))
						},
						W = function e(n) {
							document.prerendering ? b((function() {
								return e(n)
							})) : "complete" !== document.readyState ? addEventListener("load", (function() {
								return e(n)
							}), !0) : setTimeout(n, 0)
						},
						Q = function(e, n) {
							n = n || {};
							var t = [800, 1800],
								r = f("TTFB"),
								i = l(e, r, t, n.reportAllChanges);
							W((function() {
								var o = s();
								if (o) {
									var a = o.responseStart;
									if (a <= 0 || a > performance.now()) return;
									r.value = Math.max(a - u(), 0), r.entries = [o], i(!0), c((function() {
										r = f("TTFB", 0), (i = l(e, r, t, n.reportAllChanges))(!0)
									}))
								}
							}))
						};
					e.getCLS = C, e.getFCP = S, e.getFID = A, e.getINP = q, e.getLCP = U, e.getTTFB = Q, e.onCLS = C, e.onFCP = S, e.onFID = A, e.onINP = q, e.onLCP = U, e.onTTFB = Q, Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}(n)
			}
		},
		n = {};
	(function t(r) {
		var i = n[r];
		if (void 0 !== i) return i.exports;
		var o = n[r] = {
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, t), o.exports
	})(168)
})();
//# sourceMappingURL=performance.min.js.map