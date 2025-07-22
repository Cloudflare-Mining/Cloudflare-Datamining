! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5766db98-00c8-5235-91d9-8adcdd120f95")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				J8: function() {
					return i
				},
				Jd: function() {
					return d
				},
				QY: function() {
					return p
				},
				Qw: function() {
					return l
				},
				ki: function() {
					return c
				},
				wz: function() {
					return w
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/utils/url.ts"),
				a = t("../../../../node_modules/query-string/query-string.js"),
				u = t.n(a),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m;
			const l = () => Object.keys(s.Z).reduce((E, f) => (f.indexOf("cf_beta.") === 0 && s.Z.get(f) === "true" && E.push(f.split(".").slice(1).join(".")), E), []),
				c = () => {
					var E, f, O;
					return ((E = window) === null || E === void 0 || (f = E.bootstrap) === null || f === void 0 || (O = f.data) === null || O === void 0 ? void 0 : O.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((m = window) === null || m === void 0 ? void 0 : m.location) && s.Z) {
				const E = u().parse(window.location.search);
				E.beta_on && s.Z.set(`cf_beta.${E.beta_on}`, !0), E.beta_off && s.Z.set(`cf_beta.${E.beta_off}`, !1)
			}
			const g = {},
				n = E => {
					var f, O, v;
					return Object.prototype.hasOwnProperty.call(g, E) ? g[E] : ((f = window) === null || f === void 0 || (O = f.bootstrap) === null || O === void 0 || (v = O.data) === null || v === void 0 ? void 0 : v.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(C => C === E) ? (g[E] = !0, !0) : (g[E] = !1, !1)
				},
				o = E => s.Z ? s.Z.get(`cf_beta.${E}`) === !0 : !1,
				i = E => o(E) || n(E),
				_ = () => !0,
				d = () => {
					var E, f, O;
					return ((E = window) === null || E === void 0 || (f = E.bootstrap) === null || f === void 0 || (O = f.data) === null || O === void 0 ? void 0 : O.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				p = E => {
					const f = (0, e.uF)(E),
						O = (f == null ? void 0 : f.roles) || [];
					return (0, r.qR)(location.pathname) && O.length === 1 && O.some(v => v === "Administrator Read Only")
				},
				h = () => {
					var E, f, O;
					return ((E = window) === null || E === void 0 || (f = E.location) === null || f === void 0 || (O = f.origin) === null || O === void 0 ? void 0 : O.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				w = () => h() === "fed"
		},
		"../functions/utils/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				b1: function() {
					return e
				}
			});
			const e = "CF_dash_version",
				r = "cf_fv_preview",
				a = "cf_pv",
				u = "current",
				s = "hash",
				m = "deploymentPreview",
				l = "fragmentPreview",
				c = o => o === u ? g() : n(),
				g = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				n = (o = 72) => {
					const i = 36e5;
					return new Date(Date.now() + o * i)
				}
		},
		"../functions/utils/preview-deploy-helpers.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				E9: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/zod/lib/index.mjs");

			function r(E) {
				for (var f = 1; f < arguments.length; f++) {
					var O = arguments[f] != null ? Object(arguments[f]) : {},
						v = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(O).filter(function(C) {
						return Object.getOwnPropertyDescriptor(O, C).enumerable
					})), v.forEach(function(C) {
						a(E, C, O[C])
					})
				}
				return E
			}

			function a(E, f, O) {
				return f = u(f), f in E ? Object.defineProperty(E, f, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[f] = O, E
			}

			function u(E) {
				var f = s(E, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function s(E, f) {
				if (typeof E != "object" || E === null) return E;
				var O = E[Symbol.toPrimitive];
				if (O !== void 0) {
					var v = O.call(E, f || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(E)
			}
			const m = e.z.string().regex(/^(((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))|canary)$/g),
				l = e.z.string().regex(/^[a-zA-Z0-9]{8}$/),
				c = e.z.string(),
				g = e.z.union([e.z.string().regex(/^[a-zA-Z0-9]{8}$/), e.z.literal("current")]),
				n = e.z.record(c, g),
				o = e.z.enum(["live", "previews", "canary"]),
				i = (E, f) => {
					const O = E.data.cookies[f],
						v = {
							[PREVIEW_VERSIONING_COOKIE]: m,
							[DEPLOYMENT_VERSION_COOKIE]: l
						};
					try {
						return v[f].parse(O)
					} catch {
						return null
					}
				},
				_ = E => {
					try {
						return decodeURIComponent(E).split(",").reduce((f, O) => {
							const v = O.split(":"),
								C = c.parse(v[0]),
								A = g.parse(v[1]);
							return r({}, f, {
								[C]: A
							})
						}, {})
					} catch {
						return {}
					}
				},
				d = E => {
					const f = E.data.cookies[FRAGMENT_VERSIONING_PREVIEW_COOKIE],
						O = _(f);
					try {
						return n.parse(O)
					} catch {
						return null
					}
				},
				p = E => {
					const f = m.parse(E),
						[O, ...v] = f.split("-"),
						C = v.join("-");
					return {
						projectType: O,
						deploymentId: C
					}
				},
				h = (E, f) => {
					if (!f) return "";
					try {
						var O;
						const {
							projectType: v,
							deploymentId: C
						} = p(f), A = {
							live: E.env.PAGES_WORKERS_LIVE_HOST,
							previews: E.env.PAGES_WORKERS_PREVIEW_HOST
						}, {
							hostname: D,
							pathname: M,
							search: j
						} = new URL(E.request.url), T = D == null || (O = D.split(".")) === null || O === void 0 ? void 0 : O[0];
						if (C && C !== T && o.safeParse(v).success) {
							const R = A[v];
							return `https://${C}.${R}${M}${j}`
						}
					} catch (v) {
						console.log(v)
					}
					return ""
				},
				w = (E, f) => {
					if (!f) return "";
					try {
						var O;
						const v = E.env.PAGES_WORKERS_LIVE_HOST,
							{
								hostname: C,
								pathname: A,
								search: D
							} = new URL(E.request.url),
							M = C == null || (O = C.split(".")) === null || O === void 0 ? void 0 : O[0],
							{
								deploymentSHA: j
							} = parsePagesDevUrl(E.env.CF_PAGES_URL),
							T = E.request.headers.get("sec-fetch-dest") === "document";
						if (f && f !== M && f !== j && !T) return `https://${f}.${v}${A}${D}`
					} catch (v) {
						console.log(v)
					}
					return ""
				}
		},
		"../init.ts": function(F, y, t) {
			"use strict";
			t.r(y);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				r = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				a = t("../libs/init/initGlobal.ts"),
				u = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				s = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function m($) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var oe = arguments[Z] != null ? Object(arguments[Z]) : {},
						ue = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(oe).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(oe, ye).enumerable
					})), ue.forEach(function(ye) {
						l($, ye, oe[ye])
					})
				}
				return $
			}

			function l($, Z, oe) {
				return Z = c(Z), Z in $ ? Object.defineProperty($, Z, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[Z] = oe, $
			}

			function c($) {
				var Z = g($, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function g($, Z) {
				if (typeof $ != "object" || $ === null) return $;
				var oe = $[Symbol.toPrimitive];
				if (oe !== void 0) {
					var ue = oe.call($, Z || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)($)
			}
			const n = $ => {
				const Z = $ && $.headers || {},
					oe = new Headers(Z);
				return oe.append("X-Cross-Site-Security", "dash"), m({}, $, {
					headers: oe
				})
			};
			(0, s.register)({
				request: ($, Z) => {
					try {
						return new URL($), $ === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", Z] : [$, Z]
					} catch {
						var oe, ue;
						return typeof $ == "object" && ((oe = $) === null || oe === void 0 || (ue = oe.url) === null || ue === void 0 ? void 0 : ue.startsWith("https://platform.dash.cloudflare.com/map-tiles/")) ? [$, Z] : [$, n(Z)]
					}
				}
			});
			var o = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				i = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				_ = t("../react/app/providers/storeContainer.js");
			let d = "";
			const p = 61;

			function h($) {
				const Z = $.substr(1);
				if (Z && d !== Z) {
					const oe = document.getElementById(Z);
					if (oe) {
						const ue = oe.getBoundingClientRect().top;
						if (ue > 0) {
							const ye = ue - p;
							document.documentElement.scrollTop = ye
						}
					}
				}
				d = Z
			}

			function w($) {
				$.listen(Z => h(Z.hash))
			}
			var E = t("../../../../node_modules/cookie/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				O = t("../functions/utils/constants.ts");
			const v = $ => {
					switch ($) {
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
				C = ($, Z = !1) => {
					var oe;
					const ue = v($),
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
    <h1 id="error-title">${ue.title}</h1>
    <p id="error-description">${ue.description}</p>
  </div>
  `,
						Se = Z ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${f.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(oe=window.build)===null||oe===void 0?void 0:oe.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return ye + Se
				},
				A = $ => {
					var Z;
					const oe = document.getElementById($);
					!oe || (Z = oe.parentNode) === null || Z === void 0 || Z.removeChild(oe)
				};

			function D() {
				const $ = document.getElementById("loading-state");
				$ == null || $.classList.add("hide"), $ == null || $.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(A)
				})
			}

			function M($) {
				var Z;
				const oe = document.getElementById("loading-state"),
					ue = !!((Z = E.parse(document.cookie)) === null || Z === void 0 ? void 0 : Z[O.b1]);
				!oe || (oe.innerHTML = C($ == null ? void 0 : $.code, ue))
			}
			var j = t("../utils/initStyles.ts"),
				T = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				R = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				x = t("../react/common/selectors/languagePreferenceSelector.ts"),
				P = t("../flags.ts"),
				V = t("../utils/getDashVersion.ts");
			const ee = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				q = !0,
				re = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				W = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var z = t("../utils/sentry/lastSentEventId.ts"),
				X = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				B = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const I = $ => {
				const Z = async oe => {
					var ue, ye;
					const Se = {
						envelope: oe.body,
						url: $.url,
						isPreviewDeploy: (ue = window) === null || ue === void 0 || (ye = ue.build) === null || ye === void 0 ? void 0 : ye.isPreviewDeploy,
						release: (0, V.t)()
					};
					try {
						const Le = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(Se)
						});
						return {
							statusCode: Le.status,
							headers: {
								"x-sentry-rate-limits": Le.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": Le.headers.get("Retry-After")
							}
						}
					} catch (Le) {
						return console.log(Le), (0, B.$2)(Le)
					}
				};
				return X.q($, Z)
			};
			var L = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				U = t("../../../../node_modules/history/esm/history.js"),
				te = (0, U.lX)(),
				ie = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				N = t("../react/utils/url.ts");
			const K = (0, ie.Rf)();
			let k;

			function H($) {
				return ae($, "react-router-v5")
			}

			function ae($, Z) {
				return (oe, ue = !0, ye = !0) => {
					ue && K && K.location && (k = oe({
						name: (0, N.Fl)(K.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": Z
						}
					})), ye && $.listen && $.listen((Se, Le) => {
						if (Le && (Le === "PUSH" || Le === "POP")) {
							k && k.finish();
							const tt = {
								"routing.instrumentation": Z
							};
							k = oe({
								name: (0, N.Fl)(Se.pathname),
								op: "navigation",
								tags: tt
							})
						}
					})
				}
			}
			var de = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				Ee = t.n(de),
				me = t("../../../common/intl/intl-core/src/errors.ts"),
				ne = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				he = t("../react/common/middleware/sparrow/errors.ts");

			function De($, Z, oe) {
				return Z = Pe(Z), Z in $ ? Object.defineProperty($, Z, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[Z] = oe, $
			}

			function Pe($) {
				var Z = Be($, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function Be($, Z) {
				if (typeof $ != "object" || $ === null) return $;
				var oe = $[Symbol.toPrimitive];
				if (oe !== void 0) {
					var ue = oe.call($, Z || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)($)
			}
			class ke {
				constructor() {
					De(this, "name", ke.id)
				}
				setupOnce() {
					t.g.console && (0, ne.hl)(t.g.console, "error", Z => (...oe) => {
						const ue = oe.find(ye => ye instanceof Error);
						if (ee && ue) {
							let ye, Se = !0;
							if (ue instanceof he.ez) {
								const Le = ue instanceof he.oV ? ue.invalidProperties : void 0;
								ye = {
									tags: {
										"sparrow.eventName": ue.eventName
									},
									extra: {
										sparrow: {
											eventName: ue.eventName,
											invalidProperties: Le
										}
									},
									fingerprint: [ue.name ? ue.name : "SparrowValidationError"]
								}, Se = !1
							} else if (ue instanceof de.SparrowIdCookieError) ye = {
								extra: {
									sparrowIdCookie: ue.cookie
								},
								fingerprint: [ue.name ? ue.name : "SparrowIdCookieError"]
							};
							else if (ue.name === "ChunkLoadError") {
								ye = {
									fingerprint: [ue.name]
								};
								try {
									ye.tags = {
										chunkId: ue.message.split(" ")[2],
										chunkUrl: ue.request
									}
								} catch {}
							} else ue instanceof me.YB && (ye = {
								fingerprint: ["TranslatorError", ue.translationKey]
							});
							Se && o.Tb(ue, ye)
						}
						typeof Z == "function" && Z.apply(t.g.console, oe)
					})
				}
			}
			De(ke, "id", "ConsoleErrorIntegration");
			var Ye = null,
				ze = t("../react/common/utils/getEnvironment.ts");
			const nt = () => {
					if (ee && q) {
						var $, Z, oe, ue, ye, Se, Le, tt, lt, Ne;
						const mt = (0, ze.Z)();
						let Dt = "production";
						(($ = window) === null || $ === void 0 || (Z = $.build) === null || Z === void 0 ? void 0 : Z.isPreviewDeploy) && (Dt += "-preview"), mt === "canary" && (Dt = "canary"), R.S({
							dsn: ee,
							release: (0, V.t)(),
							environment: Dt,
							ignoreErrors: W,
							allowUrls: re,
							autoSessionTracking: !1,
							integrations: _t => [..._t.filter(Jt => Jt.name !== "GlobalHandlers" && Jt.name !== "TryCatch"), new ke, new L.jK.BrowserTracing({
								routingInstrumentation: H(te)
							})],
							tracesSampleRate: 0,
							transport: I,
							beforeSend: _t => (z.e.setEventId(_t.event_id), _t)
						});
						const Nt = (0, _.bh)().getState();
						o.rJ({
							LOCAL_STORAGE_FLAGS: (0, P.Qw)(),
							USER_BETA_FLAGS: (0, P.ki)(),
							meta: {
								connection: {
									type: (oe = window) === null || oe === void 0 || (ue = oe.navigator) === null || ue === void 0 || (ye = ue.connection) === null || ye === void 0 ? void 0 : ye.effectiveType,
									bandwidth: (Se = window) === null || Se === void 0 || (Le = Se.navigator) === null || Le === void 0 || (tt = Le.connection) === null || tt === void 0 ? void 0 : tt.downlink
								},
								languagePreference: (0, x.r)(Nt),
								isPreviewDeploy: (lt = window) === null || lt === void 0 || (Ne = lt.build) === null || Ne === void 0 ? void 0 : Ne.isPreviewDeploy
							},
							utilGates: (0, T.T2)(Nt)
						}), window.addEventListener("unhandledrejection", function(_t) {})
					}
				},
				We = $ => {
					$ ? o.av({
						id: $
					}) : o.av(null)
				};
			var G = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Ue = () => {
					let $;
					try {
						$ = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), $ = window.location.search
					}
					if (!$.includes("remote[")) return;
					const Z = new URLSearchParams($),
						oe = {};
					for (let [ue, ye] of Z) ue.includes("remote") && (oe[ue.replace(/remote\[|\]/g, "")] = ye);
					G.Z.set("mfe-remotes", JSON.stringify(oe))
				},
				xe = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				ot = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const dt = "ANON_USER_ID";

			function gt() {
				var $, Z, oe, ue;
				let ye = ($ = t.g) === null || $ === void 0 || (Z = $.bootstrap) === null || Z === void 0 || (oe = Z.data) === null || oe === void 0 || (ue = oe.user) === null || ue === void 0 ? void 0 : ue.id;
				if (!ye) {
					let Se = G.Z.get(dt);
					if (!Se) {
						let Le = (0, ot.Z)();
						G.Z.set(dt, Le), Se = Le
					}
					return Se
				}
				return ye
			}
			async function Ae() {
				const $ = (0, _.bh)();
				$.dispatch((0, xe.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await $.dispatch((0, T.UL)({
					userId: gt()
				}))
			}
			class at extends Error {
				constructor(Z, oe) {
					super(oe);
					this.name = `${Z} ${oe}`
				}
			}
			const Q = () => {
					document.cookie.split(";").forEach(Z => {
						const [oe] = Z.trim().split("=");
						document.cookie = `${oe}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				se = async () => {
					let $ = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!$.ok) throw $.headers.get("content-type") === "text/html" && (await $.text()).toLowerCase().includes("cookie too large") && (o.$e(function(ye) {
						ye.setTag("init", "cookieTooLarge"), o.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), Q(), window.location.reload()), new at("Bootstrap API Failure", $ == null ? void 0 : $.status);
					return (await $.json()).result.data
				};
			var fe = t("webpack/sharing/consume/default/react/react"),
				Te = t.n(fe),
				je = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Ke = t("webpack/sharing/consume/default/react-dom/react-dom"),
				Ve = t("webpack/sharing/consume/default/react-redux/react-redux"),
				ht = t("../../../../node_modules/swr/core/dist/index.mjs"),
				bt = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				ft = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				xt = t("../react/shims/focus-visible.js"),
				Ze = t("../react/app/components/DeepLink/index.ts"),
				Et = t("../../../../node_modules/prop-types/index.js"),
				ct = t.n(Et),
				rt = t("../react/utils/translator.tsx"),
				vt = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				Me = t("../../../dash/intl/intl-translations/src/index.ts"),
				Y = t("../../../../node_modules/query-string/query-string.js"),
				pe = t.n(Y),
				be = t("../react/common/actions/userActions.ts"),
				Ie = t("../react/common/selectors/userSelectors.ts"),
				Re = t("../react/utils/i18n.ts"),
				Qe = t("../react/utils/bootstrap.ts");

			function it($) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var oe = arguments[Z] != null ? Object(arguments[Z]) : {},
						ue = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(oe).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(oe, ye).enumerable
					})), ue.forEach(function(ye) {
						Bt($, ye, oe[ye])
					})
				}
				return $
			}

			function Bt($, Z, oe) {
				return Z = yt(Z), Z in $ ? Object.defineProperty($, Z, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[Z] = oe, $
			}

			function yt($) {
				var Z = Pt($, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function Pt($, Z) {
				if (typeof $ != "object" || $ === null) return $;
				var oe = $[Symbol.toPrimitive];
				if (oe !== void 0) {
					var ue = oe.call($, Z || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)($)
			}
			let Xe = pe().parse(location.search);
			const Ct = $ => {
					const Z = (0, Qe.$8)() ? [(0, Me.Fy)(Me.if.changes), (0, Me.Fy)(Me.if.common), (0, Me.Fy)(Me.if.navigation), (0, Me.Fy)(Me.if.overview), (0, Me.Fy)(Me.if.onboarding), (0, Me.Fy)(Me.if.invite), (0, Me.Fy)(Me.if.login), (0, Me.Fy)(Me.if.dns), (0, Me.Fy)(Me.n4.ssl_tls), (0, Me.Fy)(Me.if.message_inbox), (0, Me.Fy)(Me.if.welcome)] : [(0, Me.Fy)(Me.if.common), (0, Me.Fy)(Me.if.invite), (0, Me.Fy)(Me.if.login), (0, Me.Fy)(Me.if.onboarding)];
					Xe.lang ? Lt($) : G.Z.get(Re.th) && Ot($, (0, Re.Kd)());
					const oe = async ue => (await Promise.all(Z.map(Se => Se(ue)))).reduce((Se, Le) => it({}, Se, Le), {});
					return Te().createElement(vt.LocaleContext.Provider, {
						value: $.languagePreference
					}, Te().createElement(vt.I18nProvider, {
						translator: rt.Vb,
						locale: $.languagePreference
					}, Te().createElement(vt.I18nLoader, {
						loadPhrases: oe
					}, $.children)))
				},
				Lt = async $ => {
					let Z = Xe.lang.substring(0, Xe.lang.length - 2) + Xe.lang.substring(Xe.lang.length - 2, Xe.lang.length).toUpperCase();
					if (!(0, x.v)(Z)) {
						console.warn(`${Z} is not a supported locale.`), delete Xe.lang, $.history.replace({
							search: pe().stringify(Xe)
						});
						return
					}(0, Re.i_)(Z), delete Xe.lang, Ot($, Z), $.isAuthenticated || $.history.replace({
						search: pe().stringify(Xe)
					})
				}, Ot = async ($, Z) => {
					if ($.isAuthenticated) try {
						await $.setUserCommPreferences({
							"language-locale": Z
						}, {
							hideErrorAlert: !0
						}), G.Z.remove(Re.th), $.history.replace({
							search: pe().stringify(Xe)
						})
					} catch (oe) {
						G.Z.set(Re.th, !0), console.error(oe)
					} else G.Z.set(Re.th, !0)
				}, St = $ => {
					const Z = (0, Ie.PR)($);
					return {
						isAuthenticated: !!(Z && Z.id),
						languagePreference: (0, Re.Kd)() || (0, x.r)($)
					}
				}, kt = {
					setUserCommPreferences: be.V_
				};
			var Ut = (0, je.withRouter)((0, Ve.connect)(St, kt)(Ct));
			Ct.propTypes = {
				history: ct().object,
				languagePreference: ct().string.isRequired,
				children: ct().node.isRequired,
				isAuthenticated: ct().bool,
				setUserCommPreferences: ct().func.isRequired
			};
			var Tt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				jt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let wt;
			const $t = ({
				selectorPrefix: $ = "c_"
			} = {}) => (wt || (wt = (0, jt.Z)({
				dev: !1,
				selectorPrefix: $
			})), wt);
			var zt = t("../react/common/out.css"),
				It = t("../react/common/components/ModalManager.tsx"),
				Mt = t("../react/app/components/ErrorBoundary.tsx"),
				Ft = t("../react/common/actions/notificationsActions.ts");
			const Rt = (t.g.bootstrap || {}).data || {};
			class b extends Te().Component {
				componentDidMount() {
					Rt.messages && this.dispatchNotificationActions(Rt.messages)
				}
				dispatchNotificationActions(Z) {
					Z.forEach(oe => {
						const {
							type: ue,
							message: ye,
							persist: Se
						} = oe;
						["success", "info", "warn", "error"].includes(ue) && this.props.notifyAdd(ue, (0, rt.ZP)(ye), {
							persist: !!Se
						})
					})
				}
				render() {
					return null
				}
			}
			var ge = (0, je.withRouter)((0, Ve.connect)(null, {
				notifyAdd: Ft.add
			})(b));
			b.propTypes = {
				notifyAdd: ct().func.isRequired
			};
			var we = t("../react/app/redux/index.ts");

			function Fe() {
				var $;
				const Z = (0, we.p4)(Ie.PR),
					oe = (Z == null || ($ = Z.email) === null || $ === void 0 ? void 0 : $.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ue = (0, xe.Yc)();
				(0, fe.useEffect)(() => {
					ue({
						userType: oe
					})
				}, [oe, ue])
			}
			var ce = t("../react/common/selectors/entitlementsSelectors.ts"),
				le = t("../react/common/selectors/accountSelectors.ts");
			const ve = ["accountId", "is_ent"];

			function _e() {
				const $ = (0, xe.f7)(),
					Z = (0, je.useHistory)(),
					oe = (0, N.uW)(Z.location.pathname),
					ue = (0, xe.Yc)(),
					ye = (0, xe.O$)(),
					Se = (0, we.p4)(ce.u1),
					Le = !Se.isRequesting && !!Se.data,
					tt = (0, we.p4)(ce.p1),
					lt = (0, we.p4)(le.Xu),
					Ne = (0, we.p4)(le.uF),
					mt = !lt.isRequesting && !!lt.data;
				(0, fe.useEffect)(() => {
					if (oe && mt && Ne && Le && oe === Ne.account.id) {
						var Dt, Nt, _t, Zt;
						ue({
							accountId: Ne.account.id,
							is_ent: tt || (Ne == null || (Dt = Ne.account.meta) === null || Dt === void 0 ? void 0 : Dt.has_enterprise_zones),
							is_free_account: !tt && !(Ne == null || (Nt = Ne.account.meta) === null || Nt === void 0 ? void 0 : Nt.has_business_zones) && !(Ne == null || (_t = Ne.account.meta) === null || _t === void 0 ? void 0 : _t.has_pro_zones) && !(Ne == null || (Zt = Ne.account.meta) === null || Zt === void 0 ? void 0 : Zt.has_enterprise_zones)
						})
					} else(!oe || oe in $ && $.accountId !== oe) && ye(ve)
				}, [mt, Ne, ue, ye, Le, tt, oe, $])
			}
			var Oe = t("../react/common/selectors/zoneSelectors.ts");

			function $e() {
				const $ = (0, we.p4)(Oe.nA),
					Z = (0, xe.Yc)();
				(0, fe.useEffect)(() => {
					var oe;
					Z({
						zone_id: $ == null ? void 0 : $.id,
						zone_plan: $ == null || (oe = $.plan) === null || oe === void 0 ? void 0 : oe.legacy_id
					})
				}, [$, Z])
			}
			const He = () => (Fe(), _e(), $e(), null);
			var st = t("../react/app/components/Persistence/index.tsx"),
				Je = t("../node_modules/@cloudflare/elements/es/index.js"),
				qe = t("../react/app/components/LoadingSuspense.tsx");
			const ut = Te().lazy(() => Promise.all([t.e(16691), t.e(59881), t.e(82383), t.e(12174), t.e(1091), t.e(85415), t.e(30389), t.e(30471), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39560), t.e(39760), t.e(24345), t.e(40170), t.e(1049), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var pt = () => Te().createElement(qe.Z, null, Te().createElement(ut, null));
			const et = () => (fe.useEffect(() => D, []), null);
			var qt = t("../../../../node_modules/moment/moment.js"),
				Ht = t.n(qt);
			const en = $ => {
					switch ($) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return $.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return $.toLowerCase();
						default:
							return "en"
					}
				},
				tn = () => {
					const $ = (0, we.p4)(x.r);
					(0, fe.useEffect)(() => {
						const Z = en($);
						Z !== Ht().locale() && Ht().locale(Z), document.documentElement.lang = $
					}, [$])
				},
				nn = () => {
					(0, fe.useEffect)(() => {
						async function $() {
							var Z, oe, ue, ye;
							let Se;
							if (((Z = window) === null || Z === void 0 || (oe = Z.build) === null || oe === void 0 ? void 0 : oe.isPreviewDeploy) && ((ue = window) === null || ue === void 0 || (ye = ue.build) === null || ye === void 0 ? void 0 : ye.branch) !== "staging" && (Se = "cookie"), !!Se) try {
								const Le = document.head.querySelector("link[rel=icon]");
								Le && (Le.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${Se}.ico`)).default)
							} catch {}
						}
						$()
					}, [])
				};
			var rn = t("../react/common/constants/constants.ts");
			const on = () => {
				var $;
				const Z = (0, je.useLocation)(),
					[oe, ue] = (0, fe.useState)((($ = window) === null || $ === void 0 ? void 0 : $.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
				return (0, fe.useEffect)(() => {
					const ye = pe().parse(Z.search);
					if (ye.pt && G.Z.set(rn.sJ, ye.pt), ye == null ? void 0 : ye.devPanel) {
						var Se, Le;
						(Se = window) === null || Se === void 0 || (Le = Se.localStorage) === null || Le === void 0 || Le.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ue(!0)
					}
				}, [Z.search]), {
					devPanelEnabled: oe
				}
			};
			var an = t("../react/common/hooks/useGate.ts");
			const sn = ({
				isDev: $,
				adobeFeatureFlag: Z
			}) => {
				(0, fe.useEffect)(() => {
					(() => {
						if (!Z) return null;
						let ue;
						$ ? ue = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : ue = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const ye = document.createElement("script");
						ye.async = !0, ye.src = ue, document.head.insertBefore(ye, document.head.childNodes[0])
					})()
				}, [])
			};
			var cn = t("../react/utils/useDomainConnectRedirect.ts");
			const ln = Te().lazy(() => Promise.all([t.e(16691), t.e(59881), t.e(82383), t.e(12174), t.e(1091), t.e(85415), t.e(30389), t.e(30471), t.e(51436), t.e(34744), t.e(54844), t.e(18580), t.e(8924), t.e(77216), t.e(40517), t.e(39560), t.e(39760), t.e(24345), t.e(40170), t.e(1049), t.e(39278), t.e(10989), t.e(52215), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				un = Te().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(1091), t.e(85415), t.e(33310), t.e(39560), t.e(24345), t.e(88145), t.e(10989), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var dn = ({
					userIsAuthed: $
				}) => {
					tn(), nn(), (0, cn.y)();
					const {
						devPanelEnabled: Z
					} = on();
					return sn({
						isDev: !1,
						adobeFeatureFlag: !!(0, an.Z)("dx-enable-adobe-launch")
					}), Te().createElement(fe.Suspense, {
						fallback: Te().createElement(et, null)
					}, Te().createElement(je.Switch, null, !$ && !0 && Te().createElement(je.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Te().createElement(un, null)), Te().createElement(je.Route, {
						render: () => Te().createElement(Je.ZC, {
							minHeight: "100vh"
						}, Te().createElement(ln, null))
					})), Z && Te().createElement(pt, null))
				},
				Vt = t("../../../../node_modules/yup/es/index.js"),
				pn = t("../../../common/util/types/src/utils/index.ts");
			const Yt = {
				cfEmail: () => Vt.Z_().email((0, rt.ZP)("common.validation.email")).required((0, rt.ZP)("common.validation.email")),
				cfPassword: () => Vt.Z_().required((0, rt.ZP)("common.validation.required"))
			};
			(0, pn.Yd)(Yt).forEach($ => {
				Vt.kM(Vt.Z_, $, Yt[$])
			});
			const mn = $ => {
					if (!document.startViewTransition) {
						$();
						return
					}
					document.startViewTransition(() => $())
				},
				Qt = Te().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function gn() {
				const [$, Z] = (0, fe.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, fe.useEffect)(() => {
					const oe = window.matchMedia("(prefers-color-scheme: dark)"),
						ue = ye => {
							Z(ye.matches ? "dark" : "light")
						};
					return oe.addEventListener("change", ue), () => {
						oe.removeEventListener("change", ue)
					}
				}, []), $
			}
			const fn = () => {
					const $ = (0, Qe.$8)(),
						[Z, oe] = (0, fe.useState)($ ? Qt : Te().Fragment),
						ue = gn(),
						[ye, Se] = (0, fe.useState)((0, f.Yc)());
					(0, fe.useEffect)(() => {
						(0, f.fF)(() => Se((0, f.Yc)()))
					}, []);
					const Le = Ne => Ne === f.LF.ON || Ne === f.LF.SYSTEM && ue === "dark",
						tt = Ne => {
							document.cookie = `dark-mode=${Ne};Path=/;Max-Age=31536000`
						},
						lt = (Ne = f.LF.SYSTEM) => {
							const mt = Le(Ne);
							mn(() => {
								Se(mt), (0, f.C8)(Ne)
							}), tt(Ne)
						};
					return (0, fe.useEffect)(() => {
						oe($ ? Qt : Te().Fragment)
					}, [$]), (0, fe.useEffect)(() => {
						const Ne = () => {
							const mt = localStorage.getItem("dark-mode");
							lt(mt)
						};
						return window.addEventListener("storage", Ne), () => window.removeEventListener("storage", Ne)
					}, []), Te().createElement(fe.Suspense, {
						fallback: null
					}, Te().createElement(Ve.Provider, {
						store: (0, _.bh)()
					}, Te().createElement(je.Router, {
						history: te
					}, Te().createElement(Z, null, Te().createElement(Tt.Z, {
						renderer: $t()
					}, Te().createElement(Ut, null, Te().createElement(Mt.S, {
						sentryTag: "Root"
					}, Te().createElement(ht.J$, {
						value: {
							fetcher: Ne => fetch(Ne).then(mt => mt.json())
						}
					}, Te().createElement(He, null), Te().createElement(ge, null), Te().createElement(st.Z_, {
						onDarkModeChangeCb: lt
					}, Te().createElement(Ze.ZP, null, Te().createElement(dn, {
						userIsAuthed: $
					}))), Te().createElement(It.ZP, null), Te().createElement(bt.F0, null)))))))))
				},
				vn = () => {
					(0, Ke.render)(Te().createElement(fn, null), document.getElementById("react-app"))
				};
			var At = t("../utils/initSparrow.ts"),
				Wt = t("../utils/zaraz.ts");
			const _n = () => {
					const $ = (0, Ie.PR)((0, _.bh)().getState());
					En(), (0, At.Ug)(), (0, Wt.bM)(), ($ == null ? void 0 : $.id) && Ee().setUserId($ == null ? void 0 : $.id), (0, At.yV)(), !(0, At.Wi)() && (0, At.IM)(), $ ? (0, Wt.yn)($) : (0, Wt.Ro)()
				},
				En = () => {
					var $, Z;
					($ = window) === null || $ === void 0 || (Z = $.OneTrust) === null || Z === void 0 || Z.OnConsentChanged(() => {
						const oe = (0, Ie.PR)((0, _.bh)().getState());
						(0, At.Wi)() ? (Ee().setEnabled(!0), (oe == null ? void 0 : oe.id) ? (Ee().setUserId(oe.id), (0, Wt.yn)(oe)) : (0, Wt.Ro)(), (0, At.yV)()) : (Ee().setEnabled(!1), (0, At.IM)())
					})
				};

			function yn($) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var oe = arguments[Z] != null ? Object(arguments[Z]) : {},
						ue = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(oe).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(oe, ye).enumerable
					})), ue.forEach(function(ye) {
						hn($, ye, oe[ye])
					})
				}
				return $
			}

			function hn($, Z, oe) {
				return Z = bn(Z), Z in $ ? Object.defineProperty($, Z, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[Z] = oe, $
			}

			function bn($) {
				var Z = Cn($, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function Cn($, Z) {
				if (typeof $ != "object" || $ === null) return $;
				var oe = $[Symbol.toPrimitive];
				if (oe !== void 0) {
					var ue = oe.call($, Z || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)($)
			}
			const On = "init",
				Xt = ($, Z) => {
					o.$e(function(oe) {
						oe.setTag(On, Z), o.Tb($)
					}), M($)
				},
				Gt = async ($, Z) => {
					try {
						return await $(), !0
					} catch (oe) {
						return Xt(oe, Z), !1
					}
				};
			(async () => {
				try {
					var $, Z, oe;
					t.g.build = yn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "88c58e500e289f3d01ce40ced55200126e421905",
						dashVersion: "34761195",
						env: "production",
						builtAt: 1753199873124,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, V.p)()
					}), nt();
					const ue = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => w(te),
						tag: "hashScroll"
					}, {
						fn: j.Z,
						tag: "styles"
					}, {
						fn: Ue,
						tag: "mfePreviewData"
					}];
					for (const lt of ue)
						if (!await Gt(lt.fn, lt.tag)) return;
					let ye;
					if (!await Gt(async () => {
							ye = await se()
						}, "bootstrap")) return;
					const Se = (0, _.bh)(),
						Le = (($ = ye) === null || $ === void 0 ? void 0 : $.data) || {};
					Se.dispatch((0, i.mW)("user", Le == null ? void 0 : Le.user));
					const tt = (Z = ye) === null || Z === void 0 || (oe = Z.data) === null || oe === void 0 ? void 0 : oe.user;
					return t.g.bootstrap = ye, tt && tt.id && We(tt.id), !await Gt(Ae, "gates") || !(0, P.wz)() && !await Gt(_n, "tracking") ? void 0 : vn()
				} catch (ue) {
					Xt(ue, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/userSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/common/utils/isGuards.ts"),
				c = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				g = t.n(c);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(_) {
					for (var d = 1; d < arguments.length; d++) {
						var p = arguments[d];
						for (var h in p) Object.prototype.hasOwnProperty.call(p, h) && (_[h] = p[h])
					}
					return _
				}, n.apply(this, arguments)
			}
			const o = _ => {
				function d(p) {
					const h = (0, a.UM)(),
						w = (0, c.useHistory)(),
						E = (0, c.useLocation)(),
						f = (0, c.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						O = (0, a.p4)(u.PR) || null,
						v = (0, a.p4)(s.nA) || null,
						C = (0, a.p4)(m.uF),
						A = C ? C.account : null;
					if (!f) return null;
					const {
						accountId: D,
						app: M,
						tab: j
					} = f.params, T = f.params.zoneName && ((0, l.v5)(f.params.zoneName) || f.params.zoneName.indexOf(".") > 0) ? f.params.zoneName : void 0;
					return r().createElement(_, n({
						dispatch: h,
						history: w,
						location: E,
						match: f,
						user: O,
						membership: D ? C : null,
						account: D ? A : null,
						accountId: D || null,
						zone: T ? v : null,
						zoneName: T || null,
						app: T ? M : null,
						tab: T ? j : null
					}, p))
				}
				return d.displayName = `withEntities(${i(_)})`, d
			};

			function i(_) {
				return _.displayName || _.name || "Component"
			}
			y.Z = o
		},
		"../react/app/components/AccountHome/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$$: function() {
					return v
				},
				CK: function() {
					return M
				},
				KV: function() {
					return A
				},
				OX: function() {
					return D
				},
				QV: function() {
					return O
				},
				Yt: function() {
					return E
				},
				bA: function() {
					return f
				},
				fu: function() {
					return T
				},
				gX: function() {
					return p
				},
				hh: function() {
					return j
				},
				o1: function() {
					return C
				},
				tw: function() {
					return h
				},
				xD: function() {
					return w
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../react/utils/url.ts");
			const u = "projects table click",
				s = "click create application",
				m = "account home dev plat - product card click",
				l = "account home dev plat - empty state CTA click",
				c = "account home dev plat - view all projects click",
				g = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				o = "account home zero trust - analytics link click",
				i = "account home zero trust - product card click",
				_ = "account home zero trust - plan pill click",
				d = "account home zero trust - plan fallback link click",
				p = {
					SPARROW_PROJECTS_TABLE_CLICK: u,
					SPARROW_CREATE_PROJECT_CLICK: s,
					SPARROW_PRODUCT_CARD_CLICK: m,
					SPARROW_EMPTY_STATE_CTA_CLICK: l,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: c,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: g,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: o,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: i,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: _,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: d
				},
				h = R => {
					r().sendEvent(u, {
						component: R
					})
				},
				w = R => {
					r().sendEvent(u, {
						component: "menu",
						subcomponent: R
					})
				},
				E = () => {
					r().sendEvent(s, {
						category: "Projects Table"
					})
				},
				f = ({
					category: R,
					product: x
				}) => {
					r().sendEvent(m, {
						category: R,
						product: x
					})
				},
				O = () => {
					r().sendEvent(l)
				},
				v = () => {
					r().sendEvent(c)
				},
				C = R => {
					r().sendEvent(n, {
						category: R
					})
				},
				A = ({
					category: R,
					href: x
				}) => {
					r().sendEvent(g, {
						category: R,
						href: (0, a.cm)(x)
					})
				},
				D = ({
					category: R,
					href: x
				}) => {
					r().sendEvent(o, {
						category: R,
						href: (0, a.cm)(x)
					})
				},
				M = ({
					category: R,
					product: x,
					href: P
				}) => {
					r().sendEvent(i, {
						category: R,
						product: x,
						href: (0, a.cm)(P)
					})
				},
				j = ({
					plan: R
				}) => {
					r().sendEvent(_, {
						plan: R
					})
				},
				T = () => {
					r().sendEvent(d)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return c
				},
				Bh: function() {
					return m
				},
				CM: function() {
					return g
				},
				MF: function() {
					return r
				},
				TS: function() {
					return i
				},
				WF: function() {
					return s
				},
				Wz: function() {
					return n
				},
				bk: function() {
					return l
				},
				fj: function() {
					return o
				},
				r4: function() {
					return u
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
				a = (0, e.R)(r.ADD_SITE, _ => ({
					payload: _
				})),
				u = (0, e.R)(r.RESOLVING_START),
				s = (0, e.R)(r.RESOLVING_COMPLETE),
				m = (0, e.R)(r.SELECT_ZONE, _ => ({
					payload: _
				})),
				l = (0, e.R)(r.SELECT_ACCOUNT, _ => ({
					payload: _
				})),
				c = (0, e.R)(r.SELECT_PAGES_PROJECT, _ => ({
					payload: _
				})),
				g = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, _ => ({
					payload: _
				})),
				n = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, _ => ({
					accountIds: _
				})),
				o = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				i = (0, e.R)(r.SELECT_WORKER, _ => ({
					payload: _
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BV: function() {
					return e
				},
				Dz: function() {
					return g
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
					return a
				},
				s$: function() {
					return l
				}
			});
			const e = "to",
				r = "_gl",
				a = "freeTrial",
				u = "deepLinkQueryParams",
				s = "resolvedDeepLinkQueryParams",
				m = "add",
				l = "multiSkuProducts",
				c = "/:account/billing/checkout",
				g = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return j
				},
				U: function() {
					return M.U
				},
				dd: function() {
					return M.dd
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
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../react/app/components/DeepLink/utils.ts"),
				s = t("../react/utils/bootstrap.ts"),
				m = t("../react/app/components/DeepLink/actions.ts"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(l);

			function g(T) {
				for (var R = 1; R < arguments.length; R++) {
					var x = arguments[R] != null ? Object(arguments[R]) : {},
						P = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(x).filter(function(V) {
						return Object.getOwnPropertyDescriptor(x, V).enumerable
					})), P.forEach(function(V) {
						n(T, V, x[V])
					})
				}
				return T
			}

			function n(T, R, x) {
				return R = o(R), R in T ? Object.defineProperty(T, R, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[R] = x, T
			}

			function o(T) {
				var R = i(T, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function i(T, R) {
				if (typeof T != "object" || T === null) return T;
				var x = T[Symbol.toPrimitive];
				if (x !== void 0) {
					var P = x.call(T, R || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(T)
			}
			class _ {
				constructor(R, x) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", P => {
						this.resolvers.set(P, {
							name: P,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", P => {
						const V = this.resolvers.get(P);
						V && (V.endTime = Date.now(), this.resolvers.set(P, V))
					}), n(this, "resolverCancel", P => {
						this.resolverDone(P), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", P => {
						const V = "NO_ACTION",
							ee = {
								actionType: V,
								startTime: 0
							};
						return {
							start: (q = V) => {
								const re = this.resolvers.get(P);
								ee.actionType = q, ee.startTime = Date.now(), re && re.userActions.push(ee)
							},
							finish: (q = V) => {
								ee.actionType = q, ee.endTime = Date.now()
							},
							cancel: (q = V) => {
								ee.actionType = q, ee.endTime = Date.now(), this.resolverCancel(P)
							}
						}
					}), this.deepLink = R, this.legacyDeepLink = x, this.resolvers = new Map
				}
				track(R) {
					try {
						if (this._done) return;
						this._done = !0;
						const x = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: d(this.startTime, this.endTime),
								totalCpuTime: d(this.startTime, this.endTime)
							},
							P = this.resolvers.size === 0 ? x : Array.from(this.resolvers.values()).reduce((V, ee) => {
								const q = d(ee.startTime, ee.endTime),
									re = ee.userActions.reduce((z, X) => {
										const B = d(X.startTime, X.endTime);
										return {
											totalTime: z.totalTime + B,
											actions: z.actions.set(X.actionType, B)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									W = q - re.totalTime;
								return g({}, V, {
									totalTime: V.totalTime + q,
									totalUserActionsTime: V.totalUserActionsTime + re.totalTime,
									totalCpuTime: V.totalCpuTime + W,
									[`${ee.name}ResolverTotalTime`]: q,
									[`${ee.name}ResolverTotalCpuTime`]: W,
									[`${ee.name}ResolverTotalUserActionsTime`]: re.totalTime
								}, Array.from(re.actions.keys()).reduce((z, X) => g({}, z, {
									[`${ee.name}Resolver/${X}`]: re.actions.get(X)
								}), {}))
							}, g({}, x, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						c().sendEvent(R, P)
					} catch (x) {
						console.error(x)
					}
				}
			}

			function d(T = Date.now(), R = Date.now()) {
				return (R - T) / 1e3
			}
			var p = t("../react/app/components/DeepLink/constants.ts"),
				h = t("../react/common/hooks/useCachedState.ts"),
				w = t("../react/common/hooks/usePrevious.ts");

			function E(T) {
				for (var R = 1; R < arguments.length; R++) {
					var x = arguments[R] != null ? Object(arguments[R]) : {},
						P = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(x).filter(function(V) {
						return Object.getOwnPropertyDescriptor(x, V).enumerable
					})), P.forEach(function(V) {
						f(T, V, x[V])
					})
				}
				return T
			}

			function f(T, R, x) {
				return R = O(R), R in T ? Object.defineProperty(T, R, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[R] = x, T
			}

			function O(T) {
				var R = v(T, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function v(T, R) {
				if (typeof T != "object" || T === null) return T;
				var x = T[Symbol.toPrimitive];
				if (x !== void 0) {
					var P = x.call(T, R || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(T)
			}
			var A = ({
					children: T
				}) => {
					const R = (0, r.TZ)(),
						x = (0, a.useHistory)(),
						P = (0, w.Z)(x.location.pathname),
						[V, ee] = (0, e.useState)(!0),
						[q, re] = (0, h.j)(void 0, {
							key: p.Fj
						}),
						[W, z] = (0, h.j)(void 0, {
							key: p.O5
						}),
						[X, B] = (0, h.j)(void 0, {
							key: p.s$
						}),
						I = (0, s.$8)();
					let L = new URLSearchParams(x.location.search);
					const U = (0, u.mL)(x.location.pathname, L);
					let J = null,
						te = null;
					if (L.has(p.Tc) && L.delete(p.Tc), L.get(p.BV)) J = L.get(p.BV), x.location.hash && (te = x.location.hash);
					else if (q) {
						const N = new URLSearchParams(q);
						N.get(p.BV) && (J = N.get(p.BV), L = N)
					} else U && (L.set(p.BV, U), J = U);
					if (J && p._h.test(J)) {
						const N = L.getAll(p.Kt),
							K = JSON.stringify(N);
						N.length && K !== X && B(K), L.has(p.Tc) && L.delete(p.Tc), L.delete(p.Kt)
					}!I && q === void 0 && J && re(L.toString());
					const ie = async () => {
						try {
							if ((0, u.I3)(J) && I) {
								q && re(void 0), R.dispatch((0, m.r4)()), ee(!0), J && J !== W && z(J);
								const N = await (0, u.py)(J, ee, R, x, P, new _(J, U ? `${x.location.pathname}${x.location.search}` : void 0));
								L.delete(p.BV);
								const K = L.toString();
								x.replace(E({}, x.location, {
									pathname: N,
									search: K
								}, te ? {
									hash: te
								} : {})), R.dispatch((0, m.WF)())
							}
						} catch (N) {
							R.dispatch((0, m.WF)()), console.error(N)
						} finally {
							ee(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ie()
					}, [x.location.pathname, x.location.search]), (V || (0, u.I3)(J)) && I ? null : T
				},
				D = t("../react/app/components/DeepLink/reducer.ts"),
				M = t("../react/app/components/DeepLink/selectors.ts"),
				j = A
		},
		"../react/app/components/DeepLink/reducer.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return u
				},
				r: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				a = t("../react/app/components/DeepLink/actions.ts");
			const u = null,
				s = r().from({
					lastAction: u,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function m(l = s, c) {
				if (c.type === a.MF.RESOLVING_COMPLETE) return s;
				if (c.type === a.MF.RESOLVING_START) return l.set("isResolving", !0);
				if (l.isResolving) {
					if (c.type === a.MF.RESOLVING_COMPLETE) return l.set("isResolving", !1);
					if (c.type === a.MF.SET_FILTERED_ACCOUNT_IDS) return l.set("filteredAccountIds", c.accountIds);
					if (c.type === a.MF.DELETE_FILTERED_ACCOUNT_IDS) return l.set("filteredAccountIds", void 0);
					{
						let g = l;
						try {
							g = l.set("lastAction", c)
						} catch {
							g = l.set("lastAction", {
								type: c.type
							})
						}
						return g
					}
				} else return l
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(F, y, t) {
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
			const e = u => u.deepLink.lastAction,
				r = u => u.deepLink.isResolving,
				a = u => u.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				I3: function() {
					return g
				},
				X1: function() {
					return l
				},
				mL: function() {
					return d
				},
				py: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../react/app/components/DeepLink/reducer.ts"),
				a = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/app/components/DeepLink/constants.ts"),
				s = t("../react/common/validators/index.js"),
				m = t("../react/common/utils/isGuards.ts");
			const l = p => (0, s.Lb)(p) && (p.split(".").length > 1 || (0, m.v5)(p)),
				c = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				g = p => typeof p == "string" && p.startsWith("/"),
				n = (p, h) => w => new Promise((E, f) => {
					h.start();
					const O = p.subscribe(() => {
						const v = (0, a.yI)(p.getState());
						v === r.E ? (h.cancel(), O(), f("DeepLink: waitForAction out of context.")) : w(v) && (h.finish(v.type), O(), E(v))
					})
				}),
				o = (p, h, w) => (E, f) => new Promise((O, v) => {
					w.start();
					const C = h.location.pathname;
					E = new URL(E, window.location.href).pathname, C !== E && (w.cancel(), v(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${E}", but on "${C}". You need to redirect to "${E}", and unblockRouter in your Resolver, before you use this function.`));
					const A = p.subscribe(() => {
						const D = (0, a.yI)(p.getState()),
							M = h.location.pathname,
							T = new URLSearchParams(h.location.search).get(u.BV);
						(M !== E || !!T) && (w.cancel(), A(), v(`DeepLink: waitForPageAction user navigated away from "${E}" to "${M}${T?h.location.search:""}"`)), D === r.E ? (w.cancel(), A(), v("DeepLink: waitForPageAction out of context.")) : f(D) && (w.finish(D.type), A(), O(D))
					})
				});

			function i(p) {
				const h = [],
					w = p.split("?")[0].split("/");
				for (let E of w) E.length !== 0 && (E.startsWith(":") ? h.push({
					value: E.substring(1),
					type: "dynamic"
				}) : h.push({
					value: E,
					type: "static"
				}));
				return h
			}
			async function _(p, h, w, E, f, O) {
				O.start();
				const v = i(p),
					A = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					D = {};
				let M = "";
				for (const [j, T] of v.entries())
					if (T.type === "static") M = [M, T.value].join("/");
					else if (T.type === "dynamic" && c.is(T.value) && T.value in A) {
					O.resolverStart(T.value);
					const R = await A[T.value]({
						deepLink: p,
						blockRouter: () => h(!0),
						unblockRouter: () => h(!1),
						routerHistory: E,
						resolvedValues: D,
						store: w,
						referringRoute: f,
						uri: {
							currentPartIdx: j,
							parts: v
						},
						waitForAction: n(w, O.createUserActionTracker(T.value)),
						waitForPageAction: o(w, E, O.createUserActionTracker(T.value))
					});
					O.resolverDone(T.value), M = [M, R].join("/"), D[T.value] = R
				} else throw O.cancel(), new Error(`DeepLink: Resolver with name '${T.value}' is not supported.`);
				return O.done(), M
			}

			function d(p, h) {
				const w = ":account",
					E = ":zone",
					f = h.get("zone");
				if (f) return h.delete("zone"), `/${w}/${E}/${f}`;
				const O = h.get("account");
				if (O) return h.delete("account"), `/${w}/${O}`;
				if (p === "/overview") return `/${w}/${E}`;
				const v = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const C of v) {
					const A = C.length;
					if (p.startsWith(C) && (p.length === A || p[A] === "/")) return `/${w}/${E}${p}`
				}
				switch (p) {
					case "/account/billing":
						return `/${w}/billing`;
					case "/account/subscriptions":
						return `/${w}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${w}/dns-firewall`;
					case "/account/audit-log":
						return `/${w}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				u = t("../react/app/components/SomethingWrong.jsx"),
				s = t("../utils/sentry/lastSentEventId.ts"),
				m = t("../react/utils/zaraz.ts"),
				l = t("../react/utils/url.ts"),
				c = t("../node_modules/@cloudflare/elements/es/index.js"),
				g = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(o),
				_ = t("../react/common/components/Page.tsx"),
				d = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function p() {
				return (0, e.useEffect)(() => {
					i().sendEvent("new page available refresh cta")
				}, []), r().createElement(_.Z, {
					type: "narrow"
				}, r().createElement(c.ZC, {
					textAlign: "center"
				}, r().createElement(c.H1, {
					fontSize: 5,
					fontWeight: 400
				}, r().createElement(n.Trans, {
					id: "error.new_page_version_available.title"
				})), r().createElement(n.Trans, {
					id: "error.new_page_version_available.description"
				}), r().createElement(c.ZC, null, r().createElement(c.Ei, {
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
			const h = ({
				sentryTag: w,
				children: E,
				fallbackComponent: f
			}) => r().createElement(a.SV, {
				beforeCapture: O => {
					m.tg === null || m.tg === void 0 || m.tg.track("page-error", {
						page: (0, l.Fl)(window.location.pathname)
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
					eventId: v
				}) => {
					var C;
					if (f) return f;
					const A = s.e.getEventId() || v;
					return (O == null || (C = O.message) === null || C === void 0 ? void 0 : C.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), r().createElement(p, null)) : r().createElement(u.Z, {
						type: "page",
						error: O,
						eventId: A,
						sentryTag: w
					})
				}
			}, E)
		},
		"../react/app/components/Footer.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return B
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(l),
				g = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				o = t("../react/utils/translator.tsx"),
				i = t("../../../../node_modules/moment/moment.js"),
				_ = t.n(i);
			const d = () => {
					const I = _()().format("YYYY"),
						L = U => {
							c().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: U
							})
						};
					return r().createElement(p, {
						marginTop: "auto"
					}, r().createElement(h, null, r().createElement(w, null, r().createElement(E, null, "\xA9 ", I, " Cloudflare, Inc."), r().createElement(E, null, r().createElement(f, null, r().createElement(O, {
						showOnDeskTop: !1
					}, r().createElement(v, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => L("Support")
					}, r().createElement(o.cC, {
						id: "common.support"
					}))), r().createElement(O, null, r().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => L("Privacy Policy")
					}, r().createElement(o.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(O, null, r().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => L("Terms of Use")
					}, r().createElement(o.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(O, null, r().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => L("Cookie Preferences")
					}, r().createElement(o.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(O, null, r().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => L("Trademark")
					}, r().createElement(o.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(f, null, r().createElement(O, null, r().createElement(v, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => L("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(o.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				p = (0, s.LM)(({
					theme: I,
					marginTop: L
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: L
				})),
				h = (0, s.LM)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				w = (0, s.LM)(({
					theme: I
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${I.space[3]}px`
					}
				})),
				E = (0, s.LM)(({
					theme: I
				}) => ({
					width: "100%",
					color: I.colors.white,
					fontSize: I.fontSizes[1],
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
				f = (0, s.LM)(({
					theme: I
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: I.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				O = (0, s.LM)(({
					showOnDeskTop: I = !0,
					theme: L
				}) => ({
					color: L.colors.white,
					fontSize: L.fontSizes[1],
					height: "20px",
					display: I ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: L.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: L.space[3],
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
				v = (0, s.SU)(({
					theme: I
				}) => ({
					textDecoration: "none",
					color: I.colors.white,
					"&:hover": {
						color: I.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var C = d,
				A = t("../react/pages/welcome/routes.ts"),
				D = t("../react/utils/cookiePreferences.ts"),
				M = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				T = () => {
					const [I, L] = (0, e.useState)(!1), U = (0, D.wV)(), J = () => {
						L(!0)
					}, te = () => {
						L(!1)
					}, ie = U && U === "US" ? (0, o.ZP)("footer.cpra_cta.privacy_choices") : (0, o.ZP)("footer.cpra_cta.cookie_preferences"), N = {
						background: "transparent",
						borderRadius: "none",
						color: I ? (0, m.Yc)() ? "#ee730a" : "#003681" : (0, m.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: I ? "underline" : "none",
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
						style: N,
						onMouseEnter: J,
						onMouseLeave: te
					}, r().createElement(u.Ei, {
						height: 15,
						src: M,
						mr: 2,
						alt: ie
					}), ie)
				};

			function R() {
				return R = Object.assign ? Object.assign.bind() : function(I) {
					for (var L = 1; L < arguments.length; L++) {
						var U = arguments[L];
						for (var J in U) Object.prototype.hasOwnProperty.call(U, J) && (I[J] = U[J])
					}
					return I
				}, R.apply(this, arguments)
			}

			function x(I, L) {
				if (I == null) return {};
				var U = P(I, L),
					J, te;
				if (Object.getOwnPropertySymbols) {
					var ie = Object.getOwnPropertySymbols(I);
					for (te = 0; te < ie.length; te++) J = ie[te], !(L.indexOf(J) >= 0) && (!Object.prototype.propertyIsEnumerable.call(I, J) || (U[J] = I[J]))
				}
				return U
			}

			function P(I, L) {
				if (I == null) return {};
				var U = {},
					J = Object.keys(I),
					te, ie;
				for (ie = 0; ie < J.length; ie++) te = J[ie], !(L.indexOf(te) >= 0) && (U[te] = I[te]);
				return U
			}
			const V = (0, s.SU)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,m.Yc)()?m.rS.colors.orange[6]:m.rS.colors.blue[4]}`
					}
				}), u.A),
				ee = (0, s.SU)(({
					theme: I
				}) => ({
					color: I.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, g.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: I.colors.gray[4]
					}
				}), u.A),
				q = I => {
					let {
						onClick: L
					} = I, U = x(I, ["onClick"]);
					return React.createElement(V, R({
						onClick: J => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: U.href
							}), L && L(J)
						}
					}, U))
				},
				re = I => {
					let {
						children: L,
						target: U,
						rel: J
					} = I, te = x(I, ["children", "target", "rel"]);
					return r().createElement(ee, R({
						target: U || "_blank",
						rel: J || "noopener noreferrer"
					}, te), L)
				},
				W = (0, s.SU)(({
					theme: I
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
							fontSize: I.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: I.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), u.Ul),
				z = (0, s.SU)(() => ({
					display: "flex",
					flexDirection: (0, g.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), u.ZC);
			var B = () => {
				const I = [A.d.root.pattern].some(U => (0, a.matchPath)(location.pathname, {
					path: U
				}));
				if ((0, n.PP)()) return r().createElement(C, null);
				if (I) return null;
				const L = new Date().getFullYear();
				return r().createElement(u.$_, {
					height: (0, g.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto",
					id: "site-footer"
				}, r().createElement(z, null, r().createElement(W, null, r().createElement(u.Li, null, r().createElement(re, {
					href: "https://support.cloudflare.com"
				}, (0, o.ZP)("common.support"))), r().createElement(u.Li, null, r().createElement(re, {
					href: "https://www.cloudflarestatus.com"
				}, r().createElement(u.Dr, {
					textTransform: "capitalize"
				}, (0, o.ZP)("footer.system_status")))), r().createElement(u.Li, null, r().createElement(re, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, o.ZP)("footer.careers"))), r().createElement(u.Li, null, r().createElement(re, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, o.ZP)("footer.tos_reduced"))), r().createElement(u.Li, null, r().createElement(re, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, o.ZP)("footer.security_issues"))), r().createElement(u.Li, null, r().createElement(re, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, o.ZP)("footer.privacy_policy"))), r().createElement(u.Li, null, r().createElement(T, null)), r().createElement(u.Li, null, r().createElement(u.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", L, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/components/ErrorStatus.tsx"),
				u = t("../react/utils/translator.tsx");
			const s = m => r().createElement(a.Z, m, (0, u.ZP)("error.forbidden"));
			y.Z = s
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return h
				},
				Z: function() {
					return ie
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../node_modules/@cloudflare/component-button/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = t.n(c),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				o = t("../react/common/components/AccessControl/index.js"),
				i = t("../react/common/components/ButtonWithDropdown.tsx"),
				_ = t("../react/common/components/Dropdown/index.tsx"),
				d = t("../react/utils/translator.tsx"),
				p = t("../react/common/hooks/useGate.ts");
			const h = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				w = () => {
					const N = (0, p.Z)("super-add-button-copy-change"),
						K = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: h.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: h.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: h.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: h.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: h.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: h.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch (N) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: h.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...K];
						case "existing-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
								},
								trackingEvent: h.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...K];
						case "existing-site":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site"
								},
								trackingEvent: h.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...K];
						case "your-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
								},
								trackingEvent: h.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...K];
						case "your-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
								},
								trackingEvent: h.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...K];
						default:
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title"
								},
								trackingEvent: h.EXISTING_DOMAIN,
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
								trackingEvent: h.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/registrar/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: h.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: h.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: h.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: h.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: h.ACCOUNT_MEMBERS,
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
					trackingEvent: h.EXISTING_DOMAIN,
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
					trackingEvent: h.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/registrar/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: h.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: h.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: h.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: h.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: h.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var f = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function O(N) {
				for (var K = 1; K < arguments.length; K++) {
					var k = arguments[K] != null ? Object(arguments[K]) : {},
						H = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(k).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(k, ae).enumerable
					})), H.forEach(function(ae) {
						v(N, ae, k[ae])
					})
				}
				return N
			}

			function v(N, K, k) {
				return K = C(K), K in N ? Object.defineProperty(N, K, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[K] = k, N
			}

			function C(N) {
				var K = A(N, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function A(N, K) {
				if (typeof N != "object" || N === null) return N;
				var k = N[Symbol.toPrimitive];
				if (k !== void 0) {
					var H = k.call(N, K || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(N)
			}

			function D() {
				return D = Object.assign ? Object.assign.bind() : function(N) {
					for (var K = 1; K < arguments.length; K++) {
						var k = arguments[K];
						for (var H in k) Object.prototype.hasOwnProperty.call(k, H) && (N[H] = k[H])
					}
					return N
				}, D.apply(this, arguments)
			}

			function M(N, K) {
				if (N == null) return {};
				var k = j(N, K),
					H, ae;
				if (Object.getOwnPropertySymbols) {
					var de = Object.getOwnPropertySymbols(N);
					for (ae = 0; ae < de.length; ae++) H = de[ae], !(K.indexOf(H) >= 0) && (!Object.prototype.propertyIsEnumerable.call(N, H) || (k[H] = N[H]))
				}
				return k
			}

			function j(N, K) {
				if (N == null) return {};
				var k = {},
					H = Object.keys(N),
					ae, de;
				for (de = 0; de < H.length; de++) ae = H[de], !(K.indexOf(ae) >= 0) && (k[ae] = N[ae]);
				return k
			}
			const T = N => {
					let {
						title: K,
						trackingEvent: k,
						icon: H,
						url: ae,
						description: de,
						disabled: Ee
					} = N, me = M(N, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return r().createElement(R, D({
						to: !Ee && ae || "#",
						"aria-disabled": Ee,
						onClick: () => {
							g().sendEvent(k, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, me), r().createElement(u.ZC, {
						display: "flex"
					}, r().createElement(a.J, {
						type: H,
						size: 24,
						mr: 2,
						mt: 1
					}), r().createElement(u.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, r().createElement(u.ZC, {
						fontSize: 3
					}, r().createElement(d.cC, K)), r().createElement(u.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, r().createElement(d.cC, de)))))
				},
				R = (0, n.SU)(({
					theme: N
				}) => {
					const K = {
						cursor: "pointer",
						backgroundColor: (0, m.Yc)() ? N.colors.gray[8] : N.colors.gray[9],
						color: N.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: N.colors.background,
						color: N.colors.gray[2],
						fontSize: N.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': K,
						':focus-within:not([aria-disabled="true"])': O({}, K, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: N.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, f.Link);
			var x = T;

			function P() {
				return P = Object.assign ? Object.assign.bind() : function(N) {
					for (var K = 1; K < arguments.length; K++) {
						var k = arguments[K];
						for (var H in k) Object.prototype.hasOwnProperty.call(k, H) && (N[H] = k[H])
					}
					return N
				}, P.apply(this, arguments)
			}

			function V(N) {
				for (var K = 1; K < arguments.length; K++) {
					var k = arguments[K] != null ? Object(arguments[K]) : {},
						H = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(k).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(k, ae).enumerable
					})), H.forEach(function(ae) {
						ee(N, ae, k[ae])
					})
				}
				return N
			}

			function ee(N, K, k) {
				return K = q(K), K in N ? Object.defineProperty(N, K, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[K] = k, N
			}

			function q(N) {
				var K = re(N, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function re(N, K) {
				if (typeof N != "object" || N === null) return N;
				var k = N[Symbol.toPrimitive];
				if (k !== void 0) {
					var H = k.call(N, K || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(N)
			}

			function W(N, K) {
				if (N == null) return {};
				var k = z(N, K),
					H, ae;
				if (Object.getOwnPropertySymbols) {
					var de = Object.getOwnPropertySymbols(N);
					for (ae = 0; ae < de.length; ae++) H = de[ae], !(K.indexOf(H) >= 0) && (!Object.prototype.propertyIsEnumerable.call(N, H) || (k[H] = N[H]))
				}
				return k
			}

			function z(N, K) {
				if (N == null) return {};
				var k = {},
					H = Object.keys(N),
					ae, de;
				for (de = 0; de < H.length; de++) ae = H[de], !(K.indexOf(ae) >= 0) && (k[ae] = N[ae]);
				return k
			}
			const X = "GLOBAL_ADD_DROPDOWN",
				B = (0, n.SU)(({
					theme: N
				}) => ({
					"background-color": N.colors.blue[5]
				}), s.zx),
				I = ({
					disableProducts: N
				}) => {
					const K = w();
					return (0, e.useEffect)(() => (g().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						g().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), r().createElement(i.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0",
						bottom: "auto",
						zIndex: 1200,
						minWidth: 240
					}, K.map(k => {
						const H = k || {},
							{
								disableOn: ae,
								permissionCheck: de
							} = H,
							Ee = W(H, ["disableOn", "permissionCheck"]),
							me = ae && N[ae],
							ne = V({}, Ee, {
								disabled: me
							});
						return de ? r().createElement(o.Z, {
							key: k.title.id,
							edit: de
						}, ({
							isEditable: he
						}) => he && r().createElement(x, ne)) : r().createElement(x, P({
							key: k.url
						}, ne))
					}))
				},
				L = ({
					disableProducts: N,
					topNavType: K
				}) => {
					const k = () => (0, l.tq)() || K === "icon-only" ? r().createElement(u.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, r().createElement(B, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : K === "text-icon" || K === "icon-only-with-add-button" ? r().createElement(s.zx, {
						type: "primary",
						mr: K === "text-icon" ? 2 : 3
					}, r().createElement(r().Fragment, null, r().createElement(a.J, {
						label: "plus",
						type: "plus"
					}), " ", r().createElement(d.cC, {
						id: "common.add"
					}))) : r().createElement(s.zx, {
						type: "primary",
						mr: 2
					}, r().createElement(d.cC, {
						id: "common.add"
					}), " ", r().createElement(a.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return r().createElement(U, {
						role: "group",
						"data-testid": X
					}, r().createElement(_.Lt, {
						trigger: K === "baseline" ? r().createElement(J, null, r().createElement(a.J, {
							label: "plus",
							type: "plus"
						}), !(0, l.tq)() && r().createElement(r().Fragment, null, r().createElement(d.cC, {
							id: "common.add"
						}), " ", r().createElement(a.J, {
							label: "arrow",
							type: "caret-down"
						}))) : k(),
						menu: r().createElement(I, {
							disableProducts: N
						})
					}))
				},
				U = (0, n.SU)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				J = (0, n.SU)(({
					theme: N
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: N.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, m.Yc)() ? N.colors.gray[1] : N.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, m.Yc)() ? N.colors.gray[8] : N.colors.gray[9]
					}
				}), u.zx);
			var te = L,
				ie = te
		},
		"../react/app/components/LoadingSuspense.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../react/utils/translator.tsx"),
				m = t("../react/app/components/ErrorStatus.tsx"),
				l = t("../react/common/components/EmptyPage.jsx"),
				c = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const g = "suspenseComplete";

			function n() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(g))
				}, [])
			}

			function o(w) {
				useEventListener(g, () => {
					window.setTimeout(w, 0)
				}, {
					target: window
				})
			}

			function i(...w) {
				const [E, f] = w;
				React.useLayoutEffect(E, f), o(E)
			}

			function _(w) {
				const [E, f] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const O = window.setTimeout(() => f(!0), w);
					return () => window.clearTimeout(O)
				}, []), E
			}
			const d = ({
				loadingTimeout: w = 1e3,
				stillLoadingTimeout: E = 9e3
			}) => {
				const f = _(w),
					O = _(E);
				if (n(), !f && !O) return r().createElement(l.Z, null);
				const v = O ? r().createElement(s.cC, {
					id: "common.still_loading"
				}) : f ? r().createElement(s.cC, {
					id: "common.loading"
				}) : null;
				return r().createElement(m.Z, {
					size: 5
				}, r().createElement(u.ZC, {
					mr: 3
				}, r().createElement(a.g, {
					size: "2x"
				})), v)
			};
			var h = ({
				children: w
			}) => r().createElement(e.Suspense, {
				fallback: r().createElement(d, null)
			}, w)
		},
		"../react/app/components/Persistence/api.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				C8: function() {
					return c
				},
				LC: function() {
					return n
				},
				Mn: function() {
					return _
				},
				Sp: function() {
					return i
				},
				dr: function() {
					return s
				},
				lt: function() {
					return m
				},
				m6: function() {
					return o
				},
				n: function() {
					return g
				},
				yl: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const a = "/persistence/user",
				u = async () => {
					try {
						return await (await e.get(a, {
							hideErrorAlert: !0
						})).body
					} catch (d) {
						console.error(d)
					}
				}, s = async d => {
					try {
						return await (await e.get(`/accounts/${d}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (p) {
						console.error(p)
					}
				}, m = async (d, p) => {
					try {
						return await (await e.post(`${a}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: d,
								accountId: p
							}),
							hideErrorAlert: !0
						})).body
					} catch (h) {
						return console.error(h), []
					}
				}, l = async (d, p) => {
					try {
						return await http.post(`/accounts/${d}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: p
							}),
							hideErrorAlert: !0
						}), !0
					} catch (h) {
						return console.error(h), !1
					}
				}, c = async d => {
					try {
						return await (await e.post(a, {
							body: JSON.stringify({
								darkMode: d
							})
						})).body
					} catch (p) {
						console.error(p)
					}
				}, g = async d => {
					try {
						return await (await e.post(`${a}/recents`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (p) {
						console.error(p)
					}
				}, n = async d => {
					try {
						return await (await e.post(`${a}/pinned-items`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (p) {
						throw console.error(p), p
					}
				}, o = async d => {
					try {
						return await (await e.post(`${a}/viewed-changes`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (p) {
						throw console.error(p), p
					}
				}, i = async d => {
					try {
						return await (await e.post(a + "/flags", {
							body: JSON.stringify(d)
						})).body
					} catch (p) {
						throw console.error(p), p
					}
				}, _ = async (d, p) => {
					try {
						return await (await e.post(`${a}/dismissed-tasks`, {
							body: JSON.stringify({
								name: d,
								accountId: p
							}),
							hideErrorAlert: !0
						})).body
					} catch (h) {
						throw console.error(h), h
					}
				}
		},
		"../react/app/components/Persistence/hooks.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				y: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/components/Persistence/index.tsx");
			const u = () => (0, e.useContext)(a.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Wl: function() {
					return g
				},
				F3: function() {
					return n
				},
				lp: function() {
					return E
				},
				Z_: function() {
					return O
				},
				r7: function() {
					return x
				},
				Tv: function() {
					return X
				},
				yZ: function() {
					return v.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(u),
				m = t("../react/utils/bootstrap.ts"),
				l = t("../react/common/selectors/zoneSelectors.ts"),
				c = t("../react/app/components/Persistence/api.ts");
			const g = 10,
				n = 6;
			var o = t("../react/common/hooks/useActiveState.ts");

			function i(B) {
				for (var I = 1; I < arguments.length; I++) {
					var L = arguments[I] != null ? Object(arguments[I]) : {},
						U = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(L).filter(function(J) {
						return Object.getOwnPropertyDescriptor(L, J).enumerable
					})), U.forEach(function(J) {
						_(B, J, L[J])
					})
				}
				return B
			}

			function _(B, I, L) {
				return I = d(I), I in B ? Object.defineProperty(B, I, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[I] = L, B
			}

			function d(B) {
				var I = p(B, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function p(B, I) {
				if (typeof B != "object" || B === null) return B;
				var L = B[Symbol.toPrimitive];
				if (L !== void 0) {
					var U = L.call(B, I || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(B)
			}
			const h = {
					darkMode: "off",
					dismissedTasks: [],
					emailVerificationRequest: "",
					favorites: [],
					pinnedItems: {},
					recents: {},
					viewedChanges: [],
					flags: {
						hasEnabledSecurityNavigation: !1,
						hasEnabledSidebarNavGroupings: !0
					}
				},
				w = i({}, h, {
					isLoading: !0,
					remainingStarSlots: 10,
					isUpdatingFlags: !1,
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
						dismissTask: () => null
					}
				}),
				E = (0, e.createContext)(w),
				f = E.Consumer,
				O = ({
					children: B,
					onDarkModeChangeCb: I
				}) => {
					const [L, U] = (0, e.useState)(h), [J, te] = (0, e.useState)(w.isLoading), [ie, N] = (0, e.useState)(!1), K = (0, m.$8)(), k = (0, a.p4)(me => (0, l.wH)(me)), [, H] = (0, o.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						K ? (0, c.yl)().then(me => {
							if (me) {
								var ne;
								U(me), H(me == null || (ne = me.flags) === null || ne === void 0 ? void 0 : ne.hasEnabledSecurityNavigation), s().identify({
									hasEnabledSecurityNavigation: me.flags.hasEnabledSecurityNavigation
								}), I(me.darkMode)
							}
						}).finally(() => te(!1)) : te(!1)
					}, [K]);
					const ae = (me, ne) => !!L.favorites.find(he => he.type === "zone" && he.name === me && he.accountId === ne),
						de = g - L.favorites.length,
						Ee = me => L.favorites.filter(he => he.type === "zone" && he.accountId === me).length < g;
					return r().createElement(E.Provider, {
						value: i({}, L, {
							isLoading: J,
							remainingStarSlots: de,
							isUpdatingFlags: ie,
							actions: {
								canAccountStarZone: Ee,
								isZoneStarred: ae,
								starZone: async (me, ne) => {
									var he;
									const De = !ae(me, ne),
										Pe = Ee(ne);
									if (De && !Pe) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Be = await (0, c.lt)(me, ne);
									s().sendEvent("click star zone", {
										isStarring: De,
										totalStarredZones: Be.filter(ke => ke.accountId === ne && ke.type === "zone").length,
										totalZones: k == null || (he = k.paginationData) === null || he === void 0 ? void 0 : he.info.total_count
									}), U(i({}, L, {
										favorites: Be
									}))
								},
								toggleSidebarNavGroupings: async me => {
									await (0, c.Sp)({
										hasEnabledSidebarNavGroupings: me
									}), U(i({}, L, {
										flags: i({}, L.flags, {
											hasEnabledSidebarNavGroupings: me
										})
									}))
								},
								toggleSecurityNavigation: async me => {
									N(!0), await (0, c.Sp)({
										hasEnabledSecurityNavigation: me
									}), s().identify({
										hasEnabledSecurityNavigation: me
									}), N(!1), H(me), U(i({}, L, {
										flags: i({}, L.flags, {
											hasEnabledSecurityNavigation: me
										})
									}))
								},
								setDarkMode: async me => {
									I(me), L.darkMode = me, U(L);
									const ne = await (0, c.C8)(me);
									U(ne);
									const he = ne.darkMode;
									he !== me && I(he)
								},
								logRouteVisited: async me => {
									var ne;
									const he = await (0, c.n)(me);
									U((ne = he) !== null && ne !== void 0 ? ne : i({}, L))
								},
								pinRecentRoute: async me => {
									var ne, he;
									const De = me.accountId,
										Pe = (ne = L == null || (he = L.pinnedItems) === null || he === void 0 ? void 0 : he[De]) !== null && ne !== void 0 ? ne : [],
										ke = Pe.some(Ye => Ye.url === me.url) ? Pe.filter(Ye => Ye.url !== me.url) : [...Pe, me];
									U(i({}, L, {
										pinnedItems: i({}, L.pinnedItems, {
											[De]: ke
										})
									})), (0, c.LC)(me)
								},
								viewChange: async me => {
									N(!0);
									const ne = await (0, c.m6)(me);
									U(i({}, L, {
										viewedChanges: ne
									})), N(!1)
								},
								dismissTask: async (me, ne) => {
									const he = await (0, c.Mn)(me, ne);
									U(i({}, L, {
										dismissedTasks: he
									}))
								}
							}
						})
					}, B)
				};
			var v = t("../react/app/components/Persistence/hooks.ts"),
				C = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				A = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function D() {
				return D = Object.assign ? Object.assign.bind() : function(B) {
					for (var I = 1; I < arguments.length; I++) {
						var L = arguments[I];
						for (var U in L) Object.prototype.hasOwnProperty.call(L, U) && (B[U] = L[U])
					}
					return B
				}, D.apply(this, arguments)
			}

			function M(B, I) {
				if (B == null) return {};
				var L = j(B, I),
					U, J;
				if (Object.getOwnPropertySymbols) {
					var te = Object.getOwnPropertySymbols(B);
					for (J = 0; J < te.length; J++) U = te[J], !(I.indexOf(U) >= 0) && (!Object.prototype.propertyIsEnumerable.call(B, U) || (L[U] = B[U]))
				}
				return L
			}

			function j(B, I) {
				if (B == null) return {};
				var L = {},
					U = Object.keys(B),
					J, te;
				for (te = 0; te < U.length; te++) J = U[te], !(I.indexOf(J) >= 0) && (L[J] = B[J]);
				return L
			}
			const T = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var x = B => {
					let {
						isStarred: I,
						size: L = 16
					} = B, U = M(B, ["isStarred", "size"]);
					const J = T[(0, C.Yc)() ? "dark" : "light"];
					return r().createElement(A.J, D({
						type: I ? "star" : "star-outline",
						color: I ? J.gold : J.gray,
						size: L
					}, U))
				},
				P = t("../node_modules/@cloudflare/elements/es/index.js");

			function V(B) {
				for (var I = 1; I < arguments.length; I++) {
					var L = arguments[I] != null ? Object(arguments[I]) : {},
						U = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(L).filter(function(J) {
						return Object.getOwnPropertyDescriptor(L, J).enumerable
					})), U.forEach(function(J) {
						ee(B, J, L[J])
					})
				}
				return B
			}

			function ee(B, I, L) {
				return I = q(I), I in B ? Object.defineProperty(B, I, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[I] = L, B
			}

			function q(B) {
				var I = re(B, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function re(B, I) {
				if (typeof B != "object" || B === null) return B;
				var L = B[Symbol.toPrimitive];
				if (L !== void 0) {
					var U = L.call(B, I || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(B)
			}
			const W = {
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
			var X = (0, e.forwardRef)(({
				featurePreview: B = !1,
				isStarred: I,
				onClickFn: L,
				isDisabled: U,
				testId: J,
				buttonText: te,
				size: ie = "large",
				variant: N = "pill"
			}, K) => {
				const [k, H] = (0, e.useState)(!1), ae = W[(0, C.Yc)() ? "dark" : "light"][I && !B ? "active" : "default"], de = V({}, ie === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, ie === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, ie === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), Ee = {
					pill: "50vh",
					button: 4
				};
				return r().createElement(P.zx, {
					onMouseEnter: () => H(!0),
					onMouseLeave: () => H(!1),
					innerRef: K,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: de.paddingRight,
					gap: 1,
					pl: de.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: Ee[N],
					border: "1px solid",
					cursor: B || U ? "default" : "pointer",
					backgroundColor: k ? ae.bgHover : ae.bg,
					color: ae.text,
					borderColor: ae.border,
					onClick: L,
					opacity: U ? .5 : 1,
					disabled: U,
					fontSize: de.fontSize,
					height: de.height,
					"data-testid": J
				}, r().createElement(x, {
					isStarred: B ? !1 : I,
					size: de.starIconSize
				}), te)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$n: function() {
					return p
				},
				IU: function() {
					return w
				},
				Id: function() {
					return x
				},
				Wq: function() {
					return M
				},
				dL: function() {
					return E
				},
				fO: function() {
					return D
				},
				gw: function() {
					return T
				},
				hv: function() {
					return h
				},
				iY: function() {
					return _
				},
				jq: function() {
					return R
				},
				o_: function() {
					return v
				},
				us: function() {
					return A
				},
				wB: function() {
					return d
				},
				zJ: function() {
					return C
				}
			});
			var e = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				r = t("../react/common/components/AccessCheck/index.ts"),
				a = t("../react/common/selectors/accountSelectors.ts"),
				u = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/utils/zoneLevelAccess.ts"),
				l = t("../react/pages/home/configurations/dns-settings/isZoneDNSOnly.tsx"),
				c = t("../react/pages/home/domain-registration/selectors.ts"),
				g = t("../react/pages/images/selectors.ts"),
				n = t("../react/pages/r2/selectors.ts"),
				o = t("../react/pages/stream/selectors.ts");
			const i = P => !!(0, m.b)(P),
				_ = P => i(P) ? (0, r.hT)(P) : !0,
				d = (P, V, ee, q = "read") => {
					const re = (0, s.nA)(P);
					return i(P) ? (0, r.WL)(P, (0, r.W9)(ee, r.ZZ[q]), (0, r.j)(re == null ? void 0 : re.id)) : (0, a.Yj)(P)(V)[q]
				},
				p = (P, V, ee, q = "read") => {
					const re = (0, s.nA)(P),
						W = r.zs.includes(ee);
					return i(P) ? (0, r.WL)(P, W ? ee : (0, r.my)(ee, r.ZZ[q === "edit" ? "update" : q]), (0, r.j)(re == null ? void 0 : re.id)) : (0, a.Yj)(P)(V)[q === "update" ? "edit" : q]
				},
				h = P => !!(0, o._Q)(P),
				w = P => (0, g.pT)(P),
				E = P => (0, g.pT)(P) && (0, g.GH)(P),
				f = P => sourcingKitEnabledSelector(P),
				O = P => !!r2EnabledSelector(P),
				v = P => (0, n.Mv)(P),
				C = P => (0, u.$f)(P, "rulesets.magic_transit_allowed"),
				A = P => (0, u.$f)(P, "flowtrackd.magic_custom_config_allowed"),
				D = P => (0, u.$f)(P, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				M = P => (0, a.Le)(P, "ddos_protection", "l4_rulesets"),
				j = P => hasAccountEntitlements(P, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				T = P => (0, c.HO)(P),
				R = P => !(0, u.yD)(P) && !!p(P, "ssl", "ssl.cert"),
				x = P => {
					const V = (0, s.nA)(P),
						ee = (0, a.D0)(P),
						q = !!(0, e.z1)("zone-level-rum")(P);
					return !!ee && (0, r.WL)(P, (0, r.jX)("rum.analytics", r.ZZ.read), (0, r.L8)(ee.id)) && (V == null ? void 0 : V.status) === "active" && q && !(0, l.s)(P)
				}
		},
		"../react/app/components/SomethingWrong.jsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(a),
				s = t("../../../../node_modules/prop-types/index.js"),
				m = t.n(s),
				l = t("webpack/sharing/consume/default/react-redux/react-redux"),
				c = t.n(l),
				g = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(g),
				o = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				_ = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				d = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				p = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				h = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				w = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = t.n(w),
				f = t("../react/common/actions/membershipActions.ts"),
				O = t("../react/utils/url.ts"),
				v = t("../react/app/components/Footer.tsx");

			function C(W) {
				for (var z = 1; z < arguments.length; z++) {
					var X = arguments[z] != null ? Object(arguments[z]) : {},
						B = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(X).filter(function(I) {
						return Object.getOwnPropertyDescriptor(X, I).enumerable
					})), B.forEach(function(I) {
						A(W, I, X[I])
					})
				}
				return W
			}

			function A(W, z, X) {
				return z = D(z), z in W ? Object.defineProperty(W, z, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[z] = X, W
			}

			function D(W) {
				var z = M(W, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function M(W, z) {
				if (typeof W != "object" || W === null) return W;
				var X = W[Symbol.toPrimitive];
				if (X !== void 0) {
					var B = X.call(W, z || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(W)
			}
			const j = (0, o.LM)(({
					type: W
				}) => ({
					height: W !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				T = (0, o.LM)(({
					theme: W,
					margin: z,
					size: X = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: W.colors.gray[3],
					height: z ? "auto" : "100%",
					padding: z ? 0 : W.space[X > 1 ? X - 2 : 0],
					margin: z,
					justifyContent: "center",
					alignItems: "center"
				})),
				R = (0, o.LM)(() => ({
					textAlign: "left"
				})),
				x = (0, o.LM)(() => ({
					textAlign: "right"
				})),
				P = (0, o.LM)(({
					theme: W
				}) => ({
					fontSize: W.fontSizes[6]
				})),
				V = (0, o.LM)(({
					theme: W
				}) => ({
					fontSize: W.fontSizes[4]
				})),
				ee = (0, o.LM)(({
					theme: W
				}) => ({
					fontSize: W.fontSizes[3]
				})),
				q = (0, o.LM)(({
					theme: W
				}) => ({
					width: "100%",
					height: 125,
					marginTop: W.space[4],
					padding: W.space[2]
				}), "textarea");
			class re extends r().Component {
				constructor(...z) {
					super(...z);
					A(this, "state", {
						value: "",
						submitted: !1
					}), A(this, "handleTextareaChange", X => {
						this.setState({
							value: X.target.value
						})
					}), A(this, "sendErrToSentry10", async () => {
						try {
							var X, B, I, L;
							const U = ((X = window) === null || X === void 0 || (B = X.bootstrap) === null || B === void 0 || (I = B.data) === null || I === void 0 || (L = I.user) === null || L === void 0 ? void 0 : L.id) || "Unknown",
								J = this.props.eventId || _.eW(),
								te = {
									name: U,
									email: `${U}@userid.com`,
									comments: this.state.value,
									eventId: J,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: C({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(te)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (U) {
							console.error(U)
						}
					}), A(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), A(this, "renderContent", X => r().createElement(g.I18n, null, B => r().createElement(j, {
						type: X
					}, r().createElement(T, null, r().createElement(R, null, r().createElement(P, null, B.t("error.internal_issues")), r().createElement(V, null, B.t("error.help_us")), r().createElement(q, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: I => this.handleTextareaChange(I),
						disabled: this.state.submitted,
						placeholder: B.t("error.give_feedback")
					}), r().createElement(x, null, !this.state.submitted && r().createElement(i.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, B.t("common.submit")), this.state.submitted && r().createElement(ee, null, B.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: z,
						sentryTag: X,
						membershipsList: B
					} = this.props;
					console.error(`SomethingWrong: ${z}`);
					let I = "";
					const L = (0, O.e1)();
					if (L) {
						var U;
						const te = await B({
								parameters: {
									status: "accepted"
								}
							}),
							ie = te == null || (U = te.find(N => N.id === L)) === null || U === void 0 ? void 0 : U.roles;
						ie && ie.length && (I = ie.join(", "))
					}
					const J = `ErrorBoundary - ${z}`;
					d.Tb(J, {
						tags: {
							errorBoundary: X,
							normalizedPath: (0, O.Fl)(window.location.pathname),
							roles: I.length ? I : void 0
						}
					}), E().sendEvent("something wrong", {
						error: z,
						roles: I.length ? I : void 0
					})
				}
				render() {
					const {
						type: z
					} = this.props;
					return z === "fullscreen" ? r().createElement("div", null, r().createElement(p.h4, null, r().createElement(a.Link, {
						to: "/"
					}, r().createElement(h.TR, null))), this.renderContent(z), r().createElement(v.Z, null)) : this.renderContent(z)
				}
			}
			re.propTypes = {
				type: m().oneOf(["fullscreen", "page"]),
				error: m().oneOfType([m().string, m().object]),
				eventId: m().string,
				sentryTag: m().string,
				membershipsList: m().func
			}, y.Z = (0, l.connect)(() => ({}), {
				membershipsList: f.YT
			})(re)
		},
		"../react/app/providers/storeContainer.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				bh: function() {
					return x
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				r = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				a = t.n(r),
				u = t("../../../../node_modules/redux-thunk/es/index.js"),
				s = t("../../../../node_modules/redux-persist/es/index.js"),
				m = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				l = t("../react/app/rootReducer.js"),
				c = t("../react/app/redux/normalizer.js"),
				g = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				o = t("../react/app/reducerRegistry.js"),
				i = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				_ = t("../react/common/sagas/index.js"),
				d = t("../react/app/redux/processActionMiddleware.js"),
				p = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				h = t("../../../../node_modules/is-promise/index.js"),
				w = t.n(h);

			function E(P) {
				for (var V = 1; V < arguments.length; V++) {
					var ee = arguments[V] != null ? Object(arguments[V]) : {},
						q = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(ee).filter(function(re) {
						return Object.getOwnPropertyDescriptor(ee, re).enumerable
					})), q.forEach(function(re) {
						f(P, re, ee[re])
					})
				}
				return P
			}

			function f(P, V, ee) {
				return V = O(V), V in P ? Object.defineProperty(P, V, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[V] = ee, P
			}

			function O(P) {
				var V = v(P, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function v(P, V) {
				if (typeof P != "object" || P === null) return P;
				var ee = P[Symbol.toPrimitive];
				if (ee !== void 0) {
					var q = ee.call(P, V || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(P)
			}
			const C = {
					key: "cf-redux-store",
					storage: m.Z,
					whitelist: ["accountAccess", "invite"]
				},
				A = (0, i.ZP)(),
				M = [({
					dispatch: P
				}) => V => ee => w()(ee) ? ee.then(q => P(q)) : V(ee), A, u.Z, d.Z, c.qR],
				j = P => (0, s.Wq)(C, E({}, l.Z, P));

			function T() {
				const P = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					ee = e.compose((0, e.applyMiddleware)(...M), g.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					q = {},
					re = (0, e.createStore)(j(o.Z.getReducers()), q, ee);
				A.run(_.Z), (0, s.p5)(re);
				const z = (t.g.bootstrap || {}).data || {};
				return re.dispatch((0, p.mW)("user", z.user)), re
			}
			let R;
			o.Z.setChangeListener(P => {
				var V;
				R && ((V = R) === null || V === void 0 ? void 0 : V.replaceReducer) && (R.replaceReducer(j(P)), (0, s.p5)(R))
			});

			function x() {
				return R || (R = T()), R
			}
		},
		"../react/app/redux/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				TZ: function() {
					return a
				},
				UM: function() {
					return s
				},
				ZS: function() {
					return u
				},
				p4: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e);
			const a = () => (0, e.useStore)(),
				u = () => a().getState(),
				s = () => (0, e.useDispatch)(),
				m = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				$J: function() {
					return i
				},
				Oy: function() {
					return o
				},
				SC: function() {
					return g
				},
				ZP: function() {
					return _
				},
				dJ: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				a = t.n(r);

			function u(d) {
				for (var p = 1; p < arguments.length; p++) {
					var h = arguments[p] != null ? Object(arguments[p]) : {},
						w = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(h).filter(function(E) {
						return Object.getOwnPropertyDescriptor(h, E).enumerable
					})), w.forEach(function(E) {
						s(d, E, h[E])
					})
				}
				return d
			}

			function s(d, p, h) {
				return p = m(p), p in d ? Object.defineProperty(d, p, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = h, d
			}

			function m(d) {
				var p = l(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function l(d, p) {
				if (typeof d != "object" || d === null) return d;
				var h = d[Symbol.toPrimitive];
				if (h !== void 0) {
					var w = h.call(d, p || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const c = u({}, r),
				g = (d, p, h, w = {}) => {
					const E = d === "delete" ? "del" : d.toLowerCase();
					return h && E !== "del" && (w.body = h), c[E](p, w)
				},
				n = (d, p) => (d.meta.params = p, d),
				o = (d, p, h, w, {
					body: E = {}
				}) => {
					const {
						result: f,
						messages: O,
						result_info: v
					} = E, C = Object.values(p);
					if (d.meta.method === "delete") {
						const A = C[C.length - 1];
						d.meta.id = typeof A == "object" ? A.id : A
					}
					return d.payload = f, O && (d.meta.messages = O), C.length && (d.meta.params = p), v && (d.meta.paginationData = {
						info: v,
						actionParameters: C,
						options: h[0],
						insertionOffset: 0
					}), d
				},
				i = (d, p, h, w, E) => (d.payload = E && E.body && E.body.errors, d.meta.messages = E && E.body && E.body.messages, d.meta.params = p, d.apiError = E, d);

			function _(d, p, h, w) {
				const E = (0, e.RM)(d, p, h, w).apiFetch(g).on("start", n).on("success", o).on("error", i),
					f = E.mock;
				return E.mock = O => (f((...v) => {
					const C = O(...v);
					return C && typeof C == "object" && "result" in C ? C : {
						result: C
					}
				}), E), E
			}
		},
		"../react/app/redux/normalizer.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				P1: function() {
					return g
				},
				jQ: function() {
					return l
				},
				qR: function() {
					return n
				},
				uc: function() {
					return c
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				r = t("../react/pages/workers/entityTypes.ts"),
				a = t("../react/pages/email/types.ts"),
				u = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				s = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				m = t.n(s);
			const l = s.static.from([{
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
				c = o => o.entities,
				g = (...o) => (0, u.P1)(l, c, ...o),
				n = (0, u.QB)(l)
		},
		"../react/app/redux/utils.ts": function(F, y, t) {
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
			const r = u => (s, m, l) => (0, e.SC)(s, m, l, {
					hideErrorAlert: !0
				}).catch(u),
				a = u => s => {
					if (s.status === u) return s;
					throw s
				}
		},
		"../react/common/actionTypes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Cm: function() {
					return m
				},
				Cz: function() {
					return r
				},
				HI: function() {
					return l
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
					return u
				},
				lV: function() {
					return s
				},
				s1: function() {
					return c
				}
			});
			const e = "NOTIFICATION_OPEN",
				r = "NOTIFICATION_CLOSE",
				a = "MODAL_OPEN",
				u = "MODAL_CLOSE",
				s = "TOGGLE_ON",
				m = "TOGGLE_OFF",
				l = "SET_ACTIVE",
				c = "CLEAR_ACTIVE",
				g = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let o = function(i) {
				return i.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", i.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", i.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", i.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", i.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", i.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", i.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", i.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", i.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", i
			}({})
		},
		"../react/common/actions/activeActions.ts": function(F, y, t) {
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
			const r = (u, s) => ({
					type: e.HI,
					activeKey: u,
					activeValue: s
				}),
				a = u => ({
					type: e.s1,
					activeKey: u
				})
		},
		"../react/common/actions/membershipActions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return i
				},
				YT: function() {
					return g
				},
				ct: function() {
					return l
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

			function a(_) {
				for (var d = 1; d < arguments.length; d++) {
					var p = arguments[d] != null ? Object(arguments[d]) : {},
						h = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(p).filter(function(w) {
						return Object.getOwnPropertyDescriptor(p, w).enumerable
					})), h.forEach(function(w) {
						u(_, w, p[w])
					})
				}
				return _
			}

			function u(_, d, p) {
				return d = s(d), d in _ ? Object.defineProperty(_, d, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[d] = p, _
			}

			function s(_) {
				var d = m(_, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function m(_, d) {
				if (typeof _ != "object" || _ === null) return _;
				var p = _[Symbol.toPrimitive];
				if (p !== void 0) {
					var h = p.call(_, d || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(_)
			}
			const l = _ => {
					const d = _.payload.map(p => a({}, p, {
						membershipId: p.id,
						id: p.account.id
					}));
					return a({}, _, {
						payload: d
					})
				},
				c = _ => {
					const d = l(_);
					return Array.isArray(d.payload) ? a({}, _, {
						payload: d.payload[0]
					}) : a({}, _, {
						payload: null
					})
				},
				g = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", l),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				o = (..._) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: _
				}),
				i = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", c)
		},
		"../react/common/actions/modalActions.ts": function(F, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				closeModal: function() {
					return u
				},
				openModal: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = {
				replace: !0
			};

			function a(s, m, l = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: s,
						props: m
					},
					options: l
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
		"../react/common/actions/notificationsActions.ts": function(F, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				add: function() {
					return s
				},
				error: function() {
					return g
				},
				info: function() {
					return l
				},
				success: function() {
					return m
				},
				warn: function() {
					return c
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
			let u = 0;

			function s(n, o, i = {}) {
				return i = i || {},
					function(_) {
						let d = u++,
							p = {
								id: d,
								type: n,
								message: o,
								delay: i.delay,
								persist: i.persist === void 0 ? !1 : i.persist,
								closable: i.closable === void 0 ? !0 : i.closable,
								onClose() {
									_(a(d)), i.onClose && i.onClose.apply(null, arguments)
								}
							};
						_(r(p))
					}
			}

			function m(n, o) {
				return s("success", n, o)
			}

			function l(n, o) {
				return s("info", n, o)
			}

			function c(n, o) {
				return s("warning", n, o)
			}

			function g(n, o) {
				return s("error", n, o)
			}
		},
		"../react/common/actions/userActions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BT: function() {
					return l
				},
				Ut: function() {
					return w
				},
				V_: function() {
					return E
				},
				Y9: function() {
					return p
				},
				Z0: function() {
					return O
				},
				mp: function() {
					return h
				},
				r3: function() {
					return f
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/app/redux/utils.ts");

			function a(v) {
				for (var C = 1; C < arguments.length; C++) {
					var A = arguments[C] != null ? Object(arguments[C]) : {},
						D = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(A).filter(function(M) {
						return Object.getOwnPropertyDescriptor(A, M).enumerable
					})), D.forEach(function(M) {
						u(v, M, A[M])
					})
				}
				return v
			}

			function u(v, C, A) {
				return C = s(C), C in v ? Object.defineProperty(v, C, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[C] = A, v
			}

			function s(v) {
				var C = m(v, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function m(v, C) {
				if (typeof v != "object" || v === null) return v;
				var A = v[Symbol.toPrimitive];
				if (A !== void 0) {
					var D = A.call(v, C || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(v)
			}
			const l = (0, e.C)("user").get`/user`,
				c = (0, e.C)("user").patch`/user`,
				g = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				o = (0, e.C)("user").post`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/two_factor_authentication`,
				_ = (0, e.C)("user").delete`/user/two_factor_authentication`,
				d = (0, e.C)("user").put`/user/email`;

			function p(...v) {
				return d(...v)
			}
			const h = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				w = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(v => a({}, v, {
					body: a({}, v.body, {
						result: {}
					})
				}))),
				E = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				f = (0, e.C)("userDetails").get`/user/details`,
				O = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(F, y, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				r = t("../react/utils/zoneLevelAccess.ts");
			const a = ({
				legacyPermission: u,
				canAccess: s,
				children: m,
				render: l
			}) => {
				const c = !!(0, r.P)();
				let g;
				typeof s == "boolean" && s !== void 0 && c ? g = {
					read: s,
					list: s,
					create: s,
					update: s,
					delete: s,
					sign: s
				} : g = (0, e.Z)(u);
				const n = l || m;
				return n ? n(g) : null
			};
			y.Z = a
		},
		"../react/common/components/AccessCheck/AuthzContext.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Hf: function() {
					return h
				},
				we: function() {
					return w
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				s = t.n(u),
				m = t("../react/utils/url.ts"),
				l = t("../react/common/components/AccessCheck/useEvalRoles.ts"),
				c = t("../react/common/components/AccessCheck/useAccountParentOrgs.ts"),
				g = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts"),
				n = t("../react/common/components/AccessCheck/useUserAuthzPolicies.ts");

			function o(v) {
				for (var C = 1; C < arguments.length; C++) {
					var A = arguments[C] != null ? Object(arguments[C]) : {},
						D = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(A).filter(function(M) {
						return Object.getOwnPropertyDescriptor(A, M).enumerable
					})), D.forEach(function(M) {
						i(v, M, A[M])
					})
				}
				return v
			}

			function i(v, C, A) {
				return C = _(C), C in v ? Object.defineProperty(v, C, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[C] = A, v
			}

			function _(v) {
				var C = d(v, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function d(v, C) {
				if (typeof v != "object" || v === null) return v;
				var A = v[Symbol.toPrimitive];
				if (A !== void 0) {
					var D = A.call(v, C || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(v)
			}
			const p = new Set,
				h = r().createContext(void 0);

			function w({
				children: v,
				userID: C,
				isUserInDSR: A
			}) {
				const D = (0, n.b)(C),
					M = (0, u.useHistory)(),
					j = (0, m.uW)(M.location.pathname),
					T = (0, c.I)(j),
					R = (0, l.s)();
				(0, g.k)(j);
				const x = {
					isUserInDSR: A,
					contextAccountTag: j,
					contextAccountOrgsState: T,
					allRolesState: R,
					policiesState: D,
					refreshPolicies: D.refresh,
					reportSentryException: f
				};
				return r().createElement(h.Provider, {
					value: x
				}, v)
			}
			const E = () => {
					const v = useContext(h);
					if (!v) throw new Error("useRefreshPolicies must be used within a PoliciesProvider");
					return v.refreshPolicies
				},
				f = (v, C, A) => {
					const {
						parentComponent: D,
						stackSummary: M
					} = O(v), j = `${C.component}->${M}->${C.issue}`;
					p.has(j) || (p.add(j), a.Tb(v, {
						tags: o({
							parentComponent: D
						}, C),
						extra: o({
							stackSummary: M
						}, A),
						level: "error"
					}))
				},
				O = v => {
					var C;
					const D = (v.stack || "").split(`
`),
						M = [];
					for (const T of D) {
						const R = [/at (\w+)\s+\(/, /at Object\.(\w+)/, /(\w+)@/, /\/(\w+)\.tsx?:/, /\/(\w+)\.jsx?:/];
						for (const x of R) {
							const P = T.match(x);
							if (P && P[1] && !["Object", "eval", "anonymous"].includes(P[1])) {
								M.push(P[1]);
								break
							}
						}
					}
					const j = [...new Set(M)].filter(T => !["useIsAuthorized", "renderWithHooks", "updateFunctionComponent"].includes(T)).slice(0, 5);
					return {
						parentComponent: (C = j[0]) !== null && C !== void 0 ? C : "undefined",
						stackSummary: j.join(" \u2192 ")
					}
				}
		},
		"../react/common/components/AccessCheck/constants.ts": function(F, y, t) {
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
					return m
				},
				j: function() {
					return o
				},
				jX: function() {
					return l
				},
				my: function() {
					return c
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
				a = "com.cloudflare.edge.",
				u = "com.cloudflare.api.account.zone.",
				s = ["com.cloudflare.api.app.manage"];
			let m = function(i) {
				return i.read = "read", i.list = "list", i.create = "create", i.update = "update", i.delete = "delete", i.sign = "sign", i.refresh = "refresh", i
			}({});
			const l = (i, _) => `${r}${i?i+".":""}${_}`,
				c = (i, _) => `${u}${i?i+".":""}${_}`,
				g = (i, _) => `${a}${i}.${_}`,
				n = (i = "") => `${r}${i}`,
				o = (i = "") => `${u}${i}`
		},
		"../react/common/components/AccessCheck/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				L8: function() {
					return s.L8
				},
				W9: function() {
					return s.W9
				},
				WL: function() {
					return a.WL
				},
				ZP: function() {
					return r.Z
				},
				ZZ: function() {
					return s.ZZ
				},
				hT: function() {
					return a.hT
				},
				j: function() {
					return s.j
				},
				jX: function() {
					return s.jX
				},
				kd: function() {
					return a.kd
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
				a = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				u = t("../react/common/components/AccessCheck/useIsAuthorized.ts"),
				s = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/pages/zone-versioning/selectors.ts");

			function m(l) {
				const {
					read: c,
					edit: g
				} = (0, a.p4)(u.Yj)(l);
				let n = g;
				if (l != "zone_versioning") {
					const i = (0, a.p4)(s.G);
					(i == null ? void 0 : i.isLocked) && (n = !1)
				}
				return (0, e.useMemo)(() => ({
					read: c,
					list: c,
					create: n,
					update: n,
					delete: n,
					sign: n
				}), [c, n])
			}
			y.Z = m
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				F3: function() {
					return E
				},
				WL: function() {
					return _
				},
				YB: function() {
					return d
				},
				_S: function() {
					return p
				},
				hT: function() {
					return h
				},
				kd: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				r = t("../../../../node_modules/lodash-es/isString.js"),
				a = t("../react/pages/home/members/utils.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts"),
				s = t("../react/pages/zone-versioning/selectors.ts"),
				m = t("../react/common/selectors/accountSelectors.ts");
			const l = {
					allow: "allow",
					deny: "deny"
				},
				c = 0,
				g = 1,
				n = 2,
				o = 3;

			function i(D, M, j, T) {
				let R = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					x;
				for (x in R) R[x] = _(D, `${M}.${x}`, j, T);
				return R
			}

			function _(D, M, j, T) {
				var R;
				if (d(M) && !p(M)) {
					const q = (0, s.G)(D);
					if (q == null ? void 0 : q.isLocked) return !1
				}
				const x = (R = (0, m.D0)(D)) === null || R === void 0 ? void 0 : R.id,
					P = x ? [`com.cloudflare.api.account.${x}`] : void 0,
					V = (0, a.vq)(x);
				return !!w(D, V, M, j, T || P)
			}

			function d(D) {
				return ![u.ZZ.read, u.ZZ.list].some(M => D.endsWith(M))
			}

			function p(D) {
				return D.includes("zone.versioning")
			}

			function h(D) {
				const M = (0, m.Ko)(D);
				let j = !1;
				return M == null || M.forEach(T => {
					T.access === l.allow && T.permission_groups.forEach(R => {
						var x;
						(R == null || (x = R.meta) === null || x === void 0 ? void 0 : x.scopes) === u.u1 && (j = !0)
					})
				}), j
			}

			function w(D, M, j, T, R) {
				const x = (0, m.Ko)(D),
					P = {};
				x == null || x.forEach(re => {
					var W;
					const z = re.access;
					let X = c;
					if (j && re.permission_groups.forEach(B => {
							var I, L;
							M == null || (I = M.find(U => U.id === B.id)) === null || I === void 0 || (L = I.permissions) === null || L === void 0 || L.forEach(U => {
								X = Math.max(X, f(U, j))
							})
						}), X !== c && !!T) {
						let B = c;
						re.resource_groups.forEach(I => {
							B = Math.max(B, v(I.scope, T, R))
						}), X = B === c ? B : X + B
					}(P == null || (W = P[z]) === null || W === void 0 ? void 0 : W[X]) || (0, e.Z)(P, [z, X], []), P[z][X].push(re)
				});
				const V = P[l.allow] && Object.keys(P[l.allow]).map(re => parseInt(re)),
					ee = P[l.deny] && Object.keys(P[l.deny]).map(re => parseInt(re)),
					q = Math.max.apply(Math, V);
				return q === c || Math.max.apply(Math, ee) >= q ? null : P[l.allow][q]
			}

			function E(D, M, j, T, R) {
				const x = {};
				D == null || D.forEach(q => {
					var re;
					const W = q.access;
					let z = c;
					if (j && q.roles.forEach(X => {
							var B;
							const I = M == null ? void 0 : M.find(L => L.id === X.id);
							I == null || (B = I.permissions) === null || B === void 0 || B.forEach(L => {
								z = Math.max(z, f({
									key: L,
									id: "irrelevant"
								}, j))
							})
						}), z !== c && !!T) {
						let X = c;
						q.scopes.forEach(B => {
							X = Math.max(X, v(B, T, R))
						}), z = X === c ? X : z + X
					}(x == null || (re = x[W]) === null || re === void 0 ? void 0 : re[z]) || (0, e.Z)(x, [W, z], []), x[W][z].push(q)
				});
				const P = x[l.allow] && Object.keys(x[l.allow]).map(q => parseInt(q)),
					V = x[l.deny] && Object.keys(x[l.deny]).map(q => parseInt(q)),
					ee = Math.max.apply(Math, P);
				return ee === c || Math.max.apply(Math, V) >= ee ? null : x[l.allow][ee]
			}

			function f(D, M) {
				if (D.key === M || O(D.key, M)) return o;
				for (const j of (D == null ? void 0 : D.implies) || []) {
					let T = f(j, M);
					if (T > c) return T
				}
				return c
			}

			function O(D, M) {
				const j = M == null ? void 0 : M.lastIndexOf(".");
				return j === -1 ? !1 : (M == null ? void 0 : M.substring(0, j)) + ".*" === D
			}

			function v(D, M, j) {
				var T;
				let R = c;
				if (D == null || (T = D.objects) === null || T === void 0 || T.forEach(x => {
						R = Math.max(R, A(x, M))
					}), R === c) return R;
				if (D.key !== "*") switch (!0) {
					case C(D.key, j) > c:
					case (!(j == null ? void 0 : j.length) && R === o):
						break;
					case (R === g && C(D.key, [M]) > c):
						R = C(D.key, [M]);
						break;
					default:
						return c
				}
				for (const x of D.subset_of || [])
					if (C(x.key, j) === c) return c;
				return R
			}

			function C(D, M = []) {
				for (const j of M || []) {
					if (D === j) return o;
					if (O(D, j)) return n
				}
				return c
			}

			function A(D, M) {
				const j = (0, r.Z)(D) ? D : D.key;
				return j === M ? o : j === "*" || D === "*" ? g : O(j, M) ? n : c
			}
		},
		"../react/common/components/AccessCheck/useAccountParentOrgs.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				I: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				a = t("../../../../node_modules/swr/core/dist/index.mjs");
			const u = async m => {
				var l;
				const c = await fetch(`/api/v4/accounts/${m}/organizations`);
				if (!c.ok) throw new Error(`Failed to fetch account parent Orgs: ${c.status}`);
				const g = (l = await c.json()) === null || l === void 0 ? void 0 : l.result;
				if (g === void 0 || !(0, e.isArray)(g)) throw new Error(`Unexpected parent Orgs API response shape: ${JSON.stringify(g)}`);
				const n = g.map(i => {
						var _;
						return {
							tag: i.id,
							parentTag: (_ = i.parent) === null || _ === void 0 ? void 0 : _.id
						}
					}),
					o = [];
				return n.forEach(i => {
					i.parentTag || o.push(`com.cloudflare.api.tenant.${i.tag}`), o.push(`com.cloudflare.api.tenant.unit.${i.tag}`)
				}), o
			};

			function s(m) {
				const {
					data: l,
					error: c,
					isLoading: g
				} = (0, a.ZP)(m ? `account-organizations-${m}` : null, () => u(m), {
					dedupingInterval: 5 * 60 * 1e3,
					revalidateOnFocus: !0,
					focusThrottleInterval: 5 * 60 * 1e3,
					revalidateOnReconnect: !1
				});
				return {
					orgScopes: l || null,
					isLoading: g,
					error: (c == null ? void 0 : c.message) || null
				}
			}
		},
		"../react/common/components/AccessCheck/useAccountPermissionGroups.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				k: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/pages/home/members/utils.ts"),
				u = t("../../../../node_modules/lodash/lodash.js"),
				s = t.n(u),
				m = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(m),
				c = t("../react/utils/url.ts"),
				g = t("../../../../node_modules/swr/core/dist/index.mjs");

			function n(i) {
				var _;
				const d = (0, m.useHistory)(),
					p = (0, c.uW)(d.location.pathname),
					h = i || p,
					w = (0, a.Hf)(h),
					E = h && w.length === 0,
					{
						data: f,
						error: O,
						isLoading: v
					} = (0, g.ZP)(E ? `account-${h}-permission-groups` : null, h ? o(h) : () => {
						throw new Error("no accountTag, should never run")
					});
				if ((0, e.useEffect)(() => {
						f && h && ((0, a.LX)(h, f), (0, a.rC)(h, f))
					}, [f, h]), !h) return [null, !1, null];
				if (O) {
					var C;
					const D = (C = O.message) !== null && C !== void 0 ? C : JSON.stringify(O);
					return [null, !1, D]
				}
				if (v && w.length === 0) return [null, !0, null];
				const A = (_ = f) !== null && _ !== void 0 ? _ : w;
				return A.length === 0 ? [
					[], !1, "no perm groups available through API or cache"
				] : [A, !1, null]
			}
			const o = i => async () => {
				const _ = await fetch(`/api/v4/accounts/${i}/iam/permission_groups?depth=2&permissions=true`);
				if (!_.ok) throw new Error(`Failed to fetch permission groups: ${_.status}`);
				const d = await _.json(),
					p = d == null ? void 0 : d.result;
				if (p === void 0 || !(0, u.isArray)(p)) throw new Error(`Unexpected permission groups API response shape: ${JSON.stringify(p)}`);
				return p
			}
		},
		"../react/common/components/AccessCheck/useEvalRoles.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				s: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				a = t("../../../../node_modules/swr/core/dist/index.mjs");
			const u = async () => {
				var m;
				const l = await fetch("/api/v4/user/iam/dash-authz-eval-roles");
				if (!l.ok) throw new Error(`Failed to fetch authz eval roles: ${l.status}`);
				const c = await l.json();
				if (((m = c.result) === null || m === void 0 ? void 0 : m.roles) === void 0 || !(0, e.isArray)(c.result.roles)) throw new Error(`Unexpected authz eval roles API response shape: ${JSON.stringify(c.result)}`);
				return c.result.roles
			};

			function s() {
				const {
					data: m,
					error: l,
					isLoading: c
				} = (0, a.ZP)("user/iam/dash-authz-eval-roles", u, {
					dedupingInterval: 24 * 60 * 60 * 1e3,
					revalidateOnFocus: !0,
					focusThrottleInterval: 24 * 60 * 60 * 1e3,
					revalidateOnReconnect: !1
				});
				return {
					roles: m || null,
					isLoading: c,
					error: (l == null ? void 0 : l.message) || null
				}
			}
		},
		"../react/common/components/AccessCheck/useIsAuthorized.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				b: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/common/components/AccessCheck/AuthzContext.tsx"),
				u = t("../react/app/redux/index.ts"),
				s = t("../react/pages/zone-versioning/selectors.ts"),
				m = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				l = t("../../../../node_modules/lodash/lodash.js"),
				c = t.n(l),
				g = t("../react/common/components/AccessCheck/useAccountParentOrgs.ts");
			const n = "com.cloudflare.api.account.";

			function o(d, p, h) {
				const w = (0, e.useContext)(a.Hf);
				if (!w) throw new Error("useIsAuthorized must be used within AuthzContextProvider");
				(h == null ? void 0 : h.length) === 1 && h[0] !== `${n}${w.contextAccountTag}` && w.reportSentryException(new Error("useIsAuthorized was passed an Account scope different from the in view/context Account. This results in an invalid authz question."), {
					component: "useIsAuthorized",
					issue: "account_scope_mismatch"
				}, {
					permission: d,
					resource: p,
					scopes: h
				});
				let E, f = 0;
				h == null || h.forEach(L => {
					if (!(!_(L) || !w.isUserInDSR)) {
						if (f++, f > 1) {
							w.reportSentryException(new Error("useIsAuthorized was passed multiple Account scopes. This is an invalid authz question and will return incorrect answers for Org Admins"), {
								component: "useIsAuthorized",
								issue: "multiple_account_scopes"
							}, {
								permission: d,
								resource: p,
								scopes: h
							});
							return
						}
						L !== `${n}${w.contextAccountTag}` && (E = L)
					}
				});
				const O = E ? E.replace(n, "") : void 0,
					v = (0, g.I)(O),
					C = (0, u.p4)(L => (0, s.G)(L));
				if ((0, m.YB)(d) && !(0, m._S)(d) && (C == null ? void 0 : C.isLocked)) return {
					isAuthzd: !1,
					isLoading: !1
				};
				const {
					policies: A,
					isLoading: D,
					isLoadingSkippedByUserID: M,
					error: j
				} = w.policiesState, {
					orgScopes: T,
					isLoading: R,
					error: x
				} = w.contextAccountOrgsState, {
					orgScopes: P,
					isLoading: V,
					error: ee
				} = v, {
					roles: q,
					isLoading: re,
					error: W
				} = w.allRolesState;
				if (M) return {
					isAuthzd: !0,
					isLoading: !1
				};
				if (D || R || V || re) return {
					isAuthzd: void 0,
					isLoading: !0
				};
				if (j || x || ee || W) return w.reportSentryException(new Error("error loading useIsAuthorized policy data"), {
					component: "useIsAuthorized",
					issue: "error_loading_policy_data"
				}, {
					permission: d,
					resource: p,
					scopes: h,
					errorPolicies: j,
					errorContextAccountOrgScopes: x,
					errorAccountScopeOrgs: ee,
					errorAllRoles: W
				}), {
					isAuthzd: void 0,
					isLoading: !1
				};
				if ((0, l.isNull)(A) || (0, l.isNull)(q) || w.contextAccountTag && (0, l.isNull)(T)) return w.reportSentryException(new Error("missing useIsAuthorized policy data"), {
					component: "useIsAuthorized",
					issue: "missing_policy_data"
				}, {
					permission: d,
					resource: p,
					scopes: h
				}), {
					isAuthzd: void 0,
					isLoading: !1
				};
				const z = [];
				if (h && z.push(...h), w.contextAccountTag && (z.push(`com.cloudflare.api.account.${w.contextAccountTag}`), w.isUserInDSR && z.push(...T)), P && z.push(...P), z.length === 0) return w.reportSentryException(new Error("likely invalid useIsAuthorized scopes for authz eval"), {
					component: "useIsAuthorized",
					issue: "likely_invalid_scopes"
				}, {
					permission: d,
					resource: p,
					scopes: h
				}), {
					isAuthzd: void 0,
					isLoading: !1
				};
				const X = (0, l.uniq)(z),
					B = (0, m.F3)(A, q, d, p, X);
				return {
					isAuthzd: Boolean(B && B.length > 0),
					isLoading: !1
				}
			}
			const i = new RegExp(`${n}[0-9a-fA-F]{32}`);

			function _(d) {
				return i.test(d)
			}
		},
		"../react/common/components/AccessCheck/useUserAuthzPolicies.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				b: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				a = t("../../../../node_modules/swr/core/dist/index.mjs");
			const u = 60 * 1e3,
				s = new Set(["b7db8a5d0e51afce2d33ea16d8219fc6", "3576b716b54efb9e7851fe9e7a22e440", "ca11caa2415c966f6fb75f025ed1f354", "56517c9d595ec8e23d789fd2c6d18990", "340188bc4fd1e745704cedf68408ff05", "3f96cb3e7cb3fa852b055b63baf69624"]),
				m = async () => {
					var c;
					const g = await fetch("/api/v4/user/iam/policies");
					if (!g.ok) throw new Error(`Failed to fetch authz policies: ${g.status}`);
					const n = await g.json(),
						o = n == null || (c = n.result) === null || c === void 0 ? void 0 : c.policies;
					if (!o || !(0, e.isArray)(o) || o.length === 0) throw new Error(`Unexpected authz policies API response shape: ${JSON.stringify(o)}`);
					return o
				};

			function l(c) {
				var g;
				const n = !!c,
					o = s.has((g = c) !== null && g !== void 0 ? g : ""),
					i = n && !o,
					{
						data: _,
						error: d,
						isLoading: p,
						mutate: h
					} = (0, a.ZP)(i ? `user/iam/policies/${c}` : null, () => m(), {
						dedupingInterval: u,
						revalidateOnFocus: !0,
						focusThrottleInterval: u,
						revalidateOnReconnect: !1
					}),
					w = async () => {
						!i || h()
					};
				return {
					policies: _ || null,
					isLoading: i ? p : !1,
					isLoadingSkippedByUserID: o,
					error: (d == null ? void 0 : d.message) || null,
					refresh: w
				}
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				a: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e),
				a = t("../react/common/selectors/accountSelectors.ts");
			const u = m => {
					if (typeof m != "string") throw new Error("invalid Param Type provided");
					const l = m.slice(1).split(":");
					if (l.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: l[0],
						value: l[1]
					}
				},
				s = (m, l) => {
					const {
						resourceId: c,
						accountId: g,
						legacyPermission: n
					} = l;
					let {
						read: o,
						edit: i
					} = l;
					const _ = {};
					n && (i = `#${n}:edit`, o = `#${n}:read`);
					const d = c || g;
					if (o) {
						const p = Array.isArray(o) ? o : [o];
						_.isReadable = p.some(h => {
							const w = u(h);
							return (0, a.DT)(m, d, E => !!(E[w.key] && E[w.key][w.value]))
						})
					}
					if (i) {
						const p = Array.isArray(i) ? i : [i];
						_.isEditable = p.some(h => {
							const w = u(h);
							return (0, a.DT)(m, d, E => !!(E[w.key] && E[w.key][w.value]))
						})
					}
					return _
				};
			y.Z = (0, e.connect)(s)
		},
		"../react/common/components/AccessControl/index.js": function(F, y, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				r = t.n(e),
				a = t("../react/app/HoCs/withEntities.tsx"),
				u = t("../react/common/components/AccessControl/SAAConnect.js");

			function s(o) {
				for (var i = 1; i < arguments.length; i++) {
					var _ = arguments[i] != null ? Object(arguments[i]) : {},
						d = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(_).filter(function(p) {
						return Object.getOwnPropertyDescriptor(_, p).enumerable
					})), d.forEach(function(p) {
						m(o, p, _[p])
					})
				}
				return o
			}

			function m(o, i, _) {
				return i = l(i), i in o ? Object.defineProperty(o, i, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[i] = _, o
			}

			function l(o) {
				var i = c(o, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function c(o, i) {
				if (typeof o != "object" || o === null) return o;
				var _ = o[Symbol.toPrimitive];
				if (_ !== void 0) {
					var d = _.call(o, i || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(o)
			}

			function g(o) {
				const _ = ["isReadable", "isEditable"].reduce((d, p) => o.hasOwnProperty(p) ? s({}, d, {
					[p]: o[p]
				}) : d, {});
				return o.children(_)
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
			const n = (0, a.Z)((0, u.Z)(g));
			n.displayName = "AccessControl", y.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				PP: function() {
					return i
				},
				RJ: function() {
					return c
				},
				tz: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				s = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				m = t("../react/common/utils/oidc.ts");
			const l = () => g.test(window.location.pathname) || a.E.has(u.Qq),
				c = () => a.E.get(u.Qq),
				g = /^\/login\/apple(\/)?/,
				o = [g, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				i = () => {
					let d = !1;
					o.forEach(h => {
						if (h.test(window.location.pathname)) {
							d = !0;
							return
						}
					});
					const p = l() && d;
					return p && (0, s.C8)(s.LF.OFF), p
				},
				_ = d => {
					d && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					}), window.location.href = (0, m.e)(m.c.Apple, d)
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				oG: function() {
					return d
				},
				sN: function() {
					return c.sN
				},
				v2: function() {
					return c.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				m = t.n(s),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				c = t("../react/common/components/Dropdown/index.tsx"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(p) {
					for (var h = 1; h < arguments.length; h++) {
						var w = arguments[h];
						for (var E in w) Object.prototype.hasOwnProperty.call(w, E) && (p[E] = w[E])
					}
					return p
				}, n.apply(this, arguments)
			}

			function o(p, h) {
				if (p == null) return {};
				var w = i(p, h),
					E, f;
				if (Object.getOwnPropertySymbols) {
					var O = Object.getOwnPropertySymbols(p);
					for (f = 0; f < O.length; f++) E = O[f], !(h.indexOf(E) >= 0) && (!Object.prototype.propertyIsEnumerable.call(p, E) || (w[E] = p[E]))
				}
				return w
			}

			function i(p, h) {
				if (p == null) return {};
				var w = {},
					E = Object.keys(p),
					f, O;
				for (O = 0; O < E.length; O++) f = E[O], !(h.indexOf(f) >= 0) && (w[f] = p[f]);
				return w
			}
			const _ = (0, l.SU)(({
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
					menu: h,
					containerProps: w,
					disabled: E,
					disabledDropdown: f = E
				} = p, O = o(p, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: v
				} = (0, s.useI18n)();
				return r().createElement(_, n({}, w, {
					role: "group"
				}), r().createElement(a.zx, n({}, O, {
					disabled: E
				})), r().createElement(c.Lt, {
					trigger: r().createElement(a.zx, {
						type: O.type,
						"aria-haspopup": "menu",
						disabled: f
					}, r().createElement(u.J, {
						type: "caret-down",
						label: v("common.more"),
						size: 12
					})),
					menu: h
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				v: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("../react/common/hooks/useIntersectionObserver.ts");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(c) {
					for (var g = 1; g < arguments.length; g++) {
						var n = arguments[g];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (c[o] = n[o])
					}
					return c
				}, m.apply(this, arguments)
			}

			function l(c) {
				const g = (0, e.useRef)(null),
					[n, o] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const _ = g.current;
					if (_) {
						const {
							bottom: d
						} = _.getBoundingClientRect();
						d > window.innerHeight && o(!0)
					}
				}, []);
				const i = (0, s.S)(_ => {
					for (const d of _) d.intersectionRatio < 1 && o(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const _ = g.current;
					if (_ && i) return i.observe(_), () => {
						i.unobserve(_)
					}
				}, [i]), r().createElement(a.ZC, m({
					role: "menu",
					innerRef: g,
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
				}, c))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				s: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				s = t.n(u);

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(w) {
					for (var E = 1; E < arguments.length; E++) {
						var f = arguments[E];
						for (var O in f) Object.prototype.hasOwnProperty.call(f, O) && (w[O] = f[O])
					}
					return w
				}, m.apply(this, arguments)
			}

			function l(w, E) {
				if (w == null) return {};
				var f = c(w, E),
					O, v;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(w);
					for (v = 0; v < C.length; v++) O = C[v], !(E.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(w, O) || (f[O] = w[O]))
				}
				return f
			}

			function c(w, E) {
				if (w == null) return {};
				var f = {},
					O = Object.keys(w),
					v, C;
				for (C = 0; C < O.length; C++) v = O[C], !(E.indexOf(v) >= 0) && (f[v] = w[v]);
				return f
			}

			function g(w) {
				for (var E = 1; E < arguments.length; E++) {
					var f = arguments[E] != null ? Object(arguments[E]) : {},
						O = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(f).filter(function(v) {
						return Object.getOwnPropertyDescriptor(f, v).enumerable
					})), O.forEach(function(v) {
						n(w, v, f[v])
					})
				}
				return w
			}

			function n(w, E, f) {
				return E = o(E), E in w ? Object.defineProperty(w, E, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[E] = f, w
			}

			function o(w) {
				var E = i(w, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function i(w, E) {
				if (typeof w != "object" || w === null) return w;
				var f = w[Symbol.toPrimitive];
				if (f !== void 0) {
					var O = f.call(w, E || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(w)
			}
			const _ = ({
					theme: w
				}) => {
					const E = {
						cursor: "pointer",
						background: w.colors.gray[9],
						color: w.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: w.space[2],
						background: w.colors.background,
						color: w.colors.gray[3],
						fontSize: w.fontSizes[2],
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
							color: w.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				d = (0, a.LM)(_, "a"),
				p = (0, a.LM)(_, "button");

			function h(w) {
				let {
					disabled: E = !1
				} = w, f = l(w, ["disabled"]);
				const O = (0, u.useHistory)(),
					v = {
						role: "menuitem"
					};
				if ("href" in f && typeof f.href == "string") return r().createElement(d, m({
					"aria-disabled": E
				}, v, f, {
					href: E ? void 0 : f.href,
					onClick: A => {
						var D;
						if (E) return A.stopPropagation();
						A.preventDefault(), (D = f.onClick) === null || D === void 0 || D.call(f, A), O.push(f.href)
					}
				}));
				var C;
				return r().createElement(p, m({
					type: (C = f.type) !== null && C !== void 0 ? C : "button"
				}, v, f, {
					disabled: E
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/prop-types/index.js"),
				u = t.n(a),
				s = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const m = ({
				children: l
			}) => r().createElement(s.xu, {
				height: 411
			}, l);
			m.propTypes = {
				children: u().node
			}, y.Z = m
		},
		"../react/common/components/ModalManager.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return d
				},
				dd: function() {
					return i
				},
				vR: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-redux/react-redux");
			const u = p => p.application.modals;
			var s = t("../react/common/actions/modalActions.ts"),
				m = t("../../../../node_modules/swr/core/dist/index.mjs"),
				l = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function c() {
				return c = Object.assign ? Object.assign.bind() : function(p) {
					for (var h = 1; h < arguments.length; h++) {
						var w = arguments[h];
						for (var E in w) Object.prototype.hasOwnProperty.call(w, E) && (p[E] = w[E])
					}
					return p
				}, c.apply(this, arguments)
			}
			const g = r().createContext(null);
			class n extends r().Component {
				render() {
					const {
						modals: h,
						closeModal: w
					} = this.props;
					return r().createElement(r().Fragment, null, h.map(({
						ModalComponent: E,
						props: f = {},
						id: O
					}) => {
						const v = () => {
							typeof f.onClose == "function" && f.onClose(), w(E)
						};
						return r().createElement(g.Provider, {
							key: O,
							value: {
								closeModal: v
							}
						}, r().createElement(m.J$, {
							value: l.ZP
						}, r().createElement(E, c({}, f, {
							isOpen: !0,
							closeModal: v
						}))))
					}))
				}
			}

			function o() {
				const p = r().useContext(g);
				if (!p) throw new Error("useModalContext must be used within a ModalContext");
				return p
			}

			function i() {
				const p = (0, a.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...h) {
						return p(s.openModal(...h))
					}, [p]),
					closeModal: (0, e.useCallback)(function(...h) {
						return p(s.closeModal(...h))
					}, [p])
				}
			}
			var d = (0, a.connect)(p => ({
				modals: u(p)
			}), s)(n)
		},
		"../react/common/components/Page.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function u(s) {
				return r().createElement(a.T3, s)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return c
				},
				JR: function() {
					return g
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
					return a
				},
				w_: function() {
					return u
				},
				zl: function() {
					return l
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				r = "time-window",
				a = "date-from",
				u = "date-to",
				s = "from",
				m = "to",
				l = "all",
				c = {
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
		"../react/common/components/api-tokens/sparrowEvents.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Cf: function() {
					return g
				},
				hJ: function() {
					return c
				},
				ys: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var i = arguments[o] != null ? Object(arguments[o]) : {},
						_ = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(i).filter(function(d) {
						return Object.getOwnPropertyDescriptor(i, d).enumerable
					})), _.forEach(function(d) {
						u(n, d, i[d])
					})
				}
				return n
			}

			function u(n, o, i) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = i, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var _ = i.call(n, o || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let l = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const c = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, a({}, o || {}))
				},
				g = () => {
					var n;
					return (n = Object.values(l)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(F, y, t) {
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
		"../react/common/components/filter-editor/triplet-fields/SequencesField/constants.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Aq: function() {
					return c
				},
				Xc: function() {
					return l
				},
				rg: function() {
					return g
				},
				xs: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				u = t("../node_modules/@cloudflare/component-link/es/index.js"),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				m = t("../react/utils/translator.tsx");
			const l = "sequence builder modal opened",
				c = "sequence builder modal submitted",
				g = 10,
				n = {
					INITIAL_PAGINATION: {
						page: 1,
						perPage: 10
					},
					INITIAL_SORT: {
						name: "endpoint",
						direction: a.Sr.asc
					},
					INITIAL_TOOLBAR_STATE: {
						search: "",
						filterValues: {
							method: "all"
						}
					},
					EMPTY_STATES: ({
						selectedHostname: o,
						isFiltersAndNoResults: i,
						addEndpointsRoute: _
					}) => o ? i ? {
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
							to: _
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
		"../react/common/constants/billing/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Gq: function() {
					return u
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
					return m
				},
				Ed: function() {
					return s
				},
				bi: function() {
					return r
				},
				Gs: function() {
					return _
				},
				hQ: function() {
					return l
				},
				SP: function() {
					return c
				}
			});
			let e = function(d) {
				return d.page_rules = "page_rules", d.automatic_platform_optimization = "automatic_platform_optimization", d
			}({});
			const r = "page_rules",
				a = "automatic_platform_optimization",
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
				l = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e4,
					ubb_frequency: 1e4,
					ubb_price: .05
				},
				c = {
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
				i = t("../react/common/constants/billing/workers.ts");
			const _ = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				FP: function() {
					return e
				},
				Nl: function() {
					return s
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
				u = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				s = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Dk: function() {
					return _
				},
				Dy: function() {
					return d
				},
				E_: function() {
					return m
				},
				Lv: function() {
					return p
				},
				S4: function() {
					return s
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return g
				},
				Y1: function() {
					return l
				},
				p6: function() {
					return c
				},
				q0: function() {
					return u
				},
				rg: function() {
					return h
				},
				sJ: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const u = "healthy",
				s = "degraded",
				m = "critical",
				l = "unknown",
				c = "not-monitored",
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
				i = "marketing-pt",
				_ = () => {
					const E = a.Z.get(i);
					if (!!E) return o[E]
				},
				d = ["gov"],
				p = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				h = "banner-notification-interactions",
				w = null
		},
		"../react/common/constants/index.ts": function(F, y, t) {
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
		"../react/common/constants/roles.ts": function(F, y, t) {
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
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(F, y, t) {
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
				a = (s, m, l = !1) => {
					var c;
					return `${m} ${(c=r[s])!==null&&c!==void 0?c:s} ${l?"ruleset":"rule"}${m===e.GET?"s":""}`
				},
				u = () => {
					var s;
					return (s = Object.keys(r).reduce((m, l) => {
						const c = Object.values(e).reduce((g, n) => (g.push(a(l, n)), g.push(a(l, n, !0)), g), []);
						return m.concat(c)
					}, [])) === null || s === void 0 ? void 0 : s.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				C: function() {
					return m
				},
				F: function() {
					return s
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(a);

			function s() {
				var l;
				const {
					accountId: c
				} = (0, a.useParams)(), g = (0, e.p4)(r.D0);
				if (c === void 0 && !g) throw new Error("Account ID not found in URL params");
				return (l = c) !== null && l !== void 0 ? l : g == null ? void 0 : g.id
			}

			function m() {
				const l = s();
				return (0, e.p4)(c => (0, r.Py)(c, l))
			}
		},
		"../react/common/hooks/useActiveState.ts": function(F, y, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				r = t("webpack/sharing/consume/default/react-redux/react-redux"),
				a = t.n(r),
				u = t("../react/common/selectors/commonSelectors.ts");
			const s = m => {
				const l = (0, r.useDispatch)();
				return [(0, r.useSelector)((0, u.cZ)(m)), n => {
					l((0, e.I)(m, n))
				}]
			};
			y.Z = s
		},
		"../react/common/hooks/useCachedState.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				j: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function u(s, {
				key: m,
				cache: l = a.E,
				ttl: c
			} = {}) {
				var g;
				const n = m !== void 0 && l.get(m),
					[o, i] = (0, e.useState)((g = n) !== null && g !== void 0 ? g : s);
				return [o, d => {
					i(p => (d instanceof Function && (d = d(p)), m !== void 0 && l.set(m, d, c), d))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(F, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(a) {
				return (0, e.qf)(a)
			}
			y.Z = r
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function a(u, {
				root: s,
				rootMargin: m,
				threshold: l
			} = {}) {
				const c = (0, e.useRef)(null);

				function g() {
					return c.current === null && (c.current = new IntersectionObserver(u, {
						root: s,
						rootMargin: m,
						threshold: l
					})), c.current
				}
				return (0, e.useEffect)(() => (c.current = new IntersectionObserver(u, {
					root: s,
					rootMargin: m,
					threshold: l
				}), () => {
					var n;
					(n = c.current) === null || n === void 0 || n.disconnect()
				}), [u, s, m, l]), g()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function a(u) {
				const s = (0, e.useRef)(u);
				return (0, e.useEffect)(() => {
					s.current = u
				}, [u]), s.current
			}
			y.Z = a
		},
		"../react/common/hooks/useScope.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Lm: function() {
					return g
				},
				QF: function() {
					return l
				},
				f1: function() {
					return c
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/app/redux/index.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				s = t.n(u),
				m = t("../react/common/hooks/useAccountId.ts");
			const l = {
					ZONE: "zones",
					ACCOUNT: "accounts"
				},
				c = () => {
					const {
						pathname: n
					} = (0, u.useLocation)();
					return (0, e.el)(n)
				},
				g = () => {
					const n = (0, r.p4)(a.Cu),
						o = (0, m.F)(),
						i = c();
					return {
						scope: i ? l.ZONE : l.ACCOUNT,
						scopeId: i ? n : o,
						isZoneScope: i
					}
				}
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(F, y, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(u) {
				return (0, e.p4)(s => (0, r.rV)(s, u))
			}
			y.Z = a
		},
		"../react/common/middleware/sparrow/errors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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

			function e(l, c, g) {
				return c = r(c), c in l ? Object.defineProperty(l, c, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[c] = g, l
			}

			function r(l) {
				var c = a(l, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function a(l, c) {
				if (typeof l != "object" || l === null) return l;
				var g = l[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(l, c || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(l)
			}
			class u extends Error {
				constructor(c, g) {
					super(g);
					e(this, "eventName", void 0), this.eventName = c, this.name = "SparrowValidationError"
				}
			}
			class s extends u {
				constructor(c) {
					super(c, `Event not allowed: "${c}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class m extends u {
				constructor(c, g) {
					super(c, `Found invalid properties on event: "${c}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = g
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Au: function() {
					return Ae
				},
				B: function() {
					return Be
				},
				B3: function() {
					return nt
				},
				BG: function() {
					return D
				},
				Bp: function() {
					return Et
				},
				CV: function() {
					return vt
				},
				D0: function() {
					return O
				},
				DT: function() {
					return N
				},
				EL: function() {
					return U
				},
				EU: function() {
					return k
				},
				GE: function() {
					return bt
				},
				Ko: function() {
					return ie
				},
				Kx: function() {
					return T
				},
				Le: function() {
					return R
				},
				O4: function() {
					return We
				},
				Ou: function() {
					return X
				},
				Py: function() {
					return Ue
				},
				QI: function() {
					return Ve
				},
				Qf: function() {
					return C
				},
				RO: function() {
					return De
				},
				T3: function() {
					return dt
				},
				T8: function() {
					return A
				},
				UX: function() {
					return L
				},
				VP: function() {
					return je
				},
				Xo: function() {
					return ot
				},
				Xu: function() {
					return re
				},
				Yi: function() {
					return ct
				},
				Yj: function() {
					return te
				},
				Zu: function() {
					return J
				},
				bC: function() {
					return H
				},
				f8: function() {
					return V
				},
				hI: function() {
					return rt
				},
				hN: function() {
					return j
				},
				hX: function() {
					return Pe
				},
				iq: function() {
					return ze
				},
				nE: function() {
					return M
				},
				oD: function() {
					return I
				},
				oI: function() {
					return P
				},
				oJ: function() {
					return gt
				},
				tM: function() {
					return B
				},
				uF: function() {
					return W
				},
				ut: function() {
					return xe
				},
				vU: function() {
					return ft
				},
				wQ: function() {
					return Ee
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/lodash/get.js"),
				a = t.n(r),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				s = t.n(u),
				m = t("../../../../node_modules/reselect/lib/index.js"),
				l = t("../../../../node_modules/moment/moment.js"),
				c = t.n(l),
				g = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				o = t("../react/common/selectors/userSelectors.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts"),
				_ = t("../react/app/components/DeepLink/selectors.ts"),
				d = t("../react/common/constants/roles.ts"),
				p = t("../react/common/utils/hasRole.ts");

			function h(Y) {
				for (var pe = 1; pe < arguments.length; pe++) {
					var be = arguments[pe] != null ? Object(arguments[pe]) : {},
						Ie = Object.keys(be);
					typeof Object.getOwnPropertySymbols == "function" && Ie.push.apply(Ie, Object.getOwnPropertySymbols(be).filter(function(Re) {
						return Object.getOwnPropertyDescriptor(be, Re).enumerable
					})), Ie.forEach(function(Re) {
						w(Y, Re, be[Re])
					})
				}
				return Y
			}

			function w(Y, pe, be) {
				return pe = E(pe), pe in Y ? Object.defineProperty(Y, pe, {
					value: be,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[pe] = be, Y
			}

			function E(Y) {
				var pe = f(Y, "string");
				return typeof pe == "symbol" ? pe : String(pe)
			}

			function f(Y, pe) {
				if (typeof Y != "object" || Y === null) return Y;
				var be = Y[Symbol.toPrimitive];
				if (be !== void 0) {
					var Ie = be.call(Y, pe || "default");
					if (typeof Ie != "object") return Ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (pe === "string" ? String : Number)(Y)
			}
			const O = Y => {
					const pe = W(Y);
					return pe == null ? void 0 : pe.account
				},
				v = Y => {
					const pe = (0, o.PR)(Y);
					if (pe) {
						const be = pe.id;
						return Y.accountAccess[be] || {}
					}
					return {}
				},
				C = Y => Y.accountsDetailed,
				A = (0, n.P1)("accountsDetailed", C),
				D = Y => Y.memberships,
				M = (0, m.P1)((0, n.P1)("memberships", D), _.U, (Y, pe) => !!pe && !!Y ? Y.filter(be => pe.includes(be.id)) : Y),
				j = Y => Y.accountFlags && Y.accountFlags.data,
				T = Y => Y.accountFlags,
				R = (Y, pe, be) => {
					const Ie = j(Y);
					return !Ie || !Ie[pe] ? null : Ie[pe][be]
				},
				x = Y => Y.accountFlags.isRequesting,
				P = (Y, ...pe) => a()(Y, ["accountFlagsChanges", "data", ...pe]),
				V = Y => Y.accountFlagsChanges.isRequesting,
				ee = (0, m.P1)(j, T, (Y, pe) => ({
					data: Y,
					meta: pe
				})),
				q = (Y, pe, be) => !!(isEnterpriseSSEnabledSelector(Y) && R(Y, pe, be)),
				re = Y => Y.membership,
				W = (0, n.P1)("membership", re),
				z = (0, m.P1)(W, re, (Y, pe) => ({
					data: Y,
					meta: pe
				})),
				X = Y => {
					const {
						roles: pe = []
					} = W(Y) || {};
					return Boolean(pe.find(be => be === "Super Administrator - All Privileges" || be === "Billing"))
				},
				B = Y => {
					const pe = [d.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, p.n)(Y, pe)
				},
				I = Y => {
					const pe = v(Y),
						be = Ze.getMemberships(Y) ? s().asMutable(Ze.getMemberships(Y)) : [];
					if (!!be) return s().from(be.map(Ie => h({}, Ie, {
						lastSeen: pe[Ie.account.id] ? pe[Ie.account.id].lastSeen : null
					})).sort((Ie, Re) => Ie.lastSeen && Re.lastSeen ? Re.lastSeen - Ie.lastSeen : 0))
				},
				L = Y => Y.filteredMemberships,
				U = (0, n.P1)("filteredMemberships", L),
				J = (0, m.P1)(W, Y => Y == null ? void 0 : Y.permissions),
				te = (0, m.P1)(J, Y => (0, e.Z)(pe => {
					var be;
					return (be = Y == null ? void 0 : Y[pe]) !== null && be !== void 0 ? be : {
						read: !1,
						edit: !1
					}
				})),
				ie = (0, m.P1)(W, Y => Y == null ? void 0 : Y.policies),
				N = (Y, pe, be) => {
					let Ie = Ze.getMembership(Y);
					if (!Ie) {
						const Re = Ze.getMemberships(Y);
						if (!Re || !pe) return !1;
						Ie = Re.find(Qe => Qe.account.id === pe)
					}
					if (!Ie || !be) return !1;
					try {
						return be(Ie.permissions)
					} catch {
						return !1
					}
				},
				K = Y => {
					var pe, be;
					return (pe = (be = O(Y)) === null || be === void 0 ? void 0 : be.meta.has_pro_zones) !== null && pe !== void 0 ? pe : !1
				},
				k = Y => {
					var pe, be;
					return (pe = (be = O(Y)) === null || be === void 0 ? void 0 : be.meta.has_business_zones) !== null && pe !== void 0 ? pe : !1
				},
				H = Y => k(Y) || K(Y),
				ae = (Y, pe) => {
					const be = de(Y, pe);
					return !!be && !!be.enabled
				},
				de = (Y, pe) => {
					const be = Ze.getMembership(Y),
						Ie = be && be.account;
					return Ie && Ie.legacy_flags && Ie.legacy_flags[pe]
				},
				Ee = Y => ae(Y, "custom_pages"),
				me = Y => !!Y && Y["webhooks.webhooks.enabled"],
				ne = Y => R(Y, "bots", "enabled"),
				he = Y => R(Y, "billing", "annual_subscriptions_enable"),
				De = Y => Y ? Boolean(R(Y, "ConstellationAI", "v2_ui")) : !1,
				Pe = Y => Y ? Boolean(R(Y, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Be = Y => Y ? Boolean(R(Y, "AIgateway", "enabled")) : !1,
				ke = Y => de(Y, "enterprise_zone_quota"),
				Ye = Y => {
					const pe = ke(Y);
					return !pe || !pe.available ? -1 : pe.available
				},
				ze = Y => Y.accountMembers,
				nt = (0, n.P1)("accountMembers", ze),
				We = Y => Y.accountMember && Y.accountMember.isRequesting,
				G = Y => Y.accountRoles,
				Ce = (0, n.P1)("accountRoles", G),
				Ue = (Y, pe) => {
					const be = Ze.getMemberships(Y),
						Ie = be && be.find(it => it.account.id === pe);
					if (Ie) return Ie.account.name.replace(" Account", " account");
					const Re = Ze.getMembership(Y),
						Qe = Re && Re.account;
					return Qe && Qe.id === pe ? Qe.name : null
				},
				xe = (Y, pe) => {
					const be = Ze.getMemberships(Y),
						Ie = be && be.find(it => it.account.id === pe);
					if (Ie) return Ie.account.settings.access_approval_expiry;
					const Re = Ze.getMembership(Y),
						Qe = Re && Re.account;
					return Qe && Qe.id === pe ? Qe.settings.access_approval_expiry : null
				},
				ot = (Y, pe) => {
					const be = xe(Y, pe);
					return be ? c().utc(be).isAfter() : !1
				},
				dt = (Y, pe, be) => {
					const Ie = xe(Y, pe);
					let Re = Ie ? c().utc(Ie) : null;
					return !Re || !Re.isAfter() ? "" : Re && Re.year() === 3e3 ? be("account.access_approval.card_expiration_forever") : be("account.access_approval.card_expiration_text", {
						expiryTimestamp: Re.local().format(g.U.DateTime)
					})
				},
				gt = Y => Y && Y.member && Y.member.edit,
				Ae = (Y, pe) => {
					const be = Ze.getMembership(Y),
						Ie = be && be.account;
					return Ie ? Ie.id !== pe : !1
				},
				at = Y => Y.dpa,
				Q = (0, n.P1)("dpa", at),
				se = Y => Y.webhook,
				fe = Y => Y.webhooks,
				Te = (0, n.P1)("webhook", fe),
				je = Y => Y.accountLegoContract,
				Ke = (0, n.P1)("accountLegoContract", je),
				Ve = Y => {
					const pe = Ke(Y);
					return (pe == null ? void 0 : pe.lego_state) ? pe.lego_state : ""
				},
				ht = Y => Ve(Y) === "signed",
				bt = Y => je(Y).isRequesting,
				ft = Y => {
					const pe = Ke(Y);
					return pe && pe.subscription_type ? pe.subscription_type : ""
				},
				xt = Y => ft(Y) !== "",
				Ze = {
					getMembership: W,
					getMemberships: M,
					getFilteredMemberships: U,
					getAccountMembers: nt,
					getAccountRoles: Ce
				},
				Et = Y => Y.accountSingle,
				ct = (0, n.P1)("accountSingle", Et),
				rt = Y => {
					const pe = [d.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, d.V.ADMINISTRATOR];
					return (0, p.n)(Y, pe)
				},
				vt = Y => (0, p.n)(Y, [d.V.BRAND_PROTECTION]),
				Me = Y => hasRole(Y, [MEMBERSHIP_ROLES.CLOUDFORCE_ONE_ADMIN, MEMBERSHIP_ROLES.CLOUDFORCE_ONE_READ])
		},
		"../react/common/selectors/commonSelectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				FX: function() {
					return a
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
				return l => {
					const c = l.application;
					return c && c.active[m]
				}
			}

			function r(s) {
				const m = `__TOGGLE__${s}`;
				return l => {
					const c = l.application;
					return c && c.toggles[m]
				}
			}

			function a(s) {
				return s && s.paginationData && s.paginationData.info && s.paginationData.info.total_count ? s.paginationData.info.total_count : 0
			}
			const u = s => s.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$f: function() {
					return p
				},
				AD: function() {
					return m
				},
				BF: function() {
					return d
				},
				Bs: function() {
					return v
				},
				Ci: function() {
					return te
				},
				DA: function() {
					return ze
				},
				E6: function() {
					return _
				},
				Gy: function() {
					return Be
				},
				Hq: function() {
					return Pe
				},
				Ms: function() {
					return D
				},
				Mx: function() {
					return ae
				},
				Nb: function() {
					return De
				},
				Pj: function() {
					return Ye
				},
				Q2: function() {
					return l
				},
				Qq: function() {
					return de
				},
				Td: function() {
					return f
				},
				Z: function() {
					return K
				},
				a: function() {
					return O
				},
				a5: function() {
					return H
				},
				c7: function() {
					return Ee
				},
				du: function() {
					return g
				},
				ec: function() {
					return ee
				},
				f: function() {
					return he
				},
				fo: function() {
					return ne
				},
				hL: function() {
					return k
				},
				ji: function() {
					return ie
				},
				jo: function() {
					return M
				},
				l9: function() {
					return We
				},
				lI: function() {
					return s
				},
				p1: function() {
					return w
				},
				pK: function() {
					return ke
				},
				pf: function() {
					return o
				},
				qR: function() {
					return E
				},
				rV: function() {
					return c
				},
				u1: function() {
					return n
				},
				w4: function() {
					return i
				},
				yD: function() {
					return N
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/pages/internal-dns/constants.ts");

			function a(G, Ce) {
				return G && G[Ce]
			}
			const u = G => !s(G).isRequesting;

			function s(G) {
				return G.entitlements.zone
			}

			function m(G) {
				return s(G).data
			}
			const l = G => {
				var Ce, Ue;
				return ((Ce = s(G).paginationData) === null || Ce === void 0 || (Ue = Ce.options) === null || Ue === void 0 ? void 0 : Ue.editedDate) || {}
			};

			function c(G, Ce) {
				const Ue = m(G);
				return Ue ? a(Ue, Ce) : void 0
			}
			const g = (G, Ce) => c(G, Ce) === !0;

			function n(G) {
				return G.entitlements.account
			}

			function o(G) {
				return n(G).data
			}
			const i = G => {
				var Ce, Ue;
				return ((Ce = n(G).paginationData) === null || Ce === void 0 || (Ue = Ce.options) === null || Ue === void 0 ? void 0 : Ue.editedDate) || {}
			};

			function _(G) {
				return !n(G).isRequesting
			}

			function d(G, Ce) {
				const Ue = o(G);
				return Ue ? a(Ue, Ce) : void 0
			}

			function p(G, Ce) {
				return d(G, Ce) === !0
			}

			function h(G, Ce) {
				return Ce.every(Ue => p(G, Ue))
			}

			function w(G) {
				return p(G, "contract.customer_enabled")
			}

			function E(G) {
				return p(G, "contract.self_service_allowed")
			}

			function f(G) {
				return p(G, "billing.partners_managed")
			}
			const O = G => w(G) && E(G),
				v = G => p(G, "enterprise.ecp_allowed");

			function C(G) {
				return A(G) || p(G, "argo.allow_smart_routing") || p(G, "argo.allow_tiered_caching") || p(G, "rate_limiting.enabled") || p(G, "ctm.enabled") || p(G, "workers.enabled") || p(G, "workers.kv_store.enabled") || p(G, "stream.enabled")
			}
			const A = G => g(G, "argo.allow_smart_routing") || g(G, "argo.allow_tiered_caching"),
				D = G => p(G, "zone.partial_setup_allowed") || g(G, "zone.partial_setup_allowed"),
				M = G => p(G, "argo.allow_smart_routing") || g(G, "argo.allow_smart_routing"),
				j = G => p(G, "argo.allow_tiered_caching") || g(G, "argo.allow_tiered_caching"),
				T = G => M(G) || j(G),
				R = G => p(G, "ctm.enabled"),
				x = G => {
					const Ce = d(G, "ctm.load_balancers");
					return typeof Ce == "number" ? Ce : 0
				},
				P = G => {
					const Ce = d(G, "ctm.pools");
					return typeof Ce == "number" ? Ce : 0
				},
				V = G => {
					const Ce = d(G, "ctm.origins");
					return typeof Ce == "number" ? Ce : 0
				},
				ee = G => p(G, "workers.enabled"),
				q = G => p(G, "stream.enabled"),
				re = G => {
					const Ce = d(G, "access.users_allowed");
					return typeof Ce == "number" ? Ce : 0
				},
				W = G => re(G) > 0,
				z = G => {
					const Ce = c(G, "dedicated_certificates");
					return typeof Ce == "number" ? Ce : 0
				},
				X = G => z(G) > 0,
				B = G => {
					const Ce = c(G, "rate_limiting.max_rules");
					return typeof Ce == "number" ? Ce : 0
				},
				I = G => p(G, "rate_limiting.enabled"),
				L = G => {
					const Ce = c(G, "page_rules");
					return typeof Ce == "number" ? Ce : 0
				},
				U = G => L(G) > 0,
				J = G => {
					const Ce = d(G, "dns_firewall.max_clusters_allowed");
					return typeof Ce == "number" ? Ce : 0
				},
				te = G => J(G) > 0,
				ie = G => g(G, "zone.advanced_certificate_manager") || p(G, "zone.advanced_certificate_manager"),
				N = G => c(G, "authoritative_dns.proxy_record_allowed") === !1 || d(G, "authoritative_dns.proxy_record_allowed") === !1,
				K = G => p(G, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				k = G => c(G, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				H = G => {
					const Ce = c(G, "authoritative_dns.min_record_ttl_allowed");
					return typeof Ce == "number" && Ce > 1 ? Ce : 60
				},
				ae = G => {
					const Ce = d(G, r.yt);
					return typeof Ce == "number" ? Ce : 0
				},
				de = G => p(G, "foundation_dns.advanced_nameservers_allowed") || g(G, "foundation_dns.advanced_nameservers_allowed"),
				Ee = G => p(G, "authoritative_dns.account_custom_nameservers_allowed"),
				me = G => g(G, "authoritative_dns.zone_custom_nameservers_allowed"),
				ne = G => me(G) || Ee(G),
				he = (G, Ce) => ((0, e.el)(window.location.pathname) ? c : d)(G, Ce),
				De = G => ((0, e.el)(window.location.pathname) ? m : o)(G),
				Pe = G => p(G, "authoritative_dns.multi_provider_allowed") || g(G, "authoritative_dns.multi_provider_allowed"),
				Be = G => g(G, "authoritative_dns.cname_flattening_allowed"),
				ke = G => p(G, "secondary_dns.secondary_overrides") || g(G, "secondary_dns.secondary_overrides"),
				Ye = G => p(G, "authoritative_dns.custom_soa_allowed") || g(G, "authoritative_dns.custom_soa_allowed"),
				ze = G => p(G, "authoritative_dns.custom_ns_ttl_allowed") || g(G, "authoritative_dns.custom_ns_ttl_allowed"),
				nt = G => p(G, "secondary.create_zone"),
				We = G => de(G) || Ee(G) || Pe(G) || nt(G) || ke(G) || Ye(G) || ze(G)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return s
				},
				v: function() {
					return m
				}
			});
			var e = t("../react/utils/i18n.ts"),
				r = t("../../../common/intl/intl-types/src/index.ts"),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/utils/bootstrap.ts");
			const s = l => {
				if ((0, u.gm)()) return a.Z.set(e.ly, e.ZW), e.ZW;
				const c = l.userCommPreferences.data;
				if (c == null ? void 0 : c["language-locale"]) return (0, e.i_)(c["language-locale"]), c["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const g = (0, e.Kd)();
					return m(g) ? g : e.ZW
				}
			};

			function m(l) {
				const c = Object.keys(r.Q).find(g => r.Q[g] === l);
				return !!l && typeof l == "string" && c != null && (0, e.S8)(c)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return s
				},
				BG: function() {
					return g
				},
				BY: function() {
					return f
				},
				GP: function() {
					return d
				},
				GU: function() {
					return O
				},
				PR: function() {
					return a
				},
				h$: function() {
					return w
				},
				h8: function() {
					return n
				},
				kk: function() {
					return h
				},
				l8: function() {
					return l
				},
				mV: function() {
					return p
				},
				vW: function() {
					return m
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const r = v => v.user,
				a = (0, e.P1)("user", r),
				u = v => {
					var C;
					return (C = a(v)) === null || C === void 0 ? void 0 : C.email.endsWith("@cloudflare.com")
				},
				s = v => {
					var C;
					return !!((C = a(v)) === null || C === void 0 ? void 0 : C.id)
				},
				m = v => {
					const C = a(v);
					if (!!C) return C.first_name && C.last_name ? `${C.first_name} ${C.last_name}` : C.email
				},
				l = v => {
					const C = a(v);
					return C && C.has_enterprise_zones
				},
				c = v => v.userCommPreferences,
				g = (0, e.P1)("userCommPreferences", c),
				n = v => {
					const C = a(v);
					return C && C.email_verified
				},
				o = v => {
					const C = g(v);
					return C && C.preferences.marketing_communication
				},
				i = v => v.userDetails,
				_ = (0, e.P1)("userDetails", i),
				d = v => {
					const C = _(v);
					return C && C["2FA-RECOVERY"] === "scheduled"
				},
				p = v => {
					const C = _(v);
					return C && C["2FA-RECOVERY"] === "interrupted"
				},
				h = v => {
					const C = _(v);
					return C == null ? void 0 : C["NEW-USER-EMAIL"]
				},
				w = v => v.gates.assignments,
				E = (v, C) => v && v[C];

			function f(v, C) {
				const A = w(v);
				return A ? E(A, C) : void 0
			}
			const O = (v, C) => f(v, C) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return D
				},
				$t: function() {
					return ot
				},
				A4: function() {
					return w
				},
				Cu: function() {
					return E
				},
				DQ: function() {
					return Ee
				},
				Ej: function() {
					return T
				},
				FH: function() {
					return O
				},
				ID: function() {
					return L
				},
				Iu: function() {
					return h
				},
				Ko: function() {
					return ke
				},
				Le: function() {
					return he
				},
				Ly: function() {
					return N
				},
				M3: function() {
					return G
				},
				N8: function() {
					return We
				},
				NY: function() {
					return ae
				},
				Ns: function() {
					return te
				},
				Ox: function() {
					return Ae
				},
				P4: function() {
					return R
				},
				RO: function() {
					return B
				},
				Tr: function() {
					return Be
				},
				U: function() {
					return f
				},
				Ug: function() {
					return C
				},
				V6: function() {
					return Ce
				},
				WR: function() {
					return at
				},
				Xg: function() {
					return p
				},
				ZB: function() {
					return ne
				},
				_y: function() {
					return U
				},
				bR: function() {
					return j
				},
				cU: function() {
					return Ye
				},
				cg: function() {
					return de
				},
				d2: function() {
					return re
				},
				il: function() {
					return ie
				},
				jN: function() {
					return P
				},
				jg: function() {
					return k
				},
				kC: function() {
					return M
				},
				kf: function() {
					return Ue
				},
				ko: function() {
					return X
				},
				mK: function() {
					return dt
				},
				nA: function() {
					return d
				},
				oY: function() {
					return x
				},
				qM: function() {
					return De
				},
				rq: function() {
					return H
				},
				tS: function() {
					return A
				},
				tU: function() {
					return ee
				},
				vB: function() {
					return gt
				},
				vM: function() {
					return V
				},
				wH: function() {
					return v
				},
				wn: function() {
					return me
				},
				xU: function() {
					return q
				},
				xw: function() {
					return Pe
				},
				z5: function() {
					return I
				},
				zO: function() {
					return ze
				},
				zW: function() {
					return xe
				},
				zh: function() {
					return W
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				r = t("../react/app/redux/normalizer.js"),
				a = t("../../../../node_modules/lodash/get.js"),
				u = t.n(a),
				s = t("../../../../node_modules/moment/moment.js"),
				m = t.n(s),
				l = t("../react/common/constants/billing/index.ts");

			function c(Q) {
				for (var se = 1; se < arguments.length; se++) {
					var fe = arguments[se] != null ? Object(arguments[se]) : {},
						Te = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(fe).filter(function(je) {
						return Object.getOwnPropertyDescriptor(fe, je).enumerable
					})), Te.forEach(function(je) {
						g(Q, je, fe[je])
					})
				}
				return Q
			}

			function g(Q, se, fe) {
				return se = n(se), se in Q ? Object.defineProperty(Q, se, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[se] = fe, Q
			}

			function n(Q) {
				var se = o(Q, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function o(Q, se) {
				if (typeof Q != "object" || Q === null) return Q;
				var fe = Q[Symbol.toPrimitive];
				if (fe !== void 0) {
					var Te = fe.call(Q, se || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(Q)
			}
			const i = (0, r.P1)("zone", Q => Q.zone),
				_ = Q => {
					var se;
					return (se = Q.zoneVersioning) === null || se === void 0 ? void 0 : se.zoneVersionSelector
				},
				d = (0, e.P1)(i, _, (Q, se) => {
					var fe, Te, je;
					let Ke;
					if (Array.isArray(Q) && Q.length === 1 ? Ke = Q[0] : Q && !Array.isArray(Q) && (Ke = Q), !Ke) return;
					const Ve = !!(se == null ? void 0 : se.enabled);
					return c({}, Ke, Ke.name && {
						name: Ve ? se.rootZoneName : Ke.name
					}, {
						versioning: {
							enabled: Ve,
							isRoot: !((fe = Ke.name) === null || fe === void 0 ? void 0 : fe.endsWith(".config.cfdata.org")),
							version: Ve ? se.selectedVersion : 0,
							rootZoneId: Ve ? se.rootZoneId : (Te = (je = Ke) === null || je === void 0 ? void 0 : je.id) !== null && Te !== void 0 ? Te : ""
						}
					})
				}),
				p = Q => Q.zone,
				h = Q => Q.zone.isRequesting,
				w = (0, e.P1)(d, p, (Q, se) => ({
					data: Q,
					meta: se
				})),
				E = Q => {
					var se, fe;
					return (se = (fe = d(Q)) === null || fe === void 0 ? void 0 : fe.id) !== null && se !== void 0 ? se : ""
				},
				f = Q => Q.zones,
				O = Q => Q.zonesRoot,
				v = Q => Q.zonesAccount,
				C = (0, r.P1)("zones", f),
				A = (0, r.P1)("zonesRoot", O),
				D = (0, r.P1)("zonesAccount", v);

			function M(Q) {
				const se = d(Q);
				return se ? se.created_on : null
			}
			const j = Q => {
				var se;
				const fe = d(Q);
				return c({}, fe, {
					id: (fe == null || (se = fe.versioning) === null || se === void 0 ? void 0 : se.enabled) ? fe == null ? void 0 : fe.versioning.rootZoneId : fe == null ? void 0 : fe.id
				})
			};

			function T(Q, se, fe) {
				const Te = M(Q);
				if (!Te) return;
				const je = m().duration(se, fe),
					Ke = new Date(Te),
					Ve = new Date(new Date().getTime() - je.asMilliseconds());
				return Ke.getTime() > Ve.getTime()
			}

			function R(Q) {
				const se = d(Q);
				return se ? se.status : null
			}

			function x(Q) {
				const se = d(Q);
				return se ? se.type : null
			}

			function P(Q) {
				return (Q == null ? void 0 : Q.plan_pending) ? Q == null ? void 0 : Q.plan_pending : Q == null ? void 0 : Q.plan
			}

			function V(Q) {
				const se = d(Q);
				if (!se) return;
				const fe = P(se);
				return fe && fe.legacy_id
			}

			function ee(Q, se) {
				const fe = P(Q);
				return !!fe && l.Gs.indexOf(fe.legacy_id) >= l.Gs.indexOf(se)
			}

			function q(Q) {
				return !!Q && Q.status === "initializing"
			}

			function re(Q) {
				return !!Q && Q.status === "pending"
			}

			function W(Q) {
				return !!Q && Q.status === "active"
			}

			function z(Q, se) {
				if (!Q) return !1;
				const fe = P(Q);
				return !!fe && fe.legacy_id === se
			}

			function X(Q) {
				return z(Q, "enterprise")
			}
			const B = Q => X(d(Q));

			function I(Q) {
				return z(Q, "business")
			}
			const L = Q => I(d(Q));

			function U(Q) {
				return z(Q, "pro")
			}
			const J = Q => U(d(Q));

			function te(Q) {
				return z(Q, "free")
			}
			const ie = Q => te(d(Q));

			function N(Q) {
				return !X(Q)
			}

			function K(Q) {
				return Q && Q.owner
			}

			function k(Q, se) {
				const fe = K(se);
				return !!fe && fe.type === "user" && fe.id === Q.id
			}

			function H(Q) {
				const se = d(Q);
				return !!se && se.type === "partial"
			}

			function ae(Q) {
				const se = d(Q);
				return !!se && se.type === "secondary"
			}
			const de = Q => {
					var se;
					const fe = d(Q);
					return !!(fe == null ? void 0 : fe.host) && !!((se = fe.plan) === null || se === void 0 ? void 0 : se.externally_managed)
				},
				Ee = Q => {
					const se = C(Q);
					return se && se.some(X)
				},
				me = (Q, se) => {
					const fe = d(Q);
					return fe && fe.betas ? fe.betas.includes(se) : !1
				},
				ne = (Q, ...se) => u()(Q, ["zoneFlags", "data", ...se]),
				he = (Q, ...se) => u()(Q, ["accountFlags", "data", ...se]),
				De = Q => Q.accountFlags.isRequesting,
				Pe = Q => Q.zoneFlags.isRequesting,
				Be = (Q, ...se) => u()(Q, ["zoneFlagsChanges", "data", ...se]),
				ke = Q => Q.zoneFlagsChanges.isRequesting,
				Ye = Q => Q.zoneFlags && Q.zoneFlags.data,
				ze = Q => Q.zoneFlags,
				nt = (0, e.P1)(Ye, ze, (Q, se) => ({
					data: Q,
					meta: se
				})),
				We = (0, r.P1)("abuseUrls", Q => Q.overview.abuseUrls),
				G = Q => {
					const se = d(Q);
					return se ? `/${se.account.id}/${se.name}` : null
				},
				Ce = Q => Q.zoneMarketingCampaigns,
				Ue = Q => Q.overview.zoneBlocks.data,
				xe = Q => Q.overview.zoneBlocks.isRequesting,
				ot = Q => Q.overview.zoneBlocks.hasData,
				dt = Q => {
					var se, fe;
					return (Q == null || (se = Q.overview.zoneBlocks) === null || se === void 0 || (fe = se.paginationData) === null || fe === void 0 ? void 0 : fe.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				gt = Q => Q.overview.zoneBlocksReview.isRequesting,
				Ae = Q => Q.overview.zoneHold,
				at = (0, r.P1)("zoneHold", Ae)
		},
		"../react/common/utils/formatDate.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			y.Z = (r, a, u = !1) => (0, e.p6)(r, a, u)
		},
		"../react/common/utils/getEnvironment.ts": function(F, y, t) {
			"use strict";
			var e = t("../../../../node_modules/cookie/index.js"),
				r = t("../functions/utils/preview-deploy-helpers.ts"),
				a = t("../functions/utils/constants.ts");
			const u = () => {
				var s, m, l;
				const g = e.parse(document.cookie)[a.b1];
				let n = null;
				g && (n = (0, r.E9)(g));
				let o = "production";
				switch (!0) {
					case ((s = n) === null || s === void 0 ? void 0 : s.projectType) === "canary":
						o = "canary";
						break;
					case ((m = window) === null || m === void 0 || (l = m.build) === null || l === void 0 ? void 0 : l.isPreviewDeploy):
						o = "preview";
						break
				}
				return o
			};
			y.Z = u
		},
		"../react/common/utils/hasRole.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				n: function() {
					return r
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const r = (a, u) => {
				const {
					roles: s = []
				} = (0, e.uF)(a) || {};
				return u.some(m => s.includes(m))
			}
		},
		"../react/common/utils/isGuards.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$K: function() {
					return l
				},
				Q$: function() {
					return a
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
			const a = c => c ? ["page", "per_page", "count", "total_count"].every(n => n in c && c[n]) : !1,
				u = (c = "") => e.Dy.includes(c.toLowerCase()),
				s = c => c !== null && typeof c == "object" && "name" in c && "size" in c && "type" in c && typeof c.slice == "function",
				m = c => (0, r.Z)(c),
				l = c => c != null
		},
		"../react/common/utils/oidc.ts": function(F, y, t) {
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
			const r = (a, u) => {
				const s = "production",
					m = `oidc${s==="staging"?"-staging":""}.iam.cfapi.net`,
					c = new URLSearchParams(window.location.search).get("login_challenge");
				let g = `https://${m}/api/v1/sso/init?client=${a}&env=${s}`;
				return u && (g = g + `&jwt=${u}`), c && (g += `&login_challenge=${encodeURIComponent(c)}`), g
			}
		},
		"../react/common/utils/useQueryCache.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				o: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function r(l) {
				for (var c = 1; c < arguments.length; c++) {
					var g = arguments[c] != null ? Object(arguments[c]) : {},
						n = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(g).filter(function(o) {
						return Object.getOwnPropertyDescriptor(g, o).enumerable
					})), n.forEach(function(o) {
						a(l, o, g[o])
					})
				}
				return l
			}

			function a(l, c, g) {
				return c = u(c), c in l ? Object.defineProperty(l, c, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[c] = g, l
			}

			function u(l) {
				var c = s(l, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function s(l, c) {
				if (typeof l != "object" || l === null) return l;
				var g = l[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(l, c || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(l)
			}
			const m = l => {
				const c = (0, e.useQueryClient)(),
					g = f => {
						var O;
						return c.getQueriesData((O = f) !== null && O !== void 0 ? O : l)
					},
					n = f => {
						var O;
						return c.getQueryData((O = f) !== null && O !== void 0 ? O : l)
					},
					o = f => {
						var O;
						return c.getQueriesData({
							queryKey: (O = f) !== null && O !== void 0 ? O : l,
							stale: !0
						})
					},
					i = (f, O) => {
						var v;
						c.setQueryData((v = O) !== null && v !== void 0 ? v : l, f)
					},
					_ = async f => {
						var O;
						await c.refetchQueries((O = f) !== null && O !== void 0 ? O : l)
					}, d = async (f, O) => {
						var v, C;
						await c.invalidateQueries((v = f) !== null && v !== void 0 ? v : l, r({
							refetchActive: !1
						}, (C = O) !== null && C !== void 0 ? C : {}))
					}, p = async (f, O) => {
						const v = f || (C => {
							var A;
							return (C == null || (A = C.queryKey) === null || A === void 0 ? void 0 : A[0]) === l
						});
						await c.invalidateQueries(r({
							predicate: v,
							refetchActive: !1,
							refetchInactive: !1
						}, O))
					};
				return {
					refetch: _,
					cancelData: async () => {
						await c.cancelQueries(l)
					},
					invalidate: d,
					setData: i,
					getDataStale: o,
					getData: g,
					prefetchQuery: (f, O) => {
						var v;
						return c.prefetchQuery((v = O) !== null && v !== void 0 ? v : l, f)
					},
					getQueryData: n,
					predicateInvalidate: p,
					batchInvalidate: async ({
						queryKeysToInvalidate: f = [],
						queryKeysToPredicateInvalidate: O = [],
						refetchActive: v = !1,
						refetchInactive: C = !1
					}) => {
						const A = f.map(M => d(M)),
							D = O.map(M => p(j => {
								var T;
								return (j == null || (T = j.queryKey) === null || T === void 0 ? void 0 : T[0]) === M
							}, {
								refetchActive: v,
								refetchInactive: C
							}));
						await Promise.all([...A, ...D])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				K2: function() {
					return r
				},
				Lb: function() {
					return a
				},
				XI: function() {
					return u
				},
				bK: function() {
					return c
				},
				jk: function() {
					return l
				},
				wb: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const r = g => /^https?:\/\/(.*)/.test(g),
				a = g => e.default.hostname.test(g),
				u = g => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(g),
				s = g => /^[!-~]+$/.test(g),
				m = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				l = g => m.test(g),
				c = g => !!g && !!g.length && /^[ -~]+$/.test(g)
		},
		"../react/pages/abuse/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Cg: function() {
					return _
				},
				EO: function() {
					return c
				},
				Iy: function() {
					return l
				},
				RV: function() {
					return i
				},
				R_: function() {
					return m
				},
				Vq: function() {
					return f
				},
				Y0: function() {
					return E
				},
				bL: function() {
					return v
				},
				bx: function() {
					return w
				},
				dM: function() {
					return A
				},
				dV: function() {
					return C
				},
				eM: function() {
					return o
				},
				i9: function() {
					return s
				},
				nq: function() {
					return p
				},
				pj: function() {
					return n
				},
				to: function() {
					return O
				},
				xR: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				a = t("../react/pages/abuse/abuse.translations.ts"),
				u = t("../react/pages/abuse/types.ts");
			const s = "customer-abuse-reports-table-filter-bar",
				m = "abuse-reports-table-tooltip",
				l = "abuse-reports-cache-rate-limits-table-tooltip",
				c = "abuse-reports-blocks-tables-tooltip",
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
			let i = function(D) {
				return D.BLOCKED_CONTENT = "blocked-content", D.CACHE_RATE_LIMITS = "cache-rate-limits", D
			}({});
			const _ = [{
					title: a.keys.tab_titles.blocked_content,
					url: `/${i.BLOCKED_CONTENT}`
				}, {
					title: a.keys.tab_titles.cache_rate_limits,
					url: `/${i.CACHE_RATE_LIMITS}`
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
				h = null,
				w = ["active", "cancelled", "in_review", "pending", "removed"],
				E = ["accepted", "in_review"];
			let f = function(D) {
				return D.APPEAL_MITIGATION_SUBMIT = "appeal abuse report mitigation submit", D.APPEAL_MITIGATION_SUCCESS = "appeal abuse report mitigation success", D.APPEAL_MITIGATION_FAILURE = "appeal abuse report mitigation failure", D.CLICK_ABUSE_REPORT_ID = "click abuse report id", D.CLICK_ABUSE_REPORT_MITIGATIONS_LINK = "click abuse report mitigations link", D.ADD_FILTER = "Add filter", D.REMOVE_FILTER = "Remove filter", D.REMOVE_ALL_FILTERS = "Remove all filters", D.NEXT_PAGE = "go to next page", D.PREV_PAGE = "go to prev page", D.GO_TO_PAGE = "go to page", D.SET_PAGE_SIZE = "set page size", D.COPY_TABLE_CELL = "copy table cell", D
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
				v = {
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
				C = {
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
				A = {
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
		"../react/pages/abuse/types.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				DT: function() {
					return u
				},
				MY: function() {
					return a
				},
				XO: function() {
					return e
				},
				Zy: function() {
					return c
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
				a = {
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
				l = function(o) {
					return o.Domain = "domain", o.Status = "status", o.Type = "type", o
				}({}),
				c = function(o) {
					return o.DMCA = "DMCA", o.TRADEMARK = "TM", o.PHISHING = "PHISH", o.GENERAL = "GEN", o.REGISTRAR_WHOIS = "REG_WHO", o.EMERGENCY = "EMER", o.NCSEI = "NCSEI", o.THREAT = "THREAT", o
				}({});
			const g = [c.DMCA, c.TRADEMARK, c.PHISHING, c.GENERAL, c.REGISTRAR_WHOIS, c.EMERGENCY, c.NCSEI, c.THREAT];
			let n = function(o) {
				return o.Id = "id", o.CDate = "cdate", o.Domain = "domain", o.Type = "type", o.Status = "status", o.AcceptedUrls = "accepted_urls", o
			}({})
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				DZ: function() {
					return u
				},
				GA: function() {
					return g
				},
				hT: function() {
					return m
				},
				p6: function() {
					return a
				},
				qc: function() {
					return s
				},
				w9: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e);
			const a = i => r().utc(i).format("YYYY-MM-DD"),
				u = i => r().utc(i).format(),
				s = i => r().utc(i).startOf("minute").format(),
				m = i => new Date(i),
				l = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				c = i => {
					const _ = i / 60 / 60 / 1e3;
					return l[Object.keys(l).sort((d, p) => p - d).find(d => _ >= d)]
				},
				g = (i, _ = d => d.avg && d.avg.sampleInterval ? d.avg.sampleInterval : 1) => i.length === 0 ? 1 : i.reduce((d, p) => d + _(p), 0) / i.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				o = i => n[i]
		},
		"../react/pages/analytics/eos/resources/tracking.ts": function(F, y, t) {
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
		"../react/pages/blocked-content/constants.ts": function(F, y, t) {
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
					return i
				},
				Wk: function() {
					return d
				},
				_V: function() {
					return c
				},
				c5: function() {
					return _
				},
				om: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				a = t("../react/pages/blocked-content/types.ts");

			function u(h) {
				for (var w = 1; w < arguments.length; w++) {
					var E = arguments[w] != null ? Object(arguments[w]) : {},
						f = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(E).filter(function(O) {
						return Object.getOwnPropertyDescriptor(E, O).enumerable
					})), f.forEach(function(O) {
						s(h, O, E[O])
					})
				}
				return h
			}

			function s(h, w, E) {
				return w = m(w), w in h ? Object.defineProperty(h, w, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[w] = E, h
			}

			function m(h) {
				var w = l(h, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function l(h, w) {
				if (typeof h != "object" || h === null) return h;
				var E = h[Symbol.toPrimitive];
				if (E !== void 0) {
					var f = E.call(h, w || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(h)
			}
			const c = "blocked-content-table-tooltip",
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
				i = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				_ = {
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
					filters: Object.values(a.GH).reduce((h, w) => u({}, h, {
						[w]: w
					}), {})
				};
			let p = function(h) {
				return h.COPY_URL = "copy blocked content url", h.REQUEST_REVIEW = "request blocked content review", h.ADD_FILTER = "Add filter", h.REMOVE_FILTER = "Remove filter", h
			}({})
		},
		"../react/pages/blocked-content/types.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return e
				},
				GH: function() {
					return s
				},
				Ib: function() {
					return a
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
			let e = function(c) {
					return c.Pending = "pending", c.Active = "active", c
				}({}),
				r = function(c) {
					return c.Active = "active", c.InReview = "in_review", c.Pending = "pending", c.Cancelled = "cancelled", c
				}({});
			const a = [r.Pending, r.Cancelled],
				u = [r.Active, r.InReview];
			let s = function(c) {
					return c.Domain = "domain", c.Status = "status", c.BlockType = "blockType", c
				}({}),
				m = function(c) {
					return c.CreatedDate = "created", c.EnforcementDate = "enforcementDate", c.BlockType = "blockType", c.Hostname = "hostname", c.Status = "status", c
				}({}),
				l = function(c) {
					return c.Removed = "removed", c.Misclassified = "misclassified", c
				}({})
		},
		"../react/pages/caching/tracking.tsx": function(F, y, t) {
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
		"../react/pages/d1/routes.ts": function(F, y, t) {
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
		"../react/pages/dns/api.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BI: function() {
					return w
				},
				Q8: function() {
					return i
				},
				YJ: function() {
					return _
				},
				hs: function() {
					return g
				},
				mW: function() {
					return p
				},
				u1: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function u(E) {
				for (var f = 1; f < arguments.length; f++) {
					var O = arguments[f] != null ? Object(arguments[f]) : {},
						v = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(O).filter(function(C) {
						return Object.getOwnPropertyDescriptor(O, C).enumerable
					})), v.forEach(function(C) {
						s(E, C, O[C])
					})
				}
				return E
			}

			function s(E, f, O) {
				return f = m(f), f in E ? Object.defineProperty(E, f, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[f] = O, E
			}

			function m(E) {
				var f = l(E, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function l(E, f) {
				if (typeof E != "object" || E === null) return E;
				var O = E[Symbol.toPrimitive];
				if (O !== void 0) {
					var v = O.call(E, f || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(E)
			}
			const c = {
					settings: (0, a.BC)`/zones/${"zoneId"}/dns_settings`
				},
				g = {
					fetchZoneDnsSettings: async E => {
						try {
							return (await (0, e.get)(c.settings.toUrl({
								zoneId: E
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (f) {
							throw f
						}
					},
					patchZoneDnsSettings: async (E, f) => await (0, e.patch)(c.settings.toUrl({
						zoneId: E
					}), {
						body: f
					})
				},
				n = {
					settings: (0, a.BC)`/accounts/${"accountId"}/dns_settings`
				},
				o = {
					fetchAccountDnsSettings: async E => {
						try {
							return (await (0, e.get)(n.settings.toUrl({
								accountId: E
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (f) {
							throw f
						}
					},
					patchAccountDnsSettings: async (E, f) => await (0, e.patch)(n.settings.toUrl({
						accountId: E
					}), {
						body: f
					})
				},
				i = {
					dns_records: (0, a.BC)`/zones/${"zoneId"}/dns_records`,
					batch: (0, a.BC)`/zones/${"zoneId"}/dns_records/batch`
				},
				_ = {
					getMaxRecords: async (E, f, O, v, C) => {
						var A;
						return (A = (await (0, e.get)(i.dns_records.toUrl({
							zoneId: E
						}), {
							parameters: u({
								per_page: f
							}, v ? {
								search: v
							} : {}, C || {}, O)
						})).body) === null || A === void 0 ? void 0 : A.result
					},
					deleteRecords: async (E, f) => await (0, e.post)(i.batch.toUrl({
						zoneId: E
					}), {
						body: {
							deletes: f
						}
					}),
					patchRecords: async (E, f) => await (0, e.post)(i.batch.toUrl({
						zoneId: E
					}), {
						body: {
							patches: f
						}
					})
				},
				d = {
					custom_ns: (0, a.BC)`/zones/${"zoneId"}/custom_ns`,
					zone: (0, a.BC)`/zones/${"zoneId"}`
				},
				p = {
					fetchZoneCustomNs: async E => {
						try {
							return (await (0, e.get)(d.custom_ns.toUrl({
								zoneId: E
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (f) {
							throw f
						}
					},
					fetchZoneVanityNameservers: async E => {
						try {
							return (await (0, e.get)(d.zone.toUrl({
								zoneId: E
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (f) {
							throw f
						}
					},
					createZoneCustomNameserver: async (E, f) => await (0, e.patch)(d.zone.toUrl({
						zoneId: E
					}), {
						body: {
							vanity_name_servers: f
						}
					}),
					assignZoneCustomNsSet: async (E, f) => await (0, e.put)(d.custom_ns.toUrl({
						zoneId: E
					}), {
						body: {
							enabled: !0,
							ns_set: f
						}
					}),
					disableZoneCustomNs: async E => await (0, e.put)(d.custom_ns.toUrl({
						zoneId: E
					}), {
						body: {
							enabled: !1
						}
					})
				},
				h = {
					custom_ns: (0, a.BC)`/accounts/${"accountId"}/custom_ns`,
					delete: (0, a.BC)`/accounts/${"accountId"}/custom_ns/${"nsName"}`
				},
				w = {
					fetchAccounCustomNs: async E => {
						try {
							return (await (0, e.get)(h.custom_ns.toUrl({
								accountId: E
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (f) {
							throw f
						}
					},
					createAccountCustomNs: async (E, f) => await (0, e.post)(h.custom_ns.toUrl({
						accountId: E
					}), {
						body: f
					}),
					deleteAccountCustomNs: async (E, f) => await (0, e.del)(h.delete.toUrl({
						accountId: E,
						nsName: f
					}))
				}
		},
		"../react/pages/dns/dns-records/tracking.ts": function(F, y, t) {
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
		"../react/pages/dns/hooks/useZoneDnsSettings.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				c: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/app/redux/index.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/pages/dns/api.ts");
			const s = "dns-zone-settings-query-key",
				m = () => {
					var l;
					const c = (0, e.useQueryClient)(),
						g = (0, r.p4)(a.nA),
						n = (l = g == null ? void 0 : g.id) !== null && l !== void 0 ? l : "",
						{
							data: o,
							isError: i,
							isLoading: _,
							refetch: d
						} = (0, e.useQuery)([n, s], () => u.hs.fetchZoneDnsSettings(n), {
							enabled: !!n,
							refetchOnWindowFocus: !1
						}),
						{
							mutate: p,
							isLoading: h,
							isSuccess: w,
							isError: E
						} = (0, e.useMutation)({
							mutationFn: f => u.hs.patchZoneDnsSettings(n, f),
							onSuccess: async () => await c.refetchQueries({
								queryKey: [n, s]
							})
						});
					return {
						zoneDnsData: o,
						isError: i,
						isLoading: _,
						isSuccess: w,
						refetch: d,
						mutateZoneDnsSettings: p,
						isUpdating: h,
						isUpdateError: E
					}
				}
		},
		"../react/pages/dns/types.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
					return a
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
			let a = function(m) {
					return m.NAME = "queryName", m.RESPONSE_CODE = "responseCode", m.TYPE = "queryType", m.SOURCE_IP = "sourceIP", m.DESTINATION_IP = "destinationIP", m.PROTOCOL = "protocol", m.IP_VERSION = "ipVersion", m.NAME_AND_TYPE = "nameAndType", m.QUERY_TOTALS = "queryTotals", m.COLO = "coloName", m
				}({}),
				u = function(m) {
					return m.TOTAL = "total", m.PER_SECOND = "queries_per_second", m.RESPONSE_AVG = "response_average", m
				}({}),
				s = function(m) {
					return m.MNAME = "soa.mname", m.RNAME = "soa.rname", m.REFRESH = "soa.refresh", m.RETRY = "soa.retry", m.EXPIRE = "soa.expire", m.RECORD_TTL = "soa.ttl", m.MIN_TTL = "soa.min_ttl", m
				}({})
		},
		"../react/pages/email/types.ts": function(F, y, t) {
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
			let a = function(s) {
				return s[s.Verified = 0] = "Verified", s[s.Pending = 1] = "Pending", s[s.Missing = 2] = "Missing", s[s.WorkerNotFound = 3] = "WorkerNotFound", s[s.Unknown = 4] = "Unknown", s[s.Loading = 5] = "Loading", s
			}({});
			const u = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return C
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/pages/home/alerts/routes.ts");
			const a = r._.createAlertWithSelection,
				u = r._.editAlert,
				s = (0, e.BC)`${a}/subtype`,
				m = (0, e.BC)`${a}/stepper`,
				l = (0, e.BC)`${m}/${"stepName"}`,
				c = (0, e.BC)`${m}/details`,
				g = (0, e.BC)`${m}/data-centers`,
				n = (0, e.BC)`${m}/ramps`,
				o = (0, e.BC)`${m}/threshold`,
				i = (0, e.BC)`${m}/review`,
				_ = (0, e.BC)`${m}/confirm`,
				d = (0, e.BC)`${u}/stepper`,
				p = (0, e.BC)`${d}/${"stepName"}`,
				h = (0, e.BC)`${d}/details`,
				w = (0, e.BC)`${d}/data-centers`,
				E = (0, e.BC)`${d}/ramps`,
				f = (0, e.BC)`${d}/threshold`,
				O = (0, e.BC)`${d}/review`,
				v = (0, e.BC)`${d}/confirm`,
				C = {
					magicTunnelHealthChooseSubType: s,
					magicTunnelHealthCreateStepperBase: m,
					magicTunnelHealthCreateStepper: l,
					magicTunnelHealthCreateDetails: c,
					magicTunnelHealthCreateSelectDataCenter: g,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: o,
					magicTunnelHealthCreateReview: i,
					magicTunnelHealthCreateConfirm: _,
					magicTunnelHealthEditStepperBase: d,
					magicTunnelHealthEditStepper: p,
					magicTunnelHealthEditDetails: h,
					magicTunnelHealthEditSelectDataCenter: w,
					magicTunnelHealthEditSelectRamps: E,
					magicTunnelHealthEditSetThreshold: f,
					magicTunnelHealthEditReview: O,
					magicTunnelHealthEditConfirm: v
				};
			y.Z = C
		},
		"../react/pages/home/alerts/config.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				jk: function() {
					return i
				},
				w8: function() {
					return _
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				r = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				a = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				u = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				s = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function m(d) {
				for (var p = 1; p < arguments.length; p++) {
					var h = arguments[p] != null ? Object(arguments[p]) : {},
						w = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(h).filter(function(E) {
						return Object.getOwnPropertyDescriptor(h, E).enumerable
					})), w.forEach(function(E) {
						l(d, E, h[E])
					})
				}
				return d
			}

			function l(d, p, h) {
				return p = c(p), p in d ? Object.defineProperty(d, p, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = h, d
			}

			function c(d) {
				var p = g(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function g(d, p) {
				if (typeof d != "object" || d === null) return d;
				var h = d[Symbol.toPrimitive];
				if (h !== void 0) {
					var w = h.call(d, p || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const n = "Notifications",
				o = "notification",
				i = m({}, e._, r._j, a._j, u._),
				_ = m({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, s.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				_j: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				a = (0, e.BC)`${r}/pagerduty/connect`,
				u = (0, e.BC)`${r}/pagerduty/register`,
				s = (0, e.BC)`${r}/pagerduty`,
				m = {
					pagerDutyConnect: a,
					pagerDutyRegister: u,
					pagerDutyList: s
				};
			var l = null
		},
		"../react/pages/home/alerts/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				u = (0, e.BC)`${a}/destinations`,
				s = (0, e.BC)`${a}/create`,
				m = (0, e.BC)`${s}/${"alertType"}`,
				l = (0, e.BC)`${a}/edit/${"alertId"}`,
				c = {
					account: r,
					alerts: a,
					destinations: u,
					createAlert: s,
					createAlertWithSelection: m,
					editAlert: l
				};
			y.Z = c
		},
		"../react/pages/home/alerts/tracking.ts": function(F, y, t) {
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
		"../react/pages/home/audit-log/tracking.ts": function(F, y, t) {
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
		"../react/pages/home/configurations/dns-settings/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Aj: function() {
					return m
				},
				Am: function() {
					return g
				},
				Jy: function() {
					return E
				},
				Mv: function() {
					return _
				},
				WI: function() {
					return w
				},
				Wu: function() {
					return l
				},
				b8: function() {
					return c
				},
				cC: function() {
					return f
				},
				e7: function() {
					return p
				},
				gH: function() {
					return o
				},
				hV: function() {
					return d
				},
				nN: function() {
					return n
				},
				uC: function() {
					return h
				}
			});
			var e = t("../react/pages/dns/types.ts");

			function r(A) {
				for (var D = 1; D < arguments.length; D++) {
					var M = arguments[D] != null ? Object(arguments[D]) : {},
						j = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(M).filter(function(T) {
						return Object.getOwnPropertyDescriptor(M, T).enumerable
					})), j.forEach(function(T) {
						a(A, T, M[T])
					})
				}
				return A
			}

			function a(A, D, M) {
				return D = u(D), D in A ? Object.defineProperty(A, D, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[D] = M, A
			}

			function u(A) {
				var D = s(A, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function s(A, D) {
				if (typeof A != "object" || A === null) return A;
				var M = A[Symbol.toPrimitive];
				if (M !== void 0) {
					var j = M.call(A, D || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(A)
			}
			const m = ["hmac-sha512.", "hmac-sha256.", "hmac-sha1."],
				l = ["198.41.144.240/28", "198.41.150.240/28", "2a06:98c0:3601::/48", "2a06:98c0:1401::/48"],
				c = ["172.65.30.82", "172.65.50.145", "2606:4700:60:0:317:26ee:3bdf:5774", "2606:4700:60:0:35a:4be3:4144:c5ee"],
				g = "172.65.64.6",
				n = 86400,
				o = "inlineTsigCreation",
				i = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
				_ = /[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
				d = r({
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
			let h = function(A) {
				return A.STANDARD = "standard", A.DNS_ONLY = "dns_only", A.CDN_ONLY = "cdn_only", A
			}({});
			const w = {
					foundation_dns: !1,
					multi_provider: !1,
					nameservers: {
						type: e.DU.STANDARD
					},
					ns_ttl: 86400,
					secondary_overrides: !1,
					zone_mode: h.STANDARD,
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
				E = {
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
				f = {
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
				v = {
					ACNS_CARD: "account-custom-nameserver-card",
					ACNS_DELETE: "account-custom-nameserver-card-delete",
					ACNS_CONFIGURE: "account-custom-nameserver-card-configure",
					ACNS_MODAL_INPUT: "account-custom-nameserver-modal-input",
					ACNS_MODAL_RADIO: "account-custom-nameserver-modal-input"
				},
				C = {
					FORM: "account-custom-ns-form",
					NS_SET: "ns_set",
					NS_NAME: "ns_name"
				}
		},
		"../react/pages/home/configurations/dns-settings/isZoneDNSOnly.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				s: function() {
					return l
				}
			});
			var e = t("../react/common/selectors/entitlementsSelectors.ts"),
				r = t("../react/pages/home/configurations/dns-settings/selectors.ts"),
				a = t("../react/pages/dns/hooks/useZoneDnsSettings.ts"),
				u = t("../react/pages/home/configurations/dns-settings/constants.ts"),
				s = t("../react/common/hooks/useScope.tsx"),
				m = t("../react/app/redux/index.ts");
			const l = g => {
					const n = (0, e.yD)(g),
						o = (0, r.Hb)(g);
					return n || o
				},
				c = () => {
					const g = useSelector(zoneIsDNSOnly),
						{
							isZoneScope: n
						} = useScope(),
						{
							zoneDnsData: o
						} = useZoneDnsSettings(),
						i = (o == null ? void 0 : o.zone_mode) === ZONE_MODES.DNS_ONLY;
					return {
						isZoneDNSEntitlementDNSOnly: g,
						isZoneSettingsModeDNSOnly: i,
						isZoneDNSOnly: n ? g || i : !1
					}
				}
		},
		"../react/pages/home/configurations/dns-settings/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BJ: function() {
					return s
				},
				Hb: function() {
					return d
				},
				N$: function() {
					return c
				},
				P7: function() {
					return g
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
					return a
				},
				iI: function() {
					return l
				},
				mT: function() {
					return i
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../react/pages/home/configurations/dns-settings/constants.ts");
			const a = p => p.dns.secondaryDNS.acls,
				u = (0, e.P1)("dnsAcl", a),
				s = p => p.dns.secondaryDNS.tsigs,
				m = (0, e.P1)("dnsTsig", s),
				l = p => p.dns.secondaryDNS.masters,
				c = (0, e.P1)("dnsMaster", l),
				g = p => p.dns.secondaryDNS.zoneMasters,
				n = (0, e.P1)("zoneMasters", g),
				o = p => p.dns.secondaryDNS.outgoingZoneTransfers,
				i = (0, e.P1)("dnsOutgoingZoneTransfers", o),
				_ = p => {
					var h;
					return (h = p.dns.zoneDnsSettings) === null || h === void 0 ? void 0 : h.data
				},
				d = p => {
					var h, w;
					return ((h = p.dns.zoneDnsSettings) === null || h === void 0 || (w = h.data) === null || w === void 0 ? void 0 : w.zone_mode) === r.uC.DNS_ONLY
				}
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(F, y, t) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(F, y, t) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AA: function() {
					return K
				},
				AN: function() {
					return rt
				},
				AY: function() {
					return pe
				},
				Ac: function() {
					return yt
				},
				Am: function() {
					return w
				},
				B2: function() {
					return B
				},
				BB: function() {
					return M
				},
				BF: function() {
					return fe
				},
				BQ: function() {
					return Ze
				},
				E8: function() {
					return Me
				},
				Fl: function() {
					return Ie
				},
				Fu: function() {
					return R
				},
				Gc: function() {
					return Ve
				},
				Hc: function() {
					return Ut
				},
				IO: function() {
					return Et
				},
				JK: function() {
					return Ye
				},
				K: function() {
					return C
				},
				LI: function() {
					return xt
				},
				LX: function() {
					return Q
				},
				L_: function() {
					return G
				},
				Ly: function() {
					return Xe
				},
				MR: function() {
					return L
				},
				Mj: function() {
					return J
				},
				NB: function() {
					return Lt
				},
				Oe: function() {
					return zt
				},
				Or: function() {
					return ie
				},
				P5: function() {
					return Ct
				},
				PE: function() {
					return he
				},
				Pd: function() {
					return Ot
				},
				Pk: function() {
					return Pe
				},
				Pp: function() {
					return xe
				},
				Q1: function() {
					return T
				},
				Qr: function() {
					return se
				},
				Qv: function() {
					return De
				},
				Rp: function() {
					return Pt
				},
				S7: function() {
					return Tt
				},
				Sh: function() {
					return Re
				},
				Sl: function() {
					return $t
				},
				TZ: function() {
					return N
				},
				Tg: function() {
					return ze
				},
				Tp: function() {
					return Ke
				},
				Uy: function() {
					return kt
				},
				Vw: function() {
					return P
				},
				W3: function() {
					return gt
				},
				WR: function() {
					return ct
				},
				WX: function() {
					return de
				},
				XF: function() {
					return vt
				},
				Xb: function() {
					return k
				},
				Zs: function() {
					return We
				},
				_f: function() {
					return Te
				},
				b4: function() {
					return ae
				},
				bc: function() {
					return Rt
				},
				c2: function() {
					return I
				},
				cE: function() {
					return Bt
				},
				dh: function() {
					return Ue
				},
				fE: function() {
					return Ce
				},
				g7: function() {
					return ne
				},
				hO: function() {
					return dt
				},
				hV: function() {
					return St
				},
				hk: function() {
					return E
				},
				hr: function() {
					return H
				},
				it: function() {
					return ot
				},
				j3: function() {
					return jt
				},
				jN: function() {
					return ke
				},
				jo: function() {
					return Mt
				},
				k3: function() {
					return wt
				},
				m8: function() {
					return W
				},
				nm: function() {
					return Qe
				},
				oW: function() {
					return Y
				},
				pH: function() {
					return z
				},
				pi: function() {
					return re
				},
				r4: function() {
					return Kt
				},
				rI: function() {
					return U
				},
				s7: function() {
					return ht
				},
				sg: function() {
					return it
				},
				tB: function() {
					return p
				},
				tN: function() {
					return me
				},
				u_: function() {
					return Ft
				},
				vV: function() {
					return je
				},
				vc: function() {
					return Be
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				a = t("../../../../node_modules/moment/moment.js"),
				u = t.n(a),
				s = t("../../../common/util/types/src/api/domain.ts"),
				m = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				l = t("../react/utils/url.ts"),
				c = t("../react/pages/home/domain-registration/config.ts"),
				g = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function o(b) {
				for (var S = 1; S < arguments.length; S++) {
					var ge = arguments[S] != null ? Object(arguments[S]) : {},
						we = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && we.push.apply(we, Object.getOwnPropertySymbols(ge).filter(function(Fe) {
						return Object.getOwnPropertyDescriptor(ge, Fe).enumerable
					})), we.forEach(function(Fe) {
						i(b, Fe, ge[Fe])
					})
				}
				return b
			}

			function i(b, S, ge) {
				return S = _(S), S in b ? Object.defineProperty(b, S, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[S] = ge, b
			}

			function _(b) {
				var S = d(b, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function d(b, S) {
				if (typeof b != "object" || b === null) return b;
				var ge = b[Symbol.toPrimitive];
				if (ge !== void 0) {
					var we = ge.call(b, S || "default");
					if (typeof we != "object") return we;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(b)
			}

			function p(b) {
				return b.filter(S => S.isSelected).reduce((S, {
					name: ge,
					fees: we,
					isZoneEntitlementPresent: Fe
				}) => Fe || !(0, e.isNumber)(we == null ? void 0 : we.transfer_fee) ? S : yt(ge) ? S + (we == null ? void 0 : we.transfer_fee) * 2 : S + (we == null ? void 0 : we.transfer_fee), 0)
			}

			function h(b) {
				return b.filter(S => S.registrar.toLowerCase() === "godaddy")
			}
			const w = "MMM D, YYYY";

			function E(b, S, ge, we) {
				var Fe, ce, le, ve, _e, Oe, $e, He, st, Je, qe, ut;
				const Ge = b[S.name],
					pt = () => yt(S.name) ? u()(S.expires_at).add(2, "years").format(w) : u()(S.expires_at).add(1, "year").format(w);
				return o({
					name: S == null ? void 0 : S.name,
					zone: Ge,
					entitlements: ge,
					registryCheck: we,
					nameservers: S.name_servers,
					isAvailable: S.available,
					lastKnownStatus: S.last_known_status,
					authCode: S.auth_code,
					isEnterpriseZone: (Ge == null || (Fe = Ge.plan) === null || Fe === void 0 ? void 0 : Fe.legacy_id) === "enterprise",
					isActiveZone: (Ge == null ? void 0 : Ge.status) === "active",
					corResponsesPending: S.cor_responses_pending,
					isCorLocked: S.cor_locked,
					corLockedUntil: S.cor_locked_until ? u()(S.cor_locked_until).format(w) : null,
					isFullZone: (Ge == null ? void 0 : Ge.type) == n.xd.Full,
					isLocked: S.locked,
					registrar: S.current_registrar || c.JM,
					zoneId: Ge == null ? void 0 : Ge.id,
					currentExpiration: u()(S.expires_at).format(w),
					newExpiration: pt(),
					lastEntitledAt: S.last_entitled_at ? new Date(S.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(ge) && !!ge.find(et => et.id === c.g5 && et.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: S.transfer_in && v(S.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: S.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: S.transfer_in,
					transferOut: S.transfer_out,
					autoRenew: S.auto_renew === !0,
					lastTransferredAt: S.last_transferred_at,
					createdAt: S.created_at,
					paymentExpiresAt: u()(S.payment_expires_at).isValid() ? u()(S.payment_expires_at) : u()(S.expires_at).isValid() ? u()(S.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (ce = S.contacts) === null || ce === void 0 || (le = ce.administrator) === null || le === void 0 ? void 0 : le.id,
						[n.l2.Billing]: (ve = S.contacts) === null || ve === void 0 || (_e = ve.billing) === null || _e === void 0 ? void 0 : _e.id,
						[n.l2.Registrant]: (Oe = S.contacts) === null || Oe === void 0 || ($e = Oe.registrant) === null || $e === void 0 ? void 0 : $e.id,
						[n.l2.Technical]: (He = S.contacts) === null || He === void 0 || (st = He.technical) === null || st === void 0 ? void 0 : st.id
					},
					landing: S.landing,
					privacy: S.privacy,
					whois: S.whois,
					emailVerified: S.email_verified,
					materialChanges: A(S.material_changes),
					corChanges: S.cor_changes ? M(Object.assign(o({}, O), S.cor_changes)) : {},
					registryStatuses: S.registry_statuses ? S.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Je = S.domain_protection_services) === null || Je === void 0 ? void 0 : Je.status
					},
					deletion: {
						isDeletable: S == null || (qe = S.deletion) === null || qe === void 0 ? void 0 : qe.is_deletable
					},
					premiumType: S == null ? void 0 : S.premium_type,
					fees: S == null ? void 0 : S.fees
				}, S.domain_move && {
					domainMove: {
						ineligibilityReasons: (ut = S.domain_move) === null || ut === void 0 ? void 0 : ut.ineligibility_reasons
					}
				}, S.actionable_metadata && {
					actionableMetadata: f(S.actionable_metadata)
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

			function f(b) {
				return b.map(S => ({
					accountContext: S.account_context,
					createdAt: S.created_at,
					expiresAt: S.expires_at,
					sentAt: S.sent_at,
					status: S.status,
					type: S.type
				}))
			}
			const O = {
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

			function v(b) {
				switch (b.enter_auth_code) {
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

			function C(b) {
				let S = b.extensions;
				((S == null ? void 0 : S.application_purpose) && (S == null ? void 0 : S.nexus_category) || (S == null ? void 0 : S.ca_legal_type)) && (b.extensions = o({}, (S == null ? void 0 : S.nexus_category) && {
					nexusCategory: S.nexus_category
				}, (S == null ? void 0 : S.application_purpose) && {
					applicationPurpose: S.application_purpose
				}, (S == null ? void 0 : S.ca_legal_type) && {
					ca_legal_type: S.ca_legal_type
				}));
				let ge = o({}, typeof b.id == "string" ? {
					id: b.id
				} : {}, {
					first_name: b.firstName,
					organization: b.organization,
					address: b.address1,
					city: b.city,
					state: b.state || "N/A",
					zip: b.zip,
					country: b.country,
					phone: b.phone,
					email: b.email,
					fax: "",
					last_name: b.lastName,
					address2: b.address2,
					email_verified: b.emailVerified
				}, b.extensions ? {
					extensions: o({}, b.extensions.nexusCategory && {
						nexus_category: b.extensions.nexusCategory
					}, b.extensions.applicationPurpose && {
						application_purpose: b.extensions.applicationPurpose
					}, b.extensions.ca_legal_type && {
						ca_legal_type: b.extensions.ca_legal_type
					})
				} : {});
				return nt(ge)
			}

			function A(b) {
				let S = [];
				const ge = {
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
				for (const we in b) {
					const Fe = b[we],
						ce = ge[Fe];
					S.push(ce)
				}
				return S
			}
			const D = b => {
				if (!b) return null;
				let S = b;
				return b.includes("C31") && (S = "C31"), b.includes("C32") && (S = "C32"), S
			};

			function M(b) {
				return o({}, typeof b.id == "string" ? {
					id: b.id
				} : {}, {
					firstName: b.first_name,
					organization: b.organization,
					address1: b.address,
					city: b.city,
					state: b.state,
					zip: b.zip,
					country: b.country,
					phone: b.phone.trim(),
					email: b.email.trim(),
					lastName: b.last_name,
					address2: b.address2,
					emailVerified: b.email_verified
				}, b.extensions ? {
					extensions: o({}, b.extensions.nexus_category && {
						nexusCategory: D(b.extensions.nexus_category)
					}, b.extensions.application_purpose && {
						applicationPurpose: b.extensions.application_purpose
					}, b.extensions.ca_legal_type && {
						ca_legal_type: b.extensions.ca_legal_type
					})
				} : {})
			}

			function j(b = {}) {
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
						}, b.zone && b.zone.plan || {}),
						type: EZoneType.Full
					}, b.zone || {}),
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
					}, b.transferConditions || {}),
					transferIn: o({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, b.transferIn || {}),
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
				return Object.assign(S, b)
			}

			function T(b = {}) {
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
				}, b)
			}

			function R(b) {
				const S = c.Py.concat(c.ui).reduce((ge, we) => o({}, ge, {
					[we]: []
				}), {});
				return b.forEach(ge => {
					let we = x(ge.registrar);
					we in S || (we = c.ui), it(ge.name) && (we = "uk"), S[we].push(ge)
				}), Object.keys(S).sort((ge, we) => ge.localeCompare(we)).map(ge => ({
					registrar: ge,
					domains: S[ge]
				})).filter(ge => ge.domains.length > 0)
			}

			function x(b) {
				return b == null ? void 0 : b.toLowerCase().replace(/\s|,|\./g, "")
			}

			function P(b) {
				if (!b || !b.registrar) return "unknown";
				if (it(b.name)) return "uk";
				const S = x(b.registrar);
				return S in c.gM ? S : "unknown"
			}
			const V = [];

			function ee(b) {
				return V.some(S => b.endsWith("." + S))
			}

			function q(b) {
				return !b.isEnterpriseZone || !Array.isArray(b.entitlements) ? !1 : !!b.entitlements.find(({
					id: S,
					allocation: ge
				}) => S === c.g5 && ge.value === !0)
			}

			function re(b) {
				var S;
				const ge = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let we = !1,
					Fe = null;
				return (S = b.registryStatuses) === null || S === void 0 || S.some(ce => {
					ge.includes(ce) && (Fe = ce, we = !0)
				}), [we, Fe]
			}

			function W(b, S = !1) {
				if (!b) return [!1, g.keys.cannot_transfer_default];
				if (b.zone.status !== "active") return [!1, g.keys.cannot_transfer_zone_not_active];
				if (!b.isFullZone && !q(b)) return [!1, g.keys.cannot_transfer_zone_not_eligible];
				if (b.registrar === "Cloudflare") return [!1, g.keys.cannot_transfer_domain_on_cf];
				if (b.isAvailable) return [!1, g.keys.cannot_transfer_domain_available];
				if (!b.transferConditions) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (!S && kt(b == null ? void 0 : b.premiumType)) return [!1, g.keys.cannot_transfer_domain_premium];
				if (z(b)) return [!1, g.keys.cannot_transfer_domain_transfer_in_progress];
				let ge;
				for (ge in b.transferConditions)
					if (ge !== "not_premium" && !b.transferConditions[ge]) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (ee(b.name)) return [!1, g.keys.cannot_transfer_domain_tld_not_supported];
				const [we, Fe] = re(b);
				return we && Fe ? [!1, g.keys.cannot_transfer_domain_registry_status[Fe]] : [!0, ""]
			}

			function z(b) {
				var S, ge;
				return !!b.transferIn && !((S = b.transferConditions) === null || S === void 0 ? void 0 : S.not_started) && !!(it(b.name) || ((ge = b.registryStatuses) === null || ge === void 0 ? void 0 : ge.includes(n.rj.PENDING_TRANSFER)))
			}

			function X(b) {
				return !!b.registrar && !!b.currentExpiration
			}

			function B(b, S = !1) {
				const [ge] = W(b, S);
				return X(b) ? Ee(b) ? n.M5.InProgressOrOnCF : ge ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function I(b) {
				return b.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(b.transferIn.enter_auth_code) || !1
			}

			function L(b) {
				return b.registrar === "Cloudflare"
			}

			function U(b) {
				return !!(b == null ? void 0 : b.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function J(b) {
				return !!(b == null ? void 0 : b.includes(n.rj.PENDING_TRANSFER))
			}
			const te = "Invalid date";

			function ie(b) {
				return b.newExpiration === te ? !1 : b.newExpiration
			}

			function N(b) {
				return b.currentExpiration === te ? !1 : b.currentExpiration
			}

			function K(b) {
				return b.substring(b.indexOf("."))
			}

			function k(b = "") {
				return b.indexOf(".") !== -1 ? b.substring(0, b.indexOf(".")) : b
			}

			function H(b) {
				return b.map(S => S.name).map(S => K(S)).filter((S, ge, we) => !we.includes(S, ge + 1))
			}

			function ae(b) {
				if (c.no) return [!0, ""];
				if (!L(b)) return [!1, n.ok.NotOnCF];
				if (b.isCorLocked) return [!1, b.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (b.lastTransferredAt) {
					const S = u()(b.lastTransferredAt),
						ge = u().duration(u()().diff(S)).as("days"),
						we = it(b.name);
					if (ge < (we ? 1 : 60)) return [!1, we ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (b.createdAt) {
					const S = u()(b.createdAt);
					if (u().duration(u()().diff(S)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function de(b) {
				return !!(c.Bc || b.transferOut)
			}

			function Ee(b) {
				return ne(b) || L(b)
			}

			function me(b) {
				return !ne(b) && L(b)
			}

			function ne(b) {
				return !b || b.lastKnownStatus === n.kd.PENDING_TRANSFER || b.lastKnownStatus === n.kd.TRANSFER_FOA_PENDING || !L(b) && b.transferConditions && !b.transferConditions.not_started || !1
			}

			function he(b) {
				return !(ee(b.name) || b.transferConditions && !b.transferConditions.supported_tld)
			}

			function De(b) {
				return (b == null ? void 0 : b.includes("/")) ? !0 : b.split("").some(S => S.charCodeAt(0) > 123)
			}

			function Pe(b) {
				switch (b) {
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

			function Be(b) {
				return u()(b.paymentExpiresAt).isBefore(u()())
			}

			function ke(b) {
				return b.transferIn && b.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function Ye(b) {
				const S = ["CU", "KP", "IR", "SY"];
				return b.filter(ge => !S.includes(ge.code))
			}

			function ze(b) {
				if (!!b) return `${b.charAt(0).toUpperCase()}${b.slice(1)}${b.charAt(b.length-1)==="."?"":"."}`
			}

			function nt(b) {
				const S = {};
				for (const [ge, we] of Object.entries(b)) {
					if (we && typeof we == "string") {
						Object.assign(S, {
							[ge]: we.trim()
						});
						continue
					}
					Object.assign(S, {
						[ge]: we
					})
				}
				return S
			}

			function We(b) {
				return u()(b).add(40, "days")
			}

			function G(b) {
				const S = b.paymentExpiresAt || b.payment_expires_at,
					ge = We(S);
				return u()().isBetween(S, ge)
			}

			function Ce(b) {
				var S;
				return !(b == null ? void 0 : b.registryStatuses) || !Array.isArray(b == null ? void 0 : b.registryStatuses) && !(0, e.isString)(b == null ? void 0 : b.registryStatuses) ? !1 : (S = b.registryStatuses) === null || S === void 0 ? void 0 : S.includes(n.rj.REDEMPTION_PERIOD)
			}

			function Ue(b) {
				var S;
				return !(b == null ? void 0 : b.registryStatuses) || !Array.isArray(b == null ? void 0 : b.registryStatuses) && !(0, e.isString)(b == null ? void 0 : b.registryStatuses) ? !1 : (S = b.registryStatuses) === null || S === void 0 ? void 0 : S.includes(n.rj.PENDING_DELETE)
			}

			function xe(b) {
				return [".us"].includes(b)
			}

			function ot(b) {
				return [".us"].includes(b)
			}

			function dt(b) {
				switch (b) {
					case ".us":
						return at();
					default:
						return []
				}
			}

			function gt(b) {
				switch (b) {
					case ".us":
						return Ae;
					default:
						return {}
				}
			}
			const Ae = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function at() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([b, S]) => ({
						value: b,
						label: S
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([b, S]) => ({
						value: b,
						label: S
					}))
				}]
			}

			function Q(b, S, ge) {
				return S[S.length - 1][ge] === b[ge]
			}

			function se(b) {
				return Boolean(Object.keys(b).length === 0)
			}

			function fe(b) {
				return u()().add(b, "year").format(w)
			}

			function Te({
				accountName: b
			}) {
				var S;
				const ge = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((S = b.toLowerCase().match(ge)) === null || S === void 0 ? void 0 : S[0]) || ""
			}

			function je(b) {
				return !!b.match(m.default.email)
			}

			function Ke(b) {
				return b === s.W7.PENDING_UPDATE
			}

			function Ve(b) {
				return b ? Object.values(s.wR).filter(S => S !== s.wR.OFFBOARDED).includes(b) : !1
			}

			function ht(b) {
				return b ? [s.wR.LOCKED, s.wR.ONBOARDED, s.wR.ONBOARDING_INITIATED, s.wR.PENDING_REGISTRY_LOCK, s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(b) : !1
			}

			function bt(b) {
				return b ? s.wR.UNLOCKED === b : !1
			}

			function ft(b) {
				return b ? s.wR.LOCKED === b : !1
			}

			function xt(b) {
				return b ? s.wR.PENDING_REGISTRY_LOCK === b : !1
			}

			function Ze(b) {
				return b ? [s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(b) : !1
			}

			function Et(b) {
				var S;
				return !1
			}

			function ct(b) {
				var S;
				return !1
			}

			function rt(b) {
				var S;
				return !1
			}

			function vt(b) {
				var S;
				return !1
			}

			function Me(b) {
				var S;
				return !1
			}

			function Y(b) {
				return Object.keys(s.wR).find(S => s.wR[S].toLowerCase() === b.toLowerCase())
			}

			function pe(b) {
				var S;
				const ge = (S = Y(b)) === null || S === void 0 ? void 0 : S.toLowerCase();
				return ge ? g.keys.protection_status[ge] : g.keys.protection_status.unknown
			}

			function be(b) {
				return ["com", "net"].includes(b)
			}

			function Ie(b) {
				const S = (0, l.pu)(b);
				return be(S) ? s.wR.PENDING_REGISTRY_LOCK : s.wR.LOCKED
			}

			function Re(b) {
				return (0, l.pu)(b) === "co" ? 5 : 10
			}

			function Qe(b, S) {
				return S ? 1 : (0, l.pu)(b) === "co" ? 5 : (0, l.pu)(b) === "org" ? 1 : 10
			}

			function it(b) {
				return (0, l.pu)(b) === "uk"
			}

			function Bt(b) {
				return (0, l.pu)(b) === "us"
			}

			function yt(b) {
				return (0, l.pu)(b) === "ai"
			}

			function Pt(b) {
				return u()(b).isValid()
			}

			function Xe(b) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(b)
			}

			function Ct(b) {
				return !!(b == null ? void 0 : b.id)
			}

			function Lt(b) {
				return b ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(b) : !1
			}

			function Ot(b) {
				return b ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(b) : !1
			}

			function St(b) {
				var S;
				return (b == null ? void 0 : b.lastKnownStatus) ? (S = b.lastKnownStatus) === null || S === void 0 ? void 0 : S.includes("deletionIrredeemable") : !1
			}

			function kt(b) {
				switch (b) {
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

			function Ut(b) {
				if (!b || !b.message) return n.OJ.DEFAULT;
				const {
					message: S
				} = b;
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

			function Tt(b) {
				var S, ge;
				return !!(((S = b.policies) === null || S === void 0 || (ge = S.suspension) === null || ge === void 0 ? void 0 : ge.parked) && b.policies.suspension.parkingReason)
			}

			function jt(b) {
				var S, ge;
				return Tt(b) && ((S = b.policies) === null || S === void 0 || (ge = S.suspension) === null || ge === void 0 ? void 0 : ge.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function wt(b) {
				var S, ge;
				return Tt(b) && ((S = b.policies) === null || S === void 0 || (ge = S.suspension) === null || ge === void 0 ? void 0 : ge.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function $t(b) {
				var S;
				return !((S = b.domainMove) === null || S === void 0 ? void 0 : S.ineligibilityReasons.length)
			}

			function zt(b) {
				var S, ge;
				return !!((S = b.domainMove) === null || S === void 0 || (ge = S.ineligibilityReasons) === null || ge === void 0 ? void 0 : ge.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function It(b) {
				var S;
				return (S = b.actionableMetadata) === null || S === void 0 ? void 0 : S.find(ge => ge.type === n.wg.DOMAIN_MOVE)
			}

			function Mt(b) {
				const S = It(b);
				return (S == null ? void 0 : S.status) === "pending" && S.accountContext === n._5.GAINING
			}

			function Ft(b) {
				const S = It(b);
				return (S == null ? void 0 : S.status) === "pending" && S.accountContext === n._5.LOSING
			}

			function Kt(b) {
				const S = K(b.name);
				return !c.Pf.includes(S)
			}

			function Rt(b) {
				return c.QZ.includes(b)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
					return a
				},
				Pf: function() {
					return _
				},
				Py: function() {
					return m
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
					return s
				},
				jk: function() {
					return ne
				},
				kO: function() {
					return p
				},
				no: function() {
					return g
				},
				uY: function() {
					return l
				},
				ui: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../flags.ts");
			const a = "Unknown",
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
				l = !0,
				c = (0, r.J8)("registrar_mock_transfer_out") || !1,
				g = (0, r.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				o = "cf_registrar.enabled",
				i = "@abcABC1234567890123456",
				_ = [".us"],
				d = [".travel", ".us", ".ong", ".ngo"],
				p = ["BR", "CA", "MX", "US"],
				h = (0, e.BC)`/${"accountId"}`,
				w = (0, e.BC)`${h}/add-site`,
				E = (0, e.BC)`${h}/registrar`,
				f = (0, e.BC)`${E}/domains`,
				O = (0, e.BC)`${E}/action-center`,
				v = (0, e.BC)`${E}/domain/${"zoneName"}`,
				C = (0, e.BC)`${v}/configuration`,
				A = (0, e.BC)`${v}/contacts`,
				D = (0, e.BC)`${E}/pricing`,
				M = (0, e.BC)`${E}/protection`,
				j = (0, e.BC)`${E}/register`,
				T = (0, e.BC)`${j}/checkout`,
				R = (0, e.BC)`${j}/checkout/${"token"}`,
				x = (0, e.BC)`${j}/success`,
				P = (0, e.BC)`${E}/tlds`,
				V = (0, e.BC)`${E}/transfer`,
				ee = (0, e.BC)`${E}/transfer/${"zoneName"}`,
				q = (0, e.BC)`/registrar/accounts/verify_email`,
				re = (0, e.BC)`/registrar/domains/verify_email`,
				W = (0, e.BC)`/sign-up/registrar`,
				z = (0, e.BC)`${E}/verify-email`,
				X = (0, e.BC)`${h}/${"zoneName"}`,
				B = (0, e.BC)`${h}/domains`,
				I = (0, e.BC)`${B}/action-center`,
				L = (0, e.BC)`${B}/${"zoneName"}`,
				U = (0, e.BC)`${L}/configuration`,
				J = (0, e.BC)`${L}/contacts`,
				te = (0, e.BC)`${B}/pricing`,
				ie = (0, e.BC)`${B}/protection`,
				N = (0, e.BC)`${B}/register`,
				K = (0, e.BC)`${N}/checkout`,
				k = (0, e.BC)`${N}/checkout/${"token"}`,
				H = (0, e.BC)`${N}/success`,
				ae = (0, e.BC)`${B}/tlds`,
				de = (0, e.BC)`${B}/transfer`,
				Ee = (0, e.BC)`${B}/transfer/${"zoneName"}`,
				me = (0, e.BC)`${B}/verify-email`,
				ne = {
					addSite: w,
					domains: f,
					domainsActionCenter: O,
					domainsDomain: v,
					domainsDomainConfiguration: C,
					domainsDomainContacts: A,
					domainsPricing: D,
					domainsProtection: M,
					domainsRegister: j,
					domainsRegisterCheckout: T,
					domainsRegisterCheckoutToken: R,
					domainsRegisterSuccess: x,
					domainsTlds: P,
					domainsTransfer: V,
					domainsTransferZone: ee,
					registrar: E,
					registrarAccountsVerifyEmail: q,
					registrarDomainsVerifyEmail: re,
					signup: W,
					verifyEmail: z,
					zone: X
				},
				he = {
					LEGACY_domains: B,
					LEGACY_domainsActionCenter: I,
					LEGACY_domainsDomain: L,
					LEGACY_domainsDomainConfiguration: U,
					LEGACY_domainsDomainContacts: J,
					LEGACY_domainsPricing: te,
					LEGACY_domainsProtection: ie,
					LEGACY_domainsRegister: N,
					LEGACY_domainsRegisterCheckout: K,
					LEGACY_domainsRegisterCheckoutToken: k,
					LEGACY_domainsRegisterSuccess: H,
					LEGACY_domainsTlds: ae,
					LEGACY_domainsTransfer: de,
					LEGACY_domainsTransferZone: Ee,
					LEGACY_verifyEmail: me
				},
				De = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				HO: function() {
					return l
				},
				NW: function() {
					return c
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
			const a = g => {
					const n = g && g.accountFlags && g.accountFlags.data && g.accountFlags.data.registrar && g.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(o => o.trim()) : []
				},
				u = g => {
					var n, o, i;
					return ((n = g.accountFlags) === null || n === void 0 || (o = n.data) === null || o === void 0 || (i = o.registrar) === null || i === void 0 ? void 0 : i["registrar-managed"]) || !1
				},
				s = g => g.account ? g.account.email : "",
				m = g => !1,
				l = g => m(g) && (0, e.oJ)((0, e.Zu)(g)),
				c = g => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: o
					} = g.registrar.registrations;
					return n && !(o.accepted_date || o.id || o.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(F, y, t) {
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
				u = t.n(a),
				s = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function m(i) {
				for (var _ = 1; _ < arguments.length; _++) {
					var d = arguments[_] != null ? Object(arguments[_]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(h) {
						return Object.getOwnPropertyDescriptor(d, h).enumerable
					})), p.forEach(function(h) {
						l(i, h, d[h])
					})
				}
				return i
			}

			function l(i, _, d) {
				return _ = c(_), _ in i ? Object.defineProperty(i, _, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[_] = d, i
			}

			function c(i) {
				var _ = g(i, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function g(i, _) {
				if (typeof i != "object" || i === null) return i;
				var d = i[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(i, _ || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(i)
			}
			let n = function(i) {
				return i.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", i.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", i.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", i.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", i.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", i.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", i.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", i.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE = "change canada registrant legal type", i.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", i.RENEW_DOMAIN_COMPLETED = "domain renewal completed", i.RESTORE_DOMAIN_INIT = "click to open domain restore modal", i.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", i.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", i.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", i.RESTORE_DOMAIN_FAILURE = "domain restore failed", i.RESTORE_DOMAIN_COMPLETED = "domain restore completed", i.DOMAIN_DELETE_INIT = "click to begin domain delete", i.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", i.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", i.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", i.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", i.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", i.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", i.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", i.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", i.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", i.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", i.DOMAIN_MOVE_START_FLOW = "Start domain move flow", i.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", i.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", i.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", i.DOMAIN_MOVE_SUBMIT = "Submit domain move", i.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", i.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", i.DOMAIN_MOVE_CANCEL = "Domain move cancel", i.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", i.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", i.ACTION_CENTER_NAVIGATE = "Navigate to actions center", i.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", i.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS = "domain update canada registrant type completed successfully", i.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR = "domain update canada registrant type failed", i
			}({});

			function o(i, _, d) {
				if (!(_ == null ? void 0 : _.name)) return null;
				u().sendEvent(i, m({
					domain: m({
						name: _.name,
						premium: (0, s.Uy)(_ == null ? void 0 : _.premiumType)
					}, (_ == null ? void 0 : _.paymentExpiresAt) && {
						paymentExpiresAt: r()(_ == null ? void 0 : _.paymentExpiresAt).format()
					}),
					category: "registrar"
				}, d))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				HX: function() {
					return l
				},
				Re: function() {
					return E
				},
				Rh: function() {
					return p
				},
				hX: function() {
					return _
				},
				s_: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				s = t("../react/utils/translator.tsx"),
				m = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts");
			let l = function(f) {
				return f.UNKNOWN = "unknown", f.WORKERS = "workers", f.ACCESS_APPS = "access_apps", f.ACCESS_IDP = "access_ipd", f
			}({});
			const c = [{
				value: l.WORKERS,
				label_i18n: "policy.granular_resources.type.workers",
				scopeKeyPrefix: "com.cloudflare.edge.worker.script",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: l.ACCESS_APPS,
				label_i18n: "policy.granular_resources.type.access_apps",
				scopeKeyPrefix: "com.cloudflare.edge.access.app",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: l.ACCESS_IDP,
				label_i18n: "policy.granular_resources.type.access_idp",
				scopeKeyPrefix: "com.cloudflare.edge.access.identity-provider",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}];

			function g(f) {
				return {
					key: "com.cloudflare.edge.worker.script." + f.id,
					name: f.name + (f.environment ? ` (${f.environment})` : ""),
					type: l.WORKERS
				}
			}

			function n(f) {
				const O = f;
				return {
					key: "com.cloudflare.edge.access.app." + O.id,
					name: O.name,
					type: l.ACCESS_APPS
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

			function i(f) {
				const O = f,
					v = o[O.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + O.id,
					name: `${v||"Unknown Type"}${O.name?" - "+O.name:""}`,
					type: l.ACCESS_IDP
				}
			}
			const _ = async (f, O, v) => O == l.WORKERS ? (await d(`/accounts/${f}/workers/scripts-search?name=${v}&perPage=10`)).body.result.map(C => ({
				id: C.id,
				name: C.service_name || C.script_name,
				environment: C.environment_name
			})).map(g) : O == l.ACCESS_APPS ? (await d(`/accounts/${f}/access/apps?name=${v}`)).body.result.map(n) : O == l.ACCESS_IDP ? (await d(`/accounts/${f}/access/identity_providers`)).body.result.map(i) : [];
			async function d(f) {
				try {
					return await (0, e.get)(f, {
						hideErrorAlert: !0
					})
				} catch (C) {
					var O, v;
					throw ((O = C.body) === null || O === void 0 ? void 0 : O.errors) ? C.body.errors[0].message : C.text ? C.text : ((v = C.response) === null || v === void 0 ? void 0 : v.statusText) ? C.response.statusText : "Unexpected error response"
				}
			}
			const p = async (f, O) => {
				const v = O.split("."),
					C = v.pop(),
					A = v.join(".");
				let D;
				switch (A) {
					case "com.cloudflare.edge.worker.script":
						const M = (await d(`/accounts/${f}/workers/scripts-search/${C}`)).body.result;
						return g({
							id: M.id,
							name: M.service_name || M.script_name,
							environment: M.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return D = await d(`/accounts/${f}/access/identity_providers/${C}`), i(D.body.result);
					case "com.cloudflare.edge.access.app":
						return D = await d(`/accounts/${f}/access/apps/${C}`), n(D.body.result)
				}
			}, h = {
				loading: !0,
				isDisabled: !0
			}, w = () => "production";

			function E(f) {
				const [O] = (0, m.k)(f), [v, C] = (0, a.useState)(!0), [A, D] = (0, a.useState)([]);
				return (0, a.useEffect)(() => {
					if (!O) return;
					const M = c.filter(j => O.find(T => T.meta.scopes === j.scopeKeyPrefix)).map(j => {
						const T = j.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							R = O.filter(x => x.meta.scopes === j.scopeKeyPrefix).find(x => !x.meta.visibility || x.meta.visibility !== "beta");
						return {
							value: j.value,
							label: (0, s.ZP)(j.label_i18n),
							state: T ? h : {
								loading: !1,
								isDisabled: !1
							},
							beta: !R
						}
					});
					D(M)
				}, [O]), (0, a.useEffect)(() => {
					(async () => {
						try {
							await _(f, l.ACCESS_APPS, ""), h.isDisabled = !1
						} catch (M) {
							M.startsWith("access.api.error.not_enabled") ? h.disableInfo = (0, s.ZP)("policy.granular_resources.type.access.not_enabled") : h.error = M
						}
						h.loading = !1, D(M => [...M])
					})()
				}, [f]), (0, a.useEffect)(() => {
					const M = A.find(j => j.state.loading);
					C(!!M)
				}, [A]), {
					types: A,
					isLoading: v
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Ey: function() {
					return g
				},
				F4: function() {
					return h
				},
				Go: function() {
					return _
				},
				Lc: function() {
					return C
				},
				Np: function() {
					return o
				},
				Rl: function() {
					return i
				},
				Sb: function() {
					return d
				},
				Sw: function() {
					return v
				},
				Sz: function() {
					return O
				},
				Ti: function() {
					return A
				},
				Uw: function() {
					return E
				},
				Zl: function() {
					return w
				},
				jk: function() {
					return f
				},
				r6: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/members`,
				u = (0, e.BC)`${a}/invite`,
				s = (0, e.BC)`${a}/invite/${"memberId"}`,
				m = (0, e.BC)`${a}/add-policy/${"memberId"}`,
				l = (0, e.BC)`${a}/user-groups`,
				c = (0, e.BC)`${a}/user-groups/${"userGroupId"}`,
				g = "com.cloudflare.api.account",
				o = g + "." + "zone",
				i = o + ".",
				_ = 100,
				d = 200,
				p = 5,
				h = 300,
				w = "INVITE_TOAST",
				E = "00000000000000000000000000000000",
				f = {
					account: r,
					members: a,
					groups: l,
					group: c,
					inviteMembers: u,
					editMember: s,
					addPolicy: m
				},
				O = {
					allow: "allow",
					deny: "deny"
				},
				v = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				C = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				A = {
					accountId: "",
					effect: O.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/sparrowEvents.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Bz: function() {
					return c
				},
				SH: function() {
					return g
				},
				g5: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var i = arguments[o] != null ? Object(arguments[o]) : {},
						_ = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(i).filter(function(d) {
						return Object.getOwnPropertyDescriptor(i, d).enumerable
					})), _.forEach(function(d) {
						u(n, d, i[d])
					})
				}
				return n
			}

			function u(n, o, i) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = i, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var _ = i.call(n, o || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let l = function(n) {
				return n.CLICK_USERGROUP_BETA_BUTTON = "click usergroup beta button", n.MEMBERS_TAB_NAVIGATE = "nagivate members tab", n
			}({});
			const c = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, a({}, o || {}))
				},
				g = () => {
					var n;
					return (n = Object.values(l)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/home/members/utils.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return f
				},
				Co: function() {
					return w
				},
				Hf: function() {
					return M
				},
				JP: function() {
					return E
				},
				LX: function() {
					return R
				},
				Ld: function() {
					return i
				},
				YW: function() {
					return c
				},
				_k: function() {
					return _
				},
				c$: function() {
					return g
				},
				rC: function() {
					return T
				},
				vq: function() {
					return D
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				r = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				a = t("../react/pages/home/members/constants.ts");

			function u(P) {
				for (var V = 1; V < arguments.length; V++) {
					var ee = arguments[V] != null ? Object(arguments[V]) : {},
						q = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(ee).filter(function(re) {
						return Object.getOwnPropertyDescriptor(ee, re).enumerable
					})), q.forEach(function(re) {
						s(P, re, ee[re])
					})
				}
				return P
			}

			function s(P, V, ee) {
				return V = m(V), V in P ? Object.defineProperty(P, V, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[V] = ee, P
			}

			function m(P) {
				var V = l(P, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function l(P, V) {
				if (typeof P != "object" || P === null) return P;
				var ee = P[Symbol.toPrimitive];
				if (ee !== void 0) {
					var q = ee.call(P, V || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(P)
			}
			const c = () => u({}, a.Ti),
				g = () => u({}, a.Lc, {
					scopes: [c()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = P => P.map(V => ({
					scope: {
						key: V,
						objects: [{
							key: "*"
						}]
					}
				})),
				o = (P, V, ee) => {
					var q;
					let re = [],
						W = [];
					const z = [],
						X = [];
					P.scopes.forEach(L => {
						if (L.mode === a.Sw.all) ee ? re.push({
							id: ee
						}) : re.push({
							scope: {
								key: `com.cloudflare.api.account.${V}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (L.mode === a.Sw.domain_group) {
							const J = {
								id: L.resourceGroupId
							};
							L.effect === a.Sz.allow ? re.push(J) : W.push(J)
						} else if (L.mode === a.Sw.zone) {
							const J = `${a.Rl}${L.zoneId}`;
							L.effect === a.Sz.allow ? z.push(J) : X.push(J)
						} else if (L.mode === a.Sw.granular && L.granularResourceKey) {
							var U;
							const J = L.granularProduct,
								ie = `${(U=r.s_.find(N=>N.value===J))===null||U===void 0?void 0:U.scopeSubsetOfPrefix}.${V}`;
							re.push({
								scope: {
									key: `${L.granularResourceKey}`,
									subset_of: [{
										key: `${ie}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), z.length && (re = re.concat(n(z))), X.length && (W = W.concat(n(X)));
					const B = (q = P.permission_groups) === null || q === void 0 ? void 0 : q.map(L => ({
							id: L
						})),
						I = [];
					return I.push({
						access: a.Sz.allow,
						permission_groups: B,
						resource_groups: re
					}), W.length && I.push({
						access: a.Sz.deny,
						permission_groups: B,
						resource_groups: W
					}), I
				},
				i = P => P.map(V => {
					var ee;
					return {
						access: V.access,
						permission_groups: V.permission_groups.map(q => ({
							id: q.id
						})),
						resource_groups: (ee = V.resource_groups) === null || ee === void 0 ? void 0 : ee.map(q => ({
							scope: {
								key: q.scope.key,
								objects: q.scope.objects
							},
							id: q.id
						}))
					}
				}),
				_ = (P, V, ee, q) => {
					const re = P.auto_accept;
					let W = [];
					return W = W.concat(o(P, V, ee)), q && (W = W.concat(i(q))), {
						auto_accept: re,
						status: re ? "accepted" : "pending",
						policies: W
					}
				},
				d = P => {
					const V = P.split(".");
					return V[V.length - 1]
				},
				p = P => {
					var V, ee;
					const q = P == null ? void 0 : P.access;
					let re = [],
						W = P == null || (V = P.resource_groups) === null || V === void 0 ? void 0 : V.map(z => {
							var X;
							const B = h(z);
							if ((z == null || (X = z.meta) === null || X === void 0 ? void 0 : X.editable) === "false") return {
								effect: q,
								mode: a.Sw.all,
								accountId: d(z.id)
							};
							if (B) {
								var I;
								return {
									effect: q,
									mode: a.Sw.granular,
									granularProduct: B.value,
									granularResourceKey: z == null || (I = z.scope) === null || I === void 0 ? void 0 : I.key
								}
							} else if (!z.name) z.scope.key.startsWith(a.Rl) ? re.push({
								key: z.scope.key
							}) : re = re.concat(z.scope.objects);
							else return {
								effect: q,
								mode: a.Sw.domain_group,
								resourceGroupId: d(z.id)
							}
						}).filter(z => z);
					if ((ee = re) === null || ee === void 0 ? void 0 : ee.length) {
						let z = re.map(X => {
							const B = d(X.key);
							return {
								effect: q,
								mode: a.Sw.zone,
								zoneId: B
							}
						});
						W = W.length ? z.concat(W) : z
					}
					return W
				},
				h = P => {
					var V, ee, q, re;
					const W = P == null || (V = P.scope) === null || V === void 0 ? void 0 : V.key.split(".").slice(0, -1).join("."),
						z = P == null || (ee = P.scope) === null || ee === void 0 || (q = ee.subset_of) === null || q === void 0 || (re = q[0]) === null || re === void 0 ? void 0 : re.key.split(".").slice(0, -1).join(".");
					return r.s_.find(X => X.scopeKeyPrefix === W && X.scopeSubsetOfPrefix === z)
				},
				w = P => {
					if (!(P == null ? void 0 : P.length)) return [];
					const V = [];
					return P.forEach(ee => {
						var q;
						(q = ee.resource_groups) === null || q === void 0 || q.forEach(re => {
							var W, z;
							((W = re.scope) === null || W === void 0 || (z = W.key) === null || z === void 0 ? void 0 : z.startsWith(a.Rl)) && V.push(d(re.scope.key))
						})
					}), V
				},
				E = P => {
					if (!(P == null ? void 0 : P.length)) return [];
					const V = [];
					return P.forEach(ee => {
						var q;
						(q = ee.resource_groups) === null || q === void 0 || q.forEach(re => {
							var W, z;
							if (!((W = re.scope) === null || W === void 0 || (z = W.key) === null || z === void 0 ? void 0 : z.startsWith(a.Rl))) {
								var X;
								const I = (X = re.scope) === null || X === void 0 ? void 0 : X.objects;
								for (let L = 0; L < (I == null ? void 0 : I.length) && L < a.r6; L++) {
									var B;
									((B = I[L].key) === null || B === void 0 ? void 0 : B.startsWith(a.Rl)) && V.push(d(I[L].key))
								}
							}
						})
					}), V
				},
				f = P => {
					var V;
					if (!(P == null ? void 0 : P.length)) return null;
					const ee = (V = P[0]) === null || V === void 0 ? void 0 : V.permission_groups.map(z => z.id);
					let q, re;
					P == null || P.forEach(z => {
						z.access === a.Sz.allow && (q = z), z.access === a.Sz.deny && (re = z)
					});
					let W = [];
					return q && (W = p(q)), re && (W = W.concat(p(re))), {
						permission_groups: ee,
						scopes: W
					}
				},
				O = "permission-groups-",
				v = "permission-groups-expiring-",
				C = 1 * 24 * 60 * 60,
				A = new Map,
				D = P => j(O, P),
				M = P => j(v, P),
				j = (P, V) => {
					if (!V) return [];
					const ee = A.get(V);
					if (ee) return ee;
					const q = e.E.get(`${P}${V}`);
					return q ? (A.set(V, q), q) : []
				},
				T = (P, V) => x(O, P, V),
				R = (P, V) => x(v, P, V),
				x = (P, V, ee) => {
					const q = [];
					for (let W = 0; W < sessionStorage.length; W++) {
						const z = sessionStorage.key(W);
						(z == null ? void 0 : z.startsWith(P)) && q.push(z)
					}
					q.length >= 5 && e.E.remove(q[0]);
					let re;
					return P === v && (re = C), e.E.set(`${P}${V}`, ee, re)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(F, y, t) {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(F, y, t) {
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
		"../react/pages/hyperdrive/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return l
				},
				L9: function() {
					return n
				},
				N3: function() {
					return g
				},
				zE: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(o) {
				for (var i = 1; i < arguments.length; i++) {
					var _ = arguments[i] != null ? Object(arguments[i]) : {},
						d = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(_).filter(function(p) {
						return Object.getOwnPropertyDescriptor(_, p).enumerable
					})), d.forEach(function(p) {
						u(o, p, _[p])
					})
				}
				return o
			}

			function u(o, i, _) {
				return i = s(i), i in o ? Object.defineProperty(o, i, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[i] = _, o
			}

			function s(o) {
				var i = m(o, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function m(o, i) {
				if (typeof o != "object" || o === null) return o;
				var _ = o[Symbol.toPrimitive];
				if (_ !== void 0) {
					var d = _.call(o, i || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(o)
			}
			let l = function(o) {
					return o.PURCHASE_WORKERS_PAID = "navigate to workers plan page", o.LIST_CONFIGS = "list hyperdrive configs", o.SEARCH_CONFIGS = "search hyperdrive configs", o.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", o.VIEW_CONFIG_DETAILS = "view hyperdrive config details", o.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", o.UPDATE_ORIGIN_CONN_LIM_SETTINGS = "update hyperdrive config origin connection limit settings", o.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", o.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", o.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", o.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", o.CLICK_QUICK_LINK = "click hyperdrive quick link", o.CLICK_DISCORD = "click hyperdrive discord", o.CLICK_COMMUNITY = "click hyperdrive community", o
				}({}),
				c = function(o) {
					return o[o["connection string"] = 0] = "connection string", o[o.manual = 1] = "manual", o
				}({}),
				g = function(o) {
					return o[o.success = 0] = "success", o[o.failure = 1] = "failure", o
				}({});
			const n = (o, i = {}) => {
				r().sendEvent(o, a({}, i, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				KJ: function() {
					return A
				},
				_m: function() {
					return w
				},
				imagesEndpoints: function() {
					return ne
				},
				vQ: function() {
					return D
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function r(he) {
				for (var De = 1; De < arguments.length; De++) {
					var Pe = arguments[De] != null ? Object(arguments[De]) : {},
						Be = Object.keys(Pe);
					typeof Object.getOwnPropertySymbols == "function" && Be.push.apply(Be, Object.getOwnPropertySymbols(Pe).filter(function(ke) {
						return Object.getOwnPropertyDescriptor(Pe, ke).enumerable
					})), Be.forEach(function(ke) {
						a(he, ke, Pe[ke])
					})
				}
				return he
			}

			function a(he, De, Pe) {
				return De = u(De), De in he ? Object.defineProperty(he, De, {
					value: Pe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : he[De] = Pe, he
			}

			function u(he) {
				var De = s(he, "string");
				return typeof De == "symbol" ? De : String(De)
			}

			function s(he, De) {
				if (typeof he != "object" || he === null) return he;
				var Pe = he[Symbol.toPrimitive];
				if (Pe !== void 0) {
					var Be = Pe.call(he, De || "default");
					if (typeof Be != "object") return Be;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (De === "string" ? String : Number)(he)
			}
			const m = (0, e.BC)`/${"accountId"}/images`,
				l = (0, e.BC)`${m}/images`,
				c = (0, e.BC)`${m}/variants`,
				g = (0, e.BC)`${m}/keys`,
				n = (0, e.BC)`${m}/bundle-checkout-success`,
				o = (0, e.BC)`${l}/${"imageId"}`,
				i = (0, e.BC)`${l}/detail`,
				_ = (0, e.BC)`${l}/edit`,
				d = (0, e.BC)`${c}/create`,
				p = (0, e.BC)`${c}/edit/${"variantId"}`,
				h = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				w = (0, e.BC)`${m}/sourcing-kit`,
				E = (0, e.BC)`${m}/delivery-zones`,
				f = (0, e.BC)`${E}/${"zoneId"}/settings`,
				O = (0, e.BC)`${m}/plans`,
				v = (0, e.BC)`${m}/manage-plan`,
				C = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				A = {
					root: m,
					images: l,
					variants: c,
					keys: g,
					legacyImageDetailPage: o,
					imageDetailPage: i,
					imageEditPage: _,
					bundleCheckoutSuccess: n,
					variantCreatePage: d,
					variantEditPage: p,
					sourcingKit: w,
					subscriptions: h,
					deliveryZones: E,
					deliveryZoneSettings: f,
					plansPage: O,
					managePlan: v
				},
				D = r({}, A, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: C
				}),
				M = (0, e.BC)`/accounts/${"accountId"}`,
				j = (0, e.BC)`${M}/images/v2`,
				T = (0, e.BC)`/zones/${"zoneId"}`,
				R = (0, e.BC)`${j}/sourcingkit`,
				x = (0, e.BC)`${R}/migrations`,
				P = (0, e.BC)`${R}/migrations/${"migrationId"}`,
				V = (0, e.BC)`${R}/migrations/${"migrationId"}/logs`,
				ee = (0, e.BC)`${R}/migrations/${"migrationId"}/lifecycle/start`,
				q = (0, e.BC)`${R}/migrations/${"migrationId"}/lifecycle/abort`,
				re = (0, e.BC)`${R}/migrations/${"migrationId"}/lifecycle`,
				W = (0, e.BC)`${R}/sources`,
				z = (0, e.BC)`${R}/sources/${"sourceId"}`,
				X = (0, e.BC)`${R}/sources/${"sourceId"}/connectivity`,
				B = (0, e.BC)`${R}/sources/connectivity_precheck`,
				I = (0, e.BC)`/zones?account.id=${"accountId"}`,
				L = {
					migrationList: x,
					migration: P,
					migrationLogs: V,
					sourceList: W,
					migrationStart: ee,
					migrationAbort: q,
					migrationProgress: re,
					source: z,
					sourceConnectivityCheck: X,
					sourceConnectivityPreCheck: B
				},
				U = (0, e.BC)`/billing/upgrade-subscription`,
				J = (0, e.BC)`${M}/settings/transformations`,
				te = (0, e.BC)`${T}/settings/transformations`,
				ie = (0, e.BC)`${T}/settings/transformations_allowed_origins`,
				N = (0, e.BC)`${T}/settings/transformations_c2pa`,
				K = (0, e.BC)`${M}/settings/ut-billing`,
				k = (0, e.BC)`${T}`,
				H = (0, e.BC)`${T}/entitlements`,
				ae = (0, e.BC)`${T}/settings`,
				de = (0, e.BC)`${T}/flags`,
				Ee = (0, e.BC)`${T}/subscription`,
				ne = {
					sourcingKitEndpoints: L,
					deliveryZonesEndpoints: {
						transformationsConfigList: J,
						transformationsZoneConfig: te,
						allowedOriginsZoneConfig: ie,
						preserveContentCredentialsZoneConfig: N,
						upgradeSubscription: U,
						utBillingConfig: K
					},
					zones: {
						zones: I,
						zoneDetail: k,
						zoneSettings: ae,
						zoneEntitlements: H,
						zoneFlags: de,
						zoneSubscription: Ee
					}
				}
		},
		"../react/pages/images/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return u
				},
				GH: function() {
					return i
				},
				JZ: function() {
					return d
				},
				aR: function() {
					return n
				},
				db: function() {
					return m
				},
				ib: function() {
					return p
				},
				lW: function() {
					return w
				},
				pT: function() {
					return o
				},
				po: function() {
					return _
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const u = "sourcing_kit_enabled",
				s = "sourcing_kit_waitlist",
				m = "images",
				l = "unified_images_enabled",
				c = "c2pa_polish",
				g = "CloudflareImages",
				n = E => !!(0, r.BF)(E, "images.transformations_enabled"),
				o = E => Boolean((0, r.BF)(E, "images.enabled")),
				i = E => {
					const f = (0, r.BF)(E, "images.storage");
					return typeof f == "number" && f > 0
				},
				_ = E => Boolean((0, r.BF)(E, "contract.customer_enabled")),
				d = E => Boolean((0, e.oI)(E, m, u)),
				p = E => Boolean((0, a.Le)(E, g, u)),
				h = E => Boolean(getAccountFlipperFlag(E, g, l)),
				w = E => Boolean((0, a.Le)(E, g, c))
		},
		"../react/pages/internal-dns/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
				u = "bulk_internal_zones",
				s = "internal-dns",
				m = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_3V6auNfVdQDWthk"
		},
		"../react/pages/internal-dns/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				N3: function() {
					return g
				},
				Rl: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(o) {
				for (var i = 1; i < arguments.length; i++) {
					var _ = arguments[i] != null ? Object(arguments[i]) : {},
						d = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(_).filter(function(p) {
						return Object.getOwnPropertyDescriptor(_, p).enumerable
					})), d.forEach(function(p) {
						u(o, p, _[p])
					})
				}
				return o
			}

			function u(o, i, _) {
				return i = s(i), i in o ? Object.defineProperty(o, i, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[i] = _, o
			}

			function s(o) {
				var i = m(o, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function m(o, i) {
				if (typeof o != "object" || o === null) return o;
				var _ = o[Symbol.toPrimitive];
				if (_ !== void 0) {
					var d = _.call(o, i || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(o)
			}
			const l = "user journey",
				c = "internal-dns";
			let g = function(o) {
				return o.CLICK_GIVE_FEEDBACK = "click give feedback", o.CLICK_NAVIGATION_TAB = "click navigation tab", o.CLICK_CREATE_AN_INTERNAL_ZONE = "click create an internal zone", o.CLICK_SEARCH_BY_ZONE_NAME = "search by zone name", o.CLICK_CREATE_A_VIEW = "click create a view", o.CLICK_SEARCH_BY_RECORD_NAME = "search by record name", o.CLICK_SEARCH_BY_VIEW_NAME = "search by view name", o.CLICK_SAVE_VIEW = "click save view", o.CLICK_SAVE_ZONE = "click save zone", o.CLICK_ZONE_NAME = "click zone name", o.CLICK_ADD_A_RECORD = "click add a record", o.CLICK_ADD_RECORD_SAVE = "click add record save", o.CLICK_RECORD_EDIT = "click record edit", o.CLICK_EDIT_RECORD_SAVE = "click edit record save", o.CLICK_IMPORT_RECORDS = "click import records", o.CLICK_MANAGE_LINKED_VIEWS = "click manage linked views", o.CLICK_SAVE_MANAGE_LINKED_VIEWS = "click save manage linked views", o.CLICK_VIEW_RECORD = "click view record", o
			}({});
			const n = (o, i = {}) => {
				r().sendEvent(o, a({
					category: l,
					product: c
				}, i))
			}
		},
		"../react/pages/magic/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				GF: function() {
					return _
				},
				H3: function() {
					return l
				},
				H8: function() {
					return s
				},
				J: function() {
					return p
				},
				Nz: function() {
					return c
				},
				UQ: function() {
					return w
				},
				Up: function() {
					return u
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
					return i
				},
				_j: function() {
					return a
				},
				a4: function() {
					return d
				},
				jS: function() {
					return h
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
					connectorVisibility: (0, e.BC)`/${"accountId"}/magic-networking/mconn/visibility/${"connectorId"}/performance-analytics`,
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
				s = f => [{
					value: "low",
					label: f("setting.low")
				}, {
					value: "mid",
					label: f("setting.medium")
				}, {
					value: "high",
					label: f("setting.high")
				}],
				m = f => [{
					value: "request",
					label: f("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: f("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				l = f => [{
					value: "unidirectional",
					label: f("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: f("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				c = "magic-transit",
				g = "magic-wan",
				n = "gre_tunnel",
				o = "ipsec_tunnel",
				i = "interconnect",
				_ = 64,
				d = 1476,
				p = "mid",
				h = "reply",
				w = f => [{
					value: void 0,
					label: f("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: f("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: f("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				E = f => [{
					value: "all",
					label: f("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: f("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: f("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
				u = 60
		},
		"../react/pages/magic/overview/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				VZ: function() {
					return u
				},
				lC: function() {
					return a
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
				a = "user journey",
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
		"../react/pages/magic/packet-captures/constants.ts": function(F, y, t) {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				gb: function() {
					return n
				},
				iP: function() {
					return D
				},
				xL: function() {
					return E
				},
				rD: function() {
					return j
				},
				oT: function() {
					return d
				},
				i2: function() {
					return T
				},
				x1: function() {
					return m
				},
				lW: function() {
					return c
				},
				UA: function() {
					return C
				},
				K5: function() {
					return i
				},
				Ii: function() {
					return O
				},
				PJ: function() {
					return M
				},
				bK: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				s = t("../node_modules/@cloudflare/elements/es/index.js");
			const m = () => r().createElement(l, null, r().createElement("svg", {
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
				l = (0, a.LM)(({
					theme: R
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
				c = () => r().createElement(g, null, r().createElement("svg", {
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
				g = (0, a.LM)(({
					theme: R
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
				o = (0, a.LM)(({
					theme: R
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
				i = () => r().createElement(_, null, r().createElement("svg", {
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
				_ = (0, a.LM)(({
					theme: R
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
				p = (0, a.LM)(({
					theme: R
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
				h = () => r().createElement(w, null, r().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				w = (0, a.LM)(({
					theme: R
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
				E = () => r().createElement(f, null, r().createElement("svg", {
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
				f = (0, a.LM)(({
					theme: R
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
				O = () => r().createElement(v, null, r().createElement("svg", {
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
				v = (0, a.LM)(({
					theme: R
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
				C = () => r().createElement(A, null, r().createElement("svg", {
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
				A = (0, a.LM)(({
					theme: R
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
				D = () => r().createElement("svg", {
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
				M = () => r().createElement("svg", {
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
				j = () => r().createElement("svg", {
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
				T = () => r().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				A2: function() {
					return l
				},
				He: function() {
					return s
				},
				N$: function() {
					return m
				},
				Qq: function() {
					return a
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
				a = "login-apple-jwt",
				u = "cf-test",
				s = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				m = c => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: c ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: c ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: c ? e.rD : e.PJ
				}, {
					title: "apple.sign_in_with_apple.impact.title",
					description: "apple.sign_in_with_apple.impact.description",
					icon: e.i2
				}],
				l = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return a
				},
				c: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let a = function(s) {
				return s.TEMPLATE_SELECTED = "template selected", s.TEMPLATE_PRODUCT_SELECTED = "template product selected", s.TEMPLATE_SAVE_DRAFT = "template save draft", s.TEMPLATE_CANCEL = "template cancel", s.TEMPLATE_DEPLOY = "template deploy", s
			}({});
			const u = (s, m) => r().sendEvent(s, {
				template_name: m
			})
		},
		"../react/pages/pages/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				A: function() {
					return h
				},
				C1: function() {
					return g
				},
				GF: function() {
					return j
				},
				HD: function() {
					return f
				},
				IK: function() {
					return s
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
					return W
				},
				QF: function() {
					return q
				},
				QV: function() {
					return C
				},
				Sx: function() {
					return O
				},
				Ub: function() {
					return ee
				},
				X3: function() {
					return o
				},
				bA: function() {
					return R
				},
				eO: function() {
					return i
				},
				fH: function() {
					return d
				},
				fQ: function() {
					return w
				},
				fR: function() {
					return e
				},
				ff: function() {
					return T
				},
				iS: function() {
					return E
				},
				nY: function() {
					return v
				},
				w3: function() {
					return u
				},
				wJ: function() {
					return c
				},
				wp: function() {
					return _
				},
				yu: function() {
					return n
				},
				zF: function() {
					return M
				},
				zG: function() {
					return D
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
				l = "production",
				c = 2e3,
				g = 100,
				n = 350,
				o = 1e7,
				i = ["Success:", "Error:", "Failed:"],
				_ = 10,
				d = "_headers",
				p = "_redirects",
				h = "_routes.json",
				w = "_worker.js",
				E = "do-a-barrel-roll",
				f = [d, p, h, w],
				O = 1024 * 1024 * 25,
				v = 1e3,
				C = {
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
				D = 75e3,
				M = 2e5,
				j = 15e4,
				T = 3e3,
				R = 2250,
				x = "workers",
				P = "cloudflare_pages_build_caching",
				V = 2;
			let ee = function(z) {
				return z[z.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", z[z.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", z[z.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", z[z.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", z[z.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", z[z.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", z
			}({});
			const q = 1,
				re = 2,
				W = 2
		},
		"../react/pages/pages/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return a
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
		"../react/pages/pipelines/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return l
				},
				L9: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var i = arguments[o] != null ? Object(arguments[o]) : {},
						_ = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(i).filter(function(d) {
						return Object.getOwnPropertyDescriptor(i, d).enumerable
					})), _.forEach(function(d) {
						u(n, d, i[d])
					})
				}
				return n
			}

			function u(n, o, i) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = i, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var _ = i.call(n, o || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let l = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				c = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const g = (n, o = {}) => {
				r().sendEvent(n, a({}, o, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/profile/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
					return a
				}
			});
			const e = "iam-authentication",
				r = "login",
				a = "profile",
				u = {
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
		"../react/pages/r2/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return a
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
				u = l => {
					const c = "r2.cloudflarestorage.com";
					switch (l) {
						case "default":
							return c;
						case "eu":
							return `eu.${c}`;
						case "fedramp":
							return `fedramp.${c}`
					}
				},
				s = (l, c) => {
					const g = u(c);
					return `https://${l}.${g}`
				},
				m = (l, c, g) => `${s(l,c)}/${g}`
		},
		"../react/pages/r2/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const u = "r2_migrator_waitlist",
				s = "r2migrator",
				m = "r2",
				l = "r2_storage_migrator",
				c = "r2_storage_migrator",
				g = i => getAccountEntitlement(i, "r2.enabled"),
				n = i => Boolean((0, a.Le)(i, l, u)),
				o = i => Boolean(getAccountFlipperFlagsChanges(i, c, s))
		},
		"../react/pages/secrets-store/resources/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Hf: function() {
					return A
				},
				JJ: function() {
					return m
				},
				Js: function() {
					return u
				},
				LN: function() {
					return p
				},
				Nm: function() {
					return i
				},
				Oh: function() {
					return w
				},
				Q2: function() {
					return M
				},
				QF: function() {
					return h
				},
				RR: function() {
					return f
				},
				T_: function() {
					return D
				},
				Xm: function() {
					return l
				},
				Zl: function() {
					return j
				},
				dv: function() {
					return s
				},
				fp: function() {
					return o
				},
				jx: function() {
					return C
				},
				nQ: function() {
					return _
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
					return R
				},
				z3: function() {
					return T
				},
				zt: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/yup/es/index.js");
			const a = "secrets-store-account-level",
				u = "https://developers.cloudflare.com/secrets-store/",
				s = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				m = 1,
				l = 10,
				c = 100;
			let g = function(x) {
					return x.NAME = "name", x
				}({}),
				n = function(x) {
					return x.NAME = "name", x
				}({});
			const o = {
				initialPaginationState: {
					page: m,
					perPage: l
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
			let i = function(x) {
					return x.NAME = "name", x.COMMENT = "comment", x.TAGS = "tags", x.SERVICES = "services", x.STATUS = "status", x
				}({}),
				_ = function(x) {
					return x.PENDING = "pending", x.ACTIVE = "active", x.DELETED = "deleted", x
				}({}),
				d = function(x) {
					return x.LIST_SECRETS_STORES = "listSecretsStores", x.LIST_SECRETS = "listSecrets", x.GET_SECRET = "getSecret", x.SECRETS_QUOTA = "secretsQuota", x
				}({}),
				p = function(x) {
					return x.CREATE = "create", x.EDIT = "edit", x.DUPLICATE = "duplicate", x
				}({}),
				h = function(x) {
					return x.WORKERS = "workers", x
				}({});
			const w = "default_secrets_store";
			let E = function(x) {
				return x.CREATE = "create", x.EDIT = "edit", x.DUPLICATE = "duplicate", x.VIEW = "view", x
			}({});
			const f = "delete_operation",
				O = /^[a-zA-Z0-9_-]+$/,
				v = (x, P, V, ee, q) => r.Ry().shape({
					name: r.Z_().required(x("secrets_store.form.create.errors.name.required")).matches(O, x("secrets_store.form.create.errors.name.invalid_characters")).max(255, x("secrets_store.form.create.errors.name.max")),
					value: r.Z_().test("required-if-creating", x("secrets_store.form.create.errors.value.required"), re => P || q ? !!re : !0).max(1024, x("secrets_store.form.create.errors.value.max")),
					comment: r.Z_().max(1024, x("secrets_store.form.create.errors.comment.max")),
					scopes: r.Z_().required().oneOf(Object.values(h), x("secrets_store.form.create.errors.scopes.invalid")),
					labels: r.IX().of(r.Z_())
				}),
				C = (x, P, V, ee, q) => r.Ry().shape({
					secrets: r.IX().of(v(x, P, V, ee, q))
				}),
				A = {
					name: "",
					value: "",
					scopes: h.WORKERS,
					comment: ""
				},
				D = "secrets-store.store.secret";
			let M = function(x) {
				return x.DUPLICATE = "duplicate", x.DEPLOY = "deploy", x
			}({});
			const j = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let T = function(x) {
					return x.CREATE_SECRET = "create secrets store secret", x.EDIT_SECRET = "edit secrets store secret", x.DUPLICATE_SECRET = "duplicate secrets store secret", x.DELETE_SECRET = "delete secrets store secret", x.BIND_SECRET = "open secrets store binding drawer", x
				}({}),
				R = function(x) {
					return x.SECRETS_STORE = "secrets store main", x.WORKERS_BINDING = "workers binding drawer", x
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(F, y, t) {
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
			let a = function(u) {
				return u.LOAD_THREAT_EVENTS = "load threat events", u.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", u.THREAT_EVENTS_FILTERS = "threat events filters applied", u.ABUSE_REPORT_BUTTON_CLICK = "clicked abuse report button", u.ABUSE_REPORT_SUBMIT_CLICK = "clicked submit abuse report button", u.ABUSE_REPORT_SUBMIT_FAILED = "abuse report submission failed", u.ABUSE_REPORT_SUBMIT_SUCCESS = "abuse report submitted successfully", u
			}({})
		},
		"../react/pages/security/analytics/resources/labels.ts": function(F, y, t) {
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
				u = {
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
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				DC: function() {
					return _
				},
				Ff: function() {
					return l
				},
				Lz: function() {
					return i
				},
				RM: function() {
					return g
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
					return c
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
				a = t("../react/pages/security/analytics/resources/labels.ts");
			const u = ["block", "challenge", "jschallenge", "managed_challenge"],
				s = {
					label: "security_analytics.filters.mitigated",
					parse: d => d === "true" || d === !0,
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
					options: Object.keys(a.Bt).filter(d => !["challenge_failed", "jschallenge_failed"].includes(d)),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securityAction"
				},
				l = {
					label: "security_analytics.filters.security_source",
					urlParam: "mitigation-service",
					type: e.kE.select,
					options: Object.keys(a.e_).filter(d => d !== "unknown"),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securitySources"
				};
			let c = function(d) {
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
				i = "security-analytics-log-explorer";
			let _ = function(d) {
				return d.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', d.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', d.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', d.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', d.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', d.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", d.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", d.OPEN_SIDE_DRAWER = "open security analytics side drawer", d.CLOSE_SIDE_DRAWER = "close security analytics side drawer", d
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Fj: function() {
					return c
				},
				kq: function() {
					return l
				},
				xr: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var i = arguments[o] != null ? Object(arguments[o]) : {},
						_ = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(i).filter(function(d) {
						return Object.getOwnPropertyDescriptor(i, d).enumerable
					})), _.forEach(function(d) {
						u(n, d, i[d])
					})
				}
				return n
			}

			function u(n, o, i) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = i, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var _ = i.call(n, o || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let l = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const c = {
					[l.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[l.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[l.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[l.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[l.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[l.JWT_VALIDATION]: {
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
					[l.SETTINGS]: {
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
					product: i = l.MAIN,
					productName: _,
					additionalData: d
				}) => {
					r().sendEvent(n, a({
						category: o,
						product: i,
						productName: _
					}, d || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Fm: function() {
					return u
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
			let e = function(s) {
					return s.INITIAL_FETCH_SCORES = "view bots scores distribution", s.FETCH_CONFIGURATION = "view bots configuration page", s.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", s.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", s.UPDATE_SETTINGS = "update bots settings", s.DELETE_RULE = "delete bots ruleset", s.UPDATE_RULE = "update bots ruleset", s.FETCH_RULES = "view bots ruleset", s.CONFIGURE_BOT_MANAGEMENT = "view bots management", s.WAF_RULES_REDIRECT = "redirect waf rules", s.CHANGED_ZONE_SETTINGS = "change zone setting", s
				}({}),
				r = function(s) {
					return s.PROVIDED_TEMPLATE = "provided template link in detection card", s.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", s.USE_TEMPLATE = "use template", s.CREATE_FIREWALL_RULE = "create firewall rule", s.WAF_RULES = "waf rules", s
				}({});
			const a = "user journey",
				u = "Bots"
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AL: function() {
					return l
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
			let s = function(c) {
				return c.LOAD_SETTINGS = "load setting", c.OPEN_SIDE_MODAL_SETTING = "open side modal setting", c.CLOSE_SIDE_MODAL_SETTING = "close side modal setting", c.CHANGE_SETTING = "change setting", c.FILTER_SETTING = "filter setting", c
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
				l = {
					id: e.At.OwaspCore,
					titleKey: "settings.cards.owasp-core.title",
					descriptionKey: "settings.cards.owasp-core.description",
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/reference/owasp-core-ruleset/",
					tabs: [e.MQ.WebApplicationExploits],
					filters: [e.MQ.Detections],
					isGeneral: !1
				}
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/types.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				At: function() {
					return u
				},
				MQ: function() {
					return e
				},
				fo: function() {
					return a
				}
			});
			let e = function(s) {
					return s.WebApplicationExploits = "web-application-exploits", s.DdosAttacks = "ddos-attacks", s.BotTraffic = "bot-traffic", s.ApiAbuse = "api-abuse", s.ClientSideAbuse = "client-side-abuse", s.DomainSettings = "domain-settings", s.WebAssetsAndEndpoints = "web-assets-and-endpoints", s.RuleTemplates = "rule-templates", s.Detections = "detections", s
				}({}),
				r = function(s) {
					return s.DomainSettings = "domain-settings", s.WebAssetsAndEndpoints = "web-assets-and-endpoints", s.RuleTemplates = "rule-templates", s.Detections = "detections", s
				}({}),
				a = function(s) {
					return s.Tab = "tabs", s.Filters = "filters", s.Search = "search", s
				}({}),
				u = function(s) {
					return s.AILabyrinth = "ai-labyrinth", s.BlockAIBots = "block-ai-bots", s.BrowserIntegrity = "browser-integrity", s.ChallengePassage = "challenge-passage", s.ClientCertificates = "client-certificates", s.CloudflareManagedRuleset = "cloudflare-managed-ruleset", s.CreateDeveloperPortal = "create-developer-portal", s.CustomFallthrough = "custom-fallthrough", s.EndpointDiscovery = "endpoint-discovery", s.FirewallAi = "firewall-ai", s.HttpDdos = "http-ddos", s.IpAccessRules = "ip-access-rules", s.IpLists = "ip-lists", s.JwtValidation = "jwt-validation", s.Labels = "labels", s.LeakedCredentialCheck = "leaked-credential-check", s.MaliciousUploadDetection = "malicious-upload-detection", s.ManagedRuleset = "managed-ruleset", s.Mtls = "mtls", s.NetworkDdos = "network-ddos", s.OwaspCore = "owasp-core", s.RateLimitAuthentication = "rate-limit-authentication", s.ReplaceInsecureJavascript = "replace-insecure-javascript", s.RobotsTxt = "robots-txt", s.SequenceDetection = "sequence-detection", s.SchemaDiscovery = "schema-discovery", s.SchemaValidation = "schema-validation", s.SecurityLevel = "security-level", s.SecurityTxt = "security-txt", s.SensitiveDataDetection = "sensitive-data-detection", s.SessionIdentifiers = "session-identifiers", s.SslDdos = "ssl-ddos", s.TokenConfigurations = "token-configurations", s.UserAgentBlocking = "user-agent-blocking", s.VolumetricAbuse = "volumetric-abuse", s.ZoneLockdown = "zone-lockdown", s.ContinuousScriptMonitoring = "continuous-script-monitoring", s.BotManagement = "bot-management", s.SuperBotFightMode = "super-bot-fight-mode", s.BotFightMode = "bot-fight-mode", s
				}({})
		},
		"../react/pages/security/overview/resources/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AZ: function() {
					return u
				},
				BQ: function() {
					return s
				},
				Ht: function() {
					return a
				},
				Kx: function() {
					return e
				},
				NJ: function() {
					return l
				},
				S: function() {
					return r
				},
				oD: function() {
					return m
				}
			});
			let e = function(c) {
				return c.NAME = "description", c.SOURCE = "source", c.LAST_UPDATE = "lastUpdatedAt", c.ACTIVITY = "activity", c
			}({});
			const r = 5;
			let a = function(c) {
					return c.EXTERNAL_DOCUMENTATION = "external_documentation", c.LINK_TO_MANAGED = "link_to_managed_rules", c.LINK_TO_EVENTS = "link_to_security_events", c.LINK_TO_DDOS = "link_to_ddos", c.LINK_BOT_MGMT = "link_to_bot_mgmt", c.LINK_TO_AI_AUDIT = "link_to_ai_audit", c.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", c.LINK_TO_PAGE_SHIELD = "link_to_page_shield", c.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", c.LINK_TO_SECURITY_EVENTS = "link_to_security_events", c.LINK_TO_IP_RULE = "link_to_ip_rule", c.LINK_TO_CONFIGURATION = "link_to_configuration", c.LINK_TO_UPLOAD_SCHEMAS = "link_to_upload_schemas", c.LINK_TO_WEB_ASSETS = "link_to_web_assets", c.LINK_TO_DOMAINS = "link_to_domains", c
				}({}),
				u = function(c) {
					return c.LOAD_INSIGHTS = "load overview action items", c.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", c.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", c.CLICK_ACTION_INSIGHT = "click overview action item suggestion", c
				}({});
			const s = "security-overview-all-suggestions",
				m = [{
					title: "overview.modules.tab",
					url: "/"
				}, {
					title: "overview.all_suggestions.tab",
					url: "/all"
				}];
			let l = function(c) {
				return c.ARCHIVED = "archived", c.FRAUD_AND_ACCOUNT_ABUSE = "fraud_account_abuse", c
			}({})
		},
		"../react/pages/security/page-shield/resources/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				CP: function() {
					return j
				},
				FV: function() {
					return re
				},
				KH: function() {
					return D
				},
				Ks: function() {
					return B
				},
				Lj: function() {
					return X
				},
				MC: function() {
					return o
				},
				Mq: function() {
					return A
				},
				OV: function() {
					return q
				},
				Oq: function() {
					return M
				},
				QM: function() {
					return v
				},
				SI: function() {
					return z
				},
				SJ: function() {
					return w
				},
				Sk: function() {
					return x
				},
				Ti: function() {
					return I
				},
				Uc: function() {
					return C
				},
				Uq: function() {
					return c
				},
				Uv: function() {
					return ee
				},
				V0: function() {
					return g
				},
				VT: function() {
					return d
				},
				YC: function() {
					return P
				},
				j$: function() {
					return E
				},
				qc: function() {
					return h
				},
				sV: function() {
					return T
				},
				sW: function() {
					return W
				},
				u8: function() {
					return _
				},
				v5: function() {
					return n
				},
				xg: function() {
					return V
				},
				yd: function() {
					return O
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				a = t("../react/pages/security/page-shield/resources/types.ts");

			function u(L) {
				for (var U = 1; U < arguments.length; U++) {
					var J = arguments[U] != null ? Object(arguments[U]) : {},
						te = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(J).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(J, ie).enumerable
					})), te.forEach(function(ie) {
						s(L, ie, J[ie])
					})
				}
				return L
			}

			function s(L, U, J) {
				return U = m(U), U in L ? Object.defineProperty(L, U, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[U] = J, L
			}

			function m(L) {
				var U = l(L, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function l(L, U) {
				if (typeof L != "object" || L === null) return L;
				var J = L[Symbol.toPrimitive];
				if (J !== void 0) {
					var te = J.call(L, U || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(L)
			}
			const c = 50,
				g = 9,
				n = "copy script url page shield",
				o = "disable page shield",
				i = "click documentation link",
				_ = "enable page shield",
				d = "filter search page shield",
				p = "filter search view all page shield",
				h = "hover score tooltip page shield",
				w = "open alert modal page shield",
				E = "change pagination page shield",
				f = "close script modal page shield",
				O = "open script modal page shield",
				v = "select alert type page shield",
				C = "sort column page shield",
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
				D = {
					STARTS_WITH: r.Gn.startsWith,
					ENDS_WITH: r.Gn.endsWith,
					EQUALS: r.Gn.equals,
					CONTAINS: r.Gn.contains,
					DOES_NOT_CONTAIN: r.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: r.Gn.in
				},
				M = {
					status: {
						example: "active",
						type: e.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [D.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: e.kE.string,
						options: ["true", "false"],
						operators: [D.CONTAINS, D.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [D.EQUALS],
						type: e.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: e.kE.string,
						operators: [D.INCLUDES, D.ENDS_WITH, D.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				j = u({}, M, {
					urls: u({}, M.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				T = {
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
			let R = function(L) {
				return L.SECURITY_THREATS = "Security Threats", L.C2_BOTNET = "C2 & Botnet", L.CRYPTOMINING = "Cryptomining", L.MALWARE = "Malware", L.PHISHING = "Phishing", L.SPYWARE = "Spyware", L.DGA_DOMAINS = "DGA Domains", L.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", L
			}({});
			const x = "https://www.cloudflare.com/plans/enterprise/contact/",
				P = {
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
				V = {
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
				ee = {
					[a.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[a.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[a.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[a.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[a.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				q = {
					[a.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[a.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
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
				W = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				z = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				X = {
					[a.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[a.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[a.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				B = {
					[a.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[a.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[a.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				I = {
					[a.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[a.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[a.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
					return v.Xe
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
					return v.k2
				},
				$g: function() {
					return v.$g
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
					return v.I1
				},
				Wq: function() {
					return v.Wq
				},
				jf: function() {
					return v.jf
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
					return v.R$
				},
				Sk: function() {
					return u.Sk
				},
				gY: function() {
					return E
				},
				SE: function() {
					return g
				},
				m: function() {
					return h
				},
				xP: function() {
					return p
				},
				xl: function() {
					return d
				},
				Tb: function() {
					return _
				},
				h3: function() {
					return f
				},
				xq: function() {
					return ie
				},
				SQ: function() {
					return B
				},
				C0: function() {
					return I
				},
				av: function() {
					return D
				},
				W3: function() {
					return C
				},
				WO: function() {
					return R
				},
				Dk: function() {
					return V
				},
				we: function() {
					return q
				},
				Yt: function() {
					return z
				},
				ex: function() {
					return W
				},
				E1: function() {
					return re
				},
				dm: function() {
					return j
				},
				oK: function() {
					return x
				},
				qZ: function() {
					return X
				},
				_4: function() {
					return L
				},
				qo: function() {
					return U
				},
				CB: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(r),
				u = t("../react/pages/security/page-shield/resources/constants.ts");

			function s(N) {
				for (var K = 1; K < arguments.length; K++) {
					var k = arguments[K] != null ? Object(arguments[K]) : {},
						H = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(k).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(k, ae).enumerable
					})), H.forEach(function(ae) {
						m(N, ae, k[ae])
					})
				}
				return N
			}

			function m(N, K, k) {
				return K = l(K), K in N ? Object.defineProperty(N, K, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[K] = k, N
			}

			function l(N) {
				var K = c(N, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function c(N, K) {
				if (typeof N != "object" || N === null) return N;
				var k = N[Symbol.toPrimitive];
				if (k !== void 0) {
					var H = k.call(N, K || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(N)
			}
			const g = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", N => (a().sendEvent(u.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), N)),
				n = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", N => (a().sendEvent(u.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), N)),
				o = (N, K) => {
					var k;
					return JSON.stringify(s({}, K == null || (k = K[0]) === null || k === void 0 ? void 0 : k.parameters, N))
				};
			let i = "";
			const _ = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("start", (N, K, k) => (i = o(K, k), N)).on("success", N => (a().sendEvent(u.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), N)).on("error", (N, K, k) => o(K, k) === i ? N : {
					type: "noop"
				}),
				d = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				p = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", N => (a().sendEvent(u.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), N)),
				h = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				w = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", N => (a().sendEvent(u.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), N)),
				E = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				f = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var O = t("../react/app/redux/normalizer.js"),
				v = t("../react/pages/security/page-shield/resources/types.ts");
			const C = N => N.pageShield.configuration,
				A = N => {
					var K;
					return (K = N.pageShield.configuration.data) === null || K === void 0 ? void 0 : K.enabled
				},
				D = N => {
					var K;
					return (K = C(N)) === null || K === void 0 ? void 0 : K.data
				},
				M = N => N.pageShield.scripts,
				j = N => N.pageShield.script,
				T = N => N.pageShield.connections,
				R = N => N.pageShield.connection,
				x = (0, O.P1)("pageShieldScripts", M),
				P = (0, O.P1)("pageShieldScript", j),
				V = (0, O.P1)("pageShieldConnections", T),
				ee = (0, O.P1)("pageShieldConnection", R),
				q = (N, K) => N === v.Wq.SCRIPT_MONITOR ? x(K) || [] : V(K) || [],
				re = (N, K) => N === v.Wq.SCRIPT_MONITOR ? M(K) || [] : T(K) || [],
				W = (N, K) => N === v.Wq.SCRIPT_MONITOR ? P(K) : ee(K),
				z = N => N.pageShield.domainIntel,
				X = N => N.pageShield.whoIsRecord,
				B = (N, K, k) => {
					var H;
					const ae = Object.values(k).map(de => ({
						key: de,
						label: u.Uv[de],
						score: N[de]
					})).filter(de => de.score !== void 0 && de.score <= K);
					return K === u.V0 && ae.length === 0 && ((H = N.js_integrity_score) !== null && H !== void 0 ? H : 100) <= K && ae.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), ae
				},
				I = (N, K) => Object.values(K).filter(k => N[k] === !0).map(k => u.OV[k]),
				L = N => N === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				U = (N, K) => N[v.$g.MagecartScore] !== void 0 && N[v.$g.MagecartScore] <= K || N[v.$g.MalwareScore] !== void 0 && N[v.$g.MalwareScore] <= K || N[v.$g.CryptominingScore] !== void 0 && N[v.$g.CryptominingScore] <= K || N.js_integrity_score !== void 0 && N.js_integrity_score <= K,
				J = ["cdn.jsdelivr.net", "unpkg.com"],
				te = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				ie = N => {
					if (N.includes("@latest")) {
						const k = N.split("@latest");
						if (k.length != 2) return;
						const H = k[0].length,
							ae = H + "@latest".length;
						return [H, ae]
					}
					if (!!J.some(k => N.includes(k)))
						for (const k of te) {
							const H = N.match(k);
							if (!H) continue;
							const ae = H.index;
							if (ae === 0) return null;
							const de = ae + H[0].length;
							return [ae, de]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$g: function() {
					return g
				},
				I1: function() {
					return s
				},
				R$: function() {
					return n
				},
				Wq: function() {
					return c
				},
				Xe: function() {
					return m
				},
				jf: function() {
					return l
				},
				k2: function() {
					return o
				}
			});

			function e(i) {
				for (var _ = 1; _ < arguments.length; _++) {
					var d = arguments[_] != null ? Object(arguments[_]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(h) {
						return Object.getOwnPropertyDescriptor(d, h).enumerable
					})), p.forEach(function(h) {
						r(i, h, d[h])
					})
				}
				return i
			}

			function r(i, _, d) {
				return _ = a(_), _ in i ? Object.defineProperty(i, _, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[_] = d, i
			}

			function a(i) {
				var _ = u(i, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function u(i, _) {
				if (typeof i != "object" || i === null) return i;
				var d = i[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(i, _ || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(i)
			}
			let s = function(i) {
				return i.BASE_URI = "base-uri", i.CHILD = "child-src", i.CONNECT = "connect-src", i.DEFAULT = "default-src", i.FONT = "font-src", i.FORM_ACTION = "form-action", i.FRAME = "frame-src", i.FRAME_ANCESTORS = "frame-ancestors", i.IMAGE = "img-src", i.MANIFEST = "manifest-src", i.MEDIA = "media-src", i.OBJECT = "object-src", i.SCRIPT = "script-src", i.SCRIPT_ELEM = "script-src-elem", i.STYLE = "style-src", i.STYLE_ELEM = "style-src-elem", i.WORKER = "worker-src", i.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", i
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
			let l = function(i) {
					return i.MONITOR = "monitor", i.POLICIES = "policies", i.SETTINGS = "settings", i
				}({}),
				c = function(i) {
					return i.SCRIPT_MONITOR = "script", i.CONNECTION_MONITOR = "connection", i.COOKIE_MONITOR = "cookie", i
				}({}),
				g = function(i) {
					return i.CryptominingScore = "cryptomining_score", i.MalwareScore = "malware_score", i.MagecartScore = "magecart_score", i
				}({}),
				n = function(i) {
					return i.DataflowScore = "dataflow_score", i.ObfuscationScore = "obfuscation_score", i
				}({}),
				o = function(i) {
					return i.DomainMalicious = "domain_reported_malicious", i.UrlMalicious = "url_reported_malicious", i
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				_C: function() {
					return d
				},
				_R: function() {
					return p
				},
				dY: function() {
					return w
				},
				fy: function() {
					return O
				},
				ji: function() {
					return _
				},
				pR: function() {
					return h
				},
				pV: function() {
					return v
				},
				rj: function() {
					return f
				},
				yR: function() {
					return C
				},
				zf: function() {
					return E
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				r = t("../../../common/util/types/src/api/phases/fields.tsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				s = t("../react/utils/translator.tsx"),
				m = t("../react/pages/security/resources/types.ts"),
				l = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				c = t("../node_modules/@cloudflare/elements/es/index.js");

			function g(A) {
				for (var D = 1; D < arguments.length; D++) {
					var M = arguments[D] != null ? Object(arguments[D]) : {},
						j = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(M).filter(function(T) {
						return Object.getOwnPropertyDescriptor(M, T).enumerable
					})), j.forEach(function(T) {
						n(A, T, M[T])
					})
				}
				return A
			}

			function n(A, D, M) {
				return D = o(D), D in A ? Object.defineProperty(A, D, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[D] = M, A
			}

			function o(A) {
				var D = i(A, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function i(A, D) {
				if (typeof A != "object" || A === null) return A;
				var M = A[Symbol.toPrimitive];
				if (M !== void 0) {
					var j = M.call(A, D || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(A)
			}
			const _ = 10;
			let d = function(A) {
					return A.MTLS_ACCESS = "mTLS-enforced authentication", A.ZONE_LOCKDOWN = "Zone lockdown", A.USER_AGENT = "User agent blocking", A.EMAIL_VALIDITY = "Disposable email checks", A.IP_BASED = "IP-based rule", A.GEOGRAPHY_BASE = "Geography-based rule", A
				}({}),
				p = function(A) {
					return A.LEAKED_CREDENTIALS = "Leaked Credentials Checks", A
				}({});
			const h = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				w = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: d.GEOGRAPHY_BASE,
					trackedEvent: h.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: d.IP_BASED,
					trackedEvent: h.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: d.USER_AGENT,
					trackedEvent: h.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: d.ZONE_LOCKDOWN,
					trackedEvent: h.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				E = {
					[m.X.UI_SECTION]: A => ({
						[d.MTLS_ACCESS]: {
							ruleName: d.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${A.account.id}/${A.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[d.ZONE_LOCKDOWN]: {
							ruleName: d.ZONE_LOCKDOWN,
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [c.ZC, e.QV],
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
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[d.IP_BASED]: {
							ruleName: d.IP_BASED,
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.ip_base.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.ip_base.wafRulesOverview",
								applyMarkdown: !0,
								Components: [c.ZC, e.QV],
								componentProps: [{
									display: "inline"
								}, {
									to: `/${A.account.id}/configurations/lists`
								}]
							})
						},
						[d.USER_AGENT]: {
							ruleName: d.USER_AGENT,
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: u().createElement(s.cC, {
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
				f = {
					[m.X.WAF_RULES]: {
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
					[m.X.UI_SECTION]: {
						[p.LEAKED_CREDENTIALS]: {
							ruleName: p.LEAKED_CREDENTIALS,
							displayName: u().createElement(s.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: u().createElement(s.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let O = function(A) {
				return A.DISCOVERY = "discovery", A.SEQUENCES = "sequences", A.SCHEMA_VALIDATION = "schema-validation", A.SETTINGS = "settings", A.API_RULES = "api-rules", A.UPGRADE = "upgrade", A
			}({});
			const v = g({}, l.g, {
				[r.df.HttpRequestFirewallManaged]: g({}, l.g[r.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[r.df.HttpRequestFirewallCustom]: g({}, l.g[r.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[r.df.HttpRateLimit]: g({}, l.g[r.df.HttpRateLimit], {
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
			let C = function(A) {
				return A.APP_SEC_MVP = "app-security-navigation-mvp", A.APP_SEC_DEFAULT_FOR_ALL = "app-security-default-for-all", A
			}({})
		},
		"../react/pages/security/resources/types.ts": function(F, y, t) {
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
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				j: function() {
					return c
				},
				y: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(g) {
				for (var n = 1; n < arguments.length; n++) {
					var o = arguments[n] != null ? Object(arguments[n]) : {},
						i = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(o).filter(function(_) {
						return Object.getOwnPropertyDescriptor(o, _).enumerable
					})), i.forEach(function(_) {
						u(g, _, o[_])
					})
				}
				return g
			}

			function u(g, n, o) {
				return n = s(n), n in g ? Object.defineProperty(g, n, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[n] = o, g
			}

			function s(g) {
				var n = m(g, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function m(g, n) {
				if (typeof g != "object" || g === null) return g;
				var o = g[Symbol.toPrimitive];
				if (o !== void 0) {
					var i = o.call(g, n || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(g)
			}
			let l = function(g) {
				return g.CLICK_OPT_IN = "click opt in security navigation", g.CLICK_OPT_IN_BUTTON = "click opt in button", g.CLICK_OPT_OUT_BUTTON = "click opt out button", g.CLICK_NEXT_STEP = "click opt in next step", g.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", g.DISPLAY_MODAL = "display opt in modal", g.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", g.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", g.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", g
			}({});
			const c = (g, n = {}) => {
				r().sendEvent(g, a({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function(F, y, t) {
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
					return s
				},
				CK: function() {
					return c
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
					return u
				},
				YO: function() {
					return h
				},
				_c: function() {
					return w
				},
				je: function() {
					return _
				},
				ll: function() {
					return m
				},
				qD: function() {
					return l
				},
				tw: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const a = async E => {
				var f, O;
				const v = await (0, e.get)(`/zones/${E}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((f = v == null ? void 0 : v.body) === null || f === void 0 || (O = f.result) === null || O === void 0 ? void 0 : O.value) === "enabled"
			}, u = async (E, f) => (await (0, e.post)(`/zones/${E}/content-upload-scan/${f?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), f), s = async E => {
				var f;
				const O = await (0, e.get)(`/zones/${E}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((f = O == null ? void 0 : O.body) === null || f === void 0 ? void 0 : f.result) || []
			}, m = async (E, f) => {
				var O;
				const v = await (0, e.post)(`/zones/${E}/content-upload-scan/payloads`, {
					body: [f]
				});
				return (O = v == null ? void 0 : v.body) === null || O === void 0 ? void 0 : O.result
			}, l = async (E, f) => (await (0, e.del)(`/zones/${E}/content-upload-scan/payloads/${f}`, {
				hideErrorAlert: !0
			}), f), c = async E => {
				var f;
				const O = await (0, e.get)(`/zones/${E}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((f = O == null ? void 0 : O.body) === null || f === void 0 ? void 0 : f.pii_detection_enabled)
			}, g = async (E, f) => (await (0, e.put)(`/zones/${E}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: f
				}
			}), f), n = async E => {
				var f, O;
				const v = await (0, e.get)(`/zones/${E}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((f = v == null ? void 0 : v.body) === null || f === void 0 || (O = f.result) === null || O === void 0 ? void 0 : O.enabled)
			}, o = async (E, f) => {
				var O, v;
				const C = await (0, e.post)(`/zones/${E}/leaked-credential-checks`, {
					body: {
						enabled: f
					}
				});
				return !!((O = C == null ? void 0 : C.body) === null || O === void 0 || (v = O.result) === null || v === void 0 ? void 0 : v.enabled)
			}, i = async E => {
				var f;
				const O = await (0, e.get)(`/zones/${E}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (f = O == null ? void 0 : O.body) === null || f === void 0 ? void 0 : f.result
			}, _ = async (E, f) => {
				var O;
				const v = await (0, e.post)(`/zones/${E}/leaked-credential-checks/detections`, {
					body: f
				});
				return (O = v == null ? void 0 : v.body) === null || O === void 0 ? void 0 : O.result
			}, d = async (E, f) => (await (0, e.del)(`/zones/${E}/leaked-credential-checks/detections/${f}`, {
				hideErrorAlert: !0
			}), f), p = async (E, f) => {
				await (0, e.put)(`/zones/${E}/security-center/securitytxt`, {
					body: f
				})
			}, h = async E => {
				await (0, e.del)(`/zones/${E}/security-center/securitytxt`)
			}, w = async E => (await (0, e.get)(`/zones/${E}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Xu: function() {
					return d
				},
				Io: function() {
					return v
				},
				FQ: function() {
					return re
				},
				vU: function() {
					return _
				},
				M: function() {
					return h
				},
				d7: function() {
					return p
				},
				Oz: function() {
					return O
				},
				Np: function() {
					return P
				},
				WR: function() {
					return g
				},
				bE: function() {
					return V
				},
				u_: function() {
					return i
				},
				pf: function() {
					return C
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/pages/security/settings/hooks/api.ts"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t("webpack/sharing/consume/default/react-redux/react-redux"),
				s = t("../react/pages/security/settings/resources/index.ts"),
				m = t("../react/common/hooks/useZoneEntitlement.ts"),
				l = t("../../../../node_modules/yup/es/index.js"),
				c = t("../react/utils/translator.tsx");
			const g = () => (0, u.useSelector)(s.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				o = () => !!useZoneEntitlement(n),
				i = () => {
					const {
						t: W
					} = (0, c.QT)(), z = l.Z_().required(W("common.field_is_required")).max(24, W("labels.apply.form.name.error.max_characters")).matches(s.DG, W("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", W("labels.apply.form.name.error.cf_forbidden"), I => !s.aW.test(I)), X = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: I => l.Ry().shape({
							[s.n5.NAME]: I ? l.Z_() : z,
							[s.n5.DESCRIPTION]: I ? l.Z_().optional() : l.Z_().max(150, W("labels.apply.form.description.error.max_characters"))
						})
					}, B = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[s.N2.NAME]: "",
							[s.N2.SOURCE]: s.W3,
							[s.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => l.Ry().shape({
							[s.N2.NEW_LABEL_NAME]: z
						})
					};
					return {
						LABELS_APPLY_FORM: X,
						EDIT_LABELS_MODAL_FORM: B
					}
				},
				_ = ({
					modalHeaderFixedHeight: W = 62,
					modalDefaultPaddings: z = 16
				} = {}) => {
					const X = (0, a.useRef)(null),
						B = (0, a.useRef)(null),
						[I, L] = (0, a.useState)(0),
						[U, J] = (0, a.useState)(0),
						te = `calc(100vh - ${I}px - ${U}px - ${z}px)`,
						[ie, N] = (0, a.useState)("");
					return (0, a.useEffect)(() => {
						const K = () => {
							var k, H, ae, de;
							const Ee = X == null || (k = X.current) === null || k === void 0 ? void 0 : k.offsetHeight,
								me = B == null || (H = B.current) === null || H === void 0 ? void 0 : H.offsetHeight,
								ne = ((ae = Ee) !== null && ae !== void 0 ? ae : 0) + W,
								he = (de = me) !== null && de !== void 0 ? de : 0;
							L(ne), J(he)
						};
						return K(), window.addEventListener("resize", K), () => window.removeEventListener("resize", K)
					}, []), {
						searchTerm: ie,
						setSearchTerm: N,
						scrollableSectionMaxHeight: te,
						topMenuRef: X,
						bottomMenuRef: B
					}
				},
				d = W => {
					const z = g(),
						X = (0, e.useQueryClient)(),
						B = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${W}`,
							queryFn: () => (0, r.JP)(W),
							enabled: z
						}),
						I = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${W}`,
							queryFn: () => (0, r.BT)(W),
							enabled: z && !!(B == null ? void 0 : B.data)
						}),
						L = (0, e.useMutation)({
							mutationFn: async ({
								enabled: te
							}) => await (0, r.X2)(W, te),
							onSuccess: te => {
								X.setQueryData([`content-scanning-enabled-${W}`], te)
							}
						}),
						U = (0, e.useMutation)({
							mutationFn: te => (0, r.ll)(W, te),
							onSuccess: te => {
								X.setQueryData([`content-scanning-detections-${W}`], te)
							}
						}),
						J = (0, e.useMutation)({
							mutationFn: te => (0, r.qD)(W, te),
							onSuccess: te => {
								var ie;
								const N = (ie = X.getQueryData(`content-scanning-detections-${W}`)) !== null && ie !== void 0 ? ie : [];
								X.setQueryData([`content-scanning-detections-${W}`], N.filter(({
									id: K
								}) => K !== te))
							}
						});
					return {
						entitled: z,
						loading: B.isLoading || I.isLoading,
						error: B.isError || I.isError,
						enabled: {
							data: B.data,
							isToggling: L.isLoading,
							toggleEnabled: async te => L.mutateAsync({
								enabled: te
							})
						},
						detections: {
							data: I.data,
							add: U.mutateAsync,
							delete: J.mutateAsync,
							loading: U.isLoading || J.isLoading
						}
					}
				},
				p = () => {
					const W = (0, u.useSelector)(s.cN),
						z = (0, u.useSelector)(s.bH),
						X = (0, u.useSelector)(s.P3),
						B = (0, u.useSelector)(s.Ri);
					return {
						hasEditPermission: W,
						isEnabled: X && (z.hasSimilarLeaked || z.hasUsernameAndPasswordLeaked || B)
					}
				},
				h = W => {
					const z = p(),
						X = (0, e.useQueryClient)(),
						B = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${W}`,
							queryFn: () => (0, r.Ai)(W),
							enabled: !!z.isEnabled,
							retry: 1
						}),
						I = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${W}`,
							queryFn: () => (0, r.tw)(W),
							enabled: !!z.isEnabled && !!(B == null ? void 0 : B.data)
						}),
						L = (0, e.useMutation)({
							mutationFn: ({
								enabled: te
							}) => (0, r.O_)(W, te),
							onSuccess: te => {
								X.setQueryData([`leaked-credentials-enabled-${W}`], te)
							}
						}),
						U = (0, e.useMutation)({
							mutationFn: async te => await (0, r.je)(W, te),
							onSuccess: te => {
								var ie;
								const N = (ie = X.getQueryData(`leaked-credentials-detections-${W}`)) !== null && ie !== void 0 ? ie : [];
								X.setQueryData([`leaked-credentials-detections-${W}`], [...N, te])
							}
						}),
						J = (0, e.useMutation)({
							mutationFn: te => (0, r.$y)(W, te),
							onSuccess: te => {
								var ie;
								const N = (ie = X.getQueryData(`leaked-credentials-detections-${W}`)) !== null && ie !== void 0 ? ie : [];
								X.setQueryData([`leaked-credentials-detections-${W}`], N.filter(({
									id: K
								}) => K !== te))
							}
						});
					return {
						entitled: z.isEnabled,
						hasEditPermissions: z.hasEditPermission,
						loading: B.isLoading || I.isLoading,
						error: B.isError || B.isError,
						enabled: {
							data: B.data,
							isToggling: L.isLoading,
							toggleEnabled: async te => L.mutateAsync({
								enabled: te
							})
						},
						detections: {
							data: I.data,
							add: U.mutateAsync,
							delete: J.mutateAsync,
							loading: U.isLoading || J.isLoading
						}
					}
				};
			var w = t("../react/common/utils/useQueryCache.ts");
			const E = "security-txt",
				f = {
					securityTxt: ({
						zoneId: W
					}) => [E, W]
				},
				O = W => (0, e.useQuery)({
					queryKey: f.securityTxt({
						zoneId: W
					}),
					queryFn: () => (0, r._c)(W),
					select: z => z.result
				}),
				v = W => {
					const {
						invalidate: z
					} = (0, w.o)(f.securityTxt({
						zoneId: W
					}));
					return (0, e.useMutation)({
						mutationFn: () => (0, r.YO)(W),
						onSuccess: async () => {
							await z(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				C = W => {
					const {
						invalidate: z
					} = (0, w.o)(f.securityTxt({
						zoneId: W
					}));
					return (0, e.useMutation)({
						mutationFn: X => (0, r.F3)(W, X),
						onSuccess: async () => {
							await z(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var A = t("../../../../node_modules/lodash/isEqual.js"),
				D = t.n(A),
				M = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function j(W) {
				for (var z = 1; z < arguments.length; z++) {
					var X = arguments[z] != null ? Object(arguments[z]) : {},
						B = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(X).filter(function(I) {
						return Object.getOwnPropertyDescriptor(X, I).enumerable
					})), B.forEach(function(I) {
						T(W, I, X[I])
					})
				}
				return W
			}

			function T(W, z, X) {
				return z = R(z), z in W ? Object.defineProperty(W, z, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[z] = X, W
			}

			function R(W) {
				var z = x(W, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function x(W, z) {
				if (typeof W != "object" || W === null) return W;
				var X = W[Symbol.toPrimitive];
				if (X !== void 0) {
					var B = X.call(W, z || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(W)
			}
			const P = W => {
					const {
						queryKey: z,
						zoneId: X
					} = (0, M.hL)(W), {
						isLoading: B,
						isError: I,
						isSuccess: L,
						data: U,
						refetch: J,
						isRefetching: te
					} = (0, e.useQuery)({
						queryKey: z,
						queryFn: () => M.Mi.getLabels(j({
							zoneId: X
						}, W)),
						onSuccess: () => {
							var ie;
							const N = W == null || (ie = W.filters) === null || ie === void 0 ? void 0 : ie.source;
							(N === s.LABEL_SOURCES.MANAGED || N === s.LABEL_SOURCES.USER) && (0, s.Tf)({
								name: s.QJ.FILTER_USER_MANAGED_LABELS,
								product: s.Iv.SECURITY_SETTINGS,
								pageName: s.R.LABELS_LIST,
								type: N
							})
						}
					});
					return {
						data: U == null ? void 0 : U.result,
						errors: U == null ? void 0 : U.errors,
						paginationData: U == null ? void 0 : U.result_info,
						isLoading: B,
						isError: I,
						isSuccess: L,
						refetch: J,
						isRefetching: te
					}
				},
				V = ({
					labels: W,
					preselectedLabels: z
				}) => {
					const {
						USER: X,
						MANAGED: B
					} = s.LABEL_SOURCES, [I, L] = (0, a.useState)({
						[X]: [],
						[B]: []
					}), [U, J] = (0, a.useState)(new Set), te = U.size > 0, [ie, N] = (0, a.useState)(!1), K = de => {
						J(Ee => {
							const me = new Set(Ee);
							return me.has(de.name) ? me.delete(de.name) : me.add(de.name), me
						})
					}, k = de => U.has(de.name), H = (de, Ee) => {
						const me = k(de) ? 1 : 0;
						return (k(Ee) ? 1 : 0) - me
					}, ae = de => {
						L(Ee => ({
							[X]: [...de ? de[X] : Ee[X]].sort(H),
							[B]: [...de ? de[B] : Ee[B]].sort(H)
						}))
					};
					return (0, a.useEffect)(() => {
						if (W && !ie) {
							if (z) {
								const de = new Set;
								W.forEach(Ee => {
									z.some(me => D()(me, Ee)) && de.add(Ee.name)
								}), J(de)
							}
							N(!0)
						}
					}, [W, z, ie]), (0, a.useEffect)(() => {
						if (W && ie) {
							const de = W.reduce((me, ne) => (ne.source === X ? me[X].push(ne) : ne.source === B && me[B].push(ne), me), {
									[X]: [],
									[B]: []
								}),
								Ee = {
									[X]: de[X].sort(H),
									[B]: de[B].sort(H)
								};
							L(Ee)
						}
					}, [X, B, W, ie]), {
						userAndManagedLabels: I,
						setUserAndManagedLabels: L,
						toggleSelectedLabel: K,
						isLabelSelected: k,
						sortLabelsBySelectedStatus: ae,
						hasLabelsSelected: te
					}
				};
			var ee = t("../react/app/redux/index.ts"),
				q = t("../react/pages/security/settings/resources/selectors.ts");
			const re = (W = "") => {
				const z = (0, ee.p4)(q.Xs),
					X = z && (W == null ? void 0 : W.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: z,
					hasDeprecatedParameter: X
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				FQ: function() {
					return c.FQ
				},
				Iv: function() {
					return g.Iv
				},
				M: function() {
					return c.M
				},
				Np: function() {
					return c.Np
				},
				Oz: function() {
					return c.Oz
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
					return c.WR
				},
				Xs: function() {
					return g.Xs
				},
				Xu: function() {
					return c.Xu
				},
				ZF: function() {
					return g.ZF
				},
				bE: function() {
					return c.bE
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
					return c.pf
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
				u = t.n(a),
				s = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				l = t.n(m),
				c = t("../react/pages/security/settings/hooks/index.ts"),
				g = t("../react/pages/security/settings/resources/index.ts");
			const n = u().lazy(() => Promise.all([t.e(16691), t.e(59881), t.e(12174), t.e(1091), t.e(30389), t.e(51436), t.e(68204), t.e(2515), t.e(22038), t.e(8924), t.e(77216), t.e(40517), t.e(39560), t.e(39760), t.e(40170), t.e(30906), t.e(52215), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				o = () => {
					const {
						t: i
					} = (0, m.useI18n)(), _ = (0, e.xk)("waf");
					return u().createElement(s.T3, {
						parentPageLabel: i("navigation.zone.security"),
						title: i("navigation.zone.security.settings"),
						type: "narrow"
					}, _.read ? u().createElement(n, null) : u().createElement(r.Z, null))
				};
			y.ZP = o
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Mi: function() {
					return f
				},
				hL: function() {
					return E
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/zoneSelectors.ts"),
				a = t("../react/common/utils/useQueryCache.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				s = t("../react/common/hooks/useAccountId.ts"),
				m = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				l = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const c = {
				labels: (0, l.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, l.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, l.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, l.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, l.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, l.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, l.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, l.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var g = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function i(v, C) {
				if (v == null) return {};
				var A = _(v, C),
					D, M;
				if (Object.getOwnPropertySymbols) {
					var j = Object.getOwnPropertySymbols(v);
					for (M = 0; M < j.length; M++) D = j[M], !(C.indexOf(D) >= 0) && (!Object.prototype.propertyIsEnumerable.call(v, D) || (A[D] = v[D]))
				}
				return A
			}

			function _(v, C) {
				if (v == null) return {};
				var A = {},
					D = Object.keys(v),
					M, j;
				for (j = 0; j < D.length; j++) M = D[j], !(C.indexOf(M) >= 0) && (A[M] = v[M]);
				return A
			}

			function d(v) {
				for (var C = 1; C < arguments.length; C++) {
					var A = arguments[C] != null ? Object(arguments[C]) : {},
						D = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(A).filter(function(M) {
						return Object.getOwnPropertyDescriptor(A, M).enumerable
					})), D.forEach(function(M) {
						p(v, M, A[M])
					})
				}
				return v
			}

			function p(v, C, A) {
				return C = h(C), C in v ? Object.defineProperty(v, C, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[C] = A, v
			}

			function h(v) {
				var C = w(v, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function w(v, C) {
				if (typeof v != "object" || v === null) return v;
				var A = v[Symbol.toPrimitive];
				if (A !== void 0) {
					var D = A.call(v, C || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(v)
			}
			const E = v => {
					const C = (0, e.p4)(r.Cu),
						A = (0, s.F)(),
						D = O.labels(d({
							accountId: A,
							zoneId: C
						}, v ? d({}, v) : {})),
						M = (0, a.o)(D);
					return d({
						zoneId: C,
						queryKey: D,
						batchInvalidateLabels: async () => {
							await M.batchInvalidate({
								queryKeysToPredicateInvalidate: [u.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, M)
				},
				f = {
					getLabels: async v => {
						var C, A, D, M;
						let {
							zoneId: j,
							hideErrorAlert: T = !0
						} = v, R = i(v, ["zoneId", "hideErrorAlert"]);
						return (await m.get(c.labels.toUrl({
							zoneId: j
						}), {
							parameters: {
								page: R == null ? void 0 : R.page,
								per_page: R == null ? void 0 : R.per_page,
								with_mapped_resource_counts: R == null ? void 0 : R.with_mapped_resource_counts,
								filter: R == null || (C = R.filters) === null || C === void 0 ? void 0 : C.search,
								source: (0, n.sQ)(R == null || (A = R.filters) === null || A === void 0 ? void 0 : A.source),
								order: R == null || (D = R.sort) === null || D === void 0 ? void 0 : D.id,
								direction: (R == null ? void 0 : R.sort) ? (R == null || (M = R.sort) === null || M === void 0 ? void 0 : M.desc) ? o.Sr.desc : o.Sr.asc : void 0
							},
							hideErrorAlert: T
						})).body
					},
					getLabel: async v => {
						let {
							zoneId: C,
							labelName: A,
							hideErrorAlert: D = !0
						} = v, M = i(v, ["zoneId", "labelName", "hideErrorAlert"]);
						const j = (0, n.mm)(A) ? c.managedLabel.toUrl({
							zoneId: C,
							labelName: A
						}) : c.userLabel.toUrl({
							zoneId: C,
							labelName: A
						});
						return (await m.get(j, {
							parameters: {
								with_mapped_resource_counts: M == null ? void 0 : M.with_mapped_resource_counts
							},
							hideErrorAlert: D
						})).body
					},
					editLabel: async ({
						zoneId: v,
						label: C,
						replace: A
					}) => {
						const {
							name: D
						} = C, M = i(C, ["name"]);
						return (await (A ? m.put : m.patch)(c.userLabel.toUrl({
							zoneId: v,
							labelName: C.name
						}), {
							body: M
						})).body
					},
					deleteLabel: async ({
						zoneId: v,
						labelName: C
					}) => (await m.del(c.userLabel.toUrl({
						zoneId: v,
						labelName: C
					}))).body,
					createLabel: async v => {
						let {
							zoneId: C
						} = v, A = i(v, ["zoneId"]);
						const {
							product: D
						} = A, M = i(A, ["product"]);
						return (await m.post(c.userLabels.toUrl({
							zoneId: C
						}), {
							body: [M]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: v,
						user: C,
						managed: A,
						operationIds: D,
						replace: M
					}) => (await (M ? m.put : m.post)(c.operationsLinkedToLabels.toUrl({
						zoneId: v
					}), {
						body: d({}, C ? {
							user: {
								labels: C
							}
						} : {}, A ? {
							managed: {
								labels: A
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: D
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: v,
						labelName: C,
						operationIds: A
					}) => {
						const D = (0, n.mm)(C) ? c.managedLabelOperations.toUrl({
							zoneId: v,
							labelName: C
						}) : c.userLabelOperations.toUrl({
							zoneId: v,
							labelName: C
						});
						return (await m.put(D, {
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
				O = {
					labels: v => {
						let {
							accountId: C,
							zoneId: A
						} = v, D = i(v, ["accountId", "zoneId"]);
						return [u.IQ.LABELS, C, A, ...(0, g.isEmpty)(D) ? [] : [D]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return h
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return l
				},
				GE: function() {
					return A
				},
				IQ: function() {
					return u
				},
				KV: function() {
					return m
				},
				LABELS_LIST_TOASTS: function() {
					return _
				},
				LABEL_SOURCES: function() {
					return s
				},
				QH: function() {
					return d
				},
				V: function() {
					return O
				},
				W3: function() {
					return a
				},
				Yn: function() {
					return j
				},
				_8: function() {
					return i
				},
				_c: function() {
					return v
				},
				aW: function() {
					return w
				},
				dC: function() {
					return M
				},
				gY: function() {
					return C
				},
				j8: function() {
					return c
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
					return D
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let r = function(T) {
				return T.EXPOSED_CREDENTIALS = "exposed_credentials", T.CONTENT_SCANNING = "content_scanning", T.FIREWALL_AI = "firewall_ai", T
			}({});
			const a = "all";
			let u = function(T) {
					return T.LABELS = "labels", T
				}({}),
				s = function(T) {
					return T.USER = "user", T.MANAGED = "managed", T
				}({}),
				m = function(T) {
					return T.SOURCE = "source", T
				}({}),
				l = function(T) {
					return T.NAME = "name", T.SOURCE = "source", T.NEW_LABEL_NAME = "newLabelName", T
				}({}),
				c = function(T) {
					return T.ENDPOINT = "endpoint", T.METHOD = "method", T.OPERATION_ID = "operationId", T
				}({}),
				g = function(T) {
					return T.NAME = "name", T.MAPPED_RESOURCES = "mapped_resources.operations", T.SOURCE = "source", T.APPLY = "apply", T
				}({});
			const i = {
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
						[m.SOURCE]: a
					}
				},
				filters: m,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					queryParamStrategy: "auto-clear"
				}
			};
			let _ = function(T) {
				return T.CREATED_LABEL = "createdLabel", T.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", T.DELETED_LABEL = "deletedLabel", T.APPLIED_LABEL = "appliedLabel", T.EDITED_LABEL = "editedLabel", T.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", T
			}({});
			const d = "650px",
				p = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				h = /^[A-Za-z0-9-]+$/,
				w = /^cf-/;
			let E = function(T) {
				return T.NAME = "name", T.DESCRIPTION = "description", T
			}({});
			const f = "all";
			let O = function(T) {
				return T.METHOD = "method", T.HOSTNAME = "hostname", T
			}({});
			const v = {
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
						[O.METHOD]: f,
						[O.HOSTNAME]: f
					}
				},
				filters: O
			};
			let C = function(T) {
				return T.TITLE = "title", T.DESCRIPTION = "description", T.SUBMIT = "submit", T
			}({});
			const A = 1e3,
				D = {
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
				M = "exposed-credentials-module",
				j = "cf-risk"
		},
		"../react/pages/security/settings/resources/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return _
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
					return i
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
					return w
				},
				Tf: function() {
					return h
				},
				$E: function() {
					return a.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				r = t("../react/pages/security/settings/resources/types.ts"),
				a = t("../react/pages/security/settings/resources/utils.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(u);

			function m(f) {
				for (var O = 1; O < arguments.length; O++) {
					var v = arguments[O] != null ? Object(arguments[O]) : {},
						C = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(v).filter(function(A) {
						return Object.getOwnPropertyDescriptor(v, A).enumerable
					})), C.forEach(function(A) {
						l(f, A, v[A])
					})
				}
				return f
			}

			function l(f, O, v) {
				return O = c(O), O in f ? Object.defineProperty(f, O, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[O] = v, f
			}

			function c(f) {
				var O = g(f, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function g(f, O) {
				if (typeof f != "object" || f === null) return f;
				var v = f[Symbol.toPrimitive];
				if (v !== void 0) {
					var C = v.call(f, O || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(f)
			}
			let n = function(f) {
					return f.LABELS_LIST = "Labels List page", f.LABELS_APPLY = "Labels Apply page", f.LABELS_SIDE_MODAL = "Labels Side Modal", f.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", f.LABELS_OPERATION_DETAILS = "Operation Details page", f
				}({}),
				o = function(f) {
					return f.API_SHIELD = "API Shield", f.SECURITY_SETTINGS = "Security Settings", f
				}({}),
				i = function(f) {
					return f.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", f.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", f.OPERATIONS_TABLE_ROW = "Operations table row", f.OPERATION_DETAILS_PAGE = "Operation details page", f
				}({}),
				_ = function(f) {
					return f.UPSERT = "upsert", f.OVERWRITE = "overwrite", f
				}({}),
				d = function(f) {
					return f.SINGLE = "single", f.MULTIPLE = "multiple", f
				}({}),
				p = function(f) {
					return f.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", f.DELETE_LABEL = "delete a user label in the settings page", f.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", f.CREATE_LABEL_CLICKED = "click create label button in the settings page", f.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", f.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", f.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", f.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", f.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", f.OPEN_LABELS_SIDE_MODAL = "open labels side modal", f.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", f.REMOVE_RISK_LABELS_FROM_OPERATION = "remove risk label(s) from operation(s) in the labels side modal", f.CREATE_NEW_LABEL = "create a new label", f
				}({});
			const h = ({
					name: f,
					product: O,
					category: v = "user journey",
					pageName: C,
					from: A,
					write_strategy: D,
					type: M,
					target: j,
					selected: T
				}) => {
					s().sendEvent(f, m({
						category: v,
						pageName: C,
						product: O
					}, A ? {
						from: A
					} : {}, D ? {
						write_strategy: D
					} : {}, M ? {
						type: M
					} : {}, j ? {
						target: j
					} : {}, T ? {
						selected: T
					} : {}))
				},
				w = () => {
					var f;
					return (f = Object.values(p)) === null || f === void 0 ? void 0 : f.flat()
				};
			var E = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				P3: function() {
					return c
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
					return l
				},
				ui: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				r = t("../react/utils/url.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				s = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const m = i => {
					const _ = (0, e.RO)(i),
						d = !!(0, a.rV)(i, "rulesets.file_upload_scan_allowed"),
						p = !!(0, a.BF)(i, "rulesets.file_upload_scan_allowed");
					return (0, r.el)(window.location.pathname) ? _ && (d || p) : p
				},
				l = i => Number((0, a.rV)(i, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				c = i => (0, a.rV)(i, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				g = i => (0, a.rV)(i, "rulesets.leaked_credential_checks_allowed"),
				n = i => (0, s.z1)(u.dC)(i) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, a.rV)(i, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, a.rV)(i, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				o = i => !!(0, s.z1)("deprecate-security-level")(i)
		},
		"../react/pages/security/settings/resources/types.ts": function(F, y, t) {
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
		"../react/pages/security/settings/resources/utils.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return i
				},
				Mb: function() {
					return _
				},
				N2: function() {
					return O
				},
				Q4: function() {
					return p
				},
				QF: function() {
					return o
				},
				Vy: function() {
					return w
				},
				Wv: function() {
					return d
				},
				mm: function() {
					return f
				},
				sQ: function() {
					return E
				},
				vc: function() {
					return h
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				a = t("../react/pages/security/settings/routes.tsx"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				s = t("../react/pages/security/settings/resources/types.ts"),
				m = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function l(v) {
				for (var C = 1; C < arguments.length; C++) {
					var A = arguments[C] != null ? Object(arguments[C]) : {},
						D = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(A).filter(function(M) {
						return Object.getOwnPropertyDescriptor(A, M).enumerable
					})), D.forEach(function(M) {
						c(v, M, A[M])
					})
				}
				return v
			}

			function c(v, C, A) {
				return C = g(C), C in v ? Object.defineProperty(v, C, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[C] = A, v
			}

			function g(v) {
				var C = n(v, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function n(v, C) {
				if (typeof v != "object" || v === null) return v;
				var A = v[Symbol.toPrimitive];
				if (A !== void 0) {
					var D = A.call(v, C || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(v)
			}
			const o = {
					[s.T.ENABLED]: !1,
					[s.T.CONTACT]: [""],
					[s.T.EXPIRES]: ""
				},
				i = {
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
				_ = v => e.Ry({
					[s.T.CONTACT]: e.IX().of(e.Z_().required(v("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, v("security_txt.fields.contact.format_error"))),
					[s.T.EXPIRES]: e.hT().required(v("common.required")).min(new Date, v("security_txt.fields.expires.min_error"))
				}),
				d = v => {
					const C = {};
					for (const A in v) C[A] = Array.isArray(v[A]) ? v[A].filter(D => !!D) : v[A];
					return l({}, C, {
						expires: (0, m.DZ)(v.expires)
					})
				},
				p = (v, C, A) => {
					const D = [...new Set([s.T.CONTACT, s.T.EXPIRES, ...Object.values(s.T)])],
						M = Object.entries(v).sort(([j], [T]) => D.indexOf(j) - D.indexOf(T)).filter(([j, T]) => !!i[j] && !!T && (!Array.isArray(T) || !!T.length)).map(([j, T]) => Array.isArray(T) ? T.map(R => `${A(i[j].label)}: ${R}`).join(`
`) : `${A(i[j].label)}: ${T}`).join(`
`);
					(0, r.yH)(`Cloudflare_${C}_security.txt`, M, "text/plain;charset=utf-8")
				};
			let h = function(v) {
				return v.CREATED = "created security.txt", v.ENABLED = "enabled security.txt", v.DISABLED = "disabled security.txt", v.DOWNLOADED = "downloaded security.txt", v.UPDATED = "updated security.txt", v.DELETED = "deleted security.txt", v
			}({});
			const w = v => (v == null ? void 0 : v.source) === u.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (v == null ? void 0 : v.source) === u.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				E = v => v === u.W3 ? void 0 : v,
				f = v => u.aW.test(v),
				O = v => {
					switch (v) {
						case u.w.CONTENT_SCANNING:
							return a.ROUTES.CONTENT_SCANNING;
						case u.w.EXPOSED_CREDENTIALS:
							return a.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(F, y, t) {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Sb: function() {
					return g
				},
				Vj: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var i = arguments[o] != null ? Object(arguments[o]) : {},
						_ = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(i).filter(function(d) {
						return Object.getOwnPropertyDescriptor(i, d).enumerable
					})), _.forEach(function(d) {
						u(n, d, i[d])
					})
				}
				return n
			}

			function u(n, o, i) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = i, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var _ = i.call(n, o || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			const l = {
					SHOW_LCC_MIGRATION_BANNER: "show LCC migration banner",
					SHOW_LCC_MIGRATION_WARNING: "show LCC migration warning",
					CLICK_LCC_DOCUMENTATION: "click link to Leaked credentials detection documentation",
					CLICK_LCC_UPGRADE_GUIDE: "click link to Leaked credentials detection upgrade guide"
				},
				c = {
					product: "WAF Managed Rules"
				},
				g = ({
					event: n,
					category: o = "user journey",
					product: i = "waf",
					productName: _ = "Managed Rules",
					additionalData: d
				}) => {
					r().sendEvent(n, a({
						category: o,
						product: i,
						productName: _
					}, d || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(F, y, t) {
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
		"../react/pages/spectrum/tracking.tsx": function(F, y, t) {
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
		"../react/pages/stream/actionTypes.ts": function(F, y, t) {
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
		"../react/pages/stream/reducer.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return n
				},
				nY: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				r = t("../react/pages/stream/actionTypes.ts"),
				a = t("../react/pages/stream/util/pager.ts");

			function u(o) {
				for (var i = 1; i < arguments.length; i++) {
					var _ = arguments[i] != null ? Object(arguments[i]) : {},
						d = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(_).filter(function(p) {
						return Object.getOwnPropertyDescriptor(_, p).enumerable
					})), d.forEach(function(p) {
						s(o, p, _[p])
					})
				}
				return o
			}

			function s(o, i, _) {
				return i = m(i), i in o ? Object.defineProperty(o, i, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[i] = _, o
			}

			function m(o) {
				var i = l(o, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function l(o, i) {
				if (typeof o != "object" || o === null) return o;
				var _ = o[Symbol.toPrimitive];
				if (_ !== void 0) {
					var d = _.call(o, i || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(o)
			}
			const c = "stream",
				g = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(o = g, i) {
				switch (i.type) {
					case r.U.ResetState:
						return g;
					case r.U.SetStorageLoading:
						const {
							storageLoading: _
						} = i;
						return u({}, o, {
							storageLoading: _
						});
					case r.U.SetStorage:
						return u({}, o, {
							storage: i.payload ? u({}, o.storage, i.payload) : void 0
						});
					case r.U.ReplaceVideos:
						return u({}, o, {
							videos: i.videos
						});
					case r.U.PrependVideo:
						return u({}, o, {
							videos: [i.video, ...o.videos].filter((d, p) => p < a.FJ)
						});
					case r.U.UpdateVideo:
						return u({}, o, {
							videos: o.videos.map(d => d.uid === i.video.uid ? i.video : d)
						});
					case r.U.UpdateVideoPending:
						return u({}, o, {
							videoUpdateStatuses: u({}, o.videoUpdateStatuses, {
								[i.uid]: i.status
							})
						});
					case r.U.RemoveVideos:
						return u({}, o, {
							videos: o.videos.filter(d => !i.ids.includes(d.uid))
						});
					case r.U.SetLoading:
						return u({}, o, {
							loading: i.loading
						});
					case r.U.SetRequestTimestamp:
						return u({}, o, {
							requestTimestamp: i.requestTimestamp
						});
					case r.U.UploadViaUrl:
						return o;
					default:
						return (0, e.h)(i, o)
				}
			}
		},
		"../react/pages/stream/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				C: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/stream`,
				a = (0, e.BC)`${r}/inputs`,
				u = (0, e.BC)`${r}/videos`,
				s = (0, e.BC)`${r}/analytics`,
				m = (0, e.BC)`${u}/${"videoId"}`,
				l = (0, e.BC)`${r}/video-transformations`,
				c = {
					root: r,
					inputs: a,
					configureInputs: (0, e.BC)`${a}/custom-hostnames`,
					videos: u,
					analytics: s,
					videoPage: m,
					videoTransformationsConfigList: l,
					videoTransformationsZoneConfig: (0, e.BC)`${l}/${"zoneId"}/settings`,
					inputPage: (0, e.BC)`${a}/${"inputId"}`,
					inputSettings: (0, e.BC)`${a}/${"inputId"}/settings`,
					inputMetrics: (0, e.BC)`${a}/${"inputId"}/metrics`,
					inputLogs: (0, e.BC)`${a}/${"inputId"}/logs`,
					inputRecordings: (0, e.BC)`${a}/${"inputId"}/recordings`,
					inputEmbed: (0, e.BC)`${a}/${"inputId"}/embed`,
					inputConnectionInfo: (0, e.BC)`${a}/${"inputId"}/connection-info`,
					inputOutputs: (0, e.BC)`${a}/${"inputId"}/outputs`,
					createOutput: (0, e.BC)`${a}/${"inputId"}/createOutput`,
					createInput: (0, e.BC)`${a}/create`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/stream`,
					signUp: (0, e.BC)`/sign-up/stream`,
					checkoutSuccess: (0, e.BC)`${r}/bundle-checkout-success`,
					plans: (0, e.BC)`${r}/plans`,
					managePlan: (0, e.BC)`${r}/manage-plan`
				}
		},
		"../react/pages/stream/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
					return c
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
					return l
				},
				bO: function() {
					return i
				},
				bm: function() {
					return _
				},
				mX: function() {
					return h
				},
				pW: function() {
					return m
				},
				xW: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/pages/stream/reducer.ts");
			const u = w => w[a.nY],
				s = w => u(w).videos,
				m = w => u(w).videoUpdateStatuses,
				l = w => u(w).loading,
				c = w => u(w).requestTimestamp,
				g = w => u(w).storageLoading,
				n = w => u(w).storage,
				o = w => (0, r.BF)(w, "stream.enabled") || (0, e.bC)(w),
				i = w => (0, e.Le)(w, "stream", "connect"),
				_ = w => (0, e.Le)(w, "stream", "stream-4371"),
				d = w => (0, e.Le)(w, "stream", "public-details-enabled"),
				p = w => !!(0, e.Le)(w, "stream", "llhls"),
				h = w => {
					const E = n(w);
					return E !== void 0 && E.limitMins > E.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(F, y, t) {
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

			function r(u, s, m) {
				const l = {
					search: m,
					limit: e.toString()
				};
				return s !== void 0 && (l.end = s), l
			}

			function a(u, s, m) {
				return {
					limit: e.toString(),
					search: m,
					asc: "true",
					start_comp: "gt",
					start: s
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(F, y, t) {
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
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				QK: function() {
					return c
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
					return _
				},
				i3: function() {
					return l
				},
				mm: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(p) {
				for (var h = 1; h < arguments.length; h++) {
					var w = arguments[h] != null ? Object(arguments[h]) : {},
						E = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(w).filter(function(f) {
						return Object.getOwnPropertyDescriptor(w, f).enumerable
					})), E.forEach(function(f) {
						u(p, f, w[f])
					})
				}
				return p
			}

			function u(p, h, w) {
				return h = s(h), h in p ? Object.defineProperty(p, h, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[h] = w, p
			}

			function s(p) {
				var h = m(p, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function m(p, h) {
				if (typeof p != "object" || p === null) return p;
				var w = p[Symbol.toPrimitive];
				if (w !== void 0) {
					var E = w.call(p, h || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(p)
			}
			let l = function(p) {
					return p.TRY_NEW_DASHBOARD_CTA = "click try new dashboard", p
				}({}),
				c = function(p) {
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
			const _ = Object.values({
					MIGRATION: l,
					LOAD_BALANCERS_TABLE: c,
					REVIEW: g,
					WIZARD: n,
					USAGE: o
				}).flatMap(Object.values),
				d = (p, h) => r().sendEvent(p, a({
					category: "user journey",
					product: "load balancing"
				}, h))
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(F, y, t) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return a
				},
				X: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let a = function(s) {
				return s.CREATE = "create waiting room", s.UPDATE = "update waiting room", s.EVENTS = "view waiting rooms events", s.ANALYTICS = "view waiting room analytics", s.GENERATE_PREVIEW = "generate waiting room preview link", s
			}({});
			const u = async s => {
				await r().sendEvent(s, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				N3: function() {
					return c
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
				for (var i = 1; i < arguments.length; i++) {
					var _ = arguments[i] != null ? Object(arguments[i]) : {},
						d = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(_).filter(function(p) {
						return Object.getOwnPropertyDescriptor(_, p).enumerable
					})), d.forEach(function(p) {
						u(o, p, _[p])
					})
				}
				return o
			}

			function u(o, i, _) {
				return i = s(i), i in o ? Object.defineProperty(o, i, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[i] = _, o
			}

			function s(o) {
				var i = m(o, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function m(o, i) {
				if (typeof o != "object" || o === null) return o;
				var _ = o[Symbol.toPrimitive];
				if (_ !== void 0) {
					var d = _.call(o, i || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(o)
			}
			const l = "TURNSTILE";
			let c = function(o) {
				return o.OVERVIEW_PAGE = "view the overview page", o.LIST_OF_WIDGETS = "list of widgets", o.SOLVE_EVENTS = "list solve events", o.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", o.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", o.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", o.OPEN_DELETE_MODAL = "view the delete modal for one widget", o.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", o.DELETE_WIDGET = "delete successfully widgets", o.LIST_OF_HOSTNAMES = "list hostnames", o.OPEN_ADD_WIDGET_PAGE = "view page to add widget", o.FEEDBACK_ADD = "view Feedback Add", o.SAVE_WIDGET = "save widget", o.ROTATE_KEYS = "rotate keys", o.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", o.GET_WIDGETS = "get widget details", o.OPEN_ANALYTICS_PAGE = "view analytics page", o.ANALYTICS_DATA = "list the analytics data", o
			}({});
			const g = ({
					name: o,
					product: i = l,
					category: _ = "user journey",
					page: d,
					additionalData: p = {}
				}) => {
					r().sendEvent(o, a({
						category: _,
						page: d,
						product: i
					}, p || {}))
				},
				n = () => {
					var o;
					return (o = Object.values(c)) === null || o === void 0 ? void 0 : o.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return c
				},
				Ky: function() {
					return g
				},
				RJ: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var i = arguments[o] != null ? Object(arguments[o]) : {},
						_ = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(i).filter(function(d) {
						return Object.getOwnPropertyDescriptor(i, d).enumerable
					})), _.forEach(function(d) {
						u(n, d, i[d])
					})
				}
				return n
			}

			function u(n, o, i) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = i, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var _ = i.call(n, o || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let l = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.GROUP_TABLE_ROW_CLICK = "user group table row click", n.GROUP_TABLE_ROW_MEMBERS_CLICK = "user group table row members click", n.GROUP_TABLE_ROW_POLICIES_CLICK = "user group table row policies click", n.GROUP_TABLE_ROW_SETTINGS_CLICK = "user group table row settings click", n.BACK_BUTTON = "clicked back from user group detail", n.MEMBER_ADD = "add user group member", n.MEMBER_DELETE = "delete user group member", n.POLICY_SAVE = "user group policies save", n.POLICY_DELETE = "user group policies delete", n
			}({});
			const c = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, a({}, o || {}))
				},
				g = () => {
					var n;
					return (n = Object.values(l)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(F, y, t) {
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
		"../react/pages/zone-versioning/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$e: function() {
					return A
				},
				$h: function() {
					return f
				},
				G: function() {
					return C
				},
				M3: function() {
					return M
				},
				Tr: function() {
					return w
				},
				UY: function() {
					return p
				},
				bH: function() {
					return o
				},
				fv: function() {
					return j
				},
				hF: function() {
					return O
				},
				iw: function() {
					return _
				},
				m7: function() {
					return n
				},
				re: function() {
					return v
				},
				tp: function() {
					return d
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../../../../node_modules/reselect/lib/index.js"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/SidebarNav/permissions.ts"),
				s = t("../react/common/selectors/entitlementsSelectors.ts");

			function m(T) {
				for (var R = 1; R < arguments.length; R++) {
					var x = arguments[R] != null ? Object(arguments[R]) : {},
						P = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(x).filter(function(V) {
						return Object.getOwnPropertyDescriptor(x, V).enumerable
					})), P.forEach(function(V) {
						l(T, V, x[V])
					})
				}
				return T
			}

			function l(T, R, x) {
				return R = c(R), R in T ? Object.defineProperty(T, R, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[R] = x, T
			}

			function c(T) {
				var R = g(T, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function g(T, R) {
				if (typeof T != "object" || T === null) return T;
				var x = T[Symbol.toPrimitive];
				if (x !== void 0) {
					var P = x.call(T, R || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(T)
			}
			const n = T => (0, a.nA)(T) ? (0, s.p1)(T) && (0, u.$n)(T, "zone_versioning", "versioning") : !1,
				o = T => T.zoneVersioning.zoneApplications,
				i = (0, e.P1)("zoneApplications", o),
				_ = T => T.zoneVersioning.zoneVersions,
				d = (0, e.P1)("zoneVersions", _),
				p = (0, r.P1)(d, T => {
					if (T) return T.filter(R => R.status == "V")
				}),
				h = T => T.zoneVersioning.environments,
				w = T => T.zoneVersioning.environments.isRequesting,
				E = (0, e.P1)("environments", h),
				f = (0, r.P1)(i, T => {
					if (T) {
						if (T.length === 1) return T[0];
						T.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${T.length}`))
					}
					return null
				}),
				O = (0, r.P1)(E, T => T ? T.environments : []),
				v = T => {
					var R;
					return (R = T.zoneVersioning) === null || R === void 0 ? void 0 : R.zoneVersionSelector
				},
				C = (0, r.P1)(v, d, (T, R) => {
					if (!(T == null ? void 0 : T.isVersion) || !R) return null;
					const x = R.find(P => {
						if (P.version === T.selectedVersion && P.locked) return !0
					});
					return x ? m({}, x, {
						isLocked: !0
					}) : null
				}),
				A = (0, r.P1)(d, O, (T, R) => !R || !T ? [] : T.map(x => {
					const P = [];
					for (const V in R) R[V].version === x.version && P.push(R[V]);
					return m({}, x, {
						environments: P
					})
				})),
				D = T => T.zoneVersioning.WAFMigrationStatus,
				M = (0, e.P1)("WAFMigrationStatus", D),
				j = T => T.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$2: function() {
					return D
				},
				CI: function() {
					return C
				},
				IS: function() {
					return l
				},
				L7: function() {
					return s
				},
				Lt: function() {
					return d
				},
				Oj: function() {
					return i
				},
				QV: function() {
					return p
				},
				S6: function() {
					return M
				},
				X$: function() {
					return O
				},
				X6: function() {
					return g
				},
				d4: function() {
					return _
				},
				fE: function() {
					return c
				},
				im: function() {
					return E
				},
				lv: function() {
					return h
				},
				rL: function() {
					return n
				},
				wW: function() {
					return m
				}
			});

			function e(j) {
				for (var T = 1; T < arguments.length; T++) {
					var R = arguments[T] != null ? Object(arguments[T]) : {},
						x = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(R).filter(function(P) {
						return Object.getOwnPropertyDescriptor(R, P).enumerable
					})), x.forEach(function(P) {
						r(j, P, R[P])
					})
				}
				return j
			}

			function r(j, T, R) {
				return T = a(T), T in j ? Object.defineProperty(j, T, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[T] = R, j
			}

			function a(j) {
				var T = u(j, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function u(j, T) {
				if (typeof j != "object" || j === null) return j;
				var R = j[Symbol.toPrimitive];
				if (R !== void 0) {
					var x = R.call(j, T || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(j)
			}
			const s = {
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
				l = "40rem",
				c = {
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
				_ = {
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
				h = {
					insufficientData: "insufficient data to create/update trigger",
					createRepoConnectionError: "error creating repo connection",
					createTokenError: "error creating token",
					createUpdateTriggerError: "error creating/updating trigger",
					updateEnvironmentVariablesError: "error updating trigger environment variables",
					createWorkerError: "error creating worker",
					buildWorkerError: "error building worker",
					refreshWebhookError: "error refreshing gitlab webhook"
				},
				w = "workers.dev",
				E = "YYYY-MM-DD HH:mm:SS ZZ",
				f = "active",
				O = ["bundled", "unbound", "standard"],
				v = null,
				C = {
					observability: "workers-observability",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let A = function(j) {
				return j[j.NONE = 0] = "NONE", j[j.MISS = 1] = "MISS", j[j.EXPIRED = 2] = "EXPIRED", j[j.UPDATING = 3] = "UPDATING", j[j.STALE = 4] = "STALE", j[j.HIT = 5] = "HIT", j[j.IGNORED = 6] = "IGNORED", j[j.BYPASS = 7] = "BYPASS", j[j.REVALIDATED = 8] = "REVALIDATED", j[j.DYNAMIC = 9] = "DYNAMIC", j[j.STREAM_HIT = 10] = "STREAM_HIT", j[j.DEFERRED = 11] = "DEFERRED", j
			}({});
			const D = [A.HIT, A.STREAM_HIT];
			let M = function(j) {
				return j.SECRETS_STORE_ID = "store_id", j.SECRET_NAME = "secret_name", j
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return l
				},
				L: function() {
					return a
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
			const r = c => `${c}.workers.dev`,
				a = (c, g, n) => `${n?`${n}.`:""}${c}.${r(g)}`,
				u = (c, g, n) => `https://${a(c,g,n)}`,
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
				l = {
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
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					workflows: (0, e.BC)`/accounts/${"accountId"}/workflows`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				MN: function() {
					return a
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
			const a = async ([l, c]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: l,
					variables: c
				})
			})).body, u = async (...l) => (await e.get(...l)).body, s = l => async (c, g) => {
				const n = await fetch(c, g).then(o => o.json());
				return l.assertDecode(n)
			}, m = async (...l) => (await u(...l)).result;
			y.ZP = {
				fetcher: l => Array.isArray(l) ? m(...l) : m(l)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(F, y) {
				y()
			})(this, function() {
				"use strict";

				function F() {
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

					function u(h) {
						return !!(h && h !== document && h.nodeName !== "HTML" && h.nodeName !== "BODY" && "classList" in h && "contains" in h.classList)
					}

					function s(h) {
						var w = h.type,
							E = h.tagName;
						return !!(E == "INPUT" && a[w] && !h.readOnly || E == "TEXTAREA" && !h.readOnly || h.isContentEditable)
					}

					function m(h) {
						h.getAttribute("is-focus-visible") !== "" && h.setAttribute("is-focus-visible", "")
					}

					function l(h) {
						h.getAttribute("is-focus-visible") === "" && h.removeAttribute("is-focus-visible")
					}

					function c(h) {
						u(document.activeElement) && m(document.activeElement), t = !0
					}

					function g(h) {
						t = !1
					}

					function n(h) {
						!u(h.target) || (t || s(h.target)) && m(h.target)
					}

					function o(h) {
						!u(h.target) || h.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), l(h.target))
					}

					function i(h) {
						document.visibilityState == "hidden" && (e && (t = !0), _())
					}

					function _() {
						document.addEventListener("mousemove", p), document.addEventListener("mousedown", p), document.addEventListener("mouseup", p), document.addEventListener("pointermove", p), document.addEventListener("pointerdown", p), document.addEventListener("pointerup", p), document.addEventListener("touchmove", p), document.addEventListener("touchstart", p), document.addEventListener("touchend", p)
					}

					function d() {
						document.removeEventListener("mousemove", p), document.removeEventListener("mousedown", p), document.removeEventListener("mouseup", p), document.removeEventListener("pointermove", p), document.removeEventListener("pointerdown", p), document.removeEventListener("pointerup", p), document.removeEventListener("touchmove", p), document.removeEventListener("touchstart", p), document.removeEventListener("touchend", p)
					}

					function p(h) {
						h.target.nodeName.toLowerCase() !== "html" && (t = !1, d())
					}
					document.addEventListener("keydown", c, !0), document.addEventListener("mousedown", g, !0), document.addEventListener("pointerdown", g, !0), document.addEventListener("touchstart", g, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", o, !0), document.addEventListener("visibilitychange", i, !0), _(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function y(t) {
					var e;

					function r() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && y(F)
			})
		},
		"../react/utils/bootstrap.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
					return a
				}
			});
			const e = () => {
					var s, m, l;
					return (s = window) === null || s === void 0 || (m = s.bootstrap) === null || m === void 0 || (l = m.data) === null || l === void 0 ? void 0 : l.security_token
				},
				r = () => {
					var s, m, l;
					return !!((s = t.g.bootstrap) === null || s === void 0 || (m = s.data) === null || m === void 0 || (l = m.user) === null || l === void 0 ? void 0 : l.id)
				},
				a = () => {
					var s, m;
					return !!((s = t.g.bootstrap) === null || s === void 0 || (m = s.data) === null || m === void 0 ? void 0 : m.is_kendo)
				},
				u = () => {
					var s, m, l, c;
					return (s = window) === null || s === void 0 || (m = s.bootstrap) === null || m === void 0 || (l = m.data) === null || l === void 0 || (c = l.user) === null || c === void 0 ? void 0 : c.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				O5: function() {
					return u
				},
				Xm: function() {
					return a
				},
				kT: function() {
					return l
				},
				wV: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				a = () => (r() || "").indexOf("C0002") !== -1,
				u = () => (r() || "").indexOf("C0003") !== -1,
				s = () => (r() || "").indexOf("C0004") !== -1,
				m = () => (r() || "").indexOf("C0005") !== -1,
				l = n => {
					const o = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${o}`
				},
				c = () => {
					var n;
					const o = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (o == null ? void 0 : o.country) || ""
				},
				g = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AI: function() {
					return O
				},
				Kd: function() {
					return o
				},
				S8: function() {
					return f
				},
				ZW: function() {
					return c
				},
				ay: function() {
					return v
				},
				fh: function() {
					return C
				},
				i_: function() {
					return i
				},
				ly: function() {
					return n
				},
				th: function() {
					return l
				},
				ti: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				a = t("../../../common/intl/intl-types/src/index.ts"),
				u = t("../../../common/util/types/src/utils/index.ts"),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m = t("../../../../node_modules/cookie/index.js");
			const l = "cf-sync-locale-with-cps",
				c = a.Q.en_US,
				g = "en_US",
				n = "cf-locale";

			function o() {
				const M = (0, m.parse)(document.cookie);
				return s.Z.get(n) || M[n] || null
			}

			function i(M) {
				document.cookie = (0, m.serialize)(n, M, {
					path: "/",
					maxAge: 31536e3,
					secure: !0
				}), s.Z.set(n, M)
			}

			function _() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0,
					secure: !0
				}), cache.remove(n)
			}
			const d = M => (0, u.Yd)(a.Q).find(j => a.Q[j] === M) || g,
				p = [],
				h = [],
				w = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.fr_FR, a.Q.it_IT, a.Q.pt_BR, a.Q.ko_KR, a.Q.ja_JP, a.Q.zh_CN, a.Q.zh_TW],
				E = {
					test: [...w, ...h, ...p],
					development: [...w, ...h, ...p],
					staging: [...w, ...h, ...p],
					production: [...w, ...h]
				},
				f = M => {
					const j = a.Q[M];
					return E.production.includes(j)
				},
				O = () => Object.keys(a.Q).filter(M => f(M)),
				v = M => {
					const j = a.Q[M];
					return h.includes(j)
				},
				C = M => A[M],
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
				D = r().locale();
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
			}), r().locale(D)
		},
		"../react/utils/translator.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				QT: function() {
					return d
				},
				Vb: function() {
					return c
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return l
				},
				_m: function() {
					return o
				},
				cC: function() {
					return i
				},
				oc: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = t("../../../common/intl/intl-core/src/Translator.ts"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				u = t.n(a),
				s = t("../flags.ts");
			const m = new r.Z({
				pseudoLoc: (0, s.J8)("is_pseudo_loc")
			});

			function l(p, ...h) {
				return m.t(p, ...h)
			}
			const c = m;

			function g(p, ...h) {
				return markdown(l(p, h))
			}

			function n(p) {
				if (Number(p) !== 0) {
					if (p % 86400 == 0) return l("time.num_days", {
						smart_count: p / 86400
					});
					if (p % 3600 == 0) return l("time.num_hours", {
						smart_count: p / 3600
					});
					if (p % 60 == 0) return l("time.num_minutes", {
						smart_count: p / 60
					})
				}
				return l("time.num_seconds", {
					smart_count: p
				})
			}

			function o(p, h) {
				return p in h ? h[p] : void 0
			}
			const i = a.Trans,
				_ = a.I18n,
				d = a.useI18n
		},
		"../react/utils/url.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Ct: function() {
					return M
				},
				Fl: function() {
					return ie
				},
				KT: function() {
					return K
				},
				NF: function() {
					return O
				},
				Nw: function() {
					return A
				},
				Pd: function() {
					return C
				},
				Uh: function() {
					return U
				},
				cm: function() {
					return w
				},
				e1: function() {
					return D
				},
				el: function() {
					return q
				},
				hW: function() {
					return W
				},
				pu: function() {
					return N
				},
				qR: function() {
					return ee
				},
				td: function() {
					return v
				},
				uW: function() {
					return X
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				r = t("../react/pages/abuse/constants.ts"),
				a = t("../react/pages/d1/routes.ts"),
				u = t("../react/pages/images/routes.ts"),
				s = t("../react/pages/pages/routes.ts"),
				m = t("../react/pages/r2/routes.ts"),
				l = t("../react/pages/stream/routes.ts"),
				c = t("../react/pages/zoneless-workers/routes.ts"),
				g = t("../../../../node_modules/query-string/query-string.js"),
				n = t.n(g);

			function o(k) {
				for (var H = 1; H < arguments.length; H++) {
					var ae = arguments[H] != null ? Object(arguments[H]) : {},
						de = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(ae).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(ae, Ee).enumerable
					})), de.forEach(function(Ee) {
						i(k, Ee, ae[Ee])
					})
				}
				return k
			}

			function i(k, H, ae) {
				return H = _(H), H in k ? Object.defineProperty(k, H, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[H] = ae, k
			}

			function _(k) {
				var H = d(k, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function d(k, H) {
				if (typeof k != "object" || k === null) return k;
				var ae = k[Symbol.toPrimitive];
				if (ae !== void 0) {
					var de = ae.call(k, H || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(k)
			}
			const {
				endsWithSlash: p
			} = e.default, h = new RegExp(/([0-9a-z]{32})/g), w = k => k == null ? void 0 : k.replace(h, ":id"), E = (k, H) => {
				const ae = k.replace(p, "").split("/");
				return ae.slice(0, 2).concat([H]).concat(ae.slice(3)).join("/")
			}, f = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), O = k => `/${k.replace(p,"").replace(/^\//,"")}`, v = k => A("add-site", k), C = k => A("billing", k), A = (k, H) => H ? `/${H}${k?`/${k}`:""}` : `/?to=/:account/${k}`, D = () => {
				const k = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return k ? k[1] : null
			}, M = (k, H) => n().stringify(o({}, n().parse(k), H)), j = (k = "") => k.toString().replace(/([\/]{1,})$/, ""), T = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], R = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, x = /^\/(\w{32,})(\/[^.]*)?/, P = k => T.includes(k), V = k => !P(k), ee = k => !P(k) && x.test(k), q = k => !P(k) && R.test(k), re = k => R.exec(k), W = k => {
				if (q(k)) return k.split("/").filter(H => H.length > 0)[1]
			}, z = k => x.exec(k), X = k => {
				if (ee(k)) {
					const H = z(k);
					if (H) return H[1]
				}
			}, B = k => ee(k) && k.split("/")[2] === "register-domain", I = k => B(k) ? k.split("/") : null, L = k => {
				if (q(k)) {
					const [, , , H, ae, de, Ee, me] = k.split("/");
					return H === "traffic" && ae === "load-balancing" && de === "pools" && Ee === "edit" && me
				}
			}, U = k => {
				const H = I(k);
				if (H) return H[3]
			}, J = (k, H) => {
				var ae, de;
				return ((ae = k.pattern.match(/\:/g)) !== null && ae !== void 0 ? ae : []).length - ((de = H.pattern.match(/\:/g)) !== null && de !== void 0 ? de : []).length
			}, te = [...Object.values(l.C), ...Object.values(u.KJ), ...Object.values(m._j), ...Object.values(c._j), ...Object.values(s._j), ...Object.values(a._)].sort(J);

			function ie(k) {
				if (!V(k)) return k;
				for (const me of te)
					if (me.expression.test(k)) return me.pattern;
				if (r.eM.abuseReportTab.expression.test(k)) {
					const me = k.split("/"),
						ne = me[me.length - 1];
					return r.eM.abuseReportTab.pattern.replace(":tab", ne)
				}
				if (r.eM.abuseReport.expression.test(k)) return r.eM.abuseReport.pattern;
				const H = I(k);
				if (H) {
					const [, , me, , ...ne] = H;
					return `/:accountId/${me}/:domainName/${ne.join("/")}`
				}
				if (L(k)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const de = re(k);
				if (de) {
					const [, , , , me] = de;
					return `/:accountId/:zoneName${me||""}`
				}
				const Ee = z(k);
				if (Ee) {
					const [, , me] = Ee;
					return `/:accountId${me||""}`
				}
				return k
			}

			function N(k) {
				if (!!k) try {
					const ae = k.split(".").pop();
					if (ae && ae.length > 0) return ae
				} catch {}
			}

			function K(k, H = document.location.href) {
				try {
					const ae = new URL(k),
						de = new URL(H);
					if (ae.origin === de.origin) return `${ae.pathname}${ae.search}${ae.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return l
				},
				y: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				s = t.n(u);
			const m = /^\/domainconnect\/v2\/domaintemplates\//i,
				l = "domain-connect-redirect",
				c = () => {
					const g = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						m.test(g.pathname) && a.Z.set(l, g, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(F, y, t) {
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
		"../react/utils/zoneLevelAccess.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				P: function() {
					return u
				},
				b: function() {
					return s
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				r = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function a() {
				var m, l, c, g, n, o;
				return (m = window) === null || m === void 0 || (l = m.bootstrap) === null || l === void 0 || (c = l.data) === null || c === void 0 || (g = c.user) === null || g === void 0 || (n = g.betas) === null || n === void 0 || (o = n.some) === null || o === void 0 ? void 0 : o.call(n, i => i === "zone_level_access_beta")
			}

			function u() {
				const m = !!(0, e.Z)("zone-level-access");
				return a() || m
			}

			function s(m) {
				const l = !!(0, r.z1)("zone-level-access")(m);
				return a() || l
			}
		},
		"../utils/getDashVersion.ts": function(F, y, t) {
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
					var u, s;
					return (u = window) === null || u === void 0 || (s = u.build) === null || s === void 0 ? void 0 : s.dashVersion
				},
				a = () => {
					var u;
					return ((0, e.parse)((u = document) === null || u === void 0 ? void 0 : u.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Wi: function() {
					return Fe
				},
				IM: function() {
					return we
				},
				yV: function() {
					return S
				},
				Ug: function() {
					return b
				},
				v_: function() {
					return ge
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../react/utils/bootstrap.ts"),
				u = t("../react/app/providers/storeContainer.js"),
				s = t("../react/common/selectors/languagePreferenceSelector.ts"),
				m = t("../flags.ts"),
				l = t("../../../../node_modules/cookie/index.js"),
				c = t("../react/utils/url.ts"),
				g = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../../../../node_modules/lodash-es/memoize.js"),
				i = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				_ = t("../utils/getDashVersion.ts"),
				d = t("../react/common/selectors/accountSelectors.ts"),
				p = t("../react/common/selectors/entitlementsSelectors.ts"),
				h = t("../react/common/utils/getEnvironment.ts");

			function w(ce) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(Oe) {
						return Object.getOwnPropertyDescriptor(ve, Oe).enumerable
					})), _e.forEach(function(Oe) {
						E(ce, Oe, ve[Oe])
					})
				}
				return ce
			}

			function E(ce, le, ve) {
				return le = f(le), le in ce ? Object.defineProperty(ce, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[le] = ve, ce
			}

			function f(ce) {
				var le = O(ce, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function O(ce, le) {
				if (typeof ce != "object" || ce === null) return ce;
				var ve = ce[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(ce, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(ce)
			}
			const v = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				C = (0, o.Z)(ce => {
					try {
						return v.assertDecode((0, l.parse)(ce))
					} catch (le) {
						return console.error(le), {}
					}
				}),
				A = ce => (le, ve, _e) => {
					try {
						const Je = window.location.pathname,
							qe = (0, u.bh)().getState(),
							ut = C(document.cookie),
							Ge = w({
								page: (0, c.Fl)(_e.page || window.location.pathname),
								dashVersion: (0, _.t)(),
								environment: (0, h.Z)()
							}, ut);
						if (le === "identify") {
							var Oe, $e;
							const pt = {
								gates: (0, i.T2)(qe) || {},
								country: (Oe = t.g) === null || Oe === void 0 || ($e = Oe.bootstrap) === null || $e === void 0 ? void 0 : $e.ip_country
							};
							return ce(le, ve, w({}, Ge, pt, _e))
						} else {
							const pt = {
								accountId: (0, c.uW)(Je),
								zoneName: (0, c.hW)(Je),
								domainName: (0, c.Uh)(Je)
							};
							if ((0, c.qR)(Je)) {
								var He;
								const et = (0, d.D0)(qe);
								pt.isEntAccount = !!(et == null || (He = et.meta) === null || He === void 0 ? void 0 : He.has_enterprise_zones) || (0, p.p1)(qe)
							}
							if ((0, c.el)(Je)) {
								var st;
								const et = (0, g.nA)(qe);
								pt.zoneId = et == null ? void 0 : et.id, pt.plan = et == null || (st = et.plan) === null || st === void 0 ? void 0 : st.legacy_id
							}
							return ce(le, ve, w({}, Ge, pt, _e))
						}
					} catch (Je) {
						return console.error(Je), ce(le, ve, _e)
					}
				},
				D = ce => async (le, ve, _e) => {
					try {
						return await ce(le, ve, _e)
					} catch (Oe) {
						if (console.error(Oe), !ge()) throw Oe;
						return {
							status: "rejected",
							reason: Oe
						}
					}
				};
			var M = t("../react/app/components/AccountHome/tracking.ts"),
				j = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				T = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				R = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				x = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				P = t("../react/common/middleware/sparrow/errors.ts"),
				V = t("../react/pages/abuse/constants.ts"),
				ee = t("../react/pages/blocked-content/constants.ts"),
				q = t("../react/pages/caching/tracking.tsx"),
				re = t("../react/pages/dns/dns-records/tracking.ts"),
				W = t("../react/pages/home/alerts/tracking.ts"),
				z = t("../react/pages/home/audit-log/tracking.ts"),
				X = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				B = t("../react/pages/home/configurations/lists/tracking.ts"),
				I = t("../react/pages/home/domain-registration/tracking.ts"),
				L = t("../react/pages/home/members/sparrowEvents.ts"),
				U = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				J = t("../react/pages/hyperdrive/tracking.ts"),
				te = t("../react/pages/magic/network-monitoring/constants.ts"),
				ie = t("../react/pages/magic/overview/tracking.ts"),
				N = t("../react/pages/magic/packet-captures/constants.ts"),
				K = t("../react/pages/page-rules/tracking.ts"),
				k = t("../react/pages/pages/constants.ts"),
				H = t("../react/pages/pipelines/tracking.ts"),
				ae = t("../react/pages/profile/tracking.ts"),
				de = t("../react/pages/secrets-store/resources/constants.ts"),
				Ee = t("../react/pages/security-center/tracking.ts"),
				me = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
				ne = t("../react/pages/security/api-shield/tracking.ts"),
				he = t("../react/pages/security/bots/tracking.ts"),
				De = t("../react/pages/security/overview/resources/constants.ts"),
				Pe = t("../react/pages/security/page-shield/resources/index.ts"),
				Be = t("../react/pages/security/resources/constants.tsx"),
				ke = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				Ye = t("../react/common/components/filter-editor/triplet-fields/SequencesField/constants.tsx"),
				ze = t("../react/pages/security/settings/index.tsx"),
				nt = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				We = t("../react/pages/shared-config/sparrowEvents.tsx"),
				G = t("../react/pages/spectrum/tracking.tsx"),
				Ce = t("../react/pages/traffic/argo/tracking.ts"),
				Ue = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				xe = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				ot = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				dt = t("../react/pages/turnstile/tracking.ts"),
				gt = t("../react/pages/user-groups/sparrowEvents.ts"),
				Ae = t("../react/pages/zoneless-workers/constants.ts"),
				at = t("../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts"),
				Q = t("../react/pages/analytics/eos/resources/tracking.ts"),
				se = t("../react/pages/internal-dns/tracking.ts");
			const Te = ((ce, le, ...ve) => n.eg.union([n.eg.literal(ce), n.eg.literal(le), ...ve.map(_e => n.eg.literal(_e))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", ...Object.values(Q.f), "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "copy table cell", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Click on DNS Firewall feedback link", "Click on DNS Firewall add Cluster", "Hover on DNS Firewall feedback toast", "Click create DNS firewall cluster", "Click edit DNS firewall cluster", "Click on DNS Firewall edit Cluster button", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "route to custom error rules", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", M.gX.SPARROW_PROJECTS_TABLE_CLICK, M.gX.SPARROW_EMPTY_STATE_CTA_CLICK, M.gX.SPARROW_PRODUCT_CARD_CLICK, M.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, M.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, M.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, M.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, M.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, M.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, M.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ae.QV.clickedDownloadAnalytics, Ae.QV.clickedPrintAnalytics, Ae.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ae.QV.addWCITriggerToExistingWorker, Ae.QV.updateWCITrigger, Ae.QV.deleteWCITrigger, Ae.QV.addWCITriggerToNewWorker, Ae.QV.createWCIBuildForNewWorker, Ae.QV.completedWCIBuildForNewWorker, Ae.QV.changedDefaultConfigurations, Ae.QV.clickElement, k.QV.toggledPagesSmartPlacement, k.QV.downloadDemoProject, Ae.QV.clickCreateWorkerFromRepoNextStep, Ae.QV.clickCreateWorkerFromRepoPreviousStep, Ae.QV.clickCreateNewSCMConnection, Ae.QV.redirectFromSCMOAuth, Ae.QV.clickSubmitError, Ae.QV.selectTemplate, Ae.QV.clickedListTemplates, Ae.QV.clickedImportRepository, Ae.QV.clickedClonePublicRepositoryFromUrl, Ae.QV.templateStubWorkerCreated, Ae.QV.templateStubWorkerCreationFailed, Ae.QV.templateRepositoryCreated, Ae.QV.templateRepositoryCreationFailed, Ae.QV.copyTemplateC3Command, Ae.QV.templateDeployClick, Ae.QV.reauthenticateGithubModalShown, Ae.QV.updateGithubPermissionsClicked, Ae.QV.D2W_importRepository, Ae.QV.D2W_stubWorkerCreated, Ae.QV.D2W_stubWorkerCreationFailed, Ae.QV.D2W_repositoryCreated, Ae.QV.D2W_repositoryCreationFailed, Ae.QV.D2W_resourcesProvisioned, Ae.QV.D2W_resourceProvisioningFailed, Ae.QV.D2W_githubAPIRateLimitReached, Ae.QV.createResource, Ae.QV.deleteResource, Ae.QV.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", he.N3.INITIAL_FETCH_SCORES, he.N3.FETCH_CONFIGURATION, he.N3.INITIAL_FETCH_TIME_SERIES, he.N3.INITIAL_FETCH_ATTRIBUTES, he.N3.UPDATE_SETTINGS, he.N3.DELETE_RULE, he.N3.UPDATE_RULE, he.N3.FETCH_RULES, he.N3.CONFIGURE_BOT_MANAGEMENT, he.N3.WAF_RULES_REDIRECT, U.F.TOGGLE_TCP_PROTECTION, U.F.GET_TCP_PROTECTION_PREFIXES, U.F.CREATE_TCP_PROTECTION_PREFIXES, U.F.CREATE_TCP_PROTECTION_PREFIX, U.F.UPDATE_TCP_PROTECTION_PREFIX, U.F.DELETE_TCP_PROTECTION_PREFIX, U.F.DELETE_TCP_PROTECTION_PREFIXES, U.F.GET_TCP_PROTECTION_ALLOWLIST, U.F.CREATE_TCP_PROTECTION_ALLOWLIST, U.F.UPDATE_TCP_PROTECTION_ALLOWLIST, U.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, U.F.DELETE_TCP_PROTECTION_ALLOWLIST, U.F.GET_SYN_PROTECTION_RULES, U.F.GET_SYN_PROTECTION_RULE, U.F.CREATE_SYN_PROTECTION_RULE, U.F.UPDATE_SYN_PROTECTION_RULE, U.F.DELETE_SYN_PROTECTION_RULE, U.F.GET_TCP_FLOW_PROTECTION_RULES, U.F.GET_TCP_FLOW_PROTECTION_RULE, U.F.CREATE_TCP_FLOW_PROTECTION_RULE, U.F.UPDATE_TCP_FLOW_PROTECTION_RULE, U.F.DELETE_TCP_FLOW_PROTECTION_RULE, U.F.GET_SYN_PROTECTION_FILTERS, U.F.GET_SYN_PROTECTION_FILTER, U.F.CREATE_SYN_PROTECTION_FILTER, U.F.UPDATE_SYN_PROTECTION_FILTER, U.F.DELETE_SYN_PROTECTION_FILTER, U.F.GET_TCP_FLOW_PROTECTION_FILTERS, U.F.GET_TCP_FLOW_PROTECTION_FILTER, U.F.CREATE_TCP_FLOW_PROTECTION_FILTER, U.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, U.F.DELETE_TCP_FLOW_PROTECTION_FILTER, U.F.GET_DNS_PROTECTION_RULES, U.F.GET_DNS_PROTECTION_RULE, U.F.CREATE_DNS_PROTECTION_RULE, U.F.UPDATE_DNS_PROTECTION_RULE, U.F.DELETE_DNS_PROTECTION_RULE, Pe.FV.MANAGE_PAGE_SHIELD_POLICY, Pe.FV.CONFIGURE_PAGE_SHIELD, Pe.FV.VIEW_DETECTED_CONNECTIONS, Pe.FV.VIEW_DETECTED_SCRIPTS, Pe.FV.VIEW_PAGE_SHIELD_POLICIES, Pe.FV.VIEW_PAGE_SHIELD_SETTINGS, Pe.FV.OPEN_MUTABLE_VERSION_TOOLTIP, Pe.FV.SHOW_MUTABLE_VERSION_TOOLTIP, B.y.CREATE_LIST, B.y.DELETE_LIST, B.y.ADD_LIST_ITEM, B.y.DELETE_LIST_ITEM, J.KO.PURCHASE_WORKERS_PAID, J.KO.LIST_CONFIGS, J.KO.SEARCH_CONFIGS, J.KO.CREATE_HYPERDRIVE_CONFIG, J.KO.VIEW_CONFIG_DETAILS, J.KO.UPDATE_CACHING_SETTINGS, J.KO.UPDATE_ORIGIN_CONN_LIM_SETTINGS, J.KO.DELETE_HYPERDRIVE_CONFIG, J.KO.CLICK_HYPERDRIVE_DOCUMENTATION, J.KO.CLICK_GET_STARTED_GUIDE, J.KO.CLICK_CONNECTIVITY_GUIDES, J.KO.CLICK_QUICK_LINK, J.KO.CLICK_DISCORD, J.KO.CLICK_COMMUNITY, G.N.CNAME, G.N.IP_ADDRESS, G.N.LB, G.N.UPDATE_CNAME, G.N.UPDATE_IP_ADDRESS, G.N.UPDATE_LB, G.N.DISABLE, q.N.TIERED_CACHE, q.N.CACHE_PURGE, q.N.CACHE_ANALYTICS, ...(0, dt.P)(), ...(0, x.x4)(), ...(0, ze.m8)(), ...(0, L.SH)(), ...(0, gt.Ky)(), ...(0, T.Cf)(), ot.N.CREATE, ot.N.EVENTS, ot.N.ANALYTICS, ot.N.UPDATE, ot.N.GENERATE_PREVIEW, Ee.RY.INITIATE_URL_SCAN, Ee.RY.LOAD_SCAN_INFO, Ee.Ev.LOAD_THREAT_EVENTS, Ee.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, Ee.Ev.THREAT_EVENTS_FILTERS, Ee.Ev.ABUSE_REPORT_BUTTON_CLICK, Ee.Ev.ABUSE_REPORT_SUBMIT_CLICK, Ee.Ev.ABUSE_REPORT_SUBMIT_FAILED, Ee.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, Ee.v9.EXPAND_INSIGHT_ROW, Ee.v9.ONE_CLICK_RESOLVE_BUTTON, Ee.v9.FOLLOW_RESOLVE_URL, Ee.v9.MANAGE_INSIGHT, Ee.v9.CLICK_SCAN_NOW, Ee.v9.CLICK_EXPORT_INSIGHTS, Ee.v9.BULK_ARCHIVE, Ee.v9.CLICK_DETAILS_BUTTON, ne.Fj[ne.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, ne.Fj[ne.kq.ENDPOINT_MANAGEMENT].detailedMetrics, ne.Fj[ne.kq.ENDPOINT_MANAGEMENT].createEndpoint, ne.Fj[ne.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, ne.Fj[ne.kq.ENDPOINT_MANAGEMENT].deployRouting, ne.Fj[ne.kq.ENDPOINT_MANAGEMENT].deleteRouting, ne.Fj[ne.kq.API_DISCOVERY].viewDiscoveredEndpoints, ne.Fj[ne.kq.API_DISCOVERY].saveDiscoveredEndpoint, ne.Fj[ne.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, ne.Fj[ne.kq.SCHEMA_VALIDATION].viewSchemasList, ne.Fj[ne.kq.SCHEMA_VALIDATION].uploadSchema, ne.Fj[ne.kq.SCHEMA_VALIDATION].viewSchemaAdoption, ne.Fj[ne.kq.SCHEMA_VALIDATION].downloadSchema, ne.Fj[ne.kq.SCHEMA_VALIDATION].deleteSchema, ne.Fj[ne.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, ne.Fj[ne.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, ne.Fj[ne.kq.SEQUENCE_ANALYTICS].viewSequencesPage, ne.Fj[ne.kq.JWT_VALIDATION].viewJWTRules, ne.Fj[ne.kq.JWT_VALIDATION].addJWTRule, ne.Fj[ne.kq.JWT_VALIDATION].editJWTRule, ne.Fj[ne.kq.JWT_VALIDATION].deleteJWTRule, ne.Fj[ne.kq.JWT_VALIDATION].reprioritizeJWTRule, ne.Fj[ne.kq.JWT_VALIDATION].viewJWTConfigs, ne.Fj[ne.kq.JWT_VALIDATION].addJWTConfig, ne.Fj[ne.kq.JWT_VALIDATION].editJWTConfig, ne.Fj[ne.kq.JWT_VALIDATION].deleteJWTConfig, ne.Fj[ne.kq.SETTINGS].redirectToFirewallRulesTemplate, ne.Fj[ne.kq.SETTINGS].redirectToPages, ne.Fj[ne.kq.SETTINGS].listSessionIdentifiers, ne.Fj[ne.kq.SETTINGS].listRequestsContainingSessionIdentifiers, ne.Fj[ne.kq.SETTINGS].addOrRemoveSessionIdentifiers, ne.Fj[ne.kq.SETTINGS].redirectToCustomRules, ne.Fj[ne.kq.SETTINGS].listAllFallthroughSchemas, ne.Fj[ne.kq.SEQUENCE_RULES].listSequenceRules, ne.Fj[ne.kq.SEQUENCE_RULES].deleteSequenceRule, ne.Fj[ne.kq.SEQUENCE_RULES].reorderSequenceRule, ne.Fj[ne.kq.SEQUENCE_RULES].createSequenceRule, ne.Fj[ne.kq.SEQUENCE_RULES].editSequenceRule, z.Q.TOGGLE_V2, z.Q.FILTER, z.Q.FILTER_COUNTS, z.Q.FEEDBACK, z.Q.API_LATENCY, xe.Z.ANALYTICS, xe.Z.CREATE_AND_DEPLOY, xe.Z.CREATE_MONITOR_LINK, xe.Z.CREATE_MONITOR, xe.Z.CREATE_POOL_LINK, xe.Z.CREATE_POOL, xe.Z.EDIT_MONITOR, xe.Z.EDIT_POOL, xe.Z.LOAD_BALANCING_TABLE, xe.Z.POOL_TABLE, xe.Z.EDIT_MONITOR_LINK, xe.Z.EDIT_POOL_LINK, ...Ue.eT, W.y.SECONDARY_DNS_NOTIFICATION_CREATE, W.y.SECONDARY_DNS_NOTIFICATION_UPDATE, W.y.SECONDARY_DNS_NOTIFICATION_DELETE, re.U.ZONE_TRANSFER_SUCCESS, re.U.DNS_RECORD_CREATE, re.U.DNS_RECORD_UPDATE, re.U.DNS_RECORD_DELETE, X.Y.PEER_DNS_CREATE, X.Y.PEER_DNS_UPDATE, X.Y.PEER_DNS_DELETE, X.Y.ZONE_TRANSFER_ENABLE, X.Y.ZONE_TRANSFER_DISABLE, Ce.V.ARGO_ENABLEMENT, Ce.V.ARGO_GEO_ANALYTICS_FETCH, Ce.V.ARGO_GLOBAL_ANALYTICS_FETCH, N.X.VIEW_BUCKETS_LIST, N.X.CREATE_BUCKET, N.X.VALIDATE_BUCKET, N.X.DELETE_BUCKET, N.X.VIEW_CAPTURES_LIST, N.X.CREATE_SIMPLE_CAPTURE, N.X.CREATE_FULL_CAPTURE, N.X.VIEW_FULL_CAPTURE, N.X.DOWNLOAD_SIMPLE_CAPTURE, te.bK.VIEW_RULES, te.bK.CREATE_RULE, te.bK.UPDATE_RULE, te.bK.DELETE_RULE, te.bK.VIEW_CONFIGURATION, te.bK.CREATE_CONFIGURATION, te.bK.UPDATE_CONFIGURATION, te.bK.DELETE_CONFIGURATION, ie.r8.VIEW_ALERTS, ie.r8.VIEW_ALERTS_HISTORY, ie.r8.MAGIC_OVERVIEW_ANALYTICS, ie.VZ.CREATE_SITE, ie.VZ.CREATE_TUNNEL, ie.VZ.CREATE_STATIC_ROUTE, me.DC.CLICK_ADAPTIVE_SAMPLING, me.DC.CLICK_TO_LOG_EXPLORER_BANNER, me.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, me.DC.CLICK_SWITCH_TO_RAW_LOGS, me.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", I.U.REGISTER_DOMAIN_SEARCH_SUBMIT, I.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, I.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, I.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, I.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, I.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, I.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, I.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, I.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, I.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, I.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, I.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, I.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, I.U.REGISTER_DOMAIN_CHECKOUT_ERROR, I.U.TRANSFER_DOMAIN_CHANGE_STEP, I.U.RENEW_DOMAIN_COMPLETED, I.U.RESTORE_DOMAIN_INIT, I.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, I.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, I.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, I.U.RESTORE_DOMAIN_FAILURE, I.U.RESTORE_DOMAIN_COMPLETED, I.U.DOMAIN_DELETE_INIT, I.U.DOMAIN_DELETE_COMPLETED, I.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, I.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, I.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, I.U.DOMAIN_DELETE_CONFIRM_DELETE, I.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, I.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, I.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, I.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, I.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, I.U.DOMAIN_MOVE_START_FLOW, I.U.DOMAIN_MOVE_OPEN_DOCS, I.U.DOMAIN_MOVE_CLOSE_FLOW, I.U.DOMAIN_MOVE_PROGRESS_FLOW, I.U.DOMAIN_MOVE_SUBMIT, I.U.DOMAIN_MOVE_INITIATE_SUCCESS, I.U.DOMAIN_MOVE_INITIATE_ERROR, I.U.DOMAIN_MOVE_CANCEL, I.U.DOMAIN_MOVE_CANCEL_SUCCESS, I.U.DOMAIN_MOVE_CANCEL_ERROR, I.U.ACTION_CENTER_NAVIGATE, I.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, I.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, I.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, I.U.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE, I.U.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS, I.U.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR, de.z3.CREATE_SECRET, de.z3.DELETE_SECRET, de.z3.BIND_SECRET, de.z3.DUPLICATE_SECRET, de.z3.EDIT_SECRET, H.KO.CLICK_GET_STARTED_GUIDE, H.KO.CLICK_PIPELINE_DOCUMENTATION, H.KO.CLICK_QUICK_LINK, H.KO.CREATE_PIPELINE, H.KO.DELETE_PIPELINE, H.KO.LIST_PIPELINES, H.KO.VIEW_PIPELINE, j.S.EXISTING_DOMAIN, j.S.NEW_DOMAIN, j.S.WAF_RULESET, j.S.WORKERS, j.S.PAGES, j.S.R2, j.S.ACCOUNT_MEMBERS, K._.TEMPLATE_PRODUCT_SELECTED, K._.TEMPLATE_SELECTED, K._.TEMPLATE_SAVE_DRAFT, K._.TEMPLATE_CANCEL, K._.TEMPLATE_DEPLOY, We.D.CLICK_GO_BACK_SHARE_MODAL, We.D.CLICK_MENU_ITEM_SHARE, We.D.CLICK_ON_CANCEL_SHARE_MODAL, We.D.CLICK_ON_CLOSE_SHARE_MODAL, We.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, We.D.CLICK_ON_DELETE_RULESET, We.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, We.D.CLICK_ON_EDIT_SHARE_PERMISSION, We.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, We.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, We.D.CLICK_ON_SHARE_TABLE_ROW, Be.pR.CLICK_GEOGRAPHICAL_TEMPLATE, Be.pR.CLICK_IP_TEMPLATE, Be.pR.CLICK_USER_AGENT_TEMPLATE, Be.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, ze.vc.CREATED, ze.vc.ENABLED, ze.vc.DISABLED, ze.vc.DELETED, ze.vc.UPDATED, ze.vc.DOWNLOADED, ee.Gk.REQUEST_REVIEW, ee.Gk.COPY_URL, R.v.FIELD, R.v.OPERATOR, nt.Vj.SHOW_LCC_MIGRATION_BANNER, nt.Vj.CLICK_LCC_DOCUMENTATION, nt.Vj.CLICK_LCC_UPGRADE_GUIDE, nt.Vj.SHOW_LCC_MIGRATION_WARNING, ke.y.CLICK_DISMISS_INELIGIBILITY, ke.y.CLICK_NEXT_STEP, ke.y.CLICK_OPT_IN, ke.y.CLICK_OPT_IN_BUTTON, ke.y.CLICK_OPT_OUT_BUTTON, ke.y.DISPLAY_MODAL, ke.y.DISPLAY_OPT_OUT_MODAL, ke.y.DISPLAY_TOOLTIP_NOT_AVAILABLE, ke.y.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, De.AZ.LOAD_INSIGHTS, De.AZ.OPEN_SIDE_MODAL_INSIGHT, De.AZ.CLOSE_SIDE_MODAL_INSIGHT, De.AZ.CLICK_ACTION_INSIGHT, at.YC.CHANGE_SETTING, at.YC.LOAD_SETTINGS, at.YC.OPEN_SIDE_MODAL_SETTING, at.YC.CLOSE_SIDE_MODAL_SETTING, at.YC.FILTER_SETTING, me.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, me.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, me.DC.OPEN_SIDE_DRAWER, me.DC.CLOSE_SIDE_DRAWER, Ye.Xc, Ye.Aq, ae.QV[ae.Xn].clickLoginFromMobileApp2fa, ae.QV[ae.Xn].clickTryOther2FAMethodOrBackupCode, ae.QV[ae.Xn].clickTryRecovery, ae.QV[ae.xq].clickRegenerateBackupCodes, V.Vq.APPEAL_MITIGATION_SUBMIT, V.Vq.APPEAL_MITIGATION_SUCCESS, V.Vq.APPEAL_MITIGATION_FAILURE, V.Vq.CLICK_ABUSE_REPORT_ID, V.Vq.CLICK_ABUSE_REPORT_MITIGATIONS_LINK, se.N3.CLICK_GIVE_FEEDBACK, se.N3.CLICK_NAVIGATION_TAB, se.N3.CLICK_SEARCH_BY_ZONE_NAME, se.N3.CLICK_SEARCH_BY_VIEW_NAME, se.N3.CLICK_CREATE_AN_INTERNAL_ZONE, se.N3.CLICK_CREATE_A_VIEW, se.N3.CLICK_SAVE_ZONE, se.N3.CLICK_SAVE_VIEW, se.N3.CLICK_SEARCH_BY_RECORD_NAME, se.N3.CLICK_ZONE_NAME, se.N3.CLICK_ADD_A_RECORD, se.N3.CLICK_ADD_RECORD_SAVE, se.N3.CLICK_RECORD_EDIT, se.N3.CLICK_EDIT_RECORD_SAVE, se.N3.CLICK_IMPORT_RECORDS, se.N3.CLICK_MANAGE_LINKED_VIEWS, se.N3.CLICK_SAVE_MANAGE_LINKED_VIEWS, se.N3.CLICK_VIEW_RECORD),
				je = n.eg.exactStrict(n.eg.object({
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
				Ke = (ce, le) => {
					const [ve, _e] = Ve(le);
					let Oe, $e;
					return (0, n.nM)(Te.decode(ce)) && (Oe = new P.Uh(ce)), _e && _e.length > 0 && ($e = new P.oV(ce, _e)), [ve, Oe, $e]
				},
				Ve = ce => {
					const le = je.decode(ce);
					if ((0, n.nM)(le)) {
						const ve = le.left.map(({
							context: _e
						}) => _e.map(({
							key: Oe
						}) => Oe)).reduce((_e, Oe) => _e.concat(Oe), []).filter(_e => _e in ce);
						return [ht(ve, ce), ve]
					}
					return [ce, []]
				},
				ht = (ce, le) => Object.entries(le).reduce((ve, [_e, Oe]) => (ce.includes(_e) || (ve[_e] = Oe), ve), {}),
				bt = ce => (le, ve, _e) => {
					const [Oe, $e, He] = Ke(ve, _e);
					if ($e) throw $e;
					return He && console.error(He), ce(le, ve, Oe)
				};
			var ft = t("../react/utils/zaraz.ts");
			const xt = {
					identify: !0
				},
				Ze = ce => (le, ve, _e) => (xt[ve] || ft.tg === null || ft.tg === void 0 || ft.tg.track(ve, _e), ce(le, ve, _e));
			var Et = t("../react/common/selectors/userSelectors.ts"),
				ct = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function rt(ce) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(Oe) {
						return Object.getOwnPropertyDescriptor(ve, Oe).enumerable
					})), _e.forEach(function(Oe) {
						vt(ce, Oe, ve[Oe])
					})
				}
				return ce
			}

			function vt(ce, le, ve) {
				return le = Me(le), le in ce ? Object.defineProperty(ce, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[le] = ve, ce
			}

			function Me(ce) {
				var le = Y(ce, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function Y(ce, le) {
				if (typeof ce != "object" || ce === null) return ce;
				var ve = ce[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(ce, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(ce)
			}
			const pe = new Set(["cf_argo", "load_balancing_basic_plus"]),
				be = new Set(["pro", "business"]),
				Ie = ({
					price: ce,
					ratePlanId: le,
					ratePlanName: ve,
					frequency: _e,
					isNewSubscription: Oe
				}) => ({
					event: "purchase",
					new_subscription: Oe,
					ecommerce: {
						transaction_id: (0, ct.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: ce
					},
					items: [{
						item_id: le,
						item_name: ve || le,
						frequency: _e,
						price: ce
					}]
				}),
				Re = ce => {
					const {
						price: le,
						frequency: ve,
						plan: _e,
						ratePlanId: Oe,
						ratePlanName: $e
					} = ce;
					return be.has(_e) ? rt({}, Ie({
						price: le,
						ratePlanId: Oe,
						ratePlanName: $e,
						frequency: ve,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				Qe = ce => {
					const {
						price: le,
						frequency: ve,
						ratePlan: _e,
						ratePlanName: Oe
					} = ce;
					return pe.has(_e) ? rt({}, Ie({
						price: le,
						ratePlanId: _e,
						ratePlanName: Oe,
						frequency: ve,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				it = ce => {
					const {
						price: le,
						frequency: ve,
						plan: _e,
						ratePlanId: Oe,
						ratePlanName: $e,
						label: He
					} = ce;
					return be.has(_e) ? rt({}, Ie({
						price: le,
						frequency: ve,
						ratePlanId: Oe,
						ratePlanName: $e,
						isNewSubscription: !1
					}), {
						label: He || _e
					}) : void 0
				},
				Bt = ce => {
					const {
						price: le,
						frequency: ve,
						ratePlan: _e,
						ratePlanName: Oe,
						oldRatePlan: $e
					} = ce;
					return pe.has(_e) ? rt({}, Ie({
						price: le,
						frequency: ve,
						ratePlanId: _e,
						ratePlanName: Oe,
						isNewSubscription: !1
					}), {
						label: `${$e}->${_e}`
					}) : void 0
				},
				yt = "pageview",
				Pt = "create zone",
				Xe = "create user",
				Ct = "Plan Purchase Success",
				Lt = "Product Purchase Success",
				Ot = "Plan Update Success",
				St = "Product Update Success",
				kt = {
					[yt]: !0,
					[Pt]: !0,
					[Xe]: !0,
					[Ct]: !0,
					[Lt]: !0,
					[Ot]: !0,
					[St]: !0
				},
				Ut = ce => {
					const le = /\|MCMID\|([0-9]+)\|/,
						ve = ce.match(le);
					return ve ? ve[1] : void 0
				},
				Tt = ce => {
					var le;
					const {
						deviceViewport: ve,
						page: _e,
						previousPage: Oe,
						pageName: $e,
						utm_campaign: He,
						_ga: st,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Je
					} = ce, {
						origin: qe
					} = window.location, ut = (0, Et.PR)((0, u.bh)().getState());
					return {
						event: Oe !== void 0 && _e !== Oe ? "virtual_page_view" : "page_load",
						device_type: ve,
						hostname: qe,
						language: navigator.language,
						locale: (0, s.r)((0, u.bh)().getState()),
						page_location: _e ? `${qe}${_e}` : "[redacted]",
						page_path: _e ? `${_e}` : "[redacted]",
						page_referrer: Oe ? `${qe}/${Oe}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: $e || "[redacted]",
						page_url: _e ? `${qe}${_e}` : "[redacted]",
						query: He ? `?utm_campaign=${He}` : "[redacted]",
						user_properties: {
							ga_client_id: (le = st) !== null && le !== void 0 ? le : void 0,
							ga_client_id_s: st ? `s${st}` : void 0,
							user_id: Fe() ? ut == null ? void 0 : ut.id : void 0,
							ecid: Je ? Ut(Je) : void 0
						}
					}
				},
				jt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				wt = ce => {
					const {
						status: le
					} = ce;
					return le === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				$t = (ce, le) => {
					switch (ce) {
						case yt:
							return Tt(le);
						case Pt:
							return jt();
						case Xe:
							return wt(le);
						case Ct:
							return Re(le);
						case Lt:
							return Qe(le);
						case Ot:
							return it(le);
						case St:
							return Bt(le);
						default:
							return
					}
				},
				zt = ce => (le, ve, _e) => {
					if (kt[ve]) {
						var Oe;
						const $e = $t(ve, _e);
						window.dataLayer = window.dataLayer || [], $e && ((Oe = window.dataLayer) === null || Oe === void 0 || Oe.push($e))
					}
					return ce(le, ve, _e)
				};
			var It = t("../react/utils/cookiePreferences.ts");

			function Mt(ce) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(Oe) {
						return Object.getOwnPropertyDescriptor(ve, Oe).enumerable
					})), _e.forEach(function(Oe) {
						Ft(ce, Oe, ve[Oe])
					})
				}
				return ce
			}

			function Ft(ce, le, ve) {
				return le = Kt(le), le in ce ? Object.defineProperty(ce, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[le] = ve, ce
			}

			function Kt(ce) {
				var le = Rt(ce, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function Rt(ce, le) {
				if (typeof ce != "object" || ce === null) return ce;
				var ve = ce[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(ce, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(ce)
			}
			const b = ce => {
					r().init(Mt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: ge() && !(0, a.gm)() && Fe(),
						middlewares: [D, bt, A, Ze, zt]
					}, ce))
				},
				S = () => {
					r().identify(Mt({}, (0, e.getAttribution)(), {
						locale: (0, s.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, m.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				ge = () => !0,
				we = () => {
					(0, It.kT)("sparrow_id")
				},
				Fe = () => (0, It.Xm)()
		},
		"../utils/initStyles.ts": function(F, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = t("../react/app/providers/storeContainer.js");
			const a = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				s = l => {
					const c = [];
					for (let g in l.colors) {
						const n = l.colors[g];
						if (Array.isArray(n) && g !== "categorical")
							for (let o = 0; o < n.length; ++o) c.push(`--cf-${g}-${o}:${n[o]};`)
					}
					return c.join(`
`)
				},
				m = () => {
					const l = (0, e.Yc)(),
						c = `
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
      background-color: ${l?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${l?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${l?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${l?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${l?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${l?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
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
					let g = document.getElementById(a);
					g ? g.innerText = "" : (g = document.createElement("style"), g.id = a, u.appendChild(g)), g.appendChild(document.createTextNode(c)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(m), y.Z = m
		},
		"../utils/sentry/lastSentEventId.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				e: function() {
					return r
				}
			});
			const r = (() => {
				let a = "";
				return {
					setEventId: m => (!m || typeof m != "string" || (a = m), a),
					getEventId: () => a
				}
			})()
		},
		"../utils/zaraz.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Ro: function() {
					return o
				},
				bM: function() {
					return c
				},
				tg: function() {
					return l
				},
				yn: function() {
					return n
				}
			});

			function e(i) {
				for (var _ = 1; _ < arguments.length; _++) {
					var d = arguments[_] != null ? Object(arguments[_]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(h) {
						return Object.getOwnPropertyDescriptor(d, h).enumerable
					})), p.forEach(function(h) {
						r(i, h, d[h])
					})
				}
				return i
			}

			function r(i, _, d) {
				return _ = a(_), _ in i ? Object.defineProperty(i, _, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[_] = d, i
			}

			function a(i) {
				var _ = u(i, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function u(i, _) {
				if (typeof i != "object" || i === null) return i;
				var d = i[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(i, _ || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(i)
			}
			const s = {
					track: (i, _) => null,
					set: (i, _) => console.log(`zaraz.set(${i}, ${_})`)
				},
				m = {
					track: (i, _) => {
						var d;
						(d = window.zaraz) === null || d === void 0 || d.track(i, e({}, _, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (i, _) => {
						var d;
						return (d = window.zaraz) === null || d === void 0 ? void 0 : d.set(i, _)
					}
				};
			let l;
			const c = () => {
					window.zaraz, l = m
				},
				g = ["email", "first_name", "last_name"],
				n = i => {
					g.forEach(_ => {
						var d;
						(d = l) === null || d === void 0 || d.set(_, i[_])
					})
				},
				o = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				u = t.n(a),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				l = t.n(m),
				c = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				g = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-icon/es/index.js"),
				o = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				i = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-forms/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				d = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				p = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				h = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				w = t("../../../common/component/component-filter-bar/src/constants.js"),
				E = t("../../../common/component/component-filter-bar/src/utils.js");

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(B) {
					for (var I = 1; I < arguments.length; I++) {
						var L = arguments[I];
						for (var U in L) Object.prototype.hasOwnProperty.call(L, U) && (B[U] = L[U])
					}
					return B
				}, f.apply(this, arguments)
			}

			function O(B) {
				for (var I = 1; I < arguments.length; I++) {
					var L = arguments[I] != null ? Object(arguments[I]) : {},
						U = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(L).filter(function(J) {
						return Object.getOwnPropertyDescriptor(L, J).enumerable
					})), U.forEach(function(J) {
						v(B, J, L[J])
					})
				}
				return B
			}

			function v(B, I, L) {
				return I = C(I), I in B ? Object.defineProperty(B, I, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[I] = L, B
			}

			function C(B) {
				var I = A(B, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function A(B, I) {
				if (typeof B != "object" || B === null) return B;
				var L = B[Symbol.toPrimitive];
				if (L !== void 0) {
					var U = L.call(B, I || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(B)
			}
			const D = 70,
				M = (0, s.SU)(({
					showOverflow: B
				}) => O({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, B ? {} : {
					maxHeight: D,
					overflow: "hidden"
				})),
				j = (0, s.SU)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				T = (0, s.SU)(({
					theme: B
				}) => ({
					backgroundColor: B.colors.background,
					py: 1,
					px: 2,
					borderRadius: B.radii[2],
					border: `1px solid ${B.colors.gray[7]}`,
					fontSize: B.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: B.colors.gray[4]
					}
				}), "div"),
				R = (0, s.SU)(() => ({
					mr: 1
				}), "span"),
				x = (0, s.SU)(({
					theme: B
				}) => ({
					color: B.colors.gray[4],
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
				V = (0, s.SU)(({
					buttonStyle: B
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
				}, B), g.zx),
				ee = (0, s.SU)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				q = (0, s.SU)(({
					theme: B
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: B.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: B.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: B.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: B.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				re = (0, s.SU)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				W = B => B.current ? [...B.current.children].reduce((I, L) => (L.offsetTop >= D && I++, I), 0) : 0;
			let z = 0;
			class X extends e.Component {
				constructor() {
					super();
					v(this, "overflowWrapper", (0, e.createRef)()), v(this, "hasOverflowed", I => {
						const L = W(this.overflowWrapper);
						I.scrollHeight > D && L >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (I.scrollHeight < D || L === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), v(this, "addNewFilter", () => {
						const {
							filterDefinitions: I
						} = this.props, L = (0, E.TE)(I), U = Object.keys(L)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: U,
								operator: (0, E.uv)(U, L),
								value: (0, E.TT)(U, L)
							}
						})
					}), v(this, "handleOpenFilterEdit", I => {
						this.setState({
							openFilter: I,
							filterChanges: O({}, this.props.filters[I])
						})
					}), v(this, "handleRemoveFilterClick", (I, L) => {
						I.stopPropagation(), this.removeFilter(L)
					}), v(this, "removeFilter", I => {
						const {
							handleFiltersChange: L
						} = this.props, U = [...this.props.filters], J = U[I];
						U.splice(I, 1), L(U), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: J.key,
							operator: J.operator,
							value: J.value
						})
					}), v(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), v(this, "handleFilterSubmit", I => {
						const {
							filterDefinitions: L
						} = this.props;
						I.preventDefault();
						const {
							filterChanges: U
						} = this.state, J = typeof L[U.key].parse == "function" ? Array.isArray(U.value) ? U.value.map(L[U.key].parse) : L[U.key].parse(U.value) : U.value;
						if (L[U.key].validate && (Array.isArray(J) ? !J.every(L[U.key].validate) : !L[U.key].validate(J))) return this.setState({
							invalid: !0
						});
						const te = [...this.props.filters],
							ie = O({}, U, {
								value: J
							}),
							N = !te[this.state.openFilter];
						N ? te.push(ie) : te[this.state.openFilter] = O({}, ie), this.props.handleFiltersChange(te, ie), (N ? this.props.onAddFilter : this.props.onEditFilter)({
							field: ie.key,
							operator: ie.operator,
							value: ie.value
						}), this.closeOpenFilterChanges()
					}), v(this, "handlePendingKeyChange", ({
						value: I
					}) => {
						const {
							filterDefinitions: L
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: I,
								operator: (0, E.uv)(I, L),
								value: (0, E.TT)(I, L)
							}
						})
					}), v(this, "handlePendingOperatorChange", ({
						value: I
					}) => {
						let L = O({}, this.state.filterChanges, {
							operator: I
						});
						if ((0, E.dr)(I)) {
							var U, J;
							((U = this.state.filterChanges) === null || U === void 0 ? void 0 : U.value) && !Array.isArray((J = this.state.filterChanges) === null || J === void 0 ? void 0 : J.value) && (L.value = [this.state.filterChanges.value])
						} else {
							var te, ie, N;
							((te = this.state.filterChanges) === null || te === void 0 ? void 0 : te.value) && Array.isArray((ie = this.state.filterChanges) === null || ie === void 0 ? void 0 : ie.value) && ((N = this.state.filterChanges) === null || N === void 0 ? void 0 : N.value.length) > 0 && (L.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: L
						})
					}), v(this, "handlePendingValueChange", I => {
						this.setState({
							invalid: !1,
							filterChanges: O({}, this.state.filterChanges, {
								value: I
							})
						})
					}), v(this, "handleShowOverflow", () => {
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
						id: ++z
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(I) {
					I.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(I) {
					const {
						formatLabel: L,
						filterDefinitions: U
					} = this.props, {
						operator: J
					} = this.state.filterChanges, te = U[this.state.filterChanges.key], ie = this.state.filterChanges.value, N = k => Array.isArray(k) ? k.map(H => H.value) : (k == null ? void 0 : k.value) || null;
					if (te.renderValueComponent) return te.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (te.type) {
						case w.k.custom: {
							var K;
							return r().createElement(te.CustomComponent, f({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (K = te == null ? void 0 : te.customProps) !== null && K !== void 0 ? K : {}))
						}
						case w.k.select:
							return (0, E.dr)(J) ? r().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !te.options,
								value: typeof ie.split == "function" ? ie == null ? void 0 : ie.split(",") : Array.isArray(ie) ? ie : [],
								options: te.options ? te.options.map(k => ({
									value: k.value || k,
									label: k.label || L(this.state.filterChanges.key, k, I)
								})) : ie ? (Array.isArray(ie) ? ie : ie.split(",")).map(k => ({
									label: k,
									value: k
								})) : [],
								noOptionsMessage: () => null,
								placeholder: r().createElement(m.Trans, {
									id: te.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: te.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: k => {
									this.handlePendingValueChange(N(k))
								},
								isValidNewOption: k => {
									const H = te.validate;
									return !H && k || k && H([k])
								},
								getNewOptionData: (k, H) => ({
									value: k,
									label: H
								})
							}) : r().createElement(i.hQ, {
								hideLabel: !0,
								value: ie,
								options: te.options.map(k => ({
									value: k,
									label: L(this.state.filterChanges.key, k, I)
								})),
								onChange: ({
									value: k
								}) => this.handlePendingValueChange(k)
							});
						case w.k.string:
						default:
							return (0, E.dr)(J) ? r().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof ie.split == "function" ? ie == null ? void 0 : ie.split(",") : Array.isArray(ie) ? ie : [],
								options: ie ? (Array.isArray(ie) ? ie : ie.split(",")).map(k => ({
									label: k,
									value: k
								})) : [],
								noOptionsMessage: () => null,
								placeholder: I.t("analytics.report.filters.labels.placeholder", {
									example: U[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: k => {
									this.handlePendingValueChange(N(k))
								},
								isValidNewOption: k => {
									const H = te.validate;
									return !H && k || k && H([k])
								},
								getNewOptionData: (k, H) => ({
									value: k,
									label: H
								}),
								formatCreateLabel: k => I.t("filter_editor.value_create_label", {
									value: k
								})
							}) : r().createElement(m.I18n, null, k => r().createElement(c.I, {
								value: this.state.filterChanges.value,
								onChange: H => this.handlePendingValueChange(H.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: k.t("analytics.report.filters.labels.placeholder", {
									example: U[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: I,
						filterDefinitions: L,
						modalStyles: U,
						filterIconType: J,
						buttonStyle: te,
						secondaryActionComponent: ie
					} = this.props, N = W(this.overflowWrapper), K = `filterPanel${this.state.id}`, k = this.state.openFilter !== null;
					return r().createElement(m.I18n, null, H => r().createElement(_.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, r().createElement(re, null, r().createElement(_.ZC, {
						display: "flex",
						flexDirection: "row"
					}, r().createElement(V, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": k,
						"aria-controls": K,
						inverted: !0,
						buttonStyle: te
					}, r().createElement(n.J, {
						type: J || "add",
						mr: 1,
						label: H.t("common.add", {
							_: "Add"
						})
					}), r().createElement(m.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), !!ie && r().createElement(_.ZC, null, ie)), this.props.filters.length > 0 && r().createElement(ee, null, r().createElement(m.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), r().createElement(M, {
						innerRef: this.overflowWrapper,
						overflowLimit: D,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((ae, de) => {
						const {
							key: Ee,
							operator: me,
							value: ne
						} = ae, he = L[Ee].ignoreLabelTranslation ? L[Ee].label : H.t(L[Ee].label), De = H.t(`analytics.report.filters.operators.${me}`), Pe = Array.isArray(ne) ? ne.map(ke => I(Ee, ke, H)).join(", ") : I(Ee, ne, H), Be = `${he} ${De} ${Pe}`;
						return r().createElement(j, {
							key: `${Ee}-${me}-${ne}`,
							title: Be
						}, r().createElement(T, {
							onClick: () => this.handleOpenFilterEdit(de)
						}, r().createElement(_.ZC, {
							display: "flex"
						}, r().createElement(R, null, he), r().createElement(x, null, De), r().createElement(P, null, Pe), (0, E.oN)(ae, L) ? r().createElement(o.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : r().createElement(q, {
							onClick: ke => this.handleRemoveFilterClick(ke, de),
							"aria-label": "remove"
						}, r().createElement(n.J, {
							type: "remove"
						})))))
					})), k && r().createElement(h.Z, {
						id: K,
						filterDefinitions: L,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, E.oN)(this.state.filterChanges, L),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: I,
						modalStyles: U
					}), this.state.hasOverflowed && r().createElement(p.Z, {
						count: N,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			v(X, "propTypes", {
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
			}), y.Z = X
		},
		"../../../common/component/component-filter-bar/src/index.js": function(F, y, t) {
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
					return u.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				r = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				a = t("../../../common/component/component-filter-bar/src/constants.js"),
				u = t("../../../common/component/component-filter-bar/src/utils.js"),
				s = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				OZ: function() {
					return s
				},
				YB: function() {
					return u
				}
			});

			function e(l, c, g) {
				return c = r(c), c in l ? Object.defineProperty(l, c, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[c] = g, l
			}

			function r(l) {
				var c = a(l, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function a(l, c) {
				if (typeof l != "object" || l === null) return l;
				var g = l[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(l, c || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(l)
			}
			class u extends Error {
				constructor(c, g) {
					super(g);
					e(this, "translationKey", void 0), this.translationKey = c, this.name = "TranslatorError"
				}
			}
			class s extends u {
				constructor(c, g) {
					super(c, `Translation key not found: ${c}, locale: ${g}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var m = null
		},
		"../../../common/util/types/src/api/domain.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Aw: function() {
					return A
				},
				Ib: function() {
					return v
				},
				Ks: function() {
					return D
				},
				MS: function() {
					return C
				},
				PN: function() {
					return p
				},
				Pp: function() {
					return u
				},
				Q3: function() {
					return _
				},
				TS: function() {
					return d
				},
				W7: function() {
					return E
				},
				dN: function() {
					return M
				},
				eF: function() {
					return O
				},
				ex: function() {
					return j
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
				l = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: m.optional,
					years: e.eg.number
				}),
				c = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let g = function(T) {
				return T.ONBOARDING_INITIATED = "Onboarding Initiated", T.ONBOARDED = "Onboarded", T.PENDING_REGISTRY_LOCK = "Pending Registry Lock", T.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", T.REGISTRY_UNLOCKED = "Registry Unlocked", T.LOCKED = "Locked", T.FAILED_TO_LOCK = "Failed To Lock", T.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", T.UNLOCKED = "Unlocked", T.OFFBOARDED = "Offboarded", T
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
					fees: c.optional,
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
				_ = e.eg.object({
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
			let p = function(T) {
				return T.PENDING = "pending", T.VERIFIED = "verified", T.REJECTED = "rejected", T.PENDING_DELETE = "pending_delete", T.DELETED = "deleted", T
			}({});
			const h = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(p),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				w = e.eg.object({
					designated_approvers: e.eg.array(h)
				});
			let E = function(T) {
				return T.PENDING = "pending", T.PENDING_UPDATE = "pending_update", T.ENABLED = "enabled", T.DISABLED = "disabled", T
			}({});
			const f = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(E)
				}),
				O = e.eg.intersection([f, w]),
				v = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let C = function(T) {
				return T.UNLOCK_APPROVAL = "UnlockApprovalRequest", T.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", T.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", T.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", T
			}({});
			const A = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				D = e.eg.object({
					message: e.eg.string
				}),
				M = e.eg.object({
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
				j = e.eg.object({
					result: m
				})
		},
		"../../../common/util/types/src/api/phases/fields.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				df: function() {
					return r
				},
				eX: function() {
					return a
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
			let e = function(l) {
					return l.Custom = "custom", l.Root = "root", l.Managed = "managed", l.Zone = "zone", l.RateLimit = "ratelimit", l
				}({}),
				r = function(l) {
					return l.Cache = "http_request_cache_settings", l.HttpCustomErrors = "http_custom_errors", l.HttpConfigSettings = "http_config_settings", l.HttpLogCustomFields = "http_log_custom_fields", l.HttpRateLimit = "http_ratelimit", l.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", l.HttpRequestFirewallCustom = "http_request_firewall_custom", l.HttpRequestFirewallManaged = "http_request_firewall_managed", l.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", l.HttpRequestLateTransform = "http_request_late_transform", l.HttpRequestMain = "http_request_main", l.HttpRequestOrigin = "http_request_origin", l.HttpRequestRedirect = "http_request_redirect", l.HttpRequestSanitize = "http_request_sanitize", l.HttpRequestSBFM = "http_request_sbfm", l.HttpRequestsSnippets = "http_request_snippets", l.HttpRequestTransform = "http_request_transform", l.HttpResponseCompression = "http_response_compression", l.HttpResponseFirewallManaged = "http_response_firewall_managed", l.HttpResponseTransform = "http_response_headers_transform", l.L4DDoS = "ddos_l4", l.L7DDoS = "ddos_l7", l.MagicIDS = "magic_transit_ids_managed", l.MagicManaged = "magic_transit_managed", l.MagicTransit = "magic_transit", l.MagicTransitRateLimit = "magic_transit_ratelimit", l
				}({}),
				a = function(l) {
					return l.Execute = "execute", l.All = "all", l.Block = "block", l.JSChallenge = "js_challenge", l.Challenge = "challenge", l.Allow = "allow", l.Bypass = "bypass", l.Log = "log", l.Rewrite = "rewrite", l.Score = "score", l.Skip = "skip", l.Managed_Challenge = "managed_challenge", l.DDoS_Dynamic = "ddos_dynamic", l.Select_Config = "select_config", l.Set_Config = "set_config", l.Reset = "reset", l.Redirect = "redirect", l.Cache = "set_cache_settings", l.WhiteList = "whitelist", l.Error = "serve_error", l
				}({}),
				u = function(l) {
					return l.ZONE_LOCKDOWN = "zoneLockdown", l.UA_BLOCK = "uaBlock", l.BIC = "bic", l.HOT = "hot", l.SECURITY_LEVEL = "securityLevel", l.RATE_LIMIT = "rateLimit", l.WAF = "waf", l
				}({}),
				s = function(l) {
					return l.DEFAULT = "default", l.MEDIUM = "medium", l.LOW = "low", l.EOFF = "eoff", l.HIGH = "high", l.VERY_HIGH = "very_high", l
				}({}),
				m = function(l) {
					return l.DEFAULT = "", l.XML = "text/xml", l.JSON = "application/json", l.TEXT = "text/plain", l.HTML = "text/html", l
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(F, y, t) {
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
			const r = (a, u) => {
				if (u !== void 0) throw new Error("Unexpected object: " + a);
				return u
			}
		},
		"../react/common/out.css": function(F, y, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[F.id, e, ""]
			]);
			var r, a, u = {
				hmr: !0
			};
			u.transform = r, u.insertInto = void 0;
			var s = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, u);
			e.locals && (F.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function(F, y, t) {
			y = F.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), y.push([F.id, `/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
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
    --color-indigo-500: oklch(58.5% 0.233 277.117);
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
  .top-\\[160px\\] {
    top: 160px;
  }
  .top-full {
    top: 100%;
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
  .h-20 {
    height: calc(var(--spacing) * 20);
  }
  .h-\\[18px\\] {
    height: 18px;
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
  .w-sm {
    width: var(--container-sm);
  }
  .\\!max-w-3xl {
    max-width: var(--container-3xl) !important;
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
  .min-w-\\[250px\\] {
    min-width: 250px;
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
  .translate-x-0 {
    --tw-translate-x: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-4 {
    --tw-translate-x: calc(var(--spacing) * 4);
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
  .-translate-y-2 {
    --tw-translate-y: calc(var(--spacing) * -2);
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
  .grid-cols-\\[max-content_1fr\\] {
    grid-template-columns: max-content 1fr;
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
  .space-y-3 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));
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
  .self-stretch {
    align-self: stretch;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
  .\\!rounded-l-xl {
    border-top-left-radius: var(--radius-xl) !important;
    border-bottom-left-radius: var(--radius-xl) !important;
  }
  .rounded-l-none {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .\\!rounded-r-xl {
    border-top-right-radius: var(--radius-xl) !important;
    border-bottom-right-radius: var(--radius-xl) !important;
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
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
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
  .\\!border-border {
    border-color: var(--color-border) !important;
  }
  .\\!border-neutral-200 {
    border-color: var(--color-neutral-200) !important;
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
  .\\!px-0 {
    padding-inline: calc(var(--spacing) * 0) !important;
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
  .pl-2\\.5 {
    padding-left: calc(var(--spacing) * 2.5);
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
  .text-blue-800 {
    color: var(--color-blue-800);
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
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-green-600 {
    color: var(--color-green-600);
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
  .sm\\:inline {
    @media (width >= 40rem) {
      display: inline;
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
  .sm\\:text-base {
    @media (width >= 40rem) {
      font-size: var(--text-base);
      line-height: var(--tw-leading, var(--text-base--line-height));
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
  .md\\:max-w-\\[70vw\\] {
    @media (width >= 48rem) {
      max-width: 70vw;
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
  .dark\\:border-gray-600 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-gray-600);
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
  .dark\\:bg-blue-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-blue-900);
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
  .dark\\:bg-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-700);
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
  .dark\\:text-neutral-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-400);
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
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(F, y, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function r(a) {
				if (!t.o(e, a)) return Promise.resolve().then(function() {
					var m = new Error("Cannot find module '" + a + "'");
					throw m.code = "MODULE_NOT_FOUND", m
				});
				var u = e[a],
					s = u[0];
				return t.e(u[1]).then(function() {
					return t.t(s, 1 | 16)
				})
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", F.exports = r
		}
	}
]);

//# debugId=5766db98-00c8-5235-91d9-8adcdd120f95