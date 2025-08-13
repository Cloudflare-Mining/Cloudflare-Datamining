! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e8232940-b2f2-5e88-8ffd-7dd7eac56117")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				J8: function() {
					return i
				},
				Jd: function() {
					return m
				},
				QY: function() {
					return p
				},
				Qw: function() {
					return c
				},
				ki: function() {
					return u
				},
				wz: function() {
					return O
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/utils/url.ts"),
				s = t("../../../../node_modules/query-string/query-string.js"),
				d = t.n(s),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				v;
			const c = () => Object.keys(a.Z).reduce((h, l) => (l.indexOf("cf_beta.") === 0 && a.Z.get(l) === "true" && h.push(l.split(".").slice(1).join(".")), h), []),
				u = () => {
					var h, l, C;
					return ((h = window) === null || h === void 0 || (l = h.bootstrap) === null || l === void 0 || (C = l.data) === null || C === void 0 ? void 0 : C.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((v = window) === null || v === void 0 ? void 0 : v.location) && a.Z) {
				const h = d().parse(window.location.search);
				h.beta_on && a.Z.set(`cf_beta.${h.beta_on}`, !0), h.beta_off && a.Z.set(`cf_beta.${h.beta_off}`, !1)
			}
			const _ = {},
				n = h => {
					var l, C, f;
					return Object.prototype.hasOwnProperty.call(_, h) ? _[h] : ((l = window) === null || l === void 0 || (C = l.bootstrap) === null || C === void 0 || (f = C.data) === null || f === void 0 ? void 0 : f.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(w => w === h) ? (_[h] = !0, !0) : (_[h] = !1, !1)
				},
				r = h => a.Z ? a.Z.get(`cf_beta.${h}`) === !0 : !1,
				i = h => r(h) || n(h),
				g = () => !0,
				m = () => {
					var h, l, C;
					return ((h = window) === null || h === void 0 || (l = h.bootstrap) === null || l === void 0 || (C = l.data) === null || C === void 0 ? void 0 : C.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				p = h => {
					const l = (0, e.uF)(h),
						C = (l == null ? void 0 : l.roles) || [];
					return (0, o.qR)(location.pathname) && C.length === 1 && C.some(f => f === "Administrator Read Only")
				},
				b = () => {
					var h, l, C;
					return ((h = window) === null || h === void 0 || (l = h.location) === null || l === void 0 || (C = l.origin) === null || C === void 0 ? void 0 : C.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				O = () => b() === "fed"
		},
		"../functions/utils/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				b1: function() {
					return e
				}
			});
			const e = "CF_dash_version",
				o = "cf_fv_preview",
				s = "cf_pv",
				d = "current",
				a = "hash",
				v = "deploymentPreview",
				c = "fragmentPreview",
				u = r => r === d ? _() : n(),
				_ = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				n = (r = 72) => {
					const i = 36e5;
					return new Date(Date.now() + r * i)
				}
		},
		"../functions/utils/preview-deploy-helpers.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				E9: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/zod/lib/index.mjs");

			function o(h) {
				for (var l = 1; l < arguments.length; l++) {
					var C = arguments[l] != null ? Object(arguments[l]) : {},
						f = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(C).filter(function(w) {
						return Object.getOwnPropertyDescriptor(C, w).enumerable
					})), f.forEach(function(w) {
						s(h, w, C[w])
					})
				}
				return h
			}

			function s(h, l, C) {
				return l = d(l), l in h ? Object.defineProperty(h, l, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[l] = C, h
			}

			function d(h) {
				var l = a(h, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function a(h, l) {
				if (typeof h != "object" || h === null) return h;
				var C = h[Symbol.toPrimitive];
				if (C !== void 0) {
					var f = C.call(h, l || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(h)
			}
			const v = e.z.string().regex(/^(((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))|canary)$/g),
				c = e.z.string().regex(/^[a-zA-Z0-9]{8}$/),
				u = e.z.string(),
				_ = e.z.union([e.z.string().regex(/^[a-zA-Z0-9]{8}$/), e.z.literal("current")]),
				n = e.z.record(u, _),
				r = e.z.enum(["live", "previews", "canary"]),
				i = (h, l) => {
					const C = h.data.cookies[l],
						f = {
							[PREVIEW_VERSIONING_COOKIE]: v,
							[DEPLOYMENT_VERSION_COOKIE]: c
						};
					try {
						return f[l].parse(C)
					} catch {
						return null
					}
				},
				g = h => {
					try {
						return decodeURIComponent(h).split(",").reduce((l, C) => {
							const f = C.split(":"),
								w = u.parse(f[0]),
								k = _.parse(f[1]);
							return o({}, l, {
								[w]: k
							})
						}, {})
					} catch {
						return {}
					}
				},
				m = h => {
					const l = h.data.cookies[FRAGMENT_VERSIONING_PREVIEW_COOKIE],
						C = g(l);
					try {
						return n.parse(C)
					} catch {
						return null
					}
				},
				p = h => {
					const l = v.parse(h),
						[C, ...f] = l.split("-"),
						w = f.join("-");
					return {
						projectType: C,
						deploymentId: w
					}
				},
				b = (h, l) => {
					if (!l) return "";
					try {
						var C;
						const {
							projectType: f,
							deploymentId: w
						} = p(l), k = {
							live: h.env.PAGES_WORKERS_LIVE_HOST,
							previews: h.env.PAGES_WORKERS_PREVIEW_HOST
						}, {
							hostname: A,
							pathname: I,
							search: D
						} = new URL(h.request.url), y = A == null || (C = A.split(".")) === null || C === void 0 ? void 0 : C[0];
						if (w && w !== y && r.safeParse(f).success) {
							const P = k[f];
							return `https://${w}.${P}${I}${D}`
						}
					} catch (f) {
						console.log(f)
					}
					return ""
				},
				O = (h, l) => {
					if (!l) return "";
					try {
						var C;
						const f = h.env.PAGES_WORKERS_LIVE_HOST,
							{
								hostname: w,
								pathname: k,
								search: A
							} = new URL(h.request.url),
							I = w == null || (C = w.split(".")) === null || C === void 0 ? void 0 : C[0],
							{
								deploymentSHA: D
							} = parsePagesDevUrl(h.env.CF_PAGES_URL),
							y = h.request.headers.get("sec-fetch-dest") === "document";
						if (l && l !== I && l !== D && !y) return `https://${l}.${f}${k}${A}`
					} catch (f) {
						console.log(f)
					}
					return ""
				}
		},
		"../init.ts": function(j, E, t) {
			"use strict";
			t.r(E);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				s = t("../libs/init/initGlobal.ts"),
				d = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				a = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function v(B) {
				for (var q = 1; q < arguments.length; q++) {
					var ae = arguments[q] != null ? Object(arguments[q]) : {},
						pe = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(ae).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(ae, Ee).enumerable
					})), pe.forEach(function(Ee) {
						c(B, Ee, ae[Ee])
					})
				}
				return B
			}

			function c(B, q, ae) {
				return q = u(q), q in B ? Object.defineProperty(B, q, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[q] = ae, B
			}

			function u(B) {
				var q = _(B, "string");
				return typeof q == "symbol" ? q : String(q)
			}

			function _(B, q) {
				if (typeof B != "object" || B === null) return B;
				var ae = B[Symbol.toPrimitive];
				if (ae !== void 0) {
					var pe = ae.call(B, q || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (q === "string" ? String : Number)(B)
			}
			const n = B => {
				const q = B && B.headers || {},
					ae = new Headers(q);
				return ae.append("X-Cross-Site-Security", "dash"), v({}, B, {
					headers: ae
				})
			};
			(0, a.register)({
				request: (B, q) => {
					try {
						return new URL(B), B === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", q] : [B, q]
					} catch {
						var ae, pe;
						return typeof B == "object" && ((ae = B) === null || ae === void 0 || (pe = ae.url) === null || pe === void 0 ? void 0 : pe.startsWith("https://platform.dash.cloudflare.com/map-tiles/")) ? [B, q] : [B, n(q)]
					}
				}
			});
			var r = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				i = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				g = t("../react/app/providers/storeContainer.js");
			let m = "";
			const p = 61;

			function b(B) {
				const q = B.substr(1);
				if (q && m !== q) {
					const ae = document.getElementById(q);
					if (ae) {
						const pe = ae.getBoundingClientRect().top;
						if (pe > 0) {
							const Ee = pe - p;
							document.documentElement.scrollTop = Ee
						}
					}
				}
				m = q
			}

			function O(B) {
				B.listen(q => b(q.hash))
			}
			var h = t("../../../../node_modules/cookie/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				C = t("../functions/utils/constants.ts");
			const f = B => {
					switch (B) {
						case 429:
							return {
								title: "Rate Limit Exceeded", description: 'This IP address has been rate limited. Please wait one minute and then <a href="">reload this page</a> to try again. If the issue persists, please visit the <a href="https://cloudflarestatus.com">Cloudflare Status page</a> for up-to-date information regarding any ongoing issues.'
							};
						case 503:
							return {
								title: "The Cloudflare Dashboard is temporarily under maintenance.", description: 'Please visit the <a href="https://www.cloudflarestatus.com/incidents/5xxwjqd2lwgp">Cloudflare Status page</a> for up-to-date information regarding the maintenance.'
							};
						default:
							return {
								title: "The Cloudflare Dashboard is temporarily unavailable.", description: 'Please <a href="">reload this page</a> to try again. If the issue persists, please visit the <a href="https://cloudflarestatus.com">Cloudflare Status page</a> for up-to-date information regarding any ongoing issues.'
							}
					}
				},
				w = (B, q = !1) => {
					var ae;
					const pe = f(B),
						Ee = `
  <style type="text/css">
    #loading-state {
      display: flex;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
    }
    .dark-mode body {
      background-color: #0a0a0a;
      color: #d9d9d9;
    }
    .error-container {
      line-height: 1.5;
      font-size: 20px;
      padding: 32px;
    }
    .error-container a {
      color: inherit;
      text-decoration: underline;
    }
    .error-container h1 {
      line-height: 1.5;
      font-size: inherit;
      font-weight: 600;
      margin: 0 auto 16px;
    }
    .error-container p {
      margin: 0;
      max-width: 37.5rem;
    }
    .error-container svg {
      width: 128px;
      margin-bottom: 16px;
    }
  </style>
  <div class="error-container">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1230.574 519.774" xml:space="preserve">
      <path fill="#F78100" d="M784.025,512.011l5.872-20.311c6.998-24.169,4.394-46.511-7.349-62.926c-10.801-15.122-28.804-24.022-50.666-25.056l-414.114-5.281c-2.788-0.147-5.096-1.403-6.518-3.471c-1.44-2.123-1.773-4.856-0.886-7.478c1.366-4.08,5.41-7.164,9.62-7.349l417.954-5.299c49.576-2.271,103.252-42.505,122.048-91.564l23.837-62.28c0.657-1.696,0.952-3.493,0.94-5.294c-0.007-0.984-0.078-1.969-0.294-2.94C857.383,91.028,748.758,0,618.863,0c-119.685,0-221.312,77.254-257.76,184.623c-23.523-17.652-53.62-27.031-85.969-23.801c-57.423,5.706-103.565,51.94-109.271,109.363c-1.496,14.901-0.277,29.284,3.158,42.8C75.222,315.718,0,392.566,0,487.029c0,8.549,0.646,16.95,1.846,25.166c0.591,3.988,3.952,6.98,7.977,6.98l764.527,0.092c0.076,0,0.142-0.034,0.218-0.036C778.942,519.134,782.79,516.24,784.025,512.011z"/>
      <path fill="#FBAC42" d="M921.982,225.558c-3.841,0-7.663,0.111-11.466,0.295c-0.628,0.033-1.224,0.185-1.796,0.385c-1.985,0.696-3.566,2.305-4.168,4.397l-16.286,56.242c-6.998,24.169-4.395,46.493,7.349,62.907c10.801,15.14,28.804,24.022,50.665,25.056l88.277,5.299c2.604,0.129,4.893,1.385,6.297,3.416c1.477,2.142,1.809,4.893,0.923,7.515c-1.385,4.081-5.41,7.164-9.601,7.349l-91.73,5.299c-49.798,2.29-103.473,42.505-122.27,91.564l-6.629,17.319c-1.206,3.134,1.039,6.472,4.354,6.635c0.084,0.004,0.159,0.031,0.244,0.031h315.626c3.766,0,7.127-2.456,8.142-6.075c5.484-19.498,8.402-40.048,8.402-61.301C1148.315,326.889,1046.984,225.558,921.982,225.558z"/>
    </svg>
    <h1 id="error-title">${pe.title}</h1>
    <p id="error-description">${pe.description}</p>
  </div>
  `,
						De = q ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${l.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(ae=window.build)===null||ae===void 0?void 0:ae.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return Ee + De
				},
				k = B => {
					var q;
					const ae = document.getElementById(B);
					!ae || (q = ae.parentNode) === null || q === void 0 || q.removeChild(ae)
				};

			function A() {
				const B = document.getElementById("loading-state");
				B == null || B.classList.add("hide"), B == null || B.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(k)
				})
			}

			function I(B) {
				var q;
				const ae = document.getElementById("loading-state"),
					pe = !!((q = h.parse(document.cookie)) === null || q === void 0 ? void 0 : q[C.b1]);
				!ae || (ae.innerHTML = w(B == null ? void 0 : B.code, pe))
			}
			var D = t("../utils/initStyles.ts"),
				y = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				P = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				S = t("../react/common/selectors/languagePreferenceSelector.ts"),
				M = t("../flags.ts"),
				F = t("../utils/getDashVersion.ts");
			const ne = (0, M.wz)() ? "https://1e812cb0fae1f46a92ecdb5db1623f92@sentry10.cfdata.org/1930" : "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				te = !0,
				re = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				z = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var N = t("../utils/sentry/lastSentEventId.ts"),
				R = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				K = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const U = B => {
				const q = async ae => {
					var pe, Ee;
					const De = {
						envelope: ae.body,
						url: B.url,
						isPreviewDeploy: (pe = window) === null || pe === void 0 || (Ee = pe.build) === null || Ee === void 0 ? void 0 : Ee.isPreviewDeploy,
						release: (0, F.t)()
					};
					try {
						const Pe = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(De)
						});
						return {
							statusCode: Pe.status,
							headers: {
								"x-sentry-rate-limits": Pe.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": Pe.headers.get("Retry-After")
							}
						}
					} catch (Pe) {
						return console.log(Pe), (0, K.$2)(Pe)
					}
				};
				return R.q(B, q)
			};
			var G = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				H = t("../../../../node_modules/history/esm/history.js"),
				$ = (0, H.lX)(),
				J = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				L = t("../react/utils/url.ts");
			const W = (0, J.Rf)();
			let X;

			function ie(B) {
				return V(B, "react-router-v5")
			}

			function V(B, q) {
				return (ae, pe = !0, Ee = !0) => {
					pe && W && W.location && (X = ae({
						name: (0, L.Fl)(W.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": q
						}
					})), Ee && B.listen && B.listen((De, Pe) => {
						if (Pe && (Pe === "PUSH" || Pe === "POP")) {
							X && X.finish();
							const Je = {
								"routing.instrumentation": q
							};
							X = ae({
								name: (0, L.Fl)(De.pathname),
								op: "navigation",
								tags: Je
							})
						}
					})
				}
			}
			var oe = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ge = t.n(oe),
				we = t("../../../common/intl/intl-core/src/errors.ts"),
				se = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Ce = t("../react/common/middleware/sparrow/errors.ts");

			function Ae(B, q, ae) {
				return q = xe(q), q in B ? Object.defineProperty(B, q, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[q] = ae, B
			}

			function xe(B) {
				var q = $e(B, "string");
				return typeof q == "symbol" ? q : String(q)
			}

			function $e(B, q) {
				if (typeof B != "object" || B === null) return B;
				var ae = B[Symbol.toPrimitive];
				if (ae !== void 0) {
					var pe = ae.call(B, q || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (q === "string" ? String : Number)(B)
			}
			class Le {
				constructor() {
					Ae(this, "name", Le.id)
				}
				setupOnce() {
					t.g.console && (0, se.hl)(t.g.console, "error", q => (...ae) => {
						const pe = ae.find(Ee => Ee instanceof Error);
						if (ne && pe) {
							let Ee, De = !0;
							if (pe instanceof Ce.ez) {
								const Pe = pe instanceof Ce.oV ? pe.invalidProperties : void 0;
								Ee = {
									tags: {
										"sparrow.eventName": pe.eventName
									},
									extra: {
										sparrow: {
											eventName: pe.eventName,
											invalidProperties: Pe
										}
									},
									fingerprint: [pe.name ? pe.name : "SparrowValidationError"]
								}, De = !1
							} else if (pe instanceof oe.SparrowIdCookieError) Ee = {
								extra: {
									sparrowIdCookie: pe.cookie
								},
								fingerprint: [pe.name ? pe.name : "SparrowIdCookieError"]
							};
							else if (pe.name === "ChunkLoadError") {
								Ee = {
									fingerprint: [pe.name]
								};
								try {
									Ee.tags = {
										chunkId: pe.message.split(" ")[2],
										chunkUrl: pe.request
									}
								} catch {}
							} else pe instanceof we.YB && (Ee = {
								fingerprint: ["TranslatorError", pe.translationKey]
							});
							De && r.Tb(pe, Ee)
						}
						typeof q == "function" && q.apply(t.g.console, ae)
					})
				}
			}
			Ae(Le, "id", "ConsoleErrorIntegration");
			var et = null,
				Ve = t("../react/common/utils/getEnvironment.ts");
			const ot = () => {
					if (ne && te) {
						var B, q, ae, pe, Ee, De, Pe, Je, ct, ke;
						const gt = (0, Ve.Z)();
						let St = "production";
						((B = window) === null || B === void 0 || (q = B.build) === null || q === void 0 ? void 0 : q.isPreviewDeploy) && (St += "-preview"), gt === "canary" && (St = "canary"), P.S({
							dsn: ne,
							release: (0, F.t)(),
							environment: St,
							ignoreErrors: z,
							allowUrls: re,
							autoSessionTracking: !1,
							integrations: yt => [...yt.filter(nn => nn.name !== "GlobalHandlers" && nn.name !== "TryCatch"), new Le, new G.jK.BrowserTracing({
								routingInstrumentation: ie($)
							})],
							tracesSampleRate: 0,
							transport: U,
							beforeSend: yt => (N.e.setEventId(yt.event_id), yt)
						});
						const $t = (0, g.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, M.Qw)(),
							USER_BETA_FLAGS: (0, M.ki)(),
							meta: {
								connection: {
									type: (ae = window) === null || ae === void 0 || (pe = ae.navigator) === null || pe === void 0 || (Ee = pe.connection) === null || Ee === void 0 ? void 0 : Ee.effectiveType,
									bandwidth: (De = window) === null || De === void 0 || (Pe = De.navigator) === null || Pe === void 0 || (Je = Pe.connection) === null || Je === void 0 ? void 0 : Je.downlink
								},
								languagePreference: (0, S.r)($t),
								isPreviewDeploy: (ct = window) === null || ct === void 0 || (ke = ct.build) === null || ke === void 0 ? void 0 : ke.isPreviewDeploy
							},
							utilGates: (0, y.T2)($t)
						}), window.addEventListener("unhandledrejection", function(yt) {})
					}
				},
				ze = B => {
					B ? r.av({
						id: B
					}) : r.av(null)
				};
			var Q = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				je = () => {
					let B;
					try {
						B = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), B = window.location.search
					}
					if (!B.includes("remote[")) return;
					const q = new URLSearchParams(B),
						ae = {};
					for (let [pe, Ee] of q) pe.includes("remote") && (ae[pe.replace(/remote\[|\]/g, "")] = Ee);
					Q.Z.set("mfe-remotes", JSON.stringify(ae))
				},
				Ue = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				tt = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const at = "ANON_USER_ID";

			function mt() {
				var B, q, ae, pe;
				let Ee = (B = t.g) === null || B === void 0 || (q = B.bootstrap) === null || q === void 0 || (ae = q.data) === null || ae === void 0 || (pe = ae.user) === null || pe === void 0 ? void 0 : pe.id;
				if (!Ee) {
					let De = Q.Z.get(at);
					if (!De) {
						let Pe = (0, tt.Z)();
						Q.Z.set(at, Pe), De = Pe
					}
					return De
				}
				return Ee
			}
			async function Ie() {
				const B = (0, g.bh)();
				B.dispatch((0, Ue.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await B.dispatch((0, y.UL)({
					userId: mt()
				}))
			}
			class nt extends Error {
				constructor(q, ae) {
					super(ae);
					this.name = `${q} ${ae}`
				}
			}
			const ee = () => {
					document.cookie.split(";").forEach(q => {
						const [ae] = q.trim().split("=");
						document.cookie = `${ae}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				ce = async () => {
					let B = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!B.ok) throw B.headers.get("content-type") === "text/html" && (await B.text()).toLowerCase().includes("cookie too large") && (r.$e(function(Ee) {
						Ee.setTag("init", "cookieTooLarge"), r.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), ee(), window.location.reload()), new nt("Bootstrap API Failure", B == null ? void 0 : B.status);
					return (await B.json()).result.data
				};
			var fe = t("webpack/sharing/consume/default/react/react"),
				Be = t.n(fe),
				Re = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				He = t("webpack/sharing/consume/default/react-dom/react-dom"),
				Ze = t("webpack/sharing/consume/default/react-redux/react-redux"),
				ft = t("../../../../node_modules/swr/core/dist/index.mjs"),
				vt = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				Wt = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				kt = t("../react/shims/focus-visible.js"),
				bt = t("../react/app/components/DeepLink/index.ts"),
				_t = t("../../../../node_modules/prop-types/index.js"),
				Ke = t.n(_t),
				it = t("../react/utils/translator.tsx"),
				ht = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				Se = t("../../../dash/intl/intl-translations/src/index.ts"),
				dt = t("../../../../node_modules/query-string/query-string.js"),
				lt = t.n(dt),
				Ot = t("../react/common/actions/userActions.ts"),
				Y = t("../react/common/selectors/userSelectors.ts"),
				ue = t("../react/utils/i18n.ts"),
				ye = t("../react/utils/bootstrap.ts"),
				he = t("../../../../node_modules/react/jsx-runtime.js");

			function Me(B) {
				for (var q = 1; q < arguments.length; q++) {
					var ae = arguments[q] != null ? Object(arguments[q]) : {},
						pe = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(ae).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(ae, Ee).enumerable
					})), pe.forEach(function(Ee) {
						Qe(B, Ee, ae[Ee])
					})
				}
				return B
			}

			function Qe(B, q, ae) {
				return q = ut(q), q in B ? Object.defineProperty(B, q, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[q] = ae, B
			}

			function ut(B) {
				var q = zt(B, "string");
				return typeof q == "symbol" ? q : String(q)
			}

			function zt(B, q) {
				if (typeof B != "object" || B === null) return B;
				var ae = B[Symbol.toPrimitive];
				if (ae !== void 0) {
					var pe = ae.call(B, q || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (q === "string" ? String : Number)(B)
			}
			let Xe = lt().parse(location.search);
			const Mt = B => {
					const q = (0, ye.$8)() ? [(0, Se.Fy)(Se.if.changes), (0, Se.Fy)(Se.if.common), (0, Se.Fy)(Se.if.navigation), (0, Se.Fy)(Se.if.overview), (0, Se.Fy)(Se.if.onboarding), (0, Se.Fy)(Se.if.invite), (0, Se.Fy)(Se.if.login), (0, Se.Fy)(Se.if.dns), (0, Se.Fy)(Se.n4.ssl_tls), (0, Se.Fy)(Se.if.message_inbox), (0, Se.Fy)(Se.if.welcome)] : [(0, Se.Fy)(Se.if.common), (0, Se.Fy)(Se.if.invite), (0, Se.Fy)(Se.if.login), (0, Se.Fy)(Se.if.onboarding)];
					Xe.lang ? xt(B) : Q.Z.get(ue.th) && Tt(B, (0, ue.Kd)());
					const ae = async pe => (await Promise.all(q.map(De => De(pe)))).reduce((De, Pe) => Me({}, De, Pe), {});
					return (0, he.jsx)(ht.LocaleContext.Provider, {
						value: B.languagePreference,
						children: (0, he.jsx)(ht.I18nProvider, {
							translator: it.Vb,
							locale: B.languagePreference,
							children: (0, he.jsx)(ht.I18nLoader, {
								loadPhrases: ae,
								children: B.children
							})
						})
					})
				},
				xt = async B => {
					let q = Xe.lang.substring(0, Xe.lang.length - 2) + Xe.lang.substring(Xe.lang.length - 2, Xe.lang.length).toUpperCase();
					if (!(0, S.v)(q)) {
						console.warn(`${q} is not a supported locale.`), delete Xe.lang, B.history.replace({
							search: lt().stringify(Xe)
						});
						return
					}(0, ue.i_)(q), delete Xe.lang, Tt(B, q), B.isAuthenticated || B.history.replace({
						search: lt().stringify(Xe)
					})
				}, Tt = async (B, q) => {
					if (B.isAuthenticated) try {
						await B.setUserCommPreferences({
							"language-locale": q
						}, {
							hideErrorAlert: !0
						}), Q.Z.remove(ue.th), B.history.replace({
							search: lt().stringify(Xe)
						})
					} catch (ae) {
						Q.Z.set(ue.th, !0), console.error(ae)
					} else Q.Z.set(ue.th, !0)
				}, Rt = B => {
					const q = (0, Y.PR)(B);
					return {
						isAuthenticated: !!(q && q.id),
						languagePreference: (0, ue.Kd)() || (0, S.r)(B)
					}
				}, Nt = {
					setUserCommPreferences: Ot.V_
				};
			var Bt = (0, Re.withRouter)((0, Ze.connect)(Rt, Nt)(Mt));
			Mt.propTypes = {
				history: Ke().object,
				languagePreference: Ke().string.isRequired,
				children: Ke().node.isRequired,
				isAuthenticated: Ke().bool,
				setUserCommPreferences: Ke().func.isRequired
			};
			var Ct = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				jt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let It;
			const Kt = ({
				selectorPrefix: B = "c_"
			} = {}) => (It || (It = (0, jt.Z)({
				dev: !1,
				selectorPrefix: B
			})), It);
			var Ht = t("../react/common/out.css"),
				Ut = t("../react/common/components/ModalManager.tsx"),
				Gt = t("../react/app/components/ErrorBoundary.tsx"),
				Vt = t("../react/common/actions/notificationsActions.ts");
			const At = (t.g.bootstrap || {}).data || {};
			class T extends Be().Component {
				componentDidMount() {
					At.messages && this.dispatchNotificationActions(At.messages)
				}
				dispatchNotificationActions(q) {
					q.forEach(ae => {
						const {
							type: pe,
							message: Ee,
							persist: De
						} = ae;
						["success", "info", "warn", "error"].includes(pe) && this.props.notifyAdd(pe, (0, it.ZP)(Ee), {
							persist: !!De
						})
					})
				}
				render() {
					return null
				}
			}
			var me = (0, Re.withRouter)((0, Ze.connect)(null, {
				notifyAdd: Vt.add
			})(T));
			T.propTypes = {
				notifyAdd: Ke().func.isRequired
			};
			var Te = t("../react/app/redux/index.ts");

			function We() {
				var B;
				const q = (0, Te.p4)(Y.PR),
					ae = (q == null || (B = q.email) === null || B === void 0 ? void 0 : B.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					pe = (0, Ue.Yc)();
				(0, fe.useEffect)(() => {
					pe({
						userType: ae
					})
				}, [ae, pe])
			}
			var rt = t("../react/common/selectors/entitlementsSelectors.ts"),
				pt = t("../react/common/selectors/accountSelectors.ts");
			const Pt = ["accountId", "is_ent"];

			function Et() {
				const B = (0, Ue.f7)(),
					q = (0, Re.useHistory)(),
					ae = (0, L.uW)(q.location.pathname),
					pe = (0, Ue.Yc)(),
					Ee = (0, Ue.O$)(),
					De = (0, Te.p4)(rt.u1),
					Pe = !De.isRequesting && !!De.data,
					Je = (0, Te.p4)(rt.p1),
					ct = (0, Te.p4)(pt.Xu),
					ke = (0, Te.p4)(pt.uF),
					gt = !ct.isRequesting && !!ct.data;
				(0, fe.useEffect)(() => {
					if (ae && gt && ke && Pe && ae === ke.account.id) {
						var St, $t, yt, Jt;
						pe({
							accountId: ke.account.id,
							is_ent: Je || (ke == null || (St = ke.account.meta) === null || St === void 0 ? void 0 : St.has_enterprise_zones),
							is_free_account: !Je && !(ke == null || ($t = ke.account.meta) === null || $t === void 0 ? void 0 : $t.has_business_zones) && !(ke == null || (yt = ke.account.meta) === null || yt === void 0 ? void 0 : yt.has_pro_zones) && !(ke == null || (Jt = ke.account.meta) === null || Jt === void 0 ? void 0 : Jt.has_enterprise_zones)
						})
					} else(!ae || ae in B && B.accountId !== ae) && Ee(Pt)
				}, [gt, ke, pe, Ee, Pe, Je, ae, B])
			}
			var de = t("../react/common/selectors/zoneSelectors.ts");

			function le() {
				const B = (0, Te.p4)(de.nA),
					q = (0, Ue.Yc)();
				(0, fe.useEffect)(() => {
					var ae;
					q({
						zone_id: B == null ? void 0 : B.id,
						zone_plan: B == null || (ae = B.plan) === null || ae === void 0 ? void 0 : ae.legacy_id
					})
				}, [B, q])
			}
			const ve = () => (We(), Et(), le(), null);
			var _e = t("../react/app/components/Persistence/index.tsx"),
				Oe = t("../node_modules/@cloudflare/elements/es/index.js"),
				Ne = t("../react/app/components/LoadingSuspense.tsx");
			const Ge = Be().lazy(() => Promise.all([t.e(97842), t.e(33023), t.e(20400), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var Ye = () => (0, he.jsx)(Ne.Z, {
				children: (0, he.jsx)(Ge, {})
			});
			const qe = () => (fe.useEffect(() => A, []), null);
			var Dt = t("../../../../node_modules/moment/moment.js"),
				Ft = t.n(Dt);
			const wt = B => {
					switch (B) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return B.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return B.toLowerCase();
						default:
							return "en"
					}
				},
				st = () => {
					const B = (0, Te.p4)(S.r);
					(0, fe.useEffect)(() => {
						const q = wt(B);
						q !== Ft().locale() && Ft().locale(q), document.documentElement.lang = B
					}, [B])
				},
				rn = () => {
					(0, fe.useEffect)(() => {
						async function B() {
							var q, ae, pe, Ee;
							let De;
							if (((q = window) === null || q === void 0 || (ae = q.build) === null || ae === void 0 ? void 0 : ae.isPreviewDeploy) && ((pe = window) === null || pe === void 0 || (Ee = pe.build) === null || Ee === void 0 ? void 0 : Ee.branch) !== "staging" && (De = "cookie"), !!De) try {
								const Pe = document.head.querySelector("link[rel=icon]");
								Pe && (Pe.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${De}.ico`)).default)
							} catch {}
						}
						B()
					}, [])
				};
			var on = t("../react/common/constants/constants.ts");
			const an = () => {
				var B;
				const q = (0, Re.useLocation)(),
					[ae, pe] = (0, fe.useState)(((B = window) === null || B === void 0 ? void 0 : B.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
				return (0, fe.useEffect)(() => {
					const Ee = lt().parse(q.search);
					if (Ee.pt && Q.Z.set(on.sJ, Ee.pt), Ee == null ? void 0 : Ee.devPanel) {
						var De, Pe;
						(De = window) === null || De === void 0 || (Pe = De.localStorage) === null || Pe === void 0 || Pe.setItem("gates_devtools_ui_gates_controller_enabled", "true"), pe(!0)
					}
				}, [q.search]), {
					devPanelEnabled: ae
				}
			};
			var sn = t("../react/utils/useDomainConnectRedirect.ts");
			const cn = Be().lazy(() => Promise.all([t.e(97842), t.e(16691), t.e(14886), t.e(11664), t.e(94012), t.e(60296), t.e(33023), t.e(65676), t.e(88789), t.e(82620), t.e(80778), t.e(69102), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(66270), t.e(29271), t.e(8690), t.e(98210), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				ln = Be().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(60296), t.e(80778), t.e(76846), t.e(66270), t.e(8690), t.e(88145), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var un = ({
					userIsAuthed: B
				}) => {
					st(), rn(), (0, sn.y)();
					const {
						devPanelEnabled: q
					} = an();
					return (0, he.jsxs)(fe.Suspense, {
						fallback: (0, he.jsx)(qe, {}),
						children: [(0, he.jsxs)(Re.Switch, {
							children: [!B && !0 && (0, he.jsx)(Re.Route, {
								exact: !0,
								path: ["/", "/login"],
								children: (0, he.jsx)(ln, {})
							}), (0, he.jsx)(Re.Route, {
								render: () => (0, he.jsx)(Oe.ZC, {
									minHeight: "100vh",
									children: (0, he.jsx)(cn, {})
								})
							})]
						}), q && (0, he.jsx)(Ye, {})]
					})
				},
				Qt = t("../../../../node_modules/yup/es/index.js"),
				dn = t("../../../common/util/types/src/utils/index.ts");
			const qt = {
				cfEmail: () => Qt.Z_().email((0, it.ZP)("common.validation.email")).required((0, it.ZP)("common.validation.email")),
				cfPassword: () => Qt.Z_().required((0, it.ZP)("common.validation.required"))
			};
			(0, dn.Yd)(qt).forEach(B => {
				Qt.kM(Qt.Z_, B, qt[B])
			});
			const pn = B => {
					if (!document.startViewTransition) {
						B();
						return
					}
					document.startViewTransition(() => B())
				},
				en = Be().lazy(() => Promise.all([t.e(16691), t.e(94012), t.e(6368), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function gn() {
				const [B, q] = (0, fe.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, fe.useEffect)(() => {
					const ae = window.matchMedia("(prefers-color-scheme: dark)"),
						pe = Ee => {
							q(Ee.matches ? "dark" : "light")
						};
					return ae.addEventListener("change", pe), () => {
						ae.removeEventListener("change", pe)
					}
				}, []), B
			}
			const mn = () => {
					const B = (0, ye.$8)(),
						[q, ae] = (0, fe.useState)(B ? en : Be().Fragment),
						pe = gn(),
						[Ee, De] = (0, fe.useState)((0, l.Yc)());
					(0, fe.useEffect)(() => {
						(0, l.fF)(() => De((0, l.Yc)()))
					}, []);
					const Pe = ke => ke === l.LF.ON || ke === l.LF.SYSTEM && pe === "dark",
						Je = ke => {
							document.cookie = `dark-mode=${ke};Path=/;Max-Age=31536000`
						},
						ct = (ke = l.LF.SYSTEM) => {
							const gt = Pe(ke);
							pn(() => {
								De(gt), (0, l.C8)(ke)
							}), Je(ke)
						};
					return (0, fe.useEffect)(() => {
						ae(B ? en : Be().Fragment)
					}, [B]), (0, fe.useEffect)(() => {
						const ke = () => {
							const gt = localStorage.getItem("dark-mode");
							ct(gt)
						};
						return window.addEventListener("storage", ke), () => window.removeEventListener("storage", ke)
					}, []), (0, he.jsx)(fe.Suspense, {
						fallback: null,
						children: (0, he.jsx)(Ze.Provider, {
							store: (0, g.bh)(),
							children: (0, he.jsx)(Re.Router, {
								history: $,
								children: (0, he.jsx)(q, {
									children: (0, he.jsx)(Ct.Z, {
										renderer: Kt(),
										children: (0, he.jsx)(Bt, {
											children: (0, he.jsx)(Gt.S, {
												sentryTag: "Root",
												children: (0, he.jsxs)(ft.J$, {
													value: {
														fetcher: ke => fetch(ke).then(gt => gt.json())
													},
													children: [(0, he.jsx)(ve, {}), (0, he.jsx)(me, {}), (0, he.jsx)(_e.Z_, {
														onDarkModeChangeCb: ct,
														children: (0, he.jsx)(bt.ZP, {
															children: (0, he.jsx)(un, {
																userIsAuthed: B
															})
														})
													}), (0, he.jsx)(Ut.ZP, {}), (0, he.jsx)(vt.F0, {})]
												})
											})
										})
									})
								})
							})
						})
					})
				},
				fn = () => {
					(0, He.render)((0, he.jsx)(mn, {}), document.getElementById("react-app"))
				};
			var Lt = t("../utils/initSparrow.ts"),
				Zt = t("../utils/zaraz.ts");
			const vn = () => {
					const B = (0, Y.PR)((0, g.bh)().getState());
					_n(), (0, Lt.Ug)(), (0, Zt.bM)(), (B == null ? void 0 : B.id) && ge().setUserId(B == null ? void 0 : B.id), (0, Lt.yV)(), !(0, Lt.Wi)() && (0, Lt.IM)(), B ? (0, Zt.yn)(B) : (0, Zt.Ro)()
				},
				_n = () => {
					var B, q;
					(B = window) === null || B === void 0 || (q = B.OneTrust) === null || q === void 0 || q.OnConsentChanged(() => {
						const ae = (0, Y.PR)((0, g.bh)().getState());
						(0, Lt.Wi)() ? (ge().setEnabled(!0), (ae == null ? void 0 : ae.id) ? (ge().setUserId(ae.id), (0, Zt.yn)(ae)) : (0, Zt.Ro)(), (0, Lt.yV)()) : (ge().setEnabled(!1), (0, Lt.IM)())
					})
				};

			function hn(B) {
				for (var q = 1; q < arguments.length; q++) {
					var ae = arguments[q] != null ? Object(arguments[q]) : {},
						pe = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(ae).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(ae, Ee).enumerable
					})), pe.forEach(function(Ee) {
						En(B, Ee, ae[Ee])
					})
				}
				return B
			}

			function En(B, q, ae) {
				return q = yn(q), q in B ? Object.defineProperty(B, q, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[q] = ae, B
			}

			function yn(B) {
				var q = bn(B, "string");
				return typeof q == "symbol" ? q : String(q)
			}

			function bn(B, q) {
				if (typeof B != "object" || B === null) return B;
				var ae = B[Symbol.toPrimitive];
				if (ae !== void 0) {
					var pe = ae.call(B, q || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (q === "string" ? String : Number)(B)
			}
			const Cn = "init",
				tn = (B, q) => {
					r.$e(function(ae) {
						ae.setTag(Cn, q), r.Tb(B)
					}), I(B)
				},
				Xt = async (B, q) => {
					try {
						return await B(), !0
					} catch (ae) {
						return tn(ae, q), !1
					}
				};
			(async () => {
				try {
					var B, q, ae;
					t.g.build = hn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "dc4edee93a725002a319863b990cb0ecfa83276b",
						dashVersion: "35277247",
						env: "production",
						builtAt: 1755092863436,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, F.p)()
					}), ot();
					const pe = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => O($),
						tag: "hashScroll"
					}, {
						fn: D.Z,
						tag: "styles"
					}, {
						fn: je,
						tag: "mfePreviewData"
					}];
					for (const ct of pe)
						if (!await Xt(ct.fn, ct.tag)) return;
					let Ee;
					if (!await Xt(async () => {
							Ee = await ce()
						}, "bootstrap")) return;
					const De = (0, g.bh)(),
						Pe = ((B = Ee) === null || B === void 0 ? void 0 : B.data) || {};
					De.dispatch((0, i.mW)("user", Pe == null ? void 0 : Pe.user));
					const Je = (q = Ee) === null || q === void 0 || (ae = q.data) === null || ae === void 0 ? void 0 : ae.user;
					return t.g.bootstrap = Ee, Je && Je.id && ze(Je.id), !await Xt(Ie, "gates") || !(0, M.wz)() && !await Xt(vn, "tracking") ? void 0 : fn()
				} catch (pe) {
					tn(pe, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(j, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				d = t("../react/common/selectors/userSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				v = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/common/utils/isGuards.ts"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				_ = t.n(u),
				n = t("../../../../node_modules/react/jsx-runtime.js");

			function r(O) {
				for (var h = 1; h < arguments.length; h++) {
					var l = arguments[h] != null ? Object(arguments[h]) : {},
						C = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), C.forEach(function(f) {
						i(O, f, l[f])
					})
				}
				return O
			}

			function i(O, h, l) {
				return h = g(h), h in O ? Object.defineProperty(O, h, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[h] = l, O
			}

			function g(O) {
				var h = m(O, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function m(O, h) {
				if (typeof O != "object" || O === null) return O;
				var l = O[Symbol.toPrimitive];
				if (l !== void 0) {
					var C = l.call(O, h || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(O)
			}
			const p = O => {
				function h(l) {
					const C = (0, s.UM)(),
						f = (0, u.useHistory)(),
						w = (0, u.useLocation)(),
						k = (0, u.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						A = (0, s.p4)(d.PR) || null,
						I = (0, s.p4)(a.nA) || null,
						D = (0, s.p4)(v.uF),
						y = D ? D.account : null;
					if (!k) return null;
					const {
						accountId: P,
						app: S,
						tab: M
					} = k.params, F = k.params.zoneName && ((0, c.v5)(k.params.zoneName) || k.params.zoneName.indexOf(".") > 0) ? k.params.zoneName : void 0;
					return (0, n.jsx)(O, r({
						dispatch: C,
						history: f,
						location: w,
						match: k,
						user: A,
						membership: P ? D : null,
						account: P ? y : null,
						accountId: P || null,
						zone: F ? I : null,
						zoneName: F || null,
						app: F ? S : null,
						tab: F ? M : null
					}, l))
				}
				return h.displayName = `withEntities(${b(O)})`, h
			};

			function b(O) {
				return O.displayName || O.name || "Component"
			}
			E.Z = p
		},
		"../react/app/components/AccountHome/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$$: function() {
					return f
				},
				CK: function() {
					return I
				},
				KV: function() {
					return k
				},
				OX: function() {
					return A
				},
				QV: function() {
					return C
				},
				Yt: function() {
					return h
				},
				bA: function() {
					return l
				},
				fu: function() {
					return y
				},
				gX: function() {
					return p
				},
				hh: function() {
					return D
				},
				o1: function() {
					return w
				},
				tw: function() {
					return b
				},
				xD: function() {
					return O
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				s = t("../react/utils/url.ts");
			const d = "projects table click",
				a = "click create application",
				v = "account home dev plat - product card click",
				c = "account home dev plat - empty state CTA click",
				u = "account home dev plat - view all projects click",
				_ = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				r = "account home zero trust - analytics link click",
				i = "account home zero trust - product card click",
				g = "account home zero trust - plan pill click",
				m = "account home zero trust - plan fallback link click",
				p = {
					SPARROW_PROJECTS_TABLE_CLICK: d,
					SPARROW_CREATE_PROJECT_CLICK: a,
					SPARROW_PRODUCT_CARD_CLICK: v,
					SPARROW_EMPTY_STATE_CTA_CLICK: c,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: u,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: _,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: r,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: i,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: g,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: m
				},
				b = P => {
					o().sendEvent(d, {
						component: P
					})
				},
				O = P => {
					o().sendEvent(d, {
						component: "menu",
						subcomponent: P
					})
				},
				h = () => {
					o().sendEvent(a, {
						category: "Projects Table"
					})
				},
				l = ({
					category: P,
					product: S
				}) => {
					o().sendEvent(v, {
						category: P,
						product: S
					})
				},
				C = () => {
					o().sendEvent(c)
				},
				f = () => {
					o().sendEvent(u)
				},
				w = P => {
					o().sendEvent(n, {
						category: P
					})
				},
				k = ({
					category: P,
					href: S
				}) => {
					o().sendEvent(_, {
						category: P,
						href: (0, s.cm)(S)
					})
				},
				A = ({
					category: P,
					href: S
				}) => {
					o().sendEvent(r, {
						category: P,
						href: (0, s.cm)(S)
					})
				},
				I = ({
					category: P,
					product: S,
					href: M
				}) => {
					o().sendEvent(i, {
						category: P,
						product: S,
						href: (0, s.cm)(M)
					})
				},
				D = ({
					plan: P
				}) => {
					o().sendEvent(g, {
						plan: P
					})
				},
				y = () => {
					o().sendEvent(m)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				BQ: function() {
					return u
				},
				Bh: function() {
					return v
				},
				CM: function() {
					return _
				},
				MF: function() {
					return o
				},
				TS: function() {
					return i
				},
				WF: function() {
					return a
				},
				Wz: function() {
					return n
				},
				bk: function() {
					return c
				},
				fj: function() {
					return r
				},
				r4: function() {
					return d
				},
				zq: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js");
			const o = {
					ADD_SITE: "deepLink/ADD_SITE",
					RESOLVING_START: "deepLink/RESOLVING_START",
					RESOLVING_COMPLETE: "deepLink/RESOLVING_COMPLETE",
					SELECT_ZONE: "SELECT_ZONE",
					SELECT_ACCOUNT: "SELECT_ACCOUNT",
					SELECT_PAGES_PROJECT: "SELECT_PAGES_PROJECT",
					SELECT_PAGES_DEPLOYMENT: "SELECT_PAGES_DEPLOYMENT",
					SET_FILTERED_ACCOUNT_IDS: "deepLink/SET_FILTERED_ACCOUNT_IDS",
					DELETE_FILTERED_ACCOUNT_IDS: "deepLink/DELETE_FILTERED_ACCOUNT_IDS",
					SELECT_WORKER: "deepLink/SELECT_WORKER"
				},
				s = (0, e.R)(o.ADD_SITE, g => ({
					payload: g
				})),
				d = (0, e.R)(o.RESOLVING_START),
				a = (0, e.R)(o.RESOLVING_COMPLETE),
				v = (0, e.R)(o.SELECT_ZONE, g => ({
					payload: g
				})),
				c = (0, e.R)(o.SELECT_ACCOUNT, g => ({
					payload: g
				})),
				u = (0, e.R)(o.SELECT_PAGES_PROJECT, g => ({
					payload: g
				})),
				_ = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, g => ({
					payload: g
				})),
				n = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, g => ({
					accountIds: g
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				i = (0, e.R)(o.SELECT_WORKER, g => ({
					payload: g
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				BV: function() {
					return e
				},
				Dz: function() {
					return _
				},
				Fj: function() {
					return d
				},
				Kt: function() {
					return v
				},
				O5: function() {
					return a
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return n
				},
				dB: function() {
					return s
				},
				s$: function() {
					return c
				}
			});
			const e = "to",
				o = "_gl",
				s = "freeTrial",
				d = "deepLinkQueryParams",
				a = "resolvedDeepLinkQueryParams",
				v = "add",
				c = "multiSkuProducts",
				u = "/:account/billing/checkout",
				_ = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return D
				},
				U: function() {
					return I.U
				},
				dd: function() {
					return I.dd
				},
				bk: function() {
					return v.bk
				},
				Bh: function() {
					return v.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../react/app/redux/index.ts"),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = t("../react/app/components/DeepLink/utils.ts"),
				a = t("../react/utils/bootstrap.ts"),
				v = t("../react/app/components/DeepLink/actions.ts"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(c);

			function _(y) {
				for (var P = 1; P < arguments.length; P++) {
					var S = arguments[P] != null ? Object(arguments[P]) : {},
						M = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(S).filter(function(F) {
						return Object.getOwnPropertyDescriptor(S, F).enumerable
					})), M.forEach(function(F) {
						n(y, F, S[F])
					})
				}
				return y
			}

			function n(y, P, S) {
				return P = r(P), P in y ? Object.defineProperty(y, P, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[P] = S, y
			}

			function r(y) {
				var P = i(y, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function i(y, P) {
				if (typeof y != "object" || y === null) return y;
				var S = y[Symbol.toPrimitive];
				if (S !== void 0) {
					var M = S.call(y, P || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(y)
			}
			class g {
				constructor(P, S) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", M => {
						this.resolvers.set(M, {
							name: M,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", M => {
						const F = this.resolvers.get(M);
						F && (F.endTime = Date.now(), this.resolvers.set(M, F))
					}), n(this, "resolverCancel", M => {
						this.resolverDone(M), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", M => {
						const F = "NO_ACTION",
							ne = {
								actionType: F,
								startTime: 0
							};
						return {
							start: (te = F) => {
								const re = this.resolvers.get(M);
								ne.actionType = te, ne.startTime = Date.now(), re && re.userActions.push(ne)
							},
							finish: (te = F) => {
								ne.actionType = te, ne.endTime = Date.now()
							},
							cancel: (te = F) => {
								ne.actionType = te, ne.endTime = Date.now(), this.resolverCancel(M)
							}
						}
					}), this.deepLink = P, this.legacyDeepLink = S, this.resolvers = new Map
				}
				track(P) {
					try {
						if (this._done) return;
						this._done = !0;
						const S = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: m(this.startTime, this.endTime),
								totalCpuTime: m(this.startTime, this.endTime)
							},
							M = this.resolvers.size === 0 ? S : Array.from(this.resolvers.values()).reduce((F, ne) => {
								const te = m(ne.startTime, ne.endTime),
									re = ne.userActions.reduce((N, R) => {
										const K = m(R.startTime, R.endTime);
										return {
											totalTime: N.totalTime + K,
											actions: N.actions.set(R.actionType, K)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									z = te - re.totalTime;
								return _({}, F, {
									totalTime: F.totalTime + te,
									totalUserActionsTime: F.totalUserActionsTime + re.totalTime,
									totalCpuTime: F.totalCpuTime + z,
									[`${ne.name}ResolverTotalTime`]: te,
									[`${ne.name}ResolverTotalCpuTime`]: z,
									[`${ne.name}ResolverTotalUserActionsTime`]: re.totalTime
								}, Array.from(re.actions.keys()).reduce((N, R) => _({}, N, {
									[`${ne.name}Resolver/${R}`]: re.actions.get(R)
								}), {}))
							}, _({}, S, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						u().sendEvent(P, M)
					} catch (S) {
						console.error(S)
					}
				}
			}

			function m(y = Date.now(), P = Date.now()) {
				return (P - y) / 1e3
			}
			var p = t("../react/app/components/DeepLink/constants.ts"),
				b = t("../react/common/hooks/useCachedState.ts"),
				O = t("../react/common/hooks/usePrevious.ts");

			function h(y) {
				for (var P = 1; P < arguments.length; P++) {
					var S = arguments[P] != null ? Object(arguments[P]) : {},
						M = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(S).filter(function(F) {
						return Object.getOwnPropertyDescriptor(S, F).enumerable
					})), M.forEach(function(F) {
						l(y, F, S[F])
					})
				}
				return y
			}

			function l(y, P, S) {
				return P = C(P), P in y ? Object.defineProperty(y, P, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[P] = S, y
			}

			function C(y) {
				var P = f(y, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function f(y, P) {
				if (typeof y != "object" || y === null) return y;
				var S = y[Symbol.toPrimitive];
				if (S !== void 0) {
					var M = S.call(y, P || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(y)
			}
			var k = ({
					children: y
				}) => {
					const P = (0, o.TZ)(),
						S = (0, s.useHistory)(),
						M = (0, O.Z)(S.location.pathname),
						[F, ne] = (0, e.useState)(!0),
						[te, re] = (0, b.j)(void 0, {
							key: p.Fj
						}),
						[z, N] = (0, b.j)(void 0, {
							key: p.O5
						}),
						[R, K] = (0, b.j)(void 0, {
							key: p.s$
						}),
						U = (0, a.$8)();
					let G = new URLSearchParams(S.location.search);
					const H = (0, d.mL)(S.location.pathname, G);
					let Z = null,
						$ = null;
					if (G.has(p.Tc) && G.delete(p.Tc), G.get(p.BV)) Z = G.get(p.BV), S.location.hash && ($ = S.location.hash);
					else if (te) {
						const L = new URLSearchParams(te);
						L.get(p.BV) && (Z = L.get(p.BV), G = L)
					} else H && (G.set(p.BV, H), Z = H);
					if (Z && p._h.test(Z)) {
						const L = G.getAll(p.Kt),
							W = JSON.stringify(L);
						L.length && W !== R && K(W), G.has(p.Tc) && G.delete(p.Tc), G.delete(p.Kt)
					}!U && te === void 0 && Z && re(G.toString());
					const J = async () => {
						try {
							if ((0, d.I3)(Z) && U) {
								te && re(void 0), P.dispatch((0, v.r4)()), ne(!0), Z && Z !== z && N(Z);
								const L = await (0, d.py)(Z, ne, P, S, M, new g(Z, H ? `${S.location.pathname}${S.location.search}` : void 0));
								G.delete(p.BV);
								const W = G.toString();
								S.replace(h({}, S.location, {
									pathname: L,
									search: W
								}, $ ? {
									hash: $
								} : {})), P.dispatch((0, v.WF)())
							}
						} catch (L) {
							P.dispatch((0, v.WF)()), console.error(L)
						} finally {
							ne(!1)
						}
					};
					return (0, e.useEffect)(() => {
						J()
					}, [S.location.pathname, S.location.search]), (F || (0, d.I3)(Z)) && U ? null : y
				},
				A = t("../react/app/components/DeepLink/reducer.ts"),
				I = t("../react/app/components/DeepLink/selectors.ts"),
				D = k
		},
		"../react/app/components/DeepLink/reducer.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return d
				},
				r: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				s = t("../react/app/components/DeepLink/actions.ts");
			const d = null,
				a = o().from({
					lastAction: d,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function v(c = a, u) {
				if (u.type === s.MF.RESOLVING_COMPLETE) return a;
				if (u.type === s.MF.RESOLVING_START) return c.set("isResolving", !0);
				if (c.isResolving) {
					if (u.type === s.MF.RESOLVING_COMPLETE) return c.set("isResolving", !1);
					if (u.type === s.MF.SET_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", u.accountIds);
					if (u.type === s.MF.DELETE_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", void 0);
					{
						let _ = c;
						try {
							_ = c.set("lastAction", u)
						} catch {
							_ = c.set("lastAction", {
								type: u.type
							})
						}
						return _
					}
				} else return c
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return s
				},
				dd: function() {
					return o
				},
				yI: function() {
					return e
				}
			});
			const e = d => d.deepLink.lastAction,
				o = d => d.deepLink.isResolving,
				s = d => d.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				I3: function() {
					return _
				},
				X1: function() {
					return c
				},
				mL: function() {
					return m
				},
				py: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/components/DeepLink/reducer.ts"),
				s = t("../react/app/components/DeepLink/selectors.ts"),
				d = t("../react/app/components/DeepLink/constants.ts"),
				a = t("../react/common/validators/index.js"),
				v = t("../react/common/utils/isGuards.ts");
			const c = p => (0, a.Lb)(p) && (p.split(".").length > 1 || (0, v.v5)(p)),
				u = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				_ = p => typeof p == "string" && p.startsWith("/"),
				n = (p, b) => O => new Promise((h, l) => {
					b.start();
					const C = p.subscribe(() => {
						const f = (0, s.yI)(p.getState());
						f === o.E ? (b.cancel(), C(), l("DeepLink: waitForAction out of context.")) : O(f) && (b.finish(f.type), C(), h(f))
					})
				}),
				r = (p, b, O) => (h, l) => new Promise((C, f) => {
					O.start();
					const w = b.location.pathname;
					h = new URL(h, window.location.href).pathname, w !== h && (O.cancel(), f(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${h}", but on "${w}". You need to redirect to "${h}", and unblockRouter in your Resolver, before you use this function.`));
					const k = p.subscribe(() => {
						const A = (0, s.yI)(p.getState()),
							I = b.location.pathname,
							y = new URLSearchParams(b.location.search).get(d.BV);
						(I !== h || !!y) && (O.cancel(), k(), f(`DeepLink: waitForPageAction user navigated away from "${h}" to "${I}${y?b.location.search:""}"`)), A === o.E ? (O.cancel(), k(), f("DeepLink: waitForPageAction out of context.")) : l(A) && (O.finish(A.type), k(), C(A))
					})
				});

			function i(p) {
				const b = [],
					O = p.split("?")[0].split("/");
				for (let h of O) h.length !== 0 && (h.startsWith(":") ? b.push({
					value: h.substring(1),
					type: "dynamic"
				}) : b.push({
					value: h,
					type: "static"
				}));
				return b
			}
			async function g(p, b, O, h, l, C) {
				C.start();
				const f = i(p),
					k = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					A = {};
				let I = "";
				for (const [D, y] of f.entries())
					if (y.type === "static") I = [I, y.value].join("/");
					else if (y.type === "dynamic" && u.is(y.value) && y.value in k) {
					C.resolverStart(y.value);
					const P = await k[y.value]({
						deepLink: p,
						blockRouter: () => b(!0),
						unblockRouter: () => b(!1),
						routerHistory: h,
						resolvedValues: A,
						store: O,
						referringRoute: l,
						uri: {
							currentPartIdx: D,
							parts: f
						},
						waitForAction: n(O, C.createUserActionTracker(y.value)),
						waitForPageAction: r(O, h, C.createUserActionTracker(y.value))
					});
					C.resolverDone(y.value), I = [I, P].join("/"), A[y.value] = P
				} else throw C.cancel(), new Error(`DeepLink: Resolver with name '${y.value}' is not supported.`);
				return C.done(), I
			}

			function m(p, b) {
				const O = ":account",
					h = ":zone",
					l = b.get("zone");
				if (l) return b.delete("zone"), `/${O}/${h}/${l}`;
				const C = b.get("account");
				if (C) return b.delete("account"), `/${O}/${C}`;
				if (p === "/overview") return `/${O}/${h}`;
				const f = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const w of f) {
					const k = w.length;
					if (p.startsWith(w) && (p.length === k || p[k] === "/")) return `/${O}/${h}${p}`
				}
				switch (p) {
					case "/account/billing":
						return `/${O}/billing`;
					case "/account/subscriptions":
						return `/${O}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${O}/dns-firewall`;
					case "/account/audit-log":
						return `/${O}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				s = t("../react/app/components/SomethingWrong.jsx"),
				d = t("../utils/sentry/lastSentEventId.ts"),
				a = t("../react/utils/zaraz.ts"),
				v = t("../react/utils/url.ts"),
				c = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/component-button/es/index.js"),
				_ = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(n),
				i = t("../react/common/components/Page.tsx"),
				g = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==",
				m = t("../../../../node_modules/react/jsx-runtime.js");

			function p() {
				return (0, e.useEffect)(() => {
					r().sendEvent("new page available refresh cta"), window.location.reload()
				}, []), (0, m.jsx)(i.Z, {
					type: "narrow",
					children: (0, m.jsxs)(c.ZC, {
						textAlign: "center",
						children: [(0, m.jsx)(c.H1, {
							fontSize: 5,
							fontWeight: 400,
							children: (0, m.jsx)(_.Trans, {
								id: "error.new_page_version_available.title"
							})
						}), (0, m.jsx)(_.Trans, {
							id: "error.new_page_version_available.description"
						}), (0, m.jsx)(c.ZC, {
							children: (0, m.jsx)(c.Ei, {
								height: 116,
								src: g,
								"aria-hidden": !0
							})
						}), (0, m.jsx)(u.zx, {
							mt: 3,
							type: "primary",
							iconType: "refresh",
							onClick: () => window.location.reload(),
							children: (0, m.jsx)(_.Trans, {
								id: "common.refresh"
							})
						})]
					})
				})
			}
			const b = ({
				sentryTag: O,
				children: h,
				fallbackComponent: l
			}) => (0, m.jsx)(o.SV, {
				beforeCapture: C => {
					a.tg === null || a.tg === void 0 || a.tg.track("page-error", {
						page: (0, v.Fl)(window.location.pathname)
					})
				},
				onError: C => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(C)
				},
				fallback: ({
					error: C,
					eventId: f
				}) => {
					var w;
					if (l) return l;
					const k = d.e.getEventId() || f;
					return (C == null || (w = C.message) === null || w === void 0 ? void 0 : w.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), (0, m.jsx)(p, {})) : (0, m.jsx)(s.Z, {
						type: "page",
						error: C,
						eventId: k,
						sentryTag: O
					})
				},
				children: h
			})
		},
		"../react/app/components/FedRAMP/utils.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$$: function() {
					return o
				},
				PQ: function() {
					return s
				},
				tv: function() {
					return e
				}
			});
			const e = "#5B697C",
				o = "#525F70",
				s = "#fff"
		},
		"../react/app/components/Footer.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return H
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				a = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				v = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(v),
				u = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				_ = t("../react/common/components/Apple/utils.tsx"),
				n = t("../react/utils/translator.tsx"),
				r = t("../../../../node_modules/moment/moment.js"),
				i = t.n(r),
				g = t("../../../../node_modules/react/jsx-runtime.js");
			const m = () => {
					const Z = i()().format("YYYY"),
						$ = J => {
							c().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: J
							})
						};
					return (0, g.jsx)(p, {
						marginTop: "auto",
						children: (0, g.jsx)(b, {
							children: (0, g.jsxs)(O, {
								children: [(0, g.jsxs)(h, {
									children: ["\xA9 ", Z, " Cloudflare, Inc."]
								}), (0, g.jsxs)(h, {
									children: [(0, g.jsxs)(l, {
										children: [(0, g.jsx)(C, {
											showOnDeskTop: !1,
											children: (0, g.jsx)(f, {
												fontWeight: 600,
												href: "https://support.cloudflare.com/",
												onClick: () => $("Support"),
												children: (0, g.jsx)(n.cC, {
													id: "common.support"
												})
											})
										}), (0, g.jsx)(C, {
											children: (0, g.jsx)(f, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/privacypolicy/",
												onClick: () => $("Privacy Policy"),
												children: (0, g.jsx)(n.cC, {
													id: "footer.privacy_policy"
												})
											})
										}), (0, g.jsx)(C, {
											children: (0, g.jsx)(f, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/terms/",
												onClick: () => $("Terms of Use"),
												children: (0, g.jsx)(n.cC, {
													id: "apple.footer.terms_of_use"
												})
											})
										}), (0, g.jsx)(C, {
											children: (0, g.jsx)(f, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/cookie-policy/",
												onClick: () => $("Cookie Preferences"),
												children: (0, g.jsx)(n.cC, {
													id: "apple.footer.cookie_preferences"
												})
											})
										}), (0, g.jsx)(C, {
											children: (0, g.jsx)(f, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/trademark/",
												onClick: () => $("Trademark"),
												children: (0, g.jsx)(n.cC, {
													id: "apple.footer.trademark"
												})
											})
										})]
									}), (0, g.jsx)(l, {
										children: (0, g.jsx)(C, {
											children: (0, g.jsx)(f, {
												fontWeight: 400,
												href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
												onClick: () => $("ICANN's Domain Name Registrants' Rights"),
												children: (0, g.jsx)(n.cC, {
													id: "apple.footer.icanns"
												})
											})
										})
									})]
								})]
							})
						})
					})
				},
				p = (0, d.LM)(({
					theme: Z,
					marginTop: $
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: $
				})),
				b = (0, d.LM)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				O = (0, d.LM)(({
					theme: Z
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${Z.space[3]}px`
					}
				})),
				h = (0, d.LM)(({
					theme: Z
				}) => ({
					width: "100%",
					color: Z.colors.white,
					fontSize: Z.fontSizes[1],
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					tablet: {
						flexDirection: "row"
					},
					desktop: {
						flexDirection: "row"
					}
				})),
				l = (0, d.LM)(({
					theme: Z
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: Z.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				C = (0, d.LM)(({
					showOnDeskTop: Z = !0,
					theme: $
				}) => ({
					color: $.colors.white,
					fontSize: $.fontSizes[1],
					height: "20px",
					display: Z ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: $.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: $.space[3],
						"&::before": {
							content: "'\xB7'",
							display: "block",
							position: "relative",
							left: "-8px",
							fontWeight: 800
						}
					},
					"&:nth-child(2)": {
						marginLeft: 0,
						"&::before": {
							display: "none"
						}
					}
				})),
				f = (0, d.SU)(({
					theme: Z
				}) => ({
					textDecoration: "none",
					color: Z.colors.white,
					"&:hover": {
						color: Z.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var w = m,
				k = t("../react/pages/welcome/routes.ts"),
				A = t("../react/utils/cookiePreferences.ts"),
				I = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				y = () => {
					const [Z, $] = (0, e.useState)(!1), J = (0, A.wV)(), L = () => {
						$(!0)
					}, W = () => {
						$(!1)
					}, X = J && J === "US" ? (0, n.ZP)("footer.cpra_cta.privacy_choices") : (0, n.ZP)("footer.cpra_cta.cookie_preferences"), ie = (0, n.ZP)("footer.cpra_cta.privacy_choices_alt"), V = {
						background: "transparent",
						borderRadius: "none",
						color: Z ? (0, a.Yc)() ? "#ee730a" : "#003681" : (0, a.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: Z ? "underline" : "none",
						textUnderlineOffset: "4px",
						cursor: "pointer",
						transitionProperty: "color",
						transitionDuration: "150ms",
						transitionTimingFunction: "ease",
						padding: "0px",
						display: "flex",
						alignItems: "center",
						lineHeight: "1.5",
						height: "fit-content",
						fontSize: "14px",
						fontWeight: 400,
						"&:focus": {
							outline: "2px solid #086fff"
						},
						border: "none",
						overflow: "hidden"
					};
					return (0, g.jsxs)(s.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: V,
						onMouseEnter: L,
						onMouseLeave: W,
						children: [(0, g.jsx)(s.Ei, {
							height: 15,
							src: I,
							mr: 2,
							alt: ie
						}), X]
					})
				};

			function P(Z) {
				for (var $ = 1; $ < arguments.length; $++) {
					var J = arguments[$] != null ? Object(arguments[$]) : {},
						L = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(J).filter(function(W) {
						return Object.getOwnPropertyDescriptor(J, W).enumerable
					})), L.forEach(function(W) {
						S(Z, W, J[W])
					})
				}
				return Z
			}

			function S(Z, $, J) {
				return $ = M($), $ in Z ? Object.defineProperty(Z, $, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[$] = J, Z
			}

			function M(Z) {
				var $ = F(Z, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function F(Z, $) {
				if (typeof Z != "object" || Z === null) return Z;
				var J = Z[Symbol.toPrimitive];
				if (J !== void 0) {
					var L = J.call(Z, $ || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(Z)
			}

			function ne(Z, $) {
				if (Z == null) return {};
				var J = te(Z, $),
					L, W;
				if (Object.getOwnPropertySymbols) {
					var X = Object.getOwnPropertySymbols(Z);
					for (W = 0; W < X.length; W++) L = X[W], !($.indexOf(L) >= 0) && (!Object.prototype.propertyIsEnumerable.call(Z, L) || (J[L] = Z[L]))
				}
				return J
			}

			function te(Z, $) {
				if (Z == null) return {};
				var J = {},
					L = Object.keys(Z),
					W, X;
				for (X = 0; X < L.length; X++) W = L[X], !($.indexOf(W) >= 0) && (J[W] = Z[W]);
				return J
			}
			const re = (0, d.SU)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,a.Yc)()?a.rS.colors.orange[6]:a.rS.colors.blue[4]}`
					}
				}), s.A),
				z = (0, d.SU)(({
					theme: Z
				}) => ({
					color: Z.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, u.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: Z.colors.gray[4]
					}
				}), s.A),
				N = Z => {
					let {
						onClick: $
					} = Z, J = ne(Z, ["onClick"]);
					return _jsx(re, P({
						onClick: L => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: J.href
							}), $ && $(L)
						}
					}, J))
				},
				R = Z => {
					let {
						children: $,
						target: J,
						rel: L
					} = Z, W = ne(Z, ["children", "target", "rel"]);
					return (0, g.jsx)(z, P({
						target: J || "_blank",
						rel: L || "noopener noreferrer"
					}, W, {
						children: $
					}))
				},
				K = (0, d.SU)(({
					theme: Z
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, u.tq)() ? "8px" : "16px",
					"& > li": {
						listStyleType: "none",
						"& > a": {
							fontSize: Z.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: Z.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), s.Ul),
				U = (0, d.SU)(() => ({
					display: "flex",
					flexDirection: (0, u.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), s.ZC);
			var H = () => {
				const Z = [k.d.root.pattern].some(J => (0, o.matchPath)(location.pathname, {
					path: J
				}));
				if ((0, _.PP)()) return (0, g.jsx)(w, {});
				if (Z) return null;
				const $ = new Date().getFullYear();
				return (0, g.jsx)(s.$_, {
					height: (0, u.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto",
					id: "site-footer",
					children: (0, g.jsx)(U, {
						children: (0, g.jsxs)(K, {
							children: [(0, g.jsx)(s.Li, {
								children: (0, g.jsx)(R, {
									href: "https://support.cloudflare.com",
									children: (0, n.ZP)("common.support")
								})
							}), (0, g.jsx)(s.Li, {
								children: (0, g.jsx)(R, {
									href: "https://www.cloudflarestatus.com",
									children: (0, g.jsx)(s.Dr, {
										textTransform: "capitalize",
										children: (0, n.ZP)("footer.system_status")
									})
								})
							}), (0, g.jsx)(s.Li, {
								children: (0, g.jsx)(R, {
									href: "https://www.cloudflare.com/careers/",
									children: (0, n.ZP)("footer.careers")
								})
							}), (0, g.jsx)(s.Li, {
								children: (0, g.jsx)(R, {
									href: "https://www.cloudflare.com/website-terms/",
									children: (0, n.ZP)("footer.tos_reduced")
								})
							}), (0, g.jsx)(s.Li, {
								children: (0, g.jsx)(R, {
									href: "https://www.cloudflare.com/disclosure/",
									children: (0, n.ZP)("footer.security_issues")
								})
							}), (0, g.jsx)(s.Li, {
								children: (0, g.jsx)(R, {
									href: "https://www.cloudflare.com/privacypolicy/",
									children: (0, n.ZP)("footer.privacy_policy")
								})
							}), (0, g.jsx)(s.Li, {
								children: (0, g.jsx)(y, {})
							}), (0, g.jsx)(s.Li, {
								children: (0, g.jsxs)(s.Dr, {
									fontSize: 2,
									color: "gray.4",
									children: ["\xA9 ", $, " Cloudflare, Inc."]
								})
							})]
						})
					})
				})
			}
		},
		"../react/app/components/Forbidden.jsx": function(j, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/components/ErrorStatus.tsx"),
				d = t("../react/utils/translator.tsx"),
				a = t("../../../../node_modules/react/jsx-runtime.js");

			function v(r) {
				for (var i = 1; i < arguments.length; i++) {
					var g = arguments[i] != null ? Object(arguments[i]) : {},
						m = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(g).filter(function(p) {
						return Object.getOwnPropertyDescriptor(g, p).enumerable
					})), m.forEach(function(p) {
						c(r, p, g[p])
					})
				}
				return r
			}

			function c(r, i, g) {
				return i = u(i), i in r ? Object.defineProperty(r, i, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = g, r
			}

			function u(r) {
				var i = _(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function _(r, i) {
				if (typeof r != "object" || r === null) return r;
				var g = r[Symbol.toPrimitive];
				if (g !== void 0) {
					var m = g.call(r, i || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			const n = r => (0, a.jsx)(s.Z, v({}, r, {
				children: (0, d.ZP)("error.forbidden")
			}));
			E.Z = n
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return p
				},
				Z: function() {
					return J
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/component-button/es/index.js"),
				a = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				v = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(c),
				_ = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				n = t("../react/common/components/AccessControl/index.js"),
				r = t("../react/common/components/ButtonWithDropdown.tsx"),
				i = t("../react/common/components/Dropdown/index.tsx"),
				g = t("../react/utils/translator.tsx"),
				m = t("../react/common/hooks/useGate.ts");
			const p = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				b = () => {
					const L = (0, m.Z)("super-add-button-copy-change"),
						W = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: p.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: p.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: p.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: p.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: p.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: p.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch (L) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: p.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...W];
						case "existing-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
								},
								trackingEvent: p.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...W];
						case "existing-site":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site"
								},
								trackingEvent: p.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...W];
						case "your-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
								},
								trackingEvent: p.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...W];
						case "your-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
								},
								trackingEvent: p.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...W];
						default:
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title"
								},
								trackingEvent: p.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description"
								},
								disableOn: "isZoneVersionLocked"
							}, {
								title: {
									id: "onboarding.add_product.new_domain.title"
								},
								trackingEvent: p.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/registrar/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: p.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: p.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: p.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: p.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: p.ACCOUNT_MEMBERS,
								icon: "user-outline",
								url: "?to=/:account/members/invite",
								description: {
									id: "onboarding.add_product.account_member.description"
								},
								permissionCheck: "#member:edit"
							}]
					}
				},
				O = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: p.EXISTING_DOMAIN,
					icon: "internet-browser",
					url: "?to=/:account/add-site",
					description: {
						id: "onboarding.add_product.existing_domain.description"
					},
					disableOn: "isZoneVersionLocked"
				}, {
					title: {
						id: "onboarding.add_product.new_domain.title"
					},
					trackingEvent: p.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/registrar/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: p.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: p.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: p.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: p.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: p.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var h = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t("../../../../node_modules/react/jsx-runtime.js");

			function C(L) {
				for (var W = 1; W < arguments.length; W++) {
					var X = arguments[W] != null ? Object(arguments[W]) : {},
						ie = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(X).filter(function(V) {
						return Object.getOwnPropertyDescriptor(X, V).enumerable
					})), ie.forEach(function(V) {
						f(L, V, X[V])
					})
				}
				return L
			}

			function f(L, W, X) {
				return W = w(W), W in L ? Object.defineProperty(L, W, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[W] = X, L
			}

			function w(L) {
				var W = k(L, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function k(L, W) {
				if (typeof L != "object" || L === null) return L;
				var X = L[Symbol.toPrimitive];
				if (X !== void 0) {
					var ie = X.call(L, W || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)(L)
			}

			function A(L, W) {
				if (L == null) return {};
				var X = I(L, W),
					ie, V;
				if (Object.getOwnPropertySymbols) {
					var oe = Object.getOwnPropertySymbols(L);
					for (V = 0; V < oe.length; V++) ie = oe[V], !(W.indexOf(ie) >= 0) && (!Object.prototype.propertyIsEnumerable.call(L, ie) || (X[ie] = L[ie]))
				}
				return X
			}

			function I(L, W) {
				if (L == null) return {};
				var X = {},
					ie = Object.keys(L),
					V, oe;
				for (oe = 0; oe < ie.length; oe++) V = ie[oe], !(W.indexOf(V) >= 0) && (X[V] = L[V]);
				return X
			}
			const D = L => {
					let {
						title: W,
						trackingEvent: X,
						icon: ie,
						url: V,
						description: oe,
						disabled: ge
					} = L, we = A(L, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return (0, l.jsx)(y, C({
						to: !ge && V || "#",
						"aria-disabled": ge,
						onClick: () => {
							u().sendEvent(X, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, we, {
						children: (0, l.jsxs)(s.ZC, {
							display: "flex",
							children: [(0, l.jsx)(o.J, {
								type: ie,
								size: 24,
								mr: 2,
								mt: 1
							}), (0, l.jsxs)(s.ZC, {
								display: "flex",
								flexDirection: "column",
								flex: "1",
								children: [(0, l.jsx)(s.ZC, {
									fontSize: 3,
									children: (0, l.jsx)(g.cC, C({}, W))
								}), (0, l.jsx)(s.ZC, {
									fontSize: 2,
									color: "gray.4",
									children: (0, l.jsx)(g.cC, C({}, oe))
								})]
							})]
						})
					}))
				},
				y = (0, _.SU)(({
					theme: L
				}) => {
					const W = {
						cursor: "pointer",
						backgroundColor: (0, a.Yc)() ? L.colors.gray[8] : L.colors.gray[9],
						color: L.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: L.colors.background,
						color: L.colors.gray[2],
						fontSize: L.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': W,
						':focus-within:not([aria-disabled="true"])': C({}, W, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: L.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, h.Link);
			var P = D,
				S = t("../flags.ts"),
				M = t("../react/app/components/FedRAMP/utils.ts");

			function F(L) {
				for (var W = 1; W < arguments.length; W++) {
					var X = arguments[W] != null ? Object(arguments[W]) : {},
						ie = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(X).filter(function(V) {
						return Object.getOwnPropertyDescriptor(X, V).enumerable
					})), ie.forEach(function(V) {
						ne(L, V, X[V])
					})
				}
				return L
			}

			function ne(L, W, X) {
				return W = te(W), W in L ? Object.defineProperty(L, W, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[W] = X, L
			}

			function te(L) {
				var W = re(L, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function re(L, W) {
				if (typeof L != "object" || L === null) return L;
				var X = L[Symbol.toPrimitive];
				if (X !== void 0) {
					var ie = X.call(L, W || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)(L)
			}

			function z(L, W) {
				if (L == null) return {};
				var X = N(L, W),
					ie, V;
				if (Object.getOwnPropertySymbols) {
					var oe = Object.getOwnPropertySymbols(L);
					for (V = 0; V < oe.length; V++) ie = oe[V], !(W.indexOf(ie) >= 0) && (!Object.prototype.propertyIsEnumerable.call(L, ie) || (X[ie] = L[ie]))
				}
				return X
			}

			function N(L, W) {
				if (L == null) return {};
				var X = {},
					ie = Object.keys(L),
					V, oe;
				for (oe = 0; oe < ie.length; oe++) V = ie[oe], !(W.indexOf(V) >= 0) && (X[V] = L[V]);
				return X
			}
			const R = "GLOBAL_ADD_DROPDOWN",
				K = (0, _.SU)(({
					theme: L
				}) => ({
					"background-color": L.colors.blue[5]
				}), d.zx),
				U = ({
					disableProducts: L
				}) => {
					const W = b();
					return (0, e.useEffect)(() => (u().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						u().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), (0, l.jsx)(r.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0",
						bottom: "auto",
						zIndex: 1200,
						minWidth: 240,
						children: W.map(X => {
							const ie = X || {},
								{
									disableOn: V,
									permissionCheck: oe
								} = ie,
								ge = z(ie, ["disableOn", "permissionCheck"]),
								we = V && L[V],
								se = F({}, ge, {
									disabled: we
								});
							return oe ? (0, l.jsx)(n.Z, {
								edit: oe,
								children: ({
									isEditable: Ce
								}) => Ce && (0, l.jsx)(P, F({}, se))
							}, X.title.id) : (0, l.jsx)(P, F({}, se), X.url)
						})
					})
				},
				G = ({
					disableProducts: L,
					topNavType: W
				}) => {
					const X = () => (0, v.tq)() || W === "icon-only" ? (0, l.jsx)(s.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3,
						children: (0, l.jsx)(K, {
							type: "plain",
							iconType: "plus",
							iconSize: 24,
							padding: 1,
							color: "white"
						})
					}) : (0, l.jsxs)(d.zx, {
						type: "primary",
						mr: 2,
						children: [(0, l.jsx)(g.cC, {
							id: "common.add"
						}), " ", (0, l.jsx)(o.J, {
							label: "arrow",
							type: "caret-down"
						})]
					});
					return (0, l.jsx)(H, {
						role: "group",
						"data-testid": R,
						children: (0, l.jsx)(i.Lt, {
							trigger: W === "baseline" ? (0, l.jsxs)(Z, {
								children: [(0, l.jsx)(o.J, {
									label: "plus",
									type: "plus"
								}), !(0, v.tq)() && (0, l.jsxs)(l.Fragment, {
									children: [(0, l.jsx)(g.cC, {
										id: "common.add"
									}), " ", (0, l.jsx)(o.J, {
										label: "arrow",
										type: "caret-down"
									})]
								})]
							}) : X(),
							menu: (0, l.jsx)(U, {
								disableProducts: L
							})
						})
					})
				},
				H = (0, _.SU)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				Z = (0, _.SU)(({
					theme: L
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: (0, S.wz)() ? M.PQ : L.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, S.wz)() ? M.PQ : (0, a.Yc)() ? L.colors.gray[1] : L.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					ml: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, S.wz)() ? M.$$ : (0, a.Yc)() ? L.colors.gray[8] : L.colors.gray[9]
					}
				}), s.zx);
			var $ = G,
				J = $
		},
		"../react/app/components/LoadingSuspense.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				d = t("../react/utils/translator.tsx"),
				a = t("../react/app/components/ErrorStatus.tsx"),
				v = t("../react/common/components/EmptyPage.jsx"),
				c = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const u = "suspenseComplete";

			function _() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(u))
				}, [])
			}

			function n(O) {
				useEventListener(u, () => {
					window.setTimeout(O, 0)
				}, {
					target: window
				})
			}

			function r(...O) {
				const [h, l] = O;
				React.useLayoutEffect(h, l), n(h)
			}
			var i = t("../../../../node_modules/react/jsx-runtime.js");

			function g(O) {
				const [h, l] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const C = window.setTimeout(() => l(!0), O);
					return () => window.clearTimeout(C)
				}, []), h
			}
			const m = ({
				loadingTimeout: O = 1e3,
				stillLoadingTimeout: h = 9e3
			}) => {
				const l = g(O),
					C = g(h);
				if (_(), !l && !C) return (0, i.jsx)(v.Z, {});
				const f = C ? (0, i.jsx)(d.cC, {
					id: "common.still_loading"
				}) : l ? (0, i.jsx)(d.cC, {
					id: "common.loading"
				}) : null;
				return (0, i.jsxs)(a.Z, {
					size: 5,
					children: [(0, i.jsx)(s.ZC, {
						mr: 3,
						children: (0, i.jsx)(o.g, {
							size: "2x"
						})
					}), f]
				})
			};
			var b = ({
				children: O
			}) => (0, i.jsx)(e.Suspense, {
				fallback: (0, i.jsx)(m, {}),
				children: O
			})
		},
		"../react/app/components/Persistence/Persistence.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				Z_: function() {
					return k
				},
				lp: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				d = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(d),
				v = t("../react/utils/bootstrap.ts"),
				c = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/Persistence/api.ts"),
				_ = t("../react/app/components/Persistence/constants.ts"),
				n = t("../react/common/hooks/useActiveState.ts"),
				r = t("../react/pages/security/resources/hooks/useUnificationGate.tsx"),
				i = t("../react/common/hooks/useGate.ts"),
				g = t("../react/common/hooks/useIsInternal.ts"),
				m = t("../../../../node_modules/react/jsx-runtime.js");

			function p(A) {
				for (var I = 1; I < arguments.length; I++) {
					var D = arguments[I] != null ? Object(arguments[I]) : {},
						y = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(D).filter(function(P) {
						return Object.getOwnPropertyDescriptor(D, P).enumerable
					})), y.forEach(function(P) {
						b(A, P, D[P])
					})
				}
				return A
			}

			function b(A, I, D) {
				return I = O(I), I in A ? Object.defineProperty(A, I, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[I] = D, A
			}

			function O(A) {
				var I = h(A, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function h(A, I) {
				if (typeof A != "object" || A === null) return A;
				var D = A[Symbol.toPrimitive];
				if (D !== void 0) {
					var y = D.call(A, I || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(A)
			}
			const l = {
					darkMode: "off",
					dismissedTasks: [],
					emailVerificationRequest: "",
					favorites: [],
					pinnedItems: {},
					recents: {},
					viewedChanges: [],
					flags: {
						hasEnabledSecurityNavigation: !1,
						hasEnabledSidebarNavGroupings: !0,
						hasEnabledDefaultUnifiedSecurity: void 0
					}
				},
				C = p({}, l, {
					isLoading: !0,
					remainingStarSlots: 10,
					isUpdatingFlags: !1,
					tasksToShowAgain: [],
					actions: {
						starZone: () => null,
						setDarkMode: () => null,
						isZoneStarred: () => !1,
						canAccountStarZone: () => !0,
						logRouteVisited: () => null,
						pinRecentRoute: () => null,
						viewChange: () => null,
						toggleSecurityNavigation: () => null,
						toggleSidebarNavGroupings: () => null,
						dismissTask: () => null,
						handleDeleteTasksToShowAgain: ([]) => null,
						handleAddTasksToShowAgain: ([]) => null
					}
				}),
				f = (0, e.createContext)(C),
				w = f.Consumer,
				k = ({
					children: A,
					onDarkModeChangeCb: I
				}) => {
					const [D, y] = (0, e.useState)(l), [P, S] = (0, e.useState)(C.isLoading), [M, F] = (0, e.useState)([]), [ne, te] = (0, e.useState)(!1), re = (0, v.$8)(), z = (0, s.p4)($ => (0, c.wH)($)), N = (0, g.t)(), R = !!(0, i.Z)("sidebar-nav-product-groupings"), {
						setSecurityNav: K
					} = (0, r.Ud)(), [, U] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						re ? (0, u.yl)().then($ => {
							$ && (R && $.flags.hasEnabledSidebarNavGroupings === void 0 && ($.flags.hasEnabledSidebarNavGroupings = !0, (0, u.Sp)({
								hasEnabledSidebarNavGroupings: !0
							})), y($), K($), I($.darkMode))
						}).finally(() => S(!1)) : S(!1)
					}, [re]), (0, e.useEffect)(() => {
						N && (window.deleteUser = u.ZN)
					}, []);
					const G = ($, J) => !!D.favorites.find(L => L.type === "zone" && L.name === $ && L.accountId === J),
						H = _.W - D.favorites.length,
						Z = $ => D.favorites.filter(L => L.type === "zone" && L.accountId === $).length < _.W;
					return (0, m.jsx)(f.Provider, {
						value: p({}, D, {
							isLoading: P,
							remainingStarSlots: H,
							isUpdatingFlags: ne,
							tasksToShowAgain: M,
							actions: {
								canAccountStarZone: Z,
								isZoneStarred: G,
								starZone: async ($, J) => {
									var L;
									const W = !G($, J),
										X = Z(J);
									if (W && !X) {
										console.log("can not star zone - account is at limit");
										return
									}
									const ie = await (0, u.lt)($, J);
									a().sendEvent("click star zone", {
										isStarring: W,
										totalStarredZones: ie.filter(V => V.accountId === J && V.type === "zone").length,
										totalZones: z == null || (L = z.paginationData) === null || L === void 0 ? void 0 : L.info.total_count
									}), y(p({}, D, {
										favorites: ie
									}))
								},
								toggleSidebarNavGroupings: async $ => {
									await (0, u.Sp)({
										hasEnabledSidebarNavGroupings: $
									}), y(p({}, D, {
										flags: p({}, D.flags, {
											hasEnabledSidebarNavGroupings: $
										})
									}))
								},
								toggleSecurityNavigation: async ($, J) => {
									te(!0);
									const L = J ? {
										hasEnabledDefaultUnifiedSecurity: $,
										hasEnabledSecurityNavigation: $
									} : {
										hasEnabledSecurityNavigation: $
									};
									await (0, u.Sp)(L), U($), y(p({}, D, {
										flags: p({}, D.flags, L)
									})), a().identify(p({}, L)), te(!1)
								},
								setDarkMode: async $ => {
									I($), D.darkMode = $, y(D);
									const J = await (0, u.C8)($);
									y(J);
									const L = J.darkMode;
									L !== $ && I(L)
								},
								logRouteVisited: async $ => {
									var J;
									const L = await (0, u.n)($);
									y((J = L) !== null && J !== void 0 ? J : p({}, D))
								},
								pinRecentRoute: async $ => {
									var J, L;
									const W = $.accountId,
										X = (J = D == null || (L = D.pinnedItems) === null || L === void 0 ? void 0 : L[W]) !== null && J !== void 0 ? J : [],
										V = X.some(oe => oe.url === $.url) ? X.filter(oe => oe.url !== $.url) : [...X, $];
									y(p({}, D, {
										pinnedItems: p({}, D.pinnedItems, {
											[W]: V
										})
									})), (0, u.LC)($)
								},
								viewChange: async $ => {
									te(!0);
									const J = await (0, u.m6)($);
									y(p({}, D, {
										viewedChanges: J
									})), te(!1)
								},
								dismissTask: async ($, J) => {
									const L = await (0, u.Mn)($, J);
									y(p({}, D, {
										dismissedTasks: L
									}))
								},
								handleAddTasksToShowAgain: $ => {
									F(J => {
										const L = new Set([...J, ...$]);
										return Array.from(L)
									})
								},
								handleDeleteTasksToShowAgain: $ => {
									F(J => J.filter(L => !$.includes(L)))
								}
							}
						}),
						children: A
					})
				}
		},
		"../react/app/components/Persistence/api.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				C8: function() {
					return _
				},
				LC: function() {
					return r
				},
				Mn: function() {
					return m
				},
				Sp: function() {
					return g
				},
				ZN: function() {
					return a
				},
				dr: function() {
					return v
				},
				lt: function() {
					return c
				},
				m6: function() {
					return i
				},
				n: function() {
					return n
				},
				yl: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const s = "/persistence/user",
				d = async () => {
					try {
						return await (await e.get(s, {
							hideErrorAlert: !0
						})).body
					} catch (p) {
						console.error(p)
					}
				}, a = async () => {
					try {
						await e.del(s, {
							hideErrorAlert: !0
						})
					} catch (p) {
						console.error(p)
					}
				}, v = async p => {
					try {
						return await (await e.get(`/accounts/${p}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (b) {
						console.error(b)
					}
				}, c = async (p, b) => {
					try {
						return await (await e.post(`${s}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: p,
								accountId: b
							}),
							hideErrorAlert: !0
						})).body
					} catch (O) {
						return console.error(O), []
					}
				}, u = async (p, b) => {
					try {
						return await http.post(`/accounts/${p}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: b
							}),
							hideErrorAlert: !0
						}), !0
					} catch (O) {
						return console.error(O), !1
					}
				}, _ = async p => {
					try {
						return await (await e.post(s, {
							body: JSON.stringify({
								darkMode: p
							})
						})).body
					} catch (b) {
						console.error(b)
					}
				}, n = async p => {
					try {
						return await (await e.post(`${s}/recents`, {
							body: JSON.stringify(p),
							hideErrorAlert: !0
						})).body
					} catch (b) {
						console.error(b)
					}
				}, r = async p => {
					try {
						return await (await e.post(`${s}/pinned-items`, {
							body: JSON.stringify(p),
							hideErrorAlert: !0
						})).body
					} catch (b) {
						throw console.error(b), b
					}
				}, i = async p => {
					try {
						return await (await e.post(`${s}/viewed-changes`, {
							body: JSON.stringify(p),
							hideErrorAlert: !0
						})).body
					} catch (b) {
						throw console.error(b), b
					}
				}, g = async p => {
					try {
						return await (await e.post(s + "/flags", {
							body: JSON.stringify(p)
						})).body
					} catch (b) {
						throw console.error(b), b
					}
				}, m = async (p, b) => {
					try {
						return await (await e.post(`${s}/dismissed-tasks`, {
							body: JSON.stringify({
								name: p,
								accountId: b
							}),
							hideErrorAlert: !0
						})).body
					} catch (O) {
						throw console.error(O), O
					}
				}
		},
		"../react/app/components/Persistence/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return o
				},
				W: function() {
					return e
				}
			});
			const e = 10,
				o = 6
		},
		"../react/app/components/Persistence/hooks.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				y: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/components/Persistence/index.tsx");
			const d = () => (0, e.useContext)(s.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				Wl: function() {
					return s.W
				},
				F3: function() {
					return s.F
				},
				lp: function() {
					return e.lp
				},
				Z_: function() {
					return e.Z_
				},
				r7: function() {
					return b
				},
				Tv: function() {
					return A
				},
				yZ: function() {
					return o.y
				}
			});
			var e = t("../react/app/components/Persistence/Persistence.tsx"),
				o = t("../react/app/components/Persistence/hooks.ts"),
				s = t("../react/app/components/Persistence/constants.ts"),
				d = t("webpack/sharing/consume/default/react/react"),
				a = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				v = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = t("../../../../node_modules/react/jsx-runtime.js");

			function u(I) {
				for (var D = 1; D < arguments.length; D++) {
					var y = arguments[D] != null ? Object(arguments[D]) : {},
						P = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(y).filter(function(S) {
						return Object.getOwnPropertyDescriptor(y, S).enumerable
					})), P.forEach(function(S) {
						_(I, S, y[S])
					})
				}
				return I
			}

			function _(I, D, y) {
				return D = n(D), D in I ? Object.defineProperty(I, D, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[D] = y, I
			}

			function n(I) {
				var D = r(I, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function r(I, D) {
				if (typeof I != "object" || I === null) return I;
				var y = I[Symbol.toPrimitive];
				if (y !== void 0) {
					var P = y.call(I, D || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(I)
			}

			function i(I, D) {
				if (I == null) return {};
				var y = g(I, D),
					P, S;
				if (Object.getOwnPropertySymbols) {
					var M = Object.getOwnPropertySymbols(I);
					for (S = 0; S < M.length; S++) P = M[S], !(D.indexOf(P) >= 0) && (!Object.prototype.propertyIsEnumerable.call(I, P) || (y[P] = I[P]))
				}
				return y
			}

			function g(I, D) {
				if (I == null) return {};
				var y = {},
					P = Object.keys(I),
					S, M;
				for (M = 0; M < P.length; M++) S = P[M], !(D.indexOf(S) >= 0) && (y[S] = I[S]);
				return y
			}
			const m = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var b = I => {
					let {
						isStarred: D,
						size: y = 16
					} = I, P = i(I, ["isStarred", "size"]);
					const S = m[(0, a.Yc)() ? "dark" : "light"];
					return (0, c.jsx)(v.J, u({
						type: D ? "star" : "star-outline",
						color: D ? S.gold : S.gray,
						size: y
					}, P))
				},
				O = t("../node_modules/@cloudflare/elements/es/index.js");

			function h(I) {
				for (var D = 1; D < arguments.length; D++) {
					var y = arguments[D] != null ? Object(arguments[D]) : {},
						P = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(y).filter(function(S) {
						return Object.getOwnPropertyDescriptor(y, S).enumerable
					})), P.forEach(function(S) {
						l(I, S, y[S])
					})
				}
				return I
			}

			function l(I, D, y) {
				return D = C(D), D in I ? Object.defineProperty(I, D, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[D] = y, I
			}

			function C(I) {
				var D = f(I, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function f(I, D) {
				if (typeof I != "object" || I === null) return I;
				var y = I[Symbol.toPrimitive];
				if (y !== void 0) {
					var P = y.call(I, D || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(I)
			}
			const w = {
				light: {
					default: {
						border: "gray.8",
						text: "gray.2",
						bg: "white",
						bgDisabled: "grey.6",
						bgHover: "gray.9"
					},
					active: {
						border: "blue.5",
						text: "blue.5",
						bg: "blue.9",
						bgDisabled: "grey.6",
						bgHover: "button.plain.hover.background"
					}
				},
				dark: {
					default: {
						border: "gray.8",
						text: "gray.1",
						bg: "gray.7",
						bgDisabled: "grey.6",
						bgHover: "gray.6"
					},
					active: {
						border: "blue.5",
						text: "gray.1",
						bg: "blue.9",
						bgDisabled: "grey.6",
						bgHover: "button.plain.hover.background"
					}
				}
			};
			var A = (0, d.forwardRef)(({
				featurePreview: I = !1,
				isStarred: D,
				onClickFn: y,
				isDisabled: P,
				testId: S,
				buttonText: M,
				size: F = "large",
				variant: ne = "pill"
			}, te) => {
				const [re, z] = (0, d.useState)(!1), N = w[(0, a.Yc)() ? "dark" : "light"][D && !I ? "active" : "default"], R = h({}, F === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, F === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, F === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), K = {
					pill: "50vh",
					button: 4
				};
				return (0, c.jsxs)(O.zx, {
					onMouseEnter: () => z(!0),
					onMouseLeave: () => z(!1),
					innerRef: te,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: R.paddingRight,
					gap: 1,
					pl: R.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: K[ne],
					border: "1px solid",
					cursor: I || P ? "default" : "pointer",
					backgroundColor: re ? N.bgHover : N.bg,
					color: N.text,
					borderColor: N.border,
					onClick: y,
					opacity: P ? .5 : 1,
					disabled: P,
					fontSize: R.fontSize,
					height: R.height,
					"data-testid": S,
					children: [(0, c.jsx)(b, {
						isStarred: I ? !1 : D,
						size: R.starIconSize
					}), M]
				})
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				iY: function() {
					return C
				},
				us: function() {
					return M
				},
				wB: function() {
					return f
				},
				gw: function() {
					return re
				},
				dL: function() {
					return I
				},
				IU: function() {
					return A
				},
				Wq: function() {
					return ne
				},
				fO: function() {
					return F
				},
				zJ: function() {
					return S
				},
				o_: function() {
					return P
				},
				Id: function() {
					return N
				},
				jq: function() {
					return z
				},
				hv: function() {
					return k
				},
				$n: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				o = t("../react/common/components/AccessCheck/index.ts"),
				s = t("../react/common/selectors/accountSelectors.ts"),
				d = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				v = t("../react/utils/zoneLevelAccess.ts"),
				c = t("../react/pages/home/configurations/dns-settings/isZoneDNSOnly.tsx"),
				u = t("../react/pages/home/domain-registration/selectors.ts"),
				_ = t("../react/pages/images/selectors.ts");
			const n = "r2_migrator_waitlist",
				r = "r2migrator",
				i = "r2",
				g = "r2_storage_migrator",
				m = "r2_storage_migrator",
				p = R => getAccountEntitlement(R, "r2.enabled"),
				b = R => Boolean((0, a.Le)(R, g, n)),
				O = R => Boolean(getAccountFlipperFlagsChanges(R, m, r));
			var h = t("../react/pages/stream/selectors.ts");
			const l = R => !!(0, v.b)(R),
				C = R => l(R) ? (0, o.hT)(R) : !0,
				f = (R, K, U, G = "read") => {
					const H = (0, a.nA)(R);
					return l(R) ? (0, o.WL)(R, (0, o.W9)(U, o.ZZ[G]), (0, o.j)(H == null ? void 0 : H.id)) : (0, s.Yj)(R)(K)[G]
				},
				w = (R, K, U, G = "read") => {
					const H = (0, a.nA)(R),
						Z = o.zs.includes(U);
					return l(R) ? (0, o.WL)(R, Z ? U : (0, o.my)(U, o.ZZ[G === "edit" ? "update" : G]), (0, o.j)(H == null ? void 0 : H.id)) : (0, s.Yj)(R)(K)[G === "update" ? "edit" : G]
				},
				k = R => !!(0, h._Q)(R),
				A = R => (0, _.pT)(R),
				I = R => (0, _.pT)(R) && (0, _.GH)(R),
				D = R => sourcingKitEnabledSelector(R),
				y = R => !!r2EnabledSelector(R),
				P = R => b(R),
				S = R => (0, d.$f)(R, "rulesets.magic_transit_allowed"),
				M = R => (0, d.$f)(R, "flowtrackd.magic_custom_config_allowed"),
				F = R => (0, d.$f)(R, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				ne = R => (0, s.Le)(R, "ddos_protection", "l4_rulesets"),
				te = R => hasAccountEntitlements(R, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				re = R => (0, u.HO)(R),
				z = R => !(0, d.yD)(R) && !!w(R, "ssl", "ssl.cert"),
				N = R => {
					const K = (0, a.nA)(R),
						U = (0, s.D0)(R),
						G = !!(0, e.z1)("zone-level-rum")(R);
					return !!U && (0, o.WL)(R, (0, o.jX)("rum.analytics", o.ZZ.read), (0, o.L8)(U.id)) && (K == null ? void 0 : K.status) === "active" && G && !(0, c.s)(R)
				}
		},
		"../react/app/components/SomethingWrong.jsx": function(j, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = t.n(s),
				a = t("../../../../node_modules/prop-types/index.js"),
				v = t.n(a),
				c = t("webpack/sharing/consume/default/react-redux/react-redux"),
				u = t.n(c),
				_ = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(_),
				r = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/component-button/es/index.js"),
				g = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				m = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				p = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				b = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				O = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				h = t.n(O),
				l = t("../react/common/actions/membershipActions.ts"),
				C = t("../react/utils/url.ts"),
				f = t("../react/app/components/Footer.tsx"),
				w = t("../../../../node_modules/react/jsx-runtime.js");

			function k(N) {
				for (var R = 1; R < arguments.length; R++) {
					var K = arguments[R] != null ? Object(arguments[R]) : {},
						U = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(K).filter(function(G) {
						return Object.getOwnPropertyDescriptor(K, G).enumerable
					})), U.forEach(function(G) {
						A(N, G, K[G])
					})
				}
				return N
			}

			function A(N, R, K) {
				return R = I(R), R in N ? Object.defineProperty(N, R, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[R] = K, N
			}

			function I(N) {
				var R = D(N, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function D(N, R) {
				if (typeof N != "object" || N === null) return N;
				var K = N[Symbol.toPrimitive];
				if (K !== void 0) {
					var U = K.call(N, R || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(N)
			}
			const y = (0, r.LM)(({
					type: N
				}) => ({
					height: N !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				P = (0, r.LM)(({
					theme: N,
					margin: R,
					size: K = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: N.colors.gray[3],
					height: R ? "auto" : "100%",
					padding: R ? 0 : N.space[K > 1 ? K - 2 : 0],
					margin: R,
					justifyContent: "center",
					alignItems: "center"
				})),
				S = (0, r.LM)(() => ({
					textAlign: "left"
				})),
				M = (0, r.LM)(() => ({
					textAlign: "right"
				})),
				F = (0, r.LM)(({
					theme: N
				}) => ({
					fontSize: N.fontSizes[6]
				})),
				ne = (0, r.LM)(({
					theme: N
				}) => ({
					fontSize: N.fontSizes[4]
				})),
				te = (0, r.LM)(({
					theme: N
				}) => ({
					fontSize: N.fontSizes[3]
				})),
				re = (0, r.LM)(({
					theme: N
				}) => ({
					width: "100%",
					height: 125,
					marginTop: N.space[4],
					padding: N.space[2]
				}), "textarea");
			class z extends o().Component {
				constructor(...R) {
					super(...R);
					A(this, "state", {
						value: "",
						submitted: !1
					}), A(this, "handleTextareaChange", K => {
						this.setState({
							value: K.target.value
						})
					}), A(this, "sendErrToSentry10", async () => {
						try {
							var K, U, G, H;
							const Z = ((K = window) === null || K === void 0 || (U = K.bootstrap) === null || U === void 0 || (G = U.data) === null || G === void 0 || (H = G.user) === null || H === void 0 ? void 0 : H.id) || "Unknown",
								$ = this.props.eventId || g.eW(),
								J = {
									name: Z,
									email: `${Z}@userid.com`,
									comments: this.state.value,
									eventId: $,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: k({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(J)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (Z) {
							console.error(Z)
						}
					}), A(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), A(this, "renderContent", K => (0, w.jsx)(_.I18n, {
						children: U => (0, w.jsx)(y, {
							type: K,
							children: (0, w.jsx)(P, {
								children: (0, w.jsxs)(S, {
									children: [(0, w.jsx)(F, {
										children: U.t("error.internal_issues")
									}), (0, w.jsx)(ne, {
										children: U.t("error.help_us")
									}), (0, w.jsx)(re, {
										name: "comment",
										value: this.state.textareaValue,
										onChange: G => this.handleTextareaChange(G),
										disabled: this.state.submitted,
										placeholder: U.t("error.give_feedback")
									}), (0, w.jsxs)(M, {
										children: [!this.state.submitted && (0, w.jsx)(i.zx, {
											onClick: this.handleSubmit,
											type: "primary",
											children: U.t("common.submit")
										}), this.state.submitted && (0, w.jsx)(te, {
											children: U.t("error.feedback_sent")
										})]
									})]
								})
							})
						})
					}))
				}
				async componentDidMount() {
					const {
						error: R,
						sentryTag: K,
						membershipsList: U
					} = this.props;
					console.error(`SomethingWrong: ${R}`);
					let G = "";
					const H = (0, C.e1)();
					if (H) {
						var Z;
						const J = await U({
								parameters: {
									status: "accepted"
								}
							}),
							L = J == null || (Z = J.find(W => W.id === H)) === null || Z === void 0 ? void 0 : Z.roles;
						L && L.length && (G = L.join(", "))
					}
					const $ = `ErrorBoundary - ${R}`;
					m.Tb($, {
						tags: {
							errorBoundary: K,
							normalizedPath: (0, C.Fl)(window.location.pathname),
							roles: G.length ? G : void 0
						}
					}), h().sendEvent("something wrong", {
						error: R,
						roles: G.length ? G : void 0
					})
				}
				render() {
					const {
						type: R
					} = this.props;
					return R === "fullscreen" ? (0, w.jsxs)("div", {
						children: [(0, w.jsx)(p.h4, {
							children: (0, w.jsx)(s.Link, {
								to: "/",
								children: (0, w.jsx)(b.TR, {})
							})
						}), this.renderContent(R), (0, w.jsx)(f.Z, {})]
					}) : this.renderContent(R)
				}
			}
			z.propTypes = {
				type: v().oneOf(["fullscreen", "page"]),
				error: v().oneOfType([v().string, v().object]),
				eventId: v().string,
				sentryTag: v().string,
				membershipsList: v().func
			}, E.Z = (0, c.connect)(() => ({}), {
				membershipsList: l.YT
			})(z)
		},
		"../react/app/providers/storeContainer.js": function(j, E, t) {
			"use strict";
			t.d(E, {
				bh: function() {
					return S
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				o = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				s = t.n(o),
				d = t("../../../../node_modules/redux-thunk/es/index.js"),
				a = t("../../../../node_modules/redux-persist/es/index.js"),
				v = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				c = t("../react/app/rootReducer.js"),
				u = t("../react/app/redux/normalizer.js"),
				_ = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				r = t("../react/app/reducerRegistry.js"),
				i = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				g = t("../react/common/sagas/index.js"),
				m = t("../react/app/redux/processActionMiddleware.js"),
				p = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				b = t("../../../../node_modules/is-promise/index.js"),
				O = t.n(b);

			function h(M) {
				for (var F = 1; F < arguments.length; F++) {
					var ne = arguments[F] != null ? Object(arguments[F]) : {},
						te = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(ne).filter(function(re) {
						return Object.getOwnPropertyDescriptor(ne, re).enumerable
					})), te.forEach(function(re) {
						l(M, re, ne[re])
					})
				}
				return M
			}

			function l(M, F, ne) {
				return F = C(F), F in M ? Object.defineProperty(M, F, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[F] = ne, M
			}

			function C(M) {
				var F = f(M, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function f(M, F) {
				if (typeof M != "object" || M === null) return M;
				var ne = M[Symbol.toPrimitive];
				if (ne !== void 0) {
					var te = ne.call(M, F || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(M)
			}
			const w = {
					key: "cf-redux-store",
					storage: v.Z,
					whitelist: ["accountAccess", "invite"]
				},
				k = (0, i.ZP)(),
				I = [({
					dispatch: M
				}) => F => ne => O()(ne) ? ne.then(te => M(te)) : F(ne), k, d.Z, m.Z, u.qR],
				D = M => (0, a.Wq)(w, h({}, c.Z, M));

			function y() {
				const M = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					ne = e.compose((0, e.applyMiddleware)(...I), _.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					te = {},
					re = (0, e.createStore)(D(r.Z.getReducers()), te, ne);
				k.run(g.Z), (0, a.p5)(re);
				const N = (t.g.bootstrap || {}).data || {};
				return re.dispatch((0, p.mW)("user", N.user)), re
			}
			let P;
			r.Z.setChangeListener(M => {
				var F;
				P && ((F = P) === null || F === void 0 ? void 0 : F.replaceReducer) && (P.replaceReducer(D(M)), (0, a.p5)(P))
			});

			function S() {
				return P || (P = y()), P
			}
		},
		"../react/app/redux/index.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				RA: function() {
					return v
				},
				TZ: function() {
					return a
				},
				UM: function() {
					return _
				},
				ZS: function() {
					return c
				},
				p4: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react/react"),
				d = t.n(s);
			const a = () => (0, e.useStore)(),
				v = () => a().getState(),
				c = () => {
					const r = a(),
						[i, g] = (0, s.useState)(r.getState());
					return (0, s.useEffect)(() => r.subscribe(() => {
						g(r.getState())
					}), [r]), i
				},
				u = () => {
					const r = a(),
						[i, g] = useState(r.getState());
					return useEffect(() => r.subscribe(() => {
						g(r.getState())
					}), [r]), i
				},
				_ = () => (0, e.useDispatch)(),
				n = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(j, E, t) {
			"use strict";
			t.d(E, {
				$J: function() {
					return i
				},
				Oy: function() {
					return r
				},
				SC: function() {
					return _
				},
				ZP: function() {
					return g
				},
				dJ: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				s = t.n(o);

			function d(m) {
				for (var p = 1; p < arguments.length; p++) {
					var b = arguments[p] != null ? Object(arguments[p]) : {},
						O = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(b).filter(function(h) {
						return Object.getOwnPropertyDescriptor(b, h).enumerable
					})), O.forEach(function(h) {
						a(m, h, b[h])
					})
				}
				return m
			}

			function a(m, p, b) {
				return p = v(p), p in m ? Object.defineProperty(m, p, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[p] = b, m
			}

			function v(m) {
				var p = c(m, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function c(m, p) {
				if (typeof m != "object" || m === null) return m;
				var b = m[Symbol.toPrimitive];
				if (b !== void 0) {
					var O = b.call(m, p || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(m)
			}
			const u = d({}, o),
				_ = (m, p, b, O = {}) => {
					const h = m === "delete" ? "del" : m.toLowerCase();
					return b && h !== "del" && (O.body = b), u[h](p, O)
				},
				n = (m, p) => (m.meta.params = p, m),
				r = (m, p, b, O, {
					body: h = {}
				}) => {
					const {
						result: l,
						messages: C,
						result_info: f
					} = h, w = Object.values(p);
					if (m.meta.method === "delete") {
						const k = w[w.length - 1];
						m.meta.id = typeof k == "object" ? k.id : k
					}
					return m.payload = l, C && (m.meta.messages = C), w.length && (m.meta.params = p), f && (m.meta.paginationData = {
						info: f,
						actionParameters: w,
						options: b[0],
						insertionOffset: 0
					}), m
				},
				i = (m, p, b, O, h) => (m.payload = h && h.body && h.body.errors, m.meta.messages = h && h.body && h.body.messages, m.meta.params = p, m.apiError = h, m);

			function g(m, p, b, O) {
				const h = (0, e.RM)(m, p, b, O).apiFetch(_).on("start", n).on("success", r).on("error", i),
					l = h.mock;
				return h.mock = C => (l((...f) => {
					const w = C(...f);
					return w && typeof w == "object" && "result" in w ? w : {
						result: w
					}
				}), h), h
			}
		},
		"../react/app/redux/normalizer.js": function(j, E, t) {
			"use strict";
			t.d(E, {
				P1: function() {
					return _
				},
				jQ: function() {
					return c
				},
				qR: function() {
					return n
				},
				uc: function() {
					return u
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				o = t("../react/pages/workers/entityTypes.ts"),
				s = t("../react/pages/email/types.ts"),
				d = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				a = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				v = t.n(a);
			const c = a.static.from([{
					entityType: "accessOrganization"
				}, {
					entityType: "access-temp-data"
				}, {
					entityType: "accessPolicy"
				}, {
					entityType: "accessGroup"
				}, {
					entityType: "accessPolicies",
					to: "accessPolicy"
				}, {
					entityType: "accessGroups",
					to: "accessGroup"
				}, {
					entityType: "accessAppLauncher"
				}, {
					entityType: "accounts"
				}, {
					entityType: e.w8.alert
				}, {
					entityType: e.w8.alerts,
					to: e.w8.alert
				}, {
					entityType: e.w8.alertsHistory
				}, {
					entityType: e.w8.integrations
				}, {
					entityType: e.w8.pagerDuty
				}, {
					entityType: e.w8.pagerDutyRequest
				}, {
					entityType: e.w8.statuspageComponents
				}, {
					entityType: e.w8.webhook
				}, {
					entityType: e.w8.webhooks
				}, {
					entityType: e.w8.availableAlerts
				}, {
					entityType: e.w8.availableAlertsForProduct
				}, {
					entityType: e.w8.deliveryMechanisms
				}, {
					entityType: "accountsDetailed"
				}, {
					entityType: "accountSubscriptions",
					to: "accountSubscription"
				}, {
					entityType: "zoneSubscriptions",
					to: "zoneSubscription"
				}, {
					entityType: "accountSubscription"
				}, {
					entityType: "billingFreeTrial"
				}, {
					entityType: "accountSubscriptionCancelDowngrade"
				}, {
					entityType: "accountSubscriptionCancellationReason"
				}, {
					entityType: "accountLegoContract"
				}, {
					entityType: "accountMember"
				}, {
					entityType: "accountMembers",
					to: "accountMember"
				}, {
					entityType: "accountSingle"
				}, {
					entityType: "accountRoles"
				}, {
					entityType: "accountHealthChecks"
				}, {
					entityType: "advancedTCPProtection"
				}, {
					entityType: "advancedTCPAllowlistItem"
				}, {
					entityType: "advancedTCPAllowlist",
					to: "advancedTCPAllowlistItem"
				}, {
					entityType: "amp"
				}, {
					entityType: "apiShields",
					to: "apiShield"
				}, {
					entityType: "apiShield"
				}, {
					entityType: "apiToken"
				}, {
					entityType: "apiTokens",
					to: "apiToken"
				}, {
					entityType: "apiTokenZones",
					to: "zone"
				}, {
					entityType: "apiTokenFormZones",
					to: "zone"
				}, {
					entityType: "apiTokenSearchZones",
					to: "zone"
				}, {
					entityType: "apiTokenSearchAccounts",
					to: "accountsDetailed"
				}, {
					entityType: "billing.usageGraphQL"
				}, {
					entityType: "billingAccount"
				}, {
					entityType: "billingPlans"
				}, {
					entityType: "billingProfile"
				}, {
					entityType: "billingTransactions"
				}, {
					entityType: "billingOutstandingTransactions"
				}, {
					entityType: "billingBadDebt"
				}, {
					entityType: "billingUnpaidInvoices"
				}, {
					entityType: "billingNextBilling"
				}, {
					entityType: "billableUsage"
				}, {
					entityType: "billingContractSelfServeEligibility"
				}, {
					entityType: "certificate"
				}, {
					entityType: "certificates",
					to: "certificate"
				}, {
					entityType: "colosStats"
				}, {
					entityType: "certificatePack"
				}, {
					entityType: "certificatePacks",
					to: "certificatePack"
				}, {
					entityType: "certificateOrder"
				}, {
					entityType: "certificateValidationStatus"
				}, {
					entityType: "clientCertificate"
				}, {
					entityType: "clientCertificates",
					to: "clientCertificate"
				}, {
					entityType: "customHostname"
				}, {
					entityType: "customHostnames",
					to: "customHostname"
				}, {
					entityType: "customCSR"
				}, {
					entityType: "customCSRs",
					to: "customCSR"
				}, {
					entityType: "dnsFirewallCluster"
				}, {
					entityType: "dnsFirewallClusters",
					to: "dnsFirewallCluster"
				}, {
					entityType: "dnsRecord"
				}, {
					entityType: "dnsRecords",
					to: "dnsRecord"
				}, {
					entityType: "dnsRecordsBulkAction",
					to: "dnsRecords"
				}, {
					entityType: "dnsRecordsImport"
				}, {
					entityType: "dnsAcl"
				}, {
					entityType: "dnsAcls",
					to: "dnsAcl"
				}, {
					entityType: "dnsTsig"
				}, {
					entityType: "dnsTsigs",
					to: "dnsTsig"
				}, {
					entityType: "dnsOutgoingZoneTransfers"
				}, {
					entityType: "dnsMaster"
				}, {
					entityType: "dnsMasters",
					to: "dnsMaster"
				}, {
					entityType: "dpa"
				}, {
					entityType: "filter"
				}, {
					entityType: "filteredMemberships"
				}, {
					entityType: "firewallRule",
					nestedProps: {
						filter: "filter"
					}
				}, {
					entityType: "firewallRules",
					to: "firewallRule"
				}, {
					entityType: "greTunnel"
				}, {
					entityType: "greTunnels",
					to: "greTunnel"
				}, {
					entityType: "interconnect"
				}, {
					entityType: "interconnects",
					to: "interconnect"
				}, {
					entityType: "healthCheck"
				}, {
					entityType: "healthChecks",
					to: "healthCheck"
				}, {
					entityType: "magicConnector"
				}, {
					entityType: "magicConnectors",
					to: "magicConnector"
				}, {
					entityType: "warpTunnels"
				}, {
					entityType: "hostnameRegions"
				}, {
					entityType: "http2ToOrigin"
				}, {
					entityType: "http2ToOriginMultiplexing"
				}, {
					entityType: "httpStats"
				}, {
					entityType: "httpStatsOverview"
				}, {
					entityType: "identityProvider"
				}, {
					entityType: "identityProviders",
					to: "identityProvider"
				}, {
					entityType: "ipAccessRule"
				}, {
					entityType: "ipAccessRules",
					to: "ipAccessRule"
				}, {
					entityType: "ipPrefix"
				}, {
					entityType: "ipPrefixes",
					to: "ipPrefix"
				}, {
					entityType: "ipsecTunnel"
				}, {
					entityType: "ipsecTunnels",
					to: "ipsecTunnel"
				}, {
					entityType: "pcapBucket"
				}, {
					entityType: "pcapBucketValidation",
					to: "pcapBucket"
				}, {
					entityType: "pcapBuckets",
					to: "pcapBucket"
				}, {
					entityType: "pcapCapture"
				}, {
					entityType: "pcapCaptures",
					to: "pcapCapture"
				}, {
					entityType: "networkMonitoringConfiguration"
				}, {
					entityType: "networkMonitoringRule"
				}, {
					entityType: "networkMonitoringRules",
					to: "networkMonitoringRule"
				}, {
					entityType: "loadBalancer",
					nestedProps: {
						default_pools: "pool",
						fallback_pool: "pool",
						region_pools: "pool",
						country_pools: "pool",
						pop_pools: "pool"
					}
				}, {
					entityType: "privateLoadBalancer",
					nestedProps: {
						default_pools: "pool",
						fallback_pool: "pool",
						region_pools: "pool",
						country_pools: "pool",
						pop_pools: "pool"
					}
				}, {
					entityType: "languagePreference"
				}, {
					entityType: "loadBalancers",
					to: "loadBalancer"
				}, {
					entityType: "privateLoadBalancers",
					to: "privateLoadBalancer"
				}, {
					entityType: "accountLogpushJob"
				}, {
					entityType: "accountLogpushJobs",
					to: "accountLogpushJob"
				}, {
					entityType: "logpushJob"
				}, {
					entityType: "logpushJobs",
					to: "logpushJob"
				}, {
					entityType: "logpushDestinationExists"
				}, {
					entityType: "logpushDestinationValidation"
				}, {
					entityType: "logpushSentOwnershipToken"
				}, {
					entityType: "logpushOwnershipValidation"
				}, {
					entityType: "logpushFieldsAll"
				}, {
					entityType: "logpushFieldsDefault"
				}, {
					entityType: "staticRoute"
				}, {
					entityType: "staticRoutes",
					to: "staticRoute"
				}, {
					entityType: "membership",
					to: "memberships"
				}, {
					entityType: "memberships",
					nestedProps: {
						account: "accounts"
					}
				}, {
					entityType: "monitor"
				}, {
					entityType: "monitors",
					to: "monitor"
				}, {
					entityType: "mTlsHosts"
				}, {
					entityType: "nel"
				}, {
					entityType: "normalizationSetting"
				}, {
					entityType: "schemaValidationV2"
				}, {
					entityType: "paymentMethod"
				}, {
					entityType: "paymentMethods",
					to: "paymentMethod"
				}, {
					entityType: "pool",
					nestedProps: {
						monitor: "monitor"
					}
				}, {
					entityType: "pools",
					to: "pool"
				}, {
					entityType: "prefixDelegation"
				}, {
					entityType: "prefixDelegations",
					to: "prefixDelegation"
				}, {
					entityType: "prefixServices",
					idProp: "prefix_id"
				}, {
					entityType: "onboardingGuide"
				}, {
					entityType: "organization"
				}, {
					entityType: "originCertificate"
				}, {
					entityType: "originCertificates",
					to: "originCertificate"
				}, {
					entityType: "pageRule"
				}, {
					entityType: "pageRules",
					to: "pageRule"
				}, {
					entityType: "purgeCache"
				}, {
					entityType: "sanitizeRuleset"
				}, {
					entityType: "sanitizeRulesetOverrides"
				}, {
					entityType: "sanitizeRulesets",
					to: "sanitizeRuleset"
				}, {
					entityType: "serviceToken"
				}, {
					entityType: "serviceTokens",
					to: "serviceToken"
				}, {
					entityType: "shortLivedCertificate"
				}, {
					entityType: "shortLivedCertificates",
					to: "shortLivedCertificate"
				}, {
					entityType: "shareStats"
				}, {
					entityType: "spectrumApp"
				}, {
					entityType: "spectrumApps",
					to: "spectrumApp"
				}, {
					entityType: "sslRecommenderPreference"
				}, {
					entityType: "sslRecommendation"
				}, {
					entityType: "totalTLSSettings"
				}, {
					entityType: "certificatePacksByHosts"
				}, {
					entityType: "customHostnamesByHosts"
				}, {
					entityType: "synProtectionRule"
				}, {
					entityType: "synProtectionRules",
					to: "synProtectionRule"
				}, {
					entityType: "synProtectionFilter"
				}, {
					entityType: "synProtectionFilters",
					to: "synProtectionFilter"
				}, {
					entityType: "tcpFlowProtectionRule"
				}, {
					entityType: "tcpFlowProtectionRules",
					to: "tcpFlowProtectionRule"
				}, {
					entityType: "tcpProtectionFilter"
				}, {
					entityType: "tcpProtectionFilters",
					to: "tcpProtectionFilter"
				}, {
					entityType: "dnsProtectionRule"
				}, {
					entityType: "dnsProtectionRules",
					to: "dnsProtectionRule"
				}, {
					entityType: "user",
					nestedProps: {
						organizations: "userOrganization"
					}
				}, {
					entityType: "userOrganization"
				}, {
					entityType: "userAgentRule"
				}, {
					entityType: "userAgentRules",
					to: "userAgentRule"
				}, {
					entityType: "userSessions"
				}, {
					entityType: "regionalHostname",
					idProp: "hostname"
				}, {
					entityType: "regionalHostnames",
					to: "regionalHostname"
				}, {
					entityType: "revokeSession"
				}, {
					entityType: "securityKey"
				}, {
					entityType: "securityKeys"
				}, {
					entityType: "rateLimit"
				}, {
					entityType: "rateLimits",
					to: "rateLimit"
				}, {
					entityType: "auditLogs"
				}, {
					entityType: "userCommPreferences"
				}, {
					entityType: "userDetails"
				}, {
					entityType: "userGroup"
				}, {
					entityType: "userGroupMembers"
				}, {
					entityType: "workerRoutes"
				}, {
					entityType: "zone"
				}, {
					entityType: "singleZone",
					to: "zone"
				}, {
					entityType: "zoneSubscription"
				}, {
					entityType: "recheckNameservers"
				}, {
					entityType: "abuseUrls"
				}, {
					entityType: "zoneHold"
				}, {
					entityType: "abuseReview"
				}, {
					entityType: "zones",
					to: "zone"
				}, {
					entityType: "zonesRoot",
					to: "zone"
				}, {
					entityType: "zonesAccount",
					to: "zone"
				}, {
					entityType: "zoneDnsSettings"
				}, {
					entityType: "zoneMarketingCampaigns"
				}, {
					entityType: "zoneRuleset"
				}, {
					entityType: "zoneRulesets"
				}, {
					entityType: "zoneRulesetsEnabled"
				}, {
					entityType: "zoneRulesetDLPOverride",
					to: "zoneRuleset"
				}, {
					entityType: "zoneRulesetOverride",
					to: "zoneRuleset"
				}, {
					entityType: "zoneMasters"
				}, {
					entityType: "zoneUiConfig"
				}, {
					entityType: "zoneLockdown"
				}, {
					entityType: "zoneLockdowns",
					to: "zoneLockdown"
				}, {
					entityType: "argoGeoAnalytics"
				}, {
					entityType: "argoGlobalAnalytics"
				}, {
					entityType: "dnsAnalyticsTopNxDomainRecords"
				}, {
					entityType: "dnsAnalyticsTopRecords"
				}, {
					entityType: "dnsAnalyticsTSByRecordType"
				}, {
					entityType: "dnsAnalyticsTSByResponseCode"
				}, {
					entityType: "geographyDnsAnalyticsNoErrorPerColo"
				}, {
					entityType: "geographyDnsAnalyticsNxDomainPerColo"
				}, {
					entityType: "geographyDnsAnalyticsPerColo"
				}, {
					entityType: "geographyHttpAnalytics"
				}, {
					entityType: "h2Prioritization"
				}, {
					entityType: "speedBrain"
				}, {
					entityType: "firstPartyFonts"
				}, {
					entityType: "imageResizing"
				}, {
					entityType: "rateLimitingAnalytics"
				}, {
					entityType: "rulesets"
				}, {
					entityType: "rum"
				}, {
					entityType: "rumRule"
				}, {
					entityType: "rumRuleset"
				}, {
					entityType: "rumSiteTag"
				}, {
					entityType: "rumRedirectToOnboarding"
				}, {
					entityType: "rumSiteInfo"
				}, {
					entityType: "rumSiteInfoList"
				}, {
					entityType: "rumSiteInfoTagList"
				}, {
					entityType: "rumSiteInfoZoneList"
				}, {
					entityType: "rumFeature"
				}, {
					entityType: "performanceHttpAnalytics"
				}, {
					entityType: "csamScanner"
				}, {
					entityType: "csamScannerThirdParty"
				}, {
					entityType: "alwaysOnline"
				}, {
					entityType: "coveoCategoryResults"
				}, {
					entityType: "phoneSupportTwoFactor"
				}, {
					entityType: "supportOpenTickets"
				}, {
					entityType: "knownIssueTickets"
				}, {
					entityType: "ticket"
				}, {
					entityType: "phoneSupportOTP"
				}, {
					entityType: "helperbotDiagnostics"
				}, {
					entityType: "chinaNetwork"
				}, {
					entityType: "automaticPlatformOptimization"
				}, {
					entityType: "pageShieldScript"
				}, {
					entityType: "pageShieldScripts",
					to: "pageShieldScript"
				}, {
					entityType: "pageShieldConnection"
				}, {
					entityType: "pageShieldConnections",
					to: "pageShieldConnection"
				}, {
					entityType: "pageShieldPolicy"
				}, {
					entityType: "pageShieldPolicies",
					to: "pageShieldPolicy"
				}, {
					entityType: "securityHttpAnalytics"
				}, {
					entityType: "speedTesting"
				}, {
					entityType: "webhook"
				}, {
					entityType: "webhooks",
					to: "webhook"
				}, {
					entityType: o.D.route
				}, {
					entityType: o.D.routes,
					to: o.D.route
				}, {
					entityType: "domainGroup"
				}, {
					entityType: "domainGroups",
					to: "domainGroup"
				}, {
					entityType: "domainGroupsAllDomain"
				}, {
					entityType: "domainGroupManagerZones",
					to: "zone"
				}, {
					entityType: "domainGroupFormZones",
					to: "zone"
				}, {
					entityType: "granularResources"
				}, {
					entityType: "HTTPApplicationVersion"
				}, {
					entityType: "HTTPApplicationVersions",
					to: "HTTPApplicationVersion"
				}, {
					entityType: "HTTPApplication",
					nestedProps: {
						versions: "HTTPApplicationVersions"
					}
				}, {
					entityType: "HTTPApplications",
					to: "HTTPApplication"
				}, {
					entityType: "HTTPApplicationConvertedId"
				}, {
					entityType: "WAFMigrationStatus"
				}, {
					entityType: "HTTPApplicationsRuleset"
				}, {
					entityType: "HTTPApplicationsRule"
				}, {
					entityType: "inviteMembersSearchZones",
					to: "zone"
				}, {
					entityType: "inviteMembersZones",
					to: "zone"
				}, {
					entityType: "waitingRoom"
				}, {
					entityType: "waitingRooms",
					to: "waitingRoom"
				}, {
					entityType: "waitingRoomEvent"
				}, {
					entityType: "waitingRoomEvents",
					to: "waitingRoomEvent"
				}, {
					entityType: "zoneVersion"
				}, {
					entityType: "zoneVersionCompare"
				}, {
					entityType: "zoneVersions",
					to: "zoneVersion"
				}, {
					entityType: "zoneApplication",
					nestedProps: {
						versions: "zoneVersions"
					}
				}, {
					entityType: "zoneApplications",
					to: "zoneApplication"
				}, {
					entityType: "WAFMigrationStatus"
				}, {
					entityType: "environments"
				}, {
					entityType: "organizations"
				}, {
					entityType: "tenants"
				}, {
					entityType: "accountTypes"
				}, {
					entityType: "permissionGroups"
				}, {
					entityType: "zoneLevelAccessPolicy"
				}, {
					entityType: "zoneLevelAccessPolicies",
					to: "zoneLevelAccessPolicy"
				}, {
					entityType: "oAuthConsentApp"
				}, {
					entityType: "oAuthConsentApps",
					to: "oAuthConsentApp"
				}, {
					entityType: "wafPackages"
				}, {
					entityType: "wafPackageGroup"
				}, {
					entityType: "wafPackageGroups",
					to: "wafPackageGroup"
				}, {
					entityType: "wafRule"
				}, {
					entityType: "wafRules",
					to: "wafRule"
				}, {
					entityType: "web3Hostname"
				}, {
					entityType: "web3Hostnames",
					to: "web3Hostname"
				}, {
					entityType: "web3Blocklist"
				}, {
					entityType: "web3Blocklists",
					to: "web3Blocklist"
				}, {
					entityType: "zaraz"
				}, {
					entityType: s.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: s.BB.rule,
					idProp: "tag"
				}, {
					entityType: s.BB.rules,
					to: s.BB.rule
				}, {
					entityType: s.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: s.BB.dstAddresses,
					to: s.BB.dstAddress
				}, {
					entityType: s.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: s.BB.dnsRecords,
					to: s.BB.dnsRecord
				}, {
					entityType: s.BB.zone,
					idProp: "tag"
				}]),
				u = r => r.entities,
				_ = (...r) => (0, d.P1)(c, u, ...r),
				n = (0, d.QB)(c)
		},
		"../react/app/redux/utils.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return s
				},
				_: function() {
					return o
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const o = d => (a, v, c) => (0, e.SC)(a, v, c, {
					hideErrorAlert: !0
				}).catch(d),
				s = d => a => {
					if (a.status === d) return a;
					throw a
				}
		},
		"../react/common/actionTypes.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Cm: function() {
					return v
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return c
				},
				Li: function() {
					return _
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return s
				},
				Yc: function() {
					return r
				},
				gM: function() {
					return d
				},
				lV: function() {
					return a
				},
				s1: function() {
					return u
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				s = "MODAL_OPEN",
				d = "MODAL_CLOSE",
				a = "TOGGLE_ON",
				v = "TOGGLE_OFF",
				c = "SET_ACTIVE",
				u = "CLEAR_ACTIVE",
				_ = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(i) {
				return i.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", i.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", i.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", i.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", i.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", i.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", i.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", i.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", i.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", i
			}({})
		},
		"../react/common/actions/activeActions.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				I: function() {
					return o
				},
				n: function() {
					return s
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = (d, a) => ({
					type: e.HI,
					activeKey: d,
					activeValue: a
				}),
				s = d => ({
					type: e.s1,
					activeKey: d
				})
		},
		"../react/common/actions/membershipActions.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				AX: function() {
					return i
				},
				YT: function() {
					return _
				},
				ct: function() {
					return c
				},
				d6: function() {
					return n
				},
				kt: function() {
					return r
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/common/constants/index.ts");

			function s(g) {
				for (var m = 1; m < arguments.length; m++) {
					var p = arguments[m] != null ? Object(arguments[m]) : {},
						b = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(p).filter(function(O) {
						return Object.getOwnPropertyDescriptor(p, O).enumerable
					})), b.forEach(function(O) {
						d(g, O, p[O])
					})
				}
				return g
			}

			function d(g, m, p) {
				return m = a(m), m in g ? Object.defineProperty(g, m, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[m] = p, g
			}

			function a(g) {
				var m = v(g, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function v(g, m) {
				if (typeof g != "object" || g === null) return g;
				var p = g[Symbol.toPrimitive];
				if (p !== void 0) {
					var b = p.call(g, m || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(g)
			}
			const c = g => {
					const m = g.payload.map(p => s({}, p, {
						membershipId: p.id,
						id: p.account.id
					}));
					return s({}, g, {
						payload: m
					})
				},
				u = g => {
					const m = c(g);
					return Array.isArray(m.payload) ? s({}, g, {
						payload: m.payload[0]
					}) : s({}, g, {
						payload: null
					})
				},
				_ = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", c),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...g) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: g
				}),
				i = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", u)
		},
		"../react/common/actions/modalActions.ts": function(j, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				closeModal: function() {
					return d
				},
				openModal: function() {
					return s
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function s(a, v, c = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: a,
						props: v
					},
					options: c
				}
			}

			function d(a) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: a
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(j, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				add: function() {
					return a
				},
				error: function() {
					return _
				},
				info: function() {
					return c
				},
				success: function() {
					return v
				},
				warn: function() {
					return u
				}
			});
			var e = t("../react/common/actionTypes.ts");

			function o(n) {
				return {
					type: e.Ng,
					notification: n
				}
			}

			function s(n) {
				return {
					type: e.Cz,
					notificationId: n
				}
			}
			let d = 0;

			function a(n, r, i = {}) {
				return i = i || {},
					function(g) {
						let m = d++,
							p = {
								id: m,
								type: n,
								message: r,
								delay: i.delay,
								persist: i.persist === void 0 ? !1 : i.persist,
								closable: i.closable === void 0 ? !0 : i.closable,
								onClose() {
									g(s(m)), i.onClose && i.onClose.apply(null, arguments)
								}
							};
						g(o(p))
					}
			}

			function v(n, r) {
				return a("success", n, r)
			}

			function c(n, r) {
				return a("info", n, r)
			}

			function u(n, r) {
				return a("warning", n, r)
			}

			function _(n, r) {
				return a("error", n, r)
			}
		},
		"../react/common/actions/userActions.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				BT: function() {
					return c
				},
				Ut: function() {
					return O
				},
				V_: function() {
					return h
				},
				Y9: function() {
					return p
				},
				Z0: function() {
					return C
				},
				mp: function() {
					return b
				},
				r3: function() {
					return l
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/app/redux/utils.ts");

			function s(f) {
				for (var w = 1; w < arguments.length; w++) {
					var k = arguments[w] != null ? Object(arguments[w]) : {},
						A = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(k).filter(function(I) {
						return Object.getOwnPropertyDescriptor(k, I).enumerable
					})), A.forEach(function(I) {
						d(f, I, k[I])
					})
				}
				return f
			}

			function d(f, w, k) {
				return w = a(w), w in f ? Object.defineProperty(f, w, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[w] = k, f
			}

			function a(f) {
				var w = v(f, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function v(f, w) {
				if (typeof f != "object" || f === null) return f;
				var k = f[Symbol.toPrimitive];
				if (k !== void 0) {
					var A = k.call(f, w || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(f)
			}
			const c = (0, e.C)("user").get`/user`,
				u = (0, e.C)("user").patch`/user`,
				_ = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/two_factor_authentication`,
				g = (0, e.C)("user").delete`/user/two_factor_authentication`,
				m = (0, e.C)("user").put`/user/email`;

			function p(...f) {
				return m(...f)
			}
			const b = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				O = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(f => s({}, f, {
					body: s({}, f.body, {
						result: {}
					})
				}))),
				h = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				l = (0, e.C)("userDetails").get`/user/details`,
				C = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AuthzContext.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				Hf: function() {
					return w
				},
				we: function() {
					return k
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				d = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				a = t("../react/utils/url.ts"),
				v = t("../../../../node_modules/lodash/lodash.js"),
				c = t("../../../../node_modules/swr/core/dist/index.mjs");
			const u = async () => {
				var y;
				const P = await fetch("/api/v4/user/iam/dash-authz-eval-roles");
				if (!P.ok) throw new Error(`Failed to fetch authz eval roles: ${P.status}`);
				const S = await P.json();
				if (((y = S.result) === null || y === void 0 ? void 0 : y.roles) === void 0 || !(0, v.isArray)(S.result.roles)) throw new Error(`Unexpected authz eval roles API response shape: ${JSON.stringify(S.result)}`);
				return S.result.roles
			};

			function _() {
				const {
					data: y,
					error: P,
					isLoading: S
				} = (0, c.ZP)("user/iam/dash-authz-eval-roles", u, {
					dedupingInterval: 24 * 60 * 60 * 1e3,
					revalidateOnFocus: !0,
					focusThrottleInterval: 24 * 60 * 60 * 1e3,
					revalidateOnReconnect: !1
				});
				return {
					roles: y || null,
					isLoading: S,
					error: (P == null ? void 0 : P.message) || null
				}
			}
			var n = t("../react/common/components/AccessCheck/useAccountParentOrgs.ts"),
				r = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts");
			const i = 60 * 1e3,
				g = new Set(["b7db8a5d0e51afce2d33ea16d8219fc6", "3576b716b54efb9e7851fe9e7a22e440", "ca11caa2415c966f6fb75f025ed1f354", "56517c9d595ec8e23d789fd2c6d18990", "340188bc4fd1e745704cedf68408ff05", "3f96cb3e7cb3fa852b055b63baf69624"]),
				m = async () => {
					var y;
					const P = await fetch("/api/v4/user/iam/policies");
					if (!P.ok) throw new Error(`Failed to fetch authz policies: ${P.status}`);
					const S = await P.json(),
						M = S == null || (y = S.result) === null || y === void 0 ? void 0 : y.policies;
					if (!M || !(0, v.isArray)(M) || M.length === 0) throw new Error(`Unexpected authz policies API response shape: ${JSON.stringify(M)}`);
					return M
				};

			function p(y) {
				var P;
				const S = !!y,
					M = g.has((P = y) !== null && P !== void 0 ? P : ""),
					F = S && !M,
					{
						data: ne,
						error: te,
						isLoading: re,
						mutate: z
					} = (0, c.ZP)(F ? `user/iam/policies/${y}` : null, () => m(), {
						dedupingInterval: i,
						revalidateOnFocus: !0,
						focusThrottleInterval: i,
						revalidateOnReconnect: !1
					}),
					N = async () => {
						!F || z()
					};
				return {
					policies: ne || null,
					isLoading: F ? re : !1,
					isLoadingSkippedByUserID: M,
					error: (te == null ? void 0 : te.message) || null,
					refresh: N
				}
			}
			var b = t("../../../../node_modules/react/jsx-runtime.js");

			function O(y) {
				for (var P = 1; P < arguments.length; P++) {
					var S = arguments[P] != null ? Object(arguments[P]) : {},
						M = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(S).filter(function(F) {
						return Object.getOwnPropertyDescriptor(S, F).enumerable
					})), M.forEach(function(F) {
						h(y, F, S[F])
					})
				}
				return y
			}

			function h(y, P, S) {
				return P = l(P), P in y ? Object.defineProperty(y, P, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[P] = S, y
			}

			function l(y) {
				var P = C(y, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function C(y, P) {
				if (typeof y != "object" || y === null) return y;
				var S = y[Symbol.toPrimitive];
				if (S !== void 0) {
					var M = S.call(y, P || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(y)
			}
			const f = new Set,
				w = o().createContext(void 0);

			function k({
				children: y,
				userID: P,
				isUserInDSR: S
			}) {
				var M;
				const F = p(P),
					ne = (0, d.useHistory)(),
					te = (0, a.uW)(ne.location.pathname),
					re = (0, n.I)((M = S) !== null && M !== void 0 ? M : !0, te),
					z = _();
				(0, r.k)(te);
				const N = {
					isUserInDSR: S,
					contextAccountTag: te,
					contextAccountOrgsState: re,
					allRolesState: z,
					policiesState: F,
					refreshPolicies: F.refresh,
					reportSentryException: I
				};
				return (0, b.jsx)(w.Provider, {
					value: N,
					children: y
				})
			}
			const A = () => {
					const y = useContext(w);
					if (!y) throw new Error("useRefreshPolicies must be used within a PoliciesProvider");
					return y.refreshPolicies
				},
				I = (y, P, S) => {
					const {
						parentComponent: M,
						stackSummary: F
					} = D(y), ne = `${P.component}->${F}->${P.component_issue}`;
					f.has(ne) || (f.add(ne), s.Tb(y, {
						tags: O({
							parentComponent: M
						}, P),
						extra: O({
							stackSummary: F
						}, S),
						level: "error"
					}))
				},
				D = y => {
					var P;
					const M = (y.stack || "").split(`
`),
						F = [];
					for (const te of M) {
						const re = [/at (\w+)\s+\(/, /at Object\.(\w+)/, /(\w+)@/, /\/(\w+)\.tsx?:/, /\/(\w+)\.jsx?:/];
						for (const z of re) {
							const N = te.match(z);
							if (N && N[1] && !["Object", "eval", "anonymous"].includes(N[1])) {
								F.push(N[1]);
								break
							}
						}
					}
					const ne = [...new Set(F)].filter(te => !["useIsAuthorized", "renderWithHooks", "updateFunctionComponent"].includes(te)).slice(0, 5);
					return {
						parentComponent: (P = ne[0]) !== null && P !== void 0 ? P : "undefined",
						stackSummary: ne.join(" \u2192 ")
					}
				}
		},
		"../react/common/components/AccessCheck/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				E1: function() {
					return o
				},
				L8: function() {
					return n
				},
				W9: function() {
					return _
				},
				ZZ: function() {
					return v
				},
				j: function() {
					return r
				},
				jX: function() {
					return c
				},
				my: function() {
					return u
				},
				u1: function() {
					return e
				},
				zs: function() {
					return a
				}
			});
			const e = "com.cloudflare.api.account",
				o = "com.cloudflare.api.account.",
				s = "com.cloudflare.edge.",
				d = "com.cloudflare.api.account.zone.",
				a = ["com.cloudflare.api.app.manage"];
			let v = function(i) {
				return i.read = "read", i.list = "list", i.create = "create", i.update = "update", i.delete = "delete", i.sign = "sign", i.refresh = "refresh", i
			}({});
			const c = (i, g) => `${o}${i?i+".":""}${g}`,
				u = (i, g) => `${d}${i?i+".":""}${g}`,
				_ = (i, g) => `${s}${i}.${g}`,
				n = (i = "") => `${o}${i}`,
				r = (i = "") => `${d}${i}`
		},
		"../react/common/components/AccessCheck/index.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				E1: function() {
					return u.E1
				},
				zs: function() {
					return u.zs
				},
				hT: function() {
					return a.hT
				},
				WL: function() {
					return a.WL
				},
				kd: function() {
					return a.kd
				},
				ZP: function() {
					return d
				},
				jX: function() {
					return u.jX
				},
				L8: function() {
					return u.L8
				},
				W9: function() {
					return u.W9
				},
				my: function() {
					return u.my
				},
				j: function() {
					return u.j
				},
				ZZ: function() {
					return u.ZZ
				},
				xk: function() {
					return e.Z
				},
				bk: function() {
					return v.bk
				},
				xI: function() {
					return v.xI
				},
				K9: function() {
					return v.K9
				}
			});
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/utils/zoneLevelAccess.ts"),
				d = ({
					legacyPermission: _,
					canAccess: n,
					children: r,
					render: i
				}) => {
					const g = !!(0, o.P)();
					let m;
					typeof n == "boolean" && n !== void 0 && g ? m = {
						read: n,
						list: n,
						create: n,
						update: n,
						delete: n,
						sign: n
					} : m = (0, e.Z)(_);
					const p = i || r;
					return p ? p(m) : null
				},
				a = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				v = t("../react/common/components/AccessCheck/useIsAuthorized.ts"),
				c = t("../react/common/components/AccessCheck/useIsAuthorizedMulti.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(j, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				d = t("../react/common/selectors/accountSelectors.ts"),
				a = t("../react/pages/zone-versioning/selectors.ts");

			function v(c) {
				const {
					read: u,
					edit: _
				} = (0, s.p4)(d.Yj)(c);
				let n = _;
				if (c != "zone_versioning") {
					const i = (0, s.p4)(a.G);
					(i == null ? void 0 : i.isLocked) && (n = !1)
				}
				return (0, e.useMemo)(() => ({
					read: u,
					list: u,
					create: n,
					update: n,
					delete: n,
					sign: n
				}), [u, n])
			}
			E.Z = v
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				F3: function() {
					return h
				},
				WL: function() {
					return g
				},
				YB: function() {
					return m
				},
				_S: function() {
					return p
				},
				hT: function() {
					return b
				},
				kd: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				o = t("../../../../node_modules/lodash-es/isString.js"),
				s = t("../react/pages/home/members/utils.ts"),
				d = t("../react/common/components/AccessCheck/constants.ts"),
				a = t("../react/pages/zone-versioning/selectors.ts"),
				v = t("../react/common/selectors/accountSelectors.ts");
			const c = {
					allow: "allow",
					deny: "deny"
				},
				u = 0,
				_ = 1,
				n = 2,
				r = 3;

			function i(A, I, D, y) {
				let P = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					S;
				for (S in P) P[S] = g(A, `${I}.${S}`, D, y);
				return P
			}

			function g(A, I, D, y) {
				var P;
				if (m(I) && !p(I)) {
					const te = (0, a.G)(A);
					if (te == null ? void 0 : te.isLocked) return !1
				}
				const S = (P = (0, v.D0)(A)) === null || P === void 0 ? void 0 : P.id,
					M = S ? [`com.cloudflare.api.account.${S}`] : void 0,
					F = (0, s.vq)(S);
				return !!O(A, F, I, D, y || M)
			}

			function m(A) {
				return ![d.ZZ.read, d.ZZ.list].some(I => A.endsWith(I))
			}

			function p(A) {
				return A.includes("zone.versioning")
			}

			function b(A) {
				const I = (0, v.Ko)(A);
				let D = !1;
				return I == null || I.forEach(y => {
					y.access === c.allow && y.permission_groups.forEach(P => {
						var S;
						(P == null || (S = P.meta) === null || S === void 0 ? void 0 : S.scopes) === d.u1 && (D = !0)
					})
				}), D
			}

			function O(A, I, D, y, P) {
				const S = (0, v.Ko)(A),
					M = {};
				S == null || S.forEach(re => {
					var z;
					const N = re.access;
					let R = u;
					if (D && re.permission_groups.forEach(K => {
							var U, G;
							I == null || (U = I.find(H => H.id === K.id)) === null || U === void 0 || (G = U.permissions) === null || G === void 0 || G.forEach(H => {
								R = Math.max(R, l(H, D))
							})
						}), R !== u && !!y) {
						let K = u;
						re.resource_groups.forEach(U => {
							K = Math.max(K, f(U.scope, y, P))
						}), R = K === u ? K : R + K
					}(M == null || (z = M[N]) === null || z === void 0 ? void 0 : z[R]) || (0, e.Z)(M, [N, R], []), M[N][R].push(re)
				});
				const F = M[c.allow] && Object.keys(M[c.allow]).map(re => parseInt(re)),
					ne = M[c.deny] && Object.keys(M[c.deny]).map(re => parseInt(re)),
					te = Math.max.apply(Math, F);
				return te === u || Math.max.apply(Math, ne) >= te ? null : M[c.allow][te]
			}

			function h(A, I, D, y, P) {
				const S = {};
				A == null || A.forEach(te => {
					var re;
					const z = te.access;
					let N = u;
					if (D && te.roles.forEach(R => {
							var K;
							const U = I == null ? void 0 : I.find(G => G.id === R.id);
							U == null || (K = U.permissions) === null || K === void 0 || K.forEach(G => {
								N = Math.max(N, l({
									key: G,
									id: "irrelevant"
								}, D))
							})
						}), N !== u && !!y) {
						let R = u;
						te.scopes.forEach(K => {
							R = Math.max(R, f(K, y, P))
						}), N = R === u ? R : N + R
					}(S == null || (re = S[z]) === null || re === void 0 ? void 0 : re[N]) || (0, e.Z)(S, [z, N], []), S[z][N].push(te)
				});
				const M = S[c.allow] && Object.keys(S[c.allow]).map(te => parseInt(te)),
					F = S[c.deny] && Object.keys(S[c.deny]).map(te => parseInt(te)),
					ne = Math.max.apply(Math, M);
				return ne === u || Math.max.apply(Math, F) >= ne ? null : S[c.allow][ne]
			}

			function l(A, I) {
				if (A.key === I || C(A.key, I)) return r;
				for (const D of (A == null ? void 0 : A.implies) || []) {
					let y = l(D, I);
					if (y > u) return y
				}
				return u
			}

			function C(A, I) {
				const D = I == null ? void 0 : I.lastIndexOf(".");
				return D === -1 ? !1 : (I == null ? void 0 : I.substring(0, D)) + ".*" === A
			}

			function f(A, I, D) {
				var y;
				let P = u;
				if (A == null || (y = A.objects) === null || y === void 0 || y.forEach(S => {
						P = Math.max(P, k(S, I))
					}), P === u) return P;
				if (A.key !== "*") switch (!0) {
					case w(A.key, D) > u:
					case (!(D == null ? void 0 : D.length) && P === r):
						break;
					case (P === _ && w(A.key, [I]) > u):
						P = w(A.key, [I]);
						break;
					default:
						return u
				}
				for (const S of A.subset_of || [])
					if (w(S.key, D) === u) return u;
				return P
			}

			function w(A, I = []) {
				for (const D of I || []) {
					if (A === D) return r;
					if (C(A, D)) return n
				}
				return u
			}

			function k(A, I) {
				const D = (0, o.Z)(A) ? A : A.key;
				return D === I ? r : D === "*" || A === "*" ? _ : C(D, I) ? n : u
			}
		},
		"../react/common/components/AccessCheck/useAccountParentOrgs.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				I: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				s = t("../../../../node_modules/swr/core/dist/index.mjs");
			const d = async v => {
				var c;
				const u = await fetch(`/api/v4/accounts/${v}/organizations`);
				if (!u.ok) throw new Error(`Failed to fetch account parent Orgs: ${u.status}`);
				const _ = (c = await u.json()) === null || c === void 0 ? void 0 : c.result;
				if (_ === void 0 || !(0, e.isArray)(_)) throw new Error(`Unexpected parent Orgs API response shape: ${JSON.stringify(_)}`);
				const n = _.map(i => {
						var g;
						return {
							tag: i.id,
							parentTag: (g = i.parent) === null || g === void 0 ? void 0 : g.id
						}
					}),
					r = [];
				return n.forEach(i => {
					i.parentTag || r.push(`com.cloudflare.api.tenant.${i.tag}`), r.push(`com.cloudflare.api.tenant.unit.${i.tag}`)
				}), r
			};

			function a(v, c) {
				const {
					data: u,
					error: _,
					isLoading: n
				} = (0, s.ZP)(c ? `account-organizations-${c}` : null, () => d(c), {
					dedupingInterval: 5 * 60 * 1e3,
					revalidateOnFocus: !0,
					focusThrottleInterval: 5 * 60 * 1e3,
					revalidateOnReconnect: !1
				});
				return {
					orgScopes: u || null,
					isLoading: n,
					error: (_ == null ? void 0 : _.message) || null
				}
			}
		},
		"../react/common/components/AccessCheck/useAccountPermissionGroups.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				k: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/pages/home/members/utils.ts"),
				d = t("../../../../node_modules/lodash/lodash.js"),
				a = t.n(d),
				v = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t.n(v),
				u = t("../react/utils/url.ts"),
				_ = t("../../../../node_modules/swr/core/dist/index.mjs");

			function n(i) {
				var g;
				const m = (0, v.useHistory)(),
					p = (0, u.uW)(m.location.pathname),
					b = i || p,
					O = (0, s.Hf)(b),
					h = b && O.length === 0,
					{
						data: l,
						error: C,
						isLoading: f
					} = (0, _.ZP)(h ? `account-${b}-permission-groups` : null, b ? r(b) : () => {
						throw new Error("no accountTag, should never run")
					});
				if ((0, e.useEffect)(() => {
						l && b && ((0, s.LX)(b, l), (0, s.rC)(b, l))
					}, [l, b]), !b) return [null, !1, null];
				if (C) {
					var w;
					const A = (w = C.message) !== null && w !== void 0 ? w : JSON.stringify(C);
					return [null, !1, A]
				}
				if (f && O.length === 0) return [null, !0, null];
				const k = (g = l) !== null && g !== void 0 ? g : O;
				return k.length === 0 ? [
					[], !1, "no perm groups available through API or cache"
				] : [k, !1, null]
			}
			const r = i => async () => {
				const g = await fetch(`/api/v4/accounts/${i}/iam/permission_groups?depth=2&permissions=true`);
				if (!g.ok) throw new Error(`Failed to fetch permission groups: ${g.status}`);
				const m = await g.json(),
					p = m == null ? void 0 : m.result;
				if (p === void 0 || !(0, d.isArray)(p)) throw new Error(`Unexpected permission groups API response shape: ${JSON.stringify(p)}`);
				return p
			}
		},
		"../react/common/components/AccessCheck/useAccountResourceKeyFromURLPathAccountID.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				R: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				o = t.n(e),
				s = t("../react/utils/url.ts"),
				d = t("../react/common/components/AccessCheck/index.ts");
			const a = () => {
				const v = (0, e.useHistory)(),
					c = (0, s.uW)(v.location.pathname);
				return c ? `${d.E1}${c}` : void 0
			}
		},
		"../react/common/components/AccessCheck/useIsAuthorized.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				K9: function() {
					return l
				},
				bk: function() {
					return p
				},
				xI: function() {
					return C
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/common/components/AccessCheck/AuthzContext.tsx"),
				d = t("../react/app/redux/index.ts"),
				a = t("../react/pages/zone-versioning/selectors.ts"),
				v = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				c = t("../../../../node_modules/lodash/lodash.js"),
				u = t.n(c),
				_ = t("../react/common/components/AccessCheck/useAccountParentOrgs.ts"),
				n = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/common/selectors/zoneSelectors.ts"),
				i = t("../react/common/components/AccessCheck/useAccountResourceKeyFromURLPathAccountID.ts");
			const g = "com.cloudflare.api.account.",
				m = "alwaysUndefinedFallbackPermission";

			function p(f, w, k) {
				var A;
				const I = (0, e.useContext)(s.Hf);
				if (!I) throw new Error("useIsAuthorized must be used within AuthzContextProvider");
				let D, y = 0;
				k == null || k.forEach(oe => {
					if (!!O(oe)) {
						if (y++, y > 1) {
							I.reportSentryException(new Error("authz invalid question - useIsAuthorized was passed multiple Account scopes, only one will get parent Org scopes"), {
								component: "useIsAuthorized",
								component_issue: "multiple_account_scopes"
							}, {
								permission: f,
								resource: w,
								scopes: k
							});
							return
						}
						oe !== `${g}${I.contextAccountTag}` && (D = oe)
					}
				});
				const P = D ? D.replace(g, "") : void 0,
					S = (0, _.I)((A = I.isUserInDSR) !== null && A !== void 0 ? A : !0, P),
					M = (0, d.p4)(oe => (0, a.G)(oe));
				if ((0, v.YB)(f) && !(0, v._S)(f) && (M == null ? void 0 : M.isLocked)) return {
					isAuthzd: !1,
					isLoading: !1
				};
				if (f === m) return {
					isAuthzd: void 0,
					isLoading: !1
				};
				const {
					policies: F,
					isLoading: ne,
					isLoadingSkippedByUserID: te,
					error: re
				} = I.policiesState, {
					orgScopes: z,
					isLoading: N,
					error: R
				} = I.contextAccountOrgsState, {
					orgScopes: K,
					isLoading: U,
					error: G
				} = S, {
					roles: H,
					isLoading: Z,
					error: $
				} = I.allRolesState;
				if (te) return {
					isAuthzd: !0,
					isLoading: !1
				};
				if (ne || N || U || Z) return {
					isAuthzd: void 0,
					isLoading: !0
				};
				if (!w || w === "") return {
					isAuthzd: !1,
					isLoading: !1
				};
				if (re || R || G || $) return console.error("error loading authz policy data, displayed UI may not reflect actual policies"), {
					isAuthzd: void 0,
					isLoading: !1
				};
				const J = k && k.length > 0;
				if ((0, c.isNull)(F) || (0, c.isNull)(H) || !J && I.contextAccountTag && (0, c.isNull)(z)) return I.reportSentryException(new Error("authz undefined - missing useIsAuthorized policy data"), {
					component: "useIsAuthorized",
					component_issue: "missing_policy_data"
				}, {
					permission: f,
					resource: w,
					scopes: k
				}), {
					isAuthzd: void 0,
					isLoading: !1
				};
				const L = [];
				J ? (L.push(...k), K && L.push(...K)) : I.contextAccountTag && (L.push(`com.cloudflare.api.account.${I.contextAccountTag}`), L.push(...z)), L.length > 0 && h(w);
				const W = O(w);
				if (L.length === 0 && !W) return {
					isAuthzd: !1,
					isLoading: !1
				};
				const X = (0, c.uniq)(L),
					ie = (0, v.F3)(F, H, f, w, X);
				return {
					isAuthzd: Boolean(ie && ie.length > 0),
					isLoading: !1
				}
			}
			const b = new RegExp(`${g}[0-9a-fA-F]{32}`);

			function O(f) {
				return b.test(f)
			}

			function h(f) {
				return f === g
			}

			function l(f, w) {
				const k = (0, d.p4)(r.nA),
					A = (0, n.j)(k == null ? void 0 : k.id),
					I = p(f, A, w);
				return k ? I : {
					isAuthzd: void 0,
					isLoading: !0
				}
			}

			function C(f, w) {
				const k = (0, i.R)();
				return p(f, k, w)
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(j, E, t) {
			"use strict";
			t.d(E, {
				a: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				s = t("../react/common/selectors/accountSelectors.ts");
			const d = v => {
					if (typeof v != "string") throw new Error("invalid Param Type provided");
					const c = v.slice(1).split(":");
					if (c.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: c[0],
						value: c[1]
					}
				},
				a = (v, c) => {
					const {
						resourceId: u,
						accountId: _,
						legacyPermission: n
					} = c;
					let {
						read: r,
						edit: i
					} = c;
					const g = {};
					n && (i = `#${n}:edit`, r = `#${n}:read`);
					const m = u || _;
					if (r) {
						const p = Array.isArray(r) ? r : [r];
						g.isReadable = p.some(b => {
							const O = d(b);
							return (0, s.DT)(v, m, h => !!(h[O.key] && h[O.key][O.value]))
						})
					}
					if (i) {
						const p = Array.isArray(i) ? i : [i];
						g.isEditable = p.some(b => {
							const O = d(b);
							return (0, s.DT)(v, m, h => !!(h[O.key] && h[O.key][O.value]))
						})
					}
					return g
				};
			E.Z = (0, e.connect)(a)
		},
		"../react/common/components/AccessControl/index.js": function(j, E, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				o = t.n(e),
				s = t("../react/app/HoCs/withEntities.tsx"),
				d = t("../react/common/components/AccessControl/SAAConnect.js");

			function a(r) {
				for (var i = 1; i < arguments.length; i++) {
					var g = arguments[i] != null ? Object(arguments[i]) : {},
						m = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(g).filter(function(p) {
						return Object.getOwnPropertyDescriptor(g, p).enumerable
					})), m.forEach(function(p) {
						v(r, p, g[p])
					})
				}
				return r
			}

			function v(r, i, g) {
				return i = c(i), i in r ? Object.defineProperty(r, i, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = g, r
			}

			function c(r) {
				var i = u(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function u(r, i) {
				if (typeof r != "object" || r === null) return r;
				var g = r[Symbol.toPrimitive];
				if (g !== void 0) {
					var m = g.call(r, i || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}

			function _(r) {
				const g = ["isReadable", "isEditable"].reduce((m, p) => r.hasOwnProperty(p) ? a({}, m, {
					[p]: r[p]
				}) : m, {});
				return r.children(g)
			}
			_.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const n = (0, s.Z)((0, d.Z)(_));
			n.displayName = "AccessControl", E.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				PP: function() {
					return i
				},
				RJ: function() {
					return u
				},
				tz: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				d = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				a = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				v = t("../react/common/utils/oidc.ts");
			const c = () => _.test(window.location.pathname) || s.E.has(d.Qq),
				u = () => s.E.get(d.Qq),
				_ = /^\/login\/apple(\/)?/,
				r = [_, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				i = () => {
					let m = !1;
					r.forEach(b => {
						if (b.test(window.location.pathname)) {
							m = !0;
							return
						}
					});
					const p = c() && m;
					return p && (0, a.C8)(a.LF.OFF), p
				},
				g = m => {
					m && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					}), window.location.href = (0, v.e)(v.c.Apple, m)
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				oG: function() {
					return h
				},
				sN: function() {
					return u.sN
				},
				v2: function() {
					return u.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-button/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				v = t.n(a),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("../react/common/components/Dropdown/index.tsx"),
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				n = t("../../../../node_modules/react/jsx-runtime.js");

			function r(l) {
				for (var C = 1; C < arguments.length; C++) {
					var f = arguments[C] != null ? Object(arguments[C]) : {},
						w = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(f).filter(function(k) {
						return Object.getOwnPropertyDescriptor(f, k).enumerable
					})), w.forEach(function(k) {
						i(l, k, f[k])
					})
				}
				return l
			}

			function i(l, C, f) {
				return C = g(C), C in l ? Object.defineProperty(l, C, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[C] = f, l
			}

			function g(l) {
				var C = m(l, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function m(l, C) {
				if (typeof l != "object" || l === null) return l;
				var f = l[Symbol.toPrimitive];
				if (f !== void 0) {
					var w = f.call(l, C || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(l)
			}

			function p(l, C) {
				if (l == null) return {};
				var f = b(l, C),
					w, k;
				if (Object.getOwnPropertySymbols) {
					var A = Object.getOwnPropertySymbols(l);
					for (k = 0; k < A.length; k++) w = A[k], !(C.indexOf(w) >= 0) && (!Object.prototype.propertyIsEnumerable.call(l, w) || (f[w] = l[w]))
				}
				return f
			}

			function b(l, C) {
				if (l == null) return {};
				var f = {},
					w = Object.keys(l),
					k, A;
				for (A = 0; A < w.length; A++) k = w[A], !(C.indexOf(k) >= 0) && (f[k] = l[k]);
				return f
			}
			const O = (0, c.SU)(({
				theme: l
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${l.radii[2]}px 0 0 ${l.radii[2]}px`,
					borderRight: `1px solid ${l.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${l.radii[2]}px ${l.radii[2]}px 0`,
					paddingRight: l.space[2],
					paddingLeft: l.space[2]
				},
				"& button": {
					color: (0, _.Yc)() ? l.colors.text : void 0
				},
				"& button:hover": {
					color: (0, _.Yc)() ? l.colors.text : void 0
				}
			}));

			function h(l) {
				let {
					menu: C,
					containerProps: f,
					disabled: w,
					disabledDropdown: k = w
				} = l, A = p(l, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: I
				} = (0, a.useI18n)();
				return (0, n.jsxs)(O, r({}, f, {
					role: "group",
					children: [(0, n.jsx)(s.zx, r({}, A, {
						disabled: w
					})), (0, n.jsx)(u.Lt, {
						trigger: (0, n.jsx)(s.zx, {
							type: A.type,
							"aria-haspopup": "menu",
							disabled: k,
							children: (0, n.jsx)(d.J, {
								type: "caret-down",
								label: I("common.more"),
								size: 12
							})
						}),
						menu: C
					})]
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				v: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				a = t("../react/common/hooks/useIntersectionObserver.ts"),
				v = t("../../../../node_modules/react/jsx-runtime.js");

			function c(i) {
				for (var g = 1; g < arguments.length; g++) {
					var m = arguments[g] != null ? Object(arguments[g]) : {},
						p = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(m).filter(function(b) {
						return Object.getOwnPropertyDescriptor(m, b).enumerable
					})), p.forEach(function(b) {
						u(i, b, m[b])
					})
				}
				return i
			}

			function u(i, g, m) {
				return g = _(g), g in i ? Object.defineProperty(i, g, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[g] = m, i
			}

			function _(i) {
				var g = n(i, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function n(i, g) {
				if (typeof i != "object" || i === null) return i;
				var m = i[Symbol.toPrimitive];
				if (m !== void 0) {
					var p = m.call(i, g || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(i)
			}

			function r(i) {
				const g = (0, e.useRef)(null),
					[m, p] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const O = g.current;
					if (O) {
						const {
							bottom: h
						} = O.getBoundingClientRect();
						h > window.innerHeight && p(!0)
					}
				}, []);
				const b = (0, a.S)(O => {
					for (const h of O) h.intersectionRatio < 1 && p(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const O = g.current;
					if (O && b) return b.observe(O), () => {
						b.unobserve(O)
					}
				}, [b]), (0, v.jsx)(s.ZC, c({
					role: "menu",
					innerRef: g,
					position: "absolute",
					right: "0",
					backgroundColor: d.rS.colors.background,
					p: 1,
					color: "gray.4",
					border: "1px solid",
					borderColor: "gray.8",
					boxShadow: "rgba(0, 0, 0, 0.025) -1px 2px 1px 1px, rgba(0, 0, 0, 0.05) -3px 3px 7px 0px",
					borderRadius: 2,
					textAlign: "left",
					whiteSpace: "nowrap",
					overflow: "hidden"
				}, m ? {
					bottom: "100%",
					mb: "2px"
				} : {
					top: "100%",
					mt: "2px"
				}, {
					zIndex: 1040,
					minWidth: 170
				}, i))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				s: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				a = t.n(d),
				v = t("../../../../node_modules/react/jsx-runtime.js");

			function c(O, h) {
				if (O == null) return {};
				var l = u(O, h),
					C, f;
				if (Object.getOwnPropertySymbols) {
					var w = Object.getOwnPropertySymbols(O);
					for (f = 0; f < w.length; f++) C = w[f], !(h.indexOf(C) >= 0) && (!Object.prototype.propertyIsEnumerable.call(O, C) || (l[C] = O[C]))
				}
				return l
			}

			function u(O, h) {
				if (O == null) return {};
				var l = {},
					C = Object.keys(O),
					f, w;
				for (w = 0; w < C.length; w++) f = C[w], !(h.indexOf(f) >= 0) && (l[f] = O[f]);
				return l
			}

			function _(O) {
				for (var h = 1; h < arguments.length; h++) {
					var l = arguments[h] != null ? Object(arguments[h]) : {},
						C = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), C.forEach(function(f) {
						n(O, f, l[f])
					})
				}
				return O
			}

			function n(O, h, l) {
				return h = r(h), h in O ? Object.defineProperty(O, h, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[h] = l, O
			}

			function r(O) {
				var h = i(O, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function i(O, h) {
				if (typeof O != "object" || O === null) return O;
				var l = O[Symbol.toPrimitive];
				if (l !== void 0) {
					var C = l.call(O, h || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(O)
			}
			const g = ({
					theme: O
				}) => {
					const h = {
						cursor: "pointer",
						background: O.colors.gray[9],
						color: O.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: O.space[2],
						background: O.colors.background,
						color: O.colors.gray[3],
						fontSize: O.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						'&:hover:not(:disabled):not([aria-disabled="true"])': h,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': _({}, h, {
							boxShadow: "none",
							borderRadius: 0
						}),
						'&:is(:disabled, [aria-disabled="true"])': {
							color: O.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				m = (0, s.LM)(g, "a"),
				p = (0, s.LM)(g, "button");

			function b(O) {
				let {
					disabled: h = !1
				} = O, l = c(O, ["disabled"]);
				const C = (0, d.useHistory)(),
					f = {
						role: "menuitem"
					};
				if ("href" in l && typeof l.href == "string") return (0, v.jsx)(m, _({
					"aria-disabled": h
				}, f, l, {
					href: h ? void 0 : l.href,
					onClick: k => {
						var A;
						if (h) return k.stopPropagation();
						k.preventDefault(), (A = l.onClick) === null || A === void 0 || A.call(l, k), C.push(l.href)
					}
				}));
				var w;
				return (0, v.jsx)(p, _({
					type: (w = l.type) !== null && w !== void 0 ? w : "button"
				}, f, l, {
					disabled: h
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(j, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/prop-types/index.js"),
				d = t.n(s),
				a = t("../../../../node_modules/@cloudflare/component-box/es/index.js"),
				v = t("../../../../node_modules/react/jsx-runtime.js");
			const c = ({
				children: u
			}) => (0, v.jsx)(a.xu, {
				height: 411,
				children: u
			});
			c.propTypes = {
				children: d().node
			}, E.Z = c
		},
		"../react/common/components/ExternalLink.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				dL: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				d = t("../node_modules/@cloudflare/elements/es/index.js"),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				v = t("../../../../node_modules/react/jsx-runtime.js");

			function c(b) {
				for (var O = 1; O < arguments.length; O++) {
					var h = arguments[O] != null ? Object(arguments[O]) : {},
						l = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(h).filter(function(C) {
						return Object.getOwnPropertyDescriptor(h, C).enumerable
					})), l.forEach(function(C) {
						u(b, C, h[C])
					})
				}
				return b
			}

			function u(b, O, h) {
				return O = _(O), O in b ? Object.defineProperty(b, O, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[O] = h, b
			}

			function _(b) {
				var O = n(b, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function n(b, O) {
				if (typeof b != "object" || b === null) return b;
				var h = b[Symbol.toPrimitive];
				if (h !== void 0) {
					var l = h.call(b, O || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(b)
			}

			function r(b, O) {
				if (b == null) return {};
				var h = i(b, O),
					l, C;
				if (Object.getOwnPropertySymbols) {
					var f = Object.getOwnPropertySymbols(b);
					for (C = 0; C < f.length; C++) l = f[C], !(O.indexOf(l) >= 0) && (!Object.prototype.propertyIsEnumerable.call(b, l) || (h[l] = b[l]))
				}
				return h
			}

			function i(b, O) {
				if (b == null) return {};
				var h = {},
					l = Object.keys(b),
					C, f;
				for (f = 0; f < l.length; f++) C = l[f], !(O.indexOf(C) >= 0) && (h[C] = b[C]);
				return h
			}
			const g = (0, a.SU)(({
				verticalAlign: b = "text-bottom"
			}) => ({
				flex: "none",
				verticalAlign: b,
				fill: "currentColor"
			}), s.J);
			var m = null;
			const p = b => {
				let {
					to: O,
					children: h,
					icon: l = !0,
					target: C = "_blank",
					color: f,
					display: w = "inline-flex",
					iconMarginLeft: k = 1,
					iconMarginRight: A,
					alignSelfIcon: I = "center"
				} = b, D = r(b, ["to", "children", "icon", "target", "color", "display", "iconMarginLeft", "iconMarginRight", "alignSelfIcon"]);
				return (0, v.jsxs)(d.A, c({}, D, {
					href: O,
					target: C,
					rel: "noopener noreferrer",
					display: w,
					alignItems: "center",
					color: f,
					children: [h, l && (0, v.jsx)(g, {
						alignSelf: I,
						label: "External Link",
						type: "external-link",
						size: typeof l == "number" ? l : 18,
						ml: k,
						mr: A
					})]
				}))
			}
		},
		"../react/common/components/ModalManager.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return h
				},
				dd: function() {
					return b
				},
				vR: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react-redux/react-redux");
			const d = l => l.application.modals;
			var a = t("../react/common/actions/modalActions.ts"),
				v = t("../../../../node_modules/swr/core/dist/index.mjs"),
				c = t("../react/pages/zoneless-workers/utils/swrConfig.ts"),
				u = t("../../../../node_modules/react/jsx-runtime.js");

			function _(l) {
				for (var C = 1; C < arguments.length; C++) {
					var f = arguments[C] != null ? Object(arguments[C]) : {},
						w = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(f).filter(function(k) {
						return Object.getOwnPropertyDescriptor(f, k).enumerable
					})), w.forEach(function(k) {
						n(l, k, f[k])
					})
				}
				return l
			}

			function n(l, C, f) {
				return C = r(C), C in l ? Object.defineProperty(l, C, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[C] = f, l
			}

			function r(l) {
				var C = i(l, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function i(l, C) {
				if (typeof l != "object" || l === null) return l;
				var f = l[Symbol.toPrimitive];
				if (f !== void 0) {
					var w = f.call(l, C || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(l)
			}
			const g = o().createContext(null);
			class m extends o().Component {
				render() {
					const {
						modals: C,
						closeModal: f
					} = this.props;
					return (0, u.jsx)(u.Fragment, {
						children: C.map(({
							ModalComponent: w,
							props: k = {},
							id: A
						}) => {
							const I = () => {
								typeof k.onClose == "function" && k.onClose(), f(w)
							};
							return (0, u.jsx)(g.Provider, {
								value: {
									closeModal: I
								},
								children: (0, u.jsx)(v.J$, {
									value: c.ZP,
									children: (0, u.jsx)(w, _({}, k, {
										isOpen: !0,
										closeModal: I
									}))
								})
							}, A)
						})
					})
				}
			}

			function p() {
				const l = o().useContext(g);
				if (!l) throw new Error("useModalContext must be used within a ModalContext");
				return l
			}

			function b() {
				const l = (0, s.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...C) {
						return l(a.openModal(...C))
					}, [l]),
					closeModal: (0, e.useCallback)(function(...C) {
						return l(a.closeModal(...C))
					}, [l])
				}
			}
			var h = (0, s.connect)(l => ({
				modals: d(l)
			}), a)(m)
		},
		"../react/common/components/Page.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				d = t("../../../../node_modules/react/jsx-runtime.js");

			function a(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(m) {
						return Object.getOwnPropertyDescriptor(i, m).enumerable
					})), g.forEach(function(m) {
						v(n, m, i[m])
					})
				}
				return n
			}

			function v(n, r, i) {
				return r = c(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function c(n) {
				var r = u(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function u(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}

			function _(n) {
				return (0, d.jsx)(s.T3, a({}, n))
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return u
				},
				JR: function() {
					return _
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return v
				},
				ZI: function() {
					return a
				},
				if: function() {
					return o
				},
				q6: function() {
					return s
				},
				w_: function() {
					return d
				},
				zl: function() {
					return c
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				s = "date-from",
				d = "date-to",
				a = "from",
				v = "to",
				c = "all",
				u = {
					equals: "eq",
					notEquals: "neq",
					greaterThanOrEqual: "geq",
					greaterThan: "gt",
					lessThan: "lt",
					lessThanOrEqual: "leq",
					like: "like",
					notLike: "notlike",
					has: "has",
					notHas: "nothas",
					hasAll: "hasall",
					hasAny: "hasany",
					contains: "contains",
					startsWith: "starts",
					endsWith: "ends",
					notContains: "!contains",
					notStartsWith: "!starts",
					notEndsWith: "!ends",
					in: "in",
					notIn: "!in"
				};
			let _ = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.REMOVE_ALL_FILTERS = "Remove all filters", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r
				}({}),
				n = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Cf: function() {
					return _
				},
				hJ: function() {
					return u
				},
				ys: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(m) {
						return Object.getOwnPropertyDescriptor(i, m).enumerable
					})), g.forEach(function(m) {
						d(n, m, i[m])
					})
				}
				return n
			}

			function d(n, r, i) {
				return r = a(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function a(n) {
				var r = v(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const u = ({
					name: n,
					additionalData: r = {}
				}) => {
					o().sendEvent(n, s({}, r || {}))
				},
				_ = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				v: function() {
					return e
				}
			});
			let e = function(o) {
				return o.FIELD = "change field", o.OPERATOR = "change operator", o
			}({})
		},
		"../react/common/components/filter-editor/triplet-fields/SequencesField/constants.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				Aq: function() {
					return _
				},
				Xc: function() {
					return u
				},
				rg: function() {
					return n
				},
				xs: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				d = t("../node_modules/@cloudflare/component-link/es/index.js"),
				a = t("../node_modules/@cloudflare/elements/es/index.js"),
				v = t("../react/utils/translator.tsx"),
				c = t("../../../../node_modules/react/jsx-runtime.js");
			const u = "sequence builder modal opened",
				_ = "sequence builder modal submitted",
				n = 10,
				r = {
					INITIAL_PAGINATION: {
						page: 1,
						perPage: 10
					},
					INITIAL_SORT: {
						name: "endpoint",
						direction: s.Sr.asc
					},
					INITIAL_TOOLBAR_STATE: {
						search: "",
						filterValues: {
							method: "all"
						}
					},
					EMPTY_STATES: ({
						selectedHostname: i,
						isFiltersAndNoResults: g,
						addEndpointsRoute: m
					}) => i ? g ? {
						title: (0, c.jsx)(v.cC, {
							id: "common.table.empty.search.title"
						}),
						description: (0, c.jsx)(a.ZC, {
							mt: 1,
							children: (0, c.jsx)(v.cC, {
								id: "common.table.empty.search.description"
							})
						})
					} : {
						title: (0, c.jsx)(a.ZC, {
							textAlign: "center",
							children: (0, c.jsx)(v.cC, {
								id: "api_rules.sequences_rules.main.form.table.empty.no_endpoints.title"
							})
						}),
						description: (0, c.jsxs)(a.ZC, {
							mt: 3,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							textAlign: "center",
							fontSize: 2,
							children: [(0, c.jsx)(v.cC, {
								id: "api_rules.sequences_rules.main.form.table.empty.no_endpoints.description"
							}), (0, c.jsx)(d.QV, {
								to: m,
								children: (0, c.jsx)(v.cC, {
									id: "api_rules.sequences_rules.main.form.table.empty.no_endpoints.cta"
								})
							})]
						}),
						image: () => null
					} : {
						title: null,
						description: (0, c.jsx)(a.ZC, {
							textAlign: "center",
							children: (0, c.jsx)(v.cC, {
								id: "api_rules.sequences_rules.main.form.table.empty.no_hostname_selected"
							})
						}),
						image: () => null
					}
				}
		},
		"../react/common/constants/billing/index.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Gq: function() {
					return d
				},
				g$: function() {
					return s
				},
				WX: function() {
					return e
				},
				E0: function() {
					return _
				},
				Hw: function() {
					return v
				},
				Ed: function() {
					return a
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return g
				},
				hQ: function() {
					return c
				},
				SP: function() {
					return u
				}
			});
			let e = function(m) {
				return m.page_rules = "page_rules", m.automatic_platform_optimization = "automatic_platform_optimization", m
			}({});
			const o = "page_rules",
				s = "automatic_platform_optimization",
				d = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					volume_included: 1,
					ubb_frequency: 1,
					ubb_price: .1,
					ubb_unit: "gigabyte"
				},
				a = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				v = {
					currency: "USD",
					frequency: "monthly",
					requests_included: 5e5,
					ubb_price: .5,
					ubb_frequency: 5e5
				},
				c = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e4,
					ubb_frequency: 1e4,
					ubb_price: .05
				},
				u = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					ubb_frequency: 1e3,
					ubb_storage_price: 5,
					ubb_streaming_price: 1,
					ubb_unit: "minute"
				},
				_ = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					ubb_unit: "image",
					ubb_delivery_price: 1,
					ubb_frequency_delivery: 1e5,
					ubb_storage_price: 5,
					ubb_storage_frequency: 1e5,
					ubb_transformations_frequency: 2e3,
					ubb_transformations_price: 1
				};
			var n = t("../react/common/constants/billing/tax.ts"),
				r = t("../react/common/constants/billing/tracking.ts"),
				i = t("../react/common/constants/billing/workers.ts");
			const g = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				FP: function() {
					return e
				},
				Nl: function() {
					return a
				},
				SO: function() {
					return s
				},
				aA: function() {
					return o
				}
			});
			const e = {
					NOTIFICATION_CLICK: "Notification link click",
					CANCELED_SUBSCRIPTION: "Canceled subscription"
				},
				o = {
					NOTIFICATIONS: "notifications",
					SUBSCRIPTIONS: "subscriptions"
				},
				s = {
					BILLING: "billing"
				},
				d = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				a = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Dk: function() {
					return g
				},
				Dy: function() {
					return m
				},
				E_: function() {
					return v
				},
				Lv: function() {
					return p
				},
				S4: function() {
					return a
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return _
				},
				Y1: function() {
					return c
				},
				p6: function() {
					return u
				},
				q0: function() {
					return d
				},
				rg: function() {
					return b
				},
				sJ: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const d = "healthy",
				a = "degraded",
				v = "critical",
				c = "unknown",
				u = "not-monitored",
				_ = o().from({
					FREE: "free",
					PRO: "pro",
					BIZ: "business",
					ENT: "enterprise"
				}),
				n = {
					ZONES_ROOT_REQUESTED: "zones_root_requested",
					ZONES_ACCOUNT_REQUESTED: "zones_account_requested",
					ZONES_HEADER_REQUESTED: "zones_header_requested",
					MEMBERSHIPS_ROOT_REQUESTED: "membership_root_requested",
					ACCOUNT_MEMBERS_REQUESTED: "account_members_requested"
				},
				r = {
					f: _.FREE,
					p: _.PRO,
					b: _.BIZ
				},
				i = "marketing-pt",
				g = () => {
					const h = s.Z.get(i);
					if (!!h) return r[h]
				},
				m = ["gov"],
				p = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				b = "banner-notification-interactions",
				O = null
		},
		"../react/common/constants/index.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Dk: function() {
					return e.Dk
				},
				Dy: function() {
					return e.Dy
				},
				E0: function() {
					return o.E0
				},
				E_: function() {
					return e.E_
				},
				PLANS: function() {
					return e.Xf
				},
				S4: function() {
					return e.S4
				},
				UM: function() {
					return e.UM
				},
				WX: function() {
					return o.WX
				},
				Y1: function() {
					return e.Y1
				},
				bi: function() {
					return o.bi
				},
				g$: function() {
					return o.g$
				},
				p6: function() {
					return e.p6
				},
				q0: function() {
					return e.q0
				},
				rg: function() {
					return e.rg
				},
				sJ: function() {
					return e.sJ
				}
			});
			var e = t("../react/common/constants/constants.ts"),
				o = t("../react/common/constants/billing/index.ts")
		},
		"../react/common/constants/roles.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SUPER_ADMINISTRATOR_ALL_PRIVILEGES = "Super Administrator - All Privileges", o.CLOUDFLARE_ACCESS = "Cloudflare Access", o.CLOUDFLARE_ACCESS_APP_ADMIN = "Cloudflare Access App Admin", o.CLOUDFLARE_ACCESS_IDENTITY_PROVIDER_ADMIN = "Cloudflare Access Identity Provider Admin", o.ADMINISTRATOR = "Administrator", o.ADMINISTRATOR_READ_ONLY = "Administrator Read Only", o.ANALYTICS = "Analytics", o.API_GATEWAY = "API Gateway", o.API_GATEWAY_READ = "API Gateway Read", o.AUDIT_LOGS_VIEWER = "Audit Logs Viewer", o.BILLING = "Billing", o.BOT_MANAGEMENT = "Bot Management", o.BOT_MANAGEMENT_ACCOUNT_WIDE = "Bot Management (Account-Wide)", o.CACHE_DOMAIN_PURGE = "Cache Domain Purge", o.CACHE_PURGE = "Cache Purge", o.SSL_TLS_CACHING_PERFORMANCE_PAGE_RULES_AND_CUSTOMIZATION = "SSL/TLS, Caching, Performance, Page Rules, and Customization", o.EMAIL_CONFIGURATION_ADMIN = "Email Configuration Admin", o.EMAIL_INTEGRATION_ADMIN = "Email Integration Admin", o.EMAIL_SECURITY_ANALYST = "Email Security Analyst", o.EMAIL_SECURITY_READONLY = "Email Security Readonly", o.EMAIL_SECURITY_REPORTING = "Email Security Reporting", o.CLOUDFORCE_ONE_ADMIN = "Cloudforce One Admin", o.CLOUDFORCE_ONE_READ = "Cloudforce One Read", o.DNS = "DNS", o.DOMAIN_ADMINISTRATOR = "Domain Administrator", o.DOMAIN_ADMINISTRATOR_READ_ONLY = "Domain Administrator Read Only", o.DOMAIN_API_GATEWAY = "Domain API Gateway", o.DOMAIN_API_GATEWAY_READ = "Domain API Gateway Read", o.DOMAIN_DNS = "Domain DNS", o.DOMAIN_PAGE_SHIELD = "Domain Page Shield", o.DOMAIN_PAGE_SHIELD_READ = "Domain Page Shield Read", o.MAGIC_NETWORK_MONITORING_ADMIN = "Magic Network Monitoring Admin", o.MAGIC_NETWORK_MONITORING = "Magic Network Monitoring", o.MAGIC_NETWORK_MONITORING_READ_ONLY = "Magic Network Monitoring Read-Only", o.CLOUDFLARE_GATEWAY = "Cloudflare Gateway", o.CLOUDFLARE_WORKER_ADMIN = "Cloudflare Worker Admin", o.HTTP_APPLICATIONS = "HTTP Applications", o.HTTP_APPLICATIONS_READ = "HTTP Applications Read", o.CLOUDFLARE_IMAGES = "Cloudflare Images", o.LOAD_BALANCER = "Load Balancer", o.LOG_SHARE = "Log Share", o.NETWORK_SERVICES_WRITE_MAGIC = "Network Services Write (Magic)", o.NETWORK_SERVICES_READ_MAGIC = "Network Services Read (Magic)", o.MINIMAL_ACCOUNT_ACCESS = "Minimal Account Access", o.PAGE_SHIELD = "Page Shield", o.PAGE_SHIELD_READ = "Page Shield Read", o.HYPERDRIVE_ADMIN = "Hyperdrive Admin", o.HYPERDRIVE_READONLY = "Hyperdrive Readonly", o.CLOUDFLARE_R2_ADMIN = "Cloudflare R2 Admin", o.CLOUDFLARE_R2_READ = "Cloudflare R2 Read", o.LOG_SHARE_READER = "Log Share Reader", o.CLOUDFLARE_SNIPPETS_ADMIN = "Cloudflare Snippets Admin", o.CLOUDFLARE_STREAM = "Cloudflare Stream", o.CLOUDFLARE_ZERO_TRUST = "Cloudflare Zero Trust", o.CLOUDFLARE_DEX = "Cloudflare DEX", o.CLOUDFLARE_ZERO_TRUST_PII = "Cloudflare Zero Trust PII", o.CLOUDFLARE_ZERO_TRUST_READ_ONLY = "Cloudflare Zero Trust Read Only", o.CLOUDFLARE_ZERO_TRUST_REPORTING = "Cloudflare Zero Trust Reporting", o.TRANSFORM_RULES = "Transform Rules", o.TRUST_AND_SAFETY = "Trust and Safety", o.TURNSTILE = "Turnstile", o.TURNSTILE_READ = "Turnstile Read", o.VECTORIZE_ADMIN = "Vectorize Admin", o.VECTORIZE_READONLY = "Vectorize Readonly", o.FIREWALL = "Firewall", o.WAITING_ROOM_ADMIN = "Waiting Room Admin", o.WAITING_ROOM_READ = "Waiting Room Read", o.WORKERS_ADMIN = "Workers Admin", o.ZARAZ_ADMIN = "Zaraz Admin", o.ZARAZ_EDIT = "Zaraz Edit", o.ZARAZ_READONLY = "Zaraz Readonly", o.ZONE_VERSIONING = "Zone Versioning", o.ZONE_VERSIONING_ACCOUNT_WIDE = "Zone Versioning (Account-Wide)", o.ZONE_VERSIONING_READ = "Zone Versioning Read", o.ZONE_VERSIONING_READ_ACCOUNT_WIDE = "Zone Versioning Read (Account-Wide)", o.DOMAIN_WAITING_ROOM_ADMIN = "Domain Waiting Room Admin", o.DOMAIN_WAITING_ROOM_READ = "Domain Waiting Room Read", o.BRAND_PROTECTION = "Brand Protection", o
			}({})
		},
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				QK: function() {
					return e
				},
				dy: function() {
					return o
				},
				sO: function() {
					return s
				},
				x4: function() {
					return d
				}
			});
			let e = function(a) {
				return a.DELETE = "delete", a.CREATE = "create", a.GET = "get", a.UPDATE = "update", a
			}({});
			const o = {
					http_config_settings: "configuration",
					http_request_dynamic_redirect: "redirect",
					http_request_cache_settings: "cache",
					http_request_origin: "origin",
					http_request_late_transform: "modify request header",
					http_request_transform: "rewrite url",
					http_response_headers_transform: "modify response header",
					http_response_compression: "compression",
					http_custom_errors: "custom errors",
					http_ratelimit: "rate limiting",
					http_request_firewall_custom: "custom",
					http_request_firewall_managed: "managed"
				},
				s = (a, v, c = !1) => {
					var u;
					return `${v} ${(u=o[a])!==null&&u!==void 0?u:a} ${c?"ruleset":"rule"}${v===e.GET?"s":""}`
				},
				d = () => {
					var a;
					return (a = Object.keys(o).reduce((v, c) => {
						const u = Object.values(e).reduce((_, n) => (_.push(s(c, n)), _.push(s(c, n, !0)), _), []);
						return v.concat(u)
					}, [])) === null || a === void 0 ? void 0 : a.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				C: function() {
					return v
				},
				F: function() {
					return a
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = t.n(s);

			function a() {
				var c;
				const {
					accountId: u
				} = (0, s.useParams)(), _ = (0, e.p4)(o.D0);
				if (u === void 0 && !_) throw new Error("Account ID not found in URL params");
				return (c = u) !== null && c !== void 0 ? c : _ == null ? void 0 : _.id
			}

			function v() {
				const c = a();
				return (0, e.p4)(u => (0, o.Py)(u, c))
			}
		},
		"../react/common/hooks/useActiveState.ts": function(j, E, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				o = t("webpack/sharing/consume/default/react-redux/react-redux"),
				s = t.n(o),
				d = t("../react/common/selectors/commonSelectors.ts");
			const a = v => {
				const c = (0, o.useDispatch)();
				return [(0, o.useSelector)((0, d.cZ)(v)), n => {
					c((0, e.I)(v, n))
				}]
			};
			E.Z = a
		},
		"../react/common/hooks/useCachedState.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				j: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function d(a, {
				key: v,
				cache: c = s.E,
				ttl: u
			} = {}) {
				var _;
				const n = v !== void 0 && c.get(v),
					[r, i] = (0, e.useState)((_ = n) !== null && _ !== void 0 ? _ : a);
				return [r, m => {
					i(p => (m instanceof Function && (m = m(p)), v !== void 0 && c.set(v, m, u), m))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(j, E, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(s) {
				return (0, e.qf)(s)
			}
			E.Z = o
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function s(d, {
				root: a,
				rootMargin: v,
				threshold: c
			} = {}) {
				const u = (0, e.useRef)(null);

				function _() {
					return u.current === null && (u.current = new IntersectionObserver(d, {
						root: a,
						rootMargin: v,
						threshold: c
					})), u.current
				}
				return (0, e.useEffect)(() => (u.current = new IntersectionObserver(d, {
					root: a,
					rootMargin: v,
					threshold: c
				}), () => {
					var n;
					(n = u.current) === null || n === void 0 || n.disconnect()
				}), [d, a, v, c]), _()
			}
		},
		"../react/common/hooks/useIsInternal.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				t: function() {
					return s
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/userSelectors.ts");
			const s = () => {
				var d;
				const a = (0, e.p4)(o.PR);
				return (a == null || (d = a.email) === null || d === void 0 ? void 0 : d.endsWith("@cloudflare.com")) || !1
			}
		},
		"../react/common/hooks/usePrevious.ts": function(j, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function s(d) {
				const a = (0, e.useRef)(d);
				return (0, e.useEffect)(() => {
					a.current = d
				}, [d]), a.current
			}
			E.Z = s
		},
		"../react/common/hooks/useScope.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				Lm: function() {
					return _
				},
				QF: function() {
					return c
				},
				f1: function() {
					return u
				}
			});
			var e = t("../react/utils/url.ts"),
				o = t("../react/app/redux/index.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				d = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				a = t.n(d),
				v = t("../react/common/hooks/useAccountId.ts");
			const c = {
					ZONE: "zones",
					ACCOUNT: "accounts"
				},
				u = () => {
					const {
						pathname: n
					} = (0, d.useLocation)();
					return (0, e.el)(n)
				},
				_ = () => {
					const n = (0, o.p4)(s.Cu),
						r = (0, v.F)(),
						i = u();
					return {
						scope: i ? c.ZONE : c.ACCOUNT,
						scopeId: i ? n : r,
						isZoneScope: i
					}
				}
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(j, E, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function s(d) {
				return (0, e.p4)(a => (0, o.rV)(a, d))
			}
			E.Z = s
		},
		"../react/common/middleware/sparrow/errors.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Uh: function() {
					return a
				},
				ez: function() {
					return d
				},
				oV: function() {
					return v
				}
			});

			function e(c, u, _) {
				return u = o(u), u in c ? Object.defineProperty(c, u, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[u] = _, c
			}

			function o(c) {
				var u = s(c, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function s(c, u) {
				if (typeof c != "object" || c === null) return c;
				var _ = c[Symbol.toPrimitive];
				if (_ !== void 0) {
					var n = _.call(c, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(c)
			}
			class d extends Error {
				constructor(u, _) {
					super(_);
					e(this, "eventName", void 0), this.eventName = u, this.name = "SparrowValidationError"
				}
			}
			class a extends d {
				constructor(u) {
					super(u, `Event not allowed: "${u}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class v extends d {
				constructor(u, _) {
					super(u, `Found invalid properties on event: "${u}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = _
				}
			}
		},
		"../react/common/middleware/sparrow/globalEvents/clickEvents.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Ax: function() {
					return v
				},
				B8: function() {
					return d
				},
				W1: function() {
					return s
				},
				tV: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			const s = "user click";
			let d = function(c) {
					return c.CALL_TO_ACTION = "call_to_action", c.DISMISS_CONTENT = "dismiss_content", c
				}({}),
				a = function(c) {
					return c.ZONE_MARKETING_BANNER = "zone_marketing_banner_click", c.ZONE_MARKETING_BANNER_DISMISS = "zone_marketing_banner_dismiss", c.ACCOUNT_MARKETING_BANNER = "account_marketing_banner_click", c.ACCOUNT_MARKETING_BANNER_DISMISS = "account_marketing_banner_dismiss", c
				}({});
			const v = ({
				interactionType: c,
				clickType: u,
				id: _,
				text: n = "",
				href: r = ""
			}) => {
				const i = {
					interactionType: c,
					clickType: u,
					id: _,
					text: n,
					href: r
				};
				o().sendEvent(s, i)
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Au: function() {
					return ee
				},
				B: function() {
					return et
				},
				B3: function() {
					return Q
				},
				BG: function() {
					return D
				},
				Bp: function() {
					return it
				},
				CV: function() {
					return dt
				},
				D0: function() {
					return C
				},
				DT: function() {
					return X
				},
				EL: function() {
					return $
				},
				EU: function() {
					return V
				},
				GE: function() {
					return kt
				},
				KY: function() {
					return Ot
				},
				Ko: function() {
					return W
				},
				Kx: function() {
					return S
				},
				Le: function() {
					return M
				},
				O4: function() {
					return be
				},
				Ou: function() {
					return U
				},
				Py: function() {
					return tt
				},
				QI: function() {
					return vt
				},
				Qf: function() {
					return A
				},
				RO: function() {
					return $e
				},
				T3: function() {
					return Ie
				},
				T8: function() {
					return I
				},
				UX: function() {
					return Z
				},
				VP: function() {
					return Ze
				},
				Xo: function() {
					return mt
				},
				Xu: function() {
					return N
				},
				Yi: function() {
					return ht
				},
				Yj: function() {
					return L
				},
				Zu: function() {
					return J
				},
				bC: function() {
					return oe
				},
				f2: function() {
					return k
				},
				f8: function() {
					return te
				},
				hI: function() {
					return Se
				},
				hN: function() {
					return P
				},
				hX: function() {
					return Le
				},
				iq: function() {
					return ze
				},
				nE: function() {
					return y
				},
				oD: function() {
					return H
				},
				oI: function() {
					return ne
				},
				oJ: function() {
					return nt
				},
				tM: function() {
					return G
				},
				uF: function() {
					return R
				},
				ut: function() {
					return at
				},
				vU: function() {
					return bt
				},
				wQ: function() {
					return se
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				s = t.n(o),
				d = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				a = t.n(d),
				v = t("../../../../node_modules/reselect/lib/index.js"),
				c = t("../../../../node_modules/moment/moment.js"),
				u = t.n(c),
				_ = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				r = t("../react/common/selectors/userSelectors.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts"),
				g = t("../react/app/components/DeepLink/selectors.ts"),
				m = t("../react/common/constants/roles.ts"),
				p = t("../react/common/utils/hasRole.ts");

			function b(Y) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var ye = arguments[ue] != null ? Object(arguments[ue]) : {},
						he = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && he.push.apply(he, Object.getOwnPropertySymbols(ye).filter(function(Me) {
						return Object.getOwnPropertyDescriptor(ye, Me).enumerable
					})), he.forEach(function(Me) {
						O(Y, Me, ye[Me])
					})
				}
				return Y
			}

			function O(Y, ue, ye) {
				return ue = h(ue), ue in Y ? Object.defineProperty(Y, ue, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[ue] = ye, Y
			}

			function h(Y) {
				var ue = l(Y, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function l(Y, ue) {
				if (typeof Y != "object" || Y === null) return Y;
				var ye = Y[Symbol.toPrimitive];
				if (ye !== void 0) {
					var he = ye.call(Y, ue || "default");
					if (typeof he != "object") return he;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(Y)
			}
			const C = Y => {
					const ue = R(Y);
					return ue == null ? void 0 : ue.account
				},
				f = {},
				w = Y => Y.accountAccess,
				k = (0, v.P1)(r.PR, w, (Y, ue) => (Y == null ? void 0 : Y.id) && ue[Y.id] || f),
				A = Y => Y.accountsDetailed,
				I = (0, n.P1)("accountsDetailed", A),
				D = Y => Y.memberships,
				y = (0, v.P1)((0, n.P1)("memberships", D), g.U, (Y, ue) => !!ue && !!Y ? Y.filter(ye => ue.includes(ye.id)) : Y),
				P = Y => Y.accountFlags && Y.accountFlags.data,
				S = Y => Y.accountFlags,
				M = (Y, ue, ye) => {
					const he = P(Y);
					return !he || !he[ue] ? null : he[ue][ye]
				},
				F = Y => Y.accountFlags.isRequesting,
				ne = (Y, ...ue) => s()(Y, ["accountFlagsChanges", "data", ...ue]),
				te = Y => Y.accountFlagsChanges.isRequesting,
				re = (0, v.P1)(P, S, (Y, ue) => ({
					data: Y,
					meta: ue
				})),
				z = (Y, ue, ye) => !!(isEnterpriseSSEnabledSelector(Y) && M(Y, ue, ye)),
				N = Y => Y.membership,
				R = (0, n.P1)("membership", N),
				K = (0, v.P1)(R, N, (Y, ue) => ({
					data: Y,
					meta: ue
				})),
				U = Y => {
					const {
						roles: ue = []
					} = R(Y) || {};
					return Boolean(ue.find(ye => ye === "Super Administrator - All Privileges" || ye === "Billing"))
				},
				G = Y => {
					const ue = [m.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, p.n)(Y, ue)
				},
				H = Y => {
					const ue = k(Y),
						ye = Ke.getMemberships(Y) ? a().asMutable(Ke.getMemberships(Y)) : [];
					if (!!ye) return a().from(ye.map(he => b({}, he, {
						lastSeen: ue[he.account.id] ? ue[he.account.id].lastSeen : null
					})).sort((he, Me) => he.lastSeen && Me.lastSeen ? Me.lastSeen - he.lastSeen : 0))
				},
				Z = Y => Y.filteredMemberships,
				$ = (0, n.P1)("filteredMemberships", Z),
				J = (0, v.P1)(R, Y => Y == null ? void 0 : Y.permissions),
				L = (0, v.P1)(J, Y => (0, e.Z)(ue => {
					var ye;
					return (ye = Y == null ? void 0 : Y[ue]) !== null && ye !== void 0 ? ye : {
						read: !1,
						edit: !1
					}
				})),
				W = (0, v.P1)(R, Y => Y == null ? void 0 : Y.policies),
				X = (Y, ue, ye) => {
					let he = Ke.getMembership(Y);
					if (!he) {
						const Me = Ke.getMemberships(Y);
						if (!Me || !ue) return !1;
						he = Me.find(Qe => Qe.account.id === ue)
					}
					if (!he || !ye) return !1;
					try {
						return ye(he.permissions)
					} catch {
						return !1
					}
				},
				ie = Y => {
					var ue, ye;
					return (ue = (ye = C(Y)) === null || ye === void 0 ? void 0 : ye.meta.has_pro_zones) !== null && ue !== void 0 ? ue : !1
				},
				V = Y => {
					var ue, ye;
					return (ue = (ye = C(Y)) === null || ye === void 0 ? void 0 : ye.meta.has_business_zones) !== null && ue !== void 0 ? ue : !1
				},
				oe = Y => V(Y) || ie(Y),
				ge = (Y, ue) => {
					const ye = we(Y, ue);
					return !!ye && !!ye.enabled
				},
				we = (Y, ue) => {
					const ye = Ke.getMembership(Y),
						he = ye && ye.account;
					return he && he.legacy_flags && he.legacy_flags[ue]
				},
				se = Y => ge(Y, "custom_pages"),
				Ce = Y => !!Y && Y["webhooks.webhooks.enabled"],
				Ae = Y => M(Y, "bots", "enabled"),
				xe = Y => M(Y, "billing", "annual_subscriptions_enable"),
				$e = Y => Y ? Boolean(M(Y, "ConstellationAI", "v2_ui")) : !1,
				Le = Y => Y ? Boolean(M(Y, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				et = Y => Y ? Boolean(M(Y, "AIgateway", "enabled")) : !1,
				Ve = Y => we(Y, "enterprise_zone_quota"),
				ot = Y => {
					const ue = Ve(Y);
					return !ue || !ue.available ? -1 : ue.available
				},
				ze = Y => Y.accountMembers,
				Q = (0, n.P1)("accountMembers", ze),
				be = Y => Y.accountMember && Y.accountMember.isRequesting,
				je = Y => Y.accountRoles,
				Ue = (0, n.P1)("accountRoles", je),
				tt = (Y, ue) => {
					const ye = Ke.getMemberships(Y),
						he = ye && ye.find(ut => ut.account.id === ue);
					if (he) return he.account.name.replace(" Account", " account");
					const Me = Ke.getMembership(Y),
						Qe = Me && Me.account;
					return Qe && Qe.id === ue ? Qe.name : null
				},
				at = (Y, ue) => {
					const ye = Ke.getMemberships(Y),
						he = ye && ye.find(ut => ut.account.id === ue);
					if (he) return he.account.settings.access_approval_expiry;
					const Me = Ke.getMembership(Y),
						Qe = Me && Me.account;
					return Qe && Qe.id === ue ? Qe.settings.access_approval_expiry : null
				},
				mt = (Y, ue) => {
					const ye = at(Y, ue);
					return ye ? u().utc(ye).isAfter() : !1
				},
				Ie = (Y, ue, ye) => {
					const he = at(Y, ue);
					let Me = he ? u().utc(he) : null;
					return !Me || !Me.isAfter() ? "" : Me && Me.year() === 3e3 ? ye("account.access_approval.card_expiration_forever") : ye("account.access_approval.card_expiration_text", {
						expiryTimestamp: Me.local().format(_.U.DateTime)
					})
				},
				nt = Y => Y && Y.member && Y.member.edit,
				ee = (Y, ue) => {
					const ye = Ke.getMembership(Y),
						he = ye && ye.account;
					return he ? he.id !== ue : !1
				},
				ce = Y => Y.dpa,
				fe = (0, n.P1)("dpa", ce),
				Be = Y => Y.webhook,
				Re = Y => Y.webhooks,
				He = (0, n.P1)("webhook", Re),
				Ze = Y => Y.accountLegoContract,
				ft = (0, n.P1)("accountLegoContract", Ze),
				vt = Y => {
					const ue = ft(Y);
					return (ue == null ? void 0 : ue.lego_state) ? ue.lego_state : ""
				},
				Wt = Y => vt(Y) === "signed",
				kt = Y => Ze(Y).isRequesting,
				bt = Y => {
					const ue = ft(Y);
					return ue && ue.subscription_type ? ue.subscription_type : ""
				},
				_t = Y => bt(Y) !== "",
				Ke = {
					getMembership: R,
					getMemberships: y,
					getFilteredMemberships: $,
					getAccountMembers: Q,
					getAccountRoles: Ue
				},
				it = Y => Y.accountSingle,
				ht = (0, n.P1)("accountSingle", it),
				Se = Y => {
					const ue = [m.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, m.V.ADMINISTRATOR];
					return (0, p.n)(Y, ue)
				},
				dt = Y => (0, p.n)(Y, [m.V.BRAND_PROTECTION]),
				lt = Y => hasRole(Y, [MEMBERSHIP_ROLES.CLOUDFORCE_ONE_ADMIN, MEMBERSHIP_ROLES.CLOUDFORCE_ONE_READ]),
				Ot = Y => {
					const ue = [m.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, m.V.ADMINISTRATOR, m.V.ADMINISTRATOR_READ_ONLY],
						ye = (0, p.n)(Y, ue),
						he = !!L(Y)("blocks").edit;
					return ye || he
				}
		},
		"../react/common/selectors/commonSelectors.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				FX: function() {
					return s
				},
				QG: function() {
					return o
				},
				TH: function() {
					return d
				},
				cZ: function() {
					return e
				}
			});

			function e(a) {
				const v = `__ACTIVE__${a}`;
				return c => {
					const u = c.application;
					return u && u.active[v]
				}
			}

			function o(a) {
				const v = `__TOGGLE__${a}`;
				return c => {
					const u = c.application;
					return u && u.toggles[v]
				}
			}

			function s(a) {
				return a && a.paginationData && a.paginationData.info && a.paginationData.info.total_count ? a.paginationData.info.total_count : 0
			}
			const d = a => a.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$f: function() {
					return p
				},
				AD: function() {
					return v
				},
				BF: function() {
					return m
				},
				Bs: function() {
					return f
				},
				Ci: function() {
					return $
				},
				DA: function() {
					return Ve
				},
				E6: function() {
					return g
				},
				Gy: function() {
					return $e
				},
				Hq: function() {
					return xe
				},
				Ms: function() {
					return A
				},
				Mx: function() {
					return V
				},
				Nb: function() {
					return Ae
				},
				Pj: function() {
					return et
				},
				Q2: function() {
					return c
				},
				Qq: function() {
					return oe
				},
				Td: function() {
					return l
				},
				Z: function() {
					return W
				},
				a: function() {
					return C
				},
				a5: function() {
					return ie
				},
				c7: function() {
					return ge
				},
				du: function() {
					return _
				},
				ec: function() {
					return ne
				},
				f: function() {
					return Ce
				},
				fo: function() {
					return se
				},
				hL: function() {
					return X
				},
				ji: function() {
					return J
				},
				jo: function() {
					return I
				},
				l9: function() {
					return ze
				},
				lI: function() {
					return a
				},
				p1: function() {
					return O
				},
				pK: function() {
					return Le
				},
				pf: function() {
					return r
				},
				qR: function() {
					return h
				},
				rV: function() {
					return u
				},
				u1: function() {
					return n
				},
				w4: function() {
					return i
				},
				yD: function() {
					return L
				}
			});
			var e = t("../react/utils/url.ts"),
				o = t("../react/pages/internal-dns/constants.ts");

			function s(Q, be) {
				return Q && Q[be]
			}
			const d = Q => !a(Q).isRequesting;

			function a(Q) {
				return Q.entitlements.zone
			}

			function v(Q) {
				return a(Q).data
			}
			const c = Q => {
				var be, je;
				return ((be = a(Q).paginationData) === null || be === void 0 || (je = be.options) === null || je === void 0 ? void 0 : je.editedDate) || {}
			};

			function u(Q, be) {
				const je = v(Q);
				return je ? s(je, be) : void 0
			}
			const _ = (Q, be) => u(Q, be) === !0;

			function n(Q) {
				return Q.entitlements.account
			}

			function r(Q) {
				return n(Q).data
			}
			const i = Q => {
				var be, je;
				return ((be = n(Q).paginationData) === null || be === void 0 || (je = be.options) === null || je === void 0 ? void 0 : je.editedDate) || {}
			};

			function g(Q) {
				return !n(Q).isRequesting
			}

			function m(Q, be) {
				const je = r(Q);
				return je ? s(je, be) : void 0
			}

			function p(Q, be) {
				return m(Q, be) === !0
			}

			function b(Q, be) {
				return be.every(je => p(Q, je))
			}

			function O(Q) {
				return p(Q, "contract.customer_enabled")
			}

			function h(Q) {
				return p(Q, "contract.self_service_allowed")
			}

			function l(Q) {
				return p(Q, "billing.partners_managed")
			}
			const C = Q => O(Q) && h(Q),
				f = Q => p(Q, "enterprise.ecp_allowed");

			function w(Q) {
				return k(Q) || p(Q, "argo.allow_smart_routing") || p(Q, "argo.allow_tiered_caching") || p(Q, "rate_limiting.enabled") || p(Q, "ctm.enabled") || p(Q, "workers.enabled") || p(Q, "workers.kv_store.enabled") || p(Q, "stream.enabled")
			}
			const k = Q => _(Q, "argo.allow_smart_routing") || _(Q, "argo.allow_tiered_caching"),
				A = Q => p(Q, "zone.partial_setup_allowed") || _(Q, "zone.partial_setup_allowed"),
				I = Q => p(Q, "argo.allow_smart_routing") || _(Q, "argo.allow_smart_routing"),
				D = Q => p(Q, "argo.allow_tiered_caching") || _(Q, "argo.allow_tiered_caching"),
				y = Q => I(Q) || D(Q),
				P = Q => p(Q, "ctm.enabled"),
				S = Q => {
					const be = m(Q, "ctm.load_balancers");
					return typeof be == "number" ? be : 0
				},
				M = Q => {
					const be = m(Q, "ctm.pools");
					return typeof be == "number" ? be : 0
				},
				F = Q => {
					const be = m(Q, "ctm.origins");
					return typeof be == "number" ? be : 0
				},
				ne = Q => p(Q, "workers.enabled"),
				te = Q => p(Q, "stream.enabled"),
				re = Q => {
					const be = m(Q, "access.users_allowed");
					return typeof be == "number" ? be : 0
				},
				z = Q => re(Q) > 0,
				N = Q => {
					const be = u(Q, "dedicated_certificates");
					return typeof be == "number" ? be : 0
				},
				R = Q => N(Q) > 0,
				K = Q => {
					const be = u(Q, "rate_limiting.max_rules");
					return typeof be == "number" ? be : 0
				},
				U = Q => p(Q, "rate_limiting.enabled"),
				G = Q => {
					const be = u(Q, "page_rules");
					return typeof be == "number" ? be : 0
				},
				H = Q => G(Q) > 0,
				Z = Q => {
					const be = m(Q, "dns_firewall.max_clusters_allowed");
					return typeof be == "number" ? be : 0
				},
				$ = Q => Z(Q) > 0,
				J = Q => _(Q, "zone.advanced_certificate_manager") || p(Q, "zone.advanced_certificate_manager"),
				L = Q => u(Q, "authoritative_dns.proxy_record_allowed") === !1 || m(Q, "authoritative_dns.proxy_record_allowed") === !1,
				W = Q => p(Q, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				X = Q => u(Q, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				ie = Q => {
					const be = u(Q, "authoritative_dns.min_record_ttl_allowed");
					return typeof be == "number" && be > 1 ? be : 60
				},
				V = Q => {
					const be = m(Q, o.yt);
					return typeof be == "number" ? be : 0
				},
				oe = Q => p(Q, "foundation_dns.advanced_nameservers_allowed") || _(Q, "foundation_dns.advanced_nameservers_allowed"),
				ge = Q => p(Q, "authoritative_dns.account_custom_nameservers_allowed"),
				we = Q => _(Q, "authoritative_dns.zone_custom_nameservers_allowed"),
				se = Q => we(Q) || ge(Q),
				Ce = (Q, be) => ((0, e.el)(window.location.pathname) ? u : m)(Q, be),
				Ae = Q => ((0, e.el)(window.location.pathname) ? v : r)(Q),
				xe = Q => p(Q, "authoritative_dns.multi_provider_allowed") || _(Q, "authoritative_dns.multi_provider_allowed"),
				$e = Q => _(Q, "authoritative_dns.cname_flattening_allowed"),
				Le = Q => p(Q, "secondary_dns.secondary_overrides") || _(Q, "secondary_dns.secondary_overrides"),
				et = Q => p(Q, "authoritative_dns.custom_soa_allowed") || _(Q, "authoritative_dns.custom_soa_allowed"),
				Ve = Q => p(Q, "authoritative_dns.custom_ns_ttl_allowed") || _(Q, "authoritative_dns.custom_ns_ttl_allowed"),
				ot = Q => p(Q, "secondary.create_zone"),
				ze = Q => oe(Q) || ge(Q) || xe(Q) || ot(Q) || Le(Q) || et(Q) || Ve(Q)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				r: function() {
					return a
				},
				v: function() {
					return v
				}
			});
			var e = t("../react/utils/i18n.ts"),
				o = t("../../../common/intl/intl-types/src/index.ts"),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				d = t("../react/utils/bootstrap.ts");
			const a = c => {
				if ((0, d.gm)()) return s.Z.set(e.ly, e.ZW), e.ZW;
				const u = c.userCommPreferences.data;
				if (u == null ? void 0 : u["language-locale"]) return (0, e.i_)(u["language-locale"]), u["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const _ = (0, e.Kd)();
					return v(_) ? _ : e.ZW
				}
			};

			function v(c) {
				const u = Object.keys(o.Q).find(_ => o.Q[_] === c);
				return !!c && typeof c == "string" && u != null && (0, e.S8)(u)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$8: function() {
					return a
				},
				BG: function() {
					return _
				},
				BY: function() {
					return l
				},
				GP: function() {
					return m
				},
				GU: function() {
					return C
				},
				PR: function() {
					return s
				},
				h8: function() {
					return n
				},
				kk: function() {
					return b
				},
				l8: function() {
					return c
				},
				mV: function() {
					return p
				},
				vW: function() {
					return v
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const o = f => f.user,
				s = (0, e.P1)("user", o),
				d = f => {
					var w;
					return (w = s(f)) === null || w === void 0 ? void 0 : w.email.endsWith("@cloudflare.com")
				},
				a = f => {
					var w;
					return !!((w = s(f)) === null || w === void 0 ? void 0 : w.id)
				},
				v = f => {
					const w = s(f);
					if (!!w) return w.first_name && w.last_name ? `${w.first_name} ${w.last_name}` : w.email
				},
				c = f => {
					const w = s(f);
					return w && w.has_enterprise_zones
				},
				u = f => f.userCommPreferences,
				_ = (0, e.P1)("userCommPreferences", u),
				n = f => {
					const w = s(f);
					return w && w.email_verified
				},
				r = f => {
					const w = _(f);
					return w && w.preferences.marketing_communication
				},
				i = f => f.userDetails,
				g = (0, e.P1)("userDetails", i),
				m = f => {
					const w = g(f);
					return w && w["2FA-RECOVERY"] === "scheduled"
				},
				p = f => {
					const w = g(f);
					return w && w["2FA-RECOVERY"] === "interrupted"
				},
				b = f => {
					const w = g(f);
					return w == null ? void 0 : w["NEW-USER-EMAIL"]
				},
				O = f => f.gates.assignments,
				h = (f, w) => f && f[w];

			function l(f, w) {
				const k = O(f);
				return k ? h(k, w) : void 0
			}
			const C = (f, w) => l(f, w) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$4: function() {
					return A
				},
				$t: function() {
					return tt
				},
				A4: function() {
					return O
				},
				Cu: function() {
					return h
				},
				DQ: function() {
					return ge
				},
				Ej: function() {
					return y
				},
				FH: function() {
					return C
				},
				ID: function() {
					return G
				},
				Iu: function() {
					return b
				},
				Ko: function() {
					return Le
				},
				Le: function() {
					return Ce
				},
				Ly: function() {
					return L
				},
				M3: function() {
					return Q
				},
				N8: function() {
					return ze
				},
				NY: function() {
					return V
				},
				Ns: function() {
					return $
				},
				Ox: function() {
					return Ie
				},
				P4: function() {
					return P
				},
				RO: function() {
					return K
				},
				Tr: function() {
					return $e
				},
				U: function() {
					return l
				},
				Ug: function() {
					return w
				},
				V6: function() {
					return be
				},
				WR: function() {
					return nt
				},
				Xg: function() {
					return p
				},
				ZB: function() {
					return se
				},
				_y: function() {
					return H
				},
				bR: function() {
					return D
				},
				cU: function() {
					return et
				},
				cg: function() {
					return oe
				},
				d2: function() {
					return re
				},
				il: function() {
					return J
				},
				jN: function() {
					return M
				},
				jg: function() {
					return X
				},
				kC: function() {
					return I
				},
				kf: function() {
					return je
				},
				ko: function() {
					return R
				},
				mK: function() {
					return at
				},
				nA: function() {
					return m
				},
				oY: function() {
					return S
				},
				qM: function() {
					return Ae
				},
				rq: function() {
					return ie
				},
				tS: function() {
					return k
				},
				tU: function() {
					return ne
				},
				vB: function() {
					return mt
				},
				vM: function() {
					return F
				},
				wH: function() {
					return f
				},
				wn: function() {
					return we
				},
				xU: function() {
					return te
				},
				xw: function() {
					return xe
				},
				z5: function() {
					return U
				},
				zW: function() {
					return Ue
				},
				zh: function() {
					return z
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/app/redux/normalizer.js"),
				s = t("../../../../node_modules/lodash/get.js"),
				d = t.n(s),
				a = t("../../../../node_modules/moment/moment.js"),
				v = t.n(a),
				c = t("../react/common/constants/billing/index.ts");

			function u(ee) {
				for (var ce = 1; ce < arguments.length; ce++) {
					var fe = arguments[ce] != null ? Object(arguments[ce]) : {},
						Be = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && Be.push.apply(Be, Object.getOwnPropertySymbols(fe).filter(function(Re) {
						return Object.getOwnPropertyDescriptor(fe, Re).enumerable
					})), Be.forEach(function(Re) {
						_(ee, Re, fe[Re])
					})
				}
				return ee
			}

			function _(ee, ce, fe) {
				return ce = n(ce), ce in ee ? Object.defineProperty(ee, ce, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ee[ce] = fe, ee
			}

			function n(ee) {
				var ce = r(ee, "string");
				return typeof ce == "symbol" ? ce : String(ce)
			}

			function r(ee, ce) {
				if (typeof ee != "object" || ee === null) return ee;
				var fe = ee[Symbol.toPrimitive];
				if (fe !== void 0) {
					var Be = fe.call(ee, ce || "default");
					if (typeof Be != "object") return Be;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ce === "string" ? String : Number)(ee)
			}
			const i = (0, o.P1)("zone", ee => ee.zone),
				g = ee => {
					var ce;
					return (ce = ee.zoneVersioning) === null || ce === void 0 ? void 0 : ce.zoneVersionSelector
				},
				m = (0, e.P1)(i, g, (ee, ce) => {
					var fe, Be, Re;
					let He;
					if (Array.isArray(ee) && ee.length === 1 ? He = ee[0] : ee && !Array.isArray(ee) && (He = ee), !He) return;
					const Ze = !!(ce == null ? void 0 : ce.enabled);
					return u({}, He, He.name && {
						name: Ze ? ce.rootZoneName : He.name
					}, {
						versioning: {
							enabled: Ze,
							isRoot: !((fe = He.name) === null || fe === void 0 ? void 0 : fe.endsWith(".config.cfdata.org")),
							version: Ze ? ce.selectedVersion : 0,
							rootZoneId: Ze ? ce.rootZoneId : (Be = (Re = He) === null || Re === void 0 ? void 0 : Re.id) !== null && Be !== void 0 ? Be : ""
						}
					})
				}),
				p = ee => ee.zone,
				b = ee => ee.zone.isRequesting,
				O = (0, e.P1)(m, p, (ee, ce) => ({
					data: ee,
					meta: ce
				})),
				h = ee => {
					var ce, fe;
					return (ce = (fe = m(ee)) === null || fe === void 0 ? void 0 : fe.id) !== null && ce !== void 0 ? ce : ""
				},
				l = ee => ee.zones,
				C = ee => ee.zonesRoot,
				f = ee => ee.zonesAccount,
				w = (0, o.P1)("zones", l),
				k = (0, o.P1)("zonesRoot", C),
				A = (0, o.P1)("zonesAccount", f);

			function I(ee) {
				const ce = m(ee);
				return ce ? ce.created_on : null
			}
			const D = ee => {
				var ce;
				const fe = m(ee);
				return u({}, fe, {
					id: (fe == null || (ce = fe.versioning) === null || ce === void 0 ? void 0 : ce.enabled) ? fe == null ? void 0 : fe.versioning.rootZoneId : fe == null ? void 0 : fe.id
				})
			};

			function y(ee, ce, fe) {
				const Be = I(ee);
				if (!Be) return;
				const Re = v().duration(ce, fe),
					He = new Date(Be),
					Ze = new Date(new Date().getTime() - Re.asMilliseconds());
				return He.getTime() > Ze.getTime()
			}

			function P(ee) {
				const ce = m(ee);
				return ce ? ce.status : null
			}

			function S(ee) {
				const ce = m(ee);
				return ce ? ce.type : null
			}

			function M(ee) {
				return (ee == null ? void 0 : ee.plan_pending) ? ee == null ? void 0 : ee.plan_pending : ee == null ? void 0 : ee.plan
			}

			function F(ee) {
				const ce = m(ee);
				if (!ce) return;
				const fe = M(ce);
				return fe && fe.legacy_id
			}

			function ne(ee, ce) {
				const fe = M(ee);
				return !!fe && c.Gs.indexOf(fe.legacy_id) >= c.Gs.indexOf(ce)
			}

			function te(ee) {
				return !!ee && ee.status === "initializing"
			}

			function re(ee) {
				return !!ee && ee.status === "pending"
			}

			function z(ee) {
				return !!ee && ee.status === "active"
			}

			function N(ee, ce) {
				if (!ee) return !1;
				const fe = M(ee);
				return !!fe && fe.legacy_id === ce
			}

			function R(ee) {
				return N(ee, "enterprise")
			}
			const K = ee => R(m(ee));

			function U(ee) {
				return N(ee, "business")
			}
			const G = ee => U(m(ee));

			function H(ee) {
				return N(ee, "pro")
			}
			const Z = ee => H(m(ee));

			function $(ee) {
				return N(ee, "free")
			}
			const J = ee => $(m(ee));

			function L(ee) {
				return !R(ee)
			}

			function W(ee) {
				return ee && ee.owner
			}

			function X(ee, ce) {
				const fe = W(ce);
				return !!fe && fe.type === "user" && fe.id === ee.id
			}

			function ie(ee) {
				const ce = m(ee);
				return !!ce && ce.type === "partial"
			}

			function V(ee) {
				const ce = m(ee);
				return !!ce && ce.type === "secondary"
			}
			const oe = ee => {
					var ce;
					const fe = m(ee);
					return !!(fe == null ? void 0 : fe.host) && !!((ce = fe.plan) === null || ce === void 0 ? void 0 : ce.externally_managed)
				},
				ge = ee => {
					const ce = w(ee);
					return ce && ce.some(R)
				},
				we = (ee, ce) => {
					const fe = m(ee);
					return fe && fe.betas ? fe.betas.includes(ce) : !1
				},
				se = (ee, ...ce) => d()(ee, ["zoneFlags", "data", ...ce]),
				Ce = (ee, ...ce) => d()(ee, ["accountFlags", "data", ...ce]),
				Ae = ee => ee.accountFlags.isRequesting,
				xe = ee => ee.zoneFlags.isRequesting,
				$e = (ee, ...ce) => d()(ee, ["zoneFlagsChanges", "data", ...ce]),
				Le = ee => ee.zoneFlagsChanges.isRequesting,
				et = ee => ee.zoneFlags && ee.zoneFlags.data,
				Ve = ee => ee.zoneFlags,
				ot = (0, e.P1)(et, Ve, (ee, ce) => ({
					data: ee,
					meta: ce
				})),
				ze = (0, o.P1)("abuseUrls", ee => ee.overview.abuseUrls),
				Q = ee => {
					const ce = m(ee);
					return ce ? `/${ce.account.id}/${ce.name}` : null
				},
				be = ee => ee.zoneMarketingCampaigns,
				je = ee => ee.overview.zoneBlocks.data,
				Ue = ee => ee.overview.zoneBlocks.isRequesting,
				tt = ee => ee.overview.zoneBlocks.hasData,
				at = ee => {
					var ce, fe;
					return (ee == null || (ce = ee.overview.zoneBlocks) === null || ce === void 0 || (fe = ce.paginationData) === null || fe === void 0 ? void 0 : fe.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				mt = ee => ee.overview.zoneBlocksReview.isRequesting,
				Ie = ee => ee.overview.zoneHold,
				nt = (0, o.P1)("zoneHold", Ie)
		},
		"../react/common/utils/formatDate.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			E.Z = (o, s, d = !1) => (0, e.p6)(o, s, d)
		},
		"../react/common/utils/getEnvironment.ts": function(j, E, t) {
			"use strict";
			var e = t("../../../../node_modules/cookie/index.js"),
				o = t("../functions/utils/preview-deploy-helpers.ts"),
				s = t("../functions/utils/constants.ts");
			const d = () => {
				var a, v, c;
				const _ = e.parse(document.cookie)[s.b1];
				let n = null;
				_ && (n = (0, o.E9)(_));
				let r = "production";
				switch (!0) {
					case ((a = n) === null || a === void 0 ? void 0 : a.projectType) === "canary":
						r = "canary";
						break;
					case ((v = window) === null || v === void 0 || (c = v.build) === null || c === void 0 ? void 0 : c.isPreviewDeploy):
						r = "preview";
						break
				}
				return r
			};
			E.Z = d
		},
		"../react/common/utils/hasRole.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				n: function() {
					return o
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const o = (s, d) => {
				const {
					roles: a = []
				} = (0, e.uF)(s) || {};
				return d.some(v => a.includes(v))
			}
		},
		"../react/common/utils/isGuards.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$K: function() {
					return c
				},
				Q$: function() {
					return s
				},
				t: function() {
					return v
				},
				v5: function() {
					return d
				},
				zE: function() {
					return a
				}
			});
			var e = t("../react/common/constants/index.ts"),
				o = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const s = u => u ? ["page", "per_page", "count", "total_count"].every(n => n in u && u[n]) : !1,
				d = (u = "") => e.Dy.includes(u.toLowerCase()),
				a = u => u !== null && typeof u == "object" && "name" in u && "size" in u && "type" in u && typeof u.slice == "function",
				v = u => (0, o.Z)(u),
				c = u => u != null
		},
		"../react/common/utils/oidc.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				c: function() {
					return o
				},
				e: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			let o = function(d) {
				return d.Apple = "apple", d.Google = "google", d
			}({});
			const s = (d, a) => {
				const v = "production",
					c = `oidc${v==="staging"?"-staging":""}.iam.cfapi.net`,
					_ = new URLSearchParams(window.location.search).get("login_challenge");
				let n = `https://${c}/api/v1/sso/init?client=${d}&env=${v}`;
				return e.Z.set("isLoggingIn", !0), a && (n = n + `&jwt=${a}`), _ && (n += `&login_challenge=${encodeURIComponent(_)}`), n
			}
		},
		"../react/common/utils/useQueryCache.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				o: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function o(c) {
				for (var u = 1; u < arguments.length; u++) {
					var _ = arguments[u] != null ? Object(arguments[u]) : {},
						n = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(_).filter(function(r) {
						return Object.getOwnPropertyDescriptor(_, r).enumerable
					})), n.forEach(function(r) {
						s(c, r, _[r])
					})
				}
				return c
			}

			function s(c, u, _) {
				return u = d(u), u in c ? Object.defineProperty(c, u, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[u] = _, c
			}

			function d(c) {
				var u = a(c, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function a(c, u) {
				if (typeof c != "object" || c === null) return c;
				var _ = c[Symbol.toPrimitive];
				if (_ !== void 0) {
					var n = _.call(c, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(c)
			}
			const v = c => {
				const u = (0, e.useQueryClient)(),
					_ = l => {
						var C;
						return u.getQueriesData((C = l) !== null && C !== void 0 ? C : c)
					},
					n = l => {
						var C;
						return u.getQueryData((C = l) !== null && C !== void 0 ? C : c)
					},
					r = l => {
						var C;
						return u.getQueriesData({
							queryKey: (C = l) !== null && C !== void 0 ? C : c,
							stale: !0
						})
					},
					i = (l, C) => {
						var f;
						u.setQueryData((f = C) !== null && f !== void 0 ? f : c, l)
					},
					g = async l => {
						var C;
						await u.refetchQueries((C = l) !== null && C !== void 0 ? C : c)
					}, m = async (l, C) => {
						var f, w;
						await u.invalidateQueries((f = l) !== null && f !== void 0 ? f : c, o({
							refetchActive: !1
						}, (w = C) !== null && w !== void 0 ? w : {}))
					}, p = async (l, C) => {
						const f = l || (w => {
							var k;
							return (w == null || (k = w.queryKey) === null || k === void 0 ? void 0 : k[0]) === c
						});
						await u.invalidateQueries(o({
							predicate: f,
							refetchActive: !1,
							refetchInactive: !1
						}, C))
					};
				return {
					refetch: g,
					cancelData: async () => {
						await u.cancelQueries(c)
					},
					invalidate: m,
					setData: i,
					getDataStale: r,
					getData: _,
					prefetchQuery: (l, C) => {
						var f;
						return u.prefetchQuery((f = C) !== null && f !== void 0 ? f : c, l)
					},
					getQueryData: n,
					predicateInvalidate: p,
					batchInvalidate: async ({
						queryKeysToInvalidate: l = [],
						queryKeysToPredicateInvalidate: C = [],
						refetchActive: f = !1,
						refetchInactive: w = !1
					}) => {
						const k = l.map(I => m(I)),
							A = C.map(I => p(D => {
								var y;
								return (D == null || (y = D.queryKey) === null || y === void 0 ? void 0 : y[0]) === I
							}, {
								refetchActive: f,
								refetchInactive: w
							}));
						await Promise.all([...k, ...A])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(j, E, t) {
			"use strict";
			t.d(E, {
				K2: function() {
					return o
				},
				Lb: function() {
					return s
				},
				XI: function() {
					return d
				},
				bK: function() {
					return u
				},
				jk: function() {
					return c
				},
				wb: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = _ => /^https?:\/\/(.*)/.test(_),
				s = _ => e.default.hostname.test(_),
				d = _ => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(_),
				a = _ => /^[!-~]+$/.test(_),
				v = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				c = _ => v.test(_),
				u = _ => !!_ && !!_.length && /^[ -~]+$/.test(_)
		},
		"../react/pages/abuse/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Cg: function() {
					return g
				},
				EO: function() {
					return u
				},
				Iy: function() {
					return c
				},
				RV: function() {
					return i
				},
				R_: function() {
					return v
				},
				Vq: function() {
					return l
				},
				Y0: function() {
					return h
				},
				bL: function() {
					return f
				},
				bx: function() {
					return O
				},
				dM: function() {
					return k
				},
				dV: function() {
					return w
				},
				eM: function() {
					return r
				},
				i9: function() {
					return a
				},
				nq: function() {
					return p
				},
				pj: function() {
					return n
				},
				to: function() {
					return C
				},
				xR: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				s = t("../react/pages/abuse/abuse.translations.ts"),
				d = t("../react/pages/abuse/types.ts");
			const a = "customer-abuse-reports-table-filter-bar",
				v = "abuse-reports-table-tooltip",
				c = "abuse-reports-cache-rate-limits-table-tooltip",
				u = "abuse-reports-blocks-tables-tooltip",
				_ = "customer-abuse-reports-table-filter-bar",
				n = {
					LIST_MITIGATIONS: "com.cloudflare.api.account.abuse-reports.mitigations.list",
					APPEAL_ACTIVE_BLOCKS: "com.cloudflare.api.account.zone.blocks.request-review",
					APPEAL_PENDING_BLOCKS: "com.cloudflare.api.account.abuse-reports.actions.request-review",
					APPEAL_MITIGATIONS: "com.cloudflare.api.account.abuse-reports.mitigations.appeal",
					LIST_REPORTS: "com.cloudflare.api.account.abuse-reports.list",
					READ_REPORT: "com.cloudflare.api.account.abuse-reports.read"
				},
				r = {
					abuse: (0, o.BC)`/${"accountId"}/abuse-reports`,
					abuseReport: (0, o.BC)`/${"accountId"}/abuse-reports/report/${"reportId"}`,
					abuseReportTab: (0, o.BC)`/${"accountId"}/abuse-reports/report/${"reportId"}/${"tab"}`
				};
			let i = function(A) {
				return A.BLOCKED_CONTENT = "blocked-content", A.CACHE_RATE_LIMITS = "cache-rate-limits", A
			}({});
			const g = [{
					title: s.keys.tab_titles.blocked_content,
					url: `/${i.BLOCKED_CONTENT}`
				}, {
					title: s.keys.tab_titles.cache_rate_limits,
					url: `/${i.CACHE_RATE_LIMITS}`
				}],
				m = {
					accepted: "gray",
					in_review: "gray"
				},
				p = {
					active: "red",
					cancelled: "gray",
					in_review: "blue",
					pending: "orange",
					removed: "gray"
				},
				b = null,
				O = ["active", "cancelled", "in_review", "pending", "removed"],
				h = ["accepted", "in_review"];
			let l = function(A) {
				return A.APPEAL_MITIGATION_SUBMIT = "appeal abuse report mitigation submit", A.APPEAL_MITIGATION_SUCCESS = "appeal abuse report mitigation success", A.APPEAL_MITIGATION_FAILURE = "appeal abuse report mitigation failure", A.CLICK_ABUSE_REPORT_ID = "click abuse report id", A.CLICK_ABUSE_REPORT_MITIGATIONS_LINK = "click abuse report mitigations link", A.ADD_FILTER = "Add filter", A.REMOVE_FILTER = "Remove filter", A.REMOVE_ALL_FILTERS = "Remove all filters", A.NEXT_PAGE = "go to next page", A.PREV_PAGE = "go to prev page", A.GO_TO_PAGE = "go to page", A.SET_PAGE_SIZE = "set page size", A.COPY_TABLE_CELL = "copy table cell", A
			}({});
			const C = {
					initialPaginationState: {
						page: 1,
						perPage: 25
					},
					initialToolbarState: {},
					initialSortState: {
						name: d.mu.CDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: [d.mu.Domain, d.mu.Status, d.mu.Type],
						queryParamStrategy: "sync-with-table-state"
					},
					filters: {
						f1: d.mu.Domain,
						f2: d.mu.Status,
						f3: d.mu.Type,
						f4: "startDate",
						f5: "endDate",
						f6: "timeWindow"
					}
				},
				f = {
					initialPaginationState: {
						page: 1,
						perPage: 25
					},
					initialToolbarState: {},
					initialSortState: {
						name: d.XO.EffectiveDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: [d.XO.Status],
						queryParamStrategy: "sync-with-table-state"
					},
					filters: {
						f1: d.XO.Status,
						f2: "startDate",
						f3: "endDate",
						f4: "timeWindow"
					}
				},
				w = {
					initialPaginationState: {
						page: 1,
						perPage: 5
					},
					initialToolbarState: {},
					initialSortState: {
						name: d.DT.EnforcementDate,
						direction: e.Sr.desc
					}
				},
				k = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: d.DT.CreatedDate,
						direction: e.Sr.desc
					}
				}
		},
		"../react/pages/abuse/types.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				DT: function() {
					return d
				},
				MY: function() {
					return s
				},
				XO: function() {
					return e
				},
				Zy: function() {
					return u
				},
				mu: function() {
					return n
				},
				ut: function() {
					return a
				}
			});
			let e = function(r) {
				return r.Type = "type", r.EffectiveDate = "effective_date", r.Status = "status", r.EntityType = "entity_type", r.EntityId = "entity_id", r
			}({});
			const o = null,
				s = {
					BLOCK_URL: "block_url",
					RATE_LIMIT_CACHE: "rate_limit_cache",
					ACCOUNT_SUSPEND: "account_suspend"
				};
			let d = function(r) {
					return r.BlockType = "blockType", r.CreatedDate = "created", r.EnforcementDate = "enforcement_date", r.Status = "status", r.EntityType = "entity_type", r.EntityId = "entity_id", r
				}({}),
				a = function(r) {
					return r.JIRA = "jira", r.ZENDESK = "zendesk", r.ABUSE_REPORT = "abuse_report", r.CSAM_MATCH = "csam_match", r
				}({}),
				v = function(r) {
					return r.ID = "id", r.DOMAIN = "domain", r.CREATED_BEFORE = "created_before", r.CREATED_AFTER = "created_after", r.STATUS = "status", r.TYPE = "type", r.MITIGATION_STATUS = "mitigation_status", r
				}({}),
				c = function(r) {
					return r.Domain = "domain", r.Status = "status", r.Type = "type", r
				}({}),
				u = function(r) {
					return r.DMCA = "DMCA", r.TRADEMARK = "TM", r.PHISHING = "PHISH", r.GENERAL = "GEN", r.REGISTRAR_WHOIS = "REG_WHO", r.EMERGENCY = "EMER", r.NCSEI = "NCSEI", r.THREAT = "THREAT", r
				}({});
			const _ = [u.DMCA, u.TRADEMARK, u.PHISHING, u.GENERAL, u.REGISTRAR_WHOIS, u.EMERGENCY, u.NCSEI, u.THREAT];
			let n = function(r) {
				return r.Id = "id", r.CDate = "cdate", r.Domain = "domain", r.Type = "type", r.Status = "status", r.AcceptedUrls = "accepted_urls", r
			}({})
		},
		"../react/pages/ai-zone/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$0: function() {
					return o
				},
				A3: function() {
					return p
				},
				AG: function() {
					return a
				},
				Al: function() {
					return u
				},
				NN: function() {
					return _
				},
				Ot: function() {
					return g
				},
				PAY_PER_CRAWL: function() {
					return n
				},
				Pd: function() {
					return i
				},
				TR: function() {
					return c
				},
				UK: function() {
					return m
				},
				c1: function() {
					return s
				},
				nJ: function() {
					return e
				},
				nb: function() {
					return v
				},
				qR: function() {
					return d
				},
				zg: function() {
					return r
				}
			});
			const e = [{
					slug: "amazon-bot",
					name: "Amazonbot",
					operator: "Amazon",
					info: "https://developer.amazon.com/amazonbot",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Amazonbot",
					detectionIds: [118601807, 33563839],
					verified: !0,
					managed: !0
				}, {
					slug: "anchor-browser",
					name: "Anchor Browser",
					operator: "Anchor",
					info: "https://docs.anchorbrowser.io/introduction",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Anchor Browser",
					detectionIds: [124259203],
					verified: !0,
					managed: !0,
					botManagement: !0
				}, {
					slug: "apple",
					name: "Applebot",
					operator: "Apple",
					info: "https://support.apple.com/en-us/119829",
					category: "AI Search",
					categoryId: 51,
					userAgent: "Applebot",
					detectionIds: [120424214, 33563845],
					verified: !0,
					managed: !1
				}, {
					slug: "archive-org-bot",
					name: "archive.org_bot",
					operator: "Internet Archive",
					info: "https://archive.org/details/archive.org_bot",
					category: "Archiver",
					categoryId: 52,
					userAgent: "archive.org_bot",
					detectionIds: [131190766, 33564033],
					verified: !0,
					managed: !1
				}, {
					slug: "bing",
					name: "BingBot",
					operator: "Microsoft",
					info: "https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0",
					category: "Search Engine",
					categoryId: 1,
					userAgent: "bingbot",
					detectionIds: [117479730, 33554461],
					verified: !0,
					managed: !1
				}, {
					name: "Bytespider",
					operator: "ByteDance",
					info: "https://www.bytedance.com/en/",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Bytespider",
					detectionIds: [33563853],
					verified: !1,
					managed: !0
				}, {
					slug: "commoncrawl",
					name: "CCBot",
					operator: "Common Crawl",
					info: "https://commoncrawl.org/faq",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "CCBot",
					detectionIds: [133621792, 33563855],
					verified: !0,
					managed: !0
				}, {
					slug: "chatgpt-user",
					name: "ChatGPT-User",
					operator: "OpenAI",
					info: "https://platform.openai.com/docs/bots",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "ChatGPT-User",
					detectionIds: [132995013, 33563857],
					verified: !0,
					managed: !1
				}, {
					name: "ClaudeBot",
					operator: "Anthropic",
					info: "https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "ClaudeBot",
					detectionIds: [33563859],
					verified: !1,
					managed: !0
				}, {
					name: "Claude-SearchBot",
					operator: "Anthropic",
					info: "https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Claude-SearchBot",
					detectionIds: [33564301],
					verified: !1,
					managed: !0
				}, {
					name: "Claude-User",
					operator: "Anthropic",
					info: "https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Claude-User",
					detectionIds: [33564303],
					verified: !1,
					managed: !0
				}, {
					slug: "duckassistbot",
					name: "DuckAssistBot",
					operator: "DuckDuckGo",
					info: "https://duckduckgo.com/duckduckgo-help-pages/results/duckassistbot",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "DuckAssistBot",
					detectionIds: [126666910, 33564037],
					verified: !0,
					managed: !1
				}, {
					name: "FacebookBot",
					operator: "Meta",
					info: "https://developers.facebook.com/docs/sharing/webmasters/web-crawlers/",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "FacebookBot",
					detectionIds: [33563972],
					verified: !1,
					managed: !0
				}, {
					slug: "google",
					name: "Googlebot",
					operator: "Google",
					info: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers#googlebot",
					category: "Search Engine",
					categoryId: 1,
					userAgent: "Googlebot",
					detectionIds: [120623194, 33554459],
					verified: !0,
					managed: !1
				}, {
					slug: "google-cloudvertexbot",
					name: "Google-CloudVertexBot",
					operator: "Google",
					info: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers#google-cloudvertexbot",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Google-CloudVertexBot",
					detectionIds: [133730073, 33564321],
					verified: !0,
					managed: !0
				}, {
					slug: "gptbot",
					name: "GPTBot",
					operator: "OpenAI",
					info: "https://platform.openai.com/docs/bots",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "GPTBot",
					detectionIds: [123815556, 33563875],
					verified: !0,
					managed: !0
				}, {
					slug: "meta-externalagent",
					name: "Meta-ExternalAgent",
					operator: "Meta",
					info: "https://developers.facebook.com/docs/sharing/webmasters/web-crawlers",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "meta-externalagent",
					detectionIds: [124581738, 33563982],
					verified: !0,
					managed: !0
				}, {
					slug: "meta-externalfetcher",
					name: "Meta-ExternalFetcher",
					operator: "Meta",
					info: "https://developers.facebook.com/docs/sharing/webmasters/web-crawlers",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "meta-externalfetcher",
					detectionIds: [132272919, 33563980],
					verified: !0,
					managed: !1
				}, {
					slug: "mistralai-user",
					name: "MistralAI-User",
					operator: "Mistral",
					info: "https://docs.mistral.ai/robots/",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "MistralAI-User",
					detectionIds: [128950951, 33564323],
					verified: !0,
					managed: !1
				}, {
					slug: "novellum-ai-crawl",
					name: "Novellum AI Crawl",
					operator: "Novellum",
					info: "https://crawl.corp.novellum.ai/docs",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Novellum",
					detectionIds: [121781688],
					verified: !0,
					managed: !0,
					botManagement: !0
				}, {
					slug: "oai-searchbot",
					name: "OAI-SearchBot",
					operator: "OpenAI",
					info: "https://platform.openai.com/docs/bots",
					category: "AI Search",
					categoryId: 51,
					userAgent: "OAI-SearchBot",
					detectionIds: [126255384, 33563986],
					verified: !0,
					managed: !1
				}, {
					slug: "chatgpt-operator",
					name: "Operator",
					operator: "OpenAI",
					info: "https://openai.com/index/introducing-operator/",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "Operator",
					detectionIds: [129220581],
					verified: !0,
					managed: !1,
					botManagement: !0
				}, {
					slug: "perplexity",
					name: "PerplexityBot",
					operator: "Perplexity",
					info: "https://docs.perplexity.ai/guides/bots",
					category: "AI Search",
					categoryId: 51,
					userAgent: "PerplexityBot",
					detectionIds: [120176742, 33563889],
					verified: !0,
					managed: !1
				}, {
					slug: "perplexity-user",
					name: "Perplexity-User",
					operator: "Perplexity",
					info: "https://docs.perplexity.ai/guides/bots",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "Perplexity-User",
					detectionIds: [126871775, 33564371],
					verified: !0,
					managed: !1
				}, {
					slug: "petalbot",
					name: "PetalBot",
					operator: "Huawei",
					info: "https://aspiegel.com/petalbot",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "PetalBot",
					detectionIds: [124150991, 33564369],
					verified: !0,
					managed: !0
				}, {
					slug: "gist-ai-web-bot-auth",
					name: "ProRataInc",
					operator: "ProRata.ai",
					info: "https://gist.ai/",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "ProRataInc",
					detectionIds: [117766436],
					verified: !1,
					managed: !1
				}, {
					name: "Timpibot",
					operator: "Timpi",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Timpibot",
					detectionIds: [33564051],
					verified: !1,
					managed: !0
				}],
				o = [...new Set([...e.map(b => b.operator)])].sort((b, O) => b.localeCompare(O)),
				s = [...new Set([...e.map(b => b.category)])].sort((b, O) => b.localeCompare(O)),
				d = [...new Set([...e.map(b => b.userAgent)])].sort((b, O) => b.localeCompare(O)),
				a = [...new Set([...e.flatMap(b => b.detectionIds)])].sort(),
				v = ["past_24h", "past_7d", "past_14d", "past_month"],
				c = "[CF AI Audit]",
				u = "AI Audit - Block AI bots by User Agent",
				_ = "AI Audit - Block AI bots by Bot Detection IDs",
				n = {
					entitlements: {
						publisher: "pay_per_crawl.publisher_enabled",
						operator: "pay_per_crawl.operator_enabled"
					},
					currency: {
						code: "USD",
						symbol: "$"
					},
					minPrice: .01,
					tooltips: {
						payPerCrawlDisabled: "pay-per-crawl-disabled-tooltip",
						stripeRequired: "pay-per-crawl-stripe-required-tooltip",
						termsRequired: "pay-per-crawl-terms-required-tooltip"
					}
				},
				r = "618578",
				i = ["/robots.txt", "/crawlers.json", "/security.txt", "/.well-known/security.txt", "/ads.txt"],
				g = "\u2014",
				m = {
					Amazon: ["amazon.com", "alexa.com"],
					Anchor: ["anchorbrowser.io", "browsermcp.com"],
					Anthropic: ["anthropic.com", "claude.ai"],
					Apple: ["apple.com", "icloud.com", "me.com", "mac.com"],
					ByteDance: ["bytedance.com", "tiktok.com", "douyin.com"],
					"Common Crawl": ["commoncrawl.org"],
					DuckDuckGo: ["duckduckgo.com", "duck.com"],
					Google: ["google.com", "youtube.com"],
					Huawei: ["huawei.com", "huaweicloud.com"],
					"Internet Archive": ["archive.org"],
					Meta: ["facebook.com", "instagram.com", "whatsapp.com", "meta.com"],
					Microsoft: ["bing.com", "msn.com", "microsoft.com"],
					Mistral: ["mistral.ai"],
					Novellum: ["novellum.ai"],
					OpenAI: ["openai.com", "chatgpt.com"],
					Perplexity: ["perplexity.ai"],
					"ProRata.ai": ["prorata.ai"],
					Timpi: ["timpi.io"]
				};
			let p = function(b) {
				return b.BOT_ACTION_CHANGED = "change bot action", b.TERMS_DECISION = "decide terms acceptance", b.STRIPE_CONNECT = "connect stripe account", b.STRIPE_ACCOUNT_VIEWED = "view stripe account", b.PPC_STATUS_CHANGED = "toggle pay per crawl", b.PPC_PRICE_CHANGED = "update crawl price", b.ADD_FILTER = "Add filter", b.REMOVE_FILTER = "Remove filter", b.REMOVE_ALL_FILTERS = "Remove all filters", b.CHANGE_TIME = "Change time window", b
			}({})
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(j, E, t) {
			"use strict";
			t.d(E, {
				DZ: function() {
					return d
				},
				GA: function() {
					return _
				},
				hT: function() {
					return v
				},
				p6: function() {
					return s
				},
				qc: function() {
					return a
				},
				w9: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e);
			const s = i => o().utc(i).format("YYYY-MM-DD"),
				d = i => o().utc(i).format(),
				a = i => o().utc(i).startOf("minute").format(),
				v = i => new Date(i),
				c = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				u = i => {
					const g = i / 60 / 60 / 1e3;
					return c[Object.keys(c).sort((m, p) => p - m).find(m => g >= m)]
				},
				_ = (i, g = m => m.avg && m.avg.sampleInterval ? m.avg.sampleInterval : 1) => i.length === 0 ? 1 : i.reduce((m, p) => m + g(p), 0) / i.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = i => n[i]
		},
		"../react/pages/analytics/eos/resources/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				f: function() {
					return e
				}
			});
			const e = {
				ADD_FILTER: "Add filter",
				EDIT_FILTER: "Edit filter",
				REMOVE_FILTER: "Remove filter",
				CHANGE_TIME: "Change time window",
				REMOVE_COLUMN: "Remove column",
				ADD_COLUMN: "Add column",
				QUERY_LOGS: "Click query logs",
				SAVE_QUERY: "Save query",
				USE_SAVED_QUERY: "Use saved query",
				CHANGE_DATASET: "Change dataset",
				CHANGE_LIMIT: "Change limit",
				USE_CUSTOM_SQL: "Click use custom sql",
				USE_BASIC_EDITOR: "Click use basic editor",
				VIEW_DETAILS: "Click view details"
			}
		},
		"../react/pages/blocked-content/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				BW: function() {
					return _
				},
				Gk: function() {
					return p
				},
				Jr: function() {
					return n
				},
				LA: function() {
					return i
				},
				Wk: function() {
					return m
				},
				_V: function() {
					return u
				},
				c5: function() {
					return g
				},
				om: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				s = t("../react/pages/blocked-content/types.ts");

			function d(b) {
				for (var O = 1; O < arguments.length; O++) {
					var h = arguments[O] != null ? Object(arguments[O]) : {},
						l = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(h).filter(function(C) {
						return Object.getOwnPropertyDescriptor(h, C).enumerable
					})), l.forEach(function(C) {
						a(b, C, h[C])
					})
				}
				return b
			}

			function a(b, O, h) {
				return O = v(O), O in b ? Object.defineProperty(b, O, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[O] = h, b
			}

			function v(b) {
				var O = c(b, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function c(b, O) {
				if (typeof b != "object" || b === null) return b;
				var h = b[Symbol.toPrimitive];
				if (h !== void 0) {
					var l = h.call(b, O || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(b)
			}
			const u = "blocked-content-table-tooltip",
				_ = {
					account: {
						basePage: (0, o.BC)`/${"accountId"}/blocked-content`,
						[s.$E.Active]: (0, o.BC)`/${"accountId"}/blocked-content/active`,
						[s.$E.Pending]: (0, o.BC)`/${"accountId"}/blocked-content/pending`
					},
					securityCenter: {
						basePage: (0, o.BC)`/${"accountId"}/security-center/blocked-content`,
						[s.$E.Active]: (0, o.BC)`/${"accountId"}/security-center/blocked-content/active`,
						[s.$E.Pending]: (0, o.BC)`/${"accountId"}/security-center/blocked-content/pending`
					}
				},
				n = [{
					category: s.$E.Pending,
					title: "security_center.blocked_content.pending_tab",
					url: "/pending"
				}, {
					category: s.$E.Active,
					title: "security_center.blocked_content.active_tab",
					url: "/active"
				}],
				r = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					cancelled: "gray"
				},
				i = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				g = {
					[s.$E.Active]: [s.M3.Active, s.M3.InReview],
					[s.$E.Pending]: [s.M3.Pending, s.M3.Cancelled]
				},
				m = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: s.fL.EnforcementDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: Object.values(s.GH)
					},
					filters: Object.values(s.GH).reduce((b, O) => d({}, b, {
						[O]: O
					}), {})
				};
			let p = function(b) {
				return b.COPY_URL = "copy blocked content url", b.REQUEST_REVIEW = "request blocked content review", b.ADD_FILTER = "Add filter", b.REMOVE_FILTER = "Remove filter", b
			}({})
		},
		"../react/pages/blocked-content/types.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$E: function() {
					return e
				},
				GH: function() {
					return a
				},
				Ib: function() {
					return s
				},
				M3: function() {
					return o
				},
				Qy: function() {
					return d
				},
				fL: function() {
					return v
				}
			});
			let e = function(u) {
					return u.Pending = "pending", u.Active = "active", u
				}({}),
				o = function(u) {
					return u.Active = "active", u.InReview = "in_review", u.Pending = "pending", u.Cancelled = "cancelled", u
				}({});
			const s = [o.Pending, o.Cancelled],
				d = [o.Active, o.InReview];
			let a = function(u) {
					return u.Domain = "domain", u.Status = "status", u.BlockType = "blockType", u
				}({}),
				v = function(u) {
					return u.CreatedDate = "created", u.EnforcementDate = "enforcementDate", u.BlockType = "blockType", u.Hostname = "hostname", u.Status = "status", u
				}({}),
				c = function(u) {
					return u.Removed = "removed", u.Misclassified = "misclassified", u
				}({})
		},
		"../react/pages/caching/tracking.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o.CHANGED_ZONE_SETTINGS = "change zone setting", o
			}({})
		},
		"../react/pages/d1/routes.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				H: function() {
					return s
				},
				_: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
					root: (0, e.BC)`/${"accountId"}/workers/d1`,
					createDatabase: (0, e.BC)`/${"accountId"}/workers/d1/create`,
					databaseDetails: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}`,
					databaseSettings: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/settings`,
					databaseConsole: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/console`,
					backups: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/backups`,
					metrics: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/metrics`,
					timeTravel: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/time-travel`,
					createTable: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/createTable`,
					tables: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/tables`,
					tableDetails: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/tables/${"tableName"}`,
					tableInsertData: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/tables/${"tableName"}/new`,
					tableUpdateData: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/tables/${"tableName"}/${"primaryKeyName"}/${"primaryKeyId"}`,
					studio: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/studio`
				},
				s = {
					databases: (0, e.BC)`/accounts/${"accountId"}/d1/database`,
					database: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}`,
					databaseLimits: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/limits`,
					tables: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/table`,
					table: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/table/${"tableName"}`,
					query: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/query`,
					raw: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/raw`,
					backups: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/backup`,
					restore: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/backup/${"backupId"}/restore`,
					download: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/backup/${"backupId"}/download`,
					bookmark: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/time_travel/bookmark`,
					restoreBookmark: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/time_travel/restore`
				}
		},
		"../react/pages/dns/api.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				BI: function() {
					return O
				},
				Q8: function() {
					return i
				},
				YJ: function() {
					return g
				},
				hs: function() {
					return _
				},
				mW: function() {
					return p
				},
				u1: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function d(h) {
				for (var l = 1; l < arguments.length; l++) {
					var C = arguments[l] != null ? Object(arguments[l]) : {},
						f = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(C).filter(function(w) {
						return Object.getOwnPropertyDescriptor(C, w).enumerable
					})), f.forEach(function(w) {
						a(h, w, C[w])
					})
				}
				return h
			}

			function a(h, l, C) {
				return l = v(l), l in h ? Object.defineProperty(h, l, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[l] = C, h
			}

			function v(h) {
				var l = c(h, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function c(h, l) {
				if (typeof h != "object" || h === null) return h;
				var C = h[Symbol.toPrimitive];
				if (C !== void 0) {
					var f = C.call(h, l || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(h)
			}
			const u = {
					settings: (0, s.BC)`/zones/${"zoneId"}/dns_settings`
				},
				_ = {
					fetchZoneDnsSettings: async h => {
						try {
							return (await (0, e.get)(u.settings.toUrl({
								zoneId: h
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (l) {
							throw l
						}
					},
					patchZoneDnsSettings: async (h, l) => await (0, e.patch)(u.settings.toUrl({
						zoneId: h
					}), {
						body: l
					})
				},
				n = {
					settings: (0, s.BC)`/accounts/${"accountId"}/dns_settings`
				},
				r = {
					fetchAccountDnsSettings: async h => {
						try {
							return (await (0, e.get)(n.settings.toUrl({
								accountId: h
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (l) {
							throw l
						}
					},
					patchAccountDnsSettings: async (h, l) => await (0, e.patch)(n.settings.toUrl({
						accountId: h
					}), {
						body: l
					})
				},
				i = {
					dns_records: (0, s.BC)`/zones/${"zoneId"}/dns_records`,
					batch: (0, s.BC)`/zones/${"zoneId"}/dns_records/batch`
				},
				g = {
					getMaxRecords: async (h, l, C, f, w) => {
						var k;
						return (k = (await (0, e.get)(i.dns_records.toUrl({
							zoneId: h
						}), {
							parameters: d({
								per_page: l
							}, f ? {
								search: f
							} : {}, w || {}, C)
						})).body) === null || k === void 0 ? void 0 : k.result
					},
					deleteRecords: async (h, l) => await (0, e.post)(i.batch.toUrl({
						zoneId: h
					}), {
						body: {
							deletes: l
						}
					}),
					patchRecords: async (h, l) => await (0, e.post)(i.batch.toUrl({
						zoneId: h
					}), {
						body: {
							patches: l
						}
					})
				},
				m = {
					custom_ns: (0, s.BC)`/zones/${"zoneId"}/custom_ns`,
					zone: (0, s.BC)`/zones/${"zoneId"}`
				},
				p = {
					fetchZoneCustomNs: async h => {
						try {
							return (await (0, e.get)(m.custom_ns.toUrl({
								zoneId: h
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (l) {
							throw l
						}
					},
					fetchZoneVanityNameservers: async h => {
						try {
							return (await (0, e.get)(m.zone.toUrl({
								zoneId: h
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (l) {
							throw l
						}
					},
					createZoneCustomNameserver: async (h, l) => await (0, e.patch)(m.zone.toUrl({
						zoneId: h
					}), {
						body: {
							vanity_name_servers: l
						}
					}),
					assignZoneCustomNsSet: async (h, l) => await (0, e.put)(m.custom_ns.toUrl({
						zoneId: h
					}), {
						body: {
							enabled: !0,
							ns_set: l
						}
					}),
					disableZoneCustomNs: async h => await (0, e.put)(m.custom_ns.toUrl({
						zoneId: h
					}), {
						body: {
							enabled: !1
						}
					})
				},
				b = {
					custom_ns: (0, s.BC)`/accounts/${"accountId"}/custom_ns`,
					delete: (0, s.BC)`/accounts/${"accountId"}/custom_ns/${"nsName"}`
				},
				O = {
					fetchAccounCustomNs: async h => {
						try {
							return (await (0, e.get)(b.custom_ns.toUrl({
								accountId: h
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (l) {
							throw l
						}
					},
					createAccountCustomNs: async (h, l) => await (0, e.post)(b.custom_ns.toUrl({
						accountId: h
					}), {
						body: l
					}),
					deleteAccountCustomNs: async (h, l) => await (0, e.del)(b.delete.toUrl({
						accountId: h,
						nsName: l
					}))
				}
		},
		"../react/pages/dns/dns-records/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e
				},
				X: function() {
					return o
				}
			});
			let e = function(s) {
				return s.DNS_RECORD_CREATE = "create DNS records", s.DNS_RECORD_UPDATE = "update DNS records", s.DNS_RECORD_DELETE = "delete DNS records", s.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", s
			}({});
			const o = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/dns/hooks/useZoneDnsSettings.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				c: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				o = t("../react/app/redux/index.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				d = t("../react/pages/dns/api.ts");
			const a = "dns-zone-settings-query-key",
				v = () => {
					var c;
					const u = (0, e.useQueryClient)(),
						_ = (0, o.p4)(s.nA),
						n = (c = _ == null ? void 0 : _.id) !== null && c !== void 0 ? c : "",
						{
							data: r,
							isError: i,
							isLoading: g,
							refetch: m
						} = (0, e.useQuery)([n, a], () => d.hs.fetchZoneDnsSettings(n), {
							enabled: !!n,
							refetchOnWindowFocus: !1
						}),
						{
							mutate: p,
							isLoading: b,
							isSuccess: O,
							isError: h
						} = (0, e.useMutation)({
							mutationFn: l => d.hs.patchZoneDnsSettings(n, l),
							onSuccess: async () => await u.refetchQueries({
								queryKey: [n, a]
							})
						});
					return {
						zoneDnsData: r,
						isError: i,
						isLoading: g,
						isSuccess: O,
						refetch: m,
						mutateZoneDnsSettings: p,
						isUpdating: b,
						isUpdateError: h
					}
				}
		},
		"../react/pages/dns/types.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				DU: function() {
					return e
				},
				LY: function() {
					return a
				},
				Nc: function() {
					return o
				},
				U7: function() {
					return s
				},
				g9: function() {
					return d
				}
			});
			let e = function(v) {
				return v.STANDARD = "cloudflare.standard", v.RANDOM = "cloudflare.standard.random", v.FOUNDATION = "cloudflare.foundation_dns", v.CUSTOM_ACCOUNT = "custom.account", v.CUSTOM_ZONE = "custom.zone", v
			}({});
			const o = {
				[e.STANDARD]: "account.dns_settings.zone_defaults.table.standard",
				[e.RANDOM]: "account.dns_settings.zone_defaults.table.random",
				[e.FOUNDATION]: "account.dns_settings.zone_defaults.table.foundation",
				[e.CUSTOM_ACCOUNT]: "account.dns_settings.zone_defaults.table.custom"
			};
			let s = function(v) {
					return v.NAME = "queryName", v.RESPONSE_CODE = "responseCode", v.TYPE = "queryType", v.SOURCE_IP = "sourceIP", v.DESTINATION_IP = "destinationIP", v.PROTOCOL = "protocol", v.IP_VERSION = "ipVersion", v.NAME_AND_TYPE = "nameAndType", v.QUERY_TOTALS = "queryTotals", v.COLO = "coloName", v
				}({}),
				d = function(v) {
					return v.TOTAL = "total", v.PER_SECOND = "queries_per_second", v.RESPONSE_AVG = "response_average", v
				}({}),
				a = function(v) {
					return v.MNAME = "soa.mname", v.RNAME = "soa.rname", v.REFRESH = "soa.refresh", v.RETRY = "soa.retry", v.EXPIRE = "soa.expire", v.RECORD_TTL = "soa.ttl", v.MIN_TTL = "soa.min_ttl", v
				}({})
		},
		"../react/pages/email/types.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				BB: function() {
					return o
				},
				Pm: function() {
					return s
				},
				UZ: function() {
					return e
				}
			});
			let e = function(a) {
				return a.ROOT = "root", a.DSTADDRS_CARD = "dstaddrs_card", a.RULES_CARD = "rules_card", a.CATCHALL_CARD = "catchall_card", a.SETTINGS_PAGE = "settings_page", a.WORKERS_PAGE = "workers_page", a
			}({});
			const o = {
				zone: "emailRoutingZone",
				catchAllRule: "emailRoutingCatchAllRule",
				rule: "emailRoutingRule",
				rules: "emailRoutingRules",
				dstAddress: "emailRoutingDestinationAddress",
				dstAddresses: "emailRoutingDestinationAddresses",
				dnsRecord: "emailRoutingDnsRecord",
				dnsRecords: "emailRoutingDnsRecords"
			};
			let s = function(a) {
				return a[a.Verified = 0] = "Verified", a[a.Pending = 1] = "Pending", a[a.Missing = 2] = "Missing", a[a.WorkerNotFound = 3] = "WorkerNotFound", a[a.Unknown = 4] = "Unknown", a[a.Loading = 5] = "Loading", a
			}({});
			const d = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				_: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/home/alerts/routes.ts");
			const s = o._.createAlertWithSelection,
				d = o._.editAlert,
				a = (0, e.BC)`${s}/subtype`,
				v = (0, e.BC)`${s}/stepper`,
				c = (0, e.BC)`${v}/${"stepName"}`,
				u = (0, e.BC)`${v}/details`,
				_ = (0, e.BC)`${v}/data-centers`,
				n = (0, e.BC)`${v}/ramps`,
				r = (0, e.BC)`${v}/threshold`,
				i = (0, e.BC)`${v}/review`,
				g = (0, e.BC)`${v}/confirm`,
				m = (0, e.BC)`${d}/stepper`,
				p = (0, e.BC)`${m}/${"stepName"}`,
				b = (0, e.BC)`${m}/details`,
				O = (0, e.BC)`${m}/data-centers`,
				h = (0, e.BC)`${m}/ramps`,
				l = (0, e.BC)`${m}/threshold`,
				C = (0, e.BC)`${m}/review`,
				f = (0, e.BC)`${m}/confirm`,
				w = {
					magicTunnelHealthChooseSubType: a,
					magicTunnelHealthCreateStepperBase: v,
					magicTunnelHealthCreateStepper: c,
					magicTunnelHealthCreateDetails: u,
					magicTunnelHealthCreateSelectDataCenter: _,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: r,
					magicTunnelHealthCreateReview: i,
					magicTunnelHealthCreateConfirm: g,
					magicTunnelHealthEditStepperBase: m,
					magicTunnelHealthEditStepper: p,
					magicTunnelHealthEditDetails: b,
					magicTunnelHealthEditSelectDataCenter: O,
					magicTunnelHealthEditSelectRamps: h,
					magicTunnelHealthEditSetThreshold: l,
					magicTunnelHealthEditReview: C,
					magicTunnelHealthEditConfirm: f
				};
			E.Z = w
		},
		"../react/pages/home/alerts/config.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				jk: function() {
					return i
				},
				w8: function() {
					return g
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				o = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				s = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				d = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				a = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function v(m) {
				for (var p = 1; p < arguments.length; p++) {
					var b = arguments[p] != null ? Object(arguments[p]) : {},
						O = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(b).filter(function(h) {
						return Object.getOwnPropertyDescriptor(b, h).enumerable
					})), O.forEach(function(h) {
						c(m, h, b[h])
					})
				}
				return m
			}

			function c(m, p, b) {
				return p = u(p), p in m ? Object.defineProperty(m, p, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[p] = b, m
			}

			function u(m) {
				var p = _(m, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function _(m, p) {
				if (typeof m != "object" || m === null) return m;
				var b = m[Symbol.toPrimitive];
				if (b !== void 0) {
					var O = b.call(m, p || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(m)
			}
			const n = "Notifications",
				r = "notification",
				i = v({}, e._, o._j, s._j, d._),
				g = v({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, a.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				_j: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				s = (0, e.BC)`${o}/pagerduty/connect`,
				d = (0, e.BC)`${o}/pagerduty/register`,
				a = (0, e.BC)`${o}/pagerduty`,
				v = {
					pagerDutyConnect: s,
					pagerDutyRegister: d,
					pagerDutyList: a
				};
			var c = null
		},
		"../react/pages/home/alerts/routes.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				_: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${o}/notifications`,
				d = (0, e.BC)`${s}/destinations`,
				a = (0, e.BC)`${s}/create`,
				v = (0, e.BC)`${a}/${"alertType"}`,
				c = (0, e.BC)`${s}/edit/${"alertId"}`,
				u = {
					account: o,
					alerts: s,
					destinations: d,
					createAlert: a,
					createAlertWithSelection: v,
					editAlert: c
				};
			E.Z = u
		},
		"../react/pages/home/alerts/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o
			}({})
		},
		"../react/pages/home/audit-log/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Q: function() {
					return o
				},
				v: function() {
					return e
				}
			});
			const e = "audit logs",
				o = {
					TOGGLE_V2: "toggle audit logs",
					FILTER: "filter audit logs",
					FILTER_COUNTS: "filter counts audit logs",
					TIME_RANGE_CHANGED: "Time range changed",
					API_LATENCY: "api latency detected audit logs",
					DETAILS: "Click view details",
					FEEDBACK: "send audit logs feedback",
					CONTAINER_V2_RENDERED: "audit log v2 container rendered",
					CONTAINER_RENDERED: "audit log v1 container rendered"
				}
		},
		"../react/pages/home/configurations/dns-settings/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Aj: function() {
					return v
				},
				Am: function() {
					return _
				},
				Jy: function() {
					return h
				},
				Mv: function() {
					return g
				},
				WI: function() {
					return O
				},
				Wu: function() {
					return c
				},
				b8: function() {
					return u
				},
				cC: function() {
					return l
				},
				e7: function() {
					return p
				},
				gH: function() {
					return r
				},
				hV: function() {
					return m
				},
				nN: function() {
					return n
				},
				uC: function() {
					return b
				}
			});
			var e = t("../react/pages/dns/types.ts");

			function o(k) {
				for (var A = 1; A < arguments.length; A++) {
					var I = arguments[A] != null ? Object(arguments[A]) : {},
						D = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(I).filter(function(y) {
						return Object.getOwnPropertyDescriptor(I, y).enumerable
					})), D.forEach(function(y) {
						s(k, y, I[y])
					})
				}
				return k
			}

			function s(k, A, I) {
				return A = d(A), A in k ? Object.defineProperty(k, A, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[A] = I, k
			}

			function d(k) {
				var A = a(k, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function a(k, A) {
				if (typeof k != "object" || k === null) return k;
				var I = k[Symbol.toPrimitive];
				if (I !== void 0) {
					var D = I.call(k, A || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(k)
			}
			const v = ["hmac-sha512.", "hmac-sha256.", "hmac-sha1."],
				c = ["198.41.144.240/28", "198.41.150.240/28", "2a06:98c0:3601::/48", "2a06:98c0:1401::/48"],
				u = ["172.65.30.82", "172.65.50.145", "2606:4700:60:0:317:26ee:3bdf:5774", "2606:4700:60:0:35a:4be3:4144:c5ee"],
				_ = "172.65.64.6",
				n = 86400,
				r = "inlineTsigCreation",
				i = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
				g = /[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
				m = o({
					FORM_NAME: "zone_defaults_form",
					NS_ASSIGNMENT: "nameservers.type",
					NS_TTL: "ns_ttl",
					MULTIPROVIDER: "multi_provider",
					SECONDARY_OVERRIDES: "secondary_overrides"
				}, e.LY),
				p = [{
					label: "account.dns_settings.zone_defaults.configure.cf_standard",
					value: e.DU.STANDARD
				}, {
					label: "account.dns_settings.zone_defaults.configure.cf_random",
					value: e.DU.RANDOM
				}, {
					label: "account.dns_settings.zone_defaults.configure.cf_advanced",
					value: e.DU.FOUNDATION
				}, {
					label: "account.dns_settings.zone_defaults.configure.cf_custom",
					value: e.DU.CUSTOM_ACCOUNT
				}];
			let b = function(k) {
				return k.STANDARD = "standard", k.DNS_ONLY = "dns_only", k.CDN_ONLY = "cdn_only", k
			}({});
			const O = {
					foundation_dns: !1,
					multi_provider: !1,
					nameservers: {
						type: e.DU.STANDARD
					},
					ns_ttl: 86400,
					secondary_overrides: !1,
					zone_mode: b.STANDARD,
					soa: {
						mname: "ns.primaryserver.com",
						rname: "admin.example.com",
						refresh: 1e4,
						retry: 2400,
						ttl: 1800,
						min_ttl: 3600,
						expire: 604800
					}
				},
				h = {
					FOUNDATION: "https://developers.cloudflare.com/dns/foundation-dns/advanced-nameservers/",
					ZONE_DEFAULTS: "https://developers.cloudflare.com/dns/additional-options/dns-zone-defaults/",
					NS_ASSIGNMENT: "https://developers.cloudflare.com/dns/zone-setups/reference/nameserver-assignment/",
					NS_ASSIGNMENT_METHOD: "https://developers.cloudflare.com/dns/nameservers/nameserver-options/#assignment-method",
					MULTIPROVIDER: "https://developers.cloudflare.com/dns/nameservers/nameserver-options/#multi-provider-dns",
					MULTIPROVIDER_SETUP: "https://developers.cloudflare.com/dns/zone-setups/full-setup/",
					SOA: "https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-soa-record/",
					SECONDARY_OVERRIDE: "https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/proxy-traffic/",
					SECONDARY_OVERRIDE_SETUP: "https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/"
				},
				l = {
					CARD: "zone-defaults-card",
					TABLE: "zone-defaults-card-table",
					CELLS: {
						NS_TYPE: "zone-defaults-card-table-ns-type",
						NS_TTL: "zone-defaults-card-table-ns-ttl",
						MULTIPROVIDER: "zone-defaults-card-table-multiprovider",
						SOA: "zone-defaults-card-table-soa",
						SECONDARYOVERRIDES: "zone-defaults-card-table-secondaryoverrides"
					},
					CONFIGURATIONS: "zone-defaults-configuration-form",
					INPUT_TTL: "zone-defaults-configuration-input-ns-ttl",
					TOGGLE_MULTIPROVIDER: "zone-defaults-configuration-toggle-multiprovider",
					TOGGLE_SECONDARYOVERRIDE: "zone-defaults-configuration-toggle-secondaryoverride",
					SOA_CONFIG_FORM: "soa-records-configuration-form"
				},
				C = {
					NS_SET: "ns_set",
					NS_NAME: "ns_name",
					IPV4: "ipv4",
					IPV6: "ipv6",
					ACTION: "action",
					NAMESERVER: "nameserver",
					NAMESERVER_NAME: "Nameserver name",
					SET: "set"
				},
				f = {
					ACNS_CARD: "account-custom-nameserver-card",
					ACNS_DELETE: "account-custom-nameserver-card-delete",
					ACNS_CONFIGURE: "account-custom-nameserver-card-configure",
					ACNS_MODAL_INPUT: "account-custom-nameserver-modal-input",
					ACNS_MODAL_RADIO: "account-custom-nameserver-modal-input"
				},
				w = {
					FORM: "account-custom-ns-form",
					NS_SET: "ns_set",
					NS_NAME: "ns_name"
				}
		},
		"../react/pages/home/configurations/dns-settings/isZoneDNSOnly.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				s: function() {
					return c
				}
			});
			var e = t("../react/common/selectors/entitlementsSelectors.ts"),
				o = t("../react/pages/home/configurations/dns-settings/selectors.ts"),
				s = t("../react/pages/dns/hooks/useZoneDnsSettings.ts"),
				d = t("../react/pages/home/configurations/dns-settings/constants.ts"),
				a = t("../react/common/hooks/useScope.tsx"),
				v = t("../react/app/redux/index.ts");
			const c = _ => {
					const n = (0, e.yD)(_),
						r = (0, o.Hb)(_);
					return n || r
				},
				u = () => {
					const _ = useSelector(zoneIsDNSOnly),
						{
							isZoneScope: n
						} = useScope(),
						{
							zoneDnsData: r
						} = useZoneDnsSettings(),
						i = (r == null ? void 0 : r.zone_mode) === ZONE_MODES.DNS_ONLY;
					return {
						isZoneDNSEntitlementDNSOnly: _,
						isZoneSettingsModeDNSOnly: i,
						isZoneDNSOnly: n ? _ || i : !1
					}
				}
		},
		"../react/pages/home/configurations/dns-settings/selectors.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				BJ: function() {
					return a
				},
				Hb: function() {
					return m
				},
				N$: function() {
					return u
				},
				P7: function() {
					return _
				},
				Pw: function() {
					return d
				},
				fF: function() {
					return v
				},
				gA: function() {
					return n
				},
				h3: function() {
					return s
				},
				iI: function() {
					return c
				},
				mT: function() {
					return i
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				o = t("../react/pages/home/configurations/dns-settings/constants.ts");
			const s = p => p.dns.secondaryDNS.acls,
				d = (0, e.P1)("dnsAcl", s),
				a = p => p.dns.secondaryDNS.tsigs,
				v = (0, e.P1)("dnsTsig", a),
				c = p => p.dns.secondaryDNS.masters,
				u = (0, e.P1)("dnsMaster", c),
				_ = p => p.dns.secondaryDNS.zoneMasters,
				n = (0, e.P1)("zoneMasters", _),
				r = p => p.dns.secondaryDNS.outgoingZoneTransfers,
				i = (0, e.P1)("dnsOutgoingZoneTransfers", r),
				g = p => {
					var b;
					return (b = p.dns.zoneDnsSettings) === null || b === void 0 ? void 0 : b.data
				},
				m = p => {
					var b, O;
					return ((b = p.dns.zoneDnsSettings) === null || b === void 0 || (O = b.data) === null || O === void 0 ? void 0 : O.zone_mode) === o.uC.DNS_ONLY
				}
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_LIST = "create list", o.DELETE_LIST = "delete list", o.ADD_LIST_ITEM = "add list item", o.DELETE_LIST_ITEM = "delete list item", o
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				AA: function() {
					return X
				},
				AN: function() {
					return ht
				},
				AY: function() {
					return Ot
				},
				Ac: function() {
					return ut
				},
				Am: function() {
					return h
				},
				B2: function() {
					return U
				},
				BB: function() {
					return D
				},
				BF: function() {
					return Be
				},
				BQ: function() {
					return _t
				},
				E8: function() {
					return dt
				},
				Fl: function() {
					return ue
				},
				Fu: function() {
					return S
				},
				Gc: function() {
					return ft
				},
				Hc: function() {
					return Bt
				},
				IO: function() {
					return Ke
				},
				JK: function() {
					return Ve
				},
				K: function() {
					return k
				},
				LI: function() {
					return bt
				},
				LX: function() {
					return ce
				},
				L_: function() {
					return be
				},
				Ly: function() {
					return Xe
				},
				MR: function() {
					return H
				},
				Mj: function() {
					return $
				},
				NB: function() {
					return xt
				},
				Oe: function() {
					return Ht
				},
				P5: function() {
					return Mt
				},
				PE: function() {
					return Ae
				},
				Pd: function() {
					return Tt
				},
				Pk: function() {
					return $e
				},
				Pp: function() {
					return tt
				},
				Q1: function() {
					return P
				},
				Qr: function() {
					return fe
				},
				Qv: function() {
					return xe
				},
				Rp: function() {
					return zt
				},
				S7: function() {
					return Ct
				},
				Sh: function() {
					return ye
				},
				Sl: function() {
					return Kt
				},
				Tg: function() {
					return ot
				},
				Tp: function() {
					return Ze
				},
				Uy: function() {
					return Nt
				},
				Vw: function() {
					return F
				},
				W3: function() {
					return Ie
				},
				WR: function() {
					return it
				},
				WX: function() {
					return ge
				},
				XF: function() {
					return Se
				},
				Xb: function() {
					return ie
				},
				Zs: function() {
					return Q
				},
				_f: function() {
					return Re
				},
				b4: function() {
					return oe
				},
				bc: function() {
					return At
				},
				c2: function() {
					return G
				},
				cE: function() {
					return Qe
				},
				dh: function() {
					return Ue
				},
				fE: function() {
					return je
				},
				g7: function() {
					return Ce
				},
				hO: function() {
					return mt
				},
				hV: function() {
					return Rt
				},
				hk: function() {
					return l
				},
				hr: function() {
					return V
				},
				it: function() {
					return at
				},
				j3: function() {
					return jt
				},
				jN: function() {
					return et
				},
				jo: function() {
					return Gt
				},
				k3: function() {
					return It
				},
				m8: function() {
					return N
				},
				nm: function() {
					return he
				},
				oW: function() {
					return lt
				},
				pH: function() {
					return R
				},
				pi: function() {
					return z
				},
				r4: function() {
					return Yt
				},
				rI: function() {
					return Z
				},
				s7: function() {
					return vt
				},
				sg: function() {
					return Me
				},
				tB: function() {
					return b
				},
				tN: function() {
					return se
				},
				u_: function() {
					return Vt
				},
				vV: function() {
					return He
				},
				vc: function() {
					return Le
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				s = t("../../../../node_modules/moment/moment.js"),
				d = t.n(s),
				a = t("../../../common/util/types/src/api/domain.ts"),
				v = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				c = t("../react/utils/url.ts"),
				u = t("../react/pages/home/domain-registration/utils/domain.ts"),
				_ = t("../react/pages/home/domain-registration/config.ts"),
				n = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = t("../react/pages/home/domain-registration/types.ts");

			function i(T) {
				for (var x = 1; x < arguments.length; x++) {
					var me = arguments[x] != null ? Object(arguments[x]) : {},
						Te = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(me).filter(function(We) {
						return Object.getOwnPropertyDescriptor(me, We).enumerable
					})), Te.forEach(function(We) {
						g(T, We, me[We])
					})
				}
				return T
			}

			function g(T, x, me) {
				return x = m(x), x in T ? Object.defineProperty(T, x, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[x] = me, T
			}

			function m(T) {
				var x = p(T, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function p(T, x) {
				if (typeof T != "object" || T === null) return T;
				var me = T[Symbol.toPrimitive];
				if (me !== void 0) {
					var Te = me.call(T, x || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(T)
			}

			function b(T) {
				return T.filter(x => x.isSelected).reduce((x, {
					name: me,
					fees: Te,
					isZoneEntitlementPresent: We
				}) => We || !(0, e.isNumber)(Te == null ? void 0 : Te.transfer_fee) ? x : ut(me) ? x + (Te == null ? void 0 : Te.transfer_fee) * 2 : x + (Te == null ? void 0 : Te.transfer_fee), 0)
			}

			function O(T) {
				return T.filter(x => x.registrar.toLowerCase() === "godaddy")
			}
			const h = "MMM D, YYYY";

			function l(T, x, me, Te) {
				var We, rt, pt, Pt, Et, de, le, ve, _e, Oe, Ne, Ge;
				const Fe = T[x.name],
					Ye = () => ut(x.name) ? d()(x.expires_at).add(2, "years").format(h) : d()(x.expires_at).add(1, "year").format(h);
				return i({
					name: x == null ? void 0 : x.name,
					zone: Fe,
					entitlements: me,
					registryCheck: Te,
					nameservers: x.name_servers,
					isAvailable: x.available,
					lastKnownStatus: x.last_known_status,
					authCode: x.auth_code,
					isEnterpriseZone: (Fe == null || (We = Fe.plan) === null || We === void 0 ? void 0 : We.legacy_id) === "enterprise",
					isActiveZone: (Fe == null ? void 0 : Fe.status) === "active",
					corResponsesPending: x.cor_responses_pending,
					isCorLocked: x.cor_locked,
					corLockedUntil: x.cor_locked_until ? d()(x.cor_locked_until).format(h) : null,
					isFullZone: (Fe == null ? void 0 : Fe.type) == r.xd.Full,
					isLocked: x.locked,
					registrar: x.current_registrar || _.JM,
					zoneId: Fe == null ? void 0 : Fe.id,
					currentExpiration: d()(x.expires_at).format(h),
					newExpiration: Ye(),
					lastEntitledAt: x.last_entitled_at ? new Date(x.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(me) && !!me.find(qe => qe.id === _.g5 && qe.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: x.transfer_in && w(x.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: x.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: x.transfer_in,
					transferOut: x.transfer_out,
					autoRenew: x.auto_renew === !0,
					lastTransferredAt: x.last_transferred_at,
					createdAt: x.created_at,
					paymentExpiresAt: d()(x.payment_expires_at).isValid() ? d()(x.payment_expires_at) : d()(x.expires_at).isValid() ? d()(x.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (rt = x.contacts) === null || rt === void 0 || (pt = rt.administrator) === null || pt === void 0 ? void 0 : pt.id,
						[r.l2.Billing]: (Pt = x.contacts) === null || Pt === void 0 || (Et = Pt.billing) === null || Et === void 0 ? void 0 : Et.id,
						[r.l2.Registrant]: (de = x.contacts) === null || de === void 0 || (le = de.registrant) === null || le === void 0 ? void 0 : le.id,
						[r.l2.Technical]: (ve = x.contacts) === null || ve === void 0 || (_e = ve.technical) === null || _e === void 0 ? void 0 : _e.id
					},
					landing: x.landing,
					privacy: x.privacy,
					whois: x.whois,
					emailVerified: x.email_verified,
					materialChanges: A(x.material_changes),
					corChanges: x.cor_changes ? D(Object.assign(i({}, f), x.cor_changes)) : {},
					registryStatuses: x.registry_statuses ? x.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Oe = x.domain_protection_services) === null || Oe === void 0 ? void 0 : Oe.status
					},
					deletion: {
						isDeletable: x == null || (Ne = x.deletion) === null || Ne === void 0 ? void 0 : Ne.is_deletable
					},
					premiumType: x == null ? void 0 : x.premium_type,
					fees: x == null ? void 0 : x.fees
				}, x.domain_move && {
					domainMove: {
						ineligibilityReasons: (Ge = x.domain_move) === null || Ge === void 0 ? void 0 : Ge.ineligibility_reasons
					}
				}, x.actionable_metadata && {
					actionableMetadata: C(x.actionable_metadata)
				}, x.policies && {
					policies: i({}, x.policies.suspension && {
						suspension: {
							parked: x.policies.suspension.parked,
							parkingReason: x.policies.suspension.parking_reason,
							paymentExpired: x.policies.suspension.payment_expired
						}
					})
				})
			}

			function C(T) {
				return T.map(x => ({
					accountContext: x.account_context,
					createdAt: x.created_at,
					expiresAt: x.expires_at,
					sentAt: x.sent_at,
					status: x.status,
					type: x.type
				}))
			}
			const f = {
				id: "",
				first_name: "",
				organization: "",
				address: "",
				city: "",
				state: "",
				zip: "",
				country: "",
				phone: "",
				email: "",
				fax: "",
				last_name: "",
				address2: "",
				email_verified: "",
				extensions: {}
			};

			function w(T) {
				switch (T.enter_auth_code) {
					case r.lW.OK:
						return r.BJ.Valid;
					case r.lW.NEEDED:
						return r.BJ.Pending;
					case r.lW.UNKNOWN:
						return r.BJ.Pending;
					case r.lW.REJECTED:
						return r.BJ.Error;
					case r.lW.TRYING:
						return r.BJ.Pending
				}
				return r.BJ.Pending
			}

			function k(T) {
				let x = T.extensions;
				((x == null ? void 0 : x.application_purpose) && (x == null ? void 0 : x.nexus_category) || (x == null ? void 0 : x.ca_legal_type)) && (T.extensions = i({}, (x == null ? void 0 : x.nexus_category) && {
					nexusCategory: x.nexus_category
				}, (x == null ? void 0 : x.application_purpose) && {
					applicationPurpose: x.application_purpose
				}, (x == null ? void 0 : x.ca_legal_type) && {
					ca_legal_type: x.ca_legal_type
				}));
				let me = i({}, typeof T.id == "string" ? {
					id: T.id
				} : {}, {
					first_name: T.firstName,
					organization: T.organization,
					address: T.address1,
					city: T.city,
					state: T.state || "N/A",
					zip: T.zip,
					country: T.country,
					phone: T.phone,
					email: T.email,
					fax: "",
					last_name: T.lastName,
					address2: T.address2,
					email_verified: T.emailVerified
				}, T.extensions ? {
					extensions: i({}, T.extensions.nexusCategory && {
						nexus_category: T.extensions.nexusCategory
					}, T.extensions.applicationPurpose && {
						application_purpose: T.extensions.applicationPurpose
					}, T.extensions.ca_legal_type && {
						ca_legal_type: T.extensions.ca_legal_type
					})
				} : {});
				return ze(me)
			}

			function A(T) {
				let x = [];
				const me = {
					id: "",
					first_name: "firstName",
					organization: "organization",
					address: "address1",
					city: "city",
					state: "state",
					zip: "zip",
					country: "country",
					phone: "phone",
					email: "email",
					fax: "fax",
					last_name: "lastName",
					address2: "address2",
					email_verified: "emailVerified",
					extensions: null
				};
				for (const Te in T) {
					const We = T[Te],
						rt = me[We];
					x.push(rt)
				}
				return x
			}
			const I = T => {
				if (!T) return null;
				let x = T;
				return T.includes("C31") && (x = "C31"), T.includes("C32") && (x = "C32"), x
			};

			function D(T) {
				return i({}, typeof T.id == "string" ? {
					id: T.id
				} : {}, {
					firstName: T.first_name,
					organization: T.organization,
					address1: T.address,
					city: T.city,
					state: T.state,
					zip: T.zip,
					country: T.country,
					phone: T.phone.trim(),
					email: T.email.trim(),
					lastName: T.last_name,
					address2: T.address2,
					emailVerified: T.email_verified
				}, T.extensions ? {
					extensions: i({}, T.extensions.nexus_category && {
						nexusCategory: I(T.extensions.nexus_category)
					}, T.extensions.application_purpose && {
						applicationPurpose: T.extensions.application_purpose
					}, T.extensions.ca_legal_type && {
						ca_legal_type: T.extensions.ca_legal_type
					})
				} : {})
			}

			function y(T = {}) {
				const x = {
					name: "",
					zoneId: "",
					zone: i({
						id: "",
						name: "",
						status: "pending",
						plan: i({
							id: "free",
							legacy_id: "free",
							name: "Free",
							price: 0,
							frequency: "monthly",
							currency: "usd",
							is_subscribed: !0,
							can_subscribe: !0,
							legacy_discount: !1,
							externally_managed: !1
						}, T.zone && T.zone.plan || {}),
						type: EZoneType.Full
					}, T.zone || {}),
					emailVerified: !1,
					nameservers: [],
					isCorLocked: !1,
					corLockedUntil: null,
					corResponsesPending: 0,
					isEnterpriseZone: !1,
					autoRenew: !1,
					isActiveZone: !0,
					isFullZone: !0,
					isAvailable: !1,
					isLocked: !0,
					currentExpiration: "",
					newExpiration: "",
					lastEntitledAt: null,
					isZoneEntitlementPresent: null,
					registrar: "",
					autoTransferStatus: EDomainAutoTransferStatus.Pending,
					transferAuthCode: "",
					authCodeStatus: EAuthCodeStatus.Pending,
					transferApiCallStatus: ETransferDomainStatus.Pending,
					transferConditions: i({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, T.transferConditions || {}),
					transferIn: i({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, T.transferIn || {}),
					lastTransferredAt: "",
					paymentExpiresAt: "",
					contactIds: {},
					landing: {
						eligible: !1,
						enabled: !1
					},
					whois: {
						raw: ""
					},
					privacy: !0,
					materialChanges: [],
					corChanges: {},
					registryStatuses: null,
					deletion: {
						isDeletable: !1
					},
					premiumType: DomainPremiumType.Not_Premium,
					fees: null,
					policies: {
						suspension: {
							parked: !1,
							parkingReason: null,
							paymentExpired: !1
						}
					}
				};
				return Object.assign(x, T)
			}

			function P(T = {}) {
				return Object.assign({
					firstName: "",
					lastName: "",
					address1: "",
					address2: "",
					city: "",
					state: "",
					zip: "",
					country: "",
					organization: "",
					phone: "",
					email: "",
					emailVerified: !1,
					extensions: void 0
				}, T)
			}

			function S(T) {
				const x = _.Py.concat(_.ui).reduce((me, Te) => i({}, me, {
					[Te]: []
				}), {});
				return T.forEach(me => {
					let Te = M(me.registrar);
					Te in x || (Te = _.ui), Me(me.name) && (Te = "uk"), x[Te].push(me)
				}), Object.keys(x).sort((me, Te) => me.localeCompare(Te)).map(me => ({
					registrar: me,
					domains: x[me]
				})).filter(me => me.domains.length > 0)
			}

			function M(T) {
				return T == null ? void 0 : T.toLowerCase().replace(/\s|,|\./g, "")
			}

			function F(T) {
				if (!T || !T.registrar) return "unknown";
				if (Me(T.name)) return "uk";
				const x = M(T.registrar);
				return x in _.gM ? x : "unknown"
			}
			const ne = [];

			function te(T) {
				return ne.some(x => T.endsWith("." + x))
			}

			function re(T) {
				return !T.isEnterpriseZone || !Array.isArray(T.entitlements) ? !1 : !!T.entitlements.find(({
					id: x,
					allocation: me
				}) => x === _.g5 && me.value === !0)
			}

			function z(T) {
				var x;
				const me = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let Te = !1,
					We = null;
				return (x = T.registryStatuses) === null || x === void 0 || x.some(rt => {
					me.includes(rt) && (We = rt, Te = !0)
				}), [Te, We]
			}

			function N(T, x = !1) {
				if (!T) return [!1, n.keys.cannot_transfer_default];
				if (T.zone.status !== "active") return [!1, n.keys.cannot_transfer_zone_not_active];
				if (!T.isFullZone && !re(T)) return [!1, n.keys.cannot_transfer_zone_not_eligible];
				if (T.registrar === "Cloudflare") return [!1, n.keys.cannot_transfer_domain_on_cf];
				if (T.isAvailable) return [!1, n.keys.cannot_transfer_domain_available];
				if (!T.transferConditions) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (!x && (0, u.Ou)(T == null ? void 0 : T.name)) return [!1, n.keys.cannot_transfer_domain_tld_not_supported];
				if (R(T)) return [!1, n.keys.cannot_transfer_domain_transfer_in_progress];
				let me;
				for (me in T.transferConditions)
					if (me !== "not_premium" && !T.transferConditions[me]) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (te(T.name)) return [!1, n.keys.cannot_transfer_domain_tld_not_supported];
				const [Te, We] = z(T);
				return Te && We ? [!1, n.keys.cannot_transfer_domain_registry_status[We]] : [!0, ""]
			}

			function R(T) {
				var x, me;
				return !!T.transferIn && !((x = T.transferConditions) === null || x === void 0 ? void 0 : x.not_started) && !!(Me(T.name) || ((me = T.registryStatuses) === null || me === void 0 ? void 0 : me.includes(r.rj.PENDING_TRANSFER)))
			}

			function K(T) {
				return !!T.registrar && !!T.currentExpiration
			}

			function U(T, x = !1) {
				const [me] = N(T, x);
				return K(T) ? we(T) ? r.M5.InProgressOrOnCF : me ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function G(T) {
				return T.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(T.transferIn.enter_auth_code) || !1
			}

			function H(T) {
				return T.registrar === "Cloudflare"
			}

			function Z(T) {
				return !!(T == null ? void 0 : T.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function $(T) {
				return !!(T == null ? void 0 : T.includes(r.rj.PENDING_TRANSFER))
			}
			const J = "Invalid date";

			function L(T) {
				return T.newExpiration === J ? !1 : T.newExpiration
			}

			function W(T) {
				return T.currentExpiration === J ? !1 : T.currentExpiration
			}

			function X(T) {
				return T.substring(T.indexOf("."))
			}

			function ie(T = "") {
				return T.indexOf(".") !== -1 ? T.substring(0, T.indexOf(".")) : T
			}

			function V(T) {
				return T.map(x => x.name).map(x => X(x)).filter((x, me, Te) => !Te.includes(x, me + 1))
			}

			function oe(T) {
				if (_.no) return [!0, ""];
				if (!H(T)) return [!1, r.ok.NotOnCF];
				if (T.isCorLocked) return [!1, T.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (T.lastTransferredAt) {
					const x = d()(T.lastTransferredAt),
						me = d().duration(d()().diff(x)).as("days"),
						Te = Me(T.name);
					if (me < (Te ? 1 : 60)) return [!1, Te ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (T.createdAt) {
					const x = d()(T.createdAt);
					if (d().duration(d()().diff(x)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function ge(T) {
				return !!(_.Bc || T.transferOut)
			}

			function we(T) {
				return Ce(T) || H(T)
			}

			function se(T) {
				return !Ce(T) && H(T)
			}

			function Ce(T) {
				return !T || T.lastKnownStatus === r.kd.PENDING_TRANSFER || T.lastKnownStatus === r.kd.TRANSFER_FOA_PENDING || !H(T) && T.transferConditions && !T.transferConditions.not_started || !1
			}

			function Ae(T) {
				return !(te(T.name) || T.transferConditions && !T.transferConditions.supported_tld)
			}

			function xe(T) {
				return (T == null ? void 0 : T.includes("/")) ? !0 : T.split("").some(x => x.charCodeAt(0) > 123)
			}

			function $e(T) {
				switch (T) {
					case "1&1internetse":
						return "1&1 Ionos";
					case "enom":
						return "Enom";
					case "godaddycomllc":
						return "GoDaddy";
					case "namecheap":
						return "Namecheap";
					case "networksolutions":
						return "Network Solutions";
					case "uk":
						return "UK"
				}
			}

			function Le(T) {
				return d()(T.paymentExpiresAt).isBefore(d()())
			}

			function et(T) {
				return T.transferIn && T.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function Ve(T) {
				const x = ["CU", "KP", "IR", "SY"];
				return T.filter(me => !x.includes(me.code))
			}

			function ot(T) {
				if (!!T) return `${T.charAt(0).toUpperCase()}${T.slice(1)}${T.charAt(T.length-1)==="."?"":"."}`
			}

			function ze(T) {
				const x = {};
				for (const [me, Te] of Object.entries(T)) {
					if (Te && typeof Te == "string") {
						Object.assign(x, {
							[me]: Te.trim()
						});
						continue
					}
					Object.assign(x, {
						[me]: Te
					})
				}
				return x
			}

			function Q(T) {
				return d()(T).add(40, "days")
			}

			function be(T) {
				const x = T.paymentExpiresAt || T.payment_expires_at,
					me = Q(x);
				return d()().isBetween(x, me)
			}

			function je(T) {
				var x;
				return !(T == null ? void 0 : T.registryStatuses) || !Array.isArray(T == null ? void 0 : T.registryStatuses) && !(0, e.isString)(T == null ? void 0 : T.registryStatuses) ? !1 : (x = T.registryStatuses) === null || x === void 0 ? void 0 : x.includes(r.rj.REDEMPTION_PERIOD)
			}

			function Ue(T) {
				var x;
				return !(T == null ? void 0 : T.registryStatuses) || !Array.isArray(T == null ? void 0 : T.registryStatuses) && !(0, e.isString)(T == null ? void 0 : T.registryStatuses) ? !1 : (x = T.registryStatuses) === null || x === void 0 ? void 0 : x.includes(r.rj.PENDING_DELETE)
			}

			function tt(T) {
				return [".us"].includes(T)
			}

			function at(T) {
				return [".us"].includes(T)
			}

			function mt(T) {
				switch (T) {
					case ".us":
						return ee();
					default:
						return []
				}
			}

			function Ie(T) {
				switch (T) {
					case ".us":
						return nt;
					default:
						return {}
				}
			}
			const nt = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function ee() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([T, x]) => ({
						value: T,
						label: x
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([T, x]) => ({
						value: T,
						label: x
					}))
				}]
			}

			function ce(T, x, me) {
				return x[x.length - 1][me] === T[me]
			}

			function fe(T) {
				return Boolean(Object.keys(T).length === 0)
			}

			function Be(T) {
				return d()().add(T, "year").format(h)
			}

			function Re({
				accountName: T
			}) {
				var x;
				const me = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((x = T.toLowerCase().match(me)) === null || x === void 0 ? void 0 : x[0]) || ""
			}

			function He(T) {
				return !!T.match(v.default.email)
			}

			function Ze(T) {
				return T === a.W7.PENDING_UPDATE
			}

			function ft(T) {
				return T ? Object.values(a.wR).filter(x => x !== a.wR.OFFBOARDED).includes(T) : !1
			}

			function vt(T) {
				return T ? [a.wR.LOCKED, a.wR.ONBOARDED, a.wR.ONBOARDING_INITIATED, a.wR.PENDING_REGISTRY_LOCK, a.wR.PENDING_REGISTRY_UNLOCK, a.wR.PENDING_UNLOCK_APPROVAL].includes(T) : !1
			}

			function Wt(T) {
				return T ? a.wR.UNLOCKED === T : !1
			}

			function kt(T) {
				return T ? a.wR.LOCKED === T : !1
			}

			function bt(T) {
				return T ? a.wR.PENDING_REGISTRY_LOCK === T : !1
			}

			function _t(T) {
				return T ? [a.wR.PENDING_REGISTRY_UNLOCK, a.wR.PENDING_UNLOCK_APPROVAL].includes(T) : !1
			}

			function Ke(T) {
				var x;
				return !1
			}

			function it(T) {
				var x;
				return !1
			}

			function ht(T) {
				var x;
				return !1
			}

			function Se(T) {
				var x;
				return !1
			}

			function dt(T) {
				var x;
				return !1
			}

			function lt(T) {
				return Object.keys(a.wR).find(x => a.wR[x].toLowerCase() === T.toLowerCase())
			}

			function Ot(T) {
				var x;
				const me = (x = lt(T)) === null || x === void 0 ? void 0 : x.toLowerCase();
				return me ? n.keys.protection_status[me] : n.keys.protection_status.unknown
			}

			function Y(T) {
				return ["com", "net"].includes(T)
			}

			function ue(T) {
				const x = (0, c.pu)(T);
				return Y(x) ? a.wR.PENDING_REGISTRY_LOCK : a.wR.LOCKED
			}

			function ye(T) {
				return (0, c.pu)(T) === "co" ? 5 : 10
			}

			function he(T, x) {
				return x ? 1 : (0, c.pu)(T) === "co" ? 5 : (0, c.pu)(T) === "org" ? 1 : 10
			}

			function Me(T) {
				return (0, c.pu)(T) === "uk"
			}

			function Qe(T) {
				return (0, c.pu)(T) === "us"
			}

			function ut(T) {
				return (0, c.pu)(T) === "ai"
			}

			function zt(T) {
				return d()(T).isValid()
			}

			function Xe(T) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(T)
			}

			function Mt(T) {
				return !!(T == null ? void 0 : T.id)
			}

			function xt(T) {
				return T ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(T) : !1
			}

			function Tt(T) {
				return T ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(T) : !1
			}

			function Rt(T) {
				var x;
				return (T == null ? void 0 : T.lastKnownStatus) ? (x = T.lastKnownStatus) === null || x === void 0 ? void 0 : x.includes("deletionIrredeemable") : !1
			}

			function Nt(T) {
				switch (T) {
					case r.Vs.NonStandard_NonStandard:
					case r.Vs.NonStandard_Standard:
					case r.Vs.Standard_Standard:
					case r.Vs.Standard_NonStandard:
						return !0;
					case r.Vs.Not_Premium:
					default:
						return !1
				}
			}

			function Bt(T) {
				if (!T || !T.message) return r.OJ.DEFAULT;
				const {
					message: x
				} = T;
				switch (!0) {
					case x.includes("feature disabled"):
						return r.OJ.FEATURE_DISABLED;
					case x.includes("email unverified"):
						return r.OJ.EMAIL_UNVERIFIED;
					case x.includes("account blocked"):
						return r.OJ.ACCOUNT_BLOCKED;
					default:
						return r.OJ.DEFAULT
				}
			}

			function Ct(T) {
				var x, me;
				return !!(((x = T.policies) === null || x === void 0 || (me = x.suspension) === null || me === void 0 ? void 0 : me.parked) && T.policies.suspension.parkingReason)
			}

			function jt(T) {
				var x, me;
				return Ct(T) && ((x = T.policies) === null || x === void 0 || (me = x.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === r.qK.EMAIL_VERIFICATION
			}

			function It(T) {
				var x, me;
				return Ct(T) && ((x = T.policies) === null || x === void 0 || (me = x.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === r.qK.TRUST_AND_SAFETY
			}

			function Kt(T) {
				var x;
				return !((x = T.domainMove) === null || x === void 0 ? void 0 : x.ineligibilityReasons.length)
			}

			function Ht(T) {
				var x, me;
				return !!((x = T.domainMove) === null || x === void 0 || (me = x.ineligibilityReasons) === null || me === void 0 ? void 0 : me.includes(r.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Ut(T) {
				var x;
				return (x = T.actionableMetadata) === null || x === void 0 ? void 0 : x.find(me => me.type === r.wg.DOMAIN_MOVE)
			}

			function Gt(T) {
				const x = Ut(T);
				return (x == null ? void 0 : x.status) === "pending" && x.accountContext === r._5.GAINING
			}

			function Vt(T) {
				const x = Ut(T);
				return (x == null ? void 0 : x.status) === "pending" && x.accountContext === r._5.LOSING
			}

			function Yt(T) {
				const x = X(T.name);
				return !_.Pf.includes(x)
			}

			function At(T) {
				return _.QZ.includes(T)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Bc: function() {
					return c
				},
				HG: function() {
					return Ce
				},
				Hv: function() {
					return Ae
				},
				JM: function() {
					return s
				},
				Ni: function() {
					return p
				},
				Pf: function() {
					return i
				},
				Py: function() {
					return v
				},
				QZ: function() {
					return g
				},
				WK: function() {
					return _
				},
				g5: function() {
					return n
				},
				gM: function() {
					return a
				},
				jk: function() {
					return se
				},
				kO: function() {
					return m
				},
				no: function() {
					return u
				},
				ui: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../flags.ts");
			const s = "Unknown",
				d = "unknown",
				a = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				v = Object.keys(a),
				c = (0, o.J8)("registrar_mock_transfer_out") || !1,
				u = (0, o.J8)("registrar_show_unlock_ui") || !1,
				_ = 250,
				n = "cf_registrar.enabled",
				r = "@abcABC1234567890123456",
				i = [".us"],
				g = [".travel", ".us", ".ong", ".ngo"],
				m = ["BR", "CA", "MX", "US"],
				p = ["ca"],
				b = (0, e.BC)`/${"accountId"}`,
				O = (0, e.BC)`${b}/add-site`,
				h = (0, e.BC)`${b}/registrar`,
				l = (0, e.BC)`${h}/domains`,
				C = (0, e.BC)`${h}/action-center`,
				f = (0, e.BC)`${h}/domain/${"zoneName"}`,
				w = (0, e.BC)`${f}/configuration`,
				k = (0, e.BC)`${f}/contacts`,
				A = (0, e.BC)`${h}/pricing`,
				I = (0, e.BC)`${h}/protection`,
				D = (0, e.BC)`${h}/register`,
				y = (0, e.BC)`${D}/checkout`,
				P = (0, e.BC)`${D}/checkout/${"token"}`,
				S = (0, e.BC)`${D}/success`,
				M = (0, e.BC)`${h}/tlds`,
				F = (0, e.BC)`${h}/transfer`,
				ne = (0, e.BC)`${h}/transfer/${"zoneName"}`,
				te = (0, e.BC)`/registrar/accounts/verify_email`,
				re = (0, e.BC)`/registrar/domains/verify_email`,
				z = (0, e.BC)`/sign-up/registrar`,
				N = (0, e.BC)`${h}/verify-email`,
				R = (0, e.BC)`${b}/${"zoneName"}`,
				K = (0, e.BC)`${b}/domains`,
				U = (0, e.BC)`${K}/action-center`,
				G = (0, e.BC)`${K}/${"zoneName"}`,
				H = (0, e.BC)`${G}/configuration`,
				Z = (0, e.BC)`${G}/contacts`,
				$ = (0, e.BC)`${K}/pricing`,
				J = (0, e.BC)`${K}/protection`,
				L = (0, e.BC)`${K}/register`,
				W = (0, e.BC)`${L}/checkout`,
				X = (0, e.BC)`${L}/checkout/${"token"}`,
				ie = (0, e.BC)`${L}/success`,
				V = (0, e.BC)`${K}/tlds`,
				oe = (0, e.BC)`${K}/transfer`,
				ge = (0, e.BC)`${K}/transfer/${"zoneName"}`,
				we = (0, e.BC)`${K}/verify-email`,
				se = {
					addSite: O,
					domains: l,
					domainsActionCenter: C,
					domainsDomain: f,
					domainsDomainConfiguration: w,
					domainsDomainContacts: k,
					domainsPricing: A,
					domainsProtection: I,
					domainsRegister: D,
					domainsRegisterCheckout: y,
					domainsRegisterCheckoutToken: P,
					domainsRegisterSuccess: S,
					domainsTlds: M,
					domainsTransfer: F,
					domainsTransferZone: ne,
					registrar: h,
					registrarAccountsVerifyEmail: te,
					registrarDomainsVerifyEmail: re,
					signup: z,
					verifyEmail: N,
					zone: R
				},
				Ce = {
					LEGACY_domains: K,
					LEGACY_domainsActionCenter: U,
					LEGACY_domainsDomain: G,
					LEGACY_domainsDomainConfiguration: H,
					LEGACY_domainsDomainContacts: Z,
					LEGACY_domainsPricing: $,
					LEGACY_domainsProtection: J,
					LEGACY_domainsRegister: L,
					LEGACY_domainsRegisterCheckout: W,
					LEGACY_domainsRegisterCheckoutToken: X,
					LEGACY_domainsRegisterSuccess: ie,
					LEGACY_domainsTlds: V,
					LEGACY_domainsTransfer: oe,
					LEGACY_domainsTransferZone: ge,
					LEGACY_verifyEmail: we
				},
				Ae = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				HO: function() {
					return c
				},
				NW: function() {
					return u
				},
				ZQ: function() {
					return d
				},
				b_: function() {
					return v
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");
			const s = _ => {
					const n = _ && _.accountFlags && _.accountFlags.data && _.accountFlags.data.registrar && _.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(r => r.trim()) : []
				},
				d = _ => {
					var n, r, i;
					return ((n = _.accountFlags) === null || n === void 0 || (r = n.data) === null || r === void 0 || (i = r.registrar) === null || i === void 0 ? void 0 : i["registrar-managed"]) || !1
				},
				a = _ => _.account ? _.account.email : "",
				v = _ => !1,
				c = _ => v(_) && (0, e.oJ)((0, e.Zu)(_)),
				u = _ => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: r
					} = _.registrar.registrations;
					return n && !(r.accepted_date || r.id || r.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				J: function() {
					return r
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = t.n(s),
				a = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function v(i) {
				for (var g = 1; g < arguments.length; g++) {
					var m = arguments[g] != null ? Object(arguments[g]) : {},
						p = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(m).filter(function(b) {
						return Object.getOwnPropertyDescriptor(m, b).enumerable
					})), p.forEach(function(b) {
						c(i, b, m[b])
					})
				}
				return i
			}

			function c(i, g, m) {
				return g = u(g), g in i ? Object.defineProperty(i, g, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[g] = m, i
			}

			function u(i) {
				var g = _(i, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function _(i, g) {
				if (typeof i != "object" || i === null) return i;
				var m = i[Symbol.toPrimitive];
				if (m !== void 0) {
					var p = m.call(i, g || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(i)
			}
			let n = function(i) {
				return i.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", i.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", i.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", i.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", i.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", i.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", i.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", i.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE = "change canada registrant legal type", i.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", i.TRANSFER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE = "change canada registrant legal type", i.RENEW_DOMAIN_COMPLETED = "domain renewal completed", i.RESTORE_DOMAIN_INIT = "click to open domain restore modal", i.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", i.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", i.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", i.RESTORE_DOMAIN_FAILURE = "domain restore failed", i.RESTORE_DOMAIN_COMPLETED = "domain restore completed", i.DOMAIN_DELETE_INIT = "click to begin domain delete", i.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", i.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", i.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", i.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", i.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", i.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", i.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", i.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", i.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", i.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", i.DOMAIN_MOVE_START_FLOW = "Start domain move flow", i.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", i.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", i.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", i.DOMAIN_MOVE_SUBMIT = "Submit domain move", i.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", i.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", i.DOMAIN_MOVE_CANCEL = "Domain move cancel", i.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", i.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", i.ACTION_CENTER_NAVIGATE = "Navigate to actions center", i.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", i.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS = "domain update canada registrant type completed successfully", i.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR = "domain update canada registrant type failed", i
			}({});

			function r(i, g, m) {
				if (!(g == null ? void 0 : g.name)) return null;
				d().sendEvent(i, v({
					domain: v({
						name: g.name,
						premium: (0, a.Uy)(g == null ? void 0 : g.premiumType)
					}, (g == null ? void 0 : g.paymentExpiresAt) && {
						paymentExpiresAt: o()(g == null ? void 0 : g.paymentExpiresAt).format()
					}),
					category: "registrar"
				}, m))
			}
		},
		"../react/pages/home/domain-registration/utils/domain.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				FC: function() {
					return u
				},
				Ou: function() {
					return a
				},
				TQ: function() {
					return c
				},
				rS: function() {
					return v
				},
				v_: function() {
					return d
				}
			});
			var e = t("../react/utils/url.ts"),
				o = t("../react/pages/home/domain-registration/bulk-transfer-util.ts"),
				s = t("../react/pages/home/domain-registration/types.ts");
			const d = _ => (0, o.Ac)(_) ? 2 : 1,
				a = _ => (0, e.pu)(_) === "ca",
				v = [{
					label: "Canadian citizen",
					value: "CCT"
				}, {
					label: "Permanent Resident of Canada",
					value: "RES"
				}, {
					label: "Legal Rep. of a Canadian Citizen or Permanent Resident",
					value: "LGR"
				}, {
					label: "Aboriginal Peoples indigenous to Canada",
					value: "ABO"
				}, {
					label: "Canadian Unincorporated Association",
					value: "ASS"
				}, {
					label: "Corporation (Canada or Canadian province or territory)",
					value: "CCO"
				}, {
					label: "Canadian Educational Institution",
					value: "EDU"
				}, {
					label: "Government or government entity in Canada",
					value: "GOV"
				}, {
					label: "Canadian Hospital",
					value: "HOP"
				}, {
					label: "Indian Band recognized by the Indian Act of Canada",
					value: "INB"
				}, {
					label: "Canadian Library, Archive or Museum",
					value: "LAM"
				}, {
					label: "Her Majesty the Queen",
					value: "MAJ"
				}, {
					label: "Official mark registered in Canada",
					value: "OMK"
				}, {
					label: "Canadian Political Party",
					value: "PLT"
				}, {
					label: "Partnership Registered in Canada",
					value: "PRT"
				}, {
					label: "Trade-mark registered in Canada (by a non-Canadian owner)",
					value: "TDM"
				}, {
					label: "Canadian Trade Union",
					value: "TRD"
				}, {
					label: "Trust established in Canada",
					value: "TRS"
				}],
				c = v.filter(_ => _.value !== s.Hy.MAJ && _.value !== s.Hy.OMK && _.value !== s.Hy.TDM),
				u = _ => {
					const n = [s.Hy.ABO, s.Hy.CCT, s.Hy.LGR, s.Hy.RES];
					return !_ || (_ == null ? void 0 : _.length) === 0 ? !1 : _ ? !n.includes(_) : !0
				}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				HX: function() {
					return c
				},
				Re: function() {
					return h
				},
				Rh: function() {
					return p
				},
				hX: function() {
					return g
				},
				oO: function() {
					return O
				},
				s_: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react/react"),
				d = t.n(s),
				a = t("../react/utils/translator.tsx"),
				v = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts");
			let c = function(l) {
				return l.UNKNOWN = "unknown", l.WORKERS = "workers", l.ACCESS_APPS = "access_apps", l.ACCESS_IDP = "access_ipd", l
			}({});
			const u = [{
				value: c.WORKERS,
				label_i18n: "policy.granular_resources.type.workers",
				scopeKeyPrefix: "com.cloudflare.edge.worker.script",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: c.ACCESS_APPS,
				label_i18n: "policy.granular_resources.type.access_apps",
				scopeKeyPrefix: "com.cloudflare.edge.access.app",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: c.ACCESS_IDP,
				label_i18n: "policy.granular_resources.type.access_idp",
				scopeKeyPrefix: "com.cloudflare.edge.access.identity-provider",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}];

			function _(l) {
				return {
					key: "com.cloudflare.edge.worker.script." + l.id,
					name: l.name + (l.environment ? ` (${l.environment})` : ""),
					type: c.WORKERS
				}
			}

			function n(l) {
				const C = l;
				return {
					key: "com.cloudflare.edge.access.app." + C.id,
					name: C.name,
					type: c.ACCESS_APPS
				}
			}
			const r = {
				azureAD: "Azure AD",
				centrify: "Centrify",
				facebook: "Facebook",
				github: "GitHub",
				google: "Google",
				gsuite: "Google Workspace",
				linkedin: "Linkedin",
				oidc: "OIDC",
				okta: "Okta",
				onelogin: "Onelogin",
				onetimepin: "One Time Pin",
				passwordless: "One Time Pin",
				pingone: "PingOne",
				saml: "SAML",
				yandex: "Yandex"
			};

			function i(l) {
				const C = l,
					f = r[C.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + C.id,
					name: `${f||"Unknown Type"}${C.name?" - "+C.name:""}`,
					type: c.ACCESS_IDP
				}
			}
			const g = async (l, C, f) => C == c.WORKERS ? (await m(`/accounts/${l}/workers/scripts-search?name=${f}&perPage=10`)).body.result.map(w => ({
				id: w.id,
				name: w.service_name || w.script_name,
				environment: w.environment_name
			})).map(_) : C == c.ACCESS_APPS ? (await m(`/accounts/${l}/access/apps?name=${f}`)).body.result.map(n) : C == c.ACCESS_IDP ? (await m(`/accounts/${l}/access/identity_providers`)).body.result.map(i) : [];
			async function m(l) {
				try {
					return await (0, e.get)(l, {
						hideErrorAlert: !0
					})
				} catch (w) {
					var C, f;
					throw ((C = w.body) === null || C === void 0 ? void 0 : C.errors) ? w.body.errors[0].message : w.text ? w.text : ((f = w.response) === null || f === void 0 ? void 0 : f.statusText) ? w.response.statusText : "Unexpected error response"
				}
			}
			const p = async (l, C) => {
				const f = C.split("."),
					w = f.pop(),
					k = f.join(".");
				let A;
				switch (k) {
					case "com.cloudflare.edge.worker.script":
						const I = (await m(`/accounts/${l}/workers/scripts-search/${w}`)).body.result;
						return _({
							id: I.id,
							name: I.service_name || I.script_name,
							environment: I.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return A = await m(`/accounts/${l}/access/identity_providers/${w}`), i(A.body.result);
					case "com.cloudflare.edge.access.app":
						return A = await m(`/accounts/${l}/access/apps/${w}`), n(A.body.result)
				}
			}, b = {
				loading: !0,
				isDisabled: !0
			}, O = () => "production";

			function h(l) {
				const [C] = (0, v.k)(l), [f, w] = (0, s.useState)(!0), [k, A] = (0, s.useState)([]);
				return (0, s.useEffect)(() => {
					if (!C) return;
					const I = u.filter(D => C.find(y => y.meta.scopes === D.scopeKeyPrefix)).map(D => {
						const y = D.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							P = C.filter(S => S.meta.scopes === D.scopeKeyPrefix).find(S => !S.meta.visibility || S.meta.visibility !== "beta");
						return {
							value: D.value,
							label: (0, a.ZP)(D.label_i18n),
							state: y ? b : {
								loading: !1,
								isDisabled: !1
							},
							beta: !P
						}
					});
					A(I)
				}, [C]), (0, s.useEffect)(() => {
					(async () => {
						try {
							await g(l, c.ACCESS_APPS, ""), b.isDisabled = !1
						} catch (I) {
							I.startsWith("access.api.error.not_enabled") ? b.disableInfo = (0, a.ZP)("policy.granular_resources.type.access.not_enabled") : b.error = I
						}
						b.loading = !1, A(I => [...I])
					})()
				}, [l]), (0, s.useEffect)(() => {
					const I = k.find(D => D.state.loading);
					w(!!I)
				}, [k]), {
					types: k,
					isLoading: f
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Ey: function() {
					return _
				},
				F4: function() {
					return b
				},
				Go: function() {
					return g
				},
				Lc: function() {
					return w
				},
				Np: function() {
					return r
				},
				Rl: function() {
					return i
				},
				Sb: function() {
					return m
				},
				Sw: function() {
					return f
				},
				Sz: function() {
					return C
				},
				Ti: function() {
					return k
				},
				Uw: function() {
					return h
				},
				Zl: function() {
					return O
				},
				jk: function() {
					return l
				},
				r6: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${o}/members`,
				d = (0, e.BC)`${s}/invite`,
				a = (0, e.BC)`${s}/invite/${"memberId"}`,
				v = (0, e.BC)`${s}/add-policy/${"memberId"}`,
				c = (0, e.BC)`${s}/user-groups`,
				u = (0, e.BC)`${s}/user-groups/${"userGroupId"}`,
				_ = "com.cloudflare.api.account",
				r = _ + "." + "zone",
				i = r + ".",
				g = 100,
				m = 200,
				p = 5,
				b = 300,
				O = "INVITE_TOAST",
				h = "00000000000000000000000000000000",
				l = {
					account: o,
					members: s,
					groups: c,
					group: u,
					inviteMembers: d,
					editMember: a,
					addPolicy: v
				},
				C = {
					allow: "allow",
					deny: "deny"
				},
				f = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				w = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				k = {
					accountId: "",
					effect: C.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/sparrowEvents.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Bz: function() {
					return u
				},
				SH: function() {
					return _
				},
				g5: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(m) {
						return Object.getOwnPropertyDescriptor(i, m).enumerable
					})), g.forEach(function(m) {
						d(n, m, i[m])
					})
				}
				return n
			}

			function d(n, r, i) {
				return r = a(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function a(n) {
				var r = v(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CLICK_USERGROUP_BETA_BUTTON = "click usergroup beta button", n.MEMBERS_TAB_NAVIGATE = "nagivate members tab", n
			}({});
			const u = ({
					name: n,
					additionalData: r = {}
				}) => {
					o().sendEvent(n, s({}, r || {}))
				},
				_ = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/home/members/utils.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				AX: function() {
					return l
				},
				Co: function() {
					return O
				},
				Hf: function() {
					return I
				},
				JP: function() {
					return h
				},
				LX: function() {
					return P
				},
				Ld: function() {
					return i
				},
				YW: function() {
					return u
				},
				_k: function() {
					return g
				},
				c$: function() {
					return _
				},
				rC: function() {
					return y
				},
				vq: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				o = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				s = t("../react/pages/home/members/constants.ts");

			function d(M) {
				for (var F = 1; F < arguments.length; F++) {
					var ne = arguments[F] != null ? Object(arguments[F]) : {},
						te = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(ne).filter(function(re) {
						return Object.getOwnPropertyDescriptor(ne, re).enumerable
					})), te.forEach(function(re) {
						a(M, re, ne[re])
					})
				}
				return M
			}

			function a(M, F, ne) {
				return F = v(F), F in M ? Object.defineProperty(M, F, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[F] = ne, M
			}

			function v(M) {
				var F = c(M, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function c(M, F) {
				if (typeof M != "object" || M === null) return M;
				var ne = M[Symbol.toPrimitive];
				if (ne !== void 0) {
					var te = ne.call(M, F || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(M)
			}
			const u = () => d({}, s.Ti),
				_ = () => d({}, s.Lc, {
					scopes: [u()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = M => M.map(F => ({
					scope: {
						key: F,
						objects: [{
							key: "*"
						}]
					}
				})),
				r = (M, F, ne) => {
					var te;
					let re = [],
						z = [];
					const N = [],
						R = [];
					M.scopes.forEach(G => {
						if (G.mode === s.Sw.all) ne ? re.push({
							id: ne
						}) : re.push({
							scope: {
								key: `com.cloudflare.api.account.${F}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (G.mode === s.Sw.domain_group) {
							const Z = {
								id: G.resourceGroupId
							};
							G.effect === s.Sz.allow ? re.push(Z) : z.push(Z)
						} else if (G.mode === s.Sw.zone) {
							const Z = `${s.Rl}${G.zoneId}`;
							G.effect === s.Sz.allow ? N.push(Z) : R.push(Z)
						} else if (G.mode === s.Sw.granular && G.granularResourceKey) {
							var H;
							const Z = G.granularProduct,
								J = `${(H=o.s_.find(L=>L.value===Z))===null||H===void 0?void 0:H.scopeSubsetOfPrefix}.${F}`;
							re.push({
								scope: {
									key: `${G.granularResourceKey}`,
									subset_of: [{
										key: `${J}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), N.length && (re = re.concat(n(N))), R.length && (z = z.concat(n(R)));
					const K = (te = M.permission_groups) === null || te === void 0 ? void 0 : te.map(G => ({
							id: G
						})),
						U = [];
					return U.push({
						access: s.Sz.allow,
						permission_groups: K,
						resource_groups: re
					}), z.length && U.push({
						access: s.Sz.deny,
						permission_groups: K,
						resource_groups: z
					}), U
				},
				i = M => M.map(F => {
					var ne;
					return {
						access: F.access,
						permission_groups: F.permission_groups.map(te => ({
							id: te.id
						})),
						resource_groups: (ne = F.resource_groups) === null || ne === void 0 ? void 0 : ne.map(te => ({
							scope: {
								key: te.scope.key,
								objects: te.scope.objects
							},
							id: te.id
						}))
					}
				}),
				g = (M, F, ne, te) => {
					const re = M.auto_accept;
					let z = [];
					return z = z.concat(r(M, F, ne)), te && (z = z.concat(i(te))), {
						auto_accept: re,
						status: re ? "accepted" : "pending",
						policies: z
					}
				},
				m = M => {
					const F = M.split(".");
					return F[F.length - 1]
				},
				p = M => {
					var F, ne;
					const te = M == null ? void 0 : M.access;
					let re = [],
						z = M == null || (F = M.resource_groups) === null || F === void 0 ? void 0 : F.map(N => {
							var R;
							const K = b(N);
							if ((N == null || (R = N.meta) === null || R === void 0 ? void 0 : R.editable) === "false") return {
								effect: te,
								mode: s.Sw.all,
								accountId: m(N.id)
							};
							if (K) {
								var U;
								return {
									effect: te,
									mode: s.Sw.granular,
									granularProduct: K.value,
									granularResourceKey: N == null || (U = N.scope) === null || U === void 0 ? void 0 : U.key
								}
							} else if (!N.name) N.scope.key.startsWith(s.Rl) ? re.push({
								key: N.scope.key
							}) : re = re.concat(N.scope.objects);
							else return {
								effect: te,
								mode: s.Sw.domain_group,
								resourceGroupId: m(N.id)
							}
						}).filter(N => N);
					if ((ne = re) === null || ne === void 0 ? void 0 : ne.length) {
						let N = re.map(R => {
							const K = m(R.key);
							return {
								effect: te,
								mode: s.Sw.zone,
								zoneId: K
							}
						});
						z = z.length ? N.concat(z) : N
					}
					return z
				},
				b = M => {
					var F, ne, te, re;
					const z = M == null || (F = M.scope) === null || F === void 0 ? void 0 : F.key.split(".").slice(0, -1).join("."),
						N = M == null || (ne = M.scope) === null || ne === void 0 || (te = ne.subset_of) === null || te === void 0 || (re = te[0]) === null || re === void 0 ? void 0 : re.key.split(".").slice(0, -1).join(".");
					return o.s_.find(R => R.scopeKeyPrefix === z && R.scopeSubsetOfPrefix === N)
				},
				O = M => {
					if (!(M == null ? void 0 : M.length)) return [];
					const F = [];
					return M.forEach(ne => {
						var te;
						(te = ne.resource_groups) === null || te === void 0 || te.forEach(re => {
							var z, N;
							((z = re.scope) === null || z === void 0 || (N = z.key) === null || N === void 0 ? void 0 : N.startsWith(s.Rl)) && F.push(m(re.scope.key))
						})
					}), F
				},
				h = M => {
					if (!(M == null ? void 0 : M.length)) return [];
					const F = [];
					return M.forEach(ne => {
						var te;
						(te = ne.resource_groups) === null || te === void 0 || te.forEach(re => {
							var z, N;
							if (!((z = re.scope) === null || z === void 0 || (N = z.key) === null || N === void 0 ? void 0 : N.startsWith(s.Rl))) {
								var R;
								const U = (R = re.scope) === null || R === void 0 ? void 0 : R.objects;
								for (let G = 0; G < (U == null ? void 0 : U.length) && G < s.r6; G++) {
									var K;
									((K = U[G].key) === null || K === void 0 ? void 0 : K.startsWith(s.Rl)) && F.push(m(U[G].key))
								}
							}
						})
					}), F
				},
				l = M => {
					var F;
					if (!(M == null ? void 0 : M.length)) return null;
					const ne = (F = M[0]) === null || F === void 0 ? void 0 : F.permission_groups.map(N => N.id);
					let te, re;
					M == null || M.forEach(N => {
						N.access === s.Sz.allow && (te = N), N.access === s.Sz.deny && (re = N)
					});
					let z = [];
					return te && (z = p(te)), re && (z = z.concat(p(re))), {
						permission_groups: ne,
						scopes: z
					}
				},
				C = "permission-groups-",
				f = "permission-groups-expiring-",
				w = 1 * 24 * 60 * 60,
				k = new Map,
				A = M => D(C, M),
				I = M => D(f, M),
				D = (M, F) => {
					if (!F) return [];
					const ne = k.get(F);
					if (ne) return ne;
					const te = e.E.get(`${M}${F}`);
					return te ? (k.set(F, te), te) : []
				},
				y = (M, F) => S(C, M, F),
				P = (M, F) => S(f, M, F),
				S = (M, F, ne) => {
					const te = [];
					for (let z = 0; z < sessionStorage.length; z++) {
						const N = sessionStorage.key(z);
						(N == null ? void 0 : N.startsWith(M)) && te.push(N)
					}
					te.length >= 5 && e.E.remove(te[0]);
					let re;
					return M === f && (re = w), e.E.set(`${M}${F}`, ne, re)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				g: function() {
					return o
				}
			});
			var e = t("../../../common/util/types/src/api/phases/fields.tsx");
			const o = {
				[e.df.HttpRequestFirewallCustom]: {
					HEADING: "account.custom_rulesets.tab.deployed_rulesets",
					DESCRIPTION: "account.custom_rulesets.tab.deployed_rulesets.description",
					DOC_LINK: null,
					DOC_DESCRIPTION: "account.custom_rulesets",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/custom-rulesets/create-dashboard/",
					DOC_RULESET_LINK: "https://developers.cloudflare.com/ruleset-engine/custom-rulesets/add-rules-ruleset/",
					DOC_RULES_LINK: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/",
					DOC_RULES_LABEL: "account.custom_rulesets.rule",
					DEPLOY_BUTTON: "account.custom_rulesets.create_rule",
					RULESETS_HEADING: "account.custom_rulesets.tab.your_rulesets",
					RULESETS_DESCRIPTION: "account.custom_rulesets.tab.your_rulesets.description",
					BACK_TO_HOME: "account.custom_rulesets.back_to_rulesets",
					DEPLOY_TITLE: "account.custom_rulesets.create_rule",
					EDIT_RULESET: "account.custom_rulesets.edit_custom_ruleset",
					CREATE_RULESET: "account.custom_rulesets.create_custom_ruleset"
				},
				[e.df.HttpRateLimit]: {
					HEADING: "account.rate_limiting.tab.rate_limiting.title",
					DESCRIPTION: "account.rate_limiting.tab.rate_limiting.description",
					DOC_LINK: null,
					DOC_DESCRIPTION: "account.rate_limiting.rate.rule",
					DOC_RULESET_LINK: "https://developers.cloudflare.com/waf/rate-limiting-rules/create-account-dashboard/#1-create-a-custom-rate-limiting-ruleset",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/rate-limiting-rules/create-account-dashboard/",
					RULESETS_HEADING: "account.rate_limiting.tab.your_rulesets.title",
					RULESETS_DESCRIPTION: "account.rate_limiting.tab.your_rulesets.description",
					BACK_TO_HOME: "account.custom_rulesets.back_to_rulesets",
					DEPLOY_TITLE: "account.rate_limiting_rulesets.create_rule",
					EDIT_RULESET: "account.rate_limiting.edit_custom_ruleset",
					CREATE_RULESET: "account.rate_limiting.create_custom_ruleset"
				},
				[e.df.HttpRequestFirewallManaged]: {
					HEADING: "account.managed_rulesets.tab.deployed_rulesets",
					DESCRIPTION: "account.managed_rulesets.card_description",
					DOC_LINK: null,
					DOC_LINK_CREATE: null,
					DOC_DESCRIPTION: "account.managed_rulesets",
					RULESETS_HEADING: null,
					RULESETS_DESCRIPTION: null,
					BACK_TO_HOME: "account.custom_rulesets.back_to_rulesets",
					DEPLOY_TITLE: "",
					EDIT_RULESET: "",
					CREATE_RULESET: "",
					DEPLOY_RULESET_DOC_LINK: "https://developers.cloudflare.com/waf/managed-rules/deploy-account-dashboard/",
					DEPLOY_RULESET_DOC_DESCRIPTION: "account.managed_rulesets.create_rule.doc_description",
					EXCEPTION_DOC_LINK: "https://developers.cloudflare.com/waf/managed-rules/waf-exceptions/define-dashboard/",
					EXCEPTION_DOC_DESCRIPTION: "account.managed_rulesets.skip.form.doc_description"
				}
			}
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				KO: function() {
					return c
				},
				L9: function() {
					return n
				},
				N3: function() {
					return _
				},
				zE: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(r) {
				for (var i = 1; i < arguments.length; i++) {
					var g = arguments[i] != null ? Object(arguments[i]) : {},
						m = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(g).filter(function(p) {
						return Object.getOwnPropertyDescriptor(g, p).enumerable
					})), m.forEach(function(p) {
						d(r, p, g[p])
					})
				}
				return r
			}

			function d(r, i, g) {
				return i = a(i), i in r ? Object.defineProperty(r, i, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = g, r
			}

			function a(r) {
				var i = v(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function v(r, i) {
				if (typeof r != "object" || r === null) return r;
				var g = r[Symbol.toPrimitive];
				if (g !== void 0) {
					var m = g.call(r, i || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			let c = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.SEARCH_CONFIGS = "search hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.UPDATE_ORIGIN_CONN_LIM_SETTINGS = "update hyperdrive config origin connection limit settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r.CLICK_DISCORD = "click hyperdrive discord", r.CLICK_COMMUNITY = "click hyperdrive community", r
				}({}),
				u = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				_ = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const n = (r, i = {}) => {
				o().sendEvent(r, s({}, i, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/routes.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				KJ: function() {
					return k
				},
				_m: function() {
					return O
				},
				imagesEndpoints: function() {
					return se
				},
				vQ: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function o(Ce) {
				for (var Ae = 1; Ae < arguments.length; Ae++) {
					var xe = arguments[Ae] != null ? Object(arguments[Ae]) : {},
						$e = Object.keys(xe);
					typeof Object.getOwnPropertySymbols == "function" && $e.push.apply($e, Object.getOwnPropertySymbols(xe).filter(function(Le) {
						return Object.getOwnPropertyDescriptor(xe, Le).enumerable
					})), $e.forEach(function(Le) {
						s(Ce, Le, xe[Le])
					})
				}
				return Ce
			}

			function s(Ce, Ae, xe) {
				return Ae = d(Ae), Ae in Ce ? Object.defineProperty(Ce, Ae, {
					value: xe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Ce[Ae] = xe, Ce
			}

			function d(Ce) {
				var Ae = a(Ce, "string");
				return typeof Ae == "symbol" ? Ae : String(Ae)
			}

			function a(Ce, Ae) {
				if (typeof Ce != "object" || Ce === null) return Ce;
				var xe = Ce[Symbol.toPrimitive];
				if (xe !== void 0) {
					var $e = xe.call(Ce, Ae || "default");
					if (typeof $e != "object") return $e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Ae === "string" ? String : Number)(Ce)
			}
			const v = (0, e.BC)`/${"accountId"}/images`,
				c = (0, e.BC)`${v}/images`,
				u = (0, e.BC)`${v}/variants`,
				_ = (0, e.BC)`${v}/keys`,
				n = (0, e.BC)`${v}/bundle-checkout-success`,
				r = (0, e.BC)`${c}/${"imageId"}`,
				i = (0, e.BC)`${c}/detail`,
				g = (0, e.BC)`${c}/edit`,
				m = (0, e.BC)`${u}/create`,
				p = (0, e.BC)`${u}/edit/${"variantId"}`,
				b = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				O = (0, e.BC)`${v}/sourcing-kit`,
				h = (0, e.BC)`${v}/delivery-zones`,
				l = (0, e.BC)`${h}/${"zoneId"}/settings`,
				C = (0, e.BC)`${v}/plans`,
				f = (0, e.BC)`${v}/manage-plan`,
				w = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				k = {
					root: v,
					images: c,
					variants: u,
					keys: _,
					legacyImageDetailPage: r,
					imageDetailPage: i,
					imageEditPage: g,
					bundleCheckoutSuccess: n,
					variantCreatePage: m,
					variantEditPage: p,
					sourcingKit: O,
					subscriptions: b,
					deliveryZones: h,
					deliveryZoneSettings: l,
					plansPage: C,
					managePlan: f
				},
				A = o({}, k, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: w
				}),
				I = (0, e.BC)`/accounts/${"accountId"}`,
				D = (0, e.BC)`${I}/images/v2`,
				y = (0, e.BC)`/zones/${"zoneId"}`,
				P = (0, e.BC)`${D}/sourcingkit`,
				S = (0, e.BC)`${P}/migrations`,
				M = (0, e.BC)`${P}/migrations/${"migrationId"}`,
				F = (0, e.BC)`${P}/migrations/${"migrationId"}/logs`,
				ne = (0, e.BC)`${P}/migrations/${"migrationId"}/lifecycle/start`,
				te = (0, e.BC)`${P}/migrations/${"migrationId"}/lifecycle/abort`,
				re = (0, e.BC)`${P}/migrations/${"migrationId"}/lifecycle`,
				z = (0, e.BC)`${P}/sources`,
				N = (0, e.BC)`${P}/sources/${"sourceId"}`,
				R = (0, e.BC)`${P}/sources/${"sourceId"}/connectivity`,
				K = (0, e.BC)`${P}/sources/connectivity_precheck`,
				U = (0, e.BC)`/zones?account.id=${"accountId"}`,
				G = {
					migrationList: S,
					migration: M,
					migrationLogs: F,
					sourceList: z,
					migrationStart: ne,
					migrationAbort: te,
					migrationProgress: re,
					source: N,
					sourceConnectivityCheck: R,
					sourceConnectivityPreCheck: K
				},
				H = (0, e.BC)`/billing/upgrade-subscription`,
				Z = (0, e.BC)`${I}/settings/transformations`,
				$ = (0, e.BC)`${y}/settings/transformations`,
				J = (0, e.BC)`${y}/settings/transformations_allowed_origins`,
				L = (0, e.BC)`${y}/settings/transformations_c2pa`,
				W = (0, e.BC)`${I}/settings/ut-billing`,
				X = (0, e.BC)`${y}`,
				ie = (0, e.BC)`${y}/entitlements`,
				V = (0, e.BC)`${y}/settings`,
				oe = (0, e.BC)`${y}/flags`,
				ge = (0, e.BC)`${y}/subscription`,
				se = {
					sourcingKitEndpoints: G,
					deliveryZonesEndpoints: {
						transformationsConfigList: Z,
						transformationsZoneConfig: $,
						allowedOriginsZoneConfig: J,
						preserveContentCredentialsZoneConfig: L,
						upgradeSubscription: H,
						utBillingConfig: W
					},
					zones: {
						zones: U,
						zoneDetail: X,
						zoneSettings: V,
						zoneEntitlements: ie,
						zoneFlags: oe,
						zoneSubscription: ge
					}
				}
		},
		"../react/pages/images/selectors.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$4: function() {
					return d
				},
				GH: function() {
					return i
				},
				JZ: function() {
					return m
				},
				aR: function() {
					return n
				},
				db: function() {
					return v
				},
				ib: function() {
					return p
				},
				lW: function() {
					return O
				},
				pT: function() {
					return r
				},
				po: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts");
			const d = "sourcing_kit_enabled",
				a = "sourcing_kit_waitlist",
				v = "images",
				c = "unified_images_enabled",
				u = "c2pa_polish",
				_ = "CloudflareImages",
				n = h => !!(0, o.BF)(h, "images.transformations_enabled"),
				r = h => Boolean((0, o.BF)(h, "images.enabled")),
				i = h => {
					const l = (0, o.BF)(h, "images.storage");
					return typeof l == "number" && l > 0
				},
				g = h => Boolean((0, o.BF)(h, "contract.customer_enabled")),
				m = h => Boolean((0, e.oI)(h, v, d)),
				p = h => Boolean((0, s.Le)(h, _, d)),
				b = h => Boolean(getAccountFlipperFlag(h, _, c)),
				O = h => Boolean((0, s.Le)(h, _, u))
		},
		"../react/pages/internal-dns/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				jx: function() {
					return e
				},
				xk: function() {
					return a
				},
				xo: function() {
					return v
				},
				yt: function() {
					return d
				},
				z7: function() {
					return s
				}
			});
			const e = "internal",
				o = {
					ADD: "add",
					IMPORT: "import"
				},
				s = {
					OVERVIEW_PAGE: "internal-dns-overview-page",
					INTERNAL_ZONES_PAGE: "internal-dns-internal-zones-page",
					INTERNAL_ZONE_DETAIL_PAGE: "internal-dns-internal-zone-detail-page",
					VIEWS_PAGE: "internal-dns-views-page",
					VIEWS_TABLE: "internal-dns-views-table",
					VIEWS_TABLE_ROW: "internal-dns-views-table-row",
					VIEW_DETAIL_PAGE: "view-detail-page",
					VIEW_DETAIL_LINKED_ZONES_TABLE: "view-detail-linked-zones-table",
					VIEW_DETAIL_EDIT_NAME_BUTTON: "view-detail-edit-name-button",
					ADD_LINKED_VIEWS_PAGE: "internal-dns-add-linked-views-page",
					ADD_LINKED_ZONES_PAGE: "internal-dns-add-linked-zones-page",
					ADD_REFERENCE_PAGE: "internal-dns-add-reference-page",
					INTERNAL_ZONES_TABLE: "internal-zones-table",
					INTERNAL_ZONE_LINK_BUTTON: "internal-zone-link-button",
					RESOLVER_POLICY_TABLE: "resolver-policy-table",
					RECORDS_SELECTION_CONTROLS: "internal-dns-records-selection-controls",
					RECORD_FORM: "internal-dns-record-form",
					RECORD_FORM_CONTAINER: "internal-dns-record-form-container"
				},
				d = "bulk_internal_zones",
				a = "internal-dns",
				v = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_3V6auNfVdQDWthk"
		},
		"../react/pages/internal-dns/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				N3: function() {
					return _
				},
				Rl: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(r) {
				for (var i = 1; i < arguments.length; i++) {
					var g = arguments[i] != null ? Object(arguments[i]) : {},
						m = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(g).filter(function(p) {
						return Object.getOwnPropertyDescriptor(g, p).enumerable
					})), m.forEach(function(p) {
						d(r, p, g[p])
					})
				}
				return r
			}

			function d(r, i, g) {
				return i = a(i), i in r ? Object.defineProperty(r, i, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = g, r
			}

			function a(r) {
				var i = v(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function v(r, i) {
				if (typeof r != "object" || r === null) return r;
				var g = r[Symbol.toPrimitive];
				if (g !== void 0) {
					var m = g.call(r, i || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			const c = "user journey",
				u = "internal-dns";
			let _ = function(r) {
				return r.CLICK_GIVE_FEEDBACK = "click give feedback", r.CLICK_NAVIGATION_TAB = "click navigation tab", r.CLICK_CREATE_AN_INTERNAL_ZONE = "click create an internal zone", r.CLICK_SEARCH_BY_ZONE_NAME = "search by zone name", r.CLICK_CREATE_A_VIEW = "click create a view", r.CLICK_SEARCH_BY_RECORD_NAME = "search by record name", r.CLICK_SEARCH_BY_VIEW_NAME = "search by view name", r.CLICK_SAVE_VIEW = "click save view", r.CLICK_SAVE_ZONE = "click save zone", r.CLICK_ZONE_NAME = "click zone name", r.CLICK_ADD_A_RECORD = "click add a record", r.CLICK_ADD_RECORD_SAVE = "click add record save", r.CLICK_RECORD_EDIT = "click record edit", r.CLICK_EDIT_RECORD_SAVE = "click edit record save", r.CLICK_IMPORT_RECORDS = "click import records", r.CLICK_MANAGE_LINKED_VIEWS = "click manage linked views", r.CLICK_SAVE_MANAGE_LINKED_VIEWS = "click save manage linked views", r.CLICK_VIEW_RECORD = "click view record", r
			}({});
			const n = (r, i = {}) => {
				o().sendEvent(r, s({
					category: c,
					product: u
				}, i))
			}
		},
		"../react/pages/magic/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				GF: function() {
					return g
				},
				H3: function() {
					return c
				},
				H8: function() {
					return a
				},
				J: function() {
					return p
				},
				Nz: function() {
					return u
				},
				Up: function() {
					return d
				},
				W8: function() {
					return _
				},
				Ws: function() {
					return h
				},
				Xg: function() {
					return r
				},
				Y_: function() {
					return i
				},
				_j: function() {
					return s
				},
				a4: function() {
					return m
				},
				jS: function() {
					return b
				},
				rF: function() {
					return v
				},
				rG: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/utils/translator.tsx");
			const s = {
					homeUrl: (0, e.BC)`/${"accountId"}/${"productName"}`,
					tunnelHealthchecks: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks`,
					alertNotifications: (0, e.BC)`/${"accountId"}/notifications`,
					networkAnalytics: (0, e.BC)`/${"accountId"}/network-analytics/all-traffic`,
					ipPrefixes: (0, e.BC)`/${"accountId"}/ip-addresses/ip-prefixes`,
					configuration: (0, e.BC)`/${"accountId"}/${"productName"}/configuration`,
					configurationScoping: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/scoping`,
					subnetDetails: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/subnet-details`,
					subnetDetailsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/subnet-details/form`,
					tunnels: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels`,
					tunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/form`,
					createGreTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/gre-tunnels/create`,
					editGreTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/gre-tunnels/edit`,
					createIpsecTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/ipsec-tunnels/create`,
					editIpsecTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/ipsec-tunnels/edit`,
					interconnects: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects`,
					interconnectsCreateForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/create`,
					interconnectsEditForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/edit`,
					createInterconnectGREForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/create/gre`,
					createInterconnectMPLSForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/create/mpls`,
					staticRoutes: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/static-routes`,
					createStaticRoutesForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/static-routes/create`,
					editStaticRoutesForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/static-routes/edit`,
					magicWanAddressSpace: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/magic_wan_address_space`,
					connectors: (0, e.BC)`/${"accountId"}/magic-wan/configuration/connectors`,
					connectorVisibility: (0, e.BC)`/${"accountId"}/magic-networks/connections/appliances/magic-networking/mconn/visibility/${"connectorId"}/performance-analytics`,
					registrationConnector: (0, e.BC)`/${"accountId"}/magic-networks/connections/appliances/magic-networking/mconn/registration`,
					editConnector: (0, e.BC)`/${"accountId"}/magic-wan/configuration/connectors/edit`,
					magicFirewallRulesBase: (0, e.BC)`/${"accountId"}/network-security/magic_firewall`,
					pcapsHome: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures`,
					pcapsCaptures: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/captures`,
					pcapsCaptureCreate: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/captures/create-capture`,
					pcapsBuckets: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets`,
					pcapsBucketsCreate: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets/create-bucket`,
					simpleCaptureFormUrl: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets/create-bucket/sample`,
					fullCaptureFormUrl: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets/create-bucket/full`,
					networkMonitoring: (0, e.BC)`/${"accountId"}/network-monitoring`,
					networkMonitoringPackets: (0, e.BC)`/${"accountId"}/network-monitoring/packets`,
					networkMonitoringConfiguration: (0, e.BC)`/${"accountId"}/network-monitoring/configuration`,
					networkMonitoringViewConfiguration: (0, e.BC)`/${"accountId"}/network-monitoring/view-configuration`,
					networkMonitoringRules: (0, e.BC)`/${"accountId"}/network-monitoring/rules`,
					networkMonitoringRulesCreateForm: (0, e.BC)`/${"accountId"}/network-monitoring/rules/create`,
					networkMonitoringRulesEditForm: (0, e.BC)`/${"accountId"}/network-monitoring/rules/edit`,
					networkMonitoringOnboarding: (0, e.BC)`/${"accountId"}/network-monitoring/onboarding`,
					overview: (0, e.BC)`/${"accountId"}/magic-wan/overview`,
					overviewSiteDetail: (0, e.BC)`/${"accountId"}/magic-wan/overview/${"siteId"}`,
					sites: (0, e.BC)`/${"accountId"}/magic-wan/sites`,
					createSite: (0, e.BC)`/${"accountId"}/magic-wan/sites/create`,
					editSite: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit`,
					editSiteTabSite: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/site`,
					editSiteTabNetwork: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/network`,
					editSiteTabTunnels: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/tunnels`,
					editSiteTabRoutes: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/static-routes`,
					editSiteTabBreakOutAppsTabs: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/breakoutapps`,
					policiesLan: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/policies`,
					quickSearchIpPrefixesUrl: (0, e.BC)`/configuration/subnet-details`,
					quickSearchTunnels: (0, e.BC)`/configuration/tunnels`,
					quickSearchInterconnects: (0, e.BC)`/configuration/interconnects`,
					quickSearchStaticRoutes: (0, e.BC)`/configuration/static-routes`,
					quickSearchWanAddressSpace: (0, e.BC)`/configuration/magic_wan_address_space`,
					quickSearchCaptures: "/packet-captures/captures",
					quickSearchBuckets: "/packet-captures/buckets",
					quickSearchNetworkMonitoringRules: "/rules",
					quickSearchNetworkMonitoringViewConfiguration: "/view-configuration",
					quickSearchConnectors: (0, e.BC)`/configuration/connectors`,
					quickSearchSitesTabSite: "/site",
					quickSearchSitesTabNetwork: "/network",
					quickSearchSitesTabTunnels: "/tunnels",
					quickSearchSitesTabStaticRoutes: "/static-routes",
					quickSearchSitesTabBreakOutApps: "/breakoutapps",
					interconnectsTableAll: "/all",
					interconnectsTablePhysical: "/physical",
					interconnectsTableVirtual: "/virtual",
					interconnectsTableCloud: "/cloud",
					interconnectsAllRoute: (0, e.BC)`/${"accountId"}/${"productName"}/all`,
					interconnectsPhysicalRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical`,
					interconnectsVirtualRoute: (0, e.BC)`/${"accountId"}/${"productName"}/virtual`,
					interconnectsCloudRoute: (0, e.BC)`/${"accountId"}/${"productName"}/cloud`,
					interconnectsPhysicalCreateRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create`,
					interconnectsPhysicalCreateSpeedRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create/speed/${"slotId"}`,
					interconnectsPhysicalCreateConfirmRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create/confirm`,
					interconnectsPhysicalCreateDownloadRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create/download/${"cniId"}`,
					interconnectsConfigureBgpRoute: (0, e.BC)`/${"accountId"}/${"productName"}/${"cniId"}/bgp`,
					interconnectsCloudCreateRoute: (0, e.BC)`/${"accountId"}/${"productName"}/cloud/create`,
					interconnectsCloudGCPCreateRoute: (0, e.BC)`/${"accountId"}/${"productName"}/cloud/create/gcp`,
					tunnelHealthCheckTunnels: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels`,
					tunnelHealthCheckTunnelsList: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/list`,
					tunnelHealthCheckTunnelsHighlight: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight`,
					tunnelHealthCheckTunnelsHighlightDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight/${"tunnelId"}`,
					tunnelHealthCheckTunnelsDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/${"tunnelId"}`,
					asn: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/asn`,
					quickSearchAsn: (0, e.BC)`/configuration/asn`
				},
				d = () => [{
					value: "all",
					label: (0, o.ZP)("account.magic_transit.configuration.static_routes.all_regions")
				}, {
					value: "AFR",
					label: (0, o.ZP)("common.regions.africa")
				}, {
					value: "SAM",
					label: (0, o.ZP)("common.regions.south_america")
				}, {
					value: "APAC",
					label: (0, o.ZP)("common.regions.asia_pacific")
				}, {
					value: "WEUR",
					label: (0, o.ZP)("common.regions.western_europe")
				}, {
					value: "EEUR",
					label: (0, o.ZP)("common.regions.eastern_europe")
				}, {
					value: "WNAM",
					label: (0, o.ZP)("common.regions.western_north_america")
				}, {
					value: "ENAM",
					label: (0, o.ZP)("common.regions.eastern_north_america")
				}, {
					value: "ME",
					label: (0, o.ZP)("common.regions.middle_east")
				}, {
					value: "OC",
					label: (0, o.ZP)("common.regions.oceania")
				}],
				a = l => [{
					value: "low",
					label: l("setting.low")
				}, {
					value: "mid",
					label: l("setting.medium")
				}, {
					value: "high",
					label: l("setting.high")
				}],
				v = l => [{
					value: "request",
					label: l("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: l("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				c = l => [{
					value: "unidirectional",
					label: l("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: l("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				u = "magic-transit",
				_ = "magic-wan",
				n = "gre_tunnel",
				r = "ipsec_tunnel",
				i = "interconnect",
				g = 64,
				m = 1476,
				p = "mid",
				b = "reply",
				O = l => [{
					value: void 0,
					label: l("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: l("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: l("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				h = l => [{
					value: "all",
					label: l("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: l("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: l("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Yt: function() {
					return d
				},
				_u: function() {
					return o
				},
				bK: function() {
					return e
				},
				lC: function() {
					return s
				}
			});
			const e = {
					VIEW_RULES: "view rules list",
					CREATE_RULE: "create rule",
					UPDATE_RULE: "update rule",
					DELETE_RULE: "delete rule",
					VIEW_CONFIGURATION: "view configuration",
					CREATE_CONFIGURATION: "create configuration",
					UPDATE_CONFIGURATION: "update configuration",
					DELETE_CONFIGURATION: "delete configuration"
				},
				o = "Magic network monitoring",
				s = "user journey",
				d = 60
		},
		"../react/pages/magic/overview/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				VZ: function() {
					return d
				},
				lC: function() {
					return s
				},
				r8: function() {
					return o
				},
				uB: function() {
					return a
				}
			});
			var e = t("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				s = "user journey",
				d = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				a = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				W_: function() {
					return o
				},
				X: function() {
					return e
				},
				lC: function() {
					return s
				}
			});
			const e = {
					VIEW_BUCKETS_LIST: "view buckets list",
					CREATE_BUCKET: "create bucket",
					VALIDATE_BUCKET: "validate bucket",
					DELETE_BUCKET: "delete bucket",
					VIEW_CAPTURES_LIST: "view captures list",
					CREATE_SIMPLE_CAPTURE: "create simple capture",
					CREATE_FULL_CAPTURE: "create full capture",
					VIEW_FULL_CAPTURE: "view full capture",
					DOWNLOAD_SIMPLE_CAPTURE: "download simple capture"
				},
				o = "Magic packet captures",
				s = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				gb: function() {
					return n
				},
				iP: function() {
					return A
				},
				xL: function() {
					return h
				},
				rD: function() {
					return D
				},
				oT: function() {
					return m
				},
				i2: function() {
					return y
				},
				x1: function() {
					return v
				},
				lW: function() {
					return u
				},
				UA: function() {
					return w
				},
				K5: function() {
					return i
				},
				Ii: function() {
					return C
				},
				PJ: function() {
					return I
				},
				bK: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				s = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				d = t("../node_modules/@cloudflare/elements/es/index.js"),
				a = t("../../../../node_modules/react/jsx-runtime.js");
			const v = () => (0, a.jsx)(c, {
					children: (0, a.jsxs)("svg", {
						width: "94",
						height: "5",
						viewBox: "0 0 94 5",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, a.jsx)("path", {
							d: "M48.416 2.2002L1.99976 2.20021",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, a.jsx)("path", {
							d: "M66.3115 2.2002L59.3767 2.20019",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, a.jsx)("path", {
							d: "M78.7949 2.2002L76.021 2.20019",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, a.jsx)("path", {
							d: "M91.2773 2.2002L88.5034 2.20019",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						})]
					})
				}),
				c = (0, o.LM)(({
					theme: P
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "58px",
						left: "8%",
						right: "85%"
					}
				})),
				u = () => (0, a.jsx)(_, {
					children: (0, a.jsxs)("svg", {
						width: "211",
						height: "71",
						viewBox: "0 0 211 71",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, a.jsx)("circle", {
							cx: "175.5",
							cy: "35.5",
							r: "35.5",
							fill: "#044096"
						}), (0, a.jsx)("path", {
							d: "M48.7492 28L2.33298 28",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, a.jsx)("path", {
							d: "M66.6457 28L59.7109 28",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, a.jsx)("path", {
							d: "M79.1281 28L76.3542 28",
							stroke: "#6ECCE5",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, a.jsx)("path", {
							d: "M91.6106 28.0005L88.8366 28.0005",
							stroke: "#E2F5FA",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, a.jsx)("path", {
							d: "M164.092 28.2002L100.767 28.2002",
							stroke: "#6ECCE5",
							strokeWidth: "4",
							strokeLinecap: "square"
						})]
					})
				}),
				_ = (0, o.LM)(({
					theme: P
				}) => ({
					position: "absolute",
					top: "20px",
					left: "15%",
					right: "85%",
					desktop: {
						top: "45px",
						left: "22%",
						right: "78%"
					}
				})),
				n = () => (0, a.jsx)(r, {
					children: (0, a.jsx)(d.Ei, {
						alt: "airplane",
						src: s,
						width: "85%"
					})
				}),
				r = (0, o.LM)(({
					theme: P
				}) => ({
					position: "absolute",
					width: "90px",
					top: "90px",
					left: "65%",
					right: "35%",
					zIndex: "2",
					desktop: {
						width: "235px"
					}
				})),
				i = () => (0, a.jsx)(g, {
					children: (0, a.jsxs)("svg", {
						width: "104",
						height: "23",
						viewBox: "0 0 104 23",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, a.jsx)("path", {
							d: "M93.7248 0H90.2837V7.74245H93.7248V0Z",
							fill: "white"
						}), (0, a.jsx)("path", {
							d: "M103.187 9.4624H95.4448V12.9035H103.187V9.4624Z",
							fill: "white"
						}), (0, a.jsx)("path", {
							d: "M93.7248 14.6245H90.2837V22.367H93.7248V14.6245Z",
							fill: "white"
						}), (0, a.jsx)("path", {
							d: "M88.5632 9.4624H80.8208V12.9035H88.5632V9.4624Z",
							fill: "white"
						}), (0, a.jsx)("path", {
							d: "M36.0259 10.627L2.00024 10.627",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, a.jsx)("path", {
							d: "M56.8198 10.627L44.5328 10.627",
							stroke: "#6ECCE5",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, a.jsx)("path", {
							d: "M72.8872 10.627L65.326 10.627",
							stroke: "#C3E9F3",
							strokeWidth: "4",
							strokeLinecap: "square"
						})]
					})
				}),
				g = (0, o.LM)(({
					theme: P
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "130px",
						left: "88%",
						right: "12%"
					}
				})),
				m = () => (0, a.jsx)(p, {
					children: (0, a.jsx)("svg", {
						width: "13",
						height: "13",
						viewBox: "0 0 13 13",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: (0, a.jsx)("ellipse", {
							cx: "6.33672",
							cy: "6.34376",
							rx: "6.33672",
							ry: "6.34376",
							fill: "#086FFF"
						})
					})
				}),
				p = (0, o.LM)(({
					theme: P
				}) => ({
					position: "absolute",
					top: "90px",
					left: "20%",
					right: "80%",
					desktop: {
						top: "156px",
						left: "23%",
						right: "77%"
					}
				})),
				b = () => (0, a.jsx)(O, {
					children: (0, a.jsx)("svg", {
						width: "15",
						height: "15",
						viewBox: "0 0 15 15",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: (0, a.jsx)("path", {
							d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
							fill: "#6ECCE5"
						})
					})
				}),
				O = (0, o.LM)(({
					theme: P
				}) => ({
					position: "absolute",
					top: "38px",
					left: "83%",
					right: "17%",
					desktop: {
						top: "64px",
						left: "44%",
						right: "56%"
					}
				})),
				h = () => (0, a.jsx)(l, {
					children: (0, a.jsxs)("svg", {
						width: "22",
						height: "22",
						viewBox: "0 0 22 22",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, a.jsx)("path", {
							d: "M12.6922 0H9.30762V7.61541H12.6922V0Z",
							fill: "#C5EBF5"
						}), (0, a.jsx)("path", {
							d: "M22.0002 9.30762H14.3848V12.6922H22.0002V9.30762Z",
							fill: "#C5EBF5"
						}), (0, a.jsx)("path", {
							d: "M12.6922 14.3848H9.30762V22.0002H12.6922V14.3848Z",
							fill: "#C5EBF5"
						}), (0, a.jsx)("path", {
							d: "M7.61542 9.30762H0V12.6922H7.61542V9.30762Z",
							fill: "#C5EBF5"
						})]
					})
				}),
				l = (0, o.LM)(({
					theme: P
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "-25px",
						left: "30%",
						right: "70%"
					}
				})),
				C = () => (0, a.jsx)(f, {
					children: (0, a.jsxs)("svg", {
						width: "32",
						height: "32",
						viewBox: "0 0 32 32",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, a.jsx)("path", {
							d: "M18.0868 0H13.2637V10.852H18.0868V0Z",
							fill: "#FBAD41"
						}), (0, a.jsx)("path", {
							d: "M31.35 13.2637H20.498V18.0868H31.35V13.2637Z",
							fill: "#FBAD41"
						}), (0, a.jsx)("path", {
							d: "M18.0868 20.498H13.2637V31.35H18.0868V20.498Z",
							fill: "#FBAD41"
						}), (0, a.jsx)("path", {
							d: "M10.852 13.2637H0V18.0868H10.852V13.2637Z",
							fill: "#FBAD41"
						})]
					})
				}),
				f = (0, o.LM)(({
					theme: P
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "160px",
						left: "70%",
						right: "30%"
					}
				})),
				w = () => (0, a.jsx)(k, {
					children: (0, a.jsxs)("svg", {
						width: "48",
						height: "15",
						viewBox: "0 0 48 15",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, a.jsx)("path", {
							d: "M40.25 3.0781e-07L33.1902 7.05981L40.25 14.1196L47.3098 7.05981L40.25 3.0781e-07Z",
							fill: "#6ECCE5"
						}), (0, a.jsx)("path", {
							d: "M20.9031 6.61694L1.99994 6.61694",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						})]
					})
				}),
				k = (0, o.LM)(({
					theme: P
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "160px",
						left: "20%",
						right: "70%"
					}
				})),
				A = () => (0, a.jsxs)("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 40",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, a.jsx)("path", {
						d: "M12.4025 16.0001L10.265 13.8927L8.015 16.1427C8.86952 12.6096 10.8668 9.45753 13.6967 7.17612C16.5265 4.8947 20.0305 3.6116 23.6645 3.52609C27.2984 3.44059 30.8589 4.55747 33.7929 6.70326C36.3879 8.60112 38.3644 11.2099 39.492 14.2014L40.339 13.9224L41.5646 13.5186L42.4174 13.2377C41.0751 9.5683 38.6567 6.37586 35.4641 4.08759C31.9041 1.53603 27.5888 0.257281 23.2134 0.457383C18.838 0.657484 14.6574 2.32478 11.3452 5.19063C8.03295 8.05648 5.78199 11.954 4.955 16.2551L2.63 13.9151L0.5 16.0001L6.5 22.0001L12.4025 16.0001Z",
						fill: "#C5EBF5"
					}), (0, a.jsx)("path", {
						d: "M47.5646 24.0049L41.5646 18.0049L35.6471 24.0049L37.7846 26.1124L40.0346 23.8624C39.1898 27.4009 37.1992 30.561 34.3725 32.851C31.5458 35.1411 28.0415 36.4328 24.4048 36.5252C20.768 36.6176 17.2027 35.5055 14.2634 33.3619C11.5162 31.3585 9.45991 28.559 8.36721 25.3515L7.54721 25.6183L6.37385 26.0001L5.5 26.2845C6.79997 30.1536 9.28442 33.5247 12.6114 35.9135C16.1663 38.4659 20.4765 39.7483 24.8486 39.5544C29.2206 39.3605 33.4003 37.7015 36.7153 34.8443C40.0303 31.9872 42.2878 28.098 43.1246 23.8024L45.4346 26.1199L47.5646 24.0049Z",
						fill: "#C5EBF5"
					})]
				}),
				I = () => (0, a.jsxs)("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 39 41",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, a.jsx)("path", {
						d: "M31.1271 6.20742L32.7396 3.67992C25.4571 -1.00008 13.5396 -1.00008 6.17465 3.67992L7.74965 6.21492C14.2521 2.11242 24.7221 2.11242 31.1271 6.20742Z",
						fill: "#C5EBF5"
					}), (0, a.jsx)("path", {
						d: "M19.3896 4.67742C15.6941 4.70925 12.0606 5.63105 8.79679 7.36478C5.533 9.09851 2.73499 11.5931 0.639648 14.6374L3.16715 16.2499C5.00538 13.6448 7.43278 11.5105 10.2518 10.0209C13.0708 8.53125 16.2017 7.7283 19.3896 7.67742C28.3896 7.67742 34.1496 13.2724 35.9496 16.2274L38.4996 14.6749C36.4146 11.2174 29.7171 4.67742 19.3896 4.67742Z",
						fill: "#C5EBF5"
					}), (0, a.jsx)("path", {
						d: "M19.3971 9.31242C13.4646 9.31242 8.46965 11.8849 5.34215 16.5574C3.6804 19.123 2.6668 22.0539 2.38852 25.0979C2.11024 28.142 2.57563 31.2081 3.74465 34.0324L6.51965 32.8924C5.53401 30.5237 5.1385 27.951 5.36713 25.3956C5.59576 22.8402 6.44168 20.3786 7.83215 18.2224C9.10397 16.3409 10.8316 14.8121 12.8539 13.7787C14.8762 12.7453 17.1272 12.2408 19.3971 12.3124C29.8296 12.3124 32.6421 20.8699 32.8446 24.1699C33.0771 28.0399 30.8646 28.4974 30.4446 28.5424L30.2046 28.5874C29.0973 28.8301 27.9393 28.6509 26.9571 28.0849C26.1096 27.4924 25.5846 26.4049 25.4046 24.8599C24.9171 20.6224 21.6546 18.8599 18.8796 19.0249C15.8271 19.2049 12.5421 21.6724 12.5421 26.6824C12.5421 33.9049 19.1721 39.7174 25.2921 40.9324L25.8921 37.9924C21.5646 37.1449 15.5421 32.7499 15.5421 26.6824C15.5421 23.5999 17.3046 22.1224 19.0521 22.0249C20.4246 21.9424 22.1421 22.7299 22.4271 25.2049C22.7121 27.6799 23.6721 29.4649 25.2771 30.5674C26.9271 31.5879 28.9083 31.9293 30.8046 31.5199C32.7547 31.3024 36.1746 29.4799 35.8372 24.0199C35.5896 19.9024 32.1471 9.31242 19.3971 9.31242Z",
						fill: "#C5EBF5"
					}), (0, a.jsx)("path", {
						d: "M11.0346 23.1199C12.2496 19.2499 15.0771 16.9474 18.6471 16.9474C27.0396 16.9474 27.6921 24.1774 27.6921 26.3899H30.6921C30.6921 20.6524 27.5421 13.9474 18.6471 13.9474C13.7646 13.9474 9.75215 17.1274 8.14715 22.1974C7.17854 25.4217 7.25631 28.8699 8.3693 32.0471C9.4823 35.2244 11.5733 37.9674 14.3421 39.8824L16.0296 37.3999C13.7995 35.8488 12.116 33.6332 11.2191 31.069C10.3222 28.5048 10.2576 25.7229 11.0346 23.1199Z",
						fill: "#C5EBF5"
					}), (0, a.jsx)("path", {
						d: "M22.9371 31.3399C22.1161 30.5273 21.4749 29.5512 21.055 28.475C20.6351 27.3988 20.4459 26.2464 20.4996 25.0924H17.4996C17.4514 26.6502 17.7256 28.2012 18.3051 29.648C18.8846 31.0948 19.7568 32.4062 20.8671 33.4999C23.4992 35.8335 26.9209 37.0778 30.4371 36.9799C30.7071 36.9799 30.9846 36.9799 31.2546 36.9799L31.1121 33.9799C27.8421 34.1299 24.8571 33.1699 22.9371 31.3399Z",
						fill: "#C5EBF5"
					})]
				}),
				D = () => (0, a.jsxs)("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 28",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, a.jsx)("path", {
						d: "M24.0165 14.6841C25.4257 14.6841 26.8032 14.2662 27.9749 13.4833C29.1466 12.7004 30.0598 11.5876 30.5991 10.2857C31.1384 8.98378 31.2795 7.55118 31.0046 6.16907C30.7296 4.78695 30.051 3.5174 29.0546 2.52095C28.0581 1.5245 26.7886 0.84591 25.4065 0.57099C24.0244 0.29607 22.5918 0.437169 21.2898 0.976444C19.9879 1.51572 18.8751 2.42895 18.0922 3.60065C17.3093 4.77235 16.8915 6.14989 16.8915 7.55908C16.893 9.44827 17.6442 11.2596 18.9801 12.5955C20.3159 13.9313 22.1273 14.6825 24.0165 14.6841ZM24.0165 3.43783C24.8323 3.43783 25.6298 3.67976 26.3082 4.13302C26.9865 4.58628 27.5153 5.23052 27.8275 5.98427C28.1397 6.73801 28.2214 7.56741 28.0622 8.36758C27.903 9.16775 27.5102 9.90276 26.9333 10.4796C26.3564 11.0565 25.6214 11.4494 24.8212 11.6086C24.021 11.7677 23.1916 11.686 22.4379 11.3738C21.6841 11.0616 21.0399 10.5329 20.5866 9.85456C20.1334 9.17621 19.8915 8.37868 19.8915 7.56283C19.8915 6.46882 20.3261 5.41961 21.0996 4.64602C21.8732 3.87243 22.9224 3.43783 24.0165 3.43783Z",
						fill: "#C5EBF5"
					}), (0, a.jsx)("path", {
						d: "M9.03896 17.7928C10.0773 17.7928 11.0923 17.4849 11.9557 16.9081C12.8191 16.3312 13.492 15.5112 13.8893 14.5519C14.2867 13.5926 14.3907 12.537 14.1881 11.5186C13.9855 10.5002 13.4855 9.56475 12.7513 8.83052C12.017 8.0963 11.0816 7.59628 10.0632 7.39371C9.04478 7.19114 7.98918 7.29511 7.02987 7.69247C6.07056 8.08983 5.25062 8.76273 4.67374 9.62609C4.09687 10.4894 3.78896 11.5045 3.78896 12.5428C3.79035 13.9348 4.34392 15.2693 5.32818 16.2536C6.31245 17.2379 7.647 17.7914 9.03896 17.7928ZM9.03896 10.2928C9.48397 10.2928 9.91898 10.4248 10.289 10.672C10.659 10.9193 10.9474 11.2707 11.1177 11.6818C11.288 12.0929 11.3325 12.5453 11.2457 12.9818C11.1589 13.4182 10.9446 13.8192 10.63 14.1338C10.3153 14.4485 9.91437 14.6628 9.47791 14.7496C9.04146 14.8364 8.58906 14.7919 8.17792 14.6216C7.76679 14.4513 7.41539 14.1629 7.16815 13.7929C6.92092 13.4229 6.78896 12.9878 6.78896 12.5428C6.78956 11.9465 7.02687 11.3748 7.44876 10.9533C7.87066 10.5318 8.44261 10.2951 9.03896 10.2951V10.2928Z",
						fill: "#C5EBF5"
					}), (0, a.jsx)("path", {
						d: "M40.5112 18.5751H37.4865C36.3725 18.5741 35.2726 18.8238 34.2682 19.3056C33.2866 18.1392 32.0619 17.2014 30.6798 16.5581C29.2977 15.9147 27.7917 15.5813 26.2672 15.5811H21.7327C20.2109 15.5814 18.7076 15.9137 17.3275 16.5549C15.9474 17.1961 14.7238 18.1308 13.7422 19.2936C12.7413 18.8193 11.6473 18.5739 10.5397 18.5751H7.51571C5.5307 18.5773 3.62759 19.3667 2.22384 20.7701C0.820079 22.1736 0.0302906 24.0766 0.02771 26.0616L1.52771 27.5616H46.5L48 26.0616C47.9976 24.0764 47.2077 22.1732 45.8038 20.7697C44.3998 19.3661 42.4964 18.5769 40.5112 18.5751ZM7.51571 21.5751H10.5397C11.083 21.5778 11.6213 21.6794 12.1282 21.8751C11.7558 22.7322 11.5008 23.6356 11.37 24.5608H3.28571C3.59698 23.6878 4.17049 22.9323 4.92771 22.3978C5.68493 21.8634 6.58885 21.576 7.51571 21.5751ZM14.4007 24.5623C14.7489 22.8744 15.6681 21.358 17.0036 20.2685C18.3391 19.1791 20.0092 18.5831 21.7327 18.5811H26.2672C27.9907 18.5829 29.6609 19.1787 30.9966 20.268C32.3322 21.3573 33.2516 22.8736 33.6 24.5616L14.4007 24.5623ZM36.63 24.5623C36.4999 23.6397 36.2462 22.7389 35.8755 21.8841C36.3887 21.6824 36.935 21.5776 37.4865 21.5751H40.5112C41.4382 21.576 42.3422 21.8636 43.0993 22.3984C43.8564 22.9332 44.4297 23.689 44.7405 24.5623H36.63Z",
						fill: "#C5EBF5"
					}), (0, a.jsx)("path", {
						d: "M39.0105 17.7928C40.0488 17.7928 41.0638 17.4849 41.9272 16.9081C42.7906 16.3312 43.4635 15.5112 43.8608 14.5519C44.2582 13.5926 44.3622 12.537 44.1596 11.5186C43.957 10.5002 43.457 9.56475 42.7228 8.83052C41.9885 8.0963 41.0531 7.59628 40.0347 7.39371C39.0163 7.19114 37.9607 7.29511 37.0014 7.69247C36.0421 8.08983 35.2221 8.76273 34.6452 9.62609C34.0684 10.4894 33.7605 11.5045 33.7605 12.5428C33.7619 13.9348 34.3154 15.2693 35.2997 16.2536C36.284 17.2379 37.6185 17.7914 39.0105 17.7928ZM39.0105 10.2928C39.4555 10.2928 39.8905 10.4248 40.2605 10.672C40.6305 10.9193 40.9189 11.2707 41.0892 11.6818C41.2595 12.0929 41.304 12.5453 41.2172 12.9818C41.1304 13.4182 40.9161 13.8192 40.6014 14.1338C40.2868 14.4485 39.8859 14.6628 39.4494 14.7496C39.013 14.8364 38.5606 14.7919 38.1494 14.6216C37.7383 14.4513 37.3869 14.1629 37.1397 13.7929C36.8924 13.4229 36.7605 12.9878 36.7605 12.5428C36.7611 11.9465 36.9984 11.3748 37.4203 10.9533C37.8422 10.5318 38.4141 10.2951 39.0105 10.2951V10.2928Z",
						fill: "#C5EBF5"
					})]
				}),
				y = () => (0, a.jsxs)("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 40 46",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, a.jsx)("path", {
						d: "M26.4256 15.404C26.4243 15.3512 26.4193 15.2986 26.4106 15.2465C26.4031 15.1415 26.3956 15.0365 26.3806 14.939C26.38 14.9109 26.3749 14.8831 26.3656 14.8565C26.3665 14.8288 26.364 14.8011 26.3581 14.774C26.2831 13.9865 26.1781 13.214 26.0731 12.4715C26.0656 12.4715 26.0506 12.479 26.0506 12.4865C25.1206 12.839 24.1756 13.244 23.2081 13.6865C23.2606 14.084 23.3131 14.504 23.3581 14.9315L23.3656 14.939C23.388 15.0806 23.403 15.2233 23.4106 15.3665C23.4406 15.6065 23.4631 15.8465 23.4856 16.094C23.4931 16.214 23.5156 16.334 23.5156 16.4615C23.5156 16.589 23.5381 16.7165 23.5456 16.8365L23.5606 16.829C24.5581 16.349 25.5256 15.929 26.4406 15.5615H26.4481C26.4406 15.509 26.4331 15.464 26.4256 15.404ZM22.0531 16.3565C21.8356 16.229 21.6181 16.109 21.3931 15.9965C20.9731 15.764 20.5531 15.539 20.1256 15.329C20.0814 15.2982 20.0335 15.273 19.9831 15.254C19.9831 15.239 19.9831 15.239 19.9756 15.2465C18.9181 15.794 17.8581 16.3765 16.7956 16.994H16.7656C16.7131 17.0315 16.6531 17.0615 16.5931 17.099C16.5331 17.1365 16.4656 17.174 16.4131 17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856C12.2581 19.784 11.2756 20.444 10.3381 21.1115C9.46812 21.734 8.63562 22.3565 7.86312 22.9865C6.68838 23.9077 5.56424 24.8916 4.49562 25.934C1.00812 29.354 -0.199384 32.0765 0.918116 34.0115H0.925616C2.03562 35.939 4.99062 36.2465 9.70061 34.9415C10.4806 34.724 11.2981 34.469 12.1456 34.169C11.9956 33.1865 11.8606 32.1815 11.7481 31.124C7.11312 32.8115 4.08312 33.104 3.52062 32.519C3.49539 32.0868 3.62281 31.6594 3.88062 31.3115C4.70562 29.894 6.85062 27.5615 10.3306 24.854C10.6606 24.6065 10.9831 24.3515 11.3356 24.104C11.4481 24.014 11.5681 23.9315 11.6881 23.849C11.8831 23.7065 12.0781 23.564 12.2806 23.4215C12.3856 23.3465 12.4981 23.264 12.6106 23.1815C12.7006 23.114 12.7981 23.0465 12.8881 22.979C12.9931 22.904 13.0981 22.8365 13.1956 22.7615L13.2031 22.769C14.1331 22.124 15.1456 21.464 16.2181 20.804C16.8181 20.444 17.4481 20.069 18.0931 19.694C18.7381 19.319 19.3681 18.974 19.9831 18.6365C21.0931 18.0365 22.1731 17.4965 23.2006 16.994C22.8181 16.775 22.4356 16.5665 22.0531 16.3565ZM16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C15.4306 29.624 14.4706 30.0515 13.5556 30.419C13.5516 30.4231 13.5463 30.4257 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C13.9306 33.509 13.9306 33.5015 13.9456 33.5015C14.8681 33.1415 15.8131 32.7365 16.7806 32.2865C16.7356 31.889 16.6756 31.475 16.6306 31.049ZM39.0781 11.975H39.0706C37.9606 10.04 34.9981 9.72502 30.2881 11.03C29.5081 11.2475 28.6981 11.5025 27.8506 11.8025V11.8175C28.0006 12.7925 28.1356 13.805 28.2481 14.855C32.8531 13.1825 35.8756 12.8975 36.4756 13.475C36.7006 14.39 34.4431 17.405 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006C27.0031 23.06 26.8981 23.1275 26.7931 23.2025C25.8631 23.8475 24.8506 24.5 23.7706 25.175C23.1706 25.5425 22.5481 25.91 21.9031 26.285C21.2581 26.66 20.6206 27.005 20.0056 27.3425C18.8881 27.9425 17.8156 28.4975 16.7881 28.985C17.1631 29.2025 17.5381 29.4125 17.9131 29.615C18.0781 29.7125 18.2431 29.8025 18.4081 29.885C18.4883 29.9342 18.5709 29.9793 18.6556 30.02C19.0381 30.23 19.4206 30.4325 19.7956 30.6275C19.8631 30.665 19.9306 30.695 19.9981 30.725L20.0056 30.7325C21.0631 30.1925 22.1281 29.6 23.2006 28.9925L23.2156 28.985L23.2231 28.9775L23.5831 28.7675V28.76L23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1856 27.1925 26.4031 27.0575 26.6131 26.915L26.6956 26.855H26.7031C26.7707 26.8195 26.8359 26.7794 26.8981 26.735C27.3331 26.4575 27.7531 26.1725 28.1731 25.8875C28.3006 25.805 28.4281 25.715 28.5556 25.625C28.8031 25.46 29.0431 25.295 29.2831 25.1225C29.3956 25.0475 29.5006 24.965 29.6131 24.89L29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23C33.3003 22.0761 34.4244 21.0897 35.4931 20.045C36.6912 18.9223 37.7357 17.6463 38.5996 16.25C39.0383 15.5378 39.329 14.7445 39.4546 13.9175C39.5395 13.2464 39.4076 12.5658 39.0781 11.975Z",
						fill: "#C5EBF5"
					}), (0, a.jsx)("path", {
						d: "M26.7931 22.784V22.775C26.7931 22.34 26.7856 21.9125 26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13V19.115C26.6956 19.04 26.6956 18.965 26.6881 18.89C26.6868 18.8198 26.6818 18.7497 26.6731 18.68C26.6656 18.545 26.6581 18.41 26.6581 18.275C26.6281 17.795 26.5981 17.33 26.5606 16.865C26.5531 16.775 26.5456 16.685 26.5381 16.6025C26.5156 16.3475 26.4931 16.1075 26.4706 15.86L26.4481 15.6125C26.442 15.5983 26.4394 15.5829 26.4406 15.5675L26.4481 15.56C26.4406 15.5075 26.4331 15.4625 26.4256 15.4025C26.4243 15.3497 26.4193 15.2971 26.4106 15.245C26.4031 15.14 26.3956 15.035 26.3806 14.9375C26.3799 14.9094 26.3749 14.8816 26.3656 14.855C26.3665 14.8273 26.364 14.7996 26.3581 14.7725C26.2831 13.985 26.1781 13.2125 26.0731 12.47C25.8559 10.9959 25.5631 9.534 25.1956 8.09002C23.9731 3.35752 22.2256 0.95752 19.9981 0.95752C17.7706 0.95752 16.0156 3.36502 14.7931 8.09752C14.5906 8.88502 14.4106 9.71752 14.2381 10.6025C15.1681 10.9625 16.1131 11.3525 17.0806 11.78C17.4032 9.38634 18.0991 7.05805 19.1431 4.88002C19.4581 4.34002 19.7506 4.03252 19.9981 3.96502C20.9056 4.22002 22.3831 7.68502 23.2081 13.685C23.2606 14.0825 23.3131 14.5025 23.3581 14.93L23.3656 14.9375C23.388 15.0791 23.403 15.2218 23.4106 15.365C23.4406 15.605 23.4631 15.845 23.4856 16.0925C23.4931 16.2125 23.5156 16.3325 23.5156 16.46C23.5156 16.5875 23.5381 16.715 23.5456 16.835C23.5531 16.955 23.5681 17.0825 23.5831 17.21V17.2175C23.6731 18.3575 23.7406 19.5575 23.7706 20.825C23.7856 21.53 23.8006 22.25 23.8006 22.9925C23.8006 23.735 23.7931 24.4625 23.7706 25.175C23.7331 26.435 23.6806 27.6275 23.5831 28.76V28.7675C23.6506 28.73 23.7181 28.685 23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1481 27.215 26.3356 27.1025 26.5081 26.99C26.5444 26.9668 26.5794 26.9418 26.6131 26.915L26.6956 26.855H26.7031C26.7631 25.67 26.7931 24.455 26.7931 23.2175L26.7931 23.2025C26.7995 23.1302 26.802 23.0576 26.8006 22.985V22.7975L26.7931 22.784ZM25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144L23.5531 29.1515C23.4631 30.269 23.3431 31.3115 23.2156 32.2865C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494L26.0731 33.4865C26.2231 32.504 26.3506 31.4765 26.4481 30.404C26.0746 30.2615 25.6996 30.104 25.3081 29.9315ZM25.7506 35.384C24.8281 35.024 23.8831 34.634 22.9231 34.2065C22.0606 39.0665 20.7931 41.819 20.0131 42.0215C19.1056 41.804 17.6056 38.339 16.7806 32.2865C16.7356 31.889 16.6756 31.4765 16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C16.4281 29.024 16.4206 28.8965 16.4056 28.769C16.3156 27.629 16.2556 26.429 16.2181 25.1615C16.2031 24.4565 16.1956 23.7365 16.1881 22.9865C16.1806 22.2365 16.2031 21.5165 16.2181 20.804C16.2556 19.5515 16.3156 18.359 16.4131 17.2265V17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856L13.2931 19.1315C13.2331 20.3165 13.1956 21.524 13.1956 22.7615L13.2031 22.769C13.2011 22.769 13.1992 22.7698 13.1978 22.7712C13.1964 22.7726 13.1956 22.7745 13.1956 22.7765C13.1919 22.8465 13.1919 22.9166 13.1956 22.9865V23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864C13.3381 28.0865 13.4281 29.2715 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C14.1329 34.982 14.4209 36.442 14.7931 37.8815C16.0081 42.6215 17.7706 45.0215 19.9906 45.0215H19.9996C21.3346 45.0215 22.4821 44.1665 23.4646 42.4715C24.2378 41.0254 24.8202 39.485 25.1971 37.889C25.3996 37.094 25.5946 36.2615 25.7596 35.384H25.7506ZM15.3406 13.064L14.6206 12.7715C14.3881 12.674 14.1556 12.5765 13.9231 12.4865L13.9156 12.494C13.7731 13.4765 13.6531 14.504 13.5481 15.569C13.9156 15.7265 14.2906 15.884 14.6881 16.0565H14.6956C15.2581 16.2965 15.8356 16.5665 16.4356 16.8515V16.829C16.5331 15.7115 16.6456 14.6765 16.7806 13.7015C16.2931 13.475 15.8206 13.274 15.3406 13.064Z",
						fill: "#C5EBF5"
					}), (0, a.jsx)("path", {
						d: "M35.4331 25.904C34.8706 25.3415 34.2631 24.7865 33.6031 24.209H33.5956C32.8231 24.8315 32.0206 25.4465 31.1731 26.069L31.1656 26.0765C31.1581 26.0765 31.1581 26.084 31.1506 26.0915C34.8856 29.219 36.6181 31.6715 36.4006 32.444C35.7631 33.119 32.0506 32.6915 26.4481 30.404C26.0731 30.2615 25.6981 30.104 25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144C23.4406 29.084 23.3356 29.0315 23.2231 28.979L23.2156 28.9865C22.1881 28.4915 21.1231 27.944 20.0056 27.344C19.3756 27.0065 18.7456 26.654 18.0931 26.279C17.4406 25.904 16.8181 25.529 16.2181 25.1615C15.1456 24.494 14.1406 23.8415 13.2031 23.204L13.1956 23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864L13.3006 26.8565C14.2981 27.5065 15.3331 28.144 16.4056 28.769L16.7881 28.9865C17.1631 29.204 17.5381 29.414 17.9131 29.6165C18.0781 29.714 18.2431 29.804 18.4081 29.8865C18.4883 29.9357 18.5709 29.9808 18.6556 30.0215C19.0381 30.2315 19.4206 30.434 19.7956 30.629C19.8631 30.6665 19.9306 30.6965 19.9981 30.7265L20.0056 30.734C20.0731 30.7715 20.1406 30.809 20.2081 30.839C20.6656 31.079 21.1231 31.304 21.5806 31.5215C22.1131 31.784 22.6456 32.0315 23.1631 32.2715C23.1791 32.2731 23.1944 32.2782 23.2081 32.2865H23.2156C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494C26.4256 33.6365 26.7856 33.7715 27.1381 33.899C27.4906 34.0265 27.8356 34.1465 28.1806 34.2665C28.2068 34.2695 28.2322 34.2771 28.2556 34.289C28.5931 34.4015 28.9231 34.514 29.2381 34.604C29.5756 34.7165 29.9056 34.814 30.2356 34.904C30.5281 34.9865 30.8131 35.054 31.0906 35.1215C31.3681 35.189 31.6531 35.2565 31.9156 35.309C32.2081 35.369 32.4931 35.429 32.7706 35.474C33.3256 35.564 33.8506 35.6315 34.3306 35.6615C35.2141 35.7338 36.1035 35.6603 36.9631 35.444C37.2573 35.3636 37.5416 35.2504 37.8106 35.1065C38.301 34.8394 38.7084 34.4424 38.9881 33.959C40.1056 32.0315 38.9056 29.324 35.4331 25.904ZM10.3531 21.125H10.3456V21.1175L10.3381 21.11C9.46812 21.7325 8.63562 22.355 7.86312 22.985L7.88561 23C8.65811 23.615 9.46812 24.23 10.3306 24.8525C10.6606 24.605 10.9831 24.35 11.3356 24.1025C11.4481 24.0125 11.5681 23.93 11.6881 23.8475C11.8831 23.705 12.0781 23.5625 12.2806 23.42C12.3781 23.3525 12.4756 23.2775 12.5806 23.21C12.6856 23.1425 12.7756 23.0675 12.8806 22.9925C12.8826 22.9925 12.8845 22.9917 12.8859 22.9903C12.8873 22.9889 12.8881 22.987 12.8881 22.985V22.9775C11.9746 22.3415 11.1331 21.734 10.3531 21.125ZM26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13C25.6981 18.4775 24.6556 17.8475 23.5906 17.2175H23.5831V17.21L23.2006 16.9925C22.8181 16.775 22.4356 16.565 22.0531 16.355C21.8356 16.2275 21.6181 16.1075 21.3931 15.995C20.9731 15.7625 20.5531 15.5375 20.1256 15.3275C20.0814 15.2967 20.0335 15.2715 19.9831 15.2525C19.9831 15.2375 19.9831 15.2375 19.9756 15.245C19.4506 14.9675 18.9331 14.7125 18.4156 14.465C17.8681 14.195 17.3281 13.94 16.7881 13.7H16.7806C16.2931 13.475 15.8206 13.2725 15.3406 13.0625L14.6206 12.77C14.3881 12.6725 14.1556 12.575 13.9231 12.485C13.1956 12.2 12.4831 11.9375 11.7856 11.7125C11.0881 11.4725 10.4056 11.2625 9.75311 11.075C9.46811 11 9.17562 10.925 8.90562 10.865C8.62062 10.7975 8.34311 10.73 8.07311 10.67C7.60812 10.5725 7.16562 10.4975 6.73812 10.4375C6.34812 10.385 5.96562 10.3475 5.61312 10.325C5.31312 10.3025 5.02062 10.3025 4.75062 10.3025C4.48981 10.3046 4.22935 10.3221 3.97062 10.355L3.96312 10.3475C3.63076 10.3889 3.30223 10.4566 2.98062 10.55C2.86812 10.5875 2.75562 10.625 2.65062 10.6625C2.47191 10.7314 2.29888 10.8141 2.13312 10.91C1.89763 11.04 1.68278 11.2043 1.49562 11.3975C1.3031 11.5844 1.1366 11.7963 1.00062 12.0275C-0.116884 13.955 1.08312 16.6625 4.55562 20.0825C5.13312 20.6375 5.74062 21.2075 6.40812 21.77C7.18062 21.1475 7.98312 20.5325 8.83062 19.91C8.83812 19.91 8.83812 19.9025 8.84562 19.9025C5.13312 16.7825 3.39312 14.33 3.59562 13.5275C4.27062 12.875 7.97562 13.3025 13.5481 15.5675C13.9156 15.725 14.2906 15.8825 14.6881 16.055H14.6956C15.2581 16.295 15.8356 16.565 16.4356 16.85C16.5481 16.895 16.6531 16.9475 16.7656 16.9925C16.7697 16.9966 16.7749 16.9992 16.7806 17C17.8081 17.495 18.8756 18.04 19.9831 18.635C20.6131 18.9725 21.2431 19.3325 21.8881 19.7C22.5331 20.0675 23.1631 20.45 23.7706 20.825C24.8506 21.4925 25.8581 22.145 26.7931 22.7825L26.7931 22.775C26.7931 22.3415 26.7856 21.914 26.7781 21.4865L26.7781 21.485ZM32.1106 22.985C31.3381 22.37 30.5131 21.7475 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006L27.1081 23C28.0156 23.6375 28.8631 24.26 29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23L32.1106 22.985Z",
						fill: "#C5EBF5"
					})]
				})
		},
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				A2: function() {
					return c
				},
				He: function() {
					return a
				},
				N$: function() {
					return v
				},
				Qq: function() {
					return s
				},
				ST: function() {
					return d
				},
				wM: function() {
					return o
				}
			});
			var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				s = "login-apple-jwt",
				d = "cf-test",
				a = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				v = u => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: u ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: u ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: u ? e.rD : e.PJ
				}, {
					title: "apple.sign_in_with_apple.impact.title",
					description: "apple.sign_in_with_apple.impact.description",
					icon: e.i2
				}],
				c = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				_: function() {
					return s
				},
				c: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let s = function(a) {
				return a.TEMPLATE_SELECTED = "template selected", a.TEMPLATE_PRODUCT_SELECTED = "template product selected", a.TEMPLATE_SAVE_DRAFT = "template save draft", a.TEMPLATE_CANCEL = "template cancel", a.TEMPLATE_DEPLOY = "template deploy", a
			}({});
			const d = (a, v) => o().sendEvent(a, {
				template_name: v
			})
		},
		"../react/pages/pages/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				A: function() {
					return b
				},
				C1: function() {
					return _
				},
				GF: function() {
					return D
				},
				HD: function() {
					return l
				},
				IK: function() {
					return a
				},
				L7: function() {
					return s
				},
				Li: function() {
					return p
				},
				Ni: function() {
					return k
				},
				OG: function() {
					return z
				},
				QF: function() {
					return te
				},
				QV: function() {
					return w
				},
				Sx: function() {
					return C
				},
				Ub: function() {
					return ne
				},
				X3: function() {
					return r
				},
				bA: function() {
					return P
				},
				eO: function() {
					return i
				},
				fH: function() {
					return m
				},
				fQ: function() {
					return O
				},
				fR: function() {
					return e
				},
				ff: function() {
					return y
				},
				iS: function() {
					return h
				},
				nY: function() {
					return f
				},
				w3: function() {
					return d
				},
				wJ: function() {
					return u
				},
				wp: function() {
					return g
				},
				yu: function() {
					return n
				},
				zF: function() {
					return I
				},
				zG: function() {
					return A
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-workers-and-pages",
				s = {
					dns: "https://cloudflare.com/dns",
					access: "https://www.cloudflare.com/teams-access/",
					access_dashboard: "https://one.dash.cloudflare.com",
					community: "https://community.cloudflare.com/tag/cloudflarepages",
					documentation: {
						access: "https://developers.cloudflare.com/pages/configuration/preview-deployments/#customize-preview-deployments-access",
						buildConfig: "https://developers.cloudflare.com/pages/configuration/build-configuration/",
						buildCache: "https://developers.cloudflare.com/pages/configuration/build-caching/#build-caching-beta",
						configuration: "https://developers.cloudflare.com/pages/configuration/",
						gettingStarted: "https://developers.cloudflare.com/pages/get-started",
						configuringBuilds: "https://developers.cloudflare.com/pages/platform/build-configuration",
						supportedFrameworks: "https://developers.cloudflare.com/pages/configuration/build-configuration/#framework-presets",
						supportedTools: "https://developers.cloudflare.com/pages/configuration/language-support-and-tools",
						supportedLanguages: "https://developers.cloudflare.com/pages/configuration/language-support-and-tools/#supported-languages-and-tools",
						deployingBranches: "https://developers.cloudflare.com/pages/platform/preview-deployments",
						buildPaths: "https://developers.cloudflare.com/pages/configuration/build-watch-paths#build-watch-paths",
						root: "https://developers.cloudflare.com/pages/",
						tutorials: "https://developers.cloudflare.com/pages/how-to",
						customDomains: "https://developers.cloudflare.com/pages/platform/custom-domains/",
						contactSupport: "https://developers.cloudflare.com/support/contacting-cloudflare-support/",
						deployHooks: "https://developers.cloudflare.com/pages/platform/deploy-hooks",
						functions: "https://developers.cloudflare.com/pages/platform/functions",
						functionsRoutes: "https://developers.cloudflare.com/pages/platform/functions/routing/",
						invocationRoutes: "https://developers.cloudflare.com/pages/platform/functions/routing/#function-invocation-routes",
						functionsFailOpenClosed: "https://developers.cloudflare.com/pages/platform/functions/routing/#fail-open--closed",
						functionsBindings: "https://developers.cloudflare.com/pages/platform/functions/bindings/",
						functionsAIBindings: "https://developers.cloudflare.com/pages/platform/functions/bindings/#ai",
						functionsKVNamespace: "https://developers.cloudflare.com/pages/platform/functions/bindings/#kv-namespaces",
						functionsDurableObjects: "https://developers.cloudflare.com/pages/platform/functions/bindings/#durable-object-namespaces",
						functionsR2: "https://developers.cloudflare.com/pages/platform/functions/bindings/#r2-buckets",
						functionsVectorize: "https://developers.cloudflare.com/pages/platform/functions/bindings/#vectorize-indexes",
						functionsD1: "https://developers.cloudflare.com/pages/platform/functions/bindings/#d1-databases",
						functionsServiceBindings: "https://developers.cloudflare.com/pages/platform/functions/bindings/#service-bindings",
						functionsQueueProducers: "https://developers.cloudflare.com/pages/platform/functions/bindings/#queue-producers",
						functionsAnalyticsEngine: "https://developers.cloudflare.com/pages/platform/functions/bindings/#analytics-engine",
						functionsLimits: "https://developers.cloudflare.com/workers/platform/limits/#worker-limits",
						functionsGABilling: "https://developers.cloudflare.com/pages/platform/functions/pricing/",
						workersObservabilityLimits: "https://developers.cloudflare.com/workers/observability/logs/workers-logs/#limits",
						headers: "https://developers.cloudflare.com/pages/platform/headers",
						redirects: "https://developers.cloudflare.com/pages/platform/redirects",
						branchConfig: "https://developers.cloudflare.com/pages/platform/branch-build-controls/#branch-deployment-controls",
						buildImageVersion: "https://developers.cloudflare.com/pages/platform/language-support-and-tools/",
						compatibilityDates: "https://developers.cloudflare.com/workers/platform/compatibility-dates/",
						compatibilityFlags: "https://developers.cloudflare.com/workers/platform/compatibility-dates/#compatibility-flags",
						usageModels: "https://developers.cloudflare.com/workers/platform/pricing#usage-models",
						functionsPricing: "https://developers.cloudflare.com/pages/functions/pricing",
						requestLimitFailureMode: "https://developers.cloudflare.com/pages/platform/functions/pricing/#free-plan",
						smartPlacement: "https://developers.cloudflare.com/pages/platform/functions/smart-placement",
						notifications: "https://developers.cloudflare.com/notifications/",
						buildCaching: "https://developers.cloudflare.com/pages/platform/build-caching/",
						userCpuLimits: "https://developers.cloudflare.com/workers/platform/pricing/#standard-usage-model",
						gitIntegration: "https://developers.cloudflare.com/pages/platform/git-integration/#troubleshooting",
						configFile: "https://developers.cloudflare.com/pages/functions/wrangler-configuration/",
						workersStaticAssets: "https://developers.cloudflare.com/workers/static-assets/",
						workersMigrationGuide: "https://developers.cloudflare.com/workers/static-assets/migrate-from-pages/",
						workersCompatibilityMatrix: "https://developers.cloudflare.com/workers/static-assets/migrate-from-pages/#compatibility-matrix",
						pagesV2ToV3MigrationGuide: "https://developers.cloudflare.com/pages/configuration/build-image/#v2-to-v3-migration"
					},
					github: {
						appHomepage: `https://github.com/apps/${o}`,
						installations: "https://github.com/settings/installations",
						newInstallation: `https://github.com/apps/${o}/installations/new`,
						userOAuth: "https://github.com/login/oauth/authorize"
					},
					gitlab: {
						authorize: "https://gitlab.com/oauth/authorize",
						manage: "https://gitlab.com/-/profile/applications"
					},
					webAnalytics: "https://developers.cloudflare.com/analytics/web-analytics/",
					feedbackSurvey: "https://forms.gle/dfM8YfpzY4aV3gv56"
				},
				d = "Allow Members - Cloudflare Pages",
				a = 58,
				v = {
					free: {
						concurrentBuilds: 1,
						maxBuilds: 500,
						dailyFunctionsRequests: 1e5
					},
					pro: {
						concurrentBuilds: 5,
						maxBuilds: 5e3,
						dailyFunctionsRequests: 1e5
					},
					business: {
						concurrentBuilds: 20,
						maxBuilds: 2e4,
						dailyFunctionsRequests: 1e5
					}
				},
				c = "production",
				u = 2e3,
				_ = 100,
				n = 350,
				r = 1e7,
				i = ["Success:", "Error:", "Failed:"],
				g = 10,
				m = "_headers",
				p = "_redirects",
				b = "_routes.json",
				O = "_worker.js",
				h = "do-a-barrel-roll",
				l = [m, p, b, O],
				C = 1024 * 1024 * 25,
				f = 1e3,
				w = {
					createPagesProject: "create pages project",
					updatePagesProject: "update pages project",
					deletePagesProject: "delete pages project",
					clickCreateApplication: "click create application",
					createPagesDeployment: "create pages deployment",
					listPagesProjects: "list pages projects",
					paginatePagesProjects: "paginate pages projects",
					searchPagesProjects: "search pages projects",
					setPagesEnvironmentVariables: "set pages environment variables",
					setPagesKVBindings: "set pages kv bindings",
					setPagesDOBindings: "set pages do bindings",
					setPagesAIBindings: "set pages ai bindings",
					setPagesR2Bindings: "set pages r2 bindings",
					setPagesD1Bindings: "set pages d1 bindings",
					setPagesVectorizeBindings: "set pages vectorize bindings",
					setPagesServiceBindings: "set pages service bindings",
					setPagesQueueProducerBindings: "set pages queue producer bindings",
					setPagesAnalyticsEngineBindings: "set pages analytics engine bindings",
					enablePagesAccessPolicy: "enable pages access policy",
					managePagesPolicies: "manage pages policies",
					enablePagesWebAnalytics: "enable pages web analytics",
					disablePagesWebAnalytics: "disable pages web analytics",
					managePagesMembers: "manage pages members",
					beginDeploymentLogStream: "begin deployment log stream",
					setPagesPlacement: "set pages placement",
					setPagesCpuLimit: "set pages cpu limit",
					firstDeployExploreSettings: "click settings first deploy cta",
					firstDeployCustomDomain: "click custom domain first deploy cta",
					firstDeployWebAnalytics: "click web analytics first deploy cta",
					filterWorkersPages: "filter workers and pages",
					sortWorkersPages: "sort workers and pages",
					toggledPagesSmartPlacement: "toggle pages smart placement",
					downloadDemoProject: "download demo project"
				},
				k = 1e5,
				A = 75e3,
				I = 2e5,
				D = 15e4,
				y = 3e3,
				P = 2250,
				S = "workers",
				M = "cloudflare_pages_build_caching",
				F = 2;
			let ne = function(N) {
				return N[N.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", N[N.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", N[N.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", N[N.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", N[N.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", N[N.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", N
			}({});
			const te = 1,
				re = 2,
				z = 2
		},
		"../react/pages/pages/routes.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return s
				},
				_j: function() {
					return o
				},
				zE: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
					rootNoAccount: (0, e.BC)`/`,
					root: (0, e.BC)`/${"accountId"}/pages`,
					plans: (0, e.BC)`/${"accountId"}/workers/plans`,
					newProject: (0, e.BC)`/${"accountId"}/pages/new`,
					newProjectAssetUpload: (0, e.BC)`/${"accountId"}/pages/new/upload`,
					newProjectAssetUploadProjectCreatedNoDeployment: (0, e.BC)`/${"accountId"}/pages/new/upload/${"projectName"}`,
					newProjectStepName: (0, e.BC)`/${"accountId"}/pages/new/project`,
					newProjectWranglerGuide: (0, e.BC)`/${"accountId"}/pages/new/wrangler-guide`,
					newProjectProvider: (0, e.BC)`/${"accountId"}/pages/new/provider/${"provider"}`,
					projectDetails: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}`,
					projectAnalyticsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/analytics`,
					projectAnalytics: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/analytics/${"deploymentType"}(preview|production)`,
					projectDomains: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/domains`,
					projectSettingsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings`,
					projectSettings: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/${"environment"}(preview|production)`,
					projectBuild: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/build`,
					projectManage: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/manage`,
					projectSettingsBuildDeployment: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/builds-deployments`,
					projectSettingsEnvironmentVariables: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/environment-variables`,
					projectSettingsFunctions: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/functions`,
					deploymentCreate: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/deployments/new`,
					deploymentDetails: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}`,
					deploymentDetailsFiles: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/files`,
					deploymentDetailsFunctions: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/functions`,
					deploymentDetailsRedirects: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/redirects`,
					deploymentDetailsHeaders: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/headers`,
					durableObjectDetails: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}`,
					verifyEmail: (0, e.BC)`/${"accountId"}/pages/verify-email`,
					access: (0, e.BC)`/${"accountId"}?zone=access`,
					members: (0, e.BC)`/${"accountId"}/members`,
					zoneOnboarding: (0, e.BC)`/${"accountId"}/add-site`,
					zoneDNS: (0, e.BC)`/${"accountId"}/${"zoneName"}/dns`,
					signUp: (0, e.BC)`/sign-up/pages`,
					defaultUsageModel: (0, e.BC)`/${"accountId"}/pages/default-usage-model`,
					webAnalyticsEnable: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/manage#web_analytics_section`,
					webAnalyticsDashboard: (0, e.BC)`/${"accountId"}/web-analytics/overview?siteTag~in=${"siteTag"}`
				},
				s = {
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/pages/account-settings`,
					checkMissing: (0, e.BC)`/pages/assets/check-missing`,
					metrics: (0, e.BC)`/accounts/${"accountId"}/pages/metrics`,
					projects: (0, e.BC)`/accounts/${"accountId"}/pages/projects`,
					projectDetails: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}`,
					purgeCache: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/purge_build_cache`,
					projectDomains: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/domains`,
					projectDomain: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/domains/${"domainName"}`,
					projectUploadFile: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/file`,
					deploymentCreateTail: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/tails`,
					deploymentDeleteTail: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/tails/${"tailId"}`,
					deployments: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments`,
					deploymentDetails: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/?force=true`,
					deploymentBuildMetadata: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/build_metadata`,
					deploymentFunctions: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/functions`,
					deploymentCancel: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/cancel`,
					deploymentRetry: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/retry`,
					rollbackDeployment: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/rollback`,
					deploymentLogs: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/history/logs`,
					deploymentLiveLogsJWT: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/live`,
					deploymentLiveLogsWS: (0, e.BC)`wss://${"apiHost"}/logs/ws/get?startIndex=${"startIndex"}&jwt=${"jwt"}`,
					deploymentLiveLogsHTTP: (0, e.BC)`https://${"apiHost"}/logs?jwt=${"jwt"}`,
					getDeploymentConfig: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployment_configs/${"environment"}`,
					setDeploymentConfig: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployment_configs/${"environment"}/envs`,
					gitConnections: (0, e.BC)`/accounts/${"accountId"}/pages/connections`,
					gitConnectionsProvider: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}`,
					gitConnectionPermissions: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/permissions`,
					gitRepos: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos`,
					gitRepo: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos/${"repo"}`,
					gitBranches: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos/${"repo"}/branches`,
					domainCheck: (0, e.BC)`/accounts/${"accountId"}/pages/domain_check`,
					getSubdomain: (0, e.BC)`/accounts/${"accountId"}/pages/get_subdomain`,
					deployHooks: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deploy_hooks`,
					changeDeployHooks: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deploy_hooks/${"hookId"}`,
					accessApps: (0, e.BC)`/accounts/${"accountId"}/access/apps`,
					accessIdPs: (0, e.BC)`/accounts/${"accountId"}/access/identity_providers`,
					accessOrg: (0, e.BC)`/accounts/${"accountId"}/access/organizations`,
					accessPolicies: (0, e.BC)`/accounts/${"accountId"}/access/apps/${"appId"}/policies`,
					accountMembers: (0, e.BC)`/accounts/${"accountId"}/members?per_page=50&page=${"page"}&direction=desc`,
					bootstrap: (0, e.BC)`/system/bootstrap`,
					zones: (0, e.BC)`/zones`,
					zone: (0, e.BC)`/zones/${"zoneId"}`,
					zoneDNSRecords: (0, e.BC)`/zones/${"zoneId"}/dns_records`,
					zoneDNSRecord: (0, e.BC)`/zones/${"zoneId"}/dns_records/${"recordId"}`,
					uploadFiles: (0, e.BC)`/pages/assets/upload`,
					upsertHashes: (0, e.BC)`/pages/assets/upsert-hashes`,
					uploadToken: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/upload-token`,
					webAnalyticsSiteInfo: (0, e.BC)`/accounts/${"accountId"}/rum/site_info`,
					webAnalyticsSiteTag: (0, e.BC)`/accounts/${"accountId"}/rum/site_info/${"siteTag"}`,
					docsRoot: "https://developers.cloudflare.com",
					buildImageVersions: "https://developers.cloudflare.com/pages/platform/language-support-and-tools.json",
					buildPresets: "https://developers.cloudflare.com/pages/platform/build-configuration.json",
					compatibilityDates: "https://developers.cloudflare.com/workers/platform/compatibility-dates.json"
				},
				d = v => `${v.subdomain}.pages.dev`,
				a = {
					installation: {
						github: {
							user: (0, e.BC)`https://github.com/settings/installations/${"installation_id"}`,
							organization: (0, e.BC)`https://github.com/organizations/${"organization_name"}/settings/installations/${"installation_id"}`
						},
						gitlab: (0, e.BC)`https://gitlab.com/${"username"}/${"repo"}/-/hooks/`
					}
				}
		},
		"../react/pages/pipelines/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				KO: function() {
					return c
				},
				L9: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(m) {
						return Object.getOwnPropertyDescriptor(i, m).enumerable
					})), g.forEach(function(m) {
						d(n, m, i[m])
					})
				}
				return n
			}

			function d(n, r, i) {
				return r = a(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function a(n) {
				var r = v(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				u = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const _ = (n, r = {}) => {
				o().sendEvent(n, s({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/profile/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				QV: function() {
					return d
				},
				Xn: function() {
					return o
				},
				iH: function() {
					return e
				},
				xq: function() {
					return s
				}
			});
			const e = "iam-authentication",
				o = "login",
				s = "profile",
				d = {
					[o]: {
						clickTryOther2FAMethodOrBackupCode: "click try another 2fa method or backup code",
						clickTryRecovery: "click try recovery",
						clickLoginFromMobileApp2fa: "click login on mobile-app/backup code 2fa"
					},
					[s]: {
						clickRegenerateBackupCodes: "click regenerate backup codes"
					}
				}
		},
		"../react/pages/r2/routes.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				G3: function() {
					return a
				},
				Hv: function() {
					return s
				},
				Jg: function() {
					return c
				},
				_j: function() {
					return o
				},
				vF: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
					root: (0, e.BC)`/${"accountId"}/r2`,
					overview: (0, e.BC)`/${"accountId"}/r2/overview`,
					cliQuickStart: (0, e.BC)`/${"accountId"}/r2/cli`,
					createBucket: (0, e.BC)`/${"accountId"}/r2/new`,
					bucketDetails: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}`,
					bucketDetailsSettings: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/settings`,
					bucketMetrics: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/metrics`,
					objectDetails: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/objects/${"objectKey"}/details`,
					apiTokens: (0, e.BC)`/${"accountId"}/r2/api-tokens`,
					createApiToken: (0, e.BC)`/${"accountId"}/r2/api-tokens/create`,
					editApiToken: (0, e.BC)`/${"accountId"}/r2/api-tokens/${"tokenId"}`,
					apiTokenSuccess: (0, e.BC)`/${"accountId"}/r2/api-tokens/success`,
					plans: (0, e.BC)`/${"accountId"}/r2/plans`,
					signUp: (0, e.BC)`/sign-up/r2`,
					verifyEmail: (0, e.BC)`/${"accountId"}/r2/verify-email`,
					profile: (0, e.BC)`/profile/api-tokens`,
					billing: (0, e.BC)`/${"accountId"}/billing/subscriptions`,
					zoneDNS: (0, e.BC)`/${"accountId"}/${"zoneName"}/dns`,
					migrator: (0, e.BC)`/${"accountId"}/r2/slurper`,
					workersPlans: (0, e.BC)`/${"accountId"}/workers/plans`
				},
				s = {
					canUnsubscribe: (0, e.BC)`/accounts/${"accountId"}/r2/canUnsubscribe`,
					defaultRegion: (0, e.BC)`/accounts/${"accountId"}/r2/defaultRegion`,
					metrics: (0, e.BC)`/accounts/${"accountId"}/r2/metrics`,
					buckets: (0, e.BC)`/accounts/${"accountId"}/r2/buckets`,
					bucket: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}`,
					objects: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects`,
					object: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects/${"objectKey"}`,
					bucketUsage: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/usage`,
					bucketManagedDomain: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/domains/managed`,
					bucketCustomDomains: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/domains/custom`,
					bucketCustomDomain: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/domains/custom/${"domainName"}`,
					bucketCors: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/cors`,
					bucketEventConfig: (0, e.BC)`/accounts/${"accountId"}/event_notifications/r2/${"bucketName"}/configuration`,
					bucketEventConfigQueue: (0, e.BC)`/accounts/${"accountId"}/event_notifications/r2/${"bucketName"}/configuration/queues/${"queueId"}`,
					bucketLockRules: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lock`,
					bucketLifecycle: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lifecycle`,
					bucketMultipartUploads: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/uploads`,
					bucketSippy: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/sippy`,
					apiTokens: (0, e.BC)`/user/tokens`,
					apiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					rollApiToken: (0, e.BC)`/user/tokens/${"tokenId"}/value`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					zones: (0, e.BC)`/zones`,
					tokens: (0, e.BC)`/accounts/${"accountId"}/tokens`,
					token: (0, e.BC)`/accounts/${"accountId"}/tokens/${"tokenId"}`,
					rollToken: (0, e.BC)`/accounts/${"accountId"}/tokens/${"tokenId"}/value`,
					catalog: (0, e.BC)`/accounts/${"accountId"}/r2-catalog/${"bucketName"}`
				},
				d = u => {
					const _ = "r2.cloudflarestorage.com",
						n = "r2.fed.cloudflarestorage.com";
					switch (u) {
						case "default":
							return _;
						case "eu":
							return `eu.${_}`;
						case "fedramp":
							return `fedramp.${_}`;
						case "fedramp-high":
							return n
					}
				},
				a = u => u ? "api.fed.cloudflare.com" : "api.cloudflare.com",
				v = (u, _) => {
					const n = d(_);
					return `https://${u}.${n}`
				},
				c = (u, _, n) => `${v(u,_)}/${n}`
		},
		"../react/pages/secrets-store/resources/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Hf: function() {
					return k
				},
				JJ: function() {
					return v
				},
				Js: function() {
					return d
				},
				LN: function() {
					return p
				},
				Nm: function() {
					return i
				},
				Oh: function() {
					return O
				},
				Q2: function() {
					return I
				},
				QF: function() {
					return b
				},
				RR: function() {
					return l
				},
				T_: function() {
					return A
				},
				Xm: function() {
					return c
				},
				Zl: function() {
					return D
				},
				dv: function() {
					return a
				},
				fp: function() {
					return r
				},
				jx: function() {
					return w
				},
				nQ: function() {
					return g
				},
				px: function() {
					return h
				},
				tP: function() {
					return s
				},
				vh: function() {
					return m
				},
				wB: function() {
					return P
				},
				z3: function() {
					return y
				},
				zt: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				o = t("../../../../node_modules/yup/es/index.js");
			const s = "secrets-store-account-level",
				d = "https://developers.cloudflare.com/secrets-store/",
				a = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				v = 1,
				c = 10,
				u = 100;
			let _ = function(S) {
					return S.NAME = "name", S
				}({}),
				n = function(S) {
					return S.NAME = "name", S
				}({});
			const r = {
				initialPaginationState: {
					page: v,
					perPage: c
				},
				initialSortState: {
					name: _.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: ""
				},
				filters: n,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					queryParamStrategy: "auto-clear"
				}
			};
			let i = function(S) {
					return S.NAME = "name", S.COMMENT = "comment", S.TAGS = "tags", S.SERVICES = "services", S.STATUS = "status", S
				}({}),
				g = function(S) {
					return S.PENDING = "pending", S.ACTIVE = "active", S.DELETED = "deleted", S
				}({}),
				m = function(S) {
					return S.LIST_SECRETS_STORES = "listSecretsStores", S.LIST_SECRETS = "listSecrets", S.GET_SECRET = "getSecret", S.SECRETS_QUOTA = "secretsQuota", S
				}({}),
				p = function(S) {
					return S.CREATE = "create", S.EDIT = "edit", S.DUPLICATE = "duplicate", S
				}({}),
				b = function(S) {
					return S.WORKERS = "workers", S.AI_GATEWAY = "ai_gateway", S
				}({});
			const O = "default_secrets_store";
			let h = function(S) {
				return S.CREATE = "create", S.EDIT = "edit", S.DUPLICATE = "duplicate", S.VIEW = "view", S
			}({});
			const l = "delete_operation",
				C = /^[a-zA-Z0-9_-]+$/,
				f = (S, M, F, ne, te) => o.Ry().shape({
					name: o.Z_().required(S("secrets_store.form.create.errors.name.required")).matches(C, S("secrets_store.form.create.errors.name.invalid_characters")).max(255, S("secrets_store.form.create.errors.name.max")),
					value: o.Z_().test("required-if-creating", S("secrets_store.form.create.errors.value.required"), re => M || te ? !!re : !0).max(1024, S("secrets_store.form.create.errors.value.max")),
					comment: o.Z_().nullable().max(1024, S("secrets_store.form.create.errors.comment.max")),
					scopes: o.IX().of(o.Z_().oneOf(Object.values(b), S("secrets_store.form.create.errors.scopes.invalid"))).required()
				}),
				w = (S, M, F, ne, te) => o.Ry().shape({
					secrets: o.IX().of(f(S, M, F, ne, te))
				}),
				k = {
					name: "",
					value: "",
					scopes: [b.WORKERS],
					comment: ""
				},
				A = "secrets-store.store.secret";
			let I = function(S) {
				return S.DUPLICATE = "duplicate", S.DEPLOY = "deploy", S
			}({});
			const D = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let y = function(S) {
					return S.CREATE_SECRET = "create secrets store secret", S.EDIT_SECRET = "edit secrets store secret", S.DUPLICATE_SECRET = "duplicate secrets store secret", S.DELETE_SECRET = "delete secrets store secret", S.BIND_SECRET = "open secrets store binding drawer", S
				}({}),
				P = function(S) {
					return S.SECRETS_STORE = "secrets store main", S.WORKERS_BINDING = "workers binding drawer", S
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Ev: function() {
					return s
				},
				RY: function() {
					return e
				},
				v9: function() {
					return o
				}
			});
			let e = function(d) {
				return d.LOAD_SCAN_INFO = "load url scan information", d.INITIATE_URL_SCAN = "initiate url scan", d
			}({});
			const o = {
				MANAGE_INSIGHT: "manage security insight",
				BULK_ARCHIVE: "bulk archive security insights",
				EXPAND_INSIGHT_ROW: "expand security issue row",
				ONE_CLICK_RESOLVE_BUTTON: "one click resolve security issue button",
				FOLLOW_RESOLVE_URL: "follow security issue resolve url",
				CLICK_SCAN_NOW: "run security scan",
				CLICK_EXPORT_INSIGHTS: "click export insights",
				CLICK_DETAILS_BUTTON: "click insights row details button"
			};
			let s = function(d) {
				return d.LOAD_THREAT_EVENTS = "load threat events", d.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", d.THREAT_EVENTS_FILTERS = "threat events filters applied", d.ABUSE_REPORT_BUTTON_CLICK = "clicked abuse report button", d.ABUSE_REPORT_SUBMIT_CLICK = "clicked submit abuse report button", d.ABUSE_REPORT_SUBMIT_FAILED = "abuse report submission failed", d.ABUSE_REPORT_SUBMIT_SUCCESS = "abuse report submitted successfully", d
			}({})
		},
		"../react/pages/security/ai-agent/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				PJ: function() {
					return o
				},
				mG: function() {
					return e
				},
				tP: function() {
					return d
				},
				zf: function() {
					return s
				}
			});
			const e = "Hi there, I\u2019m Cloudy! I can help you identify suspicious activity, analyze traffic patterns, and recommend security rule configurations.",
				o = "open cloudy insight",
				s = "set cloudy tool response",
				d = "set cloudy tool error"
		},
		"../react/pages/security/analytics/resources/labels.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				AU: function() {
					return s
				},
				Bc: function() {
					return o
				},
				Bt: function() {
					return e
				},
				e_: function() {
					return d
				}
			});
			const e = {
					unknown: "firewall.analytics.actions.labels.unknown",
					allow: "firewall.analytics.actions.labels.allow",
					bypass: "firewall.analytics.actions.labels.bypass",
					block: "firewall.analytics.actions.labels.drop",
					challenge: "firewall.analytics.actions.labels.challenge",
					jschallenge: "firewall.analytics.actions.labels.jschallenge",
					rewrite: "firewall.analytics.actions.labels.rewrite",
					log: "firewall.analytics.actions.labels.log",
					connection_close: "firewall.analytics.actions.labels.connectionClose",
					challenge_solved: "firewall.analytics.actions.labels.challenge_solved",
					challenge_failed: "firewall.analytics.actions.labels.challenge_failed",
					challenge_bypassed: "firewall.analytics.actions.labels.challenge_bypassed",
					jschallenge_solved: "firewall.analytics.actions.labels.jschallenge_solved",
					jschallenge_failed: "firewall.analytics.actions.labels.jschallenge_failed",
					jschallenge_bypassed: "firewall.analytics.actions.labels.jschallenge_bypassed",
					managed_challenge: "firewall.analytics.actions.labels.managed_challenge",
					managed_challenge_interactive_solved: "firewall.analytics.actions.labels.managed_challenge_interactive_solved",
					managed_challenge_non_interactive_solved: "firewall.analytics.actions.labels.managed_challenge_non_interactive_solved",
					managed_challenge_bypassed: "firewall.analytics.actions.labels.managed_challenge_bypassed",
					skip: "firewall.analytics.actions.labels.skip",
					force_connection_close: "firewall.analytics.actions.labels.force_connection_close"
				},
				o = {
					"Behavioral Analysis": "security_analytics.labels.bot_source.behavioral_analysis",
					Heuristics: "security_analytics.labels.bot_source.heuristics",
					"Machine Learning": "security_analytics.labels.bot_source.machine_learning",
					"Not Computed": "security_analytics.labels.bot_source.not_computed",
					"JS Fingerprinting": "security_analytics.labels.bot_source.js_fingerprinting",
					"Verified Bot": "security_analytics.labels.bot_source.verified_bot",
					"Cloudflare Service": "security_analytics.labels.bot_source.cloudflare_service"
				},
				s = {
					ASN: "asn",
					COUNTRY: "country",
					IP: "ip",
					IP_RANGE: "iprange",
					SECURITY_LEVEL: "securitylevel",
					VALIDATION: "validation",
					ZONE_LOCKDOWN: "zonelockdown",
					WAF: "waf",
					UA_BLOCK: "uablock",
					RATE_LIMIT: "ratelimit",
					FIREWALL_RULES: "firewallrules",
					BIC: "bic",
					HOT: "hot",
					L7DOS: "l7ddos",
					BOT_FIGHT_MODE: "botFight",
					API_SHIELD: "apiShield",
					API_SHIELD_SCHEMA_VALIDATION: "apiShieldSchemaValidation",
					API_SHIELD_TOKEN_VALIDATION: "apiShieldTokenValidation",
					API_SHIELD_SEQUENCE_MITIGATION: "apiShieldSequenceMitigation",
					FIREWALL_CUSTOM: "firewallCustom",
					FIREWALL_MANAGED: "firewallManaged",
					SDD: "sdd",
					DLP: "dlp",
					BOT_MANAGEMENT: "botManagement",
					UNKNOWN: "unknown"
				},
				d = {
					[s.ASN]: "firewall.analytics.services.labels.asn",
					[s.COUNTRY]: "firewall.analytics.services.labels.country",
					[s.IP]: "firewall.analytics.services.labels.ip",
					[s.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[s.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[s.VALIDATION]: "firewall.analytics.services.labels.validation",
					[s.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[s.WAF]: "firewall.analytics.services.labels.waf",
					[s.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[s.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[s.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[s.BIC]: "firewall.analytics.services.labels.bic",
					[s.HOT]: "firewall.analytics.services.labels.hot",
					[s.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[s.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[s.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[s.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[s.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[s.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[s.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[s.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[s.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[s.DLP]: "firewall.analytics.services.labels.dlp",
					[s.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				}
		},
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				DC: function() {
					return g
				},
				Ff: function() {
					return c
				},
				Lz: function() {
					return i
				},
				RM: function() {
					return _
				},
				Ss: function() {
					return r
				},
				dR: function() {
					return a
				},
				gW: function() {
					return v
				},
				r5: function() {
					return u
				},
				y$: function() {
					return n
				},
				zs: function() {
					return d
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				s = t("../react/pages/security/analytics/resources/labels.ts");
			const d = ["block", "challenge", "jschallenge", "managed_challenge"],
				a = {
					label: "security_analytics.filters.mitigated",
					parse: m => m === "true" || m === !0,
					urlParam: "mitigated",
					type: e.kE.select,
					options: [!0, !1],
					operators: [o.Gn.equals, o.Gn.notEquals],
					rawLogField: "securityAction"
				},
				v = {
					label: "security_analytics.filters.security_action",
					urlParam: "mitigation-action",
					type: e.kE.select,
					options: Object.keys(s.Bt).filter(m => !["challenge_failed", "jschallenge_failed"].includes(m)),
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					rawLogField: "securityAction"
				},
				c = {
					label: "security_analytics.filters.security_source",
					urlParam: "mitigation-service",
					type: e.kE.select,
					options: Object.keys(s.e_).filter(m => m !== "unknown"),
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					rawLogField: "securitySources"
				};
			let u = function(m) {
				return m.MITIGATED_BY_WAF = "mitigatedByWAF", m.SERVED_BY_CLOUDFLARE = "servedByCloudflare", m.SERVED_BY_ORIGIN = "servedByOrigin", m
			}({});
			const _ = {
					type: "primary",
					inverted: !0,
					px: 2,
					py: 1,
					fontSize: 1,
					ml: "auto"
				},
				n = {
					botScore: "botscore",
					botScoreSrcName: "botscoresrc",
					botDetectionIds: "botdetectionids",
					cacheStatus: "cachecachestatus",
					clientASNDescription: void 0,
					rayName: "rayid",
					clientAsn: "clientasn",
					clientCountryName: "clientcountry",
					clientIP: "clientip",
					clientRequestHTTPHost: "clientrequesthost",
					clientRequestHTTPMethodName: "clientrequestmethod",
					clientRequestHTTPProtocol: "clientrequestprotocol",
					clientRequestPath: "clientrequestpath",
					clientRequestQuery: "clientrequesturi",
					clientRequestReferer: "clientrequestreferer",
					clientRequestScheme: "clientrequestscheme",
					contentScanNumMaliciousObj: "contentscanobjresults",
					contentScanNumObj: "contentscanobjresults",
					contentScanObjTypes: "contentscanobjtypes",
					datetime: "edgestarttimestamp",
					edgeResponseContentTypeName: "edgeresponsecontenttype",
					edgeResponseStatus: "edgeresponsestatus",
					firewallForAiPiiCategories: void 0,
					ja3Hash: "ja3hash",
					ja4: void 0,
					ja4Signals: void 0,
					leakedCredentialCheckResult: void 0,
					originResponseStatus: "originresponsestatus",
					userAgent: "clientrequestuseragent",
					securityAction: "securityactions",
					securitySource: "securitysources",
					wafAttackScore: "wafattackscore",
					wafAttackScoreClass: void 0,
					wafRceAttackScore: "wafrceattackscore",
					wafSqliAttackScore: "wafsqliattackscore",
					wafXssAttackScore: "wafxssattackscore",
					xRequestedWith: "clientxrequestedwith",
					zoneTag: void 0,
					zoneName: "zonename"
				},
				r = {
					suspicious_login_failure: 201326592,
					suspicious_login_attempt: 201326593
				},
				i = "security-analytics-log-explorer";
			let g = function(m) {
				return m.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', m.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', m.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', m.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', m.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', m.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", m.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", m.OPEN_SIDE_DRAWER = "open security analytics side drawer", m.CLOSE_SIDE_DRAWER = "close security analytics side drawer", m
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Fj: function() {
					return u
				},
				kq: function() {
					return c
				},
				xr: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(m) {
						return Object.getOwnPropertyDescriptor(i, m).enumerable
					})), g.forEach(function(m) {
						d(n, m, i[m])
					})
				}
				return n
			}

			function d(n, r, i) {
				return r = a(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function a(n) {
				var r = v(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const u = {
					[c.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[c.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[c.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[c.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[c.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[c.JWT_VALIDATION]: {
						viewJWTRules: "view a page of jwt rules",
						addJWTRule: "add a jwt rule",
						editJWTRule: "edit a jwt rule",
						deleteJWTRule: "delete a jwt rule",
						reprioritizeJWTRule: "reprioritize a jwt rule",
						viewJWTConfigs: "view jwt configs",
						addJWTConfig: "add a jwt config",
						editJWTConfig: "edit a jwt config",
						deleteJWTConfig: "delete a jwt config"
					},
					[c.SETTINGS]: {
						redirectToFirewallRulesTemplate: "redirect to firewall rules",
						redirectToPages: "redirect to uploaded developer portal on pages",
						listSessionIdentifiers: "list session identifiers",
						listRequestsContainingSessionIdentifiers: "list requests containing session identifiers",
						addOrRemoveSessionIdentifiers: "add or remove session identifiers",
						listAllFallthroughSettings: "list fallthrough settings",
						listAllFallthroughSchemas: "list fallthrough schemas",
						redirectToCustomRules: "redirect to custom rules from create fallthrough template"
					}
				},
				_ = ({
					name: n,
					category: r = "user journey",
					product: i = c.MAIN,
					productName: g,
					additionalData: m
				}) => {
					o().sendEvent(n, s({
						category: r,
						product: i,
						productName: g
					}, m || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Fm: function() {
					return d
				},
				N3: function() {
					return e
				},
				UN: function() {
					return s
				},
				h1: function() {
					return o
				}
			});
			let e = function(a) {
					return a.INITIAL_FETCH_SCORES = "view bots scores distribution", a.FETCH_CONFIGURATION = "view bots configuration page", a.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", a.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", a.UPDATE_SETTINGS = "update bots settings", a.DELETE_RULE = "delete bots ruleset", a.UPDATE_RULE = "update bots ruleset", a.FETCH_RULES = "view bots ruleset", a.CONFIGURE_BOT_MANAGEMENT = "view bots management", a.WAF_RULES_REDIRECT = "redirect waf rules", a.CHANGED_ZONE_SETTINGS = "change zone setting", a
				}({}),
				o = function(a) {
					return a.PROVIDED_TEMPLATE = "provided template link in detection card", a.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", a.USE_TEMPLATE = "use template", a.CREATE_FIREWALL_RULE = "create firewall rule", a.WAF_RULES = "waf rules", a
				}({});
			const s = "user journey",
				d = "Bots"
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				AL: function() {
					return c
				},
				NC: function() {
					return d
				},
				WZ: function() {
					return v
				},
				YC: function() {
					return a
				},
				aR: function() {
					return s
				},
				nz: function() {
					return o
				}
			});
			var e = t("../react/pages/security/detections/pages/root/components/new-settings/resources/types.ts");
			const o = {
					[e.MQ.WebApplicationExploits]: "settings.tabs.web-application-exploits",
					[e.MQ.DdosAttacks]: "settings.tabs.ddos-attacks",
					[e.MQ.BotTraffic]: "settings.tabs.bot-traffic",
					[e.MQ.ApiAbuse]: "settings.tabs.api-abuse",
					[e.MQ.ClientSideAbuse]: "settings.tabs.client-side-abuse",
					[e.MQ.DomainSettings]: "settings.filters.domain-settings",
					[e.MQ.WebAssetsAndEndpoints]: "settings.filters.web-assets-and-endpoints",
					[e.MQ.RuleTemplates]: "settings.filters.rule-templates",
					[e.MQ.Detections]: "settings.filters.detections",
					[e.MQ.General]: "settings.filters.general"
				},
				s = {
					[e.MQ.WebApplicationExploits]: "security-waf",
					[e.MQ.DdosAttacks]: "retarget",
					[e.MQ.BotTraffic]: "security-bots",
					[e.MQ.ApiAbuse]: "api-security",
					[e.MQ.ClientSideAbuse]: "user-multi"
				},
				d = {
					300: {
						label: "time.num_minutes",
						smartCount: 5
					},
					900: {
						label: "time.num_minutes",
						smartCount: 15
					},
					1800: {
						label: "time.num_minutes",
						smartCount: 30
					},
					2700: {
						label: "time.num_minutes",
						smartCount: 45
					},
					3600: {
						label: "time.num_hours",
						smartCount: 1
					},
					7200: {
						label: "time.num_hours",
						smartCount: 2
					},
					10800: {
						label: "time.num_hours",
						smartCount: 3
					},
					14400: {
						label: "time.num_hours",
						smartCount: 4
					},
					28800: {
						label: "time.num_hours",
						smartCount: 8
					},
					57600: {
						label: "time.num_hours",
						smartCount: 16
					},
					86400: {
						label: "time.num_days",
						smartCount: 1
					},
					604800: {
						label: "time.num_weeks",
						smartCount: 1
					},
					2592e3: {
						label: "time.num_months",
						smartCount: 1
					},
					31536e3: {
						label: "time.num_years",
						smartCount: 1
					}
				};
			let a = function(u) {
				return u.LOAD_SETTINGS = "load setting", u.OPEN_SIDE_MODAL_SETTING = "open side modal setting", u.CLOSE_SIDE_MODAL_SETTING = "close side modal setting", u.CHANGE_SETTING = "change setting", u.FILTER_SETTING = "filter setting", u
			}({});
			const v = {
					id: e.At.ManagedRuleset,
					titleKey: "settings.cards.managed-ruleset.title",
					descriptionKey: "settings.cards.managed-ruleset.description",
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/",
					oldDescription: ["WAF"],
					tabs: [e.MQ.WebApplicationExploits, e.MQ.DdosAttacks],
					filters: [e.MQ.Detections],
					isGeneral: !1
				},
				c = {
					id: e.At.OwaspCore,
					titleKey: "settings.cards.owasp-core.title",
					descriptionKey: "settings.cards.owasp-core.description",
					oldDescription: ["WAF"],
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/reference/owasp-core-ruleset/",
					tabs: [e.MQ.WebApplicationExploits],
					filters: [e.MQ.Detections],
					isGeneral: !1
				}
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/types.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				At: function() {
					return d
				},
				MQ: function() {
					return e
				},
				fo: function() {
					return s
				}
			});
			let e = function(a) {
					return a.WebApplicationExploits = "web-application-exploits", a.DdosAttacks = "ddos-attacks", a.BotTraffic = "bot-traffic", a.ApiAbuse = "api-abuse", a.ClientSideAbuse = "client-side-abuse", a.DomainSettings = "domain-settings", a.WebAssetsAndEndpoints = "web-assets-and-endpoints", a.RuleTemplates = "rule-templates", a.Detections = "detections", a.General = "general", a
				}({}),
				o = function(a) {
					return a.DomainSettings = "domain-settings", a.WebAssetsAndEndpoints = "web-assets-and-endpoints", a.RuleTemplates = "rule-templates", a.Detections = "detections", a
				}({}),
				s = function(a) {
					return a.Tab = "tabs", a.Filters = "filters", a.Search = "search", a
				}({}),
				d = function(a) {
					return a.OptOut = "opt-out", a.AILabyrinth = "ai-labyrinth", a.BlockAIBots = "block-ai-bots", a.BrowserIntegrity = "browser-integrity", a.ChallengePassage = "challenge-passage", a.ClientCertificates = "client-certificates", a.CloudflareManagedRuleset = "cloudflare-managed-ruleset", a.CreateDeveloperPortal = "create-developer-portal", a.CustomFallthrough = "custom-fallthrough", a.EndpointDiscovery = "endpoint-discovery", a.FirewallAi = "firewall-ai", a.HttpDdos = "http-ddos", a.IpAccessRules = "ip-access-rules", a.IpLists = "ip-lists", a.JwtValidation = "jwt-validation", a.Labels = "labels", a.LeakedCredentialCheck = "leaked-credential-check", a.MaliciousUploadDetection = "malicious-upload-detection", a.ManagedRuleset = "managed-ruleset", a.Mtls = "mtls", a.NetworkDdos = "network-ddos", a.OwaspCore = "owasp-core", a.RateLimitAuthentication = "rate-limit-authentication", a.ReplaceInsecureJavascript = "replace-insecure-javascript", a.RobotsTxt = "robots-txt", a.SequenceDetection = "sequence-detection", a.SchemaDiscovery = "schema-discovery", a.SchemaValidation = "schema-validation", a.SecurityLevel = "security-level", a.SecurityTxt = "security-txt", a.SensitiveDataDetection = "sensitive-data-detection", a.SessionIdentifiers = "session-identifiers", a.SslDdos = "ssl-ddos", a.TokenConfigurations = "token-configurations", a.UserAgentBlocking = "user-agent-blocking", a.VolumetricAbuse = "volumetric-abuse", a.ZoneLockdown = "zone-lockdown", a.ContinuousScriptMonitoring = "continuous-script-monitoring", a.BotManagement = "bot-management", a.SuperBotFightMode = "super-bot-fight-mode", a.BotFightMode = "bot-fight-mode", a
				}({})
		},
		"../react/pages/security/overview/resources/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				AZ: function() {
					return d
				},
				BQ: function() {
					return a
				},
				Ht: function() {
					return s
				},
				Kx: function() {
					return e
				},
				NJ: function() {
					return c
				},
				S: function() {
					return o
				},
				oD: function() {
					return v
				}
			});
			let e = function(u) {
				return u.NAME = "description", u.SOURCE = "source", u.LAST_UPDATE = "lastUpdatedAt", u.ACTIVITY = "activity", u
			}({});
			const o = 5;
			let s = function(u) {
					return u.EXTERNAL_DOCUMENTATION = "external_documentation", u.LINK_TO_MANAGED = "link_to_managed_rules", u.LINK_TO_EVENTS = "link_to_security_events", u.LINK_TO_DDOS = "link_to_ddos", u.LINK_BOT_MGMT = "link_to_bot_mgmt", u.LINK_TO_AI_AUDIT = "link_to_ai_audit", u.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", u.LINK_TO_PAGE_SHIELD = "link_to_page_shield", u.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", u.LINK_TO_SECURITY_EVENTS = "link_to_security_events", u.LINK_TO_IP_RULE = "link_to_ip_rule", u.LINK_TO_CONFIGURATION = "link_to_configuration", u.LINK_TO_UPLOAD_SCHEMAS = "link_to_upload_schemas", u.LINK_TO_WEB_ASSETS = "link_to_web_assets", u.LINK_TO_DOMAINS = "link_to_domains", u
				}({}),
				d = function(u) {
					return u.LOAD_INSIGHTS = "load overview action items", u.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", u.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", u.CLICK_ACTION_INSIGHT = "click overview action item suggestion", u
				}({});
			const a = "security-overview-all-suggestions",
				v = [{
					title: "overview.modules.tab",
					url: "/"
				}, {
					title: "overview.all_suggestions.tab",
					url: "/all"
				}];
			let c = function(u) {
				return u.ARCHIVED = "archived", u.FRAUD_AND_ACCOUNT_ABUSE = "fraud_account_abuse", u
			}({})
		},
		"../react/pages/security/page-shield/resources/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				CP: function() {
					return D
				},
				FV: function() {
					return re
				},
				KH: function() {
					return A
				},
				Ks: function() {
					return K
				},
				Lj: function() {
					return R
				},
				MC: function() {
					return r
				},
				Mq: function() {
					return k
				},
				OV: function() {
					return te
				},
				Oq: function() {
					return I
				},
				QM: function() {
					return f
				},
				SI: function() {
					return N
				},
				SJ: function() {
					return O
				},
				Sk: function() {
					return S
				},
				Ti: function() {
					return U
				},
				Uc: function() {
					return w
				},
				Uq: function() {
					return u
				},
				Uv: function() {
					return ne
				},
				V0: function() {
					return _
				},
				VT: function() {
					return m
				},
				YC: function() {
					return M
				},
				j$: function() {
					return h
				},
				qc: function() {
					return b
				},
				sV: function() {
					return y
				},
				sW: function() {
					return z
				},
				u8: function() {
					return g
				},
				v5: function() {
					return n
				},
				xg: function() {
					return F
				},
				yd: function() {
					return C
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				s = t("../react/pages/security/page-shield/resources/types.ts");

			function d(G) {
				for (var H = 1; H < arguments.length; H++) {
					var Z = arguments[H] != null ? Object(arguments[H]) : {},
						$ = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(Z).filter(function(J) {
						return Object.getOwnPropertyDescriptor(Z, J).enumerable
					})), $.forEach(function(J) {
						a(G, J, Z[J])
					})
				}
				return G
			}

			function a(G, H, Z) {
				return H = v(H), H in G ? Object.defineProperty(G, H, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[H] = Z, G
			}

			function v(G) {
				var H = c(G, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function c(G, H) {
				if (typeof G != "object" || G === null) return G;
				var Z = G[Symbol.toPrimitive];
				if (Z !== void 0) {
					var $ = Z.call(G, H || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(G)
			}
			const u = 50,
				_ = 9,
				n = "copy script url page shield",
				r = "disable page shield",
				i = "click documentation link",
				g = "enable page shield",
				m = "filter search page shield",
				p = "filter search view all page shield",
				b = "hover score tooltip page shield",
				O = "open alert modal page shield",
				h = "change pagination page shield",
				l = "close script modal page shield",
				C = "open script modal page shield",
				f = "select alert type page shield",
				w = "sort column page shield",
				k = {
					CLICK_CREATE_POLICY: "click create policy form link",
					CLICK_ENABLE_POLICY_TOGGLE: "enable policy toggle",
					CLICK_EDIT_POLICY: "click edit policy",
					CLICK_BACK_POLICY: "click back to all policies link",
					CLICK_ADD_SOURCES: "click add sources",
					CLICK_REFRESH_SUGGESTIONS: "click refresh suggestions",
					SELECT_DIRECTIVE_DEFAULT_VALUE: "select directive default value",
					SELECT_DIRECTIVE_VALUE: "select directive value",
					EXPAND_DIRECTIVE_VALUE: "expand directive",
					DEPLOY_POLICY: "deploy policy",
					DELETE_POLICY: "delete policy"
				},
				A = {
					STARTS_WITH: o.Gn.startsWith,
					ENDS_WITH: o.Gn.endsWith,
					EQUALS: o.Gn.equals,
					CONTAINS: o.Gn.contains,
					DOES_NOT_CONTAIN: o.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: o.Gn.in
				},
				I = {
					status: {
						example: "active",
						type: e.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [A.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: e.kE.string,
						options: ["true", "false"],
						operators: [A.CONTAINS, A.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [A.EQUALS],
						type: e.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: e.kE.string,
						operators: [A.INCLUDES, A.ENDS_WITH, A.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				D = d({}, I, {
					urls: d({}, I.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				y = {
					type: {
						example: "first_party",
						type: e.kE.select,
						options: ["first_party", "unknown"],
						label: "common.type",
						urlParam: "type",
						operators: [o.Gn.equals]
					},
					name: {
						example: "cookie_1",
						operators: [o.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.name",
						urlParam: "name"
					},
					domain: {
						example: "hostname.com",
						operators: [o.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.domain",
						urlParam: "domain"
					},
					path: {
						example: "/",
						operators: [o.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.path",
						urlParam: "path"
					},
					same_site: {
						operators: [o.Gn.equals],
						type: e.kE.select,
						options: ["lax", "strict", "none"],
						label: "firewall.page_shield.same_site",
						urlParam: "same_site"
					},
					http_only: {
						operators: [o.Gn.equals],
						type: e.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.http_only",
						urlParam: "http_only"
					},
					secure: {
						operators: [o.Gn.equals],
						type: e.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.secure",
						urlParam: "secure"
					}
				};
			let P = function(G) {
				return G.SECURITY_THREATS = "Security Threats", G.C2_BOTNET = "C2 & Botnet", G.CRYPTOMINING = "Cryptomining", G.MALWARE = "Malware", G.PHISHING = "Phishing", G.SPYWARE = "Spyware", G.DGA_DOMAINS = "DGA Domains", G.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", G
			}({});
			const S = "https://www.cloudflare.com/plans/enterprise/contact/",
				M = {
					[s.I1.BASE_URI]: "page_shield.policies.form.base_uri",
					[s.I1.CHILD]: "page_shield.policies.form.child",
					[s.I1.CONNECT]: "page_shield.policies.form.connections",
					[s.I1.DEFAULT]: "page_shield.policies.form.default",
					[s.I1.FONT]: "page_shield.policies.form.font",
					[s.I1.FORM_ACTION]: "page_shield.policies.form.form",
					[s.I1.FRAME]: "page_shield.policies.form.frame",
					[s.I1.FRAME_ANCESTORS]: "page_shield.policies.form.frame_ancestors",
					[s.I1.IMAGE]: "page_shield.policies.form.img",
					[s.I1.MANIFEST]: "page_shield.policies.form.manifest",
					[s.I1.MEDIA]: "page_shield.policies.form.media",
					[s.I1.OBJECT]: "page_shield.policies.form.object",
					[s.I1.SCRIPT]: "page_shield.policies.form.script",
					[s.I1.STYLE]: "page_shield.policies.form.style",
					[s.I1.UPGRADE_INSECURE_REQUESTS]: "page_shield.policies.form.upgrade_insecure_requests",
					[s.I1.WORKER]: "page_shield.policies.form.worker"
				},
				F = {
					[s.I1.BASE_URI]: "firewall.page_shield.policies.table.base_uri",
					[s.I1.CHILD]: "firewall.page_shield.policies.table.child",
					[s.I1.CONNECT]: "firewall.page_shield.policies.table.connections",
					[s.I1.DEFAULT]: "firewall.page_shield.policies.table.default",
					[s.I1.FONT]: "firewall.page_shield.policies.table.font",
					[s.I1.FORM_ACTION]: "firewall.page_shield.policies.table.form",
					[s.I1.FRAME]: "firewall.page_shield.policies.table.frame",
					[s.I1.FRAME_ANCESTORS]: "firewall.page_shield.policies.table.frame_ancestors",
					[s.I1.IMAGE]: "firewall.page_shield.policies.table.img",
					[s.I1.MANIFEST]: "firewall.page_shield.policies.table.manifest",
					[s.I1.MEDIA]: "firewall.page_shield.policies.table.media",
					[s.I1.OBJECT]: "firewall.page_shield.policies.table.object",
					[s.I1.SCRIPT]: "firewall.page_shield.policies.table.script",
					[s.I1.SCRIPT_ELEM]: "firewall.page_shield.policies.table.script",
					[s.I1.STYLE]: "firewall.page_shield.policies.table.style",
					[s.I1.STYLE_ELEM]: "firewall.page_shield.policies.table.style",
					[s.I1.UPGRADE_INSECURE_REQUESTS]: "firewall.page_shield.policies.table.upgrade_insecure_requests",
					[s.I1.WORKER]: "firewall.page_shield.policies.table.worker"
				},
				ne = {
					[s.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[s.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[s.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[s.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[s.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				te = {
					[s.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[s.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				re = {
					CONFIGURE_PAGE_SHIELD: "configure page shield",
					VIEW_PAGE_SHIELD_SETTINGS: "view page shield settings",
					VIEW_DETECTED_SCRIPTS: "view detected scripts",
					VIEW_DETECTED_CONNECTIONS: "view detected connections",
					VIEW_DETECTED_COOKIES: "view detected cookies",
					MANAGE_PAGE_SHIELD_POLICY: "manage page shield policy",
					VIEW_PAGE_SHIELD_POLICIES: "view page shield policies",
					SHOW_MUTABLE_VERSION_TOOLTIP: "show mutable version warning tooltip",
					OPEN_MUTABLE_VERSION_TOOLTIP: "open mutable version warning tooltip"
				},
				z = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				N = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				R = {
					[s.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[s.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[s.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				K = {
					[s.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[s.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[s.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				U = {
					[s.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[s.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[s.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				CP: function() {
					return d.CP
				},
				Ks: function() {
					return d.Ks
				},
				sV: function() {
					return d.sV
				},
				SI: function() {
					return d.SI
				},
				v5: function() {
					return d.v5
				},
				xg: function() {
					return d.xg
				},
				YC: function() {
					return d.YC
				},
				MC: function() {
					return d.MC
				},
				Xe: function() {
					return f.Xe
				},
				u8: function() {
					return d.u8
				},
				Oq: function() {
					return d.Oq
				},
				VT: function() {
					return d.VT
				},
				qc: function() {
					return d.qc
				},
				V0: function() {
					return d.V0
				},
				Lj: function() {
					return d.Lj
				},
				k2: function() {
					return f.k2
				},
				$g: function() {
					return f.$g
				},
				SJ: function() {
					return d.SJ
				},
				KH: function() {
					return d.KH
				},
				Mq: function() {
					return d.Mq
				},
				FV: function() {
					return d.FV
				},
				j$: function() {
					return d.j$
				},
				I1: function() {
					return f.I1
				},
				Wq: function() {
					return f.Wq
				},
				jf: function() {
					return f.jf
				},
				sW: function() {
					return d.sW
				},
				Uq: function() {
					return d.Uq
				},
				yd: function() {
					return d.yd
				},
				QM: function() {
					return d.QM
				},
				Uc: function() {
					return d.Uc
				},
				R$: function() {
					return f.R$
				},
				Sk: function() {
					return d.Sk
				},
				gY: function() {
					return h
				},
				SE: function() {
					return _
				},
				m: function() {
					return b
				},
				xP: function() {
					return p
				},
				xl: function() {
					return m
				},
				Tb: function() {
					return g
				},
				h3: function() {
					return l
				},
				xq: function() {
					return J
				},
				SQ: function() {
					return K
				},
				C0: function() {
					return U
				},
				av: function() {
					return A
				},
				W3: function() {
					return w
				},
				WO: function() {
					return P
				},
				Dk: function() {
					return F
				},
				we: function() {
					return te
				},
				Yt: function() {
					return N
				},
				ex: function() {
					return z
				},
				E1: function() {
					return re
				},
				dm: function() {
					return D
				},
				oK: function() {
					return S
				},
				qZ: function() {
					return R
				},
				_4: function() {
					return G
				},
				qo: function() {
					return H
				},
				CB: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(o),
				d = t("../react/pages/security/page-shield/resources/constants.ts");

			function a(L) {
				for (var W = 1; W < arguments.length; W++) {
					var X = arguments[W] != null ? Object(arguments[W]) : {},
						ie = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(X).filter(function(V) {
						return Object.getOwnPropertyDescriptor(X, V).enumerable
					})), ie.forEach(function(V) {
						v(L, V, X[V])
					})
				}
				return L
			}

			function v(L, W, X) {
				return W = c(W), W in L ? Object.defineProperty(L, W, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[W] = X, L
			}

			function c(L) {
				var W = u(L, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function u(L, W) {
				if (typeof L != "object" || L === null) return L;
				var X = L[Symbol.toPrimitive];
				if (X !== void 0) {
					var ie = X.call(L, W || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)(L)
			}
			const _ = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", L => (s().sendEvent(d.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), L)),
				n = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", L => (s().sendEvent(d.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), L)),
				r = (L, W) => {
					var X;
					return JSON.stringify(a({}, W == null || (X = W[0]) === null || X === void 0 ? void 0 : X.parameters, L))
				};
			let i = "";
			const g = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("start", (L, W, X) => (i = r(W, X), L)).on("success", L => (s().sendEvent(d.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), L)).on("error", (L, W, X) => r(W, X) === i ? L : {
					type: "noop"
				}),
				m = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				p = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", L => (s().sendEvent(d.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), L)),
				b = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				O = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", L => (s().sendEvent(d.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), L)),
				h = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				l = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var C = t("../react/app/redux/normalizer.js"),
				f = t("../react/pages/security/page-shield/resources/types.ts");
			const w = L => L.pageShield.configuration,
				k = L => {
					var W;
					return (W = L.pageShield.configuration.data) === null || W === void 0 ? void 0 : W.enabled
				},
				A = L => {
					var W;
					return (W = w(L)) === null || W === void 0 ? void 0 : W.data
				},
				I = L => L.pageShield.scripts,
				D = L => L.pageShield.script,
				y = L => L.pageShield.connections,
				P = L => L.pageShield.connection,
				S = (0, C.P1)("pageShieldScripts", I),
				M = (0, C.P1)("pageShieldScript", D),
				F = (0, C.P1)("pageShieldConnections", y),
				ne = (0, C.P1)("pageShieldConnection", P),
				te = (L, W) => L === f.Wq.SCRIPT_MONITOR ? S(W) || [] : F(W) || [],
				re = (L, W) => L === f.Wq.SCRIPT_MONITOR ? I(W) || [] : y(W) || [],
				z = (L, W) => L === f.Wq.SCRIPT_MONITOR ? M(W) : ne(W),
				N = L => L.pageShield.domainIntel,
				R = L => L.pageShield.whoIsRecord,
				K = (L, W, X) => {
					var ie;
					const V = Object.values(X).map(oe => ({
						key: oe,
						label: d.Uv[oe],
						score: L[oe]
					})).filter(oe => oe.score !== void 0 && oe.score <= W);
					return W === d.V0 && V.length === 0 && ((ie = L.js_integrity_score) !== null && ie !== void 0 ? ie : 100) <= W && V.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), V
				},
				U = (L, W) => Object.values(W).filter(X => L[X] === !0).map(X => d.OV[X]),
				G = L => L === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				H = (L, W) => L[f.$g.MagecartScore] !== void 0 && L[f.$g.MagecartScore] <= W || L[f.$g.MalwareScore] !== void 0 && L[f.$g.MalwareScore] <= W || L[f.$g.CryptominingScore] !== void 0 && L[f.$g.CryptominingScore] <= W || L.js_integrity_score !== void 0 && L.js_integrity_score <= W,
				Z = ["cdn.jsdelivr.net", "unpkg.com"],
				$ = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				J = L => {
					if (L.includes("@latest")) {
						const X = L.split("@latest");
						if (X.length != 2) return;
						const ie = X[0].length,
							V = ie + "@latest".length;
						return [ie, V]
					}
					if (!!Z.some(X => L.includes(X)))
						for (const X of $) {
							const ie = L.match(X);
							if (!ie) continue;
							const V = ie.index;
							if (V === 0) return null;
							const oe = V + ie[0].length;
							return [V, oe]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$g: function() {
					return _
				},
				I1: function() {
					return a
				},
				R$: function() {
					return n
				},
				Wq: function() {
					return u
				},
				Xe: function() {
					return v
				},
				jf: function() {
					return c
				},
				k2: function() {
					return r
				}
			});

			function e(i) {
				for (var g = 1; g < arguments.length; g++) {
					var m = arguments[g] != null ? Object(arguments[g]) : {},
						p = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(m).filter(function(b) {
						return Object.getOwnPropertyDescriptor(m, b).enumerable
					})), p.forEach(function(b) {
						o(i, b, m[b])
					})
				}
				return i
			}

			function o(i, g, m) {
				return g = s(g), g in i ? Object.defineProperty(i, g, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[g] = m, i
			}

			function s(i) {
				var g = d(i, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function d(i, g) {
				if (typeof i != "object" || i === null) return i;
				var m = i[Symbol.toPrimitive];
				if (m !== void 0) {
					var p = m.call(i, g || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(i)
			}
			let a = function(i) {
				return i.BASE_URI = "base-uri", i.CHILD = "child-src", i.CONNECT = "connect-src", i.DEFAULT = "default-src", i.FONT = "font-src", i.FORM_ACTION = "form-action", i.FRAME = "frame-src", i.FRAME_ANCESTORS = "frame-ancestors", i.IMAGE = "img-src", i.MANIFEST = "manifest-src", i.MEDIA = "media-src", i.OBJECT = "object-src", i.SCRIPT = "script-src", i.SCRIPT_ELEM = "script-src-elem", i.STYLE = "style-src", i.STYLE_ELEM = "style-src-elem", i.WORKER = "worker-src", i.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", i
			}({});
			const v = e({}, a, {
				BLOCK_ALL_MIXED_CONTENT: "block-all-mixed-content",
				DISOWN_OPENER: "disown-opener",
				NAVIGATE_TO: "navigate-to",
				PLUGIN_TYPES: "plugin-types",
				PREFETCH_SRC: "prefetch-src",
				REFERRER: "referrer",
				REFLECTED_XSS: "reflected-xss",
				REPORT_TO: "report-to",
				REPORT_URI: "report-uri",
				REQUIRE_SRI_FOR: "require-sri-for",
				REQUIRE_TRUSTED_TYPES_FOR: "require-trusted-types-for",
				SANDBOX: "sandbox",
				TRUSTED_TYPES: "trusted-types",
				WEBRTC: "webrtc"
			});
			let c = function(i) {
					return i.MONITOR = "monitor", i.POLICIES = "policies", i.SETTINGS = "settings", i
				}({}),
				u = function(i) {
					return i.SCRIPT_MONITOR = "script", i.CONNECTION_MONITOR = "connection", i.COOKIE_MONITOR = "cookie", i
				}({}),
				_ = function(i) {
					return i.CryptominingScore = "cryptomining_score", i.MalwareScore = "malware_score", i.MagecartScore = "magecart_score", i
				}({}),
				n = function(i) {
					return i.DataflowScore = "dataflow_score", i.ObfuscationScore = "obfuscation_score", i
				}({}),
				r = function(i) {
					return i.DomainMalicious = "domain_reported_malicious", i.UrlMalicious = "url_reported_malicious", i
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				_C: function() {
					return p
				},
				_R: function() {
					return b
				},
				dY: function() {
					return h
				},
				fy: function() {
					return f
				},
				ji: function() {
					return m
				},
				pR: function() {
					return O
				},
				pV: function() {
					return w
				},
				rj: function() {
					return C
				},
				yR: function() {
					return k
				},
				zf: function() {
					return l
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				o = t("../../../common/util/types/src/api/phases/fields.tsx"),
				s = t("webpack/sharing/consume/default/react/react"),
				d = t.n(s),
				a = t("../react/utils/translator.tsx"),
				v = t("../react/pages/security/resources/types.ts"),
				c = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				_ = t("../../../../node_modules/react/jsx-runtime.js");

			function n(A) {
				for (var I = 1; I < arguments.length; I++) {
					var D = arguments[I] != null ? Object(arguments[I]) : {},
						y = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(D).filter(function(P) {
						return Object.getOwnPropertyDescriptor(D, P).enumerable
					})), y.forEach(function(P) {
						r(A, P, D[P])
					})
				}
				return A
			}

			function r(A, I, D) {
				return I = i(I), I in A ? Object.defineProperty(A, I, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[I] = D, A
			}

			function i(A) {
				var I = g(A, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function g(A, I) {
				if (typeof A != "object" || A === null) return A;
				var D = A[Symbol.toPrimitive];
				if (D !== void 0) {
					var y = D.call(A, I || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(A)
			}
			const m = 10;
			let p = function(A) {
					return A.MTLS_ACCESS = "mTLS-enforced authentication", A.ZONE_LOCKDOWN = "Zone lockdown", A.USER_AGENT = "User agent blocking", A.EMAIL_VALIDITY = "Disposable email checks", A.IP_BASED = "IP-based rule", A.GEOGRAPHY_BASE = "Geography-based rule", A
				}({}),
				b = function(A) {
					return A.LEAKED_CREDENTIALS = "Leaked Credentials Checks", A
				}({});
			const O = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				h = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: p.GEOGRAPHY_BASE,
					trackedEvent: O.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: p.IP_BASED,
					trackedEvent: O.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: p.USER_AGENT,
					trackedEvent: O.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: p.ZONE_LOCKDOWN,
					trackedEvent: O.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				l = {
					[v.X.UI_SECTION]: A => ({
						[p.MTLS_ACCESS]: {
							ruleName: p.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: (0, _.jsx)(a.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: (0, _.jsx)(a.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${A.account.id}/${A.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[p.ZONE_LOCKDOWN]: {
							ruleName: p.ZONE_LOCKDOWN,
							displayName: (0, _.jsx)(a.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: (0, _.jsx)(a.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [u.ZC, e.QV],
								applyMarkdown: !0,
								componentProps: [{
									display: "inline"
								}, {
									to: `/${A.account.id}/configurations/lists`
								}]
							})
						},
						[p.GEOGRAPHY_BASE]: {
							ruleName: p.GEOGRAPHY_BASE,
							displayName: (0, _.jsx)(a.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: (0, _.jsx)(a.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[p.IP_BASED]: {
							ruleName: p.IP_BASED,
							displayName: (0, _.jsx)(a.cC, {
								id: "custom-rules.templates.rule.ip_base.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: (0, _.jsx)(a.cC, {
								id: "custom-rules.templates.rule.ip_base.wafRulesOverview",
								applyMarkdown: !0,
								Components: [u.ZC, e.QV],
								componentProps: [{
									display: "inline"
								}, {
									to: `/${A.account.id}/configurations/lists`
								}]
							})
						},
						[p.USER_AGENT]: {
							ruleName: p.USER_AGENT,
							displayName: (0, _.jsx)(a.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: (0, _.jsx)(a.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${A.account.id}/configurations/lists`
								}]
							})
						},
						[p.EMAIL_VALIDITY]: {
							ruleName: p.EMAIL_VALIDITY,
							capability: "security_rules.rules.capability.fraud",
							displayName: (0, _.jsx)(a.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: (0, _.jsx)(a.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[v.X.WAF_RULES]: {
						[p.MTLS_ACCESS]: {
							description: "custom-rules.templates.rule.mtls_access.name",
							expression: '(not cf.tls_client_auth.cert_verified and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.mtls_access.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[p.ZONE_LOCKDOWN]: {
							description: "custom-rules.templates.rule.zone_lockdown.name",
							expression: '(not ip.src in $0 and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.zone_lockdown.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[p.USER_AGENT]: {
							description: "custom-rules.templates.rule.user_agent.name",
							expression: '(http.user_agent eq "BadBot/1.0.2 (+http://bad.bot)")',
							helper: {
								text: "custom-rules.templates.rule.user_agent.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[p.EMAIL_VALIDITY]: {
							description: "custom-rules.templates.rule.disposable_email.name",
							expression: "(cf.fraud_detection.disposable_email)",
							defaultAction: "block",
							emptySelectValue: !0
						},
						[p.GEOGRAPHY_BASE]: {
							description: "custom-rules.templates.rule.geography.name",
							expression: '(ip.src.asnum eq "") or (ip.src.country eq "") or (ip.src.continent eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						},
						[p.IP_BASED]: {
							description: "firewall.tools.toast.ip",
							expression: '(ip.src eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						}
					}
				},
				C = {
					[v.X.WAF_RULES]: {
						[b.LEAKED_CREDENTIALS]: {
							ruleName: b.LEAKED_CREDENTIALS,
							capability: "security_rules.rules.capability.fraud",
							expression: "(cf.waf.credential_check.password_leaked)",
							ratelimit: {
								characteristics: ["ip.src", "cf.colo.id"],
								requests_to_origin: !1,
								requests_per_period: 5,
								period: 10,
								mitigation_timeout: 10
							},
							defaultAction: "block",
							description: "rules.template.rate-limiting.lcc"
						}
					},
					[v.X.UI_SECTION]: {
						[b.LEAKED_CREDENTIALS]: {
							ruleName: b.LEAKED_CREDENTIALS,
							displayName: (0, _.jsx)(a.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: (0, _.jsx)(a.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let f = function(A) {
				return A.DISCOVERY = "discovery", A.SEQUENCES = "sequences", A.SCHEMA_VALIDATION = "schema-validation", A.SETTINGS = "settings", A.API_RULES = "api-rules", A.UPGRADE = "upgrade", A
			}({});
			const w = n({}, c.g, {
				[o.df.HttpRequestFirewallManaged]: n({}, c.g[o.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[o.df.HttpRequestFirewallCustom]: n({}, c.g[o.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[o.df.HttpRateLimit]: n({}, c.g[o.df.HttpRateLimit], {
					DOC_DESCRIPTION: "rate-limiting.doc.description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/rate-limiting-rules/create-zone-dashboard/"
				}),
				ZONE_LOCKDOWN: {
					HEADING: "zone_lockdown_card.title",
					DOC_LINK: "https://developers.cloudflare.com/waf/tools/zone-lockdown",
					DOC_DESCRIPTION: "zone_lockdown_card.doc_description"
				},
				USER_AGENT: {
					HEADING: "user_agent_rules.card.title",
					DOC_LINK: "https://developers.cloudflare.com/waf/tools/user-agent-blocking",
					DOC_DESCRIPTION: "user_agent_rules.card.doc_description"
				},
				IP_ACCESS: {
					HEADING: "firewall.access_rules.package.name",
					DOC_LINK: "https://developers.cloudflare.com/waf/tools/ip-access-rules/",
					DOC_DESCRIPTION: "firewall.access_rules.package.doc_description"
				}
			});
			let k = function(A) {
				return A.APP_SEC_MVP = "app-security-navigation-mvp", A.APP_SEC_DEFAULT_FOR_ALL = "app-security-default-for-all", A
			}({})
		},
		"../react/pages/security/resources/hooks/useUnificationGate.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				D$: function() {
					return l
				},
				Ud: function() {
					return f
				},
				o7: function() {
					return h
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				o = t("webpack/sharing/consume/default/react/react"),
				s = t.n(o),
				d = t("../react/pages/security/resources/constants.tsx"),
				a = t("../react/app/components/Persistence/index.tsx"),
				v = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(v),
				u = t("../react/common/hooks/useActiveState.ts"),
				_ = t("../react/app/components/Persistence/api.ts"),
				n = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				r = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				i = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				g = t.n(i),
				m = t("../react/common/components/ExternalLink.tsx"),
				p = t("../react/utils/translator.tsx"),
				b = t("../node_modules/@cloudflare/elements/es/index.js"),
				O = t("../../../../node_modules/react/jsx-runtime.js");
			const h = () => !!(0, e.Z)(d.yR.APP_SEC_MVP),
				l = () => {
					const {
						flags: w
					} = (0, a.yZ)();
					return {
						isInDefaultAllGate: !!(0, e.Z)(d.yR.APP_SEC_DEFAULT_FOR_ALL),
						hasDefaultAllFlag: !!w.hasEnabledDefaultUnifiedSecurity
					}
				},
				C = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_9Ktoks1h6dU2W7s",
				f = () => {
					const {
						flags: w,
						actions: k
					} = (0, a.yZ)(), {
						t: A
					} = (0, p.QT)(), {
						hasEnabledDefaultUnifiedSecurity: I,
						hasEnabledSecurityNavigation: D
					} = w, y = (0, e.Z)(d.yR.APP_SEC_DEFAULT_FOR_ALL), [P, S] = (0, u.Z)("securityNavStatus"), M = async () => {
						await (0, r.SS)({
							title: (0, O.jsx)(i.Trans, {
								id: "security.opt_in.modal.title"
							}),
							description: (0, O.jsx)(b.ZC, {
								children: (0, O.jsx)(i.Trans, {
									id: "security.opt_in.modal.default_all.description",
									Components: [m.dL],
									componentProps: [{
										to: C,
										target: "_blank",
										rel: "noopener noreferrer",
										display: "inline"
									}]
								})
							}),
							cancelButtonText: A("security.opt_in.modal.confirm"),
							actionButtonText: A("security.opt_in.modal.cancel"),
							destructive: !0
						}) && F()
					}, F = () => {
						k.toggleSecurityNavigation(!I, !0);
						const re = (0, n.jB)(I);
						(0, n.yM)(re, {
							value: !I
						})
					}, ne = (0, o.useCallback)(async () => {
						if (y && I) {
							await M();
							return
						}
						if (y) {
							F();
							return
						}
						k.toggleSecurityNavigation(!D, !1)
					}, [I, D]);
					return {
						setSecurityNav: (0, o.useCallback)(re => {
							if (y && re.flags.hasEnabledDefaultUnifiedSecurity === void 0) {
								S(!0), (0, _.Sp)({
									hasEnabledDefaultUnifiedSecurity: !0,
									hasEnabledSecurityNavigation: !0
								}), c().identify({
									hasEnabledSecurityNavigation: !0,
									hasEnabledDefaultUnifiedSecurity: !0
								});
								const N = (0, n.jB)(re.flags.hasEnabledDefaultUnifiedSecurity);
								(0, n.yM)(N, {
									value: !0
								});
								return
							}
							if (re.flags.hasEnabledDefaultUnifiedSecurity || re.flags.hasEnabledSecurityNavigation) {
								var z;
								S(!0), c().identify({
									hasEnabledSecurityNavigation: re.flags.hasEnabledSecurityNavigation,
									hasEnabledDefaultUnifiedSecurity: (z = re.flags) === null || z === void 0 ? void 0 : z.hasEnabledDefaultUnifiedSecurity
								})
							}
						}, [y, w]),
						toggleSecurityNav: ne,
						navFlag: P,
						feedbackFormLink: C
					}
				}
		},
		"../react/pages/security/resources/types.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				X: function() {
					return e
				}
			});
			let e = function(s) {
					return s.UI_SECTION = "UI_SECTION", s.WAF_RULES = "WAF_RULES", s
				}({}),
				o = function(s) {
					return s.Low = "low", s.Medium = "medium", s.Critical = "critical", s
				}({})
		},
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				jB: function() {
					return _
				},
				yM: function() {
					return u
				},
				yf: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(m) {
						return Object.getOwnPropertyDescriptor(i, m).enumerable
					})), g.forEach(function(m) {
						d(n, m, i[m])
					})
				}
				return n
			}

			function d(n, r, i) {
				return r = a(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function a(n) {
				var r = v(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CLICK_OPT_IN = "click opt in security navigation", n.CLICK_OPT_IN_BUTTON = "click opt in button", n.CLICK_OPT_OUT_BUTTON = "click opt out button", n.CLICK_NEXT_STEP = "click opt in next step", n.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", n.DISPLAY_MODAL = "display opt in modal", n.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", n.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", n.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", n.DEFAULT_ALL_OPT_OUT = "user in default-all gate opts out", n.DEFAULT_ALL_REENABLES = "user in default-all gate re-enables new UI", n.DEFAULT_ALL_INIT = "user in default-all gate is opted-in be default", n.NEW_DASHBOARD_EXPERIENCE = "click on new dashboard experience button", n
			}({});
			const u = (n, r = {}) => {
					o().sendEvent(n, s({}, r || {}))
				},
				_ = n => {
					if (n === !0) return c.DEFAULT_ALL_OPT_OUT;
					if (n === !1) return c.DEFAULT_ALL_REENABLES;
					if (n === void 0) return c.DEFAULT_ALL_INIT
				}
		},
		"../react/pages/security/settings/hooks/api.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$y: function() {
					return m
				},
				Ai: function() {
					return n
				},
				B: function() {
					return _
				},
				BT: function() {
					return a
				},
				CK: function() {
					return u
				},
				F3: function() {
					return p
				},
				JP: function() {
					return s
				},
				O_: function() {
					return r
				},
				X2: function() {
					return d
				},
				YO: function() {
					return b
				},
				_c: function() {
					return O
				},
				je: function() {
					return g
				},
				ll: function() {
					return v
				},
				qD: function() {
					return c
				},
				tw: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const s = async h => {
				var l, C;
				const f = await (0, e.get)(`/zones/${h}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((l = f == null ? void 0 : f.body) === null || l === void 0 || (C = l.result) === null || C === void 0 ? void 0 : C.value) === "enabled"
			}, d = async (h, l) => (await (0, e.post)(`/zones/${h}/content-upload-scan/${l?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), l), a = async h => {
				var l;
				const C = await (0, e.get)(`/zones/${h}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((l = C == null ? void 0 : C.body) === null || l === void 0 ? void 0 : l.result) || []
			}, v = async (h, l) => {
				var C;
				const f = await (0, e.post)(`/zones/${h}/content-upload-scan/payloads`, {
					body: [l]
				});
				return (C = f == null ? void 0 : f.body) === null || C === void 0 ? void 0 : C.result
			}, c = async (h, l) => (await (0, e.del)(`/zones/${h}/content-upload-scan/payloads/${l}`, {
				hideErrorAlert: !0
			}), l), u = async h => {
				var l;
				const C = await (0, e.get)(`/zones/${h}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((l = C == null ? void 0 : C.body) === null || l === void 0 ? void 0 : l.pii_detection_enabled)
			}, _ = async (h, l) => (await (0, e.put)(`/zones/${h}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: l
				}
			}), l), n = async h => {
				var l, C;
				const f = await (0, e.get)(`/zones/${h}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((l = f == null ? void 0 : f.body) === null || l === void 0 || (C = l.result) === null || C === void 0 ? void 0 : C.enabled)
			}, r = async (h, l) => {
				var C, f;
				const w = await (0, e.post)(`/zones/${h}/leaked-credential-checks`, {
					body: {
						enabled: l
					}
				});
				return !!((C = w == null ? void 0 : w.body) === null || C === void 0 || (f = C.result) === null || f === void 0 ? void 0 : f.enabled)
			}, i = async h => {
				var l;
				const C = await (0, e.get)(`/zones/${h}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (l = C == null ? void 0 : C.body) === null || l === void 0 ? void 0 : l.result
			}, g = async (h, l) => {
				var C;
				const f = await (0, e.post)(`/zones/${h}/leaked-credential-checks/detections`, {
					body: l
				});
				return (C = f == null ? void 0 : f.body) === null || C === void 0 ? void 0 : C.result
			}, m = async (h, l) => (await (0, e.del)(`/zones/${h}/leaked-credential-checks/detections/${l}`, {
				hideErrorAlert: !0
			}), l), p = async (h, l) => {
				await (0, e.put)(`/zones/${h}/security-center/securitytxt`, {
					body: l
				})
			}, b = async h => {
				await (0, e.del)(`/zones/${h}/security-center/securitytxt`)
			}, O = async h => (await (0, e.get)(`/zones/${h}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Xu: function() {
					return m
				},
				Io: function() {
					return f
				},
				FQ: function() {
					return re
				},
				vU: function() {
					return g
				},
				M: function() {
					return b
				},
				d7: function() {
					return p
				},
				Oz: function() {
					return C
				},
				Np: function() {
					return M
				},
				WR: function() {
					return _
				},
				bE: function() {
					return F
				},
				u_: function() {
					return i
				},
				pf: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				o = t("../react/pages/security/settings/hooks/api.ts"),
				s = t("webpack/sharing/consume/default/react/react"),
				d = t("webpack/sharing/consume/default/react-redux/react-redux"),
				a = t("../react/pages/security/settings/resources/index.ts"),
				v = t("../react/common/hooks/useZoneEntitlement.ts"),
				c = t("../../../../node_modules/yup/es/index.js"),
				u = t("../react/utils/translator.tsx");
			const _ = () => (0, d.useSelector)(a.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				r = () => !!useZoneEntitlement(n),
				i = () => {
					const {
						t: z
					} = (0, u.QT)(), N = c.Z_().required(z("common.field_is_required")).max(24, z("labels.apply.form.name.error.max_characters")).matches(a.DG, z("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", z("labels.apply.form.name.error.cf_forbidden"), U => !a.aW.test(U)), R = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: U => c.Ry().shape({
							[a.n5.NAME]: U ? c.Z_() : N,
							[a.n5.DESCRIPTION]: U ? c.Z_().optional() : c.Z_().max(150, z("labels.apply.form.description.error.max_characters"))
						})
					}, K = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[a.N2.NAME]: "",
							[a.N2.SOURCE]: a.W3,
							[a.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => c.Ry().shape({
							[a.N2.NEW_LABEL_NAME]: N
						})
					};
					return {
						LABELS_APPLY_FORM: R,
						EDIT_LABELS_MODAL_FORM: K
					}
				},
				g = ({
					modalHeaderFixedHeight: z = 62,
					modalDefaultPaddings: N = 16
				} = {}) => {
					const R = (0, s.useRef)(null),
						K = (0, s.useRef)(null),
						[U, G] = (0, s.useState)(0),
						[H, Z] = (0, s.useState)(0),
						$ = `calc(100vh - ${U}px - ${H}px - ${N}px)`,
						[J, L] = (0, s.useState)("");
					return (0, s.useEffect)(() => {
						const W = () => {
							var X, ie, V, oe;
							const ge = R == null || (X = R.current) === null || X === void 0 ? void 0 : X.offsetHeight,
								we = K == null || (ie = K.current) === null || ie === void 0 ? void 0 : ie.offsetHeight,
								se = ((V = ge) !== null && V !== void 0 ? V : 0) + z,
								Ce = (oe = we) !== null && oe !== void 0 ? oe : 0;
							G(se), Z(Ce)
						};
						return W(), window.addEventListener("resize", W), () => window.removeEventListener("resize", W)
					}, []), {
						searchTerm: J,
						setSearchTerm: L,
						scrollableSectionMaxHeight: $,
						topMenuRef: R,
						bottomMenuRef: K
					}
				},
				m = z => {
					const N = _(),
						R = (0, e.useQueryClient)(),
						K = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${z}`,
							queryFn: () => (0, o.JP)(z),
							enabled: N
						}),
						U = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${z}`,
							queryFn: () => (0, o.BT)(z),
							enabled: N && !!(K == null ? void 0 : K.data)
						}),
						G = (0, e.useMutation)({
							mutationFn: async ({
								enabled: $
							}) => await (0, o.X2)(z, $),
							onSuccess: $ => {
								R.setQueryData([`content-scanning-enabled-${z}`], $)
							}
						}),
						H = (0, e.useMutation)({
							mutationFn: $ => (0, o.ll)(z, $),
							onSuccess: $ => {
								R.setQueryData([`content-scanning-detections-${z}`], $)
							}
						}),
						Z = (0, e.useMutation)({
							mutationFn: $ => (0, o.qD)(z, $),
							onSuccess: $ => {
								var J;
								const L = (J = R.getQueryData(`content-scanning-detections-${z}`)) !== null && J !== void 0 ? J : [];
								R.setQueryData([`content-scanning-detections-${z}`], L.filter(({
									id: W
								}) => W !== $))
							}
						});
					return {
						entitled: N,
						loading: K.isLoading || U.isLoading,
						error: K.isError || U.isError,
						enabled: {
							data: K.data,
							isToggling: G.isLoading,
							toggleEnabled: async $ => G.mutateAsync({
								enabled: $
							})
						},
						detections: {
							data: U.data,
							add: H.mutateAsync,
							delete: Z.mutateAsync,
							loading: H.isLoading || Z.isLoading
						}
					}
				},
				p = () => {
					const z = (0, d.useSelector)(a.cN),
						N = (0, d.useSelector)(a.bH),
						R = (0, d.useSelector)(a.P3),
						K = (0, d.useSelector)(a.Ri);
					return {
						hasEditPermission: z,
						isEnabled: R && (N.hasSimilarLeaked || N.hasUsernameAndPasswordLeaked || K)
					}
				},
				b = z => {
					const N = p(),
						R = (0, e.useQueryClient)(),
						K = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${z}`,
							queryFn: () => (0, o.Ai)(z),
							enabled: !!N.isEnabled,
							retry: 1
						}),
						U = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${z}`,
							queryFn: () => (0, o.tw)(z),
							enabled: !!N.isEnabled && !!(K == null ? void 0 : K.data)
						}),
						G = (0, e.useMutation)({
							mutationFn: ({
								enabled: $
							}) => (0, o.O_)(z, $),
							onSuccess: $ => {
								R.setQueryData([`leaked-credentials-enabled-${z}`], $)
							}
						}),
						H = (0, e.useMutation)({
							mutationFn: async $ => await (0, o.je)(z, $),
							onSuccess: $ => {
								var J;
								const L = (J = R.getQueryData(`leaked-credentials-detections-${z}`)) !== null && J !== void 0 ? J : [];
								R.setQueryData([`leaked-credentials-detections-${z}`], [...L, $])
							}
						}),
						Z = (0, e.useMutation)({
							mutationFn: $ => (0, o.$y)(z, $),
							onSuccess: $ => {
								var J;
								const L = (J = R.getQueryData(`leaked-credentials-detections-${z}`)) !== null && J !== void 0 ? J : [];
								R.setQueryData([`leaked-credentials-detections-${z}`], L.filter(({
									id: W
								}) => W !== $))
							}
						});
					return {
						entitled: N.isEnabled,
						hasEditPermissions: N.hasEditPermission,
						loading: K.isLoading || U.isLoading,
						error: K.isError || K.isError,
						enabled: {
							data: K.data,
							isToggling: G.isLoading,
							toggleEnabled: async $ => G.mutateAsync({
								enabled: $
							})
						},
						detections: {
							data: U.data,
							add: H.mutateAsync,
							delete: Z.mutateAsync,
							loading: H.isLoading || Z.isLoading
						}
					}
				};
			var O = t("../react/common/utils/useQueryCache.ts");
			const h = "security-txt",
				l = {
					securityTxt: ({
						zoneId: z
					}) => [h, z]
				},
				C = z => (0, e.useQuery)({
					queryKey: l.securityTxt({
						zoneId: z
					}),
					queryFn: () => (0, o._c)(z),
					select: N => N.result
				}),
				f = z => {
					const {
						invalidate: N
					} = (0, O.o)(l.securityTxt({
						zoneId: z
					}));
					return (0, e.useMutation)({
						mutationFn: () => (0, o.YO)(z),
						onSuccess: async () => {
							await N(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				w = z => {
					const {
						invalidate: N
					} = (0, O.o)(l.securityTxt({
						zoneId: z
					}));
					return (0, e.useMutation)({
						mutationFn: R => (0, o.F3)(z, R),
						onSuccess: async () => {
							await N(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var k = t("../../../../node_modules/lodash/isEqual.js"),
				A = t.n(k),
				I = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function D(z) {
				for (var N = 1; N < arguments.length; N++) {
					var R = arguments[N] != null ? Object(arguments[N]) : {},
						K = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && K.push.apply(K, Object.getOwnPropertySymbols(R).filter(function(U) {
						return Object.getOwnPropertyDescriptor(R, U).enumerable
					})), K.forEach(function(U) {
						y(z, U, R[U])
					})
				}
				return z
			}

			function y(z, N, R) {
				return N = P(N), N in z ? Object.defineProperty(z, N, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[N] = R, z
			}

			function P(z) {
				var N = S(z, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function S(z, N) {
				if (typeof z != "object" || z === null) return z;
				var R = z[Symbol.toPrimitive];
				if (R !== void 0) {
					var K = R.call(z, N || "default");
					if (typeof K != "object") return K;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(z)
			}
			const M = z => {
					const {
						queryKey: N,
						zoneId: R
					} = (0, I.hL)(z), {
						isLoading: K,
						isError: U,
						isSuccess: G,
						data: H,
						refetch: Z,
						isRefetching: $
					} = (0, e.useQuery)({
						queryKey: N,
						queryFn: () => I.Mi.getLabels(D({
							zoneId: R
						}, z)),
						onSuccess: () => {
							var J;
							const L = z == null || (J = z.filters) === null || J === void 0 ? void 0 : J.source;
							(L === a.LABEL_SOURCES.MANAGED || L === a.LABEL_SOURCES.USER) && (0, a.Tf)({
								name: a.QJ.FILTER_USER_MANAGED_LABELS,
								product: a.Iv.SECURITY_SETTINGS,
								pageName: a.R.LABELS_LIST,
								type: L
							})
						}
					});
					return {
						data: H == null ? void 0 : H.result,
						errors: H == null ? void 0 : H.errors,
						paginationData: H == null ? void 0 : H.result_info,
						isLoading: K,
						isError: U,
						isSuccess: G,
						refetch: Z,
						isRefetching: $
					}
				},
				F = ({
					labels: z,
					preselectedLabels: N
				}) => {
					const {
						USER: R,
						MANAGED: K
					} = a.LABEL_SOURCES, [U, G] = (0, s.useState)({
						[R]: [],
						[K]: []
					}), [H, Z] = (0, s.useState)(new Set), $ = H.size > 0, [J, L] = (0, s.useState)(!1), W = oe => {
						Z(ge => {
							const we = new Set(ge);
							return we.has(oe.name) ? we.delete(oe.name) : we.add(oe.name), we
						})
					}, X = oe => H.has(oe.name), ie = (oe, ge) => {
						const we = X(oe) ? 1 : 0;
						return (X(ge) ? 1 : 0) - we
					}, V = oe => {
						G(ge => ({
							[R]: [...oe ? oe[R] : ge[R]].sort(ie),
							[K]: [...oe ? oe[K] : ge[K]].sort(ie)
						}))
					};
					return (0, s.useEffect)(() => {
						if (z && !J) {
							if (N) {
								const oe = new Set;
								z.forEach(ge => {
									N.some(we => A()(we, ge)) && oe.add(ge.name)
								}), Z(oe)
							}
							L(!0)
						}
					}, [z, N, J]), (0, s.useEffect)(() => {
						if (z && J) {
							const oe = z.reduce((we, se) => (se.source === R ? we[R].push(se) : se.source === K && we[K].push(se), we), {
									[R]: [],
									[K]: []
								}),
								ge = {
									[R]: oe[R].sort(ie),
									[K]: oe[K].sort(ie)
								};
							G(ge)
						}
					}, [R, K, z, J]), {
						userAndManagedLabels: U,
						setUserAndManagedLabels: G,
						toggleSelectedLabel: W,
						isLabelSelected: X,
						sortLabelsBySelectedStatus: V,
						hasLabelsSelected: $
					}
				};
			var ne = t("../react/app/redux/index.ts"),
				te = t("../react/pages/security/settings/resources/selectors.ts");
			const re = (z = "") => {
				const N = (0, ne.p4)(te.Xs),
					R = N && (z == null ? void 0 : z.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: N,
					hasDeprecatedParameter: R
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				FQ: function() {
					return _.FQ
				},
				Iv: function() {
					return n.Iv
				},
				M: function() {
					return _.M
				},
				Np: function() {
					return _.Np
				},
				Oz: function() {
					return _.Oz
				},
				Q4: function() {
					return n.Q4
				},
				QJ: function() {
					return n.QJ
				},
				R: function() {
					return n.R
				},
				TG: function() {
					return n.TG
				},
				Tf: function() {
					return n.Tf
				},
				WR: function() {
					return _.WR
				},
				Xs: function() {
					return n.Xs
				},
				Xu: function() {
					return _.Xu
				},
				ZF: function() {
					return n.ZF
				},
				bE: function() {
					return _.bE
				},
				bH: function() {
					return n.bH
				},
				dC: function() {
					return n.dC
				},
				eC: function() {
					return n.eC
				},
				m8: function() {
					return n.m8
				},
				pf: function() {
					return _.pf
				},
				ui: function() {
					return n.ui
				},
				vc: function() {
					return n.vc
				},
				zF: function() {
					return n.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/app/components/Forbidden.jsx"),
				s = t("webpack/sharing/consume/default/react/react"),
				d = t.n(s),
				a = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				v = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(v),
				u = t("../../../../node_modules/react/jsx-runtime.js"),
				_ = t("../react/pages/security/settings/hooks/index.ts"),
				n = t("../react/pages/security/settings/resources/index.ts");
			const r = d().lazy(() => Promise.all([t.e(27969), t.e(97842), t.e(16691), t.e(14886), t.e(94012), t.e(60296), t.e(33023), t.e(65676), t.e(68204), t.e(2515), t.e(22038), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(66270), t.e(29271), t.e(30906), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				i = () => {
					const {
						t: g
					} = (0, v.useI18n)(), m = (0, e.xk)("waf");
					return (0, u.jsx)(a.T3, {
						parentPageLabel: g("navigation.zone.security"),
						title: g("navigation.zone.security.settings"),
						type: "narrow",
						children: m.read ? (0, u.jsx)(r, {}) : (0, u.jsx)(o.Z, {})
					})
				};
			E.ZP = i
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Mi: function() {
					return l
				},
				hL: function() {
					return h
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				s = t("../react/common/utils/useQueryCache.ts"),
				d = t("../react/pages/security/settings/resources/constants.ts"),
				a = t("../react/common/hooks/useAccountId.ts"),
				v = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				c = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const u = {
				labels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var _ = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				r = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function i(f, w) {
				if (f == null) return {};
				var k = g(f, w),
					A, I;
				if (Object.getOwnPropertySymbols) {
					var D = Object.getOwnPropertySymbols(f);
					for (I = 0; I < D.length; I++) A = D[I], !(w.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(f, A) || (k[A] = f[A]))
				}
				return k
			}

			function g(f, w) {
				if (f == null) return {};
				var k = {},
					A = Object.keys(f),
					I, D;
				for (D = 0; D < A.length; D++) I = A[D], !(w.indexOf(I) >= 0) && (k[I] = f[I]);
				return k
			}

			function m(f) {
				for (var w = 1; w < arguments.length; w++) {
					var k = arguments[w] != null ? Object(arguments[w]) : {},
						A = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(k).filter(function(I) {
						return Object.getOwnPropertyDescriptor(k, I).enumerable
					})), A.forEach(function(I) {
						p(f, I, k[I])
					})
				}
				return f
			}

			function p(f, w, k) {
				return w = b(w), w in f ? Object.defineProperty(f, w, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[w] = k, f
			}

			function b(f) {
				var w = O(f, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function O(f, w) {
				if (typeof f != "object" || f === null) return f;
				var k = f[Symbol.toPrimitive];
				if (k !== void 0) {
					var A = k.call(f, w || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(f)
			}
			const h = f => {
					const w = (0, e.p4)(o.Cu),
						k = (0, a.F)(),
						A = C.labels(m({
							accountId: k,
							zoneId: w
						}, f ? m({}, f) : {})),
						I = (0, s.o)(A);
					return m({
						zoneId: w,
						queryKey: A,
						batchInvalidateLabels: async () => {
							await I.batchInvalidate({
								queryKeysToPredicateInvalidate: [d.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, I)
				},
				l = {
					getLabels: async f => {
						var w, k, A, I;
						let {
							zoneId: D,
							hideErrorAlert: y = !0
						} = f, P = i(f, ["zoneId", "hideErrorAlert"]);
						return (await v.get(u.labels.toUrl({
							zoneId: D
						}), {
							parameters: {
								page: P == null ? void 0 : P.page,
								per_page: P == null ? void 0 : P.per_page,
								with_mapped_resource_counts: P == null ? void 0 : P.with_mapped_resource_counts,
								filter: P == null || (w = P.filters) === null || w === void 0 ? void 0 : w.search,
								source: (0, n.sQ)(P == null || (k = P.filters) === null || k === void 0 ? void 0 : k.source),
								order: P == null || (A = P.sort) === null || A === void 0 ? void 0 : A.id,
								direction: (P == null ? void 0 : P.sort) ? (P == null || (I = P.sort) === null || I === void 0 ? void 0 : I.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: y
						})).body
					},
					getLabel: async f => {
						let {
							zoneId: w,
							labelName: k,
							hideErrorAlert: A = !0
						} = f, I = i(f, ["zoneId", "labelName", "hideErrorAlert"]);
						const D = (0, n.mm)(k) ? u.managedLabel.toUrl({
							zoneId: w,
							labelName: k
						}) : u.userLabel.toUrl({
							zoneId: w,
							labelName: k
						});
						return (await v.get(D, {
							parameters: {
								with_mapped_resource_counts: I == null ? void 0 : I.with_mapped_resource_counts
							},
							hideErrorAlert: A
						})).body
					},
					editLabel: async ({
						zoneId: f,
						label: w,
						replace: k
					}) => {
						const {
							name: A
						} = w, I = i(w, ["name"]);
						return (await (k ? v.put : v.patch)(u.userLabel.toUrl({
							zoneId: f,
							labelName: w.name
						}), {
							body: I
						})).body
					},
					deleteLabel: async ({
						zoneId: f,
						labelName: w
					}) => (await v.del(u.userLabel.toUrl({
						zoneId: f,
						labelName: w
					}))).body,
					createLabel: async f => {
						let {
							zoneId: w
						} = f, k = i(f, ["zoneId"]);
						const {
							product: A
						} = k, I = i(k, ["product"]);
						return (await v.post(u.userLabels.toUrl({
							zoneId: w
						}), {
							body: [I]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: f,
						user: w,
						managed: k,
						operationIds: A,
						replace: I
					}) => (await (I ? v.put : v.post)(u.operationsLinkedToLabels.toUrl({
						zoneId: f
					}), {
						body: m({}, w ? {
							user: {
								labels: w
							}
						} : {}, k ? {
							managed: {
								labels: k
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: A
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: f,
						labelName: w,
						operationIds: k
					}) => {
						const A = (0, n.mm)(w) ? u.managedLabelOperations.toUrl({
							zoneId: f,
							labelName: w
						}) : u.userLabelOperations.toUrl({
							zoneId: f,
							labelName: w
						});
						return (await v.put(A, {
							body: {
								selector: {
									include: {
										operation_ids: k
									}
								}
							}
						})).body
					}
				},
				C = {
					labels: f => {
						let {
							accountId: w,
							zoneId: k
						} = f, A = i(f, ["accountId", "zoneId"]);
						return [d.IQ.LABELS, w, k, ...(0, _.isEmpty)(A) ? [] : [A]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				DG: function() {
					return b
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return c
				},
				GE: function() {
					return k
				},
				IQ: function() {
					return d
				},
				KV: function() {
					return v
				},
				LABELS_LIST_TOASTS: function() {
					return g
				},
				LABEL_SOURCES: function() {
					return a
				},
				QH: function() {
					return m
				},
				V: function() {
					return C
				},
				W3: function() {
					return s
				},
				Yn: function() {
					return D
				},
				_8: function() {
					return i
				},
				_c: function() {
					return f
				},
				aW: function() {
					return O
				},
				dC: function() {
					return I
				},
				gY: function() {
					return w
				},
				j8: function() {
					return u
				},
				jz: function() {
					return p
				},
				n5: function() {
					return h
				},
				om: function() {
					return _
				},
				w: function() {
					return o
				},
				zF: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let o = function(y) {
				return y.EXPOSED_CREDENTIALS = "exposed_credentials", y.CONTENT_SCANNING = "content_scanning", y.FIREWALL_AI = "firewall_ai", y
			}({});
			const s = "all";
			let d = function(y) {
					return y.LABELS = "labels", y
				}({}),
				a = function(y) {
					return y.USER = "user", y.MANAGED = "managed", y
				}({}),
				v = function(y) {
					return y.SOURCE = "source", y
				}({}),
				c = function(y) {
					return y.NAME = "name", y.SOURCE = "source", y.NEW_LABEL_NAME = "newLabelName", y
				}({}),
				u = function(y) {
					return y.ENDPOINT = "endpoint", y.METHOD = "method", y.OPERATION_ID = "operationId", y
				}({}),
				_ = function(y) {
					return y.NAME = "name", y.MAPPED_RESOURCES = "mapped_resources.operations", y.SOURCE = "source", y.APPLY = "apply", y
				}({});
			const i = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: _.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[v.SOURCE]: s
					}
				},
				filters: v,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					queryParamStrategy: "auto-clear"
				}
			};
			let g = function(y) {
				return y.CREATED_LABEL = "createdLabel", y.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", y.DELETED_LABEL = "deletedLabel", y.APPLIED_LABEL = "appliedLabel", y.EDITED_LABEL = "editedLabel", y.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", y
			}({});
			const m = "650px",
				p = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				b = /^[A-Za-z0-9-]+$/,
				O = /^cf-/;
			let h = function(y) {
				return y.NAME = "name", y.DESCRIPTION = "description", y
			}({});
			const l = "all";
			let C = function(y) {
				return y.METHOD = "method", y.HOSTNAME = "hostname", y
			}({});
			const f = {
				initialPaginationState: {
					page: 1,
					perPage: 5
				},
				initialSortState: {
					name: "method",
					direction: e.Sr.desc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[C.METHOD]: l,
						[C.HOSTNAME]: l
					}
				},
				filters: C
			};
			let w = function(y) {
				return y.TITLE = "title", y.DESCRIPTION = "description", y.SUBMIT = "submit", y
			}({});
			const k = 1e3,
				A = {
					LIST_TABLE_WRAPPER: "labels.list.main.table.wrapper",
					LIST_TABLE_CELL_NAME: "labels.list.main.table.cell.name",
					LIST_TABLE_CELL_CONNECTED: "labels.list.main.table.cell.connected",
					LIST_TABLE_CELL_TYPE: "labels.list.main.table.cell.type",
					LIST_TABLE_CELL_APPLY: "labels.list.main.table.cell.apply",
					LIST_TABLE_CELL_APPLY_BUTTON: "labels.list.main.table.cell.apply.button",
					LIST_TABLE_CELL_OVERFLOW_MENU: "labels.list.main.table.cell.overflow",
					LIST_TABLE_DELETE_MODAL_SUBMIT_BUTTON: "labels.list.main.delete_modal.submit_button",
					LIST_TABLE_DELETE_MODAL_CANCEL_BUTTON: "labels.list.main.delete_modal.cancel_button",
					LIST_TABLE_DELETE_MODAL_INPUT: "labels.list.main.delete_modal.input",
					APPLY_HEADER: "labels.apply.header",
					APPLY_FORM_NAME: "labels.apply.form.name",
					APPLY_FORM_NAME_DISABLED: "labels.apply.form.name.disabled",
					APPLY_FORM_DESCRIPTION: "labels.apply.form.description",
					APPLY_FORM_DESCRIPTION_DISABLED: "labels.apply.form.disabled",
					APPLY_FORM_SUBMIT_BUTTON: "labels.apply.form.submit.button",
					OPERATION_DETAILS_OPEN_MODAL_BUTTON: "labels.operation_details.open_modal.button",
					ENDPOINT_MANAGEMENT_LABELS_CONTAINER: "labels.endpoint_management.table.container",
					ENDPOINT_MANAGEMENT_LABELS_MORE_LABELS_BUTTON: "labels.endpoint_management.table.more_labels_button",
					SIDE_MODAL_CONTAINER: "labels.side_modal.container",
					SIDE_MODAL_OPERATION_CELL: "labels.side_modal.operation_cell",
					SIDE_MODAL_SEARCH_BAR: "labels.side_modal.search_bar",
					SIDE_MODAL_SOURCE_LISTBOX: "labels.side_modal.source_listbox",
					SIDE_MODAL_MANAGED_LABELS_CONTAINER: "labels.side_modal.managed_labels.container",
					SIDE_MODAL_USER_LABELS_CONTAINER: "labels.side_modal.user_labels.container",
					SIDE_MODAL_CREATE_LABEL_INACTIVE: "labels.side_modal.create_label.inactive",
					SIDE_MODAL_CREATE_LABEL_INPUT: "labels.side_modal.create_label.input",
					SIDE_MODAL_CREATE_LABEL_BUTTON: "labels.side_modal.create_label.button",
					SIDE_MODAL_SAVE_LABELS_BUTTON: "labels.side_modal.save_labels.button",
					SIDE_MODAL_CANCEL_BUTTON: "labels.side_modal.cancel.button",
					SIDE_MODAL_SELECTED_OPERATIONS_COUNT: "labels.side_modal.selected_operations_count",
					SIDE_MODAL_BULK_OVERWRITE_TOGGLE: "labels.side_modal.bulk.overwrite.toggle"
				},
				I = "exposed-credentials-module",
				D = "cf-risk"
		},
		"../react/pages/security/settings/resources/index.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return g
				},
				aW: function() {
					return e.aW
				},
				W3: function() {
					return e.W3
				},
				w: function() {
					return e.w
				},
				N2: function() {
					return e.EDIT_LABELS_MODAL_FORM_PROPERTIES
				},
				dC: function() {
					return e.dC
				},
				n5: function() {
					return e.n5
				},
				Iv: function() {
					return r
				},
				zF: function() {
					return e.zF
				},
				QJ: function() {
					return p
				},
				R: function() {
					return n
				},
				LABEL_SOURCES: function() {
					return e.LABEL_SOURCES
				},
				eC: function() {
					return m
				},
				QH: function() {
					return e.QH
				},
				TG: function() {
					return o.T
				},
				QF: function() {
					return s.QF
				},
				vc: function() {
					return s.vc
				},
				ZF: function() {
					return i
				},
				Xs: function() {
					return h.Xs
				},
				wG: function() {
					return s.N2
				},
				Q4: function() {
					return s.Q4
				},
				Wv: function() {
					return s.Wv
				},
				bH: function() {
					return h.bH
				},
				Mb: function() {
					return s.Mb
				},
				ui: function() {
					return h.ui
				},
				P3: function() {
					return h.P3
				},
				Ri: function() {
					return h.Ri
				},
				cN: function() {
					return h.cN
				},
				m8: function() {
					return O
				},
				Tf: function() {
					return b
				},
				$E: function() {
					return s.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				o = t("../react/pages/security/settings/resources/types.ts"),
				s = t("../react/pages/security/settings/resources/utils.ts"),
				d = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(d);

			function v(l) {
				for (var C = 1; C < arguments.length; C++) {
					var f = arguments[C] != null ? Object(arguments[C]) : {},
						w = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(f).filter(function(k) {
						return Object.getOwnPropertyDescriptor(f, k).enumerable
					})), w.forEach(function(k) {
						c(l, k, f[k])
					})
				}
				return l
			}

			function c(l, C, f) {
				return C = u(C), C in l ? Object.defineProperty(l, C, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[C] = f, l
			}

			function u(l) {
				var C = _(l, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function _(l, C) {
				if (typeof l != "object" || l === null) return l;
				var f = l[Symbol.toPrimitive];
				if (f !== void 0) {
					var w = f.call(l, C || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(l)
			}
			let n = function(l) {
					return l.LABELS_LIST = "Labels List page", l.LABELS_APPLY = "Labels Apply page", l.LABELS_SIDE_MODAL = "Labels Side Modal", l.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", l.LABELS_OPERATION_DETAILS = "Operation Details page", l
				}({}),
				r = function(l) {
					return l.API_SHIELD = "API Shield", l.SECURITY_SETTINGS = "Security Settings", l
				}({}),
				i = function(l) {
					return l.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", l.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", l.OPERATIONS_TABLE_ROW = "Operations table row", l.OPERATION_DETAILS_PAGE = "Operation details page", l
				}({}),
				g = function(l) {
					return l.UPSERT = "upsert", l.OVERWRITE = "overwrite", l
				}({}),
				m = function(l) {
					return l.SINGLE = "single", l.MULTIPLE = "multiple", l
				}({}),
				p = function(l) {
					return l.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", l.DELETE_LABEL = "delete a user label in the settings page", l.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", l.CREATE_LABEL_CLICKED = "click create label button in the settings page", l.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", l.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", l.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", l.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", l.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", l.OPEN_LABELS_SIDE_MODAL = "open labels side modal", l.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", l.REMOVE_RISK_LABELS_FROM_OPERATION = "remove risk label(s) from operation(s) in the labels side modal", l.CREATE_NEW_LABEL = "create a new label", l
				}({});
			const b = ({
					name: l,
					product: C,
					category: f = "user journey",
					pageName: w,
					from: k,
					write_strategy: A,
					type: I,
					target: D,
					selected: y
				}) => {
					a().sendEvent(l, v({
						category: f,
						pageName: w,
						product: C
					}, k ? {
						from: k
					} : {}, A ? {
						write_strategy: A
					} : {}, I ? {
						type: I
					} : {}, D ? {
						target: D
					} : {}, y ? {
						selected: y
					} : {}))
				},
				O = () => {
					var l;
					return (l = Object.values(p)) === null || l === void 0 ? void 0 : l.flat()
				};
			var h = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				P3: function() {
					return c
				},
				Ri: function() {
					return u
				},
				Xs: function() {
					return n
				},
				bH: function() {
					return _
				},
				cN: function() {
					return v
				},
				ui: function() {
					return a
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				o = t("../react/utils/url.ts"),
				s = t("../react/common/selectors/entitlementsSelectors.ts"),
				d = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const a = r => {
					const i = (0, e.RO)(r),
						g = !!(0, s.rV)(r, "rulesets.file_upload_scan_allowed"),
						m = !!(0, s.BF)(r, "rulesets.file_upload_scan_allowed");
					return (0, o.el)(window.location.pathname) ? i && (g || m) : m
				},
				v = r => Number((0, s.rV)(r, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				c = r => (0, s.rV)(r, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				u = r => (0, s.rV)(r, "rulesets.leaked_credential_checks_allowed"),
				_ = r => ({
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, s.f)(r, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, s.f)(r, "rulesets.leaked_credential_checks_similar_allowed")
				}),
				n = r => !!(0, d.z1)("deprecate-security-level")(r)
		},
		"../react/pages/security/settings/resources/types.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				T: function() {
					return o
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let o = function(s) {
				return s.ENABLED = "enabled", s.CONTACT = "contact", s.EXPIRES = "expires", s.ENCRYPTION = "encryption", s.ACKNOWLEDGMENTS = "acknowledgments", s.CANONICAL = "canonical", s.HIRING = "hiring", s.POLICY = "policy", s.PREFERRED_LANGUAGES = "preferred_languages", s.MODIFIED_ON = "modified_on", s
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$E: function() {
					return i
				},
				Mb: function() {
					return g
				},
				N2: function() {
					return C
				},
				Q4: function() {
					return p
				},
				QF: function() {
					return r
				},
				Vy: function() {
					return O
				},
				Wv: function() {
					return m
				},
				mm: function() {
					return l
				},
				sQ: function() {
					return h
				},
				vc: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				s = t("../react/pages/security/settings/routes.tsx"),
				d = t("../react/pages/security/settings/resources/constants.ts"),
				a = t("../react/pages/security/settings/resources/types.ts"),
				v = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function c(f) {
				for (var w = 1; w < arguments.length; w++) {
					var k = arguments[w] != null ? Object(arguments[w]) : {},
						A = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(k).filter(function(I) {
						return Object.getOwnPropertyDescriptor(k, I).enumerable
					})), A.forEach(function(I) {
						u(f, I, k[I])
					})
				}
				return f
			}

			function u(f, w, k) {
				return w = _(w), w in f ? Object.defineProperty(f, w, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[w] = k, f
			}

			function _(f) {
				var w = n(f, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function n(f, w) {
				if (typeof f != "object" || f === null) return f;
				var k = f[Symbol.toPrimitive];
				if (k !== void 0) {
					var A = k.call(f, w || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(f)
			}
			const r = {
					[a.T.ENABLED]: !1,
					[a.T.CONTACT]: [""],
					[a.T.EXPIRES]: ""
				},
				i = {
					[a.T.CONTACT]: {
						label: "security_txt.fields.contact",
						tooltip: "security_txt.fields.contact.description",
						placeholder: "security_txt.fields.contact.placeholder"
					},
					[a.T.EXPIRES]: {
						label: "security_txt.fields.expires",
						tooltip: "security_txt.fields.expires.description",
						placeholder: "security_txt.fields.expires.placeholder"
					},
					[a.T.ENCRYPTION]: {
						label: "security_txt.fields.encryption",
						tooltip: "security_txt.fields.encryption.description",
						placeholder: "security_txt.fields.encryption.placeholder"
					},
					[a.T.ACKNOWLEDGMENTS]: {
						label: "security_txt.fields.acknowledgements",
						tooltip: "security_txt.fields.acknowledgements.description",
						placeholder: "security_txt.fields.acknowledgements.placeholder"
					},
					[a.T.CANONICAL]: {
						label: "security_txt.fields.canonical",
						tooltip: "security_txt.fields.canonical.description",
						placeholder: "security_txt.fields.canonical.placeholder"
					},
					[a.T.POLICY]: {
						label: "security_txt.fields.policy",
						tooltip: "security_txt.fields.policy.description",
						placeholder: "security_txt.fields.policy.placeholder"
					},
					[a.T.HIRING]: {
						label: "security_txt.fields.hiring",
						tooltip: "security_txt.fields.hiring.description",
						placeholder: "security_txt.fields.hiring.placeholder"
					},
					[a.T.PREFERRED_LANGUAGES]: {
						label: "security_txt.fields.preferred_languages",
						tooltip: "security_txt.fields.preferred_languages.description",
						placeholder: "security_txt.fields.preferred_languages.placeholder"
					}
				},
				g = f => e.Ry({
					[a.T.CONTACT]: e.IX().of(e.Z_().required(f("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, f("security_txt.fields.contact.format_error"))),
					[a.T.EXPIRES]: e.hT().required(f("common.required")).min(new Date, f("security_txt.fields.expires.min_error"))
				}),
				m = f => {
					const w = {};
					for (const k in f) w[k] = Array.isArray(f[k]) ? f[k].filter(A => !!A) : f[k];
					return c({}, w, {
						expires: (0, v.DZ)(f.expires)
					})
				},
				p = (f, w, k) => {
					const A = [...new Set([a.T.CONTACT, a.T.EXPIRES, ...Object.values(a.T)])],
						I = Object.entries(f).sort(([D], [y]) => A.indexOf(D) - A.indexOf(y)).filter(([D, y]) => !!i[D] && !!y && (!Array.isArray(y) || !!y.length)).map(([D, y]) => Array.isArray(y) ? y.map(P => `${k(i[D].label)}: ${P}`).join(`
`) : `${k(i[D].label)}: ${y}`).join(`
`);
					(0, o.yH)(`Cloudflare_${w}_security.txt`, I, "text/plain;charset=utf-8")
				};
			let b = function(f) {
				return f.CREATED = "created security.txt", f.ENABLED = "enabled security.txt", f.DISABLED = "disabled security.txt", f.DOWNLOADED = "downloaded security.txt", f.UPDATED = "updated security.txt", f.DELETED = "deleted security.txt", f
			}({});
			const O = f => (f == null ? void 0 : f.source) === d.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (f == null ? void 0 : f.source) === d.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				h = f => f === d.W3 ? void 0 : f,
				l = f => d.aW.test(f),
				C = f => {
					switch (f) {
						case d.w.CONTENT_SCANNING:
							return s.ROUTES.CONTENT_SCANNING;
						case d.w.EXPOSED_CREDENTIALS:
							return s.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				ROUTES: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				ROOT: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings`,
				DETECTIONS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections`,
				EXPOSED_CREDENTIALS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections/exposed-credentials`,
				CONTENT_SCANNING: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections/malicious-content`,
				LABELS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/labels`,
				LABEL_APPLY: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/labels/apply/:labelName?`,
				SECURITY_TXT: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/security-txt`
			}
		},
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Sb: function() {
					return _
				},
				Vj: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(m) {
						return Object.getOwnPropertyDescriptor(i, m).enumerable
					})), g.forEach(function(m) {
						d(n, m, i[m])
					})
				}
				return n
			}

			function d(n, r, i) {
				return r = a(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function a(n) {
				var r = v(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			const c = {
					SHOW_LCC_MIGRATION_BANNER: "show LCC migration banner",
					SHOW_LCC_MIGRATION_WARNING: "show LCC migration warning",
					CLICK_LCC_DOCUMENTATION: "click link to Leaked credentials detection documentation",
					CLICK_LCC_UPGRADE_GUIDE: "click link to Leaked credentials detection upgrade guide"
				},
				u = {
					product: "WAF Managed Rules"
				},
				_ = ({
					event: n,
					category: r = "user journey",
					product: i = "waf",
					productName: g = "Managed Rules",
					additionalData: m
				}) => {
					o().sendEvent(n, s({
						category: r,
						product: i,
						productName: g
					}, m || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				D: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CLICK_MENU_ITEM_SHARE = "click on share item", o.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", o.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", o.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", o.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", o.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", o.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", o.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", o.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", o.CLICK_ON_DELETE_RULESET = "click on delete ruleset", o.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", o
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o
			}({})
		},
		"../react/pages/stream/actionTypes.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ReplaceVideos = "stream.replace_videos", o.PrependVideo = "stream.prepend_video", o.UpdateVideo = "stream.update_video", o.UpdateVideoPending = "steam.update_video_pending", o.RemoveVideos = "stream.remove_videos", o.StoreUploader = "stream.store_uploader", o.UpsertUploads = "stream.upsert_uploads", o.RemoveUploads = "stream.remove_uploads", o.UpdateUploadProgress = "stream.update_upload_progress", o.UploadViaUrl = "stream.upload_via_url", o.SetLoading = "stream.set_loading", o.SetStorageLoading = "stream.set_storage_loading", o.SetStorage = "stream.set_storage", o.SetPage = "stream.set_page", o.SetPausedUploads = "stream.set_paused_uploads", o.RemovePausedUpload = "stream.remove_paused_upload", o.SetRequestTimestamp = "stream.set_request_timestamp", o.ResetState = "stream.reset_state", o
			}({})
		},
		"../react/pages/stream/reducer.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return n
				},
				nY: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				o = t("../react/pages/stream/actionTypes.ts"),
				s = t("../react/pages/stream/util/pager.ts");

			function d(r) {
				for (var i = 1; i < arguments.length; i++) {
					var g = arguments[i] != null ? Object(arguments[i]) : {},
						m = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(g).filter(function(p) {
						return Object.getOwnPropertyDescriptor(g, p).enumerable
					})), m.forEach(function(p) {
						a(r, p, g[p])
					})
				}
				return r
			}

			function a(r, i, g) {
				return i = v(i), i in r ? Object.defineProperty(r, i, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = g, r
			}

			function v(r) {
				var i = c(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function c(r, i) {
				if (typeof r != "object" || r === null) return r;
				var g = r[Symbol.toPrimitive];
				if (g !== void 0) {
					var m = g.call(r, i || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			const u = "stream",
				_ = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(r = _, i) {
				switch (i.type) {
					case o.U.ResetState:
						return _;
					case o.U.SetStorageLoading:
						const {
							storageLoading: g
						} = i;
						return d({}, r, {
							storageLoading: g
						});
					case o.U.SetStorage:
						return d({}, r, {
							storage: i.payload ? d({}, r.storage, i.payload) : void 0
						});
					case o.U.ReplaceVideos:
						return d({}, r, {
							videos: i.videos
						});
					case o.U.PrependVideo:
						return d({}, r, {
							videos: [i.video, ...r.videos].filter((m, p) => p < s.FJ)
						});
					case o.U.UpdateVideo:
						return d({}, r, {
							videos: r.videos.map(m => m.uid === i.video.uid ? i.video : m)
						});
					case o.U.UpdateVideoPending:
						return d({}, r, {
							videoUpdateStatuses: d({}, r.videoUpdateStatuses, {
								[i.uid]: i.status
							})
						});
					case o.U.RemoveVideos:
						return d({}, r, {
							videos: r.videos.filter(m => !i.ids.includes(m.uid))
						});
					case o.U.SetLoading:
						return d({}, r, {
							loading: i.loading
						});
					case o.U.SetRequestTimestamp:
						return d({}, r, {
							requestTimestamp: i.requestTimestamp
						});
					case o.U.UploadViaUrl:
						return r;
					default:
						return (0, e.h)(i, r)
				}
			}
		},
		"../react/pages/stream/routes.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				C: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/stream`,
				s = (0, e.BC)`${o}/inputs`,
				d = (0, e.BC)`${o}/videos`,
				a = (0, e.BC)`${o}/analytics`,
				v = (0, e.BC)`${d}/${"videoId"}`,
				c = (0, e.BC)`${o}/video-transformations`,
				u = {
					root: o,
					inputs: s,
					configureInputs: (0, e.BC)`${s}/custom-hostnames`,
					videos: d,
					analytics: a,
					videoPage: v,
					videoTransformationsConfigList: c,
					videoTransformationsZoneConfig: (0, e.BC)`${c}/${"zoneId"}/settings`,
					inputPage: (0, e.BC)`${s}/${"inputId"}`,
					inputSettings: (0, e.BC)`${s}/${"inputId"}/settings`,
					inputMetrics: (0, e.BC)`${s}/${"inputId"}/metrics`,
					inputLogs: (0, e.BC)`${s}/${"inputId"}/logs`,
					inputRecordings: (0, e.BC)`${s}/${"inputId"}/recordings`,
					inputEmbed: (0, e.BC)`${s}/${"inputId"}/embed`,
					inputConnectionInfo: (0, e.BC)`${s}/${"inputId"}/connection-info`,
					inputOutputs: (0, e.BC)`${s}/${"inputId"}/outputs`,
					createOutput: (0, e.BC)`${s}/${"inputId"}/createOutput`,
					createInput: (0, e.BC)`${s}/create`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/stream`,
					signUp: (0, e.BC)`/sign-up/stream`,
					checkoutSuccess: (0, e.BC)`${o}/bundle-checkout-success`,
					plans: (0, e.BC)`${o}/plans`,
					managePlan: (0, e.BC)`${o}/manage-plan`
				}
		},
		"../react/pages/stream/selectors.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Id: function() {
					return d
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return a
				},
				QL: function() {
					return u
				},
				_A: function() {
					return p
				},
				_Q: function() {
					return r
				},
				aM: function() {
					return m
				},
				bM: function() {
					return c
				},
				bO: function() {
					return i
				},
				bm: function() {
					return g
				},
				mX: function() {
					return b
				},
				pW: function() {
					return v
				},
				xW: function() {
					return _
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/pages/stream/reducer.ts");
			const d = O => O[s.nY],
				a = O => d(O).videos,
				v = O => d(O).videoUpdateStatuses,
				c = O => d(O).loading,
				u = O => d(O).requestTimestamp,
				_ = O => d(O).storageLoading,
				n = O => d(O).storage,
				r = O => (0, o.BF)(O, "stream.enabled") || (0, e.bC)(O),
				i = O => (0, e.Le)(O, "stream", "connect"),
				g = O => (0, e.Le)(O, "stream", "stream-4371"),
				m = O => (0, e.Le)(O, "stream", "public-details-enabled"),
				p = O => !!(0, e.Le)(O, "stream", "llhls"),
				b = O => {
					const h = n(O);
					return h !== void 0 && h.limitMins > h.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				FJ: function() {
					return e
				},
				d6: function() {
					return s
				},
				wL: function() {
					return o
				}
			});
			const e = 30;

			function o(d, a, v) {
				const c = {
					search: v,
					limit: e.toString()
				};
				return a !== void 0 && (c.end = a), c
			}

			function s(d, a, v) {
				return {
					limit: e.toString(),
					search: v,
					asc: "true",
					start_comp: "gt",
					start: a
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o
			}({})
		},
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				QK: function() {
					return u
				},
				WM: function() {
					return m
				},
				Zk: function() {
					return _
				},
				aB: function() {
					return n
				},
				eT: function() {
					return g
				},
				i3: function() {
					return c
				},
				mm: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(p) {
				for (var b = 1; b < arguments.length; b++) {
					var O = arguments[b] != null ? Object(arguments[b]) : {},
						h = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(O).filter(function(l) {
						return Object.getOwnPropertyDescriptor(O, l).enumerable
					})), h.forEach(function(l) {
						d(p, l, O[l])
					})
				}
				return p
			}

			function d(p, b, O) {
				return b = a(b), b in p ? Object.defineProperty(p, b, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[b] = O, p
			}

			function a(p) {
				var b = v(p, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function v(p, b) {
				if (typeof p != "object" || p === null) return p;
				var O = p[Symbol.toPrimitive];
				if (O !== void 0) {
					var h = O.call(p, b || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(p)
			}
			let c = function(p) {
					return p.TRY_NEW_DASHBOARD_CTA = "click try new dashboard", p
				}({}),
				u = function(p) {
					return p.CREATE_BUTTON_CLICK = "click create load balancer", p.TOGGLE_STATUS = "load balancer toggle status", p.REVIEW_PAGE_CLICK = "click load balancer table review link", p.EDIT_CLICK = "click load balancer table edit button", p.DELETE_CLICK = "click load balancer table delete button", p
				}({}),
				_ = function(p) {
					return p.EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", p.EDIT_IP_CLICK = "click edit load balancer IP", p.EDIT_POOLS_CLICK = "click edit load balancer pools", p.EDIT_MONITORS_CLICK = "click edit load balancer monitors", p.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", p.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", p
				}({}),
				n = function(p) {
					return p.GO_TO_STEP = "click load balancer step", p.BACK_TO_STEP = "click load balancer back to step", p.SAVE = "save load balancer", p.SAVE_AS_DRAFT = "save load balancer as draft", p.SAVE_AND_DEPLOY = "save and deploy load balancer", p.NAVIGATION_CHANGE = "click load balancer wizard navigation link", p.CLICK_PRIVATE_LB_DOCUMENTATION = "click link to private load balancing documentation", p
				}({}),
				r = function(p) {
					return p.OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", p
				}({});
			const g = Object.values({
					MIGRATION: c,
					LOAD_BALANCERS_TABLE: u,
					REVIEW: _,
					WIZARD: n,
					USAGE: r
				}).flatMap(Object.values),
				m = (p, b) => o().sendEvent(p, s({
					category: "user journey",
					product: "load balancing"
				}, b))
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", o.POOL_TABLE = "click on expandable row on pool", o.CREATE_MONITOR_LINK = "click on create a monitor", o.EDIT_MONITOR_LINK = "click on edit a monitor", o.EDIT_MONITOR = "edit monitor", o.CREATE_MONITOR = "create monitor", o.CREATE_POOL_LINK = "click on create a pool", o.EDIT_POOL_LINK = "click on edit a pool", o.EDIT_POOL = "edit pool", o.CREATE_POOL = "create pool", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				N: function() {
					return s
				},
				X: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let s = function(a) {
				return a.CREATE = "create waiting room", a.UPDATE = "update waiting room", a.EVENTS = "view waiting rooms events", a.ANALYTICS = "view waiting room analytics", a.GENERATE_PREVIEW = "generate waiting room preview link", a
			}({});
			const d = async a => {
				await o().sendEvent(a, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				N3: function() {
					return u
				},
				P: function() {
					return n
				},
				Xh: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(r) {
				for (var i = 1; i < arguments.length; i++) {
					var g = arguments[i] != null ? Object(arguments[i]) : {},
						m = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(g).filter(function(p) {
						return Object.getOwnPropertyDescriptor(g, p).enumerable
					})), m.forEach(function(p) {
						d(r, p, g[p])
					})
				}
				return r
			}

			function d(r, i, g) {
				return i = a(i), i in r ? Object.defineProperty(r, i, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = g, r
			}

			function a(r) {
				var i = v(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function v(r, i) {
				if (typeof r != "object" || r === null) return r;
				var g = r[Symbol.toPrimitive];
				if (g !== void 0) {
					var m = g.call(r, i || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			const c = "TURNSTILE";
			let u = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const _ = ({
					name: r,
					product: i = c,
					category: g = "user journey",
					page: m,
					additionalData: p = {}
				}) => {
					o().sendEvent(r, s({
						category: g,
						page: m,
						product: i
					}, p || {}))
				},
				n = () => {
					var r;
					return (r = Object.values(u)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return u
				},
				Ky: function() {
					return _
				},
				RJ: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(m) {
						return Object.getOwnPropertyDescriptor(i, m).enumerable
					})), g.forEach(function(m) {
						d(n, m, i[m])
					})
				}
				return n
			}

			function d(n, r, i) {
				return r = a(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function a(n) {
				var r = v(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.GROUP_TABLE_ROW_CLICK = "user group table row click", n.GROUP_TABLE_ROW_MEMBERS_CLICK = "user group table row members click", n.GROUP_TABLE_ROW_POLICIES_CLICK = "user group table row policies click", n.GROUP_TABLE_ROW_SETTINGS_CLICK = "user group table row settings click", n.BACK_BUTTON = "clicked back from user group detail", n.MEMBER_ADD = "add user group member", n.MEMBER_DELETE = "delete user group member", n.POLICY_SAVE = "user group policies save", n.POLICY_DELETE = "user group policies delete", n
			}({});
			const u = ({
					name: n,
					additionalData: r = {}
				}) => {
					o().sendEvent(n, s({}, r || {}))
				},
				_ = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				d: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				default: (0, e.BC)`/${"accountId"}/`,
				home: (0, e.BC)`/${"accountId"}/home`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`,
				websites: (0, e.BC)`/${"accountId"}/websites`
			}
		},
		"../react/pages/zone-versioning/selectors.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$e: function() {
					return k
				},
				$h: function() {
					return l
				},
				G: function() {
					return w
				},
				M3: function() {
					return I
				},
				Tr: function() {
					return O
				},
				UY: function() {
					return p
				},
				bH: function() {
					return r
				},
				fv: function() {
					return D
				},
				hF: function() {
					return C
				},
				iw: function() {
					return g
				},
				m7: function() {
					return n
				},
				re: function() {
					return f
				},
				tp: function() {
					return m
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				o = t("../../../../node_modules/reselect/lib/index.js"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				d = t("../react/app/components/SidebarNav/permissions.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts");

			function v(y) {
				for (var P = 1; P < arguments.length; P++) {
					var S = arguments[P] != null ? Object(arguments[P]) : {},
						M = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(S).filter(function(F) {
						return Object.getOwnPropertyDescriptor(S, F).enumerable
					})), M.forEach(function(F) {
						c(y, F, S[F])
					})
				}
				return y
			}

			function c(y, P, S) {
				return P = u(P), P in y ? Object.defineProperty(y, P, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[P] = S, y
			}

			function u(y) {
				var P = _(y, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function _(y, P) {
				if (typeof y != "object" || y === null) return y;
				var S = y[Symbol.toPrimitive];
				if (S !== void 0) {
					var M = S.call(y, P || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(y)
			}
			const n = y => (0, s.nA)(y) ? (0, a.p1)(y) && (0, d.$n)(y, "zone_versioning", "versioning") : !1,
				r = y => y.zoneVersioning.zoneApplications,
				i = (0, e.P1)("zoneApplications", r),
				g = y => y.zoneVersioning.zoneVersions,
				m = (0, e.P1)("zoneVersions", g),
				p = (0, o.P1)(m, y => {
					if (y) return y.filter(P => P.status == "V")
				}),
				b = y => y.zoneVersioning.environments,
				O = y => y.zoneVersioning.environments.isRequesting,
				h = (0, e.P1)("environments", b),
				l = (0, o.P1)(i, y => {
					if (y) {
						if (y.length === 1) return y[0];
						y.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${y.length}`))
					}
					return null
				}),
				C = (0, o.P1)(h, y => y ? y.environments : []),
				f = y => {
					var P;
					return (P = y.zoneVersioning) === null || P === void 0 ? void 0 : P.zoneVersionSelector
				},
				w = (0, o.P1)(f, m, (y, P) => {
					if (!(y == null ? void 0 : y.isVersion) || !P) return null;
					const S = P.find(M => {
						if (M.version === y.selectedVersion && M.locked) return !0
					});
					return S ? v({}, S, {
						isLocked: !0
					}) : null
				}),
				k = (0, o.P1)(m, C, (y, P) => !P || !y ? [] : y.map(S => {
					const M = [];
					for (const F in P) P[F].version === S.version && M.push(P[F]);
					return v({}, S, {
						environments: M
					})
				})),
				A = y => y.zoneVersioning.WAFMigrationStatus,
				I = (0, e.P1)("WAFMigrationStatus", A),
				D = y => y.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$2: function() {
					return A
				},
				CI: function() {
					return w
				},
				IS: function() {
					return c
				},
				L7: function() {
					return a
				},
				Lt: function() {
					return m
				},
				Oj: function() {
					return i
				},
				QV: function() {
					return p
				},
				S6: function() {
					return I
				},
				X$: function() {
					return C
				},
				X6: function() {
					return _
				},
				d4: function() {
					return g
				},
				fE: function() {
					return u
				},
				im: function() {
					return h
				},
				lv: function() {
					return b
				},
				rL: function() {
					return n
				},
				wW: function() {
					return v
				}
			});

			function e(D) {
				for (var y = 1; y < arguments.length; y++) {
					var P = arguments[y] != null ? Object(arguments[y]) : {},
						S = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(P).filter(function(M) {
						return Object.getOwnPropertyDescriptor(P, M).enumerable
					})), S.forEach(function(M) {
						o(D, M, P[M])
					})
				}
				return D
			}

			function o(D, y, P) {
				return y = s(y), y in D ? Object.defineProperty(D, y, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[y] = P, D
			}

			function s(D) {
				var y = d(D, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function d(D, y) {
				if (typeof D != "object" || D === null) return D;
				var P = D[Symbol.toPrimitive];
				if (P !== void 0) {
					var S = P.call(D, y || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(D)
			}
			const a = {
					vsCodeEditor: {
						production: "https://code.captain.cfdata.org",
						staging: "https://code.captain-staging.cfdata.org"
					},
					documentation: {
						configFile: "https://developers.cloudflare.com/pages/functions/wrangler-configuration/",
						workersAPI: "https://developers.cloudflare.com/api/operations/worker-script-list-workers",
						root: "https://workers.cloudflare.com/docs",
						configuration: "https://developers.cloudflare.com/workers/configuration",
						compatibilityDates: "https://developers.cloudflare.com/workers/configuration/compatibility-dates/",
						compatibilityFlags: "https://developers.cloudflare.com/workers/configuration/compatibility-dates/#compatibility-flags",
						installWrangler: "https://developers.cloudflare.com/workers/wrangler/install-and-update/",
						wranglerDocs: "https://developers.cloudflare.com/workers/wrangler/",
						wranglerCommands: "https://developers.cloudflare.com/workers/wrangler/commands/",
						starters: "https://developers.cloudflare.com/workers/starters",
						eggheadCourse: "https://egghead.io/courses/introduction-to-cloudflare-workers-5aa3",
						tutorials: "https://developers.cloudflare.com/workers/tutorials",
						examples: "https://developers.cloudflare.com/workers/examples",
						durableObjects: "https://developers.cloudflare.com/workers/learning/using-durable-objects",
						writingWorkers: "https://developers.cloudflare.com/workers/get-started/guide/#5-write-code",
						kv: "https://developers.cloudflare.com/workers/learning/how-kv-works",
						kvGetStarted: "https://developers.cloudflare.com/kv/get-started/",
						kvBindings: "https://developers.cloudflare.com/workers/runtime-apis/kv#kv-bindings",
						kvNamespaces: "https://developers.cloudflare.com/workers/reference/storage/namespaces/",
						kvMetrics: "https://developers.cloudflare.com/kv/observability/metrics-analytics/",
						envVars: "https://developers.cloudflare.com/workers/reference/apis/environment-variables/",
						api: "https://workers.cloudflare.com/docs/reference/tooling/api",
						scheduledEventListener: "https://developers.cloudflare.com/workers/runtime-apis/add-event-listener#scheduled-listener",
						errors: "https://developers.cloudflare.com/workers/platform/limits",
						cpuLimits: "https://developers.cloudflare.com/workers/platform/limits/#cpu-time",
						walltimeLimits: "https://developers.cloudflare.com/workers/platform/limits/#wall-time",
						pagesFunctionsPricing: "https://developers.cloudflare.com/pages/functions/pricing/",
						pricing: "https://developers.cloudflare.com/workers/platform/pricing",
						computeSetting: "https://developers.cloudflare.com/workers/platform/cron-triggers#green-compute",
						usageModels: "https://developers.cloudflare.com/workers/platform/pricing#usage-models",
						usageModelCLIDocs: "https://developers.cloudflare.com/workers/cli-wrangler/configuration#keys",
						wrangler: "https://developers.cloudflare.com/workers/wrangler/",
						pagesDirectUploadCLI: "https://developers.cloudflare.com/pages/get-started/direct-upload/#wrangler-cli",
						bindings: {
							index: "https://developers.cloudflare.com/workers/runtime-apis/bindings",
							ai: "https://developers.cloudflare.com/workers-ai",
							analyticsEngine: "https://developers.cloudflare.com/analytics/analytics-engine",
							assets: "https://developers.cloudflare.com/workers/static-assets/binding",
							browserRendering: "https://developers.cloudflare.com/browser-rendering",
							d1: "https://developers.cloudflare.com/d1",
							dispatchNamespace: "https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/get-started/configuration",
							durableObjects: "https://developers.cloudflare.com/durable-objects",
							hyperdrive: "https://developers.cloudflare.com/hyperdrive",
							images: "https://developers.cloudflare.com/images/transform-images/bindings/",
							kv: "https://developers.cloudflare.com/kv",
							mTLS: "https://developers.cloudflare.com/workers/runtime-apis/bindings/mtls",
							queues: "https://developers.cloudflare.com/queues/configuration/javascript-apis",
							r2: "https://developers.cloudflare.com/r2/api/workers/workers-api-reference",
							rateLimiting: "https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit",
							secrets_store_secret: "https://developers.cloudflare.com/secrets-store/integrations/workers/",
							service: "https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings",
							vectorize: "https://developers.cloudflare.com/vectorize/reference/client-api",
							versionMetadata: "https://developers.cloudflare.com/workers/runtime-apis/bindings/version-metadata",
							workflows: "https://developers.cloudflare.com/workflows"
						},
						modules: "https://developers.cloudflare.com/workers/cli-wrangler/configuration#modules",
						routes: "https://developers.cloudflare.com/workers/platform/routes/#matching-behavior",
						routesAndDomains: "https://developers.cloudflare.com/workers/configuration/routing",
						routesDNS: "https://developers.cloudflare.com/workers/platform/triggers/routes/#subdomains-must-have-a-dns-record",
						customDomains: "https://developers.cloudflare.com/workers/platform/routing/custom-domains",
						fetchEvent: "https://developers.cloudflare.com/workers/runtime-apis/fetch-event",
						scheduledWorkers: "https://developers.cloudflare.com/workers/configuration/cron-triggers",
						emailWorkers: "https://developers.cloudflare.com/email-routing/email-workers/",
						cronSyntax: "https://developers.cloudflare.com/workers/platform/cron-triggers#supported-cron-expressions",
						scheduledEvents: "https://developers.cloudflare.com/workers/runtime-apis/scheduled-event",
						languages: "https://developers.cloudflare.com/workers/platform/languages",
						durableObjectsChatExample: "https://developers.cloudflare.com/workers/learning/using-durable-objects#websockets-in-durable-objects",
						durableObjectsCounterExample: "https://developers.cloudflare.com/workers/learning/using-durable-objects#example---counter",
						services: "https://developers.cloudflare.com/workers/platform/services",
						serviceBindings: "https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/",
						metrics: {
							root: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/",
							requestsTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#requests",
							cpuTimeTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#cpu-time-per-execution",
							durationTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#execution-duration-gb-seconds",
							requestDurationTimeseries: "https://developers.cloudflare.com/workers/learning/metrics-and-analytics/#request-duration",
							dataEgressTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#data-egress",
							subRequestsTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#subrequests",
							wallTimeTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#wall-time-per-execution",
							invocationStatuses: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#invocation-statuses"
						},
						logpush: {
							generalDocs: "https://developers.cloudflare.com/workers/platform/logpush",
							createJob: "https://developers.cloudflare.com/workers/platform/logpush/#create-a-logpush-job"
						},
						mtlsCertificates: "https://developers.cloudflare.com/workers/runtime-apis/mtls",
						uploadMtlsCertificates: "https://developers.cloudflare.com/workers/wrangler/commands#mtls-certificate",
						smartPlacement: "https://developers.cloudflare.com/workers/platform/smart-placement/",
						smartPlacementStatus: "https://developers.cloudflare.com/workers/configuration/smart-placement/#placement-status",
						smartPlacementHowItWorks: "https://developers.cloudflare.com/workers/configuration/smart-placement/#understand-how-smart-placement-beta-works",
						smartPlacementBackendServices: "https://developers.cloudflare.com/workers/configuration/smart-placement/#unsupported-back-end-services",
						integrations: "https://developers.cloudflare.com/workers/databases/connecting-to-databases/",
						tailWorkers: "https://developers.cloudflare.com/workers/platform/tail-workers",
						dispatchNamespaces: "https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/platform/outbound-workers",
						invalidCORSPolicy: "https://developers.cloudflare.com/r2/buckets/cors/#common-issues",
						createCloudflare: "https://www.npmjs.com/package/create-cloudflare",
						userCpuLimits: "https://developers.cloudflare.com/workers/platform/pricing/#standard-usage-model",
						versions: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments",
						environments: "https://developers.cloudflare.com/workers/wrangler/environments/",
						gradualDeployments: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/gradual-deployments",
						rollbacks: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/rollbacks",
						moduleSyntax: "https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/#migrate-from-service-workers-to-es-modules",
						configureQueues: "https://developers.cloudflare.com/queues/configuration/configure-queues/",
						observability: "https://developers.cloudflare.com/workers/observability/",
						observabilityLogs: "https://developers.cloudflare.com/workers/observability/logs/workers-logs/",
						workersAssets: "https://developers.cloudflare.com/workers/static-assets/"
					},
					serverlist: "https://blog.cloudflare.com/tag/serverlist/",
					discord: "https://discord.cloudflare.com/",
					community: "https://community.cloudflare.com/tag/workers",
					billing: "https://developers.cloudflare.com/workers/platform/pricing",
					network: "https://www.cloudflare.com/network",
					builtWithWorkers: "https://workers.cloudflare.com/built-with/",
					workersSupplementalTerms: "https://www.cloudflare.com/supplemental-terms/#CFWorkers",
					freeKvBlogPost: "https://blog.cloudflare.com/workers-kv-free-tier/",
					durableObjectsSurvey: "https://docs.google.com/forms/d/e/1FAIpQLSfJeZKlM_InqG7thczqGCaxEOqwsJm1Xdv8Kz0zd4zp3VNvMg/viewform",
					durableObjectsBetaBlogPost: "https://blog.cloudflare.com/durable-objects-open-beta/",
					usageModelSurvey: "https://docs.google.com/forms/d/e/1FAIpQLSeOKaVp9pC-sXvEQsgmKZc1b-BxdDRcIoL0jpOQWCHlAR9SiA/viewform",
					workersUnboundBlogPost: "https://blog.cloudflare.com/workers-unbound-ga/",
					cloudflareSubscriptionTerms: "https://www.cloudflare.com/terms",
					integrationsFeedback: "https://forms.gle/cMkH8G78MpGFP7Yo6",
					workersStandardPricing: "https://blog.cloudflare.com/workers-pricing-scale-to-zero"
				},
				v = 800,
				c = "40rem",
				u = {
					pricing: {
						requests: .15,
						duration: 12.5,
						bytes_stored: .2,
						rows_read: .001,
						rows_written: 1
					}
				},
				_ = {
					d1_included_capacity: 5e9,
					d1_included_read_count: 25e9,
					d1_included_write_count: 5e7,
					pricing: {
						storage: .75,
						read_units: .001,
						write_units: 1
					}
				},
				n = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e7,
					ubb_frequency: 1e6,
					ubb_price: .5,
					ubb_price_ent: .6,
					additional_million_requests_price: .15,
					additional_million_requests_price_ent: .18,
					additional_million_standard_requests_price: .3,
					additional_million_standard_cpu_time_price: .02,
					additional_million_gb_duration_price: 12.5,
					additional_million_gb_duration_price_ent: 15,
					additional_egress_gb_transfer_price: .045,
					additional_egress_gb_transfer_price_ent: .054,
					kv_storage_modify_price: 5,
					kv_storage_included_capacity: 1e9,
					kv_storage_read_count: 1e7,
					kv_storage_modify_count: 1e6,
					trace_logs: 1e7,
					additional_million_trace_logs_price: .05,
					trace_logs_frequency: 1e6
				},
				r = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e7,
					ubb_frequency: 1e6,
					ubb_price: .6,
					kv_storage_modify_price: 6,
					kv_storage_included_capacity: 1e9,
					kv_storage_read_count: 1e7,
					kv_storage_modify_count: 1e6
				},
				i = {
					free: {
						rateLimit: 1e3,
						maximumRequests: 1e5,
						maximumRequestsRuntimeCutoff: 12e4,
						limits: {
							Threshold1: .75,
							Threshold2: .9,
							Exceeded: 1
						}
					},
					paid: e({
						ubbRequests: 1e6,
						maximumRequests: 1e7
					}, n),
					ent_ss: e({
						ubbRequests: 1e6,
						maximumRequests: 1e7
					}, r),
					unbound: {
						bundledRequests: 10,
						unboundRequests: 1,
						unboundDuration: 4e5,
						unboundEgress: 5,
						kvMonthlyRead: 10,
						kvMonthlyWrite: 1
					},
					standard: {
						requests: 10,
						cpuTimeMilliseconds: 30
					}
				},
				g = {
					free: {
						events: 1e5,
						retention: 3
					},
					paid: {
						events: 2e7,
						meteredCostPerMillionEvents: .6,
						retention: 7
					}
				},
				m = {
					free: {
						minutes: 3e3
					},
					paid: {
						minutes: 6e3
					}
				},
				p = {
					enableWorkers: "enable workers",
					setupSubdomain: "set up subdomain",
					selectPlan: "select workers plan",
					verifyEmail: "verify email",
					clickApplicationName: "click application name",
					clickChangeComputeSetting: "click change compute setting",
					clickChangeSubdomain: "click change subdomain",
					clickConnectToGit: "click connect to git",
					clickCreateProjectSuccessResource: "click create project success resource",
					clickCreateProjectSuccessNextStep: "click create project success next step",
					clickSetupAE: "click setup AE",
					clickUploadAssets: "click upload assets",
					clickWorkerEditCode: "click worker edit code",
					clickWorkersManageNotificationsAlerts: "click workers manage notifications and alerts",
					clickWorkersManageAccountMembers: "click workers manage account members",
					clickWorkersResource: "click workers resource",
					createApplicationClickWorkersDocs: "create application click workers docs",
					createApplicationClickPagesDocs: "create application click pages docs",
					createApplicationCreateWithCLI: "create application click create with CLI",
					createApplicationSelectWorkers: "create application select workers",
					createApplicationSelectPages: "create application select pages",
					createService: "create service",
					createPlaygroundWorker: "create worker from playground",
					createWorkerSelectFilter: "create worker select filter",
					cancelCreatePlaygroundWorker: "cancel create worker from playground",
					deployWorkerScript: "deploy worker script",
					setupCustomDomain: "set up custom domain",
					addWorkersRoute: "add workers route",
					editWorkersRoute: "edit workers route",
					addCronTrigger: "add cron trigger",
					editCronTrigger: "edit cron trigger",
					beginLogStream: "begin log stream",
					editEnvVariables: "edit service environment variables",
					encryptVariable: "encrypt variable",
					editNamespaceBindings: "edit service kv bindings",
					editR2Bindings: "edit service r2 bindings",
					editQueueBindings: "edit service queue bindings",
					editConstellationBindings: "edit service constellation bindings",
					editHyperdriveBindings: "edit service hyperdrive bindings",
					editAiBindings: "edit service ai bindings",
					editVectorizeBindings: "edit service vectorize bindings",
					editServiceBindings: "edit service to service bindings",
					renameService: "rename service",
					deleteService: "delete service",
					sortServices: "sort services",
					searchServices: "search services",
					paginateServices: "paginate services",
					createKVNamespace: "create kv namespace",
					deleteKVNamespace: "delete kv namespace",
					renameKVNamespace: "rename kv namespace",
					listKVNamespaces: "list kv namespaces",
					searchKVNamespaces: "search kv namespaces",
					paginateKVNamespaces: "paginate kv namespaces",
					addKVKeyValue: "add kv key-value",
					editKVKeyValue: "edit kv key-value",
					deleteKVKeyValue: "delete kv key-value",
					readKVKeyValue: "read kv key-value",
					listKVKeyValues: "list kv key-values",
					searchKVKeyValues: "search kv key-values",
					paginateKVKeyValues: "paginate kv key-values",
					editMtlsCertificateBindings: "edit service mtls certificate bindings",
					quickEditHttpTab: "quick edit http tab",
					quickEditPreviewTab: "quick edit preview tab",
					quickEditScheduleTab: "quick edit schedule tab",
					quickEditWranglerTab: "quick edit wrangler tab",
					rollbackDeployment: "rollback deployment",
					editTailConsumers: "edit service tail consumers",
					editDispatchNamespaceBindings: "edit dispatch namespace bindings",
					clickedDownloadAnalytics: "clicked Workers download analytics",
					clickedPrintAnalytics: "clicked Workers print analytics",
					toggledSmartPlacement: "toggled Workers smart placement",
					copiedVersionId: "workers copied version id",
					clickElement: "click element",
					createResource: "create resource",
					deleteResource: "delete resource",
					updateResource: "update resource",
					clickedDiscordLink: "clicked sidebar Discord link",
					clickedCommunityLink: "clicked sidebar Community Forum link",
					clickDetailTab: "click worker detail tab",
					clickedBundledUsageModel: "Workers:Clicked Bundled Usage Model",
					clickedUnboundUsageModel: "Workers:Clicked Unbound Usage Model",
					clickedGreenComputeSetting: "Workers:Clicked Green Compute Setting",
					clickedGlobalComputeSetting: "Workers:Clicked Global Compute Setting",
					addWCITriggerToExistingWorker: "WCI:add WCI trigger to existing worker",
					updateWCITrigger: "WCI:update WCI trigger",
					deleteWCITrigger: "WCI:delete WCI trigger",
					addWCITriggerToNewWorker: "WCI:create worker with WCI trigger",
					createWCIBuildForNewWorker: "WCI:create WCI build in create from repo flow",
					completedWCIBuildForNewWorker: "WCI:completed WCI build in create from repo flow",
					clickCreateWorkerFromRepoNextStep: "WCI:click create worker from repo next step",
					clickCreateWorkerFromRepoPreviousStep: "WCI:click create worker from repo previous step",
					changedDefaultConfigurations: "WCI:changed default configuration",
					clickCreateNewSCMConnection: "WCI:click create scm connection",
					redirectFromSCMOAuth: "WCI:redirect from SCM connection OAuth",
					clickSubmitError: "WCI:attempt invalid build configuration",
					enableBuildCache: "WCI:enable build cache",
					disableBuildCache: "WCI:disable build cache",
					clearBuildCache: "WCI:clear build cache",
					updateEnvVar: "WCI:update WCI trigger env var",
					clickedImportRepository: "clicked import repository",
					clickedClonePublicRepositoryFromUrl: "clicked clone public repository from url",
					clickedListTemplates: "clicked list workers templates",
					selectTemplate: "select workers template",
					templateStubWorkerCreated: "template stub worker created",
					templateStubWorkerCreationFailed: "template stub worker creation failed",
					templateRepositoryCreated: "template repository created",
					templateRepositoryCreationFailed: "template repository creation failed",
					copyTemplateC3Command: "template copy c3 command",
					templateDeployClick: "template deploy click",
					reauthenticateGithubModalShown: "reauthenticate github modal shown",
					updateGithubPermissionsClicked: "update github permissions clicked",
					D2W_importRepository: "D2W: import a repository",
					D2W_stubWorkerCreated: "D2W: stub worker created",
					D2W_stubWorkerCreationFailed: "D2W: stub worker creation failed",
					D2W_repositoryCreated: "D2W: repository created",
					D2W_repositoryCreationFailed: "D2W: repository creation failed",
					D2W_resourcesProvisioned: "D2W: resources provisioned",
					D2W_resourceProvisioningFailed: "D2W: resource provisioning failed",
					D2W_githubAPIRateLimitReached: "D2W: GitHub API rate limit reached"
				},
				b = {
					insufficientData: "insufficient data to create/update trigger",
					createRepoConnectionError: "error creating repo connection",
					createTokenError: "error creating token",
					createUpdateTriggerError: "error creating/updating trigger",
					updateEnvironmentVariablesError: "error updating trigger environment variables",
					createWorkerError: "error creating worker",
					buildWorkerError: "error building worker",
					refreshWebhookError: "error refreshing gitlab webhook"
				},
				O = "workers.dev",
				h = "YYYY-MM-DD HH:mm:SS ZZ",
				l = "active",
				C = ["bundled", "unbound", "standard"],
				f = null,
				w = {
					observability: "workers-observability",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let k = function(D) {
				return D[D.NONE = 0] = "NONE", D[D.MISS = 1] = "MISS", D[D.EXPIRED = 2] = "EXPIRED", D[D.UPDATING = 3] = "UPDATING", D[D.STALE = 4] = "STALE", D[D.HIT = 5] = "HIT", D[D.IGNORED = 6] = "IGNORED", D[D.BYPASS = 7] = "BYPASS", D[D.REVALIDATED = 8] = "REVALIDATED", D[D.DYNAMIC = 9] = "DYNAMIC", D[D.STREAM_HIT = 10] = "STREAM_HIT", D[D.DEFERRED = 11] = "DEFERRED", D
			}({});
			const A = [k.HIT, k.STREAM_HIT];
			let I = function(D) {
				return D.SECRETS_STORE_ID = "store_id", D.SECRET_NAME = "secret_name", D
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return c
				},
				L: function() {
					return s
				},
				Q9: function() {
					return d
				},
				_j: function() {
					return a
				},
				ky: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = u => `${u}.workers.dev`,
				s = (u, _, n) => `${n?`${n}.`:""}${u}.${o(_)}`,
				d = (u, _, n) => `https://${s(u,_,n)}`,
				a = {
					workersOverview: (0, e.BC)`/${"accountId"}/workers/overview`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/workers`,
					root: (0, e.BC)`/${"accountId"}/workers`,
					onboarding: (0, e.BC)`/${"accountId"}/workers-and-pages/create`,
					observability: (0, e.BC)`/${"accountId"}/workers-and-pages/observability`,
					overview: (0, e.BC)`/${"accountId"}/workers/overview`,
					subdomain: (0, e.BC)`/${"accountId"}/workers/subdomain`,
					defaultUsageModel: (0, e.BC)`/${"accountId"}/workers/default-usage-model`,
					computeSetting: (0, e.BC)`/${"accountId"}/workers/compute-setting`,
					cli: (0, e.BC)`/${"accountId"}/workers/cli`,
					kvRoot: (0, e.BC)`/${"accountId"}/workers/kv`,
					kvStore: (0, e.BC)`/${"accountId"}/workers/kv/namespaces`,
					d1Store: (0, e.BC)`/${"accountId"}/workers/d1`,
					plans: (0, e.BC)`/${"accountId"}/workers/plans`,
					purchase: (0, e.BC)`/${"accountId"}/workers/plans/purchase`,
					standardOptIn: (0, e.BC)`/${"accountId"}/workers/standard/opt-in`,
					kvNamespace: (0, e.BC)`/${"accountId"}/workers/kv/namespaces/${"namespaceId"}`,
					d1Database: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}`,
					editServiceScript: (0, e.BC)`/${"accountId"}/workers/services/edit/${"serviceId"}/${"environmentName"}`,
					editServiceScriptContainerBacked: (0, e.BC)`/${"accountId"}/workers/services/edit/${"serviceId"}/${"environmentName"}/vs-code`,
					durableObjectDetails: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}`,
					durableObjectDetailsSettings: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}/settings`,
					manageSubscriptions: (0, e.BC)`/${"accountId"}/billing/subscriptions`,
					manageNotifications: (0, e.BC)`/${"accountId"}/notifications`,
					servicesRoot: (0, e.BC)`/${"accountId"}/workers/services`,
					logsLive: (0, e.BC)`/${"accountId"}/workers/services/live-logs/${"serviceId"}/${"environmentName"}`,
					cronEvents: (0, e.BC)`/${"accountId"}/workers/services/cron-events/${"serviceId"}/${"environmentName"}`,
					createService: (0, e.BC)`/${"accountId"}/workers/services/new`,
					manageService: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					renameService: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/rename`,
					serviceDetailsRoot: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}`,
					serviceDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}`,
					serviceDetailsMetrics: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/metrics`,
					serviceDetailsChart: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/metrics/charts/${"chart"}`,
					serviceDetailsBuilds: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/builds`,
					serviceDetailsBuildDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/builds/${"build_uuid"}`,
					serviceDetailsDeployments: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/deployments`,
					serviceDetailsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/triggers`,
					serviceDetailsTriggersV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#domains`,
					serviceDetailsBindings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/bindings`,
					serviceDetailsSettings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings`,
					serviceDetailsSettingsGeneral: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/general`,
					serviceDetailsSettingsGeneralV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#general`,
					serviceDetailsSettingsBindings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/bindings`,
					serviceDetailsSettingsBindingsV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#bindings`,
					serviceDetailsSettingsBuilds: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/builds`,
					serviceDetailsSettingsBuildsV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#builds`,
					serviceDetailsSettingsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/triggers`,
					serviceDetailsSettingsTriggersV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#trigger-events`,
					serviceDetailsSettingsObservabilityV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings?setupObservability=true`,
					serviceDetailsSettingsRuntimeV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#runtime`,
					serviceDetailsObservabilityLogs: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/observability/logs`,
					serviceDetailsManage: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					serviceDetailsRename: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/rename`,
					createDeployment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deploy-version`,
					deploymentHistory: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deployment-history`,
					createEnvironment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/environment/new`,
					apiKey: (0, e.BC)`/profile/api-tokens`,
					signUp: (0, e.BC)`/sign-up/workers`,
					dns: (0, e.BC)`/${"accountId"}/${"zoneName"}/dns`,
					ssl: (0, e.BC)`/${"accountId"}/${"zoneName"}/ssl-tls/edge-certificates`,
					analyticsEngine: (0, e.BC)`/${"accountId"}/workers/analytics-engine`,
					analyticsEngineStudio: (0, e.BC)`/${"accountId"}/workers/analytics-engine/studio`,
					emailRouting: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes`,
					emailRoutingRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes/${"ruleId"}`,
					zones: (0, e.BC)`/${"accountId"}`,
					developerPlatform_workers_create: (0, e.BC)`/${"accountId"}/developer-platform/workers/onboarding`,
					developerPlatform_workers_success: (0, e.BC)`/${"accountId"}/developer-platform/workers/success`,
					logpush: (0, e.BC)`/${"accountId"}/logs`,
					members: (0, e.BC)`/${"accountId"}/members`,
					workflowDetails: (0, e.BC)`/${"accountId"}/workers/workflows/${"workflowName"}`
				},
				v = "https://cron-triggers.cloudflareworkers.com",
				c = {
					accountMtlsCertificates: (0, e.BC)`/accounts/${"accountId"}/mtls_certificates`,
					accountLogpushJobs: (0, e.BC)`/accounts/${"accountId"}/logpush/jobs`,
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/workers/account-settings`,
					builds: {
						build: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}`,
						cancelBuild: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/cancel`,
						retryBuild: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/builds`,
						latestBuildsByWorkers: (0, e.BC)`/accounts/${"accountId"}/builds/builds/latest`,
						buildLogs: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/logs`,
						buildsByScriptId: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/builds`,
						buildsByVersionIds: (0, e.BC)`/accounts/${"accountId"}/builds/builds`,
						buildTokens: (0, e.BC)`/accounts/${"accountId"}/builds/tokens`,
						githubUserType: (0, e.BC)`/accounts/${"accountId"}/builds/providers/github/users/${"username"}/type`,
						refreshWebhook: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos/${"repo"}/webhooks/refresh`,
						repoConnections: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections`,
						repoConnection: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections/${"repo_connection_uuid"}`,
						triggers: (0, e.BC)`/accounts/${"accountId"}/builds/triggers`,
						trigger: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}`,
						purgeTriggerCache: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/purge_build_cache`,
						triggerEnvironmentVariables: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/environment_variables`,
						triggerEnvironmentVariable: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/environment_variables/${"environment_variable_key"}`,
						workerTriggers: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/triggers`,
						configAutofill: (0, e.BC)`/accounts/${"accountId"}/builds/repos/${"providerType"}/${"providerAccountId"}/${"repoId"}/config_autofill?branch=${"branch"}&root_directory=${"rootDirectory"}`,
						accountLimits: (0, e.BC)`/accounts/${"accountId"}/builds/account/limits`
					},
					certificates: (0, e.BC)`/zones/${"zoneId"}/ssl/certificate_packs/${"certId"}`,
					createApiToken: (0, e.BC)`/user/tokens`,
					createTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails`,
					getApiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					deleteApiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					deleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails/${"tailId"}`,
					deployments: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/deployments`,
					describeCron: `${v}/describe`,
					dnsRecords: (0, e.BC)`/zones/${"zoneId"}/dns_records`,
					dnsRoute: (0, e.BC)`/accounts/${"accountId"}/workers/domains/records/${"recordId"}`,
					dnsRouteChangeset: (0, e.BC)`/accounts/${"accountId"}/workers/domains/changeset`,
					dnsRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/domains/records`,
					durableObjectNamespace: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces/${"namespaceId"}`,
					durableObjectNamespaces: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces`,
					durableObjectsInNamespace: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces/${"namespaceId"}/objects`,
					edgePreview: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/edge-preview`,
					edgePreviewInit: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain/edge-preview`,
					edgePreviewZoneInit: (0, e.BC)`/zones/${"zone"}/workers/edge-preview`,
					featureFlagSettings: (0, e.BC)`/accounts/${"accountId"}/workers/settings`,
					kvNamespace: (0, e.BC)`/accounts/${"accountId"}/storage/kv/namespaces/${"namespaceId"}`,
					kvNamespaces: (0, e.BC)`/accounts/${"accountId"}/storage/kv/namespaces`,
					newVersions: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/versions`,
					nextCron: `${v}/next`,
					outboundDispatchers: (0, e.BC)`/accounts/${"accountId"}/workers/dispatch_outbounds/by-outbound/${"serviceId"}/environment/${"environmentName"}`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					promoteDeployment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"sourceEnv"}/promote/${"targetEnv"}`,
					queues: (0, e.BC)`/accounts/${"accountId"}/workers/queues`,
					service: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}`,
					serviceBindings: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/bindings`,
					serviceBindingsReferences: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/references`,
					serviceCopyEnvironment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/copy/${"toEnvironmentName"}`,
					services: (0, e.BC)`/accounts/${"accountId"}/workers/services`,
					serviceSettings: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/settings`,
					scriptsWithSubdomain: (0, e.BC)`/accounts/${"accountId"}/workers/scripts?include_subdomain_availability=true`,
					scriptsByHandler: (0, e.BC)`/accounts/${"accountId"}/workers/scripts?handlers=${"handler"}`,
					scriptSettingsV2: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"serviceId"}/script-settings`,
					serviceCreateTail: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/tails`,
					serviceDeleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/tails/${"tailId"}`,
					serviceEmailTriggers: (0, e.BC)`/accounts/${"accountId"}/email/routing/rules`,
					serviceEnvironment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}`,
					servicePreview: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/preview`,
					serviceRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/routes`,
					serviceSchedules: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/schedules`,
					serviceScript: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/content`,
					serviceScriptRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/routes/${"routeId"}`,
					serviceScriptV2: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/content/v2?omit=sourcemaps`,
					serviceSubdomain: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/subdomain`,
					serviceUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/usage-model`,
					spectrum: (0, e.BC)`/zones/${"zoneId"}/spectrum/apps/dns`,
					standard: (0, e.BC)`/accounts/${"accountId"}/workers/standard`,
					subdomain: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain`,
					subdomainCertStatus: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain/ssl`,
					subdomainDeployed: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/subdomain`,
					tailsByConsumer: (0, e.BC)`/accounts/${"accountId"}/workers/tails/by-consumer/${"serviceId"}/environment/${"environment"}`,
					validateCron: `${v}/validate`,
					versions: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}`,
					version: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}/detail/${"versionTag"}`,
					workersObservability: {
						telemetry: {
							query: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/query`,
							keys: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/keys`,
							values: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/values`
						},
						parameters: {
							post: (0, e.BC)`/accounts/${"accountId"}/workers/observability/parameters`,
							rate: (0, e.BC)`/accounts/${"accountId"}/workers/observability/parameters/${"generationId"}/rate`
						},
						queries: {
							list: (0, e.BC)`/accounts/${"accountId"}/workers/observability/queries`,
							create: (0, e.BC)`/accounts/${"accountId"}/workers/observability/queries`,
							query: (0, e.BC)`/accounts/${"accountId"}/workers/observability/queries/${"queryId"}`
						},
						usage: (0, e.BC)`/accounts/${"accountId"}/workers/observability/usage`,
						usageStatuses: (0, e.BC)`/accounts/${"accountId"}/workers/observability/usage-statuses`,
						liveTail: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/live-tail`,
						issues: {
							list: (0, e.BC)`/accounts/${"accountId"}/workers/observability/issues`,
							get: (0, e.BC)`/accounts/${"accountId"}/workers/observability/issues/${"issueId"}`,
							patch: (0, e.BC)`/accounts/${"accountId"}/workers/observability/issues/${"issueId"}`
						}
					},
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerSecrets: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/secrets`,
					workerSecret: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/secrets/${"secretName"}`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					workflows: (0, e.BC)`/accounts/${"accountId"}/workflows`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				MN: function() {
					return s
				},
				Yg: function() {
					return a
				},
				i$: function() {
					return d
				},
				l3: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const s = async ([c, u]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: c,
					variables: u
				})
			})).body, d = async (...c) => (await e.get(...c)).body, a = c => async (u, _) => {
				const n = await fetch(u, _).then(r => r.json());
				return c.assertDecode(n)
			}, v = async (...c) => (await d(...c)).result;
			E.ZP = {
				fetcher: c => Array.isArray(c) ? v(...c) : v(c)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(j, E) {
				E()
			})(this, function() {
				"use strict";

				function j() {
					var t = !0,
						e = !1,
						o = null,
						s = {
							text: !0,
							search: !0,
							url: !0,
							tel: !0,
							email: !0,
							password: !0,
							number: !0,
							date: !0,
							month: !0,
							week: !0,
							time: !0,
							datetime: !0,
							"datetime-local": !0
						};

					function d(b) {
						return !!(b && b !== document && b.nodeName !== "HTML" && b.nodeName !== "BODY" && "classList" in b && "contains" in b.classList)
					}

					function a(b) {
						var O = b.type,
							h = b.tagName;
						return !!(h == "INPUT" && s[O] && !b.readOnly || h == "TEXTAREA" && !b.readOnly || b.isContentEditable)
					}

					function v(b) {
						b.getAttribute("is-focus-visible") !== "" && b.setAttribute("is-focus-visible", "")
					}

					function c(b) {
						b.getAttribute("is-focus-visible") === "" && b.removeAttribute("is-focus-visible")
					}

					function u(b) {
						d(document.activeElement) && v(document.activeElement), t = !0
					}

					function _(b) {
						t = !1
					}

					function n(b) {
						!d(b.target) || (t || a(b.target)) && v(b.target)
					}

					function r(b) {
						!d(b.target) || b.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), c(b.target))
					}

					function i(b) {
						document.visibilityState == "hidden" && (e && (t = !0), g())
					}

					function g() {
						document.addEventListener("mousemove", p), document.addEventListener("mousedown", p), document.addEventListener("mouseup", p), document.addEventListener("pointermove", p), document.addEventListener("pointerdown", p), document.addEventListener("pointerup", p), document.addEventListener("touchmove", p), document.addEventListener("touchstart", p), document.addEventListener("touchend", p)
					}

					function m() {
						document.removeEventListener("mousemove", p), document.removeEventListener("mousedown", p), document.removeEventListener("mouseup", p), document.removeEventListener("pointermove", p), document.removeEventListener("pointerdown", p), document.removeEventListener("pointerup", p), document.removeEventListener("touchmove", p), document.removeEventListener("touchstart", p), document.removeEventListener("touchend", p)
					}

					function p(b) {
						b.target.nodeName.toLowerCase() !== "html" && (t = !1, m())
					}
					document.addEventListener("keydown", u, !0), document.addEventListener("mousedown", _, !0), document.addEventListener("pointerdown", _, !0), document.addEventListener("touchstart", _, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", i, !0), g(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function E(t) {
					var e;

					function o() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && E(j)
			})
		},
		"../react/utils/bootstrap.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				$8: function() {
					return o
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return d
				},
				gm: function() {
					return s
				}
			});
			const e = () => {
					var a, v, c;
					return (a = window) === null || a === void 0 || (v = a.bootstrap) === null || v === void 0 || (c = v.data) === null || c === void 0 ? void 0 : c.security_token
				},
				o = () => {
					var a, v, c;
					return !!((a = t.g.bootstrap) === null || a === void 0 || (v = a.data) === null || v === void 0 || (c = v.user) === null || c === void 0 ? void 0 : c.id)
				},
				s = () => {
					var a, v;
					return !!((a = t.g.bootstrap) === null || a === void 0 || (v = a.data) === null || v === void 0 ? void 0 : v.is_kendo)
				},
				d = () => {
					var a, v, c, u;
					return (a = window) === null || a === void 0 || (v = a.bootstrap) === null || v === void 0 || (c = v.data) === null || c === void 0 || (u = c.user) === null || u === void 0 ? void 0 : u.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				O5: function() {
					return d
				},
				Xm: function() {
					return s
				},
				kT: function() {
					return c
				},
				wV: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				s = () => (o() || "").indexOf("C0002") !== -1,
				d = () => (o() || "").indexOf("C0003") !== -1,
				a = () => (o() || "").indexOf("C0004") !== -1,
				v = () => (o() || "").indexOf("C0005") !== -1,
				c = n => {
					const r = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				u = () => {
					var n;
					const r = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				_ = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				AI: function() {
					return C
				},
				Kd: function() {
					return r
				},
				S8: function() {
					return l
				},
				ZW: function() {
					return u
				},
				ay: function() {
					return f
				},
				fh: function() {
					return w
				},
				i_: function() {
					return i
				},
				ly: function() {
					return n
				},
				th: function() {
					return c
				},
				ti: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				s = t("../../../common/intl/intl-types/src/index.ts"),
				d = t("../../../common/util/types/src/utils/index.ts"),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				v = t("../../../../node_modules/cookie/index.js");
			const c = "cf-sync-locale-with-cps",
				u = s.Q.en_US,
				_ = "en_US",
				n = "cf-locale";

			function r() {
				const I = (0, v.parse)(document.cookie);
				return a.Z.get(n) || I[n] || null
			}

			function i(I) {
				document.cookie = (0, v.serialize)(n, I, {
					path: "/",
					maxAge: 31536e3,
					secure: !0
				}), a.Z.set(n, I)
			}

			function g() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0,
					secure: !0
				}), cache.remove(n)
			}
			const m = I => (0, d.Yd)(s.Q).find(D => s.Q[D] === I) || _,
				p = [],
				b = [],
				O = [s.Q.de_DE, s.Q.en_US, s.Q.es_ES, s.Q.fr_FR, s.Q.it_IT, s.Q.pt_BR, s.Q.ko_KR, s.Q.ja_JP, s.Q.zh_CN, s.Q.zh_TW],
				h = {
					test: [...O, ...b, ...p],
					development: [...O, ...b, ...p],
					staging: [...O, ...b, ...p],
					production: [...O, ...b]
				},
				l = I => {
					const D = s.Q[I];
					return h.production.includes(D)
				},
				C = () => Object.keys(s.Q).filter(I => l(I)),
				f = I => {
					const D = s.Q[I];
					return b.includes(D)
				},
				w = I => k[I],
				k = {
					de_DE: "Deutsch",
					en_US: "English",
					es_CL: "Espa\xF1ol",
					es_EC: "Espa\xF1ol",
					es_ES: "Espa\xF1ol",
					es_MX: "Espa\xF1ol",
					es_PE: "Espa\xF1ol",
					fr_FR: "Fran\xE7ais",
					it_IT: "Italiano",
					pt_BR: "Portugu\xEAs",
					ko_KR: "\uD55C\uAD6D\uC5B4",
					ja_JP: "\u65E5\u672C\u8A9E",
					zh_CN: "\u7B80\u4F53\u4E2D\u6587",
					zh_TW: "\u7E41\u9AD4\u4E2D\u6587"
				},
				A = o().locale();
			o().defineLocale("es-cl", {
				parentLocale: "es",
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD-MM-YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				}
			}), o().defineLocale("es-ec", {
				parentLocale: "es",
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "D/M/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				}
			}), o().defineLocale("es-mx", {
				parentLocale: "es",
				longDateFormat: {
					LT: "h:mm a",
					LTS: "h:mm:ss a",
					L: "D/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY h:mm a",
					LLLL: "dddd, D [de] MMMM [de] YYYY h:mm a"
				}
			}), o().defineLocale("es-pe", {
				parentLocale: "es",
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/M/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY HH:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
				}
			}), o().locale(A)
		},
		"../react/utils/translator.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				QT: function() {
					return m
				},
				Vb: function() {
					return u
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return c
				},
				_m: function() {
					return r
				},
				cC: function() {
					return i
				},
				oc: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = t("../../../common/intl/intl-core/src/Translator.ts"),
				s = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				d = t.n(s),
				a = t("../flags.ts");
			const v = new o.Z({
				pseudoLoc: (0, a.J8)("is_pseudo_loc")
			});

			function c(p, ...b) {
				return v.t(p, ...b)
			}
			const u = v;

			function _(p, ...b) {
				return markdown(c(p, b))
			}

			function n(p) {
				if (Number(p) !== 0) {
					if (p % 86400 == 0) return c("time.num_days", {
						smart_count: p / 86400
					});
					if (p % 3600 == 0) return c("time.num_hours", {
						smart_count: p / 3600
					});
					if (p % 60 == 0) return c("time.num_minutes", {
						smart_count: p / 60
					})
				}
				return c("time.num_seconds", {
					smart_count: p
				})
			}

			function r(p, b) {
				return p in b ? b[p] : void 0
			}
			const i = s.Trans,
				g = s.I18n,
				m = s.useI18n
		},
		"../react/utils/url.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Ae: function() {
					return I
				},
				Ct: function() {
					return y
				},
				Fl: function() {
					return W
				},
				KT: function() {
					return ie
				},
				NF: function() {
					return C
				},
				Nw: function() {
					return A
				},
				Pd: function() {
					return w
				},
				Uh: function() {
					return $
				},
				cm: function() {
					return O
				},
				e1: function() {
					return D
				},
				el: function() {
					return z
				},
				hW: function() {
					return R
				},
				pu: function() {
					return X
				},
				qF: function() {
					return k
				},
				qR: function() {
					return re
				},
				td: function() {
					return f
				},
				uW: function() {
					return U
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				o = t("../react/pages/abuse/constants.ts"),
				s = t("../react/pages/d1/routes.ts"),
				d = t("../react/pages/images/routes.ts"),
				a = t("../react/pages/pages/routes.ts"),
				v = t("../react/pages/r2/routes.ts"),
				c = t("../react/pages/stream/routes.ts"),
				u = t("../react/pages/zoneless-workers/routes.ts"),
				_ = t("../../../../node_modules/query-string/query-string.js"),
				n = t.n(_);

			function r(V) {
				for (var oe = 1; oe < arguments.length; oe++) {
					var ge = arguments[oe] != null ? Object(arguments[oe]) : {},
						we = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && we.push.apply(we, Object.getOwnPropertySymbols(ge).filter(function(se) {
						return Object.getOwnPropertyDescriptor(ge, se).enumerable
					})), we.forEach(function(se) {
						i(V, se, ge[se])
					})
				}
				return V
			}

			function i(V, oe, ge) {
				return oe = g(oe), oe in V ? Object.defineProperty(V, oe, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[oe] = ge, V
			}

			function g(V) {
				var oe = m(V, "string");
				return typeof oe == "symbol" ? oe : String(oe)
			}

			function m(V, oe) {
				if (typeof V != "object" || V === null) return V;
				var ge = V[Symbol.toPrimitive];
				if (ge !== void 0) {
					var we = ge.call(V, oe || "default");
					if (typeof we != "object") return we;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (oe === "string" ? String : Number)(V)
			}
			const {
				endsWithSlash: p
			} = e.default, b = new RegExp(/([0-9a-z]{32})/g), O = V => V == null ? void 0 : V.replace(b, ":id"), h = (V, oe) => {
				const ge = V.replace(p, "").split("/");
				return ge.slice(0, 2).concat([oe]).concat(ge.slice(3)).join("/")
			}, l = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), C = V => `/${V.replace(p,"").replace(/^\//,"")}`, f = V => A("add-site", V), w = V => A("billing", V), k = V => A("registrar/register", V), A = (V, oe) => oe ? `/${oe}${V?`/${V}`:""}` : `/?to=/:account/${V}`, I = () => {
				const V = location ? location.pathname.match(/[0-9a-f]{32}/) || location.pathname.match(/[0-9a-f]{32}/) : null;
				return V ? V[0] : null
			}, D = () => {
				const V = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return V ? V[1] : null
			}, y = (V, oe) => n().stringify(r({}, n().parse(V), oe)), P = (V = "") => V.toString().replace(/([\/]{1,})$/, ""), S = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], M = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, F = /^\/(\w{32,})(\/[^.]*)?/, ne = V => S.includes(V), te = V => !ne(V), re = V => !ne(V) && F.test(V), z = V => !ne(V) && M.test(V), N = V => M.exec(V), R = V => {
				if (z(V)) return V.split("/").filter(oe => oe.length > 0)[1]
			}, K = V => F.exec(V), U = V => {
				if (re(V)) {
					const oe = K(V);
					if (oe) return oe[1]
				}
			}, G = V => re(V) && V.split("/")[2] === "register-domain", H = V => G(V) ? V.split("/") : null, Z = V => {
				if (z(V)) {
					const [, , , oe, ge, we, se, Ce] = V.split("/");
					return oe === "traffic" && ge === "load-balancing" && we === "pools" && se === "edit" && Ce
				}
			}, $ = V => {
				const oe = H(V);
				if (oe) return oe[3]
			}, J = (V, oe) => {
				var ge, we;
				return ((ge = V.pattern.match(/\:/g)) !== null && ge !== void 0 ? ge : []).length - ((we = oe.pattern.match(/\:/g)) !== null && we !== void 0 ? we : []).length
			}, L = [...Object.values(c.C), ...Object.values(d.KJ), ...Object.values(v._j), ...Object.values(u._j), ...Object.values(a._j), ...Object.values(s._)].sort(J);

			function W(V) {
				if (!te(V)) return V;
				for (const Ce of L)
					if (Ce.expression.test(V)) return Ce.pattern;
				if (o.eM.abuseReportTab.expression.test(V)) {
					const Ce = V.split("/"),
						Ae = Ce[Ce.length - 1];
					return o.eM.abuseReportTab.pattern.replace(":tab", Ae)
				}
				if (o.eM.abuseReport.expression.test(V)) return o.eM.abuseReport.pattern;
				const oe = H(V);
				if (oe) {
					const [, , Ce, , ...Ae] = oe;
					return `/:accountId/${Ce}/:domainName/${Ae.join("/")}`
				}
				if (Z(V)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const we = N(V);
				if (we) {
					const [, , , , Ce] = we;
					return `/:accountId/:zoneName${Ce||""}`
				}
				const se = K(V);
				if (se) {
					const [, , Ce] = se;
					return `/:accountId${Ce||""}`
				}
				return V
			}

			function X(V) {
				if (!!V) try {
					const ge = V.split(".").pop();
					if (ge && ge.length > 0) return ge
				} catch {}
			}

			function ie(V, oe = document.location.href) {
				try {
					const ge = new URL(V),
						we = new URL(oe);
					if (ge.origin === we.origin) return `${ge.pathname}${ge.search}${ge.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				r: function() {
					return c
				},
				y: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				d = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				a = t.n(d);
			const v = /^\/domainconnect\/v2\/domaintemplates\//i,
				c = "domain-connect-redirect",
				u = () => {
					const _ = (0, d.useLocation)();
					(0, e.useEffect)(() => {
						v.test(_.pathname) && s.Z.set(c, _, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = t("../utils/zaraz.ts")
		},
		"../react/utils/zoneLevelAccess.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				P: function() {
					return d
				},
				b: function() {
					return a
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				o = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function s() {
				var v, c, u, _, n, r;
				return (v = window) === null || v === void 0 || (c = v.bootstrap) === null || c === void 0 || (u = c.data) === null || u === void 0 || (_ = u.user) === null || _ === void 0 || (n = _.betas) === null || n === void 0 || (r = n.some) === null || r === void 0 ? void 0 : r.call(n, i => i === "zone_level_access_beta")
			}

			function d() {
				const v = !!(0, e.Z)("zone-level-access");
				return s() || v
			}

			function a(v) {
				const c = !!(0, o.z1)("zone-level-access")(v);
				return s() || c
			}
		},
		"../utils/getDashVersion.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				p: function() {
					return s
				},
				t: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var d, a;
					return (d = window) === null || d === void 0 || (a = d.build) === null || a === void 0 ? void 0 : a.dashVersion
				},
				s = () => {
					var d;
					return ((0, e.parse)((d = document) === null || d === void 0 ? void 0 : d.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Wi: function() {
					return Et
				},
				IM: function() {
					return Pt
				},
				yV: function() {
					return rt
				},
				Ug: function() {
					return We
				},
				v_: function() {
					return pt
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				s = t("../react/utils/bootstrap.ts"),
				d = t("../react/app/providers/storeContainer.js"),
				a = t("../react/common/selectors/languagePreferenceSelector.ts"),
				v = t("../flags.ts"),
				c = t("../../../../node_modules/cookie/index.js"),
				u = t("../react/utils/url.ts"),
				_ = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../../../../node_modules/lodash-es/memoize.js"),
				i = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				g = t("../utils/getDashVersion.ts"),
				m = t("../react/common/selectors/accountSelectors.ts"),
				p = t("../react/common/selectors/entitlementsSelectors.ts"),
				b = t("../react/common/utils/getEnvironment.ts");

			function O(de) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(Oe) {
						return Object.getOwnPropertyDescriptor(ve, Oe).enumerable
					})), _e.forEach(function(Oe) {
						h(de, Oe, ve[Oe])
					})
				}
				return de
			}

			function h(de, le, ve) {
				return le = l(le), le in de ? Object.defineProperty(de, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : de[le] = ve, de
			}

			function l(de) {
				var le = C(de, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function C(de, le) {
				if (typeof de != "object" || de === null) return de;
				var ve = de[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(de, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(de)
			}
			const f = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				w = (0, r.Z)(de => {
					try {
						return f.assertDecode((0, c.parse)(de))
					} catch (le) {
						return console.error(le), {}
					}
				}),
				k = de => (le, ve, _e) => {
					try {
						const Ye = window.location.pathname,
							qe = (0, d.bh)().getState(),
							Dt = w(document.cookie),
							Ft = O({
								page: (0, u.Fl)(_e.page || window.location.pathname),
								dashVersion: (0, g.t)(),
								environment: (0, b.Z)()
							}, Dt);
						if (le === "identify") {
							var Oe, Ne;
							const wt = {
								gates: (0, i.T2)(qe) || {},
								country: (Oe = t.g) === null || Oe === void 0 || (Ne = Oe.bootstrap) === null || Ne === void 0 ? void 0 : Ne.ip_country
							};
							return de(le, ve, O({}, Ft, wt, _e))
						} else {
							const wt = {
								accountId: (0, u.uW)(Ye),
								zoneName: (0, u.hW)(Ye),
								domainName: (0, u.Uh)(Ye)
							};
							if ((0, u.qR)(Ye)) {
								var Ge;
								const st = (0, m.D0)(qe);
								wt.isEntAccount = !!(st == null || (Ge = st.meta) === null || Ge === void 0 ? void 0 : Ge.has_enterprise_zones) || (0, p.p1)(qe)
							}
							if ((0, u.el)(Ye)) {
								var Fe;
								const st = (0, _.nA)(qe);
								wt.zoneId = st == null ? void 0 : st.id, wt.plan = st == null || (Fe = st.plan) === null || Fe === void 0 ? void 0 : Fe.legacy_id
							}
							return de(le, ve, O({}, Ft, wt, _e))
						}
					} catch (Ye) {
						return console.error(Ye), de(le, ve, _e)
					}
				},
				A = de => async (le, ve, _e) => {
					try {
						return await de(le, ve, _e)
					} catch (Oe) {
						if (console.error(Oe), !pt()) throw Oe;
						return {
							status: "rejected",
							reason: Oe
						}
					}
				};
			var I = t("../react/app/components/AccountHome/tracking.ts"),
				D = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				y = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				P = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				S = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				M = t("../react/common/middleware/sparrow/errors.ts"),
				F = t("../react/pages/abuse/constants.ts"),
				ne = t("../react/pages/blocked-content/constants.ts"),
				te = t("../react/pages/caching/tracking.tsx"),
				re = t("../react/pages/dns/dns-records/tracking.ts"),
				z = t("../react/pages/home/alerts/tracking.ts"),
				N = t("../react/pages/home/audit-log/tracking.ts"),
				R = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				K = t("../react/pages/home/configurations/lists/tracking.ts"),
				U = t("../react/pages/home/domain-registration/tracking.ts"),
				G = t("../react/pages/home/members/sparrowEvents.ts"),
				H = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				Z = t("../react/pages/hyperdrive/tracking.ts"),
				$ = t("../react/pages/magic/network-monitoring/constants.ts"),
				J = t("../react/pages/magic/overview/tracking.ts"),
				L = t("../react/pages/magic/packet-captures/constants.ts"),
				W = t("../react/pages/page-rules/tracking.ts"),
				X = t("../react/pages/pages/constants.ts"),
				ie = t("../react/pages/pipelines/tracking.ts"),
				V = t("../react/pages/profile/tracking.ts"),
				oe = t("../react/pages/secrets-store/resources/constants.ts"),
				ge = t("../react/pages/security-center/tracking.ts"),
				we = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
				se = t("../react/pages/security/api-shield/tracking.ts"),
				Ce = t("../react/pages/security/bots/tracking.ts"),
				Ae = t("../react/pages/security/overview/resources/constants.ts"),
				xe = t("../react/pages/security/page-shield/resources/index.ts"),
				$e = t("../react/pages/security/resources/constants.tsx"),
				Le = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				et = t("../react/common/components/filter-editor/triplet-fields/SequencesField/constants.tsx"),
				Ve = t("../react/pages/security/settings/index.tsx"),
				ot = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				ze = t("../react/pages/shared-config/sparrowEvents.tsx"),
				Q = t("../react/pages/spectrum/tracking.tsx"),
				be = t("../react/pages/traffic/argo/tracking.ts"),
				je = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				Ue = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				tt = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				at = t("../react/pages/turnstile/tracking.ts"),
				mt = t("../react/pages/user-groups/sparrowEvents.ts"),
				Ie = t("../react/pages/zoneless-workers/constants.ts"),
				nt = t("../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts"),
				ee = t("../react/pages/analytics/eos/resources/tracking.ts"),
				ce = t("../react/pages/internal-dns/tracking.ts"),
				fe = t("../react/pages/security/ai-agent/constants.ts"),
				Be = t("../react/common/middleware/sparrow/globalEvents/clickEvents.ts"),
				Re = t("../react/pages/ai-zone/constants.ts");
			const Ze = ((de, le, ...ve) => n.eg.union([n.eg.literal(de), n.eg.literal(le), ...ve.map(_e => n.eg.literal(_e))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin domain registration flow", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click Hide Support AI Page", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", ...Object.values(ee.f), "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "copy table cell", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Click on DNS Firewall feedback link", "Click on DNS Firewall add Cluster", "Hover on DNS Firewall feedback toast", "Click create DNS firewall cluster", "Click edit DNS firewall cluster", "Click on DNS Firewall edit Cluster button", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "global nav shortcut clicked", "global nav shortcut pinned", "global nav shortcut unpinned", "global nav survey clicked", "global nav switch", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "route to custom error rules", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit new support ai feedback", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click support ai issue solved feedback", "click support ai raise ticket", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", "redirect to account home", I.gX.SPARROW_PROJECTS_TABLE_CLICK, I.gX.SPARROW_EMPTY_STATE_CTA_CLICK, I.gX.SPARROW_PRODUCT_CARD_CLICK, I.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, I.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, I.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, I.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, I.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, I.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, I.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, Re.A3.BOT_ACTION_CHANGED, Re.A3.TERMS_DECISION, Re.A3.STRIPE_CONNECT, Re.A3.STRIPE_ACCOUNT_VIEWED, Re.A3.PPC_STATUS_CHANGED, Re.A3.PPC_PRICE_CHANGED, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ie.QV.clickedDownloadAnalytics, Ie.QV.clickedPrintAnalytics, Ie.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ie.QV.addWCITriggerToExistingWorker, Ie.QV.updateWCITrigger, Ie.QV.deleteWCITrigger, Ie.QV.addWCITriggerToNewWorker, Ie.QV.createWCIBuildForNewWorker, Ie.QV.completedWCIBuildForNewWorker, Ie.QV.changedDefaultConfigurations, Ie.QV.clickElement, X.QV.toggledPagesSmartPlacement, X.QV.downloadDemoProject, Ie.QV.clickCreateWorkerFromRepoNextStep, Ie.QV.clickCreateWorkerFromRepoPreviousStep, Ie.QV.clickCreateNewSCMConnection, Ie.QV.redirectFromSCMOAuth, Ie.QV.clickSubmitError, Ie.QV.selectTemplate, Ie.QV.clickedListTemplates, Ie.QV.clickedImportRepository, Ie.QV.clickedClonePublicRepositoryFromUrl, Ie.QV.templateStubWorkerCreated, Ie.QV.templateStubWorkerCreationFailed, Ie.QV.templateRepositoryCreated, Ie.QV.templateRepositoryCreationFailed, Ie.QV.copyTemplateC3Command, Ie.QV.templateDeployClick, Ie.QV.reauthenticateGithubModalShown, Ie.QV.updateGithubPermissionsClicked, Ie.QV.D2W_importRepository, Ie.QV.D2W_stubWorkerCreated, Ie.QV.D2W_stubWorkerCreationFailed, Ie.QV.D2W_repositoryCreated, Ie.QV.D2W_repositoryCreationFailed, Ie.QV.D2W_resourcesProvisioned, Ie.QV.D2W_resourceProvisioningFailed, Ie.QV.D2W_githubAPIRateLimitReached, Ie.QV.createResource, Ie.QV.deleteResource, Ie.QV.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", Ce.N3.INITIAL_FETCH_SCORES, Ce.N3.FETCH_CONFIGURATION, Ce.N3.INITIAL_FETCH_TIME_SERIES, Ce.N3.INITIAL_FETCH_ATTRIBUTES, Ce.N3.UPDATE_SETTINGS, Ce.N3.DELETE_RULE, Ce.N3.UPDATE_RULE, Ce.N3.FETCH_RULES, Ce.N3.CONFIGURE_BOT_MANAGEMENT, Ce.N3.WAF_RULES_REDIRECT, fe.PJ, fe.tP, fe.zf, H.F.TOGGLE_TCP_PROTECTION, H.F.GET_TCP_PROTECTION_PREFIXES, H.F.CREATE_TCP_PROTECTION_PREFIXES, H.F.CREATE_TCP_PROTECTION_PREFIX, H.F.UPDATE_TCP_PROTECTION_PREFIX, H.F.DELETE_TCP_PROTECTION_PREFIX, H.F.DELETE_TCP_PROTECTION_PREFIXES, H.F.GET_TCP_PROTECTION_ALLOWLIST, H.F.CREATE_TCP_PROTECTION_ALLOWLIST, H.F.UPDATE_TCP_PROTECTION_ALLOWLIST, H.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, H.F.DELETE_TCP_PROTECTION_ALLOWLIST, H.F.GET_SYN_PROTECTION_RULES, H.F.GET_SYN_PROTECTION_RULE, H.F.CREATE_SYN_PROTECTION_RULE, H.F.UPDATE_SYN_PROTECTION_RULE, H.F.DELETE_SYN_PROTECTION_RULE, H.F.GET_TCP_FLOW_PROTECTION_RULES, H.F.GET_TCP_FLOW_PROTECTION_RULE, H.F.CREATE_TCP_FLOW_PROTECTION_RULE, H.F.UPDATE_TCP_FLOW_PROTECTION_RULE, H.F.DELETE_TCP_FLOW_PROTECTION_RULE, H.F.GET_SYN_PROTECTION_FILTERS, H.F.GET_SYN_PROTECTION_FILTER, H.F.CREATE_SYN_PROTECTION_FILTER, H.F.UPDATE_SYN_PROTECTION_FILTER, H.F.DELETE_SYN_PROTECTION_FILTER, H.F.GET_TCP_FLOW_PROTECTION_FILTERS, H.F.GET_TCP_FLOW_PROTECTION_FILTER, H.F.CREATE_TCP_FLOW_PROTECTION_FILTER, H.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, H.F.DELETE_TCP_FLOW_PROTECTION_FILTER, H.F.GET_DNS_PROTECTION_RULES, H.F.GET_DNS_PROTECTION_RULE, H.F.CREATE_DNS_PROTECTION_RULE, H.F.UPDATE_DNS_PROTECTION_RULE, H.F.DELETE_DNS_PROTECTION_RULE, xe.FV.MANAGE_PAGE_SHIELD_POLICY, xe.FV.CONFIGURE_PAGE_SHIELD, xe.FV.VIEW_DETECTED_CONNECTIONS, xe.FV.VIEW_DETECTED_SCRIPTS, xe.FV.VIEW_PAGE_SHIELD_POLICIES, xe.FV.VIEW_PAGE_SHIELD_SETTINGS, xe.FV.OPEN_MUTABLE_VERSION_TOOLTIP, xe.FV.SHOW_MUTABLE_VERSION_TOOLTIP, K.y.CREATE_LIST, K.y.DELETE_LIST, K.y.ADD_LIST_ITEM, K.y.DELETE_LIST_ITEM, Z.KO.PURCHASE_WORKERS_PAID, Z.KO.LIST_CONFIGS, Z.KO.SEARCH_CONFIGS, Z.KO.CREATE_HYPERDRIVE_CONFIG, Z.KO.VIEW_CONFIG_DETAILS, Z.KO.UPDATE_CACHING_SETTINGS, Z.KO.UPDATE_ORIGIN_CONN_LIM_SETTINGS, Z.KO.DELETE_HYPERDRIVE_CONFIG, Z.KO.CLICK_HYPERDRIVE_DOCUMENTATION, Z.KO.CLICK_GET_STARTED_GUIDE, Z.KO.CLICK_CONNECTIVITY_GUIDES, Z.KO.CLICK_QUICK_LINK, Z.KO.CLICK_DISCORD, Z.KO.CLICK_COMMUNITY, Q.N.CNAME, Q.N.IP_ADDRESS, Q.N.LB, Q.N.UPDATE_CNAME, Q.N.UPDATE_IP_ADDRESS, Q.N.UPDATE_LB, Q.N.DISABLE, te.N.TIERED_CACHE, te.N.CACHE_PURGE, te.N.CACHE_ANALYTICS, ...(0, at.P)(), ...(0, S.x4)(), ...(0, Ve.m8)(), ...(0, G.SH)(), ...(0, mt.Ky)(), ...(0, y.Cf)(), tt.N.CREATE, tt.N.EVENTS, tt.N.ANALYTICS, tt.N.UPDATE, tt.N.GENERATE_PREVIEW, ge.RY.INITIATE_URL_SCAN, ge.RY.LOAD_SCAN_INFO, ge.Ev.LOAD_THREAT_EVENTS, ge.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, ge.Ev.THREAT_EVENTS_FILTERS, ge.Ev.ABUSE_REPORT_BUTTON_CLICK, ge.Ev.ABUSE_REPORT_SUBMIT_CLICK, ge.Ev.ABUSE_REPORT_SUBMIT_FAILED, ge.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, ge.v9.EXPAND_INSIGHT_ROW, ge.v9.ONE_CLICK_RESOLVE_BUTTON, ge.v9.FOLLOW_RESOLVE_URL, ge.v9.MANAGE_INSIGHT, ge.v9.CLICK_SCAN_NOW, ge.v9.CLICK_EXPORT_INSIGHTS, ge.v9.BULK_ARCHIVE, ge.v9.CLICK_DETAILS_BUTTON, se.Fj[se.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, se.Fj[se.kq.ENDPOINT_MANAGEMENT].detailedMetrics, se.Fj[se.kq.ENDPOINT_MANAGEMENT].createEndpoint, se.Fj[se.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, se.Fj[se.kq.ENDPOINT_MANAGEMENT].deployRouting, se.Fj[se.kq.ENDPOINT_MANAGEMENT].deleteRouting, se.Fj[se.kq.API_DISCOVERY].viewDiscoveredEndpoints, se.Fj[se.kq.API_DISCOVERY].saveDiscoveredEndpoint, se.Fj[se.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, se.Fj[se.kq.SCHEMA_VALIDATION].viewSchemasList, se.Fj[se.kq.SCHEMA_VALIDATION].uploadSchema, se.Fj[se.kq.SCHEMA_VALIDATION].viewSchemaAdoption, se.Fj[se.kq.SCHEMA_VALIDATION].downloadSchema, se.Fj[se.kq.SCHEMA_VALIDATION].deleteSchema, se.Fj[se.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, se.Fj[se.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, se.Fj[se.kq.SEQUENCE_ANALYTICS].viewSequencesPage, se.Fj[se.kq.JWT_VALIDATION].viewJWTRules, se.Fj[se.kq.JWT_VALIDATION].addJWTRule, se.Fj[se.kq.JWT_VALIDATION].editJWTRule, se.Fj[se.kq.JWT_VALIDATION].deleteJWTRule, se.Fj[se.kq.JWT_VALIDATION].reprioritizeJWTRule, se.Fj[se.kq.JWT_VALIDATION].viewJWTConfigs, se.Fj[se.kq.JWT_VALIDATION].addJWTConfig, se.Fj[se.kq.JWT_VALIDATION].editJWTConfig, se.Fj[se.kq.JWT_VALIDATION].deleteJWTConfig, se.Fj[se.kq.SETTINGS].redirectToFirewallRulesTemplate, se.Fj[se.kq.SETTINGS].redirectToPages, se.Fj[se.kq.SETTINGS].listSessionIdentifiers, se.Fj[se.kq.SETTINGS].listRequestsContainingSessionIdentifiers, se.Fj[se.kq.SETTINGS].addOrRemoveSessionIdentifiers, se.Fj[se.kq.SETTINGS].redirectToCustomRules, se.Fj[se.kq.SETTINGS].listAllFallthroughSchemas, se.Fj[se.kq.SEQUENCE_RULES].listSequenceRules, se.Fj[se.kq.SEQUENCE_RULES].deleteSequenceRule, se.Fj[se.kq.SEQUENCE_RULES].reorderSequenceRule, se.Fj[se.kq.SEQUENCE_RULES].createSequenceRule, se.Fj[se.kq.SEQUENCE_RULES].editSequenceRule, N.Q.TOGGLE_V2, N.Q.FILTER, N.Q.FILTER_COUNTS, N.Q.FEEDBACK, N.Q.API_LATENCY, N.Q.CONTAINER_V2_RENDERED, N.Q.CONTAINER_RENDERED, Ue.Z.ANALYTICS, Ue.Z.CREATE_AND_DEPLOY, Ue.Z.CREATE_MONITOR_LINK, Ue.Z.CREATE_MONITOR, Ue.Z.CREATE_POOL_LINK, Ue.Z.CREATE_POOL, Ue.Z.EDIT_MONITOR, Ue.Z.EDIT_POOL, Ue.Z.LOAD_BALANCING_TABLE, Ue.Z.POOL_TABLE, Ue.Z.EDIT_MONITOR_LINK, Ue.Z.EDIT_POOL_LINK, ...je.eT, z.y.SECONDARY_DNS_NOTIFICATION_CREATE, z.y.SECONDARY_DNS_NOTIFICATION_UPDATE, z.y.SECONDARY_DNS_NOTIFICATION_DELETE, re.U.ZONE_TRANSFER_SUCCESS, re.U.DNS_RECORD_CREATE, re.U.DNS_RECORD_UPDATE, re.U.DNS_RECORD_DELETE, R.Y.PEER_DNS_CREATE, R.Y.PEER_DNS_UPDATE, R.Y.PEER_DNS_DELETE, R.Y.ZONE_TRANSFER_ENABLE, R.Y.ZONE_TRANSFER_DISABLE, be.V.ARGO_ENABLEMENT, be.V.ARGO_GEO_ANALYTICS_FETCH, be.V.ARGO_GLOBAL_ANALYTICS_FETCH, L.X.VIEW_BUCKETS_LIST, L.X.CREATE_BUCKET, L.X.VALIDATE_BUCKET, L.X.DELETE_BUCKET, L.X.VIEW_CAPTURES_LIST, L.X.CREATE_SIMPLE_CAPTURE, L.X.CREATE_FULL_CAPTURE, L.X.VIEW_FULL_CAPTURE, L.X.DOWNLOAD_SIMPLE_CAPTURE, $.bK.VIEW_RULES, $.bK.CREATE_RULE, $.bK.UPDATE_RULE, $.bK.DELETE_RULE, $.bK.VIEW_CONFIGURATION, $.bK.CREATE_CONFIGURATION, $.bK.UPDATE_CONFIGURATION, $.bK.DELETE_CONFIGURATION, J.r8.VIEW_ALERTS, J.r8.VIEW_ALERTS_HISTORY, J.r8.MAGIC_OVERVIEW_ANALYTICS, J.VZ.CREATE_SITE, J.VZ.CREATE_TUNNEL, J.VZ.CREATE_STATIC_ROUTE, we.DC.CLICK_ADAPTIVE_SAMPLING, we.DC.CLICK_TO_LOG_EXPLORER_BANNER, we.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, we.DC.CLICK_SWITCH_TO_RAW_LOGS, we.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", U.U.REGISTER_DOMAIN_SEARCH_SUBMIT, U.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, U.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, U.U.REGISTER_DOMAIN_CHECKOUT_ERROR, U.U.TRANSFER_DOMAIN_CHANGE_STEP, U.U.RENEW_DOMAIN_COMPLETED, U.U.RESTORE_DOMAIN_INIT, U.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, U.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, U.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, U.U.RESTORE_DOMAIN_FAILURE, U.U.RESTORE_DOMAIN_COMPLETED, U.U.DOMAIN_DELETE_INIT, U.U.DOMAIN_DELETE_COMPLETED, U.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, U.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, U.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, U.U.DOMAIN_DELETE_CONFIRM_DELETE, U.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, U.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, U.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, U.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, U.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, U.U.DOMAIN_MOVE_START_FLOW, U.U.DOMAIN_MOVE_OPEN_DOCS, U.U.DOMAIN_MOVE_CLOSE_FLOW, U.U.DOMAIN_MOVE_PROGRESS_FLOW, U.U.DOMAIN_MOVE_SUBMIT, U.U.DOMAIN_MOVE_INITIATE_SUCCESS, U.U.DOMAIN_MOVE_INITIATE_ERROR, U.U.DOMAIN_MOVE_CANCEL, U.U.DOMAIN_MOVE_CANCEL_SUCCESS, U.U.DOMAIN_MOVE_CANCEL_ERROR, U.U.ACTION_CENTER_NAVIGATE, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, U.U.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE, U.U.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS, U.U.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR, U.U.TRANSFER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE, oe.z3.CREATE_SECRET, oe.z3.DELETE_SECRET, oe.z3.BIND_SECRET, oe.z3.DUPLICATE_SECRET, oe.z3.EDIT_SECRET, ie.KO.CLICK_GET_STARTED_GUIDE, ie.KO.CLICK_PIPELINE_DOCUMENTATION, ie.KO.CLICK_QUICK_LINK, ie.KO.CREATE_PIPELINE, ie.KO.DELETE_PIPELINE, ie.KO.LIST_PIPELINES, ie.KO.VIEW_PIPELINE, D.S.EXISTING_DOMAIN, D.S.NEW_DOMAIN, D.S.WAF_RULESET, D.S.WORKERS, D.S.PAGES, D.S.R2, D.S.ACCOUNT_MEMBERS, W._.TEMPLATE_PRODUCT_SELECTED, W._.TEMPLATE_SELECTED, W._.TEMPLATE_SAVE_DRAFT, W._.TEMPLATE_CANCEL, W._.TEMPLATE_DEPLOY, ze.D.CLICK_GO_BACK_SHARE_MODAL, ze.D.CLICK_MENU_ITEM_SHARE, ze.D.CLICK_ON_CANCEL_SHARE_MODAL, ze.D.CLICK_ON_CLOSE_SHARE_MODAL, ze.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, ze.D.CLICK_ON_DELETE_RULESET, ze.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, ze.D.CLICK_ON_EDIT_SHARE_PERMISSION, ze.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, ze.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, ze.D.CLICK_ON_SHARE_TABLE_ROW, $e.pR.CLICK_GEOGRAPHICAL_TEMPLATE, $e.pR.CLICK_IP_TEMPLATE, $e.pR.CLICK_USER_AGENT_TEMPLATE, $e.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, Ve.vc.CREATED, Ve.vc.ENABLED, Ve.vc.DISABLED, Ve.vc.DELETED, Ve.vc.UPDATED, Ve.vc.DOWNLOADED, ne.Gk.REQUEST_REVIEW, ne.Gk.COPY_URL, P.v.FIELD, P.v.OPERATOR, ot.Vj.SHOW_LCC_MIGRATION_BANNER, ot.Vj.CLICK_LCC_DOCUMENTATION, ot.Vj.CLICK_LCC_UPGRADE_GUIDE, ot.Vj.SHOW_LCC_MIGRATION_WARNING, Le.yf.CLICK_DISMISS_INELIGIBILITY, Le.yf.CLICK_NEXT_STEP, Le.yf.CLICK_OPT_IN, Le.yf.CLICK_OPT_IN_BUTTON, Le.yf.CLICK_OPT_OUT_BUTTON, Le.yf.DISPLAY_MODAL, Le.yf.DISPLAY_OPT_OUT_MODAL, Le.yf.DISPLAY_TOOLTIP_NOT_AVAILABLE, Le.yf.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, Le.yf.DEFAULT_ALL_INIT, Le.yf.DEFAULT_ALL_OPT_OUT, Le.yf.DEFAULT_ALL_REENABLES, Le.yf.NEW_DASHBOARD_EXPERIENCE, Ae.AZ.LOAD_INSIGHTS, Ae.AZ.OPEN_SIDE_MODAL_INSIGHT, Ae.AZ.CLOSE_SIDE_MODAL_INSIGHT, Ae.AZ.CLICK_ACTION_INSIGHT, nt.YC.CHANGE_SETTING, nt.YC.LOAD_SETTINGS, nt.YC.OPEN_SIDE_MODAL_SETTING, nt.YC.CLOSE_SIDE_MODAL_SETTING, nt.YC.FILTER_SETTING, we.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, we.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, we.DC.OPEN_SIDE_DRAWER, we.DC.CLOSE_SIDE_DRAWER, et.Xc, et.Aq, V.QV[V.Xn].clickLoginFromMobileApp2fa, V.QV[V.Xn].clickTryOther2FAMethodOrBackupCode, V.QV[V.Xn].clickTryRecovery, V.QV[V.xq].clickRegenerateBackupCodes, F.Vq.APPEAL_MITIGATION_SUBMIT, F.Vq.APPEAL_MITIGATION_SUCCESS, F.Vq.APPEAL_MITIGATION_FAILURE, F.Vq.CLICK_ABUSE_REPORT_ID, F.Vq.CLICK_ABUSE_REPORT_MITIGATIONS_LINK, ce.N3.CLICK_GIVE_FEEDBACK, ce.N3.CLICK_NAVIGATION_TAB, ce.N3.CLICK_SEARCH_BY_ZONE_NAME, ce.N3.CLICK_SEARCH_BY_VIEW_NAME, ce.N3.CLICK_CREATE_AN_INTERNAL_ZONE, ce.N3.CLICK_CREATE_A_VIEW, ce.N3.CLICK_SAVE_ZONE, ce.N3.CLICK_SAVE_VIEW, ce.N3.CLICK_SEARCH_BY_RECORD_NAME, ce.N3.CLICK_ZONE_NAME, ce.N3.CLICK_ADD_A_RECORD, ce.N3.CLICK_ADD_RECORD_SAVE, ce.N3.CLICK_RECORD_EDIT, ce.N3.CLICK_EDIT_RECORD_SAVE, ce.N3.CLICK_IMPORT_RECORDS, ce.N3.CLICK_MANAGE_LINKED_VIEWS, ce.N3.CLICK_SAVE_MANAGE_LINKED_VIEWS, ce.N3.CLICK_VIEW_RECORD, Be.W1),
				ft = n.eg.exactStrict(n.eg.object({
					".agency": n.eg.any.optional,
					".auction": n.eg.any.optional,
					".bet": n.eg.any.optional,
					".center": n.eg.any.optional,
					".church": n.eg.any.optional,
					".com": n.eg.any.optional,
					".community": n.eg.any.optional,
					".energy": n.eg.any.optional,
					".fitness": n.eg.any.optional,
					".guru": n.eg.any.optional,
					".io": n.eg.any.optional,
					".info": n.eg.any.optional,
					".immo": n.eg.any.optional,
					".lgbt": n.eg.any.optional,
					".life": n.eg.any.optional,
					".live": n.eg.any.optional,
					".media": n.eg.any.optional,
					".mobi": n.eg.any.optional,
					".net": n.eg.any.optional,
					".network": n.eg.any.optional,
					".ninja": n.eg.any.optional,
					".online": n.eg.any.optional,
					".org": n.eg.any.optional,
					".photography": n.eg.any.optional,
					".plus": n.eg.any.optional,
					".press": n.eg.any.optional,
					".pro": n.eg.any.optional,
					".services": n.eg.any.optional,
					".store": n.eg.any.optional,
					".tech": n.eg.any.optional,
					".wiki": n.eg.any.optional,
					".wtf": n.eg.any.optional,
					".xyz": n.eg.any.optional,
					_ga: n.eg.any.optional,
					_lpchecked: n.eg.any.optional,
					a: n.eg.any.optional,
					absolute: n.eg.any.optional,
					access: n.eg.any.optional,
					access_users_allowed: n.eg.any.optional,
					account: n.eg.any.optional,
					accountId: n.eg.any.optional,
					"accountResolver/SELECT_ACCOUNT": n.eg.any.optional,
					"accountResolver/NO_ACTION": n.eg.any.optional,
					accountResolverTotalCpuTime: n.eg.any.optional,
					accountResolverTotalTime: n.eg.any.optional,
					accountResolverTotalUserActionsTime: n.eg.any.optional,
					action: n.eg.any.optional,
					addedRecords: n.eg.any.optional,
					addon: n.eg.any.optional,
					address: n.eg.any.optional,
					apiUrl: n.eg.any.optional,
					argo_accelerated_gigabytes: n.eg.any.optional,
					"aria-current": n.eg.any.optional,
					"aria-controls": n.eg.any.optional,
					"aria-label": n.eg.any.optional,
					"aria-selected": n.eg.any.optional,
					authHeaders: n.eg.any.optional,
					autocomplete: n.eg.any.optional,
					autoRenew: n.eg.any.optional,
					autoSetup: n.eg.any.optional,
					b: n.eg.any.optional,
					buckets: n.eg.string.optional,
					banner: n.eg.any.optional,
					bot: n.eg.any.optional,
					bot_management: n.eg.any.optional,
					brokenExpression: n.eg.any.optional,
					bundle: n.eg.any.optional,
					c: n.eg.any.optional,
					cacheKey: n.eg.any.optional,
					cache_by_device_type: n.eg.any.optional,
					cache_rules: n.eg.any.optional,
					campaignId: n.eg.any.optional,
					campaignID: n.eg.any.optional,
					cancelled: n.eg.any.optional,
					category: n.eg.any.optional,
					cd43: n.eg.any.optional,
					cd45: n.eg.any.optional,
					cd47: n.eg.any.optional,
					certificate_pack_id: n.eg.any.optional,
					certificate_pack_type: n.eg.any.optional,
					cf: n.eg.any.optional,
					cfPlan: n.eg.any.optional,
					chartName: n.eg.any.optional,
					charts: n.eg.any.optional,
					childrenCount: n.eg.any.optional,
					childrenSelected: n.eg.any.optional,
					class: n.eg.any.optional,
					code0: n.eg.any.optional,
					columnName: n.eg.string.optional,
					columns: n.eg.array(n.eg.string).optional,
					completedTasks: n.eg.any.optional,
					component: n.eg.any.optional,
					component_values: n.eg.any.optional,
					configuration_rules: n.eg.any.optional,
					contentfulId: n.eg.any.optional,
					country: n.eg.any.optional,
					currentCA: n.eg.any.optional,
					currentPerPage: n.eg.any.optional,
					currentPage: n.eg.any.optional,
					d: n.eg.any.optional,
					dashVersion: n.eg.any.optional,
					"data-children-count": n.eg.any.optional,
					"data-tracking-name": n.eg.any.optional,
					"data-tracking-id": n.eg.any.optional,
					"data-testid": n.eg.any.optional,
					dataset: n.eg.any.optional,
					databaseId: n.eg.any.optional,
					dateCreated: n.eg.any.optional,
					dateModified: n.eg.any.optional,
					ddos: n.eg.any.optional,
					description: n.eg.string.optional,
					dedicated_certificates: n.eg.any.optional,
					dedicated_certificates_custom: n.eg.any.optional,
					deepLink: n.eg.any.optional,
					default: n.eg.any.optional,
					destinationPage: n.eg.string.optional,
					detailType: n.eg.any.optional,
					deviceViewport: n.eg.any.optional,
					direction: n.eg.any.optional,
					directive: n.eg.any.optional,
					"DNS import method": n.eg.any.optional,
					domainName: n.eg.any.optional,
					download: n.eg.any.optional,
					duration: n.eg.any.optional,
					dynamic_redirects: n.eg.any.optional,
					e: n.eg.any.optional,
					email_count: n.eg.any.optional,
					end: n.eg.any.optional,
					endDate: n.eg.any.optional,
					enabled: n.eg.any.optional,
					entitled: n.eg.any.optional,
					environment: n.eg.string.optional,
					error: n.eg.any.optional,
					errorCode: n.eg.any.optional,
					errorMessage: n.eg.any.optional,
					errors: n.eg.any.optional,
					expand: n.eg.any.optional,
					experiment: n.eg.any.optional,
					expression: n.eg.any.optional,
					expressionType: n.eg.any.optional,
					features: n.eg.array(n.eg.string).optional,
					failureReasons: n.eg.any.optional,
					featureChange: n.eg.any.optional,
					featureImproved: n.eg.any.optional,
					featureName: n.eg.any.optional,
					featureOriginal: n.eg.any.optional,
					field: n.eg.any.optional,
					fieldName: n.eg.any.optional,
					filterId: n.eg.any.optional,
					firewall_rules: n.eg.any.optional,
					flow: n.eg.any.optional,
					"font-size": n.eg.any.optional,
					form: n.eg.any.optional,
					formView: n.eg.any.optional,
					frequency: n.eg.any.optional,
					from: n.eg.any.optional,
					fromCategorySearch: n.eg.any.optional,
					fromStreamRatePlanId: n.eg.any.optional,
					functions: n.eg.any.optional,
					toStreamRatePlanId: n.eg.any.optional,
					gatesDelayed: n.eg.any.optional,
					geo: n.eg.any.optional,
					globalNav: n.eg.any.optional,
					guid: n.eg.any.optional,
					hasData: n.eg.any.optional,
					hasRecords: n.eg.any.optional,
					hasSidebarNav: n.eg.boolean.optional,
					"hasTest2019-06-03": n.eg.any.optional,
					hCaptchaDisplayed: n.eg.any.optional,
					hasEnabledSecurityNavigation: n.eg.any.optional,
					hasEnabledDefaultUnifiedSecurity: n.eg.any.optional,
					isZoneEligibleForUnification: n.eg.any.optional,
					header_modification: n.eg.any.optional,
					hostname_count: n.eg.any.optional,
					hostParam: n.eg.any.optional,
					href: n.eg.any.optional,
					id: n.eg.any.optional,
					index: n.eg.any.optional,
					indexLevel: n.eg.any.optional,
					initialRecommendation: n.eg.any.optional,
					ip_access_rules: n.eg.any.optional,
					items: n.eg.number.optional,
					isAuthenticated: n.eg.any.optional,
					isPaused: n.eg.any.optional,
					isCloudflare: n.eg.any.optional,
					isE2e: n.eg.boolean.optional,
					isExpanding: n.eg.boolean.optional,
					isEntAccount: n.eg.boolean.optional,
					isEnterprise: n.eg.boolean.optional,
					isInactive: n.eg.boolean.optional,
					isOpen: n.eg.boolean.optional,
					isScript: n.eg.any.optional,
					isSPA: n.eg.any.optional,
					isStreaming: n.eg.any.optional,
					isParent: n.eg.any.optional,
					isViewAll: n.eg.any.optional,
					isEditingSubscription: n.eg.any.optional,
					is_replacing: n.eg.any.optional,
					isRaw: n.eg.any.optional,
					jurisdiction: n.eg.any.optional,
					key: n.eg.any.optional,
					label: n.eg.any.optional,
					lastTimestamp: n.eg.any.optional,
					last_scan_days_ago: n.eg.any.optional,
					level: n.eg.any.optional,
					limit: n.eg.any.optional,
					link: n.eg.any.optional,
					listType: n.eg.any.optional,
					load_balancing: n.eg.any.optional,
					load_balancing_base: n.eg.any.optional,
					load_balancing_dns_queries: n.eg.any.optional,
					load_balancing_geo_routing: n.eg.any.optional,
					load_balancing_monitor_interval: n.eg.any.optional,
					load_balancing_origins: n.eg.any.optional,
					load_balancing_probe_regions: n.eg.any.optional,
					legacyDeepLink: n.eg.any.optional,
					locale: n.eg.any.optional,
					location: n.eg.any.optional,
					locationHint: n.eg.any.optional,
					maliciousCode: n.eg.any.optional,
					maliciousDomain: n.eg.any.optional,
					maliciousURL: n.eg.any.optional,
					managed_rules: n.eg.any.optional,
					marketingPlan: n.eg.any.optional,
					matchesCount: n.eg.any.optional,
					matchingRequestPercentage: n.eg.any.optional,
					matchingRequests: n.eg.any.optional,
					message0: n.eg.any.optional,
					method: n.eg.any.optional,
					millis: n.eg.any.optional,
					"mirage-recommendation": n.eg.any.optional,
					mode: n.eg.any.optional,
					monitor: n.eg.string.optional,
					monitorType: n.eg.any.optional,
					mrktCheckboxDisplayed: n.eg.any.optional,
					name: n.eg.any.optional,
					newTotalCount: n.eg.any.optional,
					novalidate: n.eg.any.optional,
					numAccounts: n.eg.any.optional,
					numRecords: n.eg.any.optional,
					numRecordsToApply: n.eg.any.optional,
					numRecordsToPrompt: n.eg.any.optional,
					numRecordsToRemove: n.eg.any.optional,
					numRows: n.eg.any.optional,
					origin_rules: n.eg.any.optional,
					nextPlan: n.eg.any.optional,
					numFilters: n.eg.any.optional,
					numRawLogs: n.eg.any.optional,
					numSampledLogs: n.eg.any.optional,
					moreRawLogs: n.eg.any.optional,
					old_expires_on: n.eg.any.optional,
					old_mode: n.eg.any.optional,
					oldFrequency: n.eg.string.optional,
					oldPlan: n.eg.any.optional,
					oldPrice: n.eg.number.optional,
					oldRatePlan: n.eg.string.optional,
					oldStep: n.eg.any.optional,
					oldSubscriptionValues: n.eg.record(n.eg.string, n.eg.any).optional,
					oldValue: n.eg.any.optional,
					onboarding: n.eg.any.optional,
					operator: n.eg.any.optional,
					order: n.eg.string.optional,
					order_by: n.eg.any.optional,
					page: n.eg.any.optional,
					page_rules: n.eg.any.optional,
					pageName: n.eg.any.optional,
					pageNumber: n.eg.any.optional,
					params: n.eg.any.optional,
					paused: n.eg.any.optional,
					phase: n.eg.any.optional,
					origin_url: n.eg.string.optional,
					payment_country: n.eg.string.optional,
					payment_gateway: n.eg.string.optional,
					percentages: n.eg.array(n.eg.number).optional,
					permission: n.eg.string.optional,
					personalisation: n.eg.boolean.optional,
					personalized: n.eg.boolean.optional,
					per_page: n.eg.any.optional,
					plan: n.eg.any.optional,
					plans: n.eg.any.optional,
					planVolume: n.eg.any.optional,
					pinned: n.eg.boolean.optional,
					position: n.eg.number.optional,
					prefs: n.eg.any.optional,
					previousPage: n.eg.any.optional,
					previousTotalCount: n.eg.any.optional,
					price: n.eg.any.optional,
					priority: n.eg.any.optional,
					product: n.eg.any.optional,
					prioritize_malicious: n.eg.any.optional,
					products: n.eg.any.optional,
					productName: n.eg.any.optional,
					productCategory: n.eg.any.optional,
					provider: n.eg.any.optional,
					question: n.eg.any.optional,
					quota: n.eg.any.optional,
					ratePlan: n.eg.any.optional,
					rayId: n.eg.any.optional,
					readTasks: n.eg.any.optional,
					reason: n.eg.any.optional,
					recommendation: n.eg.any.optional,
					recommendationType: n.eg.any.optional,
					recordAdditionMethod: n.eg.any.optional,
					recordTypes: n.eg.any.optional,
					region: n.eg.any.optional,
					registrar: n.eg.any.optional,
					resourceName: n.eg.string.optional,
					rulesCount: n.eg.any.optional,
					gclid: n.eg.any.optional,
					gclsrc: n.eg.any.optional,
					dclid: n.eg.any.optional,
					utm_source: n.eg.any.optional,
					utm_medium: n.eg.any.optional,
					utm_campaign: n.eg.any.optional,
					utm_term: n.eg.any.optional,
					utm_content: n.eg.any.optional,
					rangeMax: n.eg.number.optional,
					rangeMin: n.eg.number.optional,
					rate_limiting: n.eg.any.optional,
					ratePlanId: n.eg.any.optional,
					ratePlanName: n.eg.any.optional,
					referring_domain: n.eg.any.optional,
					referrer: n.eg.any.optional,
					registrationPeriod: n.eg.any.optional,
					registrationStatus: n.eg.any.optional,
					rel: n.eg.any.optional,
					relativeTimeRange: n.eg.any.optional,
					resultRank: n.eg.number.optional,
					"rocket_loader-recommendation": n.eg.any.optional,
					role: n.eg.any.optional,
					roles: n.eg.any.optional,
					ruleDescription: n.eg.any.optional,
					ruleId: n.eg.any.optional,
					scanFailed: n.eg.any.optional,
					scope: n.eg.any.optional,
					searchAction: n.eg.any.optional,
					searchDescription: n.eg.any.optional,
					searchParam: n.eg.any.optional,
					searchStatus: n.eg.any.optional,
					searchTerm: n.eg.any.optional,
					searchValue: n.eg.any.optional,
					section: n.eg.any.optional,
					seenOnParam: n.eg.any.optional,
					selected: n.eg.any.optional,
					series: n.eg.any.optional,
					service: n.eg.any.optional,
					setting: n.eg.any.optional,
					setup: n.eg.any.optional,
					shortcutsExpanded: n.eg.any.optional,
					showErrors: n.eg.any.optional,
					sortDirection: n.eg.string.optional,
					sortBy: n.eg.string.optional,
					source: n.eg.any.optional,
					startDate: n.eg.any.optional,
					state: n.eg.any.optional,
					status: n.eg.any.optional,
					step: n.eg.any.optional,
					storageClass: n.eg.any.optional,
					string: n.eg.any.optional,
					stream_storage_thousand_minutes: n.eg.any.optional,
					stream_viewed_thousand_minutes: n.eg.any.optional,
					subcategory: n.eg.any.optional,
					subscribedToMarketing: n.eg.any.optional,
					subscriptionValues: n.eg.record(n.eg.string, n.eg.any).optional,
					subcomponent: n.eg.string.optional,
					success: n.eg.any.optional,
					supportLevel: n.eg.any.optional,
					survey: n.eg.any.optional,
					surveyType: n.eg.any.optional,
					switchTo: n.eg.any.optional,
					tab: n.eg.any.optional,
					tableName: n.eg.any.optional,
					tag: n.eg.any.optional,
					target: n.eg.any.optional,
					targetPage: n.eg.any.optional,
					targetCA: n.eg.any.optional,
					target_pack_type: n.eg.any.optional,
					task: n.eg.any.optional,
					text: n.eg.any.optional,
					timeRange: n.eg.any.optional,
					title: n.eg.any.optional,
					tld: n.eg.string.optional,
					to: n.eg.any.optional,
					toolCall: n.eg.any.optional,
					touched: n.eg.any.optional,
					total: n.eg.number.optional,
					transform_rules: n.eg.any.optional,
					trialPlan: n.eg.any.optional,
					trialStart: n.eg.any.optional,
					topic: n.eg.any.optional,
					totalCount: n.eg.any.optional,
					totalCpuTime: n.eg.any.optional,
					totalLevels: n.eg.any.optional,
					totalRequests: n.eg.any.optional,
					totalTime: n.eg.any.optional,
					totalUserActionsTime: n.eg.any.optional,
					type: n.eg.any.optional,
					upgrade: n.eg.boolean.optional,
					uploading: n.eg.any.optional,
					uploadFailed: n.eg.any.optional,
					url_rewrites: n.eg.any.optional,
					userGroupId: n.eg.string.optional,
					hosts: n.eg.string.optional,
					uiType: n.eg.string.optional,
					userId: n.eg.any.optional,
					userType: n.eg.any.optional,
					utm_referrer: n.eg.any.optional,
					version: n.eg.any.optional,
					validation_method: n.eg.any.optional,
					validity_days: n.eg.any.optional,
					value: n.eg.any.optional,
					visibility: n.eg.any.optional,
					via: n.eg.any.optional,
					waf: n.eg.any.optional,
					wizardName: n.eg.any.optional,
					wordpress: n.eg.any.optional,
					workers: n.eg.any.optional,
					worker_kv_deletes: n.eg.any.optional,
					worker_kv_lists: n.eg.any.optional,
					worker_kv_reads: n.eg.any.optional,
					worker_kv_storage: n.eg.any.optional,
					worker_kv_writes: n.eg.any.optional,
					worker_requests: n.eg.any.optional,
					wp_plugin: n.eg.any.optional,
					write_strategy: n.eg.any.optional,
					zone: n.eg.any.optional,
					zoneId: n.eg.any.optional,
					zoneName: n.eg.any.optional,
					"zoneResolver/NO_ACTION": n.eg.any.optional,
					"zoneResolver/SELECT_ZONE": n.eg.any.optional,
					zoneResolverTotalCpuTime: n.eg.any.optional,
					zoneResolverTotalTime: n.eg.any.optional,
					zoneResolverTotalUserActionsTime: n.eg.any.optional,
					zones: n.eg.any.optional,
					zoneStatus: n.eg.any.optional,
					zoneType: n.eg.any.optional,
					audit: n.eg.any.optional,
					score: n.eg.any.optional,
					potentialSavings: n.eg.any.optional,
					feature: n.eg.any.optional,
					days: n.eg.any.optional,
					minutes: n.eg.any.optional,
					customRange: n.eg.any.optional,
					metric: n.eg.any.optional,
					url: n.eg.any.optional,
					previousPlan: n.eg.any.optional,
					isStarring: n.eg.any.optional,
					isStarred: n.eg.any.optional,
					totalStarredZones: n.eg.number.optional,
					totalZones: n.eg.number.optional,
					widgetName: n.eg.any.optional,
					statusType: n.eg.any.optional,
					outcome: n.eg.any.optional,
					marketingOptInChecked: n.eg.boolean.optional,
					prompt: n.eg.any.optional,
					positive: n.eg.any.optional,
					endpoint: n.eg.any.optional,
					isArgoEnabled: n.eg.any.optional,
					insightId: n.eg.any.optional,
					insightClass: n.eg.string.optional,
					insightType: n.eg.string.optional,
					severity: n.eg.string.optional,
					decision: n.eg.any.optional,
					domain: n.eg.any.optional,
					exact: n.eg.any.optional,
					fees: n.eg.any.optional,
					new_selection: n.eg.any.optional,
					numDomainsInCart: n.eg.any.optional,
					payment_method: n.eg.string.optional,
					payment_option: n.eg.string.optional,
					premium: n.eg.any.optional,
					previous_selection: n.eg.any.optional,
					pricing_local: n.eg.any.optional,
					selection: n.eg.any.optional,
					uniqueTopLevelDomains: n.eg.any.optional,
					template_name: n.eg.any.optional,
					productResource: n.eg.any.optional,
					snippets: n.eg.any.optional,
					ddos_l7: n.eg.any.optional,
					http_request_transform: n.eg.any.optional,
					http_request_origin: n.eg.any.optional,
					http_request_cache_settings: n.eg.any.optional,
					http_config_settings: n.eg.any.optional,
					http_request_dynamic_redirect: n.eg.any.optional,
					http_request_sbfm: n.eg.any.optional,
					"transform-rules": n.eg.any.optional,
					http_request_snippets: n.eg.any.optional,
					cloud_connector: n.eg.any.optional,
					is_first_project: n.eg.any.optional,
					is_first_scm_connection: n.eg.any.optional,
					is_preview_trigger: n.eg.any.optional,
					scm_type: n.eg.any.optional,
					existing_connection_total: n.eg.any.optional,
					invalid_fields: n.eg.any.optional,
					is_retry: n.eg.any.optional,
					changed_fields: n.eg.any.optional,
					rulesetName: n.eg.string.optional,
					isECCRuleset: n.eg.boolean.optional,
					isLCCEnabled: n.eg.boolean.optional,
					isECCEnabled: n.eg.boolean.optional,
					tabName: n.eg.any.optional,
					repo_owner: n.eg.string.optional,
					repo_name: n.eg.string.optional,
					subdirectory: n.eg.string.optional,
					seed_repo: n.eg.string.optional,
					branch: n.eg.string.optional,
					queryMode: n.eg.any.optional,
					clickType: n.eg.string.optional,
					interactionType: n.eg.string.optional
				})),
				vt = (de, le) => {
					const [ve, _e] = Wt(le);
					let Oe, Ne;
					return (0, n.nM)(Ze.decode(de)) && (Oe = new M.Uh(de)), _e && _e.length > 0 && (Ne = new M.oV(de, _e)), [ve, Oe, Ne]
				},
				Wt = de => {
					const le = ft.decode(de);
					if ((0, n.nM)(le)) {
						const ve = le.left.map(({
							context: _e
						}) => _e.map(({
							key: Oe
						}) => Oe)).reduce((_e, Oe) => _e.concat(Oe), []).filter(_e => _e in de);
						return [kt(ve, de), ve]
					}
					return [de, []]
				},
				kt = (de, le) => Object.entries(le).reduce((ve, [_e, Oe]) => (de.includes(_e) || (ve[_e] = Oe), ve), {}),
				bt = de => (le, ve, _e) => {
					const [Oe, Ne, Ge] = vt(ve, _e);
					if (Ne) throw Ne;
					return Ge && console.error(Ge), de(le, ve, Oe)
				};
			var _t = t("../react/utils/zaraz.ts");
			const Ke = {
					identify: !0
				},
				it = de => (le, ve, _e) => (Ke[ve] || _t.tg === null || _t.tg === void 0 || _t.tg.track(ve, _e), de(le, ve, _e));
			var ht = t("../react/common/selectors/userSelectors.ts"),
				Se = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function dt(de) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(Oe) {
						return Object.getOwnPropertyDescriptor(ve, Oe).enumerable
					})), _e.forEach(function(Oe) {
						lt(de, Oe, ve[Oe])
					})
				}
				return de
			}

			function lt(de, le, ve) {
				return le = Ot(le), le in de ? Object.defineProperty(de, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : de[le] = ve, de
			}

			function Ot(de) {
				var le = Y(de, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function Y(de, le) {
				if (typeof de != "object" || de === null) return de;
				var ve = de[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(de, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(de)
			}
			const ue = new Set(["cf_argo", "load_balancing_basic_plus"]),
				ye = new Set(["pro", "business"]),
				he = ({
					price: de,
					ratePlanId: le,
					ratePlanName: ve,
					frequency: _e,
					isNewSubscription: Oe
				}) => ({
					event: "purchase",
					new_subscription: Oe,
					ecommerce: {
						transaction_id: (0, Se.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: de
					},
					items: [{
						item_id: le,
						item_name: ve || le,
						frequency: _e,
						price: de
					}]
				}),
				Me = de => {
					const {
						price: le,
						frequency: ve,
						plan: _e,
						ratePlanId: Oe,
						ratePlanName: Ne
					} = de;
					return ye.has(_e) ? dt({}, he({
						price: le,
						ratePlanId: Oe,
						ratePlanName: Ne,
						frequency: ve,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				Qe = de => {
					const {
						price: le,
						frequency: ve,
						ratePlan: _e,
						ratePlanName: Oe
					} = de;
					return ue.has(_e) ? dt({}, he({
						price: le,
						ratePlanId: _e,
						ratePlanName: Oe,
						frequency: ve,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				ut = de => {
					const {
						price: le,
						frequency: ve,
						plan: _e,
						ratePlanId: Oe,
						ratePlanName: Ne,
						label: Ge
					} = de;
					return ye.has(_e) ? dt({}, he({
						price: le,
						frequency: ve,
						ratePlanId: Oe,
						ratePlanName: Ne,
						isNewSubscription: !1
					}), {
						label: Ge || _e
					}) : void 0
				},
				zt = de => {
					const {
						price: le,
						frequency: ve,
						ratePlan: _e,
						ratePlanName: Oe,
						oldRatePlan: Ne
					} = de;
					return ue.has(_e) ? dt({}, he({
						price: le,
						frequency: ve,
						ratePlanId: _e,
						ratePlanName: Oe,
						isNewSubscription: !1
					}), {
						label: `${Ne}->${_e}`
					}) : void 0
				},
				Xe = "click_key_interaction",
				Mt = de => {
					const {
						interactionType: le,
						clickType: ve,
						id: _e,
						text: Oe,
						href: Ne,
						page: Ge
					} = de, {
						origin: Fe
					} = window.location, Ye = `${Fe}${Ge}`;
					return {
						event: Xe,
						click_text: Oe,
						click_url: Ne,
						interaction_type: le,
						link_click_type: ve,
						page_path: Ge,
						page_url: Ye,
						click_target_identifier: _e
					}
				},
				xt = "pageview",
				Tt = "create zone",
				Rt = "create user",
				Nt = "Plan Purchase Success",
				Bt = "Product Purchase Success",
				Ct = "Plan Update Success",
				jt = "Product Update Success",
				It = {
					[xt]: !0,
					[Tt]: !0,
					[Rt]: !0,
					[Nt]: !0,
					[Bt]: !0,
					[Ct]: !0,
					[jt]: !0,
					[Be.W1]: !0
				},
				Kt = de => {
					const le = /\|MCMID\|([0-9]+)\|/,
						ve = de.match(le);
					return ve ? ve[1] : void 0
				},
				Ht = de => {
					var le;
					const {
						deviceViewport: ve,
						page: _e,
						previousPage: Oe,
						pageName: Ne,
						utm_campaign: Ge,
						_ga: Fe,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Ye
					} = de, {
						origin: qe
					} = window.location, Dt = (0, ht.PR)((0, d.bh)().getState());
					return {
						event: Oe !== void 0 && _e !== Oe ? "virtual_page_view" : "page_load",
						device_type: ve,
						hostname: qe,
						language: navigator.language,
						locale: (0, a.r)((0, d.bh)().getState()),
						page_location: _e ? `${qe}${_e}` : "[redacted]",
						page_path: _e ? `${_e}` : "[redacted]",
						page_referrer: Oe ? `${qe}/${Oe}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: Ne || "[redacted]",
						page_url: _e ? `${qe}${_e}` : "[redacted]",
						query: Ge ? `?utm_campaign=${Ge}` : "[redacted]",
						user_properties: {
							ga_client_id: (le = Fe) !== null && le !== void 0 ? le : void 0,
							ga_client_id_s: Fe ? `s${Fe}` : void 0,
							user_id: Et() ? Dt == null ? void 0 : Dt.id : void 0,
							ecid: Ye ? Kt(Ye) : void 0
						}
					}
				},
				Ut = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				Gt = de => {
					const {
						status: le
					} = de;
					return le === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				Vt = (de, le) => {
					switch (de) {
						case xt:
							return Ht(le);
						case Tt:
							return Ut();
						case Rt:
							return Gt(le);
						case Nt:
							return Me(le);
						case Bt:
							return Qe(le);
						case Ct:
							return ut(le);
						case jt:
							return zt(le);
						case Be.W1:
							return Mt(le);
						default:
							return
					}
				},
				Yt = de => (le, ve, _e) => {
					if (It[ve]) {
						var Oe;
						const Ne = Vt(ve, _e);
						window.dataLayer = window.dataLayer || [], Ne && ((Oe = window.dataLayer) === null || Oe === void 0 || Oe.push(Ne))
					}
					return de(le, ve, _e)
				};
			var At = t("../react/utils/cookiePreferences.ts");

			function T(de) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(Oe) {
						return Object.getOwnPropertyDescriptor(ve, Oe).enumerable
					})), _e.forEach(function(Oe) {
						x(de, Oe, ve[Oe])
					})
				}
				return de
			}

			function x(de, le, ve) {
				return le = me(le), le in de ? Object.defineProperty(de, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : de[le] = ve, de
			}

			function me(de) {
				var le = Te(de, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function Te(de, le) {
				if (typeof de != "object" || de === null) return de;
				var ve = de[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(de, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(de)
			}
			const We = de => {
					o().init(T({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: pt() && !(0, s.gm)() && Et(),
						middlewares: [A, bt, k, it, Yt]
					}, de))
				},
				rt = () => {
					o().identify(T({}, (0, e.getAttribution)(), {
						locale: (0, a.r)((0, d.bh)().getState()),
						isCloudflare: !!(0, v.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				pt = () => !0,
				Pt = () => {
					(0, At.kT)("sparrow_id")
				},
				Et = () => (0, At.Xm)()
		},
		"../utils/initStyles.ts": function(j, E, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = t("../react/app/providers/storeContainer.js");
			const s = "cfBaseStyles",
				d = document.head || document.getElementsByTagName("head")[0],
				a = c => {
					const u = [];
					for (let _ in c.colors) {
						const n = c.colors[_];
						if (Array.isArray(n) && _ !== "categorical")
							for (let r = 0; r < n.length; ++r) u.push(`--cf-${_}-${r}:${n[r]};`)
					}
					return u.join(`
`)
				},
				v = () => {
					const c = (0, e.Yc)(),
						u = `
    * {
      box-sizing: border-box;
    }

    ::placeholder {
      color: ${e.Rl.colors.gray[5]}
    }

    wf-html, html, body, button {
      font-size: 16px;
    }

    wf-html,
    html {
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
    }

    wf-body,
    body {
      line-height: 1.5;
      color: ${e.Rl.colors.gray[1]};
      background-color: ${e.Rl.colors.background};
      font-family: ${e.Rl.fontFamily};
    }

    text {
      fill: ${e.Rl.colors.gray[1]};
    }

    wf-html, wf-body, body, html, ul, ol, li, p, h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;
    }

    h1, h2, h3, small {
      line-height: 1.25;
    }

    h1 {
      font-size: 32px;
      font-weight: 400;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 20px;
    }

    h4, h5, h6 {
      font-size: 16px;
    }

    h2, h3, h4, h5 h4, h5, h6 {
      font-weight: 600;
    }

     h3 + p, h4 + p, h5 + p, h6 + p {
       margin-top: 0.5em;
     }

    small {
      font-size: 12px;
    }

    button {
      font-family: ${e.Rl.fontFamily};
      border: none;
    }

    label {
      display: block;
      font-size: 0.875rem;
      margin-bottom: 0.35938em;
      min-height: 1.22em;
    }

    fieldset {
      border: none;
    }

    pre {
      border-radius: 3px;
      color: ${e.Rl.colors.gray[1]};
      display: block;
      font-size: 14px;
      margin: 2rem 0;
      overflow: auto;
      padding: 0.5rem;
      width: 100%;
    }

    code, pre {
      background-color: ${c?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${c?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${c?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${c?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${c?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${c?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      outline: none;
    }

    a:focus {
      color: ${e.Rl.colors.blue[5]};
    }

    a svg, a:active svg, a:hover svg {
      fill: currentColor
    }

    ol, ul, dl {
      list-style-position: outside;
      margin-left: 3em;
    }

    ul {
      list-style-type: disc;
    }

    dd {
      margin: 0;
    }

    dt {
      font-weight: 600;
      font-size: ${e.Rl.fontSizes[3]}px
    }

    p+p, p+ul, p+ol, p+dl, ul+p, ul+h2, ul+h3, ul+h4, ul+h5, ul+h6 {
      margin-top: 1.5em;
    }

    hr {
      border: 0;
      border-top: 1px solid #d5d7d8;
      display: block;
      height: 0;
      margin: 2rem 0;
      width: 100%;
    }

    img, object {
      height: auto;
      max-width: 100%;
    }

    table {
      border-spacing: 0;
    }

    legend {
      padding-inline-start: 0;
    }

    fieldset {
      margin-inline-start: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
      background-color: ${e.Rl.colors.background};
      color:  ${e.Rl.colors.gray[8]}
    }

    :root {
      --cf-white: ${e.Rl.colors.white};
      --cf-black: ${e.Rl.colors.black};
      ${a(e.Rl)}
    }

    .ReactVirtualized__List {
      outline: none
    }
    .grim-scroll-sortable-helper {
      pointer-events: auto !important;
      z-index: 2000 !important;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
      background-color: white !important;
    }
    .grim-scroll-sortable-helper * {
      cursor: grabbing !important;
    }
  `;
					let _ = document.getElementById(s);
					_ ? _.innerText = "" : (_ = document.createElement("style"), _.id = s, d.appendChild(_)), _.appendChild(document.createTextNode(u)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(v), E.Z = v
		},
		"../utils/sentry/lastSentEventId.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let s = "";
				return {
					setEventId: v => (!v || typeof v != "string" || (s = v), s),
					getEventId: () => s
				}
			})()
		},
		"../utils/zaraz.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Ro: function() {
					return r
				},
				bM: function() {
					return u
				},
				tg: function() {
					return c
				},
				yn: function() {
					return n
				}
			});

			function e(i) {
				for (var g = 1; g < arguments.length; g++) {
					var m = arguments[g] != null ? Object(arguments[g]) : {},
						p = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(m).filter(function(b) {
						return Object.getOwnPropertyDescriptor(m, b).enumerable
					})), p.forEach(function(b) {
						o(i, b, m[b])
					})
				}
				return i
			}

			function o(i, g, m) {
				return g = s(g), g in i ? Object.defineProperty(i, g, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[g] = m, i
			}

			function s(i) {
				var g = d(i, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function d(i, g) {
				if (typeof i != "object" || i === null) return i;
				var m = i[Symbol.toPrimitive];
				if (m !== void 0) {
					var p = m.call(i, g || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(i)
			}
			const a = {
					track: (i, g) => null,
					set: (i, g) => console.log(`zaraz.set(${i}, ${g})`)
				},
				v = {
					track: (i, g) => {
						var m;
						(m = window.zaraz) === null || m === void 0 || m.track(i, e({}, g, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (i, g) => {
						var m;
						return (m = window.zaraz) === null || m === void 0 ? void 0 : m.set(i, g)
					}
				};
			let c;
			const u = () => {
					window.zaraz, c = v
				},
				_ = ["email", "first_name", "last_name"],
				n = i => {
					_.forEach(g => {
						var m;
						(m = c) === null || m === void 0 || m.set(g, i[g])
					})
				},
				r = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(j, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				d = t.n(s),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				v = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(v),
				u = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				_ = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-icon/es/index.js"),
				r = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				i = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-forms/es/index.js"),
				g = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				m = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				p = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				b = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				O = t("../../../common/component/component-filter-bar/src/constants.js"),
				h = t("../../../common/component/component-filter-bar/src/utils.js"),
				l = t("../../../../node_modules/react/jsx-runtime.js");

			function C(K) {
				for (var U = 1; U < arguments.length; U++) {
					var G = arguments[U] != null ? Object(arguments[U]) : {},
						H = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(G).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(G, Z).enumerable
					})), H.forEach(function(Z) {
						f(K, Z, G[Z])
					})
				}
				return K
			}

			function f(K, U, G) {
				return U = w(U), U in K ? Object.defineProperty(K, U, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[U] = G, K
			}

			function w(K) {
				var U = k(K, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function k(K, U) {
				if (typeof K != "object" || K === null) return K;
				var G = K[Symbol.toPrimitive];
				if (G !== void 0) {
					var H = G.call(K, U || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(K)
			}
			const A = 70,
				I = (0, a.SU)(({
					showOverflow: K
				}) => C({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, K ? {} : {
					maxHeight: A,
					overflow: "hidden"
				})),
				D = (0, a.SU)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				y = (0, a.SU)(({
					theme: K
				}) => ({
					backgroundColor: K.colors.background,
					py: 1,
					px: 2,
					borderRadius: K.radii[2],
					border: `1px solid ${K.colors.gray[7]}`,
					fontSize: K.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: K.colors.gray[4]
					}
				}), "div"),
				P = (0, a.SU)(() => ({
					mr: 1
				}), "span"),
				S = (0, a.SU)(({
					theme: K
				}) => ({
					color: K.colors.gray[4],
					mr: 1
				}), "span"),
				M = (0, a.SU)(() => ({
					mr: 2,
					maxWidth: 180,
					whiteSpace: "nowrap",
					display: "inline-block",
					verticalAlign: "bottom",
					overflow: "hidden",
					textOverflow: "ellipsis",
					"@media print": {
						marginRight: 0
					}
				}), "span"),
				F = (0, a.SU)(({
					buttonStyle: K
				}) => C({
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					height: 35,
					mr: 3,
					mb: 1,
					py: 1,
					px: 2,
					fontSize: 2,
					"@media print": {
						display: "none"
					}
				}, K), _.zx),
				ne = (0, a.SU)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				te = (0, a.SU)(({
					theme: K
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: K.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: K.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: K.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: K.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				re = (0, a.SU)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				z = K => K.current ? [...K.current.children].reduce((U, G) => (G.offsetTop >= A && U++, U), 0) : 0;
			let N = 0;
			class R extends e.Component {
				constructor() {
					super();
					f(this, "overflowWrapper", (0, e.createRef)()), f(this, "hasOverflowed", U => {
						const G = z(this.overflowWrapper);
						U.scrollHeight > A && G >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (U.scrollHeight < A || G === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), f(this, "addNewFilter", () => {
						const {
							filterDefinitions: U
						} = this.props, G = (0, h.TE)(U), H = Object.keys(G)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: H,
								operator: (0, h.uv)(H, G),
								value: (0, h.TT)(H, G)
							}
						})
					}), f(this, "handleOpenFilterEdit", U => {
						this.setState({
							openFilter: U,
							filterChanges: C({}, this.props.filters[U])
						})
					}), f(this, "handleRemoveFilterClick", (U, G) => {
						U.stopPropagation(), this.removeFilter(G)
					}), f(this, "removeFilter", U => {
						const {
							handleFiltersChange: G
						} = this.props, H = [...this.props.filters], Z = H[U];
						H.splice(U, 1), G(H), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: Z.key,
							operator: Z.operator,
							value: Z.value
						})
					}), f(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), f(this, "handleFilterSubmit", U => {
						const {
							filterDefinitions: G
						} = this.props;
						U.preventDefault();
						const {
							filterChanges: H
						} = this.state, Z = typeof G[H.key].parse == "function" ? Array.isArray(H.value) ? H.value.map(G[H.key].parse) : G[H.key].parse(H.value) : H.value;
						if (G[H.key].validate && (Array.isArray(Z) ? !Z.every(G[H.key].validate) : !G[H.key].validate(Z))) return this.setState({
							invalid: !0
						});
						const $ = [...this.props.filters],
							J = C({}, H, {
								value: Z
							}),
							L = !$[this.state.openFilter];
						L ? $.push(J) : $[this.state.openFilter] = C({}, J), this.props.handleFiltersChange($, J), (L ? this.props.onAddFilter : this.props.onEditFilter)({
							field: J.key,
							operator: J.operator,
							value: J.value
						}), this.closeOpenFilterChanges()
					}), f(this, "handlePendingKeyChange", ({
						value: U
					}) => {
						const {
							filterDefinitions: G
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: U,
								operator: (0, h.uv)(U, G),
								value: (0, h.TT)(U, G)
							}
						})
					}), f(this, "handlePendingOperatorChange", ({
						value: U
					}) => {
						let G = C({}, this.state.filterChanges, {
							operator: U
						});
						if ((0, h.dr)(U)) {
							var H, Z;
							((H = this.state.filterChanges) === null || H === void 0 ? void 0 : H.value) && !Array.isArray((Z = this.state.filterChanges) === null || Z === void 0 ? void 0 : Z.value) && (G.value = [this.state.filterChanges.value])
						} else {
							var $, J, L;
							(($ = this.state.filterChanges) === null || $ === void 0 ? void 0 : $.value) && Array.isArray((J = this.state.filterChanges) === null || J === void 0 ? void 0 : J.value) && ((L = this.state.filterChanges) === null || L === void 0 ? void 0 : L.value.length) > 0 && (G.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: G
						})
					}), f(this, "handlePendingValueChange", U => {
						this.setState({
							invalid: !1,
							filterChanges: C({}, this.state.filterChanges, {
								value: U
							})
						})
					}), f(this, "handleShowOverflow", () => {
						this.setState({
							showOverflow: !this.state.showOverflow
						})
					}), this.state = {
						open: !1,
						invalid: !1,
						openFilter: null,
						filterChanges: null,
						hasOverflowed: !1,
						showOverflow: !1,
						id: ++N
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(U) {
					U.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(U) {
					const {
						formatLabel: G,
						filterDefinitions: H
					} = this.props, {
						operator: Z
					} = this.state.filterChanges, $ = H[this.state.filterChanges.key], J = this.state.filterChanges.value, L = X => Array.isArray(X) ? X.map(ie => ie.value) : (X == null ? void 0 : X.value) || null;
					if ($.renderValueComponent) return $.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch ($.type) {
						case O.k.custom: {
							var W;
							return (0, l.jsx)($.CustomComponent, C({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (W = $ == null ? void 0 : $.customProps) !== null && W !== void 0 ? W : {}))
						}
						case O.k.select:
							return (0, h.dr)(Z) ? (0, l.jsx)(m.Z, {
								searchable: !0,
								multi: !0,
								creatable: !$.options,
								value: typeof J.split == "function" ? J == null ? void 0 : J.split(",") : Array.isArray(J) ? J : [],
								options: $.options ? $.options.map(X => ({
									value: X.value || X,
									label: X.label || G(this.state.filterChanges.key, X, U)
								})) : J ? (Array.isArray(J) ? J : J.split(",")).map(X => ({
									label: X,
									value: X
								})) : [],
								noOptionsMessage: () => null,
								placeholder: (0, l.jsx)(v.Trans, {
									id: $.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: $.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: X => {
									this.handlePendingValueChange(L(X))
								},
								isValidNewOption: X => {
									const ie = $.validate;
									return !ie && X || X && ie([X])
								},
								getNewOptionData: (X, ie) => ({
									value: X,
									label: ie
								})
							}) : (0, l.jsx)(i.hQ, {
								hideLabel: !0,
								value: J,
								options: $.options.map(X => ({
									value: X,
									label: G(this.state.filterChanges.key, X, U)
								})),
								onChange: ({
									value: X
								}) => this.handlePendingValueChange(X)
							});
						case O.k.string:
						default:
							return (0, h.dr)(Z) ? (0, l.jsx)(m.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof J.split == "function" ? J == null ? void 0 : J.split(",") : Array.isArray(J) ? J : [],
								options: J ? (Array.isArray(J) ? J : J.split(",")).map(X => ({
									label: X,
									value: X
								})) : [],
								noOptionsMessage: () => null,
								placeholder: U.t("analytics.report.filters.labels.placeholder", {
									example: H[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: X => {
									this.handlePendingValueChange(L(X))
								},
								isValidNewOption: X => {
									const ie = $.validate;
									return !ie && X || X && ie([X])
								},
								getNewOptionData: (X, ie) => ({
									value: X,
									label: ie
								}),
								formatCreateLabel: X => U.t("filter_editor.value_create_label", {
									value: X
								})
							}) : (0, l.jsx)(v.I18n, {
								children: X => (0, l.jsx)(u.I, {
									value: this.state.filterChanges.value,
									onChange: ie => this.handlePendingValueChange(ie.target.value),
									mb: 0,
									name: "custom-value",
									placeholder: X.t("analytics.report.filters.labels.placeholder", {
										example: H[this.state.filterChanges.key].example,
										_: ""
									})
								})
							})
					}
				}
				render() {
					const {
						formatLabel: U,
						filterDefinitions: G,
						modalStyles: H,
						filterIconType: Z,
						buttonStyle: $,
						secondaryActionComponent: J
					} = this.props, L = z(this.overflowWrapper), W = `filterPanel${this.state.id}`, X = this.state.openFilter !== null;
					return (0, l.jsx)(v.I18n, {
						children: ie => (0, l.jsxs)(g.ZC, {
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							mr: "auto",
							width: "100%",
							children: [(0, l.jsxs)(re, {
								children: [(0, l.jsxs)(g.ZC, {
									display: "flex",
									flexDirection: "row",
									children: [(0, l.jsxs)(F, {
										type: "primary",
										onClick: this.addNewFilter,
										"aria-expanded": X,
										"aria-controls": W,
										inverted: !0,
										buttonStyle: $,
										children: [(0, l.jsx)(n.J, {
											type: Z || "add",
											mr: 1,
											label: ie.t("common.add", {
												_: "Add"
											})
										}), (0, l.jsx)(v.Trans, {
											id: "analytics.report.filters.labels.add_filter",
											_: "Add filter"
										})]
									}), !!J && (0, l.jsx)(g.ZC, {
										children: J
									})]
								}), this.props.filters.length > 0 && (0, l.jsx)(ne, {
									children: (0, l.jsx)(v.Trans, {
										id: "analytics.report.filters.labels.filters",
										_: "Filters:"
									})
								}), this.props.children]
							}), (0, l.jsx)(I, {
								innerRef: this.overflowWrapper,
								overflowLimit: A,
								showOverflow: this.state.showOverflow,
								children: this.props.filters.map((V, oe) => {
									const {
										key: ge,
										operator: we,
										value: se
									} = V, Ce = G[ge].ignoreLabelTranslation ? G[ge].label : ie.t(G[ge].label), Ae = ie.t(`analytics.report.filters.operators.${we}`), xe = Array.isArray(se) ? se.map(Le => U(ge, Le, ie)).join(", ") : U(ge, se, ie), $e = `${Ce} ${Ae} ${xe}`;
									return (0, l.jsx)(D, {
										title: $e,
										children: (0, l.jsx)(y, {
											onClick: () => this.handleOpenFilterEdit(oe),
											children: (0, l.jsxs)(g.ZC, {
												display: "flex",
												children: [(0, l.jsx)(P, {
													children: Ce
												}), (0, l.jsx)(S, {
													children: Ae
												}), (0, l.jsx)(M, {
													children: xe
												}), (0, h.oN)(V, G) ? (0, l.jsx)(r.OE, {
													startAngle: 90,
													color: "gray.4"
												}) : (0, l.jsx)(te, {
													onClick: Le => this.handleRemoveFilterClick(Le, oe),
													"aria-label": "remove",
													children: (0, l.jsx)(n.J, {
														type: "remove"
													})
												})]
											})
										})
									}, `${ge}-${we}-${se}`)
								})
							}), X && (0, l.jsx)(b.Z, {
								id: W,
								filterDefinitions: G,
								closeOpenFilterChanges: this.closeOpenFilterChanges,
								handleFilterSubmit: this.handleFilterSubmit,
								handlePendingKeyChange: this.handlePendingKeyChange,
								handlePendingOperatorChange: this.handlePendingOperatorChange,
								renderPendingChangeValue: this.renderPendingChangeValue,
								isNew: this.state.openFilter > this.props.filters.length,
								isPersistent: (0, h.oN)(this.state.filterChanges, G),
								filterChanges: this.state.filterChanges,
								invalid: this.state.invalid,
								formatLabel: U,
								modalStyles: H
							}), this.state.hasOverflowed && (0, l.jsx)(p.Z, {
								count: L,
								showOverflow: this.state.showOverflow,
								onClick: this.handleShowOverflow
							})]
						})
					})
				}
			}
			f(R, "propTypes", {
				filterDefinitions: d().shape({}),
				filters: d().arrayOf(d().shape({
					key: d().string,
					operator: d().string,
					value: d().string
				})),
				handleFiltersChange: d().func.isRequired,
				formatLabel: d().func.isRequired,
				onAddFilter: d().func,
				onEditFilter: d().func,
				onRemoveFilter: d().func,
				children: d().node,
				modalStyles: d().object,
				filterIconType: d().string,
				buttonStyle: d().object,
				secondaryActionComponent: d().node
			}), E.Z = R
		},
		"../../../common/component/component-filter-bar/src/index.js": function(j, E, t) {
			"use strict";
			t.d(E, {
				ME: function() {
					return o.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return s.k
				},
				oN: function() {
					return d.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				s = t("../../../common/component/component-filter-bar/src/constants.js"),
				d = t("../../../common/component/component-filter-bar/src/utils.js"),
				a = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				OZ: function() {
					return a
				},
				YB: function() {
					return d
				}
			});

			function e(c, u, _) {
				return u = o(u), u in c ? Object.defineProperty(c, u, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[u] = _, c
			}

			function o(c) {
				var u = s(c, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function s(c, u) {
				if (typeof c != "object" || c === null) return c;
				var _ = c[Symbol.toPrimitive];
				if (_ !== void 0) {
					var n = _.call(c, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(c)
			}
			class d extends Error {
				constructor(u, _) {
					super(_);
					e(this, "translationKey", void 0), this.translationKey = u, this.name = "TranslatorError"
				}
			}
			class a extends d {
				constructor(u, _) {
					super(u, `Translation key not found: ${u}, locale: ${_}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var v = null
		},
		"../../../common/util/types/src/api/domain.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Aw: function() {
					return k
				},
				Ib: function() {
					return f
				},
				Ks: function() {
					return A
				},
				MS: function() {
					return w
				},
				PN: function() {
					return p
				},
				Pp: function() {
					return d
				},
				Q3: function() {
					return g
				},
				TS: function() {
					return m
				},
				W7: function() {
					return h
				},
				dN: function() {
					return I
				},
				eF: function() {
					return C
				},
				ex: function() {
					return D
				},
				qp: function() {
					return n
				},
				wR: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				s = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				d = e.eg.object({
					address: e.eg.string,
					address2: e.eg.string,
					city: e.eg.string,
					country: e.eg.string,
					email: e.eg.string,
					email_verified: e.eg.boolean.optional,
					fax: e.eg.string,
					first_name: e.eg.string,
					id: e.eg.string.optional,
					label: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.string,
					material_changes: e.eg.array(e.eg.string).optional,
					organization: e.eg.string,
					phone: e.eg.string,
					state: e.eg.string,
					zip: e.eg.string,
					extensions: e.eg.object({
						ca_legal_type: e.eg.string.optional
					}).optional
				}),
				a = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				v = e.eg.object({
					registrant: d.optional,
					technical: d.optional,
					administrator: d.optional,
					billing: d.optional
				}),
				c = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: v.optional,
					years: e.eg.number
				}),
				u = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let _ = function(y) {
				return y.ONBOARDING_INITIATED = "Onboarding Initiated", y.ONBOARDED = "Onboarded", y.PENDING_REGISTRY_LOCK = "Pending Registry Lock", y.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", y.REGISTRY_UNLOCKED = "Registry Unlocked", y.LOCKED = "Locked", y.FAILED_TO_LOCK = "Failed To Lock", y.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", y.UNLOCKED = "Unlocked", y.OFFBOARDED = "Offboarded", y
			}({});
			const n = e.eg.object({
					administrator_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					auth_code: e.eg.string.optional,
					auto_renew: e.eg.boolean.optional,
					available: e.eg.boolean,
					billing_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					can_register: e.eg.boolean.optional,
					cloudflare_dns: e.eg.boolean.optional,
					cloudflare_registration: e.eg.boolean.optional,
					contacts: e.eg.any.optional,
					contacts_updated_at: e.eg.string.optional,
					cor_locked: e.eg.boolean.optional,
					cor_locked_until: e.eg.union([e.eg.string, e.eg.null]).optional,
					cor_responses_pending: e.eg.number.optional,
					created_at: e.eg.string.optional,
					created_registrar: e.eg.string.optional,
					current_registrar: e.eg.string.optional,
					domain_protection_services: e.eg.object({
						status: e.eg.enum(_).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: u.optional,
					landing: e.eg.union([s, e.eg.boolean]).optional,
					last_known_status: e.eg.union([e.eg.string, e.eg.null]).optional,
					locked: e.eg.boolean.optional,
					name: e.eg.string,
					name_servers: e.eg.array(e.eg.string).optional,
					material_changes: e.eg.array(e.eg.string).optional,
					partner_response: e.eg.union([e.eg.string, e.eg.null]).optional,
					payment_expires_at: e.eg.string.optional,
					pending_transfer: e.eg.boolean.optional,
					permissions: e.eg.array(e.eg.string).optional,
					previous_registrar: e.eg.union([e.eg.string, e.eg.null]).optional,
					privacy: e.eg.boolean.optional,
					registered_at: e.eg.union([e.eg.string, e.eg.null]).optional,
					registrant_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					registry_object_id: e.eg.union([e.eg.string, e.eg.null]).optional,
					registry_statuses: e.eg.string.optional,
					supported_tld: e.eg.boolean.optional,
					tags: e.eg.array(e.eg.string).optional,
					technical_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					transfer_conditions: a.optional,
					updated_at: e.eg.union([e.eg.string, e.eg.null]).optional,
					updated_registrar: e.eg.string.optional,
					using_created_registrar_nameservers: e.eg.boolean.optional,
					using_current_registrar_nameservers: e.eg.boolean.optional,
					using_previous_registrar_nameservers: e.eg.boolean.optional,
					using_updated_registrar_nameservers: e.eg.boolean.optional,
					whois: e.eg.unknown.optional
				}),
				r = e.eg.object({
					available: e.eg.boolean
				}),
				i = e.eg.object({
					result: e.eg.array(n),
					result_info: e.eg.object({
						count: e.eg.number,
						page: e.eg.number,
						per_page: e.eg.number,
						total_count: e.eg.number
					}),
					errors: e.eg.array(e.eg.string),
					messages: e.eg.array(e.eg.string),
					success: e.eg.boolean
				}),
				g = e.eg.object({
					check_result: e.eg.union([e.eg.null, e.eg.object({
						name: e.eg.string,
						supported_tld: e.eg.boolean,
						premium: e.eg.boolean,
						available: e.eg.boolean,
						can_register: e.eg.boolean
					})]).optional,
					domains: e.eg.array(e.eg.object({
						name: e.eg.string,
						availability: e.eg.string,
						price: e.eg.number,
						icann_fee: e.eg.number,
						pricing: e.eg.object({
							currency: e.eg.string,
							registration_fee: e.eg.number,
							renewal_fee: e.eg.number
						}),
						pricing_local: e.eg.object({
							currency: e.eg.string,
							registration_fee: e.eg.number,
							renewal_fee: e.eg.number
						})
					}))
				}),
				m = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let p = function(y) {
				return y.PENDING = "pending", y.VERIFIED = "verified", y.REJECTED = "rejected", y.PENDING_DELETE = "pending_delete", y.DELETED = "deleted", y
			}({});
			const b = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(p),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				O = e.eg.object({
					designated_approvers: e.eg.array(b)
				});
			let h = function(y) {
				return y.PENDING = "pending", y.PENDING_UPDATE = "pending_update", y.ENABLED = "enabled", y.DISABLED = "disabled", y
			}({});
			const l = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(h)
				}),
				C = e.eg.intersection([l, O]),
				f = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let w = function(y) {
				return y.UNLOCK_APPROVAL = "UnlockApprovalRequest", y.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", y.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", y.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", y
			}({});
			const k = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				A = e.eg.object({
					message: e.eg.string
				}),
				I = e.eg.object({
					result: e.eg.object({
						entry: e.eg.object({
							address2: e.eg.string,
							address: e.eg.string,
							city: e.eg.string,
							country: e.eg.string,
							default: e.eg.boolean,
							email: e.eg.string,
							email_verified: e.eg.boolean,
							fax: e.eg.string,
							first_name: e.eg.string,
							id: e.eg.string,
							last_name: e.eg.string,
							organization: e.eg.string,
							phone: e.eg.string,
							state: e.eg.string,
							zip: e.eg.string
						})
					})
				}),
				D = e.eg.object({
					result: v
				})
		},
		"../../../common/util/types/src/api/phases/fields.tsx": function(j, E, t) {
			"use strict";
			t.d(E, {
				df: function() {
					return o
				},
				eX: function() {
					return s
				},
				fG: function() {
					return a
				},
				jI: function() {
					return d
				},
				qu: function() {
					return e
				},
				zc: function() {
					return v
				}
			});
			let e = function(c) {
					return c.Custom = "custom", c.Root = "root", c.Managed = "managed", c.Zone = "zone", c.RateLimit = "ratelimit", c
				}({}),
				o = function(c) {
					return c.Cache = "http_request_cache_settings", c.HttpCustomErrors = "http_custom_errors", c.HttpConfigSettings = "http_config_settings", c.HttpLogCustomFields = "http_log_custom_fields", c.HttpRateLimit = "http_ratelimit", c.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", c.HttpRequestFirewallCustom = "http_request_firewall_custom", c.HttpRequestFirewallManaged = "http_request_firewall_managed", c.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", c.HttpRequestLateTransform = "http_request_late_transform", c.HttpRequestMain = "http_request_main", c.HttpRequestOrigin = "http_request_origin", c.HttpRequestRedirect = "http_request_redirect", c.HttpRequestSanitize = "http_request_sanitize", c.HttpRequestSBFM = "http_request_sbfm", c.HttpRequestsSnippets = "http_request_snippets", c.HttpRequestTransform = "http_request_transform", c.HttpResponseCompression = "http_response_compression", c.HttpResponseFirewallManaged = "http_response_firewall_managed", c.HttpResponseTransform = "http_response_headers_transform", c.L4DDoS = "ddos_l4", c.L7DDoS = "ddos_l7", c.MagicIDS = "magic_transit_ids_managed", c.MagicManaged = "magic_transit_managed", c.MagicTransit = "magic_transit", c.MagicTransitRateLimit = "magic_transit_ratelimit", c
				}({}),
				s = function(c) {
					return c.Execute = "execute", c.All = "all", c.Block = "block", c.JSChallenge = "js_challenge", c.Challenge = "challenge", c.Allow = "allow", c.Bypass = "bypass", c.Log = "log", c.Rewrite = "rewrite", c.Score = "score", c.Skip = "skip", c.Managed_Challenge = "managed_challenge", c.DDoS_Dynamic = "ddos_dynamic", c.Select_Config = "select_config", c.Set_Config = "set_config", c.Reset = "reset", c.Redirect = "redirect", c.Cache = "set_cache_settings", c.WhiteList = "whitelist", c.Error = "serve_error", c
				}({}),
				d = function(c) {
					return c.ZONE_LOCKDOWN = "zoneLockdown", c.UA_BLOCK = "uaBlock", c.BIC = "bic", c.HOT = "hot", c.SECURITY_LEVEL = "securityLevel", c.RATE_LIMIT = "rateLimit", c.WAF = "waf", c
				}({}),
				a = function(c) {
					return c.DEFAULT = "default", c.MEDIUM = "medium", c.LOW = "low", c.EOFF = "eoff", c.HIGH = "high", c.VERY_HIGH = "very_high", c
				}({}),
				v = function(c) {
					return c.DEFAULT = "", c.XML = "text/xml", c.JSON = "application/json", c.TEXT = "text/plain", c.HTML = "text/html", c
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(j, E, t) {
			"use strict";
			t.d(E, {
				Yd: function() {
					return e
				},
				vE: function() {
					return o
				}
			});

			function e(s) {
				return Object.keys(s)
			}
			const o = (s, d) => {
				if (d !== void 0) throw new Error("Unexpected object: " + s);
				return d
			}
		},
		"../react/common/out.css": function(j, E, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[j.id, e, ""]
			]);
			var o, s, d = {
				hmr: !0
			};
			d.transform = o, d.insertInto = void 0;
			var a = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, d);
			e.locals && (j.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function(j, E, t) {
			E = j.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), E.push([j.id, `/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-200: oklch(88.5% 0.062 18.334);
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-800: oklch(44.4% 0.177 26.899);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-orange-200: oklch(90.1% 0.076 70.697);
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-600: oklch(64.6% 0.222 41.116);
    --color-orange-800: oklch(47% 0.157 37.304);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-yellow-50: oklch(98.7% 0.026 102.212);
    --color-yellow-200: oklch(94.5% 0.129 101.54);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-yellow-600: oklch(68.1% 0.162 75.834);
    --color-yellow-900: oklch(42.1% 0.095 57.708);
    --color-green-50: oklch(98.2% 0.018 155.826);
    --color-green-100: oklch(96.2% 0.044 156.743);
    --color-green-200: oklch(92.5% 0.084 155.995);
    --color-green-300: oklch(87.1% 0.15 154.449);
    --color-green-400: oklch(79.2% 0.209 151.711);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-green-600: oklch(62.7% 0.194 149.214);
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-800: oklch(44.8% 0.119 151.328);
    --color-green-900: oklch(39.3% 0.095 152.535);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-cyan-100: oklch(95.6% 0.045 203.388);
    --color-cyan-800: oklch(45% 0.085 224.283);
    --color-sky-500: oklch(68.5% 0.169 237.323);
    --color-blue-50: oklch(97% 0.014 254.604);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-400: oklch(0.707 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(0.424 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-blue-950: oklch(28.2% 0.091 267.935);
    --color-indigo-50: oklch(96.2% 0.018 272.314);
    --color-indigo-100: oklch(93% 0.034 272.788);
    --color-indigo-200: oklch(87% 0.065 274.039);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-indigo-700: oklch(45.7% 0.24 277.023);
    --color-indigo-900: oklch(35.9% 0.144 278.697);
    --color-purple-200: oklch(90.2% 0.063 306.703);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-fuchsia-500: oklch(66.7% 0.295 322.15);
    --color-rose-500: oklch(64.5% 0.246 16.439);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-neutral-50: oklch(0.985 0 0);
    --color-neutral-100: oklch(0.97 0 0);
    --color-neutral-200: oklch(0.922 0 0);
    --color-neutral-300: oklch(0.87 0 0);
    --color-neutral-400: oklch(0.708 0 0);
    --color-neutral-500: oklch(0.556 0 0);
    --color-neutral-600: oklch(0.439 0 0);
    --color-neutral-700: oklch(0.371 0 0);
    --color-neutral-800: oklch(0.269 0 0);
    --color-neutral-900: oklch(0.205 0 0);
    --color-neutral-950: oklch(0.145 0 0);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-xs: 20rem;
    --container-md: 28rem;
    --container-3xl: 48rem;
    --container-6xl: 72rem;
    --text-xs: 12px;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 13px;
    --text-sm--line-height: calc(1 / 0.85);
    --text-base: 14px;
    --text-base--line-height: calc(1.25 / 0.875);
    --text-lg: 16px;
    --text-lg--line-height: calc(1.25 / 1);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-normal: 0em;
    --tracking-wide: 0.025em;
    --tracking-widest: 0.1em;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --radius-xs: 0.125rem;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --animate-spin: spin 1s linear infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --blur-md: 12px;
    --default-transition-duration: 100ms /* snappier than default 150ms */;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --color-surface: var(--kumo-surface);
    --color-surface-secondary: var(--kumo-surface-secondary);
    --color-surface-active: var(--kumo-surface-active);
    --color-primary: var(--kumo-primary);
    --color-secondary: var(--kumo-secondary);
    --color-secondary-hover: var(--kumo-secondary-hover);
    --color-accent: var(--kumo-accent);
    --color-destructive: var(--kumo-destructive);
    --color-muted: var(--kumo-muted);
    --color-input: var(--kumo-input);
    --color-active: var(--kumo-border-active);
    --color-border-hover: var(--kumo-border-hover);
    --color-color: var(--kumo-border);
    --text-color-surface: var(--kumo-surface-foreground);
    --text-color-primary: var(--kumo-primary-foreground);
    --text-color-secondary: var(--kumo-secondary-foreground);
    --text-color-destructive: var(--kumo-destructive-foreground);
    --text-color-muted: var(--kumo-muted-foreground);
    --text-color-error: var(--kumo-text-error);
    --animate-refresh: refresh 0.5s ease-in-out infinite;
    --animate-right: right 15s linear infinite;
    --color-neutral-150: oklch(0.96 0 0) /*new */;
    --color-neutral-250: oklch(0.9 0 0) /* new */;
    --color-neutral-450: oklch(0.62 0 0) /* new */;
    --color-neutral-750: oklch(0.31 0 0) /* new */;
    --color-neutral-850: oklch(0.23 0 0) /* new */;
    --color-border: var(--cf-gray-8);
    --color-bg-primary: var(--kumo-surface);
    --color-bg-secondary: var(--kumo-surface-secondary);
    --color-ob-base-1000: var(--color-neutral-900);
    --text-color-ob-inverted: var(--color-white);
    --color-cl1-white: var(--cf-white);
    --color-cl1-gold-7: var(--cf-gold-7);
    --color-cl1-gold-9: var(--cf-gold-9);
    --color-cl1-gray-2: var(--cf-gray-2);
    --color-cl1-gray-4: var(--cf-gray-4);
    --color-cl1-gray-5: var(--cf-gray-5);
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }
  .visible\\! {
    visibility: visible !important;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .-inset-0\\.5 {
    inset: calc(var(--spacing) * -0.5);
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .-top-10 {
    top: calc(var(--spacing) * -10);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-1\\/2 {
    top: calc(1/2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .top-4 {
    top: calc(var(--spacing) * 4);
  }
  .top-8 {
    top: calc(var(--spacing) * 8);
  }
  .top-22 {
    top: calc(var(--spacing) * 22);
  }
  .top-32 {
    top: calc(var(--spacing) * 32);
  }
  .top-64 {
    top: calc(var(--spacing) * 64);
  }
  .top-\\[30\\%\\] {
    top: 30%;
  }
  .top-\\[160px\\] {
    top: 160px;
  }
  .top-full {
    top: 100%;
  }
  .top-px {
    top: 1px;
  }
  .-right-1 {
    right: calc(var(--spacing) * -1);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .right-24 {
    right: calc(var(--spacing) * 24);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-1\\/2 {
    left: calc(1/2 * 100%);
  }
  .left-2 {
    left: calc(var(--spacing) * 2);
  }
  .isolate {
    isolation: isolate;
  }
  .\\!z-100 {
    z-index: 100 !important;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }
  .z-100 {
    z-index: 100;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .container {
    width: 100%;
    @media (width >= 40rem) {
      max-width: 40rem;
    }
    @media (width >= 48rem) {
      max-width: 48rem;
    }
    @media (width >= 64rem) {
      max-width: 64rem;
    }
    @media (width >= 80rem) {
      max-width: 80rem;
    }
    @media (width >= 96rem) {
      max-width: 96rem;
    }
  }
  .\\!m-0 {
    margin: calc(var(--spacing) * 0) !important;
  }
  .-m-px {
    margin: -1px;
  }
  .m-0\\! {
    margin: calc(var(--spacing) * 0) !important;
  }
  .m-1 {
    margin: calc(var(--spacing) * 1);
  }
  .m-2 {
    margin: calc(var(--spacing) * 2);
  }
  .m-4 {
    margin: calc(var(--spacing) * 4);
  }
  .m-auto {
    margin: auto;
  }
  .-mx-1 {
    margin-inline: calc(var(--spacing) * -1);
  }
  .-mx-2 {
    margin-inline: calc(var(--spacing) * -2);
  }
  .-mx-5 {
    margin-inline: calc(var(--spacing) * -5);
  }
  .mx-1 {
    margin-inline: calc(var(--spacing) * 1);
  }
  .mx-2 {
    margin-inline: calc(var(--spacing) * 2);
  }
  .mx-4 {
    margin-inline: calc(var(--spacing) * 4);
  }
  .mx-auto {
    margin-inline: auto;
  }
  .\\!my-0 {
    margin-block: calc(var(--spacing) * 0) !important;
  }
  .\\!my-4 {
    margin-block: calc(var(--spacing) * 4) !important;
  }
  .my-1 {
    margin-block: calc(var(--spacing) * 1);
  }
  .my-2 {
    margin-block: calc(var(--spacing) * 2);
  }
  .my-4 {
    margin-block: calc(var(--spacing) * 4);
  }
  .my-5 {
    margin-block: calc(var(--spacing) * 5);
  }
  .\\!-mt-0\\.5 {
    margin-top: calc(var(--spacing) * -0.5) !important;
  }
  .\\!mt-1 {
    margin-top: calc(var(--spacing) * 1) !important;
  }
  .\\!mt-2 {
    margin-top: calc(var(--spacing) * 2) !important;
  }
  .\\!mt-3 {
    margin-top: calc(var(--spacing) * 3) !important;
  }
  .\\!mt-4 {
    margin-top: calc(var(--spacing) * 4) !important;
  }
  .\\!mt-5 {
    margin-top: calc(var(--spacing) * 5) !important;
  }
  .\\!mt-6 {
    margin-top: calc(var(--spacing) * 6) !important;
  }
  .-mt-2 {
    margin-top: calc(var(--spacing) * -2);
  }
  .mt-0 {
    margin-top: calc(var(--spacing) * 0);
  }
  .mt-0\\.5\\! {
    margin-top: calc(var(--spacing) * 0.5) !important;
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-1\\.5 {
    margin-top: calc(var(--spacing) * 1.5);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-2\\.5 {
    margin-top: calc(var(--spacing) * 2.5);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-6 {
    margin-top: calc(var(--spacing) * 6);
  }
  .mt-\\[1px\\] {
    margin-top: 1px;
  }
  .\\!mr-1 {
    margin-right: calc(var(--spacing) * 1) !important;
  }
  .\\!mr-\\[1px\\] {
    margin-right: 1px !important;
  }
  .-mr-2 {
    margin-right: calc(var(--spacing) * -2);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-2 {
    margin-right: calc(var(--spacing) * 2);
  }
  .mr-3 {
    margin-right: calc(var(--spacing) * 3);
  }
  .mr-4 {
    margin-right: calc(var(--spacing) * 4);
  }
  .mr-8 {
    margin-right: calc(var(--spacing) * 8);
  }
  .mr-16 {
    margin-right: calc(var(--spacing) * 16);
  }
  .mr-auto {
    margin-right: auto;
  }
  .\\!mb-0 {
    margin-bottom: calc(var(--spacing) * 0) !important;
  }
  .\\!mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5) !important;
  }
  .\\!mb-2 {
    margin-bottom: calc(var(--spacing) * 2) !important;
  }
  .\\!mb-2\\.5 {
    margin-bottom: calc(var(--spacing) * 2.5) !important;
  }
  .\\!mb-3 {
    margin-bottom: calc(var(--spacing) * 3) !important;
  }
  .\\!mb-4 {
    margin-bottom: calc(var(--spacing) * 4) !important;
  }
  .-mb-5 {
    margin-bottom: calc(var(--spacing) * -5);
  }
  .-mb-\\[68px\\] {
    margin-bottom: calc(68px * -1);
  }
  .mb-0 {
    margin-bottom: calc(var(--spacing) * 0);
  }
  .mb-1 {
    margin-bottom: calc(var(--spacing) * 1);
  }
  .mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-8 {
    margin-bottom: calc(var(--spacing) * 8);
  }
  .\\!-ml-1 {
    margin-left: calc(var(--spacing) * -1) !important;
  }
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
  }
  .\\!ml-0\\.5 {
    margin-left: calc(var(--spacing) * 0.5) !important;
  }
  .-ml-2 {
    margin-left: calc(var(--spacing) * -2);
  }
  .-ml-px {
    margin-left: -1px;
  }
  .ml-0\\.5 {
    margin-left: calc(var(--spacing) * 0.5);
  }
  .ml-1 {
    margin-left: calc(var(--spacing) * 1);
  }
  .ml-2 {
    margin-left: calc(var(--spacing) * 2);
  }
  .ml-4 {
    margin-left: calc(var(--spacing) * 4);
  }
  .ml-6 {
    margin-left: calc(var(--spacing) * 6);
  }
  .ml-7 {
    margin-left: calc(var(--spacing) * 7);
  }
  .ml-11 {
    margin-left: calc(var(--spacing) * 11);
  }
  .ml-auto {
    margin-left: auto;
  }
  .box-border {
    box-sizing: border-box;
  }
  .line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  .line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .list-item {
    display: list-item;
  }
  .table {
    display: table;
  }
  .table-cell {
    display: table-cell;
  }
  .table-row {
    display: table-row;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .size-1 {
    width: calc(var(--spacing) * 1);
    height: calc(var(--spacing) * 1);
  }
  .size-4 {
    width: calc(var(--spacing) * 4);
    height: calc(var(--spacing) * 4);
  }
  .size-4\\.5 {
    width: calc(var(--spacing) * 4.5);
    height: calc(var(--spacing) * 4.5);
  }
  .size-5 {
    width: calc(var(--spacing) * 5);
    height: calc(var(--spacing) * 5);
  }
  .size-6\\.5 {
    width: calc(var(--spacing) * 6.5);
    height: calc(var(--spacing) * 6.5);
  }
  .size-9 {
    width: calc(var(--spacing) * 9);
    height: calc(var(--spacing) * 9);
  }
  .size-10 {
    width: calc(var(--spacing) * 10);
    height: calc(var(--spacing) * 10);
  }
  .size-15 {
    width: calc(var(--spacing) * 15);
    height: calc(var(--spacing) * 15);
  }
  .\\!h-3\\.5 {
    height: calc(var(--spacing) * 3.5) !important;
  }
  .\\!h-\\[34px\\] {
    height: 34px !important;
  }
  .\\!h-full {
    height: 100% !important;
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-2\\.5 {
    height: calc(var(--spacing) * 2.5);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
  }
  .h-3\\.5 {
    height: calc(var(--spacing) * 3.5);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-5\\.5 {
    height: calc(var(--spacing) * 5.5);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-6\\.5 {
    height: calc(var(--spacing) * 6.5);
  }
  .h-7\\.5 {
    height: calc(var(--spacing) * 7.5);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-8\\/10 {
    height: calc(8/10 * 100%);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-16 {
    height: calc(var(--spacing) * 16);
  }
  .h-20 {
    height: calc(var(--spacing) * 20);
  }
  .h-32 {
    height: calc(var(--spacing) * 32);
  }
  .h-64 {
    height: calc(var(--spacing) * 64);
  }
  .h-\\[18px\\] {
    height: 18px;
  }
  .h-\\[22px\\] {
    height: 22px;
  }
  .h-\\[35px\\] {
    height: 35px;
  }
  .h-\\[60px\\] {
    height: 60px;
  }
  .h-\\[80px\\] {
    height: 80px;
  }
  .h-\\[80vh\\] {
    height: 80vh;
  }
  .h-\\[90vh\\] {
    height: 90vh;
  }
  .h-\\[100\\%\\] {
    height: 100%;
  }
  .h-\\[300px\\] {
    height: 300px;
  }
  .h-\\[calc\\(75dvh\\)\\] {
    height: calc(75dvh);
  }
  .h-fit {
    height: fit-content;
  }
  .h-full {
    height: 100%;
  }
  .h-px {
    height: 1px;
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-8\\/10 {
    max-height: calc(8/10 * 100%);
  }
  .max-h-\\[50vh\\] {
    max-height: 50vh;
  }
  .max-h-\\[400px\\] {
    max-height: 400px;
  }
  .max-h-\\[600px\\] {
    max-height: 600px;
  }
  .max-h-\\[calc\\(75dvh\\)\\] {
    max-height: calc(75dvh);
  }
  .max-h-\\[calc\\(100vh-64px\\)\\] {
    max-height: calc(100vh - 64px);
  }
  .max-h-\\[calc\\(var\\(--footer-max-height\\)-150px\\)\\] {
    max-height: calc(var(--footer-max-height) - 150px);
  }
  .max-h-screen {
    max-height: 100vh;
  }
  .\\!min-h-10 {
    min-height: calc(var(--spacing) * 10) !important;
  }
  .min-h-1 {
    min-height: calc(var(--spacing) * 1);
  }
  .min-h-3 {
    min-height: calc(var(--spacing) * 3);
  }
  .min-h-20 {
    min-height: calc(var(--spacing) * 20);
  }
  .min-h-\\[20px\\] {
    min-height: 20px;
  }
  .min-h-\\[32px\\] {
    min-height: 32px;
  }
  .min-h-\\[350px\\] {
    min-height: 350px;
  }
  .min-h-\\[calc\\(100vh-160px\\)\\] {
    min-height: calc(100vh - 160px);
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .\\!w-3\\.5 {
    width: calc(var(--spacing) * 3.5) !important;
  }
  .\\!w-3xl {
    width: var(--container-3xl) !important;
  }
  .\\!w-auto {
    width: auto !important;
  }
  .\\!w-full {
    width: 100% !important;
  }
  .w-0 {
    width: calc(var(--spacing) * 0);
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\/2 {
    width: calc(1/2 * 100%);
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-2\\.5 {
    width: calc(var(--spacing) * 2.5);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
  }
  .w-3xl {
    width: var(--container-3xl);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-6xl {
    width: var(--container-6xl);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-8\\.5 {
    width: calc(var(--spacing) * 8.5);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-10\\.5 {
    width: calc(var(--spacing) * 10.5);
  }
  .w-11 {
    width: calc(var(--spacing) * 11);
  }
  .w-12 {
    width: calc(var(--spacing) * 12);
  }
  .w-12\\.5 {
    width: calc(var(--spacing) * 12.5);
  }
  .w-16 {
    width: calc(var(--spacing) * 16);
  }
  .w-20 {
    width: calc(var(--spacing) * 20);
  }
  .w-24 {
    width: calc(var(--spacing) * 24);
  }
  .w-30 {
    width: calc(var(--spacing) * 30);
  }
  .w-32 {
    width: calc(var(--spacing) * 32);
  }
  .w-40 {
    width: calc(var(--spacing) * 40);
  }
  .w-45 {
    width: calc(var(--spacing) * 45);
  }
  .w-48 {
    width: calc(var(--spacing) * 48);
  }
  .w-64 {
    width: calc(var(--spacing) * 64);
  }
  .w-70 {
    width: calc(var(--spacing) * 70);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-120 {
    width: calc(var(--spacing) * 120);
  }
  .w-\\[10px\\] {
    width: 10px;
  }
  .w-\\[15\\%\\] {
    width: 15%;
  }
  .w-\\[20\\%\\] {
    width: 20%;
  }
  .w-\\[30\\%\\] {
    width: 30%;
  }
  .w-\\[380px\\] {
    width: 380px;
  }
  .w-\\[400px\\] {
    width: 400px;
  }
  .w-\\[426px\\] {
    width: 426px;
  }
  .w-\\[446px\\] {
    width: 446px;
  }
  .w-\\[var\\(--width\\)\\] {
    width: var(--width);
  }
  .w-fit {
    width: fit-content;
  }
  .w-full {
    width: 100%;
  }
  .w-max {
    width: max-content;
  }
  .w-px {
    width: 1px;
  }
  .\\!max-w-3xl {
    max-width: var(--container-3xl) !important;
  }
  .max-w-3xl {
    max-width: var(--container-3xl);
  }
  .max-w-8\\/10 {
    max-width: calc(8/10 * 100%);
  }
  .max-w-28 {
    max-width: calc(var(--spacing) * 28);
  }
  .max-w-32 {
    max-width: calc(var(--spacing) * 32);
  }
  .max-w-50 {
    max-width: calc(var(--spacing) * 50);
  }
  .max-w-80 {
    max-width: calc(var(--spacing) * 80);
  }
  .max-w-140 {
    max-width: calc(var(--spacing) * 140);
  }
  .max-w-\\[30ch\\] {
    max-width: 30ch;
  }
  .max-w-\\[60ch\\] {
    max-width: 60ch;
  }
  .max-w-\\[70ch\\] {
    max-width: 70ch;
  }
  .max-w-\\[90vw\\] {
    max-width: 90vw;
  }
  .max-w-\\[200ch\\] {
    max-width: 200ch;
  }
  .max-w-\\[400px\\] {
    max-width: 400px;
  }
  .max-w-\\[640px\\] {
    max-width: 640px;
  }
  .max-w-\\[800px\\] {
    max-width: 800px;
  }
  .max-w-\\[1000px\\] {
    max-width: 1000px;
  }
  .max-w-\\[1200px\\] {
    max-width: 1200px;
  }
  .max-w-\\[1300px\\] {
    max-width: 1300px;
  }
  .max-w-\\[1400px\\] {
    max-width: 1400px;
  }
  .max-w-\\[calc\\(100vw-3rem\\)\\] {
    max-width: calc(100vw - 3rem);
  }
  .max-w-full {
    max-width: 100%;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-3 {
    min-width: calc(var(--spacing) * 3);
  }
  .min-w-30 {
    min-width: calc(var(--spacing) * 30);
  }
  .min-w-32 {
    min-width: calc(var(--spacing) * 32);
  }
  .min-w-36 {
    min-width: calc(var(--spacing) * 36);
  }
  .min-w-40 {
    min-width: calc(var(--spacing) * 40);
  }
  .min-w-42 {
    min-width: calc(var(--spacing) * 42);
  }
  .min-w-44 {
    min-width: calc(var(--spacing) * 44);
  }
  .min-w-48 {
    min-width: calc(var(--spacing) * 48);
  }
  .min-w-50 {
    min-width: calc(var(--spacing) * 50);
  }
  .min-w-52 {
    min-width: calc(var(--spacing) * 52);
  }
  .min-w-60 {
    min-width: calc(var(--spacing) * 60);
  }
  .min-w-64 {
    min-width: calc(var(--spacing) * 64);
  }
  .min-w-80 {
    min-width: calc(var(--spacing) * 80);
  }
  .min-w-96 {
    min-width: calc(var(--spacing) * 96);
  }
  .min-w-\\[8rem\\] {
    min-width: 8rem;
  }
  .min-w-\\[9px\\] {
    min-width: 9px;
  }
  .min-w-\\[170px\\] {
    min-width: 170px;
  }
  .min-w-\\[200px\\] {
    min-width: 200px;
  }
  .min-w-\\[250px\\] {
    min-width: 250px;
  }
  .min-w-\\[280px\\] {
    min-width: 280px;
  }
  .min-w-\\[800px\\] {
    min-width: 800px;
  }
  .min-w-\\[var\\(--trigger-width\\)\\] {
    min-width: var(--trigger-width);
  }
  .min-w-xs {
    min-width: var(--container-xs);
  }
  .flex-0 {
    flex: 0;
  }
  .flex-1 {
    flex: 1;
  }
  .flex-auto {
    flex: auto;
  }
  .flex-shrink {
    flex-shrink: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .shrink {
    flex-shrink: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }
  .grow {
    flex-grow: 1;
  }
  .grow-0 {
    flex-grow: 0;
  }
  .grow-1 {
    flex-grow: 1;
  }
  .border-collapse {
    border-collapse: collapse;
  }
  .origin-left {
    transform-origin: left;
  }
  .-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1/2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-x-4 {
    --tw-translate-x: calc(var(--spacing) * -4);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-0 {
    --tw-translate-x: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-4 {
    --tw-translate-x: calc(var(--spacing) * 4);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-16 {
    --tw-translate-x: calc(var(--spacing) * 16);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-full {
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1/2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-16 {
    --tw-translate-y: calc(var(--spacing) * -16);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-px {
    --tw-translate-y: -1px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0\\.5 {
    --tw-translate-y: calc(var(--spacing) * 0.5);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-1\\.5 {
    --tw-translate-y: calc(var(--spacing) * 1.5);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-\\[2px\\] {
    --tw-translate-y: 2px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-\\[calc\\(-50\\%-1px\\)\\] {
    --tw-translate-y: calc(-50% - 1px);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-x-0 {
    --tw-scale-x: 0%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .scale-x-100 {
    --tw-scale-x: 100%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .rotate-45 {
    rotate: 45deg;
  }
  .rotate-90 {
    rotate: 90deg;
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .transform-gpu {
    transform: translateZ(0) var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-pulse {
    animation: var(--animate-pulse);
  }
  .animate-refresh {
    animation: var(--animate-refresh);
  }
  .animate-right {
    animation: var(--animate-right);
  }
  .animate-spin {
    animation: var(--animate-spin);
  }
  .\\!cursor-not-allowed {
    cursor: not-allowed !important;
  }
  .cursor-col-resize {
    cursor: col-resize;
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-default\\! {
    cursor: default !important;
  }
  .cursor-not-allowed {
    cursor: not-allowed;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .resize {
    resize: both;
  }
  .resize-none {
    resize: none;
  }
  .\\!list-none {
    list-style-type: none !important;
  }
  .list-disc {
    list-style-type: disc;
  }
  .appearance-none {
    appearance: none;
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-\\[1fr_1fr_2fr\\] {
    grid-template-columns: 1fr 1fr 2fr;
  }
  .grid-cols-\\[2fr_1\\.5fr_2\\.5fr_1fr_1fr\\] {
    grid-template-columns: 2fr 1.5fr 2.5fr 1fr 1fr;
  }
  .grid-cols-\\[200px_1fr\\] {
    grid-template-columns: 200px 1fr;
  }
  .grid-cols-\\[320px_1fr\\] {
    grid-template-columns: 320px 1fr;
  }
  .grid-cols-\\[max-content_1fr\\] {
    grid-template-columns: max-content 1fr;
  }
  .\\!flex-row {
    flex-direction: row !important;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-stretch {
    justify-content: stretch;
  }
  .gap-0 {
    gap: calc(var(--spacing) * 0);
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-2\\.5 {
    gap: calc(var(--spacing) * 2.5);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .gap-5 {
    gap: calc(var(--spacing) * 5);
  }
  .gap-6 {
    gap: calc(var(--spacing) * 6);
  }
  .gap-8 {
    gap: calc(var(--spacing) * 8);
  }
  .gap-12 {
    gap: calc(var(--spacing) * 12);
  }
  .space-y-1 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-2 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-3 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-4 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-6 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-\\[var\\(--gap\\)\\] {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(var(--gap) * var(--tw-space-y-reverse));
      margin-block-end: calc(var(--gap) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .gap-x-1\\.5 {
    column-gap: calc(var(--spacing) * 1.5);
  }
  .space-x-1 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 1) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .space-x-2 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .space-x-3 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .space-x-4 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .divide-x {
    :where(& > :not(:last-child)) {
      --tw-divide-x-reverse: 0;
      border-inline-style: var(--tw-border-style);
      border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));
      border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
    }
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-border {
    :where(& > :not(:last-child)) {
      border-color: var(--color-border);
    }
  }
  .divide-gray-200 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-gray-200);
    }
  }
  .divide-gray-300 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-gray-300);
    }
  }
  .divide-neutral-200 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-neutral-200);
    }
  }
  .self-center {
    align-self: center;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .\\!overflow-visible {
    overflow: visible !important;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-clip {
    overflow: clip;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }
  .overflow-visible {
    overflow: visible;
  }
  .overflow-visible\\! {
    overflow: visible !important;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-scroll {
    overflow-x: scroll;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .overflow-y-scroll {
    overflow-y: scroll;
  }
  .overscroll-contain {
    overscroll-behavior: contain;
  }
  .\\!rounded {
    border-radius: 0.25rem !important;
  }
  .\\!rounded-lg {
    border-radius: var(--radius-lg) !important;
  }
  .\\!rounded-none {
    border-radius: 0 !important;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-none {
    border-radius: 0;
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .rounded-xl\\! {
    border-radius: var(--radius-xl) !important;
  }
  .rounded-xs {
    border-radius: var(--radius-xs);
  }
  .\\!rounded-t-none {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }
  .rounded-t {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-l {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .rounded-l-none {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .rounded-r {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  .rounded-r-none {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .rounded-b {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .rounded-b-lg {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
  }
  .\\!rounded-br-none {
    border-bottom-right-radius: 0 !important;
  }
  .\\!border {
    border-style: var(--tw-border-style) !important;
    border-width: 1px !important;
  }
  .\\!border-0 {
    border-style: var(--tw-border-style) !important;
    border-width: 0px !important;
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
  }
  .border-1 {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-y {
    border-block-style: var(--tw-border-style);
    border-block-width: 1px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .\\!border-r {
    border-right-style: var(--tw-border-style) !important;
    border-right-width: 1px !important;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-b-0 {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 0px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-l-4 {
    border-left-style: var(--tw-border-style);
    border-left-width: 4px;
  }
  .\\!border-none {
    --tw-border-style: none !important;
    border-style: none !important;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .\\!border-blue-500 {
    border-color: var(--color-blue-500) !important;
  }
  .\\!border-border {
    border-color: var(--color-border) !important;
  }
  .\\!border-neutral-200 {
    border-color: var(--color-neutral-200) !important;
  }
  .\\!border-neutral-300 {
    border-color: var(--color-neutral-300) !important;
  }
  .border-blue-100 {
    border-color: var(--color-blue-100);
  }
  .border-blue-200 {
    border-color: var(--color-blue-200);
  }
  .border-blue-300 {
    border-color: var(--color-blue-300);
  }
  .border-blue-400 {
    border-color: var(--color-blue-400);
  }
  .border-blue-500 {
    border-color: var(--color-blue-500);
  }
  .border-blue-600 {
    border-color: var(--color-blue-600);
  }
  .border-border {
    border-color: var(--color-border);
  }
  .border-cl1-gold-7 {
    border-color: var(--color-cl1-gold-7);
  }
  .border-color {
    border-color: var(--color-color);
  }
  .border-destructive {
    border-color: var(--color-destructive);
  }
  .border-gray-200 {
    border-color: var(--color-gray-200);
  }
  .border-gray-300 {
    border-color: var(--color-gray-300);
  }
  .border-green-300 {
    border-color: var(--color-green-300);
  }
  .border-neutral-100\\! {
    border-color: var(--color-neutral-100) !important;
  }
  .border-neutral-200 {
    border-color: var(--color-neutral-200);
  }
  .border-neutral-200\\/60 {
    border-color: color-mix(in srgb, oklch(0.922 0 0) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-neutral-200) 60%, transparent);
    }
  }
  .border-neutral-200\\/70 {
    border-color: color-mix(in srgb, oklch(0.922 0 0) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-neutral-200) 70%, transparent);
    }
  }
  .border-neutral-300 {
    border-color: var(--color-neutral-300);
  }
  .border-neutral-400 {
    border-color: var(--color-neutral-400);
  }
  .border-neutral-500 {
    border-color: var(--color-neutral-500);
  }
  .border-neutral-600 {
    border-color: var(--color-neutral-600);
  }
  .border-neutral-900 {
    border-color: var(--color-neutral-900);
  }
  .border-orange-200 {
    border-color: var(--color-orange-200);
  }
  .border-red-200 {
    border-color: var(--color-red-200);
  }
  .border-red-300 {
    border-color: var(--color-red-300);
  }
  .border-red-400 {
    border-color: var(--color-red-400);
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-yellow-300 {
    border-color: var(--color-yellow-300);
  }
  .border-t-transparent {
    border-top-color: transparent;
  }
  .border-r-neutral-900 {
    border-right-color: var(--color-neutral-900);
  }
  .border-b-neutral-200 {
    border-bottom-color: var(--color-neutral-200);
  }
  .border-b-neutral-900 {
    border-bottom-color: var(--color-neutral-900);
  }
  .border-b-transparent\\! {
    border-bottom-color: transparent !important;
  }
  .border-l-neutral-200 {
    border-left-color: var(--color-neutral-200);
  }
  .\\!bg-\\[\\#f6821f1a\\] {
    background-color: #f6821f1a !important;
  }
  .\\!bg-blue-600 {
    background-color: var(--color-blue-600) !important;
  }
  .\\!bg-neutral-50 {
    background-color: var(--color-neutral-50) !important;
  }
  .\\!bg-neutral-100 {
    background-color: var(--color-neutral-100) !important;
  }
  .\\!bg-surface {
    background-color: var(--color-surface) !important;
  }
  .\\!bg-transparent {
    background-color: transparent !important;
  }
  .bg-\\[\\#f6821f\\] {
    background-color: #f6821f;
  }
  .bg-\\[\\#ffe693\\] {
    background-color: #ffe693;
  }
  .bg-\\[var\\(--color-accent\\)\\] {
    background-color: var(--color-accent);
  }
  .bg-accent {
    background-color: var(--color-accent);
  }
  .bg-amber-200 {
    background-color: var(--color-amber-200);
  }
  .bg-bg-primary {
    background-color: var(--color-bg-primary);
  }
  .bg-bg-secondary {
    background-color: var(--color-bg-secondary);
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/5 {
    background-color: color-mix(in srgb, #000 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 5%, transparent);
    }
  }
  .bg-black\\/30 {
    background-color: color-mix(in srgb, #000 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 30%, transparent);
    }
  }
  .bg-blue-50 {
    background-color: var(--color-blue-50);
  }
  .bg-blue-100 {
    background-color: var(--color-blue-100);
  }
  .bg-blue-200 {
    background-color: var(--color-blue-200);
  }
  .bg-blue-300 {
    background-color: var(--color-blue-300);
  }
  .bg-blue-400 {
    background-color: var(--color-blue-400);
  }
  .bg-blue-500 {
    background-color: var(--color-blue-500);
  }
  .bg-blue-600 {
    background-color: var(--color-blue-600);
  }
  .bg-cl1-gold-9 {
    background-color: var(--color-cl1-gold-9);
  }
  .bg-cl1-white {
    background-color: var(--color-cl1-white);
  }
  .bg-cyan-100 {
    background-color: var(--color-cyan-100);
  }
  .bg-destructive {
    background-color: var(--color-destructive);
  }
  .bg-gray-50 {
    background-color: var(--color-gray-50);
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-gray-300 {
    background-color: var(--color-gray-300);
  }
  .bg-gray-300\\/60 {
    background-color: color-mix(in srgb, oklch(87.2% 0.01 258.338) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-300) 60%, transparent);
    }
  }
  .bg-gray-500 {
    background-color: var(--color-gray-500);
  }
  .bg-green-50 {
    background-color: var(--color-green-50);
  }
  .bg-green-100 {
    background-color: var(--color-green-100);
  }
  .bg-green-200 {
    background-color: var(--color-green-200);
  }
  .bg-green-500 {
    background-color: var(--color-green-500);
  }
  .bg-green-600 {
    background-color: var(--color-green-600);
  }
  .bg-indigo-100 {
    background-color: var(--color-indigo-100);
  }
  .bg-inherit {
    background-color: inherit;
  }
  .bg-input {
    background-color: var(--color-input);
  }
  .bg-muted {
    background-color: var(--color-muted);
  }
  .bg-neutral-50 {
    background-color: var(--color-neutral-50);
  }
  .bg-neutral-50\\! {
    background-color: var(--color-neutral-50) !important;
  }
  .bg-neutral-100 {
    background-color: var(--color-neutral-100);
  }
  .bg-neutral-150 {
    background-color: var(--color-neutral-150);
  }
  .bg-neutral-200 {
    background-color: var(--color-neutral-200);
  }
  .bg-neutral-200\\/30 {
    background-color: color-mix(in srgb, oklch(0.922 0 0) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-neutral-200) 30%, transparent);
    }
  }
  .bg-neutral-250 {
    background-color: var(--color-neutral-250);
  }
  .bg-neutral-900 {
    background-color: var(--color-neutral-900);
  }
  .bg-ob-base-1000 {
    background-color: var(--color-ob-base-1000);
  }
  .bg-orange-200 {
    background-color: var(--color-orange-200);
  }
  .bg-primary {
    background-color: var(--color-primary);
  }
  .bg-purple-200 {
    background-color: var(--color-purple-200);
  }
  .bg-red-50 {
    background-color: var(--color-red-50);
  }
  .bg-red-50\\! {
    background-color: var(--color-red-50) !important;
  }
  .bg-red-100 {
    background-color: var(--color-red-100);
  }
  .bg-red-200 {
    background-color: var(--color-red-200);
  }
  .bg-red-400 {
    background-color: var(--color-red-400);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-secondary {
    background-color: var(--color-secondary);
  }
  .bg-surface {
    background-color: var(--color-surface);
  }
  .bg-surface-active {
    background-color: var(--color-surface-active);
  }
  .bg-surface-secondary {
    background-color: var(--color-surface-secondary);
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-yellow-50 {
    background-color: var(--color-yellow-50);
  }
  .bg-yellow-200 {
    background-color: var(--color-yellow-200);
  }
  .bg-yellow-300 {
    background-color: var(--color-yellow-300);
  }
  .bg-yellow-500 {
    background-color: var(--color-yellow-500);
  }
  .bg-gradient-to-b {
    --tw-gradient-position: to bottom in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .bg-gradient-to-br {
    --tw-gradient-position: to bottom right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .bg-gradient-to-r {
    --tw-gradient-position: to right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .from-blue-50 {
    --tw-gradient-from: var(--color-blue-50);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .from-neutral-50 {
    --tw-gradient-from: var(--color-neutral-50);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .from-transparent {
    --tw-gradient-from: transparent;
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-indigo-50 {
    --tw-gradient-to: var(--color-indigo-50);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-neutral-100 {
    --tw-gradient-to: var(--color-neutral-100);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-white {
    --tw-gradient-to: var(--color-white);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-40\\% {
    --tw-gradient-to-position: 40%;
  }
  .stroke-border {
    stroke: var(--color-border);
  }
  .stroke-red-500 {
    stroke: var(--color-red-500);
  }
  .stroke-red-500\\! {
    stroke: var(--color-red-500) !important;
  }
  .stroke-1 {
    stroke-width: 1;
  }
  .\\!p-0 {
    padding: calc(var(--spacing) * 0) !important;
  }
  .\\!p-1 {
    padding: calc(var(--spacing) * 1) !important;
  }
  .\\!p-3 {
    padding: calc(var(--spacing) * 3) !important;
  }
  .\\!p-4 {
    padding: calc(var(--spacing) * 4) !important;
  }
  .\\!p-5 {
    padding: calc(var(--spacing) * 5) !important;
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-1\\.5 {
    padding: calc(var(--spacing) * 1.5);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-2\\.5 {
    padding: calc(var(--spacing) * 2.5);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .p-10 {
    padding: calc(var(--spacing) * 10);
  }
  .p-12 {
    padding: calc(var(--spacing) * 12);
  }
  .\\!px-0 {
    padding-inline: calc(var(--spacing) * 0) !important;
  }
  .\\!px-0\\.5 {
    padding-inline: calc(var(--spacing) * 0.5) !important;
  }
  .\\!px-2 {
    padding-inline: calc(var(--spacing) * 2) !important;
  }
  .\\!px-3 {
    padding-inline: calc(var(--spacing) * 3) !important;
  }
  .\\!px-5 {
    padding-inline: calc(var(--spacing) * 5) !important;
  }
  .px-0 {
    padding-inline: calc(var(--spacing) * 0);
  }
  .px-0\\! {
    padding-inline: calc(var(--spacing) * 0) !important;
  }
  .px-0\\.5 {
    padding-inline: calc(var(--spacing) * 0.5);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-5 {
    padding-inline: calc(var(--spacing) * 5);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .px-8 {
    padding-inline: calc(var(--spacing) * 8);
  }
  .px-10 {
    padding-inline: calc(var(--spacing) * 10);
  }
  .\\!py-1 {
    padding-block: calc(var(--spacing) * 1) !important;
  }
  .\\!py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5) !important;
  }
  .\\!py-2 {
    padding-block: calc(var(--spacing) * 2) !important;
  }
  .\\!py-3 {
    padding-block: calc(var(--spacing) * 3) !important;
  }
  .\\!py-4 {
    padding-block: calc(var(--spacing) * 4) !important;
  }
  .py-0 {
    padding-block: calc(var(--spacing) * 0);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-3\\.5 {
    padding-block: calc(var(--spacing) * 3.5);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-4\\! {
    padding-block: calc(var(--spacing) * 4) !important;
  }
  .py-5 {
    padding-block: calc(var(--spacing) * 5);
  }
  .py-6 {
    padding-block: calc(var(--spacing) * 6);
  }
  .py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
  .py-12 {
    padding-block: calc(var(--spacing) * 12);
  }
  .py-16 {
    padding-block: calc(var(--spacing) * 16);
  }
  .py-\\[11px\\] {
    padding-block: 11px;
  }
  .pt-3 {
    padding-top: calc(var(--spacing) * 3);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pt-10 {
    padding-top: calc(var(--spacing) * 10);
  }
  .pt-12 {
    padding-top: calc(var(--spacing) * 12);
  }
  .\\!pr-1 {
    padding-right: calc(var(--spacing) * 1) !important;
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pr-3 {
    padding-right: calc(var(--spacing) * 3);
  }
  .pr-4 {
    padding-right: calc(var(--spacing) * 4);
  }
  .pr-6 {
    padding-right: calc(var(--spacing) * 6);
  }
  .pr-8 {
    padding-right: calc(var(--spacing) * 8);
  }
  .pr-12 {
    padding-right: calc(var(--spacing) * 12);
  }
  .pr-\\[14px\\] {
    padding-right: 14px;
  }
  .\\!pb-1 {
    padding-bottom: calc(var(--spacing) * 1) !important;
  }
  .\\!pb-2 {
    padding-bottom: calc(var(--spacing) * 2) !important;
  }
  .\\!pb-3 {
    padding-bottom: calc(var(--spacing) * 3) !important;
  }
  .pb-0\\.5 {
    padding-bottom: calc(var(--spacing) * 0.5);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pb-3 {
    padding-bottom: calc(var(--spacing) * 3);
  }
  .pb-4 {
    padding-bottom: calc(var(--spacing) * 4);
  }
  .pb-10 {
    padding-bottom: calc(var(--spacing) * 10);
  }
  .pb-\\[68px\\] {
    padding-bottom: 68px;
  }
  .\\!pl-0 {
    padding-left: calc(var(--spacing) * 0) !important;
  }
  .\\!pl-1 {
    padding-left: calc(var(--spacing) * 1) !important;
  }
  .\\!pl-2 {
    padding-left: calc(var(--spacing) * 2) !important;
  }
  .\\!pl-5 {
    padding-left: calc(var(--spacing) * 5) !important;
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-2\\.5 {
    padding-left: calc(var(--spacing) * 2.5);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-4 {
    padding-left: calc(var(--spacing) * 4);
  }
  .pl-5 {
    padding-left: calc(var(--spacing) * 5);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .pl-8 {
    padding-left: calc(var(--spacing) * 8);
  }
  .pl-\\[1px\\] {
    padding-left: 1px;
  }
  .pl-\\[86px\\] {
    padding-left: 86px;
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .align-middle {
    vertical-align: middle;
  }
  .\\!font-mono {
    font-family: var(--font-mono) !important;
  }
  .\\!font-sans {
    font-family: var(--font-sans) !important;
  }
  .font-mono {
    font-family: var(--font-mono);
  }
  .font-mono\\! {
    font-family: var(--font-mono) !important;
  }
  .font-sans {
    font-family: var(--font-sans);
  }
  .\\!text-base {
    font-size: var(--text-base) !important;
    line-height: var(--tw-leading, var(--text-base--line-height)) !important;
  }
  .\\!text-lg {
    font-size: var(--text-lg) !important;
    line-height: var(--tw-leading, var(--text-lg--line-height)) !important;
  }
  .\\!text-sm {
    font-size: var(--text-sm) !important;
    line-height: var(--tw-leading, var(--text-sm--line-height)) !important;
  }
  .\\!text-xl {
    font-size: var(--text-xl) !important;
    line-height: var(--tw-leading, var(--text-xl--line-height)) !important;
  }
  .\\!text-xs {
    font-size: var(--text-xs) !important;
    line-height: var(--tw-leading, var(--text-xs--line-height)) !important;
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-base\\/tight {
    font-size: var(--text-base);
    line-height: var(--leading-tight);
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-sm\\! {
    font-size: var(--text-sm) !important;
    line-height: var(--tw-leading, var(--text-sm--line-height)) !important;
  }
  .text-sm\\/normal {
    font-size: var(--text-sm);
    line-height: var(--leading-normal);
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .\\!text-\\[16px\\] {
    font-size: 16px !important;
  }
  .text-\\[0\\.85rem\\] {
    font-size: 0.85rem;
  }
  .text-\\[8px\\] {
    font-size: 8px;
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .text-\\[12px\\] {
    font-size: 12px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .leading-0 {
    --tw-leading: calc(var(--spacing) * 0);
    line-height: calc(var(--spacing) * 0);
  }
  .leading-\\[20px\\] {
    --tw-leading: 20px;
    line-height: 20px;
  }
  .leading-\\[35px\\] {
    --tw-leading: 35px;
    line-height: 35px;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-snug {
    --tw-leading: var(--leading-snug);
    line-height: var(--leading-snug);
  }
  .\\!font-bold {
    --tw-font-weight: var(--font-weight-bold) !important;
    font-weight: var(--font-weight-bold) !important;
  }
  .\\!font-medium {
    --tw-font-weight: var(--font-weight-medium) !important;
    font-weight: var(--font-weight-medium) !important;
  }
  .\\!font-semibold {
    --tw-font-weight: var(--font-weight-semibold) !important;
    font-weight: var(--font-weight-semibold) !important;
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-normal {
    --tw-font-weight: var(--font-weight-normal);
    font-weight: var(--font-weight-normal);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-normal {
    --tw-tracking: var(--tracking-normal);
    letter-spacing: var(--tracking-normal);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .tracking-widest {
    --tw-tracking: var(--tracking-widest);
    letter-spacing: var(--tracking-widest);
  }
  .text-nowrap {
    text-wrap: nowrap;
  }
  .text-wrap {
    text-wrap: wrap;
  }
  .break-all {
    word-break: break-all;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }
  .text-ellipsis {
    text-overflow: ellipsis;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .\\!text-black {
    color: var(--color-black) !important;
  }
  .\\!text-blue-500 {
    color: var(--color-blue-500) !important;
  }
  .\\!text-error {
    color: var(--text-color-error) !important;
  }
  .\\!text-gray-500 {
    color: var(--color-gray-500) !important;
  }
  .\\!text-inherit {
    color: inherit !important;
  }
  .\\!text-neutral-900 {
    color: var(--color-neutral-900) !important;
  }
  .\\!text-yellow-600 {
    color: var(--color-yellow-600) !important;
  }
  .text-\\[\\#4a4a4a\\] {
    color: #4a4a4a;
  }
  .text-\\[\\#f6821f\\] {
    color: #f6821f;
  }
  .text-\\[var\\(--light\\)\\] {
    color: var(--light);
  }
  .text-black {
    color: var(--color-black);
  }
  .text-blue-500 {
    color: var(--color-blue-500);
  }
  .text-blue-600 {
    color: var(--color-blue-600);
  }
  .text-blue-700 {
    color: var(--color-blue-700);
  }
  .text-blue-800 {
    color: var(--color-blue-800);
  }
  .text-blue-900 {
    color: var(--color-blue-900);
  }
  .text-border {
    color: var(--color-border);
  }
  .text-cl1-gray-2 {
    color: var(--color-cl1-gray-2);
  }
  .text-cl1-gray-4 {
    color: var(--color-cl1-gray-4);
  }
  .text-cl1-gray-5 {
    color: var(--color-cl1-gray-5);
  }
  .text-cyan-800 {
    color: var(--color-cyan-800);
  }
  .text-destructive {
    color: var(--text-color-destructive);
  }
  .text-emerald-500 {
    color: var(--color-emerald-500);
  }
  .text-error {
    color: var(--text-color-error);
  }
  .text-fuchsia-500 {
    color: var(--color-fuchsia-500);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-gray-600 {
    color: var(--color-gray-600);
  }
  .text-gray-700 {
    color: var(--color-gray-700);
  }
  .text-gray-800 {
    color: var(--color-gray-800);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-green-600 {
    color: var(--color-green-600);
  }
  .text-green-700 {
    color: var(--color-green-700);
  }
  .text-green-800 {
    color: var(--color-green-800);
  }
  .text-indigo-500 {
    color: var(--color-indigo-500);
  }
  .text-indigo-600 {
    color: var(--color-indigo-600);
  }
  .text-indigo-700 {
    color: var(--color-indigo-700);
  }
  .text-inherit {
    color: inherit;
  }
  .text-muted {
    color: var(--text-color-muted);
  }
  .text-neutral-100 {
    color: var(--color-neutral-100);
  }
  .text-neutral-200 {
    color: var(--color-neutral-200);
  }
  .text-neutral-300 {
    color: var(--color-neutral-300);
  }
  .text-neutral-400 {
    color: var(--color-neutral-400);
  }
  .text-neutral-500 {
    color: var(--color-neutral-500);
  }
  .text-neutral-600 {
    color: var(--color-neutral-600);
  }
  .text-neutral-700 {
    color: var(--color-neutral-700);
  }
  .text-neutral-800 {
    color: var(--color-neutral-800);
  }
  .text-neutral-900 {
    color: var(--color-neutral-900);
  }
  .text-neutral-900\\! {
    color: var(--color-neutral-900) !important;
  }
  .text-neutral-950 {
    color: var(--color-neutral-950);
  }
  .text-ob-inverted {
    color: var(--text-color-ob-inverted);
  }
  .text-orange-600 {
    color: var(--color-orange-600);
  }
  .text-orange-800 {
    color: var(--color-orange-800);
  }
  .text-primary {
    color: var(--text-color-primary);
  }
  .text-purple-800 {
    color: var(--color-purple-800);
  }
  .text-red-300 {
    color: var(--color-red-300);
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-red-600 {
    color: var(--color-red-600);
  }
  .text-red-700 {
    color: var(--color-red-700);
  }
  .text-red-800 {
    color: var(--color-red-800);
  }
  .text-rose-500 {
    color: var(--color-rose-500);
  }
  .text-secondary {
    color: var(--text-color-secondary);
  }
  .text-sky-500 {
    color: var(--color-sky-500);
  }
  .text-surface {
    color: var(--text-color-surface);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-yellow-500 {
    color: var(--color-yellow-500);
  }
  .text-yellow-600 {
    color: var(--color-yellow-600);
  }
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .\\!no-underline {
    text-decoration-line: none !important;
  }
  .line-through {
    text-decoration-line: line-through;
  }
  .underline {
    text-decoration-line: underline;
  }
  .decoration-neutral-400 {
    text-decoration-color: var(--color-neutral-400);
  }
  .decoration-dotted {
    text-decoration-style: dotted;
  }
  .underline-offset-2 {
    text-underline-offset: 2px;
  }
  .underline-offset-4 {
    text-underline-offset: 4px;
  }
  .antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-25 {
    opacity: 25%;
  }
  .opacity-40 {
    opacity: 40%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-60 {
    opacity: 60%;
  }
  .opacity-75 {
    opacity: 75%;
  }
  .opacity-80 {
    opacity: 80%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .\\!shadow-none {
    --tw-shadow: 0 0 #0000 !important;
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow) !important;
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\\[0_0_0_1px_rgba\\(0\\,0\\,0\\,0\\.5\\)_inset\\] {
    --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(0,0,0,0.5)) inset;
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-none {
    --tw-shadow: 0 0 #0000;
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xs {
    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-2 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-blue-200 {
    --tw-ring-color: var(--color-blue-200);
  }
  .ring-green-300 {
    --tw-ring-color: var(--color-green-300);
  }
  .ring-indigo-200 {
    --tw-ring-color: var(--color-indigo-200);
  }
  .ring-neutral-950\\/10 {
    --tw-ring-color: color-mix(in srgb, oklch(0.145 0 0) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);
    }
  }
  .ring-neutral-950\\/15 {
    --tw-ring-color: color-mix(in srgb, oklch(0.145 0 0) 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 15%, transparent);
    }
  }
  .ring-red-200 {
    --tw-ring-color: var(--color-red-200);
  }
  .ring-offset-0 {
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  }
  .outline-hidden {
    --tw-outline-style: none;
    outline-style: none;
    @media (forced-colors: active) {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .outline-1 {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .-outline-offset-1 {
    outline-offset: calc(1px * -1);
  }
  .outline-color {
    outline-color: var(--color-color);
  }
  .outline-neutral-300 {
    outline-color: var(--color-neutral-300);
  }
  .blur {
    --tw-blur: blur(8px);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .grayscale {
    --tw-grayscale: grayscale(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .invert {
    --tw-invert: invert(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .\\!filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,) !important;
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-\\[2px\\] {
    --tw-backdrop-blur: blur(2px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-blur-md {
    --tw-backdrop-blur: blur(var(--blur-md));
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .\\!transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events !important;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function)) !important;
    transition-duration: var(--tw-duration, var(--default-transition-duration)) !important;
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-shadow {
    transition-property: box-shadow;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .delay-200 {
    transition-delay: 200ms;
  }
  .duration-150 {
    --tw-duration: 150ms;
    transition-duration: 150ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
  .select-all {
    -webkit-user-select: all;
    user-select: all;
  }
  .select-none {
    -webkit-user-select: none;
    user-select: none;
  }
  .not-first\\:rounded-t-none {
    &:not(*:first-child) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  .not-last\\:rounded-b-none {
    &:not(*:last-child) {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  .group-first\\:rounded-l-full {
    &:is(:where(.group):first-child *) {
      border-top-left-radius: calc(infinity * 1px);
      border-bottom-left-radius: calc(infinity * 1px);
    }
  }
  .group-last\\:rounded-r-full {
    &:is(:where(.group):last-child *) {
      border-top-right-radius: calc(infinity * 1px);
      border-bottom-right-radius: calc(infinity * 1px);
    }
  }
  .group-hover\\:block {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        display: block;
      }
    }
  }
  .group-hover\\:text-\\[\\#f6821f\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        color: #f6821f;
      }
    }
  }
  .group-hover\\:underline {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        text-decoration-line: underline;
      }
    }
  }
  .group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .group-data-\\[focused\\]\\:bg-secondary-hover {
    &:is(:where(.group)[data-focused] *) {
      background-color: var(--color-secondary-hover);
    }
  }
  .group-data-\\[invalid\\]\\:ring-\\[var\\(--text-color-error\\)\\] {
    &:is(:where(.group)[data-invalid] *) {
      --tw-ring-color: var(--text-color-error);
    }
  }
  .group-data-\\[selected\\]\\:opacity-100 {
    &:is(:where(.group)[data-selected] *) {
      opacity: 100%;
    }
  }
  .placeholder\\:text-base {
    &::placeholder {
      font-size: var(--text-base);
      line-height: var(--tw-leading, var(--text-base--line-height));
    }
  }
  .placeholder\\:\\!text-neutral-400 {
    &::placeholder {
      color: var(--color-neutral-400) !important;
    }
  }
  .placeholder\\:text-muted {
    &::placeholder {
      color: var(--text-color-muted);
    }
  }
  .placeholder\\:text-neutral-400 {
    &::placeholder {
      color: var(--color-neutral-400);
    }
  }
  .first\\:mt-1 {
    &:first-child {
      margin-top: calc(var(--spacing) * 1);
    }
  }
  .first\\:pl-2 {
    &:first-child {
      padding-left: calc(var(--spacing) * 2);
    }
  }
  .first\\:pl-4 {
    &:first-child {
      padding-left: calc(var(--spacing) * 4);
    }
  }
  .last\\:mb-1 {
    &:last-child {
      margin-bottom: calc(var(--spacing) * 1);
    }
  }
  .last\\:pr-2 {
    &:last-child {
      padding-right: calc(var(--spacing) * 2);
    }
  }
  .focus-within\\:border-gray-400 {
    &:focus-within {
      border-color: var(--color-gray-400);
    }
  }
  .focus-within\\:border-primary\\! {
    &:focus-within {
      border-color: var(--color-primary) !important;
    }
  }
  .focus-within\\:shadow-sm {
    &:focus-within {
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-within\\:ring-2 {
    &:focus-within {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-within\\:ring-primary {
    &:focus-within {
      --tw-ring-color: var(--color-primary);
    }
  }
  .focus-within\\:ring-offset-2 {
    &:focus-within {
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }
  }
  .focus-within\\:ring-offset-input {
    &:focus-within {
      --tw-ring-offset-color: var(--color-input);
    }
  }
  .focus-within\\:outline-2 {
    &:focus-within {
      outline-style: var(--tw-outline-style);
      outline-width: 2px;
    }
  }
  .focus-within\\:-outline-offset-2 {
    &:focus-within {
      outline-offset: calc(2px * -1);
    }
  }
  .focus-within\\:outline-blue-700 {
    &:focus-within {
      outline-color: var(--color-blue-700);
    }
  }
  .focus-within\\:outline-indigo-600 {
    &:focus-within {
      outline-color: var(--color-indigo-600);
    }
  }
  .hover\\:-translate-y-0\\.5 {
    &:hover {
      @media (hover: hover) {
        --tw-translate-y: calc(var(--spacing) * -0.5);
        translate: var(--tw-translate-x) var(--tw-translate-y);
      }
    }
  }
  .hover\\:cursor-pointer {
    &:hover {
      @media (hover: hover) {
        cursor: pointer;
      }
    }
  }
  .hover\\:border-active {
    &:hover {
      @media (hover: hover) {
        border-color: var(--color-active);
      }
    }
  }
  .hover\\:border-neutral-300\\/80 {
    &:hover {
      @media (hover: hover) {
        border-color: color-mix(in srgb, oklch(0.87 0 0) 80%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          border-color: color-mix(in oklab, var(--color-neutral-300) 80%, transparent);
        }
      }
    }
  }
  .hover\\:\\!bg-blue-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-700) !important;
      }
    }
  }
  .hover\\:\\!bg-neutral-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-100) !important;
      }
    }
  }
  .hover\\:bg-accent {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-accent);
      }
    }
  }
  .hover\\:bg-blue-300 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-300);
      }
    }
  }
  .hover\\:bg-blue-500 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-500);
      }
    }
  }
  .hover\\:bg-destructive\\/70 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-destructive);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-destructive) 70%, transparent);
        }
      }
    }
  }
  .hover\\:bg-gray-50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-50);
      }
    }
  }
  .hover\\:bg-gray-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-100);
      }
    }
  }
  .hover\\:bg-neutral-50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-50);
      }
    }
  }
  .hover\\:bg-neutral-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-100);
      }
    }
  }
  .hover\\:bg-neutral-300 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-300);
      }
    }
  }
  .hover\\:bg-neutral-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-700);
      }
    }
  }
  .hover\\:bg-primary\\/70 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-primary);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-primary) 70%, transparent);
        }
      }
    }
  }
  .hover\\:bg-secondary-hover {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-secondary-hover);
      }
    }
  }
  .hover\\:bg-transparent {
    &:hover {
      @media (hover: hover) {
        background-color: transparent;
      }
    }
  }
  .hover\\:bg-white {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-white);
      }
    }
  }
  .hover\\:text-black {
    &:hover {
      @media (hover: hover) {
        color: var(--color-black);
      }
    }
  }
  .hover\\:text-blue-800 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-blue-800);
      }
    }
  }
  .hover\\:text-red-500 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-red-500);
      }
    }
  }
  .hover\\:text-red-600 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-red-600);
      }
    }
  }
  .hover\\:opacity-50 {
    &:hover {
      @media (hover: hover) {
        opacity: 50%;
      }
    }
  }
  .hover\\:opacity-60 {
    &:hover {
      @media (hover: hover) {
        opacity: 60%;
      }
    }
  }
  .hover\\:opacity-70 {
    &:hover {
      @media (hover: hover) {
        opacity: 70%;
      }
    }
  }
  .hover\\:opacity-90 {
    &:hover {
      @media (hover: hover) {
        opacity: 90%;
      }
    }
  }
  .hover\\:opacity-100 {
    &:hover {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .hover\\:shadow-md {
    &:hover {
      @media (hover: hover) {
        --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      }
    }
  }
  .hover\\:shadow-xs {
    &:hover {
      @media (hover: hover) {
        --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      }
    }
  }
  .not-disabled\\:hover\\:border-border-hover\\! {
    &:not(*:disabled) {
      &:hover {
        @media (hover: hover) {
          border-color: var(--color-border-hover) !important;
        }
      }
    }
  }
  .not-disabled\\:hover\\:bg-secondary-hover {
    &:not(*:disabled) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-secondary-hover);
        }
      }
    }
  }
  .focus\\:z-10 {
    &:focus {
      z-index: 10;
    }
  }
  .focus\\:border-active {
    &:focus {
      border-color: var(--color-active);
    }
  }
  .focus\\:border-color {
    &:focus {
      border-color: var(--color-color);
    }
  }
  .focus\\:border-destructive {
    &:focus {
      border-color: var(--color-destructive);
    }
  }
  .focus\\:bg-accent {
    &:focus {
      background-color: var(--color-accent);
    }
  }
  .focus\\:text-secondary {
    &:focus {
      color: var(--text-color-secondary);
    }
  }
  .focus\\:opacity-100 {
    &:focus {
      opacity: 100%;
    }
  }
  .focus\\:ring-2 {
    &:focus {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus\\:ring-blue-400 {
    &:focus {
      --tw-ring-color: var(--color-blue-400);
    }
  }
  .focus\\:ring-neutral-400 {
    &:focus {
      --tw-ring-color: var(--color-neutral-400);
    }
  }
  .focus\\:outline-none {
    &:focus {
      --tw-outline-style: none;
      outline-style: none;
    }
  }
  .focus-visible\\:z-10 {
    &:focus-visible {
      z-index: 10;
    }
  }
  .focus-visible\\:bg-blue-50 {
    &:focus-visible {
      background-color: var(--color-blue-50);
    }
  }
  .focus-visible\\:ring {
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-visible\\:ring-1 {
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-visible\\:inset-ring-\\[0\\.5\\] {
    &:focus-visible {
      --tw-inset-ring-color: 0.5;
    }
  }
  .focus-visible\\:outline-hidden {
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
      @media (forced-colors: active) {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
    }
  }
  .focus-visible\\:outline-none {
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
    }
  }
  .disabled\\:cursor-not-allowed {
    &:disabled {
      cursor: not-allowed;
    }
  }
  .disabled\\:border-neutral-400 {
    &:disabled {
      border-color: var(--color-neutral-400);
    }
  }
  .disabled\\:bg-neutral-100 {
    &:disabled {
      background-color: var(--color-neutral-100);
    }
  }
  .disabled\\:bg-neutral-300 {
    &:disabled {
      background-color: var(--color-neutral-300);
    }
  }
  .disabled\\:\\!text-neutral-400 {
    &:disabled {
      color: var(--color-neutral-400) !important;
    }
  }
  .disabled\\:text-muted {
    &:disabled {
      color: var(--text-color-muted);
    }
  }
  .disabled\\:opacity-50 {
    &:disabled {
      opacity: 50%;
    }
  }
  .disabled\\:hover\\:bg-neutral-100 {
    &:disabled {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-100);
        }
      }
    }
  }
  .\\*\\:in-focus\\:opacity-100 {
    :is(& > *) {
      :where(*:focus) & {
        opacity: 100%;
      }
    }
  }
  .data-disabled\\:pointer-events-none {
    &[data-disabled] {
      pointer-events: none;
    }
  }
  .data-disabled\\:opacity-50 {
    &[data-disabled] {
      opacity: 50%;
    }
  }
  .data-\\[ending-style\\]\\:scale-90 {
    &[data-ending-style] {
      --tw-scale-x: 90%;
      --tw-scale-y: 90%;
      --tw-scale-z: 90%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }
  }
  .data-\\[ending-style\\]\\:opacity-0 {
    &[data-ending-style] {
      opacity: 0%;
    }
  }
  .data-\\[focused\\]\\:bg-secondary-hover {
    &[data-focused] {
      background-color: var(--color-secondary-hover);
    }
  }
  .data-\\[starting-style\\]\\:scale-90 {
    &[data-starting-style] {
      --tw-scale-x: 90%;
      --tw-scale-y: 90%;
      --tw-scale-z: 90%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }
  }
  .data-\\[starting-style\\]\\:opacity-0 {
    &[data-starting-style] {
      opacity: 0%;
    }
  }
  .data-\\[state\\=open\\]\\:bg-accent {
    &[data-state="open"] {
      background-color: var(--color-accent);
    }
  }
  .sm\\:block {
    @media (width >= 40rem) {
      display: block;
    }
  }
  .sm\\:flex {
    @media (width >= 40rem) {
      display: flex;
    }
  }
  .sm\\:inline {
    @media (width >= 40rem) {
      display: inline;
    }
  }
  .sm\\:w-auto {
    @media (width >= 40rem) {
      width: auto;
    }
  }
  .sm\\:max-w-\\[280px\\] {
    @media (width >= 40rem) {
      max-width: 280px;
    }
  }
  .sm\\:grid-cols-4 {
    @media (width >= 40rem) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .sm\\:justify-start {
    @media (width >= 40rem) {
      justify-content: flex-start;
    }
  }
  .sm\\:gap-0 {
    @media (width >= 40rem) {
      gap: calc(var(--spacing) * 0);
    }
  }
  .sm\\:px-3 {
    @media (width >= 40rem) {
      padding-inline: calc(var(--spacing) * 3);
    }
  }
  .sm\\:py-1\\.5 {
    @media (width >= 40rem) {
      padding-block: calc(var(--spacing) * 1.5);
    }
  }
  .sm\\:text-base {
    @media (width >= 40rem) {
      font-size: var(--text-base);
      line-height: var(--tw-leading, var(--text-base--line-height));
    }
  }
  .sm\\:text-sm\\/6 {
    @media (width >= 40rem) {
      font-size: var(--text-sm);
      line-height: calc(var(--spacing) * 6);
    }
  }
  .md\\:\\!flex {
    @media (width >= 48rem) {
      display: flex !important;
    }
  }
  .md\\:block {
    @media (width >= 48rem) {
      display: block;
    }
  }
  .md\\:flex {
    @media (width >= 48rem) {
      display: flex;
    }
  }
  .md\\:grid {
    @media (width >= 48rem) {
      display: grid;
    }
  }
  .md\\:max-w-\\[70vw\\] {
    @media (width >= 48rem) {
      max-width: 70vw;
    }
  }
  .md\\:grid-cols-2 {
    @media (width >= 48rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .md\\:grid-cols-4 {
    @media (width >= 48rem) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .md\\:items-center {
    @media (width >= 48rem) {
      align-items: center;
    }
  }
  .md\\:justify-between {
    @media (width >= 48rem) {
      justify-content: space-between;
    }
  }
  .md\\:gap-4 {
    @media (width >= 48rem) {
      gap: calc(var(--spacing) * 4);
    }
  }
  .md\\:space-y-8 {
    @media (width >= 48rem) {
      :where(& > :not(:last-child)) {
        --tw-space-y-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));
        margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));
      }
    }
  }
  .md\\:gap-x-4 {
    @media (width >= 48rem) {
      column-gap: calc(var(--spacing) * 4);
    }
  }
  .md\\:p-8 {
    @media (width >= 48rem) {
      padding: calc(var(--spacing) * 8);
    }
  }
  .md\\:text-2xl {
    @media (width >= 48rem) {
      font-size: var(--text-2xl);
      line-height: var(--tw-leading, var(--text-2xl--line-height));
    }
  }
  .lg\\:block {
    @media (width >= 64rem) {
      display: block;
    }
  }
  .lg\\:max-w-\\[50vw\\] {
    @media (width >= 64rem) {
      max-width: 50vw;
    }
  }
  .lg\\:rounded-xl {
    @media (width >= 64rem) {
      border-radius: var(--radius-xl);
    }
  }
  .lg\\:border {
    @media (width >= 64rem) {
      border-style: var(--tw-border-style);
      border-width: 1px;
    }
  }
  .lg\\:border-neutral-950\\/10 {
    @media (width >= 64rem) {
      border-color: color-mix(in srgb, oklch(0.145 0 0) 10%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        border-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);
      }
    }
  }
  .lg\\:px-10 {
    @media (width >= 64rem) {
      padding-inline: calc(var(--spacing) * 10);
    }
  }
  .lg\\:py-9 {
    @media (width >= 64rem) {
      padding-block: calc(var(--spacing) * 9);
    }
  }
  .lg\\:ring {
    @media (width >= 64rem) {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .lg\\:ring-neutral-950\\/10 {
    @media (width >= 64rem) {
      --tw-ring-color: color-mix(in srgb, oklch(0.145 0 0) 10%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);
      }
    }
  }
  .xl\\:sticky {
    @media (width >= 80rem) {
      position: sticky;
    }
  }
  .xl\\:block {
    @media (width >= 80rem) {
      display: block;
    }
  }
  .xl\\:flex {
    @media (width >= 80rem) {
      display: flex;
    }
  }
  .xl\\:hidden {
    @media (width >= 80rem) {
      display: none;
    }
  }
  .xl\\:w-\\[380px\\] {
    @media (width >= 80rem) {
      width: 380px;
    }
  }
  .xl\\:grid-cols-1 {
    @media (width >= 80rem) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
  .xl\\:grid-cols-2 {
    @media (width >= 80rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .xl\\:flex-row {
    @media (width >= 80rem) {
      flex-direction: row;
    }
  }
  .xl\\:gap-6 {
    @media (width >= 80rem) {
      gap: calc(var(--spacing) * 6);
    }
  }
  .xl\\:gap-8 {
    @media (width >= 80rem) {
      gap: calc(var(--spacing) * 8);
    }
  }
  .dark\\:divide-border {
    &:where(.dark-mode, .dark-mode *) {
      :where(& > :not(:last-child)) {
        border-color: var(--color-border);
      }
    }
  }
  .dark\\:divide-gray-600 {
    &:where(.dark-mode, .dark-mode *) {
      :where(& > :not(:last-child)) {
        border-color: var(--color-gray-600);
      }
    }
  }
  .dark\\:divide-gray-700 {
    &:where(.dark-mode, .dark-mode *) {
      :where(& > :not(:last-child)) {
        border-color: var(--color-gray-700);
      }
    }
  }
  .dark\\:divide-neutral-600 {
    &:where(.dark-mode, .dark-mode *) {
      :where(& > :not(:last-child)) {
        border-color: var(--color-neutral-600);
      }
    }
  }
  .dark\\:border-1 {
    &:where(.dark-mode, .dark-mode *) {
      border-style: var(--tw-border-style);
      border-width: 1px;
    }
  }
  .dark\\:\\!border-neutral-600 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-600) !important;
    }
  }
  .dark\\:\\!border-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-800) !important;
    }
  }
  .dark\\:border-blue-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-blue-500);
    }
  }
  .dark\\:border-blue-800 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-blue-800);
    }
  }
  .dark\\:border-gray-600 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-gray-600);
    }
  }
  .dark\\:border-gray-700 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-gray-700);
    }
  }
  .dark\\:border-green-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-green-500);
    }
  }
  .dark\\:border-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-100);
    }
  }
  .dark\\:border-neutral-400 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-400);
    }
  }
  .dark\\:border-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-500);
    }
  }
  .dark\\:border-neutral-600 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-600);
    }
  }
  .dark\\:border-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-700);
    }
  }
  .dark\\:border-neutral-700\\/60 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: color-mix(in srgb, oklch(0.371 0 0) 60%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        border-color: color-mix(in oklab, var(--color-neutral-700) 60%, transparent);
      }
    }
  }
  .dark\\:border-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-800);
    }
  }
  .dark\\:border-neutral-800\\! {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-800) !important;
    }
  }
  .dark\\:border-neutral-800\\/60 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: color-mix(in srgb, oklch(0.269 0 0) 60%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        border-color: color-mix(in oklab, var(--color-neutral-800) 60%, transparent);
      }
    }
  }
  .dark\\:border-red-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-red-500);
    }
  }
  .dark\\:border-red-700 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-red-700);
    }
  }
  .dark\\:border-red-800 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-red-800);
    }
  }
  .dark\\:border-yellow-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-yellow-500);
    }
  }
  .dark\\:border-r-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      border-right-color: var(--color-neutral-100);
    }
  }
  .dark\\:border-b-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      border-bottom-color: var(--color-neutral-100);
    }
  }
  .dark\\:border-b-neutral-600 {
    &:where(.dark-mode, .dark-mode *) {
      border-bottom-color: var(--color-neutral-600);
    }
  }
  .dark\\:border-l-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      border-left-color: var(--color-neutral-700);
    }
  }
  .dark\\:\\!bg-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-700) !important;
    }
  }
  .dark\\:\\!bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-800) !important;
    }
  }
  .dark\\:\\!bg-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-900) !important;
    }
  }
  .dark\\:\\!bg-neutral-950 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-950) !important;
    }
  }
  .dark\\:bg-\\[\\#916b20\\] {
    &:where(.dark-mode, .dark-mode *) {
      background-color: #916b20;
    }
  }
  .dark\\:bg-black {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-black);
    }
  }
  .dark\\:bg-blue-700 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-blue-700);
    }
  }
  .dark\\:bg-blue-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-blue-800);
    }
  }
  .dark\\:bg-blue-800\\/30 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(0.424 0.199 265.638) 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-blue-800) 30%, transparent);
      }
    }
  }
  .dark\\:bg-blue-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-blue-900);
    }
  }
  .dark\\:bg-blue-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-blue-900) 20%, transparent);
      }
    }
  }
  .dark\\:bg-gray-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-gray-800);
    }
  }
  .dark\\:bg-gray-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-gray-900);
    }
  }
  .dark\\:bg-green-700 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-green-700);
    }
  }
  .dark\\:bg-green-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-green-800);
    }
  }
  .dark\\:bg-green-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-green-900);
    }
  }
  .dark\\:bg-green-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(39.3% 0.095 152.535) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-green-900) 20%, transparent);
      }
    }
  }
  .dark\\:bg-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-100);
    }
  }
  .dark\\:bg-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-500);
    }
  }
  .dark\\:bg-neutral-600 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-600);
    }
  }
  .dark\\:bg-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-700);
    }
  }
  .dark\\:bg-neutral-700\\/50 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(0.371 0 0) 50%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-neutral-700) 50%, transparent);
      }
    }
  }
  .dark\\:bg-neutral-750 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-750);
    }
  }
  .dark\\:bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-800);
    }
  }
  .dark\\:bg-neutral-800\\/50 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(0.269 0 0) 50%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-neutral-800) 50%, transparent);
      }
    }
  }
  .dark\\:bg-neutral-850 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-850);
    }
  }
  .dark\\:bg-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-900);
    }
  }
  .dark\\:bg-neutral-900\\! {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-900) !important;
    }
  }
  .dark\\:bg-neutral-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(0.205 0 0) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-neutral-900) 20%, transparent);
      }
    }
  }
  .dark\\:bg-neutral-950 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-950);
    }
  }
  .dark\\:bg-red-500 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-red-500);
    }
  }
  .dark\\:bg-red-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-red-800);
    }
  }
  .dark\\:bg-red-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-red-900);
    }
  }
  .dark\\:bg-red-900\\/10\\! {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 10%, transparent) !important;
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-red-900) 10%, transparent) !important;
      }
    }
  }
  .dark\\:bg-red-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-red-900) 20%, transparent);
      }
    }
  }
  .dark\\:bg-surface {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-surface);
    }
  }
  .dark\\:bg-surface-secondary {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-surface-secondary);
    }
  }
  .dark\\:bg-white\\/30 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, #fff 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-white) 30%, transparent);
      }
    }
  }
  .dark\\:bg-yellow-600 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-yellow-600);
    }
  }
  .dark\\:bg-yellow-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-yellow-900);
    }
  }
  .dark\\:from-blue-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-from: color-mix(in srgb, oklch(37.9% 0.146 265.522) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-gradient-from: color-mix(in oklab, var(--color-blue-900) 20%, transparent);
      }
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:from-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-from: var(--color-neutral-800);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-indigo-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-to: color-mix(in srgb, oklch(35.9% 0.144 278.697) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-gradient-to: color-mix(in oklab, var(--color-indigo-900) 20%, transparent);
      }
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-to: var(--color-neutral-700);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-to: var(--color-neutral-900);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-neutral-950 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-to: var(--color-neutral-950);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:\\!text-neutral-200 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-200) !important;
    }
  }
  .dark\\:\\!text-white {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-white) !important;
    }
  }
  .dark\\:text-\\[var\\(--dark\\)\\] {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--dark);
    }
  }
  .dark\\:text-blue-100 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-blue-100);
    }
  }
  .dark\\:text-blue-200 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-blue-200);
    }
  }
  .dark\\:text-blue-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-blue-300);
    }
  }
  .dark\\:text-gray-200 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-gray-200);
    }
  }
  .dark\\:text-gray-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-gray-300);
    }
  }
  .dark\\:text-gray-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-gray-400);
    }
  }
  .dark\\:text-green-200 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-green-200);
    }
  }
  .dark\\:text-green-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-green-300);
    }
  }
  .dark\\:text-green-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-green-400);
    }
  }
  .dark\\:text-neutral-50 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-50);
    }
  }
  .dark\\:text-neutral-50\\! {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-50) !important;
    }
  }
  .dark\\:text-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-100);
    }
  }
  .dark\\:text-neutral-200 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-200);
    }
  }
  .dark\\:text-neutral-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-300);
    }
  }
  .dark\\:text-neutral-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-400);
    }
  }
  .dark\\:text-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-500);
    }
  }
  .dark\\:text-neutral-600 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-600);
    }
  }
  .dark\\:text-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-800);
    }
  }
  .dark\\:text-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-900);
    }
  }
  .dark\\:text-orange-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-orange-400);
    }
  }
  .dark\\:text-red-200 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-red-200);
    }
  }
  .dark\\:text-red-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-red-300);
    }
  }
  .dark\\:text-red-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-red-400);
    }
  }
  .dark\\:text-white {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-white);
    }
  }
  .dark\\:shadow-\\[0_0_0_1px_rgba\\(255\\,255\\,255\\,0\\.5\\)_inset\\] {
    &:where(.dark-mode, .dark-mode *) {
      --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(255,255,255,0.5)) inset;
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .dark\\:ring-border {
    &:where(.dark-mode, .dark-mode *) {
      --tw-ring-color: var(--color-border);
    }
  }
  .dark\\:ring-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-ring-color: var(--color-neutral-800);
    }
  }
  .dark\\:outline-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      outline-color: var(--color-neutral-700);
    }
  }
  .focus-within\\:dark\\:border-neutral-600 {
    &:focus-within {
      &:where(.dark-mode, .dark-mode *) {
        border-color: var(--color-neutral-600);
      }
    }
  }
  .dark\\:hover\\:border-neutral-700\\/80 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          border-color: color-mix(in srgb, oklch(0.371 0 0) 80%, transparent);
          @supports (color: color-mix(in lab, red, red)) {
            border-color: color-mix(in oklab, var(--color-neutral-700) 80%, transparent);
          }
        }
      }
    }
  }
  .dark\\:hover\\:\\!bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-800) !important;
        }
      }
    }
  }
  .dark\\:hover\\:\\!bg-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-900) !important;
        }
      }
    }
  }
  .dark\\:hover\\:bg-blue-600 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-blue-600);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-450 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-450);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-700);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-800);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-900);
        }
      }
    }
  }
  .hover\\:dark\\:bg-neutral-800 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark-mode, .dark-mode *) {
          background-color: var(--color-neutral-800);
        }
      }
    }
  }
  .hover\\:dark\\:bg-neutral-900 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark-mode, .dark-mode *) {
          background-color: var(--color-neutral-900);
        }
      }
    }
  }
  .hover\\:dark\\:bg-neutral-950 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark-mode, .dark-mode *) {
          background-color: var(--color-neutral-950);
        }
      }
    }
  }
  .dark\\:hover\\:text-red-300 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-red-300);
        }
      }
    }
  }
  .dark\\:hover\\:text-white {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-white);
        }
      }
    }
  }
  .dark\\:focus\\:ring-blue-500 {
    &:where(.dark-mode, .dark-mode *) {
      &:focus {
        --tw-ring-color: var(--color-blue-500);
      }
    }
  }
  .dark\\:focus\\:ring-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      &:focus {
        --tw-ring-color: var(--color-neutral-500);
      }
    }
  }
  .focus-visible\\:dark\\:bg-blue-950 {
    &:focus-visible {
      &:where(.dark-mode, .dark-mode *) {
        background-color: var(--color-blue-950);
      }
    }
  }
  .dark\\:disabled\\:bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      &:disabled {
        background-color: var(--color-neutral-800);
      }
    }
  }
  .dark\\:disabled\\:\\!text-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      &:disabled {
        color: var(--color-neutral-500) !important;
      }
    }
  }
  .dark\\:disabled\\:hover\\:bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      &:disabled {
        &:hover {
          @media (hover: hover) {
            background-color: var(--color-neutral-800);
          }
        }
      }
    }
  }
  .lg\\:dark\\:border-neutral-800 {
    @media (width >= 64rem) {
      &:where(.dark-mode, .dark-mode *) {
        border-color: var(--color-neutral-800);
      }
    }
  }
  .lg\\:dark\\:ring-neutral-800 {
    @media (width >= 64rem) {
      &:where(.dark-mode, .dark-mode *) {
        --tw-ring-color: var(--color-neutral-800);
      }
    }
  }
  .\\[\\&\\:has\\(\\:focus-within\\)\\]\\:border-active {
    &:has(:focus-within) {
      border-color: var(--color-active);
    }
  }
  .\\[\\&\\>div\\:first-child\\]\\:\\!py-3 {
    &>div:first-child {
      padding-block: calc(var(--spacing) * 3) !important;
    }
  }
  .\\[\\&\\>pre\\]\\:\\!p-2\\.5 {
    &>pre {
      padding: calc(var(--spacing) * 2.5) !important;
    }
  }
  .\\[\\&\\>span\\]\\:inline-block {
    &>span {
      display: inline-block;
    }
  }
  .\\[\\&\\>span\\]\\:w-full {
    &>span {
      width: 100%;
    }
  }
  .\\[\\&\\>svg\\]\\:hidden {
    &>svg {
      display: none;
    }
  }
}
@layer base {
  :root {
    --kumo-surface: #fff;
    --kumo-surface-foreground: #000;
    --kumo-surface-secondary: var(--color-neutral-50);
    --kumo-surface-active: var(--color-neutral-100);
    --kumo-primary: #056dff;
    --kumo-primary-foreground: var(--color-white);
    --kumo-secondary: var(--color-white);
    --kumo-secondary-foreground: var(--color-neutral-900);
    --kumo-secondary-hover: var(--color-neutral-50);
    --kumo-accent: var(--color-neutral-150);
    --kumo-destructive: var(--color-red-600);
    --kumo-destructive-foreground: var(--color-neutral-50);
    --kumo-muted: var(--color-neutral-100);
    --kumo-muted-foreground: var(--color-neutral-500);
    --kumo-input: var(--color-neutral-50);
    --kumo-border: var(--color-neutral-200);
    --kumo-border-hover: var(--color-neutral-300);
    --kumo-border-active: var(--color-neutral-400);
    --kumo-text-error: var(--color-red-600);
  }
  .dark-mode {
    --kumo-surface: var(--color-black);
    --kumo-surface-foreground: var(--color-neutral-50);
    --kumo-surface-secondary: var(--kumo-surface);
    --kumo-surface-active: var(--color-neutral-800);
    --kumo-primary: #056dff;
    --kumo-primary-foreground: var(--color-white);
    --kumo-secondary: var(--color-neutral-900);
    --kumo-secondary-foreground: var(--color-neutral-50);
    --kumo-secondary-hover: var(--color-neutral-800);
    --kumo-accent: var(--color-neutral-850);
    --kumo-destructive: var(--color-red-600);
    --kumo-destructive-foreground: var(--color-neutral-50);
    --kumo-muted: var(--color-neutral-500);
    --kumo-muted-foreground: var(--color-neutral-50);
    --kumo-input: var(--color-neutral-900);
    --kumo-border: var(--color-neutral-800);
    --kumo-border-hover: var(--color-neutral-750);
    --kumo-border-active: var(--color-neutral-600);
    --kumo-text-error: var(--color-red-600);
  }
}
@layer utilities {
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .no-input-spinner {
    appearance: textfield;
    ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
      appearance: none;
    }
  }
}
.z-modal {
  z-index: 9999;
}
@keyframes right {
  to {
    transform: translateX(100%);
  }
}
.float {
  animation: float 5s linear infinite alternate;
}
@keyframes float {
  to {
    transform: translate(5px, 15px);
  }
}
@keyframes refresh {
  to {
    transform: rotate(360deg) scale(0.9);
  }
}
@keyframes bounce-in {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
.animate-bounce-in {
  animation: bounce-in 0.4s ease-out;
}
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
@keyframes text-shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
.skeleton-line {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  height: 0.5rem;
  width: var(--skeleton-width);
}
.skeleton-line::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: shimmer var(--shimmer-duration, 1.5s) var(--shimmer-delay, 0s) infinite ease-in-out;
  content: '';
}
.skeleton-line {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  height: 0.5rem;
  width: var(--skeleton-width);
  background-color: #f3f4f6;
}
.skeleton-line::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: shimmer var(--shimmer-duration, 1.5s) var(--shimmer-delay, 0s) infinite ease-in-out;
  content: '';
  background: linear-gradient( 90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 50%, rgba(0, 0, 0, 0) 100% );
}
.dark-mode .skeleton-line {
  background-color: rgba(255, 255, 255, 0.06);
}
.dark-mode .skeleton-line::after {
  background: linear-gradient( 90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 100% );
}
.text-shimmer {
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: text-shimmer 2s ease-in-out infinite;
}
@layer theme;
html.dark-mode {
  color-scheme: dark;
}
button.text-base {
  font-size: var(--text-base);
  line-height: var(--tw-leading, var(--text-base--line-height));
}
button.text-xs {
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
}
button.text-lg {
  font-size: var(--text-lg);
  line-height: var(--tw-leading, var(--text-lg--line-height));
}
button.border {
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-color: var(--color-color);
}
#react-app {
  isolation: isolate;
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-space-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-gradient-position {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-via {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-to {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-via-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0%;
}
@property --tw-gradient-via-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 50%;
}
@property --tw-gradient-to-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-space-x-reverse: 0;
      --tw-divide-x-reverse: 0;
      --tw-border-style: solid;
      --tw-divide-y-reverse: 0;
      --tw-gradient-position: initial;
      --tw-gradient-from: #0000;
      --tw-gradient-via: #0000;
      --tw-gradient-to: #0000;
      --tw-gradient-stops: initial;
      --tw-gradient-via-stops: initial;
      --tw-gradient-from-position: 0%;
      --tw-gradient-via-position: 50%;
      --tw-gradient-to-position: 100%;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
    }
  }
}
`, ""])
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(j, E, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(s) {
				if (!t.o(e, s)) return Promise.resolve().then(function() {
					var v = new Error("Cannot find module '" + s + "'");
					throw v.code = "MODULE_NOT_FOUND", v
				});
				var d = e[s],
					a = d[0];
				return t.e(d[1]).then(function() {
					return t.t(a, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", j.exports = o
		}
	}
]);

//# debugId=e8232940-b2f2-5e88-8ffd-7dd7eac56117