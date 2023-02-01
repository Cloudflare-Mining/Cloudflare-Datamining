(() => {
	function I(e, l) {
		return e.indexOf(l) !== -1
	}

	function M(e) {
		return I(["auto", "dark", "light"], e)
	}

	function N(e) {
		return I(["auto", "never"], e)
	}

	function P(e) {
		return e > 0 && e < 9e5
	}
	var se = /^[0-9A-Za-z_-]{3,100}$/;

	function X(e) {
		return se.test(e)
	}
	var le = /^[a-z0-9_-]{0,32}$/i;

	function Z(e) {
		return le.test(e)
	}
	var de = /^[a-z0-9_-]{0,255}$/i;

	function J(e) {
		return de.test(e)
	}

	function O(e) {
		return I(["normal", "compact", "invisible"], e)
	}

	function W(e) {
		return I(["auto", "manual", "never"], e)
	}
	var ce = /^[a-z]{2}(-[A-Z]{2})?$/;

	function D(e) {
		return e === "auto" || ce.test(e)
	}
	var ue = ".cf-turnstile",
		ge = ".cf-challenge",
		fe = ".g-recaptcha",
		pe = "cf_challenge_response",
		me = "cf-turnstile-response",
		he = "g-recaptcha-response",
		ye = 8e3,
		_ = !1,
		ee = !1;

	function d(e) {
		let l = `[Cloudflare Turnstile] ${e}.`;
		throw console.error(l), new Error(l)
	}

	function g(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function Ee(e) {
		d(`Failed with code: ${e}`)
	}

	function F(e) {
		ie(e, "")
	}

	function te() {
		let e = [ue, ge];
		_ && e.push(fe);
		let l = document.querySelectorAll(e.join(", "));
		for (let o = 0; o < l.length; o++) T.render(l[o])
	}
	var re = [],
		ne = !1;

	function K() {
		ne = !0;
		for (let e of re) e();
		te()
	}
	var R = "cf-chl-widget-";

	function Q(e) {
		return e.startsWith(R) ? e.substring(R.length) : null
	}

	function k(e) {
		return `${R}${e}`
	}

	function ie(e, l) {
		let o = document.getElementById(`${e}_response`);
		o !== null && (o.value = l);
		let u = document.getElementById(`${e}_legacy_response`);
		if (u !== null && (u.value = l), _) {
			let f = document.getElementById(`${e}_g_response`);
			f !== null && (f.value = l)
		}
	}

	function Ie(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function ve(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function be() {
		let e = window;
		for (; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e.location.href
	}
	var T = function() {
		let e = new Map,
			l = 0,
			o = function(r) {
				var t;
				let i = r.data;
				if (i.source !== "cloudflare-challenge") return;
				if (!Ie(r)) {
					d("Ignored message from wrong origin: " + r.origin);
					return
				}
				if (!i.widgetId || !e.has(i.widgetId)) return;
				let a = k(i.widgetId),
					s = e.get(i.widgetId);
				switch (i.event) {
					case "init": {
						let n = document.getElementById(a);
						if (!n) {
							d(`Cannot initialize Widget, Element not found (#${a}).`);
							return
						}
						let c = i.mode,
							p = (t = s.params.size) != null ? t : "normal";
						switch (c) {
							case "non-interactive":
							case "managed":
								switch (p) {
									case "compact":
										n.style.width = "130px", n.style.height = "120px";
										break;
									case "invisible":
										d(`Invalid value for parameter "size", expected "${"compact"}" or "${"normal"}", got "${p}"`);
									case "normal":
										n.style.width = "300px", n.style.height = "65px";
										break
								}
								break;
							case "invisible":
								n.style.width = "0", n.style.height = "0", n.style.position = "absolute";
								break;
							default:
								d(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${c}"`);
								return
						}
						n.style.display = "";
						break
					}
					case "complete": {
						e.get(i.widgetId).response = i.token, ie(a, i.token);
						let n = s.cbSuccess;
						n && n(i.token);
						break
					}
					case "fail": {
						i.code && Ee(i.code), F(a);
						let n = s.cbError;
						n && n();
						break
					}
					case "tokenExpired": {
						let n = i.token,
							c = s.cbExpired;
						c && c(n), s.params["refresh-expired"] === "auto" && !s.isResetting && h(a);
						break
					}
					case "timeout": {
						F(a);
						let n = s.cbTimeout;
						n && n();
						break
					}
					case "refreshRequest": {
						h(i.widgetId);
						break
					}
					case "requestExtraParams": {
						let n = document.querySelector(`#${a}`);
						s.isResetting = !1, n.contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: i.widgetId,
							event: "extraParams",
							action: s.action,
							cData: s.cData,
							url: be(),
							retry: s.params.retry,
							"retry-interval": s.params["retry-interval"],
							"refresh-expired": s.params["refresh-expired"],
							language: s.params.language
						}, "*");
						break
					}
				}
			};
		window.addEventListener("message", o);

		function u() {
			let r;
			do {
				r = "";
				let i = "abcdefghijklmnopqrstuvwxyz0123456789",
					a = i.length;
				for (let s = 0; s < 5; s++) r += i.charAt(Math.floor(Math.random() * a))
			} while (e.has(r));
			return r
		}

		function f(r) {
			if (typeof r == "string") {
				if (r.startsWith(R) && (r = Q(r)), e.has(r)) return r;
				try {
					let i = document.querySelector(r);
					return i ? f(i) : null
				} catch (i) {
					return null
				}
			}
			if (r instanceof HTMLElement) {
				let i = r.querySelector("iframe");
				return i ? Q(i.id) : null
			}
			return r || e.size === 0 ? null : e.keys().next().value
		}

		function h(r) {
			let i = f(r);
			if (!i) {
				d(`Nothing to reset found for ${r}`);
				return
			}
			let a = e.get(i);
			a && (a.isResetting = !0);
			let s = k(i),
				t = document.querySelector(`#${s}`);
			t.src += "", F(s)
		}

		function v(r) {
			let i = f(r);
			if (!i || !e.has(i)) {
				g(`Nothing to remove found for ${r}`);
				return
			}
			let a = k(i),
				s = [`iframe#${a}`, `input#${a}_response`, `input#${a}_legacy_response`, `input#${a}_g_response`],
				t = document.querySelectorAll(s.join(", "));
			for (let n = 0; n < t.length; ++n) t[n].remove();
			e.delete(i)
		}
		return {
			implicitRender: te,
			ready(r) {
				if (ee) throw g("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), new Error("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().");
				if (typeof r != "function" && d(`turnstile.ready() expected a "function" argument, got "${typeof r}"`), ne) {
					r();
					return
				}
				re.push(r)
			},
			render(r, i) {
				var z, U, V, B, j, G, q, Y;
				let a;
				if (typeof r == "string") try {
						if (a = document.querySelector(r), !a) {
							d(`Unable to find a container for "${r}"`);
							return
						}
					} catch (m) {
						d(`Invalid type for  "container", expected "selector" or an implementation of "HTMLElement", got "${r}"`);
						return
					} else if (r instanceof HTMLElement) a = r;
					else {
						d('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
						return
					} let s = we(a),
					t = Object.assign(s, i),
					{
						action: n,
						cData: c
					} = t,
					p = t.sitekey;
				t.theme = (z = t.theme) != null ? z : "auto", t.retry = (U = t.retry) != null ? U : "auto", t["retry-interval"] = (V = t["retry-interval"]) != null ? V : ye, t.size = (B = t.size) != null ? B : "normal";
				let b = t.callback,
					w = t["expired-callback"],
					L = t["timeout-callback"],
					$ = t["error-callback"];
				if (typeof p != "string") {
					d(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof p}"`);
					return
				}
				if (!X(p)) {
					d(`Invalid input for parameter "sitekey", got "${p}"`);
					return
				}
				if (!O(t.size)) {
					d(`Invalid type for parameter "size", expected normal|compact, got "${t.size}" ${typeof t.size}`);
					return
				}
				if (!M(t.theme)) {
					d(`Invalid type for parameter "theme", expected dark|light|auto, got "${t.theme}" ${typeof t.theme}`);
					return
				}
				if (!N(t.retry)) {
					d(`Invalid type for parameter "retry", expected never|auto, got "${t.retry}" ${typeof t.retry}`);
					return
				}
				if (t.language || (t.language = "auto"), !D(t.language)) {
					d(`Invalid data-language value: "${t.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and contry code (e.g. en-US)`);
					return
				}
				if (!P(t["retry-interval"])) {
					g(`Invalid data-retry-interval value: "${t["retry-interval"]}, expected an integer value > 0 and < 900000"`);
					return
				}
				let E = (j = t["refresh-expired"]) != null ? j : "auto";
				if (W(E)) t["refresh-expired"] = E;
				else {
					d(`Invalid type for parameter "refressh-expired", expected never|manual|auto, got "${E}" ${typeof E}`);
					return
				}
				let H = a.getElementsByTagName("iframe")[0];
				H && H.id.startsWith(R) && v(a);
				let y = document.createElement("iframe");
				if (n !== void 0 && typeof n != "string") {
					d(`Invalid type for parameter "action", expected "string", got "${typeof n}"`);
					return
				}
				if (n = n === void 0 ? null : n, !Z(n)) {
					d(`Invalid input for parameter "action", got "${n}"`);
					return
				}
				if (c !== void 0 && typeof c != "string") {
					d(`Invalid type for parameter "cData", expected "string", got "${typeof c}"`);
					return
				}
				if (!J(c)) {
					d(`Invalid input for parameter "cData", got "${c}"`);
					return
				}
				c = c === void 0 ? null : c;
				let ae = "https://challenges.cloudflare.com",
					S = u(),
					A = k(S);
				l++, e.set(S, {
					idx: l,
					action: n,
					cData: c,
					cbSuccess: b,
					cbError: $,
					cbExpired: w,
					cbTimeout: L,
					params: t,
					isResetting: !1
				}), y.style.display = "none", y.style.border = "none", y.style.overflow = "hidden";
				let oe = "h/b/";
				if (y.setAttribute("src", `${ae}/cdn-cgi/challenge-platform/${oe}turnstile/if/ov2/av0/${S}/${p}/${t.theme}/${t.size}`), y.id = A, y.tabIndex = (G = t.tabindex) != null ? G : 0, y.title = "Widget containing a Cloudflare security challenge", a.appendChild(y), (q = t["response-field"]) != null ? q : !0) {
					let m = document.createElement("input");
					if (m.type = "hidden", m.name = (Y = t["response-field-name"]) != null ? Y : me, m.id = `${A}_response`, a.appendChild(m), typeof t["response-field-name"] != "string" && ve(p)) {
						let C = document.createElement("input");
						C.type = "hidden", C.name = pe, C.id = `${A}_legacy_response`, a.appendChild(C)
					}
				}
				if (_) {
					let m = document.createElement("input");
					m.type = "hidden", m.name = he, m.id = `${A}_g_response`, a.appendChild(m)
				}
				return A
			},
			reset: h,
			remove: v,
			getResponse(r) {
				if (typeof r == "undefined") {
					let a, s = -1;
					for (let [t, n] of e) s < n.idx && (a = t, s = n.idx);
					if (s === -1) {
						d("No widget found!");
						return
					}
					return e.get(a).response
				}
				let i = f(r);
				if (!i) {
					d(`Could not find widget for getResponse(${r})`);
					return
				}
				return e.get(i).response
			}
		}
	}();

	function we(e) {
		var E;
		let o = {
				sitekey: e.getAttribute("data-sitekey")
			},
			u = e.getAttribute("data-tabindex");
		u && (o.tabindex = parseInt(u, 10));
		let f = e.getAttribute("data-theme");
		f && (M(f) ? o.theme = f : g(`Unknown data-theme value: "${f}"`));
		let h = e.getAttribute("data-size");
		h && (O(h) ? o.size = h : g(`Unknown data-size value: "${h}"`));
		let v = e.getAttribute("data-base-url");
		typeof v == "string" && (o["base-url"] = v);
		let r = e.getAttribute("data-action");
		typeof r == "string" && (o.action = r);
		let i = e.getAttribute("data-cdata");
		typeof i == "string" && (o.cData = i);
		let a = e.getAttribute("data-retry");
		a && (N(a) ? o.retry = a : g(`Unknown data-retry value: "${a}"`));
		let s = +e.getAttribute("data-retry-interval");
		s && (P(s) ? o["retry-interval"] = s : g(`Invalid data-retry-interval value: "${s}, expected an integer value > 0 and < 900000"`));
		let t = e.getAttribute("data-refresh-expired");
		t && (W(t) ? o["refresh-expired"] = t : g(`Unknown data-refresh-expired value: "${t}, expected either: never, auto or manual.`));
		let n = e.getAttribute("data-language");
		n && (D(n) ? o.language = n : g(`Invalid data-language value: "${n}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and contry code (e.g. en-US)`));
		let c = e.getAttribute("data-error-callback");
		c && window[c] && (o["error-callback"] = window[c]);
		let p = e.getAttribute("data-callback");
		p && window[p] && (o.callback = window[p]);
		let b = e.getAttribute("data-expired-callback");
		b && window[b] && (o["expired-callback"] = window[b]);
		let w = e.getAttribute("data-timeout-callback");
		w && window[w] && (o["timeout-callback"] = window[w]);
		let L = (E = e.getAttribute("data-response-field")) != null ? E : "true";
		o["response-field"] = L === "true";
		let $ = e.getAttribute("data-response-field-name");
		return $ && (o["response-field-name"] = $), o
	}

	function Ae() {
		let e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			l = document.currentScript;
		if (e.test(l.src)) return l;
		let o = document.getElementsByTagName("script");
		for (let u = 0; u < o.length; u++) {
			let f = o[u].src;
			if (e.test(f)) return o[u]
		}
	}

	function xe() {
		let e = Ae();
		if (!e) return d("Could not find Turnstile script tag, some features may not be available"), null;
		(e.async || e.defer) && (ee = !0);
		let o = e.src.split("?");
		return o.length > 1 ? new URLSearchParams(o[1]) : new URLSearchParams
	}
	var x = xe();
	if (x) {
		let e = x.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? g("grecaptcha is already defined. The compatibility layer will not be enabled") : (g("Compatibility layer enabled"), _ = !0, window.grecaptcha = T): e !== null && g(`Unknown value for api.js?compat: "${e}", ignoring`), x.forEach(function(o, u) {
			I(["onload", "compat", "render"], u) || g(`Unknown parameter passed to api.js: "?${u}=...", ignoring`)
		});
		let l = x.get("onload");
		l && setTimeout(function() {
			typeof window[l] == "function" && window[l]()
		}, 0)
	}
	var Te = "turnstile" in window;
	Te ? g("Turnstile already has been loaded. Is Turnstile imported multiple times?") : ("Proxy" in window ? window.cfChallengeAPI = new Proxy(T, {
		get(e, l) {
			return g("window.cfChallengeAPI is deprecated, please move to window.turnstile"), e[l]
		}
	}) : window.cfChallengeAPI = T, window.turnstile = T, x.get("render") !== "explicit" && (document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(K, 0) : window.addEventListener("DOMContentLoaded", K)));
})();