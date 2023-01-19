(() => {
	function E(e, l) {
		return e.indexOf(l) !== -1
	}

	function S(e) {
		return E(["auto", "dark", "light"], e)
	}

	function N(e) {
		return E(["auto", "never"], e)
	}

	function P(e) {
		return e > 0 && e < 9e5
	}
	var oe = /^[0-9A-Za-z_-]{3,100}$/;

	function Y(e) {
		return oe.test(e)
	}
	var se = /^[a-z0-9_-]{0,32}$/i;

	function X(e) {
		return se.test(e)
	}
	var le = /^[a-z0-9_-]{0,255}$/i;

	function J(e) {
		return le.test(e)
	}

	function O(e) {
		return E(["normal", "compact", "invisible"], e)
	}

	function W(e) {
		return E(["auto", "manual", "never"], e)
	}
	var de = ".cf-turnstile",
		ce = ".cf-challenge",
		ue = ".g-recaptcha",
		fe = "cf_challenge_response",
		pe = "cf-turnstile-response",
		ge = "g-recaptcha-response",
		me = 8e3,
		_ = !1,
		Q = !1;

	function d(e) {
		let l = `[Cloudflare Turnstile] ${e}.`;
		throw console.error(l), new Error(l)
	}

	function p(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function he(e) {
		d(`Failed with code: ${e}`)
	}

	function D(e) {
		ne(e, "")
	}

	function ee() {
		let e = [de, ce];
		_ && e.push(ue);
		let l = document.querySelectorAll(e.join(", "));
		for (let o = 0; o < l.length; o++) T.render(l[o])
	}
	var te = [],
		re = !1;

	function K() {
		re = !0;
		for (let e of te) e();
		ee()
	}
	var A = "cf-chl-widget-";

	function Z(e) {
		return e.startsWith(A) ? e.substring(A.length) : null
	}

	function k(e) {
		return `${A}${e}`
	}

	function ne(e, l) {
		let o = document.getElementById(`${e}_response`);
		o !== null && (o.value = l);
		let u = document.getElementById(`${e}_legacy_response`);
		if (u !== null && (u.value = l), _) {
			let f = document.getElementById(`${e}_g_response`);
			f !== null && (f.value = l)
		}
	}

	function ye(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Ee(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Ie() {
		let e = window;
		for (; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e.location.href
	}
	var T = function() {
		let e = new Map,
			l = 0,
			o = function(r) {
				var t;
				let n = r.data;
				if (n.source !== "cloudflare-challenge") return;
				if (!ye(r)) {
					d("Ignored message from wrong origin: " + r.origin);
					return
				}
				if (!n.widgetId || !e.has(n.widgetId)) return;
				let a = k(n.widgetId),
					s = e.get(n.widgetId);
				switch (n.event) {
					case "init": {
						let i = document.getElementById(a);
						if (!i) {
							d(`Cannot initialize Widget, Element not found (#${a}).`);
							return
						}
						let c = n.mode,
							g = (t = s.params.size) != null ? t : "normal";
						switch (c) {
							case "non-interactive":
							case "managed":
								switch (g) {
									case "compact":
										i.style.width = "130px", i.style.height = "120px";
										break;
									case "invisible":
										d(`Invalid value for parameter "size", expected "${"compact"}" or "${"normal"}", got "${g}"`);
									case "normal":
										i.style.width = "300px", i.style.height = "65px";
										break
								}
								break;
							case "invisible":
								i.style.width = "0", i.style.height = "0", i.style.position = "absolute";
								break;
							default:
								d(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${c}"`);
								return
						}
						i.style.display = "";
						break
					}
					case "complete": {
						e.get(n.widgetId).response = n.token, ne(a, n.token);
						let i = s.cbSuccess;
						i && i(n.token);
						break
					}
					case "fail": {
						n.code && he(n.code), D(a);
						let i = s.cbError;
						i && i();
						break
					}
					case "tokenExpired": {
						let i = n.token,
							c = s.cbExpired;
						c && c(i), s.params["refresh-expired"] === "auto" && !s.isResetting && h(a);
						break
					}
					case "timeout": {
						D(a);
						let i = s.cbTimeout;
						i && i();
						break
					}
					case "refreshRequest": {
						h(n.widgetId);
						break
					}
					case "requestExtraParams": {
						let i = document.querySelector(`#${a}`);
						s.isResetting = !1, i.contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: n.widgetId,
							event: "extraParams",
							action: s.action,
							cData: s.cData,
							url: Ie(),
							retry: s.params.retry,
							"retry-interval": s.params["retry-interval"],
							"refresh-expired": s.params["refresh-expired"]
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
				let n = "abcdefghijklmnopqrstuvwxyz0123456789",
					a = n.length;
				for (let s = 0; s < 5; s++) r += n.charAt(Math.floor(Math.random() * a))
			} while (e.has(r));
			return r
		}

		function f(r) {
			if (typeof r == "string") {
				if (r.startsWith(A) && (r = Z(r)), e.has(r)) return r;
				try {
					let n = document.querySelector(r);
					return n ? f(n) : null
				} catch (n) {
					return null
				}
			}
			if (r instanceof HTMLElement) {
				let n = r.querySelector("iframe");
				return n ? Z(n.id) : null
			}
			return r || e.size === 0 ? null : e.keys().next().value
		}

		function h(r) {
			let n = f(r);
			if (!n) {
				d(`Nothing to reset found for ${r}`);
				return
			}
			let a = e.get(n);
			a && (a.isResetting = !0);
			let s = k(n),
				t = document.querySelector(`#${s}`);
			t.src += "", D(s)
		}

		function I(r) {
			let n = f(r);
			if (!n || !e.has(n)) {
				p(`Nothing to remove found for ${r}`);
				return
			}
			let a = k(n),
				s = [`iframe#${a}`, `input#${a}_response`, `input#${a}_legacy_response`, `input#${a}_g_response`],
				t = document.querySelectorAll(s.join(", "));
			for (let i = 0; i < t.length; ++i) t[i].remove();
			e.delete(n)
		}
		return {
			implicitRender: ee,
			ready(r) {
				if (Q) throw p("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), new Error("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().");
				if (typeof r != "function" && d(`turnstile.ready() expected a "function" argument, got "${typeof r}"`), re) {
					r();
					return
				}
				te.push(r)
			},
			render(r, n) {
				var H, z, U, V, B, j, G, q;
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
					} let s = ve(a),
					t = Object.assign(s, n),
					{
						action: i,
						cData: c
					} = t,
					g = t.sitekey;
				t.theme = (H = t.theme) != null ? H : "auto", t.retry = (z = t.retry) != null ? z : "auto", t["retry-interval"] = (U = t["retry-interval"]) != null ? U : me, t.size = (V = t.size) != null ? V : "normal";
				let v = t.callback,
					L = t["expired-callback"],
					x = t["timeout-callback"],
					R = t["error-callback"];
				if (typeof g != "string") {
					d(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof g}"`);
					return
				}
				if (!Y(g)) {
					d(`Invalid input for parameter "sitekey", got "${g}"`);
					return
				}
				if (!O(t.size)) {
					d(`Invalid type for parameter "size", expected normal|compact, got "${t.size}" ${typeof t.size}`);
					return
				}
				if (!S(t.theme)) {
					d(`Invalid type for parameter "theme", expected dark|light|auto, got "${t.theme}" ${typeof t.theme}`);
					return
				}
				if (!N(t.retry)) {
					d(`Invalid type for parameter "retry", expected never|auto, got "${t.retry}" ${typeof t.retry}`);
					return
				}
				if (!P(t["retry-interval"])) {
					p(`Invalid data-retry-interval value: "${t["retry-interval"]}, expected an integer value > 0 and < 900000"`);
					return
				}
				let $ = (B = t["refresh-expired"]) != null ? B : "auto";
				if (W($)) t["refresh-expired"] = $;
				else {
					d(`Invalid type for parameter "refressh-expired", expected never|manual|auto, got "${$}" ${typeof $}`);
					return
				}
				let F = a.getElementsByTagName("iframe")[0];
				F && F.id.startsWith(A) && I(a);
				let y = document.createElement("iframe");
				if (i !== void 0 && typeof i != "string") {
					d(`Invalid type for parameter "action", expected "string", got "${typeof i}"`);
					return
				}
				if (i = i === void 0 ? null : i, !X(i)) {
					d(`Invalid input for parameter "action", got "${i}"`);
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
				let ie = "https://challenges.cloudflare.com",
					M = u(),
					b = k(M);
				l++, e.set(M, {
					idx: l,
					action: i,
					cData: c,
					cbSuccess: v,
					cbError: R,
					cbExpired: L,
					cbTimeout: x,
					params: t,
					isResetting: !1
				}), y.style.display = "none", y.style.border = "none", y.style.overflow = "hidden";
				let ae = "h/g/";
				if (y.setAttribute("src", `${ie}/cdn-cgi/challenge-platform/${ae}turnstile/if/ov2/av0/${M}/${g}/${t.theme}/${t.size}`), y.id = b, y.tabIndex = (j = t.tabindex) != null ? j : 0, y.title = "Widget containing a Cloudflare security challenge", a.appendChild(y), (G = t["response-field"]) != null ? G : !0) {
					let m = document.createElement("input");
					if (m.type = "hidden", m.name = (q = t["response-field-name"]) != null ? q : pe, m.id = `${b}_response`, a.appendChild(m), typeof t["response-field-name"] != "string" && Ee(g)) {
						let C = document.createElement("input");
						C.type = "hidden", C.name = fe, C.id = `${b}_legacy_response`, a.appendChild(C)
					}
				}
				if (_) {
					let m = document.createElement("input");
					m.type = "hidden", m.name = ge, m.id = `${b}_g_response`, a.appendChild(m)
				}
				return b
			},
			reset: h,
			remove: I,
			getResponse(r) {
				if (typeof r == "undefined") {
					let a, s = -1;
					for (let [t, i] of e) s < i.idx && (a = t, s = i.idx);
					if (s === -1) {
						d("No widget found!");
						return
					}
					return e.get(a).response
				}
				let n = f(r);
				if (!n) {
					d(`Could not find widget for getResponse(${r})`);
					return
				}
				return e.get(n).response
			}
		}
	}();

	function ve(e) {
		var R;
		let o = {
				sitekey: e.getAttribute("data-sitekey")
			},
			u = e.getAttribute("data-tabindex");
		u && (o.tabindex = parseInt(u, 10));
		let f = e.getAttribute("data-theme");
		f && (S(f) ? o.theme = f : p(`Unknown data-theme value: "${f}"`));
		let h = e.getAttribute("data-size");
		h && (O(h) ? o.size = h : p(`Unknown data-size value: "${h}"`));
		let I = e.getAttribute("data-base-url");
		typeof I == "string" && (o["base-url"] = I);
		let r = e.getAttribute("data-action");
		typeof r == "string" && (o.action = r);
		let n = e.getAttribute("data-cdata");
		typeof n == "string" && (o.cData = n);
		let a = e.getAttribute("data-retry");
		a && (N(a) ? o.retry = a : p(`Unknown data-retry value: "${a}"`));
		let s = +e.getAttribute("data-retry-interval");
		s && (P(s) ? o["retry-interval"] = s : p(`Invalid data-retry-interval value: "${s}, expected an integer value > 0 and < 900000"`));
		let t = e.getAttribute("data-refresh-expired");
		t && (W(t) ? o["refresh-expired"] = t : p(`Unknown data-refresh-expired value: "${t}, expected either: never, auto or manual.`));
		let i = e.getAttribute("data-error-callback");
		i && window[i] && (o["error-callback"] = window[i]);
		let c = e.getAttribute("data-callback");
		c && window[c] && (o.callback = window[c]);
		let g = e.getAttribute("data-expired-callback");
		g && window[g] && (o["expired-callback"] = window[g]);
		let v = e.getAttribute("data-timeout-callback");
		v && window[v] && (o["timeout-callback"] = window[v]);
		let L = (R = e.getAttribute("data-response-field")) != null ? R : "true";
		o["response-field"] = L === "true";
		let x = e.getAttribute("data-response-field-name");
		return x && (o["response-field-name"] = x), o
	}

	function be() {
		let e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			l = document.currentScript;
		if (e.test(l.src)) return l;
		let o = document.getElementsByTagName("script");
		for (let u = 0; u < o.length; u++) {
			let f = o[u].src;
			if (e.test(f)) return o[u]
		}
	}

	function we() {
		let e = be();
		if (!e) return d("Could not find Turnstile script tag, some features may not be available"), null;
		(e.async || e.defer) && (Q = !0);
		let o = e.src.split("?");
		return o.length > 1 ? new URLSearchParams(o[1]) : new URLSearchParams
	}
	var w = we();
	if (w) {
		let e = w.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? p("grecaptcha is already defined. The compatibility layer will not be enabled") : (p("Compatibility layer enabled"), _ = !0, window.grecaptcha = T): e !== null && p(`Unknown value for api.js?compat: "${e}", ignoring`), w.forEach(function(o, u) {
			E(["onload", "compat", "render"], u) || p(`Unknown parameter passed to api.js: "?${u}=...", ignoring`)
		});
		let l = w.get("onload");
		l && setTimeout(function() {
			typeof window[l] == "function" && window[l]()
		}, 0)
	}
	var Te = "turnstile" in window;
	Te ? p("Turnstile already has been loaded. Is Turnstile imported multiple times?") : ("Proxy" in window ? window.cfChallengeAPI = new Proxy(T, {
		get(e, l) {
			return p("window.cfChallengeAPI is deprecated, please move to window.turnstile"), e[l]
		}
	}) : window.cfChallengeAPI = T, window.turnstile = T, w.get("render") !== "explicit" && (document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(K, 0) : window.addEventListener("DOMContentLoaded", K)));
})();