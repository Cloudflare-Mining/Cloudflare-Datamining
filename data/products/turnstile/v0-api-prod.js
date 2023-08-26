"use strict";
(function() {
	function Ge(e, a, i, s, u, v, _) {
		try {
			var f = e[v](_),
				y = f.value
		} catch (w) {
			i(w);
			return
		}
		f.done ? a(y) : Promise.resolve(y).then(s, u)
	}

	function Ye(e) {
		return function() {
			var a = this,
				i = arguments;
			return new Promise(function(s, u) {
				var v = e.apply(a, i);

				function _(y) {
					Ge(v, s, u, _, f, "next", y)
				}

				function f(y) {
					Ge(v, s, u, _, f, "throw", y)
				}
				_(void 0)
			})
		}
	}

	function O(e, a) {
		return a != null && typeof Symbol != "undefined" && a[Symbol.hasInstance] ? !!a[Symbol.hasInstance](e) : O(e, a)
	}

	function Xe(e) {
		if (Array.isArray(e)) return e
	}

	function Qe(e, a) {
		var i = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (i != null) {
			var s = [],
				u = !0,
				v = !1,
				_, f;
			try {
				for (i = i.call(e); !(u = (_ = i.next()).done) && (s.push(_.value), !(a && s.length === a)); u = !0);
			} catch (y) {
				v = !0, f = y
			} finally {
				try {
					!u && i.return != null && i.return()
				} finally {
					if (v) throw f
				}
			}
			return s
		}
	}

	function $e() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Oe(e, a) {
		(a == null || a > e.length) && (a = e.length);
		for (var i = 0, s = new Array(a); i < a; i++) s[i] = e[i];
		return s
	}

	function Je(e, a) {
		if (e) {
			if (typeof e == "string") return Oe(e, a);
			var i = Object.prototype.toString.call(e).slice(8, -1);
			if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(i);
			if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Oe(e, a)
		}
	}

	function de(e, a) {
		return Xe(e) || Qe(e, a) || Je(e, a) || $e()
	}

	function R(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function pe(e, a) {
		var i = function(p) {
				return function(S) {
					return s([p, S])
				}
			},
			s = function(p) {
				if (v) throw new TypeError("Generator is already executing.");
				for (; y && (y = 0, p[0] && (u = 0)), u;) try {
					if (v = 1, _ && (f = p[0] & 2 ? _.return : p[0] ? _.throw || ((f = _.return) && f.call(_), 0) : _.next) && !(f = f.call(_, p[1])).done) return f;
					switch (_ = 0, f && (p = [p[0] & 2, f.value]), p[0]) {
						case 0:
						case 1:
							f = p;
							break;
						case 4:
							return u.label++, {
								value: p[1],
								done: !1
							};
						case 5:
							u.label++, _ = p[1], p = [0];
							continue;
						case 7:
							p = u.ops.pop(), u.trys.pop();
							continue;
						default:
							if (f = u.trys, !(f = f.length > 0 && f[f.length - 1]) && (p[0] === 6 || p[0] === 2)) {
								u = 0;
								continue
							}
							if (p[0] === 3 && (!f || p[1] > f[0] && p[1] < f[3])) {
								u.label = p[1];
								break
							}
							if (p[0] === 6 && u.label < f[1]) {
								u.label = f[1], f = p;
								break
							}
							if (f && u.label < f[2]) {
								u.label = f[2], u.ops.push(p);
								break
							}
							f[2] && u.ops.pop(), u.trys.pop();
							continue
					}
					p = a.call(e, u)
				} catch (S) {
					p = [6, S], _ = 0
				} finally {
					v = f = 0
				}
				if (p[0] & 5) throw p[1];
				return {
					value: p[0] ? p[1] : void 0,
					done: !0
				}
			},
			u = {
				label: 0,
				sent: function() {
					if (f[0] & 1) throw f[1];
					return f[1]
				},
				trys: [],
				ops: []
			},
			v, _, f, y;
		return y = {
			next: i(0),
			throw: i(1),
			return: i(2)
		}, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
			return this
		}), y
	}

	function M(e, a) {
		return e.indexOf(a) !== -1
	}
	var k;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(k || (k = {}));
	var P;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(P || (P = {}));
	var ve;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(ve || (ve = {}));
	var ae;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(ae || (ae = {}));
	var D;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(D || (D = {}));
	var W;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(W || (W = {}));
	var K;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(K || (K = {}));
	var q;
	(function(e) {
		e.EXECUTE = "execute"
	})(q || (q = {}));
	var Re;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(Re || (Re = {}));

	function Ce(e) {
		return M(["auto", "dark", "light"], e)
	}

	function ke(e) {
		return M(["auto", "never"], e)
	}

	function Ne(e) {
		return e > 0 && e < 9e5
	}
	var St = /^[0-9A-Za-z_-]{3,100}$/;

	function Ke(e) {
		return St.test(e)
	}
	var Ot = /^[a-z0-9_-]{0,32}$/i;

	function Le(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ot.test(e)
	}
	var Rt = /^[a-z0-9_\-=]{0,255}$/i;

	function Me(e) {
		return e === void 0 ? !0 : typeof e == "string" && Rt.test(e)
	}

	function Pe(e) {
		return M(["normal", "compact", "invisible"], e)
	}

	function Ue(e) {
		return M(["auto", "manual", "never"], e)
	}
	var Ct = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function De(e) {
		return e === "auto" || Ct.test(e)
	}

	function We(e) {
		return M(["always", "execute", "interaction-only"], e)
	}

	function Fe(e) {
		return M(["render", "execute"], e)
	}
	var H = "0/0";
	var Z = "cf-chl-widget-",
		j = "cloudflare-challenge",
		Ze = ".cf-turnstile",
		et = ".cf-challenge",
		tt = ".g-recaptcha",
		rt = "cf_challenge_response",
		nt = "cf-turnstile-response",
		at = "g-recaptcha-response",
		it = 8e3;

	function ye(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function ot(e, a) {
		if (!O(e, a)) throw new TypeError("Cannot call a class as a function")
	}

	function ct(e, a, i) {
		return a in e ? Object.defineProperty(e, a, {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[a] = i, e
	}

	function F(e, a) {
		return F = Object.setPrototypeOf || function(s, u) {
			return s.__proto__ = u, s
		}, F(e, a)
	}

	function ut(e, a) {
		if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(a && a.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), a && F(e, a)
	}

	function _e() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function ie(e, a, i) {
		return _e() ? ie = Reflect.construct : ie = function(u, v, _) {
			var f = [null];
			f.push.apply(f, v);
			var y = Function.bind.apply(u, f),
				w = new y;
			return _ && F(w, _.prototype), w
		}, ie.apply(null, arguments)
	}

	function G(e) {
		return G = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
			return i.__proto__ || Object.getPrototypeOf(i)
		}, G(e)
	}

	function lt(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function me(e) {
		var a = typeof Map == "function" ? new Map : void 0;
		return me = function(s) {
			var u = function() {
				return ie(s, arguments, G(this).constructor)
			};
			if (s === null || !lt(s)) return s;
			if (typeof s != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof a != "undefined") {
				if (a.has(s)) return a.get(s);
				a.set(s, u)
			}
			return u.prototype = Object.create(s.prototype, {
				constructor: {
					value: u,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), F(u, s)
		}, me(e)
	}

	function st(e, a) {
		return a && (R(a) === "object" || typeof a == "function") ? a : ye(e)
	}

	function ft(e) {
		var a = _e();
		return function() {
			var s = G(e),
				u;
			if (a) {
				var v = G(this).constructor;
				u = Reflect.construct(s, arguments, v)
			} else u = s.apply(this, arguments);
			return st(this, u)
		}
	}
	var dt = function(e) {
		"use strict";
		ut(i, e);
		var a = ft(i);

		function i(s, u) {
			ot(this, i);
			var v;
			return v = a.call(this, s), ct(ye(v), "code", void 0), v.name = "TurnstileError", v.code = u, v
		}
		return i
	}(me(Error));

	function d(e, a) {
		var i = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new dt(i, a)
	}

	function g(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function ze(e) {
		return e.startsWith(Z) ? e.substring(Z.length) : null
	}

	function z(e) {
		return "".concat(Z).concat(e)
	}
	var he = null,
		ge = 0,
		kt = 1500,
		Nt = 5;

	function Lt(e) {
		ge++;
		var a = !0,
			i = !1,
			s = void 0;
		try {
			for (var u = e[Symbol.iterator](), v; !(a = (v = u.next()).done); a = !0) {
				var _ = de(v.value, 2),
					f = _[0],
					y = _[1],
					w;
				y.watchcat.seq = ge, y.watchcat.lastAckedSeq === 0 && (y.watchcat.lastAckedSeq = ge);
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
				if ((y.isExecuting || !y.isInitialized || y.isInitialized && !y.isStale && !y.isExecuted) && y.watchcat.lastAckedSeq !== 0 && y.watchcat.lastAckedSeq < y.watchcat.seq - 1 - Nt) {
					y.watchcat.lastAckedSeq = 0, y.watchcat.seq = 0, console.log("Turnstile Widget seem to have crashed: ", f), window.postMessage({
						source: j,
						widgetId: f,
						code: "crashed",
						event: "fail"
					}, "*");
					continue
				}(w = S.contentWindow) === null || w === void 0 || w.postMessage({
					source: j,
					widgetId: f,
					seq: ge,
					event: "meow"
				}, "*")
			}
		} catch (x) {
			i = !0, s = x
		} finally {
			try {
				!a && u.return != null && u.return()
			} finally {
				if (i) throw s
			}
		}
	}

	function pt(e) {
		he === null && (he = setInterval(function() {
			Lt(e)
		}, kt))
	}

	function vt(e) {
		he !== null && e.size === 0 && clearInterval(he)
	}
	var Mt = +new Date,
		xe = !1,
		ht = !1;

	function Ve(e) {
		Et(e, "")
	}

	function xt() {
		var e = [Ze, et];
		xe && e.push(tt), document.querySelectorAll(e.join(", ")).forEach(function(a) {
			return He.render(a)
		})
	}
	var qe = [],
		bt = !1;

	function yt() {
		bt = !0;
		var e = !0,
			a = !1,
			i = void 0;
		try {
			for (var s = qe[Symbol.iterator](), u; !(e = (u = s.next()).done); e = !0) {
				var v = u.value;
				v()
			}
		} catch (_) {
			a = !0, i = _
		} finally {
			try {
				!e && s.return != null && s.return()
			} finally {
				if (a) throw i
			}
		}
	}

	function Et(e, a) {
		var i = document.getElementById("".concat(e, "_response"));
		i !== null && O(i, HTMLInputElement) && (i.value = a);
		var s = document.getElementById("".concat(e, "_legacy_response"));
		if (s !== null && O(s, HTMLInputElement) && (s.value = a), xe) {
			var u = document.getElementById("".concat(e, "_g_response"));
			u !== null && O(u, HTMLInputElement) && (u.value = a)
		}
	}

	function Be(e, a) {
		var i, s = (i = a.params.size) !== null && i !== void 0 ? i : "normal",
			u = a.mode;
		switch (u) {
			case k.NON_INTERACTIVE:
			case k.MANAGED:
				switch (s) {
					case P.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case P.INVISIBLE:
						d('Invalid value for parameter "size", expected "'.concat(P.COMPACT, '" or "').concat(P.NORMAL, '", got "').concat(s, '"'), 2817);
					case P.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case k.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				d('Invalid value for parameter "mode", expected "'.concat(k.NON_INTERACTIVE, '", "').concat(k.MANAGED, '" or "').concat(k.INVISIBLE, '", got "').concat(u, '"'), 2818);
				return
		}
	}

	function _t(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Pt(e, a) {
		var i = a.get("turnstile_iframe_alt");
		i && (e.title = i)
	}

	function Ut(e) {
		var a = "https://challenges.cloudflare.com";
		if (!1) var i;
		return a
	}

	function mt(e, a, i, s) {
		var u = Ut(i),
			v = "h/".concat("b", "/");
		return "".concat(u, "/cdn-cgi/challenge-platform/").concat(v, "turnstile/if/ov2/av0/rcv").concat(s, "/").concat(e, "/").concat(a, "/").concat(i.theme, "/").concat(i.size)
	}

	function Dt(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Wt(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function gt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var He = function() {
		var e = function(c, t, n) {
				if (c.params.retry === ae.AUTO || n) {
					c.isExecuted && (c.msgQueue.push(q.EXECUTE), c.isExecuted = !0, c.isExecuting = !0);
					var r, l = n ? 0 : 1e3 * 2 + ((r = c.params["retry-interval"]) !== null && r !== void 0 ? r : 0);
					c.retryTimeout = window.setTimeout(function() {
						_(t)
					}, l)
				}
			},
			a = function(c, t, n) {
				if (c.response === void 0) {
					d("[Internal Error] Widget was completed but no response was given", 1362);
					return
				}
				c.isExecuting = !1, Et(t, c.response);
				var r = c.cbSuccess;
				r && r(c.response, n)
			},
			i = function(c) {
				if (!c) return [];
				for (var t = c.attributes, n = t.length, r = new Array(n), l = 0; l < n; l++) r[l] = t[l].name;
				return r
			},
			s = function() {
				var c;
				do {
					c = "";
					for (var t = "abcdefghijklmnopqrstuvwxyz0123456789", n = t.length, r = 0; r < 5; r++) c += t.charAt(Math.floor(Math.random() * n))
				} while (x.has(c));
				return c
			},
			u = function(c, t, n) {
				for (; c.msgQueue.length;) {
					var r, l = c.msgQueue.pop();
					(r = n.contentWindow) === null || r === void 0 || r.postMessage({
						source: j,
						widgetId: t,
						event: l
					}, "*")
				}
			},
			v = function(c, t) {
				if (t) {
					var n = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
						r = [],
						l = !0,
						o = !1,
						h = void 0;
					try {
						for (var E = n[Symbol.iterator](), A; !(l = (A = E.next()).done); l = !0) {
							var b = A.value;
							t[b] && t[b] !== c.params[b] && r.push(b)
						}
					} catch (T) {
						o = !0, h = T
					} finally {
						try {
							!l && E.return != null && E.return()
						} finally {
							if (o) throw h
						}
					}
					if (r.length !== 0) {
						d("The parameters ".concat(n.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(r.join(",")), 3618);
						return
					}
					if (t.action) {
						if (!Le(t.action)) {
							d('Invalid input for optional parameter "action", got "'.concat(t.action, '"'), 3604);
							return
						}
						c.action = t.action
					}
					if (t.cData) {
						if (!Me(t.cData)) {
							d('Invalid input for optional parameter "cData", got "'.concat(t.cData, '"'), 3605);
							return
						}
						c.cData = t.cData
					}
					t["after-interactive-callback"] && (c.cbAfterInteractive = t["after-interactive-callback"]), t["before-interactive-callback"] && (c.cbBeforeInteractive = t["before-interactive-callback"]), t.callback && (c.cbSuccess = t.callback), t["expired-callback"] && (c.cbExpired = t["expired-callback"]), t["timeout-callback"] && (c.cbTimeout = t["timeout-callback"]), t["error-callback"] && (c.cbError = t["error-callback"]), t["unsupported-callback"] && (c.cbUnsupported = t["unsupported-callback"]), t.chlPageData && (c.chlPageData = t.chlPageData)
				}
			},
			_ = function(c) {
				var t = L(c);
				if (!t) {
					d("Nothing to reset found for provided container", 3329);
					return
				}
				var n = x.get(t);
				if (n) {
					n.isResetting = !0, n.response = void 0, n.mode = void 0, n.msgQueue = [], n.isExpired = !1, n.isExecuting = !1, n.isStale = !1, n.isInitialized = !1, n.watchcat.lastAckedSeq = 0, n.watchcat.seq = 0, n.params.execution === K.RENDER && (n.msgQueue.push(q.EXECUTE), n.isExecuted = !0, n.isExecuting = !0);
					var r = z(t),
						l = document.querySelector("#".concat(r));
					if (!r || !l) {
						d("Widget ".concat(t, " to reset was not found."), 3330);
						return
					}
					if (n.params.appearance === W.INTERACTION_ONLY && _t(l), n.params.sitekey === null) {
						d("Unexpected Error: Sitekey is null", 3347);
						return
					}
					var o;
					l.src = mt(t, n.params.sitekey, n.params, (o = n.rcV) !== null && o !== void 0 ? o : H), Ve(r), n.retryTimeout && window.clearTimeout(n.retryTimeout)
				} else {
					d("Widget ".concat(t, " to reset was not found."), 3331);
					return
				}
			},
			f = function(c) {
				var t, n = L(c);
				if (!n || !x.has(n)) {
					g("Nothing to remove found for the provided container");
					return
				}
				var r = z(n),
					l = ["iframe#".concat(r), "input#".concat(r, "_response"), "input#".concat(r, "_legacy_response"), "input#".concat(r, "_g_response")];
				document.querySelectorAll(l.join(", ")).forEach(function(h) {
					return h.remove()
				});
				var o = (t = x.get(n)) === null || t === void 0 ? void 0 : t.retryTimeout;
				o && window.clearTimeout(o), x.delete(n), vt(x)
			},
			y = function(c, t) {
				var n;
				if (typeof c == "string") try {
						var r = document.querySelector(c);
						if (!r) {
							d('Unable to find a container for "'.concat(c, '"'), 3585);
							return
						}
						n = r
					} catch (qt) {
						d('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(c, '"'), 3586);
						return
					} else if (O(c, HTMLElement)) n = c;
					else {
						d('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
						return
					} var l = Ft(n);
				if (l) {
					var o = Object.assign(l, t),
						h = o.action,
						E = o.cData,
						A = o.chlPageData,
						b = o.sitekey,
						T;
					o.theme = (T = o.theme) !== null && T !== void 0 ? T : ve.AUTO;
					var B;
					o.retry = (B = o.retry) !== null && B !== void 0 ? B : ae.AUTO;
					var I;
					o.execution = (I = o.execution) !== null && I !== void 0 ? I : K.RENDER;
					var X;
					o.appearance = (X = o.appearance) !== null && X !== void 0 ? X : W.ALWAYS;
					var Q;
					o["retry-interval"] = (Q = o["retry-interval"]) !== null && Q !== void 0 ? Q : it;
					var $;
					o.size = ($ = o.size) !== null && $ !== void 0 ? $ : P.NORMAL;
					var be = o.callback,
						oe = o["expired-callback"],
						te = o["timeout-callback"],
						re = o["after-interactive-callback"],
						ce = o["before-interactive-callback"],
						wt = o["error-callback"],
						At = o["unsupported-callback"];
					if (typeof b != "string") {
						d('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof b == "undefined" ? "undefined" : R(b), '"'), 3588);
						return
					}
					if (!Ke(b)) {
						d('Invalid input for parameter "sitekey", got "'.concat(b, '"'), 3589);
						return
					}
					if (!Pe(o.size)) {
						d('Invalid type for parameter "size", expected normal|compact, got "'.concat(o.size, '" ').concat(R(o.size)), 3590);
						return
					}
					if (!Ce(o.theme)) {
						d('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(o.theme, '" ').concat(R(o.theme)), 3591);
						return
					}
					if (!ke(o.retry)) {
						d('Invalid type for parameter "retry", expected never|auto, got "'.concat(o.retry, '" ').concat(R(o.retry)), 3592);
						return
					}
					if (o.language || (o.language = "auto"), !De(o.language)) {
						d('Invalid data-language value: "'.concat(o.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
						return
					}
					if (!We(o.appearance)) {
						d('Unknown data-appearance value: "'.concat(o.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
						return
					}
					if (!Fe(o.execution)) {
						d('Unknown data-execution value: "'.concat(o.execution, ", expected either: 'render' or 'execute'."), 3601);
						return
					}
					if (!Ne(o["retry-interval"])) {
						d('Invalid data-retry-interval value: "'.concat(o["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
						return
					}
					var Ee, ne = (Ee = o["refresh-expired"]) !== null && Ee !== void 0 ? Ee : D.AUTO;
					if (Ue(ne)) o["refresh-expired"] = ne;
					else {
						d('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(ne, '" ').concat(typeof ne == "undefined" ? "undefined" : R(ne)), 3603);
						return
					}
					var we = n.getElementsByTagName("iframe")[0];
					we != null && we.id.startsWith(Z) && f(n);
					var C = document.createElement("iframe");
					if (!Le(h)) {
						d('Invalid input for optional parameter "action", got "'.concat(h, '"'), 3604);
						return
					}
					if (!Me(E)) {
						d('Invalid input for optional parameter "cData", got "'.concat(E, '"'), 3605);
						return
					}
					var ue = s(),
						J = z(ue);
					if (!(!ue || !J)) {
						var je = [],
							Ae = o.execution === K.RENDER;
						Ae && je.push(q.EXECUTE), V++;
						var Tt = +new Date;
						x.set(ue, {
							idx: V,
							action: h,
							cData: E,
							chlPageData: A,
							cbSuccess: be,
							cbError: wt,
							cbExpired: oe,
							cbTimeout: te,
							cbUnsupported: At,
							cbAfterInteractive: re,
							cbBeforeInteractive: ce,
							params: o,
							isStale: !1,
							isExpired: !1,
							isExecuting: Ae,
							isResetting: !1,
							isExecuted: Ae,
							isInitialized: !1,
							msgQueue: je,
							rcV: H,
							widgetStartTime: Tt,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0
							}
						}), pt(x), C.style.display = "none", C.style.border = "none", C.style.overflow = "hidden", C.setAttribute("src", mt(ue, b, o, H)), C.setAttribute("allow", "cross-origin-isolated; fullscreen"), C.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), C.id = J;
						var Te;
						C.tabIndex = (Te = o.tabindex) !== null && Te !== void 0 ? Te : 0, C.title = "Widget containing a Cloudflare security challenge", n.appendChild(C);
						var Ie, It = (Ie = o["response-field"]) !== null && Ie !== void 0 ? Ie : !0;
						if (It) {
							var le = document.createElement("input");
							le.type = "hidden";
							var Se;
							if (le.name = (Se = o["response-field-name"]) !== null && Se !== void 0 ? Se : nt, le.id = "".concat(J, "_response"), n.appendChild(le), typeof o["response-field-name"] != "string" && Wt(b)) {
								var se = document.createElement("input");
								se.type = "hidden", se.name = rt, se.id = "".concat(J, "_legacy_response"), n.appendChild(se)
							}
						}
						if (xe) {
							var fe = document.createElement("input");
							fe.type = "hidden", fe.name = at, fe.id = "".concat(J, "_g_response"), n.appendChild(fe)
						}
						return J
					}
				}
			},
			w = function() {
				var c, t = -1,
					n = !0,
					r = !1,
					l = void 0;
				try {
					for (var o = x[Symbol.iterator](), h; !(n = (h = o.next()).done); n = !0) {
						var E = de(h.value, 2),
							A = E[0],
							b = E[1];
						t < b.idx && (c = A, t = b.idx)
					}
				} catch (T) {
					r = !0, l = T
				} finally {
					try {
						!n && o.return != null && o.return()
					} finally {
						if (r) throw l
					}
				}
				if (t === -1) {
					d("Could not find widget", 43778);
					return
				}
				return c
			};

		function p(m, c, t, n) {
			return S.apply(this, arguments)
		}

		function S() {
			return S = Ye(function(m, c, t, n) {
				var r, l, o, h, E, A, b, T, B;
				return pe(this, function(I) {
					switch (I.label) {
						case 0:
							if (r = m.params.sitekey, l = gt(), !l) return g("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(m, c, !1), [2];
							o = "h/".concat("b", "/"), h = new URL(l), E = "https", A = "".concat(E, "://").concat(h.host, "/cdn-cgi/challenge-platform/").concat(o, "rc/").concat(n), I.label = 1;
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
							return b = I.sent(), b.status === 200 ? [3, 3] : (g("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(m, c, !1), [3, 5]);
						case 3:
							return [4, b.json()];
						case 4:
							if (T = I.sent(), "status" in T && T.status === "redeemed") return a(m, c, !0), [2];
							I.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return B = I.sent(), g("Error contacting Turnstile, aborting clearance remdeption."), a(m, c, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), S.apply(this, arguments)
		}
		var x = new Map,
			V = 0,
			U = function(c) {
				var t = c.data;
				if (t.source === j) {
					if (!Dt(c)) {
						g("Ignored message from wrong origin: " + c.origin);
						return
					}
					if (!(!t.widgetId || !x.has(t.widgetId))) {
						var n = z(t.widgetId),
							r = x.get(t.widgetId);
						if (!(!n || !r)) switch (t.event) {
							case "init": {
								var l = document.getElementById(n);
								if (!l) {
									d("Cannot initialize Widget, Element not found (#".concat(n, ")."), 3074);
									return
								}
								r.mode = t.mode, r.mode === k.INVISIBLE && r.params["refresh-expired"] === D.MANUAL && g("refresh-expired=manual is impossible in invisible mode, consider using '".concat(D.AUTO, "' or '").concat(D.NEVER, "'")), r.params.appearance === W.ALWAYS ? Be(l, r) : _t(l), l.style.display = "";
								break
							}
							case "translationInit": {
								var o = document.getElementById(n);
								if (!o) {
									d("Cannot initialize Widget, Element not found (#".concat(n, ")."), 3074);
									return
								}
								var h = new Map;
								Object.keys(t.translationData).forEach(function(ce) {
									h.set(ce, t.translationData[ce])
								}), Pt(o, h);
								break
							}
							case "reject": {
								var E = document.getElementById(n);
								if (r.isExecuting = !1, !E) {
									d("Cannot initialize Widget, Element not found (#".concat(n, ")."), 3075);
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
								r.rcV = H, r.response = t.token, t.sToken ? p(r, n, t.sToken, t.chlId) : a(r, n, !1);
								break
							}
							case "fail": {
								t.rcV && (r.rcV = t.rcV), r.isExecuting = !1, r.isInitialized = !0, Ve(n);
								var b = r.cbError;
								if (b) {
									var T;
									b((T = t.code) !== null && T !== void 0 ? T : "undefined_error") || (t.code && g(t.code), e(r, n, t.code === "crashed"))
								} else t.code ? (e(r, n, t.code === "crashed"), d(t.code, 3076)) : e(r, n, !1);
								break
							}
							case "feedbackInit":
								break;
							case "tokenExpired": {
								var B = t.token;
								r.isExpired = !0;
								var I = r.cbExpired;
								I && I(B), r.params["refresh-expired"] === D.AUTO && !r.isResetting && _(n);
								break
							}
							case "interactiveTimeout": {
								r.rcV = H, Ve(n);
								var X = r.cbTimeout;
								X && X();
								break
							}
							case "refreshRequest": {
								r.rcV = H, _(t.widgetId);
								break
							}
							case "interactiveBegin": {
								var Q = document.getElementById(n);
								if (!Q) {
									d("Cannot layout widget, Element not found (#".concat(n, ")."), 3076);
									return
								}
								var $ = r.cbBeforeInteractive;
								$ && $(), r.params.appearance === W.INTERACTION_ONLY && Be(Q, r);
								break
							}
							case "interactiveEnd": {
								var be = document.getElementById(n);
								if (!be) {
									d("Cannot unlayout widget, Element not found (#".concat(n, ")."), 3077);
									return
								}
								var oe = r.cbAfterInteractive;
								oe && oe();
								break
							}
							case "widgetStale": {
								r.isStale = !0;
								break
							}
							case "requestExtraParams": {
								var te, re = document.querySelector("#".concat(n));
								if (!re) {
									d("Received state for an unknown widget: ".concat(t.widgetId), 3078);
									return
								}
								r.isResetting = !1, (te = re.contentWindow) === null || te === void 0 || te.postMessage({
									source: j,
									widgetId: t.widgetId,
									event: "extraParams",
									action: r.action,
									cData: r.cData,
									chlPageData: r.chlPageData,
									rcV: r.rcV,
									ch: "be88c2a1",
									url: gt(),
									retry: r.params.retry,
									"retry-interval": r.params["retry-interval"],
									"refresh-expired": r.params["refresh-expired"],
									language: r.params.language,
									execution: r.params.execution,
									appearance: r.params.appearance,
									wPr: {
										"w.iW": window.innerWidth,
										"ht.atrs": i(document.body.parentNode)
									},
									turnstileAge: +Date.now() - Mt,
									widgetAge: +Date.now() - r.widgetStartTime
								}, "*"), u(r, t.widgetId, re), r.isInitialized = !0;
								break
							}
						}
					}
				}
			};
		window.addEventListener("message", U);

		function L(m) {
			if (typeof m == "string") {
				var c = ze(m);
				if (c && x.has(c)) return c;
				try {
					var t = document.querySelector(m);
					return t ? L(t) : null
				} catch (r) {
					return null
				}
			}
			if (O(m, HTMLElement)) {
				var n = m.querySelector("iframe");
				return n ? ze(n.id) : null
			}
			return m || x.size === 0 ? null : x.keys().next().value
		}
		return {
			ready: function(c) {
				if (ht && (g("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), d("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof c != "function" && d('turnstile.ready() expected a "function" argument, got "'.concat(typeof c == "undefined" ? "undefined" : R(c), '"'), 3841), c(), typeof c != "function" && d('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), bt) {
					c();
					return
				}
				qe.push(c)
			},
			implicitRender: xt,
			execute: function(c, t) {
				var n = L(c);
				if (!n) {
					if (t === void 0) {
						d("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var r = y(c, t);
					if (!r) {
						d("Failed to render widget", 43522);
						return
					}
					n = r
				}
				var l = x.get(n);
				if (l) {
					v(l, t);
					var o = z(n);
					if (l.isExecuting) {
						g("Call to execute() on a widget that is already executing (".concat(o, "), consider using reset() before execute()"));
						return
					} else l.isExecuting = !0;
					if (l.response) {
						l.isExecuting = !1, g("Call to execute() on a widget that was already executed (".concat(o, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), l.cbSuccess && l.cbSuccess(l.response, !1);
						return
					}
					l.isStale && _(o), l.isExpired && g("Call to execute on a expired-widget (".concat(o, "), consider using reset() before")), l.msgQueue.push(q.EXECUTE), l.isExecuted = !0;
					var h = document.querySelector("#".concat(o));
					if (!h) {
						l.isExecuting = !1, d("Widget ".concat(o, " to execute was not found"), 43522);
						return
					}
					l.isInitialized && u(l, n, h), l.params.appearance === W.EXECUTE && Be(h, l)
				}
			},
			render: y,
			reset: _,
			remove: f,
			getResponse: function(c) {
				var t;
				if (typeof c == "undefined") {
					var n = w();
					if (n) {
						var r, l = x.get(n);
						return l != null && l.isExpired && g("Call to getResponse on a widget that expired, consider refreshing the widget."), (r = x.get(n)) === null || r === void 0 ? void 0 : r.response
					} else d("Could not find a widget", 43794)
				}
				var o = L(c);
				if (!o) {
					d("Could not find widget for provided container", 43778);
					return
				}
				return (t = x.get(o)) === null || t === void 0 ? void 0 : t.response
			},
			isExpired: function(c) {
				var t;
				if (typeof c == "undefined") {
					var n = w();
					if (n) {
						var r, l;
						return (l = (r = x.get(n)) === null || r === void 0 ? void 0 : r.isExpired) !== null && l !== void 0 ? l : !1
					} else d("Could not find a widget", 43794)
				}
				var o = L(c);
				if (!o) return d("Could not find widget for provided container", 43778), !1;
				var h;
				return (h = (t = x.get(o)) === null || t === void 0 ? void 0 : t.isExpired) !== null && h !== void 0 ? h : !1
			}
		}
	}();

	function Ft(e) {
		var a = e.getAttribute("data-sitekey"),
			i = {
				sitekey: a
			},
			s = e.getAttribute("data-tabindex");
		s && (i.tabindex = parseInt(s, 10));
		var u = e.getAttribute("data-theme");
		u && (Ce(u) ? i.theme = u : g('Unknown data-theme value: "'.concat(u, '"')));
		var v = e.getAttribute("data-size");
		if (v && (Pe(v) ? i.size = v : g('Unknown data-size value: "'.concat(v, '"'))), !1) var _;
		var f = e.getAttribute("data-action");
		typeof f == "string" && (i.action = f);
		var y = e.getAttribute("data-cdata");
		typeof y == "string" && (i.cData = y);
		var w = e.getAttribute("data-retry");
		w && (ke(w) ? i.retry = w : g('Invalid data-retry value: "'.concat(w, ", expected either 'never' or 'auto'\"")));
		var p = e.getAttribute("data-retry-interval");
		if (p) {
			var S = parseInt(p, 10);
			Ne(S) ? i["retry-interval"] = S : g('Invalid data-retry-interval value: "'.concat(p, ', expected an integer value > 0 and < 900000"'))
		}
		var x = e.getAttribute("data-refresh-expired");
		x && (Ue(x) ? i["refresh-expired"] = x : g('Unknown data-refresh-expired value: "'.concat(x, ", expected either: 'never', 'auto' or 'manual'.")));
		var V = e.getAttribute("data-language");
		V && (De(V) ? i.language = V : g('Invalid data-language value: "'.concat(V, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));
		var U = e.getAttribute("data-error-callback");
		U && window[U] && (i["error-callback"] = window[U]);
		var L = e.getAttribute("data-unsupported-callback");
		L && window[L] && U && window[U] && (i["unsupported-callback"] = window[U]);
		var m = e.getAttribute("data-callback");
		m && window[m] && (i.callback = window[m]);
		var c = e.getAttribute("data-expired-callback");
		c && window[c] && (i["expired-callback"] = window[c]);
		var t = e.getAttribute("data-timeout-callback");
		t && window[t] && (i["timeout-callback"] = window[t]);
		var n = e.getAttribute("data-after-interactive-callback");
		n && window[n] && (i["after-interactive-callback"] = window[n]);
		var r = e.getAttribute("data-before-interactive-callback");
		r && window[r] && (i["before-interactive-callback"] = window[r]);
		var l, o = (l = e.getAttribute("data-response-field")) !== null && l !== void 0 ? l : "true";
		i["response-field"] = o === "true";
		var h = e.getAttribute("data-response-field-name");
		h && (i["response-field-name"] = h);
		var E = e.getAttribute("data-execution");
		E && (Fe(E) ? i.execution = E : g('Unknown data-execution value: "'.concat(E, ", expected either: 'render' or 'execute'.")));
		var A = e.getAttribute("data-appearance");
		return A && (We(A) ? i.appearance = A : g('Unknown data-appearance value: "'.concat(A, ", expected either: 'always', 'execute', or 'interaction-only'."))), i
	}

	function zt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			a = document.currentScript;
		if (O(a, HTMLScriptElement) && e.test(a.src)) return a;
		for (var i = document.querySelectorAll("script"), s = 0, u; u = i[s]; s++)
			if (O(u, HTMLScriptElement) && e.test(u.src)) return u
	}

	function Vt() {
		var e = zt();
		if (!e) return d("Could not find Turnstile script tag, some features may not be available", 43777), null;
		(e.async || e.defer) && (ht = !0);
		var a = e.src,
			i = a.split("?");
		return i.length > 1 ? new URLSearchParams(i[1]) : new URLSearchParams
	}
	var Y = Vt();
	Y && (ee = Y.get("compat"), (ee == null ? void 0 : ee.toLowerCase()) === "recaptcha" ? window.grecaptcha ? g("grecaptcha is already defined. The compatibility layer will not be enabled") : (g("Compatibility layer enabled"), xe = !0, window.grecaptcha = He) : ee !== null && g('Unknown value for api.js?compat: "'.concat(ee, '", ignoring')), Y.forEach(function(e, a) {
		M(["onload", "compat", "render"], a) || g('Unknown parameter passed to api.js: "?'.concat(a, '=...", ignoring'))
	}), N = Y.get("onload"), N && setTimeout(function() {
		typeof window[N] == "function" ? window[N]() : (g("Unable to find onload callback '".concat(N, "' immediately after loading, expected 'function', got '").concat(R(window[N]), "'")), setTimeout(function() {
			typeof window[N] == "function" ? window[N]() : g("Unable to find onload callback '".concat(N, "' after 1 second, expected 'function', got '").concat(R(window[N]), "'"))
		}, 1e3))
	}, 0));
	var ee, N, Bt = "turnstile" in window;
	Bt ? g("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = He, (Y == null ? void 0 : Y.get("render")) !== "explicit" && qe.push(xt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(yt, 0) : window.addEventListener("DOMContentLoaded", yt));
})();