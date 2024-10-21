"use strict";
(function() {
	function Wt(e, r, n, o, c, l, h) {
		try {
			var f = e[l](h),
				p = f.value
		} catch (s) {
			n(s);
			return
		}
		f.done ? r(p) : Promise.resolve(p).then(o, c)
	}

	function Ht(e) {
		return function() {
			var r = this,
				n = arguments;
			return new Promise(function(o, c) {
				var l = e.apply(r, n);

				function h(p) {
					Wt(l, o, c, h, f, "next", p)
				}

				function f(p) {
					Wt(l, o, c, h, f, "throw", p)
				}
				h(void 0)
			})
		}
	}

	function V(e, r) {
		return r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : V(e, r)
	}

	function Me(e, r, n) {
		return r in e ? Object.defineProperty(e, r, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = n, e
	}

	function Fe(e) {
		for (var r = 1; r < arguments.length; r++) {
			var n = arguments[r] != null ? arguments[r] : {},
				o = Object.keys(n);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(c) {
				return Object.getOwnPropertyDescriptor(n, c).enumerable
			}))), o.forEach(function(c) {
				Me(e, c, n[c])
			})
		}
		return e
	}

	function Ar(e, r) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), n.push.apply(n, o)
		}
		return n
	}

	function rt(e, r) {
		return r = r != null ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ar(Object(r)).forEach(function(n) {
			Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
		}), e
	}

	function Bt(e) {
		if (Array.isArray(e)) return e
	}

	function jt(e, r) {
		var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var o = [],
				c = !0,
				l = !1,
				h, f;
			try {
				for (n = n.call(e); !(c = (h = n.next()).done) && (o.push(h.value), !(r && o.length === r)); c = !0);
			} catch (p) {
				l = !0, f = p
			} finally {
				try {
					!c && n.return != null && n.return()
				} finally {
					if (l) throw f
				}
			}
			return o
		}
	}

	function qt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function nt(e, r) {
		(r == null || r > e.length) && (r = e.length);
		for (var n = 0, o = new Array(r); n < r; n++) o[n] = e[n];
		return o
	}

	function zt(e, r) {
		if (e) {
			if (typeof e == "string") return nt(e, r);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(n);
			if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nt(e, r)
		}
	}

	function Ae(e, r) {
		return Bt(e) || jt(e, r) || zt(e, r) || qt()
	}

	function U(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function De(e, r) {
		var n = {
				label: 0,
				sent: function() {
					if (l[0] & 1) throw l[1];
					return l[1]
				},
				trys: [],
				ops: []
			},
			o, c, l, h;
		return h = {
			next: f(0),
			throw: f(1),
			return: f(2)
		}, typeof Symbol == "function" && (h[Symbol.iterator] = function() {
			return this
		}), h;

		function f(s) {
			return function(w) {
				return p([s, w])
			}
		}

		function p(s) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; h && (h = 0, s[0] && (n = 0)), n;) try {
				if (o = 1, c && (l = s[0] & 2 ? c.return : s[0] ? c.throw || ((l = c.return) && l.call(c), 0) : c.next) && !(l = l.call(c, s[1])).done) return l;
				switch (c = 0, l && (s = [s[0] & 2, l.value]), s[0]) {
					case 0:
					case 1:
						l = s;
						break;
					case 4:
						return n.label++, {
							value: s[1],
							done: !1
						};
					case 5:
						n.label++, c = s[1], s = [0];
						continue;
					case 7:
						s = n.ops.pop(), n.trys.pop();
						continue;
					default:
						if (l = n.trys, !(l = l.length > 0 && l[l.length - 1]) && (s[0] === 6 || s[0] === 2)) {
							n = 0;
							continue
						}
						if (s[0] === 3 && (!l || s[1] > l[0] && s[1] < l[3])) {
							n.label = s[1];
							break
						}
						if (s[0] === 6 && n.label < l[1]) {
							n.label = l[1], l = s;
							break
						}
						if (l && n.label < l[2]) {
							n.label = l[2], n.ops.push(s);
							break
						}
						l[2] && n.ops.pop(), n.trys.pop();
						continue
				}
				s = r.call(e, n)
			} catch (w) {
				s = [6, w], c = 0
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
	var Gt = {
		code: 200500,
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?"
	};
	var Xt = 300020;
	var Ue = 300030;
	var Ve = 300031;
	var q;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(q || (q = {}));
	var k;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible", e.FLEXIBLE = "flexible"
	})(k || (k = {}));
	var Pe;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Pe || (Pe = {}));
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

	function it(e) {
		return L(["auto", "dark", "light"], e)
	}

	function ot(e) {
		return L(["auto", "never"], e)
	}

	function ct(e) {
		return e > 0 && e < 9e5
	}

	function lt(e) {
		return e > 0 && e < 36e4
	}
	var Sr = /^[0-9A-Za-z_-]{3,100}$/;

	function Yt(e) {
		return Sr.test(e)
	}
	var Ir = /^[a-z0-9_-]{0,32}$/i;

	function ut(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ir.test(e)
	}
	var Or = /^[a-z0-9_\-=]{0,255}$/i;

	function st(e) {
		return e === void 0 ? !0 : typeof e == "string" && Or.test(e)
	}

	function dt(e) {
		return L([k.NORMAL, k.COMPACT, k.INVISIBLE, k.FLEXIBLE], e)
	}

	function ft(e) {
		return L(["auto", "manual", "never"], e)
	}

	function pt(e) {
		return L(["auto", "manual", "never"], e)
	}
	var Cr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function vt(e) {
		return e === "auto" || Cr.test(e)
	}

	function mt(e) {
		return L(["always", "execute", "interaction-only"], e)
	}

	function Kt(e) {
		return L(["true", "false"], e)
	}

	function gt(e) {
		return L(["render", "execute"], e)
	}
	var Qt = 300,
		$t = 10;

	function ht(e) {
		var r = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && r.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && r.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), r.size !== 0) return r.toString()
	}
	var We = "cf-chl-widget-",
		P = "cloudflare-challenge",
		Jt = ".cf-turnstile",
		Zt = ".cf-challenge",
		er = ".g-recaptcha",
		yt = "cf_challenge_response",
		_t = "cf-turnstile-response",
		bt = "g-recaptcha-response",
		tr = 8e3,
		Et = "private-token",
		rr = 3,
		nr = 500,
		ar = 500,
		Y = "0/0";
	var Nr = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		kr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];

	function xt(e, r) {
		var n = "https://challenges.cloudflare.com";
		if (r) {
			var o;
			n = (o = e["base-url"]) !== null && o !== void 0 ? o : n
		}
		return n
	}

	function wt(e, r, n, o, c, l, h) {
		var f = xt(n, c),
			p = l ? "h/".concat(l, "/") : "",
			s = h ? "?".concat(h) : "",
			w = n["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(f, "/cdn-cgi/challenge-platform/").concat(p, "turnstile/if/ov2/av0/rcv").concat(o, "/").concat(e, "/").concat(r, "/").concat(n.theme, "/").concat(w, "/").concat(n.size, "/").concat(n.language, "/").concat(s)
	}
	var Tt = function(e) {
			var r, n, o = window.innerWidth < 400,
				c = e.state === Se.FAILURE_FEEDBACK || e.state === Se.FAILURE_HAVING_TROUBLES,
				l, h = L(Nr, (l = (r = e.displayLanguage) === null || r === void 0 ? void 0 : r.toLowerCase()) !== null && l !== void 0 ? l : "nonexistent"),
				f, p = L(kr, (f = (n = e.displayLanguage) === null || n === void 0 ? void 0 : n.toLowerCase()) !== null && f !== void 0 ? f : "nonexistent");
			return o ? Lr({
				isModeratelyVerbose: p,
				isVerboseLanguage: h,
				isSmallerFeedback: c
			}) : c && h ? "520px" : c && p ? "500px" : c ? "480px" : h ? "580px" : "570px"
		},
		Lr = function(e) {
			var r = e.isVerboseLanguage,
				n = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return n && r ? "540px" : n && o ? "500px" : n ? "480px" : r ? "650px" : o ? "590px" : "570px"
		};

	function He(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function ir(e, r) {
		if (!V(e, r)) throw new TypeError("Cannot call a class as a function")
	}

	function J(e, r) {
		return J = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, J(e, r)
	}

	function or(e, r) {
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

	function Ie(e, r, n) {
		return Be() ? Ie = Reflect.construct : Ie = function(c, l, h) {
			var f = [null];
			f.push.apply(f, l);
			var p = Function.bind.apply(c, f),
				s = new p;
			return h && J(s, h.prototype), s
		}, Ie.apply(null, arguments)
	}

	function ce(e) {
		return ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
			return n.__proto__ || Object.getPrototypeOf(n)
		}, ce(e)
	}

	function cr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function je(e) {
		var r = typeof Map == "function" ? new Map : void 0;
		return je = function(o) {
			if (o === null || !cr(o)) return o;
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

	function lr(e, r) {
		return r && (U(r) === "object" || typeof r == "function") ? r : He(e)
	}

	function ur(e) {
		var r = Be();
		return function() {
			var o = ce(e),
				c;
			if (r) {
				var l = ce(this).constructor;
				c = Reflect.construct(o, arguments, l)
			} else c = o.apply(this, arguments);
			return lr(this, c)
		}
	}
	var sr = function(e) {
		"use strict";
		or(n, e);
		var r = ur(n);

		function n(o, c) {
			ir(this, n);
			var l;
			return l = r.call(this, o), Me(He(l), "code", void 0), l.name = "TurnstileError", l.code = c, l
		}
		return n
	}(je(Error));

	function g(e, r) {
		var n = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new sr(n, r)
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

	function Rt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (V(r, HTMLScriptElement) && e.test(r.src)) return r;
		for (var n = document.querySelectorAll("script"), o = 0, c; c = n[o]; o++)
			if (V(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function dr() {
		var e = Rt();
		e || g("Could not find Turnstile script tag, some features may not be available", 43777);
		var r = e.src,
			n = {
				loadedAsync: !1,
				params: new URLSearchParams,
				src: r
			};
		(e.async || e.defer) && (n.loadedAsync = !0);
		var o = r.split("?");
		return o.length > 1 && (n.params = new URLSearchParams(o[1])), n
	}

	function W() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}
	var At = function(e, r) {
			var n = xt(r.params, !1),
				o = "h/".concat("b", "/"),
				c, l, h = "".concat(n, "/cdn-cgi/challenge-platform/").concat(o, "feedback-reports/").concat(qe(e), "/").concat(r.displayLanguage, "/").concat((c = r.params.theme) !== null && c !== void 0 ? c : r.theme);
			r.wrapper.parentNode || g("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var f = document.createElement("div");
			f.style.position = "fixed", f.style.zIndex = "2147483646", f.style.width = "100vw", f.style.height = "100vh", f.style.top = "0", f.style.left = "0", f.style.transformOrigin = "center center", f.style.overflowX = "hidden", f.style.overflowY = "auto", f.style.background = "rgba(0,0,0,0.4)";
			var p = document.createElement("div");
			p.style.display = "table-cell", p.style.verticalAlign = "middle", p.style.width = "100vw", p.style.height = "100vh";
			var s = document.createElement("div");
			s.className = "cf-turnstile-feedback", s.id = "cf-fr-id", s.style.width = "100vw", s.style.maxWidth = "450px", s.style.height = Tt(r), s.style.position = "relative", s.style.zIndex = "2147483647", s.style.backgroundColor = "#ffffff", s.style.borderRadius = "5px", s.style.left = "0px", s.style.top = "0px", s.style.overflow = "hidden", s.style.margin = "0px auto";
			var w = document.createElement("iframe");
			w.id = e + "-fr", w.setAttribute("src", h), w.setAttribute("allow", "cross-origin-isolated; fullscreen"), w.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), w.setAttribute("scrolling", "no"), w.style.borderWidth = "0px", w.style.width = "100%", w.style.height = "100%", w.style.overflow = "hidden";
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
			var C = document.createElementNS("http://www.w3.org/2000/svg", "line");
			C.setAttribute("stroke-width", "1"), C.setAttribute("stroke", "#999"), C.setAttribute("fill", "none"), C.setAttribute("x1", "6"), C.setAttribute("x2", "18"), C.setAttribute("y1", "5"), C.setAttribute("y2", "18"), T.appendChild(C), s.appendChild(w), s.appendChild(T), p.appendChild(s), f.appendChild(p), f.addEventListener("click", function() {
				var R;
				(R = f.parentNode) === null || R === void 0 || R.removeChild(f)
			}), r.wrapper.parentNode.appendChild(f), window.addEventListener("resize", function() {
				s.style.height = Tt(r)
			})
		},
		fr = function(e) {
			var r, n, o;
			(o = document.getElementById(e)) === null || o === void 0 || (n = o.parentElement) === null || n === void 0 || (r = n.parentElement) === null || r === void 0 || r.remove()
		};
	var St = function(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > r ? e.substring(0, r) : e
	};

	function pr(e) {
		if (!e) return "-";
		var r = function(n, o) {
			if (!n || n.tagName === "BODY") return o;
			for (var c = 1, l = n.previousElementSibling; l;) l.tagName === n.tagName && c++, l = l.previousElementSibling;
			var h = St(n.tagName.toLowerCase()),
				f = "".concat(h, "[").concat(c, "]");
			return r(n.parentNode, "/".concat(f).concat(o))
		};
		return r(e, "")
	}

	function vr(e, r, n) {
		for (var o = "", c = 0, l = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(T) {
					return c > r || o.length > n ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), h;
			(h = l.nextNode()) !== null && o.length < n;) {
			if (h.nodeType === Node.ELEMENT_NODE) {
				var f = h;
				o += "".concat(St(f.tagName.toLowerCase()));
				for (var p = 0; p < f.attributes.length; p++) {
					var s = f.attributes[p];
					o += "_".concat(St(s.name, 2))
				}
				o += ">"
			} else h.nodeType === Node.TEXT_NODE && (o += "-t");
			var w = h.parentNode;
			for (c = 0; w !== e && w !== null;) c++, w = w.parentNode
		}
		return o.substring(0, n)
	}

	function mr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : U(e)));
		for (var r = 5381, n = 0; n < e.length; n++) {
			var o = e.charCodeAt(n);
			r = r * 33 ^ o
		}
		return r >>> 0
	}

	function gr(e, r) {
		var n;
		r.upgradeAttempts++;
		var o = Rt();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = r;
			var l = new URL(o.src),
				h = document.createElement("script");
			l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), h.async = !0, c && (h.nonce = c), h.setAttribute("crossorigin", "anonymous"), h.src = l.toString(), o == null || (n = o.parentNode) === null || n === void 0 || n.replaceChild(h, o)
		}
	}

	function hr(e, r) {
		var n = e._pState;
		return n ? (r.isReady = n.isReady, r.isRecaptchaCompatibilityMode = n.isRecaptchaCompatibilityMode, r.lastWidgetIdx = n.lastWidgetIdx, r.scriptWasLoadedAsync = n.scriptWasLoadedAsync, r.upgradeAttempts = n.upgradeAttempts, r.upgradeCompletedCount = n.upgradeCompletedCount + 1, r.turnstileLoadInitTimeMs = W(), r.watchCatInterval = null, r.watchCatSeq = n.watchCatSeq, r.widgetMap = n.widgetMap, !0) : !1
	}
	var Mr = 900,
		Fr = 3,
		Dr = 50;

	function Ur(e) {
		e.watchCatSeq++;
		var r = !0,
			n = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), l; !(r = (l = c.next()).done); r = !0) {
				var h = Ae(l.value, 2),
					f = h[0],
					p = h[1],
					s;
				p.watchcat.seq = e.watchCatSeq, p.watchcat.lastAckedSeq === 0 && (p.watchcat.lastAckedSeq = e.watchCatSeq);
				var w = K(f);
				if (!w || !p.shadow) {
					p.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(w, ", consider using turnstile.remove() to clean up a widget.")), p.watchcat.missingWidgetWarning = !0);
					continue
				}
				var T = p.shadow.querySelector("#".concat(w));
				if (!T) {
					p.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(w, ", consider using turnstile.remove() to clean up a widget.")), p.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(p.isComplete || p.isFailed)) {
					var N = p.watchcat.seq - 1 - Fr,
						I = p.watchcat.lastAckedSeq < N,
						C = p.watchcat.seq - 1 - Dr,
						R = p.isOverrunning && p.watchcat.overrunBeginSeq < C;
					if ((p.isExecuting || !p.isInitialized || p.isInitialized && !p.isStale && !p.isExecuted) && p.watchcat.lastAckedSeq !== 0 && I || R) {
						var M;
						p.watchcat.lastAckedSeq = 0, p.watchcat.seq = 0, p.isExecuting = !1;
						var _ = function(d, u) {
							console.log("Turnstile Widget seem to have ".concat(d, ": "), u)
						};
						I ? _("crashed", f) : R && _("hung", f);
						var a = I ? Ue : Ve,
							i;
						if ((M = e.msgHandler) === null || M === void 0 || M.call(e, {
								data: {
									source: P,
									widgetId: f,
									code: a,
									event: "fail",
									rcV: (i = p.nextRcV) !== null && i !== void 0 ? i : Y
								}
							}), 0) var t;
						continue
					}(s = T.contentWindow) === null || s === void 0 || s.postMessage({
						source: P,
						widgetId: f,
						seq: e.watchCatSeq,
						event: "meow"
					}, "*")
				}
			}
		} catch (d) {
			n = !0, o = d
		} finally {
			try {
				!r && c.return != null && c.return()
			} finally {
				if (n) throw o
			}
		}
	}

	function It(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Ur(e)
		}, Mr))
	}

	function Ot(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || r) && clearInterval(e.watchCatInterval)
	}
	var y = {
		turnstileLoadInitTimeMs: W(),
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

	function Ct(e) {
		xr(e, "")
	}

	function Lt() {
		var e = [Jt, Zt];
		y.isRecaptchaCompatibilityMode && e.push(er), document.querySelectorAll(e.join(", ")).forEach(function(r) {
			return Mt.render(r)
		})
	}
	var Ft = [];

	function yr() {
		y.isReady = !0;
		var e = !0,
			r = !1,
			n = void 0;
		try {
			for (var o = Ft[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var l = c.value;
				l()
			}
		} catch (h) {
			r = !0, n = h
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (r) throw n
			}
		}
	}

	function Vr(e) {
		var r = y.widgetMap.get(e);
		if (!(r === void 0 || r.hasResponseParamEl)) {
			r.hasResponseParamEl = !0;
			var n, o = (n = r.params["response-field"]) !== null && n !== void 0 ? n : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var l;
				c.name = (l = r.params["response-field-name"]) !== null && l !== void 0 ? l : _t, c.id = "".concat(e, "_response"), r.wrapper.appendChild(c);
				var h;
				if (typeof r.params["response-field-name"] != "string" && wr((h = r.params.sitekey) !== null && h !== void 0 ? h : "")) {
					var f = document.createElement("input");
					f.type = "hidden", f.name = yt, f.id = "".concat(e, "_legacy_response"), r.wrapper.appendChild(f)
				}
			}
			if (y.isRecaptchaCompatibilityMode) {
				var p = document.createElement("input");
				p.type = "hidden", p.name = bt, p.id = "".concat(e, "_g_response"), r.wrapper.appendChild(p)
			}
		}
	}

	function xr(e, r) {
		Vr(e);
		var n = document.getElementById("".concat(e, "_response"));
		n !== null && V(n, HTMLInputElement) && (n.value = r);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && V(o, HTMLInputElement) && (o.value = r), y.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && V(c, HTMLInputElement) && (c.value = r)
		}
	}

	function Nt(e, r) {
		var n = r.params,
			o = n.size,
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
						g('Invalid value for parameter "size", expected "'.concat(k.COMPACT, '" or "').concat(k.NORMAL, '", got "').concat(c, '"'), 2817);
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
				g('Invalid value for parameter "mode", expected "'.concat(q.NON_INTERACTIVE, '", "').concat(q.MANAGED, '" or "').concat(q.INVISIBLE, '", got "').concat(l, '"'), 2818)
		}
	}

	function _r(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Pr(e, r) {
		var n = r.get("turnstile_iframe_alt");
		n && (e.title = n)
	}

	function Wr(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function wr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function br() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Mt = function() {
		var e = function(a, i, t, d) {
				return I.apply(this, arguments)
			},
			r = function(a, i, t) {
				if (a.params.retry === fe.AUTO || t) {
					a.isExecuted && (a.msgQueue.push(oe.EXECUTE), a.isExecuted = !0, a.isExecuting = !0);
					var d, u = t ? 0 : 1e3 * 2 + ((d = a.params["retry-interval"]) !== null && d !== void 0 ? d : 0);
					a.retryTimeout = window.setTimeout(function() {
						s(i)
					}, u)
				}
			},
			n = function(a, i, t) {
				var d;
				a.response === void 0 && g("[Internal Error] Widget was completed but no response was given", 1362), a.isExecuting = !1, a.isComplete = !0, xr(i, a.response), (d = a.cbSuccess) === null || d === void 0 || d.call(a, a.response, t)
			},
			o = function(a) {
				if (!a) return [];
				for (var i = a.attributes, t = i.length, d = new Array(t), u = 0; u < t; u++) d[u] = i[u].name;
				return d
			},
			c = function(a, i, t) {
				if (a.rcV = i, 0) var d
			},
			l = function() {
				var a = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = a.length,
					t;
				do {
					t = "";
					for (var d = 0; d < 5; d++) t += a.charAt(Math.floor(Math.random() * i))
				} while (y.widgetMap.has(t));
				return t
			},
			h = function(a) {
				var i = !0,
					t = !1,
					d = void 0;
				try {
					for (var u = y.widgetMap[Symbol.iterator](), m; !(i = (m = u.next()).done); i = !0) {
						var E = Ae(m.value, 2),
							x = E[0],
							A = E[1];
						if (A.wrapper.parentElement === a) return x
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
			f = function(a, i, t) {
				for (; a.msgQueue.length;) {
					var d, u = a.msgQueue.pop();
					(d = t.contentWindow) === null || d === void 0 || d.postMessage({
						source: P,
						widgetId: i,
						event: u
					}, "*")
				}
			},
			p = function(a, i) {
				if (i) {
					var t = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						d = [],
						u = !0,
						m = !1,
						E = void 0;
					try {
						for (var x = t[Symbol.iterator](), A; !(u = (A = x.next()).done); u = !0) {
							var S = A.value;
							i[S] && i[S] !== a.params[S] && d.push(S)
						}
					} catch (F) {
						m = !0, E = F
					} finally {
						try {
							!u && x.return != null && x.return()
						} finally {
							if (m) throw E
						}
					}
					d.length !== 0 && g("The parameters ".concat(t.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(d.join(",")), 3618), i.action && (ut(i.action) || g('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), a.action = i.action), i.cData && (st(i.cData) || g('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), a.cData = i.cData), i["after-interactive-callback"] && (a.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (a.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (a.cbSuccess = i.callback), i["expired-callback"] && (a.cbExpired = i["expired-callback"]), i["timeout-callback"] && (a.cbTimeout = i["timeout-callback"]), i["error-callback"] && (a.cbError = i["error-callback"]), i["unsupported-callback"] && (a.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (a.chlPageData = i.chlPageData)
				}
			},
			s = function(a) {
				var i = R(a);
				i || g("Nothing to reset found for provided container", 3329);
				var t = y.widgetMap.get(i);
				if (t) {
					var d;
					t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isComplete = !1, t.isExecuting = !1, t.isExpired = !1, t.isFailed = !1, t.isInitialized = !1, t.isStale = !1, t.watchcat.lastAckedSeq = 0, t.watchcat.seq = 0, t.params.execution === pe.RENDER && (t.msgQueue.push(oe.EXECUTE), t.isExecuted = !0, t.isExecuting = !0);
					var u = K(i),
						m = t.shadow.querySelector("#".concat(u));
					(!u || !m) && g("Widget ".concat(i, " to reset was not found."), 3330), t.params.appearance === X.INTERACTION_ONLY && _r(m), t.params.sitekey === null && g("Unexpected Error: Sitekey is null", 3347);
					var E = m.cloneNode(),
						x;
					E.src = wt(i, t.params.sitekey, t.params, (x = t.rcV) !== null && x !== void 0 ? x : Y, !1, "b", ht(t)), (d = m.parentNode) === null || d === void 0 || d.replaceChild(E, m), Ct(u), t.retryTimeout && window.clearTimeout(t.retryTimeout)
				} else g("Widget ".concat(i, " to reset was not found."), 3331)
			},
			w = function(a) {
				var i, t = R(a);
				if (!t || !y.widgetMap.has(t)) {
					b("Nothing to remove found for the provided container.");
					return
				}
				var d = K(t),
					u = ["input#".concat(d, "_response"), "input#".concat(d, "_legacy_response"), "input#".concat(d, "_g_response")];
				document.querySelectorAll(u.join(", ")).forEach(function(x) {
					return x.remove()
				});
				var m = y.widgetMap.get(t);
				m == null || m.shadow.querySelectorAll(u.join(", ")).forEach(function(x) {
					return x.remove()
				}), m == null || m.wrapper.remove();
				var E = (i = y.widgetMap.get(t)) === null || i === void 0 ? void 0 : i.retryTimeout;
				E && window.clearTimeout(E), y.widgetMap.delete(t), Ot(y)
			},
			T = function(a, i) {
				var t, d, u = W(),
					m;
				if (typeof a == "string") try {
					var E = document.querySelector(a);
					E || g('Unable to find a container for "'.concat(a, '"'), 3585), m = E
				} catch (Pt) {
					g('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(a, '"'), 3586)
				} else V(a, HTMLElement) ? m = a : g('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var x = !0,
					A = !1,
					S = void 0;
				try {
					for (var F = y.widgetMap.values()[Symbol.iterator](), H; !(x = (H = F.next()).done); x = !0) {
						var Z = H.value;
						if (m.contains(Z.wrapper)) {
							b("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (Pt) {
					A = !0, S = Pt
				} finally {
					try {
						!x && F.return != null && F.return()
					} finally {
						if (A) throw S
					}
				}
				var D = Hr(m);
				if (D) {
					var v = Object.assign(D, i),
						ge = v.action,
						ee = v.cData,
						Oe = v.chlPageData,
						B = v.sitekey,
						te;
					v.theme = (te = v.theme) !== null && te !== void 0 ? te : Pe.AUTO;
					var le;
					v.retry = (le = v.retry) !== null && le !== void 0 ? le : fe.AUTO;
					var re;
					v.execution = (re = v.execution) !== null && re !== void 0 ? re : pe.RENDER;
					var he;
					v.appearance = (he = v.appearance) !== null && he !== void 0 ? he : X.ALWAYS;
					var ne;
					v["retry-interval"] = Number((ne = v["retry-interval"]) !== null && ne !== void 0 ? ne : tr);
					var ye;
					v["expiry-interval"] = Number((ye = v["expiry-interval"]) !== null && ye !== void 0 ? ye : (Qt - $t) * 1e3);
					var ue;
					v.size = (ue = v.size) !== null && ue !== void 0 ? ue : k.NORMAL;
					var _e = v.callback,
						be = v["expired-callback"],
						Ce = v["timeout-callback"],
						Ee = v["after-interactive-callback"],
						xe = v["before-interactive-callback"],
						G = v["error-callback"],
						Ke = v["unsupported-callback"];
					typeof B != "string" && g('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof B == "undefined" ? "undefined" : U(B), '"'), 3588), Yt(B) || g('Invalid input for parameter "sitekey", got "'.concat(B, '"'), 3589), dt(v.size) || g('Invalid type for parameter "size", expected normal|compact, got "'.concat(v.size, '" ').concat(U(v.size)), 3590), it(v.theme) || g('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(v.theme, '" ').concat(U(v.theme)), 3591), ot(v.retry) || g('Invalid type for parameter "retry", expected never|auto, got "'.concat(v.retry, '" ').concat(U(v.retry)), 3592), v.language || (v.language = "auto"), vt(v.language) || (b('Invalid language value: "'.concat(v.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), v.language = "auto"), mt(v.appearance) || g('Unknown appearance value: "'.concat(v.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), gt(v.execution) || g('Unknown execution value: "'.concat(v.execution, ", expected either: 'render' or 'execute'."), 3601), ct(v["retry-interval"]) || g('Invalid retry-interval value: "'.concat(v["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), lt(v["expiry-interval"]) || g('Invalid expiry-interval value: "'.concat(v["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var we, Q = (we = v["refresh-expired"]) !== null && we !== void 0 ? we : $.AUTO;
					ft(Q) ? v["refresh-expired"] = Q : g('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(Q, '" ').concat(typeof Q == "undefined" ? "undefined" : U(Q)), 3603);
					var Te, ae = (Te = v["refresh-timeout"]) !== null && Te !== void 0 ? Te : ie.AUTO;
					pt(Q) ? v["refresh-timeout"] = ae : g('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(ae, '" ').concat(typeof ae == "undefined" ? "undefined" : U(ae)), 3603);
					var j = document.createElement("iframe"),
						se = document.createElement("div"),
						Dt = se.attachShadow({
							mode: "closed"
						});
					ut(ge) || g('Invalid input for optional parameter "action", got "'.concat(ge, '"'), 3604), st(ee) || g('Invalid input for optional parameter "cData", got "'.concat(ee, '"'), 3605);
					var Re = l(),
						de = K(Re);
					if (!(!Re || !de)) {
						var Ut = [],
							Qe = v.execution === pe.RENDER;
						Qe && Ut.push(oe.EXECUTE), y.lastWidgetIdx++;
						var Tr = {};
						y.widgetMap.set(Re, rt(Fe({
							idx: y.lastWidgetIdx,
							action: ge,
							cData: ee,
							chlPageData: Oe,
							cbSuccess: _e,
							cbError: G,
							cbExpired: be,
							cbTimeout: Ce,
							cbUnsupported: Ke,
							cbAfterInteractive: Ee,
							cbBeforeInteractive: xe,
							params: v,
							isStale: !1,
							isComplete: !1,
							isExpired: !1,
							isExecuting: Qe,
							isFailed: !1,
							isResetting: !1,
							isExecuted: Qe,
							isInitialized: !1,
							hasResponseParamEl: !1,
							msgQueue: Ut,
							rcV: Y,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0
							}
						}, Tr), {
							widgetRenderStartTimeMs: u,
							widgetRenderEndTimeMs: 0,
							widgetParamsStartTimeMs: 0,
							widgetInitStartTimeMs: 0,
							shadow: Dt,
							wrapper: se,
							isOverrunning: !1
						})), It(y);
						var $e = y.widgetMap.get(Re);
						$e || g("Turnstile Initialization Error ", 3606), j.style.display = "none", j.style.border = "none", j.style.overflow = "hidden", j.setAttribute("src", wt(Re, B, v, Y, !1, "b", ht($e))), j.onerror = function() {
							if (G) {
								G == null || G(String(Gt.code));
								return
							}
							g("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var Vt = ["cross-origin-isolated", "fullscreen", "autoplay"],
							Je;
						L((Je = (d = document.featurePolicy) === null || d === void 0 || (t = d.features) === null || t === void 0 ? void 0 : t.call(d)) !== null && Je !== void 0 ? Je : [], Et) && Vt.push(Et), j.setAttribute("allow", Vt.join("; ")), j.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), j.id = de;
						var Ze;
						j.tabIndex = (Ze = v.tabindex) !== null && Ze !== void 0 ? Ze : 0, j.title = "Widget containing a Cloudflare security challenge", Dt.appendChild(j);
						var et, Rr = (et = v["response-field"]) !== null && et !== void 0 ? et : !0;
						if (Rr) {
							var Ne = document.createElement("input");
							Ne.type = "hidden";
							var tt;
							if (Ne.name = (tt = v["response-field-name"]) !== null && tt !== void 0 ? tt : _t, Ne.id = "".concat(de, "_response"), se.appendChild(Ne), typeof v["response-field-name"] != "string" && wr(B)) {
								var ke = document.createElement("input");
								ke.type = "hidden", ke.name = yt, ke.id = "".concat(de, "_legacy_response"), se.appendChild(ke)
							}
						}
						if (y.isRecaptchaCompatibilityMode) {
							var Le = document.createElement("input");
							Le.type = "hidden", Le.name = bt, Le.id = "".concat(de, "_g_response"), se.appendChild(Le)
						}
						return m.appendChild(se), $e.widgetRenderEndTimeMs = W(), de
					}
				}
			},
			N = function() {
				var a, i = -1,
					t = !0,
					d = !1,
					u = void 0;
				try {
					for (var m = y.widgetMap[Symbol.iterator](), E; !(t = (E = m.next()).done); t = !0) {
						var x = Ae(E.value, 2),
							A = x[0],
							S = x[1];
						i < S.idx && (a = A, i = S.idx)
					}
				} catch (F) {
					d = !0, u = F
				} finally {
					try {
						!t && m.return != null && m.return()
					} finally {
						if (d) throw u
					}
				}
				return i === -1 && g("Could not find widget", 43778), a
			};

		function I() {
			return I = Ht(function(_, a, i, t) {
				var d, u, m, E, x, A, S, F, H, Z;
				return De(this, function(D) {
					switch (D.label) {
						case 0:
							if (d = _.params.sitekey, u = br(), !u) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), n(_, a, !1), [2];
							m = "h/".concat("b", "/"), E = new URL(u), x = "https", A = "", S = "".concat(x, "://").concat(E.host, "/cdn-cgi/challenge-platform/").concat(m, "rc/").concat(t).concat(A), D.label = 1;
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
							return F = D.sent(), F.status === 200 ? [3, 3] : (b("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), n(_, a, !1), [3, 5]);
						case 3:
							return [4, F.json()];
						case 4:
							if (H = D.sent(), "status" in H && H.status === "redeemed") return n(_, a, !0), [2];
							D.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return Z = D.sent(), b("Error contacting Turnstile, aborting clearance remdeption."), n(_, a, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), I.apply(this, arguments)
		}
		var C = function(_) {
			var a = _.data;
			if (a.source === P) {
				if (!Wr(_)) {
					b("Ignored message from wrong origin: ".concat(_.origin, "."));
					return
				}
				if (!(!a.widgetId || !y.widgetMap.has(a.widgetId))) {
					var i = K(a.widgetId),
						t = y.widgetMap.get(a.widgetId);
					if (!(!i || !t)) switch (a.event) {
						case "init": {
							var d;
							t.widgetInitStartTimeMs = W();
							var u = t.shadow.getElementById(i);
							u || g("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), t.mode = a.mode, t.nextRcV = a.nextRcV, t.mode === q.INVISIBLE && t.params["refresh-expired"] === $.MANUAL && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat($.AUTO, "' or '").concat($.NEVER, ".'")), t.mode !== q.MANAGED && t.params["refresh-timeout"] !== ie.AUTO && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), t.params.appearance === X.ALWAYS || t.isExecuting && t.params.appearance === X.EXECUTE ? Nt(u, t) : _r(u), u.style.display = "";
							var m = t.shadow.querySelector("#".concat(i));
							m || g("Received state for an unknown widget: ".concat(a.widgetId), 3078), (d = m.contentWindow) === null || d === void 0 || d.postMessage({
								source: P,
								widgetId: a.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var E = t.shadow.getElementById(i);
							E || g("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var x = new Map;
							t.displayLanguage = a.displayLanguage, Object.keys(a.translationData).forEach(function(ae) {
								x.set(ae, a.translationData[ae])
							}), Pr(E, x);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(t.params.language, " is not supported, falling back to: ").concat(a.fallback, ".")), t.displayLanguage = a.fallback;
							break
						}
						case "reject": {
							var A = t.shadow.getElementById(i);
							if (t.isExecuting = !1, A || g("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), a.reason === "outdated_browser") {
								var S;
								(S = t.cbUnsupported) === null || S === void 0 || S.call(t)
							}
							break
						}
						case "food": {
							t.watchcat && a.seq > t.watchcat.lastAckedSeq && (t.watchcat.lastAckedSeq = a.seq);
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
							c(t, Y, a.widgetId), t.response = a.token, a.sToken ? e(t, i, a.sToken, a.chlId) : n(t, i, !1);
							break
						}
						case "fail": {
							a.rcV && c(t, a.rcV, a.widgetId), a.cfChlOut && (t.cfChlOut = a.cfChlOut), a.cfChlOutS && (t.cfChlOutS = a.cfChlOutS), a.code && (t.errorCode = a.code), t.isExecuting = !1, t.isFailed = !0, t.isInitialized = !0, Ct(i);
							var F = t.cbError,
								H = a.code === Ue || a.code === Ve;
							if (H) {
								var Z, D = t.shadow.querySelector("#".concat(i));
								D == null || (Z = D.contentWindow) === null || Z === void 0 || Z.postMessage({
									source: P,
									widgetId: a.widgetId,
									event: "forceFail"
								}, "*")
							}
							if (F) {
								var v;
								F(String((v = a.code) !== null && v !== void 0 ? v : Xt)) ? t.params.retry === fe.AUTO && !t.isResetting && r(t, i, H) : (a.code && b("Error: ".concat(a.code, ".")), r(t, i, H))
							} else a.code ? (r(t, i, H), g("Error: ".concat(a.code), 3076)) : r(t, i, !1);
							break
						}
						case "feedbackInit": {
							var ge = t.wrapper.querySelector("#".concat(i, "-fr"));
							if (ge) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							At(i, t);
							break
						}
						case "requestFeedbackData": {
							var ee, Oe = t.shadow.querySelector("#".concat(i));
							Oe || g("Received state for an unknown widget: #".concat(i, " / ").concat(a.widgetId), 3078), (ee = Oe.contentWindow) === null || ee === void 0 || ee.postMessage({
								source: P,
								widgetId: a.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var B, te, le = (B = t.wrapper.parentNode) === null || B === void 0 ? void 0 : B.querySelector("#".concat(i, "-fr"));
							le || g("Received state for an unknown widget: ".concat(a.widgetId), 3078), (te = le.contentWindow) === null || te === void 0 || te.postMessage({
								source: P,
								widgetId: a.widgetId,
								event: "feedbackData",
								rayId: a.rayId,
								rcV: a.rcV,
								cfChlOut: t.cfChlOut,
								cfChlOutS: t.cfChlOutS,
								errorCode: t.errorCode,
								sitekey: a.sitekey,
								mode: a.mode,
								issuanceUserAgent: a.issuanceUserAgent
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var re, he = (re = t.wrapper.parentNode) === null || re === void 0 ? void 0 : re.querySelector("#".concat(i, "-fr"));
							he || g("Received state for an unknown widget: ".concat(a.widgetId), 3078), fr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ne, ye = a.token;
							t.isExpired = !0, (ne = t.cbExpired) === null || ne === void 0 || ne.call(t, ye), t.params["refresh-expired"] === $.AUTO && !t.isResetting && s(i);
							break
						}
						case "interactiveTimeout": {
							c(t, Y, a.widgetId), Ct(i);
							var ue = t.cbTimeout;
							if (ue ? ue() : t.params["refresh-timeout"] === ie.NEVER && !t.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), t.params["refresh-timeout"] === ie.AUTO && !t.isResetting) {
								var _e = t.cbAfterInteractive;
								_e == null || _e(), s(i)
							}
							break
						}
						case "refreshRequest": {
							c(t, Y, a.widgetId), s(i);
							break
						}
						case "reloadRequest": {
							c(t, a.nextRcV, a.widgetId), s(i);
							break
						}
						case "interactiveBegin": {
							var be, Ce = t.shadow.getElementById(i);
							Ce || g("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (be = t.cbBeforeInteractive) === null || be === void 0 || be.call(t), t.params.appearance === X.INTERACTION_ONLY && Nt(Ce, t);
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
							G || g("Received state for an unknown widget: ".concat(a.widgetId), 3078), t.isResetting = !1;
							var Ke = {},
								we = W(),
								Q = {
									"w.iW": window.innerWidth,
									"ht.atrs": o(document.body.parentNode),
									pi: {
										xp: pr(t.wrapper).substring(0, ar),
										pfp: vr(document, rr, nr),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: mr(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href,
										sR: t.wrapper.shadowRoot === null
									}
								},
								Te = W() - we;
							(xe = G.contentWindow) === null || xe === void 0 || xe.postMessage(Fe({
								source: P,
								widgetId: a.widgetId,
								event: "extraParams",
								action: t.action,
								cData: t.cData,
								chlPageData: t.chlPageData,
								rcV: t.rcV,
								ch: "62ec4f065604",
								au: y.scriptUrl,
								url: br(),
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
							}, Ke), "*"), f(t, a.widgetId, G), t.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		y.msgHandler = C, window.addEventListener("message", C);

		function R(_) {
			if (typeof _ == "string") {
				var a = qe(_);
				if (a && y.widgetMap.has(a)) return a;
				if (y.widgetMap.has(_)) return _;
				try {
					var i = document.querySelector(_);
					return i ? R(i) : null
				} catch (t) {
					return null
				}
			}
			return V(_, Element) ? h(_) : _ || y.widgetMap.size === 0 ? null : y.widgetMap.keys().next().value
		}
		var M = {};
		return rt(Fe({}, M), {
			ready: function(a) {
				if (y.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), g("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof a != "function" && g('turnstile.ready() expected a "function" argument, got "'.concat(typeof a == "undefined" ? "undefined" : U(a), '"'), 3841), y.isReady) {
					a();
					return
				}
				Ft.push(a)
			},
			implicitRender: Lt,
			execute: function(a, i) {
				var t = R(a);
				if (!t) {
					i === void 0 && g("Please provide 2 parameters to execute: container and parameters", 43521);
					var d = T(a, i);
					d || g("Failed to render widget", 43522), t = d
				}
				var u = y.widgetMap.get(t);
				if (u) {
					p(u, i);
					var m = K(t);
					if (u.isExecuting) {
						b("Call to execute() on a widget that is already executing (".concat(m, "), consider using reset() before execute()."));
						return
					} else u.isExecuting = !0;
					if (u.response) {
						var E;
						u.isExecuting = !1, b("Call to execute() on a widget that was already executed (".concat(m, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (E = u.cbSuccess) === null || E === void 0 || E.call(u, u.response, !1);
						return
					}
					u.isExpired && b("Call to execute on a expired-widget (".concat(m, "), consider using reset() before.")), u.isStale && (s(m), u.isExecuting = !0), u.msgQueue.push(oe.EXECUTE), u.isExecuted = !0;
					var x = u.shadow.querySelector("#".concat(m));
					if (x || (u.isExecuting = !1, g("Widget ".concat(m, " to execute was not found"), 43522)), u.isResetting) return;
					if (u.isInitialized && f(u, t, x), u.isInitialized && u.params.appearance === X.EXECUTE && Nt(x, u), u.isExecuting) {
						var A, S = u.shadow.querySelector("#".concat(m));
						S || g("Received state for an unknown widget: ".concat(t), 3078), (A = S.contentWindow) === null || A === void 0 || A.postMessage({
							source: P,
							widgetId: t,
							event: "execute"
						}, "*")
					}
				}
			},
			render: T,
			reset: s,
			remove: w,
			_private: {
				showFeedback: function(a) {
					var i = R(a);
					if (i) {
						var t = K(i);
						if (t) {
							var d = y.widgetMap.get(i);
							d && At(t, d)
						}
					}
				}
			},
			getResponse: function(a) {
				var i;
				if (typeof a == "undefined") {
					var t = N();
					if (t) {
						var d, u = y.widgetMap.get(t);
						return u != null && u.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), (d = y.widgetMap.get(t)) === null || d === void 0 ? void 0 : d.response
					} else g("Could not find a widget", 43794)
				}
				var m = R(a);
				return m || g("Could not find widget for provided container", 43778), (i = y.widgetMap.get(m)) === null || i === void 0 ? void 0 : i.response
			},
			isExpired: function(a) {
				var i;
				if (typeof a == "undefined") {
					var t = N();
					if (t) {
						var d, u;
						return (u = (d = y.widgetMap.get(t)) === null || d === void 0 ? void 0 : d.isExpired) !== null && u !== void 0 ? u : !1
					} else g("Could not find a widget", 43794)
				}
				var m = R(a);
				m || g("Could not find widget for provided container", 43778);
				var E;
				return (E = (i = y.widgetMap.get(m)) === null || i === void 0 ? void 0 : i.isExpired) !== null && E !== void 0 ? E : !1
			}
		})
	}();

	function Hr(e) {
		var r = e.getAttribute("data-sitekey"),
			n = {
				sitekey: r
			},
			o = e.getAttribute("data-tabindex");
		o && (n.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (it(c) ? n.theme = c : b('Unknown data-theme value: "'.concat(c, '".')));
		var l = e.getAttribute("data-size");
		if (l && (dt(l) ? n.size = l : b('Unknown data-size value: "'.concat(l, '".'))), 0) var h;
		var f = e.getAttribute("data-action");
		typeof f == "string" && (n.action = f);
		var p = e.getAttribute("data-cdata");
		typeof p == "string" && (n.cData = p);
		var s = e.getAttribute("data-retry");
		s && (ot(s) ? n.retry = s : b('Invalid data-retry value: "'.concat(s, ", expected either 'never' or 'auto'\".")));
		var w = e.getAttribute("data-retry-interval");
		if (w) {
			var T = Number.parseInt(w, 10);
			ct(T) ? n["retry-interval"] = T : b('Invalid data-retry-interval value: "'.concat(w, ', expected an integer value > 0 and < 900000".'))
		}
		var N = e.getAttribute("data-expiry-interval");
		if (N) {
			var I = Number.parseInt(N, 10);
			lt(I) ? n["expiry-interval"] = I : b('Invalid data-expiry-interval value: "'.concat(I, ', expected an integer value > 0 and < 360000".'))
		}
		var C = e.getAttribute("data-refresh-expired");
		C && (ft(C) ? n["refresh-expired"] = C : b('Unknown data-refresh-expired value: "'.concat(C, ", expected either: 'never', 'auto' or 'manual'.")));
		var R = e.getAttribute("data-refresh-timeout");
		R && (pt(R) ? n["refresh-timeout"] = R : b('Unknown data-refresh-timeout value: "'.concat(R, ", expected either: 'never', 'auto' or 'manual'.")));
		var M = e.getAttribute("data-language");
		M && (vt(M) ? n.language = M : b('Invalid data-language value: "'.concat(M, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function _(x) {
			var A = e.getAttribute(x);
			return A && window[A] ? window[A] : void 0
		}
		var a = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		a.forEach(function(x) {
			n[x] = _("data-".concat(x))
		});
		var i = e.getAttribute("data-feedback-enabled");
		i ? (Kt(i) || b('Invalid data-feedback-enabled value: "'.concat(i, ", expected either: 'true' or 'false'. Value is ignored.")), n["feedback-enabled"] = i === "true") : n["feedback-enabled"] = !0;
		var t, d = (t = e.getAttribute("data-response-field")) !== null && t !== void 0 ? t : "true";
		n["response-field"] = d === "true";
		var u = e.getAttribute("data-response-field-name");
		u && (n["response-field-name"] = u);
		var m = e.getAttribute("data-execution");
		m && (gt(m) ? n.execution = m : b('Unknown data-execution value: "'.concat(m, ", expected either: 'render' or 'execute'.")));
		var E = e.getAttribute("data-appearance");
		return E && (mt(E) ? n.appearance = E : b('Unknown data-appearance value: "'.concat(E, ", expected either: 'always', 'execute', or 'interaction-only'."))), n
	}

	function Br() {
		var e = !0;
		Ot(y, e), y.msgHandler && window.removeEventListener("message", y.msgHandler), gr(window.turnstile, y)
	}
	ve = !1, O = dr(), y.scriptWasLoadedAsync = (ze = O == null ? void 0 : O.loadedAsync) !== null && ze !== void 0 ? ze : !1, y.scriptUrl = (Ge = O == null ? void 0 : O.src) !== null && Ge !== void 0 ? Ge : "undefined", O != null && O.params && (me = O.params.get("compat"), (me == null ? void 0 : me.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled.") : (b("Compatibility layer enabled."), y.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Mt) : me !== null && b('Unknown value for api.js?compat: "'.concat(me, '", ignoring.')), O.params.forEach(function(e, r) {
		L(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], r) || b('Unknown parameter passed to api.js: "?'.concat(r, '=...", ignoring.'))
	}), ve = O.params.get("_upgrade") === "true", z = O.params.get("onload"), z && !ve && setTimeout(function() {
		typeof window[z] == "function" ? window[z]() : (b("Unable to find onload callback '".concat(z, "' immediately after loading, expected 'function', got '").concat(U(window[z]), "'.")), setTimeout(function() {
			typeof window[z] == "function" ? window[z]() : b("Unable to find onload callback '".concat(z, "' after 1 second, expected 'function', got '").concat(U(window[z]), "'."))
		}, 1e3))
	}, 0)), kt = "turnstile" in window, kt && !ve ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (kt && ve && (hr(window.turnstile, y), It(y), (O == null || (Xe = O.params) === null || Xe === void 0 ? void 0 : Xe.get("render")) !== "explicit" && setTimeout(Lt, 0)), window.turnstile = Mt, ve || ((O == null || (Ye = O.params) === null || Ye === void 0 ? void 0 : Ye.get("render")) !== "explicit" && Ft.push(Lt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(yr, 0) : window.addEventListener("DOMContentLoaded", yr))), Er = 24 * 60 * 60 * 1e3, window.setTimeout(Br, Er);
	var ve, O, ze, Ge, me, z, kt, Xe, Ye, Er;
})();