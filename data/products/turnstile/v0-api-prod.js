"use strict";
(function() {
	function T(e, t) {
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : T(e, t)
	}

	function ke(e) {
		if (Array.isArray(e)) return e
	}

	function Oe(e, t) {
		var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (r != null) {
			var c = [],
				l = !0,
				p = !1,
				d, E;
			try {
				for (r = r.call(e); !(l = (d = r.next()).done) && (c.push(d.value), !(t && c.length === t)); l = !0);
			} catch (U) {
				p = !0, E = U
			} finally {
				try {
					!l && r.return != null && r.return()
				} finally {
					if (p) throw E
				}
			}
			return c
		}
	}

	function Ne() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function me(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var r = 0, c = new Array(t); r < t; r++) c[r] = e[r];
		return c
	}

	function Le(e, t) {
		if (e) {
			if (typeof e == "string") return me(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return me(e, t)
		}
	}

	function Me(e, t) {
		return ke(e) || Oe(e, t) || Le(e, t) || Ne()
	}

	function R(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function N(e, t) {
		return e.indexOf(t) !== -1
	}

	function ge(e) {
		return N(["auto", "dark", "light"], e)
	}

	function ye(e) {
		return N(["auto", "never"], e)
	}

	function _e(e) {
		return e > 0 && e < 9e5
	}
	var rt = /^[0-9A-Za-z_-]{3,100}$/;

	function Ue(e) {
		return rt.test(e)
	}
	var at = /^[a-z0-9_-]{0,32}$/i;

	function Ce(e) {
		return e === void 0 ? !0 : typeof e == "string" && at.test(e)
	}
	var nt = /^[a-z0-9_\-=]{0,255}$/i;

	function Pe(e) {
		return e === void 0 ? !0 : typeof e == "string" && nt.test(e)
	}

	function xe(e) {
		return N(["normal", "compact", "invisible"], e)
	}

	function he(e) {
		return N(["auto", "manual", "never"], e)
	}
	var it = /^[a-z]{2}(-[A-Z]{2})?$/;

	function be(e) {
		return e === "auto" || it.test(e)
	}

	function Ee(e) {
		return N(["always", "execute", "interaction-only"], e)
	}

	function we(e) {
		return N(["render", "execute"], e)
	}
	var L;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(L || (L = {}));
	var M;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(M || (M = {}));
	var ne;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(ne || (ne = {}));
	var Y;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(Y || (Y = {}));
	var $;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})($ || ($ = {}));
	var C;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(C || (C = {}));
	var F;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(F || (F = {}));
	var D;
	(function(e) {
		e.EXECUTE = "execute"
	})(D || (D = {}));

	function ie(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function De(e, t) {
		if (!T(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function ze(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function P(e, t) {
		return P = Object.setPrototypeOf || function(c, l) {
			return c.__proto__ = l, c
		}, P(e, t)
	}

	function We(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && P(e, t)
	}

	function oe() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function Z(e, t, r) {
		return oe() ? Z = Reflect.construct : Z = function(l, p, d) {
			var E = [null];
			E.push.apply(E, p);
			var U = Function.bind.apply(l, E),
				x = new U;
			return d && P(x, d.prototype), x
		}, Z.apply(null, arguments)
	}

	function z(e) {
		return z = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
		}, z(e)
	}

	function Ve(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function ce(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return ce = function(c) {
			var l = function() {
				return Z(c, arguments, z(this).constructor)
			};
			if (c === null || !Ve(c)) return c;
			if (typeof c != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(c)) return t.get(c);
				t.set(c, l)
			}
			return l.prototype = Object.create(c.prototype, {
				constructor: {
					value: l,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), P(l, c)
		}, ce(e)
	}

	function Be(e, t) {
		return t && (R(t) === "object" || typeof t == "function") ? t : ie(e)
	}

	function Fe(e) {
		var t = oe();
		return function() {
			var c = z(e),
				l;
			if (t) {
				var p = z(this).constructor;
				l = Reflect.construct(c, arguments, p)
			} else l = c.apply(this, arguments);
			return Be(this, l)
		}
	}
	var He = function(e) {
		"use strict";
		We(r, e);
		var t = Fe(r);

		function r(c, l) {
			De(this, r);
			var p;
			return p = t.call(this, c), ze(ie(p), "code", void 0), p.name = "TurnstileError", p.code = l, p
		}
		return r
	}(ce(Error));
	var W = "0/0";
	var ot = ".cf-turnstile",
		ct = ".cf-challenge",
		ut = ".g-recaptcha",
		lt = "cf_challenge_response",
		st = "cf-turnstile-response",
		ft = "g-recaptcha-response",
		dt = 8e3,
		le = !1,
		Xe = !1;

	function s(e, t) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new He(r, t)
	}

	function y(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Ae(e) {
		Ze(e, "")
	}

	function Ye() {
		var e = [ot, ct];
		le && e.push(ut), document.querySelectorAll(e.join(", ")).forEach(function(t) {
			return Re.render(t)
		})
	}
	var Te = [],
		$e = !1;

	function je() {
		$e = !0;
		var e = !0,
			t = !1,
			r = void 0;
		try {
			for (var c = Te[Symbol.iterator](), l; !(e = (l = c.next()).done); e = !0) {
				var p = l.value;
				p()
			}
		} catch (d) {
			t = !0, r = d
		} finally {
			try {
				!e && c.return != null && c.return()
			} finally {
				if (t) throw r
			}
		}
	}
	var ue = "cf-chl-widget-";

	function qe(e) {
		return e.startsWith(ue) ? e.substring(ue.length) : null
	}

	function J(e) {
		return "".concat(ue).concat(e)
	}

	function Ze(e, t) {
		var r = document.getElementById("".concat(e, "_response"));
		r !== null && T(r, HTMLInputElement) && (r.value = t);
		var c = document.getElementById("".concat(e, "_legacy_response"));
		if (c !== null && T(c, HTMLInputElement) && (c.value = t), le) {
			var l = document.getElementById("".concat(e, "_g_response"));
			l !== null && T(l, HTMLInputElement) && (l.value = t)
		}
	}

	function Ie(e, t) {
		var r, c = (r = t.params.size) !== null && r !== void 0 ? r : "normal",
			l = t.mode;
		switch (l) {
			case L.NON_INTERACTIVE:
			case L.MANAGED:
				switch (c) {
					case M.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case M.INVISIBLE:
						s('Invalid value for parameter "size", expected "'.concat(M.COMPACT, '" or "').concat(M.NORMAL, '", got "').concat(c, '"'), 2817);
					case M.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case L.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				s('Invalid value for parameter "mode", expected "'.concat(L.NON_INTERACTIVE, '", "').concat(L.MANAGED, '" or "').concat(L.INVISIBLE, '", got "').concat(l, '"'), 2818);
				return
		}
	}

	function Qe(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Ge(e, t, r, c) {
		var l = "https://challenges.cloudflare.com";
		if (!1) var p;
		var d = "h/".concat("g", "/");
		return "".concat(l, "/cdn-cgi/challenge-platform/").concat(d, "turnstile/if/ov2/av0/rcv").concat(c, "/").concat(e, "/").concat(t, "/").concat(r.theme, "/").concat(r.size)
	}

	function pt(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function vt(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function mt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Re = function() {
		var e = function(u, o) {
				if (u.params.retry === Y.AUTO) {
					u.msgQueue.push(D.EXECUTE);
					var a, n = 1e3 * 2 + ((a = u.params["retry-interval"]) !== null && a !== void 0 ? a : 0);
					u.retryTimeout = window.setTimeout(function() {
						c(o)
					}, n)
				}
			},
			t = function() {
				var u;
				do {
					u = "";
					for (var o = "abcdefghijklmnopqrstuvwxyz0123456789", a = o.length, n = 0; n < 5; n++) u += o.charAt(Math.floor(Math.random() * a))
				} while (d.has(u));
				return u
			},
			r = function(u, o, a) {
				for (; u.msgQueue.length;) {
					var n, f = u.msgQueue.pop();
					(n = a.contentWindow) === null || n === void 0 || n.postMessage({
						source: "cloudflare-challenge",
						widgetId: o,
						event: f
					}, "*")
				}
			},
			c = function(u) {
				var o = x(u);
				if (!o) {
					s("Nothing to reset found for provided container", 3329);
					return
				}
				var a = d.get(o);
				if (a) {
					a.isResetting = !0, a.response = void 0, a.mode = void 0, a.msgQueue = [], a.isInitialized = !1, a.params.execution === F.RENDER && a.msgQueue.push(D.EXECUTE);
					var n = J(o),
						f = document.querySelector("#".concat(n));
					if (!n || !f) {
						s("Widget ".concat(o, " to reset was not found."), 3330);
						return
					}
					if (a.params.appearance === C.INTERACTION_ONLY && Qe(f), a.params.sitekey === null) throw new Error("Unexpected Error: Sitekey is null");
					var i;
					f.src = Ge(o, a.params.sitekey, a.params, (i = a.rcV) !== null && i !== void 0 ? i : W), Ae(n), a.retryTimeout && window.clearTimeout(a.retryTimeout)
				} else {
					s("Widget ".concat(o, " to reset was not found."), 3331);
					return
				}
			},
			l = function(u) {
				var o, a = x(u);
				if (!a || !d.has(a)) {
					y("Nothing to remove found for the provided container");
					return
				}
				var n = J(a),
					f = ["iframe#".concat(n), "input#".concat(n, "_response"), "input#".concat(n, "_legacy_response"), "input#".concat(n, "_g_response")];
				document.querySelectorAll(f.join(", ")).forEach(function(m) {
					return m.remove()
				});
				var i = (o = d.get(a)) === null || o === void 0 ? void 0 : o.retryTimeout;
				i && window.clearTimeout(i), d.delete(a)
			},
			p = function(u, o) {
				var a;
				if (typeof u == "string") try {
						var n = document.querySelector(u);
						if (!n) {
							s('Unable to find a container for "'.concat(u, '"'), 3585);
							return
						}
						a = n
					} catch (ht) {
						s('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(u, '"'), 3586);
						return
					} else if (T(u, HTMLElement)) a = u;
					else {
						s('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
						return
					} var f = gt(a);
				if (f) {
					var i = Object.assign(f, o),
						m = i.action,
						h = i.cData,
						w = i.chlPageData,
						g = i.sitekey,
						A;
					i.theme = (A = i.theme) !== null && A !== void 0 ? A : ne.AUTO;
					var S;
					i.retry = (S = i.retry) !== null && S !== void 0 ? S : Y.AUTO;
					var I;
					i.execution = (I = i.execution) !== null && I !== void 0 ? I : F.RENDER;
					var _;
					i.appearance = (_ = i.appearance) !== null && _ !== void 0 ? _ : C.ALWAYS;
					var b;
					i["retry-interval"] = (b = i["retry-interval"]) !== null && b !== void 0 ? b : dt;
					var j;
					i.size = (j = i.size) !== null && j !== void 0 ? j : M.NORMAL;
					var K = i.callback,
						q = i["expired-callback"],
						Q = i["timeout-callback"],
						G = i["after-interactive-callback"],
						Je = i["before-interactive-callback"],
						Ke = i["error-callback"],
						et = i["unsupported-callback"];
					if (typeof g != "string") {
						s('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof g == "undefined" ? "undefined" : R(g), '"'), 3588);
						return
					}
					if (!Ue(g)) {
						s('Invalid input for parameter "sitekey", got "'.concat(g, '"'), 3589);
						return
					}
					if (!xe(i.size)) {
						s('Invalid type for parameter "size", expected normal|compact, got "'.concat(i.size, '" ').concat(R(i.size)), 3590);
						return
					}
					if (!ge(i.theme)) {
						s('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(i.theme, '" ').concat(R(i.theme)), 3591);
						return
					}
					if (!ye(i.retry)) {
						s('Invalid type for parameter "retry", expected never|auto, got "'.concat(i.retry, '" ').concat(R(i.retry)), 3592);
						return
					}
					if (i.language || (i.language = "auto"), !be(i.language)) {
						s('Invalid data-language value: "'.concat(i.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
						return
					}
					if (!Ee(i.appearance)) {
						s('Unknown data-appearance value: "'.concat(i.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
						return
					}
					if (!we(i.execution)) {
						s('Unknown data-execution value: "'.concat(i.execution, ", expected either: 'render' or 'execute'."), 3601);
						return
					}
					if (!_e(i["retry-interval"])) {
						s('Invalid data-retry-interval value: "'.concat(i["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
						return
					}
					var se, X = (se = i["refresh-expired"]) !== null && se !== void 0 ? se : $.AUTO;
					if (he(X)) i["refresh-expired"] = X;
					else {
						s('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(X, '" ').concat(typeof X == "undefined" ? "undefined" : R(X)), 3603);
						return
					}
					var fe = a.getElementsByTagName("iframe")[0];
					fe != null && fe.id.startsWith(ue) && l(a);
					var k = document.createElement("iframe");
					if (!Ce(m)) {
						s('Invalid input for optional parameter "action", got "'.concat(m, '"'), 3604);
						return
					}
					if (!Pe(h)) {
						s('Invalid input for optional parameter "cData", got "'.concat(h, '"'), 3605);
						return
					}
					var ee = t(),
						B = J(ee);
					if (!(!ee || !B)) {
						var Se = [];
						i.execution === F.RENDER && Se.push(D.EXECUTE), E++, d.set(ee, {
							idx: E,
							action: m,
							cData: h,
							chlPageData: w,
							cbSuccess: K,
							cbError: Ke,
							cbExpired: q,
							cbTimeout: Q,
							cbUnsupported: et,
							cbAfterInteractive: G,
							cbBeforeInteractive: Je,
							params: i,
							isResetting: !1,
							isInitialized: !1,
							msgQueue: Se,
							rcV: W
						}), k.style.display = "none", k.style.border = "none", k.style.overflow = "hidden", k.setAttribute("src", Ge(ee, g, i, W)), k.setAttribute("allow", "cross-origin-isolated fullscreen"), k.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), k.id = B;
						var de;
						k.tabIndex = (de = i.tabindex) !== null && de !== void 0 ? de : 0, k.title = "Widget containing a Cloudflare security challenge", a.appendChild(k);
						var pe, tt = (pe = i["response-field"]) !== null && pe !== void 0 ? pe : !0;
						if (tt) {
							var te = document.createElement("input");
							te.type = "hidden";
							var ve;
							if (te.name = (ve = i["response-field-name"]) !== null && ve !== void 0 ? ve : st, te.id = "".concat(B, "_response"), a.appendChild(te), typeof i["response-field-name"] != "string" && vt(g)) {
								var re = document.createElement("input");
								re.type = "hidden", re.name = lt, re.id = "".concat(B, "_legacy_response"), a.appendChild(re)
							}
						}
						if (le) {
							var ae = document.createElement("input");
							ae.type = "hidden", ae.name = ft, ae.id = "".concat(B, "_g_response"), a.appendChild(ae)
						}
						return B
					}
				}
			},
			d = new Map,
			E = 0,
			U = function(u) {
				var o = u.data;
				if (o.source === "cloudflare-challenge") {
					if (!pt(u)) {
						s("Ignored message from wrong origin: " + u.origin, 3073);
						return
					}
					if (!(!o.widgetId || !d.has(o.widgetId))) {
						var a = J(o.widgetId),
							n = d.get(o.widgetId);
						if (!(!a || !n)) switch (o.event) {
							case "init": {
								var f = document.getElementById(a);
								if (!f) {
									s("Cannot initialize Widget, Element not found (#".concat(a, ")."), 3074);
									return
								}
								n.mode = o.mode, n.params.appearance === C.ALWAYS ? Ie(f, n) : Qe(f), f.style.display = "";
								break
							}
							case "reject": {
								var i = document.getElementById(a);
								if (!i) {
									s("Cannot initialize Widget, Element not found (#".concat(a, ")."), 3075);
									return
								}
								if (o.reason === "outdated_browser") {
									var m = n.cbUnsupported;
									m && m()
								}
								break
							}
							case "complete": {
								n.rcV = W, n.response = o.token, Ze(a, o.token);
								var h = n.cbSuccess;
								h && h(o.token);
								break
							}
							case "fail": {
								o.rcV && (n.rcV = o.rcV), Ae(a);
								var w = n.cbError;
								if (w) {
									var g;
									w((g = o.code) !== null && g !== void 0 ? g : "undefined_error") || (o.code && y(o.code), e(n, a))
								} else o.code ? (e(n, a), s(o.code, 3076)) : e(n, a);
								break
							}
							case "tokenExpired": {
								var A = o.token,
									S = n.cbExpired;
								S && S(A), n.params["refresh-expired"] === $.AUTO && !n.isResetting && c(a);
								break
							}
							case "interactiveTimeout": {
								n.rcV = W, Ae(a);
								var I = n.cbTimeout;
								I && I();
								break
							}
							case "refreshRequest": {
								n.rcV = W, c(o.widgetId);
								break
							}
							case "interactiveBegin": {
								var _ = document.getElementById(a);
								if (!_) {
									s("Cannot layout widget, Element not found (#".concat(a, ")."), 3076);
									return
								}
								var b = n.cbBeforeInteractive;
								b && b(), n.params.appearance === C.INTERACTION_ONLY && Ie(_, n);
								break
							}
							case "interactiveEnd": {
								var j = document.getElementById(a);
								if (!j) {
									s("Cannot unlayout widget, Element not found (#".concat(a, ")."), 3077);
									return
								}
								var K = n.cbAfterInteractive;
								K && K();
								break
							}
							case "requestExtraParams": {
								var q, Q, G = document.querySelector("#".concat(a));
								if (!G) {
									s("Received state for an unknown widget: ".concat(o.widgetId), 3078);
									return
								}
								n.isResetting = !1, (q = G.contentWindow) === null || q === void 0 || q.postMessage({
									source: "cloudflare-challenge",
									widgetId: o.widgetId,
									event: "extraParams",
									action: n.action,
									cData: n.cData,
									chlPageData: n.chlPageData,
									rcV: n.rcV,
									ch: "f5fedcf7",
									url: mt(),
									retry: n.params.retry,
									"retry-interval": n.params["retry-interval"],
									"refresh-expired": n.params["refresh-expired"],
									language: n.params.language,
									execution: n.params.execution,
									appearance: n.params.appearance,
									wPr: {
										"w.iW": window.innerWidth,
										"ht.atrs": (Q = document.body.parentNode) === null || Q === void 0 ? void 0 : Q.getAttributeNames()
									}
								}, "*"), r(n, o.widgetId, G), n.isInitialized = !0;
								break
							}
						}
					}
				}
			};
		window.addEventListener("message", U);

		function x(v) {
			if (typeof v == "string") {
				var u = qe(v);
				if (u && d.has(u)) return u;
				try {
					var o = document.querySelector(v);
					return o ? x(o) : null
				} catch (n) {
					return null
				}
			}
			if (T(v, HTMLElement)) {
				var a = v.querySelector("iframe");
				return a ? qe(a.id) : null
			}
			return v || d.size === 0 ? null : d.keys().next().value
		}
		return {
			ready: function(u) {
				if (Xe) throw y("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), new Error("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().");
				if (typeof u != "function" && s('turnstile.ready() expected a "function" argument, got "'.concat(typeof u == "undefined" ? "undefined" : R(u), '"'), 3841), u(), typeof u != "function" && s('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), $e) {
					u();
					return
				}
				Te.push(u)
			},
			implicitRender: Ye,
			execute: function(u, o) {
				var a = x(u);
				if (!a) {
					if (o === void 0) {
						s("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var n = p(u, o);
					if (!n) {
						s("Failed to render widget", 43522);
						return
					}
					a = n
				}
				var f = d.get(a);
				if (f) {
					if (f.response) {
						f.cbSuccess && f.cbSuccess(f.response);
						return
					}
					f.msgQueue.push(D.EXECUTE);
					var i = J(a),
						m = document.querySelector("#".concat(i));
					if (!m) {
						s("Widget ".concat(i, " to execute was not found"), 43522);
						return
					}
					f.isInitialized && r(f, a, m), f.params.appearance === C.EXECUTE && Ie(m, f)
				}
			},
			render: p,
			reset: c,
			remove: l,
			getResponse: function(u) {
				var o;
				if (typeof u == "undefined") {
					var a, n, f = -1,
						i = !0,
						m = !1,
						h = void 0;
					try {
						for (var w = d[Symbol.iterator](), g; !(i = (g = w.next()).done); i = !0) {
							var A = Me(g.value, 2),
								S = A[0],
								I = A[1];
							f < I.idx && (n = S, f = I.idx)
						}
					} catch (b) {
						m = !0, h = b
					} finally {
						try {
							!i && w.return != null && w.return()
						} finally {
							if (m) throw h
						}
					}
					if (f === -1) {
						s("Could not find widget", 43778);
						return
					}
					return (a = d.get(n)) === null || a === void 0 ? void 0 : a.response
				}
				var _ = x(u);
				if (!_) {
					s("Could not find widget for provided container", 43778);
					return
				}
				return (o = d.get(_)) === null || o === void 0 ? void 0 : o.response
			}
		}
	}();

	function gt(e) {
		var t = e.getAttribute("data-sitekey"),
			r = {
				sitekey: t
			},
			c = e.getAttribute("data-tabindex");
		c && (r.tabindex = parseInt(c, 10));
		var l = e.getAttribute("data-theme");
		l && (ge(l) ? r.theme = l : y('Unknown data-theme value: "'.concat(l, '"')));
		var p = e.getAttribute("data-size");
		if (p && (xe(p) ? r.size = p : y('Unknown data-size value: "'.concat(p, '"'))), !1) var d;
		var E = e.getAttribute("data-action");
		typeof E == "string" && (r.action = E);
		var U = e.getAttribute("data-cdata");
		typeof U == "string" && (r.cData = U);
		var x = e.getAttribute("data-retry");
		x && (ye(x) ? r.retry = x : y('Invalid data-retry value: "'.concat(x, ", expected either 'never' or 'auto'\"")));
		var v = e.getAttribute("data-retry-interval");
		if (v) {
			var u = parseInt(v, 10);
			_e(u) ? r["retry-interval"] = u : y('Invalid data-retry-interval value: "'.concat(v, ', expected an integer value > 0 and < 900000"'))
		}
		var o = e.getAttribute("data-refresh-expired");
		o && (he(o) ? r["refresh-expired"] = o : y('Unknown data-refresh-expired value: "'.concat(o, ", expected either: 'never', 'auto' or 'manual'.")));
		var a = e.getAttribute("data-language");
		a && (be(a) ? r.language = a : y('Invalid data-language value: "'.concat(a, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));
		var n = e.getAttribute("data-error-callback");
		n && window[n] && (r["error-callback"] = window[n]);
		var f = e.getAttribute("data-unsupported-callback");
		f && window[f] && n && window[n] && (r["unsupported-callback"] = window[n]);
		var i = e.getAttribute("data-callback");
		i && window[i] && (r.callback = window[i]);
		var m = e.getAttribute("data-expired-callback");
		m && window[m] && (r["expired-callback"] = window[m]);
		var h = e.getAttribute("data-timeout-callback");
		h && window[h] && (r["timeout-callback"] = window[h]);
		var w = e.getAttribute("data-after-interactive-callback");
		w && window[w] && (r["after-interactive-callback"] = window[w]);
		var g = e.getAttribute("data-before-interactive-callback");
		g && window[g] && (r["before-interactive-callback"] = window[g]);
		var A, S = (A = e.getAttribute("data-response-field")) !== null && A !== void 0 ? A : "true";
		r["response-field"] = S === "true";
		var I = e.getAttribute("data-response-field-name");
		I && (r["response-field-name"] = I);
		var _ = e.getAttribute("data-execution");
		_ && (we(_) ? r.execution = _ : y('Unknown data-execution value: "'.concat(_, ", expected either: 'render' or 'execute'.")));
		var b = e.getAttribute("data-appearance");
		return b && (Ee(b) ? r.appearance = b : y('Unknown data-appearance value: "'.concat(b, ", expected either: 'always', 'execute', or 'interaction-only'."))), r
	}

	function yt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			t = document.currentScript;
		if (T(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var r = document.querySelectorAll("script"), c = 0, l; l = r[c]; c++)
			if (T(l, HTMLScriptElement) && e.test(l.src)) return l
	}

	function _t() {
		var e = yt();
		if (!e) return s("Could not find Turnstile script tag, some features may not be available", 43777), null;
		(e.async || e.defer) && (Xe = !0);
		var t = e.src,
			r = t.split("?");
		return r.length > 1 ? new URLSearchParams(r[1]) : new URLSearchParams
	}
	var V = _t();
	V && (H = V.get("compat"), (H == null ? void 0 : H.toLowerCase()) === "recaptcha" ? window.grecaptcha ? y("grecaptcha is already defined. The compatibility layer will not be enabled") : (y("Compatibility layer enabled"), le = !0, window.grecaptcha = Re) : H !== null && y('Unknown value for api.js?compat: "'.concat(H, '", ignoring')), V.forEach(function(e, t) {
		N(["onload", "compat", "render"], t) || y('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring'))
	}), O = V.get("onload"), O && setTimeout(function() {
		typeof window[O] == "function" ? window[O]() : (y("Unable to find onload callback '".concat(O, "' immediately after loading, expected 'function', got '").concat(R(window[O]), "'")), setTimeout(function() {
			typeof window[O] == "function" ? window[O]() : y("Unable to find onload callback '".concat(O, "' after 1 second, expected 'function', got '").concat(R(window[O]), "'"))
		}, 1e3))
	}, 0));
	var H, O, xt = "turnstile" in window;
	xt ? y("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = Re, (V == null ? void 0 : V.get("render")) !== "explicit" && Te.push(Ye), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(je, 0) : window.addEventListener("DOMContentLoaded", je));
})();