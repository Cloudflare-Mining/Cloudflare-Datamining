(() => {
	var P = ".cf-turnstile",
		N = ".cf-challenge",
		W = ".g-recaptcha",
		H = "cf_challenge_response",
		D = "cf-turnstile-response",
		O = "g-recaptcha-response",
		_ = !1;

	function E(e, o) {
		return e == null ? o : e
	}

	function c(e) {
		console.error(`[Cloudflare Turnstile] ${e}.`)
	}

	function h(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function L(e) {
		$(e, "")
	}
	var T = "cf-chl-widget-";

	function R(e) {
		return e.startsWith(T) ? e.substring(T.length) : null
	}

	function y(e) {
		return `${T}${e}`
	}

	function $(e, o) {
		let s = document.getElementById(`${e}_response`);
		s !== null && (s.value = o);
		let d = document.getElementById(`${e}_legacy_response`);
		if (d !== null && (d.value = o), _) {
			let t = document.getElementById(`${e}_g_response`);
			t !== null && (t.value = o)
		}
	}

	function F(e) {
		if (!e.origin) return !0;
		switch (e.origin) {
			case "https://challenges.cloudflare.com":
			case "https://challenges-staging.cloudflare.com":
				return !0;
			default:
				return !1
		}
	}

	function z(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}
	var v = function() {
		let e = new Map,
			o = function(t) {
				let n = t.data;
				if (n.source !== "cloudflare-challenge") return;
				if (!F(t)) {
					c("Ignored message from wrong origin: " + t.origin);
					return
				}
				if (!n.widgetId || !e.has(n.widgetId)) return;
				let i = y(n.widgetId),
					a = e.get(n.widgetId);
				switch (n.event) {
					case "init": {
						let r = document.getElementById(i);
						if (!r) {
							c(`Cannot initialize Widget, Element not found (#${i}).`);
							return
						}
						let l = n.mode;
						switch (l) {
							case "non-interactive":
							case "managed":
								r.style.width = "300px", r.style.height = "65px";
								break;
							case "invisible":
								r.style.width = "0", r.style.height = "0", r.style.position = "absolute";
								break;
							default:
								c(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${l}"`);
								return
						}
						r.style.display = "";
						break
					}
					case "complete": {
						e.get(n.widgetId).response = n.token, $(i, n.token);
						let r = a.cbSuccess;
						r && r(n.token);
						break
					}
					case "fail": {
						L(i);
						let r = a.cbError;
						r && r();
						break
					}
					case "timeout": {
						if (L(i), a.response === void 0) {
							let r = a.cbExpired;
							r && r()
						}
						break
					}
					case "requestExtraParams": {
						document.querySelector(`#${i}`).contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: n.widgetId,
							event: "extraParams",
							action: a.action,
							cData: a.cData,
							url: location.href
						}, "*");
						break
					}
				}
			};
		window.addEventListener ? window.addEventListener("message", o) : window.attachEvent("onmessage", o);

		function s() {
			let t;
			do {
				t = "";
				let n = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = n.length;
				for (let a = 0; a < 5; a++) t += n.charAt(Math.floor(Math.random() * i))
			} while (e.has(t));
			return t
		}

		function d(t) {
			if (typeof t == "string") {
				if (t.startsWith(T) && (t = R(t)), e.has(t)) return t;
				try {
					let n = document.querySelector(t);
					return n ? d(n) : null
				} catch (n) {
					return null
				}
			}
			if (t instanceof HTMLElement) {
				let n = t.querySelector("iframe");
				return n ? R(n.id) : null
			}
			return t || e.size === 0 ? null : e.keys().next().value
		}
		return {
			render: function(t, n) {
				let i;
				if (typeof t == "string") try {
						if (i = document.querySelector(t), !i) {
							c(`Unable to find a container for "${t}"`);
							return
						}
					} catch (g) {
						c(`Invalid type for  "container", expected "selector" or an implementation of "HTMLElement", got "${t}"`);
						return
					} else if (t instanceof HTMLElement) i = t;
					else {
						c('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
						return
					} let a = U(i),
					r = Object.assign(a, n),
					{
						action: l,
						cData: u
					} = r,
					f = r.sitekey,
					m = E(r.theme, "auto"),
					b = E(r.size, "normal"),
					k = r.callback,
					x = r["expired-callback"],
					M = r["error-callback"],
					q = r["base-url"];
				if (typeof f != "string") {
					c(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof f}"`);
					return
				}
				if (typeof m != "string" || ["dark", "light", "auto"].indexOf(m) === -1) {
					c(`Invalid type for parameter "theme", expected dark|light|auto, got "${m}" ${typeof m}`);
					return
				}
				b === "compact" && h('Turnstile does not have a "compact" size, falling back to normal size');
				let p = document.createElement("iframe");
				if (l !== void 0 && typeof l != "string") {
					c(`Invalid type for parameter "action", expected "string", got "${typeof l}"`);
					return
				}
				if (l = l === void 0 ? null : l, u !== void 0 && typeof u != "string") {
					c(`Invalid type for parameter "cData", expected "string", got "${typeof u}"`);
					return
				}
				u = u === void 0 ? null : u;
				let S = "https://challenges.cloudflare.com",
					C = s(),
					I = y(C);
				if (e.set(C, {
						action: l,
						cData: u,
						cbSuccess: k,
						cbError: M,
						cbExpired: x,
						params: r
					}), p.style.display = "none", p.style.border = "none", p.style.overflow = "hidden", p.setAttribute("src", `${S}/cdn-cgi/challenge-platform/turnstile/if/ov2/av0/${C}/${f}/${m}`), p.id = I, p.tabIndex = E(r.tabindex, 0), p.title = "Widget containing a Cloudflare security challenge", i.appendChild(p), E(r["response-field"], !0)) {
					let g = document.createElement("input");
					if (g.type = "hidden", g.name = E(r["response-field-name"], D), g.id = `${I}_response`, i.appendChild(g), typeof r["response-field-name"] != "string" && z(f)) {
						let w = document.createElement("input");
						w.type = "hidden", w.name = H, w.id = `${I}_legacy_response`, i.appendChild(w)
					}
				}
				if (_) {
					let g = document.createElement("input");
					g.type = "hidden", g.name = O, g.id = `${I}_g_response`, i.appendChild(g)
				}
				return I
			},
			reset: function(t) {
				let n = d(t);
				if (!n) {
					c(`Nothing to reset found for ${t}`);
					return
				}
				let i = y(n),
					a = document.querySelector(`#${i}`);
				a.src += "", L(i)
			},
			remove: function(t) {
				let n = d(t);
				if (!n || !e.has(n)) {
					h(`Nothing to remove found for ${t}`);
					return
				}
				let i = y(n),
					a = [`iframe#${i}`, `input#${i}_response`, `input#${i}_legacy_response`, `input#${i}_g_response`],
					r = document.querySelectorAll(a.join(", "));
				for (let l = 0; l < r.length; ++l) r[l].remove();
				e.delete(n)
			},
			getResponse(t) {
				let n = d(t);
				if (!n) {
					c(`Could not find widget for getResponse(${t})`);
					return
				}
				return e.get(n).response
			}
		}
	}();
	window.cfChallengeAPI = v;
	window.turnstile = v;

	function U(e) {
		let s = {
				sitekey: e.getAttribute("data-sitekey")
			},
			d = e.getAttribute("data-tabindex");
		d && (s.tabindex = parseInt(d, 10));
		let t = e.getAttribute("data-theme");
		t && (t === "auto" || t === "light" || t === "dark" ? s.theme = t : h(`Unknown data-theme value: "${t}"`));
		let n = e.getAttribute("data-size");
		n && (n === "normal" || n === "invisible" || n === "compact" ? s.size = n : h(`Unknown data-size value: "${n}"`));
		let i = e.getAttribute("data-base-url");
		i && (s["base-url"] = i);
		let a = e.getAttribute("data-action");
		a && (s.action = a);
		let r = e.getAttribute("data-cdata");
		r && (s.cData = r);
		let l = e.getAttribute("data-error-callback");
		l && window[l] && (s["error-callback"] = window[l]);
		let u = e.getAttribute("data-callback");
		u && window[u] && (s.callback = window[u]);
		let f = e.getAttribute("data-expired-callback");
		f && window[f] && (s["expired-callback"] = window[f]);
		let m = E(e.getAttribute("data-response-field"), "true");
		s["response-field"] = m === "true";
		let b = e.getAttribute("data-response-field-name");
		return b && (s["response-field-name"] = b), s
	}

	function B() {
		let e = [P, N];
		_ && e.push(W);
		let o = document.querySelectorAll(e.join(", "));
		for (let s = 0; s < o.length; s++) v.render(o[s])
	}

	function V() {
		let e = /\/(challenge-api|turnstile)\/v0(\/.*)?\/api\.js/,
			o = document.currentScript;
		if (e.test(o.src)) {
			let d = o.src.split("?");
			return d.length > 1 ? new URLSearchParams(d[1]) : new URLSearchParams
		}
		let s = document.getElementsByTagName("script");
		for (let d = 0; d < s.length; d++) {
			let t = s[d].src;
			if (e.test(t)) {
				let n = t.split("?");
				return n.length > 1 ? new URLSearchParams(n[1]) : new URLSearchParams
			}
		}
		return c("Could not find Turnstile script tag, some features may not be available"), null
	}
	var A = V();
	if (A) {
		let e = A.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" && (window.grecaptcha ? h("grecaptcha is already defined. The compatibility layer will not be enabled") : (h("Compatibility layer enabled"), _ = !0, window.grecaptcha = v));
		let o = A.get("onload");
		o && setTimeout(function() {
			typeof window[o] == "function" && window[o]()
		}, 0)
	}
	A.get("render") !== "explicit" && setTimeout(function() {
		B()
	}, 0);
})();