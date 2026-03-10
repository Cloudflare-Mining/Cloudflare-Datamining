"use strict";
(function() {
	function Yt(e, t, n, o, c, l, v) {
		try {
			var y = e[l](v),
				d = y.value
		} catch (f) {
			n(f);
			return
		}
		y.done ? t(d) : Promise.resolve(d).then(o, c)
	}

	function Qt(e) {
		return function() {
			var t = this,
				n = arguments;
			return new Promise(function(o, c) {
				var l = e.apply(t, n);

				function v(d) {
					Yt(l, o, c, v, y, "next", d)
				}

				function y(d) {
					Yt(l, o, c, v, y, "throw", d)
				}
				v(void 0)
			})
		}
	}

	function V(e, t) {
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : V(e, t)
	}

	function je(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function qe(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] != null ? arguments[t] : {},
				o = Object.keys(n);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(c) {
				return Object.getOwnPropertyDescriptor(n, c).enumerable
			}))), o.forEach(function(c) {
				je(e, c, n[c])
			})
		}
		return e
	}

	function Dr(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			t && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), n.push.apply(n, o)
		}
		return n
	}

	function dt(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Dr(Object(t)).forEach(function(n) {
			Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
		}), e
	}

	function Jt(e) {
		if (Array.isArray(e)) return e
	}

	function Kt(e, t) {
		var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var o = [],
				c = !0,
				l = !1,
				v, y;
			try {
				for (n = n.call(e); !(c = (v = n.next()).done) && (o.push(v.value), !(t && o.length === t)); c = !0);
			} catch (d) {
				l = !0, y = d
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

	function $t() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function ft(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
		return o
	}

	function Zt(e, t) {
		if (e) {
			if (typeof e == "string") return ft(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(n);
			if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ft(e, t)
		}
	}

	function Fe(e, t) {
		return Jt(e) || Kt(e, t) || Zt(e, t) || $t()
	}

	function W(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function He(e, t) {
		var n = {
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
			next: y(0),
			throw: y(1),
			return: y(2)
		}, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
			return this
		}), v;

		function y(f) {
			return function(E) {
				return d([f, E])
			}
		}

		function d(f) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; v && (v = 0, f[0] && (n = 0)), n;) try {
				if (o = 1, c && (l = f[0] & 2 ? c.return : f[0] ? c.throw || ((l = c.return) && l.call(c), 0) : c.next) && !(l = l.call(c, f[1])).done) return l;
				switch (c = 0, l && (f = [f[0] & 2, l.value]), f[0]) {
					case 0:
					case 1:
						l = f;
						break;
					case 4:
						return n.label++, {
							value: f[1],
							done: !1
						};
					case 5:
						n.label++, c = f[1], f = [0];
						continue;
					case 7:
						f = n.ops.pop(), n.trys.pop();
						continue;
					default:
						if (l = n.trys, !(l = l.length > 0 && l[l.length - 1]) && (f[0] === 6 || f[0] === 2)) {
							n = 0;
							continue
						}
						if (f[0] === 3 && (!l || f[1] > l[0] && f[1] < l[3])) {
							n.label = f[1];
							break
						}
						if (f[0] === 6 && n.label < l[1]) {
							n.label = l[1], l = f;
							break
						}
						if (l && n.label < l[2]) {
							n.label = l[2], n.ops.push(f);
							break
						}
						l[2] && n.ops.pop(), n.trys.pop();
						continue
				}
				f = t.call(e, n)
			} catch (E) {
				f = [6, E], c = 0
			} finally {
				o = l = 0
			}
			if (f[0] & 5) throw f[1];
			return {
				value: f[0] ? f[1] : void 0,
				done: !0
			}
		}
	}
	var er = 300,
		tr = 10,
		rr = 200500,
		nr = 300020,
		Ge = 300030,
		Xe = 300031;

	function pt(e) {
		var t = new URLSearchParams;
		if (e.params.botnet && t.set("botnet", "true"), e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearanceLevel !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearanceLevel), e.params._debugSitekeyOverrides.offlabelShowPrivacy && e.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default" && t.set("offlabel_show_privacy", e.params._debugSitekeyOverrides.offlabelShowPrivacy), e.params._debugSitekeyOverrides.offlabelShowTerms && e.params._debugSitekeyOverrides.offlabelShowTerms !== "default" && t.set("offlabel_show_terms", e.params._debugSitekeyOverrides.offlabelShowTerms)), window.__cfDebugTurnstileOutcome && t.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome)), !(t.size === 0 || t.toString() === "")) return t.toString()
	}
	var Ye = "cf-chl-widget-",
		j = "cloudflare-challenge",
		ar = ".cf-turnstile",
		ir = ".cf-challenge",
		or = ".g-recaptcha",
		vt = "cf_challenge_response",
		mt = "cf-turnstile-response",
		gt = "g-recaptcha-response",
		cr = 8e3,
		yt = "private-token",
		ur = 3,
		lr = 500,
		sr = 500,
		$ = "",
		ht = "_cftscs_",
		dr = 512;
	var G;
	(function(e) {
		e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible"
	})(G || (G = {}));
	var L;
	(function(e) {
		e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible"
	})(L || (L = {}));
	var _e;
	(function(e) {
		e.Auto = "auto", e.Light = "light", e.Dark = "dark"
	})(_e || (_e = {}));
	var be;
	(function(e) {
		e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain"
	})(be || (be = {}));
	var xe;
	(function(e) {
		e.Never = "never", e.Auto = "auto"
	})(xe || (xe = {}));
	var re;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(re || (re = {}));
	var de;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(de || (de = {}));
	var Z;
	(function(e) {
		e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only"
	})(Z || (Z = {}));
	var we;
	(function(e) {
		e.Render = "render", e.Execute = "execute"
	})(we || (we = {}));
	var fe;
	(function(e) {
		e.Execute = "execute"
	})(fe || (fe = {}));
	var X;
	(function(e) {
		e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun"
	})(X || (X = {}));

	function F(e, t) {
		return e.indexOf(t) !== -1
	}
	var Vr = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Wr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		fr = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];

	function _t(e, t, n) {
		var o = "https://challenges.cloudflare.com",
			c, l = (c = n == null ? void 0 : n.origin) !== null && c !== void 0 ? c : o;
		if (t) {
			var v;
			return (v = e["base-url"]) !== null && v !== void 0 ? v : l
		}
		return l
	}

	function bt(e, t, n, o, c, l, v, y, d) {
		var f = _t(n, c, y),
			E = l ? "h/".concat(l, "/") : "",
			x = d ? "&".concat(d) : "",
			H = n["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(f, "/cdn-cgi/challenge-platform/").concat(E, "turnstile/f/ov2/av0/rch").concat(o, "/").concat(e, "/").concat(t, "/").concat(n.theme, "/").concat(H, "/").concat(v, "/").concat(n.size, "?lang=").concat(n.language).concat(x)
	}
	var xt = function(e) {
			var t, n, o = window.innerWidth < 400,
				c = e.state !== be.FailureFeedbackCode && (e.state === be.FailureFeedback || e.state === be.FailureHavingTroubles || !e.errorCode),
				l, v = F(Vr, (l = (t = e.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && l !== void 0 ? l : "nonexistent"),
				y, d = F(Wr, (y = (n = e.displayLanguage) === null || n === void 0 ? void 0 : n.toLowerCase()) !== null && y !== void 0 ? y : "nonexistent");
			return o ? Ur({
				isModeratelyVerbose: d,
				isSmallerFeedback: c,
				isVerboseLanguage: v
			}) : c && v ? "680px" : c && d ? "670px" : c ? "650px" : v ? "690px" : "680px"
		},
		Ur = function(e) {
			var t = e.isVerboseLanguage,
				n = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return n && t ? "660px" : n && o ? "620px" : n ? "600px" : t ? "770px" : o ? "740px" : "730px"
		};

	function Qe(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function pr(e, t) {
		if (!V(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function ne(e, t) {
		return ne = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, ne(e, t)
	}

	function vr(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && ne(e, t)
	}

	function Je() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function Pe(e, t, n) {
		return Je() ? Pe = Reflect.construct : Pe = function(c, l, v) {
			var y = [null];
			y.push.apply(y, l);
			var d = Function.bind.apply(c, y),
				f = new d;
			return v && ne(f, v.prototype), f
		}, Pe.apply(null, arguments)
	}

	function pe(e) {
		return pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
			return n.__proto__ || Object.getPrototypeOf(n)
		}, pe(e)
	}

	function mr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Ke(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return Ke = function(o) {
			if (o === null || !mr(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(o)) return t.get(o);
				t.set(o, c)
			}

			function c() {
				return Pe(o, arguments, pe(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), ne(c, o)
		}, Ke(e)
	}

	function gr(e, t) {
		return t && (W(t) === "object" || typeof t == "function") ? t : Qe(e)
	}

	function yr(e) {
		var t = Je();
		return function() {
			var o = pe(e),
				c;
			if (t) {
				var l = pe(this).constructor;
				c = Reflect.construct(o, arguments, l)
			} else c = o.apply(this, arguments);
			return gr(this, c)
		}
	}
	var hr = (function(e) {
		"use strict";
		vr(n, e);
		var t = yr(n);

		function n(o, c) {
			pr(this, n);
			var l;
			return l = t.call(this, o), je(Qe(l), "code", void 0), l.name = "TurnstileError", l.code = c, l
		}
		return n
	})(Ke(Error));

	function m(e, t) {
		var n = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new hr(n, t)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function $e(e) {
		return e.startsWith(Ye) ? e.substring(Ye.length) : null
	}

	function ee(e) {
		return "".concat(Ye).concat(e)
	}

	function De() {
		var e = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/,
			t = document.currentScript;
		if (V(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var n = document.querySelectorAll("script"), o = 0, c; c = n[o]; o++)
			if (V(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function _r() {
		var e = De();
		e || m("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			n;
		try {
			n = new URL(t)
		} catch (l) {
			m("Could not parse Turnstile script tag URL", 43777)
		}
		var o = {
			loadedAsync: !1,
			params: new URLSearchParams,
			src: t,
			url: n
		};
		(e.async || e.defer) && (o.loadedAsync = !0);
		var c = t.split("?");
		return c.length > 1 && (o.params = new URLSearchParams(c[1])), o
	}

	function q() {
		return Date.now()
	}
	var wt = function(e, t, n, o) {
			var c = _t(t.params, !1, o),
				l = "h/".concat("b", "/"),
				v, y, d = "".concat(c, "/cdn-cgi/challenge-platform/").concat(l, "feedback-reports/").concat($e(e), "/").concat(t.displayLanguage, "/").concat((y = t.params.theme) !== null && y !== void 0 ? y : t.theme, "/").concat(n);
			if (window.top !== window.self) {
				window.open(d, "_blank", "noopener,noreferrer");
				return
			}
			t.wrapper.parentNode || m("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var f = document.createElement("div");
			f.style.position = "fixed", f.style.zIndex = "2147483646", f.style.width = "100vw", f.style.height = "100vh", f.style.top = "0", f.style.left = "0", f.style.transformOrigin = "center center", f.style.overflowX = "hidden", f.style.overflowY = "auto", f.style.background = "rgba(0,0,0,0.4)";
			var E = document.createElement("div");
			E.className = "cf-wrapper-turnstile-feedback", E.style.display = "table-cell", E.style.verticalAlign = "middle", E.style.width = "100vw", E.style.height = "100vh";
			var x = document.createElement("div");
			x.className = "cf-turnstile-feedback", x.id = "cf-fr-id", x.style.width = "100vw", x.style.maxWidth = "500px", x.style.height = xt(t), x.style.position = "relative", x.style.zIndex = "2147483647", x.style.backgroundColor = "#ffffff", x.style.borderRadius = "5px", x.style.left = "0px", x.style.top = "0px", x.style.overflow = "hidden", x.style.margin = "0px auto";
			var H = function() {
					x.style.height = xt(t)
				},
				P = function() {
					var k;
					window.removeEventListener("resize", H), (k = f.parentNode) === null || k === void 0 || k.removeChild(f)
				},
				C = document.createElement("iframe");
			C.id = "".concat(e, "-fr"), C.setAttribute("src", d), C.setAttribute("allow", "cross-origin-isolated; fullscreen"), C.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), C.setAttribute("scrolling", "yes"), C.style.borderWidth = "0px", C.style.width = "100%", C.style.height = "100%", C.style.overflow = "auto";
			var T = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			T.setAttribute("tabindex", "0"), T.setAttribute("role", "img"), T.setAttribute("aria-label", "Close button icon"), T.style.position = "absolute", T.style.width = "26px", T.style.height = "26px", T.style.zIndex = "2147483647", T.style.cursor = "pointer", t.displayRtl ? T.style.left = "24px" : T.style.right = "24px", T.style.top = "24px", T.setAttribute("width", "20"), T.setAttribute("height", "20"), T.addEventListener("click", function(k) {
				k.stopPropagation(), P()
			}), T.addEventListener("keydown", function(k) {
				(k.key === "Enter" || k.key === " ") && (k.stopPropagation(), P())
			});
			var O = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			O.setAttribute("ry", "12"), O.setAttribute("rx", "12"), O.setAttribute("cy", "12"), O.setAttribute("cx", "12"), O.setAttribute("fill", "none"), O.setAttribute("stroke-width", "0"), T.appendChild(O);
			var M = document.createElementNS("http://www.w3.org/2000/svg", "line");
			M.setAttribute("stroke-width", "1"), M.setAttribute("fill", "none"), M.setAttribute("x1", "6"), M.setAttribute("x2", "18"), M.setAttribute("y1", "18"), M.setAttribute("y2", "5");
			var I = document.createElementNS("http://www.w3.org/2000/svg", "line");
			I.setAttribute("stroke-width", "1"), I.setAttribute("fill", "none"), I.setAttribute("x1", "6"), I.setAttribute("x2", "18"), I.setAttribute("y1", "5"), I.setAttribute("y2", "18"), t.theme === _e.Light ? (M.setAttribute("stroke", "#0A0A0A"), I.setAttribute("stroke", "#0A0A0A")) : (M.setAttribute("stroke", "#F2F2F2"), I.setAttribute("stroke", "#F2F2F2")), T.appendChild(M), T.appendChild(I), x.appendChild(C), x.appendChild(T), E.appendChild(x), f.appendChild(E), f.addEventListener("click", P), t.wrapper.parentNode.appendChild(f), window.addEventListener("resize", H)
		},
		br = function(e) {
			var t, n, o, c;
			(c = document.getElementById(e)) === null || c === void 0 || (o = c.parentElement) === null || o === void 0 || (n = o.parentElement) === null || n === void 0 || (t = n.parentElement) === null || t === void 0 || t.remove()
		};
	var Ze;
	(function(e) {
		e.Failure = "failure", e.Verifying = "verifying", e.Overruning = "overrunning", e.Custom = "custom", e.TimeMismatch = "timemismatch", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain"
	})(Ze || (Ze = {}));
	var Et = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > t ? e.substring(0, t) : e
	};

	function xr(e) {
		if (!e) return "-";
		var t = function(n, o) {
			if (!n || n.tagName === "BODY") return o;
			for (var c = 1, l = n.previousElementSibling; l;) l.tagName === n.tagName && c++, l = l.previousElementSibling;
			var v = Et(n.tagName.toLowerCase()),
				y = "".concat(v, "[").concat(c, "]");
			return t(n.parentNode, "/".concat(y).concat(o))
		};
		return t(e, "")
	}

	function wr(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var Br = {
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

	function Er(e) {
		if (!e) return "";
		var t = e.closest("form");
		if (!t) return "nf";
		var n = Array.from(t.querySelectorAll("input, select, textarea, button")),
			o = n.slice(0, 20).map(function(l) {
				return Br[l.type] || "-"
			}).join(""),
			c = ["m:".concat(t.method || ""), "f:".concat(n.length), o].join("|");
		return c
	}

	function Tr(e, t, n) {
		for (var o = "", c = 0, l = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(x) {
					return c > t || o.length > n ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), v;
			(v = l.nextNode()) !== null && o.length < n;) {
			if (v.nodeType === Node.ELEMENT_NODE) {
				var y = v;
				o += "".concat(Et(y.tagName.toLowerCase()));
				for (var d = 0; d < y.attributes.length; d++) {
					var f = y.attributes[d];
					o += "_".concat(Et(f.name, 2))
				}
				o += ">"
			} else v.nodeType === Node.TEXT_NODE && (o += "-t");
			var E = v.parentNode;
			for (c = 0; E !== e && E !== null;) c++, E = E.parentNode
		}
		return o.substring(0, n)
	}

	function Sr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : W(e)));
		for (var t = 5381, n = 0; n < e.length; n++) {
			var o = e.charCodeAt(n);
			t = t * 33 ^ o
		}
		return t >>> 0
	}

	function Rr(e, t) {
		var n;
		t.upgradeAttempts++;
		var o = De();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = t;
			var l = new URL(o.src),
				v = document.createElement("script");
			l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), v.async = !0, c && (v.nonce = c), v.setAttribute("crossorigin", "anonymous"), v.src = l.toString(), o == null || (n = o.parentNode) === null || n === void 0 || n.replaceChild(v, o)
		}
	}

	function Ar(e, t) {
		var n = e._pState;
		return n ? (t.isReady = n.isReady, t.isRecaptchaCompatibilityMode = n.isRecaptchaCompatibilityMode, t.lastWidgetIdx = n.lastWidgetIdx, t.scriptWasLoadedAsync = n.scriptWasLoadedAsync, t.upgradeAttempts = n.upgradeAttempts, t.upgradeCompletedCount = n.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = q(), t.watchCatInterval = null, t.watchCatSeq = n.watchCatSeq, t.widgetMap = n.widgetMap, !0) : !1
	}

	function Tt(e) {
		return F(["auto", "dark", "light"], e)
	}

	function St(e) {
		return F(["auto", "never"], e)
	}

	function Rt(e) {
		return e > 0 && e < 9e5
	}

	function At(e) {
		return e > 0 && e < 36e4
	}
	var zr = /^[0-9A-Za-z_-]{3,100}$/;

	function Ir(e) {
		return zr.test(e)
	}
	var jr = /^[a-z0-9_-]{0,32}$/i;

	function It(e) {
		return e === void 0 ? !0 : typeof e == "string" && jr.test(e)
	}
	var qr = /^[a-z0-9_\-=]{0,255}$/i;

	function Ct(e) {
		return e === void 0 ? !0 : typeof e == "string" && qr.test(e)
	}

	function Ot(e) {
		return F([L.Normal, L.Compact, L.Invisible, L.Flexible], e)
	}

	function kt(e) {
		return F(["auto", "manual", "never"], e)
	}

	function Nt(e) {
		return F(["auto", "manual", "never"], e)
	}
	var Hr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Mt(e) {
		return e === "auto" || Hr.test(e)
	}

	function Lt(e) {
		return F(["always", "execute", "interaction-only"], e)
	}

	function Cr(e) {
		return F(["true", "false"], e)
	}

	function Ft(e) {
		return F(["render", "execute"], e)
	}
	var Gr = 900,
		Xr = 45,
		Yr = 50;

	function Qr(e) {
		e.watchCatSeq++;
		var t = !0,
			n = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), l; !(t = (l = c.next()).done); t = !0) {
				var v = Fe(l.value, 2),
					y = v[0],
					d = v[1],
					f;
				d.watchcat.seq = e.watchCatSeq, d.watchcat.lastAckedSeq === 0 && (d.watchcat.lastAckedSeq = e.watchCatSeq);
				var E = ee(y);
				if (!E || !d.shadow) {
					d.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(E, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				var x = d.shadow.querySelector("#".concat(E));
				if (!x) {
					d.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(E, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(d.isComplete || d.isFailed || d.isResetting)) {
					var H = d.watchcat.seq - 1 - Xr,
						P = d.watchcat.lastAckedSeq < H,
						C = d.watchcat.seq - 1 - Yr,
						T = d.isOverrunning && d.watchcat.overrunBeginSeq !== 0 && d.watchcat.overrunBeginSeq < C;
					if ((d.isExecuting || !d.isInitialized || d.isInitialized && !d.isStale && !d.isExecuted) && d.watchcat.lastAckedSeq !== 0 && P || T) {
						var O;
						d.watchcat.lastAckedSeq = 0, d.watchcat.seq = 0, d.isExecuting = !1;
						var M = function(a, i) {
							console.log("Turnstile Widget seem to have ".concat(a, ": "), i)
						};
						M(P ? "hung" : "crashed", y);
						var I = P ? Ge : Xe,
							k;
						if ((O = e.msgHandler) === null || O === void 0 || O.call(e, {
								data: {
									code: I,
									event: "fail",
									rcV: (k = d.nextRcV) !== null && k !== void 0 ? k : $,
									source: j,
									widgetId: y
								}
							}), 0) var _;
						continue
					}(f = x.contentWindow) === null || f === void 0 || f.postMessage({
						event: "meow",
						seq: e.watchCatSeq,
						source: j,
						widgetId: y
					}, "*")
				}
			}
		} catch (a) {
			n = !0, o = a
		} finally {
			try {
				!t && c.return != null && c.return()
			} finally {
				if (n) throw o
			}
		}
	}

	function Pt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Qr(e)
		}, Gr))
	}

	function Dt(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && (clearInterval(e.watchCatInterval), e.watchCatInterval = null)
	}
	var g = {
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

	function Vt(e) {
		Mr(e, "")
	}

	function zt() {
		var e = [ar, ir];
		g.isRecaptchaCompatibilityMode && e.push(or), document.querySelectorAll(e.join(", ")).forEach(function(t) {
			return jt.render(t)
		})
	}
	var qt = [];

	function Or() {
		g.isReady = !0;
		var e = !0,
			t = !1,
			n = void 0;
		try {
			for (var o = qt[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var l = c.value;
				l()
			}
		} catch (v) {
			t = !0, n = v
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (t) throw n
			}
		}
	}

	function Jr(e) {
		var t = g.widgetMap.get(e);
		if (!(t === void 0 || t.hasResponseParamEl)) {
			t.hasResponseParamEl = !0;
			var n, o = (n = t.params["response-field"]) !== null && n !== void 0 ? n : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var l;
				c.name = (l = t.params["response-field-name"]) !== null && l !== void 0 ? l : mt, c.id = "".concat(e, "_response"), t.wrapper.appendChild(c);
				var v;
				if (typeof t.params["response-field-name"] != "string" && Lr((v = t.params.sitekey) !== null && v !== void 0 ? v : "")) {
					var y = document.createElement("input");
					y.type = "hidden", y.name = vt, y.id = "".concat(e, "_legacy_response"), t.wrapper.appendChild(y)
				}
			}
			if (g.isRecaptchaCompatibilityMode) {
				var d = document.createElement("input");
				d.type = "hidden", d.name = gt, d.id = "".concat(e, "_g_response"), t.wrapper.appendChild(d)
			}
		}
	}

	function Mr(e, t) {
		Jr(e);
		var n = document.getElementById("".concat(e, "_response"));
		n !== null && V(n, HTMLInputElement) && (n.value = t);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && V(o, HTMLInputElement) && (o.value = t), g.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && V(c, HTMLInputElement) && (c.value = t)
		}
	}

	function at(e, t) {
		var n;
		return !!(!((n = t.kills) === null || n === void 0) && n.includes(e))
	}

	function Wt(e, t) {
		var n = t.params,
			o = n.size,
			c = o === void 0 ? "normal" : o,
			l = t.mode;
		switch (l) {
			case G.NonInteractive:
			case G.Managed:
				switch (e.style.opacity = "", e.style.position = "", e.style.left = "", e.style.top = "", e.style.visibility = "", e.style.pointerEvents = "", e.style.zIndex = "", c) {
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
			case G.Invisible:
				at("floating-invisible", t) ? (e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden") : (e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				m('Invalid value for parameter "mode", expected "'.concat(G.NonInteractive, '", "').concat(G.Managed, '" or "').concat(G.Invisible, '", got "').concat(l, '"'), 2818)
		}
	}

	function kr(e) {
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"
	}

	function Kr(e, t) {
		var n = t.get("turnstile_iframe_alt");
		n && (e.title = n)
	}

	function $r(e) {
		return e.origin ? F(fr, e.origin) : !0
	}

	function Lr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Ut() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}

	function Zr() {
		if (typeof window.PerformanceObserver == "function") try {
			var e = De();
			if (!e) return;
			var t = e.src,
				n = !0,
				o = !1,
				c = void 0;
			try {
				for (var l = performance.getEntriesByType("resource")[Symbol.iterator](), v; !(n = (v = l.next()).done); n = !0) {
					var y = v.value;
					if (V(y, PerformanceResourceTiming) && y.name.includes(t)) return y
				}
			} catch (d) {
				o = !0, c = d
			} finally {
				try {
					!n && l.return != null && l.return()
				} finally {
					if (o) throw c
				}
			}
		} catch (d) {}
	}
	var jt = (function() {
		var e = function(a, i, r, u) {
				return O.apply(this, arguments)
			},
			t = function(a, i, r) {
				if (a.params.retry === xe.Auto || r) {
					a.isExecuted && (a.msgQueue.push(fe.Execute), a.isExecuted = !0, a.isExecuting = !0);
					var u, s = r ? 0 : 1e3 * 2 + ((u = a.params["retry-interval"]) !== null && u !== void 0 ? u : 0);
					a.retryTimeout = window.setTimeout(function() {
						var h = r ? X.CrashedRetry : X.FailureRetry;
						x(h, i)
					}, s)
				}
			},
			n = function(a, i, r) {
				var u;
				a.response === void 0 && m("[Internal Error] Widget was completed but no response was given", 1362), a.isExecuting = !1, a.isComplete = !0, Mr(i, a.response), (u = a.cbSuccess) === null || u === void 0 || u.call(a, a.response, r)
			},
			o = function(a) {
				if (!a) return [];
				for (var i = a.attributes, r = i.length, u = new Array(r), s = 0; s < r; s++) u[s] = i[s].name;
				return u
			},
			c = function() {
				for (var a = {}, i = [], r = document.getElementsByTagName("*"), u = 0; u < r.length && i.length < 50; u++) {
					var s = r[u].tagName.toLowerCase();
					s.indexOf("-") !== -1 && !a[s] && (a[s] = !0, i.push(s))
				}
				return i
			},
			l = function(a, i, r) {
				if (a.rcV = i, 0) var u
			},
			v = function() {
				var a = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = a.length,
					r = "";
				do {
					r = "";
					for (var u = 0; u < 5; u++) r += a.charAt(Math.floor(Math.random() * i))
				} while (g.widgetMap.has(r));
				return r
			},
			y = function(a) {
				var i = !0,
					r = !1,
					u = void 0;
				try {
					for (var s = g.widgetMap[Symbol.iterator](), h; !(i = (h = s.next()).done); i = !0) {
						var w = Fe(h.value, 2),
							S = w[0],
							A = w[1];
						if (A.wrapper.parentElement === a) return S
					}
				} catch (N) {
					r = !0, u = N
				} finally {
					try {
						!i && s.return != null && s.return()
					} finally {
						if (r) throw u
					}
				}
				return null
			},
			d = function(a, i, r) {
				for (; a.msgQueue.length > 0;) {
					var u, s = a.msgQueue.pop();
					(u = r.contentWindow) === null || u === void 0 || u.postMessage({
						event: s,
						source: j,
						widgetId: i
					}, "*")
				}
			},
			f = function(a, i) {
				if (i) {
					var r = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						u = [],
						s = !0,
						h = !1,
						w = void 0;
					try {
						for (var S = r[Symbol.iterator](), A; !(s = (A = S.next()).done); s = !0) {
							var N = A.value;
							i[N] && i[N] !== a.params[N] && u.push(N)
						}
					} catch (U) {
						h = !0, w = U
					} finally {
						try {
							!s && S.return != null && S.return()
						} finally {
							if (h) throw w
						}
					}
					u.length > 0 && m("The parameters ".concat(r.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(u.join(",")), 3618), i.action && (It(i.action) || m('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), a.action = i.action), i.cData && (Ct(i.cData) || m('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), a.cData = i.cData), i["after-interactive-callback"] && (a.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (a.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (a.cbSuccess = i.callback), i["expired-callback"] && (a.cbExpired = i["expired-callback"]), i["timeout-callback"] && (a.cbTimeout = i["timeout-callback"]), i["error-callback"] && (a.cbError = i["error-callback"]), i["unsupported-callback"] && (a.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (a.chlPageData = i.chlPageData)
				}
			},
			E = function(a) {
				x(X.Api, a)
			},
			x = function(a, i) {
				var r = I(i);
				r || m("Nothing to reset found for provided container", 3329);
				var u = g.widgetMap.get(r);
				if (u) {
					var s;
					u.isResetting = !0, u.response = void 0, u.mode = void 0, u.msgQueue = [], u.isComplete = !1, u.isExecuting = !1, u.isExpired = !1, u.isFailed = !1, u.isInitialized = !1, u.isStale = !1, u.isOverrunning = !1, u.watchcat.overrunBeginSeq = 0, u.watchcat.lastAckedSeq = 0, u.watchcat.seq = 0, u.params.execution === we.Render && (u.msgQueue.push(fe.Execute), u.isExecuted = !0, u.isExecuting = !0);
					var h = ee(r),
						w = u.shadow.querySelector("#".concat(h));
					(!h || !w) && m("Widget ".concat(r, " to reset was not found."), 3330), u.params.appearance === Z.InteractionOnly && kr(w), u.params.sitekey === null && m("Unexpected Error: Sitekey is null", 3347);
					var S = w.cloneNode(),
						A;
					S.src = bt(r, u.params.sitekey, u.params, (A = u.rcV) !== null && A !== void 0 ? A : $, !1, "b", a, g.scriptUrlParsed, pt(u)), (s = w.parentNode) === null || s === void 0 || s.replaceChild(S, w), Vt(h), u.retryTimeout && window.clearTimeout(u.retryTimeout)
				} else m("Widget ".concat(r, " to reset was not found."), 3331)
			},
			H = function(a) {
				var i = I(a),
					r = i ? g.widgetMap.get(i) : void 0;
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
				}), r.wrapper.remove(), r.retryTimeout && window.clearTimeout(r.retryTimeout), g.widgetMap.delete(i), Dt(g)
			},
			P = function(a, i) {
				var r, u, s = q(),
					h;
				if (typeof a == "string") try {
					var w = document.querySelector(a);
					w || m('Unable to find a container for "'.concat(a, '"'), 3585), h = w
				} catch (Xt) {
					m('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(a, '"'), 3586)
				} else V(a, HTMLElement) ? h = a : m('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var S = !0,
					A = !1,
					N = void 0;
				try {
					for (var U = g.widgetMap.values()[Symbol.iterator](), ae; !(S = (ae = U.next()).done); S = !0) {
						var ve = ae.value;
						if (h.contains(ve.wrapper)) {
							b("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (Xt) {
					A = !0, N = Xt
				} finally {
					try {
						!S && U.return != null && U.return()
					} finally {
						if (A) throw N
					}
				}
				var B = Ut();
				if (!B) return m("Turnstile cannot determine its page location", 3607);
				if (B.startsWith("file:")) return m("Turnstile cannot run in a file:// url", 3608);
				var me = en(h);
				if (me) {
					var p = Object.assign(me, i),
						ie = p.action,
						Se = p.cData,
						Re = p.chlPageData,
						Y = p.sitekey,
						oe;
					p.theme = (oe = p.theme) !== null && oe !== void 0 ? oe : _e.Auto;
					var ce;
					p.retry = (ce = p.retry) !== null && ce !== void 0 ? ce : xe.Auto;
					var ge;
					p.execution = (ge = p.execution) !== null && ge !== void 0 ? ge : we.Render;
					var ue;
					p.appearance = (ue = p.appearance) !== null && ue !== void 0 ? ue : Z.Always;
					var Ae;
					p["retry-interval"] = Number((Ae = p["retry-interval"]) !== null && Ae !== void 0 ? Ae : cr);
					var le;
					p["expiry-interval"] = Number((le = p["expiry-interval"]) !== null && le !== void 0 ? le : (er - tr) * 1e3);
					var Ie;
					p.size = (Ie = p.size) !== null && Ie !== void 0 ? Ie : L.Normal;
					var Ve = p.callback,
						Ce = p["expired-callback"],
						Oe = p["timeout-callback"],
						We = p["after-interactive-callback"],
						ke = p["before-interactive-callback"],
						K = p["error-callback"],
						Ne = p["unsupported-callback"];
					typeof Y != "string" && m('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof Y == "undefined" ? "undefined" : W(Y), '"'), 3588), Ir(Y) || m('Invalid input for parameter "sitekey", got "'.concat(Y, '"'), 3589), Ot(p.size) || m('Invalid type for parameter "size", expected normal|compact, got "'.concat(p.size, '" ').concat(W(p.size)), 3590), Tt(p.theme) || m('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(p.theme, '" ').concat(W(p.theme)), 3591), St(p.retry) || m('Invalid type for parameter "retry", expected never|auto, got "'.concat(p.retry, '" ').concat(W(p.retry)), 3592), p.language || (p.language = "auto"), Mt(p.language) || (b('Invalid language value: "'.concat(p.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), p.language = "auto"), Lt(p.appearance) || m('Unknown appearance value: "'.concat(p.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), Ft(p.execution) || m('Unknown execution value: "'.concat(p.execution, ", expected either: 'render' or 'execute'."), 3601), Rt(p["retry-interval"]) || m('Invalid retry-interval value: "'.concat(p["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), At(p["expiry-interval"]) || m('Invalid expiry-interval value: "'.concat(p["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var Me, se = (Me = p["refresh-expired"]) !== null && Me !== void 0 ? Me : re.Auto;
					kt(se) ? p["refresh-expired"] = se : m('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(se, '" ').concat(typeof se == "undefined" ? "undefined" : W(se)), 3603);
					var Le, z = (Le = p["refresh-timeout"]) !== null && Le !== void 0 ? Le : de.Auto;
					Nt(z) ? p["refresh-timeout"] = z : m('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(z, '" ').concat(typeof z == "undefined" ? "undefined" : W(z)), 3603);
					var D = document.createElement("iframe"),
						te = document.createElement("div"),
						ye = te.attachShadow({
							mode: "closed"
						});
					It(ie) || m('Invalid input for optional parameter "action", got "'.concat(ie, '"'), 3604), Ct(Se) || m('Invalid input for optional parameter "cData", got "'.concat(Se, '"'), 3605);
					var Q = v(),
						he = ee(Q);
					if (!(!Q || !he)) {
						var Ht = [],
							it = p.execution === we.Render;
						it && Ht.push(fe.Execute), g.lastWidgetIdx++;
						var Fr = {};
						g.widgetMap.set(Q, dt(qe({
							action: ie,
							cbAfterInteractive: We,
							cbBeforeInteractive: ke,
							cbError: K,
							cbExpired: Ce,
							cbSuccess: Ve,
							cbTimeout: Oe,
							cbUnsupported: Ne,
							cData: Se,
							chlPageData: Re,
							hasResponseParamEl: !1,
							idx: g.lastWidgetIdx,
							isComplete: !1,
							isExecuted: it,
							isExecuting: it,
							isExpired: !1,
							isFailed: !1,
							isInitialized: !1,
							isResetting: !1,
							isStale: !1,
							msgQueue: Ht,
							params: p,
							rcV: $,
							watchcat: {
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0,
								seq: 0
							}
						}, Fr), {
							isOverrunning: !1,
							shadow: ye,
							widgetInitStartTimeTsMs: 0,
							widgetParamsStartTimeTsMs: 0,
							widgetRenderEndTimeTsMs: 0,
							widgetRenderStartTimeTsMs: s,
							wrapper: te
						})), Pt(g);
						var ot = g.widgetMap.get(Q);
						ot || m("Turnstile Initialization Error ", 3606), D.style.display = "none", D.style.border = "none", D.style.overflow = "hidden", D.setAttribute("src", bt(Q, Y, p, $, !1, "b", X.New, g.scriptUrlParsed, pt(ot))), D.onerror = function() {
							if (K) {
								K == null || K(String(rr));
								return
							}
							m("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var Gt = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad"],
							ct;
						F((ct = (u = document.featurePolicy) === null || u === void 0 || (r = u.features) === null || r === void 0 ? void 0 : r.call(u)) !== null && ct !== void 0 ? ct : [], yt) && Gt.push(yt), D.setAttribute("allow", Gt.join("; ")), D.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), D.id = he;
						var ut;
						D.tabIndex = (ut = p.tabindex) !== null && ut !== void 0 ? ut : 0, D.title = "Widget containing a Cloudflare security challenge", ye.appendChild(D);
						var lt, Pr = (lt = p["response-field"]) !== null && lt !== void 0 ? lt : !0;
						if (Pr) {
							var Ue = document.createElement("input");
							Ue.type = "hidden";
							var st;
							if (Ue.name = (st = p["response-field-name"]) !== null && st !== void 0 ? st : mt, Ue.id = "".concat(he, "_response"), te.appendChild(Ue), typeof p["response-field-name"] != "string" && Lr(Y)) {
								var Be = document.createElement("input");
								Be.type = "hidden", Be.name = vt, Be.id = "".concat(he, "_legacy_response"), te.appendChild(Be)
							}
						}
						if (g.isRecaptchaCompatibilityMode) {
							var ze = document.createElement("input");
							ze.type = "hidden", ze.name = gt, ze.id = "".concat(he, "_g_response"), te.appendChild(ze)
						}
						return h.appendChild(te), ot.widgetRenderEndTimeTsMs = q(), he
					}
				}
			},
			C = function() {
				var a, i = -1,
					r = !0,
					u = !1,
					s = void 0;
				try {
					for (var h = g.widgetMap[Symbol.iterator](), w; !(r = (w = h.next()).done); r = !0) {
						var S = Fe(w.value, 2),
							A = S[0],
							N = S[1];
						i < N.idx && (a = A, i = N.idx)
					}
				} catch (U) {
					u = !0, s = U
				} finally {
					try {
						!r && h.return != null && h.return()
					} finally {
						if (u) throw s
					}
				}
				return i === -1 && m("Could not find widget", 43778), a
			},
			T = Zr();

		function O() {
			return O = Qt(function(_, a, i, r) {
				var u, s, h, w, S, A, N, U, ae, ve;
				return He(this, function(B) {
					switch (B.label) {
						case 0:
							if (u = _.params.sitekey, s = Ut(), !s) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), n(_, a, !1), [2];
							h = "h/".concat("b", "/"), w = new URL(s), S = "https", A = "", U = "".concat(S, "://").concat(w.host, "/cdn-cgi/challenge-platform/").concat(h, "rc/").concat(r).concat(A), B.label = 1;
						case 1:
							return B.trys.push([1, 3, , 4]), [4, fetch(U, {
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
							return ae = B.sent(), ae.status !== 200 ? (b("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), n(_, a, !1)) : n(_, a, !0), [3, 4];
						case 3:
							return ve = B.sent(), b("Error contacting Turnstile, aborting clearance redemption."), n(_, a, !1), [3, 4];
						case 4:
							return [2]
					}
				})
			}), O.apply(this, arguments)
		}
		var M = function(_) {
			var a = _.data;
			if (a.source === j) {
				if (!$r(_)) {
					b("Ignored message from wrong origin: ".concat(_.origin, "."));
					return
				}
				if (!(!a.widgetId || !g.widgetMap.has(a.widgetId))) {
					var i = ee(a.widgetId),
						r = g.widgetMap.get(a.widgetId);
					if (!(!i || !r)) switch (a.event) {
						case "init": {
							var u;
							r.widgetInitStartTimeTsMs = q(), r.kills = a.kills;
							var s = r.shadow.getElementById(i);
							s || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), r.mode = a.mode, r.nextRcV = a.nextRcV, r.mode === G.Invisible && r.params["refresh-expired"] === re.Manual && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat(re.Auto, "' or '").concat(re.Never, ".'")), r.mode !== G.Managed && r.params["refresh-timeout"] !== de.Auto && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), r.params.appearance === Z.Always || r.isExecuting && r.params.appearance === Z.Execute ? Wt(s, r) : kr(s), s.style.display = "";
							var h = r.shadow.querySelector("#".concat(i));
							h || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), (u = h.contentWindow) === null || u === void 0 || u.postMessage({
								event: "init",
								source: j,
								widgetId: a.widgetId
							}, "*");
							break
						}
						case "translationInit": {
							var w = r.shadow.getElementById(i);
							w || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var S = new Map;
							r.displayLanguage = a.displayLanguage, r.displayRtl = a.displayRtl, Object.keys(a.translationData).forEach(function(Q) {
								S.set(Q, a.translationData[Q])
							}), Kr(w, S);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(r.params.language, " is not supported, falling back to: ").concat(a.fallback, ".")), r.displayLanguage = a.fallback;
							break
						}
						case "reject": {
							var A = r.shadow.getElementById(i);
							if (r.isExecuting = !1, A || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), a.reason === "unsupported_browser") {
								var N;
								(N = r.cbUnsupported) === null || N === void 0 || N.call(r)
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
							if (l(r, $, a.widgetId), r.response = a.token, a.scs && !at("scs", r) && (r.scs = a.scs, r.params["session-continuity-persist"] && !at("scs_persist", r))) {
								var U = r.params.sitekey;
								if (U) {
									var ae = "".concat(ht).concat(U);
									try {
										localStorage.setItem(ae, a.scs)
									} catch (Q) {}
								}
							}
							a.sToken ? e(r, i, a.sToken, a.chlId) : n(r, i, !1);
							break
						}
						case "fail": {
							a.rcV && l(r, a.rcV, a.widgetId), a.cfChlOut && (r.cfChlOut = a.cfChlOut), a.cfChlOutS && (r.cfChlOutS = a.cfChlOutS), a.code && (r.errorCode = a.code), r.isExecuting = !1, r.isFailed = !0, r.isInitialized = !0, a.frMd && (r.frMd = a.frMd), Vt(i);
							var ve = r.cbError,
								B = a.code === Ge || a.code === Xe;
							if (B) {
								var me, p = r.shadow.querySelector("#".concat(i));
								p == null || (me = p.contentWindow) === null || me === void 0 || me.postMessage({
									event: "forceFail",
									source: j,
									widgetId: a.widgetId
								}, "*")
							}
							if (ve) {
								var ie;
								ve(String((ie = a.code) !== null && ie !== void 0 ? ie : nr)) ? r.params.retry === xe.Auto && !r.isResetting && t(r, i, B) : (a.code && b("Error: ".concat(a.code, ".")), t(r, i, B))
							} else a.code ? (t(r, i, B), m("Error: ".concat(a.code), 3076)) : t(r, i, !1);
							break
						}
						case "feedbackInit": {
							var Se = r.wrapper.querySelector("#".concat(i, "-fr"));
							if (Se) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							wt(i, r, a.feedbackOrigin, g.scriptUrlParsed);
							break
						}
						case "requestFeedbackData": {
							var Re, Y = r.shadow.querySelector("#".concat(i));
							Y || m("Received state for an unknown widget: #".concat(i, " / ").concat(a.widgetId), 3078), (Re = Y.contentWindow) === null || Re === void 0 || Re.postMessage({
								event: "requestTurnstileResults",
								source: j,
								widgetId: a.widgetId
							}, "*");
							break
						}
						case "turnstileResults": {
							var oe, ce, ge = (oe = r.wrapper.parentNode) === null || oe === void 0 ? void 0 : oe.querySelector("#".concat(i, "-fr"));
							ge || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), (ce = ge.contentWindow) === null || ce === void 0 || ce.postMessage({
								cfChlOut: r.cfChlOut,
								cfChlOutS: r.cfChlOutS,
								errorCode: r.errorCode,
								event: "feedbackData",
								frMd: r.frMd || a.frMd,
								mode: a.mode,
								rayId: a.rayId,
								rcV: a.rcV,
								sitekey: a.sitekey,
								source: j,
								widgetId: a.widgetId
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var ue, Ae = (ue = r.wrapper.parentNode) === null || ue === void 0 ? void 0 : ue.querySelector("#".concat(i, "-fr"));
							Ae || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), br("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var le, Ie = a.token;
							r.isExpired = !0, (le = r.cbExpired) === null || le === void 0 || le.call(r, Ie), r.params["refresh-expired"] === re.Auto && !r.isResetting && x(X.AutoExpire, i);
							break
						}
						case "interactiveTimeout": {
							l(r, $, a.widgetId), Vt(i);
							var Ve = r.cbTimeout;
							if (Ve ? Ve() : r.params["refresh-timeout"] === de.Never && !r.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), r.params["refresh-timeout"] === de.Auto && !r.isResetting) {
								var Ce = r.cbAfterInteractive;
								Ce == null || Ce(), x(X.AutoTimeout, i)
							}
							break
						}
						case "refreshRequest": {
							l(r, $, a.widgetId), x(X.ManualRefresh, i);
							break
						}
						case "reloadRequest": {
							l(r, a.nextRcV, a.widgetId), x(a.trigger, i);
							break
						}
						case "interactiveBegin": {
							var Oe, We = r.shadow.getElementById(i);
							We || m("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (Oe = r.cbBeforeInteractive) === null || Oe === void 0 || Oe.call(r), r.params.appearance === Z.InteractionOnly && Wt(We, r);
							break
						}
						case "interactiveEnd": {
							var ke;
							(ke = r.cbAfterInteractive) === null || ke === void 0 || ke.call(r);
							break
						}
						case "widgetStale": {
							r.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var K;
							r.widgetParamsStartTimeTsMs = q();
							var Ne = r.shadow.querySelector("#".concat(i));
							Ne || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), r.isResetting = !1;
							var Me = {},
								se = q(),
								Le = {
									"d.cT": c(),
									"ht.atrs": o(document.body.parentNode),
									"pg.ref": document.referrer,
									pi: {
										ffp: Er(r.wrapper),
										ii: window.self !== window.top,
										lH: window.location.href,
										mL: document.getElementsByTagName("meta").length,
										pfp: Tr(document, ur, lr),
										sL: document.scripts.length,
										sR: r.wrapper.shadowRoot === null,
										ssL: document.styleSheets.length,
										t: "".concat(document.title.length, "|").concat(Sr(document.title)),
										tL: document.getElementsByTagName("*").length,
										wp: wr(r.wrapper),
										xp: xr(r.wrapper).substring(0, sr)
									},
									"w.iW": window.innerWidth
								},
								z = r.scs;
							if (!z && r.params["session-continuity-persist"] && !at("scs_persist", r)) {
								var D = r.params.sitekey;
								if (D) {
									var te = "".concat(ht).concat(D);
									try {
										var ye;
										z = (ye = localStorage.getItem(te)) !== null && ye !== void 0 ? ye : void 0
									} catch (Q) {}
								}
							}
							z && z.length > dr && (z = void 0), (K = Ne.contentWindow) === null || K === void 0 || K.postMessage(qe({
								action: r.action,
								apiJsResourceTiming: T ? JSON.parse(JSON.stringify(T)) : void 0,
								appearance: r.params.appearance,
								au: g.scriptUrl,
								cData: r.cData,
								ch: "1581b6c444f4",
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
								scs: z,
								source: j,
								timeExtraParamsMs: q() - r.widgetRenderStartTimeTsMs,
								timeInitMs: r.widgetInitStartTimeTsMs - r.widgetRenderEndTimeTsMs,
								timeLoadInitMs: q() - g.turnstileLoadInitTimeTsMs,
								timeParamsMs: r.widgetParamsStartTimeTsMs - r.widgetInitStartTimeTsMs,
								timeRenderMs: r.widgetRenderEndTimeTsMs - r.widgetRenderStartTimeTsMs,
								timeTiefMs: q() - se,
								upgradeAttempts: g.upgradeAttempts,
								upgradeCompletedCount: g.upgradeCompletedCount,
								url: Ut(),
								widgetId: a.widgetId,
								wPr: Le
							}, Me), "*"), d(r, a.widgetId, Ne), r.isInitialized = !0;
							break
						}
						default:
							break
					}
				}
			}
		};
		g.msgHandler = M, window.addEventListener("message", M);

		function I(_) {
			if (typeof _ == "string") {
				var a = $e(_);
				if (a && g.widgetMap.has(a)) return a;
				if (g.widgetMap.has(_)) return _;
				try {
					var i = document.querySelector(_);
					return i ? I(i) : null
				} catch (r) {
					return null
				}
			}
			return V(_, Element) ? y(_) : _ || g.widgetMap.size === 0 ? null : g.widgetMap.keys().next().value
		}
		var k = {};
		return dt(qe({}, k), {
			_private: {
				showFeedback: function(a) {
					var i = I(a);
					if (i) {
						var r = ee(i);
						if (r) {
							var u = g.widgetMap.get(i);
							u && wt(r, u, Ze.Custom, g.scriptUrlParsed)
						}
					}
				}
			},
			execute: function(a, i) {
				var r = I(a);
				if (!r) {
					i === void 0 && m("Please provide 2 parameters to execute: container and parameters", 43521);
					var u = P(a, i);
					u || m("Failed to render widget", 43522), r = u
				}
				var s = g.widgetMap.get(r);
				if (s) {
					f(s, i);
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
					s.isExpired && b("Call to execute on a expired-widget (".concat(h, "), consider using reset() before.")), s.isStale && (x(X.StaleExecute, h), s.isExecuting = !0), s.msgQueue.push(fe.Execute), s.isExecuted = !0;
					var S = s.shadow.querySelector("#".concat(h));
					if (S || (s.isExecuting = !1, m("Widget ".concat(h, " to execute was not found"), 43522)), s.isResetting) return;
					if (s.isInitialized && d(s, r, S), s.isInitialized && s.params.appearance === Z.Execute && Wt(S, s), s.isExecuting) {
						var A;
						(A = S.contentWindow) === null || A === void 0 || A.postMessage({
							event: "execute",
							source: j,
							widgetId: r
						}, "*")
					}
				}
			},
			getResponse: function(a) {
				var i;
				if (typeof a == "undefined") {
					var r = C();
					if (r) {
						var u = g.widgetMap.get(r);
						return u != null && u.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), u == null ? void 0 : u.response
					}
					m("Could not find a widget", 43794)
				}
				var s = I(a);
				return s || m("Could not find widget for provided container", 43778), (i = g.widgetMap.get(s)) === null || i === void 0 ? void 0 : i.response
			},
			implicitRender: zt,
			isExpired: function(a) {
				var i;
				if (typeof a == "undefined") {
					var r = C();
					if (r) {
						var u, s;
						return (s = (u = g.widgetMap.get(r)) === null || u === void 0 ? void 0 : u.isExpired) !== null && s !== void 0 ? s : !1
					}
					m("Could not find a widget", 43794)
				}
				var h = I(a);
				h || m("Could not find widget for provided container", 43778);
				var w;
				return (w = (i = g.widgetMap.get(h)) === null || i === void 0 ? void 0 : i.isExpired) !== null && w !== void 0 ? w : !1
			},
			ready: function(a) {
				if (g.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), m("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof a != "function" && m('turnstile.ready() expected a "function" argument, got "'.concat(typeof a == "undefined" ? "undefined" : W(a), '"'), 3841), g.isReady) {
					a();
					return
				}
				qt.push(a)
			},
			remove: H,
			render: P,
			reset: E
		})
	})();

	function en(e) {
		var t = e.getAttribute("data-sitekey"),
			n = {
				sitekey: t
			},
			o = e.getAttribute("data-tabindex");
		o && (n.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (Tt(c) ? n.theme = c : b('Unknown data-theme value: "'.concat(c, '".')));
		var l = e.getAttribute("data-size");
		if (l && (Ot(l) ? n.size = l : b('Unknown data-size value: "'.concat(l, '".'))), 0) var v;
		var y = e.getAttribute("data-action");
		typeof y == "string" && (n.action = y);
		var d = e.getAttribute("data-cdata");
		typeof d == "string" && (n.cData = d);
		var f = e.getAttribute("data-retry");
		f && (St(f) ? n.retry = f : b('Invalid data-retry value: "'.concat(f, ", expected either 'never' or 'auto'\".")));
		var E = e.getAttribute("data-retry-interval");
		if (E) {
			var x = Number.parseInt(E, 10);
			Rt(x) ? n["retry-interval"] = x : b('Invalid data-retry-interval value: "'.concat(E, ', expected an integer value > 0 and < 900000".'))
		}
		var H = e.getAttribute("data-expiry-interval");
		if (H) {
			var P = Number.parseInt(H, 10);
			At(P) ? n["expiry-interval"] = P : b('Invalid data-expiry-interval value: "'.concat(P, ', expected an integer value > 0 and < 360000".'))
		}
		var C = e.getAttribute("data-refresh-expired");
		C && (kt(C) ? n["refresh-expired"] = C : b('Unknown data-refresh-expired value: "'.concat(C, ", expected either: 'never', 'auto' or 'manual'.")));
		var T = e.getAttribute("data-refresh-timeout");
		T && (Nt(T) ? n["refresh-timeout"] = T : b('Unknown data-refresh-timeout value: "'.concat(T, ", expected either: 'never', 'auto' or 'manual'.")));
		var O = e.getAttribute("data-language");
		O && (Mt(O) ? n.language = O : b('Invalid data-language value: "'.concat(O, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function M(s) {
			var h = e.getAttribute(s);
			return h && window[h] ? window[h] : void 0
		}
		var I = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		I.forEach(function(s) {
			n[s] = M("data-".concat(s))
		});
		var k = e.getAttribute("data-feedback-enabled");
		k ? (Cr(k) || b('Invalid data-feedback-enabled value: "'.concat(k, ", expected either: 'true' or 'false'. Value is ignored.")), n["feedback-enabled"] = k === "true") : n["feedback-enabled"] = !0;
		var _, a = (_ = e.getAttribute("data-response-field")) !== null && _ !== void 0 ? _ : "true";
		n["response-field"] = a === "true";
		var i = e.getAttribute("data-response-field-name");
		i && (n["response-field-name"] = i);
		var r = e.getAttribute("data-execution");
		r && (Ft(r) ? n.execution = r : b('Unknown data-execution value: "'.concat(r, ", expected either: 'render' or 'execute'.")));
		var u = e.getAttribute("data-appearance");
		return u && (Lt(u) ? n.appearance = u : b('Unknown data-appearance value: "'.concat(u, ", expected either: 'always', 'execute', or 'interaction-only'."))), n
	}

	function tn() {
		var e = !0;
		Dt(g, e), g.msgHandler && window.removeEventListener("message", g.msgHandler), Rr(window.turnstile, g)
	}
	Ee = !1, R = _r(), g.scriptWasLoadedAsync = (et = R == null ? void 0 : R.loadedAsync) !== null && et !== void 0 ? et : !1, g.scriptUrl = (tt = R == null ? void 0 : R.src) !== null && tt !== void 0 ? tt : "undefined", g.scriptUrlParsed = R == null ? void 0 : R.url, R != null && R.params && (Te = R.params.get("compat"), (Te == null ? void 0 : Te.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled.") : (b("Compatibility layer enabled."), g.isRecaptchaCompatibilityMode = !0, window.grecaptcha = jt) : Te !== null && b('Unknown value for api.js?compat: "'.concat(Te, '", ignoring.')), R.params.forEach(function(e, t) {
		F(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || b('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), Ee = R.params.get("_upgrade") === "true", J = R.params.get("onload"), J && !Ee && setTimeout(function() {
		typeof window[J] == "function" ? window[J]() : (b("Unable to find onload callback '".concat(J, "' immediately after loading, expected 'function', got '").concat(W(window[J]), "'.")), setTimeout(function() {
			typeof window[J] == "function" ? window[J]() : b("Unable to find onload callback '".concat(J, "' after 1 second, expected 'function', got '").concat(W(window[J]), "'."))
		}, 1e3))
	}, 0)), Bt = "turnstile" in window, Bt && !Ee ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Bt && Ee && (Ar(window.turnstile, g), Pt(g), (R == null || (rt = R.params) === null || rt === void 0 ? void 0 : rt.get("render")) !== "explicit" && setTimeout(zt, 0)), window.turnstile = jt, Ee || ((R == null || (nt = R.params) === null || nt === void 0 ? void 0 : nt.get("render")) !== "explicit" && qt.push(zt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Or, 0) : window.addEventListener("DOMContentLoaded", Or))), Nr = 10800 * 1e3, window.setTimeout(tn, Nr);
	var Ee, R, et, tt, Te, J, Bt, rt, nt, Nr;
})();