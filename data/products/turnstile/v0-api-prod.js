"use strict";
(function() {
	function gt(e, r, t, i, s, l, g) {
		try {
			var v = e[l](g),
				y = v.value
		} catch (u) {
			t(u);
			return
		}
		v.done ? r(y) : Promise.resolve(y).then(i, s)
	}

	function yt(e) {
		return function() {
			var r = this,
				t = arguments;
			return new Promise(function(i, s) {
				var l = e.apply(r, t);

				function g(y) {
					gt(l, i, s, g, v, "next", y)
				}

				function v(y) {
					gt(l, i, s, g, v, "throw", y)
				}
				g(void 0)
			})
		}
	}

	function k(e, r) {
		return r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : k(e, r)
	}

	function Te(e, r, t) {
		return r in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e
	}

	function je(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = arguments[r] != null ? arguments[r] : {},
				i = Object.keys(t);
			typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(s) {
				return Object.getOwnPropertyDescriptor(t, s).enumerable
			}))), i.forEach(function(s) {
				Te(e, s, t[s])
			})
		}
		return e
	}

	function rr(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var i = Object.getOwnPropertySymbols(e);
			r && (i = i.filter(function(s) {
				return Object.getOwnPropertyDescriptor(e, s).enumerable
			})), t.push.apply(t, i)
		}
		return t
	}

	function _t(e, r) {
		return r = r != null ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rr(Object(r)).forEach(function(t) {
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
				s = !0,
				l = !1,
				g, v;
			try {
				for (t = t.call(e); !(s = (g = t.next()).done) && (i.push(g.value), !(r && i.length === r)); s = !0);
			} catch (y) {
				l = !0, v = y
			} finally {
				try {
					!s && t.return != null && t.return()
				} finally {
					if (l) throw v
				}
			}
			return i
		}
	}

	function bt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function ze(e, r) {
		(r == null || r > e.length) && (r = e.length);
		for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
		return i
	}

	function Et(e, r) {
		if (e) {
			if (typeof e == "string") return ze(e, r);
			var t = Object.prototype.toString.call(e).slice(8, -1);
			if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(t);
			if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ze(e, r)
		}
	}

	function Se(e, r) {
		return ht(e) || xt(e, r) || Et(e, r) || bt()
	}

	function L(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Ae(e, r) {
		var t = {
				label: 0,
				sent: function() {
					if (l[0] & 1) throw l[1];
					return l[1]
				},
				trys: [],
				ops: []
			},
			i, s, l, g;
		return g = {
			next: v(0),
			throw: v(1),
			return: v(2)
		}, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
			return this
		}), g;

		function v(u) {
			return function(b) {
				return y([u, b])
			}
		}

		function y(u) {
			if (i) throw new TypeError("Generator is already executing.");
			for (; g && (g = 0, u[0] && (t = 0)), t;) try {
				if (i = 1, s && (l = u[0] & 2 ? s.return : u[0] ? s.throw || ((l = s.return) && l.call(s), 0) : s.next) && !(l = l.call(s, u[1])).done) return l;
				switch (s = 0, l && (u = [u[0] & 2, l.value]), u[0]) {
					case 0:
					case 1:
						l = u;
						break;
					case 4:
						return t.label++, {
							value: u[1],
							done: !1
						};
					case 5:
						t.label++, s = u[1], u = [0];
						continue;
					case 7:
						u = t.ops.pop(), t.trys.pop();
						continue;
					default:
						if (l = t.trys, !(l = l.length > 0 && l[l.length - 1]) && (u[0] === 6 || u[0] === 2)) {
							t = 0;
							continue
						}
						if (u[0] === 3 && (!l || u[1] > l[0] && u[1] < l[3])) {
							t.label = u[1];
							break
						}
						if (u[0] === 6 && t.label < l[1]) {
							t.label = l[1], l = u;
							break
						}
						if (l && t.label < l[2]) {
							t.label = l[2], t.ops.push(u);
							break
						}
						l[2] && t.ops.pop(), t.trys.pop();
						continue
				}
				u = r.call(e, t)
			} catch (b) {
				u = [6, b], s = 0
			} finally {
				i = l = 0
			}
			if (u[0] & 5) throw u[1];
			return {
				value: u[0] ? u[1] : void 0,
				done: !0
			}
		}
	}
	var wt = 300020;
	var Ie = 300030;

	function P(e, r) {
		return e.indexOf(r) !== -1
	}
	var D;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(D || (D = {}));
	var W;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(W || (W = {}));
	var Re;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Re || (Re = {}));
	var fe;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(fe || (fe = {}));
	var B;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(B || (B = {}));
	var j;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(j || (j = {}));
	var ae;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(ae || (ae = {}));
	var ee;
	(function(e) {
		e.EXECUTE = "execute"
	})(ee || (ee = {}));
	var He;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(He || (He = {}));

	function Ve(e) {
		return P(["auto", "dark", "light"], e)
	}

	function qe(e) {
		return P(["auto", "never"], e)
	}

	function Be(e) {
		return e > 0 && e < 9e5
	}

	function Ge(e) {
		return e > 0 && e < 36e4
	}
	var nr = /^[0-9A-Za-z_-]{3,100}$/;

	function Tt(e) {
		return nr.test(e)
	}
	var ar = /^[a-z0-9_-]{0,32}$/i;

	function Xe(e) {
		return e === void 0 ? !0 : typeof e == "string" && ar.test(e)
	}
	var ir = /^[a-z0-9_\-=]{0,255}$/i;

	function Ye(e) {
		return e === void 0 ? !0 : typeof e == "string" && ir.test(e)
	}

	function Qe(e) {
		return P(["normal", "compact", "invisible"], e)
	}

	function Ke(e) {
		return P(["auto", "manual", "never"], e)
	}
	var or = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function $e(e) {
		return e === "auto" || or.test(e)
	}

	function Je(e) {
		return P(["always", "execute", "interaction-only"], e)
	}

	function Ze(e) {
		return P(["render", "execute"], e)
	}
	var U = "0/0";
	var St = 300,
		At = 10;
	var ie = "cf-chl-widget-",
		M = "cloudflare-challenge",
		It = ".cf-turnstile",
		Rt = ".cf-challenge",
		Ot = ".g-recaptcha",
		Ct = "cf_challenge_response",
		Nt = "cf-turnstile-response",
		kt = "g-recaptcha-response",
		Lt = 8e3,
		et = "private-token",
		Mt = 3,
		Pt = 500,
		Dt = 500;

	function Oe(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Ut(e, r) {
		if (!k(e, r)) throw new TypeError("Cannot call a class as a function")
	}

	function G(e, r) {
		return G = Object.setPrototypeOf || function(i, s) {
			return i.__proto__ = s, i
		}, G(e, r)
	}

	function Ft(e, r) {
		if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(r && r.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), r && G(e, r)
	}

	function Ce() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function de(e, r, t) {
		return Ce() ? de = Reflect.construct : de = function(s, l, g) {
			var v = [null];
			v.push.apply(v, l);
			var y = Function.bind.apply(s, v),
				u = new y;
			return g && G(u, g.prototype), u
		}, de.apply(null, arguments)
	}

	function te(e) {
		return te = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		}, te(e)
	}

	function Wt(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Ne(e) {
		var r = typeof Map == "function" ? new Map : void 0;
		return Ne = function(i) {
			if (i === null || !Wt(i)) return i;
			if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof r != "undefined") {
				if (r.has(i)) return r.get(i);
				r.set(i, s)
			}

			function s() {
				return de(i, arguments, te(this).constructor)
			}
			return s.prototype = Object.create(i.prototype, {
				constructor: {
					value: s,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), G(s, i)
		}, Ne(e)
	}

	function jt(e, r) {
		return r && (L(r) === "object" || typeof r == "function") ? r : Oe(e)
	}

	function zt(e) {
		var r = Ce();
		return function() {
			var i = te(e),
				s;
			if (r) {
				var l = te(this).constructor;
				s = Reflect.construct(i, arguments, l)
			} else s = i.apply(this, arguments);
			return jt(this, s)
		}
	}
	var Ht = function(e) {
		"use strict";
		Ft(t, e);
		var r = zt(t);

		function t(i, s) {
			Ut(this, t);
			var l;
			return l = r.call(this, i), Te(Oe(l), "code", void 0), l.name = "TurnstileError", l.code = s, l
		}
		return t
	}(Ne(Error));

	function m(e, r) {
		var t = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Ht(t, r)
	}

	function x(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function ke(e) {
		return e.startsWith(ie) ? e.substring(ie.length) : null
	}

	function X(e) {
		return "".concat(ie).concat(e)
	}

	function tt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (k(r, HTMLScriptElement) && e.test(r.src)) return r;
		for (var t = document.querySelectorAll("script"), i = 0, s; s = t[i]; i++)
			if (k(s, HTMLScriptElement) && e.test(s.src)) return s
	}

	function Vt() {
		var e = tt();
		if (!e) return m("Could not find Turnstile script tag, some features may not be available", 43777), null;
		var r = {
			loadedAsync: !1,
			params: new URLSearchParams
		};
		(e.async || e.defer) && (r.loadedAsync = !0);
		var t = e.src,
			i = t.split("?");
		return i.length > 1 && (r.params = new URLSearchParams(i[1])), r
	}
	var cr = 900,
		ur = 3;

	function sr(e, r) {
		e.watchCatSeq++;
		var t = !0,
			i = !1,
			s = void 0;
		try {
			for (var l = e.widgetMap[Symbol.iterator](), g; !(t = (g = l.next()).done); t = !0) {
				var v = Se(g.value, 2),
					y = v[0],
					u = v[1],
					b;
				u.watchcat.seq = e.watchCatSeq, u.watchcat.lastAckedSeq === 0 && (u.watchcat.lastAckedSeq = e.watchCatSeq);
				var T = X(y);
				if (!T) {
					u.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(T, ", consider using turnstile.remove() to clean up a widget.")), u.watchcat.missingWidgetWarning = !0);
					continue
				}
				var S = document.querySelector("#".concat(T));
				if (!S) {
					u.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(T, ", consider using turnstile.remove() to clean up a widget.")), u.watchcat.missingWidgetWarning = !0);
					continue
				}
				if ((u.isExecuting || !u.isInitialized || u.isInitialized && !u.isStale && !u.isExecuted) && u.watchcat.lastAckedSeq !== 0 && u.watchcat.lastAckedSeq < u.watchcat.seq - 1 - ur) {
					var C;
					u.watchcat.lastAckedSeq = 0, u.watchcat.seq = 0, u.isExecuting = !1, console.log("Turnstile Widget seem to have crashed: ", y);
					var f;
					if ((C = e.msgHandler) === null || C === void 0 || C.call(e, {
							data: {
								source: M,
								widgetId: y,
								code: Ie,
								event: "fail",
								rcV: (f = u.rcV) !== null && f !== void 0 ? f : U
							}
						}), r) {
						var o;
						window.postMessage({
							source: M,
							widgetId: y,
							event: "rcv-update",
							rcV: (o = u.rcV) !== null && o !== void 0 ? o : U
						}, "*")
					}
					continue
				}(b = S.contentWindow) === null || b === void 0 || b.postMessage({
					source: M,
					widgetId: y,
					seq: e.watchCatSeq,
					event: "meow"
				}, "*")
			}
		} catch (n) {
			i = !0, s = n
		} finally {
			try {
				!t && l.return != null && l.return()
			} finally {
				if (i) throw s
			}
		}
	}

	function rt(e, r) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			sr(e, r)
		}, cr))
	}

	function nt(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || r) && clearInterval(e.watchCatInterval)
	}

	function at(e) {
		var r = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && r.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && r.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), r.size !== 0) return r.toString()
	}

	function it(e, r) {
		var t = "https://challenges.cloudflare.com";
		if (r) {
			var i;
			t = (i = e["base-url"]) !== null && i !== void 0 ? i : t
		}
		return t
	}

	function ot(e, r, t, i, s, l, g) {
		var v = it(t, s),
			y = l ? "h/".concat(l, "/") : "",
			u = g ? "?".concat(g) : "";
		return "".concat(v, "/cdn-cgi/challenge-platform/").concat(y, "turnstile/if/ov2/av0/rcv").concat(i, "/").concat(e, "/").concat(r, "/").concat(t.theme, "/").concat(t.size).concat(u)
	}

	function qt(e, r) {
		var t;
		r.upgradeAttempts++;
		var i = tt();
		if (!(!i || !i.parentNode)) {
			var s = i == null ? void 0 : i.nonce;
			e._pState = r;
			var l = new URL(i.src),
				g = document.createElement("script");
			l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), g.async = !0, s && (g.nonce = s), g.setAttribute("crossorigin", "anonymous"), g.src = l.toString(), i == null || (t = i.parentNode) === null || t === void 0 || t.replaceChild(g, i)
		}
	}

	function Bt(e, r) {
		var t = e._pState;
		return t ? (r.isReady = t.isReady, r.isRecaptchaCompatibilityMode = t.isRecaptchaCompatibilityMode, r.lastWidgetIdx = t.lastWidgetIdx, r.scriptWasLoadedAsync = t.scriptWasLoadedAsync, r.upgradeAttempts = t.upgradeAttempts, r.upgradeCount = t.upgradeCount + 1, r.watchCatInterval = null, r.watchCatSeq = t.watchCatSeq, r.widgetMap = t.widgetMap, !0) : !1
	}
	var ct = function(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > r ? e.substring(0, r) : e
	};

	function Gt(e) {
		var r = function(t, i) {
			if (!t || t.tagName === "BODY") return i;
			for (var s = 1, l = t.previousElementSibling; l;) l.tagName === t.tagName && s++, l = l.previousElementSibling;
			var g = ct(t.tagName.toLowerCase()),
				v = "".concat(g, "[").concat(s, "]");
			return r(t.parentNode, "/".concat(v).concat(i))
		};
		return r(e, "")
	}

	function Xt(e, r, t) {
		for (var i = "", s = 0, l = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(T) {
					return s > r || i.length > t ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), g;
			(g = l.nextNode()) !== null && i.length < t;) {
			if (g.nodeType === Node.ELEMENT_NODE) {
				var v = g;
				i += "".concat(ct(v.tagName.toLowerCase()));
				for (var y = 0; y < v.attributes.length; y++) {
					var u = v.attributes[y];
					i += "_".concat(ct(u.name, 2))
				}
				i += ">"
			} else g.nodeType === Node.TEXT_NODE && (i += "-t");
			var b = g.parentNode;
			for (s = 0; b !== e && b !== null;) s++, b = b.parentNode
		}
		return i.substring(0, t)
	}

	function Yt(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : L(e)));
		for (var r = 5381, t = 0; t < e.length; t++) {
			var i = e.charCodeAt(t);
			r = r * 33 ^ i
		}
		return r >>> 0
	}

	function Y() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}
	var ce = !1,
		_ = {
			turnstileLoadInitTimeMs: Y(),
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

	function ut(e) {
		Zt(e, "")
	}

	function ft() {
		var e = [It, Rt];
		_.isRecaptchaCompatibilityMode && e.push(Ot), document.querySelectorAll(e.join(", ")).forEach(function(r) {
			return pt.render(r)
		})
	}
	var dt = [];

	function Qt() {
		_.isReady = !0;
		var e = !0,
			r = !1,
			t = void 0;
		try {
			for (var i = dt[Symbol.iterator](), s; !(e = (s = i.next()).done); e = !0) {
				var l = s.value;
				l()
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

	function lr(e, r) {
		var t, i = it(r.params, ce),
			s = "h/".concat("b", "/"),
			l = document.getElementById(e);
		if (!l) {
			m("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			return
		}
		var g = document.createElement("div");
		g.style.position = "fixed", g.style.zIndex = "21474836419";
		var v = document.createElement("div");
		v.className = "cf-turnstile-feedback", v.id = "cf-fr-id", v.style.borderColor = "#000000", v.style.width = "450px", v.style.height = "450px", v.style.position = "absolute", v.style.zIndex = "21474836420", v.style.borderWidth = "1px", v.style.borderColor = "#000", v.style.borderStyle = "solid", v.style.backgroundColor = "#ffffff", v.style.borderRadius = "10px", v.style.left = "-122px", v.style.top = "-91px", v.style.overflow = "hidden";
		var y = document.createElement("iframe");
		y.id = e + "-fr", y.setAttribute("src", "".concat(i, "/cdn-cgi/challenge-platform/").concat(s, "feedback-reports/").concat(ke(e))), y.setAttribute("allow", "cross-origin-isolated; fullscreen"), y.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), y.setAttribute("scrolling", "no"), y.style.width = "100%", y.style.height = "100%", y.style.overflow = "hidden";
		var u = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		u.style.position = "absolute", u.style.width = "26px", u.style.height = "26px", u.style.zIndex = "21474836421", u.style.cursor = "pointer", u.style.right = "2px", u.style.top = "5px", u.setAttribute("width", "26"), u.setAttribute("height", "26"), u.addEventListener("click", function() {
			var C;
			(C = g.parentNode) === null || C === void 0 || C.removeChild(g)
		});
		var b = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		b.setAttribute("ry", "12"), b.setAttribute("rx", "12"), b.setAttribute("cy", "12"), b.setAttribute("cx", "12"), b.setAttribute("fill", "#aaaaaa"), b.setAttribute("stroke-width", "0"), u.appendChild(b);
		var T = document.createElementNS("http://www.w3.org/2000/svg", "line");
		T.setAttribute("stroke-width", "3"), T.setAttribute("stroke", "#fff"), T.setAttribute("fill", "none"), T.setAttribute("x1", "6"), T.setAttribute("x2", "18"), T.setAttribute("y1", "18"), T.setAttribute("y2", "5"), u.appendChild(T);
		var S = document.createElementNS("http://www.w3.org/2000/svg", "line");
		S.setAttribute("stroke-width", "3"), S.setAttribute("stroke", "#fff"), S.setAttribute("fill", "none"), S.setAttribute("x1", "6"), S.setAttribute("x2", "18"), S.setAttribute("y1", "5"), S.setAttribute("y2", "18"), u.appendChild(S), v.appendChild(y), v.appendChild(u), g.appendChild(v), (t = l.parentNode) === null || t === void 0 || t.appendChild(g)
	}

	function Zt(e, r) {
		var t = document.getElementById("".concat(e, "_response"));
		t !== null && k(t, HTMLInputElement) && (t.value = r);
		var i = document.getElementById("".concat(e, "_legacy_response"));
		if (i !== null && k(i, HTMLInputElement) && (i.value = r), _.isRecaptchaCompatibilityMode) {
			var s = document.getElementById("".concat(e, "_g_response"));
			s !== null && k(s, HTMLInputElement) && (s.value = r)
		}
	}

	function st(e, r) {
		var t = r.params,
			i = t.size,
			s = i === void 0 ? "normal" : i,
			l = r.mode;
		switch (l) {
			case D.NON_INTERACTIVE:
			case D.MANAGED:
				switch (s) {
					case W.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case W.INVISIBLE:
						m('Invalid value for parameter "size", expected "'.concat(W.COMPACT, '" or "').concat(W.NORMAL, '", got "').concat(s, '"'), 2817);
					case W.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case D.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				m('Invalid value for parameter "mode", expected "'.concat(D.NON_INTERACTIVE, '", "').concat(D.MANAGED, '" or "').concat(D.INVISIBLE, '", got "').concat(l, '"'), 2818);
				return
		}
	}

	function Kt(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function fr(e, r) {
		var t = r.get("turnstile_iframe_alt");
		t && (e.title = t)
	}

	function dr(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function pr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function $t() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var pt = function() {
		function e(f, o, n, c) {
			return r.apply(this, arguments)
		}

		function r() {
			return r = yt(function(f, o, n, c) {
				var a, p, h, E, d, w, A, z, N, H;
				return Ae(this, function(R) {
					switch (R.label) {
						case 0:
							if (a = f.params.sitekey, p = $t(), !p) return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), i(f, o, !1), [2];
							h = "h/".concat("b", "/"), E = new URL(p), d = "https", w = "", A = "".concat(d, "://").concat(E.host, "/cdn-cgi/challenge-platform/").concat(h, "rc/").concat(c).concat(w), R.label = 1;
						case 1:
							return R.trys.push([1, 6, , 7]), [4, fetch(A, {
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
							return z = R.sent(), z.status === 200 ? [3, 3] : (x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), i(f, o, !1), [3, 5]);
						case 3:
							return [4, z.json()];
						case 4:
							if (N = R.sent(), "status" in N && N.status === "redeemed") return i(f, o, !0), [2];
							R.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return H = R.sent(), x("Error contacting Turnstile, aborting clearance remdeption."), i(f, o, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), r.apply(this, arguments)
		}

		function t(f, o, n) {
			if (f.params.retry === fe.AUTO || n) {
				f.isExecuted && (f.msgQueue.push(ee.EXECUTE), f.isExecuted = !0, f.isExecuting = !0);
				var c, a = n ? 0 : 1e3 * 2 + ((c = f.params["retry-interval"]) !== null && c !== void 0 ? c : 0);
				f.retryTimeout = window.setTimeout(function() {
					b(o)
				}, a)
			}
		}

		function i(f, o, n) {
			if (f.response === void 0) {
				m("[Internal Error] Widget was completed but no response was given", 1362);
				return
			}
			f.isExecuting = !1, Zt(o, f.response);
			var c = f.cbSuccess;
			c && c(f.response, n)
		}

		function s(f) {
			if (!f) return [];
			for (var o = f.attributes, n = o.length, c = new Array(n), a = 0; a < n; a++) c[a] = o[a].name;
			return c
		}
		var l = function(o) {
			var n = o.data;
			if (n.source === M) {
				if (!dr(o)) {
					x("Ignored message from wrong origin: " + o.origin);
					return
				}
				if (!(!n.widgetId || !_.widgetMap.has(n.widgetId))) {
					var c = X(n.widgetId),
						a = _.widgetMap.get(n.widgetId);
					if (!(!c || !a)) switch (n.event) {
						case "init": {
							var p;
							a.widgetInitStartTimeMs = Y();
							var h = document.getElementById(c);
							if (!h) {
								m("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3074);
								return
							}
							a.mode = n.mode, a.mode === D.INVISIBLE && a.params["refresh-expired"] === B.MANUAL && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(B.AUTO, "' or '").concat(B.NEVER, "'")), a.params.appearance === j.ALWAYS || a.isExecuting && a.params.appearance === j.EXECUTE ? st(h, a) : Kt(h), h.style.display = "";
							var E = document.querySelector("#".concat(c));
							if (!E) {
								m("Received state for an unknown widget: ".concat(n.widgetId), 3078);
								return
							}(p = E.contentWindow) === null || p === void 0 || p.postMessage({
								source: M,
								widgetId: n.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var d = document.getElementById(c);
							if (!d) {
								m("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3074);
								return
							}
							var w = new Map;
							Object.keys(n.translationData).forEach(function(xe) {
								w.set(xe, n.translationData[xe])
							}), fr(d, w);
							break
						}
						case "languageUnsupported": {
							x("Language ".concat(a.params.language, " is not supported, falling back to: ").concat(n.fallback));
							break
						}
						case "reject": {
							var A = document.getElementById(c);
							if (a.isExecuting = !1, !A) {
								m("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3075);
								return
							}
							if (n.reason === "outdated_browser") {
								var z = a.cbUnsupported;
								z && z()
							}
							break
						}
						case "food": {
							a.watchcat && n.seq > a.watchcat.lastAckedSeq && (a.watchcat.lastAckedSeq = n.seq);
							break
						}
						case "complete": {
							a.rcV = U, a.response = n.token, n.sToken ? e(a, c, n.sToken, n.chlId) : i(a, c, !1);
							break
						}
						case "fail": {
							n.rcV && (a.rcV = n.rcV), n.cfChlOut && (a.cfChlOut = n.cfChlOut), n.cfChlOutS && (a.cfChlOutS = n.cfChlOutS), n.code && (a.errorCode = n.code), a.isExecuting = !1, a.isInitialized = !0, ut(c);
							var N = a.cbError,
								H = n.code === Ie;
							if (N) {
								var R;
								N(String((R = n.code) !== null && R !== void 0 ? R : wt)) || (n.code && x("Error: ".concat(n.code)), t(a, c, H))
							} else n.code ? (t(a, c, H), m("Error: ".concat(n.code), 3076)) : t(a, c, !1);
							break
						}
						case "feedbackInit": {
							lr(c, a);
							break
						}
						case "requestFeedbackData": {
							var Q, re = document.querySelector("#".concat(c));
							if (!re) {
								m("Received state for an unknown widget: ".concat(n.widgetId), 3078);
								return
							}(Q = re.contentWindow) === null || Q === void 0 || Q.postMessage({
								source: M,
								widgetId: n.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var K, ne = document.querySelector("#".concat(c, "-fr"));
							if (!ne) {
								m("Received state for an unknown widget: ".concat(n.widgetId), 3078);
								return
							}(K = ne.contentWindow) === null || K === void 0 || K.postMessage({
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
							var $, ue, ve = document.querySelector("#".concat(c, "-fr"));
							if (!ve) {
								m("Received state for an unknown widget: ".concat(n.widgetId), 3078);
								return
							}(ue = ve.parentElement) === null || ue === void 0 || ($ = ue.parentElement) === null || $ === void 0 || $.remove();
							break
						}
						case "tokenExpired": {
							var Pe = n.token;
							a.isExpired = !0;
							var me = a.cbExpired;
							me && me(Pe), a.params["refresh-expired"] === B.AUTO && !a.isResetting && b(c);
							break
						}
						case "interactiveTimeout": {
							a.rcV = U, ut(c);
							var ge = a.cbTimeout;
							ge ? ge() : x("The widget encountered an interactive timeout. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
							break
						}
						case "refreshRequest": {
							a.rcV = U, b(c);
							break
						}
						case "interactiveBegin": {
							var ye = document.getElementById(c);
							if (!ye) {
								m("Cannot layout widget, Element not found (#".concat(c, ")."), 3076);
								return
							}
							var _e = a.cbBeforeInteractive;
							_e && _e(), a.params.appearance === j.INTERACTION_ONLY && st(ye, a);
							break
						}
						case "interactiveEnd": {
							var se = document.getElementById(c);
							if (!se) {
								m("Cannot unlayout widget, Element not found (#".concat(c, ")."), 3077);
								return
							}
							var V = a.cbAfterInteractive;
							V && V();
							break
						}
						case "widgetStale": {
							a.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var J;
							a.widgetParamsStartTimeMs = Y();
							var O = document.querySelector("#".concat(c));
							if (!O) {
								m("Received state for an unknown widget: ".concat(n.widgetId), 3078);
								return
							}
							a.isResetting = !1;
							var Z = {},
								q = Y(),
								he = {
									"w.iW": window.innerWidth,
									"ht.atrs": s(document.body.parentNode),
									pi: {
										xp: Gt(O).substring(0, Dt),
										pfp: Xt(document, Mt, Pt),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: Yt(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href
									}
								},
								le = Y() - q;
							(J = O.contentWindow) === null || J === void 0 || J.postMessage(je({
								source: M,
								widgetId: n.widgetId,
								event: "extraParams",
								action: a.action,
								cData: a.cData,
								chlPageData: a.chlPageData,
								rcV: a.rcV,
								ch: "ace796eb5511",
								url: $t(),
								retry: a.params.retry,
								"expiry-interval": a.params["expiry-interval"],
								"retry-interval": a.params["retry-interval"],
								"refresh-expired": a.params["refresh-expired"],
								language: a.params.language,
								execution: a.params.execution,
								appearance: a.params.appearance,
								wPr: he,
								turnstileAgeMs: Y() - _.turnstileLoadInitTimeMs,
								widgetAgeMs: Y() - a.widgetRenderStartTimeMs,
								timeToInitMs: a.widgetInitStartTimeMs - a.widgetRenderStartTimeMs,
								timeToParamsMs: a.widgetParamsStartTimeMs - a.widgetInitStartTimeMs,
								tiefTimeMs: le
							}, Z), "*"), y(a, n.widgetId, O), a.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		_.msgHandler = l, window.addEventListener("message", l);

		function g() {
			var f = "abcdefghijklmnopqrstuvwxyz0123456789",
				o = f.length,
				n;
			do {
				n = "";
				for (var c = 0; c < 5; c++) n += f.charAt(Math.floor(Math.random() * o))
			} while (_.widgetMap.has(n));
			return n
		}

		function v(f) {
			if (typeof f == "string") {
				var o = ke(f);
				if (o && _.widgetMap.has(o)) return o;
				try {
					var n = document.querySelector(f);
					return n ? v(n) : null
				} catch (a) {
					return null
				}
			}
			if (k(f, HTMLElement)) {
				var c = f.querySelector("iframe");
				return c ? ke(c.id) : null
			}
			return f || _.widgetMap.size === 0 ? null : _.widgetMap.keys().next().value
		}

		function y(f, o, n) {
			for (; f.msgQueue.length;) {
				var c, a = f.msgQueue.pop();
				(c = n.contentWindow) === null || c === void 0 || c.postMessage({
					source: M,
					widgetId: o,
					event: a
				}, "*")
			}
		}

		function u(f, o) {
			if (o) {
				var n = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
					c = [],
					a = !0,
					p = !1,
					h = void 0;
				try {
					for (var E = n[Symbol.iterator](), d; !(a = (d = E.next()).done); a = !0) {
						var w = d.value;
						o[w] && o[w] !== f.params[w] && c.push(w)
					}
				} catch (A) {
					p = !0, h = A
				} finally {
					try {
						!a && E.return != null && E.return()
					} finally {
						if (p) throw h
					}
				}
				if (c.length !== 0) {
					m("The parameters ".concat(n.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(c.join(",")), 3618);
					return
				}
				if (o.action) {
					if (!Xe(o.action)) {
						m('Invalid input for optional parameter "action", got "'.concat(o.action, '"'), 3604);
						return
					}
					f.action = o.action
				}
				if (o.cData) {
					if (!Ye(o.cData)) {
						m('Invalid input for optional parameter "cData", got "'.concat(o.cData, '"'), 3605);
						return
					}
					f.cData = o.cData
				}
				o["after-interactive-callback"] && (f.cbAfterInteractive = o["after-interactive-callback"]), o["before-interactive-callback"] && (f.cbBeforeInteractive = o["before-interactive-callback"]), o.callback && (f.cbSuccess = o.callback), o["expired-callback"] && (f.cbExpired = o["expired-callback"]), o["timeout-callback"] && (f.cbTimeout = o["timeout-callback"]), o["error-callback"] && (f.cbError = o["error-callback"]), o["unsupported-callback"] && (f.cbUnsupported = o["unsupported-callback"]), o.chlPageData && (f.chlPageData = o.chlPageData)
			}
		}

		function b(f) {
			var o = v(f);
			if (!o) {
				m("Nothing to reset found for provided container", 3329);
				return
			}
			var n = _.widgetMap.get(o);
			if (n) {
				n.isResetting = !0, n.response = void 0, n.mode = void 0, n.msgQueue = [], n.isExpired = !1, n.isExecuting = !1, n.isStale = !1, n.isInitialized = !1, n.watchcat.lastAckedSeq = 0, n.watchcat.seq = 0, n.params.execution === ae.RENDER && (n.msgQueue.push(ee.EXECUTE), n.isExecuted = !0, n.isExecuting = !0);
				var c = X(o),
					a = document.querySelector("#".concat(c));
				if (!c || !a) {
					m("Widget ".concat(o, " to reset was not found."), 3330);
					return
				}
				if (n.params.appearance === j.INTERACTION_ONLY && Kt(a), n.params.sitekey === null) {
					m("Unexpected Error: Sitekey is null", 3347);
					return
				}
				var p;
				a.src = ot(o, n.params.sitekey, n.params, (p = n.rcV) !== null && p !== void 0 ? p : U, ce, "b", at(n)), ut(c), n.retryTimeout && window.clearTimeout(n.retryTimeout)
			} else {
				m("Widget ".concat(o, " to reset was not found."), 3331);
				return
			}
		}

		function T(f) {
			var o, n = v(f);
			if (!n || !_.widgetMap.has(n)) {
				x("Nothing to remove found for the provided container");
				return
			}
			var c = X(n),
				a = ["iframe#".concat(c), "input#".concat(c, "_response"), "input#".concat(c, "_legacy_response"), "input#".concat(c, "_g_response")];
			document.querySelectorAll(a.join(", ")).forEach(function(h) {
				return h.remove()
			});
			var p = (o = _.widgetMap.get(n)) === null || o === void 0 ? void 0 : o.retryTimeout;
			p && window.clearTimeout(p), _.widgetMap.delete(n), nt(_)
		}

		function S(f, o) {
			var n, c, a = Y(),
				p;
			if (typeof f == "string") try {
					var h = document.querySelector(f);
					if (!h) {
						m('Unable to find a container for "'.concat(f, '"'), 3585);
						return
					}
					p = h
				} catch (gr) {
					m('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(f, '"'), 3586);
					return
				} else if (k(f, HTMLElement)) p = f;
				else {
					m('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
					return
				} var E = vr(p);
			if (E) {
				var d = Object.assign(E, o),
					w = d.action,
					A = d.cData,
					z = d.chlPageData,
					N = d.sitekey,
					H;
				d.theme = (H = d.theme) !== null && H !== void 0 ? H : Re.AUTO;
				var R;
				d.retry = (R = d.retry) !== null && R !== void 0 ? R : fe.AUTO;
				var Q;
				d.execution = (Q = d.execution) !== null && Q !== void 0 ? Q : ae.RENDER;
				var re;
				d.appearance = (re = d.appearance) !== null && re !== void 0 ? re : j.ALWAYS;
				var K;
				d["retry-interval"] = +((K = d["retry-interval"]) !== null && K !== void 0 ? K : Lt);
				var ne;
				d["expiry-interval"] = +((ne = d["expiry-interval"]) !== null && ne !== void 0 ? ne : (St - At) * 1e3);
				var $;
				d.size = ($ = d.size) !== null && $ !== void 0 ? $ : W.NORMAL;
				var ue = d.callback,
					ve = d["expired-callback"],
					Pe = d["timeout-callback"],
					me = d["after-interactive-callback"],
					ge = d["before-interactive-callback"],
					ye = d["error-callback"],
					_e = d["unsupported-callback"];
				if (typeof N != "string") {
					m('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof N == "undefined" ? "undefined" : L(N), '"'), 3588);
					return
				}
				if (!Tt(N)) {
					m('Invalid input for parameter "sitekey", got "'.concat(N, '"'), 3589);
					return
				}
				if (!Qe(d.size)) {
					m('Invalid type for parameter "size", expected normal|compact, got "'.concat(d.size, '" ').concat(L(d.size)), 3590);
					return
				}
				if (!Ve(d.theme)) {
					m('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(d.theme, '" ').concat(L(d.theme)), 3591);
					return
				}
				if (!qe(d.retry)) {
					m('Invalid type for parameter "retry", expected never|auto, got "'.concat(d.retry, '" ').concat(L(d.retry)), 3592);
					return
				}
				if (d.language || (d.language = "auto"), !$e(d.language)) {
					m('Invalid language value: "'.concat(d.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
					return
				}
				if (!Je(d.appearance)) {
					m('Unknown appearance value: "'.concat(d.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
					return
				}
				if (!Ze(d.execution)) {
					m('Unknown execution value: "'.concat(d.execution, ", expected either: 'render' or 'execute'."), 3601);
					return
				}
				if (!Be(d["retry-interval"])) {
					m('Invalid retry-interval value: "'.concat(d["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
					return
				}
				if (!Ge(d["expiry-interval"])) {
					m('Invalid expiry-interval value: "'.concat(d["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					return
				}
				var se, V = (se = d["refresh-expired"]) !== null && se !== void 0 ? se : B.AUTO;
				if (Ke(V)) d["refresh-expired"] = V;
				else {
					m('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(V, '" ').concat(typeof V == "undefined" ? "undefined" : L(V)), 3603);
					return
				}
				var J = p.getElementsByTagName("iframe")[0];
				J != null && J.id.startsWith(ie) && T(p);
				var O = document.createElement("iframe");
				if (!Xe(w)) {
					m('Invalid input for optional parameter "action", got "'.concat(w, '"'), 3604);
					return
				}
				if (!Ye(A)) {
					m('Invalid input for optional parameter "cData", got "'.concat(A, '"'), 3605);
					return
				}
				var Z = g(),
					q = X(Z);
				if (!(!Z || !q)) {
					var he = [],
						le = d.execution === ae.RENDER;
					le && he.push(ee.EXECUTE), _.lastWidgetIdx++;
					var xe = {};
					_.widgetMap.set(Z, _t(je({
						idx: _.lastWidgetIdx,
						action: w,
						cData: A,
						chlPageData: z,
						cbSuccess: ue,
						cbError: ye,
						cbExpired: ve,
						cbTimeout: Pe,
						cbUnsupported: _e,
						cbAfterInteractive: me,
						cbBeforeInteractive: ge,
						params: d,
						isStale: !1,
						isExpired: !1,
						isExecuting: le,
						isResetting: !1,
						isExecuted: le,
						isInitialized: !1,
						msgQueue: he,
						rcV: U,
						watchcat: {
							seq: 0,
							lastAckedSeq: 0,
							missingWidgetWarning: !1
						}
					}, xe), {
						widgetRenderStartTimeMs: a,
						widgetParamsStartTimeMs: 0,
						widgetInitStartTimeMs: 0
					})), rt(_, ce);
					var vt = _.widgetMap.get(Z);
					if (!vt) {
						m("Turnstile Initialization Error ", 3606);
						return
					}
					O.style.display = "none", O.style.border = "none", O.style.overflow = "hidden", O.setAttribute("src", ot(Z, N, d, U, ce, "b", at(vt)));
					var mt = ["cross-origin-isolated", "fullscreen"],
						De;
					P((De = (c = document.featurePolicy) === null || c === void 0 || (n = c.features) === null || n === void 0 ? void 0 : n.call(c)) !== null && De !== void 0 ? De : [], et) && mt.push(et), O.setAttribute("allow", mt.join("; ")), O.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), O.id = q;
					var Ue;
					O.tabIndex = (Ue = d.tabindex) !== null && Ue !== void 0 ? Ue : 0, O.title = "Widget containing a Cloudflare security challenge", p.appendChild(O);
					var Fe, tr = (Fe = d["response-field"]) !== null && Fe !== void 0 ? Fe : !0;
					if (tr) {
						var be = document.createElement("input");
						be.type = "hidden";
						var We;
						if (be.name = (We = d["response-field-name"]) !== null && We !== void 0 ? We : Nt, be.id = "".concat(q, "_response"), p.appendChild(be), typeof d["response-field-name"] != "string" && pr(N)) {
							var Ee = document.createElement("input");
							Ee.type = "hidden", Ee.name = Ct, Ee.id = "".concat(q, "_legacy_response"), p.appendChild(Ee)
						}
					}
					if (_.isRecaptchaCompatibilityMode) {
						var we = document.createElement("input");
						we.type = "hidden", we.name = kt, we.id = "".concat(q, "_g_response"), p.appendChild(we)
					}
					return q
				}
			}
		}

		function C() {
			var f, o = -1,
				n = !0,
				c = !1,
				a = void 0;
			try {
				for (var p = _.widgetMap[Symbol.iterator](), h; !(n = (h = p.next()).done); n = !0) {
					var E = Se(h.value, 2),
						d = E[0],
						w = E[1];
					o < w.idx && (f = d, o = w.idx)
				}
			} catch (A) {
				c = !0, a = A
			} finally {
				try {
					!n && p.return != null && p.return()
				} finally {
					if (c) throw a
				}
			}
			if (o === -1) {
				m("Could not find widget", 43778);
				return
			}
			return f
		}
		return {
			ready: function(o) {
				if (_.scriptWasLoadedAsync && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), m("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof o != "function" && m('turnstile.ready() expected a "function" argument, got "'.concat(typeof o == "undefined" ? "undefined" : L(o), '"'), 3841), o(), typeof o != "function" && m('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), _.isReady) {
					o();
					return
				}
				dt.push(o)
			},
			implicitRender: ft,
			execute: function(o, n) {
				var c = v(o);
				if (!c) {
					if (n === void 0) {
						m("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var a = S(o, n);
					if (!a) {
						m("Failed to render widget", 43522);
						return
					}
					c = a
				}
				var p = _.widgetMap.get(c);
				if (p) {
					u(p, n);
					var h = X(c);
					if (p.isExecuting) {
						x("Call to execute() on a widget that is already executing (".concat(h, "), consider using reset() before execute()"));
						return
					} else p.isExecuting = !0;
					if (p.response) {
						p.isExecuting = !1, x("Call to execute() on a widget that was already executed (".concat(h, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), p.cbSuccess && p.cbSuccess(p.response, !1);
						return
					}
					p.isExpired && x("Call to execute on a expired-widget (".concat(h, "), consider using reset() before")), p.isStale && (b(h), p.isExecuting = !0), p.msgQueue.push(ee.EXECUTE), p.isExecuted = !0;
					var E = document.querySelector("#".concat(h));
					if (!E) {
						p.isExecuting = !1, m("Widget ".concat(h, " to execute was not found"), 43522);
						return
					}
					if (p.isResetting) return;
					if (p.isInitialized && y(p, c, E), p.isInitialized && p.params.appearance === j.EXECUTE && st(E, p), p.isExecuting) {
						var d, w = document.querySelector("#".concat(h));
						if (!w) {
							m("Received state for an unknown widget: ".concat(c), 3078);
							return
						}(d = w.contentWindow) === null || d === void 0 || d.postMessage({
							source: M,
							widgetId: c,
							event: "execute"
						}, "*")
					}
				}
			},
			render: S,
			reset: b,
			remove: T,
			getResponse: function(o) {
				var n;
				if (typeof o == "undefined") {
					var c = C();
					if (c) {
						var a, p = _.widgetMap.get(c);
						return p != null && p.isExpired && x("Call to getResponse on a widget that expired, consider refreshing the widget."), (a = _.widgetMap.get(c)) === null || a === void 0 ? void 0 : a.response
					} else m("Could not find a widget", 43794)
				}
				var h = v(o);
				if (!h) {
					m("Could not find widget for provided container", 43778);
					return
				}
				return (n = _.widgetMap.get(h)) === null || n === void 0 ? void 0 : n.response
			},
			isExpired: function(o) {
				var n;
				if (typeof o == "undefined") {
					var c = C();
					if (c) {
						var a, p;
						return (p = (a = _.widgetMap.get(c)) === null || a === void 0 ? void 0 : a.isExpired) !== null && p !== void 0 ? p : !1
					} else m("Could not find a widget", 43794)
				}
				var h = v(o);
				if (!h) return m("Could not find widget for provided container", 43778), !1;
				var E;
				return (E = (n = _.widgetMap.get(h)) === null || n === void 0 ? void 0 : n.isExpired) !== null && E !== void 0 ? E : !1
			}
		}
	}();

	function vr(e) {
		var r = e.getAttribute("data-sitekey"),
			t = {
				sitekey: r
			},
			i = e.getAttribute("data-tabindex");
		i && (t.tabindex = parseInt(i, 10));
		var s = e.getAttribute("data-theme");
		s && (Ve(s) ? t.theme = s : x('Unknown data-theme value: "'.concat(s, '"')));
		var l = e.getAttribute("data-size");
		if (l && (Qe(l) ? t.size = l : x('Unknown data-size value: "'.concat(l, '"'))), 0) var g;
		var v = e.getAttribute("data-action");
		typeof v == "string" && (t.action = v);
		var y = e.getAttribute("data-cdata");
		typeof y == "string" && (t.cData = y);
		var u = e.getAttribute("data-retry");
		u && (qe(u) ? t.retry = u : x('Invalid data-retry value: "'.concat(u, ", expected either 'never' or 'auto'\"")));
		var b = e.getAttribute("data-retry-interval");
		if (b) {
			var T = parseInt(b, 10);
			Be(T) ? t["retry-interval"] = T : x('Invalid data-retry-interval value: "'.concat(b, ', expected an integer value > 0 and < 900000"'))
		}
		var S = e.getAttribute("data-expiry-interval");
		if (S) {
			var C = parseInt(S, 10);
			Ge(C) ? t["expiry-interval"] = C : x('Invalid data-expiry-interval value: "'.concat(C, ', expected an integer value > 0 and < 360000"'))
		}
		var f = e.getAttribute("data-refresh-expired");
		f && (Ke(f) ? t["refresh-expired"] = f : x('Unknown data-refresh-expired value: "'.concat(f, ", expected either: 'never', 'auto' or 'manual'.")));
		var o = e.getAttribute("data-language");
		o && ($e(o) ? t.language = o : x('Invalid data-language value: "'.concat(o, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));

		function n(w) {
			var A = e.getAttribute(w);
			return A && window[A] ? window[A] : void 0
		}
		var c = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		c.forEach(function(w) {
			t[w] = n("data-".concat(w))
		});
		var a, p = (a = e.getAttribute("data-response-field")) !== null && a !== void 0 ? a : "true";
		t["response-field"] = p === "true";
		var h = e.getAttribute("data-response-field-name");
		h && (t["response-field-name"] = h);
		var E = e.getAttribute("data-execution");
		E && (Ze(E) ? t.execution = E : x('Unknown data-execution value: "'.concat(E, ", expected either: 'render' or 'execute'.")));
		var d = e.getAttribute("data-appearance");
		return d && (Je(d) ? t.appearance = d : x('Unknown data-appearance value: "'.concat(d, ", expected either: 'always', 'execute', or 'interaction-only'."))), t
	}
	var pe = !1,
		I = Vt(),
		lt;
	_.scriptWasLoadedAsync = (lt = I == null ? void 0 : I.loadedAsync) !== null && lt !== void 0 ? lt : !1;
	I != null && I.params && (oe = I.params.get("compat"), (oe == null ? void 0 : oe.toLowerCase()) === "recaptcha" ? window.grecaptcha ? x("grecaptcha is already defined. The compatibility layer will not be enabled") : (x("Compatibility layer enabled"), _.isRecaptchaCompatibilityMode = !0, window.grecaptcha = pt) : oe !== null && x('Unknown value for api.js?compat: "'.concat(oe, '", ignoring')), I.params.forEach(function(e, r) {
		P(["onload", "compat", "_cb", "_reload", "render"], r) || x('Unknown parameter passed to api.js: "?'.concat(r, '=...", ignoring'))
	}), pe = I.params.get("_upgrade") === "true", F = I.params.get("onload"), F && !pe && setTimeout(function() {
		typeof window[F] == "function" ? window[F]() : (x("Unable to find onload callback '".concat(F, "' immediately after loading, expected 'function', got '").concat(L(window[F]), "'")), setTimeout(function() {
			typeof window[F] == "function" ? window[F]() : x("Unable to find onload callback '".concat(F, "' after 1 second, expected 'function', got '").concat(L(window[F]), "'"))
		}, 1e3))
	}, 0));
	var oe, F, Jt = "turnstile" in window;
	Jt && !pe ? x("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Jt && pe && (Bt(window.turnstile, _), rt(_, ce), (I == null || (Le = I.params) === null || Le === void 0 ? void 0 : Le.get("render")) !== "explicit" && setTimeout(ft, 0)), window.turnstile = pt, pe || ((I == null || (Me = I.params) === null || Me === void 0 ? void 0 : Me.get("render")) !== "explicit" && dt.push(ft), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Qt, 0) : window.addEventListener("DOMContentLoaded", Qt)));
	var Le, Me;

	function er() {
		var e = !0;
		nt(_, e), _.msgHandler && window.removeEventListener("message", _.msgHandler), qt(window.turnstile, _)
	}
	var mr = 24 * 60 * 60 * 1e3;
	window.setTimeout(er, mr);
	ce && (window.turnstile._testUpgrade = er);
})();