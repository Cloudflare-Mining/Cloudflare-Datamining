"use strict";
(function() {
	function bt(e, r, t, o, l, s, m) {
		try {
			var b = e[s](m),
				h = b.value
		} catch (d) {
			t(d);
			return
		}
		b.done ? r(h) : Promise.resolve(h).then(o, l)
	}

	function Et(e) {
		return function() {
			var r = this,
				t = arguments;
			return new Promise(function(o, l) {
				var s = e.apply(r, t);

				function m(h) {
					bt(s, o, l, m, b, "next", h)
				}

				function b(h) {
					bt(s, o, l, m, b, "throw", h)
				}
				m(void 0)
			})
		}
	}

	function M(e, r) {
		return r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : M(e, r)
	}

	function Ie(e, r, t) {
		return r in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e
	}

	function Ve(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = arguments[r] != null ? arguments[r] : {},
				o = Object.keys(t);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(l) {
				return Object.getOwnPropertyDescriptor(t, l).enumerable
			}))), o.forEach(function(l) {
				Ie(e, l, t[l])
			})
		}
		return e
	}

	function fr(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(l) {
				return Object.getOwnPropertyDescriptor(e, l).enumerable
			})), t.push.apply(t, o)
		}
		return t
	}

	function wt(e, r) {
		return r = r != null ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fr(Object(r)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
		}), e
	}

	function Tt(e) {
		if (Array.isArray(e)) return e
	}

	function St(e, r) {
		var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (t != null) {
			var o = [],
				l = !0,
				s = !1,
				m, b;
			try {
				for (t = t.call(e); !(l = (m = t.next()).done) && (o.push(m.value), !(r && o.length === r)); l = !0);
			} catch (h) {
				s = !0, b = h
			} finally {
				try {
					!l && t.return != null && t.return()
				} finally {
					if (s) throw b
				}
			}
			return o
		}
	}

	function It() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function qe(e, r) {
		(r == null || r > e.length) && (r = e.length);
		for (var t = 0, o = new Array(r); t < r; t++) o[t] = e[t];
		return o
	}

	function At(e, r) {
		if (e) {
			if (typeof e == "string") return qe(e, r);
			var t = Object.prototype.toString.call(e).slice(8, -1);
			if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(t);
			if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return qe(e, r)
		}
	}

	function Ae(e, r) {
		return Tt(e) || St(e, r) || At(e, r) || It()
	}

	function k(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Re(e, r) {
		var t = {
				label: 0,
				sent: function() {
					if (s[0] & 1) throw s[1];
					return s[1]
				},
				trys: [],
				ops: []
			},
			o, l, s, m;
		return m = {
			next: b(0),
			throw: b(1),
			return: b(2)
		}, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
			return this
		}), m;

		function b(d) {
			return function(y) {
				return h([d, y])
			}
		}

		function h(d) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; m && (m = 0, d[0] && (t = 0)), t;) try {
				if (o = 1, l && (s = d[0] & 2 ? l.return : d[0] ? l.throw || ((s = l.return) && s.call(l), 0) : l.next) && !(s = s.call(l, d[1])).done) return s;
				switch (l = 0, s && (d = [d[0] & 2, s.value]), d[0]) {
					case 0:
					case 1:
						s = d;
						break;
					case 4:
						return t.label++, {
							value: d[1],
							done: !1
						};
					case 5:
						t.label++, l = d[1], d = [0];
						continue;
					case 7:
						d = t.ops.pop(), t.trys.pop();
						continue;
					default:
						if (s = t.trys, !(s = s.length > 0 && s[s.length - 1]) && (d[0] === 6 || d[0] === 2)) {
							t = 0;
							continue
						}
						if (d[0] === 3 && (!s || d[1] > s[0] && d[1] < s[3])) {
							t.label = d[1];
							break
						}
						if (d[0] === 6 && t.label < s[1]) {
							t.label = s[1], s = d;
							break
						}
						if (s && t.label < s[2]) {
							t.label = s[2], t.ops.push(d);
							break
						}
						s[2] && t.ops.pop(), t.trys.pop();
						continue
				}
				d = r.call(e, t)
			} catch (y) {
				d = [6, y], l = 0
			} finally {
				o = s = 0
			}
			if (d[0] & 5) throw d[1];
			return {
				value: d[0] ? d[1] : void 0,
				done: !0
			}
		}
	}
	var Rt = {
		code: 200500,
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?"
	};
	var Ot = 300020;
	var Oe = 300030;
	var F;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(F || (F = {}));
	var V;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(V || (V = {}));
	var Ce;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Ce || (Ce = {}));
	var _e;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(_e || (_e = {}));
	var Q;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(Q || (Q = {}));
	var re;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(re || (re = {}));
	var q;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(q || (q = {}));
	var ue;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(ue || (ue = {}));
	var ne;
	(function(e) {
		e.EXECUTE = "execute"
	})(ne || (ne = {}));
	var Ge;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(Ge || (Ge = {}));

	function N(e, r) {
		return e.indexOf(r) !== -1
	}

	function Xe(e) {
		return N(["auto", "dark", "light"], e)
	}

	function Ye(e) {
		return N(["auto", "never"], e)
	}

	function Qe(e) {
		return e > 0 && e < 9e5
	}

	function Ke(e) {
		return e > 0 && e < 36e4
	}
	var dr = /^[0-9A-Za-z_-]{3,100}$/;

	function Ct(e) {
		return dr.test(e)
	}
	var pr = /^[a-z0-9_-]{0,32}$/i;

	function $e(e) {
		return e === void 0 ? !0 : typeof e == "string" && pr.test(e)
	}
	var vr = /^[a-z0-9_\-=]{0,255}$/i;

	function Je(e) {
		return e === void 0 ? !0 : typeof e == "string" && vr.test(e)
	}

	function Ze(e) {
		return N(["normal", "compact", "invisible"], e)
	}

	function et(e) {
		return N(["auto", "manual", "never"], e)
	}

	function tt(e) {
		return N(["auto", "manual", "never"], e)
	}
	var mr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function rt(e) {
		return e === "auto" || mr.test(e)
	}

	function nt(e) {
		return N(["always", "execute", "interaction-only"], e)
	}

	function at(e) {
		return N(["render", "execute"], e)
	}
	var kt = 300,
		Nt = 10;
	var U = "0/0";

	function it(e) {
		var r = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && r.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && r.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), r.size !== 0) return r.toString()
	}
	var le = "cf-chl-widget-",
		P = "cloudflare-challenge",
		Lt = ".cf-turnstile",
		Mt = ".cf-challenge",
		Pt = ".g-recaptcha",
		Dt = "cf_challenge_response",
		Ft = "cf-turnstile-response",
		Ut = "g-recaptcha-response",
		Wt = 8e3,
		ot = "private-token",
		jt = 3,
		zt = 500,
		Ht = 500;

	function ct(e, r) {
		var t = "https://challenges.cloudflare.com";
		if (r) {
			var o;
			t = (o = e["base-url"]) !== null && o !== void 0 ? o : t
		}
		return t
	}

	function ut(e, r, t, o, l, s, m) {
		var b = ct(t, l),
			h = s ? "h/".concat(s, "/") : "",
			d = m ? "?".concat(m) : "";
		return "".concat(b, "/cdn-cgi/challenge-platform/").concat(h, "turnstile/if/ov2/av0/rcv").concat(o, "/").concat(e, "/").concat(r, "/").concat(t.theme, "/").concat(t.size).concat(d)
	}

	function ke(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Bt(e, r) {
		if (!M(e, r)) throw new TypeError("Cannot call a class as a function")
	}

	function K(e, r) {
		return K = Object.setPrototypeOf || function(o, l) {
			return o.__proto__ = l, o
		}, K(e, r)
	}

	function Vt(e, r) {
		if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(r && r.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), r && K(e, r)
	}

	function Ne() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function xe(e, r, t) {
		return Ne() ? xe = Reflect.construct : xe = function(l, s, m) {
			var b = [null];
			b.push.apply(b, s);
			var h = Function.bind.apply(l, b),
				d = new h;
			return m && K(d, m.prototype), d
		}, xe.apply(null, arguments)
	}

	function ae(e) {
		return ae = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		}, ae(e)
	}

	function qt(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Le(e) {
		var r = typeof Map == "function" ? new Map : void 0;
		return Le = function(o) {
			if (o === null || !qt(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof r != "undefined") {
				if (r.has(o)) return r.get(o);
				r.set(o, l)
			}

			function l() {
				return xe(o, arguments, ae(this).constructor)
			}
			return l.prototype = Object.create(o.prototype, {
				constructor: {
					value: l,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), K(l, o)
		}, Le(e)
	}

	function Gt(e, r) {
		return r && (k(r) === "object" || typeof r == "function") ? r : ke(e)
	}

	function Xt(e) {
		var r = Ne();
		return function() {
			var o = ae(e),
				l;
			if (r) {
				var s = ae(this).constructor;
				l = Reflect.construct(o, arguments, s)
			} else l = o.apply(this, arguments);
			return Gt(this, l)
		}
	}
	var Yt = function(e) {
		"use strict";
		Vt(t, e);
		var r = Xt(t);

		function t(o, l) {
			Bt(this, t);
			var s;
			return s = r.call(this, o), Ie(ke(s), "code", void 0), s.name = "TurnstileError", s.code = l, s
		}
		return t
	}(Le(Error));

	function v(e, r) {
		var t = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Yt(t, r)
	}

	function _(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function be(e) {
		return e.startsWith(le) ? e.substring(le.length) : null
	}

	function $(e) {
		return "".concat(le).concat(e)
	}

	function lt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (M(r, HTMLScriptElement) && e.test(r.src)) return r;
		for (var t = document.querySelectorAll("script"), o = 0, l; l = t[o]; o++)
			if (M(l, HTMLScriptElement) && e.test(l.src)) return l
	}

	function Qt() {
		var e = lt();
		e || v("Could not find Turnstile script tag, some features may not be available", 43777);
		var r = {
			loadedAsync: !1,
			params: new URLSearchParams
		};
		(e.async || e.defer) && (r.loadedAsync = !0);
		var t = e.src,
			o = t.split("?");
		return o.length > 1 && (r.params = new URLSearchParams(o[1])), r
	}

	function D() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}

	function Kt(e, r) {
		var t, o, l, s = ct(r.params, J),
			m = "h/".concat("g", "/"),
			b = "".concat(s, "/cdn-cgi/challenge-platform/").concat(m, "feedback-reports/").concat(be(e), "/").concat(r.displayLanguage, "/"),
			h = document.getElementById(e);
		h || v("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
		var d = document.createElement("div");
		d.style.position = "fixed", d.style.zIndex = "21474836419";
		var y = document.createElement("div");
		y.className = "cf-turnstile-feedback", y.id = "cf-fr-id", y.style.borderColor = "#000000", y.style.width = "450px";
		var S = ["ar-eg", "bg-bg", "da-dk", "de-de", "el-gr", "hr-hr", "hu-hu", "ja-jp", "ms-my", "id-id", "ru-ru", "sk-sk", "sl-si", "sr-ba", "uk-ua"],
			W = ["es-es", "cs-cz", "fa-ir", "fr-fr", "it-it", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr"],
			O, A;
		N(S, (O = (t = r.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && O !== void 0 ? O : "nonexistent") ? y.style.height = "520px" : N(W, (A = (o = r.displayLanguage) === null || o === void 0 ? void 0 : o.toLowerCase()) !== null && A !== void 0 ? A : "nonexistent") ? y.style.height = "480px" : y.style.height = "460px", y.style.position = "absolute", y.style.zIndex = "21474836420", y.style.borderWidth = "1px", y.style.borderColor = "#000", y.style.borderStyle = "solid", y.style.backgroundColor = "#ffffff", y.style.borderRadius = "10px", y.style.left = "-122px", y.style.top = "-91px", y.style.overflow = "hidden";
		var u = document.createElement("iframe");
		u.id = e + "-fr", u.setAttribute("src", b), u.setAttribute("allow", "cross-origin-isolated; fullscreen"), u.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), u.setAttribute("scrolling", "no"), u.style.borderWidth = "0px", u.style.width = "100%", u.style.height = "100%", u.style.overflow = "hidden";
		var i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		i.style.position = "absolute", i.style.width = "26px", i.style.height = "26px", i.style.zIndex = "21474836421", i.style.cursor = "pointer", r.displayRTL ? i.style.left = "6px" : i.style.right = "2px", i.style.top = "5px", i.setAttribute("width", "26"), i.setAttribute("height", "26"), i.addEventListener("click", function() {
			var p;
			(p = d.parentNode) === null || p === void 0 || p.removeChild(d)
		});
		var n = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		n.setAttribute("ry", "12"), n.setAttribute("rx", "12"), n.setAttribute("cy", "12"), n.setAttribute("cx", "12"), n.setAttribute("fill", "#aaaaaa"), n.setAttribute("stroke-width", "0"), i.appendChild(n);
		var c = document.createElementNS("http://www.w3.org/2000/svg", "line");
		c.setAttribute("stroke-width", "3"), c.setAttribute("stroke", "#fff"), c.setAttribute("fill", "none"), c.setAttribute("x1", "6"), c.setAttribute("x2", "18"), c.setAttribute("y1", "18"), c.setAttribute("y2", "5"), i.appendChild(c);
		var a = document.createElementNS("http://www.w3.org/2000/svg", "line");
		a.setAttribute("stroke-width", "3"), a.setAttribute("stroke", "#fff"), a.setAttribute("fill", "none"), a.setAttribute("x1", "6"), a.setAttribute("x2", "18"), a.setAttribute("y1", "5"), a.setAttribute("y2", "18"), i.appendChild(a), y.appendChild(u), y.appendChild(i), d.appendChild(y), (l = h.parentNode) === null || l === void 0 || l.appendChild(d)
	}

	function $t(e) {
		var r, t, o;
		(o = document.getElementById(e)) === null || o === void 0 || (t = o.parentElement) === null || t === void 0 || (r = t.parentElement) === null || r === void 0 || r.remove()
	}
	var st = function(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > r ? e.substring(0, r) : e
	};

	function Jt(e) {
		var r = function(t, o) {
			if (!t || t.tagName === "BODY") return o;
			for (var l = 1, s = t.previousElementSibling; s;) s.tagName === t.tagName && l++, s = s.previousElementSibling;
			var m = st(t.tagName.toLowerCase()),
				b = "".concat(m, "[").concat(l, "]");
			return r(t.parentNode, "/".concat(b).concat(o))
		};
		return r(e, "")
	}

	function Zt(e, r, t) {
		for (var o = "", l = 0, s = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(S) {
					return l > r || o.length > t ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), m;
			(m = s.nextNode()) !== null && o.length < t;) {
			if (m.nodeType === Node.ELEMENT_NODE) {
				var b = m;
				o += "".concat(st(b.tagName.toLowerCase()));
				for (var h = 0; h < b.attributes.length; h++) {
					var d = b.attributes[h];
					o += "_".concat(st(d.name, 2))
				}
				o += ">"
			} else m.nodeType === Node.TEXT_NODE && (o += "-t");
			var y = m.parentNode;
			for (l = 0; y !== e && y !== null;) l++, y = y.parentNode
		}
		return o.substring(0, t)
	}

	function er(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : k(e)));
		for (var r = 5381, t = 0; t < e.length; t++) {
			var o = e.charCodeAt(t);
			r = r * 33 ^ o
		}
		return r >>> 0
	}

	function tr(e, r) {
		var t;
		r.upgradeAttempts++;
		var o = lt();
		if (!(!o || !o.parentNode)) {
			var l = o == null ? void 0 : o.nonce;
			e._pState = r;
			var s = new URL(o.src),
				m = document.createElement("script");
			s.searchParams.set("_upgrade", "true"), s.searchParams.set("_cb", String(Date.now())), m.async = !0, l && (m.nonce = l), m.setAttribute("crossorigin", "anonymous"), m.src = s.toString(), o == null || (t = o.parentNode) === null || t === void 0 || t.replaceChild(m, o)
		}
	}

	function rr(e, r) {
		var t = e._pState;
		return t ? (r.isReady = t.isReady, r.isRecaptchaCompatibilityMode = t.isRecaptchaCompatibilityMode, r.lastWidgetIdx = t.lastWidgetIdx, r.scriptWasLoadedAsync = t.scriptWasLoadedAsync, r.upgradeAttempts = t.upgradeAttempts, r.upgradeCount = t.upgradeCount + 1, r.turnstileLoadInitTimeMs = D(), r.watchCatInterval = null, r.watchCatSeq = t.watchCatSeq, r.widgetMap = t.widgetMap, !0) : !1
	}
	var gr = 900,
		yr = 3;

	function hr(e, r) {
		e.watchCatSeq++;
		var t = !0,
			o = !1,
			l = void 0;
		try {
			for (var s = e.widgetMap[Symbol.iterator](), m; !(t = (m = s.next()).done); t = !0) {
				var b = Ae(m.value, 2),
					h = b[0],
					d = b[1],
					y;
				d.watchcat.seq = e.watchCatSeq, d.watchcat.lastAckedSeq === 0 && (d.watchcat.lastAckedSeq = e.watchCatSeq);
				var S = $(h);
				if (!S) {
					d.watchcat.missingWidgetWarning || (_("Cannot find Widget ".concat(S, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				var W = document.querySelector("#".concat(S));
				if (!W) {
					d.watchcat.missingWidgetWarning || (_("Cannot find Widget ".concat(S, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				if ((d.isExecuting || !d.isInitialized || d.isInitialized && !d.isStale && !d.isExecuted) && d.watchcat.lastAckedSeq !== 0 && d.watchcat.lastAckedSeq < d.watchcat.seq - 1 - yr) {
					var O;
					d.watchcat.lastAckedSeq = 0, d.watchcat.seq = 0, d.isExecuting = !1, console.log("Turnstile Widget seem to have crashed: ", h);
					var A;
					if ((O = e.msgHandler) === null || O === void 0 || O.call(e, {
							data: {
								source: P,
								widgetId: h,
								code: Oe,
								event: "fail",
								rcV: (A = d.rcV) !== null && A !== void 0 ? A : U
							}
						}), r) {
						var u;
						window.postMessage({
							source: P,
							widgetId: h,
							event: "rcv-update",
							rcV: (u = d.rcV) !== null && u !== void 0 ? u : U
						}, "*")
					}
					continue
				}(y = W.contentWindow) === null || y === void 0 || y.postMessage({
					source: P,
					widgetId: h,
					seq: e.watchCatSeq,
					event: "meow"
				}, "*")
			}
		} catch (i) {
			o = !0, l = i
		} finally {
			try {
				!t && s.return != null && s.return()
			} finally {
				if (o) throw l
			}
		}
	}

	function ft(e, r) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			hr(e, r)
		}, gr))
	}

	function dt(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || r) && clearInterval(e.watchCatInterval)
	}
	var J = !1,
		g = {
			turnstileLoadInitTimeMs: D(),
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

	function pt(e) {
		ur(e, "")
	}

	function gt() {
		var e = [Lt, Mt];
		g.isRecaptchaCompatibilityMode && e.push(Pt), document.querySelectorAll(e.join(", ")).forEach(function(r) {
			return yt.render(r)
		})
	}
	var ht = [];

	function nr() {
		g.isReady = !0;
		var e = !0,
			r = !1,
			t = void 0;
		try {
			for (var o = ht[Symbol.iterator](), l; !(e = (l = o.next()).done); e = !0) {
				var s = l.value;
				s()
			}
		} catch (m) {
			r = !0, t = m
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (r) throw t
			}
		}
	}

	function ur(e, r) {
		var t = document.getElementById("".concat(e, "_response"));
		t !== null && M(t, HTMLInputElement) && (t.value = r);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && M(o, HTMLInputElement) && (o.value = r), g.isRecaptchaCompatibilityMode) {
			var l = document.getElementById("".concat(e, "_g_response"));
			l !== null && M(l, HTMLInputElement) && (l.value = r)
		}
	}

	function vt(e, r) {
		var t = r.params,
			o = t.size,
			l = o === void 0 ? "normal" : o,
			s = r.mode;
		switch (s) {
			case F.NON_INTERACTIVE:
			case F.MANAGED:
				switch (l) {
					case V.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case V.INVISIBLE:
						v('Invalid value for parameter "size", expected "'.concat(V.COMPACT, '" or "').concat(V.NORMAL, '", got "').concat(l, '"'), 2817);
					case V.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case F.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				v('Invalid value for parameter "mode", expected "'.concat(F.NON_INTERACTIVE, '", "').concat(F.MANAGED, '" or "').concat(F.INVISIBLE, '", got "').concat(s, '"'), 2818)
		}
	}

	function ar(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function _r(e, r) {
		var t = r.get("turnstile_iframe_alt");
		t && (e.title = t)
	}

	function xr(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function br(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function ir() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var yt = function() {
		function e(u, i, n, c) {
			return r.apply(this, arguments)
		}

		function r() {
			return r = Et(function(u, i, n, c) {
				var a, p, x, E, f, w, T, H, C, G;
				return Re(this, function(R) {
					switch (R.label) {
						case 0:
							if (a = u.params.sitekey, p = ir(), !p) return _("Cannot determine Turnstile's embedded location, aborting clearance redemption."), o(u, i, !1), [2];
							x = "h/".concat("g", "/"), E = new URL(p), f = "https", w = "", T = "".concat(f, "://").concat(E.host, "/cdn-cgi/challenge-platform/").concat(x, "rc/").concat(c).concat(w), R.label = 1;
						case 1:
							return R.trys.push([1, 6, , 7]), [4, fetch(T, {
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
							return H = R.sent(), H.status === 200 ? [3, 3] : (_("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), o(u, i, !1), [3, 5]);
						case 3:
							return [4, H.json()];
						case 4:
							if (C = R.sent(), "status" in C && C.status === "redeemed") return o(u, i, !0), [2];
							R.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return G = R.sent(), _("Error contacting Turnstile, aborting clearance remdeption."), o(u, i, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), r.apply(this, arguments)
		}

		function t(u, i, n) {
			if (u.params.retry === _e.AUTO || n) {
				u.isExecuted && (u.msgQueue.push(ne.EXECUTE), u.isExecuted = !0, u.isExecuting = !0);
				var c, a = n ? 0 : 1e3 * 2 + ((c = u.params["retry-interval"]) !== null && c !== void 0 ? c : 0);
				u.retryTimeout = window.setTimeout(function() {
					S(i)
				}, a)
			}
		}

		function o(u, i, n) {
			var c;
			u.response === void 0 && v("[Internal Error] Widget was completed but no response was given", 1362), u.isExecuting = !1, ur(i, u.response), (c = u.cbSuccess) === null || c === void 0 || c.call(u, u.response, n)
		}

		function l(u) {
			if (!u) return [];
			for (var i = u.attributes, n = i.length, c = new Array(n), a = 0; a < n; a++) c[a] = i[a].name;
			return c
		}

		function s(u, i, n) {
			if (u.rcV = i, J) {
				var c;
				window.postMessage({
					source: P,
					widgetId: n,
					event: "rcv-update",
					rcV: (c = u.rcV) !== null && c !== void 0 ? c : U
				}, "*")
			}
		}
		var m = function(i) {
			var n = i.data;
			if (n.source === P) {
				if (!xr(i)) {
					_("Ignored message from wrong origin: " + i.origin);
					return
				}
				if (!(!n.widgetId || !g.widgetMap.has(n.widgetId))) {
					var c = $(n.widgetId),
						a = g.widgetMap.get(n.widgetId);
					if (!(!c || !a)) switch (n.event) {
						case "init": {
							var p;
							a.widgetInitStartTimeMs = D();
							var x = document.getElementById(c);
							x || v("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3074), a.mode = n.mode, a.mode === F.INVISIBLE && a.params["refresh-expired"] === Q.MANUAL && _("refresh-expired=manual is impossible in invisible mode, consider using '".concat(Q.AUTO, "' or '").concat(Q.NEVER, "'")), a.mode !== F.MANAGED && a.params["refresh-timeout"] !== re.AUTO && _("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), a.params.appearance === q.ALWAYS || a.isExecuting && a.params.appearance === q.EXECUTE ? vt(x, a) : ar(x), x.style.display = "";
							var E = document.querySelector("#".concat(c));
							E || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (p = E.contentWindow) === null || p === void 0 || p.postMessage({
								source: P,
								widgetId: n.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var f = document.getElementById(c);
							f || v("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3074);
							var w = new Map;
							a.displayLanguage = n.displayLanguage, Object.keys(n.translationData).forEach(function(B) {
								w.set(B, n.translationData[B])
							}), _r(f, w);
							break
						}
						case "languageUnsupported": {
							_("Language ".concat(a.params.language, " is not supported, falling back to: ").concat(n.fallback)), a.displayLanguage = n.fallback;
							break
						}
						case "reject": {
							var T = document.getElementById(c);
							if (a.isExecuting = !1, T || v("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3075), n.reason === "outdated_browser") {
								var H;
								(H = a.cbUnsupported) === null || H === void 0 || H.call(a)
							}
							break
						}
						case "food": {
							a.watchcat && n.seq > a.watchcat.lastAckedSeq && (a.watchcat.lastAckedSeq = n.seq);
							break
						}
						case "complete": {
							s(a, U, n.widgetId), a.response = n.token, n.sToken ? e(a, c, n.sToken, n.chlId) : o(a, c, !1);
							break
						}
						case "fail": {
							n.rcV && s(a, n.rcV, n.widgetId), n.cfChlOut && (a.cfChlOut = n.cfChlOut), n.cfChlOutS && (a.cfChlOutS = n.cfChlOutS), n.code && (a.errorCode = n.code), a.isExecuting = !1, a.isInitialized = !0, pt(c);
							var C = a.cbError,
								G = n.code === Oe;
							if (C) {
								var R;
								C(String((R = n.code) !== null && R !== void 0 ? R : Ot)) || (n.code && _("Error: ".concat(n.code)), t(a, c, G))
							} else n.code ? (t(a, c, G), v("Error: ".concat(n.code), 3076)) : t(a, c, !1);
							break
						}
						case "feedbackInit": {
							Kt(c, a);
							break
						}
						case "requestFeedbackData": {
							var Z, ie = document.querySelector("#".concat(c));
							ie || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (Z = ie.contentWindow) === null || Z === void 0 || Z.postMessage({
								source: P,
								widgetId: n.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var ee, oe = document.querySelector("#".concat(c, "-fr"));
							oe || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (ee = oe.contentWindow) === null || ee === void 0 || ee.postMessage({
								source: P,
								widgetId: n.widgetId,
								event: "feedbackData",
								rayId: n.rayId,
								rcV: n.rcV,
								cfChlOut: a.cfChlOut,
								cfChlOutS: a.cfChlOutS,
								errorCode: a.errorCode,
								sitekey: n.sitekey,
								mode: n.mode,
								issuanceUserAgent: n.issuanceUserAgent
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var de = document.querySelector("#".concat(c, "-fr"));
							de || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), $t("".concat(c, "-fr"));
							break
						}
						case "tokenExpired": {
							var pe, Fe = n.token;
							a.isExpired = !0, (pe = a.cbExpired) === null || pe === void 0 || pe.call(a, Fe), a.params["refresh-expired"] === Q.AUTO && !a.isResetting && S(c);
							break
						}
						case "interactiveTimeout": {
							s(a, U, n.widgetId), pt(c);
							var Ee = a.cbTimeout;
							if (Ee ? Ee() : a.params["refresh-timeout"] === re.NEVER && !a.isResetting && _("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), a.params["refresh-timeout"] === re.AUTO && !a.isResetting) {
								var ve = a.cbAfterInteractive;
								ve == null || ve(), S(c)
							}
							break
						}
						case "refreshRequest": {
							s(a, U, n.widgetId), S(c);
							break
						}
						case "reloadRequest": {
							s(a, n.nextRcV, n.widgetId), S(c);
							break
						}
						case "interactiveBegin": {
							var me, X = document.getElementById(c);
							X || v("Cannot layout widget, Element not found (#".concat(c, ")."), 3076), (me = a.cbBeforeInteractive) === null || me === void 0 || me.call(a), a.params.appearance === q.INTERACTION_ONLY && vt(X, a);
							break
						}
						case "interactiveEnd": {
							var ge, ye = document.getElementById(c);
							ye || v("Cannot unlayout widget, Element not found (#".concat(c, ")."), 3077), (ge = a.cbAfterInteractive) === null || ge === void 0 || ge.call(a);
							break
						}
						case "widgetStale": {
							a.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var j;
							a.widgetParamsStartTimeMs = D();
							var Y = document.querySelector("#".concat(c));
							Y || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), a.isResetting = !1;
							var ce = {},
								he = D(),
								L = {
									"w.iW": window.innerWidth,
									"ht.atrs": l(document.body.parentNode),
									pi: {
										xp: Jt(Y).substring(0, Ht),
										pfp: Zt(document, jt, zt),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: er(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href
									}
								},
								te = D() - he;
							(j = Y.contentWindow) === null || j === void 0 || j.postMessage(Ve({
								source: P,
								widgetId: n.widgetId,
								event: "extraParams",
								action: a.action,
								cData: a.cData,
								chlPageData: a.chlPageData,
								rcV: a.rcV,
								ch: "d0ff3ebede6b",
								url: ir(),
								retry: a.params.retry,
								"expiry-interval": a.params["expiry-interval"],
								"retry-interval": a.params["retry-interval"],
								"refresh-expired": a.params["refresh-expired"],
								"refresh-timeout": a.params["refresh-timeout"],
								language: a.params.language,
								execution: a.params.execution,
								appearance: a.params.appearance,
								wPr: L,
								turnstileAgeMs: D() - g.turnstileLoadInitTimeMs,
								widgetAgeMs: D() - a.widgetRenderStartTimeMs,
								upgradeAttempts: g.upgradeAttempts,
								upgradeCount: g.upgradeCount,
								timeRenderMs: a.widgetRenderEndTimeMs - a.widgetRenderStartTimeMs,
								timeToInitMs: a.widgetInitStartTimeMs - a.widgetRenderEndTimeMs,
								timeToParamsMs: a.widgetParamsStartTimeMs - a.widgetInitStartTimeMs,
								tiefTimeMs: te
							}, ce), "*"), d(a, n.widgetId, Y), a.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		g.msgHandler = m, window.addEventListener("message", m);

		function b() {
			var u = "abcdefghijklmnopqrstuvwxyz0123456789",
				i = u.length,
				n;
			do {
				n = "";
				for (var c = 0; c < 5; c++) n += u.charAt(Math.floor(Math.random() * i))
			} while (g.widgetMap.has(n));
			return n
		}

		function h(u) {
			if (typeof u == "string") {
				var i = be(u);
				if (i && g.widgetMap.has(i)) return i;
				try {
					var n = document.querySelector(u);
					return n ? h(n) : null
				} catch (a) {
					return null
				}
			}
			if (M(u, HTMLElement)) {
				var c = u.querySelector("iframe");
				return c ? be(c.id) : null
			}
			return u || g.widgetMap.size === 0 ? null : g.widgetMap.keys().next().value
		}

		function d(u, i, n) {
			for (; u.msgQueue.length;) {
				var c, a = u.msgQueue.pop();
				(c = n.contentWindow) === null || c === void 0 || c.postMessage({
					source: P,
					widgetId: i,
					event: a
				}, "*")
			}
		}

		function y(u, i) {
			if (i) {
				var n = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
					c = [],
					a = !0,
					p = !1,
					x = void 0;
				try {
					for (var E = n[Symbol.iterator](), f; !(a = (f = E.next()).done); a = !0) {
						var w = f.value;
						i[w] && i[w] !== u.params[w] && c.push(w)
					}
				} catch (T) {
					p = !0, x = T
				} finally {
					try {
						!a && E.return != null && E.return()
					} finally {
						if (p) throw x
					}
				}
				c.length !== 0 && v("The parameters ".concat(n.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(c.join(",")), 3618), i.action && ($e(i.action) || v('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), u.action = i.action), i.cData && (Je(i.cData) || v('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), u.cData = i.cData), i["after-interactive-callback"] && (u.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (u.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (u.cbSuccess = i.callback), i["expired-callback"] && (u.cbExpired = i["expired-callback"]), i["timeout-callback"] && (u.cbTimeout = i["timeout-callback"]), i["error-callback"] && (u.cbError = i["error-callback"]), i["unsupported-callback"] && (u.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (u.chlPageData = i.chlPageData)
			}
		}

		function S(u) {
			var i = h(u);
			i || v("Nothing to reset found for provided container", 3329);
			var n = g.widgetMap.get(i);
			if (n) {
				n.isResetting = !0, n.response = void 0, n.mode = void 0, n.msgQueue = [], n.isExpired = !1, n.isExecuting = !1, n.isStale = !1, n.isInitialized = !1, n.watchcat.lastAckedSeq = 0, n.watchcat.seq = 0, n.params.execution === ue.RENDER && (n.msgQueue.push(ne.EXECUTE), n.isExecuted = !0, n.isExecuting = !0);
				var c = $(i),
					a = document.querySelector("#".concat(c));
				(!c || !a) && v("Widget ".concat(i, " to reset was not found."), 3330), n.params.appearance === q.INTERACTION_ONLY && ar(a), n.params.sitekey === null && v("Unexpected Error: Sitekey is null", 3347);
				var p;
				a.src = ut(i, n.params.sitekey, n.params, (p = n.rcV) !== null && p !== void 0 ? p : U, J, "g", it(n)), pt(c), n.retryTimeout && window.clearTimeout(n.retryTimeout)
			} else v("Widget ".concat(i, " to reset was not found."), 3331)
		}

		function W(u) {
			var i, n = h(u);
			if (!n || !g.widgetMap.has(n)) {
				_("Nothing to remove found for the provided container");
				return
			}
			var c = $(n),
				a = ["iframe#".concat(c), "input#".concat(c, "_response"), "input#".concat(c, "_legacy_response"), "input#".concat(c, "_g_response")];
			document.querySelectorAll(a.join(", ")).forEach(function(x) {
				return x.remove()
			});
			var p = (i = g.widgetMap.get(n)) === null || i === void 0 ? void 0 : i.retryTimeout;
			p && window.clearTimeout(p), g.widgetMap.delete(n), dt(g)
		}

		function O(u, i) {
			var n, c, a = D(),
				p;
			if (typeof u == "string") try {
				var x = document.querySelector(u);
				x || v('Unable to find a container for "'.concat(u, '"'), 3585), p = x
			} catch (wr) {
				v('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(u, '"'), 3586)
			} else M(u, HTMLElement) ? p = u : v('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
			var E = Er(p);
			if (E) {
				var f = Object.assign(E, i),
					w = f.action,
					T = f.cData,
					H = f.chlPageData,
					C = f.sitekey,
					G;
				f.theme = (G = f.theme) !== null && G !== void 0 ? G : Ce.AUTO;
				var R;
				f.retry = (R = f.retry) !== null && R !== void 0 ? R : _e.AUTO;
				var Z;
				f.execution = (Z = f.execution) !== null && Z !== void 0 ? Z : ue.RENDER;
				var ie;
				f.appearance = (ie = f.appearance) !== null && ie !== void 0 ? ie : q.ALWAYS;
				var ee;
				f["retry-interval"] = +((ee = f["retry-interval"]) !== null && ee !== void 0 ? ee : Wt);
				var oe;
				f["expiry-interval"] = +((oe = f["expiry-interval"]) !== null && oe !== void 0 ? oe : (kt - Nt) * 1e3);
				var de;
				f.size = (de = f.size) !== null && de !== void 0 ? de : V.NORMAL;
				var pe = f.callback,
					Fe = f["expired-callback"],
					Ee = f["timeout-callback"],
					ve = f["after-interactive-callback"],
					me = f["before-interactive-callback"],
					X = f["error-callback"],
					ge = f["unsupported-callback"];
				typeof C != "string" && v('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof C == "undefined" ? "undefined" : k(C), '"'), 3588), Ct(C) || v('Invalid input for parameter "sitekey", got "'.concat(C, '"'), 3589), Ze(f.size) || v('Invalid type for parameter "size", expected normal|compact, got "'.concat(f.size, '" ').concat(k(f.size)), 3590), Xe(f.theme) || v('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(f.theme, '" ').concat(k(f.theme)), 3591), Ye(f.retry) || v('Invalid type for parameter "retry", expected never|auto, got "'.concat(f.retry, '" ').concat(k(f.retry)), 3592), f.language || (f.language = "auto"), rt(f.language) || (_('Invalid language value: "'.concat(f.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")), f.language = "auto"), nt(f.appearance) || v('Unknown appearance value: "'.concat(f.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), at(f.execution) || v('Unknown execution value: "'.concat(f.execution, ", expected either: 'render' or 'execute'."), 3601), Qe(f["retry-interval"]) || v('Invalid retry-interval value: "'.concat(f["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), Ke(f["expiry-interval"]) || v('Invalid expiry-interval value: "'.concat(f["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
				var ye, j = (ye = f["refresh-expired"]) !== null && ye !== void 0 ? ye : Q.AUTO;
				et(j) ? f["refresh-expired"] = j : v('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(j, '" ').concat(typeof j == "undefined" ? "undefined" : k(j)), 3603);
				var Y, ce = (Y = f["refresh-timeout"]) !== null && Y !== void 0 ? Y : re.AUTO;
				tt(j) ? f["refresh-timeout"] = ce : v('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(ce, '" ').concat(typeof ce == "undefined" ? "undefined" : k(ce)), 3603);
				var he = p.getElementsByTagName("iframe")[0];
				he != null && he.id.startsWith(le) && W(p);
				var L = document.createElement("iframe");
				$e(w) || v('Invalid input for optional parameter "action", got "'.concat(w, '"'), 3604), Je(T) || v('Invalid input for optional parameter "cData", got "'.concat(T, '"'), 3605);
				var te = b(),
					B = $(te);
				if (!(!te || !B)) {
					var _t = [],
						Ue = f.execution === ue.RENDER;
					Ue && _t.push(ne.EXECUTE), g.lastWidgetIdx++;
					var lr = {};
					g.widgetMap.set(te, wt(Ve({
						idx: g.lastWidgetIdx,
						action: w,
						cData: T,
						chlPageData: H,
						cbSuccess: pe,
						cbError: X,
						cbExpired: Fe,
						cbTimeout: Ee,
						cbUnsupported: ge,
						cbAfterInteractive: ve,
						cbBeforeInteractive: me,
						params: f,
						isStale: !1,
						isExpired: !1,
						isExecuting: Ue,
						isResetting: !1,
						isExecuted: Ue,
						isInitialized: !1,
						msgQueue: _t,
						rcV: U,
						watchcat: {
							seq: 0,
							lastAckedSeq: 0,
							missingWidgetWarning: !1
						}
					}, lr), {
						widgetRenderStartTimeMs: a,
						widgetRenderEndTimeMs: 0,
						widgetParamsStartTimeMs: 0,
						widgetInitStartTimeMs: 0
					})), ft(g, J);
					var We = g.widgetMap.get(te);
					We || v("Turnstile Initialization Error ", 3606), L.style.display = "none", L.style.border = "none", L.style.overflow = "hidden", L.setAttribute("src", ut(te, C, f, U, J, "g", it(We))), L.onerror = function() {
						if (X) {
							X == null || X(String(Rt.code));
							return
						}
						v("Could not load challenge from challenges.cloudflare.com.", 161)
					};
					var xt = ["cross-origin-isolated", "fullscreen"],
						je;
					N((je = (c = document.featurePolicy) === null || c === void 0 || (n = c.features) === null || n === void 0 ? void 0 : n.call(c)) !== null && je !== void 0 ? je : [], ot) && xt.push(ot), L.setAttribute("allow", xt.join("; ")), L.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), L.id = B;
					var ze;
					L.tabIndex = (ze = f.tabindex) !== null && ze !== void 0 ? ze : 0, L.title = "Widget containing a Cloudflare security challenge", p.appendChild(L);
					var He, sr = (He = f["response-field"]) !== null && He !== void 0 ? He : !0;
					if (sr) {
						var we = document.createElement("input");
						we.type = "hidden";
						var Be;
						if (we.name = (Be = f["response-field-name"]) !== null && Be !== void 0 ? Be : Ft, we.id = "".concat(B, "_response"), p.appendChild(we), typeof f["response-field-name"] != "string" && br(C)) {
							var Te = document.createElement("input");
							Te.type = "hidden", Te.name = Dt, Te.id = "".concat(B, "_legacy_response"), p.appendChild(Te)
						}
					}
					if (g.isRecaptchaCompatibilityMode) {
						var Se = document.createElement("input");
						Se.type = "hidden", Se.name = Ut, Se.id = "".concat(B, "_g_response"), p.appendChild(Se)
					}
					return We.widgetRenderEndTimeMs = D(), B
				}
			}
		}

		function A() {
			var u, i = -1,
				n = !0,
				c = !1,
				a = void 0;
			try {
				for (var p = g.widgetMap[Symbol.iterator](), x; !(n = (x = p.next()).done); n = !0) {
					var E = Ae(x.value, 2),
						f = E[0],
						w = E[1];
					i < w.idx && (u = f, i = w.idx)
				}
			} catch (T) {
				c = !0, a = T
			} finally {
				try {
					!n && p.return != null && p.return()
				} finally {
					if (c) throw a
				}
			}
			return i === -1 && v("Could not find widget", 43778), u
		}
		return {
			ready: function(i) {
				if (g.scriptWasLoadedAsync && (_("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), v("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof i != "function" && v('turnstile.ready() expected a "function" argument, got "'.concat(typeof i == "undefined" ? "undefined" : k(i), '"'), 3841), i(), typeof i != "function" && v('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), g.isReady) {
					i();
					return
				}
				ht.push(i)
			},
			implicitRender: gt,
			execute: function(i, n) {
				var c = h(i);
				if (!c) {
					n === void 0 && v("Please provide 2 parameters to execute: container and parameters", 43521);
					var a = O(i, n);
					a || v("Failed to render widget", 43522), c = a
				}
				var p = g.widgetMap.get(c);
				if (p) {
					y(p, n);
					var x = $(c);
					if (p.isExecuting) {
						_("Call to execute() on a widget that is already executing (".concat(x, "), consider using reset() before execute()"));
						return
					} else p.isExecuting = !0;
					if (p.response) {
						var E;
						p.isExecuting = !1, _("Call to execute() on a widget that was already executed (".concat(x, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), (E = p.cbSuccess) === null || E === void 0 || E.call(p, p.response, !1);
						return
					}
					p.isExpired && _("Call to execute on a expired-widget (".concat(x, "), consider using reset() before")), p.isStale && (S(x), p.isExecuting = !0), p.msgQueue.push(ne.EXECUTE), p.isExecuted = !0;
					var f = document.querySelector("#".concat(x));
					if (f || (p.isExecuting = !1, v("Widget ".concat(x, " to execute was not found"), 43522)), p.isResetting) return;
					if (p.isInitialized && d(p, c, f), p.isInitialized && p.params.appearance === q.EXECUTE && vt(f, p), p.isExecuting) {
						var w, T = document.querySelector("#".concat(x));
						T || v("Received state for an unknown widget: ".concat(c), 3078), (w = T.contentWindow) === null || w === void 0 || w.postMessage({
							source: P,
							widgetId: c,
							event: "execute"
						}, "*")
					}
				}
			},
			render: O,
			reset: S,
			remove: W,
			getResponse: function(i) {
				var n;
				if (typeof i == "undefined") {
					var c = A();
					if (c) {
						var a, p = g.widgetMap.get(c);
						return p != null && p.isExpired && _("Call to getResponse on a widget that expired, consider refreshing the widget."), (a = g.widgetMap.get(c)) === null || a === void 0 ? void 0 : a.response
					} else v("Could not find a widget", 43794)
				}
				var x = h(i);
				return x || v("Could not find widget for provided container", 43778), (n = g.widgetMap.get(x)) === null || n === void 0 ? void 0 : n.response
			},
			isExpired: function(i) {
				var n;
				if (typeof i == "undefined") {
					var c = A();
					if (c) {
						var a, p;
						return (p = (a = g.widgetMap.get(c)) === null || a === void 0 ? void 0 : a.isExpired) !== null && p !== void 0 ? p : !1
					} else v("Could not find a widget", 43794)
				}
				var x = h(i);
				x || v("Could not find widget for provided container", 43778);
				var E;
				return (E = (n = g.widgetMap.get(x)) === null || n === void 0 ? void 0 : n.isExpired) !== null && E !== void 0 ? E : !1
			}
		}
	}();

	function Er(e) {
		var r = e.getAttribute("data-sitekey"),
			t = {
				sitekey: r
			},
			o = e.getAttribute("data-tabindex");
		o && (t.tabindex = parseInt(o, 10));
		var l = e.getAttribute("data-theme");
		l && (Xe(l) ? t.theme = l : _('Unknown data-theme value: "'.concat(l, '"')));
		var s = e.getAttribute("data-size");
		if (s && (Ze(s) ? t.size = s : _('Unknown data-size value: "'.concat(s, '"'))), 0) var m;
		var b = e.getAttribute("data-action");
		typeof b == "string" && (t.action = b);
		var h = e.getAttribute("data-cdata");
		typeof h == "string" && (t.cData = h);
		var d = e.getAttribute("data-retry");
		d && (Ye(d) ? t.retry = d : _('Invalid data-retry value: "'.concat(d, ", expected either 'never' or 'auto'\"")));
		var y = e.getAttribute("data-retry-interval");
		if (y) {
			var S = parseInt(y, 10);
			Qe(S) ? t["retry-interval"] = S : _('Invalid data-retry-interval value: "'.concat(y, ', expected an integer value > 0 and < 900000"'))
		}
		var W = e.getAttribute("data-expiry-interval");
		if (W) {
			var O = parseInt(W, 10);
			Ke(O) ? t["expiry-interval"] = O : _('Invalid data-expiry-interval value: "'.concat(O, ', expected an integer value > 0 and < 360000"'))
		}
		var A = e.getAttribute("data-refresh-expired");
		A && (et(A) ? t["refresh-expired"] = A : _('Unknown data-refresh-expired value: "'.concat(A, ", expected either: 'never', 'auto' or 'manual'.")));
		var u = e.getAttribute("data-refresh-timeout");
		u && (tt(u) ? t["refresh-timeout"] = u : _('Unknown data-refresh-timeout value: "'.concat(u, ", expected either: 'never', 'auto' or 'manual'.")));
		var i = e.getAttribute("data-language");
		i && (rt(i) ? t.language = i : _('Invalid data-language value: "'.concat(i, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));

		function n(w) {
			var T = e.getAttribute(w);
			return T && window[T] ? window[T] : void 0
		}
		var c = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		c.forEach(function(w) {
			t[w] = n("data-".concat(w))
		});
		var a, p = (a = e.getAttribute("data-response-field")) !== null && a !== void 0 ? a : "true";
		t["response-field"] = p === "true";
		var x = e.getAttribute("data-response-field-name");
		x && (t["response-field-name"] = x);
		var E = e.getAttribute("data-execution");
		E && (at(E) ? t.execution = E : _('Unknown data-execution value: "'.concat(E, ", expected either: 'render' or 'execute'.")));
		var f = e.getAttribute("data-appearance");
		return f && (nt(f) ? t.appearance = f : _('Unknown data-appearance value: "'.concat(f, ", expected either: 'always', 'execute', or 'interaction-only'."))), t
	}

	function or() {
		var e = !0;
		dt(g, e), g.msgHandler && window.removeEventListener("message", g.msgHandler), tr(window.turnstile, g)
	}
	se = !1, I = Qt(), g.scriptWasLoadedAsync = (Me = I == null ? void 0 : I.loadedAsync) !== null && Me !== void 0 ? Me : !1, I != null && I.params && (fe = I.params.get("compat"), (fe == null ? void 0 : fe.toLowerCase()) === "recaptcha" ? window.grecaptcha ? _("grecaptcha is already defined. The compatibility layer will not be enabled") : (_("Compatibility layer enabled"), g.isRecaptchaCompatibilityMode = !0, window.grecaptcha = yt) : fe !== null && _('Unknown value for api.js?compat: "'.concat(fe, '", ignoring')), I.params.forEach(function(e, r) {
		N(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], r) || _('Unknown parameter passed to api.js: "?'.concat(r, '=...", ignoring'))
	}), se = I.params.get("_upgrade") === "true", z = I.params.get("onload"), z && !se && setTimeout(function() {
		typeof window[z] == "function" ? window[z]() : (_("Unable to find onload callback '".concat(z, "' immediately after loading, expected 'function', got '").concat(k(window[z]), "'")), setTimeout(function() {
			typeof window[z] == "function" ? window[z]() : _("Unable to find onload callback '".concat(z, "' after 1 second, expected 'function', got '").concat(k(window[z]), "'"))
		}, 1e3))
	}, 0)), mt = "turnstile" in window, mt && !se ? _("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (mt && se && (rr(window.turnstile, g), ft(g, J), (I == null || (Pe = I.params) === null || Pe === void 0 ? void 0 : Pe.get("render")) !== "explicit" && setTimeout(gt, 0)), window.turnstile = yt, se || ((I == null || (De = I.params) === null || De === void 0 ? void 0 : De.get("render")) !== "explicit" && ht.push(gt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(nr, 0) : window.addEventListener("DOMContentLoaded", nr))), cr = 24 * 60 * 60 * 1e3, window.setTimeout(or, cr), J && (window.turnstile._testUpgrade = or);
	var se, I, Me, fe, z, mt, Pe, De, cr;
})();