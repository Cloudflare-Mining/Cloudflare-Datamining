(() => {
	var t = {
			173: function(t, e) {
				! function(t) {
					"use strict";
					class e {
						t;
						o = 0;
						i = [];
						u(t) {
							if (t.hadRecentInput) return;
							const e = this.i[0],
								n = this.i.at(-1);
							this.o && e && n && t.startTime - n.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (this.o += t.value, this.i.push(t)) : (this.o = t.value, this.i = [t]), this.t?.(t)
						}
					}
					const n = () => {
							const t = performance.getEntriesByType("navigation")[0];
							if (t && t.responseStart > 0 && t.responseStart < performance.now()) return t
						},
						r = t => {
							if ("loading" === document.readyState) return "loading";
							const e = n();
							if (e) {
								if (t < e.domInteractive) return "loading";
								if (0 === e.domContentLoadedEventStart || t < e.domContentLoadedEventStart) return "dom-interactive";
								if (0 === e.domComplete || t < e.domComplete) return "dom-content-loaded"
							}
							return "complete"
						},
						i = t => {
							const e = t.nodeName;
							return 1 === t.nodeType ? e.toLowerCase() : e.toUpperCase().replace(/^#/, "")
						},
						o = t => {
							let e = "";
							try {
								for (; 9 !== t?.nodeType;) {
									const n = t,
										r = n.id ? "#" + n.id : [i(n), ...Array.from(n.classList).sort()].join(".");
									if (e.length + r.length > 99) return e || r;
									if (e = e ? r + ">" + e : r, n.id) break;
									t = n.parentNode
								}
							} catch {}
							return e
						},
						s = new WeakMap;

					function a(t, e) {
						let n = s.get(e);
						return n || (n = new WeakMap, s.set(e, n)), n.get(t) || n.set(t, new e), n.get(t)
					}
					let c = -1;
					const l = () => c,
						u = t => {
							addEventListener("pageshow", e => {
								e.persisted && (c = e.timeStamp, t(e))
							}, !0)
						},
						d = (t, e, n, r) => {
							let i, o;
							return s => {
								e.value >= 0 && (s || r) && (o = e.value - (i ?? 0), (o || void 0 === i) && (i = e.value, e.delta = o, e.rating = ((t, e) => t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good")(e.value, n), t(e)))
							}
						},
						f = t => {
							requestAnimationFrame(() => requestAnimationFrame(t))
						},
						p = () => n()?.activationStart ?? 0,
						g = (t, e = -1) => {
							const r = n();
							let i = "navigate";
							return l() >= 0 ? i = "back-forward-cache" : r && (document.prerendering || p() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : r.type && (i = r.type.replace(/_/g, "-"))), {
								name: t,
								value: e,
								rating: "good",
								delta: 0,
								entries: [],
								id: `v5-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
								navigationType: i
							}
						},
						m = (t, e, n = {}) => {
							try {
								if (PerformanceObserver.supportedEntryTypes.includes(t)) {
									const r = new PerformanceObserver(t => {
										queueMicrotask(() => {
											e(t.getEntries())
										})
									});
									return r.observe({
										type: t,
										buffered: !0,
										...n
									}), r
								}
							} catch {}
						},
						v = t => {
							let e = !1;
							return () => {
								e || (t(), e = !0)
							}
						};
					let h = -1;
					const y = new Set,
						T = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
						w = t => {
							if ("hidden" === document.visibilityState) {
								if ("visibilitychange" === t.type)
									for (const t of y) t();
								isFinite(h) || (h = "visibilitychange" === t.type ? t.timeStamp : 0, removeEventListener("prerenderingchange", w, !0))
							}
						},
						b = () => {
							if (h < 0) {
								const t = p(),
									e = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find(e => "hidden" === e.name && e.startTime >= t)?.startTime;
								h = e ?? T(), addEventListener("visibilitychange", w, !0), addEventListener("prerenderingchange", w, !0), u(() => {
									setTimeout(() => {
										h = T()
									})
								})
							}
							return {
								get firstHiddenTime() {
									return h
								},
								onHidden(t) {
									y.add(t)
								}
							}
						},
						S = t => {
							document.prerendering ? addEventListener("prerenderingchange", t, !0) : t()
						},
						E = [1800, 3e3],
						L = (t, e = {}) => {
							S(() => {
								const n = b();
								let r, i = g("FCP");
								const o = m("paint", t => {
									for (const e of t) "first-contentful-paint" === e.name && (o.disconnect(), e.startTime < n.firstHiddenTime && (i.value = Math.max(e.startTime - p(), 0), i.entries.push(e), r(!0)))
								});
								o && (r = d(t, i, E, e.reportAllChanges), u(n => {
									i = g("FCP"), r = d(t, i, E, e.reportAllChanges), f(() => {
										i.value = performance.now() - n.timeStamp, r(!0)
									})
								}))
							})
						},
						D = [.1, .25],
						A = t => t.find(t => 1 === t.node?.nodeType) || t[0];
					let P = 0,
						C = 1 / 0,
						U = 0;
					const I = t => {
						for (const e of t) e.interactionId && (C = Math.min(C, e.interactionId), U = Math.max(U, e.interactionId), P = U ? (U - C) / 7 + 1 : 0)
					};
					let M;
					const O = () => M ? P : performance.interactionCount ?? 0;
					let k = 0;
					class R {
						l = [];
						h = new Map;
						p;
						m;
						v() {
							k = O(), this.l.length = 0, this.h.clear()
						}
						M() {
							const t = Math.min(this.l.length - 1, Math.floor((O() - k) / 50));
							return this.l[t]
						}
						u(t) {
							if (this.p?.(t), !t.interactionId && "first-input" !== t.entryType) return;
							const e = this.l.at(-1);
							let n = this.h.get(t.interactionId);
							if (n || this.l.length < 10 || t.duration > e.T) {
								if (n ? t.duration > n.T ? (n.entries = [t], n.T = t.duration) : t.duration === n.T && t.startTime === n.entries[0].startTime && n.entries.push(t) : (n = {
										id: t.interactionId,
										entries: [t],
										T: t.duration
									}, this.h.set(n.id, n), this.l.push(n)), this.l.sort((t, e) => e.T - t.T), this.l.length > 10) {
									const t = this.l.splice(10);
									for (const e of t) this.h.delete(e.id)
								}
								this.m?.(n)
							}
						}
					}
					const B = t => {
							const e = globalThis.requestIdleCallback || setTimeout,
								n = globalThis.cancelIdleCallback || clearTimeout;
							if ("hidden" === document.visibilityState) t();
							else {
								const r = v(t);
								let i = -1;
								const o = () => {
									n(i), r()
								};
								addEventListener("visibilitychange", o, {
									once: !0,
									capture: !0
								}), i = e(() => {
									removeEventListener("visibilitychange", o, {
										capture: !0
									}), r()
								})
							}
						},
						j = [200, 500];
					class _ {
						p;
						u(t) {
							this.p?.(t)
						}
					}
					const x = [2500, 4e3],
						F = [800, 1800],
						q = t => {
							document.prerendering ? S(() => q(t)) : "complete" !== document.readyState ? addEventListener("load", () => q(t), !0) : setTimeout(t)
						};
					t.CLSThresholds = D, t.FCPThresholds = E, t.INPThresholds = j, t.LCPThresholds = x, t.TTFBThresholds = F, t.onCLS = (t, n = {}) => {
						const i = a(n = Object.assign({}, n), e),
							s = new WeakMap;
						i.t = t => {
							if (t?.sources?.length) {
								const e = A(t.sources),
									r = e?.node;
								if (r) {
									const t = n.generateTarget?.(r) ?? o(r);
									s.set(e, t)
								}
							}
						}, ((t, n = {}) => {
							const r = b();
							L(v(() => {
								let i, o = g("CLS", 0);
								const s = a(n, e),
									c = t => {
										for (const e of t) s.u(e);
										s.o > o.value && (o.value = s.o, o.entries = s.i, i())
									},
									l = m("layout-shift", c);
								l && (i = d(t, o, D, n.reportAllChanges), r.onHidden(() => {
									c(l.takeRecords()), i(!0)
								}), u(() => {
									s.o = 0, o = g("CLS", 0), i = d(t, o, D, n.reportAllChanges), f(i)
								}), setTimeout(i))
							}))
						})(e => {
							t((t => {
								let e = {};
								if (t.entries.length) {
									const n = t.entries.reduce((t, e) => t.value > e.value ? t : e);
									if (n?.sources?.length) {
										const t = A(n.sources);
										t && (e = {
											largestShiftTarget: s.get(t),
											largestShiftTime: n.startTime,
											largestShiftValue: n.value,
											largestShiftSource: t,
											largestShiftEntry: n,
											loadState: r(n.startTime)
										})
									}
								}
								return Object.assign(t, {
									attribution: e
								})
							})(e))
						}, n)
					}, t.onFCP = (t, e = {}) => {
						L(e => {
							t((t => {
								let e = {
									timeToFirstByte: 0,
									firstByteToFCP: t.value,
									loadState: r(l())
								};
								if (t.entries.length) {
									const i = n(),
										o = t.entries.at(-1);
									if (i) {
										const n = i.activationStart || 0,
											s = Math.max(0, i.responseStart - n);
										e = {
											timeToFirstByte: s,
											firstByteToFCP: t.value - s,
											loadState: r(t.entries[0].startTime),
											navigationEntry: i,
											fcpEntry: o
										}
									}
								}
								return Object.assign(t, {
									attribution: e
								})
							})(e))
						}, e)
					}, t.onINP = (t, e = {}) => {
						const n = a(e = Object.assign({}, e), R);
						let i = [],
							s = [],
							c = 0;
						const l = new WeakMap,
							f = new WeakMap;
						let p = !1;
						const v = () => {
								p || (B(h), p = !0)
							},
							h = () => {
								const t = new Set(n.l.map(t => l.get(t.entries[0]))),
									e = s.length - 10;
								s = s.filter((n, r) => r >= e || t.has(n));
								const r = new Set;
								for (const t of s) {
									const e = y(t.startTime, t.processingEnd);
									for (const t of e) r.add(t)
								}
								i = i.filter(t => t.startTime > c || r.has(t)), p = !1
							};
						n.p = t => {
							const n = t.startTime + t.duration;
							let r;
							c = Math.max(c, t.processingEnd);
							for (let i = s.length - 1; i >= 0; i--) {
								const o = s[i];
								if (Math.abs(n - o.renderTime) <= 8) {
									r = o, r.startTime = Math.min(t.startTime, r.startTime), r.processingStart = Math.min(t.processingStart, r.processingStart), r.processingEnd = Math.max(t.processingEnd, r.processingEnd), !1 !== e.includeProcessedEventEntries && r.entries.push(t);
									break
								}
							}
							r || (r = {
								startTime: t.startTime,
								processingStart: t.processingStart,
								processingEnd: t.processingEnd,
								renderTime: n,
								entries: !1 !== e.includeProcessedEventEntries ? [t] : []
							}, s.push(r)), (t.interactionId || "first-input" === t.entryType) && l.set(t, r), v()
						}, n.m = t => {
							if (!f.get(t)) {
								const n = t.entries.find(t => t.target)?.target;
								if (n) {
									const r = e.generateTarget?.(n) ?? o(n);
									f.set(t, r)
								} else {
									const e = t.entries.find(t => t.targetSelector)?.targetSelector;
									e && f.set(t, e)
								}
							}
						};
						const y = (t, e) => {
							const n = [];
							for (const r of i)
								if (!(r.startTime + r.duration < t)) {
									if (r.startTime > e) break;
									n.push(r)
								} return n
						};
						m("long-animation-frame", t => {
							i = i.concat(t), v()
						}), ((t, e = {}) => {
							if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
							const n = b();
							S(() => {
								"interactionCount" in performance || M || (M = m("event", I, {
									durationThreshold: 0
								}));
								let r, i = g("INP");
								const o = a(e, R),
									s = t => {
										B(() => {
											for (const e of t) o.u(e);
											const e = o.M();
											e && e.T !== i.value && (i.value = e.T, i.entries = e.entries, r())
										})
									},
									c = m("event", s, {
										durationThreshold: e.durationThreshold ?? 40
									});
								r = d(t, i, j, e.reportAllChanges), c && (c.observe({
									type: "first-input",
									buffered: !0
								}), n.onHidden(() => {
									s(c.takeRecords()), r(!0)
								}), u(() => {
									o.v(), i = g("INP"), r = d(t, i, j, e.reportAllChanges)
								}))
							})
						})(e => {
							t((t => {
								const e = t.entries[0],
									i = l.get(e),
									o = e.processingStart,
									s = Math.max(e.startTime + e.duration, o),
									a = Math.min(i.processingEnd, s),
									c = i.entries.sort((t, e) => t.processingStart - e.processingStart),
									u = y(e.startTime, a),
									d = n.h.get(e.interactionId),
									p = {
										interactionTarget: f.get(d),
										interactionType: e.name.startsWith("key") ? "keyboard" : "pointer",
										interactionTime: e.startTime,
										nextPaintTime: s,
										processedEventEntries: c,
										longAnimationFrameEntries: u,
										inputDelay: o - e.startTime,
										processingDuration: a - o,
										presentationDelay: s - a,
										loadState: r(e.startTime),
										longestScript: void 0,
										totalScriptDuration: void 0,
										totalStyleAndLayoutDuration: void 0,
										totalPaintDuration: void 0,
										totalUnattributedDuration: void 0
									};
								return (t => {
									if (!t.longAnimationFrameEntries?.length) return;
									const e = t.interactionTime,
										n = t.inputDelay,
										r = t.processingDuration;
									let i, o, s = 0,
										a = 0,
										c = 0,
										l = 0;
									for (const c of t.longAnimationFrameEntries) {
										a = a + c.startTime + c.duration - c.styleAndLayoutStart;
										for (const t of c.scripts) {
											const c = t.startTime + t.duration;
											if (c < e) continue;
											const u = c - Math.max(e, t.startTime),
												d = t.duration ? u / t.duration * t.forcedStyleAndLayoutDuration : 0;
											s += u - d, a += d, u > l && (o = t.startTime < e + n ? "input-delay" : t.startTime >= e + n + r ? "presentation-delay" : "processing-duration", i = t, l = u)
										}
									}
									const u = t.longAnimationFrameEntries.at(-1),
										d = u ? u.startTime + u.duration : 0;
									d >= e + n + r && (c = t.nextPaintTime - d), i && o && (t.longestScript = {
										entry: i,
										subpart: o,
										intersectingDuration: l
									}), t.totalScriptDuration = s, t.totalStyleAndLayoutDuration = a, t.totalPaintDuration = c, t.totalUnattributedDuration = t.nextPaintTime - e - s - a - c
								})(p), Object.assign(t, {
									attribution: p
								})
							})(e))
						}, e)
					}, t.onLCP = (t, e = {}) => {
						const r = a(e = Object.assign({}, e), _),
							i = new WeakMap;
						r.p = t => {
							const n = t.element;
							if (n) {
								const r = e.generateTarget?.(n) ?? o(n);
								i.set(t, r)
							} else t.id && i.set(t, `#${t.id}`)
						}, ((t, e = {}) => {
							S(() => {
								const n = b();
								let r, i = g("LCP");
								const o = a(e, _),
									s = t => {
										e.reportAllChanges || (t = t.slice(-1));
										for (const e of t) o.u(e), e.startTime < n.firstHiddenTime && (i.value = Math.max(e.startTime - p(), 0), i.entries = [e], r())
									},
									c = m("largest-contentful-paint", s);
								if (c) {
									r = d(t, i, x, e.reportAllChanges);
									const n = v(() => {
											s(c.takeRecords()), c.disconnect(), r(!0)
										}),
										o = t => {
											t.isTrusted && (B(n), removeEventListener(t.type, o, {
												capture: !0
											}))
										};
									for (const t of ["keydown", "click", "visibilitychange"]) addEventListener(t, o, {
										capture: !0
									});
									u(n => {
										i = g("LCP"), r = d(t, i, x, e.reportAllChanges), f(() => {
											i.value = performance.now() - n.timeStamp, r(!0)
										})
									})
								}
							})
						})(e => {
							t((t => {
								let e = {
									timeToFirstByte: 0,
									resourceLoadDelay: 0,
									resourceLoadDuration: 0,
									elementRenderDelay: t.value
								};
								if (t.entries.length) {
									const r = t.entries.at(-1),
										o = r.url && performance.getEntriesByType("resource").find(t => t.name === r.url);
									e.target = i.get(r), e.lcpEntry = r, r.url && (e.url = r.url), o && (e.lcpResourceEntry = o);
									const s = n();
									if (s) {
										const n = s.activationStart || 0,
											r = Math.max(0, s.responseStart - n),
											i = Math.max(r, o ? (o.requestStart || o.startTime) - n : 0),
											a = Math.min(t.value, Math.max(i, o ? o.responseEnd - n : 0));
										e = {
											...e,
											timeToFirstByte: r,
											resourceLoadDelay: i - r,
											resourceLoadDuration: a - i,
											elementRenderDelay: t.value - a,
											navigationEntry: s
										}
									}
								}
								return Object.assign(t, {
									attribution: e
								})
							})(e))
						}, e)
					}, t.onTTFB = (t, e = {}) => {
						((t, e = {}) => {
							let r = g("TTFB"),
								i = d(t, r, F, e.reportAllChanges);
							q(() => {
								const o = n();
								o && (r.value = Math.max(o.responseStart - p(), 0), r.entries = [o], i(!0), u(() => {
									r = g("TTFB", 0), i = d(t, r, F, e.reportAllChanges), i(!0)
								}))
							})
						})(e => {
							t((t => {
								let e = {
									waitingDuration: 0,
									cacheDuration: 0,
									dnsDuration: 0,
									connectionDuration: 0,
									requestDuration: 0
								};
								if (t.entries.length) {
									const n = t.entries[0],
										r = n.activationStart || 0,
										i = Math.max((n.workerStart || n.fetchStart) - r, 0),
										o = Math.max(n.domainLookupStart - r, 0),
										s = Math.max(n.connectStart - r, 0),
										a = Math.max(n.connectEnd - r, 0);
									e = {
										waitingDuration: i,
										cacheDuration: o - i,
										dnsDuration: s - o,
										connectionDuration: a - s,
										requestDuration: t.value - a,
										navigationEntry: n
									}
								}
								return Object.assign(t, {
									attribution: e
								})
							})(e))
						}, e)
					}
				}(e)
			},
			323: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.sendObjectBeacon = function(t, e, n, r = !1, i = null) {
					let o = i || `/cdn-cgi/rum?${t}`,
						s = !0;
					if (navigator && "string" == typeof navigator.userAgent) try {
						const t = navigator.userAgent.match(/Chrome\/([0-9]+)/);
						t && t[0].toLowerCase().indexOf("chrome") > -1 && parseInt(t[1]) < 81 && (s = !1)
					} catch (t) {}
					if (navigator && "function" == typeof navigator.sendBeacon && s && r) {
						e.st = 1;
						const t = JSON.stringify(e),
							n = {
								type: "application/json"
							},
							r = navigator.sendBeacon && navigator.sendBeacon.bind(navigator);
						null == r || r(o, new Blob([t], n))
					} else {
						e.st = 2;
						const t = JSON.stringify(e),
							r = new XMLHttpRequest;
						n && (r.onreadystatechange = function() {
							4 == this.readyState && 204 == this.status && n()
						}), r.open("POST", o, !0), r.setRequestHeader("content-type", "application/json"), r.send(t)
					}
				}
			},
			674: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.timingsV2TargetKeys = e.timingsTargetKeys = void 0, e.buildTimingsObject = function(t, e, n) {
					for (const r of n) {
						const n = t[r];
						void 0 !== e && ("number" != typeof n && "string" != typeof n || (e[r] = n))
					}
				}, e.timingsTargetKeys = ["navigationStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domComplete", "loadEventStart", "loadEventEnd"], e.timingsV2TargetKeys = ["nextHopProtocol", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domInteractive", "domComplete", "loadEventStart", "loadEventEnd", "finalResponseHeadersStart", "firstInterimResponseStart", "transferSize", "decodedBodySize"]
			},
			696: (t, e) => {
				"use strict";
				var n, r;
				Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.FetchPriority = e.EventType = void 0,
					function(t) {
						t[t.Load = 1] = "Load", t[t.Additional = 2] = "Additional", t[t.WebVitalsV2 = 3] = "WebVitalsV2"
					}(n || (e.EventType = n = {})),
					function(t) {
						t.High = "high", t.Low = "low", t.Auto = "auto"
					}(r || (e.FetchPriority = r = {}))
			},
			791: (t, e, n) => {
				"use strict";
				n.r(e), n.d(e, {
					MAX: () => r,
					NIL: () => i,
					parse: () => a,
					stringify: () => u,
					v1: () => v,
					v1ToV6: () => h,
					v3: () => I,
					v4: () => O,
					v5: () => _,
					v6: () => x,
					v6ToV1: () => F,
					v7: () => V,
					validate: () => s,
					version: () => $
				});
				const r = "ffffffff-ffff-ffff-ffff-ffffffffffff",
					i = "00000000-0000-0000-0000-000000000000",
					o = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i,
					s = function(t) {
						return "string" == typeof t && o.test(t)
					},
					a = function(t) {
						if (!s(t)) throw TypeError("Invalid UUID");
						let e;
						return Uint8Array.of((e = parseInt(t.slice(0, 8), 16)) >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, (e = parseInt(t.slice(9, 13), 16)) >>> 8, 255 & e, (e = parseInt(t.slice(14, 18), 16)) >>> 8, 255 & e, (e = parseInt(t.slice(19, 23), 16)) >>> 8, 255 & e, (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, e / 4294967296 & 255, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e)
					},
					c = [];
				for (let t = 0; t < 256; ++t) c.push((t + 256).toString(16).slice(1));

				function l(t, e = 0) {
					return (c[t[e + 0]] + c[t[e + 1]] + c[t[e + 2]] + c[t[e + 3]] + "-" + c[t[e + 4]] + c[t[e + 5]] + "-" + c[t[e + 6]] + c[t[e + 7]] + "-" + c[t[e + 8]] + c[t[e + 9]] + "-" + c[t[e + 10]] + c[t[e + 11]] + c[t[e + 12]] + c[t[e + 13]] + c[t[e + 14]] + c[t[e + 15]]).toLowerCase()
				}
				const u = function(t, e = 0) {
					const n = l(t, e);
					if (!s(n)) throw TypeError("Stringified UUID is invalid");
					return n
				};
				let d;
				const f = new Uint8Array(16);

				function p() {
					if (!d) {
						if ("undefined" == typeof crypto || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
						d = crypto.getRandomValues.bind(crypto)
					}
					return d(f)
				}
				const g = {};

				function m(t, e, n, r, i, o, s = 0) {
					if (t.length < 16) throw new Error("Random bytes length must be >= 16");
					if (o) {
						if (s < 0 || s + 16 > o.length) throw new RangeError(`UUID byte range ${s}:${s+15} is out of buffer bounds`)
					} else o = new Uint8Array(16), s = 0;
					null != e || (e = Date.now()), null != n || (n = 0), null != r || (r = 16383 & (t[8] << 8 | t[9])), null != i || (i = t.slice(10, 16));
					const a = (1e4 * (268435455 & (e += 122192928e5)) + n) % 4294967296;
					o[s++] = a >>> 24 & 255, o[s++] = a >>> 16 & 255, o[s++] = a >>> 8 & 255, o[s++] = 255 & a;
					const c = e / 4294967296 * 1e4 & 268435455;
					o[s++] = c >>> 8 & 255, o[s++] = 255 & c, o[s++] = c >>> 24 & 15 | 16, o[s++] = c >>> 16 & 255, o[s++] = r >>> 8 | 128, o[s++] = 255 & r;
					for (let t = 0; t < 6; ++t) o[s++] = i[t];
					return o
				}
				const v = function(t, e, n) {
					var r, i, o, s;
					let a;
					const c = null !== (r = null == t ? void 0 : t._v6) && void 0 !== r && r;
					if (t) {
						const e = Object.keys(t);
						1 === e.length && "_v6" === e[0] && (t = void 0)
					}
					if (t) a = m(null !== (s = null !== (i = t.random) && void 0 !== i ? i : null === (o = t.rng) || void 0 === o ? void 0 : o.call(t)) && void 0 !== s ? s : p(), t.msecs, t.nsecs, t.clockseq, t.node, e, n);
					else {
						const t = Date.now(),
							r = p();
						! function(t, e, n) {
							var r, i;
							null !== (r = t.msecs) && void 0 !== r || (t.msecs = -1 / 0), null !== (i = t.nsecs) && void 0 !== i || (t.nsecs = 0), e === t.msecs ? (t.nsecs++, t.nsecs >= 1e4 && (t.node = void 0, t.nsecs = 0)) : e > t.msecs ? t.nsecs = 0 : e < t.msecs && (t.node = void 0), t.node || (t.node = n.slice(10, 16), t.node[0] |= 1, t.clockseq = 16383 & (n[8] << 8 | n[9])), t.msecs = e
						}(g, t, r), a = m(r, g.msecs, g.nsecs, c ? void 0 : g.clockseq, c ? void 0 : g.node, e, n)
					}
					return null != e ? e : l(a)
				};

				function h(t) {
					const e = function(t) {
						return Uint8Array.of((15 & t[6]) << 4 | t[7] >> 4 & 15, (15 & t[7]) << 4 | (240 & t[4]) >> 4, (15 & t[4]) << 4 | (240 & t[5]) >> 4, (15 & t[5]) << 4 | (240 & t[0]) >> 4, (15 & t[0]) << 4 | (240 & t[1]) >> 4, (15 & t[1]) << 4 | (240 & t[2]) >> 4, 96 | 15 & t[2], t[3], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
					}("string" == typeof t ? a(t) : t);
					return "string" == typeof t ? l(e) : e
				}

				function y(t) {
					return 14 + (t + 64 >>> 9 << 4) + 1
				}

				function T(t, e) {
					const n = (65535 & t) + (65535 & e);
					return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
				}

				function w(t, e, n, r, i, o) {
					return T((s = T(T(e, t), T(r, o))) << (a = i) | s >>> 32 - a, n);
					var s, a
				}

				function b(t, e, n, r, i, o, s) {
					return w(e & n | ~e & r, t, e, i, o, s)
				}

				function S(t, e, n, r, i, o, s) {
					return w(e & r | n & ~r, t, e, i, o, s)
				}

				function E(t, e, n, r, i, o, s) {
					return w(e ^ n ^ r, t, e, i, o, s)
				}

				function L(t, e, n, r, i, o, s) {
					return w(n ^ (e | ~r), t, e, i, o, s)
				}
				const D = function(t) {
						return function(t) {
							const e = new Uint8Array(4 * t.length);
							for (let n = 0; n < 4 * t.length; n++) e[n] = t[n >> 2] >>> n % 4 * 8 & 255;
							return e
						}(function(t, e) {
							const n = new Uint32Array(y(e)).fill(0);
							n.set(t), n[e >> 5] |= 128 << e % 32, n[n.length - 1] = e, t = n;
							let r = 1732584193,
								i = -271733879,
								o = -1732584194,
								s = 271733878;
							for (let e = 0; e < t.length; e += 16) {
								const n = r,
									a = i,
									c = o,
									l = s;
								r = b(r, i, o, s, t[e], 7, -680876936), s = b(s, r, i, o, t[e + 1], 12, -389564586), o = b(o, s, r, i, t[e + 2], 17, 606105819), i = b(i, o, s, r, t[e + 3], 22, -1044525330), r = b(r, i, o, s, t[e + 4], 7, -176418897), s = b(s, r, i, o, t[e + 5], 12, 1200080426), o = b(o, s, r, i, t[e + 6], 17, -1473231341), i = b(i, o, s, r, t[e + 7], 22, -45705983), r = b(r, i, o, s, t[e + 8], 7, 1770035416), s = b(s, r, i, o, t[e + 9], 12, -1958414417), o = b(o, s, r, i, t[e + 10], 17, -42063), i = b(i, o, s, r, t[e + 11], 22, -1990404162), r = b(r, i, o, s, t[e + 12], 7, 1804603682), s = b(s, r, i, o, t[e + 13], 12, -40341101), o = b(o, s, r, i, t[e + 14], 17, -1502002290), i = b(i, o, s, r, t[e + 15], 22, 1236535329), r = S(r, i, o, s, t[e + 1], 5, -165796510), s = S(s, r, i, o, t[e + 6], 9, -1069501632), o = S(o, s, r, i, t[e + 11], 14, 643717713), i = S(i, o, s, r, t[e], 20, -373897302), r = S(r, i, o, s, t[e + 5], 5, -701558691), s = S(s, r, i, o, t[e + 10], 9, 38016083), o = S(o, s, r, i, t[e + 15], 14, -660478335), i = S(i, o, s, r, t[e + 4], 20, -405537848), r = S(r, i, o, s, t[e + 9], 5, 568446438), s = S(s, r, i, o, t[e + 14], 9, -1019803690), o = S(o, s, r, i, t[e + 3], 14, -187363961), i = S(i, o, s, r, t[e + 8], 20, 1163531501), r = S(r, i, o, s, t[e + 13], 5, -1444681467), s = S(s, r, i, o, t[e + 2], 9, -51403784), o = S(o, s, r, i, t[e + 7], 14, 1735328473), i = S(i, o, s, r, t[e + 12], 20, -1926607734), r = E(r, i, o, s, t[e + 5], 4, -378558), s = E(s, r, i, o, t[e + 8], 11, -2022574463), o = E(o, s, r, i, t[e + 11], 16, 1839030562), i = E(i, o, s, r, t[e + 14], 23, -35309556), r = E(r, i, o, s, t[e + 1], 4, -1530992060), s = E(s, r, i, o, t[e + 4], 11, 1272893353), o = E(o, s, r, i, t[e + 7], 16, -155497632), i = E(i, o, s, r, t[e + 10], 23, -1094730640), r = E(r, i, o, s, t[e + 13], 4, 681279174), s = E(s, r, i, o, t[e], 11, -358537222), o = E(o, s, r, i, t[e + 3], 16, -722521979), i = E(i, o, s, r, t[e + 6], 23, 76029189), r = E(r, i, o, s, t[e + 9], 4, -640364487), s = E(s, r, i, o, t[e + 12], 11, -421815835), o = E(o, s, r, i, t[e + 15], 16, 530742520), i = E(i, o, s, r, t[e + 2], 23, -995338651), r = L(r, i, o, s, t[e], 6, -198630844), s = L(s, r, i, o, t[e + 7], 10, 1126891415), o = L(o, s, r, i, t[e + 14], 15, -1416354905), i = L(i, o, s, r, t[e + 5], 21, -57434055), r = L(r, i, o, s, t[e + 12], 6, 1700485571), s = L(s, r, i, o, t[e + 3], 10, -1894986606), o = L(o, s, r, i, t[e + 10], 15, -1051523), i = L(i, o, s, r, t[e + 1], 21, -2054922799), r = L(r, i, o, s, t[e + 8], 6, 1873313359), s = L(s, r, i, o, t[e + 15], 10, -30611744), o = L(o, s, r, i, t[e + 6], 15, -1560198380), i = L(i, o, s, r, t[e + 13], 21, 1309151649), r = L(r, i, o, s, t[e + 4], 6, -145523070), s = L(s, r, i, o, t[e + 11], 10, -1120210379), o = L(o, s, r, i, t[e + 2], 15, 718787259), i = L(i, o, s, r, t[e + 9], 21, -343485551), r = T(r, n), i = T(i, a), o = T(o, c), s = T(s, l)
							}
							return Uint32Array.of(r, i, o, s)
						}(function(t) {
							if (0 === t.length) return new Uint32Array;
							const e = new Uint32Array(y(8 * t.length)).fill(0);
							for (let n = 0; n < t.length; n++) e[n >> 2] |= (255 & t[n]) << n % 4 * 8;
							return e
						}(t), 8 * t.length))
					},
					A = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
					P = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";

				function C(t, e, n, r, i, o) {
					const s = "string" == typeof n ? function(t) {
							t = unescape(encodeURIComponent(t));
							const e = new Uint8Array(t.length);
							for (let n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
							return e
						}(n) : n,
						c = "string" == typeof r ? a(r) : r;
					if ("string" == typeof r && (r = a(r)), 16 !== (null == r ? void 0 : r.length)) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
					let u = new Uint8Array(16 + s.length);
					if (u.set(c), u.set(s, c.length), u = e(u), u[6] = 15 & u[6] | t, u[8] = 63 & u[8] | 128, i) {
						o = o || 0;
						for (let t = 0; t < 16; ++t) i[o + t] = u[t];
						return i
					}
					return l(u)
				}

				function U(t, e, n, r) {
					return C(48, D, t, e, n, r)
				}
				U.DNS = A, U.URL = P;
				const I = U,
					M = {
						randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
					},
					O = function(t, e, n) {
						return !M.randomUUID || e || t ? function(t, e, n) {
							var r, i, o;
							const s = null !== (o = null !== (r = (t = t || {}).random) && void 0 !== r ? r : null === (i = t.rng) || void 0 === i ? void 0 : i.call(t)) && void 0 !== o ? o : p();
							if (s.length < 16) throw new Error("Random bytes length must be >= 16");
							if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e) {
								if ((n = n || 0) < 0 || n + 16 > e.length) throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);
								for (let t = 0; t < 16; ++t) e[n + t] = s[t];
								return e
							}
							return l(s)
						}(t, e, n) : M.randomUUID()
					};

				function k(t, e, n, r) {
					switch (t) {
						case 0:
							return e & n ^ ~e & r;
						case 1:
						case 3:
							return e ^ n ^ r;
						case 2:
							return e & n ^ e & r ^ n & r
					}
				}

				function R(t, e) {
					return t << e | t >>> 32 - e
				}
				const B = function(t) {
					const e = [1518500249, 1859775393, 2400959708, 3395469782],
						n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
						r = new Uint8Array(t.length + 1);
					r.set(t), r[t.length] = 128;
					const i = (t = r).length / 4 + 2,
						o = Math.ceil(i / 16),
						s = new Array(o);
					for (let e = 0; e < o; ++e) {
						const n = new Uint32Array(16);
						for (let r = 0; r < 16; ++r) n[r] = t[64 * e + 4 * r] << 24 | t[64 * e + 4 * r + 1] << 16 | t[64 * e + 4 * r + 2] << 8 | t[64 * e + 4 * r + 3];
						s[e] = n
					}
					s[o - 1][14] = 8 * (t.length - 1) / Math.pow(2, 32), s[o - 1][14] = Math.floor(s[o - 1][14]), s[o - 1][15] = 8 * (t.length - 1) & 4294967295;
					for (let t = 0; t < o; ++t) {
						const r = new Uint32Array(80);
						for (let e = 0; e < 16; ++e) r[e] = s[t][e];
						for (let t = 16; t < 80; ++t) r[t] = R(r[t - 3] ^ r[t - 8] ^ r[t - 14] ^ r[t - 16], 1);
						let i = n[0],
							o = n[1],
							a = n[2],
							c = n[3],
							l = n[4];
						for (let t = 0; t < 80; ++t) {
							const n = Math.floor(t / 20),
								s = R(i, 5) + k(n, o, a, c) + l + e[n] + r[t] >>> 0;
							l = c, c = a, a = R(o, 30) >>> 0, o = i, i = s
						}
						n[0] = n[0] + i >>> 0, n[1] = n[1] + o >>> 0, n[2] = n[2] + a >>> 0, n[3] = n[3] + c >>> 0, n[4] = n[4] + l >>> 0
					}
					return Uint8Array.of(n[0] >> 24, n[0] >> 16, n[0] >> 8, n[0], n[1] >> 24, n[1] >> 16, n[1] >> 8, n[1], n[2] >> 24, n[2] >> 16, n[2] >> 8, n[2], n[3] >> 24, n[3] >> 16, n[3] >> 8, n[3], n[4] >> 24, n[4] >> 16, n[4] >> 8, n[4])
				};

				function j(t, e, n, r) {
					return C(80, B, t, e, n, r)
				}
				j.DNS = A, j.URL = P;
				const _ = j,
					x = function(t, e, n) {
						null != t || (t = {}), null != n || (n = 0);
						let r = v(Object.assign(Object.assign({}, t), {
							_v6: !0
						}), new Uint8Array(16));
						if (r = h(r), e) {
							for (let t = 0; t < 16; t++) e[n + t] = r[t];
							return e
						}
						return l(r)
					};

				function F(t) {
					const e = (n = "string" == typeof t ? a(t) : t, Uint8Array.of((15 & n[3]) << 4 | n[4] >> 4 & 15, (15 & n[4]) << 4 | (240 & n[5]) >> 4, (15 & n[5]) << 4 | 15 & n[6], n[7], (15 & n[1]) << 4 | (240 & n[2]) >> 4, (15 & n[2]) << 4 | (240 & n[3]) >> 4, 16 | (240 & n[0]) >> 4, (15 & n[0]) << 4 | (240 & n[1]) >> 4, n[8], n[9], n[10], n[11], n[12], n[13], n[14], n[15]));
					var n;
					return "string" == typeof t ? l(e) : e
				}
				const q = {};

				function N(t, e, n, r, i = 0) {
					if (t.length < 16) throw new Error("Random bytes length must be >= 16");
					if (r) {
						if (i < 0 || i + 16 > r.length) throw new RangeError(`UUID byte range ${i}:${i+15} is out of buffer bounds`)
					} else r = new Uint8Array(16), i = 0;
					return null != e || (e = Date.now()), null != n || (n = 127 * t[6] << 24 | t[7] << 16 | t[8] << 8 | t[9]), r[i++] = e / 1099511627776 & 255, r[i++] = e / 4294967296 & 255, r[i++] = e / 16777216 & 255, r[i++] = e / 65536 & 255, r[i++] = e / 256 & 255, r[i++] = 255 & e, r[i++] = 112 | n >>> 28 & 15, r[i++] = n >>> 20 & 255, r[i++] = 128 | n >>> 14 & 63, r[i++] = n >>> 6 & 255, r[i++] = n << 2 & 255 | 3 & t[10], r[i++] = t[11], r[i++] = t[12], r[i++] = t[13], r[i++] = t[14], r[i++] = t[15], r
				}
				const V = function(t, e, n) {
						var r, i, o;
						let s;
						if (t) s = N(null !== (o = null !== (r = t.random) && void 0 !== r ? r : null === (i = t.rng) || void 0 === i ? void 0 : i.call(t)) && void 0 !== o ? o : p(), t.msecs, t.seq, e, n);
						else {
							const t = Date.now(),
								r = p();
							! function(t, e, n) {
								var r, i;
								null !== (r = t.msecs) && void 0 !== r || (t.msecs = -1 / 0), null !== (i = t.seq) && void 0 !== i || (t.seq = 0), e > t.msecs ? (t.seq = n[6] << 23 | n[7] << 16 | n[8] << 8 | n[9], t.msecs = e) : (t.seq = t.seq + 1 | 0, 0 === t.seq && t.msecs++)
							}(q, t, r), s = N(r, q.msecs, q.seq, e, n)
						}
						return null != e ? e : l(s)
					},
					$ = function(t) {
						if (!s(t)) throw TypeError("Invalid UUID");
						return parseInt(t.slice(14, 15), 16)
					}
			}
		},
		e = {};

	function n(r) {
		var i = e[r];
		if (void 0 !== i) return i.exports;
		var o = e[r] = {
			exports: {}
		};
		return t[r].call(o.exports, o, o.exports, n), o.exports
	}
	n.d = (t, e) => {
		for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
			enumerable: !0,
			get: e[r]
		})
	}, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, (() => {
		"use strict";
		const t = n(696),
			e = n(323),
			r = n(173),
			i = n(791),
			o = n(674);
		(() => {
			function n(t) {
				let e = "";
				if (e = window.location.origin ? window.location.origin : `${window.location.protocol}://${window.location.host}`, t && "string" == typeof t)
					if (0 === t.indexOf("/")) e += t;
					else try {
						const e = new URL(t);
						return `${e.protocol}://${e.host}${e.pathname}`
					} catch (t) {} else {
						const t = window.location.pathname;
						t && t.length > 0 && (e += t)
					}
				return e
			}! function() {
				const s = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
					a = "data-cf-beacon",
					c = document.currentScript || ("function" == typeof document.querySelector ? document.querySelector(`script[${a}]`) : void 0);
				let l, u, d = (0, i.v4)(),
					f = [],
					p = window.__cfBeacon ? window.__cfBeacon : {};
				if (p && "single" === p.load) return;
				if (c) {
					const t = c.getAttribute(a);
					if (t) try {
						p = Object.assign(Object.assign({}, p), JSON.parse(t))
					} catch (t) {} else {
						const t = c.getAttribute("src");
						if (t && "function" == typeof URLSearchParams) {
							const e = new URLSearchParams(t.replace(/^[^\?]+\??/, "")),
								n = e.get("token");
							n && (p.token = n);
							const r = e.get("spa");
							p.spa = null === r || "true" === r
						}
					}
					p && "multi" !== p.load && (p.load = "single"), window.__cfBeacon = p
				}
				if (!s || !p || !p.token) return;
				let g, m, v = !1,
					h = 0;
				const y = {};

				function T(t) {
					var e, n, r, i, o, s;
					const a = window.location.pathname;
					let c;
					switch (m || (m = t.navigationType), "INP" !== t.name && (y[t.name.toLowerCase()] = {
							value: t.value,
							path: a
						}), t.name) {
						case "CLS":
							c = t.attribution, c && y.cls && (y.cls.element = c.largestShiftTarget, y.cls.currentRect = null === (e = c.largestShiftSource) || void 0 === e ? void 0 : e.currentRect, y.cls.previousRect = null === (n = c.largestShiftSource) || void 0 === n ? void 0 : n.previousRect);
							break;
						case "LCP":
							c = t.attribution, c && y.lcp && (y.lcp.element = c.target, y.lcp.size = null === (r = c.lcpEntry) || void 0 === r ? void 0 : r.size, y.lcp.url = c.url, y.lcp.rld = c.resourceLoadDelay, y.lcp.rlt = c.resourceLoadDuration, y.lcp.erd = c.elementRenderDelay, y.lcp.it = null === (i = c.lcpResourceEntry) || void 0 === i ? void 0 : i.initiatorType, y.lcp.fp = null === (s = null === (o = c.lcpEntry) || void 0 === o ? void 0 : o.element) || void 0 === s ? void 0 : s.getAttribute("fetchpriority"));
							break;
						case "INP":
							(null == y.inp || Number(y.inp.value) < Number(t.value)) && (y.inp = {
								value: Number(t.value),
								path: a
							}, c = t.attribution, c && y.inp && (y.inp.element = c.interactionTarget, y.inp.name = c.interactionType, y.inp.idy = c.inputDelay, y.inp.pdn = c.processingDuration, y.inp.pdy = c.presentationDelay))
					}
				}
				"function" == typeof PerformanceObserver && ((0, r.onLCP)(T), (0, r.onFCP)(T), (0, r.onINP)(T), (0, r.onTTFB)(T), PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("layout-shift") && (0, r.onCLS)(T, {
					reportAllChanges: !0
				})), document.addEventListener("visibilitychange", () => {
					if ("hidden" === document.visibilityState) {
						if (w && D()) {
							const t = n();
							(null == g ? void 0 : g.url) == t && (null == g ? void 0 : g.triggered) || S(), A(t)
						}!v && g && (v = !0, E())
					} else "visible" === document.visibilityState && (h = (new Date).getTime())
				});
				const w = p && (void 0 === p.spa || !0 === p.spa),
					b = p.send && p.send.to ? p.send.to : void 0 === p.version ? "https://cloudflareinsights.com/cdn-cgi/rum" : null,
					S = r => {
						let i = function(e) {
							const r = s.timing,
								i = s.memory,
								a = e || n(),
								c = {
									memory: {},
									timings: {},
									resources: [],
									referrer: C(),
									eventType: t.EventType.Load,
									firstPaint: 0,
									firstContentfulPaint: 0,
									startTime: P(),
									versions: {
										fl: p ? p.version : "",
										js: "2026.6.0",
										timings: 1
									},
									pageloadId: d,
									location: a,
									nt: m,
									serverTimings: U()
								};
							if (null == l) {
								if ("function" == typeof s.getEntriesByType) {
									const t = s.getEntriesByType("navigation");
									if (t && Array.isArray(t) && t.length > 0) {
										c.timingsV2 = {}, c.versions.timings = 2, c.dt = t[0].deliveryType, delete c.timings;
										const e = t[0];
										(0, o.buildTimingsObject)(e, c.timingsV2, o.timingsV2TargetKeys)
									}
								}
								if (1 === c.versions.timings) {
									const t = r;
									c.timings && (0, o.buildTimingsObject)(t, c.timings, o.timingsTargetKeys)
								}! function(t, e) {
									for (const n in t) {
										const r = t[n];
										void 0 !== e && ("number" != typeof r && "string" != typeof r || (e[n] = r))
									}
								}(i, c.memory)
							} else I(c);
							return c.firstPaint = M("first-paint"), c.firstContentfulPaint = M("first-contentful-paint"), p && (p.icTag && (c.icTag = p.icTag), c.siteToken = p.token), void 0 !== l && (delete c.timings, delete c.memory), c
						}(r);
						i && p && (i.resources = [], p && ((0, e.sendObjectBeacon)("", i, () => {}, !1, b), void 0 !== p.forward && void 0 !== p.forward.url && (0, e.sendObjectBeacon)("", i, () => {}, !1, p.forward.url)))
					},
					E = () => {
						let r = function() {
							const e = s.getEntriesByType("navigation")[0];
							let r = "";
							try {
								r = "function" == typeof s.getEntriesByType ? new URL(null == e ? void 0 : e.name).pathname : u ? new URL(u).pathname : window.location.pathname
							} catch (t) {}
							const i = {
								referrer: document.referrer || "",
								eventType: t.EventType.WebVitalsV2,
								versions: {
									js: "2026.6.0"
								},
								pageloadId: d,
								location: n(),
								landingPath: r,
								startTime: P(),
								nt: m,
								serverTimings: U()
							};
							return p && (p.version && (i.versions.fl = p.version), p.icTag && (i.icTag = p.icTag), i.siteToken = p.token), y && ["lcp", "cls", "fcp", "ttfb", "inp"].forEach(t => {
								i[t] = {
									value: -1,
									path: void 0
								}, y[t] && void 0 !== y[t].value && (i[t] = y[t])
							}), I(i), i
						}();
						p && (0, e.sendObjectBeacon)("", r, () => {}, !0, b)
					},
					L = () => {
						const t = window.__cfRl && window.__cfRl.done || window.__cfQR && window.__cfQR.done;
						t ? t.then(S) : S(), g = {
							id: d,
							url: n(),
							ts: (new Date).getTime(),
							triggered: !0
						}
					};
				"complete" === window.document.readyState ? L() : window.addEventListener("load", () => {
					window.setTimeout(L)
				});
				const D = () => w && 0 === f.filter(t => t.id === d).length,
					A = t => {
						f.push({
							id: d,
							url: t,
							ts: (new Date).getTime()
						}), f.length > 3 && f.shift()
					};

				function P() {
					return s.timeOrigin
				}

				function C() {
					const t = document.referrer || "",
						e = f[f.length - 1];
					return w && g && e ? e.url : t
				}

				function U() {
					if (!p || !p.serverTiming) return;
					let t = [];
					for (const e of ["navigation", "resource"])
						for (const {
								name: n,
								serverTiming: r
							}
							of s.getEntriesByType(e))
							if (r) {
								if ("resource" === e) {
									const t = p.serverTiming.location_startswith;
									if (!t || !Array.isArray(t)) continue;
									let e = !1;
									for (const r of t)
										if (n.startsWith(r)) {
											e = !0;
											break
										} if (!e) continue
								}
								for (const {
										name: i,
										description: o,
										duration: s
									}
									of r)
									if (p.serverTiming.name && p.serverTiming.name[i]) try {
										const r = new URL(n);
										t.push({
											location: "resource" === e ? `${r.origin}${r.pathname}` : void 0,
											name: i,
											dur: s,
											desc: o
										})
									} catch (t) {}
							} return t
				}

				function I(t) {
					if ("function" == typeof s.getEntriesByType) {
						const e = s.getEntriesByType("navigation");
						let n = {};
						t.timingsV2 = {}, e && e[0] && (e[0].nextHopProtocol && (n.nextHopProtocol = e[0].nextHopProtocol), e[0].transferSize && (n.transferSize = e[0].transferSize), e[0].decodedBodySize && (n.decodedBodySize = e[0].decodedBodySize), t.dt = e[0].deliveryType), (0, o.buildTimingsObject)(n, t.timingsV2, o.timingsV2TargetKeys)
					}
				}

				function M(t) {
					var e;
					if ("first-contentful-paint" === t && y.fcp && y.fcp.value) return y.fcp.value;
					if ("function" == typeof s.getEntriesByType) {
						const n = null === (e = s.getEntriesByType("paint")) || void 0 === e ? void 0 : e.filter(e => e.name === t)[0];
						return n ? n.startTime : 0
					}
					return 0
				}
				w && (u = n(), (t => {
					var e = t.pushState;
					if (e) {
						let r = () => {
							d = (0, i.v4)(), h = 0
						};
						t.pushState = function(i, o, s) {
							l = n(s);
							const a = n();
							let c = !0;
							return l == a && (c = !1), c && (D() && ((null == g ? void 0 : g.url) == a && (null == g ? void 0 : g.triggered) || S(a), A(a)), r()), e.apply(t, [i, o, s])
						}, window.addEventListener("popstate", function(t) {
							D() && ((null == g ? void 0 : g.url) == l && (null == g ? void 0 : g.triggered) || S(l), A(l)), l = n(), r()
						})
					}
				})(window.history))
			}()
		})()
	})()
})();