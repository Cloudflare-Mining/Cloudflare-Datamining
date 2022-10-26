(() => {
	function b(e, s) {
		return e.indexOf(s) !== -1
	}

	function $(e) {
		return b(["auto", "dark", "light"], e)
	}
	var q = /^[0-9A-Za-z_-]{3,100}$/;

	function D(e) {
		return q.test(e)
	}
	var G = /^[a-z0-9_-]{0,32}$/i;

	function H(e) {
		return G.test(e)
	}
	var X = /^[a-z0-9_-]{0,255}$/i;

	function O(e) {
		return X.test(e)
	}

	function S(e) {
		return b(["normal", "compact", "invisible"], e)
	}
	var Y = ".cf-turnstile",
		J = ".cf-challenge",
		K = ".g-recaptcha",
		Z = "cf_challenge_response",
		Q = "cf-turnstile-response",
		ee = "g-recaptcha-response",
		C = !1;

	function c(e) {
		console.error(`[Cloudflare Turnstile] ${e}.`)
	}

	function E(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function te(e) {
		c(`Failed with code: ${e}`)
	}

	function L(e) {
		B(e, "")
	}
	var x = "cf-chl-widget-";

	function z(e) {
		return e.startsWith(x) ? e.substring(x.length) : null
	}

	function _(e) {
		return `${x}${e}`
	}

	function B(e, s) {
		let i = document.getElementById(`${e}_response`);
		i !== null && (i.value = s);
		let u = document.getElementById(`${e}_legacy_response`);
		if (u !== null && (u.value = s), C) {
			let t = document.getElementById(`${e}_g_response`);
			t !== null && (t.value = s)
		}
	}

	function ne(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function re(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function ie() {
		let e = window;
		for (; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e.location.href
	}
	var y = function() {
		let e = new Map,
			s = function(t) {
				var a;
				let n = t.data;
				if (n.source !== "cloudflare-challenge") return;
				if (!ne(t)) {
					c("Ignored message from wrong origin: " + t.origin);
					return
				}
				if (!n.widgetId || !e.has(n.widgetId)) return;
				let o = _(n.widgetId),
					l = e.get(n.widgetId);
				switch (n.event) {
					case "init": {
						let r = document.getElementById(o);
						if (!r) {
							c(`Cannot initialize Widget, Element not found (#${o}).`);
							return
						}
						let d = n.mode,
							g = (a = l.params.size) != null ? a : "normal";
						switch (d) {
							case "non-interactive":
							case "managed":
								switch (g) {
									case "compact":
										r.style.width = "130px", r.style.height = "120px";
										break;
									case "invisible":
										c(`Invalid value for parameter "size", expected "${"compact"}" or "${"normal"}", got "${g}"`);
									case "normal":
										r.style.width = "300px", r.style.height = "65px";
										break
								}
								break;
							case "invisible":
								r.style.width = "0", r.style.height = "0", r.style.position = "absolute";
								break;
							default:
								c(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${d}"`);
								return
						}
						r.style.display = "";
						break
					}
					case "complete": {
						e.get(n.widgetId).response = n.token, B(o, n.token);
						let r = l.cbSuccess;
						r && r(n.token);
						break
					}
					case "fail": {
						n.code && te(n.code), L(o);
						let r = l.cbError;
						r && r();
						break
					}
					case "tokenExpired": {
						let r = n.token,
							d = l.cbExpired;
						d && d(r);
						break
					}
					case "timeout": {
						L(o);
						let r = l.cbTimeout;
						r && r();
						break
					}
					case "requestExtraParams": {
						document.querySelector(`#${o}`).contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: n.widgetId,
							event: "extraParams",
							action: l.action,
							cData: l.cData,
							url: ie()
						}, "*");
						break
					}
				}
			};
		window.addEventListener("message", s);

		function i() {
			let t;
			do {
				t = "";
				let n = "abcdefghijklmnopqrstuvwxyz0123456789",
					o = n.length;
				for (let l = 0; l < 5; l++) t += n.charAt(Math.floor(Math.random() * o))
			} while (e.has(t));
			return t
		}

		function u(t) {
			if (typeof t == "string") {
				if (t.startsWith(x) && (t = z(t)), e.has(t)) return t;
				try {
					let n = document.querySelector(t);
					return n ? u(n) : null
				} catch (n) {
					return null
				}
			}
			if (t instanceof HTMLElement) {
				let n = t.querySelector("iframe");
				return n ? z(n.id) : null
			}
			return t || e.size === 0 ? null : e.keys().next().value
		}
		return {
			render(t, n) {
				var R, M, P, N, W;
				let o;
				if (typeof t == "string") try {
						if (o = document.querySelector(t), !o) {
							c(`Unable to find a container for "${t}"`);
							return
						}
					} catch (p) {
						c(`Invalid type for  "container", expected "selector" or an implementation of "HTMLElement", got "${t}"`);
						return
					} else if (t instanceof HTMLElement) o = t;
					else {
						c('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
						return
					} let l = oe(o),
					a = Object.assign(l, n),
					{
						action: r,
						cData: d
					} = a,
					g = a.sitekey,
					f = (R = a.theme) != null ? R : "auto",
					h = (M = a.size) != null ? M : "normal",
					A = a.callback,
					v = a["expired-callback"],
					V = a["timeout-callback"],
					U = a["error-callback"];
				if (typeof g != "string") {
					c(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof g}"`);
					return
				}
				if (!D(g)) {
					c(`Invalid input for parameter "sitekey", got "${g}"`);
					return
				}
				if (!S(h)) {
					c(`Invalid type for parameter "size", expected normal|compact, got "${h}" ${typeof h}`);
					return
				}
				if (!$(f)) {
					c(`Invalid type for parameter "theme", expected dark|light|auto, got "${f}" ${typeof f}`);
					return
				}
				let m = document.createElement("iframe");
				if (r !== void 0 && typeof r != "string") {
					c(`Invalid type for parameter "action", expected "string", got "${typeof r}"`);
					return
				}
				if (r = r === void 0 ? null : r, !H(r)) {
					c(`Invalid input for parameter "action", got "${r}"`);
					return
				}
				if (d !== void 0 && typeof d != "string") {
					c(`Invalid type for parameter "cData", expected "string", got "${typeof d}"`);
					return
				}
				if (!O(d)) {
					c(`Invalid input for parameter "cData", got "${d}"`);
					return
				}
				d = d === void 0 ? null : d;
				let j = "https://challenges.cloudflare.com",
					k = i(),
					I = _(k);
				if (e.set(k, {
						action: r,
						cData: d,
						cbSuccess: A,
						cbError: U,
						cbExpired: v,
						cbTimeout: V,
						params: a
					}), m.style.display = "none", m.style.border = "none", m.style.overflow = "hidden", m.setAttribute("src", `${j}/cdn-cgi/challenge-platform/turnstile/if/ov2/av0/${k}/${g}/${f}/${h}`), m.id = I, m.tabIndex = (P = a.tabindex) != null ? P : 0, m.title = "Widget containing a Cloudflare security challenge", o.appendChild(m), (N = a["response-field"]) != null ? N : !0) {
					let p = document.createElement("input");
					if (p.type = "hidden", p.name = (W = a["response-field-name"]) != null ? W : Q, p.id = `${I}_response`, o.appendChild(p), typeof a["response-field-name"] != "string" && re(g)) {
						let T = document.createElement("input");
						T.type = "hidden", T.name = Z, T.id = `${I}_legacy_response`, o.appendChild(T)
					}
				}
				if (C) {
					let p = document.createElement("input");
					p.type = "hidden", p.name = ee, p.id = `${I}_g_response`, o.appendChild(p)
				}
				return I
			},
			reset(t) {
				let n = u(t);
				if (!n) {
					c(`Nothing to reset found for ${t}`);
					return
				}
				let o = _(n),
					l = document.querySelector(`#${o}`);
				l.src += "", L(o)
			},
			remove(t) {
				let n = u(t);
				if (!n || !e.has(n)) {
					E(`Nothing to remove found for ${t}`);
					return
				}
				let o = _(n),
					l = [`iframe#${o}`, `input#${o}_response`, `input#${o}_legacy_response`, `input#${o}_g_response`],
					a = document.querySelectorAll(l.join(", "));
				for (let r = 0; r < a.length; ++r) a[r].remove();
				e.delete(n)
			},
			getResponse(t) {
				let n = u(t);
				if (!n) {
					c(`Could not find widget for getResponse(${t})`);
					return
				}
				return e.get(n).response
			}
		}
	}();
	"Proxy" in window ? window.cfChallengeAPI = new Proxy(y, {
		get(e, s) {
			return E("window.cfChallengeAPI is deprecated, please move to window.turnstile"), e[s]
		}
	}) : window.cfChallengeAPI = y;
	window.turnstile = y;

	function oe(e) {
		var v;
		let i = {
				sitekey: e.getAttribute("data-sitekey")
			},
			u = e.getAttribute("data-tabindex");
		u && (i.tabindex = parseInt(u, 10));
		let t = e.getAttribute("data-theme");
		t && ($(t) ? i.theme = t : E(`Unknown data-theme value: "${t}"`));
		let n = e.getAttribute("data-size");
		n && (S(n) ? i.size = n : E(`Unknown data-size value: "${n}"`));
		let o = e.getAttribute("data-base-url");
		o && (i["base-url"] = o);
		let l = e.getAttribute("data-action");
		l && (i.action = l);
		let a = e.getAttribute("data-cdata");
		a && (i.cData = a);
		let r = e.getAttribute("data-error-callback");
		r && window[r] && (i["error-callback"] = window[r]);
		let d = e.getAttribute("data-callback");
		d && window[d] && (i.callback = window[d]);
		let g = e.getAttribute("data-expired-callback");
		g && window[g] && (i["expired-callback"] = window[g]);
		let f = e.getAttribute("data-timeout-callback");
		f && window[f] && (i["timeout-callback"] = window[f]);
		let h = (v = e.getAttribute("data-response-field")) != null ? v : "true";
		i["response-field"] = h === "true";
		let A = e.getAttribute("data-response-field-name");
		return A && (i["response-field-name"] = A), i
	}

	function F() {
		let e = [Y, J];
		C && e.push(K);
		let s = document.querySelectorAll(e.join(", "));
		for (let i = 0; i < s.length; i++) y.render(s[i])
	}

	function ae() {
		let e = /\/(challenge-api|turnstile)\/v0(\/.*)?\/api\.js/,
			s = document.currentScript;
		if (e.test(s.src)) return s;
		let i = document.getElementsByTagName("script");
		for (let u = 0; u < i.length; u++) {
			let t = i[u].src;
			if (e.test(t)) return i[u]
		}
	}

	function se() {
		let e = ae();
		if (!e) return c("Could not find Turnstile script tag, some features may not be available"), null;
		let i = e.src.split("?");
		return i.length > 1 ? new URLSearchParams(i[1]) : new URLSearchParams
	}
	var w = se();
	if (w) {
		let e = w.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? E("grecaptcha is already defined. The compatibility layer will not be enabled") : (E("Compatibility layer enabled"), C = !0, window.grecaptcha = y): e !== null && E(`Unknown value for api.js?compat: "${e}", ignoring`), w.forEach(function(i, u) {
			b(["onload", "compat", "render"], u) || E(`Unknown parameter passed to api.js: "?${u}=...", ignoring`)
		});
		let s = w.get("onload");
		s && setTimeout(function() {
			typeof window[s] == "function" && window[s]()
		}, 0)
	}
	w.get("render") !== "explicit" && (document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(F, 0) : window.addEventListener("DOMContentLoaded", F));
})();