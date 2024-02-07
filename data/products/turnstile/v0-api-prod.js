"use strict";
(function() {
	function ut(e, r, t, o, f, s, m) {
		try {
			var p = e[s](m),
				g = p.value
		} catch (u) {
			t(u);
			return
		}
		p.done ? r(g) : Promise.resolve(g).then(o, f)
	}

	function lt(e) {
		return function() {
			var r = this,
				t = arguments;
			return new Promise(function(o, f) {
				var s = e.apply(r, t);

				function m(g) {
					ut(s, o, f, m, p, "next", g)
				}

				function p(g) {
					ut(s, o, f, m, p, "throw", g)
				}
				m(void 0)
			})
		}
	}

	function N(e, r) {
		return r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : N(e, r)
	}

	function _e(e, r, t) {
		return r in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e
	}

	function Me(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = arguments[r] != null ? arguments[r] : {},
				o = Object.keys(t);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(f) {
				return Object.getOwnPropertyDescriptor(t, f).enumerable
			}))), o.forEach(function(f) {
				_e(e, f, t[f])
			})
		}
		return e
	}

	function st(e) {
		if (Array.isArray(e)) return e
	}

	function ft(e, r) {
		var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (t != null) {
			var o = [],
				f = !0,
				s = !1,
				m, p;
			try {
				for (t = t.call(e); !(f = (m = t.next()).done) && (o.push(m.value), !(r && o.length === r)); f = !0);
			} catch (g) {
				s = !0, p = g
			} finally {
				try {
					!f && t.return != null && t.return()
				} finally {
					if (s) throw p
				}
			}
			return o
		}
	}

	function dt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Pe(e, r) {
		(r == null || r > e.length) && (r = e.length);
		for (var t = 0, o = new Array(r); t < r; t++) o[t] = e[t];
		return o
	}

	function pt(e, r) {
		if (e) {
			if (typeof e == "string") return Pe(e, r);
			var t = Object.prototype.toString.call(e).slice(8, -1);
			if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(t);
			if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Pe(e, r)
		}
	}

	function he(e, r) {
		return st(e) || ft(e, r) || pt(e, r) || dt()
	}

	function k(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function xe(e, r) {
		var t = {
				label: 0,
				sent: function() {
					if (s[0] & 1) throw s[1];
					return s[1]
				},
				trys: [],
				ops: []
			},
			o, f, s, m;
		return m = {
			next: p(0),
			throw: p(1),
			return: p(2)
		}, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
			return this
		}), m;

		function p(u) {
			return function(x) {
				return g([u, x])
			}
		}

		function g(u) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; m && (m = 0, u[0] && (t = 0)), t;) try {
				if (o = 1, f && (s = u[0] & 2 ? f.return : u[0] ? f.throw || ((s = f.return) && s.call(f), 0) : f.next) && !(s = s.call(f, u[1])).done) return s;
				switch (f = 0, s && (u = [u[0] & 2, s.value]), u[0]) {
					case 0:
					case 1:
						s = u;
						break;
					case 4:
						return t.label++, {
							value: u[1],
							done: !1
						};
					case 5:
						t.label++, f = u[1], u = [0];
						continue;
					case 7:
						u = t.ops.pop(), t.trys.pop();
						continue;
					default:
						if (s = t.trys, !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2)) {
							t = 0;
							continue
						}
						if (u[0] === 3 && (!s || u[1] > s[0] && u[1] < s[3])) {
							t.label = u[1];
							break
						}
						if (u[0] === 6 && t.label < s[1]) {
							t.label = s[1], s = u;
							break
						}
						if (s && t.label < s[2]) {
							t.label = s[2], t.ops.push(u);
							break
						}
						s[2] && t.ops.pop(), t.trys.pop();
						continue
				}
				u = r.call(e, t)
			} catch (x) {
				u = [6, x], f = 0
			} finally {
				o = s = 0
			}
			if (u[0] & 5) throw u[1];
			return {
				value: u[0] ? u[1] : void 0,
				done: !0
			}
		}
	}
	var vt = 300020;
	var be = 300030;

	function H(e, r) {
		return e.indexOf(r) !== -1
	}
	var D;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(D || (D = {}));
	var V;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(V || (V = {}));
	var Ee;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Ee || (Ee = {}));
	var ue;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(ue || (ue = {}));
	var j;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(j || (j = {}));
	var q;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(q || (q = {}));
	var te;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(te || (te = {}));
	var $;
	(function(e) {
		e.EXECUTE = "execute"
	})($ || ($ = {}));
	var De;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(De || (De = {}));

	function Ue(e) {
		return H(["auto", "dark", "light"], e)
	}

	function Fe(e) {
		return H(["auto", "never"], e)
	}

	function We(e) {
		return e > 0 && e < 9e5
	}

	function ze(e) {
		return e > 0 && e < 36e4
	}
	var Qt = /^[0-9A-Za-z_-]{3,100}$/;

	function mt(e) {
		return Qt.test(e)
	}
	var $t = /^[a-z0-9_-]{0,32}$/i;

	function He(e) {
		return e === void 0 ? !0 : typeof e == "string" && $t.test(e)
	}
	var Jt = /^[a-z0-9_\-=]{0,255}$/i;

	function Ve(e) {
		return e === void 0 ? !0 : typeof e == "string" && Jt.test(e)
	}

	function qe(e) {
		return H(["normal", "compact", "invisible"], e)
	}

	function Be(e) {
		return H(["auto", "manual", "never"], e)
	}
	var Kt = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function je(e) {
		return e === "auto" || Kt.test(e)
	}

	function Ge(e) {
		return H(["always", "execute", "interaction-only"], e)
	}

	function Xe(e) {
		return H(["render", "execute"], e)
	}
	var U = "0/0";
	var gt = 300,
		yt = 10;
	var re = "cf-chl-widget-",
		F = "cloudflare-challenge",
		_t = ".cf-turnstile",
		ht = ".cf-challenge",
		xt = ".g-recaptcha",
		bt = "cf_challenge_response",
		Et = "cf-turnstile-response",
		wt = "g-recaptcha-response",
		Tt = 8e3,
		St = 3,
		At = 500,
		It = 500;

	function we(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Rt(e, r) {
		if (!N(e, r)) throw new TypeError("Cannot call a class as a function")
	}

	function G(e, r) {
		return G = Object.setPrototypeOf || function(o, f) {
			return o.__proto__ = f, o
		}, G(e, r)
	}

	function Ot(e, r) {
		if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(r && r.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), r && G(e, r)
	}

	function Te() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function le(e, r, t) {
		return Te() ? le = Reflect.construct : le = function(f, s, m) {
			var p = [null];
			p.push.apply(p, s);
			var g = Function.bind.apply(f, p),
				u = new g;
			return m && G(u, m.prototype), u
		}, le.apply(null, arguments)
	}

	function J(e) {
		return J = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		}, J(e)
	}

	function Ct(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Se(e) {
		var r = typeof Map == "function" ? new Map : void 0;
		return Se = function(o) {
			if (o === null || !Ct(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof r != "undefined") {
				if (r.has(o)) return r.get(o);
				r.set(o, f)
			}

			function f() {
				return le(o, arguments, J(this).constructor)
			}
			return f.prototype = Object.create(o.prototype, {
				constructor: {
					value: f,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), G(f, o)
		}, Se(e)
	}

	function Nt(e, r) {
		return r && (k(r) === "object" || typeof r == "function") ? r : we(e)
	}

	function kt(e) {
		var r = Te();
		return function() {
			var o = J(e),
				f;
			if (r) {
				var s = J(this).constructor;
				f = Reflect.construct(o, arguments, s)
			} else f = o.apply(this, arguments);
			return Nt(this, f)
		}
	}
	var Lt = function(e) {
		"use strict";
		Ot(t, e);
		var r = kt(t);

		function t(o, f) {
			Rt(this, t);
			var s;
			return s = r.call(this, o), _e(we(s), "code", void 0), s.name = "TurnstileError", s.code = f, s
		}
		return t
	}(Se(Error));

	function v(e, r) {
		var t = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Lt(t, r)
	}

	function h(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Ae(e) {
		return e.startsWith(re) ? e.substring(re.length) : null
	}

	function X(e) {
		return "".concat(re).concat(e)
	}

	function Ye() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (N(r, HTMLScriptElement) && e.test(r.src)) return r;
		for (var t = document.querySelectorAll("script"), o = 0, f; f = t[o]; o++)
			if (N(f, HTMLScriptElement) && e.test(f.src)) return f
	}

	function Mt() {
		var e = Ye();
		if (!e) return v("Could not find Turnstile script tag, some features may not be available", 43777), null;
		var r = {
			loadedAsync: !1,
			params: new URLSearchParams
		};
		(e.async || e.defer) && (r.loadedAsync = !0);
		var t = e.src,
			o = t.split("?");
		return o.length > 1 && (r.params = new URLSearchParams(o[1])), r
	}
	var Zt = 900,
		er = 3;

	function tr(e, r) {
		e.watchCatSeq++;
		var t = !0,
			o = !1,
			f = void 0;
		try {
			for (var s = e.widgetMap[Symbol.iterator](), m; !(t = (m = s.next()).done); t = !0) {
				var p = he(m.value, 2),
					g = p[0],
					u = p[1],
					x;
				u.watchcat.seq = e.watchCatSeq, u.watchcat.lastAckedSeq === 0 && (u.watchcat.lastAckedSeq = e.watchCatSeq);
				var w = X(g);
				if (!w) {
					u.watchcat.missingWidgetWarning || (h("Cannot find Widget ".concat(w, ", consider using turnstile.remove() to clean up a widget.")), u.watchcat.missingWidgetWarning = !0);
					continue
				}
				var T = document.querySelector("#".concat(w));
				if (!T) {
					u.watchcat.missingWidgetWarning || (h("Cannot find Widget ".concat(w, ", consider using turnstile.remove() to clean up a widget.")), u.watchcat.missingWidgetWarning = !0);
					continue
				}
				if ((u.isExecuting || !u.isInitialized || u.isInitialized && !u.isStale && !u.isExecuted) && u.watchcat.lastAckedSeq !== 0 && u.watchcat.lastAckedSeq < u.watchcat.seq - 1 - er) {
					var R;
					u.watchcat.lastAckedSeq = 0, u.watchcat.seq = 0, u.isExecuting = !1, console.log("Turnstile Widget seem to have crashed: ", g);
					var d;
					if ((R = e.msgHandler) === null || R === void 0 || R.call(e, {
							data: {
								source: F,
								widgetId: g,
								code: be,
								event: "fail",
								rcV: (d = u.rcV) !== null && d !== void 0 ? d : U
							}
						}), r) {
						var c;
						window.postMessage({
							source: F,
							widgetId: g,
							event: "rcv-update",
							rcV: (c = u.rcV) !== null && c !== void 0 ? c : U
						}, "*")
					}
					continue
				}(x = T.contentWindow) === null || x === void 0 || x.postMessage({
					source: F,
					widgetId: g,
					seq: e.watchCatSeq,
					event: "meow"
				}, "*")
			}
		} catch (n) {
			o = !0, f = n
		} finally {
			try {
				!t && s.return != null && s.return()
			} finally {
				if (o) throw f
			}
		}
	}

	function Qe(e, r) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			tr(e, r)
		}, Zt))
	}

	function $e(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || r) && clearInterval(e.watchCatInterval)
	}

	function Je(e) {
		var r = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && r.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && r.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), r.size !== 0) return r.toString()
	}

	function Ke(e, r) {
		var t = "https://challenges.cloudflare.com";
		if (r) {
			var o;
			t = (o = e["base-url"]) !== null && o !== void 0 ? o : t
		}
		return t
	}

	function Ze(e, r, t, o, f, s, m) {
		var p = Ke(t, f),
			g = s ? "h/".concat(s, "/") : "",
			u = m ? "?".concat(m) : "";
		return "".concat(p, "/cdn-cgi/challenge-platform/").concat(g, "turnstile/if/ov2/av0/rcv").concat(o, "/").concat(e, "/").concat(r, "/").concat(t.theme, "/").concat(t.size).concat(u)
	}

	function Pt(e, r) {
		var t;
		r.upgradeAttempts++;
		var o = Ye();
		if (!(!o || !o.parentNode)) {
			var f = o == null ? void 0 : o.nonce;
			e._pState = r;
			var s = new URL(o.src),
				m = document.createElement("script");
			s.searchParams.set("_upgrade", "true"), s.searchParams.set("_cb", String(Date.now())), m.async = !0, f && (m.nonce = f), m.setAttribute("crossorigin", "anonymous"), m.src = s.toString(), o == null || (t = o.parentNode) === null || t === void 0 || t.replaceChild(m, o)
		}
	}

	function Dt(e, r) {
		var t = e._pState;
		return t ? (r.isReady = t.isReady, r.isRecaptchaCompatibilityMode = t.isRecaptchaCompatibilityMode, r.lastWidgetIdx = t.lastWidgetIdx, r.scriptWasLoadedAsync = t.scriptWasLoadedAsync, r.upgradeAttempts = t.upgradeAttempts, r.upgradeCount = t.upgradeCount + 1, r.watchCatInterval = null, r.watchCatSeq = t.watchCatSeq, r.widgetMap = t.widgetMap, !0) : !1
	}
	var et = function(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > r ? e.substring(0, r) : e
	};

	function Ut(e) {
		var r = function(t, o) {
			if (!t || t.tagName === "BODY") return o;
			for (var f = 1, s = t.previousElementSibling; s;) s.tagName === t.tagName && f++, s = s.previousElementSibling;
			var m = et(t.tagName.toLowerCase()),
				p = "".concat(m, "[").concat(f, "]");
			return r(t.parentNode, "/".concat(p).concat(o))
		};
		return r(e, "")
	}

	function Ft(e, r, t) {
		for (var o = "", f = 0, s = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(w) {
					return f > r || o.length > t ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), m;
			(m = s.nextNode()) !== null && o.length < t;) {
			if (m.nodeType === Node.ELEMENT_NODE) {
				var p = m;
				o += "".concat(et(p.tagName.toLowerCase()));
				for (var g = 0; g < p.attributes.length; g++) {
					var u = p.attributes[g];
					o += "_".concat(et(u.name, 2))
				}
				o += ">"
			} else m.nodeType === Node.TEXT_NODE && (o += "-t");
			var x = m.parentNode;
			for (f = 0; x !== e && x !== null;) f++, x = x.parentNode
		}
		return o
	}

	function Wt(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : k(e)));
		for (var r = 5381, t = 0; t < e.length; t++) {
			var o = e.charCodeAt(t);
			r = r * 33 ^ o
		}
		return r >>> 0
	}
	var ae = !1,
		y = {
			turnstileLoadInitTime: +new Date,
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

	function tt(e) {
		Bt(e, "")
	}

	function at() {
		var e = [_t, ht];
		y.isRecaptchaCompatibilityMode && e.push(xt), document.querySelectorAll(e.join(", ")).forEach(function(r) {
			return ot.render(r)
		})
	}
	var it = [];

	function zt() {
		y.isReady = !0;
		var e = !0,
			r = !1,
			t = void 0;
		try {
			for (var o = it[Symbol.iterator](), f; !(e = (f = o.next()).done); e = !0) {
				var s = f.value;
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

	function rr(e, r) {
		var t, o = Ke(r.params, ae),
			f = "h/".concat("g", "/"),
			s = document.getElementById(e);
		if (!s) {
			v("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			return
		}
		var m = document.createElement("div");
		m.style.position = "fixed", m.style.zIndex = "21474836419";
		var p = document.createElement("div");
		p.className = "cf-turnstile-feedback", p.id = "cf-fr-id", p.style.borderColor = "#000000", p.style.width = "450px", p.style.height = "340px", p.style.position = "absolute", p.style.zIndex = "21474836420", p.style.borderWidth = "1px", p.style.borderColor = "#000", p.style.borderStyle = "solid", p.style.backgroundColor = "#ffffff", p.style.borderRadius = "10px", p.style.left = "-122px", p.style.top = "-91px", p.style.overflow = "hidden";
		var g = document.createElement("iframe");
		g.id = e + "-fr", g.setAttribute("src", "".concat(o, "/cdn-cgi/challenge-platform/").concat(f, "feedback-reports/").concat(Ae(e))), g.setAttribute("allow", "cross-origin-isolated; fullscreen"), g.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), g.setAttribute("scrolling", "no"), g.style.width = "100%", g.style.height = "100%", g.style.overflow = "hidden";
		var u = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		u.style.position = "absolute", u.style.width = "26px", u.style.height = "26px", u.style.zIndex = "21474836421", u.style.cursor = "pointer", u.style.right = "2px", u.style.top = "5px", u.setAttribute("width", "26"), u.setAttribute("height", "26"), u.addEventListener("click", function() {
			var R;
			(R = m.parentNode) === null || R === void 0 || R.removeChild(m)
		});
		var x = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		x.setAttribute("ry", "12"), x.setAttribute("rx", "12"), x.setAttribute("cy", "12"), x.setAttribute("cx", "12"), x.setAttribute("fill", "#aaaaaa"), x.setAttribute("stroke-width", "0"), u.appendChild(x);
		var w = document.createElementNS("http://www.w3.org/2000/svg", "line");
		w.setAttribute("stroke-width", "3"), w.setAttribute("stroke", "#fff"), w.setAttribute("fill", "none"), w.setAttribute("x1", "6"), w.setAttribute("x2", "18"), w.setAttribute("y1", "18"), w.setAttribute("y2", "5"), u.appendChild(w);
		var T = document.createElementNS("http://www.w3.org/2000/svg", "line");
		T.setAttribute("stroke-width", "3"), T.setAttribute("stroke", "#fff"), T.setAttribute("fill", "none"), T.setAttribute("x1", "6"), T.setAttribute("x2", "18"), T.setAttribute("y1", "5"), T.setAttribute("y2", "18"), u.appendChild(T), p.appendChild(g), p.appendChild(u), m.appendChild(p), (t = s.parentNode) === null || t === void 0 || t.appendChild(m)
	}

	function Bt(e, r) {
		var t = document.getElementById("".concat(e, "_response"));
		t !== null && N(t, HTMLInputElement) && (t.value = r);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && N(o, HTMLInputElement) && (o.value = r), y.isRecaptchaCompatibilityMode) {
			var f = document.getElementById("".concat(e, "_g_response"));
			f !== null && N(f, HTMLInputElement) && (f.value = r)
		}
	}

	function rt(e, r) {
		var t = r.params,
			o = t.size,
			f = o === void 0 ? "normal" : o,
			s = r.mode;
		switch (s) {
			case D.NON_INTERACTIVE:
			case D.MANAGED:
				switch (f) {
					case V.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case V.INVISIBLE:
						v('Invalid value for parameter "size", expected "'.concat(V.COMPACT, '" or "').concat(V.NORMAL, '", got "').concat(f, '"'), 2817);
					case V.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case D.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				v('Invalid value for parameter "mode", expected "'.concat(D.NON_INTERACTIVE, '", "').concat(D.MANAGED, '" or "').concat(D.INVISIBLE, '", got "').concat(s, '"'), 2818);
				return
		}
	}

	function Ht(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function nr(e, r) {
		var t = r.get("turnstile_iframe_alt");
		t && (e.title = t)
	}

	function ar(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function ir(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Vt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var ot = function() {
		function e(d, c, n, l) {
			return r.apply(this, arguments)
		}

		function r() {
			return r = lt(function(d, c, n, l) {
				var i, a, _, b, A, E, S, M, L, z;
				return xe(this, function(O) {
					switch (O.label) {
						case 0:
							if (i = d.params.sitekey, a = Vt(), !a) return h("Cannot determine Turnstile's embedded location, aborting clearance redemption."), o(d, c, !1), [2];
							_ = "h/".concat("g", "/"), b = new URL(a), A = "https", E = "", S = "".concat(A, "://").concat(b.host, "/cdn-cgi/challenge-platform/").concat(_, "rc/").concat(l).concat(E), O.label = 1;
						case 1:
							return O.trys.push([1, 6, , 7]), [4, fetch(S, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: i,
									secondaryToken: n
								})
							})];
						case 2:
							return M = O.sent(), M.status === 200 ? [3, 3] : (h("Cannot determine Turnstile's embedded location, aborting clearance redemption."), o(d, c, !1), [3, 5]);
						case 3:
							return [4, M.json()];
						case 4:
							if (L = O.sent(), "status" in L && L.status === "redeemed") return o(d, c, !0), [2];
							O.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return z = O.sent(), h("Error contacting Turnstile, aborting clearance remdeption."), o(d, c, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), r.apply(this, arguments)
		}

		function t(d, c, n) {
			if (d.params.retry === ue.AUTO || n) {
				d.isExecuted && (d.msgQueue.push($.EXECUTE), d.isExecuted = !0, d.isExecuting = !0);
				var l, i = n ? 0 : 1e3 * 2 + ((l = d.params["retry-interval"]) !== null && l !== void 0 ? l : 0);
				d.retryTimeout = window.setTimeout(function() {
					x(c)
				}, i)
			}
		}

		function o(d, c, n) {
			if (d.response === void 0) {
				v("[Internal Error] Widget was completed but no response was given", 1362);
				return
			}
			d.isExecuting = !1, Bt(c, d.response);
			var l = d.cbSuccess;
			l && l(d.response, n)
		}

		function f(d) {
			if (!d) return [];
			for (var c = d.attributes, n = c.length, l = new Array(n), i = 0; i < n; i++) l[i] = c[i].name;
			return l
		}
		var s = function(c) {
			var n = c.data;
			if (n.source === F) {
				if (!ar(c)) {
					h("Ignored message from wrong origin: " + c.origin);
					return
				}
				if (!(!n.widgetId || !y.widgetMap.has(n.widgetId))) {
					var l = X(n.widgetId),
						i = y.widgetMap.get(n.widgetId);
					if (!(!l || !i)) switch (n.event) {
						case "init": {
							var a = document.getElementById(l);
							if (!a) {
								v("Cannot initialize Widget, Element not found (#".concat(l, ")."), 3074);
								return
							}
							i.mode = n.mode, i.mode === D.INVISIBLE && i.params["refresh-expired"] === j.MANUAL && h("refresh-expired=manual is impossible in invisible mode, consider using '".concat(j.AUTO, "' or '").concat(j.NEVER, "'")), i.params.appearance === q.ALWAYS || i.isExecuting && i.params.appearance === q.EXECUTE ? rt(a, i) : Ht(a), a.style.display = "";
							break
						}
						case "translationInit": {
							var _ = document.getElementById(l);
							if (!_) {
								v("Cannot initialize Widget, Element not found (#".concat(l, ")."), 3074);
								return
							}
							var b = new Map;
							Object.keys(n.translationData).forEach(function(ce) {
								b.set(ce, n.translationData[ce])
							}), nr(_, b);
							break
						}
						case "reject": {
							var A = document.getElementById(l);
							if (i.isExecuting = !1, !A) {
								v("Cannot initialize Widget, Element not found (#".concat(l, ")."), 3075);
								return
							}
							if (n.reason === "outdated_browser") {
								var E = i.cbUnsupported;
								E && E()
							}
							break
						}
						case "food": {
							i.watchcat && n.seq > i.watchcat.lastAckedSeq && (i.watchcat.lastAckedSeq = n.seq);
							break
						}
						case "complete": {
							i.rcV = U, i.response = n.token, n.sToken ? e(i, l, n.sToken, n.chlId) : o(i, l, !1);
							break
						}
						case "fail": {
							n.rcV && (i.rcV = n.rcV), n.cfChlOut && (i.cfChlOut = n.cfChlOut), n.cfChlOutS && (i.cfChlOutS = n.cfChlOutS), n.code && (i.errorCode = n.code), i.isExecuting = !1, i.isInitialized = !0, tt(l);
							var S = i.cbError,
								M = n.code === be;
							if (S) {
								var L;
								S(String((L = n.code) !== null && L !== void 0 ? L : vt)) || (n.code && h("Error: ".concat(n.code)), t(i, l, M))
							} else n.code ? (t(i, l, M), v("Error: ".concat(n.code), 3076)) : t(i, l, !1);
							break
						}
						case "feedbackInit": {
							rr(l, i);
							break
						}
						case "requestFeedbackData": {
							var z, O = document.querySelector("#".concat(l));
							if (!O) {
								v("Received state for an unknown widget: ".concat(n.widgetId), 3078);
								return
							}(z = O.contentWindow) === null || z === void 0 || z.postMessage({
								source: F,
								widgetId: n.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var Y, K = document.querySelector("#".concat(l, "-fr"));
							if (!K) {
								v("Received state for an unknown widget: ".concat(n.widgetId), 3078);
								return
							}(Y = K.contentWindow) === null || Y === void 0 || Y.postMessage({
								source: F,
								widgetId: n.widgetId,
								event: "feedbackData",
								rayId: n.rayId,
								rcV: n.rcV,
								cfChlOut: i.cfChlOut,
								cfChlOutS: i.cfChlOutS,
								errorCode: i.errorCode,
								sitekey: n.sitekey,
								mode: n.mode
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var ie, oe, fe = document.querySelector("#".concat(l, "-fr"));
							if (!fe) {
								v("Received state for an unknown widget: ".concat(n.widgetId), 3078);
								return
							}(oe = fe.parentElement) === null || oe === void 0 || (ie = oe.parentElement) === null || ie === void 0 || ie.remove();
							break
						}
						case "tokenExpired": {
							var Oe = n.token;
							i.isExpired = !0;
							var de = i.cbExpired;
							de && de(Oe), i.params["refresh-expired"] === j.AUTO && !i.isResetting && x(l);
							break
						}
						case "interactiveTimeout": {
							i.rcV = U, tt(l);
							var pe = i.cbTimeout;
							pe && pe();
							break
						}
						case "refreshRequest": {
							i.rcV = U, x(l);
							break
						}
						case "interactiveBegin": {
							var ve = document.getElementById(l);
							if (!ve) {
								v("Cannot layout widget, Element not found (#".concat(l, ")."), 3076);
								return
							}
							var Z = i.cbBeforeInteractive;
							Z && Z(), i.params.appearance === q.INTERACTION_ONLY && rt(ve, i);
							break
						}
						case "interactiveEnd": {
							var Q = document.getElementById(l);
							if (!Q) {
								v("Cannot unlayout widget, Element not found (#".concat(l, ")."), 3077);
								return
							}
							var ee = i.cbAfterInteractive;
							ee && ee();
							break
						}
						case "widgetStale": {
							i.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var C, P = document.querySelector("#".concat(l));
							if (!P) {
								v("Received state for an unknown widget: ".concat(n.widgetId), 3078);
								return
							}
							i.isResetting = !1;
							var B = {};
							(C = P.contentWindow) === null || C === void 0 || C.postMessage(Me({
								source: F,
								widgetId: n.widgetId,
								event: "extraParams",
								action: i.action,
								cData: i.cData,
								chlPageData: i.chlPageData,
								rcV: i.rcV,
								ch: "ea25f566",
								url: Vt(),
								retry: i.params.retry,
								"expiry-interval": i.params["expiry-interval"],
								"retry-interval": i.params["retry-interval"],
								"refresh-expired": i.params["refresh-expired"],
								language: i.params.language,
								execution: i.params.execution,
								appearance: i.params.appearance,
								wPr: {
									"w.iW": window.innerWidth,
									"ht.atrs": f(document.body.parentNode),
									pi: {
										xp: Ut(P).substring(0, It),
										pfp: Ft(document, St, At),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: Wt(document.title)
									}
								},
								turnstileAge: +Date.now() - y.turnstileLoadInitTime,
								widgetAge: +Date.now() - i.widgetStartTime
							}, B), "*"), g(i, n.widgetId, P), i.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		y.msgHandler = s, window.addEventListener("message", s);

		function m() {
			var d = "abcdefghijklmnopqrstuvwxyz0123456789",
				c = d.length,
				n;
			do {
				n = "";
				for (var l = 0; l < 5; l++) n += d.charAt(Math.floor(Math.random() * c))
			} while (y.widgetMap.has(n));
			return n
		}

		function p(d) {
			if (typeof d == "string") {
				var c = Ae(d);
				if (c && y.widgetMap.has(c)) return c;
				try {
					var n = document.querySelector(d);
					return n ? p(n) : null
				} catch (i) {
					return null
				}
			}
			if (N(d, HTMLElement)) {
				var l = d.querySelector("iframe");
				return l ? Ae(l.id) : null
			}
			return d || y.widgetMap.size === 0 ? null : y.widgetMap.keys().next().value
		}

		function g(d, c, n) {
			for (; d.msgQueue.length;) {
				var l, i = d.msgQueue.pop();
				(l = n.contentWindow) === null || l === void 0 || l.postMessage({
					source: F,
					widgetId: c,
					event: i
				}, "*")
			}
		}

		function u(d, c) {
			if (c) {
				var n = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
					l = [],
					i = !0,
					a = !1,
					_ = void 0;
				try {
					for (var b = n[Symbol.iterator](), A; !(i = (A = b.next()).done); i = !0) {
						var E = A.value;
						c[E] && c[E] !== d.params[E] && l.push(E)
					}
				} catch (S) {
					a = !0, _ = S
				} finally {
					try {
						!i && b.return != null && b.return()
					} finally {
						if (a) throw _
					}
				}
				if (l.length !== 0) {
					v("The parameters ".concat(n.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(l.join(",")), 3618);
					return
				}
				if (c.action) {
					if (!He(c.action)) {
						v('Invalid input for optional parameter "action", got "'.concat(c.action, '"'), 3604);
						return
					}
					d.action = c.action
				}
				if (c.cData) {
					if (!Ve(c.cData)) {
						v('Invalid input for optional parameter "cData", got "'.concat(c.cData, '"'), 3605);
						return
					}
					d.cData = c.cData
				}
				c["after-interactive-callback"] && (d.cbAfterInteractive = c["after-interactive-callback"]), c["before-interactive-callback"] && (d.cbBeforeInteractive = c["before-interactive-callback"]), c.callback && (d.cbSuccess = c.callback), c["expired-callback"] && (d.cbExpired = c["expired-callback"]), c["timeout-callback"] && (d.cbTimeout = c["timeout-callback"]), c["error-callback"] && (d.cbError = c["error-callback"]), c["unsupported-callback"] && (d.cbUnsupported = c["unsupported-callback"]), c.chlPageData && (d.chlPageData = c.chlPageData)
			}
		}

		function x(d) {
			var c = p(d);
			if (!c) {
				v("Nothing to reset found for provided container", 3329);
				return
			}
			var n = y.widgetMap.get(c);
			if (n) {
				n.isResetting = !0, n.response = void 0, n.mode = void 0, n.msgQueue = [], n.isExpired = !1, n.isExecuting = !1, n.isStale = !1, n.isInitialized = !1, n.watchcat.lastAckedSeq = 0, n.watchcat.seq = 0, n.params.execution === te.RENDER && (n.msgQueue.push($.EXECUTE), n.isExecuted = !0, n.isExecuting = !0);
				var l = X(c),
					i = document.querySelector("#".concat(l));
				if (!l || !i) {
					v("Widget ".concat(c, " to reset was not found."), 3330);
					return
				}
				if (n.params.appearance === q.INTERACTION_ONLY && Ht(i), n.params.sitekey === null) {
					v("Unexpected Error: Sitekey is null", 3347);
					return
				}
				var a;
				i.src = Ze(c, n.params.sitekey, n.params, (a = n.rcV) !== null && a !== void 0 ? a : U, ae, "g", Je(n)), tt(l), n.retryTimeout && window.clearTimeout(n.retryTimeout)
			} else {
				v("Widget ".concat(c, " to reset was not found."), 3331);
				return
			}
		}

		function w(d) {
			var c, n = p(d);
			if (!n || !y.widgetMap.has(n)) {
				h("Nothing to remove found for the provided container");
				return
			}
			var l = X(n),
				i = ["iframe#".concat(l), "input#".concat(l, "_response"), "input#".concat(l, "_legacy_response"), "input#".concat(l, "_g_response")];
			document.querySelectorAll(i.join(", ")).forEach(function(_) {
				return _.remove()
			});
			var a = (c = y.widgetMap.get(n)) === null || c === void 0 ? void 0 : c.retryTimeout;
			a && window.clearTimeout(a), y.widgetMap.delete(n), $e(y)
		}

		function T(d, c) {
			var n;
			if (typeof d == "string") try {
					var l = document.querySelector(d);
					if (!l) {
						v('Unable to find a container for "'.concat(d, '"'), 3585);
						return
					}
					n = l
				} catch (ur) {
					v('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(d, '"'), 3586);
					return
				} else if (N(d, HTMLElement)) n = d;
				else {
					v('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
					return
				} var i = or(n);
			if (i) {
				var a = Object.assign(i, c),
					_ = a.action,
					b = a.cData,
					A = a.chlPageData,
					E = a.sitekey,
					S;
				a.theme = (S = a.theme) !== null && S !== void 0 ? S : Ee.AUTO;
				var M;
				a.retry = (M = a.retry) !== null && M !== void 0 ? M : ue.AUTO;
				var L;
				a.execution = (L = a.execution) !== null && L !== void 0 ? L : te.RENDER;
				var z;
				a.appearance = (z = a.appearance) !== null && z !== void 0 ? z : q.ALWAYS;
				var O;
				a["retry-interval"] = +((O = a["retry-interval"]) !== null && O !== void 0 ? O : Tt);
				var Y;
				a["expiry-interval"] = +((Y = a["expiry-interval"]) !== null && Y !== void 0 ? Y : (gt - yt) * 1e3);
				var K;
				a.size = (K = a.size) !== null && K !== void 0 ? K : V.NORMAL;
				var ie = a.callback,
					oe = a["expired-callback"],
					fe = a["timeout-callback"],
					Oe = a["after-interactive-callback"],
					de = a["before-interactive-callback"],
					pe = a["error-callback"],
					ve = a["unsupported-callback"];
				if (typeof E != "string") {
					v('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof E == "undefined" ? "undefined" : k(E), '"'), 3588);
					return
				}
				if (!mt(E)) {
					v('Invalid input for parameter "sitekey", got "'.concat(E, '"'), 3589);
					return
				}
				if (!qe(a.size)) {
					v('Invalid type for parameter "size", expected normal|compact, got "'.concat(a.size, '" ').concat(k(a.size)), 3590);
					return
				}
				if (!Ue(a.theme)) {
					v('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(a.theme, '" ').concat(k(a.theme)), 3591);
					return
				}
				if (!Fe(a.retry)) {
					v('Invalid type for parameter "retry", expected never|auto, got "'.concat(a.retry, '" ').concat(k(a.retry)), 3592);
					return
				}
				if (a.language || (a.language = "auto"), !je(a.language)) {
					v('Invalid language value: "'.concat(a.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
					return
				}
				if (!Ge(a.appearance)) {
					v('Unknown appearance value: "'.concat(a.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
					return
				}
				if (!Xe(a.execution)) {
					v('Unknown execution value: "'.concat(a.execution, ", expected either: 'render' or 'execute'."), 3601);
					return
				}
				if (!We(a["retry-interval"])) {
					v('Invalid retry-interval value: "'.concat(a["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
					return
				}
				if (!ze(a["expiry-interval"])) {
					v('Invalid expiry-interval value: "'.concat(a["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					return
				}
				var Z, Q = (Z = a["refresh-expired"]) !== null && Z !== void 0 ? Z : j.AUTO;
				if (Be(Q)) a["refresh-expired"] = Q;
				else {
					v('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(Q, '" ').concat(typeof Q == "undefined" ? "undefined" : k(Q)), 3603);
					return
				}
				var ee = n.getElementsByTagName("iframe")[0];
				ee != null && ee.id.startsWith(re) && w(n);
				var C = document.createElement("iframe");
				if (!He(_)) {
					v('Invalid input for optional parameter "action", got "'.concat(_, '"'), 3604);
					return
				}
				if (!Ve(b)) {
					v('Invalid input for optional parameter "cData", got "'.concat(b, '"'), 3605);
					return
				}
				var P = m(),
					B = X(P);
				if (!(!P || !B)) {
					var ce = [],
						Ce = a.execution === te.RENDER;
					Ce && ce.push($.EXECUTE), y.lastWidgetIdx++;
					var Gt = +new Date,
						Xt = {};
					y.widgetMap.set(P, Me({
						idx: y.lastWidgetIdx,
						action: _,
						cData: b,
						chlPageData: A,
						cbSuccess: ie,
						cbError: pe,
						cbExpired: oe,
						cbTimeout: fe,
						cbUnsupported: ve,
						cbAfterInteractive: Oe,
						cbBeforeInteractive: de,
						params: a,
						isStale: !1,
						isExpired: !1,
						isExecuting: Ce,
						isResetting: !1,
						isExecuted: Ce,
						isInitialized: !1,
						msgQueue: ce,
						rcV: U,
						widgetStartTime: Gt,
						watchcat: {
							seq: 0,
							lastAckedSeq: 0,
							missingWidgetWarning: !1
						}
					}, Xt)), Qe(y, ae);
					var ct = y.widgetMap.get(P);
					if (!ct) {
						v("Turnstile Initialization Error ", 3606);
						return
					}
					C.style.display = "none", C.style.border = "none", C.style.overflow = "hidden", C.setAttribute("src", Ze(P, E, a, U, ae, "g", Je(ct))), C.setAttribute("allow", "cross-origin-isolated; fullscreen"), C.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), C.id = B;
					var Ne;
					C.tabIndex = (Ne = a.tabindex) !== null && Ne !== void 0 ? Ne : 0, C.title = "Widget containing a Cloudflare security challenge", n.appendChild(C);
					var ke, Yt = (ke = a["response-field"]) !== null && ke !== void 0 ? ke : !0;
					if (Yt) {
						var me = document.createElement("input");
						me.type = "hidden";
						var Le;
						if (me.name = (Le = a["response-field-name"]) !== null && Le !== void 0 ? Le : Et, me.id = "".concat(B, "_response"), n.appendChild(me), typeof a["response-field-name"] != "string" && ir(E)) {
							var ge = document.createElement("input");
							ge.type = "hidden", ge.name = bt, ge.id = "".concat(B, "_legacy_response"), n.appendChild(ge)
						}
					}
					if (y.isRecaptchaCompatibilityMode) {
						var ye = document.createElement("input");
						ye.type = "hidden", ye.name = wt, ye.id = "".concat(B, "_g_response"), n.appendChild(ye)
					}
					return B
				}
			}
		}

		function R() {
			var d, c = -1,
				n = !0,
				l = !1,
				i = void 0;
			try {
				for (var a = y.widgetMap[Symbol.iterator](), _; !(n = (_ = a.next()).done); n = !0) {
					var b = he(_.value, 2),
						A = b[0],
						E = b[1];
					c < E.idx && (d = A, c = E.idx)
				}
			} catch (S) {
				l = !0, i = S
			} finally {
				try {
					!n && a.return != null && a.return()
				} finally {
					if (l) throw i
				}
			}
			if (c === -1) {
				v("Could not find widget", 43778);
				return
			}
			return d
		}
		return {
			ready: function(c) {
				if (y.scriptWasLoadedAsync && (h("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), v("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof c != "function" && v('turnstile.ready() expected a "function" argument, got "'.concat(typeof c == "undefined" ? "undefined" : k(c), '"'), 3841), c(), typeof c != "function" && v('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), y.isReady) {
					c();
					return
				}
				it.push(c)
			},
			implicitRender: at,
			execute: function(c, n) {
				var l = p(c);
				if (!l) {
					if (n === void 0) {
						v("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var i = T(c, n);
					if (!i) {
						v("Failed to render widget", 43522);
						return
					}
					l = i
				}
				var a = y.widgetMap.get(l);
				if (a) {
					u(a, n);
					var _ = X(l);
					if (a.isExecuting) {
						h("Call to execute() on a widget that is already executing (".concat(_, "), consider using reset() before execute()"));
						return
					} else a.isExecuting = !0;
					if (a.response) {
						a.isExecuting = !1, h("Call to execute() on a widget that was already executed (".concat(_, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), a.cbSuccess && a.cbSuccess(a.response, !1);
						return
					}
					a.isExpired && h("Call to execute on a expired-widget (".concat(_, "), consider using reset() before")), a.isStale && (x(_), a.isExecuting = !0), a.msgQueue.push($.EXECUTE), a.isExecuted = !0;
					var b = document.querySelector("#".concat(_));
					if (!b) {
						a.isExecuting = !1, v("Widget ".concat(_, " to execute was not found"), 43522);
						return
					}
					a.isInitialized && g(a, l, b), a.isInitialized && a.params.appearance === q.EXECUTE && rt(b, a)
				}
			},
			render: T,
			reset: x,
			remove: w,
			getResponse: function(c) {
				var n;
				if (typeof c == "undefined") {
					var l = R();
					if (l) {
						var i, a = y.widgetMap.get(l);
						return a != null && a.isExpired && h("Call to getResponse on a widget that expired, consider refreshing the widget."), (i = y.widgetMap.get(l)) === null || i === void 0 ? void 0 : i.response
					} else v("Could not find a widget", 43794)
				}
				var _ = p(c);
				if (!_) {
					v("Could not find widget for provided container", 43778);
					return
				}
				return (n = y.widgetMap.get(_)) === null || n === void 0 ? void 0 : n.response
			},
			isExpired: function(c) {
				var n;
				if (typeof c == "undefined") {
					var l = R();
					if (l) {
						var i, a;
						return (a = (i = y.widgetMap.get(l)) === null || i === void 0 ? void 0 : i.isExpired) !== null && a !== void 0 ? a : !1
					} else v("Could not find a widget", 43794)
				}
				var _ = p(c);
				if (!_) return v("Could not find widget for provided container", 43778), !1;
				var b;
				return (b = (n = y.widgetMap.get(_)) === null || n === void 0 ? void 0 : n.isExpired) !== null && b !== void 0 ? b : !1
			}
		}
	}();

	function or(e) {
		var r = e.getAttribute("data-sitekey"),
			t = {
				sitekey: r
			},
			o = e.getAttribute("data-tabindex");
		o && (t.tabindex = parseInt(o, 10));
		var f = e.getAttribute("data-theme");
		f && (Ue(f) ? t.theme = f : h('Unknown data-theme value: "'.concat(f, '"')));
		var s = e.getAttribute("data-size");
		if (s && (qe(s) ? t.size = s : h('Unknown data-size value: "'.concat(s, '"'))), 0) var m;
		var p = e.getAttribute("data-action");
		typeof p == "string" && (t.action = p);
		var g = e.getAttribute("data-cdata");
		typeof g == "string" && (t.cData = g);
		var u = e.getAttribute("data-retry");
		u && (Fe(u) ? t.retry = u : h('Invalid data-retry value: "'.concat(u, ", expected either 'never' or 'auto'\"")));
		var x = e.getAttribute("data-retry-interval");
		if (x) {
			var w = parseInt(x, 10);
			We(w) ? t["retry-interval"] = w : h('Invalid data-retry-interval value: "'.concat(x, ', expected an integer value > 0 and < 900000"'))
		}
		var T = e.getAttribute("data-expiry-interval");
		if (T) {
			var R = parseInt(T, 10);
			ze(R) ? t["expiry-interval"] = R : h('Invalid data-expiry-interval value: "'.concat(R, ', expected an integer value > 0 and < 360000"'))
		}
		var d = e.getAttribute("data-refresh-expired");
		d && (Be(d) ? t["refresh-expired"] = d : h('Unknown data-refresh-expired value: "'.concat(d, ", expected either: 'never', 'auto' or 'manual'.")));
		var c = e.getAttribute("data-language");
		c && (je(c) ? t.language = c : h('Invalid data-language value: "'.concat(c, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));

		function n(E) {
			var S = e.getAttribute(E);
			return S && window[S] ? window[S] : void 0
		}
		var l = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		l.forEach(function(E) {
			t[E] = n("data-".concat(E))
		});
		var i, a = (i = e.getAttribute("data-response-field")) !== null && i !== void 0 ? i : "true";
		t["response-field"] = a === "true";
		var _ = e.getAttribute("data-response-field-name");
		_ && (t["response-field-name"] = _);
		var b = e.getAttribute("data-execution");
		b && (Xe(b) ? t.execution = b : h('Unknown data-execution value: "'.concat(b, ", expected either: 'render' or 'execute'.")));
		var A = e.getAttribute("data-appearance");
		return A && (Ge(A) ? t.appearance = A : h('Unknown data-appearance value: "'.concat(A, ", expected either: 'always', 'execute', or 'interaction-only'."))), t
	}
	var se = !1,
		I = Mt(),
		nt;
	y.scriptWasLoadedAsync = (nt = I == null ? void 0 : I.loadedAsync) !== null && nt !== void 0 ? nt : !1;
	I != null && I.params && (ne = I.params.get("compat"), (ne == null ? void 0 : ne.toLowerCase()) === "recaptcha" ? window.grecaptcha ? h("grecaptcha is already defined. The compatibility layer will not be enabled") : (h("Compatibility layer enabled"), y.isRecaptchaCompatibilityMode = !0, window.grecaptcha = ot) : ne !== null && h('Unknown value for api.js?compat: "'.concat(ne, '", ignoring')), I.params.forEach(function(e, r) {
		H(["onload", "compat", "_cb", "_reload", "render"], r) || h('Unknown parameter passed to api.js: "?'.concat(r, '=...", ignoring'))
	}), se = I.params.get("_upgrade") === "true", W = I.params.get("onload"), W && !se && setTimeout(function() {
		typeof window[W] == "function" ? window[W]() : (h("Unable to find onload callback '".concat(W, "' immediately after loading, expected 'function', got '").concat(k(window[W]), "'")), setTimeout(function() {
			typeof window[W] == "function" ? window[W]() : h("Unable to find onload callback '".concat(W, "' after 1 second, expected 'function', got '").concat(k(window[W]), "'"))
		}, 1e3))
	}, 0));
	var ne, W, qt = "turnstile" in window;
	qt && !se ? h("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (qt && se && (Dt(window.turnstile, y), Qe(y, ae), (I == null || (Ie = I.params) === null || Ie === void 0 ? void 0 : Ie.get("render")) !== "explicit" && setTimeout(at, 0)), window.turnstile = ot, se || ((I == null || (Re = I.params) === null || Re === void 0 ? void 0 : Re.get("render")) !== "explicit" && it.push(at), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(zt, 0) : window.addEventListener("DOMContentLoaded", zt)));
	var Ie, Re;

	function jt() {
		var e = !0;
		$e(y, e), y.msgHandler && window.removeEventListener("message", y.msgHandler), Pt(window.turnstile, y)
	}
	var cr = 24 * 60 * 60 * 1e3;
	window.setTimeout(jt, cr);
	ae && (window.turnstile._testUpgrade = jt);
})();