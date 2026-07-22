"use strict";
(function() {
	function mn(e, t, r, n, a, u, d) {
		try {
			var c = e[u](d),
				p = c.value
		} catch (f) {
			r(f);
			return
		}
		c.done ? t(p) : Promise.resolve(p).then(n, a)
	}

	function gn(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise(function(n, a) {
				var u = e.apply(t, r);

				function d(p) {
					mn(u, n, a, d, c, "next", p)
				}

				function c(p) {
					mn(u, n, a, d, c, "throw", p)
				}
				d(void 0)
			})
		}
	}

	function $(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function w(e, t) {
		"@swc/helpers - instanceof";
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
	}

	function Je(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = arguments[t] != null ? arguments[t] : {},
				n = Object.keys(r);
			typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
				return Object.getOwnPropertyDescriptor(r, a).enumerable
			}))), n.forEach(function(a) {
				$(e, a, r[a])
			})
		}
		return e
	}

	function ai(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter(function(a) {
				return Object.getOwnPropertyDescriptor(e, a).enumerable
			})), r.push.apply(r, n)
		}
		return r
	}

	function pr(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ai(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
		}), e
	}

	function hn(e) {
		if (Array.isArray(e)) return e
	}

	function yn(e, t) {
		var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (r != null) {
			var n = [],
				a = !0,
				u = !1,
				d, c;
			try {
				for (r = r.call(e); !(a = (d = r.next()).done) && (n.push(d.value), !(t && n.length === t)); a = !0);
			} catch (p) {
				u = !0, c = p
			} finally {
				try {
					!a && r.return != null && r.return()
				} finally {
					if (u) throw c
				}
			}
			return n
		}
	}

	function _n() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function pt(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function Ft(e, t) {
		if (e) {
			if (typeof e == "string") return pt(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pt(e, t)
		}
	}

	function $e(e, t) {
		return hn(e) || yn(e, t) || Ft(e, t) || _n()
	}

	function bn(e) {
		if (Array.isArray(e)) return pt(e)
	}

	function En(e) {
		if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
	}

	function xn() {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function de(e) {
		return bn(e) || En(e) || Ft(e) || xn()
	}

	function wn(e, t) {
		var r, n, a, u = {
				label: 0,
				sent: function() {
					if (a[0] & 1) throw a[1];
					return a[1]
				},
				trys: [],
				ops: []
			},
			d = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype),
			c = Object.defineProperty;
		return c(d, "next", {
			value: p(0)
		}), c(d, "throw", {
			value: p(1)
		}), c(d, "return", {
			value: p(2)
		}), typeof Symbol == "function" && c(d, Symbol.iterator, {
			value: function() {
				return this
			}
		}), d;

		function p(v) {
			return function(b) {
				return f([v, b])
			}
		}

		function f(v) {
			if (r) throw new TypeError("Generator is already executing.");
			for (; d && (d = 0, v[0] && (u = 0)), u;) try {
				if (r = 1, n && (a = v[0] & 2 ? n.return : v[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, v[1])).done) return a;
				switch (n = 0, a && (v = [v[0] & 2, a.value]), v[0]) {
					case 0:
					case 1:
						a = v;
						break;
					case 4:
						return u.label++, {
							value: v[1],
							done: !1
						};
					case 5:
						u.label++, n = v[1], v = [0];
						continue;
					case 7:
						v = u.ops.pop(), u.trys.pop();
						continue;
					default:
						if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (v[0] === 6 || v[0] === 2)) {
							u = 0;
							continue
						}
						if (v[0] === 3 && (!a || v[1] > a[0] && v[1] < a[3])) {
							u.label = v[1];
							break
						}
						if (v[0] === 6 && u.label < a[1]) {
							u.label = a[1], a = v;
							break
						}
						if (a && u.label < a[2]) {
							u.label = a[2], u.ops.push(v);
							break
						}
						a[2] && u.ops.pop(), u.trys.pop();
						continue
				}
				v = t.call(e, u)
			} catch (b) {
				v = [6, b], n = 0
			} finally {
				r = a = 0
			}
			if (v[0] & 5) throw v[1];
			return {
				value: v[0] ? v[1] : void 0,
				done: !0
			}
		}
	}

	function H(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}
	var Dt = "cf-chl-widget-",
		K = "cloudflare-challenge",
		Tn = ".cf-turnstile",
		An = ".cf-challenge",
		Sn = ".g-recaptcha",
		Rn = "cf-turnstile-response",
		In = "g-recaptcha-response",
		Ze = 3e4,
		vt = 180 * 1e3,
		Cn = 1e4,
		kn = 8e3,
		On = 3600 * 1e3,
		vr = "private-token",
		Mn = 3,
		Ln = 500,
		Nn = 500,
		Ce = "",
		mr = "_cftscs_",
		Pn = 512;
	var he = (function(e) {
			return e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible", e
		})({}),
		Z = (function(e) {
			return e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible", e
		})({}),
		Ht = (function(e) {
			return e.Auto = "auto", e.Light = "light", e.Dark = "dark", e
		})({}),
		Ut = (function(e) {
			return e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain", e
		})({}),
		Wt = (function(e) {
			return e.Never = "never", e.Auto = "auto", e
		})({}),
		et = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		mt = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		re = (function(e) {
			return e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only", e
		})({}),
		gt = (function(e) {
			return e.Render = "render", e.Execute = "execute", e
		})({}),
		ht = (function(e) {
			return e.Execute = "execute", e
		})({}),
		ee = (function(e) {
			return e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.UpgradeReload = "upgrade_reload", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun", e
		})({});
	var yr = function(t) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return t.length > r ? t.slice(0, r) : t
	};

	function Un(e) {
		if (!e) return "-";
		var t = function(n, a) {
			if (!n || n.tagName === "BODY") return a;
			for (var u = 1, d = n.previousElementSibling; d;) d.tagName === n.tagName && u++, d = d.previousElementSibling;
			var c = yr(n.tagName.toLowerCase()),
				p = "".concat(c, "[").concat(u, "]");
			return t(n.parentElement, "/".concat(p).concat(a))
		};
		return t(e, "")
	}

	function Wn(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var ii = {
		button: "b",
		checkbox: "c",
		email: "e",
		hidden: "h",
		number: "n",
		password: "p",
		radio: "r",
		select: "sl",
		submit: "s",
		text: "t",
		textarea: "ta"
	};

	function oi(e) {
		return w(e, HTMLInputElement) || w(e, HTMLSelectElement) || w(e, HTMLTextAreaElement) || w(e, HTMLButtonElement)
	}

	function _r(e) {
		return de(e.querySelectorAll("input, select, textarea, button")).filter(oi)
	}

	function Fn(e) {
		return de(e.querySelectorAll("a")).filter(function(t) {
			return w(t, HTMLAnchorElement)
		})
	}

	function Vn(e) {
		var t;
		if (!e) return "";
		var r = e.closest("form");
		if (!r) return "nf";
		var n = _r(r),
			a = n.slice(0, 20).map(function(d) {
				var c;
				return (c = ii[d.type]) !== null && c !== void 0 ? c : "-"
			}).join(""),
			u = ["m:".concat((t = r.getAttribute("method")) !== null && t !== void 0 ? t : ""), "f:".concat(n.length), a].join("|");
		return u
	}
	var br = "c",
		Er = "cp",
		xr = "ct",
		wr = "l",
		Tr = "nl",
		gr = "n",
		Ar = "r",
		Sr = "s",
		ui = "u",
		Rr = "up",
		li = "c",
		ci = "f",
		hr = "n",
		di = "d",
		si = "g",
		Bt = "n",
		fi = "x",
		pi = "p",
		vi = "b",
		mi = "c",
		gi = "e",
		qt = "n",
		hi = "s",
		tt = 20,
		yi = 512,
		Dn = 99,
		Te, _i = (Te = {}, $(Te, br, [2071475277, 2531075807, 2087764529, 2650702126, 897792407, 1900861264, 193440998, 181887339]), $(Te, Er, [3710748438, 194507255, 2123698751, 2088097853]), $(Te, xr, [3716925445, 1236122734, 1917612522]), $(Te, wr, [173246534, 1422232710, 2984385681, 2172846769]), $(Te, Tr, [517084052, 3937470477]), $(Te, Ar, [194507792, 1354128738, 1385023551]), $(Te, Sr, [2172845875, 2984384787, 2901189036, 3027005952, 2088000679]), $(Te, Rr, [1759493702, 1322218894]), Te);

	function Pe(e) {
		var t;
		return (t = _i[e]) !== null && t !== void 0 ? t : []
	}

	function ne(e) {
		return (e != null ? e : "").slice(0, yi).toLowerCase()
	}

	function De(e) {
		return Ir(e)
	}

	function bi(e) {
		for (var t = [], r = "", n = 0; n < e.length; n++) {
			var a = e.charCodeAt(n),
				u = a >= 97 && a <= 122 || a >= 48 && a <= 57;
			if (u) {
				r += e.charAt(n);
				continue
			}
			r.length > 0 && (t.push(r), r = "")
		}
		r.length > 0 && t.push(r);
		for (var d = new Set, c = 0; c < t.length; c++) d.add(De(t[c])), c + 1 < t.length && d.add(De("".concat(t[c], " ").concat(t[c + 1])));
		return d
	}

	function Fe(e, t) {
		return t.some(function(r) {
			return e.has(r)
		})
	}

	function Vt(e) {
		return e > Dn ? "".concat(Dn, "+") : String(e)
	}

	function Jt(e) {
		if (w(e, HTMLSelectElement)) return "sl";
		if (w(e, HTMLTextAreaElement)) return "ta";
		if (w(e, HTMLButtonElement)) {
			var t = De(e.type);
			return t === 2139762449 ? "s" : t === 194507792 ? "rs" : "b"
		}
		switch (De(e.type)) {
			case 1516724467:
				return "b";
			case 2071469654:
				return "c";
			case 165454089:
				return "e";
			case 2087597251:
				return "f";
			case 1576159471:
				return "h";
			case 1682699846:
				return "n";
			case 1569157018:
				return "p";
			case 194663892:
				return "r";
			case 2158674347:
				return "se";
			case 2139762449:
				return "s";
			case 193421944:
				return "tel";
			case 193422222:
				return "u";
			default:
				return "t"
		}
	}

	function Ei(e) {
		var t = e.getAttribute("action");
		if (t === null || t === "") return gi;
		try {
			return new URL(t, window.location.href).origin === window.location.origin ? hi : mi
		} catch (r) {
			return vi
		}
	}

	function xi(e) {
		var t = e.getAttribute("method"),
			r = ne(t === null || t === "" ? "get" : t),
			n = De(r);
		return n === 193411891 ? si : n === 2088097853 ? pi : n === 1125889741 ? di : fi
	}

	function Bn(e) {
		if (e === null || e === "") return "";
		try {
			return new URL(e, window.location.href).pathname
		} catch (t) {
			return ""
		}
	}

	function qn(e) {
		var t = [],
			r = !0,
			n = !1,
			a = void 0;
		try {
			for (var u = e.attributes[Symbol.iterator](), d; !(r = (d = u.next()).done); r = !0) {
				var c = d.value;
				[2203664931, 2087944093, 2087876002, 5861160, 247325877, 3566271494].indexOf(De(c.name)) !== -1 && t.push(ne(c.value))
			}
		} catch (p) {
			n = !0, a = p
		} finally {
			try {
				!r && u.return != null && u.return()
			} finally {
				if (n) throw a
			}
		}
		return w(e, HTMLButtonElement) ? t.push(ne(e.value), ne(e.textContent)) : w(e, HTMLInputElement) && [1516724467, 2139762449].indexOf(De(e.type)) !== -1 && t.push(ne(e.value)), t
	}

	function wi(e, t) {
		var r = [],
			n = Bn(e.getAttribute("action"));
		r.push(ne(e.getAttribute("id")), ne(e.getAttribute("class")), ne(e.getAttribute("name")), ne(n));
		var a = !0,
			u = !1,
			d = void 0;
		try {
			for (var c = t.slice(0, tt)[Symbol.iterator](), p; !(a = (p = c.next()).done); a = !0) {
				var f = p.value,
					v;
				(v = r).push.apply(v, de(qn(f)))
			}
		} catch (S) {
			u = !0, d = S
		} finally {
			try {
				!a && c.return != null && c.return()
			} finally {
				if (u) throw d
			}
		}
		var b = !0,
			A = !1,
			N = void 0;
		try {
			for (var E = de(e.querySelectorAll("label")).slice(0, tt)[Symbol.iterator](), M; !(b = (M = E.next()).done); b = !0) {
				var k = M.value;
				r.push(ne(k.textContent))
			}
		} catch (S) {
			A = !0, N = S
		} finally {
			try {
				!b && E.return != null && E.return()
			} finally {
				if (A) throw N
			}
		}
		return r.join(" ")
	}

	function Ti(e, t, r) {
		var n = [];
		n.push(ne(e.getAttribute("id")), ne(e.getAttribute("class")));
		var a = !0,
			u = !1,
			d = void 0;
		try {
			for (var c = t.slice(0, tt)[Symbol.iterator](), p; !(a = (p = c.next()).done); a = !0) {
				var f = p.value,
					v;
				(v = n).push.apply(v, de(qn(f)))
			}
		} catch (O) {
			u = !0, d = O
		} finally {
			try {
				!a && c.return != null && c.return()
			} finally {
				if (u) throw d
			}
		}
		var b = !0,
			A = !1,
			N = void 0;
		try {
			for (var E = r.slice(0, tt)[Symbol.iterator](), M; !(b = (M = E.next()).done); b = !0) {
				var k = M.value,
					S = Bn(k.getAttribute("href"));
				n.push(ne(k.textContent), ne(S))
			}
		} catch (O) {
			A = !0, N = O
		} finally {
			try {
				!b && E.return != null && E.return()
			} finally {
				if (A) throw N
			}
		}
		return n.join(" ")
	}

	function Jn(e, t) {
		var r = !1,
			n = !1,
			a = !1,
			u = 0,
			d = !0,
			c = !1,
			p = void 0;
		try {
			for (var f = e[Symbol.iterator](), v; !(d = (v = f.next()).done); d = !0) {
				var b = v.value;
				if (w(b, HTMLTextAreaElement)) {
					a = !0;
					continue
				}
				if (w(b, HTMLInputElement)) {
					var A = De(b.type);
					A === 165454089 ? r = !0 : A === 2087597251 ? n = !0 : A === 1569157018 && u++
				}
			}
		} catch (S) {
			c = !0, p = S
		} finally {
			try {
				!d && f.return != null && f.return()
			} finally {
				if (c) throw p
			}
		}
		var N = u > 0,
			E = bi(t),
			M = Fe(E, Pe(wr)),
			k = Fe(E, Pe(Ar));
		return k && !M && (r || N) ? Ar : N && u <= 1 && M ? wr : N && (u > 1 || Fe(E, Pe(Sr))) ? Sr : Fe(E, Pe(br)) ? br : n || Fe(E, Pe(Rr)) ? Rr : a && Fe(E, Pe(Er)) ? Er : Fe(E, Pe(xr)) ? xr : r && Fe(E, Pe(Tr)) ? Tr : ui
	}

	function yt(e, t, r, n, a, u, d, c) {
		return [e, t, r, Vt(n), Vt(a), Vt(u), Vt(d), c].join("|")
	}

	function Hn(e, t) {
		return t.filter(function(r) {
			return e.contains(r)
		})
	}

	function Ai(e, t, r) {
		var n = t.filter(function(d) {
				return w(d, HTMLInputElement) && d.type === "hidden"
			}).length,
			a = t.filter(function(d) {
				return w(d, HTMLButtonElement) || Jt(d) === "s"
			}).length,
			u = t.slice(0, tt).map(Jt).join(",");
		return {
			pac: Jn(t, Ti(e, t, r)),
			pad: yt(li, Bt, qt, t.length, n, a, r.length, u)
		}
	}

	function jn(e) {
		if (!e) return {
			pac: gr,
			pad: yt(hr, Bt, qt, 0, 0, 0, 0, "")
		};
		var t = e.closest("form");
		if (!t) {
			for (var r = [], n = e.parentElement, a = 0; n && n !== document.body && a < 5; n = n.parentElement, a++) r.push(n);
			if (r.length === 0) return {
				pac: gr,
				pad: yt(hr, Bt, qt, 0, 0, 0, 0, "")
			};
			var u = r[r.length - 1],
				d = _r(u).filter(function(I) {
					return !e.contains(I)
				}),
				c = Fn(u).filter(function(I) {
					return !e.contains(I)
				}),
				p = null,
				f = !0,
				v = !1,
				b = void 0;
			try {
				for (var A = r[Symbol.iterator](), N; !(f = (N = A.next()).done); f = !0) {
					var E = N.value,
						M = Hn(E, d),
						k = Hn(E, c);
					if (M.length > 0 || k.length > 0) {
						p = Ai(E, M, k);
						break
					}
				}
			} catch (I) {
				v = !0, b = I
			} finally {
				try {
					!f && A.return != null && A.return()
				} finally {
					if (v) throw b
				}
			}
			return p !== null ? p : {
				pac: gr,
				pad: yt(hr, Bt, qt, 0, 0, 0, 0, "")
			}
		}
		var S = _r(t),
			O = S.filter(function(I) {
				return w(I, HTMLInputElement) && I.type === "hidden"
			}).length,
			ae = S.filter(function(I) {
				return w(I, HTMLButtonElement) || Jt(I) === "s"
			}).length,
			te = Fn(t).length,
			D = S.slice(0, tt).map(Jt).join(",");
		return {
			pac: Jn(S, wi(t, S)),
			pad: yt(ci, xi(t), Ei(t), S.length, O, ae, te, D)
		}
	}

	function Si(e) {
		return w(e, Element) ? e : e.parentElement
	}

	function Ri(e) {
		return "querySelectorAll" in e
	}

	function zn(e, t) {
		var r, n = t == null ? void 0 : t.shouldIgnoreElement;
		if (n !== void 0) {
			var a = w(e, Element) ? [e] : [];
			(r = a).push.apply(r, de(e.querySelectorAll("*")));
			var u = new Set,
				d, c = !0,
				p = !1,
				f = void 0;
			try {
				for (var v = a[Symbol.iterator](), b; !(c = (b = v.next()).done); c = !0) {
					var A = b.value;
					if (d !== void 0) {
						if (d.contains(A)) {
							u.add(A);
							continue
						}
						d = void 0
					}
					n(A) && (u.add(A), d = A)
				}
			} catch (N) {
				p = !0, f = N
			} finally {
				try {
					!c && v.return != null && v.return()
				} finally {
					if (p) throw f
				}
			}
			return u
		}
	}

	function Kn(e, t) {
		var r = Si(e);
		return r === null || t === void 0 ? !1 : t.has(r)
	}

	function Gn(e, t) {
		var r = zn(e, t);
		return de(e.querySelectorAll("*")).filter(function(n) {
			return !Kn(n, r)
		}).length
	}

	function Xn(e, t, r, n) {
		for (var a = "", u = Ri(e) ? zn(e, n) : void 0, d = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), c = d.nextNode(); c !== null && a.length < r;) {
			if (!Kn(c, u)) {
				for (var p = 0, f = c; f !== null && f !== e;) p++, f = f.parentNode;
				if (p <= t)
					if (w(c, Element)) {
						var v = c;
						a += yr(v.tagName.toLowerCase());
						var b = !0,
							A = !1,
							N = void 0;
						try {
							for (var E = v.attributes[Symbol.iterator](), M; !(b = (M = E.next()).done); b = !0) {
								var k = M.value,
									S;
								(n == null || (S = n.shouldIgnoreAttribute) === null || S === void 0 ? void 0 : S.call(n, v, k)) !== !0 && (a += "_".concat(yr(k.name, 2)))
							}
						} catch (O) {
							A = !0, N = O
						} finally {
							try {
								!b && E.return != null && E.return()
							} finally {
								if (A) throw N
							}
						}
						a += ">"
					} else c.nodeType === Node.TEXT_NODE && (a += "-t")
			}
			c = d.nextNode()
		}
		return a.slice(0, r)
	}

	function Ir(e) {
		if (typeof e != "string") throw new TypeError("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : H(e)));
		for (var t = 5381, r = 0; r < e.length; r++) {
			var n = e.charCodeAt(r);
			t = t * 33 ^ n
		}
		return t >>> 0
	}
	var Yn = 300,
		Qn = 10,
		$n = 200100,
		Zn = 200500,
		ea = 300020,
		jt = 300030,
		zt = 300031;
	var ta = (function(e) {
		return e.Failure = "failure", e.Verifying = "verifying", e.Overrunning = "overrunning", e.TimeCheckCachedWarning = "timecheckcachedwarning", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain", e.InvalidSitekey = "invalidsitekey", e.Custom = "custom", e
	})({});

	function je(e) {
		return je = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
		}, je(e)
	}

	function _t() {
		try {
			var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
		} catch (t) {}
		return (_t = function() {
			return !!e
		})()
	}

	function ra(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function na(e, t) {
		return t && (H(t) === "object" || typeof t == "function") ? t : ra(e)
	}

	function aa(e, t, r) {
		return t = je(t), na(e, _t() ? Reflect.construct(t, r || [], je(e).constructor) : t.apply(e, r))
	}

	function ia(e, t) {
		if (!w(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function He(e, t) {
		return He = Object.setPrototypeOf || function(n, a) {
			return n.__proto__ = a, n
		}, He(e, t)
	}

	function oa(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && He(e, t)
	}

	function bt(e, t, r) {
		return _t() ? bt = Reflect.construct : bt = function(a, u, d) {
			var c = [null];
			c.push.apply(c, u);
			var p = Function.bind.apply(a, c),
				f = new p;
			return d && He(f, d.prototype), f
		}, bt.apply(null, arguments)
	}

	function ua(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Kt(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return Kt = function(n) {
			if (n === null || !ua(n)) return n;
			if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(n)) return t.get(n);
				t.set(n, a)
			}

			function a() {
				return bt(n, arguments, je(this).constructor)
			}
			return a.prototype = Object.create(n.prototype, {
				constructor: {
					value: a,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), He(a, n)
		}, Kt(e)
	}
	var la = (function(e) {
		"use strict";
		oa(t, e);

		function t(r, n) {
			ia(this, t);
			var a;
			return a = aa(this, t, [r]), $(a, "code", void 0), a.name = "TurnstileError", a.code = n, a
		}
		return t
	})(Kt(Error));
	var Ii = RegExp("^https:\\/\\/(?:challenges(?:\\.fed)?\\.cloudflare\\.com|challenges\\.cloudflare-cn\\.com)\\/turnstile\\/v0(?:\\/.*)?\\/api\\.js", "u"),
		Yu = RegExp("\\/turnstile\\/v0(?:\\/.*)?\\/api\\.js", "u");

	function x(e, t) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new la(r, t)
	}

	function R(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function Et(e) {
		return e.startsWith(Dt) ? e.slice(Dt.length) : null
	}

	function X(e) {
		return "".concat(Dt).concat(e)
	}

	function Gt(e, t) {
		var r = !0,
			n = !1,
			a = void 0;
		try {
			for (var u = Object.getOwnPropertySymbols(e)[Symbol.iterator](), d; !(r = (d = u.next()).done); r = !0) {
				var c = d.value,
					p = Object.getOwnPropertyDescriptor(e, c),
					f = p === void 0 ? void 0 : Reflect.get(p, "value");
				if (t(f)) return f
			}
		} catch (v) {
			n = !0, a = v
		} finally {
			try {
				!r && u.return != null && u.return()
			} finally {
				if (n) throw a
			}
		}
	}

	function xt() {
		var e = Ii,
			t = document.currentScript;
		if (w(t, HTMLScriptElement) && e.test(t.src)) return t;
		var r = document.querySelectorAll("script"),
			n = !0,
			a = !1,
			u = void 0;
		try {
			for (var d = r[Symbol.iterator](), c; !(n = (c = d.next()).done); n = !0) {
				var p = c.value;
				if (w(p, HTMLScriptElement) && e.test(p.src)) return p
			}
		} catch (f) {
			a = !0, u = f
		} finally {
			try {
				!n && d.return != null && d.return()
			} finally {
				if (a) throw u
			}
		}
	}

	function ca() {
		var e = xt();
		e === void 0 && x("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			r;
		try {
			r = new URL(t)
		} catch (u) {
			x("Could not parse Turnstile script tag URL", 43777)
		}
		var n = {
			loadedAsync: !1,
			params: new URLSearchParams,
			src: t,
			url: r
		};
		(e.async || e.defer) && (n.loadedAsync = !0);
		var a = t.split("?");
		return a.length > 1 && (n.params = new URLSearchParams(a[1])), n
	}

	function Y() {
		return Date.now()
	}

	function rt(e) {
		try {
			return new URL(e, window.location.href).origin
		} catch (t) {
			return
		}
	}

	function Cr(e, t, r) {
		if (r === void 0 || r === "") {
			if (0) var n;
			return
		}
		e == null || e.postMessage(t, r)
	}

	function se(e, t, r) {
		Cr(e.contentWindow, t, r)
	}
	var da = 16,
		Ci = 1,
		sa = 0,
		fa = 1,
		pa = 2,
		va = 3,
		ma = 4,
		ga = 5,
		ha = 6,
		ya = 7;

	function ki(e, t) {
		try {
			var r = new Error().stack;
			return typeof r != "string" ? void 0 : [e, Math.max(0, Math.floor(Y() - t)), r, Ci]
		} catch (n) {
			return
		}
	}

	function ke(e, t) {
		return ki(e, t.turnstileLoadInitTimeTsMs)
	}

	function _a(e) {
		return e[3] === void 0 ? [e[0], e[1], e[2]] : [e[0], e[1], e[2], e[3]]
	}

	function nt(e) {
		var t;
		return (t = e == null ? void 0 : e.slice(-da).map(_a)) !== null && t !== void 0 ? t : []
	}

	function wt(e, t) {
		if (!t) return !1;
		if (e.length > 0) {
			var r = e[e.length - 1];
			if (r[0] === t[0] && r[2] === t[2]) {
				var n, a, u = ((n = r[3]) !== null && n !== void 0 ? n : 1) + ((a = t[3]) !== null && a !== void 0 ? a : 1);
				return u === r[3] ? !1 : (r[3] = u, !0)
			}
		}
		for (e.push(_a(t)); e.length > da;) e.shift();
		return !0
	}

	function Xt(e) {
		var t, r;
		return (t = (r = e.kills) === null || r === void 0 ? void 0 : r.includes("gcs")) !== null && t !== void 0 ? t : !1
	}

	function Tt(e, t) {
		return Xt(e) ? !1 : wt(e.gcs, t)
	}

	function Oi(e) {
		var t = nt(e.gcs);
		return t.length > 0 ? t : void 0
	}

	function At(e) {
		if (!Xt(e)) return Oi(e)
	}

	function Yt(e, t) {
		if (t.isInitialized) {
			var r = At(t);
			if (r) {
				var n = t.shadow.querySelector("#".concat(X(e)));
				n && se(n, {
					cs: r,
					event: "gcs",
					source: K,
					widgetId: e
				}, t.iframeOrigin)
			}
		}
	}

	function Ue(e, t, r) {
		var n = Tt(t, r);
		return n && Yt(e, t), n
	}

	function G(e, t) {
		return e.indexOf(t) !== -1
	}
	var Mi = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Li = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		ba = "https://challenges.cloudflare.com",
		Ea = [ba, "https://challenges.fed.cloudflare.com", "https://challenges.cloudflare-cn.com", "https://challenges-staging.cloudflare.com"];

	function Qt(e, t, r) {
		var n, a = ba,
			u = (n = r == null ? void 0 : r.origin) !== null && n !== void 0 ? n : a;
		if (t) {
			var d;
			return (d = e["base-url"]) !== null && d !== void 0 ? d : u
		}
		return u
	}

	function kr(e, t, r, n, a, u, d, c, p) {
		var f = Qt(r, a, c),
			v = u !== void 0 && u !== "" ? "h/".concat(u, "/") : "",
			b = p !== void 0 && p !== "" ? "&".concat(p) : "",
			A = r["feedback-enabled"] === !1 ? "fbD" : "fbE",
			N = r.chlPageOfflabel === !0 ? "&offlabel=true" : "";
		return "".concat(f, "/cdn-cgi/challenge-platform/").concat(v, "turnstile/f/av0/rch").concat(n, "/").concat(e, "/").concat(t, "/").concat(r.theme, "/").concat(A, "/").concat(d, "/").concat(r.size, "?lang=").concat(r.language).concat(N).concat(b)
	}
	var Or = function(t) {
			var r, n, a, u, d = window.innerWidth < 400,
				c = t.state !== Ut.FailureFeedbackCode && (t.state === Ut.FailureFeedback || t.state === Ut.FailureHavingTroubles || t.errorCode === void 0 || t.errorCode === 0),
				p = G(Mi, (r = (a = t.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && r !== void 0 ? r : "nonexistent"),
				f = G(Li, (n = (u = t.displayLanguage) === null || u === void 0 ? void 0 : u.toLowerCase()) !== null && n !== void 0 ? n : "nonexistent");
			return d ? Ni({
				isModeratelyVerbose: f,
				isSmallerFeedback: c,
				isVerboseLanguage: p
			}) : c && p ? "680px" : c && f ? "670px" : c ? "650px" : p ? "690px" : "680px"
		},
		Ni = function(t) {
			var r = t.isVerboseLanguage,
				n = t.isSmallerFeedback,
				a = t.isModeratelyVerbose;
			return n && r ? "660px" : n && a ? "620px" : n ? "600px" : r ? "770px" : a ? "740px" : "730px"
		};
	var Pi = 5e3,
		Fi = "auto-troubleshoot-click";

	function Di(e, t) {
		var r = Qt(e.params, !1, t),
			n = "h/".concat("g", "/");
		return "".concat(r, "/cdn-cgi/challenge-platform/").concat(n, "fr")
	}
	var Ta = function(t, r, n, a, u) {
		var d, c, p, f, v, b, A;
		if (a === void 0 || a === "" || n === void 0 || n === "") return !1;
		var N = Di(t, u),
			E = new FormData;
		E.append("consent", "on"), E.append("origin", r), E.append("issue", Fi), E.append("description", ""), E.append("rayId", n), E.append("sitekey", (d = t.params.sitekey) !== null && d !== void 0 ? d : ""), E.append("rcV", (c = t.rcV) !== null && c !== void 0 ? c : ""), E.append("cfChlOut", (p = t.cfChlOut) !== null && p !== void 0 ? p : ""), E.append("cfChlOutS", (f = t.cfChlOutS) !== null && f !== void 0 ? f : ""), E.append("mode", (v = t.mode) !== null && v !== void 0 ? v : ""), E.append("errorCode", String((b = t.errorCode) !== null && b !== void 0 ? b : 0)), E.append("frMd", a), E.append("displayLanguage", (A = t.displayLanguage) !== null && A !== void 0 ? A : "");
		try {
			if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(N, E)) return !0
		} catch (M) {
			R("auto feedback report: sendBeacon threw synchronously, falling through to fetch (".concat(Mr(M), ")"))
		}
		try {
			return fetch(N, Je({
				body: E,
				keepalive: !0,
				method: "POST",
				mode: "no-cors"
			}, xa())), !0
		} catch (M) {
			R("auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (".concat(Mr(M), ")"))
		}
		try {
			fetch(N, Je({
				body: E,
				method: "POST",
				mode: "no-cors"
			}, xa()))
		} catch (M) {
			R("auto feedback report: all transports failed (".concat(Mr(M), ")"))
		}
		return !1
	};

	function xa() {
		return typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function" ? {} : {
			signal: AbortSignal.timeout(Pi)
		}
	}

	function Mr(e) {
		return w(e, Error) ? e.message : "unknown error"
	}
	var $t = null,
		St = 0,
		Aa = function() {
			if (St++, St === 1) {
				var t = document.querySelector('meta[http-equiv="refresh"]');
				t && ($t = t.getAttribute("content"), t.remove())
			}
		},
		Sa = function() {
			if (St > 0 && St--, St === 0 && $t !== null) {
				var t = document.createElement("meta");
				t.httpEquiv = "refresh", t.content = $t, $t = null, document.head.appendChild(t)
			}
		},
		Lr = Symbol(),
		Hi = "host-origin",
		at = function(t) {
			t.feedbackPopup && !t.feedbackPopup.closed && t.feedbackPopup.close(), t.feedbackPopup = void 0, t.feedbackPopupOrigin = void 0
		};

	function Ra(e) {
		return e.endsWith("-fr") ? e : "".concat(e, "-fr")
	}

	function Ia(e) {
		var t, r, n, a = (n = document.querySelector("#".concat(e))) === null || n === void 0 || (r = n.parentElement) === null || r === void 0 || (t = r.parentElement) === null || t === void 0 ? void 0 : t.parentElement;
		return w(a, HTMLDivElement) ? a : null
	}

	function wa(e) {
		if (!((typeof e == "undefined" ? "undefined" : H(e)) !== "object" || e === null)) {
			var t = Object.getOwnPropertyDescriptor(e, "cleanup"),
				r = t === void 0 ? void 0 : Reflect.get(t, "value");
			if (typeof r == "function") return function() {
				Reflect.apply(r, void 0, [])
			}
		}
	}

	function Ca(e) {
		var t, r = wa((t = Object.getOwnPropertyDescriptor(e, Lr)) === null || t === void 0 ? void 0 : t.value);
		if (r) return r;
		var n = !0,
			a = !1,
			u = void 0;
		try {
			for (var d = Object.getOwnPropertySymbols(e)[Symbol.iterator](), c; !(n = (c = d.next()).done); n = !0) {
				var p = c.value,
					f, v = wa((f = Object.getOwnPropertyDescriptor(e, p)) === null || f === void 0 ? void 0 : f.value);
				if (v) return v
			}
		} catch (b) {
			a = !0, u = b
		} finally {
			try {
				!n && d.return != null && d.return()
			} finally {
				if (a) throw u
			}
		}
	}

	function Ui(e, t) {
		Object.defineProperty(e, Lr, {
			configurable: !0,
			enumerable: !1,
			value: {
				cleanup: t
			}
		})
	}

	function Wi(e) {
		Reflect.deleteProperty(e, Lr)
	}

	function Vi(e) {
		var t = new URL(e, window.location.href),
			r = new URLSearchParams(t.hash.startsWith("#") ? t.hash.slice(1) : t.hash);
		return r.set(Hi, window.location.origin), t.hash = r.toString(), t.toString()
	}
	var Nr = function(t, r, n, a, u) {
			var d, c, p = Ra(t),
				f = Qt(r.params, !1, a),
				v = "h/".concat("g", "/"),
				b = Vi("".concat(f, "/cdn-cgi/challenge-platform/").concat(v, "fr/").concat(Et(t), "/").concat(r.displayLanguage, "/").concat((c = r.params.theme) !== null && c !== void 0 ? c : r.theme, "/").concat(n));
			if (at(r), window.top !== window.self) {
				var A = window.open(b, "_blank");
				if (A) {
					r.feedbackPopupOrigin = rt(b), r.feedbackPopup = A;
					var N = window.setInterval(function() {
						A.closed && (window.clearInterval(N), r.feedbackPopupCloseCheck = void 0, u == null || u())
					}, 500);
					r.feedbackPopupCloseCheck = N;
					return
				}
				R("Unable to open feedback report popup, falling back to the embedded feedback overlay.")
			}
			r.wrapper.parentNode || x("Cannot initialize Widget, Element not found (#".concat(t, ")."), 3074);
			var E = Ia(p);
			if (E) {
				var M;
				(M = Ca(E)) === null || M === void 0 || M()
			}
			var k = document.createElement("div");
			k.style.position = "fixed", k.style.zIndex = "2147483646", k.style.width = "100vw", k.style.height = "100vh", k.style.top = "0", k.style.left = "0", k.style.transformOrigin = "center center", k.style.overflowX = "hidden", k.style.overflowY = "auto", k.style.background = "rgba(0,0,0,0.4)";
			var S = document.createElement("div");
			S.className = "cf-wrapper-turnstile-feedback", S.style.display = "table-cell", S.style.verticalAlign = "middle", S.style.width = "100vw", S.style.height = "100vh";
			var O = document.createElement("div");
			O.className = "cf-turnstile-feedback", O.id = "cf-fr-id", O.style.width = "100vw", O.style.maxWidth = "500px", O.style.height = Or(r), O.style.position = "relative", O.style.zIndex = "2147483647", O.style.backgroundColor = "#ffffff", O.style.borderRadius = "5px", O.style.left = "0px", O.style.top = "0px", O.style.overflow = "hidden", O.style.margin = "0px auto";
			var ae = function() {
					O.style.height = Or(r)
				},
				te = function() {
					var ie;
					Wi(k), r.feedbackIframeOrigin = void 0, window.removeEventListener("resize", ae), (ie = k.parentNode) === null || ie === void 0 || ie.removeChild(k), u == null || u()
				},
				D = document.createElement("iframe");
			D.id = p, D.setAttribute("src", b), D.setAttribute("title", "Turnstile feedback report"), D.setAttribute("allow", "cross-origin-isolated; fullscreen"), D.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), D.setAttribute("scrolling", "yes"), D.style.borderWidth = "0px", D.style.width = "100%", D.style.height = "100%", D.style.overflow = "auto", r.feedbackIframeOrigin = rt(b);
			var I = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			I.setAttribute("tabindex", "0"), I.setAttribute("role", "button"), I.setAttribute("aria-label", "Close feedback report"), I.style.position = "absolute", I.style.width = "26px", I.style.height = "26px", I.style.zIndex = "2147483647", I.style.cursor = "pointer", r.displayRtl === !0 ? I.style.left = "24px" : I.style.right = "24px", I.style.top = "24px", I.setAttribute("width", "20"), I.setAttribute("height", "20"), I.addEventListener("click", function(U) {
				U.stopPropagation(), te()
			}), I.addEventListener("keydown", function(U) {
				(U.key === "Enter" || U.key === " ") && (U.preventDefault(), U.stopPropagation(), te())
			});
			var J = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			J.setAttribute("ry", "12"), J.setAttribute("rx", "12"), J.setAttribute("cy", "12"), J.setAttribute("cx", "12"), J.setAttribute("fill", "none"), J.setAttribute("stroke-width", "0"), I.appendChild(J);
			var j = document.createElementNS("http://www.w3.org/2000/svg", "line");
			j.setAttribute("stroke-width", "1"), j.setAttribute("fill", "none"), j.setAttribute("x1", "6"), j.setAttribute("x2", "18"), j.setAttribute("y1", "18"), j.setAttribute("y2", "5");
			var B = document.createElementNS("http://www.w3.org/2000/svg", "line");
			B.setAttribute("stroke-width", "1"), B.setAttribute("fill", "none"), B.setAttribute("x1", "6"), B.setAttribute("x2", "18"), B.setAttribute("y1", "5"), B.setAttribute("y2", "18"), r.theme === Ht.Light ? (j.setAttribute("stroke", "#0A0A0A"), B.setAttribute("stroke", "#0A0A0A")) : (j.setAttribute("stroke", "#F2F2F2"), B.setAttribute("stroke", "#F2F2F2")), I.appendChild(j), I.appendChild(B), O.appendChild(D), O.appendChild(I), S.appendChild(O), k.appendChild(S), k.addEventListener("click", te), r.wrapper.parentNode.appendChild(k), window.addEventListener("resize", ae), Ui(k, te)
		},
		Rt = function(t) {
			var r, n = Ra(t),
				a = Ia(n);
			if (a) {
				var u = Ca(a);
				if (u) {
					u();
					return
				}
				R("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup."), (r = a.parentNode) === null || r === void 0 || r.removeChild(a)
			}
		};
	var Bi = 900,
		qi = 45,
		Ji = 50;

	function ji(e) {
		return w(e, ShadowRoot)
	}

	function zi(e, t, r) {
		var n = e.widgetMap.get(t);
		(n == null ? void 0 : n.retryTimeout) !== void 0 && (window.clearTimeout(n.retryTimeout), n.retryTimeout = void 0), R("Cannot find Widget ".concat(r, ", consider using turnstile.remove() to clean up a widget.")), e.widgetMap.delete(t)
	}

	function Ki(e) {
		e.watchCatSeq++;
		var t = [],
			r = !0,
			n = !1,
			a = void 0;
		try {
			for (var u = e.widgetMap[Symbol.iterator](), d; !(r = (d = u.next()).done); r = !0) {
				var c = $e(d.value, 2),
					p = c[0],
					f = c[1],
					v = X(p),
					b = f.shadow;
				if (!ji(b) || !f.wrapper.isConnected) {
					f.watchcat.missingWidgetWarning || (f.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: v,
						widgetId: p
					}));
					continue
				}
				var A = b.querySelector("#".concat(v));
				if (A === null) {
					f.watchcat.missingWidgetWarning || (f.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: v,
						widgetId: p
					}));
					continue
				}
				if (f.watchcat.seq = e.watchCatSeq, f.watchcat.lastAckedSeq === 0 && (f.watchcat.lastAckedSeq = e.watchCatSeq), !(f.isComplete || f.isFailed || f.feedbackOpen)) {
					var N = f.watchcat.seq - 1 - qi,
						E = f.watchcat.lastAckedSeq < N,
						M = f.watchcat.seq - 1 - Ji,
						k = f.isOverrunning && f.watchcat.overrunBeginSeq !== 0 && f.watchcat.overrunBeginSeq < M;
					if ((f.isExecuting || !f.isInitialized || !f.isStale && !f.isExecuted) && f.watchcat.lastAckedSeq !== 0 && E || k) {
						var S, O;
						f.watchcat.lastAckedSeq = 0, f.watchcat.seq = 0, f.isExecuting = !1;
						var ae = function(Ve, oe) {
							console.log("Turnstile Widget seem to have ".concat(Ve, ": "), oe)
						};
						ae(E ? "hung" : "crashed", p);
						var te = E ? jt : zt;
						if ((O = e.internalMsgHandler) === null || O === void 0 || O.call(e, {
								code: te,
								event: "fail",
								rcV: (S = f.nextRcV) !== null && S !== void 0 ? S : Ce,
								source: K,
								widgetId: p
							}), 0) var D;
						continue
					}
					se(A, {
						event: "meow",
						seq: e.watchCatSeq,
						source: K,
						widgetId: p
					}, f.iframeOrigin)
				}
			}
		} catch (ye) {
			n = !0, a = ye
		} finally {
			try {
				!r && u.return != null && u.return()
			} finally {
				if (n) throw a
			}
		}
		var I = !0,
			J = !1,
			j = void 0;
		try {
			for (var B = t[Symbol.iterator](), U; !(I = (U = B.next()).done); I = !0) {
				var ie = U.value,
					W = ie.widgetElId,
					fe = ie.widgetId;
				zi(e, fe, W)
			}
		} catch (ye) {
			J = !0, j = ye
		} finally {
			try {
				!I && B.return != null && B.return()
			} finally {
				if (J) throw j
			}
		}
		t.length > 0 && e.widgetMap.size === 0 && It(e)
	}

	function Pr(e) {
		var t, r;
		(r = (t = e).watchCatInterval) !== null && r !== void 0 || (t.watchCatInterval = setInterval(function() {
			Ki(e)
		}, Bi))
	}

	function It(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && (clearInterval(e.watchCatInterval), e.watchCatInterval = null)
	}
	var Dr = Symbol();

	function Oa(e) {
		return (typeof e == "undefined" ? "undefined" : H(e)) === "object" && e !== null ? e : void 0
	}

	function Fr(e) {
		return (typeof e == "undefined" ? "undefined" : H(e)) === "object" && e !== null && "widgetMap" in e && w(e.widgetMap, Map) && "upgradeAttempts" in e && typeof e.upgradeAttempts == "number" && "upgradeCompletedCount" in e && typeof e.upgradeCompletedCount == "number"
	}

	function Gi(e, t) {
		Object.defineProperty(e, Dr, {
			configurable: !0,
			enumerable: !1,
			value: t
		})
	}

	function Xi(e) {
		var t = Object.getOwnPropertyDescriptor(e, Dr),
			r = t === void 0 ? void 0 : Reflect.get(t, "value");
		if (Fr(r)) return r;
		var n = Gt(e, Fr);
		if (n) return n
	}

	function Ma(e) {
		Reflect.deleteProperty(e, Dr);
		var t = !0,
			r = !1,
			n = void 0;
		try {
			for (var a = Object.getOwnPropertySymbols(e)[Symbol.iterator](), u; !(t = (u = a.next()).done); t = !0) {
				var d = u.value,
					c = Object.getOwnPropertyDescriptor(e, d),
					p = c === void 0 ? void 0 : Reflect.get(c, "value");
				Fr(p) && Reflect.deleteProperty(e, d)
			}
		} catch (f) {
			r = !0, n = f
		} finally {
			try {
				!t && a.return != null && a.return()
			} finally {
				if (r) throw n
			}
		}
	}

	function Yi(e) {
		return !Number.isFinite(e.apiJsReloadBackoffMs) || e.apiJsReloadBackoffMs <= 0 ? Ze : Math.min(e.apiJsReloadBackoffMs, vt)
	}

	function Qi(e) {
		return !Number.isFinite(e.apiJsReloadNextAllowedTsMs) || e.apiJsReloadNextAllowedTsMs <= 0 ? 0 : e.apiJsReloadNextAllowedTsMs
	}

	function ka(e, t) {
		var r = Reflect.get(e, t);
		return typeof r == "number" ? r : 0
	}

	function La(e, t) {
		var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xt;
		t.upgradeAttempts++;
		var n = r();
		if (!(n != null && n.parentNode)) return !1;
		var a = Oa(e);
		if (!a) return !1;
		var u = n.nonce;
		Gi(a, t);
		var d = new URL(n.src),
			c = document.createElement("script");
		d.searchParams.set("_upgrade", "true"), d.searchParams.set("_cb", String(Date.now())), c.async = !0, u && (c.nonce = u), c.setAttribute("crossorigin", "anonymous"), c.src = d.toString();
		try {
			return n.parentNode.replaceChild(c, n), !0
		} catch (p) {
			if (!w(p, DOMException)) throw p;
			return Ma(a), !1
		}
	}

	function Na(e, t, r) {
		var n = Oa(e);
		if (!n) return !1;
		var a = Xi(n);
		if (!a) return !1;
		var u = a.apiJsMismatchReloadPending;
		t.isReady = a.isReady, t.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, t.gcs = nt(a.gcs), t.lastWidgetIdx = a.lastWidgetIdx, t.scriptWasLoadedAsync = a.scriptWasLoadedAsync, t.apiJsReloadBackoffMs = u ? Ze : Yi(a), t.apiJsReloadNextAllowedTsMs = Qi(a), t.apiJsMismatchReloadAttempts = ka(a, "apiJsMismatchReloadAttempts"), t.apiJsMismatchReloadCompletedCount = ka(a, "apiJsMismatchReloadCompletedCount") + (u ? 1 : 0), t.apiJsMismatchReloadPending = !1, t.upgradeAttempts = a.upgradeAttempts, t.upgradeCompletedCount = a.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = Y(), t.watchCatInterval = null, t.watchCatSeq = a.watchCatSeq, t.widgetMap = a.widgetMap;
		var d = !0,
			c = !1,
			p = void 0;
		try {
			for (var f = t.widgetMap.values()[Symbol.iterator](), v; !(d = (v = f.next()).done); d = !0) {
				var b = v.value;
				b.gcs = nt(b.gcs)
			}
		} catch (A) {
			c = !0, p = A
		} finally {
			try {
				!d && f.return != null && f.return()
			} finally {
				if (c) throw p
			}
		}
		return It(a, !0), a.msgHandler && window.removeEventListener("message", a.msgHandler), Ma(n), r(), !0
	}

	function Hr(e) {
		return G(["auto", "dark", "light"], e)
	}

	function Ur(e) {
		return G(["auto", "never"], e)
	}

	function Wr(e) {
		return e > 0 && e < 9e5
	}

	function Vr(e) {
		return e > 0 && e < 36e4
	}
	var $i = RegExp("^[0-9A-Za-z_-]{3,100}$", "u");

	function Pa(e) {
		return $i.test(e)
	}
	var Zi = RegExp("^[a-z0-9_-]{0,32}$", "iu");

	function Br(e) {
		return e === void 0 ? !0 : typeof e == "string" && Zi.test(e)
	}
	var eo = RegExp("^[a-z0-9_\\-=]{0,255}$", "iu");

	function qr(e) {
		return e === void 0 ? !0 : typeof e == "string" && eo.test(e)
	}

	function Jr(e) {
		return G([Z.Normal, Z.Compact, Z.Invisible, Z.Flexible], e)
	}

	function jr(e) {
		return G(["auto", "manual", "never"], e)
	}

	function zr(e) {
		return G(["auto", "manual", "never"], e)
	}
	var to = RegExp("^[a-z]{2,3}(?:[-_][a-z]{2})?$", "iu");

	function Kr(e) {
		return e === "auto" || to.test(e)
	}

	function Gr(e) {
		return G(["always", "execute", "interaction-only"], e)
	}

	function Fa(e) {
		return G(["true", "false"], e)
	}

	function Xr(e) {
		return G(["render", "execute"], e)
	}
	var Ll = RegExp("^[0-9a-z_\\-.]{5,2000}$", "iu");

	function Yr(e) {
		var t = new URLSearchParams;
		if (0) {
			var r;
			if (r != null && r !== "") var n
		}
		if (e.params["offlabel-show-privacy"] !== void 0 && t.set("offlabel_show_privacy", String(e.params["offlabel-show-privacy"])), e.params["offlabel-show-help"] !== void 0 && t.set("offlabel_show_help", String(e.params["offlabel-show-help"])), !(t.size === 0 || t.toString() === "")) return t.toString()
	}
	var ro = 12;

	function no(e) {
		return w(e.shadow.host, HTMLDivElement) ? e.shadow.host : e.wrapper
	}

	function ao(e) {
		var t = e.getBoundingClientRect();
		return {
			h: Math.round(t.height),
			w: Math.round(t.width),
			x: Math.round(t.left),
			y: Math.round(t.top)
		}
	}

	function io(e) {
		return e.w > 0 && e.h > 0 && e.x + e.w > 0 && e.y + e.h > 0 && e.x < window.innerWidth && e.y < window.innerHeight
	}

	function tn(e, t) {
		return e ? e === t.wrapper ? "wrapper" : e === t.iframeHost ? "iframe-host" : e === t.iframe ? "iframe" : e === document.body ? "body" : e === document.documentElement ? "document-element" : e === t.wrapper.parentElement ? "wrapper-parent" : e.contains(t.wrapper) || e.contains(t.iframeHost) ? "ancestor" : "other" : null
	}

	function Da(e) {
		var t = [];
		e.display === "none" && t.push("dn"), (e.visibility === "hidden" || e.visibility === "collapse") && t.push(e.visibility === "hidden" ? "vh" : "vc");
		var r = Number(e.opacity);
		return Number.isFinite(r) && r <= .01 && t.push("op"), e.contentVisibility === "hidden" && t.push("cv"), t
	}

	function oo(e) {
		var t = [];
		return e.connected || t.push("dt"), (e.rect.w === 0 || e.rect.h === 0) && t.push("zs"), e.connected && !e.inViewport && t.push("ov"), t
	}

	function Qr(e, t) {
		var r, n = ao(e),
			a = window.getComputedStyle(e);
		return {
			connected: e.isConnected,
			element: (r = tn(e, t)) !== null && r !== void 0 ? r : "unknown",
			inViewport: e.isConnected && io(n),
			rect: n,
			style: {
				contentVisibility: a.contentVisibility,
				display: a.display,
				opacity: a.opacity,
				visibility: a.visibility
			}
		}
	}

	function $r(e, t) {
		return t.length === 0 ? null : {
			element: Ha(e.element),
			reasons: t
		}
	}

	function Zr(e, t, r, n) {
		var a = Da(t.style);
		if (t.connected || a.push("dt"), a.length > 0) return $r(t, a);
		for (var u = e.parentElement, d = 0; u && d < ro;) {
			var c = n.get(u);
			if (c === void 0) {
				var p, f = window.getComputedStyle(u),
					v = {
						connected: u.isConnected,
						element: (p = tn(u, r)) !== null && p !== void 0 ? p : "unknown",
						inViewport: !1,
						rect: {
							h: 0,
							w: 0,
							x: 0,
							y: 0
						},
						style: {
							contentVisibility: f.contentVisibility,
							display: f.display,
							opacity: f.opacity,
							visibility: f.visibility
						}
					};
				c = $r(v, Da(v.style)), n.set(u, c)
			}
			if (c) return c;
			u = u.parentElement, d += 1
		}
		return $r(t, oo(t))
	}

	function uo(e) {
		return e.mode === he.Invisible ? {
			expectedHidden: !0,
			reason: "mi"
		} : e.params.appearance === re.InteractionOnly ? {
			expectedHidden: !0,
			reason: "ai"
		} : e.params.appearance === re.Execute && !e.isExecuting ? {
			expectedHidden: !0,
			reason: "ae"
		} : {
			expectedHidden: !1,
			reason: null
		}
	}

	function lo(e, t) {
		return t === e.wrapper || t.parentElement === e.wrapper ? "wrapper" : t.isConnected ? "other" : "detached"
	}

	function Ha(e) {
		switch (e) {
			case null:
				return "u";
			case "ancestor":
				return "a";
			case "body":
				return "b";
			case "detached":
				return "d";
			case "document-element":
				return "r";
			case "iframe":
				return "i";
			case "iframe-host":
				return "h";
			case "other":
				return "o";
			case "wrapper":
				return "w";
			case "wrapper-parent":
				return "p";
			default:
				return "u"
		}
	}

	function co(e) {
		switch (e) {
			case "detached":
				return "d";
			case "other":
				return "o";
			case "wrapper":
				return "w";
			default:
				return "u"
		}
	}

	function en(e, t) {
		if (!t) return null;
		var r;
		switch (e) {
			case "iframe":
				r = "i";
				break;
			case "iframeHost":
				r = "h";
				break;
			case "wrapper":
				r = "w";
				break;
			default:
				r = "u";
				break
		}
		return "".concat(r, ":").concat(t.element, ":").concat(t.reasons.join("."))
	}

	function Ua(e, t) {
		var r, n, a = no(e),
			u = {
				iframe: t,
				iframeHost: a,
				wrapper: e.wrapper
			},
			d = uo(e),
			c = lo(e, a),
			p = tn(a.parentElement, u),
			f = {
				height: window.innerHeight,
				visibilityState: document.visibilityState,
				width: window.innerWidth
			};
		if (d.expectedHidden) {
			var v, b;
			return {
				appearance: (v = e.params.appearance) !== null && v !== void 0 ? v : re.Always,
				expectedHidden: !0,
				expectedHiddenReason: d.reason,
				hostParent: p,
				isExecuting: e.isExecuting,
				mode: (b = e.mode) !== null && b !== void 0 ? b : null,
				mount: c,
				reasons: [],
				unexpectedHidden: !1,
				viewport: f
			}
		}
		var A = Qr(e.wrapper, u),
			N = Qr(a, u),
			E = Qr(t, u),
			M = new Map,
			k = Zr(e.wrapper, A, u, M),
			S = Zr(a, N, u, M),
			O = Zr(t, E, u, M),
			ae = [c === "wrapper" ? null : "m:".concat(co(c), ":").concat(Ha(p)), en("wrapper", k), en("iframeHost", S), en("iframe", O)].filter(function(te) {
				return te !== null
			});
		return {
			appearance: (r = e.params.appearance) !== null && r !== void 0 ? r : re.Always,
			expectedHidden: !1,
			expectedHiddenReason: null,
			hostParent: p,
			isExecuting: e.isExecuting,
			mode: (n = e.mode) !== null && n !== void 0 ? n : null,
			mount: c,
			reasons: de(new Set(ae)),
			unexpectedHidden: ae.length > 0,
			viewport: f
		}
	}

	function Wa(e, t) {
		if (e.isResetting = !1, t) {
			t(String(Zn));
			return
		}
		x("Could not load challenge from challenges.cloudflare.com.", 161)
	}

	function Va(e, t) {
		return e ? t ? !0 : G(Ea, e) : !1
	}

	function Ba() {
		for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window, t = e; t && t.top !== t && !t.location.href.startsWith("http");) t = t.top;
		return t == null ? void 0 : t.location.href
	}
	var Ya = Symbol(),
		so = "Turnstile has already been rendered in this container. The render attempt was rejected.",
		fo = "Turnstile skipped implicit render because a widget already exists in this container.",
		rn = void 0,
		po = function(e) {
			return e.styleSheets.length
		};

	function on(e) {
		return Reflect.get(window, e)
	}

	function un(e) {
		var t = on(e);
		return typeof t == "function" ? function() {
			for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
			return Reflect.apply(t, window, n)
		} : void 0
	}

	function qa(e, t) {
		return e == null ? t : Number(e)
	}

	function vo(e) {
		return e === "new" || e === "crashed_retry" || e === "failure_retry" || e === "stale_execute" || e === "auto_expire" || e === "auto_timeout" || e === "manual_refresh" || e === "api" || e === "check_delays" || e === "upgrade_reload" || e === "time_check_cached_warning_aux" || e === "js_cookies_missing_aux" || e === "redirecting_text_overrun"
	}

	function mo(e) {
		var t = JSON.stringify(e);
		return JSON.parse(t)
	}

	function Ja(e) {
		return (typeof e == "undefined" ? "undefined" : H(e)) === "object" && e !== null && "clearPendingApiJsReloadRequest" in e && typeof e.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in e && typeof e.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in e && typeof e.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in e && typeof e.reloadAfterUpgrade == "function"
	}

	function ja(e) {
		if (!((typeof e == "undefined" ? "undefined" : H(e)) !== "object" || e === null)) {
			var t = Object.getOwnPropertyDescriptor(e, Ya),
				r = t === void 0 ? void 0 : Reflect.get(t, "value");
			if (Ja(r)) return r;
			var n = Gt(e, Ja);
			if (n) return n
		}
	}
	var g = {
			apiJsMismatchReloadAttempts: 0,
			apiJsMismatchReloadCompletedCount: 0,
			apiJsMismatchReloadPending: !1,
			apiJsReloadBackoffMs: Ze,
			apiJsReloadNextAllowedTsMs: 0,
			apiVersion: 1,
			gcs: [],
			isReady: !1,
			isRecaptchaCompatibilityMode: !1,
			lastWidgetIdx: 0,
			scriptUrl: "undefined",
			scriptUrlParsed: void 0,
			scriptWasLoadedAsync: !1,
			turnstileLoadInitTimeTsMs: Y(),
			upgradeAttempts: 0,
			upgradeCompletedCount: 0,
			watchCatInterval: null,
			watchCatSeq: 0,
			widgetMap: new Map
		},
		Ot, ur, cr;

	function go(e) {
		var t = !0,
			r = !1,
			n = void 0;
		try {
			for (var a = g.widgetMap[Symbol.iterator](), u; !(t = (u = a.next()).done); t = !0) {
				var d = $e(u.value, 2),
					c = d[0],
					p = d[1];
				if (p.wrapper.parentElement === e || p.wrapper !== e && p.wrapper.contains(e) || p.shadow.contains(e)) return c
			}
		} catch (f) {
			r = !0, n = f
		} finally {
			try {
				!t && a.return != null && a.return()
			} finally {
				if (r) throw n
			}
		}
		return null
	}

	function Zt(e) {
		if (typeof e == "string") {
			var t = Et(e);
			return t !== null && g.widgetMap.has(t) ? t : g.widgetMap.has(e) ? e : null
		}
		return go(e)
	}

	function ho(e) {
		return e === "implicit" ? fo : so
	}

	function za(e, t) {
		return e === "explicit" && (t == null ? void 0 : t.renderSource) === "implicit"
	}

	function ln() {
		Ot !== void 0 && (window.clearTimeout(Ot), Ot = void 0)
	}

	function Qa() {
		var e = !0,
			t = !1,
			r = void 0;
		try {
			for (var n = g.widgetMap.values()[Symbol.iterator](), a; !(e = (a = n.next()).done); e = !0) {
				var u = a.value;
				if (u.chlPageData !== void 0 && u.chlPageData !== "") return !0
			}
		} catch (d) {
			t = !0, r = d
		} finally {
			try {
				!e && n.return != null && n.return()
			} finally {
				if (t) throw r
			}
		}
		return !1
	}

	function kt(e) {
		var t = g.widgetMap.get(e),
			r = X(e);
		if (t !== void 0) {
			var n = Ke(t, r);
			n !== null && se(n, {
				apiJsMismatchReloadAttempts: g.apiJsMismatchReloadAttempts,
				apiJsMismatchReloadCompletedCount: g.apiJsMismatchReloadCompletedCount,
				event: "reloadApiJsRejected",
				source: K,
				widgetId: e
			}, t.iframeOrigin)
		}
	}

	function cn() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			t = e.preserveMismatchReloadPending,
			r = t === void 0 ? !1 : t;
		cr = void 0, r || (g.apiJsMismatchReloadPending = !1), ur !== void 0 && (window.clearTimeout(ur), ur = void 0)
	}

	function $a() {
		var e = cr;
		cn(), e !== void 0 && kt(e)
	}

	function yo() {
		return Y() < g.apiJsReloadNextAllowedTsMs
	}

	function _o() {
		var e = g.apiJsReloadBackoffMs,
			t = Number.isFinite(e) && e > 0 ? Math.min(e, vt) : Ze,
			r = Math.round(t * (.8 + Math.random() * .4));
		g.apiJsReloadNextAllowedTsMs = Y() + r, g.apiJsReloadBackoffMs = Math.min(t * 2, vt)
	}

	function bo(e) {
		cn({
			preserveMismatchReloadPending: !0
		}), g.apiJsMismatchReloadPending = !0, cr = e, ur = window.setTimeout(function() {
			$a()
		}, Cn)
	}

	function dn() {
		ln(), !Qa() && (Ot = window.setTimeout(function() {
			Ot = void 0, ri()
		}, On))
	}

	function nn(e, t) {
		ei(e, t, "")
	}
	var sn = [];

	function Ka() {
		g.isReady = !0;
		var e = !0,
			t = !1,
			r = void 0;
		try {
			for (var n = sn[Symbol.iterator](), a; !(e = (a = n.next()).done); e = !0) {
				var u = a.value;
				u()
			}
		} catch (d) {
			t = !0, r = d
		} finally {
			try {
				!e && n.return != null && n.return()
			} finally {
				if (t) throw r
			}
		}
	}

	function Ga(e, t) {
		e.onerror = function() {
			Wa(t, t.cbError)
		}
	}

	function Za(e, t) {
		var r, n = (r = e.params["response-field"]) !== null && r !== void 0 ? r : !0,
			a = g.isRecaptchaCompatibilityMode,
			u = "".concat(t, "_response"),
			d = "".concat(t, "_g_response"),
			c = (!n || w(document.querySelector("#".concat(u)), HTMLInputElement)) && (!a || w(document.querySelector("#".concat(d)), HTMLInputElement));
		if (!(e.responseElementsBuilt && c)) {
			if (n && !w(document.querySelector("#".concat(u)), HTMLInputElement)) {
				var p, f = document.createElement("input");
				f.type = "hidden", f.name = (p = e.params["response-field-name"]) !== null && p !== void 0 ? p : Rn, f.id = u, e.wrapper.appendChild(f)
			}
			if (a && !w(document.querySelector("#".concat(d)), HTMLInputElement)) {
				var v = document.createElement("input");
				v.type = "hidden", v.name = In, v.id = d, e.wrapper.appendChild(v)
			}
			e.responseElementsBuilt = !0
		}
	}

	function ei(e, t, r) {
		Za(e, t);
		var n = document.querySelector("#".concat(t, "_response"));
		if (n !== null && w(n, HTMLInputElement) && (n.value = r), g.isRecaptchaCompatibilityMode) {
			var a = document.querySelector("#".concat(t, "_g_response"));
			a !== null && w(a, HTMLInputElement) && (a.value = r)
		}
	}

	function We(e, t) {
		var r, n;
		return (r = (n = t.kills) === null || n === void 0 ? void 0 : n.includes(e)) !== null && r !== void 0 ? r : !1
	}

	function Eo(e) {
		return e.chlPageData !== void 0 && e.chlPageData !== ""
	}

	function xo(e) {
		return !Eo(e) && !We("pac", e)
	}

	function er(e, t) {
		var r, n = (r = t.params.size) !== null && r !== void 0 ? r : Z.Normal,
			a = t.mode;
		switch (a) {
			case he.NonInteractive:
			case he.Managed:
				switch (e.style.opacity = "", e.style.position = "", e.style.left = "", e.style.top = "", e.style.visibility = "", e.style.pointerEvents = "", e.style.zIndex = "", n) {
					case Z.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case Z.Invisible:
						x('Invalid value for parameter "size", expected "'.concat(Z.Compact, '", "').concat(Z.Flexible, '", or "').concat(Z.Normal, '", got "').concat(n, '"'), 2817);
					case Z.Normal:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case Z.Flexible:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break;
					default:
						break
				}
				break;
			case he.Invisible:
				We("floating-invisible", t) ? (e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden") : (e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				x('Invalid value for parameter "mode", expected "'.concat(he.NonInteractive, '", "').concat(he.Managed, '" or "').concat(he.Invisible, '", got "').concat(String(a), '"'), 2818)
		}
	}

	function Xa(e) {
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"
	}

	function wo(e, t) {
		var r = t.get("turnstile_iframe_alt");
		r !== void 0 && r !== "" && (e.title = r)
	}

	function Ke(e, t) {
		return e.shadow.querySelector("#".concat(t))
	}

	function To(e, t) {
		var r, n;
		return (r = (n = e.wrapper.parentNode) === null || n === void 0 ? void 0 : n.querySelector("#".concat(t, "-fr"))) !== null && r !== void 0 ? r : null
	}

	function Ao(e) {
		var t, r;
		return ((r = e.feedbackPopup) === null || r === void 0 ? void 0 : r.closed) === !0 ? (e.feedbackPopup = void 0, e.feedbackPopupOrigin = void 0, null) : (t = e.feedbackPopup) !== null && t !== void 0 ? t : null
	}

	function lr(e, t) {
		var r, n, a = (r = (n = To(e, t)) === null || n === void 0 ? void 0 : n.contentWindow) !== null && r !== void 0 ? r : null;
		if (a !== null) return {
			targetOrigin: e.feedbackIframeOrigin,
			targetWindow: a
		};
		var u = Ao(e);
		return {
			targetOrigin: u === null ? void 0 : e.feedbackPopupOrigin,
			targetWindow: u
		}
	}

	function So(e) {
		if ((typeof e == "undefined" ? "undefined" : H(e)) !== "object" || e === null) return !1;
		var t = e;
		return t.source === K && typeof t.event == "string" && typeof t.widgetId == "string"
	}

	function Ro(e) {
		return e.isTrusted && So(e.data)
	}

	function Io(e) {
		return Va(e.origin, !1)
	}

	function Co(e, t, r) {
		var n, a, u = (n = (a = Ke(t, r)) === null || a === void 0 ? void 0 : a.contentWindow) !== null && n !== void 0 ? n : null,
			d = lr(t, r).targetWindow,
			c = function(b) {
				return b !== null && e.source === b
			},
			p = e.data.event;
		switch (p) {
			case "feedbackActivity":
			case "requestFeedbackData":
			case "closeFeedbackReportIframe":
				return c(d);
			case "refreshRequest":
				return c(u) || e.data.reason === "feedback_refresh" && c(d);
			case "complete":
			case "fail":
			case "feedbackInit":
			case "food":
			case "init":
			case "interactiveBegin":
			case "interactiveEnd":
			case "interactiveTimeout":
			case "languageUnsupported":
			case "overrunBegin":
			case "overrunEnd":
			case "reject":
			case "reloadApiJsRequest":
			case "reloadRequest":
			case "requestExtraParams":
			case "tokenExpired":
			case "translationInit":
			case "turnstileResults":
			case "widgetStale":
				return c(u);
			default: {
				var f = p;
				return !1
			}
		}
	}

	function an() {
		return Ba(window)
	}

	function tr(e, t, r) {
		return e === null ? t : Fa(e) ? e === "true" : (R(r(e)), t)
	}

	function ko() {
		try {
			var e = xt();
			if (!e) return;
			var t = e.src,
				r = !0,
				n = !1,
				a = void 0;
			try {
				for (var u = performance.getEntriesByType("resource")[Symbol.iterator](), d; !(r = (d = u.next()).done); r = !0) {
					var c = d.value;
					if (w(c, PerformanceResourceTiming) && c.name.includes(t)) return c
				}
			} catch (p) {
				n = !0, a = p
			} finally {
				try {
					!r && u.return != null && u.return()
				} finally {
					if (n) throw a
				}
			}
		} catch (p) {
			return
		}
	}
	var ti = (function() {
			var e = function(i) {
					var l;
					(l = ie.get(i)) === null || l === void 0 || l(), ie.delete(i)
				},
				t = function(i) {
					var l = U.get(i);
					if (!(!W.has(i) || !fe.has(i) || l === void 0 || i.autoFeedbackSent === !0 || We("feedback-report-auto-submit", i))) {
						var m = Ta(i, l.feedbackOrigin, l.rayId, i.frMd, g.scriptUrlParsed);
						m && (i.autoFeedbackSent = !0, e(i), W.delete(i), U.delete(i), fe.delete(i))
					}
				},
				r = function(i) {
					if (e(i), !(U.get(i) === void 0 || i.autoFeedbackSent === !0)) {
						var l = function(s) {
							s.isTrusted && (W.add(i), t(i))
						};
						window.addEventListener("keydown", l, !0), window.addEventListener("mousemove", l, !0), window.addEventListener("touchstart", l, !0), ie.set(i, function() {
							window.removeEventListener("keydown", l, !0), window.removeEventListener("mousemove", l, !0), window.removeEventListener("touchstart", l, !0)
						})
					}
				},
				n = function(i, l, m, s, o, T) {
					return gn(function() {
						var h, y, P, L, F, q, _e, be, Se, Me, ue;
						return wn(this, function(Q) {
							switch (Q.label) {
								case 0:
									if (y = function(Ee, xe) {
											var z = g.widgetMap.get(l);
											z !== i || z.isComplete || z.isResetting || z.response !== s || (!Ee && xe !== void 0 && xe !== "" && R(xe), c(z, m, Ee))
										}, P = i.params.sitekey, L = an(), L === void 0 || L === "") return R("Cannot determine Turnstile's embedded location, aborting clearance redemption."), c(i, m, !1), [2];
									F = "h/".concat("g", "/"), q = new URL(L), _e = "https", be = "", Se = "".concat(_e, "://").concat(q.host, "/cdn-cgi/challenge-platform/").concat(F, "c/").concat(T).concat(be), Q.label = 1;
								case 1:
									return Q.trys.push([1, 3, , 4]), [4, fetch(Se, {
										body: JSON.stringify({
											secondaryToken: o,
											sitekey: P
										}),
										headers: {
											"Content-Type": "application/json"
										},
										method: "POST",
										redirect: "manual"
									})];
								case 2:
									return Me = Q.sent(), Me.status === 200 ? y(!0) : y(!1, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), [3, 4];
								case 3:
									return ue = Q.sent(), y(!1, "Error contacting Turnstile, aborting clearance redemption."), [3, 4];
								case 4:
									return [2]
							}
						})
					})()
				},
				a = function(i, l, m) {
					if (i.params.retry === Wt.Auto || m) {
						var s;
						if (i.feedbackOpen) {
							i.pendingRetry = {
								crashed: m
							};
							return
						}
						var o = m ? 0 : 1e3 * 2 + ((s = i.params["retry-interval"]) !== null && s !== void 0 ? s : 0);
						i.retryTimeout = window.setTimeout(function() {
							var T = m ? ee.CrashedRetry : ee.FailureRetry;
							S(T, l)
						}, o)
					}
				},
				u = function(i, l, m) {
					return i.params.execution === gt.Render ? !0 : (l === ee.CrashedRetry || l === ee.FailureRetry || l === ee.CheckDelays || l === ee.UpgradeReload) && i.params.execution === gt.Execute && m
				},
				d = function(i, l, m) {
					if (i.feedbackOpen && (i.feedbackOpen = !1, e(i), W.delete(i), U.delete(i), fe.delete(i), i.feedbackPopupCloseCheck !== void 0 && (window.clearInterval(i.feedbackPopupCloseCheck), i.feedbackPopupCloseCheck = void 0), Sa(), window.postMessage({
							event: "feedbackClose",
							source: K,
							widgetId: m
						}, "*"), i.pendingRetry)) {
						var s = i.pendingRetry.crashed;
						i.pendingRetry = void 0, a(i, l, s)
					}
				},
				c = function(i, l, m) {
					var s;
					i.response === void 0 && x("[Internal Error] Widget was completed but no response was given", 1362), i.isExecuting = !1, i.isComplete = !0, ei(i, l, i.response), (s = i.cbSuccess) === null || s === void 0 || s.call(i, i.response, m)
				},
				p = function(i) {
					if (!i) return [];
					for (var l = i.attributes, m = l.length, s = new Array(m), o = 0; o < m; o++) s[o] = l[o].name;
					return s
				},
				f = function() {
					for (var i = {}, l = [], m = document.querySelectorAll("*"), s = 0; s < m.length && l.length < 50; s++) {
						var o = m[s].tagName.toLowerCase();
						o.includes("-") && !i[o] && (i[o] = !0, l.push(o))
					}
					return l
				},
				v = function(i, l, m) {
					if (i.rcV = l, 0) var s
				},
				b = function() {
					var i = "abcdefghijklmnopqrstuvwxyz0123456789",
						l = i.length,
						m;
					do {
						m = "";
						for (var s = 0; s < 5; s++) m += i.charAt(Math.floor(Math.random() * l))
					} while (g.widgetMap.has(m));
					return m
				},
				A = function(i, l, m) {
					for (; i.msgQueue.length > 0;) {
						var s = i.msgQueue.pop();
						se(m, {
							cs: s === ht.Execute ? At(i) : void 0,
							event: s,
							source: K,
							widgetId: l
						}, i.iframeOrigin)
					}
				},
				N = function(i) {
					return i.isExecuting
				},
				E = function(i, l) {
					if (l) {
						var m = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
							s = [],
							o = !0,
							T = !1,
							h = void 0;
						try {
							for (var y = m[Symbol.iterator](), P; !(o = (P = y.next()).done); o = !0) {
								var L = P.value;
								Object.getOwnPropertyDescriptor(l, L) !== void 0 && l[L] !== void 0 && l[L] !== i.params[L] && s.push(L)
							}
						} catch (F) {
							T = !0, h = F
						} finally {
							try {
								!o && y.return != null && y.return()
							} finally {
								if (T) throw h
							}
						}
						s.length > 0 && x("The parameters ".concat(m.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(s.join(",")), 3618), l.action !== void 0 && l.action !== "" && (Br(l.action) || x('Invalid input for optional parameter "action", got "'.concat(l.action, '"'), 3604), i.action = l.action), l.cData !== void 0 && l.cData !== "" && (qr(l.cData) || x('Invalid input for optional parameter "cData", got "'.concat(l.cData, '"'), 3605), i.cData = l.cData), l["after-interactive-callback"] !== void 0 && (i.cbAfterInteractive = l["after-interactive-callback"]), l["before-interactive-callback"] !== void 0 && (i.cbBeforeInteractive = l["before-interactive-callback"]), l.callback !== void 0 && (i.cbSuccess = l.callback), l["expired-callback"] !== void 0 && (i.cbExpired = l["expired-callback"]), l["timeout-callback"] !== void 0 && (i.cbTimeout = l["timeout-callback"]), l["error-callback"] !== void 0 && (i.cbError = l["error-callback"]), l["unsupported-callback"] !== void 0 && (i.cbUnsupported = l["unsupported-callback"]), l.chlPageData !== void 0 && l.chlPageData !== "" && (i.chlPageData = l.chlPageData)
					}
				},
				M = function(i, l, m) {
					i === "explicit" && l !== void 0 && E(l, m), R(ho(i))
				},
				k = function(i) {
					S(ee.Api, i, ke(pa, g))
				},
				S = function(i, l, m) {
					var s, o, T = oe(l);
					T === null && x("Nothing to reset found for provided container", 3329);
					var h = g.widgetMap.get(T);
					h === void 0 && x("Widget ".concat(T, " to reset was not found."), 3331), Tt(h, m);
					var y = h.isExecuted;
					h.isResetting = !0, h.response = void 0, h.mode = void 0, h.msgQueue = [], h.isComplete = !1, h.isExecuted = !1, h.isExecuting = !1, h.isExpired = !1, h.isFailed = !1, h.isInitialized = !1, h.isStale = !1, h.isOverrunning = !1, h.cfChlOut = void 0, h.cfChlOutS = void 0, h.errorCode = void 0, h.frMd = void 0, h.autoFeedbackSent = !1, e(h), W.delete(h), U.delete(h), fe.delete(h), h.watchcat.overrunBeginSeq = 0, h.watchcat.lastAckedSeq = 0, h.watchcat.seq = 0, u(h, i, y) && (h.msgQueue.push(ht.Execute), h.isExecuted = !0, h.isExecuting = !0);
					var P = X(T),
						L = h.shadow.querySelector("#".concat(P));
					L === null && x("Widget ".concat(T, " to reset was not found."), 3330), (h.params.appearance === re.InteractionOnly || h.params.appearance === re.Execute) && Xa(L), h.params.sitekey === null && x("Unexpected Error: Sitekey is null", 3347);
					var F = L.cloneNode();
					w(F, HTMLIFrameElement) || x("Unexpected Error: Cloned widget is not an iframe", 3348);
					var q = kr(T, h.params.sitekey, h.params, (s = h.rcV) !== null && s !== void 0 ? s : Ce, !1, "g", i, g.scriptUrlParsed, Yr(h));
					F.src = q, Ga(F, h), h.iframeOrigin = rt(q), (o = L.parentNode) === null || o === void 0 || o.replaceChild(F, L), nn(h, P), h.retryTimeout !== void 0 && window.clearTimeout(h.retryTimeout)
				},
				O = function(i, l) {
					var m = X(i),
						s = ["input#".concat(m, "_response"), "input#".concat(m, "_g_response")];
					document.querySelectorAll(s.join(", ")).forEach(function(o) {
						o.remove()
					}), l.shadow.querySelectorAll(s.join(", ")).forEach(function(o) {
						o.remove()
					}), Rt(m), at(l), l.wrapper.remove(), l.retryTimeout !== void 0 && window.clearTimeout(l.retryTimeout), g.widgetMap.delete(i), It(g)
				},
				ae = function(i) {
					var l = ke(va, g),
						m = oe(i),
						s = m === null ? void 0 : g.widgetMap.get(m);
					if (m === null || s === void 0) {
						R("Nothing to remove found for the provided container.");
						return
					}
					wt(g.gcs, l), Tt(s, l), O(m, s)
				},
				te = function() {
					var i = de(g.widgetMap.keys()),
						l = !0,
						m = !1,
						s = void 0;
					try {
						for (var o = i[Symbol.iterator](), T; !(l = (T = o.next()).done); l = !0) {
							var h = T.value,
								y = g.widgetMap.get(h),
								P = X(h);
							y !== void 0 && (Rt(P), at(y), S(ee.UpgradeReload, P))
						}
					} catch (L) {
						m = !0, s = L
					} finally {
						try {
							!l && o.return != null && o.return()
						} finally {
							if (m) throw s
						}
					}
				},
				D = function(i, l, m, s) {
					var o, T, h, y, P, L, F, q, _e, be, Se, Me = Y(),
						ue, Q;
					if (typeof i == "string") {
						var pe = Zt(i);
						if (pe === null) {
							var Ee;
							try {
								Ee = document.querySelector(i)
							} catch (Lo) {
								x('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(i, '"'), 3586)
							}
							Ee === null && x('Unable to find a container for "'.concat(i, '"'), 3585), ue = Ee
						} else {
							var xe, z = g.widgetMap.get(pe),
								Mt = (xe = z == null ? void 0 : z.wrapper.parentElement) !== null && xe !== void 0 ? xe : null;
							if (Mt !== null && za(m, z)) ue = Mt, Q = {
								widget: z,
								widgetId: pe
							};
							else return z !== void 0 && Ue(pe, z, s), M(m, z, l), X(pe)
						}
					} else w(i, HTMLElement) ? ue = i : x('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
					if (Q === void 0) {
						var Le = Zt(ue);
						if (Le !== null) {
							var ve = g.widgetMap.get(Le);
							if (ve !== void 0 && za(m, ve) && ve.wrapper.parentElement === ue) Q = {
								widget: ve,
								widgetId: Le
							};
							else return ve && Ue(Le, ve, s), M(m, ve, l), X(Le)
						}
					}
					var ot = an();
					if (ot === void 0 || ot === "") return x("Turnstile cannot determine its page location", 3607);
					var Xe = Mo(ue);
					if (Xe !== void 0) {
						var _ = Object.assign(Xe, l),
							Be = _.action,
							Ye = _.cData,
							dr = _.chlPageData,
							Re = _.sitekey;
						_.theme = (o = _.theme) !== null && o !== void 0 ? o : Ht.Auto, _.retry = (T = _.retry) !== null && T !== void 0 ? T : Wt.Auto, _.execution = (h = _.execution) !== null && h !== void 0 ? h : gt.Render, _.appearance = (y = _.appearance) !== null && y !== void 0 ? y : re.Always, _["retry-interval"] = qa(_["retry-interval"], kn), _["expiry-interval"] = qa(_["expiry-interval"], (Yn - Qn) * 1e3), _.size = (P = _.size) !== null && P !== void 0 ? P : Z.Normal;
						var sr = _.callback,
							ut = _["expired-callback"],
							fr = _["timeout-callback"],
							Lt = _["after-interactive-callback"],
							lt = _["before-interactive-callback"],
							ct = _["error-callback"],
							Nt = _["unsupported-callback"];
						typeof Re != "string" && x('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof Re == "undefined" ? "undefined" : H(Re), '"'), 3588), Pa(Re) || x('Invalid input for parameter "sitekey", got "'.concat(Re, '"'), 3589), Jr(_.size) || x('Invalid type for parameter "size", expected normal|compact, got "'.concat(String(_.size), '" ').concat(H(_.size)), 3590), Hr(_.theme) || x('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(String(_.theme), '" ').concat(H(_.theme)), 3591), Ur(_.retry) || x('Invalid type for parameter "retry", expected never|auto, got "'.concat(String(_.retry), '" ').concat(H(_.retry)), 3592), (_.language === void 0 || _.language === "") && (_.language = "auto"), Kr(_.language) || (R('Invalid language value: "'.concat(_.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), _.language = "auto"), Gr(_.appearance) || x('Unknown appearance value: "'.concat(String(_.appearance), ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), Xr(_.execution) || x('Unknown execution value: "'.concat(String(_.execution), ", expected either: 'render' or 'execute'."), 3601), Wr(_["retry-interval"]) || x('Invalid retry-interval value: "'.concat(_["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), Vr(_["expiry-interval"]) || x('Invalid expiry-interval value: "'.concat(_["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
						var Ie = (L = _["refresh-expired"]) !== null && L !== void 0 ? L : et.Auto;
						jr(Ie) ? _["refresh-expired"] = Ie : x('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(String(Ie), '" ').concat(typeof Ie == "undefined" ? "undefined" : H(Ie)), 3603);
						var we = (F = _["refresh-timeout"]) !== null && F !== void 0 ? F : mt.Auto;
						zr(we) ? _["refresh-timeout"] = we : x('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(String(we), '" ').concat(typeof we == "undefined" ? "undefined" : H(we)), 3603), Br(Be) || x('Invalid input for optional parameter "action", got "'.concat(Be, '"'), 3604), qr(Ye) || x('Invalid input for optional parameter "cData", got "'.concat(Ye, '"'), 3605);
						var le = document.createElement("iframe"),
							dt = document.createElement("div"),
							ce = dt.attachShadow({
								mode: "closed"
							}),
							me = b(),
							st = X(me),
							ge = [],
							qe = _.execution === gt.Render;
						qe && ge.push(ht.Execute);
						var Pt = nt(g.gcs);
						wt(Pt, s), g.lastWidgetIdx++;
						var ft = {},
							Qe = pr(Je({
								action: Be,
								assetCtxCallback: _._acCb,
								autoFeedbackSent: !1,
								cData: Ye,
								cbAfterInteractive: Lt,
								cbBeforeInteractive: lt,
								cbError: ct,
								cbExpired: ut,
								cbSuccess: sr,
								cbTimeout: fr,
								cbUnsupported: Nt,
								chlPageData: dr,
								feedbackOpen: !1,
								gcs: Pt,
								idx: g.lastWidgetIdx,
								isComplete: !1,
								isExecuted: qe,
								isExecuting: qe,
								isExpired: !1,
								isFailed: !1,
								isInitialized: !1,
								isOverrunning: !1,
								isResetting: !1,
								isStale: !1,
								msgQueue: ge,
								params: _,
								rcV: Ce,
								renderSource: m,
								responseElementsBuilt: !1,
								shadow: ce,
								watchcat: {
									lastAckedSeq: 0,
									missingWidgetWarning: !1,
									overrunBeginSeq: 0,
									seq: 0
								}
							}, ft), {
								widgetInitStartTimeTsMs: 0,
								widgetParamsStartTimeTsMs: 0,
								widgetRenderEndTimeTsMs: 0,
								widgetRenderStartTimeTsMs: Me,
								wrapper: dt
							});
						g.widgetMap.set(me, Qe), Pr(g);
						var Ne = g.widgetMap.get(me);
						Ne === void 0 && x("Turnstile Initialization Error ", 3606), Ne.chlPageData !== void 0 && Ne.chlPageData !== "" && ln(), le.style.display = "none", le.style.border = "none", le.style.overflow = "hidden";
						var pn = kr(me, Re, _, Ce, !1, "g", ee.New, g.scriptUrlParsed, Yr(Ne));
						Ne.iframeOrigin = rt(pn), le.setAttribute("src", pn), Ga(le, Ne);
						var vn = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
						return G((q = (Se = document.featurePolicy) === null || Se === void 0 || (be = Se.features) === null || be === void 0 ? void 0 : be.call(Se)) !== null && q !== void 0 ? q : [], vr) && vn.push(vr), le.setAttribute("allow", vn.join("; ")), le.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), le.id = st, le.tabIndex = (_e = _.tabindex) !== null && _e !== void 0 ? _e : 0, le.title = "Widget containing a Cloudflare security challenge", ce.appendChild(le), Za(Ne, st), Q && O(Q.widgetId, Q.widget), ue.appendChild(dt), Ne.widgetRenderEndTimeTsMs = Y(), st
					}
				},
				I = function(i, l) {
					return D(i, l, "explicit", ke(sa, g))
				},
				J = function() {
					var i = [Tn, An];
					g.isRecaptchaCompatibilityMode && i.push(Sn);
					var l = ke(ya, g);
					document.querySelectorAll(i.join(", ")).forEach(function(m) {
						D(m, void 0, "implicit", l)
					})
				},
				j = function() {
					var i, l = -1,
						m = !0,
						s = !1,
						o = void 0;
					try {
						for (var T = g.widgetMap[Symbol.iterator](), h; !(m = (h = T.next()).done); m = !0) {
							var y = $e(h.value, 2),
								P = y[0],
								L = y[1];
							l < L.idx && (i = P, l = L.idx)
						}
					} catch (F) {
						s = !0, o = F
					} finally {
						try {
							!m && T.return != null && T.return()
						} finally {
							if (s) throw o
						}
					}
					return l === -1 && x("Could not find widget", 43778), i
				},
				B = ko(),
				U = new WeakMap,
				ie = new WeakMap,
				W = new WeakSet,
				fe = new WeakSet,
				ye = function(i) {
					var l = Reflect.get(i, "source");
					if (l === K) {
						var m = Reflect.get(i, "widgetId");
						if (!(typeof m != "string" || m === "" || !g.widgetMap.has(m))) {
							var s = X(m),
								o = g.widgetMap.get(m);
							if (o !== void 0) switch (i.event) {
								case "init": {
									o.widgetInitStartTimeTsMs = Y(), o.kills = i.kills, Xt(o) && (o.gcs.length = 0);
									var T = o.shadow.querySelector("#".concat(s));
									w(T, HTMLElement) || x("Cannot initialize Widget, Element not found (#".concat(s, ")."), 3074), o.mode = i.mode, o.nextRcV = i.nextRcV, o.mode === he.Invisible && o.params["refresh-expired"] === et.Manual && R("refresh-expired=manual is impossible in invisible mode, consider using '".concat(et.Auto, "' or '").concat(et.Never, ".'")), o.mode !== he.Managed && o.params["refresh-timeout"] !== mt.Auto && R("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), o.params.appearance === re.Always || o.isExecuting && o.params.appearance === re.Execute ? er(T, o) : Xa(T), T.style.display = "";
									var h = Ke(o, s);
									h || x("Received state for an unknown widget: ".concat(i.widgetId), 3078), se(h, {
										event: "init",
										source: K,
										widgetId: i.widgetId
									}, o.iframeOrigin);
									break
								}
								case "translationInit": {
									var y = o.shadow.querySelector("#".concat(s));
									w(y, HTMLElement) || x("Cannot initialize Widget, Element not found (#".concat(s, ")."), 3074);
									var P = new Map;
									o.displayLanguage = i.displayLanguage, o.displayRtl = i.displayRtl, Object.keys(i.translationData).forEach(function(Qe) {
										P.set(Qe, i.translationData[Qe])
									}), wo(y, P);
									break
								}
								case "languageUnsupported": {
									R("Language ".concat(o.params.language, " is not supported, falling back to: ").concat(i.fallback, ".")), o.displayLanguage = i.fallback;
									break
								}
								case "reject": {
									var L = o.shadow.querySelector("#".concat(s));
									o.isExecuting = !1, w(L, HTMLElement) || x("Cannot initialize Widget, Element not found (#".concat(s, ")."), 3075);
									var F = Reflect.get(i, "reason");
									if (F === "unsupported_browser") {
										var q;
										(q = o.cbUnsupported) === null || q === void 0 || q.call(o)
									}
									break
								}
								case "food": {
									i.seq > o.watchcat.lastAckedSeq && (o.watchcat.lastAckedSeq = i.seq);
									break
								}
								case "overrunBegin": {
									o.isOverrunning = !0, o.watchcat.overrunBeginSeq = o.watchcat.lastAckedSeq;
									break
								}
								case "overrunEnd": {
									o.isOverrunning = !1;
									break
								}
								case "complete": {
									if (v(o, Ce, i.widgetId), o.response = i.token, i.aC !== void 0 && i.aC !== "") {
										var _e;
										(_e = o.assetCtxCallback) === null || _e === void 0 || _e.call(o, i.aC)
									}
									if (i.scs !== void 0 && i.scs !== "" && !We("scs", o) && (o.scs = i.scs, o.params["session-continuity-persist"] === !0 && !We("scs_persist", o))) {
										var be = o.params.sitekey;
										if (be !== null && be !== "") {
											var Se = "".concat(mr).concat(be);
											try {
												localStorage.setItem(Se, i.scs)
											} catch (Qe) {}
										}
									}
									i.sToken !== void 0 && i.sToken !== "" ? n(o, i.widgetId, s, i.token, i.sToken, i.chlId) : c(o, s, !1);
									break
								}
								case "fail": {
									var Me = Reflect.get(i, "rcV");
									if (typeof Me == "string" && Me !== "" && v(o, Me, m), i.cfChlOut !== void 0 && i.cfChlOut !== "" && (o.cfChlOut = i.cfChlOut), i.cfChlOutS !== void 0 && i.cfChlOutS !== "" && (o.cfChlOutS = i.cfChlOutS), i.code !== void 0 && i.code !== 0 && (o.errorCode = i.code), i.aC !== void 0 && i.aC !== "") {
										var ue;
										(ue = o.assetCtxCallback) === null || ue === void 0 || ue.call(o, i.aC)
									}
									o.isExecuting = !1, o.isFailed = !0, o.isInitialized = !0, i.frMd !== void 0 && i.frMd !== "" && (o.frMd = i.frMd), nn(o, s);
									var Q = o.cbError,
										pe = i.code === jt || i.code === zt,
										Ee = i.code !== $n;
									if (pe) {
										var xe = Ke(o, s);
										xe && se(xe, {
											event: "forceFail",
											source: K,
											widgetId: i.widgetId
										}, o.iframeOrigin)
									}
									if (Q !== void 0) {
										var z;
										Q(String((z = i.code) !== null && z !== void 0 ? z : ea)) === !0 ? Ee && o.params.retry === Wt.Auto && !o.isResetting && a(o, s, pe) : (i.code !== void 0 && i.code !== 0 && R("Error: ".concat(i.code, ".")), Ee && a(o, s, pe))
									} else i.code !== void 0 && i.code !== 0 ? (Ee && a(o, s, pe), x("Error: ".concat(i.code), 3076)) : a(o, s, !1);
									break
								}
								case "feedbackInit": {
									i.cfChlOut !== void 0 && i.cfChlOut !== "" && (o.cfChlOut = i.cfChlOut), i.cfChlOutS !== void 0 && i.cfChlOutS !== "" && (o.cfChlOutS = i.cfChlOutS);
									var Mt = lr(o, s).targetWindow;
									if (Mt) {
										R("A feedback report form is already opened for this widget.");
										return
									}
									if (o.autoFeedbackSent !== !0 && !We("feedback-report-auto-submit", o) ? U.set(o, {
											feedbackOrigin: i.feedbackOrigin,
											rayId: i.rayId
										}) : U.delete(o), o.feedbackOpen = !0, o.retryTimeout !== void 0) {
										var Le, ve;
										clearTimeout(o.retryTimeout), o.retryTimeout = void 0, (ve = (Le = o).pendingRetry) !== null && ve !== void 0 || (Le.pendingRetry = {
											crashed: !1
										})
									}
									Aa(), window.postMessage({
										event: "feedbackOpen",
										source: K,
										widgetId: i.widgetId
									}, "*"), Nr(s, o, i.feedbackOrigin, g.scriptUrlParsed, function() {
										d(o, s, i.widgetId)
									});
									break
								}
								case "feedbackActivity": {
									W.add(o), t(o);
									break
								}
								case "requestFeedbackData": {
									fe.add(o), r(o);
									var ot = Ke(o, s);
									w(ot, HTMLElement) || x("Received state for an unknown widget: #".concat(s, " / ").concat(i.widgetId), 3078), se(ot, {
										event: "requestTurnstileResults",
										source: K,
										widgetId: i.widgetId
									}, o.iframeOrigin), t(o);
									break
								}
								case "turnstileResults": {
									var Xe, _, Be, Ye = lr(o, s),
										dr = Ye.targetOrigin,
										Re = Ye.targetWindow;
									if (!Re) break;
									Cr(Re, {
										cfChlOut: (Xe = o.cfChlOut) !== null && Xe !== void 0 ? Xe : i.cfChlOut,
										cfChlOutS: (_ = o.cfChlOutS) !== null && _ !== void 0 ? _ : i.cfChlOutS,
										errorCode: o.errorCode,
										event: "feedbackData",
										frMd: (Be = o.frMd) !== null && Be !== void 0 ? Be : i.frMd,
										mode: i.mode,
										rayId: i.rayId,
										rcV: i.rcV,
										sitekey: i.sitekey,
										source: K,
										widgetId: i.widgetId
									}, dr);
									break
								}
								case "closeFeedbackReportIframe": {
									var sr = lr(o, s).targetWindow;
									sr || x("Received state for an unknown widget: ".concat(i.widgetId), 3078), Rt("".concat(s, "-fr")), at(o), d(o, s, i.widgetId);
									break
								}
								case "tokenExpired": {
									var ut, fr = i.token;
									o.isExpired = !0, (ut = o.cbExpired) === null || ut === void 0 || ut.call(o, fr), o.params["refresh-expired"] === et.Auto && !o.isResetting && S(ee.AutoExpire, s);
									break
								}
								case "interactiveTimeout": {
									v(o, Ce, i.widgetId), nn(o, s);
									var Lt = o.cbTimeout;
									if (Lt ? Lt() : o.params["refresh-timeout"] === mt.Never && !o.isResetting && R("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), o.params["refresh-timeout"] === mt.Auto && !o.isResetting) {
										var lt = o.cbAfterInteractive;
										lt == null || lt(), S(ee.AutoTimeout, s)
									}
									break
								}
								case "refreshRequest": {
									v(o, Ce, i.widgetId), Rt(s), at(o), S(ee.ManualRefresh, s);
									break
								}
								case "reloadRequest": {
									v(o, i.nextRcV, i.widgetId), S(vo(i.trigger) ? i.trigger : ee.Api, s);
									break
								}
								case "reloadApiJsRequest": {
									if (We("reload", o)) {
										kt(i.widgetId);
										break
									}
									if (cr !== void 0) {
										kt(i.widgetId);
										break
									}
									if (yo()) {
										kt(i.widgetId);
										break
									}
									ri() ? (g.apiJsMismatchReloadAttempts++, _o(), bo(i.widgetId)) : kt(i.widgetId);
									break
								}
								case "interactiveBegin": {
									var ct, Nt = o.shadow.querySelector("#".concat(s));
									w(Nt, HTMLElement) || x("Cannot layout widget, Element not found (#".concat(s, ")."), 3076), (ct = o.cbBeforeInteractive) === null || ct === void 0 || ct.call(o), o.params.appearance === re.InteractionOnly && er(Nt, o);
									break
								}
								case "interactiveEnd": {
									var Ie;
									(Ie = o.cbAfterInteractive) === null || Ie === void 0 || Ie.call(o);
									break
								}
								case "widgetStale": {
									o.isStale = !0;
									break
								}
								case "requestExtraParams": {
									o.widgetParamsStartTimeTsMs = Y();
									var we = Ke(o, s);
									we || x("Received state for an unknown widget: ".concat(i.widgetId), 3078), o.isResetting = !1;
									var le = {},
										dt = Y(),
										ce = Ua(o, we),
										me = xo(o) ? jn(o.wrapper) : void 0,
										st = {
											"d.cT": f(),
											"ht.atrs": p(document.body.parentElement),
											"pg.ref": document.referrer,
											pi: {
												ffp: Vn(o.wrapper),
												ii: window.self !== window.top,
												lH: window.location.href,
												mL: document.querySelectorAll("meta").length,
												pac: me == null ? void 0 : me.pac,
												pad: me == null ? void 0 : me.pad,
												pfp: Xn(document, Mn, Ln, rn),
												sL: document.scripts.length,
												sR: o.wrapper.shadowRoot === null,
												ssL: po(document, rn),
												t: "".concat(document.title.length, "|").concat(Ir(document.title)),
												tL: Gn(document, rn),
												vDa: ce.appearance,
												vDeh: ce.expectedHidden,
												vDhp: ce.hostParent,
												vDhr: ce.expectedHiddenReason,
												vDie: ce.isExecuting,
												vDmd: ce.mode,
												vDmt: ce.mount,
												vDrs: ce.reasons,
												vDuh: ce.unexpectedHidden,
												vDvp: ce.viewport,
												wp: Wn(o.wrapper),
												xp: Un(o.wrapper).slice(0, Nn)
											},
											"w.iW": window.innerWidth
										},
										ge = o.scs;
									if ((ge === void 0 || ge === "") && o.params["session-continuity-persist"] === !0 && !We("scs_persist", o)) {
										var qe = o.params.sitekey;
										if (qe !== null && qe !== "") {
											var Pt = "".concat(mr).concat(qe);
											try {
												var ft;
												ge = (ft = localStorage.getItem(Pt)) !== null && ft !== void 0 ? ft : void 0
											} catch (Qe) {}
										}
									}
									ge !== void 0 && ge !== "" && ge.length > Pn && (ge = void 0), se(we, Je({
										action: o.action,
										apiJsMismatchReloadAttempts: g.apiJsMismatchReloadAttempts,
										apiJsMismatchReloadCompletedCount: g.apiJsMismatchReloadCompletedCount,
										apiJsResourceTiming: B === void 0 ? void 0 : mo(B),
										appearance: o.params.appearance,
										au: g.scriptUrl,
										cData: o.cData,
										ch: "128f79a146dd",
										chlPageData: o.chlPageData,
										cs: At(o),
										event: "extraParams",
										execution: o.params.execution,
										"expiry-interval": o.params["expiry-interval"],
										language: o.params.language,
										rcV: o.rcV,
										"refresh-expired": o.params["refresh-expired"],
										"refresh-timeout": o.params["refresh-timeout"],
										retry: o.params.retry,
										"retry-interval": o.params["retry-interval"],
										scs: ge,
										source: K,
										timeExtraParamsMs: Y() - o.widgetRenderStartTimeTsMs,
										timeInitMs: o.widgetInitStartTimeTsMs - o.widgetRenderEndTimeTsMs,
										timeLoadInitMs: Y() - g.turnstileLoadInitTimeTsMs,
										timeParamsMs: o.widgetParamsStartTimeTsMs - o.widgetInitStartTimeTsMs,
										timeRenderMs: o.widgetRenderEndTimeTsMs - o.widgetRenderStartTimeTsMs,
										timeTiefMs: Y() - dt,
										upgradeAttempts: g.upgradeAttempts,
										upgradeCompletedCount: g.upgradeCompletedCount,
										url: an(),
										wPr: st,
										widgetId: i.widgetId
									}, le), o.iframeOrigin), A(o, i.widgetId, we), o.isInitialized = !0;
									break
								}
								default:
									break
							}
						}
					}
				},
				Ve = function(i) {
					if (Ro(i)) {
						var l = i.data;
						if (!Io(i)) {
							R("Ignored message from wrong origin: ".concat(i.origin, "."));
							return
						}
						if (!(l.widgetId === "" || !g.widgetMap.has(l.widgetId))) {
							var m = X(l.widgetId),
								s = g.widgetMap.get(l.widgetId);
							if (s !== void 0) {
								if (!Co(i, s, m)) {
									R("Ignored message from unexpected source for event: ".concat(l.event, "."));
									return
								}
								ye(l)
							}
						}
					}
				};
			g.msgHandler = Ve, g.internalMsgHandler = ye, window.addEventListener("message", Ve);

			function oe(C) {
				var i;
				if (typeof C == "string") {
					var l = Zt(C);
					if (l !== null) return l;
					try {
						var m = document.querySelector(C);
						return m === null ? null : oe(m)
					} catch (o) {
						return null
					}
				}
				if (w(C, Element)) return Zt(C);
				var s = !!C;
				return s || g.widgetMap.size === 0 ? null : (i = j()) !== null && i !== void 0 ? i : null
			}
			var Ge = {},
				ni = {
					showFeedback: function(i) {
						var l = oe(i);
						if (l !== null) {
							var m = X(l),
								s = g.widgetMap.get(l);
							s !== void 0 && Nr(m, s, ta.Custom, g.scriptUrlParsed)
						}
					}
				},
				fn = pr(Je({}, Ge), {
					_private: ni,
					execute: function(i, l) {
						var m = ke(fa, g),
							s = !1,
							o = oe(i);
						if (o === null) {
							var T;
							l === void 0 && x("Please provide 2 parameters to execute: container and parameters", 43521);
							var h = D(i, l, "explicit", m);
							s = !0, h == null && x("Failed to render widget", 43522), o = (T = Et(h)) !== null && T !== void 0 ? T : oe(i), o === null && x("Failed to render widget", 43522)
						}
						var y = g.widgetMap.get(o);
						if (y !== void 0) {
							var P = s ? !1 : Tt(y, m);
							E(y, l);
							var L = X(o);
							if (y.isExecuting) {
								R("Call to execute() on a widget that is already executing (".concat(L, "), consider using reset() before execute().")), P && Yt(o, y);
								return
							}
							if (y.isExecuting = !0, y.response !== void 0 && y.response !== "") {
								var F;
								y.isExecuting = !1, R("Call to execute() on a widget that was already executed (".concat(L, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), P && Yt(o, y), (F = y.cbSuccess) === null || F === void 0 || F.call(y, y.response, !1);
								return
							}
							y.isExpired && R("Call to execute on a expired-widget (".concat(L, "), consider using reset() before.")), y.isStale && (S(ee.StaleExecute, L), y.isExecuting = !0), (y.isResetting || !y.isInitialized) && y.msgQueue.push(ht.Execute), y.isExecuted = !0;
							var q = Ke(y, L);
							if (q || (y.isExecuting = !1, x("Widget ".concat(L, " to execute was not found"), 43522)), y.isResetting || !y.isInitialized) return;
							if (y.msgQueue.length > 0) {
								A(y, o, q), y.params.appearance === re.Execute && er(q, y);
								return
							}
							y.params.appearance === re.Execute && er(q, y), N(y) && se(q, {
								cs: At(y),
								event: "execute",
								source: K,
								widgetId: o
							}, y.iframeOrigin)
						}
					},
					getResponse: function(i) {
						var l = ke(ma, g);
						if (typeof i == "undefined") {
							var m = j();
							if (m !== void 0) {
								var s = g.widgetMap.get(m);
								return s !== void 0 && Ue(m, s, l), (s == null ? void 0 : s.isExpired) === !0 && R("Call to getResponse on a widget that expired, consider refreshing the widget."), s == null ? void 0 : s.response
							}
							x("Could not find a widget", 43794)
						}
						var o = oe(i);
						o === null && x("Could not find widget for provided container", 43778);
						var T = g.widgetMap.get(o);
						return T && Ue(o, T, l), T == null ? void 0 : T.response
					},
					isExpired: function(i) {
						var l, m = ke(ga, g);
						if (typeof i == "undefined") {
							var s = j();
							if (s !== void 0) {
								var o, T = g.widgetMap.get(s);
								return T !== void 0 && Ue(s, T, m), (o = T == null ? void 0 : T.isExpired) !== null && o !== void 0 ? o : !1
							}
							x("Could not find a widget", 43794)
						}
						var h = oe(i);
						h === null && x("Could not find widget for provided container", 43778);
						var y = g.widgetMap.get(h);
						return y && Ue(h, y, m), (l = y == null ? void 0 : y.isExpired) !== null && l !== void 0 ? l : !1
					},
					ready: function(i) {
						g.scriptWasLoadedAsync && (R("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), x("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof i != "function" && x('turnstile.ready() expected a "function" argument, got "'.concat(typeof i == "undefined" ? "undefined" : H(i), '"'), 3841);
						var l = ke(ha, g);
						wt(g.gcs, l);
						var m = !0,
							s = !1,
							o = void 0;
						try {
							for (var T = g.widgetMap[Symbol.iterator](), h; !(m = (h = T.next()).done); m = !0) {
								var y = $e(h.value, 2),
									P = y[0],
									L = y[1];
								Ue(P, L, l)
							}
						} catch (F) {
							s = !0, o = F
						} finally {
							try {
								!m && T.return != null && T.return()
							} finally {
								if (s) throw o
							}
						}
						if (g.isReady) {
							i();
							return
						}
						sn.push(i)
					},
					remove: ae,
					render: I,
					reset: k
				});
			return Object.defineProperty(fn, Ya, {
				configurable: !0,
				enumerable: !1,
				value: {
					clearPendingApiJsReloadRequest: function() {
						cn()
					},
					rearmTimedUpgrade: function() {
						dn()
					},
					rejectPendingApiJsReloadRequest: function() {
						$a()
					},
					reloadAfterUpgrade: function() {
						te()
					}
				}
			}), {
				runImplicitRender: J,
				turnstile: fn
			}
		})(),
		Oo = function() {
			ti.runImplicitRender()
		},
		rr = ti.turnstile;

	function Mo(e) {
		var t, r, n = e.getAttribute("data-sitekey"),
			a = {
				sitekey: n
			},
			u = e.getAttribute("data-tabindex");
		u !== null && u !== "" && (a.tabindex = Math.trunc(Number(u)));
		var d = e.getAttribute("data-theme");
		d !== null && d !== "" && (Hr(d) ? a.theme = d : R('Unknown data-theme value: "'.concat(d, '".')));
		var c = e.getAttribute("data-size");
		if (c !== null && c !== "" && (Jr(c) ? a.size = c : R('Unknown data-size value: "'.concat(c, '".'))), 0) var p;
		var f = e.getAttribute("data-action");
		typeof f == "string" && (a.action = f);
		var v = e.getAttribute("data-cdata");
		typeof v == "string" && (a.cData = v);
		var b = e.getAttribute("data-retry");
		b !== null && b !== "" && (Ur(b) ? a.retry = b : R('Invalid data-retry value: "'.concat(b, ", expected either 'never' or 'auto'\".")));
		var A = e.getAttribute("data-retry-interval");
		if (A !== null && A !== "") {
			var N = Math.trunc(Number(A));
			Wr(N) ? a["retry-interval"] = N : R('Invalid data-retry-interval value: "'.concat(A, ', expected an integer value > 0 and < 900000".'))
		}
		var E = e.getAttribute("data-expiry-interval");
		if (E !== null && E !== "") {
			var M = Math.trunc(Number(E));
			Vr(M) ? a["expiry-interval"] = M : R('Invalid data-expiry-interval value: "'.concat(M, ', expected an integer value > 0 and < 360000".'))
		}
		var k = e.getAttribute("data-refresh-expired");
		k !== null && k !== "" && (jr(k) ? a["refresh-expired"] = k : R('Unknown data-refresh-expired value: "'.concat(k, ", expected either: 'never', 'auto' or 'manual'.")));
		var S = e.getAttribute("data-refresh-timeout");
		S !== null && S !== "" && (zr(S) ? a["refresh-timeout"] = S : R('Unknown data-refresh-timeout value: "'.concat(S, ", expected either: 'never', 'auto' or 'manual'.")));
		var O = e.getAttribute("data-language");
		O !== null && O !== "" && (Kr(O) ? a.language = O : R('Invalid data-language value: "'.concat(O, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function ae(W) {
			var fe = e.getAttribute(W);
			if (!(fe === null || fe === "")) {
				var ye = un(fe);
				return ye === void 0 ? void 0 : function() {
					for (var Ve = arguments.length, oe = new Array(Ve), Ge = 0; Ge < Ve; Ge++) oe[Ge] = arguments[Ge];
					return ye.apply(void 0, de(oe))
				}
			}
		}
		var te = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		te.forEach(function(W) {
			Object.assign(a, $({}, W, ae("data-".concat(W))))
		}), a["feedback-enabled"] = (t = tr(e.getAttribute("data-feedback-enabled"), !0, function(W) {
			return 'Invalid data-feedback-enabled value: "'.concat(W, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && t !== void 0 ? t : !0, a["response-field"] = (r = tr(e.getAttribute("data-response-field"), !0, function(W) {
			return 'Invalid data-response-field value: "'.concat(W, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && r !== void 0 ? r : !0;
		var D = e.getAttribute("data-response-field-name");
		D !== null && D !== "" && (a["response-field-name"] = D);
		var I = e.getAttribute("data-execution");
		I !== null && I !== "" && (Xr(I) ? a.execution = I : R('Unknown data-execution value: "'.concat(I, ", expected either: 'render' or 'execute'.")));
		var J = e.getAttribute("data-appearance");
		J !== null && J !== "" && (Gr(J) ? a.appearance = J : R('Unknown data-appearance value: "'.concat(J, ", expected either: 'always', 'execute', or 'interaction-only'.")));
		var j = e.getAttribute("data-offlabel-show-privacy"),
			B = tr(j, void 0, function(W) {
				return 'Invalid data-offlabel-show-privacy value: "'.concat(W, '", expected "true" or "false".')
			});
		typeof B == "boolean" && (a["offlabel-show-privacy"] = B);
		var U = e.getAttribute("data-offlabel-show-help"),
			ie = tr(U, void 0, function(W) {
				return 'Invalid data-offlabel-show-help value: "'.concat(W, '", expected "true" or "false".')
			});
		return typeof ie == "boolean" && (a["offlabel-show-help"] = ie), a
	}

	function ri() {
		if (ln(), Qa()) return !1;
		var e = La(window.turnstile, g);
		return e ? !0 : (dn(), !1)
	}
	ze = !1, V = ca(), g.scriptWasLoadedAsync = (nr = V == null ? void 0 : V.loadedAsync) !== null && nr !== void 0 ? nr : !1, g.scriptUrl = (ar = V == null ? void 0 : V.src) !== null && ar !== void 0 ? ar : "undefined", g.scriptUrlParsed = V == null ? void 0 : V.url, (V == null ? void 0 : V.params) !== void 0 && V.params !== null && (it = V.params.get("compat"), (it == null ? void 0 : it.toLowerCase()) === "recaptcha" ? typeof window.grecaptcha == "undefined" ? (R("Compatibility layer enabled."), g.isRecaptchaCompatibilityMode = !0, window.grecaptcha = rr) : R("grecaptcha is already defined. The compatibility layer will not be enabled.") : it !== null && R('Unknown value for api.js?compat: "'.concat(it, '", ignoring.')), V.params.forEach(function(e, t) {
		G(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || R('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), ze = V.params.get("_upgrade") === "true", Oe = V.params.get("onload"), Oe !== null && Oe !== "" && !ze && setTimeout(function() {
		var e = un(Oe);
		e === void 0 ? (R("Unable to find onload callback '".concat(Oe, "' immediately after loading, expected 'function', got '").concat(H(on(Oe)), "'.")), setTimeout(function() {
			var t = un(Oe);
			t === void 0 ? R("Unable to find onload callback '".concat(Oe, "' after 1 second, expected 'function', got '").concat(H(on(Oe)), "'.")) : t()
		}, 1e3)) : e()
	}, 0)), Ct = "turnstile" in window, Ae = Ct ? ja(window.turnstile) : void 0, ir = Ct && ze ? Na(window.turnstile, g, function() {
		var e;
		window.turnstile = rr, (e = ja(rr)) === null || e === void 0 || e.reloadAfterUpgrade(), Pr(g)
	}) : !1, ir && (Ae == null || Ae.clearPendingApiJsReloadRequest()), Ct && ze && !ir ? (R("Turnstile upgrade state was missing. Keeping the existing Turnstile instance."), Ae == null || Ae.rejectPendingApiJsReloadRequest(), Ae == null || Ae.rearmTimedUpgrade()) : Ct && !ze ? R("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (ir || (window.turnstile = rr), ze || ((V == null || (or = V.params) === null || or === void 0 ? void 0 : or.get("render")) !== "explicit" && sn.push(Oo), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Ka, 0) : window.addEventListener("DOMContentLoaded", Ka)), dn());
	var nr, ar, ze, V, it, Oe, Ct, Ae, ir, or;
})();