"use strict";
(function() {
	function R(e, o) {
		return o != null && typeof Symbol != "undefined" && o[Symbol.hasInstance] ? !!o[Symbol.hasInstance](e) : R(e, o)
	}

	function Ie(e) {
		if (Array.isArray(e)) return e
	}

	function Ae(e, o) {
		var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var s = [],
				d = !0,
				h = !1,
				f, M;
			try {
				for (n = n.call(e); !(d = (f = n.next()).done) && (s.push(f.value), !(o && s.length === o)); d = !0);
			} catch (z) {
				h = !0, M = z
			} finally {
				try {
					!d && n.return != null && n.return()
				} finally {
					if (h) throw M
				}
			}
			return s
		}
	}

	function we() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function ue(e, o) {
		(o == null || o > e.length) && (o = e.length);
		for (var n = 0, s = new Array(o); n < o; n++) s[n] = e[n];
		return s
	}

	function Te(e, o) {
		if (e) {
			if (typeof e == "string") return ue(e, o);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(n);
			if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ue(e, o)
		}
	}

	function Re(e, o) {
		return Ie(e) || Ae(e, o) || Te(e, o) || we()
	}

	function S(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function N(e, o) {
		return e.indexOf(o) !== -1
	}

	function le(e) {
		return N(["auto", "dark", "light"], e)
	}

	function se(e) {
		return N(["auto", "never"], e)
	}

	function de(e) {
		return e > 0 && e < 9e5
	}
	var He = /^[0-9A-Za-z_-]{3,100}$/;

	function ke(e) {
		return He.test(e)
	}
	var je = /^[a-z0-9_-]{0,32}$/i;

	function Se(e) {
		return e === void 0 ? !0 : typeof e == "string" && je.test(e)
	}
	var qe = /^[a-z0-9_\-=]{0,255}$/i;

	function Ne(e) {
		return e === void 0 ? !0 : typeof e == "string" && qe.test(e)
	}

	function fe(e) {
		return N(["normal", "compact", "invisible"], e)
	}

	function pe(e) {
		return N(["auto", "manual", "never"], e)
	}
	var Qe = /^[a-z]{2}(-[A-Z]{2})?$/;

	function ve(e) {
		return e === "auto" || Qe.test(e)
	}

	function me(e) {
		return N(["always", "execute", "interaction-only"], e)
	}

	function ge(e) {
		return N(["render", "execute"], e)
	}
	var C;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(C || (C = {}));
	var L;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(L || (L = {}));
	var ee;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(ee || (ee = {}));
	var Q;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(Q || (Q = {}));
	var Y;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(Y || (Y = {}));
	var O;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(O || (O = {}));
	var B;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(B || (B = {}));
	var U;
	(function(e) {
		e.EXECUTE = "execute"
	})(U || (U = {}));
	var D = "0/0";
	var Ye = ".cf-turnstile",
		Ge = ".cf-challenge",
		Xe = ".g-recaptcha",
		$e = "cf_challenge_response",
		Ze = "cf-turnstile-response",
		Je = "g-recaptcha-response",
		Ke = 8e3,
		re = !1,
		Me = !1;

	function u(e) {
		var o = "[Cloudflare Turnstile] ".concat(e, ".");
		throw console.error(o), new Error(o)
	}

	function v(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function ye(e) {
		Pe(e, "")
	}

	function Ue() {
		var e = [Ye, Ge];
		re && e.push(Xe), document.querySelectorAll(e.join(", ")).forEach(function(o) {
			return Ee.render(o)
		})
	}
	var be = [],
		De = !1;

	function Ce() {
		De = !0;
		var e = !0,
			o = !1,
			n = void 0;
		try {
			for (var s = be[Symbol.iterator](), d; !(e = (d = s.next()).done); e = !0) {
				var h = d.value;
				h()
			}
		} catch (f) {
			o = !0, n = f
		} finally {
			try {
				!e && s.return != null && s.return()
			} finally {
				if (o) throw n
			}
		}
	}
	var te = "cf-chl-widget-";

	function Le(e) {
		return e.startsWith(te) ? e.substring(te.length) : null
	}

	function G(e) {
		return "".concat(te).concat(e)
	}

	function Pe(e, o) {
		var n = document.getElementById("".concat(e, "_response"));
		n !== null && R(n, HTMLInputElement) && (n.value = o);
		var s = document.getElementById("".concat(e, "_legacy_response"));
		if (s !== null && R(s, HTMLInputElement) && (s.value = o), re) {
			var d = document.getElementById("".concat(e, "_g_response"));
			d !== null && R(d, HTMLInputElement) && (d.value = o)
		}
	}

	function he(e, o) {
		var n, s = (n = o.params.size) !== null && n !== void 0 ? n : "normal",
			d = o.mode;
		switch (d) {
			case C.NON_INTERACTIVE:
			case C.MANAGED:
				switch (s) {
					case L.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case L.INVISIBLE:
						u('Invalid value for parameter "size", expected "'.concat(L.COMPACT, '" or "').concat(L.NORMAL, '", got "').concat(s, '"'));
					case L.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case C.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute";
				break;
			default:
				u('Invalid value for parameter "mode", expected "'.concat(C.NON_INTERACTIVE, '", "').concat(C.MANAGED, '" or "').concat(C.INVISIBLE, '", got "').concat(d, '"'));
				return
		}
	}

	function xe(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Oe(e, o, n, s) {
		var d = "https://challenges.cloudflare.com";
		if (!1) var h;
		var f = "h/".concat("g", "/");
		return "".concat(d, "/cdn-cgi/challenge-platform/").concat(f, "turnstile/if/ov2/av0/rcv").concat(s, "/").concat(e, "/").concat(o, "/").concat(n.theme, "/").concat(n.size)
	}

	function et(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function tt(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function rt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Ee = function() {
		var e = function(c, i) {
				if (c.params.retry === Q.AUTO) {
					c.msgQueue.push(U.EXECUTE);
					var t, r = 1e3 * 2 + ((t = c.params["retry-interval"]) !== null && t !== void 0 ? t : 0);
					window.setTimeout(function() {
						s(i)
					}, r)
				}
			},
			o = function() {
				var c;
				do {
					c = "";
					for (var i = "abcdefghijklmnopqrstuvwxyz0123456789", t = i.length, r = 0; r < 5; r++) c += i.charAt(Math.floor(Math.random() * t))
				} while (f.has(c));
				return c
			},
			n = function(c, i, t) {
				for (; c.msgQueue.length;) {
					var r, l = c.msgQueue.pop();
					(r = t.contentWindow) === null || r === void 0 || r.postMessage({
						source: "cloudflare-challenge",
						widgetId: i,
						event: l
					}, "*")
				}
			},
			s = function(c) {
				var i = A(c);
				if (!i) {
					u("Nothing to reset found for provided container");
					return
				}
				var t = f.get(i);
				if (t) {
					t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isInitialized = !1, t.params.execution === B.RENDER && t.msgQueue.push(U.EXECUTE);
					var r = G(i),
						l = document.querySelector("#".concat(r));
					if (!r || !l) {
						u("Widget ".concat(i, " to reset was not found."));
						return
					}
					if (t.params.appearance === O.INTERACTION_ONLY && xe(l), t.params.sitekey === null) throw new Error("Unexpected Error: Sitekey is null");
					var a;
					l.src = Oe(i, t.params.sitekey, t.params, (a = t.rcV) !== null && a !== void 0 ? a : D), ye(r)
				} else {
					u("Widget ".concat(i, " to reset was not found."));
					return
				}
			},
			d = function(c) {
				var i = A(c);
				if (!i || !f.has(i)) {
					v("Nothing to remove found for the provided container");
					return
				}
				var t = G(i),
					r = ["iframe#".concat(t), "input#".concat(t, "_response"), "input#".concat(t, "_legacy_response"), "input#".concat(t, "_g_response")];
				document.querySelectorAll(r.join(", ")).forEach(function(l) {
					return l.remove()
				}), f.delete(i)
			},
			h = function(c, i) {
				var t;
				if (typeof c == "string") try {
						var r = document.querySelector(c);
						if (!r) {
							u('Unable to find a container for "'.concat(c, '"'));
							return
						}
						t = r
					} catch (ct) {
						u('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(c, '"'));
						return
					} else if (R(c, HTMLElement)) t = c;
					else {
						u('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
						return
					} var l = at(t);
				if (l) {
					var a = Object.assign(l, i),
						g = a.action,
						x = a.cData,
						E = a.chlPageData,
						m = a.sitekey,
						_;
					a.theme = (_ = a.theme) !== null && _ !== void 0 ? _ : ee.AUTO;
					var w;
					a.retry = (w = a.retry) !== null && w !== void 0 ? w : Q.AUTO;
					var I;
					a.execution = (I = a.execution) !== null && I !== void 0 ? I : B.RENDER;
					var y;
					a.appearance = (y = a.appearance) !== null && y !== void 0 ? y : O.ALWAYS;
					var b;
					a["retry-interval"] = (b = a["retry-interval"]) !== null && b !== void 0 ? b : Ke;
					var V;
					a.size = (V = a.size) !== null && V !== void 0 ? V : L.NORMAL;
					var X = a.callback,
						H = a["expired-callback"],
						j = a["timeout-callback"],
						ze = a["after-interactive-callback"],
						Ve = a["before-interactive-callback"],
						We = a["error-callback"],
						Be = a["unsupported-callback"];
					if (typeof m != "string") {
						u('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof m == "undefined" ? "undefined" : S(m), '"'));
						return
					}
					if (!ke(m)) {
						u('Invalid input for parameter "sitekey", got "'.concat(m, '"'));
						return
					}
					if (!fe(a.size)) {
						u('Invalid type for parameter "size", expected normal|compact, got "'.concat(a.size, '" ').concat(S(a.size)));
						return
					}
					if (!le(a.theme)) {
						u('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(a.theme, '" ').concat(S(a.theme)));
						return
					}
					if (!se(a.retry)) {
						u('Invalid type for parameter "retry", expected never|auto, got "'.concat(a.retry, '" ').concat(S(a.retry)));
						return
					}
					if (a.language || (a.language = "auto"), !ve(a.language)) {
						u('Invalid data-language value: "'.concat(a.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"));
						return
					}
					if (!me(a.appearance)) {
						u('Unknown data-appearance value: "'.concat(a.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."));
						return
					}
					if (!ge(a.execution)) {
						u('Unknown data-execution value: "'.concat(a.execution, ", expected either: 'render' or 'execute'."));
						return
					}
					if (!de(a["retry-interval"])) {
						v('Invalid data-retry-interval value: "'.concat(a["retry-interval"], ', expected an integer value > 0 and < 900000"'));
						return
					}
					var ae, q = (ae = a["refresh-expired"]) !== null && ae !== void 0 ? ae : Y.AUTO;
					if (pe(q)) a["refresh-expired"] = q;
					else {
						u('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(q, '" ').concat(typeof q == "undefined" ? "undefined" : S(q)));
						return
					}
					var ne = t.getElementsByTagName("iframe")[0];
					ne != null && ne.id.startsWith(te) && d(t);
					var T = document.createElement("iframe");
					if (!Se(g)) {
						u('Invalid input for optional parameter "action", got "'.concat(g, '"'));
						return
					}
					if (!Ne(x)) {
						u('Invalid input for optional parameter "cData", got "'.concat(x, '"'));
						return
					}
					var $ = o(),
						W = G($);
					if (!(!$ || !W)) {
						var _e = [];
						a.execution === B.RENDER && _e.push(U.EXECUTE), M++, f.set($, {
							idx: M,
							action: g,
							cData: x,
							chlPageData: E,
							cbSuccess: X,
							cbError: We,
							cbExpired: H,
							cbTimeout: j,
							cbUnsupported: Be,
							cbAfterInteractive: ze,
							cbBeforeInteractive: Ve,
							params: a,
							isResetting: !1,
							isInitialized: !1,
							msgQueue: _e,
							rcV: D
						}), T.style.display = "none", T.style.border = "none", T.style.overflow = "hidden", T.setAttribute("src", Oe($, m, a, D)), T.setAttribute("allow", "cross-origin-isolated"), T.setAttribute("sandbox", "allow-same-origin allow-scripts"), T.id = W;
						var ie;
						T.tabIndex = (ie = a.tabindex) !== null && ie !== void 0 ? ie : 0, T.title = "Widget containing a Cloudflare security challenge", t.appendChild(T);
						var oe, Fe = (oe = a["response-field"]) !== null && oe !== void 0 ? oe : !0;
						if (Fe) {
							var Z = document.createElement("input");
							Z.type = "hidden";
							var ce;
							if (Z.name = (ce = a["response-field-name"]) !== null && ce !== void 0 ? ce : Ze, Z.id = "".concat(W, "_response"), t.appendChild(Z), typeof a["response-field-name"] != "string" && tt(m)) {
								var J = document.createElement("input");
								J.type = "hidden", J.name = $e, J.id = "".concat(W, "_legacy_response"), t.appendChild(J)
							}
						}
						if (re) {
							var K = document.createElement("input");
							K.type = "hidden", K.name = Je, K.id = "".concat(W, "_g_response"), t.appendChild(K)
						}
						return W
					}
				}
			},
			f = new Map,
			M = 0,
			z = function(c) {
				var i = c.data;
				if (i.source === "cloudflare-challenge") {
					if (!et(c)) {
						u("Ignored message from wrong origin: " + c.origin);
						return
					}
					if (!(!i.widgetId || !f.has(i.widgetId))) {
						var t = G(i.widgetId),
							r = f.get(i.widgetId);
						if (!(!t || !r)) switch (i.event) {
							case "init": {
								var l = document.getElementById(t);
								if (!l) {
									u("Cannot initialize Widget, Element not found (#".concat(t, ")."));
									return
								}
								r.mode = i.mode, r.params.appearance === O.ALWAYS ? he(l, r) : xe(l), l.style.display = "";
								break
							}
							case "reject": {
								var a = document.getElementById(t);
								if (!a) {
									u("Cannot initialize Widget, Element not found (#".concat(t, ")."));
									return
								}
								if (i.reason === "outdated_browser") {
									var g = r.cbUnsupported;
									g && g()
								}
								break
							}
							case "complete": {
								r.rcV = D, r.response = i.token, Pe(t, i.token);
								var x = r.cbSuccess;
								x && x(i.token);
								break
							}
							case "fail": {
								i.rcV && (r.rcV = i.rcV), ye(t);
								var E = r.cbError;
								if (E) {
									var m;
									E((m = i.code) !== null && m !== void 0 ? m : "undefined_error") || (i.code && v(i.code), e(r, t))
								} else i.code ? (e(r, t), u(i.code)) : e(r, t);
								break
							}
							case "tokenExpired": {
								var _ = i.token,
									w = r.cbExpired;
								w && w(_), r.params["refresh-expired"] === Y.AUTO && !r.isResetting && s(t);
								break
							}
							case "interactiveTimeout": {
								r.rcV = D, ye(t);
								var I = r.cbTimeout;
								I && I();
								break
							}
							case "refreshRequest": {
								r.rcV = D, s(i.widgetId);
								break
							}
							case "interactiveBegin": {
								var y = document.getElementById(t);
								if (!y) {
									u("Cannot layout widget, Element not found (#".concat(t, ")."));
									return
								}
								var b = r.cbBeforeInteractive;
								b && b(), r.params.appearance === O.INTERACTION_ONLY && he(y, r);
								break
							}
							case "interactiveEnd": {
								var V = document.getElementById(t);
								if (!V) {
									u("Cannot unlayout widget, Element not found (#".concat(t, ")."));
									return
								}
								r.params.appearance === O.INTERACTION_ONLY && xe(V);
								var X = r.cbAfterInteractive;
								X && X();
								break
							}
							case "requestExtraParams": {
								var H, j = document.querySelector("#".concat(t));
								if (!j) {
									u("Received state for an unknown widget: ".concat(i.widgetId));
									return
								}
								r.isResetting = !1, (H = j.contentWindow) === null || H === void 0 || H.postMessage({
									source: "cloudflare-challenge",
									widgetId: i.widgetId,
									event: "extraParams",
									action: r.action,
									cData: r.cData,
									chlPageData: r.chlPageData,
									rcV: r.rcV,
									ch: "68662470",
									url: rt(),
									retry: r.params.retry,
									"retry-interval": r.params["retry-interval"],
									"refresh-expired": r.params["refresh-expired"],
									language: r.params.language,
									execution: r.params.execution,
									appearance: r.params.appearance,
									wPr: {
										"w.iW": window.innerWidth
									}
								}, "*"), n(r, i.widgetId, j), r.isInitialized = !0;
								break
							}
						}
					}
				}
			};
		window.addEventListener("message", z);

		function A(p) {
			if (typeof p == "string") {
				var c = Le(p);
				if (c && f.has(c)) return c;
				try {
					var i = document.querySelector(p);
					return i ? A(i) : null
				} catch (r) {
					return null
				}
			}
			if (R(p, HTMLElement)) {
				var t = p.querySelector("iframe");
				return t ? Le(t.id) : null
			}
			return p || f.size === 0 ? null : f.keys().next().value
		}
		return {
			ready: function(c) {
				if (Me) throw v("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), new Error("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().");
				if (typeof c != "function" && u('turnstile.ready() expected a "function" argument, got "'.concat(typeof c == "undefined" ? "undefined" : S(c), '"')), c(), typeof c != "function" && u('Invalid value for parameter "callback", you must provide a callback function as argument to ready()'), De) {
					c();
					return
				}
				be.push(c)
			},
			implicitRender: Ue,
			execute: function(c, i) {
				var t = A(c);
				if (!t) {
					if (i === void 0) {
						u("Please provide 2 parameters to execute: container and parameters");
						return
					}
					var r = h(c, i);
					if (!r) {
						u("Failed to render widget");
						return
					}
					t = r
				}
				var l = f.get(t);
				if (l) {
					if (l.response) {
						l.cbSuccess && l.cbSuccess(l.response);
						return
					}
					l.msgQueue.push(U.EXECUTE);
					var a = G(t),
						g = document.querySelector("#".concat(a));
					if (!g) {
						u("Widget ".concat(a, " to execute was not found"));
						return
					}
					l.isInitialized && n(l, t, g), l.params.appearance === O.EXECUTE && he(g, l)
				}
			},
			render: h,
			reset: s,
			remove: d,
			getResponse: function(c) {
				var i;
				if (typeof c == "undefined") {
					var t, r, l = -1,
						a = !0,
						g = !1,
						x = void 0;
					try {
						for (var E = f[Symbol.iterator](), m; !(a = (m = E.next()).done); a = !0) {
							var _ = Re(m.value, 2),
								w = _[0],
								I = _[1];
							l < I.idx && (r = w, l = I.idx)
						}
					} catch (b) {
						g = !0, x = b
					} finally {
						try {
							!a && E.return != null && E.return()
						} finally {
							if (g) throw x
						}
					}
					if (l === -1) {
						u("Could not find widget");
						return
					}
					return (t = f.get(r)) === null || t === void 0 ? void 0 : t.response
				}
				var y = A(c);
				if (!y) {
					u("Could not find widget for provided container");
					return
				}
				return (i = f.get(y)) === null || i === void 0 ? void 0 : i.response
			}
		}
	}();

	function at(e) {
		var o = e.getAttribute("data-sitekey"),
			n = {
				sitekey: o
			},
			s = e.getAttribute("data-tabindex");
		s && (n.tabindex = parseInt(s, 10));
		var d = e.getAttribute("data-theme");
		d && (le(d) ? n.theme = d : v('Unknown data-theme value: "'.concat(d, '"')));
		var h = e.getAttribute("data-size");
		if (h && (fe(h) ? n.size = h : v('Unknown data-size value: "'.concat(h, '"'))), !1) var f;
		var M = e.getAttribute("data-action");
		typeof M == "string" && (n.action = M);
		var z = e.getAttribute("data-cdata");
		typeof z == "string" && (n.cData = z);
		var A = e.getAttribute("data-retry");
		A && (se(A) ? n.retry = A : v('Invalid data-retry value: "'.concat(A, ", expected either 'never' or 'auto'\"")));
		var p = e.getAttribute("data-retry-interval");
		if (p) {
			var c = parseInt(p, 10);
			de(c) ? n["retry-interval"] = c : v('Invalid data-retry-interval value: "'.concat(p, ', expected an integer value > 0 and < 900000"'))
		}
		var i = e.getAttribute("data-refresh-expired");
		i && (pe(i) ? n["refresh-expired"] = i : v('Unknown data-refresh-expired value: "'.concat(i, ", expected either: 'never', 'auto' or 'manual'.")));
		var t = e.getAttribute("data-language");
		t && (ve(t) ? n.language = t : v('Invalid data-language value: "'.concat(t, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));
		var r = e.getAttribute("data-error-callback");
		r && window[r] && (n["error-callback"] = window[r]);
		var l = e.getAttribute("data-unsupported-callback");
		l && window[l] && r && window[r] && (n["unsupported-callback"] = window[r]);
		var a = e.getAttribute("data-callback");
		a && window[a] && (n.callback = window[a]);
		var g = e.getAttribute("data-expired-callback");
		g && window[g] && (n["expired-callback"] = window[g]);
		var x = e.getAttribute("data-timeout-callback");
		x && window[x] && (n["timeout-callback"] = window[x]);
		var E = e.getAttribute("data-after-interactive-callback");
		E && window[E] && (n["after-interactive-callback"] = window[E]);
		var m = e.getAttribute("data-before-interactive-callback");
		m && window[m] && (n["before-interactive-callback"] = window[m]);
		var _, w = (_ = e.getAttribute("data-response-field")) !== null && _ !== void 0 ? _ : "true";
		n["response-field"] = w === "true";
		var I = e.getAttribute("data-response-field-name");
		I && (n["response-field-name"] = I);
		var y = e.getAttribute("data-execution");
		y && (ge(y) ? n.execution = y : v('Unknown data-execution value: "'.concat(y, ", expected either: 'render' or 'execute'.")));
		var b = e.getAttribute("data-appearance");
		return b && (me(b) ? n.appearance = b : v('Unknown data-appearance value: "'.concat(b, ", expected either: 'always', 'execute', or 'interaction-only'."))), n
	}

	function nt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			o = document.currentScript;
		if (R(o, HTMLScriptElement) && e.test(o.src)) return o;
		for (var n = document.querySelectorAll("script"), s = 0, d; d = n[s]; s++)
			if (R(d, HTMLScriptElement) && e.test(d.src)) return d
	}

	function it() {
		var e = nt();
		if (!e) return u("Could not find Turnstile script tag, some features may not be available"), null;
		(e.async || e.defer) && (Me = !0);
		var o = e.src,
			n = o.split("?");
		return n.length > 1 ? new URLSearchParams(n[1]) : new URLSearchParams
	}
	var P = it();
	P && (F = P.get("compat"), (F == null ? void 0 : F.toLowerCase()) === "recaptcha" ? window.grecaptcha ? v("grecaptcha is already defined. The compatibility layer will not be enabled") : (v("Compatibility layer enabled"), re = !0, window.grecaptcha = Ee) : F !== null && v('Unknown value for api.js?compat: "'.concat(F, '", ignoring')), P.forEach(function(e, o) {
		N(["onload", "compat", "render"], o) || v('Unknown parameter passed to api.js: "?'.concat(o, '=...", ignoring'))
	}), k = P.get("onload"), k && setTimeout(function() {
		typeof window[k] == "function" ? window[k]() : (v("Unable to find onload callback '".concat(k, "' immediately after loading, expected 'function', got '").concat(S(window[k]), "'")), setTimeout(function() {
			typeof window[k] == "function" ? window[k]() : v("Unable to find onload callback '".concat(k, "' after 1 second, expected 'function', got '").concat(S(window[k]), "'"))
		}, 1e3))
	}, 0));
	var F, k, ot = "turnstile" in window;
	ot ? v("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = Ee, (P == null ? void 0 : P.get("render")) !== "explicit" && be.push(Ue), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Ce, 0) : window.addEventListener("DOMContentLoaded", Ce));
})();