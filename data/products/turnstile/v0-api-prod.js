"use strict";
(function() {
	function Bt(e, t, a, o, c, l, g) {
		try {
			var h = e[l](g),
				s = h.value
		} catch (p) {
			a(p);
			return
		}
		h.done ? t(s) : Promise.resolve(s).then(o, c)
	}

	function jt(e) {
		return function() {
			var t = this,
				a = arguments;
			return new Promise(function(o, c) {
				var l = e.apply(t, a);

				function g(s) {
					Bt(l, o, c, g, h, "next", s)
				}

				function h(s) {
					Bt(l, o, c, g, h, "throw", s)
				}
				g(void 0)
			})
		}
	}

	function D(e, t) {
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : D(e, t)
	}

	function Ue(e, t, a) {
		return t in e ? Object.defineProperty(e, t, {
			value: a,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = a, e
	}

	function De(e) {
		for (var t = 1; t < arguments.length; t++) {
			var a = arguments[t] != null ? arguments[t] : {},
				o = Object.keys(a);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(c) {
				return Object.getOwnPropertyDescriptor(a, c).enumerable
			}))), o.forEach(function(c) {
				Ue(e, c, a[c])
			})
		}
		return e
	}

	function Sr(e, t) {
		var a = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			t && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), a.push.apply(a, o)
		}
		return a
	}

	function it(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Sr(Object(t)).forEach(function(a) {
			Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
		}), e
	}

	function qt(e) {
		if (Array.isArray(e)) return e
	}

	function zt(e, t) {
		var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (a != null) {
			var o = [],
				c = !0,
				l = !1,
				g, h;
			try {
				for (a = a.call(e); !(c = (g = a.next()).done) && (o.push(g.value), !(t && o.length === t)); c = !0);
			} catch (s) {
				l = !0, h = s
			} finally {
				try {
					!c && a.return != null && a.return()
				} finally {
					if (l) throw h
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
		for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
		return o
	}

	function Xt(e, t) {
		if (e) {
			if (typeof e == "string") return ot(e, t);
			var a = Object.prototype.toString.call(e).slice(8, -1);
			if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
			if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return ot(e, t)
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
		var a = {
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
			next: h(0),
			throw: h(1),
			return: h(2)
		}, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
			return this
		}), g;

		function h(p) {
			return function(_) {
				return s([p, _])
			}
		}

		function s(p) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; g && (g = 0, p[0] && (a = 0)), a;) try {
				if (o = 1, c && (l = p[0] & 2 ? c.return : p[0] ? c.throw || ((l = c.return) && l.call(c), 0) : c.next) && !(l = l.call(c, p[1])).done) return l;
				switch (c = 0, l && (p = [p[0] & 2, l.value]), p[0]) {
					case 0:
					case 1:
						l = p;
						break;
					case 4:
						return a.label++, {
							value: p[1],
							done: !1
						};
					case 5:
						a.label++, c = p[1], p = [0];
						continue;
					case 7:
						p = a.ops.pop(), a.trys.pop();
						continue;
					default:
						if (l = a.trys, !(l = l.length > 0 && l[l.length - 1]) && (p[0] === 6 || p[0] === 2)) {
							a = 0;
							continue
						}
						if (p[0] === 3 && (!l || p[1] > l[0] && p[1] < l[3])) {
							a.label = p[1];
							break
						}
						if (p[0] === 6 && a.label < l[1]) {
							a.label = l[1], l = p;
							break
						}
						if (l && a.label < l[2]) {
							a.label = l[2], a.ops.push(p);
							break
						}
						l[2] && a.ops.pop(), a.trys.pop();
						continue
				}
				p = t.call(e, a)
			} catch (_) {
				p = [6, _], c = 0
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
	var He;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(He || (He = {}));
	var Oe;
	(function(e) {
		e.VERIFYING = "verifying", e.VERIFYING_HAVING_TROUBLES = "verifying-having-troubles", e.VERIFYING_OVERRUN = "verifying-overrun", e.FAILURE_WO_HAVING_TROUBLES = "failure-wo-having-troubles", e.FAILURE_HAVING_TROUBLES = "failure-having-troubles", e.FAILURE_FEEDBACK = "failure-feedback", e.FAILURE_FEEDBACK_CODE = "failure-feedback-code", e.EXPIRED_NEVER_REFRESH = "expired-never-refresh", e.EXPIRED_MANUAL_REFRESH = "expired-manual-refresh", e.TIMEOUT_NEVER_REFRESH = "timeout-never-refresh", e.TIMEOUT_MANUAL_REFRESH = "timeout-manual-refresh", e.INTERACTIVITY_REQUIRED = "interactivity-required", e.OUTDATED_BROWSER = "outdated-browser", e.TIME_CHECK_CACHED_WARNING = "time-check-cached-warning", e.INVALID_DOMAIN = "invalid-domain"
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
	var Be;
	(function(e) {
		e.FAILURE = "failure", e.VERIFYING = "verifying", e.OVERRUNNING = "overrunning", e.CUSTOM = "custom"
	})(Be || (Be = {}));

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

	function yt(e) {
		return M(["always", "execute", "interaction-only"], e)
	}

	function $t(e) {
		return M(["true", "false"], e)
	}

	function ht(e) {
		return M(["render", "execute"], e)
	}
	var Jt = 300,
		Zt = 10;

	function _t(e) {
		var t = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), t.size !== 0) return t.toString()
	}
	var je = "cf-chl-widget-",
		V = "cloudflare-challenge",
		er = ".cf-turnstile",
		tr = ".cf-challenge",
		rr = ".g-recaptcha",
		bt = "cf_challenge_response",
		xt = "cf-turnstile-response",
		Et = "g-recaptcha-response",
		ar = 8e3,
		wt = "private-token",
		nr = 3,
		ir = 500,
		or = 500,
		K = "";
	var Lr = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Mr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];

	function Tt(e, t) {
		var a = "https://challenges.cloudflare.com";
		if (t) {
			var o;
			a = (o = e["base-url"]) !== null && o !== void 0 ? o : a
		}
		return a
	}

	function Rt(e, t, a, o, c, l, g, h) {
		var s = Tt(a, c),
			p = l ? "h/".concat(l, "/") : "",
			_ = h ? "?".concat(h) : "",
			I = a["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(s, "/cdn-cgi/challenge-platform/").concat(p, "turnstile/if/ov2/av0/rcv").concat(o, "/").concat(e, "/").concat(t, "/").concat(a.theme, "/").concat(I, "/").concat(g, "/").concat(a.size, "/").concat(a.language, "/").concat(_)
	}
	var At = function(e) {
			var t, a, o = window.innerWidth < 400,
				c = e.state === Oe.FAILURE_FEEDBACK || e.state === Oe.FAILURE_HAVING_TROUBLES,
				l, g = M(Lr, (l = (t = e.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && l !== void 0 ? l : "nonexistent"),
				h, s = M(Mr, (h = (a = e.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && h !== void 0 ? h : "nonexistent");
			return o ? Fr({
				isModeratelyVerbose: s,
				isVerboseLanguage: g,
				isSmallerFeedback: c
			}) : c && g ? "520px" : c && s ? "500px" : c ? "480px" : g ? "580px" : "570px"
		},
		Fr = function(e) {
			var t = e.isVerboseLanguage,
				a = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return a && t ? "540px" : a && o ? "500px" : a ? "480px" : t ? "650px" : o ? "590px" : "570px"
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

	function Ce(e, t, a) {
		return ze() ? Ce = Reflect.construct : Ce = function(c, l, g) {
			var h = [null];
			h.push.apply(h, l);
			var s = Function.bind.apply(c, h),
				p = new s;
			return g && te(p, g.prototype), p
		}, Ce.apply(null, arguments)
	}

	function le(e) {
		return le = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
			return a.__proto__ || Object.getPrototypeOf(a)
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
		ur(a, e);
		var t = dr(a);

		function a(o, c) {
			cr(this, a);
			var l;
			return l = t.call(this, o), Ue(qe(l), "code", void 0), l.name = "TurnstileError", l.code = c, l
		}
		return a
	}(Ge(Error));

	function m(e, t) {
		var a = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new fr(a, t)
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
		for (var a = document.querySelectorAll("script"), o = 0, c; c = a[o]; o++)
			if (D(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function pr() {
		var e = It();
		e || m("Could not find Turnstile script tag, some features may not be available", 43777);
		var t = e.src,
			a = {
				loadedAsync: !1,
				params: new URLSearchParams,
				src: t
			};
		(e.async || e.defer) && (a.loadedAsync = !0);
		var o = t.split("?");
		return o.length > 1 && (a.params = new URLSearchParams(o[1])), a
	}

	function P() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}
	var St = function(e, t, a) {
			var o = Tt(t.params, !1),
				c = "h/".concat("b", "/"),
				l, g, h = "".concat(o, "/cdn-cgi/challenge-platform/").concat(c, "feedback-reports/").concat(Xe(e), "/").concat(t.displayLanguage, "/").concat((l = t.params.theme) !== null && l !== void 0 ? l : t.theme, "/").concat(a);
			t.wrapper.parentNode || m("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var s = document.createElement("div");
			s.style.position = "fixed", s.style.zIndex = "2147483646", s.style.width = "100vw", s.style.height = "100vh", s.style.top = "0", s.style.left = "0", s.style.transformOrigin = "center center", s.style.overflowX = "hidden", s.style.overflowY = "auto", s.style.background = "rgba(0,0,0,0.4)";
			var p = document.createElement("div");
			p.style.display = "table-cell", p.style.verticalAlign = "middle", p.style.width = "100vw", p.style.height = "100vh";
			var _ = document.createElement("div");
			_.className = "cf-turnstile-feedback", _.id = "cf-fr-id", _.style.width = "100vw", _.style.maxWidth = "450px", _.style.height = At(t), _.style.position = "relative", _.style.zIndex = "2147483647", _.style.backgroundColor = "#ffffff", _.style.borderRadius = "5px", _.style.left = "0px", _.style.top = "0px", _.style.overflow = "hidden", _.style.margin = "0px auto";
			var I = document.createElement("iframe");
			I.id = "".concat(e, "-fr"), I.setAttribute("src", h), I.setAttribute("allow", "cross-origin-isolated; fullscreen"), I.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), I.setAttribute("scrolling", "no"), I.style.borderWidth = "0px", I.style.width = "100%", I.style.height = "100%", I.style.overflow = "hidden";
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
			k.setAttribute("stroke-width", "1"), k.setAttribute("stroke", "#999"), k.setAttribute("fill", "none"), k.setAttribute("x1", "6"), k.setAttribute("x2", "18"), k.setAttribute("y1", "5"), k.setAttribute("y2", "18"), T.appendChild(k), _.appendChild(I), _.appendChild(T), p.appendChild(_), s.appendChild(p), s.addEventListener("click", function() {
				var R;
				(R = s.parentNode) === null || R === void 0 || R.removeChild(s)
			}), t.wrapper.parentNode.appendChild(s), window.addEventListener("resize", function() {
				_.style.height = At(t)
			})
		},
		vr = function(e) {
			var t, a, o;
			(o = document.getElementById(e)) === null || o === void 0 || (a = o.parentElement) === null || a === void 0 || (t = a.parentElement) === null || t === void 0 || t.remove()
		};
	var Ot = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > t ? e.substring(0, t) : e
	};

	function mr(e) {
		if (!e) return "-";
		var t = function(a, o) {
			if (!a || a.tagName === "BODY") return o;
			for (var c = 1, l = a.previousElementSibling; l;) l.tagName === a.tagName && c++, l = l.previousElementSibling;
			var g = Ot(a.tagName.toLowerCase()),
				h = "".concat(g, "[").concat(c, "]");
			return t(a.parentNode, "/".concat(h).concat(o))
		};
		return t(e, "")
	}

	function gr(e, t, a) {
		for (var o = "", c = 0, l = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(I) {
					return c > t || o.length > a ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), g;
			(g = l.nextNode()) !== null && o.length < a;) {
			if (g.nodeType === Node.ELEMENT_NODE) {
				var h = g;
				o += "".concat(Ot(h.tagName.toLowerCase()));
				for (var s = 0; s < h.attributes.length; s++) {
					var p = h.attributes[s];
					o += "_".concat(Ot(p.name, 2))
				}
				o += ">"
			} else g.nodeType === Node.TEXT_NODE && (o += "-t");
			var _ = g.parentNode;
			for (c = 0; _ !== e && _ !== null;) c++, _ = _.parentNode
		}
		return o.substring(0, a)
	}

	function yr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : F(e)));
		for (var t = 5381, a = 0; a < e.length; a++) {
			var o = e.charCodeAt(a);
			t = t * 33 ^ o
		}
		return t >>> 0
	}

	function hr(e, t) {
		var a;
		t.upgradeAttempts++;
		var o = It();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = t;
			var l = new URL(o.src),
				g = document.createElement("script");
			l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), g.async = !0, c && (g.nonce = c), g.setAttribute("crossorigin", "anonymous"), g.src = l.toString(), o == null || (a = o.parentNode) === null || a === void 0 || a.replaceChild(g, o)
		}
	}

	function _r(e, t) {
		var a = e._pState;
		return a ? (t.isReady = a.isReady, t.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, t.lastWidgetIdx = a.lastWidgetIdx, t.scriptWasLoadedAsync = a.scriptWasLoadedAsync, t.upgradeAttempts = a.upgradeAttempts, t.upgradeCompletedCount = a.upgradeCompletedCount + 1, t.turnstileLoadInitTimeMs = P(), t.watchCatInterval = null, t.watchCatSeq = a.watchCatSeq, t.widgetMap = a.widgetMap, !0) : !1
	}
	var Ur = 900,
		Dr = 3,
		Vr = 50;

	function Pr(e) {
		e.watchCatSeq++;
		var t = !0,
			a = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), l; !(t = (l = c.next()).done); t = !0) {
				var g = Se(l.value, 2),
					h = g[0],
					s = g[1],
					p;
				s.watchcat.seq = e.watchCatSeq, s.watchcat.lastAckedSeq === 0 && (s.watchcat.lastAckedSeq = e.watchCatSeq);
				var _ = $(h);
				if (!_ || !s.shadow) {
					s.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(_, ", consider using turnstile.remove() to clean up a widget.")), s.watchcat.missingWidgetWarning = !0);
					continue
				}
				var I = s.shadow.querySelector("#".concat(_));
				if (!I) {
					s.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(_, ", consider using turnstile.remove() to clean up a widget.")), s.watchcat.missingWidgetWarning = !0);
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
						G(N ? "hung" : "crashed", h);
						var b = N ? Pe : We,
							n;
						if ((R = e.msgHandler) === null || R === void 0 || R.call(e, {
								data: {
									source: V,
									widgetId: h,
									code: b,
									event: "fail",
									rcV: (n = s.nextRcV) !== null && n !== void 0 ? n : K
								}
							}), 0) var i;
						continue
					}(p = I.contentWindow) === null || p === void 0 || p.postMessage({
						source: V,
						widgetId: h,
						seq: e.watchCatSeq,
						event: "meow"
					}, "*")
				}
			}
		} catch (r) {
			a = !0, o = r
		} finally {
			try {
				!t && c.return != null && c.return()
			} finally {
				if (a) throw o
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
	var y = {
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
		y.isRecaptchaCompatibilityMode && e.push(rr), document.querySelectorAll(e.join(", ")).forEach(function(t) {
			return Ut.render(t)
		})
	}
	var Dt = [];

	function br() {
		y.isReady = !0;
		var e = !0,
			t = !1,
			a = void 0;
		try {
			for (var o = Dt[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var l = c.value;
				l()
			}
		} catch (g) {
			t = !0, a = g
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (t) throw a
			}
		}
	}

	function Wr(e) {
		var t = y.widgetMap.get(e);
		if (!(t === void 0 || t.hasResponseParamEl)) {
			t.hasResponseParamEl = !0;
			var a, o = (a = t.params["response-field"]) !== null && a !== void 0 ? a : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var l;
				c.name = (l = t.params["response-field-name"]) !== null && l !== void 0 ? l : xt, c.id = "".concat(e, "_response"), t.wrapper.appendChild(c);
				var g;
				if (typeof t.params["response-field-name"] != "string" && Rr((g = t.params.sitekey) !== null && g !== void 0 ? g : "")) {
					var h = document.createElement("input");
					h.type = "hidden", h.name = bt, h.id = "".concat(e, "_legacy_response"), t.wrapper.appendChild(h)
				}
			}
			if (y.isRecaptchaCompatibilityMode) {
				var s = document.createElement("input");
				s.type = "hidden", s.name = Et, s.id = "".concat(e, "_g_response"), t.wrapper.appendChild(s)
			}
		}
	}

	function Tr(e, t) {
		Wr(e);
		var a = document.getElementById("".concat(e, "_response"));
		a !== null && D(a, HTMLInputElement) && (a.value = t);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && D(o, HTMLInputElement) && (o.value = t), y.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && D(c, HTMLInputElement) && (c.value = t)
		}
	}

	function Lt(e, t) {
		var a = t.params,
			o = a.size,
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

	function Hr(e, t) {
		var a = t.get("turnstile_iframe_alt");
		a && (e.title = a)
	}

	function Br(e) {
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
		var e = function(n, i, r, u) {
				return C.apply(this, arguments)
			},
			t = function(n, i, r) {
				if (n.params.retry === ve.AUTO || r) {
					n.isExecuted && (n.msgQueue.push(ue.EXECUTE), n.isExecuted = !0, n.isExecuting = !0);
					var u, d = r ? 0 : 1e3 * 2 + ((u = n.params["retry-interval"]) !== null && u !== void 0 ? u : 0);
					n.retryTimeout = window.setTimeout(function() {
						var v = r ? q.CrashedRetry : q.FailureRetry;
						_(v, i)
					}, d)
				}
			},
			a = function(n, i, r) {
				var u;
				n.response === void 0 && m("[Internal Error] Widget was completed but no response was given", 1362), n.isExecuting = !1, n.isComplete = !0, Tr(i, n.response), (u = n.cbSuccess) === null || u === void 0 || u.call(n, n.response, r)
			},
			o = function(n) {
				if (!n) return [];
				for (var i = n.attributes, r = i.length, u = new Array(r), d = 0; d < r; d++) u[d] = i[d].name;
				return u
			},
			c = function(n, i, r) {
				if (n.rcV = i, 0) var u
			},
			l = function() {
				var n = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = n.length,
					r = "";
				do {
					r = "";
					for (var u = 0; u < 5; u++) r += n.charAt(Math.floor(Math.random() * i))
				} while (y.widgetMap.has(r));
				return r
			},
			g = function(n) {
				var i = !0,
					r = !1,
					u = void 0;
				try {
					for (var d = y.widgetMap[Symbol.iterator](), v; !(i = (v = d.next()).done); i = !0) {
						var E = Se(v.value, 2),
							w = E[0],
							A = E[1];
						if (A.wrapper.parentElement === n) return w
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
			h = function(n, i, r) {
				for (; n.msgQueue.length;) {
					var u, d = n.msgQueue.pop();
					(u = r.contentWindow) === null || u === void 0 || u.postMessage({
						source: V,
						widgetId: i,
						event: d
					}, "*")
				}
			},
			s = function(n, i) {
				if (i) {
					var r = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						u = [],
						d = !0,
						v = !1,
						E = void 0;
					try {
						for (var w = r[Symbol.iterator](), A; !(d = (A = w.next()).done); d = !0) {
							var S = A.value;
							i[S] && i[S] !== n.params[S] && u.push(S)
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
					u.length !== 0 && m("The parameters ".concat(r.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(u.join(",")), 3618), i.action && (dt(i.action) || m('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), n.action = i.action), i.cData && (ft(i.cData) || m('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), n.cData = i.cData), i["after-interactive-callback"] && (n.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (n.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (n.cbSuccess = i.callback), i["expired-callback"] && (n.cbExpired = i["expired-callback"]), i["timeout-callback"] && (n.cbTimeout = i["timeout-callback"]), i["error-callback"] && (n.cbError = i["error-callback"]), i["unsupported-callback"] && (n.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (n.chlPageData = i.chlPageData)
				}
			},
			p = function(n) {
				_(q.Api, n)
			},
			_ = function(n, i) {
				var r = R(i);
				r || m("Nothing to reset found for provided container", 3329);
				var u = y.widgetMap.get(r);
				if (u) {
					var d;
					u.isResetting = !0, u.response = void 0, u.mode = void 0, u.msgQueue = [], u.isComplete = !1, u.isExecuting = !1, u.isExpired = !1, u.isFailed = !1, u.isInitialized = !1, u.isStale = !1, u.watchcat.lastAckedSeq = 0, u.watchcat.seq = 0, u.params.execution === me.RENDER && (u.msgQueue.push(ue.EXECUTE), u.isExecuted = !0, u.isExecuting = !0);
					var v = $(r),
						E = u.shadow.querySelector("#".concat(v));
					(!v || !E) && m("Widget ".concat(r, " to reset was not found."), 3330), u.params.appearance === Q.INTERACTION_ONLY && xr(E), u.params.sitekey === null && m("Unexpected Error: Sitekey is null", 3347);
					var w = E.cloneNode(),
						A;
					w.src = Rt(r, u.params.sitekey, u.params, (A = u.rcV) !== null && A !== void 0 ? A : K, !1, "b", n, _t(u)), (d = E.parentNode) === null || d === void 0 || d.replaceChild(w, E), kt(v), u.retryTimeout && window.clearTimeout(u.retryTimeout)
				} else m("Widget ".concat(r, " to reset was not found."), 3331)
			},
			I = function(n) {
				var i, r = R(n);
				if (!r || !y.widgetMap.has(r)) {
					x("Nothing to remove found for the provided container.");
					return
				}
				var u = $(r),
					d = ["input#".concat(u, "_response"), "input#".concat(u, "_legacy_response"), "input#".concat(u, "_g_response")];
				document.querySelectorAll(d.join(", ")).forEach(function(w) {
					return w.remove()
				});
				var v = y.widgetMap.get(r);
				v == null || v.shadow.querySelectorAll(d.join(", ")).forEach(function(w) {
					return w.remove()
				}), v == null || v.wrapper.remove();
				var E = (i = y.widgetMap.get(r)) === null || i === void 0 ? void 0 : i.retryTimeout;
				E && window.clearTimeout(E), y.widgetMap.delete(r), Nt(y)
			},
			T = function(n, i) {
				var r, u, d = P(),
					v;
				if (typeof n == "string") try {
					var E = document.querySelector(n);
					E || m('Unable to find a container for "'.concat(n, '"'), 3585), v = E
				} catch (Ht) {
					m('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(n, '"'), 3586)
				} else D(n, HTMLElement) ? v = n : m('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var w = !0,
					A = !1,
					S = void 0;
				try {
					for (var U = y.widgetMap.values()[Symbol.iterator](), W; !(w = (W = U.next()).done); w = !0) {
						var X = W.value;
						if (v.contains(X.wrapper)) {
							x("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (Ht) {
					A = !0, S = Ht
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
						he = f.action,
						re = f.cData,
						Ne = f.chlPageData,
						H = f.sitekey,
						ae;
					f.theme = (ae = f.theme) !== null && ae !== void 0 ? ae : He.AUTO;
					var se;
					f.retry = (se = f.retry) !== null && se !== void 0 ? se : ve.AUTO;
					var ne;
					f.execution = (ne = f.execution) !== null && ne !== void 0 ? ne : me.RENDER;
					var _e;
					f.appearance = (_e = f.appearance) !== null && _e !== void 0 ? _e : Q.ALWAYS;
					var ie;
					f["retry-interval"] = Number((ie = f["retry-interval"]) !== null && ie !== void 0 ? ie : ar);
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
					typeof H != "string" && m('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof H == "undefined" ? "undefined" : F(H), '"'), 3588), Kt(H) || m('Invalid input for parameter "sitekey", got "'.concat(H, '"'), 3589), pt(f.size) || m('Invalid type for parameter "size", expected normal|compact, got "'.concat(f.size, '" ').concat(F(f.size)), 3590), ct(f.theme) || m('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(f.theme, '" ').concat(F(f.theme)), 3591), ut(f.retry) || m('Invalid type for parameter "retry", expected never|auto, got "'.concat(f.retry, '" ').concat(F(f.retry)), 3592), f.language || (f.language = "auto"), gt(f.language) || (x('Invalid language value: "'.concat(f.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), f.language = "auto"), yt(f.appearance) || m('Unknown appearance value: "'.concat(f.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), ht(f.execution) || m('Unknown execution value: "'.concat(f.execution, ", expected either: 'render' or 'execute'."), 3601), lt(f["retry-interval"]) || m('Invalid retry-interval value: "'.concat(f["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), st(f["expiry-interval"]) || m('Invalid expiry-interval value: "'.concat(f["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var Re, Z = (Re = f["refresh-expired"]) !== null && Re !== void 0 ? Re : ee.AUTO;
					vt(Z) ? f["refresh-expired"] = Z : m('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(Z, '" ').concat(typeof Z == "undefined" ? "undefined" : F(Z)), 3603);
					var Ae, oe = (Ae = f["refresh-timeout"]) !== null && Ae !== void 0 ? Ae : ce.AUTO;
					mt(Z) ? f["refresh-timeout"] = oe : m('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(oe, '" ').concat(typeof oe == "undefined" ? "undefined" : F(oe)), 3603);
					var B = document.createElement("iframe"),
						fe = document.createElement("div"),
						Vt = fe.attachShadow({
							mode: "closed"
						});
					dt(he) || m('Invalid input for optional parameter "action", got "'.concat(he, '"'), 3604), ft(re) || m('Invalid input for optional parameter "cData", got "'.concat(re, '"'), 3605);
					var Ie = l(),
						pe = $(Ie);
					if (!(!Ie || !pe)) {
						var Pt = [],
							Ze = f.execution === me.RENDER;
						Ze && Pt.push(ue.EXECUTE), y.lastWidgetIdx++;
						var Ar = {};
						y.widgetMap.set(Ie, it(De({
							idx: y.lastWidgetIdx,
							action: he,
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
						})), Ct(y);
						var et = y.widgetMap.get(Ie);
						et || m("Turnstile Initialization Error ", 3606), B.style.display = "none", B.style.border = "none", B.style.overflow = "hidden", B.setAttribute("src", Rt(Ie, H, f, K, !1, "b", q.New, _t(et))), B.onerror = function() {
							if (Y) {
								Y == null || Y(String(Yt.code));
								return
							}
							m("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var Wt = ["cross-origin-isolated", "fullscreen", "autoplay"],
							tt;
						M((tt = (u = document.featurePolicy) === null || u === void 0 || (r = u.features) === null || r === void 0 ? void 0 : r.call(u)) !== null && tt !== void 0 ? tt : [], wt) && Wt.push(wt), B.setAttribute("allow", Wt.join("; ")), B.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), B.id = pe;
						var rt;
						B.tabIndex = (rt = f.tabindex) !== null && rt !== void 0 ? rt : 0, B.title = "Widget containing a Cloudflare security challenge", Vt.appendChild(B);
						var at, Ir = (at = f["response-field"]) !== null && at !== void 0 ? at : !0;
						if (Ir) {
							var Le = document.createElement("input");
							Le.type = "hidden";
							var nt;
							if (Le.name = (nt = f["response-field-name"]) !== null && nt !== void 0 ? nt : xt, Le.id = "".concat(pe, "_response"), fe.appendChild(Le), typeof f["response-field-name"] != "string" && Rr(H)) {
								var Me = document.createElement("input");
								Me.type = "hidden", Me.name = bt, Me.id = "".concat(pe, "_legacy_response"), fe.appendChild(Me)
							}
						}
						if (y.isRecaptchaCompatibilityMode) {
							var Fe = document.createElement("input");
							Fe.type = "hidden", Fe.name = Et, Fe.id = "".concat(pe, "_g_response"), fe.appendChild(Fe)
						}
						return v.appendChild(fe), et.widgetRenderEndTimeMs = P(), pe
					}
				}
			},
			N = function() {
				var n, i = -1,
					r = !0,
					u = !1,
					d = void 0;
				try {
					for (var v = y.widgetMap[Symbol.iterator](), E; !(r = (E = v.next()).done); r = !0) {
						var w = Se(E.value, 2),
							A = w[0],
							S = w[1];
						i < S.idx && (n = A, i = S.idx)
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
				return i === -1 && m("Could not find widget", 43778), n
			};

		function C() {
			return C = jt(function(b, n, i, r) {
				var u, d, v, E, w, A, S, U, W, X, J;
				return Ve(this, function(f) {
					switch (f.label) {
						case 0:
							if (u = b.params.sitekey, d = Er(), !d) return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(b, n, !1), [2];
							v = "h/".concat("b", "/"), E = new URL(d), w = "https", A = "", U = "".concat(w, "://").concat(E.host, "/cdn-cgi/challenge-platform/").concat(v, "rc/").concat(r).concat(A), f.label = 1;
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
							return W = f.sent(), W.status === 200 ? [3, 3] : (x("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), a(b, n, !1), [3, 5]);
						case 3:
							return [4, W.json()];
						case 4:
							if (X = f.sent(), "status" in X && X.status === "redeemed") return a(b, n, !0), [2];
							f.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return J = f.sent(), x("Error contacting Turnstile, aborting clearance remdeption."), a(b, n, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), C.apply(this, arguments)
		}
		var k = function(b) {
			var n = b.data;
			if (n.source === V) {
				if (!Br(b)) {
					x("Ignored message from wrong origin: ".concat(b.origin, "."));
					return
				}
				if (!(!n.widgetId || !y.widgetMap.has(n.widgetId))) {
					var i = $(n.widgetId),
						r = y.widgetMap.get(n.widgetId);
					if (!(!i || !r)) switch (n.event) {
						case "init": {
							var u;
							r.widgetInitStartTimeMs = P();
							var d = r.shadow.getElementById(i);
							d || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), r.mode = n.mode, r.nextRcV = n.nextRcV, r.mode === j.INVISIBLE && r.params["refresh-expired"] === ee.MANUAL && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(ee.AUTO, "' or '").concat(ee.NEVER, ".'")), r.mode !== j.MANAGED && r.params["refresh-timeout"] !== ce.AUTO && x("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), r.params.appearance === Q.ALWAYS || r.isExecuting && r.params.appearance === Q.EXECUTE ? Lt(d, r) : xr(d), d.style.display = "";
							var v = r.shadow.querySelector("#".concat(i));
							v || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), (u = v.contentWindow) === null || u === void 0 || u.postMessage({
								source: V,
								widgetId: n.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var E = r.shadow.getElementById(i);
							E || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var w = new Map;
							r.displayLanguage = n.displayLanguage, Object.keys(n.translationData).forEach(function(oe) {
								w.set(oe, n.translationData[oe])
							}), Hr(E, w);
							break
						}
						case "languageUnsupported": {
							x("Language ".concat(r.params.language, " is not supported, falling back to: ").concat(n.fallback, ".")), r.displayLanguage = n.fallback;
							break
						}
						case "reject": {
							var A = r.shadow.getElementById(i);
							if (r.isExecuting = !1, A || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), n.reason === "outdated_browser") {
								var S;
								(S = r.cbUnsupported) === null || S === void 0 || S.call(r)
							}
							break
						}
						case "food": {
							r.watchcat && n.seq > r.watchcat.lastAckedSeq && (r.watchcat.lastAckedSeq = n.seq);
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
							c(r, K, n.widgetId), r.response = n.token, n.sToken ? e(r, i, n.sToken, n.chlId) : a(r, i, !1);
							break
						}
						case "fail": {
							n.rcV && c(r, n.rcV, n.widgetId), n.cfChlOut && (r.cfChlOut = n.cfChlOut), n.cfChlOutS && (r.cfChlOutS = n.cfChlOutS), n.code && (r.errorCode = n.code), r.isExecuting = !1, r.isFailed = !0, r.isInitialized = !0, kt(i);
							var U = r.cbError,
								W = n.code === Pe || n.code === We;
							if (W) {
								var X, J = r.shadow.querySelector("#".concat(i));
								J == null || (X = J.contentWindow) === null || X === void 0 || X.postMessage({
									source: V,
									widgetId: n.widgetId,
									event: "forceFail"
								}, "*")
							}
							if (U) {
								var f;
								U(String((f = n.code) !== null && f !== void 0 ? f : Qt)) ? r.params.retry === ve.AUTO && !r.isResetting && t(r, i, W) : (n.code && x("Error: ".concat(n.code, ".")), t(r, i, W))
							} else n.code ? (t(r, i, W), m("Error: ".concat(n.code), 3076)) : t(r, i, !1);
							break
						}
						case "feedbackInit": {
							var he = r.wrapper.querySelector("#".concat(i, "-fr"));
							if (he) {
								x("A feedback report form is already opened for this widget.");
								return
							}
							St(i, r, n.feedbackOrigin);
							break
						}
						case "requestFeedbackData": {
							var re, Ne = r.shadow.querySelector("#".concat(i));
							Ne || m("Received state for an unknown widget: #".concat(i, " / ").concat(n.widgetId), 3078), (re = Ne.contentWindow) === null || re === void 0 || re.postMessage({
								source: V,
								widgetId: n.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var H, ae, se = (H = r.wrapper.parentNode) === null || H === void 0 ? void 0 : H.querySelector("#".concat(i, "-fr"));
							se || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), (ae = se.contentWindow) === null || ae === void 0 || ae.postMessage({
								source: V,
								widgetId: n.widgetId,
								event: "feedbackData",
								rayId: n.rayId,
								rcV: n.rcV,
								cfChlOut: r.cfChlOut,
								cfChlOutS: r.cfChlOutS,
								errorCode: r.errorCode,
								sitekey: n.sitekey,
								mode: n.mode,
								issuanceUserAgent: n.issuanceUserAgent
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var ne, _e = (ne = r.wrapper.parentNode) === null || ne === void 0 ? void 0 : ne.querySelector("#".concat(i, "-fr"));
							_e || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), vr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ie, be = n.token;
							r.isExpired = !0, (ie = r.cbExpired) === null || ie === void 0 || ie.call(r, be), r.params["refresh-expired"] === ee.AUTO && !r.isResetting && _(q.AutoExpire, i);
							break
						}
						case "interactiveTimeout": {
							c(r, K, n.widgetId), kt(i);
							var de = r.cbTimeout;
							if (de ? de() : r.params["refresh-timeout"] === ce.NEVER && !r.isResetting && x("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), r.params["refresh-timeout"] === ce.AUTO && !r.isResetting) {
								var xe = r.cbAfterInteractive;
								xe == null || xe(), _(q.AutoTimeout, i)
							}
							break
						}
						case "refreshRequest": {
							c(r, K, n.widgetId), _(q.ManualRefresh, i);
							break
						}
						case "reloadRequest": {
							c(r, n.nextRcV, n.widgetId), _(n.trigger, i);
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
							Y || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), r.isResetting = !1;
							var Je = {},
								Re = P(),
								Z = {
									"w.iW": window.innerWidth,
									"ht.atrs": o(document.body.parentNode),
									pi: {
										xp: mr(r.wrapper).substring(0, or),
										pfp: gr(document, nr, ir),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: yr(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href,
										sR: r.wrapper.shadowRoot === null
									}
								},
								Ae = P() - Re;
							(Te = Y.contentWindow) === null || Te === void 0 || Te.postMessage(De({
								source: V,
								widgetId: n.widgetId,
								event: "extraParams",
								action: r.action,
								cData: r.cData,
								chlPageData: r.chlPageData,
								rcV: r.rcV,
								ch: "725bd36e298b",
								au: y.scriptUrl,
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
								turnstileAgeMs: P() - y.turnstileLoadInitTimeMs,
								widgetAgeMs: P() - r.widgetRenderStartTimeMs,
								upgradeAttempts: y.upgradeAttempts,
								upgradeCompletedCount: y.upgradeCompletedCount,
								timeRenderMs: r.widgetRenderEndTimeMs - r.widgetRenderStartTimeMs,
								timeToInitMs: r.widgetInitStartTimeMs - r.widgetRenderEndTimeMs,
								timeToParamsMs: r.widgetParamsStartTimeMs - r.widgetInitStartTimeMs,
								tiefTimeMs: Ae
							}, Je), "*"), h(r, n.widgetId, Y), r.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		y.msgHandler = k, window.addEventListener("message", k);

		function R(b) {
			if (typeof b == "string") {
				var n = Xe(b);
				if (n && y.widgetMap.has(n)) return n;
				if (y.widgetMap.has(b)) return b;
				try {
					var i = document.querySelector(b);
					return i ? R(i) : null
				} catch (r) {
					return null
				}
			}
			return D(b, Element) ? g(b) : b || y.widgetMap.size === 0 ? null : y.widgetMap.keys().next().value
		}
		var G = {};
		return it(De({}, G), {
			ready: function(n) {
				if (y.scriptWasLoadedAsync && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), m("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof n != "function" && m('turnstile.ready() expected a "function" argument, got "'.concat(typeof n == "undefined" ? "undefined" : F(n), '"'), 3841), y.isReady) {
					n();
					return
				}
				Dt.push(n)
			},
			implicitRender: Ft,
			execute: function(n, i) {
				var r = R(n);
				if (!r) {
					i === void 0 && m("Please provide 2 parameters to execute: container and parameters", 43521);
					var u = T(n, i);
					u || m("Failed to render widget", 43522), r = u
				}
				var d = y.widgetMap.get(r);
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
					d.isExpired && x("Call to execute on a expired-widget (".concat(v, "), consider using reset() before.")), d.isStale && (_(q.StaleExecute, v), d.isExecuting = !0), d.msgQueue.push(ue.EXECUTE), d.isExecuted = !0;
					var w = d.shadow.querySelector("#".concat(v));
					if (w || (d.isExecuting = !1, m("Widget ".concat(v, " to execute was not found"), 43522)), d.isResetting) return;
					if (d.isInitialized && h(d, r, w), d.isInitialized && d.params.appearance === Q.EXECUTE && Lt(w, d), d.isExecuting) {
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
				showFeedback: function(n) {
					var i = R(n);
					if (i) {
						var r = $(i);
						if (r) {
							var u = y.widgetMap.get(i);
							u && St(r, u, Be.CUSTOM)
						}
					}
				}
			},
			getResponse: function(n) {
				var i;
				if (typeof n == "undefined") {
					var r = N();
					if (r) {
						var u, d = y.widgetMap.get(r);
						return d != null && d.isExpired && x("Call to getResponse on a widget that expired, consider refreshing the widget."), (u = y.widgetMap.get(r)) === null || u === void 0 ? void 0 : u.response
					}
					m("Could not find a widget", 43794)
				}
				var v = R(n);
				return v || m("Could not find widget for provided container", 43778), (i = y.widgetMap.get(v)) === null || i === void 0 ? void 0 : i.response
			},
			isExpired: function(n) {
				var i;
				if (typeof n == "undefined") {
					var r = N();
					if (r) {
						var u, d;
						return (d = (u = y.widgetMap.get(r)) === null || u === void 0 ? void 0 : u.isExpired) !== null && d !== void 0 ? d : !1
					}
					m("Could not find a widget", 43794)
				}
				var v = R(n);
				v || m("Could not find widget for provided container", 43778);
				var E;
				return (E = (i = y.widgetMap.get(v)) === null || i === void 0 ? void 0 : i.isExpired) !== null && E !== void 0 ? E : !1
			}
		})
	}();

	function jr(e) {
		var t = e.getAttribute("data-sitekey"),
			a = {
				sitekey: t
			},
			o = e.getAttribute("data-tabindex");
		o && (a.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (ct(c) ? a.theme = c : x('Unknown data-theme value: "'.concat(c, '".')));
		var l = e.getAttribute("data-size");
		if (l && (pt(l) ? a.size = l : x('Unknown data-size value: "'.concat(l, '".'))), 0) var g;
		var h = e.getAttribute("data-action");
		typeof h == "string" && (a.action = h);
		var s = e.getAttribute("data-cdata");
		typeof s == "string" && (a.cData = s);
		var p = e.getAttribute("data-retry");
		p && (ut(p) ? a.retry = p : x('Invalid data-retry value: "'.concat(p, ", expected either 'never' or 'auto'\".")));
		var _ = e.getAttribute("data-retry-interval");
		if (_) {
			var I = Number.parseInt(_, 10);
			lt(I) ? a["retry-interval"] = I : x('Invalid data-retry-interval value: "'.concat(_, ', expected an integer value > 0 and < 900000".'))
		}
		var T = e.getAttribute("data-expiry-interval");
		if (T) {
			var N = Number.parseInt(T, 10);
			st(N) ? a["expiry-interval"] = N : x('Invalid data-expiry-interval value: "'.concat(N, ', expected an integer value > 0 and < 360000".'))
		}
		var C = e.getAttribute("data-refresh-expired");
		C && (vt(C) ? a["refresh-expired"] = C : x('Unknown data-refresh-expired value: "'.concat(C, ", expected either: 'never', 'auto' or 'manual'.")));
		var k = e.getAttribute("data-refresh-timeout");
		k && (mt(k) ? a["refresh-timeout"] = k : x('Unknown data-refresh-timeout value: "'.concat(k, ", expected either: 'never', 'auto' or 'manual'.")));
		var R = e.getAttribute("data-language");
		R && (gt(R) ? a.language = R : x('Invalid data-language value: "'.concat(R, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function G(E) {
			var w = e.getAttribute(E);
			return w && window[w] ? window[w] : void 0
		}
		var b = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		b.forEach(function(E) {
			a[E] = G("data-".concat(E))
		});
		var n = e.getAttribute("data-feedback-enabled");
		n ? ($t(n) || x('Invalid data-feedback-enabled value: "'.concat(n, ", expected either: 'true' or 'false'. Value is ignored.")), a["feedback-enabled"] = n === "true") : a["feedback-enabled"] = !0;
		var i, r = (i = e.getAttribute("data-response-field")) !== null && i !== void 0 ? i : "true";
		a["response-field"] = r === "true";
		var u = e.getAttribute("data-response-field-name");
		u && (a["response-field-name"] = u);
		var d = e.getAttribute("data-execution");
		d && (ht(d) ? a.execution = d : x('Unknown data-execution value: "'.concat(d, ", expected either: 'render' or 'execute'.")));
		var v = e.getAttribute("data-appearance");
		return v && (yt(v) ? a.appearance = v : x('Unknown data-appearance value: "'.concat(v, ", expected either: 'always', 'execute', or 'interaction-only'."))), a
	}

	function qr() {
		var e = !0;
		Nt(y, e), y.msgHandler && window.removeEventListener("message", y.msgHandler), hr(window.turnstile, y)
	}
	ge = !1, O = pr(), y.scriptWasLoadedAsync = (Ye = O == null ? void 0 : O.loadedAsync) !== null && Ye !== void 0 ? Ye : !1, y.scriptUrl = (Qe = O == null ? void 0 : O.src) !== null && Qe !== void 0 ? Qe : "undefined", O != null && O.params && (ye = O.params.get("compat"), (ye == null ? void 0 : ye.toLowerCase()) === "recaptcha" ? window.grecaptcha ? x("grecaptcha is already defined. The compatibility layer will not be enabled.") : (x("Compatibility layer enabled."), y.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Ut) : ye !== null && x('Unknown value for api.js?compat: "'.concat(ye, '", ignoring.')), O.params.forEach(function(e, t) {
		M(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || x('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), ge = O.params.get("_upgrade") === "true", z = O.params.get("onload"), z && !ge && setTimeout(function() {
		typeof window[z] == "function" ? window[z]() : (x("Unable to find onload callback '".concat(z, "' immediately after loading, expected 'function', got '").concat(F(window[z]), "'.")), setTimeout(function() {
			typeof window[z] == "function" ? window[z]() : x("Unable to find onload callback '".concat(z, "' after 1 second, expected 'function', got '").concat(F(window[z]), "'."))
		}, 1e3))
	}, 0)), Mt = "turnstile" in window, Mt && !ge ? x("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Mt && ge && (_r(window.turnstile, y), Ct(y), (O == null || (Ke = O.params) === null || Ke === void 0 ? void 0 : Ke.get("render")) !== "explicit" && setTimeout(Ft, 0)), window.turnstile = Ut, ge || ((O == null || ($e = O.params) === null || $e === void 0 ? void 0 : $e.get("render")) !== "explicit" && Dt.push(Ft), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(br, 0) : window.addEventListener("DOMContentLoaded", br))), wr = 24 * 60 * 60 * 1e3, window.setTimeout(qr, wr);
	var ge, O, Ye, Qe, ye, z, Mt, Ke, $e, wr;
})();