! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9c8a09a9-ceda-5b3f-a5ed-334bb719ab53")
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
					return l
				},
				wz: function() {
					return O
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/utils/url.ts"),
				a = t("../../../../node_modules/query-string/query-string.js"),
				u = t.n(a),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f;
			const c = () => Object.keys(i.Z).reduce((v, g) => (g.indexOf("cf_beta.") === 0 && i.Z.get(g) === "true" && v.push(g.split(".").slice(1).join(".")), v), []),
				l = () => {
					var v, g, b;
					return ((v = window) === null || v === void 0 || (g = v.bootstrap) === null || g === void 0 || (b = g.data) === null || b === void 0 ? void 0 : b.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((f = window) === null || f === void 0 ? void 0 : f.location) && i.Z) {
				const v = u().parse(window.location.search);
				v.beta_on && i.Z.set(`cf_beta.${v.beta_on}`, !0), v.beta_off && i.Z.set(`cf_beta.${v.beta_off}`, !1)
			}
			const m = {},
				n = v => {
					var g, b, _;
					return Object.prototype.hasOwnProperty.call(m, v) ? m[v] : ((g = window) === null || g === void 0 || (b = g.bootstrap) === null || b === void 0 || (_ = b.data) === null || _ === void 0 ? void 0 : _.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(T => T === v) ? (m[v] = !0, !0) : (m[v] = !1, !1)
				},
				o = v => i.Z ? i.Z.get(`cf_beta.${v}`) === !0 : !1,
				s = v => o(v) || n(v),
				E = () => !0,
				d = () => {
					var v, g, b;
					return ((v = window) === null || v === void 0 || (g = v.bootstrap) === null || g === void 0 || (b = g.data) === null || b === void 0 ? void 0 : b.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				p = v => {
					const g = (0, e.uF)(v),
						b = (g == null ? void 0 : g.roles) || [];
					return (0, r.qR)(location.pathname) && b.length === 1 && b.some(_ => _ === "Administrator Read Only")
				},
				h = () => {
					var v, g, b;
					return ((v = window) === null || v === void 0 || (g = v.location) === null || g === void 0 || (b = g.origin) === null || b === void 0 ? void 0 : b.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				O = () => h() === "fed"
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
				u = "current",
				i = "hash",
				f = "deploymentPreview",
				c = "fragmentPreview",
				l = o => o === u ? m() : n(),
				m = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
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

			function r(v) {
				for (var g = 1; g < arguments.length; g++) {
					var b = arguments[g] != null ? Object(arguments[g]) : {},
						_ = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(b).filter(function(T) {
						return Object.getOwnPropertyDescriptor(b, T).enumerable
					})), _.forEach(function(T) {
						a(v, T, b[T])
					})
				}
				return v
			}

			function a(v, g, b) {
				return g = u(g), g in v ? Object.defineProperty(v, g, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[g] = b, v
			}

			function u(v) {
				var g = i(v, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function i(v, g) {
				if (typeof v != "object" || v === null) return v;
				var b = v[Symbol.toPrimitive];
				if (b !== void 0) {
					var _ = b.call(v, g || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(v)
			}
			const f = e.z.string().regex(/^(((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))|canary)$/g),
				c = e.z.string().regex(/^[a-zA-Z0-9]{8}$/),
				l = e.z.string(),
				m = e.z.union([e.z.string().regex(/^[a-zA-Z0-9]{8}$/), e.z.literal("current")]),
				n = e.z.record(l, m),
				o = e.z.enum(["live", "previews", "canary"]),
				s = (v, g) => {
					const b = v.data.cookies[g],
						_ = {
							[PREVIEW_VERSIONING_COOKIE]: f,
							[DEPLOYMENT_VERSION_COOKIE]: c
						};
					try {
						return _[g].parse(b)
					} catch {
						return null
					}
				},
				E = v => {
					try {
						return decodeURIComponent(v).split(",").reduce((g, b) => {
							const _ = b.split(":"),
								T = l.parse(_[0]),
								A = m.parse(_[1]);
							return r({}, g, {
								[T]: A
							})
						}, {})
					} catch {
						return {}
					}
				},
				d = v => {
					const g = v.data.cookies[FRAGMENT_VERSIONING_PREVIEW_COOKIE],
						b = E(g);
					try {
						return n.parse(b)
					} catch {
						return null
					}
				},
				p = v => {
					const g = f.parse(v),
						[b, ..._] = g.split("-"),
						T = _.join("-");
					return {
						projectType: b,
						deploymentId: T
					}
				},
				h = (v, g) => {
					if (!g) return "";
					try {
						var b;
						const {
							projectType: _,
							deploymentId: T
						} = p(g), A = {
							live: v.env.PAGES_WORKERS_LIVE_HOST,
							previews: v.env.PAGES_WORKERS_PREVIEW_HOST
						}, {
							hostname: L,
							pathname: M,
							search: x
						} = new URL(v.request.url), w = L == null || (b = L.split(".")) === null || b === void 0 ? void 0 : b[0];
						if (T && T !== w && o.safeParse(_).success) {
							const S = A[_];
							return `https://${T}.${S}${M}${x}`
						}
					} catch (_) {
						console.log(_)
					}
					return ""
				},
				O = (v, g) => {
					if (!g) return "";
					try {
						var b;
						const _ = v.env.PAGES_WORKERS_LIVE_HOST,
							{
								hostname: T,
								pathname: A,
								search: L
							} = new URL(v.request.url),
							M = T == null || (b = T.split(".")) === null || b === void 0 ? void 0 : b[0],
							{
								deploymentSHA: x
							} = parsePagesDevUrl(v.env.CF_PAGES_URL),
							w = v.request.headers.get("sec-fetch-dest") === "document";
						if (g && g !== M && g !== x && !w) return `https://${g}.${_}${A}${L}`
					} catch (_) {
						console.log(_)
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
				u = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				i = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function f($) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var te = arguments[Q] != null ? Object(arguments[Q]) : {},
						ue = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(te).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(te, Ee).enumerable
					})), ue.forEach(function(Ee) {
						c($, Ee, te[Ee])
					})
				}
				return $
			}

			function c($, Q, te) {
				return Q = l(Q), Q in $ ? Object.defineProperty($, Q, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[Q] = te, $
			}

			function l($) {
				var Q = m($, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function m($, Q) {
				if (typeof $ != "object" || $ === null) return $;
				var te = $[Symbol.toPrimitive];
				if (te !== void 0) {
					var ue = te.call($, Q || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)($)
			}
			const n = $ => {
				const Q = $ && $.headers || {},
					te = new Headers(Q);
				return te.append("X-Cross-Site-Security", "dash"), f({}, $, {
					headers: te
				})
			};
			(0, i.register)({
				request: ($, Q) => {
					try {
						return new URL($), $ === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", Q] : [$, Q]
					} catch {
						var te, ue;
						return typeof $ == "object" && ((te = $) === null || te === void 0 || (ue = te.url) === null || ue === void 0 ? void 0 : ue.startsWith("https://platform.dash.cloudflare.com/map-tiles/")) ? [$, Q] : [$, n(Q)]
					}
				}
			});
			var o = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				s = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				E = t("../react/app/providers/storeContainer.js");
			let d = "";
			const p = 61;

			function h($) {
				const Q = $.substr(1);
				if (Q && d !== Q) {
					const te = document.getElementById(Q);
					if (te) {
						const ue = te.getBoundingClientRect().top;
						if (ue > 0) {
							const Ee = ue - p;
							document.documentElement.scrollTop = Ee
						}
					}
				}
				d = Q
			}

			function O($) {
				$.listen(Q => h(Q.hash))
			}
			var v = t("../../../../node_modules/cookie/index.js"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				b = t("../functions/utils/constants.ts");
			const _ = $ => {
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
				T = ($, Q = !1) => {
					var te;
					const ue = _($),
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
    <h1 id="error-title">${ue.title}</h1>
    <p id="error-description">${ue.description}</p>
  </div>
  `,
						ke = Q ? `
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
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(te=window.build)===null||te===void 0?void 0:te.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return Ee + ke
				},
				A = $ => {
					var Q;
					const te = document.getElementById($);
					!te || (Q = te.parentNode) === null || Q === void 0 || Q.removeChild(te)
				};

			function L() {
				const $ = document.getElementById("loading-state");
				$ == null || $.classList.add("hide"), $ == null || $.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(A)
				})
			}

			function M($) {
				var Q;
				const te = document.getElementById("loading-state"),
					ue = !!((Q = v.parse(document.cookie)) === null || Q === void 0 ? void 0 : Q[b.b1]);
				!te || (te.innerHTML = T($ == null ? void 0 : $.code, ue))
			}
			var x = t("../utils/initStyles.ts"),
				w = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				S = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				j = t("../react/common/selectors/languagePreferenceSelector.ts"),
				W = t("../flags.ts"),
				G = t("../utils/getDashVersion.ts");
			const ne = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				q = !0,
				re = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				F = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var z = t("../utils/sentry/lastSentEventId.ts"),
				D = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				U = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const I = $ => {
				const Q = async te => {
					var ue, Ee;
					const ke = {
						envelope: te.body,
						url: $.url,
						isPreviewDeploy: (ue = window) === null || ue === void 0 || (Ee = ue.build) === null || Ee === void 0 ? void 0 : Ee.isPreviewDeploy,
						release: (0, G.t)()
					};
					try {
						const De = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(ke)
						});
						return {
							statusCode: De.status,
							headers: {
								"x-sentry-rate-limits": De.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": De.headers.get("Retry-After")
							}
						}
					} catch (De) {
						return console.log(De), (0, U.$2)(De)
					}
				};
				return D.q($, Q)
			};
			var P = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				B = t("../../../../node_modules/history/esm/history.js"),
				ee = (0, B.lX)(),
				ce = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				R = t("../react/utils/url.ts");
			const V = (0, ce.Rf)();
			let k;

			function Z($) {
				return ie($, "react-router-v5")
			}

			function ie($, Q) {
				return (te, ue = !0, Ee = !0) => {
					ue && V && V.location && (k = te({
						name: (0, R.Fl)(V.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": Q
						}
					})), Ee && $.listen && $.listen((ke, De) => {
						if (De && (De === "PUSH" || De === "POP")) {
							k && k.finish();
							const $e = {
								"routing.instrumentation": Q
							};
							k = te({
								name: (0, R.Fl)(ke.pathname),
								op: "navigation",
								tags: $e
							})
						}
					})
				}
			}
			var pe = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				de = t.n(pe),
				ve = t("../../../common/intl/intl-core/src/errors.ts"),
				oe = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Ie = t("../react/common/middleware/sparrow/errors.ts");

			function Le($, Q, te) {
				return Q = Me(Q), Q in $ ? Object.defineProperty($, Q, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[Q] = te, $
			}

			function Me($) {
				var Q = je($, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function je($, Q) {
				if (typeof $ != "object" || $ === null) return $;
				var te = $[Symbol.toPrimitive];
				if (te !== void 0) {
					var ue = te.call($, Q || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)($)
			}
			class xe {
				constructor() {
					Le(this, "name", xe.id)
				}
				setupOnce() {
					t.g.console && (0, oe.hl)(t.g.console, "error", Q => (...te) => {
						const ue = te.find(Ee => Ee instanceof Error);
						if (ne && ue) {
							let Ee, ke = !0;
							if (ue instanceof Ie.ez) {
								const De = ue instanceof Ie.oV ? ue.invalidProperties : void 0;
								Ee = {
									tags: {
										"sparrow.eventName": ue.eventName
									},
									extra: {
										sparrow: {
											eventName: ue.eventName,
											invalidProperties: De
										}
									},
									fingerprint: [ue.name ? ue.name : "SparrowValidationError"]
								}, ke = !1
							} else if (ue instanceof pe.SparrowIdCookieError) Ee = {
								extra: {
									sparrowIdCookie: ue.cookie
								},
								fingerprint: [ue.name ? ue.name : "SparrowIdCookieError"]
							};
							else if (ue.name === "ChunkLoadError") {
								Ee = {
									fingerprint: [ue.name]
								};
								try {
									Ee.tags = {
										chunkId: ue.message.split(" ")[2],
										chunkUrl: ue.request
									}
								} catch {}
							} else ue instanceof ve.YB && (Ee = {
								fingerprint: ["TranslatorError", ue.translationKey]
							});
							ke && o.Tb(ue, Ee)
						}
						typeof Q == "function" && Q.apply(t.g.console, te)
					})
				}
			}
			Le(xe, "id", "ConsoleErrorIntegration");
			var Ve = null,
				Je = t("../react/common/utils/getEnvironment.ts");
			const Fe = () => {
					if (ne && q) {
						var $, Q, te, ue, Ee, ke, De, $e, ut, He;
						const Gt = (0, Je.Z)();
						let It = "production";
						(($ = window) === null || $ === void 0 || (Q = $.build) === null || Q === void 0 ? void 0 : Q.isPreviewDeploy) && (It += "-preview"), Gt === "canary" && (It = "canary"), S.S({
							dsn: ne,
							release: (0, G.t)(),
							environment: It,
							ignoreErrors: F,
							allowUrls: re,
							autoSessionTracking: !1,
							integrations: vt => [...vt.filter(Xt => Xt.name !== "GlobalHandlers" && Xt.name !== "TryCatch"), new xe, new P.jK.BrowserTracing({
								routingInstrumentation: Z(ee)
							})],
							tracesSampleRate: 0,
							transport: I,
							beforeSend: vt => (z.e.setEventId(vt.event_id), vt)
						});
						const kt = (0, E.bh)().getState();
						o.rJ({
							LOCAL_STORAGE_FLAGS: (0, W.Qw)(),
							USER_BETA_FLAGS: (0, W.ki)(),
							meta: {
								connection: {
									type: (te = window) === null || te === void 0 || (ue = te.navigator) === null || ue === void 0 || (Ee = ue.connection) === null || Ee === void 0 ? void 0 : Ee.effectiveType,
									bandwidth: (ke = window) === null || ke === void 0 || (De = ke.navigator) === null || De === void 0 || ($e = De.connection) === null || $e === void 0 ? void 0 : $e.downlink
								},
								languagePreference: (0, j.r)(kt),
								isPreviewDeploy: (ut = window) === null || ut === void 0 || (He = ut.build) === null || He === void 0 ? void 0 : He.isPreviewDeploy
							},
							utilGates: (0, w.T2)(kt)
						}), window.addEventListener("unhandledrejection", function(vt) {})
					}
				},
				Ke = $ => {
					$ ? o.av({
						id: $
					}) : o.av(null)
				};
			var H = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Se = () => {
					let $;
					try {
						$ = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), $ = window.location.search
					}
					if (!$.includes("remote[")) return;
					const Q = new URLSearchParams($),
						te = {};
					for (let [ue, Ee] of Q) ue.includes("remote") && (te[ue.replace(/remote\[|\]/g, "")] = Ee);
					H.Z.set("mfe-remotes", JSON.stringify(te))
				},
				We = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				pt = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const dt = "ANON_USER_ID";

			function Ae() {
				var $, Q, te, ue;
				let Ee = ($ = t.g) === null || $ === void 0 || (Q = $.bootstrap) === null || Q === void 0 || (te = Q.data) === null || te === void 0 || (ue = te.user) === null || ue === void 0 ? void 0 : ue.id;
				if (!Ee) {
					let ke = H.Z.get(dt);
					if (!ke) {
						let De = (0, pt.Z)();
						H.Z.set(dt, De), ke = De
					}
					return ke
				}
				return Ee
			}
			async function rt() {
				const $ = (0, E.bh)();
				$.dispatch((0, We.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await $.dispatch((0, w.UL)({
					userId: Ae()
				}))
			}
			class J extends Error {
				constructor(Q, te) {
					super(te);
					this.name = `${Q} ${te}`
				}
			}
			const ge = () => {
					document.cookie.split(";").forEach(Q => {
						const [te] = Q.trim().split("=");
						document.cookie = `${te}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				Te = async () => {
					let $ = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!$.ok) throw $.headers.get("content-type") === "text/html" && (await $.text()).toLowerCase().includes("cookie too large") && (o.$e(function(Ee) {
						Ee.setTag("init", "cookieTooLarge"), o.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), ge(), window.location.reload()), new J("Bootstrap API Failure", $ == null ? void 0 : $.status);
					return (await $.json()).result.data
				};
			var Pe = t("webpack/sharing/consume/default/react/react"),
				Oe = t.n(Pe),
				Be = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				qe = t("webpack/sharing/consume/default/react-dom/react-dom"),
				it = t("webpack/sharing/consume/default/react-redux/react-redux"),
				gt = t("../../../../node_modules/swr/core/dist/index.mjs"),
				Et = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				yt = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Mt = t("../react/shims/focus-visible.js"),
				Ge = t("../react/app/components/DeepLink/index.ts"),
				st = t("../../../../node_modules/prop-types/index.js"),
				at = t.n(st),
				ct = t("../react/utils/translator.tsx"),
				mt = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				Ne = t("../../../dash/intl/intl-translations/src/index.ts"),
				Y = t("../../../../node_modules/query-string/query-string.js"),
				le = t.n(Y),
				ye = t("../react/common/actions/userActions.ts"),
				we = t("../react/common/selectors/userSelectors.ts"),
				Re = t("../react/utils/i18n.ts"),
				Ye = t("../react/utils/bootstrap.ts");

			function tt($) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var te = arguments[Q] != null ? Object(arguments[Q]) : {},
						ue = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(te).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(te, Ee).enumerable
					})), ue.forEach(function(Ee) {
						wt($, Ee, te[Ee])
					})
				}
				return $
			}

			function wt($, Q, te) {
				return Q = _t(Q), Q in $ ? Object.defineProperty($, Q, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[Q] = te, $
			}

			function _t($) {
				var Q = At($, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function At($, Q) {
				if (typeof $ != "object" || $ === null) return $;
				var te = $[Symbol.toPrimitive];
				if (te !== void 0) {
					var ue = te.call($, Q || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)($)
			}
			let Qe = le().parse(location.search);
			const ht = $ => {
					const Q = (0, Ye.$8)() ? [(0, Ne.Fy)(Ne.if.changes), (0, Ne.Fy)(Ne.if.common), (0, Ne.Fy)(Ne.if.navigation), (0, Ne.Fy)(Ne.if.overview), (0, Ne.Fy)(Ne.if.onboarding), (0, Ne.Fy)(Ne.if.invite), (0, Ne.Fy)(Ne.if.login), (0, Ne.Fy)(Ne.if.dns), (0, Ne.Fy)(Ne.n4.ssl_tls), (0, Ne.Fy)(Ne.if.message_inbox), (0, Ne.Fy)(Ne.if.welcome)] : [(0, Ne.Fy)(Ne.if.common), (0, Ne.Fy)(Ne.if.invite), (0, Ne.Fy)(Ne.if.login), (0, Ne.Fy)(Ne.if.onboarding)];
					Qe.lang ? Dt($) : H.Z.get(Re.th) && Pt($, (0, Re.Kd)());
					const te = async ue => (await Promise.all(Q.map(ke => ke(ue)))).reduce((ke, De) => tt({}, ke, De), {});
					return Oe().createElement(mt.LocaleContext.Provider, {
						value: $.languagePreference
					}, Oe().createElement(mt.I18nProvider, {
						translator: ct.Vb,
						locale: $.languagePreference
					}, Oe().createElement(mt.I18nLoader, {
						loadPhrases: te
					}, $.children)))
				},
				Dt = async $ => {
					let Q = Qe.lang.substring(0, Qe.lang.length - 2) + Qe.lang.substring(Qe.lang.length - 2, Qe.lang.length).toUpperCase();
					if (!(0, j.v)(Q)) {
						console.warn(`${Q} is not a supported locale.`), delete Qe.lang, $.history.replace({
							search: le().stringify(Qe)
						});
						return
					}(0, Re.i_)(Q), delete Qe.lang, Pt($, Q), $.isAuthenticated || $.history.replace({
						search: le().stringify(Qe)
					})
				}, Pt = async ($, Q) => {
					if ($.isAuthenticated) try {
						await $.setUserCommPreferences({
							"language-locale": Q
						}, {
							hideErrorAlert: !0
						}), H.Z.remove(Re.th), $.history.replace({
							search: le().stringify(Qe)
						})
					} catch (te) {
						H.Z.set(Re.th, !0), console.error(te)
					} else H.Z.set(Re.th, !0)
				}, Nt = $ => {
					const Q = (0, we.PR)($);
					return {
						isAuthenticated: !!(Q && Q.id),
						languagePreference: (0, Re.Kd)() || (0, j.r)($)
					}
				}, Lt = {
					setUserCommPreferences: ye.V_
				};
			var Rt = (0, Be.withRouter)((0, it.connect)(Nt, Lt)(ht));
			ht.propTypes = {
				history: at().object,
				languagePreference: at().string.isRequired,
				children: at().node.isRequired,
				isAuthenticated: at().bool,
				setUserCommPreferences: at().func.isRequired
			};
			var bt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				xt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let Ct;
			const Bt = ({
				selectorPrefix: $ = "c_"
			} = {}) => (Ct || (Ct = (0, xt.Z)({
				dev: !1,
				selectorPrefix: $
			})), Ct);
			var Ut = t("../react/common/out.css"),
				Tt = t("../react/common/components/ModalManager.tsx"),
				jt = t("../react/app/components/ErrorBoundary.tsx"),
				$t = t("../react/common/actions/notificationsActions.ts");
			const St = (t.g.bootstrap || {}).data || {};
			class C extends Oe().Component {
				componentDidMount() {
					St.messages && this.dispatchNotificationActions(St.messages)
				}
				dispatchNotificationActions(Q) {
					Q.forEach(te => {
						const {
							type: ue,
							message: Ee,
							persist: ke
						} = te;
						["success", "info", "warn", "error"].includes(ue) && this.props.notifyAdd(ue, (0, ct.ZP)(Ee), {
							persist: !!ke
						})
					})
				}
				render() {
					return null
				}
			}
			var me = (0, Be.withRouter)((0, it.connect)(null, {
				notifyAdd: $t.add
			})(C));
			C.propTypes = {
				notifyAdd: at().func.isRequired
			};
			var Ce = t("../react/app/redux/index.ts");

			function ae() {
				var $;
				const Q = (0, Ce.p4)(we.PR),
					te = (Q == null || ($ = Q.email) === null || $ === void 0 ? void 0 : $.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ue = (0, We.Yc)();
				(0, Pe.useEffect)(() => {
					ue({
						userType: te
					})
				}, [te, ue])
			}
			var se = t("../react/common/selectors/entitlementsSelectors.ts"),
				fe = t("../react/common/selectors/accountSelectors.ts");
			const _e = ["accountId", "is_ent"];

			function be() {
				const $ = (0, We.f7)(),
					Q = (0, Be.useHistory)(),
					te = (0, R.uW)(Q.location.pathname),
					ue = (0, We.Yc)(),
					Ee = (0, We.O$)(),
					ke = (0, Ce.p4)(se.u1),
					De = !ke.isRequesting && !!ke.data,
					$e = (0, Ce.p4)(se.p1),
					ut = (0, Ce.p4)(fe.Xu),
					He = (0, Ce.p4)(fe.uF),
					Gt = !ut.isRequesting && !!ut.data;
				(0, Pe.useEffect)(() => {
					if (te && Gt && He && De && te === He.account.id) {
						var It, kt, vt;
						ue({
							accountId: He.account.id,
							is_ent: $e,
							is_free_account: !$e && !(He == null || (It = He.account.meta) === null || It === void 0 ? void 0 : It.has_business_zones) && !(He == null || (kt = He.account.meta) === null || kt === void 0 ? void 0 : kt.has_pro_zones) && !(He == null || (vt = He.account.meta) === null || vt === void 0 ? void 0 : vt.has_enterprise_zones)
						})
					} else(!te || te in $ && $.accountId !== te) && Ee(_e)
				}, [Gt, He, ue, Ee, De, $e, te, $])
			}
			var Ue = t("../react/common/selectors/zoneSelectors.ts");

			function Ze() {
				const $ = (0, Ce.p4)(Ue.nA),
					Q = (0, We.Yc)();
				(0, Pe.useEffect)(() => {
					var te;
					Q({
						zone_id: $ == null ? void 0 : $.id,
						zone_plan: $ == null || (te = $.plan) === null || te === void 0 ? void 0 : te.legacy_id
					})
				}, [$, Q])
			}
			const ot = () => (ae(), be(), Ze(), null);
			var Xe = t("../react/app/components/Persistence/index.tsx"),
				et = t("../node_modules/@cloudflare/elements/es/index.js"),
				lt = t("../react/app/components/LoadingSuspense.tsx");
			const ft = Oe().lazy(() => Promise.all([t.e(16691), t.e(14917), t.e(12174), t.e(1091), t.e(31358), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(2868), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var nt = () => Oe().createElement(lt.Z, null, Oe().createElement(ft, null));
			const zt = () => (Pe.useEffect(() => L, []), null);
			var Jt = t("../../../../node_modules/moment/moment.js"),
				Zt = t.n(Jt);
			const qt = $ => {
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
				en = () => {
					const $ = (0, Ce.p4)(j.r);
					(0, Pe.useEffect)(() => {
						const Q = qt($);
						Q !== Zt().locale() && Zt().locale(Q), document.documentElement.lang = $
					}, [$])
				},
				tn = () => {
					(0, Pe.useEffect)(() => {
						async function $() {
							var Q, te, ue, Ee;
							let ke;
							if (((Q = window) === null || Q === void 0 || (te = Q.build) === null || te === void 0 ? void 0 : te.isPreviewDeploy) && ((ue = window) === null || ue === void 0 || (Ee = ue.build) === null || Ee === void 0 ? void 0 : Ee.branch) !== "staging" && (ke = "cookie"), !!ke) try {
								const De = document.head.querySelector("link[rel=icon]");
								De && (De.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${ke}.ico`)).default)
							} catch {}
						}
						$()
					}, [])
				};
			var nn = t("../react/common/constants/constants.ts");
			const rn = () => {
				var $;
				const Q = (0, Be.useLocation)(),
					[te, ue] = (0, Pe.useState)((($ = window) === null || $ === void 0 ? void 0 : $.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
				return (0, Pe.useEffect)(() => {
					const Ee = le().parse(Q.search);
					if (Ee.pt && H.Z.set(nn.sJ, Ee.pt), Ee == null ? void 0 : Ee.devPanel) {
						var ke, De;
						(ke = window) === null || ke === void 0 || (De = ke.localStorage) === null || De === void 0 || De.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ue(!0)
					}
				}, [Q.search]), {
					devPanelEnabled: te
				}
			};
			var on = t("../react/common/hooks/useGate.ts");
			const an = ({
				isDev: $,
				adobeFeatureFlag: Q
			}) => {
				(0, Pe.useEffect)(() => {
					(() => {
						if (!Q) return null;
						let ue;
						$ ? ue = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : ue = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const Ee = document.createElement("script");
						Ee.async = !0, Ee.src = ue, document.head.insertBefore(Ee, document.head.childNodes[0])
					})()
				}, [])
			};
			var sn = t("../react/utils/useDomainConnectRedirect.ts");
			const cn = Oe().lazy(() => Promise.all([t.e(16691), t.e(14917), t.e(12174), t.e(1091), t.e(31358), t.e(51436), t.e(34744), t.e(54844), t.e(80778), t.e(70618), t.e(88723), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(2868), t.e(83276), t.e(39278), t.e(91262), t.e(52215), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				ln = Oe().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(1091), t.e(80778), t.e(17387), t.e(2868), t.e(88145), t.e(91262), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var un = ({
					userIsAuthed: $
				}) => {
					en(), tn(), (0, sn.y)();
					const {
						devPanelEnabled: Q
					} = rn();
					return an({
						isDev: !1,
						adobeFeatureFlag: !!(0, on.Z)("dx-enable-adobe-launch")
					}), Oe().createElement(Pe.Suspense, {
						fallback: Oe().createElement(zt, null)
					}, Oe().createElement(Be.Switch, null, !$ && !0 && Oe().createElement(Be.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Oe().createElement(ln, null)), Oe().createElement(Be.Route, {
						render: () => Oe().createElement(et.ZC, {
							minHeight: "100vh"
						}, Oe().createElement(cn, null))
					})), Q && Oe().createElement(nt, null))
				},
				Kt = t("../../../../node_modules/yup/es/index.js"),
				dn = t("../../../common/util/types/src/utils/index.ts");
			const Ht = {
				cfEmail: () => Kt.Z_().email((0, ct.ZP)("common.validation.email")).required((0, ct.ZP)("common.validation.email")),
				cfPassword: () => Kt.Z_().required((0, ct.ZP)("common.validation.required"))
			};
			(0, dn.Yd)(Ht).forEach($ => {
				Kt.kM(Kt.Z_, $, Ht[$])
			});
			var pn = t("../react/common/utils/startViewTransition.ts");
			const Yt = Oe().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function gn() {
				const [$, Q] = (0, Pe.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, Pe.useEffect)(() => {
					const te = window.matchMedia("(prefers-color-scheme: dark)"),
						ue = Ee => {
							Q(Ee.matches ? "dark" : "light")
						};
					return te.addEventListener("change", ue), () => {
						te.removeEventListener("change", ue)
					}
				}, []), $
			}
			const mn = () => {
					const $ = (0, Ye.$8)(),
						[Q, te] = (0, Pe.useState)($ ? Yt : Oe().Fragment),
						ue = gn(),
						[Ee, ke] = (0, Pe.useState)((0, g.Yc)());
					(0, Pe.useEffect)(() => {
						(0, g.fF)(() => ke((0, g.Yc)()))
					}, []);
					const De = $e => {
						ke($e), (0, pn.o)(() => {
							(0, g.C8)($e)
						}), document.cookie = `dark-mode=${$e};Path=/;Max-Age=31536000`, $e === "dark" || $e === "on" || $e === "system" && ue === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
					};
					return (0, Pe.useEffect)(() => {
						te($ ? Yt : Oe().Fragment)
					}, [$]), (0, Pe.useEffect)(() => {
						const $e = () => De(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", $e), () => {
							window.removeEventListener("storage", $e)
						}
					}, []), Oe().createElement(Pe.Suspense, {
						fallback: null
					}, Oe().createElement(it.Provider, {
						store: (0, E.bh)()
					}, Oe().createElement(Be.Router, {
						history: ee
					}, Oe().createElement(Q, null, Oe().createElement(bt.Z, {
						renderer: Bt()
					}, Oe().createElement(Rt, null, Oe().createElement(jt.S, {
						sentryTag: "Root"
					}, Oe().createElement(gt.J$, {
						value: {
							fetcher: $e => fetch($e).then(ut => ut.json())
						}
					}, Oe().createElement(ot, null), Oe().createElement(me, null), Oe().createElement(Xe.Z_, {
						onDarkModeChangeCb: De
					}, Oe().createElement(Ge.ZP, null, Oe().createElement(un, {
						userIsAuthed: $
					}))), Oe().createElement(Tt.ZP, null), Oe().createElement(Et.F0, null)))))))))
				},
				fn = () => {
					(0, qe.render)(Oe().createElement(mn, null), document.getElementById("react-app"))
				};
			var Ot = t("../utils/initSparrow.ts"),
				Ft = t("../utils/zaraz.ts");
			const vn = () => {
					const $ = (0, we.PR)((0, E.bh)().getState());
					_n(), (0, Ot.Ug)(), (0, Ft.bM)(), ($ == null ? void 0 : $.id) && de().setUserId($ == null ? void 0 : $.id), (0, Ot.yV)(), !(0, Ot.Wi)() && (0, Ot.IM)(), $ ? (0, Ft.yn)($) : (0, Ft.Ro)()
				},
				_n = () => {
					var $, Q;
					($ = window) === null || $ === void 0 || (Q = $.OneTrust) === null || Q === void 0 || Q.OnConsentChanged(() => {
						const te = (0, we.PR)((0, E.bh)().getState());
						(0, Ot.Wi)() ? (de().setEnabled(!0), (te == null ? void 0 : te.id) ? (de().setUserId(te.id), (0, Ft.yn)(te)) : (0, Ft.Ro)(), (0, Ot.yV)()) : (de().setEnabled(!1), (0, Ot.IM)())
					})
				};

			function En($) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var te = arguments[Q] != null ? Object(arguments[Q]) : {},
						ue = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(te).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(te, Ee).enumerable
					})), ue.forEach(function(Ee) {
						yn($, Ee, te[Ee])
					})
				}
				return $
			}

			function yn($, Q, te) {
				return Q = hn(Q), Q in $ ? Object.defineProperty($, Q, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[Q] = te, $
			}

			function hn($) {
				var Q = bn($, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function bn($, Q) {
				if (typeof $ != "object" || $ === null) return $;
				var te = $[Symbol.toPrimitive];
				if (te !== void 0) {
					var ue = te.call($, Q || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)($)
			}
			const Cn = "init",
				Qt = ($, Q) => {
					o.$e(function(te) {
						te.setTag(Cn, Q), o.Tb($)
					}), M($)
				},
				Vt = async ($, Q) => {
					try {
						return await $(), !0
					} catch (te) {
						return Qt(te, Q), !1
					}
				};
			(async () => {
				try {
					var $, Q, te;
					t.g.build = En({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "d3fa4270d1e8f2e39a0dc23d9e5a1f5b2ae47f12",
						dashVersion: "34407913",
						env: "production",
						builtAt: 1751894505396,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, G.p)()
					}), Fe();
					const ue = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => O(ee),
						tag: "hashScroll"
					}, {
						fn: x.Z,
						tag: "styles"
					}, {
						fn: Se,
						tag: "mfePreviewData"
					}];
					for (const ut of ue)
						if (!await Vt(ut.fn, ut.tag)) return;
					let Ee;
					if (!await Vt(async () => {
							Ee = await Te()
						}, "bootstrap")) return;
					const ke = (0, E.bh)(),
						De = (($ = Ee) === null || $ === void 0 ? void 0 : $.data) || {};
					ke.dispatch((0, s.mW)("user", De == null ? void 0 : De.user));
					const $e = (Q = Ee) === null || Q === void 0 || (te = Q.data) === null || te === void 0 ? void 0 : te.user;
					return t.g.bootstrap = Ee, $e && $e.id && Ke($e.id), !await Vt(rt, "gates") || !await Vt(vn, "tracking") ? void 0 : fn()
				} catch (ue) {
					Qt(ue, "global")
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
				u = t("../react/common/selectors/userSelectors.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				f = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/common/utils/isGuards.ts"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				m = t.n(l);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(E) {
					for (var d = 1; d < arguments.length; d++) {
						var p = arguments[d];
						for (var h in p) Object.prototype.hasOwnProperty.call(p, h) && (E[h] = p[h])
					}
					return E
				}, n.apply(this, arguments)
			}
			const o = E => {
				function d(p) {
					const h = (0, a.UM)(),
						O = (0, l.useHistory)(),
						v = (0, l.useLocation)(),
						g = (0, l.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						b = (0, a.p4)(u.PR) || null,
						_ = (0, a.p4)(i.nA) || null,
						T = (0, a.p4)(f.uF),
						A = T ? T.account : null;
					if (!g) return null;
					const {
						accountId: L,
						app: M,
						tab: x
					} = g.params, w = g.params.zoneName && ((0, c.v5)(g.params.zoneName) || g.params.zoneName.indexOf(".") > 0) ? g.params.zoneName : void 0;
					return r().createElement(E, n({
						dispatch: h,
						history: O,
						location: v,
						match: g,
						user: b,
						membership: L ? T : null,
						account: L ? A : null,
						accountId: L || null,
						zone: w ? _ : null,
						zoneName: w || null,
						app: w ? M : null,
						tab: w ? x : null
					}, p))
				}
				return d.displayName = `withEntities(${s(E)})`, d
			};

			function s(E) {
				return E.displayName || E.name || "Component"
			}
			y.Z = o
		},
		"../react/app/components/AccountHome/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$$: function() {
					return _
				},
				CK: function() {
					return M
				},
				KV: function() {
					return A
				},
				OX: function() {
					return L
				},
				QV: function() {
					return b
				},
				Yt: function() {
					return v
				},
				bA: function() {
					return g
				},
				fu: function() {
					return w
				},
				gX: function() {
					return p
				},
				hh: function() {
					return x
				},
				o1: function() {
					return T
				},
				tw: function() {
					return h
				},
				xD: function() {
					return O
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../react/utils/url.ts");
			const u = "projects table click",
				i = "click create application",
				f = "account home dev plat - product card click",
				c = "account home dev plat - empty state CTA click",
				l = "account home dev plat - view all projects click",
				m = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				o = "account home zero trust - analytics link click",
				s = "account home zero trust - product card click",
				E = "account home zero trust - plan pill click",
				d = "account home zero trust - plan fallback link click",
				p = {
					SPARROW_PROJECTS_TABLE_CLICK: u,
					SPARROW_CREATE_PROJECT_CLICK: i,
					SPARROW_PRODUCT_CARD_CLICK: f,
					SPARROW_EMPTY_STATE_CTA_CLICK: c,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: l,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: m,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: o,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: s,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: E,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: d
				},
				h = S => {
					r().sendEvent(u, {
						component: S
					})
				},
				O = S => {
					r().sendEvent(u, {
						component: "menu",
						subcomponent: S
					})
				},
				v = () => {
					r().sendEvent(i, {
						category: "Projects Table"
					})
				},
				g = ({
					category: S,
					product: j
				}) => {
					r().sendEvent(f, {
						category: S,
						product: j
					})
				},
				b = () => {
					r().sendEvent(c)
				},
				_ = () => {
					r().sendEvent(l)
				},
				T = S => {
					r().sendEvent(n, {
						category: S
					})
				},
				A = ({
					category: S,
					href: j
				}) => {
					r().sendEvent(m, {
						category: S,
						href: (0, a.cm)(j)
					})
				},
				L = ({
					category: S,
					href: j
				}) => {
					r().sendEvent(o, {
						category: S,
						href: (0, a.cm)(j)
					})
				},
				M = ({
					category: S,
					product: j,
					href: W
				}) => {
					r().sendEvent(s, {
						category: S,
						product: j,
						href: (0, a.cm)(W)
					})
				},
				x = ({
					plan: S
				}) => {
					r().sendEvent(E, {
						plan: S
					})
				},
				w = () => {
					r().sendEvent(d)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return l
				},
				Bh: function() {
					return f
				},
				CM: function() {
					return m
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
				a = (0, e.R)(r.ADD_SITE, E => ({
					payload: E
				})),
				u = (0, e.R)(r.RESOLVING_START),
				i = (0, e.R)(r.RESOLVING_COMPLETE),
				f = (0, e.R)(r.SELECT_ZONE, E => ({
					payload: E
				})),
				c = (0, e.R)(r.SELECT_ACCOUNT, E => ({
					payload: E
				})),
				l = (0, e.R)(r.SELECT_PAGES_PROJECT, E => ({
					payload: E
				})),
				m = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, E => ({
					payload: E
				})),
				n = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, E => ({
					accountIds: E
				})),
				o = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				s = (0, e.R)(r.SELECT_WORKER, E => ({
					payload: E
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				BV: function() {
					return e
				},
				Dz: function() {
					return m
				},
				Fj: function() {
					return u
				},
				Kt: function() {
					return f
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
				u = "deepLinkQueryParams",
				i = "resolvedDeepLinkQueryParams",
				f = "add",
				c = "multiSkuProducts",
				l = "/:account/billing/checkout",
				m = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return x
				},
				U: function() {
					return M.U
				},
				dd: function() {
					return M.dd
				},
				bk: function() {
					return f.bk
				},
				Bh: function() {
					return f.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t("../react/app/redux/index.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../react/app/components/DeepLink/utils.ts"),
				i = t("../react/utils/bootstrap.ts"),
				f = t("../react/app/components/DeepLink/actions.ts"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(c);

			function m(w) {
				for (var S = 1; S < arguments.length; S++) {
					var j = arguments[S] != null ? Object(arguments[S]) : {},
						W = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(j).filter(function(G) {
						return Object.getOwnPropertyDescriptor(j, G).enumerable
					})), W.forEach(function(G) {
						n(w, G, j[G])
					})
				}
				return w
			}

			function n(w, S, j) {
				return S = o(S), S in w ? Object.defineProperty(w, S, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[S] = j, w
			}

			function o(w) {
				var S = s(w, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function s(w, S) {
				if (typeof w != "object" || w === null) return w;
				var j = w[Symbol.toPrimitive];
				if (j !== void 0) {
					var W = j.call(w, S || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(w)
			}
			class E {
				constructor(S, j) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", W => {
						this.resolvers.set(W, {
							name: W,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", W => {
						const G = this.resolvers.get(W);
						G && (G.endTime = Date.now(), this.resolvers.set(W, G))
					}), n(this, "resolverCancel", W => {
						this.resolverDone(W), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", W => {
						const G = "NO_ACTION",
							ne = {
								actionType: G,
								startTime: 0
							};
						return {
							start: (q = G) => {
								const re = this.resolvers.get(W);
								ne.actionType = q, ne.startTime = Date.now(), re && re.userActions.push(ne)
							},
							finish: (q = G) => {
								ne.actionType = q, ne.endTime = Date.now()
							},
							cancel: (q = G) => {
								ne.actionType = q, ne.endTime = Date.now(), this.resolverCancel(W)
							}
						}
					}), this.deepLink = S, this.legacyDeepLink = j, this.resolvers = new Map
				}
				track(S) {
					try {
						if (this._done) return;
						this._done = !0;
						const j = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: d(this.startTime, this.endTime),
								totalCpuTime: d(this.startTime, this.endTime)
							},
							W = this.resolvers.size === 0 ? j : Array.from(this.resolvers.values()).reduce((G, ne) => {
								const q = d(ne.startTime, ne.endTime),
									re = ne.userActions.reduce((z, D) => {
										const U = d(D.startTime, D.endTime);
										return {
											totalTime: z.totalTime + U,
											actions: z.actions.set(D.actionType, U)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									F = q - re.totalTime;
								return m({}, G, {
									totalTime: G.totalTime + q,
									totalUserActionsTime: G.totalUserActionsTime + re.totalTime,
									totalCpuTime: G.totalCpuTime + F,
									[`${ne.name}ResolverTotalTime`]: q,
									[`${ne.name}ResolverTotalCpuTime`]: F,
									[`${ne.name}ResolverTotalUserActionsTime`]: re.totalTime
								}, Array.from(re.actions.keys()).reduce((z, D) => m({}, z, {
									[`${ne.name}Resolver/${D}`]: re.actions.get(D)
								}), {}))
							}, m({}, j, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						l().sendEvent(S, W)
					} catch (j) {
						console.error(j)
					}
				}
			}

			function d(w = Date.now(), S = Date.now()) {
				return (S - w) / 1e3
			}
			var p = t("../react/app/components/DeepLink/constants.ts"),
				h = t("../react/common/hooks/useCachedState.ts"),
				O = t("../react/common/hooks/usePrevious.ts");

			function v(w) {
				for (var S = 1; S < arguments.length; S++) {
					var j = arguments[S] != null ? Object(arguments[S]) : {},
						W = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(j).filter(function(G) {
						return Object.getOwnPropertyDescriptor(j, G).enumerable
					})), W.forEach(function(G) {
						g(w, G, j[G])
					})
				}
				return w
			}

			function g(w, S, j) {
				return S = b(S), S in w ? Object.defineProperty(w, S, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[S] = j, w
			}

			function b(w) {
				var S = _(w, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function _(w, S) {
				if (typeof w != "object" || w === null) return w;
				var j = w[Symbol.toPrimitive];
				if (j !== void 0) {
					var W = j.call(w, S || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(w)
			}
			var A = ({
					children: w
				}) => {
					const S = (0, r.TZ)(),
						j = (0, a.useHistory)(),
						W = (0, O.Z)(j.location.pathname),
						[G, ne] = (0, e.useState)(!0),
						[q, re] = (0, h.j)(void 0, {
							key: p.Fj
						}),
						[F, z] = (0, h.j)(void 0, {
							key: p.O5
						}),
						[D, U] = (0, h.j)(void 0, {
							key: p.s$
						}),
						I = (0, i.$8)();
					let P = new URLSearchParams(j.location.search);
					const B = (0, u.mL)(j.location.pathname, P);
					let X = null,
						ee = null;
					if (P.has(p.Tc) && P.delete(p.Tc), P.get(p.BV)) X = P.get(p.BV), j.location.hash && (ee = j.location.hash);
					else if (q) {
						const R = new URLSearchParams(q);
						R.get(p.BV) && (X = R.get(p.BV), P = R)
					} else B && (P.set(p.BV, B), X = B);
					if (X && p._h.test(X)) {
						const R = P.getAll(p.Kt),
							V = JSON.stringify(R);
						R.length && V !== D && U(V), P.has(p.Tc) && P.delete(p.Tc), P.delete(p.Kt)
					}!I && q === void 0 && X && re(P.toString());
					const ce = async () => {
						try {
							if ((0, u.I3)(X) && I) {
								q && re(void 0), S.dispatch((0, f.r4)()), ne(!0), X && X !== F && z(X);
								const R = await (0, u.py)(X, ne, S, j, W, new E(X, B ? `${j.location.pathname}${j.location.search}` : void 0));
								P.delete(p.BV);
								const V = P.toString();
								j.replace(v({}, j.location, {
									pathname: R,
									search: V
								}, ee ? {
									hash: ee
								} : {})), S.dispatch((0, f.WF)())
							}
						} catch (R) {
							S.dispatch((0, f.WF)()), console.error(R)
						} finally {
							ne(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ce()
					}, [j.location.pathname, j.location.search]), (G || (0, u.I3)(X)) && I ? null : w
				},
				L = t("../react/app/components/DeepLink/reducer.ts"),
				M = t("../react/app/components/DeepLink/selectors.ts"),
				x = A
		},
		"../react/app/components/DeepLink/reducer.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return u
				},
				r: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				a = t("../react/app/components/DeepLink/actions.ts");
			const u = null,
				i = r().from({
					lastAction: u,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function f(c = i, l) {
				if (l.type === a.MF.RESOLVING_COMPLETE) return i;
				if (l.type === a.MF.RESOLVING_START) return c.set("isResolving", !0);
				if (c.isResolving) {
					if (l.type === a.MF.RESOLVING_COMPLETE) return c.set("isResolving", !1);
					if (l.type === a.MF.SET_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", l.accountIds);
					if (l.type === a.MF.DELETE_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", void 0);
					{
						let m = c;
						try {
							m = c.set("lastAction", l)
						} catch {
							m = c.set("lastAction", {
								type: l.type
							})
						}
						return m
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
			const e = u => u.deepLink.lastAction,
				r = u => u.deepLink.isResolving,
				a = u => u.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				I3: function() {
					return m
				},
				X1: function() {
					return c
				},
				mL: function() {
					return d
				},
				py: function() {
					return E
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../react/app/components/DeepLink/reducer.ts"),
				a = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/app/components/DeepLink/constants.ts"),
				i = t("../react/common/validators/index.js"),
				f = t("../react/common/utils/isGuards.ts");
			const c = p => (0, i.Lb)(p) && (p.split(".").length > 1 || (0, f.v5)(p)),
				l = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				m = p => typeof p == "string" && p.startsWith("/"),
				n = (p, h) => O => new Promise((v, g) => {
					h.start();
					const b = p.subscribe(() => {
						const _ = (0, a.yI)(p.getState());
						_ === r.E ? (h.cancel(), b(), g("DeepLink: waitForAction out of context.")) : O(_) && (h.finish(_.type), b(), v(_))
					})
				}),
				o = (p, h, O) => (v, g) => new Promise((b, _) => {
					O.start();
					const T = h.location.pathname;
					v = new URL(v, window.location.href).pathname, T !== v && (O.cancel(), _(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${v}", but on "${T}". You need to redirect to "${v}", and unblockRouter in your Resolver, before you use this function.`));
					const A = p.subscribe(() => {
						const L = (0, a.yI)(p.getState()),
							M = h.location.pathname,
							w = new URLSearchParams(h.location.search).get(u.BV);
						(M !== v || !!w) && (O.cancel(), A(), _(`DeepLink: waitForPageAction user navigated away from "${v}" to "${M}${w?h.location.search:""}"`)), L === r.E ? (O.cancel(), A(), _("DeepLink: waitForPageAction out of context.")) : g(L) && (O.finish(L.type), A(), b(L))
					})
				});

			function s(p) {
				const h = [],
					O = p.split("?")[0].split("/");
				for (let v of O) v.length !== 0 && (v.startsWith(":") ? h.push({
					value: v.substring(1),
					type: "dynamic"
				}) : h.push({
					value: v,
					type: "static"
				}));
				return h
			}
			async function E(p, h, O, v, g, b) {
				b.start();
				const _ = s(p),
					A = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					L = {};
				let M = "";
				for (const [x, w] of _.entries())
					if (w.type === "static") M = [M, w.value].join("/");
					else if (w.type === "dynamic" && l.is(w.value) && w.value in A) {
					b.resolverStart(w.value);
					const S = await A[w.value]({
						deepLink: p,
						blockRouter: () => h(!0),
						unblockRouter: () => h(!1),
						routerHistory: v,
						resolvedValues: L,
						store: O,
						referringRoute: g,
						uri: {
							currentPartIdx: x,
							parts: _
						},
						waitForAction: n(O, b.createUserActionTracker(w.value)),
						waitForPageAction: o(O, v, b.createUserActionTracker(w.value))
					});
					b.resolverDone(w.value), M = [M, S].join("/"), L[w.value] = S
				} else throw b.cancel(), new Error(`DeepLink: Resolver with name '${w.value}' is not supported.`);
				return b.done(), M
			}

			function d(p, h) {
				const O = ":account",
					v = ":zone",
					g = h.get("zone");
				if (g) return h.delete("zone"), `/${O}/${v}/${g}`;
				const b = h.get("account");
				if (b) return h.delete("account"), `/${O}/${b}`;
				if (p === "/overview") return `/${O}/${v}`;
				const _ = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const T of _) {
					const A = T.length;
					if (p.startsWith(T) && (p.length === A || p[A] === "/")) return `/${O}/${v}${p}`
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
		"../react/app/components/ErrorBoundary.tsx": function(K, y, t) {
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
				i = t("../utils/sentry/lastSentEventId.ts"),
				f = t("../react/utils/zaraz.ts"),
				c = t("../react/utils/url.ts"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				m = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(o),
				E = t("../react/common/components/Page.tsx"),
				d = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function p() {
				return (0, e.useEffect)(() => {
					s().sendEvent("new page available refresh cta")
				}, []), r().createElement(E.Z, {
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
					src: d,
					"aria-hidden": !0
				})), r().createElement(m.zx, {
					mt: 3,
					type: "primary",
					iconType: "refresh",
					onClick: () => window.location.reload()
				}, r().createElement(n.Trans, {
					id: "common.refresh"
				}))))
			}
			const h = ({
				sentryTag: O,
				children: v,
				fallbackComponent: g
			}) => r().createElement(a.SV, {
				beforeCapture: b => {
					f.tg === null || f.tg === void 0 || f.tg.track("page-error", {
						page: (0, c.Fl)(window.location.pathname)
					})
				},
				onError: b => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(b)
				},
				fallback: ({
					error: b,
					eventId: _
				}) => {
					var T;
					if (g) return g;
					const A = i.e.getEventId() || _;
					return (b == null || (T = b.message) === null || T === void 0 ? void 0 : T.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), r().createElement(p, null)) : r().createElement(u.Z, {
						type: "page",
						error: b,
						eventId: A,
						sentryTag: O
					})
				}
			}, v)
		},
		"../react/app/components/Footer.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return U
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(c),
				m = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				o = t("../react/utils/translator.tsx"),
				s = t("../../../../node_modules/moment/moment.js"),
				E = t.n(s);
			const d = () => {
					const I = E()().format("YYYY"),
						P = B => {
							l().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: B
							})
						};
					return r().createElement(p, {
						marginTop: "auto"
					}, r().createElement(h, null, r().createElement(O, null, r().createElement(v, null, "\xA9 ", I, " Cloudflare, Inc."), r().createElement(v, null, r().createElement(g, null, r().createElement(b, {
						showOnDeskTop: !1
					}, r().createElement(_, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => P("Support")
					}, r().createElement(o.cC, {
						id: "common.support"
					}))), r().createElement(b, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => P("Privacy Policy")
					}, r().createElement(o.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(b, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => P("Terms of Use")
					}, r().createElement(o.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(b, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => P("Cookie Preferences")
					}, r().createElement(o.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(b, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => P("Trademark")
					}, r().createElement(o.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(g, null, r().createElement(b, null, r().createElement(_, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => P("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(o.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				p = (0, i.createComponent)(({
					theme: I,
					marginTop: P
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: P
				})),
				h = (0, i.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				O = (0, i.createComponent)(({
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
				v = (0, i.createComponent)(({
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
				g = (0, i.createComponent)(({
					theme: I
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: I.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				b = (0, i.createComponent)(({
					showOnDeskTop: I = !0,
					theme: P
				}) => ({
					color: P.colors.white,
					fontSize: P.fontSizes[1],
					height: "20px",
					display: I ? "flex" : "none",
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
				_ = (0, i.createStyledComponent)(({
					theme: I
				}) => ({
					textDecoration: "none",
					color: I.colors.white,
					"&:hover": {
						color: I.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var T = d,
				A = t("../react/pages/welcome/routes.ts"),
				L = t("../react/utils/cookiePreferences.ts"),
				M = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				w = () => {
					const [I, P] = (0, e.useState)(!1), B = (0, L.wV)(), X = () => {
						P(!0)
					}, ee = () => {
						P(!1)
					}, ce = B && B === "US" ? (0, o.ZP)("footer.cpra_cta.privacy_choices") : (0, o.ZP)("footer.cpra_cta.cookie_preferences"), R = {
						background: "transparent",
						borderRadius: "none",
						color: I ? (0, f.Yc)() ? "#ee730a" : "#003681" : (0, f.Yc)() ? "#4693ff" : "#0051c3",
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
						style: R,
						onMouseEnter: X,
						onMouseLeave: ee
					}, r().createElement(u.Ei, {
						height: 15,
						src: M,
						mr: 2,
						alt: ce
					}), ce)
				};

			function S() {
				return S = Object.assign ? Object.assign.bind() : function(I) {
					for (var P = 1; P < arguments.length; P++) {
						var B = arguments[P];
						for (var X in B) Object.prototype.hasOwnProperty.call(B, X) && (I[X] = B[X])
					}
					return I
				}, S.apply(this, arguments)
			}

			function j(I, P) {
				if (I == null) return {};
				var B = W(I, P),
					X, ee;
				if (Object.getOwnPropertySymbols) {
					var ce = Object.getOwnPropertySymbols(I);
					for (ee = 0; ee < ce.length; ee++) X = ce[ee], !(P.indexOf(X) >= 0) && (!Object.prototype.propertyIsEnumerable.call(I, X) || (B[X] = I[X]))
				}
				return B
			}

			function W(I, P) {
				if (I == null) return {};
				var B = {},
					X = Object.keys(I),
					ee, ce;
				for (ce = 0; ce < X.length; ce++) ee = X[ce], !(P.indexOf(ee) >= 0) && (B[ee] = I[ee]);
				return B
			}
			const G = (0, i.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,f.Yc)()?f.rS.colors.orange[6]:f.rS.colors.blue[4]}`
					}
				}), u.A),
				ne = (0, i.createStyledComponent)(({
					theme: I
				}) => ({
					color: I.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, m.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: I.colors.gray[4]
					}
				}), u.A),
				q = I => {
					let {
						onClick: P
					} = I, B = j(I, ["onClick"]);
					return React.createElement(G, S({
						onClick: X => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: B.href
							}), P && P(X)
						}
					}, B))
				},
				re = I => {
					let {
						children: P,
						target: B,
						rel: X
					} = I, ee = j(I, ["children", "target", "rel"]);
					return r().createElement(ne, S({
						target: B || "_blank",
						rel: X || "noopener noreferrer"
					}, ee), P)
				},
				F = (0, i.createStyledComponent)(({
					theme: I
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, m.tq)() ? "8px" : "16px",
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
				z = (0, i.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, m.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), u.ZC);
			var U = () => {
				const I = [A.d.root.pattern].some(B => (0, a.matchPath)(location.pathname, {
					path: B
				}));
				if ((0, n.PP)()) return r().createElement(T, null);
				if (I) return null;
				const P = new Date().getFullYear();
				return r().createElement(u.$_, {
					height: (0, m.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto",
					id: "site-footer"
				}, r().createElement(z, null, r().createElement(F, null, r().createElement(u.Li, null, r().createElement(re, {
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
				}, (0, o.ZP)("footer.privacy_policy"))), r().createElement(u.Li, null, r().createElement(w, null)), r().createElement(u.Li, null, r().createElement(u.Dr, {
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
				u = t("../react/utils/translator.tsx");
			const i = f => r().createElement(a.Z, f, (0, u.ZP)("error.forbidden"));
			y.Z = i
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return h
				},
				Z: function() {
					return ce
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = t.n(l),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				o = t("../react/common/components/AccessControl/index.js"),
				s = t("../react/common/components/ButtonWithDropdown.tsx"),
				E = t("../react/common/components/Dropdown/index.tsx"),
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
				O = () => {
					const R = (0, p.Z)("super-add-button-copy-change"),
						V = [{
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
					switch (R) {
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
							}, ...V];
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
							}, ...V];
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
							}, ...V];
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
							}, ...V];
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
							}, ...V];
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
				v = [{
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
			var g = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function b(R) {
				for (var V = 1; V < arguments.length; V++) {
					var k = arguments[V] != null ? Object(arguments[V]) : {},
						Z = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(k).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(k, ie).enumerable
					})), Z.forEach(function(ie) {
						_(R, ie, k[ie])
					})
				}
				return R
			}

			function _(R, V, k) {
				return V = T(V), V in R ? Object.defineProperty(R, V, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[V] = k, R
			}

			function T(R) {
				var V = A(R, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function A(R, V) {
				if (typeof R != "object" || R === null) return R;
				var k = R[Symbol.toPrimitive];
				if (k !== void 0) {
					var Z = k.call(R, V || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(R)
			}

			function L() {
				return L = Object.assign ? Object.assign.bind() : function(R) {
					for (var V = 1; V < arguments.length; V++) {
						var k = arguments[V];
						for (var Z in k) Object.prototype.hasOwnProperty.call(k, Z) && (R[Z] = k[Z])
					}
					return R
				}, L.apply(this, arguments)
			}

			function M(R, V) {
				if (R == null) return {};
				var k = x(R, V),
					Z, ie;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(R);
					for (ie = 0; ie < pe.length; ie++) Z = pe[ie], !(V.indexOf(Z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(R, Z) || (k[Z] = R[Z]))
				}
				return k
			}

			function x(R, V) {
				if (R == null) return {};
				var k = {},
					Z = Object.keys(R),
					ie, pe;
				for (pe = 0; pe < Z.length; pe++) ie = Z[pe], !(V.indexOf(ie) >= 0) && (k[ie] = R[ie]);
				return k
			}
			const w = R => {
					let {
						title: V,
						trackingEvent: k,
						icon: Z,
						url: ie,
						description: pe,
						disabled: de
					} = R, ve = M(R, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return r().createElement(S, L({
						to: !de && ie || "#",
						"aria-disabled": de,
						onClick: () => {
							m().sendEvent(k, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, ve), r().createElement(u.ZC, {
						display: "flex"
					}, r().createElement(a.J, {
						type: Z,
						size: 24,
						mr: 2,
						mt: 1
					}), r().createElement(u.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, r().createElement(u.ZC, {
						fontSize: 3
					}, r().createElement(d.cC, V)), r().createElement(u.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, r().createElement(d.cC, pe)))))
				},
				S = (0, n.createStyledComponent)(({
					theme: R
				}) => {
					const V = {
						cursor: "pointer",
						backgroundColor: (0, f.Yc)() ? R.colors.gray[8] : R.colors.gray[9],
						color: R.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: R.colors.background,
						color: R.colors.gray[2],
						fontSize: R.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': V,
						':focus-within:not([aria-disabled="true"])': b({}, V, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: R.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, g.Link);
			var j = w;

			function W() {
				return W = Object.assign ? Object.assign.bind() : function(R) {
					for (var V = 1; V < arguments.length; V++) {
						var k = arguments[V];
						for (var Z in k) Object.prototype.hasOwnProperty.call(k, Z) && (R[Z] = k[Z])
					}
					return R
				}, W.apply(this, arguments)
			}

			function G(R) {
				for (var V = 1; V < arguments.length; V++) {
					var k = arguments[V] != null ? Object(arguments[V]) : {},
						Z = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(k).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(k, ie).enumerable
					})), Z.forEach(function(ie) {
						ne(R, ie, k[ie])
					})
				}
				return R
			}

			function ne(R, V, k) {
				return V = q(V), V in R ? Object.defineProperty(R, V, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[V] = k, R
			}

			function q(R) {
				var V = re(R, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function re(R, V) {
				if (typeof R != "object" || R === null) return R;
				var k = R[Symbol.toPrimitive];
				if (k !== void 0) {
					var Z = k.call(R, V || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(R)
			}

			function F(R, V) {
				if (R == null) return {};
				var k = z(R, V),
					Z, ie;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(R);
					for (ie = 0; ie < pe.length; ie++) Z = pe[ie], !(V.indexOf(Z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(R, Z) || (k[Z] = R[Z]))
				}
				return k
			}

			function z(R, V) {
				if (R == null) return {};
				var k = {},
					Z = Object.keys(R),
					ie, pe;
				for (pe = 0; pe < Z.length; pe++) ie = Z[pe], !(V.indexOf(ie) >= 0) && (k[ie] = R[ie]);
				return k
			}
			const D = "GLOBAL_ADD_DROPDOWN",
				U = (0, n.createStyledComponent)(({
					theme: R
				}) => ({
					"background-color": R.colors.blue[5]
				}), i.zx),
				I = ({
					disableProducts: R
				}) => {
					const V = O();
					return (0, e.useEffect)(() => (m().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						m().sendEvent("close add product dropdown", {
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
					}, V.map(k => {
						const Z = k || {},
							{
								disableOn: ie,
								permissionCheck: pe
							} = Z,
							de = F(Z, ["disableOn", "permissionCheck"]),
							ve = ie && R[ie],
							oe = G({}, de, {
								disabled: ve
							});
						return pe ? r().createElement(o.Z, {
							key: k.title.id,
							edit: pe
						}, ({
							isEditable: Ie
						}) => Ie && r().createElement(j, oe)) : r().createElement(j, W({
							key: k.url
						}, oe))
					}))
				},
				P = ({
					disableProducts: R,
					topNavType: V
				}) => {
					const k = () => (0, c.tq)() || V === "icon-only" ? r().createElement(u.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, r().createElement(U, {
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
					return r().createElement(B, {
						role: "group",
						"data-testid": D
					}, r().createElement(E.Lt, {
						trigger: V === "baseline" ? r().createElement(X, null, r().createElement(a.J, {
							label: "plus",
							type: "plus"
						}), !(0, c.tq)() && r().createElement(r().Fragment, null, r().createElement(d.cC, {
							id: "common.add"
						}), " ", r().createElement(a.J, {
							label: "arrow",
							type: "caret-down"
						}))) : k(),
						menu: r().createElement(I, {
							disableProducts: R
						})
					}))
				},
				B = (0, n.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				X = (0, n.createStyledComponent)(({
					theme: R
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: R.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, f.Yc)() ? R.colors.gray[1] : R.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, f.Yc)() ? R.colors.gray[8] : R.colors.gray[9]
					}
				}), u.zx);
			var ee = P,
				ce = ee
		},
		"../react/app/components/LoadingSuspense.tsx": function(K, y, t) {
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
				i = t("../react/utils/translator.tsx"),
				f = t("../react/app/components/ErrorStatus.tsx"),
				c = t("../react/common/components/EmptyPage.jsx"),
				l = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const m = "suspenseComplete";

			function n() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(m))
				}, [])
			}

			function o(O) {
				useEventListener(m, () => {
					window.setTimeout(O, 0)
				}, {
					target: window
				})
			}

			function s(...O) {
				const [v, g] = O;
				React.useLayoutEffect(v, g), o(v)
			}

			function E(O) {
				const [v, g] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const b = window.setTimeout(() => g(!0), O);
					return () => window.clearTimeout(b)
				}, []), v
			}
			const d = ({
				loadingTimeout: O = 1e3,
				stillLoadingTimeout: v = 9e3
			}) => {
				const g = E(O),
					b = E(v);
				if (n(), !g && !b) return r().createElement(c.Z, null);
				const _ = b ? r().createElement(i.cC, {
					id: "common.still_loading"
				}) : g ? r().createElement(i.cC, {
					id: "common.loading"
				}) : null;
				return r().createElement(f.Z, {
					size: 5
				}, r().createElement(u.ZC, {
					mr: 3
				}, r().createElement(a.g, {
					size: "2x"
				})), _)
			};
			var h = ({
				children: O
			}) => r().createElement(e.Suspense, {
				fallback: r().createElement(d, null)
			}, O)
		},
		"../react/app/components/Persistence/api.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				C8: function() {
					return l
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
					return f
				},
				m6: function() {
					return n
				},
				n: function() {
					return m
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
					} catch (E) {
						console.error(E)
					}
				}, i = async E => {
					try {
						return await (await e.get(`/accounts/${E}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (d) {
						console.error(d)
					}
				}, f = async (E, d) => {
					try {
						return await (await e.post(`${a}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: E,
								accountId: d
							}),
							hideErrorAlert: !0
						})).body
					} catch (p) {
						return console.error(p), []
					}
				}, c = async (E, d) => {
					try {
						return await http.post(`/accounts/${E}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: d
							}),
							hideErrorAlert: !0
						}), !0
					} catch (p) {
						return console.error(p), !1
					}
				}, l = async E => {
					try {
						return await (await e.post(a, {
							body: JSON.stringify({
								darkMode: E
							})
						})).body
					} catch (d) {
						console.error(d)
					}
				}, m = async E => {
					try {
						return await (await e.post(`${a}/recents`, {
							body: JSON.stringify(E),
							hideErrorAlert: !0
						})).body
					} catch (d) {
						console.error(d)
					}
				}, n = async E => {
					try {
						return await (await e.post(`${a}/viewed-changes`, {
							body: JSON.stringify(E),
							hideErrorAlert: !0
						})).body
					} catch (d) {
						throw console.error(d), d
					}
				}, o = async E => {
					try {
						return await (await e.post(a + "/flags", {
							body: JSON.stringify(E)
						})).body
					} catch (d) {
						throw console.error(d), d
					}
				}, s = async (E, d) => {
					try {
						return await (await e.post(`${a}/dismissed-tasks`, {
							body: JSON.stringify({
								name: E,
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
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/components/Persistence/index.tsx");
			const u = () => (0, e.useContext)(a.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				Wl: function() {
					return m
				},
				lp: function() {
					return O
				},
				Z_: function() {
					return g
				},
				r7: function() {
					return S
				},
				Tv: function() {
					return z
				},
				yZ: function() {
					return b.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(u),
				f = t("../react/utils/bootstrap.ts"),
				c = t("../react/common/selectors/zoneSelectors.ts"),
				l = t("../react/app/components/Persistence/api.ts");
			const m = 10;
			var n = t("../react/common/hooks/useActiveState.ts");

			function o(D) {
				for (var U = 1; U < arguments.length; U++) {
					var I = arguments[U] != null ? Object(arguments[U]) : {},
						P = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(I).filter(function(B) {
						return Object.getOwnPropertyDescriptor(I, B).enumerable
					})), P.forEach(function(B) {
						s(D, B, I[B])
					})
				}
				return D
			}

			function s(D, U, I) {
				return U = E(U), U in D ? Object.defineProperty(D, U, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[U] = I, D
			}

			function E(D) {
				var U = d(D, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function d(D, U) {
				if (typeof D != "object" || D === null) return D;
				var I = D[Symbol.toPrimitive];
				if (I !== void 0) {
					var P = I.call(D, U || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(D)
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
				h = o({}, p, {
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
				O = (0, e.createContext)(h),
				v = O.Consumer,
				g = ({
					children: D,
					onDarkModeChangeCb: U
				}) => {
					const [I, P] = (0, e.useState)(p), [B, X] = (0, e.useState)(h.isLoading), [ee, ce] = (0, e.useState)(!1), R = (0, f.$8)(), V = (0, a.p4)(de => (0, c.wH)(de)), [, k] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						R ? (0, l.yl)().then(de => {
							if (de) {
								var ve;
								P(de), k(de == null || (ve = de.flags) === null || ve === void 0 ? void 0 : ve.hasEnabledSecurityNavigation), i().identify({
									hasEnabledSecurityNavigation: de.flags.hasEnabledSecurityNavigation
								}), U(de.darkMode)
							}
						}).finally(() => X(!1)) : X(!1)
					}, [R]);
					const Z = (de, ve) => !!I.favorites.find(oe => oe.type === "zone" && oe.name === de && oe.accountId === ve),
						ie = m - I.favorites.length,
						pe = de => I.favorites.filter(oe => oe.type === "zone" && oe.accountId === de).length < m;
					return r().createElement(O.Provider, {
						value: o({}, I, {
							isLoading: B,
							remainingStarSlots: ie,
							isUpdatingFlags: ee,
							actions: {
								canAccountStarZone: pe,
								isZoneStarred: Z,
								starZone: async (de, ve) => {
									var oe;
									const Ie = !Z(de, ve),
										Le = pe(ve);
									if (Ie && !Le) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Me = await (0, l.lt)(de, ve);
									i().sendEvent("click star zone", {
										isStarring: Ie,
										totalStarredZones: Me.filter(je => je.accountId === ve && je.type === "zone").length,
										totalZones: V == null || (oe = V.paginationData) === null || oe === void 0 ? void 0 : oe.info.total_count
									}), P(o({}, I, {
										favorites: Me
									}))
								},
								toggleSecurityNavigation: async de => {
									ce(!0), await (0, l.Sp)({
										hasEnabledSecurityNavigation: de
									}), i().identify({
										hasEnabledSecurityNavigation: de
									}), ce(!1), k(de), P(o({}, I, {
										flags: {
											hasEnabledSecurityNavigation: de
										}
									}))
								},
								setDarkMode: async de => {
									const ve = await (0, l.C8)(de);
									P(ve), U(ve.darkMode)
								},
								logRouteVisited: async de => {
									var ve;
									const oe = await (0, l.n)(de);
									P((ve = oe) !== null && ve !== void 0 ? ve : o({}, I))
								},
								viewChange: async de => {
									const ve = await (0, l.m6)(de);
									P(o({}, I, {
										viewedChanges: ve
									}))
								},
								dismissTask: async (de, ve) => {
									const oe = await (0, l.Mn)(de, ve);
									P(o({}, I, {
										dismissedTasks: oe
									}))
								}
							}
						})
					}, D)
				};
			var b = t("../react/app/components/Persistence/hooks.ts"),
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				T = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function A() {
				return A = Object.assign ? Object.assign.bind() : function(D) {
					for (var U = 1; U < arguments.length; U++) {
						var I = arguments[U];
						for (var P in I) Object.prototype.hasOwnProperty.call(I, P) && (D[P] = I[P])
					}
					return D
				}, A.apply(this, arguments)
			}

			function L(D, U) {
				if (D == null) return {};
				var I = M(D, U),
					P, B;
				if (Object.getOwnPropertySymbols) {
					var X = Object.getOwnPropertySymbols(D);
					for (B = 0; B < X.length; B++) P = X[B], !(U.indexOf(P) >= 0) && (!Object.prototype.propertyIsEnumerable.call(D, P) || (I[P] = D[P]))
				}
				return I
			}

			function M(D, U) {
				if (D == null) return {};
				var I = {},
					P = Object.keys(D),
					B, X;
				for (X = 0; X < P.length; X++) B = P[X], !(U.indexOf(B) >= 0) && (I[B] = D[B]);
				return I
			}
			const x = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var S = D => {
					let {
						isStarred: U,
						size: I = 16
					} = D, P = L(D, ["isStarred", "size"]);
					const B = x[(0, _.Yc)() ? "dark" : "light"];
					return r().createElement(T.J, A({
						type: U ? "star" : "star-outline",
						color: U ? B.gold : B.gray,
						size: I
					}, P))
				},
				j = t("../node_modules/@cloudflare/elements/es/index.js");

			function W(D) {
				for (var U = 1; U < arguments.length; U++) {
					var I = arguments[U] != null ? Object(arguments[U]) : {},
						P = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(I).filter(function(B) {
						return Object.getOwnPropertyDescriptor(I, B).enumerable
					})), P.forEach(function(B) {
						G(D, B, I[B])
					})
				}
				return D
			}

			function G(D, U, I) {
				return U = ne(U), U in D ? Object.defineProperty(D, U, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[U] = I, D
			}

			function ne(D) {
				var U = q(D, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function q(D, U) {
				if (typeof D != "object" || D === null) return D;
				var I = D[Symbol.toPrimitive];
				if (I !== void 0) {
					var P = I.call(D, U || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(D)
			}
			const re = {
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
			var z = (0, e.forwardRef)(({
				featurePreview: D = !1,
				isStarred: U,
				onClickFn: I,
				isDisabled: P,
				testId: B,
				buttonText: X,
				size: ee = "large",
				variant: ce = "pill"
			}, R) => {
				const [V, k] = (0, e.useState)(!1), Z = re[(0, _.Yc)() ? "dark" : "light"][U && !D ? "active" : "default"], ie = W({}, ee === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, ee === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, ee === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), pe = {
					pill: "50vh",
					button: 4
				};
				return r().createElement(j.zx, {
					onMouseEnter: () => k(!0),
					onMouseLeave: () => k(!1),
					innerRef: R,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: ie.paddingRight,
					gap: 1,
					pl: ie.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: pe[ce],
					border: "1px solid",
					cursor: D || P ? "default" : "pointer",
					backgroundColor: V ? Z.bgHover : Z.bg,
					color: Z.text,
					borderColor: Z.border,
					onClick: I,
					opacity: P ? .5 : 1,
					disabled: P,
					fontSize: ie.fontSize,
					height: ie.height,
					"data-testid": B
				}, r().createElement(S, {
					isStarred: D ? !1 : U,
					size: ie.starIconSize
				}), X)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				iY: function() {
					return b
				},
				us: function() {
					return W
				},
				wB: function() {
					return _
				},
				gw: function() {
					return re
				},
				dL: function() {
					return M
				},
				IU: function() {
					return L
				},
				Wq: function() {
					return ne
				},
				fO: function() {
					return G
				},
				zJ: function() {
					return j
				},
				o_: function() {
					return S
				},
				Id: function() {
					return z
				},
				jq: function() {
					return F
				},
				hv: function() {
					return A
				},
				$n: function() {
					return T
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/utils/zoneLevelAccess.ts"),
				f = t("../react/pages/stream/selectors.ts"),
				c = t("../react/pages/home/domain-registration/selectors.ts"),
				l = t("../react/pages/images/selectors.ts");
			const m = "r2_migrator_waitlist",
				n = "r2migrator",
				o = "r2",
				s = "r2_storage_migrator",
				E = "r2_storage_migrator",
				d = D => getAccountEntitlement(D, "r2.enabled"),
				p = D => Boolean((0, a.Le)(D, s, m)),
				h = D => Boolean(getAccountFlipperFlagsChanges(D, E, n));
			var O = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				v = t("../react/pages/home/configurations/dns-settings/isZoneDNSOnly.tsx");
			const g = D => !!(0, i.b)(D),
				b = D => g(D) ? (0, e.hT)(D) : !0,
				_ = (D, U, I, P = "read") => {
					const B = (0, a.nA)(D);
					return g(D) ? (0, e.WL)(D, (0, e.W9)(I, e.ZZ[P]), (0, e.j)(B == null ? void 0 : B.id)) : (0, u.Yj)(D)(U)[P]
				},
				T = (D, U, I, P = "read") => {
					const B = (0, a.nA)(D),
						X = e.zs.includes(I);
					return g(D) ? (0, e.WL)(D, X ? I : (0, e.my)(I, e.ZZ[P === "edit" ? "update" : P]), (0, e.j)(B == null ? void 0 : B.id)) : (0, u.Yj)(D)(U)[P === "update" ? "edit" : P]
				},
				A = D => !!(0, f._Q)(D),
				L = D => (0, l.pT)(D),
				M = D => (0, l.pT)(D) && (0, l.GH)(D),
				x = D => sourcingKitEnabledSelector(D),
				w = D => !!r2EnabledSelector(D),
				S = D => p(D),
				j = D => (0, r.$f)(D, "rulesets.magic_transit_allowed"),
				W = D => (0, r.$f)(D, "flowtrackd.magic_custom_config_allowed"),
				G = D => (0, r.$f)(D, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				ne = D => (0, u.Le)(D, "ddos_protection", "l4_rulesets"),
				q = D => hasAccountEntitlements(D, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				re = D => (0, c.HO)(D),
				F = D => !(0, r.yD)(D) && !!T(D, "ssl", "ssl.cert"),
				z = D => {
					const U = (0, a.nA)(D),
						I = (0, u.D0)(D),
						P = !!(0, O.z1)("zone-level-rum")(D);
					return !!I && (0, e.WL)(D, (0, e.jX)("rum.analytics", e.ZZ.read), (0, e.L8)(I.id)) && (U == null ? void 0 : U.status) === "active" && P && !(0, v.s)(D)
				}
		},
		"../react/app/components/SomethingWrong.jsx": function(K, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(a),
				i = t("../../../../node_modules/prop-types/index.js"),
				f = t.n(i),
				c = t("webpack/sharing/consume/default/react-redux/react-redux"),
				l = t.n(c),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(m),
				o = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				s = t("../node_modules/@cloudflare/component-button/es/index.js"),
				E = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				d = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				p = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				h = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				O = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				v = t.n(O),
				g = t("../react/common/actions/membershipActions.ts"),
				b = t("../react/utils/url.ts"),
				_ = t("../react/app/components/Footer.tsx");

			function T(F) {
				for (var z = 1; z < arguments.length; z++) {
					var D = arguments[z] != null ? Object(arguments[z]) : {},
						U = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(D).filter(function(I) {
						return Object.getOwnPropertyDescriptor(D, I).enumerable
					})), U.forEach(function(I) {
						A(F, I, D[I])
					})
				}
				return F
			}

			function A(F, z, D) {
				return z = L(z), z in F ? Object.defineProperty(F, z, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[z] = D, F
			}

			function L(F) {
				var z = M(F, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function M(F, z) {
				if (typeof F != "object" || F === null) return F;
				var D = F[Symbol.toPrimitive];
				if (D !== void 0) {
					var U = D.call(F, z || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(F)
			}
			const x = (0, o.createComponent)(({
					type: F
				}) => ({
					height: F !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				w = (0, o.createComponent)(({
					theme: F,
					margin: z,
					size: D = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: F.colors.gray[3],
					height: z ? "auto" : "100%",
					padding: z ? 0 : F.space[D > 1 ? D - 2 : 0],
					margin: z,
					justifyContent: "center",
					alignItems: "center"
				})),
				S = (0, o.createComponent)(() => ({
					textAlign: "left"
				})),
				j = (0, o.createComponent)(() => ({
					textAlign: "right"
				})),
				W = (0, o.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[6]
				})),
				G = (0, o.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[4]
				})),
				ne = (0, o.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[3]
				})),
				q = (0, o.createComponent)(({
					theme: F
				}) => ({
					width: "100%",
					height: 125,
					marginTop: F.space[4],
					padding: F.space[2]
				}), "textarea");
			class re extends r().Component {
				constructor(...z) {
					super(...z);
					A(this, "state", {
						value: "",
						submitted: !1
					}), A(this, "handleTextareaChange", D => {
						this.setState({
							value: D.target.value
						})
					}), A(this, "sendErrToSentry10", async () => {
						try {
							var D, U, I, P;
							const B = ((D = window) === null || D === void 0 || (U = D.bootstrap) === null || U === void 0 || (I = U.data) === null || I === void 0 || (P = I.user) === null || P === void 0 ? void 0 : P.id) || "Unknown",
								X = this.props.eventId || E.eW(),
								ee = {
									name: B,
									email: `${B}@userid.com`,
									comments: this.state.value,
									eventId: X,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: T({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(ee)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (B) {
							console.error(B)
						}
					}), A(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), A(this, "renderContent", D => r().createElement(m.I18n, null, U => r().createElement(x, {
						type: D
					}, r().createElement(w, null, r().createElement(S, null, r().createElement(W, null, U.t("error.internal_issues")), r().createElement(G, null, U.t("error.help_us")), r().createElement(q, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: I => this.handleTextareaChange(I),
						disabled: this.state.submitted,
						placeholder: U.t("error.give_feedback")
					}), r().createElement(j, null, !this.state.submitted && r().createElement(s.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, U.t("common.submit")), this.state.submitted && r().createElement(ne, null, U.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: z,
						sentryTag: D,
						membershipsList: U
					} = this.props;
					console.error(`SomethingWrong: ${z}`);
					let I = "";
					const P = (0, b.e1)();
					if (P) {
						var B;
						const ee = await U({
								parameters: {
									status: "accepted"
								}
							}),
							ce = ee == null || (B = ee.find(R => R.id === P)) === null || B === void 0 ? void 0 : B.roles;
						ce && ce.length && (I = ce.join(", "))
					}
					const X = `ErrorBoundary - ${z}`;
					d.Tb(X, {
						tags: {
							errorBoundary: D,
							normalizedPath: (0, b.Fl)(window.location.pathname),
							roles: I.length ? I : void 0
						}
					}), v().sendEvent("something wrong", {
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
					}, r().createElement(h.TR, null))), this.renderContent(z), r().createElement(_.Z, null)) : this.renderContent(z)
				}
			}
			re.propTypes = {
				type: f().oneOf(["fullscreen", "page"]),
				error: f().oneOfType([f().string, f().object]),
				eventId: f().string,
				sentryTag: f().string,
				membershipsList: f().func
			}, y.Z = (0, c.connect)(() => ({}), {
				membershipsList: g.YT
			})(re)
		},
		"../react/app/providers/storeContainer.js": function(K, y, t) {
			"use strict";
			t.d(y, {
				bh: function() {
					return j
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				r = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				a = t.n(r),
				u = t("../../../../node_modules/redux-thunk/es/index.js"),
				i = t("../../../../node_modules/redux-persist/es/index.js"),
				f = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				c = t("../react/app/rootReducer.js"),
				l = t("../react/app/redux/normalizer.js"),
				m = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				o = t("../react/app/reducerRegistry.js"),
				s = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				E = t("../react/common/sagas/index.js"),
				d = t("../react/app/redux/processActionMiddleware.js"),
				p = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				h = t("../../../../node_modules/is-promise/index.js"),
				O = t.n(h);

			function v(W) {
				for (var G = 1; G < arguments.length; G++) {
					var ne = arguments[G] != null ? Object(arguments[G]) : {},
						q = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(ne).filter(function(re) {
						return Object.getOwnPropertyDescriptor(ne, re).enumerable
					})), q.forEach(function(re) {
						g(W, re, ne[re])
					})
				}
				return W
			}

			function g(W, G, ne) {
				return G = b(G), G in W ? Object.defineProperty(W, G, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[G] = ne, W
			}

			function b(W) {
				var G = _(W, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function _(W, G) {
				if (typeof W != "object" || W === null) return W;
				var ne = W[Symbol.toPrimitive];
				if (ne !== void 0) {
					var q = ne.call(W, G || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(W)
			}
			const T = {
					key: "cf-redux-store",
					storage: f.Z,
					whitelist: ["accountAccess", "invite"]
				},
				A = (0, s.ZP)(),
				M = [({
					dispatch: W
				}) => G => ne => O()(ne) ? ne.then(q => W(q)) : G(ne), A, u.Z, d.Z, l.qR],
				x = W => (0, i.Wq)(T, v({}, c.Z, W));

			function w() {
				const W = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					ne = e.compose((0, e.applyMiddleware)(...M), m.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					q = {},
					re = (0, e.createStore)(x(o.Z.getReducers()), q, ne);
				A.run(E.Z), (0, i.p5)(re);
				const z = (t.g.bootstrap || {}).data || {};
				return re.dispatch((0, p.mW)("user", z.user)), re
			}
			let S;
			o.Z.setChangeListener(W => {
				var G;
				S && ((G = S) === null || G === void 0 ? void 0 : G.replaceReducer) && (S.replaceReducer(x(W)), (0, i.p5)(S))
			});

			function j() {
				return S || (S = w()), S
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
					return u
				},
				p4: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e);
			const a = () => (0, e.useStore)(),
				u = () => a().getState(),
				i = () => (0, e.useDispatch)(),
				f = e.useSelector
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
					return m
				},
				ZP: function() {
					return E
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
						O = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(h).filter(function(v) {
						return Object.getOwnPropertyDescriptor(h, v).enumerable
					})), O.forEach(function(v) {
						i(d, v, h[v])
					})
				}
				return d
			}

			function i(d, p, h) {
				return p = f(p), p in d ? Object.defineProperty(d, p, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = h, d
			}

			function f(d) {
				var p = c(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function c(d, p) {
				if (typeof d != "object" || d === null) return d;
				var h = d[Symbol.toPrimitive];
				if (h !== void 0) {
					var O = h.call(d, p || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const l = u({}, r),
				m = (d, p, h, O = {}) => {
					const v = d === "delete" ? "del" : d.toLowerCase();
					return h && v !== "del" && (O.body = h), l[v](p, O)
				},
				n = (d, p) => (d.meta.params = p, d),
				o = (d, p, h, O, {
					body: v = {}
				}) => {
					const {
						result: g,
						messages: b,
						result_info: _
					} = v, T = Object.values(p);
					if (d.meta.method === "delete") {
						const A = T[T.length - 1];
						d.meta.id = typeof A == "object" ? A.id : A
					}
					return d.payload = g, b && (d.meta.messages = b), T.length && (d.meta.params = p), _ && (d.meta.paginationData = {
						info: _,
						actionParameters: T,
						options: h[0],
						insertionOffset: 0
					}), d
				},
				s = (d, p, h, O, v) => (d.payload = v && v.body && v.body.errors, d.meta.messages = v && v.body && v.body.messages, d.meta.params = p, d.apiError = v, d);

			function E(d, p, h, O) {
				const v = (0, e.RM)(d, p, h, O).apiFetch(m).on("start", n).on("success", o).on("error", s),
					g = v.mock;
				return v.mock = b => (g((..._) => {
					const T = b(..._);
					return T && typeof T == "object" && "result" in T ? T : {
						result: T
					}
				}), v), v
			}
		},
		"../react/app/redux/normalizer.js": function(K, y, t) {
			"use strict";
			t.d(y, {
				P1: function() {
					return m
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
				a = t("../react/pages/email/types.ts"),
				u = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				i = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				f = t.n(i);
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
				l = o => o.entities,
				m = (...o) => (0, u.P1)(c, l, ...o),
				n = (0, u.QB)(c)
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
			const r = u => (i, f, c) => (0, e.SC)(i, f, c, {
					hideErrorAlert: !0
				}).catch(u),
				a = u => i => {
					if (i.status === u) return i;
					throw i
				}
		},
		"../react/common/actionTypes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Cm: function() {
					return f
				},
				Cz: function() {
					return r
				},
				HI: function() {
					return c
				},
				Li: function() {
					return m
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
					return i
				},
				s1: function() {
					return l
				}
			});
			const e = "NOTIFICATION_OPEN",
				r = "NOTIFICATION_CLOSE",
				a = "MODAL_OPEN",
				u = "MODAL_CLOSE",
				i = "TOGGLE_ON",
				f = "TOGGLE_OFF",
				c = "SET_ACTIVE",
				l = "CLEAR_ACTIVE",
				m = "UPDATE_ACCOUNT_ACCESS",
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
			const r = (u, i) => ({
					type: e.HI,
					activeKey: u,
					activeValue: i
				}),
				a = u => ({
					type: e.s1,
					activeKey: u
				})
		},
		"../react/common/actions/membershipActions.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return s
				},
				YT: function() {
					return m
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

			function a(E) {
				for (var d = 1; d < arguments.length; d++) {
					var p = arguments[d] != null ? Object(arguments[d]) : {},
						h = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(p).filter(function(O) {
						return Object.getOwnPropertyDescriptor(p, O).enumerable
					})), h.forEach(function(O) {
						u(E, O, p[O])
					})
				}
				return E
			}

			function u(E, d, p) {
				return d = i(d), d in E ? Object.defineProperty(E, d, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[d] = p, E
			}

			function i(E) {
				var d = f(E, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function f(E, d) {
				if (typeof E != "object" || E === null) return E;
				var p = E[Symbol.toPrimitive];
				if (p !== void 0) {
					var h = p.call(E, d || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(E)
			}
			const c = E => {
					const d = E.payload.map(p => a({}, p, {
						membershipId: p.id,
						id: p.account.id
					}));
					return a({}, E, {
						payload: d
					})
				},
				l = E => {
					const d = c(E);
					return Array.isArray(d.payload) ? a({}, E, {
						payload: d.payload[0]
					}) : a({}, E, {
						payload: null
					})
				},
				m = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", c),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				o = (...E) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: E
				}),
				s = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", l)
		},
		"../react/common/actions/modalActions.ts": function(K, y, t) {
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

			function a(i, f, c = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: i,
						props: f
					},
					options: c
				}
			}

			function u(i) {
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
					return m
				},
				info: function() {
					return c
				},
				success: function() {
					return f
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

			function a(n) {
				return {
					type: e.Cz,
					notificationId: n
				}
			}
			let u = 0;

			function i(n, o, s = {}) {
				return s = s || {},
					function(E) {
						let d = u++,
							p = {
								id: d,
								type: n,
								message: o,
								delay: s.delay,
								persist: s.persist === void 0 ? !1 : s.persist,
								closable: s.closable === void 0 ? !0 : s.closable,
								onClose() {
									E(a(d)), s.onClose && s.onClose.apply(null, arguments)
								}
							};
						E(r(p))
					}
			}

			function f(n, o) {
				return i("success", n, o)
			}

			function c(n, o) {
				return i("info", n, o)
			}

			function l(n, o) {
				return i("warning", n, o)
			}

			function m(n, o) {
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
					return O
				},
				V_: function() {
					return v
				},
				Y9: function() {
					return p
				},
				Z0: function() {
					return b
				},
				mp: function() {
					return h
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

			function a(_) {
				for (var T = 1; T < arguments.length; T++) {
					var A = arguments[T] != null ? Object(arguments[T]) : {},
						L = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(A).filter(function(M) {
						return Object.getOwnPropertyDescriptor(A, M).enumerable
					})), L.forEach(function(M) {
						u(_, M, A[M])
					})
				}
				return _
			}

			function u(_, T, A) {
				return T = i(T), T in _ ? Object.defineProperty(_, T, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[T] = A, _
			}

			function i(_) {
				var T = f(_, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function f(_, T) {
				if (typeof _ != "object" || _ === null) return _;
				var A = _[Symbol.toPrimitive];
				if (A !== void 0) {
					var L = A.call(_, T || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(_)
			}
			const c = (0, e.C)("user").get`/user`,
				l = (0, e.C)("user").patch`/user`,
				m = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				o = (0, e.C)("user").post`/user/two_factor_authentication`,
				s = (0, e.C)("user").put`/user/two_factor_authentication`,
				E = (0, e.C)("user").delete`/user/two_factor_authentication`,
				d = (0, e.C)("user").put`/user/email`;

			function p(..._) {
				return d(..._)
			}
			const h = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				O = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(_ => a({}, _, {
					body: a({}, _.body, {
						result: {}
					})
				}))),
				v = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				g = (0, e.C)("userDetails").get`/user/details`,
				b = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AuthzContext.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				we: function() {
					return h
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = t.n(i),
				c = t("../react/utils/url.ts"),
				l = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts");

			function m(v) {
				for (var g = 1; g < arguments.length; g++) {
					var b = arguments[g] != null ? Object(arguments[g]) : {},
						_ = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(b).filter(function(T) {
						return Object.getOwnPropertyDescriptor(b, T).enumerable
					})), _.forEach(function(T) {
						n(v, T, b[T])
					})
				}
				return v
			}

			function n(v, g, b) {
				return g = o(g), g in v ? Object.defineProperty(v, g, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[g] = b, v
			}

			function o(v) {
				var g = s(v, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function s(v, g) {
				if (typeof v != "object" || v === null) return v;
				var b = v[Symbol.toPrimitive];
				if (b !== void 0) {
					var _ = b.call(v, g || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(v)
			}
			const E = u().createContext(void 0),
				d = 60 * 1e3,
				p = new Set(["b7db8a5d0e51afce2d33ea16d8219fc6", "3576b716b54efb9e7851fe9e7a22e440", "ca11caa2415c966f6fb75f025ed1f354", "56517c9d595ec8e23d789fd2c6d18990", "340188bc4fd1e745704cedf68408ff05", "3f96cb3e7cb3fa852b055b63baf69624"]);

			function h({
				children: v,
				userID: g,
				isUserInDSR: b
			}) {
				const [_, T] = (0, a.useState)({
					policies: null,
					isLoading: !0,
					isLoadingSkippedByUserID: !1,
					error: null,
					lastFetchedAt: null
				}), A = (0, a.useCallback)(async (re = !1) => {
					var F;
					const z = !!g,
						D = p.has((F = g) !== null && F !== void 0 ? F : "");
					if (!(z && !D && (re || !_.lastFetchedAt || Date.now() - _.lastFetchedAt > d))) {
						T(B => m({}, B, {
							isLoadingSkippedByUserID: D
						}));
						return
					}
					T(B => m({}, B, {
						isLoading: !0
					}));
					try {
						var I, P;
						const B = await fetch("/api/v4/user/iam/policies");
						if (!B.ok) throw new Error(`Failed to fetch authz policies: ${B.status}`);
						const X = (I = await B.json()) === null || I === void 0 || (P = I.result) === null || P === void 0 ? void 0 : P.policies;
						if (!X || !(0, e.isArray)(X) || X.length === 0) throw new Error(`Unexpected authz policies API response shape: ${JSON.stringify(X)}`);
						T({
							policies: X,
							isLoading: !1,
							isLoadingSkippedByUserID: !1,
							error: null,
							lastFetchedAt: Date.now()
						})
					} catch (B) {
						const X = B instanceof Error ? B.message : JSON.stringify(B);
						T(ee => m({}, ee, {
							isLoading: !1,
							error: X
						}))
					}
				}, [g, _.lastFetchedAt]);
				(0, a.useEffect)(() => {
					A()
				}, [A]);
				const L = (0, i.useHistory)(),
					M = (0, c.uW)(L.location.pathname),
					[x, w] = (0, a.useState)({
						orgScopes: null,
						isLoading: !1,
						error: null
					}),
					S = (0, a.useCallback)(async () => {
						if (!!g && !!M) {
							w(D => m({}, D, {
								isLoading: !0
							}));
							try {
								var z;
								const D = await fetch(`/api/v4/accounts/${M}/organizations`);
								if (!D.ok) throw new Error(`Failed to fetch account parent Orgs: ${D.status}`);
								const U = (z = await D.json()) === null || z === void 0 ? void 0 : z.result;
								if (U === void 0 || !(0, e.isArray)(U)) throw new Error(`Unexpected parent Orgs API response shape: ${JSON.stringify(U)}`);
								const I = U.map(B => {
										var X;
										return {
											tag: B.id,
											parentTag: (X = B.parent) === null || X === void 0 ? void 0 : X.id
										}
									}),
									P = [];
								I.forEach(B => {
									B.parentTag || P.push(`com.cloudflare.api.tenant.${B.tag}`), P.push(`com.cloudflare.api.tenant.unit.${B.tag}`)
								}), w({
									orgScopes: P,
									isLoading: !1,
									error: null
								})
							} catch (D) {
								const U = D instanceof Error ? D.message : JSON.stringify(D);
								w(I => m({}, I, {
									isLoading: !1,
									error: U
								}))
							}
						}
					}, [g, M]);
				(0, a.useEffect)(() => {
					S()
				}, [S]);
				const [j, W, G] = (0, l.k)(M), q = {
					isUserInDSR: b,
					contextAccountTag: M,
					contextAccountOrgsState: x,
					allPermissionGroupsState: {
						permissionGroups: j,
						isLoading: W,
						error: G
					},
					policiesState: _,
					refreshPolicies: () => A(!0)
				};
				return u().createElement(E.Provider, {
					value: q
				}, v)
			}
			const O = () => {
				const v = useContext(E);
				if (!v) throw new Error("useRefreshPolicies must be used within a PoliciesProvider");
				return v.refreshPolicies
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
					return m
				},
				ZZ: function() {
					return f
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
					return i
				}
			});
			const e = "com.cloudflare.api.account",
				r = "com.cloudflare.api.account.",
				a = "com.cloudflare.edge.",
				u = "com.cloudflare.api.account.zone.",
				i = ["com.cloudflare.api.app.manage"];
			let f = function(s) {
				return s.read = "read", s.list = "list", s.create = "create", s.update = "update", s.delete = "delete", s.sign = "sign", s.refresh = "refresh", s
			}({});
			const c = (s, E) => `${r}${s?s+".":""}${E}`,
				l = (s, E) => `${u}${s?s+".":""}${E}`,
				m = (s, E) => `${a}${s}.${E}`,
				n = (s = "") => `${r}${s}`,
				o = (s = "") => `${u}${s}`
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
					return u
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
				u = ({
					legacyPermission: l,
					canAccess: m,
					children: n,
					render: o
				}) => {
					const s = !!(0, r.P)();
					let E;
					typeof m == "boolean" && m !== void 0 && s ? E = {
						read: m,
						list: m,
						create: m,
						update: m,
						delete: m,
						sign: m
					} : E = (0, e.Z)(l);
					const d = o || n;
					return d ? d(E) : null
				},
				i = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				f = t("../react/common/components/AccessCheck/useIsAuthorized.ts"),
				c = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(K, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/pages/zone-versioning/selectors.ts");

			function f(c) {
				const {
					read: l,
					edit: m
				} = (0, a.p4)(u.Yj)(c);
				let n = m;
				if (c != "zone_versioning") {
					const s = (0, a.p4)(i.G);
					(s == null ? void 0 : s.isLocked) && (n = !1)
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
			y.Z = f
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				WL: function() {
					return E
				},
				hT: function() {
					return h
				},
				kd: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				r = t("../../../../node_modules/lodash-es/isString.js"),
				a = t("../react/pages/home/members/utils.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts"),
				i = t("../react/pages/zone-versioning/selectors.ts"),
				f = t("../react/common/selectors/accountSelectors.ts");
			const c = {
					allow: "allow",
					deny: "deny"
				},
				l = 0,
				m = 1,
				n = 2,
				o = 3;

			function s(L, M, x, w) {
				let S = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					j;
				for (j in S) S[j] = E(L, `${M}.${j}`, x, w);
				return S
			}

			function E(L, M, x, w) {
				var S;
				if (d(M) && !p(M)) {
					const q = (0, i.G)(L);
					if (q == null ? void 0 : q.isLocked) return !1
				}
				const j = (S = (0, f.D0)(L)) === null || S === void 0 ? void 0 : S.id,
					W = j ? [`com.cloudflare.api.account.${j}`] : void 0,
					G = (0, a.vq)(j);
				return !!O(L, G, M, x, w || W)
			}

			function d(L) {
				return ![u.ZZ.read, u.ZZ.list].some(M => L.endsWith(M))
			}

			function p(L) {
				return L.includes("zone.versioning")
			}

			function h(L) {
				const M = (0, f.Ko)(L);
				let x = !1;
				return M == null || M.forEach(w => {
					w.access === c.allow && w.permission_groups.forEach(S => {
						var j;
						(S == null || (j = S.meta) === null || j === void 0 ? void 0 : j.scopes) === u.u1 && (x = !0)
					})
				}), x
			}

			function O(L, M, x, w, S) {
				const j = (0, f.Ko)(L),
					W = {};
				j == null || j.forEach(re => {
					var F;
					const z = re.access;
					let D = l;
					if (x && re.permission_groups.forEach(U => {
							var I, P;
							M == null || (I = M.find(B => B.id === U.id)) === null || I === void 0 || (P = I.permissions) === null || P === void 0 || P.forEach(B => {
								D = Math.max(D, g(B, x))
							})
						}), D !== l && !!w) {
						let U = l;
						re.resource_groups.forEach(I => {
							U = Math.max(U, _(I.scope, w, S))
						}), D = U === l ? U : D + U
					}(W == null || (F = W[z]) === null || F === void 0 ? void 0 : F[D]) || (0, e.Z)(W, [z, D], []), W[z][D].push(re)
				});
				const G = W[c.allow] && Object.keys(W[c.allow]).map(re => parseInt(re)),
					ne = W[c.deny] && Object.keys(W[c.deny]).map(re => parseInt(re)),
					q = Math.max.apply(Math, G);
				return q === l || Math.max.apply(Math, ne) >= q ? null : W[c.allow][q]
			}

			function v(L, M, x, w, S) {
				const j = {};
				L == null || L.forEach(q => {
					var re;
					const F = q.access;
					let z = l;
					if (x && q.roles.forEach(D => {
							var U, I;
							M == null || (U = M.find(P => P.id === D.id)) === null || U === void 0 || (I = U.permissions) === null || I === void 0 || I.forEach(P => {
								z = Math.max(z, g(P, x))
							})
						}), z !== l && !!w) {
						let D = l;
						q.scopes.forEach(U => {
							D = Math.max(D, _(U, w, S))
						}), z = D === l ? D : z + D
					}(j == null || (re = j[F]) === null || re === void 0 ? void 0 : re[z]) || set(j, [F, z], []), j[F][z].push(q)
				});
				const W = j[c.allow] && Object.keys(j[c.allow]).map(q => parseInt(q)),
					G = j[c.deny] && Object.keys(j[c.deny]).map(q => parseInt(q)),
					ne = Math.max.apply(Math, W);
				return ne === l || Math.max.apply(Math, G) >= ne ? null : j[c.allow][ne]
			}

			function g(L, M) {
				if (L.key === M || b(L.key, M)) return o;
				for (const x of (L == null ? void 0 : L.implies) || []) {
					let w = g(x, M);
					if (w > l) return w
				}
				return l
			}

			function b(L, M) {
				const x = M == null ? void 0 : M.lastIndexOf(".");
				return x === -1 ? !1 : (M == null ? void 0 : M.substring(0, x)) + ".*" === L
			}

			function _(L, M, x) {
				var w;
				let S = l;
				if (L == null || (w = L.objects) === null || w === void 0 || w.forEach(j => {
						S = Math.max(S, A(j, M))
					}), S === l) return S;
				if (L.key !== "*") switch (!0) {
					case T(L.key, x) > l:
					case (!(x == null ? void 0 : x.length) && S === o):
						break;
					case (S === m && T(L.key, [M]) > l):
						S = T(L.key, [M]);
						break;
					default:
						return l
				}
				for (const j of L.subset_of || [])
					if (T(j.key, x) === l) return l;
				return S
			}

			function T(L, M = []) {
				for (const x of M || []) {
					if (L === x) return o;
					if (b(L, x)) return n
				}
				return l
			}

			function A(L, M) {
				const x = (0, r.Z)(L) ? L : L.key;
				return x === M ? o : x === "*" || L === "*" ? m : b(x, M) ? n : l
			}
		},
		"../react/common/components/AccessCheck/useAccountPermissionGroups.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				k: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/pages/home/members/utils.ts"),
				u = t("../../../../node_modules/lodash/lodash.js"),
				i = t.n(u),
				f = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t.n(f),
				l = t("../react/utils/url.ts");

			function m(d) {
				for (var p = 1; p < arguments.length; p++) {
					var h = arguments[p] != null ? Object(arguments[p]) : {},
						O = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(h).filter(function(v) {
						return Object.getOwnPropertyDescriptor(h, v).enumerable
					})), O.forEach(function(v) {
						n(d, v, h[v])
					})
				}
				return d
			}

			function n(d, p, h) {
				return p = o(p), p in d ? Object.defineProperty(d, p, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = h, d
			}

			function o(d) {
				var p = s(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function s(d, p) {
				if (typeof d != "object" || d === null) return d;
				var h = d[Symbol.toPrimitive];
				if (h !== void 0) {
					var O = h.call(d, p || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}

			function E(d) {
				const [p, h] = (0, e.useState)({
					permissionGroups: null,
					isLoading: !1,
					error: null
				}), O = (0, f.useHistory)(), v = (0, l.uW)(O.location.pathname);
				d || (d = v);
				const g = (0, e.useCallback)(async () => {
					if (!d) return;
					const b = (0, a.Hf)(d);
					if (b.length > 0) {
						h({
							permissionGroups: b,
							isLoading: !1,
							error: null
						});
						return
					}
					h({
						permissionGroups: null,
						isLoading: !0,
						error: null
					});
					try {
						const _ = await fetch(`/api/v4/accounts/${d}/iam/permission_groups?depth=2&permissions=true`);
						if (!_.ok) throw new Error(`Failed to fetch permission groups: ${_.status}`);
						const T = await _.json(),
							A = T == null ? void 0 : T.result;
						if (A === void 0 || !(0, u.isArray)(A)) throw new Error(`Unexpected permission groups API response shape: ${JSON.stringify(A)}`);
						(0, a.LX)(d, A), (0, a.rC)(d, A), h({
							permissionGroups: A,
							isLoading: !1,
							error: null
						})
					} catch (_) {
						const T = _ instanceof Error ? _.message : JSON.stringify(_);
						h(A => m({}, A, {
							isLoading: !1,
							error: T
						}))
					}
				}, [d]);
				return (0, e.useEffect)(() => {
					g()
				}, [g]), [p.permissionGroups, p.isLoading, p.error]
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(K, y, t) {
			"use strict";
			t.d(y, {
				a: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e),
				a = t("../react/common/selectors/accountSelectors.ts");
			const u = f => {
					if (typeof f != "string") throw new Error("invalid Param Type provided");
					const c = f.slice(1).split(":");
					if (c.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: c[0],
						value: c[1]
					}
				},
				i = (f, c) => {
					const {
						resourceId: l,
						accountId: m,
						legacyPermission: n
					} = c;
					let {
						read: o,
						edit: s
					} = c;
					const E = {};
					n && (s = `#${n}:edit`, o = `#${n}:read`);
					const d = l || m;
					if (o) {
						const p = Array.isArray(o) ? o : [o];
						E.isReadable = p.some(h => {
							const O = u(h);
							return (0, a.DT)(f, d, v => !!(v[O.key] && v[O.key][O.value]))
						})
					}
					if (s) {
						const p = Array.isArray(s) ? s : [s];
						E.isEditable = p.some(h => {
							const O = u(h);
							return (0, a.DT)(f, d, v => !!(v[O.key] && v[O.key][O.value]))
						})
					}
					return E
				};
			y.Z = (0, e.connect)(i)
		},
		"../react/common/components/AccessControl/index.js": function(K, y, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				r = t.n(e),
				a = t("../react/app/HoCs/withEntities.tsx"),
				u = t("../react/common/components/AccessControl/SAAConnect.js");

			function i(o) {
				for (var s = 1; s < arguments.length; s++) {
					var E = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(E).filter(function(p) {
						return Object.getOwnPropertyDescriptor(E, p).enumerable
					})), d.forEach(function(p) {
						f(o, p, E[p])
					})
				}
				return o
			}

			function f(o, s, E) {
				return s = c(s), s in o ? Object.defineProperty(o, s, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = E, o
			}

			function c(o) {
				var s = l(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function l(o, s) {
				if (typeof o != "object" || o === null) return o;
				var E = o[Symbol.toPrimitive];
				if (E !== void 0) {
					var d = E.call(o, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}

			function m(o) {
				const E = ["isReadable", "isEditable"].reduce((d, p) => o.hasOwnProperty(p) ? i({}, d, {
					[p]: o[p]
				}) : d, {});
				return o.children(E)
			}
			m.propTypes = {
				resourceType: r().string,
				resourceId: r().string,
				read: r().oneOfType([r().string, r().array]),
				edit: r().oneOfType([r().string, r().array]),
				accountId: r().string,
				isReadable: r().bool,
				isEditable: r().bool,
				children: r().func
			};
			const n = (0, a.Z)((0, u.Z)(m));
			n.displayName = "AccessControl", y.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				PP: function() {
					return s
				},
				RJ: function() {
					return l
				},
				tz: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				i = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				f = t("../react/common/utils/oidc.ts");
			const c = () => m.test(window.location.pathname) || a.E.has(u.Qq),
				l = () => a.E.get(u.Qq),
				m = /^\/login\/apple(\/)?/,
				o = [m, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				s = () => {
					let d = !1;
					o.forEach(h => {
						if (h.test(window.location.pathname)) {
							d = !0;
							return
						}
					});
					const p = c() && d;
					return p && (0, i.C8)(i.LF.OFF), p
				},
				E = d => {
					d && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					}), window.location.href = (0, f.e)(f.c.Apple, d)
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				oG: function() {
					return d
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
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				i = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				f = t.n(i),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = t("../react/common/components/Dropdown/index.tsx"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(p) {
					for (var h = 1; h < arguments.length; h++) {
						var O = arguments[h];
						for (var v in O) Object.prototype.hasOwnProperty.call(O, v) && (p[v] = O[v])
					}
					return p
				}, n.apply(this, arguments)
			}

			function o(p, h) {
				if (p == null) return {};
				var O = s(p, h),
					v, g;
				if (Object.getOwnPropertySymbols) {
					var b = Object.getOwnPropertySymbols(p);
					for (g = 0; g < b.length; g++) v = b[g], !(h.indexOf(v) >= 0) && (!Object.prototype.propertyIsEnumerable.call(p, v) || (O[v] = p[v]))
				}
				return O
			}

			function s(p, h) {
				if (p == null) return {};
				var O = {},
					v = Object.keys(p),
					g, b;
				for (b = 0; b < v.length; b++) g = v[b], !(h.indexOf(g) >= 0) && (O[g] = p[g]);
				return O
			}
			const E = (0, c.createStyledComponent)(({
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
					color: (0, m.Yc)() ? p.colors.text : void 0
				},
				"& button:hover": {
					color: (0, m.Yc)() ? p.colors.text : void 0
				}
			}));

			function d(p) {
				let {
					menu: h,
					containerProps: O,
					disabled: v,
					disabledDropdown: g = v
				} = p, b = o(p, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: _
				} = (0, i.useI18n)();
				return r().createElement(E, n({}, O, {
					role: "group"
				}), r().createElement(a.zx, n({}, b, {
					disabled: v
				})), r().createElement(l.Lt, {
					trigger: r().createElement(a.zx, {
						type: b.type,
						"aria-haspopup": "menu",
						disabled: g
					}, r().createElement(u.J, {
						type: "caret-down",
						label: _("common.more"),
						size: 12
					})),
					menu: h
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
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = t("../react/common/hooks/useIntersectionObserver.ts");

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(l) {
					for (var m = 1; m < arguments.length; m++) {
						var n = arguments[m];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (l[o] = n[o])
					}
					return l
				}, f.apply(this, arguments)
			}

			function c(l) {
				const m = (0, e.useRef)(null),
					[n, o] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const E = m.current;
					if (E) {
						const {
							bottom: d
						} = E.getBoundingClientRect();
						d > window.innerHeight && o(!0)
					}
				}, []);
				const s = (0, i.S)(E => {
					for (const d of E) d.intersectionRatio < 1 && o(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const E = m.current;
					if (E && s) return s.observe(E), () => {
						s.unobserve(E)
					}
				}, [s]), r().createElement(a.ZC, f({
					role: "menu",
					innerRef: m,
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
		"../react/common/components/Dropdown/MenuItem.tsx": function(K, y, t) {
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
				i = t.n(u);

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(O) {
					for (var v = 1; v < arguments.length; v++) {
						var g = arguments[v];
						for (var b in g) Object.prototype.hasOwnProperty.call(g, b) && (O[b] = g[b])
					}
					return O
				}, f.apply(this, arguments)
			}

			function c(O, v) {
				if (O == null) return {};
				var g = l(O, v),
					b, _;
				if (Object.getOwnPropertySymbols) {
					var T = Object.getOwnPropertySymbols(O);
					for (_ = 0; _ < T.length; _++) b = T[_], !(v.indexOf(b) >= 0) && (!Object.prototype.propertyIsEnumerable.call(O, b) || (g[b] = O[b]))
				}
				return g
			}

			function l(O, v) {
				if (O == null) return {};
				var g = {},
					b = Object.keys(O),
					_, T;
				for (T = 0; T < b.length; T++) _ = b[T], !(v.indexOf(_) >= 0) && (g[_] = O[_]);
				return g
			}

			function m(O) {
				for (var v = 1; v < arguments.length; v++) {
					var g = arguments[v] != null ? Object(arguments[v]) : {},
						b = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(g).filter(function(_) {
						return Object.getOwnPropertyDescriptor(g, _).enumerable
					})), b.forEach(function(_) {
						n(O, _, g[_])
					})
				}
				return O
			}

			function n(O, v, g) {
				return v = o(v), v in O ? Object.defineProperty(O, v, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[v] = g, O
			}

			function o(O) {
				var v = s(O, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function s(O, v) {
				if (typeof O != "object" || O === null) return O;
				var g = O[Symbol.toPrimitive];
				if (g !== void 0) {
					var b = g.call(O, v || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(O)
			}
			const E = ({
					theme: O
				}) => {
					const v = {
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
						'&:hover:not(:disabled):not([aria-disabled="true"])': v,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': m({}, v, {
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
				d = (0, a.createComponent)(E, "a"),
				p = (0, a.createComponent)(E, "button");

			function h(O) {
				let {
					disabled: v = !1
				} = O, g = c(O, ["disabled"]);
				const b = (0, u.useHistory)(),
					_ = {
						role: "menuitem"
					};
				if ("href" in g && typeof g.href == "string") return r().createElement(d, f({
					"aria-disabled": v
				}, _, g, {
					href: v ? void 0 : g.href,
					onClick: A => {
						var L;
						if (v) return A.stopPropagation();
						A.preventDefault(), (L = g.onClick) === null || L === void 0 || L.call(g, A), b.push(g.href)
					}
				}));
				var T;
				return r().createElement(p, f({
					type: (T = g.type) !== null && T !== void 0 ? T : "button"
				}, _, g, {
					disabled: v
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(K, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/prop-types/index.js"),
				u = t.n(a),
				i = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const f = ({
				children: c
			}) => r().createElement(i.xu, {
				height: 411
			}, c);
			f.propTypes = {
				children: u().node
			}, y.Z = f
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
			const u = p => p.application.modals;
			var i = t("../react/common/actions/modalActions.ts"),
				f = t("../../../../node_modules/swr/core/dist/index.mjs"),
				c = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function l() {
				return l = Object.assign ? Object.assign.bind() : function(p) {
					for (var h = 1; h < arguments.length; h++) {
						var O = arguments[h];
						for (var v in O) Object.prototype.hasOwnProperty.call(O, v) && (p[v] = O[v])
					}
					return p
				}, l.apply(this, arguments)
			}
			const m = r().createContext(null);
			class n extends r().Component {
				render() {
					const {
						modals: h,
						closeModal: O
					} = this.props;
					return r().createElement(r().Fragment, null, h.map(({
						ModalComponent: v,
						props: g = {},
						id: b
					}) => {
						const _ = () => {
							typeof g.onClose == "function" && g.onClose(), O(v)
						};
						return r().createElement(m.Provider, {
							key: b,
							value: {
								closeModal: _
							}
						}, r().createElement(f.J$, {
							value: c.ZP
						}, r().createElement(v, l({}, g, {
							isOpen: !0,
							closeModal: _
						}))))
					}))
				}
			}

			function o() {
				const p = r().useContext(m);
				if (!p) throw new Error("useModalContext must be used within a ModalContext");
				return p
			}

			function s() {
				const p = (0, a.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...h) {
						return p(i.openModal(...h))
					}, [p]),
					closeModal: (0, e.useCallback)(function(...h) {
						return p(i.closeModal(...h))
					}, [p])
				}
			}
			var d = (0, a.connect)(p => ({
				modals: u(p)
			}), i)(n)
		},
		"../react/common/components/Page.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function u(i) {
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
					return l
				},
				JR: function() {
					return m
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return f
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
					return u
				},
				zl: function() {
					return c
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				r = "time-window",
				a = "date-from",
				u = "date-to",
				i = "from",
				f = "to",
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
			let m = function(o) {
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
					return m
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

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						E = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), E.forEach(function(d) {
						u(n, d, s[d])
					})
				}
				return n
			}

			function u(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = f(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var E = s.call(n, o || "default");
					if (typeof E != "object") return E;
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
					r().sendEvent(n, a({}, o || {}))
				},
				m = () => {
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
					return u
				},
				g$: function() {
					return a
				},
				WX: function() {
					return e
				},
				E0: function() {
					return m
				},
				Hw: function() {
					return f
				},
				Ed: function() {
					return i
				},
				bi: function() {
					return r
				},
				Gs: function() {
					return E
				},
				hQ: function() {
					return c
				},
				SP: function() {
					return l
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
				i = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				f = {
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
				m = {
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
			const E = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
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
				u = {
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
					return E
				},
				Dy: function() {
					return d
				},
				E_: function() {
					return f
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
					return m
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
					return h
				},
				sJ: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const u = "healthy",
				i = "degraded",
				f = "critical",
				c = "unknown",
				l = "not-monitored",
				m = r().from({
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
					f: m.FREE,
					p: m.PRO,
					b: m.BIZ
				},
				s = "marketing-pt",
				E = () => {
					const v = a.Z.get(s);
					if (!!v) return o[v]
				},
				d = ["gov"],
				p = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				h = "banner-notification-interactions",
				O = null
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
					return u
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
				a = (i, f, c = !1) => {
					var l;
					return `${f} ${(l=r[i])!==null&&l!==void 0?l:i} ${c?"ruleset":"rule"}${f===e.GET?"s":""}`
				},
				u = () => {
					var i;
					return (i = Object.keys(r).reduce((f, c) => {
						const l = Object.values(e).reduce((m, n) => (m.push(a(c, n)), m.push(a(c, n, !0)), m), []);
						return f.concat(l)
					}, [])) === null || i === void 0 ? void 0 : i.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				C: function() {
					return f
				},
				F: function() {
					return i
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(a);

			function i() {
				var c;
				const {
					accountId: l
				} = (0, a.useParams)(), m = (0, e.p4)(r.D0);
				if (l === void 0 && !m) throw new Error("Account ID not found in URL params");
				return (c = l) !== null && c !== void 0 ? c : m == null ? void 0 : m.id
			}

			function f() {
				const c = i();
				return (0, e.p4)(l => (0, r.Py)(l, c))
			}
		},
		"../react/common/hooks/useActiveState.ts": function(K, y, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				r = t("webpack/sharing/consume/default/react-redux/react-redux"),
				a = t.n(r),
				u = t("../react/common/selectors/commonSelectors.ts");
			const i = f => {
				const c = (0, r.useDispatch)();
				return [(0, r.useSelector)((0, u.cZ)(f)), n => {
					c((0, e.I)(f, n))
				}]
			};
			y.Z = i
		},
		"../react/common/hooks/useCachedState.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				j: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function u(i, {
				key: f,
				cache: c = a.E,
				ttl: l
			} = {}) {
				var m;
				const n = f !== void 0 && c.get(f),
					[o, s] = (0, e.useState)((m = n) !== null && m !== void 0 ? m : i);
				return [o, d => {
					s(p => (d instanceof Function && (d = d(p)), f !== void 0 && c.set(f, d, l), d))
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

			function a(u, {
				root: i,
				rootMargin: f,
				threshold: c
			} = {}) {
				const l = (0, e.useRef)(null);

				function m() {
					return l.current === null && (l.current = new IntersectionObserver(u, {
						root: i,
						rootMargin: f,
						threshold: c
					})), l.current
				}
				return (0, e.useEffect)(() => (l.current = new IntersectionObserver(u, {
					root: i,
					rootMargin: f,
					threshold: c
				}), () => {
					var n;
					(n = l.current) === null || n === void 0 || n.disconnect()
				}), [u, i, f, c]), m()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(K, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function a(u) {
				const i = (0, e.useRef)(u);
				return (0, e.useEffect)(() => {
					i.current = u
				}, [u]), i.current
			}
			y.Z = a
		},
		"../react/common/hooks/useScope.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				Lm: function() {
					return m
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
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				i = t.n(u),
				f = t("../react/common/hooks/useAccountId.ts");
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
				m = () => {
					const n = (0, r.p4)(a.Cu),
						o = (0, f.F)(),
						s = l();
					return {
						scope: s ? c.ZONE : c.ACCOUNT,
						scopeId: s ? n : o,
						isZoneScope: s
					}
				}
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(K, y, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(u) {
				return (0, e.p4)(i => (0, r.rV)(i, u))
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
					return u
				},
				oV: function() {
					return f
				}
			});

			function e(c, l, m) {
				return l = r(l), l in c ? Object.defineProperty(c, l, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[l] = m, c
			}

			function r(c) {
				var l = a(c, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function a(c, l) {
				if (typeof c != "object" || c === null) return c;
				var m = c[Symbol.toPrimitive];
				if (m !== void 0) {
					var n = m.call(c, l || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(c)
			}
			class u extends Error {
				constructor(l, m) {
					super(m);
					e(this, "eventName", void 0), this.eventName = l, this.name = "SparrowValidationError"
				}
			}
			class i extends u {
				constructor(l) {
					super(l, `Event not allowed: "${l}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class f extends u {
				constructor(l, m) {
					super(l, `Found invalid properties on event: "${l}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = m
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Au: function() {
					return rt
				},
				B: function() {
					return je
				},
				B3: function() {
					return Fe
				},
				BG: function() {
					return L
				},
				Bp: function() {
					return st
				},
				CV: function() {
					return mt
				},
				D0: function() {
					return b
				},
				DT: function() {
					return R
				},
				EL: function() {
					return B
				},
				EU: function() {
					return k
				},
				GE: function() {
					return Et
				},
				Ko: function() {
					return ce
				},
				Kx: function() {
					return w
				},
				Le: function() {
					return S
				},
				O4: function() {
					return Ke
				},
				Ou: function() {
					return D
				},
				Py: function() {
					return Se
				},
				QI: function() {
					return it
				},
				Qf: function() {
					return T
				},
				RO: function() {
					return Le
				},
				T3: function() {
					return dt
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
					return pt
				},
				Xu: function() {
					return re
				},
				Yi: function() {
					return at
				},
				Yj: function() {
					return ee
				},
				Zu: function() {
					return X
				},
				bC: function() {
					return Z
				},
				f8: function() {
					return G
				},
				hI: function() {
					return ct
				},
				hN: function() {
					return x
				},
				hX: function() {
					return Me
				},
				iq: function() {
					return Je
				},
				nE: function() {
					return M
				},
				oD: function() {
					return I
				},
				oI: function() {
					return W
				},
				oJ: function() {
					return Ae
				},
				tM: function() {
					return U
				},
				uF: function() {
					return F
				},
				ut: function() {
					return We
				},
				vU: function() {
					return yt
				},
				wQ: function() {
					return de
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/lodash/get.js"),
				a = t.n(r),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				i = t.n(u),
				f = t("../../../../node_modules/reselect/lib/index.js"),
				c = t("../../../../node_modules/moment/moment.js"),
				l = t.n(c),
				m = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				o = t("../react/common/selectors/userSelectors.ts"),
				s = t("../react/common/selectors/entitlementsSelectors.ts"),
				E = t("../react/app/components/DeepLink/selectors.ts"),
				d = t("../react/common/constants/roles.ts"),
				p = t("../react/common/utils/hasRole.ts");

			function h(Y) {
				for (var le = 1; le < arguments.length; le++) {
					var ye = arguments[le] != null ? Object(arguments[le]) : {},
						we = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && we.push.apply(we, Object.getOwnPropertySymbols(ye).filter(function(Re) {
						return Object.getOwnPropertyDescriptor(ye, Re).enumerable
					})), we.forEach(function(Re) {
						O(Y, Re, ye[Re])
					})
				}
				return Y
			}

			function O(Y, le, ye) {
				return le = v(le), le in Y ? Object.defineProperty(Y, le, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[le] = ye, Y
			}

			function v(Y) {
				var le = g(Y, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function g(Y, le) {
				if (typeof Y != "object" || Y === null) return Y;
				var ye = Y[Symbol.toPrimitive];
				if (ye !== void 0) {
					var we = ye.call(Y, le || "default");
					if (typeof we != "object") return we;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(Y)
			}
			const b = Y => {
					const le = F(Y);
					return le == null ? void 0 : le.account
				},
				_ = Y => {
					const le = (0, o.PR)(Y);
					if (le) {
						const ye = le.id;
						return Y.accountAccess[ye] || {}
					}
					return {}
				},
				T = Y => Y.accountsDetailed,
				A = (0, n.P1)("accountsDetailed", T),
				L = Y => Y.memberships,
				M = (0, f.P1)((0, n.P1)("memberships", L), E.U, (Y, le) => !!le && !!Y ? Y.filter(ye => le.includes(ye.id)) : Y),
				x = Y => Y.accountFlags && Y.accountFlags.data,
				w = Y => Y.accountFlags,
				S = (Y, le, ye) => {
					const we = x(Y);
					return !we || !we[le] ? null : we[le][ye]
				},
				j = Y => Y.accountFlags.isRequesting,
				W = (Y, ...le) => a()(Y, ["accountFlagsChanges", "data", ...le]),
				G = Y => Y.accountFlagsChanges.isRequesting,
				ne = (0, f.P1)(x, w, (Y, le) => ({
					data: Y,
					meta: le
				})),
				q = (Y, le, ye) => !!(isEnterpriseSSEnabledSelector(Y) && S(Y, le, ye)),
				re = Y => Y.membership,
				F = (0, n.P1)("membership", re),
				z = (0, f.P1)(F, re, (Y, le) => ({
					data: Y,
					meta: le
				})),
				D = Y => {
					const {
						roles: le = []
					} = F(Y) || {};
					return Boolean(le.find(ye => ye === "Super Administrator - All Privileges" || ye === "Billing"))
				},
				U = Y => {
					const le = [d.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, p.n)(Y, le)
				},
				I = Y => {
					const le = _(Y),
						ye = Ge.getMemberships(Y) ? i().asMutable(Ge.getMemberships(Y)) : [];
					if (!!ye) return i().from(ye.map(we => h({}, we, {
						lastSeen: le[we.account.id] ? le[we.account.id].lastSeen : null
					})).sort((we, Re) => we.lastSeen && Re.lastSeen ? Re.lastSeen - we.lastSeen : 0))
				},
				P = Y => Y.filteredMemberships,
				B = (0, n.P1)("filteredMemberships", P),
				X = (0, f.P1)(F, Y => Y == null ? void 0 : Y.permissions),
				ee = (0, f.P1)(X, Y => (0, e.Z)(le => {
					var ye;
					return (ye = Y == null ? void 0 : Y[le]) !== null && ye !== void 0 ? ye : {
						read: !1,
						edit: !1
					}
				})),
				ce = (0, f.P1)(F, Y => Y == null ? void 0 : Y.policies),
				R = (Y, le, ye) => {
					let we = Ge.getMembership(Y);
					if (!we) {
						const Re = Ge.getMemberships(Y);
						if (!Re || !le) return !1;
						we = Re.find(Ye => Ye.account.id === le)
					}
					if (!we || !ye) return !1;
					try {
						return ye(we.permissions)
					} catch {
						return !1
					}
				},
				V = Y => {
					var le, ye;
					return (le = (ye = b(Y)) === null || ye === void 0 ? void 0 : ye.meta.has_pro_zones) !== null && le !== void 0 ? le : !1
				},
				k = Y => {
					var le, ye;
					return (le = (ye = b(Y)) === null || ye === void 0 ? void 0 : ye.meta.has_business_zones) !== null && le !== void 0 ? le : !1
				},
				Z = Y => k(Y) || V(Y),
				ie = (Y, le) => {
					const ye = pe(Y, le);
					return !!ye && !!ye.enabled
				},
				pe = (Y, le) => {
					const ye = Ge.getMembership(Y),
						we = ye && ye.account;
					return we && we.legacy_flags && we.legacy_flags[le]
				},
				de = Y => ie(Y, "custom_pages"),
				ve = Y => !!Y && Y["webhooks.webhooks.enabled"],
				oe = Y => S(Y, "bots", "enabled"),
				Ie = Y => S(Y, "billing", "annual_subscriptions_enable"),
				Le = Y => Y ? Boolean(S(Y, "ConstellationAI", "v2_ui")) : !1,
				Me = Y => Y ? Boolean(S(Y, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				je = Y => Y ? Boolean(S(Y, "AIgateway", "enabled")) : !1,
				xe = Y => pe(Y, "enterprise_zone_quota"),
				Ve = Y => {
					const le = xe(Y);
					return !le || !le.available ? -1 : le.available
				},
				Je = Y => Y.accountMembers,
				Fe = (0, n.P1)("accountMembers", Je),
				Ke = Y => Y.accountMember && Y.accountMember.isRequesting,
				H = Y => Y.accountRoles,
				he = (0, n.P1)("accountRoles", H),
				Se = (Y, le) => {
					const ye = Ge.getMemberships(Y),
						we = ye && ye.find(tt => tt.account.id === le);
					if (we) return we.account.name.replace(" Account", " account");
					const Re = Ge.getMembership(Y),
						Ye = Re && Re.account;
					return Ye && Ye.id === le ? Ye.name : null
				},
				We = (Y, le) => {
					const ye = Ge.getMemberships(Y),
						we = ye && ye.find(tt => tt.account.id === le);
					if (we) return we.account.settings.access_approval_expiry;
					const Re = Ge.getMembership(Y),
						Ye = Re && Re.account;
					return Ye && Ye.id === le ? Ye.settings.access_approval_expiry : null
				},
				pt = (Y, le) => {
					const ye = We(Y, le);
					return ye ? l().utc(ye).isAfter() : !1
				},
				dt = (Y, le, ye) => {
					const we = We(Y, le);
					let Re = we ? l().utc(we) : null;
					return !Re || !Re.isAfter() ? "" : Re && Re.year() === 3e3 ? ye("account.access_approval.card_expiration_forever") : ye("account.access_approval.card_expiration_text", {
						expiryTimestamp: Re.local().format(m.U.DateTime)
					})
				},
				Ae = Y => Y && Y.member && Y.member.edit,
				rt = (Y, le) => {
					const ye = Ge.getMembership(Y),
						we = ye && ye.account;
					return we ? we.id !== le : !1
				},
				J = Y => Y.dpa,
				ge = (0, n.P1)("dpa", J),
				Te = Y => Y.webhook,
				Pe = Y => Y.webhooks,
				Oe = (0, n.P1)("webhook", Pe),
				Be = Y => Y.accountLegoContract,
				qe = (0, n.P1)("accountLegoContract", Be),
				it = Y => {
					const le = qe(Y);
					return (le == null ? void 0 : le.lego_state) ? le.lego_state : ""
				},
				gt = Y => it(Y) === "signed",
				Et = Y => Be(Y).isRequesting,
				yt = Y => {
					const le = qe(Y);
					return le && le.subscription_type ? le.subscription_type : ""
				},
				Mt = Y => yt(Y) !== "",
				Ge = {
					getMembership: F,
					getMemberships: M,
					getFilteredMemberships: B,
					getAccountMembers: Fe,
					getAccountRoles: he
				},
				st = Y => Y.accountSingle,
				at = (0, n.P1)("accountSingle", st),
				ct = Y => {
					const le = [d.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, d.V.ADMINISTRATOR];
					return (0, p.n)(Y, le)
				},
				mt = Y => (0, p.n)(Y, [d.V.BRAND_PROTECTION]),
				Ne = Y => hasRole(Y, [MEMBERSHIP_ROLES.CLOUDFORCE_ONE_ADMIN, MEMBERSHIP_ROLES.CLOUDFORCE_ONE_READ])
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
					return u
				},
				cZ: function() {
					return e
				}
			});

			function e(i) {
				const f = `__ACTIVE__${i}`;
				return c => {
					const l = c.application;
					return l && l.active[f]
				}
			}

			function r(i) {
				const f = `__TOGGLE__${i}`;
				return c => {
					const l = c.application;
					return l && l.toggles[f]
				}
			}

			function a(i) {
				return i && i.paginationData && i.paginationData.info && i.paginationData.info.total_count ? i.paginationData.info.total_count : 0
			}
			const u = i => i.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$f: function() {
					return p
				},
				AD: function() {
					return f
				},
				BF: function() {
					return d
				},
				Bs: function() {
					return _
				},
				Ci: function() {
					return ee
				},
				DA: function() {
					return Je
				},
				E6: function() {
					return E
				},
				Gy: function() {
					return je
				},
				Hq: function() {
					return Me
				},
				Ms: function() {
					return L
				},
				Mx: function() {
					return ie
				},
				Nb: function() {
					return Le
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
					return g
				},
				Z: function() {
					return V
				},
				a: function() {
					return b
				},
				a5: function() {
					return Z
				},
				c7: function() {
					return de
				},
				du: function() {
					return m
				},
				ec: function() {
					return ne
				},
				f: function() {
					return Ie
				},
				fo: function() {
					return oe
				},
				hL: function() {
					return k
				},
				ji: function() {
					return ce
				},
				jo: function() {
					return M
				},
				l9: function() {
					return Ke
				},
				lI: function() {
					return i
				},
				p1: function() {
					return O
				},
				pK: function() {
					return xe
				},
				pf: function() {
					return o
				},
				qR: function() {
					return v
				},
				rV: function() {
					return l
				},
				u1: function() {
					return n
				},
				w4: function() {
					return s
				},
				yD: function() {
					return R
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/pages/internal-dns/constants.ts");

			function a(H, he) {
				return H && H[he]
			}
			const u = H => !i(H).isRequesting;

			function i(H) {
				return H.entitlements.zone
			}

			function f(H) {
				return i(H).data
			}
			const c = H => {
				var he, Se;
				return ((he = i(H).paginationData) === null || he === void 0 || (Se = he.options) === null || Se === void 0 ? void 0 : Se.editedDate) || {}
			};

			function l(H, he) {
				const Se = f(H);
				return Se ? a(Se, he) : void 0
			}
			const m = (H, he) => l(H, he) === !0;

			function n(H) {
				return H.entitlements.account
			}

			function o(H) {
				return n(H).data
			}
			const s = H => {
				var he, Se;
				return ((he = n(H).paginationData) === null || he === void 0 || (Se = he.options) === null || Se === void 0 ? void 0 : Se.editedDate) || {}
			};

			function E(H) {
				return !n(H).isRequesting
			}

			function d(H, he) {
				const Se = o(H);
				return Se ? a(Se, he) : void 0
			}

			function p(H, he) {
				return d(H, he) === !0
			}

			function h(H, he) {
				return he.every(Se => p(H, Se))
			}

			function O(H) {
				return p(H, "contract.customer_enabled")
			}

			function v(H) {
				return p(H, "contract.self_service_allowed")
			}

			function g(H) {
				return p(H, "billing.partners_managed")
			}
			const b = H => O(H) && v(H),
				_ = H => p(H, "enterprise.ecp_allowed");

			function T(H) {
				return A(H) || p(H, "argo.allow_smart_routing") || p(H, "argo.allow_tiered_caching") || p(H, "rate_limiting.enabled") || p(H, "ctm.enabled") || p(H, "workers.enabled") || p(H, "workers.kv_store.enabled") || p(H, "stream.enabled")
			}
			const A = H => m(H, "argo.allow_smart_routing") || m(H, "argo.allow_tiered_caching"),
				L = H => p(H, "zone.partial_setup_allowed") || m(H, "zone.partial_setup_allowed"),
				M = H => p(H, "argo.allow_smart_routing") || m(H, "argo.allow_smart_routing"),
				x = H => p(H, "argo.allow_tiered_caching") || m(H, "argo.allow_tiered_caching"),
				w = H => M(H) || x(H),
				S = H => p(H, "ctm.enabled"),
				j = H => {
					const he = d(H, "ctm.load_balancers");
					return typeof he == "number" ? he : 0
				},
				W = H => {
					const he = d(H, "ctm.pools");
					return typeof he == "number" ? he : 0
				},
				G = H => {
					const he = d(H, "ctm.origins");
					return typeof he == "number" ? he : 0
				},
				ne = H => p(H, "workers.enabled"),
				q = H => p(H, "stream.enabled"),
				re = H => {
					const he = d(H, "access.users_allowed");
					return typeof he == "number" ? he : 0
				},
				F = H => re(H) > 0,
				z = H => {
					const he = l(H, "dedicated_certificates");
					return typeof he == "number" ? he : 0
				},
				D = H => z(H) > 0,
				U = H => {
					const he = l(H, "rate_limiting.max_rules");
					return typeof he == "number" ? he : 0
				},
				I = H => p(H, "rate_limiting.enabled"),
				P = H => {
					const he = l(H, "page_rules");
					return typeof he == "number" ? he : 0
				},
				B = H => P(H) > 0,
				X = H => {
					const he = d(H, "dns_firewall.max_clusters_allowed");
					return typeof he == "number" ? he : 0
				},
				ee = H => X(H) > 0,
				ce = H => m(H, "zone.advanced_certificate_manager") || p(H, "zone.advanced_certificate_manager"),
				R = H => l(H, "authoritative_dns.proxy_record_allowed") === !1 || d(H, "authoritative_dns.proxy_record_allowed") === !1,
				V = H => p(H, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				k = H => l(H, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				Z = H => {
					const he = l(H, "authoritative_dns.min_record_ttl_allowed");
					return typeof he == "number" && he > 1 ? he : 60
				},
				ie = H => {
					const he = d(H, r.yt);
					return typeof he == "number" ? he : 0
				},
				pe = H => p(H, "foundation_dns.advanced_nameservers_allowed") || m(H, "foundation_dns.advanced_nameservers_allowed"),
				de = H => p(H, "authoritative_dns.account_custom_nameservers_allowed"),
				ve = H => m(H, "authoritative_dns.zone_custom_nameservers_allowed"),
				oe = H => ve(H) || de(H),
				Ie = (H, he) => ((0, e.el)(window.location.pathname) ? l : d)(H, he),
				Le = H => ((0, e.el)(window.location.pathname) ? f : o)(H),
				Me = H => p(H, "authoritative_dns.multi_provider_allowed") || m(H, "authoritative_dns.multi_provider_allowed"),
				je = H => m(H, "authoritative_dns.cname_flattening_allowed"),
				xe = H => p(H, "secondary_dns.secondary_overrides") || m(H, "secondary_dns.secondary_overrides"),
				Ve = H => p(H, "authoritative_dns.custom_soa_allowed") || m(H, "authoritative_dns.custom_soa_allowed"),
				Je = H => p(H, "authoritative_dns.custom_ns_ttl_allowed") || m(H, "authoritative_dns.custom_ns_ttl_allowed"),
				Fe = H => p(H, "secondary.create_zone"),
				Ke = H => pe(H) || de(H) || Me(H) || Fe(H) || xe(H) || Ve(H) || Je(H)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return i
				},
				v: function() {
					return f
				}
			});
			var e = t("../react/utils/i18n.ts"),
				r = t("../../../common/intl/intl-types/src/index.ts"),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/utils/bootstrap.ts");
			const i = c => {
				if ((0, u.gm)()) return a.Z.set(e.ly, e.ZW), e.ZW;
				const l = c.userCommPreferences.data;
				if (l == null ? void 0 : l["language-locale"]) return (0, e.i_)(l["language-locale"]), l["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const m = (0, e.Kd)();
					return f(m) ? m : e.ZW
				}
			};

			function f(c) {
				const l = Object.keys(r.Q).find(m => r.Q[m] === c);
				return !!c && typeof c == "string" && l != null && (0, e.S8)(l)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return i
				},
				BG: function() {
					return m
				},
				BY: function() {
					return g
				},
				GP: function() {
					return d
				},
				GU: function() {
					return b
				},
				PR: function() {
					return a
				},
				h$: function() {
					return O
				},
				h8: function() {
					return n
				},
				kk: function() {
					return h
				},
				l8: function() {
					return c
				},
				mV: function() {
					return p
				},
				vW: function() {
					return f
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const r = _ => _.user,
				a = (0, e.P1)("user", r),
				u = _ => {
					var T;
					return (T = a(_)) === null || T === void 0 ? void 0 : T.email.endsWith("@cloudflare.com")
				},
				i = _ => {
					var T;
					return !!((T = a(_)) === null || T === void 0 ? void 0 : T.id)
				},
				f = _ => {
					const T = a(_);
					if (!!T) return T.first_name && T.last_name ? `${T.first_name} ${T.last_name}` : T.email
				},
				c = _ => {
					const T = a(_);
					return T && T.has_enterprise_zones
				},
				l = _ => _.userCommPreferences,
				m = (0, e.P1)("userCommPreferences", l),
				n = _ => {
					const T = a(_);
					return T && T.email_verified
				},
				o = _ => {
					const T = m(_);
					return T && T.preferences.marketing_communication
				},
				s = _ => _.userDetails,
				E = (0, e.P1)("userDetails", s),
				d = _ => {
					const T = E(_);
					return T && T["2FA-RECOVERY"] === "scheduled"
				},
				p = _ => {
					const T = E(_);
					return T && T["2FA-RECOVERY"] === "interrupted"
				},
				h = _ => {
					const T = E(_);
					return T == null ? void 0 : T["NEW-USER-EMAIL"]
				},
				O = _ => _.gates.assignments,
				v = (_, T) => _ && _[T];

			function g(_, T) {
				const A = O(_);
				return A ? v(A, T) : void 0
			}
			const b = (_, T) => g(_, T) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return L
				},
				$t: function() {
					return We
				},
				A4: function() {
					return O
				},
				Cu: function() {
					return v
				},
				DQ: function() {
					return pe
				},
				Ej: function() {
					return x
				},
				FH: function() {
					return b
				},
				ID: function() {
					return I
				},
				Iu: function() {
					return h
				},
				Ko: function() {
					return je
				},
				Le: function() {
					return oe
				},
				Ly: function() {
					return ce
				},
				M3: function() {
					return Ke
				},
				N8: function() {
					return Fe
				},
				NY: function() {
					return Z
				},
				Ns: function() {
					return X
				},
				Ox: function() {
					return Ae
				},
				P4: function() {
					return w
				},
				RO: function() {
					return D
				},
				Tr: function() {
					return Me
				},
				U: function() {
					return g
				},
				Ug: function() {
					return T
				},
				V6: function() {
					return H
				},
				WR: function() {
					return rt
				},
				Xg: function() {
					return p
				},
				ZB: function() {
					return ve
				},
				_y: function() {
					return P
				},
				cU: function() {
					return xe
				},
				cg: function() {
					return ie
				},
				d2: function() {
					return q
				},
				il: function() {
					return ee
				},
				jN: function() {
					return j
				},
				jg: function() {
					return V
				},
				kC: function() {
					return M
				},
				kf: function() {
					return he
				},
				ko: function() {
					return z
				},
				mK: function() {
					return pt
				},
				nA: function() {
					return d
				},
				oY: function() {
					return S
				},
				qM: function() {
					return Ie
				},
				rq: function() {
					return k
				},
				tS: function() {
					return A
				},
				tU: function() {
					return G
				},
				vB: function() {
					return dt
				},
				vM: function() {
					return W
				},
				wH: function() {
					return _
				},
				wn: function() {
					return de
				},
				xU: function() {
					return ne
				},
				xw: function() {
					return Le
				},
				z5: function() {
					return U
				},
				zO: function() {
					return Ve
				},
				zW: function() {
					return Se
				},
				zh: function() {
					return re
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				r = t("../react/app/redux/normalizer.js"),
				a = t("../../../../node_modules/lodash/get.js"),
				u = t.n(a),
				i = t("../../../../node_modules/moment/moment.js"),
				f = t.n(i),
				c = t("../react/common/constants/billing/index.ts");

			function l(J) {
				for (var ge = 1; ge < arguments.length; ge++) {
					var Te = arguments[ge] != null ? Object(arguments[ge]) : {},
						Pe = Object.keys(Te);
					typeof Object.getOwnPropertySymbols == "function" && Pe.push.apply(Pe, Object.getOwnPropertySymbols(Te).filter(function(Oe) {
						return Object.getOwnPropertyDescriptor(Te, Oe).enumerable
					})), Pe.forEach(function(Oe) {
						m(J, Oe, Te[Oe])
					})
				}
				return J
			}

			function m(J, ge, Te) {
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
					var Pe = Te.call(J, ge || "default");
					if (typeof Pe != "object") return Pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ge === "string" ? String : Number)(J)
			}
			const s = (0, r.P1)("zone", J => J.zone),
				E = J => {
					var ge;
					return (ge = J.zoneVersioning) === null || ge === void 0 ? void 0 : ge.zoneVersionSelector
				},
				d = (0, e.P1)(s, E, (J, ge) => {
					var Te, Pe, Oe;
					let Be;
					if (Array.isArray(J) && J.length === 1 ? Be = J[0] : J && !Array.isArray(J) && (Be = J), !Be) return;
					const qe = !!(ge == null ? void 0 : ge.enabled);
					return l({}, Be, Be.name && {
						name: qe ? ge.rootZoneName : Be.name
					}, {
						versioning: {
							enabled: qe,
							isRoot: !((Te = Be.name) === null || Te === void 0 ? void 0 : Te.endsWith(".config.cfdata.org")),
							version: qe ? ge.selectedVersion : 0,
							rootZoneId: qe ? ge.rootZoneId : (Pe = (Oe = Be) === null || Oe === void 0 ? void 0 : Oe.id) !== null && Pe !== void 0 ? Pe : ""
						}
					})
				}),
				p = J => J.zone,
				h = J => J.zone.isRequesting,
				O = (0, e.P1)(d, p, (J, ge) => ({
					data: J,
					meta: ge
				})),
				v = J => {
					var ge, Te;
					return (ge = (Te = d(J)) === null || Te === void 0 ? void 0 : Te.id) !== null && ge !== void 0 ? ge : ""
				},
				g = J => J.zones,
				b = J => J.zonesRoot,
				_ = J => J.zonesAccount,
				T = (0, r.P1)("zones", g),
				A = (0, r.P1)("zonesRoot", b),
				L = (0, r.P1)("zonesAccount", _);

			function M(J) {
				const ge = d(J);
				return ge ? ge.created_on : null
			}

			function x(J, ge, Te) {
				const Pe = M(J);
				if (!Pe) return;
				const Oe = f().duration(ge, Te),
					Be = new Date(Pe),
					qe = new Date(new Date().getTime() - Oe.asMilliseconds());
				return Be.getTime() > qe.getTime()
			}

			function w(J) {
				const ge = d(J);
				return ge ? ge.status : null
			}

			function S(J) {
				const ge = d(J);
				return ge ? ge.type : null
			}

			function j(J) {
				return (J == null ? void 0 : J.plan_pending) ? J == null ? void 0 : J.plan_pending : J == null ? void 0 : J.plan
			}

			function W(J) {
				const ge = d(J);
				if (!ge) return;
				const Te = j(ge);
				return Te && Te.legacy_id
			}

			function G(J, ge) {
				const Te = j(J);
				return !!Te && c.Gs.indexOf(Te.legacy_id) >= c.Gs.indexOf(ge)
			}

			function ne(J) {
				return !!J && J.status === "initializing"
			}

			function q(J) {
				return !!J && J.status === "pending"
			}

			function re(J) {
				return !!J && J.status === "active"
			}

			function F(J, ge) {
				if (!J) return !1;
				const Te = j(J);
				return !!Te && Te.legacy_id === ge
			}

			function z(J) {
				return F(J, "enterprise")
			}
			const D = J => z(d(J));

			function U(J) {
				return F(J, "business")
			}
			const I = J => U(d(J));

			function P(J) {
				return F(J, "pro")
			}
			const B = J => P(d(J));

			function X(J) {
				return F(J, "free")
			}
			const ee = J => X(d(J));

			function ce(J) {
				return !z(J)
			}

			function R(J) {
				return J && J.owner
			}

			function V(J, ge) {
				const Te = R(ge);
				return !!Te && Te.type === "user" && Te.id === J.id
			}

			function k(J) {
				const ge = d(J);
				return !!ge && ge.type === "partial"
			}

			function Z(J) {
				const ge = d(J);
				return !!ge && ge.type === "secondary"
			}
			const ie = J => {
					var ge;
					const Te = d(J);
					return !!(Te == null ? void 0 : Te.host) && !!((ge = Te.plan) === null || ge === void 0 ? void 0 : ge.externally_managed)
				},
				pe = J => {
					const ge = T(J);
					return ge && ge.some(z)
				},
				de = (J, ge) => {
					const Te = d(J);
					return Te && Te.betas ? Te.betas.includes(ge) : !1
				},
				ve = (J, ...ge) => u()(J, ["zoneFlags", "data", ...ge]),
				oe = (J, ...ge) => u()(J, ["accountFlags", "data", ...ge]),
				Ie = J => J.accountFlags.isRequesting,
				Le = J => J.zoneFlags.isRequesting,
				Me = (J, ...ge) => u()(J, ["zoneFlagsChanges", "data", ...ge]),
				je = J => J.zoneFlagsChanges.isRequesting,
				xe = J => J.zoneFlags && J.zoneFlags.data,
				Ve = J => J.zoneFlags,
				Je = (0, e.P1)(xe, Ve, (J, ge) => ({
					data: J,
					meta: ge
				})),
				Fe = (0, r.P1)("abuseUrls", J => J.overview.abuseUrls),
				Ke = J => {
					const ge = d(J);
					return ge ? `/${ge.account.id}/${ge.name}` : null
				},
				H = J => J.zoneMarketingCampaigns,
				he = J => J.overview.zoneBlocks.data,
				Se = J => J.overview.zoneBlocks.isRequesting,
				We = J => J.overview.zoneBlocks.hasData,
				pt = J => {
					var ge, Te;
					return (J == null || (ge = J.overview.zoneBlocks) === null || ge === void 0 || (Te = ge.paginationData) === null || Te === void 0 ? void 0 : Te.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				dt = J => J.overview.zoneBlocksReview.isRequesting,
				Ae = J => J.overview.zoneHold,
				rt = (0, r.P1)("zoneHold", Ae)
		},
		"../react/common/utils/formatDate.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			y.Z = (r, a, u = !1) => (0, e.p6)(r, a, u)
		},
		"../react/common/utils/getEnvironment.ts": function(K, y, t) {
			"use strict";
			var e = t("../../../../node_modules/cookie/index.js"),
				r = t("../functions/utils/preview-deploy-helpers.ts"),
				a = t("../functions/utils/constants.ts");
			const u = () => {
				var i, f, c;
				const m = e.parse(document.cookie)[a.b1];
				let n = null;
				m && (n = (0, r.E9)(m));
				let o = "production";
				switch (!0) {
					case ((i = n) === null || i === void 0 ? void 0 : i.projectType) === "canary":
						o = "canary";
						break;
					case ((f = window) === null || f === void 0 || (c = f.build) === null || c === void 0 ? void 0 : c.isPreviewDeploy):
						o = "preview";
						break
				}
				return o
			};
			y.Z = u
		},
		"../react/common/utils/hasRole.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				n: function() {
					return r
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const r = (a, u) => {
				const {
					roles: i = []
				} = (0, e.uF)(a) || {};
				return u.some(f => i.includes(f))
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
					return f
				},
				v5: function() {
					return u
				},
				zE: function() {
					return i
				}
			});
			var e = t("../react/common/constants/index.ts"),
				r = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const a = l => l ? ["page", "per_page", "count", "total_count"].every(n => n in l && l[n]) : !1,
				u = (l = "") => e.Dy.includes(l.toLowerCase()),
				i = l => l !== null && typeof l == "object" && "name" in l && "size" in l && "type" in l && typeof l.slice == "function",
				f = l => (0, r.Z)(l),
				c = l => l != null
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
			const r = (a, u) => {
				const i = "production",
					f = `oidc${i==="staging"?"-staging":""}.iam.cfapi.net`,
					l = new URLSearchParams(window.location.search).get("login_challenge");
				let m = `https://${f}/api/v1/sso/init?client=${a}&env=${i}`;
				return u && (m = m + `&jwt=${u}`), l && (m += `&login_challenge=${encodeURIComponent(l)}`), m
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
					return f
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function r(c) {
				for (var l = 1; l < arguments.length; l++) {
					var m = arguments[l] != null ? Object(arguments[l]) : {},
						n = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(m).filter(function(o) {
						return Object.getOwnPropertyDescriptor(m, o).enumerable
					})), n.forEach(function(o) {
						a(c, o, m[o])
					})
				}
				return c
			}

			function a(c, l, m) {
				return l = u(l), l in c ? Object.defineProperty(c, l, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[l] = m, c
			}

			function u(c) {
				var l = i(c, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function i(c, l) {
				if (typeof c != "object" || c === null) return c;
				var m = c[Symbol.toPrimitive];
				if (m !== void 0) {
					var n = m.call(c, l || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(c)
			}
			const f = c => {
				const l = (0, e.useQueryClient)(),
					m = g => {
						var b;
						return l.getQueriesData((b = g) !== null && b !== void 0 ? b : c)
					},
					n = g => {
						var b;
						return l.getQueryData((b = g) !== null && b !== void 0 ? b : c)
					},
					o = g => {
						var b;
						return l.getQueriesData({
							queryKey: (b = g) !== null && b !== void 0 ? b : c,
							stale: !0
						})
					},
					s = (g, b) => {
						var _;
						l.setQueryData((_ = b) !== null && _ !== void 0 ? _ : c, g)
					},
					E = async g => {
						var b;
						await l.refetchQueries((b = g) !== null && b !== void 0 ? b : c)
					}, d = async (g, b) => {
						var _, T;
						await l.invalidateQueries((_ = g) !== null && _ !== void 0 ? _ : c, r({
							refetchActive: !1
						}, (T = b) !== null && T !== void 0 ? T : {}))
					}, p = async (g, b) => {
						const _ = g || (T => {
							var A;
							return (T == null || (A = T.queryKey) === null || A === void 0 ? void 0 : A[0]) === c
						});
						await l.invalidateQueries(r({
							predicate: _,
							refetchActive: !1,
							refetchInactive: !1
						}, b))
					};
				return {
					refetch: E,
					cancelData: async () => {
						await l.cancelQueries(c)
					},
					invalidate: d,
					setData: s,
					getDataStale: o,
					getData: m,
					prefetchQuery: (g, b) => {
						var _;
						return l.prefetchQuery((_ = b) !== null && _ !== void 0 ? _ : c, g)
					},
					getQueryData: n,
					predicateInvalidate: p,
					batchInvalidate: async ({
						queryKeysToInvalidate: g = [],
						queryKeysToPredicateInvalidate: b = [],
						refetchActive: _ = !1,
						refetchInactive: T = !1
					}) => {
						const A = g.map(M => d(M)),
							L = b.map(M => p(x => {
								var w;
								return (x == null || (w = x.queryKey) === null || w === void 0 ? void 0 : w[0]) === M
							}, {
								refetchActive: _,
								refetchInactive: T
							}));
						await Promise.all([...A, ...L])
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
					return u
				},
				bK: function() {
					return l
				},
				jk: function() {
					return c
				},
				wb: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const r = m => /^https?:\/\/(.*)/.test(m),
				a = m => e.default.hostname.test(m),
				u = m => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(m),
				i = m => /^[!-~]+$/.test(m),
				f = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				c = m => f.test(m),
				l = m => !!m && !!m.length && /^[ -~]+$/.test(m)
		},
		"../react/pages/abuse/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Cg: function() {
					return E
				},
				EO: function() {
					return l
				},
				Iy: function() {
					return c
				},
				RV: function() {
					return s
				},
				R_: function() {
					return f
				},
				Vq: function() {
					return g
				},
				Y0: function() {
					return v
				},
				bL: function() {
					return _
				},
				bx: function() {
					return O
				},
				dM: function() {
					return A
				},
				dV: function() {
					return T
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
					return b
				},
				xR: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				a = t("../react/pages/abuse/abuse.translations.ts"),
				u = t("../react/pages/abuse/types.ts");
			const i = "customer-abuse-reports-table-filter-bar",
				f = "abuse-reports-table-tooltip",
				c = "abuse-reports-cache-rate-limits-table-tooltip",
				l = "abuse-reports-blocks-tables-tooltip",
				m = "customer-abuse-reports-table-filter-bar",
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
			let s = function(L) {
				return L.BLOCKED_CONTENT = "blocked-content", L.CACHE_RATE_LIMITS = "cache-rate-limits", L
			}({});
			const E = [{
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
				h = null,
				O = ["active", "cancelled", "in_review", "pending", "removed"],
				v = ["accepted", "in_review"];
			let g = function(L) {
				return L.APPEAL_MITIGATION_SUBMIT = "appeal abuse report mitigation submit", L.APPEAL_MITIGATION_SUCCESS = "appeal abuse report mitigation success", L.APPEAL_MITIGATION_FAILURE = "appeal abuse report mitigation failure", L.CLICK_ABUSE_REPORT_ID = "click abuse report id", L.CLICK_ABUSE_REPORT_MITIGATIONS_LINK = "click abuse report mitigations link", L.ADD_FILTER = "Add filter", L.REMOVE_FILTER = "Remove filter", L.REMOVE_ALL_FILTERS = "Remove all filters", L.NEXT_PAGE = "go to next page", L.PREV_PAGE = "go to prev page", L.GO_TO_PAGE = "go to page", L.SET_PAGE_SIZE = "set page size", L.COPY_TABLE_CELL = "copy table cell", L
			}({});
			const b = {
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
				T = {
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
		"../react/pages/abuse/types.ts": function(K, y, t) {
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
					return l
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
			let u = function(o) {
					return o.BlockType = "blockType", o.CreatedDate = "created", o.EnforcementDate = "enforcement_date", o.Status = "status", o.EntityType = "entity_type", o.EntityId = "entity_id", o
				}({}),
				i = function(o) {
					return o.JIRA = "jira", o.ZENDESK = "zendesk", o.ABUSE_REPORT = "abuse_report", o.CSAM_MATCH = "csam_match", o
				}({}),
				f = function(o) {
					return o.ID = "id", o.DOMAIN = "domain", o.CREATED_BEFORE = "created_before", o.CREATED_AFTER = "created_after", o.STATUS = "status", o.TYPE = "type", o.MITIGATION_STATUS = "mitigation_status", o
				}({}),
				c = function(o) {
					return o.Domain = "domain", o.Status = "status", o.Type = "type", o
				}({}),
				l = function(o) {
					return o.DMCA = "DMCA", o.TRADEMARK = "TM", o.PHISHING = "PHISH", o.GENERAL = "GEN", o.REGISTRAR_WHOIS = "REG_WHO", o.EMERGENCY = "EMER", o.NCSEI = "NCSEI", o.THREAT = "THREAT", o
				}({});
			const m = [l.DMCA, l.TRADEMARK, l.PHISHING, l.GENERAL, l.REGISTRAR_WHOIS, l.EMERGENCY, l.NCSEI, l.THREAT];
			let n = function(o) {
				return o.Id = "id", o.CDate = "cdate", o.Domain = "domain", o.Type = "type", o.Status = "status", o.AcceptedUrls = "accepted_urls", o
			}({})
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(K, y, t) {
			"use strict";
			t.d(y, {
				DZ: function() {
					return u
				},
				GA: function() {
					return m
				},
				hT: function() {
					return f
				},
				p6: function() {
					return a
				},
				qc: function() {
					return i
				},
				w9: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e);
			const a = s => r().utc(s).format("YYYY-MM-DD"),
				u = s => r().utc(s).format(),
				i = s => r().utc(s).startOf("minute").format(),
				f = s => new Date(s),
				c = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				l = s => {
					const E = s / 60 / 60 / 1e3;
					return c[Object.keys(c).sort((d, p) => p - d).find(d => E >= d)]
				},
				m = (s, E = d => d.avg && d.avg.sampleInterval ? d.avg.sampleInterval : 1) => s.length === 0 ? 1 : s.reduce((d, p) => d + E(p), 0) / s.length,
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
					return m
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
					return l
				},
				c5: function() {
					return E
				},
				om: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				a = t("../react/pages/blocked-content/types.ts");

			function u(h) {
				for (var O = 1; O < arguments.length; O++) {
					var v = arguments[O] != null ? Object(arguments[O]) : {},
						g = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(v).filter(function(b) {
						return Object.getOwnPropertyDescriptor(v, b).enumerable
					})), g.forEach(function(b) {
						i(h, b, v[b])
					})
				}
				return h
			}

			function i(h, O, v) {
				return O = f(O), O in h ? Object.defineProperty(h, O, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[O] = v, h
			}

			function f(h) {
				var O = c(h, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function c(h, O) {
				if (typeof h != "object" || h === null) return h;
				var v = h[Symbol.toPrimitive];
				if (v !== void 0) {
					var g = v.call(h, O || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(h)
			}
			const l = "blocked-content-table-tooltip",
				m = {
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
				E = {
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
					filters: Object.values(a.GH).reduce((h, O) => u({}, h, {
						[O]: O
					}), {})
				};
			let p = function(h) {
				return h.COPY_URL = "copy blocked content url", h.REQUEST_REVIEW = "request blocked content review", h.ADD_FILTER = "Add filter", h.REMOVE_FILTER = "Remove filter", h
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
					return u
				},
				fL: function() {
					return f
				}
			});
			let e = function(l) {
					return l.Pending = "pending", l.Active = "active", l
				}({}),
				r = function(l) {
					return l.Active = "active", l.InReview = "in_review", l.Pending = "pending", l.Cancelled = "cancelled", l
				}({});
			const a = [r.Pending, r.Cancelled],
				u = [r.Active, r.InReview];
			let i = function(l) {
					return l.Domain = "domain", l.Status = "status", l.BlockType = "blockType", l
				}({}),
				f = function(l) {
					return l.CreatedDate = "created", l.EnforcementDate = "enforcementDate", l.BlockType = "blockType", l.Hostname = "hostname", l.Status = "status", l
				}({}),
				c = function(l) {
					return l.Removed = "removed", l.Misclassified = "misclassified", l
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
		"../react/pages/dns/api.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				BI: function() {
					return O
				},
				Q8: function() {
					return s
				},
				YJ: function() {
					return E
				},
				hs: function() {
					return m
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

			function u(v) {
				for (var g = 1; g < arguments.length; g++) {
					var b = arguments[g] != null ? Object(arguments[g]) : {},
						_ = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(b).filter(function(T) {
						return Object.getOwnPropertyDescriptor(b, T).enumerable
					})), _.forEach(function(T) {
						i(v, T, b[T])
					})
				}
				return v
			}

			function i(v, g, b) {
				return g = f(g), g in v ? Object.defineProperty(v, g, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[g] = b, v
			}

			function f(v) {
				var g = c(v, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function c(v, g) {
				if (typeof v != "object" || v === null) return v;
				var b = v[Symbol.toPrimitive];
				if (b !== void 0) {
					var _ = b.call(v, g || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(v)
			}
			const l = {
					settings: (0, a.BC)`/zones/${"zoneId"}/dns_settings`
				},
				m = {
					fetchZoneDnsSettings: async v => {
						try {
							return (await (0, e.get)(l.settings.toUrl({
								zoneId: v
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					patchZoneDnsSettings: async (v, g) => await (0, e.patch)(l.settings.toUrl({
						zoneId: v
					}), {
						body: g
					})
				},
				n = {
					settings: (0, a.BC)`/accounts/${"accountId"}/dns_settings`
				},
				o = {
					fetchAccountDnsSettings: async v => {
						try {
							return (await (0, e.get)(n.settings.toUrl({
								accountId: v
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					patchAccountDnsSettings: async (v, g) => await (0, e.patch)(n.settings.toUrl({
						accountId: v
					}), {
						body: g
					})
				},
				s = {
					dns_records: (0, a.BC)`/zones/${"zoneId"}/dns_records`,
					batch: (0, a.BC)`/zones/${"zoneId"}/dns_records/batch`
				},
				E = {
					getMaxRecords: async (v, g, b, _, T) => {
						var A;
						return (A = (await (0, e.get)(s.dns_records.toUrl({
							zoneId: v
						}), {
							parameters: u({
								per_page: g
							}, _ ? {
								search: _
							} : {}, T || {}, b)
						})).body) === null || A === void 0 ? void 0 : A.result
					},
					deleteRecords: async (v, g) => await (0, e.post)(s.batch.toUrl({
						zoneId: v
					}), {
						body: {
							deletes: g
						}
					}),
					patchRecords: async (v, g) => await (0, e.post)(s.batch.toUrl({
						zoneId: v
					}), {
						body: {
							patches: g
						}
					})
				},
				d = {
					custom_ns: (0, a.BC)`/zones/${"zoneId"}/custom_ns`,
					zone: (0, a.BC)`/zones/${"zoneId"}`
				},
				p = {
					fetchZoneCustomNs: async v => {
						try {
							return (await (0, e.get)(d.custom_ns.toUrl({
								zoneId: v
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					fetchZoneVanityNameservers: async v => {
						try {
							return (await (0, e.get)(d.zone.toUrl({
								zoneId: v
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					createZoneCustomNameserver: async (v, g) => await (0, e.patch)(d.zone.toUrl({
						zoneId: v
					}), {
						body: {
							vanity_name_servers: g
						}
					}),
					assignZoneCustomNsSet: async (v, g) => await (0, e.put)(d.custom_ns.toUrl({
						zoneId: v
					}), {
						body: {
							enabled: !0,
							ns_set: g
						}
					}),
					disableZoneCustomNs: async v => await (0, e.put)(d.custom_ns.toUrl({
						zoneId: v
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
				O = {
					fetchAccounCustomNs: async v => {
						try {
							return (await (0, e.get)(h.custom_ns.toUrl({
								accountId: v
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					createAccountCustomNs: async (v, g) => await (0, e.post)(h.custom_ns.toUrl({
						accountId: v
					}), {
						body: g
					}),
					deleteAccountCustomNs: async (v, g) => await (0, e.del)(h.delete.toUrl({
						accountId: v,
						nsName: g
					}))
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
		"../react/pages/dns/hooks/useZoneDnsSettings.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				c: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/app/redux/index.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/pages/dns/api.ts");
			const i = "dns-zone-settings-query-key",
				f = () => {
					var c;
					const l = (0, e.useQueryClient)(),
						m = (0, r.p4)(a.nA),
						n = (c = m == null ? void 0 : m.id) !== null && c !== void 0 ? c : "",
						{
							data: o,
							isError: s,
							isLoading: E,
							refetch: d
						} = (0, e.useQuery)([n, i], () => u.hs.fetchZoneDnsSettings(n), {
							enabled: !!n,
							refetchOnWindowFocus: !1
						}),
						{
							mutate: p,
							isLoading: h,
							isSuccess: O,
							isError: v
						} = (0, e.useMutation)({
							mutationFn: g => u.hs.patchZoneDnsSettings(n, g),
							onSuccess: async () => await l.refetchQueries({
								queryKey: [n, i]
							})
						});
					return {
						zoneDnsData: o,
						isError: s,
						isLoading: E,
						isSuccess: O,
						refetch: d,
						mutateZoneDnsSettings: p,
						isUpdating: h,
						isUpdateError: v
					}
				}
		},
		"../react/pages/dns/types.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				DU: function() {
					return e
				},
				LY: function() {
					return i
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
			let e = function(f) {
				return f.STANDARD = "cloudflare.standard", f.RANDOM = "cloudflare.standard.random", f.FOUNDATION = "cloudflare.foundation_dns", f.CUSTOM_ACCOUNT = "custom.account", f.CUSTOM_ZONE = "custom.zone", f
			}({});
			const r = {
				[e.STANDARD]: "account.dns_settings.zone_defaults.table.standard",
				[e.RANDOM]: "account.dns_settings.zone_defaults.table.random",
				[e.FOUNDATION]: "account.dns_settings.zone_defaults.table.foundation",
				[e.CUSTOM_ACCOUNT]: "account.dns_settings.zone_defaults.table.custom"
			};
			let a = function(f) {
					return f.NAME = "queryName", f.RESPONSE_CODE = "responseCode", f.TYPE = "queryType", f.SOURCE_IP = "sourceIP", f.DESTINATION_IP = "destinationIP", f.PROTOCOL = "protocol", f.IP_VERSION = "ipVersion", f.NAME_AND_TYPE = "nameAndType", f.QUERY_TOTALS = "queryTotals", f.COLO = "coloName", f
				}({}),
				u = function(f) {
					return f.TOTAL = "total", f.PER_SECOND = "queries_per_second", f.RESPONSE_AVG = "response_average", f
				}({}),
				i = function(f) {
					return f.MNAME = "soa.mname", f.RNAME = "soa.rname", f.REFRESH = "soa.refresh", f.RETRY = "soa.retry", f.EXPIRE = "soa.expire", f.RECORD_TTL = "soa.ttl", f.MIN_TTL = "soa.min_ttl", f
				}({})
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
			const u = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/pages/home/alerts/routes.ts");
			const a = r._.createAlertWithSelection,
				u = r._.editAlert,
				i = (0, e.BC)`${a}/subtype`,
				f = (0, e.BC)`${a}/stepper`,
				c = (0, e.BC)`${f}/${"stepName"}`,
				l = (0, e.BC)`${f}/details`,
				m = (0, e.BC)`${f}/data-centers`,
				n = (0, e.BC)`${f}/ramps`,
				o = (0, e.BC)`${f}/threshold`,
				s = (0, e.BC)`${f}/review`,
				E = (0, e.BC)`${f}/confirm`,
				d = (0, e.BC)`${u}/stepper`,
				p = (0, e.BC)`${d}/${"stepName"}`,
				h = (0, e.BC)`${d}/details`,
				O = (0, e.BC)`${d}/data-centers`,
				v = (0, e.BC)`${d}/ramps`,
				g = (0, e.BC)`${d}/threshold`,
				b = (0, e.BC)`${d}/review`,
				_ = (0, e.BC)`${d}/confirm`,
				T = {
					magicTunnelHealthChooseSubType: i,
					magicTunnelHealthCreateStepperBase: f,
					magicTunnelHealthCreateStepper: c,
					magicTunnelHealthCreateDetails: l,
					magicTunnelHealthCreateSelectDataCenter: m,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: o,
					magicTunnelHealthCreateReview: s,
					magicTunnelHealthCreateConfirm: E,
					magicTunnelHealthEditStepperBase: d,
					magicTunnelHealthEditStepper: p,
					magicTunnelHealthEditDetails: h,
					magicTunnelHealthEditSelectDataCenter: O,
					magicTunnelHealthEditSelectRamps: v,
					magicTunnelHealthEditSetThreshold: g,
					magicTunnelHealthEditReview: b,
					magicTunnelHealthEditConfirm: _
				};
			y.Z = T
		},
		"../react/pages/home/alerts/config.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				jk: function() {
					return s
				},
				w8: function() {
					return E
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				r = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				a = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				u = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				i = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function f(d) {
				for (var p = 1; p < arguments.length; p++) {
					var h = arguments[p] != null ? Object(arguments[p]) : {},
						O = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(h).filter(function(v) {
						return Object.getOwnPropertyDescriptor(h, v).enumerable
					})), O.forEach(function(v) {
						c(d, v, h[v])
					})
				}
				return d
			}

			function c(d, p, h) {
				return p = l(p), p in d ? Object.defineProperty(d, p, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = h, d
			}

			function l(d) {
				var p = m(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function m(d, p) {
				if (typeof d != "object" || d === null) return d;
				var h = d[Symbol.toPrimitive];
				if (h !== void 0) {
					var O = h.call(d, p || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const n = "Notifications",
				o = "notification",
				s = f({}, e._, r._j, a._j, u._),
				E = f({
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
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				a = (0, e.BC)`${r}/pagerduty/connect`,
				u = (0, e.BC)`${r}/pagerduty/register`,
				i = (0, e.BC)`${r}/pagerduty`,
				f = {
					pagerDutyConnect: a,
					pagerDutyRegister: u,
					pagerDutyList: i
				};
			var c = null
		},
		"../react/pages/home/alerts/routes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				u = (0, e.BC)`${a}/destinations`,
				i = (0, e.BC)`${a}/create`,
				f = (0, e.BC)`${i}/${"alertType"}`,
				c = (0, e.BC)`${a}/edit/${"alertId"}`,
				l = {
					account: r,
					alerts: a,
					destinations: u,
					createAlert: i,
					createAlertWithSelection: f,
					editAlert: c
				};
			y.Z = l
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
		"../react/pages/home/configurations/dns-settings/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Aj: function() {
					return f
				},
				Am: function() {
					return m
				},
				Jy: function() {
					return v
				},
				Mv: function() {
					return E
				},
				WI: function() {
					return O
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
				for (var L = 1; L < arguments.length; L++) {
					var M = arguments[L] != null ? Object(arguments[L]) : {},
						x = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(M).filter(function(w) {
						return Object.getOwnPropertyDescriptor(M, w).enumerable
					})), x.forEach(function(w) {
						a(A, w, M[w])
					})
				}
				return A
			}

			function a(A, L, M) {
				return L = u(L), L in A ? Object.defineProperty(A, L, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[L] = M, A
			}

			function u(A) {
				var L = i(A, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function i(A, L) {
				if (typeof A != "object" || A === null) return A;
				var M = A[Symbol.toPrimitive];
				if (M !== void 0) {
					var x = M.call(A, L || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(A)
			}
			const f = ["hmac-sha512.", "hmac-sha256.", "hmac-sha1."],
				c = ["198.41.144.240/28", "198.41.150.240/28", "2a06:98c0:3601::/48", "2a06:98c0:1401::/48"],
				l = ["172.65.30.82", "172.65.50.145", "2606:4700:60:0:317:26ee:3bdf:5774", "2606:4700:60:0:35a:4be3:4144:c5ee"],
				m = "172.65.64.6",
				n = 86400,
				o = "inlineTsigCreation",
				s = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
				E = /[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
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
			const O = {
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
				v = {
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
				b = {
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
				T = {
					FORM: "account-custom-ns-form",
					NS_SET: "ns_set",
					NS_NAME: "ns_name"
				}
		},
		"../react/pages/home/configurations/dns-settings/isZoneDNSOnly.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				s: function() {
					return c
				}
			});
			var e = t("../react/common/selectors/entitlementsSelectors.ts"),
				r = t("../react/pages/home/configurations/dns-settings/selectors.ts"),
				a = t("../react/pages/dns/hooks/useZoneDnsSettings.ts"),
				u = t("../react/pages/home/configurations/dns-settings/constants.ts"),
				i = t("../react/common/hooks/useScope.tsx"),
				f = t("../react/app/redux/index.ts");
			const c = m => {
					const n = (0, e.yD)(m),
						o = (0, r.Hb)(m);
					return n || o
				},
				l = () => {
					const m = useSelector(zoneIsDNSOnly),
						{
							isZoneScope: n
						} = useScope(),
						{
							zoneDnsData: o
						} = useZoneDnsSettings(),
						s = (o == null ? void 0 : o.zone_mode) === ZONE_MODES.DNS_ONLY;
					return {
						isZoneDNSEntitlementDNSOnly: m,
						isZoneSettingsModeDNSOnly: s,
						isZoneDNSOnly: n ? m || s : !1
					}
				}
		},
		"../react/pages/home/configurations/dns-settings/selectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				BJ: function() {
					return i
				},
				Hb: function() {
					return d
				},
				N$: function() {
					return l
				},
				P7: function() {
					return m
				},
				Pw: function() {
					return u
				},
				fF: function() {
					return f
				},
				gA: function() {
					return n
				},
				h3: function() {
					return a
				},
				iI: function() {
					return c
				},
				mT: function() {
					return s
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../react/pages/home/configurations/dns-settings/constants.ts");
			const a = p => p.dns.secondaryDNS.acls,
				u = (0, e.P1)("dnsAcl", a),
				i = p => p.dns.secondaryDNS.tsigs,
				f = (0, e.P1)("dnsTsig", i),
				c = p => p.dns.secondaryDNS.masters,
				l = (0, e.P1)("dnsMaster", c),
				m = p => p.dns.secondaryDNS.zoneMasters,
				n = (0, e.P1)("zoneMasters", m),
				o = p => p.dns.secondaryDNS.outgoingZoneTransfers,
				s = (0, e.P1)("dnsOutgoingZoneTransfers", o),
				E = p => {
					var h;
					return (h = p.dns.zoneDnsSettings) === null || h === void 0 ? void 0 : h.data
				},
				d = p => {
					var h, O;
					return ((h = p.dns.zoneDnsSettings) === null || h === void 0 || (O = h.data) === null || O === void 0 ? void 0 : O.zone_mode) === r.uC.DNS_ONLY
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
					return ct
				},
				AY: function() {
					return le
				},
				Ac: function() {
					return _t
				},
				Am: function() {
					return O
				},
				B2: function() {
					return U
				},
				BB: function() {
					return M
				},
				BF: function() {
					return Pe
				},
				BQ: function() {
					return Ge
				},
				E8: function() {
					return Ne
				},
				Fl: function() {
					return we
				},
				Fu: function() {
					return S
				},
				Gc: function() {
					return it
				},
				Hc: function() {
					return Rt
				},
				IO: function() {
					return st
				},
				JK: function() {
					return Ve
				},
				K: function() {
					return T
				},
				LI: function() {
					return Mt
				},
				LX: function() {
					return ge
				},
				L_: function() {
					return H
				},
				Ly: function() {
					return Qe
				},
				MR: function() {
					return P
				},
				Mj: function() {
					return X
				},
				NB: function() {
					return Dt
				},
				Oe: function() {
					return Ut
				},
				Or: function() {
					return ce
				},
				P5: function() {
					return ht
				},
				PE: function() {
					return Ie
				},
				Pd: function() {
					return Pt
				},
				Pk: function() {
					return Me
				},
				Pp: function() {
					return We
				},
				Q1: function() {
					return w
				},
				Qr: function() {
					return Te
				},
				Qv: function() {
					return Le
				},
				Rp: function() {
					return At
				},
				S7: function() {
					return bt
				},
				Sh: function() {
					return Re
				},
				Sl: function() {
					return Bt
				},
				TZ: function() {
					return R
				},
				Tg: function() {
					return Je
				},
				Tp: function() {
					return qe
				},
				Uy: function() {
					return Lt
				},
				Vw: function() {
					return W
				},
				W3: function() {
					return Ae
				},
				WR: function() {
					return at
				},
				WX: function() {
					return pe
				},
				XF: function() {
					return mt
				},
				Xb: function() {
					return k
				},
				Zs: function() {
					return Ke
				},
				_f: function() {
					return Oe
				},
				b4: function() {
					return ie
				},
				bc: function() {
					return St
				},
				c2: function() {
					return I
				},
				cE: function() {
					return wt
				},
				dh: function() {
					return Se
				},
				fE: function() {
					return he
				},
				g7: function() {
					return oe
				},
				hO: function() {
					return dt
				},
				hV: function() {
					return Nt
				},
				hk: function() {
					return v
				},
				hr: function() {
					return Z
				},
				it: function() {
					return pt
				},
				j3: function() {
					return xt
				},
				jN: function() {
					return xe
				},
				jo: function() {
					return jt
				},
				k3: function() {
					return Ct
				},
				m8: function() {
					return F
				},
				nm: function() {
					return Ye
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
					return Wt
				},
				rI: function() {
					return B
				},
				s7: function() {
					return gt
				},
				sg: function() {
					return tt
				},
				tB: function() {
					return p
				},
				tN: function() {
					return ve
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
				u = t.n(a),
				i = t("../../../common/util/types/src/api/domain.ts"),
				f = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				c = t("../react/utils/url.ts"),
				l = t("../react/pages/home/domain-registration/config.ts"),
				m = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function o(C) {
				for (var N = 1; N < arguments.length; N++) {
					var me = arguments[N] != null ? Object(arguments[N]) : {},
						Ce = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && Ce.push.apply(Ce, Object.getOwnPropertySymbols(me).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(me, ae).enumerable
					})), Ce.forEach(function(ae) {
						s(C, ae, me[ae])
					})
				}
				return C
			}

			function s(C, N, me) {
				return N = E(N), N in C ? Object.defineProperty(C, N, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[N] = me, C
			}

			function E(C) {
				var N = d(C, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function d(C, N) {
				if (typeof C != "object" || C === null) return C;
				var me = C[Symbol.toPrimitive];
				if (me !== void 0) {
					var Ce = me.call(C, N || "default");
					if (typeof Ce != "object") return Ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(C)
			}

			function p(C) {
				return C.filter(N => N.isSelected).reduce((N, {
					name: me,
					fees: Ce,
					isZoneEntitlementPresent: ae
				}) => ae || !(0, e.isNumber)(Ce == null ? void 0 : Ce.transfer_fee) ? N : _t(me) ? N + (Ce == null ? void 0 : Ce.transfer_fee) * 2 : N + (Ce == null ? void 0 : Ce.transfer_fee), 0)
			}

			function h(C) {
				return C.filter(N => N.registrar.toLowerCase() === "godaddy")
			}
			const O = "MMM D, YYYY";

			function v(C, N, me, Ce) {
				var ae, se, fe, _e, be, Ue, Ze, ot, Xe, et, lt, ft;
				const ze = C[N.name],
					nt = () => _t(N.name) ? u()(N.expires_at).add(2, "years").format(O) : u()(N.expires_at).add(1, "year").format(O);
				return o({
					name: N == null ? void 0 : N.name,
					zone: ze,
					entitlements: me,
					registryCheck: Ce,
					nameservers: N.name_servers,
					isAvailable: N.available,
					lastKnownStatus: N.last_known_status,
					authCode: N.auth_code,
					isEnterpriseZone: (ze == null || (ae = ze.plan) === null || ae === void 0 ? void 0 : ae.legacy_id) === "enterprise",
					isActiveZone: (ze == null ? void 0 : ze.status) === "active",
					corResponsesPending: N.cor_responses_pending,
					isCorLocked: N.cor_locked,
					corLockedUntil: N.cor_locked_until ? u()(N.cor_locked_until).format(O) : null,
					isFullZone: (ze == null ? void 0 : ze.type) == n.xd.Full,
					isLocked: N.locked,
					registrar: N.current_registrar || l.JM,
					zoneId: ze == null ? void 0 : ze.id,
					currentExpiration: u()(N.expires_at).format(O),
					newExpiration: nt(),
					lastEntitledAt: N.last_entitled_at ? new Date(N.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(me) && !!me.find(zt => zt.id === l.g5 && zt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: N.transfer_in && _(N.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: N.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: N.transfer_in,
					transferOut: N.transfer_out,
					autoRenew: N.auto_renew === !0,
					lastTransferredAt: N.last_transferred_at,
					createdAt: N.created_at,
					paymentExpiresAt: u()(N.payment_expires_at).isValid() ? u()(N.payment_expires_at) : u()(N.expires_at).isValid() ? u()(N.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (se = N.contacts) === null || se === void 0 || (fe = se.administrator) === null || fe === void 0 ? void 0 : fe.id,
						[n.l2.Billing]: (_e = N.contacts) === null || _e === void 0 || (be = _e.billing) === null || be === void 0 ? void 0 : be.id,
						[n.l2.Registrant]: (Ue = N.contacts) === null || Ue === void 0 || (Ze = Ue.registrant) === null || Ze === void 0 ? void 0 : Ze.id,
						[n.l2.Technical]: (ot = N.contacts) === null || ot === void 0 || (Xe = ot.technical) === null || Xe === void 0 ? void 0 : Xe.id
					},
					landing: N.landing,
					privacy: N.privacy,
					whois: N.whois,
					emailVerified: N.email_verified,
					materialChanges: A(N.material_changes),
					corChanges: N.cor_changes ? M(Object.assign(o({}, b), N.cor_changes)) : {},
					registryStatuses: N.registry_statuses ? N.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (et = N.domain_protection_services) === null || et === void 0 ? void 0 : et.status
					},
					deletion: {
						isDeletable: N == null || (lt = N.deletion) === null || lt === void 0 ? void 0 : lt.is_deletable
					},
					premiumType: N == null ? void 0 : N.premium_type,
					fees: N == null ? void 0 : N.fees
				}, N.domain_move && {
					domainMove: {
						ineligibilityReasons: (ft = N.domain_move) === null || ft === void 0 ? void 0 : ft.ineligibility_reasons
					}
				}, N.actionable_metadata && {
					actionableMetadata: g(N.actionable_metadata)
				}, N.policies && {
					policies: o({}, N.policies.suspension && {
						suspension: {
							parked: N.policies.suspension.parked,
							parkingReason: N.policies.suspension.parking_reason,
							paymentExpired: N.policies.suspension.payment_expired
						}
					})
				})
			}

			function g(C) {
				return C.map(N => ({
					accountContext: N.account_context,
					createdAt: N.created_at,
					expiresAt: N.expires_at,
					sentAt: N.sent_at,
					status: N.status,
					type: N.type
				}))
			}
			const b = {
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

			function _(C) {
				switch (C.enter_auth_code) {
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

			function T(C) {
				let N = C.extensions;
				(N == null ? void 0 : N.application_purpose) && (N == null ? void 0 : N.nexus_category) && (C.extensions = {
					nexusCategory: N.nexus_category,
					applicationPurpose: N.application_purpose
				});
				let me = o({}, typeof C.id == "string" ? {
					id: C.id
				} : {}, {
					first_name: C.firstName,
					organization: C.organization,
					address: C.address1,
					city: C.city,
					state: C.state || "N/A",
					zip: C.zip,
					country: C.country,
					phone: C.phone,
					email: C.email,
					fax: "",
					last_name: C.lastName,
					address2: C.address2,
					email_verified: C.emailVerified
				}, C.extensions ? {
					extensions: {
						nexus_category: C.extensions.nexusCategory,
						application_purpose: C.extensions.applicationPurpose
					}
				} : {});
				return Fe(me)
			}

			function A(C) {
				let N = [];
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
				for (const Ce in C) {
					const ae = C[Ce],
						se = me[ae];
					N.push(se)
				}
				return N
			}
			const L = C => {
				if (!C) return null;
				let N = C;
				return C.includes("C31") && (N = "C31"), C.includes("C32") && (N = "C32"), N
			};

			function M(C) {
				return o({}, typeof C.id == "string" ? {
					id: C.id
				} : {}, {
					firstName: C.first_name,
					organization: C.organization,
					address1: C.address,
					city: C.city,
					state: C.state,
					zip: C.zip,
					country: C.country,
					phone: C.phone.trim(),
					email: C.email.trim(),
					lastName: C.last_name,
					address2: C.address2,
					emailVerified: C.email_verified
				}, C.extensions ? {
					extensions: {
						nexusCategory: L(C.extensions.nexus_category),
						applicationPurpose: C.extensions.application_purpose
					}
				} : {})
			}

			function x(C = {}) {
				const N = {
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
						}, C.zone && C.zone.plan || {}),
						type: EZoneType.Full
					}, C.zone || {}),
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
					}, C.transferConditions || {}),
					transferIn: o({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, C.transferIn || {}),
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
				return Object.assign(N, C)
			}

			function w(C = {}) {
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
				}, C)
			}

			function S(C) {
				const N = l.Py.concat(l.ui).reduce((me, Ce) => o({}, me, {
					[Ce]: []
				}), {});
				return C.forEach(me => {
					let Ce = j(me.registrar);
					Ce in N || (Ce = l.ui), tt(me.name) && (Ce = "uk"), N[Ce].push(me)
				}), Object.keys(N).sort((me, Ce) => me.localeCompare(Ce)).map(me => ({
					registrar: me,
					domains: N[me]
				})).filter(me => me.domains.length > 0)
			}

			function j(C) {
				return C == null ? void 0 : C.toLowerCase().replace(/\s|,|\./g, "")
			}

			function W(C) {
				if (!C || !C.registrar) return "unknown";
				if (tt(C.name)) return "uk";
				const N = j(C.registrar);
				return N in l.gM ? N : "unknown"
			}
			const G = [];

			function ne(C) {
				return G.some(N => C.endsWith("." + N))
			}

			function q(C) {
				return !C.isEnterpriseZone || !Array.isArray(C.entitlements) ? !1 : !!C.entitlements.find(({
					id: N,
					allocation: me
				}) => N === l.g5 && me.value === !0)
			}

			function re(C) {
				var N;
				const me = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let Ce = !1,
					ae = null;
				return (N = C.registryStatuses) === null || N === void 0 || N.some(se => {
					me.includes(se) && (ae = se, Ce = !0)
				}), [Ce, ae]
			}

			function F(C, N = !1) {
				if (!C) return [!1, m.keys.cannot_transfer_default];
				if (C.zone.status !== "active") return [!1, m.keys.cannot_transfer_zone_not_active];
				if (!C.isFullZone && !q(C)) return [!1, m.keys.cannot_transfer_zone_not_eligible];
				if (C.registrar === "Cloudflare") return [!1, m.keys.cannot_transfer_domain_on_cf];
				if (C.isAvailable) return [!1, m.keys.cannot_transfer_domain_available];
				if (!C.transferConditions) return [!1, m.keys.cannot_transfer_domain_transfer_conditions];
				if (!N && Lt(C == null ? void 0 : C.premiumType)) return [!1, m.keys.cannot_transfer_domain_premium];
				if (z(C)) return [!1, m.keys.cannot_transfer_domain_transfer_in_progress];
				let me;
				for (me in C.transferConditions)
					if (me !== "not_premium" && !C.transferConditions[me]) return [!1, m.keys.cannot_transfer_domain_transfer_conditions];
				if (ne(C.name)) return [!1, m.keys.cannot_transfer_domain_tld_not_supported];
				const [Ce, ae] = re(C);
				return Ce && ae ? [!1, m.keys.cannot_transfer_domain_registry_status[ae]] : [!0, ""]
			}

			function z(C) {
				var N, me;
				return !!C.transferIn && !((N = C.transferConditions) === null || N === void 0 ? void 0 : N.not_started) && !!(tt(C.name) || ((me = C.registryStatuses) === null || me === void 0 ? void 0 : me.includes(n.rj.PENDING_TRANSFER)))
			}

			function D(C) {
				return !!C.registrar && !!C.currentExpiration
			}

			function U(C, N = !1) {
				const [me] = F(C, N);
				return D(C) ? de(C) ? n.M5.InProgressOrOnCF : me ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function I(C) {
				return C.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(C.transferIn.enter_auth_code) || !1
			}

			function P(C) {
				return C.registrar === "Cloudflare"
			}

			function B(C) {
				return !!(C == null ? void 0 : C.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function X(C) {
				return !!(C == null ? void 0 : C.includes(n.rj.PENDING_TRANSFER))
			}
			const ee = "Invalid date";

			function ce(C) {
				return C.newExpiration === ee ? "Unavailable" : C.newExpiration
			}

			function R(C) {
				return C.currentExpiration === ee ? "Unavailable" : C.currentExpiration
			}

			function V(C) {
				return C.substring(C.indexOf("."))
			}

			function k(C = "") {
				return C.indexOf(".") !== -1 ? C.substring(0, C.indexOf(".")) : C
			}

			function Z(C) {
				return C.map(N => N.name).map(N => V(N)).filter((N, me, Ce) => !Ce.includes(N, me + 1))
			}

			function ie(C) {
				if (l.no) return [!0, ""];
				if (!P(C)) return [!1, n.ok.NotOnCF];
				if (C.isCorLocked) return [!1, C.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (C.lastTransferredAt) {
					const N = u()(C.lastTransferredAt),
						me = u().duration(u()().diff(N)).as("days"),
						Ce = tt(C.name);
					if (me < (Ce ? 1 : 60)) return [!1, Ce ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (C.createdAt) {
					const N = u()(C.createdAt);
					if (u().duration(u()().diff(N)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function pe(C) {
				return !!(l.Bc || C.transferOut)
			}

			function de(C) {
				return oe(C) || P(C)
			}

			function ve(C) {
				return !oe(C) && P(C)
			}

			function oe(C) {
				return !C || C.lastKnownStatus === n.kd.PENDING_TRANSFER || C.lastKnownStatus === n.kd.TRANSFER_FOA_PENDING || !P(C) && C.transferConditions && !C.transferConditions.not_started || !1
			}

			function Ie(C) {
				return !(ne(C.name) || C.transferConditions && !C.transferConditions.supported_tld)
			}

			function Le(C) {
				return (C == null ? void 0 : C.includes("/")) ? !0 : C.split("").some(N => N.charCodeAt(0) > 123)
			}

			function Me(C) {
				switch (C) {
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

			function je(C) {
				return u()(C.paymentExpiresAt).isBefore(u()())
			}

			function xe(C) {
				return C.transferIn && C.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function Ve(C) {
				const N = ["CU", "KP", "IR", "SY"];
				return C.filter(me => !N.includes(me.code))
			}

			function Je(C) {
				if (!!C) return `${C.charAt(0).toUpperCase()}${C.slice(1)}${C.charAt(C.length-1)==="."?"":"."}`
			}

			function Fe(C) {
				const N = {};
				for (const [me, Ce] of Object.entries(C)) {
					if (Ce && typeof Ce == "string") {
						Object.assign(N, {
							[me]: Ce.trim()
						});
						continue
					}
					Object.assign(N, {
						[me]: Ce
					})
				}
				return N
			}

			function Ke(C) {
				return u()(C).add(40, "days")
			}

			function H(C) {
				const N = C.paymentExpiresAt || C.payment_expires_at,
					me = Ke(N);
				return u()().isBetween(N, me)
			}

			function he(C) {
				var N;
				return !(C == null ? void 0 : C.registryStatuses) || !Array.isArray(C == null ? void 0 : C.registryStatuses) && !(0, e.isString)(C == null ? void 0 : C.registryStatuses) ? !1 : (N = C.registryStatuses) === null || N === void 0 ? void 0 : N.includes(n.rj.REDEMPTION_PERIOD)
			}

			function Se(C) {
				var N;
				return !(C == null ? void 0 : C.registryStatuses) || !Array.isArray(C == null ? void 0 : C.registryStatuses) && !(0, e.isString)(C == null ? void 0 : C.registryStatuses) ? !1 : (N = C.registryStatuses) === null || N === void 0 ? void 0 : N.includes(n.rj.PENDING_DELETE)
			}

			function We(C) {
				return [".us"].includes(C)
			}

			function pt(C) {
				return [".us"].includes(C)
			}

			function dt(C) {
				switch (C) {
					case ".us":
						return J();
					default:
						return []
				}
			}

			function Ae(C) {
				switch (C) {
					case ".us":
						return rt;
					default:
						return {}
				}
			}
			const rt = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function J() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([C, N]) => ({
						value: C,
						label: N
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([C, N]) => ({
						value: C,
						label: N
					}))
				}]
			}

			function ge(C, N, me) {
				return N[N.length - 1][me] === C[me]
			}

			function Te(C) {
				return Boolean(Object.keys(C).length === 0)
			}

			function Pe(C) {
				return u()().add(C, "year").format(O)
			}

			function Oe({
				accountName: C
			}) {
				var N;
				const me = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((N = C.toLowerCase().match(me)) === null || N === void 0 ? void 0 : N[0]) || ""
			}

			function Be(C) {
				return !!C.match(f.default.email)
			}

			function qe(C) {
				return C === i.W7.PENDING_UPDATE
			}

			function it(C) {
				return C ? Object.values(i.wR).filter(N => N !== i.wR.OFFBOARDED).includes(C) : !1
			}

			function gt(C) {
				return C ? [i.wR.LOCKED, i.wR.ONBOARDED, i.wR.ONBOARDING_INITIATED, i.wR.PENDING_REGISTRY_LOCK, i.wR.PENDING_REGISTRY_UNLOCK, i.wR.PENDING_UNLOCK_APPROVAL].includes(C) : !1
			}

			function Et(C) {
				return C ? i.wR.UNLOCKED === C : !1
			}

			function yt(C) {
				return C ? i.wR.LOCKED === C : !1
			}

			function Mt(C) {
				return C ? i.wR.PENDING_REGISTRY_LOCK === C : !1
			}

			function Ge(C) {
				return C ? [i.wR.PENDING_REGISTRY_UNLOCK, i.wR.PENDING_UNLOCK_APPROVAL].includes(C) : !1
			}

			function st(C) {
				var N;
				return !1
			}

			function at(C) {
				var N;
				return !1
			}

			function ct(C) {
				var N;
				return !1
			}

			function mt(C) {
				var N;
				return !1
			}

			function Ne(C) {
				var N;
				return !1
			}

			function Y(C) {
				return Object.keys(i.wR).find(N => i.wR[N].toLowerCase() === C.toLowerCase())
			}

			function le(C) {
				var N;
				const me = (N = Y(C)) === null || N === void 0 ? void 0 : N.toLowerCase();
				return me ? m.keys.protection_status[me] : m.keys.protection_status.unknown
			}

			function ye(C) {
				return ["com", "net"].includes(C)
			}

			function we(C) {
				const N = (0, c.pu)(C);
				return ye(N) ? i.wR.PENDING_REGISTRY_LOCK : i.wR.LOCKED
			}

			function Re(C) {
				return (0, c.pu)(C) === "co" ? 5 : 10
			}

			function Ye(C, N) {
				return N ? 1 : (0, c.pu)(C) === "co" ? 5 : (0, c.pu)(C) === "org" ? 1 : 10
			}

			function tt(C) {
				return (0, c.pu)(C) === "uk"
			}

			function wt(C) {
				return (0, c.pu)(C) === "us"
			}

			function _t(C) {
				return (0, c.pu)(C) === "ai"
			}

			function At(C) {
				return u()(C).isValid()
			}

			function Qe(C) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(C)
			}

			function ht(C) {
				return !!(C == null ? void 0 : C.id)
			}

			function Dt(C) {
				return C ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(C) : !1
			}

			function Pt(C) {
				return C ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(C) : !1
			}

			function Nt(C) {
				var N;
				return (C == null ? void 0 : C.lastKnownStatus) ? (N = C.lastKnownStatus) === null || N === void 0 ? void 0 : N.includes("deletionIrredeemable") : !1
			}

			function Lt(C) {
				switch (C) {
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

			function Rt(C) {
				if (!C || !C.message) return n.OJ.DEFAULT;
				const {
					message: N
				} = C;
				switch (!0) {
					case N.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case N.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case N.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function bt(C) {
				var N, me;
				return !!(((N = C.policies) === null || N === void 0 || (me = N.suspension) === null || me === void 0 ? void 0 : me.parked) && C.policies.suspension.parkingReason)
			}

			function xt(C) {
				var N, me;
				return bt(C) && ((N = C.policies) === null || N === void 0 || (me = N.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function Ct(C) {
				var N, me;
				return bt(C) && ((N = C.policies) === null || N === void 0 || (me = N.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function Bt(C) {
				var N;
				return !((N = C.domainMove) === null || N === void 0 ? void 0 : N.ineligibilityReasons.length)
			}

			function Ut(C) {
				var N, me;
				return !!((N = C.domainMove) === null || N === void 0 || (me = N.ineligibilityReasons) === null || me === void 0 ? void 0 : me.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Tt(C) {
				var N;
				return (N = C.actionableMetadata) === null || N === void 0 ? void 0 : N.find(me => me.type === n.wg.DOMAIN_MOVE)
			}

			function jt(C) {
				const N = Tt(C);
				return (N == null ? void 0 : N.status) === "pending" && N.accountContext === n._5.GAINING
			}

			function $t(C) {
				const N = Tt(C);
				return (N == null ? void 0 : N.status) === "pending" && N.accountContext === n._5.LOSING
			}

			function Wt(C) {
				const N = V(C.name);
				return !l.Pf.includes(N)
			}

			function St(C) {
				return l.QZ.includes(C)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Bc: function() {
					return l
				},
				HG: function() {
					return oe
				},
				Hv: function() {
					return Ie
				},
				JM: function() {
					return a
				},
				Pf: function() {
					return E
				},
				Py: function() {
					return f
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
					return ve
				},
				no: function() {
					return m
				},
				uY: function() {
					return c
				},
				ui: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../flags.ts");
			const a = "Unknown",
				u = "unknown",
				i = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				f = Object.keys(i),
				c = !0,
				l = (0, r.J8)("registrar_mock_transfer_out") || !1,
				m = (0, r.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				o = "cf_registrar.enabled",
				s = "@abcABC1234567890123456",
				E = [".us"],
				d = [".travel", ".us", ".ong", ".ngo"],
				p = (0, e.BC)`/${"accountId"}`,
				h = (0, e.BC)`${p}/add-site`,
				O = (0, e.BC)`${p}/registrar`,
				v = (0, e.BC)`${O}/domains`,
				g = (0, e.BC)`${O}/action-center`,
				b = (0, e.BC)`${O}/domain/${"zoneName"}`,
				_ = (0, e.BC)`${b}/configuration`,
				T = (0, e.BC)`${b}/contacts`,
				A = (0, e.BC)`${O}/pricing`,
				L = (0, e.BC)`${O}/protection`,
				M = (0, e.BC)`${O}/register`,
				x = (0, e.BC)`${M}/checkout`,
				w = (0, e.BC)`${M}/checkout/${"token"}`,
				S = (0, e.BC)`${M}/success`,
				j = (0, e.BC)`${O}/tlds`,
				W = (0, e.BC)`${O}/transfer`,
				G = (0, e.BC)`${O}/transfer/${"zoneName"}`,
				ne = (0, e.BC)`/registrar/accounts/verify_email`,
				q = (0, e.BC)`/registrar/domains/verify_email`,
				re = (0, e.BC)`/sign-up/registrar`,
				F = (0, e.BC)`${O}/verify-email`,
				z = (0, e.BC)`${p}/${"zoneName"}`,
				D = (0, e.BC)`${p}/domains`,
				U = (0, e.BC)`${D}/action-center`,
				I = (0, e.BC)`${D}/${"zoneName"}`,
				P = (0, e.BC)`${I}/configuration`,
				B = (0, e.BC)`${I}/contacts`,
				X = (0, e.BC)`${D}/pricing`,
				ee = (0, e.BC)`${D}/protection`,
				ce = (0, e.BC)`${D}/register`,
				R = (0, e.BC)`${ce}/checkout`,
				V = (0, e.BC)`${ce}/checkout/${"token"}`,
				k = (0, e.BC)`${ce}/success`,
				Z = (0, e.BC)`${D}/tlds`,
				ie = (0, e.BC)`${D}/transfer`,
				pe = (0, e.BC)`${D}/transfer/${"zoneName"}`,
				de = (0, e.BC)`${D}/verify-email`,
				ve = {
					addSite: h,
					domains: v,
					domainsActionCenter: g,
					domainsDomain: b,
					domainsDomainConfiguration: _,
					domainsDomainContacts: T,
					domainsPricing: A,
					domainsProtection: L,
					domainsRegister: M,
					domainsRegisterCheckout: x,
					domainsRegisterCheckoutToken: w,
					domainsRegisterSuccess: S,
					domainsTlds: j,
					domainsTransfer: W,
					domainsTransferZone: G,
					registrar: O,
					registrarAccountsVerifyEmail: ne,
					registrarDomainsVerifyEmail: q,
					signup: re,
					verifyEmail: F,
					zone: z
				},
				oe = {
					LEGACY_domains: D,
					LEGACY_domainsActionCenter: U,
					LEGACY_domainsDomain: I,
					LEGACY_domainsDomainConfiguration: P,
					LEGACY_domainsDomainContacts: B,
					LEGACY_domainsPricing: X,
					LEGACY_domainsProtection: ee,
					LEGACY_domainsRegister: ce,
					LEGACY_domainsRegisterCheckout: R,
					LEGACY_domainsRegisterCheckoutToken: V,
					LEGACY_domainsRegisterSuccess: k,
					LEGACY_domainsTlds: Z,
					LEGACY_domainsTransfer: ie,
					LEGACY_domainsTransferZone: pe,
					LEGACY_verifyEmail: de
				},
				Ie = {
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
					return l
				},
				ZQ: function() {
					return u
				},
				b_: function() {
					return f
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");
			const a = m => {
					const n = m && m.accountFlags && m.accountFlags.data && m.accountFlags.data.registrar && m.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(o => o.trim()) : []
				},
				u = m => {
					var n, o, s;
					return ((n = m.accountFlags) === null || n === void 0 || (o = n.data) === null || o === void 0 || (s = o.registrar) === null || s === void 0 ? void 0 : s["registrar-managed"]) || !1
				},
				i = m => m.account ? m.account.email : "",
				f = m => !1,
				c = m => f(m) && (0, e.oJ)((0, e.Zu)(m)),
				l = m => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: o
					} = m.registrar.registrations;
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
				u = t.n(a),
				i = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function f(s) {
				for (var E = 1; E < arguments.length; E++) {
					var d = arguments[E] != null ? Object(arguments[E]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(h) {
						return Object.getOwnPropertyDescriptor(d, h).enumerable
					})), p.forEach(function(h) {
						c(s, h, d[h])
					})
				}
				return s
			}

			function c(s, E, d) {
				return E = l(E), E in s ? Object.defineProperty(s, E, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[E] = d, s
			}

			function l(s) {
				var E = m(s, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function m(s, E) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(s, E || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(s)
			}
			let n = function(s) {
				return s.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", s.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", s.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", s.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", s.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", s.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", s.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", s.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", s.RENEW_DOMAIN_COMPLETED = "domain renewal completed", s.RESTORE_DOMAIN_INIT = "click to open domain restore modal", s.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", s.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", s.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", s.RESTORE_DOMAIN_FAILURE = "domain restore failed", s.RESTORE_DOMAIN_COMPLETED = "domain restore completed", s.DOMAIN_DELETE_INIT = "click to begin domain delete", s.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", s.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", s.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", s.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", s.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", s.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", s.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", s.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", s.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", s.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", s.DOMAIN_MOVE_START_FLOW = "Start domain move flow", s.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", s.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", s.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", s.DOMAIN_MOVE_SUBMIT = "Submit domain move", s.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", s.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", s.DOMAIN_MOVE_CANCEL = "Domain move cancel", s.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", s.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", s.ACTION_CENTER_NAVIGATE = "Navigate to actions center", s.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", s.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", s.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", s
			}({});

			function o(s, E, d) {
				if (!(E == null ? void 0 : E.name)) return null;
				u().sendEvent(s, f({
					domain: {
						name: E.name,
						premium: (0, i.Uy)(E == null ? void 0 : E.premiumType),
						paymentExpiresAt: r()(E == null ? void 0 : E.paymentExpiresAt).format()
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
					return v
				},
				Rh: function() {
					return p
				},
				hX: function() {
					return E
				},
				s_: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				i = t("../react/utils/translator.tsx"),
				f = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts");
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

			function m(g) {
				return {
					key: "com.cloudflare.edge.worker.script." + g.id,
					name: g.name + (g.environment ? ` (${g.environment})` : ""),
					type: c.WORKERS
				}
			}

			function n(g) {
				const b = g;
				return {
					key: "com.cloudflare.edge.access.app." + b.id,
					name: b.name,
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

			function s(g) {
				const b = g,
					_ = o[b.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + b.id,
					name: `${_||"Unknown Type"}${b.name?" - "+b.name:""}`,
					type: c.ACCESS_IDP
				}
			}
			const E = async (g, b, _) => b == c.WORKERS ? (await d(`/accounts/${g}/workers/scripts-search?name=${_}&perPage=10`)).body.result.map(T => ({
				id: T.id,
				name: T.service_name || T.script_name,
				environment: T.environment_name
			})).map(m) : b == c.ACCESS_APPS ? (await d(`/accounts/${g}/access/apps?name=${_}`)).body.result.map(n) : b == c.ACCESS_IDP ? (await d(`/accounts/${g}/access/identity_providers`)).body.result.map(s) : [];
			async function d(g) {
				try {
					return await (0, e.get)(g, {
						hideErrorAlert: !0
					})
				} catch (T) {
					var b, _;
					throw ((b = T.body) === null || b === void 0 ? void 0 : b.errors) ? T.body.errors[0].message : T.text ? T.text : ((_ = T.response) === null || _ === void 0 ? void 0 : _.statusText) ? T.response.statusText : "Unexpected error response"
				}
			}
			const p = async (g, b) => {
				const _ = b.split("."),
					T = _.pop(),
					A = _.join(".");
				let L;
				switch (A) {
					case "com.cloudflare.edge.worker.script":
						const M = (await d(`/accounts/${g}/workers/scripts-search/${T}`)).body.result;
						return m({
							id: M.id,
							name: M.service_name || M.script_name,
							environment: M.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return L = await d(`/accounts/${g}/access/identity_providers/${T}`), s(L.body.result);
					case "com.cloudflare.edge.access.app":
						return L = await d(`/accounts/${g}/access/apps/${T}`), n(L.body.result)
				}
			}, h = {
				loading: !0,
				isDisabled: !0
			}, O = () => "production";

			function v(g) {
				const [b] = (0, f.k)(g), [_, T] = (0, a.useState)(!0), [A, L] = (0, a.useState)(l.filter(M => b == null ? void 0 : b.find(x => x.meta.scopes === M.scopeKeyPrefix)).map(M => {
					const x = M.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
						w = b == null ? void 0 : b.filter(S => S.meta.scopes === M.scopeKeyPrefix).find(S => !S.meta.visibility || S.meta.visibility !== "beta");
					return {
						value: M.value,
						label: (0, i.ZP)(M.label_i18n),
						state: x ? h : {
							loading: !1,
							isDisabled: !1
						},
						beta: !w
					}
				}));
				return (0, a.useEffect)(() => {
					(async () => {
						try {
							await E(g, c.ACCESS_APPS, ""), h.isDisabled = !1
						} catch (M) {
							M.startsWith("access.api.error.not_enabled") ? h.disableInfo = (0, i.ZP)("policy.granular_resources.type.access.not_enabled") : h.error = M
						}
						h.loading = !1, L([...A])
					})()
				}, []), (0, a.useEffect)(() => {
					const M = A.find(x => x.state.loading);
					T(!!M)
				}, [A]), {
					types: A,
					isLoading: _
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Ey: function() {
					return m
				},
				F4: function() {
					return h
				},
				Go: function() {
					return E
				},
				Lc: function() {
					return T
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
					return _
				},
				Sz: function() {
					return b
				},
				Ti: function() {
					return A
				},
				Uw: function() {
					return v
				},
				Zl: function() {
					return O
				},
				jk: function() {
					return g
				},
				r6: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/members`,
				u = (0, e.BC)`${a}/invite`,
				i = (0, e.BC)`${a}/invite/${"memberId"}`,
				f = (0, e.BC)`${a}/add-policy/${"memberId"}`,
				c = (0, e.BC)`${a}/user-groups`,
				l = (0, e.BC)`${a}/user-groups/${"userGroupId"}`,
				m = "com.cloudflare.api.account",
				o = m + "." + "zone",
				s = o + ".",
				E = 100,
				d = 200,
				p = 5,
				h = 300,
				O = "INVITE_TOAST",
				v = "00000000000000000000000000000000",
				g = {
					account: r,
					members: a,
					groups: c,
					group: l,
					inviteMembers: u,
					editMember: i,
					addPolicy: f
				},
				b = {
					allow: "allow",
					deny: "deny"
				},
				_ = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				T = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				A = {
					accountId: "",
					effect: b.allow,
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
					return l
				},
				SH: function() {
					return m
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
						E = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), E.forEach(function(d) {
						u(n, d, s[d])
					})
				}
				return n
			}

			function u(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = f(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var E = s.call(n, o || "default");
					if (typeof E != "object") return E;
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
					r().sendEvent(n, a({}, o || {}))
				},
				m = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/home/members/utils.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return g
				},
				Co: function() {
					return O
				},
				Hf: function() {
					return M
				},
				JP: function() {
					return v
				},
				LX: function() {
					return S
				},
				Ld: function() {
					return s
				},
				YW: function() {
					return l
				},
				_k: function() {
					return E
				},
				c$: function() {
					return m
				},
				rC: function() {
					return w
				},
				vq: function() {
					return L
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				r = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				a = t("../react/pages/home/members/constants.ts");

			function u(W) {
				for (var G = 1; G < arguments.length; G++) {
					var ne = arguments[G] != null ? Object(arguments[G]) : {},
						q = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(ne).filter(function(re) {
						return Object.getOwnPropertyDescriptor(ne, re).enumerable
					})), q.forEach(function(re) {
						i(W, re, ne[re])
					})
				}
				return W
			}

			function i(W, G, ne) {
				return G = f(G), G in W ? Object.defineProperty(W, G, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[G] = ne, W
			}

			function f(W) {
				var G = c(W, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function c(W, G) {
				if (typeof W != "object" || W === null) return W;
				var ne = W[Symbol.toPrimitive];
				if (ne !== void 0) {
					var q = ne.call(W, G || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(W)
			}
			const l = () => u({}, a.Ti),
				m = () => u({}, a.Lc, {
					scopes: [l()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = W => W.map(G => ({
					scope: {
						key: G,
						objects: [{
							key: "*"
						}]
					}
				})),
				o = (W, G, ne) => {
					var q;
					let re = [],
						F = [];
					const z = [],
						D = [];
					W.scopes.forEach(P => {
						if (P.mode === a.Sw.all) ne ? re.push({
							id: ne
						}) : re.push({
							scope: {
								key: `com.cloudflare.api.account.${G}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (P.mode === a.Sw.domain_group) {
							const X = {
								id: P.resourceGroupId
							};
							P.effect === a.Sz.allow ? re.push(X) : F.push(X)
						} else if (P.mode === a.Sw.zone) {
							const X = `${a.Rl}${P.zoneId}`;
							P.effect === a.Sz.allow ? z.push(X) : D.push(X)
						} else if (P.mode === a.Sw.granular && P.granularResourceKey) {
							var B;
							const X = P.granularProduct,
								ce = `${(B=r.s_.find(R=>R.value===X))===null||B===void 0?void 0:B.scopeSubsetOfPrefix}.${G}`;
							re.push({
								scope: {
									key: `${P.granularResourceKey}`,
									subset_of: [{
										key: `${ce}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), z.length && (re = re.concat(n(z))), D.length && (F = F.concat(n(D)));
					const U = (q = W.permission_groups) === null || q === void 0 ? void 0 : q.map(P => ({
							id: P
						})),
						I = [];
					return I.push({
						access: a.Sz.allow,
						permission_groups: U,
						resource_groups: re
					}), F.length && I.push({
						access: a.Sz.deny,
						permission_groups: U,
						resource_groups: F
					}), I
				},
				s = W => W.map(G => {
					var ne;
					return {
						access: G.access,
						permission_groups: G.permission_groups.map(q => ({
							id: q.id
						})),
						resource_groups: (ne = G.resource_groups) === null || ne === void 0 ? void 0 : ne.map(q => ({
							scope: {
								key: q.scope.key,
								objects: q.scope.objects
							},
							id: q.id
						}))
					}
				}),
				E = (W, G, ne, q) => {
					const re = W.auto_accept;
					let F = [];
					return F = F.concat(o(W, G, ne)), q && (F = F.concat(s(q))), {
						auto_accept: re,
						status: re ? "accepted" : "pending",
						policies: F
					}
				},
				d = W => {
					const G = W.split(".");
					return G[G.length - 1]
				},
				p = W => {
					var G, ne;
					const q = W == null ? void 0 : W.access;
					let re = [],
						F = W == null || (G = W.resource_groups) === null || G === void 0 ? void 0 : G.map(z => {
							var D;
							const U = h(z);
							if ((z == null || (D = z.meta) === null || D === void 0 ? void 0 : D.editable) === "false") return {
								effect: q,
								mode: a.Sw.all,
								accountId: d(z.id)
							};
							if (U) {
								var I;
								return {
									effect: q,
									mode: a.Sw.granular,
									granularProduct: U.value,
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
					if ((ne = re) === null || ne === void 0 ? void 0 : ne.length) {
						let z = re.map(D => {
							const U = d(D.key);
							return {
								effect: q,
								mode: a.Sw.zone,
								zoneId: U
							}
						});
						F = F.length ? z.concat(F) : z
					}
					return F
				},
				h = W => {
					var G, ne, q, re;
					const F = W == null || (G = W.scope) === null || G === void 0 ? void 0 : G.key.split(".").slice(0, -1).join("."),
						z = W == null || (ne = W.scope) === null || ne === void 0 || (q = ne.subset_of) === null || q === void 0 || (re = q[0]) === null || re === void 0 ? void 0 : re.key.split(".").slice(0, -1).join(".");
					return r.s_.find(D => D.scopeKeyPrefix === F && D.scopeSubsetOfPrefix === z)
				},
				O = W => {
					if (!(W == null ? void 0 : W.length)) return [];
					const G = [];
					return W.forEach(ne => {
						var q;
						(q = ne.resource_groups) === null || q === void 0 || q.forEach(re => {
							var F, z;
							((F = re.scope) === null || F === void 0 || (z = F.key) === null || z === void 0 ? void 0 : z.startsWith(a.Rl)) && G.push(d(re.scope.key))
						})
					}), G
				},
				v = W => {
					if (!(W == null ? void 0 : W.length)) return [];
					const G = [];
					return W.forEach(ne => {
						var q;
						(q = ne.resource_groups) === null || q === void 0 || q.forEach(re => {
							var F, z;
							if (!((F = re.scope) === null || F === void 0 || (z = F.key) === null || z === void 0 ? void 0 : z.startsWith(a.Rl))) {
								var D;
								const I = (D = re.scope) === null || D === void 0 ? void 0 : D.objects;
								for (let P = 0; P < (I == null ? void 0 : I.length) && P < a.r6; P++) {
									var U;
									((U = I[P].key) === null || U === void 0 ? void 0 : U.startsWith(a.Rl)) && G.push(d(I[P].key))
								}
							}
						})
					}), G
				},
				g = W => {
					var G;
					if (!(W == null ? void 0 : W.length)) return null;
					const ne = (G = W[0]) === null || G === void 0 ? void 0 : G.permission_groups.map(z => z.id);
					let q, re;
					W == null || W.forEach(z => {
						z.access === a.Sz.allow && (q = z), z.access === a.Sz.deny && (re = z)
					});
					let F = [];
					return q && (F = p(q)), re && (F = F.concat(p(re))), {
						permission_groups: ne,
						scopes: F
					}
				},
				b = "permission-groups-",
				_ = "permission-groups-expiring-",
				T = 1 * 24 * 60 * 60,
				A = new Map,
				L = W => x(b, W),
				M = W => x(_, W),
				x = (W, G) => {
					if (!G) return [];
					const ne = A.get(G);
					if (ne) return ne;
					const q = e.E.get(`${W}${G}`);
					return q ? (A.set(G, q), q) : []
				},
				w = (W, G) => j(b, W, G),
				S = (W, G) => j(_, W, G),
				j = (W, G, ne) => {
					const q = [];
					for (let F = 0; F < sessionStorage.length; F++) {
						const z = sessionStorage.key(F);
						(z == null ? void 0 : z.startsWith(W)) && q.push(z)
					}
					q.length >= 5 && e.E.remove(q[0]);
					let re;
					return W === _ && (re = T), e.E.set(`${W}${G}`, ne, re)
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
					return m
				},
				zE: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(o) {
				for (var s = 1; s < arguments.length; s++) {
					var E = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(E).filter(function(p) {
						return Object.getOwnPropertyDescriptor(E, p).enumerable
					})), d.forEach(function(p) {
						u(o, p, E[p])
					})
				}
				return o
			}

			function u(o, s, E) {
				return s = i(s), s in o ? Object.defineProperty(o, s, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = E, o
			}

			function i(o) {
				var s = f(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(o, s) {
				if (typeof o != "object" || o === null) return o;
				var E = o[Symbol.toPrimitive];
				if (E !== void 0) {
					var d = E.call(o, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}
			let c = function(o) {
					return o.PURCHASE_WORKERS_PAID = "navigate to workers plan page", o.LIST_CONFIGS = "list hyperdrive configs", o.SEARCH_CONFIGS = "search hyperdrive configs", o.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", o.VIEW_CONFIG_DETAILS = "view hyperdrive config details", o.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", o.UPDATE_ORIGIN_CONN_LIM_SETTINGS = "update hyperdrive config origin connection limit settings", o.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", o.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", o.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", o.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", o.CLICK_QUICK_LINK = "click hyperdrive quick link", o.CLICK_DISCORD = "click hyperdrive discord", o.CLICK_COMMUNITY = "click hyperdrive community", o
				}({}),
				l = function(o) {
					return o[o["connection string"] = 0] = "connection string", o[o.manual = 1] = "manual", o
				}({}),
				m = function(o) {
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
					return O
				},
				imagesEndpoints: function() {
					return oe
				},
				vQ: function() {
					return L
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function r(Ie) {
				for (var Le = 1; Le < arguments.length; Le++) {
					var Me = arguments[Le] != null ? Object(arguments[Le]) : {},
						je = Object.keys(Me);
					typeof Object.getOwnPropertySymbols == "function" && je.push.apply(je, Object.getOwnPropertySymbols(Me).filter(function(xe) {
						return Object.getOwnPropertyDescriptor(Me, xe).enumerable
					})), je.forEach(function(xe) {
						a(Ie, xe, Me[xe])
					})
				}
				return Ie
			}

			function a(Ie, Le, Me) {
				return Le = u(Le), Le in Ie ? Object.defineProperty(Ie, Le, {
					value: Me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Ie[Le] = Me, Ie
			}

			function u(Ie) {
				var Le = i(Ie, "string");
				return typeof Le == "symbol" ? Le : String(Le)
			}

			function i(Ie, Le) {
				if (typeof Ie != "object" || Ie === null) return Ie;
				var Me = Ie[Symbol.toPrimitive];
				if (Me !== void 0) {
					var je = Me.call(Ie, Le || "default");
					if (typeof je != "object") return je;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Le === "string" ? String : Number)(Ie)
			}
			const f = (0, e.BC)`/${"accountId"}/images`,
				c = (0, e.BC)`${f}/images`,
				l = (0, e.BC)`${f}/variants`,
				m = (0, e.BC)`${f}/keys`,
				n = (0, e.BC)`${f}/bundle-checkout-success`,
				o = (0, e.BC)`${c}/${"imageId"}`,
				s = (0, e.BC)`${c}/detail`,
				E = (0, e.BC)`${c}/edit`,
				d = (0, e.BC)`${l}/create`,
				p = (0, e.BC)`${l}/edit/${"variantId"}`,
				h = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				O = (0, e.BC)`${f}/sourcing-kit`,
				v = (0, e.BC)`${f}/delivery-zones`,
				g = (0, e.BC)`${v}/${"zoneId"}/settings`,
				b = (0, e.BC)`${f}/plans`,
				_ = (0, e.BC)`${f}/manage-plan`,
				T = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				A = {
					root: f,
					images: c,
					variants: l,
					keys: m,
					legacyImageDetailPage: o,
					imageDetailPage: s,
					imageEditPage: E,
					bundleCheckoutSuccess: n,
					variantCreatePage: d,
					variantEditPage: p,
					sourcingKit: O,
					subscriptions: h,
					deliveryZones: v,
					deliveryZoneSettings: g,
					plansPage: b,
					managePlan: _
				},
				L = r({}, A, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: T
				}),
				M = (0, e.BC)`/accounts/${"accountId"}`,
				x = (0, e.BC)`${M}/images/v2`,
				w = (0, e.BC)`/zones/${"zoneId"}`,
				S = (0, e.BC)`${x}/sourcingkit`,
				j = (0, e.BC)`${S}/migrations`,
				W = (0, e.BC)`${S}/migrations/${"migrationId"}`,
				G = (0, e.BC)`${S}/migrations/${"migrationId"}/logs`,
				ne = (0, e.BC)`${S}/migrations/${"migrationId"}/lifecycle/start`,
				q = (0, e.BC)`${S}/migrations/${"migrationId"}/lifecycle/abort`,
				re = (0, e.BC)`${S}/migrations/${"migrationId"}/lifecycle`,
				F = (0, e.BC)`${S}/sources`,
				z = (0, e.BC)`${S}/sources/${"sourceId"}`,
				D = (0, e.BC)`${S}/sources/${"sourceId"}/connectivity`,
				U = (0, e.BC)`${S}/sources/connectivity_precheck`,
				I = (0, e.BC)`/zones?account.id=${"accountId"}`,
				P = {
					migrationList: j,
					migration: W,
					migrationLogs: G,
					sourceList: F,
					migrationStart: ne,
					migrationAbort: q,
					migrationProgress: re,
					source: z,
					sourceConnectivityCheck: D,
					sourceConnectivityPreCheck: U
				},
				B = (0, e.BC)`/billing/upgrade-subscription`,
				X = (0, e.BC)`${M}/settings/transformations`,
				ee = (0, e.BC)`${w}/settings/transformations`,
				ce = (0, e.BC)`${w}/settings/transformations_allowed_origins`,
				R = (0, e.BC)`${w}/settings/transformations_c2pa`,
				V = (0, e.BC)`${M}/settings/ut-billing`,
				k = (0, e.BC)`${w}`,
				Z = (0, e.BC)`${w}/entitlements`,
				ie = (0, e.BC)`${w}/settings`,
				pe = (0, e.BC)`${w}/flags`,
				de = (0, e.BC)`${w}/subscription`,
				oe = {
					sourcingKitEndpoints: P,
					deliveryZonesEndpoints: {
						transformationsConfigList: X,
						transformationsZoneConfig: ee,
						allowedOriginsZoneConfig: ce,
						preserveContentCredentialsZoneConfig: R,
						upgradeSubscription: B,
						utBillingConfig: V
					},
					zones: {
						zones: I,
						zoneDetail: k,
						zoneSettings: ie,
						zoneEntitlements: Z,
						zoneFlags: pe,
						zoneSubscription: de
					}
				}
		},
		"../react/pages/images/selectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return u
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
					return f
				},
				ib: function() {
					return p
				},
				lW: function() {
					return O
				},
				pT: function() {
					return o
				},
				po: function() {
					return E
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const u = "sourcing_kit_enabled",
				i = "sourcing_kit_waitlist",
				f = "images",
				c = "unified_images_enabled",
				l = "c2pa_polish",
				m = "CloudflareImages",
				n = v => !!(0, r.BF)(v, "images.transformations_enabled"),
				o = v => Boolean((0, r.BF)(v, "images.enabled")),
				s = v => {
					const g = (0, r.BF)(v, "images.storage");
					return typeof g == "number" && g > 0
				},
				E = v => Boolean((0, r.BF)(v, "contract.customer_enabled")),
				d = v => Boolean((0, e.oI)(v, f, u)),
				p = v => Boolean((0, a.Le)(v, m, u)),
				h = v => Boolean(getAccountFlipperFlag(v, m, c)),
				O = v => Boolean((0, a.Le)(v, m, l))
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
					return f
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
				i = "internal-dns",
				f = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_3V6auNfVdQDWthk"
		},
		"../react/pages/magic/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				GF: function() {
					return E
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
					return l
				},
				UQ: function() {
					return O
				},
				Up: function() {
					return u
				},
				W8: function() {
					return m
				},
				Ws: function() {
					return v
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
					return h
				},
				rF: function() {
					return f
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
				i = g => [{
					value: "low",
					label: g("setting.low")
				}, {
					value: "mid",
					label: g("setting.medium")
				}, {
					value: "high",
					label: g("setting.high")
				}],
				f = g => [{
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
				m = "magic-wan",
				n = "gre_tunnel",
				o = "ipsec_tunnel",
				s = "interconnect",
				E = 64,
				d = 1476,
				p = "mid",
				h = "reply",
				O = g => [{
					value: void 0,
					label: g("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: g("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: g("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				v = g => [{
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
		"../react/pages/magic/network-monitoring/constants.ts": function(K, y, t) {
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
		"../react/pages/magic/overview/tracking.ts": function(K, y, t) {
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
				u = {
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
					return L
				},
				xL: function() {
					return v
				},
				rD: function() {
					return x
				},
				oT: function() {
					return d
				},
				i2: function() {
					return w
				},
				x1: function() {
					return f
				},
				lW: function() {
					return l
				},
				UA: function() {
					return T
				},
				K5: function() {
					return s
				},
				Ii: function() {
					return b
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
				i = t("../node_modules/@cloudflare/elements/es/index.js");
			const f = () => r().createElement(c, null, r().createElement("svg", {
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
					theme: S
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
				l = () => r().createElement(m, null, r().createElement("svg", {
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
				m = (0, a.createComponent)(({
					theme: S
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
					src: u,
					width: "85%"
				})),
				o = (0, a.createComponent)(({
					theme: S
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
				s = () => r().createElement(E, null, r().createElement("svg", {
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
				E = (0, a.createComponent)(({
					theme: S
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
					theme: S
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
				h = () => r().createElement(O, null, r().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				O = (0, a.createComponent)(({
					theme: S
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
				v = () => r().createElement(g, null, r().createElement("svg", {
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
				g = (0, a.createComponent)(({
					theme: S
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
				b = () => r().createElement(_, null, r().createElement("svg", {
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
				_ = (0, a.createComponent)(({
					theme: S
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
				T = () => r().createElement(A, null, r().createElement("svg", {
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
					theme: S
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
				L = () => r().createElement("svg", {
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
				x = () => r().createElement("svg", {
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
				w = () => r().createElement("svg", {
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
					return f
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
				i = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				f = l => [{
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
		"../react/pages/page-rules/tracking.ts": function(K, y, t) {
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
			let a = function(i) {
				return i.TEMPLATE_SELECTED = "template selected", i.TEMPLATE_PRODUCT_SELECTED = "template product selected", i.TEMPLATE_SAVE_DRAFT = "template save draft", i.TEMPLATE_CANCEL = "template cancel", i.TEMPLATE_DEPLOY = "template deploy", i
			}({});
			const u = (i, f) => r().sendEvent(i, {
				template_name: f
			})
		},
		"../react/pages/pages/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				A: function() {
					return h
				},
				C1: function() {
					return m
				},
				GF: function() {
					return x
				},
				HD: function() {
					return g
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
					return q
				},
				QV: function() {
					return T
				},
				Sx: function() {
					return b
				},
				Ub: function() {
					return ne
				},
				X3: function() {
					return o
				},
				bA: function() {
					return S
				},
				eO: function() {
					return s
				},
				fH: function() {
					return d
				},
				fQ: function() {
					return O
				},
				fR: function() {
					return e
				},
				ff: function() {
					return w
				},
				iS: function() {
					return v
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
					return E
				},
				yu: function() {
					return n
				},
				zF: function() {
					return M
				},
				zG: function() {
					return L
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
				i = 58,
				f = {
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
				m = 100,
				n = 350,
				o = 1e7,
				s = ["Success:", "Error:", "Failed:"],
				E = 10,
				d = "_headers",
				p = "_redirects",
				h = "_routes.json",
				O = "_worker.js",
				v = "do-a-barrel-roll",
				g = [d, p, h, O],
				b = 1024 * 1024 * 25,
				_ = 1e3,
				T = {
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
				L = 75e3,
				M = 2e5,
				x = 15e4,
				w = 3e3,
				S = 2250,
				j = "workers",
				W = "cloudflare_pages_build_caching",
				G = 2;
			let ne = function(z) {
				return z[z.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", z[z.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", z[z.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", z[z.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", z[z.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", z[z.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", z
			}({});
			const q = 1,
				re = 2,
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
				u = f => `${f.subdomain}.pages.dev`,
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
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						E = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), E.forEach(function(d) {
						u(n, d, s[d])
					})
				}
				return n
			}

			function u(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = f(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var E = s.call(n, o || "default");
					if (typeof E != "object") return E;
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
			const m = (n, o = {}) => {
				r().sendEvent(n, a({}, o, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/profile/tracking.ts": function(K, y, t) {
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
		"../react/pages/r2/routes.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return a
				},
				Jg: function() {
					return f
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
				i = (c, l) => {
					const m = u(l);
					return `https://${c}.${m}`
				},
				f = (c, l, m) => `${i(c,l)}/${m}`
		},
		"../react/pages/secrets-store/resources/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Hf: function() {
					return A
				},
				JJ: function() {
					return f
				},
				Js: function() {
					return u
				},
				LN: function() {
					return p
				},
				Nm: function() {
					return s
				},
				Oh: function() {
					return O
				},
				Q2: function() {
					return M
				},
				QF: function() {
					return h
				},
				RR: function() {
					return g
				},
				T_: function() {
					return L
				},
				Xm: function() {
					return c
				},
				Zl: function() {
					return x
				},
				dv: function() {
					return i
				},
				fp: function() {
					return o
				},
				jx: function() {
					return T
				},
				nQ: function() {
					return E
				},
				px: function() {
					return v
				},
				tP: function() {
					return a
				},
				vh: function() {
					return d
				},
				wB: function() {
					return S
				},
				z3: function() {
					return w
				},
				zt: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/yup/es/index.js");
			const a = "secrets-store-account-level",
				u = "https://developers.cloudflare.com/secrets-store/",
				i = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				f = 1,
				c = 10,
				l = 100;
			let m = function(j) {
					return j.NAME = "name", j
				}({}),
				n = function(j) {
					return j.NAME = "name", j
				}({});
			const o = {
				initialPaginationState: {
					page: f,
					perPage: c
				},
				initialSortState: {
					name: m.NAME,
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
			let s = function(j) {
					return j.NAME = "name", j.COMMENT = "comment", j.TAGS = "tags", j.SERVICES = "services", j.STATUS = "status", j
				}({}),
				E = function(j) {
					return j.PENDING = "pending", j.ACTIVE = "active", j.DELETED = "deleted", j
				}({}),
				d = function(j) {
					return j.LIST_SECRETS_STORES = "listSecretsStores", j.LIST_SECRETS = "listSecrets", j.GET_SECRET = "getSecret", j.SECRETS_QUOTA = "secretsQuota", j
				}({}),
				p = function(j) {
					return j.CREATE = "create", j.EDIT = "edit", j.DUPLICATE = "duplicate", j
				}({}),
				h = function(j) {
					return j.WORKERS = "workers", j
				}({});
			const O = "default_secrets_store";
			let v = function(j) {
				return j.CREATE = "create", j.EDIT = "edit", j.DUPLICATE = "duplicate", j.VIEW = "view", j
			}({});
			const g = "delete_operation",
				b = /^[a-zA-Z0-9_-]+$/,
				_ = (j, W, G, ne, q) => r.Ry().shape({
					name: r.Z_().required(j("secrets_store.form.create.errors.name.required")).matches(b, j("secrets_store.form.create.errors.name.invalid_characters")).max(255, j("secrets_store.form.create.errors.name.max")),
					value: r.Z_().test("required-if-creating", j("secrets_store.form.create.errors.value.required"), re => W || q ? !!re : !0).max(1024, j("secrets_store.form.create.errors.value.max")),
					comment: r.Z_().max(1024, j("secrets_store.form.create.errors.comment.max")),
					scopes: r.Z_().required().oneOf(Object.values(h), j("secrets_store.form.create.errors.scopes.invalid")),
					labels: r.IX().of(r.Z_())
				}),
				T = (j, W, G, ne, q) => r.Ry().shape({
					secrets: r.IX().of(_(j, W, G, ne, q))
				}),
				A = {
					name: "",
					value: "",
					scopes: h.WORKERS,
					comment: ""
				},
				L = "secrets-store.store.secret";
			let M = function(j) {
				return j.DUPLICATE = "duplicate", j.DEPLOY = "deploy", j
			}({});
			const x = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let w = function(j) {
					return j.CREATE_SECRET = "create secrets store secret", j.EDIT_SECRET = "edit secrets store secret", j.DUPLICATE_SECRET = "duplicate secrets store secret", j.DELETE_SECRET = "delete secrets store secret", j.BIND_SECRET = "open secrets store binding drawer", j
				}({}),
				S = function(j) {
					return j.SECRETS_STORE = "secrets store main", j.WORKERS_BINDING = "workers binding drawer", j
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
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				DC: function() {
					return E
				},
				Ff: function() {
					return c
				},
				Lz: function() {
					return s
				},
				RM: function() {
					return m
				},
				Ss: function() {
					return o
				},
				dR: function() {
					return i
				},
				gW: function() {
					return f
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
				a = t("../react/pages/security/analytics/resources/labels.ts");
			const u = ["block", "challenge", "jschallenge", "managed_challenge"],
				i = {
					label: "security_analytics.filters.mitigated",
					parse: d => d === "true" || d === !0,
					urlParam: "mitigated",
					type: e.kE.select,
					options: [!0, !1],
					operators: [r.Gn.equals, r.Gn.notEquals],
					rawLogField: "securityAction"
				},
				f = {
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
			let l = function(d) {
				return d.MITIGATED_BY_WAF = "mitigatedByWAF", d.SERVED_BY_CLOUDFLARE = "servedByCloudflare", d.SERVED_BY_ORIGIN = "servedByOrigin", d
			}({});
			const m = {
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
			let E = function(d) {
				return d.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', d.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', d.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', d.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', d.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', d.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", d.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", d.OPEN_SIDE_DRAWER = "open security analytics side drawer", d.CLOSE_SIDE_DRAWER = "close security analytics side drawer", d
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Fj: function() {
					return l
				},
				kq: function() {
					return c
				},
				xr: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						E = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), E.forEach(function(d) {
						u(n, d, s[d])
					})
				}
				return n
			}

			function u(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = f(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var E = s.call(n, o || "default");
					if (typeof E != "object") return E;
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
				m = ({
					name: n,
					category: o = "user journey",
					product: s = c.MAIN,
					productName: E,
					additionalData: d
				}) => {
					r().sendEvent(n, a({
						category: o,
						product: s,
						productName: E
					}, d || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(K, y, t) {
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
			let e = function(i) {
					return i.INITIAL_FETCH_SCORES = "view bots scores distribution", i.FETCH_CONFIGURATION = "view bots configuration page", i.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", i.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", i.UPDATE_SETTINGS = "update bots settings", i.DELETE_RULE = "delete bots ruleset", i.UPDATE_RULE = "update bots ruleset", i.FETCH_RULES = "view bots ruleset", i.CONFIGURE_BOT_MANAGEMENT = "view bots management", i.WAF_RULES_REDIRECT = "redirect waf rules", i.CHANGED_ZONE_SETTINGS = "change zone setting", i
				}({}),
				r = function(i) {
					return i.PROVIDED_TEMPLATE = "provided template link in detection card", i.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", i.USE_TEMPLATE = "use template", i.CREATE_FIREWALL_RULE = "create firewall rule", i.WAF_RULES = "waf rules", i
				}({});
			const a = "user journey",
				u = "Bots"
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				AL: function() {
					return c
				},
				NC: function() {
					return u
				},
				WZ: function() {
					return f
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
			let i = function(l) {
				return l.LOAD_SETTINGS = "load setting", l.OPEN_SIDE_MODAL_SETTING = "open side modal setting", l.CLOSE_SIDE_MODAL_SETTING = "close side modal setting", l.CHANGE_SETTING = "change setting", l.FILTER_SETTING = "filter setting", l
			}({});
			const f = {
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
		"../react/pages/security/detections/pages/root/components/new-settings/resources/types.ts": function(K, y, t) {
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
			let e = function(i) {
					return i.WebApplicationExploits = "web-application-exploits", i.DdosAttacks = "ddos-attacks", i.BotTraffic = "bot-traffic", i.ApiAbuse = "api-abuse", i.ClientSideAbuse = "client-side-abuse", i.DomainSettings = "domain-settings", i.WebAssetsAndEndpoints = "web-assets-and-endpoints", i.RuleTemplates = "rule-templates", i.Detections = "detections", i
				}({}),
				r = function(i) {
					return i.DomainSettings = "domain-settings", i.WebAssetsAndEndpoints = "web-assets-and-endpoints", i.RuleTemplates = "rule-templates", i.Detections = "detections", i
				}({}),
				a = function(i) {
					return i.Tab = "tabs", i.Filters = "filters", i
				}({}),
				u = function(i) {
					return i.AILabyrinth = "ai-labyrinth", i.BlockAIBots = "block-ai-bots", i.BrowserIntegrity = "browser-integrity", i.ChallengePassage = "challenge-passage", i.ClientCertificates = "client-certificates", i.CloudflareManagedRuleset = "cloudflare-managed-ruleset", i.CreateDeveloperPortal = "create-developer-portal", i.CustomFallthrough = "custom-fallthrough", i.EndpointDiscovery = "endpoint-discovery", i.FirewallAi = "firewall-ai", i.HttpDdos = "http-ddos", i.IpAccessRules = "ip-access-rules", i.IpLists = "ip-lists", i.JwtValidation = "jwt-validation", i.Labels = "labels", i.LeakedCredentialCheck = "leaked-credential-check", i.MaliciousUploadDetection = "malicious-upload-detection", i.ManagedRuleset = "managed-ruleset", i.Mtls = "mtls", i.NetworkDdos = "network-ddos", i.OwaspCore = "owasp-core", i.RateLimitAuthentication = "rate-limit-authentication", i.ReplaceInsecureJavascript = "replace-insecure-javascript", i.RobotsTxt = "robots-txt", i.SequenceDetection = "sequence-detection", i.SchemaDiscovery = "schema-discovery", i.SchemaValidation = "schema-validation", i.SecurityLevel = "security-level", i.SecurityTxt = "security-txt", i.SensitiveDataDetection = "sensitive-data-detection", i.SessionIdentifiers = "session-identifiers", i.SslDdos = "ssl-ddos", i.TokenConfigurations = "token-configurations", i.UserAgentBlocking = "user-agent-blocking", i.VolumetricAbuse = "volumetric-abuse", i.ZoneLockdown = "zone-lockdown", i.ContinuousScriptMonitoring = "continuous-script-monitoring", i.BotManagement = "bot-management", i.SuperBotFightMode = "super-bot-fight-mode", i.BotFightMode = "bot-fight-mode", i
				}({})
		},
		"../react/pages/security/overview/resources/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				AZ: function() {
					return u
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
					return f
				}
			});
			let e = function(l) {
				return l.NAME = "description", l.SOURCE = "source", l.LAST_UPDATE = "lastUpdatedAt", l.ACTIVITY = "activity", l
			}({});
			const r = 5;
			let a = function(l) {
					return l.EXTERNAL_DOCUMENTATION = "external_documentation", l.LINK_TO_MANAGED = "link_to_managed_rules", l.LINK_TO_EVENTS = "link_to_security_events", l.LINK_TO_DDOS = "link_to_ddos", l.LINK_BOT_MGMT = "link_to_bot_mgmt", l.LINK_TO_AI_AUDIT = "link_to_ai_audit", l.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", l.LINK_TO_PAGE_SHIELD = "link_to_page_shield", l.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", l.LINK_TO_SECURITY_EVENTS = "link_to_security_events", l.LINK_TO_IP_RULE = "link_to_ip_rule", l.LINK_TO_CONFIGURATION = "link_to_configuration", l.LINK_TO_UPLOAD_SCHEMAS = "link_to_upload_schemas", l.LINK_TO_WEB_ASSETS = "link_to_web_assets", l.LINK_TO_DOMAINS = "link_to_domains", l
				}({}),
				u = function(l) {
					return l.LOAD_INSIGHTS = "load overview action items", l.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", l.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", l.CLICK_ACTION_INSIGHT = "click overview action item suggestion", l
				}({});
			const i = "security-overview-all-suggestions",
				f = [{
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
		"../react/pages/security/page-shield/resources/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				CP: function() {
					return x
				},
				FV: function() {
					return re
				},
				KH: function() {
					return L
				},
				Ks: function() {
					return U
				},
				Lj: function() {
					return D
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
					return _
				},
				SI: function() {
					return z
				},
				SJ: function() {
					return O
				},
				Sk: function() {
					return j
				},
				Ti: function() {
					return I
				},
				Uc: function() {
					return T
				},
				Uq: function() {
					return l
				},
				Uv: function() {
					return ne
				},
				V0: function() {
					return m
				},
				VT: function() {
					return d
				},
				YC: function() {
					return W
				},
				j$: function() {
					return v
				},
				qc: function() {
					return h
				},
				sV: function() {
					return w
				},
				sW: function() {
					return F
				},
				u8: function() {
					return E
				},
				v5: function() {
					return n
				},
				xg: function() {
					return G
				},
				yd: function() {
					return b
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				a = t("../react/pages/security/page-shield/resources/types.ts");

			function u(P) {
				for (var B = 1; B < arguments.length; B++) {
					var X = arguments[B] != null ? Object(arguments[B]) : {},
						ee = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(X).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(X, ce).enumerable
					})), ee.forEach(function(ce) {
						i(P, ce, X[ce])
					})
				}
				return P
			}

			function i(P, B, X) {
				return B = f(B), B in P ? Object.defineProperty(P, B, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[B] = X, P
			}

			function f(P) {
				var B = c(P, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function c(P, B) {
				if (typeof P != "object" || P === null) return P;
				var X = P[Symbol.toPrimitive];
				if (X !== void 0) {
					var ee = X.call(P, B || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(P)
			}
			const l = 50,
				m = 9,
				n = "copy script url page shield",
				o = "disable page shield",
				s = "click documentation link",
				E = "enable page shield",
				d = "filter search page shield",
				p = "filter search view all page shield",
				h = "hover score tooltip page shield",
				O = "open alert modal page shield",
				v = "change pagination page shield",
				g = "close script modal page shield",
				b = "open script modal page shield",
				_ = "select alert type page shield",
				T = "sort column page shield",
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
				L = {
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
						operators: [L.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: e.kE.string,
						options: ["true", "false"],
						operators: [L.CONTAINS, L.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [L.EQUALS],
						type: e.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: e.kE.string,
						operators: [L.INCLUDES, L.ENDS_WITH, L.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				x = u({}, M, {
					urls: u({}, M.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				w = {
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
			let S = function(P) {
				return P.SECURITY_THREATS = "Security Threats", P.C2_BOTNET = "C2 & Botnet", P.CRYPTOMINING = "Cryptomining", P.MALWARE = "Malware", P.PHISHING = "Phishing", P.SPYWARE = "Spyware", P.DGA_DOMAINS = "DGA Domains", P.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", P
			}({});
			const j = "https://www.cloudflare.com/plans/enterprise/contact/",
				W = {
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
				G = {
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
				ne = {
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
				F = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				z = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				D = {
					[a.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[a.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[a.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				U = {
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
		"../react/pages/security/page-shield/resources/index.ts": function(K, y, t) {
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
					return v
				},
				SE: function() {
					return m
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
					return E
				},
				h3: function() {
					return g
				},
				xq: function() {
					return ce
				},
				SQ: function() {
					return U
				},
				C0: function() {
					return I
				},
				av: function() {
					return L
				},
				W3: function() {
					return T
				},
				WO: function() {
					return S
				},
				Dk: function() {
					return G
				},
				we: function() {
					return q
				},
				Yt: function() {
					return z
				},
				ex: function() {
					return F
				},
				E1: function() {
					return re
				},
				dm: function() {
					return x
				},
				oK: function() {
					return j
				},
				qZ: function() {
					return D
				},
				_4: function() {
					return P
				},
				qo: function() {
					return B
				},
				CB: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(r),
				u = t("../react/pages/security/page-shield/resources/constants.ts");

			function i(R) {
				for (var V = 1; V < arguments.length; V++) {
					var k = arguments[V] != null ? Object(arguments[V]) : {},
						Z = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(k).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(k, ie).enumerable
					})), Z.forEach(function(ie) {
						f(R, ie, k[ie])
					})
				}
				return R
			}

			function f(R, V, k) {
				return V = c(V), V in R ? Object.defineProperty(R, V, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[V] = k, R
			}

			function c(R) {
				var V = l(R, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function l(R, V) {
				if (typeof R != "object" || R === null) return R;
				var k = R[Symbol.toPrimitive];
				if (k !== void 0) {
					var Z = k.call(R, V || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(R)
			}
			const m = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", R => (a().sendEvent(u.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				n = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", R => (a().sendEvent(u.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				o = (R, V) => {
					var k;
					return JSON.stringify(i({}, V == null || (k = V[0]) === null || k === void 0 ? void 0 : k.parameters, R))
				};
			let s = "";
			const E = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("start", (R, V, k) => (s = o(V, k), R)).on("success", R => (a().sendEvent(u.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), R)).on("error", (R, V, k) => o(V, k) === s ? R : {
					type: "noop"
				}),
				d = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				p = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", R => (a().sendEvent(u.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				h = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				O = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", R => (a().sendEvent(u.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				v = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				g = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var b = t("../react/app/redux/normalizer.js"),
				_ = t("../react/pages/security/page-shield/resources/types.ts");
			const T = R => R.pageShield.configuration,
				A = R => {
					var V;
					return (V = R.pageShield.configuration.data) === null || V === void 0 ? void 0 : V.enabled
				},
				L = R => {
					var V;
					return (V = T(R)) === null || V === void 0 ? void 0 : V.data
				},
				M = R => R.pageShield.scripts,
				x = R => R.pageShield.script,
				w = R => R.pageShield.connections,
				S = R => R.pageShield.connection,
				j = (0, b.P1)("pageShieldScripts", M),
				W = (0, b.P1)("pageShieldScript", x),
				G = (0, b.P1)("pageShieldConnections", w),
				ne = (0, b.P1)("pageShieldConnection", S),
				q = (R, V) => R === _.Wq.SCRIPT_MONITOR ? j(V) || [] : G(V) || [],
				re = (R, V) => R === _.Wq.SCRIPT_MONITOR ? M(V) || [] : w(V) || [],
				F = (R, V) => R === _.Wq.SCRIPT_MONITOR ? W(V) : ne(V),
				z = R => R.pageShield.domainIntel,
				D = R => R.pageShield.whoIsRecord,
				U = (R, V, k) => {
					var Z;
					const ie = Object.values(k).map(pe => ({
						key: pe,
						label: u.Uv[pe],
						score: R[pe]
					})).filter(pe => pe.score !== void 0 && pe.score <= V);
					return V === u.V0 && ie.length === 0 && ((Z = R.js_integrity_score) !== null && Z !== void 0 ? Z : 100) <= V && ie.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), ie
				},
				I = (R, V) => Object.values(V).filter(k => R[k] === !0).map(k => u.OV[k]),
				P = R => R === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				B = (R, V) => R[_.$g.MagecartScore] !== void 0 && R[_.$g.MagecartScore] <= V || R[_.$g.MalwareScore] !== void 0 && R[_.$g.MalwareScore] <= V || R[_.$g.CryptominingScore] !== void 0 && R[_.$g.CryptominingScore] <= V || R.js_integrity_score !== void 0 && R.js_integrity_score <= V,
				X = ["cdn.jsdelivr.net", "unpkg.com"],
				ee = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				ce = R => {
					if (R.includes("@latest")) {
						const k = R.split("@latest");
						if (k.length != 2) return;
						const Z = k[0].length,
							ie = Z + "@latest".length;
						return [Z, ie]
					}
					if (!!X.some(k => R.includes(k)))
						for (const k of ee) {
							const Z = R.match(k);
							if (!Z) continue;
							const ie = Z.index;
							if (ie === 0) return null;
							const pe = ie + Z[0].length;
							return [ie, pe]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$g: function() {
					return m
				},
				I1: function() {
					return i
				},
				R$: function() {
					return n
				},
				Wq: function() {
					return l
				},
				Xe: function() {
					return f
				},
				jf: function() {
					return c
				},
				k2: function() {
					return o
				}
			});

			function e(s) {
				for (var E = 1; E < arguments.length; E++) {
					var d = arguments[E] != null ? Object(arguments[E]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(h) {
						return Object.getOwnPropertyDescriptor(d, h).enumerable
					})), p.forEach(function(h) {
						r(s, h, d[h])
					})
				}
				return s
			}

			function r(s, E, d) {
				return E = a(E), E in s ? Object.defineProperty(s, E, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[E] = d, s
			}

			function a(s) {
				var E = u(s, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function u(s, E) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(s, E || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(s)
			}
			let i = function(s) {
				return s.BASE_URI = "base-uri", s.CHILD = "child-src", s.CONNECT = "connect-src", s.DEFAULT = "default-src", s.FONT = "font-src", s.FORM_ACTION = "form-action", s.FRAME = "frame-src", s.FRAME_ANCESTORS = "frame-ancestors", s.IMAGE = "img-src", s.MANIFEST = "manifest-src", s.MEDIA = "media-src", s.OBJECT = "object-src", s.SCRIPT = "script-src", s.SCRIPT_ELEM = "script-src-elem", s.STYLE = "style-src", s.STYLE_ELEM = "style-src-elem", s.WORKER = "worker-src", s.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", s
			}({});
			const f = e({}, i, {
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
				l = function(s) {
					return s.SCRIPT_MONITOR = "script", s.CONNECTION_MONITOR = "connection", s.COOKIE_MONITOR = "cookie", s
				}({}),
				m = function(s) {
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
					return O
				},
				fy: function() {
					return b
				},
				ji: function() {
					return E
				},
				pR: function() {
					return h
				},
				pV: function() {
					return _
				},
				rj: function() {
					return g
				},
				yR: function() {
					return T
				},
				zf: function() {
					return v
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				r = t("../../../common/util/types/src/api/phases/fields.tsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				i = t("../react/utils/translator.tsx"),
				f = t("../react/pages/security/resources/types.ts"),
				c = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				l = t("../node_modules/@cloudflare/elements/es/index.js");

			function m(A) {
				for (var L = 1; L < arguments.length; L++) {
					var M = arguments[L] != null ? Object(arguments[L]) : {},
						x = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(M).filter(function(w) {
						return Object.getOwnPropertyDescriptor(M, w).enumerable
					})), x.forEach(function(w) {
						n(A, w, M[w])
					})
				}
				return A
			}

			function n(A, L, M) {
				return L = o(L), L in A ? Object.defineProperty(A, L, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[L] = M, A
			}

			function o(A) {
				var L = s(A, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function s(A, L) {
				if (typeof A != "object" || A === null) return A;
				var M = A[Symbol.toPrimitive];
				if (M !== void 0) {
					var x = M.call(A, L || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(A)
			}
			const E = 10;
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
				O = [{
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
				v = {
					[f.X.UI_SECTION]: A => ({
						[d.MTLS_ACCESS]: {
							ruleName: d.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${A.account.id}/${A.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[d.ZONE_LOCKDOWN]: {
							ruleName: d.ZONE_LOCKDOWN,
							displayName: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [l.ZC, e.QV],
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
							displayName: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[d.IP_BASED]: {
							ruleName: d.IP_BASED,
							displayName: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.ip_base.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.ip_base.wafRulesOverview",
								applyMarkdown: !0,
								Components: [l.ZC, e.QV],
								componentProps: [{
									display: "inline"
								}, {
									to: `/${A.account.id}/configurations/lists`
								}]
							})
						},
						[d.USER_AGENT]: {
							ruleName: d.USER_AGENT,
							displayName: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: u().createElement(i.cC, {
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
							displayName: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[f.X.WAF_RULES]: {
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
				g = {
					[f.X.WAF_RULES]: {
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
					[f.X.UI_SECTION]: {
						[p.LEAKED_CREDENTIALS]: {
							ruleName: p.LEAKED_CREDENTIALS,
							displayName: u().createElement(i.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: u().createElement(i.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let b = function(A) {
				return A.DISCOVERY = "discovery", A.SEQUENCES = "sequences", A.SCHEMA_VALIDATION = "schema-validation", A.SETTINGS = "settings", A.API_RULES = "api-rules", A.UPGRADE = "upgrade", A
			}({});
			const _ = m({}, c.g, {
				[r.df.HttpRequestFirewallManaged]: m({}, c.g[r.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[r.df.HttpRequestFirewallCustom]: m({}, c.g[r.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[r.df.HttpRateLimit]: m({}, c.g[r.df.HttpRateLimit], {
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
			let T = function(A) {
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
					return l
				},
				y: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(m) {
				for (var n = 1; n < arguments.length; n++) {
					var o = arguments[n] != null ? Object(arguments[n]) : {},
						s = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && s.push.apply(s, Object.getOwnPropertySymbols(o).filter(function(E) {
						return Object.getOwnPropertyDescriptor(o, E).enumerable
					})), s.forEach(function(E) {
						u(m, E, o[E])
					})
				}
				return m
			}

			function u(m, n, o) {
				return n = i(n), n in m ? Object.defineProperty(m, n, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[n] = o, m
			}

			function i(m) {
				var n = f(m, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function f(m, n) {
				if (typeof m != "object" || m === null) return m;
				var o = m[Symbol.toPrimitive];
				if (o !== void 0) {
					var s = o.call(m, n || "default");
					if (typeof s != "object") return s;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(m)
			}
			let c = function(m) {
				return m.CLICK_OPT_IN = "click opt in security navigation", m.CLICK_OPT_IN_BUTTON = "click opt in button", m.CLICK_OPT_OUT_BUTTON = "click opt out button", m.CLICK_NEXT_STEP = "click opt in next step", m.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", m.DISPLAY_MODAL = "display opt in modal", m.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", m.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", m.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", m
			}({});
			const l = (m, n = {}) => {
				r().sendEvent(m, a({}, n || {}))
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
					return m
				},
				BT: function() {
					return i
				},
				CK: function() {
					return l
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
					return O
				},
				je: function() {
					return E
				},
				ll: function() {
					return f
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
			const a = async v => {
				var g, b;
				const _ = await (0, e.get)(`/zones/${v}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((g = _ == null ? void 0 : _.body) === null || g === void 0 || (b = g.result) === null || b === void 0 ? void 0 : b.value) === "enabled"
			}, u = async (v, g) => (await (0, e.post)(`/zones/${v}/content-upload-scan/${g?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), g), i = async v => {
				var g;
				const b = await (0, e.get)(`/zones/${v}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((g = b == null ? void 0 : b.body) === null || g === void 0 ? void 0 : g.result) || []
			}, f = async (v, g) => {
				var b;
				const _ = await (0, e.post)(`/zones/${v}/content-upload-scan/payloads`, {
					body: [g]
				});
				return (b = _ == null ? void 0 : _.body) === null || b === void 0 ? void 0 : b.result
			}, c = async (v, g) => (await (0, e.del)(`/zones/${v}/content-upload-scan/payloads/${g}`, {
				hideErrorAlert: !0
			}), g), l = async v => {
				var g;
				const b = await (0, e.get)(`/zones/${v}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((g = b == null ? void 0 : b.body) === null || g === void 0 ? void 0 : g.pii_detection_enabled)
			}, m = async (v, g) => (await (0, e.put)(`/zones/${v}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: g
				}
			}), g), n = async v => {
				var g, b;
				const _ = await (0, e.get)(`/zones/${v}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((g = _ == null ? void 0 : _.body) === null || g === void 0 || (b = g.result) === null || b === void 0 ? void 0 : b.enabled)
			}, o = async (v, g) => {
				var b, _;
				const T = await (0, e.post)(`/zones/${v}/leaked-credential-checks`, {
					body: {
						enabled: g
					}
				});
				return !!((b = T == null ? void 0 : T.body) === null || b === void 0 || (_ = b.result) === null || _ === void 0 ? void 0 : _.enabled)
			}, s = async v => {
				var g;
				const b = await (0, e.get)(`/zones/${v}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (g = b == null ? void 0 : b.body) === null || g === void 0 ? void 0 : g.result
			}, E = async (v, g) => {
				var b;
				const _ = await (0, e.post)(`/zones/${v}/leaked-credential-checks/detections`, {
					body: g
				});
				return (b = _ == null ? void 0 : _.body) === null || b === void 0 ? void 0 : b.result
			}, d = async (v, g) => (await (0, e.del)(`/zones/${v}/leaked-credential-checks/detections/${g}`, {
				hideErrorAlert: !0
			}), g), p = async (v, g) => {
				await (0, e.put)(`/zones/${v}/security-center/securitytxt`, {
					body: g
				})
			}, h = async v => {
				await (0, e.del)(`/zones/${v}/security-center/securitytxt`)
			}, O = async v => (await (0, e.get)(`/zones/${v}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Xu: function() {
					return d
				},
				Io: function() {
					return _
				},
				FQ: function() {
					return re
				},
				vU: function() {
					return E
				},
				M: function() {
					return h
				},
				d7: function() {
					return p
				},
				Oz: function() {
					return b
				},
				Np: function() {
					return W
				},
				WR: function() {
					return m
				},
				bE: function() {
					return G
				},
				u_: function() {
					return s
				},
				pf: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/pages/security/settings/hooks/api.ts"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t("webpack/sharing/consume/default/react-redux/react-redux"),
				i = t("../react/pages/security/settings/resources/index.ts"),
				f = t("../react/common/hooks/useZoneEntitlement.ts"),
				c = t("../../../../node_modules/yup/es/index.js"),
				l = t("../react/utils/translator.tsx");
			const m = () => (0, u.useSelector)(i.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				o = () => !!useZoneEntitlement(n),
				s = () => {
					const {
						t: F
					} = (0, l.QT)(), z = c.Z_().required(F("common.field_is_required")).max(24, F("labels.apply.form.name.error.max_characters")).matches(i.DG, F("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", F("labels.apply.form.name.error.cf_forbidden"), I => !i.aW.test(I)), D = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: I => c.Ry().shape({
							[i.n5.NAME]: I ? c.Z_() : z,
							[i.n5.DESCRIPTION]: I ? c.Z_().optional() : c.Z_().max(150, F("labels.apply.form.description.error.max_characters"))
						})
					}, U = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[i.N2.NAME]: "",
							[i.N2.SOURCE]: i.W3,
							[i.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => c.Ry().shape({
							[i.N2.NEW_LABEL_NAME]: z
						})
					};
					return {
						LABELS_APPLY_FORM: D,
						EDIT_LABELS_MODAL_FORM: U
					}
				},
				E = ({
					modalHeaderFixedHeight: F = 62,
					modalDefaultPaddings: z = 16
				} = {}) => {
					const D = (0, a.useRef)(null),
						U = (0, a.useRef)(null),
						[I, P] = (0, a.useState)(0),
						[B, X] = (0, a.useState)(0),
						ee = `calc(100vh - ${I}px - ${B}px - ${z}px)`,
						[ce, R] = (0, a.useState)("");
					return (0, a.useEffect)(() => {
						const V = () => {
							var k, Z, ie, pe;
							const de = D == null || (k = D.current) === null || k === void 0 ? void 0 : k.offsetHeight,
								ve = U == null || (Z = U.current) === null || Z === void 0 ? void 0 : Z.offsetHeight,
								oe = ((ie = de) !== null && ie !== void 0 ? ie : 0) + F,
								Ie = (pe = ve) !== null && pe !== void 0 ? pe : 0;
							P(oe), X(Ie)
						};
						return V(), window.addEventListener("resize", V), () => window.removeEventListener("resize", V)
					}, []), {
						searchTerm: ce,
						setSearchTerm: R,
						scrollableSectionMaxHeight: ee,
						topMenuRef: D,
						bottomMenuRef: U
					}
				},
				d = F => {
					const z = m(),
						D = (0, e.useQueryClient)(),
						U = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${F}`,
							queryFn: () => (0, r.JP)(F),
							enabled: z
						}),
						I = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${F}`,
							queryFn: () => (0, r.BT)(F),
							enabled: z && !!(U == null ? void 0 : U.data)
						}),
						P = (0, e.useMutation)({
							mutationFn: async ({
								enabled: ee
							}) => await (0, r.X2)(F, ee),
							onSuccess: ee => {
								D.setQueryData([`content-scanning-enabled-${F}`], ee)
							}
						}),
						B = (0, e.useMutation)({
							mutationFn: ee => (0, r.ll)(F, ee),
							onSuccess: ee => {
								D.setQueryData([`content-scanning-detections-${F}`], ee)
							}
						}),
						X = (0, e.useMutation)({
							mutationFn: ee => (0, r.qD)(F, ee),
							onSuccess: ee => {
								var ce;
								const R = (ce = D.getQueryData(`content-scanning-detections-${F}`)) !== null && ce !== void 0 ? ce : [];
								D.setQueryData([`content-scanning-detections-${F}`], R.filter(({
									id: V
								}) => V !== ee))
							}
						});
					return {
						entitled: z,
						loading: U.isLoading || I.isLoading,
						error: U.isError || I.isError,
						enabled: {
							data: U.data,
							isToggling: P.isLoading,
							toggleEnabled: async ee => P.mutateAsync({
								enabled: ee
							})
						},
						detections: {
							data: I.data,
							add: B.mutateAsync,
							delete: X.mutateAsync,
							loading: B.isLoading || X.isLoading
						}
					}
				},
				p = () => {
					const F = (0, u.useSelector)(i.cN),
						z = (0, u.useSelector)(i.bH),
						D = (0, u.useSelector)(i.P3),
						U = (0, u.useSelector)(i.Ri);
					return {
						hasEditPermission: F,
						isEnabled: D && (z.hasSimilarLeaked || z.hasUsernameAndPasswordLeaked || U)
					}
				},
				h = F => {
					const z = p(),
						D = (0, e.useQueryClient)(),
						U = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${F}`,
							queryFn: () => (0, r.Ai)(F),
							enabled: !!z.isEnabled,
							retry: 1
						}),
						I = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${F}`,
							queryFn: () => (0, r.tw)(F),
							enabled: !!z.isEnabled && !!(U == null ? void 0 : U.data)
						}),
						P = (0, e.useMutation)({
							mutationFn: ({
								enabled: ee
							}) => (0, r.O_)(F, ee),
							onSuccess: ee => {
								D.setQueryData([`leaked-credentials-enabled-${F}`], ee)
							}
						}),
						B = (0, e.useMutation)({
							mutationFn: async ee => await (0, r.je)(F, ee),
							onSuccess: ee => {
								var ce;
								const R = (ce = D.getQueryData(`leaked-credentials-detections-${F}`)) !== null && ce !== void 0 ? ce : [];
								D.setQueryData([`leaked-credentials-detections-${F}`], [...R, ee])
							}
						}),
						X = (0, e.useMutation)({
							mutationFn: ee => (0, r.$y)(F, ee),
							onSuccess: ee => {
								var ce;
								const R = (ce = D.getQueryData(`leaked-credentials-detections-${F}`)) !== null && ce !== void 0 ? ce : [];
								D.setQueryData([`leaked-credentials-detections-${F}`], R.filter(({
									id: V
								}) => V !== ee))
							}
						});
					return {
						entitled: z.isEnabled,
						hasEditPermissions: z.hasEditPermission,
						loading: U.isLoading || I.isLoading,
						error: U.isError || U.isError,
						enabled: {
							data: U.data,
							isToggling: P.isLoading,
							toggleEnabled: async ee => P.mutateAsync({
								enabled: ee
							})
						},
						detections: {
							data: I.data,
							add: B.mutateAsync,
							delete: X.mutateAsync,
							loading: B.isLoading || X.isLoading
						}
					}
				};
			var O = t("../react/common/utils/useQueryCache.ts");
			const v = "security-txt",
				g = {
					securityTxt: ({
						zoneId: F
					}) => [v, F]
				},
				b = F => (0, e.useQuery)({
					queryKey: g.securityTxt({
						zoneId: F
					}),
					queryFn: () => (0, r._c)(F),
					select: z => z.result
				}),
				_ = F => {
					const {
						invalidate: z
					} = (0, O.o)(g.securityTxt({
						zoneId: F
					}));
					return (0, e.useMutation)({
						mutationFn: () => (0, r.YO)(F),
						onSuccess: async () => {
							await z(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				T = F => {
					const {
						invalidate: z
					} = (0, O.o)(g.securityTxt({
						zoneId: F
					}));
					return (0, e.useMutation)({
						mutationFn: D => (0, r.F3)(F, D),
						onSuccess: async () => {
							await z(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var A = t("../../../../node_modules/lodash/isEqual.js"),
				L = t.n(A),
				M = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function x(F) {
				for (var z = 1; z < arguments.length; z++) {
					var D = arguments[z] != null ? Object(arguments[z]) : {},
						U = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(D).filter(function(I) {
						return Object.getOwnPropertyDescriptor(D, I).enumerable
					})), U.forEach(function(I) {
						w(F, I, D[I])
					})
				}
				return F
			}

			function w(F, z, D) {
				return z = S(z), z in F ? Object.defineProperty(F, z, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[z] = D, F
			}

			function S(F) {
				var z = j(F, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function j(F, z) {
				if (typeof F != "object" || F === null) return F;
				var D = F[Symbol.toPrimitive];
				if (D !== void 0) {
					var U = D.call(F, z || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(F)
			}
			const W = F => {
					const {
						queryKey: z,
						zoneId: D
					} = (0, M.hL)(F), {
						isLoading: U,
						isError: I,
						isSuccess: P,
						data: B,
						refetch: X,
						isRefetching: ee
					} = (0, e.useQuery)({
						queryKey: z,
						queryFn: () => M.Mi.getLabels(x({
							zoneId: D
						}, F)),
						onSuccess: () => {
							var ce;
							const R = F == null || (ce = F.filters) === null || ce === void 0 ? void 0 : ce.source;
							(R === i.LABEL_SOURCES.MANAGED || R === i.LABEL_SOURCES.USER) && (0, i.Tf)({
								name: i.QJ.FILTER_USER_MANAGED_LABELS,
								product: i.Iv.SECURITY_SETTINGS,
								pageName: i.R.LABELS_LIST,
								type: R
							})
						}
					});
					return {
						data: B == null ? void 0 : B.result,
						errors: B == null ? void 0 : B.errors,
						paginationData: B == null ? void 0 : B.result_info,
						isLoading: U,
						isError: I,
						isSuccess: P,
						refetch: X,
						isRefetching: ee
					}
				},
				G = ({
					labels: F,
					preselectedLabels: z
				}) => {
					const {
						USER: D,
						MANAGED: U
					} = i.LABEL_SOURCES, [I, P] = (0, a.useState)({
						[D]: [],
						[U]: []
					}), [B, X] = (0, a.useState)(new Set), ee = B.size > 0, [ce, R] = (0, a.useState)(!1), V = pe => {
						X(de => {
							const ve = new Set(de);
							return ve.has(pe.name) ? ve.delete(pe.name) : ve.add(pe.name), ve
						})
					}, k = pe => B.has(pe.name), Z = (pe, de) => {
						const ve = k(pe) ? 1 : 0;
						return (k(de) ? 1 : 0) - ve
					}, ie = pe => {
						P(de => ({
							[D]: [...pe ? pe[D] : de[D]].sort(Z),
							[U]: [...pe ? pe[U] : de[U]].sort(Z)
						}))
					};
					return (0, a.useEffect)(() => {
						if (F && !ce) {
							if (z) {
								const pe = new Set;
								F.forEach(de => {
									z.some(ve => L()(ve, de)) && pe.add(de.name)
								}), X(pe)
							}
							R(!0)
						}
					}, [F, z, ce]), (0, a.useEffect)(() => {
						if (F && ce) {
							const pe = F.reduce((ve, oe) => (oe.source === D ? ve[D].push(oe) : oe.source === U && ve[U].push(oe), ve), {
									[D]: [],
									[U]: []
								}),
								de = {
									[D]: pe[D].sort(Z),
									[U]: pe[U].sort(Z)
								};
							P(de)
						}
					}, [D, U, F, ce]), {
						userAndManagedLabels: I,
						setUserAndManagedLabels: P,
						toggleSelectedLabel: V,
						isLabelSelected: k,
						sortLabelsBySelectedStatus: ie,
						hasLabelsSelected: ee
					}
				};
			var ne = t("../react/app/redux/index.ts"),
				q = t("../react/pages/security/settings/resources/selectors.ts");
			const re = (F = "") => {
				const z = (0, ne.p4)(q.Xs),
					D = z && (F == null ? void 0 : F.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: z,
					hasDeprecatedParameter: D
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				FQ: function() {
					return l.FQ
				},
				Iv: function() {
					return m.Iv
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
					return m.Q4
				},
				QJ: function() {
					return m.QJ
				},
				R: function() {
					return m.R
				},
				TG: function() {
					return m.TG
				},
				Tf: function() {
					return m.Tf
				},
				WR: function() {
					return l.WR
				},
				Xs: function() {
					return m.Xs
				},
				Xu: function() {
					return l.Xu
				},
				ZF: function() {
					return m.ZF
				},
				bE: function() {
					return l.bE
				},
				bH: function() {
					return m.bH
				},
				dC: function() {
					return m.dC
				},
				eC: function() {
					return m.eC
				},
				m8: function() {
					return m.m8
				},
				pf: function() {
					return l.pf
				},
				ui: function() {
					return m.ui
				},
				vc: function() {
					return m.vc
				},
				w: function() {
					return m.w
				},
				zF: function() {
					return m.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/app/components/Forbidden.jsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				i = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(f),
				l = t("../react/pages/security/settings/hooks/index.ts"),
				m = t("../react/pages/security/settings/resources/index.ts");
			const n = u().lazy(() => Promise.all([t.e(16691), t.e(14917), t.e(12174), t.e(1091), t.e(31358), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(45275), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(2868), t.e(5756), t.e(83276), t.e(28861), t.e(52215), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				o = () => {
					const {
						t: s
					} = (0, f.useI18n)(), E = (0, e.xk)("waf");
					return u().createElement(i.T3, {
						parentPageLabel: s("navigation.zone.security"),
						title: s("navigation.zone.security.settings"),
						type: "narrow"
					}, E.read ? u().createElement(n, null) : u().createElement(r.Z, null))
				};
			y.ZP = o
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Mi: function() {
					return g
				},
				hL: function() {
					return v
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/zoneSelectors.ts"),
				a = t("../react/common/utils/useQueryCache.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				i = t("../react/common/hooks/useAccountId.ts"),
				f = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
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
			var m = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function s(_, T) {
				if (_ == null) return {};
				var A = E(_, T),
					L, M;
				if (Object.getOwnPropertySymbols) {
					var x = Object.getOwnPropertySymbols(_);
					for (M = 0; M < x.length; M++) L = x[M], !(T.indexOf(L) >= 0) && (!Object.prototype.propertyIsEnumerable.call(_, L) || (A[L] = _[L]))
				}
				return A
			}

			function E(_, T) {
				if (_ == null) return {};
				var A = {},
					L = Object.keys(_),
					M, x;
				for (x = 0; x < L.length; x++) M = L[x], !(T.indexOf(M) >= 0) && (A[M] = _[M]);
				return A
			}

			function d(_) {
				for (var T = 1; T < arguments.length; T++) {
					var A = arguments[T] != null ? Object(arguments[T]) : {},
						L = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(A).filter(function(M) {
						return Object.getOwnPropertyDescriptor(A, M).enumerable
					})), L.forEach(function(M) {
						p(_, M, A[M])
					})
				}
				return _
			}

			function p(_, T, A) {
				return T = h(T), T in _ ? Object.defineProperty(_, T, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[T] = A, _
			}

			function h(_) {
				var T = O(_, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function O(_, T) {
				if (typeof _ != "object" || _ === null) return _;
				var A = _[Symbol.toPrimitive];
				if (A !== void 0) {
					var L = A.call(_, T || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(_)
			}
			const v = _ => {
					const T = (0, e.p4)(r.Cu),
						A = (0, i.F)(),
						L = b.labels(d({
							accountId: A,
							zoneId: T
						}, _ ? d({}, _) : {})),
						M = (0, a.o)(L);
					return d({
						zoneId: T,
						queryKey: L,
						batchInvalidateLabels: async () => {
							await M.batchInvalidate({
								queryKeysToPredicateInvalidate: [u.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, M)
				},
				g = {
					getLabels: async _ => {
						var T, A, L, M;
						let {
							zoneId: x,
							hideErrorAlert: w = !0
						} = _, S = s(_, ["zoneId", "hideErrorAlert"]);
						return (await f.get(l.labels.toUrl({
							zoneId: x
						}), {
							parameters: {
								page: S == null ? void 0 : S.page,
								per_page: S == null ? void 0 : S.per_page,
								with_mapped_resource_counts: S == null ? void 0 : S.with_mapped_resource_counts,
								filter: S == null || (T = S.filters) === null || T === void 0 ? void 0 : T.search,
								source: (0, n.sQ)(S == null || (A = S.filters) === null || A === void 0 ? void 0 : A.source),
								order: S == null || (L = S.sort) === null || L === void 0 ? void 0 : L.id,
								direction: (S == null ? void 0 : S.sort) ? (S == null || (M = S.sort) === null || M === void 0 ? void 0 : M.desc) ? o.Sr.desc : o.Sr.asc : void 0
							},
							hideErrorAlert: w
						})).body
					},
					getLabel: async _ => {
						let {
							zoneId: T,
							labelName: A,
							hideErrorAlert: L = !0
						} = _, M = s(_, ["zoneId", "labelName", "hideErrorAlert"]);
						const x = (0, n.mm)(A) ? l.managedLabel.toUrl({
							zoneId: T,
							labelName: A
						}) : l.userLabel.toUrl({
							zoneId: T,
							labelName: A
						});
						return (await f.get(x, {
							parameters: {
								with_mapped_resource_counts: M == null ? void 0 : M.with_mapped_resource_counts
							},
							hideErrorAlert: L
						})).body
					},
					editLabel: async ({
						zoneId: _,
						label: T,
						replace: A
					}) => {
						const {
							name: L
						} = T, M = s(T, ["name"]);
						return (await (A ? f.put : f.patch)(l.userLabel.toUrl({
							zoneId: _,
							labelName: T.name
						}), {
							body: M
						})).body
					},
					deleteLabel: async ({
						zoneId: _,
						labelName: T
					}) => (await f.del(l.userLabel.toUrl({
						zoneId: _,
						labelName: T
					}))).body,
					createLabel: async _ => {
						let {
							zoneId: T
						} = _, A = s(_, ["zoneId"]);
						const {
							product: L
						} = A, M = s(A, ["product"]);
						return (await f.post(l.userLabels.toUrl({
							zoneId: T
						}), {
							body: [M]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: _,
						user: T,
						managed: A,
						operationIds: L,
						replace: M
					}) => (await (M ? f.put : f.post)(l.operationsLinkedToLabels.toUrl({
						zoneId: _
					}), {
						body: d({}, T ? {
							user: {
								labels: T
							}
						} : {}, A ? {
							managed: {
								labels: A
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: L
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: _,
						labelName: T,
						operationIds: A
					}) => {
						const L = (0, n.mm)(T) ? l.managedLabelOperations.toUrl({
							zoneId: _,
							labelName: T
						}) : l.userLabelOperations.toUrl({
							zoneId: _,
							labelName: T
						});
						return (await f.put(L, {
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
				b = {
					labels: _ => {
						let {
							accountId: T,
							zoneId: A
						} = _, L = s(_, ["accountId", "zoneId"]);
						return [u.IQ.LABELS, T, A, ...(0, m.isEmpty)(L) ? [] : [L]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return h
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return c
				},
				GE: function() {
					return A
				},
				IQ: function() {
					return u
				},
				KV: function() {
					return f
				},
				LABELS_LIST_TOASTS: function() {
					return E
				},
				LABEL_SOURCES: function() {
					return i
				},
				QH: function() {
					return d
				},
				V: function() {
					return b
				},
				W3: function() {
					return a
				},
				Yn: function() {
					return x
				},
				_8: function() {
					return s
				},
				_c: function() {
					return _
				},
				aW: function() {
					return O
				},
				dC: function() {
					return M
				},
				gY: function() {
					return T
				},
				j8: function() {
					return l
				},
				jz: function() {
					return p
				},
				n5: function() {
					return v
				},
				om: function() {
					return m
				},
				w: function() {
					return r
				},
				zF: function() {
					return L
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let r = function(w) {
				return w.EXPOSED_CREDENTIALS = "exposed_credentials", w.CONTENT_SCANNING = "content_scanning", w.FIREWALL_AI = "firewall_ai", w
			}({});
			const a = "all";
			let u = function(w) {
					return w.LABELS = "labels", w
				}({}),
				i = function(w) {
					return w.USER = "user", w.MANAGED = "managed", w
				}({}),
				f = function(w) {
					return w.SOURCE = "source", w
				}({}),
				c = function(w) {
					return w.NAME = "name", w.SOURCE = "source", w.NEW_LABEL_NAME = "newLabelName", w
				}({}),
				l = function(w) {
					return w.ENDPOINT = "endpoint", w.METHOD = "method", w.OPERATION_ID = "operationId", w
				}({}),
				m = function(w) {
					return w.NAME = "name", w.MAPPED_RESOURCES = "mapped_resources.operations", w.SOURCE = "source", w.APPLY = "apply", w
				}({});
			const s = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: m.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[f.SOURCE]: a
					}
				},
				filters: f,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					queryParamStrategy: "auto-clear"
				}
			};
			let E = function(w) {
				return w.CREATED_LABEL = "createdLabel", w.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", w.DELETED_LABEL = "deletedLabel", w.APPLIED_LABEL = "appliedLabel", w.EDITED_LABEL = "editedLabel", w.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", w
			}({});
			const d = "650px",
				p = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				h = /^[A-Za-z0-9-]+$/,
				O = /^cf-/;
			let v = function(w) {
				return w.NAME = "name", w.DESCRIPTION = "description", w
			}({});
			const g = "all";
			let b = function(w) {
				return w.METHOD = "method", w.HOSTNAME = "hostname", w
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
						[b.METHOD]: g,
						[b.HOSTNAME]: g
					}
				},
				filters: b
			};
			let T = function(w) {
				return w.TITLE = "title", w.DESCRIPTION = "description", w.SUBMIT = "submit", w
			}({});
			const A = 1e3,
				L = {
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
				x = "cf-risk"
		},
		"../react/pages/security/settings/resources/index.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return E
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
					return v.Xs
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
					return v.bH
				},
				Mb: function() {
					return a.Mb
				},
				ui: function() {
					return v.ui
				},
				P3: function() {
					return v.P3
				},
				Ri: function() {
					return v.Ri
				},
				cN: function() {
					return v.cN
				},
				m8: function() {
					return O
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
				i = t.n(u);

			function f(g) {
				for (var b = 1; b < arguments.length; b++) {
					var _ = arguments[b] != null ? Object(arguments[b]) : {},
						T = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(_).filter(function(A) {
						return Object.getOwnPropertyDescriptor(_, A).enumerable
					})), T.forEach(function(A) {
						c(g, A, _[A])
					})
				}
				return g
			}

			function c(g, b, _) {
				return b = l(b), b in g ? Object.defineProperty(g, b, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[b] = _, g
			}

			function l(g) {
				var b = m(g, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function m(g, b) {
				if (typeof g != "object" || g === null) return g;
				var _ = g[Symbol.toPrimitive];
				if (_ !== void 0) {
					var T = _.call(g, b || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(g)
			}
			let n = function(g) {
					return g.LABELS_LIST = "Labels List page", g.LABELS_APPLY = "Labels Apply page", g.LABELS_SIDE_MODAL = "Labels Side Modal", g.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", g.LABELS_OPERATION_DETAILS = "Operation Details page", g
				}({}),
				o = function(g) {
					return g.API_SHIELD = "API Shield", g.SECURITY_SETTINGS = "Security Settings", g
				}({}),
				s = function(g) {
					return g.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", g.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", g.OPERATIONS_TABLE_ROW = "Operations table row", g.OPERATION_DETAILS_PAGE = "Operation details page", g
				}({}),
				E = function(g) {
					return g.UPSERT = "upsert", g.OVERWRITE = "overwrite", g
				}({}),
				d = function(g) {
					return g.SINGLE = "single", g.MULTIPLE = "multiple", g
				}({}),
				p = function(g) {
					return g.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", g.DELETE_LABEL = "delete a user label in the settings page", g.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", g.CREATE_LABEL_CLICKED = "click create label button in the settings page", g.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", g.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", g.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", g.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", g.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", g.OPEN_LABELS_SIDE_MODAL = "open labels side modal", g.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", g.REMOVE_RISK_LABELS_FROM_OPERATION = "remove risk label(s) from operation(s) in the labels side modal", g.CREATE_NEW_LABEL = "create a new label", g
				}({});
			const h = ({
					name: g,
					product: b,
					category: _ = "user journey",
					pageName: T,
					from: A,
					write_strategy: L,
					type: M,
					target: x,
					selected: w
				}) => {
					i().sendEvent(g, f({
						category: _,
						pageName: T,
						product: b
					}, A ? {
						from: A
					} : {}, L ? {
						write_strategy: L
					} : {}, M ? {
						type: M
					} : {}, x ? {
						target: x
					} : {}, w ? {
						selected: w
					} : {}))
				},
				O = () => {
					var g;
					return (g = Object.values(p)) === null || g === void 0 ? void 0 : g.flat()
				};
			var v = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				P3: function() {
					return l
				},
				Ri: function() {
					return m
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
					return f
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				r = t("../react/utils/url.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				i = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const f = s => {
					const E = (0, e.RO)(s),
						d = !!(0, a.rV)(s, "rulesets.file_upload_scan_allowed"),
						p = !!(0, a.BF)(s, "rulesets.file_upload_scan_allowed");
					return (0, r.el)(window.location.pathname) ? E && (d || p) : p
				},
				c = s => Number((0, a.rV)(s, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				l = s => (0, a.rV)(s, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				m = s => (0, a.rV)(s, "rulesets.leaked_credential_checks_allowed"),
				n = s => (0, i.z1)(u.dC)(s) ? {
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
					return E
				},
				N2: function() {
					return b
				},
				Q4: function() {
					return p
				},
				QF: function() {
					return o
				},
				Vy: function() {
					return O
				},
				Wv: function() {
					return d
				},
				mm: function() {
					return g
				},
				sQ: function() {
					return v
				},
				vc: function() {
					return h
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				a = t("../react/pages/security/settings/routes.tsx"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				i = t("../react/pages/security/settings/resources/types.ts"),
				f = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function c(_) {
				for (var T = 1; T < arguments.length; T++) {
					var A = arguments[T] != null ? Object(arguments[T]) : {},
						L = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(A).filter(function(M) {
						return Object.getOwnPropertyDescriptor(A, M).enumerable
					})), L.forEach(function(M) {
						l(_, M, A[M])
					})
				}
				return _
			}

			function l(_, T, A) {
				return T = m(T), T in _ ? Object.defineProperty(_, T, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[T] = A, _
			}

			function m(_) {
				var T = n(_, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function n(_, T) {
				if (typeof _ != "object" || _ === null) return _;
				var A = _[Symbol.toPrimitive];
				if (A !== void 0) {
					var L = A.call(_, T || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(_)
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
				E = _ => e.Ry({
					[i.T.CONTACT]: e.IX().of(e.Z_().required(_("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, _("security_txt.fields.contact.format_error"))),
					[i.T.EXPIRES]: e.hT().required(_("common.required")).min(new Date, _("security_txt.fields.expires.min_error"))
				}),
				d = _ => {
					const T = {};
					for (const A in _) T[A] = Array.isArray(_[A]) ? _[A].filter(L => !!L) : _[A];
					return c({}, T, {
						expires: (0, f.DZ)(_.expires)
					})
				},
				p = (_, T, A) => {
					const L = [...new Set([i.T.CONTACT, i.T.EXPIRES, ...Object.values(i.T)])],
						M = Object.entries(_).sort(([x], [w]) => L.indexOf(x) - L.indexOf(w)).filter(([x, w]) => !!s[x] && !!w && (!Array.isArray(w) || !!w.length)).map(([x, w]) => Array.isArray(w) ? w.map(S => `${A(s[x].label)}: ${S}`).join(`
`) : `${A(s[x].label)}: ${w}`).join(`
`);
					(0, r.yH)(`Cloudflare_${T}_security.txt`, M, "text/plain;charset=utf-8")
				};
			let h = function(_) {
				return _.CREATED = "created security.txt", _.ENABLED = "enabled security.txt", _.DISABLED = "disabled security.txt", _.DOWNLOADED = "downloaded security.txt", _.UPDATED = "updated security.txt", _.DELETED = "deleted security.txt", _
			}({});
			const O = _ => (_ == null ? void 0 : _.source) === u.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (_ == null ? void 0 : _.source) === u.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				v = _ => _ === u.W3 ? void 0 : _,
				g = _ => u.aW.test(_),
				b = _ => {
					switch (_) {
						case u.w.CONTENT_SCANNING:
							return a.ROUTES.CONTENT_SCANNING;
						case u.w.EXPOSED_CREDENTIALS:
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
					return m
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
						E = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), E.forEach(function(d) {
						u(n, d, s[d])
					})
				}
				return n
			}

			function u(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = f(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var E = s.call(n, o || "default");
					if (typeof E != "object") return E;
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
				m = ({
					event: n,
					category: o = "user journey",
					product: s = "waf",
					productName: E = "Managed Rules",
					additionalData: d
				}) => {
					r().sendEvent(n, a({
						category: o,
						product: s,
						productName: E
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
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				r = t("../react/pages/stream/actionTypes.ts"),
				a = t("../react/pages/stream/util/pager.ts");

			function u(o) {
				for (var s = 1; s < arguments.length; s++) {
					var E = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(E).filter(function(p) {
						return Object.getOwnPropertyDescriptor(E, p).enumerable
					})), d.forEach(function(p) {
						i(o, p, E[p])
					})
				}
				return o
			}

			function i(o, s, E) {
				return s = f(s), s in o ? Object.defineProperty(o, s, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = E, o
			}

			function f(o) {
				var s = c(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function c(o, s) {
				if (typeof o != "object" || o === null) return o;
				var E = o[Symbol.toPrimitive];
				if (E !== void 0) {
					var d = E.call(o, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}
			const l = "stream",
				m = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(o = m, s) {
				switch (s.type) {
					case r.U.ResetState:
						return m;
					case r.U.SetStorageLoading:
						const {
							storageLoading: E
						} = s;
						return u({}, o, {
							storageLoading: E
						});
					case r.U.SetStorage:
						return u({}, o, {
							storage: s.payload ? u({}, o.storage, s.payload) : void 0
						});
					case r.U.ReplaceVideos:
						return u({}, o, {
							videos: s.videos
						});
					case r.U.PrependVideo:
						return u({}, o, {
							videos: [s.video, ...o.videos].filter((d, p) => p < a.FJ)
						});
					case r.U.UpdateVideo:
						return u({}, o, {
							videos: o.videos.map(d => d.uid === s.video.uid ? s.video : d)
						});
					case r.U.UpdateVideoPending:
						return u({}, o, {
							videoUpdateStatuses: u({}, o.videoUpdateStatuses, {
								[s.uid]: s.status
							})
						});
					case r.U.RemoveVideos:
						return u({}, o, {
							videos: o.videos.filter(d => !s.ids.includes(d.uid))
						});
					case r.U.SetLoading:
						return u({}, o, {
							loading: s.loading
						});
					case r.U.SetRequestTimestamp:
						return u({}, o, {
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
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/stream`,
				a = (0, e.BC)`${r}/inputs`,
				u = (0, e.BC)`${r}/videos`,
				i = (0, e.BC)`${r}/analytics`,
				f = (0, e.BC)`${u}/${"videoId"}`,
				c = (0, e.BC)`${r}/video-transformations`,
				l = {
					root: r,
					inputs: a,
					configureInputs: (0, e.BC)`${a}/custom-hostnames`,
					videos: u,
					analytics: i,
					videoPage: f,
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
					return u
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return i
				},
				QL: function() {
					return l
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
					return E
				},
				mX: function() {
					return h
				},
				pW: function() {
					return f
				},
				xW: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/pages/stream/reducer.ts");
			const u = O => O[a.nY],
				i = O => u(O).videos,
				f = O => u(O).videoUpdateStatuses,
				c = O => u(O).loading,
				l = O => u(O).requestTimestamp,
				m = O => u(O).storageLoading,
				n = O => u(O).storage,
				o = O => (0, r.BF)(O, "stream.enabled") || (0, e.bC)(O),
				s = O => (0, e.Le)(O, "stream", "connect"),
				E = O => (0, e.Le)(O, "stream", "stream-4371"),
				d = O => (0, e.Le)(O, "stream", "public-details-enabled"),
				p = O => !!(0, e.Le)(O, "stream", "llhls"),
				h = O => {
					const v = n(O);
					return v !== void 0 && v.limitMins > v.currentMins
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

			function r(u, i, f) {
				const c = {
					search: f,
					limit: e.toString()
				};
				return i !== void 0 && (c.end = i), c
			}

			function a(u, i, f) {
				return {
					limit: e.toString(),
					search: f,
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
					return l
				},
				WM: function() {
					return d
				},
				Zk: function() {
					return m
				},
				aB: function() {
					return n
				},
				eT: function() {
					return E
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
				for (var h = 1; h < arguments.length; h++) {
					var O = arguments[h] != null ? Object(arguments[h]) : {},
						v = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(O).filter(function(g) {
						return Object.getOwnPropertyDescriptor(O, g).enumerable
					})), v.forEach(function(g) {
						u(p, g, O[g])
					})
				}
				return p
			}

			function u(p, h, O) {
				return h = i(h), h in p ? Object.defineProperty(p, h, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[h] = O, p
			}

			function i(p) {
				var h = f(p, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function f(p, h) {
				if (typeof p != "object" || p === null) return p;
				var O = p[Symbol.toPrimitive];
				if (O !== void 0) {
					var v = O.call(p, h || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(p)
			}
			let c = function(p) {
					return p.TRY_NEW_DASHBOARD_CTA = "click try new dashboard", p
				}({}),
				l = function(p) {
					return p.CREATE_BUTTON_CLICK = "click create load balancer", p.TOGGLE_STATUS = "load balancer toggle status", p.REVIEW_PAGE_CLICK = "click load balancer table review link", p.EDIT_CLICK = "click load balancer table edit button", p.DELETE_CLICK = "click load balancer table delete button", p
				}({}),
				m = function(p) {
					return p.EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", p.EDIT_IP_CLICK = "click edit load balancer IP", p.EDIT_POOLS_CLICK = "click edit load balancer pools", p.EDIT_MONITORS_CLICK = "click edit load balancer monitors", p.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", p.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", p
				}({}),
				n = function(p) {
					return p.GO_TO_STEP = "click load balancer step", p.BACK_TO_STEP = "click load balancer back to step", p.SAVE = "save load balancer", p.SAVE_AS_DRAFT = "save load balancer as draft", p.SAVE_AND_DEPLOY = "save and deploy load balancer", p.NAVIGATION_CHANGE = "click load balancer wizard navigation link", p.CLICK_PRIVATE_LB_DOCUMENTATION = "click link to private load balancing documentation", p
				}({}),
				o = function(p) {
					return p.OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", p
				}({});
			const E = Object.values({
					MIGRATION: c,
					LOAD_BALANCERS_TABLE: l,
					REVIEW: m,
					WIZARD: n,
					USAGE: o
				}).flatMap(Object.values),
				d = (p, h) => r().sendEvent(p, a({
					category: "user journey",
					product: "load balancing"
				}, h))
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
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let a = function(i) {
				return i.CREATE = "create waiting room", i.UPDATE = "update waiting room", i.EVENTS = "view waiting rooms events", i.ANALYTICS = "view waiting room analytics", i.GENERATE_PREVIEW = "generate waiting room preview link", i
			}({});
			const u = async i => {
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
					return l
				},
				P: function() {
					return n
				},
				Xh: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(o) {
				for (var s = 1; s < arguments.length; s++) {
					var E = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(E).filter(function(p) {
						return Object.getOwnPropertyDescriptor(E, p).enumerable
					})), d.forEach(function(p) {
						u(o, p, E[p])
					})
				}
				return o
			}

			function u(o, s, E) {
				return s = i(s), s in o ? Object.defineProperty(o, s, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = E, o
			}

			function i(o) {
				var s = f(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(o, s) {
				if (typeof o != "object" || o === null) return o;
				var E = o[Symbol.toPrimitive];
				if (E !== void 0) {
					var d = E.call(o, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}
			const c = "TURNSTILE";
			let l = function(o) {
				return o.OVERVIEW_PAGE = "view the overview page", o.LIST_OF_WIDGETS = "list of widgets", o.SOLVE_EVENTS = "list solve events", o.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", o.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", o.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", o.OPEN_DELETE_MODAL = "view the delete modal for one widget", o.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", o.DELETE_WIDGET = "delete successfully widgets", o.LIST_OF_HOSTNAMES = "list hostnames", o.OPEN_ADD_WIDGET_PAGE = "view page to add widget", o.FEEDBACK_ADD = "view Feedback Add", o.SAVE_WIDGET = "save widget", o.ROTATE_KEYS = "rotate keys", o.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", o.GET_WIDGETS = "get widget details", o.OPEN_ANALYTICS_PAGE = "view analytics page", o.ANALYTICS_DATA = "list the analytics data", o
			}({});
			const m = ({
					name: o,
					product: s = c,
					category: E = "user journey",
					page: d,
					additionalData: p = {}
				}) => {
					r().sendEvent(o, a({
						category: E,
						page: d,
						product: s
					}, p || {}))
				},
				n = () => {
					var o;
					return (o = Object.values(l)) === null || o === void 0 ? void 0 : o.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return l
				},
				Ky: function() {
					return m
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
						E = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), E.forEach(function(d) {
						u(n, d, s[d])
					})
				}
				return n
			}

			function u(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = f(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var E = s.call(n, o || "default");
					if (typeof E != "object") return E;
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
					r().sendEvent(n, a({}, o || {}))
				},
				m = () => {
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
					return g
				},
				G: function() {
					return T
				},
				M3: function() {
					return M
				},
				Tr: function() {
					return O
				},
				UY: function() {
					return p
				},
				bH: function() {
					return o
				},
				fv: function() {
					return x
				},
				hF: function() {
					return b
				},
				iw: function() {
					return E
				},
				m7: function() {
					return n
				},
				re: function() {
					return _
				},
				tp: function() {
					return d
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../../../../node_modules/reselect/lib/index.js"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/SidebarNav/permissions.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts");

			function f(w) {
				for (var S = 1; S < arguments.length; S++) {
					var j = arguments[S] != null ? Object(arguments[S]) : {},
						W = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(j).filter(function(G) {
						return Object.getOwnPropertyDescriptor(j, G).enumerable
					})), W.forEach(function(G) {
						c(w, G, j[G])
					})
				}
				return w
			}

			function c(w, S, j) {
				return S = l(S), S in w ? Object.defineProperty(w, S, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[S] = j, w
			}

			function l(w) {
				var S = m(w, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function m(w, S) {
				if (typeof w != "object" || w === null) return w;
				var j = w[Symbol.toPrimitive];
				if (j !== void 0) {
					var W = j.call(w, S || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(w)
			}
			const n = w => (0, a.nA)(w) ? (0, i.p1)(w) && (0, u.$n)(w, "zone_versioning", "versioning") : !1,
				o = w => w.zoneVersioning.zoneApplications,
				s = (0, e.P1)("zoneApplications", o),
				E = w => w.zoneVersioning.zoneVersions,
				d = (0, e.P1)("zoneVersions", E),
				p = (0, r.P1)(d, w => {
					if (w) return w.filter(S => S.status == "V")
				}),
				h = w => w.zoneVersioning.environments,
				O = w => w.zoneVersioning.environments.isRequesting,
				v = (0, e.P1)("environments", h),
				g = (0, r.P1)(s, w => {
					if (w) {
						if (w.length === 1) return w[0];
						w.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${w.length}`))
					}
					return null
				}),
				b = (0, r.P1)(v, w => w ? w.environments : []),
				_ = w => {
					var S;
					return (S = w.zoneVersioning) === null || S === void 0 ? void 0 : S.zoneVersionSelector
				},
				T = (0, r.P1)(_, d, (w, S) => {
					if (!(w == null ? void 0 : w.isVersion) || !S) return null;
					const j = S.find(W => {
						if (W.version === w.selectedVersion && W.locked) return !0
					});
					return j ? f({}, j, {
						isLocked: !0
					}) : null
				}),
				A = (0, r.P1)(d, b, (w, S) => !S || !w ? [] : w.map(j => {
					const W = [];
					for (const G in S) S[G].version === j.version && W.push(S[G]);
					return f({}, j, {
						environments: W
					})
				})),
				L = w => w.zoneVersioning.WAFMigrationStatus,
				M = (0, e.P1)("WAFMigrationStatus", L),
				x = w => w.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				$2: function() {
					return L
				},
				CI: function() {
					return T
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
					return M
				},
				X$: function() {
					return b
				},
				X6: function() {
					return m
				},
				d4: function() {
					return E
				},
				fE: function() {
					return l
				},
				im: function() {
					return v
				},
				lv: function() {
					return h
				},
				rL: function() {
					return n
				},
				wW: function() {
					return f
				}
			});

			function e(x) {
				for (var w = 1; w < arguments.length; w++) {
					var S = arguments[w] != null ? Object(arguments[w]) : {},
						j = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(S).filter(function(W) {
						return Object.getOwnPropertyDescriptor(S, W).enumerable
					})), j.forEach(function(W) {
						r(x, W, S[W])
					})
				}
				return x
			}

			function r(x, w, S) {
				return w = a(w), w in x ? Object.defineProperty(x, w, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[w] = S, x
			}

			function a(x) {
				var w = u(x, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function u(x, w) {
				if (typeof x != "object" || x === null) return x;
				var S = x[Symbol.toPrimitive];
				if (S !== void 0) {
					var j = S.call(x, w || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(x)
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
				f = 800,
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
				m = {
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
				E = {
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
				O = "workers.dev",
				v = "YYYY-MM-DD HH:mm:SS ZZ",
				g = "active",
				b = ["bundled", "unbound", "standard"],
				_ = null,
				T = {
					observability: "workers-observability",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let A = function(x) {
				return x[x.NONE = 0] = "NONE", x[x.MISS = 1] = "MISS", x[x.EXPIRED = 2] = "EXPIRED", x[x.UPDATING = 3] = "UPDATING", x[x.STALE = 4] = "STALE", x[x.HIT = 5] = "HIT", x[x.IGNORED = 6] = "IGNORED", x[x.BYPASS = 7] = "BYPASS", x[x.REVALIDATED = 8] = "REVALIDATED", x[x.DYNAMIC = 9] = "DYNAMIC", x[x.STREAM_HIT = 10] = "STREAM_HIT", x[x.DEFERRED = 11] = "DEFERRED", x
			}({});
			const L = [A.HIT, A.STREAM_HIT];
			let M = function(x) {
				return x.SECRETS_STORE_ID = "store_id", x.SECRET_NAME = "secret_name", x
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
					return u
				},
				_j: function() {
					return i
				},
				ky: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = l => `${l}.workers.dev`,
				a = (l, m, n) => `${n?`${n}.`:""}${l}.${r(m)}`,
				u = (l, m, n) => `https://${a(l,m,n)}`,
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
				f = "https://cron-triggers.cloudflareworkers.com",
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
					describeCron: `${f}/describe`,
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
					nextCron: `${f}/next`,
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
					validateCron: `${f}/validate`,
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
					return u
				},
				l3: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const a = async ([c, l]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: c,
					variables: l
				})
			})).body, u = async (...c) => (await e.get(...c)).body, i = c => async (l, m) => {
				const n = await fetch(l, m).then(o => o.json());
				return c.assertDecode(n)
			}, f = async (...c) => (await u(...c)).result;
			y.ZP = {
				fetcher: c => Array.isArray(c) ? f(...c) : f(c)
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

					function u(h) {
						return !!(h && h !== document && h.nodeName !== "HTML" && h.nodeName !== "BODY" && "classList" in h && "contains" in h.classList)
					}

					function i(h) {
						var O = h.type,
							v = h.tagName;
						return !!(v == "INPUT" && a[O] && !h.readOnly || v == "TEXTAREA" && !h.readOnly || h.isContentEditable)
					}

					function f(h) {
						h.getAttribute("is-focus-visible") !== "" && h.setAttribute("is-focus-visible", "")
					}

					function c(h) {
						h.getAttribute("is-focus-visible") === "" && h.removeAttribute("is-focus-visible")
					}

					function l(h) {
						u(document.activeElement) && f(document.activeElement), t = !0
					}

					function m(h) {
						t = !1
					}

					function n(h) {
						!u(h.target) || (t || i(h.target)) && f(h.target)
					}

					function o(h) {
						!u(h.target) || h.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), c(h.target))
					}

					function s(h) {
						document.visibilityState == "hidden" && (e && (t = !0), E())
					}

					function E() {
						document.addEventListener("mousemove", p), document.addEventListener("mousedown", p), document.addEventListener("mouseup", p), document.addEventListener("pointermove", p), document.addEventListener("pointerdown", p), document.addEventListener("pointerup", p), document.addEventListener("touchmove", p), document.addEventListener("touchstart", p), document.addEventListener("touchend", p)
					}

					function d() {
						document.removeEventListener("mousemove", p), document.removeEventListener("mousedown", p), document.removeEventListener("mouseup", p), document.removeEventListener("pointermove", p), document.removeEventListener("pointerdown", p), document.removeEventListener("pointerup", p), document.removeEventListener("touchmove", p), document.removeEventListener("touchstart", p), document.removeEventListener("touchend", p)
					}

					function p(h) {
						h.target.nodeName.toLowerCase() !== "html" && (t = !1, d())
					}
					document.addEventListener("keydown", l, !0), document.addEventListener("mousedown", m, !0), document.addEventListener("pointerdown", m, !0), document.addEventListener("touchstart", m, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", o, !0), document.addEventListener("visibilitychange", s, !0), E(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
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
					return u
				},
				gm: function() {
					return a
				}
			});
			const e = () => {
					var i, f, c;
					return (i = window) === null || i === void 0 || (f = i.bootstrap) === null || f === void 0 || (c = f.data) === null || c === void 0 ? void 0 : c.security_token
				},
				r = () => {
					var i, f, c;
					return !!((i = t.g.bootstrap) === null || i === void 0 || (f = i.data) === null || f === void 0 || (c = f.user) === null || c === void 0 ? void 0 : c.id)
				},
				a = () => {
					var i, f;
					return !!((i = t.g.bootstrap) === null || i === void 0 || (f = i.data) === null || f === void 0 ? void 0 : f.is_kendo)
				},
				u = () => {
					var i, f, c, l;
					return (i = window) === null || i === void 0 || (f = i.bootstrap) === null || f === void 0 || (c = f.data) === null || c === void 0 || (l = c.user) === null || l === void 0 ? void 0 : l.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				O5: function() {
					return u
				},
				Xm: function() {
					return a
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
				a = () => (r() || "").indexOf("C0002") !== -1,
				u = () => (r() || "").indexOf("C0003") !== -1,
				i = () => (r() || "").indexOf("C0004") !== -1,
				f = () => (r() || "").indexOf("C0005") !== -1,
				c = n => {
					const o = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${o}`
				},
				l = () => {
					var n;
					const o = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (o == null ? void 0 : o.country) || ""
				},
				m = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				AI: function() {
					return b
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
					return T
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
				u = t("../../../common/util/types/src/utils/index.ts"),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f = t("../../../../node_modules/cookie/index.js");
			const c = "cf-sync-locale-with-cps",
				l = a.Q.en_US,
				m = "en_US",
				n = "cf-locale";

			function o() {
				const M = (0, f.parse)(document.cookie);
				return i.Z.get(n) || M[n] || null
			}

			function s(M) {
				document.cookie = (0, f.serialize)(n, M, {
					path: "/",
					maxAge: 31536e3,
					secure: !0
				}), i.Z.set(n, M)
			}

			function E() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0,
					secure: !0
				}), cache.remove(n)
			}
			const d = M => (0, u.Yd)(a.Q).find(x => a.Q[x] === M) || m,
				p = [],
				h = [],
				O = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.fr_FR, a.Q.it_IT, a.Q.pt_BR, a.Q.ko_KR, a.Q.ja_JP, a.Q.zh_CN, a.Q.zh_TW],
				v = {
					test: [...O, ...h, ...p],
					development: [...O, ...h, ...p],
					staging: [...O, ...h, ...p],
					production: [...O, ...h]
				},
				g = M => {
					const x = a.Q[M];
					return v.production.includes(x)
				},
				b = () => Object.keys(a.Q).filter(M => g(M)),
				_ = M => {
					const x = a.Q[M];
					return h.includes(x)
				},
				T = M => A[M],
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
				L = r().locale();
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
			}), r().locale(L)
		},
		"../react/utils/translator.tsx": function(K, y, t) {
			"use strict";
			t.d(y, {
				QT: function() {
					return d
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
					return s
				},
				oc: function() {
					return E
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = t("../../../common/intl/intl-core/src/Translator.ts"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				u = t.n(a),
				i = t("../flags.ts");
			const f = new r.Z({
				pseudoLoc: (0, i.J8)("is_pseudo_loc")
			});

			function c(p, ...h) {
				return f.t(p, ...h)
			}
			const l = f;

			function m(p, ...h) {
				return markdown(c(p, h))
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

			function o(p, h) {
				return p in h ? h[p] : void 0
			}
			const s = a.Trans,
				E = a.I18n,
				d = a.useI18n
		},
		"../react/utils/url.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Ct: function() {
					return M
				},
				Fl: function() {
					return ce
				},
				KT: function() {
					return V
				},
				NF: function() {
					return b
				},
				Nw: function() {
					return A
				},
				Pd: function() {
					return T
				},
				Uh: function() {
					return B
				},
				cm: function() {
					return O
				},
				e1: function() {
					return L
				},
				el: function() {
					return q
				},
				hW: function() {
					return F
				},
				pu: function() {
					return R
				},
				qR: function() {
					return ne
				},
				td: function() {
					return _
				},
				uW: function() {
					return D
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				r = t("../react/pages/abuse/constants.ts"),
				a = t("../react/pages/d1/routes.ts"),
				u = t("../react/pages/images/routes.ts"),
				i = t("../react/pages/pages/routes.ts"),
				f = t("../react/pages/r2/routes.ts"),
				c = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/zoneless-workers/routes.ts"),
				m = t("../../../../node_modules/query-string/query-string.js"),
				n = t.n(m);

			function o(k) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var ie = arguments[Z] != null ? Object(arguments[Z]) : {},
						pe = Object.keys(ie);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(ie).filter(function(de) {
						return Object.getOwnPropertyDescriptor(ie, de).enumerable
					})), pe.forEach(function(de) {
						s(k, de, ie[de])
					})
				}
				return k
			}

			function s(k, Z, ie) {
				return Z = E(Z), Z in k ? Object.defineProperty(k, Z, {
					value: ie,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[Z] = ie, k
			}

			function E(k) {
				var Z = d(k, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function d(k, Z) {
				if (typeof k != "object" || k === null) return k;
				var ie = k[Symbol.toPrimitive];
				if (ie !== void 0) {
					var pe = ie.call(k, Z || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(k)
			}
			const {
				endsWithSlash: p
			} = e.default, h = new RegExp(/([0-9a-z]{32})/g), O = k => k == null ? void 0 : k.replace(h, ":id"), v = (k, Z) => {
				const ie = k.replace(p, "").split("/");
				return ie.slice(0, 2).concat([Z]).concat(ie.slice(3)).join("/")
			}, g = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), b = k => `/${k.replace(p,"").replace(/^\//,"")}`, _ = k => A("add-site", k), T = k => A("billing", k), A = (k, Z) => Z ? `/${Z}${k?`/${k}`:""}` : `/?to=/:account/${k}`, L = () => {
				const k = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return k ? k[1] : null
			}, M = (k, Z) => n().stringify(o({}, n().parse(k), Z)), x = (k = "") => k.toString().replace(/([\/]{1,})$/, ""), w = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], S = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, j = /^\/(\w{32,})(\/[^.]*)?/, W = k => w.includes(k), G = k => !W(k), ne = k => !W(k) && j.test(k), q = k => !W(k) && S.test(k), re = k => S.exec(k), F = k => {
				if (q(k)) return k.split("/").filter(Z => Z.length > 0)[1]
			}, z = k => j.exec(k), D = k => {
				if (ne(k)) {
					const Z = z(k);
					if (Z) return Z[1]
				}
			}, U = k => ne(k) && k.split("/")[2] === "register-domain", I = k => U(k) ? k.split("/") : null, P = k => {
				if (q(k)) {
					const [, , , Z, ie, pe, de, ve] = k.split("/");
					return Z === "traffic" && ie === "load-balancing" && pe === "pools" && de === "edit" && ve
				}
			}, B = k => {
				const Z = I(k);
				if (Z) return Z[3]
			}, X = (k, Z) => {
				var ie, pe;
				return ((ie = k.pattern.match(/\:/g)) !== null && ie !== void 0 ? ie : []).length - ((pe = Z.pattern.match(/\:/g)) !== null && pe !== void 0 ? pe : []).length
			}, ee = [...Object.values(c.C), ...Object.values(u.KJ), ...Object.values(f._j), ...Object.values(l._j), ...Object.values(i._j), ...Object.values(a._)].sort(X);

			function ce(k) {
				if (!G(k)) return k;
				for (const ve of ee)
					if (ve.expression.test(k)) return ve.pattern;
				if (r.eM.abuseReportTab.expression.test(k)) {
					const ve = k.split("/"),
						oe = ve[ve.length - 1];
					return r.eM.abuseReportTab.pattern.replace(":tab", oe)
				}
				if (r.eM.abuseReport.expression.test(k)) return r.eM.abuseReport.pattern;
				const Z = I(k);
				if (Z) {
					const [, , ve, , ...oe] = Z;
					return `/:accountId/${ve}/:domainName/${oe.join("/")}`
				}
				if (P(k)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const pe = re(k);
				if (pe) {
					const [, , , , ve] = pe;
					return `/:accountId/:zoneName${ve||""}`
				}
				const de = z(k);
				if (de) {
					const [, , ve] = de;
					return `/:accountId${ve||""}`
				}
				return k
			}

			function R(k) {
				if (!!k) try {
					const ie = k.split(".").pop();
					if (ie && ie.length > 0) return ie
				} catch {}
			}

			function V(k, Z = document.location.href) {
				try {
					const ie = new URL(k),
						pe = new URL(Z);
					if (ie.origin === pe.origin) return `${ie.pathname}${ie.search}${ie.hash}`
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
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				i = t.n(u);
			const f = /^\/domainconnect\/v2\/domaintemplates\//i,
				c = "domain-connect-redirect",
				l = () => {
					const m = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						f.test(m.pathname) && a.Z.set(c, m, 60 * 1e3)
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
					return u
				},
				b: function() {
					return i
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				r = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function a() {
				var f, c, l, m, n, o;
				return (f = window) === null || f === void 0 || (c = f.bootstrap) === null || c === void 0 || (l = c.data) === null || l === void 0 || (m = l.user) === null || m === void 0 || (n = m.betas) === null || n === void 0 || (o = n.some) === null || o === void 0 ? void 0 : o.call(n, s => s === "zone_level_access_beta")
			}

			function u() {
				const f = !!(0, e.Z)("zone-level-access");
				return a() || f
			}

			function i(f) {
				const c = !!(0, r.z1)("zone-level-access")(f);
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
					var u, i;
					return (u = window) === null || u === void 0 || (i = u.build) === null || i === void 0 ? void 0 : i.dashVersion
				},
				a = () => {
					var u;
					return ((0, e.parse)((u = document) === null || u === void 0 ? void 0 : u.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Wi: function() {
					return Ce
				},
				IM: function() {
					return me
				},
				yV: function() {
					return C
				},
				Ug: function() {
					return St
				},
				v_: function() {
					return N
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../react/utils/bootstrap.ts"),
				u = t("../react/app/providers/storeContainer.js"),
				i = t("../react/common/selectors/languagePreferenceSelector.ts"),
				f = t("../flags.ts"),
				c = t("../../../../node_modules/cookie/index.js"),
				l = t("../react/utils/url.ts"),
				m = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../../../../node_modules/lodash-es/memoize.js"),
				s = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				E = t("../utils/getDashVersion.ts"),
				d = t("../react/common/selectors/accountSelectors.ts"),
				p = t("../react/common/selectors/entitlementsSelectors.ts"),
				h = t("../react/common/utils/getEnvironment.ts");

			function O(ae) {
				for (var se = 1; se < arguments.length; se++) {
					var fe = arguments[se] != null ? Object(arguments[se]) : {},
						_e = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(fe).filter(function(be) {
						return Object.getOwnPropertyDescriptor(fe, be).enumerable
					})), _e.forEach(function(be) {
						v(ae, be, fe[be])
					})
				}
				return ae
			}

			function v(ae, se, fe) {
				return se = g(se), se in ae ? Object.defineProperty(ae, se, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ae[se] = fe, ae
			}

			function g(ae) {
				var se = b(ae, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function b(ae, se) {
				if (typeof ae != "object" || ae === null) return ae;
				var fe = ae[Symbol.toPrimitive];
				if (fe !== void 0) {
					var _e = fe.call(ae, se || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(ae)
			}
			const _ = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				T = (0, o.Z)(ae => {
					try {
						return _.assertDecode((0, c.parse)(ae))
					} catch (se) {
						return console.error(se), {}
					}
				}),
				A = ae => (se, fe, _e) => {
					try {
						const Xe = window.location.pathname,
							et = (0, u.bh)().getState(),
							lt = T(document.cookie),
							ft = O({
								page: (0, l.Fl)(_e.page || window.location.pathname),
								dashVersion: (0, E.t)(),
								environment: (0, h.Z)()
							}, lt);
						if (se === "identify") {
							var be, Ue;
							const ze = {
								gates: (0, s.T2)(et) || {},
								country: (be = t.g) === null || be === void 0 || (Ue = be.bootstrap) === null || Ue === void 0 ? void 0 : Ue.ip_country
							};
							return ae(se, fe, O({}, ft, ze, _e))
						} else {
							const ze = {
								accountId: (0, l.uW)(Xe),
								zoneName: (0, l.hW)(Xe),
								domainName: (0, l.Uh)(Xe)
							};
							if ((0, l.qR)(Xe)) {
								var Ze;
								const nt = (0, d.D0)(et);
								ze.isEntAccount = !!(nt == null || (Ze = nt.meta) === null || Ze === void 0 ? void 0 : Ze.has_enterprise_zones) || (0, p.p1)(et)
							}
							if ((0, l.el)(Xe)) {
								var ot;
								const nt = (0, m.nA)(et);
								ze.zoneId = nt == null ? void 0 : nt.id, ze.plan = nt == null || (ot = nt.plan) === null || ot === void 0 ? void 0 : ot.legacy_id
							}
							return ae(se, fe, O({}, ft, ze, _e))
						}
					} catch (Xe) {
						return console.error(Xe), ae(se, fe, _e)
					}
				},
				L = ae => async (se, fe, _e) => {
					try {
						return await ae(se, fe, _e)
					} catch (be) {
						if (console.error(be), !N()) throw be;
						return {
							status: "rejected",
							reason: be
						}
					}
				};
			var M = t("../react/app/components/AccountHome/tracking.ts"),
				x = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				w = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				S = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				j = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				W = t("../react/common/middleware/sparrow/errors.ts"),
				G = t("../react/pages/abuse/constants.ts"),
				ne = t("../react/pages/blocked-content/constants.ts"),
				q = t("../react/pages/caching/tracking.tsx"),
				re = t("../react/pages/dns/dns-records/tracking.ts"),
				F = t("../react/pages/home/alerts/tracking.ts"),
				z = t("../react/pages/home/audit-log/tracking.ts"),
				D = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				U = t("../react/pages/home/configurations/lists/tracking.ts"),
				I = t("../react/pages/home/domain-registration/tracking.ts"),
				P = t("../react/pages/home/members/sparrowEvents.ts"),
				B = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				X = t("../react/pages/hyperdrive/tracking.ts"),
				ee = t("../react/pages/magic/network-monitoring/constants.ts"),
				ce = t("../react/pages/magic/overview/tracking.ts"),
				R = t("../react/pages/magic/packet-captures/constants.ts"),
				V = t("../react/pages/page-rules/tracking.ts"),
				k = t("../react/pages/pages/constants.ts"),
				Z = t("../react/pages/pipelines/tracking.ts"),
				ie = t("../react/pages/profile/tracking.ts"),
				pe = t("../react/pages/secrets-store/resources/constants.ts"),
				de = t("../react/pages/security-center/tracking.ts"),
				ve = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
				oe = t("../react/pages/security/api-shield/tracking.ts"),
				Ie = t("../react/pages/security/bots/tracking.ts"),
				Le = t("../react/pages/security/overview/resources/constants.ts"),
				Me = t("../react/pages/security/page-shield/resources/index.ts"),
				je = t("../react/pages/security/resources/constants.tsx"),
				xe = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				Ve = t("../react/pages/security/settings/index.tsx"),
				Je = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Fe = t("../react/pages/shared-config/sparrowEvents.tsx"),
				Ke = t("../react/pages/spectrum/tracking.tsx"),
				H = t("../react/pages/traffic/argo/tracking.ts"),
				he = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				Se = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				We = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				pt = t("../react/pages/turnstile/tracking.ts"),
				dt = t("../react/pages/user-groups/sparrowEvents.ts"),
				Ae = t("../react/pages/zoneless-workers/constants.ts"),
				rt = t("../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts"),
				J = t("../react/pages/analytics/eos/resources/tracking.ts");
			const Te = ((ae, se, ...fe) => n.eg.union([n.eg.literal(ae), n.eg.literal(se), ...fe.map(_e => n.eg.literal(_e))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", ...Object.values(J.f), "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "copy table cell", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Click on DNS Firewall feedback link", "Click on DNS Firewall add Cluster", "Hover on DNS Firewall feedback toast", "Click create DNS firewall cluster", "Click edit DNS firewall cluster", "Click on DNS Firewall edit Cluster button", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "route to custom error rules", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", M.gX.SPARROW_PROJECTS_TABLE_CLICK, M.gX.SPARROW_EMPTY_STATE_CTA_CLICK, M.gX.SPARROW_PRODUCT_CARD_CLICK, M.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, M.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, M.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, M.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, M.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, M.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, M.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ae.QV.clickedDownloadAnalytics, Ae.QV.clickedPrintAnalytics, Ae.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ae.QV.addWCITriggerToExistingWorker, Ae.QV.updateWCITrigger, Ae.QV.deleteWCITrigger, Ae.QV.addWCITriggerToNewWorker, Ae.QV.createWCIBuildForNewWorker, Ae.QV.completedWCIBuildForNewWorker, Ae.QV.changedDefaultConfigurations, Ae.QV.clickElement, k.QV.toggledPagesSmartPlacement, k.QV.downloadDemoProject, Ae.QV.clickCreateWorkerFromRepoNextStep, Ae.QV.clickCreateWorkerFromRepoPreviousStep, Ae.QV.clickCreateNewSCMConnection, Ae.QV.redirectFromSCMOAuth, Ae.QV.clickSubmitError, Ae.QV.selectTemplate, Ae.QV.clickedListTemplates, Ae.QV.clickedImportRepository, Ae.QV.clickedClonePublicRepositoryFromUrl, Ae.QV.templateStubWorkerCreated, Ae.QV.templateStubWorkerCreationFailed, Ae.QV.templateRepositoryCreated, Ae.QV.templateRepositoryCreationFailed, Ae.QV.copyTemplateC3Command, Ae.QV.templateDeployClick, Ae.QV.reauthenticateGithubModalShown, Ae.QV.updateGithubPermissionsClicked, Ae.QV.D2W_importRepository, Ae.QV.D2W_stubWorkerCreated, Ae.QV.D2W_stubWorkerCreationFailed, Ae.QV.D2W_repositoryCreated, Ae.QV.D2W_repositoryCreationFailed, Ae.QV.D2W_resourcesProvisioned, Ae.QV.D2W_resourceProvisioningFailed, Ae.QV.D2W_githubAPIRateLimitReached, Ae.QV.createResource, Ae.QV.deleteResource, Ae.QV.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", Ie.N3.INITIAL_FETCH_SCORES, Ie.N3.FETCH_CONFIGURATION, Ie.N3.INITIAL_FETCH_TIME_SERIES, Ie.N3.INITIAL_FETCH_ATTRIBUTES, Ie.N3.UPDATE_SETTINGS, Ie.N3.DELETE_RULE, Ie.N3.UPDATE_RULE, Ie.N3.FETCH_RULES, Ie.N3.CONFIGURE_BOT_MANAGEMENT, Ie.N3.WAF_RULES_REDIRECT, B.F.TOGGLE_TCP_PROTECTION, B.F.GET_TCP_PROTECTION_PREFIXES, B.F.CREATE_TCP_PROTECTION_PREFIXES, B.F.CREATE_TCP_PROTECTION_PREFIX, B.F.UPDATE_TCP_PROTECTION_PREFIX, B.F.DELETE_TCP_PROTECTION_PREFIX, B.F.DELETE_TCP_PROTECTION_PREFIXES, B.F.GET_TCP_PROTECTION_ALLOWLIST, B.F.CREATE_TCP_PROTECTION_ALLOWLIST, B.F.UPDATE_TCP_PROTECTION_ALLOWLIST, B.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, B.F.DELETE_TCP_PROTECTION_ALLOWLIST, B.F.GET_SYN_PROTECTION_RULES, B.F.GET_SYN_PROTECTION_RULE, B.F.CREATE_SYN_PROTECTION_RULE, B.F.UPDATE_SYN_PROTECTION_RULE, B.F.DELETE_SYN_PROTECTION_RULE, B.F.GET_TCP_FLOW_PROTECTION_RULES, B.F.GET_TCP_FLOW_PROTECTION_RULE, B.F.CREATE_TCP_FLOW_PROTECTION_RULE, B.F.UPDATE_TCP_FLOW_PROTECTION_RULE, B.F.DELETE_TCP_FLOW_PROTECTION_RULE, B.F.GET_SYN_PROTECTION_FILTERS, B.F.GET_SYN_PROTECTION_FILTER, B.F.CREATE_SYN_PROTECTION_FILTER, B.F.UPDATE_SYN_PROTECTION_FILTER, B.F.DELETE_SYN_PROTECTION_FILTER, B.F.GET_TCP_FLOW_PROTECTION_FILTERS, B.F.GET_TCP_FLOW_PROTECTION_FILTER, B.F.CREATE_TCP_FLOW_PROTECTION_FILTER, B.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, B.F.DELETE_TCP_FLOW_PROTECTION_FILTER, B.F.GET_DNS_PROTECTION_RULES, B.F.GET_DNS_PROTECTION_RULE, B.F.CREATE_DNS_PROTECTION_RULE, B.F.UPDATE_DNS_PROTECTION_RULE, B.F.DELETE_DNS_PROTECTION_RULE, Me.FV.MANAGE_PAGE_SHIELD_POLICY, Me.FV.CONFIGURE_PAGE_SHIELD, Me.FV.VIEW_DETECTED_CONNECTIONS, Me.FV.VIEW_DETECTED_SCRIPTS, Me.FV.VIEW_PAGE_SHIELD_POLICIES, Me.FV.VIEW_PAGE_SHIELD_SETTINGS, Me.FV.OPEN_MUTABLE_VERSION_TOOLTIP, Me.FV.SHOW_MUTABLE_VERSION_TOOLTIP, U.y.CREATE_LIST, U.y.DELETE_LIST, U.y.ADD_LIST_ITEM, U.y.DELETE_LIST_ITEM, X.KO.PURCHASE_WORKERS_PAID, X.KO.LIST_CONFIGS, X.KO.SEARCH_CONFIGS, X.KO.CREATE_HYPERDRIVE_CONFIG, X.KO.VIEW_CONFIG_DETAILS, X.KO.UPDATE_CACHING_SETTINGS, X.KO.UPDATE_ORIGIN_CONN_LIM_SETTINGS, X.KO.DELETE_HYPERDRIVE_CONFIG, X.KO.CLICK_HYPERDRIVE_DOCUMENTATION, X.KO.CLICK_GET_STARTED_GUIDE, X.KO.CLICK_CONNECTIVITY_GUIDES, X.KO.CLICK_QUICK_LINK, X.KO.CLICK_DISCORD, X.KO.CLICK_COMMUNITY, Ke.N.CNAME, Ke.N.IP_ADDRESS, Ke.N.LB, Ke.N.UPDATE_CNAME, Ke.N.UPDATE_IP_ADDRESS, Ke.N.UPDATE_LB, Ke.N.DISABLE, q.N.TIERED_CACHE, q.N.CACHE_PURGE, q.N.CACHE_ANALYTICS, ...(0, pt.P)(), ...(0, j.x4)(), ...(0, Ve.m8)(), ...(0, P.SH)(), ...(0, dt.Ky)(), ...(0, w.Cf)(), We.N.CREATE, We.N.EVENTS, We.N.ANALYTICS, We.N.UPDATE, We.N.GENERATE_PREVIEW, de.RY.INITIATE_URL_SCAN, de.RY.LOAD_SCAN_INFO, de.Ev.LOAD_THREAT_EVENTS, de.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, de.Ev.THREAT_EVENTS_FILTERS, de.Ev.ABUSE_REPORT_BUTTON_CLICK, de.Ev.ABUSE_REPORT_SUBMIT_CLICK, de.Ev.ABUSE_REPORT_SUBMIT_FAILED, de.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, de.v9.EXPAND_INSIGHT_ROW, de.v9.ONE_CLICK_RESOLVE_BUTTON, de.v9.FOLLOW_RESOLVE_URL, de.v9.MANAGE_INSIGHT, de.v9.CLICK_SCAN_NOW, de.v9.CLICK_EXPORT_INSIGHTS, de.v9.BULK_ARCHIVE, de.v9.CLICK_DETAILS_BUTTON, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].detailedMetrics, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].createEndpoint, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].deployRouting, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].deleteRouting, oe.Fj[oe.kq.API_DISCOVERY].viewDiscoveredEndpoints, oe.Fj[oe.kq.API_DISCOVERY].saveDiscoveredEndpoint, oe.Fj[oe.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, oe.Fj[oe.kq.SCHEMA_VALIDATION].viewSchemasList, oe.Fj[oe.kq.SCHEMA_VALIDATION].uploadSchema, oe.Fj[oe.kq.SCHEMA_VALIDATION].viewSchemaAdoption, oe.Fj[oe.kq.SCHEMA_VALIDATION].downloadSchema, oe.Fj[oe.kq.SCHEMA_VALIDATION].deleteSchema, oe.Fj[oe.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, oe.Fj[oe.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, oe.Fj[oe.kq.SEQUENCE_ANALYTICS].viewSequencesPage, oe.Fj[oe.kq.JWT_VALIDATION].viewJWTRules, oe.Fj[oe.kq.JWT_VALIDATION].addJWTRule, oe.Fj[oe.kq.JWT_VALIDATION].editJWTRule, oe.Fj[oe.kq.JWT_VALIDATION].deleteJWTRule, oe.Fj[oe.kq.JWT_VALIDATION].reprioritizeJWTRule, oe.Fj[oe.kq.JWT_VALIDATION].viewJWTConfigs, oe.Fj[oe.kq.JWT_VALIDATION].addJWTConfig, oe.Fj[oe.kq.JWT_VALIDATION].editJWTConfig, oe.Fj[oe.kq.JWT_VALIDATION].deleteJWTConfig, oe.Fj[oe.kq.SETTINGS].redirectToFirewallRulesTemplate, oe.Fj[oe.kq.SETTINGS].redirectToPages, oe.Fj[oe.kq.SETTINGS].listSessionIdentifiers, oe.Fj[oe.kq.SETTINGS].listRequestsContainingSessionIdentifiers, oe.Fj[oe.kq.SETTINGS].addOrRemoveSessionIdentifiers, oe.Fj[oe.kq.SETTINGS].redirectToCustomRules, oe.Fj[oe.kq.SETTINGS].listAllFallthroughSchemas, oe.Fj[oe.kq.SEQUENCE_RULES].listSequenceRules, oe.Fj[oe.kq.SEQUENCE_RULES].deleteSequenceRule, oe.Fj[oe.kq.SEQUENCE_RULES].reorderSequenceRule, oe.Fj[oe.kq.SEQUENCE_RULES].createSequenceRule, oe.Fj[oe.kq.SEQUENCE_RULES].editSequenceRule, z.Q.TOGGLE_V2, z.Q.FILTER, z.Q.FILTER_COUNTS, z.Q.FEEDBACK, z.Q.API_LATENCY, Se.Z.ANALYTICS, Se.Z.CREATE_AND_DEPLOY, Se.Z.CREATE_MONITOR_LINK, Se.Z.CREATE_MONITOR, Se.Z.CREATE_POOL_LINK, Se.Z.CREATE_POOL, Se.Z.EDIT_MONITOR, Se.Z.EDIT_POOL, Se.Z.LOAD_BALANCING_TABLE, Se.Z.POOL_TABLE, Se.Z.EDIT_MONITOR_LINK, Se.Z.EDIT_POOL_LINK, ...he.eT, F.y.SECONDARY_DNS_NOTIFICATION_CREATE, F.y.SECONDARY_DNS_NOTIFICATION_UPDATE, F.y.SECONDARY_DNS_NOTIFICATION_DELETE, re.U.ZONE_TRANSFER_SUCCESS, re.U.DNS_RECORD_CREATE, re.U.DNS_RECORD_UPDATE, re.U.DNS_RECORD_DELETE, D.Y.PEER_DNS_CREATE, D.Y.PEER_DNS_UPDATE, D.Y.PEER_DNS_DELETE, D.Y.ZONE_TRANSFER_ENABLE, D.Y.ZONE_TRANSFER_DISABLE, H.V.ARGO_ENABLEMENT, H.V.ARGO_GEO_ANALYTICS_FETCH, H.V.ARGO_GLOBAL_ANALYTICS_FETCH, R.X.VIEW_BUCKETS_LIST, R.X.CREATE_BUCKET, R.X.VALIDATE_BUCKET, R.X.DELETE_BUCKET, R.X.VIEW_CAPTURES_LIST, R.X.CREATE_SIMPLE_CAPTURE, R.X.CREATE_FULL_CAPTURE, R.X.VIEW_FULL_CAPTURE, R.X.DOWNLOAD_SIMPLE_CAPTURE, ee.bK.VIEW_RULES, ee.bK.CREATE_RULE, ee.bK.UPDATE_RULE, ee.bK.DELETE_RULE, ee.bK.VIEW_CONFIGURATION, ee.bK.CREATE_CONFIGURATION, ee.bK.UPDATE_CONFIGURATION, ee.bK.DELETE_CONFIGURATION, ce.r8.VIEW_ALERTS, ce.r8.VIEW_ALERTS_HISTORY, ce.r8.MAGIC_OVERVIEW_ANALYTICS, ce.VZ.CREATE_SITE, ce.VZ.CREATE_TUNNEL, ce.VZ.CREATE_STATIC_ROUTE, ve.DC.CLICK_ADAPTIVE_SAMPLING, ve.DC.CLICK_TO_LOG_EXPLORER_BANNER, ve.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, ve.DC.CLICK_SWITCH_TO_RAW_LOGS, ve.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", I.U.REGISTER_DOMAIN_SEARCH_SUBMIT, I.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, I.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, I.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, I.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, I.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, I.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, I.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, I.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, I.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, I.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, I.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, I.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, I.U.REGISTER_DOMAIN_CHECKOUT_ERROR, I.U.TRANSFER_DOMAIN_CHANGE_STEP, I.U.RENEW_DOMAIN_COMPLETED, I.U.RESTORE_DOMAIN_INIT, I.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, I.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, I.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, I.U.RESTORE_DOMAIN_FAILURE, I.U.RESTORE_DOMAIN_COMPLETED, I.U.DOMAIN_DELETE_INIT, I.U.DOMAIN_DELETE_COMPLETED, I.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, I.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, I.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, I.U.DOMAIN_DELETE_CONFIRM_DELETE, I.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, I.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, I.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, I.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, I.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, I.U.DOMAIN_MOVE_START_FLOW, I.U.DOMAIN_MOVE_OPEN_DOCS, I.U.DOMAIN_MOVE_CLOSE_FLOW, I.U.DOMAIN_MOVE_PROGRESS_FLOW, I.U.DOMAIN_MOVE_SUBMIT, I.U.DOMAIN_MOVE_INITIATE_SUCCESS, I.U.DOMAIN_MOVE_INITIATE_ERROR, I.U.DOMAIN_MOVE_CANCEL, I.U.DOMAIN_MOVE_CANCEL_SUCCESS, I.U.DOMAIN_MOVE_CANCEL_ERROR, I.U.ACTION_CENTER_NAVIGATE, I.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, I.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, I.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, pe.z3.CREATE_SECRET, pe.z3.DELETE_SECRET, pe.z3.BIND_SECRET, pe.z3.DUPLICATE_SECRET, pe.z3.EDIT_SECRET, Z.KO.CLICK_GET_STARTED_GUIDE, Z.KO.CLICK_PIPELINE_DOCUMENTATION, Z.KO.CLICK_QUICK_LINK, Z.KO.CREATE_PIPELINE, Z.KO.DELETE_PIPELINE, Z.KO.LIST_PIPELINES, Z.KO.VIEW_PIPELINE, x.S.EXISTING_DOMAIN, x.S.NEW_DOMAIN, x.S.WAF_RULESET, x.S.WORKERS, x.S.PAGES, x.S.R2, x.S.ACCOUNT_MEMBERS, V._.TEMPLATE_PRODUCT_SELECTED, V._.TEMPLATE_SELECTED, V._.TEMPLATE_SAVE_DRAFT, V._.TEMPLATE_CANCEL, V._.TEMPLATE_DEPLOY, Fe.D.CLICK_GO_BACK_SHARE_MODAL, Fe.D.CLICK_MENU_ITEM_SHARE, Fe.D.CLICK_ON_CANCEL_SHARE_MODAL, Fe.D.CLICK_ON_CLOSE_SHARE_MODAL, Fe.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, Fe.D.CLICK_ON_DELETE_RULESET, Fe.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, Fe.D.CLICK_ON_EDIT_SHARE_PERMISSION, Fe.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, Fe.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, Fe.D.CLICK_ON_SHARE_TABLE_ROW, je.pR.CLICK_GEOGRAPHICAL_TEMPLATE, je.pR.CLICK_IP_TEMPLATE, je.pR.CLICK_USER_AGENT_TEMPLATE, je.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, Ve.vc.CREATED, Ve.vc.ENABLED, Ve.vc.DISABLED, Ve.vc.DELETED, Ve.vc.UPDATED, Ve.vc.DOWNLOADED, ne.Gk.REQUEST_REVIEW, ne.Gk.COPY_URL, S.v.FIELD, S.v.OPERATOR, Je.Vj.SHOW_LCC_MIGRATION_BANNER, Je.Vj.CLICK_LCC_DOCUMENTATION, Je.Vj.CLICK_LCC_UPGRADE_GUIDE, Je.Vj.SHOW_LCC_MIGRATION_WARNING, xe.y.CLICK_DISMISS_INELIGIBILITY, xe.y.CLICK_NEXT_STEP, xe.y.CLICK_OPT_IN, xe.y.CLICK_OPT_IN_BUTTON, xe.y.CLICK_OPT_OUT_BUTTON, xe.y.DISPLAY_MODAL, xe.y.DISPLAY_OPT_OUT_MODAL, xe.y.DISPLAY_TOOLTIP_NOT_AVAILABLE, xe.y.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, Le.AZ.LOAD_INSIGHTS, Le.AZ.OPEN_SIDE_MODAL_INSIGHT, Le.AZ.CLOSE_SIDE_MODAL_INSIGHT, Le.AZ.CLICK_ACTION_INSIGHT, rt.YC.CHANGE_SETTING, rt.YC.LOAD_SETTINGS, rt.YC.OPEN_SIDE_MODAL_SETTING, rt.YC.CLOSE_SIDE_MODAL_SETTING, rt.YC.FILTER_SETTING, ve.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, ve.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, ve.DC.OPEN_SIDE_DRAWER, ve.DC.CLOSE_SIDE_DRAWER, ie.QV[ie.Xn].clickLoginFromMobileApp2fa, ie.QV[ie.Xn].clickTryOther2FAMethodOrBackupCode, ie.QV[ie.Xn].clickTryRecovery, ie.QV[ie.xq].clickRegenerateBackupCodes, G.Vq.APPEAL_MITIGATION_SUBMIT, G.Vq.APPEAL_MITIGATION_SUCCESS, G.Vq.APPEAL_MITIGATION_FAILURE, G.Vq.CLICK_ABUSE_REPORT_ID, G.Vq.CLICK_ABUSE_REPORT_MITIGATIONS_LINK),
				Pe = n.eg.exactStrict(n.eg.object({
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
				Oe = (ae, se) => {
					const [fe, _e] = Be(se);
					let be, Ue;
					return (0, n.nM)(Te.decode(ae)) && (be = new W.Uh(ae)), _e && _e.length > 0 && (Ue = new W.oV(ae, _e)), [fe, be, Ue]
				},
				Be = ae => {
					const se = Pe.decode(ae);
					if ((0, n.nM)(se)) {
						const fe = se.left.map(({
							context: _e
						}) => _e.map(({
							key: be
						}) => be)).reduce((_e, be) => _e.concat(be), []).filter(_e => _e in ae);
						return [qe(fe, ae), fe]
					}
					return [ae, []]
				},
				qe = (ae, se) => Object.entries(se).reduce((fe, [_e, be]) => (ae.includes(_e) || (fe[_e] = be), fe), {}),
				it = ae => (se, fe, _e) => {
					const [be, Ue, Ze] = Oe(fe, _e);
					if (Ue) throw Ue;
					return Ze && console.error(Ze), ae(se, fe, be)
				};
			var gt = t("../react/utils/zaraz.ts");
			const Et = {
					identify: !0
				},
				yt = ae => (se, fe, _e) => (Et[fe] || gt.tg === null || gt.tg === void 0 || gt.tg.track(fe, _e), ae(se, fe, _e));
			var Mt = t("../react/common/selectors/userSelectors.ts"),
				Ge = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function st(ae) {
				for (var se = 1; se < arguments.length; se++) {
					var fe = arguments[se] != null ? Object(arguments[se]) : {},
						_e = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(fe).filter(function(be) {
						return Object.getOwnPropertyDescriptor(fe, be).enumerable
					})), _e.forEach(function(be) {
						at(ae, be, fe[be])
					})
				}
				return ae
			}

			function at(ae, se, fe) {
				return se = ct(se), se in ae ? Object.defineProperty(ae, se, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ae[se] = fe, ae
			}

			function ct(ae) {
				var se = mt(ae, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function mt(ae, se) {
				if (typeof ae != "object" || ae === null) return ae;
				var fe = ae[Symbol.toPrimitive];
				if (fe !== void 0) {
					var _e = fe.call(ae, se || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(ae)
			}
			const Ne = new Set(["cf_argo", "load_balancing_basic_plus"]),
				Y = new Set(["pro", "business"]),
				le = ({
					price: ae,
					ratePlanId: se,
					ratePlanName: fe,
					frequency: _e,
					isNewSubscription: be
				}) => ({
					event: "purchase",
					new_subscription: be,
					ecommerce: {
						transaction_id: (0, Ge.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: ae
					},
					items: [{
						item_id: se,
						item_name: fe || se,
						frequency: _e,
						price: ae
					}]
				}),
				ye = ae => {
					const {
						price: se,
						frequency: fe,
						plan: _e,
						ratePlanId: be,
						ratePlanName: Ue
					} = ae;
					return Y.has(_e) ? st({}, le({
						price: se,
						ratePlanId: be,
						ratePlanName: Ue,
						frequency: fe,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				we = ae => {
					const {
						price: se,
						frequency: fe,
						ratePlan: _e,
						ratePlanName: be
					} = ae;
					return Ne.has(_e) ? st({}, le({
						price: se,
						ratePlanId: _e,
						ratePlanName: be,
						frequency: fe,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				Re = ae => {
					const {
						price: se,
						frequency: fe,
						plan: _e,
						ratePlanId: be,
						ratePlanName: Ue,
						label: Ze
					} = ae;
					return Y.has(_e) ? st({}, le({
						price: se,
						frequency: fe,
						ratePlanId: be,
						ratePlanName: Ue,
						isNewSubscription: !1
					}), {
						label: Ze || _e
					}) : void 0
				},
				Ye = ae => {
					const {
						price: se,
						frequency: fe,
						ratePlan: _e,
						ratePlanName: be,
						oldRatePlan: Ue
					} = ae;
					return Ne.has(_e) ? st({}, le({
						price: se,
						frequency: fe,
						ratePlanId: _e,
						ratePlanName: be,
						isNewSubscription: !1
					}), {
						label: `${Ue}->${_e}`
					}) : void 0
				},
				tt = "pageview",
				wt = "create zone",
				_t = "create user",
				At = "Plan Purchase Success",
				Qe = "Product Purchase Success",
				ht = "Plan Update Success",
				Dt = "Product Update Success",
				Pt = {
					[tt]: !0,
					[wt]: !0,
					[_t]: !0,
					[At]: !0,
					[Qe]: !0,
					[ht]: !0,
					[Dt]: !0
				},
				Nt = ae => {
					var se;
					return !!((se = ae.gates.assignments) === null || se === void 0 ? void 0 : se["dx-enable-adobe-launch"])
				},
				Lt = ae => {
					const se = /\|MCMID\|([0-9]+)\|/,
						fe = ae.match(se);
					return fe ? fe[1] : void 0
				},
				Rt = ae => {
					var se;
					const {
						deviceViewport: fe,
						page: _e,
						previousPage: be,
						pageName: Ue,
						utm_campaign: Ze,
						_ga: ot,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Xe
					} = ae, {
						origin: et
					} = window.location, lt = (0, Mt.PR)((0, u.bh)().getState());
					return {
						event: be !== void 0 && _e !== be ? "virtual_page_view" : "page_load",
						device_type: fe,
						hostname: et,
						language: navigator.language,
						locale: (0, i.r)((0, u.bh)().getState()),
						page_location: _e ? `${et}${_e}` : "[redacted]",
						page_path: _e ? `${_e}` : "[redacted]",
						page_referrer: be ? `${et}/${be}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: Ue || "[redacted]",
						page_url: _e ? `${et}${_e}` : "[redacted]",
						query: Ze ? `?utm_campaign=${Ze}` : "[redacted]",
						user_properties: {
							ga_client_id: (se = ot) !== null && se !== void 0 ? se : void 0,
							ga_client_id_s: ot ? `s${ot}` : void 0,
							user_id: Ce() ? lt == null ? void 0 : lt.id : void 0,
							ecid: Xe ? Lt(Xe) : void 0
						}
					}
				},
				bt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				xt = ae => {
					const {
						status: se
					} = ae;
					return se === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				Ct = (ae, se) => {
					switch (ae) {
						case tt:
							return Rt(se);
						case wt:
							return bt();
						case _t:
							return xt(se);
						case At:
							return ye(se);
						case Qe:
							return we(se);
						case ht:
							return Re(se);
						case Dt:
							return Ye(se);
						default:
							return
					}
				},
				Bt = ae => (se, fe, _e) => {
					if (Pt[fe]) {
						var be;
						const Ue = Ct(fe, _e);
						Ue && ((be = window.dataLayer) === null || be === void 0 || be.push(Ue))
					}
					return ae(se, fe, _e)
				};
			var Ut = t("../react/utils/cookiePreferences.ts");

			function Tt(ae) {
				for (var se = 1; se < arguments.length; se++) {
					var fe = arguments[se] != null ? Object(arguments[se]) : {},
						_e = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(fe).filter(function(be) {
						return Object.getOwnPropertyDescriptor(fe, be).enumerable
					})), _e.forEach(function(be) {
						jt(ae, be, fe[be])
					})
				}
				return ae
			}

			function jt(ae, se, fe) {
				return se = $t(se), se in ae ? Object.defineProperty(ae, se, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ae[se] = fe, ae
			}

			function $t(ae) {
				var se = Wt(ae, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function Wt(ae, se) {
				if (typeof ae != "object" || ae === null) return ae;
				var fe = ae[Symbol.toPrimitive];
				if (fe !== void 0) {
					var _e = fe.call(ae, se || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(ae)
			}
			const St = ae => {
					const fe = Nt((0, u.bh)().getState());
					r().init(Tt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: N() && !(0, a.gm)() && Ce(),
						middlewares: [L, it, A, yt, ...fe ? [Bt] : []]
					}, ae))
				},
				C = () => {
					r().identify(Tt({}, (0, e.getAttribution)(), {
						locale: (0, i.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, f.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				N = () => !0,
				me = () => {
					(0, Ut.kT)("sparrow_id")
				},
				Ce = () => (0, Ut.Xm)()
		},
		"../utils/initStyles.ts": function(K, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = t("../react/app/providers/storeContainer.js");
			const a = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				i = c => {
					const l = [];
					for (let m in c.colors) {
						const n = c.colors[m];
						if (Array.isArray(n) && m !== "categorical")
							for (let o = 0; o < n.length; ++o) l.push(`--cf-${m}-${o}:${n[o]};`)
					}
					return l.join(`
`)
				},
				f = () => {
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
					let m = document.getElementById(a);
					m ? m.innerText = "" : (m = document.createElement("style"), m.id = a, u.appendChild(m)), m.appendChild(document.createTextNode(l)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(f), y.Z = f
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
					setEventId: f => (!f || typeof f != "string" || (a = f), a),
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
					return l
				},
				tg: function() {
					return c
				},
				yn: function() {
					return n
				}
			});

			function e(s) {
				for (var E = 1; E < arguments.length; E++) {
					var d = arguments[E] != null ? Object(arguments[E]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(h) {
						return Object.getOwnPropertyDescriptor(d, h).enumerable
					})), p.forEach(function(h) {
						r(s, h, d[h])
					})
				}
				return s
			}

			function r(s, E, d) {
				return E = a(E), E in s ? Object.defineProperty(s, E, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[E] = d, s
			}

			function a(s) {
				var E = u(s, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function u(s, E) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(s, E || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(s)
			}
			const i = {
					track: (s, E) => null,
					set: (s, E) => console.log(`zaraz.set(${s}, ${E})`)
				},
				f = {
					track: (s, E) => {
						var d;
						(d = window.zaraz) === null || d === void 0 || d.track(s, e({}, E, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (s, E) => {
						var d;
						return (d = window.zaraz) === null || d === void 0 ? void 0 : d.set(s, E)
					}
				};
			let c;
			const l = () => {
					window.zaraz, c = f
				},
				m = ["email", "first_name", "last_name"],
				n = s => {
					m.forEach(E => {
						var d;
						(d = c) === null || d === void 0 || d.set(E, s[E])
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
				u = t.n(a),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(f),
				l = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				m = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-icon/es/index.js"),
				o = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				s = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-forms/es/index.js"),
				E = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				d = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				p = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				h = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				O = t("../../../common/component/component-filter-bar/src/constants.js"),
				v = t("../../../common/component/component-filter-bar/src/utils.js");

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(U) {
					for (var I = 1; I < arguments.length; I++) {
						var P = arguments[I];
						for (var B in P) Object.prototype.hasOwnProperty.call(P, B) && (U[B] = P[B])
					}
					return U
				}, g.apply(this, arguments)
			}

			function b(U) {
				for (var I = 1; I < arguments.length; I++) {
					var P = arguments[I] != null ? Object(arguments[I]) : {},
						B = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(P).filter(function(X) {
						return Object.getOwnPropertyDescriptor(P, X).enumerable
					})), B.forEach(function(X) {
						_(U, X, P[X])
					})
				}
				return U
			}

			function _(U, I, P) {
				return I = T(I), I in U ? Object.defineProperty(U, I, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[I] = P, U
			}

			function T(U) {
				var I = A(U, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function A(U, I) {
				if (typeof U != "object" || U === null) return U;
				var P = U[Symbol.toPrimitive];
				if (P !== void 0) {
					var B = P.call(U, I || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(U)
			}
			const L = 70,
				M = (0, i.createStyledComponent)(({
					showOverflow: U
				}) => b({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, U ? {} : {
					maxHeight: L,
					overflow: "hidden"
				})),
				x = (0, i.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				w = (0, i.createStyledComponent)(({
					theme: U
				}) => ({
					backgroundColor: U.colors.background,
					py: 1,
					px: 2,
					borderRadius: U.radii[2],
					border: `1px solid ${U.colors.gray[7]}`,
					fontSize: U.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: U.colors.gray[4]
					}
				}), "div"),
				S = (0, i.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				j = (0, i.createStyledComponent)(({
					theme: U
				}) => ({
					color: U.colors.gray[4],
					mr: 1
				}), "span"),
				W = (0, i.createStyledComponent)(() => ({
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
				G = (0, i.createStyledComponent)(({
					buttonStyle: U
				}) => b({
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
				}, U), m.zx),
				ne = (0, i.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				q = (0, i.createStyledComponent)(({
					theme: U
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: U.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: U.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: U.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: U.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				re = (0, i.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				F = U => U.current ? [...U.current.children].reduce((I, P) => (P.offsetTop >= L && I++, I), 0) : 0;
			let z = 0;
			class D extends e.Component {
				constructor() {
					super();
					_(this, "overflowWrapper", (0, e.createRef)()), _(this, "hasOverflowed", I => {
						const P = F(this.overflowWrapper);
						I.scrollHeight > L && P >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (I.scrollHeight < L || P === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), _(this, "addNewFilter", () => {
						const {
							filterDefinitions: I
						} = this.props, P = (0, v.TE)(I), B = Object.keys(P)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: B,
								operator: (0, v.uv)(B, P),
								value: (0, v.TT)(B, P)
							}
						})
					}), _(this, "handleOpenFilterEdit", I => {
						this.setState({
							openFilter: I,
							filterChanges: b({}, this.props.filters[I])
						})
					}), _(this, "handleRemoveFilterClick", (I, P) => {
						I.stopPropagation(), this.removeFilter(P)
					}), _(this, "removeFilter", I => {
						const {
							handleFiltersChange: P
						} = this.props, B = [...this.props.filters], X = B[I];
						B.splice(I, 1), P(B), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: X.key,
							operator: X.operator,
							value: X.value
						})
					}), _(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), _(this, "handleFilterSubmit", I => {
						const {
							filterDefinitions: P
						} = this.props;
						I.preventDefault();
						const {
							filterChanges: B
						} = this.state, X = typeof P[B.key].parse == "function" ? Array.isArray(B.value) ? B.value.map(P[B.key].parse) : P[B.key].parse(B.value) : B.value;
						if (P[B.key].validate && (Array.isArray(X) ? !X.every(P[B.key].validate) : !P[B.key].validate(X))) return this.setState({
							invalid: !0
						});
						const ee = [...this.props.filters],
							ce = b({}, B, {
								value: X
							}),
							R = !ee[this.state.openFilter];
						R ? ee.push(ce) : ee[this.state.openFilter] = b({}, ce), this.props.handleFiltersChange(ee, ce), (R ? this.props.onAddFilter : this.props.onEditFilter)({
							field: ce.key,
							operator: ce.operator,
							value: ce.value
						}), this.closeOpenFilterChanges()
					}), _(this, "handlePendingKeyChange", ({
						value: I
					}) => {
						const {
							filterDefinitions: P
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: I,
								operator: (0, v.uv)(I, P),
								value: (0, v.TT)(I, P)
							}
						})
					}), _(this, "handlePendingOperatorChange", ({
						value: I
					}) => {
						let P = b({}, this.state.filterChanges, {
							operator: I
						});
						if ((0, v.dr)(I)) {
							var B, X;
							((B = this.state.filterChanges) === null || B === void 0 ? void 0 : B.value) && !Array.isArray((X = this.state.filterChanges) === null || X === void 0 ? void 0 : X.value) && (P.value = [this.state.filterChanges.value])
						} else {
							var ee, ce, R;
							((ee = this.state.filterChanges) === null || ee === void 0 ? void 0 : ee.value) && Array.isArray((ce = this.state.filterChanges) === null || ce === void 0 ? void 0 : ce.value) && ((R = this.state.filterChanges) === null || R === void 0 ? void 0 : R.value.length) > 0 && (P.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: P
						})
					}), _(this, "handlePendingValueChange", I => {
						this.setState({
							invalid: !1,
							filterChanges: b({}, this.state.filterChanges, {
								value: I
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
						formatLabel: P,
						filterDefinitions: B
					} = this.props, {
						operator: X
					} = this.state.filterChanges, ee = B[this.state.filterChanges.key], ce = this.state.filterChanges.value, R = k => Array.isArray(k) ? k.map(Z => Z.value) : (k == null ? void 0 : k.value) || null;
					if (ee.renderValueComponent) return ee.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (ee.type) {
						case O.k.custom: {
							var V;
							return r().createElement(ee.CustomComponent, g({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (V = ee == null ? void 0 : ee.customProps) !== null && V !== void 0 ? V : {}))
						}
						case O.k.select:
							return (0, v.dr)(X) ? r().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !ee.options,
								value: typeof ce.split == "function" ? ce == null ? void 0 : ce.split(",") : Array.isArray(ce) ? ce : [],
								options: ee.options ? ee.options.map(k => ({
									value: k.value || k,
									label: k.label || P(this.state.filterChanges.key, k, I)
								})) : ce ? (Array.isArray(ce) ? ce : ce.split(",")).map(k => ({
									label: k,
									value: k
								})) : [],
								noOptionsMessage: () => null,
								placeholder: r().createElement(f.Trans, {
									id: ee.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: ee.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: k => {
									this.handlePendingValueChange(R(k))
								},
								isValidNewOption: k => {
									const Z = ee.validate;
									return !Z && k || k && Z([k])
								},
								getNewOptionData: (k, Z) => ({
									value: k,
									label: Z
								})
							}) : r().createElement(s.hQ, {
								hideLabel: !0,
								value: ce,
								options: ee.options.map(k => ({
									value: k,
									label: P(this.state.filterChanges.key, k, I)
								})),
								onChange: ({
									value: k
								}) => this.handlePendingValueChange(k)
							});
						case O.k.string:
						default:
							return (0, v.dr)(X) ? r().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof ce.split == "function" ? ce == null ? void 0 : ce.split(",") : Array.isArray(ce) ? ce : [],
								options: ce ? (Array.isArray(ce) ? ce : ce.split(",")).map(k => ({
									label: k,
									value: k
								})) : [],
								noOptionsMessage: () => null,
								placeholder: I.t("analytics.report.filters.labels.placeholder", {
									example: B[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: k => {
									this.handlePendingValueChange(R(k))
								},
								isValidNewOption: k => {
									const Z = ee.validate;
									return !Z && k || k && Z([k])
								},
								getNewOptionData: (k, Z) => ({
									value: k,
									label: Z
								}),
								formatCreateLabel: k => I.t("filter_editor.value_create_label", {
									value: k
								})
							}) : r().createElement(f.I18n, null, k => r().createElement(l.I, {
								value: this.state.filterChanges.value,
								onChange: Z => this.handlePendingValueChange(Z.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: k.t("analytics.report.filters.labels.placeholder", {
									example: B[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: I,
						filterDefinitions: P,
						modalStyles: B,
						filterIconType: X,
						buttonStyle: ee,
						secondaryActionComponent: ce
					} = this.props, R = F(this.overflowWrapper), V = `filterPanel${this.state.id}`, k = this.state.openFilter !== null;
					return r().createElement(f.I18n, null, Z => r().createElement(E.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, r().createElement(re, null, r().createElement(E.ZC, {
						display: "flex",
						flexDirection: "row"
					}, r().createElement(G, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": k,
						"aria-controls": V,
						inverted: !0,
						buttonStyle: ee
					}, r().createElement(n.J, {
						type: X || "add",
						mr: 1,
						label: Z.t("common.add", {
							_: "Add"
						})
					}), r().createElement(f.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), !!ce && r().createElement(E.ZC, null, ce)), this.props.filters.length > 0 && r().createElement(ne, null, r().createElement(f.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), r().createElement(M, {
						innerRef: this.overflowWrapper,
						overflowLimit: L,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((ie, pe) => {
						const {
							key: de,
							operator: ve,
							value: oe
						} = ie, Ie = P[de].ignoreLabelTranslation ? P[de].label : Z.t(P[de].label), Le = Z.t(`analytics.report.filters.operators.${ve}`), Me = Array.isArray(oe) ? oe.map(xe => I(de, xe, Z)).join(", ") : I(de, oe, Z), je = `${Ie} ${Le} ${Me}`;
						return r().createElement(x, {
							key: `${de}-${ve}-${oe}`,
							title: je
						}, r().createElement(w, {
							onClick: () => this.handleOpenFilterEdit(pe)
						}, r().createElement(E.ZC, {
							display: "flex"
						}, r().createElement(S, null, Ie), r().createElement(j, null, Le), r().createElement(W, null, Me), (0, v.oN)(ie, P) ? r().createElement(o.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : r().createElement(q, {
							onClick: xe => this.handleRemoveFilterClick(xe, pe),
							"aria-label": "remove"
						}, r().createElement(n.J, {
							type: "remove"
						})))))
					})), k && r().createElement(h.Z, {
						id: V,
						filterDefinitions: P,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, v.oN)(this.state.filterChanges, P),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: I,
						modalStyles: B
					}), this.state.hasOverflowed && r().createElement(p.Z, {
						count: R,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			_(D, "propTypes", {
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
			}), y.Z = D
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
					return u.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				r = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				a = t("../../../common/component/component-filter-bar/src/constants.js"),
				u = t("../../../common/component/component-filter-bar/src/utils.js"),
				i = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				OZ: function() {
					return i
				},
				YB: function() {
					return u
				}
			});

			function e(c, l, m) {
				return l = r(l), l in c ? Object.defineProperty(c, l, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[l] = m, c
			}

			function r(c) {
				var l = a(c, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function a(c, l) {
				if (typeof c != "object" || c === null) return c;
				var m = c[Symbol.toPrimitive];
				if (m !== void 0) {
					var n = m.call(c, l || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(c)
			}
			class u extends Error {
				constructor(l, m) {
					super(m);
					e(this, "translationKey", void 0), this.translationKey = l, this.name = "TranslatorError"
				}
			}
			class i extends u {
				constructor(l, m) {
					super(l, `Translation key not found: ${l}, locale: ${m}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var f = null
		},
		"../../../common/util/types/src/api/domain.ts": function(K, y, t) {
			"use strict";
			t.d(y, {
				Aw: function() {
					return A
				},
				Ib: function() {
					return _
				},
				Ks: function() {
					return L
				},
				MS: function() {
					return T
				},
				PN: function() {
					return p
				},
				Pp: function() {
					return u
				},
				Q3: function() {
					return E
				},
				TS: function() {
					return d
				},
				W7: function() {
					return v
				},
				dN: function() {
					return M
				},
				eF: function() {
					return b
				},
				qp: function() {
					return n
				},
				wR: function() {
					return m
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
				f = e.eg.object({
					registrant: u.optional,
					technical: u.optional,
					administrator: u.optional,
					billing: u.optional
				}),
				c = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: f.optional,
					years: e.eg.number
				}),
				l = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let m = function(x) {
				return x.ONBOARDING_INITIATED = "Onboarding Initiated", x.ONBOARDED = "Onboarded", x.PENDING_REGISTRY_LOCK = "Pending Registry Lock", x.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", x.REGISTRY_UNLOCKED = "Registry Unlocked", x.LOCKED = "Locked", x.FAILED_TO_LOCK = "Failed To Lock", x.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", x.UNLOCKED = "Unlocked", x.OFFBOARDED = "Offboarded", x
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
						status: e.eg.enum(m).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: l.optional,
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
				E = e.eg.object({
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
			let p = function(x) {
				return x.PENDING = "pending", x.VERIFIED = "verified", x.REJECTED = "rejected", x.PENDING_DELETE = "pending_delete", x.DELETED = "deleted", x
			}({});
			const h = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(p),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				O = e.eg.object({
					designated_approvers: e.eg.array(h)
				});
			let v = function(x) {
				return x.PENDING = "pending", x.PENDING_UPDATE = "pending_update", x.ENABLED = "enabled", x.DISABLED = "disabled", x
			}({});
			const g = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(v)
				}),
				b = e.eg.intersection([g, O]),
				_ = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let T = function(x) {
				return x.UNLOCK_APPROVAL = "UnlockApprovalRequest", x.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", x.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", x.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", x
			}({});
			const A = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				L = e.eg.object({
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
					return u
				},
				qu: function() {
					return e
				},
				zc: function() {
					return f
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
				u = function(c) {
					return c.ZONE_LOCKDOWN = "zoneLockdown", c.UA_BLOCK = "uaBlock", c.BIC = "bic", c.HOT = "hot", c.SECURITY_LEVEL = "securityLevel", c.RATE_LIMIT = "rateLimit", c.WAF = "waf", c
				}({}),
				i = function(c) {
					return c.DEFAULT = "default", c.MEDIUM = "medium", c.LOW = "low", c.EOFF = "eoff", c.HIGH = "high", c.VERY_HIGH = "very_high", c
				}({}),
				f = function(c) {
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
			const r = (a, u) => {
				if (u !== void 0) throw new Error("Unexpected object: " + a);
				return u
			}
		},
		"../react/common/out.css": function(K, y, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[K.id, e, ""]
			]);
			var r, a, u = {
				hmr: !0
			};
			u.transform = r, u.insertInto = void 0;
			var i = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, u);
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
  .-mx-5 {
    margin-inline: calc(var(--spacing) * -5);
  }
  .mx-1 {
    margin-inline: calc(var(--spacing) * 1);
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
  .bg-bg-secondary {
    background-color: var(--color-bg-secondary);
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
  .focus-within\\:border-primary\\! {
    &:focus-within {
      border-color: var(--color-primary) !important;
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
  .dark\\:disabled\\:bg-neutral-800 {
    &:where(.dark, .dark *) {
      &:disabled {
        background-color: var(--color-neutral-800);
      }
    }
  }
  .dark\\:disabled\\:\\!text-neutral-500 {
    &:where(.dark, .dark *) {
      &:disabled {
        color: var(--color-neutral-500) !important;
      }
    }
  }
  .dark\\:disabled\\:hover\\:bg-neutral-800 {
    &:where(.dark, .dark *) {
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
					var f = new Error("Cannot find module '" + a + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				});
				var u = e[a],
					i = u[0];
				return t.e(u[1]).then(function() {
					return t.t(i, 1 | 16)
				})
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", K.exports = r
		}
	}
]);

//# debugId=9c8a09a9-ceda-5b3f-a5ed-334bb719ab53