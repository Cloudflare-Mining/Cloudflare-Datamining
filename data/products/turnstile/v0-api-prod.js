"use strict";
(function() {
	function Qt(e, t, a, o, c, l, v) {
		try {
			var g = e[l](v),
				f = g.value
		} catch (d) {
			a(d);
			return
		}
		g.done ? t(f) : Promise.resolve(f).then(o, c)
	}

	function Kt(e) {
		return function() {
			var t = this,
				a = arguments;
			return new Promise(function(o, c) {
				var l = e.apply(t, a);

				function v(f) {
					Qt(l, o, c, v, g, "next", f)
				}

				function g(f) {
					Qt(l, o, c, v, g, "throw", f)
				}
				v(void 0)
			})
		}
	}

	function be(e, t, a) {
		return t in e ? Object.defineProperty(e, t, {
			value: a,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = a, e
	}

	function U(e, t) {
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : U(e, t)
	}

	function qe(e) {
		for (var t = 1; t < arguments.length; t++) {
			var a = arguments[t] != null ? arguments[t] : {},
				o = Object.keys(a);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(c) {
				return Object.getOwnPropertyDescriptor(a, c).enumerable
			}))), o.forEach(function(c) {
				be(e, c, a[c])
			})
		}
		return e
	}

	function Vr(e, t) {
		var a = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			t && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), a.push.apply(a, o)
		}
		return a
	}

	function pt(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Vr(Object(t)).forEach(function(a) {
			Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
		}), e
	}

	function $t(e) {
		if (Array.isArray(e)) return e
	}

	function Zt(e, t) {
		var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (a != null) {
			var o = [],
				c = !0,
				l = !1,
				v, g;
			try {
				for (a = a.call(e); !(c = (v = a.next()).done) && (o.push(v.value), !(t && o.length === t)); c = !0);
			} catch (f) {
				l = !0, g = f
			} finally {
				try {
					!c && a.return != null && a.return()
				} finally {
					if (l) throw g
				}
			}
			return o
		}
	}

	function er() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function vt(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
		return o
	}

	function tr(e, t) {
		if (e) {
			if (typeof e == "string") return vt(e, t);
			var a = Object.prototype.toString.call(e).slice(8, -1);
			if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
			if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return vt(e, t)
		}
	}

	function De(e, t) {
		return $t(e) || Zt(e, t) || tr(e, t) || er()
	}

	function W(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Ge(e, t) {
		var a = {
				label: 0,
				sent: function() {
					if (l[0] & 1) throw l[1];
					return l[1]
				},
				trys: [],
				ops: []
			},
			o, c, l, v;
		return v = {
			next: g(0),
			throw: g(1),
			return: g(2)
		}, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
			return this
		}), v;

		function g(d) {
			return function(S) {
				return f([d, S])
			}
		}

		function f(d) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; v && (v = 0, d[0] && (a = 0)), a;) try {
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
			} catch (S) {
				d = [6, S], c = 0
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
	var rr = 300,
		ar = 10,
		nr = 200500,
		ir = 300020,
		Xe = 300030,
		Ye = 300031;

	function mt(e) {
		var t = new URLSearchParams;
		if (e.params.botnet && t.set("botnet", "true"), e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearanceLevel !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearanceLevel), e.params._debugSitekeyOverrides.offlabelShowPrivacy && e.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default" && t.set("offlabel_show_privacy", e.params._debugSitekeyOverrides.offlabelShowPrivacy), e.params._debugSitekeyOverrides.offlabelShowHelp && e.params._debugSitekeyOverrides.offlabelShowHelp !== "default" && t.set("offlabel_show_help", e.params._debugSitekeyOverrides.offlabelShowHelp)), e.params._debugForceLoopFeedback && t.set("force_loop_feedback", "true"), e.params["offlabel-show-privacy"] !== void 0 && t.set("offlabel_show_privacy", String(e.params["offlabel-show-privacy"])), e.params["offlabel-show-help"] !== void 0 && t.set("offlabel_show_help", String(e.params["offlabel-show-help"])), window.__cfDebugTurnstileOutcome && t.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome)), !(t.size === 0 || t.toString() === "")) return t.toString()
	}
	var Je = "cf-chl-widget-",
		j = "cloudflare-challenge",
		or = ".cf-turnstile",
		cr = ".cf-challenge",
		lr = ".g-recaptcha",
		yt = "cf_challenge_response",
		gt = "cf-turnstile-response",
		ht = "g-recaptcha-response",
		ur = 8e3,
		_t = "private-token",
		sr = 3,
		fr = 500,
		dr = 500,
		$ = "",
		bt = "_cftscs_",
		pr = 512;
	var G;
	(function(e) {
		e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible"
	})(G || (G = {}));
	var F;
	(function(e) {
		e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible"
	})(F || (F = {}));
	var xe;
	(function(e) {
		e.Auto = "auto", e.Light = "light", e.Dark = "dark"
	})(xe || (xe = {}));
	var we;
	(function(e) {
		e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain"
	})(we || (we = {}));
	var Ee;
	(function(e) {
		e.Never = "never", e.Auto = "auto"
	})(Ee || (Ee = {}));
	var re;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(re || (re = {}));
	var fe;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(fe || (fe = {}));
	var Z;
	(function(e) {
		e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only"
	})(Z || (Z = {}));
	var Te;
	(function(e) {
		e.Render = "render", e.Execute = "execute"
	})(Te || (Te = {}));
	var de;
	(function(e) {
		e.Execute = "execute"
	})(de || (de = {}));
	var X;
	(function(e) {
		e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun"
	})(X || (X = {}));

	function P(e, t) {
		return e.indexOf(t) !== -1
	}
	var Ur = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Wr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		vr = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];

	function xt(e, t, a) {
		var o = "https://challenges.cloudflare.com",
			c, l = (c = a == null ? void 0 : a.origin) !== null && c !== void 0 ? c : o;
		if (t) {
			var v;
			return (v = e["base-url"]) !== null && v !== void 0 ? v : l
		}
		return l
	}

	function wt(e, t, a, o, c, l, v, g, f) {
		var d = xt(a, c, g),
			S = l ? "h/".concat(l, "/") : "",
			x = f ? "&".concat(f) : "",
			D = a["feedback-enabled"] === !1 ? "fbD" : "fbE",
			N = a.chlPageOfflabel ? "&offlabel=true" : "";
		return "".concat(d, "/cdn-cgi/challenge-platform/").concat(S, "turnstile/f/ov2/av0/rch").concat(o, "/").concat(e, "/").concat(t, "/").concat(a.theme, "/").concat(D, "/").concat(v, "/").concat(a.size, "?lang=").concat(a.language).concat(N).concat(x)
	}
	var Et = function(e) {
			var t, a, o = window.innerWidth < 400,
				c = e.state !== we.FailureFeedbackCode && (e.state === we.FailureFeedback || e.state === we.FailureHavingTroubles || !e.errorCode),
				l, v = P(Ur, (l = (t = e.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && l !== void 0 ? l : "nonexistent"),
				g, f = P(Wr, (g = (a = e.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && g !== void 0 ? g : "nonexistent");
			return o ? Br({
				isModeratelyVerbose: f,
				isSmallerFeedback: c,
				isVerboseLanguage: v
			}) : c && v ? "680px" : c && f ? "670px" : c ? "650px" : v ? "690px" : "680px"
		},
		Br = function(e) {
			var t = e.isVerboseLanguage,
				a = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return a && t ? "660px" : a && o ? "620px" : a ? "600px" : t ? "770px" : o ? "740px" : "730px"
		};

	function Qe(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function mr(e, t) {
		if (!U(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function ae(e, t) {
		return ae = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, ae(e, t)
	}

	function yr(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && ae(e, t)
	}

	function Ke() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function Ve(e, t, a) {
		return Ke() ? Ve = Reflect.construct : Ve = function(c, l, v) {
			var g = [null];
			g.push.apply(g, l);
			var f = Function.bind.apply(c, g),
				d = new f;
			return v && ae(d, v.prototype), d
		}, Ve.apply(null, arguments)
	}

	function pe(e) {
		return pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
			return a.__proto__ || Object.getPrototypeOf(a)
		}, pe(e)
	}

	function gr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function $e(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return $e = function(o) {
			if (o === null || !gr(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(o)) return t.get(o);
				t.set(o, c)
			}

			function c() {
				return Ve(o, arguments, pe(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), ae(c, o)
		}, $e(e)
	}

	function hr(e, t) {
		return t && (W(t) === "object" || typeof t == "function") ? t : Qe(e)
	}

	function _r(e) {
		var t = Ke();
		return function() {
			var o = pe(e),
				c;
			if (t) {
				var l = pe(this).constructor;
				c = Reflect.construct(o, arguments, l)
			} else c = o.apply(this, arguments);
			return hr(this, c)
		}
	}
	var br = (function(e) {
		"use strict";
		yr(a, e);
		var t = _r(a);

		function a(o, c) {
			mr(this, a);
			var l;
			return l = t.call(this, o), be(Qe(l), "code", void 0), l.name = "TurnstileError", l.code = c, l
		}
		return a
	})($e(Error));
	var zr = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;

	function m(e, t) {
		var a = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new br(a, t)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function Ze(e) {
		return e.startsWith(Je) ? e.slice(Je.length) : null
	}

	function ee(e) {
		return "".concat(Je).concat(e)
	}

	function Ue() {
		var e = zr,
			t = document.currentScript;
		if (U(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var a = document.querySelectorAll("script"), o = 0, c; c = a[o]; o++)
			if (U(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function xr() {
		var e = Ue();
		e || m("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			a;
		try {
			a = new URL(t)
		} catch (l) {
			m("Could not parse Turnstile script tag URL", 43777)
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

	function q() {
		return Date.now()
	}
	var Tt = function(e, t, a, o) {
			var c = xt(t.params, !1, o),
				l = "h/".concat("b", "/"),
				v, g, f = "".concat(c, "/cdn-cgi/challenge-platform/").concat(l, "feedback-reports/").concat(Ze(e), "/").concat(t.displayLanguage, "/").concat((g = t.params.theme) !== null && g !== void 0 ? g : t.theme, "/").concat(a);
			if (window.top !== window.self) {
				window.open(f, "_blank", "noopener,noreferrer");
				return
			}
			t.wrapper.parentNode || m("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var d = document.createElement("div");
			d.style.position = "fixed", d.style.zIndex = "2147483646", d.style.width = "100vw", d.style.height = "100vh", d.style.top = "0", d.style.left = "0", d.style.transformOrigin = "center center", d.style.overflowX = "hidden", d.style.overflowY = "auto", d.style.background = "rgba(0,0,0,0.4)";
			var S = document.createElement("div");
			S.className = "cf-wrapper-turnstile-feedback", S.style.display = "table-cell", S.style.verticalAlign = "middle", S.style.width = "100vw", S.style.height = "100vh";
			var x = document.createElement("div");
			x.className = "cf-turnstile-feedback", x.id = "cf-fr-id", x.style.width = "100vw", x.style.maxWidth = "500px", x.style.height = Et(t), x.style.position = "relative", x.style.zIndex = "2147483647", x.style.backgroundColor = "#ffffff", x.style.borderRadius = "5px", x.style.left = "0px", x.style.top = "0px", x.style.overflow = "hidden", x.style.margin = "0px auto";
			var D = function() {
					x.style.height = Et(t)
				},
				N = function() {
					var k;
					window.removeEventListener("resize", D), (k = d.parentNode) === null || k === void 0 || k.removeChild(d)
				},
				A = document.createElement("iframe");
			A.id = "".concat(e, "-fr"), A.setAttribute("src", f), A.setAttribute("allow", "cross-origin-isolated; fullscreen"), A.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), A.setAttribute("scrolling", "yes"), A.style.borderWidth = "0px", A.style.width = "100%", A.style.height = "100%", A.style.overflow = "auto";
			var E = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			E.setAttribute("tabindex", "0"), E.setAttribute("role", "img"), E.setAttribute("aria-label", "Close button icon"), E.style.position = "absolute", E.style.width = "26px", E.style.height = "26px", E.style.zIndex = "2147483647", E.style.cursor = "pointer", t.displayRtl ? E.style.left = "24px" : E.style.right = "24px", E.style.top = "24px", E.setAttribute("width", "20"), E.setAttribute("height", "20"), E.addEventListener("click", function(k) {
				k.stopPropagation(), N()
			}), E.addEventListener("keydown", function(k) {
				(k.key === "Enter" || k.key === " ") && (k.stopPropagation(), N())
			});
			var C = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			C.setAttribute("ry", "12"), C.setAttribute("rx", "12"), C.setAttribute("cy", "12"), C.setAttribute("cx", "12"), C.setAttribute("fill", "none"), C.setAttribute("stroke-width", "0"), E.appendChild(C);
			var L = document.createElementNS("http://www.w3.org/2000/svg", "line");
			L.setAttribute("stroke-width", "1"), L.setAttribute("fill", "none"), L.setAttribute("x1", "6"), L.setAttribute("x2", "18"), L.setAttribute("y1", "18"), L.setAttribute("y2", "5");
			var O = document.createElementNS("http://www.w3.org/2000/svg", "line");
			O.setAttribute("stroke-width", "1"), O.setAttribute("fill", "none"), O.setAttribute("x1", "6"), O.setAttribute("x2", "18"), O.setAttribute("y1", "5"), O.setAttribute("y2", "18"), t.theme === xe.Light ? (L.setAttribute("stroke", "#0A0A0A"), O.setAttribute("stroke", "#0A0A0A")) : (L.setAttribute("stroke", "#F2F2F2"), O.setAttribute("stroke", "#F2F2F2")), E.appendChild(L), E.appendChild(O), x.appendChild(A), x.appendChild(E), S.appendChild(x), d.appendChild(S), d.addEventListener("click", N), t.wrapper.parentNode.appendChild(d), window.addEventListener("resize", D)
		},
		wr = function(e) {
			var t, a, o, c;
			(c = document.getElementById(e)) === null || c === void 0 || (o = c.parentElement) === null || o === void 0 || (a = o.parentElement) === null || a === void 0 || (t = a.parentElement) === null || t === void 0 || t.remove()
		};
	var et;
	(function(e) {
		e.Failure = "failure", e.Verifying = "verifying", e.Overruning = "overrunning", e.Custom = "custom", e.TimeMismatch = "timemismatch", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain"
	})(et || (et = {}));
	var St = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > t ? e.slice(0, t) : e
	};

	function Er(e) {
		if (!e) return "-";
		var t = function(a, o) {
			if (!a || a.tagName === "BODY") return o;
			for (var c = 1, l = a.previousElementSibling; l;) l.tagName === a.tagName && c++, l = l.previousElementSibling;
			var v = St(a.tagName.toLowerCase()),
				g = "".concat(v, "[").concat(c, "]");
			return t(a.parentNode, "/".concat(g).concat(o))
		};
		return t(e, "")
	}

	function Tr(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var Hr = {
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

	function Sr(e) {
		if (!e) return "";
		var t = e.closest("form");
		if (!t) return "nf";
		var a = Array.from(t.querySelectorAll("input, select, textarea, button")),
			o = a.slice(0, 20).map(function(l) {
				return Hr[l.type] || "-"
			}).join(""),
			c = ["m:".concat(t.method || ""), "f:".concat(a.length), o].join("|");
		return c
	}

	function Ar(e, t, a) {
		for (var o = "", c = 0, l = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(E) {
					return c > t || o.length > a ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), v;
			(v = l.nextNode()) !== null && o.length < a;) {
			if (v.nodeType === Node.ELEMENT_NODE) {
				var g = v;
				o += "".concat(St(g.tagName.toLowerCase()));
				var f = !0,
					d = !1,
					S = void 0;
				try {
					for (var x = Array.from(g.attributes)[Symbol.iterator](), D; !(f = (D = x.next()).done); f = !0) {
						var N = D.value;
						o += "_".concat(St(N.name, 2))
					}
				} catch (E) {
					d = !0, S = E
				} finally {
					try {
						!f && x.return != null && x.return()
					} finally {
						if (d) throw S
					}
				}
				o += ">"
			} else v.nodeType === Node.TEXT_NODE && (o += "-t");
			var A = v.parentNode;
			for (c = 0; A !== e && A !== null;) c++, A = A.parentNode
		}
		return o.slice(0, a)
	}

	function Rr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : W(e)));
		for (var t = 5381, a = 0; a < e.length; a++) {
			var o = e.charCodeAt(a);
			t = t * 33 ^ o
		}
		return t >>> 0
	}

	function Ir(e, t) {
		var a;
		t.upgradeAttempts++;
		var o = Ue();
		if (o != null && o.parentNode) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = t;
			var l = new URL(o.src),
				v = document.createElement("script");
			l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), v.async = !0, c && (v.nonce = c), v.setAttribute("crossorigin", "anonymous"), v.src = l.toString(), o == null || (a = o.parentNode) === null || a === void 0 || a.replaceChild(v, o)
		}
	}

	function Or(e, t) {
		var a = e._pState;
		return a ? (t.isReady = a.isReady, t.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, t.lastWidgetIdx = a.lastWidgetIdx, t.scriptWasLoadedAsync = a.scriptWasLoadedAsync, t.upgradeAttempts = a.upgradeAttempts, t.upgradeCompletedCount = a.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = q(), t.watchCatInterval = null, t.watchCatSeq = a.watchCatSeq, t.widgetMap = a.widgetMap, !0) : !1
	}

	function At(e) {
		return P(["auto", "dark", "light"], e)
	}

	function Rt(e) {
		return P(["auto", "never"], e)
	}

	function It(e) {
		return e > 0 && e < 9e5
	}

	function Ot(e) {
		return e > 0 && e < 36e4
	}
	var jr = /^[0-9A-Za-z_-]{3,100}$/;

	function Cr(e) {
		return jr.test(e)
	}
	var qr = /^[a-z0-9_-]{0,32}$/i;

	function Ct(e) {
		return e === void 0 ? !0 : typeof e == "string" && qr.test(e)
	}
	var Gr = /^[a-z0-9_\-=]{0,255}$/i;

	function kt(e) {
		return e === void 0 ? !0 : typeof e == "string" && Gr.test(e)
	}

	function Mt(e) {
		return P([F.Normal, F.Compact, F.Invisible, F.Flexible], e)
	}

	function Nt(e) {
		return P(["auto", "manual", "never"], e)
	}

	function Lt(e) {
		return P(["auto", "manual", "never"], e)
	}
	var Xr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Ft(e) {
		return e === "auto" || Xr.test(e)
	}

	function Pt(e) {
		return P(["always", "execute", "interaction-only"], e)
	}

	function tt(e) {
		return P(["true", "false"], e)
	}

	function Dt(e) {
		return P(["render", "execute"], e)
	}
	var Yr = 900,
		Jr = 45,
		Qr = 50;

	function Kr(e) {
		e.watchCatSeq++;
		var t = !0,
			a = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), l; !(t = (l = c.next()).done); t = !0) {
				var v = De(l.value, 2),
					g = v[0],
					f = v[1],
					d;
				f.watchcat.seq = e.watchCatSeq, f.watchcat.lastAckedSeq === 0 && (f.watchcat.lastAckedSeq = e.watchCatSeq);
				var S = ee(g);
				if (!S || !f.shadow) {
					f.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(S, ", consider using turnstile.remove() to clean up a widget.")), f.watchcat.missingWidgetWarning = !0);
					continue
				}
				var x = f.shadow.querySelector("#".concat(S));
				if (!x) {
					f.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(S, ", consider using turnstile.remove() to clean up a widget.")), f.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(f.isComplete || f.isFailed || f.isResetting)) {
					var D = f.watchcat.seq - 1 - Jr,
						N = f.watchcat.lastAckedSeq < D,
						A = f.watchcat.seq - 1 - Qr,
						E = f.isOverrunning && f.watchcat.overrunBeginSeq !== 0 && f.watchcat.overrunBeginSeq < A;
					if ((f.isExecuting || !f.isInitialized || f.isInitialized && !f.isStale && !f.isExecuted) && f.watchcat.lastAckedSeq !== 0 && N || E) {
						var C;
						f.watchcat.lastAckedSeq = 0, f.watchcat.seq = 0, f.isExecuting = !1;
						var L = function(n, i) {
							console.log("Turnstile Widget seem to have ".concat(n, ": "), i)
						};
						L(N ? "hung" : "crashed", g);
						var O = N ? Xe : Ye,
							k;
						if ((C = e.msgHandler) === null || C === void 0 || C.call(e, {
								data: {
									code: O,
									event: "fail",
									rcV: (k = f.nextRcV) !== null && k !== void 0 ? k : $,
									source: j,
									widgetId: g
								}
							}), 0) var _;
						continue
					}(d = x.contentWindow) === null || d === void 0 || d.postMessage({
						event: "meow",
						seq: e.watchCatSeq,
						source: j,
						widgetId: g
					}, "*")
				}
			}
		} catch (n) {
			a = !0, o = n
		} finally {
			try {
				!t && c.return != null && c.return()
			} finally {
				if (a) throw o
			}
		}
	}

	function Vt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Kr(e)
		}, Yr))
	}

	function Ut(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && (clearInterval(e.watchCatInterval), e.watchCatInterval = null)
	}
	var ve = window,
		y = {
			apiVersion: 1,
			isReady: !1,
			isRecaptchaCompatibilityMode: !1,
			lastWidgetIdx: 0,
			scriptUrl: "undefined",
			scriptUrlParsed: void 0,
			scriptWasLoadedAsync: !1,
			turnstileLoadInitTimeTsMs: q(),
			upgradeAttempts: 0,
			upgradeCompletedCount: 0,
			watchCatInterval: null,
			watchCatSeq: 0,
			widgetMap: new Map
		};

	function Wt(e) {
		Lr(e, "")
	}

	function jt() {
		var e = [or, cr];
		y.isRecaptchaCompatibilityMode && e.push(lr), document.querySelectorAll(e.join(", ")).forEach(function(t) {
			return qt.render(t)
		})
	}
	var Gt = [];

	function kr() {
		y.isReady = !0;
		var e = !0,
			t = !1,
			a = void 0;
		try {
			for (var o = Gt[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var l = c.value;
				l()
			}
		} catch (v) {
			t = !0, a = v
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (t) throw a
			}
		}
	}

	function $r(e) {
		var t = y.widgetMap.get(e);
		if (!(t === void 0 || t.hasResponseParamEl)) {
			t.hasResponseParamEl = !0;
			var a, o = (a = t.params["response-field"]) !== null && a !== void 0 ? a : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var l;
				c.name = (l = t.params["response-field-name"]) !== null && l !== void 0 ? l : gt, c.id = "".concat(e, "_response"), t.wrapper.appendChild(c);
				var v;
				if (typeof t.params["response-field-name"] != "string" && Fr((v = t.params.sitekey) !== null && v !== void 0 ? v : "")) {
					var g = document.createElement("input");
					g.type = "hidden", g.name = yt, g.id = "".concat(e, "_legacy_response"), t.wrapper.appendChild(g)
				}
			}
			if (y.isRecaptchaCompatibilityMode) {
				var f = document.createElement("input");
				f.type = "hidden", f.name = ht, f.id = "".concat(e, "_g_response"), t.wrapper.appendChild(f)
			}
		}
	}

	function Lr(e, t) {
		$r(e);
		var a = document.getElementById("".concat(e, "_response"));
		a !== null && U(a, HTMLInputElement) && (a.value = t);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && U(o, HTMLInputElement) && (o.value = t), y.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && U(c, HTMLInputElement) && (c.value = t)
		}
	}

	function ot(e, t) {
		var a;
		return !!(!((a = t.kills) === null || a === void 0) && a.includes(e))
	}

	function Bt(e, t) {
		var a = t.params,
			o = a.size,
			c = o === void 0 ? "normal" : o,
			l = t.mode;
		switch (l) {
			case G.NonInteractive:
			case G.Managed:
				switch (e.style.opacity = "", e.style.position = "", e.style.left = "", e.style.top = "", e.style.visibility = "", e.style.pointerEvents = "", e.style.zIndex = "", c) {
					case F.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case F.Invisible:
						m('Invalid value for parameter "size", expected "'.concat(F.Compact, '", "').concat(F.Flexible, '", or "').concat(F.Normal, '", got "').concat(c, '"'), 2817);
					case F.Normal:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case F.Flexible:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break;
					default:
						break
				}
				break;
			case G.Invisible:
				ot("floating-invisible", t) ? (e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden") : (e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				m('Invalid value for parameter "mode", expected "'.concat(G.NonInteractive, '", "').concat(G.Managed, '" or "').concat(G.Invisible, '", got "').concat(l, '"'), 2818)
		}
	}

	function Mr(e) {
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"
	}

	function Zr(e, t) {
		var a = t.get("turnstile_iframe_alt");
		a && (e.title = a)
	}

	function ea(e) {
		return e.origin ? P(vr, e.origin) : !0
	}

	function Fr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function zt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}

	function ta() {
		if (typeof window.PerformanceObserver == "function") try {
			var e = Ue();
			if (!e) return;
			var t = e.src,
				a = !0,
				o = !1,
				c = void 0;
			try {
				for (var l = performance.getEntriesByType("resource")[Symbol.iterator](), v; !(a = (v = l.next()).done); a = !0) {
					var g = v.value;
					if (U(g, PerformanceResourceTiming) && g.name.includes(t)) return g
				}
			} catch (f) {
				o = !0, c = f
			} finally {
				try {
					!a && l.return != null && l.return()
				} finally {
					if (o) throw c
				}
			}
		} catch (f) {}
	}
	var qt = (function() {
		var e = function(n, i, r, u) {
				return C.apply(this, arguments)
			},
			t = function(n, i, r) {
				if (n.params.retry === Ee.Auto || r) {
					n.isExecuted && (n.msgQueue.push(de.Execute), n.isExecuted = !0, n.isExecuting = !0);
					var u, s = r ? 0 : 1e3 * 2 + ((u = n.params["retry-interval"]) !== null && u !== void 0 ? u : 0);
					n.retryTimeout = window.setTimeout(function() {
						var h = r ? X.CrashedRetry : X.FailureRetry;
						x(h, i)
					}, s)
				}
			},
			a = function(n, i, r) {
				var u;
				n.response === void 0 && m("[Internal Error] Widget was completed but no response was given", 1362), n.isExecuting = !1, n.isComplete = !0, Lr(i, n.response), (u = n.cbSuccess) === null || u === void 0 || u.call(n, n.response, r)
			},
			o = function(n) {
				if (!n) return [];
				for (var i = n.attributes, r = i.length, u = new Array(r), s = 0; s < r; s++) u[s] = i[s].name;
				return u
			},
			c = function() {
				for (var n = {}, i = [], r = document.getElementsByTagName("*"), u = 0; u < r.length && i.length < 50; u++) {
					var s = r[u].tagName.toLowerCase();
					s.indexOf("-") !== -1 && !n[s] && (n[s] = !0, i.push(s))
				}
				return i
			},
			l = function(n, i, r) {
				if (n.rcV = i, 0) var u
			},
			v = function() {
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
					for (var s = y.widgetMap[Symbol.iterator](), h; !(i = (h = s.next()).done); i = !0) {
						var w = De(h.value, 2),
							T = w[0],
							R = w[1];
						if (R.wrapper.parentElement === n) return T
					}
				} catch (M) {
					r = !0, u = M
				} finally {
					try {
						!i && s.return != null && s.return()
					} finally {
						if (r) throw u
					}
				}
				return null
			},
			f = function(n, i, r) {
				for (; n.msgQueue.length > 0;) {
					var u, s = n.msgQueue.pop();
					(u = r.contentWindow) === null || u === void 0 || u.postMessage({
						event: s,
						source: j,
						widgetId: i
					}, "*")
				}
			},
			d = function(n, i) {
				if (i) {
					var r = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						u = [],
						s = !0,
						h = !1,
						w = void 0;
					try {
						for (var T = r[Symbol.iterator](), R; !(s = (R = T.next()).done); s = !0) {
							var M = R.value;
							i[M] && i[M] !== n.params[M] && u.push(M)
						}
					} catch (B) {
						h = !0, w = B
					} finally {
						try {
							!s && T.return != null && T.return()
						} finally {
							if (h) throw w
						}
					}
					u.length > 0 && m("The parameters ".concat(r.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(u.join(",")), 3618), i.action && (Ct(i.action) || m('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), n.action = i.action), i.cData && (kt(i.cData) || m('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), n.cData = i.cData), i["after-interactive-callback"] && (n.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (n.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (n.cbSuccess = i.callback), i["expired-callback"] && (n.cbExpired = i["expired-callback"]), i["timeout-callback"] && (n.cbTimeout = i["timeout-callback"]), i["error-callback"] && (n.cbError = i["error-callback"]), i["unsupported-callback"] && (n.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (n.chlPageData = i.chlPageData)
				}
			},
			S = function(n) {
				x(X.Api, n)
			},
			x = function(n, i) {
				var r = O(i);
				r || m("Nothing to reset found for provided container", 3329);
				var u = y.widgetMap.get(r);
				if (u) {
					var s;
					u.isResetting = !0, u.response = void 0, u.mode = void 0, u.msgQueue = [], u.isComplete = !1, u.isExecuting = !1, u.isExpired = !1, u.isFailed = !1, u.isInitialized = !1, u.isStale = !1, u.isOverrunning = !1, u.watchcat.overrunBeginSeq = 0, u.watchcat.lastAckedSeq = 0, u.watchcat.seq = 0, u.params.execution === Te.Render && (u.msgQueue.push(de.Execute), u.isExecuted = !0, u.isExecuting = !0);
					var h = ee(r),
						w = u.shadow.querySelector("#".concat(h));
					(!h || !w) && m("Widget ".concat(r, " to reset was not found."), 3330), u.params.appearance === Z.InteractionOnly && Mr(w), u.params.sitekey === null && m("Unexpected Error: Sitekey is null", 3347);
					var T = w.cloneNode(),
						R;
					T.src = wt(r, u.params.sitekey, u.params, (R = u.rcV) !== null && R !== void 0 ? R : $, !1, "b", n, y.scriptUrlParsed, mt(u)), (s = w.parentNode) === null || s === void 0 || s.replaceChild(T, w), Wt(h), u.retryTimeout && window.clearTimeout(u.retryTimeout)
				} else m("Widget ".concat(r, " to reset was not found."), 3331)
			},
			D = function(n) {
				var i = O(n),
					r = i ? y.widgetMap.get(i) : void 0;
				if (!i || !r) {
					b("Nothing to remove found for the provided container.");
					return
				}
				var u = ee(i),
					s = ["input#".concat(u, "_response"), "input#".concat(u, "_legacy_response"), "input#".concat(u, "_g_response")];
				document.querySelectorAll(s.join(", ")).forEach(function(h) {
					return h.remove()
				}), r.shadow.querySelectorAll(s.join(", ")).forEach(function(h) {
					return h.remove()
				}), r.wrapper.remove(), r.retryTimeout && window.clearTimeout(r.retryTimeout), y.widgetMap.delete(i), Ut(y)
			},
			N = function(n, i) {
				var r, u, s = q(),
					h;
				if (typeof n == "string") {
					var w;
					try {
						w = document.querySelector(n)
					} catch (Jt) {
						m('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(n, '"'), 3586)
					}
					w || m('Unable to find a container for "'.concat(n, '"'), 3585), h = w
				} else U(n, HTMLElement) ? h = n : m('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var T = !0,
					R = !1,
					M = void 0;
				try {
					for (var B = y.widgetMap.values()[Symbol.iterator](), ne; !(T = (ne = B.next()).done); T = !0) {
						var me = ne.value;
						if (h.contains(me.wrapper)) {
							b("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (Jt) {
					R = !0, M = Jt
				} finally {
					try {
						!T && B.return != null && B.return()
					} finally {
						if (R) throw M
					}
				}
				var z = zt();
				if (!z) return m("Turnstile cannot determine its page location", 3607);
				if (z.startsWith("file:")) return m("Turnstile cannot run in a file:// url", 3608);
				var ye = ra(h);
				if (ye) {
					var p = Object.assign(ye, i),
						ie = p.action,
						Re = p.cData,
						Ie = p.chlPageData,
						Y = p.sitekey,
						oe;
					p.theme = (oe = p.theme) !== null && oe !== void 0 ? oe : xe.Auto;
					var ce;
					p.retry = (ce = p.retry) !== null && ce !== void 0 ? ce : Ee.Auto;
					var ge;
					p.execution = (ge = p.execution) !== null && ge !== void 0 ? ge : Te.Render;
					var le;
					p.appearance = (le = p.appearance) !== null && le !== void 0 ? le : Z.Always;
					var Oe;
					p["retry-interval"] = Number((Oe = p["retry-interval"]) !== null && Oe !== void 0 ? Oe : ur);
					var ue;
					p["expiry-interval"] = Number((ue = p["expiry-interval"]) !== null && ue !== void 0 ? ue : (rr - ar) * 1e3);
					var Ce;
					p.size = (Ce = p.size) !== null && Ce !== void 0 ? Ce : F.Normal;
					var We = p.callback,
						ke = p["expired-callback"],
						Me = p["timeout-callback"],
						Be = p["after-interactive-callback"],
						Ne = p["before-interactive-callback"],
						K = p["error-callback"],
						Le = p["unsupported-callback"];
					typeof Y != "string" && m('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof Y == "undefined" ? "undefined" : W(Y), '"'), 3588), Cr(Y) || m('Invalid input for parameter "sitekey", got "'.concat(Y, '"'), 3589), Mt(p.size) || m('Invalid type for parameter "size", expected normal|compact, got "'.concat(p.size, '" ').concat(W(p.size)), 3590), At(p.theme) || m('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(p.theme, '" ').concat(W(p.theme)), 3591), Rt(p.retry) || m('Invalid type for parameter "retry", expected never|auto, got "'.concat(p.retry, '" ').concat(W(p.retry)), 3592), p.language || (p.language = "auto"), Ft(p.language) || (b('Invalid language value: "'.concat(p.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), p.language = "auto"), Pt(p.appearance) || m('Unknown appearance value: "'.concat(p.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), Dt(p.execution) || m('Unknown execution value: "'.concat(p.execution, ", expected either: 'render' or 'execute'."), 3601), It(p["retry-interval"]) || m('Invalid retry-interval value: "'.concat(p["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), Ot(p["expiry-interval"]) || m('Invalid expiry-interval value: "'.concat(p["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var Fe, se = (Fe = p["refresh-expired"]) !== null && Fe !== void 0 ? Fe : re.Auto;
					Nt(se) ? p["refresh-expired"] = se : m('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(se, '" ').concat(typeof se == "undefined" ? "undefined" : W(se)), 3603);
					var Pe, H = (Pe = p["refresh-timeout"]) !== null && Pe !== void 0 ? Pe : fe.Auto;
					Lt(H) ? p["refresh-timeout"] = H : m('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(H, '" ').concat(typeof H == "undefined" ? "undefined" : W(H)), 3603);
					var V = document.createElement("iframe"),
						te = document.createElement("div"),
						he = te.attachShadow({
							mode: "closed"
						});
					Ct(ie) || m('Invalid input for optional parameter "action", got "'.concat(ie, '"'), 3604), kt(Re) || m('Invalid input for optional parameter "cData", got "'.concat(Re, '"'), 3605);
					var J = v(),
						_e = ee(J);
					if (!(!J || !_e)) {
						var Xt = [],
							ct = p.execution === Te.Render;
						ct && Xt.push(de.Execute), y.lastWidgetIdx++;
						var Pr = {};
						y.widgetMap.set(J, pt(qe({
							action: ie,
							cbAfterInteractive: Be,
							cbBeforeInteractive: Ne,
							cbError: K,
							cbExpired: ke,
							cbSuccess: We,
							cbTimeout: Me,
							cbUnsupported: Le,
							cData: Re,
							chlPageData: Ie,
							hasResponseParamEl: !1,
							idx: y.lastWidgetIdx,
							isComplete: !1,
							isExecuted: ct,
							isExecuting: ct,
							isExpired: !1,
							isFailed: !1,
							isInitialized: !1,
							isResetting: !1,
							isStale: !1,
							msgQueue: Xt,
							params: p,
							rcV: $,
							watchcat: {
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0,
								seq: 0
							}
						}, Pr), {
							isOverrunning: !1,
							shadow: he,
							widgetInitStartTimeTsMs: 0,
							widgetParamsStartTimeTsMs: 0,
							widgetRenderEndTimeTsMs: 0,
							widgetRenderStartTimeTsMs: s,
							wrapper: te
						})), Vt(y);
						var lt = y.widgetMap.get(J);
						lt || m("Turnstile Initialization Error ", 3606), V.style.display = "none", V.style.border = "none", V.style.overflow = "hidden", V.setAttribute("src", wt(J, Y, p, $, !1, "b", X.New, y.scriptUrlParsed, mt(lt))), V.onerror = function() {
							if (K) {
								K == null || K(String(nr));
								return
							}
							m("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var Yt = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad"],
							ut;
						P((ut = (u = document.featurePolicy) === null || u === void 0 || (r = u.features) === null || r === void 0 ? void 0 : r.call(u)) !== null && ut !== void 0 ? ut : [], _t) && Yt.push(_t), V.setAttribute("allow", Yt.join("; ")), V.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), V.id = _e;
						var st;
						V.tabIndex = (st = p.tabindex) !== null && st !== void 0 ? st : 0, V.title = "Widget containing a Cloudflare security challenge", he.appendChild(V);
						var ft, Dr = (ft = p["response-field"]) !== null && ft !== void 0 ? ft : !0;
						if (Dr) {
							var ze = document.createElement("input");
							ze.type = "hidden";
							var dt;
							if (ze.name = (dt = p["response-field-name"]) !== null && dt !== void 0 ? dt : gt, ze.id = "".concat(_e, "_response"), te.appendChild(ze), typeof p["response-field-name"] != "string" && Fr(Y)) {
								var He = document.createElement("input");
								He.type = "hidden", He.name = yt, He.id = "".concat(_e, "_legacy_response"), te.appendChild(He)
							}
						}
						if (y.isRecaptchaCompatibilityMode) {
							var je = document.createElement("input");
							je.type = "hidden", je.name = ht, je.id = "".concat(_e, "_g_response"), te.appendChild(je)
						}
						return h.appendChild(te), lt.widgetRenderEndTimeTsMs = q(), _e
					}
				}
			},
			A = function() {
				var n, i = -1,
					r = !0,
					u = !1,
					s = void 0;
				try {
					for (var h = y.widgetMap[Symbol.iterator](), w; !(r = (w = h.next()).done); r = !0) {
						var T = De(w.value, 2),
							R = T[0],
							M = T[1];
						i < M.idx && (n = R, i = M.idx)
					}
				} catch (B) {
					u = !0, s = B
				} finally {
					try {
						!r && h.return != null && h.return()
					} finally {
						if (u) throw s
					}
				}
				return i === -1 && m("Could not find widget", 43778), n
			},
			E = ta();

		function C() {
			return C = Kt(function(_, n, i, r) {
				var u, s, h, w, T, R, M, B, ne, me;
				return Ge(this, function(z) {
					switch (z.label) {
						case 0:
							if (s = _.params.sitekey, h = zt(), !h) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(_, n, !1), [2];
							w = "h/".concat("b", "/"), T = new URL(h), R = "https", M = "", B = "".concat(R, "://").concat(T.host, "/cdn-cgi/challenge-platform/").concat(w, "rc/").concat(r).concat(M), z.label = 1;
						case 1:
							return z.trys.push([1, 3, , 4]), [4, fetch(B, {
								body: JSON.stringify({
									secondaryToken: i,
									sitekey: s
								}),
								headers: {
									"Content-Type": "application/json"
								},
								method: "POST",
								redirect: "manual"
							})];
						case 2:
							return ne = z.sent(), ne.status === 200 ? a(_, n, !0) : (b("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), a(_, n, !1)), [3, 4];
						case 3:
							return me = z.sent(), b("Error contacting Turnstile, aborting clearance redemption."), a(_, n, !1), [3, 4];
						case 4:
							return [2]
					}
				})
			}), C.apply(this, arguments)
		}
		var L = function(_) {
			var n = _.data;
			if (n.source === j) {
				if (!ea(_)) {
					b("Ignored message from wrong origin: ".concat(_.origin, "."));
					return
				}
				if (!(!n.widgetId || !y.widgetMap.has(n.widgetId))) {
					var i = ee(n.widgetId),
						r = y.widgetMap.get(n.widgetId);
					if (!(!i || !r)) switch (n.event) {
						case "init": {
							var u;
							r.widgetInitStartTimeTsMs = q(), r.kills = n.kills;
							var s = r.shadow.getElementById(i);
							s || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), r.mode = n.mode, r.nextRcV = n.nextRcV, r.mode === G.Invisible && r.params["refresh-expired"] === re.Manual && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat(re.Auto, "' or '").concat(re.Never, ".'")), r.mode !== G.Managed && r.params["refresh-timeout"] !== fe.Auto && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), r.params.appearance === Z.Always || r.isExecuting && r.params.appearance === Z.Execute ? Bt(s, r) : Mr(s), s.style.display = "";
							var h = r.shadow.querySelector("#".concat(i));
							h || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), (u = h.contentWindow) === null || u === void 0 || u.postMessage({
								event: "init",
								source: j,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "translationInit": {
							var w = r.shadow.getElementById(i);
							w || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var T = new Map;
							r.displayLanguage = n.displayLanguage, r.displayRtl = n.displayRtl, Object.keys(n.translationData).forEach(function(J) {
								T.set(J, n.translationData[J])
							}), Zr(w, T);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(r.params.language, " is not supported, falling back to: ").concat(n.fallback, ".")), r.displayLanguage = n.fallback;
							break
						}
						case "reject": {
							var R = r.shadow.getElementById(i);
							if (r.isExecuting = !1, R || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), n.reason === "unsupported_browser") {
								var M;
								(M = r.cbUnsupported) === null || M === void 0 || M.call(r)
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
							if (l(r, $, n.widgetId), r.response = n.token, n.scs && !ot("scs", r) && (r.scs = n.scs, r.params["session-continuity-persist"] && !ot("scs_persist", r))) {
								var B = r.params.sitekey;
								if (B) {
									var ne = "".concat(bt).concat(B);
									try {
										localStorage.setItem(ne, n.scs)
									} catch (J) {}
								}
							}
							n.sToken ? e(r, i, n.sToken, n.chlId) : a(r, i, !1);
							break
						}
						case "fail": {
							n.rcV && l(r, n.rcV, n.widgetId), n.cfChlOut && (r.cfChlOut = n.cfChlOut), n.cfChlOutS && (r.cfChlOutS = n.cfChlOutS), n.code && (r.errorCode = n.code), r.isExecuting = !1, r.isFailed = !0, r.isInitialized = !0, n.frMd && (r.frMd = n.frMd), Wt(i);
							var me = r.cbError,
								z = n.code === Xe || n.code === Ye;
							if (z) {
								var ye, p = r.shadow.querySelector("#".concat(i));
								p == null || (ye = p.contentWindow) === null || ye === void 0 || ye.postMessage({
									event: "forceFail",
									source: j,
									widgetId: n.widgetId
								}, "*")
							}
							if (me) {
								var ie;
								me(String((ie = n.code) !== null && ie !== void 0 ? ie : ir)) ? r.params.retry === Ee.Auto && !r.isResetting && t(r, i, z) : (n.code && b("Error: ".concat(n.code, ".")), t(r, i, z))
							} else n.code ? (t(r, i, z), m("Error: ".concat(n.code), 3076)) : t(r, i, !1);
							break
						}
						case "feedbackInit": {
							var Re = r.wrapper.querySelector("#".concat(i, "-fr"));
							if (Re) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							Tt(i, r, n.feedbackOrigin, y.scriptUrlParsed);
							break
						}
						case "requestFeedbackData": {
							var Ie, Y = r.shadow.querySelector("#".concat(i));
							Y || m("Received state for an unknown widget: #".concat(i, " / ").concat(n.widgetId), 3078), (Ie = Y.contentWindow) === null || Ie === void 0 || Ie.postMessage({
								event: "requestTurnstileResults",
								source: j,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "turnstileResults": {
							var oe, ce, ge = (oe = r.wrapper.parentNode) === null || oe === void 0 ? void 0 : oe.querySelector("#".concat(i, "-fr"));
							ge || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), (ce = ge.contentWindow) === null || ce === void 0 || ce.postMessage({
								cfChlOut: r.cfChlOut,
								cfChlOutS: r.cfChlOutS,
								errorCode: r.errorCode,
								event: "feedbackData",
								frMd: r.frMd || n.frMd,
								mode: n.mode,
								rayId: n.rayId,
								rcV: n.rcV,
								sitekey: n.sitekey,
								source: j,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var le, Oe = (le = r.wrapper.parentNode) === null || le === void 0 ? void 0 : le.querySelector("#".concat(i, "-fr"));
							Oe || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), wr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ue, Ce = n.token;
							r.isExpired = !0, (ue = r.cbExpired) === null || ue === void 0 || ue.call(r, Ce), r.params["refresh-expired"] === re.Auto && !r.isResetting && x(X.AutoExpire, i);
							break
						}
						case "interactiveTimeout": {
							l(r, $, n.widgetId), Wt(i);
							var We = r.cbTimeout;
							if (We ? We() : r.params["refresh-timeout"] === fe.Never && !r.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), r.params["refresh-timeout"] === fe.Auto && !r.isResetting) {
								var ke = r.cbAfterInteractive;
								ke == null || ke(), x(X.AutoTimeout, i)
							}
							break
						}
						case "refreshRequest": {
							l(r, $, n.widgetId), x(X.ManualRefresh, i);
							break
						}
						case "reloadRequest": {
							l(r, n.nextRcV, n.widgetId), x(n.trigger, i);
							break
						}
						case "interactiveBegin": {
							var Me, Be = r.shadow.getElementById(i);
							Be || m("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (Me = r.cbBeforeInteractive) === null || Me === void 0 || Me.call(r), r.params.appearance === Z.InteractionOnly && Bt(Be, r);
							break
						}
						case "interactiveEnd": {
							var Ne;
							(Ne = r.cbAfterInteractive) === null || Ne === void 0 || Ne.call(r);
							break
						}
						case "widgetStale": {
							r.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var K;
							r.widgetParamsStartTimeTsMs = q();
							var Le = r.shadow.querySelector("#".concat(i));
							Le || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), r.isResetting = !1;
							var Fe = {},
								se = q(),
								Pe = {
									"d.cT": c(),
									"ht.atrs": o(document.body.parentNode),
									"pg.ref": document.referrer,
									pi: {
										ffp: Sr(r.wrapper),
										ii: window.self !== window.top,
										lH: window.location.href,
										mL: document.getElementsByTagName("meta").length,
										pfp: Ar(document, sr, fr),
										sL: document.scripts.length,
										sR: r.wrapper.shadowRoot === null,
										ssL: document.styleSheets.length,
										t: "".concat(document.title.length, "|").concat(Rr(document.title)),
										tL: document.getElementsByTagName("*").length,
										wp: Tr(r.wrapper),
										xp: Er(r.wrapper).slice(0, dr)
									},
									"w.iW": window.innerWidth
								},
								H = r.scs;
							if (!H && r.params["session-continuity-persist"] && !ot("scs_persist", r)) {
								var V = r.params.sitekey;
								if (V) {
									var te = "".concat(bt).concat(V);
									try {
										var he;
										H = (he = localStorage.getItem(te)) !== null && he !== void 0 ? he : void 0
									} catch (J) {}
								}
							}
							H && H.length > pr && (H = void 0), (K = Le.contentWindow) === null || K === void 0 || K.postMessage(qe({
								action: r.action,
								apiJsResourceTiming: E ? JSON.parse(JSON.stringify(E)) : void 0,
								appearance: r.params.appearance,
								au: y.scriptUrl,
								cData: r.cData,
								ch: "625261456364",
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
								scs: H,
								source: j,
								timeExtraParamsMs: q() - r.widgetRenderStartTimeTsMs,
								timeInitMs: r.widgetInitStartTimeTsMs - r.widgetRenderEndTimeTsMs,
								timeLoadInitMs: q() - y.turnstileLoadInitTimeTsMs,
								timeParamsMs: r.widgetParamsStartTimeTsMs - r.widgetInitStartTimeTsMs,
								timeRenderMs: r.widgetRenderEndTimeTsMs - r.widgetRenderStartTimeTsMs,
								timeTiefMs: q() - se,
								upgradeAttempts: y.upgradeAttempts,
								upgradeCompletedCount: y.upgradeCompletedCount,
								url: zt(),
								widgetId: n.widgetId,
								wPr: Pe
							}, Fe), "*"), f(r, n.widgetId, Le), r.isInitialized = !0;
							break
						}
						default:
							break
					}
				}
			}
		};
		y.msgHandler = L, window.addEventListener("message", L);

		function O(_) {
			if (typeof _ == "string") {
				var n = Ze(_);
				if (n && y.widgetMap.has(n)) return n;
				if (y.widgetMap.has(_)) return _;
				try {
					var i = document.querySelector(_);
					return i ? O(i) : null
				} catch (u) {
					return null
				}
			}
			if (U(_, Element)) return g(_);
			if (_ || y.widgetMap.size === 0) return null;
			var r;
			return (r = y.widgetMap.keys().next().value) !== null && r !== void 0 ? r : null
		}
		var k = {};
		return pt(qe({}, k), {
			_private: {
				showFeedback: function(n) {
					var i = O(n);
					if (i) {
						var r = ee(i);
						if (r) {
							var u = y.widgetMap.get(i);
							u && Tt(r, u, et.Custom, y.scriptUrlParsed)
						}
					}
				}
			},
			execute: function(n, i) {
				var r = O(n);
				if (!r) {
					i === void 0 && m("Please provide 2 parameters to execute: container and parameters", 43521);
					var u = N(n, i);
					u || m("Failed to render widget", 43522), r = u
				}
				var s = y.widgetMap.get(r);
				if (s) {
					d(s, i);
					var h = ee(r);
					if (s.isExecuting) {
						b("Call to execute() on a widget that is already executing (".concat(h, "), consider using reset() before execute()."));
						return
					}
					if (s.isExecuting = !0, s.response) {
						var w;
						s.isExecuting = !1, b("Call to execute() on a widget that was already executed (".concat(h, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (w = s.cbSuccess) === null || w === void 0 || w.call(s, s.response, !1);
						return
					}
					s.isExpired && b("Call to execute on a expired-widget (".concat(h, "), consider using reset() before.")), s.isStale && (x(X.StaleExecute, h), s.isExecuting = !0), s.msgQueue.push(de.Execute), s.isExecuted = !0;
					var T = s.shadow.querySelector("#".concat(h));
					if (T || (s.isExecuting = !1, m("Widget ".concat(h, " to execute was not found"), 43522)), s.isResetting) return;
					if (s.isInitialized && f(s, r, T), s.isInitialized && s.params.appearance === Z.Execute && Bt(T, s), s.isExecuting) {
						var R;
						(R = T.contentWindow) === null || R === void 0 || R.postMessage({
							event: "execute",
							source: j,
							widgetId: r
						}, "*")
					}
				}
			},
			getResponse: function(n) {
				var i;
				if (typeof n == "undefined") {
					var r = A();
					if (r) {
						var u = y.widgetMap.get(r);
						return u != null && u.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), u == null ? void 0 : u.response
					}
					m("Could not find a widget", 43794)
				}
				var s = O(n);
				return s || m("Could not find widget for provided container", 43778), (i = y.widgetMap.get(s)) === null || i === void 0 ? void 0 : i.response
			},
			implicitRender: jt,
			isExpired: function(n) {
				var i;
				if (typeof n == "undefined") {
					var r = A();
					if (r) {
						var u, s;
						return (s = (u = y.widgetMap.get(r)) === null || u === void 0 ? void 0 : u.isExpired) !== null && s !== void 0 ? s : !1
					}
					m("Could not find a widget", 43794)
				}
				var h = O(n);
				h || m("Could not find widget for provided container", 43778);
				var w;
				return (w = (i = y.widgetMap.get(h)) === null || i === void 0 ? void 0 : i.isExpired) !== null && w !== void 0 ? w : !1
			},
			ready: function(n) {
				if (y.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), m("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof n != "function" && m('turnstile.ready() expected a "function" argument, got "'.concat(typeof n == "undefined" ? "undefined" : W(n), '"'), 3841), y.isReady) {
					n();
					return
				}
				Gt.push(n)
			},
			remove: D,
			render: N,
			reset: S
		})
	})();

	function ra(e) {
		var t = e.getAttribute("data-sitekey"),
			a = {
				sitekey: t
			},
			o = e.getAttribute("data-tabindex");
		o && (a.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (At(c) ? a.theme = c : b('Unknown data-theme value: "'.concat(c, '".')));
		var l = e.getAttribute("data-size");
		if (l && (Mt(l) ? a.size = l : b('Unknown data-size value: "'.concat(l, '".'))), 0) var v;
		var g = e.getAttribute("data-action");
		typeof g == "string" && (a.action = g);
		var f = e.getAttribute("data-cdata");
		typeof f == "string" && (a.cData = f);
		var d = e.getAttribute("data-retry");
		d && (Rt(d) ? a.retry = d : b('Invalid data-retry value: "'.concat(d, ", expected either 'never' or 'auto'\".")));
		var S = e.getAttribute("data-retry-interval");
		if (S) {
			var x = Number.parseInt(S, 10);
			It(x) ? a["retry-interval"] = x : b('Invalid data-retry-interval value: "'.concat(S, ', expected an integer value > 0 and < 900000".'))
		}
		var D = e.getAttribute("data-expiry-interval");
		if (D) {
			var N = Number.parseInt(D, 10);
			Ot(N) ? a["expiry-interval"] = N : b('Invalid data-expiry-interval value: "'.concat(N, ', expected an integer value > 0 and < 360000".'))
		}
		var A = e.getAttribute("data-refresh-expired");
		A && (Nt(A) ? a["refresh-expired"] = A : b('Unknown data-refresh-expired value: "'.concat(A, ", expected either: 'never', 'auto' or 'manual'.")));
		var E = e.getAttribute("data-refresh-timeout");
		E && (Lt(E) ? a["refresh-timeout"] = E : b('Unknown data-refresh-timeout value: "'.concat(E, ", expected either: 'never', 'auto' or 'manual'.")));
		var C = e.getAttribute("data-language");
		C && (Ft(C) ? a.language = C : b('Invalid data-language value: "'.concat(C, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function L(w) {
			var T = e.getAttribute(w),
				R = T ? ve[T] : void 0;
			return typeof R == "function" ? R : void 0
		}
		var O = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		O.forEach(function(w) {
			Object.assign(a, be({}, w, L("data-".concat(w))))
		});
		var k = e.getAttribute("data-feedback-enabled");
		k ? (tt(k) || b('Invalid data-feedback-enabled value: "'.concat(k, ", expected either: 'true' or 'false'. Value is ignored.")), a["feedback-enabled"] = k === "true") : a["feedback-enabled"] = !0;
		var _, n = (_ = e.getAttribute("data-response-field")) !== null && _ !== void 0 ? _ : "true";
		a["response-field"] = n === "true";
		var i = e.getAttribute("data-response-field-name");
		i && (a["response-field-name"] = i);
		var r = e.getAttribute("data-execution");
		r && (Dt(r) ? a.execution = r : b('Unknown data-execution value: "'.concat(r, ", expected either: 'render' or 'execute'.")));
		var u = e.getAttribute("data-appearance");
		u && (Pt(u) ? a.appearance = u : b('Unknown data-appearance value: "'.concat(u, ", expected either: 'always', 'execute', or 'interaction-only'.")));
		var s = e.getAttribute("data-offlabel-show-privacy");
		s && (tt(s) || b('Invalid data-offlabel-show-privacy value: "'.concat(s, '", expected "true" or "false".')), a["offlabel-show-privacy"] = s === "true");
		var h = e.getAttribute("data-offlabel-show-help");
		return h && (tt(h) || b('Invalid data-offlabel-show-help value: "'.concat(h, '", expected "true" or "false".')), a["offlabel-show-help"] = h === "true"), a
	}

	function aa() {
		var e = !0;
		Ut(y, e), y.msgHandler && window.removeEventListener("message", y.msgHandler), Ir(window.turnstile, y)
	}
	Se = !1, I = xr(), y.scriptWasLoadedAsync = (rt = I == null ? void 0 : I.loadedAsync) !== null && rt !== void 0 ? rt : !1, y.scriptUrl = (at = I == null ? void 0 : I.src) !== null && at !== void 0 ? at : "undefined", y.scriptUrlParsed = I == null ? void 0 : I.url, I != null && I.params && (Ae = I.params.get("compat"), (Ae == null ? void 0 : Ae.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled.") : (b("Compatibility layer enabled."), y.isRecaptchaCompatibilityMode = !0, window.grecaptcha = qt) : Ae !== null && b('Unknown value for api.js?compat: "'.concat(Ae, '", ignoring.')), I.params.forEach(function(e, t) {
		P(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || b('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), Se = I.params.get("_upgrade") === "true", Q = I.params.get("onload"), Q && !Se && setTimeout(function() {
		typeof ve[Q] == "function" ? ve[Q]() : (b("Unable to find onload callback '".concat(Q, "' immediately after loading, expected 'function', got '").concat(W(ve[Q]), "'.")), setTimeout(function() {
			typeof ve[Q] == "function" ? ve[Q]() : b("Unable to find onload callback '".concat(Q, "' after 1 second, expected 'function', got '").concat(W(ve[Q]), "'."))
		}, 1e3))
	}, 0)), Ht = "turnstile" in window, Ht && !Se ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Ht && Se && (Or(window.turnstile, y), Vt(y), (I == null || (nt = I.params) === null || nt === void 0 ? void 0 : nt.get("render")) !== "explicit" && setTimeout(jt, 0)), window.turnstile = qt, Se || ((I == null || (it = I.params) === null || it === void 0 ? void 0 : it.get("render")) !== "explicit" && Gt.push(jt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(kr, 0) : window.addEventListener("DOMContentLoaded", kr))), Nr = 10800 * 1e3, window.setTimeout(aa, Nr);
	var Se, I, rt, at, Ae, Q, Ht, nt, it, Nr;
})();