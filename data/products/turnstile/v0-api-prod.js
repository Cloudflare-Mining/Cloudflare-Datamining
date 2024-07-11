"use strict";
(function() {
	function St(e, n, r, o, c, s, y) {
		try {
			var _ = e[s](y),
				m = _.value
		} catch (l) {
			r(l);
			return
		}
		_.done ? n(m) : Promise.resolve(m).then(o, c)
	}

	function It(e) {
		return function() {
			var n = this,
				r = arguments;
			return new Promise(function(o, c) {
				var s = e.apply(n, r);

				function y(m) {
					St(s, o, c, y, _, "next", m)
				}

				function _(m) {
					St(s, o, c, y, _, "throw", m)
				}
				y(void 0)
			})
		}
	}

	function D(e, n) {
		return n != null && typeof Symbol != "undefined" && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](e) : D(e, n)
	}

	function Ae(e, n, r) {
		return n in e ? Object.defineProperty(e, n, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[n] = r, e
	}

	function Ye(e) {
		for (var n = 1; n < arguments.length; n++) {
			var r = arguments[n] != null ? arguments[n] : {},
				o = Object.keys(r);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(c) {
				return Object.getOwnPropertyDescriptor(r, c).enumerable
			}))), o.forEach(function(c) {
				Ae(e, c, r[c])
			})
		}
		return e
	}

	function gr(e, n) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			n && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), r.push.apply(r, o)
		}
		return r
	}

	function At(e, n) {
		return n = n != null ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gr(Object(n)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
		}), e
	}

	function Rt(e) {
		if (Array.isArray(e)) return e
	}

	function Ot(e, n) {
		var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (r != null) {
			var o = [],
				c = !0,
				s = !1,
				y, _;
			try {
				for (r = r.call(e); !(c = (y = r.next()).done) && (o.push(y.value), !(n && o.length === n)); c = !0);
			} catch (m) {
				s = !0, _ = m
			} finally {
				try {
					!c && r.return != null && r.return()
				} finally {
					if (s) throw _
				}
			}
			return o
		}
	}

	function Ct() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Qe(e, n) {
		(n == null || n > e.length) && (n = e.length);
		for (var r = 0, o = new Array(n); r < n; r++) o[r] = e[r];
		return o
	}

	function kt(e, n) {
		if (e) {
			if (typeof e == "string") return Qe(e, n);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qe(e, n)
		}
	}

	function _e(e, n) {
		return Rt(e) || Ot(e, n) || kt(e, n) || Ct()
	}

	function N(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Re(e, n) {
		var r = {
				label: 0,
				sent: function() {
					if (s[0] & 1) throw s[1];
					return s[1]
				},
				trys: [],
				ops: []
			},
			o, c, s, y;
		return y = {
			next: _(0),
			throw: _(1),
			return: _(2)
		}, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
			return this
		}), y;

		function _(l) {
			return function(S) {
				return m([l, S])
			}
		}

		function m(l) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; y && (y = 0, l[0] && (r = 0)), r;) try {
				if (o = 1, c && (s = l[0] & 2 ? c.return : l[0] ? c.throw || ((s = c.return) && s.call(c), 0) : c.next) && !(s = s.call(c, l[1])).done) return s;
				switch (c = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
					case 0:
					case 1:
						s = l;
						break;
					case 4:
						return r.label++, {
							value: l[1],
							done: !1
						};
					case 5:
						r.label++, c = l[1], l = [0];
						continue;
					case 7:
						l = r.ops.pop(), r.trys.pop();
						continue;
					default:
						if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
							r = 0;
							continue
						}
						if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
							r.label = l[1];
							break
						}
						if (l[0] === 6 && r.label < s[1]) {
							r.label = s[1], s = l;
							break
						}
						if (s && r.label < s[2]) {
							r.label = s[2], r.ops.push(l);
							break
						}
						s[2] && r.ops.pop(), r.trys.pop();
						continue
				}
				l = n.call(e, r)
			} catch (S) {
				l = [6, S], c = 0
			} finally {
				o = s = 0
			}
			if (l[0] & 5) throw l[1];
			return {
				value: l[0] ? l[1] : void 0,
				done: !0
			}
		}
	}
	var Nt = {
		code: 200500,
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?"
	};
	var Lt = 300020;
	var Oe = 300030;
	var z;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(z || (z = {}));
	var G;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(G || (G = {}));
	var Ce;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Ce || (Ce = {}));
	var be;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(be || (be = {}));
	var Q;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(Q || (Q = {}));
	var ie;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(ie || (ie = {}));
	var X;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(X || (X = {}));
	var fe;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(fe || (fe = {}));
	var oe;
	(function(e) {
		e.EXECUTE = "execute"
	})(oe || (oe = {}));
	var Ke;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(Ke || (Ke = {}));

	function C(e, n) {
		return e.indexOf(n) !== -1
	}

	function $e(e) {
		return C(["auto", "dark", "light"], e)
	}

	function Je(e) {
		return C(["auto", "never"], e)
	}

	function Ze(e) {
		return e > 0 && e < 9e5
	}

	function et(e) {
		return e > 0 && e < 36e4
	}
	var yr = /^[0-9A-Za-z_-]{3,100}$/;

	function Mt(e) {
		return yr.test(e)
	}
	var hr = /^[a-z0-9_-]{0,32}$/i;

	function tt(e) {
		return e === void 0 ? !0 : typeof e == "string" && hr.test(e)
	}
	var _r = /^[a-z0-9_\-=]{0,255}$/i;

	function rt(e) {
		return e === void 0 ? !0 : typeof e == "string" && _r.test(e)
	}

	function nt(e) {
		return C(["normal", "compact", "invisible"], e)
	}

	function at(e) {
		return C(["auto", "manual", "never"], e)
	}

	function it(e) {
		return C(["auto", "manual", "never"], e)
	}
	var br = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function ot(e) {
		return e === "auto" || br.test(e)
	}

	function ct(e) {
		return C(["always", "execute", "interaction-only"], e)
	}

	function Pt(e) {
		return C(["true", "false"], e)
	}

	function lt(e) {
		return C(["render", "execute"], e)
	}
	var Dt = 300,
		Ft = 10;
	var V = "0/0";

	function ut(e) {
		var n = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && n.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && n.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), n.size !== 0) return n.toString()
	}
	var ke = "cf-chl-widget-",
		F = "cloudflare-challenge",
		Ut = ".cf-turnstile",
		Wt = ".cf-challenge",
		jt = ".g-recaptcha",
		zt = "cf_challenge_response",
		Vt = "cf-turnstile-response",
		qt = "g-recaptcha-response",
		Ht = 8e3,
		st = "private-token",
		Bt = 3,
		Gt = 500,
		Xt = 500;

	function dt(e, n) {
		var r = "https://challenges.cloudflare.com";
		if (n) {
			var o;
			r = (o = e["base-url"]) !== null && o !== void 0 ? o : r
		}
		return r
	}

	function ft(e, n, r, o, c, s, y) {
		var _ = dt(r, c),
			m = s ? "h/".concat(s, "/") : "",
			l = y ? "?".concat(y) : "",
			S = r["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(_, "/cdn-cgi/challenge-platform/").concat(m, "turnstile/if/ov2/av0/rcv").concat(o, "/").concat(e, "/").concat(n, "/").concat(r.theme, "/").concat(S, "/").concat(r.size, "/").concat(r.language, "/").concat(l)
	}

	function Ne(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Yt(e, n) {
		if (!D(e, n)) throw new TypeError("Cannot call a class as a function")
	}

	function K(e, n) {
		return K = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, K(e, n)
	}

	function Qt(e, n) {
		if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(n && n.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), n && K(e, n)
	}

	function Le() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function xe(e, n, r) {
		return Le() ? xe = Reflect.construct : xe = function(c, s, y) {
			var _ = [null];
			_.push.apply(_, s);
			var m = Function.bind.apply(c, _),
				l = new m;
			return y && K(l, y.prototype), l
		}, xe.apply(null, arguments)
	}

	function ce(e) {
		return ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
		}, ce(e)
	}

	function Kt(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Me(e) {
		var n = typeof Map == "function" ? new Map : void 0;
		return Me = function(o) {
			if (o === null || !Kt(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof n != "undefined") {
				if (n.has(o)) return n.get(o);
				n.set(o, c)
			}

			function c() {
				return xe(o, arguments, ce(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), K(c, o)
		}, Me(e)
	}

	function $t(e, n) {
		return n && (N(n) === "object" || typeof n == "function") ? n : Ne(e)
	}

	function Jt(e) {
		var n = Le();
		return function() {
			var o = ce(e),
				c;
			if (n) {
				var s = ce(this).constructor;
				c = Reflect.construct(o, arguments, s)
			} else c = o.apply(this, arguments);
			return $t(this, c)
		}
	}
	var Zt = function(e) {
		"use strict";
		Qt(r, e);
		var n = Jt(r);

		function r(o, c) {
			Yt(this, r);
			var s;
			return s = n.call(this, o), Ae(Ne(s), "code", void 0), s.name = "TurnstileError", s.code = c, s
		}
		return r
	}(Me(Error));

	function p(e, n) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Zt(r, n)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Pe(e) {
		return e.startsWith(ke) ? e.substring(ke.length) : null
	}

	function $(e) {
		return "".concat(ke).concat(e)
	}

	function pt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			n = document.currentScript;
		if (D(n, HTMLScriptElement) && e.test(n.src)) return n;
		for (var r = document.querySelectorAll("script"), o = 0, c; c = r[o]; o++)
			if (D(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function er() {
		var e = pt();
		e || p("Could not find Turnstile script tag, some features may not be available", 43777);
		var n = {
			loadedAsync: !1,
			params: new URLSearchParams
		};
		(e.async || e.defer) && (n.loadedAsync = !0);
		var r = e.src,
			o = r.split("?");
		return o.length > 1 && (n.params = new URLSearchParams(o[1])), n
	}

	function j() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}

	function tr(e, n) {
		var r, o, c = dt(n.params, J),
			s = "h/".concat("g", "/"),
			y = "".concat(c, "/cdn-cgi/challenge-platform/").concat(s, "feedback-reports/").concat(Pe(e), "/").concat(n.displayLanguage, "/");
		n.wrapper.parentNode || p("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
		var _ = document.createElement("div");
		_.style.position = "fixed", _.style.zIndex = "21474836419";
		var m = document.createElement("div");
		m.className = "cf-turnstile-feedback", m.id = "cf-fr-id", m.style.borderColor = "#000000", m.style.width = "450px";
		var l = ["ar-eg", "bg-bg", "da-dk", "de-de", "el-gr", "hr-hr", "hu-hu", "ja-jp", "ms-my", "id-id", "ru-ru", "sk-sk", "sl-si", "sr-ba", "uk-ua"],
			S = ["es-es", "cs-cz", "fa-ir", "fr-fr", "it-it", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr"],
			O, U;
		C(l, (O = (r = n.displayLanguage) === null || r === void 0 ? void 0 : r.toLowerCase()) !== null && O !== void 0 ? O : "nonexistent") ? m.style.height = "520px" : C(S, (U = (o = n.displayLanguage) === null || o === void 0 ? void 0 : o.toLowerCase()) !== null && U !== void 0 ? U : "nonexistent") ? m.style.height = "480px" : m.style.height = "460px", m.style.position = "absolute", m.style.zIndex = "21474836420", m.style.borderWidth = "1px", m.style.borderColor = "#000", m.style.borderStyle = "solid", m.style.backgroundColor = "#ffffff", m.style.borderRadius = "10px", m.style.left = "-122px", m.style.top = "-91px", m.style.overflow = "hidden";
		var A = document.createElement("iframe");
		A.id = e + "-fr", A.setAttribute("src", y), A.setAttribute("allow", "cross-origin-isolated; fullscreen"), A.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), A.setAttribute("scrolling", "no"), A.style.borderWidth = "0px", A.style.width = "100%", A.style.height = "100%", A.style.overflow = "hidden";
		var w = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		w.style.position = "absolute", w.style.width = "26px", w.style.height = "26px", w.style.zIndex = "21474836421", w.style.cursor = "pointer", n.displayRTL ? w.style.left = "6px" : w.style.right = "2px", w.style.top = "5px", w.setAttribute("width", "26"), w.setAttribute("height", "26"), w.addEventListener("click", function() {
			var i;
			(i = _.parentNode) === null || i === void 0 || i.removeChild(_)
		});
		var I = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		I.setAttribute("ry", "12"), I.setAttribute("rx", "12"), I.setAttribute("cy", "12"), I.setAttribute("cx", "12"), I.setAttribute("fill", "#aaaaaa"), I.setAttribute("stroke-width", "0"), w.appendChild(I);
		var v = document.createElementNS("http://www.w3.org/2000/svg", "line");
		v.setAttribute("stroke-width", "3"), v.setAttribute("stroke", "#fff"), v.setAttribute("fill", "none"), v.setAttribute("x1", "6"), v.setAttribute("x2", "18"), v.setAttribute("y1", "18"), v.setAttribute("y2", "5"), w.appendChild(v);
		var a = document.createElementNS("http://www.w3.org/2000/svg", "line");
		a.setAttribute("stroke-width", "3"), a.setAttribute("stroke", "#fff"), a.setAttribute("fill", "none"), a.setAttribute("x1", "6"), a.setAttribute("x2", "18"), a.setAttribute("y1", "5"), a.setAttribute("y2", "18"), w.appendChild(a), m.appendChild(A), m.appendChild(w), _.appendChild(m), n.wrapper.parentNode.appendChild(_)
	}

	function rr(e) {
		var n, r, o;
		(o = document.getElementById(e)) === null || o === void 0 || (r = o.parentElement) === null || r === void 0 || (n = r.parentElement) === null || n === void 0 || n.remove()
	}
	var vt = function(e) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > n ? e.substring(0, n) : e
	};

	function nr(e) {
		if (!e) return "-";
		var n = function(r, o) {
			if (!r || r.tagName === "BODY") return o;
			for (var c = 1, s = r.previousElementSibling; s;) s.tagName === r.tagName && c++, s = s.previousElementSibling;
			var y = vt(r.tagName.toLowerCase()),
				_ = "".concat(y, "[").concat(c, "]");
			return n(r.parentNode, "/".concat(_).concat(o))
		};
		return n(e, "")
	}

	function ar(e, n, r) {
		for (var o = "", c = 0, s = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(O) {
					return c > n || o.length > r ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), y;
			(y = s.nextNode()) !== null && o.length < r;) {
			if (y.nodeType === Node.ELEMENT_NODE) {
				var _ = y;
				o += "".concat(vt(_.tagName.toLowerCase()));
				for (var m = 0; m < _.attributes.length; m++) {
					var l = _.attributes[m];
					o += "_".concat(vt(l.name, 2))
				}
				o += ">"
			} else y.nodeType === Node.TEXT_NODE && (o += "-t");
			var S = y.parentNode;
			for (c = 0; S !== e && S !== null;) c++, S = S.parentNode
		}
		return o.substring(0, r)
	}

	function ir(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : N(e)));
		for (var n = 5381, r = 0; r < e.length; r++) {
			var o = e.charCodeAt(r);
			n = n * 33 ^ o
		}
		return n >>> 0
	}

	function or(e, n) {
		var r;
		n.upgradeAttempts++;
		var o = pt();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = n;
			var s = new URL(o.src),
				y = document.createElement("script");
			s.searchParams.set("_upgrade", "true"), s.searchParams.set("_cb", String(Date.now())), y.async = !0, c && (y.nonce = c), y.setAttribute("crossorigin", "anonymous"), y.src = s.toString(), o == null || (r = o.parentNode) === null || r === void 0 || r.replaceChild(y, o)
		}
	}

	function cr(e, n) {
		var r = e._pState;
		return r ? (n.isReady = r.isReady, n.isRecaptchaCompatibilityMode = r.isRecaptchaCompatibilityMode, n.lastWidgetIdx = r.lastWidgetIdx, n.scriptWasLoadedAsync = r.scriptWasLoadedAsync, n.upgradeAttempts = r.upgradeAttempts, n.upgradeCompletedCount = r.upgradeCompletedCount + 1, n.turnstileLoadInitTimeMs = j(), n.watchCatInterval = null, n.watchCatSeq = r.watchCatSeq, n.widgetMap = r.widgetMap, !0) : !1
	}
	var xr = 900,
		Er = 3;

	function wr(e, n) {
		e.watchCatSeq++;
		var r = !0,
			o = !1,
			c = void 0;
		try {
			for (var s = e.widgetMap[Symbol.iterator](), y; !(r = (y = s.next()).done); r = !0) {
				var _ = _e(y.value, 2),
					m = _[0],
					l = _[1],
					S;
				l.watchcat.seq = e.watchCatSeq, l.watchcat.lastAckedSeq === 0 && (l.watchcat.lastAckedSeq = e.watchCatSeq);
				var O = $(m);
				if (!O || !l.shadow) {
					l.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(O, ", consider using turnstile.remove() to clean up a widget.")), l.watchcat.missingWidgetWarning = !0);
					continue
				}
				var U = l.shadow.querySelector("#".concat(O));
				if (!U) {
					l.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(O, ", consider using turnstile.remove() to clean up a widget.")), l.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(l.isComplete || l.isFailed)) {
					if ((l.isExecuting || !l.isInitialized || l.isInitialized && !l.isStale && !l.isExecuted) && l.watchcat.lastAckedSeq !== 0 && l.watchcat.lastAckedSeq < l.watchcat.seq - 1 - Er) {
						var A;
						l.watchcat.lastAckedSeq = 0, l.watchcat.seq = 0, l.isExecuting = !1, console.log("Turnstile Widget seem to have crashed: ", m);
						var w;
						if ((A = e.msgHandler) === null || A === void 0 || A.call(e, {
								data: {
									source: F,
									widgetId: m,
									code: Oe,
									event: "fail",
									rcV: (w = l.rcV) !== null && w !== void 0 ? w : V
								}
							}), n) {
							var I;
							window.postMessage({
								source: F,
								widgetId: m,
								event: "rcv-update",
								rcV: (I = l.rcV) !== null && I !== void 0 ? I : V
							}, "*")
						}
						continue
					}(S = U.contentWindow) === null || S === void 0 || S.postMessage({
						source: F,
						widgetId: m,
						seq: e.watchCatSeq,
						event: "meow"
					}, "*")
				}
			}
		} catch (v) {
			o = !0, c = v
		} finally {
			try {
				!r && s.return != null && s.return()
			} finally {
				if (o) throw c
			}
		}
	}

	function mt(e, n) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			wr(e, n)
		}, xr))
	}

	function gt(e) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || n) && clearInterval(e.watchCatInterval)
	}
	var J = !1,
		h = {
			turnstileLoadInitTimeMs: j(),
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

	function yt(e) {
		pr(e, "")
	}

	function bt() {
		var e = [Ut, Wt];
		h.isRecaptchaCompatibilityMode && e.push(jt), document.querySelectorAll(e.join(", ")).forEach(function(n) {
			return xt.render(n)
		})
	}
	var Et = [];

	function lr() {
		h.isReady = !0;
		var e = !0,
			n = !1,
			r = void 0;
		try {
			for (var o = Et[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var s = c.value;
				s()
			}
		} catch (y) {
			n = !0, r = y
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (n) throw r
			}
		}
	}

	function pr(e, n) {
		var r = document.getElementById("".concat(e, "_response"));
		r !== null && D(r, HTMLInputElement) && (r.value = n);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && D(o, HTMLInputElement) && (o.value = n), h.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && D(c, HTMLInputElement) && (c.value = n)
		}
	}

	function ht(e, n) {
		var r = n.params,
			o = r.size,
			c = o === void 0 ? "normal" : o,
			s = n.mode;
		switch (s) {
			case z.NON_INTERACTIVE:
			case z.MANAGED:
				switch (c) {
					case G.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case G.INVISIBLE:
						p('Invalid value for parameter "size", expected "'.concat(G.COMPACT, '" or "').concat(G.NORMAL, '", got "').concat(c, '"'), 2817);
					case G.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case z.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				p('Invalid value for parameter "mode", expected "'.concat(z.NON_INTERACTIVE, '", "').concat(z.MANAGED, '" or "').concat(z.INVISIBLE, '", got "').concat(s, '"'), 2818)
		}
	}

	function ur(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Tr(e, n) {
		var r = n.get("turnstile_iframe_alt");
		r && (e.title = r)
	}

	function Sr(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Ir(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function sr() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var xt = function() {
		var e = function(a, i, t, f) {
				return A.apply(this, arguments)
			},
			n = function(a, i, t) {
				if (a.params.retry === be.AUTO || t) {
					a.isExecuted && (a.msgQueue.push(oe.EXECUTE), a.isExecuted = !0, a.isExecuting = !0);
					var f, d = t ? 0 : 1e3 * 2 + ((f = a.params["retry-interval"]) !== null && f !== void 0 ? f : 0);
					a.retryTimeout = window.setTimeout(function() {
						l(i)
					}, d)
				}
			},
			r = function(a, i, t) {
				var f;
				a.response === void 0 && p("[Internal Error] Widget was completed but no response was given", 1362), a.isExecuting = !1, a.isComplete = !0, pr(i, a.response), (f = a.cbSuccess) === null || f === void 0 || f.call(a, a.response, t)
			},
			o = function(a) {
				if (!a) return [];
				for (var i = a.attributes, t = i.length, f = new Array(t), d = 0; d < t; d++) f[d] = i[d].name;
				return f
			},
			c = function(a, i, t) {
				if (a.rcV = i, J) {
					var f;
					window.postMessage({
						source: F,
						widgetId: t,
						event: "rcv-update",
						rcV: (f = a.rcV) !== null && f !== void 0 ? f : V
					}, "*")
				}
			},
			s = function() {
				var a = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = a.length,
					t;
				do {
					t = "";
					for (var f = 0; f < 5; f++) t += a.charAt(Math.floor(Math.random() * i))
				} while (h.widgetMap.has(t));
				return t
			},
			y = function(a) {
				var i = !0,
					t = !1,
					f = void 0;
				try {
					for (var d = h.widgetMap[Symbol.iterator](), g; !(i = (g = d.next()).done); i = !0) {
						var x = _e(g.value, 2),
							E = x[0],
							u = x[1];
						if (u.wrapper.parentElement === a) return E
					}
				} catch (T) {
					t = !0, f = T
				} finally {
					try {
						!i && d.return != null && d.return()
					} finally {
						if (t) throw f
					}
				}
				return null
			},
			_ = function(a, i, t) {
				for (; a.msgQueue.length;) {
					var f, d = a.msgQueue.pop();
					(f = t.contentWindow) === null || f === void 0 || f.postMessage({
						source: F,
						widgetId: i,
						event: d
					}, "*")
				}
			},
			m = function(a, i) {
				if (i) {
					var t = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						f = [],
						d = !0,
						g = !1,
						x = void 0;
					try {
						for (var E = t[Symbol.iterator](), u; !(d = (u = E.next()).done); d = !0) {
							var T = u.value;
							i[T] && i[T] !== a.params[T] && f.push(T)
						}
					} catch (k) {
						g = !0, x = k
					} finally {
						try {
							!d && E.return != null && E.return()
						} finally {
							if (g) throw x
						}
					}
					f.length !== 0 && p("The parameters ".concat(t.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(f.join(",")), 3618), i.action && (tt(i.action) || p('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), a.action = i.action), i.cData && (rt(i.cData) || p('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), a.cData = i.cData), i["after-interactive-callback"] && (a.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (a.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (a.cbSuccess = i.callback), i["expired-callback"] && (a.cbExpired = i["expired-callback"]), i["timeout-callback"] && (a.cbTimeout = i["timeout-callback"]), i["error-callback"] && (a.cbError = i["error-callback"]), i["unsupported-callback"] && (a.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (a.chlPageData = i.chlPageData)
				}
			},
			l = function(a) {
				var i = I(a);
				i || p("Nothing to reset found for provided container", 3329);
				var t = h.widgetMap.get(i);
				if (t) {
					t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isComplete = !1, t.isExecuting = !1, t.isExpired = !1, t.isFailed = !1, t.isInitialized = !1, t.isStale = !1, t.watchcat.lastAckedSeq = 0, t.watchcat.seq = 0, t.params.execution === fe.RENDER && (t.msgQueue.push(oe.EXECUTE), t.isExecuted = !0, t.isExecuting = !0);
					var f = $(i),
						d = t.shadow.querySelector("#".concat(f));
					(!f || !d) && p("Widget ".concat(i, " to reset was not found."), 3330), t.params.appearance === X.INTERACTION_ONLY && ur(d), t.params.sitekey === null && p("Unexpected Error: Sitekey is null", 3347);
					var g;
					d.src = ft(i, t.params.sitekey, t.params, (g = t.rcV) !== null && g !== void 0 ? g : V, J, "g", ut(t)), yt(f), t.retryTimeout && window.clearTimeout(t.retryTimeout)
				} else p("Widget ".concat(i, " to reset was not found."), 3331)
			},
			S = function(a) {
				var i, t = I(a);
				if (!t || !h.widgetMap.has(t)) {
					b("Nothing to remove found for the provided container");
					return
				}
				var f = $(t),
					d = ["input#".concat(f, "_response"), "input#".concat(f, "_legacy_response"), "input#".concat(f, "_g_response")];
				document.querySelectorAll(d.join(", ")).forEach(function(E) {
					return E.remove()
				});
				var g = h.widgetMap.get(t);
				g == null || g.shadow.querySelectorAll(d.join(", ")).forEach(function(E) {
					return E.remove()
				}), g == null || g.wrapper.remove();
				var x = (i = h.widgetMap.get(t)) === null || i === void 0 ? void 0 : i.retryTimeout;
				x && window.clearTimeout(x), h.widgetMap.delete(t), gt(h)
			},
			O = function(a, i) {
				var t, f, d = j(),
					g;
				if (typeof a == "string") try {
					var x = document.querySelector(a);
					x || p('Unable to find a container for "'.concat(a, '"'), 3585), g = x
				} catch (Rr) {
					p('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(a, '"'), 3586)
				} else D(a, HTMLElement) ? g = a : p('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var E = Ar(g);
				if (E) {
					var u = Object.assign(E, i),
						T = u.action,
						k = u.cData,
						Y = u.chlPageData,
						L = u.sitekey,
						M;
					u.theme = (M = u.theme) !== null && M !== void 0 ? M : Ce.AUTO;
					var Z;
					u.retry = (Z = u.retry) !== null && Z !== void 0 ? Z : be.AUTO;
					var le;
					u.execution = (le = u.execution) !== null && le !== void 0 ? le : fe.RENDER;
					var ee;
					u.appearance = (ee = u.appearance) !== null && ee !== void 0 ? ee : X.ALWAYS;
					var te;
					u["retry-interval"] = Number((te = u["retry-interval"]) !== null && te !== void 0 ? te : Ht);
					var ue;
					u["expiry-interval"] = Number((ue = u["expiry-interval"]) !== null && ue !== void 0 ? ue : (Dt - Ft) * 1e3);
					var re;
					u.size = (re = u.size) !== null && re !== void 0 ? re : G.NORMAL;
					var We = u.callback,
						me = u["expired-callback"],
						je = u["timeout-callback"],
						Ee = u["after-interactive-callback"],
						ge = u["before-interactive-callback"],
						B = u["error-callback"],
						we = u["unsupported-callback"];
					typeof L != "string" && p('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof L == "undefined" ? "undefined" : N(L), '"'), 3588), Mt(L) || p('Invalid input for parameter "sitekey", got "'.concat(L, '"'), 3589), nt(u.size) || p('Invalid type for parameter "size", expected normal|compact, got "'.concat(u.size, '" ').concat(N(u.size)), 3590), $e(u.theme) || p('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(u.theme, '" ').concat(N(u.theme)), 3591), Je(u.retry) || p('Invalid type for parameter "retry", expected never|auto, got "'.concat(u.retry, '" ').concat(N(u.retry)), 3592), u.language || (u.language = "auto"), ot(u.language) || (b('Invalid language value: "'.concat(u.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")), u.language = "auto"), ct(u.appearance) || p('Unknown appearance value: "'.concat(u.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), lt(u.execution) || p('Unknown execution value: "'.concat(u.execution, ", expected either: 'render' or 'execute'."), 3601), Ze(u["retry-interval"]) || p('Invalid retry-interval value: "'.concat(u["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), et(u["expiry-interval"]) || p('Invalid expiry-interval value: "'.concat(u["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var ne, q = (ne = u["refresh-expired"]) !== null && ne !== void 0 ? ne : Q.AUTO;
					at(q) ? u["refresh-expired"] = q : p('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(q, '" ').concat(typeof q == "undefined" ? "undefined" : N(q)), 3603);
					var ae, se = (ae = u["refresh-timeout"]) !== null && ae !== void 0 ? ae : ie.AUTO;
					it(q) ? u["refresh-timeout"] = se : p('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(se, '" ').concat(typeof se == "undefined" ? "undefined" : N(se)), 3603);
					var ze = g.querySelector(".cf-turnstile-wrapper");
					ze && S(g);
					var P = document.createElement("iframe"),
						W = document.createElement("div"),
						ye = W.attachShadow({
							mode: "closed"
						});
					W.classList.add("cf-turnstile-wrapper"), W.style.border = "0", W.style.margin = "0", W.style.padding = "0", tt(T) || p('Invalid input for optional parameter "action", got "'.concat(T, '"'), 3604), rt(k) || p('Invalid input for optional parameter "cData", got "'.concat(k, '"'), 3605);
					var he = s(),
						de = $(he);
					if (!(!he || !de)) {
						var wt = [],
							Ve = u.execution === fe.RENDER;
						Ve && wt.push(oe.EXECUTE), h.lastWidgetIdx++;
						var vr = {};
						h.widgetMap.set(he, At(Ye({
							idx: h.lastWidgetIdx,
							action: T,
							cData: k,
							chlPageData: Y,
							cbSuccess: We,
							cbError: B,
							cbExpired: me,
							cbTimeout: je,
							cbUnsupported: we,
							cbAfterInteractive: Ee,
							cbBeforeInteractive: ge,
							params: u,
							isStale: !1,
							isComplete: !1,
							isExpired: !1,
							isExecuting: Ve,
							isFailed: !1,
							isResetting: !1,
							isExecuted: Ve,
							isInitialized: !1,
							msgQueue: wt,
							rcV: V,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0,
								missingWidgetWarning: !1
							}
						}, vr), {
							widgetRenderStartTimeMs: d,
							widgetRenderEndTimeMs: 0,
							widgetParamsStartTimeMs: 0,
							widgetInitStartTimeMs: 0,
							shadow: ye,
							wrapper: W
						})), mt(h, J);
						var qe = h.widgetMap.get(he);
						qe || p("Turnstile Initialization Error ", 3606), P.style.display = "none", P.style.border = "none", P.style.overflow = "hidden", P.setAttribute("src", ft(he, L, u, V, J, "g", ut(qe))), P.onerror = function() {
							if (B) {
								B == null || B(String(Nt.code));
								return
							}
							p("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var Tt = ["cross-origin-isolated", "fullscreen", "autoplay"],
							He;
						C((He = (f = document.featurePolicy) === null || f === void 0 || (t = f.features) === null || t === void 0 ? void 0 : t.call(f)) !== null && He !== void 0 ? He : [], st) && Tt.push(st), P.setAttribute("allow", Tt.join("; ")), P.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), P.id = de;
						var Be;
						P.tabIndex = (Be = u.tabindex) !== null && Be !== void 0 ? Be : 0, P.title = "Widget containing a Cloudflare security challenge", ye.appendChild(P);
						var Ge, mr = (Ge = u["response-field"]) !== null && Ge !== void 0 ? Ge : !0;
						if (mr) {
							var Te = document.createElement("input");
							Te.type = "hidden";
							var Xe;
							if (Te.name = (Xe = u["response-field-name"]) !== null && Xe !== void 0 ? Xe : Vt, Te.id = "".concat(de, "_response"), W.appendChild(Te), typeof u["response-field-name"] != "string" && Ir(L)) {
								var Se = document.createElement("input");
								Se.type = "hidden", Se.name = zt, Se.id = "".concat(de, "_legacy_response"), W.appendChild(Se)
							}
						}
						if (h.isRecaptchaCompatibilityMode) {
							var Ie = document.createElement("input");
							Ie.type = "hidden", Ie.name = qt, Ie.id = "".concat(de, "_g_response"), W.appendChild(Ie)
						}
						return g.appendChild(W), qe.widgetRenderEndTimeMs = j(), de
					}
				}
			},
			U = function() {
				var a, i = -1,
					t = !0,
					f = !1,
					d = void 0;
				try {
					for (var g = h.widgetMap[Symbol.iterator](), x; !(t = (x = g.next()).done); t = !0) {
						var E = _e(x.value, 2),
							u = E[0],
							T = E[1];
						i < T.idx && (a = u, i = T.idx)
					}
				} catch (k) {
					f = !0, d = k
				} finally {
					try {
						!t && g.return != null && g.return()
					} finally {
						if (f) throw d
					}
				}
				return i === -1 && p("Could not find widget", 43778), a
			};

		function A() {
			return A = It(function(v, a, i, t) {
				var f, d, g, x, E, u, T, k, Y, L;
				return Re(this, function(M) {
					switch (M.label) {
						case 0:
							if (f = v.params.sitekey, d = sr(), !d) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), r(v, a, !1), [2];
							g = "h/".concat("g", "/"), x = new URL(d), E = "https", u = "", T = "".concat(E, "://").concat(x.host, "/cdn-cgi/challenge-platform/").concat(g, "rc/").concat(t).concat(u), M.label = 1;
						case 1:
							return M.trys.push([1, 6, , 7]), [4, fetch(T, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: f,
									secondaryToken: i
								})
							})];
						case 2:
							return k = M.sent(), k.status === 200 ? [3, 3] : (b("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), r(v, a, !1), [3, 5]);
						case 3:
							return [4, k.json()];
						case 4:
							if (Y = M.sent(), "status" in Y && Y.status === "redeemed") return r(v, a, !0), [2];
							M.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return L = M.sent(), b("Error contacting Turnstile, aborting clearance remdeption."), r(v, a, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), A.apply(this, arguments)
		}
		var w = function(v) {
			var a = v.data;
			if (a.source === F) {
				if (!Sr(v)) {
					b("Ignored message from wrong origin: " + v.origin);
					return
				}
				if (!(!a.widgetId || !h.widgetMap.has(a.widgetId))) {
					var i = $(a.widgetId),
						t = h.widgetMap.get(a.widgetId);
					if (!(!i || !t)) switch (a.event) {
						case "init": {
							var f;
							t.widgetInitStartTimeMs = j();
							var d = t.shadow.getElementById(i);
							d || p("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), t.mode = a.mode, t.mode === z.INVISIBLE && t.params["refresh-expired"] === Q.MANUAL && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat(Q.AUTO, "' or '").concat(Q.NEVER, "'")), t.mode !== z.MANAGED && t.params["refresh-timeout"] !== ie.AUTO && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), t.params.appearance === X.ALWAYS || t.isExecuting && t.params.appearance === X.EXECUTE ? ht(d, t) : ur(d), d.style.display = "";
							var g = t.shadow.querySelector("#".concat(i));
							g || p("Received state for an unknown widget: ".concat(a.widgetId), 3078), (f = g.contentWindow) === null || f === void 0 || f.postMessage({
								source: F,
								widgetId: a.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var x = t.shadow.getElementById(i);
							x || p("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var E = new Map;
							t.displayLanguage = a.displayLanguage, Object.keys(a.translationData).forEach(function(ye) {
								E.set(ye, a.translationData[ye])
							}), Tr(x, E);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(t.params.language, " is not supported, falling back to: ").concat(a.fallback)), t.displayLanguage = a.fallback;
							break
						}
						case "reject": {
							var u = t.shadow.getElementById(i);
							if (t.isExecuting = !1, u || p("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), a.reason === "outdated_browser") {
								var T;
								(T = t.cbUnsupported) === null || T === void 0 || T.call(t)
							}
							break
						}
						case "food": {
							t.watchcat && a.seq > t.watchcat.lastAckedSeq && (t.watchcat.lastAckedSeq = a.seq);
							break
						}
						case "complete": {
							c(t, V, a.widgetId), t.response = a.token, a.sToken ? e(t, i, a.sToken, a.chlId) : r(t, i, !1);
							break
						}
						case "fail": {
							a.rcV && c(t, a.rcV, a.widgetId), a.cfChlOut && (t.cfChlOut = a.cfChlOut), a.cfChlOutS && (t.cfChlOutS = a.cfChlOutS), a.code && (t.errorCode = a.code), t.isExecuting = !1, t.isFailed = !0, t.isInitialized = !0, yt(i);
							var k = t.cbError,
								Y = a.code === Oe;
							if (k) {
								var L;
								k(String((L = a.code) !== null && L !== void 0 ? L : Lt)) || (a.code && b("Error: ".concat(a.code)), n(t, i, Y))
							} else a.code ? (n(t, i, Y), p("Error: ".concat(a.code), 3076)) : n(t, i, !1);
							break
						}
						case "feedbackInit": {
							var M = t.wrapper.querySelector("#".concat(i, "-fr"));
							if (M) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							tr(i, t);
							break
						}
						case "requestFeedbackData": {
							var Z, le = t.shadow.querySelector("#".concat(i));
							le || p("Received state for an unknown widget: #".concat(i, " / ").concat(a.widgetId), 3078), (Z = le.contentWindow) === null || Z === void 0 || Z.postMessage({
								source: F,
								widgetId: a.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var ee, te, ue = (ee = t.wrapper.parentNode) === null || ee === void 0 ? void 0 : ee.querySelector("#".concat(i, "-fr"));
							ue || p("Received state for an unknown widget: ".concat(a.widgetId), 3078), (te = ue.contentWindow) === null || te === void 0 || te.postMessage({
								source: F,
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
							var re, We = (re = t.wrapper.parentNode) === null || re === void 0 ? void 0 : re.querySelector("#".concat(i, "-fr"));
							We || p("Received state for an unknown widget: ".concat(a.widgetId), 3078), rr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var me, je = a.token;
							t.isExpired = !0, (me = t.cbExpired) === null || me === void 0 || me.call(t, je), t.params["refresh-expired"] === Q.AUTO && !t.isResetting && l(i);
							break
						}
						case "interactiveTimeout": {
							c(t, V, a.widgetId), yt(i);
							var Ee = t.cbTimeout;
							if (Ee ? Ee() : t.params["refresh-timeout"] === ie.NEVER && !t.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), t.params["refresh-timeout"] === ie.AUTO && !t.isResetting) {
								var ge = t.cbAfterInteractive;
								ge == null || ge(), l(i)
							}
							break
						}
						case "refreshRequest": {
							c(t, V, a.widgetId), l(i);
							break
						}
						case "reloadRequest": {
							c(t, a.nextRcV, a.widgetId), l(i);
							break
						}
						case "interactiveBegin": {
							var B, we = t.shadow.getElementById(i);
							we || p("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (B = t.cbBeforeInteractive) === null || B === void 0 || B.call(t), t.params.appearance === X.INTERACTION_ONLY && ht(we, t);
							break
						}
						case "interactiveEnd": {
							var ne;
							(ne = t.cbAfterInteractive) === null || ne === void 0 || ne.call(t);
							break
						}
						case "widgetStale": {
							t.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var q;
							t.widgetParamsStartTimeMs = j();
							var ae = t.shadow.querySelector("#".concat(i));
							ae || p("Received state for an unknown widget: ".concat(a.widgetId), 3078), t.isResetting = !1;
							var se = {},
								ze = j(),
								P = {
									"w.iW": window.innerWidth,
									"ht.atrs": o(document.body.parentNode),
									pi: {
										xp: nr(t.wrapper).substring(0, Xt),
										pfp: ar(document, Bt, Gt),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: ir(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href
									}
								},
								W = j() - ze;
							(q = ae.contentWindow) === null || q === void 0 || q.postMessage(Ye({
								source: F,
								widgetId: a.widgetId,
								event: "extraParams",
								action: t.action,
								cData: t.cData,
								chlPageData: t.chlPageData,
								rcV: t.rcV,
								ch: "7a55c9ccbaaa",
								url: sr(),
								retry: t.params.retry,
								"expiry-interval": t.params["expiry-interval"],
								"retry-interval": t.params["retry-interval"],
								"refresh-expired": t.params["refresh-expired"],
								"refresh-timeout": t.params["refresh-timeout"],
								language: t.params.language,
								execution: t.params.execution,
								appearance: t.params.appearance,
								wPr: P,
								turnstileAgeMs: j() - h.turnstileLoadInitTimeMs,
								widgetAgeMs: j() - t.widgetRenderStartTimeMs,
								upgradeAttempts: h.upgradeAttempts,
								upgradeCompletedCount: h.upgradeCompletedCount,
								timeRenderMs: t.widgetRenderEndTimeMs - t.widgetRenderStartTimeMs,
								timeToInitMs: t.widgetInitStartTimeMs - t.widgetRenderEndTimeMs,
								timeToParamsMs: t.widgetParamsStartTimeMs - t.widgetInitStartTimeMs,
								tiefTimeMs: W
							}, se), "*"), _(t, a.widgetId, ae), t.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		h.msgHandler = w, window.addEventListener("message", w);

		function I(v) {
			if (typeof v == "string") {
				var a = Pe(v);
				if (a && h.widgetMap.has(a)) return a;
				if (h.widgetMap.has(v)) return v;
				try {
					var i = document.querySelector(v);
					return i ? I(i) : null
				} catch (t) {
					return null
				}
			}
			return D(v, Element) ? y(v) : v || h.widgetMap.size === 0 ? null : h.widgetMap.keys().next().value
		}
		return {
			ready: function(a) {
				if (h.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), p("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof a != "function" && p('turnstile.ready() expected a "function" argument, got "'.concat(typeof a == "undefined" ? "undefined" : N(a), '"'), 3841), a(), typeof a != "function" && p('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), h.isReady) {
					a();
					return
				}
				Et.push(a)
			},
			implicitRender: bt,
			execute: function(a, i) {
				var t = I(a);
				if (!t) {
					i === void 0 && p("Please provide 2 parameters to execute: container and parameters", 43521);
					var f = O(a, i);
					f || p("Failed to render widget", 43522), t = f
				}
				var d = h.widgetMap.get(t);
				if (d) {
					m(d, i);
					var g = $(t);
					if (d.isExecuting) {
						b("Call to execute() on a widget that is already executing (".concat(g, "), consider using reset() before execute()"));
						return
					} else d.isExecuting = !0;
					if (d.response) {
						var x;
						d.isExecuting = !1, b("Call to execute() on a widget that was already executed (".concat(g, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), (x = d.cbSuccess) === null || x === void 0 || x.call(d, d.response, !1);
						return
					}
					d.isExpired && b("Call to execute on a expired-widget (".concat(g, "), consider using reset() before")), d.isStale && (l(g), d.isExecuting = !0), d.msgQueue.push(oe.EXECUTE), d.isExecuted = !0;
					var E = d.shadow.querySelector("#".concat(g));
					if (E || (d.isExecuting = !1, p("Widget ".concat(g, " to execute was not found"), 43522)), d.isResetting) return;
					if (d.isInitialized && _(d, t, E), d.isInitialized && d.params.appearance === X.EXECUTE && ht(E, d), d.isExecuting) {
						var u, T = d.shadow.querySelector("#".concat(g));
						T || p("Received state for an unknown widget: ".concat(t), 3078), (u = T.contentWindow) === null || u === void 0 || u.postMessage({
							source: F,
							widgetId: t,
							event: "execute"
						}, "*")
					}
				}
			},
			render: O,
			reset: l,
			remove: S,
			getResponse: function(a) {
				var i;
				if (typeof a == "undefined") {
					var t = U();
					if (t) {
						var f, d = h.widgetMap.get(t);
						return d != null && d.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), (f = h.widgetMap.get(t)) === null || f === void 0 ? void 0 : f.response
					} else p("Could not find a widget", 43794)
				}
				var g = I(a);
				return g || p("Could not find widget for provided container", 43778), (i = h.widgetMap.get(g)) === null || i === void 0 ? void 0 : i.response
			},
			isExpired: function(a) {
				var i;
				if (typeof a == "undefined") {
					var t = U();
					if (t) {
						var f, d;
						return (d = (f = h.widgetMap.get(t)) === null || f === void 0 ? void 0 : f.isExpired) !== null && d !== void 0 ? d : !1
					} else p("Could not find a widget", 43794)
				}
				var g = I(a);
				g || p("Could not find widget for provided container", 43778);
				var x;
				return (x = (i = h.widgetMap.get(g)) === null || i === void 0 ? void 0 : i.isExpired) !== null && x !== void 0 ? x : !1
			}
		}
	}();

	function Ar(e) {
		var n = e.getAttribute("data-sitekey"),
			r = {
				sitekey: n
			},
			o = e.getAttribute("data-tabindex");
		o && (r.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && ($e(c) ? r.theme = c : b('Unknown data-theme value: "'.concat(c, '"')));
		var s = e.getAttribute("data-size");
		if (s && (nt(s) ? r.size = s : b('Unknown data-size value: "'.concat(s, '"'))), 0) var y;
		var _ = e.getAttribute("data-action");
		typeof _ == "string" && (r.action = _);
		var m = e.getAttribute("data-cdata");
		typeof m == "string" && (r.cData = m);
		var l = e.getAttribute("data-retry");
		l && (Je(l) ? r.retry = l : b('Invalid data-retry value: "'.concat(l, ", expected either 'never' or 'auto'\"")));
		var S = e.getAttribute("data-retry-interval");
		if (S) {
			var O = Number.parseInt(S, 10);
			Ze(O) ? r["retry-interval"] = O : b('Invalid data-retry-interval value: "'.concat(S, ', expected an integer value > 0 and < 900000"'))
		}
		var U = e.getAttribute("data-expiry-interval");
		if (U) {
			var A = Number.parseInt(U, 10);
			et(A) ? r["expiry-interval"] = A : b('Invalid data-expiry-interval value: "'.concat(A, ', expected an integer value > 0 and < 360000"'))
		}
		var w = e.getAttribute("data-refresh-expired");
		w && (at(w) ? r["refresh-expired"] = w : b('Unknown data-refresh-expired value: "'.concat(w, ", expected either: 'never', 'auto' or 'manual'.")));
		var I = e.getAttribute("data-refresh-timeout");
		I && (it(I) ? r["refresh-timeout"] = I : b('Unknown data-refresh-timeout value: "'.concat(I, ", expected either: 'never', 'auto' or 'manual'.")));
		var v = e.getAttribute("data-language");
		v && (ot(v) ? r.language = v : b('Invalid data-language value: "'.concat(v, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));

		function a(u) {
			var T = e.getAttribute(u);
			return T && window[T] ? window[T] : void 0
		}
		var i = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		i.forEach(function(u) {
			r[u] = a("data-".concat(u))
		});
		var t = e.getAttribute("data-feedback-enabled");
		t ? (Pt(t) || b('Invalid data-feedback-enabled value: "'.concat(t, ", expected either: 'true' or 'false'. Value is ignored.")), r["feedback-enabled"] = t === "true") : r["feedback-enabled"] = !0;
		var f, d = (f = e.getAttribute("data-response-field")) !== null && f !== void 0 ? f : "true";
		r["response-field"] = d === "true";
		var g = e.getAttribute("data-response-field-name");
		g && (r["response-field-name"] = g);
		var x = e.getAttribute("data-execution");
		x && (lt(x) ? r.execution = x : b('Unknown data-execution value: "'.concat(x, ", expected either: 'render' or 'execute'.")));
		var E = e.getAttribute("data-appearance");
		return E && (ct(E) ? r.appearance = E : b('Unknown data-appearance value: "'.concat(E, ", expected either: 'always', 'execute', or 'interaction-only'."))), r
	}

	function dr() {
		var e = !0;
		gt(h, e), h.msgHandler && window.removeEventListener("message", h.msgHandler), or(window.turnstile, h)
	}
	pe = !1, R = er(), h.scriptWasLoadedAsync = (De = R == null ? void 0 : R.loadedAsync) !== null && De !== void 0 ? De : !1, R != null && R.params && (ve = R.params.get("compat"), (ve == null ? void 0 : ve.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled") : (b("Compatibility layer enabled"), h.isRecaptchaCompatibilityMode = !0, window.grecaptcha = xt) : ve !== null && b('Unknown value for api.js?compat: "'.concat(ve, '", ignoring')), R.params.forEach(function(e, n) {
		C(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], n) || b('Unknown parameter passed to api.js: "?'.concat(n, '=...", ignoring'))
	}), pe = R.params.get("_upgrade") === "true", H = R.params.get("onload"), H && !pe && setTimeout(function() {
		typeof window[H] == "function" ? window[H]() : (b("Unable to find onload callback '".concat(H, "' immediately after loading, expected 'function', got '").concat(N(window[H]), "'")), setTimeout(function() {
			typeof window[H] == "function" ? window[H]() : b("Unable to find onload callback '".concat(H, "' after 1 second, expected 'function', got '").concat(N(window[H]), "'"))
		}, 1e3))
	}, 0)), _t = "turnstile" in window, _t && !pe ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (_t && pe && (cr(window.turnstile, h), mt(h, J), (R == null || (Fe = R.params) === null || Fe === void 0 ? void 0 : Fe.get("render")) !== "explicit" && setTimeout(bt, 0)), window.turnstile = xt, pe || ((R == null || (Ue = R.params) === null || Ue === void 0 ? void 0 : Ue.get("render")) !== "explicit" && Et.push(bt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(lr, 0) : window.addEventListener("DOMContentLoaded", lr))), fr = 24 * 60 * 60 * 1e3, window.setTimeout(dr, fr), J && (window.turnstile._testUpgrade = dr);
	var pe, R, De, ve, H, _t, Fe, Ue, fr;
})();