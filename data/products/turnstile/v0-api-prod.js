"use strict";
(function() {
	function cn(e, t, r, n, a, u, c) {
		try {
			var l = e[u](c),
				p = l.value
		} catch (f) {
			r(f);
			return
		}
		l.done ? t(p) : Promise.resolve(p).then(n, a)
	}

	function dn(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise(function(n, a) {
				var u = e.apply(t, r);

				function c(p) {
					cn(u, n, a, c, l, "next", p)
				}

				function l(p) {
					cn(u, n, a, c, l, "throw", p)
				}
				c(void 0)
			})
		}
	}

	function ee(e, t, r) {
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

	function Ue(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = arguments[t] != null ? arguments[t] : {},
				n = Object.keys(r);
			typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
				return Object.getOwnPropertyDescriptor(r, a).enumerable
			}))), n.forEach(function(a) {
				ee(e, a, r[a])
			})
		}
		return e
	}

	function Qa(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter(function(a) {
				return Object.getOwnPropertyDescriptor(e, a).enumerable
			})), r.push.apply(r, n)
		}
		return r
	}

	function lr(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qa(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
		}), e
	}

	function sn(e) {
		if (Array.isArray(e)) return e
	}

	function fn(e, t) {
		var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (r != null) {
			var n = [],
				a = !0,
				u = !1,
				c, l;
			try {
				for (r = r.call(e); !(a = (c = r.next()).done) && (n.push(c.value), !(t && n.length === t)); a = !0);
			} catch (p) {
				u = !0, l = p
			} finally {
				try {
					!a && r.return != null && r.return()
				} finally {
					if (u) throw l
				}
			}
			return n
		}
	}

	function pn() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function ot(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function kt(e, t) {
		if (e) {
			if (typeof e == "string") return ot(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ot(e, t)
		}
	}

	function ze(e, t) {
		return sn(e) || fn(e, t) || kt(e, t) || pn()
	}

	function vn(e) {
		if (Array.isArray(e)) return ot(e)
	}

	function mn(e) {
		if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
	}

	function gn() {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function ce(e) {
		return vn(e) || mn(e) || kt(e) || gn()
	}

	function U(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function hn(e, t) {
		var r, n, a, u = {
				label: 0,
				sent: function() {
					if (a[0] & 1) throw a[1];
					return a[1]
				},
				trys: [],
				ops: []
			},
			c = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype),
			l = Object.defineProperty;
		return l(c, "next", {
			value: p(0)
		}), l(c, "throw", {
			value: p(1)
		}), l(c, "return", {
			value: p(2)
		}), typeof Symbol == "function" && l(c, Symbol.iterator, {
			value: function() {
				return this
			}
		}), c;

		function p(m) {
			return function(E) {
				return f([m, E])
			}
		}

		function f(m) {
			if (r) throw new TypeError("Generator is already executing.");
			for (; c && (c = 0, m[0] && (u = 0)), u;) try {
				if (r = 1, n && (a = m[0] & 2 ? n.return : m[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, m[1])).done) return a;
				switch (n = 0, a && (m = [m[0] & 2, a.value]), m[0]) {
					case 0:
					case 1:
						a = m;
						break;
					case 4:
						return u.label++, {
							value: m[1],
							done: !1
						};
					case 5:
						u.label++, n = m[1], m = [0];
						continue;
					case 7:
						m = u.ops.pop(), u.trys.pop();
						continue;
					default:
						if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (m[0] === 6 || m[0] === 2)) {
							u = 0;
							continue
						}
						if (m[0] === 3 && (!a || m[1] > a[0] && m[1] < a[3])) {
							u.label = m[1];
							break
						}
						if (m[0] === 6 && u.label < a[1]) {
							u.label = a[1], a = m;
							break
						}
						if (a && u.label < a[2]) {
							u.label = a[2], u.ops.push(m);
							break
						}
						a[2] && u.ops.pop(), u.trys.pop();
						continue
				}
				m = t.call(e, u)
			} catch (E) {
				m = [6, E], n = 0
			} finally {
				r = a = 0
			}
			if (m[0] & 5) throw m[1];
			return {
				value: m[0] ? m[1] : void 0,
				done: !0
			}
		}
	}
	var Mt = "cf-chl-widget-",
		J = "cloudflare-challenge",
		yn = ".cf-turnstile",
		_n = ".cf-challenge",
		bn = ".g-recaptcha",
		En = "cf-turnstile-response",
		xn = "g-recaptcha-response",
		Ke = 3e4,
		ut = 180 * 1e3,
		wn = 1e4,
		Tn = 8e3,
		An = 3600 * 1e3,
		cr = "private-token",
		Sn = 3,
		Rn = 500,
		In = 500,
		Ae = "",
		dr = "_cftscs_",
		Cn = 512;
	var ve = (function(e) {
			return e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible", e
		})({}),
		te = (function(e) {
			return e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible", e
		})({}),
		Lt = (function(e) {
			return e.Auto = "auto", e.Light = "light", e.Dark = "dark", e
		})({}),
		Nt = (function(e) {
			return e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain", e
		})({}),
		Pt = (function(e) {
			return e.Never = "never", e.Auto = "auto", e
		})({}),
		Ge = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		lt = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		ae = (function(e) {
			return e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only", e
		})({}),
		ct = (function(e) {
			return e.Render = "render", e.Execute = "execute", e
		})({}),
		dt = (function(e) {
			return e.Execute = "execute", e
		})({}),
		re = (function(e) {
			return e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.UpgradeReload = "upgrade_reload", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun", e
		})({});
	var pr = function(t) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return t.length > r ? t.slice(0, r) : t
	};

	function Ln(e) {
		if (!e) return "-";
		var t = function(n, a) {
			if (!n || n.tagName === "BODY") return a;
			for (var u = 1, c = n.previousElementSibling; c;) c.tagName === n.tagName && u++, c = c.previousElementSibling;
			var l = pr(n.tagName.toLowerCase()),
				p = "".concat(l, "[").concat(u, "]");
			return t(n.parentElement, "/".concat(p).concat(a))
		};
		return t(e, "")
	}

	function Nn(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var $a = {
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

	function Za(e) {
		return w(e, HTMLInputElement) || w(e, HTMLSelectElement) || w(e, HTMLTextAreaElement) || w(e, HTMLButtonElement)
	}

	function vr(e) {
		return ce(e.querySelectorAll("input, select, textarea, button")).filter(Za)
	}

	function On(e) {
		return ce(e.querySelectorAll("a")).filter(function(t) {
			return w(t, HTMLAnchorElement)
		})
	}

	function Pn(e) {
		var t;
		if (!e) return "";
		var r = e.closest("form");
		if (!r) return "nf";
		var n = vr(r),
			a = n.slice(0, 20).map(function(c) {
				var l;
				return (l = $a[c.type]) !== null && l !== void 0 ? l : "-"
			}).join(""),
			u = ["m:".concat((t = r.getAttribute("method")) !== null && t !== void 0 ? t : ""), "f:".concat(n.length), a].join("|");
		return u
	}
	var mr = "c",
		gr = "cp",
		hr = "ct",
		yr = "l",
		_r = "nl",
		sr = "n",
		br = "r",
		Er = "s",
		ei = "u",
		xr = "up",
		ti = "c",
		ri = "f",
		fr = "n",
		ni = "d",
		ai = "g",
		Ft = "n",
		ii = "x",
		oi = "p",
		ui = "b",
		li = "c",
		ci = "e",
		Ht = "n",
		di = "s",
		Xe = 20,
		si = 512,
		kn = 99,
		Ee, fi = (Ee = {}, ee(Ee, mr, [2071475277, 2531075807, 2087764529, 2650702126, 897792407, 1900861264, 193440998, 181887339]), ee(Ee, gr, [3710748438, 194507255, 2123698751, 2088097853]), ee(Ee, hr, [3716925445, 1236122734, 1917612522]), ee(Ee, yr, [173246534, 1422232710, 2984385681, 2172846769]), ee(Ee, _r, [517084052, 3937470477]), ee(Ee, br, [194507792, 1354128738, 1385023551]), ee(Ee, Er, [2172845875, 2984384787, 2901189036, 3027005952, 2088000679]), ee(Ee, xr, [1759493702, 1322218894]), Ee);

	function ke(e) {
		var t;
		return (t = fi[e]) !== null && t !== void 0 ? t : []
	}

	function ie(e) {
		return (e != null ? e : "").slice(0, si).toLowerCase()
	}

	function Le(e) {
		return wr(e)
	}

	function pi(e) {
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
		for (var c = new Set, l = 0; l < t.length; l++) c.add(Le(t[l])), l + 1 < t.length && c.add(Le("".concat(t[l], " ").concat(t[l + 1])));
		return c
	}

	function Me(e, t) {
		return t.some(function(r) {
			return e.has(r)
		})
	}

	function Dt(e) {
		return e > kn ? "".concat(kn, "+") : String(e)
	}

	function Ut(e) {
		if (w(e, HTMLSelectElement)) return "sl";
		if (w(e, HTMLTextAreaElement)) return "ta";
		if (w(e, HTMLButtonElement)) {
			var t = Le(e.type);
			return t === 2139762449 ? "s" : t === 194507792 ? "rs" : "b"
		}
		switch (Le(e.type)) {
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

	function vi(e) {
		var t = e.getAttribute("action");
		if (t === null || t === "") return ci;
		try {
			return new URL(t, window.location.href).origin === window.location.origin ? di : li
		} catch (r) {
			return ui
		}
	}

	function mi(e) {
		var t = e.getAttribute("method"),
			r = ie(t === null || t === "" ? "get" : t),
			n = Le(r);
		return n === 193411891 ? ai : n === 2088097853 ? oi : n === 1125889741 ? ni : ii
	}

	function Dn(e) {
		if (e === null || e === "") return "";
		try {
			return new URL(e, window.location.href).pathname
		} catch (t) {
			return ""
		}
	}

	function Fn(e) {
		var t = [],
			r = !0,
			n = !1,
			a = void 0;
		try {
			for (var u = e.attributes[Symbol.iterator](), c; !(r = (c = u.next()).done); r = !0) {
				var l = c.value;
				[2203664931, 2087944093, 2087876002, 5861160, 247325877, 3566271494].indexOf(Le(l.name)) !== -1 && t.push(ie(l.value))
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
		return w(e, HTMLButtonElement) ? (t.push(ie(e.value)), t.push(ie(e.textContent))) : w(e, HTMLInputElement) && [1516724467, 2139762449].indexOf(Le(e.type)) !== -1 && t.push(ie(e.value)), t
	}

	function gi(e, t) {
		var r = [];
		r.push(ie(e.getAttribute("id"))), r.push(ie(e.getAttribute("class"))), r.push(ie(e.getAttribute("name"))), r.push(ie(Dn(e.getAttribute("action"))));
		var n = !0,
			a = !1,
			u = void 0;
		try {
			for (var c = t.slice(0, Xe)[Symbol.iterator](), l; !(n = (l = c.next()).done); n = !0) {
				var p = l.value,
					f;
				(f = r).push.apply(f, ce(Fn(p)))
			}
		} catch (I) {
			a = !0, u = I
		} finally {
			try {
				!n && c.return != null && c.return()
			} finally {
				if (a) throw u
			}
		}
		var m = !0,
			E = !1,
			A = void 0;
		try {
			for (var M = ce(e.querySelectorAll("label")).slice(0, Xe)[Symbol.iterator](), _; !(m = (_ = M.next()).done); m = !0) {
				var L = _.value;
				r.push(ie(L.textContent))
			}
		} catch (I) {
			E = !0, A = I
		} finally {
			try {
				!m && M.return != null && M.return()
			} finally {
				if (E) throw A
			}
		}
		return r.join(" ")
	}

	function hi(e, t, r) {
		var n = [];
		n.push(ie(e.getAttribute("id"))), n.push(ie(e.getAttribute("class")));
		var a = !0,
			u = !1,
			c = void 0;
		try {
			for (var l = t.slice(0, Xe)[Symbol.iterator](), p; !(a = (p = l.next()).done); a = !0) {
				var f = p.value,
					m;
				(m = n).push.apply(m, ce(Fn(f)))
			}
		} catch (O) {
			u = !0, c = O
		} finally {
			try {
				!a && l.return != null && l.return()
			} finally {
				if (u) throw c
			}
		}
		var E = !0,
			A = !1,
			M = void 0;
		try {
			for (var _ = r.slice(0, Xe)[Symbol.iterator](), L; !(E = (L = _.next()).done); E = !0) {
				var I = L.value;
				n.push(ie(I.textContent)), n.push(ie(Dn(I.getAttribute("href"))))
			}
		} catch (O) {
			A = !0, M = O
		} finally {
			try {
				!E && _.return != null && _.return()
			} finally {
				if (A) throw M
			}
		}
		return n.join(" ")
	}

	function Hn(e, t) {
		var r = !1,
			n = !1,
			a = !1,
			u = 0,
			c = !0,
			l = !1,
			p = void 0;
		try {
			for (var f = e[Symbol.iterator](), m; !(c = (m = f.next()).done); c = !0) {
				var E = m.value;
				if (w(E, HTMLTextAreaElement)) {
					a = !0;
					continue
				}
				if (w(E, HTMLInputElement)) {
					var A = Le(E.type);
					A === 165454089 ? r = !0 : A === 2087597251 ? n = !0 : A === 1569157018 && u++
				}
			}
		} catch (O) {
			l = !0, p = O
		} finally {
			try {
				!c && f.return != null && f.return()
			} finally {
				if (l) throw p
			}
		}
		var M = u > 0,
			_ = pi(t),
			L = Me(_, ke(yr)),
			I = Me(_, ke(br));
		return I && !L && (r || M) ? br : M && u <= 1 && L ? yr : M && (u > 1 || Me(_, ke(Er))) ? Er : Me(_, ke(mr)) ? mr : n || Me(_, ke(xr)) ? xr : a && Me(_, ke(gr)) ? gr : Me(_, ke(hr)) ? hr : r && Me(_, ke(_r)) ? _r : ei
	}

	function st(e, t, r, n, a, u, c, l) {
		return [e, t, r, Dt(n), Dt(a), Dt(u), Dt(c), l].join("|")
	}

	function Mn(e, t) {
		return t.filter(function(r) {
			return e.contains(r)
		})
	}

	function yi(e, t, r) {
		var n = t.filter(function(c) {
				return w(c, HTMLInputElement) && c.type === "hidden"
			}).length,
			a = t.filter(function(c) {
				return w(c, HTMLButtonElement) || Ut(c) === "s"
			}).length,
			u = t.slice(0, Xe).map(Ut).join(",");
		return {
			pac: Hn(t, hi(e, t, r)),
			pad: st(ti, Ft, Ht, t.length, n, a, r.length, u)
		}
	}

	function Un(e) {
		if (!e) return {
			pac: sr,
			pad: st(fr, Ft, Ht, 0, 0, 0, 0, "")
		};
		var t = e.closest("form");
		if (!t) {
			for (var r = [], n = e.parentElement, a = 0; n && n !== document.body && a < 5; n = n.parentElement, a++) r.push(n);
			if (r.length === 0) return {
				pac: sr,
				pad: st(fr, Ft, Ht, 0, 0, 0, 0, "")
			};
			var u = r[r.length - 1],
				c = vr(u).filter(function(C) {
					return !e.contains(C)
				}),
				l = On(u).filter(function(C) {
					return !e.contains(C)
				}),
				p = null,
				f = !0,
				m = !1,
				E = void 0;
			try {
				for (var A = r[Symbol.iterator](), M; !(f = (M = A.next()).done); f = !0) {
					var _ = M.value,
						L = Mn(_, c),
						I = Mn(_, l);
					if (L.length > 0 || I.length > 0) {
						p = yi(_, L, I);
						break
					}
				}
			} catch (C) {
				m = !0, E = C
			} finally {
				try {
					!f && A.return != null && A.return()
				} finally {
					if (m) throw E
				}
			}
			return p !== null ? p : {
				pac: sr,
				pad: st(fr, Ft, Ht, 0, 0, 0, 0, "")
			}
		}
		var O = vr(t),
			k = O.filter(function(C) {
				return w(C, HTMLInputElement) && C.type === "hidden"
			}).length,
			oe = O.filter(function(C) {
				return w(C, HTMLButtonElement) || Ut(C) === "s"
			}).length,
			ne = On(t).length,
			H = O.slice(0, Xe).map(Ut).join(",");
		return {
			pac: Hn(O, gi(t, O)),
			pad: st(ri, mi(t), vi(t), O.length, k, oe, ne, H)
		}
	}

	function _i(e) {
		return w(e, Element) ? e : e.parentElement
	}

	function bi(e) {
		return "querySelectorAll" in e
	}

	function Wn(e, t) {
		var r, n = t == null ? void 0 : t.shouldIgnoreElement;
		if (n !== void 0) {
			var a = w(e, Element) ? [e] : [];
			(r = a).push.apply(r, ce(e.querySelectorAll("*")));
			var u = new Set,
				c, l = !0,
				p = !1,
				f = void 0;
			try {
				for (var m = a[Symbol.iterator](), E; !(l = (E = m.next()).done); l = !0) {
					var A = E.value;
					if (c !== void 0) {
						if (c.contains(A)) {
							u.add(A);
							continue
						}
						c = void 0
					}
					n(A) && (u.add(A), c = A)
				}
			} catch (M) {
				p = !0, f = M
			} finally {
				try {
					!l && m.return != null && m.return()
				} finally {
					if (p) throw f
				}
			}
			return u
		}
	}

	function Vn(e, t) {
		var r = _i(e);
		return r === null || t === void 0 ? !1 : t.has(r)
	}

	function Bn(e, t) {
		var r = Wn(e, t);
		return ce(e.querySelectorAll("*")).filter(function(n) {
			return !Vn(n, r)
		}).length
	}

	function qn(e, t, r, n) {
		for (var a = "", u = bi(e) ? Wn(e, n) : void 0, c = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), l = c.nextNode(); l !== null && a.length < r;) {
			if (!Vn(l, u)) {
				for (var p = 0, f = l; f !== null && f !== e;) p++, f = f.parentNode;
				if (p <= t)
					if (w(l, Element)) {
						var m = l;
						a += pr(m.tagName.toLowerCase());
						var E = !0,
							A = !1,
							M = void 0;
						try {
							for (var _ = m.attributes[Symbol.iterator](), L; !(E = (L = _.next()).done); E = !0) {
								var I = L.value,
									O;
								(n == null || (O = n.shouldIgnoreAttribute) === null || O === void 0 ? void 0 : O.call(n, m, I)) !== !0 && (a += "_".concat(pr(I.name, 2)))
							}
						} catch (k) {
							A = !0, M = k
						} finally {
							try {
								!E && _.return != null && _.return()
							} finally {
								if (A) throw M
							}
						}
						a += ">"
					} else l.nodeType === Node.TEXT_NODE && (a += "-t")
			}
			l = c.nextNode()
		}
		return a.slice(0, r)
	}

	function wr(e) {
		if (typeof e != "string") throw new TypeError("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : U(e)));
		for (var t = 5381, r = 0; r < e.length; r++) {
			var n = e.charCodeAt(r);
			t = t * 33 ^ n
		}
		return t >>> 0
	}
	var Jn = 300,
		jn = 10,
		zn = 200100,
		Kn = 200500,
		Gn = 300020,
		Wt = 300030,
		Vt = 300031;
	var Xn = (function(e) {
		return e.Failure = "failure", e.Verifying = "verifying", e.Overrunning = "overrunning", e.TimeCheckCachedWarning = "timecheckcachedwarning", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain", e.InvalidSitekey = "invalidsitekey", e.Custom = "custom", e
	})({});

	function We(e) {
		return We = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
		}, We(e)
	}

	function ft() {
		try {
			var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
		} catch (t) {}
		return (ft = function() {
			return !!e
		})()
	}

	function Yn(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Qn(e, t) {
		return t && (U(t) === "object" || typeof t == "function") ? t : Yn(e)
	}

	function $n(e, t, r) {
		return t = We(t), Qn(e, ft() ? Reflect.construct(t, r || [], We(e).constructor) : t.apply(e, r))
	}

	function Zn(e, t) {
		if (!w(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function Ne(e, t) {
		return Ne = Object.setPrototypeOf || function(n, a) {
			return n.__proto__ = a, n
		}, Ne(e, t)
	}

	function ea(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && Ne(e, t)
	}

	function pt(e, t, r) {
		return ft() ? pt = Reflect.construct : pt = function(a, u, c) {
			var l = [null];
			l.push.apply(l, u);
			var p = Function.bind.apply(a, l),
				f = new p;
			return c && Ne(f, c.prototype), f
		}, pt.apply(null, arguments)
	}

	function ta(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Bt(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return Bt = function(n) {
			if (n === null || !ta(n)) return n;
			if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(n)) return t.get(n);
				t.set(n, a)
			}

			function a() {
				return pt(n, arguments, We(this).constructor)
			}
			return a.prototype = Object.create(n.prototype, {
				constructor: {
					value: a,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), Ne(a, n)
		}, Bt(e)
	}
	var ra = (function(e) {
		"use strict";
		ea(t, e);

		function t(r, n) {
			Zn(this, t);
			var a;
			return a = $n(this, t, [r]), ee(a, "code", void 0), a.name = "TurnstileError", a.code = n, a
		}
		return t
	})(Bt(Error));
	var Ei = RegExp("^https:\\/\\/(?:challenges(?:\\.fed)?\\.cloudflare\\.com|challenges\\.cloudflare-cn\\.com)\\/turnstile\\/v0(\\/.*)?\\/api\\.js", "u"),
		qu = RegExp("\\/turnstile\\/v0(\\/.*)?\\/api\\.js", "u");

	function x(e, t) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new ra(r, t)
	}

	function R(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function vt(e) {
		return e.startsWith(Mt) ? e.slice(Mt.length) : null
	}

	function X(e) {
		return "".concat(Mt).concat(e)
	}

	function qt(e, t) {
		var r = !0,
			n = !1,
			a = void 0;
		try {
			for (var u = Object.getOwnPropertySymbols(e)[Symbol.iterator](), c; !(r = (c = u.next()).done); r = !0) {
				var l = c.value,
					p = Object.getOwnPropertyDescriptor(e, l),
					f = p === void 0 ? void 0 : Reflect.get(p, "value");
				if (t(f)) return f
			}
		} catch (m) {
			n = !0, a = m
		} finally {
			try {
				!r && u.return != null && u.return()
			} finally {
				if (n) throw a
			}
		}
	}

	function mt() {
		var e = Ei,
			t = document.currentScript;
		if (w(t, HTMLScriptElement) && e.test(t.src)) return t;
		var r = document.querySelectorAll("script"),
			n = !0,
			a = !1,
			u = void 0;
		try {
			for (var c = r[Symbol.iterator](), l; !(n = (l = c.next()).done); n = !0) {
				var p = l.value;
				if (w(p, HTMLScriptElement) && e.test(p.src)) return p
			}
		} catch (f) {
			a = !0, u = f
		} finally {
			try {
				!n && c.return != null && c.return()
			} finally {
				if (a) throw u
			}
		}
	}

	function na() {
		var e = mt();
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

	function Ye(e) {
		try {
			return new URL(e, window.location.href).origin
		} catch (t) {
			return
		}
	}

	function Tr(e, t, r) {
		if (r === void 0 || r === "") {
			if (0) var n;
			return
		}
		e == null || e.postMessage(t, r)
	}

	function se(e, t, r) {
		Tr(e.contentWindow, t, r)
	}
	var aa = 16,
		xi = 1,
		ia = 0,
		oa = 1,
		ua = 2,
		la = 3,
		ca = 4,
		da = 5,
		sa = 6,
		fa = 7;

	function wi(e, t) {
		try {
			var r = new Error().stack;
			return typeof r != "string" ? void 0 : [e, Math.max(0, Math.floor(Y() - t)), r, xi]
		} catch (n) {
			return
		}
	}

	function Se(e, t) {
		return wi(e, t.turnstileLoadInitTimeTsMs)
	}

	function pa(e) {
		return e[3] === void 0 ? [e[0], e[1], e[2]] : [e[0], e[1], e[2], e[3]]
	}

	function Qe(e) {
		var t;
		return (t = e == null ? void 0 : e.slice(-aa).map(pa)) !== null && t !== void 0 ? t : []
	}

	function gt(e, t) {
		if (!t) return !1;
		if (e.length > 0) {
			var r = e[e.length - 1];
			if (r[0] === t[0] && r[2] === t[2]) {
				var n, a, u = ((n = r[3]) !== null && n !== void 0 ? n : 1) + ((a = t[3]) !== null && a !== void 0 ? a : 1);
				return u === r[3] ? !1 : (r[3] = u, !0)
			}
		}
		for (e.push(pa(t)); e.length > aa;) e.shift();
		return !0
	}

	function Jt(e) {
		var t, r;
		return (t = (r = e.kills) === null || r === void 0 ? void 0 : r.includes("gcs")) !== null && t !== void 0 ? t : !1
	}

	function ht(e, t) {
		return Jt(e) ? !1 : gt(e.gcs, t)
	}

	function Ti(e) {
		var t = Qe(e.gcs);
		return t.length > 0 ? t : void 0
	}

	function yt(e) {
		if (!Jt(e)) return Ti(e)
	}

	function jt(e, t) {
		if (t.isInitialized) {
			var r = yt(t);
			if (r) {
				var n = t.shadow.querySelector("#".concat(X(e)));
				n && se(n, {
					cs: r,
					event: "gcs",
					source: J,
					widgetId: e
				}, t.iframeOrigin)
			}
		}
	}

	function Pe(e, t, r) {
		var n = ht(t, r);
		return n && jt(e, t), n
	}

	function K(e, t) {
		return e.indexOf(t) !== -1
	}
	var Ai = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Si = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		va = "https://challenges.cloudflare.com",
		ma = [va, "https://challenges.fed.cloudflare.com", "https://challenges.cloudflare-cn.com", "https://challenges-staging.cloudflare.com"];

	function zt(e, t, r) {
		var n, a = va,
			u = (n = r == null ? void 0 : r.origin) !== null && n !== void 0 ? n : a;
		if (t) {
			var c;
			return (c = e["base-url"]) !== null && c !== void 0 ? c : u
		}
		return u
	}

	function Ar(e, t, r, n, a, u, c, l, p) {
		var f = zt(r, a, l),
			m = u !== void 0 && u !== "" ? "h/".concat(u, "/") : "",
			E = p !== void 0 && p !== "" ? "&".concat(p) : "",
			A = r["feedback-enabled"] === !1 ? "fbD" : "fbE",
			M = r.chlPageOfflabel === !0 ? "&offlabel=true" : "";
		return "".concat(f, "/cdn-cgi/challenge-platform/").concat(m, "turnstile/f/av0/rch").concat(n, "/").concat(e, "/").concat(t, "/").concat(r.theme, "/").concat(A, "/").concat(c, "/").concat(r.size, "?lang=").concat(r.language).concat(M).concat(E)
	}
	var Sr = function(t) {
			var r, n, a, u, c = window.innerWidth < 400,
				l = t.state !== Nt.FailureFeedbackCode && (t.state === Nt.FailureFeedback || t.state === Nt.FailureHavingTroubles || t.errorCode === void 0 || t.errorCode === 0),
				p = K(Ai, (r = (a = t.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && r !== void 0 ? r : "nonexistent"),
				f = K(Si, (n = (u = t.displayLanguage) === null || u === void 0 ? void 0 : u.toLowerCase()) !== null && n !== void 0 ? n : "nonexistent");
			return c ? Ri({
				isModeratelyVerbose: f,
				isSmallerFeedback: l,
				isVerboseLanguage: p
			}) : l && p ? "680px" : l && f ? "670px" : l ? "650px" : p ? "690px" : "680px"
		},
		Ri = function(t) {
			var r = t.isVerboseLanguage,
				n = t.isSmallerFeedback,
				a = t.isModeratelyVerbose;
			return n && r ? "660px" : n && a ? "620px" : n ? "600px" : r ? "770px" : a ? "740px" : "730px"
		};
	var Ii = 5e3,
		Ci = "auto-troubleshoot-click";

	function Oi(e, t) {
		var r = zt(e.params, !1, t),
			n = "h/".concat("g", "/");
		return "".concat(r, "/cdn-cgi/challenge-platform/").concat(n, "fr")
	}
	var ya = function(t, r, n, a, u) {
		var c, l, p, f, m, E, A;
		if (a === void 0 || a === "" || n === void 0 || n === "") return !1;
		var M = Oi(t, u),
			_ = new FormData;
		_.append("consent", "on"), _.append("origin", r), _.append("issue", Ci), _.append("description", ""), _.append("rayId", n), _.append("sitekey", (c = t.params.sitekey) !== null && c !== void 0 ? c : ""), _.append("rcV", (l = t.rcV) !== null && l !== void 0 ? l : ""), _.append("cfChlOut", (p = t.cfChlOut) !== null && p !== void 0 ? p : ""), _.append("cfChlOutS", (f = t.cfChlOutS) !== null && f !== void 0 ? f : ""), _.append("mode", (m = t.mode) !== null && m !== void 0 ? m : ""), _.append("errorCode", String((E = t.errorCode) !== null && E !== void 0 ? E : 0)), _.append("frMd", a), _.append("displayLanguage", (A = t.displayLanguage) !== null && A !== void 0 ? A : "");
		try {
			if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(M, _)) return !0
		} catch (L) {
			R("auto feedback report: sendBeacon threw synchronously, falling through to fetch (".concat(Rr(L), ")"))
		}
		try {
			return fetch(M, Ue({
				body: _,
				keepalive: !0,
				method: "POST",
				mode: "no-cors"
			}, ga())), !0
		} catch (L) {
			R("auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (".concat(Rr(L), ")"))
		}
		try {
			fetch(M, Ue({
				body: _,
				method: "POST",
				mode: "no-cors"
			}, ga()))
		} catch (L) {
			R("auto feedback report: all transports failed (".concat(Rr(L), ")"))
		}
		return !1
	};

	function ga() {
		return typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function" ? {} : {
			signal: AbortSignal.timeout(Ii)
		}
	}

	function Rr(e) {
		return w(e, Error) ? e.message : "unknown error"
	}
	var Kt = null,
		_t = 0,
		_a = function() {
			if (_t++, _t === 1) {
				var t = document.querySelector('meta[http-equiv="refresh"]');
				t && (Kt = t.getAttribute("content"), t.remove())
			}
		},
		ba = function() {
			if (_t > 0 && _t--, _t === 0 && Kt !== null) {
				var t = document.createElement("meta");
				t.httpEquiv = "refresh", t.content = Kt, Kt = null, document.head.appendChild(t)
			}
		},
		Ir = Symbol(),
		ki = "host-origin",
		$e = function(t) {
			t.feedbackPopup && !t.feedbackPopup.closed && t.feedbackPopup.close(), t.feedbackPopup = void 0, t.feedbackPopupOrigin = void 0
		};

	function Ea(e) {
		return e.endsWith("-fr") ? e : "".concat(e, "-fr")
	}

	function xa(e) {
		var t, r, n, a = (n = document.querySelector("#".concat(e))) === null || n === void 0 || (r = n.parentElement) === null || r === void 0 || (t = r.parentElement) === null || t === void 0 ? void 0 : t.parentElement;
		return w(a, HTMLDivElement) ? a : null
	}

	function ha(e) {
		if (!((typeof e == "undefined" ? "undefined" : U(e)) !== "object" || e === null)) {
			var t = Object.getOwnPropertyDescriptor(e, "cleanup"),
				r = t === void 0 ? void 0 : Reflect.get(t, "value");
			if (typeof r == "function") return function() {
				Reflect.apply(r, void 0, [])
			}
		}
	}

	function wa(e) {
		var t, r = ha((t = Object.getOwnPropertyDescriptor(e, Ir)) === null || t === void 0 ? void 0 : t.value);
		if (r) return r;
		var n = !0,
			a = !1,
			u = void 0;
		try {
			for (var c = Object.getOwnPropertySymbols(e)[Symbol.iterator](), l; !(n = (l = c.next()).done); n = !0) {
				var p = l.value,
					f, m = ha((f = Object.getOwnPropertyDescriptor(e, p)) === null || f === void 0 ? void 0 : f.value);
				if (m) return m
			}
		} catch (E) {
			a = !0, u = E
		} finally {
			try {
				!n && c.return != null && c.return()
			} finally {
				if (a) throw u
			}
		}
	}

	function Mi(e, t) {
		Object.defineProperty(e, Ir, {
			configurable: !0,
			enumerable: !1,
			value: {
				cleanup: t
			}
		})
	}

	function Li(e) {
		Reflect.deleteProperty(e, Ir)
	}

	function Ni(e) {
		var t = new URL(e, window.location.href),
			r = new URLSearchParams(t.hash.startsWith("#") ? t.hash.slice(1) : t.hash);
		return r.set(ki, window.location.origin), t.hash = r.toString(), t.toString()
	}
	var Cr = function(t, r, n, a, u) {
			var c, l, p = Ea(t),
				f = zt(r.params, !1, a),
				m = "h/".concat("g", "/"),
				E = Ni("".concat(f, "/cdn-cgi/challenge-platform/").concat(m, "fr/").concat(vt(t), "/").concat(r.displayLanguage, "/").concat((l = r.params.theme) !== null && l !== void 0 ? l : r.theme, "/").concat(n));
			if ($e(r), window.top !== window.self) {
				var A = window.open(E, "_blank");
				if (A) {
					r.feedbackPopupOrigin = Ye(E), r.feedbackPopup = A;
					var M = window.setInterval(function() {
						A.closed && (window.clearInterval(M), r.feedbackPopupCloseCheck = void 0, u == null || u())
					}, 500);
					r.feedbackPopupCloseCheck = M;
					return
				}
				R("Unable to open feedback report popup, falling back to the embedded feedback overlay.")
			}
			r.wrapper.parentNode || x("Cannot initialize Widget, Element not found (#".concat(t, ")."), 3074);
			var _ = xa(p);
			if (_) {
				var L;
				(L = wa(_)) === null || L === void 0 || L()
			}
			var I = document.createElement("div");
			I.style.position = "fixed", I.style.zIndex = "2147483646", I.style.width = "100vw", I.style.height = "100vh", I.style.top = "0", I.style.left = "0", I.style.transformOrigin = "center center", I.style.overflowX = "hidden", I.style.overflowY = "auto", I.style.background = "rgba(0,0,0,0.4)";
			var O = document.createElement("div");
			O.className = "cf-wrapper-turnstile-feedback", O.style.display = "table-cell", O.style.verticalAlign = "middle", O.style.width = "100vw", O.style.height = "100vh";
			var k = document.createElement("div");
			k.className = "cf-turnstile-feedback", k.id = "cf-fr-id", k.style.width = "100vw", k.style.maxWidth = "500px", k.style.height = Sr(r), k.style.position = "relative", k.style.zIndex = "2147483647", k.style.backgroundColor = "#ffffff", k.style.borderRadius = "5px", k.style.left = "0px", k.style.top = "0px", k.style.overflow = "hidden", k.style.margin = "0px auto";
			var oe = function() {
					k.style.height = Sr(r)
				},
				ne = function() {
					var fe;
					Li(I), r.feedbackIframeOrigin = void 0, window.removeEventListener("resize", oe), (fe = I.parentNode) === null || fe === void 0 || fe.removeChild(I), u == null || u()
				},
				H = document.createElement("iframe");
			H.id = p, H.setAttribute("src", E), H.setAttribute("title", "Turnstile feedback report"), H.setAttribute("allow", "cross-origin-isolated; fullscreen"), H.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), H.setAttribute("scrolling", "yes"), H.style.borderWidth = "0px", H.style.width = "100%", H.style.height = "100%", H.style.overflow = "auto", r.feedbackIframeOrigin = Ye(E);
			var C = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			C.setAttribute("tabindex", "0"), C.setAttribute("role", "button"), C.setAttribute("aria-label", "Close feedback report"), C.style.position = "absolute", C.style.width = "26px", C.style.height = "26px", C.style.zIndex = "2147483647", C.style.cursor = "pointer", r.displayRtl === !0 ? C.style.left = "24px" : C.style.right = "24px", C.style.top = "24px", C.setAttribute("width", "20"), C.setAttribute("height", "20"), C.addEventListener("click", function(Q) {
				Q.stopPropagation(), ne()
			}), C.addEventListener("keydown", function(Q) {
				(Q.key === "Enter" || Q.key === " ") && (Q.preventDefault(), Q.stopPropagation(), ne())
			});
			var V = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			V.setAttribute("ry", "12"), V.setAttribute("rx", "12"), V.setAttribute("cy", "12"), V.setAttribute("cx", "12"), V.setAttribute("fill", "none"), V.setAttribute("stroke-width", "0"), C.appendChild(V);
			var j = document.createElementNS("http://www.w3.org/2000/svg", "line");
			j.setAttribute("stroke-width", "1"), j.setAttribute("fill", "none"), j.setAttribute("x1", "6"), j.setAttribute("x2", "18"), j.setAttribute("y1", "18"), j.setAttribute("y2", "5");
			var P = document.createElementNS("http://www.w3.org/2000/svg", "line");
			P.setAttribute("stroke-width", "1"), P.setAttribute("fill", "none"), P.setAttribute("x1", "6"), P.setAttribute("x2", "18"), P.setAttribute("y1", "5"), P.setAttribute("y2", "18"), r.theme === Lt.Light ? (j.setAttribute("stroke", "#0A0A0A"), P.setAttribute("stroke", "#0A0A0A")) : (j.setAttribute("stroke", "#F2F2F2"), P.setAttribute("stroke", "#F2F2F2")), C.appendChild(j), C.appendChild(P), k.appendChild(H), k.appendChild(C), O.appendChild(k), I.appendChild(O), I.addEventListener("click", ne), r.wrapper.parentNode.appendChild(I), window.addEventListener("resize", oe), Mi(I, ne)
		},
		bt = function(t) {
			var r, n = Ea(t),
				a = xa(n);
			if (a) {
				var u = wa(a);
				if (u) {
					u();
					return
				}
				R("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup."), (r = a.parentNode) === null || r === void 0 || r.removeChild(a)
			}
		};
	var Pi = 900,
		Di = 45,
		Fi = 50;

	function Hi(e) {
		return w(e, ShadowRoot)
	}

	function Ui(e, t, r) {
		var n = e.widgetMap.get(t);
		(n == null ? void 0 : n.retryTimeout) !== void 0 && (window.clearTimeout(n.retryTimeout), n.retryTimeout = void 0), R("Cannot find Widget ".concat(r, ", consider using turnstile.remove() to clean up a widget.")), e.widgetMap.delete(t)
	}

	function Wi(e) {
		e.watchCatSeq++;
		var t = [],
			r = !0,
			n = !1,
			a = void 0;
		try {
			for (var u = e.widgetMap[Symbol.iterator](), c; !(r = (c = u.next()).done); r = !0) {
				var l = ze(c.value, 2),
					p = l[0],
					f = l[1],
					m = X(p),
					E = f.shadow;
				if (!Hi(E) || !f.wrapper.isConnected) {
					f.watchcat.missingWidgetWarning || (f.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: m,
						widgetId: p
					}));
					continue
				}
				var A = E.querySelector("#".concat(m));
				if (A === null) {
					f.watchcat.missingWidgetWarning || (f.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: m,
						widgetId: p
					}));
					continue
				}
				if (f.watchcat.seq = e.watchCatSeq, f.watchcat.lastAckedSeq === 0 && (f.watchcat.lastAckedSeq = e.watchCatSeq), !(f.isComplete || f.isFailed || f.feedbackOpen)) {
					var M = f.watchcat.seq - 1 - Di,
						_ = f.watchcat.lastAckedSeq < M,
						L = f.watchcat.seq - 1 - Fi,
						I = f.isOverrunning && f.watchcat.overrunBeginSeq !== 0 && f.watchcat.overrunBeginSeq < L;
					if ((f.isExecuting || !f.isInitialized || !f.isStale && !f.isExecuted) && f.watchcat.lastAckedSeq !== 0 && _ || I) {
						var O, k;
						f.watchcat.lastAckedSeq = 0, f.watchcat.seq = 0, f.isExecuting = !1;
						var oe = function(d, v) {
							console.log("Turnstile Widget seem to have ".concat(d, ": "), v)
						};
						oe(_ ? "hung" : "crashed", p);
						var ne = _ ? Wt : Vt;
						if ((k = e.internalMsgHandler) === null || k === void 0 || k.call(e, {
								code: ne,
								event: "fail",
								rcV: (O = f.nextRcV) !== null && O !== void 0 ? O : Ae,
								source: J,
								widgetId: p
							}), 0) var H;
						continue
					}
					se(A, {
						event: "meow",
						seq: e.watchCatSeq,
						source: J,
						widgetId: p
					}, f.iframeOrigin)
				}
			}
		} catch (i) {
			n = !0, a = i
		} finally {
			try {
				!r && u.return != null && u.return()
			} finally {
				if (n) throw a
			}
		}
		var C = !0,
			V = !1,
			j = void 0;
		try {
			for (var P = t[Symbol.iterator](), Q; !(C = (Q = P.next()).done); C = !0) {
				var fe = Q.value,
					z = fe.widgetElId,
					S = fe.widgetId;
				Ui(e, S, z)
			}
		} catch (i) {
			V = !0, j = i
		} finally {
			try {
				!C && P.return != null && P.return()
			} finally {
				if (V) throw j
			}
		}
		t.length > 0 && e.widgetMap.size === 0 && Et(e)
	}

	function Or(e) {
		var t, r;
		(r = (t = e).watchCatInterval) !== null && r !== void 0 || (t.watchCatInterval = setInterval(function() {
			Wi(e)
		}, Pi))
	}

	function Et(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && (clearInterval(e.watchCatInterval), e.watchCatInterval = null)
	}
	var Mr = Symbol();

	function Aa(e) {
		return (typeof e == "undefined" ? "undefined" : U(e)) === "object" && e !== null ? e : void 0
	}

	function kr(e) {
		return (typeof e == "undefined" ? "undefined" : U(e)) === "object" && e !== null && "widgetMap" in e && w(e.widgetMap, Map) && "upgradeAttempts" in e && typeof e.upgradeAttempts == "number" && "upgradeCompletedCount" in e && typeof e.upgradeCompletedCount == "number"
	}

	function Vi(e, t) {
		Object.defineProperty(e, Mr, {
			configurable: !0,
			enumerable: !1,
			value: t
		})
	}

	function Bi(e) {
		var t = Object.getOwnPropertyDescriptor(e, Mr),
			r = t === void 0 ? void 0 : Reflect.get(t, "value");
		if (kr(r)) return r;
		var n = qt(e, kr);
		if (n) return n
	}

	function Sa(e) {
		Reflect.deleteProperty(e, Mr);
		var t = !0,
			r = !1,
			n = void 0;
		try {
			for (var a = Object.getOwnPropertySymbols(e)[Symbol.iterator](), u; !(t = (u = a.next()).done); t = !0) {
				var c = u.value,
					l = Object.getOwnPropertyDescriptor(e, c),
					p = l === void 0 ? void 0 : Reflect.get(l, "value");
				kr(p) && Reflect.deleteProperty(e, c)
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

	function qi(e) {
		return !Number.isFinite(e.apiJsReloadBackoffMs) || e.apiJsReloadBackoffMs <= 0 ? Ke : Math.min(e.apiJsReloadBackoffMs, ut)
	}

	function Ji(e) {
		return !Number.isFinite(e.apiJsReloadNextAllowedTsMs) || e.apiJsReloadNextAllowedTsMs <= 0 ? 0 : e.apiJsReloadNextAllowedTsMs
	}

	function Ta(e, t) {
		var r = Reflect.get(e, t);
		return typeof r == "number" ? r : 0
	}

	function Ra(e, t) {
		var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : mt;
		t.upgradeAttempts++;
		var n = r();
		if (!(n != null && n.parentNode)) return !1;
		var a = Aa(e);
		if (!a) return !1;
		var u = n.nonce;
		Vi(a, t);
		var c = new URL(n.src),
			l = document.createElement("script");
		c.searchParams.set("_upgrade", "true"), c.searchParams.set("_cb", String(Date.now())), l.async = !0, u && (l.nonce = u), l.setAttribute("crossorigin", "anonymous"), l.src = c.toString();
		try {
			return n.parentNode.replaceChild(l, n), !0
		} catch (p) {
			if (!w(p, DOMException)) throw p;
			return Sa(a), !1
		}
	}

	function Ia(e, t, r) {
		var n = Aa(e);
		if (!n) return !1;
		var a = Bi(n);
		if (!a) return !1;
		var u = a.apiJsMismatchReloadPending;
		t.isReady = a.isReady, t.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, t.gcs = Qe(a.gcs), t.lastWidgetIdx = a.lastWidgetIdx, t.scriptWasLoadedAsync = a.scriptWasLoadedAsync, t.apiJsReloadBackoffMs = u ? Ke : qi(a), t.apiJsReloadNextAllowedTsMs = Ji(a), t.apiJsMismatchReloadAttempts = Ta(a, "apiJsMismatchReloadAttempts"), t.apiJsMismatchReloadCompletedCount = Ta(a, "apiJsMismatchReloadCompletedCount") + (u ? 1 : 0), t.apiJsMismatchReloadPending = !1, t.upgradeAttempts = a.upgradeAttempts, t.upgradeCompletedCount = a.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = Y(), t.watchCatInterval = null, t.watchCatSeq = a.watchCatSeq, t.widgetMap = a.widgetMap;
		var c = !0,
			l = !1,
			p = void 0;
		try {
			for (var f = t.widgetMap.values()[Symbol.iterator](), m; !(c = (m = f.next()).done); c = !0) {
				var E = m.value;
				E.gcs = Qe(E.gcs)
			}
		} catch (A) {
			l = !0, p = A
		} finally {
			try {
				!c && f.return != null && f.return()
			} finally {
				if (l) throw p
			}
		}
		return Et(a, !0), a.msgHandler && window.removeEventListener("message", a.msgHandler), Sa(n), r(), !0
	}

	function Lr(e) {
		return K(["auto", "dark", "light"], e)
	}

	function Nr(e) {
		return K(["auto", "never"], e)
	}

	function Pr(e) {
		return e > 0 && e < 9e5
	}

	function Dr(e) {
		return e > 0 && e < 36e4
	}
	var ji = RegExp("^[0-9A-Za-z_-]{3,100}$", "u");

	function Ca(e) {
		return ji.test(e)
	}
	var zi = RegExp("^[a-z0-9_-]{0,32}$", "iu");

	function Fr(e) {
		return e === void 0 ? !0 : typeof e == "string" && zi.test(e)
	}
	var Ki = RegExp("^[a-z0-9_\\-=]{0,255}$", "iu");

	function Hr(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ki.test(e)
	}

	function Ur(e) {
		return K([te.Normal, te.Compact, te.Invisible, te.Flexible], e)
	}

	function Wr(e) {
		return K(["auto", "manual", "never"], e)
	}

	function Vr(e) {
		return K(["auto", "manual", "never"], e)
	}
	var Gi = RegExp("^[a-z]{2,3}([-_][a-z]{2})?$", "iu");

	function Br(e) {
		return e === "auto" || Gi.test(e)
	}

	function qr(e) {
		return K(["always", "execute", "interaction-only"], e)
	}

	function Oa(e) {
		return K(["true", "false"], e)
	}

	function Jr(e) {
		return K(["render", "execute"], e)
	}
	var Sl = RegExp("^[0-9a-z_\\-.]{5,2000}$", "iu");

	function jr(e) {
		var t = new URLSearchParams;
		if (0) {
			var r;
			if (r != null && r !== "") var n
		}
		if (e.params["offlabel-show-privacy"] !== void 0 && t.set("offlabel_show_privacy", String(e.params["offlabel-show-privacy"])), e.params["offlabel-show-help"] !== void 0 && t.set("offlabel_show_help", String(e.params["offlabel-show-help"])), !(t.size === 0 || t.toString() === "")) return t.toString()
	}
	var Xi = 12;

	function Yi(e) {
		return w(e.shadow.host, HTMLDivElement) ? e.shadow.host : e.wrapper
	}

	function Qi(e) {
		var t = e.getBoundingClientRect();
		return {
			h: Math.round(t.height),
			w: Math.round(t.width),
			x: Math.round(t.left),
			y: Math.round(t.top)
		}
	}

	function $i(e) {
		return e.w > 0 && e.h > 0 && e.x + e.w > 0 && e.y + e.h > 0 && e.x < window.innerWidth && e.y < window.innerHeight
	}

	function Yr(e, t) {
		return e ? e === t.wrapper ? "wrapper" : e === t.iframeHost ? "iframe-host" : e === t.iframe ? "iframe" : e === document.body ? "body" : e === document.documentElement ? "document-element" : e === t.wrapper.parentElement ? "wrapper-parent" : e.contains(t.wrapper) || e.contains(t.iframeHost) ? "ancestor" : "other" : null
	}

	function ka(e) {
		var t = [];
		e.display === "none" && t.push("dn"), (e.visibility === "hidden" || e.visibility === "collapse") && t.push(e.visibility === "hidden" ? "vh" : "vc");
		var r = Number(e.opacity);
		return Number.isFinite(r) && r <= .01 && t.push("op"), e.contentVisibility === "hidden" && t.push("cv"), t
	}

	function Zi(e) {
		var t = [];
		return e.connected || t.push("dt"), (e.rect.w === 0 || e.rect.h === 0) && t.push("zs"), e.connected && !e.inViewport && t.push("ov"), t
	}

	function zr(e, t) {
		var r, n = Qi(e),
			a = window.getComputedStyle(e);
		return {
			connected: e.isConnected,
			element: (r = Yr(e, t)) !== null && r !== void 0 ? r : "unknown",
			inViewport: e.isConnected && $i(n),
			rect: n,
			style: {
				contentVisibility: a.contentVisibility,
				display: a.display,
				opacity: a.opacity,
				visibility: a.visibility
			}
		}
	}

	function Kr(e, t) {
		return t.length === 0 ? null : {
			element: Ma(e.element),
			reasons: t
		}
	}

	function Gr(e, t, r, n) {
		var a = ka(t.style);
		if (t.connected || a.push("dt"), a.length > 0) return Kr(t, a);
		for (var u = e.parentElement, c = 0; u && c < Xi;) {
			var l = n.get(u);
			if (l === void 0) {
				var p, f = window.getComputedStyle(u),
					m = {
						connected: u.isConnected,
						element: (p = Yr(u, r)) !== null && p !== void 0 ? p : "unknown",
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
				l = Kr(m, ka(m.style)), n.set(u, l)
			}
			if (l) return l;
			u = u.parentElement, c += 1
		}
		return Kr(t, Zi(t))
	}

	function eo(e) {
		return e.mode === ve.Invisible ? {
			expectedHidden: !0,
			reason: "mi"
		} : e.params.appearance === ae.InteractionOnly ? {
			expectedHidden: !0,
			reason: "ai"
		} : e.params.appearance === ae.Execute && !e.isExecuting ? {
			expectedHidden: !0,
			reason: "ae"
		} : {
			expectedHidden: !1,
			reason: null
		}
	}

	function to(e, t) {
		return t === e.wrapper || t.parentElement === e.wrapper ? "wrapper" : t.isConnected ? "other" : "detached"
	}

	function Ma(e) {
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

	function ro(e) {
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

	function Xr(e, t) {
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

	function La(e, t) {
		var r, n, a = Yi(e),
			u = {
				iframe: t,
				iframeHost: a,
				wrapper: e.wrapper
			},
			c = eo(e),
			l = to(e, a),
			p = Yr(a.parentElement, u),
			f = {
				height: window.innerHeight,
				visibilityState: document.visibilityState,
				width: window.innerWidth
			};
		if (c.expectedHidden) {
			var m, E;
			return {
				appearance: (m = e.params.appearance) !== null && m !== void 0 ? m : ae.Always,
				expectedHidden: !0,
				expectedHiddenReason: c.reason,
				hostParent: p,
				isExecuting: e.isExecuting,
				mode: (E = e.mode) !== null && E !== void 0 ? E : null,
				mount: l,
				reasons: [],
				unexpectedHidden: !1,
				viewport: f
			}
		}
		var A = zr(e.wrapper, u),
			M = zr(a, u),
			_ = zr(t, u),
			L = new Map,
			I = Gr(e.wrapper, A, u, L),
			O = Gr(a, M, u, L),
			k = Gr(t, _, u, L),
			oe = [l === "wrapper" ? null : "m:".concat(ro(l), ":").concat(Ma(p)), Xr("wrapper", I), Xr("iframeHost", O), Xr("iframe", k)].filter(function(ne) {
				return ne !== null
			});
		return {
			appearance: (r = e.params.appearance) !== null && r !== void 0 ? r : ae.Always,
			expectedHidden: !1,
			expectedHiddenReason: null,
			hostParent: p,
			isExecuting: e.isExecuting,
			mode: (n = e.mode) !== null && n !== void 0 ? n : null,
			mount: l,
			reasons: ce(new Set(oe)),
			unexpectedHidden: oe.length > 0,
			viewport: f
		}
	}

	function Na(e, t) {
		if (e.isResetting = !1, t) {
			t(String(Kn));
			return
		}
		x("Could not load challenge from challenges.cloudflare.com.", 161)
	}

	function Pa(e, t) {
		return e ? t ? !0 : K(ma, e) : !1
	}

	function Da() {
		for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window, t = e; t && t.top !== t && !t.location.href.startsWith("http");) t = t.top;
		return t == null ? void 0 : t.location.href
	}
	var Ja = Symbol(),
		no = "Turnstile has already been rendered in this container. The render attempt was rejected.",
		ao = "Turnstile skipped implicit render because a widget already exists in this container.",
		Qr = void 0,
		io = function(e) {
			return e.styleSheets.length
		};

	function en(e) {
		return Reflect.get(window, e)
	}

	function tn(e) {
		var t = en(e);
		return typeof t == "function" ? function() {
			for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
			return Reflect.apply(t, window, n)
		} : void 0
	}

	function Fa(e, t) {
		return e == null ? t : Number(e)
	}

	function oo(e) {
		return e === "new" || e === "crashed_retry" || e === "failure_retry" || e === "stale_execute" || e === "auto_expire" || e === "auto_timeout" || e === "manual_refresh" || e === "api" || e === "check_delays" || e === "upgrade_reload" || e === "time_check_cached_warning_aux" || e === "js_cookies_missing_aux" || e === "redirecting_text_overrun"
	}

	function uo(e) {
		var t = JSON.stringify(e);
		return JSON.parse(t)
	}

	function Ha(e) {
		return (typeof e == "undefined" ? "undefined" : U(e)) === "object" && e !== null && "clearPendingApiJsReloadRequest" in e && typeof e.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in e && typeof e.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in e && typeof e.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in e && typeof e.reloadAfterUpgrade == "function"
	}

	function Ua(e) {
		if (!((typeof e == "undefined" ? "undefined" : U(e)) !== "object" || e === null)) {
			var t = Object.getOwnPropertyDescriptor(e, Ja),
				r = t === void 0 ? void 0 : Reflect.get(t, "value");
			if (Ha(r)) return r;
			var n = qt(e, Ha);
			if (n) return n
		}
	}
	var g = {
			apiJsMismatchReloadAttempts: 0,
			apiJsMismatchReloadCompletedCount: 0,
			apiJsMismatchReloadPending: !1,
			apiJsReloadBackoffMs: Ke,
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
		Tt, rr, ar;

	function lo(e) {
		var t = !0,
			r = !1,
			n = void 0;
		try {
			for (var a = g.widgetMap[Symbol.iterator](), u; !(t = (u = a.next()).done); t = !0) {
				var c = ze(u.value, 2),
					l = c[0],
					p = c[1];
				if (p.wrapper.parentElement === e || p.wrapper !== e && p.wrapper.contains(e) || p.shadow.contains(e)) return l
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

	function Gt(e) {
		if (typeof e == "string") {
			var t = vt(e);
			return t !== null && g.widgetMap.has(t) ? t : g.widgetMap.has(e) ? e : null
		}
		return lo(e)
	}

	function co(e) {
		return e === "implicit" ? ao : no
	}

	function Wa(e, t) {
		return e === "explicit" && (t == null ? void 0 : t.renderSource) === "implicit"
	}

	function rn() {
		Tt !== void 0 && (window.clearTimeout(Tt), Tt = void 0)
	}

	function ja() {
		var e = !0,
			t = !1,
			r = void 0;
		try {
			for (var n = g.widgetMap.values()[Symbol.iterator](), a; !(e = (a = n.next()).done); e = !0) {
				var u = a.value;
				if (u.chlPageData !== void 0 && u.chlPageData !== "") return !0
			}
		} catch (c) {
			t = !0, r = c
		} finally {
			try {
				!e && n.return != null && n.return()
			} finally {
				if (t) throw r
			}
		}
		return !1
	}

	function wt(e) {
		var t = g.widgetMap.get(e),
			r = X(e);
		if (t !== void 0) {
			var n = qe(t, r);
			n !== null && se(n, {
				apiJsMismatchReloadAttempts: g.apiJsMismatchReloadAttempts,
				apiJsMismatchReloadCompletedCount: g.apiJsMismatchReloadCompletedCount,
				event: "reloadApiJsRejected",
				source: J,
				widgetId: e
			}, t.iframeOrigin)
		}
	}

	function nn() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			t = e.preserveMismatchReloadPending,
			r = t === void 0 ? !1 : t;
		ar = void 0, r || (g.apiJsMismatchReloadPending = !1), rr !== void 0 && (window.clearTimeout(rr), rr = void 0)
	}

	function za() {
		var e = ar;
		nn(), e !== void 0 && wt(e)
	}

	function so() {
		return Y() < g.apiJsReloadNextAllowedTsMs
	}

	function fo() {
		var e = g.apiJsReloadBackoffMs,
			t = Number.isFinite(e) && e > 0 ? Math.min(e, ut) : Ke,
			r = Math.round(t * (.8 + Math.random() * .4));
		g.apiJsReloadNextAllowedTsMs = Y() + r, g.apiJsReloadBackoffMs = Math.min(t * 2, ut)
	}

	function po(e) {
		nn({
			preserveMismatchReloadPending: !0
		}), g.apiJsMismatchReloadPending = !0, ar = e, rr = window.setTimeout(function() {
			za()
		}, wn)
	}

	function an() {
		rn(), !ja() && (Tt = window.setTimeout(function() {
			Tt = void 0, Ya()
		}, An))
	}

	function $r(e, t) {
		Ga(e, t, "")
	}
	var on = [];

	function Va() {
		g.isReady = !0;
		var e = !0,
			t = !1,
			r = void 0;
		try {
			for (var n = on[Symbol.iterator](), a; !(e = (a = n.next()).done); e = !0) {
				var u = a.value;
				u()
			}
		} catch (c) {
			t = !0, r = c
		} finally {
			try {
				!e && n.return != null && n.return()
			} finally {
				if (t) throw r
			}
		}
	}

	function Ba(e, t) {
		e.onerror = function() {
			Na(t, t.cbError)
		}
	}

	function Ka(e, t) {
		var r, n = (r = e.params["response-field"]) !== null && r !== void 0 ? r : !0,
			a = g.isRecaptchaCompatibilityMode,
			u = "".concat(t, "_response"),
			c = "".concat(t, "_g_response"),
			l = (!n || w(document.querySelector("#".concat(u)), HTMLInputElement)) && (!a || w(document.querySelector("#".concat(c)), HTMLInputElement));
		if (!(e.responseElementsBuilt && l)) {
			if (n && !w(document.querySelector("#".concat(u)), HTMLInputElement)) {
				var p, f = document.createElement("input");
				f.type = "hidden", f.name = (p = e.params["response-field-name"]) !== null && p !== void 0 ? p : En, f.id = u, e.wrapper.appendChild(f)
			}
			if (a && !w(document.querySelector("#".concat(c)), HTMLInputElement)) {
				var m = document.createElement("input");
				m.type = "hidden", m.name = xn, m.id = c, e.wrapper.appendChild(m)
			}
			e.responseElementsBuilt = !0
		}
	}

	function Ga(e, t, r) {
		Ka(e, t);
		var n = document.querySelector("#".concat(t, "_response"));
		if (n !== null && w(n, HTMLInputElement) && (n.value = r), g.isRecaptchaCompatibilityMode) {
			var a = document.querySelector("#".concat(t, "_g_response"));
			a !== null && w(a, HTMLInputElement) && (a.value = r)
		}
	}

	function Be(e, t) {
		var r, n;
		return (r = (n = t.kills) === null || n === void 0 ? void 0 : n.includes(e)) !== null && r !== void 0 ? r : !1
	}

	function vo(e) {
		return e.chlPageData !== void 0 && e.chlPageData !== ""
	}

	function mo(e) {
		return !vo(e) && !Be("pac", e)
	}

	function Xt(e, t) {
		var r, n = (r = t.params.size) !== null && r !== void 0 ? r : te.Normal,
			a = t.mode;
		switch (a) {
			case ve.NonInteractive:
			case ve.Managed:
				switch (e.style.opacity = "", e.style.position = "", e.style.left = "", e.style.top = "", e.style.visibility = "", e.style.pointerEvents = "", e.style.zIndex = "", n) {
					case te.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case te.Invisible:
						x('Invalid value for parameter "size", expected "'.concat(te.Compact, '", "').concat(te.Flexible, '", or "').concat(te.Normal, '", got "').concat(n, '"'), 2817);
					case te.Normal:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case te.Flexible:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break;
					default:
						break
				}
				break;
			case ve.Invisible:
				Be("floating-invisible", t) ? (e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden") : (e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				x('Invalid value for parameter "mode", expected "'.concat(ve.NonInteractive, '", "').concat(ve.Managed, '" or "').concat(ve.Invisible, '", got "').concat(String(a), '"'), 2818)
		}
	}

	function qa(e) {
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"
	}

	function go(e, t) {
		var r = t.get("turnstile_iframe_alt");
		r !== void 0 && r !== "" && (e.title = r)
	}

	function qe(e, t) {
		return e.shadow.querySelector("#".concat(t))
	}

	function ho(e, t) {
		var r, n;
		return (r = (n = e.wrapper.parentNode) === null || n === void 0 ? void 0 : n.querySelector("#".concat(t, "-fr"))) !== null && r !== void 0 ? r : null
	}

	function yo(e) {
		var t, r;
		return ((r = e.feedbackPopup) === null || r === void 0 ? void 0 : r.closed) === !0 ? (e.feedbackPopup = void 0, e.feedbackPopupOrigin = void 0, null) : (t = e.feedbackPopup) !== null && t !== void 0 ? t : null
	}

	function nr(e, t) {
		var r, n, a = (r = (n = ho(e, t)) === null || n === void 0 ? void 0 : n.contentWindow) !== null && r !== void 0 ? r : null;
		if (a !== null) return {
			targetOrigin: e.feedbackIframeOrigin,
			targetWindow: a
		};
		var u = yo(e);
		return {
			targetOrigin: u === null ? void 0 : e.feedbackPopupOrigin,
			targetWindow: u
		}
	}

	function _o(e) {
		if ((typeof e == "undefined" ? "undefined" : U(e)) !== "object" || e === null) return !1;
		var t = e;
		return t.source === J && typeof t.event == "string" && typeof t.widgetId == "string"
	}

	function bo(e) {
		return e.isTrusted && _o(e.data)
	}

	function Eo(e) {
		return Pa(e.origin, !1)
	}

	function xo(e, t, r) {
		var n, a, u = (n = (a = qe(t, r)) === null || a === void 0 ? void 0 : a.contentWindow) !== null && n !== void 0 ? n : null,
			c = nr(t, r).targetWindow,
			l = function(E) {
				return E !== null && e.source === E
			},
			p = e.data.event;
		switch (p) {
			case "requestFeedbackData":
			case "closeFeedbackReportIframe":
				return l(c);
			case "refreshRequest":
				return l(u) || e.data.reason === "feedback_refresh" && l(c);
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
				return l(u);
			default: {
				var f = p;
				return !1
			}
		}
	}

	function Zr() {
		return Da(window)
	}

	function Yt(e, t, r) {
		return e === null ? t : Oa(e) ? e === "true" : (R(r(e)), t)
	}

	function wo() {
		try {
			var e = mt();
			if (!e) return;
			var t = e.src,
				r = !0,
				n = !1,
				a = void 0;
			try {
				for (var u = performance.getEntriesByType("resource")[Symbol.iterator](), c; !(r = (c = u.next()).done); r = !0) {
					var l = c.value;
					if (w(l, PerformanceResourceTiming) && l.name.includes(t)) return l
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
	var Xa = (function() {
			var e = function(i, d, v, s, o, T) {
					return dn(function() {
						var h, y, D, N, F, B, me, ge, we, Ie, ue;
						return hn(this, function($) {
							switch ($.label) {
								case 0:
									if (y = function(he, ye) {
											var q = g.widgetMap.get(d);
											q !== i || q.isComplete || q.isResetting || q.response !== s || (!he && ye !== void 0 && ye !== "" && R(ye), a(q, v, he))
										}, D = i.params.sitekey, N = Zr(), N === void 0 || N === "") return R("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(i, v, !1), [2];
									F = "h/".concat("g", "/"), B = new URL(N), me = "https", ge = "", we = "".concat(me, "://").concat(B.host, "/cdn-cgi/challenge-platform/").concat(F, "c/").concat(T).concat(ge), $.label = 1;
								case 1:
									return $.trys.push([1, 3, , 4]), [4, fetch(we, {
										body: JSON.stringify({
											secondaryToken: o,
											sitekey: D
										}),
										headers: {
											"Content-Type": "application/json"
										},
										method: "POST",
										redirect: "manual"
									})];
								case 2:
									return Ie = $.sent(), Ie.status === 200 ? y(!0) : y(!1, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), [3, 4];
								case 3:
									return ue = $.sent(), y(!1, "Error contacting Turnstile, aborting clearance redemption."), [3, 4];
								case 4:
									return [2]
							}
						})
					})()
				},
				t = function(i, d, v) {
					if (i.params.retry === Pt.Auto || v) {
						var s;
						if (i.feedbackOpen) {
							i.pendingRetry = {
								crashed: v
							};
							return
						}
						var o = v ? 0 : 1e3 * 2 + ((s = i.params["retry-interval"]) !== null && s !== void 0 ? s : 0);
						i.retryTimeout = window.setTimeout(function() {
							var T = v ? re.CrashedRetry : re.FailureRetry;
							_(T, d)
						}, o)
					}
				},
				r = function(i, d, v) {
					return i.params.execution === ct.Render ? !0 : (d === re.CrashedRetry || d === re.FailureRetry || d === re.CheckDelays || d === re.UpgradeReload) && i.params.execution === ct.Execute && v
				},
				n = function(i, d, v) {
					if (i.feedbackOpen && (i.feedbackOpen = !1, i.feedbackPopupCloseCheck !== void 0 && (window.clearInterval(i.feedbackPopupCloseCheck), i.feedbackPopupCloseCheck = void 0), ba(), window.postMessage({
							event: "feedbackClose",
							source: J,
							widgetId: v
						}, "*"), i.pendingRetry)) {
						var s = i.pendingRetry.crashed;
						i.pendingRetry = void 0, t(i, d, s)
					}
				},
				a = function(i, d, v) {
					var s;
					i.response === void 0 && x("[Internal Error] Widget was completed but no response was given", 1362), i.isExecuting = !1, i.isComplete = !0, Ga(i, d, i.response), (s = i.cbSuccess) === null || s === void 0 || s.call(i, i.response, v)
				},
				u = function(i) {
					if (!i) return [];
					for (var d = i.attributes, v = d.length, s = new Array(v), o = 0; o < v; o++) s[o] = d[o].name;
					return s
				},
				c = function() {
					for (var i = {}, d = [], v = document.querySelectorAll("*"), s = 0; s < v.length && d.length < 50; s++) {
						var o = v[s].tagName.toLowerCase();
						o.includes("-") && !i[o] && (i[o] = !0, d.push(o))
					}
					return d
				},
				l = function(i, d, v) {
					if (i.rcV = d, 0) var s
				},
				p = function() {
					var i = "abcdefghijklmnopqrstuvwxyz0123456789",
						d = i.length,
						v;
					do {
						v = "";
						for (var s = 0; s < 5; s++) v += i.charAt(Math.floor(Math.random() * d))
					} while (g.widgetMap.has(v));
					return v
				},
				f = function(i, d, v) {
					for (; i.msgQueue.length > 0;) {
						var s = i.msgQueue.pop();
						se(v, {
							cs: s === dt.Execute ? yt(i) : void 0,
							event: s,
							source: J,
							widgetId: d
						}, i.iframeOrigin)
					}
				},
				m = function(i) {
					return i.isExecuting
				},
				E = function(i, d) {
					if (d) {
						var v = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
							s = [],
							o = !0,
							T = !1,
							h = void 0;
						try {
							for (var y = v[Symbol.iterator](), D; !(o = (D = y.next()).done); o = !0) {
								var N = D.value;
								Object.getOwnPropertyDescriptor(d, N) !== void 0 && d[N] !== void 0 && d[N] !== i.params[N] && s.push(N)
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
						s.length > 0 && x("The parameters ".concat(v.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(s.join(",")), 3618), d.action !== void 0 && d.action !== "" && (Fr(d.action) || x('Invalid input for optional parameter "action", got "'.concat(d.action, '"'), 3604), i.action = d.action), d.cData !== void 0 && d.cData !== "" && (Hr(d.cData) || x('Invalid input for optional parameter "cData", got "'.concat(d.cData, '"'), 3605), i.cData = d.cData), d["after-interactive-callback"] !== void 0 && (i.cbAfterInteractive = d["after-interactive-callback"]), d["before-interactive-callback"] !== void 0 && (i.cbBeforeInteractive = d["before-interactive-callback"]), d.callback !== void 0 && (i.cbSuccess = d.callback), d["expired-callback"] !== void 0 && (i.cbExpired = d["expired-callback"]), d["timeout-callback"] !== void 0 && (i.cbTimeout = d["timeout-callback"]), d["error-callback"] !== void 0 && (i.cbError = d["error-callback"]), d["unsupported-callback"] !== void 0 && (i.cbUnsupported = d["unsupported-callback"]), d.chlPageData !== void 0 && d.chlPageData !== "" && (i.chlPageData = d.chlPageData)
					}
				},
				A = function(i, d, v) {
					i === "explicit" && d !== void 0 && E(d, v), R(co(i))
				},
				M = function(i) {
					_(re.Api, i, Se(ua, g))
				},
				_ = function(i, d, v) {
					var s, o, T = P(d);
					T === null && x("Nothing to reset found for provided container", 3329);
					var h = g.widgetMap.get(T);
					h === void 0 && x("Widget ".concat(T, " to reset was not found."), 3331), ht(h, v);
					var y = h.isExecuted;
					h.isResetting = !0, h.response = void 0, h.mode = void 0, h.msgQueue = [], h.isComplete = !1, h.isExecuted = !1, h.isExecuting = !1, h.isExpired = !1, h.isFailed = !1, h.isInitialized = !1, h.isStale = !1, h.isOverrunning = !1, h.cfChlOut = void 0, h.cfChlOutS = void 0, h.errorCode = void 0, h.frMd = void 0, h.autoFeedbackSent = !1, h.watchcat.overrunBeginSeq = 0, h.watchcat.lastAckedSeq = 0, h.watchcat.seq = 0, r(h, i, y) && (h.msgQueue.push(dt.Execute), h.isExecuted = !0, h.isExecuting = !0);
					var D = X(T),
						N = h.shadow.querySelector("#".concat(D));
					N === null && x("Widget ".concat(T, " to reset was not found."), 3330), (h.params.appearance === ae.InteractionOnly || h.params.appearance === ae.Execute) && qa(N), h.params.sitekey === null && x("Unexpected Error: Sitekey is null", 3347);
					var F = N.cloneNode();
					w(F, HTMLIFrameElement) || x("Unexpected Error: Cloned widget is not an iframe", 3348);
					var B = Ar(T, h.params.sitekey, h.params, (s = h.rcV) !== null && s !== void 0 ? s : Ae, !1, "g", i, g.scriptUrlParsed, jr(h));
					F.src = B, Ba(F, h), h.iframeOrigin = Ye(B), (o = N.parentNode) === null || o === void 0 || o.replaceChild(F, N), $r(h, D), h.retryTimeout !== void 0 && window.clearTimeout(h.retryTimeout)
				},
				L = function(i, d) {
					var v = X(i),
						s = ["input#".concat(v, "_response"), "input#".concat(v, "_g_response")];
					document.querySelectorAll(s.join(", ")).forEach(function(o) {
						o.remove()
					}), d.shadow.querySelectorAll(s.join(", ")).forEach(function(o) {
						o.remove()
					}), bt(v), $e(d), d.wrapper.remove(), d.retryTimeout !== void 0 && window.clearTimeout(d.retryTimeout), g.widgetMap.delete(i), Et(g)
				},
				I = function(i) {
					var d = Se(la, g),
						v = P(i),
						s = v === null ? void 0 : g.widgetMap.get(v);
					if (v === null || s === void 0) {
						R("Nothing to remove found for the provided container.");
						return
					}
					gt(g.gcs, d), ht(s, d), L(v, s)
				},
				O = function() {
					var i = ce(g.widgetMap.keys()),
						d = !0,
						v = !1,
						s = void 0;
					try {
						for (var o = i[Symbol.iterator](), T; !(d = (T = o.next()).done); d = !0) {
							var h = T.value,
								y = g.widgetMap.get(h),
								D = X(h);
							y !== void 0 && (bt(D), $e(y), _(re.UpgradeReload, D))
						}
					} catch (N) {
						v = !0, s = N
					} finally {
						try {
							!d && o.return != null && o.return()
						} finally {
							if (v) throw s
						}
					}
				},
				k = function(i, d, v, s) {
					var o, T, h, y, D, N, F, B, me, ge, we, Ie = Y(),
						ue, $;
					if (typeof i == "string") {
						var pe = Gt(i);
						if (pe === null) {
							var he;
							try {
								he = document.querySelector(i)
							} catch (So) {
								x('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(i, '"'), 3586)
							}
							he === null && x('Unable to find a container for "'.concat(i, '"'), 3585), ue = he
						} else {
							var ye, q = g.widgetMap.get(pe),
								At = (ye = q == null ? void 0 : q.wrapper.parentElement) !== null && ye !== void 0 ? ye : null;
							if (At !== null && Wa(v, q)) ue = At, $ = {
								widget: q,
								widgetId: pe
							};
							else return q !== void 0 && Pe(pe, q, s), A(v, q, d), X(pe)
						}
					} else w(i, HTMLElement) ? ue = i : x('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
					if ($ === void 0) {
						var De = Gt(ue);
						if (De !== null) {
							var _e = g.widgetMap.get(De);
							if (_e !== void 0 && Wa(v, _e) && _e.wrapper.parentElement === ue) $ = {
								widget: _e,
								widgetId: De
							};
							else return _e && Pe(De, _e, s), A(v, _e, d), X(De)
						}
					}
					var Je = Zr();
					if (Je === void 0 || Je === "") return x("Turnstile cannot determine its page location", 3607);
					var et = Ao(ue);
					if (et !== void 0) {
						var b = Object.assign(et, d),
							Fe = b.action,
							He = b.cData,
							St = b.chlPageData,
							Ce = b.sitekey;
						b.theme = (o = b.theme) !== null && o !== void 0 ? o : Lt.Auto, b.retry = (T = b.retry) !== null && T !== void 0 ? T : Pt.Auto, b.execution = (h = b.execution) !== null && h !== void 0 ? h : ct.Render, b.appearance = (y = b.appearance) !== null && y !== void 0 ? y : ae.Always, b["retry-interval"] = Fa(b["retry-interval"], Tn), b["expiry-interval"] = Fa(b["expiry-interval"], (Jn - jn) * 1e3), b.size = (D = b.size) !== null && D !== void 0 ? D : te.Normal;
						var Rt = b.callback,
							ir = b["expired-callback"],
							tt = b["timeout-callback"],
							or = b["after-interactive-callback"],
							It = b["before-interactive-callback"],
							rt = b["error-callback"],
							nt = b["unsupported-callback"];
						typeof Ce != "string" && x('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof Ce == "undefined" ? "undefined" : U(Ce), '"'), 3588), Ca(Ce) || x('Invalid input for parameter "sitekey", got "'.concat(Ce, '"'), 3589), Ur(b.size) || x('Invalid type for parameter "size", expected normal|compact, got "'.concat(String(b.size), '" ').concat(U(b.size)), 3590), Lr(b.theme) || x('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(String(b.theme), '" ').concat(U(b.theme)), 3591), Nr(b.retry) || x('Invalid type for parameter "retry", expected never|auto, got "'.concat(String(b.retry), '" ').concat(U(b.retry)), 3592), (b.language === void 0 || b.language === "") && (b.language = "auto"), Br(b.language) || (R('Invalid language value: "'.concat(b.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), b.language = "auto"), qr(b.appearance) || x('Unknown appearance value: "'.concat(String(b.appearance), ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), Jr(b.execution) || x('Unknown execution value: "'.concat(String(b.execution), ", expected either: 'render' or 'execute'."), 3601), Pr(b["retry-interval"]) || x('Invalid retry-interval value: "'.concat(b["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), Dr(b["expiry-interval"]) || x('Invalid expiry-interval value: "'.concat(b["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
						var Oe = (N = b["refresh-expired"]) !== null && N !== void 0 ? N : Ge.Auto;
						Wr(Oe) ? b["refresh-expired"] = Oe : x('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(String(Oe), '" ').concat(typeof Oe == "undefined" ? "undefined" : U(Oe)), 3603);
						var Te = (F = b["refresh-timeout"]) !== null && F !== void 0 ? F : lt.Auto;
						Vr(Te) ? b["refresh-timeout"] = Te : x('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(String(Te), '" ').concat(typeof Te == "undefined" ? "undefined" : U(Te)), 3603), Fr(Fe) || x('Invalid input for optional parameter "action", got "'.concat(Fe, '"'), 3604), Hr(He) || x('Invalid input for optional parameter "cData", got "'.concat(He, '"'), 3605);
						var G = document.createElement("iframe"),
							at = document.createElement("div"),
							Ct = at.attachShadow({
								mode: "closed"
							}),
							Z = p(),
							be = X(Z),
							Ot = [],
							de = b.execution === ct.Render;
						de && Ot.push(dt.Execute);
						var je = Qe(g.gcs);
						gt(je, s), g.lastWidgetIdx++;
						var ur = {},
							it = lr(Ue({
								action: Fe,
								assetCtxCallback: b._acCb,
								autoFeedbackSent: !1,
								cData: He,
								cbAfterInteractive: or,
								cbBeforeInteractive: It,
								cbError: rt,
								cbExpired: ir,
								cbSuccess: Rt,
								cbTimeout: tt,
								cbUnsupported: nt,
								chlPageData: St,
								feedbackOpen: !1,
								gcs: je,
								idx: g.lastWidgetIdx,
								isComplete: !1,
								isExecuted: de,
								isExecuting: de,
								isExpired: !1,
								isFailed: !1,
								isInitialized: !1,
								isOverrunning: !1,
								isResetting: !1,
								isStale: !1,
								msgQueue: Ot,
								params: b,
								rcV: Ae,
								renderSource: v,
								responseElementsBuilt: !1,
								shadow: Ct,
								watchcat: {
									lastAckedSeq: 0,
									missingWidgetWarning: !1,
									overrunBeginSeq: 0,
									seq: 0
								}
							}, ur), {
								widgetInitStartTimeTsMs: 0,
								widgetParamsStartTimeTsMs: 0,
								widgetRenderEndTimeTsMs: 0,
								widgetRenderStartTimeTsMs: Ie,
								wrapper: at
							});
						g.widgetMap.set(Z, it), Or(g);
						var le = g.widgetMap.get(Z);
						le === void 0 && x("Turnstile Initialization Error ", 3606), le.chlPageData !== void 0 && le.chlPageData !== "" && rn(), G.style.display = "none", G.style.border = "none", G.style.overflow = "hidden";
						var un = Ar(Z, Ce, b, Ae, !1, "g", re.New, g.scriptUrlParsed, jr(le));
						le.iframeOrigin = Ye(un), G.setAttribute("src", un), Ba(G, le);
						var ln = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
						return K((B = (we = document.featurePolicy) === null || we === void 0 || (ge = we.features) === null || ge === void 0 ? void 0 : ge.call(we)) !== null && B !== void 0 ? B : [], cr) && ln.push(cr), G.setAttribute("allow", ln.join("; ")), G.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), G.id = be, G.tabIndex = (me = b.tabindex) !== null && me !== void 0 ? me : 0, G.title = "Widget containing a Cloudflare security challenge", Ct.appendChild(G), Ka(le, be), $ && L($.widgetId, $.widget), ue.appendChild(at), le.widgetRenderEndTimeTsMs = Y(), be
					}
				},
				oe = function(i, d) {
					return k(i, d, "explicit", Se(ia, g))
				},
				ne = function() {
					var i = [yn, _n];
					g.isRecaptchaCompatibilityMode && i.push(bn);
					var d = Se(fa, g);
					document.querySelectorAll(i.join(", ")).forEach(function(v) {
						k(v, void 0, "implicit", d)
					})
				},
				H = function() {
					var i, d = -1,
						v = !0,
						s = !1,
						o = void 0;
					try {
						for (var T = g.widgetMap[Symbol.iterator](), h; !(v = (h = T.next()).done); v = !0) {
							var y = ze(h.value, 2),
								D = y[0],
								N = y[1];
							d < N.idx && (i = D, d = N.idx)
						}
					} catch (F) {
						s = !0, o = F
					} finally {
						try {
							!v && T.return != null && T.return()
						} finally {
							if (s) throw o
						}
					}
					return d === -1 && x("Could not find widget", 43778), i
				},
				C = wo(),
				V = function(i) {
					var d = Reflect.get(i, "source");
					if (d === J) {
						var v = Reflect.get(i, "widgetId");
						if (!(typeof v != "string" || v === "" || !g.widgetMap.has(v))) {
							var s = X(v),
								o = g.widgetMap.get(v);
							if (o !== void 0) switch (i.event) {
								case "init": {
									o.widgetInitStartTimeTsMs = Y(), o.kills = i.kills, Jt(o) && (o.gcs.length = 0);
									var T = o.shadow.querySelector("#".concat(s));
									w(T, HTMLElement) || x("Cannot initialize Widget, Element not found (#".concat(s, ")."), 3074), o.mode = i.mode, o.nextRcV = i.nextRcV, o.mode === ve.Invisible && o.params["refresh-expired"] === Ge.Manual && R("refresh-expired=manual is impossible in invisible mode, consider using '".concat(Ge.Auto, "' or '").concat(Ge.Never, ".'")), o.mode !== ve.Managed && o.params["refresh-timeout"] !== lt.Auto && R("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), o.params.appearance === ae.Always || o.isExecuting && o.params.appearance === ae.Execute ? Xt(T, o) : qa(T), T.style.display = "";
									var h = qe(o, s);
									h || x("Received state for an unknown widget: ".concat(i.widgetId), 3078), se(h, {
										event: "init",
										source: J,
										widgetId: i.widgetId
									}, o.iframeOrigin);
									break
								}
								case "translationInit": {
									var y = o.shadow.querySelector("#".concat(s));
									w(y, HTMLElement) || x("Cannot initialize Widget, Element not found (#".concat(s, ")."), 3074);
									var D = new Map;
									o.displayLanguage = i.displayLanguage, o.displayRtl = i.displayRtl, Object.keys(i.translationData).forEach(function(le) {
										D.set(le, i.translationData[le])
									}), go(y, D);
									break
								}
								case "languageUnsupported": {
									R("Language ".concat(o.params.language, " is not supported, falling back to: ").concat(i.fallback, ".")), o.displayLanguage = i.fallback;
									break
								}
								case "reject": {
									var N = o.shadow.querySelector("#".concat(s));
									o.isExecuting = !1, w(N, HTMLElement) || x("Cannot initialize Widget, Element not found (#".concat(s, ")."), 3075);
									var F = Reflect.get(i, "reason");
									if (F === "unsupported_browser") {
										var B;
										(B = o.cbUnsupported) === null || B === void 0 || B.call(o)
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
									if (l(o, Ae, i.widgetId), o.response = i.token, i.aC !== void 0 && i.aC !== "") {
										var me;
										(me = o.assetCtxCallback) === null || me === void 0 || me.call(o, i.aC)
									}
									if (i.scs !== void 0 && i.scs !== "" && !Be("scs", o) && (o.scs = i.scs, o.params["session-continuity-persist"] === !0 && !Be("scs_persist", o))) {
										var ge = o.params.sitekey;
										if (ge !== null && ge !== "") {
											var we = "".concat(dr).concat(ge);
											try {
												localStorage.setItem(we, i.scs)
											} catch (le) {}
										}
									}
									i.sToken !== void 0 && i.sToken !== "" ? e(o, i.widgetId, s, i.token, i.sToken, i.chlId) : a(o, s, !1);
									break
								}
								case "fail": {
									var Ie = Reflect.get(i, "rcV");
									if (typeof Ie == "string" && Ie !== "" && l(o, Ie, v), i.cfChlOut !== void 0 && i.cfChlOut !== "" && (o.cfChlOut = i.cfChlOut), i.cfChlOutS !== void 0 && i.cfChlOutS !== "" && (o.cfChlOutS = i.cfChlOutS), i.code !== void 0 && i.code !== 0 && (o.errorCode = i.code), i.aC !== void 0 && i.aC !== "") {
										var ue;
										(ue = o.assetCtxCallback) === null || ue === void 0 || ue.call(o, i.aC)
									}
									o.isExecuting = !1, o.isFailed = !0, o.isInitialized = !0, i.frMd !== void 0 && i.frMd !== "" && (o.frMd = i.frMd), $r(o, s);
									var $ = o.cbError,
										pe = i.code === Wt || i.code === Vt,
										he = i.code !== zn;
									if (pe) {
										var ye = qe(o, s);
										ye && se(ye, {
											event: "forceFail",
											source: J,
											widgetId: i.widgetId
										}, o.iframeOrigin)
									}
									if ($ !== void 0) {
										var q;
										$(String((q = i.code) !== null && q !== void 0 ? q : Gn)) === !0 ? he && o.params.retry === Pt.Auto && !o.isResetting && t(o, s, pe) : (i.code !== void 0 && i.code !== 0 && R("Error: ".concat(i.code, ".")), he && t(o, s, pe))
									} else i.code !== void 0 && i.code !== 0 ? (he && t(o, s, pe), x("Error: ".concat(i.code), 3076)) : t(o, s, !1);
									break
								}
								case "feedbackInit": {
									i.cfChlOut !== void 0 && i.cfChlOut !== "" && (o.cfChlOut = i.cfChlOut), i.cfChlOutS !== void 0 && i.cfChlOutS !== "" && (o.cfChlOutS = i.cfChlOutS);
									var At = nr(o, s).targetWindow;
									if (At) {
										R("A feedback report form is already opened for this widget.");
										return
									}
									if (o.autoFeedbackSent !== !0 && !Be("feedback-report-auto-submit", o)) {
										var De = ya(o, i.feedbackOrigin, i.rayId, o.frMd, g.scriptUrlParsed);
										De && (o.autoFeedbackSent = !0)
									}
									if (o.feedbackOpen = !0, o.retryTimeout !== void 0) {
										var _e, Je;
										clearTimeout(o.retryTimeout), o.retryTimeout = void 0, (Je = (_e = o).pendingRetry) !== null && Je !== void 0 || (_e.pendingRetry = {
											crashed: !1
										})
									}
									_a(), window.postMessage({
										event: "feedbackOpen",
										source: J,
										widgetId: i.widgetId
									}, "*"), Cr(s, o, i.feedbackOrigin, g.scriptUrlParsed, function() {
										n(o, s, i.widgetId)
									});
									break
								}
								case "requestFeedbackData": {
									var et = qe(o, s);
									w(et, HTMLElement) || x("Received state for an unknown widget: #".concat(s, " / ").concat(i.widgetId), 3078), se(et, {
										event: "requestTurnstileResults",
										source: J,
										widgetId: i.widgetId
									}, o.iframeOrigin);
									break
								}
								case "turnstileResults": {
									var b, Fe, He, St = nr(o, s),
										Ce = St.targetOrigin,
										Rt = St.targetWindow;
									if (!Rt) break;
									Tr(Rt, {
										cfChlOut: (b = o.cfChlOut) !== null && b !== void 0 ? b : i.cfChlOut,
										cfChlOutS: (Fe = o.cfChlOutS) !== null && Fe !== void 0 ? Fe : i.cfChlOutS,
										errorCode: o.errorCode,
										event: "feedbackData",
										frMd: (He = o.frMd) !== null && He !== void 0 ? He : i.frMd,
										mode: i.mode,
										rayId: i.rayId,
										rcV: i.rcV,
										sitekey: i.sitekey,
										source: J,
										widgetId: i.widgetId
									}, Ce);
									break
								}
								case "closeFeedbackReportIframe": {
									var ir = nr(o, s).targetWindow;
									ir || x("Received state for an unknown widget: ".concat(i.widgetId), 3078), bt("".concat(s, "-fr")), $e(o), n(o, s, i.widgetId);
									break
								}
								case "tokenExpired": {
									var tt, or = i.token;
									o.isExpired = !0, (tt = o.cbExpired) === null || tt === void 0 || tt.call(o, or), o.params["refresh-expired"] === Ge.Auto && !o.isResetting && _(re.AutoExpire, s);
									break
								}
								case "interactiveTimeout": {
									l(o, Ae, i.widgetId), $r(o, s);
									var It = o.cbTimeout;
									if (It ? It() : o.params["refresh-timeout"] === lt.Never && !o.isResetting && R("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), o.params["refresh-timeout"] === lt.Auto && !o.isResetting) {
										var rt = o.cbAfterInteractive;
										rt == null || rt(), _(re.AutoTimeout, s)
									}
									break
								}
								case "refreshRequest": {
									l(o, Ae, i.widgetId), bt(s), $e(o), _(re.ManualRefresh, s);
									break
								}
								case "reloadRequest": {
									l(o, i.nextRcV, i.widgetId), _(oo(i.trigger) ? i.trigger : re.Api, s);
									break
								}
								case "reloadApiJsRequest": {
									if (Be("reload", o)) {
										wt(i.widgetId);
										break
									}
									if (ar !== void 0) {
										wt(i.widgetId);
										break
									}
									if (so()) {
										wt(i.widgetId);
										break
									}
									Ya() ? (g.apiJsMismatchReloadAttempts++, fo(), po(i.widgetId)) : wt(i.widgetId);
									break
								}
								case "interactiveBegin": {
									var nt, Oe = o.shadow.querySelector("#".concat(s));
									w(Oe, HTMLElement) || x("Cannot layout widget, Element not found (#".concat(s, ")."), 3076), (nt = o.cbBeforeInteractive) === null || nt === void 0 || nt.call(o), o.params.appearance === ae.InteractionOnly && Xt(Oe, o);
									break
								}
								case "interactiveEnd": {
									var Te;
									(Te = o.cbAfterInteractive) === null || Te === void 0 || Te.call(o);
									break
								}
								case "widgetStale": {
									o.isStale = !0;
									break
								}
								case "requestExtraParams": {
									o.widgetParamsStartTimeTsMs = Y();
									var G = qe(o, s);
									G || x("Received state for an unknown widget: ".concat(i.widgetId), 3078), o.isResetting = !1;
									var at = {},
										Ct = Y(),
										Z = La(o, G),
										be = mo(o) ? Un(o.wrapper) : void 0,
										Ot = {
											"d.cT": c(),
											"ht.atrs": u(document.body.parentElement),
											"pg.ref": document.referrer,
											pi: {
												ffp: Pn(o.wrapper),
												ii: window.self !== window.top,
												lH: window.location.href,
												mL: document.querySelectorAll("meta").length,
												pac: be == null ? void 0 : be.pac,
												pad: be == null ? void 0 : be.pad,
												pfp: qn(document, Sn, Rn, Qr),
												sL: document.scripts.length,
												sR: o.wrapper.shadowRoot === null,
												ssL: io(document, Qr),
												t: "".concat(document.title.length, "|").concat(wr(document.title)),
												tL: Bn(document, Qr),
												vDa: Z.appearance,
												vDeh: Z.expectedHidden,
												vDhp: Z.hostParent,
												vDhr: Z.expectedHiddenReason,
												vDie: Z.isExecuting,
												vDmd: Z.mode,
												vDmt: Z.mount,
												vDrs: Z.reasons,
												vDuh: Z.unexpectedHidden,
												vDvp: Z.viewport,
												wp: Nn(o.wrapper),
												xp: Ln(o.wrapper).slice(0, In)
											},
											"w.iW": window.innerWidth
										},
										de = o.scs;
									if ((de === void 0 || de === "") && o.params["session-continuity-persist"] === !0 && !Be("scs_persist", o)) {
										var je = o.params.sitekey;
										if (je !== null && je !== "") {
											var ur = "".concat(dr).concat(je);
											try {
												var it;
												de = (it = localStorage.getItem(ur)) !== null && it !== void 0 ? it : void 0
											} catch (le) {}
										}
									}
									de !== void 0 && de !== "" && de.length > Cn && (de = void 0), se(G, Ue({
										action: o.action,
										apiJsMismatchReloadAttempts: g.apiJsMismatchReloadAttempts,
										apiJsMismatchReloadCompletedCount: g.apiJsMismatchReloadCompletedCount,
										apiJsResourceTiming: C === void 0 ? void 0 : uo(C),
										appearance: o.params.appearance,
										au: g.scriptUrl,
										cData: o.cData,
										ch: "45bf4db1da27",
										chlPageData: o.chlPageData,
										cs: yt(o),
										event: "extraParams",
										execution: o.params.execution,
										"expiry-interval": o.params["expiry-interval"],
										language: o.params.language,
										rcV: o.rcV,
										"refresh-expired": o.params["refresh-expired"],
										"refresh-timeout": o.params["refresh-timeout"],
										retry: o.params.retry,
										"retry-interval": o.params["retry-interval"],
										scs: de,
										source: J,
										timeExtraParamsMs: Y() - o.widgetRenderStartTimeTsMs,
										timeInitMs: o.widgetInitStartTimeTsMs - o.widgetRenderEndTimeTsMs,
										timeLoadInitMs: Y() - g.turnstileLoadInitTimeTsMs,
										timeParamsMs: o.widgetParamsStartTimeTsMs - o.widgetInitStartTimeTsMs,
										timeRenderMs: o.widgetRenderEndTimeTsMs - o.widgetRenderStartTimeTsMs,
										timeTiefMs: Y() - Ct,
										upgradeAttempts: g.upgradeAttempts,
										upgradeCompletedCount: g.upgradeCompletedCount,
										url: Zr(),
										wPr: Ot,
										widgetId: i.widgetId
									}, at), o.iframeOrigin), f(o, i.widgetId, G), o.isInitialized = !0;
									break
								}
								default:
									break
							}
						}
					}
				},
				j = function(i) {
					if (bo(i)) {
						var d = i.data;
						if (!Eo(i)) {
							R("Ignored message from wrong origin: ".concat(i.origin, "."));
							return
						}
						if (!(d.widgetId === "" || !g.widgetMap.has(d.widgetId))) {
							var v = X(d.widgetId),
								s = g.widgetMap.get(d.widgetId);
							if (s !== void 0) {
								if (!xo(i, s, v)) {
									R("Ignored message from unexpected source for event: ".concat(d.event, "."));
									return
								}
								V(d)
							}
						}
					}
				};
			g.msgHandler = j, g.internalMsgHandler = V, window.addEventListener("message", j);

			function P(S) {
				var i;
				if (typeof S == "string") {
					var d = Gt(S);
					if (d !== null) return d;
					try {
						var v = document.querySelector(S);
						return v === null ? null : P(v)
					} catch (o) {
						return null
					}
				}
				if (w(S, Element)) return Gt(S);
				var s = !!S;
				return s || g.widgetMap.size === 0 ? null : (i = H()) !== null && i !== void 0 ? i : null
			}
			var Q = {},
				fe = {
					showFeedback: function(i) {
						var d = P(i);
						if (d !== null) {
							var v = X(d),
								s = g.widgetMap.get(d);
							s !== void 0 && Cr(v, s, Xn.Custom, g.scriptUrlParsed)
						}
					}
				},
				z = lr(Ue({}, Q), {
					_private: fe,
					execute: function(i, d) {
						var v = Se(oa, g),
							s = !1,
							o = P(i);
						if (o === null) {
							var T;
							d === void 0 && x("Please provide 2 parameters to execute: container and parameters", 43521);
							var h = k(i, d, "explicit", v);
							s = !0, h == null && x("Failed to render widget", 43522), o = (T = vt(h)) !== null && T !== void 0 ? T : P(i), o === null && x("Failed to render widget", 43522)
						}
						var y = g.widgetMap.get(o);
						if (y !== void 0) {
							var D = s ? !1 : ht(y, v);
							E(y, d);
							var N = X(o);
							if (y.isExecuting) {
								R("Call to execute() on a widget that is already executing (".concat(N, "), consider using reset() before execute().")), D && jt(o, y);
								return
							}
							if (y.isExecuting = !0, y.response !== void 0 && y.response !== "") {
								var F;
								y.isExecuting = !1, R("Call to execute() on a widget that was already executed (".concat(N, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), D && jt(o, y), (F = y.cbSuccess) === null || F === void 0 || F.call(y, y.response, !1);
								return
							}
							y.isExpired && R("Call to execute on a expired-widget (".concat(N, "), consider using reset() before.")), y.isStale && (_(re.StaleExecute, N), y.isExecuting = !0), (y.isResetting || !y.isInitialized) && y.msgQueue.push(dt.Execute), y.isExecuted = !0;
							var B = qe(y, N);
							if (B || (y.isExecuting = !1, x("Widget ".concat(N, " to execute was not found"), 43522)), y.isResetting || !y.isInitialized) return;
							if (y.msgQueue.length > 0) {
								f(y, o, B), y.params.appearance === ae.Execute && Xt(B, y);
								return
							}
							y.params.appearance === ae.Execute && Xt(B, y), m(y) && se(B, {
								cs: yt(y),
								event: "execute",
								source: J,
								widgetId: o
							}, y.iframeOrigin)
						}
					},
					getResponse: function(i) {
						var d = Se(ca, g);
						if (typeof i == "undefined") {
							var v = H();
							if (v !== void 0) {
								var s = g.widgetMap.get(v);
								return s !== void 0 && Pe(v, s, d), (s == null ? void 0 : s.isExpired) === !0 && R("Call to getResponse on a widget that expired, consider refreshing the widget."), s == null ? void 0 : s.response
							}
							x("Could not find a widget", 43794)
						}
						var o = P(i);
						o === null && x("Could not find widget for provided container", 43778);
						var T = g.widgetMap.get(o);
						return T && Pe(o, T, d), T == null ? void 0 : T.response
					},
					isExpired: function(i) {
						var d, v = Se(da, g);
						if (typeof i == "undefined") {
							var s = H();
							if (s !== void 0) {
								var o, T = g.widgetMap.get(s);
								return T !== void 0 && Pe(s, T, v), (o = T == null ? void 0 : T.isExpired) !== null && o !== void 0 ? o : !1
							}
							x("Could not find a widget", 43794)
						}
						var h = P(i);
						h === null && x("Could not find widget for provided container", 43778);
						var y = g.widgetMap.get(h);
						return y && Pe(h, y, v), (d = y == null ? void 0 : y.isExpired) !== null && d !== void 0 ? d : !1
					},
					ready: function(i) {
						g.scriptWasLoadedAsync && (R("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), x("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof i != "function" && x('turnstile.ready() expected a "function" argument, got "'.concat(typeof i == "undefined" ? "undefined" : U(i), '"'), 3841);
						var d = Se(sa, g);
						gt(g.gcs, d);
						var v = !0,
							s = !1,
							o = void 0;
						try {
							for (var T = g.widgetMap[Symbol.iterator](), h; !(v = (h = T.next()).done); v = !0) {
								var y = ze(h.value, 2),
									D = y[0],
									N = y[1];
								Pe(D, N, d)
							}
						} catch (F) {
							s = !0, o = F
						} finally {
							try {
								!v && T.return != null && T.return()
							} finally {
								if (s) throw o
							}
						}
						if (g.isReady) {
							i();
							return
						}
						on.push(i)
					},
					remove: I,
					render: oe,
					reset: M
				});
			return Object.defineProperty(z, Ja, {
				configurable: !0,
				enumerable: !1,
				value: {
					clearPendingApiJsReloadRequest: function() {
						nn()
					},
					rearmTimedUpgrade: function() {
						an()
					},
					rejectPendingApiJsReloadRequest: function() {
						za()
					},
					reloadAfterUpgrade: function() {
						O()
					}
				}
			}), {
				runImplicitRender: ne,
				turnstile: z
			}
		})(),
		To = function() {
			Xa.runImplicitRender()
		},
		Qt = Xa.turnstile;

	function Ao(e) {
		var t, r, n = e.getAttribute("data-sitekey"),
			a = {
				sitekey: n
			},
			u = e.getAttribute("data-tabindex");
		u !== null && u !== "" && (a.tabindex = Number.parseInt(u, 10));
		var c = e.getAttribute("data-theme");
		c !== null && c !== "" && (Lr(c) ? a.theme = c : R('Unknown data-theme value: "'.concat(c, '".')));
		var l = e.getAttribute("data-size");
		if (l !== null && l !== "" && (Ur(l) ? a.size = l : R('Unknown data-size value: "'.concat(l, '".'))), 0) var p;
		var f = e.getAttribute("data-action");
		typeof f == "string" && (a.action = f);
		var m = e.getAttribute("data-cdata");
		typeof m == "string" && (a.cData = m);
		var E = e.getAttribute("data-retry");
		E !== null && E !== "" && (Nr(E) ? a.retry = E : R('Invalid data-retry value: "'.concat(E, ", expected either 'never' or 'auto'\".")));
		var A = e.getAttribute("data-retry-interval");
		if (A !== null && A !== "") {
			var M = Number.parseInt(A, 10);
			Pr(M) ? a["retry-interval"] = M : R('Invalid data-retry-interval value: "'.concat(A, ', expected an integer value > 0 and < 900000".'))
		}
		var _ = e.getAttribute("data-expiry-interval");
		if (_ !== null && _ !== "") {
			var L = Number.parseInt(_, 10);
			Dr(L) ? a["expiry-interval"] = L : R('Invalid data-expiry-interval value: "'.concat(L, ', expected an integer value > 0 and < 360000".'))
		}
		var I = e.getAttribute("data-refresh-expired");
		I !== null && I !== "" && (Wr(I) ? a["refresh-expired"] = I : R('Unknown data-refresh-expired value: "'.concat(I, ", expected either: 'never', 'auto' or 'manual'.")));
		var O = e.getAttribute("data-refresh-timeout");
		O !== null && O !== "" && (Vr(O) ? a["refresh-timeout"] = O : R('Unknown data-refresh-timeout value: "'.concat(O, ", expected either: 'never', 'auto' or 'manual'.")));
		var k = e.getAttribute("data-language");
		k !== null && k !== "" && (Br(k) ? a.language = k : R('Invalid data-language value: "'.concat(k, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function oe(z) {
			var S = e.getAttribute(z);
			if (!(S === null || S === "")) {
				var i = tn(S);
				return i === void 0 ? void 0 : function() {
					for (var d = arguments.length, v = new Array(d), s = 0; s < d; s++) v[s] = arguments[s];
					return i.apply(void 0, ce(v))
				}
			}
		}
		var ne = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		ne.forEach(function(z) {
			Object.assign(a, ee({}, z, oe("data-".concat(z))))
		}), a["feedback-enabled"] = (t = Yt(e.getAttribute("data-feedback-enabled"), !0, function(z) {
			return 'Invalid data-feedback-enabled value: "'.concat(z, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && t !== void 0 ? t : !0, a["response-field"] = (r = Yt(e.getAttribute("data-response-field"), !0, function(z) {
			return 'Invalid data-response-field value: "'.concat(z, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && r !== void 0 ? r : !0;
		var H = e.getAttribute("data-response-field-name");
		H !== null && H !== "" && (a["response-field-name"] = H);
		var C = e.getAttribute("data-execution");
		C !== null && C !== "" && (Jr(C) ? a.execution = C : R('Unknown data-execution value: "'.concat(C, ", expected either: 'render' or 'execute'.")));
		var V = e.getAttribute("data-appearance");
		V !== null && V !== "" && (qr(V) ? a.appearance = V : R('Unknown data-appearance value: "'.concat(V, ", expected either: 'always', 'execute', or 'interaction-only'.")));
		var j = e.getAttribute("data-offlabel-show-privacy"),
			P = Yt(j, void 0, function(z) {
				return 'Invalid data-offlabel-show-privacy value: "'.concat(z, '", expected "true" or "false".')
			});
		typeof P == "boolean" && (a["offlabel-show-privacy"] = P);
		var Q = e.getAttribute("data-offlabel-show-help"),
			fe = Yt(Q, void 0, function(z) {
				return 'Invalid data-offlabel-show-help value: "'.concat(z, '", expected "true" or "false".')
			});
		return typeof fe == "boolean" && (a["offlabel-show-help"] = fe), a
	}

	function Ya() {
		if (rn(), ja()) return !1;
		var e = Ra(window.turnstile, g);
		return e ? !0 : (an(), !1)
	}
	Ve = !1, W = na(), g.scriptWasLoadedAsync = ($t = W == null ? void 0 : W.loadedAsync) !== null && $t !== void 0 ? $t : !1, g.scriptUrl = (Zt = W == null ? void 0 : W.src) !== null && Zt !== void 0 ? Zt : "undefined", g.scriptUrlParsed = W == null ? void 0 : W.url, (W == null ? void 0 : W.params) !== void 0 && W.params !== null && (Ze = W.params.get("compat"), (Ze == null ? void 0 : Ze.toLowerCase()) === "recaptcha" ? typeof window.grecaptcha == "undefined" ? (R("Compatibility layer enabled."), g.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Qt) : R("grecaptcha is already defined. The compatibility layer will not be enabled.") : Ze !== null && R('Unknown value for api.js?compat: "'.concat(Ze, '", ignoring.')), W.params.forEach(function(e, t) {
		K(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || R('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), Ve = W.params.get("_upgrade") === "true", Re = W.params.get("onload"), Re !== null && Re !== "" && !Ve && setTimeout(function() {
		var e = tn(Re);
		e === void 0 ? (R("Unable to find onload callback '".concat(Re, "' immediately after loading, expected 'function', got '").concat(U(en(Re)), "'.")), setTimeout(function() {
			var t = tn(Re);
			t === void 0 ? R("Unable to find onload callback '".concat(Re, "' after 1 second, expected 'function', got '").concat(U(en(Re)), "'.")) : t()
		}, 1e3)) : e()
	}, 0)), xt = "turnstile" in window, xe = xt ? Ua(window.turnstile) : void 0, er = xt && Ve ? Ia(window.turnstile, g, function() {
		var e;
		window.turnstile = Qt, (e = Ua(Qt)) === null || e === void 0 || e.reloadAfterUpgrade(), Or(g)
	}) : !1, er && (xe == null || xe.clearPendingApiJsReloadRequest()), xt && Ve && !er ? (R("Turnstile upgrade state was missing. Keeping the existing Turnstile instance."), xe == null || xe.rejectPendingApiJsReloadRequest(), xe == null || xe.rearmTimedUpgrade()) : xt && !Ve ? R("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (er || (window.turnstile = Qt), Ve || ((W == null || (tr = W.params) === null || tr === void 0 ? void 0 : tr.get("render")) !== "explicit" && on.push(To), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Va, 0) : window.addEventListener("DOMContentLoaded", Va)), an());
	var $t, Zt, Ve, W, Ze, Re, xt, xe, er, tr;
})();