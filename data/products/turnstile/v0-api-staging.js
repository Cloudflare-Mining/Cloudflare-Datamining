(() => {
	function b(e, s) {
		return e.indexOf(s) !== -1
	}

	function C(e) {
		return b(["auto", "dark", "light"], e)
	}
	var j = /^[0-9A-Za-z_-]{3,100}$/;

	function W(e) {
		return j.test(e)
	}
	var q = /^[a-z0-9_-]{0,32}$/i;

	function D(e) {
		return q.test(e)
	}
	var G = /^[a-z0-9_-]{0,255}$/i;

	function H(e) {
		return G.test(e)
	}

	function S(e) {
		return b(["normal", "compact", "invisible"], e)
	}
	var X = ".cf-turnstile",
		Y = ".cf-challenge",
		J = ".g-recaptcha",
		K = "cf_challenge_response",
		Z = "cf-turnstile-response",
		Q = "g-recaptcha-response",
		_ = !1;

	function c(e) {
		console.error(`[Cloudflare Turnstile] ${e}.`)
	}

	function E(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function L(e) {
		F(e, "")
	}
	var T = "cf-chl-widget-";

	function O(e) {
		return e.startsWith(T) ? e.substring(T.length) : null
	}

	function v(e) {
		return `${T}${e}`
	}

	function F(e, s) {
		let i = document.getElementById(`${e}_response`);
		i !== null && (i.value = s);
		let d = document.getElementById(`${e}_legacy_response`);
		if (d !== null && (d.value = s), _) {
			let t = document.getElementById(`${e}_g_response`);
			t !== null && (t.value = s)
		}
	}

	function ee(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function te(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function ne() {
		let e = window;
		for (; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e.location.href
	}
	var x = function() {
		let e = new Map,
			s = function(t) {
				var a;
				let n = t.data;
				if (n.source !== "cloudflare-challenge") return;
				if (!ee(t)) {
					c("Ignored message from wrong origin: " + t.origin);
					return
				}
				if (!n.widgetId || !e.has(n.widgetId)) return;
				let o = v(n.widgetId),
					l = e.get(n.widgetId);
				switch (n.event) {
					case "init": {
						let r = document.getElementById(o);
						if (!r) {
							c(`Cannot initialize Widget, Element not found (#${o}).`);
							return
						}
						let u = n.mode,
							g = (a = l.params.size) != null ? a : "normal";
						switch (u) {
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
										c(`Invalid value for parameter "size", expected "${"compact"}" or "${"normal"}", got "${g}"`);
										return
								}
								break;
							case "invisible":
								r.style.width = "0", r.style.height = "0", r.style.position = "absolute";
								break;
							default:
								c(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${u}"`);
								return
						}
						r.style.display = "";
						break
					}
					case "complete": {
						e.get(n.widgetId).response = n.token, F(o, n.token);
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
					case "timeout": {
						if (L(o), l.response === void 0) {
							let r = l.cbExpired;
							r && r()
						}
						break
					}
					case "requestExtraParams": {
						document.querySelector(`#${o}`).contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: n.widgetId,
							event: "extraParams",
							action: l.action,
							cData: l.cData,
							url: ne()
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
				if (t.startsWith(T) && (t = O(t)), e.has(t)) return t;
				try {
					let n = document.querySelector(t);
					return n ? d(n) : null
				} catch (n) {
					return null
				}
			}
			if (t instanceof HTMLElement) {
				let n = t.querySelector("iframe");
				return n ? O(n.id) : null
			}
			return t || e.size === 0 ? null : e.keys().next().value
		}
		return {
			render: function(t, n) {
				var R, k, se, M, P, N;
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
					} let l = re(o),
					a = Object.assign(l, n),
					{
						action: r,
						cData: u
					} = a,
					g = a.sitekey,
					h = (R = a.theme) != null ? R : "auto",
					m = (k = a.size) != null ? k : "normal",
					y = a.callback,
					B = a["expired-callback"],
					V = a["error-callback"];
				if (typeof g != "string") {
					c(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof g}"`);
					return
				}
				if (!W(g)) {
					c(`Invalid input for parameter "sitekey", got "${g}"`);
					return
				}
				if (!S(m)) {
					c(`Invalid type for parameter "size", expected normal|compact, got "${m}" ${typeof m}`);
					return
				}
				if (!C(h)) {
					c(`Invalid type for parameter "theme", expected dark|light|auto, got "${h}" ${typeof h}`);
					return
				}
				let p = document.createElement("iframe");
				if (r !== void 0 && typeof r != "string") {
					c(`Invalid type for parameter "action", expected "string", got "${typeof r}"`);
					return
				}
				if (r = r === void 0 ? null : r, !D(r)) {
					c(`Invalid input for parameter "action", got "${r}"`);
					return
				}
				if (u !== void 0 && typeof u != "string") {
					c(`Invalid type for parameter "cData", expected "string", got "${typeof u}"`);
					return
				}
				if (!H(u)) {
					c(`Invalid input for parameter "cData", got "${u}"`);
					return
				}
				u = u === void 0 ? null : u;
				let U = "https://challenges.cloudflare.com",
					$ = i(),
					I = v($);
				if (e.set($, {
						action: r,
						cData: u,
						cbSuccess: y,
						cbError: V,
						cbExpired: B,
						params: a
					}), p.style.display = "none", p.style.border = "none", p.style.overflow = "hidden", p.setAttribute("src", `${U}/cdn-cgi/challenge-platform/turnstile/if/ov2/av0/${$}/${g}/${h}/${m}`), p.id = I, p.tabIndex = (M = a.tabindex) != null ? M : 0, p.title = "Widget containing a Cloudflare security challenge", o.appendChild(p), (P = a["response-field"]) != null ? P : !0) {
					let f = document.createElement("input");
					if (f.type = "hidden", f.name = (N = a["response-field-name"]) != null ? N : Z, f.id = `${I}_response`, o.appendChild(f), typeof a["response-field-name"] != "string" && te(g)) {
						let A = document.createElement("input");
						A.type = "hidden", A.name = K, A.id = `${I}_legacy_response`, o.appendChild(A)
					}
				}
				if (_) {
					let f = document.createElement("input");
					f.type = "hidden", f.name = Q, f.id = `${I}_g_response`, o.appendChild(f)
				}
				return I
			},
			reset: function(t) {
				let n = d(t);
				if (!n) {
					c(`Nothing to reset found for ${t}`);
					return
				}
				let o = v(n),
					l = document.querySelector(`#${o}`);
				l.src += "", L(o)
			},
			remove: function(t) {
				let n = d(t);
				if (!n || !e.has(n)) {
					E(`Nothing to remove found for ${t}`);
					return
				}
				let o = v(n),
					l = [`iframe#${o}`, `input#${o}_response`, `input#${o}_legacy_response`, `input#${o}_g_response`],
					a = document.querySelectorAll(l.join(", "));
				for (let r = 0; r < a.length; ++r) a[r].remove();
				e.delete(n)
			},
			getResponse: function(t) {
				let n = d(t);
				if (!n) {
					c(`Could not find widget for getResponse(${t})`);
					return
				}
				return e.get(n).response
			}
		}
	}();
	window.cfChallengeAPI = x;
	window.turnstile = x;

	function re(e) {
		var y;
		let i = {
				sitekey: e.getAttribute("data-sitekey")
			},
			d = e.getAttribute("data-tabindex");
		d && (i.tabindex = parseInt(d, 10));
		let t = e.getAttribute("data-theme");
		t && (C(t) ? i.theme = t : E(`Unknown data-theme value: "${t}"`));
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
		let u = e.getAttribute("data-callback");
		u && window[u] && (i.callback = window[u]);
		let g = e.getAttribute("data-expired-callback");
		g && window[g] && (i["expired-callback"] = window[g]);
		let h = (y = e.getAttribute("data-response-field")) != null ? y : "true";
		i["response-field"] = h === "true";
		let m = e.getAttribute("data-response-field-name");
		return m && (i["response-field-name"] = m), i
	}

	function z() {
		let e = [X, Y];
		_ && e.push(J);
		let s = document.querySelectorAll(e.join(", "));
		for (let i = 0; i < s.length; i++) x.render(s[i])
	}

	function ie() {
		let e = /\/(challenge-api|turnstile)\/v0(\/.*)?\/api\.js/,
			s = document.currentScript;
		if (e.test(s.src)) return s;
		let i = document.getElementsByTagName("script");
		for (let d = 0; d < i.length; d++) {
			let t = i[d].src;
			if (e.test(t)) return i[d]
		}
	}

	function oe() {
		let e = ie();
		if (!e) return c("Could not find Turnstile script tag, some features may not be available"), null;
		let i = e.src.split("?");
		return i.length > 1 ? new URLSearchParams(i[1]) : new URLSearchParams
	}
	var w = oe();
	if (w) {
		let e = w.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? E("grecaptcha is already defined. The compatibility layer will not be enabled") : (E("Compatibility layer enabled"), _ = !0, window.grecaptcha = x): e !== null && E(`Unknown value for api.js?compat: "${e}", ignoring`), w.forEach(function(i, d) {
			b(["onload", "compat", "render"], d) || E(`Unknown parameter passed to api.js: "?${d}=...", ignoring`)
		});
		let s = w.get("onload");
		s && setTimeout(function() {
			typeof window[s] == "function" && window[s]()
		}, 0)
	}
	w.get("render") !== "explicit" && (document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(z, 0) : window.addEventListener("DOMContentLoaded", z));
})();