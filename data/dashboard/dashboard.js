! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ae5ffa9c-7b96-550b-b60f-af85d722f3b5")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				J8: function() {
					return s
				},
				Jd: function() {
					return d
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
					return T
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/utils/url.ts"),
				a = t("../../../../node_modules/query-string/query-string.js"),
				l = t.n(a),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				_;
			const c = () => Object.keys(i.Z).reduce((E, m) => (m.indexOf("cf_beta.") === 0 && i.Z.get(m) === "true" && E.push(m.split(".").slice(1).join(".")), E), []),
				u = () => {
					var E, m, C;
					return ((E = window) === null || E === void 0 || (m = E.bootstrap) === null || m === void 0 || (C = m.data) === null || C === void 0 ? void 0 : C.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((_ = window) === null || _ === void 0 ? void 0 : _.location) && i.Z) {
				const E = l().parse(window.location.search);
				E.beta_on && i.Z.set(`cf_beta.${E.beta_on}`, !0), E.beta_off && i.Z.set(`cf_beta.${E.beta_off}`, !1)
			}
			const g = {},
				n = E => {
					var m, C, f;
					return Object.prototype.hasOwnProperty.call(g, E) ? g[E] : ((m = window) === null || m === void 0 || (C = m.bootstrap) === null || C === void 0 || (f = C.data) === null || f === void 0 ? void 0 : f.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(w => w === E) ? (g[E] = !0, !0) : (g[E] = !1, !1)
				},
				o = E => i.Z ? i.Z.get(`cf_beta.${E}`) === !0 : !1,
				s = E => o(E) || n(E),
				v = () => !0,
				d = () => {
					var E, m, C;
					return ((E = window) === null || E === void 0 || (m = E.bootstrap) === null || m === void 0 || (C = m.data) === null || C === void 0 ? void 0 : C.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				p = E => {
					const m = (0, e.uF)(E),
						C = (m == null ? void 0 : m.roles) || [];
					return (0, r.qR)(location.pathname) && C.length === 1 && C.some(f => f === "Administrator Read Only")
				},
				b = () => {
					var E, m, C;
					return ((E = window) === null || E === void 0 || (m = E.location) === null || m === void 0 || (C = m.origin) === null || C === void 0 ? void 0 : C.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				T = () => b() === "fed"
		},
		"../functions/utils/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				b1: function() {
					return e
				}
			});
			const e = "CF_dash_version",
				r = "cf_fv_preview",
				a = "cf_pv",
				l = "current",
				i = "hash",
				_ = "deploymentPreview",
				c = "fragmentPreview",
				u = o => o === l ? g() : n(),
				g = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				n = (o = 72) => {
					const s = 36e5;
					return new Date(Date.now() + o * s)
				}
		},
		"../functions/utils/preview-deploy-helpers.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				E9: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/zod/lib/index.mjs");

			function r(E) {
				for (var m = 1; m < arguments.length; m++) {
					var C = arguments[m] != null ? Object(arguments[m]) : {},
						f = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(C).filter(function(w) {
						return Object.getOwnPropertyDescriptor(C, w).enumerable
					})), f.forEach(function(w) {
						a(E, w, C[w])
					})
				}
				return E
			}

			function a(E, m, C) {
				return m = l(m), m in E ? Object.defineProperty(E, m, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[m] = C, E
			}

			function l(E) {
				var m = i(E, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function i(E, m) {
				if (typeof E != "object" || E === null) return E;
				var C = E[Symbol.toPrimitive];
				if (C !== void 0) {
					var f = C.call(E, m || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(E)
			}
			const _ = e.z.string().regex(/^(((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))|canary)$/g),
				c = e.z.string().regex(/^[a-zA-Z0-9]{8}$/),
				u = e.z.string(),
				g = e.z.union([e.z.string().regex(/^[a-zA-Z0-9]{8}$/), e.z.literal("current")]),
				n = e.z.record(u, g),
				o = e.z.enum(["live", "previews", "canary"]),
				s = (E, m) => {
					const C = E.data.cookies[m],
						f = {
							[PREVIEW_VERSIONING_COOKIE]: _,
							[DEPLOYMENT_VERSION_COOKIE]: c
						};
					try {
						return f[m].parse(C)
					} catch {
						return null
					}
				},
				v = E => {
					try {
						return decodeURIComponent(E).split(",").reduce((m, C) => {
							const f = C.split(":"),
								w = u.parse(f[0]),
								A = g.parse(f[1]);
							return r({}, m, {
								[w]: A
							})
						}, {})
					} catch {
						return {}
					}
				},
				d = E => {
					const m = E.data.cookies[FRAGMENT_VERSIONING_PREVIEW_COOKIE],
						C = v(m);
					try {
						return n.parse(C)
					} catch {
						return null
					}
				},
				p = E => {
					const m = _.parse(E),
						[C, ...f] = m.split("-"),
						w = f.join("-");
					return {
						projectType: C,
						deploymentId: w
					}
				},
				b = (E, m) => {
					if (!m) return "";
					try {
						var C;
						const {
							projectType: f,
							deploymentId: w
						} = p(m), A = {
							live: E.env.PAGES_WORKERS_LIVE_HOST,
							previews: E.env.PAGES_WORKERS_PREVIEW_HOST
						}, {
							hostname: k,
							pathname: R,
							search: U
						} = new URL(E.request.url), I = k == null || (C = k.split(".")) === null || C === void 0 ? void 0 : C[0];
						if (w && w !== I && o.safeParse(f).success) {
							const D = A[f];
							return `https://${w}.${D}${R}${U}`
						}
					} catch (f) {
						console.log(f)
					}
					return ""
				},
				T = (E, m) => {
					if (!m) return "";
					try {
						var C;
						const f = E.env.PAGES_WORKERS_LIVE_HOST,
							{
								hostname: w,
								pathname: A,
								search: k
							} = new URL(E.request.url),
							R = w == null || (C = w.split(".")) === null || C === void 0 ? void 0 : C[0],
							{
								deploymentSHA: U
							} = parsePagesDevUrl(E.env.CF_PAGES_URL),
							I = E.request.headers.get("sec-fetch-dest") === "document";
						if (m && m !== R && m !== U && !I) return `https://${m}.${f}${A}${k}`
					} catch (f) {
						console.log(f)
					}
					return ""
				}
		},
		"../init.ts": function(K, y, t) {
			"use strict";
			t.r(y);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				r = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				a = t("../libs/init/initGlobal.ts"),
				l = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				i = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function _(N) {
				for (var G = 1; G < arguments.length; G++) {
					var ee = arguments[G] != null ? Object(arguments[G]) : {},
						le = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(ee).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(ee, Ee).enumerable
					})), le.forEach(function(Ee) {
						c(N, Ee, ee[Ee])
					})
				}
				return N
			}

			function c(N, G, ee) {
				return G = u(G), G in N ? Object.defineProperty(N, G, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[G] = ee, N
			}

			function u(N) {
				var G = g(N, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function g(N, G) {
				if (typeof N != "object" || N === null) return N;
				var ee = N[Symbol.toPrimitive];
				if (ee !== void 0) {
					var le = ee.call(N, G || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(N)
			}
			const n = N => {
				const G = N && N.headers || {},
					ee = new Headers(G);
				return ee.append("X-Cross-Site-Security", "dash"), _({}, N, {
					headers: ee
				})
			};
			(0, i.register)({
				request: (N, G) => {
					try {
						return new URL(N), N === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", G] : [N, G]
					} catch {
						var ee, le;
						return typeof N == "object" && ((ee = N) === null || ee === void 0 || (le = ee.url) === null || le === void 0 ? void 0 : le.startsWith("https://platform.dash.cloudflare.com/map-tiles/")) ? [N, G] : [N, n(G)]
					}
				}
			});
			var o = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				s = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				v = t("../react/app/providers/storeContainer.js");
			let d = "";
			const p = 61;

			function b(N) {
				const G = N.substr(1);
				if (G && d !== G) {
					const ee = document.getElementById(G);
					if (ee) {
						const le = ee.getBoundingClientRect().top;
						if (le > 0) {
							const Ee = le - p;
							document.documentElement.scrollTop = Ee
						}
					}
				}
				d = G
			}

			function T(N) {
				N.listen(G => b(G.hash))
			}
			var E = t("../../../../node_modules/cookie/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				C = t("../functions/utils/constants.ts");
			const f = N => {
					switch (N) {
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
				w = (N, G = !1) => {
					var ee;
					const le = f(N),
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
    <h1 id="error-title">${le.title}</h1>
    <p id="error-description">${le.description}</p>
  </div>
  `,
						Pe = G ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${m.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(ee=window.build)===null||ee===void 0?void 0:ee.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return Ee + Pe
				},
				A = N => {
					var G;
					const ee = document.getElementById(N);
					!ee || (G = ee.parentNode) === null || G === void 0 || G.removeChild(ee)
				};

			function k() {
				const N = document.getElementById("loading-state");
				N == null || N.classList.add("hide"), N == null || N.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(A)
				})
			}

			function R(N) {
				var G;
				const ee = document.getElementById("loading-state"),
					le = !!((G = E.parse(document.cookie)) === null || G === void 0 ? void 0 : G[C.b1]);
				!ee || (ee.innerHTML = w(N == null ? void 0 : N.code, le))
			}
			var U = t("../utils/initStyles.ts"),
				I = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				D = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				$ = t("../react/common/selectors/languagePreferenceSelector.ts"),
				z = t("../flags.ts"),
				Z = t("../utils/getDashVersion.ts");
			const re = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				te = !0,
				H = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				F = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var W = t("../utils/sentry/lastSentEventId.ts"),
				B = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				x = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const O = N => {
				const G = async ee => {
					var le, Ee;
					const Pe = {
						envelope: ee.body,
						url: N.url,
						isPreviewDeploy: (le = window) === null || le === void 0 || (Ee = le.build) === null || Ee === void 0 ? void 0 : Ee.isPreviewDeploy,
						release: (0, Z.t)()
					};
					try {
						const De = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(Pe)
						});
						return {
							statusCode: De.status,
							headers: {
								"x-sentry-rate-limits": De.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": De.headers.get("Retry-After")
							}
						}
					} catch (De) {
						return console.log(De), (0, x.$2)(De)
					}
				};
				return B.q(N, G)
			};
			var P = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				j = t("../../../../node_modules/history/esm/history.js"),
				ne = (0, j.lX)(),
				se = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				M = t("../react/utils/url.ts");
			const V = (0, se.Rf)();
			let L;

			function Y(N) {
				return ae(N, "react-router-v5")
			}

			function ae(N, G) {
				return (ee, le = !0, Ee = !0) => {
					le && V && V.location && (L = ee({
						name: (0, M.Fl)(V.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": G
						}
					})), Ee && N.listen && N.listen((Pe, De) => {
						if (De && (De === "PUSH" || De === "POP")) {
							L && L.finish();
							const Fe = {
								"routing.instrumentation": G
							};
							L = ee({
								name: (0, M.Fl)(Pe.pathname),
								op: "navigation",
								tags: Fe
							})
						}
					})
				}
			}
			var pe = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				de = t.n(pe),
				fe = t("../../../common/intl/intl-core/src/errors.ts"),
				oe = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Oe = t("../react/common/middleware/sparrow/errors.ts");

			function Se(N, G, ee) {
				return G = Me(G), G in N ? Object.defineProperty(N, G, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[G] = ee, N
			}

			function Me(N) {
				var G = je(N, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function je(N, G) {
				if (typeof N != "object" || N === null) return N;
				var ee = N[Symbol.toPrimitive];
				if (ee !== void 0) {
					var le = ee.call(N, G || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(N)
			}
			class xe {
				constructor() {
					Se(this, "name", xe.id)
				}
				setupOnce() {
					t.g.console && (0, oe.hl)(t.g.console, "error", G => (...ee) => {
						const le = ee.find(Ee => Ee instanceof Error);
						if (re && le) {
							let Ee, Pe = !0;
							if (le instanceof Oe.ez) {
								const De = le instanceof Oe.oV ? le.invalidProperties : void 0;
								Ee = {
									tags: {
										"sparrow.eventName": le.eventName
									},
									extra: {
										sparrow: {
											eventName: le.eventName,
											invalidProperties: De
										}
									},
									fingerprint: [le.name ? le.name : "SparrowValidationError"]
								}, Pe = !1
							} else if (le instanceof pe.SparrowIdCookieError) Ee = {
								extra: {
									sparrowIdCookie: le.cookie
								},
								fingerprint: [le.name ? le.name : "SparrowIdCookieError"]
							};
							else if (le.name === "ChunkLoadError") {
								Ee = {
									fingerprint: [le.name]
								};
								try {
									Ee.tags = {
										chunkId: le.message.split(" ")[2],
										chunkUrl: le.request
									}
								} catch {}
							} else le instanceof fe.YB && (Ee = {
								fingerprint: ["TranslatorError", le.translationKey]
							});
							Pe && o.Tb(le, Ee)
						}
						typeof G == "function" && G.apply(t.g.console, ee)
					})
				}
			}
			Se(xe, "id", "ConsoleErrorIntegration");
			var Ve = null,
				qe = t("../react/common/utils/getEnvironment.ts");
			const We = () => {
					if (re && te) {
						var N, G, ee, le, Ee, Pe, De, Fe, dt, Ye;
						const Vt = (0, qe.Z)();
						let It = "production";
						((N = window) === null || N === void 0 || (G = N.build) === null || G === void 0 ? void 0 : G.isPreviewDeploy) && (It += "-preview"), Vt === "canary" && (It = "canary"), D.S({
							dsn: re,
							release: (0, Z.t)(),
							environment: It,
							ignoreErrors: F,
							allowUrls: H,
							autoSessionTracking: !1,
							integrations: _t => [..._t.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new xe, new P.jK.BrowserTracing({
								routingInstrumentation: Y(ne)
							})],
							tracesSampleRate: 0,
							transport: O,
							beforeSend: _t => (W.e.setEventId(_t.event_id), _t)
						});
						const Rt = (0, v.bh)().getState();
						o.rJ({
							LOCAL_STORAGE_FLAGS: (0, z.Qw)(),
							USER_BETA_FLAGS: (0, z.ki)(),
							meta: {
								connection: {
									type: (ee = window) === null || ee === void 0 || (le = ee.navigator) === null || le === void 0 || (Ee = le.connection) === null || Ee === void 0 ? void 0 : Ee.effectiveType,
									bandwidth: (Pe = window) === null || Pe === void 0 || (De = Pe.navigator) === null || De === void 0 || (Fe = De.connection) === null || Fe === void 0 ? void 0 : Fe.downlink
								},
								languagePreference: (0, $.r)(Rt),
								isPreviewDeploy: (dt = window) === null || dt === void 0 || (Ye = dt.build) === null || Ye === void 0 ? void 0 : Ye.isPreviewDeploy
							},
							utilGates: (0, I.T2)(Rt)
						}), window.addEventListener("unhandledrejection", function(_t) {})
					}
				},
				Ke = N => {
					N ? o.av({
						id: N
					}) : o.av(null)
				};
			var Q = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				ke = () => {
					let N;
					try {
						N = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), N = window.location.search
					}
					if (!N.includes("remote[")) return;
					const G = new URLSearchParams(N),
						ee = {};
					for (let [le, Ee] of G) le.includes("remote") && (ee[le.replace(/remote\[|\]/g, "")] = Ee);
					Q.Z.set("mfe-remotes", JSON.stringify(ee))
				},
				ze = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				mt = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const pt = "ANON_USER_ID";

			function Ae() {
				var N, G, ee, le;
				let Ee = (N = t.g) === null || N === void 0 || (G = N.bootstrap) === null || G === void 0 || (ee = G.data) === null || ee === void 0 || (le = ee.user) === null || le === void 0 ? void 0 : le.id;
				if (!Ee) {
					let Pe = Q.Z.get(pt);
					if (!Pe) {
						let De = (0, mt.Z)();
						Q.Z.set(pt, De), Pe = De
					}
					return Pe
				}
				return Ee
			}
			async function ot() {
				const N = (0, v.bh)();
				N.dispatch((0, ze.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await N.dispatch((0, I.UL)({
					userId: Ae()
				}))
			}
			class J extends Error {
				constructor(G, ee) {
					super(ee);
					this.name = `${G} ${ee}`
				}
			}
			const ge = () => {
					document.cookie.split(";").forEach(G => {
						const [ee] = G.trim().split("=");
						document.cookie = `${ee}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				Te = async () => {
					let N = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!N.ok) throw N.headers.get("content-type") === "text/html" && (await N.text()).toLowerCase().includes("cookie too large") && (o.$e(function(Ee) {
						Ee.setTag("init", "cookieTooLarge"), o.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), ge(), window.location.reload()), new J("Bootstrap API Failure", N == null ? void 0 : N.status);
					return (await N.json()).result.data
				};
			var Le = t("webpack/sharing/consume/default/react/react"),
				we = t.n(Le),
				Be = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				et = t("webpack/sharing/consume/default/react-dom/react-dom"),
				st = t("webpack/sharing/consume/default/react-redux/react-redux"),
				ft = t("../../../../node_modules/swr/core/dist/index.mjs"),
				yt = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				ht = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Nt = t("../react/shims/focus-visible.js"),
				He = t("../react/app/components/DeepLink/index.ts"),
				ct = t("../../../../node_modules/prop-types/index.js"),
				it = t.n(ct),
				lt = t("../react/utils/translator.tsx"),
				vt = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				Re = t("../../../dash/intl/intl-translations/src/index.ts"),
				X = t("../../../../node_modules/query-string/query-string.js"),
				ue = t.n(X),
				ye = t("../react/common/actions/userActions.ts"),
				Ie = t("../react/common/selectors/userSelectors.ts"),
				Ne = t("../react/utils/i18n.ts"),
				Qe = t("../react/utils/bootstrap.ts");

			function rt(N) {
				for (var G = 1; G < arguments.length; G++) {
					var ee = arguments[G] != null ? Object(arguments[G]) : {},
						le = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(ee).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(ee, Ee).enumerable
					})), le.forEach(function(Ee) {
						At(N, Ee, ee[Ee])
					})
				}
				return N
			}

			function At(N, G, ee) {
				return G = Et(G), G in N ? Object.defineProperty(N, G, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[G] = ee, N
			}

			function Et(N) {
				var G = Pt(N, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function Pt(N, G) {
				if (typeof N != "object" || N === null) return N;
				var ee = N[Symbol.toPrimitive];
				if (ee !== void 0) {
					var le = ee.call(N, G || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(N)
			}
			let Xe = ue().parse(location.search);
			const bt = N => {
					const G = (0, Qe.$8)() ? [(0, Re.Fy)(Re.if.changes), (0, Re.Fy)(Re.if.common), (0, Re.Fy)(Re.if.navigation), (0, Re.Fy)(Re.if.overview), (0, Re.Fy)(Re.if.onboarding), (0, Re.Fy)(Re.if.invite), (0, Re.Fy)(Re.if.login), (0, Re.Fy)(Re.if.dns), (0, Re.Fy)(Re.n4.ssl_tls), (0, Re.Fy)(Re.if.message_inbox), (0, Re.Fy)(Re.if.welcome)] : [(0, Re.Fy)(Re.if.common), (0, Re.Fy)(Re.if.invite), (0, Re.Fy)(Re.if.login), (0, Re.Fy)(Re.if.onboarding)];
					Xe.lang ? Dt(N) : Q.Z.get(Ne.th) && Lt(N, (0, Ne.Kd)());
					const ee = async le => (await Promise.all(G.map(Pe => Pe(le)))).reduce((Pe, De) => rt({}, Pe, De), {});
					return we().createElement(vt.LocaleContext.Provider, {
						value: N.languagePreference
					}, we().createElement(vt.I18nProvider, {
						translator: lt.Vb,
						locale: N.languagePreference
					}, we().createElement(vt.I18nLoader, {
						loadPhrases: ee
					}, N.children)))
				},
				Dt = async N => {
					let G = Xe.lang.substring(0, Xe.lang.length - 2) + Xe.lang.substring(Xe.lang.length - 2, Xe.lang.length).toUpperCase();
					if (!(0, $.v)(G)) {
						console.warn(`${G} is not a supported locale.`), delete Xe.lang, N.history.replace({
							search: ue().stringify(Xe)
						});
						return
					}(0, Ne.i_)(G), delete Xe.lang, Lt(N, G), N.isAuthenticated || N.history.replace({
						search: ue().stringify(Xe)
					})
				}, Lt = async (N, G) => {
					if (N.isAuthenticated) try {
						await N.setUserCommPreferences({
							"language-locale": G
						}, {
							hideErrorAlert: !0
						}), Q.Z.remove(Ne.th), N.history.replace({
							search: ue().stringify(Xe)
						})
					} catch (ee) {
						Q.Z.set(Ne.th, !0), console.error(ee)
					} else Q.Z.set(Ne.th, !0)
				}, xt = N => {
					const G = (0, Ie.PR)(N);
					return {
						isAuthenticated: !!(G && G.id),
						languagePreference: (0, Ne.Kd)() || (0, $.r)(N)
					}
				}, St = {
					setUserCommPreferences: ye.V_
				};
			var Bt = (0, Be.withRouter)((0, st.connect)(xt, St)(bt));
			bt.propTypes = {
				history: it().object,
				languagePreference: it().string.isRequired,
				children: it().node.isRequired,
				isAuthenticated: it().bool,
				setUserCommPreferences: it().func.isRequired
			};
			var Ct = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Ut = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let Tt;
			const jt = ({
				selectorPrefix: N = "c_"
			} = {}) => (Tt || (Tt = (0, Ut.Z)({
				dev: !1,
				selectorPrefix: N
			})), Tt);
			var Wt = t("../react/common/out.css"),
				wt = t("../react/common/components/ModalManager.tsx"),
				kt = t("../react/app/components/ErrorBoundary.tsx"),
				$t = t("../react/common/actions/notificationsActions.ts");
			const Mt = (t.g.bootstrap || {}).data || {};
			class h extends we().Component {
				componentDidMount() {
					Mt.messages && this.dispatchNotificationActions(Mt.messages)
				}
				dispatchNotificationActions(G) {
					G.forEach(ee => {
						const {
							type: le,
							message: Ee,
							persist: Pe
						} = ee;
						["success", "info", "warn", "error"].includes(le) && this.props.notifyAdd(le, (0, lt.ZP)(Ee), {
							persist: !!Pe
						})
					})
				}
				render() {
					return null
				}
			}
			var me = (0, Be.withRouter)((0, st.connect)(null, {
				notifyAdd: $t.add
			})(h));
			h.propTypes = {
				notifyAdd: it().func.isRequired
			};
			var Ce = t("../react/app/redux/index.ts");

			function $e() {
				var N;
				const G = (0, Ce.p4)(Ie.PR),
					ee = (G == null || (N = G.email) === null || N === void 0 ? void 0 : N.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					le = (0, ze.Yc)();
				(0, Le.useEffect)(() => {
					le({
						userType: ee
					})
				}, [ee, le])
			}
			var ce = t("../react/common/selectors/entitlementsSelectors.ts"),
				ie = t("../react/common/selectors/accountSelectors.ts");
			const ve = ["accountId", "is_ent"];

			function _e() {
				const N = (0, ze.f7)(),
					G = (0, Be.useHistory)(),
					ee = (0, M.uW)(G.location.pathname),
					le = (0, ze.Yc)(),
					Ee = (0, ze.O$)(),
					Pe = (0, Ce.p4)(ce.u1),
					De = !Pe.isRequesting && !!Pe.data,
					Fe = (0, Ce.p4)(ce.p1),
					dt = (0, Ce.p4)(ie.Xu),
					Ye = (0, Ce.p4)(ie.uF),
					Vt = !dt.isRequesting && !!dt.data;
				(0, Le.useEffect)(() => {
					if (ee && Vt && Ye && De && ee === Ye.account.id) {
						var It, Rt, _t;
						le({
							accountId: Ye.account.id,
							is_ent: Fe,
							is_free_account: !Fe && !(Ye == null || (It = Ye.account.meta) === null || It === void 0 ? void 0 : It.has_business_zones) && !(Ye == null || (Rt = Ye.account.meta) === null || Rt === void 0 ? void 0 : Rt.has_pro_zones) && !(Ye == null || (_t = Ye.account.meta) === null || _t === void 0 ? void 0 : _t.has_enterprise_zones)
						})
					} else(!ee || ee in N && N.accountId !== ee) && Ee(ve)
				}, [Vt, Ye, le, Ee, De, Fe, ee, N])
			}
			var be = t("../react/common/selectors/zoneSelectors.ts");

			function Ue() {
				const N = (0, Ce.p4)(be.nA),
					G = (0, ze.Yc)();
				(0, Le.useEffect)(() => {
					var ee;
					G({
						zone_id: N == null ? void 0 : N.id,
						zone_plan: N == null || (ee = N.plan) === null || ee === void 0 ? void 0 : ee.legacy_id
					})
				}, [N, G])
			}
			const Ze = () => ($e(), _e(), Ue(), null);
			var at = t("../react/app/components/Persistence/index.tsx"),
				Je = t("../node_modules/@cloudflare/elements/es/index.js"),
				tt = t("../react/app/components/LoadingSuspense.tsx");
			const ut = we().lazy(() => Promise.all([t.e(16691), t.e(14917), t.e(12174), t.e(1091), t.e(31358), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(2868), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var gt = () => we().createElement(tt.Z, null, we().createElement(ut, null));
			const nt = () => (Le.useEffect(() => k, []), null);
			var en = t("../../../../node_modules/moment/moment.js"),
				Ht = t.n(en);
			const tn = N => {
					switch (N) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return N.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return N.toLowerCase();
						default:
							return "en"
					}
				},
				nn = () => {
					const N = (0, Ce.p4)($.r);
					(0, Le.useEffect)(() => {
						const G = tn(N);
						G !== Ht().locale() && Ht().locale(G), document.documentElement.lang = N
					}, [N])
				},
				rn = () => {
					(0, Le.useEffect)(() => {
						async function N() {
							var G, ee, le, Ee;
							let Pe;
							if (((G = window) === null || G === void 0 || (ee = G.build) === null || ee === void 0 ? void 0 : ee.isPreviewDeploy) && ((le = window) === null || le === void 0 || (Ee = le.build) === null || Ee === void 0 ? void 0 : Ee.branch) !== "staging" && (Pe = "cookie"), !!Pe) try {
								const De = document.head.querySelector("link[rel=icon]");
								De && (De.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${Pe}.ico`)).default)
							} catch {}
						}
						N()
					}, [])
				};
			var on = t("../react/common/constants/constants.ts");
			const an = () => {
					var N;
					const G = (0, Be.useLocation)(),
						[ee, le] = (0, Le.useState)(((N = window) === null || N === void 0 ? void 0 : N.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Le.useEffect)(() => {
						const Ee = ue().parse(G.search);
						if (Ee.pt && Q.Z.set(on.sJ, Ee.pt), Ee == null ? void 0 : Ee.devPanel) {
							var Pe, De;
							(Pe = window) === null || Pe === void 0 || (De = Pe.localStorage) === null || De === void 0 || De.setItem("gates_devtools_ui_gates_controller_enabled", "true"), le(!0)
						}
					}, [G.search]), {
						devPanelEnabled: ee
					}
				},
				sn = ({
					id: N,
					customDataLayer: G = [],
					dataLayerName: ee = "dataLayer"
				}) => {
					const le = `<iframe src="https://www.googletagmanager.com/ns.html?id=${N}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						Ee = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${ee}', '${N}')`,
						Pe = `
    window.${ee} = window.${ee} || [];
    window.${ee}.push(${JSON.stringify(G)})
  `;
					return {
						iframe: le,
						script: Ee,
						dataLayerHTML: Pe
					}
				},
				cn = N => {
					const G = document.createElement("script");
					return G.innerHTML = N, G.async = !0, G
				},
				ln = N => {
					const G = document.createElement("noscript");
					return G.innerHTML = N, G
				},
				Zt = N => {
					const G = document.createElement("script");
					return G.innerHTML = N, G
				},
				Dn = ({
					dataLayer: N,
					dataLayerName: G
				}) => {
					if (window[G]) return window[G].push(N);
					const ee = `
      window.${G} = window.${G} || [];
      window.${G}.push(${JSON.stringify(N)})`,
						le = Zt(ee);
					document.head.insertBefore(le, document.head.childNodes[0])
				},
				un = ({
					containerId: N,
					customDataLayer: G,
					gtmFeatureFlag: ee = !0
				}) => {
					(0, Le.useEffect)(() => {
						(() => {
							if (!ee) return null;
							const {
								iframe: Ee,
								script: Pe,
								dataLayerHTML: De
							} = sn({
								id: N,
								customDataLayer: G
							});
							document.head.insertBefore(Zt(De), document.head.childNodes[0]), document.head.insertBefore(cn(Pe), document.head.childNodes[0]), document.body.insertBefore(ln(Ee), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const dn = ({
				isDev: N,
				gtmFeatureFlag: G
			}) => {
				(0, Le.useEffect)(() => {
					(() => {
						if (!G) return null;
						let le;
						N ? le = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : le = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const Ee = document.createElement("script");
						Ee.async = !0, Ee.src = le, document.head.insertBefore(Ee, document.head.childNodes[0])
					})()
				}, [])
			};
			var pn = t("../react/utils/useDomainConnectRedirect.ts");
			const gn = "GTM-NDGPDFZ",
				mn = we().lazy(() => Promise.all([t.e(16691), t.e(14917), t.e(12174), t.e(1091), t.e(31358), t.e(51436), t.e(34744), t.e(54844), t.e(80778), t.e(70618), t.e(88723), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(2868), t.e(83276), t.e(39278), t.e(91262), t.e(52215), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				fn = we().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(1091), t.e(80778), t.e(17387), t.e(2868), t.e(88145), t.e(91262), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var vn = ({
					userIsAuthed: N
				}) => {
					nn(), rn(), (0, pn.y)();
					const {
						devPanelEnabled: G
					} = an();
					return un({
						containerId: gn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), dn({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-adobe-launch")
					}), we().createElement(Le.Suspense, {
						fallback: we().createElement(nt, null)
					}, we().createElement(Be.Switch, null, !N && !0 && we().createElement(Be.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, we().createElement(fn, null)), we().createElement(Be.Route, {
						render: () => we().createElement(Je.ZC, {
							minHeight: "100vh"
						}, we().createElement(mn, null))
					})), G && we().createElement(gt, null))
				},
				Kt = t("../../../../node_modules/yup/es/index.js"),
				_n = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => Kt.Z_().email((0, lt.ZP)("common.validation.email")).required((0, lt.ZP)("common.validation.email")),
				cfPassword: () => Kt.Z_().required((0, lt.ZP)("common.validation.required"))
			};
			(0, _n.Yd)(Qt).forEach(N => {
				Kt.kM(Kt.Z_, N, Qt[N])
			});
			var En = t("../react/common/utils/startViewTransition.ts");
			const Xt = we().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function yn() {
				const [N, G] = (0, Le.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, Le.useEffect)(() => {
					const ee = window.matchMedia("(prefers-color-scheme: dark)"),
						le = Ee => {
							G(Ee.matches ? "dark" : "light")
						};
					return ee.addEventListener("change", le), () => {
						ee.removeEventListener("change", le)
					}
				}, []), N
			}
			const hn = () => {
					const N = (0, Qe.$8)(),
						[G, ee] = (0, Le.useState)(N ? Xt : we().Fragment),
						le = yn(),
						[Ee, Pe] = (0, Le.useState)((0, m.Yc)());
					(0, Le.useEffect)(() => {
						(0, m.fF)(() => Pe((0, m.Yc)()))
					}, []);
					const De = Fe => {
						Pe(Fe), (0, En.o)(() => {
							(0, m.C8)(Fe)
						}), document.cookie = `dark-mode=${Fe};Path=/;Max-Age=31536000`, Fe === "dark" || Fe === "on" || Fe === "system" && le === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
					};
					return (0, Le.useEffect)(() => {
						ee(N ? Xt : we().Fragment)
					}, [N]), (0, Le.useEffect)(() => {
						const Fe = () => De(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Fe), () => {
							window.removeEventListener("storage", Fe)
						}
					}, []), we().createElement(Le.Suspense, {
						fallback: null
					}, we().createElement(st.Provider, {
						store: (0, v.bh)()
					}, we().createElement(Be.Router, {
						history: ne
					}, we().createElement(G, null, we().createElement(Ct.Z, {
						renderer: jt()
					}, we().createElement(Bt, null, we().createElement(kt.S, {
						sentryTag: "Root"
					}, we().createElement(ft.J$, {
						value: {
							fetcher: Fe => fetch(Fe).then(dt => dt.json())
						}
					}, we().createElement(Ze, null), we().createElement(me, null), we().createElement(at.Z_, {
						onDarkModeChangeCb: De
					}, we().createElement(He.ZP, null, we().createElement(vn, {
						userIsAuthed: N
					}))), we().createElement(wt.ZP, null), we().createElement(yt.F0, null)))))))))
				},
				bn = () => {
					(0, et.render)(we().createElement(hn, null), document.getElementById("react-app"))
				};
			var Ot = t("../utils/initSparrow.ts"),
				Ft = t("../utils/zaraz.ts");
			const Cn = () => {
					const N = (0, Ie.PR)((0, v.bh)().getState());
					Tn(), (0, Ot.Ug)(), (0, Ft.bM)(), (N == null ? void 0 : N.id) && de().setUserId(N == null ? void 0 : N.id), (0, Ot.yV)(), !(0, Ot.Wi)() && (0, Ot.IM)(), N ? (0, Ft.yn)(N) : (0, Ft.Ro)()
				},
				Tn = () => {
					var N, G;
					(N = window) === null || N === void 0 || (G = N.OneTrust) === null || G === void 0 || G.OnConsentChanged(() => {
						const ee = (0, Ie.PR)((0, v.bh)().getState());
						(0, Ot.Wi)() ? (de().setEnabled(!0), (ee == null ? void 0 : ee.id) ? (de().setUserId(ee.id), (0, Ft.yn)(ee)) : (0, Ft.Ro)(), (0, Ot.yV)()) : (de().setEnabled(!1), (0, Ot.IM)())
					})
				};

			function wn(N) {
				for (var G = 1; G < arguments.length; G++) {
					var ee = arguments[G] != null ? Object(arguments[G]) : {},
						le = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(ee).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(ee, Ee).enumerable
					})), le.forEach(function(Ee) {
						On(N, Ee, ee[Ee])
					})
				}
				return N
			}

			function On(N, G, ee) {
				return G = In(G), G in N ? Object.defineProperty(N, G, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[G] = ee, N
			}

			function In(N) {
				var G = An(N, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function An(N, G) {
				if (typeof N != "object" || N === null) return N;
				var ee = N[Symbol.toPrimitive];
				if (ee !== void 0) {
					var le = ee.call(N, G || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(N)
			}
			const Pn = "init",
				Jt = (N, G) => {
					o.$e(function(ee) {
						ee.setTag(Pn, G), o.Tb(N)
					}), R(N)
				},
				Gt = async (N, G) => {
					try {
						return await N(), !0
					} catch (ee) {
						return Jt(ee, G), !1
					}
				};
			(async () => {
				try {
					var N, G, ee;
					t.g.build = wn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "64e66b4d897b88f2608f8e6d008dc00e9904e7aa",
						dashVersion: "34339376",
						env: "production",
						builtAt: 1751495203515,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, Z.p)()
					}), We();
					const le = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => T(ne),
						tag: "hashScroll"
					}, {
						fn: U.Z,
						tag: "styles"
					}, {
						fn: ke,
						tag: "mfePreviewData"
					}];
					for (const dt of le)
						if (!await Gt(dt.fn, dt.tag)) return;
					let Ee;
					if (!await Gt(async () => {
							Ee = await Te()
						}, "bootstrap")) return;
					const Pe = (0, v.bh)(),
						De = ((N = Ee) === null || N === void 0 ? void 0 : N.data) || {};
					Pe.dispatch((0, s.mW)("user", De == null ? void 0 : De.user));
					const Fe = (G = Ee) === null || G === void 0 || (ee = G.data) === null || ee === void 0 ? void 0 : ee.user;
					return t.g.bootstrap = Ee, Fe && Fe.id && Ke(Fe.id), !await Gt(ot, "gates") || !await Gt(Cn, "tracking") ? void 0 : bn()
				} catch (le) {
					Jt(le, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(K, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				l = t("../react/common/selectors/userSelectors.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				_ = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/common/utils/isGuards.ts"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				g = t.n(u);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(v) {
					for (var d = 1; d < arguments.length; d++) {
						var p = arguments[d];
						for (var b in p) Object.prototype.hasOwnProperty.call(p, b) && (v[b] = p[b])
					}
					return v
				}, n.apply(this, arguments)
			}
			const o = v => {
				function d(p) {
					const b = (0, a.UM)(),
						T = (0, u.useHistory)(),
						E = (0, u.useLocation)(),
						m = (0, u.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						C = (0, a.p4)(l.PR) || null,
						f = (0, a.p4)(i.nA) || null,
						w = (0, a.p4)(_.uF),
						A = w ? w.account : null;
					if (!m) return null;
					const {
						accountId: k,
						app: R,
						tab: U
					} = m.params, I = m.params.zoneName && ((0, c.v5)(m.params.zoneName) || m.params.zoneName.indexOf(".") > 0) ? m.params.zoneName : void 0;
					return r().createElement(v, n({
						dispatch: b,
						history: T,
						location: E,
						match: m,
						user: C,
						membership: k ? w : null,
						account: k ? A : null,
						accountId: k || null,
						zone: I ? f : null,
						zoneName: I || null,
						app: I ? R : null,
						tab: I ? U : null
					}, p))
				}
				return d.displayName = `withEntities(${s(v)})`, d
			};

			function s(v) {
				return v.displayName || v.name || "Component"
			}
			y.Z = o
		},
		"../react/app/components/AccountHome/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$$: function() {
					return f
				},
				CK: function() {
					return R
				},
				KV: function() {
					return A
				},
				OX: function() {
					return k
				},
				QV: function() {
					return C
				},
				Yt: function() {
					return E
				},
				bA: function() {
					return m
				},
				fu: function() {
					return I
				},
				gX: function() {
					return p
				},
				hh: function() {
					return U
				},
				o1: function() {
					return w
				},
				tw: function() {
					return b
				},
				xD: function() {
					return T
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../react/utils/url.ts");
			const l = "projects table click",
				i = "click create application",
				_ = "account home dev plat - product card click",
				c = "account home dev plat - empty state CTA click",
				u = "account home dev plat - view all projects click",
				g = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				o = "account home zero trust - analytics link click",
				s = "account home zero trust - product card click",
				v = "account home zero trust - plan pill click",
				d = "account home zero trust - plan fallback link click",
				p = {
					SPARROW_PROJECTS_TABLE_CLICK: l,
					SPARROW_CREATE_PROJECT_CLICK: i,
					SPARROW_PRODUCT_CARD_CLICK: _,
					SPARROW_EMPTY_STATE_CTA_CLICK: c,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: u,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: g,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: o,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: s,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: v,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: d
				},
				b = D => {
					r().sendEvent(l, {
						component: D
					})
				},
				T = D => {
					r().sendEvent(l, {
						component: "menu",
						subcomponent: D
					})
				},
				E = () => {
					r().sendEvent(i, {
						category: "Projects Table"
					})
				},
				m = ({
					category: D,
					product: $
				}) => {
					r().sendEvent(_, {
						category: D,
						product: $
					})
				},
				C = () => {
					r().sendEvent(c)
				},
				f = () => {
					r().sendEvent(u)
				},
				w = D => {
					r().sendEvent(n, {
						category: D
					})
				},
				A = ({
					category: D,
					href: $
				}) => {
					r().sendEvent(g, {
						category: D,
						href: (0, a.cm)($)
					})
				},
				k = ({
					category: D,
					href: $
				}) => {
					r().sendEvent(o, {
						category: D,
						href: (0, a.cm)($)
					})
				},
				R = ({
					category: D,
					product: $,
					href: z
				}) => {
					r().sendEvent(s, {
						category: D,
						product: $,
						href: (0, a.cm)(z)
					})
				},
				U = ({
					plan: D
				}) => {
					r().sendEvent(v, {
						plan: D
					})
				},
				I = () => {
					r().sendEvent(d)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return u
				},
				Bh: function() {
					return _
				},
				CM: function() {
					return g
				},
				MF: function() {
					return r
				},
				TS: function() {
					return s
				},
				WF: function() {
					return i
				},
				Wz: function() {
					return n
				},
				bk: function() {
					return c
				},
				fj: function() {
					return o
				},
				r4: function() {
					return l
				},
				zq: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js");
			const r = {
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
				a = (0, e.R)(r.ADD_SITE, v => ({
					payload: v
				})),
				l = (0, e.R)(r.RESOLVING_START),
				i = (0, e.R)(r.RESOLVING_COMPLETE),
				_ = (0, e.R)(r.SELECT_ZONE, v => ({
					payload: v
				})),
				c = (0, e.R)(r.SELECT_ACCOUNT, v => ({
					payload: v
				})),
				u = (0, e.R)(r.SELECT_PAGES_PROJECT, v => ({
					payload: v
				})),
				g = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, v => ({
					payload: v
				})),
				n = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, v => ({
					accountIds: v
				})),
				o = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				s = (0, e.R)(r.SELECT_WORKER, v => ({
					payload: v
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				BV: function() {
					return e
				},
				Dz: function() {
					return g
				},
				Fj: function() {
					return l
				},
				Kt: function() {
					return _
				},
				O5: function() {
					return i
				},
				Tc: function() {
					return r
				},
				_h: function() {
					return n
				},
				dB: function() {
					return a
				},
				s$: function() {
					return c
				}
			});
			const e = "to",
				r = "_gl",
				a = "freeTrial",
				l = "deepLinkQueryParams",
				i = "resolvedDeepLinkQueryParams",
				_ = "add",
				c = "multiSkuProducts",
				u = "/:account/billing/checkout",
				g = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return U
				},
				U: function() {
					return R.U
				},
				dd: function() {
					return R.dd
				},
				bk: function() {
					return _.bk
				},
				Bh: function() {
					return _.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t("../react/app/redux/index.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t("../react/app/components/DeepLink/utils.ts"),
				i = t("../react/utils/bootstrap.ts"),
				_ = t("../react/app/components/DeepLink/actions.ts"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(c);

			function g(I) {
				for (var D = 1; D < arguments.length; D++) {
					var $ = arguments[D] != null ? Object(arguments[D]) : {},
						z = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols($).filter(function(Z) {
						return Object.getOwnPropertyDescriptor($, Z).enumerable
					})), z.forEach(function(Z) {
						n(I, Z, $[Z])
					})
				}
				return I
			}

			function n(I, D, $) {
				return D = o(D), D in I ? Object.defineProperty(I, D, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[D] = $, I
			}

			function o(I) {
				var D = s(I, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function s(I, D) {
				if (typeof I != "object" || I === null) return I;
				var $ = I[Symbol.toPrimitive];
				if ($ !== void 0) {
					var z = $.call(I, D || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(I)
			}
			class v {
				constructor(D, $) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", z => {
						this.resolvers.set(z, {
							name: z,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", z => {
						const Z = this.resolvers.get(z);
						Z && (Z.endTime = Date.now(), this.resolvers.set(z, Z))
					}), n(this, "resolverCancel", z => {
						this.resolverDone(z), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", z => {
						const Z = "NO_ACTION",
							re = {
								actionType: Z,
								startTime: 0
							};
						return {
							start: (te = Z) => {
								const H = this.resolvers.get(z);
								re.actionType = te, re.startTime = Date.now(), H && H.userActions.push(re)
							},
							finish: (te = Z) => {
								re.actionType = te, re.endTime = Date.now()
							},
							cancel: (te = Z) => {
								re.actionType = te, re.endTime = Date.now(), this.resolverCancel(z)
							}
						}
					}), this.deepLink = D, this.legacyDeepLink = $, this.resolvers = new Map
				}
				track(D) {
					try {
						if (this._done) return;
						this._done = !0;
						const $ = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: d(this.startTime, this.endTime),
								totalCpuTime: d(this.startTime, this.endTime)
							},
							z = this.resolvers.size === 0 ? $ : Array.from(this.resolvers.values()).reduce((Z, re) => {
								const te = d(re.startTime, re.endTime),
									H = re.userActions.reduce((W, B) => {
										const x = d(B.startTime, B.endTime);
										return {
											totalTime: W.totalTime + x,
											actions: W.actions.set(B.actionType, x)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									F = te - H.totalTime;
								return g({}, Z, {
									totalTime: Z.totalTime + te,
									totalUserActionsTime: Z.totalUserActionsTime + H.totalTime,
									totalCpuTime: Z.totalCpuTime + F,
									[`${re.name}ResolverTotalTime`]: te,
									[`${re.name}ResolverTotalCpuTime`]: F,
									[`${re.name}ResolverTotalUserActionsTime`]: H.totalTime
								}, Array.from(H.actions.keys()).reduce((W, B) => g({}, W, {
									[`${re.name}Resolver/${B}`]: H.actions.get(B)
								}), {}))
							}, g({}, $, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						u().sendEvent(D, z)
					} catch ($) {
						console.error($)
					}
				}
			}

			function d(I = Date.now(), D = Date.now()) {
				return (D - I) / 1e3
			}
			var p = t("../react/app/components/DeepLink/constants.ts"),
				b = t("../react/common/hooks/useCachedState.ts"),
				T = t("../react/common/hooks/usePrevious.ts");

			function E(I) {
				for (var D = 1; D < arguments.length; D++) {
					var $ = arguments[D] != null ? Object(arguments[D]) : {},
						z = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols($).filter(function(Z) {
						return Object.getOwnPropertyDescriptor($, Z).enumerable
					})), z.forEach(function(Z) {
						m(I, Z, $[Z])
					})
				}
				return I
			}

			function m(I, D, $) {
				return D = C(D), D in I ? Object.defineProperty(I, D, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[D] = $, I
			}

			function C(I) {
				var D = f(I, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function f(I, D) {
				if (typeof I != "object" || I === null) return I;
				var $ = I[Symbol.toPrimitive];
				if ($ !== void 0) {
					var z = $.call(I, D || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(I)
			}
			var A = ({
					children: I
				}) => {
					const D = (0, r.TZ)(),
						$ = (0, a.useHistory)(),
						z = (0, T.Z)($.location.pathname),
						[Z, re] = (0, e.useState)(!0),
						[te, H] = (0, b.j)(void 0, {
							key: p.Fj
						}),
						[F, W] = (0, b.j)(void 0, {
							key: p.O5
						}),
						[B, x] = (0, b.j)(void 0, {
							key: p.s$
						}),
						O = (0, i.$8)();
					let P = new URLSearchParams($.location.search);
					const j = (0, l.mL)($.location.pathname, P);
					let q = null,
						ne = null;
					if (P.has(p.Tc) && P.delete(p.Tc), P.get(p.BV)) q = P.get(p.BV), $.location.hash && (ne = $.location.hash);
					else if (te) {
						const M = new URLSearchParams(te);
						M.get(p.BV) && (q = M.get(p.BV), P = M)
					} else j && (P.set(p.BV, j), q = j);
					if (q && p._h.test(q)) {
						const M = P.getAll(p.Kt),
							V = JSON.stringify(M);
						M.length && V !== B && x(V), P.has(p.Tc) && P.delete(p.Tc), P.delete(p.Kt)
					}!O && te === void 0 && q && H(P.toString());
					const se = async () => {
						try {
							if ((0, l.I3)(q) && O) {
								te && H(void 0), D.dispatch((0, _.r4)()), re(!0), q && q !== F && W(q);
								const M = await (0, l.py)(q, re, D, $, z, new v(q, j ? `${$.location.pathname}${$.location.search}` : void 0));
								P.delete(p.BV);
								const V = P.toString();
								$.replace(E({}, $.location, {
									pathname: M,
									search: V
								}, ne ? {
									hash: ne
								} : {})), D.dispatch((0, _.WF)())
							}
						} catch (M) {
							D.dispatch((0, _.WF)()), console.error(M)
						} finally {
							re(!1)
						}
					};
					return (0, e.useEffect)(() => {
						se()
					}, [$.location.pathname, $.location.search]), (Z || (0, l.I3)(q)) && O ? null : I
				},
				k = t("../react/app/components/DeepLink/reducer.ts"),
				R = t("../react/app/components/DeepLink/selectors.ts"),
				U = A
		},
		"../react/app/components/DeepLink/reducer.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return l
				},
				r: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				a = t("../react/app/components/DeepLink/actions.ts");
			const l = null,
				i = r().from({
					lastAction: l,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function _(c = i, u) {
				if (u.type === a.MF.RESOLVING_COMPLETE) return i;
				if (u.type === a.MF.RESOLVING_START) return c.set("isResolving", !0);
				if (c.isResolving) {
					if (u.type === a.MF.RESOLVING_COMPLETE) return c.set("isResolving", !1);
					if (u.type === a.MF.SET_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", u.accountIds);
					if (u.type === a.MF.DELETE_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", void 0);
					{
						let g = c;
						try {
							g = c.set("lastAction", u)
						} catch {
							g = c.set("lastAction", {
								type: u.type
							})
						}
						return g
					}
				} else return c
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return a
				},
				dd: function() {
					return r
				},
				yI: function() {
					return e
				}
			});
			const e = l => l.deepLink.lastAction,
				r = l => l.deepLink.isResolving,
				a = l => l.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				I3: function() {
					return g
				},
				X1: function() {
					return c
				},
				mL: function() {
					return d
				},
				py: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../react/app/components/DeepLink/reducer.ts"),
				a = t("../react/app/components/DeepLink/selectors.ts"),
				l = t("../react/app/components/DeepLink/constants.ts"),
				i = t("../react/common/validators/index.js"),
				_ = t("../react/common/utils/isGuards.ts");
			const c = p => (0, i.Lb)(p) && (p.split(".").length > 1 || (0, _.v5)(p)),
				u = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				g = p => typeof p == "string" && p.startsWith("/"),
				n = (p, b) => T => new Promise((E, m) => {
					b.start();
					const C = p.subscribe(() => {
						const f = (0, a.yI)(p.getState());
						f === r.E ? (b.cancel(), C(), m("DeepLink: waitForAction out of context.")) : T(f) && (b.finish(f.type), C(), E(f))
					})
				}),
				o = (p, b, T) => (E, m) => new Promise((C, f) => {
					T.start();
					const w = b.location.pathname;
					E = new URL(E, window.location.href).pathname, w !== E && (T.cancel(), f(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${E}", but on "${w}". You need to redirect to "${E}", and unblockRouter in your Resolver, before you use this function.`));
					const A = p.subscribe(() => {
						const k = (0, a.yI)(p.getState()),
							R = b.location.pathname,
							I = new URLSearchParams(b.location.search).get(l.BV);
						(R !== E || !!I) && (T.cancel(), A(), f(`DeepLink: waitForPageAction user navigated away from "${E}" to "${R}${I?b.location.search:""}"`)), k === r.E ? (T.cancel(), A(), f("DeepLink: waitForPageAction out of context.")) : m(k) && (T.finish(k.type), A(), C(k))
					})
				});

			function s(p) {
				const b = [],
					T = p.split("?")[0].split("/");
				for (let E of T) E.length !== 0 && (E.startsWith(":") ? b.push({
					value: E.substring(1),
					type: "dynamic"
				}) : b.push({
					value: E,
					type: "static"
				}));
				return b
			}
			async function v(p, b, T, E, m, C) {
				C.start();
				const f = s(p),
					A = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					k = {};
				let R = "";
				for (const [U, I] of f.entries())
					if (I.type === "static") R = [R, I.value].join("/");
					else if (I.type === "dynamic" && u.is(I.value) && I.value in A) {
					C.resolverStart(I.value);
					const D = await A[I.value]({
						deepLink: p,
						blockRouter: () => b(!0),
						unblockRouter: () => b(!1),
						routerHistory: E,
						resolvedValues: k,
						store: T,
						referringRoute: m,
						uri: {
							currentPartIdx: U,
							parts: f
						},
						waitForAction: n(T, C.createUserActionTracker(I.value)),
						waitForPageAction: o(T, E, C.createUserActionTracker(I.value))
					});
					C.resolverDone(I.value), R = [R, D].join("/"), k[I.value] = D
				} else throw C.cancel(), new Error(`DeepLink: Resolver with name '${I.value}' is not supported.`);
				return C.done(), R
			}

			function d(p, b) {
				const T = ":account",
					E = ":zone",
					m = b.get("zone");
				if (m) return b.delete("zone"), `/${T}/${E}/${m}`;
				const C = b.get("account");
				if (C) return b.delete("account"), `/${T}/${C}`;
				if (p === "/overview") return `/${T}/${E}`;
				const f = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const w of f) {
					const A = w.length;
					if (p.startsWith(w) && (p.length === A || p[A] === "/")) return `/${T}/${E}${p}`
				}
				switch (p) {
					case "/account/billing":
						return `/${T}/billing`;
					case "/account/subscriptions":
						return `/${T}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${T}/dns-firewall`;
					case "/account/audit-log":
						return `/${T}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				l = t("../react/app/components/SomethingWrong.jsx"),
				i = t("../utils/sentry/lastSentEventId.ts"),
				_ = t("../react/utils/zaraz.ts"),
				c = t("../react/utils/url.ts"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				g = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(o),
				v = t("../react/common/components/Page.tsx"),
				d = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function p() {
				return (0, e.useEffect)(() => {
					s().sendEvent("new page available refresh cta")
				}, []), r().createElement(v.Z, {
					type: "narrow"
				}, r().createElement(u.ZC, {
					textAlign: "center"
				}, r().createElement(u.H1, {
					fontSize: 5,
					fontWeight: 400
				}, r().createElement(n.Trans, {
					id: "error.new_page_version_available.title"
				})), r().createElement(n.Trans, {
					id: "error.new_page_version_available.description"
				}), r().createElement(u.ZC, null, r().createElement(u.Ei, {
					height: 116,
					src: d,
					"aria-hidden": !0
				})), r().createElement(g.zx, {
					mt: 3,
					type: "primary",
					iconType: "refresh",
					onClick: () => window.location.reload()
				}, r().createElement(n.Trans, {
					id: "common.refresh"
				}))))
			}
			const b = ({
				sentryTag: T,
				children: E,
				fallbackComponent: m
			}) => r().createElement(a.SV, {
				beforeCapture: C => {
					_.tg === null || _.tg === void 0 || _.tg.track("page-error", {
						page: (0, c.Fl)(window.location.pathname)
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
					if (m) return m;
					const A = i.e.getEventId() || f;
					return (C == null || (w = C.message) === null || w === void 0 ? void 0 : w.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), r().createElement(p, null)) : r().createElement(l.Z, {
						type: "page",
						error: C,
						eventId: A,
						sentryTag: T
					})
				}
			}, E)
		},
		"../react/app/components/Footer.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return x
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(c),
				g = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				o = t("../react/utils/translator.tsx"),
				s = t("../../../../node_modules/moment/moment.js"),
				v = t.n(s);
			const d = () => {
					const O = v()().format("YYYY"),
						P = j => {
							u().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: j
							})
						};
					return r().createElement(p, {
						marginTop: "auto"
					}, r().createElement(b, null, r().createElement(T, null, r().createElement(E, null, "\xA9 ", O, " Cloudflare, Inc."), r().createElement(E, null, r().createElement(m, null, r().createElement(C, {
						showOnDeskTop: !1
					}, r().createElement(f, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => P("Support")
					}, r().createElement(o.cC, {
						id: "common.support"
					}))), r().createElement(C, null, r().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => P("Privacy Policy")
					}, r().createElement(o.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(C, null, r().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => P("Terms of Use")
					}, r().createElement(o.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(C, null, r().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => P("Cookie Preferences")
					}, r().createElement(o.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(C, null, r().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => P("Trademark")
					}, r().createElement(o.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(m, null, r().createElement(C, null, r().createElement(f, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => P("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(o.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				p = (0, i.createComponent)(({
					theme: O,
					marginTop: P
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: P
				})),
				b = (0, i.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				T = (0, i.createComponent)(({
					theme: O
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${O.space[3]}px`
					}
				})),
				E = (0, i.createComponent)(({
					theme: O
				}) => ({
					width: "100%",
					color: O.colors.white,
					fontSize: O.fontSizes[1],
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
				m = (0, i.createComponent)(({
					theme: O
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: O.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				C = (0, i.createComponent)(({
					showOnDeskTop: O = !0,
					theme: P
				}) => ({
					color: P.colors.white,
					fontSize: P.fontSizes[1],
					height: "20px",
					display: O ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: P.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: P.space[3],
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
				f = (0, i.createStyledComponent)(({
					theme: O
				}) => ({
					textDecoration: "none",
					color: O.colors.white,
					"&:hover": {
						color: O.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var w = d,
				A = t("../react/pages/welcome/routes.ts"),
				k = t("../react/utils/cookiePreferences.ts"),
				R = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				I = () => {
					const [O, P] = (0, e.useState)(!1), j = (0, k.wV)(), q = () => {
						P(!0)
					}, ne = () => {
						P(!1)
					}, se = j && j === "US" ? (0, o.ZP)("footer.cpra_cta.privacy_choices") : (0, o.ZP)("footer.cpra_cta.cookie_preferences"), M = {
						background: "transparent",
						borderRadius: "none",
						color: O ? (0, _.Yc)() ? "#ee730a" : "#003681" : (0, _.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: O ? "underline" : "none",
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
					return r().createElement(l.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: M,
						onMouseEnter: q,
						onMouseLeave: ne
					}, r().createElement(l.Ei, {
						height: 15,
						src: R,
						mr: 2,
						alt: se
					}), se)
				};

			function D() {
				return D = Object.assign ? Object.assign.bind() : function(O) {
					for (var P = 1; P < arguments.length; P++) {
						var j = arguments[P];
						for (var q in j) Object.prototype.hasOwnProperty.call(j, q) && (O[q] = j[q])
					}
					return O
				}, D.apply(this, arguments)
			}

			function $(O, P) {
				if (O == null) return {};
				var j = z(O, P),
					q, ne;
				if (Object.getOwnPropertySymbols) {
					var se = Object.getOwnPropertySymbols(O);
					for (ne = 0; ne < se.length; ne++) q = se[ne], !(P.indexOf(q) >= 0) && (!Object.prototype.propertyIsEnumerable.call(O, q) || (j[q] = O[q]))
				}
				return j
			}

			function z(O, P) {
				if (O == null) return {};
				var j = {},
					q = Object.keys(O),
					ne, se;
				for (se = 0; se < q.length; se++) ne = q[se], !(P.indexOf(ne) >= 0) && (j[ne] = O[ne]);
				return j
			}
			const Z = (0, i.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,_.Yc)()?_.rS.colors.orange[6]:_.rS.colors.blue[4]}`
					}
				}), l.A),
				re = (0, i.createStyledComponent)(({
					theme: O
				}) => ({
					color: O.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, g.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: O.colors.gray[4]
					}
				}), l.A),
				te = O => {
					let {
						onClick: P
					} = O, j = $(O, ["onClick"]);
					return React.createElement(Z, D({
						onClick: q => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: j.href
							}), P && P(q)
						}
					}, j))
				},
				H = O => {
					let {
						children: P,
						target: j,
						rel: q
					} = O, ne = $(O, ["children", "target", "rel"]);
					return r().createElement(re, D({
						target: j || "_blank",
						rel: q || "noopener noreferrer"
					}, ne), P)
				},
				F = (0, i.createStyledComponent)(({
					theme: O
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, g.tq)() ? "8px" : "16px",
					"& > li": {
						listStyleType: "none",
						"& > a": {
							fontSize: O.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: O.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), l.Ul),
				W = (0, i.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, g.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), l.ZC);
			var x = () => {
				const O = [A.d.root.pattern].some(j => (0, a.matchPath)(location.pathname, {
					path: j
				}));
				if ((0, n.PP)()) return r().createElement(w, null);
				if (O) return null;
				const P = new Date().getFullYear();
				return r().createElement(l.$_, {
					height: (0, g.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto",
					id: "site-footer"
				}, r().createElement(W, null, r().createElement(F, null, r().createElement(l.Li, null, r().createElement(H, {
					href: "https://support.cloudflare.com"
				}, (0, o.ZP)("common.support"))), r().createElement(l.Li, null, r().createElement(H, {
					href: "https://www.cloudflarestatus.com"
				}, r().createElement(l.Dr, {
					textTransform: "capitalize"
				}, (0, o.ZP)("footer.system_status")))), r().createElement(l.Li, null, r().createElement(H, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, o.ZP)("footer.careers"))), r().createElement(l.Li, null, r().createElement(H, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, o.ZP)("footer.tos_reduced"))), r().createElement(l.Li, null, r().createElement(H, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, o.ZP)("footer.security_issues"))), r().createElement(l.Li, null, r().createElement(H, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, o.ZP)("footer.privacy_policy"))), r().createElement(l.Li, null, r().createElement(I, null)), r().createElement(l.Li, null, r().createElement(l.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", P, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(K, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/components/ErrorStatus.tsx"),
				l = t("../react/utils/translator.tsx");
			const i = _ => r().createElement(a.Z, _, (0, l.ZP)("error.forbidden"));
			y.Z = i
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return b
				},
				Z: function() {
					return se
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = t.n(u),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				o = t("../react/common/components/AccessControl/index.js"),
				s = t("../react/common/components/ButtonWithDropdown.tsx"),
				v = t("../react/common/components/Dropdown/index.tsx"),
				d = t("../react/utils/translator.tsx"),
				p = t("../react/common/hooks/useGate.ts");
			const b = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				T = () => {
					const M = (0, p.Z)("super-add-button-copy-change"),
						V = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: b.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: b.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: b.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: b.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: b.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: b.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch (M) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: b.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...V];
						case "existing-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
								},
								trackingEvent: b.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...V];
						case "existing-site":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site"
								},
								trackingEvent: b.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...V];
						case "your-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
								},
								trackingEvent: b.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...V];
						case "your-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
								},
								trackingEvent: b.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...V];
						default:
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title"
								},
								trackingEvent: b.EXISTING_DOMAIN,
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
								trackingEvent: b.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/registrar/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: b.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: b.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: b.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: b.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: b.ACCOUNT_MEMBERS,
								icon: "user-outline",
								url: "?to=/:account/members/invite",
								description: {
									id: "onboarding.add_product.account_member.description"
								},
								permissionCheck: "#member:edit"
							}]
					}
				},
				E = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: b.EXISTING_DOMAIN,
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
					trackingEvent: b.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/registrar/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: b.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: b.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: b.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: b.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: b.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var m = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function C(M) {
				for (var V = 1; V < arguments.length; V++) {
					var L = arguments[V] != null ? Object(arguments[V]) : {},
						Y = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(L).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(L, ae).enumerable
					})), Y.forEach(function(ae) {
						f(M, ae, L[ae])
					})
				}
				return M
			}

			function f(M, V, L) {
				return V = w(V), V in M ? Object.defineProperty(M, V, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[V] = L, M
			}

			function w(M) {
				var V = A(M, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function A(M, V) {
				if (typeof M != "object" || M === null) return M;
				var L = M[Symbol.toPrimitive];
				if (L !== void 0) {
					var Y = L.call(M, V || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(M)
			}

			function k() {
				return k = Object.assign ? Object.assign.bind() : function(M) {
					for (var V = 1; V < arguments.length; V++) {
						var L = arguments[V];
						for (var Y in L) Object.prototype.hasOwnProperty.call(L, Y) && (M[Y] = L[Y])
					}
					return M
				}, k.apply(this, arguments)
			}

			function R(M, V) {
				if (M == null) return {};
				var L = U(M, V),
					Y, ae;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(M);
					for (ae = 0; ae < pe.length; ae++) Y = pe[ae], !(V.indexOf(Y) >= 0) && (!Object.prototype.propertyIsEnumerable.call(M, Y) || (L[Y] = M[Y]))
				}
				return L
			}

			function U(M, V) {
				if (M == null) return {};
				var L = {},
					Y = Object.keys(M),
					ae, pe;
				for (pe = 0; pe < Y.length; pe++) ae = Y[pe], !(V.indexOf(ae) >= 0) && (L[ae] = M[ae]);
				return L
			}
			const I = M => {
					let {
						title: V,
						trackingEvent: L,
						icon: Y,
						url: ae,
						description: pe,
						disabled: de
					} = M, fe = R(M, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return r().createElement(D, k({
						to: !de && ae || "#",
						"aria-disabled": de,
						onClick: () => {
							g().sendEvent(L, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, fe), r().createElement(l.ZC, {
						display: "flex"
					}, r().createElement(a.J, {
						type: Y,
						size: 24,
						mr: 2,
						mt: 1
					}), r().createElement(l.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, r().createElement(l.ZC, {
						fontSize: 3
					}, r().createElement(d.cC, V)), r().createElement(l.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, r().createElement(d.cC, pe)))))
				},
				D = (0, n.createStyledComponent)(({
					theme: M
				}) => {
					const V = {
						cursor: "pointer",
						backgroundColor: (0, _.Yc)() ? M.colors.gray[8] : M.colors.gray[9],
						color: M.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: M.colors.background,
						color: M.colors.gray[2],
						fontSize: M.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': V,
						':focus-within:not([aria-disabled="true"])': C({}, V, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: M.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, m.Link);
			var $ = I;

			function z() {
				return z = Object.assign ? Object.assign.bind() : function(M) {
					for (var V = 1; V < arguments.length; V++) {
						var L = arguments[V];
						for (var Y in L) Object.prototype.hasOwnProperty.call(L, Y) && (M[Y] = L[Y])
					}
					return M
				}, z.apply(this, arguments)
			}

			function Z(M) {
				for (var V = 1; V < arguments.length; V++) {
					var L = arguments[V] != null ? Object(arguments[V]) : {},
						Y = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(L).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(L, ae).enumerable
					})), Y.forEach(function(ae) {
						re(M, ae, L[ae])
					})
				}
				return M
			}

			function re(M, V, L) {
				return V = te(V), V in M ? Object.defineProperty(M, V, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[V] = L, M
			}

			function te(M) {
				var V = H(M, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function H(M, V) {
				if (typeof M != "object" || M === null) return M;
				var L = M[Symbol.toPrimitive];
				if (L !== void 0) {
					var Y = L.call(M, V || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(M)
			}

			function F(M, V) {
				if (M == null) return {};
				var L = W(M, V),
					Y, ae;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(M);
					for (ae = 0; ae < pe.length; ae++) Y = pe[ae], !(V.indexOf(Y) >= 0) && (!Object.prototype.propertyIsEnumerable.call(M, Y) || (L[Y] = M[Y]))
				}
				return L
			}

			function W(M, V) {
				if (M == null) return {};
				var L = {},
					Y = Object.keys(M),
					ae, pe;
				for (pe = 0; pe < Y.length; pe++) ae = Y[pe], !(V.indexOf(ae) >= 0) && (L[ae] = M[ae]);
				return L
			}
			const B = "GLOBAL_ADD_DROPDOWN",
				x = (0, n.createStyledComponent)(({
					theme: M
				}) => ({
					"background-color": M.colors.blue[5]
				}), i.zx),
				O = ({
					disableProducts: M
				}) => {
					const V = T();
					return (0, e.useEffect)(() => (g().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						g().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), r().createElement(s.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0",
						bottom: "auto",
						zIndex: 1200,
						minWidth: 240
					}, V.map(L => {
						const Y = L || {},
							{
								disableOn: ae,
								permissionCheck: pe
							} = Y,
							de = F(Y, ["disableOn", "permissionCheck"]),
							fe = ae && M[ae],
							oe = Z({}, de, {
								disabled: fe
							});
						return pe ? r().createElement(o.Z, {
							key: L.title.id,
							edit: pe
						}, ({
							isEditable: Oe
						}) => Oe && r().createElement($, oe)) : r().createElement($, z({
							key: L.url
						}, oe))
					}))
				},
				P = ({
					disableProducts: M,
					topNavType: V
				}) => {
					const L = () => (0, c.tq)() || V === "icon-only" ? r().createElement(l.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, r().createElement(x, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : V === "text-icon" || V === "icon-only-with-add-button" ? r().createElement(i.zx, {
						type: "primary",
						mr: V === "text-icon" ? 2 : 3
					}, r().createElement(r().Fragment, null, r().createElement(a.J, {
						label: "plus",
						type: "plus"
					}), " ", r().createElement(d.cC, {
						id: "common.add"
					}))) : r().createElement(i.zx, {
						type: "primary",
						mr: 2
					}, r().createElement(d.cC, {
						id: "common.add"
					}), " ", r().createElement(a.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return r().createElement(j, {
						role: "group",
						"data-testid": B
					}, r().createElement(v.Lt, {
						trigger: V === "baseline" ? r().createElement(q, null, r().createElement(a.J, {
							label: "plus",
							type: "plus"
						}), !(0, c.tq)() && r().createElement(r().Fragment, null, r().createElement(d.cC, {
							id: "common.add"
						}), " ", r().createElement(a.J, {
							label: "arrow",
							type: "caret-down"
						}))) : L(),
						menu: r().createElement(O, {
							disableProducts: M
						})
					}))
				},
				j = (0, n.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				q = (0, n.createStyledComponent)(({
					theme: M
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: M.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, _.Yc)() ? M.colors.gray[1] : M.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, _.Yc)() ? M.colors.gray[8] : M.colors.gray[9]
					}
				}), l.zx);
			var ne = P,
				se = ne
		},
		"../react/app/components/LoadingSuspense.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				i = t("../react/utils/translator.tsx"),
				_ = t("../react/app/components/ErrorStatus.tsx"),
				c = t("../react/common/components/EmptyPage.jsx"),
				u = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const g = "suspenseComplete";

			function n() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(g))
				}, [])
			}

			function o(T) {
				useEventListener(g, () => {
					window.setTimeout(T, 0)
				}, {
					target: window
				})
			}

			function s(...T) {
				const [E, m] = T;
				React.useLayoutEffect(E, m), o(E)
			}

			function v(T) {
				const [E, m] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const C = window.setTimeout(() => m(!0), T);
					return () => window.clearTimeout(C)
				}, []), E
			}
			const d = ({
				loadingTimeout: T = 1e3,
				stillLoadingTimeout: E = 9e3
			}) => {
				const m = v(T),
					C = v(E);
				if (n(), !m && !C) return r().createElement(c.Z, null);
				const f = C ? r().createElement(i.cC, {
					id: "common.still_loading"
				}) : m ? r().createElement(i.cC, {
					id: "common.loading"
				}) : null;
				return r().createElement(_.Z, {
					size: 5
				}, r().createElement(l.ZC, {
					mr: 3
				}, r().createElement(a.g, {
					size: "2x"
				})), f)
			};
			var b = ({
				children: T
			}) => r().createElement(e.Suspense, {
				fallback: r().createElement(d, null)
			}, T)
		},
		"../react/app/components/Persistence/api.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				C8: function() {
					return u
				},
				Mn: function() {
					return s
				},
				Sp: function() {
					return o
				},
				dr: function() {
					return i
				},
				lt: function() {
					return _
				},
				m6: function() {
					return n
				},
				n: function() {
					return g
				},
				yl: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const a = "/persistence/user",
				l = async () => {
					try {
						return await (await e.get(a, {
							hideErrorAlert: !0
						})).body
					} catch (v) {
						console.error(v)
					}
				}, i = async v => {
					try {
						return await (await e.get(`/accounts/${v}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (d) {
						console.error(d)
					}
				}, _ = async (v, d) => {
					try {
						return await (await e.post(`${a}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: v,
								accountId: d
							}),
							hideErrorAlert: !0
						})).body
					} catch (p) {
						return console.error(p), []
					}
				}, c = async (v, d) => {
					try {
						return await http.post(`/accounts/${v}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: d
							}),
							hideErrorAlert: !0
						}), !0
					} catch (p) {
						return console.error(p), !1
					}
				}, u = async v => {
					try {
						return await (await e.post(a, {
							body: JSON.stringify({
								darkMode: v
							})
						})).body
					} catch (d) {
						console.error(d)
					}
				}, g = async v => {
					try {
						return await (await e.post(`${a}/recents`, {
							body: JSON.stringify(v),
							hideErrorAlert: !0
						})).body
					} catch (d) {
						console.error(d)
					}
				}, n = async v => {
					try {
						return await (await e.post(`${a}/viewed-changes`, {
							body: JSON.stringify(v),
							hideErrorAlert: !0
						})).body
					} catch (d) {
						throw console.error(d), d
					}
				}, o = async v => {
					try {
						return await (await e.post(a + "/flags", {
							body: JSON.stringify(v)
						})).body
					} catch (d) {
						throw console.error(d), d
					}
				}, s = async (v, d) => {
					try {
						return await (await e.post(`${a}/dismissed-tasks`, {
							body: JSON.stringify({
								name: v,
								accountId: d
							}),
							hideErrorAlert: !0
						})).body
					} catch (p) {
						throw console.error(p), p
					}
				}
		},
		"../react/app/components/Persistence/hooks.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				y: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/components/Persistence/index.tsx");
			const l = () => (0, e.useContext)(a.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				Wl: function() {
					return g
				},
				lp: function() {
					return T
				},
				Z_: function() {
					return m
				},
				r7: function() {
					return D
				},
				Tv: function() {
					return W
				},
				yZ: function() {
					return C.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(l),
				_ = t("../react/utils/bootstrap.ts"),
				c = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/Persistence/api.ts");
			const g = 10;
			var n = t("../react/common/hooks/useActiveState.ts");

			function o(B) {
				for (var x = 1; x < arguments.length; x++) {
					var O = arguments[x] != null ? Object(arguments[x]) : {},
						P = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(O).filter(function(j) {
						return Object.getOwnPropertyDescriptor(O, j).enumerable
					})), P.forEach(function(j) {
						s(B, j, O[j])
					})
				}
				return B
			}

			function s(B, x, O) {
				return x = v(x), x in B ? Object.defineProperty(B, x, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[x] = O, B
			}

			function v(B) {
				var x = d(B, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function d(B, x) {
				if (typeof B != "object" || B === null) return B;
				var O = B[Symbol.toPrimitive];
				if (O !== void 0) {
					var P = O.call(B, x || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(B)
			}
			const p = {
					darkMode: "off",
					dismissedTasks: [],
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: [],
					flags: {
						hasEnabledSecurityNavigation: !1
					}
				},
				b = o({}, p, {
					isLoading: !0,
					remainingStarSlots: 10,
					isUpdatingFlags: !1,
					actions: {
						starZone: () => null,
						setDarkMode: () => null,
						isZoneStarred: () => !1,
						canAccountStarZone: () => !0,
						logRouteVisited: () => null,
						viewChange: () => null,
						toggleSecurityNavigation: () => null,
						dismissTask: () => null
					}
				}),
				T = (0, e.createContext)(b),
				E = T.Consumer,
				m = ({
					children: B,
					onDarkModeChangeCb: x
				}) => {
					const [O, P] = (0, e.useState)(p), [j, q] = (0, e.useState)(b.isLoading), [ne, se] = (0, e.useState)(!1), M = (0, _.$8)(), V = (0, a.p4)(de => (0, c.wH)(de)), [, L] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						M ? (0, u.yl)().then(de => {
							if (de) {
								var fe;
								P(de), L(de == null || (fe = de.flags) === null || fe === void 0 ? void 0 : fe.hasEnabledSecurityNavigation), i().identify({
									hasEnabledSecurityNavigation: de.flags.hasEnabledSecurityNavigation
								}), x(de.darkMode)
							}
						}).finally(() => q(!1)) : q(!1)
					}, [M]);
					const Y = (de, fe) => !!O.favorites.find(oe => oe.type === "zone" && oe.name === de && oe.accountId === fe),
						ae = g - O.favorites.length,
						pe = de => O.favorites.filter(oe => oe.type === "zone" && oe.accountId === de).length < g;
					return r().createElement(T.Provider, {
						value: o({}, O, {
							isLoading: j,
							remainingStarSlots: ae,
							isUpdatingFlags: ne,
							actions: {
								canAccountStarZone: pe,
								isZoneStarred: Y,
								starZone: async (de, fe) => {
									var oe;
									const Oe = !Y(de, fe),
										Se = pe(fe);
									if (Oe && !Se) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Me = await (0, u.lt)(de, fe);
									i().sendEvent("click star zone", {
										isStarring: Oe,
										totalStarredZones: Me.filter(je => je.accountId === fe && je.type === "zone").length,
										totalZones: V == null || (oe = V.paginationData) === null || oe === void 0 ? void 0 : oe.info.total_count
									}), P(o({}, O, {
										favorites: Me
									}))
								},
								toggleSecurityNavigation: async de => {
									se(!0), await (0, u.Sp)({
										hasEnabledSecurityNavigation: de
									}), i().identify({
										hasEnabledSecurityNavigation: de
									}), se(!1), L(de), P(o({}, O, {
										flags: {
											hasEnabledSecurityNavigation: de
										}
									}))
								},
								setDarkMode: async de => {
									const fe = await (0, u.C8)(de);
									P(fe), x(fe.darkMode)
								},
								logRouteVisited: async de => {
									var fe;
									const oe = await (0, u.n)(de);
									P((fe = oe) !== null && fe !== void 0 ? fe : o({}, O))
								},
								viewChange: async de => {
									const fe = await (0, u.m6)(de);
									P(o({}, O, {
										viewedChanges: fe
									}))
								},
								dismissTask: async (de, fe) => {
									const oe = await (0, u.Mn)(de, fe);
									P(o({}, O, {
										dismissedTasks: oe
									}))
								}
							}
						})
					}, B)
				};
			var C = t("../react/app/components/Persistence/hooks.ts"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				w = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function A() {
				return A = Object.assign ? Object.assign.bind() : function(B) {
					for (var x = 1; x < arguments.length; x++) {
						var O = arguments[x];
						for (var P in O) Object.prototype.hasOwnProperty.call(O, P) && (B[P] = O[P])
					}
					return B
				}, A.apply(this, arguments)
			}

			function k(B, x) {
				if (B == null) return {};
				var O = R(B, x),
					P, j;
				if (Object.getOwnPropertySymbols) {
					var q = Object.getOwnPropertySymbols(B);
					for (j = 0; j < q.length; j++) P = q[j], !(x.indexOf(P) >= 0) && (!Object.prototype.propertyIsEnumerable.call(B, P) || (O[P] = B[P]))
				}
				return O
			}

			function R(B, x) {
				if (B == null) return {};
				var O = {},
					P = Object.keys(B),
					j, q;
				for (q = 0; q < P.length; q++) j = P[q], !(x.indexOf(j) >= 0) && (O[j] = B[j]);
				return O
			}
			const U = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var D = B => {
					let {
						isStarred: x,
						size: O = 16
					} = B, P = k(B, ["isStarred", "size"]);
					const j = U[(0, f.Yc)() ? "dark" : "light"];
					return r().createElement(w.J, A({
						type: x ? "star" : "star-outline",
						color: x ? j.gold : j.gray,
						size: O
					}, P))
				},
				$ = t("../node_modules/@cloudflare/elements/es/index.js");

			function z(B) {
				for (var x = 1; x < arguments.length; x++) {
					var O = arguments[x] != null ? Object(arguments[x]) : {},
						P = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(O).filter(function(j) {
						return Object.getOwnPropertyDescriptor(O, j).enumerable
					})), P.forEach(function(j) {
						Z(B, j, O[j])
					})
				}
				return B
			}

			function Z(B, x, O) {
				return x = re(x), x in B ? Object.defineProperty(B, x, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[x] = O, B
			}

			function re(B) {
				var x = te(B, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function te(B, x) {
				if (typeof B != "object" || B === null) return B;
				var O = B[Symbol.toPrimitive];
				if (O !== void 0) {
					var P = O.call(B, x || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(B)
			}
			const H = {
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
			var W = (0, e.forwardRef)(({
				featurePreview: B = !1,
				isStarred: x,
				onClickFn: O,
				isDisabled: P,
				testId: j,
				buttonText: q,
				size: ne = "large",
				variant: se = "pill"
			}, M) => {
				const [V, L] = (0, e.useState)(!1), Y = H[(0, f.Yc)() ? "dark" : "light"][x && !B ? "active" : "default"], ae = z({}, ne === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, ne === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, ne === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), pe = {
					pill: "50vh",
					button: 4
				};
				return r().createElement($.zx, {
					onMouseEnter: () => L(!0),
					onMouseLeave: () => L(!1),
					innerRef: M,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: ae.paddingRight,
					gap: 1,
					pl: ae.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: pe[se],
					border: "1px solid",
					cursor: B || P ? "default" : "pointer",
					backgroundColor: V ? Y.bgHover : Y.bg,
					color: Y.text,
					borderColor: Y.border,
					onClick: O,
					opacity: P ? .5 : 1,
					disabled: P,
					fontSize: ae.fontSize,
					height: ae.height,
					"data-testid": j
				}, r().createElement(D, {
					isStarred: B ? !1 : x,
					size: ae.starIconSize
				}), q)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				iY: function() {
					return E
				},
				us: function() {
					return D
				},
				wB: function() {
					return m
				},
				gw: function() {
					return re
				},
				dL: function() {
					return A
				},
				IU: function() {
					return w
				},
				Wq: function() {
					return z
				},
				fO: function() {
					return $
				},
				zJ: function() {
					return I
				},
				o_: function() {
					return U
				},
				jq: function() {
					return te
				},
				hv: function() {
					return f
				},
				$n: function() {
					return C
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				l = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/utils/zoneLevelAccess.ts"),
				_ = t("../react/pages/stream/selectors.ts"),
				c = t("../react/pages/home/domain-registration/selectors.ts"),
				u = t("../react/pages/images/selectors.ts");
			const g = "r2_migrator_waitlist",
				n = "r2migrator",
				o = "r2",
				s = "r2_storage_migrator",
				v = "r2_storage_migrator",
				d = H => getAccountEntitlement(H, "r2.enabled"),
				p = H => Boolean((0, a.Le)(H, s, g)),
				b = H => Boolean(getAccountFlipperFlagsChanges(H, v, n)),
				T = H => !!(0, i.b)(H),
				E = H => T(H) ? (0, e.hT)(H) : !0,
				m = (H, F, W, B = "read") => {
					const x = (0, a.nA)(H);
					return T(H) ? (0, e.WL)(H, (0, e.W9)(W, e.ZZ[B]), (0, e.j)(x == null ? void 0 : x.id)) : (0, l.Yj)(H)(F)[B]
				},
				C = (H, F, W, B = "read") => {
					const x = (0, a.nA)(H),
						O = e.zs.includes(W);
					return T(H) ? (0, e.WL)(H, O ? W : (0, e.my)(W, e.ZZ[B === "edit" ? "update" : B]), (0, e.j)(x == null ? void 0 : x.id)) : (0, l.Yj)(H)(F)[B === "update" ? "edit" : B]
				},
				f = H => !!(0, _._Q)(H),
				w = H => (0, u.pT)(H),
				A = H => (0, u.pT)(H) && (0, u.GH)(H),
				k = H => sourcingKitEnabledSelector(H),
				R = H => !!r2EnabledSelector(H),
				U = H => p(H),
				I = H => (0, r.$f)(H, "rulesets.magic_transit_allowed"),
				D = H => (0, r.$f)(H, "flowtrackd.magic_custom_config_allowed"),
				$ = H => (0, r.$f)(H, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				z = H => (0, l.Le)(H, "ddos_protection", "l4_rulesets"),
				Z = H => hasAccountEntitlements(H, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				re = H => (0, c.HO)(H),
				te = H => !(0, r.yD)(H) && !!C(H, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function(K, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(a),
				i = t("../../../../node_modules/prop-types/index.js"),
				_ = t.n(i),
				c = t("webpack/sharing/consume/default/react-redux/react-redux"),
				u = t.n(c),
				g = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(g),
				o = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				s = t("../node_modules/@cloudflare/component-button/es/index.js"),
				v = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				d = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				p = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				b = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				T = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = t.n(T),
				m = t("../react/common/actions/membershipActions.ts"),
				C = t("../react/utils/url.ts"),
				f = t("../react/app/components/Footer.tsx");

			function w(F) {
				for (var W = 1; W < arguments.length; W++) {
					var B = arguments[W] != null ? Object(arguments[W]) : {},
						x = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(B).filter(function(O) {
						return Object.getOwnPropertyDescriptor(B, O).enumerable
					})), x.forEach(function(O) {
						A(F, O, B[O])
					})
				}
				return F
			}

			function A(F, W, B) {
				return W = k(W), W in F ? Object.defineProperty(F, W, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[W] = B, F
			}

			function k(F) {
				var W = R(F, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function R(F, W) {
				if (typeof F != "object" || F === null) return F;
				var B = F[Symbol.toPrimitive];
				if (B !== void 0) {
					var x = B.call(F, W || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)(F)
			}
			const U = (0, o.createComponent)(({
					type: F
				}) => ({
					height: F !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				I = (0, o.createComponent)(({
					theme: F,
					margin: W,
					size: B = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: F.colors.gray[3],
					height: W ? "auto" : "100%",
					padding: W ? 0 : F.space[B > 1 ? B - 2 : 0],
					margin: W,
					justifyContent: "center",
					alignItems: "center"
				})),
				D = (0, o.createComponent)(() => ({
					textAlign: "left"
				})),
				$ = (0, o.createComponent)(() => ({
					textAlign: "right"
				})),
				z = (0, o.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[6]
				})),
				Z = (0, o.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[4]
				})),
				re = (0, o.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[3]
				})),
				te = (0, o.createComponent)(({
					theme: F
				}) => ({
					width: "100%",
					height: 125,
					marginTop: F.space[4],
					padding: F.space[2]
				}), "textarea");
			class H extends r().Component {
				constructor(...W) {
					super(...W);
					A(this, "state", {
						value: "",
						submitted: !1
					}), A(this, "handleTextareaChange", B => {
						this.setState({
							value: B.target.value
						})
					}), A(this, "sendErrToSentry10", async () => {
						try {
							var B, x, O, P;
							const j = ((B = window) === null || B === void 0 || (x = B.bootstrap) === null || x === void 0 || (O = x.data) === null || O === void 0 || (P = O.user) === null || P === void 0 ? void 0 : P.id) || "Unknown",
								q = this.props.eventId || v.eW(),
								ne = {
									name: j,
									email: `${j}@userid.com`,
									comments: this.state.value,
									eventId: q,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: w({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(ne)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (j) {
							console.error(j)
						}
					}), A(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), A(this, "renderContent", B => r().createElement(g.I18n, null, x => r().createElement(U, {
						type: B
					}, r().createElement(I, null, r().createElement(D, null, r().createElement(z, null, x.t("error.internal_issues")), r().createElement(Z, null, x.t("error.help_us")), r().createElement(te, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: O => this.handleTextareaChange(O),
						disabled: this.state.submitted,
						placeholder: x.t("error.give_feedback")
					}), r().createElement($, null, !this.state.submitted && r().createElement(s.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, x.t("common.submit")), this.state.submitted && r().createElement(re, null, x.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: W,
						sentryTag: B,
						membershipsList: x
					} = this.props;
					console.error(`SomethingWrong: ${W}`);
					let O = "";
					const P = (0, C.e1)();
					if (P) {
						var j;
						const ne = await x({
								parameters: {
									status: "accepted"
								}
							}),
							se = ne == null || (j = ne.find(M => M.id === P)) === null || j === void 0 ? void 0 : j.roles;
						se && se.length && (O = se.join(", "))
					}
					const q = `ErrorBoundary - ${W}`;
					d.Tb(q, {
						tags: {
							errorBoundary: B,
							normalizedPath: (0, C.Fl)(window.location.pathname),
							roles: O.length ? O : void 0
						}
					}), E().sendEvent("something wrong", {
						error: W,
						roles: O.length ? O : void 0
					})
				}
				render() {
					const {
						type: W
					} = this.props;
					return W === "fullscreen" ? r().createElement("div", null, r().createElement(p.h4, null, r().createElement(a.Link, {
						to: "/"
					}, r().createElement(b.TR, null))), this.renderContent(W), r().createElement(f.Z, null)) : this.renderContent(W)
				}
			}
			H.propTypes = {
				type: _().oneOf(["fullscreen", "page"]),
				error: _().oneOfType([_().string, _().object]),
				eventId: _().string,
				sentryTag: _().string,
				membershipsList: _().func
			}, y.Z = (0, c.connect)(() => ({}), {
				membershipsList: m.YT
			})(H)
		},
		"../react/app/providers/storeContainer.js": function(K, y, t) {
			"use strict";
			t.d(y, {
				bh: function() {
					return $
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				r = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				a = t.n(r),
				l = t("../../../../node_modules/redux-thunk/es/index.js"),
				i = t("../../../../node_modules/redux-persist/es/index.js"),
				_ = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				c = t("../react/app/rootReducer.js"),
				u = t("../react/app/redux/normalizer.js"),
				g = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				o = t("../react/app/reducerRegistry.js"),
				s = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				v = t("../react/common/sagas/index.js"),
				d = t("../react/app/redux/processActionMiddleware.js"),
				p = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				b = t("../../../../node_modules/is-promise/index.js"),
				T = t.n(b);

			function E(z) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var re = arguments[Z] != null ? Object(arguments[Z]) : {},
						te = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(re).filter(function(H) {
						return Object.getOwnPropertyDescriptor(re, H).enumerable
					})), te.forEach(function(H) {
						m(z, H, re[H])
					})
				}
				return z
			}

			function m(z, Z, re) {
				return Z = C(Z), Z in z ? Object.defineProperty(z, Z, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[Z] = re, z
			}

			function C(z) {
				var Z = f(z, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function f(z, Z) {
				if (typeof z != "object" || z === null) return z;
				var re = z[Symbol.toPrimitive];
				if (re !== void 0) {
					var te = re.call(z, Z || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(z)
			}
			const w = {
					key: "cf-redux-store",
					storage: _.Z,
					whitelist: ["accountAccess", "invite"]
				},
				A = (0, s.ZP)(),
				R = [({
					dispatch: z
				}) => Z => re => T()(re) ? re.then(te => z(te)) : Z(re), A, l.Z, d.Z, u.qR],
				U = z => (0, i.Wq)(w, E({}, c.Z, z));

			function I() {
				const z = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					re = e.compose((0, e.applyMiddleware)(...R), g.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					te = {},
					H = (0, e.createStore)(U(o.Z.getReducers()), te, re);
				A.run(v.Z), (0, i.p5)(H);
				const W = (t.g.bootstrap || {}).data || {};
				return H.dispatch((0, p.mW)("user", W.user)), H
			}
			let D;
			o.Z.setChangeListener(z => {
				var Z;
				D && ((Z = D) === null || Z === void 0 ? void 0 : Z.replaceReducer) && (D.replaceReducer(U(z)), (0, i.p5)(D))
			});

			function $() {
				return D || (D = I()), D
			}
		},
		"../react/app/redux/index.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				TZ: function() {
					return a
				},
				UM: function() {
					return i
				},
				ZS: function() {
					return l
				},
				p4: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e);
			const a = () => (0, e.useStore)(),
				l = () => a().getState(),
				i = () => (0, e.useDispatch)(),
				_ = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(K, y, t) {
			"use strict";
			t.d(y, {
				$J: function() {
					return s
				},
				Oy: function() {
					return o
				},
				SC: function() {
					return g
				},
				ZP: function() {
					return v
				},
				dJ: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				a = t.n(r);

			function l(d) {
				for (var p = 1; p < arguments.length; p++) {
					var b = arguments[p] != null ? Object(arguments[p]) : {},
						T = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(b).filter(function(E) {
						return Object.getOwnPropertyDescriptor(b, E).enumerable
					})), T.forEach(function(E) {
						i(d, E, b[E])
					})
				}
				return d
			}

			function i(d, p, b) {
				return p = _(p), p in d ? Object.defineProperty(d, p, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = b, d
			}

			function _(d) {
				var p = c(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function c(d, p) {
				if (typeof d != "object" || d === null) return d;
				var b = d[Symbol.toPrimitive];
				if (b !== void 0) {
					var T = b.call(d, p || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const u = l({}, r),
				g = (d, p, b, T = {}) => {
					const E = d === "delete" ? "del" : d.toLowerCase();
					return b && E !== "del" && (T.body = b), u[E](p, T)
				},
				n = (d, p) => (d.meta.params = p, d),
				o = (d, p, b, T, {
					body: E = {}
				}) => {
					const {
						result: m,
						messages: C,
						result_info: f
					} = E, w = Object.values(p);
					if (d.meta.method === "delete") {
						const A = w[w.length - 1];
						d.meta.id = typeof A == "object" ? A.id : A
					}
					return d.payload = m, C && (d.meta.messages = C), w.length && (d.meta.params = p), f && (d.meta.paginationData = {
						info: f,
						actionParameters: w,
						options: b[0],
						insertionOffset: 0
					}), d
				},
				s = (d, p, b, T, E) => (d.payload = E && E.body && E.body.errors, d.meta.messages = E && E.body && E.body.messages, d.meta.params = p, d.apiError = E, d);

			function v(d, p, b, T) {
				const E = (0, e.RM)(d, p, b, T).apiFetch(g).on("start", n).on("success", o).on("error", s),
					m = E.mock;
				return E.mock = C => (m((...f) => {
					const w = C(...f);
					return w && typeof w == "object" && "result" in w ? w : {
						result: w
					}
				}), E), E
			}
		},
		"../react/app/redux/normalizer.js": function(K, y, t) {
			"use strict";
			t.d(y, {
				P1: function() {
					return g
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
				r = t("../react/pages/workers/entityTypes.ts"),
				a = t("../react/pages/email/types.ts"),
				l = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				i = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				_ = t.n(i);
			const c = i.static.from([{
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
					entityType: r.D.route
				}, {
					entityType: r.D.routes,
					to: r.D.route
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
					entityType: a.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: a.BB.rule,
					idProp: "tag"
				}, {
					entityType: a.BB.rules,
					to: a.BB.rule
				}, {
					entityType: a.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: a.BB.dstAddresses,
					to: a.BB.dstAddress
				}, {
					entityType: a.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: a.BB.dnsRecords,
					to: a.BB.dnsRecord
				}, {
					entityType: a.BB.zone,
					idProp: "tag"
				}]),
				u = o => o.entities,
				g = (...o) => (0, l.P1)(c, u, ...o),
				n = (0, l.QB)(c)
		},
		"../react/app/redux/utils.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				F: function() {
					return a
				},
				_: function() {
					return r
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const r = l => (i, _, c) => (0, e.SC)(i, _, c, {
					hideErrorAlert: !0
				}).catch(l),
				a = l => i => {
					if (i.status === l) return i;
					throw i
				}
		},
		"../react/common/actionTypes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Cm: function() {
					return _
				},
				Cz: function() {
					return r
				},
				HI: function() {
					return c
				},
				Li: function() {
					return g
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return a
				},
				Yc: function() {
					return o
				},
				gM: function() {
					return l
				},
				lV: function() {
					return i
				},
				s1: function() {
					return u
				}
			});
			const e = "NOTIFICATION_OPEN",
				r = "NOTIFICATION_CLOSE",
				a = "MODAL_OPEN",
				l = "MODAL_CLOSE",
				i = "TOGGLE_ON",
				_ = "TOGGLE_OFF",
				c = "SET_ACTIVE",
				u = "CLEAR_ACTIVE",
				g = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let o = function(s) {
				return s.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", s.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", s.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", s.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", s.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", s.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", s.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", s.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", s.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", s
			}({})
		},
		"../react/common/actions/activeActions.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				I: function() {
					return r
				},
				n: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = (l, i) => ({
					type: e.HI,
					activeKey: l,
					activeValue: i
				}),
				a = l => ({
					type: e.s1,
					activeKey: l
				})
		},
		"../react/common/actions/membershipActions.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return s
				},
				YT: function() {
					return g
				},
				ct: function() {
					return c
				},
				d6: function() {
					return n
				},
				kt: function() {
					return o
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/common/constants/index.ts");

			function a(v) {
				for (var d = 1; d < arguments.length; d++) {
					var p = arguments[d] != null ? Object(arguments[d]) : {},
						b = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(p).filter(function(T) {
						return Object.getOwnPropertyDescriptor(p, T).enumerable
					})), b.forEach(function(T) {
						l(v, T, p[T])
					})
				}
				return v
			}

			function l(v, d, p) {
				return d = i(d), d in v ? Object.defineProperty(v, d, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[d] = p, v
			}

			function i(v) {
				var d = _(v, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function _(v, d) {
				if (typeof v != "object" || v === null) return v;
				var p = v[Symbol.toPrimitive];
				if (p !== void 0) {
					var b = p.call(v, d || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(v)
			}
			const c = v => {
					const d = v.payload.map(p => a({}, p, {
						membershipId: p.id,
						id: p.account.id
					}));
					return a({}, v, {
						payload: d
					})
				},
				u = v => {
					const d = c(v);
					return Array.isArray(d.payload) ? a({}, v, {
						payload: d.payload[0]
					}) : a({}, v, {
						payload: null
					})
				},
				g = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", c),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				o = (...v) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: v
				}),
				s = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", u)
		},
		"../react/common/actions/modalActions.ts": function(K, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				closeModal: function() {
					return l
				},
				openModal: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = {
				replace: !0
			};

			function a(i, _, c = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: i,
						props: _
					},
					options: c
				}
			}

			function l(i) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: i
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(K, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				add: function() {
					return i
				},
				error: function() {
					return g
				},
				info: function() {
					return c
				},
				success: function() {
					return _
				},
				warn: function() {
					return u
				}
			});
			var e = t("../react/common/actionTypes.ts");

			function r(n) {
				return {
					type: e.Ng,
					notification: n
				}
			}

			function a(n) {
				return {
					type: e.Cz,
					notificationId: n
				}
			}
			let l = 0;

			function i(n, o, s = {}) {
				return s = s || {},
					function(v) {
						let d = l++,
							p = {
								id: d,
								type: n,
								message: o,
								delay: s.delay,
								persist: s.persist === void 0 ? !1 : s.persist,
								closable: s.closable === void 0 ? !0 : s.closable,
								onClose() {
									v(a(d)), s.onClose && s.onClose.apply(null, arguments)
								}
							};
						v(r(p))
					}
			}

			function _(n, o) {
				return i("success", n, o)
			}

			function c(n, o) {
				return i("info", n, o)
			}

			function u(n, o) {
				return i("warning", n, o)
			}

			function g(n, o) {
				return i("error", n, o)
			}
		},
		"../react/common/actions/userActions.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				BT: function() {
					return c
				},
				Ut: function() {
					return T
				},
				V_: function() {
					return E
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
					return m
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/app/redux/utils.ts");

			function a(f) {
				for (var w = 1; w < arguments.length; w++) {
					var A = arguments[w] != null ? Object(arguments[w]) : {},
						k = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(A).filter(function(R) {
						return Object.getOwnPropertyDescriptor(A, R).enumerable
					})), k.forEach(function(R) {
						l(f, R, A[R])
					})
				}
				return f
			}

			function l(f, w, A) {
				return w = i(w), w in f ? Object.defineProperty(f, w, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[w] = A, f
			}

			function i(f) {
				var w = _(f, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function _(f, w) {
				if (typeof f != "object" || f === null) return f;
				var A = f[Symbol.toPrimitive];
				if (A !== void 0) {
					var k = A.call(f, w || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(f)
			}
			const c = (0, e.C)("user").get`/user`,
				u = (0, e.C)("user").patch`/user`,
				g = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				o = (0, e.C)("user").post`/user/two_factor_authentication`,
				s = (0, e.C)("user").put`/user/two_factor_authentication`,
				v = (0, e.C)("user").delete`/user/two_factor_authentication`,
				d = (0, e.C)("user").put`/user/email`;

			function p(...f) {
				return d(...f)
			}
			const b = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				T = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(f => a({}, f, {
					body: a({}, f.body, {
						result: {}
					})
				}))),
				E = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				m = (0, e.C)("userDetails").get`/user/details`,
				C = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AuthzContext.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				we: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react/react"),
				l = t.n(a),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				_ = t.n(i),
				c = t("../react/utils/url.ts"),
				u = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts");

			function g(E) {
				for (var m = 1; m < arguments.length; m++) {
					var C = arguments[m] != null ? Object(arguments[m]) : {},
						f = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(C).filter(function(w) {
						return Object.getOwnPropertyDescriptor(C, w).enumerable
					})), f.forEach(function(w) {
						n(E, w, C[w])
					})
				}
				return E
			}

			function n(E, m, C) {
				return m = o(m), m in E ? Object.defineProperty(E, m, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[m] = C, E
			}

			function o(E) {
				var m = s(E, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function s(E, m) {
				if (typeof E != "object" || E === null) return E;
				var C = E[Symbol.toPrimitive];
				if (C !== void 0) {
					var f = C.call(E, m || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(E)
			}
			const v = l().createContext(void 0),
				d = 60 * 1e3,
				p = new Set(["b7db8a5d0e51afce2d33ea16d8219fc6", "3576b716b54efb9e7851fe9e7a22e440", "ca11caa2415c966f6fb75f025ed1f354", "56517c9d595ec8e23d789fd2c6d18990", "340188bc4fd1e745704cedf68408ff05", "3f96cb3e7cb3fa852b055b63baf69624"]);

			function b({
				children: E,
				userID: m,
				isUserInDSR: C
			}) {
				const [f, w] = (0, a.useState)({
					policies: null,
					isLoading: !0,
					isLoadingSkippedByUserID: !1,
					error: null,
					lastFetchedAt: null
				}), A = (0, a.useCallback)(async (H = !1) => {
					var F;
					const W = !!m,
						B = p.has((F = m) !== null && F !== void 0 ? F : "");
					if (!(W && !B && (H || !f.lastFetchedAt || Date.now() - f.lastFetchedAt > d))) {
						w(j => g({}, j, {
							isLoadingSkippedByUserID: B
						}));
						return
					}
					w(j => g({}, j, {
						isLoading: !0
					}));
					try {
						var O, P;
						const j = await fetch("/api/v4/user/iam/policies");
						if (!j.ok) throw new Error(`Failed to fetch authz policies: ${j.status}`);
						const q = (O = await j.json()) === null || O === void 0 || (P = O.result) === null || P === void 0 ? void 0 : P.policies;
						if (!q || !(0, e.isArray)(q) || q.length === 0) throw new Error(`Unexpected authz policies API response shape: ${JSON.stringify(q)}`);
						w({
							policies: q,
							isLoading: !1,
							isLoadingSkippedByUserID: !1,
							error: null,
							lastFetchedAt: Date.now()
						})
					} catch (j) {
						const q = j instanceof Error ? j.message : JSON.stringify(j);
						w(ne => g({}, ne, {
							isLoading: !1,
							error: q
						}))
					}
				}, [m, f.lastFetchedAt]);
				(0, a.useEffect)(() => {
					A()
				}, [A]);
				const k = (0, i.useHistory)(),
					R = (0, c.uW)(k.location.pathname),
					[U, I] = (0, a.useState)({
						orgScopes: null,
						isLoading: !1,
						error: null
					}),
					D = (0, a.useCallback)(async () => {
						if (!!m && !!R) {
							I(B => g({}, B, {
								isLoading: !0
							}));
							try {
								var W;
								const B = await fetch(`/api/v4/accounts/${R}/organizations`);
								if (!B.ok) throw new Error(`Failed to fetch account parent Orgs: ${B.status}`);
								const x = (W = await B.json()) === null || W === void 0 ? void 0 : W.result;
								if (x === void 0 || !(0, e.isArray)(x)) throw new Error(`Unexpected parent Orgs API response shape: ${JSON.stringify(x)}`);
								const O = x.map(j => {
										var q;
										return {
											tag: j.id,
											parentTag: (q = j.parent) === null || q === void 0 ? void 0 : q.id
										}
									}),
									P = [];
								O.forEach(j => {
									j.parentTag || P.push(`com.cloudflare.api.tenant.${j.tag}`), P.push(`com.cloudflare.api.tenant.unit.${j.tag}`)
								}), I({
									orgScopes: P,
									isLoading: !1,
									error: null
								})
							} catch (B) {
								const x = B instanceof Error ? B.message : JSON.stringify(B);
								I(O => g({}, O, {
									isLoading: !1,
									error: x
								}))
							}
						}
					}, [m, R]);
				(0, a.useEffect)(() => {
					D()
				}, [D]);
				const [$, z, Z] = (0, u.k)(R), te = {
					isUserInDSR: C,
					contextAccountTag: R,
					contextAccountOrgsState: U,
					allPermissionGroupsState: {
						permissionGroups: $,
						isLoading: z,
						error: Z
					},
					policiesState: f,
					refreshPolicies: () => A(!0)
				};
				return l().createElement(v.Provider, {
					value: te
				}, E)
			}
			const T = () => {
				const E = useContext(v);
				if (!E) throw new Error("useRefreshPolicies must be used within a PoliciesProvider");
				return E.refreshPolicies
			}
		},
		"../react/common/components/AccessCheck/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				E1: function() {
					return r
				},
				L8: function() {
					return n
				},
				W9: function() {
					return g
				},
				ZZ: function() {
					return _
				},
				j: function() {
					return o
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
					return i
				}
			});
			const e = "com.cloudflare.api.account",
				r = "com.cloudflare.api.account.",
				a = "com.cloudflare.edge.",
				l = "com.cloudflare.api.account.zone.",
				i = ["com.cloudflare.api.app.manage"];
			let _ = function(s) {
				return s.read = "read", s.list = "list", s.create = "create", s.update = "update", s.delete = "delete", s.sign = "sign", s.refresh = "refresh", s
			}({});
			const c = (s, v) => `${r}${s?s+".":""}${v}`,
				u = (s, v) => `${l}${s?s+".":""}${v}`,
				g = (s, v) => `${a}${s}.${v}`,
				n = (s = "") => `${r}${s}`,
				o = (s = "") => `${l}${s}`
		},
		"../react/common/components/AccessCheck/index.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				zs: function() {
					return c.zs
				},
				hT: function() {
					return i.hT
				},
				WL: function() {
					return i.WL
				},
				kd: function() {
					return i.kd
				},
				ZP: function() {
					return l
				},
				jX: function() {
					return c.jX
				},
				L8: function() {
					return c.L8
				},
				W9: function() {
					return c.W9
				},
				my: function() {
					return c.my
				},
				j: function() {
					return c.j
				},
				ZZ: function() {
					return c.ZZ
				},
				xk: function() {
					return e.Z
				}
			});
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				r = t("../react/utils/zoneLevelAccess.ts"),
				l = ({
					legacyPermission: u,
					canAccess: g,
					children: n,
					render: o
				}) => {
					const s = !!(0, r.P)();
					let v;
					typeof g == "boolean" && g !== void 0 && s ? v = {
						read: g,
						list: g,
						create: g,
						update: g,
						delete: g,
						sign: g
					} : v = (0, e.Z)(u);
					const d = o || n;
					return d ? d(v) : null
				},
				i = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				_ = t("../react/common/components/AccessCheck/useIsAuthorized.ts"),
				c = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(K, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				l = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/pages/zone-versioning/selectors.ts");

			function _(c) {
				const {
					read: u,
					edit: g
				} = (0, a.p4)(l.Yj)(c);
				let n = g;
				if (c != "zone_versioning") {
					const s = (0, a.p4)(i.G);
					(s == null ? void 0 : s.isLocked) && (n = !1)
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
			y.Z = _
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				WL: function() {
					return v
				},
				hT: function() {
					return b
				},
				kd: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				r = t("../../../../node_modules/lodash-es/isString.js"),
				a = t("../react/pages/home/members/utils.ts"),
				l = t("../react/common/components/AccessCheck/constants.ts"),
				i = t("../react/pages/zone-versioning/selectors.ts"),
				_ = t("../react/common/selectors/accountSelectors.ts");
			const c = {
					allow: "allow",
					deny: "deny"
				},
				u = 0,
				g = 1,
				n = 2,
				o = 3;

			function s(k, R, U, I) {
				let D = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					$;
				for ($ in D) D[$] = v(k, `${R}.${$}`, U, I);
				return D
			}

			function v(k, R, U, I) {
				var D;
				if (d(R) && !p(R)) {
					const te = (0, i.G)(k);
					if (te == null ? void 0 : te.isLocked) return !1
				}
				const $ = (D = (0, _.D0)(k)) === null || D === void 0 ? void 0 : D.id,
					z = $ ? [`com.cloudflare.api.account.${$}`] : void 0,
					Z = (0, a.vq)($);
				return !!T(k, Z, R, U, I || z)
			}

			function d(k) {
				return ![l.ZZ.read, l.ZZ.list].some(R => k.endsWith(R))
			}

			function p(k) {
				return k.includes("zone.versioning")
			}

			function b(k) {
				const R = (0, _.Ko)(k);
				let U = !1;
				return R == null || R.forEach(I => {
					I.access === c.allow && I.permission_groups.forEach(D => {
						var $;
						(D == null || ($ = D.meta) === null || $ === void 0 ? void 0 : $.scopes) === l.u1 && (U = !0)
					})
				}), U
			}

			function T(k, R, U, I, D) {
				const $ = (0, _.Ko)(k),
					z = {};
				$ == null || $.forEach(H => {
					var F;
					const W = H.access;
					let B = u;
					if (U && H.permission_groups.forEach(x => {
							var O, P;
							R == null || (O = R.find(j => j.id === x.id)) === null || O === void 0 || (P = O.permissions) === null || P === void 0 || P.forEach(j => {
								B = Math.max(B, m(j, U))
							})
						}), B !== u && !!I) {
						let x = u;
						H.resource_groups.forEach(O => {
							x = Math.max(x, f(O.scope, I, D))
						}), B = x === u ? x : B + x
					}(z == null || (F = z[W]) === null || F === void 0 ? void 0 : F[B]) || (0, e.Z)(z, [W, B], []), z[W][B].push(H)
				});
				const Z = z[c.allow] && Object.keys(z[c.allow]).map(H => parseInt(H)),
					re = z[c.deny] && Object.keys(z[c.deny]).map(H => parseInt(H)),
					te = Math.max.apply(Math, Z);
				return te === u || Math.max.apply(Math, re) >= te ? null : z[c.allow][te]
			}

			function E(k, R, U, I, D) {
				const $ = {};
				k == null || k.forEach(te => {
					var H;
					const F = te.access;
					let W = u;
					if (U && te.roles.forEach(B => {
							var x, O;
							R == null || (x = R.find(P => P.id === B.id)) === null || x === void 0 || (O = x.permissions) === null || O === void 0 || O.forEach(P => {
								W = Math.max(W, m(P, U))
							})
						}), W !== u && !!I) {
						let B = u;
						te.scopes.forEach(x => {
							B = Math.max(B, f(x, I, D))
						}), W = B === u ? B : W + B
					}($ == null || (H = $[F]) === null || H === void 0 ? void 0 : H[W]) || set($, [F, W], []), $[F][W].push(te)
				});
				const z = $[c.allow] && Object.keys($[c.allow]).map(te => parseInt(te)),
					Z = $[c.deny] && Object.keys($[c.deny]).map(te => parseInt(te)),
					re = Math.max.apply(Math, z);
				return re === u || Math.max.apply(Math, Z) >= re ? null : $[c.allow][re]
			}

			function m(k, R) {
				if (k.key === R || C(k.key, R)) return o;
				for (const U of (k == null ? void 0 : k.implies) || []) {
					let I = m(U, R);
					if (I > u) return I
				}
				return u
			}

			function C(k, R) {
				const U = R == null ? void 0 : R.lastIndexOf(".");
				return U === -1 ? !1 : (R == null ? void 0 : R.substring(0, U)) + ".*" === k
			}

			function f(k, R, U) {
				var I;
				let D = u;
				if (k == null || (I = k.objects) === null || I === void 0 || I.forEach($ => {
						D = Math.max(D, A($, R))
					}), D === u) return D;
				if (k.key !== "*") switch (!0) {
					case w(k.key, U) > u:
					case (!(U == null ? void 0 : U.length) && D === o):
						break;
					case (D === g && w(k.key, [R]) > u):
						D = w(k.key, [R]);
						break;
					default:
						return u
				}
				for (const $ of k.subset_of || [])
					if (w($.key, U) === u) return u;
				return D
			}

			function w(k, R = []) {
				for (const U of R || []) {
					if (k === U) return o;
					if (C(k, U)) return n
				}
				return u
			}

			function A(k, R) {
				const U = (0, r.Z)(k) ? k : k.key;
				return U === R ? o : U === "*" || k === "*" ? g : C(U, R) ? n : u
			}
		},
		"../react/common/components/AccessCheck/useAccountPermissionGroups.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				k: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/pages/home/members/utils.ts"),
				l = t("../../../../node_modules/lodash/lodash.js"),
				i = t.n(l),
				_ = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t.n(_),
				u = t("../react/utils/url.ts");

			function g(d) {
				for (var p = 1; p < arguments.length; p++) {
					var b = arguments[p] != null ? Object(arguments[p]) : {},
						T = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(b).filter(function(E) {
						return Object.getOwnPropertyDescriptor(b, E).enumerable
					})), T.forEach(function(E) {
						n(d, E, b[E])
					})
				}
				return d
			}

			function n(d, p, b) {
				return p = o(p), p in d ? Object.defineProperty(d, p, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = b, d
			}

			function o(d) {
				var p = s(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function s(d, p) {
				if (typeof d != "object" || d === null) return d;
				var b = d[Symbol.toPrimitive];
				if (b !== void 0) {
					var T = b.call(d, p || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}

			function v(d) {
				const [p, b] = (0, e.useState)({
					permissionGroups: null,
					isLoading: !1,
					error: null
				}), T = (0, _.useHistory)(), E = (0, u.uW)(T.location.pathname);
				d || (d = E);
				const m = (0, e.useCallback)(async () => {
					if (!d) return;
					const C = (0, a.Hf)(d);
					if (C.length > 0) {
						b({
							permissionGroups: C,
							isLoading: !1,
							error: null
						});
						return
					}
					b({
						permissionGroups: null,
						isLoading: !0,
						error: null
					});
					try {
						const f = await fetch(`/api/v4/accounts/${d}/iam/permission_groups?depth=2&permissions=true`);
						if (!f.ok) throw new Error(`Failed to fetch permission groups: ${f.status}`);
						const w = await f.json(),
							A = w == null ? void 0 : w.result;
						if (A === void 0 || !(0, l.isArray)(A)) throw new Error(`Unexpected permission groups API response shape: ${JSON.stringify(A)}`);
						(0, a.LX)(d, A), (0, a.rC)(d, A), b({
							permissionGroups: A,
							isLoading: !1,
							error: null
						})
					} catch (f) {
						const w = f instanceof Error ? f.message : JSON.stringify(f);
						b(A => g({}, A, {
							isLoading: !1,
							error: w
						}))
					}
				}, [d]);
				return (0, e.useEffect)(() => {
					m()
				}, [m]), [p.permissionGroups, p.isLoading, p.error]
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(K, y, t) {
			"use strict";
			t.d(y, {
				a: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e),
				a = t("../react/common/selectors/accountSelectors.ts");
			const l = _ => {
					if (typeof _ != "string") throw new Error("invalid Param Type provided");
					const c = _.slice(1).split(":");
					if (c.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: c[0],
						value: c[1]
					}
				},
				i = (_, c) => {
					const {
						resourceId: u,
						accountId: g,
						legacyPermission: n
					} = c;
					let {
						read: o,
						edit: s
					} = c;
					const v = {};
					n && (s = `#${n}:edit`, o = `#${n}:read`);
					const d = u || g;
					if (o) {
						const p = Array.isArray(o) ? o : [o];
						v.isReadable = p.some(b => {
							const T = l(b);
							return (0, a.DT)(_, d, E => !!(E[T.key] && E[T.key][T.value]))
						})
					}
					if (s) {
						const p = Array.isArray(s) ? s : [s];
						v.isEditable = p.some(b => {
							const T = l(b);
							return (0, a.DT)(_, d, E => !!(E[T.key] && E[T.key][T.value]))
						})
					}
					return v
				};
			y.Z = (0, e.connect)(i)
		},
		"../react/common/components/AccessControl/index.js": function(K, y, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				r = t.n(e),
				a = t("../react/app/HoCs/withEntities.tsx"),
				l = t("../react/common/components/AccessControl/SAAConnect.js");

			function i(o) {
				for (var s = 1; s < arguments.length; s++) {
					var v = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(v).filter(function(p) {
						return Object.getOwnPropertyDescriptor(v, p).enumerable
					})), d.forEach(function(p) {
						_(o, p, v[p])
					})
				}
				return o
			}

			function _(o, s, v) {
				return s = c(s), s in o ? Object.defineProperty(o, s, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = v, o
			}

			function c(o) {
				var s = u(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function u(o, s) {
				if (typeof o != "object" || o === null) return o;
				var v = o[Symbol.toPrimitive];
				if (v !== void 0) {
					var d = v.call(o, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}

			function g(o) {
				const v = ["isReadable", "isEditable"].reduce((d, p) => o.hasOwnProperty(p) ? i({}, d, {
					[p]: o[p]
				}) : d, {});
				return o.children(v)
			}
			g.propTypes = {
				resourceType: r().string,
				resourceId: r().string,
				read: r().oneOfType([r().string, r().array]),
				edit: r().oneOfType([r().string, r().array]),
				accountId: r().string,
				isReadable: r().bool,
				isEditable: r().bool,
				children: r().func
			};
			const n = (0, a.Z)((0, l.Z)(g));
			n.displayName = "AccessControl", y.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				PP: function() {
					return s
				},
				RJ: function() {
					return u
				},
				tz: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				l = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				i = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				_ = t("../react/common/utils/oidc.ts");
			const c = () => g.test(window.location.pathname) || a.E.has(l.Qq),
				u = () => a.E.get(l.Qq),
				g = /^\/login\/apple(\/)?/,
				o = [g, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				s = () => {
					let d = !1;
					o.forEach(b => {
						if (b.test(window.location.pathname)) {
							d = !0;
							return
						}
					});
					const p = c() && d;
					return p && (0, i.C8)(i.LF.OFF), p
				},
				v = d => {
					d && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					}), window.location.href = (0, _.e)(_.c.Apple, d)
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				oG: function() {
					return d
				},
				sN: function() {
					return u.sN
				},
				v2: function() {
					return u.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				i = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				_ = t.n(i),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("../react/common/components/Dropdown/index.tsx"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(p) {
					for (var b = 1; b < arguments.length; b++) {
						var T = arguments[b];
						for (var E in T) Object.prototype.hasOwnProperty.call(T, E) && (p[E] = T[E])
					}
					return p
				}, n.apply(this, arguments)
			}

			function o(p, b) {
				if (p == null) return {};
				var T = s(p, b),
					E, m;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(p);
					for (m = 0; m < C.length; m++) E = C[m], !(b.indexOf(E) >= 0) && (!Object.prototype.propertyIsEnumerable.call(p, E) || (T[E] = p[E]))
				}
				return T
			}

			function s(p, b) {
				if (p == null) return {};
				var T = {},
					E = Object.keys(p),
					m, C;
				for (C = 0; C < E.length; C++) m = E[C], !(b.indexOf(m) >= 0) && (T[m] = p[m]);
				return T
			}
			const v = (0, c.createStyledComponent)(({
				theme: p
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${p.radii[2]}px 0 0 ${p.radii[2]}px`,
					borderRight: `1px solid ${p.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${p.radii[2]}px ${p.radii[2]}px 0`,
					paddingRight: p.space[2],
					paddingLeft: p.space[2]
				},
				"& button": {
					color: (0, g.Yc)() ? p.colors.text : void 0
				},
				"& button:hover": {
					color: (0, g.Yc)() ? p.colors.text : void 0
				}
			}));

			function d(p) {
				let {
					menu: b,
					containerProps: T,
					disabled: E,
					disabledDropdown: m = E
				} = p, C = o(p, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: f
				} = (0, i.useI18n)();
				return r().createElement(v, n({}, T, {
					role: "group"
				}), r().createElement(a.zx, n({}, C, {
					disabled: E
				})), r().createElement(u.Lt, {
					trigger: r().createElement(a.zx, {
						type: C.type,
						"aria-haspopup": "menu",
						disabled: m
					}, r().createElement(l.J, {
						type: "caret-down",
						label: f("common.more"),
						size: 12
					})),
					menu: b
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				v: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = t("../react/common/hooks/useIntersectionObserver.ts");

			function _() {
				return _ = Object.assign ? Object.assign.bind() : function(u) {
					for (var g = 1; g < arguments.length; g++) {
						var n = arguments[g];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (u[o] = n[o])
					}
					return u
				}, _.apply(this, arguments)
			}

			function c(u) {
				const g = (0, e.useRef)(null),
					[n, o] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const v = g.current;
					if (v) {
						const {
							bottom: d
						} = v.getBoundingClientRect();
						d > window.innerHeight && o(!0)
					}
				}, []);
				const s = (0, i.S)(v => {
					for (const d of v) d.intersectionRatio < 1 && o(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const v = g.current;
					if (v && s) return s.observe(v), () => {
						s.unobserve(v)
					}
				}, [s]), r().createElement(a.ZC, _({
					role: "menu",
					innerRef: g,
					position: "absolute",
					right: "0",
					backgroundColor: l.rS.colors.background,
					p: 1,
					color: "gray.4",
					border: "1px solid",
					borderColor: "gray.8",
					boxShadow: "rgba(0, 0, 0, 0.025) -1px 2px 1px 1px, rgba(0, 0, 0, 0.05) -3px 3px 7px 0px",
					borderRadius: 2,
					textAlign: "left",
					whiteSpace: "nowrap",
					overflow: "hidden"
				}, n ? {
					bottom: "100%",
					mb: "2px"
				} : {
					top: "100%",
					mt: "2px"
				}, {
					zIndex: 1e3,
					minWidth: 170
				}, u))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				s: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				i = t.n(l);

			function _() {
				return _ = Object.assign ? Object.assign.bind() : function(T) {
					for (var E = 1; E < arguments.length; E++) {
						var m = arguments[E];
						for (var C in m) Object.prototype.hasOwnProperty.call(m, C) && (T[C] = m[C])
					}
					return T
				}, _.apply(this, arguments)
			}

			function c(T, E) {
				if (T == null) return {};
				var m = u(T, E),
					C, f;
				if (Object.getOwnPropertySymbols) {
					var w = Object.getOwnPropertySymbols(T);
					for (f = 0; f < w.length; f++) C = w[f], !(E.indexOf(C) >= 0) && (!Object.prototype.propertyIsEnumerable.call(T, C) || (m[C] = T[C]))
				}
				return m
			}

			function u(T, E) {
				if (T == null) return {};
				var m = {},
					C = Object.keys(T),
					f, w;
				for (w = 0; w < C.length; w++) f = C[w], !(E.indexOf(f) >= 0) && (m[f] = T[f]);
				return m
			}

			function g(T) {
				for (var E = 1; E < arguments.length; E++) {
					var m = arguments[E] != null ? Object(arguments[E]) : {},
						C = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(m).filter(function(f) {
						return Object.getOwnPropertyDescriptor(m, f).enumerable
					})), C.forEach(function(f) {
						n(T, f, m[f])
					})
				}
				return T
			}

			function n(T, E, m) {
				return E = o(E), E in T ? Object.defineProperty(T, E, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[E] = m, T
			}

			function o(T) {
				var E = s(T, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function s(T, E) {
				if (typeof T != "object" || T === null) return T;
				var m = T[Symbol.toPrimitive];
				if (m !== void 0) {
					var C = m.call(T, E || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(T)
			}
			const v = ({
					theme: T
				}) => {
					const E = {
						cursor: "pointer",
						background: T.colors.gray[9],
						color: T.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: T.space[2],
						background: T.colors.background,
						color: T.colors.gray[3],
						fontSize: T.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						'&:hover:not(:disabled):not([aria-disabled="true"])': E,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': g({}, E, {
							boxShadow: "none",
							borderRadius: 0
						}),
						'&:is(:disabled, [aria-disabled="true"])': {
							color: T.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				d = (0, a.createComponent)(v, "a"),
				p = (0, a.createComponent)(v, "button");

			function b(T) {
				let {
					disabled: E = !1
				} = T, m = c(T, ["disabled"]);
				const C = (0, l.useHistory)(),
					f = {
						role: "menuitem"
					};
				if ("href" in m && typeof m.href == "string") return r().createElement(d, _({
					"aria-disabled": E
				}, f, m, {
					href: E ? void 0 : m.href,
					onClick: A => {
						var k;
						if (E) return A.stopPropagation();
						A.preventDefault(), (k = m.onClick) === null || k === void 0 || k.call(m, A), C.push(m.href)
					}
				}));
				var w;
				return r().createElement(p, _({
					type: (w = m.type) !== null && w !== void 0 ? w : "button"
				}, f, m, {
					disabled: E
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(K, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/prop-types/index.js"),
				l = t.n(a),
				i = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const _ = ({
				children: c
			}) => r().createElement(i.xu, {
				height: 411
			}, c);
			_.propTypes = {
				children: l().node
			}, y.Z = _
		},
		"../react/common/components/ModalManager.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return d
				},
				dd: function() {
					return s
				},
				vR: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-redux/react-redux");
			const l = p => p.application.modals;
			var i = t("../react/common/actions/modalActions.ts"),
				_ = t("../../../../node_modules/swr/core/dist/index.mjs"),
				c = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function u() {
				return u = Object.assign ? Object.assign.bind() : function(p) {
					for (var b = 1; b < arguments.length; b++) {
						var T = arguments[b];
						for (var E in T) Object.prototype.hasOwnProperty.call(T, E) && (p[E] = T[E])
					}
					return p
				}, u.apply(this, arguments)
			}
			const g = r().createContext(null);
			class n extends r().Component {
				render() {
					const {
						modals: b,
						closeModal: T
					} = this.props;
					return r().createElement(r().Fragment, null, b.map(({
						ModalComponent: E,
						props: m = {},
						id: C
					}) => {
						const f = () => {
							typeof m.onClose == "function" && m.onClose(), T(E)
						};
						return r().createElement(g.Provider, {
							key: C,
							value: {
								closeModal: f
							}
						}, r().createElement(_.J$, {
							value: c.ZP
						}, r().createElement(E, u({}, m, {
							isOpen: !0,
							closeModal: f
						}))))
					}))
				}
			}

			function o() {
				const p = r().useContext(g);
				if (!p) throw new Error("useModalContext must be used within a ModalContext");
				return p
			}

			function s() {
				const p = (0, a.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...b) {
						return p(i.openModal(...b))
					}, [p]),
					closeModal: (0, e.useCallback)(function(...b) {
						return p(i.closeModal(...b))
					}, [p])
				}
			}
			var d = (0, a.connect)(p => ({
				modals: l(p)
			}), i)(n)
		},
		"../react/common/components/Page.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function l(i) {
				return r().createElement(a.T3, i)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return u
				},
				JR: function() {
					return g
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return _
				},
				ZI: function() {
					return i
				},
				if: function() {
					return r
				},
				q6: function() {
					return a
				},
				w_: function() {
					return l
				},
				zl: function() {
					return c
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				r = "time-window",
				a = "date-from",
				l = "date-to",
				i = "from",
				_ = "to",
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
			let g = function(o) {
					return o.ADD_FILTER = "Add filter", o.EDIT_FILTER = "Edit filter", o.REMOVE_FILTER = "Remove filter", o.REMOVE_ALL_FILTERS = "Remove all filters", o.CHANGE_TIME = "Change time window", o.FEED_PAGE_FORWARD = "Activity feed next page", o.FEED_PAGE_BACKWARD = "Activity feed previous page", o.FEED_EXPAND_EVENT = "Activity feed expand event", o.FEED_CLOSE_EVENT = "Activity feed close event", o.FEED_EXPAND_MATCHES = "Activity feed expand matches", o.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", o.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", o.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", o.DOWNLOAD_FEED = "Activity feed download", o
				}({}),
				n = function(o) {
					return o.TIMESERIES = "Timeseries Chart", o.DISTRIBUTION = "Source Distribution Chart", o.TOP_N = "Top N", o.FILTER_BAR = "Filter Bar", o.SCORES_DISTRIBUTIONS = "Scores Distributions", o.INSIGHTS = "Insights", o.RL_HISTOGRAM = "Rate Limit Histogram", o
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Cf: function() {
					return g
				},
				hJ: function() {
					return u
				},
				ys: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						v = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), v.forEach(function(d) {
						l(n, d, s[d])
					})
				}
				return n
			}

			function l(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var v = s.call(n, o || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const u = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, a({}, o || {}))
				},
				g = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				v: function() {
					return e
				}
			});
			let e = function(r) {
				return r.FIELD = "change field", r.OPERATOR = "change operator", r
			}({})
		},
		"../react/common/constants/billing/index.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Gq: function() {
					return l
				},
				g$: function() {
					return a
				},
				WX: function() {
					return e
				},
				E0: function() {
					return g
				},
				Hw: function() {
					return _
				},
				Ed: function() {
					return i
				},
				bi: function() {
					return r
				},
				Gs: function() {
					return v
				},
				hQ: function() {
					return c
				},
				SP: function() {
					return u
				}
			});
			let e = function(d) {
				return d.page_rules = "page_rules", d.automatic_platform_optimization = "automatic_platform_optimization", d
			}({});
			const r = "page_rules",
				a = "automatic_platform_optimization",
				l = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					volume_included: 1,
					ubb_frequency: 1,
					ubb_price: .1,
					ubb_unit: "gigabyte"
				},
				i = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				_ = {
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
				g = {
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
				o = t("../react/common/constants/billing/tracking.ts"),
				s = t("../react/common/constants/billing/workers.ts");
			const v = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				FP: function() {
					return e
				},
				Nl: function() {
					return i
				},
				SO: function() {
					return a
				},
				aA: function() {
					return r
				}
			});
			const e = {
					NOTIFICATION_CLICK: "Notification link click",
					CANCELED_SUBSCRIPTION: "Canceled subscription"
				},
				r = {
					NOTIFICATIONS: "notifications",
					SUBSCRIPTIONS: "subscriptions"
				},
				a = {
					BILLING: "billing"
				},
				l = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				i = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Dk: function() {
					return v
				},
				Dy: function() {
					return d
				},
				E_: function() {
					return _
				},
				Lv: function() {
					return p
				},
				S4: function() {
					return i
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return g
				},
				Y1: function() {
					return c
				},
				p6: function() {
					return u
				},
				q0: function() {
					return l
				},
				rg: function() {
					return b
				},
				sJ: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const l = "healthy",
				i = "degraded",
				_ = "critical",
				c = "unknown",
				u = "not-monitored",
				g = r().from({
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
				o = {
					f: g.FREE,
					p: g.PRO,
					b: g.BIZ
				},
				s = "marketing-pt",
				v = () => {
					const E = a.Z.get(s);
					if (!!E) return o[E]
				},
				d = ["gov"],
				p = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				b = "banner-notification-interactions",
				T = null
		},
		"../react/common/constants/index.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Dk: function() {
					return e.Dk
				},
				Dy: function() {
					return e.Dy
				},
				E0: function() {
					return r.E0
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
					return r.WX
				},
				Y1: function() {
					return e.Y1
				},
				bi: function() {
					return r.bi
				},
				g$: function() {
					return r.g$
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
				r = t("../react/common/constants/billing/index.ts")
		},
		"../react/common/constants/roles.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				V: function() {
					return e
				}
			});
			let e = function(r) {
				return r.SUPER_ADMINISTRATOR_ALL_PRIVILEGES = "Super Administrator - All Privileges", r.CLOUDFLARE_ACCESS = "Cloudflare Access", r.CLOUDFLARE_ACCESS_APP_ADMIN = "Cloudflare Access App Admin", r.CLOUDFLARE_ACCESS_IDENTITY_PROVIDER_ADMIN = "Cloudflare Access Identity Provider Admin", r.ADMINISTRATOR = "Administrator", r.ADMINISTRATOR_READ_ONLY = "Administrator Read Only", r.ANALYTICS = "Analytics", r.API_GATEWAY = "API Gateway", r.API_GATEWAY_READ = "API Gateway Read", r.AUDIT_LOGS_VIEWER = "Audit Logs Viewer", r.BILLING = "Billing", r.BOT_MANAGEMENT = "Bot Management", r.BOT_MANAGEMENT_ACCOUNT_WIDE = "Bot Management (Account-Wide)", r.CACHE_DOMAIN_PURGE = "Cache Domain Purge", r.CACHE_PURGE = "Cache Purge", r.SSL_TLS_CACHING_PERFORMANCE_PAGE_RULES_AND_CUSTOMIZATION = "SSL/TLS, Caching, Performance, Page Rules, and Customization", r.EMAIL_CONFIGURATION_ADMIN = "Email Configuration Admin", r.EMAIL_INTEGRATION_ADMIN = "Email Integration Admin", r.EMAIL_SECURITY_ANALYST = "Email Security Analyst", r.EMAIL_SECURITY_READONLY = "Email Security Readonly", r.EMAIL_SECURITY_REPORTING = "Email Security Reporting", r.CLOUDFORCE_ONE_ADMIN = "Cloudforce One Admin", r.CLOUDFORCE_ONE_READ = "Cloudforce One Read", r.DNS = "DNS", r.DOMAIN_ADMINISTRATOR = "Domain Administrator", r.DOMAIN_ADMINISTRATOR_READ_ONLY = "Domain Administrator Read Only", r.DOMAIN_API_GATEWAY = "Domain API Gateway", r.DOMAIN_API_GATEWAY_READ = "Domain API Gateway Read", r.DOMAIN_DNS = "Domain DNS", r.DOMAIN_PAGE_SHIELD = "Domain Page Shield", r.DOMAIN_PAGE_SHIELD_READ = "Domain Page Shield Read", r.MAGIC_NETWORK_MONITORING_ADMIN = "Magic Network Monitoring Admin", r.MAGIC_NETWORK_MONITORING = "Magic Network Monitoring", r.MAGIC_NETWORK_MONITORING_READ_ONLY = "Magic Network Monitoring Read-Only", r.CLOUDFLARE_GATEWAY = "Cloudflare Gateway", r.CLOUDFLARE_WORKER_ADMIN = "Cloudflare Worker Admin", r.HTTP_APPLICATIONS = "HTTP Applications", r.HTTP_APPLICATIONS_READ = "HTTP Applications Read", r.CLOUDFLARE_IMAGES = "Cloudflare Images", r.LOAD_BALANCER = "Load Balancer", r.LOG_SHARE = "Log Share", r.NETWORK_SERVICES_WRITE_MAGIC = "Network Services Write (Magic)", r.NETWORK_SERVICES_READ_MAGIC = "Network Services Read (Magic)", r.MINIMAL_ACCOUNT_ACCESS = "Minimal Account Access", r.PAGE_SHIELD = "Page Shield", r.PAGE_SHIELD_READ = "Page Shield Read", r.HYPERDRIVE_ADMIN = "Hyperdrive Admin", r.HYPERDRIVE_READONLY = "Hyperdrive Readonly", r.CLOUDFLARE_R2_ADMIN = "Cloudflare R2 Admin", r.CLOUDFLARE_R2_READ = "Cloudflare R2 Read", r.LOG_SHARE_READER = "Log Share Reader", r.CLOUDFLARE_SNIPPETS_ADMIN = "Cloudflare Snippets Admin", r.CLOUDFLARE_STREAM = "Cloudflare Stream", r.CLOUDFLARE_ZERO_TRUST = "Cloudflare Zero Trust", r.CLOUDFLARE_DEX = "Cloudflare DEX", r.CLOUDFLARE_ZERO_TRUST_PII = "Cloudflare Zero Trust PII", r.CLOUDFLARE_ZERO_TRUST_READ_ONLY = "Cloudflare Zero Trust Read Only", r.CLOUDFLARE_ZERO_TRUST_REPORTING = "Cloudflare Zero Trust Reporting", r.TRANSFORM_RULES = "Transform Rules", r.TRUST_AND_SAFETY = "Trust and Safety", r.TURNSTILE = "Turnstile", r.TURNSTILE_READ = "Turnstile Read", r.VECTORIZE_ADMIN = "Vectorize Admin", r.VECTORIZE_READONLY = "Vectorize Readonly", r.FIREWALL = "Firewall", r.WAITING_ROOM_ADMIN = "Waiting Room Admin", r.WAITING_ROOM_READ = "Waiting Room Read", r.WORKERS_ADMIN = "Workers Admin", r.ZARAZ_ADMIN = "Zaraz Admin", r.ZARAZ_EDIT = "Zaraz Edit", r.ZARAZ_READONLY = "Zaraz Readonly", r.ZONE_VERSIONING = "Zone Versioning", r.ZONE_VERSIONING_ACCOUNT_WIDE = "Zone Versioning (Account-Wide)", r.ZONE_VERSIONING_READ = "Zone Versioning Read", r.ZONE_VERSIONING_READ_ACCOUNT_WIDE = "Zone Versioning Read (Account-Wide)", r.DOMAIN_WAITING_ROOM_ADMIN = "Domain Waiting Room Admin", r.DOMAIN_WAITING_ROOM_READ = "Domain Waiting Room Read", r.BRAND_PROTECTION = "Brand Protection", r
			}({})
		},
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				QK: function() {
					return e
				},
				dy: function() {
					return r
				},
				sO: function() {
					return a
				},
				x4: function() {
					return l
				}
			});
			let e = function(i) {
				return i.DELETE = "delete", i.CREATE = "create", i.GET = "get", i.UPDATE = "update", i
			}({});
			const r = {
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
				a = (i, _, c = !1) => {
					var u;
					return `${_} ${(u=r[i])!==null&&u!==void 0?u:i} ${c?"ruleset":"rule"}${_===e.GET?"s":""}`
				},
				l = () => {
					var i;
					return (i = Object.keys(r).reduce((_, c) => {
						const u = Object.values(e).reduce((g, n) => (g.push(a(c, n)), g.push(a(c, n, !0)), g), []);
						return _.concat(u)
					}, [])) === null || i === void 0 ? void 0 : i.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				C: function() {
					return _
				},
				F: function() {
					return i
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(a);

			function i() {
				var c;
				const {
					accountId: u
				} = (0, a.useParams)(), g = (0, e.p4)(r.D0);
				if (u === void 0 && !g) throw new Error("Account ID not found in URL params");
				return (c = u) !== null && c !== void 0 ? c : g == null ? void 0 : g.id
			}

			function _() {
				const c = i();
				return (0, e.p4)(u => (0, r.Py)(u, c))
			}
		},
		"../react/common/hooks/useActiveState.ts": function(K, y, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				r = t("webpack/sharing/consume/default/react-redux/react-redux"),
				a = t.n(r),
				l = t("../react/common/selectors/commonSelectors.ts");
			const i = _ => {
				const c = (0, r.useDispatch)();
				return [(0, r.useSelector)((0, l.cZ)(_)), n => {
					c((0, e.I)(_, n))
				}]
			};
			y.Z = i
		},
		"../react/common/hooks/useCachedState.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				j: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function l(i, {
				key: _,
				cache: c = a.E,
				ttl: u
			} = {}) {
				var g;
				const n = _ !== void 0 && c.get(_),
					[o, s] = (0, e.useState)((g = n) !== null && g !== void 0 ? g : i);
				return [o, d => {
					s(p => (d instanceof Function && (d = d(p)), _ !== void 0 && c.set(_, d, u), d))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(K, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(a) {
				return (0, e.qf)(a)
			}
			y.Z = r
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function a(l, {
				root: i,
				rootMargin: _,
				threshold: c
			} = {}) {
				const u = (0, e.useRef)(null);

				function g() {
					return u.current === null && (u.current = new IntersectionObserver(l, {
						root: i,
						rootMargin: _,
						threshold: c
					})), u.current
				}
				return (0, e.useEffect)(() => (u.current = new IntersectionObserver(l, {
					root: i,
					rootMargin: _,
					threshold: c
				}), () => {
					var n;
					(n = u.current) === null || n === void 0 || n.disconnect()
				}), [l, i, _, c]), g()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(K, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function a(l) {
				const i = (0, e.useRef)(l);
				return (0, e.useEffect)(() => {
					i.current = l
				}, [l]), i.current
			}
			y.Z = a
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(K, y, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(l) {
				return (0, e.p4)(i => (0, r.rV)(i, l))
			}
			y.Z = a
		},
		"../react/common/middleware/sparrow/errors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Uh: function() {
					return i
				},
				ez: function() {
					return l
				},
				oV: function() {
					return _
				}
			});

			function e(c, u, g) {
				return u = r(u), u in c ? Object.defineProperty(c, u, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[u] = g, c
			}

			function r(c) {
				var u = a(c, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function a(c, u) {
				if (typeof c != "object" || c === null) return c;
				var g = c[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(c, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(c)
			}
			class l extends Error {
				constructor(u, g) {
					super(g);
					e(this, "eventName", void 0), this.eventName = u, this.name = "SparrowValidationError"
				}
			}
			class i extends l {
				constructor(u) {
					super(u, `Event not allowed: "${u}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class _ extends l {
				constructor(u, g) {
					super(u, `Found invalid properties on event: "${u}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = g
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Au: function() {
					return ot
				},
				B: function() {
					return je
				},
				B3: function() {
					return We
				},
				BG: function() {
					return k
				},
				Bp: function() {
					return ct
				},
				CV: function() {
					return vt
				},
				D0: function() {
					return C
				},
				DT: function() {
					return M
				},
				EL: function() {
					return j
				},
				EU: function() {
					return L
				},
				GE: function() {
					return yt
				},
				Ko: function() {
					return se
				},
				Kx: function() {
					return I
				},
				Le: function() {
					return D
				},
				O4: function() {
					return Ke
				},
				Ou: function() {
					return B
				},
				Py: function() {
					return ke
				},
				QI: function() {
					return st
				},
				Qf: function() {
					return w
				},
				RO: function() {
					return Se
				},
				T3: function() {
					return pt
				},
				T8: function() {
					return A
				},
				UX: function() {
					return P
				},
				VP: function() {
					return Be
				},
				Xo: function() {
					return mt
				},
				Xu: function() {
					return H
				},
				Yi: function() {
					return it
				},
				Yj: function() {
					return ne
				},
				Zu: function() {
					return q
				},
				bC: function() {
					return Y
				},
				f8: function() {
					return Z
				},
				hI: function() {
					return lt
				},
				hN: function() {
					return U
				},
				hX: function() {
					return Me
				},
				iq: function() {
					return qe
				},
				nE: function() {
					return R
				},
				oD: function() {
					return O
				},
				oI: function() {
					return z
				},
				oJ: function() {
					return Ae
				},
				tM: function() {
					return x
				},
				uF: function() {
					return F
				},
				ut: function() {
					return ze
				},
				vU: function() {
					return ht
				},
				wQ: function() {
					return de
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/lodash/get.js"),
				a = t.n(r),
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				i = t.n(l),
				_ = t("../../../../node_modules/reselect/lib/index.js"),
				c = t("../../../../node_modules/moment/moment.js"),
				u = t.n(c),
				g = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				o = t("../react/common/selectors/userSelectors.ts"),
				s = t("../react/common/selectors/entitlementsSelectors.ts"),
				v = t("../react/app/components/DeepLink/selectors.ts"),
				d = t("../react/common/constants/roles.ts"),
				p = t("../react/common/utils/hasRole.ts");

			function b(X) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var ye = arguments[ue] != null ? Object(arguments[ue]) : {},
						Ie = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && Ie.push.apply(Ie, Object.getOwnPropertySymbols(ye).filter(function(Ne) {
						return Object.getOwnPropertyDescriptor(ye, Ne).enumerable
					})), Ie.forEach(function(Ne) {
						T(X, Ne, ye[Ne])
					})
				}
				return X
			}

			function T(X, ue, ye) {
				return ue = E(ue), ue in X ? Object.defineProperty(X, ue, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[ue] = ye, X
			}

			function E(X) {
				var ue = m(X, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function m(X, ue) {
				if (typeof X != "object" || X === null) return X;
				var ye = X[Symbol.toPrimitive];
				if (ye !== void 0) {
					var Ie = ye.call(X, ue || "default");
					if (typeof Ie != "object") return Ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(X)
			}
			const C = X => {
					const ue = F(X);
					return ue == null ? void 0 : ue.account
				},
				f = X => {
					const ue = (0, o.PR)(X);
					if (ue) {
						const ye = ue.id;
						return X.accountAccess[ye] || {}
					}
					return {}
				},
				w = X => X.accountsDetailed,
				A = (0, n.P1)("accountsDetailed", w),
				k = X => X.memberships,
				R = (0, _.P1)((0, n.P1)("memberships", k), v.U, (X, ue) => !!ue && !!X ? X.filter(ye => ue.includes(ye.id)) : X),
				U = X => X.accountFlags && X.accountFlags.data,
				I = X => X.accountFlags,
				D = (X, ue, ye) => {
					const Ie = U(X);
					return !Ie || !Ie[ue] ? null : Ie[ue][ye]
				},
				$ = X => X.accountFlags.isRequesting,
				z = (X, ...ue) => a()(X, ["accountFlagsChanges", "data", ...ue]),
				Z = X => X.accountFlagsChanges.isRequesting,
				re = (0, _.P1)(U, I, (X, ue) => ({
					data: X,
					meta: ue
				})),
				te = (X, ue, ye) => !!(isEnterpriseSSEnabledSelector(X) && D(X, ue, ye)),
				H = X => X.membership,
				F = (0, n.P1)("membership", H),
				W = (0, _.P1)(F, H, (X, ue) => ({
					data: X,
					meta: ue
				})),
				B = X => {
					const {
						roles: ue = []
					} = F(X) || {};
					return Boolean(ue.find(ye => ye === "Super Administrator - All Privileges" || ye === "Billing"))
				},
				x = X => {
					const ue = [d.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, p.n)(X, ue)
				},
				O = X => {
					const ue = f(X),
						ye = He.getMemberships(X) ? i().asMutable(He.getMemberships(X)) : [];
					if (!!ye) return i().from(ye.map(Ie => b({}, Ie, {
						lastSeen: ue[Ie.account.id] ? ue[Ie.account.id].lastSeen : null
					})).sort((Ie, Ne) => Ie.lastSeen && Ne.lastSeen ? Ne.lastSeen - Ie.lastSeen : 0))
				},
				P = X => X.filteredMemberships,
				j = (0, n.P1)("filteredMemberships", P),
				q = (0, _.P1)(F, X => X == null ? void 0 : X.permissions),
				ne = (0, _.P1)(q, X => (0, e.Z)(ue => {
					var ye;
					return (ye = X == null ? void 0 : X[ue]) !== null && ye !== void 0 ? ye : {
						read: !1,
						edit: !1
					}
				})),
				se = (0, _.P1)(F, X => X == null ? void 0 : X.policies),
				M = (X, ue, ye) => {
					let Ie = He.getMembership(X);
					if (!Ie) {
						const Ne = He.getMemberships(X);
						if (!Ne || !ue) return !1;
						Ie = Ne.find(Qe => Qe.account.id === ue)
					}
					if (!Ie || !ye) return !1;
					try {
						return ye(Ie.permissions)
					} catch {
						return !1
					}
				},
				V = X => {
					var ue, ye;
					return (ue = (ye = C(X)) === null || ye === void 0 ? void 0 : ye.meta.has_pro_zones) !== null && ue !== void 0 ? ue : !1
				},
				L = X => {
					var ue, ye;
					return (ue = (ye = C(X)) === null || ye === void 0 ? void 0 : ye.meta.has_business_zones) !== null && ue !== void 0 ? ue : !1
				},
				Y = X => L(X) || V(X),
				ae = (X, ue) => {
					const ye = pe(X, ue);
					return !!ye && !!ye.enabled
				},
				pe = (X, ue) => {
					const ye = He.getMembership(X),
						Ie = ye && ye.account;
					return Ie && Ie.legacy_flags && Ie.legacy_flags[ue]
				},
				de = X => ae(X, "custom_pages"),
				fe = X => !!X && X["webhooks.webhooks.enabled"],
				oe = X => D(X, "bots", "enabled"),
				Oe = X => D(X, "billing", "annual_subscriptions_enable"),
				Se = X => X ? Boolean(D(X, "ConstellationAI", "v2_ui")) : !1,
				Me = X => X ? Boolean(D(X, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				je = X => X ? Boolean(D(X, "AIgateway", "enabled")) : !1,
				xe = X => pe(X, "enterprise_zone_quota"),
				Ve = X => {
					const ue = xe(X);
					return !ue || !ue.available ? -1 : ue.available
				},
				qe = X => X.accountMembers,
				We = (0, n.P1)("accountMembers", qe),
				Ke = X => X.accountMember && X.accountMember.isRequesting,
				Q = X => X.accountRoles,
				he = (0, n.P1)("accountRoles", Q),
				ke = (X, ue) => {
					const ye = He.getMemberships(X),
						Ie = ye && ye.find(rt => rt.account.id === ue);
					if (Ie) return Ie.account.name.replace(" Account", " account");
					const Ne = He.getMembership(X),
						Qe = Ne && Ne.account;
					return Qe && Qe.id === ue ? Qe.name : null
				},
				ze = (X, ue) => {
					const ye = He.getMemberships(X),
						Ie = ye && ye.find(rt => rt.account.id === ue);
					if (Ie) return Ie.account.settings.access_approval_expiry;
					const Ne = He.getMembership(X),
						Qe = Ne && Ne.account;
					return Qe && Qe.id === ue ? Qe.settings.access_approval_expiry : null
				},
				mt = (X, ue) => {
					const ye = ze(X, ue);
					return ye ? u().utc(ye).isAfter() : !1
				},
				pt = (X, ue, ye) => {
					const Ie = ze(X, ue);
					let Ne = Ie ? u().utc(Ie) : null;
					return !Ne || !Ne.isAfter() ? "" : Ne && Ne.year() === 3e3 ? ye("account.access_approval.card_expiration_forever") : ye("account.access_approval.card_expiration_text", {
						expiryTimestamp: Ne.local().format(g.U.DateTime)
					})
				},
				Ae = X => X && X.member && X.member.edit,
				ot = (X, ue) => {
					const ye = He.getMembership(X),
						Ie = ye && ye.account;
					return Ie ? Ie.id !== ue : !1
				},
				J = X => X.dpa,
				ge = (0, n.P1)("dpa", J),
				Te = X => X.webhook,
				Le = X => X.webhooks,
				we = (0, n.P1)("webhook", Le),
				Be = X => X.accountLegoContract,
				et = (0, n.P1)("accountLegoContract", Be),
				st = X => {
					const ue = et(X);
					return (ue == null ? void 0 : ue.lego_state) ? ue.lego_state : ""
				},
				ft = X => st(X) === "signed",
				yt = X => Be(X).isRequesting,
				ht = X => {
					const ue = et(X);
					return ue && ue.subscription_type ? ue.subscription_type : ""
				},
				Nt = X => ht(X) !== "",
				He = {
					getMembership: F,
					getMemberships: R,
					getFilteredMemberships: j,
					getAccountMembers: We,
					getAccountRoles: he
				},
				ct = X => X.accountSingle,
				it = (0, n.P1)("accountSingle", ct),
				lt = X => {
					const ue = [d.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, d.V.ADMINISTRATOR];
					return (0, p.n)(X, ue)
				},
				vt = X => (0, p.n)(X, [d.V.BRAND_PROTECTION]),
				Re = X => hasRole(X, [MEMBERSHIP_ROLES.CLOUDFORCE_ONE_ADMIN, MEMBERSHIP_ROLES.CLOUDFORCE_ONE_READ])
		},
		"../react/common/selectors/commonSelectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				FX: function() {
					return a
				},
				QG: function() {
					return r
				},
				TH: function() {
					return l
				},
				cZ: function() {
					return e
				}
			});

			function e(i) {
				const _ = `__ACTIVE__${i}`;
				return c => {
					const u = c.application;
					return u && u.active[_]
				}
			}

			function r(i) {
				const _ = `__TOGGLE__${i}`;
				return c => {
					const u = c.application;
					return u && u.toggles[_]
				}
			}

			function a(i) {
				return i && i.paginationData && i.paginationData.info && i.paginationData.info.total_count ? i.paginationData.info.total_count : 0
			}
			const l = i => i.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$f: function() {
					return p
				},
				AD: function() {
					return _
				},
				BF: function() {
					return d
				},
				Bs: function() {
					return f
				},
				Ci: function() {
					return ne
				},
				DA: function() {
					return qe
				},
				E6: function() {
					return v
				},
				Gy: function() {
					return je
				},
				Hq: function() {
					return Me
				},
				Ms: function() {
					return k
				},
				Mx: function() {
					return ae
				},
				Nb: function() {
					return Se
				},
				Pj: function() {
					return Ve
				},
				Q2: function() {
					return c
				},
				Qq: function() {
					return pe
				},
				Td: function() {
					return m
				},
				Z: function() {
					return V
				},
				a: function() {
					return C
				},
				a5: function() {
					return Y
				},
				c7: function() {
					return de
				},
				du: function() {
					return g
				},
				ec: function() {
					return re
				},
				f: function() {
					return Oe
				},
				fo: function() {
					return oe
				},
				hL: function() {
					return L
				},
				ji: function() {
					return se
				},
				jo: function() {
					return R
				},
				l9: function() {
					return Ke
				},
				lI: function() {
					return i
				},
				p1: function() {
					return T
				},
				pK: function() {
					return xe
				},
				pf: function() {
					return o
				},
				qR: function() {
					return E
				},
				rV: function() {
					return u
				},
				u1: function() {
					return n
				},
				w4: function() {
					return s
				},
				yD: function() {
					return M
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/pages/internal-dns/constants.ts");

			function a(Q, he) {
				return Q && Q[he]
			}
			const l = Q => !i(Q).isRequesting;

			function i(Q) {
				return Q.entitlements.zone
			}

			function _(Q) {
				return i(Q).data
			}
			const c = Q => {
				var he, ke;
				return ((he = i(Q).paginationData) === null || he === void 0 || (ke = he.options) === null || ke === void 0 ? void 0 : ke.editedDate) || {}
			};

			function u(Q, he) {
				const ke = _(Q);
				return ke ? a(ke, he) : void 0
			}
			const g = (Q, he) => u(Q, he) === !0;

			function n(Q) {
				return Q.entitlements.account
			}

			function o(Q) {
				return n(Q).data
			}
			const s = Q => {
				var he, ke;
				return ((he = n(Q).paginationData) === null || he === void 0 || (ke = he.options) === null || ke === void 0 ? void 0 : ke.editedDate) || {}
			};

			function v(Q) {
				return !n(Q).isRequesting
			}

			function d(Q, he) {
				const ke = o(Q);
				return ke ? a(ke, he) : void 0
			}

			function p(Q, he) {
				return d(Q, he) === !0
			}

			function b(Q, he) {
				return he.every(ke => p(Q, ke))
			}

			function T(Q) {
				return p(Q, "contract.customer_enabled")
			}

			function E(Q) {
				return p(Q, "contract.self_service_allowed")
			}

			function m(Q) {
				return p(Q, "billing.partners_managed")
			}
			const C = Q => T(Q) && E(Q),
				f = Q => p(Q, "enterprise.ecp_allowed");

			function w(Q) {
				return A(Q) || p(Q, "argo.allow_smart_routing") || p(Q, "argo.allow_tiered_caching") || p(Q, "rate_limiting.enabled") || p(Q, "ctm.enabled") || p(Q, "workers.enabled") || p(Q, "workers.kv_store.enabled") || p(Q, "stream.enabled")
			}
			const A = Q => g(Q, "argo.allow_smart_routing") || g(Q, "argo.allow_tiered_caching"),
				k = Q => p(Q, "zone.partial_setup_allowed") || g(Q, "zone.partial_setup_allowed"),
				R = Q => p(Q, "argo.allow_smart_routing") || g(Q, "argo.allow_smart_routing"),
				U = Q => p(Q, "argo.allow_tiered_caching") || g(Q, "argo.allow_tiered_caching"),
				I = Q => R(Q) || U(Q),
				D = Q => p(Q, "ctm.enabled"),
				$ = Q => {
					const he = d(Q, "ctm.load_balancers");
					return typeof he == "number" ? he : 0
				},
				z = Q => {
					const he = d(Q, "ctm.pools");
					return typeof he == "number" ? he : 0
				},
				Z = Q => {
					const he = d(Q, "ctm.origins");
					return typeof he == "number" ? he : 0
				},
				re = Q => p(Q, "workers.enabled"),
				te = Q => p(Q, "stream.enabled"),
				H = Q => {
					const he = d(Q, "access.users_allowed");
					return typeof he == "number" ? he : 0
				},
				F = Q => H(Q) > 0,
				W = Q => {
					const he = u(Q, "dedicated_certificates");
					return typeof he == "number" ? he : 0
				},
				B = Q => W(Q) > 0,
				x = Q => {
					const he = u(Q, "rate_limiting.max_rules");
					return typeof he == "number" ? he : 0
				},
				O = Q => p(Q, "rate_limiting.enabled"),
				P = Q => {
					const he = u(Q, "page_rules");
					return typeof he == "number" ? he : 0
				},
				j = Q => P(Q) > 0,
				q = Q => {
					const he = d(Q, "dns_firewall.max_clusters_allowed");
					return typeof he == "number" ? he : 0
				},
				ne = Q => q(Q) > 0,
				se = Q => g(Q, "zone.advanced_certificate_manager") || p(Q, "zone.advanced_certificate_manager"),
				M = Q => u(Q, "authoritative_dns.proxy_record_allowed") === !1 || d(Q, "authoritative_dns.proxy_record_allowed") === !1,
				V = Q => p(Q, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				L = Q => u(Q, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				Y = Q => {
					const he = u(Q, "authoritative_dns.min_record_ttl_allowed");
					return typeof he == "number" && he > 1 ? he : 60
				},
				ae = Q => {
					const he = d(Q, r.yt);
					return typeof he == "number" ? he : 0
				},
				pe = Q => p(Q, "foundation_dns.advanced_nameservers_allowed") || g(Q, "foundation_dns.advanced_nameservers_allowed"),
				de = Q => p(Q, "authoritative_dns.account_custom_nameservers_allowed"),
				fe = Q => g(Q, "authoritative_dns.zone_custom_nameservers_allowed"),
				oe = Q => fe(Q) || de(Q),
				Oe = (Q, he) => ((0, e.el)(window.location.pathname) ? u : d)(Q, he),
				Se = Q => ((0, e.el)(window.location.pathname) ? _ : o)(Q),
				Me = Q => p(Q, "authoritative_dns.multi_provider_allowed") || g(Q, "authoritative_dns.multi_provider_allowed"),
				je = Q => g(Q, "authoritative_dns.cname_flattening_allowed"),
				xe = Q => p(Q, "secondary_dns.secondary_overrides") || g(Q, "secondary_dns.secondary_overrides"),
				Ve = Q => p(Q, "authoritative_dns.custom_soa_allowed") || g(Q, "authoritative_dns.custom_soa_allowed"),
				qe = Q => p(Q, "authoritative_dns.custom_ns_ttl_allowed") || g(Q, "authoritative_dns.custom_ns_ttl_allowed"),
				We = Q => p(Q, "secondary.create_zone"),
				Ke = Q => pe(Q) || de(Q) || Me(Q) || We(Q) || xe(Q) || Ve(Q) || qe(Q)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return i
				},
				v: function() {
					return _
				}
			});
			var e = t("../react/utils/i18n.ts"),
				r = t("../../../common/intl/intl-types/src/index.ts"),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				l = t("../react/utils/bootstrap.ts");
			const i = c => {
				if ((0, l.gm)()) return a.Z.set(e.ly, e.ZW), e.ZW;
				const u = c.userCommPreferences.data;
				if (u == null ? void 0 : u["language-locale"]) return (0, e.i_)(u["language-locale"]), u["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const g = (0, e.Kd)();
					return _(g) ? g : e.ZW
				}
			};

			function _(c) {
				const u = Object.keys(r.Q).find(g => r.Q[g] === c);
				return !!c && typeof c == "string" && u != null && (0, e.S8)(u)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return i
				},
				BG: function() {
					return g
				},
				BY: function() {
					return m
				},
				GP: function() {
					return d
				},
				GU: function() {
					return C
				},
				PR: function() {
					return a
				},
				h$: function() {
					return T
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
					return _
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const r = f => f.user,
				a = (0, e.P1)("user", r),
				l = f => {
					var w;
					return (w = a(f)) === null || w === void 0 ? void 0 : w.email.endsWith("@cloudflare.com")
				},
				i = f => {
					var w;
					return !!((w = a(f)) === null || w === void 0 ? void 0 : w.id)
				},
				_ = f => {
					const w = a(f);
					if (!!w) return w.first_name && w.last_name ? `${w.first_name} ${w.last_name}` : w.email
				},
				c = f => {
					const w = a(f);
					return w && w.has_enterprise_zones
				},
				u = f => f.userCommPreferences,
				g = (0, e.P1)("userCommPreferences", u),
				n = f => {
					const w = a(f);
					return w && w.email_verified
				},
				o = f => {
					const w = g(f);
					return w && w.preferences.marketing_communication
				},
				s = f => f.userDetails,
				v = (0, e.P1)("userDetails", s),
				d = f => {
					const w = v(f);
					return w && w["2FA-RECOVERY"] === "scheduled"
				},
				p = f => {
					const w = v(f);
					return w && w["2FA-RECOVERY"] === "interrupted"
				},
				b = f => {
					const w = v(f);
					return w == null ? void 0 : w["NEW-USER-EMAIL"]
				},
				T = f => f.gates.assignments,
				E = (f, w) => f && f[w];

			function m(f, w) {
				const A = T(f);
				return A ? E(A, w) : void 0
			}
			const C = (f, w) => m(f, w) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return k
				},
				$t: function() {
					return ze
				},
				A4: function() {
					return T
				},
				Cu: function() {
					return E
				},
				DQ: function() {
					return pe
				},
				Ej: function() {
					return U
				},
				FH: function() {
					return C
				},
				ID: function() {
					return O
				},
				Iu: function() {
					return b
				},
				Ko: function() {
					return je
				},
				Le: function() {
					return oe
				},
				Ly: function() {
					return se
				},
				M3: function() {
					return Ke
				},
				N8: function() {
					return We
				},
				NY: function() {
					return Y
				},
				Ns: function() {
					return q
				},
				Ox: function() {
					return Ae
				},
				P4: function() {
					return I
				},
				RO: function() {
					return B
				},
				Tr: function() {
					return Me
				},
				U: function() {
					return m
				},
				Ug: function() {
					return w
				},
				V6: function() {
					return Q
				},
				WR: function() {
					return ot
				},
				Xg: function() {
					return p
				},
				ZB: function() {
					return fe
				},
				_y: function() {
					return P
				},
				cU: function() {
					return xe
				},
				cg: function() {
					return ae
				},
				d2: function() {
					return te
				},
				il: function() {
					return ne
				},
				jN: function() {
					return $
				},
				jg: function() {
					return V
				},
				kC: function() {
					return R
				},
				kf: function() {
					return he
				},
				ko: function() {
					return W
				},
				mK: function() {
					return mt
				},
				nA: function() {
					return d
				},
				oY: function() {
					return D
				},
				qM: function() {
					return Oe
				},
				rq: function() {
					return L
				},
				tS: function() {
					return A
				},
				tU: function() {
					return Z
				},
				vB: function() {
					return pt
				},
				vM: function() {
					return z
				},
				wH: function() {
					return f
				},
				wn: function() {
					return de
				},
				xU: function() {
					return re
				},
				xw: function() {
					return Se
				},
				z5: function() {
					return x
				},
				zO: function() {
					return Ve
				},
				zW: function() {
					return ke
				},
				zh: function() {
					return H
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				r = t("../react/app/redux/normalizer.js"),
				a = t("../../../../node_modules/lodash/get.js"),
				l = t.n(a),
				i = t("../../../../node_modules/moment/moment.js"),
				_ = t.n(i),
				c = t("../react/common/constants/billing/index.ts");

			function u(J) {
				for (var ge = 1; ge < arguments.length; ge++) {
					var Te = arguments[ge] != null ? Object(arguments[ge]) : {},
						Le = Object.keys(Te);
					typeof Object.getOwnPropertySymbols == "function" && Le.push.apply(Le, Object.getOwnPropertySymbols(Te).filter(function(we) {
						return Object.getOwnPropertyDescriptor(Te, we).enumerable
					})), Le.forEach(function(we) {
						g(J, we, Te[we])
					})
				}
				return J
			}

			function g(J, ge, Te) {
				return ge = n(ge), ge in J ? Object.defineProperty(J, ge, {
					value: Te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : J[ge] = Te, J
			}

			function n(J) {
				var ge = o(J, "string");
				return typeof ge == "symbol" ? ge : String(ge)
			}

			function o(J, ge) {
				if (typeof J != "object" || J === null) return J;
				var Te = J[Symbol.toPrimitive];
				if (Te !== void 0) {
					var Le = Te.call(J, ge || "default");
					if (typeof Le != "object") return Le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ge === "string" ? String : Number)(J)
			}
			const s = (0, r.P1)("zone", J => J.zone),
				v = J => {
					var ge;
					return (ge = J.zoneVersioning) === null || ge === void 0 ? void 0 : ge.zoneVersionSelector
				},
				d = (0, e.P1)(s, v, (J, ge) => {
					var Te, Le, we;
					let Be;
					if (Array.isArray(J) && J.length === 1 ? Be = J[0] : J && !Array.isArray(J) && (Be = J), !Be) return;
					const et = !!(ge == null ? void 0 : ge.enabled);
					return u({}, Be, Be.name && {
						name: et ? ge.rootZoneName : Be.name
					}, {
						versioning: {
							enabled: et,
							isRoot: !((Te = Be.name) === null || Te === void 0 ? void 0 : Te.endsWith(".config.cfdata.org")),
							version: et ? ge.selectedVersion : 0,
							rootZoneId: et ? ge.rootZoneId : (Le = (we = Be) === null || we === void 0 ? void 0 : we.id) !== null && Le !== void 0 ? Le : ""
						}
					})
				}),
				p = J => J.zone,
				b = J => J.zone.isRequesting,
				T = (0, e.P1)(d, p, (J, ge) => ({
					data: J,
					meta: ge
				})),
				E = J => {
					var ge, Te;
					return (ge = (Te = d(J)) === null || Te === void 0 ? void 0 : Te.id) !== null && ge !== void 0 ? ge : ""
				},
				m = J => J.zones,
				C = J => J.zonesRoot,
				f = J => J.zonesAccount,
				w = (0, r.P1)("zones", m),
				A = (0, r.P1)("zonesRoot", C),
				k = (0, r.P1)("zonesAccount", f);

			function R(J) {
				const ge = d(J);
				return ge ? ge.created_on : null
			}

			function U(J, ge, Te) {
				const Le = R(J);
				if (!Le) return;
				const we = _().duration(ge, Te),
					Be = new Date(Le),
					et = new Date(new Date().getTime() - we.asMilliseconds());
				return Be.getTime() > et.getTime()
			}

			function I(J) {
				const ge = d(J);
				return ge ? ge.status : null
			}

			function D(J) {
				const ge = d(J);
				return ge ? ge.type : null
			}

			function $(J) {
				return (J == null ? void 0 : J.plan_pending) ? J == null ? void 0 : J.plan_pending : J == null ? void 0 : J.plan
			}

			function z(J) {
				const ge = d(J);
				if (!ge) return;
				const Te = $(ge);
				return Te && Te.legacy_id
			}

			function Z(J, ge) {
				const Te = $(J);
				return !!Te && c.Gs.indexOf(Te.legacy_id) >= c.Gs.indexOf(ge)
			}

			function re(J) {
				return !!J && J.status === "initializing"
			}

			function te(J) {
				return !!J && J.status === "pending"
			}

			function H(J) {
				return !!J && J.status === "active"
			}

			function F(J, ge) {
				if (!J) return !1;
				const Te = $(J);
				return !!Te && Te.legacy_id === ge
			}

			function W(J) {
				return F(J, "enterprise")
			}
			const B = J => W(d(J));

			function x(J) {
				return F(J, "business")
			}
			const O = J => x(d(J));

			function P(J) {
				return F(J, "pro")
			}
			const j = J => P(d(J));

			function q(J) {
				return F(J, "free")
			}
			const ne = J => q(d(J));

			function se(J) {
				return !W(J)
			}

			function M(J) {
				return J && J.owner
			}

			function V(J, ge) {
				const Te = M(ge);
				return !!Te && Te.type === "user" && Te.id === J.id
			}

			function L(J) {
				const ge = d(J);
				return !!ge && ge.type === "partial"
			}

			function Y(J) {
				const ge = d(J);
				return !!ge && ge.type === "secondary"
			}
			const ae = J => {
					var ge;
					const Te = d(J);
					return !!(Te == null ? void 0 : Te.host) && !!((ge = Te.plan) === null || ge === void 0 ? void 0 : ge.externally_managed)
				},
				pe = J => {
					const ge = w(J);
					return ge && ge.some(W)
				},
				de = (J, ge) => {
					const Te = d(J);
					return Te && Te.betas ? Te.betas.includes(ge) : !1
				},
				fe = (J, ...ge) => l()(J, ["zoneFlags", "data", ...ge]),
				oe = (J, ...ge) => l()(J, ["accountFlags", "data", ...ge]),
				Oe = J => J.accountFlags.isRequesting,
				Se = J => J.zoneFlags.isRequesting,
				Me = (J, ...ge) => l()(J, ["zoneFlagsChanges", "data", ...ge]),
				je = J => J.zoneFlagsChanges.isRequesting,
				xe = J => J.zoneFlags && J.zoneFlags.data,
				Ve = J => J.zoneFlags,
				qe = (0, e.P1)(xe, Ve, (J, ge) => ({
					data: J,
					meta: ge
				})),
				We = (0, r.P1)("abuseUrls", J => J.overview.abuseUrls),
				Ke = J => {
					const ge = d(J);
					return ge ? `/${ge.account.id}/${ge.name}` : null
				},
				Q = J => J.zoneMarketingCampaigns,
				he = J => J.overview.zoneBlocks.data,
				ke = J => J.overview.zoneBlocks.isRequesting,
				ze = J => J.overview.zoneBlocks.hasData,
				mt = J => {
					var ge, Te;
					return (J == null || (ge = J.overview.zoneBlocks) === null || ge === void 0 || (Te = ge.paginationData) === null || Te === void 0 ? void 0 : Te.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				pt = J => J.overview.zoneBlocksReview.isRequesting,
				Ae = J => J.overview.zoneHold,
				ot = (0, r.P1)("zoneHold", Ae)
		},
		"../react/common/utils/formatDate.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			y.Z = (r, a, l = !1) => (0, e.p6)(r, a, l)
		},
		"../react/common/utils/getEnvironment.ts": function(K, y, t) {
			"use strict";
			var e = t("../../../../node_modules/cookie/index.js"),
				r = t("../functions/utils/preview-deploy-helpers.ts"),
				a = t("../functions/utils/constants.ts");
			const l = () => {
				var i, _, c;
				const g = e.parse(document.cookie)[a.b1];
				let n = null;
				g && (n = (0, r.E9)(g));
				let o = "production";
				switch (!0) {
					case ((i = n) === null || i === void 0 ? void 0 : i.projectType) === "canary":
						o = "canary";
						break;
					case ((_ = window) === null || _ === void 0 || (c = _.build) === null || c === void 0 ? void 0 : c.isPreviewDeploy):
						o = "preview";
						break
				}
				return o
			};
			y.Z = l
		},
		"../react/common/utils/hasRole.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				n: function() {
					return r
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const r = (a, l) => {
				const {
					roles: i = []
				} = (0, e.uF)(a) || {};
				return l.some(_ => i.includes(_))
			}
		},
		"../react/common/utils/isGuards.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$K: function() {
					return c
				},
				Q$: function() {
					return a
				},
				t: function() {
					return _
				},
				v5: function() {
					return l
				},
				zE: function() {
					return i
				}
			});
			var e = t("../react/common/constants/index.ts"),
				r = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const a = u => u ? ["page", "per_page", "count", "total_count"].every(n => n in u && u[n]) : !1,
				l = (u = "") => e.Dy.includes(u.toLowerCase()),
				i = u => u !== null && typeof u == "object" && "name" in u && "size" in u && "type" in u && typeof u.slice == "function",
				_ = u => (0, r.Z)(u),
				c = u => u != null
		},
		"../react/common/utils/oidc.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				c: function() {
					return e
				},
				e: function() {
					return r
				}
			});
			let e = function(a) {
				return a.Apple = "apple", a.Google = "google", a
			}({});
			const r = (a, l) => {
				const i = "production",
					_ = `oidc${i==="staging"?"-staging":""}.iam.cfapi.net`,
					u = new URLSearchParams(window.location.search).get("login_challenge");
				let g = `https://${_}/api/v1/sso/init?client=${a}&env=${i}`;
				return l && (g = g + `&jwt=${l}`), u && (g += `&login_challenge=${encodeURIComponent(u)}`), g
			}
		},
		"../react/common/utils/startViewTransition.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				o: function() {
					return e
				}
			});
			const e = r => {
				if (!document.startViewTransition) {
					r();
					return
				}
				document.startViewTransition(() => r())
			}
		},
		"../react/common/utils/useQueryCache.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				o: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function r(c) {
				for (var u = 1; u < arguments.length; u++) {
					var g = arguments[u] != null ? Object(arguments[u]) : {},
						n = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(g).filter(function(o) {
						return Object.getOwnPropertyDescriptor(g, o).enumerable
					})), n.forEach(function(o) {
						a(c, o, g[o])
					})
				}
				return c
			}

			function a(c, u, g) {
				return u = l(u), u in c ? Object.defineProperty(c, u, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[u] = g, c
			}

			function l(c) {
				var u = i(c, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function i(c, u) {
				if (typeof c != "object" || c === null) return c;
				var g = c[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(c, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(c)
			}
			const _ = c => {
				const u = (0, e.useQueryClient)(),
					g = m => {
						var C;
						return u.getQueriesData((C = m) !== null && C !== void 0 ? C : c)
					},
					n = m => {
						var C;
						return u.getQueryData((C = m) !== null && C !== void 0 ? C : c)
					},
					o = m => {
						var C;
						return u.getQueriesData({
							queryKey: (C = m) !== null && C !== void 0 ? C : c,
							stale: !0
						})
					},
					s = (m, C) => {
						var f;
						u.setQueryData((f = C) !== null && f !== void 0 ? f : c, m)
					},
					v = async m => {
						var C;
						await u.refetchQueries((C = m) !== null && C !== void 0 ? C : c)
					}, d = async (m, C) => {
						var f, w;
						await u.invalidateQueries((f = m) !== null && f !== void 0 ? f : c, r({
							refetchActive: !1
						}, (w = C) !== null && w !== void 0 ? w : {}))
					}, p = async (m, C) => {
						const f = m || (w => {
							var A;
							return (w == null || (A = w.queryKey) === null || A === void 0 ? void 0 : A[0]) === c
						});
						await u.invalidateQueries(r({
							predicate: f,
							refetchActive: !1,
							refetchInactive: !1
						}, C))
					};
				return {
					refetch: v,
					cancelData: async () => {
						await u.cancelQueries(c)
					},
					invalidate: d,
					setData: s,
					getDataStale: o,
					getData: g,
					prefetchQuery: (m, C) => {
						var f;
						return u.prefetchQuery((f = C) !== null && f !== void 0 ? f : c, m)
					},
					getQueryData: n,
					predicateInvalidate: p,
					batchInvalidate: async ({
						queryKeysToInvalidate: m = [],
						queryKeysToPredicateInvalidate: C = [],
						refetchActive: f = !1,
						refetchInactive: w = !1
					}) => {
						const A = m.map(R => d(R)),
							k = C.map(R => p(U => {
								var I;
								return (U == null || (I = U.queryKey) === null || I === void 0 ? void 0 : I[0]) === R
							}, {
								refetchActive: f,
								refetchInactive: w
							}));
						await Promise.all([...A, ...k])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(K, y, t) {
			"use strict";
			t.d(y, {
				K2: function() {
					return r
				},
				Lb: function() {
					return a
				},
				XI: function() {
					return l
				},
				bK: function() {
					return u
				},
				jk: function() {
					return c
				},
				wb: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const r = g => /^https?:\/\/(.*)/.test(g),
				a = g => e.default.hostname.test(g),
				l = g => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(g),
				i = g => /^[!-~]+$/.test(g),
				_ = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				c = g => _.test(g),
				u = g => !!g && !!g.length && /^[ -~]+$/.test(g)
		},
		"../react/pages/abuse/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Cg: function() {
					return v
				},
				EO: function() {
					return u
				},
				Iy: function() {
					return c
				},
				RV: function() {
					return s
				},
				R_: function() {
					return _
				},
				Vq: function() {
					return m
				},
				Y0: function() {
					return E
				},
				bL: function() {
					return f
				},
				bx: function() {
					return T
				},
				dM: function() {
					return A
				},
				dV: function() {
					return w
				},
				eM: function() {
					return o
				},
				i9: function() {
					return i
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
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				a = t("../react/pages/abuse/abuse.translations.ts"),
				l = t("../react/pages/abuse/types.ts");
			const i = "customer-abuse-reports-table-filter-bar",
				_ = "abuse-reports-table-tooltip",
				c = "abuse-reports-cache-rate-limits-table-tooltip",
				u = "abuse-reports-blocks-tables-tooltip",
				g = "customer-abuse-reports-table-filter-bar",
				n = {
					LIST_MITIGATIONS: "com.cloudflare.api.account.abuse-reports.mitigations.list",
					APPEAL_ACTIVE_BLOCKS: "com.cloudflare.api.account.zone.blocks.request-review",
					APPEAL_PENDING_BLOCKS: "com.cloudflare.api.account.abuse-reports.actions.request-review",
					APPEAL_MITIGATIONS: "com.cloudflare.api.account.abuse-reports.mitigations.appeal",
					LIST_REPORTS: "com.cloudflare.api.account.abuse-reports.list",
					READ_REPORT: "com.cloudflare.api.account.abuse-reports.read"
				},
				o = {
					abuse: (0, r.BC)`/${"accountId"}/abuse-reports`,
					abuseReport: (0, r.BC)`/${"accountId"}/abuse-reports/report/${"reportId"}`,
					abuseReportTab: (0, r.BC)`/${"accountId"}/abuse-reports/report/${"reportId"}/${"tab"}`
				};
			let s = function(k) {
				return k.BLOCKED_CONTENT = "blocked-content", k.CACHE_RATE_LIMITS = "cache-rate-limits", k
			}({});
			const v = [{
					title: a.keys.tab_titles.blocked_content,
					url: `/${s.BLOCKED_CONTENT}`
				}, {
					title: a.keys.tab_titles.cache_rate_limits,
					url: `/${s.CACHE_RATE_LIMITS}`
				}],
				d = {
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
				T = ["active", "cancelled", "in_review", "pending", "removed"],
				E = ["accepted", "in_review"];
			let m = function(k) {
				return k.APPEAL_MITIGATION_SUBMIT = "appeal abuse report mitigation submit", k.APPEAL_MITIGATION_SUCCESS = "appeal abuse report mitigation success", k.APPEAL_MITIGATION_FAILURE = "appeal abuse report mitigation failure", k.CLICK_ABUSE_REPORT_ID = "click abuse report id", k.CLICK_ABUSE_REPORT_MITIGATIONS_LINK = "click abuse report mitigations link", k.ADD_FILTER = "Add filter", k.REMOVE_FILTER = "Remove filter", k.REMOVE_ALL_FILTERS = "Remove all filters", k.NEXT_PAGE = "go to next page", k.PREV_PAGE = "go to prev page", k.GO_TO_PAGE = "go to page", k.SET_PAGE_SIZE = "set page size", k.COPY_TABLE_CELL = "copy table cell", k
			}({});
			const C = {
					initialPaginationState: {
						page: 1,
						perPage: 25
					},
					initialToolbarState: {},
					initialSortState: {
						name: l.mu.CDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: [l.mu.Domain, l.mu.Status, l.mu.Type],
						queryParamStrategy: "sync-with-table-state"
					},
					filters: {
						f1: l.mu.Domain,
						f2: l.mu.Status,
						f3: l.mu.Type,
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
						name: l.XO.EffectiveDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: [l.XO.Status],
						queryParamStrategy: "sync-with-table-state"
					},
					filters: {
						f1: l.XO.Status,
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
						name: l.DT.EnforcementDate,
						direction: e.Sr.desc
					}
				},
				A = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: l.DT.CreatedDate,
						direction: e.Sr.desc
					}
				}
		},
		"../react/pages/abuse/types.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				DT: function() {
					return l
				},
				MY: function() {
					return a
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
					return i
				}
			});
			let e = function(o) {
				return o.Type = "type", o.EffectiveDate = "effective_date", o.Status = "status", o.EntityType = "entity_type", o.EntityId = "entity_id", o
			}({});
			const r = null,
				a = {
					BLOCK_URL: "block_url",
					RATE_LIMIT_CACHE: "rate_limit_cache",
					ACCOUNT_SUSPEND: "account_suspend"
				};
			let l = function(o) {
					return o.BlockType = "blockType", o.CreatedDate = "created", o.EnforcementDate = "enforcement_date", o.Status = "status", o.EntityType = "entity_type", o.EntityId = "entity_id", o
				}({}),
				i = function(o) {
					return o.JIRA = "jira", o.ZENDESK = "zendesk", o.ABUSE_REPORT = "abuse_report", o.CSAM_MATCH = "csam_match", o
				}({}),
				_ = function(o) {
					return o.ID = "id", o.DOMAIN = "domain", o.CREATED_BEFORE = "created_before", o.CREATED_AFTER = "created_after", o.STATUS = "status", o.TYPE = "type", o.MITIGATION_STATUS = "mitigation_status", o
				}({}),
				c = function(o) {
					return o.Domain = "domain", o.Status = "status", o.Type = "type", o
				}({}),
				u = function(o) {
					return o.DMCA = "DMCA", o.TRADEMARK = "TM", o.PHISHING = "PHISH", o.GENERAL = "GEN", o.REGISTRAR_WHOIS = "REG_WHO", o.EMERGENCY = "EMER", o.NCSEI = "NCSEI", o.THREAT = "THREAT", o
				}({});
			const g = [u.DMCA, u.TRADEMARK, u.PHISHING, u.GENERAL, u.REGISTRAR_WHOIS, u.EMERGENCY, u.NCSEI, u.THREAT];
			let n = function(o) {
				return o.Id = "id", o.CDate = "cdate", o.Domain = "domain", o.Type = "type", o.Status = "status", o.AcceptedUrls = "accepted_urls", o
			}({})
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(K, y, t) {
			"use strict";
			t.d(y, {
				DZ: function() {
					return l
				},
				GA: function() {
					return g
				},
				hT: function() {
					return _
				},
				p6: function() {
					return a
				},
				qc: function() {
					return i
				},
				w9: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e);
			const a = s => r().utc(s).format("YYYY-MM-DD"),
				l = s => r().utc(s).format(),
				i = s => r().utc(s).startOf("minute").format(),
				_ = s => new Date(s),
				c = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				u = s => {
					const v = s / 60 / 60 / 1e3;
					return c[Object.keys(c).sort((d, p) => p - d).find(d => v >= d)]
				},
				g = (s, v = d => d.avg && d.avg.sampleInterval ? d.avg.sampleInterval : 1) => s.length === 0 ? 1 : s.reduce((d, p) => d + v(p), 0) / s.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				o = s => n[s]
		},
		"../react/pages/analytics/eos/resources/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
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
		"../react/pages/blocked-content/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				BW: function() {
					return g
				},
				Gk: function() {
					return p
				},
				Jr: function() {
					return n
				},
				LA: function() {
					return s
				},
				Wk: function() {
					return d
				},
				_V: function() {
					return u
				},
				c5: function() {
					return v
				},
				om: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				a = t("../react/pages/blocked-content/types.ts");

			function l(b) {
				for (var T = 1; T < arguments.length; T++) {
					var E = arguments[T] != null ? Object(arguments[T]) : {},
						m = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(E).filter(function(C) {
						return Object.getOwnPropertyDescriptor(E, C).enumerable
					})), m.forEach(function(C) {
						i(b, C, E[C])
					})
				}
				return b
			}

			function i(b, T, E) {
				return T = _(T), T in b ? Object.defineProperty(b, T, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[T] = E, b
			}

			function _(b) {
				var T = c(b, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function c(b, T) {
				if (typeof b != "object" || b === null) return b;
				var E = b[Symbol.toPrimitive];
				if (E !== void 0) {
					var m = E.call(b, T || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(b)
			}
			const u = "blocked-content-table-tooltip",
				g = {
					account: {
						basePage: (0, r.BC)`/${"accountId"}/blocked-content`,
						[a.$E.Active]: (0, r.BC)`/${"accountId"}/blocked-content/active`,
						[a.$E.Pending]: (0, r.BC)`/${"accountId"}/blocked-content/pending`
					},
					securityCenter: {
						basePage: (0, r.BC)`/${"accountId"}/security-center/blocked-content`,
						[a.$E.Active]: (0, r.BC)`/${"accountId"}/security-center/blocked-content/active`,
						[a.$E.Pending]: (0, r.BC)`/${"accountId"}/security-center/blocked-content/pending`
					}
				},
				n = [{
					category: a.$E.Pending,
					title: "security_center.blocked_content.pending_tab",
					url: "/pending"
				}, {
					category: a.$E.Active,
					title: "security_center.blocked_content.active_tab",
					url: "/active"
				}],
				o = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					cancelled: "gray"
				},
				s = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				v = {
					[a.$E.Active]: [a.M3.Active, a.M3.InReview],
					[a.$E.Pending]: [a.M3.Pending, a.M3.Cancelled]
				},
				d = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: a.fL.EnforcementDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: Object.values(a.GH)
					},
					filters: Object.values(a.GH).reduce((b, T) => l({}, b, {
						[T]: T
					}), {})
				};
			let p = function(b) {
				return b.COPY_URL = "copy blocked content url", b.REQUEST_REVIEW = "request blocked content review", b.ADD_FILTER = "Add filter", b.REMOVE_FILTER = "Remove filter", b
			}({})
		},
		"../react/pages/blocked-content/types.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return e
				},
				GH: function() {
					return i
				},
				Ib: function() {
					return a
				},
				M3: function() {
					return r
				},
				Qy: function() {
					return l
				},
				fL: function() {
					return _
				}
			});
			let e = function(u) {
					return u.Pending = "pending", u.Active = "active", u
				}({}),
				r = function(u) {
					return u.Active = "active", u.InReview = "in_review", u.Pending = "pending", u.Cancelled = "cancelled", u
				}({});
			const a = [r.Pending, r.Cancelled],
				l = [r.Active, r.InReview];
			let i = function(u) {
					return u.Domain = "domain", u.Status = "status", u.BlockType = "blockType", u
				}({}),
				_ = function(u) {
					return u.CreatedDate = "created", u.EnforcementDate = "enforcementDate", u.BlockType = "blockType", u.Hostname = "hostname", u.Status = "status", u
				}({}),
				c = function(u) {
					return u.Removed = "removed", u.Misclassified = "misclassified", u
				}({})
		},
		"../react/pages/caching/tracking.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CACHE_PURGE = "submit custom purge", r.TIERED_CACHE = "select tiered cache topology", r.CACHE_ANALYTICS = "load cache analytics data", r.CHANGED_ZONE_SETTINGS = "change zone setting", r
			}({})
		},
		"../react/pages/d1/routes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				H: function() {
					return a
				},
				_: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
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
				a = {
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
		"../react/pages/dns/dns-records/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e
				},
				X: function() {
					return r
				}
			});
			let e = function(a) {
				return a.DNS_RECORD_CREATE = "create DNS records", a.DNS_RECORD_UPDATE = "update DNS records", a.DNS_RECORD_DELETE = "delete DNS records", a.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", a
			}({});
			const r = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				BB: function() {
					return r
				},
				Pm: function() {
					return a
				},
				UZ: function() {
					return e
				}
			});
			let e = function(i) {
				return i.ROOT = "root", i.DSTADDRS_CARD = "dstaddrs_card", i.RULES_CARD = "rules_card", i.CATCHALL_CARD = "catchall_card", i.SETTINGS_PAGE = "settings_page", i.WORKERS_PAGE = "workers_page", i
			}({});
			const r = {
				zone: "emailRoutingZone",
				catchAllRule: "emailRoutingCatchAllRule",
				rule: "emailRoutingRule",
				rules: "emailRoutingRules",
				dstAddress: "emailRoutingDestinationAddress",
				dstAddresses: "emailRoutingDestinationAddresses",
				dnsRecord: "emailRoutingDnsRecord",
				dnsRecords: "emailRoutingDnsRecords"
			};
			let a = function(i) {
				return i[i.Verified = 0] = "Verified", i[i.Pending = 1] = "Pending", i[i.Missing = 2] = "Missing", i[i.WorkerNotFound = 3] = "WorkerNotFound", i[i.Unknown = 4] = "Unknown", i[i.Loading = 5] = "Loading", i
			}({});
			const l = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/pages/home/alerts/routes.ts");
			const a = r._.createAlertWithSelection,
				l = r._.editAlert,
				i = (0, e.BC)`${a}/subtype`,
				_ = (0, e.BC)`${a}/stepper`,
				c = (0, e.BC)`${_}/${"stepName"}`,
				u = (0, e.BC)`${_}/details`,
				g = (0, e.BC)`${_}/data-centers`,
				n = (0, e.BC)`${_}/ramps`,
				o = (0, e.BC)`${_}/threshold`,
				s = (0, e.BC)`${_}/review`,
				v = (0, e.BC)`${_}/confirm`,
				d = (0, e.BC)`${l}/stepper`,
				p = (0, e.BC)`${d}/${"stepName"}`,
				b = (0, e.BC)`${d}/details`,
				T = (0, e.BC)`${d}/data-centers`,
				E = (0, e.BC)`${d}/ramps`,
				m = (0, e.BC)`${d}/threshold`,
				C = (0, e.BC)`${d}/review`,
				f = (0, e.BC)`${d}/confirm`,
				w = {
					magicTunnelHealthChooseSubType: i,
					magicTunnelHealthCreateStepperBase: _,
					magicTunnelHealthCreateStepper: c,
					magicTunnelHealthCreateDetails: u,
					magicTunnelHealthCreateSelectDataCenter: g,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: o,
					magicTunnelHealthCreateReview: s,
					magicTunnelHealthCreateConfirm: v,
					magicTunnelHealthEditStepperBase: d,
					magicTunnelHealthEditStepper: p,
					magicTunnelHealthEditDetails: b,
					magicTunnelHealthEditSelectDataCenter: T,
					magicTunnelHealthEditSelectRamps: E,
					magicTunnelHealthEditSetThreshold: m,
					magicTunnelHealthEditReview: C,
					magicTunnelHealthEditConfirm: f
				};
			y.Z = w
		},
		"../react/pages/home/alerts/config.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				jk: function() {
					return s
				},
				w8: function() {
					return v
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				r = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				a = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				l = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				i = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function _(d) {
				for (var p = 1; p < arguments.length; p++) {
					var b = arguments[p] != null ? Object(arguments[p]) : {},
						T = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(b).filter(function(E) {
						return Object.getOwnPropertyDescriptor(b, E).enumerable
					})), T.forEach(function(E) {
						c(d, E, b[E])
					})
				}
				return d
			}

			function c(d, p, b) {
				return p = u(p), p in d ? Object.defineProperty(d, p, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = b, d
			}

			function u(d) {
				var p = g(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function g(d, p) {
				if (typeof d != "object" || d === null) return d;
				var b = d[Symbol.toPrimitive];
				if (b !== void 0) {
					var T = b.call(d, p || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const n = "Notifications",
				o = "notification",
				s = _({}, e._, r._j, a._j, l._),
				v = _({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, i.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				_j: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				a = (0, e.BC)`${r}/pagerduty/connect`,
				l = (0, e.BC)`${r}/pagerduty/register`,
				i = (0, e.BC)`${r}/pagerduty`,
				_ = {
					pagerDutyConnect: a,
					pagerDutyRegister: l,
					pagerDutyList: i
				};
			var c = null
		},
		"../react/pages/home/alerts/routes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				l = (0, e.BC)`${a}/destinations`,
				i = (0, e.BC)`${a}/create`,
				_ = (0, e.BC)`${i}/${"alertType"}`,
				c = (0, e.BC)`${a}/edit/${"alertId"}`,
				u = {
					account: r,
					alerts: a,
					destinations: l,
					createAlert: i,
					createAlertWithSelection: _,
					editAlert: c
				};
			y.Z = u
		},
		"../react/pages/home/alerts/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", r
			}({})
		},
		"../react/pages/home/audit-log/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Q: function() {
					return r
				},
				v: function() {
					return e
				}
			});
			const e = "audit logs",
				r = {
					TOGGLE_V2: "toggle audit logs",
					FILTER: "filter audit logs",
					FILTER_COUNTS: "filter counts audit logs",
					TIME_RANGE_CHANGED: "Time range changed",
					API_LATENCY: "api latency detected audit logs",
					DETAILS: "Click view details",
					FEEDBACK: "send audit logs feedback"
				}
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.PEER_DNS_CREATE = "create peer server", r.PEER_DNS_UPDATE = "update peer server", r.PEER_DNS_DELETE = "delete peer server", r.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", r.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", r.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", r
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_LIST = "create list", r.DELETE_LIST = "delete list", r.ADD_LIST_ITEM = "add list item", r.DELETE_LIST_ITEM = "delete list item", r
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				AA: function() {
					return V
				},
				AN: function() {
					return lt
				},
				AY: function() {
					return ue
				},
				Ac: function() {
					return Et
				},
				Am: function() {
					return T
				},
				B2: function() {
					return x
				},
				BB: function() {
					return R
				},
				BF: function() {
					return Le
				},
				BQ: function() {
					return He
				},
				E8: function() {
					return Re
				},
				Fl: function() {
					return Ie
				},
				Fu: function() {
					return D
				},
				Gc: function() {
					return st
				},
				Hc: function() {
					return Bt
				},
				IO: function() {
					return ct
				},
				JK: function() {
					return Ve
				},
				K: function() {
					return w
				},
				LI: function() {
					return Nt
				},
				LX: function() {
					return ge
				},
				L_: function() {
					return Q
				},
				Ly: function() {
					return Xe
				},
				MR: function() {
					return P
				},
				Mj: function() {
					return q
				},
				NB: function() {
					return Dt
				},
				Oe: function() {
					return Wt
				},
				Or: function() {
					return se
				},
				P5: function() {
					return bt
				},
				PE: function() {
					return Oe
				},
				Pd: function() {
					return Lt
				},
				Pk: function() {
					return Me
				},
				Pp: function() {
					return ze
				},
				Q1: function() {
					return I
				},
				Qr: function() {
					return Te
				},
				Qv: function() {
					return Se
				},
				Rp: function() {
					return Pt
				},
				S7: function() {
					return Ct
				},
				Sh: function() {
					return Ne
				},
				Sl: function() {
					return jt
				},
				TZ: function() {
					return M
				},
				Tg: function() {
					return qe
				},
				Tp: function() {
					return et
				},
				Uy: function() {
					return St
				},
				Vw: function() {
					return z
				},
				W3: function() {
					return Ae
				},
				WR: function() {
					return it
				},
				WX: function() {
					return pe
				},
				XF: function() {
					return vt
				},
				Xb: function() {
					return L
				},
				Zs: function() {
					return Ke
				},
				_f: function() {
					return we
				},
				b4: function() {
					return ae
				},
				bc: function() {
					return Mt
				},
				c2: function() {
					return O
				},
				cE: function() {
					return At
				},
				dh: function() {
					return ke
				},
				fE: function() {
					return he
				},
				g7: function() {
					return oe
				},
				hO: function() {
					return pt
				},
				hV: function() {
					return xt
				},
				hk: function() {
					return E
				},
				hr: function() {
					return Y
				},
				it: function() {
					return mt
				},
				j3: function() {
					return Ut
				},
				jN: function() {
					return xe
				},
				jo: function() {
					return kt
				},
				k3: function() {
					return Tt
				},
				m8: function() {
					return F
				},
				nm: function() {
					return Qe
				},
				oW: function() {
					return X
				},
				pH: function() {
					return W
				},
				pi: function() {
					return H
				},
				r4: function() {
					return zt
				},
				rI: function() {
					return j
				},
				s7: function() {
					return ft
				},
				sg: function() {
					return rt
				},
				tB: function() {
					return p
				},
				tN: function() {
					return fe
				},
				u_: function() {
					return $t
				},
				vV: function() {
					return Be
				},
				vc: function() {
					return je
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				a = t("../../../../node_modules/moment/moment.js"),
				l = t.n(a),
				i = t("../../../common/util/types/src/api/domain.ts"),
				_ = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				c = t("../react/utils/url.ts"),
				u = t("../react/pages/home/domain-registration/config.ts"),
				g = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function o(h) {
				for (var S = 1; S < arguments.length; S++) {
					var me = arguments[S] != null ? Object(arguments[S]) : {},
						Ce = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && Ce.push.apply(Ce, Object.getOwnPropertySymbols(me).filter(function($e) {
						return Object.getOwnPropertyDescriptor(me, $e).enumerable
					})), Ce.forEach(function($e) {
						s(h, $e, me[$e])
					})
				}
				return h
			}

			function s(h, S, me) {
				return S = v(S), S in h ? Object.defineProperty(h, S, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[S] = me, h
			}

			function v(h) {
				var S = d(h, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function d(h, S) {
				if (typeof h != "object" || h === null) return h;
				var me = h[Symbol.toPrimitive];
				if (me !== void 0) {
					var Ce = me.call(h, S || "default");
					if (typeof Ce != "object") return Ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(h)
			}

			function p(h) {
				return h.filter(S => S.isSelected).reduce((S, {
					name: me,
					fees: Ce,
					isZoneEntitlementPresent: $e
				}) => $e || !(0, e.isNumber)(Ce == null ? void 0 : Ce.transfer_fee) ? S : Et(me) ? S + (Ce == null ? void 0 : Ce.transfer_fee) * 2 : S + (Ce == null ? void 0 : Ce.transfer_fee), 0)
			}

			function b(h) {
				return h.filter(S => S.registrar.toLowerCase() === "godaddy")
			}
			const T = "MMM D, YYYY";

			function E(h, S, me, Ce) {
				var $e, ce, ie, ve, _e, be, Ue, Ze, at, Je, tt, ut;
				const Ge = h[S.name],
					gt = () => Et(S.name) ? l()(S.expires_at).add(2, "years").format(T) : l()(S.expires_at).add(1, "year").format(T);
				return o({
					name: S == null ? void 0 : S.name,
					zone: Ge,
					entitlements: me,
					registryCheck: Ce,
					nameservers: S.name_servers,
					isAvailable: S.available,
					lastKnownStatus: S.last_known_status,
					authCode: S.auth_code,
					isEnterpriseZone: (Ge == null || ($e = Ge.plan) === null || $e === void 0 ? void 0 : $e.legacy_id) === "enterprise",
					isActiveZone: (Ge == null ? void 0 : Ge.status) === "active",
					corResponsesPending: S.cor_responses_pending,
					isCorLocked: S.cor_locked,
					corLockedUntil: S.cor_locked_until ? l()(S.cor_locked_until).format(T) : null,
					isFullZone: (Ge == null ? void 0 : Ge.type) == n.xd.Full,
					isLocked: S.locked,
					registrar: S.current_registrar || u.JM,
					zoneId: Ge == null ? void 0 : Ge.id,
					currentExpiration: l()(S.expires_at).format(T),
					newExpiration: gt(),
					lastEntitledAt: S.last_entitled_at ? new Date(S.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(me) && !!me.find(nt => nt.id === u.g5 && nt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: S.transfer_in && f(S.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: S.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: S.transfer_in,
					transferOut: S.transfer_out,
					autoRenew: S.auto_renew === !0,
					lastTransferredAt: S.last_transferred_at,
					createdAt: S.created_at,
					paymentExpiresAt: l()(S.payment_expires_at).isValid() ? l()(S.payment_expires_at) : l()(S.expires_at).isValid() ? l()(S.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (ce = S.contacts) === null || ce === void 0 || (ie = ce.administrator) === null || ie === void 0 ? void 0 : ie.id,
						[n.l2.Billing]: (ve = S.contacts) === null || ve === void 0 || (_e = ve.billing) === null || _e === void 0 ? void 0 : _e.id,
						[n.l2.Registrant]: (be = S.contacts) === null || be === void 0 || (Ue = be.registrant) === null || Ue === void 0 ? void 0 : Ue.id,
						[n.l2.Technical]: (Ze = S.contacts) === null || Ze === void 0 || (at = Ze.technical) === null || at === void 0 ? void 0 : at.id
					},
					landing: S.landing,
					privacy: S.privacy,
					whois: S.whois,
					emailVerified: S.email_verified,
					materialChanges: A(S.material_changes),
					corChanges: S.cor_changes ? R(Object.assign(o({}, C), S.cor_changes)) : {},
					registryStatuses: S.registry_statuses ? S.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Je = S.domain_protection_services) === null || Je === void 0 ? void 0 : Je.status
					},
					deletion: {
						isDeletable: S == null || (tt = S.deletion) === null || tt === void 0 ? void 0 : tt.is_deletable
					},
					premiumType: S == null ? void 0 : S.premium_type,
					fees: S == null ? void 0 : S.fees
				}, S.domain_move && {
					domainMove: {
						ineligibilityReasons: (ut = S.domain_move) === null || ut === void 0 ? void 0 : ut.ineligibility_reasons
					}
				}, S.actionable_metadata && {
					actionableMetadata: m(S.actionable_metadata)
				}, S.policies && {
					policies: o({}, S.policies.suspension && {
						suspension: {
							parked: S.policies.suspension.parked,
							parkingReason: S.policies.suspension.parking_reason,
							paymentExpired: S.policies.suspension.payment_expired
						}
					})
				})
			}

			function m(h) {
				return h.map(S => ({
					accountContext: S.account_context,
					createdAt: S.created_at,
					expiresAt: S.expires_at,
					sentAt: S.sent_at,
					status: S.status,
					type: S.type
				}))
			}
			const C = {
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

			function f(h) {
				switch (h.enter_auth_code) {
					case n.lW.OK:
						return n.BJ.Valid;
					case n.lW.NEEDED:
						return n.BJ.Pending;
					case n.lW.UNKNOWN:
						return n.BJ.Pending;
					case n.lW.REJECTED:
						return n.BJ.Error;
					case n.lW.TRYING:
						return n.BJ.Pending
				}
				return n.BJ.Pending
			}

			function w(h) {
				let S = h.extensions;
				(S == null ? void 0 : S.application_purpose) && (S == null ? void 0 : S.nexus_category) && (h.extensions = {
					nexusCategory: S.nexus_category,
					applicationPurpose: S.application_purpose
				});
				let me = o({}, typeof h.id == "string" ? {
					id: h.id
				} : {}, {
					first_name: h.firstName,
					organization: h.organization,
					address: h.address1,
					city: h.city,
					state: h.state || "N/A",
					zip: h.zip,
					country: h.country,
					phone: h.phone,
					email: h.email,
					fax: "",
					last_name: h.lastName,
					address2: h.address2,
					email_verified: h.emailVerified
				}, h.extensions ? {
					extensions: {
						nexus_category: h.extensions.nexusCategory,
						application_purpose: h.extensions.applicationPurpose
					}
				} : {});
				return We(me)
			}

			function A(h) {
				let S = [];
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
				for (const Ce in h) {
					const $e = h[Ce],
						ce = me[$e];
					S.push(ce)
				}
				return S
			}
			const k = h => {
				if (!h) return null;
				let S = h;
				return h.includes("C31") && (S = "C31"), h.includes("C32") && (S = "C32"), S
			};

			function R(h) {
				return o({}, typeof h.id == "string" ? {
					id: h.id
				} : {}, {
					firstName: h.first_name,
					organization: h.organization,
					address1: h.address,
					city: h.city,
					state: h.state,
					zip: h.zip,
					country: h.country,
					phone: h.phone.trim(),
					email: h.email.trim(),
					lastName: h.last_name,
					address2: h.address2,
					emailVerified: h.email_verified
				}, h.extensions ? {
					extensions: {
						nexusCategory: k(h.extensions.nexus_category),
						applicationPurpose: h.extensions.application_purpose
					}
				} : {})
			}

			function U(h = {}) {
				const S = {
					name: "",
					zoneId: "",
					zone: o({
						id: "",
						name: "",
						status: "pending",
						plan: o({
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
						}, h.zone && h.zone.plan || {}),
						type: EZoneType.Full
					}, h.zone || {}),
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
					transferConditions: o({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, h.transferConditions || {}),
					transferIn: o({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, h.transferIn || {}),
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
				return Object.assign(S, h)
			}

			function I(h = {}) {
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
				}, h)
			}

			function D(h) {
				const S = u.Py.concat(u.ui).reduce((me, Ce) => o({}, me, {
					[Ce]: []
				}), {});
				return h.forEach(me => {
					let Ce = $(me.registrar);
					Ce in S || (Ce = u.ui), rt(me.name) && (Ce = "uk"), S[Ce].push(me)
				}), Object.keys(S).sort((me, Ce) => me.localeCompare(Ce)).map(me => ({
					registrar: me,
					domains: S[me]
				})).filter(me => me.domains.length > 0)
			}

			function $(h) {
				return h == null ? void 0 : h.toLowerCase().replace(/\s|,|\./g, "")
			}

			function z(h) {
				if (!h || !h.registrar) return "unknown";
				if (rt(h.name)) return "uk";
				const S = $(h.registrar);
				return S in u.gM ? S : "unknown"
			}
			const Z = [];

			function re(h) {
				return Z.some(S => h.endsWith("." + S))
			}

			function te(h) {
				return !h.isEnterpriseZone || !Array.isArray(h.entitlements) ? !1 : !!h.entitlements.find(({
					id: S,
					allocation: me
				}) => S === u.g5 && me.value === !0)
			}

			function H(h) {
				var S;
				const me = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let Ce = !1,
					$e = null;
				return (S = h.registryStatuses) === null || S === void 0 || S.some(ce => {
					me.includes(ce) && ($e = ce, Ce = !0)
				}), [Ce, $e]
			}

			function F(h, S = !1) {
				if (!h) return [!1, g.keys.cannot_transfer_default];
				if (h.zone.status !== "active") return [!1, g.keys.cannot_transfer_zone_not_active];
				if (!h.isFullZone && !te(h)) return [!1, g.keys.cannot_transfer_zone_not_eligible];
				if (h.registrar === "Cloudflare") return [!1, g.keys.cannot_transfer_domain_on_cf];
				if (h.isAvailable) return [!1, g.keys.cannot_transfer_domain_available];
				if (!h.transferConditions) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (!S && St(h == null ? void 0 : h.premiumType)) return [!1, g.keys.cannot_transfer_domain_premium];
				if (W(h)) return [!1, g.keys.cannot_transfer_domain_transfer_in_progress];
				let me;
				for (me in h.transferConditions)
					if (me !== "not_premium" && !h.transferConditions[me]) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (re(h.name)) return [!1, g.keys.cannot_transfer_domain_tld_not_supported];
				const [Ce, $e] = H(h);
				return Ce && $e ? [!1, g.keys.cannot_transfer_domain_registry_status[$e]] : [!0, ""]
			}

			function W(h) {
				var S, me;
				return !!h.transferIn && !((S = h.transferConditions) === null || S === void 0 ? void 0 : S.not_started) && !!(rt(h.name) || ((me = h.registryStatuses) === null || me === void 0 ? void 0 : me.includes(n.rj.PENDING_TRANSFER)))
			}

			function B(h) {
				return !!h.registrar && !!h.currentExpiration
			}

			function x(h, S = !1) {
				const [me] = F(h, S);
				return B(h) ? de(h) ? n.M5.InProgressOrOnCF : me ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function O(h) {
				return h.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(h.transferIn.enter_auth_code) || !1
			}

			function P(h) {
				return h.registrar === "Cloudflare"
			}

			function j(h) {
				return !!(h == null ? void 0 : h.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function q(h) {
				return !!(h == null ? void 0 : h.includes(n.rj.PENDING_TRANSFER))
			}
			const ne = "Invalid date";

			function se(h) {
				return h.newExpiration === ne ? "Unavailable" : h.newExpiration
			}

			function M(h) {
				return h.currentExpiration === ne ? "Unavailable" : h.currentExpiration
			}

			function V(h) {
				return h.substring(h.indexOf("."))
			}

			function L(h = "") {
				return h.indexOf(".") !== -1 ? h.substring(0, h.indexOf(".")) : h
			}

			function Y(h) {
				return h.map(S => S.name).map(S => V(S)).filter((S, me, Ce) => !Ce.includes(S, me + 1))
			}

			function ae(h) {
				if (u.no) return [!0, ""];
				if (!P(h)) return [!1, n.ok.NotOnCF];
				if (h.isCorLocked) return [!1, h.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (h.lastTransferredAt) {
					const S = l()(h.lastTransferredAt),
						me = l().duration(l()().diff(S)).as("days"),
						Ce = rt(h.name);
					if (me < (Ce ? 1 : 60)) return [!1, Ce ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (h.createdAt) {
					const S = l()(h.createdAt);
					if (l().duration(l()().diff(S)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function pe(h) {
				return !!(u.Bc || h.transferOut)
			}

			function de(h) {
				return oe(h) || P(h)
			}

			function fe(h) {
				return !oe(h) && P(h)
			}

			function oe(h) {
				return !h || h.lastKnownStatus === n.kd.PENDING_TRANSFER || h.lastKnownStatus === n.kd.TRANSFER_FOA_PENDING || !P(h) && h.transferConditions && !h.transferConditions.not_started || !1
			}

			function Oe(h) {
				return !(re(h.name) || h.transferConditions && !h.transferConditions.supported_tld)
			}

			function Se(h) {
				return (h == null ? void 0 : h.includes("/")) ? !0 : h.split("").some(S => S.charCodeAt(0) > 123)
			}

			function Me(h) {
				switch (h) {
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

			function je(h) {
				return l()(h.paymentExpiresAt).isBefore(l()())
			}

			function xe(h) {
				return h.transferIn && h.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function Ve(h) {
				const S = ["CU", "KP", "IR", "SY"];
				return h.filter(me => !S.includes(me.code))
			}

			function qe(h) {
				if (!!h) return `${h.charAt(0).toUpperCase()}${h.slice(1)}${h.charAt(h.length-1)==="."?"":"."}`
			}

			function We(h) {
				const S = {};
				for (const [me, Ce] of Object.entries(h)) {
					if (Ce && typeof Ce == "string") {
						Object.assign(S, {
							[me]: Ce.trim()
						});
						continue
					}
					Object.assign(S, {
						[me]: Ce
					})
				}
				return S
			}

			function Ke(h) {
				return l()(h).add(40, "days")
			}

			function Q(h) {
				const S = h.paymentExpiresAt || h.payment_expires_at,
					me = Ke(S);
				return l()().isBetween(S, me)
			}

			function he(h) {
				var S;
				return !(h == null ? void 0 : h.registryStatuses) || !Array.isArray(h == null ? void 0 : h.registryStatuses) && !(0, e.isString)(h == null ? void 0 : h.registryStatuses) ? !1 : (S = h.registryStatuses) === null || S === void 0 ? void 0 : S.includes(n.rj.REDEMPTION_PERIOD)
			}

			function ke(h) {
				var S;
				return !(h == null ? void 0 : h.registryStatuses) || !Array.isArray(h == null ? void 0 : h.registryStatuses) && !(0, e.isString)(h == null ? void 0 : h.registryStatuses) ? !1 : (S = h.registryStatuses) === null || S === void 0 ? void 0 : S.includes(n.rj.PENDING_DELETE)
			}

			function ze(h) {
				return [".us"].includes(h)
			}

			function mt(h) {
				return [".us"].includes(h)
			}

			function pt(h) {
				switch (h) {
					case ".us":
						return J();
					default:
						return []
				}
			}

			function Ae(h) {
				switch (h) {
					case ".us":
						return ot;
					default:
						return {}
				}
			}
			const ot = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function J() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([h, S]) => ({
						value: h,
						label: S
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([h, S]) => ({
						value: h,
						label: S
					}))
				}]
			}

			function ge(h, S, me) {
				return S[S.length - 1][me] === h[me]
			}

			function Te(h) {
				return Boolean(Object.keys(h).length === 0)
			}

			function Le(h) {
				return l()().add(h, "year").format(T)
			}

			function we({
				accountName: h
			}) {
				var S;
				const me = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((S = h.toLowerCase().match(me)) === null || S === void 0 ? void 0 : S[0]) || ""
			}

			function Be(h) {
				return !!h.match(_.default.email)
			}

			function et(h) {
				return h === i.W7.PENDING_UPDATE
			}

			function st(h) {
				return h ? Object.values(i.wR).filter(S => S !== i.wR.OFFBOARDED).includes(h) : !1
			}

			function ft(h) {
				return h ? [i.wR.LOCKED, i.wR.ONBOARDED, i.wR.ONBOARDING_INITIATED, i.wR.PENDING_REGISTRY_LOCK, i.wR.PENDING_REGISTRY_UNLOCK, i.wR.PENDING_UNLOCK_APPROVAL].includes(h) : !1
			}

			function yt(h) {
				return h ? i.wR.UNLOCKED === h : !1
			}

			function ht(h) {
				return h ? i.wR.LOCKED === h : !1
			}

			function Nt(h) {
				return h ? i.wR.PENDING_REGISTRY_LOCK === h : !1
			}

			function He(h) {
				return h ? [i.wR.PENDING_REGISTRY_UNLOCK, i.wR.PENDING_UNLOCK_APPROVAL].includes(h) : !1
			}

			function ct(h) {
				var S;
				return !1
			}

			function it(h) {
				var S;
				return !1
			}

			function lt(h) {
				var S;
				return !1
			}

			function vt(h) {
				var S;
				return !1
			}

			function Re(h) {
				var S;
				return !1
			}

			function X(h) {
				return Object.keys(i.wR).find(S => i.wR[S].toLowerCase() === h.toLowerCase())
			}

			function ue(h) {
				var S;
				const me = (S = X(h)) === null || S === void 0 ? void 0 : S.toLowerCase();
				return me ? g.keys.protection_status[me] : g.keys.protection_status.unknown
			}

			function ye(h) {
				return ["com", "net"].includes(h)
			}

			function Ie(h) {
				const S = (0, c.pu)(h);
				return ye(S) ? i.wR.PENDING_REGISTRY_LOCK : i.wR.LOCKED
			}

			function Ne(h) {
				return (0, c.pu)(h) === "co" ? 5 : 10
			}

			function Qe(h, S) {
				return S ? 1 : (0, c.pu)(h) === "co" ? 5 : (0, c.pu)(h) === "org" ? 1 : 10
			}

			function rt(h) {
				return (0, c.pu)(h) === "uk"
			}

			function At(h) {
				return (0, c.pu)(h) === "us"
			}

			function Et(h) {
				return (0, c.pu)(h) === "ai"
			}

			function Pt(h) {
				return l()(h).isValid()
			}

			function Xe(h) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(h)
			}

			function bt(h) {
				return !!(h == null ? void 0 : h.id)
			}

			function Dt(h) {
				return h ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(h) : !1
			}

			function Lt(h) {
				return h ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(h) : !1
			}

			function xt(h) {
				var S;
				return (h == null ? void 0 : h.lastKnownStatus) ? (S = h.lastKnownStatus) === null || S === void 0 ? void 0 : S.includes("deletionIrredeemable") : !1
			}

			function St(h) {
				switch (h) {
					case n.Vs.NonStandard_NonStandard:
					case n.Vs.NonStandard_Standard:
					case n.Vs.Standard_Standard:
					case n.Vs.Standard_NonStandard:
						return !0;
					case n.Vs.Not_Premium:
					default:
						return !1
				}
			}

			function Bt(h) {
				if (!h || !h.message) return n.OJ.DEFAULT;
				const {
					message: S
				} = h;
				switch (!0) {
					case S.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case S.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case S.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function Ct(h) {
				var S, me;
				return !!(((S = h.policies) === null || S === void 0 || (me = S.suspension) === null || me === void 0 ? void 0 : me.parked) && h.policies.suspension.parkingReason)
			}

			function Ut(h) {
				var S, me;
				return Ct(h) && ((S = h.policies) === null || S === void 0 || (me = S.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function Tt(h) {
				var S, me;
				return Ct(h) && ((S = h.policies) === null || S === void 0 || (me = S.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function jt(h) {
				var S;
				return !((S = h.domainMove) === null || S === void 0 ? void 0 : S.ineligibilityReasons.length)
			}

			function Wt(h) {
				var S, me;
				return !!((S = h.domainMove) === null || S === void 0 || (me = S.ineligibilityReasons) === null || me === void 0 ? void 0 : me.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function wt(h) {
				var S;
				return (S = h.actionableMetadata) === null || S === void 0 ? void 0 : S.find(me => me.type === n.wg.DOMAIN_MOVE)
			}

			function kt(h) {
				const S = wt(h);
				return (S == null ? void 0 : S.status) === "pending" && S.accountContext === n._5.GAINING
			}

			function $t(h) {
				const S = wt(h);
				return (S == null ? void 0 : S.status) === "pending" && S.accountContext === n._5.LOSING
			}

			function zt(h) {
				const S = V(h.name);
				return !u.Pf.includes(S)
			}

			function Mt(h) {
				return u.QZ.includes(h)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Bc: function() {
					return u
				},
				HG: function() {
					return oe
				},
				Hv: function() {
					return Oe
				},
				JM: function() {
					return a
				},
				Pf: function() {
					return v
				},
				Py: function() {
					return _
				},
				QZ: function() {
					return d
				},
				WK: function() {
					return n
				},
				g5: function() {
					return o
				},
				gM: function() {
					return i
				},
				jk: function() {
					return fe
				},
				no: function() {
					return g
				},
				uY: function() {
					return c
				},
				ui: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../flags.ts");
			const a = "Unknown",
				l = "unknown",
				i = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				_ = Object.keys(i),
				c = !0,
				u = (0, r.J8)("registrar_mock_transfer_out") || !1,
				g = (0, r.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				o = "cf_registrar.enabled",
				s = "@abcABC1234567890123456",
				v = [".us"],
				d = [".travel", ".us", ".ong", ".ngo"],
				p = (0, e.BC)`/${"accountId"}`,
				b = (0, e.BC)`${p}/add-site`,
				T = (0, e.BC)`${p}/registrar`,
				E = (0, e.BC)`${T}/domains`,
				m = (0, e.BC)`${T}/action-center`,
				C = (0, e.BC)`${T}/domain/${"zoneName"}`,
				f = (0, e.BC)`${C}/configuration`,
				w = (0, e.BC)`${C}/contacts`,
				A = (0, e.BC)`${T}/pricing`,
				k = (0, e.BC)`${T}/protection`,
				R = (0, e.BC)`${T}/register`,
				U = (0, e.BC)`${R}/checkout`,
				I = (0, e.BC)`${R}/checkout/${"token"}`,
				D = (0, e.BC)`${R}/success`,
				$ = (0, e.BC)`${T}/tlds`,
				z = (0, e.BC)`${T}/transfer`,
				Z = (0, e.BC)`${T}/transfer/${"zoneName"}`,
				re = (0, e.BC)`/registrar/accounts/verify_email`,
				te = (0, e.BC)`/registrar/domains/verify_email`,
				H = (0, e.BC)`/sign-up/registrar`,
				F = (0, e.BC)`${T}/verify-email`,
				W = (0, e.BC)`${p}/${"zoneName"}`,
				B = (0, e.BC)`${p}/domains`,
				x = (0, e.BC)`${B}/action-center`,
				O = (0, e.BC)`${B}/${"zoneName"}`,
				P = (0, e.BC)`${O}/configuration`,
				j = (0, e.BC)`${O}/contacts`,
				q = (0, e.BC)`${B}/pricing`,
				ne = (0, e.BC)`${B}/protection`,
				se = (0, e.BC)`${B}/register`,
				M = (0, e.BC)`${se}/checkout`,
				V = (0, e.BC)`${se}/checkout/${"token"}`,
				L = (0, e.BC)`${se}/success`,
				Y = (0, e.BC)`${B}/tlds`,
				ae = (0, e.BC)`${B}/transfer`,
				pe = (0, e.BC)`${B}/transfer/${"zoneName"}`,
				de = (0, e.BC)`${B}/verify-email`,
				fe = {
					addSite: b,
					domains: E,
					domainsActionCenter: m,
					domainsDomain: C,
					domainsDomainConfiguration: f,
					domainsDomainContacts: w,
					domainsPricing: A,
					domainsProtection: k,
					domainsRegister: R,
					domainsRegisterCheckout: U,
					domainsRegisterCheckoutToken: I,
					domainsRegisterSuccess: D,
					domainsTlds: $,
					domainsTransfer: z,
					domainsTransferZone: Z,
					registrar: T,
					registrarAccountsVerifyEmail: re,
					registrarDomainsVerifyEmail: te,
					signup: H,
					verifyEmail: F,
					zone: W
				},
				oe = {
					LEGACY_domains: B,
					LEGACY_domainsActionCenter: x,
					LEGACY_domainsDomain: O,
					LEGACY_domainsDomainConfiguration: P,
					LEGACY_domainsDomainContacts: j,
					LEGACY_domainsPricing: q,
					LEGACY_domainsProtection: ne,
					LEGACY_domainsRegister: se,
					LEGACY_domainsRegisterCheckout: M,
					LEGACY_domainsRegisterCheckoutToken: V,
					LEGACY_domainsRegisterSuccess: L,
					LEGACY_domainsTlds: Y,
					LEGACY_domainsTransfer: ae,
					LEGACY_domainsTransferZone: pe,
					LEGACY_verifyEmail: de
				},
				Oe = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				HO: function() {
					return c
				},
				NW: function() {
					return u
				},
				ZQ: function() {
					return l
				},
				b_: function() {
					return _
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");
			const a = g => {
					const n = g && g.accountFlags && g.accountFlags.data && g.accountFlags.data.registrar && g.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(o => o.trim()) : []
				},
				l = g => {
					var n, o, s;
					return ((n = g.accountFlags) === null || n === void 0 || (o = n.data) === null || o === void 0 || (s = o.registrar) === null || s === void 0 ? void 0 : s["registrar-managed"]) || !1
				},
				i = g => g.account ? g.account.email : "",
				_ = g => !1,
				c = g => _(g) && (0, e.oJ)((0, e.Zu)(g)),
				u = g => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: o
					} = g.registrar.registrations;
					return n && !(o.accepted_date || o.id || o.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				J: function() {
					return o
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(a),
				i = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function _(s) {
				for (var v = 1; v < arguments.length; v++) {
					var d = arguments[v] != null ? Object(arguments[v]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(b) {
						return Object.getOwnPropertyDescriptor(d, b).enumerable
					})), p.forEach(function(b) {
						c(s, b, d[b])
					})
				}
				return s
			}

			function c(s, v, d) {
				return v = u(v), v in s ? Object.defineProperty(s, v, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[v] = d, s
			}

			function u(s) {
				var v = g(s, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function g(s, v) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(s, v || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(s)
			}
			let n = function(s) {
				return s.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", s.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", s.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", s.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", s.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", s.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", s.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", s.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", s.RENEW_DOMAIN_COMPLETED = "domain renewal completed", s.RESTORE_DOMAIN_INIT = "click to open domain restore modal", s.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", s.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", s.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", s.RESTORE_DOMAIN_FAILURE = "domain restore failed", s.RESTORE_DOMAIN_COMPLETED = "domain restore completed", s.DOMAIN_DELETE_INIT = "click to begin domain delete", s.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", s.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", s.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", s.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", s.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", s.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", s.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", s.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", s.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", s.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", s.DOMAIN_MOVE_START_FLOW = "Start domain move flow", s.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", s.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", s.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", s.DOMAIN_MOVE_SUBMIT = "Submit domain move", s.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", s.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", s.DOMAIN_MOVE_CANCEL = "Domain move cancel", s.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", s.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", s.ACTION_CENTER_NAVIGATE = "Navigate to actions center", s.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", s.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", s.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", s
			}({});

			function o(s, v, d) {
				if (!(v == null ? void 0 : v.name)) return null;
				l().sendEvent(s, _({
					domain: {
						name: v.name,
						premium: (0, i.Uy)(v == null ? void 0 : v.premiumType),
						paymentExpiresAt: r()(v == null ? void 0 : v.paymentExpiresAt).format()
					},
					category: "registrar"
				}, d))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				HX: function() {
					return c
				},
				Re: function() {
					return E
				},
				Rh: function() {
					return p
				},
				hX: function() {
					return v
				},
				s_: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react/react"),
				l = t.n(a),
				i = t("../react/utils/translator.tsx"),
				_ = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts");
			let c = function(m) {
				return m.UNKNOWN = "unknown", m.WORKERS = "workers", m.ACCESS_APPS = "access_apps", m.ACCESS_IDP = "access_ipd", m
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

			function g(m) {
				return {
					key: "com.cloudflare.edge.worker.script." + m.id,
					name: m.name + (m.environment ? ` (${m.environment})` : ""),
					type: c.WORKERS
				}
			}

			function n(m) {
				const C = m;
				return {
					key: "com.cloudflare.edge.access.app." + C.id,
					name: C.name,
					type: c.ACCESS_APPS
				}
			}
			const o = {
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

			function s(m) {
				const C = m,
					f = o[C.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + C.id,
					name: `${f||"Unknown Type"}${C.name?" - "+C.name:""}`,
					type: c.ACCESS_IDP
				}
			}
			const v = async (m, C, f) => C == c.WORKERS ? (await d(`/accounts/${m}/workers/scripts-search?name=${f}&perPage=10`)).body.result.map(w => ({
				id: w.id,
				name: w.service_name || w.script_name,
				environment: w.environment_name
			})).map(g) : C == c.ACCESS_APPS ? (await d(`/accounts/${m}/access/apps?name=${f}`)).body.result.map(n) : C == c.ACCESS_IDP ? (await d(`/accounts/${m}/access/identity_providers`)).body.result.map(s) : [];
			async function d(m) {
				try {
					return await (0, e.get)(m, {
						hideErrorAlert: !0
					})
				} catch (w) {
					var C, f;
					throw ((C = w.body) === null || C === void 0 ? void 0 : C.errors) ? w.body.errors[0].message : w.text ? w.text : ((f = w.response) === null || f === void 0 ? void 0 : f.statusText) ? w.response.statusText : "Unexpected error response"
				}
			}
			const p = async (m, C) => {
				const f = C.split("."),
					w = f.pop(),
					A = f.join(".");
				let k;
				switch (A) {
					case "com.cloudflare.edge.worker.script":
						const R = (await d(`/accounts/${m}/workers/scripts-search/${w}`)).body.result;
						return g({
							id: R.id,
							name: R.service_name || R.script_name,
							environment: R.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return k = await d(`/accounts/${m}/access/identity_providers/${w}`), s(k.body.result);
					case "com.cloudflare.edge.access.app":
						return k = await d(`/accounts/${m}/access/apps/${w}`), n(k.body.result)
				}
			}, b = {
				loading: !0,
				isDisabled: !0
			}, T = () => "production";

			function E(m) {
				const [C] = (0, _.k)(m), [f, w] = (0, a.useState)(!0), [A, k] = (0, a.useState)(u.filter(R => C == null ? void 0 : C.find(U => U.meta.scopes === R.scopeKeyPrefix)).map(R => {
					const U = R.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
						I = C == null ? void 0 : C.filter(D => D.meta.scopes === R.scopeKeyPrefix).find(D => !D.meta.visibility || D.meta.visibility !== "beta");
					return {
						value: R.value,
						label: (0, i.ZP)(R.label_i18n),
						state: U ? b : {
							loading: !1,
							isDisabled: !1
						},
						beta: !I
					}
				}));
				return (0, a.useEffect)(() => {
					(async () => {
						try {
							await v(m, c.ACCESS_APPS, ""), b.isDisabled = !1
						} catch (R) {
							R.startsWith("access.api.error.not_enabled") ? b.disableInfo = (0, i.ZP)("policy.granular_resources.type.access.not_enabled") : b.error = R
						}
						b.loading = !1, k([...A])
					})()
				}, []), (0, a.useEffect)(() => {
					const R = A.find(U => U.state.loading);
					w(!!R)
				}, [A]), {
					types: A,
					isLoading: f
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Ey: function() {
					return g
				},
				F4: function() {
					return b
				},
				Go: function() {
					return v
				},
				Lc: function() {
					return w
				},
				Np: function() {
					return o
				},
				Rl: function() {
					return s
				},
				Sb: function() {
					return d
				},
				Sw: function() {
					return f
				},
				Sz: function() {
					return C
				},
				Ti: function() {
					return A
				},
				Uw: function() {
					return E
				},
				Zl: function() {
					return T
				},
				jk: function() {
					return m
				},
				r6: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/members`,
				l = (0, e.BC)`${a}/invite`,
				i = (0, e.BC)`${a}/invite/${"memberId"}`,
				_ = (0, e.BC)`${a}/add-policy/${"memberId"}`,
				c = (0, e.BC)`${a}/user-groups`,
				u = (0, e.BC)`${a}/user-groups/${"userGroupId"}`,
				g = "com.cloudflare.api.account",
				o = g + "." + "zone",
				s = o + ".",
				v = 100,
				d = 200,
				p = 5,
				b = 300,
				T = "INVITE_TOAST",
				E = "00000000000000000000000000000000",
				m = {
					account: r,
					members: a,
					groups: c,
					group: u,
					inviteMembers: l,
					editMember: i,
					addPolicy: _
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
				A = {
					accountId: "",
					effect: C.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/sparrowEvents.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Bz: function() {
					return u
				},
				SH: function() {
					return g
				},
				g5: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						v = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), v.forEach(function(d) {
						l(n, d, s[d])
					})
				}
				return n
			}

			function l(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var v = s.call(n, o || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CLICK_USERGROUP_BETA_BUTTON = "click usergroup beta button", n.MEMBERS_TAB_NAVIGATE = "nagivate members tab", n
			}({});
			const u = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, a({}, o || {}))
				},
				g = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/home/members/utils.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return m
				},
				Co: function() {
					return T
				},
				Hf: function() {
					return R
				},
				JP: function() {
					return E
				},
				LX: function() {
					return D
				},
				Ld: function() {
					return s
				},
				YW: function() {
					return u
				},
				_k: function() {
					return v
				},
				c$: function() {
					return g
				},
				rC: function() {
					return I
				},
				vq: function() {
					return k
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				r = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				a = t("../react/pages/home/members/constants.ts");

			function l(z) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var re = arguments[Z] != null ? Object(arguments[Z]) : {},
						te = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(re).filter(function(H) {
						return Object.getOwnPropertyDescriptor(re, H).enumerable
					})), te.forEach(function(H) {
						i(z, H, re[H])
					})
				}
				return z
			}

			function i(z, Z, re) {
				return Z = _(Z), Z in z ? Object.defineProperty(z, Z, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[Z] = re, z
			}

			function _(z) {
				var Z = c(z, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function c(z, Z) {
				if (typeof z != "object" || z === null) return z;
				var re = z[Symbol.toPrimitive];
				if (re !== void 0) {
					var te = re.call(z, Z || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(z)
			}
			const u = () => l({}, a.Ti),
				g = () => l({}, a.Lc, {
					scopes: [u()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = z => z.map(Z => ({
					scope: {
						key: Z,
						objects: [{
							key: "*"
						}]
					}
				})),
				o = (z, Z, re) => {
					var te;
					let H = [],
						F = [];
					const W = [],
						B = [];
					z.scopes.forEach(P => {
						if (P.mode === a.Sw.all) re ? H.push({
							id: re
						}) : H.push({
							scope: {
								key: `com.cloudflare.api.account.${Z}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (P.mode === a.Sw.domain_group) {
							const q = {
								id: P.resourceGroupId
							};
							P.effect === a.Sz.allow ? H.push(q) : F.push(q)
						} else if (P.mode === a.Sw.zone) {
							const q = `${a.Rl}${P.zoneId}`;
							P.effect === a.Sz.allow ? W.push(q) : B.push(q)
						} else if (P.mode === a.Sw.granular && P.granularResourceKey) {
							var j;
							const q = P.granularProduct,
								se = `${(j=r.s_.find(M=>M.value===q))===null||j===void 0?void 0:j.scopeSubsetOfPrefix}.${Z}`;
							H.push({
								scope: {
									key: `${P.granularResourceKey}`,
									subset_of: [{
										key: `${se}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), W.length && (H = H.concat(n(W))), B.length && (F = F.concat(n(B)));
					const x = (te = z.permission_groups) === null || te === void 0 ? void 0 : te.map(P => ({
							id: P
						})),
						O = [];
					return O.push({
						access: a.Sz.allow,
						permission_groups: x,
						resource_groups: H
					}), F.length && O.push({
						access: a.Sz.deny,
						permission_groups: x,
						resource_groups: F
					}), O
				},
				s = z => z.map(Z => {
					var re;
					return {
						access: Z.access,
						permission_groups: Z.permission_groups.map(te => ({
							id: te.id
						})),
						resource_groups: (re = Z.resource_groups) === null || re === void 0 ? void 0 : re.map(te => ({
							scope: {
								key: te.scope.key,
								objects: te.scope.objects
							},
							id: te.id
						}))
					}
				}),
				v = (z, Z, re, te) => {
					const H = z.auto_accept;
					let F = [];
					return F = F.concat(o(z, Z, re)), te && (F = F.concat(s(te))), {
						auto_accept: H,
						status: H ? "accepted" : "pending",
						policies: F
					}
				},
				d = z => {
					const Z = z.split(".");
					return Z[Z.length - 1]
				},
				p = z => {
					var Z, re;
					const te = z == null ? void 0 : z.access;
					let H = [],
						F = z == null || (Z = z.resource_groups) === null || Z === void 0 ? void 0 : Z.map(W => {
							var B;
							const x = b(W);
							if ((W == null || (B = W.meta) === null || B === void 0 ? void 0 : B.editable) === "false") return {
								effect: te,
								mode: a.Sw.all,
								accountId: d(W.id)
							};
							if (x) {
								var O;
								return {
									effect: te,
									mode: a.Sw.granular,
									granularProduct: x.value,
									granularResourceKey: W == null || (O = W.scope) === null || O === void 0 ? void 0 : O.key
								}
							} else if (!W.name) W.scope.key.startsWith(a.Rl) ? H.push({
								key: W.scope.key
							}) : H = H.concat(W.scope.objects);
							else return {
								effect: te,
								mode: a.Sw.domain_group,
								resourceGroupId: d(W.id)
							}
						}).filter(W => W);
					if ((re = H) === null || re === void 0 ? void 0 : re.length) {
						let W = H.map(B => {
							const x = d(B.key);
							return {
								effect: te,
								mode: a.Sw.zone,
								zoneId: x
							}
						});
						F = F.length ? W.concat(F) : W
					}
					return F
				},
				b = z => {
					var Z, re, te, H;
					const F = z == null || (Z = z.scope) === null || Z === void 0 ? void 0 : Z.key.split(".").slice(0, -1).join("."),
						W = z == null || (re = z.scope) === null || re === void 0 || (te = re.subset_of) === null || te === void 0 || (H = te[0]) === null || H === void 0 ? void 0 : H.key.split(".").slice(0, -1).join(".");
					return r.s_.find(B => B.scopeKeyPrefix === F && B.scopeSubsetOfPrefix === W)
				},
				T = z => {
					if (!(z == null ? void 0 : z.length)) return [];
					const Z = [];
					return z.forEach(re => {
						var te;
						(te = re.resource_groups) === null || te === void 0 || te.forEach(H => {
							var F, W;
							((F = H.scope) === null || F === void 0 || (W = F.key) === null || W === void 0 ? void 0 : W.startsWith(a.Rl)) && Z.push(d(H.scope.key))
						})
					}), Z
				},
				E = z => {
					if (!(z == null ? void 0 : z.length)) return [];
					const Z = [];
					return z.forEach(re => {
						var te;
						(te = re.resource_groups) === null || te === void 0 || te.forEach(H => {
							var F, W;
							if (!((F = H.scope) === null || F === void 0 || (W = F.key) === null || W === void 0 ? void 0 : W.startsWith(a.Rl))) {
								var B;
								const O = (B = H.scope) === null || B === void 0 ? void 0 : B.objects;
								for (let P = 0; P < (O == null ? void 0 : O.length) && P < a.r6; P++) {
									var x;
									((x = O[P].key) === null || x === void 0 ? void 0 : x.startsWith(a.Rl)) && Z.push(d(O[P].key))
								}
							}
						})
					}), Z
				},
				m = z => {
					var Z;
					if (!(z == null ? void 0 : z.length)) return null;
					const re = (Z = z[0]) === null || Z === void 0 ? void 0 : Z.permission_groups.map(W => W.id);
					let te, H;
					z == null || z.forEach(W => {
						W.access === a.Sz.allow && (te = W), W.access === a.Sz.deny && (H = W)
					});
					let F = [];
					return te && (F = p(te)), H && (F = F.concat(p(H))), {
						permission_groups: re,
						scopes: F
					}
				},
				C = "permission-groups-",
				f = "permission-groups-expiring-",
				w = 1 * 24 * 60 * 60,
				A = new Map,
				k = z => U(C, z),
				R = z => U(f, z),
				U = (z, Z) => {
					if (!Z) return [];
					const re = A.get(Z);
					if (re) return re;
					const te = e.E.get(`${z}${Z}`);
					return te ? (A.set(Z, te), te) : []
				},
				I = (z, Z) => $(C, z, Z),
				D = (z, Z) => $(f, z, Z),
				$ = (z, Z, re) => {
					const te = [];
					for (let F = 0; F < sessionStorage.length; F++) {
						const W = sessionStorage.key(F);
						(W == null ? void 0 : W.startsWith(z)) && te.push(W)
					}
					te.length >= 5 && e.E.remove(te[0]);
					let H;
					return z === f && (H = w), e.E.set(`${z}${Z}`, re, H)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				g: function() {
					return r
				}
			});
			var e = t("../../../common/util/types/src/api/phases/fields.tsx");
			const r = {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				F: function() {
					return e
				}
			});
			let e = function(r) {
				return r.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", r.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", r.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", r.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", r.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", r.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", r.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", r.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", r.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", r.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", r.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", r.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", r.GET_SYN_PROTECTION_RULE = "view syn protection rules list", r.GET_SYN_PROTECTION_RULES = "view syn protection rule", r.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", r.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", r.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", r.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", r.GET_SYN_PROTECTION_FILTER = "view syn protection filter", r.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", r.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", r.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", r.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", r.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", r.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", r.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", r.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", r.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", r.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", r.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", r.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", r.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", r.GET_DNS_PROTECTION_RULES = "view dns protection rules list", r.GET_DNS_PROTECTION_RULE = "view dns protection rule", r.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", r.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", r.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", r
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return c
				},
				L9: function() {
					return n
				},
				N3: function() {
					return g
				},
				zE: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(o) {
				for (var s = 1; s < arguments.length; s++) {
					var v = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(v).filter(function(p) {
						return Object.getOwnPropertyDescriptor(v, p).enumerable
					})), d.forEach(function(p) {
						l(o, p, v[p])
					})
				}
				return o
			}

			function l(o, s, v) {
				return s = i(s), s in o ? Object.defineProperty(o, s, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = v, o
			}

			function i(o) {
				var s = _(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function _(o, s) {
				if (typeof o != "object" || o === null) return o;
				var v = o[Symbol.toPrimitive];
				if (v !== void 0) {
					var d = v.call(o, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}
			let c = function(o) {
					return o.PURCHASE_WORKERS_PAID = "navigate to workers plan page", o.LIST_CONFIGS = "list hyperdrive configs", o.SEARCH_CONFIGS = "search hyperdrive configs", o.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", o.VIEW_CONFIG_DETAILS = "view hyperdrive config details", o.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", o.UPDATE_ORIGIN_CONN_LIM_SETTINGS = "update hyperdrive config origin connection limit settings", o.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", o.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", o.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", o.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", o.CLICK_QUICK_LINK = "click hyperdrive quick link", o.CLICK_DISCORD = "click hyperdrive discord", o.CLICK_COMMUNITY = "click hyperdrive community", o
				}({}),
				u = function(o) {
					return o[o["connection string"] = 0] = "connection string", o[o.manual = 1] = "manual", o
				}({}),
				g = function(o) {
					return o[o.success = 0] = "success", o[o.failure = 1] = "failure", o
				}({});
			const n = (o, s = {}) => {
				r().sendEvent(o, a({}, s, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/routes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				KJ: function() {
					return A
				},
				_m: function() {
					return T
				},
				imagesEndpoints: function() {
					return oe
				},
				vQ: function() {
					return k
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function r(Oe) {
				for (var Se = 1; Se < arguments.length; Se++) {
					var Me = arguments[Se] != null ? Object(arguments[Se]) : {},
						je = Object.keys(Me);
					typeof Object.getOwnPropertySymbols == "function" && je.push.apply(je, Object.getOwnPropertySymbols(Me).filter(function(xe) {
						return Object.getOwnPropertyDescriptor(Me, xe).enumerable
					})), je.forEach(function(xe) {
						a(Oe, xe, Me[xe])
					})
				}
				return Oe
			}

			function a(Oe, Se, Me) {
				return Se = l(Se), Se in Oe ? Object.defineProperty(Oe, Se, {
					value: Me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Oe[Se] = Me, Oe
			}

			function l(Oe) {
				var Se = i(Oe, "string");
				return typeof Se == "symbol" ? Se : String(Se)
			}

			function i(Oe, Se) {
				if (typeof Oe != "object" || Oe === null) return Oe;
				var Me = Oe[Symbol.toPrimitive];
				if (Me !== void 0) {
					var je = Me.call(Oe, Se || "default");
					if (typeof je != "object") return je;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Se === "string" ? String : Number)(Oe)
			}
			const _ = (0, e.BC)`/${"accountId"}/images`,
				c = (0, e.BC)`${_}/images`,
				u = (0, e.BC)`${_}/variants`,
				g = (0, e.BC)`${_}/keys`,
				n = (0, e.BC)`${_}/bundle-checkout-success`,
				o = (0, e.BC)`${c}/${"imageId"}`,
				s = (0, e.BC)`${c}/detail`,
				v = (0, e.BC)`${c}/edit`,
				d = (0, e.BC)`${u}/create`,
				p = (0, e.BC)`${u}/edit/${"variantId"}`,
				b = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				T = (0, e.BC)`${_}/sourcing-kit`,
				E = (0, e.BC)`${_}/delivery-zones`,
				m = (0, e.BC)`${E}/${"zoneId"}/settings`,
				C = (0, e.BC)`${_}/plans`,
				f = (0, e.BC)`${_}/manage-plan`,
				w = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				A = {
					root: _,
					images: c,
					variants: u,
					keys: g,
					legacyImageDetailPage: o,
					imageDetailPage: s,
					imageEditPage: v,
					bundleCheckoutSuccess: n,
					variantCreatePage: d,
					variantEditPage: p,
					sourcingKit: T,
					subscriptions: b,
					deliveryZones: E,
					deliveryZoneSettings: m,
					plansPage: C,
					managePlan: f
				},
				k = r({}, A, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: w
				}),
				R = (0, e.BC)`/accounts/${"accountId"}`,
				U = (0, e.BC)`${R}/images/v2`,
				I = (0, e.BC)`/zones/${"zoneId"}`,
				D = (0, e.BC)`${U}/sourcingkit`,
				$ = (0, e.BC)`${D}/migrations`,
				z = (0, e.BC)`${D}/migrations/${"migrationId"}`,
				Z = (0, e.BC)`${D}/migrations/${"migrationId"}/logs`,
				re = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle/start`,
				te = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle/abort`,
				H = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle`,
				F = (0, e.BC)`${D}/sources`,
				W = (0, e.BC)`${D}/sources/${"sourceId"}`,
				B = (0, e.BC)`${D}/sources/${"sourceId"}/connectivity`,
				x = (0, e.BC)`${D}/sources/connectivity_precheck`,
				O = (0, e.BC)`/zones?account.id=${"accountId"}`,
				P = {
					migrationList: $,
					migration: z,
					migrationLogs: Z,
					sourceList: F,
					migrationStart: re,
					migrationAbort: te,
					migrationProgress: H,
					source: W,
					sourceConnectivityCheck: B,
					sourceConnectivityPreCheck: x
				},
				j = (0, e.BC)`/billing/upgrade-subscription`,
				q = (0, e.BC)`${R}/settings/transformations`,
				ne = (0, e.BC)`${I}/settings/transformations`,
				se = (0, e.BC)`${I}/settings/transformations_allowed_origins`,
				M = (0, e.BC)`${I}/settings/transformations_c2pa`,
				V = (0, e.BC)`${R}/settings/ut-billing`,
				L = (0, e.BC)`${I}`,
				Y = (0, e.BC)`${I}/entitlements`,
				ae = (0, e.BC)`${I}/settings`,
				pe = (0, e.BC)`${I}/flags`,
				de = (0, e.BC)`${I}/subscription`,
				oe = {
					sourcingKitEndpoints: P,
					deliveryZonesEndpoints: {
						transformationsConfigList: q,
						transformationsZoneConfig: ne,
						allowedOriginsZoneConfig: se,
						preserveContentCredentialsZoneConfig: M,
						upgradeSubscription: j,
						utBillingConfig: V
					},
					zones: {
						zones: O,
						zoneDetail: L,
						zoneSettings: ae,
						zoneEntitlements: Y,
						zoneFlags: pe,
						zoneSubscription: de
					}
				}
		},
		"../react/pages/images/selectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return l
				},
				GH: function() {
					return s
				},
				JZ: function() {
					return d
				},
				aR: function() {
					return n
				},
				db: function() {
					return _
				},
				ib: function() {
					return p
				},
				lW: function() {
					return T
				},
				pT: function() {
					return o
				},
				po: function() {
					return v
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const l = "sourcing_kit_enabled",
				i = "sourcing_kit_waitlist",
				_ = "images",
				c = "unified_images_enabled",
				u = "c2pa_polish",
				g = "CloudflareImages",
				n = E => !!(0, r.BF)(E, "images.transformations_enabled"),
				o = E => Boolean((0, r.BF)(E, "images.enabled")),
				s = E => {
					const m = (0, r.BF)(E, "images.storage");
					return typeof m == "number" && m > 0
				},
				v = E => Boolean((0, r.BF)(E, "contract.customer_enabled")),
				d = E => Boolean((0, e.oI)(E, _, l)),
				p = E => Boolean((0, a.Le)(E, g, l)),
				b = E => Boolean(getAccountFlipperFlag(E, g, c)),
				T = E => Boolean((0, a.Le)(E, g, u))
		},
		"../react/pages/internal-dns/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				jx: function() {
					return e
				},
				xk: function() {
					return i
				},
				xo: function() {
					return _
				},
				yt: function() {
					return l
				},
				z7: function() {
					return a
				}
			});
			const e = "internal",
				r = {
					ADD: "add",
					IMPORT: "import"
				},
				a = {
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
				l = "bulk_internal_zones",
				i = "internal-dns",
				_ = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_3V6auNfVdQDWthk"
		},
		"../react/pages/magic/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				GF: function() {
					return v
				},
				H3: function() {
					return c
				},
				H8: function() {
					return i
				},
				J: function() {
					return p
				},
				Nz: function() {
					return u
				},
				UQ: function() {
					return T
				},
				Up: function() {
					return l
				},
				W8: function() {
					return g
				},
				Ws: function() {
					return E
				},
				Xg: function() {
					return o
				},
				Y_: function() {
					return s
				},
				_j: function() {
					return a
				},
				a4: function() {
					return d
				},
				jS: function() {
					return b
				},
				rF: function() {
					return _
				},
				rG: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/utils/translator.tsx");
			const a = {
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
					registrationConnector: (0, e.BC)`/${"accountId"}/magic-networking/mconn/registration`,
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
				l = () => [{
					value: "all",
					label: (0, r.ZP)("account.magic_transit.configuration.static_routes.all_regions")
				}, {
					value: "AFR",
					label: (0, r.ZP)("common.regions.africa")
				}, {
					value: "SAM",
					label: (0, r.ZP)("common.regions.south_america")
				}, {
					value: "APAC",
					label: (0, r.ZP)("common.regions.asia_pacific")
				}, {
					value: "WEUR",
					label: (0, r.ZP)("common.regions.western_europe")
				}, {
					value: "EEUR",
					label: (0, r.ZP)("common.regions.eastern_europe")
				}, {
					value: "WNAM",
					label: (0, r.ZP)("common.regions.western_north_america")
				}, {
					value: "ENAM",
					label: (0, r.ZP)("common.regions.eastern_north_america")
				}, {
					value: "ME",
					label: (0, r.ZP)("common.regions.middle_east")
				}, {
					value: "OC",
					label: (0, r.ZP)("common.regions.oceania")
				}],
				i = m => [{
					value: "low",
					label: m("setting.low")
				}, {
					value: "mid",
					label: m("setting.medium")
				}, {
					value: "high",
					label: m("setting.high")
				}],
				_ = m => [{
					value: "request",
					label: m("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: m("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				c = m => [{
					value: "unidirectional",
					label: m("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: m("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				u = "magic-transit",
				g = "magic-wan",
				n = "gre_tunnel",
				o = "ipsec_tunnel",
				s = "interconnect",
				v = 64,
				d = 1476,
				p = "mid",
				b = "reply",
				T = m => [{
					value: void 0,
					label: m("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: m("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: m("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				E = m => [{
					value: "all",
					label: m("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: m("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: m("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Yt: function() {
					return l
				},
				_u: function() {
					return r
				},
				bK: function() {
					return e
				},
				lC: function() {
					return a
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
				r = "Magic network monitoring",
				a = "user journey",
				l = 60
		},
		"../react/pages/magic/overview/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				VZ: function() {
					return l
				},
				lC: function() {
					return a
				},
				r8: function() {
					return r
				},
				uB: function() {
					return i
				}
			});
			var e = t("../react/pages/magic/constants.ts");
			const r = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				a = "user journey",
				l = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				i = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				W_: function() {
					return r
				},
				X: function() {
					return e
				},
				lC: function() {
					return a
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
				r = "Magic packet captures",
				a = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				gb: function() {
					return n
				},
				iP: function() {
					return k
				},
				xL: function() {
					return E
				},
				rD: function() {
					return U
				},
				oT: function() {
					return d
				},
				i2: function() {
					return I
				},
				x1: function() {
					return _
				},
				lW: function() {
					return u
				},
				UA: function() {
					return w
				},
				K5: function() {
					return s
				},
				Ii: function() {
					return C
				},
				PJ: function() {
					return R
				},
				bK: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				i = t("../node_modules/@cloudflare/elements/es/index.js");
			const _ = () => r().createElement(c, null, r().createElement("svg", {
					width: "94",
					height: "5",
					viewBox: "0 0 94 5",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M48.416 2.2002L1.99976 2.20021",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M66.3115 2.2002L59.3767 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M78.7949 2.2002L76.021 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M91.2773 2.2002L88.5034 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				c = (0, a.createComponent)(({
					theme: D
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
				u = () => r().createElement(g, null, r().createElement("svg", {
					width: "211",
					height: "71",
					viewBox: "0 0 211 71",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("circle", {
					cx: "175.5",
					cy: "35.5",
					r: "35.5",
					fill: "#044096"
				}), r().createElement("path", {
					d: "M48.7492 28L2.33298 28",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M66.6457 28L59.7109 28",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M79.1281 28L76.3542 28",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M91.6106 28.0005L88.8366 28.0005",
					stroke: "#E2F5FA",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M164.092 28.2002L100.767 28.2002",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				g = (0, a.createComponent)(({
					theme: D
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
				n = () => r().createElement(o, null, r().createElement(i.Ei, {
					alt: "airplane",
					src: l,
					width: "85%"
				})),
				o = (0, a.createComponent)(({
					theme: D
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
				s = () => r().createElement(v, null, r().createElement("svg", {
					width: "104",
					height: "23",
					viewBox: "0 0 104 23",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M93.7248 0H90.2837V7.74245H93.7248V0Z",
					fill: "white"
				}), r().createElement("path", {
					d: "M103.187 9.4624H95.4448V12.9035H103.187V9.4624Z",
					fill: "white"
				}), r().createElement("path", {
					d: "M93.7248 14.6245H90.2837V22.367H93.7248V14.6245Z",
					fill: "white"
				}), r().createElement("path", {
					d: "M88.5632 9.4624H80.8208V12.9035H88.5632V9.4624Z",
					fill: "white"
				}), r().createElement("path", {
					d: "M36.0259 10.627L2.00024 10.627",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M56.8198 10.627L44.5328 10.627",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M72.8872 10.627L65.326 10.627",
					stroke: "#C3E9F3",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				v = (0, a.createComponent)(({
					theme: D
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
				d = () => r().createElement(p, null, r().createElement("svg", {
					width: "13",
					height: "13",
					viewBox: "0 0 13 13",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("ellipse", {
					cx: "6.33672",
					cy: "6.34376",
					rx: "6.33672",
					ry: "6.34376",
					fill: "#086FFF"
				}))),
				p = (0, a.createComponent)(({
					theme: D
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
				b = () => r().createElement(T, null, r().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				T = (0, a.createComponent)(({
					theme: D
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
				E = () => r().createElement(m, null, r().createElement("svg", {
					width: "22",
					height: "22",
					viewBox: "0 0 22 22",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M12.6922 0H9.30762V7.61541H12.6922V0Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M22.0002 9.30762H14.3848V12.6922H22.0002V9.30762Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M12.6922 14.3848H9.30762V22.0002H12.6922V14.3848Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M7.61542 9.30762H0V12.6922H7.61542V9.30762Z",
					fill: "#C5EBF5"
				}))),
				m = (0, a.createComponent)(({
					theme: D
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
				C = () => r().createElement(f, null, r().createElement("svg", {
					width: "32",
					height: "32",
					viewBox: "0 0 32 32",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M18.0868 0H13.2637V10.852H18.0868V0Z",
					fill: "#FBAD41"
				}), r().createElement("path", {
					d: "M31.35 13.2637H20.498V18.0868H31.35V13.2637Z",
					fill: "#FBAD41"
				}), r().createElement("path", {
					d: "M18.0868 20.498H13.2637V31.35H18.0868V20.498Z",
					fill: "#FBAD41"
				}), r().createElement("path", {
					d: "M10.852 13.2637H0V18.0868H10.852V13.2637Z",
					fill: "#FBAD41"
				}))),
				f = (0, a.createComponent)(({
					theme: D
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
				w = () => r().createElement(A, null, r().createElement("svg", {
					width: "48",
					height: "15",
					viewBox: "0 0 48 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M40.25 3.0781e-07L33.1902 7.05981L40.25 14.1196L47.3098 7.05981L40.25 3.0781e-07Z",
					fill: "#6ECCE5"
				}), r().createElement("path", {
					d: "M20.9031 6.61694L1.99994 6.61694",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				A = (0, a.createComponent)(({
					theme: D
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
				k = () => r().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 40",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M12.4025 16.0001L10.265 13.8927L8.015 16.1427C8.86952 12.6096 10.8668 9.45753 13.6967 7.17612C16.5265 4.8947 20.0305 3.6116 23.6645 3.52609C27.2984 3.44059 30.8589 4.55747 33.7929 6.70326C36.3879 8.60112 38.3644 11.2099 39.492 14.2014L40.339 13.9224L41.5646 13.5186L42.4174 13.2377C41.0751 9.5683 38.6567 6.37586 35.4641 4.08759C31.9041 1.53603 27.5888 0.257281 23.2134 0.457383C18.838 0.657484 14.6574 2.32478 11.3452 5.19063C8.03295 8.05648 5.78199 11.954 4.955 16.2551L2.63 13.9151L0.5 16.0001L6.5 22.0001L12.4025 16.0001Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M47.5646 24.0049L41.5646 18.0049L35.6471 24.0049L37.7846 26.1124L40.0346 23.8624C39.1898 27.4009 37.1992 30.561 34.3725 32.851C31.5458 35.1411 28.0415 36.4328 24.4048 36.5252C20.768 36.6176 17.2027 35.5055 14.2634 33.3619C11.5162 31.3585 9.45991 28.559 8.36721 25.3515L7.54721 25.6183L6.37385 26.0001L5.5 26.2845C6.79997 30.1536 9.28442 33.5247 12.6114 35.9135C16.1663 38.4659 20.4765 39.7483 24.8486 39.5544C29.2206 39.3605 33.4003 37.7015 36.7153 34.8443C40.0303 31.9872 42.2878 28.098 43.1246 23.8024L45.4346 26.1199L47.5646 24.0049Z",
					fill: "#C5EBF5"
				})),
				R = () => r().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 39 41",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M31.1271 6.20742L32.7396 3.67992C25.4571 -1.00008 13.5396 -1.00008 6.17465 3.67992L7.74965 6.21492C14.2521 2.11242 24.7221 2.11242 31.1271 6.20742Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M19.3896 4.67742C15.6941 4.70925 12.0606 5.63105 8.79679 7.36478C5.533 9.09851 2.73499 11.5931 0.639648 14.6374L3.16715 16.2499C5.00538 13.6448 7.43278 11.5105 10.2518 10.0209C13.0708 8.53125 16.2017 7.7283 19.3896 7.67742C28.3896 7.67742 34.1496 13.2724 35.9496 16.2274L38.4996 14.6749C36.4146 11.2174 29.7171 4.67742 19.3896 4.67742Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M19.3971 9.31242C13.4646 9.31242 8.46965 11.8849 5.34215 16.5574C3.6804 19.123 2.6668 22.0539 2.38852 25.0979C2.11024 28.142 2.57563 31.2081 3.74465 34.0324L6.51965 32.8924C5.53401 30.5237 5.1385 27.951 5.36713 25.3956C5.59576 22.8402 6.44168 20.3786 7.83215 18.2224C9.10397 16.3409 10.8316 14.8121 12.8539 13.7787C14.8762 12.7453 17.1272 12.2408 19.3971 12.3124C29.8296 12.3124 32.6421 20.8699 32.8446 24.1699C33.0771 28.0399 30.8646 28.4974 30.4446 28.5424L30.2046 28.5874C29.0973 28.8301 27.9393 28.6509 26.9571 28.0849C26.1096 27.4924 25.5846 26.4049 25.4046 24.8599C24.9171 20.6224 21.6546 18.8599 18.8796 19.0249C15.8271 19.2049 12.5421 21.6724 12.5421 26.6824C12.5421 33.9049 19.1721 39.7174 25.2921 40.9324L25.8921 37.9924C21.5646 37.1449 15.5421 32.7499 15.5421 26.6824C15.5421 23.5999 17.3046 22.1224 19.0521 22.0249C20.4246 21.9424 22.1421 22.7299 22.4271 25.2049C22.7121 27.6799 23.6721 29.4649 25.2771 30.5674C26.9271 31.5879 28.9083 31.9293 30.8046 31.5199C32.7547 31.3024 36.1746 29.4799 35.8372 24.0199C35.5896 19.9024 32.1471 9.31242 19.3971 9.31242Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M11.0346 23.1199C12.2496 19.2499 15.0771 16.9474 18.6471 16.9474C27.0396 16.9474 27.6921 24.1774 27.6921 26.3899H30.6921C30.6921 20.6524 27.5421 13.9474 18.6471 13.9474C13.7646 13.9474 9.75215 17.1274 8.14715 22.1974C7.17854 25.4217 7.25631 28.8699 8.3693 32.0471C9.4823 35.2244 11.5733 37.9674 14.3421 39.8824L16.0296 37.3999C13.7995 35.8488 12.116 33.6332 11.2191 31.069C10.3222 28.5048 10.2576 25.7229 11.0346 23.1199Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M22.9371 31.3399C22.1161 30.5273 21.4749 29.5512 21.055 28.475C20.6351 27.3988 20.4459 26.2464 20.4996 25.0924H17.4996C17.4514 26.6502 17.7256 28.2012 18.3051 29.648C18.8846 31.0948 19.7568 32.4062 20.8671 33.4999C23.4992 35.8335 26.9209 37.0778 30.4371 36.9799C30.7071 36.9799 30.9846 36.9799 31.2546 36.9799L31.1121 33.9799C27.8421 34.1299 24.8571 33.1699 22.9371 31.3399Z",
					fill: "#C5EBF5"
				})),
				U = () => r().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 28",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M24.0165 14.6841C25.4257 14.6841 26.8032 14.2662 27.9749 13.4833C29.1466 12.7004 30.0598 11.5876 30.5991 10.2857C31.1384 8.98378 31.2795 7.55118 31.0046 6.16907C30.7296 4.78695 30.051 3.5174 29.0546 2.52095C28.0581 1.5245 26.7886 0.84591 25.4065 0.57099C24.0244 0.29607 22.5918 0.437169 21.2898 0.976444C19.9879 1.51572 18.8751 2.42895 18.0922 3.60065C17.3093 4.77235 16.8915 6.14989 16.8915 7.55908C16.893 9.44827 17.6442 11.2596 18.9801 12.5955C20.3159 13.9313 22.1273 14.6825 24.0165 14.6841ZM24.0165 3.43783C24.8323 3.43783 25.6298 3.67976 26.3082 4.13302C26.9865 4.58628 27.5153 5.23052 27.8275 5.98427C28.1397 6.73801 28.2214 7.56741 28.0622 8.36758C27.903 9.16775 27.5102 9.90276 26.9333 10.4796C26.3564 11.0565 25.6214 11.4494 24.8212 11.6086C24.021 11.7677 23.1916 11.686 22.4379 11.3738C21.6841 11.0616 21.0399 10.5329 20.5866 9.85456C20.1334 9.17621 19.8915 8.37868 19.8915 7.56283C19.8915 6.46882 20.3261 5.41961 21.0996 4.64602C21.8732 3.87243 22.9224 3.43783 24.0165 3.43783Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M9.03896 17.7928C10.0773 17.7928 11.0923 17.4849 11.9557 16.9081C12.8191 16.3312 13.492 15.5112 13.8893 14.5519C14.2867 13.5926 14.3907 12.537 14.1881 11.5186C13.9855 10.5002 13.4855 9.56475 12.7513 8.83052C12.017 8.0963 11.0816 7.59628 10.0632 7.39371C9.04478 7.19114 7.98918 7.29511 7.02987 7.69247C6.07056 8.08983 5.25062 8.76273 4.67374 9.62609C4.09687 10.4894 3.78896 11.5045 3.78896 12.5428C3.79035 13.9348 4.34392 15.2693 5.32818 16.2536C6.31245 17.2379 7.647 17.7914 9.03896 17.7928ZM9.03896 10.2928C9.48397 10.2928 9.91898 10.4248 10.289 10.672C10.659 10.9193 10.9474 11.2707 11.1177 11.6818C11.288 12.0929 11.3325 12.5453 11.2457 12.9818C11.1589 13.4182 10.9446 13.8192 10.63 14.1338C10.3153 14.4485 9.91437 14.6628 9.47791 14.7496C9.04146 14.8364 8.58906 14.7919 8.17792 14.6216C7.76679 14.4513 7.41539 14.1629 7.16815 13.7929C6.92092 13.4229 6.78896 12.9878 6.78896 12.5428C6.78956 11.9465 7.02687 11.3748 7.44876 10.9533C7.87066 10.5318 8.44261 10.2951 9.03896 10.2951V10.2928Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M40.5112 18.5751H37.4865C36.3725 18.5741 35.2726 18.8238 34.2682 19.3056C33.2866 18.1392 32.0619 17.2014 30.6798 16.5581C29.2977 15.9147 27.7917 15.5813 26.2672 15.5811H21.7327C20.2109 15.5814 18.7076 15.9137 17.3275 16.5549C15.9474 17.1961 14.7238 18.1308 13.7422 19.2936C12.7413 18.8193 11.6473 18.5739 10.5397 18.5751H7.51571C5.5307 18.5773 3.62759 19.3667 2.22384 20.7701C0.820079 22.1736 0.0302906 24.0766 0.02771 26.0616L1.52771 27.5616H46.5L48 26.0616C47.9976 24.0764 47.2077 22.1732 45.8038 20.7697C44.3998 19.3661 42.4964 18.5769 40.5112 18.5751ZM7.51571 21.5751H10.5397C11.083 21.5778 11.6213 21.6794 12.1282 21.8751C11.7558 22.7322 11.5008 23.6356 11.37 24.5608H3.28571C3.59698 23.6878 4.17049 22.9323 4.92771 22.3978C5.68493 21.8634 6.58885 21.576 7.51571 21.5751ZM14.4007 24.5623C14.7489 22.8744 15.6681 21.358 17.0036 20.2685C18.3391 19.1791 20.0092 18.5831 21.7327 18.5811H26.2672C27.9907 18.5829 29.6609 19.1787 30.9966 20.268C32.3322 21.3573 33.2516 22.8736 33.6 24.5616L14.4007 24.5623ZM36.63 24.5623C36.4999 23.6397 36.2462 22.7389 35.8755 21.8841C36.3887 21.6824 36.935 21.5776 37.4865 21.5751H40.5112C41.4382 21.576 42.3422 21.8636 43.0993 22.3984C43.8564 22.9332 44.4297 23.689 44.7405 24.5623H36.63Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M39.0105 17.7928C40.0488 17.7928 41.0638 17.4849 41.9272 16.9081C42.7906 16.3312 43.4635 15.5112 43.8608 14.5519C44.2582 13.5926 44.3622 12.537 44.1596 11.5186C43.957 10.5002 43.457 9.56475 42.7228 8.83052C41.9885 8.0963 41.0531 7.59628 40.0347 7.39371C39.0163 7.19114 37.9607 7.29511 37.0014 7.69247C36.0421 8.08983 35.2221 8.76273 34.6452 9.62609C34.0684 10.4894 33.7605 11.5045 33.7605 12.5428C33.7619 13.9348 34.3154 15.2693 35.2997 16.2536C36.284 17.2379 37.6185 17.7914 39.0105 17.7928ZM39.0105 10.2928C39.4555 10.2928 39.8905 10.4248 40.2605 10.672C40.6305 10.9193 40.9189 11.2707 41.0892 11.6818C41.2595 12.0929 41.304 12.5453 41.2172 12.9818C41.1304 13.4182 40.9161 13.8192 40.6014 14.1338C40.2868 14.4485 39.8859 14.6628 39.4494 14.7496C39.013 14.8364 38.5606 14.7919 38.1494 14.6216C37.7383 14.4513 37.3869 14.1629 37.1397 13.7929C36.8924 13.4229 36.7605 12.9878 36.7605 12.5428C36.7611 11.9465 36.9984 11.3748 37.4203 10.9533C37.8422 10.5318 38.4141 10.2951 39.0105 10.2951V10.2928Z",
					fill: "#C5EBF5"
				})),
				I = () => r().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 40 46",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M26.4256 15.404C26.4243 15.3512 26.4193 15.2986 26.4106 15.2465C26.4031 15.1415 26.3956 15.0365 26.3806 14.939C26.38 14.9109 26.3749 14.8831 26.3656 14.8565C26.3665 14.8288 26.364 14.8011 26.3581 14.774C26.2831 13.9865 26.1781 13.214 26.0731 12.4715C26.0656 12.4715 26.0506 12.479 26.0506 12.4865C25.1206 12.839 24.1756 13.244 23.2081 13.6865C23.2606 14.084 23.3131 14.504 23.3581 14.9315L23.3656 14.939C23.388 15.0806 23.403 15.2233 23.4106 15.3665C23.4406 15.6065 23.4631 15.8465 23.4856 16.094C23.4931 16.214 23.5156 16.334 23.5156 16.4615C23.5156 16.589 23.5381 16.7165 23.5456 16.8365L23.5606 16.829C24.5581 16.349 25.5256 15.929 26.4406 15.5615H26.4481C26.4406 15.509 26.4331 15.464 26.4256 15.404ZM22.0531 16.3565C21.8356 16.229 21.6181 16.109 21.3931 15.9965C20.9731 15.764 20.5531 15.539 20.1256 15.329C20.0814 15.2982 20.0335 15.273 19.9831 15.254C19.9831 15.239 19.9831 15.239 19.9756 15.2465C18.9181 15.794 17.8581 16.3765 16.7956 16.994H16.7656C16.7131 17.0315 16.6531 17.0615 16.5931 17.099C16.5331 17.1365 16.4656 17.174 16.4131 17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856C12.2581 19.784 11.2756 20.444 10.3381 21.1115C9.46812 21.734 8.63562 22.3565 7.86312 22.9865C6.68838 23.9077 5.56424 24.8916 4.49562 25.934C1.00812 29.354 -0.199384 32.0765 0.918116 34.0115H0.925616C2.03562 35.939 4.99062 36.2465 9.70061 34.9415C10.4806 34.724 11.2981 34.469 12.1456 34.169C11.9956 33.1865 11.8606 32.1815 11.7481 31.124C7.11312 32.8115 4.08312 33.104 3.52062 32.519C3.49539 32.0868 3.62281 31.6594 3.88062 31.3115C4.70562 29.894 6.85062 27.5615 10.3306 24.854C10.6606 24.6065 10.9831 24.3515 11.3356 24.104C11.4481 24.014 11.5681 23.9315 11.6881 23.849C11.8831 23.7065 12.0781 23.564 12.2806 23.4215C12.3856 23.3465 12.4981 23.264 12.6106 23.1815C12.7006 23.114 12.7981 23.0465 12.8881 22.979C12.9931 22.904 13.0981 22.8365 13.1956 22.7615L13.2031 22.769C14.1331 22.124 15.1456 21.464 16.2181 20.804C16.8181 20.444 17.4481 20.069 18.0931 19.694C18.7381 19.319 19.3681 18.974 19.9831 18.6365C21.0931 18.0365 22.1731 17.4965 23.2006 16.994C22.8181 16.775 22.4356 16.5665 22.0531 16.3565ZM16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C15.4306 29.624 14.4706 30.0515 13.5556 30.419C13.5516 30.4231 13.5463 30.4257 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C13.9306 33.509 13.9306 33.5015 13.9456 33.5015C14.8681 33.1415 15.8131 32.7365 16.7806 32.2865C16.7356 31.889 16.6756 31.475 16.6306 31.049ZM39.0781 11.975H39.0706C37.9606 10.04 34.9981 9.72502 30.2881 11.03C29.5081 11.2475 28.6981 11.5025 27.8506 11.8025V11.8175C28.0006 12.7925 28.1356 13.805 28.2481 14.855C32.8531 13.1825 35.8756 12.8975 36.4756 13.475C36.7006 14.39 34.4431 17.405 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006C27.0031 23.06 26.8981 23.1275 26.7931 23.2025C25.8631 23.8475 24.8506 24.5 23.7706 25.175C23.1706 25.5425 22.5481 25.91 21.9031 26.285C21.2581 26.66 20.6206 27.005 20.0056 27.3425C18.8881 27.9425 17.8156 28.4975 16.7881 28.985C17.1631 29.2025 17.5381 29.4125 17.9131 29.615C18.0781 29.7125 18.2431 29.8025 18.4081 29.885C18.4883 29.9342 18.5709 29.9793 18.6556 30.02C19.0381 30.23 19.4206 30.4325 19.7956 30.6275C19.8631 30.665 19.9306 30.695 19.9981 30.725L20.0056 30.7325C21.0631 30.1925 22.1281 29.6 23.2006 28.9925L23.2156 28.985L23.2231 28.9775L23.5831 28.7675V28.76L23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1856 27.1925 26.4031 27.0575 26.6131 26.915L26.6956 26.855H26.7031C26.7707 26.8195 26.8359 26.7794 26.8981 26.735C27.3331 26.4575 27.7531 26.1725 28.1731 25.8875C28.3006 25.805 28.4281 25.715 28.5556 25.625C28.8031 25.46 29.0431 25.295 29.2831 25.1225C29.3956 25.0475 29.5006 24.965 29.6131 24.89L29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23C33.3003 22.0761 34.4244 21.0897 35.4931 20.045C36.6912 18.9223 37.7357 17.6463 38.5996 16.25C39.0383 15.5378 39.329 14.7445 39.4546 13.9175C39.5395 13.2464 39.4076 12.5658 39.0781 11.975Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M26.7931 22.784V22.775C26.7931 22.34 26.7856 21.9125 26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13V19.115C26.6956 19.04 26.6956 18.965 26.6881 18.89C26.6868 18.8198 26.6818 18.7497 26.6731 18.68C26.6656 18.545 26.6581 18.41 26.6581 18.275C26.6281 17.795 26.5981 17.33 26.5606 16.865C26.5531 16.775 26.5456 16.685 26.5381 16.6025C26.5156 16.3475 26.4931 16.1075 26.4706 15.86L26.4481 15.6125C26.442 15.5983 26.4394 15.5829 26.4406 15.5675L26.4481 15.56C26.4406 15.5075 26.4331 15.4625 26.4256 15.4025C26.4243 15.3497 26.4193 15.2971 26.4106 15.245C26.4031 15.14 26.3956 15.035 26.3806 14.9375C26.3799 14.9094 26.3749 14.8816 26.3656 14.855C26.3665 14.8273 26.364 14.7996 26.3581 14.7725C26.2831 13.985 26.1781 13.2125 26.0731 12.47C25.8559 10.9959 25.5631 9.534 25.1956 8.09002C23.9731 3.35752 22.2256 0.95752 19.9981 0.95752C17.7706 0.95752 16.0156 3.36502 14.7931 8.09752C14.5906 8.88502 14.4106 9.71752 14.2381 10.6025C15.1681 10.9625 16.1131 11.3525 17.0806 11.78C17.4032 9.38634 18.0991 7.05805 19.1431 4.88002C19.4581 4.34002 19.7506 4.03252 19.9981 3.96502C20.9056 4.22002 22.3831 7.68502 23.2081 13.685C23.2606 14.0825 23.3131 14.5025 23.3581 14.93L23.3656 14.9375C23.388 15.0791 23.403 15.2218 23.4106 15.365C23.4406 15.605 23.4631 15.845 23.4856 16.0925C23.4931 16.2125 23.5156 16.3325 23.5156 16.46C23.5156 16.5875 23.5381 16.715 23.5456 16.835C23.5531 16.955 23.5681 17.0825 23.5831 17.21V17.2175C23.6731 18.3575 23.7406 19.5575 23.7706 20.825C23.7856 21.53 23.8006 22.25 23.8006 22.9925C23.8006 23.735 23.7931 24.4625 23.7706 25.175C23.7331 26.435 23.6806 27.6275 23.5831 28.76V28.7675C23.6506 28.73 23.7181 28.685 23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1481 27.215 26.3356 27.1025 26.5081 26.99C26.5444 26.9668 26.5794 26.9418 26.6131 26.915L26.6956 26.855H26.7031C26.7631 25.67 26.7931 24.455 26.7931 23.2175L26.7931 23.2025C26.7995 23.1302 26.802 23.0576 26.8006 22.985V22.7975L26.7931 22.784ZM25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144L23.5531 29.1515C23.4631 30.269 23.3431 31.3115 23.2156 32.2865C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494L26.0731 33.4865C26.2231 32.504 26.3506 31.4765 26.4481 30.404C26.0746 30.2615 25.6996 30.104 25.3081 29.9315ZM25.7506 35.384C24.8281 35.024 23.8831 34.634 22.9231 34.2065C22.0606 39.0665 20.7931 41.819 20.0131 42.0215C19.1056 41.804 17.6056 38.339 16.7806 32.2865C16.7356 31.889 16.6756 31.4765 16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C16.4281 29.024 16.4206 28.8965 16.4056 28.769C16.3156 27.629 16.2556 26.429 16.2181 25.1615C16.2031 24.4565 16.1956 23.7365 16.1881 22.9865C16.1806 22.2365 16.2031 21.5165 16.2181 20.804C16.2556 19.5515 16.3156 18.359 16.4131 17.2265V17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856L13.2931 19.1315C13.2331 20.3165 13.1956 21.524 13.1956 22.7615L13.2031 22.769C13.2011 22.769 13.1992 22.7698 13.1978 22.7712C13.1964 22.7726 13.1956 22.7745 13.1956 22.7765C13.1919 22.8465 13.1919 22.9166 13.1956 22.9865V23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864C13.3381 28.0865 13.4281 29.2715 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C14.1329 34.982 14.4209 36.442 14.7931 37.8815C16.0081 42.6215 17.7706 45.0215 19.9906 45.0215H19.9996C21.3346 45.0215 22.4821 44.1665 23.4646 42.4715C24.2378 41.0254 24.8202 39.485 25.1971 37.889C25.3996 37.094 25.5946 36.2615 25.7596 35.384H25.7506ZM15.3406 13.064L14.6206 12.7715C14.3881 12.674 14.1556 12.5765 13.9231 12.4865L13.9156 12.494C13.7731 13.4765 13.6531 14.504 13.5481 15.569C13.9156 15.7265 14.2906 15.884 14.6881 16.0565H14.6956C15.2581 16.2965 15.8356 16.5665 16.4356 16.8515V16.829C16.5331 15.7115 16.6456 14.6765 16.7806 13.7015C16.2931 13.475 15.8206 13.274 15.3406 13.064Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M35.4331 25.904C34.8706 25.3415 34.2631 24.7865 33.6031 24.209H33.5956C32.8231 24.8315 32.0206 25.4465 31.1731 26.069L31.1656 26.0765C31.1581 26.0765 31.1581 26.084 31.1506 26.0915C34.8856 29.219 36.6181 31.6715 36.4006 32.444C35.7631 33.119 32.0506 32.6915 26.4481 30.404C26.0731 30.2615 25.6981 30.104 25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144C23.4406 29.084 23.3356 29.0315 23.2231 28.979L23.2156 28.9865C22.1881 28.4915 21.1231 27.944 20.0056 27.344C19.3756 27.0065 18.7456 26.654 18.0931 26.279C17.4406 25.904 16.8181 25.529 16.2181 25.1615C15.1456 24.494 14.1406 23.8415 13.2031 23.204L13.1956 23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864L13.3006 26.8565C14.2981 27.5065 15.3331 28.144 16.4056 28.769L16.7881 28.9865C17.1631 29.204 17.5381 29.414 17.9131 29.6165C18.0781 29.714 18.2431 29.804 18.4081 29.8865C18.4883 29.9357 18.5709 29.9808 18.6556 30.0215C19.0381 30.2315 19.4206 30.434 19.7956 30.629C19.8631 30.6665 19.9306 30.6965 19.9981 30.7265L20.0056 30.734C20.0731 30.7715 20.1406 30.809 20.2081 30.839C20.6656 31.079 21.1231 31.304 21.5806 31.5215C22.1131 31.784 22.6456 32.0315 23.1631 32.2715C23.1791 32.2731 23.1944 32.2782 23.2081 32.2865H23.2156C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494C26.4256 33.6365 26.7856 33.7715 27.1381 33.899C27.4906 34.0265 27.8356 34.1465 28.1806 34.2665C28.2068 34.2695 28.2322 34.2771 28.2556 34.289C28.5931 34.4015 28.9231 34.514 29.2381 34.604C29.5756 34.7165 29.9056 34.814 30.2356 34.904C30.5281 34.9865 30.8131 35.054 31.0906 35.1215C31.3681 35.189 31.6531 35.2565 31.9156 35.309C32.2081 35.369 32.4931 35.429 32.7706 35.474C33.3256 35.564 33.8506 35.6315 34.3306 35.6615C35.2141 35.7338 36.1035 35.6603 36.9631 35.444C37.2573 35.3636 37.5416 35.2504 37.8106 35.1065C38.301 34.8394 38.7084 34.4424 38.9881 33.959C40.1056 32.0315 38.9056 29.324 35.4331 25.904ZM10.3531 21.125H10.3456V21.1175L10.3381 21.11C9.46812 21.7325 8.63562 22.355 7.86312 22.985L7.88561 23C8.65811 23.615 9.46812 24.23 10.3306 24.8525C10.6606 24.605 10.9831 24.35 11.3356 24.1025C11.4481 24.0125 11.5681 23.93 11.6881 23.8475C11.8831 23.705 12.0781 23.5625 12.2806 23.42C12.3781 23.3525 12.4756 23.2775 12.5806 23.21C12.6856 23.1425 12.7756 23.0675 12.8806 22.9925C12.8826 22.9925 12.8845 22.9917 12.8859 22.9903C12.8873 22.9889 12.8881 22.987 12.8881 22.985V22.9775C11.9746 22.3415 11.1331 21.734 10.3531 21.125ZM26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13C25.6981 18.4775 24.6556 17.8475 23.5906 17.2175H23.5831V17.21L23.2006 16.9925C22.8181 16.775 22.4356 16.565 22.0531 16.355C21.8356 16.2275 21.6181 16.1075 21.3931 15.995C20.9731 15.7625 20.5531 15.5375 20.1256 15.3275C20.0814 15.2967 20.0335 15.2715 19.9831 15.2525C19.9831 15.2375 19.9831 15.2375 19.9756 15.245C19.4506 14.9675 18.9331 14.7125 18.4156 14.465C17.8681 14.195 17.3281 13.94 16.7881 13.7H16.7806C16.2931 13.475 15.8206 13.2725 15.3406 13.0625L14.6206 12.77C14.3881 12.6725 14.1556 12.575 13.9231 12.485C13.1956 12.2 12.4831 11.9375 11.7856 11.7125C11.0881 11.4725 10.4056 11.2625 9.75311 11.075C9.46811 11 9.17562 10.925 8.90562 10.865C8.62062 10.7975 8.34311 10.73 8.07311 10.67C7.60812 10.5725 7.16562 10.4975 6.73812 10.4375C6.34812 10.385 5.96562 10.3475 5.61312 10.325C5.31312 10.3025 5.02062 10.3025 4.75062 10.3025C4.48981 10.3046 4.22935 10.3221 3.97062 10.355L3.96312 10.3475C3.63076 10.3889 3.30223 10.4566 2.98062 10.55C2.86812 10.5875 2.75562 10.625 2.65062 10.6625C2.47191 10.7314 2.29888 10.8141 2.13312 10.91C1.89763 11.04 1.68278 11.2043 1.49562 11.3975C1.3031 11.5844 1.1366 11.7963 1.00062 12.0275C-0.116884 13.955 1.08312 16.6625 4.55562 20.0825C5.13312 20.6375 5.74062 21.2075 6.40812 21.77C7.18062 21.1475 7.98312 20.5325 8.83062 19.91C8.83812 19.91 8.83812 19.9025 8.84562 19.9025C5.13312 16.7825 3.39312 14.33 3.59562 13.5275C4.27062 12.875 7.97562 13.3025 13.5481 15.5675C13.9156 15.725 14.2906 15.8825 14.6881 16.055H14.6956C15.2581 16.295 15.8356 16.565 16.4356 16.85C16.5481 16.895 16.6531 16.9475 16.7656 16.9925C16.7697 16.9966 16.7749 16.9992 16.7806 17C17.8081 17.495 18.8756 18.04 19.9831 18.635C20.6131 18.9725 21.2431 19.3325 21.8881 19.7C22.5331 20.0675 23.1631 20.45 23.7706 20.825C24.8506 21.4925 25.8581 22.145 26.7931 22.7825L26.7931 22.775C26.7931 22.3415 26.7856 21.914 26.7781 21.4865L26.7781 21.485ZM32.1106 22.985C31.3381 22.37 30.5131 21.7475 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006L27.1081 23C28.0156 23.6375 28.8631 24.26 29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23L32.1106 22.985Z",
					fill: "#C5EBF5"
				}))
		},
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				A2: function() {
					return c
				},
				He: function() {
					return i
				},
				N$: function() {
					return _
				},
				Qq: function() {
					return a
				},
				ST: function() {
					return l
				},
				wM: function() {
					return r
				}
			});
			var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const r = {
					PAGE: "apple-login"
				},
				a = "login-apple-jwt",
				l = "cf-test",
				i = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				_ = u => [{
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
		"../react/pages/page-rules/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return a
				},
				c: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let a = function(i) {
				return i.TEMPLATE_SELECTED = "template selected", i.TEMPLATE_PRODUCT_SELECTED = "template product selected", i.TEMPLATE_SAVE_DRAFT = "template save draft", i.TEMPLATE_CANCEL = "template cancel", i.TEMPLATE_DEPLOY = "template deploy", i
			}({});
			const l = (i, _) => r().sendEvent(i, {
				template_name: _
			})
		},
		"../react/pages/pages/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				A: function() {
					return b
				},
				C1: function() {
					return g
				},
				GF: function() {
					return U
				},
				HD: function() {
					return m
				},
				IK: function() {
					return i
				},
				L7: function() {
					return a
				},
				Li: function() {
					return p
				},
				Ni: function() {
					return A
				},
				OG: function() {
					return F
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
					return re
				},
				X3: function() {
					return o
				},
				bA: function() {
					return D
				},
				eO: function() {
					return s
				},
				fH: function() {
					return d
				},
				fQ: function() {
					return T
				},
				fR: function() {
					return e
				},
				ff: function() {
					return I
				},
				iS: function() {
					return E
				},
				nY: function() {
					return f
				},
				w3: function() {
					return l
				},
				wJ: function() {
					return u
				},
				wp: function() {
					return v
				},
				yu: function() {
					return n
				},
				zF: function() {
					return R
				},
				zG: function() {
					return k
				}
			});
			const e = "api.pages.cloudflare.com",
				r = "cloudflare-workers-and-pages",
				a = {
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
						appHomepage: `https://github.com/apps/${r}`,
						installations: "https://github.com/settings/installations",
						newInstallation: `https://github.com/apps/${r}/installations/new`,
						userOAuth: "https://github.com/login/oauth/authorize"
					},
					gitlab: {
						authorize: "https://gitlab.com/oauth/authorize",
						manage: "https://gitlab.com/-/profile/applications"
					},
					webAnalytics: "https://developers.cloudflare.com/analytics/web-analytics/",
					feedbackSurvey: "https://forms.gle/dfM8YfpzY4aV3gv56"
				},
				l = "Allow Members - Cloudflare Pages",
				i = 58,
				_ = {
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
				g = 100,
				n = 350,
				o = 1e7,
				s = ["Success:", "Error:", "Failed:"],
				v = 10,
				d = "_headers",
				p = "_redirects",
				b = "_routes.json",
				T = "_worker.js",
				E = "do-a-barrel-roll",
				m = [d, p, b, T],
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
				A = 1e5,
				k = 75e3,
				R = 2e5,
				U = 15e4,
				I = 3e3,
				D = 2250,
				$ = "workers",
				z = "cloudflare_pages_build_caching",
				Z = 2;
			let re = function(W) {
				return W[W.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", W[W.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", W[W.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", W[W.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", W[W.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", W[W.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", W
			}({});
			const te = 1,
				H = 2,
				F = 2
		},
		"../react/pages/pages/routes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return a
				},
				_j: function() {
					return r
				},
				zE: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
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
				a = {
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
				l = _ => `${_.subdomain}.pages.dev`,
				i = {
					installation: {
						github: {
							user: (0, e.BC)`https://github.com/settings/installations/${"installation_id"}`,
							organization: (0, e.BC)`https://github.com/organizations/${"organization_name"}/settings/installations/${"installation_id"}`
						},
						gitlab: (0, e.BC)`https://gitlab.com/${"username"}/${"repo"}/-/hooks/`
					}
				}
		},
		"../react/pages/pipelines/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return c
				},
				L9: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						v = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), v.forEach(function(d) {
						l(n, d, s[d])
					})
				}
				return n
			}

			function l(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var v = s.call(n, o || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				u = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const g = (n, o = {}) => {
				r().sendEvent(n, a({}, o, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/profile/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				QV: function() {
					return l
				},
				Xn: function() {
					return r
				},
				iH: function() {
					return e
				},
				xq: function() {
					return a
				}
			});
			const e = "iam-authentication",
				r = "login",
				a = "profile",
				l = {
					[r]: {
						clickTryOther2FAMethodOrBackupCode: "click try another 2fa method or backup code",
						clickTryRecovery: "click try recovery",
						clickLoginFromMobileApp2fa: "click login on mobile-app/backup code 2fa"
					},
					[a]: {
						clickRegenerateBackupCodes: "click regenerate backup codes"
					}
				}
		},
		"../react/pages/r2/routes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return a
				},
				Jg: function() {
					return _
				},
				_j: function() {
					return r
				},
				vF: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
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
				a = {
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
				l = c => {
					const u = "r2.cloudflarestorage.com";
					switch (c) {
						case "default":
							return u;
						case "eu":
							return `eu.${u}`;
						case "fedramp":
							return `fedramp.${u}`
					}
				},
				i = (c, u) => {
					const g = l(u);
					return `https://${c}.${g}`
				},
				_ = (c, u, g) => `${i(c,u)}/${g}`
		},
		"../react/pages/secrets-store/resources/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Hf: function() {
					return A
				},
				JJ: function() {
					return _
				},
				Js: function() {
					return l
				},
				LN: function() {
					return p
				},
				Nm: function() {
					return s
				},
				Oh: function() {
					return T
				},
				Q2: function() {
					return R
				},
				QF: function() {
					return b
				},
				RR: function() {
					return m
				},
				T_: function() {
					return k
				},
				Xm: function() {
					return c
				},
				Zl: function() {
					return U
				},
				dv: function() {
					return i
				},
				fp: function() {
					return o
				},
				jx: function() {
					return w
				},
				nQ: function() {
					return v
				},
				px: function() {
					return E
				},
				tP: function() {
					return a
				},
				vh: function() {
					return d
				},
				wB: function() {
					return D
				},
				z3: function() {
					return I
				},
				zt: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/yup/es/index.js");
			const a = "secrets-store-account-level",
				l = "https://developers.cloudflare.com/secrets-store/",
				i = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				_ = 1,
				c = 10,
				u = 100;
			let g = function($) {
					return $.NAME = "name", $
				}({}),
				n = function($) {
					return $.NAME = "name", $
				}({});
			const o = {
				initialPaginationState: {
					page: _,
					perPage: c
				},
				initialSortState: {
					name: g.NAME,
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
			let s = function($) {
					return $.NAME = "name", $.COMMENT = "comment", $.TAGS = "tags", $.SERVICES = "services", $.STATUS = "status", $
				}({}),
				v = function($) {
					return $.PENDING = "pending", $.ACTIVE = "active", $.DELETED = "deleted", $
				}({}),
				d = function($) {
					return $.LIST_SECRETS_STORES = "listSecretsStores", $.LIST_SECRETS = "listSecrets", $.GET_SECRET = "getSecret", $.SECRETS_QUOTA = "secretsQuota", $
				}({}),
				p = function($) {
					return $.CREATE = "create", $.EDIT = "edit", $.DUPLICATE = "duplicate", $
				}({}),
				b = function($) {
					return $.WORKERS = "workers", $
				}({});
			const T = "default_secrets_store";
			let E = function($) {
				return $.CREATE = "create", $.EDIT = "edit", $.DUPLICATE = "duplicate", $.VIEW = "view", $
			}({});
			const m = "delete_operation",
				C = /^[a-zA-Z0-9_-]+$/,
				f = ($, z, Z, re, te) => r.Ry().shape({
					name: r.Z_().required($("secrets_store.form.create.errors.name.required")).matches(C, $("secrets_store.form.create.errors.name.invalid_characters")).max(255, $("secrets_store.form.create.errors.name.max")),
					value: r.Z_().test("required-if-creating", $("secrets_store.form.create.errors.value.required"), H => z || te ? !!H : !0).max(1024, $("secrets_store.form.create.errors.value.max")),
					comment: r.Z_().max(1024, $("secrets_store.form.create.errors.comment.max")),
					scopes: r.Z_().required().oneOf(Object.values(b), $("secrets_store.form.create.errors.scopes.invalid")),
					labels: r.IX().of(r.Z_())
				}),
				w = ($, z, Z, re, te) => r.Ry().shape({
					secrets: r.IX().of(f($, z, Z, re, te))
				}),
				A = {
					name: "",
					value: "",
					scopes: b.WORKERS,
					comment: ""
				},
				k = "secrets-store.store.secret";
			let R = function($) {
				return $.DUPLICATE = "duplicate", $.DEPLOY = "deploy", $
			}({});
			const U = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let I = function($) {
					return $.CREATE_SECRET = "create secrets store secret", $.EDIT_SECRET = "edit secrets store secret", $.DUPLICATE_SECRET = "duplicate secrets store secret", $.DELETE_SECRET = "delete secrets store secret", $.BIND_SECRET = "open secrets store binding drawer", $
				}({}),
				D = function($) {
					return $.SECRETS_STORE = "secrets store main", $.WORKERS_BINDING = "workers binding drawer", $
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Ev: function() {
					return a
				},
				RY: function() {
					return e
				},
				v9: function() {
					return r
				}
			});
			let e = function(l) {
				return l.LOAD_SCAN_INFO = "load url scan information", l.INITIATE_URL_SCAN = "initiate url scan", l
			}({});
			const r = {
				MANAGE_INSIGHT: "manage security insight",
				BULK_ARCHIVE: "bulk archive security insights",
				EXPAND_INSIGHT_ROW: "expand security issue row",
				ONE_CLICK_RESOLVE_BUTTON: "one click resolve security issue button",
				FOLLOW_RESOLVE_URL: "follow security issue resolve url",
				CLICK_SCAN_NOW: "run security scan",
				CLICK_EXPORT_INSIGHTS: "click export insights",
				CLICK_DETAILS_BUTTON: "click insights row details button"
			};
			let a = function(l) {
				return l.LOAD_THREAT_EVENTS = "load threat events", l.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", l.THREAT_EVENTS_FILTERS = "threat events filters applied", l.ABUSE_REPORT_BUTTON_CLICK = "clicked abuse report button", l.ABUSE_REPORT_SUBMIT_CLICK = "clicked submit abuse report button", l.ABUSE_REPORT_SUBMIT_FAILED = "abuse report submission failed", l.ABUSE_REPORT_SUBMIT_SUCCESS = "abuse report submitted successfully", l
			}({})
		},
		"../react/pages/security/analytics/resources/labels.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				AU: function() {
					return a
				},
				Bc: function() {
					return r
				},
				Bt: function() {
					return e
				},
				e_: function() {
					return l
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
				r = {
					"Behavioral Analysis": "security_analytics.labels.bot_source.behavioral_analysis",
					Heuristics: "security_analytics.labels.bot_source.heuristics",
					"Machine Learning": "security_analytics.labels.bot_source.machine_learning",
					"Not Computed": "security_analytics.labels.bot_source.not_computed",
					"JS Fingerprinting": "security_analytics.labels.bot_source.js_fingerprinting",
					"Verified Bot": "security_analytics.labels.bot_source.verified_bot",
					"Cloudflare Service": "security_analytics.labels.bot_source.cloudflare_service"
				},
				a = {
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
				l = {
					[a.ASN]: "firewall.analytics.services.labels.asn",
					[a.COUNTRY]: "firewall.analytics.services.labels.country",
					[a.IP]: "firewall.analytics.services.labels.ip",
					[a.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[a.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[a.VALIDATION]: "firewall.analytics.services.labels.validation",
					[a.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[a.WAF]: "firewall.analytics.services.labels.waf",
					[a.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[a.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[a.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[a.BIC]: "firewall.analytics.services.labels.bic",
					[a.HOT]: "firewall.analytics.services.labels.hot",
					[a.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[a.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[a.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[a.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[a.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[a.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[a.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[a.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[a.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[a.DLP]: "firewall.analytics.services.labels.dlp",
					[a.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				}
		},
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				DC: function() {
					return v
				},
				Ff: function() {
					return c
				},
				Lz: function() {
					return s
				},
				RM: function() {
					return g
				},
				Ss: function() {
					return o
				},
				dR: function() {
					return i
				},
				gW: function() {
					return _
				},
				r5: function() {
					return u
				},
				y$: function() {
					return n
				},
				zs: function() {
					return l
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				a = t("../react/pages/security/analytics/resources/labels.ts");
			const l = ["block", "challenge", "jschallenge", "managed_challenge"],
				i = {
					label: "security_analytics.filters.mitigated",
					parse: d => d === "true" || d === !0,
					urlParam: "mitigated",
					type: e.kE.select,
					options: [!0, !1],
					operators: [r.Gn.equals, r.Gn.notEquals],
					rawLogField: "securityAction"
				},
				_ = {
					label: "security_analytics.filters.security_action",
					urlParam: "mitigation-action",
					type: e.kE.select,
					options: Object.keys(a.Bt).filter(d => !["challenge_failed", "jschallenge_failed"].includes(d)),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securityAction"
				},
				c = {
					label: "security_analytics.filters.security_source",
					urlParam: "mitigation-service",
					type: e.kE.select,
					options: Object.keys(a.e_).filter(d => d !== "unknown"),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securitySources"
				};
			let u = function(d) {
				return d.MITIGATED_BY_WAF = "mitigatedByWAF", d.SERVED_BY_CLOUDFLARE = "servedByCloudflare", d.SERVED_BY_ORIGIN = "servedByOrigin", d
			}({});
			const g = {
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
				o = {
					suspicious_login_failure: 201326592,
					suspicious_login_attempt: 201326593
				},
				s = "security-analytics-log-explorer";
			let v = function(d) {
				return d.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', d.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', d.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', d.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', d.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', d.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", d.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", d.OPEN_SIDE_DRAWER = "open security analytics side drawer", d.CLOSE_SIDE_DRAWER = "close security analytics side drawer", d
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Fj: function() {
					return u
				},
				kq: function() {
					return c
				},
				xr: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						v = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), v.forEach(function(d) {
						l(n, d, s[d])
					})
				}
				return n
			}

			function l(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var v = s.call(n, o || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
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
				g = ({
					name: n,
					category: o = "user journey",
					product: s = c.MAIN,
					productName: v,
					additionalData: d
				}) => {
					r().sendEvent(n, a({
						category: o,
						product: s,
						productName: v
					}, d || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Fm: function() {
					return l
				},
				N3: function() {
					return e
				},
				UN: function() {
					return a
				},
				h1: function() {
					return r
				}
			});
			let e = function(i) {
					return i.INITIAL_FETCH_SCORES = "view bots scores distribution", i.FETCH_CONFIGURATION = "view bots configuration page", i.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", i.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", i.UPDATE_SETTINGS = "update bots settings", i.DELETE_RULE = "delete bots ruleset", i.UPDATE_RULE = "update bots ruleset", i.FETCH_RULES = "view bots ruleset", i.CONFIGURE_BOT_MANAGEMENT = "view bots management", i.WAF_RULES_REDIRECT = "redirect waf rules", i.CHANGED_ZONE_SETTINGS = "change zone setting", i
				}({}),
				r = function(i) {
					return i.PROVIDED_TEMPLATE = "provided template link in detection card", i.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", i.USE_TEMPLATE = "use template", i.CREATE_FIREWALL_RULE = "create firewall rule", i.WAF_RULES = "waf rules", i
				}({});
			const a = "user journey",
				l = "Bots"
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				NC: function() {
					return l
				},
				YC: function() {
					return i
				},
				aR: function() {
					return a
				},
				nz: function() {
					return r
				}
			});
			var e = t("../react/pages/security/detections/pages/root/components/new-settings/resources/types.ts");
			const r = {
					[e.MQ.WebApplicationExploits]: "settings.tabs.web-application-exploits",
					[e.MQ.DdosAttacks]: "settings.tabs.ddos-attacks",
					[e.MQ.BotTraffic]: "settings.tabs.bot-traffic",
					[e.MQ.ApiAbuse]: "settings.tabs.api-abuse",
					[e.MQ.ClientSideAbuse]: "settings.tabs.client-side-abuse",
					[e.MQ.DomainSettings]: "settings.filters.domain-settings",
					[e.MQ.WebAssetsAndEndpoints]: "settings.filters.web-assets-and-endpoints",
					[e.MQ.RuleTemplates]: "settings.filters.rule-templates",
					[e.MQ.Detections]: "settings.filters.detections"
				},
				a = {
					[e.MQ.WebApplicationExploits]: "security-waf",
					[e.MQ.DdosAttacks]: "retarget",
					[e.MQ.BotTraffic]: "security-bots",
					[e.MQ.ApiAbuse]: "api-security",
					[e.MQ.ClientSideAbuse]: "user-multi"
				},
				l = {
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
			let i = function(_) {
				return _.LOAD_SETTINGS = "load setting", _.OPEN_SIDE_MODAL_SETTING = "open side modal setting", _.CLOSE_SIDE_MODAL_SETTING = "close side modal setting", _.CHANGE_SETTING = "change setting", _.FILTER_SETTING = "filter setting", _
			}({})
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/types.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				At: function() {
					return l
				},
				MQ: function() {
					return e
				},
				fo: function() {
					return a
				}
			});
			let e = function(i) {
					return i.WebApplicationExploits = "web-application-exploits", i.DdosAttacks = "ddos-attacks", i.BotTraffic = "bot-traffic", i.ApiAbuse = "api-abuse", i.ClientSideAbuse = "client-side-abuse", i.DomainSettings = "domain-settings", i.WebAssetsAndEndpoints = "web-assets-and-endpoints", i.RuleTemplates = "rule-templates", i.Detections = "detections", i
				}({}),
				r = function(i) {
					return i.DomainSettings = "domain-settings", i.WebAssetsAndEndpoints = "web-assets-and-endpoints", i.RuleTemplates = "rule-templates", i.Detections = "detections", i
				}({}),
				a = function(i) {
					return i.Tab = "tabs", i.Filters = "filters", i
				}({}),
				l = function(i) {
					return i.AILabyrinth = "ai-labyrinth", i.BlockAIBots = "block-ai-bots", i.BrowserIntegrity = "browser-integrity", i.ChallengePassage = "challenge-passage", i.ClientCertificates = "client-certificates", i.CloudflareManagedRuleset = "cloudflare-managed-ruleset", i.CreateDeveloperPortal = "create-developer-portal", i.CustomFallthrough = "custom-fallthrough", i.EndpointDiscovery = "endpoint-discovery", i.FirewallAi = "firewall-ai", i.HttpDdos = "http-ddos", i.IpAccessRules = "ip-access-rules", i.IpLists = "ip-lists", i.JwtValidation = "jwt-validation", i.Labels = "labels", i.LeakedCredentialCheck = "leaked-credential-check", i.MaliciousUploadDetection = "malicious-upload-detection", i.ManagedRuleset = "managed-ruleset", i.Mtls = "mtls", i.NetworkDdos = "network-ddos", i.OwaspCore = "owasp-core", i.RateLimitAuthentication = "rate-limit-authentication", i.ReplaceInsecureJavascript = "replace-insecure-javascript", i.RobotsTxt = "robots-txt", i.SequenceDetection = "sequence-detection", i.SchemaDiscovery = "schema-discovery", i.SchemaValidation = "schema-validation", i.SecurityLevel = "security-level", i.SecurityTxt = "security-txt", i.SensitiveDataDetection = "sensitive-data-detection", i.SessionIdentifiers = "session-identifiers", i.SslDdos = "ssl-ddos", i.TokenConfigurations = "token-configurations", i.UserAgentBlocking = "user-agent-blocking", i.VolumetricAbuse = "volumetric-abuse", i.ZoneLockdown = "zone-lockdown", i.ContinuousScriptMonitoring = "continuous-script-monitoring", i.BotManagement = "bot-management", i.SuperBotFightMode = "super-bot-fight-mode", i.BotFightMode = "bot-fight-mode", i
				}({})
		},
		"../react/pages/security/overview/resources/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				AZ: function() {
					return l
				},
				BQ: function() {
					return i
				},
				Ht: function() {
					return a
				},
				Kx: function() {
					return e
				},
				NJ: function() {
					return c
				},
				S: function() {
					return r
				},
				oD: function() {
					return _
				}
			});
			let e = function(u) {
				return u.NAME = "description", u.SOURCE = "source", u.LAST_UPDATE = "lastUpdatedAt", u.ACTIVITY = "activity", u
			}({});
			const r = 5;
			let a = function(u) {
					return u.EXTERNAL_DOCUMENTATION = "external_documentation", u.LINK_TO_MANAGED = "link_to_managed_rules", u.LINK_TO_EVENTS = "link_to_security_events", u.LINK_TO_DDOS = "link_to_ddos", u.LINK_BOT_MGMT = "link_to_bot_mgmt", u.LINK_TO_AI_AUDIT = "link_to_ai_audit", u.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", u.LINK_TO_PAGE_SHIELD = "link_to_page_shield", u.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", u.LINK_TO_SECURITY_EVENTS = "link_to_security_events", u.LINK_TO_IP_RULE = "link_to_ip_rule", u.LINK_TO_CONFIGURATION = "link_to_configuration", u.LINK_TO_UPLOAD_SCHEMAS = "link_to_upload_schemas", u.LINK_TO_WEB_ASSETS = "link_to_web_assets", u.LINK_TO_DOMAINS = "link_to_domains", u
				}({}),
				l = function(u) {
					return u.LOAD_INSIGHTS = "load overview action items", u.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", u.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", u.CLICK_ACTION_INSIGHT = "click overview action item suggestion", u
				}({});
			const i = "security-overview-all-suggestions",
				_ = [{
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
		"../react/pages/security/page-shield/resources/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				CP: function() {
					return U
				},
				FV: function() {
					return H
				},
				KH: function() {
					return k
				},
				Ks: function() {
					return x
				},
				Lj: function() {
					return B
				},
				MC: function() {
					return o
				},
				Mq: function() {
					return A
				},
				OV: function() {
					return te
				},
				Oq: function() {
					return R
				},
				QM: function() {
					return f
				},
				SI: function() {
					return W
				},
				SJ: function() {
					return T
				},
				Sk: function() {
					return $
				},
				Ti: function() {
					return O
				},
				Uc: function() {
					return w
				},
				Uq: function() {
					return u
				},
				Uv: function() {
					return re
				},
				V0: function() {
					return g
				},
				VT: function() {
					return d
				},
				YC: function() {
					return z
				},
				j$: function() {
					return E
				},
				qc: function() {
					return b
				},
				sV: function() {
					return I
				},
				sW: function() {
					return F
				},
				u8: function() {
					return v
				},
				v5: function() {
					return n
				},
				xg: function() {
					return Z
				},
				yd: function() {
					return C
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				a = t("../react/pages/security/page-shield/resources/types.ts");

			function l(P) {
				for (var j = 1; j < arguments.length; j++) {
					var q = arguments[j] != null ? Object(arguments[j]) : {},
						ne = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(q).filter(function(se) {
						return Object.getOwnPropertyDescriptor(q, se).enumerable
					})), ne.forEach(function(se) {
						i(P, se, q[se])
					})
				}
				return P
			}

			function i(P, j, q) {
				return j = _(j), j in P ? Object.defineProperty(P, j, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[j] = q, P
			}

			function _(P) {
				var j = c(P, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function c(P, j) {
				if (typeof P != "object" || P === null) return P;
				var q = P[Symbol.toPrimitive];
				if (q !== void 0) {
					var ne = q.call(P, j || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(P)
			}
			const u = 50,
				g = 9,
				n = "copy script url page shield",
				o = "disable page shield",
				s = "click documentation link",
				v = "enable page shield",
				d = "filter search page shield",
				p = "filter search view all page shield",
				b = "hover score tooltip page shield",
				T = "open alert modal page shield",
				E = "change pagination page shield",
				m = "close script modal page shield",
				C = "open script modal page shield",
				f = "select alert type page shield",
				w = "sort column page shield",
				A = {
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
				k = {
					STARTS_WITH: r.Gn.startsWith,
					ENDS_WITH: r.Gn.endsWith,
					EQUALS: r.Gn.equals,
					CONTAINS: r.Gn.contains,
					DOES_NOT_CONTAIN: r.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: r.Gn.in
				},
				R = {
					status: {
						example: "active",
						type: e.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [k.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: e.kE.string,
						options: ["true", "false"],
						operators: [k.CONTAINS, k.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [k.EQUALS],
						type: e.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: e.kE.string,
						operators: [k.INCLUDES, k.ENDS_WITH, k.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				U = l({}, R, {
					urls: l({}, R.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				I = {
					type: {
						example: "first_party",
						type: e.kE.select,
						options: ["first_party", "unknown"],
						label: "common.type",
						urlParam: "type",
						operators: [r.Gn.equals]
					},
					name: {
						example: "cookie_1",
						operators: [r.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.name",
						urlParam: "name"
					},
					domain: {
						example: "hostname.com",
						operators: [r.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.domain",
						urlParam: "domain"
					},
					path: {
						example: "/",
						operators: [r.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.path",
						urlParam: "path"
					},
					same_site: {
						operators: [r.Gn.equals],
						type: e.kE.select,
						options: ["lax", "strict", "none"],
						label: "firewall.page_shield.same_site",
						urlParam: "same_site"
					},
					http_only: {
						operators: [r.Gn.equals],
						type: e.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.http_only",
						urlParam: "http_only"
					},
					secure: {
						operators: [r.Gn.equals],
						type: e.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.secure",
						urlParam: "secure"
					}
				};
			let D = function(P) {
				return P.SECURITY_THREATS = "Security Threats", P.C2_BOTNET = "C2 & Botnet", P.CRYPTOMINING = "Cryptomining", P.MALWARE = "Malware", P.PHISHING = "Phishing", P.SPYWARE = "Spyware", P.DGA_DOMAINS = "DGA Domains", P.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", P
			}({});
			const $ = "https://www.cloudflare.com/plans/enterprise/contact/",
				z = {
					[a.I1.BASE_URI]: "page_shield.policies.form.base_uri",
					[a.I1.CHILD]: "page_shield.policies.form.child",
					[a.I1.CONNECT]: "page_shield.policies.form.connections",
					[a.I1.DEFAULT]: "page_shield.policies.form.default",
					[a.I1.FONT]: "page_shield.policies.form.font",
					[a.I1.FORM_ACTION]: "page_shield.policies.form.form",
					[a.I1.FRAME]: "page_shield.policies.form.frame",
					[a.I1.FRAME_ANCESTORS]: "page_shield.policies.form.frame_ancestors",
					[a.I1.IMAGE]: "page_shield.policies.form.img",
					[a.I1.MANIFEST]: "page_shield.policies.form.manifest",
					[a.I1.MEDIA]: "page_shield.policies.form.media",
					[a.I1.OBJECT]: "page_shield.policies.form.object",
					[a.I1.SCRIPT]: "page_shield.policies.form.script",
					[a.I1.STYLE]: "page_shield.policies.form.style",
					[a.I1.UPGRADE_INSECURE_REQUESTS]: "page_shield.policies.form.upgrade_insecure_requests",
					[a.I1.WORKER]: "page_shield.policies.form.worker"
				},
				Z = {
					[a.I1.BASE_URI]: "firewall.page_shield.policies.table.base_uri",
					[a.I1.CHILD]: "firewall.page_shield.policies.table.child",
					[a.I1.CONNECT]: "firewall.page_shield.policies.table.connections",
					[a.I1.DEFAULT]: "firewall.page_shield.policies.table.default",
					[a.I1.FONT]: "firewall.page_shield.policies.table.font",
					[a.I1.FORM_ACTION]: "firewall.page_shield.policies.table.form",
					[a.I1.FRAME]: "firewall.page_shield.policies.table.frame",
					[a.I1.FRAME_ANCESTORS]: "firewall.page_shield.policies.table.frame_ancestors",
					[a.I1.IMAGE]: "firewall.page_shield.policies.table.img",
					[a.I1.MANIFEST]: "firewall.page_shield.policies.table.manifest",
					[a.I1.MEDIA]: "firewall.page_shield.policies.table.media",
					[a.I1.OBJECT]: "firewall.page_shield.policies.table.object",
					[a.I1.SCRIPT]: "firewall.page_shield.policies.table.script",
					[a.I1.SCRIPT_ELEM]: "firewall.page_shield.policies.table.script",
					[a.I1.STYLE]: "firewall.page_shield.policies.table.style",
					[a.I1.STYLE_ELEM]: "firewall.page_shield.policies.table.style",
					[a.I1.UPGRADE_INSECURE_REQUESTS]: "firewall.page_shield.policies.table.upgrade_insecure_requests",
					[a.I1.WORKER]: "firewall.page_shield.policies.table.worker"
				},
				re = {
					[a.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[a.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[a.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[a.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[a.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				te = {
					[a.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[a.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				H = {
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
				F = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				W = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				B = {
					[a.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[a.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[a.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				x = {
					[a.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[a.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[a.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				O = {
					[a.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[a.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[a.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				CP: function() {
					return l.CP
				},
				Ks: function() {
					return l.Ks
				},
				sV: function() {
					return l.sV
				},
				SI: function() {
					return l.SI
				},
				v5: function() {
					return l.v5
				},
				xg: function() {
					return l.xg
				},
				YC: function() {
					return l.YC
				},
				MC: function() {
					return l.MC
				},
				Xe: function() {
					return f.Xe
				},
				u8: function() {
					return l.u8
				},
				Oq: function() {
					return l.Oq
				},
				VT: function() {
					return l.VT
				},
				qc: function() {
					return l.qc
				},
				V0: function() {
					return l.V0
				},
				Lj: function() {
					return l.Lj
				},
				k2: function() {
					return f.k2
				},
				$g: function() {
					return f.$g
				},
				SJ: function() {
					return l.SJ
				},
				KH: function() {
					return l.KH
				},
				Mq: function() {
					return l.Mq
				},
				FV: function() {
					return l.FV
				},
				j$: function() {
					return l.j$
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
					return l.sW
				},
				Uq: function() {
					return l.Uq
				},
				yd: function() {
					return l.yd
				},
				QM: function() {
					return l.QM
				},
				Uc: function() {
					return l.Uc
				},
				R$: function() {
					return f.R$
				},
				Sk: function() {
					return l.Sk
				},
				gY: function() {
					return E
				},
				SE: function() {
					return g
				},
				m: function() {
					return b
				},
				xP: function() {
					return p
				},
				xl: function() {
					return d
				},
				Tb: function() {
					return v
				},
				h3: function() {
					return m
				},
				xq: function() {
					return se
				},
				SQ: function() {
					return x
				},
				C0: function() {
					return O
				},
				av: function() {
					return k
				},
				W3: function() {
					return w
				},
				WO: function() {
					return D
				},
				Dk: function() {
					return Z
				},
				we: function() {
					return te
				},
				Yt: function() {
					return W
				},
				ex: function() {
					return F
				},
				E1: function() {
					return H
				},
				dm: function() {
					return U
				},
				oK: function() {
					return $
				},
				qZ: function() {
					return B
				},
				_4: function() {
					return P
				},
				qo: function() {
					return j
				},
				CB: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(r),
				l = t("../react/pages/security/page-shield/resources/constants.ts");

			function i(M) {
				for (var V = 1; V < arguments.length; V++) {
					var L = arguments[V] != null ? Object(arguments[V]) : {},
						Y = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(L).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(L, ae).enumerable
					})), Y.forEach(function(ae) {
						_(M, ae, L[ae])
					})
				}
				return M
			}

			function _(M, V, L) {
				return V = c(V), V in M ? Object.defineProperty(M, V, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[V] = L, M
			}

			function c(M) {
				var V = u(M, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function u(M, V) {
				if (typeof M != "object" || M === null) return M;
				var L = M[Symbol.toPrimitive];
				if (L !== void 0) {
					var Y = L.call(M, V || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(M)
			}
			const g = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", M => (a().sendEvent(l.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), M)),
				n = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", M => (a().sendEvent(l.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), M)),
				o = (M, V) => {
					var L;
					return JSON.stringify(i({}, V == null || (L = V[0]) === null || L === void 0 ? void 0 : L.parameters, M))
				};
			let s = "";
			const v = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("start", (M, V, L) => (s = o(V, L), M)).on("success", M => (a().sendEvent(l.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), M)).on("error", (M, V, L) => o(V, L) === s ? M : {
					type: "noop"
				}),
				d = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				p = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", M => (a().sendEvent(l.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), M)),
				b = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				T = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", M => (a().sendEvent(l.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), M)),
				E = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				m = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var C = t("../react/app/redux/normalizer.js"),
				f = t("../react/pages/security/page-shield/resources/types.ts");
			const w = M => M.pageShield.configuration,
				A = M => {
					var V;
					return (V = M.pageShield.configuration.data) === null || V === void 0 ? void 0 : V.enabled
				},
				k = M => {
					var V;
					return (V = w(M)) === null || V === void 0 ? void 0 : V.data
				},
				R = M => M.pageShield.scripts,
				U = M => M.pageShield.script,
				I = M => M.pageShield.connections,
				D = M => M.pageShield.connection,
				$ = (0, C.P1)("pageShieldScripts", R),
				z = (0, C.P1)("pageShieldScript", U),
				Z = (0, C.P1)("pageShieldConnections", I),
				re = (0, C.P1)("pageShieldConnection", D),
				te = (M, V) => M === f.Wq.SCRIPT_MONITOR ? $(V) || [] : Z(V) || [],
				H = (M, V) => M === f.Wq.SCRIPT_MONITOR ? R(V) || [] : I(V) || [],
				F = (M, V) => M === f.Wq.SCRIPT_MONITOR ? z(V) : re(V),
				W = M => M.pageShield.domainIntel,
				B = M => M.pageShield.whoIsRecord,
				x = (M, V, L) => {
					var Y;
					const ae = Object.values(L).map(pe => ({
						key: pe,
						label: l.Uv[pe],
						score: M[pe]
					})).filter(pe => pe.score !== void 0 && pe.score <= V);
					return V === l.V0 && ae.length === 0 && ((Y = M.js_integrity_score) !== null && Y !== void 0 ? Y : 100) <= V && ae.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), ae
				},
				O = (M, V) => Object.values(V).filter(L => M[L] === !0).map(L => l.OV[L]),
				P = M => M === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				j = (M, V) => M[f.$g.MagecartScore] !== void 0 && M[f.$g.MagecartScore] <= V || M[f.$g.MalwareScore] !== void 0 && M[f.$g.MalwareScore] <= V || M[f.$g.CryptominingScore] !== void 0 && M[f.$g.CryptominingScore] <= V || M.js_integrity_score !== void 0 && M.js_integrity_score <= V,
				q = ["cdn.jsdelivr.net", "unpkg.com"],
				ne = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				se = M => {
					if (M.includes("@latest")) {
						const L = M.split("@latest");
						if (L.length != 2) return;
						const Y = L[0].length,
							ae = Y + "@latest".length;
						return [Y, ae]
					}
					if (!!q.some(L => M.includes(L)))
						for (const L of ne) {
							const Y = M.match(L);
							if (!Y) continue;
							const ae = Y.index;
							if (ae === 0) return null;
							const pe = ae + Y[0].length;
							return [ae, pe]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$g: function() {
					return g
				},
				I1: function() {
					return i
				},
				R$: function() {
					return n
				},
				Wq: function() {
					return u
				},
				Xe: function() {
					return _
				},
				jf: function() {
					return c
				},
				k2: function() {
					return o
				}
			});

			function e(s) {
				for (var v = 1; v < arguments.length; v++) {
					var d = arguments[v] != null ? Object(arguments[v]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(b) {
						return Object.getOwnPropertyDescriptor(d, b).enumerable
					})), p.forEach(function(b) {
						r(s, b, d[b])
					})
				}
				return s
			}

			function r(s, v, d) {
				return v = a(v), v in s ? Object.defineProperty(s, v, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[v] = d, s
			}

			function a(s) {
				var v = l(s, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function l(s, v) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(s, v || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(s)
			}
			let i = function(s) {
				return s.BASE_URI = "base-uri", s.CHILD = "child-src", s.CONNECT = "connect-src", s.DEFAULT = "default-src", s.FONT = "font-src", s.FORM_ACTION = "form-action", s.FRAME = "frame-src", s.FRAME_ANCESTORS = "frame-ancestors", s.IMAGE = "img-src", s.MANIFEST = "manifest-src", s.MEDIA = "media-src", s.OBJECT = "object-src", s.SCRIPT = "script-src", s.SCRIPT_ELEM = "script-src-elem", s.STYLE = "style-src", s.STYLE_ELEM = "style-src-elem", s.WORKER = "worker-src", s.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", s
			}({});
			const _ = e({}, i, {
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
			let c = function(s) {
					return s.MONITOR = "monitor", s.POLICIES = "policies", s.SETTINGS = "settings", s
				}({}),
				u = function(s) {
					return s.SCRIPT_MONITOR = "script", s.CONNECTION_MONITOR = "connection", s.COOKIE_MONITOR = "cookie", s
				}({}),
				g = function(s) {
					return s.CryptominingScore = "cryptomining_score", s.MalwareScore = "malware_score", s.MagecartScore = "magecart_score", s
				}({}),
				n = function(s) {
					return s.DataflowScore = "dataflow_score", s.ObfuscationScore = "obfuscation_score", s
				}({}),
				o = function(s) {
					return s.DomainMalicious = "domain_reported_malicious", s.UrlMalicious = "url_reported_malicious", s
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				_C: function() {
					return d
				},
				_R: function() {
					return p
				},
				dY: function() {
					return T
				},
				fy: function() {
					return C
				},
				ji: function() {
					return v
				},
				pR: function() {
					return b
				},
				pV: function() {
					return f
				},
				rj: function() {
					return m
				},
				yR: function() {
					return w
				},
				zf: function() {
					return E
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				r = t("../../../common/util/types/src/api/phases/fields.tsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				l = t.n(a),
				i = t("../react/utils/translator.tsx"),
				_ = t("../react/pages/security/resources/types.ts"),
				c = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				u = t("../node_modules/@cloudflare/elements/es/index.js");

			function g(A) {
				for (var k = 1; k < arguments.length; k++) {
					var R = arguments[k] != null ? Object(arguments[k]) : {},
						U = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(R).filter(function(I) {
						return Object.getOwnPropertyDescriptor(R, I).enumerable
					})), U.forEach(function(I) {
						n(A, I, R[I])
					})
				}
				return A
			}

			function n(A, k, R) {
				return k = o(k), k in A ? Object.defineProperty(A, k, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[k] = R, A
			}

			function o(A) {
				var k = s(A, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function s(A, k) {
				if (typeof A != "object" || A === null) return A;
				var R = A[Symbol.toPrimitive];
				if (R !== void 0) {
					var U = R.call(A, k || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(A)
			}
			const v = 10;
			let d = function(A) {
					return A.MTLS_ACCESS = "mTLS-enforced authentication", A.ZONE_LOCKDOWN = "Zone lockdown", A.USER_AGENT = "User agent blocking", A.EMAIL_VALIDITY = "Disposable email checks", A.IP_BASED = "IP-based rule", A.GEOGRAPHY_BASE = "Geography-based rule", A
				}({}),
				p = function(A) {
					return A.LEAKED_CREDENTIALS = "Leaked Credentials Checks", A
				}({});
			const b = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				T = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: d.GEOGRAPHY_BASE,
					trackedEvent: b.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: d.IP_BASED,
					trackedEvent: b.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: d.USER_AGENT,
					trackedEvent: b.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: d.ZONE_LOCKDOWN,
					trackedEvent: b.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				E = {
					[_.X.UI_SECTION]: A => ({
						[d.MTLS_ACCESS]: {
							ruleName: d.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: l().createElement(i.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: l().createElement(i.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${A.account.id}/${A.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[d.ZONE_LOCKDOWN]: {
							ruleName: d.ZONE_LOCKDOWN,
							displayName: l().createElement(i.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: l().createElement(i.cC, {
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
						[d.GEOGRAPHY_BASE]: {
							ruleName: d.GEOGRAPHY_BASE,
							displayName: l().createElement(i.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: l().createElement(i.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[d.IP_BASED]: {
							ruleName: d.IP_BASED,
							displayName: l().createElement(i.cC, {
								id: "custom-rules.templates.rule.ip_base.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: l().createElement(i.cC, {
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
						[d.USER_AGENT]: {
							ruleName: d.USER_AGENT,
							displayName: l().createElement(i.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: l().createElement(i.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${A.account.id}/configurations/lists`
								}]
							})
						},
						[d.EMAIL_VALIDITY]: {
							ruleName: d.EMAIL_VALIDITY,
							capability: "security_rules.rules.capability.fraud",
							displayName: l().createElement(i.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: l().createElement(i.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[_.X.WAF_RULES]: {
						[d.MTLS_ACCESS]: {
							description: "custom-rules.templates.rule.mtls_access.name",
							expression: '(not cf.tls_client_auth.cert_verified and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.mtls_access.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.ZONE_LOCKDOWN]: {
							description: "custom-rules.templates.rule.zone_lockdown.name",
							expression: '(not ip.src in $0 and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.zone_lockdown.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.USER_AGENT]: {
							description: "custom-rules.templates.rule.user_agent.name",
							expression: '(http.user_agent eq "BadBot/1.0.2 (+http://bad.bot)")',
							helper: {
								text: "custom-rules.templates.rule.user_agent.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.EMAIL_VALIDITY]: {
							description: "custom-rules.templates.rule.disposable_email.name",
							expression: "(cf.fraud_detection.disposable_email)",
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.GEOGRAPHY_BASE]: {
							description: "custom-rules.templates.rule.geography.name",
							expression: '(ip.src.asnum eq "") or (ip.src.country eq "") or (ip.src.continent eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.IP_BASED]: {
							description: "firewall.tools.toast.ip",
							expression: '(ip.src eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						}
					}
				},
				m = {
					[_.X.WAF_RULES]: {
						[p.LEAKED_CREDENTIALS]: {
							ruleName: p.LEAKED_CREDENTIALS,
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
					[_.X.UI_SECTION]: {
						[p.LEAKED_CREDENTIALS]: {
							ruleName: p.LEAKED_CREDENTIALS,
							displayName: l().createElement(i.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: l().createElement(i.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let C = function(A) {
				return A.DISCOVERY = "discovery", A.SEQUENCES = "sequences", A.SCHEMA_VALIDATION = "schema-validation", A.SETTINGS = "settings", A.API_RULES = "api-rules", A.UPGRADE = "upgrade", A
			}({});
			const f = g({}, c.g, {
				[r.df.HttpRequestFirewallManaged]: g({}, c.g[r.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[r.df.HttpRequestFirewallCustom]: g({}, c.g[r.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[r.df.HttpRateLimit]: g({}, c.g[r.df.HttpRateLimit], {
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
			let w = function(A) {
				return A.APP_SEC_MVP = "app-security-navigation-mvp", A
			}({})
		},
		"../react/pages/security/resources/types.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				X: function() {
					return e
				}
			});
			let e = function(a) {
					return a.UI_SECTION = "UI_SECTION", a.WAF_RULES = "WAF_RULES", a
				}({}),
				r = function(a) {
					return a.Low = "low", a.Medium = "medium", a.Critical = "critical", a
				}({})
		},
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				j: function() {
					return u
				},
				y: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(g) {
				for (var n = 1; n < arguments.length; n++) {
					var o = arguments[n] != null ? Object(arguments[n]) : {},
						s = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && s.push.apply(s, Object.getOwnPropertySymbols(o).filter(function(v) {
						return Object.getOwnPropertyDescriptor(o, v).enumerable
					})), s.forEach(function(v) {
						l(g, v, o[v])
					})
				}
				return g
			}

			function l(g, n, o) {
				return n = i(n), n in g ? Object.defineProperty(g, n, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[n] = o, g
			}

			function i(g) {
				var n = _(g, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function _(g, n) {
				if (typeof g != "object" || g === null) return g;
				var o = g[Symbol.toPrimitive];
				if (o !== void 0) {
					var s = o.call(g, n || "default");
					if (typeof s != "object") return s;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(g)
			}
			let c = function(g) {
				return g.CLICK_OPT_IN = "click opt in security navigation", g.CLICK_OPT_IN_BUTTON = "click opt in button", g.CLICK_OPT_OUT_BUTTON = "click opt out button", g.CLICK_NEXT_STEP = "click opt in next step", g.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", g.DISPLAY_MODAL = "display opt in modal", g.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", g.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", g.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", g
			}({});
			const u = (g, n = {}) => {
				r().sendEvent(g, a({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$y: function() {
					return d
				},
				Ai: function() {
					return n
				},
				B: function() {
					return g
				},
				BT: function() {
					return i
				},
				CK: function() {
					return u
				},
				F3: function() {
					return p
				},
				JP: function() {
					return a
				},
				O_: function() {
					return o
				},
				X2: function() {
					return l
				},
				YO: function() {
					return b
				},
				_c: function() {
					return T
				},
				je: function() {
					return v
				},
				ll: function() {
					return _
				},
				qD: function() {
					return c
				},
				tw: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const a = async E => {
				var m, C;
				const f = await (0, e.get)(`/zones/${E}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((m = f == null ? void 0 : f.body) === null || m === void 0 || (C = m.result) === null || C === void 0 ? void 0 : C.value) === "enabled"
			}, l = async (E, m) => (await (0, e.post)(`/zones/${E}/content-upload-scan/${m?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), m), i = async E => {
				var m;
				const C = await (0, e.get)(`/zones/${E}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((m = C == null ? void 0 : C.body) === null || m === void 0 ? void 0 : m.result) || []
			}, _ = async (E, m) => {
				var C;
				const f = await (0, e.post)(`/zones/${E}/content-upload-scan/payloads`, {
					body: [m]
				});
				return (C = f == null ? void 0 : f.body) === null || C === void 0 ? void 0 : C.result
			}, c = async (E, m) => (await (0, e.del)(`/zones/${E}/content-upload-scan/payloads/${m}`, {
				hideErrorAlert: !0
			}), m), u = async E => {
				var m;
				const C = await (0, e.get)(`/zones/${E}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((m = C == null ? void 0 : C.body) === null || m === void 0 ? void 0 : m.pii_detection_enabled)
			}, g = async (E, m) => (await (0, e.put)(`/zones/${E}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: m
				}
			}), m), n = async E => {
				var m, C;
				const f = await (0, e.get)(`/zones/${E}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((m = f == null ? void 0 : f.body) === null || m === void 0 || (C = m.result) === null || C === void 0 ? void 0 : C.enabled)
			}, o = async (E, m) => {
				var C, f;
				const w = await (0, e.post)(`/zones/${E}/leaked-credential-checks`, {
					body: {
						enabled: m
					}
				});
				return !!((C = w == null ? void 0 : w.body) === null || C === void 0 || (f = C.result) === null || f === void 0 ? void 0 : f.enabled)
			}, s = async E => {
				var m;
				const C = await (0, e.get)(`/zones/${E}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (m = C == null ? void 0 : C.body) === null || m === void 0 ? void 0 : m.result
			}, v = async (E, m) => {
				var C;
				const f = await (0, e.post)(`/zones/${E}/leaked-credential-checks/detections`, {
					body: m
				});
				return (C = f == null ? void 0 : f.body) === null || C === void 0 ? void 0 : C.result
			}, d = async (E, m) => (await (0, e.del)(`/zones/${E}/leaked-credential-checks/detections/${m}`, {
				hideErrorAlert: !0
			}), m), p = async (E, m) => {
				await (0, e.put)(`/zones/${E}/security-center/securitytxt`, {
					body: m
				})
			}, b = async E => {
				await (0, e.del)(`/zones/${E}/security-center/securitytxt`)
			}, T = async E => (await (0, e.get)(`/zones/${E}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Xu: function() {
					return d
				},
				Io: function() {
					return f
				},
				FQ: function() {
					return H
				},
				vU: function() {
					return v
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
					return z
				},
				WR: function() {
					return g
				},
				bE: function() {
					return Z
				},
				u_: function() {
					return s
				},
				pf: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/pages/security/settings/hooks/api.ts"),
				a = t("webpack/sharing/consume/default/react/react"),
				l = t("webpack/sharing/consume/default/react-redux/react-redux"),
				i = t("../react/pages/security/settings/resources/index.ts"),
				_ = t("../react/common/hooks/useZoneEntitlement.ts"),
				c = t("../../../../node_modules/yup/es/index.js"),
				u = t("../react/utils/translator.tsx");
			const g = () => (0, l.useSelector)(i.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				o = () => !!useZoneEntitlement(n),
				s = () => {
					const {
						t: F
					} = (0, u.QT)(), W = c.Z_().required(F("common.field_is_required")).max(24, F("labels.apply.form.name.error.max_characters")).matches(i.DG, F("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", F("labels.apply.form.name.error.cf_forbidden"), O => !i.aW.test(O)), B = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: O => c.Ry().shape({
							[i.n5.NAME]: O ? c.Z_() : W,
							[i.n5.DESCRIPTION]: O ? c.Z_().optional() : c.Z_().max(150, F("labels.apply.form.description.error.max_characters"))
						})
					}, x = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[i.N2.NAME]: "",
							[i.N2.SOURCE]: i.W3,
							[i.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => c.Ry().shape({
							[i.N2.NEW_LABEL_NAME]: W
						})
					};
					return {
						LABELS_APPLY_FORM: B,
						EDIT_LABELS_MODAL_FORM: x
					}
				},
				v = ({
					modalHeaderFixedHeight: F = 62,
					modalDefaultPaddings: W = 16
				} = {}) => {
					const B = (0, a.useRef)(null),
						x = (0, a.useRef)(null),
						[O, P] = (0, a.useState)(0),
						[j, q] = (0, a.useState)(0),
						ne = `calc(100vh - ${O}px - ${j}px - ${W}px)`,
						[se, M] = (0, a.useState)("");
					return (0, a.useEffect)(() => {
						const V = () => {
							var L, Y, ae, pe;
							const de = B == null || (L = B.current) === null || L === void 0 ? void 0 : L.offsetHeight,
								fe = x == null || (Y = x.current) === null || Y === void 0 ? void 0 : Y.offsetHeight,
								oe = ((ae = de) !== null && ae !== void 0 ? ae : 0) + F,
								Oe = (pe = fe) !== null && pe !== void 0 ? pe : 0;
							P(oe), q(Oe)
						};
						return V(), window.addEventListener("resize", V), () => window.removeEventListener("resize", V)
					}, []), {
						searchTerm: se,
						setSearchTerm: M,
						scrollableSectionMaxHeight: ne,
						topMenuRef: B,
						bottomMenuRef: x
					}
				},
				d = F => {
					const W = g(),
						B = (0, e.useQueryClient)(),
						x = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${F}`,
							queryFn: () => (0, r.JP)(F),
							enabled: W
						}),
						O = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${F}`,
							queryFn: () => (0, r.BT)(F),
							enabled: W && !!(x == null ? void 0 : x.data)
						}),
						P = (0, e.useMutation)({
							mutationFn: async ({
								enabled: ne
							}) => await (0, r.X2)(F, ne),
							onSuccess: ne => {
								B.setQueryData([`content-scanning-enabled-${F}`], ne)
							}
						}),
						j = (0, e.useMutation)({
							mutationFn: ne => (0, r.ll)(F, ne),
							onSuccess: ne => {
								B.setQueryData([`content-scanning-detections-${F}`], ne)
							}
						}),
						q = (0, e.useMutation)({
							mutationFn: ne => (0, r.qD)(F, ne),
							onSuccess: ne => {
								var se;
								const M = (se = B.getQueryData(`content-scanning-detections-${F}`)) !== null && se !== void 0 ? se : [];
								B.setQueryData([`content-scanning-detections-${F}`], M.filter(({
									id: V
								}) => V !== ne))
							}
						});
					return {
						entitled: W,
						loading: x.isLoading || O.isLoading,
						error: x.isError || O.isError,
						enabled: {
							data: x.data,
							isToggling: P.isLoading,
							toggleEnabled: async ne => P.mutateAsync({
								enabled: ne
							})
						},
						detections: {
							data: O.data,
							add: j.mutateAsync,
							delete: q.mutateAsync,
							loading: j.isLoading || q.isLoading
						}
					}
				},
				p = () => {
					const F = (0, l.useSelector)(i.cN),
						W = (0, l.useSelector)(i.bH),
						B = (0, l.useSelector)(i.P3),
						x = (0, l.useSelector)(i.Ri);
					return {
						hasEditPermission: F,
						isEnabled: B && (W.hasSimilarLeaked || W.hasUsernameAndPasswordLeaked || x)
					}
				},
				b = F => {
					const W = p(),
						B = (0, e.useQueryClient)(),
						x = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${F}`,
							queryFn: () => (0, r.Ai)(F),
							enabled: !!W.isEnabled,
							retry: 1
						}),
						O = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${F}`,
							queryFn: () => (0, r.tw)(F),
							enabled: !!W.isEnabled && !!(x == null ? void 0 : x.data)
						}),
						P = (0, e.useMutation)({
							mutationFn: ({
								enabled: ne
							}) => (0, r.O_)(F, ne),
							onSuccess: ne => {
								B.setQueryData([`leaked-credentials-enabled-${F}`], ne)
							}
						}),
						j = (0, e.useMutation)({
							mutationFn: async ne => await (0, r.je)(F, ne),
							onSuccess: ne => {
								var se;
								const M = (se = B.getQueryData(`leaked-credentials-detections-${F}`)) !== null && se !== void 0 ? se : [];
								B.setQueryData([`leaked-credentials-detections-${F}`], [...M, ne])
							}
						}),
						q = (0, e.useMutation)({
							mutationFn: ne => (0, r.$y)(F, ne),
							onSuccess: ne => {
								var se;
								const M = (se = B.getQueryData(`leaked-credentials-detections-${F}`)) !== null && se !== void 0 ? se : [];
								B.setQueryData([`leaked-credentials-detections-${F}`], M.filter(({
									id: V
								}) => V !== ne))
							}
						});
					return {
						entitled: W.isEnabled,
						hasEditPermissions: W.hasEditPermission,
						loading: x.isLoading || O.isLoading,
						error: x.isError || x.isError,
						enabled: {
							data: x.data,
							isToggling: P.isLoading,
							toggleEnabled: async ne => P.mutateAsync({
								enabled: ne
							})
						},
						detections: {
							data: O.data,
							add: j.mutateAsync,
							delete: q.mutateAsync,
							loading: j.isLoading || q.isLoading
						}
					}
				};
			var T = t("../react/common/utils/useQueryCache.ts");
			const E = "security-txt",
				m = {
					securityTxt: ({
						zoneId: F
					}) => [E, F]
				},
				C = F => (0, e.useQuery)({
					queryKey: m.securityTxt({
						zoneId: F
					}),
					queryFn: () => (0, r._c)(F),
					select: W => W.result
				}),
				f = F => {
					const {
						invalidate: W
					} = (0, T.o)(m.securityTxt({
						zoneId: F
					}));
					return (0, e.useMutation)({
						mutationFn: () => (0, r.YO)(F),
						onSuccess: async () => {
							await W(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				w = F => {
					const {
						invalidate: W
					} = (0, T.o)(m.securityTxt({
						zoneId: F
					}));
					return (0, e.useMutation)({
						mutationFn: B => (0, r.F3)(F, B),
						onSuccess: async () => {
							await W(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var A = t("../../../../node_modules/lodash/isEqual.js"),
				k = t.n(A),
				R = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function U(F) {
				for (var W = 1; W < arguments.length; W++) {
					var B = arguments[W] != null ? Object(arguments[W]) : {},
						x = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(B).filter(function(O) {
						return Object.getOwnPropertyDescriptor(B, O).enumerable
					})), x.forEach(function(O) {
						I(F, O, B[O])
					})
				}
				return F
			}

			function I(F, W, B) {
				return W = D(W), W in F ? Object.defineProperty(F, W, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[W] = B, F
			}

			function D(F) {
				var W = $(F, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function $(F, W) {
				if (typeof F != "object" || F === null) return F;
				var B = F[Symbol.toPrimitive];
				if (B !== void 0) {
					var x = B.call(F, W || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)(F)
			}
			const z = F => {
					const {
						queryKey: W,
						zoneId: B
					} = (0, R.hL)(F), {
						isLoading: x,
						isError: O,
						isSuccess: P,
						data: j,
						refetch: q,
						isRefetching: ne
					} = (0, e.useQuery)({
						queryKey: W,
						queryFn: () => R.Mi.getLabels(U({
							zoneId: B
						}, F)),
						onSuccess: () => {
							var se;
							const M = F == null || (se = F.filters) === null || se === void 0 ? void 0 : se.source;
							(M === i.LABEL_SOURCES.MANAGED || M === i.LABEL_SOURCES.USER) && (0, i.Tf)({
								name: i.QJ.FILTER_USER_MANAGED_LABELS,
								product: i.Iv.SECURITY_SETTINGS,
								pageName: i.R.LABELS_LIST,
								type: M
							})
						}
					});
					return {
						data: j == null ? void 0 : j.result,
						errors: j == null ? void 0 : j.errors,
						paginationData: j == null ? void 0 : j.result_info,
						isLoading: x,
						isError: O,
						isSuccess: P,
						refetch: q,
						isRefetching: ne
					}
				},
				Z = ({
					labels: F,
					preselectedLabels: W
				}) => {
					const {
						USER: B,
						MANAGED: x
					} = i.LABEL_SOURCES, [O, P] = (0, a.useState)({
						[B]: [],
						[x]: []
					}), [j, q] = (0, a.useState)(new Set), ne = j.size > 0, [se, M] = (0, a.useState)(!1), V = pe => {
						q(de => {
							const fe = new Set(de);
							return fe.has(pe.name) ? fe.delete(pe.name) : fe.add(pe.name), fe
						})
					}, L = pe => j.has(pe.name), Y = (pe, de) => {
						const fe = L(pe) ? 1 : 0;
						return (L(de) ? 1 : 0) - fe
					}, ae = pe => {
						P(de => ({
							[B]: [...pe ? pe[B] : de[B]].sort(Y),
							[x]: [...pe ? pe[x] : de[x]].sort(Y)
						}))
					};
					return (0, a.useEffect)(() => {
						if (F && !se) {
							if (W) {
								const pe = new Set;
								F.forEach(de => {
									W.some(fe => k()(fe, de)) && pe.add(de.name)
								}), q(pe)
							}
							M(!0)
						}
					}, [F, W, se]), (0, a.useEffect)(() => {
						if (F && se) {
							const pe = F.reduce((fe, oe) => (oe.source === B ? fe[B].push(oe) : oe.source === x && fe[x].push(oe), fe), {
									[B]: [],
									[x]: []
								}),
								de = {
									[B]: pe[B].sort(Y),
									[x]: pe[x].sort(Y)
								};
							P(de)
						}
					}, [B, x, F, se]), {
						userAndManagedLabels: O,
						setUserAndManagedLabels: P,
						toggleSelectedLabel: V,
						isLabelSelected: L,
						sortLabelsBySelectedStatus: ae,
						hasLabelsSelected: ne
					}
				};
			var re = t("../react/app/redux/index.ts"),
				te = t("../react/pages/security/settings/resources/selectors.ts");
			const H = (F = "") => {
				const W = (0, re.p4)(te.Xs),
					B = W && (F == null ? void 0 : F.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: W,
					hasDeprecatedParameter: B
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				FQ: function() {
					return u.FQ
				},
				Iv: function() {
					return g.Iv
				},
				M: function() {
					return u.M
				},
				Np: function() {
					return u.Np
				},
				Oz: function() {
					return u.Oz
				},
				Q4: function() {
					return g.Q4
				},
				QJ: function() {
					return g.QJ
				},
				R: function() {
					return g.R
				},
				TG: function() {
					return g.TG
				},
				Tf: function() {
					return g.Tf
				},
				WR: function() {
					return u.WR
				},
				Xs: function() {
					return g.Xs
				},
				Xu: function() {
					return u.Xu
				},
				ZF: function() {
					return g.ZF
				},
				bE: function() {
					return u.bE
				},
				bH: function() {
					return g.bH
				},
				dC: function() {
					return g.dC
				},
				eC: function() {
					return g.eC
				},
				m8: function() {
					return g.m8
				},
				pf: function() {
					return u.pf
				},
				ui: function() {
					return g.ui
				},
				vc: function() {
					return g.vc
				},
				w: function() {
					return g.w
				},
				zF: function() {
					return g.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/app/components/Forbidden.jsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				l = t.n(a),
				i = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				_ = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(_),
				u = t("../react/pages/security/settings/hooks/index.ts"),
				g = t("../react/pages/security/settings/resources/index.ts");
			const n = l().lazy(() => Promise.all([t.e(16691), t.e(14917), t.e(12174), t.e(1091), t.e(31358), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(45275), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(2868), t.e(5756), t.e(83276), t.e(28861), t.e(52215), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				o = () => {
					const {
						t: s
					} = (0, _.useI18n)(), v = (0, e.xk)("waf");
					return l().createElement(i.T3, {
						parentPageLabel: s("navigation.zone.security"),
						title: s("navigation.zone.security.settings"),
						type: "narrow"
					}, v.read ? l().createElement(n, null) : l().createElement(r.Z, null))
				};
			y.ZP = o
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Mi: function() {
					return m
				},
				hL: function() {
					return E
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/zoneSelectors.ts"),
				a = t("../react/common/utils/useQueryCache.ts"),
				l = t("../react/pages/security/settings/resources/constants.ts"),
				i = t("../react/common/hooks/useAccountId.ts"),
				_ = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
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
			var g = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function s(f, w) {
				if (f == null) return {};
				var A = v(f, w),
					k, R;
				if (Object.getOwnPropertySymbols) {
					var U = Object.getOwnPropertySymbols(f);
					for (R = 0; R < U.length; R++) k = U[R], !(w.indexOf(k) >= 0) && (!Object.prototype.propertyIsEnumerable.call(f, k) || (A[k] = f[k]))
				}
				return A
			}

			function v(f, w) {
				if (f == null) return {};
				var A = {},
					k = Object.keys(f),
					R, U;
				for (U = 0; U < k.length; U++) R = k[U], !(w.indexOf(R) >= 0) && (A[R] = f[R]);
				return A
			}

			function d(f) {
				for (var w = 1; w < arguments.length; w++) {
					var A = arguments[w] != null ? Object(arguments[w]) : {},
						k = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(A).filter(function(R) {
						return Object.getOwnPropertyDescriptor(A, R).enumerable
					})), k.forEach(function(R) {
						p(f, R, A[R])
					})
				}
				return f
			}

			function p(f, w, A) {
				return w = b(w), w in f ? Object.defineProperty(f, w, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[w] = A, f
			}

			function b(f) {
				var w = T(f, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function T(f, w) {
				if (typeof f != "object" || f === null) return f;
				var A = f[Symbol.toPrimitive];
				if (A !== void 0) {
					var k = A.call(f, w || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(f)
			}
			const E = f => {
					const w = (0, e.p4)(r.Cu),
						A = (0, i.F)(),
						k = C.labels(d({
							accountId: A,
							zoneId: w
						}, f ? d({}, f) : {})),
						R = (0, a.o)(k);
					return d({
						zoneId: w,
						queryKey: k,
						batchInvalidateLabels: async () => {
							await R.batchInvalidate({
								queryKeysToPredicateInvalidate: [l.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, R)
				},
				m = {
					getLabels: async f => {
						var w, A, k, R;
						let {
							zoneId: U,
							hideErrorAlert: I = !0
						} = f, D = s(f, ["zoneId", "hideErrorAlert"]);
						return (await _.get(u.labels.toUrl({
							zoneId: U
						}), {
							parameters: {
								page: D == null ? void 0 : D.page,
								per_page: D == null ? void 0 : D.per_page,
								with_mapped_resource_counts: D == null ? void 0 : D.with_mapped_resource_counts,
								filter: D == null || (w = D.filters) === null || w === void 0 ? void 0 : w.search,
								source: (0, n.sQ)(D == null || (A = D.filters) === null || A === void 0 ? void 0 : A.source),
								order: D == null || (k = D.sort) === null || k === void 0 ? void 0 : k.id,
								direction: (D == null ? void 0 : D.sort) ? (D == null || (R = D.sort) === null || R === void 0 ? void 0 : R.desc) ? o.Sr.desc : o.Sr.asc : void 0
							},
							hideErrorAlert: I
						})).body
					},
					getLabel: async f => {
						let {
							zoneId: w,
							labelName: A,
							hideErrorAlert: k = !0
						} = f, R = s(f, ["zoneId", "labelName", "hideErrorAlert"]);
						const U = (0, n.mm)(A) ? u.managedLabel.toUrl({
							zoneId: w,
							labelName: A
						}) : u.userLabel.toUrl({
							zoneId: w,
							labelName: A
						});
						return (await _.get(U, {
							parameters: {
								with_mapped_resource_counts: R == null ? void 0 : R.with_mapped_resource_counts
							},
							hideErrorAlert: k
						})).body
					},
					editLabel: async ({
						zoneId: f,
						label: w,
						replace: A
					}) => {
						const {
							name: k
						} = w, R = s(w, ["name"]);
						return (await (A ? _.put : _.patch)(u.userLabel.toUrl({
							zoneId: f,
							labelName: w.name
						}), {
							body: R
						})).body
					},
					deleteLabel: async ({
						zoneId: f,
						labelName: w
					}) => (await _.del(u.userLabel.toUrl({
						zoneId: f,
						labelName: w
					}))).body,
					createLabel: async f => {
						let {
							zoneId: w
						} = f, A = s(f, ["zoneId"]);
						const {
							product: k
						} = A, R = s(A, ["product"]);
						return (await _.post(u.userLabels.toUrl({
							zoneId: w
						}), {
							body: [R]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: f,
						user: w,
						managed: A,
						operationIds: k,
						replace: R
					}) => (await (R ? _.put : _.post)(u.operationsLinkedToLabels.toUrl({
						zoneId: f
					}), {
						body: d({}, w ? {
							user: {
								labels: w
							}
						} : {}, A ? {
							managed: {
								labels: A
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: k
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: f,
						labelName: w,
						operationIds: A
					}) => {
						const k = (0, n.mm)(w) ? u.managedLabelOperations.toUrl({
							zoneId: f,
							labelName: w
						}) : u.userLabelOperations.toUrl({
							zoneId: f,
							labelName: w
						});
						return (await _.put(k, {
							body: {
								selector: {
									include: {
										operation_ids: A
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
							zoneId: A
						} = f, k = s(f, ["accountId", "zoneId"]);
						return [l.IQ.LABELS, w, A, ...(0, g.isEmpty)(k) ? [] : [k]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return b
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return c
				},
				GE: function() {
					return A
				},
				IQ: function() {
					return l
				},
				KV: function() {
					return _
				},
				LABELS_LIST_TOASTS: function() {
					return v
				},
				LABEL_SOURCES: function() {
					return i
				},
				QH: function() {
					return d
				},
				V: function() {
					return C
				},
				W3: function() {
					return a
				},
				Yn: function() {
					return U
				},
				_8: function() {
					return s
				},
				_c: function() {
					return f
				},
				aW: function() {
					return T
				},
				dC: function() {
					return R
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
					return E
				},
				om: function() {
					return g
				},
				w: function() {
					return r
				},
				zF: function() {
					return k
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let r = function(I) {
				return I.EXPOSED_CREDENTIALS = "exposed_credentials", I.CONTENT_SCANNING = "content_scanning", I.FIREWALL_AI = "firewall_ai", I
			}({});
			const a = "all";
			let l = function(I) {
					return I.LABELS = "labels", I
				}({}),
				i = function(I) {
					return I.USER = "user", I.MANAGED = "managed", I
				}({}),
				_ = function(I) {
					return I.SOURCE = "source", I
				}({}),
				c = function(I) {
					return I.NAME = "name", I.SOURCE = "source", I.NEW_LABEL_NAME = "newLabelName", I
				}({}),
				u = function(I) {
					return I.ENDPOINT = "endpoint", I.METHOD = "method", I.OPERATION_ID = "operationId", I
				}({}),
				g = function(I) {
					return I.NAME = "name", I.MAPPED_RESOURCES = "mapped_resources.operations", I.SOURCE = "source", I.APPLY = "apply", I
				}({});
			const s = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: g.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[_.SOURCE]: a
					}
				},
				filters: _,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					queryParamStrategy: "auto-clear"
				}
			};
			let v = function(I) {
				return I.CREATED_LABEL = "createdLabel", I.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", I.DELETED_LABEL = "deletedLabel", I.APPLIED_LABEL = "appliedLabel", I.EDITED_LABEL = "editedLabel", I.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", I
			}({});
			const d = "650px",
				p = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				b = /^[A-Za-z0-9-]+$/,
				T = /^cf-/;
			let E = function(I) {
				return I.NAME = "name", I.DESCRIPTION = "description", I
			}({});
			const m = "all";
			let C = function(I) {
				return I.METHOD = "method", I.HOSTNAME = "hostname", I
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
						[C.METHOD]: m,
						[C.HOSTNAME]: m
					}
				},
				filters: C
			};
			let w = function(I) {
				return I.TITLE = "title", I.DESCRIPTION = "description", I.SUBMIT = "submit", I
			}({});
			const A = 1e3,
				k = {
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
				R = "exposed-credentials-module",
				U = "cf-risk"
		},
		"../react/pages/security/settings/resources/index.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return v
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
					return o
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
					return d
				},
				QH: function() {
					return e.QH
				},
				TG: function() {
					return r.T
				},
				QF: function() {
					return a.QF
				},
				vc: function() {
					return a.vc
				},
				ZF: function() {
					return s
				},
				Xs: function() {
					return E.Xs
				},
				wG: function() {
					return a.N2
				},
				Q4: function() {
					return a.Q4
				},
				Wv: function() {
					return a.Wv
				},
				bH: function() {
					return E.bH
				},
				Mb: function() {
					return a.Mb
				},
				ui: function() {
					return E.ui
				},
				P3: function() {
					return E.P3
				},
				Ri: function() {
					return E.Ri
				},
				cN: function() {
					return E.cN
				},
				m8: function() {
					return T
				},
				Tf: function() {
					return b
				},
				$E: function() {
					return a.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				r = t("../react/pages/security/settings/resources/types.ts"),
				a = t("../react/pages/security/settings/resources/utils.ts"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(l);

			function _(m) {
				for (var C = 1; C < arguments.length; C++) {
					var f = arguments[C] != null ? Object(arguments[C]) : {},
						w = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(f).filter(function(A) {
						return Object.getOwnPropertyDescriptor(f, A).enumerable
					})), w.forEach(function(A) {
						c(m, A, f[A])
					})
				}
				return m
			}

			function c(m, C, f) {
				return C = u(C), C in m ? Object.defineProperty(m, C, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[C] = f, m
			}

			function u(m) {
				var C = g(m, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function g(m, C) {
				if (typeof m != "object" || m === null) return m;
				var f = m[Symbol.toPrimitive];
				if (f !== void 0) {
					var w = f.call(m, C || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(m)
			}
			let n = function(m) {
					return m.LABELS_LIST = "Labels List page", m.LABELS_APPLY = "Labels Apply page", m.LABELS_SIDE_MODAL = "Labels Side Modal", m.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", m.LABELS_OPERATION_DETAILS = "Operation Details page", m
				}({}),
				o = function(m) {
					return m.API_SHIELD = "API Shield", m.SECURITY_SETTINGS = "Security Settings", m
				}({}),
				s = function(m) {
					return m.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", m.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", m.OPERATIONS_TABLE_ROW = "Operations table row", m.OPERATION_DETAILS_PAGE = "Operation details page", m
				}({}),
				v = function(m) {
					return m.UPSERT = "upsert", m.OVERWRITE = "overwrite", m
				}({}),
				d = function(m) {
					return m.SINGLE = "single", m.MULTIPLE = "multiple", m
				}({}),
				p = function(m) {
					return m.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", m.DELETE_LABEL = "delete a user label in the settings page", m.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", m.CREATE_LABEL_CLICKED = "click create label button in the settings page", m.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", m.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", m.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", m.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", m.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", m.OPEN_LABELS_SIDE_MODAL = "open labels side modal", m.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", m.REMOVE_RISK_LABELS_FROM_OPERATION = "remove risk label(s) from operation(s) in the labels side modal", m.CREATE_NEW_LABEL = "create a new label", m
				}({});
			const b = ({
					name: m,
					product: C,
					category: f = "user journey",
					pageName: w,
					from: A,
					write_strategy: k,
					type: R,
					target: U,
					selected: I
				}) => {
					i().sendEvent(m, _({
						category: f,
						pageName: w,
						product: C
					}, A ? {
						from: A
					} : {}, k ? {
						write_strategy: k
					} : {}, R ? {
						type: R
					} : {}, U ? {
						target: U
					} : {}, I ? {
						selected: I
					} : {}))
				},
				T = () => {
					var m;
					return (m = Object.values(p)) === null || m === void 0 ? void 0 : m.flat()
				};
			var E = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				P3: function() {
					return u
				},
				Ri: function() {
					return g
				},
				Xs: function() {
					return o
				},
				bH: function() {
					return n
				},
				cN: function() {
					return c
				},
				ui: function() {
					return _
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				r = t("../react/utils/url.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				l = t("../react/pages/security/settings/resources/constants.ts"),
				i = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const _ = s => {
					const v = (0, e.RO)(s),
						d = !!(0, a.rV)(s, "rulesets.file_upload_scan_allowed"),
						p = !!(0, a.BF)(s, "rulesets.file_upload_scan_allowed");
					return (0, r.el)(window.location.pathname) ? v && (d || p) : p
				},
				c = s => Number((0, a.rV)(s, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				u = s => (0, a.rV)(s, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				g = s => (0, a.rV)(s, "rulesets.leaked_credential_checks_allowed"),
				n = s => (0, i.z1)(l.dC)(s) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, a.rV)(s, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, a.rV)(s, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				o = s => !!(0, i.z1)("deprecate-security-level")(s)
		},
		"../react/pages/security/settings/resources/types.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				T: function() {
					return r
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let r = function(a) {
				return a.ENABLED = "enabled", a.CONTACT = "contact", a.EXPIRES = "expires", a.ENCRYPTION = "encryption", a.ACKNOWLEDGMENTS = "acknowledgments", a.CANONICAL = "canonical", a.HIRING = "hiring", a.POLICY = "policy", a.PREFERRED_LANGUAGES = "preferred_languages", a.MODIFIED_ON = "modified_on", a
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return s
				},
				Mb: function() {
					return v
				},
				N2: function() {
					return C
				},
				Q4: function() {
					return p
				},
				QF: function() {
					return o
				},
				Vy: function() {
					return T
				},
				Wv: function() {
					return d
				},
				mm: function() {
					return m
				},
				sQ: function() {
					return E
				},
				vc: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				a = t("../react/pages/security/settings/routes.tsx"),
				l = t("../react/pages/security/settings/resources/constants.ts"),
				i = t("../react/pages/security/settings/resources/types.ts"),
				_ = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function c(f) {
				for (var w = 1; w < arguments.length; w++) {
					var A = arguments[w] != null ? Object(arguments[w]) : {},
						k = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(A).filter(function(R) {
						return Object.getOwnPropertyDescriptor(A, R).enumerable
					})), k.forEach(function(R) {
						u(f, R, A[R])
					})
				}
				return f
			}

			function u(f, w, A) {
				return w = g(w), w in f ? Object.defineProperty(f, w, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[w] = A, f
			}

			function g(f) {
				var w = n(f, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function n(f, w) {
				if (typeof f != "object" || f === null) return f;
				var A = f[Symbol.toPrimitive];
				if (A !== void 0) {
					var k = A.call(f, w || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(f)
			}
			const o = {
					[i.T.ENABLED]: !1,
					[i.T.CONTACT]: [""],
					[i.T.EXPIRES]: ""
				},
				s = {
					[i.T.CONTACT]: {
						label: "security_txt.fields.contact",
						tooltip: "security_txt.fields.contact.description",
						placeholder: "security_txt.fields.contact.placeholder"
					},
					[i.T.EXPIRES]: {
						label: "security_txt.fields.expires",
						tooltip: "security_txt.fields.expires.description",
						placeholder: "security_txt.fields.expires.placeholder"
					},
					[i.T.ENCRYPTION]: {
						label: "security_txt.fields.encryption",
						tooltip: "security_txt.fields.encryption.description",
						placeholder: "security_txt.fields.encryption.placeholder"
					},
					[i.T.ACKNOWLEDGMENTS]: {
						label: "security_txt.fields.acknowledgements",
						tooltip: "security_txt.fields.acknowledgements.description",
						placeholder: "security_txt.fields.acknowledgements.placeholder"
					},
					[i.T.CANONICAL]: {
						label: "security_txt.fields.canonical",
						tooltip: "security_txt.fields.canonical.description",
						placeholder: "security_txt.fields.canonical.placeholder"
					},
					[i.T.POLICY]: {
						label: "security_txt.fields.policy",
						tooltip: "security_txt.fields.policy.description",
						placeholder: "security_txt.fields.policy.placeholder"
					},
					[i.T.HIRING]: {
						label: "security_txt.fields.hiring",
						tooltip: "security_txt.fields.hiring.description",
						placeholder: "security_txt.fields.hiring.placeholder"
					},
					[i.T.PREFERRED_LANGUAGES]: {
						label: "security_txt.fields.preferred_languages",
						tooltip: "security_txt.fields.preferred_languages.description",
						placeholder: "security_txt.fields.preferred_languages.placeholder"
					}
				},
				v = f => e.Ry({
					[i.T.CONTACT]: e.IX().of(e.Z_().required(f("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, f("security_txt.fields.contact.format_error"))),
					[i.T.EXPIRES]: e.hT().required(f("common.required")).min(new Date, f("security_txt.fields.expires.min_error"))
				}),
				d = f => {
					const w = {};
					for (const A in f) w[A] = Array.isArray(f[A]) ? f[A].filter(k => !!k) : f[A];
					return c({}, w, {
						expires: (0, _.DZ)(f.expires)
					})
				},
				p = (f, w, A) => {
					const k = [...new Set([i.T.CONTACT, i.T.EXPIRES, ...Object.values(i.T)])],
						R = Object.entries(f).sort(([U], [I]) => k.indexOf(U) - k.indexOf(I)).filter(([U, I]) => !!s[U] && !!I && (!Array.isArray(I) || !!I.length)).map(([U, I]) => Array.isArray(I) ? I.map(D => `${A(s[U].label)}: ${D}`).join(`
`) : `${A(s[U].label)}: ${I}`).join(`
`);
					(0, r.yH)(`Cloudflare_${w}_security.txt`, R, "text/plain;charset=utf-8")
				};
			let b = function(f) {
				return f.CREATED = "created security.txt", f.ENABLED = "enabled security.txt", f.DISABLED = "disabled security.txt", f.DOWNLOADED = "downloaded security.txt", f.UPDATED = "updated security.txt", f.DELETED = "deleted security.txt", f
			}({});
			const T = f => (f == null ? void 0 : f.source) === l.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (f == null ? void 0 : f.source) === l.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				E = f => f === l.W3 ? void 0 : f,
				m = f => l.aW.test(f),
				C = f => {
					switch (f) {
						case l.w.CONTENT_SCANNING:
							return a.ROUTES.CONTENT_SCANNING;
						case l.w.EXPOSED_CREDENTIALS:
							return a.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				ROUTES: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
				ROOT: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings`,
				DETECTIONS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections`,
				EXPOSED_CREDENTIALS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections/exposed-credentials`,
				CONTENT_SCANNING: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections/malicious-content`,
				LABELS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/labels`,
				LABEL_APPLY: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/labels/apply/:labelName?`,
				SECURITY_TXT: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/security-txt`
			}
		},
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Sb: function() {
					return g
				},
				Vj: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						v = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), v.forEach(function(d) {
						l(n, d, s[d])
					})
				}
				return n
			}

			function l(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var v = s.call(n, o || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
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
				g = ({
					event: n,
					category: o = "user journey",
					product: s = "waf",
					productName: v = "Managed Rules",
					additionalData: d
				}) => {
					r().sendEvent(n, a({
						category: o,
						product: s,
						productName: v
					}, d || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				D: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CLICK_MENU_ITEM_SHARE = "click on share item", r.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", r.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", r.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", r.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", r.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", r.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", r.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", r.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", r.CLICK_ON_DELETE_RULESET = "click on delete ruleset", r.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", r
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.IP_ADDRESS = "create spectrum app using IP address", r.CNAME = "create spectrum app using cname record", r.LB = "create spectrum app using load balancer", r.UPDATE_IP_ADDRESS = "update spectrum app using IP address", r.UPDATE_CNAME = "update spectrum app using cname record", r.UPDATE_LB = "update spectrum app using load balancer", r.DISABLE = "disable spectrum app", r
			}({})
		},
		"../react/pages/stream/actionTypes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e
				}
			});
			let e = function(r) {
				return r.ReplaceVideos = "stream.replace_videos", r.PrependVideo = "stream.prepend_video", r.UpdateVideo = "stream.update_video", r.UpdateVideoPending = "steam.update_video_pending", r.RemoveVideos = "stream.remove_videos", r.StoreUploader = "stream.store_uploader", r.UpsertUploads = "stream.upsert_uploads", r.RemoveUploads = "stream.remove_uploads", r.UpdateUploadProgress = "stream.update_upload_progress", r.UploadViaUrl = "stream.upload_via_url", r.SetLoading = "stream.set_loading", r.SetStorageLoading = "stream.set_storage_loading", r.SetStorage = "stream.set_storage", r.SetPage = "stream.set_page", r.SetPausedUploads = "stream.set_paused_uploads", r.RemovePausedUpload = "stream.remove_paused_upload", r.SetRequestTimestamp = "stream.set_request_timestamp", r.ResetState = "stream.reset_state", r
			}({})
		},
		"../react/pages/stream/reducer.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return n
				},
				nY: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				r = t("../react/pages/stream/actionTypes.ts"),
				a = t("../react/pages/stream/util/pager.ts");

			function l(o) {
				for (var s = 1; s < arguments.length; s++) {
					var v = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(v).filter(function(p) {
						return Object.getOwnPropertyDescriptor(v, p).enumerable
					})), d.forEach(function(p) {
						i(o, p, v[p])
					})
				}
				return o
			}

			function i(o, s, v) {
				return s = _(s), s in o ? Object.defineProperty(o, s, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = v, o
			}

			function _(o) {
				var s = c(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function c(o, s) {
				if (typeof o != "object" || o === null) return o;
				var v = o[Symbol.toPrimitive];
				if (v !== void 0) {
					var d = v.call(o, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}
			const u = "stream",
				g = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(o = g, s) {
				switch (s.type) {
					case r.U.ResetState:
						return g;
					case r.U.SetStorageLoading:
						const {
							storageLoading: v
						} = s;
						return l({}, o, {
							storageLoading: v
						});
					case r.U.SetStorage:
						return l({}, o, {
							storage: s.payload ? l({}, o.storage, s.payload) : void 0
						});
					case r.U.ReplaceVideos:
						return l({}, o, {
							videos: s.videos
						});
					case r.U.PrependVideo:
						return l({}, o, {
							videos: [s.video, ...o.videos].filter((d, p) => p < a.FJ)
						});
					case r.U.UpdateVideo:
						return l({}, o, {
							videos: o.videos.map(d => d.uid === s.video.uid ? s.video : d)
						});
					case r.U.UpdateVideoPending:
						return l({}, o, {
							videoUpdateStatuses: l({}, o.videoUpdateStatuses, {
								[s.uid]: s.status
							})
						});
					case r.U.RemoveVideos:
						return l({}, o, {
							videos: o.videos.filter(d => !s.ids.includes(d.uid))
						});
					case r.U.SetLoading:
						return l({}, o, {
							loading: s.loading
						});
					case r.U.SetRequestTimestamp:
						return l({}, o, {
							requestTimestamp: s.requestTimestamp
						});
					case r.U.UploadViaUrl:
						return o;
					default:
						return (0, e.h)(s, o)
				}
			}
		},
		"../react/pages/stream/routes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				C: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/stream`,
				a = (0, e.BC)`${r}/inputs`,
				l = (0, e.BC)`${r}/videos`,
				i = (0, e.BC)`${r}/analytics`,
				_ = (0, e.BC)`${l}/${"videoId"}`,
				c = (0, e.BC)`${r}/video-transformations`,
				u = {
					root: r,
					inputs: a,
					configureInputs: (0, e.BC)`${a}/custom-hostnames`,
					videos: l,
					analytics: i,
					videoPage: _,
					videoTransformationsConfigList: c,
					videoTransformationsZoneConfig: (0, e.BC)`${c}/${"zoneId"}/settings`,
					inputPage: (0, e.BC)`${a}/${"inputId"}`,
					createOutput: (0, e.BC)`${a}/${"inputId"}/createOutput`,
					createInput: (0, e.BC)`${a}/create`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/stream`,
					signUp: (0, e.BC)`/sign-up/stream`,
					checkoutSuccess: (0, e.BC)`${r}/bundle-checkout-success`,
					plans: (0, e.BC)`${r}/plans`,
					managePlan: (0, e.BC)`${r}/manage-plan`
				}
		},
		"../react/pages/stream/selectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Id: function() {
					return l
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return i
				},
				QL: function() {
					return u
				},
				_A: function() {
					return p
				},
				_Q: function() {
					return o
				},
				aM: function() {
					return d
				},
				bM: function() {
					return c
				},
				bO: function() {
					return s
				},
				bm: function() {
					return v
				},
				mX: function() {
					return b
				},
				pW: function() {
					return _
				},
				xW: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/pages/stream/reducer.ts");
			const l = T => T[a.nY],
				i = T => l(T).videos,
				_ = T => l(T).videoUpdateStatuses,
				c = T => l(T).loading,
				u = T => l(T).requestTimestamp,
				g = T => l(T).storageLoading,
				n = T => l(T).storage,
				o = T => (0, r.BF)(T, "stream.enabled") || (0, e.bC)(T),
				s = T => (0, e.Le)(T, "stream", "connect"),
				v = T => (0, e.Le)(T, "stream", "stream-4371"),
				d = T => (0, e.Le)(T, "stream", "public-details-enabled"),
				p = T => !!(0, e.Le)(T, "stream", "llhls"),
				b = T => {
					const E = n(T);
					return E !== void 0 && E.limitMins > E.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				FJ: function() {
					return e
				},
				d6: function() {
					return a
				},
				wL: function() {
					return r
				}
			});
			const e = 30;

			function r(l, i, _) {
				const c = {
					search: _,
					limit: e.toString()
				};
				return i !== void 0 && (c.end = i), c
			}

			function a(l, i, _) {
				return {
					limit: e.toString(),
					search: _,
					asc: "true",
					start_comp: "gt",
					start: i
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				V: function() {
					return e
				}
			});
			let e = function(r) {
				return r.ARGO_ENABLEMENT = "change argo enablement", r.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", r.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", r
			}({})
		},
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				QK: function() {
					return u
				},
				WM: function() {
					return d
				},
				Zk: function() {
					return g
				},
				aB: function() {
					return n
				},
				eT: function() {
					return v
				},
				i3: function() {
					return c
				},
				mm: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(p) {
				for (var b = 1; b < arguments.length; b++) {
					var T = arguments[b] != null ? Object(arguments[b]) : {},
						E = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(T).filter(function(m) {
						return Object.getOwnPropertyDescriptor(T, m).enumerable
					})), E.forEach(function(m) {
						l(p, m, T[m])
					})
				}
				return p
			}

			function l(p, b, T) {
				return b = i(b), b in p ? Object.defineProperty(p, b, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[b] = T, p
			}

			function i(p) {
				var b = _(p, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function _(p, b) {
				if (typeof p != "object" || p === null) return p;
				var T = p[Symbol.toPrimitive];
				if (T !== void 0) {
					var E = T.call(p, b || "default");
					if (typeof E != "object") return E;
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
				g = function(p) {
					return p.EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", p.EDIT_IP_CLICK = "click edit load balancer IP", p.EDIT_POOLS_CLICK = "click edit load balancer pools", p.EDIT_MONITORS_CLICK = "click edit load balancer monitors", p.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", p.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", p
				}({}),
				n = function(p) {
					return p.GO_TO_STEP = "click load balancer step", p.BACK_TO_STEP = "click load balancer back to step", p.SAVE = "save load balancer", p.SAVE_AS_DRAFT = "save load balancer as draft", p.SAVE_AND_DEPLOY = "save and deploy load balancer", p.NAVIGATION_CHANGE = "click load balancer wizard navigation link", p.CLICK_PRIVATE_LB_DOCUMENTATION = "click link to private load balancing documentation", p
				}({}),
				o = function(p) {
					return p.OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", p
				}({});
			const v = Object.values({
					MIGRATION: c,
					LOAD_BALANCERS_TABLE: u,
					REVIEW: g,
					WIZARD: n,
					USAGE: o
				}).flatMap(Object.values),
				d = (p, b) => r().sendEvent(p, a({
					category: "user journey",
					product: "load balancing"
				}, b))
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_AND_DEPLOY = "create load balancer", r.ANALYTICS = "read analytics", r.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", r.POOL_TABLE = "click on expandable row on pool", r.CREATE_MONITOR_LINK = "click on create a monitor", r.EDIT_MONITOR_LINK = "click on edit a monitor", r.EDIT_MONITOR = "edit monitor", r.CREATE_MONITOR = "create monitor", r.CREATE_POOL_LINK = "click on create a pool", r.EDIT_POOL_LINK = "click on edit a pool", r.EDIT_POOL = "edit pool", r.CREATE_POOL = "create pool", r
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return a
				},
				X: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let a = function(i) {
				return i.CREATE = "create waiting room", i.UPDATE = "update waiting room", i.EVENTS = "view waiting rooms events", i.ANALYTICS = "view waiting room analytics", i.GENERATE_PREVIEW = "generate waiting room preview link", i
			}({});
			const l = async i => {
				await r().sendEvent(i, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				N3: function() {
					return u
				},
				P: function() {
					return n
				},
				Xh: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(o) {
				for (var s = 1; s < arguments.length; s++) {
					var v = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(v).filter(function(p) {
						return Object.getOwnPropertyDescriptor(v, p).enumerable
					})), d.forEach(function(p) {
						l(o, p, v[p])
					})
				}
				return o
			}

			function l(o, s, v) {
				return s = i(s), s in o ? Object.defineProperty(o, s, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = v, o
			}

			function i(o) {
				var s = _(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function _(o, s) {
				if (typeof o != "object" || o === null) return o;
				var v = o[Symbol.toPrimitive];
				if (v !== void 0) {
					var d = v.call(o, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}
			const c = "TURNSTILE";
			let u = function(o) {
				return o.OVERVIEW_PAGE = "view the overview page", o.LIST_OF_WIDGETS = "list of widgets", o.SOLVE_EVENTS = "list solve events", o.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", o.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", o.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", o.OPEN_DELETE_MODAL = "view the delete modal for one widget", o.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", o.DELETE_WIDGET = "delete successfully widgets", o.LIST_OF_HOSTNAMES = "list hostnames", o.OPEN_ADD_WIDGET_PAGE = "view page to add widget", o.FEEDBACK_ADD = "view Feedback Add", o.SAVE_WIDGET = "save widget", o.ROTATE_KEYS = "rotate keys", o.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", o.GET_WIDGETS = "get widget details", o.OPEN_ANALYTICS_PAGE = "view analytics page", o.ANALYTICS_DATA = "list the analytics data", o
			}({});
			const g = ({
					name: o,
					product: s = c,
					category: v = "user journey",
					page: d,
					additionalData: p = {}
				}) => {
					r().sendEvent(o, a({
						category: v,
						page: d,
						product: s
					}, p || {}))
				},
				n = () => {
					var o;
					return (o = Object.values(u)) === null || o === void 0 ? void 0 : o.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return u
				},
				Ky: function() {
					return g
				},
				RJ: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						v = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), v.forEach(function(d) {
						l(n, d, s[d])
					})
				}
				return n
			}

			function l(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var v = s.call(n, o || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.GROUP_TABLE_ROW_CLICK = "user group table row click", n.GROUP_TABLE_ROW_MEMBERS_CLICK = "user group table row members click", n.GROUP_TABLE_ROW_POLICIES_CLICK = "user group table row policies click", n.GROUP_TABLE_ROW_SETTINGS_CLICK = "user group table row settings click", n.BACK_BUTTON = "clicked back from user group detail", n.MEMBER_ADD = "add user group member", n.MEMBER_DELETE = "delete user group member", n.POLICY_SAVE = "user group policies save", n.POLICY_DELETE = "user group policies delete", n
			}({});
			const u = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, a({}, o || {}))
				},
				g = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				d: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
				default: (0, e.BC)`/${"accountId"}/`,
				home: (0, e.BC)`/${"accountId"}/home`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`,
				websites: (0, e.BC)`/${"accountId"}/websites`
			}
		},
		"../react/pages/zone-versioning/selectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$e: function() {
					return A
				},
				$h: function() {
					return m
				},
				G: function() {
					return w
				},
				M3: function() {
					return R
				},
				Tr: function() {
					return T
				},
				UY: function() {
					return p
				},
				bH: function() {
					return o
				},
				fv: function() {
					return U
				},
				hF: function() {
					return C
				},
				iw: function() {
					return v
				},
				m7: function() {
					return n
				},
				re: function() {
					return f
				},
				tp: function() {
					return d
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../../../../node_modules/reselect/lib/index.js"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				l = t("../react/app/components/SidebarNav/permissions.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts");

			function _(I) {
				for (var D = 1; D < arguments.length; D++) {
					var $ = arguments[D] != null ? Object(arguments[D]) : {},
						z = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols($).filter(function(Z) {
						return Object.getOwnPropertyDescriptor($, Z).enumerable
					})), z.forEach(function(Z) {
						c(I, Z, $[Z])
					})
				}
				return I
			}

			function c(I, D, $) {
				return D = u(D), D in I ? Object.defineProperty(I, D, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[D] = $, I
			}

			function u(I) {
				var D = g(I, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function g(I, D) {
				if (typeof I != "object" || I === null) return I;
				var $ = I[Symbol.toPrimitive];
				if ($ !== void 0) {
					var z = $.call(I, D || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(I)
			}
			const n = I => (0, a.nA)(I) ? (0, i.p1)(I) && (0, l.$n)(I, "zone_versioning", "versioning") : !1,
				o = I => I.zoneVersioning.zoneApplications,
				s = (0, e.P1)("zoneApplications", o),
				v = I => I.zoneVersioning.zoneVersions,
				d = (0, e.P1)("zoneVersions", v),
				p = (0, r.P1)(d, I => {
					if (I) return I.filter(D => D.status == "V")
				}),
				b = I => I.zoneVersioning.environments,
				T = I => I.zoneVersioning.environments.isRequesting,
				E = (0, e.P1)("environments", b),
				m = (0, r.P1)(s, I => {
					if (I) {
						if (I.length === 1) return I[0];
						I.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${I.length}`))
					}
					return null
				}),
				C = (0, r.P1)(E, I => I ? I.environments : []),
				f = I => {
					var D;
					return (D = I.zoneVersioning) === null || D === void 0 ? void 0 : D.zoneVersionSelector
				},
				w = (0, r.P1)(f, d, (I, D) => {
					if (!(I == null ? void 0 : I.isVersion) || !D) return null;
					const $ = D.find(z => {
						if (z.version === I.selectedVersion && z.locked) return !0
					});
					return $ ? _({}, $, {
						isLocked: !0
					}) : null
				}),
				A = (0, r.P1)(d, C, (I, D) => !D || !I ? [] : I.map($ => {
					const z = [];
					for (const Z in D) D[Z].version === $.version && z.push(D[Z]);
					return _({}, $, {
						environments: z
					})
				})),
				k = I => I.zoneVersioning.WAFMigrationStatus,
				R = (0, e.P1)("WAFMigrationStatus", k),
				U = I => I.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$2: function() {
					return k
				},
				CI: function() {
					return w
				},
				IS: function() {
					return c
				},
				L7: function() {
					return i
				},
				Lt: function() {
					return d
				},
				Oj: function() {
					return s
				},
				QV: function() {
					return p
				},
				S6: function() {
					return R
				},
				X$: function() {
					return C
				},
				X6: function() {
					return g
				},
				d4: function() {
					return v
				},
				fE: function() {
					return u
				},
				im: function() {
					return E
				},
				lv: function() {
					return b
				},
				rL: function() {
					return n
				},
				wW: function() {
					return _
				}
			});

			function e(U) {
				for (var I = 1; I < arguments.length; I++) {
					var D = arguments[I] != null ? Object(arguments[I]) : {},
						$ = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(D).filter(function(z) {
						return Object.getOwnPropertyDescriptor(D, z).enumerable
					})), $.forEach(function(z) {
						r(U, z, D[z])
					})
				}
				return U
			}

			function r(U, I, D) {
				return I = a(I), I in U ? Object.defineProperty(U, I, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[I] = D, U
			}

			function a(U) {
				var I = l(U, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function l(U, I) {
				if (typeof U != "object" || U === null) return U;
				var D = U[Symbol.toPrimitive];
				if (D !== void 0) {
					var $ = D.call(U, I || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(U)
			}
			const i = {
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
						gradualRollouts: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/gradual-deployments",
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
				_ = 800,
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
				g = {
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
				o = {
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
				s = {
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
					}, o),
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
				v = {
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
				d = {
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
				T = "workers.dev",
				E = "YYYY-MM-DD HH:mm:SS ZZ",
				m = "active",
				C = ["bundled", "unbound", "standard"],
				f = null,
				w = {
					observability: "workers-observability",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let A = function(U) {
				return U[U.NONE = 0] = "NONE", U[U.MISS = 1] = "MISS", U[U.EXPIRED = 2] = "EXPIRED", U[U.UPDATING = 3] = "UPDATING", U[U.STALE = 4] = "STALE", U[U.HIT = 5] = "HIT", U[U.IGNORED = 6] = "IGNORED", U[U.BYPASS = 7] = "BYPASS", U[U.REVALIDATED = 8] = "REVALIDATED", U[U.DYNAMIC = 9] = "DYNAMIC", U[U.STREAM_HIT = 10] = "STREAM_HIT", U[U.DEFERRED = 11] = "DEFERRED", U
			}({});
			const k = [A.HIT, A.STREAM_HIT];
			let R = function(U) {
				return U.SECRETS_STORE_ID = "store_id", U.SECRET_NAME = "secret_name", U
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return c
				},
				L: function() {
					return a
				},
				Q9: function() {
					return l
				},
				_j: function() {
					return i
				},
				ky: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = u => `${u}.workers.dev`,
				a = (u, g, n) => `${n?`${n}.`:""}${u}.${r(g)}`,
				l = (u, g, n) => `https://${a(u,g,n)}`,
				i = {
					workersOverview: (0, e.BC)`/${"accountId"}/workers/overview`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/workers`,
					root: (0, e.BC)`/${"accountId"}/workers`,
					onboarding: (0, e.BC)`/${"accountId"}/workers-and-pages/create`,
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
				_ = "https://cron-triggers.cloudflareworkers.com",
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
					describeCron: `${_}/describe`,
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
					integrations: {
						getIntegrations: (0, e.BC)`/accounts/${"accountId"}/integrations`,
						getManifest: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}`,
						invokeGetDataAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/get-data/${"action"}`,
						invokeGetOptionsAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/get-options/${"action"}`,
						invokeSubmitFormAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/submit-form/${"action"}`,
						invokeSubmitTokenAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/submit-token/${"action"}`,
						invokeUninstallAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/uninstall/${"action"}`,
						invokeRefAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/ref/${"action"}`,
						integrationsPreviewWorker: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/preview/${"action"}`,
						integrationsDeployWorker: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/deploy/${"action"}`,
						oauthAuthorize: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/oauth/${"oauthProviderId"}/authorize`,
						oauthCallback: (0, e.BC)`/oauth/callback`,
						resourceStates: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/resource-states`,
						resourceState: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/resource-states/${"resourceName"}`,
						asset: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/assets`
					},
					kvNamespace: (0, e.BC)`/accounts/${"accountId"}/storage/kv/namespaces/${"namespaceId"}`,
					kvNamespaces: (0, e.BC)`/accounts/${"accountId"}/storage/kv/namespaces`,
					newVersions: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/versions`,
					nextCron: `${_}/next`,
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
					validateCron: `${_}/validate`,
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
						liveTail: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/live-tail`
					},
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					workflows: (0, e.BC)`/accounts/${"accountId"}/workflows`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				MN: function() {
					return a
				},
				Yg: function() {
					return i
				},
				i$: function() {
					return l
				},
				l3: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const a = async ([c, u]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: c,
					variables: u
				})
			})).body, l = async (...c) => (await e.get(...c)).body, i = c => async (u, g) => {
				const n = await fetch(u, g).then(o => o.json());
				return c.assertDecode(n)
			}, _ = async (...c) => (await l(...c)).result;
			y.ZP = {
				fetcher: c => Array.isArray(c) ? _(...c) : _(c)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(K, y) {
				y()
			})(this, function() {
				"use strict";

				function K() {
					var t = !0,
						e = !1,
						r = null,
						a = {
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

					function l(b) {
						return !!(b && b !== document && b.nodeName !== "HTML" && b.nodeName !== "BODY" && "classList" in b && "contains" in b.classList)
					}

					function i(b) {
						var T = b.type,
							E = b.tagName;
						return !!(E == "INPUT" && a[T] && !b.readOnly || E == "TEXTAREA" && !b.readOnly || b.isContentEditable)
					}

					function _(b) {
						b.getAttribute("is-focus-visible") !== "" && b.setAttribute("is-focus-visible", "")
					}

					function c(b) {
						b.getAttribute("is-focus-visible") === "" && b.removeAttribute("is-focus-visible")
					}

					function u(b) {
						l(document.activeElement) && _(document.activeElement), t = !0
					}

					function g(b) {
						t = !1
					}

					function n(b) {
						!l(b.target) || (t || i(b.target)) && _(b.target)
					}

					function o(b) {
						!l(b.target) || b.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), c(b.target))
					}

					function s(b) {
						document.visibilityState == "hidden" && (e && (t = !0), v())
					}

					function v() {
						document.addEventListener("mousemove", p), document.addEventListener("mousedown", p), document.addEventListener("mouseup", p), document.addEventListener("pointermove", p), document.addEventListener("pointerdown", p), document.addEventListener("pointerup", p), document.addEventListener("touchmove", p), document.addEventListener("touchstart", p), document.addEventListener("touchend", p)
					}

					function d() {
						document.removeEventListener("mousemove", p), document.removeEventListener("mousedown", p), document.removeEventListener("mouseup", p), document.removeEventListener("pointermove", p), document.removeEventListener("pointerdown", p), document.removeEventListener("pointerup", p), document.removeEventListener("touchmove", p), document.removeEventListener("touchstart", p), document.removeEventListener("touchend", p)
					}

					function p(b) {
						b.target.nodeName.toLowerCase() !== "html" && (t = !1, d())
					}
					document.addEventListener("keydown", u, !0), document.addEventListener("mousedown", g, !0), document.addEventListener("pointerdown", g, !0), document.addEventListener("touchstart", g, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", o, !0), document.addEventListener("visibilitychange", s, !0), v(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function y(t) {
					var e;

					function r() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && y(K)
			})
		},
		"../react/utils/bootstrap.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return r
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return l
				},
				gm: function() {
					return a
				}
			});
			const e = () => {
					var i, _, c;
					return (i = window) === null || i === void 0 || (_ = i.bootstrap) === null || _ === void 0 || (c = _.data) === null || c === void 0 ? void 0 : c.security_token
				},
				r = () => {
					var i, _, c;
					return !!((i = t.g.bootstrap) === null || i === void 0 || (_ = i.data) === null || _ === void 0 || (c = _.user) === null || c === void 0 ? void 0 : c.id)
				},
				a = () => {
					var i, _;
					return !!((i = t.g.bootstrap) === null || i === void 0 || (_ = i.data) === null || _ === void 0 ? void 0 : _.is_kendo)
				},
				l = () => {
					var i, _, c, u;
					return (i = window) === null || i === void 0 || (_ = i.bootstrap) === null || _ === void 0 || (c = _.data) === null || c === void 0 || (u = c.user) === null || u === void 0 ? void 0 : u.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				O5: function() {
					return l
				},
				Xm: function() {
					return a
				},
				kT: function() {
					return c
				},
				wV: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				a = () => (r() || "").indexOf("C0002") !== -1,
				l = () => (r() || "").indexOf("C0003") !== -1,
				i = () => (r() || "").indexOf("C0004") !== -1,
				_ = () => (r() || "").indexOf("C0005") !== -1,
				c = n => {
					const o = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${o}`
				},
				u = () => {
					var n;
					const o = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (o == null ? void 0 : o.country) || ""
				},
				g = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				AI: function() {
					return C
				},
				Kd: function() {
					return o
				},
				S8: function() {
					return m
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
					return s
				},
				ly: function() {
					return n
				},
				th: function() {
					return c
				},
				ti: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				a = t("../../../common/intl/intl-types/src/index.ts"),
				l = t("../../../common/util/types/src/utils/index.ts"),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				_ = t("../../../../node_modules/cookie/index.js");
			const c = "cf-sync-locale-with-cps",
				u = a.Q.en_US,
				g = "en_US",
				n = "cf-locale";

			function o() {
				const R = (0, _.parse)(document.cookie);
				return i.Z.get(n) || R[n] || null
			}

			function s(R) {
				document.cookie = (0, _.serialize)(n, R, {
					path: "/",
					maxAge: 31536e3,
					secure: !0
				}), i.Z.set(n, R)
			}

			function v() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0,
					secure: !0
				}), cache.remove(n)
			}
			const d = R => (0, l.Yd)(a.Q).find(U => a.Q[U] === R) || g,
				p = [],
				b = [],
				T = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.fr_FR, a.Q.it_IT, a.Q.pt_BR, a.Q.ko_KR, a.Q.ja_JP, a.Q.zh_CN, a.Q.zh_TW],
				E = {
					test: [...T, ...b, ...p],
					development: [...T, ...b, ...p],
					staging: [...T, ...b, ...p],
					production: [...T, ...b]
				},
				m = R => {
					const U = a.Q[R];
					return E.production.includes(U)
				},
				C = () => Object.keys(a.Q).filter(R => m(R)),
				f = R => {
					const U = a.Q[R];
					return b.includes(U)
				},
				w = R => A[R],
				A = {
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
				k = r().locale();
			r().defineLocale("es-cl", {
				parentLocale: "es",
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD-MM-YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				}
			}), r().defineLocale("es-ec", {
				parentLocale: "es",
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "D/M/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				}
			}), r().defineLocale("es-mx", {
				parentLocale: "es",
				longDateFormat: {
					LT: "h:mm a",
					LTS: "h:mm:ss a",
					L: "D/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY h:mm a",
					LLLL: "dddd, D [de] MMMM [de] YYYY h:mm a"
				}
			}), r().defineLocale("es-pe", {
				parentLocale: "es",
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/M/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY HH:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
				}
			}), r().locale(k)
		},
		"../react/utils/translator.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				QT: function() {
					return d
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
					return o
				},
				cC: function() {
					return s
				},
				oc: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = t("../../../common/intl/intl-core/src/Translator.ts"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				l = t.n(a),
				i = t("../flags.ts");
			const _ = new r.Z({
				pseudoLoc: (0, i.J8)("is_pseudo_loc")
			});

			function c(p, ...b) {
				return _.t(p, ...b)
			}
			const u = _;

			function g(p, ...b) {
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

			function o(p, b) {
				return p in b ? b[p] : void 0
			}
			const s = a.Trans,
				v = a.I18n,
				d = a.useI18n
		},
		"../react/utils/url.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Ct: function() {
					return R
				},
				Fl: function() {
					return se
				},
				KT: function() {
					return V
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
					return j
				},
				cm: function() {
					return T
				},
				e1: function() {
					return k
				},
				el: function() {
					return te
				},
				hW: function() {
					return F
				},
				pu: function() {
					return M
				},
				qR: function() {
					return re
				},
				td: function() {
					return f
				},
				uW: function() {
					return B
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				r = t("../react/pages/abuse/constants.ts"),
				a = t("../react/pages/d1/routes.ts"),
				l = t("../react/pages/images/routes.ts"),
				i = t("../react/pages/pages/routes.ts"),
				_ = t("../react/pages/r2/routes.ts"),
				c = t("../react/pages/stream/routes.ts"),
				u = t("../react/pages/zoneless-workers/routes.ts"),
				g = t("../../../../node_modules/query-string/query-string.js"),
				n = t.n(g);

			function o(L) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var ae = arguments[Y] != null ? Object(arguments[Y]) : {},
						pe = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(ae).filter(function(de) {
						return Object.getOwnPropertyDescriptor(ae, de).enumerable
					})), pe.forEach(function(de) {
						s(L, de, ae[de])
					})
				}
				return L
			}

			function s(L, Y, ae) {
				return Y = v(Y), Y in L ? Object.defineProperty(L, Y, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[Y] = ae, L
			}

			function v(L) {
				var Y = d(L, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function d(L, Y) {
				if (typeof L != "object" || L === null) return L;
				var ae = L[Symbol.toPrimitive];
				if (ae !== void 0) {
					var pe = ae.call(L, Y || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(L)
			}
			const {
				endsWithSlash: p
			} = e.default, b = new RegExp(/([0-9a-z]{32})/g), T = L => L == null ? void 0 : L.replace(b, ":id"), E = (L, Y) => {
				const ae = L.replace(p, "").split("/");
				return ae.slice(0, 2).concat([Y]).concat(ae.slice(3)).join("/")
			}, m = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), C = L => `/${L.replace(p,"").replace(/^\//,"")}`, f = L => A("add-site", L), w = L => A("billing", L), A = (L, Y) => Y ? `/${Y}${L?`/${L}`:""}` : `/?to=/:account/${L}`, k = () => {
				const L = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return L ? L[1] : null
			}, R = (L, Y) => n().stringify(o({}, n().parse(L), Y)), U = (L = "") => L.toString().replace(/([\/]{1,})$/, ""), I = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], D = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, $ = /^\/(\w{32,})(\/[^.]*)?/, z = L => I.includes(L), Z = L => !z(L), re = L => !z(L) && $.test(L), te = L => !z(L) && D.test(L), H = L => D.exec(L), F = L => {
				if (te(L)) return L.split("/").filter(Y => Y.length > 0)[1]
			}, W = L => $.exec(L), B = L => {
				if (re(L)) {
					const Y = W(L);
					if (Y) return Y[1]
				}
			}, x = L => re(L) && L.split("/")[2] === "register-domain", O = L => x(L) ? L.split("/") : null, P = L => {
				if (te(L)) {
					const [, , , Y, ae, pe, de, fe] = L.split("/");
					return Y === "traffic" && ae === "load-balancing" && pe === "pools" && de === "edit" && fe
				}
			}, j = L => {
				const Y = O(L);
				if (Y) return Y[3]
			}, q = (L, Y) => {
				var ae, pe;
				return ((ae = L.pattern.match(/\:/g)) !== null && ae !== void 0 ? ae : []).length - ((pe = Y.pattern.match(/\:/g)) !== null && pe !== void 0 ? pe : []).length
			}, ne = [...Object.values(c.C), ...Object.values(l.KJ), ...Object.values(_._j), ...Object.values(u._j), ...Object.values(i._j), ...Object.values(a._)].sort(q);

			function se(L) {
				if (!Z(L)) return L;
				for (const fe of ne)
					if (fe.expression.test(L)) return fe.pattern;
				if (r.eM.abuseReportTab.expression.test(L)) {
					const fe = L.split("/"),
						oe = fe[fe.length - 1];
					return r.eM.abuseReportTab.pattern.replace(":tab", oe)
				}
				if (r.eM.abuseReport.expression.test(L)) return r.eM.abuseReport.pattern;
				const Y = O(L);
				if (Y) {
					const [, , fe, , ...oe] = Y;
					return `/:accountId/${fe}/:domainName/${oe.join("/")}`
				}
				if (P(L)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const pe = H(L);
				if (pe) {
					const [, , , , fe] = pe;
					return `/:accountId/:zoneName${fe||""}`
				}
				const de = W(L);
				if (de) {
					const [, , fe] = de;
					return `/:accountId${fe||""}`
				}
				return L
			}

			function M(L) {
				if (!!L) try {
					const ae = L.split(".").pop();
					if (ae && ae.length > 0) return ae
				} catch {}
			}

			function V(L, Y = document.location.href) {
				try {
					const ae = new URL(L),
						pe = new URL(Y);
					if (ae.origin === pe.origin) return `${ae.pathname}${ae.search}${ae.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return c
				},
				y: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				i = t.n(l);
			const _ = /^\/domainconnect\/v2\/domaintemplates\//i,
				c = "domain-connect-redirect",
				u = () => {
					const g = (0, l.useLocation)();
					(0, e.useEffect)(() => {
						_.test(g.pathname) && a.Z.set(c, g, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = t("../utils/zaraz.ts")
		},
		"../react/utils/zoneLevelAccess.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				P: function() {
					return l
				},
				b: function() {
					return i
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				r = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function a() {
				var _, c, u, g, n, o;
				return (_ = window) === null || _ === void 0 || (c = _.bootstrap) === null || c === void 0 || (u = c.data) === null || u === void 0 || (g = u.user) === null || g === void 0 || (n = g.betas) === null || n === void 0 || (o = n.some) === null || o === void 0 ? void 0 : o.call(n, s => s === "zone_level_access_beta")
			}

			function l() {
				const _ = !!(0, e.Z)("zone-level-access");
				return a() || _
			}

			function i(_) {
				const c = !!(0, r.z1)("zone-level-access")(_);
				return a() || c
			}
		},
		"../utils/getDashVersion.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				p: function() {
					return a
				},
				t: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var l, i;
					return (l = window) === null || l === void 0 || (i = l.build) === null || i === void 0 ? void 0 : i.dashVersion
				},
				a = () => {
					var l;
					return ((0, e.parse)((l = document) === null || l === void 0 ? void 0 : l.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Wi: function() {
					return $e
				},
				IM: function() {
					return Ce
				},
				yV: function() {
					return S
				},
				Ug: function() {
					return h
				},
				v_: function() {
					return me
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../react/utils/bootstrap.ts"),
				l = t("../react/app/providers/storeContainer.js"),
				i = t("../react/common/selectors/languagePreferenceSelector.ts"),
				_ = t("../flags.ts"),
				c = t("../../../../node_modules/cookie/index.js"),
				u = t("../react/utils/url.ts"),
				g = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../../../../node_modules/lodash-es/memoize.js"),
				s = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				v = t("../utils/getDashVersion.ts"),
				d = t("../react/common/selectors/accountSelectors.ts"),
				p = t("../react/common/selectors/entitlementsSelectors.ts"),
				b = t("../react/common/utils/getEnvironment.ts");

			function T(ce) {
				for (var ie = 1; ie < arguments.length; ie++) {
					var ve = arguments[ie] != null ? Object(arguments[ie]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(be) {
						return Object.getOwnPropertyDescriptor(ve, be).enumerable
					})), _e.forEach(function(be) {
						E(ce, be, ve[be])
					})
				}
				return ce
			}

			function E(ce, ie, ve) {
				return ie = m(ie), ie in ce ? Object.defineProperty(ce, ie, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[ie] = ve, ce
			}

			function m(ce) {
				var ie = C(ce, "string");
				return typeof ie == "symbol" ? ie : String(ie)
			}

			function C(ce, ie) {
				if (typeof ce != "object" || ce === null) return ce;
				var ve = ce[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(ce, ie || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ie === "string" ? String : Number)(ce)
			}
			const f = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				w = (0, o.Z)(ce => {
					try {
						return f.assertDecode((0, c.parse)(ce))
					} catch (ie) {
						return console.error(ie), {}
					}
				}),
				A = ce => (ie, ve, _e) => {
					try {
						const Je = window.location.pathname,
							tt = (0, l.bh)().getState(),
							ut = w(document.cookie),
							Ge = T({
								page: (0, u.Fl)(_e.page || window.location.pathname),
								dashVersion: (0, v.t)(),
								environment: (0, b.Z)()
							}, ut);
						if (ie === "identify") {
							var be, Ue;
							const gt = {
								gates: (0, s.T2)(tt) || {},
								country: (be = t.g) === null || be === void 0 || (Ue = be.bootstrap) === null || Ue === void 0 ? void 0 : Ue.ip_country
							};
							return ce(ie, ve, T({}, Ge, gt, _e))
						} else {
							const gt = {
								accountId: (0, u.uW)(Je),
								zoneName: (0, u.hW)(Je),
								domainName: (0, u.Uh)(Je)
							};
							if ((0, u.qR)(Je)) {
								var Ze;
								const nt = (0, d.D0)(tt);
								gt.isEntAccount = !!(nt == null || (Ze = nt.meta) === null || Ze === void 0 ? void 0 : Ze.has_enterprise_zones) || (0, p.p1)(tt)
							}
							if ((0, u.el)(Je)) {
								var at;
								const nt = (0, g.nA)(tt);
								gt.zoneId = nt == null ? void 0 : nt.id, gt.plan = nt == null || (at = nt.plan) === null || at === void 0 ? void 0 : at.legacy_id
							}
							return ce(ie, ve, T({}, Ge, gt, _e))
						}
					} catch (Je) {
						return console.error(Je), ce(ie, ve, _e)
					}
				},
				k = ce => async (ie, ve, _e) => {
					try {
						return await ce(ie, ve, _e)
					} catch (be) {
						if (console.error(be), !me()) throw be;
						return {
							status: "rejected",
							reason: be
						}
					}
				};
			var R = t("../react/app/components/AccountHome/tracking.ts"),
				U = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				I = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				D = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				$ = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				z = t("../react/common/middleware/sparrow/errors.ts"),
				Z = t("../react/pages/abuse/constants.ts"),
				re = t("../react/pages/blocked-content/constants.ts"),
				te = t("../react/pages/caching/tracking.tsx"),
				H = t("../react/pages/dns/dns-records/tracking.ts"),
				F = t("../react/pages/home/alerts/tracking.ts"),
				W = t("../react/pages/home/audit-log/tracking.ts"),
				B = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				x = t("../react/pages/home/configurations/lists/tracking.ts"),
				O = t("../react/pages/home/domain-registration/tracking.ts"),
				P = t("../react/pages/home/members/sparrowEvents.ts"),
				j = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				q = t("../react/pages/hyperdrive/tracking.ts"),
				ne = t("../react/pages/magic/network-monitoring/constants.ts"),
				se = t("../react/pages/magic/overview/tracking.ts"),
				M = t("../react/pages/magic/packet-captures/constants.ts"),
				V = t("../react/pages/page-rules/tracking.ts"),
				L = t("../react/pages/pages/constants.ts"),
				Y = t("../react/pages/pipelines/tracking.ts"),
				ae = t("../react/pages/profile/tracking.ts"),
				pe = t("../react/pages/secrets-store/resources/constants.ts"),
				de = t("../react/pages/security-center/tracking.ts"),
				fe = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
				oe = t("../react/pages/security/api-shield/tracking.ts"),
				Oe = t("../react/pages/security/bots/tracking.ts"),
				Se = t("../react/pages/security/overview/resources/constants.ts"),
				Me = t("../react/pages/security/page-shield/resources/index.ts"),
				je = t("../react/pages/security/resources/constants.tsx"),
				xe = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				Ve = t("../react/pages/security/settings/index.tsx"),
				qe = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				We = t("../react/pages/shared-config/sparrowEvents.tsx"),
				Ke = t("../react/pages/spectrum/tracking.tsx"),
				Q = t("../react/pages/traffic/argo/tracking.ts"),
				he = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				ke = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				ze = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				mt = t("../react/pages/turnstile/tracking.ts"),
				pt = t("../react/pages/user-groups/sparrowEvents.ts"),
				Ae = t("../react/pages/zoneless-workers/constants.ts"),
				ot = t("../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts"),
				J = t("../react/pages/analytics/eos/resources/tracking.ts");
			const Te = ((ce, ie, ...ve) => n.eg.union([n.eg.literal(ce), n.eg.literal(ie), ...ve.map(_e => n.eg.literal(_e))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", ...Object.values(J.f), "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "copy table cell", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Click on DNS Firewall feedback link", "Click on DNS Firewall add Cluster", "Hover on DNS Firewall feedback toast", "Click create DNS firewall cluster", "Click edit DNS firewall cluster", "Click on DNS Firewall edit Cluster button", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "route to custom error rules", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", R.gX.SPARROW_PROJECTS_TABLE_CLICK, R.gX.SPARROW_EMPTY_STATE_CTA_CLICK, R.gX.SPARROW_PRODUCT_CARD_CLICK, R.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, R.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, R.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, R.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, R.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, R.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, R.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ae.QV.clickedDownloadAnalytics, Ae.QV.clickedPrintAnalytics, Ae.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ae.QV.addWCITriggerToExistingWorker, Ae.QV.updateWCITrigger, Ae.QV.deleteWCITrigger, Ae.QV.addWCITriggerToNewWorker, Ae.QV.createWCIBuildForNewWorker, Ae.QV.completedWCIBuildForNewWorker, Ae.QV.changedDefaultConfigurations, Ae.QV.clickElement, L.QV.toggledPagesSmartPlacement, L.QV.downloadDemoProject, Ae.QV.clickCreateWorkerFromRepoNextStep, Ae.QV.clickCreateWorkerFromRepoPreviousStep, Ae.QV.clickCreateNewSCMConnection, Ae.QV.redirectFromSCMOAuth, Ae.QV.clickSubmitError, Ae.QV.selectTemplate, Ae.QV.clickedListTemplates, Ae.QV.clickedImportRepository, Ae.QV.clickedClonePublicRepositoryFromUrl, Ae.QV.templateStubWorkerCreated, Ae.QV.templateStubWorkerCreationFailed, Ae.QV.templateRepositoryCreated, Ae.QV.templateRepositoryCreationFailed, Ae.QV.copyTemplateC3Command, Ae.QV.templateDeployClick, Ae.QV.reauthenticateGithubModalShown, Ae.QV.updateGithubPermissionsClicked, Ae.QV.D2W_importRepository, Ae.QV.D2W_stubWorkerCreated, Ae.QV.D2W_stubWorkerCreationFailed, Ae.QV.D2W_repositoryCreated, Ae.QV.D2W_repositoryCreationFailed, Ae.QV.D2W_resourcesProvisioned, Ae.QV.D2W_resourceProvisioningFailed, Ae.QV.D2W_githubAPIRateLimitReached, Ae.QV.createResource, Ae.QV.deleteResource, Ae.QV.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", Oe.N3.INITIAL_FETCH_SCORES, Oe.N3.FETCH_CONFIGURATION, Oe.N3.INITIAL_FETCH_TIME_SERIES, Oe.N3.INITIAL_FETCH_ATTRIBUTES, Oe.N3.UPDATE_SETTINGS, Oe.N3.DELETE_RULE, Oe.N3.UPDATE_RULE, Oe.N3.FETCH_RULES, Oe.N3.CONFIGURE_BOT_MANAGEMENT, Oe.N3.WAF_RULES_REDIRECT, j.F.TOGGLE_TCP_PROTECTION, j.F.GET_TCP_PROTECTION_PREFIXES, j.F.CREATE_TCP_PROTECTION_PREFIXES, j.F.CREATE_TCP_PROTECTION_PREFIX, j.F.UPDATE_TCP_PROTECTION_PREFIX, j.F.DELETE_TCP_PROTECTION_PREFIX, j.F.DELETE_TCP_PROTECTION_PREFIXES, j.F.GET_TCP_PROTECTION_ALLOWLIST, j.F.CREATE_TCP_PROTECTION_ALLOWLIST, j.F.UPDATE_TCP_PROTECTION_ALLOWLIST, j.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, j.F.DELETE_TCP_PROTECTION_ALLOWLIST, j.F.GET_SYN_PROTECTION_RULES, j.F.GET_SYN_PROTECTION_RULE, j.F.CREATE_SYN_PROTECTION_RULE, j.F.UPDATE_SYN_PROTECTION_RULE, j.F.DELETE_SYN_PROTECTION_RULE, j.F.GET_TCP_FLOW_PROTECTION_RULES, j.F.GET_TCP_FLOW_PROTECTION_RULE, j.F.CREATE_TCP_FLOW_PROTECTION_RULE, j.F.UPDATE_TCP_FLOW_PROTECTION_RULE, j.F.DELETE_TCP_FLOW_PROTECTION_RULE, j.F.GET_SYN_PROTECTION_FILTERS, j.F.GET_SYN_PROTECTION_FILTER, j.F.CREATE_SYN_PROTECTION_FILTER, j.F.UPDATE_SYN_PROTECTION_FILTER, j.F.DELETE_SYN_PROTECTION_FILTER, j.F.GET_TCP_FLOW_PROTECTION_FILTERS, j.F.GET_TCP_FLOW_PROTECTION_FILTER, j.F.CREATE_TCP_FLOW_PROTECTION_FILTER, j.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, j.F.DELETE_TCP_FLOW_PROTECTION_FILTER, j.F.GET_DNS_PROTECTION_RULES, j.F.GET_DNS_PROTECTION_RULE, j.F.CREATE_DNS_PROTECTION_RULE, j.F.UPDATE_DNS_PROTECTION_RULE, j.F.DELETE_DNS_PROTECTION_RULE, Me.FV.MANAGE_PAGE_SHIELD_POLICY, Me.FV.CONFIGURE_PAGE_SHIELD, Me.FV.VIEW_DETECTED_CONNECTIONS, Me.FV.VIEW_DETECTED_SCRIPTS, Me.FV.VIEW_PAGE_SHIELD_POLICIES, Me.FV.VIEW_PAGE_SHIELD_SETTINGS, Me.FV.OPEN_MUTABLE_VERSION_TOOLTIP, Me.FV.SHOW_MUTABLE_VERSION_TOOLTIP, x.y.CREATE_LIST, x.y.DELETE_LIST, x.y.ADD_LIST_ITEM, x.y.DELETE_LIST_ITEM, q.KO.PURCHASE_WORKERS_PAID, q.KO.LIST_CONFIGS, q.KO.SEARCH_CONFIGS, q.KO.CREATE_HYPERDRIVE_CONFIG, q.KO.VIEW_CONFIG_DETAILS, q.KO.UPDATE_CACHING_SETTINGS, q.KO.UPDATE_ORIGIN_CONN_LIM_SETTINGS, q.KO.DELETE_HYPERDRIVE_CONFIG, q.KO.CLICK_HYPERDRIVE_DOCUMENTATION, q.KO.CLICK_GET_STARTED_GUIDE, q.KO.CLICK_CONNECTIVITY_GUIDES, q.KO.CLICK_QUICK_LINK, q.KO.CLICK_DISCORD, q.KO.CLICK_COMMUNITY, Ke.N.CNAME, Ke.N.IP_ADDRESS, Ke.N.LB, Ke.N.UPDATE_CNAME, Ke.N.UPDATE_IP_ADDRESS, Ke.N.UPDATE_LB, Ke.N.DISABLE, te.N.TIERED_CACHE, te.N.CACHE_PURGE, te.N.CACHE_ANALYTICS, ...(0, mt.P)(), ...(0, $.x4)(), ...(0, Ve.m8)(), ...(0, P.SH)(), ...(0, pt.Ky)(), ...(0, I.Cf)(), ze.N.CREATE, ze.N.EVENTS, ze.N.ANALYTICS, ze.N.UPDATE, ze.N.GENERATE_PREVIEW, de.RY.INITIATE_URL_SCAN, de.RY.LOAD_SCAN_INFO, de.Ev.LOAD_THREAT_EVENTS, de.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, de.Ev.THREAT_EVENTS_FILTERS, de.Ev.ABUSE_REPORT_BUTTON_CLICK, de.Ev.ABUSE_REPORT_SUBMIT_CLICK, de.Ev.ABUSE_REPORT_SUBMIT_FAILED, de.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, de.v9.EXPAND_INSIGHT_ROW, de.v9.ONE_CLICK_RESOLVE_BUTTON, de.v9.FOLLOW_RESOLVE_URL, de.v9.MANAGE_INSIGHT, de.v9.CLICK_SCAN_NOW, de.v9.CLICK_EXPORT_INSIGHTS, de.v9.BULK_ARCHIVE, de.v9.CLICK_DETAILS_BUTTON, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].detailedMetrics, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].createEndpoint, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].deployRouting, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].deleteRouting, oe.Fj[oe.kq.API_DISCOVERY].viewDiscoveredEndpoints, oe.Fj[oe.kq.API_DISCOVERY].saveDiscoveredEndpoint, oe.Fj[oe.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, oe.Fj[oe.kq.SCHEMA_VALIDATION].viewSchemasList, oe.Fj[oe.kq.SCHEMA_VALIDATION].uploadSchema, oe.Fj[oe.kq.SCHEMA_VALIDATION].viewSchemaAdoption, oe.Fj[oe.kq.SCHEMA_VALIDATION].downloadSchema, oe.Fj[oe.kq.SCHEMA_VALIDATION].deleteSchema, oe.Fj[oe.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, oe.Fj[oe.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, oe.Fj[oe.kq.SEQUENCE_ANALYTICS].viewSequencesPage, oe.Fj[oe.kq.JWT_VALIDATION].viewJWTRules, oe.Fj[oe.kq.JWT_VALIDATION].addJWTRule, oe.Fj[oe.kq.JWT_VALIDATION].editJWTRule, oe.Fj[oe.kq.JWT_VALIDATION].deleteJWTRule, oe.Fj[oe.kq.JWT_VALIDATION].reprioritizeJWTRule, oe.Fj[oe.kq.JWT_VALIDATION].viewJWTConfigs, oe.Fj[oe.kq.JWT_VALIDATION].addJWTConfig, oe.Fj[oe.kq.JWT_VALIDATION].editJWTConfig, oe.Fj[oe.kq.JWT_VALIDATION].deleteJWTConfig, oe.Fj[oe.kq.SETTINGS].redirectToFirewallRulesTemplate, oe.Fj[oe.kq.SETTINGS].redirectToPages, oe.Fj[oe.kq.SETTINGS].listSessionIdentifiers, oe.Fj[oe.kq.SETTINGS].listRequestsContainingSessionIdentifiers, oe.Fj[oe.kq.SETTINGS].addOrRemoveSessionIdentifiers, oe.Fj[oe.kq.SETTINGS].redirectToCustomRules, oe.Fj[oe.kq.SETTINGS].listAllFallthroughSchemas, oe.Fj[oe.kq.SEQUENCE_RULES].listSequenceRules, oe.Fj[oe.kq.SEQUENCE_RULES].deleteSequenceRule, oe.Fj[oe.kq.SEQUENCE_RULES].reorderSequenceRule, oe.Fj[oe.kq.SEQUENCE_RULES].createSequenceRule, oe.Fj[oe.kq.SEQUENCE_RULES].editSequenceRule, W.Q.TOGGLE_V2, W.Q.FILTER, W.Q.FILTER_COUNTS, W.Q.FEEDBACK, W.Q.API_LATENCY, ke.Z.ANALYTICS, ke.Z.CREATE_AND_DEPLOY, ke.Z.CREATE_MONITOR_LINK, ke.Z.CREATE_MONITOR, ke.Z.CREATE_POOL_LINK, ke.Z.CREATE_POOL, ke.Z.EDIT_MONITOR, ke.Z.EDIT_POOL, ke.Z.LOAD_BALANCING_TABLE, ke.Z.POOL_TABLE, ke.Z.EDIT_MONITOR_LINK, ke.Z.EDIT_POOL_LINK, ...he.eT, F.y.SECONDARY_DNS_NOTIFICATION_CREATE, F.y.SECONDARY_DNS_NOTIFICATION_UPDATE, F.y.SECONDARY_DNS_NOTIFICATION_DELETE, H.U.ZONE_TRANSFER_SUCCESS, H.U.DNS_RECORD_CREATE, H.U.DNS_RECORD_UPDATE, H.U.DNS_RECORD_DELETE, B.Y.PEER_DNS_CREATE, B.Y.PEER_DNS_UPDATE, B.Y.PEER_DNS_DELETE, B.Y.ZONE_TRANSFER_ENABLE, B.Y.ZONE_TRANSFER_DISABLE, Q.V.ARGO_ENABLEMENT, Q.V.ARGO_GEO_ANALYTICS_FETCH, Q.V.ARGO_GLOBAL_ANALYTICS_FETCH, M.X.VIEW_BUCKETS_LIST, M.X.CREATE_BUCKET, M.X.VALIDATE_BUCKET, M.X.DELETE_BUCKET, M.X.VIEW_CAPTURES_LIST, M.X.CREATE_SIMPLE_CAPTURE, M.X.CREATE_FULL_CAPTURE, M.X.VIEW_FULL_CAPTURE, M.X.DOWNLOAD_SIMPLE_CAPTURE, ne.bK.VIEW_RULES, ne.bK.CREATE_RULE, ne.bK.UPDATE_RULE, ne.bK.DELETE_RULE, ne.bK.VIEW_CONFIGURATION, ne.bK.CREATE_CONFIGURATION, ne.bK.UPDATE_CONFIGURATION, ne.bK.DELETE_CONFIGURATION, se.r8.VIEW_ALERTS, se.r8.VIEW_ALERTS_HISTORY, se.r8.MAGIC_OVERVIEW_ANALYTICS, se.VZ.CREATE_SITE, se.VZ.CREATE_TUNNEL, se.VZ.CREATE_STATIC_ROUTE, fe.DC.CLICK_ADAPTIVE_SAMPLING, fe.DC.CLICK_TO_LOG_EXPLORER_BANNER, fe.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, fe.DC.CLICK_SWITCH_TO_RAW_LOGS, fe.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", O.U.REGISTER_DOMAIN_SEARCH_SUBMIT, O.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, O.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, O.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, O.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, O.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, O.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, O.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, O.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, O.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, O.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, O.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, O.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, O.U.REGISTER_DOMAIN_CHECKOUT_ERROR, O.U.TRANSFER_DOMAIN_CHANGE_STEP, O.U.RENEW_DOMAIN_COMPLETED, O.U.RESTORE_DOMAIN_INIT, O.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, O.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, O.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, O.U.RESTORE_DOMAIN_FAILURE, O.U.RESTORE_DOMAIN_COMPLETED, O.U.DOMAIN_DELETE_INIT, O.U.DOMAIN_DELETE_COMPLETED, O.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, O.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, O.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, O.U.DOMAIN_DELETE_CONFIRM_DELETE, O.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, O.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, O.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, O.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, O.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, O.U.DOMAIN_MOVE_START_FLOW, O.U.DOMAIN_MOVE_OPEN_DOCS, O.U.DOMAIN_MOVE_CLOSE_FLOW, O.U.DOMAIN_MOVE_PROGRESS_FLOW, O.U.DOMAIN_MOVE_SUBMIT, O.U.DOMAIN_MOVE_INITIATE_SUCCESS, O.U.DOMAIN_MOVE_INITIATE_ERROR, O.U.DOMAIN_MOVE_CANCEL, O.U.DOMAIN_MOVE_CANCEL_SUCCESS, O.U.DOMAIN_MOVE_CANCEL_ERROR, O.U.ACTION_CENTER_NAVIGATE, O.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, O.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, O.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, pe.z3.CREATE_SECRET, pe.z3.DELETE_SECRET, pe.z3.BIND_SECRET, pe.z3.DUPLICATE_SECRET, pe.z3.EDIT_SECRET, Y.KO.CLICK_GET_STARTED_GUIDE, Y.KO.CLICK_PIPELINE_DOCUMENTATION, Y.KO.CLICK_QUICK_LINK, Y.KO.CREATE_PIPELINE, Y.KO.DELETE_PIPELINE, Y.KO.LIST_PIPELINES, Y.KO.VIEW_PIPELINE, U.S.EXISTING_DOMAIN, U.S.NEW_DOMAIN, U.S.WAF_RULESET, U.S.WORKERS, U.S.PAGES, U.S.R2, U.S.ACCOUNT_MEMBERS, V._.TEMPLATE_PRODUCT_SELECTED, V._.TEMPLATE_SELECTED, V._.TEMPLATE_SAVE_DRAFT, V._.TEMPLATE_CANCEL, V._.TEMPLATE_DEPLOY, We.D.CLICK_GO_BACK_SHARE_MODAL, We.D.CLICK_MENU_ITEM_SHARE, We.D.CLICK_ON_CANCEL_SHARE_MODAL, We.D.CLICK_ON_CLOSE_SHARE_MODAL, We.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, We.D.CLICK_ON_DELETE_RULESET, We.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, We.D.CLICK_ON_EDIT_SHARE_PERMISSION, We.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, We.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, We.D.CLICK_ON_SHARE_TABLE_ROW, je.pR.CLICK_GEOGRAPHICAL_TEMPLATE, je.pR.CLICK_IP_TEMPLATE, je.pR.CLICK_USER_AGENT_TEMPLATE, je.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, Ve.vc.CREATED, Ve.vc.ENABLED, Ve.vc.DISABLED, Ve.vc.DELETED, Ve.vc.UPDATED, Ve.vc.DOWNLOADED, re.Gk.REQUEST_REVIEW, re.Gk.COPY_URL, D.v.FIELD, D.v.OPERATOR, qe.Vj.SHOW_LCC_MIGRATION_BANNER, qe.Vj.CLICK_LCC_DOCUMENTATION, qe.Vj.CLICK_LCC_UPGRADE_GUIDE, qe.Vj.SHOW_LCC_MIGRATION_WARNING, xe.y.CLICK_DISMISS_INELIGIBILITY, xe.y.CLICK_NEXT_STEP, xe.y.CLICK_OPT_IN, xe.y.CLICK_OPT_IN_BUTTON, xe.y.CLICK_OPT_OUT_BUTTON, xe.y.DISPLAY_MODAL, xe.y.DISPLAY_OPT_OUT_MODAL, xe.y.DISPLAY_TOOLTIP_NOT_AVAILABLE, xe.y.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, Se.AZ.LOAD_INSIGHTS, Se.AZ.OPEN_SIDE_MODAL_INSIGHT, Se.AZ.CLOSE_SIDE_MODAL_INSIGHT, Se.AZ.CLICK_ACTION_INSIGHT, ot.YC.CHANGE_SETTING, ot.YC.LOAD_SETTINGS, ot.YC.OPEN_SIDE_MODAL_SETTING, ot.YC.CLOSE_SIDE_MODAL_SETTING, ot.YC.FILTER_SETTING, fe.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, fe.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, fe.DC.OPEN_SIDE_DRAWER, fe.DC.CLOSE_SIDE_DRAWER, ae.QV[ae.Xn].clickLoginFromMobileApp2fa, ae.QV[ae.Xn].clickTryOther2FAMethodOrBackupCode, ae.QV[ae.Xn].clickTryRecovery, ae.QV[ae.xq].clickRegenerateBackupCodes, Z.Vq.APPEAL_MITIGATION_SUBMIT, Z.Vq.APPEAL_MITIGATION_SUCCESS, Z.Vq.APPEAL_MITIGATION_FAILURE, Z.Vq.CLICK_ABUSE_REPORT_ID, Z.Vq.CLICK_ABUSE_REPORT_MITIGATIONS_LINK),
				Le = n.eg.exactStrict(n.eg.object({
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
					exclude_cdn_cgi: n.eg.any.optional,
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
					guid: n.eg.any.optional,
					hasData: n.eg.any.optional,
					hasRecords: n.eg.any.optional,
					hasSidebarNav: n.eg.boolean.optional,
					"hasTest2019-06-03": n.eg.any.optional,
					hCaptchaDisplayed: n.eg.any.optional,
					hasEnabledSecurityNavigation: n.eg.any.optional,
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
					queryMode: n.eg.any.optional
				})),
				we = (ce, ie) => {
					const [ve, _e] = Be(ie);
					let be, Ue;
					return (0, n.nM)(Te.decode(ce)) && (be = new z.Uh(ce)), _e && _e.length > 0 && (Ue = new z.oV(ce, _e)), [ve, be, Ue]
				},
				Be = ce => {
					const ie = Le.decode(ce);
					if ((0, n.nM)(ie)) {
						const ve = ie.left.map(({
							context: _e
						}) => _e.map(({
							key: be
						}) => be)).reduce((_e, be) => _e.concat(be), []).filter(_e => _e in ce);
						return [et(ve, ce), ve]
					}
					return [ce, []]
				},
				et = (ce, ie) => Object.entries(ie).reduce((ve, [_e, be]) => (ce.includes(_e) || (ve[_e] = be), ve), {}),
				st = ce => (ie, ve, _e) => {
					const [be, Ue, Ze] = we(ve, _e);
					if (Ue) throw Ue;
					return Ze && console.error(Ze), ce(ie, ve, be)
				};
			var ft = t("../react/utils/zaraz.ts");
			const yt = {
					identify: !0
				},
				ht = ce => (ie, ve, _e) => (yt[ve] || ft.tg === null || ft.tg === void 0 || ft.tg.track(ve, _e), ce(ie, ve, _e));
			var Nt = t("../react/common/selectors/userSelectors.ts"),
				He = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function ct(ce) {
				for (var ie = 1; ie < arguments.length; ie++) {
					var ve = arguments[ie] != null ? Object(arguments[ie]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(be) {
						return Object.getOwnPropertyDescriptor(ve, be).enumerable
					})), _e.forEach(function(be) {
						it(ce, be, ve[be])
					})
				}
				return ce
			}

			function it(ce, ie, ve) {
				return ie = lt(ie), ie in ce ? Object.defineProperty(ce, ie, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[ie] = ve, ce
			}

			function lt(ce) {
				var ie = vt(ce, "string");
				return typeof ie == "symbol" ? ie : String(ie)
			}

			function vt(ce, ie) {
				if (typeof ce != "object" || ce === null) return ce;
				var ve = ce[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(ce, ie || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ie === "string" ? String : Number)(ce)
			}
			const Re = new Set(["cf_argo", "load_balancing_basic_plus"]),
				X = new Set(["pro", "business"]),
				ue = ({
					price: ce,
					ratePlanId: ie,
					ratePlanName: ve,
					frequency: _e,
					isNewSubscription: be
				}) => ({
					event: "purchase",
					new_subscription: be,
					ecommerce: {
						transaction_id: (0, He.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: ce
					},
					items: [{
						item_id: ie,
						item_name: ve || ie,
						frequency: _e,
						price: ce
					}]
				}),
				ye = ce => {
					const {
						price: ie,
						frequency: ve,
						plan: _e,
						ratePlanId: be,
						ratePlanName: Ue
					} = ce;
					return X.has(_e) ? ct({}, ue({
						price: ie,
						ratePlanId: be,
						ratePlanName: Ue,
						frequency: ve,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				Ie = ce => {
					const {
						price: ie,
						frequency: ve,
						ratePlan: _e,
						ratePlanName: be
					} = ce;
					return Re.has(_e) ? ct({}, ue({
						price: ie,
						ratePlanId: _e,
						ratePlanName: be,
						frequency: ve,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				Ne = ce => {
					const {
						price: ie,
						frequency: ve,
						plan: _e,
						ratePlanId: be,
						ratePlanName: Ue,
						label: Ze
					} = ce;
					return X.has(_e) ? ct({}, ue({
						price: ie,
						frequency: ve,
						ratePlanId: be,
						ratePlanName: Ue,
						isNewSubscription: !1
					}), {
						label: Ze || _e
					}) : void 0
				},
				Qe = ce => {
					const {
						price: ie,
						frequency: ve,
						ratePlan: _e,
						ratePlanName: be,
						oldRatePlan: Ue
					} = ce;
					return Re.has(_e) ? ct({}, ue({
						price: ie,
						frequency: ve,
						ratePlanId: _e,
						ratePlanName: be,
						isNewSubscription: !1
					}), {
						label: `${Ue}->${_e}`
					}) : void 0
				},
				rt = "pageview",
				At = "create zone",
				Et = "create user",
				Pt = "Plan Purchase Success",
				Xe = "Product Purchase Success",
				bt = "Plan Update Success",
				Dt = "Product Update Success",
				Lt = {
					[rt]: !0,
					[At]: !0,
					[Et]: !0,
					[Pt]: !0,
					[Xe]: !0,
					[bt]: !0,
					[Dt]: !0
				},
				xt = ce => {
					var ie;
					return !!((ie = ce.gates.assignments) === null || ie === void 0 ? void 0 : ie["dx-enable-google-tag-manager"])
				},
				St = ce => {
					var ie;
					return !!((ie = ce.gates.assignments) === null || ie === void 0 ? void 0 : ie["dx-enable-adobe-launch"])
				},
				Bt = ce => {
					const ie = /\|MCMID\|([0-9]+)\|/,
						ve = ce.match(ie);
					return ve ? ve[1] : void 0
				},
				Ct = ce => {
					var ie;
					const {
						deviceViewport: ve,
						page: _e,
						previousPage: be,
						pageName: Ue,
						utm_campaign: Ze,
						_ga: at,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Je
					} = ce, {
						origin: tt
					} = window.location, ut = (0, Nt.PR)((0, l.bh)().getState());
					return {
						event: be !== void 0 && _e !== be ? "virtual_page_view" : "page_load",
						device_type: ve,
						hostname: tt,
						language: navigator.language,
						locale: (0, i.r)((0, l.bh)().getState()),
						page_location: _e ? `${tt}${_e}` : "[redacted]",
						page_path: _e ? `${_e}` : "[redacted]",
						page_referrer: be ? `${tt}/${be}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: Ue || "[redacted]",
						page_url: _e ? `${tt}${_e}` : "[redacted]",
						query: Ze ? `?utm_campaign=${Ze}` : "[redacted]",
						user_properties: {
							ga_client_id: (ie = at) !== null && ie !== void 0 ? ie : void 0,
							ga_client_id_s: at ? `s${at}` : void 0,
							user_id: $e() ? ut == null ? void 0 : ut.id : void 0,
							ecid: Je ? Bt(Je) : void 0
						}
					}
				},
				Ut = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				Tt = ce => {
					const {
						status: ie
					} = ce;
					return ie === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				jt = (ce, ie) => {
					switch (ce) {
						case rt:
							return Ct(ie);
						case At:
							return Ut();
						case Et:
							return Tt(ie);
						case Pt:
							return ye(ie);
						case Xe:
							return Ie(ie);
						case bt:
							return Ne(ie);
						case Dt:
							return Qe(ie);
						default:
							return
					}
				},
				Wt = ce => (ie, ve, _e) => {
					if (Lt[ve]) {
						var be;
						const Ue = jt(ve, _e);
						Ue && ((be = window.dataLayer) === null || be === void 0 || be.push(Ue))
					}
					return ce(ie, ve, _e)
				};
			var wt = t("../react/utils/cookiePreferences.ts");

			function kt(ce) {
				for (var ie = 1; ie < arguments.length; ie++) {
					var ve = arguments[ie] != null ? Object(arguments[ie]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(be) {
						return Object.getOwnPropertyDescriptor(ve, be).enumerable
					})), _e.forEach(function(be) {
						$t(ce, be, ve[be])
					})
				}
				return ce
			}

			function $t(ce, ie, ve) {
				return ie = zt(ie), ie in ce ? Object.defineProperty(ce, ie, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[ie] = ve, ce
			}

			function zt(ce) {
				var ie = Mt(ce, "string");
				return typeof ie == "symbol" ? ie : String(ie)
			}

			function Mt(ce, ie) {
				if (typeof ce != "object" || ce === null) return ce;
				var ve = ce[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(ce, ie || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ie === "string" ? String : Number)(ce)
			}
			const h = ce => {
					const ie = xt((0, l.bh)().getState()),
						ve = St((0, l.bh)().getState()),
						_e = ie || ve;
					r().init(kt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: me() && !(0, a.gm)() && $e(),
						middlewares: [k, st, A, ht, ..._e ? [Wt] : []]
					}, ce))
				},
				S = () => {
					r().identify(kt({}, (0, e.getAttribution)(), {
						locale: (0, i.r)((0, l.bh)().getState()),
						isCloudflare: !!(0, _.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				me = () => !0,
				Ce = () => {
					(0, wt.kT)("sparrow_id")
				},
				$e = () => (0, wt.Xm)()
		},
		"../utils/initStyles.ts": function(K, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = t("../react/app/providers/storeContainer.js");
			const a = "cfBaseStyles",
				l = document.head || document.getElementsByTagName("head")[0],
				i = c => {
					const u = [];
					for (let g in c.colors) {
						const n = c.colors[g];
						if (Array.isArray(n) && g !== "categorical")
							for (let o = 0; o < n.length; ++o) u.push(`--cf-${g}-${o}:${n[o]};`)
					}
					return u.join(`
`)
				},
				_ = () => {
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
      ${i(e.Rl)}
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
					let g = document.getElementById(a);
					g ? g.innerText = "" : (g = document.createElement("style"), g.id = a, l.appendChild(g)), g.appendChild(document.createTextNode(u)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(_), y.Z = _
		},
		"../utils/sentry/lastSentEventId.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				e: function() {
					return r
				}
			});
			const r = (() => {
				let a = "";
				return {
					setEventId: _ => (!_ || typeof _ != "string" || (a = _), a),
					getEventId: () => a
				}
			})()
		},
		"../utils/zaraz.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Ro: function() {
					return o
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

			function e(s) {
				for (var v = 1; v < arguments.length; v++) {
					var d = arguments[v] != null ? Object(arguments[v]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(b) {
						return Object.getOwnPropertyDescriptor(d, b).enumerable
					})), p.forEach(function(b) {
						r(s, b, d[b])
					})
				}
				return s
			}

			function r(s, v, d) {
				return v = a(v), v in s ? Object.defineProperty(s, v, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[v] = d, s
			}

			function a(s) {
				var v = l(s, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function l(s, v) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(s, v || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(s)
			}
			const i = {
					track: (s, v) => null,
					set: (s, v) => console.log(`zaraz.set(${s}, ${v})`)
				},
				_ = {
					track: (s, v) => {
						var d;
						(d = window.zaraz) === null || d === void 0 || d.track(s, e({}, v, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (s, v) => {
						var d;
						return (d = window.zaraz) === null || d === void 0 ? void 0 : d.set(s, v)
					}
				};
			let c;
			const u = () => {
					window.zaraz, c = _
				},
				g = ["email", "first_name", "last_name"],
				n = s => {
					g.forEach(v => {
						var d;
						(d = c) === null || d === void 0 || d.set(v, s[v])
					})
				},
				o = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(K, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				l = t.n(a),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				_ = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(_),
				u = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				g = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-icon/es/index.js"),
				o = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				s = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-forms/es/index.js"),
				v = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				d = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				p = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				b = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				T = t("../../../common/component/component-filter-bar/src/constants.js"),
				E = t("../../../common/component/component-filter-bar/src/utils.js");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(x) {
					for (var O = 1; O < arguments.length; O++) {
						var P = arguments[O];
						for (var j in P) Object.prototype.hasOwnProperty.call(P, j) && (x[j] = P[j])
					}
					return x
				}, m.apply(this, arguments)
			}

			function C(x) {
				for (var O = 1; O < arguments.length; O++) {
					var P = arguments[O] != null ? Object(arguments[O]) : {},
						j = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(P).filter(function(q) {
						return Object.getOwnPropertyDescriptor(P, q).enumerable
					})), j.forEach(function(q) {
						f(x, q, P[q])
					})
				}
				return x
			}

			function f(x, O, P) {
				return O = w(O), O in x ? Object.defineProperty(x, O, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[O] = P, x
			}

			function w(x) {
				var O = A(x, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function A(x, O) {
				if (typeof x != "object" || x === null) return x;
				var P = x[Symbol.toPrimitive];
				if (P !== void 0) {
					var j = P.call(x, O || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(x)
			}
			const k = 70,
				R = (0, i.createStyledComponent)(({
					showOverflow: x
				}) => C({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, x ? {} : {
					maxHeight: k,
					overflow: "hidden"
				})),
				U = (0, i.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				I = (0, i.createStyledComponent)(({
					theme: x
				}) => ({
					backgroundColor: x.colors.background,
					py: 1,
					px: 2,
					borderRadius: x.radii[2],
					border: `1px solid ${x.colors.gray[7]}`,
					fontSize: x.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: x.colors.gray[4]
					}
				}), "div"),
				D = (0, i.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				$ = (0, i.createStyledComponent)(({
					theme: x
				}) => ({
					color: x.colors.gray[4],
					mr: 1
				}), "span"),
				z = (0, i.createStyledComponent)(() => ({
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
				Z = (0, i.createStyledComponent)(({
					buttonStyle: x
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
				}, x), g.zx),
				re = (0, i.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				te = (0, i.createStyledComponent)(({
					theme: x
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: x.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: x.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: x.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: x.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				H = (0, i.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				F = x => x.current ? [...x.current.children].reduce((O, P) => (P.offsetTop >= k && O++, O), 0) : 0;
			let W = 0;
			class B extends e.Component {
				constructor() {
					super();
					f(this, "overflowWrapper", (0, e.createRef)()), f(this, "hasOverflowed", O => {
						const P = F(this.overflowWrapper);
						O.scrollHeight > k && P >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (O.scrollHeight < k || P === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), f(this, "addNewFilter", () => {
						const {
							filterDefinitions: O
						} = this.props, P = (0, E.TE)(O), j = Object.keys(P)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: j,
								operator: (0, E.uv)(j, P),
								value: (0, E.TT)(j, P)
							}
						})
					}), f(this, "handleOpenFilterEdit", O => {
						this.setState({
							openFilter: O,
							filterChanges: C({}, this.props.filters[O])
						})
					}), f(this, "handleRemoveFilterClick", (O, P) => {
						O.stopPropagation(), this.removeFilter(P)
					}), f(this, "removeFilter", O => {
						const {
							handleFiltersChange: P
						} = this.props, j = [...this.props.filters], q = j[O];
						j.splice(O, 1), P(j), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: q.key,
							operator: q.operator,
							value: q.value
						})
					}), f(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), f(this, "handleFilterSubmit", O => {
						const {
							filterDefinitions: P
						} = this.props;
						O.preventDefault();
						const {
							filterChanges: j
						} = this.state, q = typeof P[j.key].parse == "function" ? Array.isArray(j.value) ? j.value.map(P[j.key].parse) : P[j.key].parse(j.value) : j.value;
						if (P[j.key].validate && (Array.isArray(q) ? !q.every(P[j.key].validate) : !P[j.key].validate(q))) return this.setState({
							invalid: !0
						});
						const ne = [...this.props.filters],
							se = C({}, j, {
								value: q
							}),
							M = !ne[this.state.openFilter];
						M ? ne.push(se) : ne[this.state.openFilter] = C({}, se), this.props.handleFiltersChange(ne, se), (M ? this.props.onAddFilter : this.props.onEditFilter)({
							field: se.key,
							operator: se.operator,
							value: se.value
						}), this.closeOpenFilterChanges()
					}), f(this, "handlePendingKeyChange", ({
						value: O
					}) => {
						const {
							filterDefinitions: P
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: O,
								operator: (0, E.uv)(O, P),
								value: (0, E.TT)(O, P)
							}
						})
					}), f(this, "handlePendingOperatorChange", ({
						value: O
					}) => {
						let P = C({}, this.state.filterChanges, {
							operator: O
						});
						if ((0, E.dr)(O)) {
							var j, q;
							((j = this.state.filterChanges) === null || j === void 0 ? void 0 : j.value) && !Array.isArray((q = this.state.filterChanges) === null || q === void 0 ? void 0 : q.value) && (P.value = [this.state.filterChanges.value])
						} else {
							var ne, se, M;
							((ne = this.state.filterChanges) === null || ne === void 0 ? void 0 : ne.value) && Array.isArray((se = this.state.filterChanges) === null || se === void 0 ? void 0 : se.value) && ((M = this.state.filterChanges) === null || M === void 0 ? void 0 : M.value.length) > 0 && (P.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: P
						})
					}), f(this, "handlePendingValueChange", O => {
						this.setState({
							invalid: !1,
							filterChanges: C({}, this.state.filterChanges, {
								value: O
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
						id: ++W
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(O) {
					O.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(O) {
					const {
						formatLabel: P,
						filterDefinitions: j
					} = this.props, {
						operator: q
					} = this.state.filterChanges, ne = j[this.state.filterChanges.key], se = this.state.filterChanges.value, M = L => Array.isArray(L) ? L.map(Y => Y.value) : (L == null ? void 0 : L.value) || null;
					if (ne.renderValueComponent) return ne.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (ne.type) {
						case T.k.custom: {
							var V;
							return r().createElement(ne.CustomComponent, m({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (V = ne == null ? void 0 : ne.customProps) !== null && V !== void 0 ? V : {}))
						}
						case T.k.select:
							return (0, E.dr)(q) ? r().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !ne.options,
								value: typeof se.split == "function" ? se == null ? void 0 : se.split(",") : Array.isArray(se) ? se : [],
								options: ne.options ? ne.options.map(L => ({
									value: L.value || L,
									label: L.label || P(this.state.filterChanges.key, L, O)
								})) : se ? (Array.isArray(se) ? se : se.split(",")).map(L => ({
									label: L,
									value: L
								})) : [],
								noOptionsMessage: () => null,
								placeholder: r().createElement(_.Trans, {
									id: ne.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: ne.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: L => {
									this.handlePendingValueChange(M(L))
								},
								isValidNewOption: L => {
									const Y = ne.validate;
									return !Y && L || L && Y([L])
								},
								getNewOptionData: (L, Y) => ({
									value: L,
									label: Y
								})
							}) : r().createElement(s.hQ, {
								hideLabel: !0,
								value: se,
								options: ne.options.map(L => ({
									value: L,
									label: P(this.state.filterChanges.key, L, O)
								})),
								onChange: ({
									value: L
								}) => this.handlePendingValueChange(L)
							});
						case T.k.string:
						default:
							return (0, E.dr)(q) ? r().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof se.split == "function" ? se == null ? void 0 : se.split(",") : Array.isArray(se) ? se : [],
								options: se ? (Array.isArray(se) ? se : se.split(",")).map(L => ({
									label: L,
									value: L
								})) : [],
								noOptionsMessage: () => null,
								placeholder: O.t("analytics.report.filters.labels.placeholder", {
									example: j[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: L => {
									this.handlePendingValueChange(M(L))
								},
								isValidNewOption: L => {
									const Y = ne.validate;
									return !Y && L || L && Y([L])
								},
								getNewOptionData: (L, Y) => ({
									value: L,
									label: Y
								}),
								formatCreateLabel: L => O.t("filter_editor.value_create_label", {
									value: L
								})
							}) : r().createElement(_.I18n, null, L => r().createElement(u.I, {
								value: this.state.filterChanges.value,
								onChange: Y => this.handlePendingValueChange(Y.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: L.t("analytics.report.filters.labels.placeholder", {
									example: j[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: O,
						filterDefinitions: P,
						modalStyles: j,
						filterIconType: q,
						buttonStyle: ne,
						secondaryActionComponent: se
					} = this.props, M = F(this.overflowWrapper), V = `filterPanel${this.state.id}`, L = this.state.openFilter !== null;
					return r().createElement(_.I18n, null, Y => r().createElement(v.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, r().createElement(H, null, r().createElement(v.ZC, {
						display: "flex",
						flexDirection: "row"
					}, r().createElement(Z, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": L,
						"aria-controls": V,
						inverted: !0,
						buttonStyle: ne
					}, r().createElement(n.J, {
						type: q || "add",
						mr: 1,
						label: Y.t("common.add", {
							_: "Add"
						})
					}), r().createElement(_.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), !!se && r().createElement(v.ZC, null, se)), this.props.filters.length > 0 && r().createElement(re, null, r().createElement(_.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), r().createElement(R, {
						innerRef: this.overflowWrapper,
						overflowLimit: k,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((ae, pe) => {
						const {
							key: de,
							operator: fe,
							value: oe
						} = ae, Oe = P[de].ignoreLabelTranslation ? P[de].label : Y.t(P[de].label), Se = Y.t(`analytics.report.filters.operators.${fe}`), Me = Array.isArray(oe) ? oe.map(xe => O(de, xe, Y)).join(", ") : O(de, oe, Y), je = `${Oe} ${Se} ${Me}`;
						return r().createElement(U, {
							key: `${de}-${fe}-${oe}`,
							title: je
						}, r().createElement(I, {
							onClick: () => this.handleOpenFilterEdit(pe)
						}, r().createElement(v.ZC, {
							display: "flex"
						}, r().createElement(D, null, Oe), r().createElement($, null, Se), r().createElement(z, null, Me), (0, E.oN)(ae, P) ? r().createElement(o.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : r().createElement(te, {
							onClick: xe => this.handleRemoveFilterClick(xe, pe),
							"aria-label": "remove"
						}, r().createElement(n.J, {
							type: "remove"
						})))))
					})), L && r().createElement(b.Z, {
						id: V,
						filterDefinitions: P,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, E.oN)(this.state.filterChanges, P),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: O,
						modalStyles: j
					}), this.state.hasOverflowed && r().createElement(p.Z, {
						count: M,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			f(B, "propTypes", {
				filterDefinitions: l().shape({}),
				filters: l().arrayOf(l().shape({
					key: l().string,
					operator: l().string,
					value: l().string
				})),
				handleFiltersChange: l().func.isRequired,
				formatLabel: l().func.isRequired,
				onAddFilter: l().func,
				onEditFilter: l().func,
				onRemoveFilter: l().func,
				children: l().node,
				modalStyles: l().object,
				filterIconType: l().string,
				buttonStyle: l().object,
				secondaryActionComponent: l().node
			}), y.Z = B
		},
		"../../../common/component/component-filter-bar/src/index.js": function(K, y, t) {
			"use strict";
			t.d(y, {
				ME: function() {
					return r.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return a.k
				},
				oN: function() {
					return l.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				r = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				a = t("../../../common/component/component-filter-bar/src/constants.js"),
				l = t("../../../common/component/component-filter-bar/src/utils.js"),
				i = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				OZ: function() {
					return i
				},
				YB: function() {
					return l
				}
			});

			function e(c, u, g) {
				return u = r(u), u in c ? Object.defineProperty(c, u, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[u] = g, c
			}

			function r(c) {
				var u = a(c, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function a(c, u) {
				if (typeof c != "object" || c === null) return c;
				var g = c[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(c, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(c)
			}
			class l extends Error {
				constructor(u, g) {
					super(g);
					e(this, "translationKey", void 0), this.translationKey = u, this.name = "TranslatorError"
				}
			}
			class i extends l {
				constructor(u, g) {
					super(u, `Translation key not found: ${u}, locale: ${g}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var _ = null
		},
		"../../../common/util/types/src/api/domain.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Aw: function() {
					return A
				},
				Ib: function() {
					return f
				},
				Ks: function() {
					return k
				},
				MS: function() {
					return w
				},
				PN: function() {
					return p
				},
				Pp: function() {
					return l
				},
				Q3: function() {
					return v
				},
				TS: function() {
					return d
				},
				W7: function() {
					return E
				},
				dN: function() {
					return R
				},
				eF: function() {
					return C
				},
				qp: function() {
					return n
				},
				wR: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const r = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				a = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				l = e.eg.object({
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
					zip: e.eg.string
				}),
				i = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				_ = e.eg.object({
					registrant: l.optional,
					technical: l.optional,
					administrator: l.optional,
					billing: l.optional
				}),
				c = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: _.optional,
					years: e.eg.number
				}),
				u = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let g = function(U) {
				return U.ONBOARDING_INITIATED = "Onboarding Initiated", U.ONBOARDED = "Onboarded", U.PENDING_REGISTRY_LOCK = "Pending Registry Lock", U.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", U.REGISTRY_UNLOCKED = "Registry Unlocked", U.LOCKED = "Locked", U.FAILED_TO_LOCK = "Failed To Lock", U.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", U.UNLOCKED = "Unlocked", U.OFFBOARDED = "Offboarded", U
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
						status: e.eg.enum(g).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: u.optional,
					landing: e.eg.union([a, e.eg.boolean]).optional,
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
					transfer_conditions: i.optional,
					updated_at: e.eg.union([e.eg.string, e.eg.null]).optional,
					updated_registrar: e.eg.string.optional,
					using_created_registrar_nameservers: e.eg.boolean.optional,
					using_current_registrar_nameservers: e.eg.boolean.optional,
					using_previous_registrar_nameservers: e.eg.boolean.optional,
					using_updated_registrar_nameservers: e.eg.boolean.optional,
					whois: e.eg.unknown.optional
				}),
				o = e.eg.object({
					available: e.eg.boolean
				}),
				s = e.eg.object({
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
				v = e.eg.object({
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
				d = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let p = function(U) {
				return U.PENDING = "pending", U.VERIFIED = "verified", U.REJECTED = "rejected", U.PENDING_DELETE = "pending_delete", U.DELETED = "deleted", U
			}({});
			const b = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(p),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				T = e.eg.object({
					designated_approvers: e.eg.array(b)
				});
			let E = function(U) {
				return U.PENDING = "pending", U.PENDING_UPDATE = "pending_update", U.ENABLED = "enabled", U.DISABLED = "disabled", U
			}({});
			const m = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(E)
				}),
				C = e.eg.intersection([m, T]),
				f = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let w = function(U) {
				return U.UNLOCK_APPROVAL = "UnlockApprovalRequest", U.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", U.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", U.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", U
			}({});
			const A = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				k = e.eg.object({
					message: e.eg.string
				}),
				R = e.eg.object({
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
				})
		},
		"../../../common/util/types/src/api/phases/fields.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				df: function() {
					return r
				},
				eX: function() {
					return a
				},
				fG: function() {
					return i
				},
				jI: function() {
					return l
				},
				qu: function() {
					return e
				},
				zc: function() {
					return _
				}
			});
			let e = function(c) {
					return c.Custom = "custom", c.Root = "root", c.Managed = "managed", c.Zone = "zone", c.RateLimit = "ratelimit", c
				}({}),
				r = function(c) {
					return c.Cache = "http_request_cache_settings", c.HttpCustomErrors = "http_custom_errors", c.HttpConfigSettings = "http_config_settings", c.HttpLogCustomFields = "http_log_custom_fields", c.HttpRateLimit = "http_ratelimit", c.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", c.HttpRequestFirewallCustom = "http_request_firewall_custom", c.HttpRequestFirewallManaged = "http_request_firewall_managed", c.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", c.HttpRequestLateTransform = "http_request_late_transform", c.HttpRequestMain = "http_request_main", c.HttpRequestOrigin = "http_request_origin", c.HttpRequestRedirect = "http_request_redirect", c.HttpRequestSanitize = "http_request_sanitize", c.HttpRequestSBFM = "http_request_sbfm", c.HttpRequestsSnippets = "http_request_snippets", c.HttpRequestTransform = "http_request_transform", c.HttpResponseCompression = "http_response_compression", c.HttpResponseFirewallManaged = "http_response_firewall_managed", c.HttpResponseTransform = "http_response_headers_transform", c.L4DDoS = "ddos_l4", c.L7DDoS = "ddos_l7", c.MagicIDS = "magic_transit_ids_managed", c.MagicManaged = "magic_transit_managed", c.MagicTransit = "magic_transit", c.MagicTransitRateLimit = "magic_transit_ratelimit", c
				}({}),
				a = function(c) {
					return c.Execute = "execute", c.All = "all", c.Block = "block", c.JSChallenge = "js_challenge", c.Challenge = "challenge", c.Allow = "allow", c.Bypass = "bypass", c.Log = "log", c.Rewrite = "rewrite", c.Score = "score", c.Skip = "skip", c.Managed_Challenge = "managed_challenge", c.DDoS_Dynamic = "ddos_dynamic", c.Select_Config = "select_config", c.Set_Config = "set_config", c.Reset = "reset", c.Redirect = "redirect", c.Cache = "set_cache_settings", c.WhiteList = "whitelist", c.Error = "serve_error", c
				}({}),
				l = function(c) {
					return c.ZONE_LOCKDOWN = "zoneLockdown", c.UA_BLOCK = "uaBlock", c.BIC = "bic", c.HOT = "hot", c.SECURITY_LEVEL = "securityLevel", c.RATE_LIMIT = "rateLimit", c.WAF = "waf", c
				}({}),
				i = function(c) {
					return c.DEFAULT = "default", c.MEDIUM = "medium", c.LOW = "low", c.EOFF = "eoff", c.HIGH = "high", c.VERY_HIGH = "very_high", c
				}({}),
				_ = function(c) {
					return c.DEFAULT = "", c.XML = "text/xml", c.JSON = "application/json", c.TEXT = "text/plain", c.HTML = "text/html", c
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Yd: function() {
					return e
				},
				vE: function() {
					return r
				}
			});

			function e(a) {
				return Object.keys(a)
			}
			const r = (a, l) => {
				if (l !== void 0) throw new Error("Unexpected object: " + a);
				return l
			}
		},
		"../../../dash/intl/intl-translations/src/index.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Fy: function() {
					return e.Z
				},
				if: function() {
					return a.Z
				},
				n4: function() {
					return r.n
				}
			});
			var e = t("../../../dash/intl/intl-translations/src/makeLoadPhrases.ts"),
				r = t("../../../dash/intl/intl-translations/src/catalogMap.ts"),
				a = t("../../../dash/intl/intl-translations/src/supportedCatalogs.ts")
		},
		"../react/common/out.css": function(K, y, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[K.id, e, ""]
			]);
			var r, a, l = {
				hmr: !0
			};
			l.transform = r, l.insertInto = void 0;
			var i = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, l);
			e.locals && (K.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function(K, y, t) {
			y = K.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), y.push([K.id, `/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
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
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-600: oklch(64.6% 0.222 41.116);
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
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-green-600: oklch(62.7% 0.194 149.214);
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-800: oklch(44.8% 0.119 151.328);
    --color-green-900: oklch(39.3% 0.095 152.535);
    --color-blue-50: oklch(97% 0.014 254.604);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(0.424 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
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
    --container-sm: 24rem;
    --container-lg: 32rem;
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
    --color-neutral-150: oklch(0.96 0 0) /*new */;
    --color-neutral-250: oklch(0.9 0 0) /* new */;
    --color-neutral-450: oklch(0.62 0 0) /* new */;
    --color-neutral-750: oklch(0.31 0 0) /* new */;
    --color-neutral-850: oklch(0.23 0 0) /* new */;
    --color-border: var(--cf-gray-8);
    --color-bg-primary: var(--kumo-surface);
    --color-ob-base-1000: var(--color-neutral-900);
    --text-color-ob-inverted: var(--color-white);
    --color-cl1-white: var(--cf-white);
    --color-cl1-gold-7: var(--cf-gold-7);
    --color-cl1-gold-9: var(--cf-gold-9);
    --color-cl1-blue-2: var(--cf-blue-2);
    --color-cl1-blue-8: var(--cf-blue-8);
    --color-cl1-gray-0: var(--cf-gray-0);
    --color-cl1-gray-2: var(--cf-gray-2);
    --color-cl1-gray-4: var(--cf-gray-4);
    --color-cl1-gray-5: var(--cf-gray-5);
    --color-cl1-new-gray-7: var(--cf-newGray-7);
  }
}
@layer utilities {
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
  .-inset-0 {
    inset: calc(var(--spacing) * -0);
  }
  .-inset-0\\.5 {
    inset: calc(var(--spacing) * -0.5);
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .top-8 {
    top: calc(var(--spacing) * 8);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-1 {
    left: calc(var(--spacing) * 1);
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
  .m-0 {
    margin: calc(var(--spacing) * 0);
  }
  .m-auto {
    margin: auto;
  }
  .-mx-1 {
    margin-inline: calc(var(--spacing) * -1);
  }
  .mx-4 {
    margin-inline: calc(var(--spacing) * 4);
  }
  .mx-auto {
    margin-inline: auto;
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
  .\\!mt-1 {
    margin-top: calc(var(--spacing) * 1) !important;
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
  .mt-0 {
    margin-top: calc(var(--spacing) * 0);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
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
  .mt-16 {
    margin-top: calc(var(--spacing) * 16);
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
  .mr-4 {
    margin-right: calc(var(--spacing) * 4);
  }
  .\\!mb-0 {
    margin-bottom: calc(var(--spacing) * 0) !important;
  }
  .\\!mb-2 {
    margin-bottom: calc(var(--spacing) * 2) !important;
  }
  .\\!mb-3 {
    margin-bottom: calc(var(--spacing) * 3) !important;
  }
  .\\!mb-4 {
    margin-bottom: calc(var(--spacing) * 4) !important;
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
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
  }
  .-ml-px {
    margin-left: -1px;
  }
  .ml-0 {
    margin-left: calc(var(--spacing) * 0);
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
  .size-6 {
    width: calc(var(--spacing) * 6);
    height: calc(var(--spacing) * 6);
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
  .\\!h-full {
    height: 100% !important;
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
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
  .h-7 {
    height: calc(var(--spacing) * 7);
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
  .h-20 {
    height: calc(var(--spacing) * 20);
  }
  .h-\\[18px\\] {
    height: 18px;
  }
  .h-\\[35px\\] {
    height: 35px;
  }
  .h-\\[300px\\] {
    height: 300px;
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
  .max-h-8 {
    max-height: calc(var(--spacing) * 8);
  }
  .max-h-8\\/10 {
    max-height: calc(8/10 * 100%);
  }
  .max-h-\\[400px\\] {
    max-height: 400px;
  }
  .max-h-\\[600px\\] {
    max-height: 600px;
  }
  .max-h-\\[calc\\(100vh-64px\\)\\] {
    max-height: calc(100vh - 64px);
  }
  .min-h-\\[20px\\] {
    min-height: 20px;
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
  .\\!w-3xl {
    width: var(--container-3xl) !important;
  }
  .\\!w-auto {
    width: auto !important;
  }
  .\\!w-full {
    width: 100% !important;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\/2 {
    width: calc(1/2 * 100%);
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
  .w-24 {
    width: calc(var(--spacing) * 24);
  }
  .w-32 {
    width: calc(var(--spacing) * 32);
  }
  .w-64 {
    width: calc(var(--spacing) * 64);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-\\[10px\\] {
    width: 10px;
  }
  .w-\\[15\\%\\] {
    width: 15%;
  }
  .w-\\[30\\%\\] {
    width: 30%;
  }
  .w-\\[380px\\] {
    width: 380px;
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
  .w-sm {
    width: var(--container-sm);
  }
  .\\!max-w-3xl {
    max-width: var(--container-3xl) !important;
  }
  .max-w-8 {
    max-width: calc(var(--spacing) * 8);
  }
  .max-w-8\\/10 {
    max-width: calc(8/10 * 100%);
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
  .max-w-\\[calc\\(100vw-3rem\\)\\] {
    max-width: calc(100vw - 3rem);
  }
  .max-w-full {
    max-width: 100%;
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-30 {
    min-width: calc(var(--spacing) * 30);
  }
  .min-w-32 {
    min-width: calc(var(--spacing) * 32);
  }
  .min-w-40 {
    min-width: calc(var(--spacing) * 40);
  }
  .min-w-50 {
    min-width: calc(var(--spacing) * 50);
  }
  .min-w-60 {
    min-width: calc(var(--spacing) * 60);
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
  .min-w-\\[170px\\] {
    min-width: 170px;
  }
  .min-w-\\[var\\(--trigger-width\\)\\] {
    min-width: var(--trigger-width);
  }
  .min-w-lg {
    min-width: var(--container-lg);
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
  .-translate-x-1 {
    --tw-translate-x: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1/2 * 100%) * -1);
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
  .-translate-y-2 {
    --tw-translate-y: calc(var(--spacing) * -2);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0 {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0\\.5 {
    --tw-translate-y: calc(var(--spacing) * 0.5);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * 1);
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
  .scale-x-0 {
    --tw-scale-x: 0%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .scale-x-100 {
    --tw-scale-x: 100%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
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
  .animate-refresh {
    animation: var(--animate-refresh);
  }
  .animate-spin {
    animation: var(--animate-spin);
  }
  .cursor-col-resize {
    cursor: col-resize;
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .resize {
    resize: both;
  }
  .\\!list-none {
    list-style-type: none !important;
  }
  .list-disc {
    list-style-type: disc;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-\\[1fr_1fr_2fr\\] {
    grid-template-columns: 1fr 1fr 2fr;
  }
  .grid-cols-\\[200px_1fr\\] {
    grid-template-columns: 200px 1fr;
  }
  .grid-cols-\\[320px_1fr\\] {
    grid-template-columns: 320px 1fr;
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
  .gap-10 {
    gap: calc(var(--spacing) * 10);
  }
  .space-y-2 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-\\[var\\(--gap\\)\\] {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(var(--gap) * var(--tw-space-y-reverse));
      margin-block-end: calc(var(--gap) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-x-2 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));
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
  .divide-neutral-200 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-neutral-200);
    }
  }
  .self-start {
    align-self: flex-start;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-auto {
    overflow: auto;
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
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
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
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .\\!rounded-l-xl {
    border-top-left-radius: var(--radius-xl) !important;
    border-bottom-left-radius: var(--radius-xl) !important;
  }
  .\\!rounded-r-xl {
    border-top-right-radius: var(--radius-xl) !important;
    border-bottom-right-radius: var(--radius-xl) !important;
  }
  .rounded-b-lg {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
  }
  .rounded-b-xs {
    border-bottom-right-radius: var(--radius-xs);
    border-bottom-left-radius: var(--radius-xs);
  }
  .\\!border {
    border-style: var(--tw-border-style) !important;
    border-width: 1px !important;
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
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .\\!border-r-0 {
    border-right-style: var(--tw-border-style) !important;
    border-right-width: 0px !important;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .\\!border-l-0 {
    border-left-style: var(--tw-border-style) !important;
    border-left-width: 0px !important;
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
  .border-solid {
    --tw-border-style: solid;
    border-style: solid;
  }
  .\\!border-border {
    border-color: var(--color-border) !important;
  }
  .\\!border-neutral-200 {
    border-color: var(--color-neutral-200) !important;
  }
  .border-blue-300 {
    border-color: var(--color-blue-300);
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
  .border-cl1-new-gray-7 {
    border-color: var(--color-cl1-new-gray-7);
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
  .border-neutral-200 {
    border-color: var(--color-neutral-200);
  }
  .border-neutral-200\\/60 {
    border-color: color-mix(in srgb, oklch(0.922 0 0) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-neutral-200) 60%, transparent);
    }
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
  .border-red-300 {
    border-color: var(--color-red-300);
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-yellow-300 {
    border-color: var(--color-yellow-300);
  }
  .border-r-neutral-900 {
    border-right-color: var(--color-neutral-900);
  }
  .border-b-neutral-900 {
    border-bottom-color: var(--color-neutral-900);
  }
  .border-b-transparent {
    border-bottom-color: transparent;
  }
  .border-b-transparent\\! {
    border-bottom-color: transparent !important;
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
  .bg-bg-primary {
    background-color: var(--color-bg-primary);
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
  .bg-blue-500 {
    background-color: var(--color-blue-500);
  }
  .bg-blue-600 {
    background-color: var(--color-blue-600);
  }
  .bg-cl1-blue-8 {
    background-color: var(--color-cl1-blue-8);
  }
  .bg-cl1-gold-9 {
    background-color: var(--color-cl1-gold-9);
  }
  .bg-cl1-white {
    background-color: var(--color-cl1-white);
  }
  .bg-destructive {
    background-color: var(--color-destructive);
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
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
  .bg-neutral-100 {
    background-color: var(--color-neutral-100);
  }
  .bg-neutral-200 {
    background-color: var(--color-neutral-200);
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
  .bg-primary {
    background-color: var(--color-primary);
  }
  .bg-red-50 {
    background-color: var(--color-red-50);
  }
  .bg-red-100 {
    background-color: var(--color-red-100);
  }
  .bg-red-200 {
    background-color: var(--color-red-200);
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
  .bg-gradient-to-r {
    --tw-gradient-position: to right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .from-transparent {
    --tw-gradient-from: transparent;
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
  .\\!p-0 {
    padding: calc(var(--spacing) * 0) !important;
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
  .p-0\\.5 {
    padding: calc(var(--spacing) * 0.5);
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
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
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
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-6 {
    padding-block: calc(var(--spacing) * 6);
  }
  .py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
  .py-16 {
    padding-block: calc(var(--spacing) * 16);
  }
  .py-\\[3px\\] {
    padding-block: 3px;
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
  .pt-\\[1px\\] {
    padding-top: 1px;
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
  .pr-8 {
    padding-right: calc(var(--spacing) * 8);
  }
  .pr-12 {
    padding-right: calc(var(--spacing) * 12);
  }
  .pr-\\[1px\\] {
    padding-right: 1px;
  }
  .pr-\\[14px\\] {
    padding-right: 14px;
  }
  .pb-4 {
    padding-bottom: calc(var(--spacing) * 4);
  }
  .pb-10 {
    padding-bottom: calc(var(--spacing) * 10);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
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
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
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
  .\\!text-inherit {
    color: inherit !important;
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
  .text-border {
    color: var(--color-border);
  }
  .text-cl1-blue-2 {
    color: var(--color-cl1-blue-2);
  }
  .text-cl1-gray-0 {
    color: var(--color-cl1-gray-0);
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
  .text-destructive {
    color: var(--text-color-destructive);
  }
  .text-error {
    color: var(--text-color-error);
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
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-green-600 {
    color: var(--color-green-600);
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
  .text-neutral-400 {
    color: var(--color-neutral-400);
  }
  .text-neutral-500 {
    color: var(--color-neutral-500);
  }
  .text-neutral-600 {
    color: var(--color-neutral-600);
  }
  .text-neutral-900 {
    color: var(--color-neutral-900);
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
  .text-primary {
    color: var(--text-color-primary);
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
  .text-secondary {
    color: var(--text-color-secondary);
  }
  .text-surface {
    color: var(--text-color-surface);
  }
  .text-white {
    color: var(--color-white);
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
  .decoration-dotted {
    text-decoration-style: dotted;
  }
  .underline-offset-2 {
    text-underline-offset: 2px;
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
  .shadow-md {
    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
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
  .ring-neutral-950 {
    --tw-ring-color: var(--color-neutral-950);
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
  .outline-color {
    outline-color: var(--color-color);
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
  .backdrop-filter {
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
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .duration-100 {
    --tw-duration: 100ms;
    transition-duration: 100ms;
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
  .before\\:absolute {
    &::before {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .before\\:top-0 {
    &::before {
      content: var(--tw-content);
      top: calc(var(--spacing) * 0);
    }
  }
  .before\\:left-0 {
    &::before {
      content: var(--tw-content);
      left: calc(var(--spacing) * 0);
    }
  }
  .before\\:size-full {
    &::before {
      content: var(--tw-content);
      width: 100%;
      height: 100%;
    }
  }
  .before\\:scale-\\[1\\.5\\] {
    &::before {
      content: var(--tw-content);
      scale: 1.5;
    }
  }
  .before\\:bg-transparent {
    &::before {
      content: var(--tw-content);
      background-color: transparent;
    }
  }
  .first\\:pl-2 {
    &:first-child {
      padding-left: calc(var(--spacing) * 2);
    }
  }
  .last\\:pr-2 {
    &:last-child {
      padding-right: calc(var(--spacing) * 2);
    }
  }
  .focus-within\\:outline-2 {
    &:focus-within {
      outline-style: var(--tw-outline-style);
      outline-width: 2px;
    }
  }
  .focus-within\\:outline-blue-700 {
    &:focus-within {
      outline-color: var(--color-blue-700);
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
  .hover\\:bg-accent {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-accent);
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
  .hover\\:bg-neutral-200 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-200);
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
  .hover\\:bg-neutral-800 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-800);
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
  .hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
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
  .disabled\\:bg-primary\\/70 {
    &:disabled {
      background-color: var(--color-primary);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-primary) 70%, transparent);
      }
    }
  }
  .disabled\\:text-muted {
    &:disabled {
      color: var(--text-color-muted);
    }
  }
  .disabled\\:text-primary\\/80 {
    &:disabled {
      color: var(--text-color-primary);
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, var(--text-color-primary) 80%, transparent);
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
  .sm\\:mb-8 {
    @media (width >= 40rem) {
      margin-bottom: calc(var(--spacing) * 8);
    }
  }
  .sm\\:block {
    @media (width >= 40rem) {
      display: block;
    }
  }
  .sm\\:grid-cols-4 {
    @media (width >= 40rem) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .sm\\:py-1\\.5 {
    @media (width >= 40rem) {
      padding-block: calc(var(--spacing) * 1.5);
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
  .md\\:px-12 {
    @media (width >= 48rem) {
      padding-inline: calc(var(--spacing) * 12);
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
  .lg\\:grid-cols-2 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
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
  .xl\\:w-\\[380px\\] {
    @media (width >= 80rem) {
      width: 380px;
    }
  }
  .xl\\:grid-cols-2 {
    @media (width >= 80rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .xl\\:grid-cols-3 {
    @media (width >= 80rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .xl\\:flex-row {
    @media (width >= 80rem) {
      flex-direction: row;
    }
  }
  .dark\\:divide-border {
    &:where(.dark, .dark *) {
      :where(& > :not(:last-child)) {
        border-color: var(--color-border);
      }
    }
  }
  .dark\\:\\!border-neutral-800 {
    &:where(.dark, .dark *) {
      border-color: var(--color-neutral-800) !important;
    }
  }
  .dark\\:border-blue-500 {
    &:where(.dark, .dark *) {
      border-color: var(--color-blue-500);
    }
  }
  .dark\\:border-gray-600 {
    &:where(.dark, .dark *) {
      border-color: var(--color-gray-600);
    }
  }
  .dark\\:border-green-500 {
    &:where(.dark, .dark *) {
      border-color: var(--color-green-500);
    }
  }
  .dark\\:border-neutral-100 {
    &:where(.dark, .dark *) {
      border-color: var(--color-neutral-100);
    }
  }
  .dark\\:border-neutral-400 {
    &:where(.dark, .dark *) {
      border-color: var(--color-neutral-400);
    }
  }
  .dark\\:border-neutral-700 {
    &:where(.dark, .dark *) {
      border-color: var(--color-neutral-700);
    }
  }
  .dark\\:border-neutral-800 {
    &:where(.dark, .dark *) {
      border-color: var(--color-neutral-800);
    }
  }
  .dark\\:border-neutral-800\\/60 {
    &:where(.dark, .dark *) {
      border-color: color-mix(in srgb, oklch(0.269 0 0) 60%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        border-color: color-mix(in oklab, var(--color-neutral-800) 60%, transparent);
      }
    }
  }
  .dark\\:border-red-500 {
    &:where(.dark, .dark *) {
      border-color: var(--color-red-500);
    }
  }
  .dark\\:border-red-700 {
    &:where(.dark, .dark *) {
      border-color: var(--color-red-700);
    }
  }
  .dark\\:border-yellow-500 {
    &:where(.dark, .dark *) {
      border-color: var(--color-yellow-500);
    }
  }
  .dark\\:border-r-neutral-100 {
    &:where(.dark, .dark *) {
      border-right-color: var(--color-neutral-100);
    }
  }
  .dark\\:border-b-neutral-100 {
    &:where(.dark, .dark *) {
      border-bottom-color: var(--color-neutral-100);
    }
  }
  .dark\\:\\!bg-neutral-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-900) !important;
    }
  }
  .dark\\:\\!bg-neutral-950 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-950) !important;
    }
  }
  .dark\\:bg-\\[\\#916b20\\] {
    &:where(.dark, .dark *) {
      background-color: #916b20;
    }
  }
  .dark\\:bg-black {
    &:where(.dark, .dark *) {
      background-color: var(--color-black);
    }
  }
  .dark\\:bg-blue-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-blue-800);
    }
  }
  .dark\\:bg-blue-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-blue-900);
    }
  }
  .dark\\:bg-gray-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-gray-800);
    }
  }
  .dark\\:bg-green-700 {
    &:where(.dark, .dark *) {
      background-color: var(--color-green-700);
    }
  }
  .dark\\:bg-green-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-green-800);
    }
  }
  .dark\\:bg-green-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-green-900);
    }
  }
  .dark\\:bg-neutral-100 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-100);
    }
  }
  .dark\\:bg-neutral-500 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-500);
    }
  }
  .dark\\:bg-neutral-700 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-700);
    }
  }
  .dark\\:bg-neutral-750 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-750);
    }
  }
  .dark\\:bg-neutral-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-800);
    }
  }
  .dark\\:bg-neutral-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-900);
    }
  }
  .dark\\:bg-neutral-950 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-950);
    }
  }
  .dark\\:bg-red-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-red-800);
    }
  }
  .dark\\:bg-red-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-red-900);
    }
  }
  .dark\\:bg-surface {
    &:where(.dark, .dark *) {
      background-color: var(--color-surface);
    }
  }
  .dark\\:bg-surface-secondary {
    &:where(.dark, .dark *) {
      background-color: var(--color-surface-secondary);
    }
  }
  .dark\\:bg-white\\/30 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, #fff 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-white) 30%, transparent);
      }
    }
  }
  .dark\\:bg-yellow-600 {
    &:where(.dark, .dark *) {
      background-color: var(--color-yellow-600);
    }
  }
  .dark\\:bg-yellow-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-yellow-900);
    }
  }
  .dark\\:to-neutral-900 {
    &:where(.dark, .dark *) {
      --tw-gradient-to: var(--color-neutral-900);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-neutral-950 {
    &:where(.dark, .dark *) {
      --tw-gradient-to: var(--color-neutral-950);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:\\!text-white {
    &:where(.dark, .dark *) {
      color: var(--color-white) !important;
    }
  }
  .dark\\:text-\\[var\\(--dark\\)\\] {
    &:where(.dark, .dark *) {
      color: var(--dark);
    }
  }
  .dark\\:text-blue-200 {
    &:where(.dark, .dark *) {
      color: var(--color-blue-200);
    }
  }
  .dark\\:text-blue-300 {
    &:where(.dark, .dark *) {
      color: var(--color-blue-300);
    }
  }
  .dark\\:text-neutral-50 {
    &:where(.dark, .dark *) {
      color: var(--color-neutral-50);
    }
  }
  .dark\\:text-neutral-400 {
    &:where(.dark, .dark *) {
      color: var(--color-neutral-400);
    }
  }
  .dark\\:text-neutral-600 {
    &:where(.dark, .dark *) {
      color: var(--color-neutral-600);
    }
  }
  .dark\\:text-neutral-900 {
    &:where(.dark, .dark *) {
      color: var(--color-neutral-900);
    }
  }
  .dark\\:text-orange-400 {
    &:where(.dark, .dark *) {
      color: var(--color-orange-400);
    }
  }
  .dark\\:text-red-200 {
    &:where(.dark, .dark *) {
      color: var(--color-red-200);
    }
  }
  .dark\\:text-red-400 {
    &:where(.dark, .dark *) {
      color: var(--color-red-400);
    }
  }
  .dark\\:text-white {
    &:where(.dark, .dark *) {
      color: var(--color-white);
    }
  }
  .dark\\:shadow-\\[0_0_0_1px_rgba\\(255\\,255\\,255\\,0\\.5\\)_inset\\] {
    &:where(.dark, .dark *) {
      --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(255,255,255,0.5)) inset;
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .dark\\:ring-neutral-800 {
    &:where(.dark, .dark *) {
      --tw-ring-color: var(--color-neutral-800);
    }
  }
  .dark\\:hover\\:border-neutral-700\\/80 {
    &:where(.dark, .dark *) {
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
  .dark\\:hover\\:bg-neutral-450 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-450);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-700 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-700);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-800 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-800);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-900 {
    &:where(.dark, .dark *) {
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
        &:where(.dark, .dark *) {
          background-color: var(--color-neutral-800);
        }
      }
    }
  }
  .hover\\:dark\\:bg-neutral-900 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark, .dark *) {
          background-color: var(--color-neutral-900);
        }
      }
    }
  }
  .hover\\:dark\\:bg-neutral-950 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark, .dark *) {
          background-color: var(--color-neutral-950);
        }
      }
    }
  }
  .dark\\:hover\\:text-white {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-white);
        }
      }
    }
  }
  .\\[\\&\\:has\\(\\:focus-within\\)\\]\\:border-active {
    &:has(:focus-within) {
      border-color: var(--color-active);
    }
  }
  .\\[\\&\\>pre\\]\\:\\!p-2\\.5 {
    &>pre {
      padding: calc(var(--spacing) * 2.5) !important;
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
  .dark {
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
}
.z-modal {
  z-index: 9999;
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
.dark .skeleton-line {
  background-color: rgba(255, 255, 255, 0.06);
}
.dark .skeleton-line::after {
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
html.dark {
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
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
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
      --tw-content: "";
    }
  }
}
`, ""])
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(K, y, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function r(a) {
				if (!t.o(e, a)) return Promise.resolve().then(function() {
					var _ = new Error("Cannot find module '" + a + "'");
					throw _.code = "MODULE_NOT_FOUND", _
				});
				var l = e[a],
					i = l[0];
				return t.e(l[1]).then(function() {
					return t.t(i, 1 | 16)
				})
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", K.exports = r
		}
	}
]);

//# debugId=ae5ffa9c-7b96-550b-b60f-af85d722f3b5