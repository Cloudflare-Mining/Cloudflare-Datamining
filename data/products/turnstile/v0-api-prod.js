"use strict";
(function() {
	function An(e, t, r, n, a, u, l) {
		try {
			var d = e[u](l),
				f = d.value
		} catch (p) {
			r(p);
			return
		}
		d.done ? t(f) : Promise.resolve(f).then(n, a)
	}

	function In(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise(function(n, a) {
				var u = e.apply(t, r);

				function l(f) {
					An(u, n, a, l, d, "next", f)
				}

				function d(f) {
					An(u, n, a, l, d, "throw", f)
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

	function xi(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter(function(a) {
				return Object.getOwnPropertyDescriptor(e, a).enumerable
			})), r.push.apply(r, n)
		}
		return r
	}

	function pt(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : xi(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
		}), e
	}

	function Sn(e) {
		if (Array.isArray(e)) return e
	}

	function Rn(e, t) {
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

	function Cn() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function vt(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function Wt(e, t) {
		if (e) {
			if (typeof e == "string") return vt(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vt(e, t)
		}
	}

	function Ze(e, t) {
		return Sn(e) || Rn(e, t) || Wt(e, t) || Cn()
	}

	function kn(e) {
		if (Array.isArray(e)) return vt(e)
	}

	function On(e) {
		if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
	}

	function Mn() {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Z(e) {
		return kn(e) || On(e) || Wt(e) || Mn()
	}

	function Ln(e, t) {
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
	var Ut = "cf-chl-widget-",
		z = "cloudflare-challenge",
		Nn = ".cf-turnstile",
		Pn = ".cf-challenge",
		Fn = ".g-recaptcha",
		Dn = "cf-turnstile-response",
		Hn = "g-recaptcha-response",
		et = 3e4,
		mt = 180 * 1e3,
		Wn = 1e4,
		Un = 8e3,
		Vn = 3600 * 1e3,
		Er = "private-token",
		Bn = 300,
		qn = 10,
		Jn = 200100,
		jn = 200500,
		zn = 300020,
		Vt = 300030,
		Bt = 300031,
		Kn = 3,
		Gn = 500,
		Xn = 500,
		ke = "",
		xr = "_cftscs_",
		Yn = 512;
	var se = (function(e) {
			return e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible", e
		})({}),
		ee = (function(e) {
			return e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible", e
		})({}),
		qt = (function(e) {
			return e.Auto = "auto", e.Light = "light", e.Dark = "dark", e
		})({}),
		Jt = (function(e) {
			return e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain", e
		})({}),
		jt = (function(e) {
			return e.Never = "never", e.Auto = "auto", e
		})({}),
		tt = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		gt = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		ie = (function(e) {
			return e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only", e
		})({}),
		ht = (function(e) {
			return e.Render = "render", e.Execute = "execute", e
		})({}),
		yt = (function(e) {
			return e.Execute = "execute", e
		})({}),
		te = (function(e) {
			return e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.UpgradeReload = "upgrade_reload", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun", e
		})({});
	var Ar = function(t) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return t.length > r ? t.slice(0, r) : t
	};

	function ea(e) {
		if (!e) return "-";
		var t = function(n, a) {
			if (!n || n.tagName === "BODY") return a;
			for (var u = 1, l = n.previousElementSibling; l;) l.tagName === n.tagName && u++, l = l.previousElementSibling;
			var d = Ar(n.tagName.toLowerCase()),
				f = "".concat(d, "[").concat(u, "]");
			return t(n.parentElement, "/".concat(f).concat(a))
		};
		return t(e, "")
	}

	function ta(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var wi = {
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

	function Ti(e) {
		return T(e, HTMLInputElement) || T(e, HTMLSelectElement) || T(e, HTMLTextAreaElement) || T(e, HTMLButtonElement)
	}

	function Ir(e) {
		return Z(e.querySelectorAll("input, select, textarea, button")).filter(Ti)
	}

	function Qn(e) {
		return Z(e.querySelectorAll("a")).filter(function(t) {
			return T(t, HTMLAnchorElement)
		})
	}

	function ra(e) {
		var t;
		if (!e) return "";
		var r = e.closest("form");
		if (!r) return "nf";
		var n = Ir(r),
			a = n.slice(0, 20).map(function(l) {
				var d;
				return (d = wi[l.type]) !== null && d !== void 0 ? d : "-"
			}).join(""),
			u = ["m:".concat((t = r.getAttribute("method")) !== null && t !== void 0 ? t : ""), "f:".concat(n.length), a].join("|");
		return u
	}
	var Sr = "c",
		Rr = "cp",
		Cr = "ct",
		kr = "l",
		Or = "nl",
		wr = "n",
		Mr = "r",
		Lr = "s",
		Ai = "u",
		Nr = "up",
		Ii = "c",
		Si = "f",
		Tr = "n",
		Ri = "d",
		Ci = "g",
		Kt = "n",
		ki = "x",
		Oi = "p",
		Mi = "b",
		Li = "c",
		Ni = "e",
		Gt = "n",
		Pi = "s",
		rt = 20,
		Fi = 512,
		$n = 99,
		Ae, Di = (Ae = {}, $(Ae, Sr, [2071475277, 2531075807, 2087764529, 2650702126, 897792407, 1900861264, 193440998, 181887339]), $(Ae, Rr, [3710748438, 194507255, 2123698751, 2088097853]), $(Ae, Cr, [3716925445, 1236122734, 1917612522]), $(Ae, kr, [173246534, 1422232710, 2984385681, 2172846769]), $(Ae, Or, [517084052, 3937470477]), $(Ae, Mr, [194507792, 1354128738, 1385023551]), $(Ae, Lr, [2172845875, 2984384787, 2901189036, 3027005952, 2088000679]), $(Ae, Nr, [1759493702, 1322218894]), Ae);

	function De(e) {
		var t;
		return (t = Di[e]) !== null && t !== void 0 ? t : []
	}

	function oe(e) {
		return (e != null ? e : "").slice(0, Fi).toLowerCase()
	}

	function We(e) {
		return Pr(e)
	}

	function Hi(e) {
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
		for (var l = new Set, d = 0; d < t.length; d++) l.add(We(t[d])), d + 1 < t.length && l.add(We("".concat(t[d], " ").concat(t[d + 1])));
		return l
	}

	function He(e, t) {
		return t.some(function(r) {
			return e.has(r)
		})
	}

	function zt(e) {
		return e > $n ? "".concat($n, "+") : String(e)
	}

	function Xt(e) {
		if (T(e, HTMLSelectElement)) return "sl";
		if (T(e, HTMLTextAreaElement)) return "ta";
		if (T(e, HTMLButtonElement)) {
			var t = We(e.type);
			return t === 2139762449 ? "s" : t === 194507792 ? "rs" : "b"
		}
		switch (We(e.type)) {
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

	function Wi(e) {
		var t = e.getAttribute("action");
		if (t === null || t === "") return Ni;
		try {
			return new URL(t, window.location.href).origin === window.location.origin ? Pi : Li
		} catch (r) {
			return Mi
		}
	}

	function Ui(e) {
		var t = e.getAttribute("method"),
			r = oe(t === null || t === "" ? "get" : t),
			n = We(r);
		return n === 193411891 ? Ci : n === 2088097853 ? Oi : n === 1125889741 ? Ri : ki
	}

	function na(e) {
		if (e === null || e === "") return "";
		try {
			return new URL(e, window.location.href).pathname
		} catch (t) {
			return ""
		}
	}

	function aa(e) {
		var t = [],
			r = !0,
			n = !1,
			a = void 0;
		try {
			for (var u = e.attributes[Symbol.iterator](), l; !(r = (l = u.next()).done); r = !0) {
				var d = l.value;
				[2203664931, 2087944093, 2087876002, 5861160, 247325877, 3566271494].indexOf(We(d.name)) !== -1 && t.push(oe(d.value))
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
		return T(e, HTMLButtonElement) ? t.push(oe(e.value), oe(e.textContent)) : T(e, HTMLInputElement) && [1516724467, 2139762449].indexOf(We(e.type)) !== -1 && t.push(oe(e.value)), t
	}

	function Vi(e, t) {
		var r = [],
			n = na(e.getAttribute("action"));
		r.push(oe(e.getAttribute("id")), oe(e.getAttribute("class")), oe(e.getAttribute("name")), oe(n));
		var a = !0,
			u = !1,
			l = void 0;
		try {
			for (var d = t.slice(0, rt)[Symbol.iterator](), f; !(a = (f = d.next()).done); a = !0) {
				var p = f.value,
					v;
				(v = r).push.apply(v, Z(aa(p)))
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
			for (var x = Z(e.querySelectorAll("label")).slice(0, rt)[Symbol.iterator](), N; !(_ = (N = x.next()).done); _ = !0) {
				var k = N.value;
				r.push(oe(k.textContent))
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

	function Bi(e, t, r) {
		var n = [];
		n.push(oe(e.getAttribute("id")), oe(e.getAttribute("class")));
		var a = !0,
			u = !1,
			l = void 0;
		try {
			for (var d = t.slice(0, rt)[Symbol.iterator](), f; !(a = (f = d.next()).done); a = !0) {
				var p = f.value,
					v;
				(v = n).push.apply(v, Z(aa(p)))
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
			for (var x = r.slice(0, rt)[Symbol.iterator](), N; !(_ = (N = x.next()).done); _ = !0) {
				var k = N.value,
					I = na(k.getAttribute("href"));
				n.push(oe(k.textContent), oe(I))
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

	function ia(e, t) {
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
					var w = We(_.type);
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
			x = Hi(t),
			N = He(x, De(kr)),
			k = He(x, De(Mr));
		return k && !N && (r || L) ? Mr : L && u <= 1 && N ? kr : L && (u > 1 || He(x, De(Lr))) ? Lr : He(x, De(Sr)) ? Sr : n || He(x, De(Nr)) ? Nr : a && He(x, De(Rr)) ? Rr : He(x, De(Cr)) ? Cr : r && He(x, De(Or)) ? Or : Ai
	}

	function bt(e, t, r, n, a, u, l, d) {
		return [e, t, r, zt(n), zt(a), zt(u), zt(l), d].join("|")
	}

	function Zn(e, t) {
		return t.filter(function(r) {
			return e.contains(r)
		})
	}

	function qi(e, t, r) {
		var n = t.filter(function(l) {
				return T(l, HTMLInputElement) && l.type === "hidden"
			}).length,
			a = t.filter(function(l) {
				return T(l, HTMLButtonElement) || Xt(l) === "s"
			}).length,
			u = t.slice(0, rt).map(Xt).join(",");
		return {
			pac: ia(t, Bi(e, t, r)),
			pad: bt(Ii, Kt, Gt, t.length, n, a, r.length, u)
		}
	}

	function oa(e) {
		if (!e) return {
			pac: wr,
			pad: bt(Tr, Kt, Gt, 0, 0, 0, 0, "")
		};
		var t = e.closest("form");
		if (!t) {
			for (var r = [], n = e.parentElement, a = 0; n && n !== document.body && a < 5; n = n.parentElement, a++) r.push(n);
			if (r.length === 0) return {
				pac: wr,
				pad: bt(Tr, Kt, Gt, 0, 0, 0, 0, "")
			};
			var u = r[r.length - 1],
				l = Ir(u).filter(function(R) {
					return !e.contains(R)
				}),
				d = Qn(u).filter(function(R) {
					return !e.contains(R)
				}),
				f = null,
				p = !0,
				v = !1,
				_ = void 0;
			try {
				for (var w = r[Symbol.iterator](), L; !(p = (L = w.next()).done); p = !0) {
					var x = L.value,
						N = Zn(x, l),
						k = Zn(x, d);
					if (N.length > 0 || k.length > 0) {
						f = qi(x, N, k);
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
				pac: wr,
				pad: bt(Tr, Kt, Gt, 0, 0, 0, 0, "")
			}
		}
		var I = Ir(t),
			O = I.filter(function(R) {
				return T(R, HTMLInputElement) && R.type === "hidden"
			}).length,
			ue = I.filter(function(R) {
				return T(R, HTMLButtonElement) || Xt(R) === "s"
			}).length,
			re = Qn(t).length,
			D = I.slice(0, rt).map(Xt).join(",");
		return {
			pac: ia(I, Vi(t, I)),
			pad: bt(Si, Ui(t), Wi(t), I.length, O, ue, re, D)
		}
	}

	function Ji(e) {
		return T(e, Element) ? e : e.parentElement
	}

	function ji(e) {
		return "querySelectorAll" in e
	}

	function ua(e, t) {
		var r, n = t == null ? void 0 : t.shouldIgnoreElement;
		if (n !== void 0) {
			var a = T(e, Element) ? [e] : [];
			(r = a).push.apply(r, Z(e.querySelectorAll("*")));
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

	function la(e, t) {
		var r = Ji(e);
		return r === null || t === void 0 ? !1 : t.has(r)
	}

	function ca(e, t) {
		var r = ua(e, t);
		return Z(e.querySelectorAll("*")).filter(function(n) {
			return !la(n, r)
		}).length
	}

	function da(e, t, r, n) {
		for (var a = "", u = ji(e) ? ua(e, n) : void 0, l = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), d = l.nextNode(); d !== null && a.length < r;) {
			if (!la(d, u)) {
				for (var f = 0, p = d; p !== null && p !== e;) f++, p = p.parentNode;
				if (f <= t)
					if (T(d, Element)) {
						var v = d;
						a += Ar(v.tagName.toLowerCase());
						var _ = !0,
							w = !1,
							L = void 0;
						try {
							for (var x = v.attributes[Symbol.iterator](), N; !(_ = (N = x.next()).done); _ = !0) {
								var k = N.value,
									I;
								(n == null || (I = n.shouldIgnoreAttribute) === null || I === void 0 ? void 0 : I.call(n, v, k)) !== !0 && (a += "_".concat(Ar(k.name, 2)))
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

	function Pr(e) {
		if (typeof e != "string") throw new TypeError("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : H(e)));
		for (var t = 5381, r = 0; r < e.length; r++) {
			var n = e.charCodeAt(r);
			t = t * 33 ^ n
		}
		return t >>> 0
	}
	var sa = (function(e) {
		return e.Failure = "failure", e.Verifying = "verifying", e.Overrunning = "overrunning", e.TimeCheckCachedWarning = "timecheckcachedwarning", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain", e.InvalidSitekey = "invalidsitekey", e.Custom = "custom", e
	})({});

	function Ke(e) {
		return Ke = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
		}, Ke(e)
	}

	function _t() {
		try {
			var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
		} catch (t) {}
		return (_t = function() {
			return !!e
		})()
	}

	function fa(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function pa(e, t) {
		return t && (H(t) === "object" || typeof t == "function") ? t : fa(e)
	}

	function va(e, t, r) {
		return t = Ke(t), pa(e, _t() ? Reflect.construct(t, r || [], Ke(e).constructor) : t.apply(e, r))
	}

	function ma(e, t) {
		if (!T(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function Ue(e, t) {
		return Ue = Object.setPrototypeOf || function(n, a) {
			return n.__proto__ = a, n
		}, Ue(e, t)
	}

	function ga(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && Ue(e, t)
	}

	function Et(e, t, r) {
		return _t() ? Et = Reflect.construct : Et = function(a, u, l) {
			var d = [null];
			d.push.apply(d, u);
			var f = Function.bind.apply(a, d),
				p = new f;
			return l && Ue(p, l.prototype), p
		}, Et.apply(null, arguments)
	}

	function ha(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Yt(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return Yt = function(n) {
			if (n === null || !ha(n)) return n;
			if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(n)) return t.get(n);
				t.set(n, a)
			}

			function a() {
				return Et(n, arguments, Ke(this).constructor)
			}
			return a.prototype = Object.create(n.prototype, {
				constructor: {
					value: a,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), Ue(a, n)
		}, Yt(e)
	}
	var ya = (function(e) {
		"use strict";
		ga(t, e);

		function t(r, n) {
			ma(this, t);
			var a;
			return a = va(this, t, [r]), $(a, "code", void 0), a.name = "TurnstileError", a.code = n, a
		}
		return t
	})(Yt(Error));
	var zi = RegExp("^https:\\/\\/(?:challenges(?:\\.fed)?\\.cloudflare\\.com|challenges\\.cloudflare-cn\\.com)\\/turnstile\\/v0(?:\\/.*)?\\/api\\.js", "u"),
		bl = RegExp("\\/turnstile\\/v0(?:\\/.*)?\\/api\\.js", "u");

	function E(e, t) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new ya(r, t)
	}

	function S(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function ba(e, t) {
		try {
			return t()
		} catch (r) {
			try {
				S("Uncaught error in ".concat(e, ": ").concat(String(r)))
			} catch (n) {}
			return
		}
	}

	function Oe(e, t) {
		if (t !== void 0) return function() {
			for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
			ba(e, function() {
				t.apply(void 0, Z(n))
			})
		}
	}

	function Fr(e) {
		if (e !== void 0) return function(t) {
			return ba("error-callback", function() {
				return e(t)
			}) === !0
		}
	}

	function xt(e) {
		return e.startsWith(Ut) ? e.slice(Ut.length) : null
	}

	function G(e) {
		return "".concat(Ut).concat(e)
	}

	function Qt(e, t) {
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

	function wt() {
		var e = zi,
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

	function _a() {
		var e = wt();
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

	function $t(e) {
		e != null && e.iframeHost && e.iframeHost.remove()
	}
	var Zt = ".";

	function ve(e, t) {
		return t.kills === void 0 ? !1 : "".concat(Zt).concat(t.kills).concat(Zt).includes("".concat(Zt).concat(e).concat(Zt))
	}

	function nt(e) {
		try {
			return new URL(e, window.location.href).origin
		} catch (t) {
			return
		}
	}

	function Dr(e, t, r) {
		if (r === void 0 || r === "") {
			if (0) var n;
			return
		}
		e == null || e.postMessage(t, r)
	}

	function me(e, t, r) {
		Dr(e.contentWindow, t, r)
	}
	var Ea = 16,
		Ki = 1,
		xa = 0,
		wa = 1,
		Ta = 2,
		Aa = 3,
		Ia = 4,
		Sa = 5,
		Ra = 6,
		Ca = 7;

	function Gi(e, t) {
		try {
			var r = new Error().stack;
			return typeof r != "string" ? void 0 : [e, Math.max(0, Math.floor(X() - t)), r, Ki]
		} catch (n) {
			return
		}
	}

	function Me(e, t) {
		return Gi(e, t.turnstileLoadInitTimeTsMs)
	}

	function ka(e) {
		return e[3] === void 0 ? [e[0], e[1], e[2]] : [e[0], e[1], e[2], e[3]]
	}

	function at(e) {
		var t;
		return (t = e == null ? void 0 : e.slice(-Ea).map(ka)) !== null && t !== void 0 ? t : []
	}

	function Tt(e, t) {
		if (!t) return !1;
		if (e.length > 0) {
			var r = e[e.length - 1];
			if (r[0] === t[0] && r[2] === t[2]) {
				var n, a, u = ((n = r[3]) !== null && n !== void 0 ? n : 1) + ((a = t[3]) !== null && a !== void 0 ? a : 1);
				return u === r[3] ? !1 : (r[3] = u, !0)
			}
		}
		for (e.push(ka(t)); e.length > Ea;) e.shift();
		return !0
	}

	function er(e) {
		return ve("gcs", e)
	}

	function At(e, t) {
		return er(e) ? !1 : Tt(e.gcs, t)
	}

	function Xi(e) {
		var t = at(e.gcs);
		return t.length > 0 ? t : void 0
	}

	function It(e) {
		if (!er(e)) return Xi(e)
	}

	function tr(e, t) {
		if (t.isInitialized) {
			var r = It(t);
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

	function Ve(e, t, r) {
		var n = At(t, r);
		return n && tr(e, t), n
	}
	var La = 12,
		Yi = "fivs",
		Qi = "tf",
		Oa = "...";

	function ir(e) {
		return e.iframeHost ? e.iframeHost : e.shadow.host === e.wrapper ? e.wrapper : E("Turnstile Initialization Error", 3606)
	}

	function $i(e) {
		return T(e.iframeHost, HTMLDivElement) && e.iframeHost !== e.wrapper
	}

	function Ur(e) {
		return ve(Yi, e)
	}

	function nr(e) {
		if ($i(e)) {
			var t = e.iframeHost,
				r = e.mode === se.Invisible && !Ur(e) ? document.body : e.wrapper;
			t.parentNode !== r && r.appendChild(t)
		}
	}

	function Na(e) {
		var t = e.getBoundingClientRect();
		return {
			h: Math.round(t.height),
			w: Math.round(t.width),
			x: Math.round(t.left),
			y: Math.round(t.top)
		}
	}

	function Vr(e) {
		return e.w > 0 && e.h > 0 && e.x + e.w > 0 && e.y + e.h > 0 && e.x < window.innerWidth && e.y < window.innerHeight
	}

	function Zi(e) {
		return e.isConnected ? Vr(Na(e)) : !1
	}

	function Pa(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 80;
		return e.length <= t ? e : "".concat(e.slice(0, t - Oa.length)).concat(Oa)
	}

	function Br(e, t) {
		return e ? e === t.wrapper ? "wrapper" : e === t.iframeHost ? "iframe-host" : e === t.iframe ? "iframe" : e === document.body ? "body" : e === document.documentElement ? "document-element" : e === t.wrapper.parentElement ? "wrapper-parent" : e.contains(t.wrapper) || e.contains(t.iframeHost) ? "ancestor" : "other" : null
	}

	function Ma(e) {
		var t = [];
		e.style.display === "none" && t.push("dn"), (e.style.visibility === "hidden" || e.style.visibility === "collapse") && t.push(e.style.visibility === "hidden" ? "vh" : "vc");
		var r = Number(e.style.opacity);
		return Number.isFinite(r) && r <= .01 && t.push("op"), e.style.contentVisibility === "hidden" && t.push("cv"), t
	}

	function eo(e) {
		var t = [];
		return e.connected || t.push("dt"), (e.rect.w === 0 || e.rect.h === 0) && t.push("zs"), t
	}

	function to(e) {
		if (e === "" || e === "none") return null;
		var t;
		try {
			t = new DOMMatrixReadOnly(e)
		} catch (r) {
			return null
		}
		return t.a === 1 && t.b === 0 && t.c === 0 && t.d === 1 ? [t.e, t.f] : null
	}

	function ro(e, t, r) {
		for (var n = e, a = 0; n && a < La;) {
			var u = rr(n, t, r),
				l = to(u.style.transform);
			if (l && u.rect.w > 0 && u.rect.h > 0 && !u.inViewport && Vr(pt(Ce({}, u.rect), {
					x: u.rect.x - l[0],
					y: u.rect.y - l[1]
				}))) return ar(u, [Qi]);
			n = n.parentElement, a += 1
		}
		return null
	}

	function Fa(e, t) {
		var r, n = Na(e),
			a = window.getComputedStyle(e);
		return {
			connected: e.isConnected,
			element: (r = Br(e, t)) !== null && r !== void 0 ? r : "unknown",
			inViewport: e.isConnected && Vr(n),
			rect: n,
			style: {
				contentVisibility: a.contentVisibility,
				display: a.display,
				opacity: a.opacity,
				position: a.position,
				transform: Pa(a.transform),
				visibility: a.visibility
			}
		}
	}

	function Da(e, t) {
		var r, n = window.getComputedStyle(e);
		return {
			connected: e.isConnected,
			element: (r = Br(e, t)) !== null && r !== void 0 ? r : "unknown",
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
				transform: Pa(n.transform),
				visibility: n.visibility
			}
		}
	}

	function rr(e, t, r) {
		var n = r.get(e);
		if (n) return n;
		var a = Fa(e, t);
		return r.set(e, a), a
	}

	function ar(e, t) {
		return t.length === 0 ? null : {
			element: Wa(e.element),
			reasons: t
		}
	}

	function Ha(e, t, r, n) {
		var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
			u = Ma(t);
		if (t.connected || u.push("dt"), u.length > 0) return ar(t, u);
		for (var l = e.parentElement, d = 0; l && d < La;) {
			var f = n == null ? void 0 : n.get(l);
			f || (f = a ? Da(l, r) : Fa(l, r), n == null || n.set(l, f));
			var p = Ma(f);
			if (p.length > 0) return ar(f, p);
			l = l.parentElement, d += 1
		}
		return null
	}

	function Hr(e, t, r, n) {
		var a = Ha(e, t, r, n);
		if (a) return a;
		if (!t.inViewport) {
			var u = ro(e, r, n);
			if (u) return u
		}
		return ar(t, eo(t))
	}

	function no(e) {
		return e.mode === se.Invisible ? {
			expectedHidden: !0,
			reason: "mi"
		} : e.params.appearance === ie.InteractionOnly ? {
			expectedHidden: !0,
			reason: "ai"
		} : e.params.appearance === ie.Execute && !e.isExecuting ? {
			expectedHidden: !0,
			reason: "ae"
		} : {
			expectedHidden: !1,
			reason: null
		}
	}

	function ao(e, t) {
		return t === e.wrapper ? "wrapper" : t.isConnected ? t.parentElement === e.wrapper ? "wrapper" : t.parentElement === document.body ? "body" : "other" : "detached"
	}

	function Wa(e) {
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

	function io(e) {
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

	function Wr(e, t) {
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
		var r, n, a = ir(e),
			u = {
				iframe: t,
				iframeHost: a,
				wrapper: e.wrapper
			},
			l = no(e),
			d = ao(e, a),
			f = Br(a.parentElement, u),
			p = {
				height: window.innerHeight,
				visibilityState: document.visibilityState,
				width: window.innerWidth
			};
		if (l.expectedHidden) {
			var v, _;
			return {
				appearance: (v = e.params.appearance) !== null && v !== void 0 ? v : ie.Always,
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
			L = rr(e.wrapper, u, w),
			x = rr(a, u, w),
			N = rr(t, u, w),
			k = Hr(e.wrapper, L, u, w),
			I = Hr(a, x, u, w),
			O = Hr(t, N, u, w),
			ue = [d === "wrapper" ? null : "m:".concat(io(d), ":").concat(Wa(f)), Wr("wrapper", k), Wr("iframeHost", I), Wr("iframe", O)].filter(function(re) {
				return re !== null
			});
		return {
			appearance: (r = e.params.appearance) !== null && r !== void 0 ? r : ie.Always,
			expectedHidden: !1,
			expectedHiddenReason: null,
			hostParent: f,
			isExecuting: e.isExecuting,
			mode: (n = e.mode) !== null && n !== void 0 ? n : null,
			mount: d,
			reasons: Z(new Set(ue)),
			unexpectedHidden: ue.length > 0,
			viewport: p
		}
	}

	function oo(e, t) {
		var r = ir(e);
		if (r.parentElement === document.body) return !1;
		if (!Zi(t)) return !0;
		var n = {
				iframe: t,
				iframeHost: r,
				wrapper: e.wrapper
			},
			a = new Map,
			u = Da(r, n);
		return a.set(r, u), Ha(r, u, n, a, !0) !== null
	}

	function Va(e, t) {
		if (e.mode !== se.Invisible || Ur(e)) {
			nr(e);
			return
		}
		oo(e, t) && nr(e)
	}

	function uo(e) {
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true")
	}

	function lo(e) {
		e.style.width = "0", e.style.height = "0", e.style.opacity = "", e.style.position = "absolute", e.style.left = "", e.style.top = "", e.style.visibility = "hidden", e.style.pointerEvents = "", e.style.zIndex = "", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true")
	}

	function qr(e, t) {
		if (t.mode === void 0 || Ur(t)) {
			lo(e);
			return
		}
		uo(e)
	}

	function K(e, t) {
		return e.indexOf(t) !== -1
	}
	var co = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		so = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		Ba = "https://challenges.cloudflare.com",
		qa = [Ba, "https://challenges.fed.cloudflare.com", "https://challenges.cloudflare-cn.com", "https://challenges-staging.cloudflare.com"];

	function or(e, t, r) {
		var n, a = Ba,
			u = (n = r == null ? void 0 : r.origin) !== null && n !== void 0 ? n : a;
		if (t) {
			var l;
			return (l = e["base-url"]) !== null && l !== void 0 ? l : u
		}
		return u
	}

	function Jr(e, t, r, n, a, u, l, d, f) {
		var p = or(r, a, d),
			v = u !== void 0 && u !== "" ? "h/".concat(u, "/") : "",
			_ = f !== void 0 && f !== "" ? "&".concat(f) : "",
			w = r["feedback-enabled"] === !1 ? "fbD" : "fbE",
			L = r.chlPageOfflabel === !0 ? "&offlabel=true" : "";
		return "".concat(p, "/cdn-cgi/challenge-platform/").concat(v, "turnstile/f/av0/rch").concat(n, "/").concat(e, "/").concat(t, "/").concat(r.theme, "/").concat(w, "/").concat(l, "/").concat(r.size, "?lang=").concat(r.language).concat(L).concat(_)
	}
	var jr = function(t) {
			var r, n, a, u, l = window.innerWidth < 400,
				d = t.state !== Jt.FailureFeedbackCode && (t.state === Jt.FailureFeedback || t.state === Jt.FailureHavingTroubles || t.errorCode === void 0 || t.errorCode === 0),
				f = K(co, (r = (a = t.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && r !== void 0 ? r : "nonexistent"),
				p = K(so, (n = (u = t.displayLanguage) === null || u === void 0 ? void 0 : u.toLowerCase()) !== null && n !== void 0 ? n : "nonexistent");
			return l ? fo({
				isModeratelyVerbose: p,
				isSmallerFeedback: d,
				isVerboseLanguage: f
			}) : d && f ? "680px" : d && p ? "670px" : d ? "650px" : f ? "690px" : "680px"
		},
		fo = function(t) {
			var r = t.isVerboseLanguage,
				n = t.isSmallerFeedback,
				a = t.isModeratelyVerbose;
			return n && r ? "660px" : n && a ? "620px" : n ? "600px" : r ? "770px" : a ? "740px" : "730px"
		};
	var po = 5e3,
		vo = "auto-troubleshoot-click";

	function mo(e, t) {
		var r = or(e.params, !1, t),
			n = "h/".concat("g", "/");
		return "".concat(r, "/cdn-cgi/challenge-platform/").concat(n, "fr")
	}
	var za = function(t, r, n, a, u) {
		var l, d, f, p, v, _, w;
		if (a === void 0 || a === "" || n === void 0 || n === "") return !1;
		var L = mo(t, u),
			x = new FormData;
		x.append("consent", "on"), x.append("origin", r), x.append("issue", vo), x.append("description", ""), x.append("rayId", n), x.append("sitekey", (l = t.params.sitekey) !== null && l !== void 0 ? l : ""), x.append("rcV", (d = t.rcV) !== null && d !== void 0 ? d : ""), x.append("cfChlOut", (f = t.cfChlOut) !== null && f !== void 0 ? f : ""), x.append("cfChlOutS", (p = t.cfChlOutS) !== null && p !== void 0 ? p : ""), x.append("mode", (v = t.mode) !== null && v !== void 0 ? v : ""), x.append("errorCode", String((_ = t.errorCode) !== null && _ !== void 0 ? _ : 0)), x.append("frMd", a), x.append("displayLanguage", (w = t.displayLanguage) !== null && w !== void 0 ? w : "");
		try {
			if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(L, x)) return !0
		} catch (N) {
			S("auto feedback report: sendBeacon threw synchronously, falling through to fetch (".concat(zr(N), ")"))
		}
		try {
			return fetch(L, Ce({
				body: x,
				keepalive: !0,
				method: "POST",
				mode: "no-cors"
			}, Ja())), !0
		} catch (N) {
			S("auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (".concat(zr(N), ")"))
		}
		try {
			fetch(L, Ce({
				body: x,
				method: "POST",
				mode: "no-cors"
			}, Ja()))
		} catch (N) {
			S("auto feedback report: all transports failed (".concat(zr(N), ")"))
		}
		return !1
	};

	function Ja() {
		return typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function" ? {} : {
			signal: AbortSignal.timeout(po)
		}
	}

	function zr(e) {
		return T(e, Error) ? e.message : "unknown error"
	}
	var ur = null,
		St = 0,
		Ka = function() {
			if (St++, St === 1) {
				var t = document.querySelector('meta[http-equiv="refresh"]');
				t && (ur = t.getAttribute("content"), t.remove())
			}
		},
		Ga = function() {
			if (St > 0 && St--, St === 0 && ur !== null) {
				var t = document.createElement("meta");
				t.httpEquiv = "refresh", t.content = ur, ur = null, document.head.appendChild(t)
			}
		},
		Kr = Symbol(),
		go = "host-origin",
		it = function(t) {
			t.feedbackPopup && !t.feedbackPopup.closed && t.feedbackPopup.close(), t.feedbackPopup = void 0, t.feedbackPopupOrigin = void 0
		};

	function Xa(e) {
		return e.endsWith("-fr") ? e : "".concat(e, "-fr")
	}

	function Ya(e) {
		var t, r, n, a = (n = document.querySelector("#".concat(e))) === null || n === void 0 || (r = n.parentElement) === null || r === void 0 || (t = r.parentElement) === null || t === void 0 ? void 0 : t.parentElement;
		return T(a, HTMLDivElement) ? a : null
	}

	function ja(e) {
		if (!((typeof e == "undefined" ? "undefined" : H(e)) !== "object" || e === null)) {
			var t = Object.getOwnPropertyDescriptor(e, "cleanup"),
				r = t === void 0 ? void 0 : Reflect.get(t, "value");
			if (typeof r == "function") return function() {
				Reflect.apply(r, void 0, [])
			}
		}
	}

	function Qa(e) {
		var t, r = ja((t = Object.getOwnPropertyDescriptor(e, Kr)) === null || t === void 0 ? void 0 : t.value);
		if (r) return r;
		var n = !0,
			a = !1,
			u = void 0;
		try {
			for (var l = Object.getOwnPropertySymbols(e)[Symbol.iterator](), d; !(n = (d = l.next()).done); n = !0) {
				var f = d.value,
					p, v = ja((p = Object.getOwnPropertyDescriptor(e, f)) === null || p === void 0 ? void 0 : p.value);
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

	function ho(e, t) {
		Object.defineProperty(e, Kr, {
			configurable: !0,
			enumerable: !1,
			value: {
				cleanup: t
			}
		})
	}

	function yo(e) {
		Reflect.deleteProperty(e, Kr)
	}

	function bo(e) {
		var t = new URL(e, window.location.href),
			r = new URLSearchParams(t.hash.startsWith("#") ? t.hash.slice(1) : t.hash);
		return r.set(go, window.location.origin), t.hash = r.toString(), t.toString()
	}
	var Gr = function(t, r, n, a, u) {
			var l, d, f = Xa(t),
				p = or(r.params, !1, a),
				v = "h/".concat("g", "/"),
				_ = bo("".concat(p, "/cdn-cgi/challenge-platform/").concat(v, "fr/").concat(xt(t), "/").concat(r.displayLanguage, "/").concat((d = r.params.theme) !== null && d !== void 0 ? d : r.theme, "/").concat(n));
			if (it(r), window.top !== window.self) {
				var w = window.open(_, "_blank");
				if (w) {
					r.feedbackPopupOrigin = nt(_), r.feedbackPopup = w;
					var L = window.setInterval(function() {
						w.closed && (window.clearInterval(L), r.feedbackPopupCloseCheck = void 0, u == null || u())
					}, 500);
					r.feedbackPopupCloseCheck = L;
					return
				}
				S("Unable to open feedback report popup, falling back to the embedded feedback overlay.")
			}
			r.wrapper.parentNode || E("Cannot initialize Widget, Element not found (#".concat(t, ")."), 3074);
			var x = Ya(f);
			if (x) {
				var N;
				(N = Qa(x)) === null || N === void 0 || N()
			}
			var k = document.createElement("div");
			k.style.position = "fixed", k.style.zIndex = "2147483646", k.style.width = "100vw", k.style.height = "100vh", k.style.top = "0", k.style.left = "0", k.style.transformOrigin = "center center", k.style.overflowX = "hidden", k.style.overflowY = "auto", k.style.background = "rgba(0,0,0,0.4)";
			var I = document.createElement("div");
			I.className = "cf-wrapper-turnstile-feedback", I.style.display = "table-cell", I.style.verticalAlign = "middle", I.style.width = "100vw", I.style.height = "100vh";
			var O = document.createElement("div");
			O.className = "cf-turnstile-feedback", O.id = "cf-fr-id", O.style.width = "100vw", O.style.maxWidth = "500px", O.style.height = jr(r), O.style.position = "relative", O.style.zIndex = "2147483647", O.style.backgroundColor = "#ffffff", O.style.borderRadius = "5px", O.style.left = "0px", O.style.top = "0px", O.style.overflow = "hidden", O.style.margin = "0px auto";
			var ue = function() {
					O.style.height = jr(r)
				},
				re = function() {
					var le;
					yo(k), r.feedbackIframeOrigin = void 0, window.removeEventListener("resize", ue), (le = k.parentNode) === null || le === void 0 || le.removeChild(k), u == null || u()
				},
				D = document.createElement("iframe");
			D.id = f, D.setAttribute("src", _), D.setAttribute("title", "Turnstile feedback report"), D.setAttribute("allow", "cross-origin-isolated; fullscreen"), D.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), D.setAttribute("scrolling", "yes"), D.style.borderWidth = "0px", D.style.width = "100%", D.style.height = "100%", D.style.overflow = "auto", r.feedbackIframeOrigin = nt(_);
			var R = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			R.setAttribute("tabindex", "0"), R.setAttribute("role", "button"), R.setAttribute("aria-label", "Close feedback report"), R.style.position = "absolute", R.style.width = "26px", R.style.height = "26px", R.style.zIndex = "2147483647", R.style.cursor = "pointer", r.displayRtl === !0 ? R.style.left = "24px" : R.style.right = "24px", R.style.top = "24px", R.setAttribute("width", "20"), R.setAttribute("height", "20"), R.addEventListener("click", function(W) {
				W.stopPropagation(), re()
			}), R.addEventListener("keydown", function(W) {
				(W.key === "Enter" || W.key === " ") && (W.preventDefault(), W.stopPropagation(), re())
			});
			var J = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			J.setAttribute("ry", "12"), J.setAttribute("rx", "12"), J.setAttribute("cy", "12"), J.setAttribute("cx", "12"), J.setAttribute("fill", "none"), J.setAttribute("stroke-width", "0"), R.appendChild(J);
			var j = document.createElementNS("http://www.w3.org/2000/svg", "line");
			j.setAttribute("stroke-width", "1"), j.setAttribute("fill", "none"), j.setAttribute("x1", "6"), j.setAttribute("x2", "18"), j.setAttribute("y1", "18"), j.setAttribute("y2", "5");
			var B = document.createElementNS("http://www.w3.org/2000/svg", "line");
			B.setAttribute("stroke-width", "1"), B.setAttribute("fill", "none"), B.setAttribute("x1", "6"), B.setAttribute("x2", "18"), B.setAttribute("y1", "5"), B.setAttribute("y2", "18"), r.theme === qt.Light ? (j.setAttribute("stroke", "#0A0A0A"), B.setAttribute("stroke", "#0A0A0A")) : (j.setAttribute("stroke", "#F2F2F2"), B.setAttribute("stroke", "#F2F2F2")), R.appendChild(j), R.appendChild(B), O.appendChild(D), O.appendChild(R), I.appendChild(O), k.appendChild(I), k.addEventListener("click", re), r.wrapper.parentNode.appendChild(k), window.addEventListener("resize", ue), ho(k, re)
		},
		Rt = function(t) {
			var r, n = Xa(t),
				a = Ya(n);
			if (a) {
				var u = Qa(a);
				if (u) {
					u();
					return
				}
				S("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup."), (r = a.parentNode) === null || r === void 0 || r.removeChild(a)
			}
		};
	var _o = 900,
		Eo = 45,
		xo = 50;

	function wo(e) {
		return T(e, ShadowRoot)
	}

	function To(e, t, r) {
		var n = e.widgetMap.get(t);
		(n == null ? void 0 : n.retryTimeout) !== void 0 && (window.clearTimeout(n.retryTimeout), n.retryTimeout = void 0), $t(n), S("Cannot find Widget ".concat(r, ", consider using turnstile.remove() to clean up a widget.")), e.widgetMap.delete(t)
	}

	function Ao(e) {
		e.watchCatSeq++;
		var t = [],
			r = !0,
			n = !1,
			a = void 0;
		try {
			for (var u = e.widgetMap[Symbol.iterator](), l; !(r = (l = u.next()).done); r = !0) {
				var d = Ze(l.value, 2),
					f = d[0],
					p = d[1],
					v = G(f),
					_ = p.shadow;
				if (!wo(_) || !p.wrapper.isConnected) {
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
					var L = p.watchcat.seq - 1 - Eo,
						x = p.watchcat.lastAckedSeq < L,
						N = p.watchcat.seq - 1 - xo,
						k = p.isOverrunning && p.watchcat.overrunBeginSeq !== 0 && p.watchcat.overrunBeginSeq < N;
					if ((p.isExecuting || !p.isInitialized || !p.isStale && !p.isExecuted) && p.watchcat.lastAckedSeq !== 0 && x || k) {
						var I, O;
						p.watchcat.lastAckedSeq = 0, p.watchcat.seq = 0, p.isExecuting = !1;
						var ue = function(Be, ce) {
							console.log("Turnstile Widget seem to have ".concat(Be, ": "), ce)
						};
						ue(x ? "hung" : "crashed", f);
						var re = x ? Vt : Bt;
						if ((O = e.internalMsgHandler) === null || O === void 0 || O.call(e, {
								code: re,
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
				var le = W.value,
					U = le.widgetElId,
					ge = le.widgetId;
				To(e, ge, U)
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
		t.length > 0 && e.widgetMap.size === 0 && Ct(e)
	}

	function Xr(e) {
		var t, r;
		(r = (t = e).watchCatInterval) !== null && r !== void 0 || (t.watchCatInterval = setInterval(function() {
			Ao(e)
		}, _o))
	}

	function Ct(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && (clearInterval(e.watchCatInterval), e.watchCatInterval = null)
	}
	var Qr = Symbol();

	function Za(e) {
		return (typeof e == "undefined" ? "undefined" : H(e)) === "object" && e !== null ? e : void 0
	}

	function Yr(e) {
		return (typeof e == "undefined" ? "undefined" : H(e)) === "object" && e !== null && "widgetMap" in e && T(e.widgetMap, Map) && "upgradeAttempts" in e && typeof e.upgradeAttempts == "number" && "upgradeCompletedCount" in e && typeof e.upgradeCompletedCount == "number"
	}

	function Io(e, t) {
		Object.defineProperty(e, Qr, {
			configurable: !0,
			enumerable: !1,
			value: t
		})
	}

	function So(e) {
		var t = Object.getOwnPropertyDescriptor(e, Qr),
			r = t === void 0 ? void 0 : Reflect.get(t, "value");
		if (Yr(r)) return r;
		var n = Qt(e, Yr);
		if (n) return n
	}

	function ei(e) {
		Reflect.deleteProperty(e, Qr);
		var t = !0,
			r = !1,
			n = void 0;
		try {
			for (var a = Object.getOwnPropertySymbols(e)[Symbol.iterator](), u; !(t = (u = a.next()).done); t = !0) {
				var l = u.value,
					d = Object.getOwnPropertyDescriptor(e, l),
					f = d === void 0 ? void 0 : Reflect.get(d, "value");
				Yr(f) && Reflect.deleteProperty(e, l)
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

	function Ro(e) {
		return !Number.isFinite(e.apiJsReloadBackoffMs) || e.apiJsReloadBackoffMs <= 0 ? et : Math.min(e.apiJsReloadBackoffMs, mt)
	}

	function Co(e) {
		return !Number.isFinite(e.apiJsReloadNextAllowedTsMs) || e.apiJsReloadNextAllowedTsMs <= 0 ? 0 : e.apiJsReloadNextAllowedTsMs
	}

	function $a(e, t) {
		var r = Reflect.get(e, t);
		return typeof r == "number" ? r : 0
	}

	function ti(e, t) {
		var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wt;
		t.upgradeAttempts++;
		var n = r();
		if (!(n != null && n.parentNode)) return !1;
		var a = Za(e);
		if (!a) return !1;
		var u = n.nonce;
		Io(a, t);
		var l = new URL(n.src),
			d = document.createElement("script");
		l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), d.async = !0, u && (d.nonce = u), d.setAttribute("crossorigin", "anonymous"), d.src = l.toString();
		try {
			return n.parentNode.replaceChild(d, n), !0
		} catch (f) {
			if (!T(f, DOMException)) throw f;
			return ei(a), !1
		}
	}

	function ri(e, t, r) {
		var n = Za(e);
		if (!n) return !1;
		var a = So(n);
		if (!a) return !1;
		var u = a.apiJsMismatchReloadPending;
		t.isReady = a.isReady, t.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, t.gcs = at(a.gcs), t.lastWidgetIdx = a.lastWidgetIdx, t.scriptWasLoadedAsync = a.scriptWasLoadedAsync, t.apiJsReloadBackoffMs = u ? et : Ro(a), t.apiJsReloadNextAllowedTsMs = Co(a), t.apiJsMismatchReloadAttempts = $a(a, "apiJsMismatchReloadAttempts"), t.apiJsMismatchReloadCompletedCount = $a(a, "apiJsMismatchReloadCompletedCount") + (u ? 1 : 0), t.apiJsMismatchReloadPending = !1, t.upgradeAttempts = a.upgradeAttempts, t.upgradeCompletedCount = a.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = X(), t.watchCatInterval = null, t.watchCatSeq = a.watchCatSeq, t.widgetMap = a.widgetMap;
		var l = !0,
			d = !1,
			f = void 0;
		try {
			for (var p = t.widgetMap.values()[Symbol.iterator](), v; !(l = (v = p.next()).done); l = !0) {
				var _ = v.value;
				_.gcs = at(_.gcs)
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
		return Ct(a, !0), a.msgHandler && window.removeEventListener("message", a.msgHandler), ei(n), r(), !0
	}

	function $r(e) {
		return K(["auto", "dark", "light"], e)
	}

	function Zr(e) {
		return K(["auto", "never"], e)
	}

	function en(e) {
		return e > 0 && e < 9e5
	}

	function tn(e) {
		return e > 0 && e < 36e4
	}
	var ko = RegExp("^[0-9A-Za-z_-]{3,100}$", "u");

	function ni(e) {
		return ko.test(e)
	}
	var Oo = RegExp("^[a-z0-9_-]{0,32}$", "iu");

	function rn(e) {
		return e === void 0 ? !0 : typeof e == "string" && Oo.test(e)
	}
	var Mo = RegExp("^[a-z0-9_\\-=]{0,255}$", "iu");

	function nn(e) {
		return e === void 0 ? !0 : typeof e == "string" && Mo.test(e)
	}

	function an(e) {
		return K([ee.Normal, ee.Compact, ee.Invisible, ee.Flexible], e)
	}

	function on(e) {
		return K(["auto", "manual", "never"], e)
	}

	function un(e) {
		return K(["auto", "manual", "never"], e)
	}
	var Lo = RegExp("^[a-z]{2,3}(?:[-_][a-z]{2})?$", "iu");

	function ln(e) {
		return e === "auto" || Lo.test(e)
	}

	function cn(e) {
		return K(["always", "execute", "interaction-only"], e)
	}

	function ai(e) {
		return K(["true", "false"], e)
	}

	function dn(e) {
		return K(["render", "execute"], e)
	}
	var sc = RegExp("^[0-9a-z_\\-.]{5,2000}$", "iu");

	function sn(e) {
		var t = new URLSearchParams;
		if (0) {
			var r;
			if (r != null && r !== "") var n
		}
		if (e.params["offlabel-show-privacy"] !== void 0 && t.set("offlabel_show_privacy", String(e.params["offlabel-show-privacy"])), e.params["offlabel-show-help"] !== void 0 && t.set("offlabel_show_help", String(e.params["offlabel-show-help"])), !(t.size === 0 || t.toString() === "")) return t.toString()
	}

	function ii(e, t) {
		if (e.isResetting = !1, t) {
			t(String(jn));
			return
		}
		E("Could not load challenge from challenges.cloudflare.com.", 161)
	}

	function oi(e, t) {
		return e ? t ? !0 : K(qa, e) : !1
	}

	function ui() {
		for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window, t = e; t && t.top !== t && !t.location.href.startsWith("http");) t = t.top;
		return t == null ? void 0 : t.location.href
	}
	var vi = Symbol(),
		No = "Turnstile has already been rendered in this container. The render attempt was rejected.",
		Po = "Turnstile skipped implicit render because a widget already exists in this container.",
		fn = void 0,
		Fo = function(e) {
			return e.styleSheets.length
		};

	function gn(e) {
		return Reflect.get(window, e)
	}

	function hn(e) {
		var t = gn(e);
		return typeof t == "function" ? function() {
			for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
			return Reflect.apply(t, window, n)
		} : void 0
	}

	function li(e, t) {
		return e == null ? t : Number(e)
	}

	function Do(e) {
		return e === "new" || e === "crashed_retry" || e === "failure_retry" || e === "stale_execute" || e === "auto_expire" || e === "auto_timeout" || e === "manual_refresh" || e === "api" || e === "check_delays" || e === "upgrade_reload" || e === "time_check_cached_warning_aux" || e === "js_cookies_missing_aux" || e === "redirecting_text_overrun"
	}

	function Ho(e) {
		var t = JSON.stringify(e);
		return JSON.parse(t)
	}

	function ci(e) {
		return (typeof e == "undefined" ? "undefined" : H(e)) === "object" && e !== null && "clearPendingApiJsReloadRequest" in e && typeof e.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in e && typeof e.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in e && typeof e.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in e && typeof e.reloadAfterUpgrade == "function"
	}

	function di(e) {
		if (!((typeof e == "undefined" ? "undefined" : H(e)) !== "object" || e === null)) {
			var t = Object.getOwnPropertyDescriptor(e, vi),
				r = t === void 0 ? void 0 : Reflect.get(t, "value");
			if (ci(r)) return r;
			var n = Qt(e, ci);
			if (n) return n
		}
	}
	var g = {
			apiJsMismatchReloadAttempts: 0,
			apiJsMismatchReloadCompletedCount: 0,
			apiJsMismatchReloadPending: !1,
			apiJsReloadBackoffMs: et,
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
		Mt, gr, yr;

	function Wo(e) {
		var t = !0,
			r = !1,
			n = void 0;
		try {
			for (var a = g.widgetMap[Symbol.iterator](), u; !(t = (u = a.next()).done); t = !0) {
				var l = Ze(u.value, 2),
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

	function lr(e) {
		if (typeof e == "string") {
			var t = xt(e);
			return t !== null && g.widgetMap.has(t) ? t : g.widgetMap.has(e) ? e : null
		}
		return Wo(e)
	}

	function Uo(e) {
		return e === "implicit" ? Po : No
	}

	function si(e, t) {
		return e === "explicit" && (t == null ? void 0 : t.renderSource) === "implicit"
	}

	function yn() {
		Mt !== void 0 && (window.clearTimeout(Mt), Mt = void 0)
	}

	function mi() {
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

	function Ot(e) {
		var t = g.widgetMap.get(e),
			r = G(e);
		if (t !== void 0) {
			var n = Ne(t, r);
			n !== null && me(n, {
				apiJsMismatchReloadAttempts: g.apiJsMismatchReloadAttempts,
				apiJsMismatchReloadCompletedCount: g.apiJsMismatchReloadCompletedCount,
				event: "reloadApiJsRejected",
				source: z,
				widgetId: e
			}, t.iframeOrigin)
		}
	}

	function bn() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			t = e.preserveMismatchReloadPending,
			r = t === void 0 ? !1 : t;
		yr = void 0, r || (g.apiJsMismatchReloadPending = !1), gr !== void 0 && (window.clearTimeout(gr), gr = void 0)
	}

	function gi() {
		var e = yr;
		bn(), e !== void 0 && Ot(e)
	}

	function Vo() {
		return X() < g.apiJsReloadNextAllowedTsMs
	}

	function Bo() {
		var e = g.apiJsReloadBackoffMs,
			t = Number.isFinite(e) && e > 0 ? Math.min(e, mt) : et,
			r = Math.round(t * (.8 + Math.random() * .4));
		g.apiJsReloadNextAllowedTsMs = X() + r, g.apiJsReloadBackoffMs = Math.min(t * 2, mt)
	}

	function qo(e) {
		bn({
			preserveMismatchReloadPending: !0
		}), g.apiJsMismatchReloadPending = !0, yr = e, gr = window.setTimeout(function() {
			gi()
		}, Wn)
	}

	function _n() {
		yn(), !mi() && (Mt = window.setTimeout(function() {
			Mt = void 0, _i()
		}, Vn))
	}

	function pn(e, t) {
		yi(e, t, "")
	}
	var En = [];

	function fi() {
		g.isReady = !0;
		var e = !0,
			t = !1,
			r = void 0;
		try {
			for (var n = En[Symbol.iterator](), a; !(e = (a = n.next()).done); e = !0) {
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

	function pi(e, t) {
		e.onerror = function() {
			ii(t, t.cbError)
		}
	}

	function hi(e, t) {
		var r, n = (r = e.params["response-field"]) !== null && r !== void 0 ? r : !0,
			a = g.isRecaptchaCompatibilityMode,
			u = "".concat(t, "_response"),
			l = "".concat(t, "_g_response"),
			d = (!n || T(document.querySelector("#".concat(u)), HTMLInputElement)) && (!a || T(document.querySelector("#".concat(l)), HTMLInputElement));
		if (!(e.responseElementsBuilt && d)) {
			if (n && !T(document.querySelector("#".concat(u)), HTMLInputElement)) {
				var f, p = document.createElement("input");
				p.type = "hidden", p.name = (f = e.params["response-field-name"]) !== null && f !== void 0 ? f : Dn, p.id = u, e.wrapper.appendChild(p)
			}
			if (a && !T(document.querySelector("#".concat(l)), HTMLInputElement)) {
				var v = document.createElement("input");
				v.type = "hidden", v.name = Hn, v.id = l, e.wrapper.appendChild(v)
			}
			e.responseElementsBuilt = !0
		}
	}

	function yi(e, t, r) {
		hi(e, t);
		var n = document.querySelector("#".concat(t, "_response"));
		if (n !== null && T(n, HTMLInputElement) && (n.value = r), g.isRecaptchaCompatibilityMode) {
			var a = document.querySelector("#".concat(t, "_g_response"));
			a !== null && T(a, HTMLInputElement) && (a.value = r)
		}
	}

	function Jo(e) {
		return e.chlPageData !== void 0 && e.chlPageData !== ""
	}

	function jo(e) {
		return !Jo(e) && !ve("pac", e)
	}

	function cr(e, t) {
		var r, n = (r = t.params.size) !== null && r !== void 0 ? r : ee.Normal,
			a = t.mode;
		switch (a) {
			case se.NonInteractive:
			case se.Managed:
				var u;
				switch (e.style.display = "", e.style.opacity = "", e.style.position = "", e.style.left = "", e.style.top = "", e.style.visibility = "", e.style.pointerEvents = "", e.style.zIndex = "", e.setAttribute("tabindex", String((u = t.params.tabindex) !== null && u !== void 0 ? u : 0)), e.removeAttribute("aria-hidden"), n) {
					case ee.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case ee.Invisible:
						E('Invalid value for parameter "size", expected "'.concat(ee.Compact, '", "').concat(ee.Flexible, '", or "').concat(ee.Normal, '", got "').concat(n, '"'), 2817);
					case ee.Normal:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case ee.Flexible:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break;
					default:
						break
				}
				break;
			case se.Invisible:
				qr(e, t);
				break;
			default:
				E('Invalid value for parameter "mode", expected "'.concat(se.NonInteractive, '", "').concat(se.Managed, '" or "').concat(se.Invisible, '", got "').concat(String(a), '"'), 2818)
		}
	}

	function vn(e, t) {
		qr(e, t)
	}

	function zo(e, t) {
		var r = t.get("turnstile_iframe_alt");
		r !== void 0 && r !== "" && (e.title = r)
	}

	function Ne(e, t) {
		return e.shadow.querySelector("#".concat(t))
	}

	function Ko(e, t) {
		var r, n;
		return (r = (n = e.wrapper.parentNode) === null || n === void 0 ? void 0 : n.querySelector("#".concat(t, "-fr"))) !== null && r !== void 0 ? r : null
	}

	function Go(e) {
		var t, r;
		return ((r = e.feedbackPopup) === null || r === void 0 ? void 0 : r.closed) === !0 ? (e.feedbackPopup = void 0, e.feedbackPopupOrigin = void 0, null) : (t = e.feedbackPopup) !== null && t !== void 0 ? t : null
	}

	function hr(e, t) {
		var r, n, a = (r = (n = Ko(e, t)) === null || n === void 0 ? void 0 : n.contentWindow) !== null && r !== void 0 ? r : null;
		if (a !== null) return {
			targetOrigin: e.feedbackIframeOrigin,
			targetWindow: a
		};
		var u = Go(e);
		return {
			targetOrigin: u === null ? void 0 : e.feedbackPopupOrigin,
			targetWindow: u
		}
	}

	function Xo(e) {
		if ((typeof e == "undefined" ? "undefined" : H(e)) !== "object" || e === null) return !1;
		var t = e;
		return t.source === z && typeof t.event == "string" && typeof t.widgetId == "string"
	}

	function Yo(e) {
		return e.isTrusted && Xo(e.data)
	}

	function Qo(e) {
		return oi(e.origin, !1)
	}

	function $o(e, t, r) {
		var n, a, u = (n = (a = Ne(t, r)) === null || a === void 0 ? void 0 : a.contentWindow) !== null && n !== void 0 ? n : null,
			l = hr(t, r).targetWindow,
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

	function mn() {
		return ui(window)
	}

	function dr(e, t, r) {
		return e === null ? t : ai(e) ? e === "true" : (S(r(e)), t)
	}

	function Zo() {
		try {
			var e = wt();
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
	var bi = (function() {
			var e = function(i) {
					var c;
					(c = le.get(i)) === null || c === void 0 || c(), le.delete(i)
				},
				t = function(i) {
					var c = W.get(i);
					if (!(!U.has(i) || !ge.has(i) || c === void 0 || i.autoFeedbackSent === !0 || ve("feedback-report-auto-submit", i))) {
						var m = za(i, c.feedbackOrigin, c.rayId, i.frMd, g.scriptUrlParsed);
						m && (i.autoFeedbackSent = !0, e(i), U.delete(i), W.delete(i), ge.delete(i))
					}
				},
				r = function(i) {
					if (e(i), !(W.get(i) === void 0 || i.autoFeedbackSent === !0)) {
						var c = function(s) {
							s.isTrusted && (U.add(i), t(i))
						};
						window.addEventListener("keydown", c, !0), window.addEventListener("mousemove", c, !0), window.addEventListener("touchstart", c, !0), le.set(i, function() {
							window.removeEventListener("keydown", c, !0), window.removeEventListener("mousemove", c, !0), window.removeEventListener("touchstart", c, !0)
						})
					}
				},
				n = function(i, c, m, s, o, A) {
					return In(function() {
						var h, y, P, M, F, q, Ee, he, Ye, ne, fe;
						return Ln(this, function(ae) {
							switch (ae.label) {
								case 0:
									if (y = function(xe, Y) {
											var pe = g.widgetMap.get(c);
											pe !== i || pe.isComplete || pe.isResetting || pe.response !== s || (!xe && Y !== void 0 && Y !== "" && S(Y), d(pe, m, xe))
										}, P = i.params.sitekey, M = mn(), M === void 0 || M === "") return S("Cannot determine Turnstile's embedded location, aborting clearance redemption."), d(i, m, !1), [2];
									F = "h/".concat("g", "/"), q = new URL(M), Ee = "https", he = "", Ye = "".concat(Ee, "://").concat(q.host, "/cdn-cgi/challenge-platform/").concat(F, "c/").concat(A).concat(he), ae.label = 1;
								case 1:
									return ae.trys.push([1, 3, , 4]), [4, fetch(Ye, {
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
									return ne = ae.sent(), ne.status === 200 ? y(!0) : y(!1, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), [3, 4];
								case 3:
									return fe = ae.sent(), y(!1, "Error contacting Turnstile, aborting clearance redemption."), [3, 4];
								case 4:
									return [2]
							}
						})
					})()
				},
				a = function(i, c, m) {
					if (i.params.retry === jt.Auto || m) {
						var s;
						if (i.feedbackOpen) {
							i.pendingRetry = {
								crashed: m
							};
							return
						}
						var o = m ? 0 : 1e3 * 2 + ((s = i.params["retry-interval"]) !== null && s !== void 0 ? s : 0);
						i.retryTimeout = window.setTimeout(function() {
							var A = m ? te.CrashedRetry : te.FailureRetry;
							I(A, c)
						}, o)
					}
				},
				u = function(i, c, m) {
					return i.params.execution === ht.Render ? !0 : (c === te.CrashedRetry || c === te.FailureRetry || c === te.CheckDelays || c === te.UpgradeReload) && i.params.execution === ht.Execute && m
				},
				l = function(i, c, m) {
					if (i.feedbackOpen && (i.feedbackOpen = !1, e(i), U.delete(i), W.delete(i), ge.delete(i), i.feedbackPopupCloseCheck !== void 0 && (window.clearInterval(i.feedbackPopupCloseCheck), i.feedbackPopupCloseCheck = void 0), Ga(), window.postMessage({
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
					i.response === void 0 && E("[Internal Error] Widget was completed but no response was given", 1362), i.isExecuting = !1, i.isComplete = !0, yi(i, c, i.response), (s = i.cbSuccess) === null || s === void 0 || s.call(i, i.response, m)
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
							cs: s === yt.Execute ? It(i) : void 0,
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
							h = void 0;
						try {
							for (var y = m[Symbol.iterator](), P; !(o = (P = y.next()).done); o = !0) {
								var M = P.value;
								Object.getOwnPropertyDescriptor(c, M) !== void 0 && c[M] !== void 0 && c[M] !== i.params[M] && s.push(M)
							}
						} catch (F) {
							A = !0, h = F
						} finally {
							try {
								!o && y.return != null && y.return()
							} finally {
								if (A) throw h
							}
						}
						s.length > 0 && E("The parameters ".concat(m.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(s.join(",")), 3618), c.action !== void 0 && c.action !== "" && (rn(c.action) || E('Invalid input for optional parameter "action", got "'.concat(c.action, '"'), 3604), i.action = c.action), c.cData !== void 0 && c.cData !== "" && (nn(c.cData) || E('Invalid input for optional parameter "cData", got "'.concat(c.cData, '"'), 3605), i.cData = c.cData), c["after-interactive-callback"] !== void 0 && (i.cbAfterInteractive = Oe("after-interactive-callback", c["after-interactive-callback"])), c["before-interactive-callback"] !== void 0 && (i.cbBeforeInteractive = Oe("before-interactive-callback", c["before-interactive-callback"])), c.callback !== void 0 && (i.cbSuccess = c.callback), c["expired-callback"] !== void 0 && (i.cbExpired = Oe("expired-callback", c["expired-callback"])), c["timeout-callback"] !== void 0 && (i.cbTimeout = Oe("timeout-callback", c["timeout-callback"])), c["error-callback"] !== void 0 && (i.cbError = Fr(c["error-callback"])), c["unsupported-callback"] !== void 0 && (i.cbUnsupported = c["unsupported-callback"]), c.chlPageData !== void 0 && c.chlPageData !== "" && (i.chlPageData = c.chlPageData)
					}
				},
				N = function(i, c, m) {
					i === "explicit" && c !== void 0 && x(c, m), S(Uo(i))
				},
				k = function(i) {
					I(te.Api, i, Me(Ta, g))
				},
				I = function(i, c, m) {
					var s, o, A = ce(c);
					A === null && E("Nothing to reset found for provided container", 3329);
					var h = g.widgetMap.get(A);
					h === void 0 && E("Widget ".concat(A, " to reset was not found."), 3331), At(h, m);
					var y = h.isExecuted;
					h.isResetting = !0, h.response = void 0, h.mode = void 0, h.msgQueue = [], h.isComplete = !1, h.isExecuted = !1, h.isExecuting = !1, h.isExpired = !1, h.isFailed = !1, h.isInitialized = !1, h.isStale = !1, h.isOverrunning = !1, h.cfChlOut = void 0, h.cfChlOutS = void 0, h.errorCode = void 0, h.frMd = void 0, h.autoFeedbackSent = !1, e(h), U.delete(h), W.delete(h), ge.delete(h), h.watchcat.overrunBeginSeq = 0, h.watchcat.lastAckedSeq = 0, h.watchcat.seq = 0, u(h, i, y) && (h.msgQueue.push(yt.Execute), h.isExecuted = !0, h.isExecuting = !0);
					var P = G(A),
						M = Ne(h, P);
					M === null && E("Widget ".concat(A, " to reset was not found."), 3330), (h.params.appearance === ie.InteractionOnly || h.params.appearance === ie.Execute) && vn(M, h), h.params.sitekey === null && E("Unexpected Error: Sitekey is null", 3347);
					var F = M.cloneNode();
					T(F, HTMLIFrameElement) || E("Unexpected Error: Cloned widget is not an iframe", 3348);
					var q = Jr(A, h.params.sitekey, h.params, (s = h.rcV) !== null && s !== void 0 ? s : ke, !1, "g", i, g.scriptUrlParsed, sn(h));
					F.src = q, pi(F, h), h.iframeOrigin = nt(q), (o = M.parentNode) === null || o === void 0 || o.replaceChild(F, M), pn(h, P), h.retryTimeout !== void 0 && window.clearTimeout(h.retryTimeout)
				},
				O = function(i, c) {
					var m = G(i),
						s = ["input#".concat(m, "_response"), "input#".concat(m, "_g_response")];
					document.querySelectorAll(s.join(", ")).forEach(function(o) {
						o.remove()
					}), c.shadow.querySelectorAll(s.join(", ")).forEach(function(o) {
						o.remove()
					}), Rt(m), it(c), c.wrapper.remove(), $t(c), c.retryTimeout !== void 0 && window.clearTimeout(c.retryTimeout), g.widgetMap.delete(i), Ct(g)
				},
				ue = function(i) {
					var c = Me(Aa, g),
						m = ce(i),
						s = m === null ? void 0 : g.widgetMap.get(m);
					if (m === null || s === void 0) {
						S("Nothing to remove found for the provided container.");
						return
					}
					Tt(g.gcs, c), At(s, c), O(m, s)
				},
				re = function() {
					var i = Z(g.widgetMap.keys()),
						c = !0,
						m = !1,
						s = void 0;
					try {
						for (var o = i[Symbol.iterator](), A; !(c = (A = o.next()).done); c = !0) {
							var h = A.value,
								y = g.widgetMap.get(h),
								P = G(h);
							y !== void 0 && (Rt(P), it(y), I(te.UpgradeReload, P))
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
					var o, A, h, y, P, M, F, q, Ee, he, Ye = X(),
						ne, fe;
					if (typeof i == "string") {
						var ae = lr(i);
						if (ae === null) {
							var Se;
							try {
								Se = document.querySelector(i)
							} catch (ru) {
								E('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(i, '"'), 3586)
							}
							Se === null && E('Unable to find a container for "'.concat(i, '"'), 3585), ne = Se
						} else {
							var xe, Y = g.widgetMap.get(ae),
								pe = (xe = Y == null ? void 0 : Y.wrapper.parentElement) !== null && xe !== void 0 ? xe : null;
							if (pe !== null && si(m, Y)) ne = pe, fe = {
								widget: Y,
								widgetId: ae
							};
							else return Y !== void 0 && Ve(ae, Y, s), N(m, Y, c), G(ae)
						}
					} else T(i, HTMLElement) ? ne = i : E('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
					if (fe === void 0) {
						var qe = lr(ne);
						if (qe !== null) {
							var we = g.widgetMap.get(qe);
							if (we !== void 0 && si(m, we) && we.wrapper.parentElement === ne) fe = {
								widget: we,
								widgetId: qe
							};
							else return we && Ve(qe, we, s), N(m, we, c), G(qe)
						}
					}
					var Qe = mn();
					if (Qe === void 0 || Qe === "") return E("Turnstile cannot determine its page location", 3607);
					var ut = tu(ne);
					if (ut !== void 0) {
						var b = Object.assign(ut, c),
							Je = b.action,
							je = b.cData,
							Lt = b.chlPageData,
							Pe = b.sitekey;
						b.theme = (o = b.theme) !== null && o !== void 0 ? o : qt.Auto, b.retry = (A = b.retry) !== null && A !== void 0 ? A : jt.Auto, b.execution = (h = b.execution) !== null && h !== void 0 ? h : ht.Render, b.appearance = (y = b.appearance) !== null && y !== void 0 ? y : ie.Always, b["retry-interval"] = li(b["retry-interval"], Un), b["expiry-interval"] = li(b["expiry-interval"], (Bn - qn) * 1e3), b.size = (P = b.size) !== null && P !== void 0 ? P : ee.Normal;
						var Nt = b.callback,
							br = Oe("expired-callback", b["expired-callback"]),
							lt = Oe("timeout-callback", b["timeout-callback"]),
							_r = Oe("after-interactive-callback", b["after-interactive-callback"]),
							Pt = Oe("before-interactive-callback", b["before-interactive-callback"]),
							ct = Fr(b["error-callback"]),
							dt = b["unsupported-callback"];
						typeof Pe != "string" && E('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof Pe == "undefined" ? "undefined" : H(Pe), '"'), 3588), ni(Pe) || E('Invalid input for parameter "sitekey", got "'.concat(Pe, '"'), 3589), an(b.size) || E('Invalid type for parameter "size", expected normal|compact, got "'.concat(String(b.size), '" ').concat(H(b.size)), 3590), $r(b.theme) || E('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(String(b.theme), '" ').concat(H(b.theme)), 3591), Zr(b.retry) || E('Invalid type for parameter "retry", expected never|auto, got "'.concat(String(b.retry), '" ').concat(H(b.retry)), 3592), (b.language === void 0 || b.language === "") && (b.language = "auto"), ln(b.language) || (S('Invalid language value: "'.concat(b.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), b.language = "auto"), cn(b.appearance) || E('Unknown appearance value: "'.concat(String(b.appearance), ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), dn(b.execution) || E('Unknown execution value: "'.concat(String(b.execution), ", expected either: 'render' or 'execute'."), 3601), en(b["retry-interval"]) || E('Invalid retry-interval value: "'.concat(b["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), tn(b["expiry-interval"]) || E('Invalid expiry-interval value: "'.concat(b["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
						var Fe = (M = b["refresh-expired"]) !== null && M !== void 0 ? M : tt.Auto;
						on(Fe) ? b["refresh-expired"] = Fe : E('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(String(Fe), '" ').concat(typeof Fe == "undefined" ? "undefined" : H(Fe)), 3603);
						var Re = (F = b["refresh-timeout"]) !== null && F !== void 0 ? F : gt.Auto;
						un(Re) ? b["refresh-timeout"] = Re : E('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(String(Re), '" ').concat(typeof Re == "undefined" ? "undefined" : H(Re)), 3603), rn(Je) || E('Invalid input for optional parameter "action", got "'.concat(Je, '"'), 3604), nn(je) || E('Invalid input for optional parameter "cData", got "'.concat(je, '"'), 3605);
						var Q = document.createElement("iframe"),
							Ft = document.createElement("div"),
							Dt = document.createElement("div"),
							de = Dt.attachShadow({
								mode: "closed"
							}),
							ye = _(),
							st = G(ye),
							be = [],
							ze = b.execution === ht.Render;
						ze && be.push(yt.Execute);
						var Ht = at(g.gcs);
						Tt(Ht, s), g.lastWidgetIdx++;
						var ft = {},
							$e = pt(Ce({
								action: Je,
								assetCtxCallback: b._acCb,
								autoFeedbackSent: !1,
								cData: je,
								cbAfterInteractive: _r,
								cbBeforeInteractive: Pt,
								cbError: ct,
								cbExpired: br,
								cbSuccess: Nt,
								cbTimeout: lt,
								cbUnsupported: dt,
								chlPageData: Lt,
								feedbackOpen: !1,
								gcs: Ht,
								idx: g.lastWidgetIdx,
								isComplete: !1,
								isExecuted: ze,
								isExecuting: ze,
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
								shadow: de,
								watchcat: {
									lastAckedSeq: 0,
									missingWidgetWarning: !1,
									overrunBeginSeq: 0,
									seq: 0
								}
							}, ft), {
								iframeHost: Dt,
								widgetInitStartTimeTsMs: 0,
								widgetParamsStartTimeTsMs: 0,
								widgetRenderEndTimeTsMs: 0,
								widgetRenderStartTimeTsMs: Ye,
								wrapper: Ft
							});
						g.widgetMap.set(ye, $e), Xr(g);
						var Te = g.widgetMap.get(ye);
						Te === void 0 && E("Turnstile Initialization Error", 3606), Te.chlPageData !== void 0 && Te.chlPageData !== "" && yn(), Q.style.border = "none", Q.style.overflow = "hidden";
						var wn = Jr(ye, Pe, b, ke, !1, "g", te.New, g.scriptUrlParsed, sn(Te));
						Te.iframeOrigin = nt(wn), Q.setAttribute("src", wn), pi(Q, Te);
						var Tn = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
						return K((q = (he = document.featurePolicy) === null || he === void 0 || (Ee = he.features) === null || Ee === void 0 ? void 0 : Ee.call(he)) !== null && q !== void 0 ? q : [], Er) && Tn.push(Er), Q.setAttribute("allow", Tn.join("; ")), Q.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), Q.id = st, Q.title = "Widget containing a Cloudflare security challenge", de.appendChild(Q), vn(Q, Te), nr(Te), hi(Te, st), fe && O(fe.widgetId, fe.widget), ne.appendChild(Ft), Te.widgetRenderEndTimeTsMs = X(), st
					}
				},
				R = function(i, c) {
					return D(i, c, "explicit", Me(xa, g))
				},
				J = function() {
					var i = [Nn, Pn];
					g.isRecaptchaCompatibilityMode && i.push(Fn);
					var c = Me(Ca, g);
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
						for (var A = g.widgetMap[Symbol.iterator](), h; !(m = (h = A.next()).done); m = !0) {
							var y = Ze(h.value, 2),
								P = y[0],
								M = y[1];
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
				B = Zo(),
				W = new WeakMap,
				le = new WeakMap,
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
									o.widgetInitStartTimeTsMs = X(), o.kills = i.kills, er(o) && (o.gcs.length = 0);
									var A = Ne(o, s);
									A || E("Cannot initialize Widget, Element not found (#".concat(s, ")."), 3074), o.mode = i.mode, o.nextRcV = i.nextRcV, o.mode === se.Invisible && o.params["refresh-expired"] === tt.Manual && S("refresh-expired=manual is impossible in invisible mode, consider using '".concat(tt.Auto, "' or '").concat(tt.Never, ".'")), o.mode !== se.Managed && o.params["refresh-timeout"] !== gt.Auto && S("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), o.params.appearance === ie.Always || o.isExecuting && o.params.appearance === ie.Execute ? cr(A, o) : vn(A, o), Va(o, A);
									var h = Ne(o, s);
									h || E("Received state for an unknown widget: ".concat(i.widgetId), 3078), me(h, {
										event: "init",
										source: z,
										widgetId: i.widgetId
									}, o.iframeOrigin);
									break
								}
								case "translationInit": {
									var y = o.shadow.querySelector("#".concat(s));
									T(y, HTMLElement) || E("Cannot initialize Widget, Element not found (#".concat(s, ")."), 3074);
									var P = new Map;
									o.displayLanguage = i.displayLanguage, o.displayRtl = i.displayRtl, Object.keys(i.translationData).forEach(function($e) {
										P.set($e, i.translationData[$e])
									}), zo(y, P);
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
										var he = o.params.sitekey;
										if (he !== null && he !== "") {
											var Ye = "".concat(xr).concat(he);
											try {
												localStorage.setItem(Ye, i.scs)
											} catch ($e) {}
										}
									}
									i.sToken !== void 0 && i.sToken !== "" ? n(o, i.widgetId, s, i.token, i.sToken, i.chlId) : d(o, s, !1);
									break
								}
								case "fail": {
									var ne = Reflect.get(i, "rcV");
									if (typeof ne == "string" && ne !== "" && v(o, ne, m), i.cfChlOut !== void 0 && i.cfChlOut !== "" && (o.cfChlOut = i.cfChlOut), i.cfChlOutS !== void 0 && i.cfChlOutS !== "" && (o.cfChlOutS = i.cfChlOutS), i.code !== void 0 && i.code !== 0 && (o.errorCode = i.code), i.aC !== void 0 && i.aC !== "") {
										var fe;
										(fe = o.assetCtxCallback) === null || fe === void 0 || fe.call(o, i.aC)
									}
									o.isExecuting = !1, o.isFailed = !0, o.isInitialized = !0, i.frMd !== void 0 && i.frMd !== "" && (o.frMd = i.frMd), pn(o, s);
									var ae = o.cbError,
										Se = i.code === Vt || i.code === Bt,
										xe = i.code !== Jn;
									if (Se) {
										var Y = Ne(o, s);
										Y && me(Y, {
											event: "forceFail",
											source: z,
											widgetId: i.widgetId
										}, o.iframeOrigin)
									}
									if (ae !== void 0) {
										var pe;
										ae(String((pe = i.code) !== null && pe !== void 0 ? pe : zn)) === !0 ? xe && o.params.retry === jt.Auto && !o.isResetting && a(o, s, Se) : (i.code !== void 0 && i.code !== 0 && S("Error: ".concat(i.code, ".")), xe && a(o, s, Se))
									} else i.code !== void 0 && i.code !== 0 ? (xe && a(o, s, Se), E("Error: ".concat(i.code), 3076)) : a(o, s, !1);
									break
								}
								case "feedbackInit": {
									i.cfChlOut !== void 0 && i.cfChlOut !== "" && (o.cfChlOut = i.cfChlOut), i.cfChlOutS !== void 0 && i.cfChlOutS !== "" && (o.cfChlOutS = i.cfChlOutS);
									var qe = hr(o, s).targetWindow;
									if (qe) {
										S("A feedback report form is already opened for this widget.");
										return
									}
									if (o.autoFeedbackSent !== !0 && !ve("feedback-report-auto-submit", o) ? W.set(o, {
											feedbackOrigin: i.feedbackOrigin,
											rayId: i.rayId
										}) : W.delete(o), o.feedbackOpen = !0, o.retryTimeout !== void 0) {
										var we, Qe;
										clearTimeout(o.retryTimeout), o.retryTimeout = void 0, (Qe = (we = o).pendingRetry) !== null && Qe !== void 0 || (we.pendingRetry = {
											crashed: !1
										})
									}
									Ka(), window.postMessage({
										event: "feedbackOpen",
										source: z,
										widgetId: i.widgetId
									}, "*"), Gr(s, o, i.feedbackOrigin, g.scriptUrlParsed, function() {
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
									var ut = Ne(o, s);
									T(ut, HTMLElement) || E("Received state for an unknown widget: #".concat(s, " / ").concat(i.widgetId), 3078), me(ut, {
										event: "requestTurnstileResults",
										source: z,
										widgetId: i.widgetId
									}, o.iframeOrigin), t(o);
									break
								}
								case "turnstileResults": {
									var b, Je, je, Lt = hr(o, s),
										Pe = Lt.targetOrigin,
										Nt = Lt.targetWindow;
									if (!Nt) break;
									Dr(Nt, {
										cfChlOut: (b = o.cfChlOut) !== null && b !== void 0 ? b : i.cfChlOut,
										cfChlOutS: (Je = o.cfChlOutS) !== null && Je !== void 0 ? Je : i.cfChlOutS,
										errorCode: o.errorCode,
										event: "feedbackData",
										frMd: (je = o.frMd) !== null && je !== void 0 ? je : i.frMd,
										mode: i.mode,
										rayId: i.rayId,
										rcV: i.rcV,
										sitekey: i.sitekey,
										source: z,
										widgetId: i.widgetId
									}, Pe);
									break
								}
								case "closeFeedbackReportIframe": {
									var br = hr(o, s).targetWindow;
									br || E("Received state for an unknown widget: ".concat(i.widgetId), 3078), Rt("".concat(s, "-fr")), it(o), l(o, s, i.widgetId);
									break
								}
								case "tokenExpired": {
									var lt, _r = i.token;
									o.isExpired = !0, (lt = o.cbExpired) === null || lt === void 0 || lt.call(o, _r), o.params["refresh-expired"] === tt.Auto && !o.isResetting && I(te.AutoExpire, s);
									break
								}
								case "interactiveTimeout": {
									v(o, ke, i.widgetId), pn(o, s);
									var Pt = o.cbTimeout;
									if (Pt ? Pt() : o.params["refresh-timeout"] === gt.Never && !o.isResetting && S("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), o.params["refresh-timeout"] === gt.Auto && !o.isResetting) {
										var ct = o.cbAfterInteractive;
										ct == null || ct(), I(te.AutoTimeout, s)
									}
									break
								}
								case "refreshRequest": {
									v(o, ke, i.widgetId), Rt(s), it(o), I(te.ManualRefresh, s);
									break
								}
								case "reloadRequest": {
									v(o, i.nextRcV, i.widgetId), I(Do(i.trigger) ? i.trigger : te.Api, s);
									break
								}
								case "reloadApiJsRequest": {
									if (ve("reload", o)) {
										Ot(i.widgetId);
										break
									}
									if (yr !== void 0) {
										Ot(i.widgetId);
										break
									}
									if (Vo()) {
										Ot(i.widgetId);
										break
									}
									_i() ? (g.apiJsMismatchReloadAttempts++, Bo(), qo(i.widgetId)) : Ot(i.widgetId);
									break
								}
								case "interactiveBegin": {
									var dt, Fe = o.shadow.querySelector("#".concat(s));
									T(Fe, HTMLElement) || E("Cannot layout widget, Element not found (#".concat(s, ")."), 3076), (dt = o.cbBeforeInteractive) === null || dt === void 0 || dt.call(o), o.params.appearance === ie.InteractionOnly && cr(Fe, o);
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
									var Q = Ne(o, s);
									Q || E("Received state for an unknown widget: ".concat(i.widgetId), 3078), o.isResetting = !1;
									var Ft = {},
										Dt = X(),
										de = Ua(o, Q),
										ye = jo(o) ? oa(o.wrapper) : void 0,
										st = {
											"d.cT": p(),
											"ht.atrs": f(document.body.parentElement),
											"pg.ref": document.referrer,
											pi: {
												ffp: ra(o.wrapper),
												ii: window.self !== window.top,
												lH: window.location.href,
												mL: document.querySelectorAll("meta").length,
												pac: ye == null ? void 0 : ye.pac,
												pad: ye == null ? void 0 : ye.pad,
												pfp: da(document, Kn, Gn, fn),
												sL: document.scripts.length,
												sR: ir(o).shadowRoot === null,
												ssL: Fo(document, fn),
												t: "".concat(document.title.length, "|").concat(Pr(document.title)),
												tL: ca(document, fn),
												vDa: de.appearance,
												vDeh: de.expectedHidden,
												vDhp: de.hostParent,
												vDhr: de.expectedHiddenReason,
												vDie: de.isExecuting,
												vDmd: de.mode,
												vDmt: de.mount,
												vDrs: de.reasons,
												vDuh: de.unexpectedHidden,
												vDvp: de.viewport,
												wp: ta(o.wrapper),
												xp: ea(o.wrapper).slice(0, Xn)
											},
											"w.iW": window.innerWidth
										},
										be = o.scs;
									if ((be === void 0 || be === "") && o.params["session-continuity-persist"] === !0 && !ve("scs_persist", o)) {
										var ze = o.params.sitekey;
										if (ze !== null && ze !== "") {
											var Ht = "".concat(xr).concat(ze);
											try {
												var ft;
												be = (ft = localStorage.getItem(Ht)) !== null && ft !== void 0 ? ft : void 0
											} catch ($e) {}
										}
									}
									be !== void 0 && be !== "" && be.length > Yn && (be = void 0), me(Q, Ce({
										action: o.action,
										apiJsMismatchReloadAttempts: g.apiJsMismatchReloadAttempts,
										apiJsMismatchReloadCompletedCount: g.apiJsMismatchReloadCompletedCount,
										apiJsResourceTiming: B === void 0 ? void 0 : Ho(B),
										appearance: o.params.appearance,
										au: g.scriptUrl,
										cData: o.cData,
										ch: "94f8cd788239",
										chlPageData: o.chlPageData,
										cs: It(o),
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
										timeTiefMs: X() - Dt,
										upgradeAttempts: g.upgradeAttempts,
										upgradeCompletedCount: g.upgradeCompletedCount,
										url: mn(),
										wPr: st,
										widgetId: i.widgetId
									}, Ft), o.iframeOrigin), w(o, i.widgetId, Q), o.isInitialized = !0;
									break
								}
								default:
									break
							}
						}
					}
				},
				Be = function(i) {
					if (Yo(i)) {
						var c = i.data;
						if (!Qo(i)) {
							S("Ignored message from wrong origin: ".concat(i.origin, "."));
							return
						}
						if (!(c.widgetId === "" || !g.widgetMap.has(c.widgetId))) {
							var m = G(c.widgetId),
								s = g.widgetMap.get(c.widgetId);
							if (s !== void 0) {
								if (!$o(i, s, m)) {
									S("Ignored message from unexpected source for event: ".concat(c.event, "."));
									return
								}
								_e(c)
							}
						}
					}
				};
			g.msgHandler = Be, g.internalMsgHandler = _e, window.addEventListener("message", Be);

			function ce(C) {
				var i;
				if (typeof C == "string") {
					var c = lr(C);
					if (c !== null) return c;
					try {
						var m = document.querySelector(C);
						return m === null ? null : ce(m)
					} catch (o) {
						return null
					}
				}
				if (T(C, Element)) return lr(C);
				var s = !!C;
				return s || g.widgetMap.size === 0 ? null : (i = j()) !== null && i !== void 0 ? i : null
			}
			var Xe = {},
				Ei = {
					showFeedback: function(i) {
						var c = ce(i);
						if (c !== null) {
							var m = G(c),
								s = g.widgetMap.get(c);
							s !== void 0 && Gr(m, s, sa.Custom, g.scriptUrlParsed)
						}
					}
				},
				xn = pt(Ce({}, Xe), {
					_private: Ei,
					execute: function(i, c) {
						var m = Me(wa, g),
							s = !1,
							o = ce(i);
						if (o === null) {
							var A;
							c === void 0 && E("Please provide 2 parameters to execute: container and parameters", 43521);
							var h = D(i, c, "explicit", m);
							s = !0, h == null && E("Failed to render widget", 43522), o = (A = xt(h)) !== null && A !== void 0 ? A : ce(i), o === null && E("Failed to render widget", 43522)
						}
						var y = g.widgetMap.get(o);
						if (y !== void 0) {
							var P = s ? !1 : At(y, m);
							x(y, c);
							var M = G(o);
							if (y.isExecuting) {
								S("Call to execute() on a widget that is already executing (".concat(M, "), consider using reset() before execute().")), P && tr(o, y);
								return
							}
							if (y.isExecuting = !0, y.response !== void 0 && y.response !== "") {
								var F;
								y.isExecuting = !1, S("Call to execute() on a widget that was already executed (".concat(M, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), P && tr(o, y), (F = y.cbSuccess) === null || F === void 0 || F.call(y, y.response, !1);
								return
							}
							y.isExpired && S("Call to execute on a expired-widget (".concat(M, "), consider using reset() before.")), y.isStale && (I(te.StaleExecute, M), y.isExecuting = !0), (y.isResetting || !y.isInitialized) && y.msgQueue.push(yt.Execute), y.isExecuted = !0;
							var q = Ne(y, M);
							if (q || (y.isExecuting = !1, E("Widget ".concat(M, " to execute was not found"), 43522)), y.isResetting || !y.isInitialized) return;
							if (y.msgQueue.length > 0) {
								w(y, o, q), y.params.appearance === ie.Execute && cr(q, y);
								return
							}
							y.params.appearance === ie.Execute && cr(q, y), L(y) && me(q, {
								cs: It(y),
								event: "execute",
								source: z,
								widgetId: o
							}, y.iframeOrigin)
						}
					},
					getResponse: function(i) {
						var c = Me(Ia, g);
						if (typeof i == "undefined") {
							var m = j();
							if (m !== void 0) {
								var s = g.widgetMap.get(m);
								return s !== void 0 && Ve(m, s, c), (s == null ? void 0 : s.isExpired) === !0 && S("Call to getResponse on a widget that expired, consider refreshing the widget."), s == null ? void 0 : s.response
							}
							E("Could not find a widget", 43794)
						}
						var o = ce(i);
						o === null && E("Could not find widget for provided container", 43778);
						var A = g.widgetMap.get(o);
						return A && Ve(o, A, c), A == null ? void 0 : A.response
					},
					isExpired: function(i) {
						var c, m = Me(Sa, g);
						if (typeof i == "undefined") {
							var s = j();
							if (s !== void 0) {
								var o, A = g.widgetMap.get(s);
								return A !== void 0 && Ve(s, A, m), (o = A == null ? void 0 : A.isExpired) !== null && o !== void 0 ? o : !1
							}
							E("Could not find a widget", 43794)
						}
						var h = ce(i);
						h === null && E("Could not find widget for provided container", 43778);
						var y = g.widgetMap.get(h);
						return y && Ve(h, y, m), (c = y == null ? void 0 : y.isExpired) !== null && c !== void 0 ? c : !1
					},
					ready: function(i) {
						g.scriptWasLoadedAsync && (S("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), E("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof i != "function" && E('turnstile.ready() expected a "function" argument, got "'.concat(typeof i == "undefined" ? "undefined" : H(i), '"'), 3841);
						var c = Me(Ra, g);
						Tt(g.gcs, c);
						var m = !0,
							s = !1,
							o = void 0;
						try {
							for (var A = g.widgetMap[Symbol.iterator](), h; !(m = (h = A.next()).done); m = !0) {
								var y = Ze(h.value, 2),
									P = y[0],
									M = y[1];
								Ve(P, M, c)
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
						En.push(i)
					},
					remove: ue,
					render: R,
					reset: k
				});
			return Object.defineProperty(xn, vi, {
				configurable: !0,
				enumerable: !1,
				value: {
					clearPendingApiJsReloadRequest: function() {
						bn()
					},
					rearmTimedUpgrade: function() {
						_n()
					},
					rejectPendingApiJsReloadRequest: function() {
						gi()
					},
					reloadAfterUpgrade: function() {
						re()
					}
				}
			}), {
				runImplicitRender: J,
				turnstile: xn
			}
		})(),
		eu = function() {
			bi.runImplicitRender()
		},
		sr = bi.turnstile;

	function tu(e) {
		var t, r, n = e.getAttribute("data-sitekey"),
			a = {
				sitekey: n
			},
			u = e.getAttribute("data-tabindex");
		u !== null && u !== "" && (a.tabindex = Math.trunc(Number(u)));
		var l = e.getAttribute("data-theme");
		l !== null && l !== "" && ($r(l) ? a.theme = l : S('Unknown data-theme value: "'.concat(l, '".')));
		var d = e.getAttribute("data-size");
		if (d !== null && d !== "" && (an(d) ? a.size = d : S('Unknown data-size value: "'.concat(d, '".'))), 0) var f;
		var p = e.getAttribute("data-action");
		typeof p == "string" && (a.action = p);
		var v = e.getAttribute("data-cdata");
		typeof v == "string" && (a.cData = v);
		var _ = e.getAttribute("data-retry");
		_ !== null && _ !== "" && (Zr(_) ? a.retry = _ : S('Invalid data-retry value: "'.concat(_, ", expected either 'never' or 'auto'\".")));
		var w = e.getAttribute("data-retry-interval");
		if (w !== null && w !== "") {
			var L = Math.trunc(Number(w));
			en(L) ? a["retry-interval"] = L : S('Invalid data-retry-interval value: "'.concat(w, ', expected an integer value > 0 and < 900000".'))
		}
		var x = e.getAttribute("data-expiry-interval");
		if (x !== null && x !== "") {
			var N = Math.trunc(Number(x));
			tn(N) ? a["expiry-interval"] = N : S('Invalid data-expiry-interval value: "'.concat(N, ', expected an integer value > 0 and < 360000".'))
		}
		var k = e.getAttribute("data-refresh-expired");
		k !== null && k !== "" && (on(k) ? a["refresh-expired"] = k : S('Unknown data-refresh-expired value: "'.concat(k, ", expected either: 'never', 'auto' or 'manual'.")));
		var I = e.getAttribute("data-refresh-timeout");
		I !== null && I !== "" && (un(I) ? a["refresh-timeout"] = I : S('Unknown data-refresh-timeout value: "'.concat(I, ", expected either: 'never', 'auto' or 'manual'.")));
		var O = e.getAttribute("data-language");
		O !== null && O !== "" && (ln(O) ? a.language = O : S('Invalid data-language value: "'.concat(O, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function ue(U) {
			var ge = e.getAttribute(U);
			if (!(ge === null || ge === "")) {
				var _e = hn(ge);
				return _e === void 0 ? void 0 : function() {
					for (var Be = arguments.length, ce = new Array(Be), Xe = 0; Xe < Be; Xe++) ce[Xe] = arguments[Xe];
					return _e.apply(void 0, Z(ce))
				}
			}
		}
		var re = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		re.forEach(function(U) {
			Object.assign(a, $({}, U, ue("data-".concat(U))))
		}), a["feedback-enabled"] = (t = dr(e.getAttribute("data-feedback-enabled"), !0, function(U) {
			return 'Invalid data-feedback-enabled value: "'.concat(U, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && t !== void 0 ? t : !0, a["response-field"] = (r = dr(e.getAttribute("data-response-field"), !0, function(U) {
			return 'Invalid data-response-field value: "'.concat(U, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && r !== void 0 ? r : !0;
		var D = e.getAttribute("data-response-field-name");
		D !== null && D !== "" && (a["response-field-name"] = D);
		var R = e.getAttribute("data-execution");
		R !== null && R !== "" && (dn(R) ? a.execution = R : S('Unknown data-execution value: "'.concat(R, ", expected either: 'render' or 'execute'.")));
		var J = e.getAttribute("data-appearance");
		J !== null && J !== "" && (cn(J) ? a.appearance = J : S('Unknown data-appearance value: "'.concat(J, ", expected either: 'always', 'execute', or 'interaction-only'.")));
		var j = e.getAttribute("data-offlabel-show-privacy"),
			B = dr(j, void 0, function(U) {
				return 'Invalid data-offlabel-show-privacy value: "'.concat(U, '", expected "true" or "false".')
			});
		typeof B == "boolean" && (a["offlabel-show-privacy"] = B);
		var W = e.getAttribute("data-offlabel-show-help"),
			le = dr(W, void 0, function(U) {
				return 'Invalid data-offlabel-show-help value: "'.concat(U, '", expected "true" or "false".')
			});
		return typeof le == "boolean" && (a["offlabel-show-help"] = le), a
	}

	function _i() {
		if (yn(), mi()) return !1;
		var e = ti(window.turnstile, g);
		return e ? !0 : (_n(), !1)
	}
	Ge = !1, V = _a(), g.scriptWasLoadedAsync = (fr = V == null ? void 0 : V.loadedAsync) !== null && fr !== void 0 ? fr : !1, g.scriptUrl = (pr = V == null ? void 0 : V.src) !== null && pr !== void 0 ? pr : "undefined", g.scriptUrlParsed = V == null ? void 0 : V.url, (V == null ? void 0 : V.params) !== void 0 && V.params !== null && (ot = V.params.get("compat"), (ot == null ? void 0 : ot.toLowerCase()) === "recaptcha" ? typeof window.grecaptcha == "undefined" ? (S("Compatibility layer enabled."), g.isRecaptchaCompatibilityMode = !0, window.grecaptcha = sr) : S("grecaptcha is already defined. The compatibility layer will not be enabled.") : ot !== null && S('Unknown value for api.js?compat: "'.concat(ot, '", ignoring.')), V.params.forEach(function(e, t) {
		K(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || S('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), Ge = V.params.get("_upgrade") === "true", Le = V.params.get("onload"), Le !== null && Le !== "" && !Ge && setTimeout(function() {
		var e = hn(Le);
		e === void 0 ? (S("Unable to find onload callback '".concat(Le, "' immediately after loading, expected 'function', got '").concat(H(gn(Le)), "'.")), setTimeout(function() {
			var t = hn(Le);
			t === void 0 ? S("Unable to find onload callback '".concat(Le, "' after 1 second, expected 'function', got '").concat(H(gn(Le)), "'.")) : t()
		}, 1e3)) : e()
	}, 0)), kt = "turnstile" in window, Ie = kt ? di(window.turnstile) : void 0, vr = kt && Ge ? ri(window.turnstile, g, function() {
		var e;
		window.turnstile = sr, (e = di(sr)) === null || e === void 0 || e.reloadAfterUpgrade(), Xr(g)
	}) : !1, vr && (Ie == null || Ie.clearPendingApiJsReloadRequest()), kt && Ge && !vr ? (S("Turnstile upgrade state was missing. Keeping the existing Turnstile instance."), Ie == null || Ie.rejectPendingApiJsReloadRequest(), Ie == null || Ie.rearmTimedUpgrade()) : kt && !Ge ? S("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (vr || (window.turnstile = sr), Ge || ((V == null || (mr = V.params) === null || mr === void 0 ? void 0 : mr.get("render")) !== "explicit" && En.push(eu), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(fi, 0) : window.addEventListener("DOMContentLoaded", fi)), _n());
	var fr, pr, Ge, V, ot, Le, kt, Ie, vr, mr;
})();