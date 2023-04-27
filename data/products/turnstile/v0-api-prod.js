"use strict";
(() => {
	function I(e, l) {
		return e.indexOf(l) !== -1
	}

	function D(e) {
		return I(["auto", "dark", "light"], e)
	}

	function H(e) {
		return I(["auto", "never"], e)
	}

	function z(e) {
		return e > 0 && e < 9e5
	}
	var he = /^[0-9A-Za-z_-]{3,100}$/;

	function ce(e) {
		return he.test(e)
	}
	var ve = /^[a-z0-9_-]{0,32}$/i;

	function de(e) {
		return e === void 0 ? !0 : typeof e == "string" && ve.test(e)
	}
	var we = /^[a-z0-9_\-=]{0,255}$/i;

	function ue(e) {
		return e === void 0 ? !0 : typeof e == "string" && we.test(e)
	}

	function V(e) {
		return I(["normal", "compact", "invisible"], e)
	}

	function F(e) {
		return I(["auto", "manual", "never"], e)
	}
	var be = /^[a-z]{2}(-[A-Z]{2})?$/;

	function B(e) {
		return e === "auto" || be.test(e)
	}

	function q(e) {
		return I(["always", "execute", "interaction-only"], e)
	}

	function Y(e) {
		return I(["render", "execute"], e)
	}
	var xe = ".cf-turnstile",
		Te = ".cf-challenge",
		Ae = ".g-recaptcha",
		Re = "cf_challenge_response",
		$e = "cf-turnstile-response",
		Ce = "g-recaptcha-response",
		ke = 8e3,
		W = !1,
		me = !1;

	function c(e) {
		let l = `[Cloudflare Turnstile] ${e}.`;
		throw console.error(l), new Error(l)
	}

	function g(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function j(e) {
		Ie(e, "")
	}

	function Ee() {
		let e = [xe, Te];
		W && e.push(Ae), document.querySelectorAll(e.join(", ")).forEach(l => Z.render(l))
	}
	var Q = [],
		ye = !1;

	function fe() {
		ye = !0;
		for (let e of Q) e()
	}
	var O = "cf-chl-widget-";

	function pe(e) {
		return e.startsWith(O) ? e.substring(O.length) : null
	}

	function k(e) {
		return `${O}${e}`
	}

	function Ie(e, l) {
		let o = document.getElementById(`${e}_response`);
		o !== null && o instanceof HTMLInputElement && (o.value = l);
		let p = document.getElementById(`${e}_legacy_response`);
		if (p !== null && p instanceof HTMLInputElement && (p.value = l), W) {
			let u = document.getElementById(`${e}_g_response`);
			u !== null && u instanceof HTMLInputElement && (u.value = l)
		}
	}

	function G(e, l) {
		var u;
		let o = (u = l.params.size) != null ? u : "normal",
			p = l.mode;
		switch (p) {
			case "non-interactive":
			case "managed":
				switch (o) {
					case "compact":
						e.style.width = "130px", e.style.height = "120px";
						break;
					case "invisible":
						c(`Invalid value for parameter "size", expected "${"compact"}" or "${"normal"}", got "${o}"`);
					case "normal":
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case "invisible":
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute";
				break;
			default:
				c(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${p}"`);
				return
		}
	}

	function X(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function ge(e, l, o, p) {
		return `https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/if/ov2/av0/rcv${p}/${e}/${l}/${o.theme}/${o.size}`
	}

	function Le(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Me(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Ne() {
		let e = window;
		for (; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Z = function() {
		let e = new Map,
			l = 0,
			o = function(a) {
				var n, f, E;
				let i = a.data;
				if (i.source !== "cloudflare-challenge") return;
				if (!Le(a)) {
					c("Ignored message from wrong origin: " + a.origin);
					return
				}
				if (!i.widgetId || !e.has(i.widgetId)) return;
				let r = k(i.widgetId),
					t = e.get(i.widgetId);
				if (!(!r || !t)) switch (i.event) {
					case "init": {
						let s = document.getElementById(r);
						if (!s) {
							c(`Cannot initialize Widget, Element not found (#${r}).`);
							return
						}
						t.mode = i.mode, t.params.appearance === "always" ? G(s, t) : X(s), s.style.display = "";
						break
					}
					case "reject": {
						if (!document.getElementById(r)) {
							c(`Cannot initialize Widget, Element not found (#${r}).`);
							return
						}
						if (i.reason === "outdated_browser") {
							let d = t.cbUnsupported;
							d && d()
						}
						break
					}
					case "complete": {
						t.rcV = "0/0", t.response = i.token, Ie(r, i.token);
						let s = t.cbSuccess;
						s && s(i.token);
						break
					}
					case "fail": {
						if (t.params.retry === "auto") {
							t.msgQueue.push("execute");
							let b = 1e3 * 2 + ((n = t.params["retry-interval"]) != null ? n : 0);
							window.setTimeout(function() {
								v(r)
							}, b)
						}
						i.rcV && (t.rcV = i.rcV), j(r);
						let s = t.cbError,
							d = (f = i.code) != null ? f : "undefined_error";
						s ? s(d) || g(d) : c(d);
						break
					}
					case "tokenExpired": {
						let s = i.token,
							d = t.cbExpired;
						d && d(s), t.params["refresh-expired"] === "auto" && !t.isResetting && v(r);
						break
					}
					case "interactiveTimeout": {
						t.rcV = "0/0", j(r);
						let s = t.cbTimeout;
						s && s();
						break
					}
					case "refreshRequest": {
						t.rcV = "0/0", v(i.widgetId);
						break
					}
					case "interactiveBegin": {
						let s = document.getElementById(r);
						if (!s) {
							c(`Cannot layout widget, Element not found (#${r}).`);
							return
						}
						let d = t.cbBeforeInteractive;
						d && d(), t.params.appearance === "interaction-only" && G(s, t);
						break
					}
					case "interactiveEnd": {
						let s = document.getElementById(r);
						if (!s) {
							c(`Cannot unlayout widget, Element not found (#${r}).`);
							return
						}
						t.params.appearance === "interaction-only" && X(s);
						let d = t.cbAfterInteractive;
						d && d();
						break
					}
					case "requestExtraParams": {
						let s = document.querySelector(`#${r}`);
						if (!s) {
							c(`Received state for an unknown widget: ${i.widgetId}`);
							return
						}
						t.isResetting = !1, (E = s.contentWindow) == null || E.postMessage({
							source: "cloudflare-challenge",
							widgetId: i.widgetId,
							event: "extraParams",
							action: t.action,
							cData: t.cData,
							cPageData: t.cPageData,
							rcV: t.rcV,
							url: Ne(),
							retry: t.params.retry,
							"retry-interval": t.params["retry-interval"],
							"refresh-expired": t.params["refresh-expired"],
							language: t.params.language,
							execution: t.params.execution,
							appearance: t.params.appearance
						}, "*"), h(t, i.widgetId, s), t.isInitialized = !0;
						break
					}
				}
			};
		window.addEventListener("message", o);

		function p() {
			let a;
			do {
				a = "";
				let i = "abcdefghijklmnopqrstuvwxyz0123456789",
					r = i.length;
				for (let t = 0; t < 5; t++) a += i.charAt(Math.floor(Math.random() * r))
			} while (e.has(a));
			return a
		}

		function u(a) {
			if (typeof a == "string") {
				if (a = pe(a), !a) return null;
				if (e.has(a)) return a;
				try {
					let i = document.querySelector(a);
					return i ? u(i) : null
				} catch (i) {
					return null
				}
			}
			if (a instanceof HTMLElement) {
				let i = a.querySelector("iframe");
				return i ? pe(i.id) : null
			}
			return a || e.size === 0 ? null : e.keys().next().value
		}

		function h(a, i, r) {
			var t;
			for (; a.msgQueue.length;) {
				let n = a.msgQueue.pop();
				(t = r.contentWindow) == null || t.postMessage({
					source: "cloudflare-challenge",
					widgetId: i,
					event: n
				}, "*")
			}
		}

		function v(a) {
			var t;
			let i = u(a);
			if (!i) {
				c("Nothing to reset found for provided container");
				return
			}
			let r = e.get(i);
			if (r) {
				r.isResetting = !0, r.response = void 0, r.mode = void 0, r.msgQueue = [], r.isInitialized = !1, r.params.execution === "render" && r.msgQueue.push("execute");
				let n = k(i),
					f = document.querySelector(`#${n}`);
				if (!n || !f) {
					c(`Widget ${i} to reset was not found.`);
					return
				}
				if (r.params.appearance === "interaction-only" && X(f), r.params.sitekey === null) throw new Error("Unexpected Error: Sitekey is null");
				f.src = ge(i, r.params.sitekey, r.params, (t = r.rcV) != null ? t : "0/0"), j(n)
			} else {
				c(`Widget ${i} to reset was not found.`);
				return
			}
		}

		function $(a) {
			let i = u(a);
			if (!i || !e.has(i)) {
				g("Nothing to remove found for the provided container");
				return
			}
			let r = k(i),
				t = [`iframe#${r}`, `input#${r}_response`, `input#${r}_legacy_response`, `input#${r}_g_response`];
			document.querySelectorAll(t.join(", ")).forEach(n => n.remove()), e.delete(i)
		}

		function w(a, i) {
			var K, ee, te, ne, re, ie, ae, oe, se, le;
			let r;
			if (typeof a == "string") try {
					let m = document.querySelector(a);
					if (!m) {
						c(`Unable to find a container for "${a}"`);
						return
					}
					r = m
				} catch (m) {
					c(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${a}"`);
					return
				} else if (a instanceof HTMLElement) r = a;
				else {
					c('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
					return
				} let t = Se(r);
			if (!t) return;
			let n = Object.assign(t, i),
				{
					action: f,
					cData: E,
					cPageData: s
				} = n,
				d = n.sitekey;
			n.theme = (K = n.theme) != null ? K : "auto", n.retry = (ee = n.retry) != null ? ee : "auto", n.execution = (te = n.execution) != null ? te : "render", n.appearance = (ne = n.appearance) != null ? ne : "always", n["retry-interval"] = (re = n["retry-interval"]) != null ? re : ke, n.size = (ie = n.size) != null ? ie : "normal";
			let b = n.callback,
				U = n["expired-callback"],
				L = n["timeout-callback"],
				T = n["after-interactive-callback"],
				A = n["before-interactive-callback"],
				M = n["error-callback"],
				C = n["unsupported-callback"];
			if (typeof d != "string") {
				c(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof d}"`);
				return
			}
			if (!ce(d)) {
				c(`Invalid input for parameter "sitekey", got "${d}"`);
				return
			}
			if (!V(n.size)) {
				c(`Invalid type for parameter "size", expected normal|compact, got "${n.size}" ${typeof n.size}`);
				return
			}
			if (!D(n.theme)) {
				c(`Invalid type for parameter "theme", expected dark|light|auto, got "${n.theme}" ${typeof n.theme}`);
				return
			}
			if (!H(n.retry)) {
				c(`Invalid type for parameter "retry", expected never|auto, got "${n.retry}" ${typeof n.retry}`);
				return
			}
			if (n.language || (n.language = "auto"), !B(n.language)) {
				c(`Invalid data-language value: "${n.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`);
				return
			}
			if (!q(n.appearance)) {
				c(`Unknown data-appearance value: "${n.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`);
				return
			}
			if (!Y(n.execution)) {
				c(`Unknown data-execution value: "${n.execution}, expected either: 'render' or 'execute'.`);
				return
			}
			if (!z(n["retry-interval"])) {
				g(`Invalid data-retry-interval value: "${n["retry-interval"]}, expected an integer value > 0 and < 900000"`);
				return
			}
			let N = (ae = n["refresh-expired"]) != null ? ae : "auto";
			if (F(N)) n["refresh-expired"] = N;
			else {
				c(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${N}" ${typeof N}`);
				return
			}
			let P = r.getElementsByTagName("iframe")[0];
			P != null && P.id.startsWith(O) && $(r);
			let y = document.createElement("iframe");
			if (!de(f)) {
				c(`Invalid input for optional parameter "action", got "${f}"`);
				return
			}
			if (!ue(E)) {
				c(`Invalid input for optional parameter "cData", got "${E}"`);
				return
			}
			let S = p(),
				R = k(S);
			if (!S || !R) return;
			let J = [];
			if (n.execution === "render" && J.push("execute"), l++, e.set(S, {
					idx: l,
					action: f,
					cData: E,
					cPageData: s,
					cbSuccess: b,
					cbError: M,
					cbExpired: U,
					cbTimeout: L,
					cbUnsupported: C,
					cbAfterInteractive: T,
					cbBeforeInteractive: A,
					params: n,
					isResetting: !1,
					isInitialized: !1,
					msgQueue: J,
					rcV: "0/0"
				}), y.style.display = "none", y.style.border = "none", y.style.overflow = "hidden", y.setAttribute("src", ge(S, d, n, "0/0")), y.setAttribute("allow", "cross-origin-isolated"), y.id = R, y.tabIndex = (oe = n.tabindex) != null ? oe : 0, y.title = "Widget containing a Cloudflare security challenge", r.appendChild(y), (se = n["response-field"]) != null ? se : !0) {
				let m = document.createElement("input");
				if (m.type = "hidden", m.name = (le = n["response-field-name"]) != null ? le : $e, m.id = `${R}_response`, r.appendChild(m), typeof n["response-field-name"] != "string" && Me(d)) {
					let _ = document.createElement("input");
					_.type = "hidden", _.name = Re, _.id = `${R}_legacy_response`, r.appendChild(_)
				}
			}
			if (W) {
				let m = document.createElement("input");
				m.type = "hidden", m.name = Ce, m.id = `${R}_g_response`, r.appendChild(m)
			}
			return R
		}
		return {
			ready(a) {
				if (me) throw g("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), new Error("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().");
				if (typeof a != "function" && c(`turnstile.ready() expected a "function" argument, got "${typeof a}"`), a(), typeof a != "function" && c('Invalid value for parameter "callback", you must provide a callback function as argument to ready()'), ye) {
					a();
					return
				}
				Q.push(a)
			},
			implicitRender: Ee,
			execute(a, i) {
				let r = u(a);
				if (!r) {
					if (i === void 0) {
						c("Please provide 2 parameters to execute: container and parameters");
						return
					}
					let n = w(a, i);
					if (!n) {
						c("Failed to render widget");
						return
					}
					r = n
				}
				let t = e.get(r);
				if (t) {
					if (t.response) {
						t.cbSuccess && t.cbSuccess(t.response);
						return
					}
					t.msgQueue.push("execute");
					let n = k(r),
						f = document.querySelector(`#${n}`);
					if (!f) {
						c(`Widget ${n} to execute was not found`);
						return
					}
					t.isInitialized && h(t, r, f), t.params.appearance === "execute" && G(f, t)
				}
			},
			render: w,
			reset: v,
			remove: $,
			getResponse(a) {
				var r, t;
				if (typeof a == "undefined") {
					let n, f = -1;
					for (let [E, s] of e) f < s.idx && (n = E, f = s.idx);
					if (f === -1) {
						c("Could not find widget");
						return
					}
					return (r = e.get(n)) == null ? void 0 : r.response
				}
				let i = u(a);
				if (!i) {
					c("Could not find widget for provided container");
					return
				}
				return (t = e.get(i)) == null ? void 0 : t.response
			}
		}
	}();

	function Se(e) {
		var M;
		let o = {
				sitekey: e.getAttribute("data-sitekey")
			},
			p = e.getAttribute("data-tabindex");
		p && (o.tabindex = parseInt(p, 10));
		let u = e.getAttribute("data-theme");
		u && (D(u) ? o.theme = u : g(`Unknown data-theme value: "${u}"`));
		let h = e.getAttribute("data-size");
		h && (V(h) ? o.size = h : g(`Unknown data-size value: "${h}"`));
		let v = e.getAttribute("data-action");
		typeof v == "string" && (o.action = v);
		let $ = e.getAttribute("data-cdata");
		typeof $ == "string" && (o.cData = $);
		let w = e.getAttribute("data-retry");
		w && (H(w) ? o.retry = w : g(`Invalid data-retry value: "${w}, expected either 'never' or 'auto'"`));
		let a = e.getAttribute("data-retry-interval");
		if (a) {
			let C = parseInt(a, 10);
			z(C) ? o["retry-interval"] = C : g(`Invalid data-retry-interval value: "${a}, expected an integer value > 0 and < 900000"`)
		}
		let i = e.getAttribute("data-refresh-expired");
		i && (F(i) ? o["refresh-expired"] = i : g(`Unknown data-refresh-expired value: "${i}, expected either: 'never', 'auto' or 'manual'.`));
		let r = e.getAttribute("data-language");
		r && (B(r) ? o.language = r : g(`Invalid data-language value: "${r}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`));
		let t = e.getAttribute("data-error-callback");
		t && window[t] && (o["error-callback"] = window[t]);
		let n = e.getAttribute("data-unsupported-callback");
		n && window[n] && t && window[t] && (o["unsupported-callback"] = window[t]);
		let f = e.getAttribute("data-callback");
		f && window[f] && (o.callback = window[f]);
		let E = e.getAttribute("data-expired-callback");
		E && window[E] && (o["expired-callback"] = window[E]);
		let s = e.getAttribute("data-timeout-callback");
		s && window[s] && (o["timeout-callback"] = window[s]);
		let d = e.getAttribute("data-after-interactive-callback");
		d && window[d] && (o["after-interactive-callback"] = window[d]);
		let b = e.getAttribute("data-before-interactive-callback");
		b && window[b] && (o["before-interactive-callback"] = window[b]);
		let U = (M = e.getAttribute("data-response-field")) != null ? M : "true";
		o["response-field"] = U === "true";
		let L = e.getAttribute("data-response-field-name");
		L && (o["response-field-name"] = L);
		let T = e.getAttribute("data-execution");
		T && (Y(T) ? o.execution = T : g(`Unknown data-execution value: "${T}, expected either: 'render' or 'execute'.`));
		let A = e.getAttribute("data-appearance");
		return A && (q(A) ? o.appearance = A : g(`Unknown data-appearance value: "${A}, expected either: 'always', 'execute', or 'interaction-only'.`)), o
	}

	function _e() {
		let e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			l = document.currentScript;
		if (l instanceof HTMLScriptElement && e.test(l.src)) return l;
		let o = document.querySelectorAll("script");
		for (let p = 0, u; u = o[p]; p++)
			if (u instanceof HTMLScriptElement && e.test(u.src)) return u
	}

	function Oe() {
		let e = _e();
		if (!e) return c("Could not find Turnstile script tag, some features may not be available"), null;
		(e.async || e.defer) && (me = !0);
		let o = e.src.split("?");
		return o.length > 1 ? new URLSearchParams(o[1]) : new URLSearchParams
	}
	var x = Oe();
	if (x) {
		let e = x.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? g("grecaptcha is already defined. The compatibility layer will not be enabled") : (g("Compatibility layer enabled"), W = !0, window.grecaptcha = Z): e !== null && g(`Unknown value for api.js?compat: "${e}", ignoring`), x.forEach(function(o, p) {
			I(["onload", "compat", "render"], p) || g(`Unknown parameter passed to api.js: "?${p}=...", ignoring`)
		});
		let l = x.get("onload");
		l && setTimeout(function() {
			typeof window[l] == "function" ? window[l]() : (g(`Unable to find onload callback '${l}' immediately after loading, expected 'function', got '${typeof window[l]}'`), setTimeout(function() {
				typeof window[l] == "function" ? window[l]() : g(`Unable to find onload callback '${l}' after 1 second, expected 'function', got '${typeof window[l]}'`)
			}, 1e3))
		}, 0)
	}
	var We = "turnstile" in window;
	We ? g("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = Z, (x == null ? void 0 : x.get("render")) !== "explicit" && Q.push(Ee), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(fe, 0) : window.addEventListener("DOMContentLoaded", fe));
})();