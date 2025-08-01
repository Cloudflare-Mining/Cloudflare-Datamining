! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8971d1e0-0727-5f59-aba8-c337050ccd31")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				J8: function() {
					return a
				},
				Jd: function() {
					return p
				},
				QY: function() {
					return d
				},
				Qw: function() {
					return c
				},
				ki: function() {
					return l
				},
				wz: function() {
					return T
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/utils/url.ts"),
				i = t("../../../../node_modules/query-string/query-string.js"),
				u = t.n(i),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m;
			const c = () => Object.keys(s.Z).reduce((y, g) => (g.indexOf("cf_beta.") === 0 && s.Z.get(g) === "true" && y.push(g.split(".").slice(1).join(".")), y), []),
				l = () => {
					var y, g, O;
					return ((y = window) === null || y === void 0 || (g = y.bootstrap) === null || g === void 0 || (O = g.data) === null || O === void 0 ? void 0 : O.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((m = window) === null || m === void 0 ? void 0 : m.location) && s.Z) {
				const y = u().parse(window.location.search);
				y.beta_on && s.Z.set(`cf_beta.${y.beta_on}`, !0), y.beta_off && s.Z.set(`cf_beta.${y.beta_off}`, !1)
			}
			const f = {},
				n = y => {
					var g, O, _;
					return Object.prototype.hasOwnProperty.call(f, y) ? f[y] : ((g = window) === null || g === void 0 || (O = g.bootstrap) === null || O === void 0 || (_ = O.data) === null || _ === void 0 ? void 0 : _.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(b => b === y) ? (f[y] = !0, !0) : (f[y] = !1, !1)
				},
				o = y => s.Z ? s.Z.get(`cf_beta.${y}`) === !0 : !1,
				a = y => o(y) || n(y),
				v = () => !0,
				p = () => {
					var y, g, O;
					return ((y = window) === null || y === void 0 || (g = y.bootstrap) === null || g === void 0 || (O = g.data) === null || O === void 0 ? void 0 : O.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				d = y => {
					const g = (0, e.uF)(y),
						O = (g == null ? void 0 : g.roles) || [];
					return (0, r.qR)(location.pathname) && O.length === 1 && O.some(_ => _ === "Administrator Read Only")
				},
				E = () => {
					var y, g, O;
					return ((y = window) === null || y === void 0 || (g = y.location) === null || g === void 0 || (O = g.origin) === null || O === void 0 ? void 0 : O.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				T = () => E() === "fed"
		},
		"../functions/utils/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				b1: function() {
					return e
				}
			});
			const e = "CF_dash_version",
				r = "cf_fv_preview",
				i = "cf_pv",
				u = "current",
				s = "hash",
				m = "deploymentPreview",
				c = "fragmentPreview",
				l = o => o === u ? f() : n(),
				f = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				n = (o = 72) => {
					const a = 36e5;
					return new Date(Date.now() + o * a)
				}
		},
		"../functions/utils/preview-deploy-helpers.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				E9: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/zod/lib/index.mjs");

			function r(y) {
				for (var g = 1; g < arguments.length; g++) {
					var O = arguments[g] != null ? Object(arguments[g]) : {},
						_ = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(O).filter(function(b) {
						return Object.getOwnPropertyDescriptor(O, b).enumerable
					})), _.forEach(function(b) {
						i(y, b, O[b])
					})
				}
				return y
			}

			function i(y, g, O) {
				return g = u(g), g in y ? Object.defineProperty(y, g, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[g] = O, y
			}

			function u(y) {
				var g = s(y, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function s(y, g) {
				if (typeof y != "object" || y === null) return y;
				var O = y[Symbol.toPrimitive];
				if (O !== void 0) {
					var _ = O.call(y, g || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(y)
			}
			const m = e.z.string().regex(/^(((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))|canary)$/g),
				c = e.z.string().regex(/^[a-zA-Z0-9]{8}$/),
				l = e.z.string(),
				f = e.z.union([e.z.string().regex(/^[a-zA-Z0-9]{8}$/), e.z.literal("current")]),
				n = e.z.record(l, f),
				o = e.z.enum(["live", "previews", "canary"]),
				a = (y, g) => {
					const O = y.data.cookies[g],
						_ = {
							[PREVIEW_VERSIONING_COOKIE]: m,
							[DEPLOYMENT_VERSION_COOKIE]: c
						};
					try {
						return _[g].parse(O)
					} catch {
						return null
					}
				},
				v = y => {
					try {
						return decodeURIComponent(y).split(",").reduce((g, O) => {
							const _ = O.split(":"),
								b = l.parse(_[0]),
								I = f.parse(_[1]);
							return r({}, g, {
								[b]: I
							})
						}, {})
					} catch {
						return {}
					}
				},
				p = y => {
					const g = y.data.cookies[FRAGMENT_VERSIONING_PREVIEW_COOKIE],
						O = v(g);
					try {
						return n.parse(O)
					} catch {
						return null
					}
				},
				d = y => {
					const g = m.parse(y),
						[O, ..._] = g.split("-"),
						b = _.join("-");
					return {
						projectType: O,
						deploymentId: b
					}
				},
				E = (y, g) => {
					if (!g) return "";
					try {
						var O;
						const {
							projectType: _,
							deploymentId: b
						} = d(g), I = {
							live: y.env.PAGES_WORKERS_LIVE_HOST,
							previews: y.env.PAGES_WORKERS_PREVIEW_HOST
						}, {
							hostname: A,
							pathname: D,
							search: L
						} = new URL(y.request.url), C = A == null || (O = A.split(".")) === null || O === void 0 ? void 0 : O[0];
						if (b && b !== C && o.safeParse(_).success) {
							const k = I[_];
							return `https://${b}.${k}${D}${L}`
						}
					} catch (_) {
						console.log(_)
					}
					return ""
				},
				T = (y, g) => {
					if (!g) return "";
					try {
						var O;
						const _ = y.env.PAGES_WORKERS_LIVE_HOST,
							{
								hostname: b,
								pathname: I,
								search: A
							} = new URL(y.request.url),
							D = b == null || (O = b.split(".")) === null || O === void 0 ? void 0 : O[0],
							{
								deploymentSHA: L
							} = parsePagesDevUrl(y.env.CF_PAGES_URL),
							C = y.request.headers.get("sec-fetch-dest") === "document";
						if (g && g !== D && g !== L && !C) return `https://${g}.${_}${I}${A}`
					} catch (_) {
						console.log(_)
					}
					return ""
				}
		},
		"../init.ts": function(x, h, t) {
			"use strict";
			t.r(h);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				r = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				i = t("../libs/init/initGlobal.ts"),
				u = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				s = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function m(N) {
				for (var H = 1; H < arguments.length; H++) {
					var ae = arguments[H] != null ? Object(arguments[H]) : {},
						ge = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(ae).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(ae, ye).enumerable
					})), ge.forEach(function(ye) {
						c(N, ye, ae[ye])
					})
				}
				return N
			}

			function c(N, H, ae) {
				return H = l(H), H in N ? Object.defineProperty(N, H, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[H] = ae, N
			}

			function l(N) {
				var H = f(N, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function f(N, H) {
				if (typeof N != "object" || N === null) return N;
				var ae = N[Symbol.toPrimitive];
				if (ae !== void 0) {
					var ge = ae.call(N, H || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(N)
			}
			const n = N => {
				const H = N && N.headers || {},
					ae = new Headers(H);
				return ae.append("X-Cross-Site-Security", "dash"), m({}, N, {
					headers: ae
				})
			};
			(0, s.register)({
				request: (N, H) => {
					try {
						return new URL(N), N === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", H] : [N, H]
					} catch {
						var ae, ge;
						return typeof N == "object" && ((ae = N) === null || ae === void 0 || (ge = ae.url) === null || ge === void 0 ? void 0 : ge.startsWith("https://platform.dash.cloudflare.com/map-tiles/")) ? [N, H] : [N, n(H)]
					}
				}
			});
			var o = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				a = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				v = t("../react/app/providers/storeContainer.js");
			let p = "";
			const d = 61;

			function E(N) {
				const H = N.substr(1);
				if (H && p !== H) {
					const ae = document.getElementById(H);
					if (ae) {
						const ge = ae.getBoundingClientRect().top;
						if (ge > 0) {
							const ye = ge - d;
							document.documentElement.scrollTop = ye
						}
					}
				}
				p = H
			}

			function T(N) {
				N.listen(H => E(H.hash))
			}
			var y = t("../../../../node_modules/cookie/index.js"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				O = t("../functions/utils/constants.ts");
			const _ = N => {
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
				b = (N, H = !1) => {
					var ae;
					const ge = _(N),
						ye = `
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
    <h1 id="error-title">${ge.title}</h1>
    <p id="error-description">${ge.description}</p>
  </div>
  `,
						Le = H ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${g.fk.orange[9]};
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
					return ye + Le
				},
				I = N => {
					var H;
					const ae = document.getElementById(N);
					!ae || (H = ae.parentNode) === null || H === void 0 || H.removeChild(ae)
				};

			function A() {
				const N = document.getElementById("loading-state");
				N == null || N.classList.add("hide"), N == null || N.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(I)
				})
			}

			function D(N) {
				var H;
				const ae = document.getElementById("loading-state"),
					ge = !!((H = y.parse(document.cookie)) === null || H === void 0 ? void 0 : H[O.b1]);
				!ae || (ae.innerHTML = b(N == null ? void 0 : N.code, ge))
			}
			var L = t("../utils/initStyles.ts"),
				C = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				k = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				R = t("../react/common/selectors/languagePreferenceSelector.ts"),
				P = t("../flags.ts"),
				z = t("../utils/getDashVersion.ts");
			const te = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				ee = !0,
				q = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				B = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var U = t("../utils/sentry/lastSentEventId.ts"),
				X = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				K = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const M = N => {
				const H = async ae => {
					var ge, ye;
					const Le = {
						envelope: ae.body,
						url: N.url,
						isPreviewDeploy: (ge = window) === null || ge === void 0 || (ye = ge.build) === null || ye === void 0 ? void 0 : ye.isPreviewDeploy,
						release: (0, z.t)()
					};
					try {
						const Pe = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(Le)
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
				return X.q(N, H)
			};
			var j = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				F = t("../../../../node_modules/history/esm/history.js"),
				J = (0, F.lX)(),
				ne = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Y = t("../react/utils/url.ts");
			const ue = (0, ne.Rf)();
			let W;

			function re(N) {
				return $(N, "react-router-v5")
			}

			function $(N, H) {
				return (ae, ge = !0, ye = !0) => {
					ge && ue && ue.location && (W = ae({
						name: (0, Y.Fl)(ue.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": H
						}
					})), ye && N.listen && N.listen((Le, Pe) => {
						if (Pe && (Pe === "PUSH" || Pe === "POP")) {
							W && W.finish();
							const Je = {
								"routing.instrumentation": H
							};
							W = ae({
								name: (0, Y.Fl)(Le.pathname),
								op: "navigation",
								tags: Je
							})
						}
					})
				}
			}
			var oe = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ie = t.n(oe),
				Ee = t("../../../common/intl/intl-core/src/errors.ts"),
				se = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				he = t("../react/common/middleware/sparrow/errors.ts");

			function De(N, H, ae) {
				return H = Me(H), H in N ? Object.defineProperty(N, H, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[H] = ae, N
			}

			function Me(N) {
				var H = Fe(N, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function Fe(N, H) {
				if (typeof N != "object" || N === null) return N;
				var ae = N[Symbol.toPrimitive];
				if (ae !== void 0) {
					var ge = ae.call(N, H || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(N)
			}
			class Se {
				constructor() {
					De(this, "name", Se.id)
				}
				setupOnce() {
					t.g.console && (0, se.hl)(t.g.console, "error", H => (...ae) => {
						const ge = ae.find(ye => ye instanceof Error);
						if (te && ge) {
							let ye, Le = !0;
							if (ge instanceof he.ez) {
								const Pe = ge instanceof he.oV ? ge.invalidProperties : void 0;
								ye = {
									tags: {
										"sparrow.eventName": ge.eventName
									},
									extra: {
										sparrow: {
											eventName: ge.eventName,
											invalidProperties: Pe
										}
									},
									fingerprint: [ge.name ? ge.name : "SparrowValidationError"]
								}, Le = !1
							} else if (ge instanceof oe.SparrowIdCookieError) ye = {
								extra: {
									sparrowIdCookie: ge.cookie
								},
								fingerprint: [ge.name ? ge.name : "SparrowIdCookieError"]
							};
							else if (ge.name === "ChunkLoadError") {
								ye = {
									fingerprint: [ge.name]
								};
								try {
									ye.tags = {
										chunkId: ge.message.split(" ")[2],
										chunkUrl: ge.request
									}
								} catch {}
							} else ge instanceof Ee.YB && (ye = {
								fingerprint: ["TranslatorError", ge.translationKey]
							});
							Le && o.Tb(ge, ye)
						}
						typeof H == "function" && H.apply(t.g.console, ae)
					})
				}
			}
			De(Se, "id", "ConsoleErrorIntegration");
			var ot = null,
				Ke = t("../react/common/utils/getEnvironment.ts");
			const qe = () => {
					if (te && ee) {
						var N, H, ae, ge, ye, Le, Pe, Je, ct, Ne;
						const pt = (0, Ke.Z)();
						let St = "production";
						((N = window) === null || N === void 0 || (H = N.build) === null || H === void 0 ? void 0 : H.isPreviewDeploy) && (St += "-preview"), pt === "canary" && (St = "canary"), k.S({
							dsn: te,
							release: (0, z.t)(),
							environment: St,
							ignoreErrors: B,
							allowUrls: q,
							autoSessionTracking: !1,
							integrations: Et => [...Et.filter(nn => nn.name !== "GlobalHandlers" && nn.name !== "TryCatch"), new Se, new j.jK.BrowserTracing({
								routingInstrumentation: re(J)
							})],
							tracesSampleRate: 0,
							transport: M,
							beforeSend: Et => (U.e.setEventId(Et.event_id), Et)
						});
						const jt = (0, v.bh)().getState();
						o.rJ({
							LOCAL_STORAGE_FLAGS: (0, P.Qw)(),
							USER_BETA_FLAGS: (0, P.ki)(),
							meta: {
								connection: {
									type: (ae = window) === null || ae === void 0 || (ge = ae.navigator) === null || ge === void 0 || (ye = ge.connection) === null || ye === void 0 ? void 0 : ye.effectiveType,
									bandwidth: (Le = window) === null || Le === void 0 || (Pe = Le.navigator) === null || Pe === void 0 || (Je = Pe.connection) === null || Je === void 0 ? void 0 : Je.downlink
								},
								languagePreference: (0, R.r)(jt),
								isPreviewDeploy: (ct = window) === null || ct === void 0 || (Ne = ct.build) === null || Ne === void 0 ? void 0 : Ne.isPreviewDeploy
							},
							utilGates: (0, C.T2)(jt)
						}), window.addEventListener("unhandledrejection", function(Et) {})
					}
				},
				ze = N => {
					N ? o.av({
						id: N
					}) : o.av(null)
				};
			var V = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				je = () => {
					let N;
					try {
						N = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), N = window.location.search
					}
					if (!N.includes("remote[")) return;
					const H = new URLSearchParams(N),
						ae = {};
					for (let [ge, ye] of H) ge.includes("remote") && (ae[ge.replace(/remote\[|\]/g, "")] = ye);
					V.Z.set("mfe-remotes", JSON.stringify(ae))
				},
				Ue = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				tt = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const dt = "ANON_USER_ID";

			function gt() {
				var N, H, ae, ge;
				let ye = (N = t.g) === null || N === void 0 || (H = N.bootstrap) === null || H === void 0 || (ae = H.data) === null || ae === void 0 || (ge = ae.user) === null || ge === void 0 ? void 0 : ge.id;
				if (!ye) {
					let Le = V.Z.get(dt);
					if (!Le) {
						let Pe = (0, tt.Z)();
						V.Z.set(dt, Pe), Le = Pe
					}
					return Le
				}
				return ye
			}
			async function Ie() {
				const N = (0, v.bh)();
				N.dispatch((0, Ue.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await N.dispatch((0, C.UL)({
					userId: gt()
				}))
			}
			class nt extends Error {
				constructor(H, ae) {
					super(ae);
					this.name = `${H} ${ae}`
				}
			}
			const Q = () => {
					document.cookie.split(";").forEach(H => {
						const [ae] = H.trim().split("=");
						document.cookie = `${ae}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				ce = async () => {
					let N = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!N.ok) throw N.headers.get("content-type") === "text/html" && (await N.text()).toLowerCase().includes("cookie too large") && (o.$e(function(ye) {
						ye.setTag("init", "cookieTooLarge"), o.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), Q(), window.location.reload()), new nt("Bootstrap API Failure", N == null ? void 0 : N.status);
					return (await N.json()).result.data
				};
			var fe = t("webpack/sharing/consume/default/react/react"),
				Oe = t.n(fe),
				xe = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Ve = t("webpack/sharing/consume/default/react-dom/react-dom"),
				Ze = t("webpack/sharing/consume/default/react-redux/react-redux"),
				Ot = t("../../../../node_modules/swr/core/dist/index.mjs"),
				yt = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				Tt = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Wt = t("../react/shims/focus-visible.js"),
				Ye = t("../react/app/components/DeepLink/index.ts"),
				lt = t("../../../../node_modules/prop-types/index.js"),
				at = t.n(lt),
				ut = t("../react/utils/translator.tsx"),
				mt = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				Re = t("../../../dash/intl/intl-translations/src/index.ts"),
				Z = t("../../../../node_modules/query-string/query-string.js"),
				pe = t.n(Z),
				be = t("../react/common/actions/userActions.ts"),
				Te = t("../react/common/selectors/userSelectors.ts"),
				ke = t("../react/utils/i18n.ts"),
				He = t("../react/utils/bootstrap.ts");

			function it(N) {
				for (var H = 1; H < arguments.length; H++) {
					var ae = arguments[H] != null ? Object(arguments[H]) : {},
						ge = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(ae).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(ae, ye).enumerable
					})), ge.forEach(function(ye) {
						ft(N, ye, ae[ye])
					})
				}
				return N
			}

			function ft(N, H, ae) {
				return H = $t(H), H in N ? Object.defineProperty(N, H, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[H] = ae, N
			}

			function $t(N) {
				var H = It(N, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function It(N, H) {
				if (typeof N != "object" || N === null) return N;
				var ae = N[Symbol.toPrimitive];
				if (ae !== void 0) {
					var ge = ae.call(N, H || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(N)
			}
			let Xe = pe().parse(location.search);
			const kt = N => {
					const H = (0, He.$8)() ? [(0, Re.Fy)(Re.if.changes), (0, Re.Fy)(Re.if.common), (0, Re.Fy)(Re.if.navigation), (0, Re.Fy)(Re.if.overview), (0, Re.Fy)(Re.if.onboarding), (0, Re.Fy)(Re.if.invite), (0, Re.Fy)(Re.if.login), (0, Re.Fy)(Re.if.dns), (0, Re.Fy)(Re.n4.ssl_tls), (0, Re.Fy)(Re.if.message_inbox), (0, Re.Fy)(Re.if.welcome)] : [(0, Re.Fy)(Re.if.common), (0, Re.Fy)(Re.if.invite), (0, Re.Fy)(Re.if.login), (0, Re.Fy)(Re.if.onboarding)];
					Xe.lang ? Ft(N) : V.Z.get(ke.th) && At(N, (0, ke.Kd)());
					const ae = async ge => (await Promise.all(H.map(Le => Le(ge)))).reduce((Le, Pe) => it({}, Le, Pe), {});
					return Oe().createElement(mt.LocaleContext.Provider, {
						value: N.languagePreference
					}, Oe().createElement(mt.I18nProvider, {
						translator: ut.Vb,
						locale: N.languagePreference
					}, Oe().createElement(mt.I18nLoader, {
						loadPhrases: ae
					}, N.children)))
				},
				Ft = async N => {
					let H = Xe.lang.substring(0, Xe.lang.length - 2) + Xe.lang.substring(Xe.lang.length - 2, Xe.lang.length).toUpperCase();
					if (!(0, R.v)(H)) {
						console.warn(`${H} is not a supported locale.`), delete Xe.lang, N.history.replace({
							search: pe().stringify(Xe)
						});
						return
					}(0, ke.i_)(H), delete Xe.lang, At(N, H), N.isAuthenticated || N.history.replace({
						search: pe().stringify(Xe)
					})
				}, At = async (N, H) => {
					if (N.isAuthenticated) try {
						await N.setUserCommPreferences({
							"language-locale": H
						}, {
							hideErrorAlert: !0
						}), V.Z.remove(ke.th), N.history.replace({
							search: pe().stringify(Xe)
						})
					} catch (ae) {
						V.Z.set(ke.th, !0), console.error(ae)
					} else V.Z.set(ke.th, !0)
				}, Mt = N => {
					const H = (0, Te.PR)(N);
					return {
						isAuthenticated: !!(H && H.id),
						languagePreference: (0, ke.Kd)() || (0, R.r)(N)
					}
				}, Rt = {
					setUserCommPreferences: be.V_
				};
			var Nt = (0, xe.withRouter)((0, Ze.connect)(Mt, Rt)(kt));
			kt.propTypes = {
				history: at().object,
				languagePreference: at().string.isRequired,
				children: at().node.isRequired,
				isAuthenticated: at().bool,
				setUserCommPreferences: at().func.isRequired
			};
			var xt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				ht = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let bt;
			const zt = ({
				selectorPrefix: N = "c_"
			} = {}) => (bt || (bt = (0, ht.Z)({
				dev: !1,
				selectorPrefix: N
			})), bt);
			var Ht = t("../react/common/out.css"),
				Kt = t("../react/common/components/ModalManager.tsx"),
				Bt = t("../react/app/components/ErrorBoundary.tsx"),
				Gt = t("../react/common/actions/notificationsActions.ts");
			const Ut = (t.g.bootstrap || {}).data || {};
			class Dt extends Oe().Component {
				componentDidMount() {
					Ut.messages && this.dispatchNotificationActions(Ut.messages)
				}
				dispatchNotificationActions(H) {
					H.forEach(ae => {
						const {
							type: ge,
							message: ye,
							persist: Le
						} = ae;
						["success", "info", "warn", "error"].includes(ge) && this.props.notifyAdd(ge, (0, ut.ZP)(ye), {
							persist: !!Le
						})
					})
				}
				render() {
					return null
				}
			}
			var S = (0, xe.withRouter)((0, Ze.connect)(null, {
				notifyAdd: Gt.add
			})(Dt));
			Dt.propTypes = {
				notifyAdd: at().func.isRequired
			};
			var me = t("../react/app/redux/index.ts");

			function Ae() {
				var N;
				const H = (0, me.p4)(Te.PR),
					ae = (H == null || (N = H.email) === null || N === void 0 ? void 0 : N.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ge = (0, Ue.Yc)();
				(0, fe.useEffect)(() => {
					ge({
						userType: ae
					})
				}, [ae, ge])
			}
			var $e = t("../react/common/selectors/entitlementsSelectors.ts"),
				rt = t("../react/common/selectors/accountSelectors.ts");
			const vt = ["accountId", "is_ent"];

			function Pt() {
				const N = (0, Ue.f7)(),
					H = (0, xe.useHistory)(),
					ae = (0, Y.uW)(H.location.pathname),
					ge = (0, Ue.Yc)(),
					ye = (0, Ue.O$)(),
					Le = (0, me.p4)($e.u1),
					Pe = !Le.isRequesting && !!Le.data,
					Je = (0, me.p4)($e.p1),
					ct = (0, me.p4)(rt.Xu),
					Ne = (0, me.p4)(rt.uF),
					pt = !ct.isRequesting && !!ct.data;
				(0, fe.useEffect)(() => {
					if (ae && pt && Ne && Pe && ae === Ne.account.id) {
						var St, jt, Et, Jt;
						ge({
							accountId: Ne.account.id,
							is_ent: Je || (Ne == null || (St = Ne.account.meta) === null || St === void 0 ? void 0 : St.has_enterprise_zones),
							is_free_account: !Je && !(Ne == null || (jt = Ne.account.meta) === null || jt === void 0 ? void 0 : jt.has_business_zones) && !(Ne == null || (Et = Ne.account.meta) === null || Et === void 0 ? void 0 : Et.has_pro_zones) && !(Ne == null || (Jt = Ne.account.meta) === null || Jt === void 0 ? void 0 : Jt.has_enterprise_zones)
						})
					} else(!ae || ae in N && N.accountId !== ae) && ye(vt)
				}, [pt, Ne, ge, ye, Pe, Je, ae, N])
			}
			var _t = t("../react/common/selectors/zoneSelectors.ts");

			function de() {
				const N = (0, me.p4)(_t.nA),
					H = (0, Ue.Yc)();
				(0, fe.useEffect)(() => {
					var ae;
					H({
						zone_id: N == null ? void 0 : N.id,
						zone_plan: N == null || (ae = N.plan) === null || ae === void 0 ? void 0 : ae.legacy_id
					})
				}, [N, H])
			}
			const le = () => (Ae(), Pt(), de(), null);
			var ve = t("../react/app/components/Persistence/index.tsx"),
				_e = t("../node_modules/@cloudflare/elements/es/index.js"),
				we = t("../react/app/components/LoadingSuspense.tsx");
			const Be = Oe().lazy(() => Promise.all([t.e(97842), t.e(33023), t.e(20400), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var We = () => Oe().createElement(we.Z, null, Oe().createElement(Be, null));
			const Qe = () => (fe.useEffect(() => A, []), null);
			var et = t("../../../../node_modules/moment/moment.js"),
				Ct = t.n(et);
			const Vt = N => {
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
				wt = () => {
					const N = (0, me.p4)(R.r);
					(0, fe.useEffect)(() => {
						const H = Vt(N);
						H !== Ct().locale() && Ct().locale(H), document.documentElement.lang = N
					}, [N])
				},
				st = () => {
					(0, fe.useEffect)(() => {
						async function N() {
							var H, ae, ge, ye;
							let Le;
							if (((H = window) === null || H === void 0 || (ae = H.build) === null || ae === void 0 ? void 0 : ae.isPreviewDeploy) && ((ge = window) === null || ge === void 0 || (ye = ge.build) === null || ye === void 0 ? void 0 : ye.branch) !== "staging" && (Le = "cookie"), !!Le) try {
								const Pe = document.head.querySelector("link[rel=icon]");
								Pe && (Pe.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${Le}.ico`)).default)
							} catch {}
						}
						N()
					}, [])
				};
			var rn = t("../react/common/constants/constants.ts");
			const on = () => {
				var N;
				const H = (0, xe.useLocation)(),
					[ae, ge] = (0, fe.useState)(((N = window) === null || N === void 0 ? void 0 : N.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
				return (0, fe.useEffect)(() => {
					const ye = pe().parse(H.search);
					if (ye.pt && V.Z.set(rn.sJ, ye.pt), ye == null ? void 0 : ye.devPanel) {
						var Le, Pe;
						(Le = window) === null || Le === void 0 || (Pe = Le.localStorage) === null || Pe === void 0 || Pe.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ge(!0)
					}
				}, [H.search]), {
					devPanelEnabled: ae
				}
			};
			var an = t("../react/utils/useDomainConnectRedirect.ts");
			const sn = Oe().lazy(() => Promise.all([t.e(97842), t.e(16691), t.e(11624), t.e(11664), t.e(94012), t.e(1091), t.e(33023), t.e(98733), t.e(88789), t.e(10405), t.e(80778), t.e(69102), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(66270), t.e(29271), t.e(98210), t.e(3769), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				cn = Oe().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(1091), t.e(80778), t.e(17387), t.e(66270), t.e(3769), t.e(88145), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var ln = ({
					userIsAuthed: N
				}) => {
					wt(), st(), (0, an.y)();
					const {
						devPanelEnabled: H
					} = on();
					return Oe().createElement(fe.Suspense, {
						fallback: Oe().createElement(Qe, null)
					}, Oe().createElement(xe.Switch, null, !N && !0 && Oe().createElement(xe.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Oe().createElement(cn, null)), Oe().createElement(xe.Route, {
						render: () => Oe().createElement(_e.ZC, {
							minHeight: "100vh"
						}, Oe().createElement(sn, null))
					})), H && Oe().createElement(We, null))
				},
				Qt = t("../../../../node_modules/yup/es/index.js"),
				un = t("../../../common/util/types/src/utils/index.ts");
			const qt = {
				cfEmail: () => Qt.Z_().email((0, ut.ZP)("common.validation.email")).required((0, ut.ZP)("common.validation.email")),
				cfPassword: () => Qt.Z_().required((0, ut.ZP)("common.validation.required"))
			};
			(0, un.Yd)(qt).forEach(N => {
				Qt.kM(Qt.Z_, N, qt[N])
			});
			const dn = N => {
					if (!document.startViewTransition) {
						N();
						return
					}
					document.startViewTransition(() => N())
				},
				en = Oe().lazy(() => Promise.all([t.e(16691), t.e(94012), t.e(6368), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function pn() {
				const [N, H] = (0, fe.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, fe.useEffect)(() => {
					const ae = window.matchMedia("(prefers-color-scheme: dark)"),
						ge = ye => {
							H(ye.matches ? "dark" : "light")
						};
					return ae.addEventListener("change", ge), () => {
						ae.removeEventListener("change", ge)
					}
				}, []), N
			}
			const gn = () => {
					const N = (0, He.$8)(),
						[H, ae] = (0, fe.useState)(N ? en : Oe().Fragment),
						ge = pn(),
						[ye, Le] = (0, fe.useState)((0, g.Yc)());
					(0, fe.useEffect)(() => {
						(0, g.fF)(() => Le((0, g.Yc)()))
					}, []);
					const Pe = Ne => Ne === g.LF.ON || Ne === g.LF.SYSTEM && ge === "dark",
						Je = Ne => {
							document.cookie = `dark-mode=${Ne};Path=/;Max-Age=31536000`
						},
						ct = (Ne = g.LF.SYSTEM) => {
							const pt = Pe(Ne);
							dn(() => {
								Le(pt), (0, g.C8)(Ne)
							}), Je(Ne)
						};
					return (0, fe.useEffect)(() => {
						ae(N ? en : Oe().Fragment)
					}, [N]), (0, fe.useEffect)(() => {
						const Ne = () => {
							const pt = localStorage.getItem("dark-mode");
							ct(pt)
						};
						return window.addEventListener("storage", Ne), () => window.removeEventListener("storage", Ne)
					}, []), Oe().createElement(fe.Suspense, {
						fallback: null
					}, Oe().createElement(Ze.Provider, {
						store: (0, v.bh)()
					}, Oe().createElement(xe.Router, {
						history: J
					}, Oe().createElement(H, null, Oe().createElement(xt.Z, {
						renderer: zt()
					}, Oe().createElement(Nt, null, Oe().createElement(Bt.S, {
						sentryTag: "Root"
					}, Oe().createElement(Ot.J$, {
						value: {
							fetcher: Ne => fetch(Ne).then(pt => pt.json())
						}
					}, Oe().createElement(le, null), Oe().createElement(S, null), Oe().createElement(ve.Z_, {
						onDarkModeChangeCb: ct
					}, Oe().createElement(Ye.ZP, null, Oe().createElement(ln, {
						userIsAuthed: N
					}))), Oe().createElement(Kt.ZP, null), Oe().createElement(yt.F0, null)))))))))
				},
				mn = () => {
					(0, Ve.render)(Oe().createElement(gn, null), document.getElementById("react-app"))
				};
			var Lt = t("../utils/initSparrow.ts"),
				Zt = t("../utils/zaraz.ts");
			const fn = () => {
					const N = (0, Te.PR)((0, v.bh)().getState());
					vn(), (0, Lt.Ug)(), (0, Zt.bM)(), (N == null ? void 0 : N.id) && ie().setUserId(N == null ? void 0 : N.id), (0, Lt.yV)(), !(0, Lt.Wi)() && (0, Lt.IM)(), N ? (0, Zt.yn)(N) : (0, Zt.Ro)()
				},
				vn = () => {
					var N, H;
					(N = window) === null || N === void 0 || (H = N.OneTrust) === null || H === void 0 || H.OnConsentChanged(() => {
						const ae = (0, Te.PR)((0, v.bh)().getState());
						(0, Lt.Wi)() ? (ie().setEnabled(!0), (ae == null ? void 0 : ae.id) ? (ie().setUserId(ae.id), (0, Zt.yn)(ae)) : (0, Zt.Ro)(), (0, Lt.yV)()) : (ie().setEnabled(!1), (0, Lt.IM)())
					})
				};

			function _n(N) {
				for (var H = 1; H < arguments.length; H++) {
					var ae = arguments[H] != null ? Object(arguments[H]) : {},
						ge = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(ae).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(ae, ye).enumerable
					})), ge.forEach(function(ye) {
						En(N, ye, ae[ye])
					})
				}
				return N
			}

			function En(N, H, ae) {
				return H = yn(H), H in N ? Object.defineProperty(N, H, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[H] = ae, N
			}

			function yn(N) {
				var H = hn(N, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function hn(N, H) {
				if (typeof N != "object" || N === null) return N;
				var ae = N[Symbol.toPrimitive];
				if (ae !== void 0) {
					var ge = ae.call(N, H || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(N)
			}
			const bn = "init",
				tn = (N, H) => {
					o.$e(function(ae) {
						ae.setTag(bn, H), o.Tb(N)
					}), D(N)
				},
				Xt = async (N, H) => {
					try {
						return await N(), !0
					} catch (ae) {
						return tn(ae, H), !1
					}
				};
			(async () => {
				try {
					var N, H, ae;
					t.g.build = _n({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "90138649015d7e938a0281bfb9d29a97b6f6f25a",
						dashVersion: "35016431",
						env: "production",
						builtAt: 1754065291092,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, z.p)()
					}), qe();
					const ge = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => T(J),
						tag: "hashScroll"
					}, {
						fn: L.Z,
						tag: "styles"
					}, {
						fn: je,
						tag: "mfePreviewData"
					}];
					for (const ct of ge)
						if (!await Xt(ct.fn, ct.tag)) return;
					let ye;
					if (!await Xt(async () => {
							ye = await ce()
						}, "bootstrap")) return;
					const Le = (0, v.bh)(),
						Pe = ((N = ye) === null || N === void 0 ? void 0 : N.data) || {};
					Le.dispatch((0, a.mW)("user", Pe == null ? void 0 : Pe.user));
					const Je = (H = ye) === null || H === void 0 || (ae = H.data) === null || ae === void 0 ? void 0 : ae.user;
					return t.g.bootstrap = ye, Je && Je.id && ze(Je.id), !await Xt(Ie, "gates") || !(0, P.wz)() && !await Xt(fn, "tracking") ? void 0 : mn()
				} catch (ge) {
					tn(ge, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(x, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/userSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/common/utils/isGuards.ts"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = t.n(l);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(v) {
					for (var p = 1; p < arguments.length; p++) {
						var d = arguments[p];
						for (var E in d) Object.prototype.hasOwnProperty.call(d, E) && (v[E] = d[E])
					}
					return v
				}, n.apply(this, arguments)
			}
			const o = v => {
				function p(d) {
					const E = (0, i.UM)(),
						T = (0, l.useHistory)(),
						y = (0, l.useLocation)(),
						g = (0, l.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						O = (0, i.p4)(u.PR) || null,
						_ = (0, i.p4)(s.nA) || null,
						b = (0, i.p4)(m.uF),
						I = b ? b.account : null;
					if (!g) return null;
					const {
						accountId: A,
						app: D,
						tab: L
					} = g.params, C = g.params.zoneName && ((0, c.v5)(g.params.zoneName) || g.params.zoneName.indexOf(".") > 0) ? g.params.zoneName : void 0;
					return r().createElement(v, n({
						dispatch: E,
						history: T,
						location: y,
						match: g,
						user: O,
						membership: A ? b : null,
						account: A ? I : null,
						accountId: A || null,
						zone: C ? _ : null,
						zoneName: C || null,
						app: C ? D : null,
						tab: C ? L : null
					}, d))
				}
				return p.displayName = `withEntities(${a(v)})`, p
			};

			function a(v) {
				return v.displayName || v.name || "Component"
			}
			h.Z = o
		},
		"../react/app/components/AccountHome/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$$: function() {
					return _
				},
				CK: function() {
					return D
				},
				KV: function() {
					return I
				},
				OX: function() {
					return A
				},
				QV: function() {
					return O
				},
				Yt: function() {
					return y
				},
				bA: function() {
					return g
				},
				fu: function() {
					return C
				},
				gX: function() {
					return d
				},
				hh: function() {
					return L
				},
				o1: function() {
					return b
				},
				tw: function() {
					return E
				},
				xD: function() {
					return T
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				i = t("../react/utils/url.ts");
			const u = "projects table click",
				s = "click create application",
				m = "account home dev plat - product card click",
				c = "account home dev plat - empty state CTA click",
				l = "account home dev plat - view all projects click",
				f = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				o = "account home zero trust - analytics link click",
				a = "account home zero trust - product card click",
				v = "account home zero trust - plan pill click",
				p = "account home zero trust - plan fallback link click",
				d = {
					SPARROW_PROJECTS_TABLE_CLICK: u,
					SPARROW_CREATE_PROJECT_CLICK: s,
					SPARROW_PRODUCT_CARD_CLICK: m,
					SPARROW_EMPTY_STATE_CTA_CLICK: c,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: l,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: f,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: o,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: a,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: v,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: p
				},
				E = k => {
					r().sendEvent(u, {
						component: k
					})
				},
				T = k => {
					r().sendEvent(u, {
						component: "menu",
						subcomponent: k
					})
				},
				y = () => {
					r().sendEvent(s, {
						category: "Projects Table"
					})
				},
				g = ({
					category: k,
					product: R
				}) => {
					r().sendEvent(m, {
						category: k,
						product: R
					})
				},
				O = () => {
					r().sendEvent(c)
				},
				_ = () => {
					r().sendEvent(l)
				},
				b = k => {
					r().sendEvent(n, {
						category: k
					})
				},
				I = ({
					category: k,
					href: R
				}) => {
					r().sendEvent(f, {
						category: k,
						href: (0, i.cm)(R)
					})
				},
				A = ({
					category: k,
					href: R
				}) => {
					r().sendEvent(o, {
						category: k,
						href: (0, i.cm)(R)
					})
				},
				D = ({
					category: k,
					product: R,
					href: P
				}) => {
					r().sendEvent(a, {
						category: k,
						product: R,
						href: (0, i.cm)(P)
					})
				},
				L = ({
					plan: k
				}) => {
					r().sendEvent(v, {
						plan: k
					})
				},
				C = () => {
					r().sendEvent(p)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				BQ: function() {
					return l
				},
				Bh: function() {
					return m
				},
				CM: function() {
					return f
				},
				MF: function() {
					return r
				},
				TS: function() {
					return a
				},
				WF: function() {
					return s
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
					return u
				},
				zq: function() {
					return i
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
				i = (0, e.R)(r.ADD_SITE, v => ({
					payload: v
				})),
				u = (0, e.R)(r.RESOLVING_START),
				s = (0, e.R)(r.RESOLVING_COMPLETE),
				m = (0, e.R)(r.SELECT_ZONE, v => ({
					payload: v
				})),
				c = (0, e.R)(r.SELECT_ACCOUNT, v => ({
					payload: v
				})),
				l = (0, e.R)(r.SELECT_PAGES_PROJECT, v => ({
					payload: v
				})),
				f = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, v => ({
					payload: v
				})),
				n = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, v => ({
					accountIds: v
				})),
				o = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				a = (0, e.R)(r.SELECT_WORKER, v => ({
					payload: v
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				BV: function() {
					return e
				},
				Dz: function() {
					return f
				},
				Fj: function() {
					return u
				},
				Kt: function() {
					return m
				},
				O5: function() {
					return s
				},
				Tc: function() {
					return r
				},
				_h: function() {
					return n
				},
				dB: function() {
					return i
				},
				s$: function() {
					return c
				}
			});
			const e = "to",
				r = "_gl",
				i = "freeTrial",
				u = "deepLinkQueryParams",
				s = "resolvedDeepLinkQueryParams",
				m = "add",
				c = "multiSkuProducts",
				l = "/:account/billing/checkout",
				f = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				ZP: function() {
					return L
				},
				U: function() {
					return D.U
				},
				dd: function() {
					return D.dd
				},
				bk: function() {
					return m.bk
				},
				Bh: function() {
					return m.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t("../react/app/redux/index.ts"),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../react/app/components/DeepLink/utils.ts"),
				s = t("../react/utils/bootstrap.ts"),
				m = t("../react/app/components/DeepLink/actions.ts"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(c);

			function f(C) {
				for (var k = 1; k < arguments.length; k++) {
					var R = arguments[k] != null ? Object(arguments[k]) : {},
						P = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(R).filter(function(z) {
						return Object.getOwnPropertyDescriptor(R, z).enumerable
					})), P.forEach(function(z) {
						n(C, z, R[z])
					})
				}
				return C
			}

			function n(C, k, R) {
				return k = o(k), k in C ? Object.defineProperty(C, k, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[k] = R, C
			}

			function o(C) {
				var k = a(C, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function a(C, k) {
				if (typeof C != "object" || C === null) return C;
				var R = C[Symbol.toPrimitive];
				if (R !== void 0) {
					var P = R.call(C, k || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(C)
			}
			class v {
				constructor(k, R) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", P => {
						this.resolvers.set(P, {
							name: P,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", P => {
						const z = this.resolvers.get(P);
						z && (z.endTime = Date.now(), this.resolvers.set(P, z))
					}), n(this, "resolverCancel", P => {
						this.resolverDone(P), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", P => {
						const z = "NO_ACTION",
							te = {
								actionType: z,
								startTime: 0
							};
						return {
							start: (ee = z) => {
								const q = this.resolvers.get(P);
								te.actionType = ee, te.startTime = Date.now(), q && q.userActions.push(te)
							},
							finish: (ee = z) => {
								te.actionType = ee, te.endTime = Date.now()
							},
							cancel: (ee = z) => {
								te.actionType = ee, te.endTime = Date.now(), this.resolverCancel(P)
							}
						}
					}), this.deepLink = k, this.legacyDeepLink = R, this.resolvers = new Map
				}
				track(k) {
					try {
						if (this._done) return;
						this._done = !0;
						const R = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: p(this.startTime, this.endTime),
								totalCpuTime: p(this.startTime, this.endTime)
							},
							P = this.resolvers.size === 0 ? R : Array.from(this.resolvers.values()).reduce((z, te) => {
								const ee = p(te.startTime, te.endTime),
									q = te.userActions.reduce((U, X) => {
										const K = p(X.startTime, X.endTime);
										return {
											totalTime: U.totalTime + K,
											actions: U.actions.set(X.actionType, K)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									B = ee - q.totalTime;
								return f({}, z, {
									totalTime: z.totalTime + ee,
									totalUserActionsTime: z.totalUserActionsTime + q.totalTime,
									totalCpuTime: z.totalCpuTime + B,
									[`${te.name}ResolverTotalTime`]: ee,
									[`${te.name}ResolverTotalCpuTime`]: B,
									[`${te.name}ResolverTotalUserActionsTime`]: q.totalTime
								}, Array.from(q.actions.keys()).reduce((U, X) => f({}, U, {
									[`${te.name}Resolver/${X}`]: q.actions.get(X)
								}), {}))
							}, f({}, R, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						l().sendEvent(k, P)
					} catch (R) {
						console.error(R)
					}
				}
			}

			function p(C = Date.now(), k = Date.now()) {
				return (k - C) / 1e3
			}
			var d = t("../react/app/components/DeepLink/constants.ts"),
				E = t("../react/common/hooks/useCachedState.ts"),
				T = t("../react/common/hooks/usePrevious.ts");

			function y(C) {
				for (var k = 1; k < arguments.length; k++) {
					var R = arguments[k] != null ? Object(arguments[k]) : {},
						P = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(R).filter(function(z) {
						return Object.getOwnPropertyDescriptor(R, z).enumerable
					})), P.forEach(function(z) {
						g(C, z, R[z])
					})
				}
				return C
			}

			function g(C, k, R) {
				return k = O(k), k in C ? Object.defineProperty(C, k, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[k] = R, C
			}

			function O(C) {
				var k = _(C, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function _(C, k) {
				if (typeof C != "object" || C === null) return C;
				var R = C[Symbol.toPrimitive];
				if (R !== void 0) {
					var P = R.call(C, k || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(C)
			}
			var I = ({
					children: C
				}) => {
					const k = (0, r.TZ)(),
						R = (0, i.useHistory)(),
						P = (0, T.Z)(R.location.pathname),
						[z, te] = (0, e.useState)(!0),
						[ee, q] = (0, E.j)(void 0, {
							key: d.Fj
						}),
						[B, U] = (0, E.j)(void 0, {
							key: d.O5
						}),
						[X, K] = (0, E.j)(void 0, {
							key: d.s$
						}),
						M = (0, s.$8)();
					let j = new URLSearchParams(R.location.search);
					const F = (0, u.mL)(R.location.pathname, j);
					let G = null,
						J = null;
					if (j.has(d.Tc) && j.delete(d.Tc), j.get(d.BV)) G = j.get(d.BV), R.location.hash && (J = R.location.hash);
					else if (ee) {
						const Y = new URLSearchParams(ee);
						Y.get(d.BV) && (G = Y.get(d.BV), j = Y)
					} else F && (j.set(d.BV, F), G = F);
					if (G && d._h.test(G)) {
						const Y = j.getAll(d.Kt),
							ue = JSON.stringify(Y);
						Y.length && ue !== X && K(ue), j.has(d.Tc) && j.delete(d.Tc), j.delete(d.Kt)
					}!M && ee === void 0 && G && q(j.toString());
					const ne = async () => {
						try {
							if ((0, u.I3)(G) && M) {
								ee && q(void 0), k.dispatch((0, m.r4)()), te(!0), G && G !== B && U(G);
								const Y = await (0, u.py)(G, te, k, R, P, new v(G, F ? `${R.location.pathname}${R.location.search}` : void 0));
								j.delete(d.BV);
								const ue = j.toString();
								R.replace(y({}, R.location, {
									pathname: Y,
									search: ue
								}, J ? {
									hash: J
								} : {})), k.dispatch((0, m.WF)())
							}
						} catch (Y) {
							k.dispatch((0, m.WF)()), console.error(Y)
						} finally {
							te(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ne()
					}, [R.location.pathname, R.location.search]), (z || (0, u.I3)(G)) && M ? null : C
				},
				A = t("../react/app/components/DeepLink/reducer.ts"),
				D = t("../react/app/components/DeepLink/selectors.ts"),
				L = I
		},
		"../react/app/components/DeepLink/reducer.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				E: function() {
					return u
				},
				r: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				i = t("../react/app/components/DeepLink/actions.ts");
			const u = null,
				s = r().from({
					lastAction: u,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function m(c = s, l) {
				if (l.type === i.MF.RESOLVING_COMPLETE) return s;
				if (l.type === i.MF.RESOLVING_START) return c.set("isResolving", !0);
				if (c.isResolving) {
					if (l.type === i.MF.RESOLVING_COMPLETE) return c.set("isResolving", !1);
					if (l.type === i.MF.SET_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", l.accountIds);
					if (l.type === i.MF.DELETE_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", void 0);
					{
						let f = c;
						try {
							f = c.set("lastAction", l)
						} catch {
							f = c.set("lastAction", {
								type: l.type
							})
						}
						return f
					}
				} else return c
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				U: function() {
					return i
				},
				dd: function() {
					return r
				},
				yI: function() {
					return e
				}
			});
			const e = u => u.deepLink.lastAction,
				r = u => u.deepLink.isResolving,
				i = u => u.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				I3: function() {
					return f
				},
				X1: function() {
					return c
				},
				mL: function() {
					return p
				},
				py: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../react/app/components/DeepLink/reducer.ts"),
				i = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/app/components/DeepLink/constants.ts"),
				s = t("../react/common/validators/index.js"),
				m = t("../react/common/utils/isGuards.ts");
			const c = d => (0, s.Lb)(d) && (d.split(".").length > 1 || (0, m.v5)(d)),
				l = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				f = d => typeof d == "string" && d.startsWith("/"),
				n = (d, E) => T => new Promise((y, g) => {
					E.start();
					const O = d.subscribe(() => {
						const _ = (0, i.yI)(d.getState());
						_ === r.E ? (E.cancel(), O(), g("DeepLink: waitForAction out of context.")) : T(_) && (E.finish(_.type), O(), y(_))
					})
				}),
				o = (d, E, T) => (y, g) => new Promise((O, _) => {
					T.start();
					const b = E.location.pathname;
					y = new URL(y, window.location.href).pathname, b !== y && (T.cancel(), _(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${y}", but on "${b}". You need to redirect to "${y}", and unblockRouter in your Resolver, before you use this function.`));
					const I = d.subscribe(() => {
						const A = (0, i.yI)(d.getState()),
							D = E.location.pathname,
							C = new URLSearchParams(E.location.search).get(u.BV);
						(D !== y || !!C) && (T.cancel(), I(), _(`DeepLink: waitForPageAction user navigated away from "${y}" to "${D}${C?E.location.search:""}"`)), A === r.E ? (T.cancel(), I(), _("DeepLink: waitForPageAction out of context.")) : g(A) && (T.finish(A.type), I(), O(A))
					})
				});

			function a(d) {
				const E = [],
					T = d.split("?")[0].split("/");
				for (let y of T) y.length !== 0 && (y.startsWith(":") ? E.push({
					value: y.substring(1),
					type: "dynamic"
				}) : E.push({
					value: y,
					type: "static"
				}));
				return E
			}
			async function v(d, E, T, y, g, O) {
				O.start();
				const _ = a(d),
					I = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					A = {};
				let D = "";
				for (const [L, C] of _.entries())
					if (C.type === "static") D = [D, C.value].join("/");
					else if (C.type === "dynamic" && l.is(C.value) && C.value in I) {
					O.resolverStart(C.value);
					const k = await I[C.value]({
						deepLink: d,
						blockRouter: () => E(!0),
						unblockRouter: () => E(!1),
						routerHistory: y,
						resolvedValues: A,
						store: T,
						referringRoute: g,
						uri: {
							currentPartIdx: L,
							parts: _
						},
						waitForAction: n(T, O.createUserActionTracker(C.value)),
						waitForPageAction: o(T, y, O.createUserActionTracker(C.value))
					});
					O.resolverDone(C.value), D = [D, k].join("/"), A[C.value] = k
				} else throw O.cancel(), new Error(`DeepLink: Resolver with name '${C.value}' is not supported.`);
				return O.done(), D
			}

			function p(d, E) {
				const T = ":account",
					y = ":zone",
					g = E.get("zone");
				if (g) return E.delete("zone"), `/${T}/${y}/${g}`;
				const O = E.get("account");
				if (O) return E.delete("account"), `/${T}/${O}`;
				if (d === "/overview") return `/${T}/${y}`;
				const _ = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const b of _) {
					const I = b.length;
					if (d.startsWith(b) && (d.length === I || d[I] === "/")) return `/${T}/${y}${d}`
				}
				switch (d) {
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
		"../react/app/components/ErrorBoundary.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				S: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				u = t("../react/app/components/SomethingWrong.jsx"),
				s = t("../utils/sentry/lastSentEventId.ts"),
				m = t("../react/utils/zaraz.ts"),
				c = t("../react/utils/url.ts"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				f = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(o),
				v = t("../react/common/components/Page.tsx"),
				p = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function d() {
				return (0, e.useEffect)(() => {
					a().sendEvent("new page available refresh cta")
				}, []), r().createElement(v.Z, {
					type: "narrow"
				}, r().createElement(l.ZC, {
					textAlign: "center"
				}, r().createElement(l.H1, {
					fontSize: 5,
					fontWeight: 400
				}, r().createElement(n.Trans, {
					id: "error.new_page_version_available.title"
				})), r().createElement(n.Trans, {
					id: "error.new_page_version_available.description"
				}), r().createElement(l.ZC, null, r().createElement(l.Ei, {
					height: 116,
					src: p,
					"aria-hidden": !0
				})), r().createElement(f.zx, {
					mt: 3,
					type: "primary",
					iconType: "refresh",
					onClick: () => window.location.reload()
				}, r().createElement(n.Trans, {
					id: "common.refresh"
				}))))
			}
			const E = ({
				sentryTag: T,
				children: y,
				fallbackComponent: g
			}) => r().createElement(i.SV, {
				beforeCapture: O => {
					m.tg === null || m.tg === void 0 || m.tg.track("page-error", {
						page: (0, c.Fl)(window.location.pathname)
					})
				},
				onError: O => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(O)
				},
				fallback: ({
					error: O,
					eventId: _
				}) => {
					var b;
					if (g) return g;
					const I = s.e.getEventId() || _;
					return (O == null || (b = O.message) === null || b === void 0 ? void 0 : b.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), r().createElement(d, null)) : r().createElement(u.Z, {
						type: "page",
						error: O,
						eventId: I,
						sentryTag: T
					})
				}
			}, y)
		},
		"../react/app/components/FedRAMP/utils.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$$: function() {
					return r
				},
				PQ: function() {
					return i
				},
				tv: function() {
					return e
				}
			});
			const e = "#5B697C",
				r = "#525F70",
				i = "#fff"
		},
		"../react/app/components/Footer.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				Z: function() {
					return K
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(c),
				f = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				o = t("../react/utils/translator.tsx"),
				a = t("../../../../node_modules/moment/moment.js"),
				v = t.n(a);
			const p = () => {
					const M = v()().format("YYYY"),
						j = F => {
							l().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: F
							})
						};
					return r().createElement(d, {
						marginTop: "auto"
					}, r().createElement(E, null, r().createElement(T, null, r().createElement(y, null, "\xA9 ", M, " Cloudflare, Inc."), r().createElement(y, null, r().createElement(g, null, r().createElement(O, {
						showOnDeskTop: !1
					}, r().createElement(_, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => j("Support")
					}, r().createElement(o.cC, {
						id: "common.support"
					}))), r().createElement(O, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => j("Privacy Policy")
					}, r().createElement(o.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(O, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => j("Terms of Use")
					}, r().createElement(o.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(O, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => j("Cookie Preferences")
					}, r().createElement(o.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(O, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => j("Trademark")
					}, r().createElement(o.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(g, null, r().createElement(O, null, r().createElement(_, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => j("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(o.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				d = (0, s.LM)(({
					theme: M,
					marginTop: j
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: j
				})),
				E = (0, s.LM)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				T = (0, s.LM)(({
					theme: M
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${M.space[3]}px`
					}
				})),
				y = (0, s.LM)(({
					theme: M
				}) => ({
					width: "100%",
					color: M.colors.white,
					fontSize: M.fontSizes[1],
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
				g = (0, s.LM)(({
					theme: M
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: M.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				O = (0, s.LM)(({
					showOnDeskTop: M = !0,
					theme: j
				}) => ({
					color: j.colors.white,
					fontSize: j.fontSizes[1],
					height: "20px",
					display: M ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: j.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: j.space[3],
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
				_ = (0, s.SU)(({
					theme: M
				}) => ({
					textDecoration: "none",
					color: M.colors.white,
					"&:hover": {
						color: M.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var b = p,
				I = t("../react/pages/welcome/routes.ts"),
				A = t("../react/utils/cookiePreferences.ts"),
				D = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				C = () => {
					const [M, j] = (0, e.useState)(!1), F = (0, A.wV)(), G = () => {
						j(!0)
					}, J = () => {
						j(!1)
					}, ne = F && F === "US" ? (0, o.ZP)("footer.cpra_cta.privacy_choices") : (0, o.ZP)("footer.cpra_cta.cookie_preferences"), Y = {
						background: "transparent",
						borderRadius: "none",
						color: M ? (0, m.Yc)() ? "#ee730a" : "#003681" : (0, m.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: M ? "underline" : "none",
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
					return r().createElement(u.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: Y,
						onMouseEnter: G,
						onMouseLeave: J
					}, r().createElement(u.Ei, {
						height: 15,
						src: D,
						mr: 2,
						alt: ne
					}), ne)
				};

			function k() {
				return k = Object.assign ? Object.assign.bind() : function(M) {
					for (var j = 1; j < arguments.length; j++) {
						var F = arguments[j];
						for (var G in F) Object.prototype.hasOwnProperty.call(F, G) && (M[G] = F[G])
					}
					return M
				}, k.apply(this, arguments)
			}

			function R(M, j) {
				if (M == null) return {};
				var F = P(M, j),
					G, J;
				if (Object.getOwnPropertySymbols) {
					var ne = Object.getOwnPropertySymbols(M);
					for (J = 0; J < ne.length; J++) G = ne[J], !(j.indexOf(G) >= 0) && (!Object.prototype.propertyIsEnumerable.call(M, G) || (F[G] = M[G]))
				}
				return F
			}

			function P(M, j) {
				if (M == null) return {};
				var F = {},
					G = Object.keys(M),
					J, ne;
				for (ne = 0; ne < G.length; ne++) J = G[ne], !(j.indexOf(J) >= 0) && (F[J] = M[J]);
				return F
			}
			const z = (0, s.SU)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,m.Yc)()?m.rS.colors.orange[6]:m.rS.colors.blue[4]}`
					}
				}), u.A),
				te = (0, s.SU)(({
					theme: M
				}) => ({
					color: M.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, f.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: M.colors.gray[4]
					}
				}), u.A),
				ee = M => {
					let {
						onClick: j
					} = M, F = R(M, ["onClick"]);
					return React.createElement(z, k({
						onClick: G => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: F.href
							}), j && j(G)
						}
					}, F))
				},
				q = M => {
					let {
						children: j,
						target: F,
						rel: G
					} = M, J = R(M, ["children", "target", "rel"]);
					return r().createElement(te, k({
						target: F || "_blank",
						rel: G || "noopener noreferrer"
					}, J), j)
				},
				B = (0, s.SU)(({
					theme: M
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, f.tq)() ? "8px" : "16px",
					"& > li": {
						listStyleType: "none",
						"& > a": {
							fontSize: M.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: M.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), u.Ul),
				U = (0, s.SU)(() => ({
					display: "flex",
					flexDirection: (0, f.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), u.ZC);
			var K = () => {
				const M = [I.d.root.pattern].some(F => (0, i.matchPath)(location.pathname, {
					path: F
				}));
				if ((0, n.PP)()) return r().createElement(b, null);
				if (M) return null;
				const j = new Date().getFullYear();
				return r().createElement(u.$_, {
					height: (0, f.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto",
					id: "site-footer"
				}, r().createElement(U, null, r().createElement(B, null, r().createElement(u.Li, null, r().createElement(q, {
					href: "https://support.cloudflare.com"
				}, (0, o.ZP)("common.support"))), r().createElement(u.Li, null, r().createElement(q, {
					href: "https://www.cloudflarestatus.com"
				}, r().createElement(u.Dr, {
					textTransform: "capitalize"
				}, (0, o.ZP)("footer.system_status")))), r().createElement(u.Li, null, r().createElement(q, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, o.ZP)("footer.careers"))), r().createElement(u.Li, null, r().createElement(q, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, o.ZP)("footer.tos_reduced"))), r().createElement(u.Li, null, r().createElement(q, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, o.ZP)("footer.security_issues"))), r().createElement(u.Li, null, r().createElement(q, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, o.ZP)("footer.privacy_policy"))), r().createElement(u.Li, null, r().createElement(C, null)), r().createElement(u.Li, null, r().createElement(u.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", j, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(x, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/components/ErrorStatus.tsx"),
				u = t("../react/utils/translator.tsx");
			const s = m => r().createElement(i.Z, m, (0, u.ZP)("error.forbidden"));
			h.Z = s
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				S: function() {
					return E
				},
				Z: function() {
					return ue
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../node_modules/@cloudflare/component-button/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				f = t.n(l),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				o = t("../react/common/components/AccessControl/index.js"),
				a = t("../react/common/components/ButtonWithDropdown.tsx"),
				v = t("../react/common/components/Dropdown/index.tsx"),
				p = t("../react/utils/translator.tsx"),
				d = t("../react/common/hooks/useGate.ts");
			const E = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				T = () => {
					const W = (0, d.Z)("super-add-button-copy-change"),
						re = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: E.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: E.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: E.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: E.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: E.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: E.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch (W) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: E.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...re];
						case "existing-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
								},
								trackingEvent: E.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...re];
						case "existing-site":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site"
								},
								trackingEvent: E.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...re];
						case "your-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
								},
								trackingEvent: E.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...re];
						case "your-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
								},
								trackingEvent: E.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...re];
						default:
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title"
								},
								trackingEvent: E.EXISTING_DOMAIN,
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
								trackingEvent: E.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/registrar/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: E.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: E.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: E.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: E.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: E.ACCOUNT_MEMBERS,
								icon: "user-outline",
								url: "?to=/:account/members/invite",
								description: {
									id: "onboarding.add_product.account_member.description"
								},
								permissionCheck: "#member:edit"
							}]
					}
				},
				y = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: E.EXISTING_DOMAIN,
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
					trackingEvent: E.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/registrar/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: E.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: E.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: E.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: E.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: E.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var g = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function O(W) {
				for (var re = 1; re < arguments.length; re++) {
					var $ = arguments[re] != null ? Object(arguments[re]) : {},
						oe = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols($).filter(function(ie) {
						return Object.getOwnPropertyDescriptor($, ie).enumerable
					})), oe.forEach(function(ie) {
						_(W, ie, $[ie])
					})
				}
				return W
			}

			function _(W, re, $) {
				return re = b(re), re in W ? Object.defineProperty(W, re, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[re] = $, W
			}

			function b(W) {
				var re = I(W, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function I(W, re) {
				if (typeof W != "object" || W === null) return W;
				var $ = W[Symbol.toPrimitive];
				if ($ !== void 0) {
					var oe = $.call(W, re || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(W)
			}

			function A() {
				return A = Object.assign ? Object.assign.bind() : function(W) {
					for (var re = 1; re < arguments.length; re++) {
						var $ = arguments[re];
						for (var oe in $) Object.prototype.hasOwnProperty.call($, oe) && (W[oe] = $[oe])
					}
					return W
				}, A.apply(this, arguments)
			}

			function D(W, re) {
				if (W == null) return {};
				var $ = L(W, re),
					oe, ie;
				if (Object.getOwnPropertySymbols) {
					var Ee = Object.getOwnPropertySymbols(W);
					for (ie = 0; ie < Ee.length; ie++) oe = Ee[ie], !(re.indexOf(oe) >= 0) && (!Object.prototype.propertyIsEnumerable.call(W, oe) || ($[oe] = W[oe]))
				}
				return $
			}

			function L(W, re) {
				if (W == null) return {};
				var $ = {},
					oe = Object.keys(W),
					ie, Ee;
				for (Ee = 0; Ee < oe.length; Ee++) ie = oe[Ee], !(re.indexOf(ie) >= 0) && ($[ie] = W[ie]);
				return $
			}
			const C = W => {
					let {
						title: re,
						trackingEvent: $,
						icon: oe,
						url: ie,
						description: Ee,
						disabled: se
					} = W, he = D(W, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return r().createElement(k, A({
						to: !se && ie || "#",
						"aria-disabled": se,
						onClick: () => {
							f().sendEvent($, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, he), r().createElement(u.ZC, {
						display: "flex"
					}, r().createElement(i.J, {
						type: oe,
						size: 24,
						mr: 2,
						mt: 1
					}), r().createElement(u.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, r().createElement(u.ZC, {
						fontSize: 3
					}, r().createElement(p.cC, re)), r().createElement(u.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, r().createElement(p.cC, Ee)))))
				},
				k = (0, n.SU)(({
					theme: W
				}) => {
					const re = {
						cursor: "pointer",
						backgroundColor: (0, m.Yc)() ? W.colors.gray[8] : W.colors.gray[9],
						color: W.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: W.colors.background,
						color: W.colors.gray[2],
						fontSize: W.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': re,
						':focus-within:not([aria-disabled="true"])': O({}, re, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: W.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, g.Link);
			var R = C,
				P = t("../flags.ts"),
				z = t("../react/app/components/FedRAMP/utils.ts");

			function te() {
				return te = Object.assign ? Object.assign.bind() : function(W) {
					for (var re = 1; re < arguments.length; re++) {
						var $ = arguments[re];
						for (var oe in $) Object.prototype.hasOwnProperty.call($, oe) && (W[oe] = $[oe])
					}
					return W
				}, te.apply(this, arguments)
			}

			function ee(W) {
				for (var re = 1; re < arguments.length; re++) {
					var $ = arguments[re] != null ? Object(arguments[re]) : {},
						oe = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols($).filter(function(ie) {
						return Object.getOwnPropertyDescriptor($, ie).enumerable
					})), oe.forEach(function(ie) {
						q(W, ie, $[ie])
					})
				}
				return W
			}

			function q(W, re, $) {
				return re = B(re), re in W ? Object.defineProperty(W, re, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[re] = $, W
			}

			function B(W) {
				var re = U(W, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function U(W, re) {
				if (typeof W != "object" || W === null) return W;
				var $ = W[Symbol.toPrimitive];
				if ($ !== void 0) {
					var oe = $.call(W, re || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(W)
			}

			function X(W, re) {
				if (W == null) return {};
				var $ = K(W, re),
					oe, ie;
				if (Object.getOwnPropertySymbols) {
					var Ee = Object.getOwnPropertySymbols(W);
					for (ie = 0; ie < Ee.length; ie++) oe = Ee[ie], !(re.indexOf(oe) >= 0) && (!Object.prototype.propertyIsEnumerable.call(W, oe) || ($[oe] = W[oe]))
				}
				return $
			}

			function K(W, re) {
				if (W == null) return {};
				var $ = {},
					oe = Object.keys(W),
					ie, Ee;
				for (Ee = 0; Ee < oe.length; Ee++) ie = oe[Ee], !(re.indexOf(ie) >= 0) && ($[ie] = W[ie]);
				return $
			}
			const M = "GLOBAL_ADD_DROPDOWN",
				j = (0, n.SU)(({
					theme: W
				}) => ({
					"background-color": W.colors.blue[5]
				}), s.zx),
				F = ({
					disableProducts: W
				}) => {
					const re = T();
					return (0, e.useEffect)(() => (f().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						f().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), r().createElement(a.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0",
						bottom: "auto",
						zIndex: 1200,
						minWidth: 240
					}, re.map($ => {
						const oe = $ || {},
							{
								disableOn: ie,
								permissionCheck: Ee
							} = oe,
							se = X(oe, ["disableOn", "permissionCheck"]),
							he = ie && W[ie],
							De = ee({}, se, {
								disabled: he
							});
						return Ee ? r().createElement(o.Z, {
							key: $.title.id,
							edit: Ee
						}, ({
							isEditable: Me
						}) => Me && r().createElement(R, De)) : r().createElement(R, te({
							key: $.url
						}, De))
					}))
				},
				G = ({
					disableProducts: W,
					topNavType: re
				}) => {
					const $ = () => (0, c.tq)() || re === "icon-only" ? r().createElement(u.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, r().createElement(j, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : r().createElement(s.zx, {
						type: "primary",
						mr: 2
					}, r().createElement(p.cC, {
						id: "common.add"
					}), " ", r().createElement(i.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return r().createElement(J, {
						role: "group",
						"data-testid": M
					}, r().createElement(v.Lt, {
						trigger: re === "baseline" ? r().createElement(ne, null, r().createElement(i.J, {
							label: "plus",
							type: "plus"
						}), !(0, c.tq)() && r().createElement(r().Fragment, null, r().createElement(p.cC, {
							id: "common.add"
						}), " ", r().createElement(i.J, {
							label: "arrow",
							type: "caret-down"
						}))) : $(),
						menu: r().createElement(F, {
							disableProducts: W
						})
					}))
				},
				J = (0, n.SU)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				ne = (0, n.SU)(({
					theme: W
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: (0, P.wz)() ? z.PQ : W.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, P.wz)() ? z.PQ : (0, m.Yc)() ? W.colors.gray[1] : W.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, P.wz)() ? z.$$ : (0, m.Yc)() ? W.colors.gray[8] : W.colors.gray[9]
					}
				}), u.zx);
			var Y = G,
				ue = Y
		},
		"../react/app/components/LoadingSuspense.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				Z: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../react/utils/translator.tsx"),
				m = t("../react/app/components/ErrorStatus.tsx"),
				c = t("../react/common/components/EmptyPage.jsx"),
				l = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const f = "suspenseComplete";

			function n() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(f))
				}, [])
			}

			function o(T) {
				useEventListener(f, () => {
					window.setTimeout(T, 0)
				}, {
					target: window
				})
			}

			function a(...T) {
				const [y, g] = T;
				React.useLayoutEffect(y, g), o(y)
			}

			function v(T) {
				const [y, g] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const O = window.setTimeout(() => g(!0), T);
					return () => window.clearTimeout(O)
				}, []), y
			}
			const p = ({
				loadingTimeout: T = 1e3,
				stillLoadingTimeout: y = 9e3
			}) => {
				const g = v(T),
					O = v(y);
				if (n(), !g && !O) return r().createElement(c.Z, null);
				const _ = O ? r().createElement(s.cC, {
					id: "common.still_loading"
				}) : g ? r().createElement(s.cC, {
					id: "common.loading"
				}) : null;
				return r().createElement(m.Z, {
					size: 5
				}, r().createElement(u.ZC, {
					mr: 3
				}, r().createElement(i.g, {
					size: "2x"
				})), _)
			};
			var E = ({
				children: T
			}) => r().createElement(e.Suspense, {
				fallback: r().createElement(p, null)
			}, T)
		},
		"../react/app/components/Persistence/Persistence.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				Z_: function() {
					return b
				},
				lp: function() {
					return O
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/redux/index.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(u),
				m = t("../react/utils/bootstrap.ts"),
				c = t("../react/common/selectors/zoneSelectors.ts"),
				l = t("../react/app/components/Persistence/api.ts"),
				f = t("../react/app/components/Persistence/constants.ts"),
				n = t("../react/common/hooks/useActiveState.ts"),
				o = t("../react/pages/security/resources/hooks/useUnificationGate.tsx"),
				a = t("../react/common/hooks/useGate.ts"),
				v = t("../react/common/hooks/useIsInternal.ts");

			function p(I) {
				for (var A = 1; A < arguments.length; A++) {
					var D = arguments[A] != null ? Object(arguments[A]) : {},
						L = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(D).filter(function(C) {
						return Object.getOwnPropertyDescriptor(D, C).enumerable
					})), L.forEach(function(C) {
						d(I, C, D[C])
					})
				}
				return I
			}

			function d(I, A, D) {
				return A = E(A), A in I ? Object.defineProperty(I, A, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[A] = D, I
			}

			function E(I) {
				var A = T(I, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function T(I, A) {
				if (typeof I != "object" || I === null) return I;
				var D = I[Symbol.toPrimitive];
				if (D !== void 0) {
					var L = D.call(I, A || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(I)
			}
			const y = {
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
				g = p({}, y, {
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
				O = (0, e.createContext)(g),
				_ = O.Consumer,
				b = ({
					children: I,
					onDarkModeChangeCb: A
				}) => {
					const [D, L] = (0, e.useState)(y), [C, k] = (0, e.useState)(g.isLoading), [R, P] = (0, e.useState)([]), [z, te] = (0, e.useState)(!1), ee = (0, m.$8)(), q = (0, i.p4)(G => (0, c.wH)(G)), B = (0, v.t)(), U = !!(0, a.Z)("sidebar-nav-product-groupings"), {
						setSecurityNav: X
					} = (0, o.Ud)(), [, K] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						ee ? (0, l.yl)().then(G => {
							G && (U && G.flags.hasEnabledSidebarNavGroupings === void 0 && (G.flags.hasEnabledSidebarNavGroupings = !0, (0, l.Sp)({
								hasEnabledSidebarNavGroupings: !0
							})), L(G), X(G), A(G.darkMode))
						}).finally(() => k(!1)) : k(!1)
					}, [ee]), (0, e.useEffect)(() => {
						B && (window.deleteUser = l.ZN)
					}, []);
					const M = (G, J) => !!D.favorites.find(ne => ne.type === "zone" && ne.name === G && ne.accountId === J),
						j = f.W - D.favorites.length,
						F = G => D.favorites.filter(ne => ne.type === "zone" && ne.accountId === G).length < f.W;
					return r().createElement(O.Provider, {
						value: p({}, D, {
							isLoading: C,
							remainingStarSlots: j,
							isUpdatingFlags: z,
							tasksToShowAgain: R,
							actions: {
								canAccountStarZone: F,
								isZoneStarred: M,
								starZone: async (G, J) => {
									var ne;
									const Y = !M(G, J),
										ue = F(J);
									if (Y && !ue) {
										console.log("can not star zone - account is at limit");
										return
									}
									const W = await (0, l.lt)(G, J);
									s().sendEvent("click star zone", {
										isStarring: Y,
										totalStarredZones: W.filter(re => re.accountId === J && re.type === "zone").length,
										totalZones: q == null || (ne = q.paginationData) === null || ne === void 0 ? void 0 : ne.info.total_count
									}), L(p({}, D, {
										favorites: W
									}))
								},
								toggleSidebarNavGroupings: async G => {
									await (0, l.Sp)({
										hasEnabledSidebarNavGroupings: G
									}), L(p({}, D, {
										flags: p({}, D.flags, {
											hasEnabledSidebarNavGroupings: G
										})
									}))
								},
								toggleSecurityNavigation: async (G, J) => {
									te(!0);
									const ne = J ? {
										hasEnabledDefaultUnifiedSecurity: G,
										hasEnabledSecurityNavigation: G
									} : {
										hasEnabledSecurityNavigation: G
									};
									await (0, l.Sp)(ne), K(G), L(p({}, D, {
										flags: p({}, D.flags, ne)
									})), s().identify(p({}, ne)), te(!1)
								},
								setDarkMode: async G => {
									A(G), D.darkMode = G, L(D);
									const J = await (0, l.C8)(G);
									L(J);
									const ne = J.darkMode;
									ne !== G && A(ne)
								},
								logRouteVisited: async G => {
									var J;
									const ne = await (0, l.n)(G);
									L((J = ne) !== null && J !== void 0 ? J : p({}, D))
								},
								pinRecentRoute: async G => {
									var J, ne;
									const Y = G.accountId,
										ue = (J = D == null || (ne = D.pinnedItems) === null || ne === void 0 ? void 0 : ne[Y]) !== null && J !== void 0 ? J : [],
										re = ue.some($ => $.url === G.url) ? ue.filter($ => $.url !== G.url) : [...ue, G];
									L(p({}, D, {
										pinnedItems: p({}, D.pinnedItems, {
											[Y]: re
										})
									})), (0, l.LC)(G)
								},
								viewChange: async G => {
									te(!0);
									const J = await (0, l.m6)(G);
									L(p({}, D, {
										viewedChanges: J
									})), te(!1)
								},
								dismissTask: async (G, J) => {
									const ne = await (0, l.Mn)(G, J);
									L(p({}, D, {
										dismissedTasks: ne
									}))
								},
								handleAddTasksToShowAgain: G => {
									P(J => {
										const ne = new Set([...J, ...G]);
										return Array.from(ne)
									})
								},
								handleDeleteTasksToShowAgain: G => {
									P(J => J.filter(ne => !G.includes(ne)))
								}
							}
						})
					}, I)
				}
		},
		"../react/app/components/Persistence/api.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				C8: function() {
					return f
				},
				LC: function() {
					return o
				},
				Mn: function() {
					return p
				},
				Sp: function() {
					return v
				},
				ZN: function() {
					return s
				},
				dr: function() {
					return m
				},
				lt: function() {
					return c
				},
				m6: function() {
					return a
				},
				n: function() {
					return n
				},
				yl: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const i = "/persistence/user",
				u = async () => {
					try {
						return await (await e.get(i, {
							hideErrorAlert: !0
						})).body
					} catch (d) {
						console.error(d)
					}
				}, s = async () => {
					try {
						await e.del(i, {
							hideErrorAlert: !0
						})
					} catch (d) {
						console.error(d)
					}
				}, m = async d => {
					try {
						return await (await e.get(`/accounts/${d}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (E) {
						console.error(E)
					}
				}, c = async (d, E) => {
					try {
						return await (await e.post(`${i}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: d,
								accountId: E
							}),
							hideErrorAlert: !0
						})).body
					} catch (T) {
						return console.error(T), []
					}
				}, l = async (d, E) => {
					try {
						return await http.post(`/accounts/${d}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: E
							}),
							hideErrorAlert: !0
						}), !0
					} catch (T) {
						return console.error(T), !1
					}
				}, f = async d => {
					try {
						return await (await e.post(i, {
							body: JSON.stringify({
								darkMode: d
							})
						})).body
					} catch (E) {
						console.error(E)
					}
				}, n = async d => {
					try {
						return await (await e.post(`${i}/recents`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (E) {
						console.error(E)
					}
				}, o = async d => {
					try {
						return await (await e.post(`${i}/pinned-items`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (E) {
						throw console.error(E), E
					}
				}, a = async d => {
					try {
						return await (await e.post(`${i}/viewed-changes`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (E) {
						throw console.error(E), E
					}
				}, v = async d => {
					try {
						return await (await e.post(i + "/flags", {
							body: JSON.stringify(d)
						})).body
					} catch (E) {
						throw console.error(E), E
					}
				}, p = async (d, E) => {
					try {
						return await (await e.post(`${i}/dismissed-tasks`, {
							body: JSON.stringify({
								name: d,
								accountId: E
							}),
							hideErrorAlert: !0
						})).body
					} catch (T) {
						throw console.error(T), T
					}
				}
		},
		"../react/app/components/Persistence/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				F: function() {
					return r
				},
				W: function() {
					return e
				}
			});
			const e = 10,
				r = 6
		},
		"../react/app/components/Persistence/hooks.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				y: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/components/Persistence/index.tsx");
			const u = () => (0, e.useContext)(i.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				Wl: function() {
					return i.W
				},
				F3: function() {
					return i.F
				},
				lp: function() {
					return e.lp
				},
				Z_: function() {
					return e.Z_
				},
				r7: function() {
					return v
				},
				Tv: function() {
					return _
				},
				yZ: function() {
					return r.y
				}
			});
			var e = t("../react/app/components/Persistence/Persistence.tsx"),
				r = t("../react/app/components/Persistence/hooks.ts"),
				i = t("../react/app/components/Persistence/constants.ts"),
				u = t("webpack/sharing/consume/default/react/react"),
				s = t.n(u),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function l() {
				return l = Object.assign ? Object.assign.bind() : function(b) {
					for (var I = 1; I < arguments.length; I++) {
						var A = arguments[I];
						for (var D in A) Object.prototype.hasOwnProperty.call(A, D) && (b[D] = A[D])
					}
					return b
				}, l.apply(this, arguments)
			}

			function f(b, I) {
				if (b == null) return {};
				var A = n(b, I),
					D, L;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(b);
					for (L = 0; L < C.length; L++) D = C[L], !(I.indexOf(D) >= 0) && (!Object.prototype.propertyIsEnumerable.call(b, D) || (A[D] = b[D]))
				}
				return A
			}

			function n(b, I) {
				if (b == null) return {};
				var A = {},
					D = Object.keys(b),
					L, C;
				for (C = 0; C < D.length; C++) L = D[C], !(I.indexOf(L) >= 0) && (A[L] = b[L]);
				return A
			}
			const o = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var v = b => {
					let {
						isStarred: I,
						size: A = 16
					} = b, D = f(b, ["isStarred", "size"]);
					const L = o[(0, m.Yc)() ? "dark" : "light"];
					return s().createElement(c.J, l({
						type: I ? "star" : "star-outline",
						color: I ? L.gold : L.gray,
						size: A
					}, D))
				},
				p = t("../node_modules/@cloudflare/elements/es/index.js");

			function d(b) {
				for (var I = 1; I < arguments.length; I++) {
					var A = arguments[I] != null ? Object(arguments[I]) : {},
						D = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(A).filter(function(L) {
						return Object.getOwnPropertyDescriptor(A, L).enumerable
					})), D.forEach(function(L) {
						E(b, L, A[L])
					})
				}
				return b
			}

			function E(b, I, A) {
				return I = T(I), I in b ? Object.defineProperty(b, I, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[I] = A, b
			}

			function T(b) {
				var I = y(b, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function y(b, I) {
				if (typeof b != "object" || b === null) return b;
				var A = b[Symbol.toPrimitive];
				if (A !== void 0) {
					var D = A.call(b, I || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(b)
			}
			const g = {
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
			var _ = (0, u.forwardRef)(({
				featurePreview: b = !1,
				isStarred: I,
				onClickFn: A,
				isDisabled: D,
				testId: L,
				buttonText: C,
				size: k = "large",
				variant: R = "pill"
			}, P) => {
				const [z, te] = (0, u.useState)(!1), ee = g[(0, m.Yc)() ? "dark" : "light"][I && !b ? "active" : "default"], q = d({}, k === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, k === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, k === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), B = {
					pill: "50vh",
					button: 4
				};
				return s().createElement(p.zx, {
					onMouseEnter: () => te(!0),
					onMouseLeave: () => te(!1),
					innerRef: P,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: q.paddingRight,
					gap: 1,
					pl: q.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: B[R],
					border: "1px solid",
					cursor: b || D ? "default" : "pointer",
					backgroundColor: z ? ee.bgHover : ee.bg,
					color: ee.text,
					borderColor: ee.border,
					onClick: A,
					opacity: D ? .5 : 1,
					disabled: D,
					fontSize: q.fontSize,
					height: q.height,
					"data-testid": L
				}, s().createElement(v, {
					isStarred: b ? !1 : I,
					size: q.starIconSize
				}), C)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$n: function() {
					return d
				},
				IU: function() {
					return T
				},
				Id: function() {
					return R
				},
				Wq: function() {
					return D
				},
				dL: function() {
					return y
				},
				fO: function() {
					return A
				},
				gw: function() {
					return C
				},
				hv: function() {
					return E
				},
				iY: function() {
					return v
				},
				jq: function() {
					return k
				},
				o_: function() {
					return _
				},
				us: function() {
					return I
				},
				wB: function() {
					return p
				},
				zJ: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				r = t("../react/common/components/AccessCheck/index.ts"),
				i = t("../react/common/selectors/accountSelectors.ts"),
				u = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/utils/zoneLevelAccess.ts"),
				c = t("../react/pages/home/configurations/dns-settings/isZoneDNSOnly.tsx"),
				l = t("../react/pages/home/domain-registration/selectors.ts"),
				f = t("../react/pages/images/selectors.ts"),
				n = t("../react/pages/r2/selectors.ts"),
				o = t("../react/pages/stream/selectors.ts");
			const a = P => !!(0, m.b)(P),
				v = P => a(P) ? (0, r.hT)(P) : !0,
				p = (P, z, te, ee = "read") => {
					const q = (0, s.nA)(P);
					return a(P) ? (0, r.WL)(P, (0, r.W9)(te, r.ZZ[ee]), (0, r.j)(q == null ? void 0 : q.id)) : (0, i.Yj)(P)(z)[ee]
				},
				d = (P, z, te, ee = "read") => {
					const q = (0, s.nA)(P),
						B = r.zs.includes(te);
					return a(P) ? (0, r.WL)(P, B ? te : (0, r.my)(te, r.ZZ[ee === "edit" ? "update" : ee]), (0, r.j)(q == null ? void 0 : q.id)) : (0, i.Yj)(P)(z)[ee === "update" ? "edit" : ee]
				},
				E = P => !!(0, o._Q)(P),
				T = P => (0, f.pT)(P),
				y = P => (0, f.pT)(P) && (0, f.GH)(P),
				g = P => sourcingKitEnabledSelector(P),
				O = P => !!r2EnabledSelector(P),
				_ = P => (0, n.Mv)(P),
				b = P => (0, u.$f)(P, "rulesets.magic_transit_allowed"),
				I = P => (0, u.$f)(P, "flowtrackd.magic_custom_config_allowed"),
				A = P => (0, u.$f)(P, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				D = P => (0, i.Le)(P, "ddos_protection", "l4_rulesets"),
				L = P => hasAccountEntitlements(P, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				C = P => (0, l.HO)(P),
				k = P => !(0, u.yD)(P) && !!d(P, "ssl", "ssl.cert"),
				R = P => {
					const z = (0, s.nA)(P),
						te = (0, i.D0)(P),
						ee = !!(0, e.z1)("zone-level-rum")(P);
					return !!te && (0, r.WL)(P, (0, r.jX)("rum.analytics", r.ZZ.read), (0, r.L8)(te.id)) && (z == null ? void 0 : z.status) === "active" && ee && !(0, c.s)(P)
				}
		},
		"../react/app/components/SomethingWrong.jsx": function(x, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(i),
				s = t("../../../../node_modules/prop-types/index.js"),
				m = t.n(s),
				c = t("webpack/sharing/consume/default/react-redux/react-redux"),
				l = t.n(c),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(f),
				o = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				v = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				p = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				d = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				E = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				T = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				y = t.n(T),
				g = t("../react/common/actions/membershipActions.ts"),
				O = t("../react/utils/url.ts"),
				_ = t("../react/app/components/Footer.tsx");

			function b(B) {
				for (var U = 1; U < arguments.length; U++) {
					var X = arguments[U] != null ? Object(arguments[U]) : {},
						K = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && K.push.apply(K, Object.getOwnPropertySymbols(X).filter(function(M) {
						return Object.getOwnPropertyDescriptor(X, M).enumerable
					})), K.forEach(function(M) {
						I(B, M, X[M])
					})
				}
				return B
			}

			function I(B, U, X) {
				return U = A(U), U in B ? Object.defineProperty(B, U, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[U] = X, B
			}

			function A(B) {
				var U = D(B, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function D(B, U) {
				if (typeof B != "object" || B === null) return B;
				var X = B[Symbol.toPrimitive];
				if (X !== void 0) {
					var K = X.call(B, U || "default");
					if (typeof K != "object") return K;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(B)
			}
			const L = (0, o.LM)(({
					type: B
				}) => ({
					height: B !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				C = (0, o.LM)(({
					theme: B,
					margin: U,
					size: X = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: B.colors.gray[3],
					height: U ? "auto" : "100%",
					padding: U ? 0 : B.space[X > 1 ? X - 2 : 0],
					margin: U,
					justifyContent: "center",
					alignItems: "center"
				})),
				k = (0, o.LM)(() => ({
					textAlign: "left"
				})),
				R = (0, o.LM)(() => ({
					textAlign: "right"
				})),
				P = (0, o.LM)(({
					theme: B
				}) => ({
					fontSize: B.fontSizes[6]
				})),
				z = (0, o.LM)(({
					theme: B
				}) => ({
					fontSize: B.fontSizes[4]
				})),
				te = (0, o.LM)(({
					theme: B
				}) => ({
					fontSize: B.fontSizes[3]
				})),
				ee = (0, o.LM)(({
					theme: B
				}) => ({
					width: "100%",
					height: 125,
					marginTop: B.space[4],
					padding: B.space[2]
				}), "textarea");
			class q extends r().Component {
				constructor(...U) {
					super(...U);
					I(this, "state", {
						value: "",
						submitted: !1
					}), I(this, "handleTextareaChange", X => {
						this.setState({
							value: X.target.value
						})
					}), I(this, "sendErrToSentry10", async () => {
						try {
							var X, K, M, j;
							const F = ((X = window) === null || X === void 0 || (K = X.bootstrap) === null || K === void 0 || (M = K.data) === null || M === void 0 || (j = M.user) === null || j === void 0 ? void 0 : j.id) || "Unknown",
								G = this.props.eventId || v.eW(),
								J = {
									name: F,
									email: `${F}@userid.com`,
									comments: this.state.value,
									eventId: G,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: b({}, window.build)
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
						} catch (F) {
							console.error(F)
						}
					}), I(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), I(this, "renderContent", X => r().createElement(f.I18n, null, K => r().createElement(L, {
						type: X
					}, r().createElement(C, null, r().createElement(k, null, r().createElement(P, null, K.t("error.internal_issues")), r().createElement(z, null, K.t("error.help_us")), r().createElement(ee, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: M => this.handleTextareaChange(M),
						disabled: this.state.submitted,
						placeholder: K.t("error.give_feedback")
					}), r().createElement(R, null, !this.state.submitted && r().createElement(a.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, K.t("common.submit")), this.state.submitted && r().createElement(te, null, K.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: U,
						sentryTag: X,
						membershipsList: K
					} = this.props;
					console.error(`SomethingWrong: ${U}`);
					let M = "";
					const j = (0, O.e1)();
					if (j) {
						var F;
						const J = await K({
								parameters: {
									status: "accepted"
								}
							}),
							ne = J == null || (F = J.find(Y => Y.id === j)) === null || F === void 0 ? void 0 : F.roles;
						ne && ne.length && (M = ne.join(", "))
					}
					const G = `ErrorBoundary - ${U}`;
					p.Tb(G, {
						tags: {
							errorBoundary: X,
							normalizedPath: (0, O.Fl)(window.location.pathname),
							roles: M.length ? M : void 0
						}
					}), y().sendEvent("something wrong", {
						error: U,
						roles: M.length ? M : void 0
					})
				}
				render() {
					const {
						type: U
					} = this.props;
					return U === "fullscreen" ? r().createElement("div", null, r().createElement(d.h4, null, r().createElement(i.Link, {
						to: "/"
					}, r().createElement(E.TR, null))), this.renderContent(U), r().createElement(_.Z, null)) : this.renderContent(U)
				}
			}
			q.propTypes = {
				type: m().oneOf(["fullscreen", "page"]),
				error: m().oneOfType([m().string, m().object]),
				eventId: m().string,
				sentryTag: m().string,
				membershipsList: m().func
			}, h.Z = (0, c.connect)(() => ({}), {
				membershipsList: g.YT
			})(q)
		},
		"../react/app/providers/storeContainer.js": function(x, h, t) {
			"use strict";
			t.d(h, {
				bh: function() {
					return R
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				r = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				i = t.n(r),
				u = t("../../../../node_modules/redux-thunk/es/index.js"),
				s = t("../../../../node_modules/redux-persist/es/index.js"),
				m = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				c = t("../react/app/rootReducer.js"),
				l = t("../react/app/redux/normalizer.js"),
				f = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				o = t("../react/app/reducerRegistry.js"),
				a = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				v = t("../react/common/sagas/index.js"),
				p = t("../react/app/redux/processActionMiddleware.js"),
				d = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				E = t("../../../../node_modules/is-promise/index.js"),
				T = t.n(E);

			function y(P) {
				for (var z = 1; z < arguments.length; z++) {
					var te = arguments[z] != null ? Object(arguments[z]) : {},
						ee = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(te).filter(function(q) {
						return Object.getOwnPropertyDescriptor(te, q).enumerable
					})), ee.forEach(function(q) {
						g(P, q, te[q])
					})
				}
				return P
			}

			function g(P, z, te) {
				return z = O(z), z in P ? Object.defineProperty(P, z, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[z] = te, P
			}

			function O(P) {
				var z = _(P, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function _(P, z) {
				if (typeof P != "object" || P === null) return P;
				var te = P[Symbol.toPrimitive];
				if (te !== void 0) {
					var ee = te.call(P, z || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(P)
			}
			const b = {
					key: "cf-redux-store",
					storage: m.Z,
					whitelist: ["accountAccess", "invite"]
				},
				I = (0, a.ZP)(),
				D = [({
					dispatch: P
				}) => z => te => T()(te) ? te.then(ee => P(ee)) : z(te), I, u.Z, p.Z, l.qR],
				L = P => (0, s.Wq)(b, y({}, c.Z, P));

			function C() {
				const P = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					te = e.compose((0, e.applyMiddleware)(...D), f.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					ee = {},
					q = (0, e.createStore)(L(o.Z.getReducers()), ee, te);
				I.run(v.Z), (0, s.p5)(q);
				const U = (t.g.bootstrap || {}).data || {};
				return q.dispatch((0, d.mW)("user", U.user)), q
			}
			let k;
			o.Z.setChangeListener(P => {
				var z;
				k && ((z = k) === null || z === void 0 ? void 0 : z.replaceReducer) && (k.replaceReducer(L(P)), (0, s.p5)(k))
			});

			function R() {
				return k || (k = C()), k
			}
		},
		"../react/app/redux/index.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				RA: function() {
					return m
				},
				TZ: function() {
					return s
				},
				UM: function() {
					return f
				},
				ZS: function() {
					return c
				},
				p4: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/react/react"),
				u = t.n(i);
			const s = () => (0, e.useStore)(),
				m = () => s().getState(),
				c = () => {
					const o = s(),
						[a, v] = (0, i.useState)(o.getState());
					return (0, i.useEffect)(() => o.subscribe(() => {
						v(o.getState())
					}), [o]), a
				},
				l = () => {
					const o = s(),
						[a, v] = useState(o.getState());
					return useEffect(() => o.subscribe(() => {
						v(o.getState())
					}), [o]), a
				},
				f = () => (0, e.useDispatch)(),
				n = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(x, h, t) {
			"use strict";
			t.d(h, {
				$J: function() {
					return a
				},
				Oy: function() {
					return o
				},
				SC: function() {
					return f
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
				i = t.n(r);

			function u(p) {
				for (var d = 1; d < arguments.length; d++) {
					var E = arguments[d] != null ? Object(arguments[d]) : {},
						T = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(E).filter(function(y) {
						return Object.getOwnPropertyDescriptor(E, y).enumerable
					})), T.forEach(function(y) {
						s(p, y, E[y])
					})
				}
				return p
			}

			function s(p, d, E) {
				return d = m(d), d in p ? Object.defineProperty(p, d, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[d] = E, p
			}

			function m(p) {
				var d = c(p, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function c(p, d) {
				if (typeof p != "object" || p === null) return p;
				var E = p[Symbol.toPrimitive];
				if (E !== void 0) {
					var T = E.call(p, d || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(p)
			}
			const l = u({}, r),
				f = (p, d, E, T = {}) => {
					const y = p === "delete" ? "del" : p.toLowerCase();
					return E && y !== "del" && (T.body = E), l[y](d, T)
				},
				n = (p, d) => (p.meta.params = d, p),
				o = (p, d, E, T, {
					body: y = {}
				}) => {
					const {
						result: g,
						messages: O,
						result_info: _
					} = y, b = Object.values(d);
					if (p.meta.method === "delete") {
						const I = b[b.length - 1];
						p.meta.id = typeof I == "object" ? I.id : I
					}
					return p.payload = g, O && (p.meta.messages = O), b.length && (p.meta.params = d), _ && (p.meta.paginationData = {
						info: _,
						actionParameters: b,
						options: E[0],
						insertionOffset: 0
					}), p
				},
				a = (p, d, E, T, y) => (p.payload = y && y.body && y.body.errors, p.meta.messages = y && y.body && y.body.messages, p.meta.params = d, p.apiError = y, p);

			function v(p, d, E, T) {
				const y = (0, e.RM)(p, d, E, T).apiFetch(f).on("start", n).on("success", o).on("error", a),
					g = y.mock;
				return y.mock = O => (g((..._) => {
					const b = O(..._);
					return b && typeof b == "object" && "result" in b ? b : {
						result: b
					}
				}), y), y
			}
		},
		"../react/app/redux/normalizer.js": function(x, h, t) {
			"use strict";
			t.d(h, {
				P1: function() {
					return f
				},
				jQ: function() {
					return c
				},
				qR: function() {
					return n
				},
				uc: function() {
					return l
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				r = t("../react/pages/workers/entityTypes.ts"),
				i = t("../react/pages/email/types.ts"),
				u = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				s = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				m = t.n(s);
			const c = s.static.from([{
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
					entityType: i.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: i.BB.rule,
					idProp: "tag"
				}, {
					entityType: i.BB.rules,
					to: i.BB.rule
				}, {
					entityType: i.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: i.BB.dstAddresses,
					to: i.BB.dstAddress
				}, {
					entityType: i.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: i.BB.dnsRecords,
					to: i.BB.dnsRecord
				}, {
					entityType: i.BB.zone,
					idProp: "tag"
				}]),
				l = o => o.entities,
				f = (...o) => (0, u.P1)(c, l, ...o),
				n = (0, u.QB)(c)
		},
		"../react/app/redux/utils.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				F: function() {
					return i
				},
				_: function() {
					return r
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const r = u => (s, m, c) => (0, e.SC)(s, m, c, {
					hideErrorAlert: !0
				}).catch(u),
				i = u => s => {
					if (s.status === u) return s;
					throw s
				}
		},
		"../react/common/actionTypes.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Cm: function() {
					return m
				},
				Cz: function() {
					return r
				},
				HI: function() {
					return c
				},
				Li: function() {
					return f
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return i
				},
				Yc: function() {
					return o
				},
				gM: function() {
					return u
				},
				lV: function() {
					return s
				},
				s1: function() {
					return l
				}
			});
			const e = "NOTIFICATION_OPEN",
				r = "NOTIFICATION_CLOSE",
				i = "MODAL_OPEN",
				u = "MODAL_CLOSE",
				s = "TOGGLE_ON",
				m = "TOGGLE_OFF",
				c = "SET_ACTIVE",
				l = "CLEAR_ACTIVE",
				f = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let o = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/activeActions.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				I: function() {
					return r
				},
				n: function() {
					return i
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = (u, s) => ({
					type: e.HI,
					activeKey: u,
					activeValue: s
				}),
				i = u => ({
					type: e.s1,
					activeKey: u
				})
		},
		"../react/common/actions/membershipActions.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				AX: function() {
					return a
				},
				YT: function() {
					return f
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

			function i(v) {
				for (var p = 1; p < arguments.length; p++) {
					var d = arguments[p] != null ? Object(arguments[p]) : {},
						E = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(d).filter(function(T) {
						return Object.getOwnPropertyDescriptor(d, T).enumerable
					})), E.forEach(function(T) {
						u(v, T, d[T])
					})
				}
				return v
			}

			function u(v, p, d) {
				return p = s(p), p in v ? Object.defineProperty(v, p, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[p] = d, v
			}

			function s(v) {
				var p = m(v, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function m(v, p) {
				if (typeof v != "object" || v === null) return v;
				var d = v[Symbol.toPrimitive];
				if (d !== void 0) {
					var E = d.call(v, p || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(v)
			}
			const c = v => {
					const p = v.payload.map(d => i({}, d, {
						membershipId: d.id,
						id: d.account.id
					}));
					return i({}, v, {
						payload: p
					})
				},
				l = v => {
					const p = c(v);
					return Array.isArray(p.payload) ? i({}, v, {
						payload: p.payload[0]
					}) : i({}, v, {
						payload: null
					})
				},
				f = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", c),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				o = (...v) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: v
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", l)
		},
		"../react/common/actions/modalActions.ts": function(x, h, t) {
			"use strict";
			t.r(h), t.d(h, {
				closeModal: function() {
					return u
				},
				openModal: function() {
					return i
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = {
				replace: !0
			};

			function i(s, m, c = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: s,
						props: m
					},
					options: c
				}
			}

			function u(s) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: s
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(x, h, t) {
			"use strict";
			t.r(h), t.d(h, {
				add: function() {
					return s
				},
				error: function() {
					return f
				},
				info: function() {
					return c
				},
				success: function() {
					return m
				},
				warn: function() {
					return l
				}
			});
			var e = t("../react/common/actionTypes.ts");

			function r(n) {
				return {
					type: e.Ng,
					notification: n
				}
			}

			function i(n) {
				return {
					type: e.Cz,
					notificationId: n
				}
			}
			let u = 0;

			function s(n, o, a = {}) {
				return a = a || {},
					function(v) {
						let p = u++,
							d = {
								id: p,
								type: n,
								message: o,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									v(i(p)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						v(r(d))
					}
			}

			function m(n, o) {
				return s("success", n, o)
			}

			function c(n, o) {
				return s("info", n, o)
			}

			function l(n, o) {
				return s("warning", n, o)
			}

			function f(n, o) {
				return s("error", n, o)
			}
		},
		"../react/common/actions/userActions.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				BT: function() {
					return c
				},
				Ut: function() {
					return T
				},
				V_: function() {
					return y
				},
				Y9: function() {
					return d
				},
				Z0: function() {
					return O
				},
				mp: function() {
					return E
				},
				r3: function() {
					return g
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/app/redux/utils.ts");

			function i(_) {
				for (var b = 1; b < arguments.length; b++) {
					var I = arguments[b] != null ? Object(arguments[b]) : {},
						A = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(I).filter(function(D) {
						return Object.getOwnPropertyDescriptor(I, D).enumerable
					})), A.forEach(function(D) {
						u(_, D, I[D])
					})
				}
				return _
			}

			function u(_, b, I) {
				return b = s(b), b in _ ? Object.defineProperty(_, b, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[b] = I, _
			}

			function s(_) {
				var b = m(_, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function m(_, b) {
				if (typeof _ != "object" || _ === null) return _;
				var I = _[Symbol.toPrimitive];
				if (I !== void 0) {
					var A = I.call(_, b || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(_)
			}
			const c = (0, e.C)("user").get`/user`,
				l = (0, e.C)("user").patch`/user`,
				f = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				o = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				v = (0, e.C)("user").delete`/user/two_factor_authentication`,
				p = (0, e.C)("user").put`/user/email`;

			function d(..._) {
				return p(..._)
			}
			const E = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				T = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(_ => i({}, _, {
					body: i({}, _.body, {
						result: {}
					})
				}))),
				y = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				g = (0, e.C)("userDetails").get`/user/details`,
				O = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(x, h, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				r = t("../react/utils/zoneLevelAccess.ts");
			const i = ({
				legacyPermission: u,
				canAccess: s,
				children: m,
				render: c
			}) => {
				const l = !!(0, r.P)();
				let f;
				typeof s == "boolean" && s !== void 0 && l ? f = {
					read: s,
					list: s,
					create: s,
					update: s,
					delete: s,
					sign: s
				} : f = (0, e.Z)(u);
				const n = c || m;
				return n ? n(f) : null
			};
			h.Z = i
		},
		"../react/common/components/AccessCheck/AuthzContext.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				Hf: function() {
					return E
				},
				we: function() {
					return T
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				s = t.n(u),
				m = t("../react/utils/url.ts"),
				c = t("../react/common/components/AccessCheck/useEvalRoles.ts"),
				l = t("../react/common/components/AccessCheck/useAccountParentOrgs.ts"),
				f = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts"),
				n = t("../react/common/components/AccessCheck/useUserAuthzPolicies.ts");

			function o(_) {
				for (var b = 1; b < arguments.length; b++) {
					var I = arguments[b] != null ? Object(arguments[b]) : {},
						A = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(I).filter(function(D) {
						return Object.getOwnPropertyDescriptor(I, D).enumerable
					})), A.forEach(function(D) {
						a(_, D, I[D])
					})
				}
				return _
			}

			function a(_, b, I) {
				return b = v(b), b in _ ? Object.defineProperty(_, b, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[b] = I, _
			}

			function v(_) {
				var b = p(_, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function p(_, b) {
				if (typeof _ != "object" || _ === null) return _;
				var I = _[Symbol.toPrimitive];
				if (I !== void 0) {
					var A = I.call(_, b || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(_)
			}
			const d = new Set,
				E = r().createContext(void 0);

			function T({
				children: _,
				userID: b,
				isUserInDSR: I
			}) {
				var A;
				const D = (0, n.b)(b),
					L = (0, u.useHistory)(),
					C = (0, m.uW)(L.location.pathname),
					k = (0, l.I)((A = I) !== null && A !== void 0 ? A : !0, C),
					R = (0, c.s)();
				(0, f.k)(C);
				const P = {
					isUserInDSR: I,
					contextAccountTag: C,
					contextAccountOrgsState: k,
					allRolesState: R,
					policiesState: D,
					refreshPolicies: D.refresh,
					reportSentryException: g
				};
				return r().createElement(E.Provider, {
					value: P
				}, _)
			}
			const y = () => {
					const _ = useContext(E);
					if (!_) throw new Error("useRefreshPolicies must be used within a PoliciesProvider");
					return _.refreshPolicies
				},
				g = (_, b, I) => {
					const {
						parentComponent: A,
						stackSummary: D
					} = O(_), L = `${b.component}->${D}->${b.component_issue}`;
					d.has(L) || (d.add(L), i.Tb(_, {
						tags: o({
							parentComponent: A
						}, b),
						extra: o({
							stackSummary: D
						}, I),
						level: "error"
					}))
				},
				O = _ => {
					var b;
					const A = (_.stack || "").split(`
`),
						D = [];
					for (const C of A) {
						const k = [/at (\w+)\s+\(/, /at Object\.(\w+)/, /(\w+)@/, /\/(\w+)\.tsx?:/, /\/(\w+)\.jsx?:/];
						for (const R of k) {
							const P = C.match(R);
							if (P && P[1] && !["Object", "eval", "anonymous"].includes(P[1])) {
								D.push(P[1]);
								break
							}
						}
					}
					const L = [...new Set(D)].filter(C => !["useIsAuthorized", "renderWithHooks", "updateFunctionComponent"].includes(C)).slice(0, 5);
					return {
						parentComponent: (b = L[0]) !== null && b !== void 0 ? b : "undefined",
						stackSummary: L.join(" \u2192 ")
					}
				}
		},
		"../react/common/components/AccessCheck/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				E1: function() {
					return r
				},
				L8: function() {
					return n
				},
				W9: function() {
					return f
				},
				ZZ: function() {
					return m
				},
				j: function() {
					return o
				},
				jX: function() {
					return c
				},
				my: function() {
					return l
				},
				u1: function() {
					return e
				},
				zs: function() {
					return s
				}
			});
			const e = "com.cloudflare.api.account",
				r = "com.cloudflare.api.account.",
				i = "com.cloudflare.edge.",
				u = "com.cloudflare.api.account.zone.",
				s = ["com.cloudflare.api.app.manage"];
			let m = function(a) {
				return a.read = "read", a.list = "list", a.create = "create", a.update = "update", a.delete = "delete", a.sign = "sign", a.refresh = "refresh", a
			}({});
			const c = (a, v) => `${r}${a?a+".":""}${v}`,
				l = (a, v) => `${u}${a?a+".":""}${v}`,
				f = (a, v) => `${i}${a}.${v}`,
				n = (a = "") => `${r}${a}`,
				o = (a = "") => `${u}${a}`
		},
		"../react/common/components/AccessCheck/index.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				E1: function() {
					return s.E1
				},
				L8: function() {
					return s.L8
				},
				W9: function() {
					return s.W9
				},
				WL: function() {
					return i.WL
				},
				ZP: function() {
					return r.Z
				},
				ZZ: function() {
					return s.ZZ
				},
				bk: function() {
					return u.b
				},
				hT: function() {
					return i.hT
				},
				j: function() {
					return s.j
				},
				jX: function() {
					return s.jX
				},
				kd: function() {
					return i.kd
				},
				my: function() {
					return s.my
				},
				xk: function() {
					return e.Z
				},
				zs: function() {
					return s.zs
				}
			});
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				r = t("../react/common/components/AccessCheck/AccessCheck.tsx"),
				i = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				u = t("../react/common/components/AccessCheck/useIsAuthorized.ts"),
				s = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(x, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/pages/zone-versioning/selectors.ts");

			function m(c) {
				const {
					read: l,
					edit: f
				} = (0, i.p4)(u.Yj)(c);
				let n = f;
				if (c != "zone_versioning") {
					const a = (0, i.p4)(s.G);
					(a == null ? void 0 : a.isLocked) && (n = !1)
				}
				return (0, e.useMemo)(() => ({
					read: l,
					list: l,
					create: n,
					update: n,
					delete: n,
					sign: n
				}), [l, n])
			}
			h.Z = m
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				F3: function() {
					return y
				},
				WL: function() {
					return v
				},
				YB: function() {
					return p
				},
				_S: function() {
					return d
				},
				hT: function() {
					return E
				},
				kd: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				r = t("../../../../node_modules/lodash-es/isString.js"),
				i = t("../react/pages/home/members/utils.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts"),
				s = t("../react/pages/zone-versioning/selectors.ts"),
				m = t("../react/common/selectors/accountSelectors.ts");
			const c = {
					allow: "allow",
					deny: "deny"
				},
				l = 0,
				f = 1,
				n = 2,
				o = 3;

			function a(A, D, L, C) {
				let k = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					R;
				for (R in k) k[R] = v(A, `${D}.${R}`, L, C);
				return k
			}

			function v(A, D, L, C) {
				var k;
				if (p(D) && !d(D)) {
					const ee = (0, s.G)(A);
					if (ee == null ? void 0 : ee.isLocked) return !1
				}
				const R = (k = (0, m.D0)(A)) === null || k === void 0 ? void 0 : k.id,
					P = R ? [`com.cloudflare.api.account.${R}`] : void 0,
					z = (0, i.vq)(R);
				return !!T(A, z, D, L, C || P)
			}

			function p(A) {
				return ![u.ZZ.read, u.ZZ.list].some(D => A.endsWith(D))
			}

			function d(A) {
				return A.includes("zone.versioning")
			}

			function E(A) {
				const D = (0, m.Ko)(A);
				let L = !1;
				return D == null || D.forEach(C => {
					C.access === c.allow && C.permission_groups.forEach(k => {
						var R;
						(k == null || (R = k.meta) === null || R === void 0 ? void 0 : R.scopes) === u.u1 && (L = !0)
					})
				}), L
			}

			function T(A, D, L, C, k) {
				const R = (0, m.Ko)(A),
					P = {};
				R == null || R.forEach(q => {
					var B;
					const U = q.access;
					let X = l;
					if (L && q.permission_groups.forEach(K => {
							var M, j;
							D == null || (M = D.find(F => F.id === K.id)) === null || M === void 0 || (j = M.permissions) === null || j === void 0 || j.forEach(F => {
								X = Math.max(X, g(F, L))
							})
						}), X !== l && !!C) {
						let K = l;
						q.resource_groups.forEach(M => {
							K = Math.max(K, _(M.scope, C, k))
						}), X = K === l ? K : X + K
					}(P == null || (B = P[U]) === null || B === void 0 ? void 0 : B[X]) || (0, e.Z)(P, [U, X], []), P[U][X].push(q)
				});
				const z = P[c.allow] && Object.keys(P[c.allow]).map(q => parseInt(q)),
					te = P[c.deny] && Object.keys(P[c.deny]).map(q => parseInt(q)),
					ee = Math.max.apply(Math, z);
				return ee === l || Math.max.apply(Math, te) >= ee ? null : P[c.allow][ee]
			}

			function y(A, D, L, C, k) {
				const R = {};
				A == null || A.forEach(ee => {
					var q;
					const B = ee.access;
					let U = l;
					if (L && ee.roles.forEach(X => {
							var K;
							const M = D == null ? void 0 : D.find(j => j.id === X.id);
							M == null || (K = M.permissions) === null || K === void 0 || K.forEach(j => {
								U = Math.max(U, g({
									key: j,
									id: "irrelevant"
								}, L))
							})
						}), U !== l && !!C) {
						let X = l;
						ee.scopes.forEach(K => {
							X = Math.max(X, _(K, C, k))
						}), U = X === l ? X : U + X
					}(R == null || (q = R[B]) === null || q === void 0 ? void 0 : q[U]) || (0, e.Z)(R, [B, U], []), R[B][U].push(ee)
				});
				const P = R[c.allow] && Object.keys(R[c.allow]).map(ee => parseInt(ee)),
					z = R[c.deny] && Object.keys(R[c.deny]).map(ee => parseInt(ee)),
					te = Math.max.apply(Math, P);
				return te === l || Math.max.apply(Math, z) >= te ? null : R[c.allow][te]
			}

			function g(A, D) {
				if (A.key === D || O(A.key, D)) return o;
				for (const L of (A == null ? void 0 : A.implies) || []) {
					let C = g(L, D);
					if (C > l) return C
				}
				return l
			}

			function O(A, D) {
				const L = D == null ? void 0 : D.lastIndexOf(".");
				return L === -1 ? !1 : (D == null ? void 0 : D.substring(0, L)) + ".*" === A
			}

			function _(A, D, L) {
				var C;
				let k = l;
				if (A == null || (C = A.objects) === null || C === void 0 || C.forEach(R => {
						k = Math.max(k, I(R, D))
					}), k === l) return k;
				if (A.key !== "*") switch (!0) {
					case b(A.key, L) > l:
					case (!(L == null ? void 0 : L.length) && k === o):
						break;
					case (k === f && b(A.key, [D]) > l):
						k = b(A.key, [D]);
						break;
					default:
						return l
				}
				for (const R of A.subset_of || [])
					if (b(R.key, L) === l) return l;
				return k
			}

			function b(A, D = []) {
				for (const L of D || []) {
					if (A === L) return o;
					if (O(A, L)) return n
				}
				return l
			}

			function I(A, D) {
				const L = (0, r.Z)(A) ? A : A.key;
				return L === D ? o : L === "*" || A === "*" ? f : O(L, D) ? n : l
			}
		},
		"../react/common/components/AccessCheck/useAccountParentOrgs.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				I: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				i = t("../../../../node_modules/swr/core/dist/index.mjs");
			const u = async m => {
				var c;
				const l = await fetch(`/api/v4/accounts/${m}/organizations`);
				if (!l.ok) throw new Error(`Failed to fetch account parent Orgs: ${l.status}`);
				const f = (c = await l.json()) === null || c === void 0 ? void 0 : c.result;
				if (f === void 0 || !(0, e.isArray)(f)) throw new Error(`Unexpected parent Orgs API response shape: ${JSON.stringify(f)}`);
				const n = f.map(a => {
						var v;
						return {
							tag: a.id,
							parentTag: (v = a.parent) === null || v === void 0 ? void 0 : v.id
						}
					}),
					o = [];
				return n.forEach(a => {
					a.parentTag || o.push(`com.cloudflare.api.tenant.${a.tag}`), o.push(`com.cloudflare.api.tenant.unit.${a.tag}`)
				}), o
			};

			function s(m, c) {
				const {
					data: l,
					error: f,
					isLoading: n
				} = (0, i.ZP)(c ? `account-organizations-${c}` : null, () => u(c), {
					dedupingInterval: 5 * 60 * 1e3,
					revalidateOnFocus: !0,
					focusThrottleInterval: 5 * 60 * 1e3,
					revalidateOnReconnect: !1
				});
				return {
					orgScopes: l || null,
					isLoading: n,
					error: (f == null ? void 0 : f.message) || null
				}
			}
		},
		"../react/common/components/AccessCheck/useAccountPermissionGroups.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				k: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/pages/home/members/utils.ts"),
				u = t("../../../../node_modules/lodash/lodash.js"),
				s = t.n(u),
				m = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t.n(m),
				l = t("../react/utils/url.ts"),
				f = t("../../../../node_modules/swr/core/dist/index.mjs");

			function n(a) {
				var v;
				const p = (0, m.useHistory)(),
					d = (0, l.uW)(p.location.pathname),
					E = a || d,
					T = (0, i.Hf)(E),
					y = E && T.length === 0,
					{
						data: g,
						error: O,
						isLoading: _
					} = (0, f.ZP)(y ? `account-${E}-permission-groups` : null, E ? o(E) : () => {
						throw new Error("no accountTag, should never run")
					});
				if ((0, e.useEffect)(() => {
						g && E && ((0, i.LX)(E, g), (0, i.rC)(E, g))
					}, [g, E]), !E) return [null, !1, null];
				if (O) {
					var b;
					const A = (b = O.message) !== null && b !== void 0 ? b : JSON.stringify(O);
					return [null, !1, A]
				}
				if (_ && T.length === 0) return [null, !0, null];
				const I = (v = g) !== null && v !== void 0 ? v : T;
				return I.length === 0 ? [
					[], !1, "no perm groups available through API or cache"
				] : [I, !1, null]
			}
			const o = a => async () => {
				const v = await fetch(`/api/v4/accounts/${a}/iam/permission_groups?depth=2&permissions=true`);
				if (!v.ok) throw new Error(`Failed to fetch permission groups: ${v.status}`);
				const p = await v.json(),
					d = p == null ? void 0 : p.result;
				if (d === void 0 || !(0, u.isArray)(d)) throw new Error(`Unexpected permission groups API response shape: ${JSON.stringify(d)}`);
				return d
			}
		},
		"../react/common/components/AccessCheck/useEvalRoles.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				s: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				i = t("../../../../node_modules/swr/core/dist/index.mjs");
			const u = async () => {
				var m;
				const c = await fetch("/api/v4/user/iam/dash-authz-eval-roles");
				if (!c.ok) throw new Error(`Failed to fetch authz eval roles: ${c.status}`);
				const l = await c.json();
				if (((m = l.result) === null || m === void 0 ? void 0 : m.roles) === void 0 || !(0, e.isArray)(l.result.roles)) throw new Error(`Unexpected authz eval roles API response shape: ${JSON.stringify(l.result)}`);
				return l.result.roles
			};

			function s() {
				const {
					data: m,
					error: c,
					isLoading: l
				} = (0, i.ZP)("user/iam/dash-authz-eval-roles", u, {
					dedupingInterval: 24 * 60 * 60 * 1e3,
					revalidateOnFocus: !0,
					focusThrottleInterval: 24 * 60 * 60 * 1e3,
					revalidateOnReconnect: !1
				});
				return {
					roles: m || null,
					isLoading: l,
					error: (c == null ? void 0 : c.message) || null
				}
			}
		},
		"../react/common/components/AccessCheck/useIsAuthorized.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				b: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/common/components/AccessCheck/AuthzContext.tsx"),
				u = t("../react/app/redux/index.ts"),
				s = t("../react/pages/zone-versioning/selectors.ts"),
				m = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				c = t("../../../../node_modules/lodash/lodash.js"),
				l = t.n(c),
				f = t("../react/common/components/AccessCheck/useAccountParentOrgs.ts");
			const n = "com.cloudflare.api.account.";

			function o(d, E, T) {
				var y;
				const g = (0, e.useContext)(i.Hf);
				if (!g) throw new Error("useIsAuthorized must be used within AuthzContextProvider");
				let O, _ = 0;
				T == null || T.forEach(ne => {
					if (!!v(ne)) {
						if (_++, _ > 1) {
							g.reportSentryException(new Error("authz invalid question - useIsAuthorized was passed multiple Account scopes, only one will get parent Org scopes"), {
								component: "useIsAuthorized",
								component_issue: "multiple_account_scopes"
							}, {
								permission: d,
								resource: E,
								scopes: T
							});
							return
						}
						ne !== `${n}${g.contextAccountTag}` && (O = ne)
					}
				});
				const b = O ? O.replace(n, "") : void 0,
					I = (0, f.I)((y = g.isUserInDSR) !== null && y !== void 0 ? y : !0, b),
					A = (0, u.p4)(ne => (0, s.G)(ne));
				if ((0, m.YB)(d) && !(0, m._S)(d) && (A == null ? void 0 : A.isLocked)) return {
					isAuthzd: !1,
					isLoading: !1
				};
				if (!E || E === "") return {
					isAuthzd: !1,
					isLoading: !1
				};
				const {
					policies: D,
					isLoading: L,
					isLoadingSkippedByUserID: C,
					error: k
				} = g.policiesState, {
					orgScopes: R,
					isLoading: P,
					error: z
				} = g.contextAccountOrgsState, {
					orgScopes: te,
					isLoading: ee,
					error: q
				} = I, {
					roles: B,
					isLoading: U,
					error: X
				} = g.allRolesState;
				if (C) return {
					isAuthzd: !0,
					isLoading: !1
				};
				if (L || P || ee || U) return {
					isAuthzd: void 0,
					isLoading: !0
				};
				if (k || z || q || X) return console.error("error loading authz policy data, displayed UI may not reflect actual policies"), {
					isAuthzd: void 0,
					isLoading: !1
				};
				const K = T && T.length > 0;
				if ((0, c.isNull)(D) || (0, c.isNull)(B) || !K && g.contextAccountTag && (0, c.isNull)(R)) return g.reportSentryException(new Error("authz undefined - missing useIsAuthorized policy data"), {
					component: "useIsAuthorized",
					component_issue: "missing_policy_data"
				}, {
					permission: d,
					resource: E,
					scopes: T
				}), {
					isAuthzd: void 0,
					isLoading: !1
				};
				const M = [];
				K ? (M.push(...T), te && M.push(...te)) : g.contextAccountTag && (M.push(`com.cloudflare.api.account.${g.contextAccountTag}`), M.push(...R)), M.length > 0 && p(E);
				const j = v(E);
				if (M.length === 0 && !j) return {
					isAuthzd: !1,
					isLoading: !1
				};
				const F = (0, c.uniq)(M),
					G = (0, m.F3)(D, B, d, E, F);
				return {
					isAuthzd: Boolean(G && G.length > 0),
					isLoading: !1
				}
			}
			const a = new RegExp(`${n}[0-9a-fA-F]{32}`);

			function v(d) {
				return a.test(d)
			}

			function p(d) {
				return d === n
			}
		},
		"../react/common/components/AccessCheck/useUserAuthzPolicies.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				b: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				i = t("../../../../node_modules/swr/core/dist/index.mjs");
			const u = 60 * 1e3,
				s = new Set(["b7db8a5d0e51afce2d33ea16d8219fc6", "3576b716b54efb9e7851fe9e7a22e440", "ca11caa2415c966f6fb75f025ed1f354", "56517c9d595ec8e23d789fd2c6d18990", "340188bc4fd1e745704cedf68408ff05", "3f96cb3e7cb3fa852b055b63baf69624"]),
				m = async () => {
					var l;
					const f = await fetch("/api/v4/user/iam/policies");
					if (!f.ok) throw new Error(`Failed to fetch authz policies: ${f.status}`);
					const n = await f.json(),
						o = n == null || (l = n.result) === null || l === void 0 ? void 0 : l.policies;
					if (!o || !(0, e.isArray)(o) || o.length === 0) throw new Error(`Unexpected authz policies API response shape: ${JSON.stringify(o)}`);
					return o
				};

			function c(l) {
				var f;
				const n = !!l,
					o = s.has((f = l) !== null && f !== void 0 ? f : ""),
					a = n && !o,
					{
						data: v,
						error: p,
						isLoading: d,
						mutate: E
					} = (0, i.ZP)(a ? `user/iam/policies/${l}` : null, () => m(), {
						dedupingInterval: u,
						revalidateOnFocus: !0,
						focusThrottleInterval: u,
						revalidateOnReconnect: !1
					}),
					T = async () => {
						!a || E()
					};
				return {
					policies: v || null,
					isLoading: a ? d : !1,
					isLoadingSkippedByUserID: o,
					error: (p == null ? void 0 : p.message) || null,
					refresh: T
				}
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(x, h, t) {
			"use strict";
			t.d(h, {
				a: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e),
				i = t("../react/common/selectors/accountSelectors.ts");
			const u = m => {
					if (typeof m != "string") throw new Error("invalid Param Type provided");
					const c = m.slice(1).split(":");
					if (c.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: c[0],
						value: c[1]
					}
				},
				s = (m, c) => {
					const {
						resourceId: l,
						accountId: f,
						legacyPermission: n
					} = c;
					let {
						read: o,
						edit: a
					} = c;
					const v = {};
					n && (a = `#${n}:edit`, o = `#${n}:read`);
					const p = l || f;
					if (o) {
						const d = Array.isArray(o) ? o : [o];
						v.isReadable = d.some(E => {
							const T = u(E);
							return (0, i.DT)(m, p, y => !!(y[T.key] && y[T.key][T.value]))
						})
					}
					if (a) {
						const d = Array.isArray(a) ? a : [a];
						v.isEditable = d.some(E => {
							const T = u(E);
							return (0, i.DT)(m, p, y => !!(y[T.key] && y[T.key][T.value]))
						})
					}
					return v
				};
			h.Z = (0, e.connect)(s)
		},
		"../react/common/components/AccessControl/index.js": function(x, h, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				r = t.n(e),
				i = t("../react/app/HoCs/withEntities.tsx"),
				u = t("../react/common/components/AccessControl/SAAConnect.js");

			function s(o) {
				for (var a = 1; a < arguments.length; a++) {
					var v = arguments[a] != null ? Object(arguments[a]) : {},
						p = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(v).filter(function(d) {
						return Object.getOwnPropertyDescriptor(v, d).enumerable
					})), p.forEach(function(d) {
						m(o, d, v[d])
					})
				}
				return o
			}

			function m(o, a, v) {
				return a = c(a), a in o ? Object.defineProperty(o, a, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[a] = v, o
			}

			function c(o) {
				var a = l(o, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function l(o, a) {
				if (typeof o != "object" || o === null) return o;
				var v = o[Symbol.toPrimitive];
				if (v !== void 0) {
					var p = v.call(o, a || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(o)
			}

			function f(o) {
				const v = ["isReadable", "isEditable"].reduce((p, d) => o.hasOwnProperty(d) ? s({}, p, {
					[d]: o[d]
				}) : p, {});
				return o.children(v)
			}
			f.propTypes = {
				resourceType: r().string,
				resourceId: r().string,
				read: r().oneOfType([r().string, r().array]),
				edit: r().oneOfType([r().string, r().array]),
				accountId: r().string,
				isReadable: r().bool,
				isEditable: r().bool,
				children: r().func
			};
			const n = (0, i.Z)((0, u.Z)(f));
			n.displayName = "AccessControl", h.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				PP: function() {
					return a
				},
				RJ: function() {
					return l
				},
				tz: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				s = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				m = t("../react/common/utils/oidc.ts");
			const c = () => f.test(window.location.pathname) || i.E.has(u.Qq),
				l = () => i.E.get(u.Qq),
				f = /^\/login\/apple(\/)?/,
				o = [f, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				a = () => {
					let p = !1;
					o.forEach(E => {
						if (E.test(window.location.pathname)) {
							p = !0;
							return
						}
					});
					const d = c() && p;
					return d && (0, s.C8)(s.LF.OFF), d
				},
				v = p => {
					p && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					}), window.location.href = (0, m.e)(m.c.Apple, p)
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				oG: function() {
					return p
				},
				sN: function() {
					return l.sN
				},
				v2: function() {
					return l.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				m = t.n(s),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = t("../react/common/components/Dropdown/index.tsx"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(d) {
					for (var E = 1; E < arguments.length; E++) {
						var T = arguments[E];
						for (var y in T) Object.prototype.hasOwnProperty.call(T, y) && (d[y] = T[y])
					}
					return d
				}, n.apply(this, arguments)
			}

			function o(d, E) {
				if (d == null) return {};
				var T = a(d, E),
					y, g;
				if (Object.getOwnPropertySymbols) {
					var O = Object.getOwnPropertySymbols(d);
					for (g = 0; g < O.length; g++) y = O[g], !(E.indexOf(y) >= 0) && (!Object.prototype.propertyIsEnumerable.call(d, y) || (T[y] = d[y]))
				}
				return T
			}

			function a(d, E) {
				if (d == null) return {};
				var T = {},
					y = Object.keys(d),
					g, O;
				for (O = 0; O < y.length; O++) g = y[O], !(E.indexOf(g) >= 0) && (T[g] = d[g]);
				return T
			}
			const v = (0, c.SU)(({
				theme: d
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${d.radii[2]}px 0 0 ${d.radii[2]}px`,
					borderRight: `1px solid ${d.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${d.radii[2]}px ${d.radii[2]}px 0`,
					paddingRight: d.space[2],
					paddingLeft: d.space[2]
				},
				"& button": {
					color: (0, f.Yc)() ? d.colors.text : void 0
				},
				"& button:hover": {
					color: (0, f.Yc)() ? d.colors.text : void 0
				}
			}));

			function p(d) {
				let {
					menu: E,
					containerProps: T,
					disabled: y,
					disabledDropdown: g = y
				} = d, O = o(d, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: _
				} = (0, s.useI18n)();
				return r().createElement(v, n({}, T, {
					role: "group"
				}), r().createElement(i.zx, n({}, O, {
					disabled: y
				})), r().createElement(l.Lt, {
					trigger: r().createElement(i.zx, {
						type: O.type,
						"aria-haspopup": "menu",
						disabled: g
					}, r().createElement(u.J, {
						type: "caret-down",
						label: _("common.more"),
						size: 12
					})),
					menu: E
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				v: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("../react/common/hooks/useIntersectionObserver.ts");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(l) {
					for (var f = 1; f < arguments.length; f++) {
						var n = arguments[f];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (l[o] = n[o])
					}
					return l
				}, m.apply(this, arguments)
			}

			function c(l) {
				const f = (0, e.useRef)(null),
					[n, o] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const v = f.current;
					if (v) {
						const {
							bottom: p
						} = v.getBoundingClientRect();
						p > window.innerHeight && o(!0)
					}
				}, []);
				const a = (0, s.S)(v => {
					for (const p of v) p.intersectionRatio < 1 && o(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const v = f.current;
					if (v && a) return a.observe(v), () => {
						a.unobserve(v)
					}
				}, [a]), r().createElement(i.ZC, m({
					role: "menu",
					innerRef: f,
					position: "absolute",
					right: "0",
					backgroundColor: u.rS.colors.background,
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
				}, l))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				s: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				s = t.n(u);

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(T) {
					for (var y = 1; y < arguments.length; y++) {
						var g = arguments[y];
						for (var O in g) Object.prototype.hasOwnProperty.call(g, O) && (T[O] = g[O])
					}
					return T
				}, m.apply(this, arguments)
			}

			function c(T, y) {
				if (T == null) return {};
				var g = l(T, y),
					O, _;
				if (Object.getOwnPropertySymbols) {
					var b = Object.getOwnPropertySymbols(T);
					for (_ = 0; _ < b.length; _++) O = b[_], !(y.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(T, O) || (g[O] = T[O]))
				}
				return g
			}

			function l(T, y) {
				if (T == null) return {};
				var g = {},
					O = Object.keys(T),
					_, b;
				for (b = 0; b < O.length; b++) _ = O[b], !(y.indexOf(_) >= 0) && (g[_] = T[_]);
				return g
			}

			function f(T) {
				for (var y = 1; y < arguments.length; y++) {
					var g = arguments[y] != null ? Object(arguments[y]) : {},
						O = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(g).filter(function(_) {
						return Object.getOwnPropertyDescriptor(g, _).enumerable
					})), O.forEach(function(_) {
						n(T, _, g[_])
					})
				}
				return T
			}

			function n(T, y, g) {
				return y = o(y), y in T ? Object.defineProperty(T, y, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[y] = g, T
			}

			function o(T) {
				var y = a(T, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function a(T, y) {
				if (typeof T != "object" || T === null) return T;
				var g = T[Symbol.toPrimitive];
				if (g !== void 0) {
					var O = g.call(T, y || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(T)
			}
			const v = ({
					theme: T
				}) => {
					const y = {
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
						'&:hover:not(:disabled):not([aria-disabled="true"])': y,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': f({}, y, {
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
				p = (0, i.LM)(v, "a"),
				d = (0, i.LM)(v, "button");

			function E(T) {
				let {
					disabled: y = !1
				} = T, g = c(T, ["disabled"]);
				const O = (0, u.useHistory)(),
					_ = {
						role: "menuitem"
					};
				if ("href" in g && typeof g.href == "string") return r().createElement(p, m({
					"aria-disabled": y
				}, _, g, {
					href: y ? void 0 : g.href,
					onClick: I => {
						var A;
						if (y) return I.stopPropagation();
						I.preventDefault(), (A = g.onClick) === null || A === void 0 || A.call(g, I), O.push(g.href)
					}
				}));
				var b;
				return r().createElement(d, m({
					type: (b = g.type) !== null && b !== void 0 ? b : "button"
				}, _, g, {
					disabled: y
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(x, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/prop-types/index.js"),
				u = t.n(i),
				s = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const m = ({
				children: c
			}) => r().createElement(s.xu, {
				height: 411
			}, c);
			m.propTypes = {
				children: u().node
			}, h.Z = m
		},
		"../react/common/components/ExternalLink.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				dL: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(a) {
					for (var v = 1; v < arguments.length; v++) {
						var p = arguments[v];
						for (var d in p) Object.prototype.hasOwnProperty.call(p, d) && (a[d] = p[d])
					}
					return a
				}, m.apply(this, arguments)
			}

			function c(a, v) {
				if (a == null) return {};
				var p = l(a, v),
					d, E;
				if (Object.getOwnPropertySymbols) {
					var T = Object.getOwnPropertySymbols(a);
					for (E = 0; E < T.length; E++) d = T[E], !(v.indexOf(d) >= 0) && (!Object.prototype.propertyIsEnumerable.call(a, d) || (p[d] = a[d]))
				}
				return p
			}

			function l(a, v) {
				if (a == null) return {};
				var p = {},
					d = Object.keys(a),
					E, T;
				for (T = 0; T < d.length; T++) E = d[T], !(v.indexOf(E) >= 0) && (p[E] = a[E]);
				return p
			}
			const f = (0, s.SU)(({
				verticalAlign: a = "text-bottom"
			}) => ({
				flex: "none",
				verticalAlign: a,
				fill: "currentColor"
			}), i.J);
			var n = null;
			const o = a => {
				let {
					to: v,
					children: p,
					icon: d = !0,
					target: E = "_blank",
					color: T,
					display: y = "inline-flex",
					iconMarginLeft: g = 1,
					iconMarginRight: O,
					alignSelfIcon: _ = "center"
				} = a, b = c(a, ["to", "children", "icon", "target", "color", "display", "iconMarginLeft", "iconMarginRight", "alignSelfIcon"]);
				return r().createElement(u.A, m({}, b, {
					href: v,
					target: E,
					rel: "noopener noreferrer",
					display: y,
					alignItems: "center",
					color: T
				}), p, d && r().createElement(f, {
					alignSelf: _,
					label: "External Link",
					type: "external-link",
					size: typeof d == "number" ? d : 18,
					ml: g,
					mr: O
				}))
			}
		},
		"../react/common/components/ModalManager.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				ZP: function() {
					return p
				},
				dd: function() {
					return a
				},
				vR: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/react-redux/react-redux");
			const u = d => d.application.modals;
			var s = t("../react/common/actions/modalActions.ts"),
				m = t("../../../../node_modules/swr/core/dist/index.mjs"),
				c = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function l() {
				return l = Object.assign ? Object.assign.bind() : function(d) {
					for (var E = 1; E < arguments.length; E++) {
						var T = arguments[E];
						for (var y in T) Object.prototype.hasOwnProperty.call(T, y) && (d[y] = T[y])
					}
					return d
				}, l.apply(this, arguments)
			}
			const f = r().createContext(null);
			class n extends r().Component {
				render() {
					const {
						modals: E,
						closeModal: T
					} = this.props;
					return r().createElement(r().Fragment, null, E.map(({
						ModalComponent: y,
						props: g = {},
						id: O
					}) => {
						const _ = () => {
							typeof g.onClose == "function" && g.onClose(), T(y)
						};
						return r().createElement(f.Provider, {
							key: O,
							value: {
								closeModal: _
							}
						}, r().createElement(m.J$, {
							value: c.ZP
						}, r().createElement(y, l({}, g, {
							isOpen: !0,
							closeModal: _
						}))))
					}))
				}
			}

			function o() {
				const d = r().useContext(f);
				if (!d) throw new Error("useModalContext must be used within a ModalContext");
				return d
			}

			function a() {
				const d = (0, i.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...E) {
						return d(s.openModal(...E))
					}, [d]),
					closeModal: (0, e.useCallback)(function(...E) {
						return d(s.closeModal(...E))
					}, [d])
				}
			}
			var p = (0, i.connect)(d => ({
				modals: u(d)
			}), s)(n)
		},
		"../react/common/components/Page.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				Z: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function u(s) {
				return r().createElement(i.T3, s)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return l
				},
				JR: function() {
					return f
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return m
				},
				ZI: function() {
					return s
				},
				if: function() {
					return r
				},
				q6: function() {
					return i
				},
				w_: function() {
					return u
				},
				zl: function() {
					return c
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				r = "time-window",
				i = "date-from",
				u = "date-to",
				s = "from",
				m = "to",
				c = "all",
				l = {
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
			let f = function(o) {
					return o.ADD_FILTER = "Add filter", o.EDIT_FILTER = "Edit filter", o.REMOVE_FILTER = "Remove filter", o.REMOVE_ALL_FILTERS = "Remove all filters", o.CHANGE_TIME = "Change time window", o.FEED_PAGE_FORWARD = "Activity feed next page", o.FEED_PAGE_BACKWARD = "Activity feed previous page", o.FEED_EXPAND_EVENT = "Activity feed expand event", o.FEED_CLOSE_EVENT = "Activity feed close event", o.FEED_EXPAND_MATCHES = "Activity feed expand matches", o.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", o.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", o.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", o.DOWNLOAD_FEED = "Activity feed download", o
				}({}),
				n = function(o) {
					return o.TIMESERIES = "Timeseries Chart", o.DISTRIBUTION = "Source Distribution Chart", o.TOP_N = "Top N", o.FILTER_BAR = "Filter Bar", o.SCORES_DISTRIBUTIONS = "Scores Distributions", o.INSIGHTS = "Insights", o.RL_HISTOGRAM = "Rate Limit Histogram", o
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Cf: function() {
					return f
				},
				hJ: function() {
					return l
				},
				ys: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var o = 1; o < arguments.length; o++) {
					var a = arguments[o] != null ? Object(arguments[o]) : {},
						v = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(a).filter(function(p) {
						return Object.getOwnPropertyDescriptor(a, p).enumerable
					})), v.forEach(function(p) {
						u(n, p, a[p])
					})
				}
				return n
			}

			function u(n, o, a) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = a, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var v = a.call(n, o || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const l = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, i({}, o || {}))
				},
				f = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				v: function() {
					return e
				}
			});
			let e = function(r) {
				return r.FIELD = "change field", r.OPERATOR = "change operator", r
			}({})
		},
		"../react/common/components/filter-editor/triplet-fields/SequencesField/constants.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				Aq: function() {
					return l
				},
				Xc: function() {
					return c
				},
				rg: function() {
					return f
				},
				xs: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				u = t("../node_modules/@cloudflare/component-link/es/index.js"),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				m = t("../react/utils/translator.tsx");
			const c = "sequence builder modal opened",
				l = "sequence builder modal submitted",
				f = 10,
				n = {
					INITIAL_PAGINATION: {
						page: 1,
						perPage: 10
					},
					INITIAL_SORT: {
						name: "endpoint",
						direction: i.Sr.asc
					},
					INITIAL_TOOLBAR_STATE: {
						search: "",
						filterValues: {
							method: "all"
						}
					},
					EMPTY_STATES: ({
						selectedHostname: o,
						isFiltersAndNoResults: a,
						addEndpointsRoute: v
					}) => o ? a ? {
						title: r().createElement(m.cC, {
							id: "common.table.empty.search.title"
						}),
						description: r().createElement(s.ZC, {
							mt: 1
						}, r().createElement(m.cC, {
							id: "common.table.empty.search.description"
						}))
					} : {
						title: r().createElement(s.ZC, {
							textAlign: "center"
						}, r().createElement(m.cC, {
							id: "api_rules.sequences_rules.main.form.table.empty.no_endpoints.title"
						})),
						description: r().createElement(s.ZC, {
							mt: 3,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							textAlign: "center",
							fontSize: 2
						}, r().createElement(m.cC, {
							id: "api_rules.sequences_rules.main.form.table.empty.no_endpoints.description"
						}), r().createElement(u.QV, {
							to: v
						}, r().createElement(m.cC, {
							id: "api_rules.sequences_rules.main.form.table.empty.no_endpoints.cta"
						}))),
						image: () => null
					} : {
						title: null,
						description: r().createElement(s.ZC, {
							textAlign: "center"
						}, r().createElement(m.cC, {
							id: "api_rules.sequences_rules.main.form.table.empty.no_hostname_selected"
						})),
						image: () => null
					}
				}
		},
		"../react/common/constants/billing/index.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Gq: function() {
					return u
				},
				g$: function() {
					return i
				},
				WX: function() {
					return e
				},
				E0: function() {
					return f
				},
				Hw: function() {
					return m
				},
				Ed: function() {
					return s
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
					return l
				}
			});
			let e = function(p) {
				return p.page_rules = "page_rules", p.automatic_platform_optimization = "automatic_platform_optimization", p
			}({});
			const r = "page_rules",
				i = "automatic_platform_optimization",
				u = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					volume_included: 1,
					ubb_frequency: 1,
					ubb_price: .1,
					ubb_unit: "gigabyte"
				},
				s = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				m = {
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
				l = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					ubb_frequency: 1e3,
					ubb_storage_price: 5,
					ubb_streaming_price: 1,
					ubb_unit: "minute"
				},
				f = {
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
				a = t("../react/common/constants/billing/workers.ts");
			const v = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				FP: function() {
					return e
				},
				Nl: function() {
					return s
				},
				SO: function() {
					return i
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
				i = {
					BILLING: "billing"
				},
				u = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				s = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Dk: function() {
					return v
				},
				Dy: function() {
					return p
				},
				E_: function() {
					return m
				},
				Lv: function() {
					return d
				},
				S4: function() {
					return s
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return f
				},
				Y1: function() {
					return c
				},
				p6: function() {
					return l
				},
				q0: function() {
					return u
				},
				rg: function() {
					return E
				},
				sJ: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const u = "healthy",
				s = "degraded",
				m = "critical",
				c = "unknown",
				l = "not-monitored",
				f = r().from({
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
					f: f.FREE,
					p: f.PRO,
					b: f.BIZ
				},
				a = "marketing-pt",
				v = () => {
					const y = i.Z.get(a);
					if (!!y) return o[y]
				},
				p = ["gov"],
				d = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				E = "banner-notification-interactions",
				T = null
		},
		"../react/common/constants/index.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/common/constants/roles.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				V: function() {
					return e
				}
			});
			let e = function(r) {
				return r.SUPER_ADMINISTRATOR_ALL_PRIVILEGES = "Super Administrator - All Privileges", r.CLOUDFLARE_ACCESS = "Cloudflare Access", r.CLOUDFLARE_ACCESS_APP_ADMIN = "Cloudflare Access App Admin", r.CLOUDFLARE_ACCESS_IDENTITY_PROVIDER_ADMIN = "Cloudflare Access Identity Provider Admin", r.ADMINISTRATOR = "Administrator", r.ADMINISTRATOR_READ_ONLY = "Administrator Read Only", r.ANALYTICS = "Analytics", r.API_GATEWAY = "API Gateway", r.API_GATEWAY_READ = "API Gateway Read", r.AUDIT_LOGS_VIEWER = "Audit Logs Viewer", r.BILLING = "Billing", r.BOT_MANAGEMENT = "Bot Management", r.BOT_MANAGEMENT_ACCOUNT_WIDE = "Bot Management (Account-Wide)", r.CACHE_DOMAIN_PURGE = "Cache Domain Purge", r.CACHE_PURGE = "Cache Purge", r.SSL_TLS_CACHING_PERFORMANCE_PAGE_RULES_AND_CUSTOMIZATION = "SSL/TLS, Caching, Performance, Page Rules, and Customization", r.EMAIL_CONFIGURATION_ADMIN = "Email Configuration Admin", r.EMAIL_INTEGRATION_ADMIN = "Email Integration Admin", r.EMAIL_SECURITY_ANALYST = "Email Security Analyst", r.EMAIL_SECURITY_READONLY = "Email Security Readonly", r.EMAIL_SECURITY_REPORTING = "Email Security Reporting", r.CLOUDFORCE_ONE_ADMIN = "Cloudforce One Admin", r.CLOUDFORCE_ONE_READ = "Cloudforce One Read", r.DNS = "DNS", r.DOMAIN_ADMINISTRATOR = "Domain Administrator", r.DOMAIN_ADMINISTRATOR_READ_ONLY = "Domain Administrator Read Only", r.DOMAIN_API_GATEWAY = "Domain API Gateway", r.DOMAIN_API_GATEWAY_READ = "Domain API Gateway Read", r.DOMAIN_DNS = "Domain DNS", r.DOMAIN_PAGE_SHIELD = "Domain Page Shield", r.DOMAIN_PAGE_SHIELD_READ = "Domain Page Shield Read", r.MAGIC_NETWORK_MONITORING_ADMIN = "Magic Network Monitoring Admin", r.MAGIC_NETWORK_MONITORING = "Magic Network Monitoring", r.MAGIC_NETWORK_MONITORING_READ_ONLY = "Magic Network Monitoring Read-Only", r.CLOUDFLARE_GATEWAY = "Cloudflare Gateway", r.CLOUDFLARE_WORKER_ADMIN = "Cloudflare Worker Admin", r.HTTP_APPLICATIONS = "HTTP Applications", r.HTTP_APPLICATIONS_READ = "HTTP Applications Read", r.CLOUDFLARE_IMAGES = "Cloudflare Images", r.LOAD_BALANCER = "Load Balancer", r.LOG_SHARE = "Log Share", r.NETWORK_SERVICES_WRITE_MAGIC = "Network Services Write (Magic)", r.NETWORK_SERVICES_READ_MAGIC = "Network Services Read (Magic)", r.MINIMAL_ACCOUNT_ACCESS = "Minimal Account Access", r.PAGE_SHIELD = "Page Shield", r.PAGE_SHIELD_READ = "Page Shield Read", r.HYPERDRIVE_ADMIN = "Hyperdrive Admin", r.HYPERDRIVE_READONLY = "Hyperdrive Readonly", r.CLOUDFLARE_R2_ADMIN = "Cloudflare R2 Admin", r.CLOUDFLARE_R2_READ = "Cloudflare R2 Read", r.LOG_SHARE_READER = "Log Share Reader", r.CLOUDFLARE_SNIPPETS_ADMIN = "Cloudflare Snippets Admin", r.CLOUDFLARE_STREAM = "Cloudflare Stream", r.CLOUDFLARE_ZERO_TRUST = "Cloudflare Zero Trust", r.CLOUDFLARE_DEX = "Cloudflare DEX", r.CLOUDFLARE_ZERO_TRUST_PII = "Cloudflare Zero Trust PII", r.CLOUDFLARE_ZERO_TRUST_READ_ONLY = "Cloudflare Zero Trust Read Only", r.CLOUDFLARE_ZERO_TRUST_REPORTING = "Cloudflare Zero Trust Reporting", r.TRANSFORM_RULES = "Transform Rules", r.TRUST_AND_SAFETY = "Trust and Safety", r.TURNSTILE = "Turnstile", r.TURNSTILE_READ = "Turnstile Read", r.VECTORIZE_ADMIN = "Vectorize Admin", r.VECTORIZE_READONLY = "Vectorize Readonly", r.FIREWALL = "Firewall", r.WAITING_ROOM_ADMIN = "Waiting Room Admin", r.WAITING_ROOM_READ = "Waiting Room Read", r.WORKERS_ADMIN = "Workers Admin", r.ZARAZ_ADMIN = "Zaraz Admin", r.ZARAZ_EDIT = "Zaraz Edit", r.ZARAZ_READONLY = "Zaraz Readonly", r.ZONE_VERSIONING = "Zone Versioning", r.ZONE_VERSIONING_ACCOUNT_WIDE = "Zone Versioning (Account-Wide)", r.ZONE_VERSIONING_READ = "Zone Versioning Read", r.ZONE_VERSIONING_READ_ACCOUNT_WIDE = "Zone Versioning Read (Account-Wide)", r.DOMAIN_WAITING_ROOM_ADMIN = "Domain Waiting Room Admin", r.DOMAIN_WAITING_ROOM_READ = "Domain Waiting Room Read", r.BRAND_PROTECTION = "Brand Protection", r
			}({})
		},
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				QK: function() {
					return e
				},
				dy: function() {
					return r
				},
				sO: function() {
					return i
				},
				x4: function() {
					return u
				}
			});
			let e = function(s) {
				return s.DELETE = "delete", s.CREATE = "create", s.GET = "get", s.UPDATE = "update", s
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
				i = (s, m, c = !1) => {
					var l;
					return `${m} ${(l=r[s])!==null&&l!==void 0?l:s} ${c?"ruleset":"rule"}${m===e.GET?"s":""}`
				},
				u = () => {
					var s;
					return (s = Object.keys(r).reduce((m, c) => {
						const l = Object.values(e).reduce((f, n) => (f.push(i(c, n)), f.push(i(c, n, !0)), f), []);
						return m.concat(l)
					}, [])) === null || s === void 0 ? void 0 : s.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				C: function() {
					return m
				},
				F: function() {
					return s
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(i);

			function s() {
				var c;
				const {
					accountId: l
				} = (0, i.useParams)(), f = (0, e.p4)(r.D0);
				if (l === void 0 && !f) throw new Error("Account ID not found in URL params");
				return (c = l) !== null && c !== void 0 ? c : f == null ? void 0 : f.id
			}

			function m() {
				const c = s();
				return (0, e.p4)(l => (0, r.Py)(l, c))
			}
		},
		"../react/common/hooks/useActiveState.ts": function(x, h, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				r = t("webpack/sharing/consume/default/react-redux/react-redux"),
				i = t.n(r),
				u = t("../react/common/selectors/commonSelectors.ts");
			const s = m => {
				const c = (0, r.useDispatch)();
				return [(0, r.useSelector)((0, u.cZ)(m)), n => {
					c((0, e.I)(m, n))
				}]
			};
			h.Z = s
		},
		"../react/common/hooks/useCachedState.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				j: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function u(s, {
				key: m,
				cache: c = i.E,
				ttl: l
			} = {}) {
				var f;
				const n = m !== void 0 && c.get(m),
					[o, a] = (0, e.useState)((f = n) !== null && f !== void 0 ? f : s);
				return [o, p => {
					a(d => (p instanceof Function && (p = p(d)), m !== void 0 && c.set(m, p, l), p))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(x, h, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(i) {
				return (0, e.qf)(i)
			}
			h.Z = r
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				S: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function i(u, {
				root: s,
				rootMargin: m,
				threshold: c
			} = {}) {
				const l = (0, e.useRef)(null);

				function f() {
					return l.current === null && (l.current = new IntersectionObserver(u, {
						root: s,
						rootMargin: m,
						threshold: c
					})), l.current
				}
				return (0, e.useEffect)(() => (l.current = new IntersectionObserver(u, {
					root: s,
					rootMargin: m,
					threshold: c
				}), () => {
					var n;
					(n = l.current) === null || n === void 0 || n.disconnect()
				}), [u, s, m, c]), f()
			}
		},
		"../react/common/hooks/useIsInternal.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				t: function() {
					return i
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/userSelectors.ts");
			const i = () => {
				var u;
				const s = (0, e.p4)(r.PR);
				return (s == null || (u = s.email) === null || u === void 0 ? void 0 : u.endsWith("@cloudflare.com")) || !1
			}
		},
		"../react/common/hooks/usePrevious.ts": function(x, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function i(u) {
				const s = (0, e.useRef)(u);
				return (0, e.useEffect)(() => {
					s.current = u
				}, [u]), s.current
			}
			h.Z = i
		},
		"../react/common/hooks/useScope.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				Lm: function() {
					return f
				},
				QF: function() {
					return c
				},
				f1: function() {
					return l
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/app/redux/index.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				s = t.n(u),
				m = t("../react/common/hooks/useAccountId.ts");
			const c = {
					ZONE: "zones",
					ACCOUNT: "accounts"
				},
				l = () => {
					const {
						pathname: n
					} = (0, u.useLocation)();
					return (0, e.el)(n)
				},
				f = () => {
					const n = (0, r.p4)(i.Cu),
						o = (0, m.F)(),
						a = l();
					return {
						scope: a ? c.ZONE : c.ACCOUNT,
						scopeId: a ? n : o,
						isZoneScope: a
					}
				}
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(x, h, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");

			function i(u) {
				return (0, e.p4)(s => (0, r.rV)(s, u))
			}
			h.Z = i
		},
		"../react/common/middleware/sparrow/errors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Uh: function() {
					return s
				},
				ez: function() {
					return u
				},
				oV: function() {
					return m
				}
			});

			function e(c, l, f) {
				return l = r(l), l in c ? Object.defineProperty(c, l, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[l] = f, c
			}

			function r(c) {
				var l = i(c, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function i(c, l) {
				if (typeof c != "object" || c === null) return c;
				var f = c[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(c, l || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(c)
			}
			class u extends Error {
				constructor(l, f) {
					super(f);
					e(this, "eventName", void 0), this.eventName = l, this.name = "SparrowValidationError"
				}
			}
			class s extends u {
				constructor(l) {
					super(l, `Event not allowed: "${l}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class m extends u {
				constructor(l, f) {
					super(l, `Found invalid properties on event: "${l}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = f
				}
			}
		},
		"../react/common/middleware/sparrow/globalEvents/clickEvents.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Ax: function() {
					return m
				},
				B8: function() {
					return u
				},
				W1: function() {
					return i
				},
				tV: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			const i = "user click";
			let u = function(c) {
					return c.CALL_TO_ACTION = "call_to_action", c.DISMISS_CONTENT = "dismiss_content", c
				}({}),
				s = function(c) {
					return c.ZONE_MARKETING_BANNER = "zone_marketing_banner_click", c.ZONE_MARKETING_BANNER_DISMISS = "zone_marketing_banner_dismiss", c.ACCOUNT_MARKETING_BANNER = "account_marketing_banner_click", c.ACCOUNT_MARKETING_BANNER_DISMISS = "account_marketing_banner_dismiss", c
				}({});
			const m = ({
				interactionType: c,
				clickType: l,
				id: f,
				text: n = "",
				href: o = ""
			}) => {
				const a = {
					interactionType: c,
					clickType: l,
					id: f,
					text: n,
					href: o
				};
				r().sendEvent(i, a)
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Au: function() {
					return Ie
				},
				B: function() {
					return Fe
				},
				B3: function() {
					return qe
				},
				BG: function() {
					return A
				},
				Bp: function() {
					return lt
				},
				CV: function() {
					return mt
				},
				D0: function() {
					return O
				},
				DT: function() {
					return Y
				},
				EL: function() {
					return F
				},
				EU: function() {
					return W
				},
				GE: function() {
					return yt
				},
				Ko: function() {
					return ne
				},
				Kx: function() {
					return C
				},
				Le: function() {
					return k
				},
				O4: function() {
					return ze
				},
				Ou: function() {
					return X
				},
				Py: function() {
					return je
				},
				QI: function() {
					return Ze
				},
				Qf: function() {
					return b
				},
				RO: function() {
					return De
				},
				T3: function() {
					return dt
				},
				T8: function() {
					return I
				},
				UX: function() {
					return j
				},
				VP: function() {
					return xe
				},
				Xo: function() {
					return tt
				},
				Xu: function() {
					return q
				},
				Yi: function() {
					return at
				},
				Yj: function() {
					return J
				},
				Zu: function() {
					return G
				},
				bC: function() {
					return re
				},
				f8: function() {
					return z
				},
				hI: function() {
					return ut
				},
				hN: function() {
					return L
				},
				hX: function() {
					return Me
				},
				iq: function() {
					return Ke
				},
				nE: function() {
					return D
				},
				oD: function() {
					return M
				},
				oI: function() {
					return P
				},
				oJ: function() {
					return gt
				},
				tM: function() {
					return K
				},
				uF: function() {
					return B
				},
				ut: function() {
					return Ue
				},
				vU: function() {
					return Tt
				},
				wQ: function() {
					return ie
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/lodash/get.js"),
				i = t.n(r),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				s = t.n(u),
				m = t("../../../../node_modules/reselect/lib/index.js"),
				c = t("../../../../node_modules/moment/moment.js"),
				l = t.n(c),
				f = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				o = t("../react/common/selectors/userSelectors.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				v = t("../react/app/components/DeepLink/selectors.ts"),
				p = t("../react/common/constants/roles.ts"),
				d = t("../react/common/utils/hasRole.ts");

			function E(Z) {
				for (var pe = 1; pe < arguments.length; pe++) {
					var be = arguments[pe] != null ? Object(arguments[pe]) : {},
						Te = Object.keys(be);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(be).filter(function(ke) {
						return Object.getOwnPropertyDescriptor(be, ke).enumerable
					})), Te.forEach(function(ke) {
						T(Z, ke, be[ke])
					})
				}
				return Z
			}

			function T(Z, pe, be) {
				return pe = y(pe), pe in Z ? Object.defineProperty(Z, pe, {
					value: be,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[pe] = be, Z
			}

			function y(Z) {
				var pe = g(Z, "string");
				return typeof pe == "symbol" ? pe : String(pe)
			}

			function g(Z, pe) {
				if (typeof Z != "object" || Z === null) return Z;
				var be = Z[Symbol.toPrimitive];
				if (be !== void 0) {
					var Te = be.call(Z, pe || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (pe === "string" ? String : Number)(Z)
			}
			const O = Z => {
					const pe = B(Z);
					return pe == null ? void 0 : pe.account
				},
				_ = Z => {
					const pe = (0, o.PR)(Z);
					if (pe) {
						const be = pe.id;
						return Z.accountAccess[be] || {}
					}
					return {}
				},
				b = Z => Z.accountsDetailed,
				I = (0, n.P1)("accountsDetailed", b),
				A = Z => Z.memberships,
				D = (0, m.P1)((0, n.P1)("memberships", A), v.U, (Z, pe) => !!pe && !!Z ? Z.filter(be => pe.includes(be.id)) : Z),
				L = Z => Z.accountFlags && Z.accountFlags.data,
				C = Z => Z.accountFlags,
				k = (Z, pe, be) => {
					const Te = L(Z);
					return !Te || !Te[pe] ? null : Te[pe][be]
				},
				R = Z => Z.accountFlags.isRequesting,
				P = (Z, ...pe) => i()(Z, ["accountFlagsChanges", "data", ...pe]),
				z = Z => Z.accountFlagsChanges.isRequesting,
				te = (0, m.P1)(L, C, (Z, pe) => ({
					data: Z,
					meta: pe
				})),
				ee = (Z, pe, be) => !!(isEnterpriseSSEnabledSelector(Z) && k(Z, pe, be)),
				q = Z => Z.membership,
				B = (0, n.P1)("membership", q),
				U = (0, m.P1)(B, q, (Z, pe) => ({
					data: Z,
					meta: pe
				})),
				X = Z => {
					const {
						roles: pe = []
					} = B(Z) || {};
					return Boolean(pe.find(be => be === "Super Administrator - All Privileges" || be === "Billing"))
				},
				K = Z => {
					const pe = [p.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, d.n)(Z, pe)
				},
				M = Z => {
					const pe = _(Z),
						be = Ye.getMemberships(Z) ? s().asMutable(Ye.getMemberships(Z)) : [];
					if (!!be) return s().from(be.map(Te => E({}, Te, {
						lastSeen: pe[Te.account.id] ? pe[Te.account.id].lastSeen : null
					})).sort((Te, ke) => Te.lastSeen && ke.lastSeen ? ke.lastSeen - Te.lastSeen : 0))
				},
				j = Z => Z.filteredMemberships,
				F = (0, n.P1)("filteredMemberships", j),
				G = (0, m.P1)(B, Z => Z == null ? void 0 : Z.permissions),
				J = (0, m.P1)(G, Z => (0, e.Z)(pe => {
					var be;
					return (be = Z == null ? void 0 : Z[pe]) !== null && be !== void 0 ? be : {
						read: !1,
						edit: !1
					}
				})),
				ne = (0, m.P1)(B, Z => Z == null ? void 0 : Z.policies),
				Y = (Z, pe, be) => {
					let Te = Ye.getMembership(Z);
					if (!Te) {
						const ke = Ye.getMemberships(Z);
						if (!ke || !pe) return !1;
						Te = ke.find(He => He.account.id === pe)
					}
					if (!Te || !be) return !1;
					try {
						return be(Te.permissions)
					} catch {
						return !1
					}
				},
				ue = Z => {
					var pe, be;
					return (pe = (be = O(Z)) === null || be === void 0 ? void 0 : be.meta.has_pro_zones) !== null && pe !== void 0 ? pe : !1
				},
				W = Z => {
					var pe, be;
					return (pe = (be = O(Z)) === null || be === void 0 ? void 0 : be.meta.has_business_zones) !== null && pe !== void 0 ? pe : !1
				},
				re = Z => W(Z) || ue(Z),
				$ = (Z, pe) => {
					const be = oe(Z, pe);
					return !!be && !!be.enabled
				},
				oe = (Z, pe) => {
					const be = Ye.getMembership(Z),
						Te = be && be.account;
					return Te && Te.legacy_flags && Te.legacy_flags[pe]
				},
				ie = Z => $(Z, "custom_pages"),
				Ee = Z => !!Z && Z["webhooks.webhooks.enabled"],
				se = Z => k(Z, "bots", "enabled"),
				he = Z => k(Z, "billing", "annual_subscriptions_enable"),
				De = Z => Z ? Boolean(k(Z, "ConstellationAI", "v2_ui")) : !1,
				Me = Z => Z ? Boolean(k(Z, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Fe = Z => Z ? Boolean(k(Z, "AIgateway", "enabled")) : !1,
				Se = Z => oe(Z, "enterprise_zone_quota"),
				ot = Z => {
					const pe = Se(Z);
					return !pe || !pe.available ? -1 : pe.available
				},
				Ke = Z => Z.accountMembers,
				qe = (0, n.P1)("accountMembers", Ke),
				ze = Z => Z.accountMember && Z.accountMember.isRequesting,
				V = Z => Z.accountRoles,
				Ce = (0, n.P1)("accountRoles", V),
				je = (Z, pe) => {
					const be = Ye.getMemberships(Z),
						Te = be && be.find(it => it.account.id === pe);
					if (Te) return Te.account.name.replace(" Account", " account");
					const ke = Ye.getMembership(Z),
						He = ke && ke.account;
					return He && He.id === pe ? He.name : null
				},
				Ue = (Z, pe) => {
					const be = Ye.getMemberships(Z),
						Te = be && be.find(it => it.account.id === pe);
					if (Te) return Te.account.settings.access_approval_expiry;
					const ke = Ye.getMembership(Z),
						He = ke && ke.account;
					return He && He.id === pe ? He.settings.access_approval_expiry : null
				},
				tt = (Z, pe) => {
					const be = Ue(Z, pe);
					return be ? l().utc(be).isAfter() : !1
				},
				dt = (Z, pe, be) => {
					const Te = Ue(Z, pe);
					let ke = Te ? l().utc(Te) : null;
					return !ke || !ke.isAfter() ? "" : ke && ke.year() === 3e3 ? be("account.access_approval.card_expiration_forever") : be("account.access_approval.card_expiration_text", {
						expiryTimestamp: ke.local().format(f.U.DateTime)
					})
				},
				gt = Z => Z && Z.member && Z.member.edit,
				Ie = (Z, pe) => {
					const be = Ye.getMembership(Z),
						Te = be && be.account;
					return Te ? Te.id !== pe : !1
				},
				nt = Z => Z.dpa,
				Q = (0, n.P1)("dpa", nt),
				ce = Z => Z.webhook,
				fe = Z => Z.webhooks,
				Oe = (0, n.P1)("webhook", fe),
				xe = Z => Z.accountLegoContract,
				Ve = (0, n.P1)("accountLegoContract", xe),
				Ze = Z => {
					const pe = Ve(Z);
					return (pe == null ? void 0 : pe.lego_state) ? pe.lego_state : ""
				},
				Ot = Z => Ze(Z) === "signed",
				yt = Z => xe(Z).isRequesting,
				Tt = Z => {
					const pe = Ve(Z);
					return pe && pe.subscription_type ? pe.subscription_type : ""
				},
				Wt = Z => Tt(Z) !== "",
				Ye = {
					getMembership: B,
					getMemberships: D,
					getFilteredMemberships: F,
					getAccountMembers: qe,
					getAccountRoles: Ce
				},
				lt = Z => Z.accountSingle,
				at = (0, n.P1)("accountSingle", lt),
				ut = Z => {
					const pe = [p.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, p.V.ADMINISTRATOR];
					return (0, d.n)(Z, pe)
				},
				mt = Z => (0, d.n)(Z, [p.V.BRAND_PROTECTION]),
				Re = Z => hasRole(Z, [MEMBERSHIP_ROLES.CLOUDFORCE_ONE_ADMIN, MEMBERSHIP_ROLES.CLOUDFORCE_ONE_READ])
		},
		"../react/common/selectors/commonSelectors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				FX: function() {
					return i
				},
				QG: function() {
					return r
				},
				TH: function() {
					return u
				},
				cZ: function() {
					return e
				}
			});

			function e(s) {
				const m = `__ACTIVE__${s}`;
				return c => {
					const l = c.application;
					return l && l.active[m]
				}
			}

			function r(s) {
				const m = `__TOGGLE__${s}`;
				return c => {
					const l = c.application;
					return l && l.toggles[m]
				}
			}

			function i(s) {
				return s && s.paginationData && s.paginationData.info && s.paginationData.info.total_count ? s.paginationData.info.total_count : 0
			}
			const u = s => s.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$f: function() {
					return d
				},
				AD: function() {
					return m
				},
				BF: function() {
					return p
				},
				Bs: function() {
					return _
				},
				Ci: function() {
					return J
				},
				DA: function() {
					return Ke
				},
				E6: function() {
					return v
				},
				Gy: function() {
					return Fe
				},
				Hq: function() {
					return Me
				},
				Ms: function() {
					return A
				},
				Mx: function() {
					return $
				},
				Nb: function() {
					return De
				},
				Pj: function() {
					return ot
				},
				Q2: function() {
					return c
				},
				Qq: function() {
					return oe
				},
				Td: function() {
					return g
				},
				Z: function() {
					return ue
				},
				a: function() {
					return O
				},
				a5: function() {
					return re
				},
				c7: function() {
					return ie
				},
				du: function() {
					return f
				},
				ec: function() {
					return te
				},
				f: function() {
					return he
				},
				fo: function() {
					return se
				},
				hL: function() {
					return W
				},
				ji: function() {
					return ne
				},
				jo: function() {
					return D
				},
				l9: function() {
					return ze
				},
				lI: function() {
					return s
				},
				p1: function() {
					return T
				},
				pK: function() {
					return Se
				},
				pf: function() {
					return o
				},
				qR: function() {
					return y
				},
				rV: function() {
					return l
				},
				u1: function() {
					return n
				},
				w4: function() {
					return a
				},
				yD: function() {
					return Y
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/pages/internal-dns/constants.ts");

			function i(V, Ce) {
				return V && V[Ce]
			}
			const u = V => !s(V).isRequesting;

			function s(V) {
				return V.entitlements.zone
			}

			function m(V) {
				return s(V).data
			}
			const c = V => {
				var Ce, je;
				return ((Ce = s(V).paginationData) === null || Ce === void 0 || (je = Ce.options) === null || je === void 0 ? void 0 : je.editedDate) || {}
			};

			function l(V, Ce) {
				const je = m(V);
				return je ? i(je, Ce) : void 0
			}
			const f = (V, Ce) => l(V, Ce) === !0;

			function n(V) {
				return V.entitlements.account
			}

			function o(V) {
				return n(V).data
			}
			const a = V => {
				var Ce, je;
				return ((Ce = n(V).paginationData) === null || Ce === void 0 || (je = Ce.options) === null || je === void 0 ? void 0 : je.editedDate) || {}
			};

			function v(V) {
				return !n(V).isRequesting
			}

			function p(V, Ce) {
				const je = o(V);
				return je ? i(je, Ce) : void 0
			}

			function d(V, Ce) {
				return p(V, Ce) === !0
			}

			function E(V, Ce) {
				return Ce.every(je => d(V, je))
			}

			function T(V) {
				return d(V, "contract.customer_enabled")
			}

			function y(V) {
				return d(V, "contract.self_service_allowed")
			}

			function g(V) {
				return d(V, "billing.partners_managed")
			}
			const O = V => T(V) && y(V),
				_ = V => d(V, "enterprise.ecp_allowed");

			function b(V) {
				return I(V) || d(V, "argo.allow_smart_routing") || d(V, "argo.allow_tiered_caching") || d(V, "rate_limiting.enabled") || d(V, "ctm.enabled") || d(V, "workers.enabled") || d(V, "workers.kv_store.enabled") || d(V, "stream.enabled")
			}
			const I = V => f(V, "argo.allow_smart_routing") || f(V, "argo.allow_tiered_caching"),
				A = V => d(V, "zone.partial_setup_allowed") || f(V, "zone.partial_setup_allowed"),
				D = V => d(V, "argo.allow_smart_routing") || f(V, "argo.allow_smart_routing"),
				L = V => d(V, "argo.allow_tiered_caching") || f(V, "argo.allow_tiered_caching"),
				C = V => D(V) || L(V),
				k = V => d(V, "ctm.enabled"),
				R = V => {
					const Ce = p(V, "ctm.load_balancers");
					return typeof Ce == "number" ? Ce : 0
				},
				P = V => {
					const Ce = p(V, "ctm.pools");
					return typeof Ce == "number" ? Ce : 0
				},
				z = V => {
					const Ce = p(V, "ctm.origins");
					return typeof Ce == "number" ? Ce : 0
				},
				te = V => d(V, "workers.enabled"),
				ee = V => d(V, "stream.enabled"),
				q = V => {
					const Ce = p(V, "access.users_allowed");
					return typeof Ce == "number" ? Ce : 0
				},
				B = V => q(V) > 0,
				U = V => {
					const Ce = l(V, "dedicated_certificates");
					return typeof Ce == "number" ? Ce : 0
				},
				X = V => U(V) > 0,
				K = V => {
					const Ce = l(V, "rate_limiting.max_rules");
					return typeof Ce == "number" ? Ce : 0
				},
				M = V => d(V, "rate_limiting.enabled"),
				j = V => {
					const Ce = l(V, "page_rules");
					return typeof Ce == "number" ? Ce : 0
				},
				F = V => j(V) > 0,
				G = V => {
					const Ce = p(V, "dns_firewall.max_clusters_allowed");
					return typeof Ce == "number" ? Ce : 0
				},
				J = V => G(V) > 0,
				ne = V => f(V, "zone.advanced_certificate_manager") || d(V, "zone.advanced_certificate_manager"),
				Y = V => l(V, "authoritative_dns.proxy_record_allowed") === !1 || p(V, "authoritative_dns.proxy_record_allowed") === !1,
				ue = V => d(V, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				W = V => l(V, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				re = V => {
					const Ce = l(V, "authoritative_dns.min_record_ttl_allowed");
					return typeof Ce == "number" && Ce > 1 ? Ce : 60
				},
				$ = V => {
					const Ce = p(V, r.yt);
					return typeof Ce == "number" ? Ce : 0
				},
				oe = V => d(V, "foundation_dns.advanced_nameservers_allowed") || f(V, "foundation_dns.advanced_nameservers_allowed"),
				ie = V => d(V, "authoritative_dns.account_custom_nameservers_allowed"),
				Ee = V => f(V, "authoritative_dns.zone_custom_nameservers_allowed"),
				se = V => Ee(V) || ie(V),
				he = (V, Ce) => ((0, e.el)(window.location.pathname) ? l : p)(V, Ce),
				De = V => ((0, e.el)(window.location.pathname) ? m : o)(V),
				Me = V => d(V, "authoritative_dns.multi_provider_allowed") || f(V, "authoritative_dns.multi_provider_allowed"),
				Fe = V => f(V, "authoritative_dns.cname_flattening_allowed"),
				Se = V => d(V, "secondary_dns.secondary_overrides") || f(V, "secondary_dns.secondary_overrides"),
				ot = V => d(V, "authoritative_dns.custom_soa_allowed") || f(V, "authoritative_dns.custom_soa_allowed"),
				Ke = V => d(V, "authoritative_dns.custom_ns_ttl_allowed") || f(V, "authoritative_dns.custom_ns_ttl_allowed"),
				qe = V => d(V, "secondary.create_zone"),
				ze = V => oe(V) || ie(V) || Me(V) || qe(V) || Se(V) || ot(V) || Ke(V)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				r: function() {
					return s
				},
				v: function() {
					return m
				}
			});
			var e = t("../react/utils/i18n.ts"),
				r = t("../../../common/intl/intl-types/src/index.ts"),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/utils/bootstrap.ts");
			const s = c => {
				if ((0, u.gm)()) return i.Z.set(e.ly, e.ZW), e.ZW;
				const l = c.userCommPreferences.data;
				if (l == null ? void 0 : l["language-locale"]) return (0, e.i_)(l["language-locale"]), l["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const f = (0, e.Kd)();
					return m(f) ? f : e.ZW
				}
			};

			function m(c) {
				const l = Object.keys(r.Q).find(f => r.Q[f] === c);
				return !!c && typeof c == "string" && l != null && (0, e.S8)(l)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$8: function() {
					return s
				},
				BG: function() {
					return f
				},
				BY: function() {
					return g
				},
				GP: function() {
					return p
				},
				GU: function() {
					return O
				},
				PR: function() {
					return i
				},
				h8: function() {
					return n
				},
				kk: function() {
					return E
				},
				l8: function() {
					return c
				},
				mV: function() {
					return d
				},
				vW: function() {
					return m
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const r = _ => _.user,
				i = (0, e.P1)("user", r),
				u = _ => {
					var b;
					return (b = i(_)) === null || b === void 0 ? void 0 : b.email.endsWith("@cloudflare.com")
				},
				s = _ => {
					var b;
					return !!((b = i(_)) === null || b === void 0 ? void 0 : b.id)
				},
				m = _ => {
					const b = i(_);
					if (!!b) return b.first_name && b.last_name ? `${b.first_name} ${b.last_name}` : b.email
				},
				c = _ => {
					const b = i(_);
					return b && b.has_enterprise_zones
				},
				l = _ => _.userCommPreferences,
				f = (0, e.P1)("userCommPreferences", l),
				n = _ => {
					const b = i(_);
					return b && b.email_verified
				},
				o = _ => {
					const b = f(_);
					return b && b.preferences.marketing_communication
				},
				a = _ => _.userDetails,
				v = (0, e.P1)("userDetails", a),
				p = _ => {
					const b = v(_);
					return b && b["2FA-RECOVERY"] === "scheduled"
				},
				d = _ => {
					const b = v(_);
					return b && b["2FA-RECOVERY"] === "interrupted"
				},
				E = _ => {
					const b = v(_);
					return b == null ? void 0 : b["NEW-USER-EMAIL"]
				},
				T = _ => _.gates.assignments,
				y = (_, b) => _ && _[b];

			function g(_, b) {
				const I = T(_);
				return I ? y(I, b) : void 0
			}
			const O = (_, b) => g(_, b) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$4: function() {
					return A
				},
				$t: function() {
					return tt
				},
				A4: function() {
					return T
				},
				Cu: function() {
					return y
				},
				DQ: function() {
					return ie
				},
				Ej: function() {
					return C
				},
				FH: function() {
					return O
				},
				ID: function() {
					return j
				},
				Iu: function() {
					return E
				},
				Ko: function() {
					return Se
				},
				Le: function() {
					return he
				},
				Ly: function() {
					return Y
				},
				M3: function() {
					return V
				},
				N8: function() {
					return ze
				},
				NY: function() {
					return $
				},
				Ns: function() {
					return J
				},
				Ox: function() {
					return Ie
				},
				P4: function() {
					return k
				},
				RO: function() {
					return K
				},
				Tr: function() {
					return Fe
				},
				U: function() {
					return g
				},
				Ug: function() {
					return b
				},
				V6: function() {
					return Ce
				},
				WR: function() {
					return nt
				},
				Xg: function() {
					return d
				},
				ZB: function() {
					return se
				},
				_y: function() {
					return F
				},
				bR: function() {
					return L
				},
				cU: function() {
					return ot
				},
				cg: function() {
					return oe
				},
				d2: function() {
					return q
				},
				il: function() {
					return ne
				},
				jN: function() {
					return P
				},
				jg: function() {
					return W
				},
				kC: function() {
					return D
				},
				kf: function() {
					return je
				},
				ko: function() {
					return X
				},
				mK: function() {
					return dt
				},
				nA: function() {
					return p
				},
				oY: function() {
					return R
				},
				qM: function() {
					return De
				},
				rq: function() {
					return re
				},
				tS: function() {
					return I
				},
				tU: function() {
					return te
				},
				vB: function() {
					return gt
				},
				vM: function() {
					return z
				},
				wH: function() {
					return _
				},
				wn: function() {
					return Ee
				},
				xU: function() {
					return ee
				},
				xw: function() {
					return Me
				},
				z5: function() {
					return M
				},
				zW: function() {
					return Ue
				},
				zh: function() {
					return B
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				r = t("../react/app/redux/normalizer.js"),
				i = t("../../../../node_modules/lodash/get.js"),
				u = t.n(i),
				s = t("../../../../node_modules/moment/moment.js"),
				m = t.n(s),
				c = t("../react/common/constants/billing/index.ts");

			function l(Q) {
				for (var ce = 1; ce < arguments.length; ce++) {
					var fe = arguments[ce] != null ? Object(arguments[ce]) : {},
						Oe = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && Oe.push.apply(Oe, Object.getOwnPropertySymbols(fe).filter(function(xe) {
						return Object.getOwnPropertyDescriptor(fe, xe).enumerable
					})), Oe.forEach(function(xe) {
						f(Q, xe, fe[xe])
					})
				}
				return Q
			}

			function f(Q, ce, fe) {
				return ce = n(ce), ce in Q ? Object.defineProperty(Q, ce, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[ce] = fe, Q
			}

			function n(Q) {
				var ce = o(Q, "string");
				return typeof ce == "symbol" ? ce : String(ce)
			}

			function o(Q, ce) {
				if (typeof Q != "object" || Q === null) return Q;
				var fe = Q[Symbol.toPrimitive];
				if (fe !== void 0) {
					var Oe = fe.call(Q, ce || "default");
					if (typeof Oe != "object") return Oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ce === "string" ? String : Number)(Q)
			}
			const a = (0, r.P1)("zone", Q => Q.zone),
				v = Q => {
					var ce;
					return (ce = Q.zoneVersioning) === null || ce === void 0 ? void 0 : ce.zoneVersionSelector
				},
				p = (0, e.P1)(a, v, (Q, ce) => {
					var fe, Oe, xe;
					let Ve;
					if (Array.isArray(Q) && Q.length === 1 ? Ve = Q[0] : Q && !Array.isArray(Q) && (Ve = Q), !Ve) return;
					const Ze = !!(ce == null ? void 0 : ce.enabled);
					return l({}, Ve, Ve.name && {
						name: Ze ? ce.rootZoneName : Ve.name
					}, {
						versioning: {
							enabled: Ze,
							isRoot: !((fe = Ve.name) === null || fe === void 0 ? void 0 : fe.endsWith(".config.cfdata.org")),
							version: Ze ? ce.selectedVersion : 0,
							rootZoneId: Ze ? ce.rootZoneId : (Oe = (xe = Ve) === null || xe === void 0 ? void 0 : xe.id) !== null && Oe !== void 0 ? Oe : ""
						}
					})
				}),
				d = Q => Q.zone,
				E = Q => Q.zone.isRequesting,
				T = (0, e.P1)(p, d, (Q, ce) => ({
					data: Q,
					meta: ce
				})),
				y = Q => {
					var ce, fe;
					return (ce = (fe = p(Q)) === null || fe === void 0 ? void 0 : fe.id) !== null && ce !== void 0 ? ce : ""
				},
				g = Q => Q.zones,
				O = Q => Q.zonesRoot,
				_ = Q => Q.zonesAccount,
				b = (0, r.P1)("zones", g),
				I = (0, r.P1)("zonesRoot", O),
				A = (0, r.P1)("zonesAccount", _);

			function D(Q) {
				const ce = p(Q);
				return ce ? ce.created_on : null
			}
			const L = Q => {
				var ce;
				const fe = p(Q);
				return l({}, fe, {
					id: (fe == null || (ce = fe.versioning) === null || ce === void 0 ? void 0 : ce.enabled) ? fe == null ? void 0 : fe.versioning.rootZoneId : fe == null ? void 0 : fe.id
				})
			};

			function C(Q, ce, fe) {
				const Oe = D(Q);
				if (!Oe) return;
				const xe = m().duration(ce, fe),
					Ve = new Date(Oe),
					Ze = new Date(new Date().getTime() - xe.asMilliseconds());
				return Ve.getTime() > Ze.getTime()
			}

			function k(Q) {
				const ce = p(Q);
				return ce ? ce.status : null
			}

			function R(Q) {
				const ce = p(Q);
				return ce ? ce.type : null
			}

			function P(Q) {
				return (Q == null ? void 0 : Q.plan_pending) ? Q == null ? void 0 : Q.plan_pending : Q == null ? void 0 : Q.plan
			}

			function z(Q) {
				const ce = p(Q);
				if (!ce) return;
				const fe = P(ce);
				return fe && fe.legacy_id
			}

			function te(Q, ce) {
				const fe = P(Q);
				return !!fe && c.Gs.indexOf(fe.legacy_id) >= c.Gs.indexOf(ce)
			}

			function ee(Q) {
				return !!Q && Q.status === "initializing"
			}

			function q(Q) {
				return !!Q && Q.status === "pending"
			}

			function B(Q) {
				return !!Q && Q.status === "active"
			}

			function U(Q, ce) {
				if (!Q) return !1;
				const fe = P(Q);
				return !!fe && fe.legacy_id === ce
			}

			function X(Q) {
				return U(Q, "enterprise")
			}
			const K = Q => X(p(Q));

			function M(Q) {
				return U(Q, "business")
			}
			const j = Q => M(p(Q));

			function F(Q) {
				return U(Q, "pro")
			}
			const G = Q => F(p(Q));

			function J(Q) {
				return U(Q, "free")
			}
			const ne = Q => J(p(Q));

			function Y(Q) {
				return !X(Q)
			}

			function ue(Q) {
				return Q && Q.owner
			}

			function W(Q, ce) {
				const fe = ue(ce);
				return !!fe && fe.type === "user" && fe.id === Q.id
			}

			function re(Q) {
				const ce = p(Q);
				return !!ce && ce.type === "partial"
			}

			function $(Q) {
				const ce = p(Q);
				return !!ce && ce.type === "secondary"
			}
			const oe = Q => {
					var ce;
					const fe = p(Q);
					return !!(fe == null ? void 0 : fe.host) && !!((ce = fe.plan) === null || ce === void 0 ? void 0 : ce.externally_managed)
				},
				ie = Q => {
					const ce = b(Q);
					return ce && ce.some(X)
				},
				Ee = (Q, ce) => {
					const fe = p(Q);
					return fe && fe.betas ? fe.betas.includes(ce) : !1
				},
				se = (Q, ...ce) => u()(Q, ["zoneFlags", "data", ...ce]),
				he = (Q, ...ce) => u()(Q, ["accountFlags", "data", ...ce]),
				De = Q => Q.accountFlags.isRequesting,
				Me = Q => Q.zoneFlags.isRequesting,
				Fe = (Q, ...ce) => u()(Q, ["zoneFlagsChanges", "data", ...ce]),
				Se = Q => Q.zoneFlagsChanges.isRequesting,
				ot = Q => Q.zoneFlags && Q.zoneFlags.data,
				Ke = Q => Q.zoneFlags,
				qe = (0, e.P1)(ot, Ke, (Q, ce) => ({
					data: Q,
					meta: ce
				})),
				ze = (0, r.P1)("abuseUrls", Q => Q.overview.abuseUrls),
				V = Q => {
					const ce = p(Q);
					return ce ? `/${ce.account.id}/${ce.name}` : null
				},
				Ce = Q => Q.zoneMarketingCampaigns,
				je = Q => Q.overview.zoneBlocks.data,
				Ue = Q => Q.overview.zoneBlocks.isRequesting,
				tt = Q => Q.overview.zoneBlocks.hasData,
				dt = Q => {
					var ce, fe;
					return (Q == null || (ce = Q.overview.zoneBlocks) === null || ce === void 0 || (fe = ce.paginationData) === null || fe === void 0 ? void 0 : fe.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				gt = Q => Q.overview.zoneBlocksReview.isRequesting,
				Ie = Q => Q.overview.zoneHold,
				nt = (0, r.P1)("zoneHold", Ie)
		},
		"../react/common/utils/formatDate.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			h.Z = (r, i, u = !1) => (0, e.p6)(r, i, u)
		},
		"../react/common/utils/getEnvironment.ts": function(x, h, t) {
			"use strict";
			var e = t("../../../../node_modules/cookie/index.js"),
				r = t("../functions/utils/preview-deploy-helpers.ts"),
				i = t("../functions/utils/constants.ts");
			const u = () => {
				var s, m, c;
				const f = e.parse(document.cookie)[i.b1];
				let n = null;
				f && (n = (0, r.E9)(f));
				let o = "production";
				switch (!0) {
					case ((s = n) === null || s === void 0 ? void 0 : s.projectType) === "canary":
						o = "canary";
						break;
					case ((m = window) === null || m === void 0 || (c = m.build) === null || c === void 0 ? void 0 : c.isPreviewDeploy):
						o = "preview";
						break
				}
				return o
			};
			h.Z = u
		},
		"../react/common/utils/hasRole.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				n: function() {
					return r
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const r = (i, u) => {
				const {
					roles: s = []
				} = (0, e.uF)(i) || {};
				return u.some(m => s.includes(m))
			}
		},
		"../react/common/utils/isGuards.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$K: function() {
					return c
				},
				Q$: function() {
					return i
				},
				t: function() {
					return m
				},
				v5: function() {
					return u
				},
				zE: function() {
					return s
				}
			});
			var e = t("../react/common/constants/index.ts"),
				r = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const i = l => l ? ["page", "per_page", "count", "total_count"].every(n => n in l && l[n]) : !1,
				u = (l = "") => e.Dy.includes(l.toLowerCase()),
				s = l => l !== null && typeof l == "object" && "name" in l && "size" in l && "type" in l && typeof l.slice == "function",
				m = l => (0, r.Z)(l),
				c = l => l != null
		},
		"../react/common/utils/oidc.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				c: function() {
					return e
				},
				e: function() {
					return r
				}
			});
			let e = function(i) {
				return i.Apple = "apple", i.Google = "google", i
			}({});
			const r = (i, u) => {
				const s = "production",
					m = `oidc${s==="staging"?"-staging":""}.iam.cfapi.net`,
					l = new URLSearchParams(window.location.search).get("login_challenge");
				let f = `https://${m}/api/v1/sso/init?client=${i}&env=${s}`;
				return u && (f = f + `&jwt=${u}`), l && (f += `&login_challenge=${encodeURIComponent(l)}`), f
			}
		},
		"../react/common/utils/useQueryCache.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				o: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function r(c) {
				for (var l = 1; l < arguments.length; l++) {
					var f = arguments[l] != null ? Object(arguments[l]) : {},
						n = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(f).filter(function(o) {
						return Object.getOwnPropertyDescriptor(f, o).enumerable
					})), n.forEach(function(o) {
						i(c, o, f[o])
					})
				}
				return c
			}

			function i(c, l, f) {
				return l = u(l), l in c ? Object.defineProperty(c, l, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[l] = f, c
			}

			function u(c) {
				var l = s(c, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function s(c, l) {
				if (typeof c != "object" || c === null) return c;
				var f = c[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(c, l || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(c)
			}
			const m = c => {
				const l = (0, e.useQueryClient)(),
					f = g => {
						var O;
						return l.getQueriesData((O = g) !== null && O !== void 0 ? O : c)
					},
					n = g => {
						var O;
						return l.getQueryData((O = g) !== null && O !== void 0 ? O : c)
					},
					o = g => {
						var O;
						return l.getQueriesData({
							queryKey: (O = g) !== null && O !== void 0 ? O : c,
							stale: !0
						})
					},
					a = (g, O) => {
						var _;
						l.setQueryData((_ = O) !== null && _ !== void 0 ? _ : c, g)
					},
					v = async g => {
						var O;
						await l.refetchQueries((O = g) !== null && O !== void 0 ? O : c)
					}, p = async (g, O) => {
						var _, b;
						await l.invalidateQueries((_ = g) !== null && _ !== void 0 ? _ : c, r({
							refetchActive: !1
						}, (b = O) !== null && b !== void 0 ? b : {}))
					}, d = async (g, O) => {
						const _ = g || (b => {
							var I;
							return (b == null || (I = b.queryKey) === null || I === void 0 ? void 0 : I[0]) === c
						});
						await l.invalidateQueries(r({
							predicate: _,
							refetchActive: !1,
							refetchInactive: !1
						}, O))
					};
				return {
					refetch: v,
					cancelData: async () => {
						await l.cancelQueries(c)
					},
					invalidate: p,
					setData: a,
					getDataStale: o,
					getData: f,
					prefetchQuery: (g, O) => {
						var _;
						return l.prefetchQuery((_ = O) !== null && _ !== void 0 ? _ : c, g)
					},
					getQueryData: n,
					predicateInvalidate: d,
					batchInvalidate: async ({
						queryKeysToInvalidate: g = [],
						queryKeysToPredicateInvalidate: O = [],
						refetchActive: _ = !1,
						refetchInactive: b = !1
					}) => {
						const I = g.map(D => p(D)),
							A = O.map(D => d(L => {
								var C;
								return (L == null || (C = L.queryKey) === null || C === void 0 ? void 0 : C[0]) === D
							}, {
								refetchActive: _,
								refetchInactive: b
							}));
						await Promise.all([...I, ...A])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(x, h, t) {
			"use strict";
			t.d(h, {
				K2: function() {
					return r
				},
				Lb: function() {
					return i
				},
				XI: function() {
					return u
				},
				bK: function() {
					return l
				},
				jk: function() {
					return c
				},
				wb: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const r = f => /^https?:\/\/(.*)/.test(f),
				i = f => e.default.hostname.test(f),
				u = f => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(f),
				s = f => /^[!-~]+$/.test(f),
				m = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				c = f => m.test(f),
				l = f => !!f && !!f.length && /^[ -~]+$/.test(f)
		},
		"../react/pages/abuse/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Cg: function() {
					return v
				},
				EO: function() {
					return l
				},
				Iy: function() {
					return c
				},
				RV: function() {
					return a
				},
				R_: function() {
					return m
				},
				Vq: function() {
					return g
				},
				Y0: function() {
					return y
				},
				bL: function() {
					return _
				},
				bx: function() {
					return T
				},
				dM: function() {
					return I
				},
				dV: function() {
					return b
				},
				eM: function() {
					return o
				},
				i9: function() {
					return s
				},
				nq: function() {
					return d
				},
				pj: function() {
					return n
				},
				to: function() {
					return O
				},
				xR: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				i = t("../react/pages/abuse/abuse.translations.ts"),
				u = t("../react/pages/abuse/types.ts");
			const s = "customer-abuse-reports-table-filter-bar",
				m = "abuse-reports-table-tooltip",
				c = "abuse-reports-cache-rate-limits-table-tooltip",
				l = "abuse-reports-blocks-tables-tooltip",
				f = "customer-abuse-reports-table-filter-bar",
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
			let a = function(A) {
				return A.BLOCKED_CONTENT = "blocked-content", A.CACHE_RATE_LIMITS = "cache-rate-limits", A
			}({});
			const v = [{
					title: i.keys.tab_titles.blocked_content,
					url: `/${a.BLOCKED_CONTENT}`
				}, {
					title: i.keys.tab_titles.cache_rate_limits,
					url: `/${a.CACHE_RATE_LIMITS}`
				}],
				p = {
					accepted: "gray",
					in_review: "gray"
				},
				d = {
					active: "red",
					cancelled: "gray",
					in_review: "blue",
					pending: "orange",
					removed: "gray"
				},
				E = null,
				T = ["active", "cancelled", "in_review", "pending", "removed"],
				y = ["accepted", "in_review"];
			let g = function(A) {
				return A.APPEAL_MITIGATION_SUBMIT = "appeal abuse report mitigation submit", A.APPEAL_MITIGATION_SUCCESS = "appeal abuse report mitigation success", A.APPEAL_MITIGATION_FAILURE = "appeal abuse report mitigation failure", A.CLICK_ABUSE_REPORT_ID = "click abuse report id", A.CLICK_ABUSE_REPORT_MITIGATIONS_LINK = "click abuse report mitigations link", A.ADD_FILTER = "Add filter", A.REMOVE_FILTER = "Remove filter", A.REMOVE_ALL_FILTERS = "Remove all filters", A.NEXT_PAGE = "go to next page", A.PREV_PAGE = "go to prev page", A.GO_TO_PAGE = "go to page", A.SET_PAGE_SIZE = "set page size", A.COPY_TABLE_CELL = "copy table cell", A
			}({});
			const O = {
					initialPaginationState: {
						page: 1,
						perPage: 25
					},
					initialToolbarState: {},
					initialSortState: {
						name: u.mu.CDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: [u.mu.Domain, u.mu.Status, u.mu.Type],
						queryParamStrategy: "sync-with-table-state"
					},
					filters: {
						f1: u.mu.Domain,
						f2: u.mu.Status,
						f3: u.mu.Type,
						f4: "startDate",
						f5: "endDate",
						f6: "timeWindow"
					}
				},
				_ = {
					initialPaginationState: {
						page: 1,
						perPage: 25
					},
					initialToolbarState: {},
					initialSortState: {
						name: u.XO.EffectiveDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: [u.XO.Status],
						queryParamStrategy: "sync-with-table-state"
					},
					filters: {
						f1: u.XO.Status,
						f2: "startDate",
						f3: "endDate",
						f4: "timeWindow"
					}
				},
				b = {
					initialPaginationState: {
						page: 1,
						perPage: 5
					},
					initialToolbarState: {},
					initialSortState: {
						name: u.DT.EnforcementDate,
						direction: e.Sr.desc
					}
				},
				I = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: u.DT.CreatedDate,
						direction: e.Sr.desc
					}
				}
		},
		"../react/pages/abuse/types.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				DT: function() {
					return u
				},
				MY: function() {
					return i
				},
				XO: function() {
					return e
				},
				Zy: function() {
					return l
				},
				mu: function() {
					return n
				},
				ut: function() {
					return s
				}
			});
			let e = function(o) {
				return o.Type = "type", o.EffectiveDate = "effective_date", o.Status = "status", o.EntityType = "entity_type", o.EntityId = "entity_id", o
			}({});
			const r = null,
				i = {
					BLOCK_URL: "block_url",
					RATE_LIMIT_CACHE: "rate_limit_cache",
					ACCOUNT_SUSPEND: "account_suspend"
				};
			let u = function(o) {
					return o.BlockType = "blockType", o.CreatedDate = "created", o.EnforcementDate = "enforcement_date", o.Status = "status", o.EntityType = "entity_type", o.EntityId = "entity_id", o
				}({}),
				s = function(o) {
					return o.JIRA = "jira", o.ZENDESK = "zendesk", o.ABUSE_REPORT = "abuse_report", o.CSAM_MATCH = "csam_match", o
				}({}),
				m = function(o) {
					return o.ID = "id", o.DOMAIN = "domain", o.CREATED_BEFORE = "created_before", o.CREATED_AFTER = "created_after", o.STATUS = "status", o.TYPE = "type", o.MITIGATION_STATUS = "mitigation_status", o
				}({}),
				c = function(o) {
					return o.Domain = "domain", o.Status = "status", o.Type = "type", o
				}({}),
				l = function(o) {
					return o.DMCA = "DMCA", o.TRADEMARK = "TM", o.PHISHING = "PHISH", o.GENERAL = "GEN", o.REGISTRAR_WHOIS = "REG_WHO", o.EMERGENCY = "EMER", o.NCSEI = "NCSEI", o.THREAT = "THREAT", o
				}({});
			const f = [l.DMCA, l.TRADEMARK, l.PHISHING, l.GENERAL, l.REGISTRAR_WHOIS, l.EMERGENCY, l.NCSEI, l.THREAT];
			let n = function(o) {
				return o.Id = "id", o.CDate = "cdate", o.Domain = "domain", o.Type = "type", o.Status = "status", o.AcceptedUrls = "accepted_urls", o
			}({})
		},
		"../react/pages/ai-zone/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$0: function() {
					return r
				},
				A3: function() {
					return d
				},
				AG: function() {
					return s
				},
				Al: function() {
					return l
				},
				NN: function() {
					return f
				},
				Ot: function() {
					return v
				},
				PAY_PER_CRAWL: function() {
					return n
				},
				Pd: function() {
					return a
				},
				TR: function() {
					return c
				},
				UK: function() {
					return p
				},
				c1: function() {
					return i
				},
				nJ: function() {
					return e
				},
				nb: function() {
					return m
				},
				qR: function() {
					return u
				},
				zg: function() {
					return o
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
				r = [...new Set([...e.map(E => E.operator)])].sort((E, T) => E.localeCompare(T)),
				i = [...new Set([...e.map(E => E.category)])].sort((E, T) => E.localeCompare(T)),
				u = [...new Set([...e.map(E => E.userAgent)])].sort((E, T) => E.localeCompare(T)),
				s = [...new Set([...e.flatMap(E => E.detectionIds)])].sort(),
				m = ["past_24h", "past_7d", "past_14d", "past_month"],
				c = "[CF AI Audit]",
				l = "AI Audit - Block AI bots by User Agent",
				f = "AI Audit - Block AI bots by Bot Detection IDs",
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
				o = "618578",
				a = ["/robots.txt", "/crawlers.json", "/security.txt", "/.well-known/security.txt", "/ads.txt"],
				v = "\u2014",
				p = {
					Google: ["google.com", "youtube.com"],
					Microsoft: ["bing.com", "msn.com", "microsoft.com"],
					Meta: ["facebook.com", "instagram.com", "whatsapp.com", "meta.com"],
					Amazon: ["amazon.com", "aws.amazon.com", "alexa.com"],
					Apple: ["apple.com", "icloud.com", "me.com", "mac.com"],
					OpenAI: ["openai.com", "chatgpt.com"],
					Anthropic: ["anthropic.com", "claude.ai"],
					"Internet Archive": ["archive.org"],
					"Common Crawl": ["commoncrawl.org"],
					ByteDance: ["bytedance.com", "tiktok.com", "douyin.com"],
					DuckDuckGo: ["duckduckgo.com", "duck.com"],
					Mistral: ["mistral.ai"],
					Novellum: ["novellum.ai"],
					Perplexity: ["perplexity.ai"],
					Huawei: ["huawei.com", "huaweicloud.com"],
					"ProRata.ai": ["prorata.ai"],
					Timpi: ["timpi.io"]
				};
			let d = function(E) {
				return E.BOT_ACTION_CHANGED = "change bot action", E.TERMS_DECISION = "decide terms acceptance", E.STRIPE_CONNECT = "connect stripe account", E.STRIPE_ACCOUNT_VIEWED = "view stripe account", E.PPC_STATUS_CHANGED = "toggle pay per crawl", E.PPC_PRICE_CHANGED = "update crawl price", E.ADD_FILTER = "Add filter", E.REMOVE_FILTER = "Remove filter", E.REMOVE_ALL_FILTERS = "Remove all filters", E.CHANGE_TIME = "Change time window", E
			}({})
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(x, h, t) {
			"use strict";
			t.d(h, {
				DZ: function() {
					return u
				},
				GA: function() {
					return f
				},
				hT: function() {
					return m
				},
				p6: function() {
					return i
				},
				qc: function() {
					return s
				},
				w9: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e);
			const i = a => r().utc(a).format("YYYY-MM-DD"),
				u = a => r().utc(a).format(),
				s = a => r().utc(a).startOf("minute").format(),
				m = a => new Date(a),
				c = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				l = a => {
					const v = a / 60 / 60 / 1e3;
					return c[Object.keys(c).sort((p, d) => d - p).find(p => v >= p)]
				},
				f = (a, v = p => p.avg && p.avg.sampleInterval ? p.avg.sampleInterval : 1) => a.length === 0 ? 1 : a.reduce((p, d) => p + v(d), 0) / a.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				o = a => n[a]
		},
		"../react/pages/analytics/eos/resources/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/blocked-content/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				BW: function() {
					return f
				},
				Gk: function() {
					return d
				},
				Jr: function() {
					return n
				},
				LA: function() {
					return a
				},
				Wk: function() {
					return p
				},
				_V: function() {
					return l
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
				i = t("../react/pages/blocked-content/types.ts");

			function u(E) {
				for (var T = 1; T < arguments.length; T++) {
					var y = arguments[T] != null ? Object(arguments[T]) : {},
						g = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(y).filter(function(O) {
						return Object.getOwnPropertyDescriptor(y, O).enumerable
					})), g.forEach(function(O) {
						s(E, O, y[O])
					})
				}
				return E
			}

			function s(E, T, y) {
				return T = m(T), T in E ? Object.defineProperty(E, T, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[T] = y, E
			}

			function m(E) {
				var T = c(E, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function c(E, T) {
				if (typeof E != "object" || E === null) return E;
				var y = E[Symbol.toPrimitive];
				if (y !== void 0) {
					var g = y.call(E, T || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(E)
			}
			const l = "blocked-content-table-tooltip",
				f = {
					account: {
						basePage: (0, r.BC)`/${"accountId"}/blocked-content`,
						[i.$E.Active]: (0, r.BC)`/${"accountId"}/blocked-content/active`,
						[i.$E.Pending]: (0, r.BC)`/${"accountId"}/blocked-content/pending`
					},
					securityCenter: {
						basePage: (0, r.BC)`/${"accountId"}/security-center/blocked-content`,
						[i.$E.Active]: (0, r.BC)`/${"accountId"}/security-center/blocked-content/active`,
						[i.$E.Pending]: (0, r.BC)`/${"accountId"}/security-center/blocked-content/pending`
					}
				},
				n = [{
					category: i.$E.Pending,
					title: "security_center.blocked_content.pending_tab",
					url: "/pending"
				}, {
					category: i.$E.Active,
					title: "security_center.blocked_content.active_tab",
					url: "/active"
				}],
				o = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					cancelled: "gray"
				},
				a = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				v = {
					[i.$E.Active]: [i.M3.Active, i.M3.InReview],
					[i.$E.Pending]: [i.M3.Pending, i.M3.Cancelled]
				},
				p = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: i.fL.EnforcementDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: Object.values(i.GH)
					},
					filters: Object.values(i.GH).reduce((E, T) => u({}, E, {
						[T]: T
					}), {})
				};
			let d = function(E) {
				return E.COPY_URL = "copy blocked content url", E.REQUEST_REVIEW = "request blocked content review", E.ADD_FILTER = "Add filter", E.REMOVE_FILTER = "Remove filter", E
			}({})
		},
		"../react/pages/blocked-content/types.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$E: function() {
					return e
				},
				GH: function() {
					return s
				},
				Ib: function() {
					return i
				},
				M3: function() {
					return r
				},
				Qy: function() {
					return u
				},
				fL: function() {
					return m
				}
			});
			let e = function(l) {
					return l.Pending = "pending", l.Active = "active", l
				}({}),
				r = function(l) {
					return l.Active = "active", l.InReview = "in_review", l.Pending = "pending", l.Cancelled = "cancelled", l
				}({});
			const i = [r.Pending, r.Cancelled],
				u = [r.Active, r.InReview];
			let s = function(l) {
					return l.Domain = "domain", l.Status = "status", l.BlockType = "blockType", l
				}({}),
				m = function(l) {
					return l.CreatedDate = "created", l.EnforcementDate = "enforcementDate", l.BlockType = "blockType", l.Hostname = "hostname", l.Status = "status", l
				}({}),
				c = function(l) {
					return l.Removed = "removed", l.Misclassified = "misclassified", l
				}({})
		},
		"../react/pages/caching/tracking.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CACHE_PURGE = "submit custom purge", r.TIERED_CACHE = "select tiered cache topology", r.CACHE_ANALYTICS = "load cache analytics data", r.CHANGED_ZONE_SETTINGS = "change zone setting", r
			}({})
		},
		"../react/pages/d1/routes.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				H: function() {
					return i
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
				i = {
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
		"../react/pages/dns/api.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				BI: function() {
					return T
				},
				Q8: function() {
					return a
				},
				YJ: function() {
					return v
				},
				hs: function() {
					return f
				},
				mW: function() {
					return d
				},
				u1: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function u(y) {
				for (var g = 1; g < arguments.length; g++) {
					var O = arguments[g] != null ? Object(arguments[g]) : {},
						_ = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(O).filter(function(b) {
						return Object.getOwnPropertyDescriptor(O, b).enumerable
					})), _.forEach(function(b) {
						s(y, b, O[b])
					})
				}
				return y
			}

			function s(y, g, O) {
				return g = m(g), g in y ? Object.defineProperty(y, g, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[g] = O, y
			}

			function m(y) {
				var g = c(y, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function c(y, g) {
				if (typeof y != "object" || y === null) return y;
				var O = y[Symbol.toPrimitive];
				if (O !== void 0) {
					var _ = O.call(y, g || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(y)
			}
			const l = {
					settings: (0, i.BC)`/zones/${"zoneId"}/dns_settings`
				},
				f = {
					fetchZoneDnsSettings: async y => {
						try {
							return (await (0, e.get)(l.settings.toUrl({
								zoneId: y
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					patchZoneDnsSettings: async (y, g) => await (0, e.patch)(l.settings.toUrl({
						zoneId: y
					}), {
						body: g
					})
				},
				n = {
					settings: (0, i.BC)`/accounts/${"accountId"}/dns_settings`
				},
				o = {
					fetchAccountDnsSettings: async y => {
						try {
							return (await (0, e.get)(n.settings.toUrl({
								accountId: y
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					patchAccountDnsSettings: async (y, g) => await (0, e.patch)(n.settings.toUrl({
						accountId: y
					}), {
						body: g
					})
				},
				a = {
					dns_records: (0, i.BC)`/zones/${"zoneId"}/dns_records`,
					batch: (0, i.BC)`/zones/${"zoneId"}/dns_records/batch`
				},
				v = {
					getMaxRecords: async (y, g, O, _, b) => {
						var I;
						return (I = (await (0, e.get)(a.dns_records.toUrl({
							zoneId: y
						}), {
							parameters: u({
								per_page: g
							}, _ ? {
								search: _
							} : {}, b || {}, O)
						})).body) === null || I === void 0 ? void 0 : I.result
					},
					deleteRecords: async (y, g) => await (0, e.post)(a.batch.toUrl({
						zoneId: y
					}), {
						body: {
							deletes: g
						}
					}),
					patchRecords: async (y, g) => await (0, e.post)(a.batch.toUrl({
						zoneId: y
					}), {
						body: {
							patches: g
						}
					})
				},
				p = {
					custom_ns: (0, i.BC)`/zones/${"zoneId"}/custom_ns`,
					zone: (0, i.BC)`/zones/${"zoneId"}`
				},
				d = {
					fetchZoneCustomNs: async y => {
						try {
							return (await (0, e.get)(p.custom_ns.toUrl({
								zoneId: y
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					fetchZoneVanityNameservers: async y => {
						try {
							return (await (0, e.get)(p.zone.toUrl({
								zoneId: y
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					createZoneCustomNameserver: async (y, g) => await (0, e.patch)(p.zone.toUrl({
						zoneId: y
					}), {
						body: {
							vanity_name_servers: g
						}
					}),
					assignZoneCustomNsSet: async (y, g) => await (0, e.put)(p.custom_ns.toUrl({
						zoneId: y
					}), {
						body: {
							enabled: !0,
							ns_set: g
						}
					}),
					disableZoneCustomNs: async y => await (0, e.put)(p.custom_ns.toUrl({
						zoneId: y
					}), {
						body: {
							enabled: !1
						}
					})
				},
				E = {
					custom_ns: (0, i.BC)`/accounts/${"accountId"}/custom_ns`,
					delete: (0, i.BC)`/accounts/${"accountId"}/custom_ns/${"nsName"}`
				},
				T = {
					fetchAccounCustomNs: async y => {
						try {
							return (await (0, e.get)(E.custom_ns.toUrl({
								accountId: y
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					createAccountCustomNs: async (y, g) => await (0, e.post)(E.custom_ns.toUrl({
						accountId: y
					}), {
						body: g
					}),
					deleteAccountCustomNs: async (y, g) => await (0, e.del)(E.delete.toUrl({
						accountId: y,
						nsName: g
					}))
				}
		},
		"../react/pages/dns/dns-records/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				U: function() {
					return e
				},
				X: function() {
					return r
				}
			});
			let e = function(i) {
				return i.DNS_RECORD_CREATE = "create DNS records", i.DNS_RECORD_UPDATE = "update DNS records", i.DNS_RECORD_DELETE = "delete DNS records", i.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", i
			}({});
			const r = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/dns/hooks/useZoneDnsSettings.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				c: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/app/redux/index.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/pages/dns/api.ts");
			const s = "dns-zone-settings-query-key",
				m = () => {
					var c;
					const l = (0, e.useQueryClient)(),
						f = (0, r.p4)(i.nA),
						n = (c = f == null ? void 0 : f.id) !== null && c !== void 0 ? c : "",
						{
							data: o,
							isError: a,
							isLoading: v,
							refetch: p
						} = (0, e.useQuery)([n, s], () => u.hs.fetchZoneDnsSettings(n), {
							enabled: !!n,
							refetchOnWindowFocus: !1
						}),
						{
							mutate: d,
							isLoading: E,
							isSuccess: T,
							isError: y
						} = (0, e.useMutation)({
							mutationFn: g => u.hs.patchZoneDnsSettings(n, g),
							onSuccess: async () => await l.refetchQueries({
								queryKey: [n, s]
							})
						});
					return {
						zoneDnsData: o,
						isError: a,
						isLoading: v,
						isSuccess: T,
						refetch: p,
						mutateZoneDnsSettings: d,
						isUpdating: E,
						isUpdateError: y
					}
				}
		},
		"../react/pages/dns/types.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				DU: function() {
					return e
				},
				LY: function() {
					return s
				},
				Nc: function() {
					return r
				},
				U7: function() {
					return i
				},
				g9: function() {
					return u
				}
			});
			let e = function(m) {
				return m.STANDARD = "cloudflare.standard", m.RANDOM = "cloudflare.standard.random", m.FOUNDATION = "cloudflare.foundation_dns", m.CUSTOM_ACCOUNT = "custom.account", m.CUSTOM_ZONE = "custom.zone", m
			}({});
			const r = {
				[e.STANDARD]: "account.dns_settings.zone_defaults.table.standard",
				[e.RANDOM]: "account.dns_settings.zone_defaults.table.random",
				[e.FOUNDATION]: "account.dns_settings.zone_defaults.table.foundation",
				[e.CUSTOM_ACCOUNT]: "account.dns_settings.zone_defaults.table.custom"
			};
			let i = function(m) {
					return m.NAME = "queryName", m.RESPONSE_CODE = "responseCode", m.TYPE = "queryType", m.SOURCE_IP = "sourceIP", m.DESTINATION_IP = "destinationIP", m.PROTOCOL = "protocol", m.IP_VERSION = "ipVersion", m.NAME_AND_TYPE = "nameAndType", m.QUERY_TOTALS = "queryTotals", m.COLO = "coloName", m
				}({}),
				u = function(m) {
					return m.TOTAL = "total", m.PER_SECOND = "queries_per_second", m.RESPONSE_AVG = "response_average", m
				}({}),
				s = function(m) {
					return m.MNAME = "soa.mname", m.RNAME = "soa.rname", m.REFRESH = "soa.refresh", m.RETRY = "soa.retry", m.EXPIRE = "soa.expire", m.RECORD_TTL = "soa.ttl", m.MIN_TTL = "soa.min_ttl", m
				}({})
		},
		"../react/pages/email/types.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				BB: function() {
					return r
				},
				Pm: function() {
					return i
				},
				UZ: function() {
					return e
				}
			});
			let e = function(s) {
				return s.ROOT = "root", s.DSTADDRS_CARD = "dstaddrs_card", s.RULES_CARD = "rules_card", s.CATCHALL_CARD = "catchall_card", s.SETTINGS_PAGE = "settings_page", s.WORKERS_PAGE = "workers_page", s
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
			let i = function(s) {
				return s[s.Verified = 0] = "Verified", s[s.Pending = 1] = "Pending", s[s.Missing = 2] = "Missing", s[s.WorkerNotFound = 3] = "WorkerNotFound", s[s.Unknown = 4] = "Unknown", s[s.Loading = 5] = "Loading", s
			}({});
			const u = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				_: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/pages/home/alerts/routes.ts");
			const i = r._.createAlertWithSelection,
				u = r._.editAlert,
				s = (0, e.BC)`${i}/subtype`,
				m = (0, e.BC)`${i}/stepper`,
				c = (0, e.BC)`${m}/${"stepName"}`,
				l = (0, e.BC)`${m}/details`,
				f = (0, e.BC)`${m}/data-centers`,
				n = (0, e.BC)`${m}/ramps`,
				o = (0, e.BC)`${m}/threshold`,
				a = (0, e.BC)`${m}/review`,
				v = (0, e.BC)`${m}/confirm`,
				p = (0, e.BC)`${u}/stepper`,
				d = (0, e.BC)`${p}/${"stepName"}`,
				E = (0, e.BC)`${p}/details`,
				T = (0, e.BC)`${p}/data-centers`,
				y = (0, e.BC)`${p}/ramps`,
				g = (0, e.BC)`${p}/threshold`,
				O = (0, e.BC)`${p}/review`,
				_ = (0, e.BC)`${p}/confirm`,
				b = {
					magicTunnelHealthChooseSubType: s,
					magicTunnelHealthCreateStepperBase: m,
					magicTunnelHealthCreateStepper: c,
					magicTunnelHealthCreateDetails: l,
					magicTunnelHealthCreateSelectDataCenter: f,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: o,
					magicTunnelHealthCreateReview: a,
					magicTunnelHealthCreateConfirm: v,
					magicTunnelHealthEditStepperBase: p,
					magicTunnelHealthEditStepper: d,
					magicTunnelHealthEditDetails: E,
					magicTunnelHealthEditSelectDataCenter: T,
					magicTunnelHealthEditSelectRamps: y,
					magicTunnelHealthEditSetThreshold: g,
					magicTunnelHealthEditReview: O,
					magicTunnelHealthEditConfirm: _
				};
			h.Z = b
		},
		"../react/pages/home/alerts/config.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				jk: function() {
					return a
				},
				w8: function() {
					return v
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				r = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				i = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				u = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				s = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function m(p) {
				for (var d = 1; d < arguments.length; d++) {
					var E = arguments[d] != null ? Object(arguments[d]) : {},
						T = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(E).filter(function(y) {
						return Object.getOwnPropertyDescriptor(E, y).enumerable
					})), T.forEach(function(y) {
						c(p, y, E[y])
					})
				}
				return p
			}

			function c(p, d, E) {
				return d = l(d), d in p ? Object.defineProperty(p, d, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[d] = E, p
			}

			function l(p) {
				var d = f(p, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function f(p, d) {
				if (typeof p != "object" || p === null) return p;
				var E = p[Symbol.toPrimitive];
				if (E !== void 0) {
					var T = E.call(p, d || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(p)
			}
			const n = "Notifications",
				o = "notification",
				a = m({}, e._, r._j, i._j, u._),
				v = m({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, s.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				_j: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				i = (0, e.BC)`${r}/pagerduty/connect`,
				u = (0, e.BC)`${r}/pagerduty/register`,
				s = (0, e.BC)`${r}/pagerduty`,
				m = {
					pagerDutyConnect: i,
					pagerDutyRegister: u,
					pagerDutyList: s
				};
			var c = null
		},
		"../react/pages/home/alerts/routes.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				_: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				i = (0, e.BC)`${r}/notifications`,
				u = (0, e.BC)`${i}/destinations`,
				s = (0, e.BC)`${i}/create`,
				m = (0, e.BC)`${s}/${"alertType"}`,
				c = (0, e.BC)`${i}/edit/${"alertId"}`,
				l = {
					account: r,
					alerts: i,
					destinations: u,
					createAlert: s,
					createAlertWithSelection: m,
					editAlert: c
				};
			h.Z = l
		},
		"../react/pages/home/alerts/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", r
			}({})
		},
		"../react/pages/home/audit-log/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/home/configurations/dns-settings/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Aj: function() {
					return m
				},
				Am: function() {
					return f
				},
				Jy: function() {
					return y
				},
				Mv: function() {
					return v
				},
				WI: function() {
					return T
				},
				Wu: function() {
					return c
				},
				b8: function() {
					return l
				},
				cC: function() {
					return g
				},
				e7: function() {
					return d
				},
				gH: function() {
					return o
				},
				hV: function() {
					return p
				},
				nN: function() {
					return n
				},
				uC: function() {
					return E
				}
			});
			var e = t("../react/pages/dns/types.ts");

			function r(I) {
				for (var A = 1; A < arguments.length; A++) {
					var D = arguments[A] != null ? Object(arguments[A]) : {},
						L = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(D).filter(function(C) {
						return Object.getOwnPropertyDescriptor(D, C).enumerable
					})), L.forEach(function(C) {
						i(I, C, D[C])
					})
				}
				return I
			}

			function i(I, A, D) {
				return A = u(A), A in I ? Object.defineProperty(I, A, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[A] = D, I
			}

			function u(I) {
				var A = s(I, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function s(I, A) {
				if (typeof I != "object" || I === null) return I;
				var D = I[Symbol.toPrimitive];
				if (D !== void 0) {
					var L = D.call(I, A || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(I)
			}
			const m = ["hmac-sha512.", "hmac-sha256.", "hmac-sha1."],
				c = ["198.41.144.240/28", "198.41.150.240/28", "2a06:98c0:3601::/48", "2a06:98c0:1401::/48"],
				l = ["172.65.30.82", "172.65.50.145", "2606:4700:60:0:317:26ee:3bdf:5774", "2606:4700:60:0:35a:4be3:4144:c5ee"],
				f = "172.65.64.6",
				n = 86400,
				o = "inlineTsigCreation",
				a = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
				v = /[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
				p = r({
					FORM_NAME: "zone_defaults_form",
					NS_ASSIGNMENT: "nameservers.type",
					NS_TTL: "ns_ttl",
					MULTIPROVIDER: "multi_provider",
					SECONDARY_OVERRIDES: "secondary_overrides"
				}, e.LY),
				d = [{
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
			let E = function(I) {
				return I.STANDARD = "standard", I.DNS_ONLY = "dns_only", I.CDN_ONLY = "cdn_only", I
			}({});
			const T = {
					foundation_dns: !1,
					multi_provider: !1,
					nameservers: {
						type: e.DU.STANDARD
					},
					ns_ttl: 86400,
					secondary_overrides: !1,
					zone_mode: E.STANDARD,
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
				y = {
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
				g = {
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
				O = {
					NS_SET: "ns_set",
					NS_NAME: "ns_name",
					IPV4: "ipv4",
					IPV6: "ipv6",
					ACTION: "action",
					NAMESERVER: "nameserver",
					NAMESERVER_NAME: "Nameserver name",
					SET: "set"
				},
				_ = {
					ACNS_CARD: "account-custom-nameserver-card",
					ACNS_DELETE: "account-custom-nameserver-card-delete",
					ACNS_CONFIGURE: "account-custom-nameserver-card-configure",
					ACNS_MODAL_INPUT: "account-custom-nameserver-modal-input",
					ACNS_MODAL_RADIO: "account-custom-nameserver-modal-input"
				},
				b = {
					FORM: "account-custom-ns-form",
					NS_SET: "ns_set",
					NS_NAME: "ns_name"
				}
		},
		"../react/pages/home/configurations/dns-settings/isZoneDNSOnly.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				s: function() {
					return c
				}
			});
			var e = t("../react/common/selectors/entitlementsSelectors.ts"),
				r = t("../react/pages/home/configurations/dns-settings/selectors.ts"),
				i = t("../react/pages/dns/hooks/useZoneDnsSettings.ts"),
				u = t("../react/pages/home/configurations/dns-settings/constants.ts"),
				s = t("../react/common/hooks/useScope.tsx"),
				m = t("../react/app/redux/index.ts");
			const c = f => {
					const n = (0, e.yD)(f),
						o = (0, r.Hb)(f);
					return n || o
				},
				l = () => {
					const f = useSelector(zoneIsDNSOnly),
						{
							isZoneScope: n
						} = useScope(),
						{
							zoneDnsData: o
						} = useZoneDnsSettings(),
						a = (o == null ? void 0 : o.zone_mode) === ZONE_MODES.DNS_ONLY;
					return {
						isZoneDNSEntitlementDNSOnly: f,
						isZoneSettingsModeDNSOnly: a,
						isZoneDNSOnly: n ? f || a : !1
					}
				}
		},
		"../react/pages/home/configurations/dns-settings/selectors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				BJ: function() {
					return s
				},
				Hb: function() {
					return p
				},
				N$: function() {
					return l
				},
				P7: function() {
					return f
				},
				Pw: function() {
					return u
				},
				fF: function() {
					return m
				},
				gA: function() {
					return n
				},
				h3: function() {
					return i
				},
				iI: function() {
					return c
				},
				mT: function() {
					return a
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../react/pages/home/configurations/dns-settings/constants.ts");
			const i = d => d.dns.secondaryDNS.acls,
				u = (0, e.P1)("dnsAcl", i),
				s = d => d.dns.secondaryDNS.tsigs,
				m = (0, e.P1)("dnsTsig", s),
				c = d => d.dns.secondaryDNS.masters,
				l = (0, e.P1)("dnsMaster", c),
				f = d => d.dns.secondaryDNS.zoneMasters,
				n = (0, e.P1)("zoneMasters", f),
				o = d => d.dns.secondaryDNS.outgoingZoneTransfers,
				a = (0, e.P1)("dnsOutgoingZoneTransfers", o),
				v = d => {
					var E;
					return (E = d.dns.zoneDnsSettings) === null || E === void 0 ? void 0 : E.data
				},
				p = d => {
					var E, T;
					return ((E = d.dns.zoneDnsSettings) === null || E === void 0 || (T = E.data) === null || T === void 0 ? void 0 : T.zone_mode) === r.uC.DNS_ONLY
				}
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.PEER_DNS_CREATE = "create peer server", r.PEER_DNS_UPDATE = "update peer server", r.PEER_DNS_DELETE = "delete peer server", r.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", r.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", r.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", r
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_LIST = "create list", r.DELETE_LIST = "delete list", r.ADD_LIST_ITEM = "add list item", r.DELETE_LIST_ITEM = "delete list item", r
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				AA: function() {
					return W
				},
				AN: function() {
					return mt
				},
				AY: function() {
					return be
				},
				Ac: function() {
					return It
				},
				Am: function() {
					return y
				},
				B2: function() {
					return M
				},
				BB: function() {
					return L
				},
				BF: function() {
					return Oe
				},
				BQ: function() {
					return lt
				},
				E8: function() {
					return Z
				},
				Fl: function() {
					return ke
				},
				Fu: function() {
					return R
				},
				Gc: function() {
					return Ot
				},
				Hc: function() {
					return xt
				},
				IO: function() {
					return at
				},
				JK: function() {
					return Ke
				},
				K: function() {
					return I
				},
				LI: function() {
					return Ye
				},
				LX: function() {
					return ce
				},
				L_: function() {
					return Ce
				},
				Ly: function() {
					return kt
				},
				MR: function() {
					return F
				},
				Mj: function() {
					return J
				},
				NB: function() {
					return At
				},
				Oe: function() {
					return Kt
				},
				P5: function() {
					return Ft
				},
				PE: function() {
					return De
				},
				Pd: function() {
					return Mt
				},
				Pk: function() {
					return Fe
				},
				Pp: function() {
					return tt
				},
				Q1: function() {
					return k
				},
				Qr: function() {
					return fe
				},
				Qv: function() {
					return Me
				},
				Rp: function() {
					return Xe
				},
				S7: function() {
					return ht
				},
				Sh: function() {
					return He
				},
				Sl: function() {
					return Ht
				},
				Tg: function() {
					return qe
				},
				Tp: function() {
					return Ze
				},
				Uy: function() {
					return Nt
				},
				Vw: function() {
					return z
				},
				W3: function() {
					return Ie
				},
				WR: function() {
					return ut
				},
				WX: function() {
					return ie
				},
				XF: function() {
					return Re
				},
				Xb: function() {
					return re
				},
				Zs: function() {
					return V
				},
				_f: function() {
					return xe
				},
				b4: function() {
					return oe
				},
				bc: function() {
					return Dt
				},
				c2: function() {
					return j
				},
				cE: function() {
					return $t
				},
				dh: function() {
					return Ue
				},
				fE: function() {
					return je
				},
				g7: function() {
					return he
				},
				hO: function() {
					return gt
				},
				hV: function() {
					return Rt
				},
				hk: function() {
					return g
				},
				hr: function() {
					return $
				},
				it: function() {
					return dt
				},
				j3: function() {
					return bt
				},
				jN: function() {
					return ot
				},
				jo: function() {
					return Gt
				},
				k3: function() {
					return zt
				},
				m8: function() {
					return U
				},
				nm: function() {
					return it
				},
				oW: function() {
					return pe
				},
				pH: function() {
					return X
				},
				pi: function() {
					return B
				},
				r4: function() {
					return Ut
				},
				rI: function() {
					return G
				},
				s7: function() {
					return yt
				},
				sg: function() {
					return ft
				},
				tB: function() {
					return E
				},
				tN: function() {
					return se
				},
				u_: function() {
					return Yt
				},
				vV: function() {
					return Ve
				},
				vc: function() {
					return Se
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				i = t("../../../../node_modules/moment/moment.js"),
				u = t.n(i),
				s = t("../../../common/util/types/src/api/domain.ts"),
				m = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				c = t("../react/utils/url.ts"),
				l = t("../react/pages/home/domain-registration/utils/domain.ts"),
				f = t("../react/pages/home/domain-registration/config.ts"),
				n = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				o = t("../react/pages/home/domain-registration/types.ts");

			function a(w) {
				for (var S = 1; S < arguments.length; S++) {
					var me = arguments[S] != null ? Object(arguments[S]) : {},
						Ae = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && Ae.push.apply(Ae, Object.getOwnPropertySymbols(me).filter(function($e) {
						return Object.getOwnPropertyDescriptor(me, $e).enumerable
					})), Ae.forEach(function($e) {
						v(w, $e, me[$e])
					})
				}
				return w
			}

			function v(w, S, me) {
				return S = p(S), S in w ? Object.defineProperty(w, S, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[S] = me, w
			}

			function p(w) {
				var S = d(w, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function d(w, S) {
				if (typeof w != "object" || w === null) return w;
				var me = w[Symbol.toPrimitive];
				if (me !== void 0) {
					var Ae = me.call(w, S || "default");
					if (typeof Ae != "object") return Ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(w)
			}

			function E(w) {
				return w.filter(S => S.isSelected).reduce((S, {
					name: me,
					fees: Ae,
					isZoneEntitlementPresent: $e
				}) => $e || !(0, e.isNumber)(Ae == null ? void 0 : Ae.transfer_fee) ? S : It(me) ? S + (Ae == null ? void 0 : Ae.transfer_fee) * 2 : S + (Ae == null ? void 0 : Ae.transfer_fee), 0)
			}

			function T(w) {
				return w.filter(S => S.registrar.toLowerCase() === "godaddy")
			}
			const y = "MMM D, YYYY";

			function g(w, S, me, Ae) {
				var $e, rt, vt, Pt, _t, de, le, ve, _e, we, Be, Ge;
				const We = w[S.name],
					Qe = () => It(S.name) ? u()(S.expires_at).add(2, "years").format(y) : u()(S.expires_at).add(1, "year").format(y);
				return a({
					name: S == null ? void 0 : S.name,
					zone: We,
					entitlements: me,
					registryCheck: Ae,
					nameservers: S.name_servers,
					isAvailable: S.available,
					lastKnownStatus: S.last_known_status,
					authCode: S.auth_code,
					isEnterpriseZone: (We == null || ($e = We.plan) === null || $e === void 0 ? void 0 : $e.legacy_id) === "enterprise",
					isActiveZone: (We == null ? void 0 : We.status) === "active",
					corResponsesPending: S.cor_responses_pending,
					isCorLocked: S.cor_locked,
					corLockedUntil: S.cor_locked_until ? u()(S.cor_locked_until).format(y) : null,
					isFullZone: (We == null ? void 0 : We.type) == o.xd.Full,
					isLocked: S.locked,
					registrar: S.current_registrar || f.JM,
					zoneId: We == null ? void 0 : We.id,
					currentExpiration: u()(S.expires_at).format(y),
					newExpiration: Qe(),
					lastEntitledAt: S.last_entitled_at ? new Date(S.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(me) && !!me.find(et => et.id === f.g5 && et.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: S.transfer_in && b(S.transfer_in) || o.BJ.Pending,
					autoTransferStatus: o._n.Pending,
					transferConditions: S.transfer_conditions,
					transferApiCallStatus: o.Yh.Pending,
					transferIn: S.transfer_in,
					transferOut: S.transfer_out,
					autoRenew: S.auto_renew === !0,
					lastTransferredAt: S.last_transferred_at,
					createdAt: S.created_at,
					paymentExpiresAt: u()(S.payment_expires_at).isValid() ? u()(S.payment_expires_at) : u()(S.expires_at).isValid() ? u()(S.expires_at) : "",
					contactIds: {
						[o.l2.Administrator]: (rt = S.contacts) === null || rt === void 0 || (vt = rt.administrator) === null || vt === void 0 ? void 0 : vt.id,
						[o.l2.Billing]: (Pt = S.contacts) === null || Pt === void 0 || (_t = Pt.billing) === null || _t === void 0 ? void 0 : _t.id,
						[o.l2.Registrant]: (de = S.contacts) === null || de === void 0 || (le = de.registrant) === null || le === void 0 ? void 0 : le.id,
						[o.l2.Technical]: (ve = S.contacts) === null || ve === void 0 || (_e = ve.technical) === null || _e === void 0 ? void 0 : _e.id
					},
					landing: S.landing,
					privacy: S.privacy,
					whois: S.whois,
					emailVerified: S.email_verified,
					materialChanges: A(S.material_changes),
					corChanges: S.cor_changes ? L(Object.assign(a({}, _), S.cor_changes)) : {},
					registryStatuses: S.registry_statuses ? S.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (we = S.domain_protection_services) === null || we === void 0 ? void 0 : we.status
					},
					deletion: {
						isDeletable: S == null || (Be = S.deletion) === null || Be === void 0 ? void 0 : Be.is_deletable
					},
					premiumType: S == null ? void 0 : S.premium_type,
					fees: S == null ? void 0 : S.fees
				}, S.domain_move && {
					domainMove: {
						ineligibilityReasons: (Ge = S.domain_move) === null || Ge === void 0 ? void 0 : Ge.ineligibility_reasons
					}
				}, S.actionable_metadata && {
					actionableMetadata: O(S.actionable_metadata)
				}, S.policies && {
					policies: a({}, S.policies.suspension && {
						suspension: {
							parked: S.policies.suspension.parked,
							parkingReason: S.policies.suspension.parking_reason,
							paymentExpired: S.policies.suspension.payment_expired
						}
					})
				})
			}

			function O(w) {
				return w.map(S => ({
					accountContext: S.account_context,
					createdAt: S.created_at,
					expiresAt: S.expires_at,
					sentAt: S.sent_at,
					status: S.status,
					type: S.type
				}))
			}
			const _ = {
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

			function b(w) {
				switch (w.enter_auth_code) {
					case o.lW.OK:
						return o.BJ.Valid;
					case o.lW.NEEDED:
						return o.BJ.Pending;
					case o.lW.UNKNOWN:
						return o.BJ.Pending;
					case o.lW.REJECTED:
						return o.BJ.Error;
					case o.lW.TRYING:
						return o.BJ.Pending
				}
				return o.BJ.Pending
			}

			function I(w) {
				let S = w.extensions;
				((S == null ? void 0 : S.application_purpose) && (S == null ? void 0 : S.nexus_category) || (S == null ? void 0 : S.ca_legal_type)) && (w.extensions = a({}, (S == null ? void 0 : S.nexus_category) && {
					nexusCategory: S.nexus_category
				}, (S == null ? void 0 : S.application_purpose) && {
					applicationPurpose: S.application_purpose
				}, (S == null ? void 0 : S.ca_legal_type) && {
					ca_legal_type: S.ca_legal_type
				}));
				let me = a({}, typeof w.id == "string" ? {
					id: w.id
				} : {}, {
					first_name: w.firstName,
					organization: w.organization,
					address: w.address1,
					city: w.city,
					state: w.state || "N/A",
					zip: w.zip,
					country: w.country,
					phone: w.phone,
					email: w.email,
					fax: "",
					last_name: w.lastName,
					address2: w.address2,
					email_verified: w.emailVerified
				}, w.extensions ? {
					extensions: a({}, w.extensions.nexusCategory && {
						nexus_category: w.extensions.nexusCategory
					}, w.extensions.applicationPurpose && {
						application_purpose: w.extensions.applicationPurpose
					}, w.extensions.ca_legal_type && {
						ca_legal_type: w.extensions.ca_legal_type
					})
				} : {});
				return ze(me)
			}

			function A(w) {
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
				for (const Ae in w) {
					const $e = w[Ae],
						rt = me[$e];
					S.push(rt)
				}
				return S
			}
			const D = w => {
				if (!w) return null;
				let S = w;
				return w.includes("C31") && (S = "C31"), w.includes("C32") && (S = "C32"), S
			};

			function L(w) {
				return a({}, typeof w.id == "string" ? {
					id: w.id
				} : {}, {
					firstName: w.first_name,
					organization: w.organization,
					address1: w.address,
					city: w.city,
					state: w.state,
					zip: w.zip,
					country: w.country,
					phone: w.phone.trim(),
					email: w.email.trim(),
					lastName: w.last_name,
					address2: w.address2,
					emailVerified: w.email_verified
				}, w.extensions ? {
					extensions: a({}, w.extensions.nexus_category && {
						nexusCategory: D(w.extensions.nexus_category)
					}, w.extensions.application_purpose && {
						applicationPurpose: w.extensions.application_purpose
					}, w.extensions.ca_legal_type && {
						ca_legal_type: w.extensions.ca_legal_type
					})
				} : {})
			}

			function C(w = {}) {
				const S = {
					name: "",
					zoneId: "",
					zone: a({
						id: "",
						name: "",
						status: "pending",
						plan: a({
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
						}, w.zone && w.zone.plan || {}),
						type: EZoneType.Full
					}, w.zone || {}),
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
					transferConditions: a({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, w.transferConditions || {}),
					transferIn: a({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, w.transferIn || {}),
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
				return Object.assign(S, w)
			}

			function k(w = {}) {
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
				}, w)
			}

			function R(w) {
				const S = f.Py.concat(f.ui).reduce((me, Ae) => a({}, me, {
					[Ae]: []
				}), {});
				return w.forEach(me => {
					let Ae = P(me.registrar);
					Ae in S || (Ae = f.ui), ft(me.name) && (Ae = "uk"), S[Ae].push(me)
				}), Object.keys(S).sort((me, Ae) => me.localeCompare(Ae)).map(me => ({
					registrar: me,
					domains: S[me]
				})).filter(me => me.domains.length > 0)
			}

			function P(w) {
				return w == null ? void 0 : w.toLowerCase().replace(/\s|,|\./g, "")
			}

			function z(w) {
				if (!w || !w.registrar) return "unknown";
				if (ft(w.name)) return "uk";
				const S = P(w.registrar);
				return S in f.gM ? S : "unknown"
			}
			const te = [];

			function ee(w) {
				return te.some(S => w.endsWith("." + S))
			}

			function q(w) {
				return !w.isEnterpriseZone || !Array.isArray(w.entitlements) ? !1 : !!w.entitlements.find(({
					id: S,
					allocation: me
				}) => S === f.g5 && me.value === !0)
			}

			function B(w) {
				var S;
				const me = [o.rj.CLIENT_HOLD, o.rj.SERVER_HOLD, o.rj.SERVER_TRANSFER_PROHIBITED, o.rj.PENDING_DELETE, o.rj.PENDING_TRANSFER, o.rj.CLIENT_TRANSFER_PROHIBITED];
				let Ae = !1,
					$e = null;
				return (S = w.registryStatuses) === null || S === void 0 || S.some(rt => {
					me.includes(rt) && ($e = rt, Ae = !0)
				}), [Ae, $e]
			}

			function U(w, S = !1) {
				if (!w) return [!1, n.keys.cannot_transfer_default];
				if (w.zone.status !== "active") return [!1, n.keys.cannot_transfer_zone_not_active];
				if (!w.isFullZone && !q(w)) return [!1, n.keys.cannot_transfer_zone_not_eligible];
				if (w.registrar === "Cloudflare") return [!1, n.keys.cannot_transfer_domain_on_cf];
				if (w.isAvailable) return [!1, n.keys.cannot_transfer_domain_available];
				if (!w.transferConditions) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (!S && (0, l.Ou)(w == null ? void 0 : w.name)) return [!1, n.keys.cannot_transfer_domain_tld_not_supported];
				if (X(w)) return [!1, n.keys.cannot_transfer_domain_transfer_in_progress];
				let me;
				for (me in w.transferConditions)
					if (me !== "not_premium" && !w.transferConditions[me]) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (ee(w.name)) return [!1, n.keys.cannot_transfer_domain_tld_not_supported];
				const [Ae, $e] = B(w);
				return Ae && $e ? [!1, n.keys.cannot_transfer_domain_registry_status[$e]] : [!0, ""]
			}

			function X(w) {
				var S, me;
				return !!w.transferIn && !((S = w.transferConditions) === null || S === void 0 ? void 0 : S.not_started) && !!(ft(w.name) || ((me = w.registryStatuses) === null || me === void 0 ? void 0 : me.includes(o.rj.PENDING_TRANSFER)))
			}

			function K(w) {
				return !!w.registrar && !!w.currentExpiration
			}

			function M(w, S = !1) {
				const [me] = U(w, S);
				return K(w) ? Ee(w) ? o.M5.InProgressOrOnCF : me ? o.M5.Supported : o.M5.Unsupported : o.M5.Unknown
			}

			function j(w) {
				return w.transferIn && [o.lW.REJECTED, o.lW.NEEDED].includes(w.transferIn.enter_auth_code) || !1
			}

			function F(w) {
				return w.registrar === "Cloudflare"
			}

			function G(w) {
				return !!(w == null ? void 0 : w.includes(o.rj.AUTO_RENEW_PERIOD))
			}

			function J(w) {
				return !!(w == null ? void 0 : w.includes(o.rj.PENDING_TRANSFER))
			}
			const ne = "Invalid date";

			function Y(w) {
				return w.newExpiration === ne ? !1 : w.newExpiration
			}

			function ue(w) {
				return w.currentExpiration === ne ? !1 : w.currentExpiration
			}

			function W(w) {
				return w.substring(w.indexOf("."))
			}

			function re(w = "") {
				return w.indexOf(".") !== -1 ? w.substring(0, w.indexOf(".")) : w
			}

			function $(w) {
				return w.map(S => S.name).map(S => W(S)).filter((S, me, Ae) => !Ae.includes(S, me + 1))
			}

			function oe(w) {
				if (f.no) return [!0, ""];
				if (!F(w)) return [!1, o.ok.NotOnCF];
				if (w.isCorLocked) return [!1, w.corLockedUntil ? o.ok.CorLockedUntil : o.ok.CorLock];
				if (w.lastTransferredAt) {
					const S = u()(w.lastTransferredAt),
						me = u().duration(u()().diff(S)).as("days"),
						Ae = ft(w.name);
					if (me < (Ae ? 1 : 60)) return [!1, Ae ? o.ok.RecentTransferUK : o.ok.RecentTransfer]
				}
				if (w.createdAt) {
					const S = u()(w.createdAt);
					if (u().duration(u()().diff(S)).as("days") < 60) return [!1, o.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function ie(w) {
				return !!(f.Bc || w.transferOut)
			}

			function Ee(w) {
				return he(w) || F(w)
			}

			function se(w) {
				return !he(w) && F(w)
			}

			function he(w) {
				return !w || w.lastKnownStatus === o.kd.PENDING_TRANSFER || w.lastKnownStatus === o.kd.TRANSFER_FOA_PENDING || !F(w) && w.transferConditions && !w.transferConditions.not_started || !1
			}

			function De(w) {
				return !(ee(w.name) || w.transferConditions && !w.transferConditions.supported_tld)
			}

			function Me(w) {
				return (w == null ? void 0 : w.includes("/")) ? !0 : w.split("").some(S => S.charCodeAt(0) > 123)
			}

			function Fe(w) {
				switch (w) {
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

			function Se(w) {
				return u()(w.paymentExpiresAt).isBefore(u()())
			}

			function ot(w) {
				return w.transferIn && w.transferIn.enter_auth_code === o.lW.REJECTED || !1
			}

			function Ke(w) {
				const S = ["CU", "KP", "IR", "SY"];
				return w.filter(me => !S.includes(me.code))
			}

			function qe(w) {
				if (!!w) return `${w.charAt(0).toUpperCase()}${w.slice(1)}${w.charAt(w.length-1)==="."?"":"."}`
			}

			function ze(w) {
				const S = {};
				for (const [me, Ae] of Object.entries(w)) {
					if (Ae && typeof Ae == "string") {
						Object.assign(S, {
							[me]: Ae.trim()
						});
						continue
					}
					Object.assign(S, {
						[me]: Ae
					})
				}
				return S
			}

			function V(w) {
				return u()(w).add(40, "days")
			}

			function Ce(w) {
				const S = w.paymentExpiresAt || w.payment_expires_at,
					me = V(S);
				return u()().isBetween(S, me)
			}

			function je(w) {
				var S;
				return !(w == null ? void 0 : w.registryStatuses) || !Array.isArray(w == null ? void 0 : w.registryStatuses) && !(0, e.isString)(w == null ? void 0 : w.registryStatuses) ? !1 : (S = w.registryStatuses) === null || S === void 0 ? void 0 : S.includes(o.rj.REDEMPTION_PERIOD)
			}

			function Ue(w) {
				var S;
				return !(w == null ? void 0 : w.registryStatuses) || !Array.isArray(w == null ? void 0 : w.registryStatuses) && !(0, e.isString)(w == null ? void 0 : w.registryStatuses) ? !1 : (S = w.registryStatuses) === null || S === void 0 ? void 0 : S.includes(o.rj.PENDING_DELETE)
			}

			function tt(w) {
				return [".us"].includes(w)
			}

			function dt(w) {
				return [".us"].includes(w)
			}

			function gt(w) {
				switch (w) {
					case ".us":
						return Q();
					default:
						return []
				}
			}

			function Ie(w) {
				switch (w) {
					case ".us":
						return nt;
					default:
						return {}
				}
			}
			const nt = {
				[o.A9.P3]: [o.Fi.C11]
			};

			function Q() {
				return [{
					name: o.IP.application_purpose,
					label: o.rb.application_purpose,
					options: Object.entries(o.A9).map(([w, S]) => ({
						value: w,
						label: S
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: o.IP.nexus_category,
					label: o.rb.nexus_category,
					options: Object.entries(o.Fi).map(([w, S]) => ({
						value: w,
						label: S
					}))
				}]
			}

			function ce(w, S, me) {
				return S[S.length - 1][me] === w[me]
			}

			function fe(w) {
				return Boolean(Object.keys(w).length === 0)
			}

			function Oe(w) {
				return u()().add(w, "year").format(y)
			}

			function xe({
				accountName: w
			}) {
				var S;
				const me = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((S = w.toLowerCase().match(me)) === null || S === void 0 ? void 0 : S[0]) || ""
			}

			function Ve(w) {
				return !!w.match(m.default.email)
			}

			function Ze(w) {
				return w === s.W7.PENDING_UPDATE
			}

			function Ot(w) {
				return w ? Object.values(s.wR).filter(S => S !== s.wR.OFFBOARDED).includes(w) : !1
			}

			function yt(w) {
				return w ? [s.wR.LOCKED, s.wR.ONBOARDED, s.wR.ONBOARDING_INITIATED, s.wR.PENDING_REGISTRY_LOCK, s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(w) : !1
			}

			function Tt(w) {
				return w ? s.wR.UNLOCKED === w : !1
			}

			function Wt(w) {
				return w ? s.wR.LOCKED === w : !1
			}

			function Ye(w) {
				return w ? s.wR.PENDING_REGISTRY_LOCK === w : !1
			}

			function lt(w) {
				return w ? [s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(w) : !1
			}

			function at(w) {
				var S;
				return !1
			}

			function ut(w) {
				var S;
				return !1
			}

			function mt(w) {
				var S;
				return !1
			}

			function Re(w) {
				var S;
				return !1
			}

			function Z(w) {
				var S;
				return !1
			}

			function pe(w) {
				return Object.keys(s.wR).find(S => s.wR[S].toLowerCase() === w.toLowerCase())
			}

			function be(w) {
				var S;
				const me = (S = pe(w)) === null || S === void 0 ? void 0 : S.toLowerCase();
				return me ? n.keys.protection_status[me] : n.keys.protection_status.unknown
			}

			function Te(w) {
				return ["com", "net"].includes(w)
			}

			function ke(w) {
				const S = (0, c.pu)(w);
				return Te(S) ? s.wR.PENDING_REGISTRY_LOCK : s.wR.LOCKED
			}

			function He(w) {
				return (0, c.pu)(w) === "co" ? 5 : 10
			}

			function it(w, S) {
				return S ? 1 : (0, c.pu)(w) === "co" ? 5 : (0, c.pu)(w) === "org" ? 1 : 10
			}

			function ft(w) {
				return (0, c.pu)(w) === "uk"
			}

			function $t(w) {
				return (0, c.pu)(w) === "us"
			}

			function It(w) {
				return (0, c.pu)(w) === "ai"
			}

			function Xe(w) {
				return u()(w).isValid()
			}

			function kt(w) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(w)
			}

			function Ft(w) {
				return !!(w == null ? void 0 : w.id)
			}

			function At(w) {
				return w ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(w) : !1
			}

			function Mt(w) {
				return w ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(w) : !1
			}

			function Rt(w) {
				var S;
				return (w == null ? void 0 : w.lastKnownStatus) ? (S = w.lastKnownStatus) === null || S === void 0 ? void 0 : S.includes("deletionIrredeemable") : !1
			}

			function Nt(w) {
				switch (w) {
					case o.Vs.NonStandard_NonStandard:
					case o.Vs.NonStandard_Standard:
					case o.Vs.Standard_Standard:
					case o.Vs.Standard_NonStandard:
						return !0;
					case o.Vs.Not_Premium:
					default:
						return !1
				}
			}

			function xt(w) {
				if (!w || !w.message) return o.OJ.DEFAULT;
				const {
					message: S
				} = w;
				switch (!0) {
					case S.includes("feature disabled"):
						return o.OJ.FEATURE_DISABLED;
					case S.includes("email unverified"):
						return o.OJ.EMAIL_UNVERIFIED;
					case S.includes("account blocked"):
						return o.OJ.ACCOUNT_BLOCKED;
					default:
						return o.OJ.DEFAULT
				}
			}

			function ht(w) {
				var S, me;
				return !!(((S = w.policies) === null || S === void 0 || (me = S.suspension) === null || me === void 0 ? void 0 : me.parked) && w.policies.suspension.parkingReason)
			}

			function bt(w) {
				var S, me;
				return ht(w) && ((S = w.policies) === null || S === void 0 || (me = S.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === o.qK.EMAIL_VERIFICATION
			}

			function zt(w) {
				var S, me;
				return ht(w) && ((S = w.policies) === null || S === void 0 || (me = S.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === o.qK.TRUST_AND_SAFETY
			}

			function Ht(w) {
				var S;
				return !((S = w.domainMove) === null || S === void 0 ? void 0 : S.ineligibilityReasons.length)
			}

			function Kt(w) {
				var S, me;
				return !!((S = w.domainMove) === null || S === void 0 || (me = S.ineligibilityReasons) === null || me === void 0 ? void 0 : me.includes(o.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Bt(w) {
				var S;
				return (S = w.actionableMetadata) === null || S === void 0 ? void 0 : S.find(me => me.type === o.wg.DOMAIN_MOVE)
			}

			function Gt(w) {
				const S = Bt(w);
				return (S == null ? void 0 : S.status) === "pending" && S.accountContext === o._5.GAINING
			}

			function Yt(w) {
				const S = Bt(w);
				return (S == null ? void 0 : S.status) === "pending" && S.accountContext === o._5.LOSING
			}

			function Ut(w) {
				const S = W(w.name);
				return !f.Pf.includes(S)
			}

			function Dt(w) {
				return f.QZ.includes(w)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Bc: function() {
					return c
				},
				HG: function() {
					return he
				},
				Hv: function() {
					return De
				},
				JM: function() {
					return i
				},
				Ni: function() {
					return d
				},
				Pf: function() {
					return a
				},
				Py: function() {
					return m
				},
				QZ: function() {
					return v
				},
				WK: function() {
					return f
				},
				g5: function() {
					return n
				},
				gM: function() {
					return s
				},
				jk: function() {
					return se
				},
				kO: function() {
					return p
				},
				no: function() {
					return l
				},
				ui: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../flags.ts");
			const i = "Unknown",
				u = "unknown",
				s = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				m = Object.keys(s),
				c = (0, r.J8)("registrar_mock_transfer_out") || !1,
				l = (0, r.J8)("registrar_show_unlock_ui") || !1,
				f = 250,
				n = "cf_registrar.enabled",
				o = "@abcABC1234567890123456",
				a = [".us"],
				v = [".travel", ".us", ".ong", ".ngo"],
				p = ["BR", "CA", "MX", "US"],
				d = ["ca"],
				E = (0, e.BC)`/${"accountId"}`,
				T = (0, e.BC)`${E}/add-site`,
				y = (0, e.BC)`${E}/registrar`,
				g = (0, e.BC)`${y}/domains`,
				O = (0, e.BC)`${y}/action-center`,
				_ = (0, e.BC)`${y}/domain/${"zoneName"}`,
				b = (0, e.BC)`${_}/configuration`,
				I = (0, e.BC)`${_}/contacts`,
				A = (0, e.BC)`${y}/pricing`,
				D = (0, e.BC)`${y}/protection`,
				L = (0, e.BC)`${y}/register`,
				C = (0, e.BC)`${L}/checkout`,
				k = (0, e.BC)`${L}/checkout/${"token"}`,
				R = (0, e.BC)`${L}/success`,
				P = (0, e.BC)`${y}/tlds`,
				z = (0, e.BC)`${y}/transfer`,
				te = (0, e.BC)`${y}/transfer/${"zoneName"}`,
				ee = (0, e.BC)`/registrar/accounts/verify_email`,
				q = (0, e.BC)`/registrar/domains/verify_email`,
				B = (0, e.BC)`/sign-up/registrar`,
				U = (0, e.BC)`${y}/verify-email`,
				X = (0, e.BC)`${E}/${"zoneName"}`,
				K = (0, e.BC)`${E}/domains`,
				M = (0, e.BC)`${K}/action-center`,
				j = (0, e.BC)`${K}/${"zoneName"}`,
				F = (0, e.BC)`${j}/configuration`,
				G = (0, e.BC)`${j}/contacts`,
				J = (0, e.BC)`${K}/pricing`,
				ne = (0, e.BC)`${K}/protection`,
				Y = (0, e.BC)`${K}/register`,
				ue = (0, e.BC)`${Y}/checkout`,
				W = (0, e.BC)`${Y}/checkout/${"token"}`,
				re = (0, e.BC)`${Y}/success`,
				$ = (0, e.BC)`${K}/tlds`,
				oe = (0, e.BC)`${K}/transfer`,
				ie = (0, e.BC)`${K}/transfer/${"zoneName"}`,
				Ee = (0, e.BC)`${K}/verify-email`,
				se = {
					addSite: T,
					domains: g,
					domainsActionCenter: O,
					domainsDomain: _,
					domainsDomainConfiguration: b,
					domainsDomainContacts: I,
					domainsPricing: A,
					domainsProtection: D,
					domainsRegister: L,
					domainsRegisterCheckout: C,
					domainsRegisterCheckoutToken: k,
					domainsRegisterSuccess: R,
					domainsTlds: P,
					domainsTransfer: z,
					domainsTransferZone: te,
					registrar: y,
					registrarAccountsVerifyEmail: ee,
					registrarDomainsVerifyEmail: q,
					signup: B,
					verifyEmail: U,
					zone: X
				},
				he = {
					LEGACY_domains: K,
					LEGACY_domainsActionCenter: M,
					LEGACY_domainsDomain: j,
					LEGACY_domainsDomainConfiguration: F,
					LEGACY_domainsDomainContacts: G,
					LEGACY_domainsPricing: J,
					LEGACY_domainsProtection: ne,
					LEGACY_domainsRegister: Y,
					LEGACY_domainsRegisterCheckout: ue,
					LEGACY_domainsRegisterCheckoutToken: W,
					LEGACY_domainsRegisterSuccess: re,
					LEGACY_domainsTlds: $,
					LEGACY_domainsTransfer: oe,
					LEGACY_domainsTransferZone: ie,
					LEGACY_verifyEmail: Ee
				},
				De = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				HO: function() {
					return c
				},
				NW: function() {
					return l
				},
				ZQ: function() {
					return u
				},
				b_: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");
			const i = f => {
					const n = f && f.accountFlags && f.accountFlags.data && f.accountFlags.data.registrar && f.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(o => o.trim()) : []
				},
				u = f => {
					var n, o, a;
					return ((n = f.accountFlags) === null || n === void 0 || (o = n.data) === null || o === void 0 || (a = o.registrar) === null || a === void 0 ? void 0 : a["registrar-managed"]) || !1
				},
				s = f => f.account ? f.account.email : "",
				m = f => !1,
				c = f => m(f) && (0, e.oJ)((0, e.Zu)(f)),
				l = f => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: o
					} = f.registrar.registrations;
					return n && !(o.accepted_date || o.id || o.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				J: function() {
					return o
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(i),
				s = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function m(a) {
				for (var v = 1; v < arguments.length; v++) {
					var p = arguments[v] != null ? Object(arguments[v]) : {},
						d = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(p).filter(function(E) {
						return Object.getOwnPropertyDescriptor(p, E).enumerable
					})), d.forEach(function(E) {
						c(a, E, p[E])
					})
				}
				return a
			}

			function c(a, v, p) {
				return v = l(v), v in a ? Object.defineProperty(a, v, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[v] = p, a
			}

			function l(a) {
				var v = f(a, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function f(a, v) {
				if (typeof a != "object" || a === null) return a;
				var p = a[Symbol.toPrimitive];
				if (p !== void 0) {
					var d = p.call(a, v || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(a)
			}
			let n = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE = "change canada registrant legal type", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.TRANSFER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE = "change canada registrant legal type", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a.DOMAIN_MOVE_START_FLOW = "Start domain move flow", a.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", a.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", a.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", a.DOMAIN_MOVE_SUBMIT = "Submit domain move", a.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", a.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", a.DOMAIN_MOVE_CANCEL = "Domain move cancel", a.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", a.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", a.ACTION_CENTER_NAVIGATE = "Navigate to actions center", a.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", a.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS = "domain update canada registrant type completed successfully", a.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR = "domain update canada registrant type failed", a
			}({});

			function o(a, v, p) {
				if (!(v == null ? void 0 : v.name)) return null;
				u().sendEvent(a, m({
					domain: m({
						name: v.name,
						premium: (0, s.Uy)(v == null ? void 0 : v.premiumType)
					}, (v == null ? void 0 : v.paymentExpiresAt) && {
						paymentExpiresAt: r()(v == null ? void 0 : v.paymentExpiresAt).format()
					}),
					category: "registrar"
				}, p))
			}
		},
		"../react/pages/home/domain-registration/utils/domain.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				FC: function() {
					return l
				},
				Ou: function() {
					return s
				},
				TQ: function() {
					return c
				},
				rS: function() {
					return m
				},
				v_: function() {
					return u
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/pages/home/domain-registration/bulk-transfer-util.ts"),
				i = t("../react/pages/home/domain-registration/types.ts");
			const u = f => (0, r.Ac)(f) ? 2 : 1,
				s = f => (0, e.pu)(f) === "ca",
				m = [{
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
				c = m.filter(f => f.value !== i.Hy.MAJ && f.value !== i.Hy.OMK && f.value !== i.Hy.TDM),
				l = f => {
					const n = [i.Hy.ABO, i.Hy.CCT, i.Hy.LGR, i.Hy.RES];
					return !f || (f == null ? void 0 : f.length) === 0 ? !1 : f ? !n.includes(f) : !0
				}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				HX: function() {
					return c
				},
				Re: function() {
					return y
				},
				Rh: function() {
					return d
				},
				hX: function() {
					return v
				},
				s_: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/react/react"),
				u = t.n(i),
				s = t("../react/utils/translator.tsx"),
				m = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts");
			let c = function(g) {
				return g.UNKNOWN = "unknown", g.WORKERS = "workers", g.ACCESS_APPS = "access_apps", g.ACCESS_IDP = "access_ipd", g
			}({});
			const l = [{
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

			function f(g) {
				return {
					key: "com.cloudflare.edge.worker.script." + g.id,
					name: g.name + (g.environment ? ` (${g.environment})` : ""),
					type: c.WORKERS
				}
			}

			function n(g) {
				const O = g;
				return {
					key: "com.cloudflare.edge.access.app." + O.id,
					name: O.name,
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

			function a(g) {
				const O = g,
					_ = o[O.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + O.id,
					name: `${_||"Unknown Type"}${O.name?" - "+O.name:""}`,
					type: c.ACCESS_IDP
				}
			}
			const v = async (g, O, _) => O == c.WORKERS ? (await p(`/accounts/${g}/workers/scripts-search?name=${_}&perPage=10`)).body.result.map(b => ({
				id: b.id,
				name: b.service_name || b.script_name,
				environment: b.environment_name
			})).map(f) : O == c.ACCESS_APPS ? (await p(`/accounts/${g}/access/apps?name=${_}`)).body.result.map(n) : O == c.ACCESS_IDP ? (await p(`/accounts/${g}/access/identity_providers`)).body.result.map(a) : [];
			async function p(g) {
				try {
					return await (0, e.get)(g, {
						hideErrorAlert: !0
					})
				} catch (b) {
					var O, _;
					throw ((O = b.body) === null || O === void 0 ? void 0 : O.errors) ? b.body.errors[0].message : b.text ? b.text : ((_ = b.response) === null || _ === void 0 ? void 0 : _.statusText) ? b.response.statusText : "Unexpected error response"
				}
			}
			const d = async (g, O) => {
				const _ = O.split("."),
					b = _.pop(),
					I = _.join(".");
				let A;
				switch (I) {
					case "com.cloudflare.edge.worker.script":
						const D = (await p(`/accounts/${g}/workers/scripts-search/${b}`)).body.result;
						return f({
							id: D.id,
							name: D.service_name || D.script_name,
							environment: D.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return A = await p(`/accounts/${g}/access/identity_providers/${b}`), a(A.body.result);
					case "com.cloudflare.edge.access.app":
						return A = await p(`/accounts/${g}/access/apps/${b}`), n(A.body.result)
				}
			}, E = {
				loading: !0,
				isDisabled: !0
			}, T = () => "production";

			function y(g) {
				const [O] = (0, m.k)(g), [_, b] = (0, i.useState)(!0), [I, A] = (0, i.useState)([]);
				return (0, i.useEffect)(() => {
					if (!O) return;
					const D = l.filter(L => O.find(C => C.meta.scopes === L.scopeKeyPrefix)).map(L => {
						const C = L.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							k = O.filter(R => R.meta.scopes === L.scopeKeyPrefix).find(R => !R.meta.visibility || R.meta.visibility !== "beta");
						return {
							value: L.value,
							label: (0, s.ZP)(L.label_i18n),
							state: C ? E : {
								loading: !1,
								isDisabled: !1
							},
							beta: !k
						}
					});
					A(D)
				}, [O]), (0, i.useEffect)(() => {
					(async () => {
						try {
							await v(g, c.ACCESS_APPS, ""), E.isDisabled = !1
						} catch (D) {
							D.startsWith("access.api.error.not_enabled") ? E.disableInfo = (0, s.ZP)("policy.granular_resources.type.access.not_enabled") : E.error = D
						}
						E.loading = !1, A(D => [...D])
					})()
				}, [g]), (0, i.useEffect)(() => {
					const D = I.find(L => L.state.loading);
					b(!!D)
				}, [I]), {
					types: I,
					isLoading: _
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Ey: function() {
					return f
				},
				F4: function() {
					return E
				},
				Go: function() {
					return v
				},
				Lc: function() {
					return b
				},
				Np: function() {
					return o
				},
				Rl: function() {
					return a
				},
				Sb: function() {
					return p
				},
				Sw: function() {
					return _
				},
				Sz: function() {
					return O
				},
				Ti: function() {
					return I
				},
				Uw: function() {
					return y
				},
				Zl: function() {
					return T
				},
				jk: function() {
					return g
				},
				r6: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				i = (0, e.BC)`${r}/members`,
				u = (0, e.BC)`${i}/invite`,
				s = (0, e.BC)`${i}/invite/${"memberId"}`,
				m = (0, e.BC)`${i}/add-policy/${"memberId"}`,
				c = (0, e.BC)`${i}/user-groups`,
				l = (0, e.BC)`${i}/user-groups/${"userGroupId"}`,
				f = "com.cloudflare.api.account",
				o = f + "." + "zone",
				a = o + ".",
				v = 100,
				p = 200,
				d = 5,
				E = 300,
				T = "INVITE_TOAST",
				y = "00000000000000000000000000000000",
				g = {
					account: r,
					members: i,
					groups: c,
					group: l,
					inviteMembers: u,
					editMember: s,
					addPolicy: m
				},
				O = {
					allow: "allow",
					deny: "deny"
				},
				_ = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				b = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				I = {
					accountId: "",
					effect: O.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/sparrowEvents.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Bz: function() {
					return l
				},
				SH: function() {
					return f
				},
				g5: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var o = 1; o < arguments.length; o++) {
					var a = arguments[o] != null ? Object(arguments[o]) : {},
						v = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(a).filter(function(p) {
						return Object.getOwnPropertyDescriptor(a, p).enumerable
					})), v.forEach(function(p) {
						u(n, p, a[p])
					})
				}
				return n
			}

			function u(n, o, a) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = a, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var v = a.call(n, o || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CLICK_USERGROUP_BETA_BUTTON = "click usergroup beta button", n.MEMBERS_TAB_NAVIGATE = "nagivate members tab", n
			}({});
			const l = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, i({}, o || {}))
				},
				f = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/home/members/utils.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				AX: function() {
					return g
				},
				Co: function() {
					return T
				},
				Hf: function() {
					return D
				},
				JP: function() {
					return y
				},
				LX: function() {
					return k
				},
				Ld: function() {
					return a
				},
				YW: function() {
					return l
				},
				_k: function() {
					return v
				},
				c$: function() {
					return f
				},
				rC: function() {
					return C
				},
				vq: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				r = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				i = t("../react/pages/home/members/constants.ts");

			function u(P) {
				for (var z = 1; z < arguments.length; z++) {
					var te = arguments[z] != null ? Object(arguments[z]) : {},
						ee = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(te).filter(function(q) {
						return Object.getOwnPropertyDescriptor(te, q).enumerable
					})), ee.forEach(function(q) {
						s(P, q, te[q])
					})
				}
				return P
			}

			function s(P, z, te) {
				return z = m(z), z in P ? Object.defineProperty(P, z, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[z] = te, P
			}

			function m(P) {
				var z = c(P, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function c(P, z) {
				if (typeof P != "object" || P === null) return P;
				var te = P[Symbol.toPrimitive];
				if (te !== void 0) {
					var ee = te.call(P, z || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(P)
			}
			const l = () => u({}, i.Ti),
				f = () => u({}, i.Lc, {
					scopes: [l()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = P => P.map(z => ({
					scope: {
						key: z,
						objects: [{
							key: "*"
						}]
					}
				})),
				o = (P, z, te) => {
					var ee;
					let q = [],
						B = [];
					const U = [],
						X = [];
					P.scopes.forEach(j => {
						if (j.mode === i.Sw.all) te ? q.push({
							id: te
						}) : q.push({
							scope: {
								key: `com.cloudflare.api.account.${z}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (j.mode === i.Sw.domain_group) {
							const G = {
								id: j.resourceGroupId
							};
							j.effect === i.Sz.allow ? q.push(G) : B.push(G)
						} else if (j.mode === i.Sw.zone) {
							const G = `${i.Rl}${j.zoneId}`;
							j.effect === i.Sz.allow ? U.push(G) : X.push(G)
						} else if (j.mode === i.Sw.granular && j.granularResourceKey) {
							var F;
							const G = j.granularProduct,
								ne = `${(F=r.s_.find(Y=>Y.value===G))===null||F===void 0?void 0:F.scopeSubsetOfPrefix}.${z}`;
							q.push({
								scope: {
									key: `${j.granularResourceKey}`,
									subset_of: [{
										key: `${ne}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), U.length && (q = q.concat(n(U))), X.length && (B = B.concat(n(X)));
					const K = (ee = P.permission_groups) === null || ee === void 0 ? void 0 : ee.map(j => ({
							id: j
						})),
						M = [];
					return M.push({
						access: i.Sz.allow,
						permission_groups: K,
						resource_groups: q
					}), B.length && M.push({
						access: i.Sz.deny,
						permission_groups: K,
						resource_groups: B
					}), M
				},
				a = P => P.map(z => {
					var te;
					return {
						access: z.access,
						permission_groups: z.permission_groups.map(ee => ({
							id: ee.id
						})),
						resource_groups: (te = z.resource_groups) === null || te === void 0 ? void 0 : te.map(ee => ({
							scope: {
								key: ee.scope.key,
								objects: ee.scope.objects
							},
							id: ee.id
						}))
					}
				}),
				v = (P, z, te, ee) => {
					const q = P.auto_accept;
					let B = [];
					return B = B.concat(o(P, z, te)), ee && (B = B.concat(a(ee))), {
						auto_accept: q,
						status: q ? "accepted" : "pending",
						policies: B
					}
				},
				p = P => {
					const z = P.split(".");
					return z[z.length - 1]
				},
				d = P => {
					var z, te;
					const ee = P == null ? void 0 : P.access;
					let q = [],
						B = P == null || (z = P.resource_groups) === null || z === void 0 ? void 0 : z.map(U => {
							var X;
							const K = E(U);
							if ((U == null || (X = U.meta) === null || X === void 0 ? void 0 : X.editable) === "false") return {
								effect: ee,
								mode: i.Sw.all,
								accountId: p(U.id)
							};
							if (K) {
								var M;
								return {
									effect: ee,
									mode: i.Sw.granular,
									granularProduct: K.value,
									granularResourceKey: U == null || (M = U.scope) === null || M === void 0 ? void 0 : M.key
								}
							} else if (!U.name) U.scope.key.startsWith(i.Rl) ? q.push({
								key: U.scope.key
							}) : q = q.concat(U.scope.objects);
							else return {
								effect: ee,
								mode: i.Sw.domain_group,
								resourceGroupId: p(U.id)
							}
						}).filter(U => U);
					if ((te = q) === null || te === void 0 ? void 0 : te.length) {
						let U = q.map(X => {
							const K = p(X.key);
							return {
								effect: ee,
								mode: i.Sw.zone,
								zoneId: K
							}
						});
						B = B.length ? U.concat(B) : U
					}
					return B
				},
				E = P => {
					var z, te, ee, q;
					const B = P == null || (z = P.scope) === null || z === void 0 ? void 0 : z.key.split(".").slice(0, -1).join("."),
						U = P == null || (te = P.scope) === null || te === void 0 || (ee = te.subset_of) === null || ee === void 0 || (q = ee[0]) === null || q === void 0 ? void 0 : q.key.split(".").slice(0, -1).join(".");
					return r.s_.find(X => X.scopeKeyPrefix === B && X.scopeSubsetOfPrefix === U)
				},
				T = P => {
					if (!(P == null ? void 0 : P.length)) return [];
					const z = [];
					return P.forEach(te => {
						var ee;
						(ee = te.resource_groups) === null || ee === void 0 || ee.forEach(q => {
							var B, U;
							((B = q.scope) === null || B === void 0 || (U = B.key) === null || U === void 0 ? void 0 : U.startsWith(i.Rl)) && z.push(p(q.scope.key))
						})
					}), z
				},
				y = P => {
					if (!(P == null ? void 0 : P.length)) return [];
					const z = [];
					return P.forEach(te => {
						var ee;
						(ee = te.resource_groups) === null || ee === void 0 || ee.forEach(q => {
							var B, U;
							if (!((B = q.scope) === null || B === void 0 || (U = B.key) === null || U === void 0 ? void 0 : U.startsWith(i.Rl))) {
								var X;
								const M = (X = q.scope) === null || X === void 0 ? void 0 : X.objects;
								for (let j = 0; j < (M == null ? void 0 : M.length) && j < i.r6; j++) {
									var K;
									((K = M[j].key) === null || K === void 0 ? void 0 : K.startsWith(i.Rl)) && z.push(p(M[j].key))
								}
							}
						})
					}), z
				},
				g = P => {
					var z;
					if (!(P == null ? void 0 : P.length)) return null;
					const te = (z = P[0]) === null || z === void 0 ? void 0 : z.permission_groups.map(U => U.id);
					let ee, q;
					P == null || P.forEach(U => {
						U.access === i.Sz.allow && (ee = U), U.access === i.Sz.deny && (q = U)
					});
					let B = [];
					return ee && (B = d(ee)), q && (B = B.concat(d(q))), {
						permission_groups: te,
						scopes: B
					}
				},
				O = "permission-groups-",
				_ = "permission-groups-expiring-",
				b = 1 * 24 * 60 * 60,
				I = new Map,
				A = P => L(O, P),
				D = P => L(_, P),
				L = (P, z) => {
					if (!z) return [];
					const te = I.get(z);
					if (te) return te;
					const ee = e.E.get(`${P}${z}`);
					return ee ? (I.set(z, ee), ee) : []
				},
				C = (P, z) => R(O, P, z),
				k = (P, z) => R(_, P, z),
				R = (P, z, te) => {
					const ee = [];
					for (let B = 0; B < sessionStorage.length; B++) {
						const U = sessionStorage.key(B);
						(U == null ? void 0 : U.startsWith(P)) && ee.push(U)
					}
					ee.length >= 5 && e.E.remove(ee[0]);
					let q;
					return P === _ && (q = b), e.E.set(`${P}${z}`, te, q)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				F: function() {
					return e
				}
			});
			let e = function(r) {
				return r.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", r.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", r.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", r.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", r.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", r.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", r.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", r.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", r.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", r.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", r.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", r.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", r.GET_SYN_PROTECTION_RULE = "view syn protection rules list", r.GET_SYN_PROTECTION_RULES = "view syn protection rule", r.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", r.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", r.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", r.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", r.GET_SYN_PROTECTION_FILTER = "view syn protection filter", r.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", r.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", r.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", r.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", r.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", r.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", r.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", r.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", r.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", r.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", r.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", r.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", r.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", r.GET_DNS_PROTECTION_RULES = "view dns protection rules list", r.GET_DNS_PROTECTION_RULE = "view dns protection rule", r.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", r.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", r.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", r
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				KO: function() {
					return c
				},
				L9: function() {
					return n
				},
				N3: function() {
					return f
				},
				zE: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(o) {
				for (var a = 1; a < arguments.length; a++) {
					var v = arguments[a] != null ? Object(arguments[a]) : {},
						p = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(v).filter(function(d) {
						return Object.getOwnPropertyDescriptor(v, d).enumerable
					})), p.forEach(function(d) {
						u(o, d, v[d])
					})
				}
				return o
			}

			function u(o, a, v) {
				return a = s(a), a in o ? Object.defineProperty(o, a, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[a] = v, o
			}

			function s(o) {
				var a = m(o, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(o, a) {
				if (typeof o != "object" || o === null) return o;
				var v = o[Symbol.toPrimitive];
				if (v !== void 0) {
					var p = v.call(o, a || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(o)
			}
			let c = function(o) {
					return o.PURCHASE_WORKERS_PAID = "navigate to workers plan page", o.LIST_CONFIGS = "list hyperdrive configs", o.SEARCH_CONFIGS = "search hyperdrive configs", o.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", o.VIEW_CONFIG_DETAILS = "view hyperdrive config details", o.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", o.UPDATE_ORIGIN_CONN_LIM_SETTINGS = "update hyperdrive config origin connection limit settings", o.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", o.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", o.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", o.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", o.CLICK_QUICK_LINK = "click hyperdrive quick link", o.CLICK_DISCORD = "click hyperdrive discord", o.CLICK_COMMUNITY = "click hyperdrive community", o
				}({}),
				l = function(o) {
					return o[o["connection string"] = 0] = "connection string", o[o.manual = 1] = "manual", o
				}({}),
				f = function(o) {
					return o[o.success = 0] = "success", o[o.failure = 1] = "failure", o
				}({});
			const n = (o, a = {}) => {
				r().sendEvent(o, i({}, a, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/routes.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				KJ: function() {
					return I
				},
				_m: function() {
					return T
				},
				imagesEndpoints: function() {
					return se
				},
				vQ: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function r(he) {
				for (var De = 1; De < arguments.length; De++) {
					var Me = arguments[De] != null ? Object(arguments[De]) : {},
						Fe = Object.keys(Me);
					typeof Object.getOwnPropertySymbols == "function" && Fe.push.apply(Fe, Object.getOwnPropertySymbols(Me).filter(function(Se) {
						return Object.getOwnPropertyDescriptor(Me, Se).enumerable
					})), Fe.forEach(function(Se) {
						i(he, Se, Me[Se])
					})
				}
				return he
			}

			function i(he, De, Me) {
				return De = u(De), De in he ? Object.defineProperty(he, De, {
					value: Me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : he[De] = Me, he
			}

			function u(he) {
				var De = s(he, "string");
				return typeof De == "symbol" ? De : String(De)
			}

			function s(he, De) {
				if (typeof he != "object" || he === null) return he;
				var Me = he[Symbol.toPrimitive];
				if (Me !== void 0) {
					var Fe = Me.call(he, De || "default");
					if (typeof Fe != "object") return Fe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (De === "string" ? String : Number)(he)
			}
			const m = (0, e.BC)`/${"accountId"}/images`,
				c = (0, e.BC)`${m}/images`,
				l = (0, e.BC)`${m}/variants`,
				f = (0, e.BC)`${m}/keys`,
				n = (0, e.BC)`${m}/bundle-checkout-success`,
				o = (0, e.BC)`${c}/${"imageId"}`,
				a = (0, e.BC)`${c}/detail`,
				v = (0, e.BC)`${c}/edit`,
				p = (0, e.BC)`${l}/create`,
				d = (0, e.BC)`${l}/edit/${"variantId"}`,
				E = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				T = (0, e.BC)`${m}/sourcing-kit`,
				y = (0, e.BC)`${m}/delivery-zones`,
				g = (0, e.BC)`${y}/${"zoneId"}/settings`,
				O = (0, e.BC)`${m}/plans`,
				_ = (0, e.BC)`${m}/manage-plan`,
				b = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				I = {
					root: m,
					images: c,
					variants: l,
					keys: f,
					legacyImageDetailPage: o,
					imageDetailPage: a,
					imageEditPage: v,
					bundleCheckoutSuccess: n,
					variantCreatePage: p,
					variantEditPage: d,
					sourcingKit: T,
					subscriptions: E,
					deliveryZones: y,
					deliveryZoneSettings: g,
					plansPage: O,
					managePlan: _
				},
				A = r({}, I, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: b
				}),
				D = (0, e.BC)`/accounts/${"accountId"}`,
				L = (0, e.BC)`${D}/images/v2`,
				C = (0, e.BC)`/zones/${"zoneId"}`,
				k = (0, e.BC)`${L}/sourcingkit`,
				R = (0, e.BC)`${k}/migrations`,
				P = (0, e.BC)`${k}/migrations/${"migrationId"}`,
				z = (0, e.BC)`${k}/migrations/${"migrationId"}/logs`,
				te = (0, e.BC)`${k}/migrations/${"migrationId"}/lifecycle/start`,
				ee = (0, e.BC)`${k}/migrations/${"migrationId"}/lifecycle/abort`,
				q = (0, e.BC)`${k}/migrations/${"migrationId"}/lifecycle`,
				B = (0, e.BC)`${k}/sources`,
				U = (0, e.BC)`${k}/sources/${"sourceId"}`,
				X = (0, e.BC)`${k}/sources/${"sourceId"}/connectivity`,
				K = (0, e.BC)`${k}/sources/connectivity_precheck`,
				M = (0, e.BC)`/zones?account.id=${"accountId"}`,
				j = {
					migrationList: R,
					migration: P,
					migrationLogs: z,
					sourceList: B,
					migrationStart: te,
					migrationAbort: ee,
					migrationProgress: q,
					source: U,
					sourceConnectivityCheck: X,
					sourceConnectivityPreCheck: K
				},
				F = (0, e.BC)`/billing/upgrade-subscription`,
				G = (0, e.BC)`${D}/settings/transformations`,
				J = (0, e.BC)`${C}/settings/transformations`,
				ne = (0, e.BC)`${C}/settings/transformations_allowed_origins`,
				Y = (0, e.BC)`${C}/settings/transformations_c2pa`,
				ue = (0, e.BC)`${D}/settings/ut-billing`,
				W = (0, e.BC)`${C}`,
				re = (0, e.BC)`${C}/entitlements`,
				$ = (0, e.BC)`${C}/settings`,
				oe = (0, e.BC)`${C}/flags`,
				ie = (0, e.BC)`${C}/subscription`,
				se = {
					sourcingKitEndpoints: j,
					deliveryZonesEndpoints: {
						transformationsConfigList: G,
						transformationsZoneConfig: J,
						allowedOriginsZoneConfig: ne,
						preserveContentCredentialsZoneConfig: Y,
						upgradeSubscription: F,
						utBillingConfig: ue
					},
					zones: {
						zones: M,
						zoneDetail: W,
						zoneSettings: $,
						zoneEntitlements: re,
						zoneFlags: oe,
						zoneSubscription: ie
					}
				}
		},
		"../react/pages/images/selectors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$4: function() {
					return u
				},
				GH: function() {
					return a
				},
				JZ: function() {
					return p
				},
				aR: function() {
					return n
				},
				db: function() {
					return m
				},
				ib: function() {
					return d
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
				i = t("../react/common/selectors/zoneSelectors.ts");
			const u = "sourcing_kit_enabled",
				s = "sourcing_kit_waitlist",
				m = "images",
				c = "unified_images_enabled",
				l = "c2pa_polish",
				f = "CloudflareImages",
				n = y => !!(0, r.BF)(y, "images.transformations_enabled"),
				o = y => Boolean((0, r.BF)(y, "images.enabled")),
				a = y => {
					const g = (0, r.BF)(y, "images.storage");
					return typeof g == "number" && g > 0
				},
				v = y => Boolean((0, r.BF)(y, "contract.customer_enabled")),
				p = y => Boolean((0, e.oI)(y, m, u)),
				d = y => Boolean((0, i.Le)(y, f, u)),
				E = y => Boolean(getAccountFlipperFlag(y, f, c)),
				T = y => Boolean((0, i.Le)(y, f, l))
		},
		"../react/pages/internal-dns/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				jx: function() {
					return e
				},
				xk: function() {
					return s
				},
				xo: function() {
					return m
				},
				yt: function() {
					return u
				},
				z7: function() {
					return i
				}
			});
			const e = "internal",
				r = {
					ADD: "add",
					IMPORT: "import"
				},
				i = {
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
				u = "bulk_internal_zones",
				s = "internal-dns",
				m = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_3V6auNfVdQDWthk"
		},
		"../react/pages/internal-dns/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				N3: function() {
					return f
				},
				Rl: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(o) {
				for (var a = 1; a < arguments.length; a++) {
					var v = arguments[a] != null ? Object(arguments[a]) : {},
						p = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(v).filter(function(d) {
						return Object.getOwnPropertyDescriptor(v, d).enumerable
					})), p.forEach(function(d) {
						u(o, d, v[d])
					})
				}
				return o
			}

			function u(o, a, v) {
				return a = s(a), a in o ? Object.defineProperty(o, a, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[a] = v, o
			}

			function s(o) {
				var a = m(o, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(o, a) {
				if (typeof o != "object" || o === null) return o;
				var v = o[Symbol.toPrimitive];
				if (v !== void 0) {
					var p = v.call(o, a || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(o)
			}
			const c = "user journey",
				l = "internal-dns";
			let f = function(o) {
				return o.CLICK_GIVE_FEEDBACK = "click give feedback", o.CLICK_NAVIGATION_TAB = "click navigation tab", o.CLICK_CREATE_AN_INTERNAL_ZONE = "click create an internal zone", o.CLICK_SEARCH_BY_ZONE_NAME = "search by zone name", o.CLICK_CREATE_A_VIEW = "click create a view", o.CLICK_SEARCH_BY_RECORD_NAME = "search by record name", o.CLICK_SEARCH_BY_VIEW_NAME = "search by view name", o.CLICK_SAVE_VIEW = "click save view", o.CLICK_SAVE_ZONE = "click save zone", o.CLICK_ZONE_NAME = "click zone name", o.CLICK_ADD_A_RECORD = "click add a record", o.CLICK_ADD_RECORD_SAVE = "click add record save", o.CLICK_RECORD_EDIT = "click record edit", o.CLICK_EDIT_RECORD_SAVE = "click edit record save", o.CLICK_IMPORT_RECORDS = "click import records", o.CLICK_MANAGE_LINKED_VIEWS = "click manage linked views", o.CLICK_SAVE_MANAGE_LINKED_VIEWS = "click save manage linked views", o.CLICK_VIEW_RECORD = "click view record", o
			}({});
			const n = (o, a = {}) => {
				r().sendEvent(o, i({
					category: c,
					product: l
				}, a))
			}
		},
		"../react/pages/magic/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				GF: function() {
					return v
				},
				H3: function() {
					return c
				},
				H8: function() {
					return s
				},
				J: function() {
					return d
				},
				Nz: function() {
					return l
				},
				UQ: function() {
					return T
				},
				Up: function() {
					return u
				},
				W8: function() {
					return f
				},
				Ws: function() {
					return y
				},
				Xg: function() {
					return o
				},
				Y_: function() {
					return a
				},
				_j: function() {
					return i
				},
				a4: function() {
					return p
				},
				jS: function() {
					return E
				},
				rF: function() {
					return m
				},
				rG: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/utils/translator.tsx");
			const i = {
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
				u = () => [{
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
				s = g => [{
					value: "low",
					label: g("setting.low")
				}, {
					value: "mid",
					label: g("setting.medium")
				}, {
					value: "high",
					label: g("setting.high")
				}],
				m = g => [{
					value: "request",
					label: g("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: g("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				c = g => [{
					value: "unidirectional",
					label: g("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: g("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				l = "magic-transit",
				f = "magic-wan",
				n = "gre_tunnel",
				o = "ipsec_tunnel",
				a = "interconnect",
				v = 64,
				p = 1476,
				d = "mid",
				E = "reply",
				T = g => [{
					value: void 0,
					label: g("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: g("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: g("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				y = g => [{
					value: "all",
					label: g("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: g("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: g("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Yt: function() {
					return u
				},
				_u: function() {
					return r
				},
				bK: function() {
					return e
				},
				lC: function() {
					return i
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
				i = "user journey",
				u = 60
		},
		"../react/pages/magic/overview/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				VZ: function() {
					return u
				},
				lC: function() {
					return i
				},
				r8: function() {
					return r
				},
				uB: function() {
					return s
				}
			});
			var e = t("../react/pages/magic/constants.ts");
			const r = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				i = "user journey",
				u = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				s = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				W_: function() {
					return r
				},
				X: function() {
					return e
				},
				lC: function() {
					return i
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
				i = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				gb: function() {
					return n
				},
				iP: function() {
					return A
				},
				xL: function() {
					return y
				},
				rD: function() {
					return L
				},
				oT: function() {
					return p
				},
				i2: function() {
					return C
				},
				x1: function() {
					return m
				},
				lW: function() {
					return l
				},
				UA: function() {
					return b
				},
				K5: function() {
					return a
				},
				Ii: function() {
					return O
				},
				PJ: function() {
					return D
				},
				bK: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				s = t("../node_modules/@cloudflare/elements/es/index.js");
			const m = () => r().createElement(c, null, r().createElement("svg", {
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
				c = (0, i.LM)(({
					theme: k
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
				l = () => r().createElement(f, null, r().createElement("svg", {
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
				f = (0, i.LM)(({
					theme: k
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
				n = () => r().createElement(o, null, r().createElement(s.Ei, {
					alt: "airplane",
					src: u,
					width: "85%"
				})),
				o = (0, i.LM)(({
					theme: k
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
				a = () => r().createElement(v, null, r().createElement("svg", {
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
				v = (0, i.LM)(({
					theme: k
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
				p = () => r().createElement(d, null, r().createElement("svg", {
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
				d = (0, i.LM)(({
					theme: k
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
				E = () => r().createElement(T, null, r().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				T = (0, i.LM)(({
					theme: k
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
				y = () => r().createElement(g, null, r().createElement("svg", {
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
				g = (0, i.LM)(({
					theme: k
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
				O = () => r().createElement(_, null, r().createElement("svg", {
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
				_ = (0, i.LM)(({
					theme: k
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
				b = () => r().createElement(I, null, r().createElement("svg", {
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
				I = (0, i.LM)(({
					theme: k
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
				A = () => r().createElement("svg", {
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
				D = () => r().createElement("svg", {
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
				L = () => r().createElement("svg", {
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
				C = () => r().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				A2: function() {
					return c
				},
				He: function() {
					return s
				},
				N$: function() {
					return m
				},
				Qq: function() {
					return i
				},
				ST: function() {
					return u
				},
				wM: function() {
					return r
				}
			});
			var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const r = {
					PAGE: "apple-login"
				},
				i = "login-apple-jwt",
				u = "cf-test",
				s = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				m = l => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: l ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: l ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: l ? e.rD : e.PJ
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
		"../react/pages/page-rules/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				_: function() {
					return i
				},
				c: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let i = function(s) {
				return s.TEMPLATE_SELECTED = "template selected", s.TEMPLATE_PRODUCT_SELECTED = "template product selected", s.TEMPLATE_SAVE_DRAFT = "template save draft", s.TEMPLATE_CANCEL = "template cancel", s.TEMPLATE_DEPLOY = "template deploy", s
			}({});
			const u = (s, m) => r().sendEvent(s, {
				template_name: m
			})
		},
		"../react/pages/pages/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				A: function() {
					return E
				},
				C1: function() {
					return f
				},
				GF: function() {
					return L
				},
				HD: function() {
					return g
				},
				IK: function() {
					return s
				},
				L7: function() {
					return i
				},
				Li: function() {
					return d
				},
				Ni: function() {
					return I
				},
				OG: function() {
					return B
				},
				QF: function() {
					return ee
				},
				QV: function() {
					return b
				},
				Sx: function() {
					return O
				},
				Ub: function() {
					return te
				},
				X3: function() {
					return o
				},
				bA: function() {
					return k
				},
				eO: function() {
					return a
				},
				fH: function() {
					return p
				},
				fQ: function() {
					return T
				},
				fR: function() {
					return e
				},
				ff: function() {
					return C
				},
				iS: function() {
					return y
				},
				nY: function() {
					return _
				},
				w3: function() {
					return u
				},
				wJ: function() {
					return l
				},
				wp: function() {
					return v
				},
				yu: function() {
					return n
				},
				zF: function() {
					return D
				},
				zG: function() {
					return A
				}
			});
			const e = "api.pages.cloudflare.com",
				r = "cloudflare-workers-and-pages",
				i = {
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
				u = "Allow Members - Cloudflare Pages",
				s = 58,
				m = {
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
				l = 2e3,
				f = 100,
				n = 350,
				o = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				v = 10,
				p = "_headers",
				d = "_redirects",
				E = "_routes.json",
				T = "_worker.js",
				y = "do-a-barrel-roll",
				g = [p, d, E, T],
				O = 1024 * 1024 * 25,
				_ = 1e3,
				b = {
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
				I = 1e5,
				A = 75e3,
				D = 2e5,
				L = 15e4,
				C = 3e3,
				k = 2250,
				R = "workers",
				P = "cloudflare_pages_build_caching",
				z = 2;
			let te = function(U) {
				return U[U.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", U[U.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", U[U.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", U[U.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", U[U.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", U[U.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", U
			}({});
			const ee = 1,
				q = 2,
				B = 2
		},
		"../react/pages/pages/routes.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Hv: function() {
					return i
				},
				_j: function() {
					return r
				},
				zE: function() {
					return s
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
				i = {
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
				u = m => `${m.subdomain}.pages.dev`,
				s = {
					installation: {
						github: {
							user: (0, e.BC)`https://github.com/settings/installations/${"installation_id"}`,
							organization: (0, e.BC)`https://github.com/organizations/${"organization_name"}/settings/installations/${"installation_id"}`
						},
						gitlab: (0, e.BC)`https://gitlab.com/${"username"}/${"repo"}/-/hooks/`
					}
				}
		},
		"../react/pages/pipelines/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				KO: function() {
					return c
				},
				L9: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var o = 1; o < arguments.length; o++) {
					var a = arguments[o] != null ? Object(arguments[o]) : {},
						v = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(a).filter(function(p) {
						return Object.getOwnPropertyDescriptor(a, p).enumerable
					})), v.forEach(function(p) {
						u(n, p, a[p])
					})
				}
				return n
			}

			function u(n, o, a) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = a, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var v = a.call(n, o || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				l = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const f = (n, o = {}) => {
				r().sendEvent(n, i({}, o, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/profile/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				QV: function() {
					return u
				},
				Xn: function() {
					return r
				},
				iH: function() {
					return e
				},
				xq: function() {
					return i
				}
			});
			const e = "iam-authentication",
				r = "login",
				i = "profile",
				u = {
					[r]: {
						clickTryOther2FAMethodOrBackupCode: "click try another 2fa method or backup code",
						clickTryRecovery: "click try recovery",
						clickLoginFromMobileApp2fa: "click login on mobile-app/backup code 2fa"
					},
					[i]: {
						clickRegenerateBackupCodes: "click regenerate backup codes"
					}
				}
		},
		"../react/pages/r2/routes.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Hv: function() {
					return i
				},
				Jg: function() {
					return m
				},
				_j: function() {
					return r
				},
				vF: function() {
					return s
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
				i = {
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
				u = c => {
					const l = "r2.cloudflarestorage.com";
					switch (c) {
						case "default":
							return l;
						case "eu":
							return `eu.${l}`;
						case "fedramp":
							return `fedramp.${l}`
					}
				},
				s = (c, l) => {
					const f = u(l);
					return `https://${c}.${f}`
				},
				m = (c, l, f) => `${s(c,l)}/${f}`
		},
		"../react/pages/r2/selectors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts");
			const u = "r2_migrator_waitlist",
				s = "r2migrator",
				m = "r2",
				c = "r2_storage_migrator",
				l = "r2_storage_migrator",
				f = a => getAccountEntitlement(a, "r2.enabled"),
				n = a => Boolean((0, i.Le)(a, c, u)),
				o = a => Boolean(getAccountFlipperFlagsChanges(a, l, s))
		},
		"../react/pages/secrets-store/resources/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Hf: function() {
					return I
				},
				JJ: function() {
					return m
				},
				Js: function() {
					return u
				},
				LN: function() {
					return d
				},
				Nm: function() {
					return a
				},
				Oh: function() {
					return T
				},
				Q2: function() {
					return D
				},
				QF: function() {
					return E
				},
				RR: function() {
					return g
				},
				T_: function() {
					return A
				},
				Xm: function() {
					return c
				},
				Zl: function() {
					return L
				},
				dv: function() {
					return s
				},
				fp: function() {
					return o
				},
				jx: function() {
					return b
				},
				nQ: function() {
					return v
				},
				px: function() {
					return y
				},
				tP: function() {
					return i
				},
				vh: function() {
					return p
				},
				wB: function() {
					return k
				},
				z3: function() {
					return C
				},
				zt: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/yup/es/index.js");
			const i = "secrets-store-account-level",
				u = "https://developers.cloudflare.com/secrets-store/",
				s = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				m = 1,
				c = 10,
				l = 100;
			let f = function(R) {
					return R.NAME = "name", R
				}({}),
				n = function(R) {
					return R.NAME = "name", R
				}({});
			const o = {
				initialPaginationState: {
					page: m,
					perPage: c
				},
				initialSortState: {
					name: f.NAME,
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
			let a = function(R) {
					return R.NAME = "name", R.COMMENT = "comment", R.TAGS = "tags", R.SERVICES = "services", R.STATUS = "status", R
				}({}),
				v = function(R) {
					return R.PENDING = "pending", R.ACTIVE = "active", R.DELETED = "deleted", R
				}({}),
				p = function(R) {
					return R.LIST_SECRETS_STORES = "listSecretsStores", R.LIST_SECRETS = "listSecrets", R.GET_SECRET = "getSecret", R.SECRETS_QUOTA = "secretsQuota", R
				}({}),
				d = function(R) {
					return R.CREATE = "create", R.EDIT = "edit", R.DUPLICATE = "duplicate", R
				}({}),
				E = function(R) {
					return R.WORKERS = "workers", R.AI_GATEWAY = "ai_gateway", R
				}({});
			const T = "default_secrets_store";
			let y = function(R) {
				return R.CREATE = "create", R.EDIT = "edit", R.DUPLICATE = "duplicate", R.VIEW = "view", R
			}({});
			const g = "delete_operation",
				O = /^[a-zA-Z0-9_-]+$/,
				_ = (R, P, z, te, ee) => r.Ry().shape({
					name: r.Z_().required(R("secrets_store.form.create.errors.name.required")).matches(O, R("secrets_store.form.create.errors.name.invalid_characters")).max(255, R("secrets_store.form.create.errors.name.max")),
					value: r.Z_().test("required-if-creating", R("secrets_store.form.create.errors.value.required"), q => P || ee ? !!q : !0).max(1024, R("secrets_store.form.create.errors.value.max")),
					comment: r.Z_().max(1024, R("secrets_store.form.create.errors.comment.max")),
					scopes: r.Z_().required().oneOf(Object.values(E), R("secrets_store.form.create.errors.scopes.invalid")),
					labels: r.IX().of(r.Z_())
				}),
				b = (R, P, z, te, ee) => r.Ry().shape({
					secrets: r.IX().of(_(R, P, z, te, ee))
				}),
				I = {
					name: "",
					value: "",
					scopes: E.WORKERS,
					comment: ""
				},
				A = "secrets-store.store.secret";
			let D = function(R) {
				return R.DUPLICATE = "duplicate", R.DEPLOY = "deploy", R
			}({});
			const L = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let C = function(R) {
					return R.CREATE_SECRET = "create secrets store secret", R.EDIT_SECRET = "edit secrets store secret", R.DUPLICATE_SECRET = "duplicate secrets store secret", R.DELETE_SECRET = "delete secrets store secret", R.BIND_SECRET = "open secrets store binding drawer", R
				}({}),
				k = function(R) {
					return R.SECRETS_STORE = "secrets store main", R.WORKERS_BINDING = "workers binding drawer", R
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Ev: function() {
					return i
				},
				RY: function() {
					return e
				},
				v9: function() {
					return r
				}
			});
			let e = function(u) {
				return u.LOAD_SCAN_INFO = "load url scan information", u.INITIATE_URL_SCAN = "initiate url scan", u
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
			let i = function(u) {
				return u.LOAD_THREAT_EVENTS = "load threat events", u.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", u.THREAT_EVENTS_FILTERS = "threat events filters applied", u.ABUSE_REPORT_BUTTON_CLICK = "clicked abuse report button", u.ABUSE_REPORT_SUBMIT_CLICK = "clicked submit abuse report button", u.ABUSE_REPORT_SUBMIT_FAILED = "abuse report submission failed", u.ABUSE_REPORT_SUBMIT_SUCCESS = "abuse report submitted successfully", u
			}({})
		},
		"../react/pages/security/ai-agent/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				PJ: function() {
					return r
				},
				mG: function() {
					return e
				},
				tP: function() {
					return u
				},
				zf: function() {
					return i
				}
			});
			const e = "Hi there, I\u2019m Cloudy! I can help you identify suspicious activity, analyze traffic patterns, and recommend security rule configurations.",
				r = "open cloudy insight",
				i = "set cloudy tool response",
				u = "set cloudy tool error"
		},
		"../react/pages/security/analytics/resources/labels.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				AU: function() {
					return i
				},
				Bc: function() {
					return r
				},
				Bt: function() {
					return e
				},
				e_: function() {
					return u
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
				i = {
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
				u = {
					[i.ASN]: "firewall.analytics.services.labels.asn",
					[i.COUNTRY]: "firewall.analytics.services.labels.country",
					[i.IP]: "firewall.analytics.services.labels.ip",
					[i.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[i.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[i.VALIDATION]: "firewall.analytics.services.labels.validation",
					[i.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[i.WAF]: "firewall.analytics.services.labels.waf",
					[i.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[i.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[i.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[i.BIC]: "firewall.analytics.services.labels.bic",
					[i.HOT]: "firewall.analytics.services.labels.hot",
					[i.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[i.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[i.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[i.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[i.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[i.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[i.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[i.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[i.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[i.DLP]: "firewall.analytics.services.labels.dlp",
					[i.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				}
		},
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				DC: function() {
					return v
				},
				Ff: function() {
					return c
				},
				Lz: function() {
					return a
				},
				RM: function() {
					return f
				},
				Ss: function() {
					return o
				},
				dR: function() {
					return s
				},
				gW: function() {
					return m
				},
				r5: function() {
					return l
				},
				y$: function() {
					return n
				},
				zs: function() {
					return u
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				i = t("../react/pages/security/analytics/resources/labels.ts");
			const u = ["block", "challenge", "jschallenge", "managed_challenge"],
				s = {
					label: "security_analytics.filters.mitigated",
					parse: p => p === "true" || p === !0,
					urlParam: "mitigated",
					type: e.kE.select,
					options: [!0, !1],
					operators: [r.Gn.equals, r.Gn.notEquals],
					rawLogField: "securityAction"
				},
				m = {
					label: "security_analytics.filters.security_action",
					urlParam: "mitigation-action",
					type: e.kE.select,
					options: Object.keys(i.Bt).filter(p => !["challenge_failed", "jschallenge_failed"].includes(p)),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securityAction"
				},
				c = {
					label: "security_analytics.filters.security_source",
					urlParam: "mitigation-service",
					type: e.kE.select,
					options: Object.keys(i.e_).filter(p => p !== "unknown"),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securitySources"
				};
			let l = function(p) {
				return p.MITIGATED_BY_WAF = "mitigatedByWAF", p.SERVED_BY_CLOUDFLARE = "servedByCloudflare", p.SERVED_BY_ORIGIN = "servedByOrigin", p
			}({});
			const f = {
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
				a = "security-analytics-log-explorer";
			let v = function(p) {
				return p.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', p.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', p.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', p.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', p.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', p.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", p.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", p.OPEN_SIDE_DRAWER = "open security analytics side drawer", p.CLOSE_SIDE_DRAWER = "close security analytics side drawer", p
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Fj: function() {
					return l
				},
				kq: function() {
					return c
				},
				xr: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var o = 1; o < arguments.length; o++) {
					var a = arguments[o] != null ? Object(arguments[o]) : {},
						v = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(a).filter(function(p) {
						return Object.getOwnPropertyDescriptor(a, p).enumerable
					})), v.forEach(function(p) {
						u(n, p, a[p])
					})
				}
				return n
			}

			function u(n, o, a) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = a, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var v = a.call(n, o || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const l = {
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
				f = ({
					name: n,
					category: o = "user journey",
					product: a = c.MAIN,
					productName: v,
					additionalData: p
				}) => {
					r().sendEvent(n, i({
						category: o,
						product: a,
						productName: v
					}, p || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Fm: function() {
					return u
				},
				N3: function() {
					return e
				},
				UN: function() {
					return i
				},
				h1: function() {
					return r
				}
			});
			let e = function(s) {
					return s.INITIAL_FETCH_SCORES = "view bots scores distribution", s.FETCH_CONFIGURATION = "view bots configuration page", s.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", s.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", s.UPDATE_SETTINGS = "update bots settings", s.DELETE_RULE = "delete bots ruleset", s.UPDATE_RULE = "update bots ruleset", s.FETCH_RULES = "view bots ruleset", s.CONFIGURE_BOT_MANAGEMENT = "view bots management", s.WAF_RULES_REDIRECT = "redirect waf rules", s.CHANGED_ZONE_SETTINGS = "change zone setting", s
				}({}),
				r = function(s) {
					return s.PROVIDED_TEMPLATE = "provided template link in detection card", s.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", s.USE_TEMPLATE = "use template", s.CREATE_FIREWALL_RULE = "create firewall rule", s.WAF_RULES = "waf rules", s
				}({});
			const i = "user journey",
				u = "Bots"
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				AL: function() {
					return c
				},
				NC: function() {
					return u
				},
				WZ: function() {
					return m
				},
				YC: function() {
					return s
				},
				aR: function() {
					return i
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
					[e.MQ.Detections]: "settings.filters.detections",
					[e.MQ.General]: "settings.filters.general"
				},
				i = {
					[e.MQ.WebApplicationExploits]: "security-waf",
					[e.MQ.DdosAttacks]: "retarget",
					[e.MQ.BotTraffic]: "security-bots",
					[e.MQ.ApiAbuse]: "api-security",
					[e.MQ.ClientSideAbuse]: "user-multi"
				},
				u = {
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
			let s = function(l) {
				return l.LOAD_SETTINGS = "load setting", l.OPEN_SIDE_MODAL_SETTING = "open side modal setting", l.CLOSE_SIDE_MODAL_SETTING = "close side modal setting", l.CHANGE_SETTING = "change setting", l.FILTER_SETTING = "filter setting", l
			}({});
			const m = {
					id: e.At.ManagedRuleset,
					titleKey: "settings.cards.managed-ruleset.title",
					descriptionKey: "settings.cards.managed-ruleset.description",
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/",
					tabs: [e.MQ.WebApplicationExploits, e.MQ.DdosAttacks],
					filters: [e.MQ.Detections],
					isGeneral: !1
				},
				c = {
					id: e.At.OwaspCore,
					titleKey: "settings.cards.owasp-core.title",
					descriptionKey: "settings.cards.owasp-core.description",
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/reference/owasp-core-ruleset/",
					tabs: [e.MQ.WebApplicationExploits],
					filters: [e.MQ.Detections],
					isGeneral: !1
				}
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/types.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				At: function() {
					return u
				},
				MQ: function() {
					return e
				},
				fo: function() {
					return i
				}
			});
			let e = function(s) {
					return s.WebApplicationExploits = "web-application-exploits", s.DdosAttacks = "ddos-attacks", s.BotTraffic = "bot-traffic", s.ApiAbuse = "api-abuse", s.ClientSideAbuse = "client-side-abuse", s.DomainSettings = "domain-settings", s.WebAssetsAndEndpoints = "web-assets-and-endpoints", s.RuleTemplates = "rule-templates", s.Detections = "detections", s.General = "general", s
				}({}),
				r = function(s) {
					return s.DomainSettings = "domain-settings", s.WebAssetsAndEndpoints = "web-assets-and-endpoints", s.RuleTemplates = "rule-templates", s.Detections = "detections", s
				}({}),
				i = function(s) {
					return s.Tab = "tabs", s.Filters = "filters", s.Search = "search", s
				}({}),
				u = function(s) {
					return s.OptOut = "opt-out", s.AILabyrinth = "ai-labyrinth", s.BlockAIBots = "block-ai-bots", s.BrowserIntegrity = "browser-integrity", s.ChallengePassage = "challenge-passage", s.ClientCertificates = "client-certificates", s.CloudflareManagedRuleset = "cloudflare-managed-ruleset", s.CreateDeveloperPortal = "create-developer-portal", s.CustomFallthrough = "custom-fallthrough", s.EndpointDiscovery = "endpoint-discovery", s.FirewallAi = "firewall-ai", s.HttpDdos = "http-ddos", s.IpAccessRules = "ip-access-rules", s.IpLists = "ip-lists", s.JwtValidation = "jwt-validation", s.Labels = "labels", s.LeakedCredentialCheck = "leaked-credential-check", s.MaliciousUploadDetection = "malicious-upload-detection", s.ManagedRuleset = "managed-ruleset", s.Mtls = "mtls", s.NetworkDdos = "network-ddos", s.OwaspCore = "owasp-core", s.RateLimitAuthentication = "rate-limit-authentication", s.ReplaceInsecureJavascript = "replace-insecure-javascript", s.RobotsTxt = "robots-txt", s.SequenceDetection = "sequence-detection", s.SchemaDiscovery = "schema-discovery", s.SchemaValidation = "schema-validation", s.SecurityLevel = "security-level", s.SecurityTxt = "security-txt", s.SensitiveDataDetection = "sensitive-data-detection", s.SessionIdentifiers = "session-identifiers", s.SslDdos = "ssl-ddos", s.TokenConfigurations = "token-configurations", s.UserAgentBlocking = "user-agent-blocking", s.VolumetricAbuse = "volumetric-abuse", s.ZoneLockdown = "zone-lockdown", s.ContinuousScriptMonitoring = "continuous-script-monitoring", s.BotManagement = "bot-management", s.SuperBotFightMode = "super-bot-fight-mode", s.BotFightMode = "bot-fight-mode", s
				}({})
		},
		"../react/pages/security/overview/resources/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				AZ: function() {
					return u
				},
				BQ: function() {
					return s
				},
				Ht: function() {
					return i
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
					return m
				}
			});
			let e = function(l) {
				return l.NAME = "description", l.SOURCE = "source", l.LAST_UPDATE = "lastUpdatedAt", l.ACTIVITY = "activity", l
			}({});
			const r = 5;
			let i = function(l) {
					return l.EXTERNAL_DOCUMENTATION = "external_documentation", l.LINK_TO_MANAGED = "link_to_managed_rules", l.LINK_TO_EVENTS = "link_to_security_events", l.LINK_TO_DDOS = "link_to_ddos", l.LINK_BOT_MGMT = "link_to_bot_mgmt", l.LINK_TO_AI_AUDIT = "link_to_ai_audit", l.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", l.LINK_TO_PAGE_SHIELD = "link_to_page_shield", l.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", l.LINK_TO_SECURITY_EVENTS = "link_to_security_events", l.LINK_TO_IP_RULE = "link_to_ip_rule", l.LINK_TO_CONFIGURATION = "link_to_configuration", l.LINK_TO_UPLOAD_SCHEMAS = "link_to_upload_schemas", l.LINK_TO_WEB_ASSETS = "link_to_web_assets", l.LINK_TO_DOMAINS = "link_to_domains", l
				}({}),
				u = function(l) {
					return l.LOAD_INSIGHTS = "load overview action items", l.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", l.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", l.CLICK_ACTION_INSIGHT = "click overview action item suggestion", l
				}({});
			const s = "security-overview-all-suggestions",
				m = [{
					title: "overview.modules.tab",
					url: "/"
				}, {
					title: "overview.all_suggestions.tab",
					url: "/all"
				}];
			let c = function(l) {
				return l.ARCHIVED = "archived", l.FRAUD_AND_ACCOUNT_ABUSE = "fraud_account_abuse", l
			}({})
		},
		"../react/pages/security/page-shield/resources/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				CP: function() {
					return L
				},
				FV: function() {
					return q
				},
				KH: function() {
					return A
				},
				Ks: function() {
					return K
				},
				Lj: function() {
					return X
				},
				MC: function() {
					return o
				},
				Mq: function() {
					return I
				},
				OV: function() {
					return ee
				},
				Oq: function() {
					return D
				},
				QM: function() {
					return _
				},
				SI: function() {
					return U
				},
				SJ: function() {
					return T
				},
				Sk: function() {
					return R
				},
				Ti: function() {
					return M
				},
				Uc: function() {
					return b
				},
				Uq: function() {
					return l
				},
				Uv: function() {
					return te
				},
				V0: function() {
					return f
				},
				VT: function() {
					return p
				},
				YC: function() {
					return P
				},
				j$: function() {
					return y
				},
				qc: function() {
					return E
				},
				sV: function() {
					return C
				},
				sW: function() {
					return B
				},
				u8: function() {
					return v
				},
				v5: function() {
					return n
				},
				xg: function() {
					return z
				},
				yd: function() {
					return O
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				i = t("../react/pages/security/page-shield/resources/types.ts");

			function u(j) {
				for (var F = 1; F < arguments.length; F++) {
					var G = arguments[F] != null ? Object(arguments[F]) : {},
						J = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols(G).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(G, ne).enumerable
					})), J.forEach(function(ne) {
						s(j, ne, G[ne])
					})
				}
				return j
			}

			function s(j, F, G) {
				return F = m(F), F in j ? Object.defineProperty(j, F, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[F] = G, j
			}

			function m(j) {
				var F = c(j, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function c(j, F) {
				if (typeof j != "object" || j === null) return j;
				var G = j[Symbol.toPrimitive];
				if (G !== void 0) {
					var J = G.call(j, F || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(j)
			}
			const l = 50,
				f = 9,
				n = "copy script url page shield",
				o = "disable page shield",
				a = "click documentation link",
				v = "enable page shield",
				p = "filter search page shield",
				d = "filter search view all page shield",
				E = "hover score tooltip page shield",
				T = "open alert modal page shield",
				y = "change pagination page shield",
				g = "close script modal page shield",
				O = "open script modal page shield",
				_ = "select alert type page shield",
				b = "sort column page shield",
				I = {
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
					STARTS_WITH: r.Gn.startsWith,
					ENDS_WITH: r.Gn.endsWith,
					EQUALS: r.Gn.equals,
					CONTAINS: r.Gn.contains,
					DOES_NOT_CONTAIN: r.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: r.Gn.in
				},
				D = {
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
				L = u({}, D, {
					urls: u({}, D.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				C = {
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
			let k = function(j) {
				return j.SECURITY_THREATS = "Security Threats", j.C2_BOTNET = "C2 & Botnet", j.CRYPTOMINING = "Cryptomining", j.MALWARE = "Malware", j.PHISHING = "Phishing", j.SPYWARE = "Spyware", j.DGA_DOMAINS = "DGA Domains", j.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", j
			}({});
			const R = "https://www.cloudflare.com/plans/enterprise/contact/",
				P = {
					[i.I1.BASE_URI]: "page_shield.policies.form.base_uri",
					[i.I1.CHILD]: "page_shield.policies.form.child",
					[i.I1.CONNECT]: "page_shield.policies.form.connections",
					[i.I1.DEFAULT]: "page_shield.policies.form.default",
					[i.I1.FONT]: "page_shield.policies.form.font",
					[i.I1.FORM_ACTION]: "page_shield.policies.form.form",
					[i.I1.FRAME]: "page_shield.policies.form.frame",
					[i.I1.FRAME_ANCESTORS]: "page_shield.policies.form.frame_ancestors",
					[i.I1.IMAGE]: "page_shield.policies.form.img",
					[i.I1.MANIFEST]: "page_shield.policies.form.manifest",
					[i.I1.MEDIA]: "page_shield.policies.form.media",
					[i.I1.OBJECT]: "page_shield.policies.form.object",
					[i.I1.SCRIPT]: "page_shield.policies.form.script",
					[i.I1.STYLE]: "page_shield.policies.form.style",
					[i.I1.UPGRADE_INSECURE_REQUESTS]: "page_shield.policies.form.upgrade_insecure_requests",
					[i.I1.WORKER]: "page_shield.policies.form.worker"
				},
				z = {
					[i.I1.BASE_URI]: "firewall.page_shield.policies.table.base_uri",
					[i.I1.CHILD]: "firewall.page_shield.policies.table.child",
					[i.I1.CONNECT]: "firewall.page_shield.policies.table.connections",
					[i.I1.DEFAULT]: "firewall.page_shield.policies.table.default",
					[i.I1.FONT]: "firewall.page_shield.policies.table.font",
					[i.I1.FORM_ACTION]: "firewall.page_shield.policies.table.form",
					[i.I1.FRAME]: "firewall.page_shield.policies.table.frame",
					[i.I1.FRAME_ANCESTORS]: "firewall.page_shield.policies.table.frame_ancestors",
					[i.I1.IMAGE]: "firewall.page_shield.policies.table.img",
					[i.I1.MANIFEST]: "firewall.page_shield.policies.table.manifest",
					[i.I1.MEDIA]: "firewall.page_shield.policies.table.media",
					[i.I1.OBJECT]: "firewall.page_shield.policies.table.object",
					[i.I1.SCRIPT]: "firewall.page_shield.policies.table.script",
					[i.I1.SCRIPT_ELEM]: "firewall.page_shield.policies.table.script",
					[i.I1.STYLE]: "firewall.page_shield.policies.table.style",
					[i.I1.STYLE_ELEM]: "firewall.page_shield.policies.table.style",
					[i.I1.UPGRADE_INSECURE_REQUESTS]: "firewall.page_shield.policies.table.upgrade_insecure_requests",
					[i.I1.WORKER]: "firewall.page_shield.policies.table.worker"
				},
				te = {
					[i.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[i.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[i.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[i.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[i.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				ee = {
					[i.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[i.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				q = {
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
				B = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				U = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				X = {
					[i.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[i.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[i.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				K = {
					[i.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[i.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[i.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				M = {
					[i.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[i.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[i.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				CP: function() {
					return u.CP
				},
				Ks: function() {
					return u.Ks
				},
				sV: function() {
					return u.sV
				},
				SI: function() {
					return u.SI
				},
				v5: function() {
					return u.v5
				},
				xg: function() {
					return u.xg
				},
				YC: function() {
					return u.YC
				},
				MC: function() {
					return u.MC
				},
				Xe: function() {
					return _.Xe
				},
				u8: function() {
					return u.u8
				},
				Oq: function() {
					return u.Oq
				},
				VT: function() {
					return u.VT
				},
				qc: function() {
					return u.qc
				},
				V0: function() {
					return u.V0
				},
				Lj: function() {
					return u.Lj
				},
				k2: function() {
					return _.k2
				},
				$g: function() {
					return _.$g
				},
				SJ: function() {
					return u.SJ
				},
				KH: function() {
					return u.KH
				},
				Mq: function() {
					return u.Mq
				},
				FV: function() {
					return u.FV
				},
				j$: function() {
					return u.j$
				},
				I1: function() {
					return _.I1
				},
				Wq: function() {
					return _.Wq
				},
				jf: function() {
					return _.jf
				},
				sW: function() {
					return u.sW
				},
				Uq: function() {
					return u.Uq
				},
				yd: function() {
					return u.yd
				},
				QM: function() {
					return u.QM
				},
				Uc: function() {
					return u.Uc
				},
				R$: function() {
					return _.R$
				},
				Sk: function() {
					return u.Sk
				},
				gY: function() {
					return y
				},
				SE: function() {
					return f
				},
				m: function() {
					return E
				},
				xP: function() {
					return d
				},
				xl: function() {
					return p
				},
				Tb: function() {
					return v
				},
				h3: function() {
					return g
				},
				xq: function() {
					return ne
				},
				SQ: function() {
					return K
				},
				C0: function() {
					return M
				},
				av: function() {
					return A
				},
				W3: function() {
					return b
				},
				WO: function() {
					return k
				},
				Dk: function() {
					return z
				},
				we: function() {
					return ee
				},
				Yt: function() {
					return U
				},
				ex: function() {
					return B
				},
				E1: function() {
					return q
				},
				dm: function() {
					return L
				},
				oK: function() {
					return R
				},
				qZ: function() {
					return X
				},
				_4: function() {
					return j
				},
				qo: function() {
					return F
				},
				CB: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(r),
				u = t("../react/pages/security/page-shield/resources/constants.ts");

			function s(Y) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var W = arguments[ue] != null ? Object(arguments[ue]) : {},
						re = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(W).filter(function($) {
						return Object.getOwnPropertyDescriptor(W, $).enumerable
					})), re.forEach(function($) {
						m(Y, $, W[$])
					})
				}
				return Y
			}

			function m(Y, ue, W) {
				return ue = c(ue), ue in Y ? Object.defineProperty(Y, ue, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[ue] = W, Y
			}

			function c(Y) {
				var ue = l(Y, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function l(Y, ue) {
				if (typeof Y != "object" || Y === null) return Y;
				var W = Y[Symbol.toPrimitive];
				if (W !== void 0) {
					var re = W.call(Y, ue || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(Y)
			}
			const f = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", Y => (i().sendEvent(u.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), Y)),
				n = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", Y => (i().sendEvent(u.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), Y)),
				o = (Y, ue) => {
					var W;
					return JSON.stringify(s({}, ue == null || (W = ue[0]) === null || W === void 0 ? void 0 : W.parameters, Y))
				};
			let a = "";
			const v = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("start", (Y, ue, W) => (a = o(ue, W), Y)).on("success", Y => (i().sendEvent(u.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), Y)).on("error", (Y, ue, W) => o(ue, W) === a ? Y : {
					type: "noop"
				}),
				p = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				d = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", Y => (i().sendEvent(u.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), Y)),
				E = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				T = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", Y => (i().sendEvent(u.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), Y)),
				y = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				g = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var O = t("../react/app/redux/normalizer.js"),
				_ = t("../react/pages/security/page-shield/resources/types.ts");
			const b = Y => Y.pageShield.configuration,
				I = Y => {
					var ue;
					return (ue = Y.pageShield.configuration.data) === null || ue === void 0 ? void 0 : ue.enabled
				},
				A = Y => {
					var ue;
					return (ue = b(Y)) === null || ue === void 0 ? void 0 : ue.data
				},
				D = Y => Y.pageShield.scripts,
				L = Y => Y.pageShield.script,
				C = Y => Y.pageShield.connections,
				k = Y => Y.pageShield.connection,
				R = (0, O.P1)("pageShieldScripts", D),
				P = (0, O.P1)("pageShieldScript", L),
				z = (0, O.P1)("pageShieldConnections", C),
				te = (0, O.P1)("pageShieldConnection", k),
				ee = (Y, ue) => Y === _.Wq.SCRIPT_MONITOR ? R(ue) || [] : z(ue) || [],
				q = (Y, ue) => Y === _.Wq.SCRIPT_MONITOR ? D(ue) || [] : C(ue) || [],
				B = (Y, ue) => Y === _.Wq.SCRIPT_MONITOR ? P(ue) : te(ue),
				U = Y => Y.pageShield.domainIntel,
				X = Y => Y.pageShield.whoIsRecord,
				K = (Y, ue, W) => {
					var re;
					const $ = Object.values(W).map(oe => ({
						key: oe,
						label: u.Uv[oe],
						score: Y[oe]
					})).filter(oe => oe.score !== void 0 && oe.score <= ue);
					return ue === u.V0 && $.length === 0 && ((re = Y.js_integrity_score) !== null && re !== void 0 ? re : 100) <= ue && $.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), $
				},
				M = (Y, ue) => Object.values(ue).filter(W => Y[W] === !0).map(W => u.OV[W]),
				j = Y => Y === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				F = (Y, ue) => Y[_.$g.MagecartScore] !== void 0 && Y[_.$g.MagecartScore] <= ue || Y[_.$g.MalwareScore] !== void 0 && Y[_.$g.MalwareScore] <= ue || Y[_.$g.CryptominingScore] !== void 0 && Y[_.$g.CryptominingScore] <= ue || Y.js_integrity_score !== void 0 && Y.js_integrity_score <= ue,
				G = ["cdn.jsdelivr.net", "unpkg.com"],
				J = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				ne = Y => {
					if (Y.includes("@latest")) {
						const W = Y.split("@latest");
						if (W.length != 2) return;
						const re = W[0].length,
							$ = re + "@latest".length;
						return [re, $]
					}
					if (!!G.some(W => Y.includes(W)))
						for (const W of J) {
							const re = Y.match(W);
							if (!re) continue;
							const $ = re.index;
							if ($ === 0) return null;
							const oe = $ + re[0].length;
							return [$, oe]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$g: function() {
					return f
				},
				I1: function() {
					return s
				},
				R$: function() {
					return n
				},
				Wq: function() {
					return l
				},
				Xe: function() {
					return m
				},
				jf: function() {
					return c
				},
				k2: function() {
					return o
				}
			});

			function e(a) {
				for (var v = 1; v < arguments.length; v++) {
					var p = arguments[v] != null ? Object(arguments[v]) : {},
						d = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(p).filter(function(E) {
						return Object.getOwnPropertyDescriptor(p, E).enumerable
					})), d.forEach(function(E) {
						r(a, E, p[E])
					})
				}
				return a
			}

			function r(a, v, p) {
				return v = i(v), v in a ? Object.defineProperty(a, v, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[v] = p, a
			}

			function i(a) {
				var v = u(a, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function u(a, v) {
				if (typeof a != "object" || a === null) return a;
				var p = a[Symbol.toPrimitive];
				if (p !== void 0) {
					var d = p.call(a, v || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(a)
			}
			let s = function(a) {
				return a.BASE_URI = "base-uri", a.CHILD = "child-src", a.CONNECT = "connect-src", a.DEFAULT = "default-src", a.FONT = "font-src", a.FORM_ACTION = "form-action", a.FRAME = "frame-src", a.FRAME_ANCESTORS = "frame-ancestors", a.IMAGE = "img-src", a.MANIFEST = "manifest-src", a.MEDIA = "media-src", a.OBJECT = "object-src", a.SCRIPT = "script-src", a.SCRIPT_ELEM = "script-src-elem", a.STYLE = "style-src", a.STYLE_ELEM = "style-src-elem", a.WORKER = "worker-src", a.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", a
			}({});
			const m = e({}, s, {
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
			let c = function(a) {
					return a.MONITOR = "monitor", a.POLICIES = "policies", a.SETTINGS = "settings", a
				}({}),
				l = function(a) {
					return a.SCRIPT_MONITOR = "script", a.CONNECTION_MONITOR = "connection", a.COOKIE_MONITOR = "cookie", a
				}({}),
				f = function(a) {
					return a.CryptominingScore = "cryptomining_score", a.MalwareScore = "malware_score", a.MagecartScore = "magecart_score", a
				}({}),
				n = function(a) {
					return a.DataflowScore = "dataflow_score", a.ObfuscationScore = "obfuscation_score", a
				}({}),
				o = function(a) {
					return a.DomainMalicious = "domain_reported_malicious", a.UrlMalicious = "url_reported_malicious", a
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				_C: function() {
					return p
				},
				_R: function() {
					return d
				},
				dY: function() {
					return T
				},
				fy: function() {
					return O
				},
				ji: function() {
					return v
				},
				pR: function() {
					return E
				},
				pV: function() {
					return _
				},
				rj: function() {
					return g
				},
				yR: function() {
					return b
				},
				zf: function() {
					return y
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				r = t("../../../common/util/types/src/api/phases/fields.tsx"),
				i = t("webpack/sharing/consume/default/react/react"),
				u = t.n(i),
				s = t("../react/utils/translator.tsx"),
				m = t("../react/pages/security/resources/types.ts"),
				c = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				l = t("../node_modules/@cloudflare/elements/es/index.js");

			function f(I) {
				for (var A = 1; A < arguments.length; A++) {
					var D = arguments[A] != null ? Object(arguments[A]) : {},
						L = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(D).filter(function(C) {
						return Object.getOwnPropertyDescriptor(D, C).enumerable
					})), L.forEach(function(C) {
						n(I, C, D[C])
					})
				}
				return I
			}

			function n(I, A, D) {
				return A = o(A), A in I ? Object.defineProperty(I, A, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[A] = D, I
			}

			function o(I) {
				var A = a(I, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function a(I, A) {
				if (typeof I != "object" || I === null) return I;
				var D = I[Symbol.toPrimitive];
				if (D !== void 0) {
					var L = D.call(I, A || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(I)
			}
			const v = 10;
			let p = function(I) {
					return I.MTLS_ACCESS = "mTLS-enforced authentication", I.ZONE_LOCKDOWN = "Zone lockdown", I.USER_AGENT = "User agent blocking", I.EMAIL_VALIDITY = "Disposable email checks", I.IP_BASED = "IP-based rule", I.GEOGRAPHY_BASE = "Geography-based rule", I
				}({}),
				d = function(I) {
					return I.LEAKED_CREDENTIALS = "Leaked Credentials Checks", I
				}({});
			const E = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				T = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: p.GEOGRAPHY_BASE,
					trackedEvent: E.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: p.IP_BASED,
					trackedEvent: E.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: p.USER_AGENT,
					trackedEvent: E.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: p.ZONE_LOCKDOWN,
					trackedEvent: E.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				y = {
					[m.X.UI_SECTION]: I => ({
						[p.MTLS_ACCESS]: {
							ruleName: p.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${I.account.id}/${I.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[p.ZONE_LOCKDOWN]: {
							ruleName: p.ZONE_LOCKDOWN,
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [l.ZC, e.QV],
								applyMarkdown: !0,
								componentProps: [{
									display: "inline"
								}, {
									to: `/${I.account.id}/configurations/lists`
								}]
							})
						},
						[p.GEOGRAPHY_BASE]: {
							ruleName: p.GEOGRAPHY_BASE,
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[p.IP_BASED]: {
							ruleName: p.IP_BASED,
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.ip_base.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.ip_base.wafRulesOverview",
								applyMarkdown: !0,
								Components: [l.ZC, e.QV],
								componentProps: [{
									display: "inline"
								}, {
									to: `/${I.account.id}/configurations/lists`
								}]
							})
						},
						[p.USER_AGENT]: {
							ruleName: p.USER_AGENT,
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${I.account.id}/configurations/lists`
								}]
							})
						},
						[p.EMAIL_VALIDITY]: {
							ruleName: p.EMAIL_VALIDITY,
							capability: "security_rules.rules.capability.fraud",
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[m.X.WAF_RULES]: {
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
				g = {
					[m.X.WAF_RULES]: {
						[d.LEAKED_CREDENTIALS]: {
							ruleName: d.LEAKED_CREDENTIALS,
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
					[m.X.UI_SECTION]: {
						[d.LEAKED_CREDENTIALS]: {
							ruleName: d.LEAKED_CREDENTIALS,
							displayName: u().createElement(s.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: u().createElement(s.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let O = function(I) {
				return I.DISCOVERY = "discovery", I.SEQUENCES = "sequences", I.SCHEMA_VALIDATION = "schema-validation", I.SETTINGS = "settings", I.API_RULES = "api-rules", I.UPGRADE = "upgrade", I
			}({});
			const _ = f({}, c.g, {
				[r.df.HttpRequestFirewallManaged]: f({}, c.g[r.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[r.df.HttpRequestFirewallCustom]: f({}, c.g[r.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[r.df.HttpRateLimit]: f({}, c.g[r.df.HttpRateLimit], {
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
			let b = function(I) {
				return I.APP_SEC_MVP = "app-security-navigation-mvp", I.APP_SEC_DEFAULT_FOR_ALL = "app-security-default-for-all", I
			}({})
		},
		"../react/pages/security/resources/hooks/useUnificationGate.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				D$: function() {
					return g
				},
				Ud: function() {
					return _
				},
				o7: function() {
					return y
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				r = t("webpack/sharing/consume/default/react/react"),
				i = t.n(r),
				u = t("../react/pages/security/resources/constants.tsx"),
				s = t("../react/app/components/Persistence/index.tsx"),
				m = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(m),
				l = t("../react/common/hooks/useActiveState.ts"),
				f = t("../react/app/components/Persistence/api.ts"),
				n = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				o = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				v = t.n(a),
				p = t("../react/common/components/ExternalLink.tsx"),
				d = t("../react/utils/translator.tsx"),
				E = t("../node_modules/@cloudflare/elements/es/index.js"),
				T = t("../../../../node_modules/@sentry/core/esm/exports.js");
			const y = () => !!(0, e.Z)(u.yR.APP_SEC_MVP),
				g = () => {
					const {
						flags: b
					} = (0, s.yZ)();
					return {
						isInDefaultAllGate: !!(0, e.Z)(u.yR.APP_SEC_DEFAULT_FOR_ALL),
						hasDefaultAllFlag: !!b.hasEnabledDefaultUnifiedSecurity
					}
				},
				O = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_9Ktoks1h6dU2W7s",
				_ = () => {
					const {
						flags: b,
						actions: I
					} = (0, s.yZ)(), {
						t: A
					} = (0, d.QT)(), {
						hasEnabledDefaultUnifiedSecurity: D,
						hasEnabledSecurityNavigation: L
					} = b, C = (0, e.Z)(u.yR.APP_SEC_DEFAULT_FOR_ALL), [k, R] = (0, l.Z)("securityNavStatus");
					(0, r.useEffect)(() => {
						!k && (D || L) && T.Tb(new Error("AppSec Unification error: User is opted in, but old navigation is showing"), {
							extra: {
								navFlag: k,
								hasEnabledDefaultUnifiedSecurity: D,
								hasEnabledSecurityNavigation: L,
								appsecDefaultGate: C
							}
						})
					}, [b, C, k]);
					const P = async () => {
						await (0, o.SS)({
							title: i().createElement(a.Trans, {
								id: "security.opt_in.modal.title"
							}),
							description: i().createElement(E.ZC, null, i().createElement(a.Trans, {
								id: "security.opt_in.modal.default_all.description",
								Components: [p.dL],
								componentProps: [{
									to: O,
									target: "_blank",
									rel: "noopener noreferrer",
									display: "inline"
								}]
							})),
							cancelButtonText: A("security.opt_in.modal.confirm"),
							actionButtonText: A("security.opt_in.modal.cancel"),
							destructive: !0
						}) && z()
					}, z = () => {
						I.toggleSecurityNavigation(!D, !0);
						const q = (0, n.jB)(D);
						(0, n.yM)(q, {
							value: !D
						})
					}, te = (0, r.useCallback)(async () => {
						if (C && D) {
							await P();
							return
						}
						if (C) {
							z();
							return
						}
						I.toggleSecurityNavigation(!L, !1)
					}, [D, L]);
					return {
						setSecurityNav: (0, r.useCallback)(q => {
							if (C && q.flags.hasEnabledDefaultUnifiedSecurity === void 0) {
								R(!0), (0, f.Sp)({
									hasEnabledDefaultUnifiedSecurity: !0,
									hasEnabledSecurityNavigation: !0
								}), c().identify({
									hasEnabledSecurityNavigation: !0,
									hasEnabledDefaultUnifiedSecurity: !0
								});
								const U = (0, n.jB)(q.flags.hasEnabledDefaultUnifiedSecurity);
								(0, n.yM)(U, {
									value: !0
								});
								return
							}
							if (q.flags.hasEnabledDefaultUnifiedSecurity || q.flags.hasEnabledSecurityNavigation) {
								var B;
								R(!0), c().identify({
									hasEnabledSecurityNavigation: q.flags.hasEnabledSecurityNavigation,
									hasEnabledDefaultUnifiedSecurity: (B = q.flags) === null || B === void 0 ? void 0 : B.hasEnabledDefaultUnifiedSecurity
								})
							}
						}, [C, b]),
						toggleSecurityNav: te,
						navFlag: k,
						feedbackFormLink: O
					}
				}
		},
		"../react/pages/security/resources/types.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				X: function() {
					return e
				}
			});
			let e = function(i) {
					return i.UI_SECTION = "UI_SECTION", i.WAF_RULES = "WAF_RULES", i
				}({}),
				r = function(i) {
					return i.Low = "low", i.Medium = "medium", i.Critical = "critical", i
				}({})
		},
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				jB: function() {
					return f
				},
				yM: function() {
					return l
				},
				yf: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var o = 1; o < arguments.length; o++) {
					var a = arguments[o] != null ? Object(arguments[o]) : {},
						v = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(a).filter(function(p) {
						return Object.getOwnPropertyDescriptor(a, p).enumerable
					})), v.forEach(function(p) {
						u(n, p, a[p])
					})
				}
				return n
			}

			function u(n, o, a) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = a, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var v = a.call(n, o || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CLICK_OPT_IN = "click opt in security navigation", n.CLICK_OPT_IN_BUTTON = "click opt in button", n.CLICK_OPT_OUT_BUTTON = "click opt out button", n.CLICK_NEXT_STEP = "click opt in next step", n.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", n.DISPLAY_MODAL = "display opt in modal", n.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", n.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", n.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", n.DEFAULT_ALL_OPT_OUT = "user in default-all gate opts out", n.DEFAULT_ALL_REENABLES = "user in default-all gate re-enables new UI", n.DEFAULT_ALL_INIT = "user in default-all gate is opted-in be default", n.NEW_DASHBOARD_EXPERIENCE = "click on new dashboard experience button", n
			}({});
			const l = (n, o = {}) => {
					r().sendEvent(n, i({}, o || {}))
				},
				f = n => {
					if (n === !0) return c.DEFAULT_ALL_OPT_OUT;
					if (n === !1) return c.DEFAULT_ALL_REENABLES;
					if (n === void 0) return c.DEFAULT_ALL_INIT
				}
		},
		"../react/pages/security/settings/hooks/api.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$y: function() {
					return p
				},
				Ai: function() {
					return n
				},
				B: function() {
					return f
				},
				BT: function() {
					return s
				},
				CK: function() {
					return l
				},
				F3: function() {
					return d
				},
				JP: function() {
					return i
				},
				O_: function() {
					return o
				},
				X2: function() {
					return u
				},
				YO: function() {
					return E
				},
				_c: function() {
					return T
				},
				je: function() {
					return v
				},
				ll: function() {
					return m
				},
				qD: function() {
					return c
				},
				tw: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const i = async y => {
				var g, O;
				const _ = await (0, e.get)(`/zones/${y}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((g = _ == null ? void 0 : _.body) === null || g === void 0 || (O = g.result) === null || O === void 0 ? void 0 : O.value) === "enabled"
			}, u = async (y, g) => (await (0, e.post)(`/zones/${y}/content-upload-scan/${g?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), g), s = async y => {
				var g;
				const O = await (0, e.get)(`/zones/${y}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((g = O == null ? void 0 : O.body) === null || g === void 0 ? void 0 : g.result) || []
			}, m = async (y, g) => {
				var O;
				const _ = await (0, e.post)(`/zones/${y}/content-upload-scan/payloads`, {
					body: [g]
				});
				return (O = _ == null ? void 0 : _.body) === null || O === void 0 ? void 0 : O.result
			}, c = async (y, g) => (await (0, e.del)(`/zones/${y}/content-upload-scan/payloads/${g}`, {
				hideErrorAlert: !0
			}), g), l = async y => {
				var g;
				const O = await (0, e.get)(`/zones/${y}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((g = O == null ? void 0 : O.body) === null || g === void 0 ? void 0 : g.pii_detection_enabled)
			}, f = async (y, g) => (await (0, e.put)(`/zones/${y}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: g
				}
			}), g), n = async y => {
				var g, O;
				const _ = await (0, e.get)(`/zones/${y}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((g = _ == null ? void 0 : _.body) === null || g === void 0 || (O = g.result) === null || O === void 0 ? void 0 : O.enabled)
			}, o = async (y, g) => {
				var O, _;
				const b = await (0, e.post)(`/zones/${y}/leaked-credential-checks`, {
					body: {
						enabled: g
					}
				});
				return !!((O = b == null ? void 0 : b.body) === null || O === void 0 || (_ = O.result) === null || _ === void 0 ? void 0 : _.enabled)
			}, a = async y => {
				var g;
				const O = await (0, e.get)(`/zones/${y}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (g = O == null ? void 0 : O.body) === null || g === void 0 ? void 0 : g.result
			}, v = async (y, g) => {
				var O;
				const _ = await (0, e.post)(`/zones/${y}/leaked-credential-checks/detections`, {
					body: g
				});
				return (O = _ == null ? void 0 : _.body) === null || O === void 0 ? void 0 : O.result
			}, p = async (y, g) => (await (0, e.del)(`/zones/${y}/leaked-credential-checks/detections/${g}`, {
				hideErrorAlert: !0
			}), g), d = async (y, g) => {
				await (0, e.put)(`/zones/${y}/security-center/securitytxt`, {
					body: g
				})
			}, E = async y => {
				await (0, e.del)(`/zones/${y}/security-center/securitytxt`)
			}, T = async y => (await (0, e.get)(`/zones/${y}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Xu: function() {
					return p
				},
				Io: function() {
					return _
				},
				FQ: function() {
					return q
				},
				vU: function() {
					return v
				},
				M: function() {
					return E
				},
				d7: function() {
					return d
				},
				Oz: function() {
					return O
				},
				Np: function() {
					return P
				},
				WR: function() {
					return f
				},
				bE: function() {
					return z
				},
				u_: function() {
					return a
				},
				pf: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/pages/security/settings/hooks/api.ts"),
				i = t("webpack/sharing/consume/default/react/react"),
				u = t("webpack/sharing/consume/default/react-redux/react-redux"),
				s = t("../react/pages/security/settings/resources/index.ts"),
				m = t("../react/common/hooks/useZoneEntitlement.ts"),
				c = t("../../../../node_modules/yup/es/index.js"),
				l = t("../react/utils/translator.tsx");
			const f = () => (0, u.useSelector)(s.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				o = () => !!useZoneEntitlement(n),
				a = () => {
					const {
						t: B
					} = (0, l.QT)(), U = c.Z_().required(B("common.field_is_required")).max(24, B("labels.apply.form.name.error.max_characters")).matches(s.DG, B("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", B("labels.apply.form.name.error.cf_forbidden"), M => !s.aW.test(M)), X = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: M => c.Ry().shape({
							[s.n5.NAME]: M ? c.Z_() : U,
							[s.n5.DESCRIPTION]: M ? c.Z_().optional() : c.Z_().max(150, B("labels.apply.form.description.error.max_characters"))
						})
					}, K = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[s.N2.NAME]: "",
							[s.N2.SOURCE]: s.W3,
							[s.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => c.Ry().shape({
							[s.N2.NEW_LABEL_NAME]: U
						})
					};
					return {
						LABELS_APPLY_FORM: X,
						EDIT_LABELS_MODAL_FORM: K
					}
				},
				v = ({
					modalHeaderFixedHeight: B = 62,
					modalDefaultPaddings: U = 16
				} = {}) => {
					const X = (0, i.useRef)(null),
						K = (0, i.useRef)(null),
						[M, j] = (0, i.useState)(0),
						[F, G] = (0, i.useState)(0),
						J = `calc(100vh - ${M}px - ${F}px - ${U}px)`,
						[ne, Y] = (0, i.useState)("");
					return (0, i.useEffect)(() => {
						const ue = () => {
							var W, re, $, oe;
							const ie = X == null || (W = X.current) === null || W === void 0 ? void 0 : W.offsetHeight,
								Ee = K == null || (re = K.current) === null || re === void 0 ? void 0 : re.offsetHeight,
								se = (($ = ie) !== null && $ !== void 0 ? $ : 0) + B,
								he = (oe = Ee) !== null && oe !== void 0 ? oe : 0;
							j(se), G(he)
						};
						return ue(), window.addEventListener("resize", ue), () => window.removeEventListener("resize", ue)
					}, []), {
						searchTerm: ne,
						setSearchTerm: Y,
						scrollableSectionMaxHeight: J,
						topMenuRef: X,
						bottomMenuRef: K
					}
				},
				p = B => {
					const U = f(),
						X = (0, e.useQueryClient)(),
						K = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${B}`,
							queryFn: () => (0, r.JP)(B),
							enabled: U
						}),
						M = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${B}`,
							queryFn: () => (0, r.BT)(B),
							enabled: U && !!(K == null ? void 0 : K.data)
						}),
						j = (0, e.useMutation)({
							mutationFn: async ({
								enabled: J
							}) => await (0, r.X2)(B, J),
							onSuccess: J => {
								X.setQueryData([`content-scanning-enabled-${B}`], J)
							}
						}),
						F = (0, e.useMutation)({
							mutationFn: J => (0, r.ll)(B, J),
							onSuccess: J => {
								X.setQueryData([`content-scanning-detections-${B}`], J)
							}
						}),
						G = (0, e.useMutation)({
							mutationFn: J => (0, r.qD)(B, J),
							onSuccess: J => {
								var ne;
								const Y = (ne = X.getQueryData(`content-scanning-detections-${B}`)) !== null && ne !== void 0 ? ne : [];
								X.setQueryData([`content-scanning-detections-${B}`], Y.filter(({
									id: ue
								}) => ue !== J))
							}
						});
					return {
						entitled: U,
						loading: K.isLoading || M.isLoading,
						error: K.isError || M.isError,
						enabled: {
							data: K.data,
							isToggling: j.isLoading,
							toggleEnabled: async J => j.mutateAsync({
								enabled: J
							})
						},
						detections: {
							data: M.data,
							add: F.mutateAsync,
							delete: G.mutateAsync,
							loading: F.isLoading || G.isLoading
						}
					}
				},
				d = () => {
					const B = (0, u.useSelector)(s.cN),
						U = (0, u.useSelector)(s.bH),
						X = (0, u.useSelector)(s.P3),
						K = (0, u.useSelector)(s.Ri);
					return {
						hasEditPermission: B,
						isEnabled: X && (U.hasSimilarLeaked || U.hasUsernameAndPasswordLeaked || K)
					}
				},
				E = B => {
					const U = d(),
						X = (0, e.useQueryClient)(),
						K = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${B}`,
							queryFn: () => (0, r.Ai)(B),
							enabled: !!U.isEnabled,
							retry: 1
						}),
						M = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${B}`,
							queryFn: () => (0, r.tw)(B),
							enabled: !!U.isEnabled && !!(K == null ? void 0 : K.data)
						}),
						j = (0, e.useMutation)({
							mutationFn: ({
								enabled: J
							}) => (0, r.O_)(B, J),
							onSuccess: J => {
								X.setQueryData([`leaked-credentials-enabled-${B}`], J)
							}
						}),
						F = (0, e.useMutation)({
							mutationFn: async J => await (0, r.je)(B, J),
							onSuccess: J => {
								var ne;
								const Y = (ne = X.getQueryData(`leaked-credentials-detections-${B}`)) !== null && ne !== void 0 ? ne : [];
								X.setQueryData([`leaked-credentials-detections-${B}`], [...Y, J])
							}
						}),
						G = (0, e.useMutation)({
							mutationFn: J => (0, r.$y)(B, J),
							onSuccess: J => {
								var ne;
								const Y = (ne = X.getQueryData(`leaked-credentials-detections-${B}`)) !== null && ne !== void 0 ? ne : [];
								X.setQueryData([`leaked-credentials-detections-${B}`], Y.filter(({
									id: ue
								}) => ue !== J))
							}
						});
					return {
						entitled: U.isEnabled,
						hasEditPermissions: U.hasEditPermission,
						loading: K.isLoading || M.isLoading,
						error: K.isError || K.isError,
						enabled: {
							data: K.data,
							isToggling: j.isLoading,
							toggleEnabled: async J => j.mutateAsync({
								enabled: J
							})
						},
						detections: {
							data: M.data,
							add: F.mutateAsync,
							delete: G.mutateAsync,
							loading: F.isLoading || G.isLoading
						}
					}
				};
			var T = t("../react/common/utils/useQueryCache.ts");
			const y = "security-txt",
				g = {
					securityTxt: ({
						zoneId: B
					}) => [y, B]
				},
				O = B => (0, e.useQuery)({
					queryKey: g.securityTxt({
						zoneId: B
					}),
					queryFn: () => (0, r._c)(B),
					select: U => U.result
				}),
				_ = B => {
					const {
						invalidate: U
					} = (0, T.o)(g.securityTxt({
						zoneId: B
					}));
					return (0, e.useMutation)({
						mutationFn: () => (0, r.YO)(B),
						onSuccess: async () => {
							await U(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				b = B => {
					const {
						invalidate: U
					} = (0, T.o)(g.securityTxt({
						zoneId: B
					}));
					return (0, e.useMutation)({
						mutationFn: X => (0, r.F3)(B, X),
						onSuccess: async () => {
							await U(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var I = t("../../../../node_modules/lodash/isEqual.js"),
				A = t.n(I),
				D = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function L(B) {
				for (var U = 1; U < arguments.length; U++) {
					var X = arguments[U] != null ? Object(arguments[U]) : {},
						K = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && K.push.apply(K, Object.getOwnPropertySymbols(X).filter(function(M) {
						return Object.getOwnPropertyDescriptor(X, M).enumerable
					})), K.forEach(function(M) {
						C(B, M, X[M])
					})
				}
				return B
			}

			function C(B, U, X) {
				return U = k(U), U in B ? Object.defineProperty(B, U, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[U] = X, B
			}

			function k(B) {
				var U = R(B, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function R(B, U) {
				if (typeof B != "object" || B === null) return B;
				var X = B[Symbol.toPrimitive];
				if (X !== void 0) {
					var K = X.call(B, U || "default");
					if (typeof K != "object") return K;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(B)
			}
			const P = B => {
					const {
						queryKey: U,
						zoneId: X
					} = (0, D.hL)(B), {
						isLoading: K,
						isError: M,
						isSuccess: j,
						data: F,
						refetch: G,
						isRefetching: J
					} = (0, e.useQuery)({
						queryKey: U,
						queryFn: () => D.Mi.getLabels(L({
							zoneId: X
						}, B)),
						onSuccess: () => {
							var ne;
							const Y = B == null || (ne = B.filters) === null || ne === void 0 ? void 0 : ne.source;
							(Y === s.LABEL_SOURCES.MANAGED || Y === s.LABEL_SOURCES.USER) && (0, s.Tf)({
								name: s.QJ.FILTER_USER_MANAGED_LABELS,
								product: s.Iv.SECURITY_SETTINGS,
								pageName: s.R.LABELS_LIST,
								type: Y
							})
						}
					});
					return {
						data: F == null ? void 0 : F.result,
						errors: F == null ? void 0 : F.errors,
						paginationData: F == null ? void 0 : F.result_info,
						isLoading: K,
						isError: M,
						isSuccess: j,
						refetch: G,
						isRefetching: J
					}
				},
				z = ({
					labels: B,
					preselectedLabels: U
				}) => {
					const {
						USER: X,
						MANAGED: K
					} = s.LABEL_SOURCES, [M, j] = (0, i.useState)({
						[X]: [],
						[K]: []
					}), [F, G] = (0, i.useState)(new Set), J = F.size > 0, [ne, Y] = (0, i.useState)(!1), ue = oe => {
						G(ie => {
							const Ee = new Set(ie);
							return Ee.has(oe.name) ? Ee.delete(oe.name) : Ee.add(oe.name), Ee
						})
					}, W = oe => F.has(oe.name), re = (oe, ie) => {
						const Ee = W(oe) ? 1 : 0;
						return (W(ie) ? 1 : 0) - Ee
					}, $ = oe => {
						j(ie => ({
							[X]: [...oe ? oe[X] : ie[X]].sort(re),
							[K]: [...oe ? oe[K] : ie[K]].sort(re)
						}))
					};
					return (0, i.useEffect)(() => {
						if (B && !ne) {
							if (U) {
								const oe = new Set;
								B.forEach(ie => {
									U.some(Ee => A()(Ee, ie)) && oe.add(ie.name)
								}), G(oe)
							}
							Y(!0)
						}
					}, [B, U, ne]), (0, i.useEffect)(() => {
						if (B && ne) {
							const oe = B.reduce((Ee, se) => (se.source === X ? Ee[X].push(se) : se.source === K && Ee[K].push(se), Ee), {
									[X]: [],
									[K]: []
								}),
								ie = {
									[X]: oe[X].sort(re),
									[K]: oe[K].sort(re)
								};
							j(ie)
						}
					}, [X, K, B, ne]), {
						userAndManagedLabels: M,
						setUserAndManagedLabels: j,
						toggleSelectedLabel: ue,
						isLabelSelected: W,
						sortLabelsBySelectedStatus: $,
						hasLabelsSelected: J
					}
				};
			var te = t("../react/app/redux/index.ts"),
				ee = t("../react/pages/security/settings/resources/selectors.ts");
			const q = (B = "") => {
				const U = (0, te.p4)(ee.Xs),
					X = U && (B == null ? void 0 : B.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: U,
					hasDeprecatedParameter: X
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				FQ: function() {
					return l.FQ
				},
				Iv: function() {
					return f.Iv
				},
				M: function() {
					return l.M
				},
				Np: function() {
					return l.Np
				},
				Oz: function() {
					return l.Oz
				},
				Q4: function() {
					return f.Q4
				},
				QJ: function() {
					return f.QJ
				},
				R: function() {
					return f.R
				},
				TG: function() {
					return f.TG
				},
				Tf: function() {
					return f.Tf
				},
				WR: function() {
					return l.WR
				},
				Xs: function() {
					return f.Xs
				},
				Xu: function() {
					return l.Xu
				},
				ZF: function() {
					return f.ZF
				},
				bE: function() {
					return l.bE
				},
				bH: function() {
					return f.bH
				},
				dC: function() {
					return f.dC
				},
				eC: function() {
					return f.eC
				},
				m8: function() {
					return f.m8
				},
				pf: function() {
					return l.pf
				},
				ui: function() {
					return f.ui
				},
				vc: function() {
					return f.vc
				},
				zF: function() {
					return f.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/app/components/Forbidden.jsx"),
				i = t("webpack/sharing/consume/default/react/react"),
				u = t.n(i),
				s = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(m),
				l = t("../react/pages/security/settings/hooks/index.ts"),
				f = t("../react/pages/security/settings/resources/index.ts");
			const n = u().lazy(() => Promise.all([t.e(37800), t.e(97842), t.e(16691), t.e(11624), t.e(94012), t.e(1091), t.e(33023), t.e(98733), t.e(68204), t.e(2515), t.e(22038), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(66270), t.e(29271), t.e(30906), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				o = () => {
					const {
						t: a
					} = (0, m.useI18n)(), v = (0, e.xk)("waf");
					return u().createElement(s.T3, {
						parentPageLabel: a("navigation.zone.security"),
						title: a("navigation.zone.security.settings"),
						type: "narrow"
					}, v.read ? u().createElement(n, null) : u().createElement(r.Z, null))
				};
			h.ZP = o
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Mi: function() {
					return g
				},
				hL: function() {
					return y
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/zoneSelectors.ts"),
				i = t("../react/common/utils/useQueryCache.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				s = t("../react/common/hooks/useAccountId.ts"),
				m = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				c = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const l = {
				labels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var f = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(_, b) {
				if (_ == null) return {};
				var I = v(_, b),
					A, D;
				if (Object.getOwnPropertySymbols) {
					var L = Object.getOwnPropertySymbols(_);
					for (D = 0; D < L.length; D++) A = L[D], !(b.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(_, A) || (I[A] = _[A]))
				}
				return I
			}

			function v(_, b) {
				if (_ == null) return {};
				var I = {},
					A = Object.keys(_),
					D, L;
				for (L = 0; L < A.length; L++) D = A[L], !(b.indexOf(D) >= 0) && (I[D] = _[D]);
				return I
			}

			function p(_) {
				for (var b = 1; b < arguments.length; b++) {
					var I = arguments[b] != null ? Object(arguments[b]) : {},
						A = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(I).filter(function(D) {
						return Object.getOwnPropertyDescriptor(I, D).enumerable
					})), A.forEach(function(D) {
						d(_, D, I[D])
					})
				}
				return _
			}

			function d(_, b, I) {
				return b = E(b), b in _ ? Object.defineProperty(_, b, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[b] = I, _
			}

			function E(_) {
				var b = T(_, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function T(_, b) {
				if (typeof _ != "object" || _ === null) return _;
				var I = _[Symbol.toPrimitive];
				if (I !== void 0) {
					var A = I.call(_, b || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(_)
			}
			const y = _ => {
					const b = (0, e.p4)(r.Cu),
						I = (0, s.F)(),
						A = O.labels(p({
							accountId: I,
							zoneId: b
						}, _ ? p({}, _) : {})),
						D = (0, i.o)(A);
					return p({
						zoneId: b,
						queryKey: A,
						batchInvalidateLabels: async () => {
							await D.batchInvalidate({
								queryKeysToPredicateInvalidate: [u.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, D)
				},
				g = {
					getLabels: async _ => {
						var b, I, A, D;
						let {
							zoneId: L,
							hideErrorAlert: C = !0
						} = _, k = a(_, ["zoneId", "hideErrorAlert"]);
						return (await m.get(l.labels.toUrl({
							zoneId: L
						}), {
							parameters: {
								page: k == null ? void 0 : k.page,
								per_page: k == null ? void 0 : k.per_page,
								with_mapped_resource_counts: k == null ? void 0 : k.with_mapped_resource_counts,
								filter: k == null || (b = k.filters) === null || b === void 0 ? void 0 : b.search,
								source: (0, n.sQ)(k == null || (I = k.filters) === null || I === void 0 ? void 0 : I.source),
								order: k == null || (A = k.sort) === null || A === void 0 ? void 0 : A.id,
								direction: (k == null ? void 0 : k.sort) ? (k == null || (D = k.sort) === null || D === void 0 ? void 0 : D.desc) ? o.Sr.desc : o.Sr.asc : void 0
							},
							hideErrorAlert: C
						})).body
					},
					getLabel: async _ => {
						let {
							zoneId: b,
							labelName: I,
							hideErrorAlert: A = !0
						} = _, D = a(_, ["zoneId", "labelName", "hideErrorAlert"]);
						const L = (0, n.mm)(I) ? l.managedLabel.toUrl({
							zoneId: b,
							labelName: I
						}) : l.userLabel.toUrl({
							zoneId: b,
							labelName: I
						});
						return (await m.get(L, {
							parameters: {
								with_mapped_resource_counts: D == null ? void 0 : D.with_mapped_resource_counts
							},
							hideErrorAlert: A
						})).body
					},
					editLabel: async ({
						zoneId: _,
						label: b,
						replace: I
					}) => {
						const {
							name: A
						} = b, D = a(b, ["name"]);
						return (await (I ? m.put : m.patch)(l.userLabel.toUrl({
							zoneId: _,
							labelName: b.name
						}), {
							body: D
						})).body
					},
					deleteLabel: async ({
						zoneId: _,
						labelName: b
					}) => (await m.del(l.userLabel.toUrl({
						zoneId: _,
						labelName: b
					}))).body,
					createLabel: async _ => {
						let {
							zoneId: b
						} = _, I = a(_, ["zoneId"]);
						const {
							product: A
						} = I, D = a(I, ["product"]);
						return (await m.post(l.userLabels.toUrl({
							zoneId: b
						}), {
							body: [D]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: _,
						user: b,
						managed: I,
						operationIds: A,
						replace: D
					}) => (await (D ? m.put : m.post)(l.operationsLinkedToLabels.toUrl({
						zoneId: _
					}), {
						body: p({}, b ? {
							user: {
								labels: b
							}
						} : {}, I ? {
							managed: {
								labels: I
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
						zoneId: _,
						labelName: b,
						operationIds: I
					}) => {
						const A = (0, n.mm)(b) ? l.managedLabelOperations.toUrl({
							zoneId: _,
							labelName: b
						}) : l.userLabelOperations.toUrl({
							zoneId: _,
							labelName: b
						});
						return (await m.put(A, {
							body: {
								selector: {
									include: {
										operation_ids: I
									}
								}
							}
						})).body
					}
				},
				O = {
					labels: _ => {
						let {
							accountId: b,
							zoneId: I
						} = _, A = a(_, ["accountId", "zoneId"]);
						return [u.IQ.LABELS, b, I, ...(0, f.isEmpty)(A) ? [] : [A]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				DG: function() {
					return E
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return c
				},
				GE: function() {
					return I
				},
				IQ: function() {
					return u
				},
				KV: function() {
					return m
				},
				LABELS_LIST_TOASTS: function() {
					return v
				},
				LABEL_SOURCES: function() {
					return s
				},
				QH: function() {
					return p
				},
				V: function() {
					return O
				},
				W3: function() {
					return i
				},
				Yn: function() {
					return L
				},
				_8: function() {
					return a
				},
				_c: function() {
					return _
				},
				aW: function() {
					return T
				},
				dC: function() {
					return D
				},
				gY: function() {
					return b
				},
				j8: function() {
					return l
				},
				jz: function() {
					return d
				},
				n5: function() {
					return y
				},
				om: function() {
					return f
				},
				w: function() {
					return r
				},
				zF: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let r = function(C) {
				return C.EXPOSED_CREDENTIALS = "exposed_credentials", C.CONTENT_SCANNING = "content_scanning", C.FIREWALL_AI = "firewall_ai", C
			}({});
			const i = "all";
			let u = function(C) {
					return C.LABELS = "labels", C
				}({}),
				s = function(C) {
					return C.USER = "user", C.MANAGED = "managed", C
				}({}),
				m = function(C) {
					return C.SOURCE = "source", C
				}({}),
				c = function(C) {
					return C.NAME = "name", C.SOURCE = "source", C.NEW_LABEL_NAME = "newLabelName", C
				}({}),
				l = function(C) {
					return C.ENDPOINT = "endpoint", C.METHOD = "method", C.OPERATION_ID = "operationId", C
				}({}),
				f = function(C) {
					return C.NAME = "name", C.MAPPED_RESOURCES = "mapped_resources.operations", C.SOURCE = "source", C.APPLY = "apply", C
				}({});
			const a = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: f.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[m.SOURCE]: i
					}
				},
				filters: m,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					queryParamStrategy: "auto-clear"
				}
			};
			let v = function(C) {
				return C.CREATED_LABEL = "createdLabel", C.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", C.DELETED_LABEL = "deletedLabel", C.APPLIED_LABEL = "appliedLabel", C.EDITED_LABEL = "editedLabel", C.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", C
			}({});
			const p = "650px",
				d = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				E = /^[A-Za-z0-9-]+$/,
				T = /^cf-/;
			let y = function(C) {
				return C.NAME = "name", C.DESCRIPTION = "description", C
			}({});
			const g = "all";
			let O = function(C) {
				return C.METHOD = "method", C.HOSTNAME = "hostname", C
			}({});
			const _ = {
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
						[O.METHOD]: g,
						[O.HOSTNAME]: g
					}
				},
				filters: O
			};
			let b = function(C) {
				return C.TITLE = "title", C.DESCRIPTION = "description", C.SUBMIT = "submit", C
			}({});
			const I = 1e3,
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
				D = "exposed-credentials-module",
				L = "cf-risk"
		},
		"../react/pages/security/settings/resources/index.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
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
					return d
				},
				R: function() {
					return n
				},
				LABEL_SOURCES: function() {
					return e.LABEL_SOURCES
				},
				eC: function() {
					return p
				},
				QH: function() {
					return e.QH
				},
				TG: function() {
					return r.T
				},
				QF: function() {
					return i.QF
				},
				vc: function() {
					return i.vc
				},
				ZF: function() {
					return a
				},
				Xs: function() {
					return y.Xs
				},
				wG: function() {
					return i.N2
				},
				Q4: function() {
					return i.Q4
				},
				Wv: function() {
					return i.Wv
				},
				bH: function() {
					return y.bH
				},
				Mb: function() {
					return i.Mb
				},
				ui: function() {
					return y.ui
				},
				P3: function() {
					return y.P3
				},
				Ri: function() {
					return y.Ri
				},
				cN: function() {
					return y.cN
				},
				m8: function() {
					return T
				},
				Tf: function() {
					return E
				},
				$E: function() {
					return i.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				r = t("../react/pages/security/settings/resources/types.ts"),
				i = t("../react/pages/security/settings/resources/utils.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(u);

			function m(g) {
				for (var O = 1; O < arguments.length; O++) {
					var _ = arguments[O] != null ? Object(arguments[O]) : {},
						b = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(_).filter(function(I) {
						return Object.getOwnPropertyDescriptor(_, I).enumerable
					})), b.forEach(function(I) {
						c(g, I, _[I])
					})
				}
				return g
			}

			function c(g, O, _) {
				return O = l(O), O in g ? Object.defineProperty(g, O, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[O] = _, g
			}

			function l(g) {
				var O = f(g, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function f(g, O) {
				if (typeof g != "object" || g === null) return g;
				var _ = g[Symbol.toPrimitive];
				if (_ !== void 0) {
					var b = _.call(g, O || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(g)
			}
			let n = function(g) {
					return g.LABELS_LIST = "Labels List page", g.LABELS_APPLY = "Labels Apply page", g.LABELS_SIDE_MODAL = "Labels Side Modal", g.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", g.LABELS_OPERATION_DETAILS = "Operation Details page", g
				}({}),
				o = function(g) {
					return g.API_SHIELD = "API Shield", g.SECURITY_SETTINGS = "Security Settings", g
				}({}),
				a = function(g) {
					return g.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", g.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", g.OPERATIONS_TABLE_ROW = "Operations table row", g.OPERATION_DETAILS_PAGE = "Operation details page", g
				}({}),
				v = function(g) {
					return g.UPSERT = "upsert", g.OVERWRITE = "overwrite", g
				}({}),
				p = function(g) {
					return g.SINGLE = "single", g.MULTIPLE = "multiple", g
				}({}),
				d = function(g) {
					return g.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", g.DELETE_LABEL = "delete a user label in the settings page", g.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", g.CREATE_LABEL_CLICKED = "click create label button in the settings page", g.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", g.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", g.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", g.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", g.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", g.OPEN_LABELS_SIDE_MODAL = "open labels side modal", g.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", g.REMOVE_RISK_LABELS_FROM_OPERATION = "remove risk label(s) from operation(s) in the labels side modal", g.CREATE_NEW_LABEL = "create a new label", g
				}({});
			const E = ({
					name: g,
					product: O,
					category: _ = "user journey",
					pageName: b,
					from: I,
					write_strategy: A,
					type: D,
					target: L,
					selected: C
				}) => {
					s().sendEvent(g, m({
						category: _,
						pageName: b,
						product: O
					}, I ? {
						from: I
					} : {}, A ? {
						write_strategy: A
					} : {}, D ? {
						type: D
					} : {}, L ? {
						target: L
					} : {}, C ? {
						selected: C
					} : {}))
				},
				T = () => {
					var g;
					return (g = Object.values(d)) === null || g === void 0 ? void 0 : g.flat()
				};
			var y = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				P3: function() {
					return l
				},
				Ri: function() {
					return f
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
					return m
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				r = t("../react/utils/url.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				s = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const m = a => {
					const v = (0, e.RO)(a),
						p = !!(0, i.rV)(a, "rulesets.file_upload_scan_allowed"),
						d = !!(0, i.BF)(a, "rulesets.file_upload_scan_allowed");
					return (0, r.el)(window.location.pathname) ? v && (p || d) : d
				},
				c = a => Number((0, i.rV)(a, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				l = a => (0, i.rV)(a, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				f = a => (0, i.rV)(a, "rulesets.leaked_credential_checks_allowed"),
				n = a => (0, s.z1)(u.dC)(a) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, i.rV)(a, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, i.rV)(a, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				o = a => !!(0, s.z1)("deprecate-security-level")(a)
		},
		"../react/pages/security/settings/resources/types.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				T: function() {
					return r
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let r = function(i) {
				return i.ENABLED = "enabled", i.CONTACT = "contact", i.EXPIRES = "expires", i.ENCRYPTION = "encryption", i.ACKNOWLEDGMENTS = "acknowledgments", i.CANONICAL = "canonical", i.HIRING = "hiring", i.POLICY = "policy", i.PREFERRED_LANGUAGES = "preferred_languages", i.MODIFIED_ON = "modified_on", i
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$E: function() {
					return a
				},
				Mb: function() {
					return v
				},
				N2: function() {
					return O
				},
				Q4: function() {
					return d
				},
				QF: function() {
					return o
				},
				Vy: function() {
					return T
				},
				Wv: function() {
					return p
				},
				mm: function() {
					return g
				},
				sQ: function() {
					return y
				},
				vc: function() {
					return E
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				i = t("../react/pages/security/settings/routes.tsx"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				s = t("../react/pages/security/settings/resources/types.ts"),
				m = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function c(_) {
				for (var b = 1; b < arguments.length; b++) {
					var I = arguments[b] != null ? Object(arguments[b]) : {},
						A = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(I).filter(function(D) {
						return Object.getOwnPropertyDescriptor(I, D).enumerable
					})), A.forEach(function(D) {
						l(_, D, I[D])
					})
				}
				return _
			}

			function l(_, b, I) {
				return b = f(b), b in _ ? Object.defineProperty(_, b, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[b] = I, _
			}

			function f(_) {
				var b = n(_, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function n(_, b) {
				if (typeof _ != "object" || _ === null) return _;
				var I = _[Symbol.toPrimitive];
				if (I !== void 0) {
					var A = I.call(_, b || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(_)
			}
			const o = {
					[s.T.ENABLED]: !1,
					[s.T.CONTACT]: [""],
					[s.T.EXPIRES]: ""
				},
				a = {
					[s.T.CONTACT]: {
						label: "security_txt.fields.contact",
						tooltip: "security_txt.fields.contact.description",
						placeholder: "security_txt.fields.contact.placeholder"
					},
					[s.T.EXPIRES]: {
						label: "security_txt.fields.expires",
						tooltip: "security_txt.fields.expires.description",
						placeholder: "security_txt.fields.expires.placeholder"
					},
					[s.T.ENCRYPTION]: {
						label: "security_txt.fields.encryption",
						tooltip: "security_txt.fields.encryption.description",
						placeholder: "security_txt.fields.encryption.placeholder"
					},
					[s.T.ACKNOWLEDGMENTS]: {
						label: "security_txt.fields.acknowledgements",
						tooltip: "security_txt.fields.acknowledgements.description",
						placeholder: "security_txt.fields.acknowledgements.placeholder"
					},
					[s.T.CANONICAL]: {
						label: "security_txt.fields.canonical",
						tooltip: "security_txt.fields.canonical.description",
						placeholder: "security_txt.fields.canonical.placeholder"
					},
					[s.T.POLICY]: {
						label: "security_txt.fields.policy",
						tooltip: "security_txt.fields.policy.description",
						placeholder: "security_txt.fields.policy.placeholder"
					},
					[s.T.HIRING]: {
						label: "security_txt.fields.hiring",
						tooltip: "security_txt.fields.hiring.description",
						placeholder: "security_txt.fields.hiring.placeholder"
					},
					[s.T.PREFERRED_LANGUAGES]: {
						label: "security_txt.fields.preferred_languages",
						tooltip: "security_txt.fields.preferred_languages.description",
						placeholder: "security_txt.fields.preferred_languages.placeholder"
					}
				},
				v = _ => e.Ry({
					[s.T.CONTACT]: e.IX().of(e.Z_().required(_("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, _("security_txt.fields.contact.format_error"))),
					[s.T.EXPIRES]: e.hT().required(_("common.required")).min(new Date, _("security_txt.fields.expires.min_error"))
				}),
				p = _ => {
					const b = {};
					for (const I in _) b[I] = Array.isArray(_[I]) ? _[I].filter(A => !!A) : _[I];
					return c({}, b, {
						expires: (0, m.DZ)(_.expires)
					})
				},
				d = (_, b, I) => {
					const A = [...new Set([s.T.CONTACT, s.T.EXPIRES, ...Object.values(s.T)])],
						D = Object.entries(_).sort(([L], [C]) => A.indexOf(L) - A.indexOf(C)).filter(([L, C]) => !!a[L] && !!C && (!Array.isArray(C) || !!C.length)).map(([L, C]) => Array.isArray(C) ? C.map(k => `${I(a[L].label)}: ${k}`).join(`
`) : `${I(a[L].label)}: ${C}`).join(`
`);
					(0, r.yH)(`Cloudflare_${b}_security.txt`, D, "text/plain;charset=utf-8")
				};
			let E = function(_) {
				return _.CREATED = "created security.txt", _.ENABLED = "enabled security.txt", _.DISABLED = "disabled security.txt", _.DOWNLOADED = "downloaded security.txt", _.UPDATED = "updated security.txt", _.DELETED = "deleted security.txt", _
			}({});
			const T = _ => (_ == null ? void 0 : _.source) === u.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (_ == null ? void 0 : _.source) === u.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				y = _ => _ === u.W3 ? void 0 : _,
				g = _ => u.aW.test(_),
				O = _ => {
					switch (_) {
						case u.w.CONTENT_SCANNING:
							return i.ROUTES.CONTENT_SCANNING;
						case u.w.EXPOSED_CREDENTIALS:
							return i.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Sb: function() {
					return f
				},
				Vj: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var o = 1; o < arguments.length; o++) {
					var a = arguments[o] != null ? Object(arguments[o]) : {},
						v = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(a).filter(function(p) {
						return Object.getOwnPropertyDescriptor(a, p).enumerable
					})), v.forEach(function(p) {
						u(n, p, a[p])
					})
				}
				return n
			}

			function u(n, o, a) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = a, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var v = a.call(n, o || "default");
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
				l = {
					product: "WAF Managed Rules"
				},
				f = ({
					event: n,
					category: o = "user journey",
					product: a = "waf",
					productName: v = "Managed Rules",
					additionalData: p
				}) => {
					r().sendEvent(n, i({
						category: o,
						product: a,
						productName: v
					}, p || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				D: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CLICK_MENU_ITEM_SHARE = "click on share item", r.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", r.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", r.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", r.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", r.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", r.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", r.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", r.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", r.CLICK_ON_DELETE_RULESET = "click on delete ruleset", r.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", r
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.IP_ADDRESS = "create spectrum app using IP address", r.CNAME = "create spectrum app using cname record", r.LB = "create spectrum app using load balancer", r.UPDATE_IP_ADDRESS = "update spectrum app using IP address", r.UPDATE_CNAME = "update spectrum app using cname record", r.UPDATE_LB = "update spectrum app using load balancer", r.DISABLE = "disable spectrum app", r
			}({})
		},
		"../react/pages/stream/actionTypes.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				U: function() {
					return e
				}
			});
			let e = function(r) {
				return r.ReplaceVideos = "stream.replace_videos", r.PrependVideo = "stream.prepend_video", r.UpdateVideo = "stream.update_video", r.UpdateVideoPending = "steam.update_video_pending", r.RemoveVideos = "stream.remove_videos", r.StoreUploader = "stream.store_uploader", r.UpsertUploads = "stream.upsert_uploads", r.RemoveUploads = "stream.remove_uploads", r.UpdateUploadProgress = "stream.update_upload_progress", r.UploadViaUrl = "stream.upload_via_url", r.SetLoading = "stream.set_loading", r.SetStorageLoading = "stream.set_storage_loading", r.SetStorage = "stream.set_storage", r.SetPage = "stream.set_page", r.SetPausedUploads = "stream.set_paused_uploads", r.RemovePausedUpload = "stream.remove_paused_upload", r.SetRequestTimestamp = "stream.set_request_timestamp", r.ResetState = "stream.reset_state", r
			}({})
		},
		"../react/pages/stream/reducer.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				ZP: function() {
					return n
				},
				nY: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				r = t("../react/pages/stream/actionTypes.ts"),
				i = t("../react/pages/stream/util/pager.ts");

			function u(o) {
				for (var a = 1; a < arguments.length; a++) {
					var v = arguments[a] != null ? Object(arguments[a]) : {},
						p = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(v).filter(function(d) {
						return Object.getOwnPropertyDescriptor(v, d).enumerable
					})), p.forEach(function(d) {
						s(o, d, v[d])
					})
				}
				return o
			}

			function s(o, a, v) {
				return a = m(a), a in o ? Object.defineProperty(o, a, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[a] = v, o
			}

			function m(o) {
				var a = c(o, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function c(o, a) {
				if (typeof o != "object" || o === null) return o;
				var v = o[Symbol.toPrimitive];
				if (v !== void 0) {
					var p = v.call(o, a || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(o)
			}
			const l = "stream",
				f = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(o = f, a) {
				switch (a.type) {
					case r.U.ResetState:
						return f;
					case r.U.SetStorageLoading:
						const {
							storageLoading: v
						} = a;
						return u({}, o, {
							storageLoading: v
						});
					case r.U.SetStorage:
						return u({}, o, {
							storage: a.payload ? u({}, o.storage, a.payload) : void 0
						});
					case r.U.ReplaceVideos:
						return u({}, o, {
							videos: a.videos
						});
					case r.U.PrependVideo:
						return u({}, o, {
							videos: [a.video, ...o.videos].filter((p, d) => d < i.FJ)
						});
					case r.U.UpdateVideo:
						return u({}, o, {
							videos: o.videos.map(p => p.uid === a.video.uid ? a.video : p)
						});
					case r.U.UpdateVideoPending:
						return u({}, o, {
							videoUpdateStatuses: u({}, o.videoUpdateStatuses, {
								[a.uid]: a.status
							})
						});
					case r.U.RemoveVideos:
						return u({}, o, {
							videos: o.videos.filter(p => !a.ids.includes(p.uid))
						});
					case r.U.SetLoading:
						return u({}, o, {
							loading: a.loading
						});
					case r.U.SetRequestTimestamp:
						return u({}, o, {
							requestTimestamp: a.requestTimestamp
						});
					case r.U.UploadViaUrl:
						return o;
					default:
						return (0, e.h)(a, o)
				}
			}
		},
		"../react/pages/stream/routes.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				C: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/stream`,
				i = (0, e.BC)`${r}/inputs`,
				u = (0, e.BC)`${r}/videos`,
				s = (0, e.BC)`${r}/analytics`,
				m = (0, e.BC)`${u}/${"videoId"}`,
				c = (0, e.BC)`${r}/video-transformations`,
				l = {
					root: r,
					inputs: i,
					configureInputs: (0, e.BC)`${i}/custom-hostnames`,
					videos: u,
					analytics: s,
					videoPage: m,
					videoTransformationsConfigList: c,
					videoTransformationsZoneConfig: (0, e.BC)`${c}/${"zoneId"}/settings`,
					inputPage: (0, e.BC)`${i}/${"inputId"}`,
					inputSettings: (0, e.BC)`${i}/${"inputId"}/settings`,
					inputMetrics: (0, e.BC)`${i}/${"inputId"}/metrics`,
					inputLogs: (0, e.BC)`${i}/${"inputId"}/logs`,
					inputRecordings: (0, e.BC)`${i}/${"inputId"}/recordings`,
					inputEmbed: (0, e.BC)`${i}/${"inputId"}/embed`,
					inputConnectionInfo: (0, e.BC)`${i}/${"inputId"}/connection-info`,
					inputOutputs: (0, e.BC)`${i}/${"inputId"}/outputs`,
					createOutput: (0, e.BC)`${i}/${"inputId"}/createOutput`,
					createInput: (0, e.BC)`${i}/create`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/stream`,
					signUp: (0, e.BC)`/sign-up/stream`,
					checkoutSuccess: (0, e.BC)`${r}/bundle-checkout-success`,
					plans: (0, e.BC)`${r}/plans`,
					managePlan: (0, e.BC)`${r}/manage-plan`
				}
		},
		"../react/pages/stream/selectors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Id: function() {
					return u
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return s
				},
				QL: function() {
					return l
				},
				_A: function() {
					return d
				},
				_Q: function() {
					return o
				},
				aM: function() {
					return p
				},
				bM: function() {
					return c
				},
				bO: function() {
					return a
				},
				bm: function() {
					return v
				},
				mX: function() {
					return E
				},
				pW: function() {
					return m
				},
				xW: function() {
					return f
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				i = t("../react/pages/stream/reducer.ts");
			const u = T => T[i.nY],
				s = T => u(T).videos,
				m = T => u(T).videoUpdateStatuses,
				c = T => u(T).loading,
				l = T => u(T).requestTimestamp,
				f = T => u(T).storageLoading,
				n = T => u(T).storage,
				o = T => (0, r.BF)(T, "stream.enabled") || (0, e.bC)(T),
				a = T => (0, e.Le)(T, "stream", "connect"),
				v = T => (0, e.Le)(T, "stream", "stream-4371"),
				p = T => (0, e.Le)(T, "stream", "public-details-enabled"),
				d = T => !!(0, e.Le)(T, "stream", "llhls"),
				E = T => {
					const y = n(T);
					return y !== void 0 && y.limitMins > y.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				FJ: function() {
					return e
				},
				d6: function() {
					return i
				},
				wL: function() {
					return r
				}
			});
			const e = 30;

			function r(u, s, m) {
				const c = {
					search: m,
					limit: e.toString()
				};
				return s !== void 0 && (c.end = s), c
			}

			function i(u, s, m) {
				return {
					limit: e.toString(),
					search: m,
					asc: "true",
					start_comp: "gt",
					start: s
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				V: function() {
					return e
				}
			});
			let e = function(r) {
				return r.ARGO_ENABLEMENT = "change argo enablement", r.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", r.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", r
			}({})
		},
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				QK: function() {
					return l
				},
				WM: function() {
					return p
				},
				Zk: function() {
					return f
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

			function i(d) {
				for (var E = 1; E < arguments.length; E++) {
					var T = arguments[E] != null ? Object(arguments[E]) : {},
						y = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(T).filter(function(g) {
						return Object.getOwnPropertyDescriptor(T, g).enumerable
					})), y.forEach(function(g) {
						u(d, g, T[g])
					})
				}
				return d
			}

			function u(d, E, T) {
				return E = s(E), E in d ? Object.defineProperty(d, E, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[E] = T, d
			}

			function s(d) {
				var E = m(d, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function m(d, E) {
				if (typeof d != "object" || d === null) return d;
				var T = d[Symbol.toPrimitive];
				if (T !== void 0) {
					var y = T.call(d, E || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(d)
			}
			let c = function(d) {
					return d.TRY_NEW_DASHBOARD_CTA = "click try new dashboard", d
				}({}),
				l = function(d) {
					return d.CREATE_BUTTON_CLICK = "click create load balancer", d.TOGGLE_STATUS = "load balancer toggle status", d.REVIEW_PAGE_CLICK = "click load balancer table review link", d.EDIT_CLICK = "click load balancer table edit button", d.DELETE_CLICK = "click load balancer table delete button", d
				}({}),
				f = function(d) {
					return d.EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", d.EDIT_IP_CLICK = "click edit load balancer IP", d.EDIT_POOLS_CLICK = "click edit load balancer pools", d.EDIT_MONITORS_CLICK = "click edit load balancer monitors", d.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", d.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", d
				}({}),
				n = function(d) {
					return d.GO_TO_STEP = "click load balancer step", d.BACK_TO_STEP = "click load balancer back to step", d.SAVE = "save load balancer", d.SAVE_AS_DRAFT = "save load balancer as draft", d.SAVE_AND_DEPLOY = "save and deploy load balancer", d.NAVIGATION_CHANGE = "click load balancer wizard navigation link", d.CLICK_PRIVATE_LB_DOCUMENTATION = "click link to private load balancing documentation", d
				}({}),
				o = function(d) {
					return d.OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", d
				}({});
			const v = Object.values({
					MIGRATION: c,
					LOAD_BALANCERS_TABLE: l,
					REVIEW: f,
					WIZARD: n,
					USAGE: o
				}).flatMap(Object.values),
				p = (d, E) => r().sendEvent(d, i({
					category: "user journey",
					product: "load balancing"
				}, E))
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Z: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_AND_DEPLOY = "create load balancer", r.ANALYTICS = "read analytics", r.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", r.POOL_TABLE = "click on expandable row on pool", r.CREATE_MONITOR_LINK = "click on create a monitor", r.EDIT_MONITOR_LINK = "click on edit a monitor", r.EDIT_MONITOR = "edit monitor", r.CREATE_MONITOR = "create monitor", r.CREATE_POOL_LINK = "click on create a pool", r.EDIT_POOL_LINK = "click on edit a pool", r.EDIT_POOL = "edit pool", r.CREATE_POOL = "create pool", r
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				N: function() {
					return i
				},
				X: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let i = function(s) {
				return s.CREATE = "create waiting room", s.UPDATE = "update waiting room", s.EVENTS = "view waiting rooms events", s.ANALYTICS = "view waiting room analytics", s.GENERATE_PREVIEW = "generate waiting room preview link", s
			}({});
			const u = async s => {
				await r().sendEvent(s, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				N3: function() {
					return l
				},
				P: function() {
					return n
				},
				Xh: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(o) {
				for (var a = 1; a < arguments.length; a++) {
					var v = arguments[a] != null ? Object(arguments[a]) : {},
						p = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(v).filter(function(d) {
						return Object.getOwnPropertyDescriptor(v, d).enumerable
					})), p.forEach(function(d) {
						u(o, d, v[d])
					})
				}
				return o
			}

			function u(o, a, v) {
				return a = s(a), a in o ? Object.defineProperty(o, a, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[a] = v, o
			}

			function s(o) {
				var a = m(o, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(o, a) {
				if (typeof o != "object" || o === null) return o;
				var v = o[Symbol.toPrimitive];
				if (v !== void 0) {
					var p = v.call(o, a || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(o)
			}
			const c = "TURNSTILE";
			let l = function(o) {
				return o.OVERVIEW_PAGE = "view the overview page", o.LIST_OF_WIDGETS = "list of widgets", o.SOLVE_EVENTS = "list solve events", o.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", o.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", o.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", o.OPEN_DELETE_MODAL = "view the delete modal for one widget", o.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", o.DELETE_WIDGET = "delete successfully widgets", o.LIST_OF_HOSTNAMES = "list hostnames", o.OPEN_ADD_WIDGET_PAGE = "view page to add widget", o.FEEDBACK_ADD = "view Feedback Add", o.SAVE_WIDGET = "save widget", o.ROTATE_KEYS = "rotate keys", o.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", o.GET_WIDGETS = "get widget details", o.OPEN_ANALYTICS_PAGE = "view analytics page", o.ANALYTICS_DATA = "list the analytics data", o
			}({});
			const f = ({
					name: o,
					product: a = c,
					category: v = "user journey",
					page: p,
					additionalData: d = {}
				}) => {
					r().sendEvent(o, i({
						category: v,
						page: p,
						product: a
					}, d || {}))
				},
				n = () => {
					var o;
					return (o = Object.values(l)) === null || o === void 0 ? void 0 : o.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				E: function() {
					return l
				},
				Ky: function() {
					return f
				},
				RJ: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var o = 1; o < arguments.length; o++) {
					var a = arguments[o] != null ? Object(arguments[o]) : {},
						v = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(a).filter(function(p) {
						return Object.getOwnPropertyDescriptor(a, p).enumerable
					})), v.forEach(function(p) {
						u(n, p, a[p])
					})
				}
				return n
			}

			function u(n, o, a) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = a, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var v = a.call(n, o || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.GROUP_TABLE_ROW_CLICK = "user group table row click", n.GROUP_TABLE_ROW_MEMBERS_CLICK = "user group table row members click", n.GROUP_TABLE_ROW_POLICIES_CLICK = "user group table row policies click", n.GROUP_TABLE_ROW_SETTINGS_CLICK = "user group table row settings click", n.BACK_BUTTON = "clicked back from user group detail", n.MEMBER_ADD = "add user group member", n.MEMBER_DELETE = "delete user group member", n.POLICY_SAVE = "user group policies save", n.POLICY_DELETE = "user group policies delete", n
			}({});
			const l = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, i({}, o || {}))
				},
				f = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/zone-versioning/selectors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$e: function() {
					return I
				},
				$h: function() {
					return g
				},
				G: function() {
					return b
				},
				M3: function() {
					return D
				},
				Tr: function() {
					return T
				},
				UY: function() {
					return d
				},
				bH: function() {
					return o
				},
				fv: function() {
					return L
				},
				hF: function() {
					return O
				},
				iw: function() {
					return v
				},
				m7: function() {
					return n
				},
				re: function() {
					return _
				},
				tp: function() {
					return p
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../../../../node_modules/reselect/lib/index.js"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/SidebarNav/permissions.ts"),
				s = t("../react/common/selectors/entitlementsSelectors.ts");

			function m(C) {
				for (var k = 1; k < arguments.length; k++) {
					var R = arguments[k] != null ? Object(arguments[k]) : {},
						P = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(R).filter(function(z) {
						return Object.getOwnPropertyDescriptor(R, z).enumerable
					})), P.forEach(function(z) {
						c(C, z, R[z])
					})
				}
				return C
			}

			function c(C, k, R) {
				return k = l(k), k in C ? Object.defineProperty(C, k, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[k] = R, C
			}

			function l(C) {
				var k = f(C, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function f(C, k) {
				if (typeof C != "object" || C === null) return C;
				var R = C[Symbol.toPrimitive];
				if (R !== void 0) {
					var P = R.call(C, k || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(C)
			}
			const n = C => (0, i.nA)(C) ? (0, s.p1)(C) && (0, u.$n)(C, "zone_versioning", "versioning") : !1,
				o = C => C.zoneVersioning.zoneApplications,
				a = (0, e.P1)("zoneApplications", o),
				v = C => C.zoneVersioning.zoneVersions,
				p = (0, e.P1)("zoneVersions", v),
				d = (0, r.P1)(p, C => {
					if (C) return C.filter(k => k.status == "V")
				}),
				E = C => C.zoneVersioning.environments,
				T = C => C.zoneVersioning.environments.isRequesting,
				y = (0, e.P1)("environments", E),
				g = (0, r.P1)(a, C => {
					if (C) {
						if (C.length === 1) return C[0];
						C.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${C.length}`))
					}
					return null
				}),
				O = (0, r.P1)(y, C => C ? C.environments : []),
				_ = C => {
					var k;
					return (k = C.zoneVersioning) === null || k === void 0 ? void 0 : k.zoneVersionSelector
				},
				b = (0, r.P1)(_, p, (C, k) => {
					if (!(C == null ? void 0 : C.isVersion) || !k) return null;
					const R = k.find(P => {
						if (P.version === C.selectedVersion && P.locked) return !0
					});
					return R ? m({}, R, {
						isLocked: !0
					}) : null
				}),
				I = (0, r.P1)(p, O, (C, k) => !k || !C ? [] : C.map(R => {
					const P = [];
					for (const z in k) k[z].version === R.version && P.push(k[z]);
					return m({}, R, {
						environments: P
					})
				})),
				A = C => C.zoneVersioning.WAFMigrationStatus,
				D = (0, e.P1)("WAFMigrationStatus", A),
				L = C => C.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$2: function() {
					return A
				},
				CI: function() {
					return b
				},
				IS: function() {
					return c
				},
				L7: function() {
					return s
				},
				Lt: function() {
					return p
				},
				Oj: function() {
					return a
				},
				QV: function() {
					return d
				},
				S6: function() {
					return D
				},
				X$: function() {
					return O
				},
				X6: function() {
					return f
				},
				d4: function() {
					return v
				},
				fE: function() {
					return l
				},
				im: function() {
					return y
				},
				lv: function() {
					return E
				},
				rL: function() {
					return n
				},
				wW: function() {
					return m
				}
			});

			function e(L) {
				for (var C = 1; C < arguments.length; C++) {
					var k = arguments[C] != null ? Object(arguments[C]) : {},
						R = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(k).filter(function(P) {
						return Object.getOwnPropertyDescriptor(k, P).enumerable
					})), R.forEach(function(P) {
						r(L, P, k[P])
					})
				}
				return L
			}

			function r(L, C, k) {
				return C = i(C), C in L ? Object.defineProperty(L, C, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[C] = k, L
			}

			function i(L) {
				var C = u(L, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function u(L, C) {
				if (typeof L != "object" || L === null) return L;
				var k = L[Symbol.toPrimitive];
				if (k !== void 0) {
					var R = k.call(L, C || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(L)
			}
			const s = {
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
				m = 800,
				c = "40rem",
				l = {
					pricing: {
						requests: .15,
						duration: 12.5,
						bytes_stored: .2,
						rows_read: .001,
						rows_written: 1
					}
				},
				f = {
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
				a = {
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
				p = {
					free: {
						minutes: 3e3
					},
					paid: {
						minutes: 6e3
					}
				},
				d = {
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
				E = {
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
				y = "YYYY-MM-DD HH:mm:SS ZZ",
				g = "active",
				O = ["bundled", "unbound", "standard"],
				_ = null,
				b = {
					observability: "workers-observability",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let I = function(L) {
				return L[L.NONE = 0] = "NONE", L[L.MISS = 1] = "MISS", L[L.EXPIRED = 2] = "EXPIRED", L[L.UPDATING = 3] = "UPDATING", L[L.STALE = 4] = "STALE", L[L.HIT = 5] = "HIT", L[L.IGNORED = 6] = "IGNORED", L[L.BYPASS = 7] = "BYPASS", L[L.REVALIDATED = 8] = "REVALIDATED", L[L.DYNAMIC = 9] = "DYNAMIC", L[L.STREAM_HIT = 10] = "STREAM_HIT", L[L.DEFERRED = 11] = "DEFERRED", L
			}({});
			const A = [I.HIT, I.STREAM_HIT];
			let D = function(L) {
				return L.SECRETS_STORE_ID = "store_id", L.SECRET_NAME = "secret_name", L
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Hv: function() {
					return c
				},
				L: function() {
					return i
				},
				Q9: function() {
					return u
				},
				_j: function() {
					return s
				},
				ky: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = l => `${l}.workers.dev`,
				i = (l, f, n) => `${n?`${n}.`:""}${l}.${r(f)}`,
				u = (l, f, n) => `https://${i(l,f,n)}`,
				s = {
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
				m = "https://cron-triggers.cloudflareworkers.com",
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
					describeCron: `${m}/describe`,
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
					nextCron: `${m}/next`,
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
					validateCron: `${m}/validate`,
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				MN: function() {
					return i
				},
				Yg: function() {
					return s
				},
				i$: function() {
					return u
				},
				l3: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const i = async ([c, l]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: c,
					variables: l
				})
			})).body, u = async (...c) => (await e.get(...c)).body, s = c => async (l, f) => {
				const n = await fetch(l, f).then(o => o.json());
				return c.assertDecode(n)
			}, m = async (...c) => (await u(...c)).result;
			h.ZP = {
				fetcher: c => Array.isArray(c) ? m(...c) : m(c)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(x, h) {
				h()
			})(this, function() {
				"use strict";

				function x() {
					var t = !0,
						e = !1,
						r = null,
						i = {
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

					function u(E) {
						return !!(E && E !== document && E.nodeName !== "HTML" && E.nodeName !== "BODY" && "classList" in E && "contains" in E.classList)
					}

					function s(E) {
						var T = E.type,
							y = E.tagName;
						return !!(y == "INPUT" && i[T] && !E.readOnly || y == "TEXTAREA" && !E.readOnly || E.isContentEditable)
					}

					function m(E) {
						E.getAttribute("is-focus-visible") !== "" && E.setAttribute("is-focus-visible", "")
					}

					function c(E) {
						E.getAttribute("is-focus-visible") === "" && E.removeAttribute("is-focus-visible")
					}

					function l(E) {
						u(document.activeElement) && m(document.activeElement), t = !0
					}

					function f(E) {
						t = !1
					}

					function n(E) {
						!u(E.target) || (t || s(E.target)) && m(E.target)
					}

					function o(E) {
						!u(E.target) || E.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), c(E.target))
					}

					function a(E) {
						document.visibilityState == "hidden" && (e && (t = !0), v())
					}

					function v() {
						document.addEventListener("mousemove", d), document.addEventListener("mousedown", d), document.addEventListener("mouseup", d), document.addEventListener("pointermove", d), document.addEventListener("pointerdown", d), document.addEventListener("pointerup", d), document.addEventListener("touchmove", d), document.addEventListener("touchstart", d), document.addEventListener("touchend", d)
					}

					function p() {
						document.removeEventListener("mousemove", d), document.removeEventListener("mousedown", d), document.removeEventListener("mouseup", d), document.removeEventListener("pointermove", d), document.removeEventListener("pointerdown", d), document.removeEventListener("pointerup", d), document.removeEventListener("touchmove", d), document.removeEventListener("touchstart", d), document.removeEventListener("touchend", d)
					}

					function d(E) {
						E.target.nodeName.toLowerCase() !== "html" && (t = !1, p())
					}
					document.addEventListener("keydown", l, !0), document.addEventListener("mousedown", f, !0), document.addEventListener("pointerdown", f, !0), document.addEventListener("touchstart", f, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", o, !0), document.addEventListener("visibilitychange", a, !0), v(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function h(t) {
					var e;

					function r() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && h(x)
			})
		},
		"../react/utils/bootstrap.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				$8: function() {
					return r
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return u
				},
				gm: function() {
					return i
				}
			});
			const e = () => {
					var s, m, c;
					return (s = window) === null || s === void 0 || (m = s.bootstrap) === null || m === void 0 || (c = m.data) === null || c === void 0 ? void 0 : c.security_token
				},
				r = () => {
					var s, m, c;
					return !!((s = t.g.bootstrap) === null || s === void 0 || (m = s.data) === null || m === void 0 || (c = m.user) === null || c === void 0 ? void 0 : c.id)
				},
				i = () => {
					var s, m;
					return !!((s = t.g.bootstrap) === null || s === void 0 || (m = s.data) === null || m === void 0 ? void 0 : m.is_kendo)
				},
				u = () => {
					var s, m, c, l;
					return (s = window) === null || s === void 0 || (m = s.bootstrap) === null || m === void 0 || (c = m.data) === null || c === void 0 || (l = c.user) === null || l === void 0 ? void 0 : l.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				O5: function() {
					return u
				},
				Xm: function() {
					return i
				},
				kT: function() {
					return c
				},
				wV: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				i = () => (r() || "").indexOf("C0002") !== -1,
				u = () => (r() || "").indexOf("C0003") !== -1,
				s = () => (r() || "").indexOf("C0004") !== -1,
				m = () => (r() || "").indexOf("C0005") !== -1,
				c = n => {
					const o = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${o}`
				},
				l = () => {
					var n;
					const o = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (o == null ? void 0 : o.country) || ""
				},
				f = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				AI: function() {
					return O
				},
				Kd: function() {
					return o
				},
				S8: function() {
					return g
				},
				ZW: function() {
					return l
				},
				ay: function() {
					return _
				},
				fh: function() {
					return b
				},
				i_: function() {
					return a
				},
				ly: function() {
					return n
				},
				th: function() {
					return c
				},
				ti: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				i = t("../../../common/intl/intl-types/src/index.ts"),
				u = t("../../../common/util/types/src/utils/index.ts"),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m = t("../../../../node_modules/cookie/index.js");
			const c = "cf-sync-locale-with-cps",
				l = i.Q.en_US,
				f = "en_US",
				n = "cf-locale";

			function o() {
				const D = (0, m.parse)(document.cookie);
				return s.Z.get(n) || D[n] || null
			}

			function a(D) {
				document.cookie = (0, m.serialize)(n, D, {
					path: "/",
					maxAge: 31536e3,
					secure: !0
				}), s.Z.set(n, D)
			}

			function v() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0,
					secure: !0
				}), cache.remove(n)
			}
			const p = D => (0, u.Yd)(i.Q).find(L => i.Q[L] === D) || f,
				d = [],
				E = [],
				T = [i.Q.de_DE, i.Q.en_US, i.Q.es_ES, i.Q.fr_FR, i.Q.it_IT, i.Q.pt_BR, i.Q.ko_KR, i.Q.ja_JP, i.Q.zh_CN, i.Q.zh_TW],
				y = {
					test: [...T, ...E, ...d],
					development: [...T, ...E, ...d],
					staging: [...T, ...E, ...d],
					production: [...T, ...E]
				},
				g = D => {
					const L = i.Q[D];
					return y.production.includes(L)
				},
				O = () => Object.keys(i.Q).filter(D => g(D)),
				_ = D => {
					const L = i.Q[D];
					return E.includes(L)
				},
				b = D => I[D],
				I = {
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
				A = r().locale();
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
			}), r().locale(A)
		},
		"../react/utils/translator.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				QT: function() {
					return p
				},
				Vb: function() {
					return l
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
					return a
				},
				oc: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = t("../../../common/intl/intl-core/src/Translator.ts"),
				i = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				u = t.n(i),
				s = t("../flags.ts");
			const m = new r.Z({
				pseudoLoc: (0, s.J8)("is_pseudo_loc")
			});

			function c(d, ...E) {
				return m.t(d, ...E)
			}
			const l = m;

			function f(d, ...E) {
				return markdown(c(d, E))
			}

			function n(d) {
				if (Number(d) !== 0) {
					if (d % 86400 == 0) return c("time.num_days", {
						smart_count: d / 86400
					});
					if (d % 3600 == 0) return c("time.num_hours", {
						smart_count: d / 3600
					});
					if (d % 60 == 0) return c("time.num_minutes", {
						smart_count: d / 60
					})
				}
				return c("time.num_seconds", {
					smart_count: d
				})
			}

			function o(d, E) {
				return d in E ? E[d] : void 0
			}
			const a = i.Trans,
				v = i.I18n,
				p = i.useI18n
		},
		"../react/utils/url.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Ae: function() {
					return D
				},
				Ct: function() {
					return C
				},
				Fl: function() {
					return ue
				},
				KT: function() {
					return re
				},
				NF: function() {
					return O
				},
				Nw: function() {
					return A
				},
				Pd: function() {
					return b
				},
				Uh: function() {
					return J
				},
				cm: function() {
					return T
				},
				e1: function() {
					return L
				},
				el: function() {
					return B
				},
				hW: function() {
					return X
				},
				pu: function() {
					return W
				},
				qF: function() {
					return I
				},
				qR: function() {
					return q
				},
				td: function() {
					return _
				},
				uW: function() {
					return M
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				r = t("../react/pages/abuse/constants.ts"),
				i = t("../react/pages/d1/routes.ts"),
				u = t("../react/pages/images/routes.ts"),
				s = t("../react/pages/pages/routes.ts"),
				m = t("../react/pages/r2/routes.ts"),
				c = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/zoneless-workers/routes.ts"),
				f = t("../../../../node_modules/query-string/query-string.js"),
				n = t.n(f);

			function o($) {
				for (var oe = 1; oe < arguments.length; oe++) {
					var ie = arguments[oe] != null ? Object(arguments[oe]) : {},
						Ee = Object.keys(ie);
					typeof Object.getOwnPropertySymbols == "function" && Ee.push.apply(Ee, Object.getOwnPropertySymbols(ie).filter(function(se) {
						return Object.getOwnPropertyDescriptor(ie, se).enumerable
					})), Ee.forEach(function(se) {
						a($, se, ie[se])
					})
				}
				return $
			}

			function a($, oe, ie) {
				return oe = v(oe), oe in $ ? Object.defineProperty($, oe, {
					value: ie,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[oe] = ie, $
			}

			function v($) {
				var oe = p($, "string");
				return typeof oe == "symbol" ? oe : String(oe)
			}

			function p($, oe) {
				if (typeof $ != "object" || $ === null) return $;
				var ie = $[Symbol.toPrimitive];
				if (ie !== void 0) {
					var Ee = ie.call($, oe || "default");
					if (typeof Ee != "object") return Ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (oe === "string" ? String : Number)($)
			}
			const {
				endsWithSlash: d
			} = e.default, E = new RegExp(/([0-9a-z]{32})/g), T = $ => $ == null ? void 0 : $.replace(E, ":id"), y = ($, oe) => {
				const ie = $.replace(d, "").split("/");
				return ie.slice(0, 2).concat([oe]).concat(ie.slice(3)).join("/")
			}, g = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), O = $ => `/${$.replace(d,"").replace(/^\//,"")}`, _ = $ => A("add-site", $), b = $ => A("billing", $), I = $ => A("registrar/register", $), A = ($, oe) => oe ? `/${oe}${$?`/${$}`:""}` : `/?to=/:account/${$}`, D = () => {
				const $ = location ? location.pathname.match(/[0-9a-f]{32}/) || location.pathname.match(/[0-9a-f]{32}/) : null;
				return $ ? $[0] : null
			}, L = () => {
				const $ = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return $ ? $[1] : null
			}, C = ($, oe) => n().stringify(o({}, n().parse($), oe)), k = ($ = "") => $.toString().replace(/([\/]{1,})$/, ""), R = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], P = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, z = /^\/(\w{32,})(\/[^.]*)?/, te = $ => R.includes($), ee = $ => !te($), q = $ => !te($) && z.test($), B = $ => !te($) && P.test($), U = $ => P.exec($), X = $ => {
				if (B($)) return $.split("/").filter(oe => oe.length > 0)[1]
			}, K = $ => z.exec($), M = $ => {
				if (q($)) {
					const oe = K($);
					if (oe) return oe[1]
				}
			}, j = $ => q($) && $.split("/")[2] === "register-domain", F = $ => j($) ? $.split("/") : null, G = $ => {
				if (B($)) {
					const [, , , oe, ie, Ee, se, he] = $.split("/");
					return oe === "traffic" && ie === "load-balancing" && Ee === "pools" && se === "edit" && he
				}
			}, J = $ => {
				const oe = F($);
				if (oe) return oe[3]
			}, ne = ($, oe) => {
				var ie, Ee;
				return ((ie = $.pattern.match(/\:/g)) !== null && ie !== void 0 ? ie : []).length - ((Ee = oe.pattern.match(/\:/g)) !== null && Ee !== void 0 ? Ee : []).length
			}, Y = [...Object.values(c.C), ...Object.values(u.KJ), ...Object.values(m._j), ...Object.values(l._j), ...Object.values(s._j), ...Object.values(i._)].sort(ne);

			function ue($) {
				if (!ee($)) return $;
				for (const he of Y)
					if (he.expression.test($)) return he.pattern;
				if (r.eM.abuseReportTab.expression.test($)) {
					const he = $.split("/"),
						De = he[he.length - 1];
					return r.eM.abuseReportTab.pattern.replace(":tab", De)
				}
				if (r.eM.abuseReport.expression.test($)) return r.eM.abuseReport.pattern;
				const oe = F($);
				if (oe) {
					const [, , he, , ...De] = oe;
					return `/:accountId/${he}/:domainName/${De.join("/")}`
				}
				if (G($)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const Ee = U($);
				if (Ee) {
					const [, , , , he] = Ee;
					return `/:accountId/:zoneName${he||""}`
				}
				const se = K($);
				if (se) {
					const [, , he] = se;
					return `/:accountId${he||""}`
				}
				return $
			}

			function W($) {
				if (!!$) try {
					const ie = $.split(".").pop();
					if (ie && ie.length > 0) return ie
				} catch {}
			}

			function re($, oe = document.location.href) {
				try {
					const ie = new URL($),
						Ee = new URL(oe);
					if (ie.origin === Ee.origin) return `${ie.pathname}${ie.search}${ie.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				r: function() {
					return c
				},
				y: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				s = t.n(u);
			const m = /^\/domainconnect\/v2\/domaintemplates\//i,
				c = "domain-connect-redirect",
				l = () => {
					const f = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						m.test(f.pathname) && i.Z.set(c, f, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = t("../utils/zaraz.ts")
		},
		"../react/utils/zoneLevelAccess.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				P: function() {
					return u
				},
				b: function() {
					return s
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				r = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function i() {
				var m, c, l, f, n, o;
				return (m = window) === null || m === void 0 || (c = m.bootstrap) === null || c === void 0 || (l = c.data) === null || l === void 0 || (f = l.user) === null || f === void 0 || (n = f.betas) === null || n === void 0 || (o = n.some) === null || o === void 0 ? void 0 : o.call(n, a => a === "zone_level_access_beta")
			}

			function u() {
				const m = !!(0, e.Z)("zone-level-access");
				return i() || m
			}

			function s(m) {
				const c = !!(0, r.z1)("zone-level-access")(m);
				return i() || c
			}
		},
		"../utils/getDashVersion.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				p: function() {
					return i
				},
				t: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var u, s;
					return (u = window) === null || u === void 0 || (s = u.build) === null || s === void 0 ? void 0 : s.dashVersion
				},
				i = () => {
					var u;
					return ((0, e.parse)((u = document) === null || u === void 0 ? void 0 : u.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Wi: function() {
					return _t
				},
				IM: function() {
					return Pt
				},
				yV: function() {
					return rt
				},
				Ug: function() {
					return $e
				},
				v_: function() {
					return vt
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				i = t("../react/utils/bootstrap.ts"),
				u = t("../react/app/providers/storeContainer.js"),
				s = t("../react/common/selectors/languagePreferenceSelector.ts"),
				m = t("../flags.ts"),
				c = t("../../../../node_modules/cookie/index.js"),
				l = t("../react/utils/url.ts"),
				f = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../../../../node_modules/lodash-es/memoize.js"),
				a = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				v = t("../utils/getDashVersion.ts"),
				p = t("../react/common/selectors/accountSelectors.ts"),
				d = t("../react/common/selectors/entitlementsSelectors.ts"),
				E = t("../react/common/utils/getEnvironment.ts");

			function T(de) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(we) {
						return Object.getOwnPropertyDescriptor(ve, we).enumerable
					})), _e.forEach(function(we) {
						y(de, we, ve[we])
					})
				}
				return de
			}

			function y(de, le, ve) {
				return le = g(le), le in de ? Object.defineProperty(de, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : de[le] = ve, de
			}

			function g(de) {
				var le = O(de, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function O(de, le) {
				if (typeof de != "object" || de === null) return de;
				var ve = de[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(de, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(de)
			}
			const _ = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				b = (0, o.Z)(de => {
					try {
						return _.assertDecode((0, c.parse)(de))
					} catch (le) {
						return console.error(le), {}
					}
				}),
				I = de => (le, ve, _e) => {
					try {
						const Qe = window.location.pathname,
							et = (0, u.bh)().getState(),
							Ct = b(document.cookie),
							Vt = T({
								page: (0, l.Fl)(_e.page || window.location.pathname),
								dashVersion: (0, v.t)(),
								environment: (0, E.Z)()
							}, Ct);
						if (le === "identify") {
							var we, Be;
							const wt = {
								gates: (0, a.T2)(et) || {},
								country: (we = t.g) === null || we === void 0 || (Be = we.bootstrap) === null || Be === void 0 ? void 0 : Be.ip_country
							};
							return de(le, ve, T({}, Vt, wt, _e))
						} else {
							const wt = {
								accountId: (0, l.uW)(Qe),
								zoneName: (0, l.hW)(Qe),
								domainName: (0, l.Uh)(Qe)
							};
							if ((0, l.qR)(Qe)) {
								var Ge;
								const st = (0, p.D0)(et);
								wt.isEntAccount = !!(st == null || (Ge = st.meta) === null || Ge === void 0 ? void 0 : Ge.has_enterprise_zones) || (0, d.p1)(et)
							}
							if ((0, l.el)(Qe)) {
								var We;
								const st = (0, f.nA)(et);
								wt.zoneId = st == null ? void 0 : st.id, wt.plan = st == null || (We = st.plan) === null || We === void 0 ? void 0 : We.legacy_id
							}
							return de(le, ve, T({}, Vt, wt, _e))
						}
					} catch (Qe) {
						return console.error(Qe), de(le, ve, _e)
					}
				},
				A = de => async (le, ve, _e) => {
					try {
						return await de(le, ve, _e)
					} catch (we) {
						if (console.error(we), !vt()) throw we;
						return {
							status: "rejected",
							reason: we
						}
					}
				};
			var D = t("../react/app/components/AccountHome/tracking.ts"),
				L = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				C = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				k = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				R = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				P = t("../react/common/middleware/sparrow/errors.ts"),
				z = t("../react/pages/abuse/constants.ts"),
				te = t("../react/pages/blocked-content/constants.ts"),
				ee = t("../react/pages/caching/tracking.tsx"),
				q = t("../react/pages/dns/dns-records/tracking.ts"),
				B = t("../react/pages/home/alerts/tracking.ts"),
				U = t("../react/pages/home/audit-log/tracking.ts"),
				X = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				K = t("../react/pages/home/configurations/lists/tracking.ts"),
				M = t("../react/pages/home/domain-registration/tracking.ts"),
				j = t("../react/pages/home/members/sparrowEvents.ts"),
				F = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				G = t("../react/pages/hyperdrive/tracking.ts"),
				J = t("../react/pages/magic/network-monitoring/constants.ts"),
				ne = t("../react/pages/magic/overview/tracking.ts"),
				Y = t("../react/pages/magic/packet-captures/constants.ts"),
				ue = t("../react/pages/page-rules/tracking.ts"),
				W = t("../react/pages/pages/constants.ts"),
				re = t("../react/pages/pipelines/tracking.ts"),
				$ = t("../react/pages/profile/tracking.ts"),
				oe = t("../react/pages/secrets-store/resources/constants.ts"),
				ie = t("../react/pages/security-center/tracking.ts"),
				Ee = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
				se = t("../react/pages/security/api-shield/tracking.ts"),
				he = t("../react/pages/security/bots/tracking.ts"),
				De = t("../react/pages/security/overview/resources/constants.ts"),
				Me = t("../react/pages/security/page-shield/resources/index.ts"),
				Fe = t("../react/pages/security/resources/constants.tsx"),
				Se = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				ot = t("../react/common/components/filter-editor/triplet-fields/SequencesField/constants.tsx"),
				Ke = t("../react/pages/security/settings/index.tsx"),
				qe = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				ze = t("../react/pages/shared-config/sparrowEvents.tsx"),
				V = t("../react/pages/spectrum/tracking.tsx"),
				Ce = t("../react/pages/traffic/argo/tracking.ts"),
				je = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				Ue = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				tt = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				dt = t("../react/pages/turnstile/tracking.ts"),
				gt = t("../react/pages/user-groups/sparrowEvents.ts"),
				Ie = t("../react/pages/zoneless-workers/constants.ts"),
				nt = t("../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts"),
				Q = t("../react/pages/analytics/eos/resources/tracking.ts"),
				ce = t("../react/pages/internal-dns/tracking.ts"),
				fe = t("../react/pages/security/ai-agent/constants.ts"),
				Oe = t("../react/common/middleware/sparrow/globalEvents/clickEvents.ts"),
				xe = t("../react/pages/ai-zone/constants.ts");
			const Ze = ((de, le, ...ve) => n.eg.union([n.eg.literal(de), n.eg.literal(le), ...ve.map(_e => n.eg.literal(_e))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin domain registration flow", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", ...Object.values(Q.f), "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "copy table cell", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Click on DNS Firewall feedback link", "Click on DNS Firewall add Cluster", "Hover on DNS Firewall feedback toast", "Click create DNS firewall cluster", "Click edit DNS firewall cluster", "Click on DNS Firewall edit Cluster button", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "global nav shortcut clicked", "global nav shortcut pinned", "global nav shortcut unpinned", "global nav survey clicked", "global nav switch", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "route to custom error rules", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", D.gX.SPARROW_PROJECTS_TABLE_CLICK, D.gX.SPARROW_EMPTY_STATE_CTA_CLICK, D.gX.SPARROW_PRODUCT_CARD_CLICK, D.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, D.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, D.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, D.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, D.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, D.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, D.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, xe.A3.BOT_ACTION_CHANGED, xe.A3.TERMS_DECISION, xe.A3.STRIPE_CONNECT, xe.A3.STRIPE_ACCOUNT_VIEWED, xe.A3.PPC_STATUS_CHANGED, xe.A3.PPC_PRICE_CHANGED, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ie.QV.clickedDownloadAnalytics, Ie.QV.clickedPrintAnalytics, Ie.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ie.QV.addWCITriggerToExistingWorker, Ie.QV.updateWCITrigger, Ie.QV.deleteWCITrigger, Ie.QV.addWCITriggerToNewWorker, Ie.QV.createWCIBuildForNewWorker, Ie.QV.completedWCIBuildForNewWorker, Ie.QV.changedDefaultConfigurations, Ie.QV.clickElement, W.QV.toggledPagesSmartPlacement, W.QV.downloadDemoProject, Ie.QV.clickCreateWorkerFromRepoNextStep, Ie.QV.clickCreateWorkerFromRepoPreviousStep, Ie.QV.clickCreateNewSCMConnection, Ie.QV.redirectFromSCMOAuth, Ie.QV.clickSubmitError, Ie.QV.selectTemplate, Ie.QV.clickedListTemplates, Ie.QV.clickedImportRepository, Ie.QV.clickedClonePublicRepositoryFromUrl, Ie.QV.templateStubWorkerCreated, Ie.QV.templateStubWorkerCreationFailed, Ie.QV.templateRepositoryCreated, Ie.QV.templateRepositoryCreationFailed, Ie.QV.copyTemplateC3Command, Ie.QV.templateDeployClick, Ie.QV.reauthenticateGithubModalShown, Ie.QV.updateGithubPermissionsClicked, Ie.QV.D2W_importRepository, Ie.QV.D2W_stubWorkerCreated, Ie.QV.D2W_stubWorkerCreationFailed, Ie.QV.D2W_repositoryCreated, Ie.QV.D2W_repositoryCreationFailed, Ie.QV.D2W_resourcesProvisioned, Ie.QV.D2W_resourceProvisioningFailed, Ie.QV.D2W_githubAPIRateLimitReached, Ie.QV.createResource, Ie.QV.deleteResource, Ie.QV.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", he.N3.INITIAL_FETCH_SCORES, he.N3.FETCH_CONFIGURATION, he.N3.INITIAL_FETCH_TIME_SERIES, he.N3.INITIAL_FETCH_ATTRIBUTES, he.N3.UPDATE_SETTINGS, he.N3.DELETE_RULE, he.N3.UPDATE_RULE, he.N3.FETCH_RULES, he.N3.CONFIGURE_BOT_MANAGEMENT, he.N3.WAF_RULES_REDIRECT, fe.PJ, fe.tP, fe.zf, F.F.TOGGLE_TCP_PROTECTION, F.F.GET_TCP_PROTECTION_PREFIXES, F.F.CREATE_TCP_PROTECTION_PREFIXES, F.F.CREATE_TCP_PROTECTION_PREFIX, F.F.UPDATE_TCP_PROTECTION_PREFIX, F.F.DELETE_TCP_PROTECTION_PREFIX, F.F.DELETE_TCP_PROTECTION_PREFIXES, F.F.GET_TCP_PROTECTION_ALLOWLIST, F.F.CREATE_TCP_PROTECTION_ALLOWLIST, F.F.UPDATE_TCP_PROTECTION_ALLOWLIST, F.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, F.F.DELETE_TCP_PROTECTION_ALLOWLIST, F.F.GET_SYN_PROTECTION_RULES, F.F.GET_SYN_PROTECTION_RULE, F.F.CREATE_SYN_PROTECTION_RULE, F.F.UPDATE_SYN_PROTECTION_RULE, F.F.DELETE_SYN_PROTECTION_RULE, F.F.GET_TCP_FLOW_PROTECTION_RULES, F.F.GET_TCP_FLOW_PROTECTION_RULE, F.F.CREATE_TCP_FLOW_PROTECTION_RULE, F.F.UPDATE_TCP_FLOW_PROTECTION_RULE, F.F.DELETE_TCP_FLOW_PROTECTION_RULE, F.F.GET_SYN_PROTECTION_FILTERS, F.F.GET_SYN_PROTECTION_FILTER, F.F.CREATE_SYN_PROTECTION_FILTER, F.F.UPDATE_SYN_PROTECTION_FILTER, F.F.DELETE_SYN_PROTECTION_FILTER, F.F.GET_TCP_FLOW_PROTECTION_FILTERS, F.F.GET_TCP_FLOW_PROTECTION_FILTER, F.F.CREATE_TCP_FLOW_PROTECTION_FILTER, F.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, F.F.DELETE_TCP_FLOW_PROTECTION_FILTER, F.F.GET_DNS_PROTECTION_RULES, F.F.GET_DNS_PROTECTION_RULE, F.F.CREATE_DNS_PROTECTION_RULE, F.F.UPDATE_DNS_PROTECTION_RULE, F.F.DELETE_DNS_PROTECTION_RULE, Me.FV.MANAGE_PAGE_SHIELD_POLICY, Me.FV.CONFIGURE_PAGE_SHIELD, Me.FV.VIEW_DETECTED_CONNECTIONS, Me.FV.VIEW_DETECTED_SCRIPTS, Me.FV.VIEW_PAGE_SHIELD_POLICIES, Me.FV.VIEW_PAGE_SHIELD_SETTINGS, Me.FV.OPEN_MUTABLE_VERSION_TOOLTIP, Me.FV.SHOW_MUTABLE_VERSION_TOOLTIP, K.y.CREATE_LIST, K.y.DELETE_LIST, K.y.ADD_LIST_ITEM, K.y.DELETE_LIST_ITEM, G.KO.PURCHASE_WORKERS_PAID, G.KO.LIST_CONFIGS, G.KO.SEARCH_CONFIGS, G.KO.CREATE_HYPERDRIVE_CONFIG, G.KO.VIEW_CONFIG_DETAILS, G.KO.UPDATE_CACHING_SETTINGS, G.KO.UPDATE_ORIGIN_CONN_LIM_SETTINGS, G.KO.DELETE_HYPERDRIVE_CONFIG, G.KO.CLICK_HYPERDRIVE_DOCUMENTATION, G.KO.CLICK_GET_STARTED_GUIDE, G.KO.CLICK_CONNECTIVITY_GUIDES, G.KO.CLICK_QUICK_LINK, G.KO.CLICK_DISCORD, G.KO.CLICK_COMMUNITY, V.N.CNAME, V.N.IP_ADDRESS, V.N.LB, V.N.UPDATE_CNAME, V.N.UPDATE_IP_ADDRESS, V.N.UPDATE_LB, V.N.DISABLE, ee.N.TIERED_CACHE, ee.N.CACHE_PURGE, ee.N.CACHE_ANALYTICS, ...(0, dt.P)(), ...(0, R.x4)(), ...(0, Ke.m8)(), ...(0, j.SH)(), ...(0, gt.Ky)(), ...(0, C.Cf)(), tt.N.CREATE, tt.N.EVENTS, tt.N.ANALYTICS, tt.N.UPDATE, tt.N.GENERATE_PREVIEW, ie.RY.INITIATE_URL_SCAN, ie.RY.LOAD_SCAN_INFO, ie.Ev.LOAD_THREAT_EVENTS, ie.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, ie.Ev.THREAT_EVENTS_FILTERS, ie.Ev.ABUSE_REPORT_BUTTON_CLICK, ie.Ev.ABUSE_REPORT_SUBMIT_CLICK, ie.Ev.ABUSE_REPORT_SUBMIT_FAILED, ie.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, ie.v9.EXPAND_INSIGHT_ROW, ie.v9.ONE_CLICK_RESOLVE_BUTTON, ie.v9.FOLLOW_RESOLVE_URL, ie.v9.MANAGE_INSIGHT, ie.v9.CLICK_SCAN_NOW, ie.v9.CLICK_EXPORT_INSIGHTS, ie.v9.BULK_ARCHIVE, ie.v9.CLICK_DETAILS_BUTTON, se.Fj[se.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, se.Fj[se.kq.ENDPOINT_MANAGEMENT].detailedMetrics, se.Fj[se.kq.ENDPOINT_MANAGEMENT].createEndpoint, se.Fj[se.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, se.Fj[se.kq.ENDPOINT_MANAGEMENT].deployRouting, se.Fj[se.kq.ENDPOINT_MANAGEMENT].deleteRouting, se.Fj[se.kq.API_DISCOVERY].viewDiscoveredEndpoints, se.Fj[se.kq.API_DISCOVERY].saveDiscoveredEndpoint, se.Fj[se.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, se.Fj[se.kq.SCHEMA_VALIDATION].viewSchemasList, se.Fj[se.kq.SCHEMA_VALIDATION].uploadSchema, se.Fj[se.kq.SCHEMA_VALIDATION].viewSchemaAdoption, se.Fj[se.kq.SCHEMA_VALIDATION].downloadSchema, se.Fj[se.kq.SCHEMA_VALIDATION].deleteSchema, se.Fj[se.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, se.Fj[se.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, se.Fj[se.kq.SEQUENCE_ANALYTICS].viewSequencesPage, se.Fj[se.kq.JWT_VALIDATION].viewJWTRules, se.Fj[se.kq.JWT_VALIDATION].addJWTRule, se.Fj[se.kq.JWT_VALIDATION].editJWTRule, se.Fj[se.kq.JWT_VALIDATION].deleteJWTRule, se.Fj[se.kq.JWT_VALIDATION].reprioritizeJWTRule, se.Fj[se.kq.JWT_VALIDATION].viewJWTConfigs, se.Fj[se.kq.JWT_VALIDATION].addJWTConfig, se.Fj[se.kq.JWT_VALIDATION].editJWTConfig, se.Fj[se.kq.JWT_VALIDATION].deleteJWTConfig, se.Fj[se.kq.SETTINGS].redirectToFirewallRulesTemplate, se.Fj[se.kq.SETTINGS].redirectToPages, se.Fj[se.kq.SETTINGS].listSessionIdentifiers, se.Fj[se.kq.SETTINGS].listRequestsContainingSessionIdentifiers, se.Fj[se.kq.SETTINGS].addOrRemoveSessionIdentifiers, se.Fj[se.kq.SETTINGS].redirectToCustomRules, se.Fj[se.kq.SETTINGS].listAllFallthroughSchemas, se.Fj[se.kq.SEQUENCE_RULES].listSequenceRules, se.Fj[se.kq.SEQUENCE_RULES].deleteSequenceRule, se.Fj[se.kq.SEQUENCE_RULES].reorderSequenceRule, se.Fj[se.kq.SEQUENCE_RULES].createSequenceRule, se.Fj[se.kq.SEQUENCE_RULES].editSequenceRule, U.Q.TOGGLE_V2, U.Q.FILTER, U.Q.FILTER_COUNTS, U.Q.FEEDBACK, U.Q.API_LATENCY, Ue.Z.ANALYTICS, Ue.Z.CREATE_AND_DEPLOY, Ue.Z.CREATE_MONITOR_LINK, Ue.Z.CREATE_MONITOR, Ue.Z.CREATE_POOL_LINK, Ue.Z.CREATE_POOL, Ue.Z.EDIT_MONITOR, Ue.Z.EDIT_POOL, Ue.Z.LOAD_BALANCING_TABLE, Ue.Z.POOL_TABLE, Ue.Z.EDIT_MONITOR_LINK, Ue.Z.EDIT_POOL_LINK, ...je.eT, B.y.SECONDARY_DNS_NOTIFICATION_CREATE, B.y.SECONDARY_DNS_NOTIFICATION_UPDATE, B.y.SECONDARY_DNS_NOTIFICATION_DELETE, q.U.ZONE_TRANSFER_SUCCESS, q.U.DNS_RECORD_CREATE, q.U.DNS_RECORD_UPDATE, q.U.DNS_RECORD_DELETE, X.Y.PEER_DNS_CREATE, X.Y.PEER_DNS_UPDATE, X.Y.PEER_DNS_DELETE, X.Y.ZONE_TRANSFER_ENABLE, X.Y.ZONE_TRANSFER_DISABLE, Ce.V.ARGO_ENABLEMENT, Ce.V.ARGO_GEO_ANALYTICS_FETCH, Ce.V.ARGO_GLOBAL_ANALYTICS_FETCH, Y.X.VIEW_BUCKETS_LIST, Y.X.CREATE_BUCKET, Y.X.VALIDATE_BUCKET, Y.X.DELETE_BUCKET, Y.X.VIEW_CAPTURES_LIST, Y.X.CREATE_SIMPLE_CAPTURE, Y.X.CREATE_FULL_CAPTURE, Y.X.VIEW_FULL_CAPTURE, Y.X.DOWNLOAD_SIMPLE_CAPTURE, J.bK.VIEW_RULES, J.bK.CREATE_RULE, J.bK.UPDATE_RULE, J.bK.DELETE_RULE, J.bK.VIEW_CONFIGURATION, J.bK.CREATE_CONFIGURATION, J.bK.UPDATE_CONFIGURATION, J.bK.DELETE_CONFIGURATION, ne.r8.VIEW_ALERTS, ne.r8.VIEW_ALERTS_HISTORY, ne.r8.MAGIC_OVERVIEW_ANALYTICS, ne.VZ.CREATE_SITE, ne.VZ.CREATE_TUNNEL, ne.VZ.CREATE_STATIC_ROUTE, Ee.DC.CLICK_ADAPTIVE_SAMPLING, Ee.DC.CLICK_TO_LOG_EXPLORER_BANNER, Ee.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, Ee.DC.CLICK_SWITCH_TO_RAW_LOGS, Ee.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", M.U.REGISTER_DOMAIN_SEARCH_SUBMIT, M.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, M.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, M.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, M.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, M.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, M.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, M.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, M.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, M.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, M.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, M.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, M.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, M.U.REGISTER_DOMAIN_CHECKOUT_ERROR, M.U.TRANSFER_DOMAIN_CHANGE_STEP, M.U.RENEW_DOMAIN_COMPLETED, M.U.RESTORE_DOMAIN_INIT, M.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, M.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, M.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, M.U.RESTORE_DOMAIN_FAILURE, M.U.RESTORE_DOMAIN_COMPLETED, M.U.DOMAIN_DELETE_INIT, M.U.DOMAIN_DELETE_COMPLETED, M.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, M.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, M.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, M.U.DOMAIN_DELETE_CONFIRM_DELETE, M.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, M.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, M.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, M.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, M.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, M.U.DOMAIN_MOVE_START_FLOW, M.U.DOMAIN_MOVE_OPEN_DOCS, M.U.DOMAIN_MOVE_CLOSE_FLOW, M.U.DOMAIN_MOVE_PROGRESS_FLOW, M.U.DOMAIN_MOVE_SUBMIT, M.U.DOMAIN_MOVE_INITIATE_SUCCESS, M.U.DOMAIN_MOVE_INITIATE_ERROR, M.U.DOMAIN_MOVE_CANCEL, M.U.DOMAIN_MOVE_CANCEL_SUCCESS, M.U.DOMAIN_MOVE_CANCEL_ERROR, M.U.ACTION_CENTER_NAVIGATE, M.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, M.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, M.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, M.U.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE, M.U.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS, M.U.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR, M.U.TRANSFER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE, oe.z3.CREATE_SECRET, oe.z3.DELETE_SECRET, oe.z3.BIND_SECRET, oe.z3.DUPLICATE_SECRET, oe.z3.EDIT_SECRET, re.KO.CLICK_GET_STARTED_GUIDE, re.KO.CLICK_PIPELINE_DOCUMENTATION, re.KO.CLICK_QUICK_LINK, re.KO.CREATE_PIPELINE, re.KO.DELETE_PIPELINE, re.KO.LIST_PIPELINES, re.KO.VIEW_PIPELINE, L.S.EXISTING_DOMAIN, L.S.NEW_DOMAIN, L.S.WAF_RULESET, L.S.WORKERS, L.S.PAGES, L.S.R2, L.S.ACCOUNT_MEMBERS, ue._.TEMPLATE_PRODUCT_SELECTED, ue._.TEMPLATE_SELECTED, ue._.TEMPLATE_SAVE_DRAFT, ue._.TEMPLATE_CANCEL, ue._.TEMPLATE_DEPLOY, ze.D.CLICK_GO_BACK_SHARE_MODAL, ze.D.CLICK_MENU_ITEM_SHARE, ze.D.CLICK_ON_CANCEL_SHARE_MODAL, ze.D.CLICK_ON_CLOSE_SHARE_MODAL, ze.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, ze.D.CLICK_ON_DELETE_RULESET, ze.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, ze.D.CLICK_ON_EDIT_SHARE_PERMISSION, ze.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, ze.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, ze.D.CLICK_ON_SHARE_TABLE_ROW, Fe.pR.CLICK_GEOGRAPHICAL_TEMPLATE, Fe.pR.CLICK_IP_TEMPLATE, Fe.pR.CLICK_USER_AGENT_TEMPLATE, Fe.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, Ke.vc.CREATED, Ke.vc.ENABLED, Ke.vc.DISABLED, Ke.vc.DELETED, Ke.vc.UPDATED, Ke.vc.DOWNLOADED, te.Gk.REQUEST_REVIEW, te.Gk.COPY_URL, k.v.FIELD, k.v.OPERATOR, qe.Vj.SHOW_LCC_MIGRATION_BANNER, qe.Vj.CLICK_LCC_DOCUMENTATION, qe.Vj.CLICK_LCC_UPGRADE_GUIDE, qe.Vj.SHOW_LCC_MIGRATION_WARNING, Se.yf.CLICK_DISMISS_INELIGIBILITY, Se.yf.CLICK_NEXT_STEP, Se.yf.CLICK_OPT_IN, Se.yf.CLICK_OPT_IN_BUTTON, Se.yf.CLICK_OPT_OUT_BUTTON, Se.yf.DISPLAY_MODAL, Se.yf.DISPLAY_OPT_OUT_MODAL, Se.yf.DISPLAY_TOOLTIP_NOT_AVAILABLE, Se.yf.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, Se.yf.DEFAULT_ALL_INIT, Se.yf.DEFAULT_ALL_OPT_OUT, Se.yf.DEFAULT_ALL_REENABLES, Se.yf.NEW_DASHBOARD_EXPERIENCE, De.AZ.LOAD_INSIGHTS, De.AZ.OPEN_SIDE_MODAL_INSIGHT, De.AZ.CLOSE_SIDE_MODAL_INSIGHT, De.AZ.CLICK_ACTION_INSIGHT, nt.YC.CHANGE_SETTING, nt.YC.LOAD_SETTINGS, nt.YC.OPEN_SIDE_MODAL_SETTING, nt.YC.CLOSE_SIDE_MODAL_SETTING, nt.YC.FILTER_SETTING, Ee.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, Ee.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, Ee.DC.OPEN_SIDE_DRAWER, Ee.DC.CLOSE_SIDE_DRAWER, ot.Xc, ot.Aq, $.QV[$.Xn].clickLoginFromMobileApp2fa, $.QV[$.Xn].clickTryOther2FAMethodOrBackupCode, $.QV[$.Xn].clickTryRecovery, $.QV[$.xq].clickRegenerateBackupCodes, z.Vq.APPEAL_MITIGATION_SUBMIT, z.Vq.APPEAL_MITIGATION_SUCCESS, z.Vq.APPEAL_MITIGATION_FAILURE, z.Vq.CLICK_ABUSE_REPORT_ID, z.Vq.CLICK_ABUSE_REPORT_MITIGATIONS_LINK, ce.N3.CLICK_GIVE_FEEDBACK, ce.N3.CLICK_NAVIGATION_TAB, ce.N3.CLICK_SEARCH_BY_ZONE_NAME, ce.N3.CLICK_SEARCH_BY_VIEW_NAME, ce.N3.CLICK_CREATE_AN_INTERNAL_ZONE, ce.N3.CLICK_CREATE_A_VIEW, ce.N3.CLICK_SAVE_ZONE, ce.N3.CLICK_SAVE_VIEW, ce.N3.CLICK_SEARCH_BY_RECORD_NAME, ce.N3.CLICK_ZONE_NAME, ce.N3.CLICK_ADD_A_RECORD, ce.N3.CLICK_ADD_RECORD_SAVE, ce.N3.CLICK_RECORD_EDIT, ce.N3.CLICK_EDIT_RECORD_SAVE, ce.N3.CLICK_IMPORT_RECORDS, ce.N3.CLICK_MANAGE_LINKED_VIEWS, ce.N3.CLICK_SAVE_MANAGE_LINKED_VIEWS, ce.N3.CLICK_VIEW_RECORD, Oe.W1),
				Ot = n.eg.exactStrict(n.eg.object({
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
				yt = (de, le) => {
					const [ve, _e] = Tt(le);
					let we, Be;
					return (0, n.nM)(Ze.decode(de)) && (we = new P.Uh(de)), _e && _e.length > 0 && (Be = new P.oV(de, _e)), [ve, we, Be]
				},
				Tt = de => {
					const le = Ot.decode(de);
					if ((0, n.nM)(le)) {
						const ve = le.left.map(({
							context: _e
						}) => _e.map(({
							key: we
						}) => we)).reduce((_e, we) => _e.concat(we), []).filter(_e => _e in de);
						return [Wt(ve, de), ve]
					}
					return [de, []]
				},
				Wt = (de, le) => Object.entries(le).reduce((ve, [_e, we]) => (de.includes(_e) || (ve[_e] = we), ve), {}),
				Ye = de => (le, ve, _e) => {
					const [we, Be, Ge] = yt(ve, _e);
					if (Be) throw Be;
					return Ge && console.error(Ge), de(le, ve, we)
				};
			var lt = t("../react/utils/zaraz.ts");
			const at = {
					identify: !0
				},
				ut = de => (le, ve, _e) => (at[ve] || lt.tg === null || lt.tg === void 0 || lt.tg.track(ve, _e), de(le, ve, _e));
			var mt = t("../react/common/selectors/userSelectors.ts"),
				Re = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function Z(de) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(we) {
						return Object.getOwnPropertyDescriptor(ve, we).enumerable
					})), _e.forEach(function(we) {
						pe(de, we, ve[we])
					})
				}
				return de
			}

			function pe(de, le, ve) {
				return le = be(le), le in de ? Object.defineProperty(de, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : de[le] = ve, de
			}

			function be(de) {
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
			const ke = new Set(["cf_argo", "load_balancing_basic_plus"]),
				He = new Set(["pro", "business"]),
				it = ({
					price: de,
					ratePlanId: le,
					ratePlanName: ve,
					frequency: _e,
					isNewSubscription: we
				}) => ({
					event: "purchase",
					new_subscription: we,
					ecommerce: {
						transaction_id: (0, Re.Z)(),
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
				ft = de => {
					const {
						price: le,
						frequency: ve,
						plan: _e,
						ratePlanId: we,
						ratePlanName: Be
					} = de;
					return He.has(_e) ? Z({}, it({
						price: le,
						ratePlanId: we,
						ratePlanName: Be,
						frequency: ve,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				$t = de => {
					const {
						price: le,
						frequency: ve,
						ratePlan: _e,
						ratePlanName: we
					} = de;
					return ke.has(_e) ? Z({}, it({
						price: le,
						ratePlanId: _e,
						ratePlanName: we,
						frequency: ve,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				It = de => {
					const {
						price: le,
						frequency: ve,
						plan: _e,
						ratePlanId: we,
						ratePlanName: Be,
						label: Ge
					} = de;
					return He.has(_e) ? Z({}, it({
						price: le,
						frequency: ve,
						ratePlanId: we,
						ratePlanName: Be,
						isNewSubscription: !1
					}), {
						label: Ge || _e
					}) : void 0
				},
				Xe = de => {
					const {
						price: le,
						frequency: ve,
						ratePlan: _e,
						ratePlanName: we,
						oldRatePlan: Be
					} = de;
					return ke.has(_e) ? Z({}, it({
						price: le,
						frequency: ve,
						ratePlanId: _e,
						ratePlanName: we,
						isNewSubscription: !1
					}), {
						label: `${Be}->${_e}`
					}) : void 0
				},
				kt = "click_key_interaction",
				Ft = de => {
					const {
						interactionType: le,
						clickType: ve,
						id: _e,
						text: we,
						href: Be,
						page: Ge
					} = de, {
						origin: We
					} = window.location, Qe = `${We}${Ge}`;
					return {
						event: kt,
						click_text: we,
						click_url: Be,
						interaction_type: le,
						link_click_type: ve,
						page_path: Ge,
						page_url: Qe,
						click_target_identifier: _e
					}
				},
				At = "pageview",
				Mt = "create zone",
				Rt = "create user",
				Nt = "Plan Purchase Success",
				xt = "Product Purchase Success",
				ht = "Plan Update Success",
				bt = "Product Update Success",
				zt = {
					[At]: !0,
					[Mt]: !0,
					[Rt]: !0,
					[Nt]: !0,
					[xt]: !0,
					[ht]: !0,
					[bt]: !0,
					[Oe.W1]: !0
				},
				Ht = de => {
					const le = /\|MCMID\|([0-9]+)\|/,
						ve = de.match(le);
					return ve ? ve[1] : void 0
				},
				Kt = de => {
					var le;
					const {
						deviceViewport: ve,
						page: _e,
						previousPage: we,
						pageName: Be,
						utm_campaign: Ge,
						_ga: We,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Qe
					} = de, {
						origin: et
					} = window.location, Ct = (0, mt.PR)((0, u.bh)().getState());
					return {
						event: we !== void 0 && _e !== we ? "virtual_page_view" : "page_load",
						device_type: ve,
						hostname: et,
						language: navigator.language,
						locale: (0, s.r)((0, u.bh)().getState()),
						page_location: _e ? `${et}${_e}` : "[redacted]",
						page_path: _e ? `${_e}` : "[redacted]",
						page_referrer: we ? `${et}/${we}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: Be || "[redacted]",
						page_url: _e ? `${et}${_e}` : "[redacted]",
						query: Ge ? `?utm_campaign=${Ge}` : "[redacted]",
						user_properties: {
							ga_client_id: (le = We) !== null && le !== void 0 ? le : void 0,
							ga_client_id_s: We ? `s${We}` : void 0,
							user_id: _t() ? Ct == null ? void 0 : Ct.id : void 0,
							ecid: Qe ? Ht(Qe) : void 0
						}
					}
				},
				Bt = () => ({
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
				Yt = (de, le) => {
					switch (de) {
						case At:
							return Kt(le);
						case Mt:
							return Bt();
						case Rt:
							return Gt(le);
						case Nt:
							return ft(le);
						case xt:
							return $t(le);
						case ht:
							return It(le);
						case bt:
							return Xe(le);
						case Oe.W1:
							return Ft(le);
						default:
							return
					}
				},
				Ut = de => (le, ve, _e) => {
					if (zt[ve]) {
						var we;
						const Be = Yt(ve, _e);
						window.dataLayer = window.dataLayer || [], Be && ((we = window.dataLayer) === null || we === void 0 || we.push(Be))
					}
					return de(le, ve, _e)
				};
			var Dt = t("../react/utils/cookiePreferences.ts");

			function w(de) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(we) {
						return Object.getOwnPropertyDescriptor(ve, we).enumerable
					})), _e.forEach(function(we) {
						S(de, we, ve[we])
					})
				}
				return de
			}

			function S(de, le, ve) {
				return le = me(le), le in de ? Object.defineProperty(de, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : de[le] = ve, de
			}

			function me(de) {
				var le = Ae(de, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function Ae(de, le) {
				if (typeof de != "object" || de === null) return de;
				var ve = de[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(de, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(de)
			}
			const $e = de => {
					r().init(w({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: vt() && !(0, i.gm)() && _t(),
						middlewares: [A, Ye, I, ut, Ut]
					}, de))
				},
				rt = () => {
					r().identify(w({}, (0, e.getAttribution)(), {
						locale: (0, s.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, m.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				vt = () => !0,
				Pt = () => {
					(0, Dt.kT)("sparrow_id")
				},
				_t = () => (0, Dt.Xm)()
		},
		"../utils/initStyles.ts": function(x, h, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = t("../react/app/providers/storeContainer.js");
			const i = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				s = c => {
					const l = [];
					for (let f in c.colors) {
						const n = c.colors[f];
						if (Array.isArray(n) && f !== "categorical")
							for (let o = 0; o < n.length; ++o) l.push(`--cf-${f}-${o}:${n[o]};`)
					}
					return l.join(`
`)
				},
				m = () => {
					const c = (0, e.Yc)(),
						l = `
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
      ${s(e.Rl)}
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
					let f = document.getElementById(i);
					f ? f.innerText = "" : (f = document.createElement("style"), f.id = i, u.appendChild(f)), f.appendChild(document.createTextNode(l)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(m), h.Z = m
		},
		"../utils/sentry/lastSentEventId.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				e: function() {
					return r
				}
			});
			const r = (() => {
				let i = "";
				return {
					setEventId: m => (!m || typeof m != "string" || (i = m), i),
					getEventId: () => i
				}
			})()
		},
		"../utils/zaraz.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Ro: function() {
					return o
				},
				bM: function() {
					return l
				},
				tg: function() {
					return c
				},
				yn: function() {
					return n
				}
			});

			function e(a) {
				for (var v = 1; v < arguments.length; v++) {
					var p = arguments[v] != null ? Object(arguments[v]) : {},
						d = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(p).filter(function(E) {
						return Object.getOwnPropertyDescriptor(p, E).enumerable
					})), d.forEach(function(E) {
						r(a, E, p[E])
					})
				}
				return a
			}

			function r(a, v, p) {
				return v = i(v), v in a ? Object.defineProperty(a, v, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[v] = p, a
			}

			function i(a) {
				var v = u(a, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function u(a, v) {
				if (typeof a != "object" || a === null) return a;
				var p = a[Symbol.toPrimitive];
				if (p !== void 0) {
					var d = p.call(a, v || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(a)
			}
			const s = {
					track: (a, v) => null,
					set: (a, v) => console.log(`zaraz.set(${a}, ${v})`)
				},
				m = {
					track: (a, v) => {
						var p;
						(p = window.zaraz) === null || p === void 0 || p.track(a, e({}, v, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, v) => {
						var p;
						return (p = window.zaraz) === null || p === void 0 ? void 0 : p.set(a, v)
					}
				};
			let c;
			const l = () => {
					window.zaraz, c = m
				},
				f = ["email", "first_name", "last_name"],
				n = a => {
					f.forEach(v => {
						var p;
						(p = c) === null || p === void 0 || p.set(v, a[v])
					})
				},
				o = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(x, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				u = t.n(i),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(m),
				l = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				f = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-icon/es/index.js"),
				o = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				a = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-forms/es/index.js"),
				v = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				p = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				d = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				E = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				T = t("../../../common/component/component-filter-bar/src/constants.js"),
				y = t("../../../common/component/component-filter-bar/src/utils.js");

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(K) {
					for (var M = 1; M < arguments.length; M++) {
						var j = arguments[M];
						for (var F in j) Object.prototype.hasOwnProperty.call(j, F) && (K[F] = j[F])
					}
					return K
				}, g.apply(this, arguments)
			}

			function O(K) {
				for (var M = 1; M < arguments.length; M++) {
					var j = arguments[M] != null ? Object(arguments[M]) : {},
						F = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols(j).filter(function(G) {
						return Object.getOwnPropertyDescriptor(j, G).enumerable
					})), F.forEach(function(G) {
						_(K, G, j[G])
					})
				}
				return K
			}

			function _(K, M, j) {
				return M = b(M), M in K ? Object.defineProperty(K, M, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[M] = j, K
			}

			function b(K) {
				var M = I(K, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function I(K, M) {
				if (typeof K != "object" || K === null) return K;
				var j = K[Symbol.toPrimitive];
				if (j !== void 0) {
					var F = j.call(K, M || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(K)
			}
			const A = 70,
				D = (0, s.SU)(({
					showOverflow: K
				}) => O({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, K ? {} : {
					maxHeight: A,
					overflow: "hidden"
				})),
				L = (0, s.SU)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				C = (0, s.SU)(({
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
				k = (0, s.SU)(() => ({
					mr: 1
				}), "span"),
				R = (0, s.SU)(({
					theme: K
				}) => ({
					color: K.colors.gray[4],
					mr: 1
				}), "span"),
				P = (0, s.SU)(() => ({
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
				z = (0, s.SU)(({
					buttonStyle: K
				}) => O({
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
				}, K), f.zx),
				te = (0, s.SU)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				ee = (0, s.SU)(({
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
				q = (0, s.SU)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				B = K => K.current ? [...K.current.children].reduce((M, j) => (j.offsetTop >= A && M++, M), 0) : 0;
			let U = 0;
			class X extends e.Component {
				constructor() {
					super();
					_(this, "overflowWrapper", (0, e.createRef)()), _(this, "hasOverflowed", M => {
						const j = B(this.overflowWrapper);
						M.scrollHeight > A && j >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (M.scrollHeight < A || j === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), _(this, "addNewFilter", () => {
						const {
							filterDefinitions: M
						} = this.props, j = (0, y.TE)(M), F = Object.keys(j)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: F,
								operator: (0, y.uv)(F, j),
								value: (0, y.TT)(F, j)
							}
						})
					}), _(this, "handleOpenFilterEdit", M => {
						this.setState({
							openFilter: M,
							filterChanges: O({}, this.props.filters[M])
						})
					}), _(this, "handleRemoveFilterClick", (M, j) => {
						M.stopPropagation(), this.removeFilter(j)
					}), _(this, "removeFilter", M => {
						const {
							handleFiltersChange: j
						} = this.props, F = [...this.props.filters], G = F[M];
						F.splice(M, 1), j(F), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: G.key,
							operator: G.operator,
							value: G.value
						})
					}), _(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), _(this, "handleFilterSubmit", M => {
						const {
							filterDefinitions: j
						} = this.props;
						M.preventDefault();
						const {
							filterChanges: F
						} = this.state, G = typeof j[F.key].parse == "function" ? Array.isArray(F.value) ? F.value.map(j[F.key].parse) : j[F.key].parse(F.value) : F.value;
						if (j[F.key].validate && (Array.isArray(G) ? !G.every(j[F.key].validate) : !j[F.key].validate(G))) return this.setState({
							invalid: !0
						});
						const J = [...this.props.filters],
							ne = O({}, F, {
								value: G
							}),
							Y = !J[this.state.openFilter];
						Y ? J.push(ne) : J[this.state.openFilter] = O({}, ne), this.props.handleFiltersChange(J, ne), (Y ? this.props.onAddFilter : this.props.onEditFilter)({
							field: ne.key,
							operator: ne.operator,
							value: ne.value
						}), this.closeOpenFilterChanges()
					}), _(this, "handlePendingKeyChange", ({
						value: M
					}) => {
						const {
							filterDefinitions: j
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: M,
								operator: (0, y.uv)(M, j),
								value: (0, y.TT)(M, j)
							}
						})
					}), _(this, "handlePendingOperatorChange", ({
						value: M
					}) => {
						let j = O({}, this.state.filterChanges, {
							operator: M
						});
						if ((0, y.dr)(M)) {
							var F, G;
							((F = this.state.filterChanges) === null || F === void 0 ? void 0 : F.value) && !Array.isArray((G = this.state.filterChanges) === null || G === void 0 ? void 0 : G.value) && (j.value = [this.state.filterChanges.value])
						} else {
							var J, ne, Y;
							((J = this.state.filterChanges) === null || J === void 0 ? void 0 : J.value) && Array.isArray((ne = this.state.filterChanges) === null || ne === void 0 ? void 0 : ne.value) && ((Y = this.state.filterChanges) === null || Y === void 0 ? void 0 : Y.value.length) > 0 && (j.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: j
						})
					}), _(this, "handlePendingValueChange", M => {
						this.setState({
							invalid: !1,
							filterChanges: O({}, this.state.filterChanges, {
								value: M
							})
						})
					}), _(this, "handleShowOverflow", () => {
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
						id: ++U
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(M) {
					M.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(M) {
					const {
						formatLabel: j,
						filterDefinitions: F
					} = this.props, {
						operator: G
					} = this.state.filterChanges, J = F[this.state.filterChanges.key], ne = this.state.filterChanges.value, Y = W => Array.isArray(W) ? W.map(re => re.value) : (W == null ? void 0 : W.value) || null;
					if (J.renderValueComponent) return J.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (J.type) {
						case T.k.custom: {
							var ue;
							return r().createElement(J.CustomComponent, g({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (ue = J == null ? void 0 : J.customProps) !== null && ue !== void 0 ? ue : {}))
						}
						case T.k.select:
							return (0, y.dr)(G) ? r().createElement(p.Z, {
								searchable: !0,
								multi: !0,
								creatable: !J.options,
								value: typeof ne.split == "function" ? ne == null ? void 0 : ne.split(",") : Array.isArray(ne) ? ne : [],
								options: J.options ? J.options.map(W => ({
									value: W.value || W,
									label: W.label || j(this.state.filterChanges.key, W, M)
								})) : ne ? (Array.isArray(ne) ? ne : ne.split(",")).map(W => ({
									label: W,
									value: W
								})) : [],
								noOptionsMessage: () => null,
								placeholder: r().createElement(m.Trans, {
									id: J.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: J.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: W => {
									this.handlePendingValueChange(Y(W))
								},
								isValidNewOption: W => {
									const re = J.validate;
									return !re && W || W && re([W])
								},
								getNewOptionData: (W, re) => ({
									value: W,
									label: re
								})
							}) : r().createElement(a.hQ, {
								hideLabel: !0,
								value: ne,
								options: J.options.map(W => ({
									value: W,
									label: j(this.state.filterChanges.key, W, M)
								})),
								onChange: ({
									value: W
								}) => this.handlePendingValueChange(W)
							});
						case T.k.string:
						default:
							return (0, y.dr)(G) ? r().createElement(p.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof ne.split == "function" ? ne == null ? void 0 : ne.split(",") : Array.isArray(ne) ? ne : [],
								options: ne ? (Array.isArray(ne) ? ne : ne.split(",")).map(W => ({
									label: W,
									value: W
								})) : [],
								noOptionsMessage: () => null,
								placeholder: M.t("analytics.report.filters.labels.placeholder", {
									example: F[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: W => {
									this.handlePendingValueChange(Y(W))
								},
								isValidNewOption: W => {
									const re = J.validate;
									return !re && W || W && re([W])
								},
								getNewOptionData: (W, re) => ({
									value: W,
									label: re
								}),
								formatCreateLabel: W => M.t("filter_editor.value_create_label", {
									value: W
								})
							}) : r().createElement(m.I18n, null, W => r().createElement(l.I, {
								value: this.state.filterChanges.value,
								onChange: re => this.handlePendingValueChange(re.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: W.t("analytics.report.filters.labels.placeholder", {
									example: F[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: M,
						filterDefinitions: j,
						modalStyles: F,
						filterIconType: G,
						buttonStyle: J,
						secondaryActionComponent: ne
					} = this.props, Y = B(this.overflowWrapper), ue = `filterPanel${this.state.id}`, W = this.state.openFilter !== null;
					return r().createElement(m.I18n, null, re => r().createElement(v.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, r().createElement(q, null, r().createElement(v.ZC, {
						display: "flex",
						flexDirection: "row"
					}, r().createElement(z, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": W,
						"aria-controls": ue,
						inverted: !0,
						buttonStyle: J
					}, r().createElement(n.J, {
						type: G || "add",
						mr: 1,
						label: re.t("common.add", {
							_: "Add"
						})
					}), r().createElement(m.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), !!ne && r().createElement(v.ZC, null, ne)), this.props.filters.length > 0 && r().createElement(te, null, r().createElement(m.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), r().createElement(D, {
						innerRef: this.overflowWrapper,
						overflowLimit: A,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map(($, oe) => {
						const {
							key: ie,
							operator: Ee,
							value: se
						} = $, he = j[ie].ignoreLabelTranslation ? j[ie].label : re.t(j[ie].label), De = re.t(`analytics.report.filters.operators.${Ee}`), Me = Array.isArray(se) ? se.map(Se => M(ie, Se, re)).join(", ") : M(ie, se, re), Fe = `${he} ${De} ${Me}`;
						return r().createElement(L, {
							key: `${ie}-${Ee}-${se}`,
							title: Fe
						}, r().createElement(C, {
							onClick: () => this.handleOpenFilterEdit(oe)
						}, r().createElement(v.ZC, {
							display: "flex"
						}, r().createElement(k, null, he), r().createElement(R, null, De), r().createElement(P, null, Me), (0, y.oN)($, j) ? r().createElement(o.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : r().createElement(ee, {
							onClick: Se => this.handleRemoveFilterClick(Se, oe),
							"aria-label": "remove"
						}, r().createElement(n.J, {
							type: "remove"
						})))))
					})), W && r().createElement(E.Z, {
						id: ue,
						filterDefinitions: j,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, y.oN)(this.state.filterChanges, j),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: M,
						modalStyles: F
					}), this.state.hasOverflowed && r().createElement(d.Z, {
						count: Y,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			_(X, "propTypes", {
				filterDefinitions: u().shape({}),
				filters: u().arrayOf(u().shape({
					key: u().string,
					operator: u().string,
					value: u().string
				})),
				handleFiltersChange: u().func.isRequired,
				formatLabel: u().func.isRequired,
				onAddFilter: u().func,
				onEditFilter: u().func,
				onRemoveFilter: u().func,
				children: u().node,
				modalStyles: u().object,
				filterIconType: u().string,
				buttonStyle: u().object,
				secondaryActionComponent: u().node
			}), h.Z = X
		},
		"../../../common/component/component-filter-bar/src/index.js": function(x, h, t) {
			"use strict";
			t.d(h, {
				ME: function() {
					return r.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return i.k
				},
				oN: function() {
					return u.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				r = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				i = t("../../../common/component/component-filter-bar/src/constants.js"),
				u = t("../../../common/component/component-filter-bar/src/utils.js"),
				s = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				OZ: function() {
					return s
				},
				YB: function() {
					return u
				}
			});

			function e(c, l, f) {
				return l = r(l), l in c ? Object.defineProperty(c, l, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[l] = f, c
			}

			function r(c) {
				var l = i(c, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function i(c, l) {
				if (typeof c != "object" || c === null) return c;
				var f = c[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(c, l || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(c)
			}
			class u extends Error {
				constructor(l, f) {
					super(f);
					e(this, "translationKey", void 0), this.translationKey = l, this.name = "TranslatorError"
				}
			}
			class s extends u {
				constructor(l, f) {
					super(l, `Translation key not found: ${l}, locale: ${f}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var m = null
		},
		"../../../common/util/types/src/api/domain.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Aw: function() {
					return I
				},
				Ib: function() {
					return _
				},
				Ks: function() {
					return A
				},
				MS: function() {
					return b
				},
				PN: function() {
					return d
				},
				Pp: function() {
					return u
				},
				Q3: function() {
					return v
				},
				TS: function() {
					return p
				},
				W7: function() {
					return y
				},
				dN: function() {
					return D
				},
				eF: function() {
					return O
				},
				ex: function() {
					return L
				},
				qp: function() {
					return n
				},
				wR: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const r = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				i = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				u = e.eg.object({
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
				s = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				m = e.eg.object({
					registrant: u.optional,
					technical: u.optional,
					administrator: u.optional,
					billing: u.optional
				}),
				c = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: m.optional,
					years: e.eg.number
				}),
				l = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let f = function(C) {
				return C.ONBOARDING_INITIATED = "Onboarding Initiated", C.ONBOARDED = "Onboarded", C.PENDING_REGISTRY_LOCK = "Pending Registry Lock", C.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", C.REGISTRY_UNLOCKED = "Registry Unlocked", C.LOCKED = "Locked", C.FAILED_TO_LOCK = "Failed To Lock", C.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", C.UNLOCKED = "Unlocked", C.OFFBOARDED = "Offboarded", C
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
						status: e.eg.enum(f).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: l.optional,
					landing: e.eg.union([i, e.eg.boolean]).optional,
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
					transfer_conditions: s.optional,
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
				a = e.eg.object({
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
				p = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let d = function(C) {
				return C.PENDING = "pending", C.VERIFIED = "verified", C.REJECTED = "rejected", C.PENDING_DELETE = "pending_delete", C.DELETED = "deleted", C
			}({});
			const E = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(d),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				T = e.eg.object({
					designated_approvers: e.eg.array(E)
				});
			let y = function(C) {
				return C.PENDING = "pending", C.PENDING_UPDATE = "pending_update", C.ENABLED = "enabled", C.DISABLED = "disabled", C
			}({});
			const g = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(y)
				}),
				O = e.eg.intersection([g, T]),
				_ = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let b = function(C) {
				return C.UNLOCK_APPROVAL = "UnlockApprovalRequest", C.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", C.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", C.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", C
			}({});
			const I = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				A = e.eg.object({
					message: e.eg.string
				}),
				D = e.eg.object({
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
				L = e.eg.object({
					result: m
				})
		},
		"../../../common/util/types/src/api/phases/fields.tsx": function(x, h, t) {
			"use strict";
			t.d(h, {
				df: function() {
					return r
				},
				eX: function() {
					return i
				},
				fG: function() {
					return s
				},
				jI: function() {
					return u
				},
				qu: function() {
					return e
				},
				zc: function() {
					return m
				}
			});
			let e = function(c) {
					return c.Custom = "custom", c.Root = "root", c.Managed = "managed", c.Zone = "zone", c.RateLimit = "ratelimit", c
				}({}),
				r = function(c) {
					return c.Cache = "http_request_cache_settings", c.HttpCustomErrors = "http_custom_errors", c.HttpConfigSettings = "http_config_settings", c.HttpLogCustomFields = "http_log_custom_fields", c.HttpRateLimit = "http_ratelimit", c.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", c.HttpRequestFirewallCustom = "http_request_firewall_custom", c.HttpRequestFirewallManaged = "http_request_firewall_managed", c.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", c.HttpRequestLateTransform = "http_request_late_transform", c.HttpRequestMain = "http_request_main", c.HttpRequestOrigin = "http_request_origin", c.HttpRequestRedirect = "http_request_redirect", c.HttpRequestSanitize = "http_request_sanitize", c.HttpRequestSBFM = "http_request_sbfm", c.HttpRequestsSnippets = "http_request_snippets", c.HttpRequestTransform = "http_request_transform", c.HttpResponseCompression = "http_response_compression", c.HttpResponseFirewallManaged = "http_response_firewall_managed", c.HttpResponseTransform = "http_response_headers_transform", c.L4DDoS = "ddos_l4", c.L7DDoS = "ddos_l7", c.MagicIDS = "magic_transit_ids_managed", c.MagicManaged = "magic_transit_managed", c.MagicTransit = "magic_transit", c.MagicTransitRateLimit = "magic_transit_ratelimit", c
				}({}),
				i = function(c) {
					return c.Execute = "execute", c.All = "all", c.Block = "block", c.JSChallenge = "js_challenge", c.Challenge = "challenge", c.Allow = "allow", c.Bypass = "bypass", c.Log = "log", c.Rewrite = "rewrite", c.Score = "score", c.Skip = "skip", c.Managed_Challenge = "managed_challenge", c.DDoS_Dynamic = "ddos_dynamic", c.Select_Config = "select_config", c.Set_Config = "set_config", c.Reset = "reset", c.Redirect = "redirect", c.Cache = "set_cache_settings", c.WhiteList = "whitelist", c.Error = "serve_error", c
				}({}),
				u = function(c) {
					return c.ZONE_LOCKDOWN = "zoneLockdown", c.UA_BLOCK = "uaBlock", c.BIC = "bic", c.HOT = "hot", c.SECURITY_LEVEL = "securityLevel", c.RATE_LIMIT = "rateLimit", c.WAF = "waf", c
				}({}),
				s = function(c) {
					return c.DEFAULT = "default", c.MEDIUM = "medium", c.LOW = "low", c.EOFF = "eoff", c.HIGH = "high", c.VERY_HIGH = "very_high", c
				}({}),
				m = function(c) {
					return c.DEFAULT = "", c.XML = "text/xml", c.JSON = "application/json", c.TEXT = "text/plain", c.HTML = "text/html", c
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(x, h, t) {
			"use strict";
			t.d(h, {
				Yd: function() {
					return e
				},
				vE: function() {
					return r
				}
			});

			function e(i) {
				return Object.keys(i)
			}
			const r = (i, u) => {
				if (u !== void 0) throw new Error("Unexpected object: " + i);
				return u
			}
		},
		"../react/common/out.css": function(x, h, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[x.id, e, ""]
			]);
			var r, i, u = {
				hmr: !0
			};
			u.transform = r, u.insertInto = void 0;
			var s = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, u);
			e.locals && (x.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function(x, h, t) {
			h = x.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), h.push([x.id, `/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
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
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
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
    --color-stone-50: oklch(98.5% 0.001 106.423);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-xs: 20rem;
    --container-sm: 24rem;
    --container-md: 28rem;
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
    --tracking-wide: 0.025em;
    --tracking-widest: 0.1em;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
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
  .top-32 {
    top: calc(var(--spacing) * 32);
  }
  .top-64 {
    top: calc(var(--spacing) * 64);
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
  .m-4 {
    margin: calc(var(--spacing) * 4);
  }
  .m-auto {
    margin: auto;
  }
  .-mx-1 {
    margin-inline: calc(var(--spacing) * -1);
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
  .\\!mr-1 {
    margin-right: calc(var(--spacing) * 1) !important;
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
  .\\!mb-2 {
    margin-bottom: calc(var(--spacing) * 2) !important;
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
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
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
  .h-\\[100\\%\\] {
    height: 100%;
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
  .max-h-\\[calc\\(100vh-64px\\)\\] {
    max-height: calc(100vh - 64px);
  }
  .max-h-\\[calc\\(var\\(--footer-max-height\\)-150px\\)\\] {
    max-height: calc(var(--footer-max-height) - 150px);
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
  .w-24 {
    width: calc(var(--spacing) * 24);
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
  .min-w-40 {
    min-width: calc(var(--spacing) * 40);
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
  .cursor-col-resize {
    cursor: col-resize;
  }
  .cursor-default {
    cursor: default;
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
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
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
  .gap-10 {
    gap: calc(var(--spacing) * 10);
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
  .overscroll-contain {
    overscroll-behavior: contain;
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
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
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
  .rounded-b-lg {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
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
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
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
  .\\!border-border {
    border-color: var(--color-border) !important;
  }
  .\\!border-neutral-200 {
    border-color: var(--color-neutral-200) !important;
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
  .border-b-neutral-900 {
    border-bottom-color: var(--color-neutral-900);
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
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pb-4 {
    padding-bottom: calc(var(--spacing) * 4);
  }
  .pb-10 {
    padding-bottom: calc(var(--spacing) * 10);
  }
  .\\!pl-1 {
    padding-left: calc(var(--spacing) * 1) !important;
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
  .text-\\[0\\.85rem\\] {
    font-size: 0.85rem;
  }
  .text-\\[10px\\] {
    font-size: 10px;
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
  .\\!text-error {
    color: var(--text-color-error) !important;
  }
  .\\!text-inherit {
    color: inherit !important;
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
  .hover\\:text-red-500 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-red-500);
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
  .lg\\:max-w-\\[50vw\\] {
    @media (width >= 64rem) {
      max-width: 50vw;
    }
  }
  .lg\\:grid-cols-2 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
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
    &:where(.dark-mode, .dark-mode *) {
      :where(& > :not(:last-child)) {
        border-color: var(--color-border);
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
      --tw-content: "";
    }
  }
}
`, ""])
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(x, h, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function r(i) {
				if (!t.o(e, i)) return Promise.resolve().then(function() {
					var m = new Error("Cannot find module '" + i + "'");
					throw m.code = "MODULE_NOT_FOUND", m
				});
				var u = e[i],
					s = u[0];
				return t.e(u[1]).then(function() {
					return t.t(s, 1 | 16)
				})
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", x.exports = r
		}
	}
]);

//# debugId=8971d1e0-0727-5f59-aba8-c337050ccd31