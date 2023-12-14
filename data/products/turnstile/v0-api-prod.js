"use strict";
(function() {
	function Ze(e, n, c, u, l, _, m) {
		try {
			var s = e[_](m),
				d = s.value
		} catch (g) {
			c(g);
			return
		}
		s.done ? n(d) : Promise.resolve(d).then(u, l)
	}

	function et(e) {
		return function() {
			var n = this,
				c = arguments;
			return new Promise(function(u, l) {
				var _ = e.apply(n, c);

				function m(d) {
					Ze(_, u, l, m, s, "next", d)
				}

				function s(d) {
					Ze(_, u, l, m, s, "throw", d)
				}
				m(void 0)
			})
		}
	}

	function O(e, n) {
		return n != null && typeof Symbol != "undefined" && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](e) : O(e, n)
	}

	function ye(e, n, c) {
		return n in e ? Object.defineProperty(e, n, {
			value: c,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[n] = c, e
	}

	function Pe(e) {
		for (var n = 1; n < arguments.length; n++) {
			var c = arguments[n] != null ? arguments[n] : {},
				u = Object.keys(c);
			typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(c).filter(function(l) {
				return Object.getOwnPropertyDescriptor(c, l).enumerable
			}))), u.forEach(function(l) {
				ye(e, l, c[l])
			})
		}
		return e
	}

	function tt(e) {
		if (Array.isArray(e)) return e
	}

	function rt(e, n) {
		var c = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (c != null) {
			var u = [],
				l = !0,
				_ = !1,
				m, s;
			try {
				for (c = c.call(e); !(l = (m = c.next()).done) && (u.push(m.value), !(n && u.length === n)); l = !0);
			} catch (d) {
				_ = !0, s = d
			} finally {
				try {
					!l && c.return != null && c.return()
				} finally {
					if (_) throw s
				}
			}
			return u
		}
	}

	function nt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function De(e, n) {
		(n == null || n > e.length) && (n = e.length);
		for (var c = 0, u = new Array(n); c < n; c++) u[c] = e[c];
		return u
	}

	function at(e, n) {
		if (e) {
			if (typeof e == "string") return De(e, n);
			var c = Object.prototype.toString.call(e).slice(8, -1);
			if (c === "Object" && e.constructor && (c = e.constructor.name), c === "Map" || c === "Set") return Array.from(c);
			if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return De(e, n)
		}
	}

	function he(e, n) {
		return tt(e) || rt(e, n) || at(e, n) || nt()
	}

	function k(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function ge(e, n) {
		var c = function(v) {
				return function(E) {
					return u([v, E])
				}
			},
			u = function(v) {
				if (_) throw new TypeError("Generator is already executing.");
				for (; d && (d = 0, v[0] && (l = 0)), l;) try {
					if (_ = 1, m && (s = v[0] & 2 ? m.return : v[0] ? m.throw || ((s = m.return) && s.call(m), 0) : m.next) && !(s = s.call(m, v[1])).done) return s;
					switch (m = 0, s && (v = [v[0] & 2, s.value]), v[0]) {
						case 0:
						case 1:
							s = v;
							break;
						case 4:
							return l.label++, {
								value: v[1],
								done: !1
							};
						case 5:
							l.label++, m = v[1], v = [0];
							continue;
						case 7:
							v = l.ops.pop(), l.trys.pop();
							continue;
						default:
							if (s = l.trys, !(s = s.length > 0 && s[s.length - 1]) && (v[0] === 6 || v[0] === 2)) {
								l = 0;
								continue
							}
							if (v[0] === 3 && (!s || v[1] > s[0] && v[1] < s[3])) {
								l.label = v[1];
								break
							}
							if (v[0] === 6 && l.label < s[1]) {
								l.label = s[1], s = v;
								break
							}
							if (s && l.label < s[2]) {
								l.label = s[2], l.ops.push(v);
								break
							}
							s[2] && l.ops.pop(), l.trys.pop();
							continue
					}
					v = n.call(e, l)
				} catch (E) {
					v = [6, E], m = 0
				} finally {
					_ = s = 0
				}
				if (v[0] & 5) throw v[1];
				return {
					value: v[0] ? v[1] : void 0,
					done: !0
				}
			},
			l = {
				label: 0,
				sent: function() {
					if (s[0] & 1) throw s[1];
					return s[1]
				},
				trys: [],
				ops: []
			},
			_, m, s, d;
		return d = {
			next: c(0),
			throw: c(1),
			return: c(2)
		}, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
			return this
		}), d
	}
	var it = 300020;
	var oe = 300030;

	function M(e, n) {
		return e.indexOf(n) !== -1
	}
	var N;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(N || (N = {}));
	var W;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(W || (W = {}));
	var xe;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(xe || (xe = {}));
	var ce;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(ce || (ce = {}));
	var V;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(V || (V = {}));
	var F;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(F || (F = {}));
	var re;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(re || (re = {}));
	var Q;
	(function(e) {
		e.EXECUTE = "execute"
	})(Q || (Q = {}));
	var Ue;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(Ue || (Ue = {}));

	function Me(e) {
		return M(["auto", "dark", "light"], e)
	}

	function We(e) {
		return M(["auto", "never"], e)
	}

	function Fe(e) {
		return e > 0 && e < 9e5
	}

	function ze(e) {
		return e > 0 && e < 36e4
	}
	var Ut = /^[0-9A-Za-z_-]{3,100}$/;

	function ot(e) {
		return Ut.test(e)
	}
	var Mt = /^[a-z0-9_-]{0,32}$/i;

	function Ve(e) {
		return e === void 0 ? !0 : typeof e == "string" && Mt.test(e)
	}
	var Wt = /^[a-z0-9_\-=]{0,255}$/i;

	function qe(e) {
		return e === void 0 ? !0 : typeof e == "string" && Wt.test(e)
	}

	function He(e) {
		return M(["normal", "compact", "invisible"], e)
	}

	function je(e) {
		return M(["auto", "manual", "never"], e)
	}
	var Ft = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Be(e) {
		return e === "auto" || Ft.test(e)
	}

	function Ge(e) {
		return M(["always", "execute", "interaction-only"], e)
	}

	function Ye(e) {
		return M(["render", "execute"], e)
	}
	var $ = "0/0";
	var ct = 300,
		ut = 10;
	var ne = "cf-chl-widget-",
		z = "cloudflare-challenge",
		lt = ".cf-turnstile",
		st = ".cf-challenge",
		ft = ".g-recaptcha",
		dt = "cf_challenge_response",
		pt = "cf-turnstile-response",
		vt = "g-recaptcha-response",
		mt = 8e3;

	function be(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function _t(e, n) {
		if (!O(e, n)) throw new TypeError("Cannot call a class as a function")
	}

	function q(e, n) {
		return q = Object.setPrototypeOf || function(u, l) {
			return u.__proto__ = l, u
		}, q(e, n)
	}

	function yt(e, n) {
		if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(n && n.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), n && q(e, n)
	}

	function Ee() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function ue(e, n, c) {
		return Ee() ? ue = Reflect.construct : ue = function(l, _, m) {
			var s = [null];
			s.push.apply(s, _);
			var d = Function.bind.apply(l, s),
				g = new d;
			return m && q(g, m.prototype), g
		}, ue.apply(null, arguments)
	}

	function J(e) {
		return J = Object.setPrototypeOf ? Object.getPrototypeOf : function(c) {
			return c.__proto__ || Object.getPrototypeOf(c)
		}, J(e)
	}

	function ht(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function we(e) {
		var n = typeof Map == "function" ? new Map : void 0;
		return we = function(u) {
			var l = function() {
				return ue(u, arguments, J(this).constructor)
			};
			if (u === null || !ht(u)) return u;
			if (typeof u != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof n != "undefined") {
				if (n.has(u)) return n.get(u);
				n.set(u, l)
			}
			return l.prototype = Object.create(u.prototype, {
				constructor: {
					value: l,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), q(l, u)
		}, we(e)
	}

	function gt(e, n) {
		return n && (k(n) === "object" || typeof n == "function") ? n : be(e)
	}

	function xt(e) {
		var n = Ee();
		return function() {
			var u = J(e),
				l;
			if (n) {
				var _ = J(this).constructor;
				l = Reflect.construct(u, arguments, _)
			} else l = u.apply(this, arguments);
			return gt(this, l)
		}
	}
	var bt = function(e) {
		"use strict";
		yt(c, e);
		var n = xt(c);

		function c(u, l) {
			_t(this, c);
			var _;
			return _ = n.call(this, u), ye(be(_), "code", void 0), _.name = "TurnstileError", _.code = l, _
		}
		return c
	}(we(Error));

	function p(e, n) {
		var c = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new bt(c, n)
	}

	function x(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Te(e) {
		return e.startsWith(ne) ? e.substring(ne.length) : null
	}

	function H(e) {
		return "".concat(ne).concat(e)
	}
	var Se = null,
		Ae = 0,
		zt = 900,
		Vt = 3;

	function qt(e) {
		Ae++;
		var n = !0,
			c = !1,
			u = void 0;
		try {
			for (var l = e[Symbol.iterator](), _; !(n = (_ = l.next()).done); n = !0) {
				var m = he(_.value, 2),
					s = m[0],
					d = m[1],
					g;
				d.watchcat.seq = Ae, d.watchcat.lastAckedSeq === 0 && (d.watchcat.lastAckedSeq = Ae);
				var v = H(s);
				if (!v) {
					d.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(v, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				var E = document.querySelector("#".concat(v));
				if (!E) {
					d.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(v, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				if ((d.isExecuting || !d.isInitialized || d.isInitialized && !d.isStale && !d.isExecuted) && d.watchcat.lastAckedSeq !== 0 && d.watchcat.lastAckedSeq < d.watchcat.seq - 1 - Vt) {
					d.watchcat.lastAckedSeq = 0, d.watchcat.seq = 0, d.isExecuting = !1, console.log("Turnstile Widget seem to have crashed: ", s), window.postMessage({
						source: z,
						widgetId: s,
						code: oe,
						event: "fail",
						rcV: d.rcV
					}, "*");
					continue
				}(g = E.contentWindow) === null || g === void 0 || g.postMessage({
					source: z,
					widgetId: s,
					seq: Ae,
					event: "meow"
				}, "*")
			}
		} catch (y) {
			c = !0, u = y
		} finally {
			try {
				!n && l.return != null && l.return()
			} finally {
				if (c) throw u
			}
		}
	}

	function Et(e) {
		Se === null && (Se = setInterval(function() {
			qt(e)
		}, zt))
	}

	function wt(e) {
		Se !== null && e.size === 0 && clearInterval(Se)
	}
	var Ht = +new Date,
		Ie = !1,
		Rt = !1;

	function Xe(e) {
		kt(e, "")
	}

	function Ot() {
		var e = [lt, st];
		Ie && e.push(ft), document.querySelectorAll(e.join(", ")).forEach(function(n) {
			return Je.render(n)
		})
	}
	var $e = [],
		Ct = !1;

	function Tt() {
		Ct = !0;
		var e = !0,
			n = !1,
			c = void 0;
		try {
			for (var u = $e[Symbol.iterator](), l; !(e = (l = u.next()).done); e = !0) {
				var _ = l.value;
				_()
			}
		} catch (m) {
			n = !0, c = m
		} finally {
			try {
				!e && u.return != null && u.return()
			} finally {
				if (n) throw c
			}
		}
	}

	function jt(e, n) {
		var c, u = Nt(n.params),
			l = "h/".concat("b", "/"),
			_ = document.getElementById(e);
		if (!_) {
			p("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			return
		}
		var m = document.createElement("div");
		m.style.position = "fixed", m.style.zIndex = "21474836419";
		var s = document.createElement("div");
		s.className = "cf-turnstile-feedback", s.id = "cf-fr-id", s.style.borderColor = "#000000", s.style.width = "450px", s.style.height = "340px", s.style.position = "absolute", s.style.zIndex = "21474836420", s.style.borderWidth = "1px", s.style.borderColor = "#000", s.style.borderStyle = "solid", s.style.backgroundColor = "#ffffff", s.style.borderRadius = "10px", s.style.left = "52px", s.style.top = "-91px", s.style.overflow = "hidden";
		var d = document.createElement("iframe");
		d.id = e + "-fr", d.setAttribute("src", "".concat(u, "/cdn-cgi/challenge-platform/").concat(l, "feedback-reports/").concat(Te(e))), d.setAttribute("allow", "cross-origin-isolated; fullscreen"), d.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), d.setAttribute("scrolling", "no"), d.style.width = "100%", d.style.height = "100%", d.style.overflow = "hidden";
		var g = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		g.style.position = "absolute", g.style.width = "26px", g.style.height = "26px", g.style.zIndex = "21474836421", g.style.cursor = "pointer", g.style.right = "2px", g.style.top = "5px", g.setAttribute("width", "26"), g.setAttribute("height", "26"), g.addEventListener("click", function() {
			var P;
			(P = m.parentNode) === null || P === void 0 || P.removeChild(m)
		});
		var v = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		v.setAttribute("ry", "12"), v.setAttribute("rx", "12"), v.setAttribute("cy", "12"), v.setAttribute("cx", "12"), v.setAttribute("fill", "#aaaaaa"), v.setAttribute("stroke-width", "0"), g.appendChild(v);
		var E = document.createElementNS("http://www.w3.org/2000/svg", "line");
		E.setAttribute("stroke-width", "3"), E.setAttribute("stroke", "#fff"), E.setAttribute("fill", "none"), E.setAttribute("x1", "6"), E.setAttribute("x2", "18"), E.setAttribute("y1", "18"), E.setAttribute("y2", "5"), g.appendChild(E);
		var y = document.createElementNS("http://www.w3.org/2000/svg", "line");
		y.setAttribute("stroke-width", "3"), y.setAttribute("stroke", "#fff"), y.setAttribute("fill", "none"), y.setAttribute("x1", "6"), y.setAttribute("x2", "18"), y.setAttribute("y1", "5"), y.setAttribute("y2", "18"), g.appendChild(y), s.appendChild(d), s.appendChild(g), m.appendChild(s), (c = _.parentNode) === null || c === void 0 || c.appendChild(m)
	}

	function kt(e, n) {
		var c = document.getElementById("".concat(e, "_response"));
		c !== null && O(c, HTMLInputElement) && (c.value = n);
		var u = document.getElementById("".concat(e, "_legacy_response"));
		if (u !== null && O(u, HTMLInputElement) && (u.value = n), Ie) {
			var l = document.getElementById("".concat(e, "_g_response"));
			l !== null && O(l, HTMLInputElement) && (l.value = n)
		}
	}

	function Qe(e, n) {
		var c = n.params,
			u = c.size,
			l = u === void 0 ? "normal" : u,
			_ = n.mode;
		switch (_) {
			case N.NON_INTERACTIVE:
			case N.MANAGED:
				switch (l) {
					case W.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case W.INVISIBLE:
						p('Invalid value for parameter "size", expected "'.concat(W.COMPACT, '" or "').concat(W.NORMAL, '", got "').concat(l, '"'), 2817);
					case W.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case N.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				p('Invalid value for parameter "mode", expected "'.concat(N.NON_INTERACTIVE, '", "').concat(N.MANAGED, '" or "').concat(N.INVISIBLE, '", got "').concat(_, '"'), 2818);
				return
		}
	}

	function At(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Bt(e, n) {
		var c = n.get("turnstile_iframe_alt");
		c && (e.title = c)
	}

	function Nt(e) {
		var n = "https://challenges.cloudflare.com";
		if (!1) var c;
		return n
	}

	function St(e, n, c, u) {
		var l = Nt(c),
			_ = "h/".concat("b", "/");
		return "".concat(l, "/cdn-cgi/challenge-platform/").concat(_, "turnstile/if/ov2/av0/rcv").concat(u, "/").concat(e, "/").concat(n, "/").concat(c.theme, "/").concat(c.size)
	}

	function Gt(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Yt(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function It() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Je = function() {
		var e = function(o, t, a) {
				if (o.params.retry === ce.AUTO || a) {
					o.isExecuted && (o.msgQueue.push(Q.EXECUTE), o.isExecuted = !0, o.isExecuting = !0);
					var r, f = a ? 0 : 1e3 * 2 + ((r = o.params["retry-interval"]) !== null && r !== void 0 ? r : 0);
					o.retryTimeout = window.setTimeout(function() {
						m(t)
					}, f)
				}
			},
			n = function(o, t, a) {
				if (o.response === void 0) {
					p("[Internal Error] Widget was completed but no response was given", 1362);
					return
				}
				o.isExecuting = !1, kt(t, o.response);
				var r = o.cbSuccess;
				r && r(o.response, a)
			},
			c = function(o) {
				if (!o) return [];
				for (var t = o.attributes, a = t.length, r = new Array(a), f = 0; f < a; f++) r[f] = t[f].name;
				return r
			},
			u = function() {
				var o;
				do {
					o = "";
					for (var t = "abcdefghijklmnopqrstuvwxyz0123456789", a = t.length, r = 0; r < 5; r++) o += t.charAt(Math.floor(Math.random() * a))
				} while (y.has(o));
				return o
			},
			l = function(o, t, a) {
				for (; o.msgQueue.length;) {
					var r, f = o.msgQueue.pop();
					(r = a.contentWindow) === null || r === void 0 || r.postMessage({
						source: z,
						widgetId: t,
						event: f
					}, "*")
				}
			},
			_ = function(o, t) {
				if (t) {
					var a = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
						r = [],
						f = !0,
						i = !1,
						b = void 0;
					try {
						for (var T = a[Symbol.iterator](), A; !(f = (A = T.next()).done); f = !0) {
							var w = A.value;
							t[w] && t[w] !== o.params[w] && r.push(w)
						}
					} catch (S) {
						i = !0, b = S
					} finally {
						try {
							!f && T.return != null && T.return()
						} finally {
							if (i) throw b
						}
					}
					if (r.length !== 0) {
						p("The parameters ".concat(a.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(r.join(",")), 3618);
						return
					}
					if (t.action) {
						if (!Ve(t.action)) {
							p('Invalid input for optional parameter "action", got "'.concat(t.action, '"'), 3604);
							return
						}
						o.action = t.action
					}
					if (t.cData) {
						if (!qe(t.cData)) {
							p('Invalid input for optional parameter "cData", got "'.concat(t.cData, '"'), 3605);
							return
						}
						o.cData = t.cData
					}
					t["after-interactive-callback"] && (o.cbAfterInteractive = t["after-interactive-callback"]), t["before-interactive-callback"] && (o.cbBeforeInteractive = t["before-interactive-callback"]), t.callback && (o.cbSuccess = t.callback), t["expired-callback"] && (o.cbExpired = t["expired-callback"]), t["timeout-callback"] && (o.cbTimeout = t["timeout-callback"]), t["error-callback"] && (o.cbError = t["error-callback"]), t["unsupported-callback"] && (o.cbUnsupported = t["unsupported-callback"]), t.chlPageData && (o.chlPageData = t.chlPageData)
				}
			},
			m = function(o) {
				var t = C(o);
				if (!t) {
					p("Nothing to reset found for provided container", 3329);
					return
				}
				var a = y.get(t);
				if (a) {
					a.isResetting = !0, a.response = void 0, a.mode = void 0, a.msgQueue = [], a.isExpired = !1, a.isExecuting = !1, a.isStale = !1, a.isInitialized = !1, a.watchcat.lastAckedSeq = 0, a.watchcat.seq = 0, a.params.execution === re.RENDER && (a.msgQueue.push(Q.EXECUTE), a.isExecuted = !0, a.isExecuting = !0);
					var r = H(t),
						f = document.querySelector("#".concat(r));
					if (!r || !f) {
						p("Widget ".concat(t, " to reset was not found."), 3330);
						return
					}
					if (a.params.appearance === F.INTERACTION_ONLY && At(f), a.params.sitekey === null) {
						p("Unexpected Error: Sitekey is null", 3347);
						return
					}
					var i;
					f.src = St(t, a.params.sitekey, a.params, (i = a.rcV) !== null && i !== void 0 ? i : $), Xe(r), a.retryTimeout && window.clearTimeout(a.retryTimeout)
				} else {
					p("Widget ".concat(t, " to reset was not found."), 3331);
					return
				}
			},
			s = function(o) {
				var t, a = C(o);
				if (!a || !y.has(a)) {
					x("Nothing to remove found for the provided container");
					return
				}
				var r = H(a),
					f = ["iframe#".concat(r), "input#".concat(r, "_response"), "input#".concat(r, "_legacy_response"), "input#".concat(r, "_g_response")];
				document.querySelectorAll(f.join(", ")).forEach(function(b) {
					return b.remove()
				});
				var i = (t = y.get(a)) === null || t === void 0 ? void 0 : t.retryTimeout;
				i && window.clearTimeout(i), y.delete(a), wt(y)
			},
			d = function(o, t) {
				var a;
				if (typeof o == "string") try {
						var r = document.querySelector(o);
						if (!r) {
							p('Unable to find a container for "'.concat(o, '"'), 3585);
							return
						}
						a = r
					} catch (Kt) {
						p('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(o, '"'), 3586);
						return
					} else if (O(o, HTMLElement)) a = o;
					else {
						p('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
						return
					} var f = Xt(a);
				if (f) {
					var i = Object.assign(f, t),
						b = i.action,
						T = i.cData,
						A = i.chlPageData,
						w = i.sitekey,
						S;
					i.theme = (S = i.theme) !== null && S !== void 0 ? S : xe.AUTO;
					var D;
					i.retry = (D = i.retry) !== null && D !== void 0 ? D : ce.AUTO;
					var I;
					i.execution = (I = i.execution) !== null && I !== void 0 ? I : re.RENDER;
					var j;
					i.appearance = (j = i.appearance) !== null && j !== void 0 ? j : F.ALWAYS;
					var Z;
					i["retry-interval"] = +((Z = i["retry-interval"]) !== null && Z !== void 0 ? Z : mt);
					var B;
					i["expiry-interval"] = +((B = i["expiry-interval"]) !== null && B !== void 0 ? B : (ct - ut) * 1e3);
					var G;
					i.size = (G = i.size) !== null && G !== void 0 ? G : W.NORMAL;
					var le = i.callback,
						Re = i["expired-callback"],
						se = i["timeout-callback"],
						fe = i["after-interactive-callback"],
						de = i["before-interactive-callback"],
						pe = i["error-callback"],
						Oe = i["unsupported-callback"];
					if (typeof w != "string") {
						p('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof w == "undefined" ? "undefined" : k(w), '"'), 3588);
						return
					}
					if (!ot(w)) {
						p('Invalid input for parameter "sitekey", got "'.concat(w, '"'), 3589);
						return
					}
					if (!He(i.size)) {
						p('Invalid type for parameter "size", expected normal|compact, got "'.concat(i.size, '" ').concat(k(i.size)), 3590);
						return
					}
					if (!Me(i.theme)) {
						p('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(i.theme, '" ').concat(k(i.theme)), 3591);
						return
					}
					if (!We(i.retry)) {
						p('Invalid type for parameter "retry", expected never|auto, got "'.concat(i.retry, '" ').concat(k(i.retry)), 3592);
						return
					}
					if (i.language || (i.language = "auto"), !Be(i.language)) {
						p('Invalid language value: "'.concat(i.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
						return
					}
					if (!Ge(i.appearance)) {
						p('Unknown appearance value: "'.concat(i.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
						return
					}
					if (!Ye(i.execution)) {
						p('Unknown execution value: "'.concat(i.execution, ", expected either: 'render' or 'execute'."), 3601);
						return
					}
					if (!Fe(i["retry-interval"])) {
						p('Invalid retry-interval value: "'.concat(i["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
						return
					}
					if (!ze(i["expiry-interval"])) {
						p('Invalid expiry-interval value: "'.concat(i["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
						return
					}
					var ee, U = (ee = i["refresh-expired"]) !== null && ee !== void 0 ? ee : V.AUTO;
					if (je(U)) i["refresh-expired"] = U;
					else {
						p('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(U, '" ').concat(typeof U == "undefined" ? "undefined" : k(U)), 3603);
						return
					}
					var Y = a.getElementsByTagName("iframe")[0];
					Y != null && Y.id.startsWith(ne) && s(a);
					var R = document.createElement("iframe");
					if (!Ve(b)) {
						p('Invalid input for optional parameter "action", got "'.concat(b, '"'), 3604);
						return
					}
					if (!qe(T)) {
						p('Invalid input for optional parameter "cData", got "'.concat(T, '"'), 3605);
						return
					}
					var X = u(),
						te = H(X);
					if (!(!X || !te)) {
						var Ke = [],
							Ce = i.execution === re.RENDER;
						Ce && Ke.push(Q.EXECUTE), P++;
						var Lt = +new Date,
							Pt = {};
						y.set(X, Pe({
							idx: P,
							action: b,
							cData: T,
							chlPageData: A,
							cbSuccess: le,
							cbError: pe,
							cbExpired: Re,
							cbTimeout: se,
							cbUnsupported: Oe,
							cbAfterInteractive: fe,
							cbBeforeInteractive: de,
							params: i,
							isStale: !1,
							isExpired: !1,
							isExecuting: Ce,
							isResetting: !1,
							isExecuted: Ce,
							isInitialized: !1,
							msgQueue: Ke,
							rcV: $,
							widgetStartTime: Lt,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0,
								missingWidgetWarning: !1
							}
						}, Pt)), Et(y), R.style.display = "none", R.style.border = "none", R.style.overflow = "hidden", R.setAttribute("src", St(X, w, i, $)), R.setAttribute("allow", "cross-origin-isolated; fullscreen"), R.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), R.id = te;
						var ke;
						R.tabIndex = (ke = i.tabindex) !== null && ke !== void 0 ? ke : 0, R.title = "Widget containing a Cloudflare security challenge", a.appendChild(R);
						var Ne, Dt = (Ne = i["response-field"]) !== null && Ne !== void 0 ? Ne : !0;
						if (Dt) {
							var ve = document.createElement("input");
							ve.type = "hidden";
							var Le;
							if (ve.name = (Le = i["response-field-name"]) !== null && Le !== void 0 ? Le : pt, ve.id = "".concat(te, "_response"), a.appendChild(ve), typeof i["response-field-name"] != "string" && Yt(w)) {
								var me = document.createElement("input");
								me.type = "hidden", me.name = dt, me.id = "".concat(te, "_legacy_response"), a.appendChild(me)
							}
						}
						if (Ie) {
							var _e = document.createElement("input");
							_e.type = "hidden", _e.name = vt, _e.id = "".concat(te, "_g_response"), a.appendChild(_e)
						}
						return te
					}
				}
			},
			g = function() {
				var o, t = -1,
					a = !0,
					r = !1,
					f = void 0;
				try {
					for (var i = y[Symbol.iterator](), b; !(a = (b = i.next()).done); a = !0) {
						var T = he(b.value, 2),
							A = T[0],
							w = T[1];
						t < w.idx && (o = A, t = w.idx)
					}
				} catch (S) {
					r = !0, f = S
				} finally {
					try {
						!a && i.return != null && i.return()
					} finally {
						if (r) throw f
					}
				}
				if (t === -1) {
					p("Could not find widget", 43778);
					return
				}
				return o
			};

		function v(h, o, t, a) {
			return E.apply(this, arguments)
		}

		function E() {
			return E = et(function(h, o, t, a) {
				var r, f, i, b, T, A, w, S, D;
				return ge(this, function(I) {
					switch (I.label) {
						case 0:
							if (r = h.params.sitekey, f = It(), !f) return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), n(h, o, !1), [2];
							i = "h/".concat("b", "/"), b = new URL(f), T = "https", A = "".concat(T, "://").concat(b.host, "/cdn-cgi/challenge-platform/").concat(i, "rc/").concat(a), I.label = 1;
						case 1:
							return I.trys.push([1, 6, , 7]), [4, fetch(A, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: r,
									secondaryToken: t
								})
							})];
						case 2:
							return w = I.sent(), w.status === 200 ? [3, 3] : (x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), n(h, o, !1), [3, 5]);
						case 3:
							return [4, w.json()];
						case 4:
							if (S = I.sent(), "status" in S && S.status === "redeemed") return n(h, o, !0), [2];
							I.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return D = I.sent(), x("Error contacting Turnstile, aborting clearance remdeption."), n(h, o, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), E.apply(this, arguments)
		}
		var y = new Map,
			P = 0,
			ie = function(o) {
				var t = o.data;
				if (t.source === z) {
					if (!Gt(o)) {
						x("Ignored message from wrong origin: " + o.origin);
						return
					}
					if (!(!t.widgetId || !y.has(t.widgetId))) {
						var a = H(t.widgetId),
							r = y.get(t.widgetId);
						if (!(!a || !r)) switch (t.event) {
							case "init": {
								var f = document.getElementById(a);
								if (!f) {
									p("Cannot initialize Widget, Element not found (#".concat(a, ")."), 3074);
									return
								}
								r.mode = t.mode, r.mode === N.INVISIBLE && r.params["refresh-expired"] === V.MANUAL && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(V.AUTO, "' or '").concat(V.NEVER, "'")), r.params.appearance === F.ALWAYS || r.isExecuting && r.params.appearance === F.EXECUTE ? Qe(f, r) : At(f), f.style.display = "";
								break
							}
							case "translationInit": {
								var i = document.getElementById(a);
								if (!i) {
									p("Cannot initialize Widget, Element not found (#".concat(a, ")."), 3074);
									return
								}
								var b = new Map;
								Object.keys(t.translationData).forEach(function(X) {
									b.set(X, t.translationData[X])
								}), Bt(i, b);
								break
							}
							case "reject": {
								var T = document.getElementById(a);
								if (r.isExecuting = !1, !T) {
									p("Cannot initialize Widget, Element not found (#".concat(a, ")."), 3075);
									return
								}
								if (t.reason === "outdated_browser") {
									var A = r.cbUnsupported;
									A && A()
								}
								break
							}
							case "food": {
								r.watchcat && t.seq > r.watchcat.lastAckedSeq && (r.watchcat.lastAckedSeq = t.seq);
								break
							}
							case "complete": {
								r.rcV = $, r.response = t.token, t.sToken ? v(r, a, t.sToken, t.chlId) : n(r, a, !1);
								break
							}
							case "fail": {
								t.rcV && (r.rcV = t.rcV), t.cfChlOut && (r.cfChlOut = t.cfChlOut), t.cfChlOutS && (r.cfChlOutS = t.cfChlOutS), r.isExecuting = !1, r.isInitialized = !0, Xe(a);
								var w = r.cbError;
								if (w) {
									var S;
									w(String((S = t.code) !== null && S !== void 0 ? S : it)) || (t.code && x("Error: ".concat(t.code)), e(r, a, t.code === oe))
								} else t.code ? (e(r, a, t.code === oe), p("Error: ".concat(t.code), 3076)) : e(r, a, !1);
								break
							}
							case "feedbackInit": {
								jt(a, r);
								break
							}
							case "requestFeedbackData": {
								var D, I = document.querySelector("#".concat(a));
								if (!I) {
									p("Received state for an unknown widget: ".concat(t.widgetId), 3078);
									return
								}(D = I.contentWindow) === null || D === void 0 || D.postMessage({
									source: z,
									widgetId: t.widgetId,
									event: "requestTurnstileResults"
								}, "*");
								break
							}
							case "turnstileResults": {
								var j, Z = document.querySelector("#".concat(a, "-fr"));
								if (!Z) {
									p("Received state for an unknown widget: ".concat(t.widgetId), 3078);
									return
								}(j = Z.contentWindow) === null || j === void 0 || j.postMessage({
									source: z,
									widgetId: t.widgetId,
									event: "feedbackData",
									rayId: t.rayId,
									rcV: t.rcV,
									cfChlOut: r.cfChlOut,
									cfChlOutS: r.cfChlOutS,
									sitekey: t.sitekey
								}, "*");
								break
							}
							case "closeFeedbackReportIframe": {
								var B, G, le = document.querySelector("#".concat(a, "-fr"));
								if (!le) {
									p("Received state for an unknown widget: ".concat(t.widgetId), 3078);
									return
								}(B = le.parentElement) === null || B === void 0 || (G = B.parentElement) === null || G === void 0 || G.remove();
								break
							}
							case "tokenExpired": {
								var Re = t.token;
								r.isExpired = !0;
								var se = r.cbExpired;
								se && se(Re), r.params["refresh-expired"] === V.AUTO && !r.isResetting && m(a);
								break
							}
							case "interactiveTimeout": {
								r.rcV = $, Xe(a);
								var fe = r.cbTimeout;
								fe && fe();
								break
							}
							case "refreshRequest": {
								r.rcV = $, m(a);
								break
							}
							case "interactiveBegin": {
								var de = document.getElementById(a);
								if (!de) {
									p("Cannot layout widget, Element not found (#".concat(a, ")."), 3076);
									return
								}
								var pe = r.cbBeforeInteractive;
								pe && pe(), r.params.appearance === F.INTERACTION_ONLY && Qe(de, r);
								break
							}
							case "interactiveEnd": {
								var Oe = document.getElementById(a);
								if (!Oe) {
									p("Cannot unlayout widget, Element not found (#".concat(a, ")."), 3077);
									return
								}
								var ee = r.cbAfterInteractive;
								ee && ee();
								break
							}
							case "widgetStale": {
								r.isStale = !0;
								break
							}
							case "requestExtraParams": {
								var U, Y = document.querySelector("#".concat(a));
								if (!Y) {
									p("Received state for an unknown widget: ".concat(t.widgetId), 3078);
									return
								}
								r.isResetting = !1;
								var R = {};
								(U = Y.contentWindow) === null || U === void 0 || U.postMessage(Pe({
									source: z,
									widgetId: t.widgetId,
									event: "extraParams",
									action: r.action,
									cData: r.cData,
									chlPageData: r.chlPageData,
									rcV: r.rcV,
									ch: "56d3063b",
									url: It(),
									retry: r.params.retry,
									"expiry-interval": r.params["expiry-interval"],
									"retry-interval": r.params["retry-interval"],
									"refresh-expired": r.params["refresh-expired"],
									language: r.params.language,
									execution: r.params.execution,
									appearance: r.params.appearance,
									wPr: {
										"w.iW": window.innerWidth,
										"ht.atrs": c(document.body.parentNode)
									},
									turnstileAge: +Date.now() - Ht,
									widgetAge: +Date.now() - r.widgetStartTime
								}, R), "*"), l(r, t.widgetId, Y), r.isInitialized = !0;
								break
							}
						}
					}
				}
			};
		window.addEventListener("message", ie);

		function C(h) {
			if (typeof h == "string") {
				var o = Te(h);
				if (o && y.has(o)) return o;
				try {
					var t = document.querySelector(h);
					return t ? C(t) : null
				} catch (r) {
					return null
				}
			}
			if (O(h, HTMLElement)) {
				var a = h.querySelector("iframe");
				return a ? Te(a.id) : null
			}
			return h || y.size === 0 ? null : y.keys().next().value
		}
		return {
			ready: function(o) {
				if (Rt && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), p("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof o != "function" && p('turnstile.ready() expected a "function" argument, got "'.concat(typeof o == "undefined" ? "undefined" : k(o), '"'), 3841), o(), typeof o != "function" && p('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), Ct) {
					o();
					return
				}
				$e.push(o)
			},
			implicitRender: Ot,
			execute: function(o, t) {
				var a = C(o);
				if (!a) {
					if (t === void 0) {
						p("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var r = d(o, t);
					if (!r) {
						p("Failed to render widget", 43522);
						return
					}
					a = r
				}
				var f = y.get(a);
				if (f) {
					_(f, t);
					var i = H(a);
					if (f.isExecuting) {
						x("Call to execute() on a widget that is already executing (".concat(i, "), consider using reset() before execute()"));
						return
					} else f.isExecuting = !0;
					if (f.response) {
						f.isExecuting = !1, x("Call to execute() on a widget that was already executed (".concat(i, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), f.cbSuccess && f.cbSuccess(f.response, !1);
						return
					}
					f.isExpired && x("Call to execute on a expired-widget (".concat(i, "), consider using reset() before")), f.isStale && (m(i), f.isExecuting = !0), f.msgQueue.push(Q.EXECUTE), f.isExecuted = !0;
					var b = document.querySelector("#".concat(i));
					if (!b) {
						f.isExecuting = !1, p("Widget ".concat(i, " to execute was not found"), 43522);
						return
					}
					f.isInitialized && l(f, a, b), f.isInitialized && f.params.appearance === F.EXECUTE && Qe(b, f)
				}
			},
			render: d,
			reset: m,
			remove: s,
			getResponse: function(o) {
				var t;
				if (typeof o == "undefined") {
					var a = g();
					if (a) {
						var r, f = y.get(a);
						return f != null && f.isExpired && x("Call to getResponse on a widget that expired, consider refreshing the widget."), (r = y.get(a)) === null || r === void 0 ? void 0 : r.response
					} else p("Could not find a widget", 43794)
				}
				var i = C(o);
				if (!i) {
					p("Could not find widget for provided container", 43778);
					return
				}
				return (t = y.get(i)) === null || t === void 0 ? void 0 : t.response
			},
			isExpired: function(o) {
				var t;
				if (typeof o == "undefined") {
					var a = g();
					if (a) {
						var r, f;
						return (f = (r = y.get(a)) === null || r === void 0 ? void 0 : r.isExpired) !== null && f !== void 0 ? f : !1
					} else p("Could not find a widget", 43794)
				}
				var i = C(o);
				if (!i) return p("Could not find widget for provided container", 43778), !1;
				var b;
				return (b = (t = y.get(i)) === null || t === void 0 ? void 0 : t.isExpired) !== null && b !== void 0 ? b : !1
			}
		}
	}();

	function Xt(e) {
		var n = function(T) {
				var A = e.getAttribute(T);
				return A && window[A] ? window[A] : void 0
			},
			c = e.getAttribute("data-sitekey"),
			u = {
				sitekey: c
			},
			l = e.getAttribute("data-tabindex");
		l && (u.tabindex = parseInt(l, 10));
		var _ = e.getAttribute("data-theme");
		_ && (Me(_) ? u.theme = _ : x('Unknown data-theme value: "'.concat(_, '"')));
		var m = e.getAttribute("data-size");
		if (m && (He(m) ? u.size = m : x('Unknown data-size value: "'.concat(m, '"'))), !1) var s;
		var d = e.getAttribute("data-action");
		typeof d == "string" && (u.action = d);
		var g = e.getAttribute("data-cdata");
		typeof g == "string" && (u.cData = g);
		var v = e.getAttribute("data-retry");
		v && (We(v) ? u.retry = v : x('Invalid data-retry value: "'.concat(v, ", expected either 'never' or 'auto'\"")));
		var E = e.getAttribute("data-retry-interval");
		if (E) {
			var y = parseInt(E, 10);
			Fe(y) ? u["retry-interval"] = y : x('Invalid data-retry-interval value: "'.concat(E, ', expected an integer value > 0 and < 900000"'))
		}
		var P = e.getAttribute("data-expiry-interval");
		if (P) {
			var ie = parseInt(P, 10);
			ze(ie) ? u["expiry-interval"] = ie : x('Invalid data-expiry-interval value: "'.concat(ie, ', expected an integer value > 0 and < 360000"'))
		}
		var C = e.getAttribute("data-refresh-expired");
		C && (je(C) ? u["refresh-expired"] = C : x('Unknown data-refresh-expired value: "'.concat(C, ", expected either: 'never', 'auto' or 'manual'.")));
		var h = e.getAttribute("data-language");
		h && (Be(h) ? u.language = h : x('Invalid data-language value: "'.concat(h, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));
		var o = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		o.forEach(function(b) {
			u[b] = n("data-".concat(b))
		});
		var t, a = (t = e.getAttribute("data-response-field")) !== null && t !== void 0 ? t : "true";
		u["response-field"] = a === "true";
		var r = e.getAttribute("data-response-field-name");
		r && (u["response-field-name"] = r);
		var f = e.getAttribute("data-execution");
		f && (Ye(f) ? u.execution = f : x('Unknown data-execution value: "'.concat(f, ", expected either: 'render' or 'execute'.")));
		var i = e.getAttribute("data-appearance");
		return i && (Ge(i) ? u.appearance = i : x('Unknown data-appearance value: "'.concat(i, ", expected either: 'always', 'execute', or 'interaction-only'."))), u
	}

	function Qt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			n = document.currentScript;
		if (O(n, HTMLScriptElement) && e.test(n.src)) return n;
		for (var c = document.querySelectorAll("script"), u = 0, l; l = c[u]; u++)
			if (O(l, HTMLScriptElement) && e.test(l.src)) return l
	}

	function $t() {
		var e = Qt();
		if (!e) return p("Could not find Turnstile script tag, some features may not be available", 43777), null;
		(e.async || e.defer) && (Rt = !0);
		var n = e.src,
			c = n.split("?");
		return c.length > 1 ? new URLSearchParams(c[1]) : new URLSearchParams
	}
	var K = $t();
	K && (ae = K.get("compat"), (ae == null ? void 0 : ae.toLowerCase()) === "recaptcha" ? window.grecaptcha ? x("grecaptcha is already defined. The compatibility layer will not be enabled") : (x("Compatibility layer enabled"), Ie = !0, window.grecaptcha = Je) : ae !== null && x('Unknown value for api.js?compat: "'.concat(ae, '", ignoring')), K.forEach(function(e, n) {
		M(["onload", "compat", "render"], n) || x('Unknown parameter passed to api.js: "?'.concat(n, '=...", ignoring'))
	}), L = K.get("onload"), L && setTimeout(function() {
		typeof window[L] == "function" ? window[L]() : (x("Unable to find onload callback '".concat(L, "' immediately after loading, expected 'function', got '").concat(k(window[L]), "'")), setTimeout(function() {
			typeof window[L] == "function" ? window[L]() : x("Unable to find onload callback '".concat(L, "' after 1 second, expected 'function', got '").concat(k(window[L]), "'"))
		}, 1e3))
	}, 0));
	var ae, L, Jt = "turnstile" in window;
	Jt ? x("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = Je, (K == null ? void 0 : K.get("render")) !== "explicit" && $e.push(Ot), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Tt, 0) : window.addEventListener("DOMContentLoaded", Tt));
})();