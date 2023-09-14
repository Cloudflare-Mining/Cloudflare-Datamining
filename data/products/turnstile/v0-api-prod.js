"use strict";
(function() {
	function Ke(e, n, i, s, l, v, y) {
		try {
			var f = e[v](y),
				_ = f.value
		} catch (w) {
			i(w);
			return
		}
		f.done ? n(_) : Promise.resolve(_).then(s, l)
	}

	function Ze(e) {
		return function() {
			var n = this,
				i = arguments;
			return new Promise(function(s, l) {
				var v = e.apply(n, i);

				function y(_) {
					Ke(v, s, l, y, f, "next", _)
				}

				function f(_) {
					Ke(v, s, l, y, f, "throw", _)
				}
				y(void 0)
			})
		}
	}

	function R(e, n) {
		return n != null && typeof Symbol != "undefined" && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](e) : R(e, n)
	}

	function me(e, n, i) {
		return n in e ? Object.defineProperty(e, n, {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[n] = i, e
	}

	function Ne(e) {
		for (var n = 1; n < arguments.length; n++) {
			var i = arguments[n] != null ? arguments[n] : {},
				s = Object.keys(i);
			typeof Object.getOwnPropertySymbols == "function" && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(l) {
				return Object.getOwnPropertyDescriptor(i, l).enumerable
			}))), s.forEach(function(l) {
				me(e, l, i[l])
			})
		}
		return e
	}

	function et(e) {
		if (Array.isArray(e)) return e
	}

	function tt(e, n) {
		var i = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (i != null) {
			var s = [],
				l = !0,
				v = !1,
				y, f;
			try {
				for (i = i.call(e); !(l = (y = i.next()).done) && (s.push(y.value), !(n && s.length === n)); l = !0);
			} catch (_) {
				v = !0, f = _
			} finally {
				try {
					!l && i.return != null && i.return()
				} finally {
					if (v) throw f
				}
			}
			return s
		}
	}

	function rt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Le(e, n) {
		(n == null || n > e.length) && (n = e.length);
		for (var i = 0, s = new Array(n); i < n; i++) s[i] = e[i];
		return s
	}

	function nt(e, n) {
		if (e) {
			if (typeof e == "string") return Le(e, n);
			var i = Object.prototype.toString.call(e).slice(8, -1);
			if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(i);
			if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Le(e, n)
		}
	}

	function ye(e, n) {
		return et(e) || tt(e, n) || nt(e, n) || rt()
	}

	function C(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function ge(e, n) {
		var i = function(p) {
				return function(S) {
					return s([p, S])
				}
			},
			s = function(p) {
				if (v) throw new TypeError("Generator is already executing.");
				for (; _ && (_ = 0, p[0] && (l = 0)), l;) try {
					if (v = 1, y && (f = p[0] & 2 ? y.return : p[0] ? y.throw || ((f = y.return) && f.call(y), 0) : y.next) && !(f = f.call(y, p[1])).done) return f;
					switch (y = 0, f && (p = [p[0] & 2, f.value]), p[0]) {
						case 0:
						case 1:
							f = p;
							break;
						case 4:
							return l.label++, {
								value: p[1],
								done: !1
							};
						case 5:
							l.label++, y = p[1], p = [0];
							continue;
						case 7:
							p = l.ops.pop(), l.trys.pop();
							continue;
						default:
							if (f = l.trys, !(f = f.length > 0 && f[f.length - 1]) && (p[0] === 6 || p[0] === 2)) {
								l = 0;
								continue
							}
							if (p[0] === 3 && (!f || p[1] > f[0] && p[1] < f[3])) {
								l.label = p[1];
								break
							}
							if (p[0] === 6 && l.label < f[1]) {
								l.label = f[1], f = p;
								break
							}
							if (f && l.label < f[2]) {
								l.label = f[2], l.ops.push(p);
								break
							}
							f[2] && l.ops.pop(), l.trys.pop();
							continue
					}
					p = n.call(e, l)
				} catch (S) {
					p = [6, S], y = 0
				} finally {
					v = f = 0
				}
				if (p[0] & 5) throw p[1];
				return {
					value: p[0] ? p[1] : void 0,
					done: !0
				}
			},
			l = {
				label: 0,
				sent: function() {
					if (f[0] & 1) throw f[1];
					return f[1]
				},
				trys: [],
				ops: []
			},
			v, y, f, _;
		return _ = {
			next: i(0),
			throw: i(1),
			return: i(2)
		}, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
			return this
		}), _
	}
	var at = 300020;
	var it = 300030;

	function P(e, n) {
		return e.indexOf(n) !== -1
	}
	var N;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(N || (N = {}));
	var D;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(D || (D = {}));
	var he;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(he || (he = {}));
	var ae;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(ae || (ae = {}));
	var U;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(U || (U = {}));
	var W;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(W || (W = {}));
	var J;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(J || (J = {}));
	var V;
	(function(e) {
		e.EXECUTE = "execute"
	})(V || (V = {}));
	var Pe;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(Pe || (Pe = {}));

	function De(e) {
		return P(["auto", "dark", "light"], e)
	}

	function Me(e) {
		return P(["auto", "never"], e)
	}

	function Ue(e) {
		return e > 0 && e < 9e5
	}

	function We(e) {
		return e > 0 && e < 36e4
	}
	var Dt = /^[0-9A-Za-z_-]{3,100}$/;

	function ot(e) {
		return Dt.test(e)
	}
	var Mt = /^[a-z0-9_-]{0,32}$/i;

	function Fe(e) {
		return e === void 0 ? !0 : typeof e == "string" && Mt.test(e)
	}
	var Ut = /^[a-z0-9_\-=]{0,255}$/i;

	function ze(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ut.test(e)
	}

	function Ve(e) {
		return P(["normal", "compact", "invisible"], e)
	}

	function qe(e) {
		return P(["auto", "manual", "never"], e)
	}
	var Wt = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function He(e) {
		return e === "auto" || Wt.test(e)
	}

	function je(e) {
		return P(["always", "execute", "interaction-only"], e)
	}

	function Be(e) {
		return P(["render", "execute"], e)
	}
	var q = "0/0";
	var ct = 300,
		lt = 10;
	var K = "cf-chl-widget-",
		H = "cloudflare-challenge",
		ut = ".cf-turnstile",
		st = ".cf-challenge",
		ft = ".g-recaptcha",
		dt = "cf_challenge_response",
		pt = "cf-turnstile-response",
		vt = "g-recaptcha-response",
		_t = 8e3;

	function xe(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function mt(e, n) {
		if (!R(e, n)) throw new TypeError("Cannot call a class as a function")
	}

	function F(e, n) {
		return F = Object.setPrototypeOf || function(s, l) {
			return s.__proto__ = l, s
		}, F(e, n)
	}

	function yt(e, n) {
		if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(n && n.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), n && F(e, n)
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

	function ie(e, n, i) {
		return be() ? ie = Reflect.construct : ie = function(l, v, y) {
			var f = [null];
			f.push.apply(f, v);
			var _ = Function.bind.apply(l, f),
				w = new _;
			return y && F(w, y.prototype), w
		}, ie.apply(null, arguments)
	}

	function j(e) {
		return j = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
			return i.__proto__ || Object.getPrototypeOf(i)
		}, j(e)
	}

	function gt(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Ee(e) {
		var n = typeof Map == "function" ? new Map : void 0;
		return Ee = function(s) {
			var l = function() {
				return ie(s, arguments, j(this).constructor)
			};
			if (s === null || !gt(s)) return s;
			if (typeof s != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof n != "undefined") {
				if (n.has(s)) return n.get(s);
				n.set(s, l)
			}
			return l.prototype = Object.create(s.prototype, {
				constructor: {
					value: l,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), F(l, s)
		}, Ee(e)
	}

	function ht(e, n) {
		return n && (C(n) === "object" || typeof n == "function") ? n : xe(e)
	}

	function xt(e) {
		var n = be();
		return function() {
			var s = j(e),
				l;
			if (n) {
				var v = j(this).constructor;
				l = Reflect.construct(s, arguments, v)
			} else l = s.apply(this, arguments);
			return ht(this, l)
		}
	}
	var bt = function(e) {
		"use strict";
		yt(i, e);
		var n = xt(i);

		function i(s, l) {
			mt(this, i);
			var v;
			return v = n.call(this, s), me(xe(v), "code", void 0), v.name = "TurnstileError", v.code = l, v
		}
		return i
	}(Ee(Error));

	function d(e, n) {
		var i = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new bt(i, n)
	}

	function g(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Ge(e) {
		return e.startsWith(K) ? e.substring(K.length) : null
	}

	function z(e) {
		return "".concat(K).concat(e)
	}
	var Te = null,
		we = 0,
		Ft = 1500,
		zt = 5;

	function Vt(e) {
		we++;
		var n = !0,
			i = !1,
			s = void 0;
		try {
			for (var l = e[Symbol.iterator](), v; !(n = (v = l.next()).done); n = !0) {
				var y = ye(v.value, 2),
					f = y[0],
					_ = y[1],
					w;
				_.watchcat.seq = we, _.watchcat.lastAckedSeq === 0 && (_.watchcat.lastAckedSeq = we);
				var p = z(f);
				if (!p) {
					g("Cannot find Widget ".concat(p, ", consider using turnstile.remove() to clean up a widget."));
					continue
				}
				var S = document.querySelector("#".concat(p));
				if (!S) {
					g("Cannot find Widget ".concat(p, ", consider using turnstile.remove() to clean up a widget."));
					continue
				}
				if ((_.isExecuting || !_.isInitialized || _.isInitialized && !_.isStale && !_.isExecuted) && _.watchcat.lastAckedSeq !== 0 && _.watchcat.lastAckedSeq < _.watchcat.seq - 1 - zt) {
					_.watchcat.lastAckedSeq = 0, _.watchcat.seq = 0, console.log("Turnstile Widget seem to have crashed: ", f), window.postMessage({
						source: H,
						widgetId: f,
						code: it,
						event: "fail"
					}, "*");
					continue
				}(w = S.contentWindow) === null || w === void 0 || w.postMessage({
					source: H,
					widgetId: f,
					seq: we,
					event: "meow"
				}, "*")
			}
		} catch (b) {
			i = !0, s = b
		} finally {
			try {
				!n && l.return != null && l.return()
			} finally {
				if (i) throw s
			}
		}
	}

	function Et(e) {
		Te === null && (Te = setInterval(function() {
			Vt(e)
		}, Ft))
	}

	function wt(e) {
		Te !== null && e.size === 0 && clearInterval(Te)
	}
	var qt = +new Date,
		Ae = !1,
		Rt = !1;

	function Ye(e) {
		kt(e, "")
	}

	function Ot() {
		var e = [ut, st];
		Ae && e.push(ft), document.querySelectorAll(e.join(", ")).forEach(function(n) {
			return $e.render(n)
		})
	}
	var Qe = [],
		Ct = !1;

	function Tt() {
		Ct = !0;
		var e = !0,
			n = !1,
			i = void 0;
		try {
			for (var s = Qe[Symbol.iterator](), l; !(e = (l = s.next()).done); e = !0) {
				var v = l.value;
				v()
			}
		} catch (y) {
			n = !0, i = y
		} finally {
			try {
				!e && s.return != null && s.return()
			} finally {
				if (n) throw i
			}
		}
	}

	function kt(e, n) {
		var i = document.getElementById("".concat(e, "_response"));
		i !== null && R(i, HTMLInputElement) && (i.value = n);
		var s = document.getElementById("".concat(e, "_legacy_response"));
		if (s !== null && R(s, HTMLInputElement) && (s.value = n), Ae) {
			var l = document.getElementById("".concat(e, "_g_response"));
			l !== null && R(l, HTMLInputElement) && (l.value = n)
		}
	}

	function Xe(e, n) {
		var i, s = (i = n.params.size) !== null && i !== void 0 ? i : "normal",
			l = n.mode;
		switch (l) {
			case N.NON_INTERACTIVE:
			case N.MANAGED:
				switch (s) {
					case D.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case D.INVISIBLE:
						d('Invalid value for parameter "size", expected "'.concat(D.COMPACT, '" or "').concat(D.NORMAL, '", got "').concat(s, '"'), 2817);
					case D.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case N.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				d('Invalid value for parameter "mode", expected "'.concat(N.NON_INTERACTIVE, '", "').concat(N.MANAGED, '" or "').concat(N.INVISIBLE, '", got "').concat(l, '"'), 2818);
				return
		}
	}

	function At(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Ht(e, n) {
		var i = n.get("turnstile_iframe_alt");
		i && (e.title = i)
	}

	function jt(e) {
		var n = "https://challenges.cloudflare.com";
		if (!1) var i;
		return n
	}

	function St(e, n, i, s) {
		var l = jt(i),
			v = "h/".concat("b", "/");
		return "".concat(l, "/cdn-cgi/challenge-platform/").concat(v, "turnstile/if/ov2/av0/rcv").concat(s, "/").concat(e, "/").concat(n, "/").concat(i.theme, "/").concat(i.size)
	}

	function Bt(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Gt(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function It() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var $e = function() {
		var e = function(c, t, a) {
				if (c.params.retry === ae.AUTO || a) {
					c.isExecuted && (c.msgQueue.push(V.EXECUTE), c.isExecuted = !0, c.isExecuting = !0);
					var r, u = a ? 0 : 1e3 * 2 + ((r = c.params["retry-interval"]) !== null && r !== void 0 ? r : 0);
					c.retryTimeout = window.setTimeout(function() {
						y(t)
					}, u)
				}
			},
			n = function(c, t, a) {
				if (c.response === void 0) {
					d("[Internal Error] Widget was completed but no response was given", 1362);
					return
				}
				c.isExecuting = !1, kt(t, c.response);
				var r = c.cbSuccess;
				r && r(c.response, a)
			},
			i = function(c) {
				if (!c) return [];
				for (var t = c.attributes, a = t.length, r = new Array(a), u = 0; u < a; u++) r[u] = t[u].name;
				return r
			},
			s = function() {
				var c;
				do {
					c = "";
					for (var t = "abcdefghijklmnopqrstuvwxyz0123456789", a = t.length, r = 0; r < 5; r++) c += t.charAt(Math.floor(Math.random() * a))
				} while (b.has(c));
				return c
			},
			l = function(c, t, a) {
				for (; c.msgQueue.length;) {
					var r, u = c.msgQueue.pop();
					(r = a.contentWindow) === null || r === void 0 || r.postMessage({
						source: H,
						widgetId: t,
						event: u
					}, "*")
				}
			},
			v = function(c, t) {
				if (t) {
					var a = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
						r = [],
						u = !0,
						o = !1,
						h = void 0;
					try {
						for (var T = a[Symbol.iterator](), A; !(u = (A = T.next()).done); u = !0) {
							var x = A.value;
							t[x] && t[x] !== c.params[x] && r.push(x)
						}
					} catch (E) {
						o = !0, h = E
					} finally {
						try {
							!u && T.return != null && T.return()
						} finally {
							if (o) throw h
						}
					}
					if (r.length !== 0) {
						d("The parameters ".concat(a.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(r.join(",")), 3618);
						return
					}
					if (t.action) {
						if (!Fe(t.action)) {
							d('Invalid input for optional parameter "action", got "'.concat(t.action, '"'), 3604);
							return
						}
						c.action = t.action
					}
					if (t.cData) {
						if (!ze(t.cData)) {
							d('Invalid input for optional parameter "cData", got "'.concat(t.cData, '"'), 3605);
							return
						}
						c.cData = t.cData
					}
					t["after-interactive-callback"] && (c.cbAfterInteractive = t["after-interactive-callback"]), t["before-interactive-callback"] && (c.cbBeforeInteractive = t["before-interactive-callback"]), t.callback && (c.cbSuccess = t.callback), t["expired-callback"] && (c.cbExpired = t["expired-callback"]), t["timeout-callback"] && (c.cbTimeout = t["timeout-callback"]), t["error-callback"] && (c.cbError = t["error-callback"]), t["unsupported-callback"] && (c.cbUnsupported = t["unsupported-callback"]), t.chlPageData && (c.chlPageData = t.chlPageData)
				}
			},
			y = function(c) {
				var t = O(c);
				if (!t) {
					d("Nothing to reset found for provided container", 3329);
					return
				}
				var a = b.get(t);
				if (a) {
					a.isResetting = !0, a.response = void 0, a.mode = void 0, a.msgQueue = [], a.isExpired = !1, a.isExecuting = !1, a.isStale = !1, a.isInitialized = !1, a.watchcat.lastAckedSeq = 0, a.watchcat.seq = 0, a.params.execution === J.RENDER && (a.msgQueue.push(V.EXECUTE), a.isExecuted = !0, a.isExecuting = !0);
					var r = z(t),
						u = document.querySelector("#".concat(r));
					if (!r || !u) {
						d("Widget ".concat(t, " to reset was not found."), 3330);
						return
					}
					if (a.params.appearance === W.INTERACTION_ONLY && At(u), a.params.sitekey === null) {
						d("Unexpected Error: Sitekey is null", 3347);
						return
					}
					var o;
					u.src = St(t, a.params.sitekey, a.params, (o = a.rcV) !== null && o !== void 0 ? o : q), Ye(r), a.retryTimeout && window.clearTimeout(a.retryTimeout)
				} else {
					d("Widget ".concat(t, " to reset was not found."), 3331);
					return
				}
			},
			f = function(c) {
				var t, a = O(c);
				if (!a || !b.has(a)) {
					g("Nothing to remove found for the provided container");
					return
				}
				var r = z(a),
					u = ["iframe#".concat(r), "input#".concat(r, "_response"), "input#".concat(r, "_legacy_response"), "input#".concat(r, "_g_response")];
				document.querySelectorAll(u.join(", ")).forEach(function(h) {
					return h.remove()
				});
				var o = (t = b.get(a)) === null || t === void 0 ? void 0 : t.retryTimeout;
				o && window.clearTimeout(o), b.delete(a), wt(b)
			},
			_ = function(c, t) {
				var a;
				if (typeof c == "string") try {
						var r = document.querySelector(c);
						if (!r) {
							d('Unable to find a container for "'.concat(c, '"'), 3585);
							return
						}
						a = r
					} catch (Jt) {
						d('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(c, '"'), 3586);
						return
					} else if (R(c, HTMLElement)) a = c;
					else {
						d('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
						return
					} var u = Yt(a);
				if (u) {
					var o = Object.assign(u, t),
						h = o.action,
						T = o.cData,
						A = o.chlPageData,
						x = o.sitekey,
						E;
					o.theme = (E = o.theme) !== null && E !== void 0 ? E : he.AUTO;
					var X;
					o.retry = (X = o.retry) !== null && X !== void 0 ? X : ae.AUTO;
					var I;
					o.execution = (I = o.execution) !== null && I !== void 0 ? I : J.RENDER;
					var oe;
					o.appearance = (oe = o.appearance) !== null && oe !== void 0 ? oe : W.ALWAYS;
					var ce;
					o["retry-interval"] = (ce = o["retry-interval"]) !== null && ce !== void 0 ? ce : _t;
					var ee;
					o["expiry-interval"] = (ee = o["expiry-interval"]) !== null && ee !== void 0 ? ee : (ct - lt) * 1e3;
					var Q;
					o.size = (Q = o.size) !== null && Q !== void 0 ? Q : D.NORMAL;
					var le = o.callback,
						ue = o["expired-callback"],
						se = o["timeout-callback"],
						Se = o["after-interactive-callback"],
						fe = o["before-interactive-callback"],
						te = o["error-callback"],
						re = o["unsupported-callback"];
					if (typeof x != "string") {
						d('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof x == "undefined" ? "undefined" : C(x), '"'), 3588);
						return
					}
					if (!ot(x)) {
						d('Invalid input for parameter "sitekey", got "'.concat(x, '"'), 3589);
						return
					}
					if (!Ve(o.size)) {
						d('Invalid type for parameter "size", expected normal|compact, got "'.concat(o.size, '" ').concat(C(o.size)), 3590);
						return
					}
					if (!De(o.theme)) {
						d('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(o.theme, '" ').concat(C(o.theme)), 3591);
						return
					}
					if (!Me(o.retry)) {
						d('Invalid type for parameter "retry", expected never|auto, got "'.concat(o.retry, '" ').concat(C(o.retry)), 3592);
						return
					}
					if (o.language || (o.language = "auto"), !He(o.language)) {
						d('Invalid language value: "'.concat(o.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
						return
					}
					if (!je(o.appearance)) {
						d('Unknown appearance value: "'.concat(o.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
						return
					}
					if (!Be(o.execution)) {
						d('Unknown execution value: "'.concat(o.execution, ", expected either: 'render' or 'execute'."), 3601);
						return
					}
					if (!Ue(o["retry-interval"])) {
						d('Invalid retry-interval value: "'.concat(o["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
						return
					}
					if (!We(o["expiry-interval"])) {
						d('Invalid expiry-interval value: "'.concat(o["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
						return
					}
					var ne, M = (ne = o["refresh-expired"]) !== null && ne !== void 0 ? ne : U.AUTO;
					if (qe(M)) o["refresh-expired"] = M;
					else {
						d('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(M, '" ').concat(typeof M == "undefined" ? "undefined" : C(M)), 3603);
						return
					}
					var Ie = a.getElementsByTagName("iframe")[0];
					Ie != null && Ie.id.startsWith(K) && f(a);
					var k = document.createElement("iframe");
					if (!Fe(h)) {
						d('Invalid input for optional parameter "action", got "'.concat(h, '"'), 3604);
						return
					}
					if (!ze(T)) {
						d('Invalid input for optional parameter "cData", got "'.concat(T, '"'), 3605);
						return
					}
					var de = s(),
						$ = z(de);
					if (!(!de || !$)) {
						var Je = [],
							Re = o.execution === J.RENDER;
						Re && Je.push(V.EXECUTE), G++;
						var Nt = +new Date,
							Lt = {};
						b.set(de, Ne({
							idx: G,
							action: h,
							cData: T,
							chlPageData: A,
							cbSuccess: le,
							cbError: te,
							cbExpired: ue,
							cbTimeout: se,
							cbUnsupported: re,
							cbAfterInteractive: Se,
							cbBeforeInteractive: fe,
							params: o,
							isStale: !1,
							isExpired: !1,
							isExecuting: Re,
							isResetting: !1,
							isExecuted: Re,
							isInitialized: !1,
							msgQueue: Je,
							rcV: q,
							widgetStartTime: Nt,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0
							}
						}, Lt)), Et(b), k.style.display = "none", k.style.border = "none", k.style.overflow = "hidden", k.setAttribute("src", St(de, x, o, q)), k.setAttribute("allow", "cross-origin-isolated; fullscreen"), k.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), k.id = $;
						var Oe;
						k.tabIndex = (Oe = o.tabindex) !== null && Oe !== void 0 ? Oe : 0, k.title = "Widget containing a Cloudflare security challenge", a.appendChild(k);
						var Ce, Pt = (Ce = o["response-field"]) !== null && Ce !== void 0 ? Ce : !0;
						if (Pt) {
							var pe = document.createElement("input");
							pe.type = "hidden";
							var ke;
							if (pe.name = (ke = o["response-field-name"]) !== null && ke !== void 0 ? ke : pt, pe.id = "".concat($, "_response"), a.appendChild(pe), typeof o["response-field-name"] != "string" && Gt(x)) {
								var ve = document.createElement("input");
								ve.type = "hidden", ve.name = dt, ve.id = "".concat($, "_legacy_response"), a.appendChild(ve)
							}
						}
						if (Ae) {
							var _e = document.createElement("input");
							_e.type = "hidden", _e.name = vt, _e.id = "".concat($, "_g_response"), a.appendChild(_e)
						}
						return $
					}
				}
			},
			w = function() {
				var c, t = -1,
					a = !0,
					r = !1,
					u = void 0;
				try {
					for (var o = b[Symbol.iterator](), h; !(a = (h = o.next()).done); a = !0) {
						var T = ye(h.value, 2),
							A = T[0],
							x = T[1];
						t < x.idx && (c = A, t = x.idx)
					}
				} catch (E) {
					r = !0, u = E
				} finally {
					try {
						!a && o.return != null && o.return()
					} finally {
						if (r) throw u
					}
				}
				if (t === -1) {
					d("Could not find widget", 43778);
					return
				}
				return c
			};

		function p(m, c, t, a) {
			return S.apply(this, arguments)
		}

		function S() {
			return S = Ze(function(m, c, t, a) {
				var r, u, o, h, T, A, x, E, X;
				return ge(this, function(I) {
					switch (I.label) {
						case 0:
							if (r = m.params.sitekey, u = It(), !u) return g("Cannot determine Turnstile's embedded location, aborting clearance redemption."), n(m, c, !1), [2];
							o = "h/".concat("b", "/"), h = new URL(u), T = "https", A = "".concat(T, "://").concat(h.host, "/cdn-cgi/challenge-platform/").concat(o, "rc/").concat(a), I.label = 1;
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
							return x = I.sent(), x.status === 200 ? [3, 3] : (g("Cannot determine Turnstile's embedded location, aborting clearance redemption."), n(m, c, !1), [3, 5]);
						case 3:
							return [4, x.json()];
						case 4:
							if (E = I.sent(), "status" in E && E.status === "redeemed") return n(m, c, !0), [2];
							I.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return X = I.sent(), g("Error contacting Turnstile, aborting clearance remdeption."), n(m, c, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), S.apply(this, arguments)
		}
		var b = new Map,
			G = 0,
			Y = function(c) {
				var t = c.data;
				if (t.source === H) {
					if (!Bt(c)) {
						g("Ignored message from wrong origin: " + c.origin);
						return
					}
					if (!(!t.widgetId || !b.has(t.widgetId))) {
						var a = z(t.widgetId),
							r = b.get(t.widgetId);
						if (!(!a || !r)) switch (t.event) {
							case "init": {
								var u = document.getElementById(a);
								if (!u) {
									d("Cannot initialize Widget, Element not found (#".concat(a, ")."), 3074);
									return
								}
								r.mode = t.mode, r.mode === N.INVISIBLE && r.params["refresh-expired"] === U.MANUAL && g("refresh-expired=manual is impossible in invisible mode, consider using '".concat(U.AUTO, "' or '").concat(U.NEVER, "'")), r.params.appearance === W.ALWAYS ? Xe(u, r) : At(u), u.style.display = "";
								break
							}
							case "translationInit": {
								var o = document.getElementById(a);
								if (!o) {
									d("Cannot initialize Widget, Element not found (#".concat(a, ")."), 3074);
									return
								}
								var h = new Map;
								Object.keys(t.translationData).forEach(function(M) {
									h.set(M, t.translationData[M])
								}), Ht(o, h);
								break
							}
							case "reject": {
								var T = document.getElementById(a);
								if (r.isExecuting = !1, !T) {
									d("Cannot initialize Widget, Element not found (#".concat(a, ")."), 3075);
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
								r.rcV = q, r.response = t.token, t.sToken ? p(r, a, t.sToken, t.chlId) : n(r, a, !1);
								break
							}
							case "fail": {
								t.rcV && (r.rcV = t.rcV), t.cfChlOut && (r.cfChlOut = t.cfChlOut), t.cfChlOutS && (r.cfChlOutS = t.cfChlOutS), r.isExecuting = !1, r.isInitialized = !0, Ye(a);
								var x = r.cbError;
								if (x) {
									var E;
									x((E = t.code) !== null && E !== void 0 ? E : String(at)) || (t.code && g(t.code), e(r, a, t.code === "crashed"))
								} else t.code ? (e(r, a, t.code === "crashed"), d(t.code, 3076)) : e(r, a, !1);
								break
							}
							case "feedbackInit":
								break;
							case "requestFeedbackData": {
								if (!1) var X, I;
								break
							}
							case "turnstileResults": {
								if (!1) var oe, ce;
								break
							}
							case "tokenExpired": {
								var ee = t.token;
								r.isExpired = !0;
								var Q = r.cbExpired;
								Q && Q(ee), r.params["refresh-expired"] === U.AUTO && !r.isResetting && y(a);
								break
							}
							case "interactiveTimeout": {
								r.rcV = q, Ye(a);
								var le = r.cbTimeout;
								le && le();
								break
							}
							case "refreshRequest": {
								r.rcV = q, y(a);
								break
							}
							case "interactiveBegin": {
								var ue = document.getElementById(a);
								if (!ue) {
									d("Cannot layout widget, Element not found (#".concat(a, ")."), 3076);
									return
								}
								var se = r.cbBeforeInteractive;
								se && se(), r.params.appearance === W.INTERACTION_ONLY && Xe(ue, r);
								break
							}
							case "interactiveEnd": {
								var Se = document.getElementById(a);
								if (!Se) {
									d("Cannot unlayout widget, Element not found (#".concat(a, ")."), 3077);
									return
								}
								var fe = r.cbAfterInteractive;
								fe && fe();
								break
							}
							case "widgetStale": {
								r.isStale = !0;
								break
							}
							case "requestExtraParams": {
								var te, re = document.querySelector("#".concat(a));
								if (!re) {
									d("Received state for an unknown widget: ".concat(t.widgetId), 3078);
									return
								}
								r.isResetting = !1;
								var ne = {};
								(te = re.contentWindow) === null || te === void 0 || te.postMessage(Ne({
									source: H,
									widgetId: t.widgetId,
									event: "extraParams",
									action: r.action,
									cData: r.cData,
									chlPageData: r.chlPageData,
									rcV: r.rcV,
									ch: "5b09fceb",
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
										"ht.atrs": i(document.body.parentNode)
									},
									turnstileAge: +Date.now() - qt,
									widgetAge: +Date.now() - r.widgetStartTime
								}, ne), "*"), l(r, t.widgetId, re), r.isInitialized = !0;
								break
							}
						}
					}
				}
			};
		window.addEventListener("message", Y);

		function O(m) {
			if (typeof m == "string") {
				var c = Ge(m);
				if (c && b.has(c)) return c;
				try {
					var t = document.querySelector(m);
					return t ? O(t) : null
				} catch (r) {
					return null
				}
			}
			if (R(m, HTMLElement)) {
				var a = m.querySelector("iframe");
				return a ? Ge(a.id) : null
			}
			return m || b.size === 0 ? null : b.keys().next().value
		}
		return {
			ready: function(c) {
				if (Rt && (g("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), d("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof c != "function" && d('turnstile.ready() expected a "function" argument, got "'.concat(typeof c == "undefined" ? "undefined" : C(c), '"'), 3841), c(), typeof c != "function" && d('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), Ct) {
					c();
					return
				}
				Qe.push(c)
			},
			implicitRender: Ot,
			execute: function(c, t) {
				var a = O(c);
				if (!a) {
					if (t === void 0) {
						d("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var r = _(c, t);
					if (!r) {
						d("Failed to render widget", 43522);
						return
					}
					a = r
				}
				var u = b.get(a);
				if (u) {
					v(u, t);
					var o = z(a);
					if (u.isExecuting) {
						g("Call to execute() on a widget that is already executing (".concat(o, "), consider using reset() before execute()"));
						return
					} else u.isExecuting = !0;
					if (u.response) {
						u.isExecuting = !1, g("Call to execute() on a widget that was already executed (".concat(o, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), u.cbSuccess && u.cbSuccess(u.response, !1);
						return
					}
					u.isStale && y(o), u.isExpired && g("Call to execute on a expired-widget (".concat(o, "), consider using reset() before")), u.msgQueue.push(V.EXECUTE), u.isExecuted = !0;
					var h = document.querySelector("#".concat(o));
					if (!h) {
						u.isExecuting = !1, d("Widget ".concat(o, " to execute was not found"), 43522);
						return
					}
					u.isInitialized && l(u, a, h), u.params.appearance === W.EXECUTE && Xe(h, u)
				}
			},
			render: _,
			reset: y,
			remove: f,
			getResponse: function(c) {
				var t;
				if (typeof c == "undefined") {
					var a = w();
					if (a) {
						var r, u = b.get(a);
						return u != null && u.isExpired && g("Call to getResponse on a widget that expired, consider refreshing the widget."), (r = b.get(a)) === null || r === void 0 ? void 0 : r.response
					} else d("Could not find a widget", 43794)
				}
				var o = O(c);
				if (!o) {
					d("Could not find widget for provided container", 43778);
					return
				}
				return (t = b.get(o)) === null || t === void 0 ? void 0 : t.response
			},
			isExpired: function(c) {
				var t;
				if (typeof c == "undefined") {
					var a = w();
					if (a) {
						var r, u;
						return (u = (r = b.get(a)) === null || r === void 0 ? void 0 : r.isExpired) !== null && u !== void 0 ? u : !1
					} else d("Could not find a widget", 43794)
				}
				var o = O(c);
				if (!o) return d("Could not find widget for provided container", 43778), !1;
				var h;
				return (h = (t = b.get(o)) === null || t === void 0 ? void 0 : t.isExpired) !== null && h !== void 0 ? h : !1
			}
		}
	}();

	function Yt(e) {
		var n = e.getAttribute("data-sitekey"),
			i = {
				sitekey: n
			},
			s = e.getAttribute("data-tabindex");
		s && (i.tabindex = parseInt(s, 10));
		var l = e.getAttribute("data-theme");
		l && (De(l) ? i.theme = l : g('Unknown data-theme value: "'.concat(l, '"')));
		var v = e.getAttribute("data-size");
		if (v && (Ve(v) ? i.size = v : g('Unknown data-size value: "'.concat(v, '"'))), !1) var y;
		var f = e.getAttribute("data-action");
		typeof f == "string" && (i.action = f);
		var _ = e.getAttribute("data-cdata");
		typeof _ == "string" && (i.cData = _);
		var w = e.getAttribute("data-retry");
		w && (Me(w) ? i.retry = w : g('Invalid data-retry value: "'.concat(w, ", expected either 'never' or 'auto'\"")));
		var p = e.getAttribute("data-retry-interval");
		if (p) {
			var S = parseInt(p, 10);
			Ue(S) ? i["retry-interval"] = S : g('Invalid data-retry-interval value: "'.concat(p, ', expected an integer value > 0 and < 900000"'))
		}
		var b = e.getAttribute("data-expiry-interval");
		if (b) {
			var G = parseInt(b, 10);
			We(G) ? i["expiry-interval"] = G : g('Invalid data-expiry-interval value: "'.concat(G, ', expected an integer value > 0 and < 360000"'))
		}
		var Y = e.getAttribute("data-refresh-expired");
		Y && (qe(Y) ? i["refresh-expired"] = Y : g('Unknown data-refresh-expired value: "'.concat(Y, ", expected either: 'never', 'auto' or 'manual'.")));
		var O = e.getAttribute("data-language");
		O && (He(O) ? i.language = O : g('Invalid data-language value: "'.concat(O, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));
		var m = e.getAttribute("data-error-callback");
		m && window[m] && (i["error-callback"] = window[m]);
		var c = e.getAttribute("data-unsupported-callback");
		c && window[c] && m && window[m] && (i["unsupported-callback"] = window[m]);
		var t = e.getAttribute("data-callback");
		t && window[t] && (i.callback = window[t]);
		var a = e.getAttribute("data-expired-callback");
		a && window[a] && (i["expired-callback"] = window[a]);
		var r = e.getAttribute("data-timeout-callback");
		r && window[r] && (i["timeout-callback"] = window[r]);
		var u = e.getAttribute("data-after-interactive-callback");
		u && window[u] && (i["after-interactive-callback"] = window[u]);
		var o = e.getAttribute("data-before-interactive-callback");
		o && window[o] && (i["before-interactive-callback"] = window[o]);
		var h, T = (h = e.getAttribute("data-response-field")) !== null && h !== void 0 ? h : "true";
		i["response-field"] = T === "true";
		var A = e.getAttribute("data-response-field-name");
		A && (i["response-field-name"] = A);
		var x = e.getAttribute("data-execution");
		x && (Be(x) ? i.execution = x : g('Unknown data-execution value: "'.concat(x, ", expected either: 'render' or 'execute'.")));
		var E = e.getAttribute("data-appearance");
		return E && (je(E) ? i.appearance = E : g('Unknown data-appearance value: "'.concat(E, ", expected either: 'always', 'execute', or 'interaction-only'."))), i
	}

	function Xt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			n = document.currentScript;
		if (R(n, HTMLScriptElement) && e.test(n.src)) return n;
		for (var i = document.querySelectorAll("script"), s = 0, l; l = i[s]; s++)
			if (R(l, HTMLScriptElement) && e.test(l.src)) return l
	}

	function Qt() {
		var e = Xt();
		if (!e) return d("Could not find Turnstile script tag, some features may not be available", 43777), null;
		(e.async || e.defer) && (Rt = !0);
		var n = e.src,
			i = n.split("?");
		return i.length > 1 ? new URLSearchParams(i[1]) : new URLSearchParams
	}
	var B = Qt();
	B && (Z = B.get("compat"), (Z == null ? void 0 : Z.toLowerCase()) === "recaptcha" ? window.grecaptcha ? g("grecaptcha is already defined. The compatibility layer will not be enabled") : (g("Compatibility layer enabled"), Ae = !0, window.grecaptcha = $e) : Z !== null && g('Unknown value for api.js?compat: "'.concat(Z, '", ignoring')), B.forEach(function(e, n) {
		P(["onload", "compat", "render"], n) || g('Unknown parameter passed to api.js: "?'.concat(n, '=...", ignoring'))
	}), L = B.get("onload"), L && setTimeout(function() {
		typeof window[L] == "function" ? window[L]() : (g("Unable to find onload callback '".concat(L, "' immediately after loading, expected 'function', got '").concat(C(window[L]), "'")), setTimeout(function() {
			typeof window[L] == "function" ? window[L]() : g("Unable to find onload callback '".concat(L, "' after 1 second, expected 'function', got '").concat(C(window[L]), "'"))
		}, 1e3))
	}, 0));
	var Z, L, $t = "turnstile" in window;
	$t ? g("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = $e, (B == null ? void 0 : B.get("render")) !== "explicit" && Qe.push(Ot), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Tt, 0) : window.addEventListener("DOMContentLoaded", Tt));
})();