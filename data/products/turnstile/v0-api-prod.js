"use strict";
(function() {
	function gt(e, r, t, i, u, s, g) {
		try {
			var y = e[s](g),
				m = y.value
		} catch (f) {
			t(f);
			return
		}
		y.done ? r(m) : Promise.resolve(m).then(i, u)
	}

	function yt(e) {
		return function() {
			var r = this,
				t = arguments;
			return new Promise(function(i, u) {
				var s = e.apply(r, t);

				function g(m) {
					gt(s, i, u, g, y, "next", m)
				}

				function y(m) {
					gt(s, i, u, g, y, "throw", m)
				}
				g(void 0)
			})
		}
	}

	function k(e, r) {
		return r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : k(e, r)
	}

	function Ee(e, r, t) {
		return r in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e
	}

	function ze(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = arguments[r] != null ? arguments[r] : {},
				i = Object.keys(t);
			typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(u) {
				return Object.getOwnPropertyDescriptor(t, u).enumerable
			}))), i.forEach(function(u) {
				Ee(e, u, t[u])
			})
		}
		return e
	}

	function ir(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var i = Object.getOwnPropertySymbols(e);
			r && (i = i.filter(function(u) {
				return Object.getOwnPropertyDescriptor(e, u).enumerable
			})), t.push.apply(t, i)
		}
		return t
	}

	function _t(e, r) {
		return r = r != null ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ir(Object(r)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
		}), e
	}

	function ht(e) {
		if (Array.isArray(e)) return e
	}

	function xt(e, r) {
		var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (t != null) {
			var i = [],
				u = !0,
				s = !1,
				g, y;
			try {
				for (t = t.call(e); !(u = (g = t.next()).done) && (i.push(g.value), !(r && i.length === r)); u = !0);
			} catch (m) {
				s = !0, y = m
			} finally {
				try {
					!u && t.return != null && t.return()
				} finally {
					if (s) throw y
				}
			}
			return i
		}
	}

	function bt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function He(e, r) {
		(r == null || r > e.length) && (r = e.length);
		for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
		return i
	}

	function Et(e, r) {
		if (e) {
			if (typeof e == "string") return He(e, r);
			var t = Object.prototype.toString.call(e).slice(8, -1);
			if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(t);
			if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return He(e, r)
		}
	}

	function we(e, r) {
		return ht(e) || xt(e, r) || Et(e, r) || bt()
	}

	function N(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Te(e, r) {
		var t = {
				label: 0,
				sent: function() {
					if (s[0] & 1) throw s[1];
					return s[1]
				},
				trys: [],
				ops: []
			},
			i, u, s, g;
		return g = {
			next: y(0),
			throw: y(1),
			return: y(2)
		}, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
			return this
		}), g;

		function y(f) {
			return function(h) {
				return m([f, h])
			}
		}

		function m(f) {
			if (i) throw new TypeError("Generator is already executing.");
			for (; g && (g = 0, f[0] && (t = 0)), t;) try {
				if (i = 1, u && (s = f[0] & 2 ? u.return : f[0] ? u.throw || ((s = u.return) && s.call(u), 0) : u.next) && !(s = s.call(u, f[1])).done) return s;
				switch (u = 0, s && (f = [f[0] & 2, s.value]), f[0]) {
					case 0:
					case 1:
						s = f;
						break;
					case 4:
						return t.label++, {
							value: f[1],
							done: !1
						};
					case 5:
						t.label++, u = f[1], f = [0];
						continue;
					case 7:
						f = t.ops.pop(), t.trys.pop();
						continue;
					default:
						if (s = t.trys, !(s = s.length > 0 && s[s.length - 1]) && (f[0] === 6 || f[0] === 2)) {
							t = 0;
							continue
						}
						if (f[0] === 3 && (!s || f[1] > s[0] && f[1] < s[3])) {
							t.label = f[1];
							break
						}
						if (f[0] === 6 && t.label < s[1]) {
							t.label = s[1], s = f;
							break
						}
						if (s && t.label < s[2]) {
							t.label = s[2], t.ops.push(f);
							break
						}
						s[2] && t.ops.pop(), t.trys.pop();
						continue
				}
				f = r.call(e, t)
			} catch (h) {
				f = [6, h], u = 0
			} finally {
				i = s = 0
			}
			if (f[0] & 5) throw f[1];
			return {
				value: f[0] ? f[1] : void 0,
				done: !0
			}
		}
	}
	var wt = 300020;
	var Se = 300030;

	function D(e, r) {
		return e.indexOf(r) !== -1
	}
	var F;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(F || (F = {}));
	var j;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(j || (j = {}));
	var Ie;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Ie || (Ie = {}));
	var fe;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(fe || (fe = {}));
	var G;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(G || (G = {}));
	var z;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(z || (z = {}));
	var ae;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(ae || (ae = {}));
	var Z;
	(function(e) {
		e.EXECUTE = "execute"
	})(Z || (Z = {}));
	var Be;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(Be || (Be = {}));

	function Ve(e) {
		return D(["auto", "dark", "light"], e)
	}

	function qe(e) {
		return D(["auto", "never"], e)
	}

	function Ge(e) {
		return e > 0 && e < 9e5
	}

	function Xe(e) {
		return e > 0 && e < 36e4
	}
	var or = /^[0-9A-Za-z_-]{3,100}$/;

	function Tt(e) {
		return or.test(e)
	}
	var cr = /^[a-z0-9_-]{0,32}$/i;

	function Ye(e) {
		return e === void 0 ? !0 : typeof e == "string" && cr.test(e)
	}
	var ur = /^[a-z0-9_\-=]{0,255}$/i;

	function Qe(e) {
		return e === void 0 ? !0 : typeof e == "string" && ur.test(e)
	}

	function Ke(e) {
		return D(["normal", "compact", "invisible"], e)
	}

	function $e(e) {
		return D(["auto", "manual", "never"], e)
	}
	var lr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Je(e) {
		return e === "auto" || lr.test(e)
	}

	function Ze(e) {
		return D(["always", "execute", "interaction-only"], e)
	}

	function et(e) {
		return D(["render", "execute"], e)
	}
	var W = "0/0";
	var St = 300,
		It = 10;
	var ie = "cf-chl-widget-",
		M = "cloudflare-challenge",
		At = ".cf-turnstile",
		Ot = ".cf-challenge",
		Rt = ".g-recaptcha",
		Ct = "cf_challenge_response",
		kt = "cf-turnstile-response",
		Nt = "g-recaptcha-response",
		Lt = 8e3,
		tt = "private-token",
		Mt = 3,
		Pt = 500,
		Dt = 500;

	function Ae(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Ft(e, r) {
		if (!k(e, r)) throw new TypeError("Cannot call a class as a function")
	}

	function X(e, r) {
		return X = Object.setPrototypeOf || function(i, u) {
			return i.__proto__ = u, i
		}, X(e, r)
	}

	function Wt(e, r) {
		if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(r && r.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), r && X(e, r)
	}

	function Oe() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function de(e, r, t) {
		return Oe() ? de = Reflect.construct : de = function(u, s, g) {
			var y = [null];
			y.push.apply(y, s);
			var m = Function.bind.apply(u, y),
				f = new m;
			return g && X(f, g.prototype), f
		}, de.apply(null, arguments)
	}

	function ee(e) {
		return ee = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		}, ee(e)
	}

	function Ut(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Re(e) {
		var r = typeof Map == "function" ? new Map : void 0;
		return Re = function(i) {
			if (i === null || !Ut(i)) return i;
			if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof r != "undefined") {
				if (r.has(i)) return r.get(i);
				r.set(i, u)
			}

			function u() {
				return de(i, arguments, ee(this).constructor)
			}
			return u.prototype = Object.create(i.prototype, {
				constructor: {
					value: u,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), X(u, i)
		}, Re(e)
	}

	function jt(e, r) {
		return r && (N(r) === "object" || typeof r == "function") ? r : Ae(e)
	}

	function zt(e) {
		var r = Oe();
		return function() {
			var i = ee(e),
				u;
			if (r) {
				var s = ee(this).constructor;
				u = Reflect.construct(i, arguments, s)
			} else u = i.apply(this, arguments);
			return jt(this, u)
		}
	}
	var Ht = function(e) {
		"use strict";
		Wt(t, e);
		var r = zt(t);

		function t(i, u) {
			Ft(this, t);
			var s;
			return s = r.call(this, i), Ee(Ae(s), "code", void 0), s.name = "TurnstileError", s.code = u, s
		}
		return t
	}(Re(Error));

	function v(e, r) {
		var t = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Ht(t, r)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function pe(e) {
		return e.startsWith(ie) ? e.substring(ie.length) : null
	}

	function Y(e) {
		return "".concat(ie).concat(e)
	}

	function rt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (k(r, HTMLScriptElement) && e.test(r.src)) return r;
		for (var t = document.querySelectorAll("script"), i = 0, u; u = t[i]; i++)
			if (k(u, HTMLScriptElement) && e.test(u.src)) return u
	}

	function Bt() {
		var e = rt();
		e || v("Could not find Turnstile script tag, some features may not be available", 43777);
		var r = {
			loadedAsync: !1,
			params: new URLSearchParams
		};
		(e.async || e.defer) && (r.loadedAsync = !0);
		var t = e.src,
			i = t.split("?");
		return i.length > 1 && (r.params = new URLSearchParams(i[1])), r
	}
	var sr = 900,
		fr = 3;

	function dr(e, r) {
		e.watchCatSeq++;
		var t = !0,
			i = !1,
			u = void 0;
		try {
			for (var s = e.widgetMap[Symbol.iterator](), g; !(t = (g = s.next()).done); t = !0) {
				var y = we(g.value, 2),
					m = y[0],
					f = y[1],
					h;
				f.watchcat.seq = e.watchCatSeq, f.watchcat.lastAckedSeq === 0 && (f.watchcat.lastAckedSeq = e.watchCatSeq);
				var T = Y(m);
				if (!T) {
					f.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(T, ", consider using turnstile.remove() to clean up a widget.")), f.watchcat.missingWidgetWarning = !0);
					continue
				}
				var I = document.querySelector("#".concat(T));
				if (!I) {
					f.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(T, ", consider using turnstile.remove() to clean up a widget.")), f.watchcat.missingWidgetWarning = !0);
					continue
				}
				if ((f.isExecuting || !f.isInitialized || f.isInitialized && !f.isStale && !f.isExecuted) && f.watchcat.lastAckedSeq !== 0 && f.watchcat.lastAckedSeq < f.watchcat.seq - 1 - fr) {
					var S;
					f.watchcat.lastAckedSeq = 0, f.watchcat.seq = 0, f.isExecuting = !1, console.log("Turnstile Widget seem to have crashed: ", m);
					var l;
					if ((S = e.msgHandler) === null || S === void 0 || S.call(e, {
							data: {
								source: M,
								widgetId: m,
								code: Se,
								event: "fail",
								rcV: (l = f.rcV) !== null && l !== void 0 ? l : W
							}
						}), r) {
						var o;
						window.postMessage({
							source: M,
							widgetId: m,
							event: "rcv-update",
							rcV: (o = f.rcV) !== null && o !== void 0 ? o : W
						}, "*")
					}
					continue
				}(h = I.contentWindow) === null || h === void 0 || h.postMessage({
					source: M,
					widgetId: m,
					seq: e.watchCatSeq,
					event: "meow"
				}, "*")
			}
		} catch (n) {
			i = !0, u = n
		} finally {
			try {
				!t && s.return != null && s.return()
			} finally {
				if (i) throw u
			}
		}
	}

	function nt(e, r) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			dr(e, r)
		}, sr))
	}

	function at(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || r) && clearInterval(e.watchCatInterval)
	}

	function it(e) {
		var r = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && r.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && r.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), r.size !== 0) return r.toString()
	}

	function ot(e, r) {
		var t = "https://challenges.cloudflare.com";
		if (r) {
			var i;
			t = (i = e["base-url"]) !== null && i !== void 0 ? i : t
		}
		return t
	}

	function ct(e, r, t, i, u, s, g) {
		var y = ot(t, u),
			m = s ? "h/".concat(s, "/") : "",
			f = g ? "?".concat(g) : "";
		return "".concat(y, "/cdn-cgi/challenge-platform/").concat(m, "turnstile/if/ov2/av0/rcv").concat(i, "/").concat(e, "/").concat(r, "/").concat(t.theme, "/").concat(t.size).concat(f)
	}

	function Vt(e, r) {
		var t;
		r.upgradeAttempts++;
		var i = rt();
		if (!(!i || !i.parentNode)) {
			var u = i == null ? void 0 : i.nonce;
			e._pState = r;
			var s = new URL(i.src),
				g = document.createElement("script");
			s.searchParams.set("_upgrade", "true"), s.searchParams.set("_cb", String(Date.now())), g.async = !0, u && (g.nonce = u), g.setAttribute("crossorigin", "anonymous"), g.src = s.toString(), i == null || (t = i.parentNode) === null || t === void 0 || t.replaceChild(g, i)
		}
	}

	function qt(e, r) {
		var t = e._pState;
		return t ? (r.isReady = t.isReady, r.isRecaptchaCompatibilityMode = t.isRecaptchaCompatibilityMode, r.lastWidgetIdx = t.lastWidgetIdx, r.scriptWasLoadedAsync = t.scriptWasLoadedAsync, r.upgradeAttempts = t.upgradeAttempts, r.upgradeCount = t.upgradeCount + 1, r.watchCatInterval = null, r.watchCatSeq = t.watchCatSeq, r.widgetMap = t.widgetMap, !0) : !1
	}
	var ut = function(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > r ? e.substring(0, r) : e
	};

	function Gt(e) {
		var r = function(t, i) {
			if (!t || t.tagName === "BODY") return i;
			for (var u = 1, s = t.previousElementSibling; s;) s.tagName === t.tagName && u++, s = s.previousElementSibling;
			var g = ut(t.tagName.toLowerCase()),
				y = "".concat(g, "[").concat(u, "]");
			return r(t.parentNode, "/".concat(y).concat(i))
		};
		return r(e, "")
	}

	function Xt(e, r, t) {
		for (var i = "", u = 0, s = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(T) {
					return u > r || i.length > t ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), g;
			(g = s.nextNode()) !== null && i.length < t;) {
			if (g.nodeType === Node.ELEMENT_NODE) {
				var y = g;
				i += "".concat(ut(y.tagName.toLowerCase()));
				for (var m = 0; m < y.attributes.length; m++) {
					var f = y.attributes[m];
					i += "_".concat(ut(f.name, 2))
				}
				i += ">"
			} else g.nodeType === Node.TEXT_NODE && (i += "-t");
			var h = g.parentNode;
			for (u = 0; h !== e && h !== null;) u++, h = h.parentNode
		}
		return i.substring(0, t)
	}

	function Yt(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : N(e)));
		for (var r = 5381, t = 0; t < e.length; t++) {
			var i = e.charCodeAt(t);
			r = r * 33 ^ i
		}
		return r >>> 0
	}

	function Qt(e, r) {
		var t, i = ot(r.params, te),
			u = "h/".concat("g", "/"),
			s = "".concat(i, "/cdn-cgi/challenge-platform/").concat(u, "feedback-reports/").concat(pe(e)),
			g = document.getElementById(e);
		g || v("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
		var y = document.createElement("div");
		y.style.position = "fixed", y.style.zIndex = "21474836419";
		var m = document.createElement("div");
		m.className = "cf-turnstile-feedback", m.id = "cf-fr-id", m.style.borderColor = "#000000", m.style.width = "450px", m.style.height = "450px", m.style.position = "absolute", m.style.zIndex = "21474836420", m.style.borderWidth = "1px", m.style.borderColor = "#000", m.style.borderStyle = "solid", m.style.backgroundColor = "#ffffff", m.style.borderRadius = "10px", m.style.left = "-122px", m.style.top = "-91px", m.style.overflow = "hidden";
		var f = document.createElement("iframe");
		f.id = e + "-fr", f.setAttribute("src", s), f.setAttribute("allow", "cross-origin-isolated; fullscreen"), f.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), f.setAttribute("scrolling", "no"), f.style.width = "100%", f.style.height = "100%", f.style.overflow = "hidden";
		var h = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		h.style.position = "absolute", h.style.width = "26px", h.style.height = "26px", h.style.zIndex = "21474836421", h.style.cursor = "pointer", h.style.right = "2px", h.style.top = "5px", h.setAttribute("width", "26"), h.setAttribute("height", "26"), h.addEventListener("click", function() {
			var l;
			(l = y.parentNode) === null || l === void 0 || l.removeChild(y)
		});
		var T = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		T.setAttribute("ry", "12"), T.setAttribute("rx", "12"), T.setAttribute("cy", "12"), T.setAttribute("cx", "12"), T.setAttribute("fill", "#aaaaaa"), T.setAttribute("stroke-width", "0"), h.appendChild(T);
		var I = document.createElementNS("http://www.w3.org/2000/svg", "line");
		I.setAttribute("stroke-width", "3"), I.setAttribute("stroke", "#fff"), I.setAttribute("fill", "none"), I.setAttribute("x1", "6"), I.setAttribute("x2", "18"), I.setAttribute("y1", "18"), I.setAttribute("y2", "5"), h.appendChild(I);
		var S = document.createElementNS("http://www.w3.org/2000/svg", "line");
		S.setAttribute("stroke-width", "3"), S.setAttribute("stroke", "#fff"), S.setAttribute("fill", "none"), S.setAttribute("x1", "6"), S.setAttribute("x2", "18"), S.setAttribute("y1", "5"), S.setAttribute("y2", "18"), h.appendChild(S), m.appendChild(f), m.appendChild(h), y.appendChild(m), (t = g.parentNode) === null || t === void 0 || t.appendChild(y)
	}

	function Kt(e) {
		var r, t, i;
		(i = document.getElementById(e)) === null || i === void 0 || (t = i.parentElement) === null || t === void 0 || (r = t.parentElement) === null || r === void 0 || r.remove()
	}

	function H() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}
	var te = !1,
		_ = {
			turnstileLoadInitTimeMs: H(),
			isRecaptchaCompatibilityMode: !1,
			scriptWasLoadedAsync: !1,
			isReady: !1,
			widgetMap: new Map,
			lastWidgetIdx: 0,
			upgradeAttempts: 0,
			upgradeCount: 0,
			apiVersion: 1,
			watchCatInterval: null,
			watchCatSeq: 0
		};

	function lt(e) {
		rr(e, "")
	}

	function dt() {
		var e = [At, Ot];
		_.isRecaptchaCompatibilityMode && e.push(Rt), document.querySelectorAll(e.join(", ")).forEach(function(r) {
			return pt.render(r)
		})
	}
	var vt = [];

	function $t() {
		_.isReady = !0;
		var e = !0,
			r = !1,
			t = void 0;
		try {
			for (var i = vt[Symbol.iterator](), u; !(e = (u = i.next()).done); e = !0) {
				var s = u.value;
				s()
			}
		} catch (g) {
			r = !0, t = g
		} finally {
			try {
				!e && i.return != null && i.return()
			} finally {
				if (r) throw t
			}
		}
	}

	function rr(e, r) {
		var t = document.getElementById("".concat(e, "_response"));
		t !== null && k(t, HTMLInputElement) && (t.value = r);
		var i = document.getElementById("".concat(e, "_legacy_response"));
		if (i !== null && k(i, HTMLInputElement) && (i.value = r), _.isRecaptchaCompatibilityMode) {
			var u = document.getElementById("".concat(e, "_g_response"));
			u !== null && k(u, HTMLInputElement) && (u.value = r)
		}
	}

	function st(e, r) {
		var t = r.params,
			i = t.size,
			u = i === void 0 ? "normal" : i,
			s = r.mode;
		switch (s) {
			case F.NON_INTERACTIVE:
			case F.MANAGED:
				switch (u) {
					case j.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case j.INVISIBLE:
						v('Invalid value for parameter "size", expected "'.concat(j.COMPACT, '" or "').concat(j.NORMAL, '", got "').concat(u, '"'), 2817);
					case j.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case F.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				v('Invalid value for parameter "mode", expected "'.concat(F.NON_INTERACTIVE, '", "').concat(F.MANAGED, '" or "').concat(F.INVISIBLE, '", got "').concat(s, '"'), 2818)
		}
	}

	function Jt(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function pr(e, r) {
		var t = r.get("turnstile_iframe_alt");
		t && (e.title = t)
	}

	function vr(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function mr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Zt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var pt = function() {
		function e(l, o, n, c) {
			return r.apply(this, arguments)
		}

		function r() {
			return r = yt(function(l, o, n, c) {
				var a, p, x, E, d, w, O, B, C, V;
				return Te(this, function(R) {
					switch (R.label) {
						case 0:
							if (a = l.params.sitekey, p = Zt(), !p) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), i(l, o, !1), [2];
							x = "h/".concat("g", "/"), E = new URL(p), d = "https", w = "", O = "".concat(d, "://").concat(E.host, "/cdn-cgi/challenge-platform/").concat(x, "rc/").concat(c).concat(w), R.label = 1;
						case 1:
							return R.trys.push([1, 6, , 7]), [4, fetch(O, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: a,
									secondaryToken: n
								})
							})];
						case 2:
							return B = R.sent(), B.status === 200 ? [3, 3] : (b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), i(l, o, !1), [3, 5]);
						case 3:
							return [4, B.json()];
						case 4:
							if (C = R.sent(), "status" in C && C.status === "redeemed") return i(l, o, !0), [2];
							R.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return V = R.sent(), b("Error contacting Turnstile, aborting clearance remdeption."), i(l, o, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), r.apply(this, arguments)
		}

		function t(l, o, n) {
			if (l.params.retry === fe.AUTO || n) {
				l.isExecuted && (l.msgQueue.push(Z.EXECUTE), l.isExecuted = !0, l.isExecuting = !0);
				var c, a = n ? 0 : 1e3 * 2 + ((c = l.params["retry-interval"]) !== null && c !== void 0 ? c : 0);
				l.retryTimeout = window.setTimeout(function() {
					h(o)
				}, a)
			}
		}

		function i(l, o, n) {
			l.response === void 0 && v("[Internal Error] Widget was completed but no response was given", 1362), l.isExecuting = !1, rr(o, l.response);
			var c = l.cbSuccess;
			c && c(l.response, n)
		}

		function u(l) {
			if (!l) return [];
			for (var o = l.attributes, n = o.length, c = new Array(n), a = 0; a < n; a++) c[a] = o[a].name;
			return c
		}
		var s = function(o) {
			var n = o.data;
			if (n.source === M) {
				if (!vr(o)) {
					b("Ignored message from wrong origin: " + o.origin);
					return
				}
				if (!(!n.widgetId || !_.widgetMap.has(n.widgetId))) {
					var c = Y(n.widgetId),
						a = _.widgetMap.get(n.widgetId);
					if (!(!c || !a)) switch (n.event) {
						case "init": {
							var p;
							a.widgetInitStartTimeMs = H();
							var x = document.getElementById(c);
							x || v("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3074), a.mode = n.mode, a.mode === F.INVISIBLE && a.params["refresh-expired"] === G.MANUAL && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat(G.AUTO, "' or '").concat(G.NEVER, "'")), a.params.appearance === z.ALWAYS || a.isExecuting && a.params.appearance === z.EXECUTE ? st(x, a) : Jt(x), x.style.display = "";
							var E = document.querySelector("#".concat(c));
							E || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (p = E.contentWindow) === null || p === void 0 || p.postMessage({
								source: M,
								widgetId: n.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var d = document.getElementById(c);
							d || v("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3074);
							var w = new Map;
							Object.keys(n.translationData).forEach(function(se) {
								w.set(se, n.translationData[se])
							}), pr(d, w);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(a.params.language, " is not supported, falling back to: ").concat(n.fallback));
							break
						}
						case "reject": {
							var O = document.getElementById(c);
							if (a.isExecuting = !1, O || v("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3075), n.reason === "outdated_browser") {
								var B = a.cbUnsupported;
								B && B()
							}
							break
						}
						case "food": {
							a.watchcat && n.seq > a.watchcat.lastAckedSeq && (a.watchcat.lastAckedSeq = n.seq);
							break
						}
						case "complete": {
							a.rcV = W, a.response = n.token, n.sToken ? e(a, c, n.sToken, n.chlId) : i(a, c, !1);
							break
						}
						case "fail": {
							n.rcV && (a.rcV = n.rcV), n.cfChlOut && (a.cfChlOut = n.cfChlOut), n.cfChlOutS && (a.cfChlOutS = n.cfChlOutS), n.code && (a.errorCode = n.code), a.isExecuting = !1, a.isInitialized = !0, lt(c);
							var C = a.cbError,
								V = n.code === Se;
							if (C) {
								var R;
								C(String((R = n.code) !== null && R !== void 0 ? R : wt)) || (n.code && b("Error: ".concat(n.code)), t(a, c, V))
							} else n.code ? (t(a, c, V), v("Error: ".concat(n.code), 3076)) : t(a, c, !1);
							break
						}
						case "feedbackInit": {
							Qt(c, a);
							break
						}
						case "requestFeedbackData": {
							var Q, re = document.querySelector("#".concat(c));
							re || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (Q = re.contentWindow) === null || Q === void 0 || Q.postMessage({
								source: M,
								widgetId: n.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var K, ne = document.querySelector("#".concat(c, "-fr"));
							ne || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (K = ne.contentWindow) === null || K === void 0 || K.postMessage({
								source: M,
								widgetId: n.widgetId,
								event: "feedbackData",
								rayId: n.rayId,
								rcV: n.rcV,
								cfChlOut: a.cfChlOut,
								cfChlOutS: a.cfChlOutS,
								errorCode: a.errorCode,
								sitekey: n.sitekey,
								mode: n.mode
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var ue = document.querySelector("#".concat(c, "-fr"));
							ue || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), Kt("".concat(c, "-fr"));
							break
						}
						case "tokenExpired": {
							var Le = n.token;
							a.isExpired = !0;
							var ve = a.cbExpired;
							ve && ve(Le), a.params["refresh-expired"] === G.AUTO && !a.isResetting && h(c);
							break
						}
						case "interactiveTimeout": {
							a.rcV = W, lt(c);
							var me = a.cbTimeout;
							me ? me() : b("The widget encountered an interactive timeout. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
							break
						}
						case "refreshRequest": {
							a.rcV = W, h(c);
							break
						}
						case "interactiveBegin": {
							var ge = document.getElementById(c);
							ge || v("Cannot layout widget, Element not found (#".concat(c, ")."), 3076);
							var ye = a.cbBeforeInteractive;
							ye && ye(), a.params.appearance === z.INTERACTION_ONLY && st(ge, a);
							break
						}
						case "interactiveEnd": {
							var Me = document.getElementById(c);
							Me || v("Cannot unlayout widget, Element not found (#".concat(c, ")."), 3077);
							var _e = a.cbAfterInteractive;
							_e && _e();
							break
						}
						case "widgetStale": {
							a.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var $;
							a.widgetParamsStartTimeMs = H();
							var P = document.querySelector("#".concat(c));
							P || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), a.isResetting = !1;
							var le = {},
								L = H(),
								J = {
									"w.iW": window.innerWidth,
									"ht.atrs": u(document.body.parentNode),
									pi: {
										xp: Gt(P).substring(0, Dt),
										pfp: Xt(document, Mt, Pt),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: Yt(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href
									}
								},
								q = H() - L;
							($ = P.contentWindow) === null || $ === void 0 || $.postMessage(ze({
								source: M,
								widgetId: n.widgetId,
								event: "extraParams",
								action: a.action,
								cData: a.cData,
								chlPageData: a.chlPageData,
								rcV: a.rcV,
								ch: "dc6b543c1346",
								url: Zt(),
								retry: a.params.retry,
								"expiry-interval": a.params["expiry-interval"],
								"retry-interval": a.params["retry-interval"],
								"refresh-expired": a.params["refresh-expired"],
								language: a.params.language,
								execution: a.params.execution,
								appearance: a.params.appearance,
								wPr: J,
								turnstileAgeMs: H() - _.turnstileLoadInitTimeMs,
								widgetAgeMs: H() - a.widgetRenderStartTimeMs,
								timeRenderMs: a.widgetRenderEndTimeMs - a.widgetRenderStartTimeMs,
								timeToInitMs: a.widgetInitStartTimeMs - a.widgetRenderEndTimeMs,
								timeToParamsMs: a.widgetParamsStartTimeMs - a.widgetInitStartTimeMs,
								tiefTimeMs: q
							}, le), "*"), m(a, n.widgetId, P), a.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		_.msgHandler = s, window.addEventListener("message", s);

		function g() {
			var l = "abcdefghijklmnopqrstuvwxyz0123456789",
				o = l.length,
				n;
			do {
				n = "";
				for (var c = 0; c < 5; c++) n += l.charAt(Math.floor(Math.random() * o))
			} while (_.widgetMap.has(n));
			return n
		}

		function y(l) {
			if (typeof l == "string") {
				var o = pe(l);
				if (o && _.widgetMap.has(o)) return o;
				try {
					var n = document.querySelector(l);
					return n ? y(n) : null
				} catch (a) {
					return null
				}
			}
			if (k(l, HTMLElement)) {
				var c = l.querySelector("iframe");
				return c ? pe(c.id) : null
			}
			return l || _.widgetMap.size === 0 ? null : _.widgetMap.keys().next().value
		}

		function m(l, o, n) {
			for (; l.msgQueue.length;) {
				var c, a = l.msgQueue.pop();
				(c = n.contentWindow) === null || c === void 0 || c.postMessage({
					source: M,
					widgetId: o,
					event: a
				}, "*")
			}
		}

		function f(l, o) {
			if (o) {
				var n = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
					c = [],
					a = !0,
					p = !1,
					x = void 0;
				try {
					for (var E = n[Symbol.iterator](), d; !(a = (d = E.next()).done); a = !0) {
						var w = d.value;
						o[w] && o[w] !== l.params[w] && c.push(w)
					}
				} catch (O) {
					p = !0, x = O
				} finally {
					try {
						!a && E.return != null && E.return()
					} finally {
						if (p) throw x
					}
				}
				c.length !== 0 && v("The parameters ".concat(n.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(c.join(",")), 3618), o.action && (Ye(o.action) || v('Invalid input for optional parameter "action", got "'.concat(o.action, '"'), 3604), l.action = o.action), o.cData && (Qe(o.cData) || v('Invalid input for optional parameter "cData", got "'.concat(o.cData, '"'), 3605), l.cData = o.cData), o["after-interactive-callback"] && (l.cbAfterInteractive = o["after-interactive-callback"]), o["before-interactive-callback"] && (l.cbBeforeInteractive = o["before-interactive-callback"]), o.callback && (l.cbSuccess = o.callback), o["expired-callback"] && (l.cbExpired = o["expired-callback"]), o["timeout-callback"] && (l.cbTimeout = o["timeout-callback"]), o["error-callback"] && (l.cbError = o["error-callback"]), o["unsupported-callback"] && (l.cbUnsupported = o["unsupported-callback"]), o.chlPageData && (l.chlPageData = o.chlPageData)
			}
		}

		function h(l) {
			var o = y(l);
			o || v("Nothing to reset found for provided container", 3329);
			var n = _.widgetMap.get(o);
			if (n) {
				n.isResetting = !0, n.response = void 0, n.mode = void 0, n.msgQueue = [], n.isExpired = !1, n.isExecuting = !1, n.isStale = !1, n.isInitialized = !1, n.watchcat.lastAckedSeq = 0, n.watchcat.seq = 0, n.params.execution === ae.RENDER && (n.msgQueue.push(Z.EXECUTE), n.isExecuted = !0, n.isExecuting = !0);
				var c = Y(o),
					a = document.querySelector("#".concat(c));
				(!c || !a) && v("Widget ".concat(o, " to reset was not found."), 3330), n.params.appearance === z.INTERACTION_ONLY && Jt(a), n.params.sitekey === null && v("Unexpected Error: Sitekey is null", 3347);
				var p;
				a.src = ct(o, n.params.sitekey, n.params, (p = n.rcV) !== null && p !== void 0 ? p : W, te, "g", it(n)), lt(c), n.retryTimeout && window.clearTimeout(n.retryTimeout)
			} else v("Widget ".concat(o, " to reset was not found."), 3331)
		}

		function T(l) {
			var o, n = y(l);
			if (!n || !_.widgetMap.has(n)) {
				b("Nothing to remove found for the provided container");
				return
			}
			var c = Y(n),
				a = ["iframe#".concat(c), "input#".concat(c, "_response"), "input#".concat(c, "_legacy_response"), "input#".concat(c, "_g_response")];
			document.querySelectorAll(a.join(", ")).forEach(function(x) {
				return x.remove()
			});
			var p = (o = _.widgetMap.get(n)) === null || o === void 0 ? void 0 : o.retryTimeout;
			p && window.clearTimeout(p), _.widgetMap.delete(n), at(_)
		}

		function I(l, o) {
			var n, c, a = H(),
				p;
			if (typeof l == "string") try {
				var x = document.querySelector(l);
				x || v('Unable to find a container for "'.concat(l, '"'), 3585), p = x
			} catch (yr) {
				v('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(l, '"'), 3586)
			} else k(l, HTMLElement) ? p = l : v('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
			var E = gr(p);
			if (E) {
				var d = Object.assign(E, o),
					w = d.action,
					O = d.cData,
					B = d.chlPageData,
					C = d.sitekey,
					V;
				d.theme = (V = d.theme) !== null && V !== void 0 ? V : Ie.AUTO;
				var R;
				d.retry = (R = d.retry) !== null && R !== void 0 ? R : fe.AUTO;
				var Q;
				d.execution = (Q = d.execution) !== null && Q !== void 0 ? Q : ae.RENDER;
				var re;
				d.appearance = (re = d.appearance) !== null && re !== void 0 ? re : z.ALWAYS;
				var K;
				d["retry-interval"] = +((K = d["retry-interval"]) !== null && K !== void 0 ? K : Lt);
				var ne;
				d["expiry-interval"] = +((ne = d["expiry-interval"]) !== null && ne !== void 0 ? ne : (St - It) * 1e3);
				var ue;
				d.size = (ue = d.size) !== null && ue !== void 0 ? ue : j.NORMAL;
				var Le = d.callback,
					ve = d["expired-callback"],
					me = d["timeout-callback"],
					ge = d["after-interactive-callback"],
					ye = d["before-interactive-callback"],
					Me = d["error-callback"],
					_e = d["unsupported-callback"];
				typeof C != "string" && v('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof C == "undefined" ? "undefined" : N(C), '"'), 3588), Tt(C) || v('Invalid input for parameter "sitekey", got "'.concat(C, '"'), 3589), Ke(d.size) || v('Invalid type for parameter "size", expected normal|compact, got "'.concat(d.size, '" ').concat(N(d.size)), 3590), Ve(d.theme) || v('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(d.theme, '" ').concat(N(d.theme)), 3591), qe(d.retry) || v('Invalid type for parameter "retry", expected never|auto, got "'.concat(d.retry, '" ').concat(N(d.retry)), 3592), d.language || (d.language = "auto"), Je(d.language) || (b('Invalid language value: "'.concat(d.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")), d.language = "auto"), Ze(d.appearance) || v('Unknown appearance value: "'.concat(d.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), et(d.execution) || v('Unknown execution value: "'.concat(d.execution, ", expected either: 'render' or 'execute'."), 3601), Ge(d["retry-interval"]) || v('Invalid retry-interval value: "'.concat(d["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), Xe(d["expiry-interval"]) || v('Invalid expiry-interval value: "'.concat(d["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
				var $, P = ($ = d["refresh-expired"]) !== null && $ !== void 0 ? $ : G.AUTO;
				$e(P) ? d["refresh-expired"] = P : v('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(P, '" ').concat(typeof P == "undefined" ? "undefined" : N(P)), 3603);
				var le = p.getElementsByTagName("iframe")[0];
				le != null && le.id.startsWith(ie) && T(p);
				var L = document.createElement("iframe");
				Ye(w) || v('Invalid input for optional parameter "action", got "'.concat(w, '"'), 3604), Qe(O) || v('Invalid input for optional parameter "cData", got "'.concat(O, '"'), 3605);
				var J = g(),
					q = Y(J);
				if (!(!J || !q)) {
					var se = [],
						Pe = d.execution === ae.RENDER;
					Pe && se.push(Z.EXECUTE), _.lastWidgetIdx++;
					var nr = {};
					_.widgetMap.set(J, _t(ze({
						idx: _.lastWidgetIdx,
						action: w,
						cData: O,
						chlPageData: B,
						cbSuccess: Le,
						cbError: Me,
						cbExpired: ve,
						cbTimeout: me,
						cbUnsupported: _e,
						cbAfterInteractive: ge,
						cbBeforeInteractive: ye,
						params: d,
						isStale: !1,
						isExpired: !1,
						isExecuting: Pe,
						isResetting: !1,
						isExecuted: Pe,
						isInitialized: !1,
						msgQueue: se,
						rcV: W,
						watchcat: {
							seq: 0,
							lastAckedSeq: 0,
							missingWidgetWarning: !1
						}
					}, nr), {
						widgetRenderStartTimeMs: a,
						widgetRenderEndTimeMs: 0,
						widgetParamsStartTimeMs: 0,
						widgetInitStartTimeMs: 0
					})), nt(_, te);
					var De = _.widgetMap.get(J);
					De || v("Turnstile Initialization Error ", 3606), L.style.display = "none", L.style.border = "none", L.style.overflow = "hidden", L.setAttribute("src", ct(J, C, d, W, te, "g", it(De)));
					var mt = ["cross-origin-isolated", "fullscreen"],
						Fe;
					D((Fe = (c = document.featurePolicy) === null || c === void 0 || (n = c.features) === null || n === void 0 ? void 0 : n.call(c)) !== null && Fe !== void 0 ? Fe : [], tt) && mt.push(tt), L.setAttribute("allow", mt.join("; ")), L.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), L.id = q;
					var We;
					L.tabIndex = (We = d.tabindex) !== null && We !== void 0 ? We : 0, L.title = "Widget containing a Cloudflare security challenge", p.appendChild(L);
					var Ue, ar = (Ue = d["response-field"]) !== null && Ue !== void 0 ? Ue : !0;
					if (ar) {
						var he = document.createElement("input");
						he.type = "hidden";
						var je;
						if (he.name = (je = d["response-field-name"]) !== null && je !== void 0 ? je : kt, he.id = "".concat(q, "_response"), p.appendChild(he), typeof d["response-field-name"] != "string" && mr(C)) {
							var xe = document.createElement("input");
							xe.type = "hidden", xe.name = Ct, xe.id = "".concat(q, "_legacy_response"), p.appendChild(xe)
						}
					}
					if (_.isRecaptchaCompatibilityMode) {
						var be = document.createElement("input");
						be.type = "hidden", be.name = Nt, be.id = "".concat(q, "_g_response"), p.appendChild(be)
					}
					return De.widgetRenderEndTimeMs = H(), q
				}
			}
		}

		function S() {
			var l, o = -1,
				n = !0,
				c = !1,
				a = void 0;
			try {
				for (var p = _.widgetMap[Symbol.iterator](), x; !(n = (x = p.next()).done); n = !0) {
					var E = we(x.value, 2),
						d = E[0],
						w = E[1];
					o < w.idx && (l = d, o = w.idx)
				}
			} catch (O) {
				c = !0, a = O
			} finally {
				try {
					!n && p.return != null && p.return()
				} finally {
					if (c) throw a
				}
			}
			return o === -1 && v("Could not find widget", 43778), l
		}
		return {
			ready: function(o) {
				if (_.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), v("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof o != "function" && v('turnstile.ready() expected a "function" argument, got "'.concat(typeof o == "undefined" ? "undefined" : N(o), '"'), 3841), o(), typeof o != "function" && v('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), _.isReady) {
					o();
					return
				}
				vt.push(o)
			},
			implicitRender: dt,
			execute: function(o, n) {
				var c = y(o);
				if (!c) {
					n === void 0 && v("Please provide 2 parameters to execute: container and parameters", 43521);
					var a = I(o, n);
					a || v("Failed to render widget", 43522), c = a
				}
				var p = _.widgetMap.get(c);
				if (p) {
					f(p, n);
					var x = Y(c);
					if (p.isExecuting) {
						b("Call to execute() on a widget that is already executing (".concat(x, "), consider using reset() before execute()"));
						return
					} else p.isExecuting = !0;
					if (p.response) {
						p.isExecuting = !1, b("Call to execute() on a widget that was already executed (".concat(x, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), p.cbSuccess && p.cbSuccess(p.response, !1);
						return
					}
					p.isExpired && b("Call to execute on a expired-widget (".concat(x, "), consider using reset() before")), p.isStale && (h(x), p.isExecuting = !0), p.msgQueue.push(Z.EXECUTE), p.isExecuted = !0;
					var E = document.querySelector("#".concat(x));
					if (E || (p.isExecuting = !1, v("Widget ".concat(x, " to execute was not found"), 43522)), p.isResetting) return;
					if (p.isInitialized && m(p, c, E), p.isInitialized && p.params.appearance === z.EXECUTE && st(E, p), p.isExecuting) {
						var d, w = document.querySelector("#".concat(x));
						w || v("Received state for an unknown widget: ".concat(c), 3078), (d = w.contentWindow) === null || d === void 0 || d.postMessage({
							source: M,
							widgetId: c,
							event: "execute"
						}, "*")
					}
				}
			},
			render: I,
			reset: h,
			remove: T,
			getResponse: function(o) {
				var n;
				if (typeof o == "undefined") {
					var c = S();
					if (c) {
						var a, p = _.widgetMap.get(c);
						return p != null && p.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), (a = _.widgetMap.get(c)) === null || a === void 0 ? void 0 : a.response
					} else v("Could not find a widget", 43794)
				}
				var x = y(o);
				return x || v("Could not find widget for provided container", 43778), (n = _.widgetMap.get(x)) === null || n === void 0 ? void 0 : n.response
			},
			isExpired: function(o) {
				var n;
				if (typeof o == "undefined") {
					var c = S();
					if (c) {
						var a, p;
						return (p = (a = _.widgetMap.get(c)) === null || a === void 0 ? void 0 : a.isExpired) !== null && p !== void 0 ? p : !1
					} else v("Could not find a widget", 43794)
				}
				var x = y(o);
				x || v("Could not find widget for provided container", 43778);
				var E;
				return (E = (n = _.widgetMap.get(x)) === null || n === void 0 ? void 0 : n.isExpired) !== null && E !== void 0 ? E : !1
			}
		}
	}();

	function gr(e) {
		var r = e.getAttribute("data-sitekey"),
			t = {
				sitekey: r
			},
			i = e.getAttribute("data-tabindex");
		i && (t.tabindex = parseInt(i, 10));
		var u = e.getAttribute("data-theme");
		u && (Ve(u) ? t.theme = u : b('Unknown data-theme value: "'.concat(u, '"')));
		var s = e.getAttribute("data-size");
		if (s && (Ke(s) ? t.size = s : b('Unknown data-size value: "'.concat(s, '"'))), 0) var g;
		var y = e.getAttribute("data-action");
		typeof y == "string" && (t.action = y);
		var m = e.getAttribute("data-cdata");
		typeof m == "string" && (t.cData = m);
		var f = e.getAttribute("data-retry");
		f && (qe(f) ? t.retry = f : b('Invalid data-retry value: "'.concat(f, ", expected either 'never' or 'auto'\"")));
		var h = e.getAttribute("data-retry-interval");
		if (h) {
			var T = parseInt(h, 10);
			Ge(T) ? t["retry-interval"] = T : b('Invalid data-retry-interval value: "'.concat(h, ', expected an integer value > 0 and < 900000"'))
		}
		var I = e.getAttribute("data-expiry-interval");
		if (I) {
			var S = parseInt(I, 10);
			Xe(S) ? t["expiry-interval"] = S : b('Invalid data-expiry-interval value: "'.concat(S, ', expected an integer value > 0 and < 360000"'))
		}
		var l = e.getAttribute("data-refresh-expired");
		l && ($e(l) ? t["refresh-expired"] = l : b('Unknown data-refresh-expired value: "'.concat(l, ", expected either: 'never', 'auto' or 'manual'.")));
		var o = e.getAttribute("data-language");
		o && (Je(o) ? t.language = o : b('Invalid data-language value: "'.concat(o, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));

		function n(w) {
			var O = e.getAttribute(w);
			return O && window[O] ? window[O] : void 0
		}
		var c = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		c.forEach(function(w) {
			t[w] = n("data-".concat(w))
		});
		var a, p = (a = e.getAttribute("data-response-field")) !== null && a !== void 0 ? a : "true";
		t["response-field"] = p === "true";
		var x = e.getAttribute("data-response-field-name");
		x && (t["response-field-name"] = x);
		var E = e.getAttribute("data-execution");
		E && (et(E) ? t.execution = E : b('Unknown data-execution value: "'.concat(E, ", expected either: 'render' or 'execute'.")));
		var d = e.getAttribute("data-appearance");
		return d && (Ze(d) ? t.appearance = d : b('Unknown data-appearance value: "'.concat(d, ", expected either: 'always', 'execute', or 'interaction-only'."))), t
	}

	function er() {
		var e = !0;
		at(_, e), _.msgHandler && window.removeEventListener("message", _.msgHandler), Vt(window.turnstile, _)
	}
	oe = !1, A = Bt(), _.scriptWasLoadedAsync = (Ce = A == null ? void 0 : A.loadedAsync) !== null && Ce !== void 0 ? Ce : !1, A != null && A.params && (ce = A.params.get("compat"), (ce == null ? void 0 : ce.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled") : (b("Compatibility layer enabled"), _.isRecaptchaCompatibilityMode = !0, window.grecaptcha = pt) : ce !== null && b('Unknown value for api.js?compat: "'.concat(ce, '", ignoring')), A.params.forEach(function(e, r) {
		D(["onload", "compat", "_cb", "_reload", "render"], r) || b('Unknown parameter passed to api.js: "?'.concat(r, '=...", ignoring'))
	}), oe = A.params.get("_upgrade") === "true", U = A.params.get("onload"), U && !oe && setTimeout(function() {
		typeof window[U] == "function" ? window[U]() : (b("Unable to find onload callback '".concat(U, "' immediately after loading, expected 'function', got '").concat(N(window[U]), "'")), setTimeout(function() {
			typeof window[U] == "function" ? window[U]() : b("Unable to find onload callback '".concat(U, "' after 1 second, expected 'function', got '").concat(N(window[U]), "'"))
		}, 1e3))
	}, 0)), ft = "turnstile" in window, ft && !oe ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (ft && oe && (qt(window.turnstile, _), nt(_, te), (A == null || (ke = A.params) === null || ke === void 0 ? void 0 : ke.get("render")) !== "explicit" && setTimeout(dt, 0)), window.turnstile = pt, oe || ((A == null || (Ne = A.params) === null || Ne === void 0 ? void 0 : Ne.get("render")) !== "explicit" && vt.push(dt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout($t, 0) : window.addEventListener("DOMContentLoaded", $t))), tr = 24 * 60 * 60 * 1e3, window.setTimeout(er, tr), te && (window.turnstile._testUpgrade = er);
	var oe, A, Ce, ce, U, ft, ke, Ne, tr;
})();