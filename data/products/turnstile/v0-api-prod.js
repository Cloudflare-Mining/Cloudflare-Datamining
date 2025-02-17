"use strict";
(function() {
	function Ht(e, t, n, o, c, l, g) {
		try {
			var y = e[l](g),
				s = y.value
		} catch (p) {
			n(p);
			return
		}
		y.done ? t(s) : Promise.resolve(s).then(o, c)
	}

	function jt(e) {
		return function() {
			var t = this,
				n = arguments;
			return new Promise(function(o, c) {
				var l = e.apply(t, n);

				function g(s) {
					Ht(l, o, c, g, y, "next", s)
				}

				function y(s) {
					Ht(l, o, c, g, y, "throw", s)
				}
				g(void 0)
			})
		}
	}

	function D(e, t) {
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : D(e, t)
	}

	function Ue(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function De(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] != null ? arguments[t] : {},
				o = Object.keys(n);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(c) {
				return Object.getOwnPropertyDescriptor(n, c).enumerable
			}))), o.forEach(function(c) {
				Ue(e, c, n[c])
			})
		}
		return e
	}

	function Sr(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			t && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), n.push.apply(n, o)
		}
		return n
	}

	function it(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Sr(Object(t)).forEach(function(n) {
			Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
		}), e
	}

	function qt(e) {
		if (Array.isArray(e)) return e
	}

	function zt(e, t) {
		var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var o = [],
				c = !0,
				l = !1,
				g, y;
			try {
				for (n = n.call(e); !(c = (g = n.next()).done) && (o.push(g.value), !(t && o.length === t)); c = !0);
			} catch (s) {
				l = !0, y = s
			} finally {
				try {
					!c && n.return != null && n.return()
				} finally {
					if (l) throw y
				}
			}
			return o
		}
	}

	function Gt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function ot(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
		return o
	}

	function Xt(e, t) {
		if (e) {
			if (typeof e == "string") return ot(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(n);
			if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ot(e, t)
		}
	}

	function Se(e, t) {
		return qt(e) || zt(e, t) || Xt(e, t) || Gt()
	}

	function F(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Ve(e, t) {
		var n = {
				label: 0,
				sent: function() {
					if (l[0] & 1) throw l[1];
					return l[1]
				},
				trys: [],
				ops: []
			},
			o, c, l, g;
		return g = {
			next: y(0),
			throw: y(1),
			return: y(2)
		}, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
			return this
		}), g;

		function y(p) {
			return function(h) {
				return s([p, h])
			}
		}

		function s(p) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; g && (g = 0, p[0] && (n = 0)), n;) try {
				if (o = 1, c && (l = p[0] & 2 ? c.return : p[0] ? c.throw || ((l = c.return) && l.call(c), 0) : c.next) && !(l = l.call(c, p[1])).done) return l;
				switch (c = 0, l && (p = [p[0] & 2, l.value]), p[0]) {
					case 0:
					case 1:
						l = p;
						break;
					case 4:
						return n.label++, {
							value: p[1],
							done: !1
						};
					case 5:
						n.label++, c = p[1], p = [0];
						continue;
					case 7:
						p = n.ops.pop(), n.trys.pop();
						continue;
					default:
						if (l = n.trys, !(l = l.length > 0 && l[l.length - 1]) && (p[0] === 6 || p[0] === 2)) {
							n = 0;
							continue
						}
						if (p[0] === 3 && (!l || p[1] > l[0] && p[1] < l[3])) {
							n.label = p[1];
							break
						}
						if (p[0] === 6 && n.label < l[1]) {
							n.label = l[1], l = p;
							break
						}
						if (l && n.label < l[2]) {
							n.label = l[2], n.ops.push(p);
							break
						}
						l[2] && n.ops.pop(), n.trys.pop();
						continue
				}
				p = t.call(e, n)
			} catch (h) {
				p = [6, h], c = 0
			} finally {
				o = l = 0
			}
			if (p[0] & 5) throw p[1];
			return {
				value: p[0] ? p[1] : void 0,
				done: !0
			}
		}
	}
	var Yt = {
		code: 200500,
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?"
	};
	var Qt = 300020;
	var Pe = 300030;
	var We = 300031;
	var j;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(j || (j = {}));
	var L;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible", e.FLEXIBLE = "flexible"
	})(L || (L = {}));
	var Be;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Be || (Be = {}));
	var Oe;
	(function(e) {
		e.VERIFYING = "verifying", e.VERIFYING_HAVING_TROUBLES = "verifying-having-troubles", e.VERIFYING_OVERRUN = "verifying-overrun", e.FAILURE_WO_HAVING_TROUBLES = "failure-wo-having-troubles", e.FAILURE_HAVING_TROUBLES = "failure-having-troubles", e.FAILURE_FEEDBACK = "failure-feedback", e.FAILURE_FEEDBACK_CODE = "failure-feedback-code", e.EXPIRED_NEVER_REFRESH = "expired-never-refresh", e.EXPIRED_MANUAL_REFRESH = "expired-manual-refresh", e.TIMEOUT_NEVER_REFRESH = "timeout-never-refresh", e.TIMEOUT_MANUAL_REFRESH = "timeout-manual-refresh", e.INTERACTIVITY_REQUIRED = "interactivity-required", e.UNSUPPORTED_BROWSER = "unsupported-browser", e.TIME_CHECK_CACHED_WARNING = "time-check-cached-warning", e.INVALID_DOMAIN = "invalid-domain"
	})(Oe || (Oe = {}));
	var ve;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(ve || (ve = {}));
	var ee;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(ee || (ee = {}));
	var ce;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(ce || (ce = {}));
	var Q;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(Q || (Q = {}));
	var me;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(me || (me = {}));
	var ue;
	(function(e) {
		e.EXECUTE = "execute"
	})(ue || (ue = {}));
	var q;
	(function(e) {
		e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun"
	})(q || (q = {}));
	var He;
	(function(e) {
		e.FAILURE = "failure", e.VERIFYING = "verifying", e.OVERRUNNING = "overrunning", e.CUSTOM = "custom"
	})(He || (He = {}));

	function M(e, t) {
		return e.indexOf(t) !== -1
	}

	function ct(e) {
		return M(["auto", "dark", "light"], e)
	}

	function ut(e) {
		return M(["auto", "never"], e)
	}

	function lt(e) {
		return e > 0 && e < 9e5
	}

	function st(e) {
		return e > 0 && e < 36e4
	}
	var Or = /^[0-9A-Za-z_-]{3,100}$/;

	function Kt(e) {
		return Or.test(e)
	}
	var Cr = /^[a-z0-9_-]{0,32}$/i;

	function dt(e) {
		return e === void 0 ? !0 : typeof e == "string" && Cr.test(e)
	}
	var Nr = /^[a-z0-9_\-=]{0,255}$/i;

	function ft(e) {
		return e === void 0 ? !0 : typeof e == "string" && Nr.test(e)
	}

	function pt(e) {
		return M([L.NORMAL, L.COMPACT, L.INVISIBLE, L.FLEXIBLE], e)
	}

	function vt(e) {
		return M(["auto", "manual", "never"], e)
	}

	function mt(e) {
		return M(["auto", "manual", "never"], e)
	}
	var kr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function gt(e) {
		return e === "auto" || kr.test(e)
	}

	function _t(e) {
		return M(["always", "execute", "interaction-only"], e)
	}

	function $t(e) {
		return M(["true", "false"], e)
	}

	function yt(e) {
		return M(["render", "execute"], e)
	}
	var Jt = 300,
		Zt = 10;

	function ht(e) {
		var t = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), window.__x_cf_debug_turnstile_outcome && t.set("__x_cf_debug_turnstile_outcome", String(window.__x_cf_debug_turnstile_outcome)), t.size !== 0) return t.toString()
	}
	var je = "cf-chl-widget-",
		V = "cloudflare-challenge",
		er = ".cf-turnstile",
		tr = ".cf-challenge",
		rr = ".g-recaptcha",
		bt = "cf_challenge_response",
		xt = "cf-turnstile-response",
		Et = "g-recaptcha-response",
		nr = 8e3,
		wt = "private-token",
		ar = 3,
		ir = 500,
		or = 500,
		K = "";
	var Lr = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Mr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];

	function Tt(e, t) {
		var n = "https://challenges.cloudflare.com";
		if (t) {
			var o;
			n = (o = e["base-url"]) !== null && o !== void 0 ? o : n
		}
		return n
	}

	function Rt(e, t, n, o, c, l, g, y) {
		var s = Tt(n, c),
			p = l ? "h/".concat(l, "/") : "",
			h = y ? "?".concat(y) : "",
			I = n["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(s, "/cdn-cgi/challenge-platform/").concat(p, "turnstile/if/ov2/av0/rcv").concat(o, "/").concat(e, "/").concat(t, "/").concat(n.theme, "/").concat(I, "/").concat(g, "/").concat(n.size, "/").concat(n.language, "/").concat(h)
	}
	var At = function(e) {
			var t, n, o = window.innerWidth < 400,
				c = e.state === Oe.FAILURE_FEEDBACK || e.state === Oe.FAILURE_HAVING_TROUBLES,
				l, g = M(Lr, (l = (t = e.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && l !== void 0 ? l : "nonexistent"),
				y, s = M(Mr, (y = (n = e.displayLanguage) === null || n === void 0 ? void 0 : n.toLowerCase()) !== null && y !== void 0 ? y : "nonexistent");
			return o ? Fr({
				isModeratelyVerbose: s,
				isVerboseLanguage: g,
				isSmallerFeedback: c
			}) : c && g ? "520px" : c && s ? "500px" : c ? "480px" : g ? "580px" : "570px"
		},
		Fr = function(e) {
			var t = e.isVerboseLanguage,
				n = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return n && t ? "540px" : n && o ? "500px" : n ? "480px" : t ? "650px" : o ? "590px" : "570px"
		};

	function qe(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function cr(e, t) {
		if (!D(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function te(e, t) {
		return te = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, te(e, t)
	}

	function ur(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && te(e, t)
	}

	function ze() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function Ce(e, t, n) {
		return ze() ? Ce = Reflect.construct : Ce = function(c, l, g) {
			var y = [null];
			y.push.apply(y, l);
			var s = Function.bind.apply(c, y),
				p = new s;
			return g && te(p, g.prototype), p
		}, Ce.apply(null, arguments)
	}

	function le(e) {
		return le = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
			return n.__proto__ || Object.getPrototypeOf(n)
		}, le(e)
	}

	function lr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Ge(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return Ge = function(o) {
			if (o === null || !lr(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(o)) return t.get(o);
				t.set(o, c)
			}

			function c() {
				return Ce(o, arguments, le(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), te(c, o)
		}, Ge(e)
	}

	function sr(e, t) {
		return t && (F(t) === "object" || typeof t == "function") ? t : qe(e)
	}

	function dr(e) {
		var t = ze();
		return function() {
			var o = le(e),
				c;
			if (t) {
				var l = le(this).constructor;
				c = Reflect.construct(o, arguments, l)
			} else c = o.apply(this, arguments);
			return sr(this, c)
		}
	}
	var fr = function(e) {
		"use strict";
		ur(n, e);
		var t = dr(n);

		function n(o, c) {
			cr(this, n);
			var l;
			return l = t.call(this, o), Ue(qe(l), "code", void 0), l.name = "TurnstileError", l.code = c, l
		}
		return n
	}(Ge(Error));

	function m(e, t) {
		var n = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new fr(n, t)
	}

	function x(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function Xe(e) {
		return e.startsWith(je) ? e.substring(je.length) : null
	}

	function $(e) {
		return "".concat(je).concat(e)
	}

	function It() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			t = document.currentScript;
		if (D(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var n = document.querySelectorAll("script"), o = 0, c; c = n[o]; o++)
			if (D(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function pr() {
		var e = It();
		e || m("Could not find Turnstile script tag, some features may not be available", 43777);
		var t = e.src,
			n = {
				loadedAsync: !1,
				params: new URLSearchParams,
				src: t
			};
		(e.async || e.defer) && (n.loadedAsync = !0);
		var o = t.split("?");
		return o.length > 1 && (n.params = new URLSearchParams(o[1])), n
	}

	function P() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}
	var St = function(e, t, n) {
			var o = Tt(t.params, !1),
				c = "h/".concat("g", "/"),
				l, g, y = "".concat(o, "/cdn-cgi/challenge-platform/").concat(c, "feedback-reports/").concat(Xe(e), "/").concat(t.displayLanguage, "/").concat((l = t.params.theme) !== null && l !== void 0 ? l : t.theme, "/").concat(n);
			t.wrapper.parentNode || m("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var s = document.createElement("div");
			s.style.position = "fixed", s.style.zIndex = "2147483646", s.style.width = "100vw", s.style.height = "100vh", s.style.top = "0", s.style.left = "0", s.style.transformOrigin = "center center", s.style.overflowX = "hidden", s.style.overflowY = "auto", s.style.background = "rgba(0,0,0,0.4)";
			var p = document.createElement("div");
			p.style.display = "table-cell", p.style.verticalAlign = "middle", p.style.width = "100vw", p.style.height = "100vh";
			var h = document.createElement("div");
			h.className = "cf-turnstile-feedback", h.id = "cf-fr-id", h.style.width = "100vw", h.style.maxWidth = "450px", h.style.height = At(t), h.style.position = "relative", h.style.zIndex = "2147483647", h.style.backgroundColor = "#ffffff", h.style.borderRadius = "5px", h.style.left = "0px", h.style.top = "0px", h.style.overflow = "hidden", h.style.margin = "0px auto";
			var I = document.createElement("iframe");
			I.id = "".concat(e, "-fr"), I.setAttribute("src", y), I.setAttribute("allow", "cross-origin-isolated; fullscreen"), I.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), I.setAttribute("scrolling", "no"), I.style.borderWidth = "0px", I.style.width = "100%", I.style.height = "100%", I.style.overflow = "hidden";
			var T = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			T.setAttribute("tabindex", "0"), T.setAttribute("role", "img"), T.setAttribute("aria-label", "Close button icon"), T.style.position = "absolute", T.style.width = "26px", T.style.height = "26px", T.style.zIndex = "2147483647", T.style.cursor = "pointer", t.displayRTL ? T.style.left = "6px" : T.style.right = "2px", T.style.top = "5px", T.setAttribute("width", "20"), T.setAttribute("height", "20"), T.addEventListener("click", function() {
				var R;
				(R = s.parentNode) === null || R === void 0 || R.removeChild(s)
			}), T.addEventListener("keydown", function(R) {
				if (R.key === "Enter" || R.key === " ") {
					var G;
					(G = s.parentNode) === null || G === void 0 || G.removeChild(s)
				}
			});
			var N = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			N.setAttribute("ry", "12"), N.setAttribute("rx", "12"), N.setAttribute("cy", "12"), N.setAttribute("cx", "12"), N.setAttribute("fill", "none"), N.setAttribute("stroke-width", "0"), T.appendChild(N);
			var C = document.createElementNS("http://www.w3.org/2000/svg", "line");
			C.setAttribute("stroke-width", "1"), C.setAttribute("stroke", "#999"), C.setAttribute("fill", "none"), C.setAttribute("x1", "6"), C.setAttribute("x2", "18"), C.setAttribute("y1", "18"), C.setAttribute("y2", "5"), T.appendChild(C);
			var k = document.createElementNS("http://www.w3.org/2000/svg", "line");
			k.setAttribute("stroke-width", "1"), k.setAttribute("stroke", "#999"), k.setAttribute("fill", "none"), k.setAttribute("x1", "6"), k.setAttribute("x2", "18"), k.setAttribute("y1", "5"), k.setAttribute("y2", "18"), T.appendChild(k), h.appendChild(I), h.appendChild(T), p.appendChild(h), s.appendChild(p), s.addEventListener("click", function() {
				var R;
				(R = s.parentNode) === null || R === void 0 || R.removeChild(s)
			}), t.wrapper.parentNode.appendChild(s), window.addEventListener("resize", function() {
				h.style.height = At(t)
			})
		},
		vr = function(e) {
			var t, n, o;
			(o = document.getElementById(e)) === null || o === void 0 || (n = o.parentElement) === null || n === void 0 || (t = n.parentElement) === null || t === void 0 || t.remove()
		};
	var Ot = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > t ? e.substring(0, t) : e
	};

	function mr(e) {
		if (!e) return "-";
		var t = function(n, o) {
			if (!n || n.tagName === "BODY") return o;
			for (var c = 1, l = n.previousElementSibling; l;) l.tagName === n.tagName && c++, l = l.previousElementSibling;
			var g = Ot(n.tagName.toLowerCase()),
				y = "".concat(g, "[").concat(c, "]");
			return t(n.parentNode, "/".concat(y).concat(o))
		};
		return t(e, "")
	}

	function gr(e, t, n) {
		for (var o = "", c = 0, l = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(I) {
					return c > t || o.length > n ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), g;
			(g = l.nextNode()) !== null && o.length < n;) {
			if (g.nodeType === Node.ELEMENT_NODE) {
				var y = g;
				o += "".concat(Ot(y.tagName.toLowerCase()));
				for (var s = 0; s < y.attributes.length; s++) {
					var p = y.attributes[s];
					o += "_".concat(Ot(p.name, 2))
				}
				o += ">"
			} else g.nodeType === Node.TEXT_NODE && (o += "-t");
			var h = g.parentNode;
			for (c = 0; h !== e && h !== null;) c++, h = h.parentNode
		}
		return o.substring(0, n)
	}

	function _r(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : F(e)));
		for (var t = 5381, n = 0; n < e.length; n++) {
			var o = e.charCodeAt(n);
			t = t * 33 ^ o
		}
		return t >>> 0
	}

	function yr(e, t) {
		var n;
		t.upgradeAttempts++;
		var o = It();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = t;
			var l = new URL(o.src),
				g = document.createElement("script");
			l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), g.async = !0, c && (g.nonce = c), g.setAttribute("crossorigin", "anonymous"), g.src = l.toString(), o == null || (n = o.parentNode) === null || n === void 0 || n.replaceChild(g, o)
		}
	}

	function hr(e, t) {
		var n = e._pState;
		return n ? (t.isReady = n.isReady, t.isRecaptchaCompatibilityMode = n.isRecaptchaCompatibilityMode, t.lastWidgetIdx = n.lastWidgetIdx, t.scriptWasLoadedAsync = n.scriptWasLoadedAsync, t.upgradeAttempts = n.upgradeAttempts, t.upgradeCompletedCount = n.upgradeCompletedCount + 1, t.turnstileLoadInitTimeMs = P(), t.watchCatInterval = null, t.watchCatSeq = n.watchCatSeq, t.widgetMap = n.widgetMap, !0) : !1
	}
	var Ur = 900,
		Dr = 10,
		Vr = 50;

	function Pr(e) {
		e.watchCatSeq++;
		var t = !0,
			n = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), l; !(t = (l = c.next()).done); t = !0) {
				var g = Se(l.value, 2),
					y = g[0],
					s = g[1],
					p;
				s.watchcat.seq = e.watchCatSeq, s.watchcat.lastAckedSeq === 0 && (s.watchcat.lastAckedSeq = e.watchCatSeq);
				var h = $(y);
				if (!h || !s.shadow) {
					s.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(h, ", consider using turnstile.remove() to clean up a widget.")), s.watchcat.missingWidgetWarning = !0);
					continue
				}
				var I = s.shadow.querySelector("#".concat(h));
				if (!I) {
					s.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(h, ", consider using turnstile.remove() to clean up a widget.")), s.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(s.isComplete || s.isFailed)) {
					var T = s.watchcat.seq - 1 - Dr,
						N = s.watchcat.lastAckedSeq < T,
						C = s.watchcat.seq - 1 - Vr,
						k = s.isOverrunning && s.watchcat.overrunBeginSeq < C;
					if ((s.isExecuting || !s.isInitialized || s.isInitialized && !s.isStale && !s.isExecuted) && s.watchcat.lastAckedSeq !== 0 && N || k) {
						var R;
						s.watchcat.lastAckedSeq = 0, s.watchcat.seq = 0, s.isExecuting = !1;
						var G = function(r, u) {
							console.log("Turnstile Widget seem to have ".concat(r, ": "), u)
						};
						G(N ? "hung" : "crashed", y);
						var b = N ? Pe : We,
							a;
						if ((R = e.msgHandler) === null || R === void 0 || R.call(e, {
								data: {
									source: V,
									widgetId: y,
									code: b,
									event: "fail",
									rcV: (a = s.nextRcV) !== null && a !== void 0 ? a : K
								}
							}), 0) var i;
						continue
					}(p = I.contentWindow) === null || p === void 0 || p.postMessage({
						source: V,
						widgetId: y,
						seq: e.watchCatSeq,
						event: "meow"
					}, "*")
				}
			}
		} catch (r) {
			n = !0, o = r
		} finally {
			try {
				!t && c.return != null && c.return()
			} finally {
				if (n) throw o
			}
		}
	}

	function Ct(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Pr(e)
		}, Ur))
	}

	function Nt(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && clearInterval(e.watchCatInterval)
	}
	var _ = {
		turnstileLoadInitTimeMs: P(),
		isRecaptchaCompatibilityMode: !1,
		scriptWasLoadedAsync: !1,
		scriptUrl: "undefined",
		isReady: !1,
		widgetMap: new Map,
		lastWidgetIdx: 0,
		upgradeAttempts: 0,
		upgradeCompletedCount: 0,
		apiVersion: 1,
		watchCatInterval: null,
		watchCatSeq: 0
	};

	function kt(e) {
		Tr(e, "")
	}

	function Ft() {
		var e = [er, tr];
		_.isRecaptchaCompatibilityMode && e.push(rr), document.querySelectorAll(e.join(", ")).forEach(function(t) {
			return Ut.render(t)
		})
	}
	var Dt = [];

	function br() {
		_.isReady = !0;
		var e = !0,
			t = !1,
			n = void 0;
		try {
			for (var o = Dt[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var l = c.value;
				l()
			}
		} catch (g) {
			t = !0, n = g
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (t) throw n
			}
		}
	}

	function Wr(e) {
		var t = _.widgetMap.get(e);
		if (!(t === void 0 || t.hasResponseParamEl)) {
			t.hasResponseParamEl = !0;
			var n, o = (n = t.params["response-field"]) !== null && n !== void 0 ? n : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var l;
				c.name = (l = t.params["response-field-name"]) !== null && l !== void 0 ? l : xt, c.id = "".concat(e, "_response"), t.wrapper.appendChild(c);
				var g;
				if (typeof t.params["response-field-name"] != "string" && Rr((g = t.params.sitekey) !== null && g !== void 0 ? g : "")) {
					var y = document.createElement("input");
					y.type = "hidden", y.name = bt, y.id = "".concat(e, "_legacy_response"), t.wrapper.appendChild(y)
				}
			}
			if (_.isRecaptchaCompatibilityMode) {
				var s = document.createElement("input");
				s.type = "hidden", s.name = Et, s.id = "".concat(e, "_g_response"), t.wrapper.appendChild(s)
			}
		}
	}

	function Tr(e, t) {
		Wr(e);
		var n = document.getElementById("".concat(e, "_response"));
		n !== null && D(n, HTMLInputElement) && (n.value = t);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && D(o, HTMLInputElement) && (o.value = t), _.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && D(c, HTMLInputElement) && (c.value = t)
		}
	}

	function Lt(e, t) {
		var n = t.params,
			o = n.size,
			c = o === void 0 ? "normal" : o,
			l = t.mode;
		switch (l) {
			case j.NON_INTERACTIVE:
			case j.MANAGED:
				switch (c) {
					case L.COMPACT:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case L.INVISIBLE:
						m('Invalid value for parameter "size", expected "'.concat(L.COMPACT, '" or "').concat(L.NORMAL, '", got "').concat(c, '"'), 2817);
					case L.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case L.FLEXIBLE:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break
				}
				break;
			case j.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				m('Invalid value for parameter "mode", expected "'.concat(j.NON_INTERACTIVE, '", "').concat(j.MANAGED, '" or "').concat(j.INVISIBLE, '", got "').concat(l, '"'), 2818)
		}
	}

	function xr(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Br(e, t) {
		var n = t.get("turnstile_iframe_alt");
		n && (e.title = n)
	}

	function Hr(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Rr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Er() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Ut = function() {
		var e = function(a, i, r, u) {
				return C.apply(this, arguments)
			},
			t = function(a, i, r) {
				if (a.params.retry === ve.AUTO || r) {
					a.isExecuted && (a.msgQueue.push(ue.EXECUTE), a.isExecuted = !0, a.isExecuting = !0);
					var u, d = r ? 0 : 1e3 * 2 + ((u = a.params["retry-interval"]) !== null && u !== void 0 ? u : 0);
					a.retryTimeout = window.setTimeout(function() {
						var v = r ? q.CrashedRetry : q.FailureRetry;
						h(v, i)
					}, d)
				}
			},
			n = function(a, i, r) {
				var u;
				a.response === void 0 && m("[Internal Error] Widget was completed but no response was given", 1362), a.isExecuting = !1, a.isComplete = !0, Tr(i, a.response), (u = a.cbSuccess) === null || u === void 0 || u.call(a, a.response, r)
			},
			o = function(a) {
				if (!a) return [];
				for (var i = a.attributes, r = i.length, u = new Array(r), d = 0; d < r; d++) u[d] = i[d].name;
				return u
			},
			c = function(a, i, r) {
				if (a.rcV = i, 0) var u
			},
			l = function() {
				var a = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = a.length,
					r = "";
				do {
					r = "";
					for (var u = 0; u < 5; u++) r += a.charAt(Math.floor(Math.random() * i))
				} while (_.widgetMap.has(r));
				return r
			},
			g = function(a) {
				var i = !0,
					r = !1,
					u = void 0;
				try {
					for (var d = _.widgetMap[Symbol.iterator](), v; !(i = (v = d.next()).done); i = !0) {
						var E = Se(v.value, 2),
							w = E[0],
							A = E[1];
						if (A.wrapper.parentElement === a) return w
					}
				} catch (S) {
					r = !0, u = S
				} finally {
					try {
						!i && d.return != null && d.return()
					} finally {
						if (r) throw u
					}
				}
				return null
			},
			y = function(a, i, r) {
				for (; a.msgQueue.length;) {
					var u, d = a.msgQueue.pop();
					(u = r.contentWindow) === null || u === void 0 || u.postMessage({
						source: V,
						widgetId: i,
						event: d
					}, "*")
				}
			},
			s = function(a, i) {
				if (i) {
					var r = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						u = [],
						d = !0,
						v = !1,
						E = void 0;
					try {
						for (var w = r[Symbol.iterator](), A; !(d = (A = w.next()).done); d = !0) {
							var S = A.value;
							i[S] && i[S] !== a.params[S] && u.push(S)
						}
					} catch (U) {
						v = !0, E = U
					} finally {
						try {
							!d && w.return != null && w.return()
						} finally {
							if (v) throw E
						}
					}
					u.length !== 0 && m("The parameters ".concat(r.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(u.join(",")), 3618), i.action && (dt(i.action) || m('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), a.action = i.action), i.cData && (ft(i.cData) || m('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), a.cData = i.cData), i["after-interactive-callback"] && (a.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (a.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (a.cbSuccess = i.callback), i["expired-callback"] && (a.cbExpired = i["expired-callback"]), i["timeout-callback"] && (a.cbTimeout = i["timeout-callback"]), i["error-callback"] && (a.cbError = i["error-callback"]), i["unsupported-callback"] && (a.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (a.chlPageData = i.chlPageData)
				}
			},
			p = function(a) {
				h(q.Api, a)
			},
			h = function(a, i) {
				var r = R(i);
				r || m("Nothing to reset found for provided container", 3329);
				var u = _.widgetMap.get(r);
				if (u) {
					var d;
					u.isResetting = !0, u.response = void 0, u.mode = void 0, u.msgQueue = [], u.isComplete = !1, u.isExecuting = !1, u.isExpired = !1, u.isFailed = !1, u.isInitialized = !1, u.isStale = !1, u.watchcat.lastAckedSeq = 0, u.watchcat.seq = 0, u.params.execution === me.RENDER && (u.msgQueue.push(ue.EXECUTE), u.isExecuted = !0, u.isExecuting = !0);
					var v = $(r),
						E = u.shadow.querySelector("#".concat(v));
					(!v || !E) && m("Widget ".concat(r, " to reset was not found."), 3330), u.params.appearance === Q.INTERACTION_ONLY && xr(E), u.params.sitekey === null && m("Unexpected Error: Sitekey is null", 3347);
					var w = E.cloneNode(),
						A;
					w.src = Rt(r, u.params.sitekey, u.params, (A = u.rcV) !== null && A !== void 0 ? A : K, !1, "g", a, ht(u)), (d = E.parentNode) === null || d === void 0 || d.replaceChild(w, E), kt(v), u.retryTimeout && window.clearTimeout(u.retryTimeout)
				} else m("Widget ".concat(r, " to reset was not found."), 3331)
			},
			I = function(a) {
				var i, r = R(a);
				if (!r || !_.widgetMap.has(r)) {
					x("Nothing to remove found for the provided container.");
					return
				}
				var u = $(r),
					d = ["input#".concat(u, "_response"), "input#".concat(u, "_legacy_response"), "input#".concat(u, "_g_response")];
				document.querySelectorAll(d.join(", ")).forEach(function(w) {
					return w.remove()
				});
				var v = _.widgetMap.get(r);
				v == null || v.shadow.querySelectorAll(d.join(", ")).forEach(function(w) {
					return w.remove()
				}), v == null || v.wrapper.remove();
				var E = (i = _.widgetMap.get(r)) === null || i === void 0 ? void 0 : i.retryTimeout;
				E && window.clearTimeout(E), _.widgetMap.delete(r), Nt(_)
			},
			T = function(a, i) {
				var r, u, d = P(),
					v;
				if (typeof a == "string") try {
					var E = document.querySelector(a);
					E || m('Unable to find a container for "'.concat(a, '"'), 3585), v = E
				} catch (Bt) {
					m('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(a, '"'), 3586)
				} else D(a, HTMLElement) ? v = a : m('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var w = !0,
					A = !1,
					S = void 0;
				try {
					for (var U = _.widgetMap.values()[Symbol.iterator](), W; !(w = (W = U.next()).done); w = !0) {
						var X = W.value;
						if (v.contains(X.wrapper)) {
							x("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (Bt) {
					A = !0, S = Bt
				} finally {
					try {
						!w && U.return != null && U.return()
					} finally {
						if (A) throw S
					}
				}
				var J = jr(v);
				if (J) {
					var f = Object.assign(J, i),
						ye = f.action,
						re = f.cData,
						Ne = f.chlPageData,
						B = f.sitekey,
						ne;
					f.theme = (ne = f.theme) !== null && ne !== void 0 ? ne : Be.AUTO;
					var se;
					f.retry = (se = f.retry) !== null && se !== void 0 ? se : ve.AUTO;
					var ae;
					f.execution = (ae = f.execution) !== null && ae !== void 0 ? ae : me.RENDER;
					var he;
					f.appearance = (he = f.appearance) !== null && he !== void 0 ? he : Q.ALWAYS;
					var ie;
					f["retry-interval"] = Number((ie = f["retry-interval"]) !== null && ie !== void 0 ? ie : nr);
					var be;
					f["expiry-interval"] = Number((be = f["expiry-interval"]) !== null && be !== void 0 ? be : (Jt - Zt) * 1e3);
					var de;
					f.size = (de = f.size) !== null && de !== void 0 ? de : L.NORMAL;
					var xe = f.callback,
						Ee = f["expired-callback"],
						ke = f["timeout-callback"],
						we = f["after-interactive-callback"],
						Te = f["before-interactive-callback"],
						Y = f["error-callback"],
						Je = f["unsupported-callback"];
					typeof B != "string" && m('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof B == "undefined" ? "undefined" : F(B), '"'), 3588), Kt(B) || m('Invalid input for parameter "sitekey", got "'.concat(B, '"'), 3589), pt(f.size) || m('Invalid type for parameter "size", expected normal|compact, got "'.concat(f.size, '" ').concat(F(f.size)), 3590), ct(f.theme) || m('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(f.theme, '" ').concat(F(f.theme)), 3591), ut(f.retry) || m('Invalid type for parameter "retry", expected never|auto, got "'.concat(f.retry, '" ').concat(F(f.retry)), 3592), f.language || (f.language = "auto"), gt(f.language) || (x('Invalid language value: "'.concat(f.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), f.language = "auto"), _t(f.appearance) || m('Unknown appearance value: "'.concat(f.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), yt(f.execution) || m('Unknown execution value: "'.concat(f.execution, ", expected either: 'render' or 'execute'."), 3601), lt(f["retry-interval"]) || m('Invalid retry-interval value: "'.concat(f["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), st(f["expiry-interval"]) || m('Invalid expiry-interval value: "'.concat(f["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var Re, Z = (Re = f["refresh-expired"]) !== null && Re !== void 0 ? Re : ee.AUTO;
					vt(Z) ? f["refresh-expired"] = Z : m('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(Z, '" ').concat(typeof Z == "undefined" ? "undefined" : F(Z)), 3603);
					var Ae, oe = (Ae = f["refresh-timeout"]) !== null && Ae !== void 0 ? Ae : ce.AUTO;
					mt(Z) ? f["refresh-timeout"] = oe : m('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(oe, '" ').concat(typeof oe == "undefined" ? "undefined" : F(oe)), 3603);
					var H = document.createElement("iframe"),
						fe = document.createElement("div"),
						Vt = fe.attachShadow({
							mode: "closed"
						});
					dt(ye) || m('Invalid input for optional parameter "action", got "'.concat(ye, '"'), 3604), ft(re) || m('Invalid input for optional parameter "cData", got "'.concat(re, '"'), 3605);
					var Ie = l(),
						pe = $(Ie);
					if (!(!Ie || !pe)) {
						var Pt = [],
							Ze = f.execution === me.RENDER;
						Ze && Pt.push(ue.EXECUTE), _.lastWidgetIdx++;
						var Ar = {};
						_.widgetMap.set(Ie, it(De({
							idx: _.lastWidgetIdx,
							action: ye,
							cData: re,
							chlPageData: Ne,
							cbSuccess: xe,
							cbError: Y,
							cbExpired: Ee,
							cbTimeout: ke,
							cbUnsupported: Je,
							cbAfterInteractive: we,
							cbBeforeInteractive: Te,
							params: f,
							isStale: !1,
							isComplete: !1,
							isExpired: !1,
							isExecuting: Ze,
							isFailed: !1,
							isResetting: !1,
							isExecuted: Ze,
							isInitialized: !1,
							hasResponseParamEl: !1,
							msgQueue: Pt,
							rcV: K,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0
							}
						}, Ar), {
							widgetRenderStartTimeMs: d,
							widgetRenderEndTimeMs: 0,
							widgetParamsStartTimeMs: 0,
							widgetInitStartTimeMs: 0,
							shadow: Vt,
							wrapper: fe,
							isOverrunning: !1
						})), Ct(_);
						var et = _.widgetMap.get(Ie);
						et || m("Turnstile Initialization Error ", 3606), H.style.display = "none", H.style.border = "none", H.style.overflow = "hidden", H.setAttribute("src", Rt(Ie, B, f, K, !1, "g", q.New, ht(et))), H.onerror = function() {
							if (Y) {
								Y == null || Y(String(Yt.code));
								return
							}
							m("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var Wt = ["cross-origin-isolated", "fullscreen", "autoplay"],
							tt;
						M((tt = (u = document.featurePolicy) === null || u === void 0 || (r = u.features) === null || r === void 0 ? void 0 : r.call(u)) !== null && tt !== void 0 ? tt : [], wt) && Wt.push(wt), H.setAttribute("allow", Wt.join("; ")), H.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), H.id = pe;
						var rt;
						H.tabIndex = (rt = f.tabindex) !== null && rt !== void 0 ? rt : 0, H.title = "Widget containing a Cloudflare security challenge", Vt.appendChild(H);
						var nt, Ir = (nt = f["response-field"]) !== null && nt !== void 0 ? nt : !0;
						if (Ir) {
							var Le = document.createElement("input");
							Le.type = "hidden";
							var at;
							if (Le.name = (at = f["response-field-name"]) !== null && at !== void 0 ? at : xt, Le.id = "".concat(pe, "_response"), fe.appendChild(Le), typeof f["response-field-name"] != "string" && Rr(B)) {
								var Me = document.createElement("input");
								Me.type = "hidden", Me.name = bt, Me.id = "".concat(pe, "_legacy_response"), fe.appendChild(Me)
							}
						}
						if (_.isRecaptchaCompatibilityMode) {
							var Fe = document.createElement("input");
							Fe.type = "hidden", Fe.name = Et, Fe.id = "".concat(pe, "_g_response"), fe.appendChild(Fe)
						}
						return v.appendChild(fe), et.widgetRenderEndTimeMs = P(), pe
					}
				}
			},
			N = function() {
				var a, i = -1,
					r = !0,
					u = !1,
					d = void 0;
				try {
					for (var v = _.widgetMap[Symbol.iterator](), E; !(r = (E = v.next()).done); r = !0) {
						var w = Se(E.value, 2),
							A = w[0],
							S = w[1];
						i < S.idx && (a = A, i = S.idx)
					}
				} catch (U) {
					u = !0, d = U
				} finally {
					try {
						!r && v.return != null && v.return()
					} finally {
						if (u) throw d
					}
				}
				return i === -1 && m("Could not find widget", 43778), a
			};

		function C() {
			return C = jt(function(b, a, i, r) {
				var u, d, v, E, w, A, S, U, W, X, J;
				return Ve(this, function(f) {
					switch (f.label) {
						case 0:
							if (u = b.params.sitekey, d = Er(), !d) return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), n(b, a, !1), [2];
							v = "h/".concat("g", "/"), E = new URL(d), w = "https", A = "", U = "".concat(w, "://").concat(E.host, "/cdn-cgi/challenge-platform/").concat(v, "rc/").concat(r).concat(A), f.label = 1;
						case 1:
							return f.trys.push([1, 6, , 7]), [4, fetch(U, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: u,
									secondaryToken: i
								})
							})];
						case 2:
							return W = f.sent(), W.status === 200 ? [3, 3] : (x("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), n(b, a, !1), [3, 5]);
						case 3:
							return [4, W.json()];
						case 4:
							if (X = f.sent(), "status" in X && X.status === "redeemed") return n(b, a, !0), [2];
							f.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return J = f.sent(), x("Error contacting Turnstile, aborting clearance remdeption."), n(b, a, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), C.apply(this, arguments)
		}
		var k = function(b) {
			var a = b.data;
			if (a.source === V) {
				if (!Hr(b)) {
					x("Ignored message from wrong origin: ".concat(b.origin, "."));
					return
				}
				if (!(!a.widgetId || !_.widgetMap.has(a.widgetId))) {
					var i = $(a.widgetId),
						r = _.widgetMap.get(a.widgetId);
					if (!(!i || !r)) switch (a.event) {
						case "init": {
							var u;
							r.widgetInitStartTimeMs = P();
							var d = r.shadow.getElementById(i);
							d || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), r.mode = a.mode, r.nextRcV = a.nextRcV, r.mode === j.INVISIBLE && r.params["refresh-expired"] === ee.MANUAL && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(ee.AUTO, "' or '").concat(ee.NEVER, ".'")), r.mode !== j.MANAGED && r.params["refresh-timeout"] !== ce.AUTO && x("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), r.params.appearance === Q.ALWAYS || r.isExecuting && r.params.appearance === Q.EXECUTE ? Lt(d, r) : xr(d), d.style.display = "";
							var v = r.shadow.querySelector("#".concat(i));
							v || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), (u = v.contentWindow) === null || u === void 0 || u.postMessage({
								source: V,
								widgetId: a.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var E = r.shadow.getElementById(i);
							E || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var w = new Map;
							r.displayLanguage = a.displayLanguage, Object.keys(a.translationData).forEach(function(oe) {
								w.set(oe, a.translationData[oe])
							}), Br(E, w);
							break
						}
						case "languageUnsupported": {
							x("Language ".concat(r.params.language, " is not supported, falling back to: ").concat(a.fallback, ".")), r.displayLanguage = a.fallback;
							break
						}
						case "reject": {
							var A = r.shadow.getElementById(i);
							if (r.isExecuting = !1, A || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), a.reason === "unsupported_browser") {
								var S;
								(S = r.cbUnsupported) === null || S === void 0 || S.call(r)
							}
							break
						}
						case "food": {
							r.watchcat && a.seq > r.watchcat.lastAckedSeq && (r.watchcat.lastAckedSeq = a.seq);
							break
						}
						case "overrunBegin": {
							r.isOverrunning = !0, r.watchcat && (r.watchcat.overrunBeginSeq = r.watchcat.lastAckedSeq);
							break
						}
						case "overrunEnd": {
							r.isOverrunning = !1;
							break
						}
						case "complete": {
							c(r, K, a.widgetId), r.response = a.token, a.sToken ? e(r, i, a.sToken, a.chlId) : n(r, i, !1);
							break
						}
						case "fail": {
							a.rcV && c(r, a.rcV, a.widgetId), a.cfChlOut && (r.cfChlOut = a.cfChlOut), a.cfChlOutS && (r.cfChlOutS = a.cfChlOutS), a.code && (r.errorCode = a.code), r.isExecuting = !1, r.isFailed = !0, r.isInitialized = !0, kt(i);
							var U = r.cbError,
								W = a.code === Pe || a.code === We;
							if (W) {
								var X, J = r.shadow.querySelector("#".concat(i));
								J == null || (X = J.contentWindow) === null || X === void 0 || X.postMessage({
									source: V,
									widgetId: a.widgetId,
									event: "forceFail"
								}, "*")
							}
							if (U) {
								var f;
								U(String((f = a.code) !== null && f !== void 0 ? f : Qt)) ? r.params.retry === ve.AUTO && !r.isResetting && t(r, i, W) : (a.code && x("Error: ".concat(a.code, ".")), t(r, i, W))
							} else a.code ? (t(r, i, W), m("Error: ".concat(a.code), 3076)) : t(r, i, !1);
							break
						}
						case "feedbackInit": {
							var ye = r.wrapper.querySelector("#".concat(i, "-fr"));
							if (ye) {
								x("A feedback report form is already opened for this widget.");
								return
							}
							St(i, r, a.feedbackOrigin);
							break
						}
						case "requestFeedbackData": {
							var re, Ne = r.shadow.querySelector("#".concat(i));
							Ne || m("Received state for an unknown widget: #".concat(i, " / ").concat(a.widgetId), 3078), (re = Ne.contentWindow) === null || re === void 0 || re.postMessage({
								source: V,
								widgetId: a.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var B, ne, se = (B = r.wrapper.parentNode) === null || B === void 0 ? void 0 : B.querySelector("#".concat(i, "-fr"));
							se || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), (ne = se.contentWindow) === null || ne === void 0 || ne.postMessage({
								source: V,
								widgetId: a.widgetId,
								event: "feedbackData",
								rayId: a.rayId,
								rcV: a.rcV,
								cfChlOut: r.cfChlOut,
								cfChlOutS: r.cfChlOutS,
								errorCode: r.errorCode,
								sitekey: a.sitekey,
								mode: a.mode,
								issuanceUserAgent: a.issuanceUserAgent,
								ip: a.ip
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var ae, he = (ae = r.wrapper.parentNode) === null || ae === void 0 ? void 0 : ae.querySelector("#".concat(i, "-fr"));
							he || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), vr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ie, be = a.token;
							r.isExpired = !0, (ie = r.cbExpired) === null || ie === void 0 || ie.call(r, be), r.params["refresh-expired"] === ee.AUTO && !r.isResetting && h(q.AutoExpire, i);
							break
						}
						case "interactiveTimeout": {
							c(r, K, a.widgetId), kt(i);
							var de = r.cbTimeout;
							if (de ? de() : r.params["refresh-timeout"] === ce.NEVER && !r.isResetting && x("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), r.params["refresh-timeout"] === ce.AUTO && !r.isResetting) {
								var xe = r.cbAfterInteractive;
								xe == null || xe(), h(q.AutoTimeout, i)
							}
							break
						}
						case "refreshRequest": {
							c(r, K, a.widgetId), h(q.ManualRefresh, i);
							break
						}
						case "reloadRequest": {
							c(r, a.nextRcV, a.widgetId), h(a.trigger, i);
							break
						}
						case "interactiveBegin": {
							var Ee, ke = r.shadow.getElementById(i);
							ke || m("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (Ee = r.cbBeforeInteractive) === null || Ee === void 0 || Ee.call(r), r.params.appearance === Q.INTERACTION_ONLY && Lt(ke, r);
							break
						}
						case "interactiveEnd": {
							var we;
							(we = r.cbAfterInteractive) === null || we === void 0 || we.call(r);
							break
						}
						case "widgetStale": {
							r.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var Te;
							r.widgetParamsStartTimeMs = P();
							var Y = r.shadow.querySelector("#".concat(i));
							Y || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), r.isResetting = !1;
							var Je = {},
								Re = P(),
								Z = {
									"w.iW": window.innerWidth,
									"ht.atrs": o(document.body.parentNode),
									pi: {
										xp: mr(r.wrapper).substring(0, or),
										pfp: gr(document, ar, ir),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: _r(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href,
										sR: r.wrapper.shadowRoot === null
									}
								},
								Ae = P() - Re;
							(Te = Y.contentWindow) === null || Te === void 0 || Te.postMessage(De({
								source: V,
								widgetId: a.widgetId,
								event: "extraParams",
								action: r.action,
								cData: r.cData,
								chlPageData: r.chlPageData,
								rcV: r.rcV,
								ch: "0e3e6804b971",
								au: _.scriptUrl,
								url: Er(),
								retry: r.params.retry,
								"expiry-interval": r.params["expiry-interval"],
								"retry-interval": r.params["retry-interval"],
								"refresh-expired": r.params["refresh-expired"],
								"refresh-timeout": r.params["refresh-timeout"],
								language: r.params.language,
								execution: r.params.execution,
								appearance: r.params.appearance,
								wPr: Z,
								turnstileAgeMs: P() - _.turnstileLoadInitTimeMs,
								widgetAgeMs: P() - r.widgetRenderStartTimeMs,
								upgradeAttempts: _.upgradeAttempts,
								upgradeCompletedCount: _.upgradeCompletedCount,
								timeRenderMs: r.widgetRenderEndTimeMs - r.widgetRenderStartTimeMs,
								timeToInitMs: r.widgetInitStartTimeMs - r.widgetRenderEndTimeMs,
								timeToParamsMs: r.widgetParamsStartTimeMs - r.widgetInitStartTimeMs,
								tiefTimeMs: Ae
							}, Je), "*"), y(r, a.widgetId, Y), r.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		_.msgHandler = k, window.addEventListener("message", k);

		function R(b) {
			if (typeof b == "string") {
				var a = Xe(b);
				if (a && _.widgetMap.has(a)) return a;
				if (_.widgetMap.has(b)) return b;
				try {
					var i = document.querySelector(b);
					return i ? R(i) : null
				} catch (r) {
					return null
				}
			}
			return D(b, Element) ? g(b) : b || _.widgetMap.size === 0 ? null : _.widgetMap.keys().next().value
		}
		var G = {};
		return it(De({}, G), {
			ready: function(a) {
				if (_.scriptWasLoadedAsync && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), m("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof a != "function" && m('turnstile.ready() expected a "function" argument, got "'.concat(typeof a == "undefined" ? "undefined" : F(a), '"'), 3841), _.isReady) {
					a();
					return
				}
				Dt.push(a)
			},
			implicitRender: Ft,
			execute: function(a, i) {
				var r = R(a);
				if (!r) {
					i === void 0 && m("Please provide 2 parameters to execute: container and parameters", 43521);
					var u = T(a, i);
					u || m("Failed to render widget", 43522), r = u
				}
				var d = _.widgetMap.get(r);
				if (d) {
					s(d, i);
					var v = $(r);
					if (d.isExecuting) {
						x("Call to execute() on a widget that is already executing (".concat(v, "), consider using reset() before execute()."));
						return
					}
					if (d.isExecuting = !0, d.response) {
						var E;
						d.isExecuting = !1, x("Call to execute() on a widget that was already executed (".concat(v, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (E = d.cbSuccess) === null || E === void 0 || E.call(d, d.response, !1);
						return
					}
					d.isExpired && x("Call to execute on a expired-widget (".concat(v, "), consider using reset() before.")), d.isStale && (h(q.StaleExecute, v), d.isExecuting = !0), d.msgQueue.push(ue.EXECUTE), d.isExecuted = !0;
					var w = d.shadow.querySelector("#".concat(v));
					if (w || (d.isExecuting = !1, m("Widget ".concat(v, " to execute was not found"), 43522)), d.isResetting) return;
					if (d.isInitialized && y(d, r, w), d.isInitialized && d.params.appearance === Q.EXECUTE && Lt(w, d), d.isExecuting) {
						var A, S = d.shadow.querySelector("#".concat(v));
						S || m("Received state for an unknown widget: ".concat(r), 3078), (A = S.contentWindow) === null || A === void 0 || A.postMessage({
							source: V,
							widgetId: r,
							event: "execute"
						}, "*")
					}
				}
			},
			render: T,
			reset: p,
			remove: I,
			_private: {
				showFeedback: function(a) {
					var i = R(a);
					if (i) {
						var r = $(i);
						if (r) {
							var u = _.widgetMap.get(i);
							u && St(r, u, He.CUSTOM)
						}
					}
				}
			},
			getResponse: function(a) {
				var i;
				if (typeof a == "undefined") {
					var r = N();
					if (r) {
						var u, d = _.widgetMap.get(r);
						return d != null && d.isExpired && x("Call to getResponse on a widget that expired, consider refreshing the widget."), (u = _.widgetMap.get(r)) === null || u === void 0 ? void 0 : u.response
					}
					m("Could not find a widget", 43794)
				}
				var v = R(a);
				return v || m("Could not find widget for provided container", 43778), (i = _.widgetMap.get(v)) === null || i === void 0 ? void 0 : i.response
			},
			isExpired: function(a) {
				var i;
				if (typeof a == "undefined") {
					var r = N();
					if (r) {
						var u, d;
						return (d = (u = _.widgetMap.get(r)) === null || u === void 0 ? void 0 : u.isExpired) !== null && d !== void 0 ? d : !1
					}
					m("Could not find a widget", 43794)
				}
				var v = R(a);
				v || m("Could not find widget for provided container", 43778);
				var E;
				return (E = (i = _.widgetMap.get(v)) === null || i === void 0 ? void 0 : i.isExpired) !== null && E !== void 0 ? E : !1
			}
		})
	}();

	function jr(e) {
		var t = e.getAttribute("data-sitekey"),
			n = {
				sitekey: t
			},
			o = e.getAttribute("data-tabindex");
		o && (n.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (ct(c) ? n.theme = c : x('Unknown data-theme value: "'.concat(c, '".')));
		var l = e.getAttribute("data-size");
		if (l && (pt(l) ? n.size = l : x('Unknown data-size value: "'.concat(l, '".'))), 0) var g;
		var y = e.getAttribute("data-action");
		typeof y == "string" && (n.action = y);
		var s = e.getAttribute("data-cdata");
		typeof s == "string" && (n.cData = s);
		var p = e.getAttribute("data-retry");
		p && (ut(p) ? n.retry = p : x('Invalid data-retry value: "'.concat(p, ", expected either 'never' or 'auto'\".")));
		var h = e.getAttribute("data-retry-interval");
		if (h) {
			var I = Number.parseInt(h, 10);
			lt(I) ? n["retry-interval"] = I : x('Invalid data-retry-interval value: "'.concat(h, ', expected an integer value > 0 and < 900000".'))
		}
		var T = e.getAttribute("data-expiry-interval");
		if (T) {
			var N = Number.parseInt(T, 10);
			st(N) ? n["expiry-interval"] = N : x('Invalid data-expiry-interval value: "'.concat(N, ', expected an integer value > 0 and < 360000".'))
		}
		var C = e.getAttribute("data-refresh-expired");
		C && (vt(C) ? n["refresh-expired"] = C : x('Unknown data-refresh-expired value: "'.concat(C, ", expected either: 'never', 'auto' or 'manual'.")));
		var k = e.getAttribute("data-refresh-timeout");
		k && (mt(k) ? n["refresh-timeout"] = k : x('Unknown data-refresh-timeout value: "'.concat(k, ", expected either: 'never', 'auto' or 'manual'.")));
		var R = e.getAttribute("data-language");
		R && (gt(R) ? n.language = R : x('Invalid data-language value: "'.concat(R, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function G(E) {
			var w = e.getAttribute(E);
			return w && window[w] ? window[w] : void 0
		}
		var b = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		b.forEach(function(E) {
			n[E] = G("data-".concat(E))
		});
		var a = e.getAttribute("data-feedback-enabled");
		a ? ($t(a) || x('Invalid data-feedback-enabled value: "'.concat(a, ", expected either: 'true' or 'false'. Value is ignored.")), n["feedback-enabled"] = a === "true") : n["feedback-enabled"] = !0;
		var i, r = (i = e.getAttribute("data-response-field")) !== null && i !== void 0 ? i : "true";
		n["response-field"] = r === "true";
		var u = e.getAttribute("data-response-field-name");
		u && (n["response-field-name"] = u);
		var d = e.getAttribute("data-execution");
		d && (yt(d) ? n.execution = d : x('Unknown data-execution value: "'.concat(d, ", expected either: 'render' or 'execute'.")));
		var v = e.getAttribute("data-appearance");
		return v && (_t(v) ? n.appearance = v : x('Unknown data-appearance value: "'.concat(v, ", expected either: 'always', 'execute', or 'interaction-only'."))), n
	}

	function qr() {
		var e = !0;
		Nt(_, e), _.msgHandler && window.removeEventListener("message", _.msgHandler), yr(window.turnstile, _)
	}
	ge = !1, O = pr(), _.scriptWasLoadedAsync = (Ye = O == null ? void 0 : O.loadedAsync) !== null && Ye !== void 0 ? Ye : !1, _.scriptUrl = (Qe = O == null ? void 0 : O.src) !== null && Qe !== void 0 ? Qe : "undefined", O != null && O.params && (_e = O.params.get("compat"), (_e == null ? void 0 : _e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? x("grecaptcha is already defined. The compatibility layer will not be enabled.") : (x("Compatibility layer enabled."), _.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Ut) : _e !== null && x('Unknown value for api.js?compat: "'.concat(_e, '", ignoring.')), O.params.forEach(function(e, t) {
		M(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || x('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), ge = O.params.get("_upgrade") === "true", z = O.params.get("onload"), z && !ge && setTimeout(function() {
		typeof window[z] == "function" ? window[z]() : (x("Unable to find onload callback '".concat(z, "' immediately after loading, expected 'function', got '").concat(F(window[z]), "'.")), setTimeout(function() {
			typeof window[z] == "function" ? window[z]() : x("Unable to find onload callback '".concat(z, "' after 1 second, expected 'function', got '").concat(F(window[z]), "'."))
		}, 1e3))
	}, 0)), Mt = "turnstile" in window, Mt && !ge ? x("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Mt && ge && (hr(window.turnstile, _), Ct(_), (O == null || (Ke = O.params) === null || Ke === void 0 ? void 0 : Ke.get("render")) !== "explicit" && setTimeout(Ft, 0)), window.turnstile = Ut, ge || ((O == null || ($e = O.params) === null || $e === void 0 ? void 0 : $e.get("render")) !== "explicit" && Dt.push(Ft), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(br, 0) : window.addEventListener("DOMContentLoaded", br))), wr = 24 * 60 * 60 * 1e3, window.setTimeout(qr, wr);
	var ge, O, Ye, Qe, _e, z, Mt, Ke, $e, wr;
})();