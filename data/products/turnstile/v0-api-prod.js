"use strict";
(function() {
	function gt(e, r, t, i, u, s, m) {
		try {
			var y = e[s](m),
				b = y.value
		} catch (d) {
			t(d);
			return
		}
		y.done ? r(b) : Promise.resolve(b).then(i, u)
	}

	function yt(e) {
		return function() {
			var r = this,
				t = arguments;
			return new Promise(function(i, u) {
				var s = e.apply(r, t);

				function m(b) {
					gt(s, i, u, m, y, "next", b)
				}

				function y(b) {
					gt(s, i, u, m, y, "throw", b)
				}
				m(void 0)
			})
		}
	}

	function C(e, r) {
		return r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : C(e, r)
	}

	function Ee(e, r, t) {
		return r in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e
	}

	function ze(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = arguments[r] != null ? arguments[r] : {},
				i = Object.keys(t);
			typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(u) {
				return Object.getOwnPropertyDescriptor(t, u).enumerable
			}))), i.forEach(function(u) {
				Ee(e, u, t[u])
			})
		}
		return e
	}

	function ir(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var i = Object.getOwnPropertySymbols(e);
			r && (i = i.filter(function(u) {
				return Object.getOwnPropertyDescriptor(e, u).enumerable
			})), t.push.apply(t, i)
		}
		return t
	}

	function _t(e, r) {
		return r = r != null ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ir(Object(r)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
		}), e
	}

	function ht(e) {
		if (Array.isArray(e)) return e
	}

	function xt(e, r) {
		var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (t != null) {
			var i = [],
				u = !0,
				s = !1,
				m, y;
			try {
				for (t = t.call(e); !(u = (m = t.next()).done) && (i.push(m.value), !(r && i.length === r)); u = !0);
			} catch (b) {
				s = !0, y = b
			} finally {
				try {
					!u && t.return != null && t.return()
				} finally {
					if (s) throw y
				}
			}
			return i
		}
	}

	function bt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function He(e, r) {
		(r == null || r > e.length) && (r = e.length);
		for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
		return i
	}

	function Et(e, r) {
		if (e) {
			if (typeof e == "string") return He(e, r);
			var t = Object.prototype.toString.call(e).slice(8, -1);
			if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(t);
			if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return He(e, r)
		}
	}

	function we(e, r) {
		return ht(e) || xt(e, r) || Et(e, r) || bt()
	}

	function k(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Te(e, r) {
		var t = {
				label: 0,
				sent: function() {
					if (s[0] & 1) throw s[1];
					return s[1]
				},
				trys: [],
				ops: []
			},
			i, u, s, m;
		return m = {
			next: y(0),
			throw: y(1),
			return: y(2)
		}, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
			return this
		}), m;

		function y(d) {
			return function(g) {
				return b([d, g])
			}
		}

		function b(d) {
			if (i) throw new TypeError("Generator is already executing.");
			for (; m && (m = 0, d[0] && (t = 0)), t;) try {
				if (i = 1, u && (s = d[0] & 2 ? u.return : d[0] ? u.throw || ((s = u.return) && s.call(u), 0) : u.next) && !(s = s.call(u, d[1])).done) return s;
				switch (u = 0, s && (d = [d[0] & 2, s.value]), d[0]) {
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
						t.label++, u = d[1], d = [0];
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
			} catch (g) {
				d = [6, g], u = 0
			} finally {
				i = s = 0
			}
			if (d[0] & 5) throw d[1];
			return {
				value: d[0] ? d[1] : void 0,
				done: !0
			}
		}
	}
	var wt = 300020;
	var Se = 300030;

	function N(e, r) {
		return e.indexOf(r) !== -1
	}
	var F;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(F || (F = {}));
	var j;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(j || (j = {}));
	var Ie;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Ie || (Ie = {}));
	var fe;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(fe || (fe = {}));
	var G;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(G || (G = {}));
	var z;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(z || (z = {}));
	var ae;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(ae || (ae = {}));
	var Z;
	(function(e) {
		e.EXECUTE = "execute"
	})(Z || (Z = {}));
	var Be;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(Be || (Be = {}));

	function Ve(e) {
		return N(["auto", "dark", "light"], e)
	}

	function qe(e) {
		return N(["auto", "never"], e)
	}

	function Ge(e) {
		return e > 0 && e < 9e5
	}

	function Xe(e) {
		return e > 0 && e < 36e4
	}
	var or = /^[0-9A-Za-z_-]{3,100}$/;

	function Tt(e) {
		return or.test(e)
	}
	var cr = /^[a-z0-9_-]{0,32}$/i;

	function Ye(e) {
		return e === void 0 ? !0 : typeof e == "string" && cr.test(e)
	}
	var ur = /^[a-z0-9_\-=]{0,255}$/i;

	function Qe(e) {
		return e === void 0 ? !0 : typeof e == "string" && ur.test(e)
	}

	function Ke(e) {
		return N(["normal", "compact", "invisible"], e)
	}

	function $e(e) {
		return N(["auto", "manual", "never"], e)
	}
	var lr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Je(e) {
		return e === "auto" || lr.test(e)
	}

	function Ze(e) {
		return N(["always", "execute", "interaction-only"], e)
	}

	function et(e) {
		return N(["render", "execute"], e)
	}
	var U = "0/0";
	var St = 300,
		It = 10;
	var ie = "cf-chl-widget-",
		M = "cloudflare-challenge",
		At = ".cf-turnstile",
		Ot = ".cf-challenge",
		Rt = ".g-recaptcha",
		Ct = "cf_challenge_response",
		kt = "cf-turnstile-response",
		Nt = "g-recaptcha-response",
		Lt = 8e3,
		tt = "private-token",
		Mt = 3,
		Pt = 500,
		Dt = 500;

	function Ae(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Ft(e, r) {
		if (!C(e, r)) throw new TypeError("Cannot call a class as a function")
	}

	function X(e, r) {
		return X = Object.setPrototypeOf || function(i, u) {
			return i.__proto__ = u, i
		}, X(e, r)
	}

	function Ut(e, r) {
		if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(r && r.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), r && X(e, r)
	}

	function Oe() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function de(e, r, t) {
		return Oe() ? de = Reflect.construct : de = function(u, s, m) {
			var y = [null];
			y.push.apply(y, s);
			var b = Function.bind.apply(u, y),
				d = new b;
			return m && X(d, m.prototype), d
		}, de.apply(null, arguments)
	}

	function ee(e) {
		return ee = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		}, ee(e)
	}

	function Wt(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Re(e) {
		var r = typeof Map == "function" ? new Map : void 0;
		return Re = function(i) {
			if (i === null || !Wt(i)) return i;
			if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof r != "undefined") {
				if (r.has(i)) return r.get(i);
				r.set(i, u)
			}

			function u() {
				return de(i, arguments, ee(this).constructor)
			}
			return u.prototype = Object.create(i.prototype, {
				constructor: {
					value: u,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), X(u, i)
		}, Re(e)
	}

	function jt(e, r) {
		return r && (k(r) === "object" || typeof r == "function") ? r : Ae(e)
	}

	function zt(e) {
		var r = Oe();
		return function() {
			var i = ee(e),
				u;
			if (r) {
				var s = ee(this).constructor;
				u = Reflect.construct(i, arguments, s)
			} else u = i.apply(this, arguments);
			return jt(this, u)
		}
	}
	var Ht = function(e) {
		"use strict";
		Ut(t, e);
		var r = zt(t);

		function t(i, u) {
			Ft(this, t);
			var s;
			return s = r.call(this, i), Ee(Ae(s), "code", void 0), s.name = "TurnstileError", s.code = u, s
		}
		return t
	}(Re(Error));

	function v(e, r) {
		var t = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Ht(t, r)
	}

	function x(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function pe(e) {
		return e.startsWith(ie) ? e.substring(ie.length) : null
	}

	function Y(e) {
		return "".concat(ie).concat(e)
	}

	function rt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (C(r, HTMLScriptElement) && e.test(r.src)) return r;
		for (var t = document.querySelectorAll("script"), i = 0, u; u = t[i]; i++)
			if (C(u, HTMLScriptElement) && e.test(u.src)) return u
	}

	function Bt() {
		var e = rt();
		e || v("Could not find Turnstile script tag, some features may not be available", 43777);
		var r = {
			loadedAsync: !1,
			params: new URLSearchParams
		};
		(e.async || e.defer) && (r.loadedAsync = !0);
		var t = e.src,
			i = t.split("?");
		return i.length > 1 && (r.params = new URLSearchParams(i[1])), r
	}
	var sr = 900,
		fr = 3;

	function dr(e, r) {
		e.watchCatSeq++;
		var t = !0,
			i = !1,
			u = void 0;
		try {
			for (var s = e.widgetMap[Symbol.iterator](), m; !(t = (m = s.next()).done); t = !0) {
				var y = we(m.value, 2),
					b = y[0],
					d = y[1],
					g;
				d.watchcat.seq = e.watchCatSeq, d.watchcat.lastAckedSeq === 0 && (d.watchcat.lastAckedSeq = e.watchCatSeq);
				var R = Y(b);
				if (!R) {
					d.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(R, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				var P = document.querySelector("#".concat(R));
				if (!P) {
					d.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(R, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				if ((d.isExecuting || !d.isInitialized || d.isInitialized && !d.isStale && !d.isExecuted) && d.watchcat.lastAckedSeq !== 0 && d.watchcat.lastAckedSeq < d.watchcat.seq - 1 - fr) {
					var A;
					d.watchcat.lastAckedSeq = 0, d.watchcat.seq = 0, d.isExecuting = !1, console.log("Turnstile Widget seem to have crashed: ", b);
					var l;
					if ((A = e.msgHandler) === null || A === void 0 || A.call(e, {
							data: {
								source: M,
								widgetId: b,
								code: Se,
								event: "fail",
								rcV: (l = d.rcV) !== null && l !== void 0 ? l : U
							}
						}), r) {
						var o;
						window.postMessage({
							source: M,
							widgetId: b,
							event: "rcv-update",
							rcV: (o = d.rcV) !== null && o !== void 0 ? o : U
						}, "*")
					}
					continue
				}(g = P.contentWindow) === null || g === void 0 || g.postMessage({
					source: M,
					widgetId: b,
					seq: e.watchCatSeq,
					event: "meow"
				}, "*")
			}
		} catch (n) {
			i = !0, u = n
		} finally {
			try {
				!t && s.return != null && s.return()
			} finally {
				if (i) throw u
			}
		}
	}

	function nt(e, r) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			dr(e, r)
		}, sr))
	}

	function at(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || r) && clearInterval(e.watchCatInterval)
	}

	function it(e) {
		var r = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && r.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && r.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), r.size !== 0) return r.toString()
	}

	function ot(e, r) {
		var t = "https://challenges.cloudflare.com";
		if (r) {
			var i;
			t = (i = e["base-url"]) !== null && i !== void 0 ? i : t
		}
		return t
	}

	function ct(e, r, t, i, u, s, m) {
		var y = ot(t, u),
			b = s ? "h/".concat(s, "/") : "",
			d = m ? "?".concat(m) : "";
		return "".concat(y, "/cdn-cgi/challenge-platform/").concat(b, "turnstile/if/ov2/av0/rcv").concat(i, "/").concat(e, "/").concat(r, "/").concat(t.theme, "/").concat(t.size).concat(d)
	}

	function Vt(e, r) {
		var t;
		r.upgradeAttempts++;
		var i = rt();
		if (!(!i || !i.parentNode)) {
			var u = i == null ? void 0 : i.nonce;
			e._pState = r;
			var s = new URL(i.src),
				m = document.createElement("script");
			s.searchParams.set("_upgrade", "true"), s.searchParams.set("_cb", String(Date.now())), m.async = !0, u && (m.nonce = u), m.setAttribute("crossorigin", "anonymous"), m.src = s.toString(), i == null || (t = i.parentNode) === null || t === void 0 || t.replaceChild(m, i)
		}
	}

	function qt(e, r) {
		var t = e._pState;
		return t ? (r.isReady = t.isReady, r.isRecaptchaCompatibilityMode = t.isRecaptchaCompatibilityMode, r.lastWidgetIdx = t.lastWidgetIdx, r.scriptWasLoadedAsync = t.scriptWasLoadedAsync, r.upgradeAttempts = t.upgradeAttempts, r.upgradeCount = t.upgradeCount + 1, r.watchCatInterval = null, r.watchCatSeq = t.watchCatSeq, r.widgetMap = t.widgetMap, !0) : !1
	}
	var ut = function(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > r ? e.substring(0, r) : e
	};

	function Gt(e) {
		var r = function(t, i) {
			if (!t || t.tagName === "BODY") return i;
			for (var u = 1, s = t.previousElementSibling; s;) s.tagName === t.tagName && u++, s = s.previousElementSibling;
			var m = ut(t.tagName.toLowerCase()),
				y = "".concat(m, "[").concat(u, "]");
			return r(t.parentNode, "/".concat(y).concat(i))
		};
		return r(e, "")
	}

	function Xt(e, r, t) {
		for (var i = "", u = 0, s = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(R) {
					return u > r || i.length > t ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), m;
			(m = s.nextNode()) !== null && i.length < t;) {
			if (m.nodeType === Node.ELEMENT_NODE) {
				var y = m;
				i += "".concat(ut(y.tagName.toLowerCase()));
				for (var b = 0; b < y.attributes.length; b++) {
					var d = y.attributes[b];
					i += "_".concat(ut(d.name, 2))
				}
				i += ">"
			} else m.nodeType === Node.TEXT_NODE && (i += "-t");
			var g = m.parentNode;
			for (u = 0; g !== e && g !== null;) u++, g = g.parentNode
		}
		return i.substring(0, t)
	}

	function Yt(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : k(e)));
		for (var r = 5381, t = 0; t < e.length; t++) {
			var i = e.charCodeAt(t);
			r = r * 33 ^ i
		}
		return r >>> 0
	}

	function Qt(e, r) {
		var t, i, u, s = ot(r.params, te),
			m = "h/".concat("b", "/"),
			y = "".concat(s, "/cdn-cgi/challenge-platform/").concat(m, "feedback-reports/").concat(pe(e), "/").concat(r.displayLanguage, "/"),
			b = document.getElementById(e);
		b || v("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
		var d = document.createElement("div");
		d.style.position = "fixed", d.style.zIndex = "21474836419";
		var g = document.createElement("div");
		g.className = "cf-turnstile-feedback", g.id = "cf-fr-id", g.style.borderColor = "#000000", g.style.width = "450px";
		var R = ["ar-eg", "bg-bg", "da-dk", "de-de", "el-gr", "hr-hr", "hu-hu", "ja-jp", "ms-my", "id-id", "ru-ru", "sk-sk", "sl-si", "sr-ba", "uk-ua"],
			P = ["es-es", "cs-cz", "fa-ir", "fr-fr", "it-it", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr"],
			A, l;
		N(R, (A = (t = r.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && A !== void 0 ? A : "nonexistent") ? g.style.height = "520px" : N(P, (l = (i = r.displayLanguage) === null || i === void 0 ? void 0 : i.toLowerCase()) !== null && l !== void 0 ? l : "nonexistent") ? g.style.height = "480px" : g.style.height = "460px", g.style.position = "absolute", g.style.zIndex = "21474836420", g.style.borderWidth = "1px", g.style.borderColor = "#000", g.style.borderStyle = "solid", g.style.backgroundColor = "#ffffff", g.style.borderRadius = "10px", g.style.left = "-122px", g.style.top = "-91px", g.style.overflow = "hidden";
		var o = document.createElement("iframe");
		o.id = e + "-fr", o.setAttribute("src", y), o.setAttribute("allow", "cross-origin-isolated; fullscreen"), o.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), o.setAttribute("scrolling", "no"), o.style.borderWidth = "0px", o.style.width = "100%", o.style.height = "100%", o.style.overflow = "hidden";
		var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		n.style.position = "absolute", n.style.width = "26px", n.style.height = "26px", n.style.zIndex = "21474836421", n.style.cursor = "pointer", r.displayRTL ? n.style.left = "6px" : n.style.right = "2px", n.style.top = "5px", n.setAttribute("width", "26"), n.setAttribute("height", "26"), n.addEventListener("click", function() {
			var _;
			(_ = d.parentNode) === null || _ === void 0 || _.removeChild(d)
		});
		var c = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		c.setAttribute("ry", "12"), c.setAttribute("rx", "12"), c.setAttribute("cy", "12"), c.setAttribute("cx", "12"), c.setAttribute("fill", "#aaaaaa"), c.setAttribute("stroke-width", "0"), n.appendChild(c);
		var a = document.createElementNS("http://www.w3.org/2000/svg", "line");
		a.setAttribute("stroke-width", "3"), a.setAttribute("stroke", "#fff"), a.setAttribute("fill", "none"), a.setAttribute("x1", "6"), a.setAttribute("x2", "18"), a.setAttribute("y1", "18"), a.setAttribute("y2", "5"), n.appendChild(a);
		var p = document.createElementNS("http://www.w3.org/2000/svg", "line");
		p.setAttribute("stroke-width", "3"), p.setAttribute("stroke", "#fff"), p.setAttribute("fill", "none"), p.setAttribute("x1", "6"), p.setAttribute("x2", "18"), p.setAttribute("y1", "5"), p.setAttribute("y2", "18"), n.appendChild(p), g.appendChild(o), g.appendChild(n), d.appendChild(g), (u = b.parentNode) === null || u === void 0 || u.appendChild(d)
	}

	function Kt(e) {
		var r, t, i;
		(i = document.getElementById(e)) === null || i === void 0 || (t = i.parentElement) === null || t === void 0 || (r = t.parentElement) === null || r === void 0 || r.remove()
	}

	function H() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}
	var te = !1,
		h = {
			turnstileLoadInitTimeMs: H(),
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

	function lt(e) {
		rr(e, "")
	}

	function dt() {
		var e = [At, Ot];
		h.isRecaptchaCompatibilityMode && e.push(Rt), document.querySelectorAll(e.join(", ")).forEach(function(r) {
			return pt.render(r)
		})
	}
	var vt = [];

	function $t() {
		h.isReady = !0;
		var e = !0,
			r = !1,
			t = void 0;
		try {
			for (var i = vt[Symbol.iterator](), u; !(e = (u = i.next()).done); e = !0) {
				var s = u.value;
				s()
			}
		} catch (m) {
			r = !0, t = m
		} finally {
			try {
				!e && i.return != null && i.return()
			} finally {
				if (r) throw t
			}
		}
	}

	function rr(e, r) {
		var t = document.getElementById("".concat(e, "_response"));
		t !== null && C(t, HTMLInputElement) && (t.value = r);
		var i = document.getElementById("".concat(e, "_legacy_response"));
		if (i !== null && C(i, HTMLInputElement) && (i.value = r), h.isRecaptchaCompatibilityMode) {
			var u = document.getElementById("".concat(e, "_g_response"));
			u !== null && C(u, HTMLInputElement) && (u.value = r)
		}
	}

	function st(e, r) {
		var t = r.params,
			i = t.size,
			u = i === void 0 ? "normal" : i,
			s = r.mode;
		switch (s) {
			case F.NON_INTERACTIVE:
			case F.MANAGED:
				switch (u) {
					case j.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case j.INVISIBLE:
						v('Invalid value for parameter "size", expected "'.concat(j.COMPACT, '" or "').concat(j.NORMAL, '", got "').concat(u, '"'), 2817);
					case j.NORMAL:
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

	function Jt(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function pr(e, r) {
		var t = r.get("turnstile_iframe_alt");
		t && (e.title = t)
	}

	function vr(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function mr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Zt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var pt = function() {
		function e(l, o, n, c) {
			return r.apply(this, arguments)
		}

		function r() {
			return r = yt(function(l, o, n, c) {
				var a, p, _, E, f, w, S, B, O, V;
				return Te(this, function(I) {
					switch (I.label) {
						case 0:
							if (a = l.params.sitekey, p = Zt(), !p) return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), i(l, o, !1), [2];
							_ = "h/".concat("b", "/"), E = new URL(p), f = "https", w = "", S = "".concat(f, "://").concat(E.host, "/cdn-cgi/challenge-platform/").concat(_, "rc/").concat(c).concat(w), I.label = 1;
						case 1:
							return I.trys.push([1, 6, , 7]), [4, fetch(S, {
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
							return B = I.sent(), B.status === 200 ? [3, 3] : (x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), i(l, o, !1), [3, 5]);
						case 3:
							return [4, B.json()];
						case 4:
							if (O = I.sent(), "status" in O && O.status === "redeemed") return i(l, o, !0), [2];
							I.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return V = I.sent(), x("Error contacting Turnstile, aborting clearance remdeption."), i(l, o, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), r.apply(this, arguments)
		}

		function t(l, o, n) {
			if (l.params.retry === fe.AUTO || n) {
				l.isExecuted && (l.msgQueue.push(Z.EXECUTE), l.isExecuted = !0, l.isExecuting = !0);
				var c, a = n ? 0 : 1e3 * 2 + ((c = l.params["retry-interval"]) !== null && c !== void 0 ? c : 0);
				l.retryTimeout = window.setTimeout(function() {
					g(o)
				}, a)
			}
		}

		function i(l, o, n) {
			l.response === void 0 && v("[Internal Error] Widget was completed but no response was given", 1362), l.isExecuting = !1, rr(o, l.response);
			var c = l.cbSuccess;
			c && c(l.response, n)
		}

		function u(l) {
			if (!l) return [];
			for (var o = l.attributes, n = o.length, c = new Array(n), a = 0; a < n; a++) c[a] = o[a].name;
			return c
		}
		var s = function(o) {
			var n = o.data;
			if (n.source === M) {
				if (!vr(o)) {
					x("Ignored message from wrong origin: " + o.origin);
					return
				}
				if (!(!n.widgetId || !h.widgetMap.has(n.widgetId))) {
					var c = Y(n.widgetId),
						a = h.widgetMap.get(n.widgetId);
					if (!(!c || !a)) switch (n.event) {
						case "init": {
							var p;
							a.widgetInitStartTimeMs = H();
							var _ = document.getElementById(c);
							_ || v("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3074), a.mode = n.mode, a.mode === F.INVISIBLE && a.params["refresh-expired"] === G.MANUAL && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(G.AUTO, "' or '").concat(G.NEVER, "'")), a.params.appearance === z.ALWAYS || a.isExecuting && a.params.appearance === z.EXECUTE ? st(_, a) : Jt(_), _.style.display = "";
							var E = document.querySelector("#".concat(c));
							E || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (p = E.contentWindow) === null || p === void 0 || p.postMessage({
								source: M,
								widgetId: n.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var f = document.getElementById(c);
							f || v("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3074);
							var w = new Map;
							a.displayLanguage = n.displayLanguage, Object.keys(n.translationData).forEach(function(se) {
								w.set(se, n.translationData[se])
							}), pr(f, w);
							break
						}
						case "languageUnsupported": {
							x("Language ".concat(a.params.language, " is not supported, falling back to: ").concat(n.fallback)), a.displayLanguage = n.fallback;
							break
						}
						case "reject": {
							var S = document.getElementById(c);
							if (a.isExecuting = !1, S || v("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3075), n.reason === "outdated_browser") {
								var B = a.cbUnsupported;
								B && B()
							}
							break
						}
						case "food": {
							a.watchcat && n.seq > a.watchcat.lastAckedSeq && (a.watchcat.lastAckedSeq = n.seq);
							break
						}
						case "complete": {
							a.rcV = U, a.response = n.token, n.sToken ? e(a, c, n.sToken, n.chlId) : i(a, c, !1);
							break
						}
						case "fail": {
							n.rcV && (a.rcV = n.rcV), n.cfChlOut && (a.cfChlOut = n.cfChlOut), n.cfChlOutS && (a.cfChlOutS = n.cfChlOutS), n.code && (a.errorCode = n.code), a.isExecuting = !1, a.isInitialized = !0, lt(c);
							var O = a.cbError,
								V = n.code === Se;
							if (O) {
								var I;
								O(String((I = n.code) !== null && I !== void 0 ? I : wt)) || (n.code && x("Error: ".concat(n.code)), t(a, c, V))
							} else n.code ? (t(a, c, V), v("Error: ".concat(n.code), 3076)) : t(a, c, !1);
							break
						}
						case "feedbackInit": {
							Qt(c, a);
							break
						}
						case "requestFeedbackData": {
							var Q, re = document.querySelector("#".concat(c));
							re || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (Q = re.contentWindow) === null || Q === void 0 || Q.postMessage({
								source: M,
								widgetId: n.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var K, ne = document.querySelector("#".concat(c, "-fr"));
							ne || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (K = ne.contentWindow) === null || K === void 0 || K.postMessage({
								source: M,
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
							var ue = document.querySelector("#".concat(c, "-fr"));
							ue || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), Kt("".concat(c, "-fr"));
							break
						}
						case "tokenExpired": {
							var Le = n.token;
							a.isExpired = !0;
							var ve = a.cbExpired;
							ve && ve(Le), a.params["refresh-expired"] === G.AUTO && !a.isResetting && g(c);
							break
						}
						case "interactiveTimeout": {
							a.rcV = U, lt(c);
							var me = a.cbTimeout;
							me ? me() : x("The widget encountered an interactive timeout. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
							break
						}
						case "refreshRequest": {
							a.rcV = U, g(c);
							break
						}
						case "interactiveBegin": {
							var ge = document.getElementById(c);
							ge || v("Cannot layout widget, Element not found (#".concat(c, ")."), 3076);
							var ye = a.cbBeforeInteractive;
							ye && ye(), a.params.appearance === z.INTERACTION_ONLY && st(ge, a);
							break
						}
						case "interactiveEnd": {
							var Me = document.getElementById(c);
							Me || v("Cannot unlayout widget, Element not found (#".concat(c, ")."), 3077);
							var _e = a.cbAfterInteractive;
							_e && _e();
							break
						}
						case "widgetStale": {
							a.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var $;
							a.widgetParamsStartTimeMs = H();
							var D = document.querySelector("#".concat(c));
							D || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), a.isResetting = !1;
							var le = {},
								L = H(),
								J = {
									"w.iW": window.innerWidth,
									"ht.atrs": u(document.body.parentNode),
									pi: {
										xp: Gt(D).substring(0, Dt),
										pfp: Xt(document, Mt, Pt),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: Yt(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href
									}
								},
								q = H() - L;
							($ = D.contentWindow) === null || $ === void 0 || $.postMessage(ze({
								source: M,
								widgetId: n.widgetId,
								event: "extraParams",
								action: a.action,
								cData: a.cData,
								chlPageData: a.chlPageData,
								rcV: a.rcV,
								ch: "bcc5fb0a8815",
								url: Zt(),
								retry: a.params.retry,
								"expiry-interval": a.params["expiry-interval"],
								"retry-interval": a.params["retry-interval"],
								"refresh-expired": a.params["refresh-expired"],
								language: a.params.language,
								execution: a.params.execution,
								appearance: a.params.appearance,
								wPr: J,
								turnstileAgeMs: H() - h.turnstileLoadInitTimeMs,
								widgetAgeMs: H() - a.widgetRenderStartTimeMs,
								timeRenderMs: a.widgetRenderEndTimeMs - a.widgetRenderStartTimeMs,
								timeToInitMs: a.widgetInitStartTimeMs - a.widgetRenderEndTimeMs,
								timeToParamsMs: a.widgetParamsStartTimeMs - a.widgetInitStartTimeMs,
								tiefTimeMs: q
							}, le), "*"), b(a, n.widgetId, D), a.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		h.msgHandler = s, window.addEventListener("message", s);

		function m() {
			var l = "abcdefghijklmnopqrstuvwxyz0123456789",
				o = l.length,
				n;
			do {
				n = "";
				for (var c = 0; c < 5; c++) n += l.charAt(Math.floor(Math.random() * o))
			} while (h.widgetMap.has(n));
			return n
		}

		function y(l) {
			if (typeof l == "string") {
				var o = pe(l);
				if (o && h.widgetMap.has(o)) return o;
				try {
					var n = document.querySelector(l);
					return n ? y(n) : null
				} catch (a) {
					return null
				}
			}
			if (C(l, HTMLElement)) {
				var c = l.querySelector("iframe");
				return c ? pe(c.id) : null
			}
			return l || h.widgetMap.size === 0 ? null : h.widgetMap.keys().next().value
		}

		function b(l, o, n) {
			for (; l.msgQueue.length;) {
				var c, a = l.msgQueue.pop();
				(c = n.contentWindow) === null || c === void 0 || c.postMessage({
					source: M,
					widgetId: o,
					event: a
				}, "*")
			}
		}

		function d(l, o) {
			if (o) {
				var n = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
					c = [],
					a = !0,
					p = !1,
					_ = void 0;
				try {
					for (var E = n[Symbol.iterator](), f; !(a = (f = E.next()).done); a = !0) {
						var w = f.value;
						o[w] && o[w] !== l.params[w] && c.push(w)
					}
				} catch (S) {
					p = !0, _ = S
				} finally {
					try {
						!a && E.return != null && E.return()
					} finally {
						if (p) throw _
					}
				}
				c.length !== 0 && v("The parameters ".concat(n.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(c.join(",")), 3618), o.action && (Ye(o.action) || v('Invalid input for optional parameter "action", got "'.concat(o.action, '"'), 3604), l.action = o.action), o.cData && (Qe(o.cData) || v('Invalid input for optional parameter "cData", got "'.concat(o.cData, '"'), 3605), l.cData = o.cData), o["after-interactive-callback"] && (l.cbAfterInteractive = o["after-interactive-callback"]), o["before-interactive-callback"] && (l.cbBeforeInteractive = o["before-interactive-callback"]), o.callback && (l.cbSuccess = o.callback), o["expired-callback"] && (l.cbExpired = o["expired-callback"]), o["timeout-callback"] && (l.cbTimeout = o["timeout-callback"]), o["error-callback"] && (l.cbError = o["error-callback"]), o["unsupported-callback"] && (l.cbUnsupported = o["unsupported-callback"]), o.chlPageData && (l.chlPageData = o.chlPageData)
			}
		}

		function g(l) {
			var o = y(l);
			o || v("Nothing to reset found for provided container", 3329);
			var n = h.widgetMap.get(o);
			if (n) {
				n.isResetting = !0, n.response = void 0, n.mode = void 0, n.msgQueue = [], n.isExpired = !1, n.isExecuting = !1, n.isStale = !1, n.isInitialized = !1, n.watchcat.lastAckedSeq = 0, n.watchcat.seq = 0, n.params.execution === ae.RENDER && (n.msgQueue.push(Z.EXECUTE), n.isExecuted = !0, n.isExecuting = !0);
				var c = Y(o),
					a = document.querySelector("#".concat(c));
				(!c || !a) && v("Widget ".concat(o, " to reset was not found."), 3330), n.params.appearance === z.INTERACTION_ONLY && Jt(a), n.params.sitekey === null && v("Unexpected Error: Sitekey is null", 3347);
				var p;
				a.src = ct(o, n.params.sitekey, n.params, (p = n.rcV) !== null && p !== void 0 ? p : U, te, "b", it(n)), lt(c), n.retryTimeout && window.clearTimeout(n.retryTimeout)
			} else v("Widget ".concat(o, " to reset was not found."), 3331)
		}

		function R(l) {
			var o, n = y(l);
			if (!n || !h.widgetMap.has(n)) {
				x("Nothing to remove found for the provided container");
				return
			}
			var c = Y(n),
				a = ["iframe#".concat(c), "input#".concat(c, "_response"), "input#".concat(c, "_legacy_response"), "input#".concat(c, "_g_response")];
			document.querySelectorAll(a.join(", ")).forEach(function(_) {
				return _.remove()
			});
			var p = (o = h.widgetMap.get(n)) === null || o === void 0 ? void 0 : o.retryTimeout;
			p && window.clearTimeout(p), h.widgetMap.delete(n), at(h)
		}

		function P(l, o) {
			var n, c, a = H(),
				p;
			if (typeof l == "string") try {
				var _ = document.querySelector(l);
				_ || v('Unable to find a container for "'.concat(l, '"'), 3585), p = _
			} catch (yr) {
				v('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(l, '"'), 3586)
			} else C(l, HTMLElement) ? p = l : v('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
			var E = gr(p);
			if (E) {
				var f = Object.assign(E, o),
					w = f.action,
					S = f.cData,
					B = f.chlPageData,
					O = f.sitekey,
					V;
				f.theme = (V = f.theme) !== null && V !== void 0 ? V : Ie.AUTO;
				var I;
				f.retry = (I = f.retry) !== null && I !== void 0 ? I : fe.AUTO;
				var Q;
				f.execution = (Q = f.execution) !== null && Q !== void 0 ? Q : ae.RENDER;
				var re;
				f.appearance = (re = f.appearance) !== null && re !== void 0 ? re : z.ALWAYS;
				var K;
				f["retry-interval"] = +((K = f["retry-interval"]) !== null && K !== void 0 ? K : Lt);
				var ne;
				f["expiry-interval"] = +((ne = f["expiry-interval"]) !== null && ne !== void 0 ? ne : (St - It) * 1e3);
				var ue;
				f.size = (ue = f.size) !== null && ue !== void 0 ? ue : j.NORMAL;
				var Le = f.callback,
					ve = f["expired-callback"],
					me = f["timeout-callback"],
					ge = f["after-interactive-callback"],
					ye = f["before-interactive-callback"],
					Me = f["error-callback"],
					_e = f["unsupported-callback"];
				typeof O != "string" && v('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof O == "undefined" ? "undefined" : k(O), '"'), 3588), Tt(O) || v('Invalid input for parameter "sitekey", got "'.concat(O, '"'), 3589), Ke(f.size) || v('Invalid type for parameter "size", expected normal|compact, got "'.concat(f.size, '" ').concat(k(f.size)), 3590), Ve(f.theme) || v('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(f.theme, '" ').concat(k(f.theme)), 3591), qe(f.retry) || v('Invalid type for parameter "retry", expected never|auto, got "'.concat(f.retry, '" ').concat(k(f.retry)), 3592), f.language || (f.language = "auto"), Je(f.language) || (x('Invalid language value: "'.concat(f.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")), f.language = "auto"), Ze(f.appearance) || v('Unknown appearance value: "'.concat(f.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), et(f.execution) || v('Unknown execution value: "'.concat(f.execution, ", expected either: 'render' or 'execute'."), 3601), Ge(f["retry-interval"]) || v('Invalid retry-interval value: "'.concat(f["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), Xe(f["expiry-interval"]) || v('Invalid expiry-interval value: "'.concat(f["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
				var $, D = ($ = f["refresh-expired"]) !== null && $ !== void 0 ? $ : G.AUTO;
				$e(D) ? f["refresh-expired"] = D : v('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(D, '" ').concat(typeof D == "undefined" ? "undefined" : k(D)), 3603);
				var le = p.getElementsByTagName("iframe")[0];
				le != null && le.id.startsWith(ie) && R(p);
				var L = document.createElement("iframe");
				Ye(w) || v('Invalid input for optional parameter "action", got "'.concat(w, '"'), 3604), Qe(S) || v('Invalid input for optional parameter "cData", got "'.concat(S, '"'), 3605);
				var J = m(),
					q = Y(J);
				if (!(!J || !q)) {
					var se = [],
						Pe = f.execution === ae.RENDER;
					Pe && se.push(Z.EXECUTE), h.lastWidgetIdx++;
					var nr = {};
					h.widgetMap.set(J, _t(ze({
						idx: h.lastWidgetIdx,
						action: w,
						cData: S,
						chlPageData: B,
						cbSuccess: Le,
						cbError: Me,
						cbExpired: ve,
						cbTimeout: me,
						cbUnsupported: _e,
						cbAfterInteractive: ge,
						cbBeforeInteractive: ye,
						params: f,
						isStale: !1,
						isExpired: !1,
						isExecuting: Pe,
						isResetting: !1,
						isExecuted: Pe,
						isInitialized: !1,
						msgQueue: se,
						rcV: U,
						watchcat: {
							seq: 0,
							lastAckedSeq: 0,
							missingWidgetWarning: !1
						}
					}, nr), {
						widgetRenderStartTimeMs: a,
						widgetRenderEndTimeMs: 0,
						widgetParamsStartTimeMs: 0,
						widgetInitStartTimeMs: 0
					})), nt(h, te);
					var De = h.widgetMap.get(J);
					De || v("Turnstile Initialization Error ", 3606), L.style.display = "none", L.style.border = "none", L.style.overflow = "hidden", L.setAttribute("src", ct(J, O, f, U, te, "b", it(De)));
					var mt = ["cross-origin-isolated", "fullscreen"],
						Fe;
					N((Fe = (c = document.featurePolicy) === null || c === void 0 || (n = c.features) === null || n === void 0 ? void 0 : n.call(c)) !== null && Fe !== void 0 ? Fe : [], tt) && mt.push(tt), L.setAttribute("allow", mt.join("; ")), L.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), L.id = q;
					var Ue;
					L.tabIndex = (Ue = f.tabindex) !== null && Ue !== void 0 ? Ue : 0, L.title = "Widget containing a Cloudflare security challenge", p.appendChild(L);
					var We, ar = (We = f["response-field"]) !== null && We !== void 0 ? We : !0;
					if (ar) {
						var he = document.createElement("input");
						he.type = "hidden";
						var je;
						if (he.name = (je = f["response-field-name"]) !== null && je !== void 0 ? je : kt, he.id = "".concat(q, "_response"), p.appendChild(he), typeof f["response-field-name"] != "string" && mr(O)) {
							var xe = document.createElement("input");
							xe.type = "hidden", xe.name = Ct, xe.id = "".concat(q, "_legacy_response"), p.appendChild(xe)
						}
					}
					if (h.isRecaptchaCompatibilityMode) {
						var be = document.createElement("input");
						be.type = "hidden", be.name = Nt, be.id = "".concat(q, "_g_response"), p.appendChild(be)
					}
					return De.widgetRenderEndTimeMs = H(), q
				}
			}
		}

		function A() {
			var l, o = -1,
				n = !0,
				c = !1,
				a = void 0;
			try {
				for (var p = h.widgetMap[Symbol.iterator](), _; !(n = (_ = p.next()).done); n = !0) {
					var E = we(_.value, 2),
						f = E[0],
						w = E[1];
					o < w.idx && (l = f, o = w.idx)
				}
			} catch (S) {
				c = !0, a = S
			} finally {
				try {
					!n && p.return != null && p.return()
				} finally {
					if (c) throw a
				}
			}
			return o === -1 && v("Could not find widget", 43778), l
		}
		return {
			ready: function(o) {
				if (h.scriptWasLoadedAsync && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), v("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof o != "function" && v('turnstile.ready() expected a "function" argument, got "'.concat(typeof o == "undefined" ? "undefined" : k(o), '"'), 3841), o(), typeof o != "function" && v('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), h.isReady) {
					o();
					return
				}
				vt.push(o)
			},
			implicitRender: dt,
			execute: function(o, n) {
				var c = y(o);
				if (!c) {
					n === void 0 && v("Please provide 2 parameters to execute: container and parameters", 43521);
					var a = P(o, n);
					a || v("Failed to render widget", 43522), c = a
				}
				var p = h.widgetMap.get(c);
				if (p) {
					d(p, n);
					var _ = Y(c);
					if (p.isExecuting) {
						x("Call to execute() on a widget that is already executing (".concat(_, "), consider using reset() before execute()"));
						return
					} else p.isExecuting = !0;
					if (p.response) {
						p.isExecuting = !1, x("Call to execute() on a widget that was already executed (".concat(_, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), p.cbSuccess && p.cbSuccess(p.response, !1);
						return
					}
					p.isExpired && x("Call to execute on a expired-widget (".concat(_, "), consider using reset() before")), p.isStale && (g(_), p.isExecuting = !0), p.msgQueue.push(Z.EXECUTE), p.isExecuted = !0;
					var E = document.querySelector("#".concat(_));
					if (E || (p.isExecuting = !1, v("Widget ".concat(_, " to execute was not found"), 43522)), p.isResetting) return;
					if (p.isInitialized && b(p, c, E), p.isInitialized && p.params.appearance === z.EXECUTE && st(E, p), p.isExecuting) {
						var f, w = document.querySelector("#".concat(_));
						w || v("Received state for an unknown widget: ".concat(c), 3078), (f = w.contentWindow) === null || f === void 0 || f.postMessage({
							source: M,
							widgetId: c,
							event: "execute"
						}, "*")
					}
				}
			},
			render: P,
			reset: g,
			remove: R,
			getResponse: function(o) {
				var n;
				if (typeof o == "undefined") {
					var c = A();
					if (c) {
						var a, p = h.widgetMap.get(c);
						return p != null && p.isExpired && x("Call to getResponse on a widget that expired, consider refreshing the widget."), (a = h.widgetMap.get(c)) === null || a === void 0 ? void 0 : a.response
					} else v("Could not find a widget", 43794)
				}
				var _ = y(o);
				return _ || v("Could not find widget for provided container", 43778), (n = h.widgetMap.get(_)) === null || n === void 0 ? void 0 : n.response
			},
			isExpired: function(o) {
				var n;
				if (typeof o == "undefined") {
					var c = A();
					if (c) {
						var a, p;
						return (p = (a = h.widgetMap.get(c)) === null || a === void 0 ? void 0 : a.isExpired) !== null && p !== void 0 ? p : !1
					} else v("Could not find a widget", 43794)
				}
				var _ = y(o);
				_ || v("Could not find widget for provided container", 43778);
				var E;
				return (E = (n = h.widgetMap.get(_)) === null || n === void 0 ? void 0 : n.isExpired) !== null && E !== void 0 ? E : !1
			}
		}
	}();

	function gr(e) {
		var r = e.getAttribute("data-sitekey"),
			t = {
				sitekey: r
			},
			i = e.getAttribute("data-tabindex");
		i && (t.tabindex = parseInt(i, 10));
		var u = e.getAttribute("data-theme");
		u && (Ve(u) ? t.theme = u : x('Unknown data-theme value: "'.concat(u, '"')));
		var s = e.getAttribute("data-size");
		if (s && (Ke(s) ? t.size = s : x('Unknown data-size value: "'.concat(s, '"'))), 0) var m;
		var y = e.getAttribute("data-action");
		typeof y == "string" && (t.action = y);
		var b = e.getAttribute("data-cdata");
		typeof b == "string" && (t.cData = b);
		var d = e.getAttribute("data-retry");
		d && (qe(d) ? t.retry = d : x('Invalid data-retry value: "'.concat(d, ", expected either 'never' or 'auto'\"")));
		var g = e.getAttribute("data-retry-interval");
		if (g) {
			var R = parseInt(g, 10);
			Ge(R) ? t["retry-interval"] = R : x('Invalid data-retry-interval value: "'.concat(g, ', expected an integer value > 0 and < 900000"'))
		}
		var P = e.getAttribute("data-expiry-interval");
		if (P) {
			var A = parseInt(P, 10);
			Xe(A) ? t["expiry-interval"] = A : x('Invalid data-expiry-interval value: "'.concat(A, ', expected an integer value > 0 and < 360000"'))
		}
		var l = e.getAttribute("data-refresh-expired");
		l && ($e(l) ? t["refresh-expired"] = l : x('Unknown data-refresh-expired value: "'.concat(l, ", expected either: 'never', 'auto' or 'manual'.")));
		var o = e.getAttribute("data-language");
		o && (Je(o) ? t.language = o : x('Invalid data-language value: "'.concat(o, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));

		function n(w) {
			var S = e.getAttribute(w);
			return S && window[S] ? window[S] : void 0
		}
		var c = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		c.forEach(function(w) {
			t[w] = n("data-".concat(w))
		});
		var a, p = (a = e.getAttribute("data-response-field")) !== null && a !== void 0 ? a : "true";
		t["response-field"] = p === "true";
		var _ = e.getAttribute("data-response-field-name");
		_ && (t["response-field-name"] = _);
		var E = e.getAttribute("data-execution");
		E && (et(E) ? t.execution = E : x('Unknown data-execution value: "'.concat(E, ", expected either: 'render' or 'execute'.")));
		var f = e.getAttribute("data-appearance");
		return f && (Ze(f) ? t.appearance = f : x('Unknown data-appearance value: "'.concat(f, ", expected either: 'always', 'execute', or 'interaction-only'."))), t
	}

	function er() {
		var e = !0;
		at(h, e), h.msgHandler && window.removeEventListener("message", h.msgHandler), Vt(window.turnstile, h)
	}
	oe = !1, T = Bt(), h.scriptWasLoadedAsync = (Ce = T == null ? void 0 : T.loadedAsync) !== null && Ce !== void 0 ? Ce : !1, T != null && T.params && (ce = T.params.get("compat"), (ce == null ? void 0 : ce.toLowerCase()) === "recaptcha" ? window.grecaptcha ? x("grecaptcha is already defined. The compatibility layer will not be enabled") : (x("Compatibility layer enabled"), h.isRecaptchaCompatibilityMode = !0, window.grecaptcha = pt) : ce !== null && x('Unknown value for api.js?compat: "'.concat(ce, '", ignoring')), T.params.forEach(function(e, r) {
		N(["onload", "compat", "_cb", "_reload", "render"], r) || x('Unknown parameter passed to api.js: "?'.concat(r, '=...", ignoring'))
	}), oe = T.params.get("_upgrade") === "true", W = T.params.get("onload"), W && !oe && setTimeout(function() {
		typeof window[W] == "function" ? window[W]() : (x("Unable to find onload callback '".concat(W, "' immediately after loading, expected 'function', got '").concat(k(window[W]), "'")), setTimeout(function() {
			typeof window[W] == "function" ? window[W]() : x("Unable to find onload callback '".concat(W, "' after 1 second, expected 'function', got '").concat(k(window[W]), "'"))
		}, 1e3))
	}, 0)), ft = "turnstile" in window, ft && !oe ? x("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (ft && oe && (qt(window.turnstile, h), nt(h, te), (T == null || (ke = T.params) === null || ke === void 0 ? void 0 : ke.get("render")) !== "explicit" && setTimeout(dt, 0)), window.turnstile = pt, oe || ((T == null || (Ne = T.params) === null || Ne === void 0 ? void 0 : Ne.get("render")) !== "explicit" && vt.push(dt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout($t, 0) : window.addEventListener("DOMContentLoaded", $t))), tr = 24 * 60 * 60 * 1e3, window.setTimeout(er, tr), te && (window.turnstile._testUpgrade = er);
	var oe, T, Ce, ce, W, ft, ke, Ne, tr;
})();