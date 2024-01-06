"use strict";
(function() {
	function nt(e, n, r, u, s, f, y) {
		try {
			var p = e[f](y),
				m = p.value
		} catch (d) {
			r(d);
			return
		}
		p.done ? n(m) : Promise.resolve(m).then(u, s)
	}

	function at(e) {
		return function() {
			var n = this,
				r = arguments;
			return new Promise(function(u, s) {
				var f = e.apply(n, r);

				function y(m) {
					nt(f, u, s, y, p, "next", m)
				}

				function p(m) {
					nt(f, u, s, y, p, "throw", m)
				}
				y(void 0)
			})
		}
	}

	function O(e, n) {
		return n != null && typeof Symbol != "undefined" && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](e) : O(e, n)
	}

	function ye(e, n, r) {
		return n in e ? Object.defineProperty(e, n, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[n] = r, e
	}

	function Ne(e) {
		for (var n = 1; n < arguments.length; n++) {
			var r = arguments[n] != null ? arguments[n] : {},
				u = Object.keys(r);
			typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(r).filter(function(s) {
				return Object.getOwnPropertyDescriptor(r, s).enumerable
			}))), u.forEach(function(s) {
				ye(e, s, r[s])
			})
		}
		return e
	}

	function it(e) {
		if (Array.isArray(e)) return e
	}

	function ot(e, n) {
		var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (r != null) {
			var u = [],
				s = !0,
				f = !1,
				y, p;
			try {
				for (r = r.call(e); !(s = (y = r.next()).done) && (u.push(y.value), !(n && u.length === n)); s = !0);
			} catch (m) {
				f = !0, p = m
			} finally {
				try {
					!s && r.return != null && r.return()
				} finally {
					if (f) throw p
				}
			}
			return u
		}
	}

	function ct() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Le(e, n) {
		(n == null || n > e.length) && (n = e.length);
		for (var r = 0, u = new Array(n); r < n; r++) u[r] = e[r];
		return u
	}

	function ut(e, n) {
		if (e) {
			if (typeof e == "string") return Le(e, n);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Le(e, n)
		}
	}

	function _e(e, n) {
		return it(e) || ot(e, n) || ut(e, n) || ct()
	}

	function L(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function ge(e, n) {
		var r = {
				label: 0,
				sent: function() {
					if (f[0] & 1) throw f[1];
					return f[1]
				},
				trys: [],
				ops: []
			},
			u, s, f, y;
		return y = {
			next: p(0),
			throw: p(1),
			return: p(2)
		}, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
			return this
		}), y;

		function p(d) {
			return function(b) {
				return m([d, b])
			}
		}

		function m(d) {
			if (u) throw new TypeError("Generator is already executing.");
			for (; y && (y = 0, d[0] && (r = 0)), r;) try {
				if (u = 1, s && (f = d[0] & 2 ? s.return : d[0] ? s.throw || ((f = s.return) && f.call(s), 0) : s.next) && !(f = f.call(s, d[1])).done) return f;
				switch (s = 0, f && (d = [d[0] & 2, f.value]), d[0]) {
					case 0:
					case 1:
						f = d;
						break;
					case 4:
						return r.label++, {
							value: d[1],
							done: !1
						};
					case 5:
						r.label++, s = d[1], d = [0];
						continue;
					case 7:
						d = r.ops.pop(), r.trys.pop();
						continue;
					default:
						if (f = r.trys, !(f = f.length > 0 && f[f.length - 1]) && (d[0] === 6 || d[0] === 2)) {
							r = 0;
							continue
						}
						if (d[0] === 3 && (!f || d[1] > f[0] && d[1] < f[3])) {
							r.label = d[1];
							break
						}
						if (d[0] === 6 && r.label < f[1]) {
							r.label = f[1], f = d;
							break
						}
						if (f && r.label < f[2]) {
							r.label = f[2], r.ops.push(d);
							break
						}
						f[2] && r.ops.pop(), r.trys.pop();
						continue
				}
				d = n.call(e, r)
			} catch (b) {
				d = [6, b], s = 0
			} finally {
				u = f = 0
			}
			if (d[0] & 5) throw d[1];
			return {
				value: d[0] ? d[1] : void 0,
				done: !0
			}
		}
	}
	var lt = 300020;
	var ie = 300030;

	function W(e, n) {
		return e.indexOf(n) !== -1
	}
	var P;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(P || (P = {}));
	var F;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(F || (F = {}));
	var he;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(he || (he = {}));
	var oe;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(oe || (oe = {}));
	var j;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(j || (j = {}));
	var z;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(z || (z = {}));
	var ee;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(ee || (ee = {}));
	var $;
	(function(e) {
		e.EXECUTE = "execute"
	})($ || ($ = {}));
	var Me;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(Me || (Me = {}));

	function Pe(e) {
		return W(["auto", "dark", "light"], e)
	}

	function De(e) {
		return W(["auto", "never"], e)
	}

	function Ue(e) {
		return e > 0 && e < 9e5
	}

	function We(e) {
		return e > 0 && e < 36e4
	}
	var Ut = /^[0-9A-Za-z_-]{3,100}$/;

	function st(e) {
		return Ut.test(e)
	}
	var Wt = /^[a-z0-9_-]{0,32}$/i;

	function Fe(e) {
		return e === void 0 ? !0 : typeof e == "string" && Wt.test(e)
	}
	var Ft = /^[a-z0-9_\-=]{0,255}$/i;

	function ze(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ft.test(e)
	}

	function Ve(e) {
		return W(["normal", "compact", "invisible"], e)
	}

	function Be(e) {
		return W(["auto", "manual", "never"], e)
	}
	var zt = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function qe(e) {
		return e === "auto" || zt.test(e)
	}

	function je(e) {
		return W(["always", "execute", "interaction-only"], e)
	}

	function He(e) {
		return W(["render", "execute"], e)
	}
	var K = "0/0";
	var ft = 300,
		dt = 10;
	var te = "cf-chl-widget-",
		V = "cloudflare-challenge",
		pt = ".cf-turnstile",
		vt = ".cf-challenge",
		mt = ".g-recaptcha",
		yt = "cf_challenge_response",
		_t = "cf-turnstile-response",
		gt = "g-recaptcha-response",
		ht = 8e3;

	function xe(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function xt(e, n) {
		if (!O(e, n)) throw new TypeError("Cannot call a class as a function")
	}

	function H(e, n) {
		return H = Object.setPrototypeOf || function(u, s) {
			return u.__proto__ = s, u
		}, H(e, n)
	}

	function bt(e, n) {
		if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(n && n.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), n && H(e, n)
	}

	function be() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function ce(e, n, r) {
		return be() ? ce = Reflect.construct : ce = function(s, f, y) {
			var p = [null];
			p.push.apply(p, f);
			var m = Function.bind.apply(s, p),
				d = new m;
			return y && H(d, y.prototype), d
		}, ce.apply(null, arguments)
	}

	function J(e) {
		return J = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
		}, J(e)
	}

	function Et(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Ee(e) {
		var n = typeof Map == "function" ? new Map : void 0;
		return Ee = function(u) {
			if (u === null || !Et(u)) return u;
			if (typeof u != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof n != "undefined") {
				if (n.has(u)) return n.get(u);
				n.set(u, s)
			}

			function s() {
				return ce(u, arguments, J(this).constructor)
			}
			return s.prototype = Object.create(u.prototype, {
				constructor: {
					value: s,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), H(s, u)
		}, Ee(e)
	}

	function wt(e, n) {
		return n && (L(n) === "object" || typeof n == "function") ? n : xe(e)
	}

	function St(e) {
		var n = be();
		return function() {
			var u = J(e),
				s;
			if (n) {
				var f = J(this).constructor;
				s = Reflect.construct(u, arguments, f)
			} else s = u.apply(this, arguments);
			return wt(this, s)
		}
	}
	var Tt = function(e) {
		"use strict";
		bt(r, e);
		var n = St(r);

		function r(u, s) {
			xt(this, r);
			var f;
			return f = n.call(this, u), ye(xe(f), "code", void 0), f.name = "TurnstileError", f.code = s, f
		}
		return r
	}(Ee(Error));

	function v(e, n) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Tt(r, n)
	}

	function g(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function we(e) {
		return e.startsWith(te) ? e.substring(te.length) : null
	}

	function G(e) {
		return "".concat(te).concat(e)
	}

	function Vt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			n = document.currentScript;
		if (O(n, HTMLScriptElement) && e.test(n.src)) return n;
		for (var r = document.querySelectorAll("script"), u = 0, s; s = r[u]; u++)
			if (O(s, HTMLScriptElement) && e.test(s.src)) return s
	}

	function At() {
		var e = Vt();
		if (!e) return v("Could not find Turnstile script tag, some features may not be available", 43777), null;
		var n = {
			loadedAsync: !1,
			params: new URLSearchParams
		};
		(e.async || e.defer) && (n.loadedAsync = !0);
		var r = e.src,
			u = r.split("?");
		return u.length > 1 && (n.params = new URLSearchParams(u[1])), n
	}
	var Te = null,
		Se = 0,
		Bt = 900,
		qt = 3;

	function jt(e) {
		Se++;
		var n = !0,
			r = !1,
			u = void 0;
		try {
			for (var s = e[Symbol.iterator](), f; !(n = (f = s.next()).done); n = !0) {
				var y = _e(f.value, 2),
					p = y[0],
					m = y[1],
					d;
				m.watchcat.seq = Se, m.watchcat.lastAckedSeq === 0 && (m.watchcat.lastAckedSeq = Se);
				var b = G(p);
				if (!b) {
					m.watchcat.missingWidgetWarning || (g("Cannot find Widget ".concat(b, ", consider using turnstile.remove() to clean up a widget.")), m.watchcat.missingWidgetWarning = !0);
					continue
				}
				var w = document.querySelector("#".concat(b));
				if (!w) {
					m.watchcat.missingWidgetWarning || (g("Cannot find Widget ".concat(b, ", consider using turnstile.remove() to clean up a widget.")), m.watchcat.missingWidgetWarning = !0);
					continue
				}
				if ((m.isExecuting || !m.isInitialized || m.isInitialized && !m.isStale && !m.isExecuted) && m.watchcat.lastAckedSeq !== 0 && m.watchcat.lastAckedSeq < m.watchcat.seq - 1 - qt) {
					m.watchcat.lastAckedSeq = 0, m.watchcat.seq = 0, m.isExecuting = !1, console.log("Turnstile Widget seem to have crashed: ", p), window.postMessage({
						source: V,
						widgetId: p,
						code: ie,
						event: "fail",
						rcV: m.rcV
					}, "*");
					continue
				}(d = w.contentWindow) === null || d === void 0 || d.postMessage({
					source: V,
					widgetId: p,
					seq: Se,
					event: "meow"
				}, "*")
			}
		} catch (T) {
			r = !0, u = T
		} finally {
			try {
				!n && s.return != null && s.return()
			} finally {
				if (r) throw u
			}
		}
	}

	function It(e) {
		Te === null && (Te = setInterval(function() {
			jt(e)
		}, Bt))
	}

	function Rt(e) {
		Te !== null && e.size === 0 && clearInterval(Te)
	}

	function Ge(e) {
		var n = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && n.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && n.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), n.size !== 0) return n.toString()
	}

	function Ye(e, n) {
		var r = "https://challenges.cloudflare.com";
		if (n) {
			var u;
			r = (u = e["base-url"]) !== null && u !== void 0 ? u : r
		}
		return r
	}

	function Xe(e, n, r, u, s, f, y) {
		var p = Ye(r, s),
			m = f ? "h/".concat(f, "/") : "",
			d = y ? "?".concat(y) : "";
		return "".concat(p, "/cdn-cgi/challenge-platform/").concat(m, "turnstile/if/ov2/av0/rcv").concat(u, "/").concat(e, "/").concat(n, "/").concat(r.theme, "/").concat(r.size).concat(d)
	}
	var Je = !1,
		h = {
			turnstileLoadInitTime: +new Date,
			isRecaptchaCompatibilityMode: !1,
			scriptWasLoadedAsync: !1,
			isReady: !1,
			widgetMap: new Map,
			lastWidgetIdx: 0
		};

	function Qe(e) {
		Lt(e, "")
	}

	function Nt() {
		var e = [pt, vt];
		h.isRecaptchaCompatibilityMode && e.push(mt), document.querySelectorAll(e.join(", ")).forEach(function(n) {
			return et.render(n)
		})
	}
	var Ze = [];

	function Ot() {
		h.isReady = !0;
		var e = !0,
			n = !1,
			r = void 0;
		try {
			for (var u = Ze[Symbol.iterator](), s; !(e = (s = u.next()).done); e = !0) {
				var f = s.value;
				f()
			}
		} catch (y) {
			n = !0, r = y
		} finally {
			try {
				!e && u.return != null && u.return()
			} finally {
				if (n) throw r
			}
		}
	}

	function Ht(e, n) {
		var r, u = Ye(n.params, Je),
			s = "h/".concat("g", "/"),
			f = document.getElementById(e);
		if (!f) {
			v("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			return
		}
		var y = document.createElement("div");
		y.style.position = "fixed", y.style.zIndex = "21474836419";
		var p = document.createElement("div");
		p.className = "cf-turnstile-feedback", p.id = "cf-fr-id", p.style.borderColor = "#000000", p.style.width = "450px", p.style.height = "340px", p.style.position = "absolute", p.style.zIndex = "21474836420", p.style.borderWidth = "1px", p.style.borderColor = "#000", p.style.borderStyle = "solid", p.style.backgroundColor = "#ffffff", p.style.borderRadius = "10px", p.style.left = "52px", p.style.top = "-91px", p.style.overflow = "hidden";
		var m = document.createElement("iframe");
		m.id = e + "-fr", m.setAttribute("src", "".concat(u, "/cdn-cgi/challenge-platform/").concat(s, "feedback-reports/").concat(we(e))), m.setAttribute("allow", "cross-origin-isolated; fullscreen"), m.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), m.setAttribute("scrolling", "no"), m.style.width = "100%", m.style.height = "100%", m.style.overflow = "hidden";
		var d = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		d.style.position = "absolute", d.style.width = "26px", d.style.height = "26px", d.style.zIndex = "21474836421", d.style.cursor = "pointer", d.style.right = "2px", d.style.top = "5px", d.setAttribute("width", "26"), d.setAttribute("height", "26"), d.addEventListener("click", function() {
			var M;
			(M = y.parentNode) === null || M === void 0 || M.removeChild(y)
		});
		var b = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		b.setAttribute("ry", "12"), b.setAttribute("rx", "12"), b.setAttribute("cy", "12"), b.setAttribute("cx", "12"), b.setAttribute("fill", "#aaaaaa"), b.setAttribute("stroke-width", "0"), d.appendChild(b);
		var w = document.createElementNS("http://www.w3.org/2000/svg", "line");
		w.setAttribute("stroke-width", "3"), w.setAttribute("stroke", "#fff"), w.setAttribute("fill", "none"), w.setAttribute("x1", "6"), w.setAttribute("x2", "18"), w.setAttribute("y1", "18"), w.setAttribute("y2", "5"), d.appendChild(w);
		var T = document.createElementNS("http://www.w3.org/2000/svg", "line");
		T.setAttribute("stroke-width", "3"), T.setAttribute("stroke", "#fff"), T.setAttribute("fill", "none"), T.setAttribute("x1", "6"), T.setAttribute("x2", "18"), T.setAttribute("y1", "5"), T.setAttribute("y2", "18"), d.appendChild(T), p.appendChild(m), p.appendChild(d), y.appendChild(p), (r = f.parentNode) === null || r === void 0 || r.appendChild(y)
	}

	function Lt(e, n) {
		var r = document.getElementById("".concat(e, "_response"));
		r !== null && O(r, HTMLInputElement) && (r.value = n);
		var u = document.getElementById("".concat(e, "_legacy_response"));
		if (u !== null && O(u, HTMLInputElement) && (u.value = n), h.isRecaptchaCompatibilityMode) {
			var s = document.getElementById("".concat(e, "_g_response"));
			s !== null && O(s, HTMLInputElement) && (s.value = n)
		}
	}

	function $e(e, n) {
		var r = n.params,
			u = r.size,
			s = u === void 0 ? "normal" : u,
			f = n.mode;
		switch (f) {
			case P.NON_INTERACTIVE:
			case P.MANAGED:
				switch (s) {
					case F.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case F.INVISIBLE:
						v('Invalid value for parameter "size", expected "'.concat(F.COMPACT, '" or "').concat(F.NORMAL, '", got "').concat(s, '"'), 2817);
					case F.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case P.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				v('Invalid value for parameter "mode", expected "'.concat(P.NON_INTERACTIVE, '", "').concat(P.MANAGED, '" or "').concat(P.INVISIBLE, '", got "').concat(f, '"'), 2818);
				return
		}
	}

	function Ct(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Gt(e, n) {
		var r = n.get("turnstile_iframe_alt");
		r && (e.title = r)
	}

	function Yt(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Xt(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function kt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var et = function() {
		function e(l, o, t, c) {
			return n.apply(this, arguments)
		}

		function n() {
			return n = at(function(l, o, t, c) {
				var i, a, _, x, A, E, S, k, N, B;
				return ge(this, function(I) {
					switch (I.label) {
						case 0:
							if (i = l.params.sitekey, a = kt(), !a) return g("Cannot determine Turnstile's embedded location, aborting clearance redemption."), u(l, o, !1), [2];
							_ = "h/".concat("g", "/"), x = new URL(a), A = "https", E = "", S = "".concat(A, "://").concat(x.host, "/cdn-cgi/challenge-platform/").concat(_, "rc/").concat(c).concat(E), I.label = 1;
						case 1:
							return I.trys.push([1, 6, , 7]), [4, fetch(S, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: i,
									secondaryToken: t
								})
							})];
						case 2:
							return k = I.sent(), k.status === 200 ? [3, 3] : (g("Cannot determine Turnstile's embedded location, aborting clearance redemption."), u(l, o, !1), [3, 5]);
						case 3:
							return [4, k.json()];
						case 4:
							if (N = I.sent(), "status" in N && N.status === "redeemed") return u(l, o, !0), [2];
							I.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return B = I.sent(), g("Error contacting Turnstile, aborting clearance remdeption."), u(l, o, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), n.apply(this, arguments)
		}

		function r(l, o, t) {
			if (l.params.retry === oe.AUTO || t) {
				l.isExecuted && (l.msgQueue.push($.EXECUTE), l.isExecuted = !0, l.isExecuting = !0);
				var c, i = t ? 0 : 1e3 * 2 + ((c = l.params["retry-interval"]) !== null && c !== void 0 ? c : 0);
				l.retryTimeout = window.setTimeout(function() {
					b(o)
				}, i)
			}
		}

		function u(l, o, t) {
			if (l.response === void 0) {
				v("[Internal Error] Widget was completed but no response was given", 1362);
				return
			}
			l.isExecuting = !1, Lt(o, l.response);
			var c = l.cbSuccess;
			c && c(l.response, t)
		}

		function s(l) {
			if (!l) return [];
			for (var o = l.attributes, t = o.length, c = new Array(t), i = 0; i < t; i++) c[i] = o[i].name;
			return c
		}
		var f = function(o) {
			var t = o.data;
			if (t.source === V) {
				if (!Yt(o)) {
					g("Ignored message from wrong origin: " + o.origin);
					return
				}
				if (!(!t.widgetId || !h.widgetMap.has(t.widgetId))) {
					var c = G(t.widgetId),
						i = h.widgetMap.get(t.widgetId);
					if (!(!c || !i)) switch (t.event) {
						case "init": {
							var a = document.getElementById(c);
							if (!a) {
								v("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3074);
								return
							}
							i.mode = t.mode, i.mode === P.INVISIBLE && i.params["refresh-expired"] === j.MANUAL && g("refresh-expired=manual is impossible in invisible mode, consider using '".concat(j.AUTO, "' or '").concat(j.NEVER, "'")), i.params.appearance === z.ALWAYS || i.isExecuting && i.params.appearance === z.EXECUTE ? $e(a, i) : Ct(a), a.style.display = "";
							break
						}
						case "translationInit": {
							var _ = document.getElementById(c);
							if (!_) {
								v("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3074);
								return
							}
							var x = new Map;
							Object.keys(t.translationData).forEach(function(U) {
								x.set(U, t.translationData[U])
							}), Gt(_, x);
							break
						}
						case "reject": {
							var A = document.getElementById(c);
							if (i.isExecuting = !1, !A) {
								v("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3075);
								return
							}
							if (t.reason === "outdated_browser") {
								var E = i.cbUnsupported;
								E && E()
							}
							break
						}
						case "food": {
							i.watchcat && t.seq > i.watchcat.lastAckedSeq && (i.watchcat.lastAckedSeq = t.seq);
							break
						}
						case "complete": {
							i.rcV = K, i.response = t.token, t.sToken ? e(i, c, t.sToken, t.chlId) : u(i, c, !1);
							break
						}
						case "fail": {
							t.rcV && (i.rcV = t.rcV), t.cfChlOut && (i.cfChlOut = t.cfChlOut), t.cfChlOutS && (i.cfChlOutS = t.cfChlOutS), i.isExecuting = !1, i.isInitialized = !0, Qe(c);
							var S = i.cbError;
							if (S) {
								var k;
								S(String((k = t.code) !== null && k !== void 0 ? k : lt)) || (t.code && g("Error: ".concat(t.code)), r(i, c, t.code === ie))
							} else t.code ? (r(i, c, t.code === ie), v("Error: ".concat(t.code), 3076)) : r(i, c, !1);
							break
						}
						case "feedbackInit": {
							Ht(c, i);
							break
						}
						case "requestFeedbackData": {
							var N, B = document.querySelector("#".concat(c));
							if (!B) {
								v("Received state for an unknown widget: ".concat(t.widgetId), 3078);
								return
							}(N = B.contentWindow) === null || N === void 0 || N.postMessage({
								source: V,
								widgetId: t.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var I, Z = document.querySelector("#".concat(c, "-fr"));
							if (!Z) {
								v("Received state for an unknown widget: ".concat(t.widgetId), 3078);
								return
							}(I = Z.contentWindow) === null || I === void 0 || I.postMessage({
								source: V,
								widgetId: t.widgetId,
								event: "feedbackData",
								rayId: t.rayId,
								rcV: t.rcV,
								cfChlOut: i.cfChlOut,
								cfChlOutS: i.cfChlOutS,
								sitekey: t.sitekey
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var Y, ne, ue = document.querySelector("#".concat(c, "-fr"));
							if (!ue) {
								v("Received state for an unknown widget: ".concat(t.widgetId), 3078);
								return
							}(ne = ue.parentElement) === null || ne === void 0 || (Y = ne.parentElement) === null || Y === void 0 || Y.remove();
							break
						}
						case "tokenExpired": {
							var Ie = t.token;
							i.isExpired = !0;
							var le = i.cbExpired;
							le && le(Ie), i.params["refresh-expired"] === j.AUTO && !i.isResetting && b(c);
							break
						}
						case "interactiveTimeout": {
							i.rcV = K, Qe(c);
							var se = i.cbTimeout;
							se && se();
							break
						}
						case "refreshRequest": {
							i.rcV = K, b(c);
							break
						}
						case "interactiveBegin": {
							var fe = document.getElementById(c);
							if (!fe) {
								v("Cannot layout widget, Element not found (#".concat(c, ")."), 3076);
								return
							}
							var de = i.cbBeforeInteractive;
							de && de(), i.params.appearance === z.INTERACTION_ONLY && $e(fe, i);
							break
						}
						case "interactiveEnd": {
							var ae = document.getElementById(c);
							if (!ae) {
								v("Cannot unlayout widget, Element not found (#".concat(c, ")."), 3077);
								return
							}
							var q = i.cbAfterInteractive;
							q && q();
							break
						}
						case "widgetStale": {
							i.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var X, R = document.querySelector("#".concat(c));
							if (!R) {
								v("Received state for an unknown widget: ".concat(t.widgetId), 3078);
								return
							}
							i.isResetting = !1;
							var Q = {};
							(X = R.contentWindow) === null || X === void 0 || X.postMessage(Ne({
								source: V,
								widgetId: t.widgetId,
								event: "extraParams",
								action: i.action,
								cData: i.cData,
								chlPageData: i.chlPageData,
								rcV: i.rcV,
								ch: "74bd6362",
								url: kt(),
								retry: i.params.retry,
								"expiry-interval": i.params["expiry-interval"],
								"retry-interval": i.params["retry-interval"],
								"refresh-expired": i.params["refresh-expired"],
								language: i.params.language,
								execution: i.params.execution,
								appearance: i.params.appearance,
								wPr: {
									"w.iW": window.innerWidth,
									"ht.atrs": s(document.body.parentNode)
								},
								turnstileAge: +Date.now() - h.turnstileLoadInitTime,
								widgetAge: +Date.now() - i.widgetStartTime
							}, Q), "*"), m(i, t.widgetId, R), i.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		window.addEventListener("message", f);

		function y() {
			var l = "abcdefghijklmnopqrstuvwxyz0123456789",
				o = l.length,
				t;
			do {
				t = "";
				for (var c = 0; c < 5; c++) t += l.charAt(Math.floor(Math.random() * o))
			} while (h.widgetMap.has(t));
			return t
		}

		function p(l) {
			if (typeof l == "string") {
				var o = we(l);
				if (o && h.widgetMap.has(o)) return o;
				try {
					var t = document.querySelector(l);
					return t ? p(t) : null
				} catch (i) {
					return null
				}
			}
			if (O(l, HTMLElement)) {
				var c = l.querySelector("iframe");
				return c ? we(c.id) : null
			}
			return l || h.widgetMap.size === 0 ? null : h.widgetMap.keys().next().value
		}

		function m(l, o, t) {
			for (; l.msgQueue.length;) {
				var c, i = l.msgQueue.pop();
				(c = t.contentWindow) === null || c === void 0 || c.postMessage({
					source: V,
					widgetId: o,
					event: i
				}, "*")
			}
		}

		function d(l, o) {
			if (o) {
				var t = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
					c = [],
					i = !0,
					a = !1,
					_ = void 0;
				try {
					for (var x = t[Symbol.iterator](), A; !(i = (A = x.next()).done); i = !0) {
						var E = A.value;
						o[E] && o[E] !== l.params[E] && c.push(E)
					}
				} catch (S) {
					a = !0, _ = S
				} finally {
					try {
						!i && x.return != null && x.return()
					} finally {
						if (a) throw _
					}
				}
				if (c.length !== 0) {
					v("The parameters ".concat(t.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(c.join(",")), 3618);
					return
				}
				if (o.action) {
					if (!Fe(o.action)) {
						v('Invalid input for optional parameter "action", got "'.concat(o.action, '"'), 3604);
						return
					}
					l.action = o.action
				}
				if (o.cData) {
					if (!ze(o.cData)) {
						v('Invalid input for optional parameter "cData", got "'.concat(o.cData, '"'), 3605);
						return
					}
					l.cData = o.cData
				}
				o["after-interactive-callback"] && (l.cbAfterInteractive = o["after-interactive-callback"]), o["before-interactive-callback"] && (l.cbBeforeInteractive = o["before-interactive-callback"]), o.callback && (l.cbSuccess = o.callback), o["expired-callback"] && (l.cbExpired = o["expired-callback"]), o["timeout-callback"] && (l.cbTimeout = o["timeout-callback"]), o["error-callback"] && (l.cbError = o["error-callback"]), o["unsupported-callback"] && (l.cbUnsupported = o["unsupported-callback"]), o.chlPageData && (l.chlPageData = o.chlPageData)
			}
		}

		function b(l) {
			var o = p(l);
			if (!o) {
				v("Nothing to reset found for provided container", 3329);
				return
			}
			var t = h.widgetMap.get(o);
			if (t) {
				t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isExpired = !1, t.isExecuting = !1, t.isStale = !1, t.isInitialized = !1, t.watchcat.lastAckedSeq = 0, t.watchcat.seq = 0, t.params.execution === ee.RENDER && (t.msgQueue.push($.EXECUTE), t.isExecuted = !0, t.isExecuting = !0);
				var c = G(o),
					i = document.querySelector("#".concat(c));
				if (!c || !i) {
					v("Widget ".concat(o, " to reset was not found."), 3330);
					return
				}
				if (t.params.appearance === z.INTERACTION_ONLY && Ct(i), t.params.sitekey === null) {
					v("Unexpected Error: Sitekey is null", 3347);
					return
				}
				var a;
				i.src = Xe(o, t.params.sitekey, t.params, (a = t.rcV) !== null && a !== void 0 ? a : K, Je, "g", Ge(t)), Qe(c), t.retryTimeout && window.clearTimeout(t.retryTimeout)
			} else {
				v("Widget ".concat(o, " to reset was not found."), 3331);
				return
			}
		}

		function w(l) {
			var o, t = p(l);
			if (!t || !h.widgetMap.has(t)) {
				g("Nothing to remove found for the provided container");
				return
			}
			var c = G(t),
				i = ["iframe#".concat(c), "input#".concat(c, "_response"), "input#".concat(c, "_legacy_response"), "input#".concat(c, "_g_response")];
			document.querySelectorAll(i.join(", ")).forEach(function(_) {
				return _.remove()
			});
			var a = (o = h.widgetMap.get(t)) === null || o === void 0 ? void 0 : o.retryTimeout;
			a && window.clearTimeout(a), h.widgetMap.delete(t), Rt(h.widgetMap)
		}

		function T(l, o) {
			var t;
			if (typeof l == "string") try {
					var c = document.querySelector(l);
					if (!c) {
						v('Unable to find a container for "'.concat(l, '"'), 3585);
						return
					}
					t = c
				} catch (Kt) {
					v('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(l, '"'), 3586);
					return
				} else if (O(l, HTMLElement)) t = l;
				else {
					v('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
					return
				} var i = Qt(t);
			if (i) {
				var a = Object.assign(i, o),
					_ = a.action,
					x = a.cData,
					A = a.chlPageData,
					E = a.sitekey,
					S;
				a.theme = (S = a.theme) !== null && S !== void 0 ? S : he.AUTO;
				var k;
				a.retry = (k = a.retry) !== null && k !== void 0 ? k : oe.AUTO;
				var N;
				a.execution = (N = a.execution) !== null && N !== void 0 ? N : ee.RENDER;
				var B;
				a.appearance = (B = a.appearance) !== null && B !== void 0 ? B : z.ALWAYS;
				var I;
				a["retry-interval"] = +((I = a["retry-interval"]) !== null && I !== void 0 ? I : ht);
				var Z;
				a["expiry-interval"] = +((Z = a["expiry-interval"]) !== null && Z !== void 0 ? Z : (ft - dt) * 1e3);
				var Y;
				a.size = (Y = a.size) !== null && Y !== void 0 ? Y : F.NORMAL;
				var ne = a.callback,
					ue = a["expired-callback"],
					Ie = a["timeout-callback"],
					le = a["after-interactive-callback"],
					se = a["before-interactive-callback"],
					fe = a["error-callback"],
					de = a["unsupported-callback"];
				if (typeof E != "string") {
					v('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof E == "undefined" ? "undefined" : L(E), '"'), 3588);
					return
				}
				if (!st(E)) {
					v('Invalid input for parameter "sitekey", got "'.concat(E, '"'), 3589);
					return
				}
				if (!Ve(a.size)) {
					v('Invalid type for parameter "size", expected normal|compact, got "'.concat(a.size, '" ').concat(L(a.size)), 3590);
					return
				}
				if (!Pe(a.theme)) {
					v('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(a.theme, '" ').concat(L(a.theme)), 3591);
					return
				}
				if (!De(a.retry)) {
					v('Invalid type for parameter "retry", expected never|auto, got "'.concat(a.retry, '" ').concat(L(a.retry)), 3592);
					return
				}
				if (a.language || (a.language = "auto"), !qe(a.language)) {
					v('Invalid language value: "'.concat(a.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
					return
				}
				if (!je(a.appearance)) {
					v('Unknown appearance value: "'.concat(a.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
					return
				}
				if (!He(a.execution)) {
					v('Unknown execution value: "'.concat(a.execution, ", expected either: 'render' or 'execute'."), 3601);
					return
				}
				if (!Ue(a["retry-interval"])) {
					v('Invalid retry-interval value: "'.concat(a["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
					return
				}
				if (!We(a["expiry-interval"])) {
					v('Invalid expiry-interval value: "'.concat(a["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					return
				}
				var ae, q = (ae = a["refresh-expired"]) !== null && ae !== void 0 ? ae : j.AUTO;
				if (Be(q)) a["refresh-expired"] = q;
				else {
					v('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(q, '" ').concat(typeof q == "undefined" ? "undefined" : L(q)), 3603);
					return
				}
				var X = t.getElementsByTagName("iframe")[0];
				X != null && X.id.startsWith(te) && w(t);
				var R = document.createElement("iframe");
				if (!Fe(_)) {
					v('Invalid input for optional parameter "action", got "'.concat(_, '"'), 3604);
					return
				}
				if (!ze(x)) {
					v('Invalid input for optional parameter "cData", got "'.concat(x, '"'), 3605);
					return
				}
				var Q = y(),
					U = G(Q);
				if (!(!Q || !U)) {
					var tt = [],
						Re = a.execution === ee.RENDER;
					Re && tt.push($.EXECUTE), h.lastWidgetIdx++;
					var Mt = +new Date,
						Pt = {};
					h.widgetMap.set(Q, Ne({
						idx: h.lastWidgetIdx,
						action: _,
						cData: x,
						chlPageData: A,
						cbSuccess: ne,
						cbError: fe,
						cbExpired: ue,
						cbTimeout: Ie,
						cbUnsupported: de,
						cbAfterInteractive: le,
						cbBeforeInteractive: se,
						params: a,
						isStale: !1,
						isExpired: !1,
						isExecuting: Re,
						isResetting: !1,
						isExecuted: Re,
						isInitialized: !1,
						msgQueue: tt,
						rcV: K,
						widgetStartTime: Mt,
						watchcat: {
							seq: 0,
							lastAckedSeq: 0,
							missingWidgetWarning: !1
						}
					}, Pt)), It(h.widgetMap);
					var rt = h.widgetMap.get(Q);
					if (!rt) {
						v("Turnstile Initialization Error ", 3606);
						return
					}
					R.style.display = "none", R.style.border = "none", R.style.overflow = "hidden", R.setAttribute("src", Xe(Q, E, a, K, Je, "g", Ge(rt))), R.setAttribute("allow", "cross-origin-isolated; fullscreen"), R.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), R.id = U;
					var Oe;
					R.tabIndex = (Oe = a.tabindex) !== null && Oe !== void 0 ? Oe : 0, R.title = "Widget containing a Cloudflare security challenge", t.appendChild(R);
					var Ce, Dt = (Ce = a["response-field"]) !== null && Ce !== void 0 ? Ce : !0;
					if (Dt) {
						var pe = document.createElement("input");
						pe.type = "hidden";
						var ke;
						if (pe.name = (ke = a["response-field-name"]) !== null && ke !== void 0 ? ke : _t, pe.id = "".concat(U, "_response"), t.appendChild(pe), typeof a["response-field-name"] != "string" && Xt(E)) {
							var ve = document.createElement("input");
							ve.type = "hidden", ve.name = yt, ve.id = "".concat(U, "_legacy_response"), t.appendChild(ve)
						}
					}
					if (h.isRecaptchaCompatibilityMode) {
						var me = document.createElement("input");
						me.type = "hidden", me.name = gt, me.id = "".concat(U, "_g_response"), t.appendChild(me)
					}
					return U
				}
			}
		}

		function M() {
			var l, o = -1,
				t = !0,
				c = !1,
				i = void 0;
			try {
				for (var a = h.widgetMap[Symbol.iterator](), _; !(t = (_ = a.next()).done); t = !0) {
					var x = _e(_.value, 2),
						A = x[0],
						E = x[1];
					o < E.idx && (l = A, o = E.idx)
				}
			} catch (S) {
				c = !0, i = S
			} finally {
				try {
					!t && a.return != null && a.return()
				} finally {
					if (c) throw i
				}
			}
			if (o === -1) {
				v("Could not find widget", 43778);
				return
			}
			return l
		}
		return {
			ready: function(o) {
				if (h.scriptWasLoadedAsync && (g("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), v("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof o != "function" && v('turnstile.ready() expected a "function" argument, got "'.concat(typeof o == "undefined" ? "undefined" : L(o), '"'), 3841), o(), typeof o != "function" && v('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), h.isReady) {
					o();
					return
				}
				Ze.push(o)
			},
			implicitRender: Nt,
			execute: function(o, t) {
				var c = p(o);
				if (!c) {
					if (t === void 0) {
						v("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var i = T(o, t);
					if (!i) {
						v("Failed to render widget", 43522);
						return
					}
					c = i
				}
				var a = h.widgetMap.get(c);
				if (a) {
					d(a, t);
					var _ = G(c);
					if (a.isExecuting) {
						g("Call to execute() on a widget that is already executing (".concat(_, "), consider using reset() before execute()"));
						return
					} else a.isExecuting = !0;
					if (a.response) {
						a.isExecuting = !1, g("Call to execute() on a widget that was already executed (".concat(_, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), a.cbSuccess && a.cbSuccess(a.response, !1);
						return
					}
					a.isExpired && g("Call to execute on a expired-widget (".concat(_, "), consider using reset() before")), a.isStale && (b(_), a.isExecuting = !0), a.msgQueue.push($.EXECUTE), a.isExecuted = !0;
					var x = document.querySelector("#".concat(_));
					if (!x) {
						a.isExecuting = !1, v("Widget ".concat(_, " to execute was not found"), 43522);
						return
					}
					a.isInitialized && m(a, c, x), a.isInitialized && a.params.appearance === z.EXECUTE && $e(x, a)
				}
			},
			render: T,
			reset: b,
			remove: w,
			getResponse: function(o) {
				var t;
				if (typeof o == "undefined") {
					var c = M();
					if (c) {
						var i, a = h.widgetMap.get(c);
						return a != null && a.isExpired && g("Call to getResponse on a widget that expired, consider refreshing the widget."), (i = h.widgetMap.get(c)) === null || i === void 0 ? void 0 : i.response
					} else v("Could not find a widget", 43794)
				}
				var _ = p(o);
				if (!_) {
					v("Could not find widget for provided container", 43778);
					return
				}
				return (t = h.widgetMap.get(_)) === null || t === void 0 ? void 0 : t.response
			},
			isExpired: function(o) {
				var t;
				if (typeof o == "undefined") {
					var c = M();
					if (c) {
						var i, a;
						return (a = (i = h.widgetMap.get(c)) === null || i === void 0 ? void 0 : i.isExpired) !== null && a !== void 0 ? a : !1
					} else v("Could not find a widget", 43794)
				}
				var _ = p(o);
				if (!_) return v("Could not find widget for provided container", 43778), !1;
				var x;
				return (x = (t = h.widgetMap.get(_)) === null || t === void 0 ? void 0 : t.isExpired) !== null && x !== void 0 ? x : !1
			}
		}
	}();

	function Qt(e) {
		var n = e.getAttribute("data-sitekey"),
			r = {
				sitekey: n
			},
			u = e.getAttribute("data-tabindex");
		u && (r.tabindex = parseInt(u, 10));
		var s = e.getAttribute("data-theme");
		s && (Pe(s) ? r.theme = s : g('Unknown data-theme value: "'.concat(s, '"')));
		var f = e.getAttribute("data-size");
		if (f && (Ve(f) ? r.size = f : g('Unknown data-size value: "'.concat(f, '"'))), 0) var y;
		var p = e.getAttribute("data-action");
		typeof p == "string" && (r.action = p);
		var m = e.getAttribute("data-cdata");
		typeof m == "string" && (r.cData = m);
		var d = e.getAttribute("data-retry");
		d && (De(d) ? r.retry = d : g('Invalid data-retry value: "'.concat(d, ", expected either 'never' or 'auto'\"")));
		var b = e.getAttribute("data-retry-interval");
		if (b) {
			var w = parseInt(b, 10);
			Ue(w) ? r["retry-interval"] = w : g('Invalid data-retry-interval value: "'.concat(b, ', expected an integer value > 0 and < 900000"'))
		}
		var T = e.getAttribute("data-expiry-interval");
		if (T) {
			var M = parseInt(T, 10);
			We(M) ? r["expiry-interval"] = M : g('Invalid data-expiry-interval value: "'.concat(M, ', expected an integer value > 0 and < 360000"'))
		}
		var l = e.getAttribute("data-refresh-expired");
		l && (Be(l) ? r["refresh-expired"] = l : g('Unknown data-refresh-expired value: "'.concat(l, ", expected either: 'never', 'auto' or 'manual'.")));
		var o = e.getAttribute("data-language");
		o && (qe(o) ? r.language = o : g('Invalid data-language value: "'.concat(o, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));

		function t(E) {
			var S = e.getAttribute(E);
			return S && window[S] ? window[S] : void 0
		}
		var c = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		c.forEach(function(E) {
			r[E] = t("data-".concat(E))
		});
		var i, a = (i = e.getAttribute("data-response-field")) !== null && i !== void 0 ? i : "true";
		r["response-field"] = a === "true";
		var _ = e.getAttribute("data-response-field-name");
		_ && (r["response-field-name"] = _);
		var x = e.getAttribute("data-execution");
		x && (He(x) ? r.execution = x : g('Unknown data-execution value: "'.concat(x, ", expected either: 'render' or 'execute'.")));
		var A = e.getAttribute("data-appearance");
		return A && (je(A) ? r.appearance = A : g('Unknown data-appearance value: "'.concat(A, ", expected either: 'always', 'execute', or 'interaction-only'."))), r
	}
	var C = At(),
		Ke;
	h.scriptWasLoadedAsync = (Ke = C == null ? void 0 : C.loadedAsync) !== null && Ke !== void 0 ? Ke : !1;
	C != null && C.params && (re = C.params.get("compat"), (re == null ? void 0 : re.toLowerCase()) === "recaptcha" ? window.grecaptcha ? g("grecaptcha is already defined. The compatibility layer will not be enabled") : (g("Compatibility layer enabled"), h.isRecaptchaCompatibilityMode = !0, window.grecaptcha = et) : re !== null && g('Unknown value for api.js?compat: "'.concat(re, '", ignoring')), C.params.forEach(function(e, n) {
		W(["onload", "compat", "render"], n) || g('Unknown parameter passed to api.js: "?'.concat(n, '=...", ignoring'))
	}), D = C.params.get("onload"), D && setTimeout(function() {
		typeof window[D] == "function" ? window[D]() : (g("Unable to find onload callback '".concat(D, "' immediately after loading, expected 'function', got '").concat(L(window[D]), "'")), setTimeout(function() {
			typeof window[D] == "function" ? window[D]() : g("Unable to find onload callback '".concat(D, "' after 1 second, expected 'function', got '").concat(L(window[D]), "'"))
		}, 1e3))
	}, 0));
	var re, D, $t = "turnstile" in window;
	$t ? g("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = et, (C == null || (Ae = C.params) === null || Ae === void 0 ? void 0 : Ae.get("render")) !== "explicit" && Ze.push(Nt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Ot, 0) : window.addEventListener("DOMContentLoaded", Ot));
	var Ae;
})();