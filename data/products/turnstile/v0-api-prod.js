"use strict";
(function() {
	function Bt(e, t, a, o, c, l, g) {
		try {
			var y = e[l](g),
				f = y.value
		} catch (d) {
			a(d);
			return
		}
		y.done ? t(f) : Promise.resolve(f).then(o, c)
	}

	function Ht(e) {
		return function() {
			var t = this,
				a = arguments;
			return new Promise(function(o, c) {
				var l = e.apply(t, a);

				function g(f) {
					Bt(l, o, c, g, y, "next", f)
				}

				function y(f) {
					Bt(l, o, c, g, y, "throw", f)
				}
				g(void 0)
			})
		}
	}

	function V(e, t) {
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : V(e, t)
	}

	function De(e, t, a) {
		return t in e ? Object.defineProperty(e, t, {
			value: a,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = a, e
	}

	function Pe(e) {
		for (var t = 1; t < arguments.length; t++) {
			var a = arguments[t] != null ? arguments[t] : {},
				o = Object.keys(a);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(c) {
				return Object.getOwnPropertyDescriptor(a, c).enumerable
			}))), o.forEach(function(c) {
				De(e, c, a[c])
			})
		}
		return e
	}

	function Mr(e, t) {
		var a = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			t && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), a.push.apply(a, o)
		}
		return a
	}

	function ot(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Mr(Object(t)).forEach(function(a) {
			Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
		}), e
	}

	function Gt(e) {
		if (Array.isArray(e)) return e
	}

	function Xt(e, t) {
		var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (a != null) {
			var o = [],
				c = !0,
				l = !1,
				g, y;
			try {
				for (a = a.call(e); !(c = (g = a.next()).done) && (o.push(g.value), !(t && o.length === t)); c = !0);
			} catch (f) {
				l = !0, y = f
			} finally {
				try {
					!c && a.return != null && a.return()
				} finally {
					if (l) throw y
				}
			}
			return o
		}
	}

	function Yt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function ct(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
		return o
	}

	function Qt(e, t) {
		if (e) {
			if (typeof e == "string") return ct(e, t);
			var a = Object.prototype.toString.call(e).slice(8, -1);
			if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
			if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return ct(e, t)
		}
	}

	function Ce(e, t) {
		return Gt(e) || Xt(e, t) || Qt(e, t) || Yt()
	}

	function D(e) {
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
			next: y(0),
			throw: y(1),
			return: y(2)
		}, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
			return this
		}), g;

		function y(d) {
			return function(w) {
				return f([d, w])
			}
		}

		function f(d) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; g && (g = 0, d[0] && (a = 0)), a;) try {
				if (o = 1, c && (l = d[0] & 2 ? c.return : d[0] ? c.throw || ((l = c.return) && l.call(c), 0) : c.next) && !(l = l.call(c, d[1])).done) return l;
				switch (c = 0, l && (d = [d[0] & 2, l.value]), d[0]) {
					case 0:
					case 1:
						l = d;
						break;
					case 4:
						return a.label++, {
							value: d[1],
							done: !1
						};
					case 5:
						a.label++, c = d[1], d = [0];
						continue;
					case 7:
						d = a.ops.pop(), a.trys.pop();
						continue;
					default:
						if (l = a.trys, !(l = l.length > 0 && l[l.length - 1]) && (d[0] === 6 || d[0] === 2)) {
							a = 0;
							continue
						}
						if (d[0] === 3 && (!l || d[1] > l[0] && d[1] < l[3])) {
							a.label = d[1];
							break
						}
						if (d[0] === 6 && a.label < l[1]) {
							a.label = l[1], l = d;
							break
						}
						if (l && a.label < l[2]) {
							a.label = l[2], a.ops.push(d);
							break
						}
						l[2] && a.ops.pop(), a.trys.pop();
						continue
				}
				d = t.call(e, a)
			} catch (w) {
				d = [6, w], c = 0
			} finally {
				o = l = 0
			}
			if (d[0] & 5) throw d[1];
			return {
				value: d[0] ? d[1] : void 0,
				done: !0
			}
		}
	}
	var $t = 300,
		Jt = 10;
	var Kt = {
		code: 200500,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com (or challenges.fed.cloudflare.com) could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?",
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1
	};
	var Zt = 300020;
	var We = 300030;
	var Ue = 300031;

	function ut(e) {
		var t = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearanceLevel !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearanceLevel)), window.__cfDebugTurnstileOutcome && t.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome)), !(t.size === 0 || t.toString() === "")) return t.toString()
	}
	var je = "cf-chl-widget-",
		U = "cloudflare-challenge",
		er = ".cf-turnstile",
		tr = ".cf-challenge",
		rr = ".g-recaptcha",
		lt = "cf_challenge_response",
		st = "cf-turnstile-response",
		dt = "g-recaptcha-response",
		ar = 8e3,
		ft = "private-token",
		nr = 3,
		ir = 500,
		or = 500,
		Q = "";
	var B;
	(function(e) {
		e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible"
	})(B || (B = {}));
	var L;
	(function(e) {
		e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible"
	})(L || (L = {}));
	var qe;
	(function(e) {
		e.Auto = "auto", e.Light = "light", e.Dark = "dark"
	})(qe || (qe = {}));
	var me;
	(function(e) {
		e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain"
	})(me || (me = {}));
	var ge;
	(function(e) {
		e.Never = "never", e.Auto = "auto"
	})(ge || (ge = {}));
	var K;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(K || (K = {}));
	var oe;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(oe || (oe = {}));
	var $;
	(function(e) {
		e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only"
	})($ || ($ = {}));
	var he;
	(function(e) {
		e.Render = "render", e.Execute = "execute"
	})(he || (he = {}));
	var ce;
	(function(e) {
		e.Execute = "execute"
	})(ce || (ce = {}));
	var H;
	(function(e) {
		e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun"
	})(H || (H = {}));

	function F(e, t) {
		return e.indexOf(t) !== -1
	}
	var Nr = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Lr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		cr = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];

	function pt(e, t, a) {
		var o = "https://challenges.cloudflare.com",
			c, l = (c = a == null ? void 0 : a.origin) !== null && c !== void 0 ? c : o;
		if (t) {
			var g;
			return (g = e["base-url"]) !== null && g !== void 0 ? g : l
		}
		return l
	}

	function vt(e, t, a, o, c, l, g, y, f) {
		var d = pt(a, c, y),
			w = l ? "h/".concat(l, "/") : "",
			R = f ? "&".concat(f) : "",
			C = a["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(d, "/cdn-cgi/challenge-platform/").concat(w, "turnstile/f/ov2/av0/rch").concat(o, "/").concat(e, "/").concat(t, "/").concat(a.theme, "/").concat(C, "/").concat(g, "/").concat(a.size, "?lang=").concat(a.language).concat(R)
	}
	var mt = function(e) {
			var t, a, o = window.innerWidth < 400,
				c = e.state !== me.FailureFeedbackCode && (e.state === me.FailureFeedback || e.state === me.FailureHavingTroubles || !e.errorCode),
				l, g = F(Nr, (l = (t = e.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && l !== void 0 ? l : "nonexistent"),
				y, f = F(Lr, (y = (a = e.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && y !== void 0 ? y : "nonexistent");
			return o ? Fr({
				isModeratelyVerbose: f,
				isSmallerFeedback: c,
				isVerboseLanguage: g
			}) : c && g ? "630px" : c && f ? "620px" : c ? "600px" : g ? "690px" : "680px"
		},
		Fr = function(e) {
			var t = e.isVerboseLanguage,
				a = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return a && t ? "660px" : a && o ? "620px" : a ? "600px" : t ? "770px" : o ? "740px" : "730px"
		};

	function ze(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function ur(e, t) {
		if (!V(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function Z(e, t) {
		return Z = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, Z(e, t)
	}

	function lr(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && Z(e, t)
	}

	function Be() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function Oe(e, t, a) {
		return Be() ? Oe = Reflect.construct : Oe = function(c, l, g) {
			var y = [null];
			y.push.apply(y, l);
			var f = Function.bind.apply(c, y),
				d = new f;
			return g && Z(d, g.prototype), d
		}, Oe.apply(null, arguments)
	}

	function ue(e) {
		return ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
			return a.__proto__ || Object.getPrototypeOf(a)
		}, ue(e)
	}

	function sr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function He(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return He = function(o) {
			if (o === null || !sr(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(o)) return t.get(o);
				t.set(o, c)
			}

			function c() {
				return Oe(o, arguments, ue(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), Z(c, o)
		}, He(e)
	}

	function dr(e, t) {
		return t && (D(t) === "object" || typeof t == "function") ? t : ze(e)
	}

	function fr(e) {
		var t = Be();
		return function() {
			var o = ue(e),
				c;
			if (t) {
				var l = ue(this).constructor;
				c = Reflect.construct(o, arguments, l)
			} else c = o.apply(this, arguments);
			return dr(this, c)
		}
	}
	var pr = function(e) {
		"use strict";
		lr(a, e);
		var t = fr(a);

		function a(o, c) {
			ur(this, a);
			var l;
			return l = t.call(this, o), De(ze(l), "code", void 0), l.name = "TurnstileError", l.code = c, l
		}
		return a
	}(He(Error));

	function v(e, t) {
		var a = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new pr(a, t)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function Ge(e) {
		return e.startsWith(je) ? e.substring(je.length) : null
	}

	function J(e) {
		return "".concat(je).concat(e)
	}

	function gt() {
		var e = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/,
			t = document.currentScript;
		if (V(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var a = document.querySelectorAll("script"), o = 0, c; c = a[o]; o++)
			if (V(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function vr() {
		var e = gt();
		e || v("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			a;
		try {
			a = new URL(t)
		} catch (l) {
			v("Could not parse Turnstile script tag URL", 43777)
		}
		var o = {
			loadedAsync: !1,
			params: new URLSearchParams,
			src: t,
			url: a
		};
		(e.async || e.defer) && (o.loadedAsync = !0);
		var c = t.split("?");
		return c.length > 1 && (o.params = new URLSearchParams(c[1])), o
	}

	function j() {
		return Date.now()
	}
	var ht = function(e, t, a, o) {
			var c = pt(t.params, !1, o),
				l = "h/".concat("b", "/"),
				g, y, f = "".concat(c, "/cdn-cgi/challenge-platform/").concat(l, "feedback-reports/").concat(Ge(e), "/").concat(t.displayLanguage, "/").concat((y = t.params.theme) !== null && y !== void 0 ? y : t.theme, "/").concat(a);
			if (window.top !== window.self) {
				window.open(f, "_blank", "noopener,noreferrer");
				return
			}
			t.wrapper.parentNode || v("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var d = document.createElement("div");
			d.style.position = "fixed", d.style.zIndex = "2147483646", d.style.width = "100vw", d.style.height = "100vh", d.style.top = "0", d.style.left = "0", d.style.transformOrigin = "center center", d.style.overflowX = "hidden", d.style.overflowY = "auto", d.style.background = "rgba(0,0,0,0.4)";
			var w = document.createElement("div");
			w.style.display = "table-cell", w.style.verticalAlign = "middle", w.style.width = "100vw", w.style.height = "100vh";
			var R = document.createElement("div");
			R.className = "cf-turnstile-feedback", R.id = "cf-fr-id", R.style.width = "100vw", R.style.maxWidth = "450px", R.style.height = mt(t), R.style.position = "relative", R.style.zIndex = "2147483647", R.style.backgroundColor = "#ffffff", R.style.borderRadius = "5px", R.style.left = "0px", R.style.top = "0px", R.style.overflow = "hidden", R.style.margin = "0px auto";
			var C = document.createElement("iframe");
			C.id = "".concat(e, "-fr"), C.setAttribute("src", f), C.setAttribute("allow", "cross-origin-isolated; fullscreen"), C.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), C.setAttribute("scrolling", "no"), C.style.borderWidth = "0px", C.style.width = "100%", C.style.height = "100%", C.style.overflow = "hidden";
			var T = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			T.setAttribute("tabindex", "0"), T.setAttribute("role", "img"), T.setAttribute("aria-label", "Close button icon"), T.style.position = "absolute", T.style.width = "26px", T.style.height = "26px", T.style.zIndex = "2147483647", T.style.cursor = "pointer", t.displayRtl ? T.style.left = "2px" : T.style.right = "6px", T.style.top = "5px", T.setAttribute("width", "20"), T.setAttribute("height", "20"), T.addEventListener("click", function() {
				var N;
				(N = d.parentNode) === null || N === void 0 || N.removeChild(d)
			}), T.addEventListener("keydown", function(N) {
				if (N.key === "Enter" || N.key === " ") {
					var _;
					(_ = d.parentNode) === null || _ === void 0 || _.removeChild(d)
				}
			});
			var k = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			k.setAttribute("ry", "12"), k.setAttribute("rx", "12"), k.setAttribute("cy", "12"), k.setAttribute("cx", "12"), k.setAttribute("fill", "none"), k.setAttribute("stroke-width", "0"), T.appendChild(k);
			var M = document.createElementNS("http://www.w3.org/2000/svg", "line");
			M.setAttribute("stroke-width", "1"), M.setAttribute("stroke", "#999"), M.setAttribute("fill", "none"), M.setAttribute("x1", "6"), M.setAttribute("x2", "18"), M.setAttribute("y1", "18"), M.setAttribute("y2", "5"), T.appendChild(M);
			var S = document.createElementNS("http://www.w3.org/2000/svg", "line");
			S.setAttribute("stroke-width", "1"), S.setAttribute("stroke", "#999"), S.setAttribute("fill", "none"), S.setAttribute("x1", "6"), S.setAttribute("x2", "18"), S.setAttribute("y1", "5"), S.setAttribute("y2", "18"), T.appendChild(S), R.appendChild(C), R.appendChild(T), w.appendChild(R), d.appendChild(w), d.addEventListener("click", function() {
				var N;
				(N = d.parentNode) === null || N === void 0 || N.removeChild(d)
			}), t.wrapper.parentNode.appendChild(d), window.addEventListener("resize", function() {
				R.style.height = mt(t)
			})
		},
		mr = function(e) {
			var t, a, o;
			(o = document.getElementById(e)) === null || o === void 0 || (a = o.parentElement) === null || a === void 0 || (t = a.parentElement) === null || t === void 0 || t.remove()
		};
	var Xe;
	(function(e) {
		e.Failure = "failure", e.Verifying = "verifying", e.Overruning = "overrunning", e.Custom = "custom"
	})(Xe || (Xe = {}));
	var yt = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > t ? e.substring(0, t) : e
	};

	function gr(e) {
		if (!e) return "-";
		var t = function(a, o) {
			if (!a || a.tagName === "BODY") return o;
			for (var c = 1, l = a.previousElementSibling; l;) l.tagName === a.tagName && c++, l = l.previousElementSibling;
			var g = yt(a.tagName.toLowerCase()),
				y = "".concat(g, "[").concat(c, "]");
			return t(a.parentNode, "/".concat(y).concat(o))
		};
		return t(e, "")
	}

	function hr(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var Dr = {
		button: "b",
		checkbox: "c",
		email: "e",
		hidden: "h",
		number: "n",
		password: "p",
		radio: "r",
		select: "sl",
		submit: "s",
		text: "t",
		textarea: "ta"
	};

	function yr(e) {
		if (!e) return "";
		var t = e.closest("form");
		if (!t) return "nf";
		var a = Array.from(t.querySelectorAll("input, select, textarea, button")),
			o = a.slice(0, 20).map(function(l) {
				return Dr[l.type] || "-"
			}).join(""),
			c = ["m:".concat(t.method || ""), "f:".concat(a.length), o].join("|");
		return c
	}

	function _r(e, t, a) {
		for (var o = "", c = 0, l = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(R) {
					return c > t || o.length > a ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), g;
			(g = l.nextNode()) !== null && o.length < a;) {
			if (g.nodeType === Node.ELEMENT_NODE) {
				var y = g;
				o += "".concat(yt(y.tagName.toLowerCase()));
				for (var f = 0; f < y.attributes.length; f++) {
					var d = y.attributes[f];
					o += "_".concat(yt(d.name, 2))
				}
				o += ">"
			} else g.nodeType === Node.TEXT_NODE && (o += "-t");
			var w = g.parentNode;
			for (c = 0; w !== e && w !== null;) c++, w = w.parentNode
		}
		return o.substring(0, a)
	}

	function br(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : D(e)));
		for (var t = 5381, a = 0; a < e.length; a++) {
			var o = e.charCodeAt(a);
			t = t * 33 ^ o
		}
		return t >>> 0
	}

	function xr(e, t) {
		var a;
		t.upgradeAttempts++;
		var o = gt();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = t;
			var l = new URL(o.src),
				g = document.createElement("script");
			l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), g.async = !0, c && (g.nonce = c), g.setAttribute("crossorigin", "anonymous"), g.src = l.toString(), o == null || (a = o.parentNode) === null || a === void 0 || a.replaceChild(g, o)
		}
	}

	function wr(e, t) {
		var a = e._pState;
		return a ? (t.isReady = a.isReady, t.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, t.lastWidgetIdx = a.lastWidgetIdx, t.scriptWasLoadedAsync = a.scriptWasLoadedAsync, t.upgradeAttempts = a.upgradeAttempts, t.upgradeCompletedCount = a.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = j(), t.watchCatInterval = null, t.watchCatSeq = a.watchCatSeq, t.widgetMap = a.widgetMap, !0) : !1
	}

	function _t(e) {
		return F(["auto", "dark", "light"], e)
	}

	function bt(e) {
		return F(["auto", "never"], e)
	}

	function xt(e) {
		return e > 0 && e < 9e5
	}

	function wt(e) {
		return e > 0 && e < 36e4
	}
	var Pr = /^[0-9A-Za-z_-]{3,100}$/;

	function Er(e) {
		return Pr.test(e)
	}
	var Vr = /^[a-z0-9_-]{0,32}$/i;

	function Et(e) {
		return e === void 0 ? !0 : typeof e == "string" && Vr.test(e)
	}
	var Wr = /^[a-z0-9_\-=]{0,255}$/i;

	function Tt(e) {
		return e === void 0 ? !0 : typeof e == "string" && Wr.test(e)
	}

	function Rt(e) {
		return F([L.Normal, L.Compact, L.Invisible, L.Flexible], e)
	}

	function St(e) {
		return F(["auto", "manual", "never"], e)
	}

	function At(e) {
		return F(["auto", "manual", "never"], e)
	}
	var Ur = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function It(e) {
		return e === "auto" || Ur.test(e)
	}

	function Ct(e) {
		return F(["always", "execute", "interaction-only"], e)
	}

	function Tr(e) {
		return F(["true", "false"], e)
	}

	function Ot(e) {
		return F(["render", "execute"], e)
	}
	var jr = 900,
		qr = 45,
		zr = 50;

	function Br(e) {
		e.watchCatSeq++;
		var t = !0,
			a = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), l; !(t = (l = c.next()).done); t = !0) {
				var g = Ce(l.value, 2),
					y = g[0],
					f = g[1],
					d;
				f.watchcat.seq = e.watchCatSeq, f.watchcat.lastAckedSeq === 0 && (f.watchcat.lastAckedSeq = e.watchCatSeq);
				var w = J(y);
				if (!w || !f.shadow) {
					f.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(w, ", consider using turnstile.remove() to clean up a widget.")), f.watchcat.missingWidgetWarning = !0);
					continue
				}
				var R = f.shadow.querySelector("#".concat(w));
				if (!R) {
					f.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(w, ", consider using turnstile.remove() to clean up a widget.")), f.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(f.isComplete || f.isFailed || f.isResetting)) {
					var C = f.watchcat.seq - 1 - qr,
						T = f.watchcat.lastAckedSeq < C,
						k = f.watchcat.seq - 1 - zr,
						M = f.isOverrunning && f.watchcat.overrunBeginSeq !== 0 && f.watchcat.overrunBeginSeq < k;
					if ((f.isExecuting || !f.isInitialized || f.isInitialized && !f.isStale && !f.isExecuted) && f.watchcat.lastAckedSeq !== 0 && T || M) {
						var S;
						f.watchcat.lastAckedSeq = 0, f.watchcat.seq = 0, f.isExecuting = !1;
						var N = function(r, u) {
							console.log("Turnstile Widget seem to have ".concat(r, ": "), u)
						};
						N(T ? "hung" : "crashed", y);
						var _ = T ? We : Ue,
							n;
						if ((S = e.msgHandler) === null || S === void 0 || S.call(e, {
								data: {
									code: _,
									event: "fail",
									rcV: (n = f.nextRcV) !== null && n !== void 0 ? n : Q,
									source: U,
									widgetId: y
								}
							}), 0) var i;
						continue
					}(d = R.contentWindow) === null || d === void 0 || d.postMessage({
						event: "meow",
						seq: e.watchCatSeq,
						source: U,
						widgetId: y
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

	function kt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Br(e)
		}, jr))
	}

	function Mt(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && clearInterval(e.watchCatInterval)
	}
	var m = {
		apiVersion: 1,
		isReady: !1,
		isRecaptchaCompatibilityMode: !1,
		lastWidgetIdx: 0,
		scriptUrl: "undefined",
		scriptUrlParsed: void 0,
		scriptWasLoadedAsync: !1,
		turnstileLoadInitTimeTsMs: j(),
		upgradeAttempts: 0,
		upgradeCompletedCount: 0,
		watchCatInterval: null,
		watchCatSeq: 0,
		widgetMap: new Map
	};

	function Nt(e) {
		Ir(e, "")
	}

	function Pt() {
		var e = [er, tr];
		m.isRecaptchaCompatibilityMode && e.push(rr), document.querySelectorAll(e.join(", ")).forEach(function(t) {
			return Vt.render(t)
		})
	}
	var Wt = [];

	function Rr() {
		m.isReady = !0;
		var e = !0,
			t = !1,
			a = void 0;
		try {
			for (var o = Wt[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
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

	function Hr(e) {
		var t = m.widgetMap.get(e);
		if (!(t === void 0 || t.hasResponseParamEl)) {
			t.hasResponseParamEl = !0;
			var a, o = (a = t.params["response-field"]) !== null && a !== void 0 ? a : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var l;
				c.name = (l = t.params["response-field-name"]) !== null && l !== void 0 ? l : st, c.id = "".concat(e, "_response"), t.wrapper.appendChild(c);
				var g;
				if (typeof t.params["response-field-name"] != "string" && Cr((g = t.params.sitekey) !== null && g !== void 0 ? g : "")) {
					var y = document.createElement("input");
					y.type = "hidden", y.name = lt, y.id = "".concat(e, "_legacy_response"), t.wrapper.appendChild(y)
				}
			}
			if (m.isRecaptchaCompatibilityMode) {
				var f = document.createElement("input");
				f.type = "hidden", f.name = dt, f.id = "".concat(e, "_g_response"), t.wrapper.appendChild(f)
			}
		}
	}

	function Ir(e, t) {
		Hr(e);
		var a = document.getElementById("".concat(e, "_response"));
		a !== null && V(a, HTMLInputElement) && (a.value = t);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && V(o, HTMLInputElement) && (o.value = t), m.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && V(c, HTMLInputElement) && (c.value = t)
		}
	}

	function Lt(e, t) {
		var a = t.params,
			o = a.size,
			c = o === void 0 ? "normal" : o,
			l = t.mode;
		switch (l) {
			case B.NonInteractive:
			case B.Managed:
				switch (c) {
					case L.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case L.Invisible:
						v('Invalid value for parameter "size", expected "'.concat(L.Compact, '", "').concat(L.Flexible, '", or "').concat(L.Normal, '", got "').concat(c, '"'), 2817);
					case L.Normal:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case L.Flexible:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break;
					default:
						break
				}
				break;
			case B.Invisible:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				v('Invalid value for parameter "mode", expected "'.concat(B.NonInteractive, '", "').concat(B.Managed, '" or "').concat(B.Invisible, '", got "').concat(l, '"'), 2818)
		}
	}

	function Sr(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Gr(e, t) {
		var a = t.get("turnstile_iframe_alt");
		a && (e.title = a)
	}

	function Xr(e) {
		return e.origin ? F(cr, e.origin) : !0
	}

	function Cr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Ft() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Vt = function() {
		var e = function(n, i, r, u) {
				return k.apply(this, arguments)
			},
			t = function(n, i, r) {
				if (n.params.retry === ge.Auto || r) {
					n.isExecuted && (n.msgQueue.push(ce.Execute), n.isExecuted = !0, n.isExecuting = !0);
					var u, s = r ? 0 : 1e3 * 2 + ((u = n.params["retry-interval"]) !== null && u !== void 0 ? u : 0);
					n.retryTimeout = window.setTimeout(function() {
						var h = r ? H.CrashedRetry : H.FailureRetry;
						w(h, i)
					}, s)
				}
			},
			a = function(n, i, r) {
				var u;
				n.response === void 0 && v("[Internal Error] Widget was completed but no response was given", 1362), n.isExecuting = !1, n.isComplete = !0, Ir(i, n.response), (u = n.cbSuccess) === null || u === void 0 || u.call(n, n.response, r)
			},
			o = function(n) {
				if (!n) return [];
				for (var i = n.attributes, r = i.length, u = new Array(r), s = 0; s < r; s++) u[s] = i[s].name;
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
				} while (m.widgetMap.has(r));
				return r
			},
			g = function(n) {
				var i = !0,
					r = !1,
					u = void 0;
				try {
					for (var s = m.widgetMap[Symbol.iterator](), h; !(i = (h = s.next()).done); i = !0) {
						var x = Ce(h.value, 2),
							E = x[0],
							I = x[1];
						if (I.wrapper.parentElement === n) return E
					}
				} catch (O) {
					r = !0, u = O
				} finally {
					try {
						!i && s.return != null && s.return()
					} finally {
						if (r) throw u
					}
				}
				return null
			},
			y = function(n, i, r) {
				for (; n.msgQueue.length > 0;) {
					var u, s = n.msgQueue.pop();
					(u = r.contentWindow) === null || u === void 0 || u.postMessage({
						event: s,
						source: U,
						widgetId: i
					}, "*")
				}
			},
			f = function(n, i) {
				if (i) {
					var r = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						u = [],
						s = !0,
						h = !1,
						x = void 0;
					try {
						for (var E = r[Symbol.iterator](), I; !(s = (I = E.next()).done); s = !0) {
							var O = I.value;
							i[O] && i[O] !== n.params[O] && u.push(O)
						}
					} catch (P) {
						h = !0, x = P
					} finally {
						try {
							!s && E.return != null && E.return()
						} finally {
							if (h) throw x
						}
					}
					u.length > 0 && v("The parameters ".concat(r.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(u.join(",")), 3618), i.action && (Et(i.action) || v('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), n.action = i.action), i.cData && (Tt(i.cData) || v('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), n.cData = i.cData), i["after-interactive-callback"] && (n.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (n.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (n.cbSuccess = i.callback), i["expired-callback"] && (n.cbExpired = i["expired-callback"]), i["timeout-callback"] && (n.cbTimeout = i["timeout-callback"]), i["error-callback"] && (n.cbError = i["error-callback"]), i["unsupported-callback"] && (n.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (n.chlPageData = i.chlPageData)
				}
			},
			d = function(n) {
				w(H.Api, n)
			},
			w = function(n, i) {
				var r = S(i);
				r || v("Nothing to reset found for provided container", 3329);
				var u = m.widgetMap.get(r);
				if (u) {
					var s;
					u.isResetting = !0, u.response = void 0, u.mode = void 0, u.msgQueue = [], u.isComplete = !1, u.isExecuting = !1, u.isExpired = !1, u.isFailed = !1, u.isInitialized = !1, u.isStale = !1, u.isOverrunning = !1, u.watchcat.overrunBeginSeq = 0, u.watchcat.lastAckedSeq = 0, u.watchcat.seq = 0, u.params.execution === he.Render && (u.msgQueue.push(ce.Execute), u.isExecuted = !0, u.isExecuting = !0);
					var h = J(r),
						x = u.shadow.querySelector("#".concat(h));
					(!h || !x) && v("Widget ".concat(r, " to reset was not found."), 3330), u.params.appearance === $.InteractionOnly && Sr(x), u.params.sitekey === null && v("Unexpected Error: Sitekey is null", 3347);
					var E = x.cloneNode(),
						I;
					E.src = vt(r, u.params.sitekey, u.params, (I = u.rcV) !== null && I !== void 0 ? I : Q, !1, "b", n, m.scriptUrlParsed, ut(u)), (s = x.parentNode) === null || s === void 0 || s.replaceChild(E, x), Nt(h), u.retryTimeout && window.clearTimeout(u.retryTimeout)
				} else v("Widget ".concat(r, " to reset was not found."), 3331)
			},
			R = function(n) {
				var i, r = S(n);
				if (!r || !m.widgetMap.has(r)) {
					b("Nothing to remove found for the provided container.");
					return
				}
				var u = J(r),
					s = ["input#".concat(u, "_response"), "input#".concat(u, "_legacy_response"), "input#".concat(u, "_g_response")];
				document.querySelectorAll(s.join(", ")).forEach(function(E) {
					return E.remove()
				});
				var h = m.widgetMap.get(r);
				h == null || h.shadow.querySelectorAll(s.join(", ")).forEach(function(E) {
					return E.remove()
				}), h == null || h.wrapper.remove();
				var x = (i = m.widgetMap.get(r)) === null || i === void 0 ? void 0 : i.retryTimeout;
				x && window.clearTimeout(x), m.widgetMap.delete(r), Mt(m)
			},
			C = function(n, i) {
				var r, u, s = j(),
					h;
				if (typeof n == "string") try {
					var x = document.querySelector(n);
					x || v('Unable to find a container for "'.concat(n, '"'), 3585), h = x
				} catch (zt) {
					v('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(n, '"'), 3586)
				} else V(n, HTMLElement) ? h = n : v('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var E = !0,
					I = !1,
					O = void 0;
				try {
					for (var P = m.widgetMap.values()[Symbol.iterator](), G; !(E = (G = P.next()).done); E = !0) {
						var ee = G.value;
						if (h.contains(ee.wrapper)) {
							b("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (zt) {
					I = !0, O = zt
				} finally {
					try {
						!E && P.return != null && P.return()
					} finally {
						if (I) throw O
					}
				}
				var W = Ft();
				if (!W) return v("Turnstile cannot determine its page location", 3607);
				if (W.startsWith("file:")) return v("Turnstile cannot run in a file:// url", 3608);
				var le = Yr(h);
				if (le) {
					var p = Object.assign(le, i),
						te = p.action,
						se = p.cData,
						be = p.chlPageData,
						q = p.sitekey,
						de;
					p.theme = (de = p.theme) !== null && de !== void 0 ? de : qe.Auto;
					var re;
					p.retry = (re = p.retry) !== null && re !== void 0 ? re : ge.Auto;
					var xe;
					p.execution = (xe = p.execution) !== null && xe !== void 0 ? xe : he.Render;
					var ae;
					p.appearance = (ae = p.appearance) !== null && ae !== void 0 ? ae : $.Always;
					var we;
					p["retry-interval"] = Number((we = p["retry-interval"]) !== null && we !== void 0 ? we : ar);
					var fe;
					p["expiry-interval"] = Number((fe = p["expiry-interval"]) !== null && fe !== void 0 ? fe : ($t - Jt) * 1e3);
					var ne;
					p.size = (ne = p.size) !== null && ne !== void 0 ? ne : L.Normal;
					var Ee = p.callback,
						ke = p["expired-callback"],
						Te = p["timeout-callback"],
						Re = p["after-interactive-callback"],
						Se = p["before-interactive-callback"],
						ie = p["error-callback"],
						Ke = p["unsupported-callback"];
					typeof q != "string" && v('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof q == "undefined" ? "undefined" : D(q), '"'), 3588), Er(q) || v('Invalid input for parameter "sitekey", got "'.concat(q, '"'), 3589), Rt(p.size) || v('Invalid type for parameter "size", expected normal|compact, got "'.concat(p.size, '" ').concat(D(p.size)), 3590), _t(p.theme) || v('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(p.theme, '" ').concat(D(p.theme)), 3591), bt(p.retry) || v('Invalid type for parameter "retry", expected never|auto, got "'.concat(p.retry, '" ').concat(D(p.retry)), 3592), p.language || (p.language = "auto"), It(p.language) || (b('Invalid language value: "'.concat(p.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), p.language = "auto"), Ct(p.appearance) || v('Unknown appearance value: "'.concat(p.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), Ot(p.execution) || v('Unknown execution value: "'.concat(p.execution, ", expected either: 'render' or 'execute'."), 3601), xt(p["retry-interval"]) || v('Invalid retry-interval value: "'.concat(p["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), wt(p["expiry-interval"]) || v('Invalid expiry-interval value: "'.concat(p["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var Ae, Y = (Ae = p["refresh-expired"]) !== null && Ae !== void 0 ? Ae : K.Auto;
					St(Y) ? p["refresh-expired"] = Y : v('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(Y, '" ').concat(typeof Y == "undefined" ? "undefined" : D(Y)), 3603);
					var Ze, Me = (Ze = p["refresh-timeout"]) !== null && Ze !== void 0 ? Ze : oe.Auto;
					At(Y) ? p["refresh-timeout"] = Me : v('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(Me, '" ').concat(typeof Me == "undefined" ? "undefined" : D(Me)), 3603);
					var z = document.createElement("iframe"),
						pe = document.createElement("div"),
						Ut = pe.attachShadow({
							mode: "closed"
						});
					Et(te) || v('Invalid input for optional parameter "action", got "'.concat(te, '"'), 3604), Tt(se) || v('Invalid input for optional parameter "cData", got "'.concat(se, '"'), 3605);
					var Ie = l(),
						ve = J(Ie);
					if (!(!Ie || !ve)) {
						var jt = [],
							et = p.execution === he.Render;
						et && jt.push(ce.Execute), m.lastWidgetIdx++;
						var Or = {};
						m.widgetMap.set(Ie, ot(Pe({
							action: te,
							cbAfterInteractive: Re,
							cbBeforeInteractive: Se,
							cbError: ie,
							cbExpired: ke,
							cbSuccess: Ee,
							cbTimeout: Te,
							cbUnsupported: Ke,
							cData: se,
							chlPageData: be,
							hasResponseParamEl: !1,
							idx: m.lastWidgetIdx,
							isComplete: !1,
							isExecuted: et,
							isExecuting: et,
							isExpired: !1,
							isFailed: !1,
							isInitialized: !1,
							isResetting: !1,
							isStale: !1,
							msgQueue: jt,
							params: p,
							rcV: Q,
							watchcat: {
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0,
								seq: 0
							}
						}, Or), {
							isOverrunning: !1,
							shadow: Ut,
							widgetInitStartTimeTsMs: 0,
							widgetParamsStartTimeTsMs: 0,
							widgetRenderEndTimeTsMs: 0,
							widgetRenderStartTimeTsMs: s,
							wrapper: pe
						})), kt(m);
						var tt = m.widgetMap.get(Ie);
						tt || v("Turnstile Initialization Error ", 3606), z.style.display = "none", z.style.border = "none", z.style.overflow = "hidden", z.setAttribute("src", vt(Ie, q, p, Q, !1, "b", H.New, m.scriptUrlParsed, ut(tt))), z.onerror = function() {
							if (ie) {
								ie == null || ie(String(Kt.code));
								return
							}
							v("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var qt = ["cross-origin-isolated", "fullscreen", "autoplay"],
							rt;
						F((rt = (u = document.featurePolicy) === null || u === void 0 || (r = u.features) === null || r === void 0 ? void 0 : r.call(u)) !== null && rt !== void 0 ? rt : [], ft) && qt.push(ft), z.setAttribute("allow", qt.join("; ")), z.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), z.id = ve;
						var at;
						z.tabIndex = (at = p.tabindex) !== null && at !== void 0 ? at : 0, z.title = "Widget containing a Cloudflare security challenge", Ut.appendChild(z);
						var nt, kr = (nt = p["response-field"]) !== null && nt !== void 0 ? nt : !0;
						if (kr) {
							var Ne = document.createElement("input");
							Ne.type = "hidden";
							var it;
							if (Ne.name = (it = p["response-field-name"]) !== null && it !== void 0 ? it : st, Ne.id = "".concat(ve, "_response"), pe.appendChild(Ne), typeof p["response-field-name"] != "string" && Cr(q)) {
								var Le = document.createElement("input");
								Le.type = "hidden", Le.name = lt, Le.id = "".concat(ve, "_legacy_response"), pe.appendChild(Le)
							}
						}
						if (m.isRecaptchaCompatibilityMode) {
							var Fe = document.createElement("input");
							Fe.type = "hidden", Fe.name = dt, Fe.id = "".concat(ve, "_g_response"), pe.appendChild(Fe)
						}
						return h.appendChild(pe), tt.widgetRenderEndTimeTsMs = j(), ve
					}
				}
			},
			T = function() {
				var n, i = -1,
					r = !0,
					u = !1,
					s = void 0;
				try {
					for (var h = m.widgetMap[Symbol.iterator](), x; !(r = (x = h.next()).done); r = !0) {
						var E = Ce(x.value, 2),
							I = E[0],
							O = E[1];
						i < O.idx && (n = I, i = O.idx)
					}
				} catch (P) {
					u = !0, s = P
				} finally {
					try {
						!r && h.return != null && h.return()
					} finally {
						if (u) throw s
					}
				}
				return i === -1 && v("Could not find widget", 43778), n
			};

		function k() {
			return k = Ht(function(_, n, i, r) {
				var u, s, h, x, E, I, O, P, G, ee;
				return Ve(this, function(W) {
					switch (W.label) {
						case 0:
							if (u = _.params.sitekey, s = Ft(), !s) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(_, n, !1), [2];
							h = "h/".concat("b", "/"), x = new URL(s), E = "https", I = "", P = "".concat(E, "://").concat(x.host, "/cdn-cgi/challenge-platform/").concat(h, "rc/").concat(r).concat(I), W.label = 1;
						case 1:
							return W.trys.push([1, 3, , 4]), [4, fetch(P, {
								body: JSON.stringify({
									secondaryToken: i,
									sitekey: u
								}),
								headers: {
									"Content-Type": "application/json"
								},
								method: "POST",
								redirect: "manual"
							})];
						case 2:
							return G = W.sent(), G.status !== 200 ? (b("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), a(_, n, !1)) : a(_, n, !0), [3, 4];
						case 3:
							return ee = W.sent(), b("Error contacting Turnstile, aborting clearance remdeption."), a(_, n, !1), [3, 4];
						case 4:
							return [2]
					}
				})
			}), k.apply(this, arguments)
		}
		var M = function(_) {
			var n = _.data;
			if (n.source === U) {
				if (!Xr(_)) {
					b("Ignored message from wrong origin: ".concat(_.origin, "."));
					return
				}
				if (!(!n.widgetId || !m.widgetMap.has(n.widgetId))) {
					var i = J(n.widgetId),
						r = m.widgetMap.get(n.widgetId);
					if (!(!i || !r)) switch (n.event) {
						case "init": {
							var u;
							r.widgetInitStartTimeTsMs = j();
							var s = r.shadow.getElementById(i);
							s || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), r.mode = n.mode, r.nextRcV = n.nextRcV, r.mode === B.Invisible && r.params["refresh-expired"] === K.Manual && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat(K.Auto, "' or '").concat(K.Never, ".'")), r.mode !== B.Managed && r.params["refresh-timeout"] !== oe.Auto && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), r.params.appearance === $.Always || r.isExecuting && r.params.appearance === $.Execute ? Lt(s, r) : Sr(s), s.style.display = "";
							var h = r.shadow.querySelector("#".concat(i));
							h || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (u = h.contentWindow) === null || u === void 0 || u.postMessage({
								event: "init",
								source: U,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "translationInit": {
							var x = r.shadow.getElementById(i);
							x || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var E = new Map;
							r.displayLanguage = n.displayLanguage, Object.keys(n.translationData).forEach(function(Y) {
								E.set(Y, n.translationData[Y])
							}), Gr(x, E);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(r.params.language, " is not supported, falling back to: ").concat(n.fallback, ".")), r.displayLanguage = n.fallback;
							break
						}
						case "reject": {
							var I = r.shadow.getElementById(i);
							if (r.isExecuting = !1, I || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), n.reason === "unsupported_browser") {
								var O;
								(O = r.cbUnsupported) === null || O === void 0 || O.call(r)
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
							c(r, Q, n.widgetId), r.response = n.token, n.sToken ? e(r, i, n.sToken, n.chlId) : a(r, i, !1);
							break
						}
						case "fail": {
							n.rcV && c(r, n.rcV, n.widgetId), n.cfChlOut && (r.cfChlOut = n.cfChlOut), n.cfChlOutS && (r.cfChlOutS = n.cfChlOutS), n.code && (r.errorCode = n.code), r.isExecuting = !1, r.isFailed = !0, r.isInitialized = !0, n.frMd && (r.frMd = n.frMd), Nt(i);
							var P = r.cbError,
								G = n.code === We || n.code === Ue;
							if (G) {
								var ee, W = r.shadow.querySelector("#".concat(i));
								W == null || (ee = W.contentWindow) === null || ee === void 0 || ee.postMessage({
									event: "forceFail",
									source: U,
									widgetId: n.widgetId
								}, "*")
							}
							if (P) {
								var le;
								P(String((le = n.code) !== null && le !== void 0 ? le : Zt)) ? r.params.retry === ge.Auto && !r.isResetting && t(r, i, G) : (n.code && b("Error: ".concat(n.code, ".")), t(r, i, G))
							} else n.code ? (t(r, i, G), v("Error: ".concat(n.code), 3076)) : t(r, i, !1);
							break
						}
						case "feedbackInit": {
							var p = r.wrapper.querySelector("#".concat(i, "-fr"));
							if (p) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							ht(i, r, n.feedbackOrigin, m.scriptUrlParsed);
							break
						}
						case "requestFeedbackData": {
							var te, se = r.shadow.querySelector("#".concat(i));
							se || v("Received state for an unknown widget: #".concat(i, " / ").concat(n.widgetId), 3078), (te = se.contentWindow) === null || te === void 0 || te.postMessage({
								event: "requestTurnstileResults",
								source: U,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "turnstileResults": {
							var be, q, de = (be = r.wrapper.parentNode) === null || be === void 0 ? void 0 : be.querySelector("#".concat(i, "-fr"));
							de || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (q = de.contentWindow) === null || q === void 0 || q.postMessage({
								cfChlOut: r.cfChlOut,
								cfChlOutS: r.cfChlOutS,
								errorCode: r.errorCode,
								event: "feedbackData",
								frMd: r.frMd || n.frMd,
								mode: n.mode,
								rayId: n.rayId,
								rcV: n.rcV,
								sitekey: n.sitekey,
								source: U,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var re, xe = (re = r.wrapper.parentNode) === null || re === void 0 ? void 0 : re.querySelector("#".concat(i, "-fr"));
							xe || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), mr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ae, we = n.token;
							r.isExpired = !0, (ae = r.cbExpired) === null || ae === void 0 || ae.call(r, we), r.params["refresh-expired"] === K.Auto && !r.isResetting && w(H.AutoExpire, i);
							break
						}
						case "interactiveTimeout": {
							c(r, Q, n.widgetId), Nt(i);
							var fe = r.cbTimeout;
							if (fe ? fe() : r.params["refresh-timeout"] === oe.Never && !r.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), r.params["refresh-timeout"] === oe.Auto && !r.isResetting) {
								var ne = r.cbAfterInteractive;
								ne == null || ne(), w(H.AutoTimeout, i)
							}
							break
						}
						case "refreshRequest": {
							c(r, Q, n.widgetId), w(H.ManualRefresh, i);
							break
						}
						case "reloadRequest": {
							c(r, n.nextRcV, n.widgetId), w(n.trigger, i);
							break
						}
						case "interactiveBegin": {
							var Ee, ke = r.shadow.getElementById(i);
							ke || v("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (Ee = r.cbBeforeInteractive) === null || Ee === void 0 || Ee.call(r), r.params.appearance === $.InteractionOnly && Lt(ke, r);
							break
						}
						case "interactiveEnd": {
							var Te;
							(Te = r.cbAfterInteractive) === null || Te === void 0 || Te.call(r);
							break
						}
						case "widgetStale": {
							r.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var Re;
							r.widgetParamsStartTimeTsMs = j();
							var Se = r.shadow.querySelector("#".concat(i));
							Se || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), r.isResetting = !1;
							var ie = {},
								Ke = j(),
								Ae = {
									"ht.atrs": o(document.body.parentNode),
									pi: {
										ffp: yr(r.wrapper),
										ii: window.self !== window.top,
										lH: window.location.href,
										mL: document.getElementsByTagName("meta").length,
										pfp: _r(document, nr, ir),
										sL: document.scripts.length,
										sR: r.wrapper.shadowRoot === null,
										ssL: document.styleSheets.length,
										t: "".concat(document.title.length, "|").concat(br(document.title)),
										tL: document.getElementsByTagName("*").length,
										wp: hr(r.wrapper),
										xp: gr(r.wrapper).substring(0, or)
									},
									"w.iW": window.innerWidth
								};
							(Re = Se.contentWindow) === null || Re === void 0 || Re.postMessage(Pe({
								action: r.action,
								appearance: r.params.appearance,
								au: m.scriptUrl,
								cData: r.cData,
								ch: "93954b626b88",
								chlPageData: r.chlPageData,
								event: "extraParams",
								execution: r.params.execution,
								"expiry-interval": r.params["expiry-interval"],
								language: r.params.language,
								rcV: r.rcV,
								"refresh-expired": r.params["refresh-expired"],
								"refresh-timeout": r.params["refresh-timeout"],
								retry: r.params.retry,
								"retry-interval": r.params["retry-interval"],
								source: U,
								timeExtraParamsMs: j() - r.widgetRenderStartTimeTsMs,
								timeInitMs: r.widgetInitStartTimeTsMs - r.widgetRenderEndTimeTsMs,
								timeLoadInitMs: j() - m.turnstileLoadInitTimeTsMs,
								timeParamsMs: r.widgetParamsStartTimeTsMs - r.widgetInitStartTimeTsMs,
								timeRenderMs: r.widgetRenderEndTimeTsMs - r.widgetRenderStartTimeTsMs,
								timeTiefMs: j() - Ke,
								upgradeAttempts: m.upgradeAttempts,
								upgradeCompletedCount: m.upgradeCompletedCount,
								url: Ft(),
								widgetId: n.widgetId,
								wPr: Ae
							}, ie), "*"), y(r, n.widgetId, Se), r.isInitialized = !0;
							break
						}
						default:
							break
					}
				}
			}
		};
		m.msgHandler = M, window.addEventListener("message", M);

		function S(_) {
			if (typeof _ == "string") {
				var n = Ge(_);
				if (n && m.widgetMap.has(n)) return n;
				if (m.widgetMap.has(_)) return _;
				try {
					var i = document.querySelector(_);
					return i ? S(i) : null
				} catch (r) {
					return null
				}
			}
			return V(_, Element) ? g(_) : _ || m.widgetMap.size === 0 ? null : m.widgetMap.keys().next().value
		}
		var N = {};
		return ot(Pe({}, N), {
			_private: {
				showFeedback: function(n) {
					var i = S(n);
					if (i) {
						var r = J(i);
						if (r) {
							var u = m.widgetMap.get(i);
							u && ht(r, u, Xe.Custom, m.scriptUrlParsed)
						}
					}
				}
			},
			execute: function(n, i) {
				var r = S(n);
				if (!r) {
					i === void 0 && v("Please provide 2 parameters to execute: container and parameters", 43521);
					var u = C(n, i);
					u || v("Failed to render widget", 43522), r = u
				}
				var s = m.widgetMap.get(r);
				if (s) {
					f(s, i);
					var h = J(r);
					if (s.isExecuting) {
						b("Call to execute() on a widget that is already executing (".concat(h, "), consider using reset() before execute()."));
						return
					}
					if (s.isExecuting = !0, s.response) {
						var x;
						s.isExecuting = !1, b("Call to execute() on a widget that was already executed (".concat(h, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (x = s.cbSuccess) === null || x === void 0 || x.call(s, s.response, !1);
						return
					}
					s.isExpired && b("Call to execute on a expired-widget (".concat(h, "), consider using reset() before.")), s.isStale && (w(H.StaleExecute, h), s.isExecuting = !0), s.msgQueue.push(ce.Execute), s.isExecuted = !0;
					var E = s.shadow.querySelector("#".concat(h));
					if (E || (s.isExecuting = !1, v("Widget ".concat(h, " to execute was not found"), 43522)), s.isResetting) return;
					if (s.isInitialized && y(s, r, E), s.isInitialized && s.params.appearance === $.Execute && Lt(E, s), s.isExecuting) {
						var I, O = s.shadow.querySelector("#".concat(h));
						O || v("Received state for an unknown widget: ".concat(r), 3078), (I = O.contentWindow) === null || I === void 0 || I.postMessage({
							event: "execute",
							source: U,
							widgetId: r
						}, "*")
					}
				}
			},
			getResponse: function(n) {
				var i;
				if (typeof n == "undefined") {
					var r = T();
					if (r) {
						var u, s = m.widgetMap.get(r);
						return s != null && s.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), (u = m.widgetMap.get(r)) === null || u === void 0 ? void 0 : u.response
					}
					v("Could not find a widget", 43794)
				}
				var h = S(n);
				return h || v("Could not find widget for provided container", 43778), (i = m.widgetMap.get(h)) === null || i === void 0 ? void 0 : i.response
			},
			implicitRender: Pt,
			isExpired: function(n) {
				var i;
				if (typeof n == "undefined") {
					var r = T();
					if (r) {
						var u, s;
						return (s = (u = m.widgetMap.get(r)) === null || u === void 0 ? void 0 : u.isExpired) !== null && s !== void 0 ? s : !1
					}
					v("Could not find a widget", 43794)
				}
				var h = S(n);
				h || v("Could not find widget for provided container", 43778);
				var x;
				return (x = (i = m.widgetMap.get(h)) === null || i === void 0 ? void 0 : i.isExpired) !== null && x !== void 0 ? x : !1
			},
			ready: function(n) {
				if (m.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), v("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof n != "function" && v('turnstile.ready() expected a "function" argument, got "'.concat(typeof n == "undefined" ? "undefined" : D(n), '"'), 3841), m.isReady) {
					n();
					return
				}
				Wt.push(n)
			},
			remove: R,
			render: C,
			reset: d
		})
	}();

	function Yr(e) {
		var t = e.getAttribute("data-sitekey"),
			a = {
				sitekey: t
			},
			o = e.getAttribute("data-tabindex");
		o && (a.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (_t(c) ? a.theme = c : b('Unknown data-theme value: "'.concat(c, '".')));
		var l = e.getAttribute("data-size");
		if (l && (Rt(l) ? a.size = l : b('Unknown data-size value: "'.concat(l, '".'))), 0) var g;
		var y = e.getAttribute("data-action");
		typeof y == "string" && (a.action = y);
		var f = e.getAttribute("data-cdata");
		typeof f == "string" && (a.cData = f);
		var d = e.getAttribute("data-retry");
		d && (bt(d) ? a.retry = d : b('Invalid data-retry value: "'.concat(d, ", expected either 'never' or 'auto'\".")));
		var w = e.getAttribute("data-retry-interval");
		if (w) {
			var R = Number.parseInt(w, 10);
			xt(R) ? a["retry-interval"] = R : b('Invalid data-retry-interval value: "'.concat(w, ', expected an integer value > 0 and < 900000".'))
		}
		var C = e.getAttribute("data-expiry-interval");
		if (C) {
			var T = Number.parseInt(C, 10);
			wt(T) ? a["expiry-interval"] = T : b('Invalid data-expiry-interval value: "'.concat(T, ', expected an integer value > 0 and < 360000".'))
		}
		var k = e.getAttribute("data-refresh-expired");
		k && (St(k) ? a["refresh-expired"] = k : b('Unknown data-refresh-expired value: "'.concat(k, ", expected either: 'never', 'auto' or 'manual'.")));
		var M = e.getAttribute("data-refresh-timeout");
		M && (At(M) ? a["refresh-timeout"] = M : b('Unknown data-refresh-timeout value: "'.concat(M, ", expected either: 'never', 'auto' or 'manual'.")));
		var S = e.getAttribute("data-language");
		S && (It(S) ? a.language = S : b('Invalid data-language value: "'.concat(S, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function N(x) {
			var E = e.getAttribute(x);
			return E && window[E] ? window[E] : void 0
		}
		var _ = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		_.forEach(function(x) {
			a[x] = N("data-".concat(x))
		});
		var n = e.getAttribute("data-feedback-enabled");
		n ? (Tr(n) || b('Invalid data-feedback-enabled value: "'.concat(n, ", expected either: 'true' or 'false'. Value is ignored.")), a["feedback-enabled"] = n === "true") : a["feedback-enabled"] = !0;
		var i, r = (i = e.getAttribute("data-response-field")) !== null && i !== void 0 ? i : "true";
		a["response-field"] = r === "true";
		var u = e.getAttribute("data-response-field-name");
		u && (a["response-field-name"] = u);
		var s = e.getAttribute("data-execution");
		s && (Ot(s) ? a.execution = s : b('Unknown data-execution value: "'.concat(s, ", expected either: 'render' or 'execute'.")));
		var h = e.getAttribute("data-appearance");
		return h && (Ct(h) ? a.appearance = h : b('Unknown data-appearance value: "'.concat(h, ", expected either: 'always', 'execute', or 'interaction-only'."))), a
	}

	function Qr() {
		var e = !0;
		Mt(m, e), m.msgHandler && window.removeEventListener("message", m.msgHandler), xr(window.turnstile, m)
	}
	ye = !1, A = vr(), m.scriptWasLoadedAsync = (Ye = A == null ? void 0 : A.loadedAsync) !== null && Ye !== void 0 ? Ye : !1, m.scriptUrl = (Qe = A == null ? void 0 : A.src) !== null && Qe !== void 0 ? Qe : "undefined", m.scriptUrlParsed = A == null ? void 0 : A.url, A != null && A.params && (_e = A.params.get("compat"), (_e == null ? void 0 : _e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled.") : (b("Compatibility layer enabled."), m.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Vt) : _e !== null && b('Unknown value for api.js?compat: "'.concat(_e, '", ignoring.')), A.params.forEach(function(e, t) {
		F(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || b('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), ye = A.params.get("_upgrade") === "true", X = A.params.get("onload"), X && !ye && setTimeout(function() {
		typeof window[X] == "function" ? window[X]() : (b("Unable to find onload callback '".concat(X, "' immediately after loading, expected 'function', got '").concat(D(window[X]), "'.")), setTimeout(function() {
			typeof window[X] == "function" ? window[X]() : b("Unable to find onload callback '".concat(X, "' after 1 second, expected 'function', got '").concat(D(window[X]), "'."))
		}, 1e3))
	}, 0)), Dt = "turnstile" in window, Dt && !ye ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Dt && ye && (wr(window.turnstile, m), kt(m), (A == null || ($e = A.params) === null || $e === void 0 ? void 0 : $e.get("render")) !== "explicit" && setTimeout(Pt, 0)), window.turnstile = Vt, ye || ((A == null || (Je = A.params) === null || Je === void 0 ? void 0 : Je.get("render")) !== "explicit" && Wt.push(Pt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Rr, 0) : window.addEventListener("DOMContentLoaded", Rr))), Ar = 24 * 60 * 60 * 1e3, window.setTimeout(Qr, Ar);
	var ye, A, Ye, Qe, _e, X, Dt, $e, Je, Ar;
})();