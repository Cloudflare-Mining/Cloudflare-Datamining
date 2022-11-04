(() => {
	function E(e, s) {
		return e.indexOf(s) !== -1
	}

	function k(e) {
		return E(["auto", "dark", "light"], e)
	}

	function L(e) {
		return E(["auto", "never"], e)
	}

	function z(e) {
		return e > 0 && e < 9e5
	}
	var X = /^[0-9A-Za-z_-]{3,100}$/;

	function U(e) {
		return X.test(e)
	}
	var J = /^[a-z0-9_-]{0,32}$/i;

	function V(e) {
		return J.test(e)
	}
	var K = /^[a-z0-9_-]{0,255}$/i;

	function B(e) {
		return K.test(e)
	}

	function M(e) {
		return E(["normal", "compact", "invisible"], e)
	}
	var Z = ".cf-turnstile",
		Q = ".cf-challenge",
		ee = ".g-recaptcha",
		te = "cf_challenge_response",
		ne = "cf-turnstile-response",
		re = "g-recaptcha-response",
		ie = 8e3,
		$ = !1;

	function c(e) {
		console.error(`[Cloudflare Turnstile] ${e}.`)
	}

	function m(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function ae(e) {
		c(`Failed with code: ${e}`)
	}

	function S(e) {
		q(e, "")
	}
	var C = "cf-chl-widget-";

	function G(e) {
		return e.startsWith(C) ? e.substring(C.length) : null
	}

	function x(e) {
		return `${C}${e}`
	}

	function q(e, s) {
		let a = document.getElementById(`${e}_response`);
		a !== null && (a.value = s);
		let u = document.getElementById(`${e}_legacy_response`);
		if (u !== null && (u.value = s), $) {
			let t = document.getElementById(`${e}_g_response`);
			t !== null && (t.value = s)
		}
	}

	function oe(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function se(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function le() {
		let e = window;
		for (; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e.location.href
	}
	var v = function() {
		let e = new Map,
			s = function(t) {
				var i;
				let n = t.data;
				if (n.source !== "cloudflare-challenge") return;
				if (!oe(t)) {
					c("Ignored message from wrong origin: " + t.origin);
					return
				}
				if (!n.widgetId || !e.has(n.widgetId)) return;
				let o = x(n.widgetId),
					l = e.get(n.widgetId);
				switch (n.event) {
					case "init": {
						let r = document.getElementById(o);
						if (!r) {
							c(`Cannot initialize Widget, Element not found (#${o}).`);
							return
						}
						let d = n.mode,
							g = (i = l.params.size) != null ? i : "normal";
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
						e.get(n.widgetId).response = n.token, q(o, n.token);
						let r = l.cbSuccess;
						r && r(n.token);
						break
					}
					case "fail": {
						n.code && ae(n.code), S(o);
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
						S(o);
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
							url: le(),
							retry: l.params.retry,
							"retry-interval": l.params["retry-interval"]
						}, "*");
						break
					}
				}
			};
		window.addEventListener("message", s);

		function a() {
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
				if (t.startsWith(C) && (t = G(t)), e.has(t)) return t;
				try {
					let n = document.querySelector(t);
					return n ? u(n) : null
				} catch (n) {
					return null
				}
			}
			if (t instanceof HTMLElement) {
				let n = t.querySelector("iframe");
				return n ? G(n.id) : null
			}
			return t || e.size === 0 ? null : e.keys().next().value
		}
		return {
			render(t, n) {
				var N, P, O, W, D, F, H;
				let o;
				if (typeof t == "string") try {
						if (o = document.querySelector(t), !o) {
							c(`Unable to find a container for "${t}"`);
							return
						}
					} catch (f) {
						c(`Invalid type for  "container", expected "selector" or an implementation of "HTMLElement", got "${t}"`);
						return
					} else if (t instanceof HTMLElement) o = t;
					else {
						c('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
						return
					} let l = de(o),
					i = Object.assign(l, n),
					{
						action: r,
						cData: d
					} = i,
					g = i.sitekey;
				i.theme = (N = i.theme) != null ? N : "auto", i.retry = (P = i.retry) != null ? P : "auto", i["retry-interval"] = (O = i["retry-interval"]) != null ? O : ie, i.size = (W = i.size) != null ? W : "normal";
				let I = i.callback,
					h = i["expired-callback"],
					y = i["timeout-callback"],
					R = i["error-callback"];
				if (typeof g != "string") {
					c(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof g}"`);
					return
				}
				if (!U(g)) {
					c(`Invalid input for parameter "sitekey", got "${g}"`);
					return
				}
				if (!M(i.size)) {
					c(`Invalid type for parameter "size", expected normal|compact, got "${i.size}" ${typeof i.size}`);
					return
				}
				if (!k(i.theme)) {
					c(`Invalid type for parameter "theme", expected dark|light|auto, got "${i.theme}" ${typeof i.theme}`);
					return
				}
				if (!L(i.retry)) {
					c(`Invalid type for parameter "retry", expected never|auto, got "${i.retry}" ${typeof i.retry}`);
					return
				}
				let p = document.createElement("iframe");
				if (r !== void 0 && typeof r != "string") {
					c(`Invalid type for parameter "action", expected "string", got "${typeof r}"`);
					return
				}
				if (r = r === void 0 ? null : r, !V(r)) {
					c(`Invalid input for parameter "action", got "${r}"`);
					return
				}
				if (d !== void 0 && typeof d != "string") {
					c(`Invalid type for parameter "cData", expected "string", got "${typeof d}"`);
					return
				}
				if (!B(d)) {
					c(`Invalid input for parameter "cData", got "${d}"`);
					return
				}
				d = d === void 0 ? null : d;
				let A = "https://challenges.cloudflare.com",
					_ = a(),
					b = x(_);
				e.set(_, {
					action: r,
					cData: d,
					cbSuccess: I,
					cbError: R,
					cbExpired: h,
					cbTimeout: y,
					params: i
				}), p.style.display = "none", p.style.border = "none", p.style.overflow = "hidden";
				let Y = "";
				if (p.setAttribute("src", `${A}/cdn-cgi/challenge-platform/${Y}turnstile/if/ov2/av0/${_}/${g}/${i.theme}/${i.size}`), p.id = b, p.tabIndex = (D = i.tabindex) != null ? D : 0, p.title = "Widget containing a Cloudflare security challenge", o.appendChild(p), (F = i["response-field"]) != null ? F : !0) {
					let f = document.createElement("input");
					if (f.type = "hidden", f.name = (H = i["response-field-name"]) != null ? H : ne, f.id = `${b}_response`, o.appendChild(f), typeof i["response-field-name"] != "string" && se(g)) {
						let T = document.createElement("input");
						T.type = "hidden", T.name = te, T.id = `${b}_legacy_response`, o.appendChild(T)
					}
				}
				if ($) {
					let f = document.createElement("input");
					f.type = "hidden", f.name = re, f.id = `${b}_g_response`, o.appendChild(f)
				}
				return b
			},
			reset(t) {
				let n = u(t);
				if (!n) {
					c(`Nothing to reset found for ${t}`);
					return
				}
				let o = x(n),
					l = document.querySelector(`#${o}`);
				l.src += "", S(o)
			},
			remove(t) {
				let n = u(t);
				if (!n || !e.has(n)) {
					m(`Nothing to remove found for ${t}`);
					return
				}
				let o = x(n),
					l = [`iframe#${o}`, `input#${o}_response`, `input#${o}_legacy_response`, `input#${o}_g_response`],
					i = document.querySelectorAll(l.join(", "));
				for (let r = 0; r < i.length; ++r) i[r].remove();
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
	"Proxy" in window ? window.cfChallengeAPI = new Proxy(v, {
		get(e, s) {
			return m("window.cfChallengeAPI is deprecated, please move to window.turnstile"), e[s]
		}
	}) : window.cfChallengeAPI = v;
	window.turnstile = v;

	function de(e) {
		var A;
		let a = {
				sitekey: e.getAttribute("data-sitekey")
			},
			u = e.getAttribute("data-tabindex");
		u && (a.tabindex = parseInt(u, 10));
		let t = e.getAttribute("data-theme");
		t && (k(t) ? a.theme = t : m(`Unknown data-theme value: "${t}"`));
		let n = e.getAttribute("data-size");
		n && (M(n) ? a.size = n : m(`Unknown data-size value: "${n}"`));
		let o = e.getAttribute("data-base-url");
		o && (a["base-url"] = o);
		let l = e.getAttribute("data-action");
		l && (a.action = l);
		let i = e.getAttribute("data-cdata");
		i && (a.cData = i);
		let r = e.getAttribute("data-retry");
		r && (L(r) ? a.retry = r : m(`Unknown data-retry value: "${r}"`));
		let d = +e.getAttribute("data-retry-interval");
		d && (z(d) ? a["retry-interval"] = d : m(`Invalid data-retry-interval value: "${d}, expected an integer value > 0 and < 900000"`));
		let g = e.getAttribute("data-error-callback");
		g && window[g] && (a["error-callback"] = window[g]);
		let I = e.getAttribute("data-callback");
		I && window[I] && (a.callback = window[I]);
		let h = e.getAttribute("data-expired-callback");
		h && window[h] && (a["expired-callback"] = window[h]);
		let y = e.getAttribute("data-timeout-callback");
		y && window[y] && (a["timeout-callback"] = window[y]);
		let R = (A = e.getAttribute("data-response-field")) != null ? A : "true";
		a["response-field"] = R === "true";
		let p = e.getAttribute("data-response-field-name");
		return p && (a["response-field-name"] = p), a
	}

	function j() {
		let e = [Z, Q];
		$ && e.push(ee);
		let s = document.querySelectorAll(e.join(", "));
		for (let a = 0; a < s.length; a++) v.render(s[a])
	}

	function ce() {
		let e = /\/(challenge-api|turnstile)\/v0(\/.*)?\/api\.js/,
			s = document.currentScript;
		if (e.test(s.src)) return s;
		let a = document.getElementsByTagName("script");
		for (let u = 0; u < a.length; u++) {
			let t = a[u].src;
			if (e.test(t)) return a[u]
		}
	}

	function ue() {
		let e = ce();
		if (!e) return c("Could not find Turnstile script tag, some features may not be available"), null;
		let a = e.src.split("?");
		return a.length > 1 ? new URLSearchParams(a[1]) : new URLSearchParams
	}
	var w = ue();
	if (w) {
		let e = w.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? m("grecaptcha is already defined. The compatibility layer will not be enabled") : (m("Compatibility layer enabled"), $ = !0, window.grecaptcha = v): e !== null && m(`Unknown value for api.js?compat: "${e}", ignoring`), w.forEach(function(a, u) {
			E(["onload", "compat", "render"], u) || m(`Unknown parameter passed to api.js: "?${u}=...", ignoring`)
		});
		let s = w.get("onload");
		s && setTimeout(function() {
			typeof window[s] == "function" && window[s]()
		}, 0)
	}
	w.get("render") !== "explicit" && (document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(j, 0) : window.addEventListener("DOMContentLoaded", j));
})();