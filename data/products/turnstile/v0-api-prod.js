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

	function u(e) {
		console.error(`[Cloudflare Turnstile] ${e}.`)
	}

	function E(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
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
		let d = document.getElementById(`${e}_legacy_response`);
		if (d !== null && (d.value = s), C) {
			let t = document.getElementById(`${e}_g_response`);
			t !== null && (t.value = s)
		}
	}

	function te(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function ne(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function re() {
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
				if (!te(t)) {
					u("Ignored message from wrong origin: " + t.origin);
					return
				}
				if (!n.widgetId || !e.has(n.widgetId)) return;
				let o = _(n.widgetId),
					l = e.get(n.widgetId);
				switch (n.event) {
					case "init": {
						let r = document.getElementById(o);
						if (!r) {
							u(`Cannot initialize Widget, Element not found (#${o}).`);
							return
						}
						let c = n.mode,
							g = (a = l.params.size) != null ? a : "normal";
						switch (c) {
							case "non-interactive":
							case "managed":
								switch (g) {
									case "compact":
										r.style.width = "130px", r.style.height = "120px";
										break;
									case "normal":
										r.style.width = "300px", r.style.height = "65px";
										break;
									default:
										u(`Invalid value for parameter "size", expected "${"compact"}" or "${"normal"}", got "${g}"`);
										return
								}
								break;
							case "invisible":
								r.style.width = "0", r.style.height = "0", r.style.position = "absolute";
								break;
							default:
								u(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${c}"`);
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
						L(o);
						let r = l.cbError;
						r && r();
						break
					}
					case "tokenExpired": {
						let r = n.token,
							c = l.cbExpired;
						c && c(r);
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
							url: re()
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

		function d(t) {
			if (typeof t == "string") {
				if (t.startsWith(x) && (t = z(t)), e.has(t)) return t;
				try {
					let n = document.querySelector(t);
					return n ? d(n) : null
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
			render: function(t, n) {
				var R, M, P, N, W;
				let o;
				if (typeof t == "string") try {
						if (o = document.querySelector(t), !o) {
							u(`Unable to find a container for "${t}"`);
							return
						}
					} catch (f) {
						u(`Invalid type for  "container", expected "selector" or an implementation of "HTMLElement", got "${t}"`);
						return
					} else if (t instanceof HTMLElement) o = t;
					else {
						u('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
						return
					} let l = ie(o),
					a = Object.assign(l, n),
					{
						action: r,
						cData: c
					} = a,
					g = a.sitekey,
					p = (R = a.theme) != null ? R : "auto",
					h = (M = a.size) != null ? M : "normal",
					A = a.callback,
					v = a["expired-callback"],
					V = a["timeout-callback"],
					U = a["error-callback"];
				if (typeof g != "string") {
					u(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof g}"`);
					return
				}
				if (!D(g)) {
					u(`Invalid input for parameter "sitekey", got "${g}"`);
					return
				}
				if (!S(h)) {
					u(`Invalid type for parameter "size", expected normal|compact, got "${h}" ${typeof h}`);
					return
				}
				if (!$(p)) {
					u(`Invalid type for parameter "theme", expected dark|light|auto, got "${p}" ${typeof p}`);
					return
				}
				let m = document.createElement("iframe");
				if (r !== void 0 && typeof r != "string") {
					u(`Invalid type for parameter "action", expected "string", got "${typeof r}"`);
					return
				}
				if (r = r === void 0 ? null : r, !H(r)) {
					u(`Invalid input for parameter "action", got "${r}"`);
					return
				}
				if (c !== void 0 && typeof c != "string") {
					u(`Invalid type for parameter "cData", expected "string", got "${typeof c}"`);
					return
				}
				if (!O(c)) {
					u(`Invalid input for parameter "cData", got "${c}"`);
					return
				}
				c = c === void 0 ? null : c;
				let j = "https://challenges.cloudflare.com",
					k = i(),
					I = _(k);
				if (e.set(k, {
						action: r,
						cData: c,
						cbSuccess: A,
						cbError: U,
						cbExpired: v,
						cbTimeout: V,
						params: a
					}), m.style.display = "none", m.style.border = "none", m.style.overflow = "hidden", m.setAttribute("src", `${j}/cdn-cgi/challenge-platform/turnstile/if/ov2/av0/${k}/${g}/${p}/${h}`), m.id = I, m.tabIndex = (P = a.tabindex) != null ? P : 0, m.title = "Widget containing a Cloudflare security challenge", o.appendChild(m), (N = a["response-field"]) != null ? N : !0) {
					let f = document.createElement("input");
					if (f.type = "hidden", f.name = (W = a["response-field-name"]) != null ? W : Q, f.id = `${I}_response`, o.appendChild(f), typeof a["response-field-name"] != "string" && ne(g)) {
						let T = document.createElement("input");
						T.type = "hidden", T.name = Z, T.id = `${I}_legacy_response`, o.appendChild(T)
					}
				}
				if (C) {
					let f = document.createElement("input");
					f.type = "hidden", f.name = ee, f.id = `${I}_g_response`, o.appendChild(f)
				}
				return I
			},
			reset: function(t) {
				let n = d(t);
				if (!n) {
					u(`Nothing to reset found for ${t}`);
					return
				}
				let o = _(n),
					l = document.querySelector(`#${o}`);
				l.src += "", L(o)
			},
			remove: function(t) {
				let n = d(t);
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
			getResponse: function(t) {
				let n = d(t);
				if (!n) {
					u(`Could not find widget for getResponse(${t})`);
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

	function ie(e) {
		var v;
		let i = {
				sitekey: e.getAttribute("data-sitekey")
			},
			d = e.getAttribute("data-tabindex");
		d && (i.tabindex = parseInt(d, 10));
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
		let c = e.getAttribute("data-callback");
		c && window[c] && (i.callback = window[c]);
		let g = e.getAttribute("data-expired-callback");
		g && window[g] && (i["expired-callback"] = window[g]);
		let p = e.getAttribute("data-timeout-callback");
		p && window[p] && (i["timeout-callback"] = window[p]);
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

	function oe() {
		let e = /\/(challenge-api|turnstile)\/v0(\/.*)?\/api\.js/,
			s = document.currentScript;
		if (e.test(s.src)) return s;
		let i = document.getElementsByTagName("script");
		for (let d = 0; d < i.length; d++) {
			let t = i[d].src;
			if (e.test(t)) return i[d]
		}
	}

	function ae() {
		let e = oe();
		if (!e) return u("Could not find Turnstile script tag, some features may not be available"), null;
		let i = e.src.split("?");
		return i.length > 1 ? new URLSearchParams(i[1]) : new URLSearchParams
	}
	var w = ae();
	if (w) {
		let e = w.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? E("grecaptcha is already defined. The compatibility layer will not be enabled") : (E("Compatibility layer enabled"), C = !0, window.grecaptcha = y): e !== null && E(`Unknown value for api.js?compat: "${e}", ignoring`), w.forEach(function(i, d) {
			b(["onload", "compat", "render"], d) || E(`Unknown parameter passed to api.js: "?${d}=...", ignoring`)
		});
		let s = w.get("onload");
		s && setTimeout(function() {
			typeof window[s] == "function" && window[s]()
		}, 0)
	}
	w.get("render") !== "explicit" && (document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(F, 0) : window.addEventListener("DOMContentLoaded", F));
})();