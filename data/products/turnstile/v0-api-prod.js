"use strict";
(function() {
	function wn(e, t, r, n, a, u, l) {
		try {
			var d = e[u](l),
				f = d.value
		} catch (p) {
			r(p);
			return
		}
		d.done ? t(f) : Promise.resolve(f).then(n, a)
	}

	function Tn(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise(function(n, a) {
				var u = e.apply(t, r);

				function l(f) {
					wn(u, n, a, l, d, "next", f)
				}

				function d(f) {
					wn(u, n, a, l, d, "throw", f)
				}
				l(void 0)
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

	function T(e, t) {
		"@swc/helpers - instanceof";
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
	}

	function Ce(e) {
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

	function bi(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter(function(a) {
				return Object.getOwnPropertyDescriptor(e, a).enumerable
			})), r.push.apply(r, n)
		}
		return r
	}

	function ft(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : bi(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
		}), e
	}

	function An(e) {
		if (Array.isArray(e)) return e
	}

	function In(e, t) {
		var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (r != null) {
			var n = [],
				a = !0,
				u = !1,
				l, d;
			try {
				for (r = r.call(e); !(a = (l = r.next()).done) && (n.push(l.value), !(t && n.length === t)); a = !0);
			} catch (f) {
				u = !0, d = f
			} finally {
				try {
					!a && r.return != null && r.return()
				} finally {
					if (u) throw d
				}
			}
			return n
		}
	}

	function Sn() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function pt(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function Ht(e, t) {
		if (e) {
			if (typeof e == "string") return pt(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pt(e, t)
		}
	}

	function $e(e, t) {
		return An(e) || In(e, t) || Ht(e, t) || Sn()
	}

	function Rn(e) {
		if (Array.isArray(e)) return pt(e)
	}

	function Cn(e) {
		if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
	}

	function kn() {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function de(e) {
		return Rn(e) || Cn(e) || Ht(e) || kn()
	}

	function On(e, t) {
		var r, n, a, u = {
				label: 0,
				sent: function() {
					if (a[0] & 1) throw a[1];
					return a[1]
				},
				trys: [],
				ops: []
			},
			l = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype),
			d = Object.defineProperty;
		return d(l, "next", {
			value: f(0)
		}), d(l, "throw", {
			value: f(1)
		}), d(l, "return", {
			value: f(2)
		}), typeof Symbol == "function" && d(l, Symbol.iterator, {
			value: function() {
				return this
			}
		}), l;

		function f(v) {
			return function(_) {
				return p([v, _])
			}
		}

		function p(v) {
			if (r) throw new TypeError("Generator is already executing.");
			for (; l && (l = 0, v[0] && (u = 0)), u;) try {
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
			} catch (_) {
				v = [6, _], n = 0
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
	var Wt = "cf-chl-widget-",
		z = "cloudflare-challenge",
		Mn = ".cf-turnstile",
		Ln = ".cf-challenge",
		Nn = ".g-recaptcha",
		Pn = "cf-turnstile-response",
		Fn = "g-recaptcha-response",
		Ze = 3e4,
		vt = 180 * 1e3,
		Dn = 1e4,
		Hn = 8e3,
		Wn = 3600 * 1e3,
		_r = "private-token",
		Un = 300,
		Vn = 10,
		Bn = 200100,
		qn = 200500,
		Jn = 300020,
		Ut = 300030,
		Vt = 300031,
		jn = 3,
		zn = 500,
		Kn = 500,
		ke = "",
		Er = "_cftscs_",
		Gn = 512;
	var se = (function(e) {
			return e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible", e
		})({}),
		Z = (function(e) {
			return e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible", e
		})({}),
		Bt = (function(e) {
			return e.Auto = "auto", e.Light = "light", e.Dark = "dark", e
		})({}),
		qt = (function(e) {
			return e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain", e
		})({}),
		Jt = (function(e) {
			return e.Never = "never", e.Auto = "auto", e
		})({}),
		et = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		mt = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		ae = (function(e) {
			return e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only", e
		})({}),
		gt = (function(e) {
			return e.Render = "render", e.Execute = "execute", e
		})({}),
		yt = (function(e) {
			return e.Execute = "execute", e
		})({}),
		ee = (function(e) {
			return e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.UpgradeReload = "upgrade_reload", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun", e
		})({});
	var Tr = function(t) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return t.length > r ? t.slice(0, r) : t
	};

	function $n(e) {
		if (!e) return "-";
		var t = function(n, a) {
			if (!n || n.tagName === "BODY") return a;
			for (var u = 1, l = n.previousElementSibling; l;) l.tagName === n.tagName && u++, l = l.previousElementSibling;
			var d = Tr(n.tagName.toLowerCase()),
				f = "".concat(d, "[").concat(u, "]");
			return t(n.parentElement, "/".concat(f).concat(a))
		};
		return t(e, "")
	}

	function Zn(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var _i = {
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

	function Ei(e) {
		return T(e, HTMLInputElement) || T(e, HTMLSelectElement) || T(e, HTMLTextAreaElement) || T(e, HTMLButtonElement)
	}

	function Ar(e) {
		return de(e.querySelectorAll("input, select, textarea, button")).filter(Ei)
	}

	function Xn(e) {
		return de(e.querySelectorAll("a")).filter(function(t) {
			return T(t, HTMLAnchorElement)
		})
	}

	function ea(e) {
		var t;
		if (!e) return "";
		var r = e.closest("form");
		if (!r) return "nf";
		var n = Ar(r),
			a = n.slice(0, 20).map(function(l) {
				var d;
				return (d = _i[l.type]) !== null && d !== void 0 ? d : "-"
			}).join(""),
			u = ["m:".concat((t = r.getAttribute("method")) !== null && t !== void 0 ? t : ""), "f:".concat(n.length), a].join("|");
		return u
	}
	var Ir = "c",
		Sr = "cp",
		Rr = "ct",
		Cr = "l",
		kr = "nl",
		xr = "n",
		Or = "r",
		Mr = "s",
		xi = "u",
		Lr = "up",
		wi = "c",
		Ti = "f",
		wr = "n",
		Ai = "d",
		Ii = "g",
		zt = "n",
		Si = "x",
		Ri = "p",
		Ci = "b",
		ki = "c",
		Oi = "e",
		Kt = "n",
		Mi = "s",
		tt = 20,
		Li = 512,
		Yn = 99,
		Ae, Ni = (Ae = {}, $(Ae, Ir, [2071475277, 2531075807, 2087764529, 2650702126, 897792407, 1900861264, 193440998, 181887339]), $(Ae, Sr, [3710748438, 194507255, 2123698751, 2088097853]), $(Ae, Rr, [3716925445, 1236122734, 1917612522]), $(Ae, Cr, [173246534, 1422232710, 2984385681, 2172846769]), $(Ae, kr, [517084052, 3937470477]), $(Ae, Or, [194507792, 1354128738, 1385023551]), $(Ae, Mr, [2172845875, 2984384787, 2901189036, 3027005952, 2088000679]), $(Ae, Lr, [1759493702, 1322218894]), Ae);

	function Fe(e) {
		var t;
		return (t = Ni[e]) !== null && t !== void 0 ? t : []
	}

	function ie(e) {
		return (e != null ? e : "").slice(0, Li).toLowerCase()
	}

	function He(e) {
		return Nr(e)
	}

	function Pi(e) {
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
		for (var l = new Set, d = 0; d < t.length; d++) l.add(He(t[d])), d + 1 < t.length && l.add(He("".concat(t[d], " ").concat(t[d + 1])));
		return l
	}

	function De(e, t) {
		return t.some(function(r) {
			return e.has(r)
		})
	}

	function jt(e) {
		return e > Yn ? "".concat(Yn, "+") : String(e)
	}

	function Gt(e) {
		if (T(e, HTMLSelectElement)) return "sl";
		if (T(e, HTMLTextAreaElement)) return "ta";
		if (T(e, HTMLButtonElement)) {
			var t = He(e.type);
			return t === 2139762449 ? "s" : t === 194507792 ? "rs" : "b"
		}
		switch (He(e.type)) {
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

	function Fi(e) {
		var t = e.getAttribute("action");
		if (t === null || t === "") return Oi;
		try {
			return new URL(t, window.location.href).origin === window.location.origin ? Mi : ki
		} catch (r) {
			return Ci
		}
	}

	function Di(e) {
		var t = e.getAttribute("method"),
			r = ie(t === null || t === "" ? "get" : t),
			n = He(r);
		return n === 193411891 ? Ii : n === 2088097853 ? Ri : n === 1125889741 ? Ai : Si
	}

	function ta(e) {
		if (e === null || e === "") return "";
		try {
			return new URL(e, window.location.href).pathname
		} catch (t) {
			return ""
		}
	}

	function ra(e) {
		var t = [],
			r = !0,
			n = !1,
			a = void 0;
		try {
			for (var u = e.attributes[Symbol.iterator](), l; !(r = (l = u.next()).done); r = !0) {
				var d = l.value;
				[2203664931, 2087944093, 2087876002, 5861160, 247325877, 3566271494].indexOf(He(d.name)) !== -1 && t.push(ie(d.value))
			}
		} catch (f) {
			n = !0, a = f
		} finally {
			try {
				!r && u.return != null && u.return()
			} finally {
				if (n) throw a
			}
		}
		return T(e, HTMLButtonElement) ? t.push(ie(e.value), ie(e.textContent)) : T(e, HTMLInputElement) && [1516724467, 2139762449].indexOf(He(e.type)) !== -1 && t.push(ie(e.value)), t
	}

	function Hi(e, t) {
		var r = [],
			n = ta(e.getAttribute("action"));
		r.push(ie(e.getAttribute("id")), ie(e.getAttribute("class")), ie(e.getAttribute("name")), ie(n));
		var a = !0,
			u = !1,
			l = void 0;
		try {
			for (var d = t.slice(0, tt)[Symbol.iterator](), f; !(a = (f = d.next()).done); a = !0) {
				var p = f.value,
					v;
				(v = r).push.apply(v, de(ra(p)))
			}
		} catch (I) {
			u = !0, l = I
		} finally {
			try {
				!a && d.return != null && d.return()
			} finally {
				if (u) throw l
			}
		}
		var _ = !0,
			w = !1,
			L = void 0;
		try {
			for (var x = de(e.querySelectorAll("label")).slice(0, tt)[Symbol.iterator](), N; !(_ = (N = x.next()).done); _ = !0) {
				var k = N.value;
				r.push(ie(k.textContent))
			}
		} catch (I) {
			w = !0, L = I
		} finally {
			try {
				!_ && x.return != null && x.return()
			} finally {
				if (w) throw L
			}
		}
		return r.join(" ")
	}

	function Wi(e, t, r) {
		var n = [];
		n.push(ie(e.getAttribute("id")), ie(e.getAttribute("class")));
		var a = !0,
			u = !1,
			l = void 0;
		try {
			for (var d = t.slice(0, tt)[Symbol.iterator](), f; !(a = (f = d.next()).done); a = !0) {
				var p = f.value,
					v;
				(v = n).push.apply(v, de(ra(p)))
			}
		} catch (O) {
			u = !0, l = O
		} finally {
			try {
				!a && d.return != null && d.return()
			} finally {
				if (u) throw l
			}
		}
		var _ = !0,
			w = !1,
			L = void 0;
		try {
			for (var x = r.slice(0, tt)[Symbol.iterator](), N; !(_ = (N = x.next()).done); _ = !0) {
				var k = N.value,
					I = ta(k.getAttribute("href"));
				n.push(ie(k.textContent), ie(I))
			}
		} catch (O) {
			w = !0, L = O
		} finally {
			try {
				!_ && x.return != null && x.return()
			} finally {
				if (w) throw L
			}
		}
		return n.join(" ")
	}

	function na(e, t) {
		var r = !1,
			n = !1,
			a = !1,
			u = 0,
			l = !0,
			d = !1,
			f = void 0;
		try {
			for (var p = e[Symbol.iterator](), v; !(l = (v = p.next()).done); l = !0) {
				var _ = v.value;
				if (T(_, HTMLTextAreaElement)) {
					a = !0;
					continue
				}
				if (T(_, HTMLInputElement)) {
					var w = He(_.type);
					w === 165454089 ? r = !0 : w === 2087597251 ? n = !0 : w === 1569157018 && u++
				}
			}
		} catch (I) {
			d = !0, f = I
		} finally {
			try {
				!l && p.return != null && p.return()
			} finally {
				if (d) throw f
			}
		}
		var L = u > 0,
			x = Pi(t),
			N = De(x, Fe(Cr)),
			k = De(x, Fe(Or));
		return k && !N && (r || L) ? Or : L && u <= 1 && N ? Cr : L && (u > 1 || De(x, Fe(Mr))) ? Mr : De(x, Fe(Ir)) ? Ir : n || De(x, Fe(Lr)) ? Lr : a && De(x, Fe(Sr)) ? Sr : De(x, Fe(Rr)) ? Rr : r && De(x, Fe(kr)) ? kr : xi
	}

	function ht(e, t, r, n, a, u, l, d) {
		return [e, t, r, jt(n), jt(a), jt(u), jt(l), d].join("|")
	}

	function Qn(e, t) {
		return t.filter(function(r) {
			return e.contains(r)
		})
	}

	function Ui(e, t, r) {
		var n = t.filter(function(l) {
				return T(l, HTMLInputElement) && l.type === "hidden"
			}).length,
			a = t.filter(function(l) {
				return T(l, HTMLButtonElement) || Gt(l) === "s"
			}).length,
			u = t.slice(0, tt).map(Gt).join(",");
		return {
			pac: na(t, Wi(e, t, r)),
			pad: ht(wi, zt, Kt, t.length, n, a, r.length, u)
		}
	}

	function aa(e) {
		if (!e) return {
			pac: xr,
			pad: ht(wr, zt, Kt, 0, 0, 0, 0, "")
		};
		var t = e.closest("form");
		if (!t) {
			for (var r = [], n = e.parentElement, a = 0; n && n !== document.body && a < 5; n = n.parentElement, a++) r.push(n);
			if (r.length === 0) return {
				pac: xr,
				pad: ht(wr, zt, Kt, 0, 0, 0, 0, "")
			};
			var u = r[r.length - 1],
				l = Ar(u).filter(function(R) {
					return !e.contains(R)
				}),
				d = Xn(u).filter(function(R) {
					return !e.contains(R)
				}),
				f = null,
				p = !0,
				v = !1,
				_ = void 0;
			try {
				for (var w = r[Symbol.iterator](), L; !(p = (L = w.next()).done); p = !0) {
					var x = L.value,
						N = Qn(x, l),
						k = Qn(x, d);
					if (N.length > 0 || k.length > 0) {
						f = Ui(x, N, k);
						break
					}
				}
			} catch (R) {
				v = !0, _ = R
			} finally {
				try {
					!p && w.return != null && w.return()
				} finally {
					if (v) throw _
				}
			}
			return f !== null ? f : {
				pac: xr,
				pad: ht(wr, zt, Kt, 0, 0, 0, 0, "")
			}
		}
		var I = Ar(t),
			O = I.filter(function(R) {
				return T(R, HTMLInputElement) && R.type === "hidden"
			}).length,
			oe = I.filter(function(R) {
				return T(R, HTMLButtonElement) || Gt(R) === "s"
			}).length,
			te = Xn(t).length,
			D = I.slice(0, tt).map(Gt).join(",");
		return {
			pac: na(I, Hi(t, I)),
			pad: ht(Ti, Di(t), Fi(t), I.length, O, oe, te, D)
		}
	}

	function Vi(e) {
		return T(e, Element) ? e : e.parentElement
	}

	function Bi(e) {
		return "querySelectorAll" in e
	}

	function ia(e, t) {
		var r, n = t == null ? void 0 : t.shouldIgnoreElement;
		if (n !== void 0) {
			var a = T(e, Element) ? [e] : [];
			(r = a).push.apply(r, de(e.querySelectorAll("*")));
			var u = new Set,
				l, d = !0,
				f = !1,
				p = void 0;
			try {
				for (var v = a[Symbol.iterator](), _; !(d = (_ = v.next()).done); d = !0) {
					var w = _.value;
					if (l !== void 0) {
						if (l.contains(w)) {
							u.add(w);
							continue
						}
						l = void 0
					}
					n(w) && (u.add(w), l = w)
				}
			} catch (L) {
				f = !0, p = L
			} finally {
				try {
					!d && v.return != null && v.return()
				} finally {
					if (f) throw p
				}
			}
			return u
		}
	}

	function oa(e, t) {
		var r = Vi(e);
		return r === null || t === void 0 ? !1 : t.has(r)
	}

	function ua(e, t) {
		var r = ia(e, t);
		return de(e.querySelectorAll("*")).filter(function(n) {
			return !oa(n, r)
		}).length
	}

	function la(e, t, r, n) {
		for (var a = "", u = Bi(e) ? ia(e, n) : void 0, l = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), d = l.nextNode(); d !== null && a.length < r;) {
			if (!oa(d, u)) {
				for (var f = 0, p = d; p !== null && p !== e;) f++, p = p.parentNode;
				if (f <= t)
					if (T(d, Element)) {
						var v = d;
						a += Tr(v.tagName.toLowerCase());
						var _ = !0,
							w = !1,
							L = void 0;
						try {
							for (var x = v.attributes[Symbol.iterator](), N; !(_ = (N = x.next()).done); _ = !0) {
								var k = N.value,
									I;
								(n == null || (I = n.shouldIgnoreAttribute) === null || I === void 0 ? void 0 : I.call(n, v, k)) !== !0 && (a += "_".concat(Tr(k.name, 2)))
							}
						} catch (O) {
							w = !0, L = O
						} finally {
							try {
								!_ && x.return != null && x.return()
							} finally {
								if (w) throw L
							}
						}
						a += ">"
					} else d.nodeType === Node.TEXT_NODE && (a += "-t")
			}
			d = l.nextNode()
		}
		return a.slice(0, r)
	}

	function Nr(e) {
		if (typeof e != "string") throw new TypeError("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : H(e)));
		for (var t = 5381, r = 0; r < e.length; r++) {
			var n = e.charCodeAt(r);
			t = t * 33 ^ n
		}
		return t >>> 0
	}
	var ca = (function(e) {
		return e.Failure = "failure", e.Verifying = "verifying", e.Overrunning = "overrunning", e.TimeCheckCachedWarning = "timecheckcachedwarning", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain", e.InvalidSitekey = "invalidsitekey", e.Custom = "custom", e
	})({});

	function ze(e) {
		return ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
		}, ze(e)
	}

	function bt() {
		try {
			var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
		} catch (t) {}
		return (bt = function() {
			return !!e
		})()
	}

	function da(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function sa(e, t) {
		return t && (H(t) === "object" || typeof t == "function") ? t : da(e)
	}

	function fa(e, t, r) {
		return t = ze(t), sa(e, bt() ? Reflect.construct(t, r || [], ze(e).constructor) : t.apply(e, r))
	}

	function pa(e, t) {
		if (!T(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function We(e, t) {
		return We = Object.setPrototypeOf || function(n, a) {
			return n.__proto__ = a, n
		}, We(e, t)
	}

	function va(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && We(e, t)
	}

	function _t(e, t, r) {
		return bt() ? _t = Reflect.construct : _t = function(a, u, l) {
			var d = [null];
			d.push.apply(d, u);
			var f = Function.bind.apply(a, d),
				p = new f;
			return l && We(p, l.prototype), p
		}, _t.apply(null, arguments)
	}

	function ma(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Xt(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return Xt = function(n) {
			if (n === null || !ma(n)) return n;
			if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(n)) return t.get(n);
				t.set(n, a)
			}

			function a() {
				return _t(n, arguments, ze(this).constructor)
			}
			return a.prototype = Object.create(n.prototype, {
				constructor: {
					value: a,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), We(a, n)
		}, Xt(e)
	}
	var ga = (function(e) {
		"use strict";
		va(t, e);

		function t(r, n) {
			pa(this, t);
			var a;
			return a = fa(this, t, [r]), $(a, "code", void 0), a.name = "TurnstileError", a.code = n, a
		}
		return t
	})(Xt(Error));
	var qi = RegExp("^https:\\/\\/(?:challenges(?:\\.fed)?\\.cloudflare\\.com|challenges\\.cloudflare-cn\\.com)\\/turnstile\\/v0(?:\\/.*)?\\/api\\.js", "u"),
		ml = RegExp("\\/turnstile\\/v0(?:\\/.*)?\\/api\\.js", "u");

	function E(e, t) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new ga(r, t)
	}

	function S(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function Et(e) {
		return e.startsWith(Wt) ? e.slice(Wt.length) : null
	}

	function G(e) {
		return "".concat(Wt).concat(e)
	}

	function Yt(e, t) {
		var r = !0,
			n = !1,
			a = void 0;
		try {
			for (var u = Object.getOwnPropertySymbols(e)[Symbol.iterator](), l; !(r = (l = u.next()).done); r = !0) {
				var d = l.value,
					f = Object.getOwnPropertyDescriptor(e, d),
					p = f === void 0 ? void 0 : Reflect.get(f, "value");
				if (t(p)) return p
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
		var e = qi,
			t = document.currentScript;
		if (T(t, HTMLScriptElement) && e.test(t.src)) return t;
		var r = document.querySelectorAll("script"),
			n = !0,
			a = !1,
			u = void 0;
		try {
			for (var l = r[Symbol.iterator](), d; !(n = (d = l.next()).done); n = !0) {
				var f = d.value;
				if (T(f, HTMLScriptElement) && e.test(f.src)) return f
			}
		} catch (p) {
			a = !0, u = p
		} finally {
			try {
				!n && l.return != null && l.return()
			} finally {
				if (a) throw u
			}
		}
	}

	function ya() {
		var e = xt();
		e === void 0 && E("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			r;
		try {
			r = new URL(t)
		} catch (u) {
			E("Could not parse Turnstile script tag URL", 43777)
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

	function X() {
		return Date.now()
	}

	function Qt(e) {
		e != null && e.iframeHost && e.iframeHost.remove()
	}
	var $t = ".";

	function ve(e, t) {
		return t.kills === void 0 ? !1 : "".concat($t).concat(t.kills).concat($t).includes("".concat($t).concat(e).concat($t))
	}

	function rt(e) {
		try {
			return new URL(e, window.location.href).origin
		} catch (t) {
			return
		}
	}

	function Pr(e, t, r) {
		if (r === void 0 || r === "") {
			if (0) var n;
			return
		}
		e == null || e.postMessage(t, r)
	}

	function me(e, t, r) {
		Pr(e.contentWindow, t, r)
	}
	var ha = 16,
		Ji = 1,
		ba = 0,
		_a = 1,
		Ea = 2,
		xa = 3,
		wa = 4,
		Ta = 5,
		Aa = 6,
		Ia = 7;

	function ji(e, t) {
		try {
			var r = new Error().stack;
			return typeof r != "string" ? void 0 : [e, Math.max(0, Math.floor(X() - t)), r, Ji]
		} catch (n) {
			return
		}
	}

	function Oe(e, t) {
		return ji(e, t.turnstileLoadInitTimeTsMs)
	}

	function Sa(e) {
		return e[3] === void 0 ? [e[0], e[1], e[2]] : [e[0], e[1], e[2], e[3]]
	}

	function nt(e) {
		var t;
		return (t = e == null ? void 0 : e.slice(-ha).map(Sa)) !== null && t !== void 0 ? t : []
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
		for (e.push(Sa(t)); e.length > ha;) e.shift();
		return !0
	}

	function Zt(e) {
		return ve("gcs", e)
	}

	function Tt(e, t) {
		return Zt(e) ? !1 : wt(e.gcs, t)
	}

	function zi(e) {
		var t = nt(e.gcs);
		return t.length > 0 ? t : void 0
	}

	function At(e) {
		if (!Zt(e)) return zi(e)
	}

	function er(e, t) {
		if (t.isInitialized) {
			var r = At(t);
			if (r) {
				var n = t.shadow.querySelector("#".concat(G(e)));
				n && me(n, {
					cs: r,
					event: "gcs",
					source: z,
					widgetId: e
				}, t.iframeOrigin)
			}
		}
	}

	function Ue(e, t, r) {
		var n = Tt(t, r);
		return n && er(e, t), n
	}
	var ka = 12,
		Ki = "fivs",
		Gi = "tf",
		Ra = "...";

	function ar(e) {
		return e.iframeHost ? e.iframeHost : e.shadow.host === e.wrapper ? e.wrapper : E("Turnstile Initialization Error", 3606)
	}

	function Xi(e) {
		return T(e.iframeHost, HTMLDivElement) && e.iframeHost !== e.wrapper
	}

	function Hr(e) {
		return ve(Ki, e)
	}

	function rr(e) {
		if (Xi(e)) {
			var t = e.iframeHost,
				r = e.mode === se.Invisible && !Hr(e) ? document.body : e.wrapper;
			t.parentNode !== r && r.appendChild(t)
		}
	}

	function Oa(e) {
		var t = e.getBoundingClientRect();
		return {
			h: Math.round(t.height),
			w: Math.round(t.width),
			x: Math.round(t.left),
			y: Math.round(t.top)
		}
	}

	function Wr(e) {
		return e.w > 0 && e.h > 0 && e.x + e.w > 0 && e.y + e.h > 0 && e.x < window.innerWidth && e.y < window.innerHeight
	}

	function Yi(e) {
		return e.isConnected ? Wr(Oa(e)) : !1
	}

	function Ma(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 80;
		return e.length <= t ? e : "".concat(e.slice(0, t - Ra.length)).concat(Ra)
	}

	function Ur(e, t) {
		return e ? e === t.wrapper ? "wrapper" : e === t.iframeHost ? "iframe-host" : e === t.iframe ? "iframe" : e === document.body ? "body" : e === document.documentElement ? "document-element" : e === t.wrapper.parentElement ? "wrapper-parent" : e.contains(t.wrapper) || e.contains(t.iframeHost) ? "ancestor" : "other" : null
	}

	function Ca(e) {
		var t = [];
		e.style.display === "none" && t.push("dn"), (e.style.visibility === "hidden" || e.style.visibility === "collapse") && t.push(e.style.visibility === "hidden" ? "vh" : "vc");
		var r = Number(e.style.opacity);
		return Number.isFinite(r) && r <= .01 && t.push("op"), e.style.contentVisibility === "hidden" && t.push("cv"), t
	}

	function Qi(e) {
		var t = [];
		return e.connected || t.push("dt"), (e.rect.w === 0 || e.rect.h === 0) && t.push("zs"), t
	}

	function $i(e) {
		if (e === "" || e === "none") return null;
		var t;
		try {
			t = new DOMMatrixReadOnly(e)
		} catch (r) {
			return null
		}
		return t.a === 1 && t.b === 0 && t.c === 0 && t.d === 1 ? [t.e, t.f] : null
	}

	function Zi(e, t, r) {
		for (var n = e, a = 0; n && a < ka;) {
			var u = tr(n, t, r),
				l = $i(u.style.transform);
			if (l && u.rect.w > 0 && u.rect.h > 0 && !u.inViewport && Wr(ft(Ce({}, u.rect), {
					x: u.rect.x - l[0],
					y: u.rect.y - l[1]
				}))) return nr(u, [Gi]);
			n = n.parentElement, a += 1
		}
		return null
	}

	function La(e, t) {
		var r, n = Oa(e),
			a = window.getComputedStyle(e);
		return {
			connected: e.isConnected,
			element: (r = Ur(e, t)) !== null && r !== void 0 ? r : "unknown",
			inViewport: e.isConnected && Wr(n),
			rect: n,
			style: {
				contentVisibility: a.contentVisibility,
				display: a.display,
				opacity: a.opacity,
				position: a.position,
				transform: Ma(a.transform),
				visibility: a.visibility
			}
		}
	}

	function Na(e, t) {
		var r, n = window.getComputedStyle(e);
		return {
			connected: e.isConnected,
			element: (r = Ur(e, t)) !== null && r !== void 0 ? r : "unknown",
			inViewport: !1,
			rect: {
				h: 0,
				w: 0,
				x: 0,
				y: 0
			},
			style: {
				contentVisibility: n.contentVisibility,
				display: n.display,
				opacity: n.opacity,
				position: n.position,
				transform: Ma(n.transform),
				visibility: n.visibility
			}
		}
	}

	function tr(e, t, r) {
		var n = r.get(e);
		if (n) return n;
		var a = La(e, t);
		return r.set(e, a), a
	}

	function nr(e, t) {
		return t.length === 0 ? null : {
			element: Fa(e.element),
			reasons: t
		}
	}

	function Pa(e, t, r, n) {
		var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
			u = Ca(t);
		if (t.connected || u.push("dt"), u.length > 0) return nr(t, u);
		for (var l = e.parentElement, d = 0; l && d < ka;) {
			var f = n == null ? void 0 : n.get(l);
			f || (f = a ? Na(l, r) : La(l, r), n == null || n.set(l, f));
			var p = Ca(f);
			if (p.length > 0) return nr(f, p);
			l = l.parentElement, d += 1
		}
		return null
	}

	function Fr(e, t, r, n) {
		var a = Pa(e, t, r, n);
		if (a) return a;
		if (!t.inViewport) {
			var u = Zi(e, r, n);
			if (u) return u
		}
		return nr(t, Qi(t))
	}

	function eo(e) {
		return e.mode === se.Invisible ? {
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
		return t === e.wrapper ? "wrapper" : t.isConnected ? t.parentElement === e.wrapper ? "wrapper" : t.parentElement === document.body ? "body" : "other" : "detached"
	}

	function Fa(e) {
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
			case "body":
				return "b";
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

	function Dr(e, t) {
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

	function Da(e, t) {
		var r, n, a = ar(e),
			u = {
				iframe: t,
				iframeHost: a,
				wrapper: e.wrapper
			},
			l = eo(e),
			d = to(e, a),
			f = Ur(a.parentElement, u),
			p = {
				height: window.innerHeight,
				visibilityState: document.visibilityState,
				width: window.innerWidth
			};
		if (l.expectedHidden) {
			var v, _;
			return {
				appearance: (v = e.params.appearance) !== null && v !== void 0 ? v : ae.Always,
				expectedHidden: !0,
				expectedHiddenReason: l.reason,
				hostParent: f,
				isExecuting: e.isExecuting,
				mode: (_ = e.mode) !== null && _ !== void 0 ? _ : null,
				mount: d,
				reasons: [],
				unexpectedHidden: !1,
				viewport: p
			}
		}
		var w = new Map,
			L = tr(e.wrapper, u, w),
			x = tr(a, u, w),
			N = tr(t, u, w),
			k = Fr(e.wrapper, L, u, w),
			I = Fr(a, x, u, w),
			O = Fr(t, N, u, w),
			oe = [d === "wrapper" ? null : "m:".concat(ro(d), ":").concat(Fa(f)), Dr("wrapper", k), Dr("iframeHost", I), Dr("iframe", O)].filter(function(te) {
				return te !== null
			});
		return {
			appearance: (r = e.params.appearance) !== null && r !== void 0 ? r : ae.Always,
			expectedHidden: !1,
			expectedHiddenReason: null,
			hostParent: f,
			isExecuting: e.isExecuting,
			mode: (n = e.mode) !== null && n !== void 0 ? n : null,
			mount: d,
			reasons: de(new Set(oe)),
			unexpectedHidden: oe.length > 0,
			viewport: p
		}
	}

	function no(e, t) {
		var r = ar(e);
		if (r.parentElement === document.body) return !1;
		if (!Yi(t)) return !0;
		var n = {
				iframe: t,
				iframeHost: r,
				wrapper: e.wrapper
			},
			a = new Map,
			u = Na(r, n);
		return a.set(r, u), Pa(r, u, n, a, !0) !== null
	}

	function Ha(e, t) {
		if (e.mode !== se.Invisible || Hr(e)) {
			rr(e);
			return
		}
		no(e, t) && rr(e)
	}

	function ao(e) {
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true")
	}

	function io(e) {
		e.style.width = "0", e.style.height = "0", e.style.opacity = "", e.style.position = "absolute", e.style.left = "", e.style.top = "", e.style.visibility = "hidden", e.style.pointerEvents = "", e.style.zIndex = "", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true")
	}

	function Vr(e, t) {
		if (t.mode === void 0 || Hr(t)) {
			io(e);
			return
		}
		ao(e)
	}

	function K(e, t) {
		return e.indexOf(t) !== -1
	}
	var oo = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		uo = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		Wa = "https://challenges.cloudflare.com",
		Ua = [Wa, "https://challenges.fed.cloudflare.com", "https://challenges.cloudflare-cn.com", "https://challenges-staging.cloudflare.com"];

	function ir(e, t, r) {
		var n, a = Wa,
			u = (n = r == null ? void 0 : r.origin) !== null && n !== void 0 ? n : a;
		if (t) {
			var l;
			return (l = e["base-url"]) !== null && l !== void 0 ? l : u
		}
		return u
	}

	function Br(e, t, r, n, a, u, l, d, f) {
		var p = ir(r, a, d),
			v = u !== void 0 && u !== "" ? "h/".concat(u, "/") : "",
			_ = f !== void 0 && f !== "" ? "&".concat(f) : "",
			w = r["feedback-enabled"] === !1 ? "fbD" : "fbE",
			L = r.chlPageOfflabel === !0 ? "&offlabel=true" : "";
		return "".concat(p, "/cdn-cgi/challenge-platform/").concat(v, "turnstile/f/av0/rch").concat(n, "/").concat(e, "/").concat(t, "/").concat(r.theme, "/").concat(w, "/").concat(l, "/").concat(r.size, "?lang=").concat(r.language).concat(L).concat(_)
	}
	var qr = function(t) {
			var r, n, a, u, l = window.innerWidth < 400,
				d = t.state !== qt.FailureFeedbackCode && (t.state === qt.FailureFeedback || t.state === qt.FailureHavingTroubles || t.errorCode === void 0 || t.errorCode === 0),
				f = K(oo, (r = (a = t.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && r !== void 0 ? r : "nonexistent"),
				p = K(uo, (n = (u = t.displayLanguage) === null || u === void 0 ? void 0 : u.toLowerCase()) !== null && n !== void 0 ? n : "nonexistent");
			return l ? lo({
				isModeratelyVerbose: p,
				isSmallerFeedback: d,
				isVerboseLanguage: f
			}) : d && f ? "680px" : d && p ? "670px" : d ? "650px" : f ? "690px" : "680px"
		},
		lo = function(t) {
			var r = t.isVerboseLanguage,
				n = t.isSmallerFeedback,
				a = t.isModeratelyVerbose;
			return n && r ? "660px" : n && a ? "620px" : n ? "600px" : r ? "770px" : a ? "740px" : "730px"
		};
	var co = 5e3,
		so = "auto-troubleshoot-click";

	function fo(e, t) {
		var r = ir(e.params, !1, t),
			n = "h/".concat("b", "/");
		return "".concat(r, "/cdn-cgi/challenge-platform/").concat(n, "fr")
	}
	var qa = function(t, r, n, a, u) {
		var l, d, f, p, v, _, w;
		if (a === void 0 || a === "" || n === void 0 || n === "") return !1;
		var L = fo(t, u),
			x = new FormData;
		x.append("consent", "on"), x.append("origin", r), x.append("issue", so), x.append("description", ""), x.append("rayId", n), x.append("sitekey", (l = t.params.sitekey) !== null && l !== void 0 ? l : ""), x.append("rcV", (d = t.rcV) !== null && d !== void 0 ? d : ""), x.append("cfChlOut", (f = t.cfChlOut) !== null && f !== void 0 ? f : ""), x.append("cfChlOutS", (p = t.cfChlOutS) !== null && p !== void 0 ? p : ""), x.append("mode", (v = t.mode) !== null && v !== void 0 ? v : ""), x.append("errorCode", String((_ = t.errorCode) !== null && _ !== void 0 ? _ : 0)), x.append("frMd", a), x.append("displayLanguage", (w = t.displayLanguage) !== null && w !== void 0 ? w : "");
		try {
			if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(L, x)) return !0
		} catch (N) {
			S("auto feedback report: sendBeacon threw synchronously, falling through to fetch (".concat(Jr(N), ")"))
		}
		try {
			return fetch(L, Ce({
				body: x,
				keepalive: !0,
				method: "POST",
				mode: "no-cors"
			}, Va())), !0
		} catch (N) {
			S("auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (".concat(Jr(N), ")"))
		}
		try {
			fetch(L, Ce({
				body: x,
				method: "POST",
				mode: "no-cors"
			}, Va()))
		} catch (N) {
			S("auto feedback report: all transports failed (".concat(Jr(N), ")"))
		}
		return !1
	};

	function Va() {
		return typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function" ? {} : {
			signal: AbortSignal.timeout(co)
		}
	}

	function Jr(e) {
		return T(e, Error) ? e.message : "unknown error"
	}
	var or = null,
		It = 0,
		Ja = function() {
			if (It++, It === 1) {
				var t = document.querySelector('meta[http-equiv="refresh"]');
				t && (or = t.getAttribute("content"), t.remove())
			}
		},
		ja = function() {
			if (It > 0 && It--, It === 0 && or !== null) {
				var t = document.createElement("meta");
				t.httpEquiv = "refresh", t.content = or, or = null, document.head.appendChild(t)
			}
		},
		jr = Symbol(),
		po = "host-origin",
		at = function(t) {
			t.feedbackPopup && !t.feedbackPopup.closed && t.feedbackPopup.close(), t.feedbackPopup = void 0, t.feedbackPopupOrigin = void 0
		};

	function za(e) {
		return e.endsWith("-fr") ? e : "".concat(e, "-fr")
	}

	function Ka(e) {
		var t, r, n, a = (n = document.querySelector("#".concat(e))) === null || n === void 0 || (r = n.parentElement) === null || r === void 0 || (t = r.parentElement) === null || t === void 0 ? void 0 : t.parentElement;
		return T(a, HTMLDivElement) ? a : null
	}

	function Ba(e) {
		if (!((typeof e == "undefined" ? "undefined" : H(e)) !== "object" || e === null)) {
			var t = Object.getOwnPropertyDescriptor(e, "cleanup"),
				r = t === void 0 ? void 0 : Reflect.get(t, "value");
			if (typeof r == "function") return function() {
				Reflect.apply(r, void 0, [])
			}
		}
	}

	function Ga(e) {
		var t, r = Ba((t = Object.getOwnPropertyDescriptor(e, jr)) === null || t === void 0 ? void 0 : t.value);
		if (r) return r;
		var n = !0,
			a = !1,
			u = void 0;
		try {
			for (var l = Object.getOwnPropertySymbols(e)[Symbol.iterator](), d; !(n = (d = l.next()).done); n = !0) {
				var f = d.value,
					p, v = Ba((p = Object.getOwnPropertyDescriptor(e, f)) === null || p === void 0 ? void 0 : p.value);
				if (v) return v
			}
		} catch (_) {
			a = !0, u = _
		} finally {
			try {
				!n && l.return != null && l.return()
			} finally {
				if (a) throw u
			}
		}
	}

	function vo(e, t) {
		Object.defineProperty(e, jr, {
			configurable: !0,
			enumerable: !1,
			value: {
				cleanup: t
			}
		})
	}

	function mo(e) {
		Reflect.deleteProperty(e, jr)
	}

	function go(e) {
		var t = new URL(e, window.location.href),
			r = new URLSearchParams(t.hash.startsWith("#") ? t.hash.slice(1) : t.hash);
		return r.set(po, window.location.origin), t.hash = r.toString(), t.toString()
	}
	var zr = function(t, r, n, a, u) {
			var l, d, f = za(t),
				p = ir(r.params, !1, a),
				v = "h/".concat("b", "/"),
				_ = go("".concat(p, "/cdn-cgi/challenge-platform/").concat(v, "fr/").concat(Et(t), "/").concat(r.displayLanguage, "/").concat((d = r.params.theme) !== null && d !== void 0 ? d : r.theme, "/").concat(n));
			if (at(r), window.top !== window.self) {
				var w = window.open(_, "_blank");
				if (w) {
					r.feedbackPopupOrigin = rt(_), r.feedbackPopup = w;
					var L = window.setInterval(function() {
						w.closed && (window.clearInterval(L), r.feedbackPopupCloseCheck = void 0, u == null || u())
					}, 500);
					r.feedbackPopupCloseCheck = L;
					return
				}
				S("Unable to open feedback report popup, falling back to the embedded feedback overlay.")
			}
			r.wrapper.parentNode || E("Cannot initialize Widget, Element not found (#".concat(t, ")."), 3074);
			var x = Ka(f);
			if (x) {
				var N;
				(N = Ga(x)) === null || N === void 0 || N()
			}
			var k = document.createElement("div");
			k.style.position = "fixed", k.style.zIndex = "2147483646", k.style.width = "100vw", k.style.height = "100vh", k.style.top = "0", k.style.left = "0", k.style.transformOrigin = "center center", k.style.overflowX = "hidden", k.style.overflowY = "auto", k.style.background = "rgba(0,0,0,0.4)";
			var I = document.createElement("div");
			I.className = "cf-wrapper-turnstile-feedback", I.style.display = "table-cell", I.style.verticalAlign = "middle", I.style.width = "100vw", I.style.height = "100vh";
			var O = document.createElement("div");
			O.className = "cf-turnstile-feedback", O.id = "cf-fr-id", O.style.width = "100vw", O.style.maxWidth = "500px", O.style.height = qr(r), O.style.position = "relative", O.style.zIndex = "2147483647", O.style.backgroundColor = "#ffffff", O.style.borderRadius = "5px", O.style.left = "0px", O.style.top = "0px", O.style.overflow = "hidden", O.style.margin = "0px auto";
			var oe = function() {
					O.style.height = qr(r)
				},
				te = function() {
					var ue;
					mo(k), r.feedbackIframeOrigin = void 0, window.removeEventListener("resize", oe), (ue = k.parentNode) === null || ue === void 0 || ue.removeChild(k), u == null || u()
				},
				D = document.createElement("iframe");
			D.id = f, D.setAttribute("src", _), D.setAttribute("title", "Turnstile feedback report"), D.setAttribute("allow", "cross-origin-isolated; fullscreen"), D.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), D.setAttribute("scrolling", "yes"), D.style.borderWidth = "0px", D.style.width = "100%", D.style.height = "100%", D.style.overflow = "auto", r.feedbackIframeOrigin = rt(_);
			var R = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			R.setAttribute("tabindex", "0"), R.setAttribute("role", "button"), R.setAttribute("aria-label", "Close feedback report"), R.style.position = "absolute", R.style.width = "26px", R.style.height = "26px", R.style.zIndex = "2147483647", R.style.cursor = "pointer", r.displayRtl === !0 ? R.style.left = "24px" : R.style.right = "24px", R.style.top = "24px", R.setAttribute("width", "20"), R.setAttribute("height", "20"), R.addEventListener("click", function(W) {
				W.stopPropagation(), te()
			}), R.addEventListener("keydown", function(W) {
				(W.key === "Enter" || W.key === " ") && (W.preventDefault(), W.stopPropagation(), te())
			});
			var J = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			J.setAttribute("ry", "12"), J.setAttribute("rx", "12"), J.setAttribute("cy", "12"), J.setAttribute("cx", "12"), J.setAttribute("fill", "none"), J.setAttribute("stroke-width", "0"), R.appendChild(J);
			var j = document.createElementNS("http://www.w3.org/2000/svg", "line");
			j.setAttribute("stroke-width", "1"), j.setAttribute("fill", "none"), j.setAttribute("x1", "6"), j.setAttribute("x2", "18"), j.setAttribute("y1", "18"), j.setAttribute("y2", "5");
			var B = document.createElementNS("http://www.w3.org/2000/svg", "line");
			B.setAttribute("stroke-width", "1"), B.setAttribute("fill", "none"), B.setAttribute("x1", "6"), B.setAttribute("x2", "18"), B.setAttribute("y1", "5"), B.setAttribute("y2", "18"), r.theme === Bt.Light ? (j.setAttribute("stroke", "#0A0A0A"), B.setAttribute("stroke", "#0A0A0A")) : (j.setAttribute("stroke", "#F2F2F2"), B.setAttribute("stroke", "#F2F2F2")), R.appendChild(j), R.appendChild(B), O.appendChild(D), O.appendChild(R), I.appendChild(O), k.appendChild(I), k.addEventListener("click", te), r.wrapper.parentNode.appendChild(k), window.addEventListener("resize", oe), vo(k, te)
		},
		St = function(t) {
			var r, n = za(t),
				a = Ka(n);
			if (a) {
				var u = Ga(a);
				if (u) {
					u();
					return
				}
				S("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup."), (r = a.parentNode) === null || r === void 0 || r.removeChild(a)
			}
		};
	var yo = 900,
		ho = 45,
		bo = 50;

	function _o(e) {
		return T(e, ShadowRoot)
	}

	function Eo(e, t, r) {
		var n = e.widgetMap.get(t);
		(n == null ? void 0 : n.retryTimeout) !== void 0 && (window.clearTimeout(n.retryTimeout), n.retryTimeout = void 0), Qt(n), S("Cannot find Widget ".concat(r, ", consider using turnstile.remove() to clean up a widget.")), e.widgetMap.delete(t)
	}

	function xo(e) {
		e.watchCatSeq++;
		var t = [],
			r = !0,
			n = !1,
			a = void 0;
		try {
			for (var u = e.widgetMap[Symbol.iterator](), l; !(r = (l = u.next()).done); r = !0) {
				var d = $e(l.value, 2),
					f = d[0],
					p = d[1],
					v = G(f),
					_ = p.shadow;
				if (!_o(_) || !p.wrapper.isConnected) {
					p.watchcat.missingWidgetWarning || (p.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: v,
						widgetId: f
					}));
					continue
				}
				var w = _.querySelector("#".concat(v));
				if (w === null) {
					p.watchcat.missingWidgetWarning || (p.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: v,
						widgetId: f
					}));
					continue
				}
				if (p.watchcat.seq = e.watchCatSeq, p.watchcat.lastAckedSeq === 0 && (p.watchcat.lastAckedSeq = e.watchCatSeq), !(p.isComplete || p.isFailed || p.feedbackOpen)) {
					var L = p.watchcat.seq - 1 - ho,
						x = p.watchcat.lastAckedSeq < L,
						N = p.watchcat.seq - 1 - bo,
						k = p.isOverrunning && p.watchcat.overrunBeginSeq !== 0 && p.watchcat.overrunBeginSeq < N;
					if ((p.isExecuting || !p.isInitialized || !p.isStale && !p.isExecuted) && p.watchcat.lastAckedSeq !== 0 && x || k) {
						var I, O;
						p.watchcat.lastAckedSeq = 0, p.watchcat.seq = 0, p.isExecuting = !1;
						var oe = function(Ve, le) {
							console.log("Turnstile Widget seem to have ".concat(Ve, ": "), le)
						};
						oe(x ? "hung" : "crashed", f);
						var te = x ? Ut : Vt;
						if ((O = e.internalMsgHandler) === null || O === void 0 || O.call(e, {
								code: te,
								event: "fail",
								rcV: (I = p.nextRcV) !== null && I !== void 0 ? I : ke,
								source: z,
								widgetId: f
							}), 0) var D;
						continue
					}
					me(w, {
						event: "meow",
						seq: e.watchCatSeq,
						source: z,
						widgetId: f
					}, p.iframeOrigin)
				}
			}
		} catch (_e) {
			n = !0, a = _e
		} finally {
			try {
				!r && u.return != null && u.return()
			} finally {
				if (n) throw a
			}
		}
		var R = !0,
			J = !1,
			j = void 0;
		try {
			for (var B = t[Symbol.iterator](), W; !(R = (W = B.next()).done); R = !0) {
				var ue = W.value,
					U = ue.widgetElId,
					ge = ue.widgetId;
				Eo(e, ge, U)
			}
		} catch (_e) {
			J = !0, j = _e
		} finally {
			try {
				!R && B.return != null && B.return()
			} finally {
				if (J) throw j
			}
		}
		t.length > 0 && e.widgetMap.size === 0 && Rt(e)
	}

	function Kr(e) {
		var t, r;
		(r = (t = e).watchCatInterval) !== null && r !== void 0 || (t.watchCatInterval = setInterval(function() {
			xo(e)
		}, yo))
	}

	function Rt(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && (clearInterval(e.watchCatInterval), e.watchCatInterval = null)
	}
	var Xr = Symbol();

	function Ya(e) {
		return (typeof e == "undefined" ? "undefined" : H(e)) === "object" && e !== null ? e : void 0
	}

	function Gr(e) {
		return (typeof e == "undefined" ? "undefined" : H(e)) === "object" && e !== null && "widgetMap" in e && T(e.widgetMap, Map) && "upgradeAttempts" in e && typeof e.upgradeAttempts == "number" && "upgradeCompletedCount" in e && typeof e.upgradeCompletedCount == "number"
	}

	function wo(e, t) {
		Object.defineProperty(e, Xr, {
			configurable: !0,
			enumerable: !1,
			value: t
		})
	}

	function To(e) {
		var t = Object.getOwnPropertyDescriptor(e, Xr),
			r = t === void 0 ? void 0 : Reflect.get(t, "value");
		if (Gr(r)) return r;
		var n = Yt(e, Gr);
		if (n) return n
	}

	function Qa(e) {
		Reflect.deleteProperty(e, Xr);
		var t = !0,
			r = !1,
			n = void 0;
		try {
			for (var a = Object.getOwnPropertySymbols(e)[Symbol.iterator](), u; !(t = (u = a.next()).done); t = !0) {
				var l = u.value,
					d = Object.getOwnPropertyDescriptor(e, l),
					f = d === void 0 ? void 0 : Reflect.get(d, "value");
				Gr(f) && Reflect.deleteProperty(e, l)
			}
		} catch (p) {
			r = !0, n = p
		} finally {
			try {
				!t && a.return != null && a.return()
			} finally {
				if (r) throw n
			}
		}
	}

	function Ao(e) {
		return !Number.isFinite(e.apiJsReloadBackoffMs) || e.apiJsReloadBackoffMs <= 0 ? Ze : Math.min(e.apiJsReloadBackoffMs, vt)
	}

	function Io(e) {
		return !Number.isFinite(e.apiJsReloadNextAllowedTsMs) || e.apiJsReloadNextAllowedTsMs <= 0 ? 0 : e.apiJsReloadNextAllowedTsMs
	}

	function Xa(e, t) {
		var r = Reflect.get(e, t);
		return typeof r == "number" ? r : 0
	}

	function $a(e, t) {
		var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xt;
		t.upgradeAttempts++;
		var n = r();
		if (!(n != null && n.parentNode)) return !1;
		var a = Ya(e);
		if (!a) return !1;
		var u = n.nonce;
		wo(a, t);
		var l = new URL(n.src),
			d = document.createElement("script");
		l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), d.async = !0, u && (d.nonce = u), d.setAttribute("crossorigin", "anonymous"), d.src = l.toString();
		try {
			return n.parentNode.replaceChild(d, n), !0
		} catch (f) {
			if (!T(f, DOMException)) throw f;
			return Qa(a), !1
		}
	}

	function Za(e, t, r) {
		var n = Ya(e);
		if (!n) return !1;
		var a = To(n);
		if (!a) return !1;
		var u = a.apiJsMismatchReloadPending;
		t.isReady = a.isReady, t.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, t.gcs = nt(a.gcs), t.lastWidgetIdx = a.lastWidgetIdx, t.scriptWasLoadedAsync = a.scriptWasLoadedAsync, t.apiJsReloadBackoffMs = u ? Ze : Ao(a), t.apiJsReloadNextAllowedTsMs = Io(a), t.apiJsMismatchReloadAttempts = Xa(a, "apiJsMismatchReloadAttempts"), t.apiJsMismatchReloadCompletedCount = Xa(a, "apiJsMismatchReloadCompletedCount") + (u ? 1 : 0), t.apiJsMismatchReloadPending = !1, t.upgradeAttempts = a.upgradeAttempts, t.upgradeCompletedCount = a.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = X(), t.watchCatInterval = null, t.watchCatSeq = a.watchCatSeq, t.widgetMap = a.widgetMap;
		var l = !0,
			d = !1,
			f = void 0;
		try {
			for (var p = t.widgetMap.values()[Symbol.iterator](), v; !(l = (v = p.next()).done); l = !0) {
				var _ = v.value;
				_.gcs = nt(_.gcs)
			}
		} catch (w) {
			d = !0, f = w
		} finally {
			try {
				!l && p.return != null && p.return()
			} finally {
				if (d) throw f
			}
		}
		return Rt(a, !0), a.msgHandler && window.removeEventListener("message", a.msgHandler), Qa(n), r(), !0
	}

	function Yr(e) {
		return K(["auto", "dark", "light"], e)
	}

	function Qr(e) {
		return K(["auto", "never"], e)
	}

	function $r(e) {
		return e > 0 && e < 9e5
	}

	function Zr(e) {
		return e > 0 && e < 36e4
	}
	var So = RegExp("^[0-9A-Za-z_-]{3,100}$", "u");

	function ei(e) {
		return So.test(e)
	}
	var Ro = RegExp("^[a-z0-9_-]{0,32}$", "iu");

	function en(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ro.test(e)
	}
	var Co = RegExp("^[a-z0-9_\\-=]{0,255}$", "iu");

	function tn(e) {
		return e === void 0 ? !0 : typeof e == "string" && Co.test(e)
	}

	function rn(e) {
		return K([Z.Normal, Z.Compact, Z.Invisible, Z.Flexible], e)
	}

	function nn(e) {
		return K(["auto", "manual", "never"], e)
	}

	function an(e) {
		return K(["auto", "manual", "never"], e)
	}
	var ko = RegExp("^[a-z]{2,3}(?:[-_][a-z]{2})?$", "iu");

	function on(e) {
		return e === "auto" || ko.test(e)
	}

	function un(e) {
		return K(["always", "execute", "interaction-only"], e)
	}

	function ti(e) {
		return K(["true", "false"], e)
	}

	function ln(e) {
		return K(["render", "execute"], e)
	}
	var uc = RegExp("^[0-9a-z_\\-.]{5,2000}$", "iu");

	function cn(e) {
		var t = new URLSearchParams;
		if (0) {
			var r;
			if (r != null && r !== "") var n
		}
		if (e.params["offlabel-show-privacy"] !== void 0 && t.set("offlabel_show_privacy", String(e.params["offlabel-show-privacy"])), e.params["offlabel-show-help"] !== void 0 && t.set("offlabel_show_help", String(e.params["offlabel-show-help"])), !(t.size === 0 || t.toString() === "")) return t.toString()
	}

	function ri(e, t) {
		if (e.isResetting = !1, t) {
			t(String(qn));
			return
		}
		E("Could not load challenge from challenges.cloudflare.com.", 161)
	}

	function ni(e, t) {
		return e ? t ? !0 : K(Ua, e) : !1
	}

	function ai() {
		for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window, t = e; t && t.top !== t && !t.location.href.startsWith("http");) t = t.top;
		return t == null ? void 0 : t.location.href
	}
	var si = Symbol(),
		Oo = "Turnstile has already been rendered in this container. The render attempt was rejected.",
		Mo = "Turnstile skipped implicit render because a widget already exists in this container.",
		dn = void 0,
		Lo = function(e) {
			return e.styleSheets.length
		};

	function vn(e) {
		return Reflect.get(window, e)
	}

	function mn(e) {
		var t = vn(e);
		return typeof t == "function" ? function() {
			for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
			return Reflect.apply(t, window, n)
		} : void 0
	}

	function ii(e, t) {
		return e == null ? t : Number(e)
	}

	function No(e) {
		return e === "new" || e === "crashed_retry" || e === "failure_retry" || e === "stale_execute" || e === "auto_expire" || e === "auto_timeout" || e === "manual_refresh" || e === "api" || e === "check_delays" || e === "upgrade_reload" || e === "time_check_cached_warning_aux" || e === "js_cookies_missing_aux" || e === "redirecting_text_overrun"
	}

	function Po(e) {
		var t = JSON.stringify(e);
		return JSON.parse(t)
	}

	function oi(e) {
		return (typeof e == "undefined" ? "undefined" : H(e)) === "object" && e !== null && "clearPendingApiJsReloadRequest" in e && typeof e.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in e && typeof e.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in e && typeof e.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in e && typeof e.reloadAfterUpgrade == "function"
	}

	function ui(e) {
		if (!((typeof e == "undefined" ? "undefined" : H(e)) !== "object" || e === null)) {
			var t = Object.getOwnPropertyDescriptor(e, si),
				r = t === void 0 ? void 0 : Reflect.get(t, "value");
			if (oi(r)) return r;
			var n = Yt(e, oi);
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
			turnstileLoadInitTimeTsMs: X(),
			upgradeAttempts: 0,
			upgradeCompletedCount: 0,
			watchCatInterval: null,
			watchCatSeq: 0,
			widgetMap: new Map
		},
		Ot, mr, yr;

	function Fo(e) {
		var t = !0,
			r = !1,
			n = void 0;
		try {
			for (var a = g.widgetMap[Symbol.iterator](), u; !(t = (u = a.next()).done); t = !0) {
				var l = $e(u.value, 2),
					d = l[0],
					f = l[1];
				if (f.wrapper.parentElement === e || f.wrapper !== e && f.wrapper.contains(e) || f.shadow.contains(e)) return d
			}
		} catch (p) {
			r = !0, n = p
		} finally {
			try {
				!t && a.return != null && a.return()
			} finally {
				if (r) throw n
			}
		}
		return null
	}

	function ur(e) {
		if (typeof e == "string") {
			var t = Et(e);
			return t !== null && g.widgetMap.has(t) ? t : g.widgetMap.has(e) ? e : null
		}
		return Fo(e)
	}

	function Do(e) {
		return e === "implicit" ? Mo : Oo
	}

	function li(e, t) {
		return e === "explicit" && (t == null ? void 0 : t.renderSource) === "implicit"
	}

	function gn() {
		Ot !== void 0 && (window.clearTimeout(Ot), Ot = void 0)
	}

	function fi() {
		var e = !0,
			t = !1,
			r = void 0;
		try {
			for (var n = g.widgetMap.values()[Symbol.iterator](), a; !(e = (a = n.next()).done); e = !0) {
				var u = a.value;
				if (u.chlPageData !== void 0 && u.chlPageData !== "") return !0
			}
		} catch (l) {
			t = !0, r = l
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
			r = G(e);
		if (t !== void 0) {
			var n = Le(t, r);
			n !== null && me(n, {
				apiJsMismatchReloadAttempts: g.apiJsMismatchReloadAttempts,
				apiJsMismatchReloadCompletedCount: g.apiJsMismatchReloadCompletedCount,
				event: "reloadApiJsRejected",
				source: z,
				widgetId: e
			}, t.iframeOrigin)
		}
	}

	function yn() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			t = e.preserveMismatchReloadPending,
			r = t === void 0 ? !1 : t;
		yr = void 0, r || (g.apiJsMismatchReloadPending = !1), mr !== void 0 && (window.clearTimeout(mr), mr = void 0)
	}

	function pi() {
		var e = yr;
		yn(), e !== void 0 && kt(e)
	}

	function Ho() {
		return X() < g.apiJsReloadNextAllowedTsMs
	}

	function Wo() {
		var e = g.apiJsReloadBackoffMs,
			t = Number.isFinite(e) && e > 0 ? Math.min(e, vt) : Ze,
			r = Math.round(t * (.8 + Math.random() * .4));
		g.apiJsReloadNextAllowedTsMs = X() + r, g.apiJsReloadBackoffMs = Math.min(t * 2, vt)
	}

	function Uo(e) {
		yn({
			preserveMismatchReloadPending: !0
		}), g.apiJsMismatchReloadPending = !0, yr = e, mr = window.setTimeout(function() {
			pi()
		}, Dn)
	}

	function hn() {
		gn(), !fi() && (Ot = window.setTimeout(function() {
			Ot = void 0, yi()
		}, Wn))
	}

	function sn(e, t) {
		mi(e, t, "")
	}
	var bn = [];

	function ci() {
		g.isReady = !0;
		var e = !0,
			t = !1,
			r = void 0;
		try {
			for (var n = bn[Symbol.iterator](), a; !(e = (a = n.next()).done); e = !0) {
				var u = a.value;
				u()
			}
		} catch (l) {
			t = !0, r = l
		} finally {
			try {
				!e && n.return != null && n.return()
			} finally {
				if (t) throw r
			}
		}
	}

	function di(e, t) {
		e.onerror = function() {
			ri(t, t.cbError)
		}
	}

	function vi(e, t) {
		var r, n = (r = e.params["response-field"]) !== null && r !== void 0 ? r : !0,
			a = g.isRecaptchaCompatibilityMode,
			u = "".concat(t, "_response"),
			l = "".concat(t, "_g_response"),
			d = (!n || T(document.querySelector("#".concat(u)), HTMLInputElement)) && (!a || T(document.querySelector("#".concat(l)), HTMLInputElement));
		if (!(e.responseElementsBuilt && d)) {
			if (n && !T(document.querySelector("#".concat(u)), HTMLInputElement)) {
				var f, p = document.createElement("input");
				p.type = "hidden", p.name = (f = e.params["response-field-name"]) !== null && f !== void 0 ? f : Pn, p.id = u, e.wrapper.appendChild(p)
			}
			if (a && !T(document.querySelector("#".concat(l)), HTMLInputElement)) {
				var v = document.createElement("input");
				v.type = "hidden", v.name = Fn, v.id = l, e.wrapper.appendChild(v)
			}
			e.responseElementsBuilt = !0
		}
	}

	function mi(e, t, r) {
		vi(e, t);
		var n = document.querySelector("#".concat(t, "_response"));
		if (n !== null && T(n, HTMLInputElement) && (n.value = r), g.isRecaptchaCompatibilityMode) {
			var a = document.querySelector("#".concat(t, "_g_response"));
			a !== null && T(a, HTMLInputElement) && (a.value = r)
		}
	}

	function Vo(e) {
		return e.chlPageData !== void 0 && e.chlPageData !== ""
	}

	function Bo(e) {
		return !Vo(e) && !ve("pac", e)
	}

	function lr(e, t) {
		var r, n = (r = t.params.size) !== null && r !== void 0 ? r : Z.Normal,
			a = t.mode;
		switch (a) {
			case se.NonInteractive:
			case se.Managed:
				var u;
				switch (e.style.display = "", e.style.opacity = "", e.style.position = "", e.style.left = "", e.style.top = "", e.style.visibility = "", e.style.pointerEvents = "", e.style.zIndex = "", e.setAttribute("tabindex", String((u = t.params.tabindex) !== null && u !== void 0 ? u : 0)), e.removeAttribute("aria-hidden"), n) {
					case Z.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case Z.Invisible:
						E('Invalid value for parameter "size", expected "'.concat(Z.Compact, '", "').concat(Z.Flexible, '", or "').concat(Z.Normal, '", got "').concat(n, '"'), 2817);
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
			case se.Invisible:
				Vr(e, t);
				break;
			default:
				E('Invalid value for parameter "mode", expected "'.concat(se.NonInteractive, '", "').concat(se.Managed, '" or "').concat(se.Invisible, '", got "').concat(String(a), '"'), 2818)
		}
	}

	function fn(e, t) {
		Vr(e, t)
	}

	function qo(e, t) {
		var r = t.get("turnstile_iframe_alt");
		r !== void 0 && r !== "" && (e.title = r)
	}

	function Le(e, t) {
		return e.shadow.querySelector("#".concat(t))
	}

	function Jo(e, t) {
		var r, n;
		return (r = (n = e.wrapper.parentNode) === null || n === void 0 ? void 0 : n.querySelector("#".concat(t, "-fr"))) !== null && r !== void 0 ? r : null
	}

	function jo(e) {
		var t, r;
		return ((r = e.feedbackPopup) === null || r === void 0 ? void 0 : r.closed) === !0 ? (e.feedbackPopup = void 0, e.feedbackPopupOrigin = void 0, null) : (t = e.feedbackPopup) !== null && t !== void 0 ? t : null
	}

	function gr(e, t) {
		var r, n, a = (r = (n = Jo(e, t)) === null || n === void 0 ? void 0 : n.contentWindow) !== null && r !== void 0 ? r : null;
		if (a !== null) return {
			targetOrigin: e.feedbackIframeOrigin,
			targetWindow: a
		};
		var u = jo(e);
		return {
			targetOrigin: u === null ? void 0 : e.feedbackPopupOrigin,
			targetWindow: u
		}
	}

	function zo(e) {
		if ((typeof e == "undefined" ? "undefined" : H(e)) !== "object" || e === null) return !1;
		var t = e;
		return t.source === z && typeof t.event == "string" && typeof t.widgetId == "string"
	}

	function Ko(e) {
		return e.isTrusted && zo(e.data)
	}

	function Go(e) {
		return ni(e.origin, !1)
	}

	function Xo(e, t, r) {
		var n, a, u = (n = (a = Le(t, r)) === null || a === void 0 ? void 0 : a.contentWindow) !== null && n !== void 0 ? n : null,
			l = gr(t, r).targetWindow,
			d = function(_) {
				return _ !== null && e.source === _
			},
			f = e.data.event;
		switch (f) {
			case "feedbackActivity":
			case "requestFeedbackData":
			case "closeFeedbackReportIframe":
				return d(l);
			case "refreshRequest":
				return d(u) || e.data.reason === "feedback_refresh" && d(l);
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
				return d(u);
			default: {
				var p = f;
				return !1
			}
		}
	}

	function pn() {
		return ai(window)
	}

	function cr(e, t, r) {
		return e === null ? t : ti(e) ? e === "true" : (S(r(e)), t)
	}

	function Yo() {
		try {
			var e = xt();
			if (!e) return;
			var t = e.src,
				r = !0,
				n = !1,
				a = void 0;
			try {
				for (var u = performance.getEntriesByType("resource")[Symbol.iterator](), l; !(r = (l = u.next()).done); r = !0) {
					var d = l.value;
					if (T(d, PerformanceResourceTiming) && d.name.includes(t)) return d
				}
			} catch (f) {
				n = !0, a = f
			} finally {
				try {
					!r && u.return != null && u.return()
				} finally {
					if (n) throw a
				}
			}
		} catch (f) {
			return
		}
	}
	var gi = (function() {
			var e = function(i) {
					var c;
					(c = ue.get(i)) === null || c === void 0 || c(), ue.delete(i)
				},
				t = function(i) {
					var c = W.get(i);
					if (!(!U.has(i) || !ge.has(i) || c === void 0 || i.autoFeedbackSent === !0 || ve("feedback-report-auto-submit", i))) {
						var m = qa(i, c.feedbackOrigin, c.rayId, i.frMd, g.scriptUrlParsed);
						m && (i.autoFeedbackSent = !0, e(i), U.delete(i), W.delete(i), ge.delete(i))
					}
				},
				r = function(i) {
					if (e(i), !(W.get(i) === void 0 || i.autoFeedbackSent === !0)) {
						var c = function(s) {
							s.isTrusted && (U.add(i), t(i))
						};
						window.addEventListener("keydown", c, !0), window.addEventListener("mousemove", c, !0), window.addEventListener("touchstart", c, !0), ue.set(i, function() {
							window.removeEventListener("keydown", c, !0), window.removeEventListener("mousemove", c, !0), window.removeEventListener("touchstart", c, !0)
						})
					}
				},
				n = function(i, c, m, s, o, A) {
					return Tn(function() {
						var y, h, P, M, F, q, Ee, ye, Xe, re, fe;
						return On(this, function(ne) {
							switch (ne.label) {
								case 0:
									if (h = function(xe, Y) {
											var pe = g.widgetMap.get(c);
											pe !== i || pe.isComplete || pe.isResetting || pe.response !== s || (!xe && Y !== void 0 && Y !== "" && S(Y), d(pe, m, xe))
										}, P = i.params.sitekey, M = pn(), M === void 0 || M === "") return S("Cannot determine Turnstile's embedded location, aborting clearance redemption."), d(i, m, !1), [2];
									F = "h/".concat("b", "/"), q = new URL(M), Ee = "https", ye = "", Xe = "".concat(Ee, "://").concat(q.host, "/cdn-cgi/challenge-platform/").concat(F, "c/").concat(A).concat(ye), ne.label = 1;
								case 1:
									return ne.trys.push([1, 3, , 4]), [4, fetch(Xe, {
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
									return re = ne.sent(), re.status === 200 ? h(!0) : h(!1, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), [3, 4];
								case 3:
									return fe = ne.sent(), h(!1, "Error contacting Turnstile, aborting clearance redemption."), [3, 4];
								case 4:
									return [2]
							}
						})
					})()
				},
				a = function(i, c, m) {
					if (i.params.retry === Jt.Auto || m) {
						var s;
						if (i.feedbackOpen) {
							i.pendingRetry = {
								crashed: m
							};
							return
						}
						var o = m ? 0 : 1e3 * 2 + ((s = i.params["retry-interval"]) !== null && s !== void 0 ? s : 0);
						i.retryTimeout = window.setTimeout(function() {
							var A = m ? ee.CrashedRetry : ee.FailureRetry;
							I(A, c)
						}, o)
					}
				},
				u = function(i, c, m) {
					return i.params.execution === gt.Render ? !0 : (c === ee.CrashedRetry || c === ee.FailureRetry || c === ee.CheckDelays || c === ee.UpgradeReload) && i.params.execution === gt.Execute && m
				},
				l = function(i, c, m) {
					if (i.feedbackOpen && (i.feedbackOpen = !1, e(i), U.delete(i), W.delete(i), ge.delete(i), i.feedbackPopupCloseCheck !== void 0 && (window.clearInterval(i.feedbackPopupCloseCheck), i.feedbackPopupCloseCheck = void 0), ja(), window.postMessage({
							event: "feedbackClose",
							source: z,
							widgetId: m
						}, "*"), i.pendingRetry)) {
						var s = i.pendingRetry.crashed;
						i.pendingRetry = void 0, a(i, c, s)
					}
				},
				d = function(i, c, m) {
					var s;
					i.response === void 0 && E("[Internal Error] Widget was completed but no response was given", 1362), i.isExecuting = !1, i.isComplete = !0, mi(i, c, i.response), (s = i.cbSuccess) === null || s === void 0 || s.call(i, i.response, m)
				},
				f = function(i) {
					if (!i) return [];
					for (var c = i.attributes, m = c.length, s = new Array(m), o = 0; o < m; o++) s[o] = c[o].name;
					return s
				},
				p = function() {
					for (var i = {}, c = [], m = document.querySelectorAll("*"), s = 0; s < m.length && c.length < 50; s++) {
						var o = m[s].tagName.toLowerCase();
						o.includes("-") && !i[o] && (i[o] = !0, c.push(o))
					}
					return c
				},
				v = function(i, c, m) {
					if (i.rcV = c, 0) var s
				},
				_ = function() {
					var i = "abcdefghijklmnopqrstuvwxyz0123456789",
						c = i.length,
						m;
					do {
						m = "";
						for (var s = 0; s < 5; s++) m += i.charAt(Math.floor(Math.random() * c))
					} while (g.widgetMap.has(m));
					return m
				},
				w = function(i, c, m) {
					for (; i.msgQueue.length > 0;) {
						var s = i.msgQueue.pop();
						me(m, {
							cs: s === yt.Execute ? At(i) : void 0,
							event: s,
							source: z,
							widgetId: c
						}, i.iframeOrigin)
					}
				},
				L = function(i) {
					return i.isExecuting
				},
				x = function(i, c) {
					if (c) {
						var m = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
							s = [],
							o = !0,
							A = !1,
							y = void 0;
						try {
							for (var h = m[Symbol.iterator](), P; !(o = (P = h.next()).done); o = !0) {
								var M = P.value;
								Object.getOwnPropertyDescriptor(c, M) !== void 0 && c[M] !== void 0 && c[M] !== i.params[M] && s.push(M)
							}
						} catch (F) {
							A = !0, y = F
						} finally {
							try {
								!o && h.return != null && h.return()
							} finally {
								if (A) throw y
							}
						}
						s.length > 0 && E("The parameters ".concat(m.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(s.join(",")), 3618), c.action !== void 0 && c.action !== "" && (en(c.action) || E('Invalid input for optional parameter "action", got "'.concat(c.action, '"'), 3604), i.action = c.action), c.cData !== void 0 && c.cData !== "" && (tn(c.cData) || E('Invalid input for optional parameter "cData", got "'.concat(c.cData, '"'), 3605), i.cData = c.cData), c["after-interactive-callback"] !== void 0 && (i.cbAfterInteractive = c["after-interactive-callback"]), c["before-interactive-callback"] !== void 0 && (i.cbBeforeInteractive = c["before-interactive-callback"]), c.callback !== void 0 && (i.cbSuccess = c.callback), c["expired-callback"] !== void 0 && (i.cbExpired = c["expired-callback"]), c["timeout-callback"] !== void 0 && (i.cbTimeout = c["timeout-callback"]), c["error-callback"] !== void 0 && (i.cbError = c["error-callback"]), c["unsupported-callback"] !== void 0 && (i.cbUnsupported = c["unsupported-callback"]), c.chlPageData !== void 0 && c.chlPageData !== "" && (i.chlPageData = c.chlPageData)
					}
				},
				N = function(i, c, m) {
					i === "explicit" && c !== void 0 && x(c, m), S(Do(i))
				},
				k = function(i) {
					I(ee.Api, i, Oe(Ea, g))
				},
				I = function(i, c, m) {
					var s, o, A = le(c);
					A === null && E("Nothing to reset found for provided container", 3329);
					var y = g.widgetMap.get(A);
					y === void 0 && E("Widget ".concat(A, " to reset was not found."), 3331), Tt(y, m);
					var h = y.isExecuted;
					y.isResetting = !0, y.response = void 0, y.mode = void 0, y.msgQueue = [], y.isComplete = !1, y.isExecuted = !1, y.isExecuting = !1, y.isExpired = !1, y.isFailed = !1, y.isInitialized = !1, y.isStale = !1, y.isOverrunning = !1, y.cfChlOut = void 0, y.cfChlOutS = void 0, y.errorCode = void 0, y.frMd = void 0, y.autoFeedbackSent = !1, e(y), U.delete(y), W.delete(y), ge.delete(y), y.watchcat.overrunBeginSeq = 0, y.watchcat.lastAckedSeq = 0, y.watchcat.seq = 0, u(y, i, h) && (y.msgQueue.push(yt.Execute), y.isExecuted = !0, y.isExecuting = !0);
					var P = G(A),
						M = Le(y, P);
					M === null && E("Widget ".concat(A, " to reset was not found."), 3330), (y.params.appearance === ae.InteractionOnly || y.params.appearance === ae.Execute) && fn(M, y), y.params.sitekey === null && E("Unexpected Error: Sitekey is null", 3347);
					var F = M.cloneNode();
					T(F, HTMLIFrameElement) || E("Unexpected Error: Cloned widget is not an iframe", 3348);
					var q = Br(A, y.params.sitekey, y.params, (s = y.rcV) !== null && s !== void 0 ? s : ke, !1, "b", i, g.scriptUrlParsed, cn(y));
					F.src = q, di(F, y), y.iframeOrigin = rt(q), (o = M.parentNode) === null || o === void 0 || o.replaceChild(F, M), sn(y, P), y.retryTimeout !== void 0 && window.clearTimeout(y.retryTimeout)
				},
				O = function(i, c) {
					var m = G(i),
						s = ["input#".concat(m, "_response"), "input#".concat(m, "_g_response")];
					document.querySelectorAll(s.join(", ")).forEach(function(o) {
						o.remove()
					}), c.shadow.querySelectorAll(s.join(", ")).forEach(function(o) {
						o.remove()
					}), St(m), at(c), c.wrapper.remove(), Qt(c), c.retryTimeout !== void 0 && window.clearTimeout(c.retryTimeout), g.widgetMap.delete(i), Rt(g)
				},
				oe = function(i) {
					var c = Oe(xa, g),
						m = le(i),
						s = m === null ? void 0 : g.widgetMap.get(m);
					if (m === null || s === void 0) {
						S("Nothing to remove found for the provided container.");
						return
					}
					wt(g.gcs, c), Tt(s, c), O(m, s)
				},
				te = function() {
					var i = de(g.widgetMap.keys()),
						c = !0,
						m = !1,
						s = void 0;
					try {
						for (var o = i[Symbol.iterator](), A; !(c = (A = o.next()).done); c = !0) {
							var y = A.value,
								h = g.widgetMap.get(y),
								P = G(y);
							h !== void 0 && (St(P), at(h), I(ee.UpgradeReload, P))
						}
					} catch (M) {
						m = !0, s = M
					} finally {
						try {
							!c && o.return != null && o.return()
						} finally {
							if (m) throw s
						}
					}
				},
				D = function(i, c, m, s) {
					var o, A, y, h, P, M, F, q, Ee, ye, Xe = X(),
						re, fe;
					if (typeof i == "string") {
						var ne = ur(i);
						if (ne === null) {
							var Se;
							try {
								Se = document.querySelector(i)
							} catch (Zo) {
								E('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(i, '"'), 3586)
							}
							Se === null && E('Unable to find a container for "'.concat(i, '"'), 3585), re = Se
						} else {
							var xe, Y = g.widgetMap.get(ne),
								pe = (xe = Y == null ? void 0 : Y.wrapper.parentElement) !== null && xe !== void 0 ? xe : null;
							if (pe !== null && li(m, Y)) re = pe, fe = {
								widget: Y,
								widgetId: ne
							};
							else return Y !== void 0 && Ue(ne, Y, s), N(m, Y, c), G(ne)
						}
					} else T(i, HTMLElement) ? re = i : E('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
					if (fe === void 0) {
						var Be = ur(re);
						if (Be !== null) {
							var we = g.widgetMap.get(Be);
							if (we !== void 0 && li(m, we) && we.wrapper.parentElement === re) fe = {
								widget: we,
								widgetId: Be
							};
							else return we && Ue(Be, we, s), N(m, we, c), G(Be)
						}
					}
					var Ye = pn();
					if (Ye === void 0 || Ye === "") return E("Turnstile cannot determine its page location", 3607);
					var ot = $o(re);
					if (ot !== void 0) {
						var b = Object.assign(ot, c),
							qe = b.action,
							Je = b.cData,
							Mt = b.chlPageData,
							Ne = b.sitekey;
						b.theme = (o = b.theme) !== null && o !== void 0 ? o : Bt.Auto, b.retry = (A = b.retry) !== null && A !== void 0 ? A : Jt.Auto, b.execution = (y = b.execution) !== null && y !== void 0 ? y : gt.Render, b.appearance = (h = b.appearance) !== null && h !== void 0 ? h : ae.Always, b["retry-interval"] = ii(b["retry-interval"], Hn), b["expiry-interval"] = ii(b["expiry-interval"], (Un - Vn) * 1e3), b.size = (P = b.size) !== null && P !== void 0 ? P : Z.Normal;
						var Lt = b.callback,
							hr = b["expired-callback"],
							ut = b["timeout-callback"],
							br = b["after-interactive-callback"],
							Nt = b["before-interactive-callback"],
							lt = b["error-callback"],
							ct = b["unsupported-callback"];
						typeof Ne != "string" && E('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof Ne == "undefined" ? "undefined" : H(Ne), '"'), 3588), ei(Ne) || E('Invalid input for parameter "sitekey", got "'.concat(Ne, '"'), 3589), rn(b.size) || E('Invalid type for parameter "size", expected normal|compact, got "'.concat(String(b.size), '" ').concat(H(b.size)), 3590), Yr(b.theme) || E('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(String(b.theme), '" ').concat(H(b.theme)), 3591), Qr(b.retry) || E('Invalid type for parameter "retry", expected never|auto, got "'.concat(String(b.retry), '" ').concat(H(b.retry)), 3592), (b.language === void 0 || b.language === "") && (b.language = "auto"), on(b.language) || (S('Invalid language value: "'.concat(b.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), b.language = "auto"), un(b.appearance) || E('Unknown appearance value: "'.concat(String(b.appearance), ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), ln(b.execution) || E('Unknown execution value: "'.concat(String(b.execution), ", expected either: 'render' or 'execute'."), 3601), $r(b["retry-interval"]) || E('Invalid retry-interval value: "'.concat(b["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), Zr(b["expiry-interval"]) || E('Invalid expiry-interval value: "'.concat(b["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
						var Pe = (M = b["refresh-expired"]) !== null && M !== void 0 ? M : et.Auto;
						nn(Pe) ? b["refresh-expired"] = Pe : E('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(String(Pe), '" ').concat(typeof Pe == "undefined" ? "undefined" : H(Pe)), 3603);
						var Re = (F = b["refresh-timeout"]) !== null && F !== void 0 ? F : mt.Auto;
						an(Re) ? b["refresh-timeout"] = Re : E('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(String(Re), '" ').concat(typeof Re == "undefined" ? "undefined" : H(Re)), 3603), en(qe) || E('Invalid input for optional parameter "action", got "'.concat(qe, '"'), 3604), tn(Je) || E('Invalid input for optional parameter "cData", got "'.concat(Je, '"'), 3605);
						var Q = document.createElement("iframe"),
							Pt = document.createElement("div"),
							Ft = document.createElement("div"),
							ce = Ft.attachShadow({
								mode: "closed"
							}),
							he = _(),
							dt = G(he),
							be = [],
							je = b.execution === gt.Render;
						je && be.push(yt.Execute);
						var Dt = nt(g.gcs);
						wt(Dt, s), g.lastWidgetIdx++;
						var st = {},
							Qe = ft(Ce({
								action: qe,
								assetCtxCallback: b._acCb,
								autoFeedbackSent: !1,
								cData: Je,
								cbAfterInteractive: br,
								cbBeforeInteractive: Nt,
								cbError: lt,
								cbExpired: hr,
								cbSuccess: Lt,
								cbTimeout: ut,
								cbUnsupported: ct,
								chlPageData: Mt,
								feedbackOpen: !1,
								gcs: Dt,
								idx: g.lastWidgetIdx,
								isComplete: !1,
								isExecuted: je,
								isExecuting: je,
								isExpired: !1,
								isFailed: !1,
								isInitialized: !1,
								isOverrunning: !1,
								isResetting: !1,
								isStale: !1,
								msgQueue: be,
								params: b,
								rcV: ke,
								renderSource: m,
								responseElementsBuilt: !1,
								shadow: ce,
								watchcat: {
									lastAckedSeq: 0,
									missingWidgetWarning: !1,
									overrunBeginSeq: 0,
									seq: 0
								}
							}, st), {
								iframeHost: Ft,
								widgetInitStartTimeTsMs: 0,
								widgetParamsStartTimeTsMs: 0,
								widgetRenderEndTimeTsMs: 0,
								widgetRenderStartTimeTsMs: Xe,
								wrapper: Pt
							});
						g.widgetMap.set(he, Qe), Kr(g);
						var Te = g.widgetMap.get(he);
						Te === void 0 && E("Turnstile Initialization Error", 3606), Te.chlPageData !== void 0 && Te.chlPageData !== "" && gn(), Q.style.border = "none", Q.style.overflow = "hidden";
						var En = Br(he, Ne, b, ke, !1, "b", ee.New, g.scriptUrlParsed, cn(Te));
						Te.iframeOrigin = rt(En), Q.setAttribute("src", En), di(Q, Te);
						var xn = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
						return K((q = (ye = document.featurePolicy) === null || ye === void 0 || (Ee = ye.features) === null || Ee === void 0 ? void 0 : Ee.call(ye)) !== null && q !== void 0 ? q : [], _r) && xn.push(_r), Q.setAttribute("allow", xn.join("; ")), Q.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), Q.id = dt, Q.title = "Widget containing a Cloudflare security challenge", ce.appendChild(Q), fn(Q, Te), rr(Te), vi(Te, dt), fe && O(fe.widgetId, fe.widget), re.appendChild(Pt), Te.widgetRenderEndTimeTsMs = X(), dt
					}
				},
				R = function(i, c) {
					return D(i, c, "explicit", Oe(ba, g))
				},
				J = function() {
					var i = [Mn, Ln];
					g.isRecaptchaCompatibilityMode && i.push(Nn);
					var c = Oe(Ia, g);
					document.querySelectorAll(i.join(", ")).forEach(function(m) {
						D(m, void 0, "implicit", c)
					})
				},
				j = function() {
					var i, c = -1,
						m = !0,
						s = !1,
						o = void 0;
					try {
						for (var A = g.widgetMap[Symbol.iterator](), y; !(m = (y = A.next()).done); m = !0) {
							var h = $e(y.value, 2),
								P = h[0],
								M = h[1];
							c < M.idx && (i = P, c = M.idx)
						}
					} catch (F) {
						s = !0, o = F
					} finally {
						try {
							!m && A.return != null && A.return()
						} finally {
							if (s) throw o
						}
					}
					return c === -1 && E("Could not find widget", 43778), i
				},
				B = Yo(),
				W = new WeakMap,
				ue = new WeakMap,
				U = new WeakSet,
				ge = new WeakSet,
				_e = function(i) {
					var c = Reflect.get(i, "source");
					if (c === z) {
						var m = Reflect.get(i, "widgetId");
						if (!(typeof m != "string" || m === "" || !g.widgetMap.has(m))) {
							var s = G(m),
								o = g.widgetMap.get(m);
							if (o !== void 0) switch (i.event) {
								case "init": {
									o.widgetInitStartTimeTsMs = X(), o.kills = i.kills, Zt(o) && (o.gcs.length = 0);
									var A = Le(o, s);
									A || E("Cannot initialize Widget, Element not found (#".concat(s, ")."), 3074), o.mode = i.mode, o.nextRcV = i.nextRcV, o.mode === se.Invisible && o.params["refresh-expired"] === et.Manual && S("refresh-expired=manual is impossible in invisible mode, consider using '".concat(et.Auto, "' or '").concat(et.Never, ".'")), o.mode !== se.Managed && o.params["refresh-timeout"] !== mt.Auto && S("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), o.params.appearance === ae.Always || o.isExecuting && o.params.appearance === ae.Execute ? lr(A, o) : fn(A, o), Ha(o, A);
									var y = Le(o, s);
									y || E("Received state for an unknown widget: ".concat(i.widgetId), 3078), me(y, {
										event: "init",
										source: z,
										widgetId: i.widgetId
									}, o.iframeOrigin);
									break
								}
								case "translationInit": {
									var h = o.shadow.querySelector("#".concat(s));
									T(h, HTMLElement) || E("Cannot initialize Widget, Element not found (#".concat(s, ")."), 3074);
									var P = new Map;
									o.displayLanguage = i.displayLanguage, o.displayRtl = i.displayRtl, Object.keys(i.translationData).forEach(function(Qe) {
										P.set(Qe, i.translationData[Qe])
									}), qo(h, P);
									break
								}
								case "languageUnsupported": {
									S("Language ".concat(o.params.language, " is not supported, falling back to: ").concat(i.fallback, ".")), o.displayLanguage = i.fallback;
									break
								}
								case "reject": {
									var M = o.shadow.querySelector("#".concat(s));
									o.isExecuting = !1, T(M, HTMLElement) || E("Cannot initialize Widget, Element not found (#".concat(s, ")."), 3075);
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
									if (v(o, ke, i.widgetId), o.response = i.token, i.aC !== void 0 && i.aC !== "") {
										var Ee;
										(Ee = o.assetCtxCallback) === null || Ee === void 0 || Ee.call(o, i.aC)
									}
									if (i.scs !== void 0 && i.scs !== "" && !ve("scs", o) && (o.scs = i.scs, o.params["session-continuity-persist"] === !0 && !ve("scs_persist", o))) {
										var ye = o.params.sitekey;
										if (ye !== null && ye !== "") {
											var Xe = "".concat(Er).concat(ye);
											try {
												localStorage.setItem(Xe, i.scs)
											} catch (Qe) {}
										}
									}
									i.sToken !== void 0 && i.sToken !== "" ? n(o, i.widgetId, s, i.token, i.sToken, i.chlId) : d(o, s, !1);
									break
								}
								case "fail": {
									var re = Reflect.get(i, "rcV");
									if (typeof re == "string" && re !== "" && v(o, re, m), i.cfChlOut !== void 0 && i.cfChlOut !== "" && (o.cfChlOut = i.cfChlOut), i.cfChlOutS !== void 0 && i.cfChlOutS !== "" && (o.cfChlOutS = i.cfChlOutS), i.code !== void 0 && i.code !== 0 && (o.errorCode = i.code), i.aC !== void 0 && i.aC !== "") {
										var fe;
										(fe = o.assetCtxCallback) === null || fe === void 0 || fe.call(o, i.aC)
									}
									o.isExecuting = !1, o.isFailed = !0, o.isInitialized = !0, i.frMd !== void 0 && i.frMd !== "" && (o.frMd = i.frMd), sn(o, s);
									var ne = o.cbError,
										Se = i.code === Ut || i.code === Vt,
										xe = i.code !== Bn;
									if (Se) {
										var Y = Le(o, s);
										Y && me(Y, {
											event: "forceFail",
											source: z,
											widgetId: i.widgetId
										}, o.iframeOrigin)
									}
									if (ne !== void 0) {
										var pe;
										ne(String((pe = i.code) !== null && pe !== void 0 ? pe : Jn)) === !0 ? xe && o.params.retry === Jt.Auto && !o.isResetting && a(o, s, Se) : (i.code !== void 0 && i.code !== 0 && S("Error: ".concat(i.code, ".")), xe && a(o, s, Se))
									} else i.code !== void 0 && i.code !== 0 ? (xe && a(o, s, Se), E("Error: ".concat(i.code), 3076)) : a(o, s, !1);
									break
								}
								case "feedbackInit": {
									i.cfChlOut !== void 0 && i.cfChlOut !== "" && (o.cfChlOut = i.cfChlOut), i.cfChlOutS !== void 0 && i.cfChlOutS !== "" && (o.cfChlOutS = i.cfChlOutS);
									var Be = gr(o, s).targetWindow;
									if (Be) {
										S("A feedback report form is already opened for this widget.");
										return
									}
									if (o.autoFeedbackSent !== !0 && !ve("feedback-report-auto-submit", o) ? W.set(o, {
											feedbackOrigin: i.feedbackOrigin,
											rayId: i.rayId
										}) : W.delete(o), o.feedbackOpen = !0, o.retryTimeout !== void 0) {
										var we, Ye;
										clearTimeout(o.retryTimeout), o.retryTimeout = void 0, (Ye = (we = o).pendingRetry) !== null && Ye !== void 0 || (we.pendingRetry = {
											crashed: !1
										})
									}
									Ja(), window.postMessage({
										event: "feedbackOpen",
										source: z,
										widgetId: i.widgetId
									}, "*"), zr(s, o, i.feedbackOrigin, g.scriptUrlParsed, function() {
										l(o, s, i.widgetId)
									});
									break
								}
								case "feedbackActivity": {
									U.add(o), t(o);
									break
								}
								case "requestFeedbackData": {
									ge.add(o), r(o);
									var ot = Le(o, s);
									T(ot, HTMLElement) || E("Received state for an unknown widget: #".concat(s, " / ").concat(i.widgetId), 3078), me(ot, {
										event: "requestTurnstileResults",
										source: z,
										widgetId: i.widgetId
									}, o.iframeOrigin), t(o);
									break
								}
								case "turnstileResults": {
									var b, qe, Je, Mt = gr(o, s),
										Ne = Mt.targetOrigin,
										Lt = Mt.targetWindow;
									if (!Lt) break;
									Pr(Lt, {
										cfChlOut: (b = o.cfChlOut) !== null && b !== void 0 ? b : i.cfChlOut,
										cfChlOutS: (qe = o.cfChlOutS) !== null && qe !== void 0 ? qe : i.cfChlOutS,
										errorCode: o.errorCode,
										event: "feedbackData",
										frMd: (Je = o.frMd) !== null && Je !== void 0 ? Je : i.frMd,
										mode: i.mode,
										rayId: i.rayId,
										rcV: i.rcV,
										sitekey: i.sitekey,
										source: z,
										widgetId: i.widgetId
									}, Ne);
									break
								}
								case "closeFeedbackReportIframe": {
									var hr = gr(o, s).targetWindow;
									hr || E("Received state for an unknown widget: ".concat(i.widgetId), 3078), St("".concat(s, "-fr")), at(o), l(o, s, i.widgetId);
									break
								}
								case "tokenExpired": {
									var ut, br = i.token;
									o.isExpired = !0, (ut = o.cbExpired) === null || ut === void 0 || ut.call(o, br), o.params["refresh-expired"] === et.Auto && !o.isResetting && I(ee.AutoExpire, s);
									break
								}
								case "interactiveTimeout": {
									v(o, ke, i.widgetId), sn(o, s);
									var Nt = o.cbTimeout;
									if (Nt ? Nt() : o.params["refresh-timeout"] === mt.Never && !o.isResetting && S("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), o.params["refresh-timeout"] === mt.Auto && !o.isResetting) {
										var lt = o.cbAfterInteractive;
										lt == null || lt(), I(ee.AutoTimeout, s)
									}
									break
								}
								case "refreshRequest": {
									v(o, ke, i.widgetId), St(s), at(o), I(ee.ManualRefresh, s);
									break
								}
								case "reloadRequest": {
									v(o, i.nextRcV, i.widgetId), I(No(i.trigger) ? i.trigger : ee.Api, s);
									break
								}
								case "reloadApiJsRequest": {
									if (ve("reload", o)) {
										kt(i.widgetId);
										break
									}
									if (yr !== void 0) {
										kt(i.widgetId);
										break
									}
									if (Ho()) {
										kt(i.widgetId);
										break
									}
									yi() ? (g.apiJsMismatchReloadAttempts++, Wo(), Uo(i.widgetId)) : kt(i.widgetId);
									break
								}
								case "interactiveBegin": {
									var ct, Pe = o.shadow.querySelector("#".concat(s));
									T(Pe, HTMLElement) || E("Cannot layout widget, Element not found (#".concat(s, ")."), 3076), (ct = o.cbBeforeInteractive) === null || ct === void 0 || ct.call(o), o.params.appearance === ae.InteractionOnly && lr(Pe, o);
									break
								}
								case "interactiveEnd": {
									var Re;
									(Re = o.cbAfterInteractive) === null || Re === void 0 || Re.call(o);
									break
								}
								case "widgetStale": {
									o.isStale = !0;
									break
								}
								case "requestExtraParams": {
									o.widgetParamsStartTimeTsMs = X();
									var Q = Le(o, s);
									Q || E("Received state for an unknown widget: ".concat(i.widgetId), 3078), o.isResetting = !1;
									var Pt = {},
										Ft = X(),
										ce = Da(o, Q),
										he = Bo(o) ? aa(o.wrapper) : void 0,
										dt = {
											"d.cT": p(),
											"ht.atrs": f(document.body.parentElement),
											"pg.ref": document.referrer,
											pi: {
												ffp: ea(o.wrapper),
												ii: window.self !== window.top,
												lH: window.location.href,
												mL: document.querySelectorAll("meta").length,
												pac: he == null ? void 0 : he.pac,
												pad: he == null ? void 0 : he.pad,
												pfp: la(document, jn, zn, dn),
												sL: document.scripts.length,
												sR: ar(o).shadowRoot === null,
												ssL: Lo(document, dn),
												t: "".concat(document.title.length, "|").concat(Nr(document.title)),
												tL: ua(document, dn),
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
												wp: Zn(o.wrapper),
												xp: $n(o.wrapper).slice(0, Kn)
											},
											"w.iW": window.innerWidth
										},
										be = o.scs;
									if ((be === void 0 || be === "") && o.params["session-continuity-persist"] === !0 && !ve("scs_persist", o)) {
										var je = o.params.sitekey;
										if (je !== null && je !== "") {
											var Dt = "".concat(Er).concat(je);
											try {
												var st;
												be = (st = localStorage.getItem(Dt)) !== null && st !== void 0 ? st : void 0
											} catch (Qe) {}
										}
									}
									be !== void 0 && be !== "" && be.length > Gn && (be = void 0), me(Q, Ce({
										action: o.action,
										apiJsMismatchReloadAttempts: g.apiJsMismatchReloadAttempts,
										apiJsMismatchReloadCompletedCount: g.apiJsMismatchReloadCompletedCount,
										apiJsResourceTiming: B === void 0 ? void 0 : Po(B),
										appearance: o.params.appearance,
										au: g.scriptUrl,
										cData: o.cData,
										ch: "e694063b5082",
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
										scs: be,
										source: z,
										timeExtraParamsMs: X() - o.widgetRenderStartTimeTsMs,
										timeInitMs: o.widgetInitStartTimeTsMs - o.widgetRenderEndTimeTsMs,
										timeLoadInitMs: X() - g.turnstileLoadInitTimeTsMs,
										timeParamsMs: o.widgetParamsStartTimeTsMs - o.widgetInitStartTimeTsMs,
										timeRenderMs: o.widgetRenderEndTimeTsMs - o.widgetRenderStartTimeTsMs,
										timeTiefMs: X() - Ft,
										upgradeAttempts: g.upgradeAttempts,
										upgradeCompletedCount: g.upgradeCompletedCount,
										url: pn(),
										wPr: dt,
										widgetId: i.widgetId
									}, Pt), o.iframeOrigin), w(o, i.widgetId, Q), o.isInitialized = !0;
									break
								}
								default:
									break
							}
						}
					}
				},
				Ve = function(i) {
					if (Ko(i)) {
						var c = i.data;
						if (!Go(i)) {
							S("Ignored message from wrong origin: ".concat(i.origin, "."));
							return
						}
						if (!(c.widgetId === "" || !g.widgetMap.has(c.widgetId))) {
							var m = G(c.widgetId),
								s = g.widgetMap.get(c.widgetId);
							if (s !== void 0) {
								if (!Xo(i, s, m)) {
									S("Ignored message from unexpected source for event: ".concat(c.event, "."));
									return
								}
								_e(c)
							}
						}
					}
				};
			g.msgHandler = Ve, g.internalMsgHandler = _e, window.addEventListener("message", Ve);

			function le(C) {
				var i;
				if (typeof C == "string") {
					var c = ur(C);
					if (c !== null) return c;
					try {
						var m = document.querySelector(C);
						return m === null ? null : le(m)
					} catch (o) {
						return null
					}
				}
				if (T(C, Element)) return ur(C);
				var s = !!C;
				return s || g.widgetMap.size === 0 ? null : (i = j()) !== null && i !== void 0 ? i : null
			}
			var Ge = {},
				hi = {
					showFeedback: function(i) {
						var c = le(i);
						if (c !== null) {
							var m = G(c),
								s = g.widgetMap.get(c);
							s !== void 0 && zr(m, s, ca.Custom, g.scriptUrlParsed)
						}
					}
				},
				_n = ft(Ce({}, Ge), {
					_private: hi,
					execute: function(i, c) {
						var m = Oe(_a, g),
							s = !1,
							o = le(i);
						if (o === null) {
							var A;
							c === void 0 && E("Please provide 2 parameters to execute: container and parameters", 43521);
							var y = D(i, c, "explicit", m);
							s = !0, y == null && E("Failed to render widget", 43522), o = (A = Et(y)) !== null && A !== void 0 ? A : le(i), o === null && E("Failed to render widget", 43522)
						}
						var h = g.widgetMap.get(o);
						if (h !== void 0) {
							var P = s ? !1 : Tt(h, m);
							x(h, c);
							var M = G(o);
							if (h.isExecuting) {
								S("Call to execute() on a widget that is already executing (".concat(M, "), consider using reset() before execute().")), P && er(o, h);
								return
							}
							if (h.isExecuting = !0, h.response !== void 0 && h.response !== "") {
								var F;
								h.isExecuting = !1, S("Call to execute() on a widget that was already executed (".concat(M, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), P && er(o, h), (F = h.cbSuccess) === null || F === void 0 || F.call(h, h.response, !1);
								return
							}
							h.isExpired && S("Call to execute on a expired-widget (".concat(M, "), consider using reset() before.")), h.isStale && (I(ee.StaleExecute, M), h.isExecuting = !0), (h.isResetting || !h.isInitialized) && h.msgQueue.push(yt.Execute), h.isExecuted = !0;
							var q = Le(h, M);
							if (q || (h.isExecuting = !1, E("Widget ".concat(M, " to execute was not found"), 43522)), h.isResetting || !h.isInitialized) return;
							if (h.msgQueue.length > 0) {
								w(h, o, q), h.params.appearance === ae.Execute && lr(q, h);
								return
							}
							h.params.appearance === ae.Execute && lr(q, h), L(h) && me(q, {
								cs: At(h),
								event: "execute",
								source: z,
								widgetId: o
							}, h.iframeOrigin)
						}
					},
					getResponse: function(i) {
						var c = Oe(wa, g);
						if (typeof i == "undefined") {
							var m = j();
							if (m !== void 0) {
								var s = g.widgetMap.get(m);
								return s !== void 0 && Ue(m, s, c), (s == null ? void 0 : s.isExpired) === !0 && S("Call to getResponse on a widget that expired, consider refreshing the widget."), s == null ? void 0 : s.response
							}
							E("Could not find a widget", 43794)
						}
						var o = le(i);
						o === null && E("Could not find widget for provided container", 43778);
						var A = g.widgetMap.get(o);
						return A && Ue(o, A, c), A == null ? void 0 : A.response
					},
					isExpired: function(i) {
						var c, m = Oe(Ta, g);
						if (typeof i == "undefined") {
							var s = j();
							if (s !== void 0) {
								var o, A = g.widgetMap.get(s);
								return A !== void 0 && Ue(s, A, m), (o = A == null ? void 0 : A.isExpired) !== null && o !== void 0 ? o : !1
							}
							E("Could not find a widget", 43794)
						}
						var y = le(i);
						y === null && E("Could not find widget for provided container", 43778);
						var h = g.widgetMap.get(y);
						return h && Ue(y, h, m), (c = h == null ? void 0 : h.isExpired) !== null && c !== void 0 ? c : !1
					},
					ready: function(i) {
						g.scriptWasLoadedAsync && (S("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), E("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof i != "function" && E('turnstile.ready() expected a "function" argument, got "'.concat(typeof i == "undefined" ? "undefined" : H(i), '"'), 3841);
						var c = Oe(Aa, g);
						wt(g.gcs, c);
						var m = !0,
							s = !1,
							o = void 0;
						try {
							for (var A = g.widgetMap[Symbol.iterator](), y; !(m = (y = A.next()).done); m = !0) {
								var h = $e(y.value, 2),
									P = h[0],
									M = h[1];
								Ue(P, M, c)
							}
						} catch (F) {
							s = !0, o = F
						} finally {
							try {
								!m && A.return != null && A.return()
							} finally {
								if (s) throw o
							}
						}
						if (g.isReady) {
							i();
							return
						}
						bn.push(i)
					},
					remove: oe,
					render: R,
					reset: k
				});
			return Object.defineProperty(_n, si, {
				configurable: !0,
				enumerable: !1,
				value: {
					clearPendingApiJsReloadRequest: function() {
						yn()
					},
					rearmTimedUpgrade: function() {
						hn()
					},
					rejectPendingApiJsReloadRequest: function() {
						pi()
					},
					reloadAfterUpgrade: function() {
						te()
					}
				}
			}), {
				runImplicitRender: J,
				turnstile: _n
			}
		})(),
		Qo = function() {
			gi.runImplicitRender()
		},
		dr = gi.turnstile;

	function $o(e) {
		var t, r, n = e.getAttribute("data-sitekey"),
			a = {
				sitekey: n
			},
			u = e.getAttribute("data-tabindex");
		u !== null && u !== "" && (a.tabindex = Math.trunc(Number(u)));
		var l = e.getAttribute("data-theme");
		l !== null && l !== "" && (Yr(l) ? a.theme = l : S('Unknown data-theme value: "'.concat(l, '".')));
		var d = e.getAttribute("data-size");
		if (d !== null && d !== "" && (rn(d) ? a.size = d : S('Unknown data-size value: "'.concat(d, '".'))), 0) var f;
		var p = e.getAttribute("data-action");
		typeof p == "string" && (a.action = p);
		var v = e.getAttribute("data-cdata");
		typeof v == "string" && (a.cData = v);
		var _ = e.getAttribute("data-retry");
		_ !== null && _ !== "" && (Qr(_) ? a.retry = _ : S('Invalid data-retry value: "'.concat(_, ", expected either 'never' or 'auto'\".")));
		var w = e.getAttribute("data-retry-interval");
		if (w !== null && w !== "") {
			var L = Math.trunc(Number(w));
			$r(L) ? a["retry-interval"] = L : S('Invalid data-retry-interval value: "'.concat(w, ', expected an integer value > 0 and < 900000".'))
		}
		var x = e.getAttribute("data-expiry-interval");
		if (x !== null && x !== "") {
			var N = Math.trunc(Number(x));
			Zr(N) ? a["expiry-interval"] = N : S('Invalid data-expiry-interval value: "'.concat(N, ', expected an integer value > 0 and < 360000".'))
		}
		var k = e.getAttribute("data-refresh-expired");
		k !== null && k !== "" && (nn(k) ? a["refresh-expired"] = k : S('Unknown data-refresh-expired value: "'.concat(k, ", expected either: 'never', 'auto' or 'manual'.")));
		var I = e.getAttribute("data-refresh-timeout");
		I !== null && I !== "" && (an(I) ? a["refresh-timeout"] = I : S('Unknown data-refresh-timeout value: "'.concat(I, ", expected either: 'never', 'auto' or 'manual'.")));
		var O = e.getAttribute("data-language");
		O !== null && O !== "" && (on(O) ? a.language = O : S('Invalid data-language value: "'.concat(O, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function oe(U) {
			var ge = e.getAttribute(U);
			if (!(ge === null || ge === "")) {
				var _e = mn(ge);
				return _e === void 0 ? void 0 : function() {
					for (var Ve = arguments.length, le = new Array(Ve), Ge = 0; Ge < Ve; Ge++) le[Ge] = arguments[Ge];
					return _e.apply(void 0, de(le))
				}
			}
		}
		var te = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		te.forEach(function(U) {
			Object.assign(a, $({}, U, oe("data-".concat(U))))
		}), a["feedback-enabled"] = (t = cr(e.getAttribute("data-feedback-enabled"), !0, function(U) {
			return 'Invalid data-feedback-enabled value: "'.concat(U, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && t !== void 0 ? t : !0, a["response-field"] = (r = cr(e.getAttribute("data-response-field"), !0, function(U) {
			return 'Invalid data-response-field value: "'.concat(U, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && r !== void 0 ? r : !0;
		var D = e.getAttribute("data-response-field-name");
		D !== null && D !== "" && (a["response-field-name"] = D);
		var R = e.getAttribute("data-execution");
		R !== null && R !== "" && (ln(R) ? a.execution = R : S('Unknown data-execution value: "'.concat(R, ", expected either: 'render' or 'execute'.")));
		var J = e.getAttribute("data-appearance");
		J !== null && J !== "" && (un(J) ? a.appearance = J : S('Unknown data-appearance value: "'.concat(J, ", expected either: 'always', 'execute', or 'interaction-only'.")));
		var j = e.getAttribute("data-offlabel-show-privacy"),
			B = cr(j, void 0, function(U) {
				return 'Invalid data-offlabel-show-privacy value: "'.concat(U, '", expected "true" or "false".')
			});
		typeof B == "boolean" && (a["offlabel-show-privacy"] = B);
		var W = e.getAttribute("data-offlabel-show-help"),
			ue = cr(W, void 0, function(U) {
				return 'Invalid data-offlabel-show-help value: "'.concat(U, '", expected "true" or "false".')
			});
		return typeof ue == "boolean" && (a["offlabel-show-help"] = ue), a
	}

	function yi() {
		if (gn(), fi()) return !1;
		var e = $a(window.turnstile, g);
		return e ? !0 : (hn(), !1)
	}
	Ke = !1, V = ya(), g.scriptWasLoadedAsync = (sr = V == null ? void 0 : V.loadedAsync) !== null && sr !== void 0 ? sr : !1, g.scriptUrl = (fr = V == null ? void 0 : V.src) !== null && fr !== void 0 ? fr : "undefined", g.scriptUrlParsed = V == null ? void 0 : V.url, (V == null ? void 0 : V.params) !== void 0 && V.params !== null && (it = V.params.get("compat"), (it == null ? void 0 : it.toLowerCase()) === "recaptcha" ? typeof window.grecaptcha == "undefined" ? (S("Compatibility layer enabled."), g.isRecaptchaCompatibilityMode = !0, window.grecaptcha = dr) : S("grecaptcha is already defined. The compatibility layer will not be enabled.") : it !== null && S('Unknown value for api.js?compat: "'.concat(it, '", ignoring.')), V.params.forEach(function(e, t) {
		K(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || S('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), Ke = V.params.get("_upgrade") === "true", Me = V.params.get("onload"), Me !== null && Me !== "" && !Ke && setTimeout(function() {
		var e = mn(Me);
		e === void 0 ? (S("Unable to find onload callback '".concat(Me, "' immediately after loading, expected 'function', got '").concat(H(vn(Me)), "'.")), setTimeout(function() {
			var t = mn(Me);
			t === void 0 ? S("Unable to find onload callback '".concat(Me, "' after 1 second, expected 'function', got '").concat(H(vn(Me)), "'.")) : t()
		}, 1e3)) : e()
	}, 0)), Ct = "turnstile" in window, Ie = Ct ? ui(window.turnstile) : void 0, pr = Ct && Ke ? Za(window.turnstile, g, function() {
		var e;
		window.turnstile = dr, (e = ui(dr)) === null || e === void 0 || e.reloadAfterUpgrade(), Kr(g)
	}) : !1, pr && (Ie == null || Ie.clearPendingApiJsReloadRequest()), Ct && Ke && !pr ? (S("Turnstile upgrade state was missing. Keeping the existing Turnstile instance."), Ie == null || Ie.rejectPendingApiJsReloadRequest(), Ie == null || Ie.rearmTimedUpgrade()) : Ct && !Ke ? S("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (pr || (window.turnstile = dr), Ke || ((V == null || (vr = V.params) === null || vr === void 0 ? void 0 : vr.get("render")) !== "explicit" && bn.push(Qo), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(ci, 0) : window.addEventListener("DOMContentLoaded", ci)), hn());
	var sr, fr, Ke, V, it, Me, Ct, Ie, pr, vr;
})();