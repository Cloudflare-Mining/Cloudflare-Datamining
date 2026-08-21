(() => {
	var t = {
			116: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.cleanLocation = function(t) {
					if (!t) return t;
					try {
						const e = new URL(t);
						return e.username = "", e.password = "", e.hash = "", e.search = "", e.toString()
					} catch (e) {
						let n = t.split("?")[0].split("#")[0];
						if (n.includes("@")) {
							const t = n.split("://"),
								e = t[1];
							if (e) {
								const i = e.split("@")[1];
								i && (n = t[0] + "://" + i)
							}
						}
						return n
					}
				}
			},
			173: function(t, e) {
				! function(t) {
					"use strict";
					class e {
						t;
						o = 0;
						i = [];
						l(t) {
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
						i = t => {
							if ("loading" === document.readyState) return "loading";
							const e = n();
							if (e) {
								if (t < e.domInteractive) return "loading";
								if (0 === e.domContentLoadedEventStart || t < e.domContentLoadedEventStart) return "dom-interactive";
								if (0 === e.domComplete || t < e.domComplete) return "dom-content-loaded"
							}
							return "complete"
						},
						o = t => {
							const e = t.nodeName;
							return 1 === t.nodeType ? e.toLowerCase() : e.toUpperCase().replace(/^#/, "")
						},
						r = t => {
							let e = "";
							try {
								for (; 9 !== t?.nodeType;) {
									const n = t,
										i = n.id ? "#" + n.id : [o(n), ...Array.from(n.classList ?? []).sort()].join(".");
									if (e.length + i.length > 99) return e || i;
									if (e = e ? i + ">" + e : i, n.id) break;
									t = n.parentNode
								}
							} catch {}
							return e
						},
						a = new WeakMap;

					function s(t, e) {
						let n = a.get(e);
						return n || (n = new WeakMap, a.set(e, n)), n.get(t) || n.set(t, new e), n.get(t)
					}
					let c = -1;
					const l = () => c,
						d = t => {
							addEventListener("pageshow", e => {
								e.persisted && (c = e.timeStamp, t(e))
							}, !0)
						},
						u = (t, e, n, i) => {
							let o, r;
							return a => {
								e.value >= 0 && (a || i) && (r = e.value - (o ?? 0), (r || void 0 === o) && (o = e.value, e.delta = r, e.rating = ((t, e) => t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good")(e.value, n), t(e)))
							}
						},
						g = t => {
							requestAnimationFrame(() => requestAnimationFrame(t))
						},
						p = () => n()?.activationStart ?? 0;
					let f = -1;
					const v = new Set,
						m = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
						y = t => {
							if ("hidden" === document.visibilityState) {
								if ("visibilitychange" === t.type)
									for (const t of v) t();
								isFinite(f) || (f = "visibilitychange" === t.type ? t.timeStamp : 0, removeEventListener("prerenderingchange", y, !0))
							}
						},
						h = (t = !1) => {
							if (t && (f = 1 / 0), f < 0) {
								const t = p(),
									e = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find(e => "hidden" === e.name && e.startTime >= t)?.startTime;
								f = e ?? m(), addEventListener("visibilitychange", y, !0), addEventListener("prerenderingchange", y, !0), d(() => {
									setTimeout(() => {
										f = m()
									})
								})
							}
							return {
								get firstHiddenTime() {
									return f
								},
								onHidden(t) {
									v.add(t)
								}
							}
						},
						T = (t, e = -1, i, o = 0, r, a, s) => {
							const c = n(),
								d = c?.navigationId || 0;
							let u = "navigate";
							return i ? u = i : l() >= 0 ? u = "back-forward-cache" : c && (document.prerendering || p() > 0 ? u = "prerender" : document.wasDiscarded ? u = "restore" : c.type && (u = c.type.replace(/_/g, "-"))), {
								name: t,
								value: e,
								rating: "good",
								delta: 0,
								entries: [],
								id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
								navigationType: u,
								navigationId: o || d,
								navigationInteractionId: r,
								navigationURL: a || c?.name,
								navigationStartTime: s || 0
							}
						},
						S = (t, e, n = {}) => {
							try {
								const i = t.filter(t => PerformanceObserver.supportedEntryTypes.includes(t));
								if (i.length > 0) {
									const t = new PerformanceObserver(t => {
										queueMicrotask(() => {
											const n = t.getEntries();
											i.length > 1 && n.sort((t, e) => t.startTime + t.duration - (e.startTime + e.duration)), e(n)
										})
									});
									for (const e of i) t.observe({
										type: e,
										buffered: !0,
										...n
									});
									return t
								}
							} catch {}
						},
						w = t => globalThis.PerformanceObserver?.supportedEntryTypes.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && t && t.reportSoftNavs,
						b = (t, e) => {
							if (t.set(e.navigationId, e), t.size > 2) {
								const e = t.keys().next().value;
								void 0 !== e && t.delete(e)
							}
						},
						E = t => {
							let e = !1;
							return () => {
								e || (t(), e = !0)
							}
						};
					class I {
						u
					}
					const P = t => {
							document.prerendering ? addEventListener("prerenderingchange", t, !0) : t()
						},
						L = [1800, 3e3],
						M = (t, e = {}) => {
							const n = w(e);
							P(() => {
								const i = s(e, I),
									o = h();
								let r, a = T("FCP");
								const c = S(["paint"], t => {
									for (const e of t) "first-contentful-paint" === e.name && (c.disconnect(), e.startTime < o.firstHiddenTime && (a.value = Math.max(e.startTime - p(), 0), a.entries.push(e), a.navigationId = e.navigationId || a.navigationId, r(!0)))
								});
								c && (r = u(t, a, L, e.reportAllChanges), d(n => {
									a = T("FCP", -1, "back-forward-cache", a.navigationId, a.navigationInteractionId, a.navigationURL, l()), r = u(t, a, L, e.reportAllChanges), g(() => {
										a.value = performance.now() - n.timeStamp, r(!0)
									})
								})), n && S(["soft-navigation"], n => {
									n.forEach(n => {
										i.u && n.navigationId && b(i.u, n);
										const o = Math.max((n.presentationTime || n.paintTime || 0) - n.startTime, 0);
										a = T("FCP", o, "soft-navigation", n.navigationId, n.interactionId, n.name, n.startTime), r = u(t, a, L, e.reportAllChanges), r(!0)
									})
								}, e)
							})
						},
						C = [.1, .25],
						x = t => t.find(t => 1 === t.node?.nodeType) || t[0];
					let N = 0,
						A = 1 / 0,
						D = 0;
					const O = t => {
						for (const e of t) e.interactionId && (A = Math.min(A, e.interactionId), D = Math.max(D, e.interactionId), N = D ? (D - A) / 7 + 1 : 0)
					};
					let k;
					const R = () => k ? N : performance.interactionCount ?? 0;
					let B = 0;
					class j {
						h = [];
						p = new Map;
						v;
						m;
						T() {
							B = R(), this.h.length = 0, this.p.clear()
						}
						M(t) {
							const e = R() - B,
								n = Math.min(this.h.length - 1, Math.floor(e / 50));
							return !e || -1 !== n || "soft-navigation" !== t && "back-forward-cache" !== t ? this.h[n] : {
								D: 8,
								id: -1,
								entries: []
							}
						}
						l(t) {
							if (this.v?.(t), !t.interactionId && "first-input" !== t.entryType) return;
							const e = this.h.at(-1);
							let n = this.p.get(t.interactionId);
							if (n || this.h.length < 10 || t.duration > e.D) {
								if (n ? t.duration > n.D ? (n.entries = [t], n.D = t.duration) : t.duration === n.D && t.startTime === n.entries[0].startTime && n.entries.push(t) : (n = {
										id: t.interactionId,
										entries: [t],
										D: t.duration
									}, this.p.set(n.id, n), this.h.push(n)), this.h.sort((t, e) => e.D - t.D), this.h.length > 10) {
									const t = this.h.splice(10);
									for (const e of t) this.p.delete(e.id)
								}
								this.m?.(n)
							}
						}
					}
					const F = t => {
							const e = "requestIdleCallback" in globalThis ? 1e3 : 0,
								n = globalThis.requestIdleCallback || setTimeout,
								i = globalThis.cancelIdleCallback || clearTimeout;
							if ("hidden" === document.visibilityState) t();
							else {
								const o = E(t);
								let r = -1;
								const a = () => {
									i(r), o()
								};
								addEventListener("visibilitychange", a, {
									once: !0,
									capture: !0
								}), r = n(() => {
									removeEventListener("visibilitychange", a, {
										capture: !0
									}), o()
								}, {
									timeout: e
								})
							}
						},
						_ = [200, 500];
					class H {
						v;
						u;
						l(t) {
							this.v?.(t)
						}
					}
					const U = [2500, 4e3];
					let V = 50;
					const q = [];
					S(["resource"], t => {
						for (const e of t) q.push(e), q.length > V && q.shift()
					});
					const W = [800, 1800],
						$ = t => {
							document.prerendering ? P(() => $(t)) : "complete" !== document.readyState ? addEventListener("load", () => $(t), !0) : setTimeout(t)
						};
					t.CLSThresholds = C, t.FCPThresholds = L, t.INPThresholds = _, t.LCPThresholds = U, t.TTFBThresholds = W, t.onCLS = (t, n = {}) => {
						const o = s(n = Object.assign({}, n), e),
							a = new WeakMap;
						o.t = t => {
							if (t?.sources?.length) {
								const e = x(t.sources),
									i = e?.node;
								if (i) {
									const t = n.generateTarget?.(i) ?? r(i);
									a.set(e, t)
								}
							}
						}, ((t, n = {}) => {
							const i = h();
							M(E(() => {
								let o, r = T("CLS", 0);
								const a = s(n, e),
									c = (e, i, s, c, l) => {
										r = T("CLS", 0, e, i, s, c, l), a.o = 0, o = u(t, r, C, n.reportAllChanges)
									},
									p = (t = !1) => {
										a.o > r.value && (r.value = a.o, r.entries = a.i), o(t)
									},
									f = t => {
										p(!0), c("soft-navigation", t.navigationId, t.interactionId, t.name, t.startTime)
									},
									v = t => {
										for (const e of t) "soft-navigation" !== e.entryType ? a.l(e) : f(e);
										p()
									},
									m = ["layout-shift"];
								w(n) && m.push("soft-navigation");
								const y = S(m, v);
								y && (o = u(t, r, C, n.reportAllChanges), i.onHidden(() => {
									v(y.takeRecords()), o(!0)
								}), d(() => {
									c("back-forward-cache", r.navigationId, r.navigationInteractionId, r.navigationURL, l()), g(o)
								}), setTimeout(o))
							}))
						})(e => {
							t((t => {
								let e = {};
								if (t.entries.length) {
									const n = t.entries.reduce((t, e) => t.value > e.value ? t : e);
									if (n?.sources?.length) {
										const t = x(n.sources);
										t && (e = {
											largestShiftTarget: a.get(t),
											largestShiftTime: n.startTime,
											largestShiftValue: n.value,
											largestShiftSource: t,
											largestShiftEntry: n,
											loadState: i(n.startTime)
										})
									}
								}
								return Object.assign(t, {
									attribution: e
								})
							})(e))
						}, n)
					}, t.onFCP = (t, e = {}) => {
						const o = s(e = Object.assign({}, e), I);
						w(e) && (o.u = new Map), M(e => {
							t((t => {
								let e = {
									timeToFirstByte: 0,
									firstByteToFCP: t.value,
									loadState: i(l())
								};
								if ("soft-navigation" !== t.navigationType) {
									if (t.entries.length) {
										const o = n(),
											r = t.entries.at(-1);
										if (o) {
											const n = o.responseStart,
												a = o.activationStart || 0,
												s = Math.max(0, n - a);
											e = {
												timeToFirstByte: s,
												firstByteToFCP: t.value - s,
												loadState: i(t.entries[0].startTime),
												navigationEntry: o,
												fcpEntry: r
											}
										}
									}
								} else {
									const n = o.u?.get(t.navigationId);
									n && (e = {
										timeToFirstByte: 0,
										firstByteToFCP: t.value,
										loadState: "complete",
										navigationEntry: n
									})
								}
								return Object.assign(t, {
									attribution: e
								})
							})(e))
						}, e)
					}, t.onINP = (t, e = {}) => {
						const n = s(e = Object.assign({}, e), j);
						let o = [],
							a = [],
							c = 0;
						const g = new WeakMap,
							p = new WeakMap;
						let f = !1;
						const v = () => {
								f || (F(m), f = !0)
							},
							m = () => {
								const t = new Set(n.h.map(t => g.get(t.entries[0]))),
									e = a.length - 10;
								a = a.filter((n, i) => i >= e || t.has(n));
								const i = new Set;
								for (const t of a) {
									const e = y(t.startTime, t.processingEnd);
									for (const t of e) i.add(t)
								}
								o = o.filter(t => t.startTime > c || i.has(t)), f = !1
							};
						n.v = t => {
							const n = t.startTime + t.duration;
							let i;
							c = Math.max(c, t.processingEnd);
							for (let o = a.length - 1; o >= 0; o--) {
								const r = a[o];
								if (Math.abs(n - r.renderTime) <= 8) {
									i = r, i.startTime = Math.min(t.startTime, i.startTime), i.processingStart = Math.min(t.processingStart, i.processingStart), i.processingEnd = Math.max(t.processingEnd, i.processingEnd), e.includeProcessedEventEntries && i.entries.push(t);
									break
								}
							}
							i || (i = {
								startTime: t.startTime,
								processingStart: t.processingStart,
								processingEnd: t.processingEnd,
								renderTime: n,
								entries: e.includeProcessedEventEntries ? [t] : []
							}, a.push(i)), (t.interactionId || "first-input" === t.entryType) && g.set(t, i), v()
						}, n.m = t => {
							if (!p.get(t)) {
								const n = t.entries.find(t => t.target)?.target;
								if (n) {
									const i = e.generateTarget?.(n) ?? r(n);
									p.set(t, i)
								} else {
									const e = t.entries.find(t => t.targetSelector)?.targetSelector;
									e && p.set(t, e)
								}
							}
						};
						const y = (t, e) => {
							const n = [];
							for (const i of o)
								if (!(i.startTime + i.duration < t)) {
									if (i.startTime > e) break;
									n.push(i)
								} return n
						};
						S(["long-animation-frame"], t => {
							o = o.concat(t), v()
						}, e), ((t, e = {}) => {
							if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
							const n = h();
							P(() => {
								"interactionCount" in performance || k || (k = S(["event"], O, {
									durationThreshold: 0
								}));
								let i, o = T("INP");
								const r = s(e, j),
									a = (n, a, s, c, l) => {
										r.T(), o = T("INP", -1, n, a, s, c, l), i = u(t, o, _, e.reportAllChanges)
									},
									c = () => {
										const t = r.M(o.navigationType);
										t && t.D !== o.value && (o.value = t.D, o.entries = t.entries, i())
									},
									g = t => {
										c(), i(!0), a("soft-navigation", t.navigationId, t.interactionId, t.name, t.startTime)
									},
									p = (t, e = !1) => {
										F(() => {
											for (const e of t) "soft-navigation" !== e.entryType ? r.l(e) : g(e);
											c(), e && i(!0)
										})
									},
									f = ["event", "first-input"];
								w(e) && f.push("soft-navigation");
								const v = S(f, p, {
									...e,
									durationThreshold: e.durationThreshold ?? 40
								});
								i = u(t, o, _, e.reportAllChanges), v && (n.onHidden(() => {
									p(v.takeRecords(), !0)
								}), d(() => {
									a("back-forward-cache", o.navigationId, o.navigationInteractionId, o.navigationURL, l())
								}))
							})
						})(e => {
							t((t => {
								if (0 === t.entries.length) {
									const e = t.navigationStartTime || 0,
										n = {
											processedEventEntries: [],
											longAnimationFrameEntries: [],
											inputDelay: 0,
											processingDuration: 0,
											presentationDelay: t.value,
											loadState: i(e)
										};
									return Object.assign(t, {
										attribution: n
									})
								}
								const e = t.entries[0],
									o = g.get(e),
									r = o.processingStart,
									a = Math.max(e.startTime + e.duration, r),
									s = Math.min(o.processingEnd, a),
									c = o.entries.sort((t, e) => t.processingStart - e.processingStart),
									l = y(e.startTime, s),
									d = n.p.get(e.interactionId),
									u = {
										interactionTarget: p.get(d),
										interactionType: e.name.startsWith("key") ? "keyboard" : "pointer",
										interactionTime: e.startTime,
										nextPaintTime: a,
										processedEventEntries: c,
										longAnimationFrameEntries: l,
										inputDelay: r - e.startTime,
										processingDuration: s - r,
										presentationDelay: a - s,
										loadState: i(e.startTime),
										longestScript: void 0,
										totalScriptDuration: void 0,
										totalStyleAndLayoutDuration: void 0,
										totalPaintDuration: void 0,
										totalUnattributedDuration: void 0
									};
								return (t => {
									const e = t.interactionTime,
										n = t.nextPaintTime;
									if (!t.longAnimationFrameEntries?.length || !e || !n) return;
									const i = t.inputDelay,
										o = t.processingDuration;
									let r, a, s = 0,
										c = 0,
										l = 0,
										d = 0;
									for (const n of t.longAnimationFrameEntries) {
										c = c + n.startTime + n.duration - n.styleAndLayoutStart;
										for (const t of n.scripts) {
											const n = t.startTime + t.duration;
											if (n < e) continue;
											const l = n - Math.max(e, t.startTime),
												u = t.duration ? l / t.duration * t.forcedStyleAndLayoutDuration : 0;
											s += l - u, c += u, l > d && (a = t.startTime < e + i ? "input-delay" : t.startTime >= e + i + o ? "presentation-delay" : "processing-duration", r = t, d = l)
										}
									}
									const u = t.longAnimationFrameEntries.at(-1),
										g = u ? u.startTime + u.duration : 0;
									g >= e + i + o && (l = n - g), r && a && (t.longestScript = {
										entry: r,
										subpart: a,
										intersectingDuration: d
									}), t.totalScriptDuration = s, t.totalStyleAndLayoutDuration = c, t.totalPaintDuration = l, t.totalUnattributedDuration = n - e - s - c - l
								})(u), Object.assign(t, {
									attribution: u
								})
							})(e))
						}, e)
					}, t.onLCP = (t, e = {}) => {
						null != (e = Object.assign({}, e)).resourceBufferSize && (V = e.resourceBufferSize);
						const i = s(e, H),
							o = new WeakMap;
						w(e) && (i.u = new Map), i.v = t => {
							const n = t.element;
							if (n) {
								const i = e.generateTarget?.(n) ?? r(n);
								o.set(t, i)
							} else t.id && o.set(t, `#${t.id}`)
						}, ((t, e = {}) => {
							let n = !1;
							const i = w(e);
							P(() => {
								let o, r = h(),
									a = T("LCP");
								const c = s(e, H),
									f = (i, s, c, l, d) => {
										a = T("LCP", -1, i, s, c, l, d), o = u(t, a, U, e.reportAllChanges), n = !1, "soft-navigation" === i && (r = h(!0))
									},
									v = t => {
										c.u && t.navigationId && b(c.u, t), n || o(!0), f("soft-navigation", t.navigationId, t.interactionId, t.name, t.startTime);
										const e = t.getLargestInteractionContentfulPaint?.();
										e && m([e])
									},
									m = t => {
										e.reportAllChanges || i || (t = t.slice(-1));
										for (const e of t) {
											if (!e) continue;
											if ("soft-navigation" === e.entryType) {
												v(e);
												continue
											}
											let t = 0,
												n = [],
												i = e.startTime;
											if ("largest-contentful-paint" === e.entryType) t = Math.max(e.startTime - p(), 0), c.l(e), n = [e];
											else if ("interaction-contentful-paint" === e.entryType) {
												const o = e;
												if (!a.navigationId) continue;
												if ("interactionId" in o && o.interactionId != a.navigationInteractionId) continue;
												i = o.largestContentfulPaint?.renderTime || 0, t = Math.max(i - e.startTime, 0), o.largestContentfulPaint && (c.l(o.largestContentfulPaint), n = [o.largestContentfulPaint])
											}
											i < r.firstHiddenTime && (a.value = t, a.entries = n, o())
										}
									},
									y = ["largest-contentful-paint"];
								i && y.push("interaction-contentful-paint", "soft-navigation");
								const w = S(y, m);
								if (w) {
									o = u(t, a, U, e.reportAllChanges);
									const r = ["keydown", "click", "visibilitychange"],
										s = t => {
											if (t.isTrusted && !n) {
												const t = a.id;
												F(() => {
													if (!n) {
														if (!i) {
															w.disconnect();
															for (const t of r) removeEventListener(t, s, {
																capture: !0
															})
														}
														t === a.id && (n = !0, o(!0))
													}
												})
											}
										};
									for (const t of r) addEventListener(t, s, {
										capture: !0
									});
									d(i => {
										f("back-forward-cache", a.navigationId, a.navigationInteractionId, a.navigationURL, l()), o = u(t, a, U, e.reportAllChanges), g(() => {
											a.value = performance.now() - i.timeStamp, n = !0, o(!0)
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
										a = r.url && (q.findLast(t => t.name === r.url) || performance.getEntriesByType("resource").findLast(t => t.name === r.url));
									let s;
									e.target = o.get(r), e.lcpEntry = r, r.url && (e.url = r.url), a && (e.lcpResourceEntry = a);
									let c = 0,
										l = 0;
									if ("soft-navigation" !== t.navigationType ? (s = n(), c = s?.activationStart ?? 0, l = s?.responseStart ?? 0) : (c = t.navigationStartTime || 0, s = i.u?.get(t.navigationId)), s) {
										const n = Math.max(0, l - c),
											i = Math.max(n, a ? (a.requestStart || a.startTime) - c : 0),
											o = Math.min(t.value, Math.max(i, a ? a.responseEnd - c : 0));
										e = {
											...e,
											timeToFirstByte: n,
											resourceLoadDelay: i - n,
											resourceLoadDuration: o - i,
											elementRenderDelay: t.value - o,
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
							const i = w(e);
							let o = T("TTFB"),
								r = u(t, o, W, e.reportAllChanges);
							$(() => {
								const a = n();
								if (a) {
									const n = a.responseStart;
									o.value = Math.max(n - p(), 0), o.entries = [a], r(!0), d(() => {
										o = T("TTFB", 0, "back-forward-cache", o.navigationId, o.navigationInteractionId, o.navigationURL, l()), r = u(t, o, W, e.reportAllChanges), r(!0)
									}), i && S(["soft-navigation"], n => {
										n.forEach(n => {
											n.navigationId && (o = T("TTFB", 0, "soft-navigation", n.navigationId, n.interactionId, n.name, n.startTime), o.entries = [n], r = u(t, o, W, e.reportAllChanges), r(!0))
										})
									}, e)
								}
							})
						})(e => {
							t((t => {
								const e = t.entries[0];
								let n = {
									waitingDuration: 0,
									cacheDuration: 0,
									dnsDuration: 0,
									connectionDuration: 0,
									requestDuration: 0,
									navigationEntry: e
								};
								if (t.entries.length && e instanceof PerformanceNavigationTiming) {
									const i = e.activationStart || 0,
										o = Math.max((e.workerStart || e.fetchStart || 0) - i, 0),
										r = Math.max(e.domainLookupStart - i, 0),
										a = Math.max(e.connectStart - i, 0),
										s = Math.max(e.connectEnd - i, 0);
									n = {
										waitingDuration: o,
										cacheDuration: r - o,
										dnsDuration: a - r,
										connectionDuration: s - a,
										requestDuration: t.value - s,
										navigationEntry: e
									}
								}
								return Object.assign(t, {
									attribution: n
								})
							})(e))
						}, e)
					}
				}(e)
			},
			323: (t, e, n) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.sendObjectBeacon = function(t, e, n, o = !1, r = null) {
					let a = r || `/cdn-cgi/rum?${t}`,
						s = !0;
					if (navigator && "string" == typeof navigator.userAgent) try {
						const t = navigator.userAgent.match(/Chrome\/([0-9]+)/);
						t && t[0].toLowerCase().indexOf("chrome") > -1 && parseInt(t[1]) < 81 && (s = !1)
					} catch (t) {}
					if (navigator && "function" == typeof navigator.sendBeacon && s && o) {
						e.st = i.SendType.SendBeacon;
						const t = JSON.stringify(e),
							n = {
								type: "application/json"
							},
							o = navigator.sendBeacon && navigator.sendBeacon.bind(navigator);
						null == o || o(a, new Blob([t], n))
					} else {
						e.st = i.SendType.XHR;
						const t = JSON.stringify(e),
							o = new XMLHttpRequest;
						n && (o.onreadystatechange = function() {
							4 == this.readyState && 204 == this.status && n()
						}), o.open("POST", a, !0), o.setRequestHeader("content-type", "application/json"), o.send(t)
					}
				};
				const i = n(696)
			},
			458: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.uuidv4 = function() {
					return crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
						const e = 16 * Math.random() | 0;
						return ("x" === t ? e : 3 & e | 8).toString(16)
					})
				}
			},
			674: (t, e) => {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.timingsV2TargetKeys = e.timingsTargetKeys = void 0, e.buildTimingsObject = function(t, e, n) {
					for (const i of n) {
						const n = t[i];
						void 0 !== e && ("number" != typeof n && "string" != typeof n || (e[i] = n))
					}
				}, e.timingsTargetKeys = ["navigationStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domComplete", "loadEventStart", "loadEventEnd"], e.timingsV2TargetKeys = ["nextHopProtocol", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domInteractive", "domComplete", "loadEventStart", "loadEventEnd", "finalResponseHeadersStart", "firstInterimResponseStart", "transferSize", "decodedBodySize"]
			},
			696: (t, e) => {
				"use strict";
				var n, i, o, r, a;
				Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.NavigationType = e.SpaMonitoringType = e.FetchPriority = e.EventType = e.SendType = void 0,
					function(t) {
						t[t.SendBeacon = 1] = "SendBeacon", t[t.XHR = 2] = "XHR"
					}(n || (e.SendType = n = {})),
					function(t) {
						t[t.Load = 1] = "Load", t[t.Additional = 2] = "Additional", t[t.WebVitalsV2 = 3] = "WebVitalsV2"
					}(i || (e.EventType = i = {})),
					function(t) {
						t.High = "high", t.Low = "low", t.Auto = "auto"
					}(o || (e.FetchPriority = o = {})),
					function(t) {
						t[t.None = 0] = "None", t[t.HistoryAndNavigationAPI = 1] = "HistoryAndNavigationAPI", t[t.SoftNavigationHeuristics = 2] = "SoftNavigationHeuristics"
					}(r || (e.SpaMonitoringType = r = {})),
					function(t) {
						t.Navigate = "navigate", t.Reload = "reload", t.BackForward = "back-forward", t.BackForwardCache = "back-forward-cache", t.Prerender = "prerender", t.Restore = "restore", t.SoftNavigation = "soft-navigation", t.RoutingApis = "routing-apis"
					}(a || (e.NavigationType = a = {}))
			}
		},
		e = {};

	function n(i) {
		var o = e[i];
		if (void 0 !== o) return o.exports;
		var r = e[i] = {
			exports: {}
		};
		return t[i].call(r.exports, r, r.exports, n), r.exports
	}(() => {
		"use strict";
		const t = n(696),
			e = n(323),
			i = n(173),
			o = n(458),
			r = n(674),
			a = n(116);
		(() => {
			function n(t) {
				let e = "";
				if (e = window.location.origin ? window.location.origin : `${window.location.protocol}//${window.location.host}`, t && "string" == typeof t)
					if (0 === t.indexOf("/")) e += t;
					else try {
						return new URL(t).href
					} catch (t) {} else {
						const t = window.location.pathname;
						t && t.length > 0 && (e += t), window.location.search && (e += window.location.search)
					}
				return e
			}! function() {
				const s = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
					c = "data-cf-beacon",
					l = document.currentScript || ("function" == typeof document.querySelector ? document.querySelector(`script[${c}]`) : void 0),
					d = ["lcp", "cls", "fcp", "ttfb", "inp"];
				let u = (0, o.uuidv4)(),
					g = [],
					p = 0;
				const f = (t, e = {}) => {
					var n;
					const i = null !== (n = e.when) && void 0 !== n ? n : Math.ceil(s.now());
					!e.referrer && g[g.length - 1] && (e.referrer = g[g.length - 1].url), g.push({
						id: u,
						url: t,
						ts: i,
						referrer: "" !== e.referrer ? e.referrer : void 0,
						navigationType: e.navigationType
					}), g.length > 3 && g.shift()
				};
				f(document.location.href, {
					when: 0,
					referrer: document.referrer,
					navigationType: t.NavigationType.Navigate
				});
				let v = window.__cfBeacon ? window.__cfBeacon : {};
				if (v && "single" === v.load) return;
				if (l) {
					const t = l.getAttribute(c);
					if (t) try {
						v = Object.assign(Object.assign({}, v), JSON.parse(t))
					} catch (t) {} else {
						const t = l.getAttribute("src");
						if (t && "function" == typeof URLSearchParams) {
							const e = new URLSearchParams(t.replace(/^[^\?]+\??/, "")),
								n = e.get("token");
							n && (v.token = n), v.spa = e.get("spa")
						}
					}
					v && "multi" !== v.load && (v.load = "single"), window.__cfBeacon = v
				}
				if (!s || !v || !v.token) return;
				let m = n();
				const y = function(e) {
						let n = e;
						return null == n || "true" === n || !0 === n ? t.SpaMonitoringType.HistoryAndNavigationAPI : "false" === n || !1 === n ? t.SpaMonitoringType.None : ("string" == typeof n && (n = parseInt(n, 10)), "number" == typeof n && n >= t.SpaMonitoringType.None && n <= t.SpaMonitoringType.SoftNavigationHeuristics ? n : t.SpaMonitoringType.HistoryAndNavigationAPI)
					}(v.spa),
					h = y !== t.SpaMonitoringType.None;
				let T = null,
					S = null;
				const w = v.send && v.send.to ? v.send.to : void 0 === v.version ? "https://cloudflareinsights.com/cdn-cgi/rum" : null;
				let b, E = !1,
					I = !1;
				const P = {};

				function L(t) {
					var e, n, i, o, r, a;
					const s = window.location.pathname;
					if (!I) {
						const e = "string" == typeof(c = t.navigationType) && j.has(c) ? t.navigationType : void 0;
						e && function(t, e) {
							const n = k(t);
							n && (n.navigationType = e)
						}(u, e), I = !0
					}
					var c;
					let l;
					switch ("INP" !== t.name && (P[t.name.toLowerCase()] = {
							value: t.value,
							path: s
						}), t.name) {
						case "CLS":
							l = t.attribution, l && P.cls && (P.cls.element = l.largestShiftTarget, P.cls.currentRect = null === (e = l.largestShiftSource) || void 0 === e ? void 0 : e.currentRect, P.cls.previousRect = null === (n = l.largestShiftSource) || void 0 === n ? void 0 : n.previousRect);
							break;
						case "LCP":
							l = t.attribution, l && P.lcp && (P.lcp.element = l.target, P.lcp.size = null === (i = l.lcpEntry) || void 0 === i ? void 0 : i.size, P.lcp.url = l.url, P.lcp.rld = Math.ceil(l.resourceLoadDelay), P.lcp.rlt = Math.ceil(l.resourceLoadDuration), P.lcp.erd = Math.ceil(l.elementRenderDelay), P.lcp.it = null === (o = l.lcpResourceEntry) || void 0 === o ? void 0 : o.initiatorType, P.lcp.fp = null === (a = null === (r = l.lcpEntry) || void 0 === r ? void 0 : r.element) || void 0 === a ? void 0 : a.getAttribute("fetchpriority"));
							break;
						case "INP":
							(null == P.inp || Number(P.inp.value) < Number(t.value)) && (P.inp = {
								value: Number(t.value),
								path: s
							}, l = t.attribution, l && P.inp && (P.inp.element = l.interactionTarget, P.inp.name = l.interactionType, P.inp.idy = Math.ceil(l.inputDelay), P.inp.pdn = Math.ceil(l.processingDuration), P.inp.pdy = Math.ceil(l.presentationDelay)))
					}
				}
				"PerformanceObserver" in window && "function" == typeof PerformanceObserver && PerformanceObserver.supportedEntryTypes && ((0, i.onLCP)(L, {
					reportAllChanges: !0,
					reportSoftNavs: !0
				}), (0, i.onFCP)(L), (0, i.onINP)(L, {
					reportSoftNavs: !0
				}), (0, i.onTTFB)(L), PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("layout-shift") && (0, i.onCLS)(L, {
					reportAllChanges: !0,
					reportSoftNavs: !0
				})), document.addEventListener("visibilitychange", () => {
					if ("hidden" === document.visibilityState) {
						if (h && N()) {
							const t = n();
							(null == b ? void 0 : b.url) == t && (null == b ? void 0 : b.triggered) || M(), f(t)
						}!E && b && (E = !0, C())
					}
				});
				const M = i => {
						p++;
						let o = function(e) {
							const i = F(u) === t.NavigationType.RoutingApis || F(u) === t.NavigationType.SoftNavigation,
								o = !i,
								a = s.timing,
								c = e || n(),
								l = Object.assign(Object.assign({}, H(t.EventType.Load, c)), {
									memory: {},
									timings: {},
									firstPaint: 0,
									firstContentfulPaint: 0,
									versions: {
										fl: v ? v.version : "",
										js: "2026.6.0-17-gafa3",
										timings: 1
									}
								});
							if (o) {
								if ("function" == typeof s.getEntriesByType) {
									const t = s.getEntriesByType("navigation");
									if (t && Array.isArray(t) && t.length > 0) {
										l.timingsV2 = {}, l.versions.timings = 2, delete l.timings, t[0].deliveryType && (l.dt = t[0].deliveryType);
										const e = t[0];
										(0, r.buildTimingsObject)(e, l.timingsV2, r.timingsV2TargetKeys)
									}
								}
								if (1 === l.versions.timings) {
									const t = a;
									l.timings && (0, r.buildTimingsObject)(t, l.timings, r.timingsTargetKeys)
								}
								s.memory ? function(t, e) {
									for (const n in t) {
										const i = t[n];
										void 0 !== e && ("number" != typeof i && "string" != typeof i || (e[n] = i))
									}
								}(s.memory, l.memory) : delete l.memory, l.firstPaint = U("first-paint"), l.firstContentfulPaint = U("first-contentful-paint")
							}
							return v && (v.icTag && (l.icTag = v.icTag), l.siteToken = v.token), i && (delete l.timings, delete l.timingsV2, delete l.memory, delete l.firstPaint, delete l.firstContentfulPaint, delete l.serverTimings), l
						}(i);
						o && v && v && ((0, e.sendObjectBeacon)("", o, () => {}, !1, w), void 0 !== v.forward && void 0 !== v.forward.url && (0, e.sendObjectBeacon)("", o, () => {}, !1, v.forward.url))
					},
					C = n => {
						let i = function(e) {
							const n = Object.assign({}, H(t.EventType.WebVitalsV2, e));
							return v && (v.version && (n.versions.fl = v.version), v.icTag && (n.icTag = v.icTag), n.siteToken = v.token), P && d.forEach(t => {
								P[t] && void 0 !== P[t].value && (n[t] = P[t], n[t] && n[t].value && (n[t].value = Math.ceil(n[t].value)))
							}), n
						}(n);
						d.forEach(t => {
							delete P[t]
						}), v && (0, e.sendObjectBeacon)("", i, () => {}, !0, w)
					},
					x = () => {
						const t = window.__cfRl && window.__cfRl.done || window.__cfQR && window.__cfQR.done;
						t ? t.then(M) : M(), b = {
							id: u,
							url: n(),
							ts: (new Date).getTime(),
							triggered: !0
						}
					};
				"complete" === window.document.readyState ? x() : window.addEventListener("load", () => {
					window.setTimeout(x)
				});
				const N = () => h && 0 === g.filter(t => t.id === u).length;

				function A() {
					u = (0, o.uuidv4)()
				}
				var D, O;

				function k(t) {
					for (let e = g.length - 1; e >= 0; e--)
						if (g[e].id === t) return g[e]
				}

				function R(t) {
					var e;
					if (t) {
						let n = null === (e = k(t)) || void 0 === e ? void 0 : e.ts;
						if (n) return Math.ceil(s.timeOrigin) + n
					}
					return Math.ceil(s.timeOrigin)
				}

				function B(t) {
					var e;
					return null === (e = k(t)) || void 0 === e ? void 0 : e.referrer
				}
				h && (y === t.SpaMonitoringType.SoftNavigationHeuristics && (T = function() {
					var e, n;
					if (!("PerformanceObserver" in window && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes && PerformanceObserver.supportedEntryTypes.includes("soft-navigation"))) return null;
					if ("function" != typeof(null === (n = null === (e = window.PerformanceSoftNavigation) || void 0 === e ? void 0 : e.prototype) || void 0 === n ? void 0 : n.getLargestInteractionContentfulPaint)) return null;
					const i = new PerformanceObserver(e => {
						for (const n of e.getEntries()) C(m), A(), m = n.name, f(n.name, {
							navigationType: t.NavigationType.SoftNavigation,
							when: n.startTime
						}), M(n.name)
					});
					if (!i || "function" != typeof i.observe) return null;
					try {
						i.observe({
							type: "soft-navigation",
							buffered: !0
						})
					} catch (t) {
						return null
					}
					return i
				}()), T || y !== t.SpaMonitoringType.HistoryAndNavigationAPI && y !== t.SpaMonitoringType.SoftNavigationHeuristics || (S = function() {
					if (!("navigation" in window) || !window.navigation) return null;
					let e = function(e) {
						var n, i;
						e.canIntercept && (C(m), !e.destination || "boolean" != typeof e.destination.sameDocument || e.destination.sameDocument ? (A(), m = null !== (i = null === (n = null == e ? void 0 : e.destination) || void 0 === n ? void 0 : n.url) && void 0 !== i ? i : m, f(m, {
							navigationType: t.NavigationType.RoutingApis
						}), M(m)) : E = !0)
					};
					return window.navigation.addEventListener("navigate", e), e
				}(), S || (D = window.history, (O = D.pushState) && (D.pushState = function(e, i, o) {
					const r = n(o);
					return m != r && (C(m), A(), f(r, {
						navigationType: t.NavigationType.RoutingApis
					}), M(r), m = r), O.apply(D, [e, i, o])
				}, window.addEventListener("popstate", function(e) {
					m != n() && (C(m), A(), m = n(), f(m, {
						navigationType: t.NavigationType.RoutingApis
					}), M(m))
				})))));
				const j = new Set(Object.keys(t.NavigationType).map(e => t.NavigationType[e]));

				function F(t) {
					var e;
					return null === (e = k(t)) || void 0 === e ? void 0 : e.navigationType
				}

				function _() {
					if (!v || !v.serverTiming) return;
					let t = [];
					for (const e of ["navigation", "resource"])
						for (const n of s.getEntriesByType(e)) {
							const {
								name: i,
								serverTiming: o
							} = n;
							if (o) {
								if ("resource" === e) {
									const t = v.serverTiming.location_startswith;
									if (!t || !Array.isArray(t)) continue;
									let e = !1;
									for (const n of t)
										if (i.startsWith(n)) {
											e = !0;
											break
										} if (!e) continue
								}
								for (const {
										name: n,
										description: r,
										duration: a
									}
									of o)
									if (v.serverTiming.name && v.serverTiming.name[n]) try {
										const o = new URL(i);
										t.push({
											location: "resource" === e ? `${o.origin}${o.pathname}` : void 0,
											name: n,
											dur: a,
											desc: r
										})
									} catch (t) {}
							}
						}
					return t
				}

				function H(e, i) {
					const o = F(u),
						r = o === t.NavigationType.RoutingApis || o === t.NavigationType.SoftNavigation,
						s = {
							startTime: R(u),
							pageloadId: u,
							n: p > 1 ? p : void 0,
							eventType: e,
							nt: o,
							location: (0, a.cleanLocation)(i || n()) || "",
							referrer: (0, a.cleanLocation)(B(u)),
							serverTimings: r ? void 0 : _(),
							versions: {
								js: "2026.6.0-17-gafa3"
							}
						};
					return S && s.nt === t.NavigationType.RoutingApis && (s.ntapi = 1), s
				}

				function U(t) {
					var e;
					if ("first-contentful-paint" === t && P.fcp && P.fcp.value) return Math.ceil(P.fcp.value);
					if ("function" == typeof s.getEntriesByType) {
						const n = null === (e = s.getEntriesByType("paint")) || void 0 === e ? void 0 : e.filter(e => e.name === t)[0];
						return n ? Math.ceil(n.startTime) : 0
					}
					return 0
				}
			}()
		})()
	})()
})();