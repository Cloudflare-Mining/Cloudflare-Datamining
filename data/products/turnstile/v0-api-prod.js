"use strict";
(function() {
	function He(e, a, o, s, u, m, v) {
		try {
			var f = e[m](v),
				_ = f.value
		} catch (w) {
			o(w);
			return
		}
		f.done ? a(_) : Promise.resolve(_).then(s, u)
	}

	function Ge(e) {
		return function() {
			var a = this,
				o = arguments;
			return new Promise(function(s, u) {
				var m = e.apply(a, o);

				function v(_) {
					He(m, s, u, v, f, "next", _)
				}

				function f(_) {
					He(m, s, u, v, f, "throw", _)
				}
				v(void 0)
			})
		}
	}

	function R(e, a) {
		return a != null && typeof Symbol != "undefined" && a[Symbol.hasInstance] ? !!a[Symbol.hasInstance](e) : R(e, a)
	}

	function Ye(e) {
		if (Array.isArray(e)) return e
	}

	function Xe(e, a) {
		var o = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (o != null) {
			var s = [],
				u = !0,
				m = !1,
				v, f;
			try {
				for (o = o.call(e); !(u = (v = o.next()).done) && (s.push(v.value), !(a && s.length === a)); u = !0);
			} catch (_) {
				m = !0, f = _
			} finally {
				try {
					!u && o.return != null && o.return()
				} finally {
					if (m) throw f
				}
			}
			return s
		}
	}

	function Qe() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Re(e, a) {
		(a == null || a > e.length) && (a = e.length);
		for (var o = 0, s = new Array(a); o < a; o++) s[o] = e[o];
		return s
	}

	function $e(e, a) {
		if (e) {
			if (typeof e == "string") return Re(e, a);
			var o = Object.prototype.toString.call(e).slice(8, -1);
			if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set") return Array.from(o);
			if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Re(e, a)
		}
	}

	function de(e, a) {
		return Ye(e) || Xe(e, a) || $e(e, a) || Qe()
	}

	function O(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function pe(e, a) {
		var o = function(p) {
				return function(S) {
					return s([p, S])
				}
			},
			s = function(p) {
				if (m) throw new TypeError("Generator is already executing.");
				for (; _ && (_ = 0, p[0] && (u = 0)), u;) try {
					if (m = 1, v && (f = p[0] & 2 ? v.return : p[0] ? v.throw || ((f = v.return) && f.call(v), 0) : v.next) && !(f = f.call(v, p[1])).done) return f;
					switch (v = 0, f && (p = [p[0] & 2, f.value]), p[0]) {
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
							u.label++, v = p[1], p = [0];
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
					p = [6, S], v = 0
				} finally {
					m = f = 0
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
			m, v, f, _;
		return _ = {
			next: o(0),
			throw: o(1),
			return: o(2)
		}, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
			return this
		}), _
	}

	function M(e, a) {
		return e.indexOf(a) !== -1
	}

	function Oe(e) {
		return M(["auto", "dark", "light"], e)
	}

	function ke(e) {
		return M(["auto", "never"], e)
	}

	function Ce(e) {
		return e > 0 && e < 9e5
	}
	var It = /^[0-9A-Za-z_-]{3,100}$/;

	function Je(e) {
		return It.test(e)
	}
	var St = /^[a-z0-9_-]{0,32}$/i;

	function Ne(e) {
		return e === void 0 ? !0 : typeof e == "string" && St.test(e)
	}
	var Rt = /^[a-z0-9_\-=]{0,255}$/i;

	function Le(e) {
		return e === void 0 ? !0 : typeof e == "string" && Rt.test(e)
	}

	function Me(e) {
		return M(["normal", "compact", "invisible"], e)
	}

	function Pe(e) {
		return M(["auto", "manual", "never"], e)
	}
	var Ot = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Ue(e) {
		return e === "auto" || Ot.test(e)
	}

	function De(e) {
		return M(["always", "execute", "interaction-only"], e)
	}

	function We(e) {
		return M(["render", "execute"], e)
	}
	var C;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(C || (C = {}));
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
	var B;
	(function(e) {
		e.EXECUTE = "execute"
	})(B || (B = {}));
	var j = "0/0";
	var Z = "cf-chl-widget-",
		H = "cloudflare-challenge",
		Ke = ".cf-turnstile",
		Ze = ".cf-challenge",
		et = ".g-recaptcha",
		tt = "cf_challenge_response",
		rt = "cf-turnstile-response",
		nt = "g-recaptcha-response",
		at = 8e3;

	function _e(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function ot(e, a) {
		if (!R(e, a)) throw new TypeError("Cannot call a class as a function")
	}

	function it(e, a, o) {
		return a in e ? Object.defineProperty(e, a, {
			value: o,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[a] = o, e
	}

	function z(e, a) {
		return z = Object.setPrototypeOf || function(s, u) {
			return s.__proto__ = u, s
		}, z(e, a)
	}

	function ct(e, a) {
		if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(a && a.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), a && z(e, a)
	}

	function me() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function oe(e, a, o) {
		return me() ? oe = Reflect.construct : oe = function(u, m, v) {
			var f = [null];
			f.push.apply(f, m);
			var _ = Function.bind.apply(u, f),
				w = new _;
			return v && z(w, v.prototype), w
		}, oe.apply(null, arguments)
	}

	function G(e) {
		return G = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
			return o.__proto__ || Object.getPrototypeOf(o)
		}, G(e)
	}

	function ut(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function ye(e) {
		var a = typeof Map == "function" ? new Map : void 0;
		return ye = function(s) {
			var u = function() {
				return oe(s, arguments, G(this).constructor)
			};
			if (s === null || !ut(s)) return s;
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
			}), z(u, s)
		}, ye(e)
	}

	function lt(e, a) {
		return a && (O(a) === "object" || typeof a == "function") ? a : _e(e)
	}

	function st(e) {
		var a = me();
		return function() {
			var s = G(e),
				u;
			if (a) {
				var m = G(this).constructor;
				u = Reflect.construct(s, arguments, m)
			} else u = s.apply(this, arguments);
			return lt(this, u)
		}
	}
	var ft = function(e) {
		"use strict";
		ct(o, e);
		var a = st(o);

		function o(s, u) {
			ot(this, o);
			var m;
			return m = a.call(this, s), it(_e(m), "code", void 0), m.name = "TurnstileError", m.code = u, m
		}
		return o
	}(ye(Error));

	function d(e, a) {
		var o = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new ft(o, a)
	}

	function g(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function ze(e) {
		return e.startsWith(Z) ? e.substring(Z.length) : null
	}

	function F(e) {
		return "".concat(Z).concat(e)
	}
	var he = null,
		ge = 0,
		kt = 1500,
		Ct = 5;

	function Nt(e) {
		ge++;
		var a = !0,
			o = !1,
			s = void 0;
		try {
			for (var u = e[Symbol.iterator](), m; !(a = (m = u.next()).done); a = !0) {
				var v = de(m.value, 2),
					f = v[0],
					_ = v[1],
					w;
				_.watchcat.seq = ge, _.watchcat.lastAckedSeq === 0 && (_.watchcat.lastAckedSeq = ge);
				var p = F(f);
				if (!p) {
					g("Cannot find Widget ".concat(p, ", consider using turnstile.remove() to clean up a widget."));
					continue
				}
				var S = document.querySelector("#".concat(p));
				if (!S) {
					g("Cannot find Widget ".concat(p, ", consider using turnstile.remove() to clean up a widget."));
					continue
				}
				if ((_.isExecuting || !_.isInitialized || _.isInitialized && !_.isStale && !_.isExecuted) && _.watchcat.lastAckedSeq !== 0 && _.watchcat.lastAckedSeq < _.watchcat.seq - 1 - Ct) {
					_.watchcat.lastAckedSeq = 0, _.watchcat.seq = 0, console.log("Turnstile Widget seem to have crashed: ", f), window.postMessage({
						source: H,
						widgetId: f,
						code: "crashed",
						event: "fail"
					}, "*");
					continue
				}(w = S.contentWindow) === null || w === void 0 || w.postMessage({
					source: H,
					widgetId: f,
					seq: ge,
					event: "meow"
				}, "*")
			}
		} catch (x) {
			o = !0, s = x
		} finally {
			try {
				!a && u.return != null && u.return()
			} finally {
				if (o) throw s
			}
		}
	}

	function dt(e) {
		he === null && (he = setInterval(function() {
			Nt(e)
		}, kt))
	}

	function pt(e) {
		he !== null && e.size === 0 && clearInterval(he)
	}
	var Lt = +new Date,
		xe = !1,
		gt = !1;

	function Fe(e) {
		bt(e, "")
	}

	function ht() {
		var e = [Ke, Ze];
		xe && e.push(et), document.querySelectorAll(e.join(", ")).forEach(function(a) {
			return Be.render(a)
		})
	}
	var qe = [],
		xt = !1;

	function vt() {
		xt = !0;
		var e = !0,
			a = !1,
			o = void 0;
		try {
			for (var s = qe[Symbol.iterator](), u; !(e = (u = s.next()).done); e = !0) {
				var m = u.value;
				m()
			}
		} catch (v) {
			a = !0, o = v
		} finally {
			try {
				!e && s.return != null && s.return()
			} finally {
				if (a) throw o
			}
		}
	}

	function bt(e, a) {
		var o = document.getElementById("".concat(e, "_response"));
		o !== null && R(o, HTMLInputElement) && (o.value = a);
		var s = document.getElementById("".concat(e, "_legacy_response"));
		if (s !== null && R(s, HTMLInputElement) && (s.value = a), xe) {
			var u = document.getElementById("".concat(e, "_g_response"));
			u !== null && R(u, HTMLInputElement) && (u.value = a)
		}
	}

	function Ve(e, a) {
		var o, s = (o = a.params.size) !== null && o !== void 0 ? o : "normal",
			u = a.mode;
		switch (u) {
			case C.NON_INTERACTIVE:
			case C.MANAGED:
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
			case C.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				d('Invalid value for parameter "mode", expected "'.concat(C.NON_INTERACTIVE, '", "').concat(C.MANAGED, '" or "').concat(C.INVISIBLE, '", got "').concat(u, '"'), 2818);
				return
		}
	}

	function _t(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Mt(e, a) {
		var o = a.get("turnstile_iframe_alt");
		o && (e.title = o)
	}

	function mt(e, a, o, s) {
		var u = "https://challenges.cloudflare.com";
		if (!1) var m;
		var v = "h/".concat("g", "/");
		return "".concat(u, "/cdn-cgi/challenge-platform/").concat(v, "turnstile/if/ov2/av0/rcv").concat(s, "/").concat(e, "/").concat(a, "/").concat(o.theme, "/").concat(o.size)
	}

	function Pt(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Ut(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function yt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Be = function() {
		var e = function(c, t, n) {
				if (c.params.retry === ae.AUTO || n) {
					c.isExecuted && (c.msgQueue.push(B.EXECUTE), c.isExecuted = !0, c.isExecuting = !0);
					var r, l = n ? 0 : 1e3 * 2 + ((r = c.params["retry-interval"]) !== null && r !== void 0 ? r : 0);
					c.retryTimeout = window.setTimeout(function() {
						v(t)
					}, l)
				}
			},
			a = function(c, t, n) {
				if (c.response === void 0) {
					d("[Internal Error] Widget was completed but no response was given", 1362);
					return
				}
				c.isExecuting = !1, bt(t, c.response);
				var r = c.cbSuccess;
				r && r(c.response, n)
			},
			o = function(c) {
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
						source: H,
						widgetId: t,
						event: l
					}, "*")
				}
			},
			m = function(c, t) {
				if (t) {
					var n = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
						r = [],
						l = !0,
						i = !1,
						h = void 0;
					try {
						for (var E = n[Symbol.iterator](), T; !(l = (T = E.next()).done); l = !0) {
							var b = T.value;
							t[b] && t[b] !== c.params[b] && r.push(b)
						}
					} catch (A) {
						i = !0, h = A
					} finally {
						try {
							!l && E.return != null && E.return()
						} finally {
							if (i) throw h
						}
					}
					if (r.length !== 0) {
						d("The parameters ".concat(n.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(r.join(",")), 3618);
						return
					}
					if (t.action) {
						if (!Ne(t.action)) {
							d('Invalid input for optional parameter "action", got "'.concat(t.action, '"'), 3604);
							return
						}
						c.action = t.action
					}
					if (t.cData) {
						if (!Le(t.cData)) {
							d('Invalid input for optional parameter "cData", got "'.concat(t.cData, '"'), 3605);
							return
						}
						c.cData = t.cData
					}
					t["after-interactive-callback"] && (c.cbAfterInteractive = t["after-interactive-callback"]), t["before-interactive-callback"] && (c.cbBeforeInteractive = t["before-interactive-callback"]), t.callback && (c.cbSuccess = t.callback), t["expired-callback"] && (c.cbExpired = t["expired-callback"]), t["timeout-callback"] && (c.cbTimeout = t["timeout-callback"]), t["error-callback"] && (c.cbError = t["error-callback"]), t["unsupported-callback"] && (c.cbUnsupported = t["unsupported-callback"]), t.chlPageData && (c.chlPageData = t.chlPageData)
				}
			},
			v = function(c) {
				var t = L(c);
				if (!t) {
					d("Nothing to reset found for provided container", 3329);
					return
				}
				var n = x.get(t);
				if (n) {
					n.isResetting = !0, n.response = void 0, n.mode = void 0, n.msgQueue = [], n.isExpired = !1, n.isExecuting = !1, n.isStale = !1, n.isInitialized = !1, n.watchcat.lastAckedSeq = 0, n.watchcat.seq = 0, n.params.execution === K.RENDER && (n.msgQueue.push(B.EXECUTE), n.isExecuted = !0, n.isExecuting = !0);
					var r = F(t),
						l = document.querySelector("#".concat(r));
					if (!r || !l) {
						d("Widget ".concat(t, " to reset was not found."), 3330);
						return
					}
					if (n.params.appearance === W.INTERACTION_ONLY && _t(l), n.params.sitekey === null) {
						d("Unexpected Error: Sitekey is null", 3347);
						return
					}
					var i;
					l.src = mt(t, n.params.sitekey, n.params, (i = n.rcV) !== null && i !== void 0 ? i : j), Fe(r), n.retryTimeout && window.clearTimeout(n.retryTimeout)
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
				var r = F(n),
					l = ["iframe#".concat(r), "input#".concat(r, "_response"), "input#".concat(r, "_legacy_response"), "input#".concat(r, "_g_response")];
				document.querySelectorAll(l.join(", ")).forEach(function(h) {
					return h.remove()
				});
				var i = (t = x.get(n)) === null || t === void 0 ? void 0 : t.retryTimeout;
				i && window.clearTimeout(i), x.delete(n), pt(x)
			},
			_ = function(c, t) {
				var n;
				if (typeof c == "string") try {
						var r = document.querySelector(c);
						if (!r) {
							d('Unable to find a container for "'.concat(c, '"'), 3585);
							return
						}
						n = r
					} catch (Vt) {
						d('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(c, '"'), 3586);
						return
					} else if (R(c, HTMLElement)) n = c;
					else {
						d('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
						return
					} var l = Dt(n);
				if (l) {
					var i = Object.assign(l, t),
						h = i.action,
						E = i.cData,
						T = i.chlPageData,
						b = i.sitekey,
						A;
					i.theme = (A = i.theme) !== null && A !== void 0 ? A : ve.AUTO;
					var q;
					i.retry = (q = i.retry) !== null && q !== void 0 ? q : ae.AUTO;
					var I;
					i.execution = (I = i.execution) !== null && I !== void 0 ? I : K.RENDER;
					var X;
					i.appearance = (X = i.appearance) !== null && X !== void 0 ? X : W.ALWAYS;
					var Q;
					i["retry-interval"] = (Q = i["retry-interval"]) !== null && Q !== void 0 ? Q : at;
					var $;
					i.size = ($ = i.size) !== null && $ !== void 0 ? $ : P.NORMAL;
					var be = i.callback,
						ie = i["expired-callback"],
						te = i["timeout-callback"],
						re = i["after-interactive-callback"],
						ce = i["before-interactive-callback"],
						Et = i["error-callback"],
						wt = i["unsupported-callback"];
					if (typeof b != "string") {
						d('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof b == "undefined" ? "undefined" : O(b), '"'), 3588);
						return
					}
					if (!Je(b)) {
						d('Invalid input for parameter "sitekey", got "'.concat(b, '"'), 3589);
						return
					}
					if (!Me(i.size)) {
						d('Invalid type for parameter "size", expected normal|compact, got "'.concat(i.size, '" ').concat(O(i.size)), 3590);
						return
					}
					if (!Oe(i.theme)) {
						d('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(i.theme, '" ').concat(O(i.theme)), 3591);
						return
					}
					if (!ke(i.retry)) {
						d('Invalid type for parameter "retry", expected never|auto, got "'.concat(i.retry, '" ').concat(O(i.retry)), 3592);
						return
					}
					if (i.language || (i.language = "auto"), !Ue(i.language)) {
						d('Invalid data-language value: "'.concat(i.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
						return
					}
					if (!De(i.appearance)) {
						d('Unknown data-appearance value: "'.concat(i.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
						return
					}
					if (!We(i.execution)) {
						d('Unknown data-execution value: "'.concat(i.execution, ", expected either: 'render' or 'execute'."), 3601);
						return
					}
					if (!Ce(i["retry-interval"])) {
						d('Invalid data-retry-interval value: "'.concat(i["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
						return
					}
					var Ee, ne = (Ee = i["refresh-expired"]) !== null && Ee !== void 0 ? Ee : D.AUTO;
					if (Pe(ne)) i["refresh-expired"] = ne;
					else {
						d('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(ne, '" ').concat(typeof ne == "undefined" ? "undefined" : O(ne)), 3603);
						return
					}
					var we = n.getElementsByTagName("iframe")[0];
					we != null && we.id.startsWith(Z) && f(n);
					var k = document.createElement("iframe");
					if (!Ne(h)) {
						d('Invalid input for optional parameter "action", got "'.concat(h, '"'), 3604);
						return
					}
					if (!Le(E)) {
						d('Invalid input for optional parameter "cData", got "'.concat(E, '"'), 3605);
						return
					}
					var ue = s(),
						J = F(ue);
					if (!(!ue || !J)) {
						var je = [],
							Te = i.execution === K.RENDER;
						Te && je.push(B.EXECUTE), V++;
						var Tt = +new Date;
						x.set(ue, {
							idx: V,
							action: h,
							cData: E,
							chlPageData: T,
							cbSuccess: be,
							cbError: Et,
							cbExpired: ie,
							cbTimeout: te,
							cbUnsupported: wt,
							cbAfterInteractive: re,
							cbBeforeInteractive: ce,
							params: i,
							isStale: !1,
							isExpired: !1,
							isExecuting: Te,
							isResetting: !1,
							isExecuted: Te,
							isInitialized: !1,
							msgQueue: je,
							rcV: j,
							widgetStartTime: Tt,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0
							}
						}), dt(x), k.style.display = "none", k.style.border = "none", k.style.overflow = "hidden", k.setAttribute("src", mt(ue, b, i, j)), k.setAttribute("allow", "cross-origin-isolated; fullscreen"), k.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), k.id = J;
						var Ae;
						k.tabIndex = (Ae = i.tabindex) !== null && Ae !== void 0 ? Ae : 0, k.title = "Widget containing a Cloudflare security challenge", n.appendChild(k);
						var Ie, At = (Ie = i["response-field"]) !== null && Ie !== void 0 ? Ie : !0;
						if (At) {
							var le = document.createElement("input");
							le.type = "hidden";
							var Se;
							if (le.name = (Se = i["response-field-name"]) !== null && Se !== void 0 ? Se : rt, le.id = "".concat(J, "_response"), n.appendChild(le), typeof i["response-field-name"] != "string" && Ut(b)) {
								var se = document.createElement("input");
								se.type = "hidden", se.name = tt, se.id = "".concat(J, "_legacy_response"), n.appendChild(se)
							}
						}
						if (xe) {
							var fe = document.createElement("input");
							fe.type = "hidden", fe.name = nt, fe.id = "".concat(J, "_g_response"), n.appendChild(fe)
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
					for (var i = x[Symbol.iterator](), h; !(n = (h = i.next()).done); n = !0) {
						var E = de(h.value, 2),
							T = E[0],
							b = E[1];
						t < b.idx && (c = T, t = b.idx)
					}
				} catch (A) {
					r = !0, l = A
				} finally {
					try {
						!n && i.return != null && i.return()
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

		function p(y, c, t, n) {
			return S.apply(this, arguments)
		}

		function S() {
			return S = Ge(function(y, c, t, n) {
				var r, l, i, h, E, T, b, A, q;
				return pe(this, function(I) {
					switch (I.label) {
						case 0:
							if (r = y.params.sitekey, l = yt(), !l) return g("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(y, c, !1), [2];
							i = "h/".concat("g", "/"), h = new URL(l), E = "https", T = "".concat(E, "://").concat(h.host, "/cdn-cgi/challenge-platform/").concat(i, "rc/").concat(n), I.label = 1;
						case 1:
							return I.trys.push([1, 6, , 7]), [4, fetch(T, {
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
							return b = I.sent(), b.status === 200 ? [3, 3] : (g("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(y, c, !1), [3, 5]);
						case 3:
							return [4, b.json()];
						case 4:
							if (A = I.sent(), "status" in A && A.status === "redeemed") return a(y, c, !0), [2];
							I.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return q = I.sent(), g("Error contacting Turnstile, aborting clearance remdeption."), a(y, c, !1), [3, 7];
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
				if (t.source === H) {
					if (!Pt(c)) {
						g("Ignored message from wrong origin: " + c.origin);
						return
					}
					if (!(!t.widgetId || !x.has(t.widgetId))) {
						var n = F(t.widgetId),
							r = x.get(t.widgetId);
						if (!(!n || !r)) switch (t.event) {
							case "init": {
								var l = document.getElementById(n);
								if (!l) {
									d("Cannot initialize Widget, Element not found (#".concat(n, ")."), 3074);
									return
								}
								r.mode = t.mode, r.mode === C.INVISIBLE && r.params["refresh-expired"] === D.MANUAL && g("refresh-expired=manual is impossible in invisible mode, consider using '".concat(D.AUTO, "' or '").concat(D.NEVER, "'")), r.params.appearance === W.ALWAYS ? Ve(l, r) : _t(l), l.style.display = "";
								break
							}
							case "translationInit": {
								var i = document.getElementById(n);
								if (!i) {
									d("Cannot initialize Widget, Element not found (#".concat(n, ")."), 3074);
									return
								}
								var h = new Map;
								Object.keys(t.translationData).forEach(function(ce) {
									h.set(ce, t.translationData[ce])
								}), Mt(i, h);
								break
							}
							case "reject": {
								var E = document.getElementById(n);
								if (r.isExecuting = !1, !E) {
									d("Cannot initialize Widget, Element not found (#".concat(n, ")."), 3075);
									return
								}
								if (t.reason === "outdated_browser") {
									var T = r.cbUnsupported;
									T && T()
								}
								break
							}
							case "food": {
								r.watchcat && t.seq > r.watchcat.lastAckedSeq && (r.watchcat.lastAckedSeq = t.seq);
								break
							}
							case "complete": {
								r.rcV = j, r.response = t.token, t.sToken ? p(r, n, t.sToken, t.chlId) : a(r, n, !1);
								break
							}
							case "fail": {
								t.rcV && (r.rcV = t.rcV), r.isExecuting = !1, Fe(n);
								var b = r.cbError;
								if (b) {
									var A;
									b((A = t.code) !== null && A !== void 0 ? A : "undefined_error") || (t.code && g(t.code), e(r, n, t.code === "crashed"))
								} else t.code ? (e(r, n, t.code === "crashed"), d(t.code, 3076)) : e(r, n, !1);
								break
							}
							case "tokenExpired": {
								var q = t.token;
								r.isExpired = !0;
								var I = r.cbExpired;
								I && I(q), r.params["refresh-expired"] === D.AUTO && !r.isResetting && v(n);
								break
							}
							case "interactiveTimeout": {
								r.rcV = j, Fe(n);
								var X = r.cbTimeout;
								X && X();
								break
							}
							case "refreshRequest": {
								r.rcV = j, v(t.widgetId);
								break
							}
							case "interactiveBegin": {
								var Q = document.getElementById(n);
								if (!Q) {
									d("Cannot layout widget, Element not found (#".concat(n, ")."), 3076);
									return
								}
								var $ = r.cbBeforeInteractive;
								$ && $(), r.params.appearance === W.INTERACTION_ONLY && Ve(Q, r);
								break
							}
							case "interactiveEnd": {
								var be = document.getElementById(n);
								if (!be) {
									d("Cannot unlayout widget, Element not found (#".concat(n, ")."), 3077);
									return
								}
								var ie = r.cbAfterInteractive;
								ie && ie();
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
									source: H,
									widgetId: t.widgetId,
									event: "extraParams",
									action: r.action,
									cData: r.cData,
									chlPageData: r.chlPageData,
									rcV: r.rcV,
									ch: "313d8a27",
									url: yt(),
									retry: r.params.retry,
									"retry-interval": r.params["retry-interval"],
									"refresh-expired": r.params["refresh-expired"],
									language: r.params.language,
									execution: r.params.execution,
									appearance: r.params.appearance,
									wPr: {
										"w.iW": window.innerWidth,
										"ht.atrs": o(document.body.parentNode)
									},
									turnstileAge: +Date.now() - Lt,
									widgetAge: +Date.now() - r.widgetStartTime
								}, "*"), u(r, t.widgetId, re), r.isInitialized = !0;
								break
							}
						}
					}
				}
			};
		window.addEventListener("message", U);

		function L(y) {
			if (typeof y == "string") {
				var c = ze(y);
				if (c && x.has(c)) return c;
				try {
					var t = document.querySelector(y);
					return t ? L(t) : null
				} catch (r) {
					return null
				}
			}
			if (R(y, HTMLElement)) {
				var n = y.querySelector("iframe");
				return n ? ze(n.id) : null
			}
			return y || x.size === 0 ? null : x.keys().next().value
		}
		return {
			ready: function(c) {
				if (gt && (g("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), d("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof c != "function" && d('turnstile.ready() expected a "function" argument, got "'.concat(typeof c == "undefined" ? "undefined" : O(c), '"'), 3841), c(), typeof c != "function" && d('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), xt) {
					c();
					return
				}
				qe.push(c)
			},
			implicitRender: ht,
			execute: function(c, t) {
				var n = L(c);
				if (!n) {
					if (t === void 0) {
						d("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var r = _(c, t);
					if (!r) {
						d("Failed to render widget", 43522);
						return
					}
					n = r
				}
				var l = x.get(n);
				if (l) {
					m(l, t);
					var i = F(n);
					if (l.isExecuting) {
						g("Call to execute() on a widget that is already executing (".concat(i, "), consider using reset() before execute()"));
						return
					} else l.isExecuting = !0;
					if (l.response) {
						l.isExecuting = !1, g("Call to execute() on a widget that was already executed (".concat(i, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), l.cbSuccess && l.cbSuccess(l.response, !1);
						return
					}
					l.isStale && v(i), l.isExpired && g("Call to execute on a expired-widget (".concat(i, "), consider using reset() before")), l.msgQueue.push(B.EXECUTE), l.isExecuted = !0;
					var h = document.querySelector("#".concat(i));
					if (!h) {
						l.isExecuting = !1, d("Widget ".concat(i, " to execute was not found"), 43522);
						return
					}
					l.isInitialized && u(l, n, h), l.params.appearance === W.EXECUTE && Ve(h, l)
				}
			},
			render: _,
			reset: v,
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
				var i = L(c);
				if (!i) {
					d("Could not find widget for provided container", 43778);
					return
				}
				return (t = x.get(i)) === null || t === void 0 ? void 0 : t.response
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
				var i = L(c);
				if (!i) return d("Could not find widget for provided container", 43778), !1;
				var h;
				return (h = (t = x.get(i)) === null || t === void 0 ? void 0 : t.isExpired) !== null && h !== void 0 ? h : !1
			}
		}
	}();

	function Dt(e) {
		var a = e.getAttribute("data-sitekey"),
			o = {
				sitekey: a
			},
			s = e.getAttribute("data-tabindex");
		s && (o.tabindex = parseInt(s, 10));
		var u = e.getAttribute("data-theme");
		u && (Oe(u) ? o.theme = u : g('Unknown data-theme value: "'.concat(u, '"')));
		var m = e.getAttribute("data-size");
		if (m && (Me(m) ? o.size = m : g('Unknown data-size value: "'.concat(m, '"'))), !1) var v;
		var f = e.getAttribute("data-action");
		typeof f == "string" && (o.action = f);
		var _ = e.getAttribute("data-cdata");
		typeof _ == "string" && (o.cData = _);
		var w = e.getAttribute("data-retry");
		w && (ke(w) ? o.retry = w : g('Invalid data-retry value: "'.concat(w, ", expected either 'never' or 'auto'\"")));
		var p = e.getAttribute("data-retry-interval");
		if (p) {
			var S = parseInt(p, 10);
			Ce(S) ? o["retry-interval"] = S : g('Invalid data-retry-interval value: "'.concat(p, ', expected an integer value > 0 and < 900000"'))
		}
		var x = e.getAttribute("data-refresh-expired");
		x && (Pe(x) ? o["refresh-expired"] = x : g('Unknown data-refresh-expired value: "'.concat(x, ", expected either: 'never', 'auto' or 'manual'.")));
		var V = e.getAttribute("data-language");
		V && (Ue(V) ? o.language = V : g('Invalid data-language value: "'.concat(V, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));
		var U = e.getAttribute("data-error-callback");
		U && window[U] && (o["error-callback"] = window[U]);
		var L = e.getAttribute("data-unsupported-callback");
		L && window[L] && U && window[U] && (o["unsupported-callback"] = window[U]);
		var y = e.getAttribute("data-callback");
		y && window[y] && (o.callback = window[y]);
		var c = e.getAttribute("data-expired-callback");
		c && window[c] && (o["expired-callback"] = window[c]);
		var t = e.getAttribute("data-timeout-callback");
		t && window[t] && (o["timeout-callback"] = window[t]);
		var n = e.getAttribute("data-after-interactive-callback");
		n && window[n] && (o["after-interactive-callback"] = window[n]);
		var r = e.getAttribute("data-before-interactive-callback");
		r && window[r] && (o["before-interactive-callback"] = window[r]);
		var l, i = (l = e.getAttribute("data-response-field")) !== null && l !== void 0 ? l : "true";
		o["response-field"] = i === "true";
		var h = e.getAttribute("data-response-field-name");
		h && (o["response-field-name"] = h);
		var E = e.getAttribute("data-execution");
		E && (We(E) ? o.execution = E : g('Unknown data-execution value: "'.concat(E, ", expected either: 'render' or 'execute'.")));
		var T = e.getAttribute("data-appearance");
		return T && (De(T) ? o.appearance = T : g('Unknown data-appearance value: "'.concat(T, ", expected either: 'always', 'execute', or 'interaction-only'."))), o
	}

	function Wt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			a = document.currentScript;
		if (R(a, HTMLScriptElement) && e.test(a.src)) return a;
		for (var o = document.querySelectorAll("script"), s = 0, u; u = o[s]; s++)
			if (R(u, HTMLScriptElement) && e.test(u.src)) return u
	}

	function zt() {
		var e = Wt();
		if (!e) return d("Could not find Turnstile script tag, some features may not be available", 43777), null;
		(e.async || e.defer) && (gt = !0);
		var a = e.src,
			o = a.split("?");
		return o.length > 1 ? new URLSearchParams(o[1]) : new URLSearchParams
	}
	var Y = zt();
	Y && (ee = Y.get("compat"), (ee == null ? void 0 : ee.toLowerCase()) === "recaptcha" ? window.grecaptcha ? g("grecaptcha is already defined. The compatibility layer will not be enabled") : (g("Compatibility layer enabled"), xe = !0, window.grecaptcha = Be) : ee !== null && g('Unknown value for api.js?compat: "'.concat(ee, '", ignoring')), Y.forEach(function(e, a) {
		M(["onload", "compat", "render"], a) || g('Unknown parameter passed to api.js: "?'.concat(a, '=...", ignoring'))
	}), N = Y.get("onload"), N && setTimeout(function() {
		typeof window[N] == "function" ? window[N]() : (g("Unable to find onload callback '".concat(N, "' immediately after loading, expected 'function', got '").concat(O(window[N]), "'")), setTimeout(function() {
			typeof window[N] == "function" ? window[N]() : g("Unable to find onload callback '".concat(N, "' after 1 second, expected 'function', got '").concat(O(window[N]), "'"))
		}, 1e3))
	}, 0));
	var ee, N, Ft = "turnstile" in window;
	Ft ? g("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = Be, (Y == null ? void 0 : Y.get("render")) !== "explicit" && qe.push(ht), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(vt, 0) : window.addEventListener("DOMContentLoaded", vt));
})();