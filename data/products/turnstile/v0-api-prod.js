"use strict";
(function() {
	function Ht(e, t, r, o, c, u, v) {
		try {
			var h = e[u](v),
				f = h.value
		} catch (d) {
			r(d);
			return
		}
		h.done ? t(f) : Promise.resolve(f).then(o, c)
	}

	function Gt(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise(function(o, c) {
				var u = e.apply(t, r);

				function v(f) {
					Ht(u, o, c, v, h, "next", f)
				}

				function h(f) {
					Ht(u, o, c, v, h, "throw", f)
				}
				v(void 0)
			})
		}
	}

	function P(e, t) {
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : P(e, t)
	}

	function Ve(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function We(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = arguments[t] != null ? arguments[t] : {},
				o = Object.keys(r);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(c) {
				return Object.getOwnPropertyDescriptor(r, c).enumerable
			}))), o.forEach(function(c) {
				Ve(e, c, r[c])
			})
		}
		return e
	}

	function Nr(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			t && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), r.push.apply(r, o)
		}
		return r
	}

	function ut(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Nr(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
		}), e
	}

	function Xt(e) {
		if (Array.isArray(e)) return e
	}

	function Yt(e, t) {
		var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (r != null) {
			var o = [],
				c = !0,
				u = !1,
				v, h;
			try {
				for (r = r.call(e); !(c = (v = r.next()).done) && (o.push(v.value), !(t && o.length === t)); c = !0);
			} catch (f) {
				u = !0, h = f
			} finally {
				try {
					!c && r.return != null && r.return()
				} finally {
					if (u) throw h
				}
			}
			return o
		}
	}

	function Qt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function lt(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
		return o
	}

	function Jt(e, t) {
		if (e) {
			if (typeof e == "string") return lt(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lt(e, t)
		}
	}

	function Oe(e, t) {
		return Xt(e) || Yt(e, t) || Jt(e, t) || Qt()
	}

	function D(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Ue(e, t) {
		var r = {
				label: 0,
				sent: function() {
					if (u[0] & 1) throw u[1];
					return u[1]
				},
				trys: [],
				ops: []
			},
			o, c, u, v;
		return v = {
			next: h(0),
			throw: h(1),
			return: h(2)
		}, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
			return this
		}), v;

		function h(d) {
			return function(w) {
				return f([d, w])
			}
		}

		function f(d) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; v && (v = 0, d[0] && (r = 0)), r;) try {
				if (o = 1, c && (u = d[0] & 2 ? c.return : d[0] ? c.throw || ((u = c.return) && u.call(c), 0) : c.next) && !(u = u.call(c, d[1])).done) return u;
				switch (c = 0, u && (d = [d[0] & 2, u.value]), d[0]) {
					case 0:
					case 1:
						u = d;
						break;
					case 4:
						return r.label++, {
							value: d[1],
							done: !1
						};
					case 5:
						r.label++, c = d[1], d = [0];
						continue;
					case 7:
						d = r.ops.pop(), r.trys.pop();
						continue;
					default:
						if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (d[0] === 6 || d[0] === 2)) {
							r = 0;
							continue
						}
						if (d[0] === 3 && (!u || d[1] > u[0] && d[1] < u[3])) {
							r.label = d[1];
							break
						}
						if (d[0] === 6 && r.label < u[1]) {
							r.label = u[1], u = d;
							break
						}
						if (u && r.label < u[2]) {
							r.label = u[2], r.ops.push(d);
							break
						}
						u[2] && r.ops.pop(), r.trys.pop();
						continue
				}
				d = t.call(e, r)
			} catch (w) {
				d = [6, w], c = 0
			} finally {
				o = u = 0
			}
			if (d[0] & 5) throw d[1];
			return {
				value: d[0] ? d[1] : void 0,
				done: !0
			}
		}
	}
	var $t = 300,
		Kt = 10;
	var Zt = {
		code: 200500,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com (or challenges.fed.cloudflare.com) could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?",
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1
	};
	var er = 300020,
		je = 300030,
		qe = 300031;

	function st(e) {
		var t = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearanceLevel !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearanceLevel)), window.__cfDebugTurnstileOutcome && t.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome)), !(t.size === 0 || t.toString() === "")) return t.toString()
	}
	var Be = "cf-chl-widget-",
		U = "cloudflare-challenge",
		tr = ".cf-turnstile",
		rr = ".cf-challenge",
		nr = ".g-recaptcha",
		dt = "cf_challenge_response",
		ft = "cf-turnstile-response",
		pt = "g-recaptcha-response",
		ar = 8e3,
		vt = "private-token",
		ir = 3,
		or = 500,
		cr = 500,
		J = "";
	var z;
	(function(e) {
		e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible"
	})(z || (z = {}));
	var L;
	(function(e) {
		e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible"
	})(L || (L = {}));
	var ze;
	(function(e) {
		e.Auto = "auto", e.Light = "light", e.Dark = "dark"
	})(ze || (ze = {}));
	var ge;
	(function(e) {
		e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain"
	})(ge || (ge = {}));
	var ye;
	(function(e) {
		e.Never = "never", e.Auto = "auto"
	})(ye || (ye = {}));
	var Z;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(Z || (Z = {}));
	var ce;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(ce || (ce = {}));
	var $;
	(function(e) {
		e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only"
	})($ || ($ = {}));
	var he;
	(function(e) {
		e.Render = "render", e.Execute = "execute"
	})(he || (he = {}));
	var ue;
	(function(e) {
		e.Execute = "execute"
	})(ue || (ue = {}));
	var H;
	(function(e) {
		e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun"
	})(H || (H = {}));

	function F(e, t) {
		return e.indexOf(t) !== -1
	}
	var Lr = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Fr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		ur = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];

	function mt(e, t, r) {
		var o = "https://challenges.cloudflare.com",
			c, u = (c = r == null ? void 0 : r.origin) !== null && c !== void 0 ? c : o;
		if (t) {
			var v;
			return (v = e["base-url"]) !== null && v !== void 0 ? v : u
		}
		return u
	}

	function gt(e, t, r, o, c, u, v, h, f) {
		var d = mt(r, c, h),
			w = u ? "h/".concat(u, "/") : "",
			S = f ? "&".concat(f) : "",
			C = r["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(d, "/cdn-cgi/challenge-platform/").concat(w, "turnstile/f/ov2/av0/rch").concat(o, "/").concat(e, "/").concat(t, "/").concat(r.theme, "/").concat(C, "/").concat(v, "/").concat(r.size, "?lang=").concat(r.language).concat(S)
	}
	var yt = function(e) {
			var t, r, o = window.innerWidth < 400,
				c = e.state !== ge.FailureFeedbackCode && (e.state === ge.FailureFeedback || e.state === ge.FailureHavingTroubles || !e.errorCode),
				u, v = F(Lr, (u = (t = e.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && u !== void 0 ? u : "nonexistent"),
				h, f = F(Fr, (h = (r = e.displayLanguage) === null || r === void 0 ? void 0 : r.toLowerCase()) !== null && h !== void 0 ? h : "nonexistent");
			return o ? Pr({
				isModeratelyVerbose: f,
				isSmallerFeedback: c,
				isVerboseLanguage: v
			}) : c && v ? "630px" : c && f ? "620px" : c ? "600px" : v ? "690px" : "680px"
		},
		Pr = function(e) {
			var t = e.isVerboseLanguage,
				r = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return r && t ? "660px" : r && o ? "620px" : r ? "600px" : t ? "770px" : o ? "740px" : "730px"
		};

	function He(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function lr(e, t) {
		if (!P(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function ee(e, t) {
		return ee = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, ee(e, t)
	}

	function sr(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && ee(e, t)
	}

	function Ge() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function ke(e, t, r) {
		return Ge() ? ke = Reflect.construct : ke = function(c, u, v) {
			var h = [null];
			h.push.apply(h, u);
			var f = Function.bind.apply(c, h),
				d = new f;
			return v && ee(d, v.prototype), d
		}, ke.apply(null, arguments)
	}

	function le(e) {
		return le = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
		}, le(e)
	}

	function dr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Xe(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return Xe = function(o) {
			if (o === null || !dr(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(o)) return t.get(o);
				t.set(o, c)
			}

			function c() {
				return ke(o, arguments, le(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), ee(c, o)
		}, Xe(e)
	}

	function fr(e, t) {
		return t && (D(t) === "object" || typeof t == "function") ? t : He(e)
	}

	function pr(e) {
		var t = Ge();
		return function() {
			var o = le(e),
				c;
			if (t) {
				var u = le(this).constructor;
				c = Reflect.construct(o, arguments, u)
			} else c = o.apply(this, arguments);
			return fr(this, c)
		}
	}
	var vr = (function(e) {
		"use strict";
		sr(r, e);
		var t = pr(r);

		function r(o, c) {
			lr(this, r);
			var u;
			return u = t.call(this, o), Ve(He(u), "code", void 0), u.name = "TurnstileError", u.code = c, u
		}
		return r
	})(Xe(Error));

	function m(e, t) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new vr(r, t)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function Ye(e) {
		return e.startsWith(Be) ? e.substring(Be.length) : null
	}

	function K(e) {
		return "".concat(Be).concat(e)
	}

	function Me() {
		var e = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/,
			t = document.currentScript;
		if (P(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var r = document.querySelectorAll("script"), o = 0, c; c = r[o]; o++)
			if (P(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function mr() {
		var e = Me();
		e || m("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			r;
		try {
			r = new URL(t)
		} catch (u) {
			m("Could not parse Turnstile script tag URL", 43777)
		}
		var o = {
			loadedAsync: !1,
			params: new URLSearchParams,
			src: t,
			url: r
		};
		(e.async || e.defer) && (o.loadedAsync = !0);
		var c = t.split("?");
		return c.length > 1 && (o.params = new URLSearchParams(c[1])), o
	}

	function j() {
		return Date.now()
	}
	var ht = function(e, t, r, o) {
			var c = mt(t.params, !1, o),
				u = "h/".concat("b", "/"),
				v, h, f = "".concat(c, "/cdn-cgi/challenge-platform/").concat(u, "feedback-reports/").concat(Ye(e), "/").concat(t.displayLanguage, "/").concat((h = t.params.theme) !== null && h !== void 0 ? h : t.theme, "/").concat(r);
			if (window.top !== window.self) {
				window.open(f, "_blank", "noopener,noreferrer");
				return
			}
			t.wrapper.parentNode || m("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var d = document.createElement("div");
			d.style.position = "fixed", d.style.zIndex = "2147483646", d.style.width = "100vw", d.style.height = "100vh", d.style.top = "0", d.style.left = "0", d.style.transformOrigin = "center center", d.style.overflowX = "hidden", d.style.overflowY = "auto", d.style.background = "rgba(0,0,0,0.4)";
			var w = document.createElement("div");
			w.style.display = "table-cell", w.style.verticalAlign = "middle", w.style.width = "100vw", w.style.height = "100vh";
			var S = document.createElement("div");
			S.className = "cf-turnstile-feedback", S.id = "cf-fr-id", S.style.width = "100vw", S.style.maxWidth = "450px", S.style.height = yt(t), S.style.position = "relative", S.style.zIndex = "2147483647", S.style.backgroundColor = "#ffffff", S.style.borderRadius = "5px", S.style.left = "0px", S.style.top = "0px", S.style.overflow = "hidden", S.style.margin = "0px auto";
			var C = document.createElement("iframe");
			C.id = "".concat(e, "-fr"), C.setAttribute("src", f), C.setAttribute("allow", "cross-origin-isolated; fullscreen"), C.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), C.setAttribute("scrolling", "no"), C.style.borderWidth = "0px", C.style.width = "100%", C.style.height = "100%", C.style.overflow = "hidden";
			var E = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			E.setAttribute("tabindex", "0"), E.setAttribute("role", "img"), E.setAttribute("aria-label", "Close button icon"), E.style.position = "absolute", E.style.width = "26px", E.style.height = "26px", E.style.zIndex = "2147483647", E.style.cursor = "pointer", t.displayRtl ? E.style.left = "2px" : E.style.right = "6px", E.style.top = "5px", E.setAttribute("width", "20"), E.setAttribute("height", "20"), E.addEventListener("click", function() {
				var A;
				(A = d.parentNode) === null || A === void 0 || A.removeChild(d)
			}), E.addEventListener("keydown", function(A) {
				if (A.key === "Enter" || A.key === " ") {
					var Y;
					(Y = d.parentNode) === null || Y === void 0 || Y.removeChild(d)
				}
			});
			var N = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			N.setAttribute("ry", "12"), N.setAttribute("rx", "12"), N.setAttribute("cy", "12"), N.setAttribute("cx", "12"), N.setAttribute("fill", "none"), N.setAttribute("stroke-width", "0"), E.appendChild(N);
			var M = document.createElementNS("http://www.w3.org/2000/svg", "line");
			M.setAttribute("stroke-width", "1"), M.setAttribute("stroke", "#999"), M.setAttribute("fill", "none"), M.setAttribute("x1", "6"), M.setAttribute("x2", "18"), M.setAttribute("y1", "18"), M.setAttribute("y2", "5"), E.appendChild(M);
			var O = document.createElementNS("http://www.w3.org/2000/svg", "line");
			O.setAttribute("stroke-width", "1"), O.setAttribute("stroke", "#999"), O.setAttribute("fill", "none"), O.setAttribute("x1", "6"), O.setAttribute("x2", "18"), O.setAttribute("y1", "5"), O.setAttribute("y2", "18"), E.appendChild(O), S.appendChild(C), S.appendChild(E), w.appendChild(S), d.appendChild(w), d.addEventListener("click", function() {
				var A;
				(A = d.parentNode) === null || A === void 0 || A.removeChild(d)
			}), t.wrapper.parentNode.appendChild(d), window.addEventListener("resize", function() {
				S.style.height = yt(t)
			})
		},
		gr = function(e) {
			var t, r, o, c;
			(c = document.getElementById(e)) === null || c === void 0 || (o = c.parentElement) === null || o === void 0 || (r = o.parentElement) === null || r === void 0 || (t = r.parentElement) === null || t === void 0 || t.remove()
		};
	var Qe;
	(function(e) {
		e.Failure = "failure", e.Verifying = "verifying", e.Overruning = "overrunning", e.Custom = "custom"
	})(Qe || (Qe = {}));
	var _t = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > t ? e.substring(0, t) : e
	};

	function yr(e) {
		if (!e) return "-";
		var t = function(r, o) {
			if (!r || r.tagName === "BODY") return o;
			for (var c = 1, u = r.previousElementSibling; u;) u.tagName === r.tagName && c++, u = u.previousElementSibling;
			var v = _t(r.tagName.toLowerCase()),
				h = "".concat(v, "[").concat(c, "]");
			return t(r.parentNode, "/".concat(h).concat(o))
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

	function _r(e) {
		if (!e) return "";
		var t = e.closest("form");
		if (!t) return "nf";
		var r = Array.from(t.querySelectorAll("input, select, textarea, button")),
			o = r.slice(0, 20).map(function(u) {
				return Dr[u.type] || "-"
			}).join(""),
			c = ["m:".concat(t.method || ""), "f:".concat(r.length), o].join("|");
		return c
	}

	function br(e, t, r) {
		for (var o = "", c = 0, u = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(S) {
					return c > t || o.length > r ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), v;
			(v = u.nextNode()) !== null && o.length < r;) {
			if (v.nodeType === Node.ELEMENT_NODE) {
				var h = v;
				o += "".concat(_t(h.tagName.toLowerCase()));
				for (var f = 0; f < h.attributes.length; f++) {
					var d = h.attributes[f];
					o += "_".concat(_t(d.name, 2))
				}
				o += ">"
			} else v.nodeType === Node.TEXT_NODE && (o += "-t");
			var w = v.parentNode;
			for (c = 0; w !== e && w !== null;) c++, w = w.parentNode
		}
		return o.substring(0, r)
	}

	function xr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : D(e)));
		for (var t = 5381, r = 0; r < e.length; r++) {
			var o = e.charCodeAt(r);
			t = t * 33 ^ o
		}
		return t >>> 0
	}

	function wr(e, t) {
		var r;
		t.upgradeAttempts++;
		var o = Me();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = t;
			var u = new URL(o.src),
				v = document.createElement("script");
			u.searchParams.set("_upgrade", "true"), u.searchParams.set("_cb", String(Date.now())), v.async = !0, c && (v.nonce = c), v.setAttribute("crossorigin", "anonymous"), v.src = u.toString(), o == null || (r = o.parentNode) === null || r === void 0 || r.replaceChild(v, o)
		}
	}

	function Er(e, t) {
		var r = e._pState;
		return r ? (t.isReady = r.isReady, t.isRecaptchaCompatibilityMode = r.isRecaptchaCompatibilityMode, t.lastWidgetIdx = r.lastWidgetIdx, t.scriptWasLoadedAsync = r.scriptWasLoadedAsync, t.upgradeAttempts = r.upgradeAttempts, t.upgradeCompletedCount = r.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = j(), t.watchCatInterval = null, t.watchCatSeq = r.watchCatSeq, t.widgetMap = r.widgetMap, !0) : !1
	}

	function bt(e) {
		return F(["auto", "dark", "light"], e)
	}

	function xt(e) {
		return F(["auto", "never"], e)
	}

	function wt(e) {
		return e > 0 && e < 9e5
	}

	function Et(e) {
		return e > 0 && e < 36e4
	}
	var Vr = /^[0-9A-Za-z_-]{3,100}$/;

	function Tr(e) {
		return Vr.test(e)
	}
	var Wr = /^[a-z0-9_-]{0,32}$/i;

	function Tt(e) {
		return e === void 0 ? !0 : typeof e == "string" && Wr.test(e)
	}
	var Ur = /^[a-z0-9_\-=]{0,255}$/i;

	function St(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ur.test(e)
	}

	function Rt(e) {
		return F([L.Normal, L.Compact, L.Invisible, L.Flexible], e)
	}

	function At(e) {
		return F(["auto", "manual", "never"], e)
	}

	function It(e) {
		return F(["auto", "manual", "never"], e)
	}
	var jr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Ct(e) {
		return e === "auto" || jr.test(e)
	}

	function Ot(e) {
		return F(["always", "execute", "interaction-only"], e)
	}

	function Sr(e) {
		return F(["true", "false"], e)
	}

	function kt(e) {
		return F(["render", "execute"], e)
	}
	var qr = 900,
		Br = 45,
		zr = 50;

	function Hr(e) {
		e.watchCatSeq++;
		var t = !0,
			r = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), u; !(t = (u = c.next()).done); t = !0) {
				var v = Oe(u.value, 2),
					h = v[0],
					f = v[1],
					d;
				f.watchcat.seq = e.watchCatSeq, f.watchcat.lastAckedSeq === 0 && (f.watchcat.lastAckedSeq = e.watchCatSeq);
				var w = K(h);
				if (!w || !f.shadow) {
					f.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(w, ", consider using turnstile.remove() to clean up a widget.")), f.watchcat.missingWidgetWarning = !0);
					continue
				}
				var S = f.shadow.querySelector("#".concat(w));
				if (!S) {
					f.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(w, ", consider using turnstile.remove() to clean up a widget.")), f.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(f.isComplete || f.isFailed || f.isResetting)) {
					var C = f.watchcat.seq - 1 - Br,
						E = f.watchcat.lastAckedSeq < C,
						N = f.watchcat.seq - 1 - zr,
						M = f.isOverrunning && f.watchcat.overrunBeginSeq !== 0 && f.watchcat.overrunBeginSeq < N;
					if ((f.isExecuting || !f.isInitialized || f.isInitialized && !f.isStale && !f.isExecuted) && f.watchcat.lastAckedSeq !== 0 && E || M) {
						var O;
						f.watchcat.lastAckedSeq = 0, f.watchcat.seq = 0, f.isExecuting = !1;
						var A = function(i, n) {
							console.log("Turnstile Widget seem to have ".concat(i, ": "), n)
						};
						A(E ? "hung" : "crashed", h);
						var Y = E ? je : qe,
							_;
						if ((O = e.msgHandler) === null || O === void 0 || O.call(e, {
								data: {
									code: Y,
									event: "fail",
									rcV: (_ = f.nextRcV) !== null && _ !== void 0 ? _ : J,
									source: U,
									widgetId: h
								}
							}), 0) var a;
						continue
					}(d = S.contentWindow) === null || d === void 0 || d.postMessage({
						event: "meow",
						seq: e.watchCatSeq,
						source: U,
						widgetId: h
					}, "*")
				}
			}
		} catch (i) {
			r = !0, o = i
		} finally {
			try {
				!t && c.return != null && c.return()
			} finally {
				if (r) throw o
			}
		}
	}

	function Mt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Hr(e)
		}, qr))
	}

	function Nt(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && clearInterval(e.watchCatInterval)
	}
	var g = {
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

	function Lt(e) {
		Cr(e, "")
	}

	function Vt() {
		var e = [tr, rr];
		g.isRecaptchaCompatibilityMode && e.push(nr), document.querySelectorAll(e.join(", ")).forEach(function(t) {
			return Wt.render(t)
		})
	}
	var Ut = [];

	function Rr() {
		g.isReady = !0;
		var e = !0,
			t = !1,
			r = void 0;
		try {
			for (var o = Ut[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var u = c.value;
				u()
			}
		} catch (v) {
			t = !0, r = v
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (t) throw r
			}
		}
	}

	function Gr(e) {
		var t = g.widgetMap.get(e);
		if (!(t === void 0 || t.hasResponseParamEl)) {
			t.hasResponseParamEl = !0;
			var r, o = (r = t.params["response-field"]) !== null && r !== void 0 ? r : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var u;
				c.name = (u = t.params["response-field-name"]) !== null && u !== void 0 ? u : ft, c.id = "".concat(e, "_response"), t.wrapper.appendChild(c);
				var v;
				if (typeof t.params["response-field-name"] != "string" && Or((v = t.params.sitekey) !== null && v !== void 0 ? v : "")) {
					var h = document.createElement("input");
					h.type = "hidden", h.name = dt, h.id = "".concat(e, "_legacy_response"), t.wrapper.appendChild(h)
				}
			}
			if (g.isRecaptchaCompatibilityMode) {
				var f = document.createElement("input");
				f.type = "hidden", f.name = pt, f.id = "".concat(e, "_g_response"), t.wrapper.appendChild(f)
			}
		}
	}

	function Cr(e, t) {
		Gr(e);
		var r = document.getElementById("".concat(e, "_response"));
		r !== null && P(r, HTMLInputElement) && (r.value = t);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && P(o, HTMLInputElement) && (o.value = t), g.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && P(c, HTMLInputElement) && (c.value = t)
		}
	}

	function Xr(e, t) {
		var r;
		return !!(!((r = t.kills) === null || r === void 0) && r.includes(e))
	}

	function Ft(e, t) {
		var r = t.params,
			o = r.size,
			c = o === void 0 ? "normal" : o,
			u = t.mode;
		switch (u) {
			case z.NonInteractive:
			case z.Managed:
				switch (c) {
					case L.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case L.Invisible:
						m('Invalid value for parameter "size", expected "'.concat(L.Compact, '", "').concat(L.Flexible, '", or "').concat(L.Normal, '", got "').concat(c, '"'), 2817);
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
			case z.Invisible:
				!Xr("floating-invisible", t) && t.params.sitekey === "0x4AAAAAAADnOjc0PNeA8qVm" ? (e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.clipPath = "inset(100%)") : (e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				m('Invalid value for parameter "mode", expected "'.concat(z.NonInteractive, '", "').concat(z.Managed, '" or "').concat(z.Invisible, '", got "').concat(u, '"'), 2818)
		}
	}

	function Ar(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Yr(e, t) {
		var r = t.get("turnstile_iframe_alt");
		r && (e.title = r)
	}

	function Qr(e) {
		return e.origin ? F(ur, e.origin) : !0
	}

	function Or(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Pt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}

	function Jr() {
		if (typeof window.PerformanceObserver == "function") try {
			var e = Me();
			if (!e) return;
			var t = e.src,
				r = !0,
				o = !1,
				c = void 0;
			try {
				for (var u = performance.getEntriesByType("resource")[Symbol.iterator](), v; !(r = (v = u.next()).done); r = !0) {
					var h = v.value;
					if (P(h, PerformanceResourceTiming) && h.name.includes(t)) return h
				}
			} catch (f) {
				o = !0, c = f
			} finally {
				try {
					!r && u.return != null && u.return()
				} finally {
					if (o) throw c
				}
			}
		} catch (f) {}
	}
	var Wt = (function() {
		var e = function(a, i, n, l) {
				return M.apply(this, arguments)
			},
			t = function(a, i, n) {
				if (a.params.retry === ye.Auto || n) {
					a.isExecuted && (a.msgQueue.push(ue.Execute), a.isExecuted = !0, a.isExecuting = !0);
					var l, s = n ? 0 : 1e3 * 2 + ((l = a.params["retry-interval"]) !== null && l !== void 0 ? l : 0);
					a.retryTimeout = window.setTimeout(function() {
						var y = n ? H.CrashedRetry : H.FailureRetry;
						w(y, i)
					}, s)
				}
			},
			r = function(a, i, n) {
				var l;
				a.response === void 0 && m("[Internal Error] Widget was completed but no response was given", 1362), a.isExecuting = !1, a.isComplete = !0, Cr(i, a.response), (l = a.cbSuccess) === null || l === void 0 || l.call(a, a.response, n)
			},
			o = function(a) {
				if (!a) return [];
				for (var i = a.attributes, n = i.length, l = new Array(n), s = 0; s < n; s++) l[s] = i[s].name;
				return l
			},
			c = function(a, i, n) {
				if (a.rcV = i, 0) var l
			},
			u = function() {
				var a = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = a.length,
					n = "";
				do {
					n = "";
					for (var l = 0; l < 5; l++) n += a.charAt(Math.floor(Math.random() * i))
				} while (g.widgetMap.has(n));
				return n
			},
			v = function(a) {
				var i = !0,
					n = !1,
					l = void 0;
				try {
					for (var s = g.widgetMap[Symbol.iterator](), y; !(i = (y = s.next()).done); i = !0) {
						var x = Oe(y.value, 2),
							T = x[0],
							I = x[1];
						if (I.wrapper.parentElement === a) return T
					}
				} catch (k) {
					n = !0, l = k
				} finally {
					try {
						!i && s.return != null && s.return()
					} finally {
						if (n) throw l
					}
				}
				return null
			},
			h = function(a, i, n) {
				for (; a.msgQueue.length > 0;) {
					var l, s = a.msgQueue.pop();
					(l = n.contentWindow) === null || l === void 0 || l.postMessage({
						event: s,
						source: U,
						widgetId: i
					}, "*")
				}
			},
			f = function(a, i) {
				if (i) {
					var n = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						l = [],
						s = !0,
						y = !1,
						x = void 0;
					try {
						for (var T = n[Symbol.iterator](), I; !(s = (I = T.next()).done); s = !0) {
							var k = I.value;
							i[k] && i[k] !== a.params[k] && l.push(k)
						}
					} catch (V) {
						y = !0, x = V
					} finally {
						try {
							!s && T.return != null && T.return()
						} finally {
							if (y) throw x
						}
					}
					l.length > 0 && m("The parameters ".concat(n.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(l.join(",")), 3618), i.action && (Tt(i.action) || m('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), a.action = i.action), i.cData && (St(i.cData) || m('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), a.cData = i.cData), i["after-interactive-callback"] && (a.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (a.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (a.cbSuccess = i.callback), i["expired-callback"] && (a.cbExpired = i["expired-callback"]), i["timeout-callback"] && (a.cbTimeout = i["timeout-callback"]), i["error-callback"] && (a.cbError = i["error-callback"]), i["unsupported-callback"] && (a.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (a.chlPageData = i.chlPageData)
				}
			},
			d = function(a) {
				w(H.Api, a)
			},
			w = function(a, i) {
				var n = A(i);
				n || m("Nothing to reset found for provided container", 3329);
				var l = g.widgetMap.get(n);
				if (l) {
					var s;
					l.isResetting = !0, l.response = void 0, l.mode = void 0, l.msgQueue = [], l.isComplete = !1, l.isExecuting = !1, l.isExpired = !1, l.isFailed = !1, l.isInitialized = !1, l.isStale = !1, l.isOverrunning = !1, l.watchcat.overrunBeginSeq = 0, l.watchcat.lastAckedSeq = 0, l.watchcat.seq = 0, l.params.execution === he.Render && (l.msgQueue.push(ue.Execute), l.isExecuted = !0, l.isExecuting = !0);
					var y = K(n),
						x = l.shadow.querySelector("#".concat(y));
					(!y || !x) && m("Widget ".concat(n, " to reset was not found."), 3330), l.params.appearance === $.InteractionOnly && Ar(x), l.params.sitekey === null && m("Unexpected Error: Sitekey is null", 3347);
					var T = x.cloneNode(),
						I;
					T.src = gt(n, l.params.sitekey, l.params, (I = l.rcV) !== null && I !== void 0 ? I : J, !1, "b", a, g.scriptUrlParsed, st(l)), (s = x.parentNode) === null || s === void 0 || s.replaceChild(T, x), Lt(y), l.retryTimeout && window.clearTimeout(l.retryTimeout)
				} else m("Widget ".concat(n, " to reset was not found."), 3331)
			},
			S = function(a) {
				var i, n = A(a);
				if (!n || !g.widgetMap.has(n)) {
					b("Nothing to remove found for the provided container.");
					return
				}
				var l = K(n),
					s = ["input#".concat(l, "_response"), "input#".concat(l, "_legacy_response"), "input#".concat(l, "_g_response")];
				document.querySelectorAll(s.join(", ")).forEach(function(T) {
					return T.remove()
				});
				var y = g.widgetMap.get(n);
				y == null || y.shadow.querySelectorAll(s.join(", ")).forEach(function(T) {
					return T.remove()
				}), y == null || y.wrapper.remove();
				var x = (i = g.widgetMap.get(n)) === null || i === void 0 ? void 0 : i.retryTimeout;
				x && window.clearTimeout(x), g.widgetMap.delete(n), Nt(g)
			},
			C = function(a, i) {
				var n, l, s = j(),
					y;
				if (typeof a == "string") try {
					var x = document.querySelector(a);
					x || m('Unable to find a container for "'.concat(a, '"'), 3585), y = x
				} catch (zt) {
					m('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(a, '"'), 3586)
				} else P(a, HTMLElement) ? y = a : m('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var T = !0,
					I = !1,
					k = void 0;
				try {
					for (var V = g.widgetMap.values()[Symbol.iterator](), G; !(T = (G = V.next()).done); T = !0) {
						var te = G.value;
						if (y.contains(te.wrapper)) {
							b("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (zt) {
					I = !0, k = zt
				} finally {
					try {
						!T && V.return != null && V.return()
					} finally {
						if (I) throw k
					}
				}
				var W = Pt();
				if (!W) return m("Turnstile cannot determine its page location", 3607);
				if (W.startsWith("file:")) return m("Turnstile cannot run in a file:// url", 3608);
				var se = $r(y);
				if (se) {
					var p = Object.assign(se, i),
						re = p.action,
						de = p.cData,
						xe = p.chlPageData,
						q = p.sitekey,
						fe;
					p.theme = (fe = p.theme) !== null && fe !== void 0 ? fe : ze.Auto;
					var ne;
					p.retry = (ne = p.retry) !== null && ne !== void 0 ? ne : ye.Auto;
					var we;
					p.execution = (we = p.execution) !== null && we !== void 0 ? we : he.Render;
					var ae;
					p.appearance = (ae = p.appearance) !== null && ae !== void 0 ? ae : $.Always;
					var Ee;
					p["retry-interval"] = Number((Ee = p["retry-interval"]) !== null && Ee !== void 0 ? Ee : ar);
					var pe;
					p["expiry-interval"] = Number((pe = p["expiry-interval"]) !== null && pe !== void 0 ? pe : ($t - Kt) * 1e3);
					var ie;
					p.size = (ie = p.size) !== null && ie !== void 0 ? ie : L.Normal;
					var Te = p.callback,
						Ne = p["expired-callback"],
						Se = p["timeout-callback"],
						Re = p["after-interactive-callback"],
						Ae = p["before-interactive-callback"],
						oe = p["error-callback"],
						et = p["unsupported-callback"];
					typeof q != "string" && m('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof q == "undefined" ? "undefined" : D(q), '"'), 3588), Tr(q) || m('Invalid input for parameter "sitekey", got "'.concat(q, '"'), 3589), Rt(p.size) || m('Invalid type for parameter "size", expected normal|compact, got "'.concat(p.size, '" ').concat(D(p.size)), 3590), bt(p.theme) || m('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(p.theme, '" ').concat(D(p.theme)), 3591), xt(p.retry) || m('Invalid type for parameter "retry", expected never|auto, got "'.concat(p.retry, '" ').concat(D(p.retry)), 3592), p.language || (p.language = "auto"), Ct(p.language) || (b('Invalid language value: "'.concat(p.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), p.language = "auto"), Ot(p.appearance) || m('Unknown appearance value: "'.concat(p.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), kt(p.execution) || m('Unknown execution value: "'.concat(p.execution, ", expected either: 'render' or 'execute'."), 3601), wt(p["retry-interval"]) || m('Invalid retry-interval value: "'.concat(p["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), Et(p["expiry-interval"]) || m('Invalid expiry-interval value: "'.concat(p["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var Ie, Q = (Ie = p["refresh-expired"]) !== null && Ie !== void 0 ? Ie : Z.Auto;
					At(Q) ? p["refresh-expired"] = Q : m('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(Q, '" ').concat(typeof Q == "undefined" ? "undefined" : D(Q)), 3603);
					var tt, Le = (tt = p["refresh-timeout"]) !== null && tt !== void 0 ? tt : ce.Auto;
					It(Q) ? p["refresh-timeout"] = Le : m('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(Le, '" ').concat(typeof Le == "undefined" ? "undefined" : D(Le)), 3603);
					var B = document.createElement("iframe"),
						ve = document.createElement("div"),
						jt = ve.attachShadow({
							mode: "closed"
						});
					Tt(re) || m('Invalid input for optional parameter "action", got "'.concat(re, '"'), 3604), St(de) || m('Invalid input for optional parameter "cData", got "'.concat(de, '"'), 3605);
					var Ce = u(),
						me = K(Ce);
					if (!(!Ce || !me)) {
						var qt = [],
							rt = p.execution === he.Render;
						rt && qt.push(ue.Execute), g.lastWidgetIdx++;
						var kr = {};
						g.widgetMap.set(Ce, ut(We({
							action: re,
							cbAfterInteractive: Re,
							cbBeforeInteractive: Ae,
							cbError: oe,
							cbExpired: Ne,
							cbSuccess: Te,
							cbTimeout: Se,
							cbUnsupported: et,
							cData: de,
							chlPageData: xe,
							hasResponseParamEl: !1,
							idx: g.lastWidgetIdx,
							isComplete: !1,
							isExecuted: rt,
							isExecuting: rt,
							isExpired: !1,
							isFailed: !1,
							isInitialized: !1,
							isResetting: !1,
							isStale: !1,
							msgQueue: qt,
							params: p,
							rcV: J,
							watchcat: {
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0,
								seq: 0
							}
						}, kr), {
							isOverrunning: !1,
							shadow: jt,
							widgetInitStartTimeTsMs: 0,
							widgetParamsStartTimeTsMs: 0,
							widgetRenderEndTimeTsMs: 0,
							widgetRenderStartTimeTsMs: s,
							wrapper: ve
						})), Mt(g);
						var nt = g.widgetMap.get(Ce);
						nt || m("Turnstile Initialization Error ", 3606), B.style.display = "none", B.style.border = "none", B.style.overflow = "hidden", B.setAttribute("src", gt(Ce, q, p, J, !1, "b", H.New, g.scriptUrlParsed, st(nt))), B.onerror = function() {
							if (oe) {
								oe == null || oe(String(Zt.code));
								return
							}
							m("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var Bt = ["cross-origin-isolated", "fullscreen", "autoplay"],
							at;
						F((at = (l = document.featurePolicy) === null || l === void 0 || (n = l.features) === null || n === void 0 ? void 0 : n.call(l)) !== null && at !== void 0 ? at : [], vt) && Bt.push(vt), B.setAttribute("allow", Bt.join("; ")), B.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), B.id = me;
						var it;
						B.tabIndex = (it = p.tabindex) !== null && it !== void 0 ? it : 0, B.title = "Widget containing a Cloudflare security challenge", jt.appendChild(B);
						var ot, Mr = (ot = p["response-field"]) !== null && ot !== void 0 ? ot : !0;
						if (Mr) {
							var Fe = document.createElement("input");
							Fe.type = "hidden";
							var ct;
							if (Fe.name = (ct = p["response-field-name"]) !== null && ct !== void 0 ? ct : ft, Fe.id = "".concat(me, "_response"), ve.appendChild(Fe), typeof p["response-field-name"] != "string" && Or(q)) {
								var Pe = document.createElement("input");
								Pe.type = "hidden", Pe.name = dt, Pe.id = "".concat(me, "_legacy_response"), ve.appendChild(Pe)
							}
						}
						if (g.isRecaptchaCompatibilityMode) {
							var De = document.createElement("input");
							De.type = "hidden", De.name = pt, De.id = "".concat(me, "_g_response"), ve.appendChild(De)
						}
						return y.appendChild(ve), nt.widgetRenderEndTimeTsMs = j(), me
					}
				}
			},
			E = function() {
				var a, i = -1,
					n = !0,
					l = !1,
					s = void 0;
				try {
					for (var y = g.widgetMap[Symbol.iterator](), x; !(n = (x = y.next()).done); n = !0) {
						var T = Oe(x.value, 2),
							I = T[0],
							k = T[1];
						i < k.idx && (a = I, i = k.idx)
					}
				} catch (V) {
					l = !0, s = V
				} finally {
					try {
						!n && y.return != null && y.return()
					} finally {
						if (l) throw s
					}
				}
				return i === -1 && m("Could not find widget", 43778), a
			},
			N = Jr();

		function M() {
			return M = Gt(function(_, a, i, n) {
				var l, s, y, x, T, I, k, V, G, te;
				return Ue(this, function(W) {
					switch (W.label) {
						case 0:
							if (l = _.params.sitekey, s = Pt(), !s) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), r(_, a, !1), [2];
							y = "h/".concat("b", "/"), x = new URL(s), T = "https", I = "", V = "".concat(T, "://").concat(x.host, "/cdn-cgi/challenge-platform/").concat(y, "rc/").concat(n).concat(I), W.label = 1;
						case 1:
							return W.trys.push([1, 3, , 4]), [4, fetch(V, {
								body: JSON.stringify({
									secondaryToken: i,
									sitekey: l
								}),
								headers: {
									"Content-Type": "application/json"
								},
								method: "POST",
								redirect: "manual"
							})];
						case 2:
							return G = W.sent(), G.status !== 200 ? (b("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), r(_, a, !1)) : r(_, a, !0), [3, 4];
						case 3:
							return te = W.sent(), b("Error contacting Turnstile, aborting clearance remdeption."), r(_, a, !1), [3, 4];
						case 4:
							return [2]
					}
				})
			}), M.apply(this, arguments)
		}
		var O = function(_) {
			var a = _.data;
			if (a.source === U) {
				if (!Qr(_)) {
					b("Ignored message from wrong origin: ".concat(_.origin, "."));
					return
				}
				if (!(!a.widgetId || !g.widgetMap.has(a.widgetId))) {
					var i = K(a.widgetId),
						n = g.widgetMap.get(a.widgetId);
					if (!(!i || !n)) switch (a.event) {
						case "init": {
							var l;
							n.widgetInitStartTimeTsMs = j(), n.kills = a.kills;
							var s = n.shadow.getElementById(i);
							s || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), n.mode = a.mode, n.nextRcV = a.nextRcV, n.mode === z.Invisible && n.params["refresh-expired"] === Z.Manual && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat(Z.Auto, "' or '").concat(Z.Never, ".'")), n.mode !== z.Managed && n.params["refresh-timeout"] !== ce.Auto && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), n.params.appearance === $.Always || n.isExecuting && n.params.appearance === $.Execute ? Ft(s, n) : Ar(s), s.style.display = "";
							var y = n.shadow.querySelector("#".concat(i));
							y || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), (l = y.contentWindow) === null || l === void 0 || l.postMessage({
								event: "init",
								source: U,
								widgetId: a.widgetId
							}, "*");
							break
						}
						case "translationInit": {
							var x = n.shadow.getElementById(i);
							x || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var T = new Map;
							n.displayLanguage = a.displayLanguage, Object.keys(a.translationData).forEach(function(Q) {
								T.set(Q, a.translationData[Q])
							}), Yr(x, T);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(n.params.language, " is not supported, falling back to: ").concat(a.fallback, ".")), n.displayLanguage = a.fallback;
							break
						}
						case "reject": {
							var I = n.shadow.getElementById(i);
							if (n.isExecuting = !1, I || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), a.reason === "unsupported_browser") {
								var k;
								(k = n.cbUnsupported) === null || k === void 0 || k.call(n)
							}
							break
						}
						case "food": {
							n.watchcat && a.seq > n.watchcat.lastAckedSeq && (n.watchcat.lastAckedSeq = a.seq);
							break
						}
						case "overrunBegin": {
							n.isOverrunning = !0, n.watchcat && (n.watchcat.overrunBeginSeq = n.watchcat.lastAckedSeq);
							break
						}
						case "overrunEnd": {
							n.isOverrunning = !1;
							break
						}
						case "complete": {
							c(n, J, a.widgetId), n.response = a.token, a.sToken ? e(n, i, a.sToken, a.chlId) : r(n, i, !1);
							break
						}
						case "fail": {
							a.rcV && c(n, a.rcV, a.widgetId), a.cfChlOut && (n.cfChlOut = a.cfChlOut), a.cfChlOutS && (n.cfChlOutS = a.cfChlOutS), a.code && (n.errorCode = a.code), n.isExecuting = !1, n.isFailed = !0, n.isInitialized = !0, a.frMd && (n.frMd = a.frMd), Lt(i);
							var V = n.cbError,
								G = a.code === je || a.code === qe;
							if (G) {
								var te, W = n.shadow.querySelector("#".concat(i));
								W == null || (te = W.contentWindow) === null || te === void 0 || te.postMessage({
									event: "forceFail",
									source: U,
									widgetId: a.widgetId
								}, "*")
							}
							if (V) {
								var se;
								V(String((se = a.code) !== null && se !== void 0 ? se : er)) ? n.params.retry === ye.Auto && !n.isResetting && t(n, i, G) : (a.code && b("Error: ".concat(a.code, ".")), t(n, i, G))
							} else a.code ? (t(n, i, G), m("Error: ".concat(a.code), 3076)) : t(n, i, !1);
							break
						}
						case "feedbackInit": {
							var p = n.wrapper.querySelector("#".concat(i, "-fr"));
							if (p) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							ht(i, n, a.feedbackOrigin, g.scriptUrlParsed);
							break
						}
						case "requestFeedbackData": {
							var re, de = n.shadow.querySelector("#".concat(i));
							de || m("Received state for an unknown widget: #".concat(i, " / ").concat(a.widgetId), 3078), (re = de.contentWindow) === null || re === void 0 || re.postMessage({
								event: "requestTurnstileResults",
								source: U,
								widgetId: a.widgetId
							}, "*");
							break
						}
						case "turnstileResults": {
							var xe, q, fe = (xe = n.wrapper.parentNode) === null || xe === void 0 ? void 0 : xe.querySelector("#".concat(i, "-fr"));
							fe || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), (q = fe.contentWindow) === null || q === void 0 || q.postMessage({
								cfChlOut: n.cfChlOut,
								cfChlOutS: n.cfChlOutS,
								errorCode: n.errorCode,
								event: "feedbackData",
								frMd: n.frMd || a.frMd,
								mode: a.mode,
								rayId: a.rayId,
								rcV: a.rcV,
								sitekey: a.sitekey,
								source: U,
								widgetId: a.widgetId
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var ne, we = (ne = n.wrapper.parentNode) === null || ne === void 0 ? void 0 : ne.querySelector("#".concat(i, "-fr"));
							we || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), gr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ae, Ee = a.token;
							n.isExpired = !0, (ae = n.cbExpired) === null || ae === void 0 || ae.call(n, Ee), n.params["refresh-expired"] === Z.Auto && !n.isResetting && w(H.AutoExpire, i);
							break
						}
						case "interactiveTimeout": {
							c(n, J, a.widgetId), Lt(i);
							var pe = n.cbTimeout;
							if (pe ? pe() : n.params["refresh-timeout"] === ce.Never && !n.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), n.params["refresh-timeout"] === ce.Auto && !n.isResetting) {
								var ie = n.cbAfterInteractive;
								ie == null || ie(), w(H.AutoTimeout, i)
							}
							break
						}
						case "refreshRequest": {
							c(n, J, a.widgetId), w(H.ManualRefresh, i);
							break
						}
						case "reloadRequest": {
							c(n, a.nextRcV, a.widgetId), w(a.trigger, i);
							break
						}
						case "interactiveBegin": {
							var Te, Ne = n.shadow.getElementById(i);
							Ne || m("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (Te = n.cbBeforeInteractive) === null || Te === void 0 || Te.call(n), n.params.appearance === $.InteractionOnly && Ft(Ne, n);
							break
						}
						case "interactiveEnd": {
							var Se;
							(Se = n.cbAfterInteractive) === null || Se === void 0 || Se.call(n);
							break
						}
						case "widgetStale": {
							n.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var Re;
							n.widgetParamsStartTimeTsMs = j();
							var Ae = n.shadow.querySelector("#".concat(i));
							Ae || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), n.isResetting = !1;
							var oe = {},
								et = j(),
								Ie = {
									"ht.atrs": o(document.body.parentNode),
									pi: {
										ffp: _r(n.wrapper),
										ii: window.self !== window.top,
										lH: window.location.href,
										mL: document.getElementsByTagName("meta").length,
										pfp: br(document, ir, or),
										sL: document.scripts.length,
										sR: n.wrapper.shadowRoot === null,
										ssL: document.styleSheets.length,
										t: "".concat(document.title.length, "|").concat(xr(document.title)),
										tL: document.getElementsByTagName("*").length,
										wp: hr(n.wrapper),
										xp: yr(n.wrapper).substring(0, cr)
									},
									"w.iW": window.innerWidth
								};
							(Re = Ae.contentWindow) === null || Re === void 0 || Re.postMessage(We({
								action: n.action,
								apiJsResourceTiming: N ? JSON.parse(JSON.stringify(N)) : void 0,
								appearance: n.params.appearance,
								au: g.scriptUrl,
								cData: n.cData,
								ch: "d251aa49a8a3",
								chlPageData: n.chlPageData,
								event: "extraParams",
								execution: n.params.execution,
								"expiry-interval": n.params["expiry-interval"],
								language: n.params.language,
								rcV: n.rcV,
								"refresh-expired": n.params["refresh-expired"],
								"refresh-timeout": n.params["refresh-timeout"],
								retry: n.params.retry,
								"retry-interval": n.params["retry-interval"],
								source: U,
								timeExtraParamsMs: j() - n.widgetRenderStartTimeTsMs,
								timeInitMs: n.widgetInitStartTimeTsMs - n.widgetRenderEndTimeTsMs,
								timeLoadInitMs: j() - g.turnstileLoadInitTimeTsMs,
								timeParamsMs: n.widgetParamsStartTimeTsMs - n.widgetInitStartTimeTsMs,
								timeRenderMs: n.widgetRenderEndTimeTsMs - n.widgetRenderStartTimeTsMs,
								timeTiefMs: j() - et,
								upgradeAttempts: g.upgradeAttempts,
								upgradeCompletedCount: g.upgradeCompletedCount,
								url: Pt(),
								widgetId: a.widgetId,
								wPr: Ie
							}, oe), "*"), h(n, a.widgetId, Ae), n.isInitialized = !0;
							break
						}
						default:
							break
					}
				}
			}
		};
		g.msgHandler = O, window.addEventListener("message", O);

		function A(_) {
			if (typeof _ == "string") {
				var a = Ye(_);
				if (a && g.widgetMap.has(a)) return a;
				if (g.widgetMap.has(_)) return _;
				try {
					var i = document.querySelector(_);
					return i ? A(i) : null
				} catch (n) {
					return null
				}
			}
			return P(_, Element) ? v(_) : _ || g.widgetMap.size === 0 ? null : g.widgetMap.keys().next().value
		}
		var Y = {};
		return ut(We({}, Y), {
			_private: {
				showFeedback: function(a) {
					var i = A(a);
					if (i) {
						var n = K(i);
						if (n) {
							var l = g.widgetMap.get(i);
							l && ht(n, l, Qe.Custom, g.scriptUrlParsed)
						}
					}
				}
			},
			execute: function(a, i) {
				var n = A(a);
				if (!n) {
					i === void 0 && m("Please provide 2 parameters to execute: container and parameters", 43521);
					var l = C(a, i);
					l || m("Failed to render widget", 43522), n = l
				}
				var s = g.widgetMap.get(n);
				if (s) {
					f(s, i);
					var y = K(n);
					if (s.isExecuting) {
						b("Call to execute() on a widget that is already executing (".concat(y, "), consider using reset() before execute()."));
						return
					}
					if (s.isExecuting = !0, s.response) {
						var x;
						s.isExecuting = !1, b("Call to execute() on a widget that was already executed (".concat(y, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (x = s.cbSuccess) === null || x === void 0 || x.call(s, s.response, !1);
						return
					}
					s.isExpired && b("Call to execute on a expired-widget (".concat(y, "), consider using reset() before.")), s.isStale && (w(H.StaleExecute, y), s.isExecuting = !0), s.msgQueue.push(ue.Execute), s.isExecuted = !0;
					var T = s.shadow.querySelector("#".concat(y));
					if (T || (s.isExecuting = !1, m("Widget ".concat(y, " to execute was not found"), 43522)), s.isResetting) return;
					if (s.isInitialized && h(s, n, T), s.isInitialized && s.params.appearance === $.Execute && Ft(T, s), s.isExecuting) {
						var I, k = s.shadow.querySelector("#".concat(y));
						k || m("Received state for an unknown widget: ".concat(n), 3078), (I = k.contentWindow) === null || I === void 0 || I.postMessage({
							event: "execute",
							source: U,
							widgetId: n
						}, "*")
					}
				}
			},
			getResponse: function(a) {
				var i;
				if (typeof a == "undefined") {
					var n = E();
					if (n) {
						var l, s = g.widgetMap.get(n);
						return s != null && s.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), (l = g.widgetMap.get(n)) === null || l === void 0 ? void 0 : l.response
					}
					m("Could not find a widget", 43794)
				}
				var y = A(a);
				return y || m("Could not find widget for provided container", 43778), (i = g.widgetMap.get(y)) === null || i === void 0 ? void 0 : i.response
			},
			implicitRender: Vt,
			isExpired: function(a) {
				var i;
				if (typeof a == "undefined") {
					var n = E();
					if (n) {
						var l, s;
						return (s = (l = g.widgetMap.get(n)) === null || l === void 0 ? void 0 : l.isExpired) !== null && s !== void 0 ? s : !1
					}
					m("Could not find a widget", 43794)
				}
				var y = A(a);
				y || m("Could not find widget for provided container", 43778);
				var x;
				return (x = (i = g.widgetMap.get(y)) === null || i === void 0 ? void 0 : i.isExpired) !== null && x !== void 0 ? x : !1
			},
			ready: function(a) {
				if (g.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), m("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof a != "function" && m('turnstile.ready() expected a "function" argument, got "'.concat(typeof a == "undefined" ? "undefined" : D(a), '"'), 3841), g.isReady) {
					a();
					return
				}
				Ut.push(a)
			},
			remove: S,
			render: C,
			reset: d
		})
	})();

	function $r(e) {
		var t = e.getAttribute("data-sitekey"),
			r = {
				sitekey: t
			},
			o = e.getAttribute("data-tabindex");
		o && (r.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (bt(c) ? r.theme = c : b('Unknown data-theme value: "'.concat(c, '".')));
		var u = e.getAttribute("data-size");
		if (u && (Rt(u) ? r.size = u : b('Unknown data-size value: "'.concat(u, '".'))), 0) var v;
		var h = e.getAttribute("data-action");
		typeof h == "string" && (r.action = h);
		var f = e.getAttribute("data-cdata");
		typeof f == "string" && (r.cData = f);
		var d = e.getAttribute("data-retry");
		d && (xt(d) ? r.retry = d : b('Invalid data-retry value: "'.concat(d, ", expected either 'never' or 'auto'\".")));
		var w = e.getAttribute("data-retry-interval");
		if (w) {
			var S = Number.parseInt(w, 10);
			wt(S) ? r["retry-interval"] = S : b('Invalid data-retry-interval value: "'.concat(w, ', expected an integer value > 0 and < 900000".'))
		}
		var C = e.getAttribute("data-expiry-interval");
		if (C) {
			var E = Number.parseInt(C, 10);
			Et(E) ? r["expiry-interval"] = E : b('Invalid data-expiry-interval value: "'.concat(E, ', expected an integer value > 0 and < 360000".'))
		}
		var N = e.getAttribute("data-refresh-expired");
		N && (At(N) ? r["refresh-expired"] = N : b('Unknown data-refresh-expired value: "'.concat(N, ", expected either: 'never', 'auto' or 'manual'.")));
		var M = e.getAttribute("data-refresh-timeout");
		M && (It(M) ? r["refresh-timeout"] = M : b('Unknown data-refresh-timeout value: "'.concat(M, ", expected either: 'never', 'auto' or 'manual'.")));
		var O = e.getAttribute("data-language");
		O && (Ct(O) ? r.language = O : b('Invalid data-language value: "'.concat(O, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function A(y) {
			var x = e.getAttribute(y);
			return x && window[x] ? window[x] : void 0
		}
		var Y = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		Y.forEach(function(y) {
			r[y] = A("data-".concat(y))
		});
		var _ = e.getAttribute("data-feedback-enabled");
		_ ? (Sr(_) || b('Invalid data-feedback-enabled value: "'.concat(_, ", expected either: 'true' or 'false'. Value is ignored.")), r["feedback-enabled"] = _ === "true") : r["feedback-enabled"] = !0;
		var a, i = (a = e.getAttribute("data-response-field")) !== null && a !== void 0 ? a : "true";
		r["response-field"] = i === "true";
		var n = e.getAttribute("data-response-field-name");
		n && (r["response-field-name"] = n);
		var l = e.getAttribute("data-execution");
		l && (kt(l) ? r.execution = l : b('Unknown data-execution value: "'.concat(l, ", expected either: 'render' or 'execute'.")));
		var s = e.getAttribute("data-appearance");
		return s && (Ot(s) ? r.appearance = s : b('Unknown data-appearance value: "'.concat(s, ", expected either: 'always', 'execute', or 'interaction-only'."))), r
	}

	function Kr() {
		var e = !0;
		Nt(g, e), g.msgHandler && window.removeEventListener("message", g.msgHandler), wr(window.turnstile, g)
	}
	_e = !1, R = mr(), g.scriptWasLoadedAsync = (Je = R == null ? void 0 : R.loadedAsync) !== null && Je !== void 0 ? Je : !1, g.scriptUrl = ($e = R == null ? void 0 : R.src) !== null && $e !== void 0 ? $e : "undefined", g.scriptUrlParsed = R == null ? void 0 : R.url, R != null && R.params && (be = R.params.get("compat"), (be == null ? void 0 : be.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled.") : (b("Compatibility layer enabled."), g.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Wt) : be !== null && b('Unknown value for api.js?compat: "'.concat(be, '", ignoring.')), R.params.forEach(function(e, t) {
		F(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || b('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), _e = R.params.get("_upgrade") === "true", X = R.params.get("onload"), X && !_e && setTimeout(function() {
		typeof window[X] == "function" ? window[X]() : (b("Unable to find onload callback '".concat(X, "' immediately after loading, expected 'function', got '").concat(D(window[X]), "'.")), setTimeout(function() {
			typeof window[X] == "function" ? window[X]() : b("Unable to find onload callback '".concat(X, "' after 1 second, expected 'function', got '").concat(D(window[X]), "'."))
		}, 1e3))
	}, 0)), Dt = "turnstile" in window, Dt && !_e ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Dt && _e && (Er(window.turnstile, g), Mt(g), (R == null || (Ke = R.params) === null || Ke === void 0 ? void 0 : Ke.get("render")) !== "explicit" && setTimeout(Vt, 0)), window.turnstile = Wt, _e || ((R == null || (Ze = R.params) === null || Ze === void 0 ? void 0 : Ze.get("render")) !== "explicit" && Ut.push(Vt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Rr, 0) : window.addEventListener("DOMContentLoaded", Rr))), Ir = 1440 * 60 * 1e3, window.setTimeout(Kr, Ir);
	var _e, R, Je, $e, be, X, Dt, Ke, Ze, Ir;
})();