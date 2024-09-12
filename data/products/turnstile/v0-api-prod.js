"use strict";
(function() {
	function Vt(e, r, a, o, c, l, g) {
		try {
			var f = e[l](g),
				p = f.value
		} catch (s) {
			a(s);
			return
		}
		f.done ? r(p) : Promise.resolve(p).then(o, c)
	}

	function Wt(e) {
		return function() {
			var r = this,
				a = arguments;
			return new Promise(function(o, c) {
				var l = e.apply(r, a);

				function g(p) {
					Vt(l, o, c, g, f, "next", p)
				}

				function f(p) {
					Vt(l, o, c, g, f, "throw", p)
				}
				g(void 0)
			})
		}
	}

	function U(e, r) {
		return r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : U(e, r)
	}

	function Me(e, r, a) {
		return r in e ? Object.defineProperty(e, r, {
			value: a,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = a, e
	}

	function Fe(e) {
		for (var r = 1; r < arguments.length; r++) {
			var a = arguments[r] != null ? arguments[r] : {},
				o = Object.keys(a);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(c) {
				return Object.getOwnPropertyDescriptor(a, c).enumerable
			}))), o.forEach(function(c) {
				Me(e, c, a[c])
			})
		}
		return e
	}

	function Rr(e, r) {
		var a = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), a.push.apply(a, o)
		}
		return a
	}

	function tt(e, r) {
		return r = r != null ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rr(Object(r)).forEach(function(a) {
			Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a))
		}), e
	}

	function Ht(e) {
		if (Array.isArray(e)) return e
	}

	function Bt(e, r) {
		var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (a != null) {
			var o = [],
				c = !0,
				l = !1,
				g, f;
			try {
				for (a = a.call(e); !(c = (g = a.next()).done) && (o.push(g.value), !(r && o.length === r)); c = !0);
			} catch (p) {
				l = !0, f = p
			} finally {
				try {
					!c && a.return != null && a.return()
				} finally {
					if (l) throw f
				}
			}
			return o
		}
	}

	function jt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function rt(e, r) {
		(r == null || r > e.length) && (r = e.length);
		for (var a = 0, o = new Array(r); a < r; a++) o[a] = e[a];
		return o
	}

	function qt(e, r) {
		if (e) {
			if (typeof e == "string") return rt(e, r);
			var a = Object.prototype.toString.call(e).slice(8, -1);
			if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
			if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return rt(e, r)
		}
	}

	function Ae(e, r) {
		return Ht(e) || Bt(e, r) || qt(e, r) || jt()
	}

	function P(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function De(e, r) {
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
			next: f(0),
			throw: f(1),
			return: f(2)
		}, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
			return this
		}), g;

		function f(s) {
			return function(x) {
				return p([s, x])
			}
		}

		function p(s) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; g && (g = 0, s[0] && (a = 0)), a;) try {
				if (o = 1, c && (l = s[0] & 2 ? c.return : s[0] ? c.throw || ((l = c.return) && l.call(c), 0) : c.next) && !(l = l.call(c, s[1])).done) return l;
				switch (c = 0, l && (s = [s[0] & 2, l.value]), s[0]) {
					case 0:
					case 1:
						l = s;
						break;
					case 4:
						return a.label++, {
							value: s[1],
							done: !1
						};
					case 5:
						a.label++, c = s[1], s = [0];
						continue;
					case 7:
						s = a.ops.pop(), a.trys.pop();
						continue;
					default:
						if (l = a.trys, !(l = l.length > 0 && l[l.length - 1]) && (s[0] === 6 || s[0] === 2)) {
							a = 0;
							continue
						}
						if (s[0] === 3 && (!l || s[1] > l[0] && s[1] < l[3])) {
							a.label = s[1];
							break
						}
						if (s[0] === 6 && a.label < l[1]) {
							a.label = l[1], l = s;
							break
						}
						if (l && a.label < l[2]) {
							a.label = l[2], a.ops.push(s);
							break
						}
						l[2] && a.ops.pop(), a.trys.pop();
						continue
				}
				s = r.call(e, a)
			} catch (x) {
				s = [6, x], c = 0
			} finally {
				o = l = 0
			}
			if (s[0] & 5) throw s[1];
			return {
				value: s[0] ? s[1] : void 0,
				done: !0
			}
		}
	}
	var zt = {
		code: 200500,
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?"
	};
	var Gt = 300020;
	var Pe = 300030;
	var Ue = 300031;
	var q;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(q || (q = {}));
	var k;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible", e.FLEXIBLE = "flexible"
	})(k || (k = {}));
	var Ve;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Ve || (Ve = {}));
	var Se;
	(function(e) {
		e.FAILURE_WO_HAVING_TROUBLES = "failure-wo-having-troubles", e.FAILURE_HAVING_TROUBLES = "failure-having-troubles", e.FAILURE_FEEDBACK = "failure-feedback", e.FAILURE_FEEDBACK_CODE = "failure-feedback-code", e.EXPIRED_NEVER_REFRESH = "expired-never-refresh", e.EXPIRED_MANUAL_REFRESH = "expired-manual-refresh", e.TIMEOUT_NEVER_REFRESH = "timeout-never-refresh", e.TIMEOUT_MANUAL_REFRESH = "timeout-manual-refresh", e.INTERACTIVITY_REQUIRED = "interactivity-required", e.OUTDATED_BROWSER = "outdated-browser", e.TIME_CHECK_CACHED_WARNING = "time-check-cached-warning", e.INVALID_DOMAIN = "invalid-domain", e.LONGER_THAN_EXPECTED = "longer-than-expected"
	})(Se || (Se = {}));
	var fe;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(fe || (fe = {}));
	var $;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})($ || ($ = {}));
	var ie;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(ie || (ie = {}));
	var X;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(X || (X = {}));
	var pe;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(pe || (pe = {}));
	var oe;
	(function(e) {
		e.EXECUTE = "execute"
	})(oe || (oe = {}));
	var at;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(at || (at = {}));

	function L(e, r) {
		return e.indexOf(r) !== -1
	}

	function nt(e) {
		return L(["auto", "dark", "light"], e)
	}

	function it(e) {
		return L(["auto", "never"], e)
	}

	function ot(e) {
		return e > 0 && e < 9e5
	}

	function ct(e) {
		return e > 0 && e < 36e4
	}
	var Ar = /^[0-9A-Za-z_-]{3,100}$/;

	function Xt(e) {
		return Ar.test(e)
	}
	var Sr = /^[a-z0-9_-]{0,32}$/i;

	function lt(e) {
		return e === void 0 ? !0 : typeof e == "string" && Sr.test(e)
	}
	var Ir = /^[a-z0-9_\-=]{0,255}$/i;

	function ut(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ir.test(e)
	}

	function st(e) {
		return L([k.NORMAL, k.COMPACT, k.INVISIBLE, k.FLEXIBLE], e)
	}

	function dt(e) {
		return L(["auto", "manual", "never"], e)
	}

	function ft(e) {
		return L(["auto", "manual", "never"], e)
	}
	var Or = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function pt(e) {
		return e === "auto" || Or.test(e)
	}

	function vt(e) {
		return L(["always", "execute", "interaction-only"], e)
	}

	function Yt(e) {
		return L(["true", "false"], e)
	}

	function mt(e) {
		return L(["render", "execute"], e)
	}
	var Kt = 300,
		Qt = 10;

	function gt(e) {
		var r = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && r.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && r.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), r.size !== 0) return r.toString()
	}
	var We = "cf-chl-widget-",
		V = "cloudflare-challenge",
		$t = ".cf-turnstile",
		Jt = ".cf-challenge",
		Zt = ".g-recaptcha",
		ht = "cf_challenge_response",
		yt = "cf-turnstile-response",
		_t = "g-recaptcha-response",
		er = 8e3,
		bt = "private-token",
		tr = 3,
		rr = 500,
		ar = 500,
		Y = "0/0";
	var Cr = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Nr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];

	function Et(e, r) {
		var a = "https://challenges.cloudflare.com";
		if (r) {
			var o;
			a = (o = e["base-url"]) !== null && o !== void 0 ? o : a
		}
		return a
	}

	function xt(e, r, a, o, c, l, g) {
		var f = Et(a, c),
			p = l ? "h/".concat(l, "/") : "",
			s = g ? "?".concat(g) : "",
			x = a["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(f, "/cdn-cgi/challenge-platform/").concat(p, "turnstile/if/ov2/av0/rcv").concat(o, "/").concat(e, "/").concat(r, "/").concat(a.theme, "/").concat(x, "/").concat(a.size, "/").concat(a.language, "/").concat(s)
	}
	var wt = function(e) {
			var r, a, o = window.innerWidth < 400,
				c = e.state === Se.FAILURE_FEEDBACK || e.state === Se.FAILURE_HAVING_TROUBLES,
				l, g = L(Cr, (l = (r = e.displayLanguage) === null || r === void 0 ? void 0 : r.toLowerCase()) !== null && l !== void 0 ? l : "nonexistent"),
				f, p = L(Nr, (f = (a = e.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && f !== void 0 ? f : "nonexistent");
			return o ? kr({
				isModeratelyVerbose: p,
				isVerboseLanguage: g,
				isSmallerFeedback: c
			}) : c && g ? "520px" : c && p ? "500px" : c ? "480px" : g ? "580px" : "570px"
		},
		kr = function(e) {
			var r = e.isVerboseLanguage,
				a = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return a && r ? "540px" : a && o ? "500px" : a ? "480px" : r ? "650px" : o ? "590px" : "570px"
		};

	function He(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function nr(e, r) {
		if (!U(e, r)) throw new TypeError("Cannot call a class as a function")
	}

	function J(e, r) {
		return J = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, J(e, r)
	}

	function ir(e, r) {
		if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(r && r.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), r && J(e, r)
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

	function Ie(e, r, a) {
		return Be() ? Ie = Reflect.construct : Ie = function(c, l, g) {
			var f = [null];
			f.push.apply(f, l);
			var p = Function.bind.apply(c, f),
				s = new p;
			return g && J(s, g.prototype), s
		}, Ie.apply(null, arguments)
	}

	function ce(e) {
		return ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
			return a.__proto__ || Object.getPrototypeOf(a)
		}, ce(e)
	}

	function or(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function je(e) {
		var r = typeof Map == "function" ? new Map : void 0;
		return je = function(o) {
			if (o === null || !or(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof r != "undefined") {
				if (r.has(o)) return r.get(o);
				r.set(o, c)
			}

			function c() {
				return Ie(o, arguments, ce(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), J(c, o)
		}, je(e)
	}

	function cr(e, r) {
		return r && (P(r) === "object" || typeof r == "function") ? r : He(e)
	}

	function lr(e) {
		var r = Be();
		return function() {
			var o = ce(e),
				c;
			if (r) {
				var l = ce(this).constructor;
				c = Reflect.construct(o, arguments, l)
			} else c = o.apply(this, arguments);
			return cr(this, c)
		}
	}
	var ur = function(e) {
		"use strict";
		ir(a, e);
		var r = lr(a);

		function a(o, c) {
			nr(this, a);
			var l;
			return l = r.call(this, o), Me(He(l), "code", void 0), l.name = "TurnstileError", l.code = c, l
		}
		return a
	}(je(Error));

	function m(e, r) {
		var a = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new ur(a, r)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function qe(e) {
		return e.startsWith(We) ? e.substring(We.length) : null
	}

	function K(e) {
		return "".concat(We).concat(e)
	}

	function Tt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (U(r, HTMLScriptElement) && e.test(r.src)) return r;
		for (var a = document.querySelectorAll("script"), o = 0, c; c = a[o]; o++)
			if (U(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function sr() {
		var e = Tt();
		e || m("Could not find Turnstile script tag, some features may not be available", 43777);
		var r = {
			loadedAsync: !1,
			params: new URLSearchParams
		};
		(e.async || e.defer) && (r.loadedAsync = !0);
		var a = e.src,
			o = a.split("?");
		return o.length > 1 && (r.params = new URLSearchParams(o[1])), r
	}

	function W() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}
	var Rt = function(e, r) {
			var a = Et(r.params, !1),
				o = "h/".concat("b", "/"),
				c, l, g = "".concat(a, "/cdn-cgi/challenge-platform/").concat(o, "feedback-reports/").concat(qe(e), "/").concat(r.displayLanguage, "/").concat((c = r.params.theme) !== null && c !== void 0 ? c : r.theme);
			r.wrapper.parentNode || m("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var f = document.createElement("div");
			f.style.position = "fixed", f.style.zIndex = "2147483646", f.style.width = "100vw", f.style.height = "100vh", f.style.top = "0", f.style.left = "0", f.style.transformOrigin = "center center", f.style.overflowX = "hidden", f.style.overflowY = "auto", f.style.background = "rgba(0,0,0,0.4)";
			var p = document.createElement("div");
			p.style.display = "table-cell", p.style.verticalAlign = "middle", p.style.width = "100vw", p.style.height = "100vh";
			var s = document.createElement("div");
			s.className = "cf-turnstile-feedback", s.id = "cf-fr-id", s.style.width = "100vw", s.style.maxWidth = "450px", s.style.height = wt(r), s.style.position = "relative", s.style.zIndex = "2147483647", s.style.backgroundColor = "#ffffff", s.style.borderRadius = "5px", s.style.left = "0px", s.style.top = "0px", s.style.overflow = "hidden", s.style.margin = "0px auto";
			var x = document.createElement("iframe");
			x.id = e + "-fr", x.setAttribute("src", g), x.setAttribute("allow", "cross-origin-isolated; fullscreen"), x.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), x.setAttribute("scrolling", "no"), x.style.borderWidth = "0px", x.style.width = "100%", x.style.height = "100%", x.style.overflow = "hidden";
			var T = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			T.setAttribute("tabindex", "0"), T.setAttribute("role", "img"), T.setAttribute("aria-label", "Close button icon"), T.style.position = "absolute", T.style.width = "26px", T.style.height = "26px", T.style.zIndex = "2147483647", T.style.cursor = "pointer", r.displayRTL ? T.style.left = "6px" : T.style.right = "2px", T.style.top = "5px", T.setAttribute("width", "20"), T.setAttribute("height", "20"), T.addEventListener("click", function() {
				var R;
				(R = f.parentNode) === null || R === void 0 || R.removeChild(f)
			}), T.addEventListener("keydown", function(R) {
				if (R.key === "Enter" || R.key === " ") {
					var M;
					(M = f.parentNode) === null || M === void 0 || M.removeChild(f)
				}
			});
			var N = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			N.setAttribute("ry", "12"), N.setAttribute("rx", "12"), N.setAttribute("cy", "12"), N.setAttribute("cx", "12"), N.setAttribute("fill", "none"), N.setAttribute("stroke-width", "0"), T.appendChild(N);
			var I = document.createElementNS("http://www.w3.org/2000/svg", "line");
			I.setAttribute("stroke-width", "1"), I.setAttribute("stroke", "#999"), I.setAttribute("fill", "none"), I.setAttribute("x1", "6"), I.setAttribute("x2", "18"), I.setAttribute("y1", "18"), I.setAttribute("y2", "5"), T.appendChild(I);
			var O = document.createElementNS("http://www.w3.org/2000/svg", "line");
			O.setAttribute("stroke-width", "1"), O.setAttribute("stroke", "#999"), O.setAttribute("fill", "none"), O.setAttribute("x1", "6"), O.setAttribute("x2", "18"), O.setAttribute("y1", "5"), O.setAttribute("y2", "18"), T.appendChild(O), s.appendChild(x), s.appendChild(T), p.appendChild(s), f.appendChild(p), f.addEventListener("click", function() {
				var R;
				(R = f.parentNode) === null || R === void 0 || R.removeChild(f)
			}), r.wrapper.parentNode.appendChild(f), window.addEventListener("resize", function() {
				s.style.height = wt(r)
			})
		},
		dr = function(e) {
			var r, a, o;
			(o = document.getElementById(e)) === null || o === void 0 || (a = o.parentElement) === null || a === void 0 || (r = a.parentElement) === null || r === void 0 || r.remove()
		};
	var At = function(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > r ? e.substring(0, r) : e
	};

	function fr(e) {
		if (!e) return "-";
		var r = function(a, o) {
			if (!a || a.tagName === "BODY") return o;
			for (var c = 1, l = a.previousElementSibling; l;) l.tagName === a.tagName && c++, l = l.previousElementSibling;
			var g = At(a.tagName.toLowerCase()),
				f = "".concat(g, "[").concat(c, "]");
			return r(a.parentNode, "/".concat(f).concat(o))
		};
		return r(e, "")
	}

	function pr(e, r, a) {
		for (var o = "", c = 0, l = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(T) {
					return c > r || o.length > a ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), g;
			(g = l.nextNode()) !== null && o.length < a;) {
			if (g.nodeType === Node.ELEMENT_NODE) {
				var f = g;
				o += "".concat(At(f.tagName.toLowerCase()));
				for (var p = 0; p < f.attributes.length; p++) {
					var s = f.attributes[p];
					o += "_".concat(At(s.name, 2))
				}
				o += ">"
			} else g.nodeType === Node.TEXT_NODE && (o += "-t");
			var x = g.parentNode;
			for (c = 0; x !== e && x !== null;) c++, x = x.parentNode
		}
		return o.substring(0, a)
	}

	function vr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : P(e)));
		for (var r = 5381, a = 0; a < e.length; a++) {
			var o = e.charCodeAt(a);
			r = r * 33 ^ o
		}
		return r >>> 0
	}

	function mr(e, r) {
		var a;
		r.upgradeAttempts++;
		var o = Tt();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = r;
			var l = new URL(o.src),
				g = document.createElement("script");
			l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), g.async = !0, c && (g.nonce = c), g.setAttribute("crossorigin", "anonymous"), g.src = l.toString(), o == null || (a = o.parentNode) === null || a === void 0 || a.replaceChild(g, o)
		}
	}

	function gr(e, r) {
		var a = e._pState;
		return a ? (r.isReady = a.isReady, r.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, r.lastWidgetIdx = a.lastWidgetIdx, r.scriptWasLoadedAsync = a.scriptWasLoadedAsync, r.upgradeAttempts = a.upgradeAttempts, r.upgradeCompletedCount = a.upgradeCompletedCount + 1, r.turnstileLoadInitTimeMs = W(), r.watchCatInterval = null, r.watchCatSeq = a.watchCatSeq, r.widgetMap = a.widgetMap, !0) : !1
	}
	var Lr = 900,
		Mr = 3,
		Fr = 50;

	function Dr(e) {
		e.watchCatSeq++;
		var r = !0,
			a = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), l; !(r = (l = c.next()).done); r = !0) {
				var g = Ae(l.value, 2),
					f = g[0],
					p = g[1],
					s;
				p.watchcat.seq = e.watchCatSeq, p.watchcat.lastAckedSeq === 0 && (p.watchcat.lastAckedSeq = e.watchCatSeq);
				var x = K(f);
				if (!x || !p.shadow) {
					p.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(x, ", consider using turnstile.remove() to clean up a widget.")), p.watchcat.missingWidgetWarning = !0);
					continue
				}
				var T = p.shadow.querySelector("#".concat(x));
				if (!T) {
					p.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(x, ", consider using turnstile.remove() to clean up a widget.")), p.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(p.isComplete || p.isFailed)) {
					var N = p.watchcat.seq - 1 - Mr,
						I = p.watchcat.lastAckedSeq < N,
						O = p.watchcat.seq - 1 - Fr,
						R = p.isOverrunning && p.watchcat.overrunBeginSeq < O;
					if ((p.isExecuting || !p.isInitialized || p.isInitialized && !p.isStale && !p.isExecuted) && p.watchcat.lastAckedSeq !== 0 && I || R) {
						var M;
						p.watchcat.lastAckedSeq = 0, p.watchcat.seq = 0, p.isExecuting = !1;
						var _ = function(d, u) {
							console.log("Turnstile Widget seem to have ".concat(d, ": "), u)
						};
						I ? _("crashed", f) : R && _("hung", f);
						var n = I ? Pe : Ue,
							i;
						if ((M = e.msgHandler) === null || M === void 0 || M.call(e, {
								data: {
									source: V,
									widgetId: f,
									code: n,
									event: "fail",
									rcV: (i = p.nextRcV) !== null && i !== void 0 ? i : Y
								}
							}), 0) var t;
						continue
					}(s = T.contentWindow) === null || s === void 0 || s.postMessage({
						source: V,
						widgetId: f,
						seq: e.watchCatSeq,
						event: "meow"
					}, "*")
				}
			}
		} catch (d) {
			a = !0, o = d
		} finally {
			try {
				!r && c.return != null && c.return()
			} finally {
				if (a) throw o
			}
		}
	}

	function St(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Dr(e)
		}, Lr))
	}

	function It(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || r) && clearInterval(e.watchCatInterval)
	}
	var y = {
		turnstileLoadInitTimeMs: W(),
		isRecaptchaCompatibilityMode: !1,
		scriptWasLoadedAsync: !1,
		isReady: !1,
		widgetMap: new Map,
		lastWidgetIdx: 0,
		upgradeAttempts: 0,
		upgradeCompletedCount: 0,
		apiVersion: 1,
		watchCatInterval: null,
		watchCatSeq: 0
	};

	function Ot(e) {
		Er(e, "")
	}

	function kt() {
		var e = [$t, Jt];
		y.isRecaptchaCompatibilityMode && e.push(Zt), document.querySelectorAll(e.join(", ")).forEach(function(r) {
			return Lt.render(r)
		})
	}
	var Mt = [];

	function hr() {
		y.isReady = !0;
		var e = !0,
			r = !1,
			a = void 0;
		try {
			for (var o = Mt[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var l = c.value;
				l()
			}
		} catch (g) {
			r = !0, a = g
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (r) throw a
			}
		}
	}

	function Pr(e) {
		var r = y.widgetMap.get(e);
		if (!(r === void 0 || r.hasResponseParamEl)) {
			r.hasResponseParamEl = !0;
			var a, o = (a = r.params["response-field"]) !== null && a !== void 0 ? a : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var l;
				c.name = (l = r.params["response-field-name"]) !== null && l !== void 0 ? l : yt, c.id = "".concat(e, "_response"), r.wrapper.appendChild(c);
				var g;
				if (typeof r.params["response-field-name"] != "string" && xr((g = r.params.sitekey) !== null && g !== void 0 ? g : "")) {
					var f = document.createElement("input");
					f.type = "hidden", f.name = ht, f.id = "".concat(e, "_legacy_response"), r.wrapper.appendChild(f)
				}
			}
			if (y.isRecaptchaCompatibilityMode) {
				var p = document.createElement("input");
				p.type = "hidden", p.name = _t, p.id = "".concat(e, "_g_response"), r.wrapper.appendChild(p)
			}
		}
	}

	function Er(e, r) {
		Pr(e);
		var a = document.getElementById("".concat(e, "_response"));
		a !== null && U(a, HTMLInputElement) && (a.value = r);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && U(o, HTMLInputElement) && (o.value = r), y.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && U(c, HTMLInputElement) && (c.value = r)
		}
	}

	function Ct(e, r) {
		var a = r.params,
			o = a.size,
			c = o === void 0 ? "normal" : o,
			l = r.mode;
		switch (l) {
			case q.NON_INTERACTIVE:
			case q.MANAGED:
				switch (c) {
					case k.COMPACT:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case k.INVISIBLE:
						m('Invalid value for parameter "size", expected "'.concat(k.COMPACT, '" or "').concat(k.NORMAL, '", got "').concat(c, '"'), 2817);
					case k.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case k.FLEXIBLE:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break
				}
				break;
			case q.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				m('Invalid value for parameter "mode", expected "'.concat(q.NON_INTERACTIVE, '", "').concat(q.MANAGED, '" or "').concat(q.INVISIBLE, '", got "').concat(l, '"'), 2818)
		}
	}

	function yr(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Ur(e, r) {
		var a = r.get("turnstile_iframe_alt");
		a && (e.title = a)
	}

	function Vr(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function xr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function _r() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Lt = function() {
		var e = function(n, i, t, d) {
				return I.apply(this, arguments)
			},
			r = function(n, i, t) {
				if (n.params.retry === fe.AUTO || t) {
					n.isExecuted && (n.msgQueue.push(oe.EXECUTE), n.isExecuted = !0, n.isExecuting = !0);
					var d, u = t ? 0 : 1e3 * 2 + ((d = n.params["retry-interval"]) !== null && d !== void 0 ? d : 0);
					n.retryTimeout = window.setTimeout(function() {
						s(i)
					}, u)
				}
			},
			a = function(n, i, t) {
				var d;
				n.response === void 0 && m("[Internal Error] Widget was completed but no response was given", 1362), n.isExecuting = !1, n.isComplete = !0, Er(i, n.response), (d = n.cbSuccess) === null || d === void 0 || d.call(n, n.response, t)
			},
			o = function(n) {
				if (!n) return [];
				for (var i = n.attributes, t = i.length, d = new Array(t), u = 0; u < t; u++) d[u] = i[u].name;
				return d
			},
			c = function(n, i, t) {
				if (n.rcV = i, 0) var d
			},
			l = function() {
				var n = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = n.length,
					t;
				do {
					t = "";
					for (var d = 0; d < 5; d++) t += n.charAt(Math.floor(Math.random() * i))
				} while (y.widgetMap.has(t));
				return t
			},
			g = function(n) {
				var i = !0,
					t = !1,
					d = void 0;
				try {
					for (var u = y.widgetMap[Symbol.iterator](), h; !(i = (h = u.next()).done); i = !0) {
						var E = Ae(h.value, 2),
							w = E[0],
							A = E[1];
						if (A.wrapper.parentElement === n) return w
					}
				} catch (S) {
					t = !0, d = S
				} finally {
					try {
						!i && u.return != null && u.return()
					} finally {
						if (t) throw d
					}
				}
				return null
			},
			f = function(n, i, t) {
				for (; n.msgQueue.length;) {
					var d, u = n.msgQueue.pop();
					(d = t.contentWindow) === null || d === void 0 || d.postMessage({
						source: V,
						widgetId: i,
						event: u
					}, "*")
				}
			},
			p = function(n, i) {
				if (i) {
					var t = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						d = [],
						u = !0,
						h = !1,
						E = void 0;
					try {
						for (var w = t[Symbol.iterator](), A; !(u = (A = w.next()).done); u = !0) {
							var S = A.value;
							i[S] && i[S] !== n.params[S] && d.push(S)
						}
					} catch (F) {
						h = !0, E = F
					} finally {
						try {
							!u && w.return != null && w.return()
						} finally {
							if (h) throw E
						}
					}
					d.length !== 0 && m("The parameters ".concat(t.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(d.join(",")), 3618), i.action && (lt(i.action) || m('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), n.action = i.action), i.cData && (ut(i.cData) || m('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), n.cData = i.cData), i["after-interactive-callback"] && (n.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (n.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (n.cbSuccess = i.callback), i["expired-callback"] && (n.cbExpired = i["expired-callback"]), i["timeout-callback"] && (n.cbTimeout = i["timeout-callback"]), i["error-callback"] && (n.cbError = i["error-callback"]), i["unsupported-callback"] && (n.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (n.chlPageData = i.chlPageData)
				}
			},
			s = function(n) {
				var i = R(n);
				i || m("Nothing to reset found for provided container", 3329);
				var t = y.widgetMap.get(i);
				if (t) {
					t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isComplete = !1, t.isExecuting = !1, t.isExpired = !1, t.isFailed = !1, t.isInitialized = !1, t.isStale = !1, t.watchcat.lastAckedSeq = 0, t.watchcat.seq = 0, t.params.execution === pe.RENDER && (t.msgQueue.push(oe.EXECUTE), t.isExecuted = !0, t.isExecuting = !0);
					var d = K(i),
						u = t.shadow.querySelector("#".concat(d));
					(!d || !u) && m("Widget ".concat(i, " to reset was not found."), 3330), t.params.appearance === X.INTERACTION_ONLY && yr(u), t.params.sitekey === null && m("Unexpected Error: Sitekey is null", 3347);
					var h;
					u.src = xt(i, t.params.sitekey, t.params, (h = t.rcV) !== null && h !== void 0 ? h : Y, !1, "b", gt(t)), Ot(d), t.retryTimeout && window.clearTimeout(t.retryTimeout)
				} else m("Widget ".concat(i, " to reset was not found."), 3331)
			},
			x = function(n) {
				var i, t = R(n);
				if (!t || !y.widgetMap.has(t)) {
					b("Nothing to remove found for the provided container.");
					return
				}
				var d = K(t),
					u = ["input#".concat(d, "_response"), "input#".concat(d, "_legacy_response"), "input#".concat(d, "_g_response")];
				document.querySelectorAll(u.join(", ")).forEach(function(w) {
					return w.remove()
				});
				var h = y.widgetMap.get(t);
				h == null || h.shadow.querySelectorAll(u.join(", ")).forEach(function(w) {
					return w.remove()
				}), h == null || h.wrapper.remove();
				var E = (i = y.widgetMap.get(t)) === null || i === void 0 ? void 0 : i.retryTimeout;
				E && window.clearTimeout(E), y.widgetMap.delete(t), It(y)
			},
			T = function(n, i) {
				var t, d, u = W(),
					h;
				if (typeof n == "string") try {
					var E = document.querySelector(n);
					E || m('Unable to find a container for "'.concat(n, '"'), 3585), h = E
				} catch (Ut) {
					m('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(n, '"'), 3586)
				} else U(n, HTMLElement) ? h = n : m('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var w = !0,
					A = !1,
					S = void 0;
				try {
					for (var F = y.widgetMap.values()[Symbol.iterator](), H; !(w = (H = F.next()).done); w = !0) {
						var Z = H.value;
						if (h.contains(Z.wrapper)) {
							b("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (Ut) {
					A = !0, S = Ut
				} finally {
					try {
						!w && F.return != null && F.return()
					} finally {
						if (A) throw S
					}
				}
				var D = Wr(h);
				if (D) {
					var v = Object.assign(D, i),
						ge = v.action,
						ee = v.cData,
						Oe = v.chlPageData,
						B = v.sitekey,
						te;
					v.theme = (te = v.theme) !== null && te !== void 0 ? te : Ve.AUTO;
					var le;
					v.retry = (le = v.retry) !== null && le !== void 0 ? le : fe.AUTO;
					var re;
					v.execution = (re = v.execution) !== null && re !== void 0 ? re : pe.RENDER;
					var he;
					v.appearance = (he = v.appearance) !== null && he !== void 0 ? he : X.ALWAYS;
					var ae;
					v["retry-interval"] = Number((ae = v["retry-interval"]) !== null && ae !== void 0 ? ae : er);
					var ye;
					v["expiry-interval"] = Number((ye = v["expiry-interval"]) !== null && ye !== void 0 ? ye : (Kt - Qt) * 1e3);
					var ue;
					v.size = (ue = v.size) !== null && ue !== void 0 ? ue : k.NORMAL;
					var _e = v.callback,
						be = v["expired-callback"],
						Ce = v["timeout-callback"],
						Ee = v["after-interactive-callback"],
						xe = v["before-interactive-callback"],
						G = v["error-callback"],
						Ye = v["unsupported-callback"];
					typeof B != "string" && m('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof B == "undefined" ? "undefined" : P(B), '"'), 3588), Xt(B) || m('Invalid input for parameter "sitekey", got "'.concat(B, '"'), 3589), st(v.size) || m('Invalid type for parameter "size", expected normal|compact, got "'.concat(v.size, '" ').concat(P(v.size)), 3590), nt(v.theme) || m('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(v.theme, '" ').concat(P(v.theme)), 3591), it(v.retry) || m('Invalid type for parameter "retry", expected never|auto, got "'.concat(v.retry, '" ').concat(P(v.retry)), 3592), v.language || (v.language = "auto"), pt(v.language) || (b('Invalid language value: "'.concat(v.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), v.language = "auto"), vt(v.appearance) || m('Unknown appearance value: "'.concat(v.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), mt(v.execution) || m('Unknown execution value: "'.concat(v.execution, ", expected either: 'render' or 'execute'."), 3601), ot(v["retry-interval"]) || m('Invalid retry-interval value: "'.concat(v["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), ct(v["expiry-interval"]) || m('Invalid expiry-interval value: "'.concat(v["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var we, Q = (we = v["refresh-expired"]) !== null && we !== void 0 ? we : $.AUTO;
					dt(Q) ? v["refresh-expired"] = Q : m('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(Q, '" ').concat(typeof Q == "undefined" ? "undefined" : P(Q)), 3603);
					var Te, ne = (Te = v["refresh-timeout"]) !== null && Te !== void 0 ? Te : ie.AUTO;
					ft(Q) ? v["refresh-timeout"] = ne : m('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(ne, '" ').concat(typeof ne == "undefined" ? "undefined" : P(ne)), 3603);
					var j = document.createElement("iframe"),
						se = document.createElement("div"),
						Ft = se.attachShadow({
							mode: "closed"
						});
					lt(ge) || m('Invalid input for optional parameter "action", got "'.concat(ge, '"'), 3604), ut(ee) || m('Invalid input for optional parameter "cData", got "'.concat(ee, '"'), 3605);
					var Re = l(),
						de = K(Re);
					if (!(!Re || !de)) {
						var Dt = [],
							Ke = v.execution === pe.RENDER;
						Ke && Dt.push(oe.EXECUTE), y.lastWidgetIdx++;
						var wr = {};
						y.widgetMap.set(Re, tt(Fe({
							idx: y.lastWidgetIdx,
							action: ge,
							cData: ee,
							chlPageData: Oe,
							cbSuccess: _e,
							cbError: G,
							cbExpired: be,
							cbTimeout: Ce,
							cbUnsupported: Ye,
							cbAfterInteractive: Ee,
							cbBeforeInteractive: xe,
							params: v,
							isStale: !1,
							isComplete: !1,
							isExpired: !1,
							isExecuting: Ke,
							isFailed: !1,
							isResetting: !1,
							isExecuted: Ke,
							isInitialized: !1,
							hasResponseParamEl: !1,
							msgQueue: Dt,
							rcV: Y,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0
							}
						}, wr), {
							widgetRenderStartTimeMs: u,
							widgetRenderEndTimeMs: 0,
							widgetParamsStartTimeMs: 0,
							widgetInitStartTimeMs: 0,
							shadow: Ft,
							wrapper: se,
							isOverrunning: !1
						})), St(y);
						var Qe = y.widgetMap.get(Re);
						Qe || m("Turnstile Initialization Error ", 3606), j.style.display = "none", j.style.border = "none", j.style.overflow = "hidden", j.setAttribute("src", xt(Re, B, v, Y, !1, "b", gt(Qe))), j.onerror = function() {
							if (G) {
								G == null || G(String(zt.code));
								return
							}
							m("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var Pt = ["cross-origin-isolated", "fullscreen", "autoplay"],
							$e;
						L(($e = (d = document.featurePolicy) === null || d === void 0 || (t = d.features) === null || t === void 0 ? void 0 : t.call(d)) !== null && $e !== void 0 ? $e : [], bt) && Pt.push(bt), j.setAttribute("allow", Pt.join("; ")), j.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), j.id = de;
						var Je;
						j.tabIndex = (Je = v.tabindex) !== null && Je !== void 0 ? Je : 0, j.title = "Widget containing a Cloudflare security challenge", Ft.appendChild(j);
						var Ze, Tr = (Ze = v["response-field"]) !== null && Ze !== void 0 ? Ze : !0;
						if (Tr) {
							var Ne = document.createElement("input");
							Ne.type = "hidden";
							var et;
							if (Ne.name = (et = v["response-field-name"]) !== null && et !== void 0 ? et : yt, Ne.id = "".concat(de, "_response"), se.appendChild(Ne), typeof v["response-field-name"] != "string" && xr(B)) {
								var ke = document.createElement("input");
								ke.type = "hidden", ke.name = ht, ke.id = "".concat(de, "_legacy_response"), se.appendChild(ke)
							}
						}
						if (y.isRecaptchaCompatibilityMode) {
							var Le = document.createElement("input");
							Le.type = "hidden", Le.name = _t, Le.id = "".concat(de, "_g_response"), se.appendChild(Le)
						}
						return h.appendChild(se), Qe.widgetRenderEndTimeMs = W(), de
					}
				}
			},
			N = function() {
				var n, i = -1,
					t = !0,
					d = !1,
					u = void 0;
				try {
					for (var h = y.widgetMap[Symbol.iterator](), E; !(t = (E = h.next()).done); t = !0) {
						var w = Ae(E.value, 2),
							A = w[0],
							S = w[1];
						i < S.idx && (n = A, i = S.idx)
					}
				} catch (F) {
					d = !0, u = F
				} finally {
					try {
						!t && h.return != null && h.return()
					} finally {
						if (d) throw u
					}
				}
				return i === -1 && m("Could not find widget", 43778), n
			};

		function I() {
			return I = Wt(function(_, n, i, t) {
				var d, u, h, E, w, A, S, F, H, Z;
				return De(this, function(D) {
					switch (D.label) {
						case 0:
							if (d = _.params.sitekey, u = _r(), !u) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(_, n, !1), [2];
							h = "h/".concat("b", "/"), E = new URL(u), w = "https", A = "", S = "".concat(w, "://").concat(E.host, "/cdn-cgi/challenge-platform/").concat(h, "rc/").concat(t).concat(A), D.label = 1;
						case 1:
							return D.trys.push([1, 6, , 7]), [4, fetch(S, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: d,
									secondaryToken: i
								})
							})];
						case 2:
							return F = D.sent(), F.status === 200 ? [3, 3] : (b("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), a(_, n, !1), [3, 5]);
						case 3:
							return [4, F.json()];
						case 4:
							if (H = D.sent(), "status" in H && H.status === "redeemed") return a(_, n, !0), [2];
							D.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return Z = D.sent(), b("Error contacting Turnstile, aborting clearance remdeption."), a(_, n, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), I.apply(this, arguments)
		}
		var O = function(_) {
			var n = _.data;
			if (n.source === V) {
				if (!Vr(_)) {
					b("Ignored message from wrong origin: ".concat(_.origin, "."));
					return
				}
				if (!(!n.widgetId || !y.widgetMap.has(n.widgetId))) {
					var i = K(n.widgetId),
						t = y.widgetMap.get(n.widgetId);
					if (!(!i || !t)) switch (n.event) {
						case "init": {
							var d;
							t.widgetInitStartTimeMs = W();
							var u = t.shadow.getElementById(i);
							u || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), t.mode = n.mode, t.nextRcV = n.nextRcV, t.mode === q.INVISIBLE && t.params["refresh-expired"] === $.MANUAL && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat($.AUTO, "' or '").concat($.NEVER, ".'")), t.mode !== q.MANAGED && t.params["refresh-timeout"] !== ie.AUTO && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), t.params.appearance === X.ALWAYS || t.isExecuting && t.params.appearance === X.EXECUTE ? Ct(u, t) : yr(u), u.style.display = "";
							var h = t.shadow.querySelector("#".concat(i));
							h || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), (d = h.contentWindow) === null || d === void 0 || d.postMessage({
								source: V,
								widgetId: n.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var E = t.shadow.getElementById(i);
							E || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var w = new Map;
							t.displayLanguage = n.displayLanguage, Object.keys(n.translationData).forEach(function(ne) {
								w.set(ne, n.translationData[ne])
							}), Ur(E, w);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(t.params.language, " is not supported, falling back to: ").concat(n.fallback, ".")), t.displayLanguage = n.fallback;
							break
						}
						case "reject": {
							var A = t.shadow.getElementById(i);
							if (t.isExecuting = !1, A || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), n.reason === "outdated_browser") {
								var S;
								(S = t.cbUnsupported) === null || S === void 0 || S.call(t)
							}
							break
						}
						case "food": {
							t.watchcat && n.seq > t.watchcat.lastAckedSeq && (t.watchcat.lastAckedSeq = n.seq);
							break
						}
						case "overrunBegin": {
							t.isOverrunning = !0, t.watchcat && (t.watchcat.overrunBeginSeq = t.watchcat.lastAckedSeq);
							break
						}
						case "overrunEnd": {
							t.isOverrunning = !1;
							break
						}
						case "complete": {
							c(t, Y, n.widgetId), t.response = n.token, n.sToken ? e(t, i, n.sToken, n.chlId) : a(t, i, !1);
							break
						}
						case "fail": {
							n.rcV && c(t, n.rcV, n.widgetId), n.cfChlOut && (t.cfChlOut = n.cfChlOut), n.cfChlOutS && (t.cfChlOutS = n.cfChlOutS), n.code && (t.errorCode = n.code), t.isExecuting = !1, t.isFailed = !0, t.isInitialized = !0, Ot(i);
							var F = t.cbError,
								H = n.code === Pe || n.code === Ue;
							if (H) {
								var Z, D = t.shadow.querySelector("#".concat(i));
								D == null || (Z = D.contentWindow) === null || Z === void 0 || Z.postMessage({
									source: V,
									widgetId: n.widgetId,
									event: "forceFail"
								}, "*")
							}
							if (F) {
								var v;
								F(String((v = n.code) !== null && v !== void 0 ? v : Gt)) ? t.params.retry === fe.AUTO && !t.isResetting && r(t, i, H) : (n.code && b("Error: ".concat(n.code, ".")), r(t, i, H))
							} else n.code ? (r(t, i, H), m("Error: ".concat(n.code), 3076)) : r(t, i, !1);
							break
						}
						case "feedbackInit": {
							var ge = t.wrapper.querySelector("#".concat(i, "-fr"));
							if (ge) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							Rt(i, t);
							break
						}
						case "requestFeedbackData": {
							var ee, Oe = t.shadow.querySelector("#".concat(i));
							Oe || m("Received state for an unknown widget: #".concat(i, " / ").concat(n.widgetId), 3078), (ee = Oe.contentWindow) === null || ee === void 0 || ee.postMessage({
								source: V,
								widgetId: n.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var B, te, le = (B = t.wrapper.parentNode) === null || B === void 0 ? void 0 : B.querySelector("#".concat(i, "-fr"));
							le || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), (te = le.contentWindow) === null || te === void 0 || te.postMessage({
								source: V,
								widgetId: n.widgetId,
								event: "feedbackData",
								rayId: n.rayId,
								rcV: n.rcV,
								cfChlOut: t.cfChlOut,
								cfChlOutS: t.cfChlOutS,
								errorCode: t.errorCode,
								sitekey: n.sitekey,
								mode: n.mode,
								issuanceUserAgent: n.issuanceUserAgent
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var re, he = (re = t.wrapper.parentNode) === null || re === void 0 ? void 0 : re.querySelector("#".concat(i, "-fr"));
							he || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), dr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ae, ye = n.token;
							t.isExpired = !0, (ae = t.cbExpired) === null || ae === void 0 || ae.call(t, ye), t.params["refresh-expired"] === $.AUTO && !t.isResetting && s(i);
							break
						}
						case "interactiveTimeout": {
							c(t, Y, n.widgetId), Ot(i);
							var ue = t.cbTimeout;
							if (ue ? ue() : t.params["refresh-timeout"] === ie.NEVER && !t.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), t.params["refresh-timeout"] === ie.AUTO && !t.isResetting) {
								var _e = t.cbAfterInteractive;
								_e == null || _e(), s(i)
							}
							break
						}
						case "refreshRequest": {
							c(t, Y, n.widgetId), s(i);
							break
						}
						case "reloadRequest": {
							c(t, n.nextRcV, n.widgetId), s(i);
							break
						}
						case "interactiveBegin": {
							var be, Ce = t.shadow.getElementById(i);
							Ce || m("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (be = t.cbBeforeInteractive) === null || be === void 0 || be.call(t), t.params.appearance === X.INTERACTION_ONLY && Ct(Ce, t);
							break
						}
						case "interactiveEnd": {
							var Ee;
							(Ee = t.cbAfterInteractive) === null || Ee === void 0 || Ee.call(t);
							break
						}
						case "widgetStale": {
							t.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var xe;
							t.widgetParamsStartTimeMs = W();
							var G = t.shadow.querySelector("#".concat(i));
							G || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), t.isResetting = !1;
							var Ye = {},
								we = W(),
								Q = {
									"w.iW": window.innerWidth,
									"ht.atrs": o(document.body.parentNode),
									pi: {
										xp: fr(t.wrapper).substring(0, ar),
										pfp: pr(document, tr, rr),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: vr(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href,
										sR: t.wrapper.shadowRoot === null
									}
								},
								Te = W() - we;
							(xe = G.contentWindow) === null || xe === void 0 || xe.postMessage(Fe({
								source: V,
								widgetId: n.widgetId,
								event: "extraParams",
								action: t.action,
								cData: t.cData,
								chlPageData: t.chlPageData,
								rcV: t.rcV,
								ch: "388c99dd0998",
								url: _r(),
								retry: t.params.retry,
								"expiry-interval": t.params["expiry-interval"],
								"retry-interval": t.params["retry-interval"],
								"refresh-expired": t.params["refresh-expired"],
								"refresh-timeout": t.params["refresh-timeout"],
								language: t.params.language,
								execution: t.params.execution,
								appearance: t.params.appearance,
								wPr: Q,
								turnstileAgeMs: W() - y.turnstileLoadInitTimeMs,
								widgetAgeMs: W() - t.widgetRenderStartTimeMs,
								upgradeAttempts: y.upgradeAttempts,
								upgradeCompletedCount: y.upgradeCompletedCount,
								timeRenderMs: t.widgetRenderEndTimeMs - t.widgetRenderStartTimeMs,
								timeToInitMs: t.widgetInitStartTimeMs - t.widgetRenderEndTimeMs,
								timeToParamsMs: t.widgetParamsStartTimeMs - t.widgetInitStartTimeMs,
								tiefTimeMs: Te
							}, Ye), "*"), f(t, n.widgetId, G), t.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		y.msgHandler = O, window.addEventListener("message", O);

		function R(_) {
			if (typeof _ == "string") {
				var n = qe(_);
				if (n && y.widgetMap.has(n)) return n;
				if (y.widgetMap.has(_)) return _;
				try {
					var i = document.querySelector(_);
					return i ? R(i) : null
				} catch (t) {
					return null
				}
			}
			return U(_, Element) ? g(_) : _ || y.widgetMap.size === 0 ? null : y.widgetMap.keys().next().value
		}
		var M = {};
		return tt(Fe({}, M), {
			ready: function(n) {
				if (y.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), m("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof n != "function" && m('turnstile.ready() expected a "function" argument, got "'.concat(typeof n == "undefined" ? "undefined" : P(n), '"'), 3841), y.isReady) {
					n();
					return
				}
				Mt.push(n)
			},
			implicitRender: kt,
			execute: function(n, i) {
				var t = R(n);
				if (!t) {
					i === void 0 && m("Please provide 2 parameters to execute: container and parameters", 43521);
					var d = T(n, i);
					d || m("Failed to render widget", 43522), t = d
				}
				var u = y.widgetMap.get(t);
				if (u) {
					p(u, i);
					var h = K(t);
					if (u.isExecuting) {
						b("Call to execute() on a widget that is already executing (".concat(h, "), consider using reset() before execute()."));
						return
					} else u.isExecuting = !0;
					if (u.response) {
						var E;
						u.isExecuting = !1, b("Call to execute() on a widget that was already executed (".concat(h, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (E = u.cbSuccess) === null || E === void 0 || E.call(u, u.response, !1);
						return
					}
					u.isExpired && b("Call to execute on a expired-widget (".concat(h, "), consider using reset() before.")), u.isStale && (s(h), u.isExecuting = !0), u.msgQueue.push(oe.EXECUTE), u.isExecuted = !0;
					var w = u.shadow.querySelector("#".concat(h));
					if (w || (u.isExecuting = !1, m("Widget ".concat(h, " to execute was not found"), 43522)), u.isResetting) return;
					if (u.isInitialized && f(u, t, w), u.isInitialized && u.params.appearance === X.EXECUTE && Ct(w, u), u.isExecuting) {
						var A, S = u.shadow.querySelector("#".concat(h));
						S || m("Received state for an unknown widget: ".concat(t), 3078), (A = S.contentWindow) === null || A === void 0 || A.postMessage({
							source: V,
							widgetId: t,
							event: "execute"
						}, "*")
					}
				}
			},
			render: T,
			reset: s,
			remove: x,
			_private: {
				showFeedback: function(n) {
					var i = R(n);
					if (i) {
						var t = K(i);
						if (t) {
							var d = y.widgetMap.get(i);
							d && Rt(t, d)
						}
					}
				}
			},
			getResponse: function(n) {
				var i;
				if (typeof n == "undefined") {
					var t = N();
					if (t) {
						var d, u = y.widgetMap.get(t);
						return u != null && u.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), (d = y.widgetMap.get(t)) === null || d === void 0 ? void 0 : d.response
					} else m("Could not find a widget", 43794)
				}
				var h = R(n);
				return h || m("Could not find widget for provided container", 43778), (i = y.widgetMap.get(h)) === null || i === void 0 ? void 0 : i.response
			},
			isExpired: function(n) {
				var i;
				if (typeof n == "undefined") {
					var t = N();
					if (t) {
						var d, u;
						return (u = (d = y.widgetMap.get(t)) === null || d === void 0 ? void 0 : d.isExpired) !== null && u !== void 0 ? u : !1
					} else m("Could not find a widget", 43794)
				}
				var h = R(n);
				h || m("Could not find widget for provided container", 43778);
				var E;
				return (E = (i = y.widgetMap.get(h)) === null || i === void 0 ? void 0 : i.isExpired) !== null && E !== void 0 ? E : !1
			}
		})
	}();

	function Wr(e) {
		var r = e.getAttribute("data-sitekey"),
			a = {
				sitekey: r
			},
			o = e.getAttribute("data-tabindex");
		o && (a.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (nt(c) ? a.theme = c : b('Unknown data-theme value: "'.concat(c, '".')));
		var l = e.getAttribute("data-size");
		if (l && (st(l) ? a.size = l : b('Unknown data-size value: "'.concat(l, '".'))), 0) var g;
		var f = e.getAttribute("data-action");
		typeof f == "string" && (a.action = f);
		var p = e.getAttribute("data-cdata");
		typeof p == "string" && (a.cData = p);
		var s = e.getAttribute("data-retry");
		s && (it(s) ? a.retry = s : b('Invalid data-retry value: "'.concat(s, ", expected either 'never' or 'auto'\".")));
		var x = e.getAttribute("data-retry-interval");
		if (x) {
			var T = Number.parseInt(x, 10);
			ot(T) ? a["retry-interval"] = T : b('Invalid data-retry-interval value: "'.concat(x, ', expected an integer value > 0 and < 900000".'))
		}
		var N = e.getAttribute("data-expiry-interval");
		if (N) {
			var I = Number.parseInt(N, 10);
			ct(I) ? a["expiry-interval"] = I : b('Invalid data-expiry-interval value: "'.concat(I, ', expected an integer value > 0 and < 360000".'))
		}
		var O = e.getAttribute("data-refresh-expired");
		O && (dt(O) ? a["refresh-expired"] = O : b('Unknown data-refresh-expired value: "'.concat(O, ", expected either: 'never', 'auto' or 'manual'.")));
		var R = e.getAttribute("data-refresh-timeout");
		R && (ft(R) ? a["refresh-timeout"] = R : b('Unknown data-refresh-timeout value: "'.concat(R, ", expected either: 'never', 'auto' or 'manual'.")));
		var M = e.getAttribute("data-language");
		M && (pt(M) ? a.language = M : b('Invalid data-language value: "'.concat(M, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function _(w) {
			var A = e.getAttribute(w);
			return A && window[A] ? window[A] : void 0
		}
		var n = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		n.forEach(function(w) {
			a[w] = _("data-".concat(w))
		});
		var i = e.getAttribute("data-feedback-enabled");
		i ? (Yt(i) || b('Invalid data-feedback-enabled value: "'.concat(i, ", expected either: 'true' or 'false'. Value is ignored.")), a["feedback-enabled"] = i === "true") : a["feedback-enabled"] = !0;
		var t, d = (t = e.getAttribute("data-response-field")) !== null && t !== void 0 ? t : "true";
		a["response-field"] = d === "true";
		var u = e.getAttribute("data-response-field-name");
		u && (a["response-field-name"] = u);
		var h = e.getAttribute("data-execution");
		h && (mt(h) ? a.execution = h : b('Unknown data-execution value: "'.concat(h, ", expected either: 'render' or 'execute'.")));
		var E = e.getAttribute("data-appearance");
		return E && (vt(E) ? a.appearance = E : b('Unknown data-appearance value: "'.concat(E, ", expected either: 'always', 'execute', or 'interaction-only'."))), a
	}

	function Hr() {
		var e = !0;
		It(y, e), y.msgHandler && window.removeEventListener("message", y.msgHandler), mr(window.turnstile, y)
	}
	ve = !1, C = sr(), y.scriptWasLoadedAsync = (ze = C == null ? void 0 : C.loadedAsync) !== null && ze !== void 0 ? ze : !1, C != null && C.params && (me = C.params.get("compat"), (me == null ? void 0 : me.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled.") : (b("Compatibility layer enabled."), y.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Lt) : me !== null && b('Unknown value for api.js?compat: "'.concat(me, '", ignoring.')), C.params.forEach(function(e, r) {
		L(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], r) || b('Unknown parameter passed to api.js: "?'.concat(r, '=...", ignoring.'))
	}), ve = C.params.get("_upgrade") === "true", z = C.params.get("onload"), z && !ve && setTimeout(function() {
		typeof window[z] == "function" ? window[z]() : (b("Unable to find onload callback '".concat(z, "' immediately after loading, expected 'function', got '").concat(P(window[z]), "'.")), setTimeout(function() {
			typeof window[z] == "function" ? window[z]() : b("Unable to find onload callback '".concat(z, "' after 1 second, expected 'function', got '").concat(P(window[z]), "'."))
		}, 1e3))
	}, 0)), Nt = "turnstile" in window, Nt && !ve ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Nt && ve && (gr(window.turnstile, y), St(y), (C == null || (Ge = C.params) === null || Ge === void 0 ? void 0 : Ge.get("render")) !== "explicit" && setTimeout(kt, 0)), window.turnstile = Lt, ve || ((C == null || (Xe = C.params) === null || Xe === void 0 ? void 0 : Xe.get("render")) !== "explicit" && Mt.push(kt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(hr, 0) : window.addEventListener("DOMContentLoaded", hr))), br = 24 * 60 * 60 * 1e3, window.setTimeout(Hr, br);
	var ve, C, ze, me, z, Nt, Ge, Xe, br;
})();