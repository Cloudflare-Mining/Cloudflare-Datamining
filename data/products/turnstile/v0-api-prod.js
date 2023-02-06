(() => {
	function I(e, d) {
		return e.indexOf(d) !== -1
	}

	function S(e) {
		return I(["auto", "dark", "light"], e)
	}

	function M(e) {
		return I(["auto", "never"], e)
	}

	function N(e) {
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

	function P(e) {
		return I(["auto", "manual", "never"], e)
	}
	var ce = /^[a-z]{2}(-[A-Z]{2})?$/;

	function W(e) {
		return e === "auto" || ce.test(e)
	}
	var ue = ".cf-turnstile",
		ge = ".cf-challenge",
		fe = ".g-recaptcha",
		pe = "cf_challenge_response",
		me = "cf-turnstile-response",
		he = "g-recaptcha-response",
		ye = 8e3,
		k = !1,
		ee = !1;

	function l(e) {
		let d = `[Cloudflare Turnstile] ${e}.`;
		throw console.error(d), new Error(d)
	}

	function f(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function Ee(e) {
		l(`Failed with code: ${e}`)
	}

	function D(e) {
		ie(e, "")
	}

	function te() {
		let e = [ue, ge];
		k && e.push(fe);
		let d = document.querySelectorAll(e.join(", "));
		for (let o = 0; o < d.length; o++) F.render(d[o])
	}
	var re = [],
		ne = !1;

	function K() {
		ne = !0;
		for (let e of re) e();
		te()
	}
	var A = "cf-chl-widget-";

	function Q(e) {
		return e.startsWith(A) ? e.substring(A.length) : null
	}

	function C(e) {
		return `${A}${e}`
	}

	function ie(e, d) {
		let o = document.getElementById(`${e}_response`);
		o !== null && (o.value = d);
		let u = document.getElementById(`${e}_legacy_response`);
		if (u !== null && (u.value = d), k) {
			let g = document.getElementById(`${e}_g_response`);
			g !== null && (g.value = d)
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
	var F = function() {
		let e = new Map,
			d = 0,
			o = function(r) {
				var t;
				let i = r.data;
				if (i.source !== "cloudflare-challenge") return;
				if (!Ie(r)) {
					l("Ignored message from wrong origin: " + r.origin);
					return
				}
				if (!i.widgetId || !e.has(i.widgetId)) return;
				let a = C(i.widgetId),
					s = e.get(i.widgetId);
				switch (i.event) {
					case "init": {
						let n = document.getElementById(a);
						if (!n) {
							l(`Cannot initialize Widget, Element not found (#${a}).`);
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
										l(`Invalid value for parameter "size", expected "${"compact"}" or "${"normal"}", got "${p}"`);
									case "normal":
										n.style.width = "300px", n.style.height = "65px";
										break
								}
								break;
							case "invisible":
								n.style.width = "0", n.style.height = "0", n.style.position = "absolute";
								break;
							default:
								l(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${c}"`);
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
						i.code && Ee(i.code), D(a);
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
						D(a);
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

		function g(r) {
			if (typeof r == "string") {
				if (r.startsWith(A) && (r = Q(r)), e.has(r)) return r;
				try {
					let i = document.querySelector(r);
					return i ? g(i) : null
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
			let i = g(r);
			if (!i) {
				l(`Nothing to reset found for ${r}`);
				return
			}
			let a = e.get(i);
			a && (a.isResetting = !0);
			let s = C(i),
				t = document.querySelector(`#${s}`);
			t.src += "", D(s)
		}

		function v(r) {
			let i = g(r);
			if (!i || !e.has(i)) {
				f(`Nothing to remove found for ${r}`);
				return
			}
			let a = C(i),
				s = [`iframe#${a}`, `input#${a}_response`, `input#${a}_legacy_response`, `input#${a}_g_response`],
				t = document.querySelectorAll(s.join(", "));
			for (let n = 0; n < t.length; ++n) t[n].remove();
			e.delete(i)
		}
		return {
			implicitRender: te,
			ready(r) {
				if (ee) throw f("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), new Error("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().");
				if (typeof r != "function" && l(`turnstile.ready() expected a "function" argument, got "${typeof r}"`), ne) {
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
							l(`Unable to find a container for "${r}"`);
							return
						}
					} catch (m) {
						l(`Invalid type for  "container", expected "selector" or an implementation of "HTMLElement", got "${r}"`);
						return
					} else if (r instanceof HTMLElement) a = r;
					else {
						l('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
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
					_ = t["timeout-callback"],
					R = t["error-callback"];
				if (typeof p != "string") {
					l(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof p}"`);
					return
				}
				if (!X(p)) {
					l(`Invalid input for parameter "sitekey", got "${p}"`);
					return
				}
				if (!O(t.size)) {
					l(`Invalid type for parameter "size", expected normal|compact, got "${t.size}" ${typeof t.size}`);
					return
				}
				if (!S(t.theme)) {
					l(`Invalid type for parameter "theme", expected dark|light|auto, got "${t.theme}" ${typeof t.theme}`);
					return
				}
				if (!M(t.retry)) {
					l(`Invalid type for parameter "retry", expected never|auto, got "${t.retry}" ${typeof t.retry}`);
					return
				}
				if (t.language || (t.language = "auto"), !W(t.language)) {
					l(`Invalid data-language value: "${t.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`);
					return
				}
				if (!N(t["retry-interval"])) {
					f(`Invalid data-retry-interval value: "${t["retry-interval"]}, expected an integer value > 0 and < 900000"`);
					return
				}
				let E = (j = t["refresh-expired"]) != null ? j : "auto";
				if (P(E)) t["refresh-expired"] = E;
				else {
					l(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${E}" ${typeof E}`);
					return
				}
				let H = a.getElementsByTagName("iframe")[0];
				H && H.id.startsWith(A) && v(a);
				let y = document.createElement("iframe");
				if (n !== void 0 && typeof n != "string") {
					l(`Invalid type for parameter "action", expected "string", got "${typeof n}"`);
					return
				}
				if (n = n === void 0 ? null : n, !Z(n)) {
					l(`Invalid input for parameter "action", got "${n}"`);
					return
				}
				if (c !== void 0 && typeof c != "string") {
					l(`Invalid type for parameter "cData", expected "string", got "${typeof c}"`);
					return
				}
				if (!J(c)) {
					l(`Invalid input for parameter "cData", got "${c}"`);
					return
				}
				c = c === void 0 ? null : c;
				let ae = "https://challenges.cloudflare.com",
					L = u(),
					T = C(L);
				d++, e.set(L, {
					idx: d,
					action: n,
					cData: c,
					cbSuccess: b,
					cbError: R,
					cbExpired: w,
					cbTimeout: _,
					params: t,
					isResetting: !1
				}), y.style.display = "none", y.style.border = "none", y.style.overflow = "hidden";
				let oe = "h/g/";
				if (y.setAttribute("src", `${ae}/cdn-cgi/challenge-platform/${oe}turnstile/if/ov2/av0/${L}/${p}/${t.theme}/${t.size}`), y.id = T, y.tabIndex = (G = t.tabindex) != null ? G : 0, y.title = "Widget containing a Cloudflare security challenge", a.appendChild(y), (q = t["response-field"]) != null ? q : !0) {
					let m = document.createElement("input");
					if (m.type = "hidden", m.name = (Y = t["response-field-name"]) != null ? Y : me, m.id = `${T}_response`, a.appendChild(m), typeof t["response-field-name"] != "string" && ve(p)) {
						let $ = document.createElement("input");
						$.type = "hidden", $.name = pe, $.id = `${T}_legacy_response`, a.appendChild($)
					}
				}
				if (k) {
					let m = document.createElement("input");
					m.type = "hidden", m.name = he, m.id = `${T}_g_response`, a.appendChild(m)
				}
				return T
			},
			reset: h,
			remove: v,
			getResponse(r) {
				if (typeof r == "undefined") {
					let a, s = -1;
					for (let [t, n] of e) s < n.idx && (a = t, s = n.idx);
					if (s === -1) {
						l("No widget found!");
						return
					}
					return e.get(a).response
				}
				let i = g(r);
				if (!i) {
					l(`Could not find widget for getResponse(${r})`);
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
		let g = e.getAttribute("data-theme");
		g && (S(g) ? o.theme = g : f(`Unknown data-theme value: "${g}"`));
		let h = e.getAttribute("data-size");
		h && (O(h) ? o.size = h : f(`Unknown data-size value: "${h}"`));
		let v = e.getAttribute("data-base-url");
		typeof v == "string" && (o["base-url"] = v);
		let r = e.getAttribute("data-action");
		typeof r == "string" && (o.action = r);
		let i = e.getAttribute("data-cdata");
		typeof i == "string" && (o.cData = i);
		let a = e.getAttribute("data-retry");
		a && (M(a) ? o.retry = a : f(`Unknown data-retry value: "${a}"`));
		let s = +e.getAttribute("data-retry-interval");
		s && (N(s) ? o["retry-interval"] = s : f(`Invalid data-retry-interval value: "${s}, expected an integer value > 0 and < 900000"`));
		let t = e.getAttribute("data-refresh-expired");
		t && (P(t) ? o["refresh-expired"] = t : f(`Unknown data-refresh-expired value: "${t}, expected either: never, auto or manual.`));
		let n = e.getAttribute("data-language");
		n && (W(n) ? o.language = n : f(`Invalid data-language value: "${n}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`));
		let c = e.getAttribute("data-error-callback");
		c && window[c] && (o["error-callback"] = window[c]);
		let p = e.getAttribute("data-callback");
		p && window[p] && (o.callback = window[p]);
		let b = e.getAttribute("data-expired-callback");
		b && window[b] && (o["expired-callback"] = window[b]);
		let w = e.getAttribute("data-timeout-callback");
		w && window[w] && (o["timeout-callback"] = window[w]);
		let _ = (E = e.getAttribute("data-response-field")) != null ? E : "true";
		o["response-field"] = _ === "true";
		let R = e.getAttribute("data-response-field-name");
		return R && (o["response-field-name"] = R), o
	}

	function Te() {
		let e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			d = document.currentScript;
		if (e.test(d.src)) return d;
		let o = document.getElementsByTagName("script");
		for (let u = 0; u < o.length; u++) {
			let g = o[u].src;
			if (e.test(g)) return o[u]
		}
	}

	function xe() {
		let e = Te();
		if (!e) return l("Could not find Turnstile script tag, some features may not be available"), null;
		(e.async || e.defer) && (ee = !0);
		let o = e.src.split("?");
		return o.length > 1 ? new URLSearchParams(o[1]) : new URLSearchParams
	}
	var x = xe();
	if (x) {
		let e = x.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? f("grecaptcha is already defined. The compatibility layer will not be enabled") : (f("Compatibility layer enabled"), k = !0, window.grecaptcha = F): e !== null && f(`Unknown value for api.js?compat: "${e}", ignoring`), x.forEach(function(o, u) {
			I(["onload", "compat", "render"], u) || f(`Unknown parameter passed to api.js: "?${u}=...", ignoring`)
		});
		let d = x.get("onload");
		d && setTimeout(function() {
			typeof window[d] == "function" && window[d]()
		}, 0)
	}
	var Ae = "turnstile" in window;
	Ae ? f("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = F, x.get("render") !== "explicit" && (document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(K, 0) : window.addEventListener("DOMContentLoaded", K)));
})();