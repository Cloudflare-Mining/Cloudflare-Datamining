(() => {
	"use strict";

	function t() {
		return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0
	}
	var e, n, i, o, r;

	function a(t, n, i, o = !1, r = null) {
		let a = r || `/cdn-cgi/rum?${t}`,
			s = !0;
		if (navigator && "string" == typeof navigator.userAgent) try {
			const t = navigator.userAgent.match(/Chrome\/([0-9]+)/);
			t && t[0].toLowerCase().indexOf("chrome") > -1 && parseInt(t[1]) < 81 && (s = !1)
		} catch (t) {}
		if (navigator && "function" == typeof navigator.sendBeacon && s && o) {
			n.st = e.SendBeacon;
			const t = JSON.stringify(n),
				i = {
					type: "application/json"
				},
				o = navigator.sendBeacon && navigator.sendBeacon.bind(navigator);
			null == o || o(a, new Blob([t], i))
		} else {
			n.st = e.XHR;
			const t = JSON.stringify(n),
				o = new XMLHttpRequest;
			i && (o.onreadystatechange = function() {
				4 == this.readyState && 204 == this.status && i()
			}), o.open("POST", a, !0), o.setRequestHeader("content-type", "application/json"), o.send(t)
		}
	}
	"function" != typeof Array.prototype.findLast && Object.defineProperty(Array.prototype, "findLast", {
			value: function(t, e) {
				for (let n = this.length - 1; n >= 0; n--)
					if (t.call(e, this[n], n, this)) return this[n]
			},
			writable: !0,
			configurable: !0,
			enumerable: !1
		}), "function" != typeof Array.prototype.at && Object.defineProperty(Array.prototype, "at", {
			value: function(t) {
				const e = Math.trunc(t) || 0,
					n = e >= 0 ? e : this.length + e;
				if (!(n < 0 || n >= this.length)) return this[n]
			},
			writable: !0,
			configurable: !0,
			enumerable: !1
		}), "function" != typeof Array.prototype.includes && Object.defineProperty(Array.prototype, "includes", {
			value: function(t, e = 0) {
				let n = Math.trunc(e) || 0;
				for (n < 0 && (n = Math.max(this.length + n, 0)); n < this.length; n++) {
					const e = this[n];
					if (e === t || e != e && t != t) return !0
				}
				return !1
			},
			writable: !0,
			configurable: !0,
			enumerable: !1
		}),
		function() {
			const e = t();
			e && void 0 === e.globalThis && Object.defineProperty(e, "globalThis", {
				value: e,
				writable: !0,
				configurable: !0
			})
		}(),
		function() {
			const e = t();
			e && "function" != typeof e.queueMicrotask && Object.defineProperty(e, "queueMicrotask", {
				value: function(t) {
					Promise.resolve().then(t).catch(t => {
						setTimeout(() => {
							throw t
						}, 0)
					})
				},
				writable: !0,
				configurable: !0
			})
		}(),
		function(t) {
			t[t.SendBeacon = 1] = "SendBeacon", t[t.XHR = 2] = "XHR"
		}(e || (e = {})),
		function(t) {
			t[t.Load = 1] = "Load", t[t.Additional = 2] = "Additional", t[t.WebVitalsV2 = 3] = "WebVitalsV2"
		}(n || (n = {})),
		function(t) {
			t.High = "high", t.Low = "low", t.Auto = "auto"
		}(i || (i = {})),
		function(t) {
			t[t.None = 0] = "None", t[t.HistoryAndNavigationAPI = 1] = "HistoryAndNavigationAPI", t[t.SoftNavigationHeuristics = 2] = "SoftNavigationHeuristics"
		}(o || (o = {})),
		function(t) {
			t.Navigate = "navigate", t.Reload = "reload", t.BackForward = "back-forward", t.BackForwardCache = "back-forward-cache", t.Prerender = "prerender", t.Restore = "restore", t.SoftNavigation = "soft-navigation", t.RoutingApis = "routing-apis"
		}(r || (r = {}));
	class s {
		constructor() {
			this.o = 0, this.i = []
		}
		l(t) {
			var e;
			if (t.hadRecentInput) return;
			const n = this.i[0],
				i = this.i.at(-1);
			this.o && n && i && t.startTime - i.startTime < 1e3 && t.startTime - n.startTime < 5e3 ? (this.o += t.value, this.i.push(t)) : (this.o = t.value, this.i = [t]), null === (e = this.t) || void 0 === e || e.call(this, t)
		}
	}
	const c = () => {
			const t = performance.getEntriesByType("navigation")[0];
			if (t && t.responseStart > 0 && t.responseStart < performance.now()) return t
		},
		l = t => {
			if ("loading" === document.readyState) return "loading";
			const e = c();
			if (e) {
				if (t < e.domInteractive) return "loading";
				if (0 === e.domContentLoadedEventStart || t < e.domContentLoadedEventStart) return "dom-interactive";
				if (0 === e.domComplete || t < e.domComplete) return "dom-content-loaded"
			}
			return "complete"
		},
		d = t => {
			const e = t.nodeName;
			return 1 === t.nodeType ? e.toLowerCase() : e.toUpperCase().replace(/^#/, "")
		},
		u = t => {
			var e;
			let n = "";
			try {
				for (; 9 !== (null == t ? void 0 : t.nodeType);) {
					const i = t,
						o = i.id ? "#" + i.id : [d(i), ...Array.from(null !== (e = i.classList) && void 0 !== e ? e : []).sort()].join(".");
					if (n.length + o.length > 99) return n || o;
					if (n = n ? o + ">" + n : o, i.id) break;
					t = i.parentNode
				}
			} catch (t) {}
			return n
		},
		f = new WeakMap;

	function v(t, e) {
		let n = f.get(e);
		return n || (n = new WeakMap, f.set(e, n)), n.get(t) || n.set(t, new e), n.get(t)
	}
	let g = -1;
	const p = () => g,
		m = t => {
			addEventListener("pageshow", e => {
				e.persisted && (g = e.timeStamp, t(e))
			}, !0)
		},
		h = (t, e, n, i) => {
			let o, r;
			return a => {
				e.value >= 0 && (a || i) && (r = e.value - (null != o ? o : 0), (r || void 0 === o) && (o = e.value, e.delta = r, e.rating = ((t, e) => t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good")(e.value, n), t(e)))
			}
		},
		y = t => {
			requestAnimationFrame(() => requestAnimationFrame(() => t()))
		},
		w = () => {
			var t, e;
			return null !== (e = null === (t = c()) || void 0 === t ? void 0 : t.activationStart) && void 0 !== e ? e : 0
		};
	let T = -1;
	const b = new Set,
		S = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
		E = t => {
			if ("hidden" === document.visibilityState) {
				if ("visibilitychange" === t.type)
					for (const t of b) t();
				isFinite(T) || (T = "visibilitychange" === t.type ? t.timeStamp : 0, removeEventListener("prerenderingchange", E, !0))
			}
		},
		x = (t = !1) => {
			var e;
			if (t && (T = 1 / 0), T < 0) {
				const t = w(),
					n = document.prerendering || null === (e = globalThis.performance.getEntriesByType("visibility-state").find(e => "hidden" === e.name && e.startTime >= t)) || void 0 === e ? void 0 : e.startTime;
				T = null != n ? n : S(), addEventListener("visibilitychange", E, !0), addEventListener("prerenderingchange", E, !0), m(() => {
					setTimeout(() => {
						T = S()
					})
				})
			}
			return {
				get firstHiddenTime() {
					return T
				},
				onHidden(t) {
					b.add(t)
				}
			}
		},
		_ = (t, e = -1, n, i = 0, o, r, a) => {
			const s = c(),
				l = (null == s ? void 0 : s.navigationId) || 0;
			let d = "navigate";
			return n ? d = n : p() >= 0 ? d = "back-forward-cache" : s && (document.prerendering || w() > 0 ? d = "prerender" : document.wasDiscarded ? d = "restore" : s.type && (d = s.type.replace(/_/g, "-"))), {
				name: t,
				value: e,
				rating: "good",
				delta: 0,
				entries: [],
				id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
				navigationType: d,
				navigationId: i || l,
				navigationInteractionId: o,
				navigationURL: r || (null == s ? void 0 : s.name),
				navigationStartTime: a || 0
			}
		},
		I = (t, e, n = {}) => {
			try {
				const i = t.filter(t => PerformanceObserver.supportedEntryTypes.includes(t));
				if (i.length > 0) {
					const t = new PerformanceObserver(t => {
						queueMicrotask(() => {
							const n = t.getEntries();
							i.length > 1 && n.sort((t, e) => t.startTime + t.duration - (e.startTime + e.duration)), e(n)
						})
					});
					for (const e of i) t.observe(Object.assign({
						type: e,
						buffered: !0
					}, n));
					return t
				}
			} catch (t) {}
		},
		A = t => {
			var e, n, i, o;
			return (null === (n = null === (e = globalThis.PerformanceObserver) || void 0 === e ? void 0 : e.supportedEntryTypes) || void 0 === n ? void 0 : n.includes("soft-navigation")) && "function" == typeof(null === (o = null === (i = globalThis.PerformanceSoftNavigation) || void 0 === i ? void 0 : i.prototype) || void 0 === o ? void 0 : o.getLargestInteractionContentfulPaint) && t && t.reportSoftNavs
		},
		O = (t, e) => {
			if (t.set(e.navigationId, e), t.size > 2) {
				const e = t.keys().next().value;
				void 0 !== e && t.delete(e)
			}
		},
		P = t => {
			let e = !1;
			return () => {
				e || (t(), e = !0)
			}
		};
	class C {}
	const B = t => {
			document.prerendering ? addEventListener("prerenderingchange", t, !0) : t()
		},
		L = [1800, 3e3],
		k = (t, e = {}) => {
			const n = A(e);
			B(() => {
				const i = v(e, C),
					o = x();
				let r, a = _("FCP");
				const s = I(["paint"], t => {
					for (const e of t) "first-contentful-paint" === e.name && (s.disconnect(), e.startTime < o.firstHiddenTime && (a.value = Math.max(e.startTime - w(), 0), a.entries.push(e), a.navigationId = e.navigationId || a.navigationId, r(!0)))
				});
				s && (r = h(t, a, L, e.reportAllChanges), m(n => {
					a = _("FCP", -1, "back-forward-cache", a.navigationId, a.navigationInteractionId, a.navigationURL, p()), r = h(t, a, L, e.reportAllChanges), y(() => {
						a.value = performance.now() - n.timeStamp, r(!0)
					})
				})), n && I(["soft-navigation"], n => {
					n.forEach(n => {
						i.u && n.navigationId && O(i.u, n);
						const o = Math.max((n.presentationTime || n.paintTime || 0) - n.startTime, 0);
						a = _("FCP", o, "soft-navigation", n.navigationId, n.interactionId, n.name, n.startTime), r = h(t, a, L, e.reportAllChanges), r(!0)
					})
				}, e)
			})
		},
		M = [.1, .25],
		D = t => t.find(t => {
			var e;
			return 1 === (null === (e = t.node) || void 0 === e ? void 0 : e.nodeType)
		}) || t[0];
	let R = 0,
		N = 1 / 0,
		j = 0;
	const F = t => {
		for (const e of t) e.interactionId && (N = Math.min(N, e.interactionId), j = Math.max(j, e.interactionId), R = j ? (j - N) / 7 + 1 : 0)
	};
	let H;
	const U = () => {
		var t;
		return H ? R : null !== (t = performance.interactionCount) && void 0 !== t ? t : 0
	};
	class V {
		constructor() {
			this.h = 0, this.v = [], this.p = new Map
		}
		T() {
			return U() - this.h
		}
		D() {
			this.h = U(), this.v.length = 0, this.p.clear()
		}
		S(t) {
			const e = this.T(),
				n = Math.min(this.v.length - 1, Math.floor(e / 50));
			return !e || -1 !== n || "soft-navigation" !== t && "back-forward-cache" !== t ? this.v[n] : {
				k: 8,
				id: -1,
				entries: []
			}
		}
		l(t) {
			var e, n;
			if (null === (e = this.m) || void 0 === e || e.call(this, t), !t.interactionId) return;
			const i = this.v.at(-1);
			let o = this.p.get(t.interactionId);
			if (o || this.v.length < 10 || t.duration > i.k) {
				if (o ? t.duration > o.k ? (o.entries = [t], o.k = t.duration) : t.duration === o.k && t.startTime === o.entries[0].startTime && o.entries.push(t) : (o = {
						id: t.interactionId,
						entries: [t],
						k: t.duration
					}, this.p.set(o.id, o), this.v.push(o)), this.v.sort((t, e) => e.k - t.k), this.v.length > 10) {
					const t = this.v.splice(10);
					for (const e of t) this.p.delete(e.id)
				}
				null === (n = this.M) || void 0 === n || n.call(this, o)
			}
		}
	}
	const q = t => {
			const e = "requestIdleCallback" in globalThis ? 1e3 : 0,
				n = globalThis.requestIdleCallback || setTimeout,
				i = globalThis.cancelIdleCallback || clearTimeout;
			if ("hidden" === document.visibilityState) t();
			else {
				const o = P(t);
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
		W = [200, 500],
		$ = (t, e = {}) => {
			const n = v(e = Object.assign({}, e), V);
			let i = [],
				o = [],
				r = 0;
			const a = new WeakMap,
				s = new WeakMap;
			let c = !1;
			const d = () => {
					c || (q(f), c = !0)
				},
				f = () => {
					const t = new Set(n.v.map(t => a.get(t.entries[0]))),
						e = o.length - 10;
					o = o.filter((n, i) => i >= e || t.has(n));
					const s = new Set;
					for (const t of o) {
						const e = g(t.startTime, t.processingEnd);
						for (const t of e) s.add(t)
					}
					const l = i.length - 10;
					i = i.filter((t, e) => s.has(t) || e >= l && t.startTime > r), c = !1
				};
			n.m = t => {
				const n = t.startTime + t.duration;
				let i;
				r = Math.max(r, t.processingEnd);
				for (let r = o.length - 1; r >= 0; r--) {
					const a = o[r];
					if (Math.abs(n - a.renderTime) <= 8) {
						i = a, i.startTime = Math.min(t.startTime, i.startTime), i.processingStart = Math.min(t.processingStart, i.processingStart), i.processingEnd = Math.max(t.processingEnd, i.processingEnd), e.includeProcessedEventEntries && i.entries.push(t);
						break
					}
				}
				i || (i = {
					startTime: t.startTime,
					processingStart: t.processingStart,
					processingEnd: t.processingEnd,
					renderTime: n,
					entries: e.includeProcessedEventEntries ? [t] : []
				}, o.push(i)), t.interactionId && a.set(t, i), d()
			}, n.M = t => {
				var n, i, o, r;
				if (!s.get(t)) {
					const a = null === (n = t.entries.find(t => t.target)) || void 0 === n ? void 0 : n.target;
					if (a) {
						const n = null !== (o = null === (i = e.generateTarget) || void 0 === i ? void 0 : i.call(e, a)) && void 0 !== o ? o : u(a);
						s.set(t, n)
					} else {
						const e = null === (r = t.entries.find(t => t.targetSelector)) || void 0 === r ? void 0 : r.targetSelector;
						e && s.set(t, e)
					}
				}
			};
			const g = (t, e) => {
				const n = [];
				for (const o of i)
					if (!(o.startTime + o.duration < t)) {
						if (o.startTime > e) break;
						n.push(o)
					} return n
			};
			I(["long-animation-frame"], t => {
				i = i.concat(t), d()
			}, e), ((t, e = {}) => {
				if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
				const n = x();
				B(() => {
					var i;
					"interactionCount" in performance || H || (H = I(["event"], F, {
						durationThreshold: 0
					}));
					let o, r = _("INP");
					const a = v(e, V),
						s = (n, i, s, c, l) => {
							a.D(), r = _("INP", -1, n, i, s, c, l), o = h(t, r, W, e.reportAllChanges)
						},
						c = () => {
							const t = a.S(r.navigationType);
							t && t.k !== r.value && (r.value = t.k, r.entries = t.entries, o())
						},
						l = t => {
							c(), o(!0), s("soft-navigation", t.navigationId, t.interactionId, t.name, t.startTime)
						},
						d = (t, e = !1) => {
							q(() => {
								for (const e of t) "soft-navigation" !== e.entryType ? a.l(e) : l(e);
								c(), e && o(!0)
							})
						},
						u = ["event", "first-input"];
					A(e) && u.push("soft-navigation");
					const f = I(u, d, Object.assign(Object.assign({}, e), {
						durationThreshold: null !== (i = e.durationThreshold) && void 0 !== i ? i : 40
					}));
					o = h(t, r, W, e.reportAllChanges), f && (n.onHidden(() => {
						d(f.takeRecords(), !0)
					}), m(() => {
						s("back-forward-cache", r.navigationId, r.navigationInteractionId, r.navigationURL, p())
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
								loadState: l(e)
							};
						return Object.assign(t, {
							attribution: n
						})
					}
					const e = t.entries[0],
						i = a.get(e),
						o = Math.max(i.processingStart, e.startTime),
						r = Math.max(e.startTime + e.duration, o),
						c = Math.min(i.processingEnd, r),
						d = i.entries.sort((t, e) => t.processingStart - e.processingStart),
						u = g(e.startTime, c),
						f = n.p.get(e.interactionId),
						v = {
							interactionTarget: s.get(f),
							interactionType: e.name.startsWith("key") ? "keyboard" : "pointer",
							interactionTime: e.startTime,
							nextPaintTime: r,
							processedEventEntries: d,
							longAnimationFrameEntries: u,
							inputDelay: o - e.startTime,
							processingDuration: c - o,
							presentationDelay: r - c,
							loadState: l(e.startTime),
							longestScript: void 0,
							totalScriptDuration: void 0,
							totalStyleAndLayoutDuration: void 0,
							totalPaintDuration: void 0,
							totalUnattributedDuration: void 0
						};
					return (t => {
						var e;
						const n = t.interactionTime,
							i = t.nextPaintTime;
						if (!(null === (e = t.longAnimationFrameEntries) || void 0 === e ? void 0 : e.length) || !n || !i) return;
						const o = t.inputDelay,
							r = t.processingDuration;
						let a, s, c = 0,
							l = 0,
							d = 0,
							u = 0;
						for (const e of t.longAnimationFrameEntries) {
							l = l + e.startTime + e.duration - e.styleAndLayoutStart;
							for (const t of e.scripts) {
								const e = t.startTime + t.duration;
								if (e < n) continue;
								const i = e - Math.max(n, t.startTime),
									d = t.duration ? i / t.duration * t.forcedStyleAndLayoutDuration : 0;
								c += i - d, l += d, i > u && (s = t.startTime < n + o ? "input-delay" : t.startTime >= n + o + r ? "presentation-delay" : "processing-duration", a = t, u = i)
							}
						}
						const f = t.longAnimationFrameEntries.at(-1),
							v = f ? f.startTime + f.duration : 0;
						v >= n + o + r && (d = i - v), a && s && (t.longestScript = {
							entry: a,
							subpart: s,
							intersectingDuration: u
						}), t.totalScriptDuration = c, t.totalStyleAndLayoutDuration = l, t.totalPaintDuration = d, t.totalUnattributedDuration = i - n - c - l - d
					})(v), Object.assign(t, {
						attribution: v
					})
				})(e))
			}, e)
		};
	class z {
		l(t) {
			var e;
			null === (e = this.m) || void 0 === e || e.call(this, t)
		}
	}
	const J = [2500, 4e3];
	let X = 50;
	const K = [];
	I(["resource"], t => {
		for (const e of t) K.push(e), K.length > X && K.shift()
	});
	const G = (t, e = {}) => {
			null != (e = Object.assign({}, e)).resourceBufferSize && (X = e.resourceBufferSize);
			const n = v(e, z),
				i = new WeakMap;
			A(e) && (n.u = new Map), n.m = t => {
				var n, o;
				const r = t.element;
				if (r) {
					const a = null !== (o = null === (n = e.generateTarget) || void 0 === n ? void 0 : n.call(e, r)) && void 0 !== o ? o : u(r);
					i.set(t, a)
				} else t.id && i.set(t, `#${t.id}`)
			}, ((t, e = {}) => {
				let n = !1;
				const i = A(e);
				B(() => {
					let o, r = x(),
						a = _("LCP");
					const s = v(e, z),
						c = (i, s, c, l, d) => {
							a = _("LCP", -1, i, s, c, l, d), o = h(t, a, J, e.reportAllChanges), n = !1, "soft-navigation" === i && (r = x(!0))
						},
						l = t => {
							var e;
							s.u && t.navigationId && O(s.u, t), n || o(!0), c("soft-navigation", t.navigationId, t.interactionId, t.name, t.startTime);
							const i = null === (e = t.getLargestInteractionContentfulPaint) || void 0 === e ? void 0 : e.call(t);
							i && d([i])
						},
						d = t => {
							var n;
							e.reportAllChanges || i || (t = t.slice(-1));
							for (const e of t) {
								if (!e) continue;
								if ("soft-navigation" === e.entryType) {
									l(e);
									continue
								}
								let t = 0,
									i = [],
									c = e.startTime;
								if ("largest-contentful-paint" === e.entryType) t = Math.max(e.startTime - w(), 0), s.l(e), i = [e];
								else if ("interaction-contentful-paint" === e.entryType) {
									const o = e;
									if (!a.navigationId) continue;
									if ("interactionId" in o && o.interactionId != a.navigationInteractionId) continue;
									c = (null === (n = o.largestContentfulPaint) || void 0 === n ? void 0 : n.renderTime) || 0, t = Math.max(c - e.startTime, 0), o.largestContentfulPaint && (s.l(o.largestContentfulPaint), i = [o.largestContentfulPaint])
								}
								c < r.firstHiddenTime && (a.value = t, a.entries = i, o())
							}
						},
						u = ["largest-contentful-paint"];
					i && u.push("interaction-contentful-paint", "soft-navigation");
					const f = I(u, d);
					if (f) {
						o = h(t, a, J, e.reportAllChanges);
						const r = ["keydown", "click", "visibilitychange"],
							s = t => {
								if (t.isTrusted && !n) {
									const t = a.id;
									q(() => {
										if (!n) {
											if (!i) {
												f.disconnect();
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
						m(i => {
							c("back-forward-cache", a.navigationId, a.navigationInteractionId, a.navigationURL, p()), o = h(t, a, J, e.reportAllChanges), y(() => {
								a.value = performance.now() - i.timeStamp, n = !0, o(!0)
							})
						})
					}
				})
			})(e => {
				t((t => {
					var e, o, r;
					let a = {
						timeToFirstByte: 0,
						resourceLoadDelay: 0,
						resourceLoadDuration: 0,
						elementRenderDelay: t.value
					};
					if (t.entries.length) {
						const s = t.entries.at(-1),
							l = s.url && (K.findLast(t => t.name === s.url) || performance.getEntriesByType("resource").findLast(t => t.name === s.url));
						let d;
						a.target = i.get(s), a.lcpEntry = s, s.url && (a.url = s.url), l && (a.lcpResourceEntry = l);
						let u = 0,
							f = 0;
						if ("soft-navigation" !== t.navigationType ? (d = c(), u = null !== (e = null == d ? void 0 : d.activationStart) && void 0 !== e ? e : 0, f = null !== (o = null == d ? void 0 : d.responseStart) && void 0 !== o ? o : 0) : (u = t.navigationStartTime || 0, d = null === (r = n.u) || void 0 === r ? void 0 : r.get(t.navigationId)), d) {
							const e = Math.max(0, f - u),
								n = Math.max(e, l ? (l.requestStart || l.startTime) - u : 0),
								i = Math.min(t.value, Math.max(n, l ? l.responseEnd - u : 0));
							a = Object.assign(Object.assign({}, a), {
								timeToFirstByte: e,
								resourceLoadDelay: n - e,
								resourceLoadDuration: i - n,
								elementRenderDelay: t.value - i,
								navigationEntry: d
							})
						}
					}
					return Object.assign(t, {
						attribution: a
					})
				})(e))
			}, e)
		},
		Q = [800, 1800],
		Y = t => {
			document.prerendering ? B(() => Y(t)) : "complete" !== document.readyState ? addEventListener("load", () => Y(t), !0) : setTimeout(t)
		};

	function Z() {
		return crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
			const e = 16 * Math.random() | 0;
			return ("x" === t ? e : 3 & e | 8).toString(16)
		})
	}
	const tt = ["navigationStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "redirectStart", "redirectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domComplete", "loadEventStart", "loadEventEnd"],
		et = ["nextHopProtocol", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "redirectStart", "redirectEnd", "requestStart", "responseStart", "responseEnd", "domInteractive", "domComplete", "loadEventStart", "loadEventEnd", "finalResponseHeadersStart", "firstInterimResponseStart", "transferSize", "decodedBodySize"],
		nt = new Set(["secureConnectionStart", "redirectStart", "redirectEnd"]);

	function it(t, e, n, i) {
		if (void 0 !== e)
			for (const o of n) {
				const n = t[o];
				if ("number" == typeof n) {
					if (nt.has(o) && n <= i) continue;
					e[o] = Math.ceil(n)
				} else "string" == typeof n && (e[o] = n)
			}
	}

	function ot(t) {
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

	function rt(t) {
		let e = "";
		if (e = window.location.origin ? window.location.origin : `${window.location.protocol}//${window.location.host}`, t && "string" == typeof t)
			if (0 === t.indexOf("/")) e += t;
			else try {
				return new URL(t).href
			} catch (t) {
				return e
			} else {
				const t = window.location.pathname;
				t && t.length > 0 && (e += t), window.location.search && (e += window.location.search)
			}
		return e
	}
	const at = new Set(Object.keys(r).map(t => r[t]));
	! function() {
		var t, e;
		const i = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
			d = "data-cf-beacon",
			f = document.currentScript || ("function" == typeof document.querySelector ? document.querySelector(`script[${d}]`) : void 0),
			g = ["lcp", "cls", "fcp", "ttfb", "inp"];
		let T = Z(),
			b = [],
			S = 0;
		const E = (t, e = {}) => {
			var n;
			const o = null !== (n = e.when) && void 0 !== n ? n : Math.ceil(i.now());
			!e.referrer && b[b.length - 1] && (e.referrer = b[b.length - 1].url), b.push({
				id: T,
				url: t,
				ts: o,
				referrer: "" !== e.referrer ? e.referrer : void 0,
				navigationType: e.navigationType
			}), b.length > 3 && b.shift()
		};
		if (E(document.location.href, {
				when: 0,
				referrer: document.referrer,
				navigationType: r.Navigate
			}), window.__cfBeacon && "single" === window.__cfBeacon.load) return;
		if (f) {
			const t = function(t, e) {
				let n = {};
				if (t && "function" == typeof URLSearchParams) {
					const e = t.replace(/^[^\?]+\??/, "");
					if ("" !== e) {
						const t = new URLSearchParams(e),
							i = t.get("token");
						null !== i && (n.token = i);
						const o = t.get("spa");
						null !== o && (n.spa = o)
					}
				}
				if (e) try {
					n = Object.assign(Object.assign({}, n), JSON.parse(e))
				} catch (t) {}
				return "multi" !== n.load && (n.load = "single"), n
			}(f.getAttribute("src"), f.getAttribute(d));
			window.__cfBeacon = Object.assign(Object.assign({}, t), window.__cfBeacon)
		}
		if (!i || !window.__cfBeacon || !window.__cfBeacon.token) return;
		let O = rt();
		const B = function() {
				let t = window.__cfBeacon.spa;
				return null == t || "true" === t || !0 === t ? o.HistoryAndNavigationAPI : "false" === t || !1 === t ? o.None : ("string" == typeof t && (t = parseInt(t, 10)), "number" == typeof t && t >= o.None && t <= o.SoftNavigationHeuristics ? Math.floor(t) : o.HistoryAndNavigationAPI)
			}(),
			L = B !== o.None;
		let R = null,
			N = null;
		const j = null !== (e = null === (t = window.__cfBeacon.send) || void 0 === t ? void 0 : t.to) && void 0 !== e ? e : void 0 === window.__cfBeacon.version ? "https://cloudflareinsights.com/cdn-cgi/rum" : null,
			F = /Chrome\/(\d+)/,
			H = /Chromium\/(\d+)/,
			U = /Firefox\/(\d+)/,
			V = /Version\/(\d+(?:\.\d+)?)/,
			q = /rv:(\d+)/,
			W = /AppleWebKit\/(\d+(?:\.\d+)?)/,
			z = /CPU (?:iPhone )?OS (\d+[._\d]*)/,
			J = /Mac OS X (\d+[._\d]*)/,
			X = /CriOS\/(\d+)/,
			K = /FxiOS\/(\d+)/;

		function nt(t, e) {
			const n = e.replace(/_/g, ".").split("."),
				i = parseInt(n[0], 10);
			return "Windows" === t ? i >= 13 ? "11" : i >= 1 ? "10" : n[0] : ("iOS" === t || "macOS" === t) && n.length >= 2 ? n[0] + "." + n[1] : n[0]
		}
		const st = function() {
			const t = {};
			if ("undefined" == typeof navigator || "string" != typeof navigator.userAgent) return t;
			const e = navigator.userAgent;
			if (-1 !== e.indexOf("Chrome/") || -1 !== e.indexOf("Chromium/")) {
				t.be = "Blink";
				const n = F.exec(e) || H.exec(e);
				n && (t.bev = n[1], t.bv = n[1])
			} else if (-1 !== e.indexOf("Firefox/") || -1 !== e.indexOf("Gecko/")) {
				t.be = "Gecko";
				const n = q.exec(e);
				n && (t.bev = n[1]);
				const i = U.exec(e);
				i && (t.bv = i[1]);
				const o = J.exec(e);
				o && (t.ov = nt("macOS", o[1]))
			} else if (-1 !== e.indexOf("Safari/") && -1 !== e.indexOf("AppleWebKit/")) {
				t.be = "WebKit";
				const n = W.exec(e);
				n && (t.bev = n[1]);
				const i = V.exec(e);
				i && (t.bv = i[1]);
				const o = -1 !== e.indexOf("CriOS/"),
					r = -1 !== e.indexOf("FxiOS/");
				if (o || r) {
					const n = o ? X.exec(e) : K.exec(e);
					n && (t.bv = n[1]);
					const i = z.exec(e);
					i && (t.ov = nt("iOS", i[1]))
				} else i && (t.ov = i[1])
			}
			return t
		}();
		! function(t) {
			try {
				"undefined" != typeof navigator && navigator.userAgentData && "function" == typeof navigator.userAgentData.getHighEntropyValues && navigator.userAgentData.getHighEntropyValues(["platformVersion"]).then(function(e) {
					var n;
					e.platformVersion && (t.ov = nt((null === (n = navigator.userAgentData) || void 0 === n ? void 0 : n.platform) || "", e.platformVersion))
				}).catch(function() {})
			} catch (t) {}
		}(st);
		let ct, lt = !1,
			dt = !1;
		const ut = {};

		function ft(t) {
			var e, n, i, o, r, a;
			const s = window.location.pathname;
			if (!dt) {
				const e = "string" == typeof(c = t.navigationType) && at.has(c) ? t.navigationType : void 0;
				e && function(t, e) {
					const n = Tt(t);
					n && (n.navigationType = e)
				}(T, e), dt = !0
			}
			var c;
			let l;
			switch ("INP" !== t.name && (ut[t.name.toLowerCase()] = {
					value: t.value,
					path: s
				}), t.name) {
				case "CLS":
					l = t.attribution, l && ut.cls && (ut.cls.element = l.largestShiftTarget, ut.cls.currentRect = null === (e = l.largestShiftSource) || void 0 === e ? void 0 : e.currentRect, ut.cls.previousRect = null === (n = l.largestShiftSource) || void 0 === n ? void 0 : n.previousRect);
					break;
				case "LCP":
					l = t.attribution, l && ut.lcp && (ut.lcp.element = l.target, ut.lcp.size = null === (i = l.lcpEntry) || void 0 === i ? void 0 : i.size, ut.lcp.url = l.url, ut.lcp.rld = Math.ceil(l.resourceLoadDelay), ut.lcp.rlt = Math.ceil(l.resourceLoadDuration), ut.lcp.erd = Math.ceil(l.elementRenderDelay), ut.lcp.it = null === (o = l.lcpResourceEntry) || void 0 === o ? void 0 : o.initiatorType, ut.lcp.fp = null === (a = null === (r = l.lcpEntry) || void 0 === r ? void 0 : r.element) || void 0 === a ? void 0 : a.getAttribute("fetchpriority"));
					break;
				case "INP":
					(null == ut.inp || Number(ut.inp.value) < Number(t.value)) && (ut.inp = {
						value: Number(t.value),
						path: s
					}, l = t.attribution, l && ut.inp && (ut.inp.element = l.interactionTarget, ut.inp.name = l.interactionType, ut.inp.idy = Math.ceil(l.inputDelay), ut.inp.pdn = Math.ceil(l.processingDuration), ut.inp.pdy = Math.ceil(l.presentationDelay)))
			}
		}
		"PerformanceObserver" in window && "function" == typeof PerformanceObserver && PerformanceObserver.supportedEntryTypes && (G(ft, {
			reportAllChanges: !0,
			reportSoftNavs: !0
		}), ((t, e = {}) => {
			const n = v(e = Object.assign({}, e), C);
			A(e) && (n.u = new Map), k(e => {
				t((t => {
					var e;
					let i = {
						timeToFirstByte: 0,
						firstByteToFCP: t.value,
						loadState: l(p())
					};
					if ("soft-navigation" !== t.navigationType) {
						if (t.entries.length) {
							const e = c(),
								n = t.entries.at(-1);
							if (e) {
								const o = e.responseStart,
									r = e.activationStart || 0,
									a = Math.max(0, o - r);
								i = {
									timeToFirstByte: a,
									firstByteToFCP: t.value - a,
									loadState: l(t.entries[0].startTime),
									navigationEntry: e,
									fcpEntry: n
								}
							}
						}
					} else {
						const o = null === (e = n.u) || void 0 === e ? void 0 : e.get(t.navigationId);
						o && (i = {
							timeToFirstByte: 0,
							firstByteToFCP: t.value,
							loadState: "complete",
							navigationEntry: o
						})
					}
					return Object.assign(t, {
						attribution: i
					})
				})(e))
			}, e)
		})(ft), $(ft, {
			reportSoftNavs: !0
		}), ((t, e = {}) => {
			((t, e = {}) => {
				const n = A(e);
				let i = _("TTFB"),
					o = h(t, i, Q, e.reportAllChanges);
				Y(() => {
					const r = c();
					if (r) {
						const a = r.responseStart;
						i.value = Math.max(a - w(), 0), i.entries = [r], o(!0), m(() => {
							i = _("TTFB", 0, "back-forward-cache", i.navigationId, i.navigationInteractionId, i.navigationURL, p()), o = h(t, i, Q, e.reportAllChanges), o(!0)
						}), n && I(["soft-navigation"], n => {
							n.forEach(n => {
								n.navigationId && (i = _("TTFB", 0, "soft-navigation", n.navigationId, n.interactionId, n.name, n.startTime), i.entries = [n], o = h(t, i, Q, e.reportAllChanges), o(!0))
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
		})(ft), PerformanceObserver.supportedEntryTypes && -1 !== PerformanceObserver.supportedEntryTypes.indexOf("layout-shift") && ((t, e = {}) => {
			const n = v(e = Object.assign({}, e), s),
				i = new WeakMap;
			n.t = t => {
				var n, o, r;
				if (null === (n = null == t ? void 0 : t.sources) || void 0 === n ? void 0 : n.length) {
					const n = D(t.sources),
						a = null == n ? void 0 : n.node;
					if (a) {
						const t = null !== (r = null === (o = e.generateTarget) || void 0 === o ? void 0 : o.call(e, a)) && void 0 !== r ? r : u(a);
						i.set(n, t)
					}
				}
			}, ((t, e = {}) => {
				const n = x();
				k(P(() => {
					let i, o = _("CLS", 0);
					const r = v(e, s),
						a = (n, a, s, c, l) => {
							o = _("CLS", 0, n, a, s, c, l), r.o = 0, i = h(t, o, M, e.reportAllChanges)
						},
						c = (t = !1) => {
							r.o > o.value && (o.value = r.o, o.entries = r.i), i(t)
						},
						l = t => {
							c(!0), a("soft-navigation", t.navigationId, t.interactionId, t.name, t.startTime)
						},
						d = t => {
							for (const e of t) "soft-navigation" !== e.entryType ? r.l(e) : l(e);
							c()
						},
						u = ["layout-shift"];
					A(e) && u.push("soft-navigation");
					const f = I(u, d);
					f && (i = h(t, o, M, e.reportAllChanges), n.onHidden(() => {
						d(f.takeRecords()), i(!0)
					}), m(() => {
						a("back-forward-cache", o.navigationId, o.navigationInteractionId, o.navigationURL, p()), y(i)
					}), setTimeout(i))
				}))
			})(e => {
				t((t => {
					var e;
					let n = {};
					if (t.entries.length) {
						const o = t.entries.reduce((t, e) => t.value > e.value ? t : e);
						if (null === (e = null == o ? void 0 : o.sources) || void 0 === e ? void 0 : e.length) {
							const t = D(o.sources);
							t && (n = {
								largestShiftTarget: i.get(t),
								largestShiftTime: o.startTime,
								largestShiftValue: o.value,
								largestShiftSource: t,
								largestShiftEntry: o,
								loadState: l(o.startTime)
							})
						}
					}
					return Object.assign(t, {
						attribution: n
					})
				})(e))
			}, e)
		})(ft, {
			reportAllChanges: !0,
			reportSoftNavs: !0
		})), document.addEventListener("visibilitychange", () => {
			if ("hidden" === document.visibilityState) {
				if (L && mt()) {
					const t = rt();
					(null == ct ? void 0 : ct.url) == t && (null == ct ? void 0 : ct.triggered) || vt(), E(t)
				}!lt && ct && (lt = !0, gt())
			}
		});
		const vt = t => {
				S++;
				let e = function(t) {
					const e = Et(T) === r.RoutingApis || Et(T) === r.SoftNavigation,
						o = !e,
						a = i.timing,
						s = t || rt(),
						c = Object.assign(Object.assign({}, _t(n.Load, s)), {
							memory: {},
							timings: {},
							firstPaint: 0,
							firstContentfulPaint: 0,
							versions: {
								fl: window.__cfBeacon ? window.__cfBeacon.version : "",
								js: "2026.10.0",
								timings: 1
							}
						});
					if (o) {
						if ("function" == typeof i.getEntriesByType) {
							const t = i.getEntriesByType("navigation");
							if (t && Array.isArray(t) && t.length > 0) {
								c.timingsV2 = {}, c.versions.timings = 2, delete c.timings, t[0].deliveryType && (c.dt = t[0].deliveryType);
								const e = t[0];
								it(e, c.timingsV2, et, e.startTime)
							}
						}
						if (1 === c.versions.timings) {
							const t = a;
							c.timings && it(t, c.timings, tt, t.navigationStart)
						}
						i.memory ? function(t, e) {
							for (const n in t) {
								const i = t[n];
								void 0 !== e && ("number" != typeof i && "string" != typeof i || (e[n] = i))
							}
						}(i.memory, c.memory) : delete c.memory, c.firstPaint = It("first-paint"), c.firstContentfulPaint = It("first-contentful-paint")
					}
					return window.__cfBeacon && (window.__cfBeacon.icTag && (c.icTag = window.__cfBeacon.icTag), c.siteToken = window.__cfBeacon.token), e && (delete c.timings, delete c.timingsV2, delete c.memory, delete c.firstPaint, delete c.firstContentfulPaint, delete c.serverTimings), c
				}(t);
				e && window.__cfBeacon && window.__cfBeacon && (a("", e, () => {}, !1, j), void 0 !== window.__cfBeacon.forward && void 0 !== window.__cfBeacon.forward.url && a("", e, () => {}, !1, window.__cfBeacon.forward.url))
			},
			gt = t => {
				let e = function(t) {
					const e = Object.assign({}, _t(n.WebVitalsV2, t));
					return window.__cfBeacon && (window.__cfBeacon.version && (e.versions.fl = window.__cfBeacon.version), window.__cfBeacon.icTag && (e.icTag = window.__cfBeacon.icTag), e.siteToken = window.__cfBeacon.token), ut && g.forEach(t => {
						var n, i;
						ut[t] && void 0 !== ut[t].value && (e[t] = ut[t], e[t] && e[t].value && (e[t].value = (n = t, i = e[t].value, "cls" === n ? i : Math.ceil(i))))
					}), e
				}(t);
				g.forEach(t => {
					delete ut[t]
				}), window.__cfBeacon && a("", e, () => {}, !0, j)
			},
			pt = () => {
				const t = window.__cfRl && window.__cfRl.done || window.__cfQR && window.__cfQR.done;
				t ? t.then(vt) : vt(), ct = {
					id: T,
					url: rt(),
					ts: (new Date).getTime(),
					triggered: !0
				}
			};
		"complete" === window.document.readyState ? pt() : window.addEventListener("load", () => {
			window.setTimeout(pt)
		});
		const mt = () => L && 0 === b.filter(t => t.id === T).length;

		function ht() {
			T = Z()
		}
		var yt, wt;

		function Tt(t) {
			for (let e = b.length - 1; e >= 0; e--)
				if (b[e].id === t) return b[e]
		}

		function bt(t) {
			var e;
			if (t) {
				let n = null === (e = Tt(t)) || void 0 === e ? void 0 : e.ts;
				if (n) return Math.ceil(i.timeOrigin + n)
			}
			return Math.ceil(i.timeOrigin)
		}

		function St(t) {
			var e;
			return null === (e = Tt(t)) || void 0 === e ? void 0 : e.referrer
		}

		function Et(t) {
			var e;
			return null === (e = Tt(t)) || void 0 === e ? void 0 : e.navigationType
		}

		function xt() {
			if (!window.__cfBeacon || !window.__cfBeacon.serverTiming) return;
			let t = [];
			for (const e of ["navigation", "resource"])
				for (const n of i.getEntriesByType(e)) {
					const {
						name: i,
						serverTiming: o
					} = n;
					if (o) {
						if ("resource" === e) {
							const t = window.__cfBeacon.serverTiming.location_startswith;
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
							if (window.__cfBeacon.serverTiming.name && window.__cfBeacon.serverTiming.name[n]) try {
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

		function _t(t, e) {
			const n = Et(T),
				i = n === r.RoutingApis || n === r.SoftNavigation,
				o = {
					startTime: bt(T),
					pageloadId: T,
					n: S > 1 ? S : void 0,
					eventType: t,
					nt: n,
					location: ot(e || rt()) || "",
					referrer: ot(St(T)),
					serverTimings: i ? void 0 : xt(),
					versions: {
						js: "2026.10.0"
					},
					bi: (a = st, a.bv || a.ov || a.be || a.bev ? st : void 0)
				};
			var a;
			return N && o.nt === r.RoutingApis && (o.ntapi = 1), o
		}

		function It(t) {
			var e;
			if ("first-contentful-paint" === t && ut.fcp && ut.fcp.value) return Math.ceil(ut.fcp.value);
			if ("function" == typeof i.getEntriesByType) {
				const n = null === (e = i.getEntriesByType("paint")) || void 0 === e ? void 0 : e.filter(e => e.name === t)[0];
				return n ? Math.ceil(n.startTime) : 0
			}
			return 0
		}
		L && (B === o.SoftNavigationHeuristics && (R = function() {
			var t, e;
			if (!("PerformanceObserver" in window) || !PerformanceObserver.supportedEntryTypes || -1 === PerformanceObserver.supportedEntryTypes.indexOf("soft-navigation")) return null;
			if ("function" != typeof(null === (e = null === (t = window.PerformanceSoftNavigation) || void 0 === t ? void 0 : t.prototype) || void 0 === e ? void 0 : e.getLargestInteractionContentfulPaint)) return null;
			const n = new PerformanceObserver(t => {
				for (const e of t.getEntries()) gt(O), ht(), O = e.name, E(e.name, {
					navigationType: r.SoftNavigation,
					when: e.startTime
				}), vt(e.name)
			});
			if (!n || "function" != typeof n.observe) return null;
			try {
				n.observe({
					type: "soft-navigation",
					buffered: !0
				})
			} catch (t) {
				return null
			}
			return n
		}()), R || B !== o.HistoryAndNavigationAPI && B !== o.SoftNavigationHeuristics || (N = function() {
			if (!("navigation" in window) || !window.navigation) return null;
			let t = function(t) {
				var e, n;
				t.canIntercept && (gt(O), !t.destination || "boolean" != typeof t.destination.sameDocument || t.destination.sameDocument ? (ht(), O = null !== (n = null === (e = null == t ? void 0 : t.destination) || void 0 === e ? void 0 : e.url) && void 0 !== n ? n : O, E(O, {
					navigationType: r.RoutingApis
				}), vt(O)) : lt = !0)
			};
			return window.navigation.addEventListener("navigate", t), t
		}(), N || (yt = window.history, (wt = yt.pushState) && (yt.pushState = function(t, e, n) {
			const i = rt(n);
			return O != i && (gt(O), ht(), E(i, {
				navigationType: r.RoutingApis
			}), vt(i), O = i), wt.apply(yt, [t, e, n])
		}, window.addEventListener("popstate", function(t) {
			O != rt() && (gt(O), ht(), O = rt(), E(O, {
				navigationType: r.RoutingApis
			}), vt(O))
		})))))
	}()
})();