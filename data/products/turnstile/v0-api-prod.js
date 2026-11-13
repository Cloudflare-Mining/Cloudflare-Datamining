"use strict";
(function(__c0, __c1) {
	"use strict";
	(function() {
		function Jn(e, r, t, n, a, u, l) {
			try {
				var d = e[u](l),
					f = d.value
			} catch (s) {
				t(s);
				return
			}
			d.done ? r(f) : Promise.resolve(f).then(n, a)
		}

		function jn(e) {
			return function() {
				var r = this,
					t = arguments;
				return new Promise(function(n, a) {
					var u = e.apply(r, t);

					function l(f) {
						Jn(u, n, a, l, d, "next", f)
					}

					function d(f) {
						Jn(u, n, a, l, d, "throw", f)
					}
					l(void 0)
				})
			}
		}

		function re(e, r, t) {
			return r in e ? Object.defineProperty(e, r, {
				value: t,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[r] = t, e
		}

		function w(e, r) {
			"@swc/helpers - instanceof";
			return r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : e instanceof r
		}

		function ke(e) {
			for (var r = 1; r < arguments.length; r++) {
				var t = arguments[r] != null ? arguments[r] : {},
					n = Object.keys(t);
				typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
					return Object.getOwnPropertyDescriptor(t, a).enumerable
				}))), n.forEach(function(a) {
					re(e, a, t[a])
				})
			}
			return e
		}

		function Ji(e, r) {
			var t = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				r && (n = n.filter(function(a) {
					return Object.getOwnPropertyDescriptor(e, a).enumerable
				})), t.push.apply(t, n)
			}
			return t
		}

		function Ir(e, r) {
			return r = r != null ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ji(Object(r)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}), e
		}

		function Kn(e) {
			if (Array.isArray(e)) return e
		}

		function zn(e, r) {
			var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
			if (t != null) {
				var n = [],
					a = !0,
					u = !1,
					l, d;
				try {
					for (t = t.call(e); !(a = (l = t.next()).done) && (n.push(l.value), !(r && n.length === r)); a = !0);
				} catch (f) {
					u = !0, d = f
				} finally {
					try {
						!a && t.return != null && t.return()
					} finally {
						if (u) throw d
					}
				}
				return n
			}
		}

		function Gn() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}

		function wr(e, r) {
			(r == null || r > e.length) && (r = e.length);
			for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
			return n
		}

		function Zr(e, r) {
			if (e) {
				if (typeof e == "string") return wr(e, r);
				var t = Object.prototype.toString.call(e).slice(8, -1);
				if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(t);
				if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return wr(e, r)
			}
		}

		function ar(e, r) {
			return Kn(e) || zn(e, r) || Zr(e, r) || Gn()
		}

		function Xn(e) {
			if (Array.isArray(e)) return wr(e)
		}

		function Yn(e) {
			if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
		}

		function Qn() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}

		function te(e) {
			return Xn(e) || Yn(e) || Zr(e) || Qn()
		}

		function $n(e, r) {
			var t, n, a, u = {
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

			function f(m) {
				return function(T) {
					return s([m, T])
				}
			}

			function s(m) {
				if (t) throw new TypeError("Generator is already executing.");
				for (; l && (l = 0, m[0] && (u = 0)), u;) try {
					if (t = 1, n && (a = m[0] & 2 ? n.return : m[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, m[1])).done) return a;
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
					m = r.call(e, u)
				} catch (T) {
					m = [6, T], n = 0
				} finally {
					t = a = 0
				}
				if (m[0] & 5) throw m[1];
				return {
					value: m[0] ? m[1] : void 0,
					done: !0
				}
			}
		}

		function W(e) {
			"@swc/helpers - typeof";
			return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
		}
		var et = "cf-chl-widget-",
			J = "cloudflare-challenge",
			Zn = ".cf-turnstile",
			ea = ".cf-challenge",
			ra = ".g-recaptcha",
			ta = "cf-turnstile-response",
			na = "g-recaptcha-response",
			ir = 3e4,
			Rr = 180 * 1e3,
			aa = 1e4,
			ia = 8e3,
			oa = 3600 * 1e3,
			Ft = "private-token",
			ua = 300,
			la = 10,
			ca = 200100,
			da = 200500,
			sa = 300020,
			rt = 300030,
			tt = 300031,
			fa = 3,
			pa = 500,
			va = 500,
			Le = "",
			Ht = "_cftscs_",
			ma = 512;
		var de = (function(e) {
				return e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible", e
			})({}),
			ne = (function(e) {
				return e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible", e
			})({}),
			nt = (function(e) {
				return e.Auto = "auto", e.Light = "light", e.Dark = "dark", e
			})({}),
			at = (function(e) {
				return e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain", e
			})({}),
			it = (function(e) {
				return e.Never = "never", e.Auto = "auto", e
			})({}),
			or = (function(e) {
				return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
			})({}),
			Ar = (function(e) {
				return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
			})({}),
			oe = (function(e) {
				return e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only", e
			})({}),
			Or = (function(e) {
				return e.Render = "render", e.Execute = "execute", e
			})({}),
			Cr = (function(e) {
				return e.Execute = "execute", e
			})({}),
			ae = (function(e) {
				return e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.UpgradeReload = "upgrade_reload", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun", e
			})({});
		var Vt = function(r) {
			var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
			return r.length > t ? r.slice(0, t) : r
		};

		function _a(e) {
			if (!e) return "-";
			var r = function(n, a) {
				if (!n || n.tagName === "BODY") return a;
				for (var u = 1, l = n.previousElementSibling; l;) l.tagName === n.tagName && u++, l = l.previousElementSibling;
				var d = Vt(n.tagName.toLowerCase()),
					f = "".concat(d, "[").concat(u, "]");
				return r(n.parentElement, "/".concat(f).concat(a))
			};
			return r(e, "")
		}

		function ba(e) {
			if (!e) return "";
			var r = e.getBoundingClientRect();
			return "".concat(r.top, "|").concat(r.right)
		}
		var ji = {
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

		function Ki(e) {
			return w(e, HTMLInputElement) || w(e, HTMLSelectElement) || w(e, HTMLTextAreaElement) || w(e, HTMLButtonElement)
		}

		function Bt(e) {
			return te(e.querySelectorAll("input, select, textarea, button")).filter(Ki)
		}

		function ga(e) {
			return te(e.querySelectorAll("a")).filter(function(r) {
				return w(r, HTMLAnchorElement)
			})
		}

		function Ea(e) {
			var r;
			if (!e) return "";
			var t = e.closest("form");
			if (!t) return "nf";
			var n = Bt(t),
				a = n.slice(0, 20).map(function(l) {
					var d;
					return (d = ji[l.type]) !== null && d !== void 0 ? d : "-"
				}).join(""),
				u = ["m:".concat((r = t.getAttribute("method")) !== null && r !== void 0 ? r : ""), "f:".concat(n.length), a].join("|");
			return u
		}
		var qt = "c",
			Jt = "cp",
			jt = "ct",
			Kt = "l",
			zt = "nl",
			Wt = "n",
			Gt = "r",
			Xt = "s",
			zi = "u",
			Yt = "up",
			Gi = "c",
			Xi = "f",
			Ut = "n",
			Yi = "d",
			Qi = "g",
			ut = "n",
			$i = "x",
			Zi = "p",
			eo = "b",
			ro = "c",
			to = "e",
			lt = "n",
			no = "s",
			ur = 20,
			ao = 512,
			ha = 99,
			Ee, io = (Ee = {}, re(Ee, qt, [2071475277, 2531075807, 2087764529, 2650702126, 897792407, 1900861264, 193440998, 181887339]), re(Ee, Jt, [3710748438, 194507255, 2123698751, 2088097853]), re(Ee, jt, [3716925445, 1236122734, 1917612522]), re(Ee, Kt, [173246534, 1422232710, 2984385681, 2172846769]), re(Ee, zt, [517084052, 3937470477]), re(Ee, Gt, [194507792, 1354128738, 1385023551]), re(Ee, Xt, [2172845875, 2984384787, 2901189036, 3027005952, 2088000679]), re(Ee, Yt, [1759493702, 1322218894]), Ee);

		function Ve(e) {
			var r;
			return (r = io[e]) !== null && r !== void 0 ? r : []
		}

		function ue(e) {
			return (e != null ? e : "").slice(0, ao).toLowerCase()
		}

		function qe(e) {
			return Qt(e)
		}

		function oo(e) {
			for (var r = [], t = "", n = 0; n < e.length; n++) {
				var a = e.charCodeAt(n),
					u = a >= 97 && a <= 122 || a >= 48 && a <= 57;
				if (u) {
					t += e.charAt(n);
					continue
				}
				t.length > 0 && (r.push(t), t = "")
			}
			t.length > 0 && r.push(t);
			for (var l = new Set, d = 0; d < r.length; d++) l.add(qe(r[d])), d + 1 < r.length && l.add(qe("".concat(r[d], " ").concat(r[d + 1])));
			return l
		}

		function Be(e, r) {
			return r.some(function(t) {
				return e.has(t)
			})
		}

		function ot(e) {
			return e > ha ? "".concat(ha, "+") : String(e)
		}

		function ct(e) {
			if (w(e, HTMLSelectElement)) return "sl";
			if (w(e, HTMLTextAreaElement)) return "ta";
			if (w(e, HTMLButtonElement)) {
				var r = qe(e.type);
				return r === 2139762449 ? "s" : r === 194507792 ? "rs" : "b"
			}
			switch (qe(e.type)) {
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

		function uo(e) {
			var r = e.getAttribute("action");
			if (r === null || r === "") return to;
			try {
				return new URL(r, window.location.href).origin === window.location.origin ? no : ro
			} catch (t) {
				return eo
			}
		}

		function lo(e) {
			var r = e.getAttribute("method"),
				t = ue(r === null || r === "" ? "get" : r),
				n = qe(t);
			return n === 193411891 ? Qi : n === 2088097853 ? Zi : n === 1125889741 ? Yi : $i
		}

		function Ta(e) {
			if (e === null || e === "") return "";
			try {
				return new URL(e, window.location.href).pathname
			} catch (r) {
				return ""
			}
		}

		function xa(e) {
			var r = [],
				t = !0,
				n = !1,
				a = void 0;
			try {
				for (var u = e.attributes[Symbol.iterator](), l; !(t = (l = u.next()).done); t = !0) {
					var d = l.value;
					[2203664931, 2087944093, 2087876002, 5861160, 247325877, 3566271494].indexOf(qe(d.name)) !== -1 && r.push(ue(d.value))
				}
			} catch (f) {
				n = !0, a = f
			} finally {
				try {
					!t && u.return != null && u.return()
				} finally {
					if (n) throw a
				}
			}
			return w(e, HTMLButtonElement) ? r.push(ue(e.value), ue(e.textContent)) : w(e, HTMLInputElement) && [1516724467, 2139762449].indexOf(qe(e.type)) !== -1 && r.push(ue(e.value)), r
		}

		function co(e, r) {
			var t = [],
				n = Ta(e.getAttribute("action"));
			t.push(ue(e.getAttribute("id")), ue(e.getAttribute("class")), ue(e.getAttribute("name")), ue(n));
			var a = !0,
				u = !1,
				l = void 0;
			try {
				for (var d = r.slice(0, ur)[Symbol.iterator](), f; !(a = (f = d.next()).done); a = !0) {
					var s = f.value,
						m;
					(m = t).push.apply(m, te(xa(s)))
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
			var T = !0,
				S = !1,
				O = void 0;
			try {
				for (var _ = te(e.querySelectorAll("label")).slice(0, ur)[Symbol.iterator](), A; !(T = (A = _.next()).done); T = !0) {
					var P = A.value;
					t.push(ue(P.textContent))
				}
			} catch (I) {
				S = !0, O = I
			} finally {
				try {
					!T && _.return != null && _.return()
				} finally {
					if (S) throw O
				}
			}
			return t.join(" ")
		}

		function so(e, r, t) {
			var n = [];
			n.push(ue(e.getAttribute("id")), ue(e.getAttribute("class")));
			var a = !0,
				u = !1,
				l = void 0;
			try {
				for (var d = r.slice(0, ur)[Symbol.iterator](), f; !(a = (f = d.next()).done); a = !0) {
					var s = f.value,
						m;
					(m = n).push.apply(m, te(xa(s)))
				}
			} catch (M) {
				u = !0, l = M
			} finally {
				try {
					!a && d.return != null && d.return()
				} finally {
					if (u) throw l
				}
			}
			var T = !0,
				S = !1,
				O = void 0;
			try {
				for (var _ = t.slice(0, ur)[Symbol.iterator](), A; !(T = (A = _.next()).done); T = !0) {
					var P = A.value,
						I = Ta(P.getAttribute("href"));
					n.push(ue(P.textContent), ue(I))
				}
			} catch (M) {
				S = !0, O = M
			} finally {
				try {
					!T && _.return != null && _.return()
				} finally {
					if (S) throw O
				}
			}
			return n.join(" ")
		}

		function Sa(e, r) {
			var t = !1,
				n = !1,
				a = !1,
				u = 0,
				l = !0,
				d = !1,
				f = void 0;
			try {
				for (var s = e[Symbol.iterator](), m; !(l = (m = s.next()).done); l = !0) {
					var T = m.value;
					if (w(T, HTMLTextAreaElement)) {
						a = !0;
						continue
					}
					if (w(T, HTMLInputElement)) {
						var S = qe(T.type);
						S === 165454089 ? t = !0 : S === 2087597251 ? n = !0 : S === 1569157018 && u++
					}
				}
			} catch (I) {
				d = !0, f = I
			} finally {
				try {
					!l && s.return != null && s.return()
				} finally {
					if (d) throw f
				}
			}
			var O = u > 0,
				_ = oo(r),
				A = Be(_, Ve(Kt)),
				P = Be(_, Ve(Gt));
			return P && !A && (t || O) ? Gt : O && u <= 1 && A ? Kt : O && (u > 1 || Be(_, Ve(Xt))) ? Xt : Be(_, Ve(qt)) ? qt : n || Be(_, Ve(Yt)) ? Yt : a && Be(_, Ve(Jt)) ? Jt : Be(_, Ve(jt)) ? jt : t && Be(_, Ve(zt)) ? zt : zi
		}

		function kr(e, r, t, n, a, u, l, d) {
			return [e, r, t, ot(n), ot(a), ot(u), ot(l), d].join("|")
		}

		function ya(e, r) {
			return r.filter(function(t) {
				return e.contains(t)
			})
		}

		function fo(e, r, t) {
			var n = r.filter(function(l) {
					return w(l, HTMLInputElement) && l.type === "hidden"
				}).length,
				a = r.filter(function(l) {
					return w(l, HTMLButtonElement) || ct(l) === "s"
				}).length,
				u = r.slice(0, ur).map(ct).join(",");
			return {
				pac: Sa(r, so(e, r, t)),
				pad: kr(Gi, ut, lt, r.length, n, a, t.length, u)
			}
		}

		function Ia(e) {
			if (!e) return {
				pac: Wt,
				pad: kr(Ut, ut, lt, 0, 0, 0, 0, "")
			};
			var r = e.closest("form");
			if (!r) {
				for (var t = [], n = e.parentElement, a = 0; n && n !== document.body && a < 5; n = n.parentElement, a++) t.push(n);
				if (t.length === 0) return {
					pac: Wt,
					pad: kr(Ut, ut, lt, 0, 0, 0, 0, "")
				};
				var u = t[t.length - 1],
					l = Bt(u).filter(function(k) {
						return !e.contains(k)
					}),
					d = ga(u).filter(function(k) {
						return !e.contains(k)
					}),
					f = null,
					s = !0,
					m = !1,
					T = void 0;
				try {
					for (var S = t[Symbol.iterator](), O; !(s = (O = S.next()).done); s = !0) {
						var _ = O.value,
							A = ya(_, l),
							P = ya(_, d);
						if (A.length > 0 || P.length > 0) {
							f = fo(_, A, P);
							break
						}
					}
				} catch (k) {
					m = !0, T = k
				} finally {
					try {
						!s && S.return != null && S.return()
					} finally {
						if (m) throw T
					}
				}
				return f !== null ? f : {
					pac: Wt,
					pad: kr(Ut, ut, lt, 0, 0, 0, 0, "")
				}
			}
			var I = Bt(r),
				M = I.filter(function(k) {
					return w(k, HTMLInputElement) && k.type === "hidden"
				}).length,
				C = I.filter(function(k) {
					return w(k, HTMLButtonElement) || ct(k) === "s"
				}).length,
				j = ga(r).length,
				U = I.slice(0, ur).map(ct).join(",");
			return {
				pac: Sa(I, co(r, I)),
				pad: kr(Xi, lo(r), uo(r), I.length, M, C, j, U)
			}
		}

		function po(e) {
			return w(e, Element) ? e : e.parentElement
		}

		function vo(e) {
			return "querySelectorAll" in e
		}

		function wa(e, r) {
			var t, n = r == null ? void 0 : r.shouldIgnoreElement;
			if (n !== void 0) {
				var a = w(e, Element) ? [e] : [];
				(t = a).push.apply(t, te(e.querySelectorAll("*")));
				var u = new Set,
					l, d = !0,
					f = !1,
					s = void 0;
				try {
					for (var m = a[Symbol.iterator](), T; !(d = (T = m.next()).done); d = !0) {
						var S = T.value;
						if (l !== void 0) {
							if (l.contains(S)) {
								u.add(S);
								continue
							}
							l = void 0
						}
						n(S) && (u.add(S), l = S)
					}
				} catch (O) {
					f = !0, s = O
				} finally {
					try {
						!d && m.return != null && m.return()
					} finally {
						if (f) throw s
					}
				}
				return u
			}
		}

		function Ra(e, r) {
			var t = po(e);
			return t === null || r === void 0 ? !1 : r.has(t)
		}

		function Aa(e, r) {
			var t = wa(e, r);
			return te(e.querySelectorAll("*")).filter(function(n) {
				return !Ra(n, t)
			}).length
		}

		function Oa(e, r, t, n) {
			for (var a = "", u = vo(e) ? wa(e, n) : void 0, l = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), d = l.nextNode(); d !== null && a.length < t;) {
				if (!Ra(d, u)) {
					for (var f = 0, s = d; s !== null && s !== e;) f++, s = s.parentNode;
					if (f <= r)
						if (w(d, Element)) {
							var m = d;
							a += Vt(m.tagName.toLowerCase());
							var T = !0,
								S = !1,
								O = void 0;
							try {
								for (var _ = m.attributes[Symbol.iterator](), A; !(T = (A = _.next()).done); T = !0) {
									var P = A.value,
										I;
									(n == null || (I = n.shouldIgnoreAttribute) === null || I === void 0 ? void 0 : I.call(n, m, P)) !== !0 && (a += "_".concat(Vt(P.name, 2)))
								}
							} catch (M) {
								S = !0, O = M
							} finally {
								try {
									!T && _.return != null && _.return()
								} finally {
									if (S) throw O
								}
							}
							a += ">"
						} else d.nodeType === Node.TEXT_NODE && (a += "-t")
				}
				d = l.nextNode()
			}
			return a.slice(0, t)
		}

		function Qt(e) {
			if (typeof e != "string") throw new TypeError("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : W(e)));
			for (var r = 5381, t = 0; t < e.length; t++) {
				var n = e.charCodeAt(t);
				r = r * 33 ^ n
			}
			return r >>> 0
		}

		function Ye(e) {
			return Ye = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			}, Ye(e)
		}

		function Lr() {
			try {
				var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
			} catch (r) {}
			return (Lr = function() {
				return !!e
			})()
		}

		function Ca(e) {
			if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function ka(e, r) {
			return r && (W(r) === "object" || typeof r == "function") ? r : Ca(e)
		}

		function La(e, r, t) {
			return r = Ye(r), ka(e, Lr() ? Reflect.construct(r, t || [], Ye(e).constructor) : r.apply(e, t))
		}

		function Ma(e, r) {
			if (!w(e, r)) throw new TypeError("Cannot call a class as a function")
		}

		function Je(e, r) {
			return Je = Object.setPrototypeOf || function(n, a) {
				return n.__proto__ = a, n
			}, Je(e, r)
		}

		function Na(e, r) {
			if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(r && r.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), r && Je(e, r)
		}

		function Mr(e, r, t) {
			return Lr() ? Mr = Reflect.construct : Mr = function(a, u, l) {
				var d = [null];
				d.push.apply(d, u);
				var f = Function.bind.apply(a, d),
					s = new f;
				return l && Je(s, l.prototype), s
			}, Mr.apply(null, arguments)
		}

		function Pa(e) {
			return Function.toString.call(e).indexOf("[native code]") !== -1
		}

		function dt(e) {
			var r = typeof Map == "function" ? new Map : void 0;
			return dt = function(n) {
				if (n === null || !Pa(n)) return n;
				if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
				if (typeof r != "undefined") {
					if (r.has(n)) return r.get(n);
					r.set(n, a)
				}

				function a() {
					return Mr(n, arguments, Ye(this).constructor)
				}
				return a.prototype = Object.create(n.prototype, {
					constructor: {
						value: a,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), Je(a, n)
			}, dt(e)
		}
		var Da = (function(e) {
			"use strict";
			Na(r, e);

			function r(t, n) {
				Ma(this, r);
				var a;
				return a = La(this, r, [t]), re(a, "code", void 0), a.name = "TurnstileError", a.code = n, a
			}
			return r
		})(dt(Error));
		var mo = RegExp("^https:\\/\\/(?:challenges(?:\\.fed)?\\.cloudflare\\.com|challenges\\.cloudflare-cn\\.com)\\/turnstile\\/v0(?:\\/.*)?\\/api\\.js", "u"),
			Jl = RegExp("\\/turnstile\\/v0(?:\\/.*)?\\/api\\.js", "u");

		function x(e, r) {
			var t = "[Cloudflare Turnstile] ".concat(e, ".");
			throw new Da(t, r)
		}

		function R(e) {
			console.warn("[Cloudflare Turnstile] ".concat(e))
		}

		function Fa(e, r) {
			try {
				return r()
			} catch (t) {
				try {
					R("Uncaught error in ".concat(e, ": ").concat(String(t)))
				} catch (n) {}
				return
			}
		}

		function Me(e, r) {
			if (r !== void 0) return function() {
				for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
				Fa(e, function() {
					r.apply(void 0, te(n))
				})
			}
		}

		function $t(e) {
			if (e !== void 0) return function(r) {
				return Fa("error-callback", function() {
					return e(r)
				}) === !0
			}
		}

		function Nr(e) {
			return e.startsWith(et) ? e.slice(et.length) : null
		}

		function Q(e) {
			return "".concat(et).concat(e)
		}

		function lr(e, r) {
			var t = !0,
				n = !1,
				a = void 0;
			try {
				for (var u = Object.getOwnPropertySymbols(e)[Symbol.iterator](), l; !(t = (l = u.next()).done); t = !0) {
					var d = l.value,
						f = Object.getOwnPropertyDescriptor(e, d),
						s = f === void 0 ? void 0 : Reflect.get(f, "value");
					if (r(s)) return s
				}
			} catch (m) {
				n = !0, a = m
			} finally {
				try {
					!t && u.return != null && u.return()
				} finally {
					if (n) throw a
				}
			}
		}

		function Pr() {
			var e = mo,
				r = document.currentScript;
			if (w(r, HTMLScriptElement) && e.test(r.src)) return r;
			var t = document.querySelectorAll("script"),
				n = !0,
				a = !1,
				u = void 0;
			try {
				for (var l = t[Symbol.iterator](), d; !(n = (d = l.next()).done); n = !0) {
					var f = d.value;
					if (w(f, HTMLScriptElement) && e.test(f.src)) return f
				}
			} catch (s) {
				a = !0, u = s
			} finally {
				try {
					!n && l.return != null && l.return()
				} finally {
					if (a) throw u
				}
			}
		}

		function Ha() {
			var e = Pr();
			e === void 0 && x("Could not find Turnstile valid script tag, some features may not be available", 43777);
			var r = e.src,
				t;
			try {
				t = new URL(r)
			} catch (u) {
				x("Could not parse Turnstile script tag URL", 43777)
			}
			var n = {
				loadedAsync: !1,
				params: new URLSearchParams,
				src: r,
				url: t
			};
			(e.async || e.defer) && (n.loadedAsync = !0);
			var a = r.split("?");
			return a.length > 1 && (n.params = new URLSearchParams(a[1])), n
		}

		function $() {
			return Date.now()
		}

		function st(e) {
			e != null && e.iframeHost && e.iframeHost.remove()
		}
		var Dr = 1,
			Fr = 2,
			Ne = 0,
			Qe = 1,
			cr = 2,
			je = 0,
			dr = 1,
			Ke = 2,
			Wa = Symbol();

		function ft(e, r) {
			Object.defineProperty(e, Wa, {
				configurable: !0,
				enumerable: !1,
				value: r
			})
		}

		function Ua(e, r) {
			var t = Object.getOwnPropertyDescriptor(e, Wa),
				n = t === void 0 ? void 0 : Reflect.get(t, "value");
			return r(n) ? n : lr(e, r)
		}

		function go(e) {
			return Array.isArray(e) && e.length === 3 && (typeof e[0] == "string" || e[0] === void 0) && (typeof e[1] == "boolean" || e[1] === void 0) && typeof e[2] == "boolean"
		}

		function ho(e) {
			return Array.isArray(e) && e.length === 3 && (typeof e[0] == "string" || e[0] === void 0) && (e[1] === Dr || e[1] === Fr || e[1] === void 0) && typeof e[2] == "boolean"
		}

		function sr(e) {
			var r = Ua(e, go);
			if (r !== void 0) return ft(e, r), r;
			var t = [void 0, void 0, !1];
			return ft(e, t), t
		}

		function fr(e) {
			var r = Ua(e, ho);
			if (r !== void 0) return ft(e, r), r;
			var t = [void 0, void 0, !1];
			return ft(e, t), t
		}

		function Hr(e, r) {
			var t = fr(e),
				n = t[je];
			return t[Ke] && n !== void 0 && n !== "" ? n : r
		}
		var Va = (function(e) {
			return e.Failure = "failure", e.Verifying = "verifying", e.Overrunning = "overrunning", e.TimeCheckCachedWarning = "timecheckcachedwarning", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain", e.InvalidSitekey = "invalidsitekey", e.Custom = "custom", e
		})({});
		var pt = ".";

		function pe(e, r) {
			return r.kills === void 0 ? !1 : "".concat(pt).concat(r.kills).concat(pt).includes("".concat(pt).concat(e).concat(pt))
		}

		function pr(e) {
			try {
				return new URL(e, window.location.href).origin
			} catch (r) {
				return
			}
		}

		function Zt(e, r, t) {
			if (t === void 0 || t === "") {
				if (0) var n;
				return
			}
			e == null || e.postMessage(r, t)
		}

		function ve(e, r, t) {
			Zt(e.contentWindow, r, t)
		}
		var Ba = 16,
			yo = 1,
			qa = 0,
			Ja = 1,
			ja = 2,
			Ka = 3,
			za = 4,
			Ga = 5,
			Xa = 6,
			Ya = 7;

		function _o(e, r) {
			try {
				var t = new Error().stack;
				return typeof t != "string" ? void 0 : [e, Math.max(0, Math.floor($() - r)), t, yo]
			} catch (n) {
				return
			}
		}

		function Pe(e, r) {
			return _o(e, r.turnstileLoadInitTimeTsMs)
		}

		function Qa(e) {
			return e[3] === void 0 ? [e[0], e[1], e[2]] : [e[0], e[1], e[2], e[3]]
		}

		function vr(e) {
			var r;
			return (r = e == null ? void 0 : e.slice(-Ba).map(Qa)) !== null && r !== void 0 ? r : []
		}

		function Wr(e, r) {
			if (!r) return !1;
			if (e.length > 0) {
				var t = e[e.length - 1];
				if (t[0] === r[0] && t[2] === r[2]) {
					var n, a, u = ((n = t[3]) !== null && n !== void 0 ? n : 1) + ((a = r[3]) !== null && a !== void 0 ? a : 1);
					return u === t[3] ? !1 : (t[3] = u, !0)
				}
			}
			for (e.push(Qa(r)); e.length > Ba;) e.shift();
			return !0
		}

		function vt(e) {
			return pe("gcs", e)
		}

		function Ur(e, r) {
			return vt(e) ? !1 : Wr(e.gcs, r)
		}

		function bo(e) {
			var r = vr(e.gcs);
			return r.length > 0 ? r : void 0
		}

		function Vr(e) {
			if (!vt(e)) return bo(e)
		}

		function mt(e, r) {
			if (r.isInitialized) {
				var t = Vr(r);
				if (t) {
					var n = r.shadow.querySelector("#".concat(Q(e)));
					n && ve(n, {
						cs: t,
						event: "gcs",
						source: J,
						widgetId: e
					}, r.iframeOrigin)
				}
			}
		}

		function ze(e, r, t) {
			var n = Ur(r, t);
			return n && mt(e, r), n
		}
		var ei = 12,
			Eo = "fivs",
			To = "tf",
			$a = "...";

		function _t(e) {
			return e.iframeHost ? e.iframeHost : e.shadow.host === e.wrapper ? e.wrapper : x("Turnstile Initialization Error", 3606)
		}

		function xo(e) {
			return w(e.iframeHost, HTMLDivElement) && e.iframeHost !== e.wrapper
		}

		function tn(e) {
			return pe(Eo, e)
		}

		function ht(e) {
			if (xo(e)) {
				var r = e.iframeHost,
					t = e.mode === de.Invisible && !tn(e) ? document.body : e.wrapper;
				r.parentNode !== t && t.appendChild(r)
			}
		}

		function ri(e) {
			var r = e.getBoundingClientRect();
			return {
				h: Math.round(r.height),
				w: Math.round(r.width),
				x: Math.round(r.left),
				y: Math.round(r.top)
			}
		}

		function nn(e) {
			return e.w > 0 && e.h > 0 && e.x + e.w > 0 && e.y + e.h > 0 && e.x < window.innerWidth && e.y < window.innerHeight
		}

		function So(e) {
			return e.isConnected ? nn(ri(e)) : !1
		}

		function ti(e) {
			var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 80;
			return e.length <= r ? e : "".concat(e.slice(0, r - $a.length)).concat($a)
		}

		function an(e, r) {
			return e ? e === r.wrapper ? "wrapper" : e === r.iframeHost ? "iframe-host" : e === r.iframe ? "iframe" : e === document.body ? "body" : e === document.documentElement ? "document-element" : e === r.wrapper.parentElement ? "wrapper-parent" : e.contains(r.wrapper) || e.contains(r.iframeHost) ? "ancestor" : "other" : null
		}

		function Za(e) {
			var r = [];
			e.style.display === "none" && r.push("dn"), (e.style.visibility === "hidden" || e.style.visibility === "collapse") && r.push(e.style.visibility === "hidden" ? "vh" : "vc");
			var t = Number(e.style.opacity);
			return Number.isFinite(t) && t <= .01 && r.push("op"), e.style.contentVisibility === "hidden" && r.push("cv"), r
		}

		function Io(e) {
			var r = [];
			return e.connected || r.push("dt"), (e.rect.w === 0 || e.rect.h === 0) && r.push("zs"), r
		}

		function wo(e) {
			if (e === "" || e === "none") return null;
			var r;
			try {
				r = new DOMMatrixReadOnly(e)
			} catch (t) {
				return null
			}
			return r.a === 1 && r.b === 0 && r.c === 0 && r.d === 1 ? [r.e, r.f] : null
		}

		function Ro(e, r, t) {
			for (var n = e, a = 0; n && a < ei;) {
				var u = gt(n, r, t),
					l = wo(u.style.transform);
				if (l && u.rect.w > 0 && u.rect.h > 0 && !u.inViewport && nn(Ir(ke({}, u.rect), {
						x: u.rect.x - l[0],
						y: u.rect.y - l[1]
					}))) return yt(u, [To]);
				n = n.parentElement, a += 1
			}
			return null
		}

		function ni(e, r) {
			var t, n = ri(e),
				a = window.getComputedStyle(e);
			return {
				connected: e.isConnected,
				element: (t = an(e, r)) !== null && t !== void 0 ? t : "unknown",
				inViewport: e.isConnected && nn(n),
				rect: n,
				style: {
					contentVisibility: a.contentVisibility,
					display: a.display,
					opacity: a.opacity,
					position: a.position,
					transform: ti(a.transform),
					visibility: a.visibility
				}
			}
		}

		function ai(e, r) {
			var t, n = window.getComputedStyle(e);
			return {
				connected: e.isConnected,
				element: (t = an(e, r)) !== null && t !== void 0 ? t : "unknown",
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
					transform: ti(n.transform),
					visibility: n.visibility
				}
			}
		}

		function gt(e, r, t) {
			var n = t.get(e);
			if (n) return n;
			var a = ni(e, r);
			return t.set(e, a), a
		}

		function yt(e, r) {
			return r.length === 0 ? null : {
				element: oi(e.element),
				reasons: r
			}
		}

		function ii(e, r, t, n) {
			var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
				u = Za(r);
			if (r.connected || u.push("dt"), u.length > 0) return yt(r, u);
			for (var l = e.parentElement, d = 0; l && d < ei;) {
				var f = n == null ? void 0 : n.get(l);
				f || (f = a ? ai(l, t) : ni(l, t), n == null || n.set(l, f));
				var s = Za(f);
				if (s.length > 0) return yt(f, s);
				l = l.parentElement, d += 1
			}
			return null
		}

		function en(e, r, t, n) {
			var a = ii(e, r, t, n);
			if (a) return a;
			if (!r.inViewport) {
				var u = Ro(e, t, n);
				if (u) return u
			}
			return yt(r, Io(r))
		}

		function Ao(e) {
			return e.mode === de.Invisible ? {
				expectedHidden: !0,
				reason: "mi"
			} : e.params.appearance === oe.InteractionOnly ? {
				expectedHidden: !0,
				reason: "ai"
			} : e.params.appearance === oe.Execute && !e.isExecuting ? {
				expectedHidden: !0,
				reason: "ae"
			} : {
				expectedHidden: !1,
				reason: null
			}
		}

		function Oo(e, r) {
			return r === e.wrapper ? "wrapper" : r.isConnected ? r.parentElement === e.wrapper ? "wrapper" : r.parentElement === document.body ? "body" : "other" : "detached"
		}

		function oi(e) {
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

		function Co(e) {
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

		function rn(e, r) {
			if (!r) return null;
			var t;
			switch (e) {
				case "iframe":
					t = "i";
					break;
				case "iframeHost":
					t = "h";
					break;
				case "wrapper":
					t = "w";
					break;
				default:
					t = "u";
					break
			}
			return "".concat(t, ":").concat(r.element, ":").concat(r.reasons.join("."))
		}

		function ui(e, r) {
			var t, n, a = _t(e),
				u = {
					iframe: r,
					iframeHost: a,
					wrapper: e.wrapper
				},
				l = Ao(e),
				d = Oo(e, a),
				f = an(a.parentElement, u),
				s = {
					height: window.innerHeight,
					visibilityState: document.visibilityState,
					width: window.innerWidth
				};
			if (l.expectedHidden) {
				var m, T;
				return {
					appearance: (m = e.params.appearance) !== null && m !== void 0 ? m : oe.Always,
					expectedHidden: !0,
					expectedHiddenReason: l.reason,
					hostParent: f,
					isExecuting: e.isExecuting,
					mode: (T = e.mode) !== null && T !== void 0 ? T : null,
					mount: d,
					reasons: [],
					unexpectedHidden: !1,
					viewport: s
				}
			}
			var S = new Map,
				O = gt(e.wrapper, u, S),
				_ = gt(a, u, S),
				A = gt(r, u, S),
				P = en(e.wrapper, O, u, S),
				I = en(a, _, u, S),
				M = en(r, A, u, S),
				C = [d === "wrapper" ? null : "m:".concat(Co(d), ":").concat(oi(f)), rn("wrapper", P), rn("iframeHost", I), rn("iframe", M)].filter(function(j) {
					return j !== null
				});
			return {
				appearance: (t = e.params.appearance) !== null && t !== void 0 ? t : oe.Always,
				expectedHidden: !1,
				expectedHiddenReason: null,
				hostParent: f,
				isExecuting: e.isExecuting,
				mode: (n = e.mode) !== null && n !== void 0 ? n : null,
				mount: d,
				reasons: te(new Set(C)),
				unexpectedHidden: C.length > 0,
				viewport: s
			}
		}

		function ko(e, r) {
			var t = _t(e);
			if (t.parentElement === document.body) return !1;
			if (!So(r)) return !0;
			var n = {
					iframe: r,
					iframeHost: t,
					wrapper: e.wrapper
				},
				a = new Map,
				u = ai(t, n);
			return a.set(t, u), ii(t, u, n, a, !0) !== null
		}

		function li(e, r) {
			if (e.mode !== de.Invisible || tn(e)) {
				ht(e);
				return
			}
			ko(e, r) && ht(e)
		}

		function Lo(e) {
			e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true")
		}

		function Mo(e) {
			e.style.width = "0", e.style.height = "0", e.style.opacity = "", e.style.position = "absolute", e.style.left = "", e.style.top = "", e.style.visibility = "hidden", e.style.pointerEvents = "", e.style.zIndex = "", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true")
		}

		function on(e, r) {
			if (r.mode === void 0 || tn(r)) {
				Mo(e);
				return
			}
			Lo(e)
		}

		function G(e, r) {
			return e.indexOf(r) !== -1
		}
		var No = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "sw-ke", "tl-ph", "uk-ua"],
			Po = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
			ci = "https://challenges.cloudflare.com",
			di = [ci, "https://challenges.fed.cloudflare.com", "https://challenges.cloudflare-cn.com", "https://challenges-staging.cloudflare.com"];

		function bt(e, r, t) {
			var n, a = ci,
				u = (n = t == null ? void 0 : t.origin) !== null && n !== void 0 ? n : a;
			if (r) {
				var l;
				return (l = e["base-url"]) !== null && l !== void 0 ? l : u
			}
			return u
		}

		function un(e, r, t, n, a, u, l, d, f, s) {
			var m = bt(t, a, d),
				T = s !== void 0 && s !== "" ? s : u,
				S = T !== void 0 && T !== "" ? "h/".concat(encodeURIComponent(T), "/") : "",
				O = f !== void 0 && f !== "" ? "&".concat(f) : "",
				_ = t["feedback-enabled"] === !1 ? "fbD" : "fbE",
				A = t.chlPageOfflabel === !0 ? "&offlabel=true" : "";
			return "".concat(m, "/cdn-cgi/challenge-platform/").concat(S, "turnstile/f/av0/rch").concat(n, "/").concat(e, "/").concat(r, "/").concat(t.theme, "/").concat(_, "/").concat(l, "/").concat(t.size, "?lang=").concat(t.language).concat(A).concat(O)
		}
		var ln = function(r) {
				var t, n, a, u, l = window.innerWidth < 400,
					d = r.state !== at.FailureFeedbackCode && (r.state === at.FailureFeedback || r.state === at.FailureHavingTroubles || r.errorCode === void 0 || r.errorCode === 0),
					f = G(No, (t = (a = r.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && t !== void 0 ? t : "nonexistent"),
					s = G(Po, (n = (u = r.displayLanguage) === null || u === void 0 ? void 0 : u.toLowerCase()) !== null && n !== void 0 ? n : "nonexistent");
				return l ? Do({
					isModeratelyVerbose: s,
					isSmallerFeedback: d,
					isVerboseLanguage: f
				}) : d && f ? "680px" : d && s ? "670px" : d ? "650px" : f ? "690px" : "680px"
			},
			Do = function(r) {
				var t = r.isVerboseLanguage,
					n = r.isSmallerFeedback,
					a = r.isModeratelyVerbose;
				return n && t ? "660px" : n && a ? "620px" : n ? "600px" : t ? "770px" : a ? "740px" : "730px"
			};
		var Fo = 5e3,
			Ho = "auto-troubleshoot-click";

		function Wo(e, r) {
			var t = bt(e.params, !1, r),
				n = Hr(e, "b"),
				a = n === void 0 ? "" : "h/".concat(encodeURIComponent(n), "/");
			return "".concat(t, "/cdn-cgi/challenge-platform/").concat(a, "fr")
		}
		var pi = function(r, t, n, a, u) {
			var l, d, f, s, m, T, S;
			if (a === void 0 || a === "" || n === void 0 || n === "") return !1;
			var O = Wo(r, u),
				_ = new FormData;
			_.append("consent", "on"), _.append("origin", t), _.append("issue", Ho), _.append("description", ""), _.append("rayId", n), _.append("sitekey", (l = r.params.sitekey) !== null && l !== void 0 ? l : ""), _.append("rcV", (d = r.rcV) !== null && d !== void 0 ? d : ""), _.append("cfChlOut", (f = r.cfChlOut) !== null && f !== void 0 ? f : ""), _.append("cfChlOutS", (s = r.cfChlOutS) !== null && s !== void 0 ? s : ""), r.xhrError !== void 0 && _.append("xhrError", r.xhrError), _.append("mode", (m = r.mode) !== null && m !== void 0 ? m : ""), _.append("errorCode", String((T = r.errorCode) !== null && T !== void 0 ? T : 0)), _.append("frMd", a), _.append("displayLanguage", (S = r.displayLanguage) !== null && S !== void 0 ? S : "");
			try {
				if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(O, _)) return !0
			} catch (A) {
				R("auto feedback report: sendBeacon threw synchronously, falling through to fetch (".concat(cn(A), ")"))
			}
			try {
				return fetch(O, ke({
					body: _,
					keepalive: !0,
					method: "POST",
					mode: "no-cors"
				}, si())), !0
			} catch (A) {
				R("auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (".concat(cn(A), ")"))
			}
			try {
				fetch(O, ke({
					body: _,
					method: "POST",
					mode: "no-cors"
				}, si()))
			} catch (A) {
				R("auto feedback report: all transports failed (".concat(cn(A), ")"))
			}
			return !1
		};

		function si() {
			return typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function" ? {} : {
				signal: AbortSignal.timeout(Fo)
			}
		}

		function cn(e) {
			return w(e, Error) ? e.message : "unknown error"
		}
		var Et = null,
			Br = 0,
			vi = function() {
				if (Br++, Br === 1) {
					var r = document.querySelector('meta[http-equiv="refresh"]');
					r && (Et = r.getAttribute("content"), r.remove())
				}
			},
			mi = function() {
				if (Br > 0 && Br--, Br === 0 && Et !== null) {
					var r = document.createElement("meta");
					r.httpEquiv = "refresh", r.content = Et, Et = null, document.head.appendChild(r)
				}
			},
			dn = Symbol(),
			Uo = "host-origin",
			mr = function(r) {
				r.feedbackPopup && !r.feedbackPopup.closed && r.feedbackPopup.close(), r.feedbackPopup = void 0, r.feedbackPopupOrigin = void 0
			};

		function gi(e) {
			return e.endsWith("-fr") ? e : "".concat(e, "-fr")
		}

		function hi(e) {
			var r, t, n, a = (n = document.querySelector("#".concat(e))) === null || n === void 0 || (t = n.parentElement) === null || t === void 0 || (r = t.parentElement) === null || r === void 0 ? void 0 : r.parentElement;
			return w(a, HTMLDivElement) ? a : null
		}

		function fi(e) {
			if (!((typeof e == "undefined" ? "undefined" : W(e)) !== "object" || e === null)) {
				var r = Object.getOwnPropertyDescriptor(e, "cleanup"),
					t = r === void 0 ? void 0 : Reflect.get(r, "value");
				if (typeof t == "function") return function() {
					Reflect.apply(t, void 0, [])
				}
			}
		}

		function yi(e) {
			var r, t = fi((r = Object.getOwnPropertyDescriptor(e, dn)) === null || r === void 0 ? void 0 : r.value);
			if (t) return t;
			var n = !0,
				a = !1,
				u = void 0;
			try {
				for (var l = Object.getOwnPropertySymbols(e)[Symbol.iterator](), d; !(n = (d = l.next()).done); n = !0) {
					var f = d.value,
						s, m = fi((s = Object.getOwnPropertyDescriptor(e, f)) === null || s === void 0 ? void 0 : s.value);
					if (m) return m
				}
			} catch (T) {
				a = !0, u = T
			} finally {
				try {
					!n && l.return != null && l.return()
				} finally {
					if (a) throw u
				}
			}
		}

		function Vo(e, r) {
			Object.defineProperty(e, dn, {
				configurable: !0,
				enumerable: !1,
				value: {
					cleanup: r
				}
			})
		}

		function Bo(e) {
			Reflect.deleteProperty(e, dn)
		}

		function qo(e) {
			var r = new URL(e, window.location.href),
				t = new URLSearchParams(r.hash.startsWith("#") ? r.hash.slice(1) : r.hash);
			return t.set(Uo, window.location.origin), r.hash = t.toString(), r.toString()
		}
		var sn = function(r, t, n, a, u) {
				var l, d, f = gi(r),
					s = bt(t.params, !1, a),
					m = Hr(t, "b"),
					T = m === void 0 ? "" : "h/".concat(encodeURIComponent(m), "/"),
					S = qo("".concat(s, "/cdn-cgi/challenge-platform/").concat(T, "fr/").concat(Nr(r), "/").concat(t.displayLanguage, "/").concat((d = t.params.theme) !== null && d !== void 0 ? d : t.theme, "/").concat(n));
				if (mr(t), window.top !== window.self) {
					var O = window.open(S, "_blank");
					if (O) {
						t.feedbackPopupOrigin = pr(S), t.feedbackPopup = O;
						var _ = window.setInterval(function() {
							O.closed && (window.clearInterval(_), t.feedbackPopupCloseCheck = void 0, u == null || u())
						}, 500);
						t.feedbackPopupCloseCheck = _;
						return
					}
					R("Unable to open feedback report popup, falling back to the embedded feedback overlay.")
				}
				t.wrapper.parentNode || x("Cannot initialize Widget, Element not found (#".concat(r, ")."), 3074);
				var A = hi(f);
				if (A) {
					var P;
					(P = yi(A)) === null || P === void 0 || P()
				}
				var I = document.createElement("div");
				I.style.position = "fixed", I.style.zIndex = "2147483646", I.style.width = "100vw", I.style.height = "100vh", I.style.top = "0", I.style.left = "0", I.style.transformOrigin = "center center", I.style.overflowX = "hidden", I.style.overflowY = "auto", I.style.background = "rgba(0,0,0,0.4)";
				var M = document.createElement("div");
				M.className = "cf-wrapper-turnstile-feedback", M.style.display = "table-cell", M.style.verticalAlign = "middle", M.style.width = "100vw", M.style.height = "100vh";
				var C = document.createElement("div");
				C.className = "cf-turnstile-feedback", C.id = "cf-fr-id", C.style.width = "100vw", C.style.maxWidth = "500px", C.style.height = ln(t), C.style.position = "relative", C.style.zIndex = "2147483647", C.style.backgroundColor = "#ffffff", C.style.borderRadius = "5px", C.style.left = "0px", C.style.top = "0px", C.style.overflow = "hidden", C.style.margin = "0px auto";
				var j = function() {
						C.style.height = ln(t)
					},
					U = function() {
						var B;
						Bo(I), t.feedbackIframeOrigin = void 0, window.removeEventListener("resize", j), (B = I.parentNode) === null || B === void 0 || B.removeChild(I), u == null || u()
					},
					k = document.createElement("iframe");
				k.id = f, k.setAttribute("src", S), k.setAttribute("title", "Turnstile feedback report"), k.setAttribute("allow", "cross-origin-isolated; fullscreen"), k.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), k.setAttribute("scrolling", "yes"), k.style.borderWidth = "0px", k.style.width = "100%", k.style.height = "100%", k.style.overflow = "auto", t.feedbackIframeOrigin = pr(S);
				var D = document.createElementNS("http://www.w3.org/2000/svg", "svg");
				D.setAttribute("tabindex", "0"), D.setAttribute("role", "button"), D.setAttribute("aria-label", "Close feedback report"), D.style.position = "absolute", D.style.width = "26px", D.style.height = "26px", D.style.zIndex = "2147483647", D.style.cursor = "pointer", t.displayRtl === !0 ? D.style.left = "24px" : D.style.right = "24px", D.style.top = "24px", D.setAttribute("width", "20"), D.setAttribute("height", "20"), D.addEventListener("click", function(X) {
					X.stopPropagation(), U()
				}), D.addEventListener("keydown", function(X) {
					(X.key === "Enter" || X.key === " ") && (X.preventDefault(), X.stopPropagation(), U())
				});
				var ie = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
				ie.setAttribute("ry", "12"), ie.setAttribute("rx", "12"), ie.setAttribute("cy", "12"), ie.setAttribute("cx", "12"), ie.setAttribute("fill", "none"), ie.setAttribute("stroke-width", "0"), D.appendChild(ie);
				var H = document.createElementNS("http://www.w3.org/2000/svg", "line");
				H.setAttribute("stroke-width", "1"), H.setAttribute("fill", "none"), H.setAttribute("x1", "6"), H.setAttribute("x2", "18"), H.setAttribute("y1", "18"), H.setAttribute("y2", "5");
				var K = document.createElementNS("http://www.w3.org/2000/svg", "line");
				K.setAttribute("stroke-width", "1"), K.setAttribute("fill", "none"), K.setAttribute("x1", "6"), K.setAttribute("x2", "18"), K.setAttribute("y1", "5"), K.setAttribute("y2", "18"), t.theme === nt.Light ? (H.setAttribute("stroke", "#0A0A0A"), K.setAttribute("stroke", "#0A0A0A")) : (H.setAttribute("stroke", "#F2F2F2"), K.setAttribute("stroke", "#F2F2F2")), D.appendChild(H), D.appendChild(K), C.appendChild(k), C.appendChild(D), M.appendChild(C), I.appendChild(M), I.addEventListener("click", U), t.wrapper.parentNode.appendChild(I), window.addEventListener("resize", j), Vo(I, U)
			},
			qr = function(r) {
				var t, n = gi(r),
					a = hi(n);
				if (a) {
					var u = yi(a);
					if (u) {
						u();
						return
					}
					R("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup."), (t = a.parentNode) === null || t === void 0 || t.removeChild(a)
				}
			};
		var Jo = 900,
			jo = 45,
			Ko = 50;

		function zo(e) {
			return w(e, ShadowRoot)
		}

		function Go(e, r, t) {
			var n = e.widgetMap.get(r);
			(n == null ? void 0 : n.retryTimeout) !== void 0 && (window.clearTimeout(n.retryTimeout), n.retryTimeout = void 0), st(n), R("Cannot find Widget ".concat(t, ", consider using turnstile.remove() to clean up a widget.")), e.widgetMap.delete(r)
		}

		function Xo(e) {
			e.watchCatSeq++;
			var r = [],
				t = !0,
				n = !1,
				a = void 0;
			try {
				for (var u = e.widgetMap[Symbol.iterator](), l; !(t = (l = u.next()).done); t = !0) {
					var d = ar(l.value, 2),
						f = d[0],
						s = d[1],
						m = Q(f),
						T = s.shadow;
					if (!zo(T) || !s.wrapper.isConnected) {
						s.watchcat.missingWidgetWarning || (s.watchcat.missingWidgetWarning = !0, r.push({
							widgetElId: m,
							widgetId: f
						}));
						continue
					}
					var S = T.querySelector("#".concat(m));
					if (S === null) {
						s.watchcat.missingWidgetWarning || (s.watchcat.missingWidgetWarning = !0, r.push({
							widgetElId: m,
							widgetId: f
						}));
						continue
					}
					if (s.watchcat.seq = e.watchCatSeq, s.watchcat.lastAckedSeq === 0 && (s.watchcat.lastAckedSeq = e.watchCatSeq), !(s.isComplete || s.isFailed || s.feedbackOpen)) {
						var O = s.watchcat.seq - 1 - jo,
							_ = s.watchcat.lastAckedSeq < O,
							A = s.watchcat.seq - 1 - Ko,
							P = s.isOverrunning && s.watchcat.overrunBeginSeq !== 0 && s.watchcat.overrunBeginSeq < A;
						if ((s.isExecuting || !s.isInitialized || !s.isStale && !s.isExecuted) && s.watchcat.lastAckedSeq !== 0 && _ || P) {
							var I, M;
							s.watchcat.lastAckedSeq = 0, s.watchcat.seq = 0, s.isExecuting = !1;
							var C = function(Ze, He) {
								console.log("Turnstile Widget seem to have ".concat(Ze, ": "), He)
							};
							C(_ ? "hung" : "crashed", f);
							var j = _ ? rt : tt;
							if ((M = e.internalMsgHandler) === null || M === void 0 || M.call(e, {
									code: j,
									event: "fail",
									rcV: (I = s.nextRcV) !== null && I !== void 0 ? I : Le,
									source: J,
									widgetId: f
								}), 0) var U;
							continue
						}
						ve(S, {
							event: "meow",
							seq: e.watchCatSeq,
							source: J,
							widgetId: f
						}, s.iframeOrigin)
					}
				}
			} catch (Se) {
				n = !0, a = Se
			} finally {
				try {
					!t && u.return != null && u.return()
				} finally {
					if (n) throw a
				}
			}
			var k = !0,
				D = !1,
				ie = void 0;
			try {
				for (var H = r[Symbol.iterator](), K; !(k = (K = H.next()).done); k = !0) {
					var X = K.value,
						B = X.widgetElId,
						xe = X.widgetId;
					Go(e, xe, B)
				}
			} catch (Se) {
				D = !0, ie = Se
			} finally {
				try {
					!k && H.return != null && H.return()
				} finally {
					if (D) throw ie
				}
			}
			r.length > 0 && e.widgetMap.size === 0 && Jr(e)
		}

		function fn(e) {
			var r, t;
			(t = (r = e).watchCatInterval) !== null && t !== void 0 || (r.watchCatInterval = setInterval(function() {
				Xo(e)
			}, Jo))
		}

		function Jr(e) {
			var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
			e.watchCatInterval !== null && (e.widgetMap.size === 0 || r) && (clearInterval(e.watchCatInterval), e.watchCatInterval = null)
		}
		var vn = Symbol();

		function bi(e) {
			return (typeof e == "undefined" ? "undefined" : W(e)) === "object" && e !== null ? e : void 0
		}

		function pn(e) {
			return (typeof e == "undefined" ? "undefined" : W(e)) === "object" && e !== null && "widgetMap" in e && w(e.widgetMap, Map) && "upgradeAttempts" in e && typeof e.upgradeAttempts == "number" && "upgradeCompletedCount" in e && typeof e.upgradeCompletedCount == "number"
		}

		function Yo(e, r) {
			Object.defineProperty(e, vn, {
				configurable: !0,
				enumerable: !1,
				value: r
			})
		}

		function Qo(e) {
			var r = Object.getOwnPropertyDescriptor(e, vn),
				t = r === void 0 ? void 0 : Reflect.get(r, "value");
			if (pn(t)) return t;
			var n = lr(e, pn);
			if (n) return n
		}

		function Ei(e) {
			Reflect.deleteProperty(e, vn);
			var r = !0,
				t = !1,
				n = void 0;
			try {
				for (var a = Object.getOwnPropertySymbols(e)[Symbol.iterator](), u; !(r = (u = a.next()).done); r = !0) {
					var l = u.value,
						d = Object.getOwnPropertyDescriptor(e, l),
						f = d === void 0 ? void 0 : Reflect.get(d, "value");
					pn(f) && Reflect.deleteProperty(e, l)
				}
			} catch (s) {
				t = !0, n = s
			} finally {
				try {
					!r && a.return != null && a.return()
				} finally {
					if (t) throw n
				}
			}
		}

		function $o(e) {
			return !Number.isFinite(e.apiJsReloadBackoffMs) || e.apiJsReloadBackoffMs <= 0 ? ir : Math.min(e.apiJsReloadBackoffMs, Rr)
		}

		function Zo(e) {
			return !Number.isFinite(e.apiJsReloadNextAllowedTsMs) || e.apiJsReloadNextAllowedTsMs <= 0 ? 0 : e.apiJsReloadNextAllowedTsMs
		}

		function _i(e, r) {
			var t = Reflect.get(e, r);
			return typeof t == "number" ? t : 0
		}

		function Ti(e, r) {
			var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pr;
			r.upgradeAttempts++;
			var n = t();
			if (!(n != null && n.parentNode)) return !1;
			var a = bi(e);
			if (!a) return !1;
			var u = n.nonce;
			Yo(a, r);
			var l = new URL(n.src),
				d = document.createElement("script");
			l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), d.async = !0, u && (d.nonce = u), d.setAttribute("crossorigin", "anonymous"), d.src = l.toString();
			try {
				return n.parentNode.replaceChild(d, n), !0
			} catch (f) {
				if (!w(f, DOMException)) throw f;
				return Ei(a), !1
			}
		}

		function xi(e, r, t) {
			var n = bi(e);
			if (!n) return !1;
			var a = Qo(n);
			if (!a) return !1;
			var u = a.apiJsMismatchReloadPending;
			r.isReady = a.isReady, r.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, r.gcs = vr(a.gcs), r.lastWidgetIdx = a.lastWidgetIdx, r.scriptWasLoadedAsync = a.scriptWasLoadedAsync, r.apiJsReloadBackoffMs = u ? ir : $o(a), r.apiJsReloadNextAllowedTsMs = Zo(a), r.apiJsMismatchReloadAttempts = _i(a, "apiJsMismatchReloadAttempts"), r.apiJsMismatchReloadCompletedCount = _i(a, "apiJsMismatchReloadCompletedCount") + (u ? 1 : 0), r.apiJsMismatchReloadPending = !1, r.upgradeAttempts = a.upgradeAttempts, r.upgradeCompletedCount = a.upgradeCompletedCount + 1, r.turnstileLoadInitTimeTsMs = $();
			var l = sr(r),
				d = sr(a),
				f = l[cr];
			if (!f) {
				var s, m, T, S, O, _;
				l[cr] = d[cr], (T = (s = l)[m = Ne]) !== null && T !== void 0 || (s[m] = d[Ne]), (_ = (S = l)[O = Qe]) !== null && _ !== void 0 || (S[O] = d[Qe])
			}
			r.watchCatInterval = null, r.watchCatSeq = a.watchCatSeq, r.widgetMap = a.widgetMap;
			var A = !0,
				P = !1,
				I = void 0;
			try {
				for (var M = r.widgetMap.values()[Symbol.iterator](), C; !(A = (C = M.next()).done); A = !0) {
					var j = C.value;
					j.gcs = vr(j.gcs);
					var U = fr(j);
					!f || U[dr] === Fr || (l[Qe] === !0 && typeof l[Ne] == "string" ? (U[je] = l[Ne], U[dr] = Dr, U[Ke] = !0) : (U[je] = void 0, U[dr] = void 0, U[Ke] = !1))
				}
			} catch (k) {
				P = !0, I = k
			} finally {
				try {
					!A && M.return != null && M.return()
				} finally {
					if (P) throw I
				}
			}
			return Jr(a, !0), a.msgHandler && window.removeEventListener("message", a.msgHandler), Ei(n), t(), !0
		}

		function mn(e) {
			return G(["auto", "dark", "light"], e)
		}

		function gn(e) {
			return G(["auto", "never"], e)
		}

		function hn(e) {
			return e > 0 && e < 9e5
		}

		function yn(e) {
			return e > 0 && e < 36e4
		}
		var eu = RegExp("^[0-9A-Za-z_-]{3,100}$", "u");

		function Si(e) {
			return eu.test(e)
		}
		var ru = RegExp("^[a-z0-9_-]{0,32}$", "iu");

		function _n(e) {
			return e === void 0 ? !0 : typeof e == "string" && ru.test(e)
		}
		var tu = RegExp("^[a-z0-9_\\-=]{0,255}$", "iu");

		function bn(e) {
			return e === void 0 ? !0 : typeof e == "string" && tu.test(e)
		}

		function En(e) {
			return G([ne.Normal, ne.Compact, ne.Invisible, ne.Flexible], e)
		}

		function Tn(e) {
			return G(["auto", "manual", "never"], e)
		}

		function xn(e) {
			return G(["auto", "manual", "never"], e)
		}
		var nu = RegExp("^[a-z]{2,3}(?:[-_][a-z]{2})?$", "iu");

		function Sn(e) {
			return e === "auto" || nu.test(e)
		}

		function In(e) {
			return G(["always", "execute", "interaction-only"], e)
		}

		function Ii(e) {
			return G(["true", "false"], e)
		}

		function wn(e) {
			return G(["render", "execute"], e)
		}
		var Vc = RegExp("^[0-9a-z_\\-.]{5,2000}$", "iu");

		function Rn(e) {
			var r = new URLSearchParams;
			if (0) {
				var t;
				if (t != null && t !== "") var n
			}
			if (e.params["offlabel-show-privacy"] !== void 0 && r.set("offlabel_show_privacy", String(e.params["offlabel-show-privacy"])), e.params["offlabel-show-help"] !== void 0 && r.set("offlabel_show_help", String(e.params["offlabel-show-help"])), !(r.size === 0 || r.toString() === "")) return r.toString()
		}

		function wi(e, r) {
			if (e.isResetting = !1, r) {
				r(String(da));
				return
			}
			x("Could not load challenge from challenges.cloudflare.com.", 161)
		}

		function Ri(e, r) {
			return e ? r ? !0 : G(di, e) : !1
		}

		function Ai() {
			for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window, r = e; r && r.top !== r && !r.location.href.startsWith("http");) r = r.top;
			return r == null ? void 0 : r.location.href
		}
		var Pi = Symbol(),
			au = "Turnstile has already been rendered in this container. The render attempt was rejected.",
			iu = "Turnstile skipped implicit render because a widget already exists in this container.",
			An = void 0,
			ou = function(e) {
				return e.styleSheets.length
			};

		function Mn(e) {
			return Reflect.get(window, e)
		}

		function Nn(e) {
			var r = Mn(e);
			return typeof r == "function" ? function() {
				for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
				return Reflect.apply(r, window, n)
			} : void 0
		}

		function Oi(e, r) {
			return e == null ? r : Number(e)
		}

		function uu(e) {
			return e === "new" || e === "crashed_retry" || e === "failure_retry" || e === "stale_execute" || e === "auto_expire" || e === "auto_timeout" || e === "manual_refresh" || e === "api" || e === "check_delays" || e === "upgrade_reload" || e === "time_check_cached_warning_aux" || e === "js_cookies_missing_aux" || e === "redirecting_text_overrun"
		}

		function lu(e) {
			var r = JSON.stringify(e);
			return JSON.parse(r)
		}

		function Ci(e) {
			return (typeof e == "undefined" ? "undefined" : W(e)) === "object" && e !== null && "clearPendingApiJsReloadRequest" in e && typeof e.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in e && typeof e.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in e && typeof e.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in e && typeof e.reloadAfterUpgrade == "function"
		}

		function ki(e) {
			if (!((typeof e == "undefined" ? "undefined" : W(e)) !== "object" || e === null)) {
				var r = Object.getOwnPropertyDescriptor(e, Pi),
					t = r === void 0 ? void 0 : Reflect.get(r, "value");
				if (Ci(t)) return t;
				var n = lr(e, Ci);
				if (n) return n
			}
		}

		function cu(e) {
			for (var r = window.length, t = 0; t < r; t++)
				if (e === window[t]) return !0;
			return !1
		}
		var h = {
			apiJsMismatchReloadAttempts: 0,
			apiJsMismatchReloadCompletedCount: 0,
			apiJsMismatchReloadPending: !1,
			apiJsReloadBackoffMs: ir,
			apiJsReloadNextAllowedTsMs: 0,
			apiVersion: 1,
			gcs: [],
			isReady: !1,
			isRecaptchaCompatibilityMode: !1,
			lastWidgetIdx: 0,
			scriptUrl: "undefined",
			scriptUrlParsed: void 0,
			scriptWasLoadedAsync: !1,
			turnstileLoadInitTimeTsMs: $(),
			upgradeAttempts: 0,
			upgradeCompletedCount: 0,
			watchCatInterval: null,
			watchCatSeq: 0,
			widgetMap: new Map
		};

		function du() {
			if (!(__c0 === void 0 || __c0.length === 0)) {
				var e = sr(h);
				e[cr] = !0, e[Ne] = __c0, e[Qe] = __c1 === !0
			}
		}
		var zr, Ct, Lt;

		function su(e) {
			var r = !0,
				t = !1,
				n = void 0;
			try {
				for (var a = h.widgetMap[Symbol.iterator](), u; !(r = (u = a.next()).done); r = !0) {
					var l = ar(u.value, 2),
						d = l[0],
						f = l[1];
					if (f.wrapper.parentElement === e || f.wrapper !== e && f.wrapper.contains(e) || f.shadow.contains(e)) return d
				}
			} catch (s) {
				t = !0, n = s
			} finally {
				try {
					!r && a.return != null && a.return()
				} finally {
					if (t) throw n
				}
			}
			return null
		}

		function Tt(e) {
			if (typeof e == "string") {
				var r = Nr(e);
				return r !== null && h.widgetMap.has(r) ? r : h.widgetMap.has(e) ? e : null
			}
			return su(e)
		}

		function fu(e) {
			return e === "implicit" ? iu : au
		}

		function Li(e, r) {
			return e === "explicit" && (r == null ? void 0 : r.renderSource) === "implicit"
		}

		function Pn() {
			zr !== void 0 && (window.clearTimeout(zr), zr = void 0)
		}

		function Di() {
			var e = !0,
				r = !1,
				t = void 0;
			try {
				for (var n = h.widgetMap.values()[Symbol.iterator](), a; !(e = (a = n.next()).done); e = !0) {
					var u = a.value;
					if (u.chlPageData !== void 0 && u.chlPageData !== "") return !0
				}
			} catch (l) {
				r = !0, t = l
			} finally {
				try {
					!e && n.return != null && n.return()
				} finally {
					if (r) throw t
				}
			}
			return !1
		}

		function Kr(e) {
			var r = h.widgetMap.get(e),
				t = Q(e);
			if (r !== void 0) {
				var n = Fe(r, t);
				n !== null && ve(n, {
					apiJsMismatchReloadAttempts: h.apiJsMismatchReloadAttempts,
					apiJsMismatchReloadCompletedCount: h.apiJsMismatchReloadCompletedCount,
					event: "reloadApiJsRejected",
					source: J,
					widgetId: e
				}, r.iframeOrigin)
			}
		}

		function Dn() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
				r = e.preserveMismatchReloadPending,
				t = r === void 0 ? !1 : r;
			Lt = void 0, t || (h.apiJsMismatchReloadPending = !1), Ct !== void 0 && (window.clearTimeout(Ct), Ct = void 0)
		}

		function Fi() {
			var e = Lt;
			Dn(), e !== void 0 && Kr(e)
		}

		function pu() {
			return $() < h.apiJsReloadNextAllowedTsMs
		}

		function vu() {
			var e = h.apiJsReloadBackoffMs,
				r = Number.isFinite(e) && e > 0 ? Math.min(e, Rr) : ir,
				t = Math.round(r * (.8 + Math.random() * .4));
			h.apiJsReloadNextAllowedTsMs = $() + t, h.apiJsReloadBackoffMs = Math.min(r * 2, Rr)
		}

		function mu(e) {
			Dn({
				preserveMismatchReloadPending: !0
			}), h.apiJsMismatchReloadPending = !0, Lt = e, Ct = window.setTimeout(function() {
				Fi()
			}, aa)
		}

		function Fn() {
			Pn(), !Di() && (zr = window.setTimeout(function() {
				zr = void 0, Vi()
			}, oa))
		}

		function On(e, r) {
			Wi(e, r, "")
		}
		var Hn = [];

		function Mi() {
			h.isReady = !0;
			var e = !0,
				r = !1,
				t = void 0;
			try {
				for (var n = Hn[Symbol.iterator](), a; !(e = (a = n.next()).done); e = !0) {
					var u = a.value;
					u()
				}
			} catch (l) {
				r = !0, t = l
			} finally {
				try {
					!e && n.return != null && n.return()
				} finally {
					if (r) throw t
				}
			}
		}

		function Ni(e, r) {
			e.onerror = function() {
				wi(r, r.cbError)
			}
		}

		function Hi(e, r) {
			var t, n = (t = e.params["response-field"]) !== null && t !== void 0 ? t : !0,
				a = h.isRecaptchaCompatibilityMode,
				u = "".concat(r, "_response"),
				l = "".concat(r, "_g_response"),
				d = (!n || w(document.querySelector("#".concat(u)), HTMLInputElement)) && (!a || w(document.querySelector("#".concat(l)), HTMLInputElement));
			if (!(e.responseElementsBuilt && d)) {
				if (n && !w(document.querySelector("#".concat(u)), HTMLInputElement)) {
					var f, s = document.createElement("input");
					s.type = "hidden", s.name = (f = e.params["response-field-name"]) !== null && f !== void 0 ? f : ta, s.id = u, e.wrapper.appendChild(s)
				}
				if (a && !w(document.querySelector("#".concat(l)), HTMLInputElement)) {
					var m = document.createElement("input");
					m.type = "hidden", m.name = na, m.id = l, e.wrapper.appendChild(m)
				}
				e.responseElementsBuilt = !0
			}
		}

		function Wi(e, r, t) {
			Hi(e, r);
			var n = document.querySelector("#".concat(r, "_response"));
			if (n !== null && w(n, HTMLInputElement) && (n.value = t), h.isRecaptchaCompatibilityMode) {
				var a = document.querySelector("#".concat(r, "_g_response"));
				a !== null && w(a, HTMLInputElement) && (a.value = t)
			}
		}

		function gu(e) {
			return e.chlPageData !== void 0 && e.chlPageData !== ""
		}

		function hu(e) {
			return !gu(e) && !pe("pac", e)
		}

		function xt(e, r) {
			var t, n = (t = r.params.size) !== null && t !== void 0 ? t : ne.Normal,
				a = r.mode;
			switch (a) {
				case de.NonInteractive:
				case de.Managed:
					var u;
					switch (e.style.display = "", e.style.opacity = "", e.style.position = "", e.style.left = "", e.style.top = "", e.style.visibility = "", e.style.pointerEvents = "", e.style.zIndex = "", e.setAttribute("tabindex", String((u = r.params.tabindex) !== null && u !== void 0 ? u : 0)), e.removeAttribute("aria-hidden"), n) {
						case ne.Compact:
							e.style.width = "150px", e.style.height = "140px";
							break;
						case ne.Invisible:
							x('Invalid value for parameter "size", expected "'.concat(ne.Compact, '", "').concat(ne.Flexible, '", or "').concat(ne.Normal, '", got "').concat(n, '"'), 2817);
						case ne.Normal:
							e.style.width = "300px", e.style.maxWidth = "100%", e.style.height = "65px";
							break;
						case ne.Flexible:
							e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
							break;
						default:
							break
					}
					break;
				case de.Invisible:
					on(e, r);
					break;
				default:
					x('Invalid value for parameter "mode", expected "'.concat(de.NonInteractive, '", "').concat(de.Managed, '" or "').concat(de.Invisible, '", got "').concat(String(a), '"'), 2818)
			}
		}

		function Cn(e, r) {
			on(e, r)
		}

		function yu(e, r) {
			var t = r.get("turnstile_iframe_alt");
			t !== void 0 && t !== "" && (e.title = t)
		}

		function Fe(e, r) {
			return e.shadow.querySelector("#".concat(r))
		}

		function _u(e, r) {
			var t, n;
			return (t = (n = e.wrapper.parentNode) === null || n === void 0 ? void 0 : n.querySelector("#".concat(r, "-fr"))) !== null && t !== void 0 ? t : null
		}

		function bu(e) {
			var r, t;
			return ((t = e.feedbackPopup) === null || t === void 0 ? void 0 : t.closed) === !0 ? (e.feedbackPopup = void 0, e.feedbackPopupOrigin = void 0, null) : (r = e.feedbackPopup) !== null && r !== void 0 ? r : null
		}

		function kt(e, r) {
			var t, n, a = (t = (n = _u(e, r)) === null || n === void 0 ? void 0 : n.contentWindow) !== null && t !== void 0 ? t : null;
			if (a !== null) return {
				targetOrigin: e.feedbackIframeOrigin,
				targetWindow: a
			};
			var u = bu(e);
			return {
				targetOrigin: u === null ? void 0 : e.feedbackPopupOrigin,
				targetWindow: u
			}
		}

		function kn(e) {
			return typeof e == "string" ? e.slice(0, 8192) : void 0
		}

		function Eu(e) {
			if ((typeof e == "undefined" ? "undefined" : W(e)) !== "object" || e === null) return !1;
			var r = e;
			return r.source === J && typeof r.event == "string" && typeof r.widgetId == "string"
		}

		function Tu(e) {
			return e.isTrusted && Eu(e.data)
		}

		function xu(e) {
			return Ri(e.origin, !1)
		}

		function Su(e, r, t) {
			var n, a, u = (n = (a = Fe(r, t)) === null || a === void 0 ? void 0 : a.contentWindow) !== null && n !== void 0 ? n : null,
				l = kt(r, t).targetWindow,
				d = function(T) {
					return T !== null && e.source === T
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
					var s = f;
					return !1
				}
			}
		}

		function Ln() {
			return Ai(window)
		}

		function St(e, r, t) {
			return e === null ? r : Ii(e) ? e === "true" : (R(t(e)), r)
		}

		function Iu() {
			try {
				var e = Pr();
				if (!e) return;
				var r = e.src,
					t = !0,
					n = !1,
					a = void 0;
				try {
					for (var u = performance.getEntriesByType("resource")[Symbol.iterator](), l; !(t = (l = u.next()).done); t = !0) {
						var d = l.value;
						if (w(d, PerformanceResourceTiming) && d.name.includes(r)) return d
					}
				} catch (f) {
					n = !0, a = f
				} finally {
					try {
						!t && u.return != null && u.return()
					} finally {
						if (n) throw a
					}
				}
			} catch (f) {
				return
			}
		}
		var Ui = (function() {
				var e = Iu(),
					r = new WeakMap,
					t = new WeakMap,
					n = new WeakSet,
					a = new WeakSet;

				function u(c) {
					var i;
					(i = t.get(c)) === null || i === void 0 || i(), t.delete(c)
				}

				function l(c) {
					var i = r.get(c);
					if (!(!n.has(c) || !a.has(c) || i === void 0 || c.autoFeedbackSent === !0 || pe("feedback-report-auto-submit", c))) {
						var v = pi(c, i.feedbackOrigin, i.rayId, c.frMd, h.scriptUrlParsed);
						v && (c.autoFeedbackSent = !0, u(c), n.delete(c), r.delete(c), a.delete(c))
					}
				}

				function d(c) {
					if (u(c), !(r.get(c) === void 0 || c.autoFeedbackSent === !0)) {
						var i = function(y) {
							y.isTrusted && (n.add(c), l(c))
						};
						window.addEventListener("keydown", i, !0), window.addEventListener("mousemove", i, !0), window.addEventListener("touchstart", i, !0), t.set(c, function() {
							window.removeEventListener("keydown", i, !0), window.removeEventListener("mousemove", i, !0), window.removeEventListener("touchstart", i, !0)
						})
					}
				}

				function f(c, i, v, y, p, o) {
					return jn(function() {
						var g, L, b, N, F, z, q, me, We, se, le, ge;
						return $n(this, function(fe) {
							switch (fe.label) {
								case 0:
									if (L = function(Z, we) {
											var ee = h.widgetMap.get(i);
											ee !== c || ee.isComplete || ee.isResetting || ee.response !== y || (!Z && we !== void 0 && we !== "" && R(we), S(ee, v, Z))
										}, b = c.params.sitekey, N = Ln(), N === void 0 || N === "") return R("Cannot determine Turnstile's embedded location, aborting clearance redemption."), S(c, v, !1), [2];
									F = Hr(c, "b"), z = F === void 0 ? "" : "h/".concat(encodeURIComponent(F), "/"), q = new URL(N), me = "https", We = "", se = "".concat(me, "://").concat(q.host, "/cdn-cgi/challenge-platform/").concat(z, "c/").concat(o).concat(We), fe.label = 1;
								case 1:
									return fe.trys.push([1, 3, , 4]), [4, fetch(se, {
										body: JSON.stringify({
											secondaryToken: p,
											sitekey: b
										}),
										headers: {
											"Content-Type": "application/json"
										},
										method: "POST",
										redirect: "manual"
									})];
								case 2:
									return le = fe.sent(), le.status === 200 ? L(!0) : L(!1, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), [3, 4];
								case 3:
									return ge = fe.sent(), L(!1, "Error contacting Turnstile, aborting clearance redemption."), [3, 4];
								case 4:
									return [2]
							}
						})
					})()
				}

				function s(c, i, v) {
					if (c.params.retry === it.Auto || v) {
						var y;
						if (c.feedbackOpen) {
							c.pendingRetry = {
								crashed: v
							};
							return
						}
						var p = v ? 0 : 1e3 * 2 + ((y = c.params["retry-interval"]) !== null && y !== void 0 ? y : 0);
						c.retryTimeout = window.setTimeout(function() {
							var o = v ? ae.CrashedRetry : ae.FailureRetry;
							H(o, i)
						}, p)
					}
				}

				function m(c, i, v) {
					return c.params.execution === Or.Render ? !0 : (i === ae.CrashedRetry || i === ae.FailureRetry || i === ae.CheckDelays || i === ae.UpgradeReload) && c.params.execution === Or.Execute && v
				}

				function T(c, i, v) {
					if (c.feedbackOpen && (c.feedbackOpen = !1, u(c), n.delete(c), r.delete(c), a.delete(c), c.feedbackPopupCloseCheck !== void 0 && (window.clearInterval(c.feedbackPopupCloseCheck), c.feedbackPopupCloseCheck = void 0), mi(), window.postMessage({
							event: "feedbackClose",
							source: J,
							widgetId: v
						}, "*"), c.pendingRetry)) {
						var y = c.pendingRetry.crashed;
						c.pendingRetry = void 0, s(c, i, y)
					}
				}

				function S(c, i, v) {
					var y;
					c.response === void 0 && x("[Internal Error] Widget was completed but no response was given", 1362), c.isExecuting = !1, c.isComplete = !0, Wi(c, i, c.response), (y = c.cbSuccess) === null || y === void 0 || y.call(c, c.response, v)
				}

				function O(c) {
					if (!c) return [];
					for (var i = c.attributes, v = i.length, y = new Array(v), p = 0; p < v; p++) y[p] = i[p].name;
					return y
				}

				function _() {
					for (var c = {}, i = [], v = document.querySelectorAll("*"), y = 0; y < v.length && i.length < 50; y++) {
						var p = v[y].tagName.toLowerCase();
						p.includes("-") && !c[p] && (c[p] = !0, i.push(p))
					}
					return i
				}

				function A(c, i, v) {
					if (c.rcV = i, 0) var y
				}
				var P = function(i) {
						var v = Reflect.get(i, "source");
						if (v === J) {
							var y = Reflect.get(i, "widgetId");
							if (!(typeof y != "string" || y === "" || !h.widgetMap.has(y))) {
								var p = Q(y),
									o = h.widgetMap.get(y);
								if (o !== void 0) switch (i.event) {
									case "init": {
										o.widgetInitStartTimeTsMs = $(), o.kills = i.kills, vt(o) && (o.gcs.length = 0);
										var g = Fe(o, p);
										g || x("Cannot initialize Widget, Element not found (#".concat(p, ")."), 3074), o.mode = i.mode, o.nextRcV = i.nextRcV, o.mode === de.Invisible && o.params["refresh-expired"] === or.Manual && R("refresh-expired=manual is impossible in invisible mode, consider using '".concat(or.Auto, "' or '").concat(or.Never, ".'")), o.mode !== de.Managed && o.params["refresh-timeout"] !== Ar.Auto && R("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), o.params.appearance === oe.Always || o.isExecuting && o.params.appearance === oe.Execute ? xt(g, o) : Cn(g, o), li(o, g);
										var L = Fe(o, p);
										L || x("Received state for an unknown widget: ".concat(i.widgetId), 3078), ve(L, {
											event: "init",
											source: J,
											widgetId: i.widgetId
										}, o.iframeOrigin);
										break
									}
									case "translationInit": {
										var b = o.shadow.querySelector("#".concat(p));
										w(b, HTMLElement) || x("Cannot initialize Widget, Element not found (#".concat(p, ")."), 3074);
										var N = new Map;
										o.displayLanguage = i.displayLanguage, o.displayRtl = i.displayRtl, Object.keys(i.translationData).forEach(function(Ue) {
											N.set(Ue, i.translationData[Ue])
										}), yu(b, N);
										break
									}
									case "languageUnsupported": {
										R("Language ".concat(o.params.language, " is not supported, falling back to: ").concat(i.fallback, ".")), o.displayLanguage = i.fallback;
										break
									}
									case "reject": {
										var F = o.shadow.querySelector("#".concat(p));
										o.isExecuting = !1, w(F, HTMLElement) || x("Cannot initialize Widget, Element not found (#".concat(p, ")."), 3075);
										var z = Reflect.get(i, "reason");
										if (z === "unsupported_browser") {
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
										if (A(o, Le, i.widgetId), o.response = i.token, i.aC !== void 0 && i.aC !== "") {
											var me;
											(me = o.assetCtxCallback) === null || me === void 0 || me.call(o, i.aC)
										}
										if (i.scs !== void 0 && i.scs !== "" && !pe("scs", o) && (o.scs = i.scs, o.params["session-continuity-persist"] === !0 && !pe("scs_persist", o))) {
											var We = o.params.sitekey;
											if (We !== null && We !== "") {
												var se = "".concat(Ht).concat(We);
												try {
													localStorage.setItem(se, i.scs)
												} catch (Ue) {}
											}
										}
										i.sToken !== void 0 && i.sToken !== "" ? f(o, i.widgetId, p, i.token, i.sToken, i.chlId) : S(o, p, !1);
										break
									}
									case "fail": {
										var le = Reflect.get(i, "rcV");
										if (typeof le == "string" && le !== "" && A(o, le, y), i.cfChlOut !== void 0 && i.cfChlOut !== "" && (o.cfChlOut = i.cfChlOut), i.cfChlOutS !== void 0 && i.cfChlOutS !== "" && (o.cfChlOutS = i.cfChlOutS), o.xhrError = kn(i.xhrError), i.code !== void 0 && i.code !== 0 && (o.errorCode = i.code), i.aC !== void 0 && i.aC !== "") {
											var ge;
											(ge = o.assetCtxCallback) === null || ge === void 0 || ge.call(o, i.aC)
										}
										o.isExecuting = !1, o.isFailed = !0, o.isInitialized = !0, i.frMd !== void 0 && i.frMd !== "" && (o.frMd = i.frMd), On(o, p);
										var fe = o.cbError,
											Ie = i.code === rt || i.code === tt,
											Z = i.code !== ca;
										if (Ie) {
											var we = Fe(o, p);
											we && ve(we, {
												event: "forceFail",
												source: J,
												widgetId: i.widgetId
											}, o.iframeOrigin)
										}
										if (fe !== void 0) {
											var ee;
											fe(String((ee = i.code) !== null && ee !== void 0 ? ee : sa)) === !0 ? Z && o.params.retry === it.Auto && !o.isResetting && s(o, p, Ie) : (i.code !== void 0 && i.code !== 0 && R("Error: ".concat(i.code, ".")), Z && s(o, p, Ie))
										} else i.code !== void 0 && i.code !== 0 ? (Z && s(o, p, Ie), x("Error: ".concat(i.code), 3076)) : s(o, p, !1);
										break
									}
									case "feedbackInit": {
										i.cfChlOut !== void 0 && i.cfChlOut !== "" && (o.cfChlOut = i.cfChlOut, o.xhrError = void 0), i.cfChlOutS !== void 0 && i.cfChlOutS !== "" && (o.cfChlOutS = i.cfChlOutS);
										var ye = kn(i.xhrError);
										ye !== void 0 && (o.xhrError = ye);
										var Gr = kt(o, p).targetWindow;
										if (Gr) {
											R("A feedback report form is already opened for this widget.");
											return
										}
										if (o.autoFeedbackSent !== !0 && !pe("feedback-report-auto-submit", o) ? r.set(o, {
												feedbackOrigin: i.feedbackOrigin,
												rayId: i.rayId
											}) : r.delete(o), o.feedbackOpen = !0, o.retryTimeout !== void 0) {
											var yr, E;
											clearTimeout(o.retryTimeout), o.retryTimeout = void 0, (E = (yr = o).pendingRetry) !== null && E !== void 0 || (yr.pendingRetry = {
												crashed: !1
											})
										}
										vi(), window.postMessage({
											event: "feedbackOpen",
											source: J,
											widgetId: i.widgetId
										}, "*"), sn(p, o, i.feedbackOrigin, h.scriptUrlParsed, function() {
											T(o, p, i.widgetId)
										});
										break
									}
									case "feedbackActivity": {
										n.add(o), l(o);
										break
									}
									case "requestFeedbackData": {
										a.add(o), d(o);
										var rr = Fe(o, p);
										w(rr, HTMLElement) || x("Received state for an unknown widget: #".concat(p, " / ").concat(i.widgetId), 3078), ve(rr, {
											event: "requestTurnstileResults",
											source: J,
											widgetId: i.widgetId
										}, o.iframeOrigin), l(o);
										break
									}
									case "turnstileResults": {
										var Ge, _r, _e, Xr = kt(o, p),
											Mt = Xr.targetOrigin,
											Yr = Xr.targetWindow;
										if (!Yr) break;
										Zt(Yr, {
											cfChlOut: (Ge = o.cfChlOut) !== null && Ge !== void 0 ? Ge : i.cfChlOut,
											cfChlOutS: (_r = o.cfChlOutS) !== null && _r !== void 0 ? _r : i.cfChlOutS,
											errorCode: o.errorCode,
											event: "feedbackData",
											frMd: (_e = o.frMd) !== null && _e !== void 0 ? _e : i.frMd,
											mode: i.mode,
											rayId: i.rayId,
											rcV: i.rcV,
											sitekey: i.sitekey,
											source: J,
											widgetId: i.widgetId,
											xhrError: o.cfChlOut === void 0 ? kn(i.xhrError) : o.xhrError
										}, Mt);
										break
									}
									case "closeFeedbackReportIframe": {
										var Nt = kt(o, p).targetWindow;
										Nt || x("Received state for an unknown widget: ".concat(i.widgetId), 3078), qr("".concat(p, "-fr")), mr(o), T(o, p, i.widgetId);
										break
									}
									case "tokenExpired": {
										var br, Pt = i.token;
										o.isExpired = !0, (br = o.cbExpired) === null || br === void 0 || br.call(o, Pt), o.params["refresh-expired"] === or.Auto && !o.isResetting && H(ae.AutoExpire, p);
										break
									}
									case "interactiveTimeout": {
										A(o, Le, i.widgetId), On(o, p);
										var Qr = o.cbTimeout;
										if (Qr ? Qr() : o.params["refresh-timeout"] === Ar.Never && !o.isResetting && R("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), o.params["refresh-timeout"] === Ar.Auto && !o.isResetting) {
											var Re = o.cbAfterInteractive;
											Re == null || Re(), H(ae.AutoTimeout, p)
										}
										break
									}
									case "refreshRequest": {
										A(o, Le, i.widgetId), qr(p), mr(o), H(ae.ManualRefresh, p);
										break
									}
									case "reloadRequest": {
										A(o, i.nextRcV, i.widgetId), H(uu(i.trigger) ? i.trigger : ae.Api, p);
										break
									}
									case "reloadApiJsRequest": {
										if (pe("reload", o)) {
											Kr(i.widgetId);
											break
										}
										if (Lt !== void 0) {
											Kr(i.widgetId);
											break
										}
										if (pu()) {
											Kr(i.widgetId);
											break
										}
										Vi() ? (h.apiJsMismatchReloadAttempts++, vu(), mu(i.widgetId)) : Kr(i.widgetId);
										break
									}
									case "interactiveBegin": {
										var Ae, ce = o.shadow.querySelector("#".concat(p));
										w(ce, HTMLElement) || x("Cannot layout widget, Element not found (#".concat(p, ")."), 3076), (Ae = o.cbBeforeInteractive) === null || Ae === void 0 || Ae.call(o), o.params.appearance === oe.InteractionOnly && xt(ce, o);
										break
									}
									case "interactiveEnd": {
										var tr;
										(tr = o.cbAfterInteractive) === null || tr === void 0 || tr.call(o);
										break
									}
									case "widgetStale": {
										o.isStale = !0;
										break
									}
									case "requestExtraParams": {
										o.widgetParamsStartTimeTsMs = $();
										var Xe = Fe(o, p);
										Xe || x("Received state for an unknown widget: ".concat(i.widgetId), 3078), o.isResetting = !1;
										var $r = {},
											nr = $(),
											Y = ui(o, Xe),
											Oe = hu(o) ? Ia(o.wrapper) : void 0,
											Er = [_(), O(document.body.parentElement), document.referrer, Ea(o.wrapper), window.self !== window.top, window.location.href, document.querySelectorAll("meta").length, Oe == null ? void 0 : Oe.pac, Oe == null ? void 0 : Oe.pad, Oa(document, fa, pa, An), document.scripts.length, _t(o).shadowRoot === null, ou(document, An), "".concat(document.title.length, "|").concat(Qt(document.title)), Aa(document, An), Y.appearance, Y.expectedHidden, Y.hostParent, Y.expectedHiddenReason, Y.isExecuting, Y.mode, Y.mount, Y.reasons, Y.unexpectedHidden, Y.viewport.height, Y.viewport.visibilityState, Y.viewport.width, ba(o.wrapper), _a(o.wrapper).slice(0, va), window.innerWidth],
											he = o.scs;
										if ((he === void 0 || he === "") && o.params["session-continuity-persist"] === !0 && !pe("scs_persist", o)) {
											var Tr = o.params.sitekey;
											if (Tr !== null && Tr !== "") {
												var xr = "".concat(Ht).concat(Tr);
												try {
													var Ce;
													he = (Ce = localStorage.getItem(xr)) !== null && Ce !== void 0 ? Ce : void 0
												} catch (Ue) {}
											}
										}
										he !== void 0 && he !== "" && he.length > ma && (he = void 0), ve(Xe, ke({
											action: o.action,
											apiJsMismatchReloadAttempts: h.apiJsMismatchReloadAttempts,
											apiJsMismatchReloadCompletedCount: h.apiJsMismatchReloadCompletedCount,
											apiJsResourceTiming: e === void 0 ? void 0 : lu(e),
											appearance: o.params.appearance,
											au: h.scriptUrl,
											cData: o.cData,
											ch: "f8df4d4a0cd6",
											chlPageData: o.chlPageData,
											cs: Vr(o),
											event: "extraParams",
											execution: o.params.execution,
											"expiry-interval": o.params["expiry-interval"],
											language: o.params.language,
											rcV: o.rcV,
											"refresh-expired": o.params["refresh-expired"],
											"refresh-timeout": o.params["refresh-timeout"],
											retry: o.params.retry,
											"retry-interval": o.params["retry-interval"],
											scs: he,
											source: J,
											timeExtraParamsMs: $() - o.widgetRenderStartTimeTsMs,
											timeInitMs: o.widgetInitStartTimeTsMs - o.widgetRenderEndTimeTsMs,
											timeLoadInitMs: $() - h.turnstileLoadInitTimeTsMs,
											timeParamsMs: o.widgetParamsStartTimeTsMs - o.widgetInitStartTimeTsMs,
											timeRenderMs: o.widgetRenderEndTimeTsMs - o.widgetRenderStartTimeTsMs,
											timeTiefMs: $() - nr,
											upgradeAttempts: h.upgradeAttempts,
											upgradeCompletedCount: h.upgradeCompletedCount,
											url: Ln(),
											wPr: Er,
											widgetId: i.widgetId
										}, $r), o.iframeOrigin), j(o, i.widgetId, Xe), o.isInitialized = !0;
										break
									}
									default:
										break
								}
							}
						}
					},
					I = function(i) {
						if (Tu(i)) {
							var v = i.data;
							if (!xu(i)) {
								R("Ignored message from wrong origin: ".concat(i.origin, "."));
								return
							}
							if (!(v.widgetId === "" || !h.widgetMap.has(v.widgetId))) {
								var y = Q(v.widgetId),
									p = h.widgetMap.get(v.widgetId);
								if (p !== void 0) {
									if (!Su(i, p, y)) {
										R("Ignored message from unexpected source for event: ".concat(v.event, "."));
										return
									}
									P(v)
								}
							}
						}
					};
				h.msgHandler = I, h.internalMsgHandler = P, window.addEventListener("message", I);

				function M() {
					var c = "abcdefghijklmnopqrstuvwxyz0123456789",
						i = c.length,
						v;
					do {
						v = "";
						for (var y = 0; y < 5; y++) v += c.charAt(Math.floor(Math.random() * i))
					} while (h.widgetMap.has(v));
					return v
				}

				function C(c) {
					var i;
					if (typeof c == "string") {
						var v = Tt(c);
						if (v !== null) return v;
						try {
							var y = document.querySelector(c);
							return y === null ? null : C(y)
						} catch (o) {
							return null
						}
					}
					if (w(c, Element)) return Tt(c);
					var p = !!c;
					return p || h.widgetMap.size === 0 ? null : (i = He()) !== null && i !== void 0 ? i : null
				}

				function j(c, i, v) {
					for (; c.msgQueue.length > 0;) {
						var y = c.msgQueue.pop();
						ve(v, {
							cs: y === Cr.Execute ? Vr(c) : void 0,
							event: y,
							source: J,
							widgetId: i
						}, c.iframeOrigin)
					}
				}

				function U(c) {
					return c.isExecuting
				}

				function k(c, i) {
					if (i) {
						var v = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled", "_tcsrp"],
							y = [],
							p = !0,
							o = !1,
							g = void 0;
						try {
							for (var L = v[Symbol.iterator](), b; !(p = (b = L.next()).done); p = !0) {
								var N = b.value;
								Object.getOwnPropertyDescriptor(i, N) !== void 0 && i[N] !== void 0 && i[N] !== c.params[N] && y.push(N)
							}
						} catch (F) {
							o = !0, g = F
						} finally {
							try {
								!p && L.return != null && L.return()
							} finally {
								if (o) throw g
							}
						}
						y.length > 0 && x("The parameters ".concat(v.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(y.join(",")), 3618), i.action !== void 0 && i.action !== "" && (_n(i.action) || x('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), c.action = i.action), i.cData !== void 0 && i.cData !== "" && (bn(i.cData) || x('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), c.cData = i.cData), i["after-interactive-callback"] !== void 0 && (c.cbAfterInteractive = Me("after-interactive-callback", i["after-interactive-callback"])), i["before-interactive-callback"] !== void 0 && (c.cbBeforeInteractive = Me("before-interactive-callback", i["before-interactive-callback"])), i.callback !== void 0 && (c.cbSuccess = i.callback), i["expired-callback"] !== void 0 && (c.cbExpired = Me("expired-callback", i["expired-callback"])), i["timeout-callback"] !== void 0 && (c.cbTimeout = Me("timeout-callback", i["timeout-callback"])), i["error-callback"] !== void 0 && (c.cbError = $t(i["error-callback"])), i["unsupported-callback"] !== void 0 && (c.cbUnsupported = i["unsupported-callback"]), i.chlPageData !== void 0 && i.chlPageData !== "" && (c.chlPageData = i.chlPageData)
					}
				}

				function D(c, i, v) {
					c === "explicit" && i !== void 0 && k(i, v), R(fu(c))
				}

				function ie(c) {
					H(ae.Api, c, Pe(ja, h))
				}

				function H(c, i, v) {
					var y, p, o = C(i);
					o === null && x("Nothing to reset found for provided container", 3329);
					var g = h.widgetMap.get(o);
					g === void 0 && x("Widget ".concat(o, " to reset was not found."), 3331), Ur(g, v);
					var L = g.isExecuted;
					g.isResetting = !0, g.response = void 0, g.mode = void 0, g.msgQueue = [], g.isComplete = !1, g.isExecuted = !1, g.isExecuting = !1, g.isExpired = !1, g.isFailed = !1, g.isInitialized = !1, g.isStale = !1, g.isOverrunning = !1, g.cfChlOut = void 0, g.cfChlOutS = void 0, g.xhrError = void 0, g.errorCode = void 0, g.frMd = void 0, g.autoFeedbackSent = !1, u(g), n.delete(g), r.delete(g), a.delete(g), g.watchcat.overrunBeginSeq = 0, g.watchcat.lastAckedSeq = 0, g.watchcat.seq = 0, m(g, c, L) && (g.msgQueue.push(Cr.Execute), g.isExecuted = !0, g.isExecuting = !0);
					var b = Q(o),
						N = Fe(g, b);
					N === null && x("Widget ".concat(o, " to reset was not found."), 3330), (g.params.appearance === oe.InteractionOnly || g.params.appearance === oe.Execute) && Cn(N, g), g.params.sitekey === null && x("Unexpected Error: Sitekey is null", 3347);
					var F = N.cloneNode();
					w(F, HTMLIFrameElement) || x("Unexpected Error: Cloned widget is not an iframe", 3348);
					var z = fr(g),
						q = un(o, g.params.sitekey, g.params, (y = g.rcV) !== null && y !== void 0 ? y : Le, !1, "b", c, h.scriptUrlParsed, Rn(g), z[Ke] ? z[je] : void 0);
					F.src = q, Ni(F, g), g.iframeOrigin = pr(q), (p = N.parentNode) === null || p === void 0 || p.replaceChild(F, N), On(g, b), g.retryTimeout !== void 0 && window.clearTimeout(g.retryTimeout)
				}

				function K(c, i) {
					var v = Q(c),
						y = ["input#".concat(v, "_response"), "input#".concat(v, "_g_response")];
					document.querySelectorAll(y.join(", ")).forEach(function(p) {
						p.remove()
					}), i.shadow.querySelectorAll(y.join(", ")).forEach(function(p) {
						p.remove()
					}), qr(v), mr(i), i.wrapper.remove(), st(i), i.retryTimeout !== void 0 && window.clearTimeout(i.retryTimeout), h.widgetMap.delete(c), Jr(h)
				}

				function X(c) {
					var i = Pe(Ka, h),
						v = C(c),
						y = v === null ? void 0 : h.widgetMap.get(v);
					if (v === null || y === void 0) {
						R("Nothing to remove found for the provided container.");
						return
					}
					Wr(h.gcs, i), Ur(y, i), K(v, y)
				}

				function B() {
					var c = te(h.widgetMap.keys()),
						i = !0,
						v = !1,
						y = void 0;
					try {
						for (var p = c[Symbol.iterator](), o; !(i = (o = p.next()).done); i = !0) {
							var g = o.value,
								L = h.widgetMap.get(g),
								b = Q(g);
							L !== void 0 && (qr(b), mr(L), H(ae.UpgradeReload, b))
						}
					} catch (N) {
						v = !0, y = N
					} finally {
						try {
							!i && p.return != null && p.return()
						} finally {
							if (v) throw y
						}
					}
				}

				function xe(c, i, v, y) {
					var p, o, g, L, b, N, F, z, q, me, We = $(),
						se, le;
					if (typeof c == "string") {
						var ge = Tt(c);
						if (ge === null) {
							var fe;
							try {
								fe = document.querySelector(c)
							} catch (Au) {
								x('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(c, '"'), 3586)
							}
							fe === null && x('Unable to find a container for "'.concat(c, '"'), 3585), se = fe
						} else {
							var Ie, Z = h.widgetMap.get(ge),
								we = (Ie = Z == null ? void 0 : Z.wrapper.parentElement) !== null && Ie !== void 0 ? Ie : null;
							if (we !== null && Li(v, Z)) se = we, le = {
								widget: Z,
								widgetId: ge
							};
							else return Z !== void 0 && ze(ge, Z, y), D(v, Z, i), Q(ge)
						}
					} else w(c, HTMLElement) ? se = c : x('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
					if (le === void 0) {
						var ee = Tt(se);
						if (ee !== null) {
							var ye = h.widgetMap.get(ee);
							if (ye !== void 0 && Li(v, ye) && ye.wrapper.parentElement === se) le = {
								widget: ye,
								widgetId: ee
							};
							else return ye && ze(ee, ye, y), D(v, ye, i), Q(ee)
						}
					}
					var Gr = Ln();
					if (Gr === void 0 || Gr === "") return x("Turnstile cannot determine its page location", 3607);
					var yr = Ru(se);
					if (yr !== void 0) {
						var E = Object.assign(yr, i),
							rr = E.action,
							Ge = E.cData,
							_r = E.chlPageData,
							_e = E.sitekey;
						E.theme = (p = E.theme) !== null && p !== void 0 ? p : nt.Auto, E.retry = (o = E.retry) !== null && o !== void 0 ? o : it.Auto, E.execution = (g = E.execution) !== null && g !== void 0 ? g : Or.Render, E.appearance = (L = E.appearance) !== null && L !== void 0 ? L : oe.Always, E["retry-interval"] = Oi(E["retry-interval"], ia), E["expiry-interval"] = Oi(E["expiry-interval"], (ua - la) * 1e3), E.size = (b = E.size) !== null && b !== void 0 ? b : ne.Normal;
						var Xr = E.callback,
							Mt = Me("expired-callback", E["expired-callback"]),
							Yr = Me("timeout-callback", E["timeout-callback"]),
							Nt = Me("after-interactive-callback", E["after-interactive-callback"]),
							br = Me("before-interactive-callback", E["before-interactive-callback"]),
							Pt = $t(E["error-callback"]),
							Qr = E["unsupported-callback"];
						typeof _e != "string" && x('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof _e == "undefined" ? "undefined" : W(_e), '"'), 3588), Si(_e) || x('Invalid input for parameter "sitekey", got "'.concat(_e, '"'), 3589), En(E.size) || x('Invalid type for parameter "size", expected normal|compact, got "'.concat(String(E.size), '" ').concat(W(E.size)), 3590), mn(E.theme) || x('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(String(E.theme), '" ').concat(W(E.theme)), 3591), gn(E.retry) || x('Invalid type for parameter "retry", expected never|auto, got "'.concat(String(E.retry), '" ').concat(W(E.retry)), 3592), (E.language === void 0 || E.language === "") && (E.language = "auto"), Sn(E.language) || (R('Invalid language value: "'.concat(E.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), E.language = "auto"), In(E.appearance) || x('Unknown appearance value: "'.concat(String(E.appearance), ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), wn(E.execution) || x('Unknown execution value: "'.concat(String(E.execution), ", expected either: 'render' or 'execute'."), 3601), hn(E["retry-interval"]) || x('Invalid retry-interval value: "'.concat(E["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), yn(E["expiry-interval"]) || x('Invalid expiry-interval value: "'.concat(E["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
						var Re = (N = E["refresh-expired"]) !== null && N !== void 0 ? N : or.Auto;
						Tn(Re) ? E["refresh-expired"] = Re : x('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(String(Re), '" ').concat(typeof Re == "undefined" ? "undefined" : W(Re)), 3603);
						var Ae = (F = E["refresh-timeout"]) !== null && F !== void 0 ? F : Ar.Auto;
						xn(Ae) ? E["refresh-timeout"] = Ae : x('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(String(Ae), '" ').concat(typeof Ae == "undefined" ? "undefined" : W(Ae)), 3603), _n(rr) || x('Invalid input for optional parameter "action", got "'.concat(rr, '"'), 3604), bn(Ge) || x('Invalid input for optional parameter "cData", got "'.concat(Ge, '"'), 3605);
						var ce = document.createElement("iframe"),
							tr = document.createElement("div"),
							Xe = document.createElement("div"),
							$r = Xe.attachShadow({
								mode: "closed"
							}),
							nr = M(),
							Y = Q(nr),
							Oe = [],
							Er = E.execution === Or.Render;
						Er && Oe.push(Cr.Execute);
						var he = vr(h.gcs);
						Wr(he, y), h.lastWidgetIdx++;
						var Tr = {},
							xr = E._tcsrp,
							Ce = typeof xr == "string" && xr.length > 0 ? xr : void 0,
							Ue = sr(h),
							Un = Ce != null ? Ce : Ue[Ne],
							Dt;
						Ce !== void 0 ? Dt = Fr : Ue[Ne] !== void 0 && (Dt = Dr);
						var qi = Ce === void 0 ? Un !== void 0 && Ue[Qe] === !0 : !0,
							Vn = Ir(ke({
								action: rr,
								assetCtxCallback: E._acCb,
								autoFeedbackSent: !1,
								cData: Ge,
								cbAfterInteractive: Nt,
								cbBeforeInteractive: br,
								cbError: Pt,
								cbExpired: Mt,
								cbSuccess: Xr,
								cbTimeout: Yr,
								cbUnsupported: Qr,
								chlPageData: _r,
								feedbackOpen: !1,
								gcs: he,
								idx: h.lastWidgetIdx,
								isComplete: !1,
								isExecuted: Er,
								isExecuting: Er,
								isExpired: !1,
								isFailed: !1,
								isInitialized: !1,
								isOverrunning: !1,
								isResetting: !1,
								isStale: !1,
								msgQueue: Oe,
								params: E,
								rcV: Le,
								renderSource: v,
								responseElementsBuilt: !1,
								shadow: $r,
								watchcat: {
									lastAckedSeq: 0,
									missingWidgetWarning: !1,
									overrunBeginSeq: 0,
									seq: 0
								}
							}, Tr), {
								iframeHost: Xe,
								widgetInitStartTimeTsMs: 0,
								widgetParamsStartTimeTsMs: 0,
								widgetRenderEndTimeTsMs: 0,
								widgetRenderStartTimeTsMs: We,
								wrapper: tr
							}),
							Sr = fr(Vn);
						Sr[je] = Un, Sr[dr] = Dt, Sr[Ke] = qi, h.widgetMap.set(nr, Vn), fn(h);
						var be = h.widgetMap.get(nr);
						be === void 0 && x("Turnstile Initialization Error", 3606), be.chlPageData !== void 0 && be.chlPageData !== "" && Pn(), ce.style.border = "none", ce.style.overflow = "hidden";
						var Bn = un(nr, _e, E, Le, !1, "b", ae.New, h.scriptUrlParsed, Rn(be), Sr[Ke] ? Sr[je] : void 0);
						be.iframeOrigin = pr(Bn), ce.setAttribute("src", Bn), Ni(ce, be);
						var qn = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
						return G((z = (me = document.featurePolicy) === null || me === void 0 || (q = me.features) === null || q === void 0 ? void 0 : q.call(me)) !== null && z !== void 0 ? z : [], Ft) && qn.push(Ft), ce.setAttribute("allow", qn.join("; ")), ce.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), ce.id = Y, ce.title = "Widget containing a Cloudflare security challenge", $r.appendChild(ce), Cn(ce, be), ht(be), Hi(be, Y), le && K(le.widgetId, le.widget), se.appendChild(tr), be.widgetRenderEndTimeTsMs = $(), Y
					}
				}

				function Se(c, i) {
					return xe(c, i, "explicit", Pe(qa, h))
				}

				function Ze() {
					var c = [Zn, ea];
					h.isRecaptchaCompatibilityMode && c.push(ra);
					var i = Pe(Ya, h);
					document.querySelectorAll(c.join(", ")).forEach(function(v) {
						xe(v, void 0, "implicit", i)
					})
				}

				function He() {
					var c, i = -1,
						v = !0,
						y = !1,
						p = void 0;
					try {
						for (var o = h.widgetMap[Symbol.iterator](), g; !(v = (g = o.next()).done); v = !0) {
							var L = ar(g.value, 2),
								b = L[0],
								N = L[1];
							i < N.idx && (c = b, i = N.idx)
						}
					} catch (F) {
						y = !0, p = F
					} finally {
						try {
							!v && o.return != null && o.return()
						} finally {
							if (y) throw p
						}
					}
					return i === -1 && x("Could not find widget", 43778), c
				}
				var er = {},
					Bi = {
						showFeedback: function(i) {
							var v = C(i);
							if (v !== null) {
								var y = Q(v),
									p = h.widgetMap.get(v);
								p !== void 0 && sn(y, p, Va.Custom, h.scriptUrlParsed)
							}
						}
					},
					Wn = Ir(ke({}, er), {
						_private: Bi,
						execute: function(i, v) {
							var y = Pe(Ja, h),
								p = !1,
								o = C(i);
							if (o === null) {
								var g;
								v === void 0 && x("Please provide 2 parameters to execute: container and parameters", 43521);
								var L = xe(i, v, "explicit", y);
								p = !0, L == null && x("Failed to render widget", 43522), o = (g = Nr(L)) !== null && g !== void 0 ? g : C(i), o === null && x("Failed to render widget", 43522)
							}
							var b = h.widgetMap.get(o);
							if (b !== void 0) {
								var N = p ? !1 : Ur(b, y);
								k(b, v);
								var F = Q(o);
								if (b.isExecuting) {
									R("Call to execute() on a widget that is already executing (".concat(F, "), consider using reset() before execute().")), N && mt(o, b);
									return
								}
								if (b.isExecuting = !0, b.response !== void 0 && b.response !== "") {
									var z;
									b.isExecuting = !1, R("Call to execute() on a widget that was already executed (".concat(F, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), N && mt(o, b), (z = b.cbSuccess) === null || z === void 0 || z.call(b, b.response, !1);
									return
								}
								b.isExpired && R("Call to execute on a expired-widget (".concat(F, "), consider using reset() before.")), b.isStale && (H(ae.StaleExecute, F), b.isExecuting = !0), (b.isResetting || !b.isInitialized) && b.msgQueue.push(Cr.Execute), b.isExecuted = !0;
								var q = Fe(b, F);
								if (q || (b.isExecuting = !1, x("Widget ".concat(F, " to execute was not found"), 43522)), b.isResetting || !b.isInitialized) return;
								if (b.msgQueue.length > 0) {
									j(b, o, q), b.params.appearance === oe.Execute && xt(q, b);
									return
								}
								b.params.appearance === oe.Execute && xt(q, b), U(b) && ve(q, {
									cs: Vr(b),
									event: "execute",
									source: J,
									widgetId: o
								}, b.iframeOrigin)
							}
						},
						getResponse: function(i) {
							var v = Pe(za, h);
							if (typeof i == "undefined") {
								var y = He();
								if (y !== void 0) {
									var p = h.widgetMap.get(y);
									return p !== void 0 && ze(y, p, v), (p == null ? void 0 : p.isExpired) === !0 && R("Call to getResponse on a widget that expired, consider refreshing the widget."), p == null ? void 0 : p.response
								}
								x("Could not find a widget", 43794)
							}
							var o = C(i);
							o === null && x("Could not find widget for provided container", 43778);
							var g = h.widgetMap.get(o);
							return g && ze(o, g, v), g == null ? void 0 : g.response
						},
						isExpired: function(i) {
							var v, y = Pe(Ga, h);
							if (typeof i == "undefined") {
								var p = He();
								if (p !== void 0) {
									var o, g = h.widgetMap.get(p);
									return g !== void 0 && ze(p, g, y), (o = g == null ? void 0 : g.isExpired) !== null && o !== void 0 ? o : !1
								}
								x("Could not find a widget", 43794)
							}
							var L = C(i);
							L === null && x("Could not find widget for provided container", 43778);
							var b = h.widgetMap.get(L);
							return b && ze(L, b, y), (v = b == null ? void 0 : b.isExpired) !== null && v !== void 0 ? v : !1
						},
						ready: function(i) {
							h.scriptWasLoadedAsync && (R("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), x("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof i != "function" && x('turnstile.ready() expected a "function" argument, got "'.concat(typeof i == "undefined" ? "undefined" : W(i), '"'), 3841);
							var v = Pe(Xa, h);
							Wr(h.gcs, v);
							var y = !0,
								p = !1,
								o = void 0;
							try {
								for (var g = h.widgetMap[Symbol.iterator](), L; !(y = (L = g.next()).done); y = !0) {
									var b = ar(L.value, 2),
										N = b[0],
										F = b[1];
									ze(N, F, v)
								}
							} catch (z) {
								p = !0, o = z
							} finally {
								try {
									!y && g.return != null && g.return()
								} finally {
									if (p) throw o
								}
							}
							if (h.isReady) {
								i();
								return
							}
							Hn.push(i)
						},
						remove: X,
						render: Se,
						reset: ie
					});
				return Object.defineProperty(Wn, Pi, {
					configurable: !0,
					enumerable: !1,
					value: {
						clearPendingApiJsReloadRequest: function() {
							Dn()
						},
						rearmTimedUpgrade: function() {
							Fn()
						},
						rejectPendingApiJsReloadRequest: function() {
							Fi()
						},
						reloadAfterUpgrade: function() {
							B()
						}
					}
				}), {
					runImplicitRender: Ze,
					turnstile: Wn
				}
			})(),
			wu = function() {
				Ui.runImplicitRender()
			},
			It = Ui.turnstile;

		function Ru(e) {
			var r, t, n = e.getAttribute("data-sitekey"),
				a = {
					sitekey: n
				},
				u = e.getAttribute("data-tabindex");
			u !== null && u !== "" && (a.tabindex = Math.trunc(Number(u)));
			var l = e.getAttribute("data-theme");
			l !== null && l !== "" && (mn(l) ? a.theme = l : R('Unknown data-theme value: "'.concat(l, '".')));
			var d = e.getAttribute("data-size");
			if (d !== null && d !== "" && (En(d) ? a.size = d : R('Unknown data-size value: "'.concat(d, '".'))), 0) var f;
			var s = e.getAttribute("data-action");
			typeof s == "string" && (a.action = s);
			var m = e.getAttribute("data-cdata");
			typeof m == "string" && (a.cData = m);
			var T = e.getAttribute("data-retry");
			T !== null && T !== "" && (gn(T) ? a.retry = T : R('Invalid data-retry value: "'.concat(T, ", expected either 'never' or 'auto'\".")));
			var S = e.getAttribute("data-retry-interval");
			if (S !== null && S !== "") {
				var O = Math.trunc(Number(S));
				hn(O) ? a["retry-interval"] = O : R('Invalid data-retry-interval value: "'.concat(S, ', expected an integer value > 0 and < 900000".'))
			}
			var _ = e.getAttribute("data-expiry-interval");
			if (_ !== null && _ !== "") {
				var A = Math.trunc(Number(_));
				yn(A) ? a["expiry-interval"] = A : R('Invalid data-expiry-interval value: "'.concat(A, ', expected an integer value > 0 and < 360000".'))
			}
			var P = e.getAttribute("data-refresh-expired");
			P !== null && P !== "" && (Tn(P) ? a["refresh-expired"] = P : R('Unknown data-refresh-expired value: "'.concat(P, ", expected either: 'never', 'auto' or 'manual'.")));
			var I = e.getAttribute("data-refresh-timeout");
			I !== null && I !== "" && (xn(I) ? a["refresh-timeout"] = I : R('Unknown data-refresh-timeout value: "'.concat(I, ", expected either: 'never', 'auto' or 'manual'.")));
			var M = e.getAttribute("data-language");
			M !== null && M !== "" && (Sn(M) ? a.language = M : R('Invalid data-language value: "'.concat(M, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

			function C(B) {
				var xe = e.getAttribute(B);
				if (!(xe === null || xe === "")) {
					var Se = Nn(xe);
					return Se === void 0 ? void 0 : function() {
						for (var Ze = arguments.length, He = new Array(Ze), er = 0; er < Ze; er++) He[er] = arguments[er];
						return Se.apply(void 0, te(He))
					}
				}
			}
			var j = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
			j.forEach(function(B) {
				Object.assign(a, re({}, B, C("data-".concat(B))))
			}), a["feedback-enabled"] = (r = St(e.getAttribute("data-feedback-enabled"), !0, function(B) {
				return 'Invalid data-feedback-enabled value: "'.concat(B, "\", expected either: 'true' or 'false'. Value is ignored.")
			})) !== null && r !== void 0 ? r : !0, a["response-field"] = (t = St(e.getAttribute("data-response-field"), !0, function(B) {
				return 'Invalid data-response-field value: "'.concat(B, "\", expected either: 'true' or 'false'. Value is ignored.")
			})) !== null && t !== void 0 ? t : !0;
			var U = e.getAttribute("data-response-field-name");
			U !== null && U !== "" && (a["response-field-name"] = U);
			var k = e.getAttribute("data-execution");
			k !== null && k !== "" && (wn(k) ? a.execution = k : R('Unknown data-execution value: "'.concat(k, ", expected either: 'render' or 'execute'.")));
			var D = e.getAttribute("data-appearance");
			D !== null && D !== "" && (In(D) ? a.appearance = D : R('Unknown data-appearance value: "'.concat(D, ", expected either: 'always', 'execute', or 'interaction-only'.")));
			var ie = e.getAttribute("data-offlabel-show-privacy"),
				H = St(ie, void 0, function(B) {
					return 'Invalid data-offlabel-show-privacy value: "'.concat(B, '", expected "true" or "false".')
				});
			typeof H == "boolean" && (a["offlabel-show-privacy"] = H);
			var K = e.getAttribute("data-offlabel-show-help"),
				X = St(K, void 0, function(B) {
					return 'Invalid data-offlabel-show-help value: "'.concat(B, '", expected "true" or "false".')
				});
			return typeof X == "boolean" && (a["offlabel-show-help"] = X), a
		}

		function Vi() {
			if (Pn(), Di()) return !1;
			var e = Ti(window.turnstile, h);
			return e ? !0 : (Fn(), !1)
		}
		$e = !1, V = Ha(), h.scriptWasLoadedAsync = (wt = V == null ? void 0 : V.loadedAsync) !== null && wt !== void 0 ? wt : !1, h.scriptUrl = (Rt = V == null ? void 0 : V.src) !== null && Rt !== void 0 ? Rt : "undefined", h.scriptUrlParsed = V == null ? void 0 : V.url, du(), (V == null ? void 0 : V.params) !== void 0 && V.params !== null && (gr = V.params.get("compat"), (gr == null ? void 0 : gr.toLowerCase()) === "recaptcha" ? typeof window.grecaptcha == "undefined" ? (R("Compatibility layer enabled."), h.isRecaptchaCompatibilityMode = !0, window.grecaptcha = It) : R("grecaptcha is already defined. The compatibility layer will not be enabled.") : gr !== null && R('Unknown value for api.js?compat: "'.concat(gr, '", ignoring.')), V.params.forEach(function(e, r) {
			G(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], r) || R('Unknown parameter passed to api.js: "?'.concat(r, '=...", ignoring.'))
		}), $e = V.params.get("_upgrade") === "true", De = V.params.get("onload"), De !== null && De !== "" && !$e && setTimeout(function() {
			var e = Nn(De);
			e === void 0 ? (R("Unable to find onload callback '".concat(De, "' immediately after loading, expected 'function', got '").concat(W(Mn(De)), "'.")), setTimeout(function() {
				var r = Nn(De);
				r === void 0 ? R("Unable to find onload callback '".concat(De, "' after 1 second, expected 'function', got '").concat(W(Mn(De)), "'.")) : r()
			}, 1e3)) : e()
		}, 0)), hr = window.turnstile, jr = "turnstile" in window && !cu(hr) && !w(hr, Element) && !w(hr, HTMLCollection), Te = jr ? ki(hr) : void 0, At = jr && $e ? xi(hr, h, function() {
			var e;
			window.turnstile = It, (e = ki(It)) === null || e === void 0 || e.reloadAfterUpgrade(), fn(h)
		}) : !1, At && (Te == null || Te.clearPendingApiJsReloadRequest()), jr && $e && !At ? (R("Turnstile upgrade state was missing. Keeping the existing Turnstile instance."), Te == null || Te.rejectPendingApiJsReloadRequest(), Te == null || Te.rearmTimedUpgrade()) : jr && !$e ? R("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (At || (window.turnstile = It), $e || ((V == null || (Ot = V.params) === null || Ot === void 0 ? void 0 : Ot.get("render")) !== "explicit" && Hn.push(wu), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Mi, 0) : window.addEventListener("DOMContentLoaded", Mi)), Fn());
		var wt, Rt, $e, V, gr, De, hr, jr, Te, At, Ot;
	})();
})(void 0, void 0);