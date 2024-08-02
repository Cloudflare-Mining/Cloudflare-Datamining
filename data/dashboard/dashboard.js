! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "994ab916-b4fa-553f-8776-7270c5f5ba44")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.js": function(W, v, n) {
			"use strict";
			n.d(v, {
				J8: function() {
					return i
				},
				Jd: function() {
					return s
				},
				QY: function() {
					return E
				},
				Qw: function() {
					return g
				},
				ki: function() {
					return p
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/utils/url.ts"),
				c = n("../../../../node_modules/query-string/query-string.js"),
				u = n.n(c),
				m = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				a;
			const g = () => Object.keys(m.Z).reduce((f, S) => (S.indexOf("cf_beta.") === 0 && m.Z.get(S) === "true" && f.push(S.split(".").slice(1).join(".")), f), []),
				p = () => {
					var f, S, U;
					return ((f = window) === null || f === void 0 || (S = f.bootstrap) === null || S === void 0 || (U = S.data) === null || U === void 0 ? void 0 : U.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((a = window) === null || a === void 0 ? void 0 : a.location) && m.Z) {
				const f = u().parse(window.location.search);
				f.beta_on && m.Z.set(`cf_beta.${f.beta_on}`, !0), f.beta_off && m.Z.set(`cf_beta.${f.beta_off}`, !1)
			}
			const h = {},
				t = f => {
					var S, U, M;
					return Object.prototype.hasOwnProperty.call(h, f) ? h[f] : ((S = window) === null || S === void 0 || (U = S.bootstrap) === null || U === void 0 || (M = U.data) === null || M === void 0 ? void 0 : M.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(x => x === f) ? (h[f] = !0, !0) : (h[f] = !1, !1)
				},
				r = f => m.Z ? m.Z.get(`cf_beta.${f}`) === !0 : !1,
				i = f => r(f) || t(f),
				d = () => !0,
				s = () => {
					var f, S, U;
					return ((f = window) === null || f === void 0 || (S = f.bootstrap) === null || S === void 0 || (U = S.data) === null || U === void 0 ? void 0 : U.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				E = f => {
					const S = (0, e.uF)(f),
						U = (S == null ? void 0 : S.roles) || [];
					return (0, o.qR)(location.pathname) && U.length === 1 && U.some(M => M === "Administrator Read Only")
				}
		},
		"../init.ts": function(W, v, n) {
			"use strict";
			n.r(v);
			var e = n("../../../../node_modules/url-search-params-polyfill/index.js"),
				o = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				c = n("../../../../node_modules/fetch-intercept/lib/browser.js");

			function u(y) {
				for (var O = 1; O < arguments.length; O++) {
					var K = arguments[O] != null ? Object(arguments[O]) : {},
						J = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols(K).filter(function(de) {
						return Object.getOwnPropertyDescriptor(K, de).enumerable
					})), J.forEach(function(de) {
						m(y, de, K[de])
					})
				}
				return y
			}

			function m(y, O, K) {
				return O = a(O), O in y ? Object.defineProperty(y, O, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[O] = K, y
			}

			function a(y) {
				var O = g(y, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function g(y, O) {
				if (typeof y != "object" || y === null) return y;
				var K = y[Symbol.toPrimitive];
				if (K !== void 0) {
					var J = K.call(y, O || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(y)
			}
			const p = y => {
				const O = y && y.headers || {},
					K = new Headers(O);
				return K.append("X-Cross-Site-Security", "dash"), u({}, y, {
					headers: K
				})
			};
			(0, c.register)({
				request: (y, O) => {
					try {
						return new URL(y), y === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", O] : [y, O]
					} catch {
						return [y, p(O)]
					}
				}
			});
			var h = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				r = n("../react/app/providers/storeContainer.js");
			let i = "";
			const d = 61;

			function s(y) {
				const O = y.substr(1);
				if (O && i !== O) {
					const K = document.getElementById(O);
					if (K) {
						const J = K.getBoundingClientRect().top;
						if (J > 0) {
							const de = J - d;
							document.documentElement.scrollTop = de
						}
					}
				}
				i = O
			}

			function E(y) {
				y.listen(O => s(O.hash))
			}
			var f = n("../../../../node_modules/cookie/index.js"),
				S = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const U = "CF_dash_version",
				M = "current",
				x = "hash",
				k = "deploymentPreview",
				L = y => y === M ? te() : X(),
				te = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				X = (y = 72) => {
					const O = 36e5;
					return new Date(Date.now() + y * O)
				},
				Q = y => {
					switch (y) {
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
				H = (y, O = !1) => {
					var K;
					const J = Q(y),
						de = `
  <style type="text/css">
    #loading-state {
      display: flex;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
    }
    .dark-mode body {
      background-color: #1d1d1d;
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
    <h1 id="error-title">${J.title}</h1>
    <p id="error-description">${J.description}</p>
  </div>
  `,
						_e = O ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${S.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(K=window.build)===null||K===void 0?void 0:K.branch}</span>.</p>
      <a href="/version?hash=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return de + _e
				},
				V = y => {
					var O;
					const K = document.getElementById(y);
					!K || (O = K.parentNode) === null || O === void 0 || O.removeChild(K)
				};

			function G() {
				const y = document.getElementById("loading-state");
				y == null || y.classList.add("hide"), y == null || y.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(V)
				})
			}

			function j(y) {
				var O;
				const K = document.getElementById("loading-state"),
					J = !!((O = f.parse(document.cookie)) === null || O === void 0 ? void 0 : O[U]);
				!K || (K.innerHTML = H(y == null ? void 0 : y.code, J))
			}
			var Y = n("../utils/initStyles.ts"),
				C = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				$ = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				R = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				ae = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				z = n("../../../../node_modules/history/esm/history.js"),
				_ = (0, z.lX)(),
				b = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				I = n("../react/utils/url.ts");
			const Z = (0, b.Rf)();
			let ne;

			function D(y) {
				return q(y, "react-router-v5")
			}

			function q(y, O) {
				return (K, J = !0, de = !0) => {
					J && Z && Z.location && (ne = K({
						name: (0, I.Fl)(Z.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": O
						}
					})), de && y.listen && y.listen((_e, Ee) => {
						if (Ee && (Ee === "PUSH" || Ee === "POP")) {
							ne && ne.finish();
							const Qe = {
								"routing.instrumentation": O
							};
							ne = K({
								name: (0, I.Fl)(_e.pathname),
								op: "navigation",
								tags: Qe
							})
						}
					})
				}
			}
			var N = n("../react/common/selectors/languagePreferenceSelector.ts"),
				ie = n("../flags.js"),
				pe = n("../utils/getDashVersion.ts"),
				ge = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ve = n.n(ge),
				Re = n("../../../common/intl/intl-core/src/errors.ts"),
				we = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				De = n("../react/common/middleware/sparrow/errors.ts");
			const F = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				ce = !0,
				Ce = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				Be = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function ze(y, O, K) {
				return O = Ue(O), O in y ? Object.defineProperty(y, O, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[O] = K, y
			}

			function Ue(y) {
				var O = He(y, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function He(y, O) {
				if (typeof y != "object" || y === null) return y;
				var K = y[Symbol.toPrimitive];
				if (K !== void 0) {
					var J = K.call(y, O || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(y)
			}
			class je {
				constructor() {
					ze(this, "name", je.id)
				}
				setupOnce() {
					n.g.console && (0, we.hl)(n.g.console, "error", O => (...K) => {
						const J = K.find(de => de instanceof Error);
						if (F && J) {
							let de, _e = !0;
							if (J instanceof De.ez) {
								const Ee = J instanceof De.oV ? J.invalidProperties : void 0;
								de = {
									tags: {
										"sparrow.eventName": J.eventName
									},
									extra: {
										sparrow: {
											eventName: J.eventName,
											invalidProperties: Ee
										}
									},
									fingerprint: [J.name ? J.name : "SparrowValidationError"]
								}, _e = !1
							} else if (J instanceof ge.SparrowIdCookieError) de = {
								extra: {
									sparrowIdCookie: J.cookie
								},
								fingerprint: [J.name ? J.name : "SparrowIdCookieError"]
							};
							else if (J.name === "ChunkLoadError") {
								de = {
									fingerprint: [J.name]
								};
								try {
									de.tags = {
										chunkId: J.message.split(" ")[2],
										chunkUrl: J.request
									}
								} catch {}
							} else J instanceof Re.YB && (de = {
								fingerprint: ["TranslatorError", J.translationKey]
							});
							_e && h.Tb(J, de)
						}
						typeof O == "function" && O.apply(n.g.console, K)
					})
				}
			}
			ze(je, "id", "ConsoleErrorIntegration");
			var et = null,
				Ke = n("../utils/sentry/lastSentEventId.ts"),
				Ve = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				xe = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const $e = y => {
					const O = async K => {
						var J, de;
						const _e = {
							envelope: K.body,
							url: y.url,
							isPreviewDeploy: (J = window) === null || J === void 0 || (de = J.build) === null || de === void 0 ? void 0 : de.isPreviewDeploy,
							release: (0, pe.t)()
						};
						try {
							const Ee = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(_e)
							});
							return {
								statusCode: Ee.status,
								headers: {
									"x-sentry-rate-limits": Ee.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": Ee.headers.get("Retry-After")
								}
							}
						} catch (Ee) {
							return console.log(Ee), (0, xe.$2)(Ee)
						}
					};
					return Ve.q(y, O)
				},
				Xe = () => {
					if (F && ce) {
						var y, O, K, J, de, _e, Ee, Qe, pt, tt;
						let Pt = "production";
						((y = window) === null || y === void 0 || (O = y.build) === null || O === void 0 ? void 0 : O.isPreviewDeploy) && (Pt += "-preview"), $.S({
							dsn: F,
							release: (0, pe.t)(),
							environment: Pt,
							ignoreErrors: Be,
							allowUrls: Ce,
							autoSessionTracking: !1,
							integrations: [new R.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new je, new ae.jK.BrowserTracing({
								routingInstrumentation: D(_)
							})],
							tracesSampleRate: 0,
							transport: $e,
							beforeSend: Yt => (Ke.e.setEventId(Yt.event_id), Yt)
						});
						const Jt = (0, r.bh)().getState();
						h.rJ({
							LOCAL_STORAGE_FLAGS: (0, ie.Qw)(),
							USER_BETA_FLAGS: (0, ie.ki)(),
							meta: {
								connection: {
									type: (K = window) === null || K === void 0 || (J = K.navigator) === null || J === void 0 || (de = J.connection) === null || de === void 0 ? void 0 : de.effectiveType,
									bandwidth: (_e = window) === null || _e === void 0 || (Ee = _e.navigator) === null || Ee === void 0 || (Qe = Ee.connection) === null || Qe === void 0 ? void 0 : Qe.downlink
								},
								languagePreference: (0, N.r)(Jt),
								isPreviewDeploy: (pt = window) === null || pt === void 0 || (tt = pt.build) === null || tt === void 0 ? void 0 : tt.isPreviewDeploy
							},
							utilGates: (0, C.T2)(Jt)
						}), window.addEventListener("unhandledrejection", function(Yt) {})
					}
				},
				Ze = y => {
					y ? h.av({
						id: y
					}) : h.av(null)
				};
			var re = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				A = () => {
					let y;
					try {
						y = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), y = window.location.search
					}
					if (!y.includes("remote[")) return;
					const O = new URLSearchParams(y),
						K = {};
					for (let [J, de] of O) J.includes("remote") && (K[J.replace(/remote\[|\]/g, "")] = de);
					re.Z.set("mfe-remotes", JSON.stringify(K))
				},
				B = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				oe = n("../node_modules/uuid/dist/esm-browser/v4.js");
			const be = "ANON_USER_ID";

			function Pe() {
				var y, O, K, J;
				let de = (y = n.g) === null || y === void 0 || (O = y.bootstrap) === null || O === void 0 || (K = O.data) === null || K === void 0 || (J = K.user) === null || J === void 0 ? void 0 : J.id;
				if (!de) {
					let _e = re.Z.get(be);
					if (!_e) {
						let Ee = (0, oe.Z)();
						re.Z.set(be, Ee), _e = Ee
					}
					return _e
				}
				return de
			}
			async function Oe() {
				const y = (0, r.bh)();
				y.dispatch((0, B.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await y.dispatch((0, C.UL)({
					userId: Pe()
				}))
			}
			var Ie = n("../libs/init/initBootstrap.ts"),
				Se = n("webpack/sharing/consume/default/react/react"),
				fe = n.n(Se),
				ke = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Ge = n("webpack/sharing/consume/default/react-dom/react-dom"),
				Ae = n("webpack/sharing/consume/default/react-redux/react-redux"),
				at = n("../../../../node_modules/swr/core/dist/index.mjs"),
				it = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				w = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				ee = n("../react/shims/focus-visible.js"),
				ue = n("../react/app/components/DeepLink/index.ts"),
				me = n("../../../../node_modules/prop-types/index.js"),
				he = n.n(me),
				Me = n("../react/utils/translator.tsx"),
				Je = n("../../../common/intl/intl-react/src/index.ts"),
				Te = n("../../../dash/intl/intl-translations/src/index.ts"),
				Bt = n("../../../../node_modules/query-string/query-string.js"),
				nt = n.n(Bt),
				St = n("../react/common/actions/userActions.ts"),
				st = n("../react/common/selectors/userSelectors.ts"),
				qe = n("../react/utils/i18n.ts"),
				Ot = n("../react/utils/bootstrap.ts");

			function Ft(y) {
				for (var O = 1; O < arguments.length; O++) {
					var K = arguments[O] != null ? Object(arguments[O]) : {},
						J = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols(K).filter(function(de) {
						return Object.getOwnPropertyDescriptor(K, de).enumerable
					})), J.forEach(function(de) {
						Ut(y, de, K[de])
					})
				}
				return y
			}

			function Ut(y, O, K) {
				return O = ot(O), O in y ? Object.defineProperty(y, O, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[O] = K, y
			}

			function ot(y) {
				var O = jt(y, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function jt(y, O) {
				if (typeof y != "object" || y === null) return y;
				var K = y[Symbol.toPrimitive];
				if (K !== void 0) {
					var J = K.call(y, O || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(y)
			}
			let Fe = nt().parse(location.search);
			const It = y => {
					const O = (0, Ot.$8)() ? [(0, Te.Fy)(Te.if.changes), (0, Te.Fy)(Te.if.common), (0, Te.Fy)(Te.if.navigation), (0, Te.Fy)(Te.if.overview), (0, Te.Fy)(Te.if.onboarding), (0, Te.Fy)(Te.if.invite), (0, Te.Fy)(Te.if.login), (0, Te.Fy)(Te.if.dns), (0, Te.Fy)(Te.n4.ssl_tls), (0, Te.Fy)(Te.if.message_inbox)] : [(0, Te.Fy)(Te.if.common), (0, Te.Fy)(Te.if.invite), (0, Te.Fy)(Te.if.login), (0, Te.Fy)(Te.if.onboarding)];
					Fe.lang ? xt(y) : re.Z.get(qe.th) && Lt(y, re.Z.get(qe.ly));
					const K = async J => (await Promise.all(O.map(_e => _e(J)))).reduce((_e, Ee) => Ft({}, _e, Ee), {});
					return fe().createElement(Je.RD.Provider, {
						value: y.languagePreference
					}, fe().createElement(Je.bd, {
						translator: Me.Vb,
						locale: y.languagePreference
					}, fe().createElement(Je.lm, {
						loadPhrases: K
					}, y.children)))
				},
				xt = async y => {
					let O = Fe.lang.substring(0, Fe.lang.length - 2) + Fe.lang.substring(Fe.lang.length - 2, Fe.lang.length).toUpperCase();
					if (!(0, N.v)(O)) {
						console.warn(`${O} is not a supported locale.`), delete Fe.lang, y.history.replace({
							search: nt().stringify(Fe)
						});
						return
					}
					re.Z.set(qe.ly, O), delete Fe.lang, Lt(y, O), y.isAuthenticated || y.history.replace({
						search: nt().stringify(Fe)
					})
				}, Lt = async (y, O) => {
					if (y.isAuthenticated) try {
						await y.setUserCommPreferences({
							"language-locale": O
						}, {
							hideErrorAlert: !0
						}), re.Z.remove(qe.th), y.history.replace({
							search: nt().stringify(Fe)
						})
					} catch (K) {
						re.Z.set(qe.th, !0), console.error(K)
					} else re.Z.set(qe.th, !0)
				}, $t = y => {
					const O = (0, st.PR)(y);
					return {
						isAuthenticated: !!(O && O.id),
						languagePreference: re.Z.get(qe.ly) || (0, N.r)(y)
					}
				}, Gt = {
					setUserCommPreferences: St.V_
				};
			var wt = (0, ke.withRouter)((0, Ae.connect)($t, Gt)(It));
			It.propTypes = {
				history: he().object,
				languagePreference: he().string.isRequired,
				children: he().node.isRequired,
				isAuthenticated: he().bool,
				setUserCommPreferences: he().func.isRequired
			};
			var Wt = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				l = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let T;
			const se = ({
				selectorPrefix: y = "c_"
			} = {}) => (T || (T = (0, l.Z)({
				dev: !1,
				selectorPrefix: y
			})), T);
			var ye = n("../react/common/components/ModalManager.tsx"),
				Le = n("../react/app/components/ErrorBoundary.tsx"),
				Ye = n("../react/common/actions/notificationsActions.ts");
			const ct = (n.g.bootstrap || {}).data || {};
			class lt extends fe().Component {
				componentDidMount() {
					ct.messages && this.dispatchNotificationActions(ct.messages)
				}
				dispatchNotificationActions(O) {
					O.forEach(K => {
						const {
							type: J,
							message: de,
							persist: _e
						} = K;
						["success", "info", "warn", "error"].includes(J) && this.props.notifyAdd(J, (0, Me.ZP)(de), {
							persist: !!_e
						})
					})
				}
				render() {
					return null
				}
			}
			var gt = (0, ke.withRouter)((0, Ae.connect)(null, {
				notifyAdd: Ye.IH
			})(lt));
			lt.propTypes = {
				notifyAdd: he().func.isRequired
			};
			var We = n("../react/app/redux/index.ts");

			function mt() {
				var y;
				const O = (0, We.p4)(st.PR),
					K = (O == null || (y = O.email) === null || y === void 0 ? void 0 : y.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					J = (0, B.Yc)();
				(0, Se.useEffect)(() => {
					J({
						userType: K
					})
				}, [K, J])
			}
			var ut = n("../react/common/selectors/entitlementsSelectors.ts"),
				dt = n("../react/common/selectors/accountSelectors.ts");
			const ft = ["accountId", "is_ent"];

			function Et() {
				const y = (0, B.f7)(),
					O = (0, ke.useHistory)(),
					K = (0, I.uW)(O.location.pathname),
					J = (0, B.Yc)(),
					de = (0, B.O$)(),
					_e = (0, We.p4)(ut.u1),
					Ee = !_e.isRequesting && !!_e.data,
					Qe = (0, We.p4)(ut.p1),
					pt = (0, We.p4)(dt.Xu),
					tt = (0, We.p4)(dt.uF),
					Pt = !pt.isRequesting && !!pt.data;
				(0, Se.useEffect)(() => {
					K && Pt && tt && Ee && K === tt.account.id ? J({
						accountId: tt.account.id,
						is_ent: Qe
					}) : (!K || K in y && y.accountId !== K) && de(ft)
				}, [Pt, tt, J, de, Ee, Qe, K, y])
			}
			var yt = n("../react/common/selectors/zoneSelectors.ts");

			function _t() {
				const y = (0, We.p4)(yt.nA),
					O = (0, B.Yc)();
				(0, Se.useEffect)(() => {
					var K;
					O({
						zone_id: y == null ? void 0 : y.id,
						zone_plan: y == null || (K = y.plan) === null || K === void 0 ? void 0 : K.legacy_id
					})
				}, [y, O])
			}
			const vt = () => (mt(), Et(), _t(), null);
			var ht = n("../react/app/components/Persistence/index.tsx"),
				Ct = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				Tt = n("../react/app/components/LoadingSuspense.tsx");
			const bt = fe().lazy(() => Promise.all([n.e(78317), n.e(2480), n.e(10008), n.e(52374), n.e(57518), n.e(94012), n.e(72019), n.e(92789), n.e(5668), n.e(41480), n.e(7484), n.e(39760), n.e(99062), n.e(82465), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var zt = () => fe().createElement(Tt.Z, null, fe().createElement(bt, null));
			const Ht = () => (Se.useEffect(() => G, []), null);
			var Kt = n("../../../../node_modules/moment/moment.js"),
				Mt = n.n(Kt);
			const Vt = y => {
					switch (y) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return y.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return y.toLowerCase();
						default:
							return "en"
					}
				},
				Ne = () => {
					const y = (0, We.p4)(N.r);
					(0, Se.useEffect)(() => {
						const O = Vt(y);
						O !== Mt().locale() && Mt().locale(O), document.documentElement.lang = y
					}, [y])
				},
				Nt = () => {
					(0, Se.useEffect)(() => {
						var y, O;
						let K;
						if (((y = window) === null || y === void 0 || (O = y.build) === null || O === void 0 ? void 0 : O.isPreviewDeploy) && (K = "cookie"), !!K) try {
							const J = document.head.querySelector("link[rel=icon]");
							J && (J.href = n("../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${K}.ico`))
						} catch {}
					}, [])
				};
			var qt = n("../react/common/constants/constants.ts");
			const en = () => {
					var y;
					const O = (0, ke.useLocation)(),
						[K, J] = (0, Se.useState)(((y = window) === null || y === void 0 ? void 0 : y.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Se.useEffect)(() => {
						const de = nt().parse(O.search);
						if (de.pt && re.Z.set(qt.sJ, de.pt), de == null ? void 0 : de.devPanel) {
							var _e, Ee;
							(_e = window) === null || _e === void 0 || (Ee = _e.localStorage) === null || Ee === void 0 || Ee.setItem("gates_devtools_ui_gates_controller_enabled", "true"), J(!0)
						}
					}, [O.search]), {
						devPanelEnabled: K
					}
				},
				tn = fe().lazy(() => Promise.all([n.e(78317), n.e(2480), n.e(10008), n.e(52374), n.e(57518), n.e(94012), n.e(72019), n.e(92789), n.e(14696), n.e(96933), n.e(41480), n.e(7484), n.e(39760), n.e(99062), n.e(82465), n.e(45800), n.e(91984), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				nn = fe().lazy(() => Promise.all([n.e(83741), n.e(65447), n.e(78317), n.e(57518), n.e(14696), n.e(26337), n.e(99062), n.e(69088), n.e(91984), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var on = ({
					userIsAuthed: y
				}) => {
					Ne(), Nt();
					const {
						devPanelEnabled: O
					} = en();
					return fe().createElement(Se.Suspense, {
						fallback: fe().createElement(Ht, null)
					}, fe().createElement(ke.Switch, null, !y && !0 && fe().createElement(ke.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, fe().createElement(nn, null)), fe().createElement(ke.Route, {
						render: () => fe().createElement(Ct.ZC, {
							minHeight: "100vh"
						}, fe().createElement(tn, null))
					})), O && fe().createElement(zt, null))
				},
				Zt = n("../../../../node_modules/yup/es/index.js"),
				rn = n("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => Zt.Z_().email((0, Me.ZP)("common.validation.email")).required((0, Me.ZP)("common.validation.email"))
			};
			(0, rn.Yd)(Qt).forEach(y => {
				Zt.kM(Zt.Z_, y, Qt[y])
			});
			const Xt = fe().lazy(() => Promise.all([n.e(10008), n.e(94012), n.e(6368), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				an = () => {
					const y = (0, Ot.$8)(),
						[O, K] = (0, Se.useState)(y ? Xt : fe().Fragment),
						[J, de] = (0, Se.useState)((0, S.Yc)());
					(0, Se.useEffect)(() => {
						(0, S.fF)(() => de((0, S.Yc)()))
					}, []);
					const _e = Ee => {
						de(Ee), (0, S.C8)(Ee)
					};
					return (0, Se.useEffect)(() => {
						K(y ? Xt : fe().Fragment)
					}, [y]), (0, Se.useEffect)(() => {
						const Ee = () => _e(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Ee), () => {
							window.removeEventListener("storage", Ee)
						}
					}, []), fe().createElement(Se.Suspense, {
						fallback: null
					}, fe().createElement(Ae.Provider, {
						store: (0, r.bh)()
					}, fe().createElement(ke.Router, {
						history: _
					}, fe().createElement(O, null, fe().createElement(Wt.Z, {
						renderer: se()
					}, fe().createElement(wt, null, fe().createElement(Le.Z, {
						sentryTag: "Root"
					}, fe().createElement(at.J$, {
						value: {
							fetcher: Ee => fetch(Ee).then(Qe => Qe.json())
						}
					}, fe().createElement(vt, null), fe().createElement(gt, null), fe().createElement(ht.Z_, {
						onDarkModeChangeCb: _e
					}, fe().createElement(ue.ZP, null, fe().createElement(on, {
						userIsAuthed: y
					}))), fe().createElement(ye.ZP, null), fe().createElement(it.F0, null)))))))))
				},
				sn = () => {
					(0, Ge.render)(fe().createElement(an, null), document.getElementById("react-app"))
				};
			var rt = n("../utils/initSparrow.ts"),
				At = n("../utils/zaraz.ts");
			const cn = () => {
					const y = (0, st.PR)((0, r.bh)().getState());
					ln(), (0, rt.Ug)(), (0, At.bM)(), (y == null ? void 0 : y.id) && ve().setUserId(y == null ? void 0 : y.id), (0, rt.yV)(), !(0, rt.Wi)() && (0, rt.IM)(), y ? (0, At.yn)(y) : (0, At.Ro)()
				},
				ln = () => {
					var y, O;
					(y = window) === null || y === void 0 || (O = y.OneTrust) === null || O === void 0 || O.OnConsentChanged(() => {
						const K = (0, st.PR)((0, r.bh)().getState());
						(0, rt.Wi)() ? (ve().setEnabled(!0), (K == null ? void 0 : K.id) ? (ve().setUserId(K.id), (0, At.yn)(K)) : (0, At.Ro)(), (0, rt.yV)()) : (ve().setEnabled(!1), (0, rt.IM)())
					})
				};

			function un(y) {
				for (var O = 1; O < arguments.length; O++) {
					var K = arguments[O] != null ? Object(arguments[O]) : {},
						J = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols(K).filter(function(de) {
						return Object.getOwnPropertyDescriptor(K, de).enumerable
					})), J.forEach(function(de) {
						dn(y, de, K[de])
					})
				}
				return y
			}

			function dn(y, O, K) {
				return O = pn(O), O in y ? Object.defineProperty(y, O, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[O] = K, y
			}

			function pn(y) {
				var O = gn(y, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function gn(y, O) {
				if (typeof y != "object" || y === null) return y;
				var K = y[Symbol.toPrimitive];
				if (K !== void 0) {
					var J = K.call(y, O || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(y)
			}
			const mn = y => {
				h.$e(function(O) {
					O.setTag("init", "global"), h.Tb(y)
				}), j(y)
			};
			try {
				n.g.build = un({}, {
					branch: "master",
					isReleaseCandidate: "true",
					commit: "d0509de50d91096b4201cff7b467fbcf31eca1f6",
					dashVersion: "25879228",
					env: "production",
					builtAt: 1722615759509,
					versions: {
						"@cloudflare/app-dash": "25.161.22",
						node: "20.10.0",
						yarn: "3.2.2",
						webpack: "5.88.2"
					}
				}, {
					isPreviewDeploy: (0, pe.p)()
				}), Xe();
				try {
					n("../react/utils/api.ts")
				} catch (y) {
					throw h.$e(function(O) {
						O.setTag("init", "utils/api"), h.Tb(y)
					}), y
				}
				try {
					E(_)
				} catch (y) {
					throw h.$e(function(O) {
						O.setTag("init", "hashScroll"), h.Tb(y)
					}), y
				}
				try {
					(0, Y.Z)()
				} catch (y) {
					throw h.$e(function(O) {
						O.setTag("init", "styles"), h.Tb(y)
					}), y
				}
				try {
					A()
				} catch (y) {
					throw h.$e(function(O) {
						O.setTag("init", "mfePreviewData"), h.Tb(y)
					}), y
				}(0, Ie.k)().then(async y => {
					var O;
					const K = (0, r.bh)(),
						J = (y == null ? void 0 : y.data) || {};
					K.dispatch((0, t.mW)("user", J == null ? void 0 : J.user));
					const de = y == null || (O = y.data) === null || O === void 0 ? void 0 : O.user;
					n.g.bootstrap = y, de && de.id && Ze(de.id);
					try {
						await Oe()
					} catch (_e) {
						throw h.$e(function(Ee) {
							Ee.setTag("init", "gates"), h.Tb(_e)
						}), _e
					}
					try {
						cn()
					} catch (_e) {
						throw h.$e(function(Ee) {
							Ee.setTag("init", "tracking"), h.Tb(_e)
						}), _e
					}
					return sn()
				}).catch(y => {
					h.$e(function(O) {
						O.setTag("init", "bootstrap"), h.Tb(y)
					}), j(y)
				})
			} catch (y) {
				mn(y)
			}
		},
		"../libs/init/initBootstrap.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				k: function() {
					return c
				}
			});
			class e extends Error {
				constructor(m, a) {
					super(a);
					this.name = `${m} ${a}`
				}
			}
			const o = () => {
					document.cookie.split(";").forEach(m => {
						const [a] = m.trim().split("=");
						document.cookie = `${a}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				c = async () => {
					let u = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!u.ok) throw u.headers.get("content-type") === "text/html" && (await u.text()).toLowerCase().includes("cookie too large") && (o(), window.location.reload()), new e("Bootstrap API Failure", u == null ? void 0 : u.status);
					return (await u.json()).result.data
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				BQ: function() {
					return p
				},
				Bh: function() {
					return a
				},
				CM: function() {
					return h
				},
				MF: function() {
					return o
				},
				TS: function() {
					return i
				},
				WF: function() {
					return m
				},
				Wz: function() {
					return t
				},
				bk: function() {
					return g
				},
				fj: function() {
					return r
				},
				r4: function() {
					return u
				},
				zq: function() {
					return c
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js");
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
				c = (0, e.R)(o.ADD_SITE, d => ({
					payload: d
				})),
				u = (0, e.R)(o.RESOLVING_START),
				m = (0, e.R)(o.RESOLVING_COMPLETE),
				a = (0, e.R)(o.SELECT_ZONE, d => ({
					payload: d
				})),
				g = (0, e.R)(o.SELECT_ACCOUNT, d => ({
					payload: d
				})),
				p = (0, e.R)(o.SELECT_PAGES_PROJECT, d => ({
					payload: d
				})),
				h = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, d => ({
					payload: d
				})),
				t = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, d => ({
					accountIds: d
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				i = (0, e.R)(o.SELECT_WORKER, d => ({
					payload: d
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				BV: function() {
					return e
				},
				Dz: function() {
					return g
				},
				Fj: function() {
					return c
				},
				Kt: function() {
					return u
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return p
				},
				s$: function() {
					return m
				}
			});
			const e = "to",
				o = "_gl",
				c = "deepLinkQueryParams",
				u = "add",
				m = "multiSkuProducts",
				a = "/:account/billing/checkout",
				g = "/:account/:zone/billing/checkout",
				p = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				ZP: function() {
					return H
				},
				U: function() {
					return g.U
				},
				dd: function() {
					return g.dd
				},
				bk: function() {
					return a.bk
				},
				Bh: function() {
					return a.Bh
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n("../react/app/redux/index.ts"),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = n("../react/app/components/DeepLink/utils.ts"),
				m = n("../react/utils/bootstrap.ts"),
				a = n("../react/app/components/DeepLink/actions.ts"),
				g = n("../react/app/components/DeepLink/selectors.ts"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				h = n.n(p);

			function t(V) {
				for (var G = 1; G < arguments.length; G++) {
					var j = arguments[G] != null ? Object(arguments[G]) : {},
						Y = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(j).filter(function(C) {
						return Object.getOwnPropertyDescriptor(j, C).enumerable
					})), Y.forEach(function(C) {
						r(V, C, j[C])
					})
				}
				return V
			}

			function r(V, G, j) {
				return G = i(G), G in V ? Object.defineProperty(V, G, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[G] = j, V
			}

			function i(V) {
				var G = d(V, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function d(V, G) {
				if (typeof V != "object" || V === null) return V;
				var j = V[Symbol.toPrimitive];
				if (j !== void 0) {
					var Y = j.call(V, G || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(V)
			}
			class s {
				constructor(G, j) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", Y => {
						this.resolvers.set(Y, {
							name: Y,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", Y => {
						const C = this.resolvers.get(Y);
						C && (C.endTime = Date.now(), this.resolvers.set(Y, C))
					}), r(this, "resolverCancel", Y => {
						this.resolverDone(Y), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", Y => {
						const C = "NO_ACTION",
							$ = {
								actionType: C,
								startTime: 0
							};
						return {
							start: (R = C) => {
								const ae = this.resolvers.get(Y);
								$.actionType = R, $.startTime = Date.now(), ae && ae.userActions.push($)
							},
							finish: (R = C) => {
								$.actionType = R, $.endTime = Date.now()
							},
							cancel: (R = C) => {
								$.actionType = R, $.endTime = Date.now(), this.resolverCancel(Y)
							}
						}
					}), this.deepLink = G, this.legacyDeepLink = j, this.resolvers = new Map
				}
				track(G) {
					try {
						if (this._done) return;
						this._done = !0;
						const j = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: E(this.startTime, this.endTime),
								totalCpuTime: E(this.startTime, this.endTime)
							},
							Y = this.resolvers.size === 0 ? j : Array.from(this.resolvers.values()).reduce((C, $) => {
								const R = E($.startTime, $.endTime),
									ae = $.userActions.reduce((P, _) => {
										const b = E(_.startTime, _.endTime);
										return {
											totalTime: P.totalTime + b,
											actions: P.actions.set(_.actionType, b)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									z = R - ae.totalTime;
								return t({}, C, {
									totalTime: C.totalTime + R,
									totalUserActionsTime: C.totalUserActionsTime + ae.totalTime,
									totalCpuTime: C.totalCpuTime + z,
									[`${$.name}ResolverTotalTime`]: R,
									[`${$.name}ResolverTotalCpuTime`]: z,
									[`${$.name}ResolverTotalUserActionsTime`]: ae.totalTime
								}, Array.from(ae.actions.keys()).reduce((P, _) => t({}, P, {
									[`${$.name}Resolver/${_}`]: ae.actions.get(_)
								}), {}))
							}, t({}, j, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						h().sendEvent(G, Y)
					} catch (j) {
						console.error(j)
					}
				}
			}

			function E(V = Date.now(), G = Date.now()) {
				return (G - V) / 1e3
			}
			var f = n("../react/app/components/DeepLink/constants.ts"),
				S = n("../react/common/hooks/useCachedState.ts"),
				U = n("../react/common/hooks/usePrevious.ts");

			function M(V) {
				for (var G = 1; G < arguments.length; G++) {
					var j = arguments[G] != null ? Object(arguments[G]) : {},
						Y = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(j).filter(function(C) {
						return Object.getOwnPropertyDescriptor(j, C).enumerable
					})), Y.forEach(function(C) {
						x(V, C, j[C])
					})
				}
				return V
			}

			function x(V, G, j) {
				return G = k(G), G in V ? Object.defineProperty(V, G, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[G] = j, V
			}

			function k(V) {
				var G = L(V, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function L(V, G) {
				if (typeof V != "object" || V === null) return V;
				var j = V[Symbol.toPrimitive];
				if (j !== void 0) {
					var Y = j.call(V, G || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(V)
			}
			var X = ({
					children: V
				}) => {
					const G = (0, o.TZ)(),
						j = (0, c.useHistory)(),
						Y = (0, U.Z)(j.location.pathname),
						C = (0, o.p4)(g.dd),
						[$, R] = (0, e.useState)(!0),
						[ae, z] = (0, S.j)(void 0, {
							key: f.Fj
						}),
						[P, _] = (0, S.j)(void 0, {
							key: f.s$
						}),
						b = (0, m.$8)();
					let I = new URLSearchParams(j.location.search);
					const Z = (0, u.mL)(j.location.pathname, I);
					let ne = null,
						D = null;
					if (I.has(f.Tc) && I.delete(f.Tc), I.get(f.BV)) ne = I.get(f.BV), j.location.hash && (D = j.location.hash);
					else if (ae) {
						const N = new URLSearchParams(ae);
						N.get(f.BV) && (ne = N.get(f.BV), I = N)
					} else Z && (I.set(f.BV, Z), ne = Z);
					if (ne && f._h.test(ne)) {
						const N = I.getAll(f.Kt),
							ie = JSON.stringify(N);
						N.length && ie !== P && _(ie), I.has(f.Tc) && I.delete(f.Tc), I.delete(f.Kt)
					}!b && ae === void 0 && ne && z(I.toString());
					const q = async () => {
						try {
							if ((0, u.I3)(ne) && b && !C) {
								ae && z(void 0), G.dispatch((0, a.r4)()), R(!0);
								const N = await (0, u.py)(ne, R, G, j, Y, new s(ne, Z ? `${j.location.pathname}${j.location.search}` : void 0));
								I.delete(f.BV);
								const ie = I.toString();
								j.replace(M({}, j.location, {
									pathname: N,
									search: ie
								}, D ? {
									hash: D
								} : {})), G.dispatch((0, a.WF)())
							}
						} catch (N) {
							G.dispatch((0, a.WF)()), console.error(N)
						} finally {
							R(!1)
						}
					};
					return (0, e.useEffect)(() => {
						q()
					}, [j.location.pathname, j.location.search, C]), ($ || (0, u.I3)(ne)) && b ? null : V
				},
				Q = n("../react/app/components/DeepLink/reducer.ts"),
				H = X
		},
		"../react/app/components/DeepLink/reducer.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				E: function() {
					return u
				},
				r: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				c = n("../react/app/components/DeepLink/actions.ts");
			const u = null,
				m = o().from({
					lastAction: u,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function a(g = m, p) {
				if (p.type === c.MF.RESOLVING_COMPLETE) return m;
				if (p.type === c.MF.RESOLVING_START) return g.set("isResolving", !0);
				if (g.isResolving) {
					if (p.type === c.MF.RESOLVING_COMPLETE) return g.set("isResolving", !1);
					if (p.type === c.MF.SET_FILTERED_ACCOUNT_IDS) return g.set("filteredAccountIds", p.accountIds);
					if (p.type === c.MF.DELETE_FILTERED_ACCOUNT_IDS) return g.set("filteredAccountIds", void 0);
					{
						let h = g;
						try {
							h = g.set("lastAction", p)
						} catch {
							h = g.set("lastAction", {
								type: p.type
							})
						}
						return h
					}
				} else return g
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				U: function() {
					return c
				},
				dd: function() {
					return o
				},
				yI: function() {
					return e
				}
			});
			const e = u => u.deepLink.lastAction,
				o = u => u.deepLink.isResolving,
				c = u => u.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				I3: function() {
					return d
				},
				X1: function() {
					return r
				},
				mL: function() {
					return U
				},
				py: function() {
					return S
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../react/app/components/DeepLink/reducer.ts"),
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const u = M => M.replace(c.default.endsWithSlash, ""),
				m = M => {
					const x = u(M).split("/").slice(3);
					return x.length ? "/" + x.join("/") : ""
				},
				a = M => {
					const x = u(M).split("/").slice(2);
					return x.length ? `apps/${x.join("/")}` : "apps"
				};
			var g = n("../react/app/components/DeepLink/selectors.ts"),
				p = n("../react/app/components/DeepLink/constants.ts"),
				h = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const r = M => (0, h.Lb)(M) && (M.split(".").length > 1 || (0, t.v5)(M)),
				i = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				d = M => typeof M == "string" && M.startsWith("/"),
				s = (M, x) => k => new Promise((L, te) => {
					x.start();
					const X = M.subscribe(() => {
						const Q = (0, g.yI)(M.getState());
						Q === o.E ? (x.cancel(), X(), te("DeepLink: waitForAction out of context.")) : k(Q) && (x.finish(Q.type), X(), L(Q))
					})
				}),
				E = (M, x, k) => (L, te) => new Promise((X, Q) => {
					k.start();
					const H = x.location.pathname;
					L = new URL(L, window.location.href).pathname, H !== L && (k.cancel(), Q(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${L}", but on "${H}". You need to redirect to "${L}", and unblockRouter in your Resolver, before you use this function.`));
					const V = M.subscribe(() => {
						const G = (0, g.yI)(M.getState()),
							j = x.location.pathname,
							C = new URLSearchParams(x.location.search).get(p.BV);
						(j !== L || !!C) && (k.cancel(), V(), Q(`DeepLink: waitForPageAction user navigated away from "${L}" to "${j}${C?x.location.search:""}"`)), G === o.E ? (k.cancel(), V(), Q("DeepLink: waitForPageAction out of context.")) : te(G) && (k.finish(G.type), V(), X(G))
					})
				});

			function f(M) {
				const x = [],
					k = M.split("?")[0].split("/");
				for (let L of k) L.length !== 0 && (L.startsWith(":") ? x.push({
					value: L.substring(1),
					type: "dynamic"
				}) : x.push({
					value: L,
					type: "static"
				}));
				return x
			}
			async function S(M, x, k, L, te, X) {
				X.start();
				const Q = f(M),
					V = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(7484), n.e(72775)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					G = {};
				let j = "";
				for (const [Y, C] of Q.entries())
					if (C.type === "static") j = [j, C.value].join("/");
					else if (C.type === "dynamic" && i.is(C.value) && C.value in V) {
					X.resolverStart(C.value);
					const $ = await V[C.value]({
						deepLink: M,
						blockRouter: () => x(!0),
						unblockRouter: () => x(!1),
						routerHistory: L,
						resolvedValues: G,
						store: k,
						referringRoute: te,
						uri: {
							currentPartIdx: Y,
							parts: Q
						},
						waitForAction: s(k, X.createUserActionTracker(C.value)),
						waitForPageAction: E(k, L, X.createUserActionTracker(C.value))
					});
					X.resolverDone(C.value), j = [j, $].join("/"), G[C.value] = $
				} else throw X.cancel(), new Error(`DeepLink: Resolver with name '${C.value}' is not supported.`);
				return X.done(), j
			}

			function U(M, x) {
				const k = ":account",
					L = ":zone",
					te = x.get("zone");
				if (te) return x.delete("zone"), `/${k}/${L}/${te}`;
				const X = x.get("account");
				if (X) return x.delete("account"), `/${k}/${X}`;
				if (M === "/overview") return `/${k}/${L}`;
				if (M === "/apps") return `/${k}/${L}/${a(M)}`;
				const Q = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const H of Q) {
					const V = H.length;
					if (M.startsWith(H) && (M.length === V || M[V] === "/")) return `/${k}/${L}${M}`
				}
				switch (M) {
					case "/account/billing":
						return `/${k}/billing`;
					case "/account/subscriptions":
						return `/${k}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${k}/dns-firewall`;
					case "/account/audit-log":
						return `/${k}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(W, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				u = n("../react/app/components/SomethingWrong.jsx"),
				m = n("../utils/sentry/lastSentEventId.ts"),
				a = n("../react/utils/zaraz.ts"),
				g = n("../react/utils/url.ts");
			const p = ({
				sentryTag: h,
				children: t
			}) => o().createElement(c.SV, {
				beforeCapture: r => {
					h && r.setTag("errorBoundary", h), a.tg === null || a.tg === void 0 || a.tg.track("page-error", {
						page: (0, g.Fl)(window.location.pathname)
					})
				},
				onError: r => {
					({
						REDUX_LOGGER: void 0
					}).TESTING && n.g.logAppError(r)
				},
				fallback: ({
					error: r,
					eventId: i
				}) => {
					const d = m.e.getEventId() || i;
					return o().createElement(u.Z, {
						type: "page",
						error: r,
						eventId: d
					})
				}
			}, t);
			v.Z = p
		},
		"../react/app/components/Footer.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				Z: function() {
					return P
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				a = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = n.n(g),
				h = n("../react/common/components/Apple/utils.tsx"),
				t = n("../react/utils/translator.tsx"),
				r = n("../../../../node_modules/moment/moment.js"),
				i = n.n(r);
			const d = () => {
					const _ = i()().format("YYYY"),
						b = I => {
							p().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: I
							})
						};
					return o().createElement(s, {
						marginTop: "auto"
					}, o().createElement(E, null, o().createElement(f, null, o().createElement(S, null, "\xA9 ", _, " Cloudflare, Inc."), o().createElement(S, null, o().createElement(U, null, o().createElement(M, {
						showOnDeskTop: !1
					}, o().createElement(x, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => b("Support")
					}, o().createElement(t.cC, {
						id: "common.support"
					}))), o().createElement(M, null, o().createElement(x, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => b("Privacy Policy")
					}, o().createElement(t.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(M, null, o().createElement(x, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => b("Terms of Use")
					}, o().createElement(t.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(M, null, o().createElement(x, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => b("Cookie Preferences")
					}, o().createElement(t.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(M, null, o().createElement(x, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => b("Trademark")
					}, o().createElement(t.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(U, null, o().createElement(M, null, o().createElement(x, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => b("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(t.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				s = (0, a.createComponent)(({
					theme: _,
					marginTop: b
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: b
				})),
				E = (0, a.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				f = (0, a.createComponent)(({
					theme: _
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${_.space[3]}px`
					}
				})),
				S = (0, a.createComponent)(({
					theme: _
				}) => ({
					width: "100%",
					color: _.colors.white,
					fontSize: _.fontSizes[1],
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
				U = (0, a.createComponent)(({
					theme: _
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: _.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				M = (0, a.createComponent)(({
					showOnDeskTop: _ = !0,
					theme: b
				}) => ({
					color: b.colors.white,
					fontSize: b.fontSizes[1],
					height: "20px",
					display: _ ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: b.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: b.space[3],
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
				x = (0, a.createStyledComponent)(({
					theme: _
				}) => ({
					textDecoration: "none",
					color: _.colors.white,
					"&:hover": {
						color: _.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var k = d,
				L = n("../react/pages/welcome/routes.ts"),
				te = n("../react/utils/cookiePreferences.ts"),
				X = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				Q = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				V = () => {
					const [_, b] = (0, e.useState)(!1), I = (0, te.wV)(), Z = () => {
						b(!0)
					}, ne = () => {
						b(!1)
					}, D = I && I === "US" ? (0, t.ZP)("footer.cpra_cta.privacy_choices") : (0, t.ZP)("footer.cpra_cta.cookie_preferences"), q = {
						background: "transparent",
						borderRadius: "none",
						color: _ ? (0, X.Yc)() ? "#ee730a" : "#003681" : (0, X.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: _ ? "underline" : "none",
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
					return o().createElement(u.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: q,
						onMouseEnter: Z,
						onMouseLeave: ne
					}, o().createElement(u.Ei, {
						height: 15,
						src: Q,
						mr: 2,
						alt: D
					}), D)
				};

			function G() {
				return G = Object.assign ? Object.assign.bind() : function(_) {
					for (var b = 1; b < arguments.length; b++) {
						var I = arguments[b];
						for (var Z in I) Object.prototype.hasOwnProperty.call(I, Z) && (_[Z] = I[Z])
					}
					return _
				}, G.apply(this, arguments)
			}

			function j(_, b) {
				if (_ == null) return {};
				var I = Y(_, b),
					Z, ne;
				if (Object.getOwnPropertySymbols) {
					var D = Object.getOwnPropertySymbols(_);
					for (ne = 0; ne < D.length; ne++) Z = D[ne], !(b.indexOf(Z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(_, Z) || (I[Z] = _[Z]))
				}
				return I
			}

			function Y(_, b) {
				if (_ == null) return {};
				var I = {},
					Z = Object.keys(_),
					ne, D;
				for (D = 0; D < Z.length; D++) ne = Z[D], !(b.indexOf(ne) >= 0) && (I[ne] = _[ne]);
				return I
			}
			const C = 24,
				$ = (0, a.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,X.Yc)()?X.rS.colors.orange[6]:X.rS.colors.blue[4]}`
					}
				}), u.A),
				R = _ => {
					let {
						onClick: b
					} = _, I = j(_, ["onClick"]);
					return o().createElement($, G({
						onClick: Z => {
							p().sendEvent("navigate footer nav", {
								destinationPage: I.href
							}), b && b(Z)
						}
					}, I))
				},
				ae = _ => {
					let {
						children: b,
						target: I,
						rel: Z
					} = _, ne = j(_, ["children", "target", "rel"]);
					return o().createElement(R, G({
						target: I || "_blank",
						rel: Z || "noopener noreferrer"
					}, ne), b, o().createElement(m.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				};
			var P = () => {
				var _, b;
				const I = [L.d.root.pattern].some(Z => (0, c.matchPath)(location.pathname, {
					path: Z
				}));
				return (0, h.PP)() ? o().createElement(k, null) : I ? null : o().createElement(u.$_, {
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: 4,
					px: 3,
					mt: "auto"
				}, o().createElement(u.ZC, {
					display: "flex",
					flexWrap: "wrap",
					mx: "auto",
					maxWidth: "64rem"
				}, o().createElement(u.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(u.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(u.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.contact")), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.contact_support"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, t.ZP)("footer.contact_sales"))), o().createElement(u.Dd, {
					mt: 3
				}, o().createElement(u.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, o().createElement(R, {
					"aria-label": (0, t.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${C}px`
				}, o().createElement(m.J, {
					type: "twitter",
					size: C
				})), o().createElement(R, {
					"aria-label": (0, t.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${C}px`
				}, o().createElement(m.J, {
					type: "facebook",
					size: C
				})), o().createElement(R, {
					"aria-label": (0, t.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${C}px`
				}, o().createElement(m.J, {
					type: "linkedin",
					size: C
				})))))), o().createElement(u.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(u.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(u.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.what_we_do")), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://www.cloudflare.com/plans"
				}, (0, t.ZP)("footer.plans"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://www.cloudflare.com/overview"
				}, (0, t.ZP)("footer.about"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, t.ZP)("footer.network_map"))))), o().createElement(u.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(u.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(u.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.resources")), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://developers.cloudflare.com"
				}, (0, t.ZP)("footer.product_docs"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://blog.cloudflare.com"
				}, (0, t.ZP)("footer.blog"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, t.ZP)("footer.testimonials"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://partners.cloudflare.com"
				}, (0, t.ZP)("footer.hosting_partners"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://api.cloudflare.com"
				}, (0, t.ZP)("footer.api"))))), o().createElement(u.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5],
					position: "relative"
				}, o().createElement("div", {
					style: {
						position: "absolute",
						top: "0",
						left: "0",
						height: "24px",
						width: "100%"
					},
					"aria-hidden": "true",
					title: `Current version: ${((_=window)===null||_===void 0||(b=_.build)===null||b===void 0?void 0:b.dashVersion)||"unknown"}`
				}), o().createElement(u.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(u.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.support")), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.help_center"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://community.cloudflare.com"
				}, (0, t.ZP)("footer.community"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://www.cloudflarestatus.com"
				}, (0, t.ZP)("footer.system_status"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, t.ZP)("footer.trust_safety"))))), o().createElement(u.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(u.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(u.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.about_us")), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://www.cloudflare.com/people"
				}, (0, t.ZP)("footer.team"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://www.cloudflare.com/careers"
				}, (0, t.ZP)("footer.careers"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, t.ZP)("footer.press"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, t.ZP)("footer.tos"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, t.ZP)("footer.subs_agreement"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(ae, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, t.ZP)("footer.privacy_policy"))))), o().createElement(V, null)))
			}
		},
		"../react/app/components/LoadingSuspense.tsx": function(W, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				u = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				m = n("../react/utils/translator.tsx"),
				a = n("../react/app/components/ErrorStatus.tsx"),
				g = n("../react/common/components/EmptyPage.jsx"),
				p = n("../react/common/hooks/suspenseHelpers.ts");

			function h(i) {
				const [d, s] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const E = window.setTimeout(() => s(!0), i);
					return () => window.clearTimeout(E)
				}, []), d
			}
			const t = ({
					loadingTimeout: i = 1e3,
					stillLoadingTimeout: d = 9e3
				}) => {
					const s = h(i),
						E = h(d);
					if ((0, p.nW)(), !s && !E) return o().createElement(g.Z, null);
					const f = E ? o().createElement(m.cC, {
						id: "common.still_loading"
					}) : s ? o().createElement(m.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(a.Z, {
						size: 5
					}, o().createElement(u.ZC, {
						mr: 3
					}, o().createElement(c.g, {
						size: "2x"
					})), f)
				},
				r = ({
					children: i
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(t, null)
				}, i);
			v.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				C8: function() {
					return p
				},
				d3: function() {
					return g
				},
				dr: function() {
					return m
				},
				lt: function() {
					return a
				},
				m6: function() {
					return t
				},
				n: function() {
					return h
				},
				yl: function() {
					return u
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const c = "/persistence/user",
				u = async () => {
					try {
						return await (await e.get(c, {
							hideErrorAlert: !0
						})).body
					} catch (r) {
						console.error(r)
					}
				}, m = async r => {
					try {
						return await (await e.get(`/accounts/${r}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (i) {
						console.error(i)
					}
				}, a = async (r, i) => {
					try {
						return await (await e.post(`${c}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: i
							}),
							hideErrorAlert: !0
						})).body
					} catch (d) {
						return console.error(d), []
					}
				}, g = async (r, i) => {
					try {
						return await e.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: i
							}),
							hideErrorAlert: !0
						}), !0
					} catch (d) {
						return console.error(d), !1
					}
				}, p = async r => {
					try {
						return await (await e.post(c, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (i) {
						console.error(i)
					}
				}, h = async r => {
					try {
						return await (await e.post(`${c}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (i) {
						console.error(i)
					}
				}, t = async r => {
					try {
						return await (await e.post(`${c}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (i) {
						throw console.error(i), i
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				Wl: function() {
					return h
				},
				lp: function() {
					return f
				},
				Z_: function() {
					return U
				},
				r7: function() {
					return V
				},
				Tv: function() {
					return z
				},
				yZ: function() {
					return M
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../react/app/redux/index.ts"),
				u = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = n.n(u),
				a = n("../react/utils/bootstrap.ts"),
				g = n("../react/common/selectors/zoneSelectors.ts"),
				p = n("../react/app/components/Persistence/api.ts");
			const h = 10;

			function t(P) {
				for (var _ = 1; _ < arguments.length; _++) {
					var b = arguments[_] != null ? Object(arguments[_]) : {},
						I = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(b).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(b, Z).enumerable
					})), I.forEach(function(Z) {
						r(P, Z, b[Z])
					})
				}
				return P
			}

			function r(P, _, b) {
				return _ = i(_), _ in P ? Object.defineProperty(P, _, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[_] = b, P
			}

			function i(P) {
				var _ = d(P, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function d(P, _) {
				if (typeof P != "object" || P === null) return P;
				var b = P[Symbol.toPrimitive];
				if (b !== void 0) {
					var I = b.call(P, _ || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(P)
			}
			const s = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				E = t({}, s, {
					isLoading: !0,
					actions: {
						starZone: () => null,
						setDarkMode: () => null,
						isZoneStarred: () => !1,
						canAccountStarZone: () => !0,
						logRouteVisited: () => null,
						viewChange: () => null
					}
				}),
				f = (0, e.createContext)(E),
				S = f.Consumer,
				U = ({
					children: P,
					onDarkModeChangeCb: _
				}) => {
					const [b, I] = (0, e.useState)(s), [Z, ne] = (0, e.useState)(E.isLoading), D = (0, a.$8)(), q = (0, c.p4)(pe => (0, g.wH)(pe));
					(0, e.useEffect)(() => {
						D ? (0, p.yl)().then(pe => {
							pe && (I(pe), _(pe.darkMode))
						}).finally(() => ne(!1)) : ne(!1)
					}, [D]);
					const N = (pe, ge) => !!b.favorites.find(ve => ve.type === "zone" && ve.name === pe && ve.accountId === ge),
						ie = pe => b.favorites.filter(ve => ve.type === "zone" && ve.accountId === pe).length < h;
					return o().createElement(f.Provider, {
						value: t({}, b, {
							isLoading: Z,
							actions: {
								canAccountStarZone: ie,
								isZoneStarred: N,
								starZone: async (pe, ge) => {
									var ve;
									const Re = !N(pe, ge),
										we = ie(ge);
									if (Re && !we) {
										console.log("can not star zone - account is at limit");
										return
									}
									const De = await (0, p.lt)(pe, ge);
									m().sendEvent("click star zone", {
										isStarring: Re,
										totalStarredZones: De.filter(F => F.accountId === ge && F.type === "zone").length,
										totalZones: q == null || (ve = q.paginationData) === null || ve === void 0 ? void 0 : ve.info.total_count
									}), I(t({}, b, {
										favorites: De
									}))
								},
								setDarkMode: async pe => {
									const ge = await (0, p.C8)(pe);
									I(ge), _(ge.darkMode)
								},
								logRouteVisited: async pe => {
									var ge;
									const ve = await (0, p.n)(pe);
									I((ge = ve) !== null && ge !== void 0 ? ge : t({}, b))
								},
								viewChange: async pe => {
									const ge = await (0, p.m6)(pe);
									I(t({}, b, {
										viewedChanges: ge
									}))
								}
							}
						})
					}, P)
				},
				M = () => (0, e.useContext)(f);
			var x = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				k = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function L() {
				return L = Object.assign ? Object.assign.bind() : function(P) {
					for (var _ = 1; _ < arguments.length; _++) {
						var b = arguments[_];
						for (var I in b) Object.prototype.hasOwnProperty.call(b, I) && (P[I] = b[I])
					}
					return P
				}, L.apply(this, arguments)
			}

			function te(P, _) {
				if (P == null) return {};
				var b = X(P, _),
					I, Z;
				if (Object.getOwnPropertySymbols) {
					var ne = Object.getOwnPropertySymbols(P);
					for (Z = 0; Z < ne.length; Z++) I = ne[Z], !(_.indexOf(I) >= 0) && (!Object.prototype.propertyIsEnumerable.call(P, I) || (b[I] = P[I]))
				}
				return b
			}

			function X(P, _) {
				if (P == null) return {};
				var b = {},
					I = Object.keys(P),
					Z, ne;
				for (ne = 0; ne < I.length; ne++) Z = I[ne], !(_.indexOf(Z) >= 0) && (b[Z] = P[Z]);
				return b
			}
			const Q = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var V = P => {
					let {
						isStarred: _,
						size: b = 16
					} = P, I = te(P, ["isStarred", "size"]);
					const Z = Q[(0, x.Yc)() ? "dark" : "light"];
					return o().createElement(k.J, L({
						type: _ ? "star" : "star-outline",
						color: _ ? Z.gold : Z.gray,
						size: b
					}, I))
				},
				G = n("../../../../node_modules/@cloudflare/elements/es/index.js");

			function j(P) {
				for (var _ = 1; _ < arguments.length; _++) {
					var b = arguments[_] != null ? Object(arguments[_]) : {},
						I = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(b).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(b, Z).enumerable
					})), I.forEach(function(Z) {
						Y(P, Z, b[Z])
					})
				}
				return P
			}

			function Y(P, _, b) {
				return _ = C(_), _ in P ? Object.defineProperty(P, _, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[_] = b, P
			}

			function C(P) {
				var _ = $(P, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function $(P, _) {
				if (typeof P != "object" || P === null) return P;
				var b = P[Symbol.toPrimitive];
				if (b !== void 0) {
					var I = b.call(P, _ || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(P)
			}
			const R = {
				light: {
					default: {
						border: "gray.8",
						text: "gray.2",
						bg: "white",
						bgDisabled: "grey.6"
					},
					active: {
						border: "blue.5",
						text: "blue.5",
						bg: "blue.9",
						bgDisabled: "grey.6"
					}
				},
				dark: {
					default: {
						border: "gray.8",
						text: "gray.1",
						bg: "gray.7",
						bgDisabled: "grey.6"
					},
					active: {
						border: "blue.5",
						text: "gray.1",
						bg: "blue.9",
						bgDisabled: "grey.6"
					}
				}
			};
			var z = (0, e.forwardRef)(({
				featurePreview: P = !1,
				isStarred: _,
				onClickFn: b,
				isDisabled: I,
				testId: Z,
				buttonText: ne,
				size: D = "large"
			}, q) => {
				const N = R[(0, x.Yc)() ? "dark" : "light"][_ && !P ? "active" : "default"],
					ie = j({}, D === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, D === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return o().createElement(G.zx, {
					innerRef: q,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: ie.paddingRight,
					gap: 1,
					pl: ie.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: P || I ? "default" : "pointer",
					backgroundColor: N.bg,
					color: N.text,
					borderColor: N.border,
					onClick: b,
					opacity: I ? .5 : 1,
					disabled: I,
					fontSize: ie.fontSize,
					height: ie.height,
					"data-testid": Z
				}, o().createElement(V, {
					isStarred: P ? !1 : _,
					size: ie.starIconSize
				}), ne)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(W, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				u = n.n(c),
				m = n("../../../common/intl/intl-react/src/index.ts"),
				a = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = n("../node_modules/@cloudflare/component-button/es/index.js"),
				p = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				h = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				r = n.n(t),
				i = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				s = n("../react/app/components/Footer.tsx"),
				E = n("../react/utils/url.ts");

			function f(j) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var C = arguments[Y] != null ? Object(arguments[Y]) : {},
						$ = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(C).filter(function(R) {
						return Object.getOwnPropertyDescriptor(C, R).enumerable
					})), $.forEach(function(R) {
						S(j, R, C[R])
					})
				}
				return j
			}

			function S(j, Y, C) {
				return Y = U(Y), Y in j ? Object.defineProperty(j, Y, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[Y] = C, j
			}

			function U(j) {
				var Y = M(j, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function M(j, Y) {
				if (typeof j != "object" || j === null) return j;
				var C = j[Symbol.toPrimitive];
				if (C !== void 0) {
					var $ = C.call(j, Y || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(j)
			}
			const x = (0, a.createComponent)(({
					type: j
				}) => ({
					height: j !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				k = (0, a.createComponent)(({
					theme: j,
					margin: Y,
					size: C = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: j.colors.gray[3],
					height: Y ? "auto" : "100%",
					padding: Y ? 0 : j.space[C > 1 ? C - 2 : 0],
					margin: Y,
					justifyContent: "center",
					alignItems: "center"
				})),
				L = (0, a.createComponent)(() => ({
					textAlign: "left"
				})),
				te = (0, a.createComponent)(() => ({
					textAlign: "right"
				})),
				X = (0, a.createComponent)(({
					theme: j
				}) => ({
					fontSize: j.fontSizes[6]
				})),
				Q = (0, a.createComponent)(({
					theme: j
				}) => ({
					fontSize: j.fontSizes[4]
				})),
				H = (0, a.createComponent)(({
					theme: j
				}) => ({
					fontSize: j.fontSizes[3]
				})),
				V = (0, a.createComponent)(({
					theme: j
				}) => ({
					width: "100%",
					height: 125,
					marginTop: j.space[4],
					padding: j.space[2]
				}), "textarea");
			class G extends o().Component {
				constructor(...Y) {
					super(...Y);
					S(this, "state", {
						value: "",
						submitted: !1
					}), S(this, "handleTextareaChange", C => {
						this.setState({
							value: C.target.value
						})
					}), S(this, "sendErrToSentry10", async () => {
						try {
							var C, $, R, ae;
							const z = ((C = window) === null || C === void 0 || ($ = C.bootstrap) === null || $ === void 0 || (R = $.data) === null || R === void 0 || (ae = R.user) === null || ae === void 0 ? void 0 : ae.id) || "Unknown",
								P = this.props.eventId || p.eW(),
								_ = {
									name: z,
									email: `${z}@userid.com`,
									comments: this.state.value,
									eventId: P,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: f({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(_)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (z) {
							console.error(z)
						}
					}), S(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), S(this, "renderContent", C => o().createElement(m.oc, null, $ => o().createElement(x, {
						type: C
					}, o().createElement(k, null, o().createElement(L, null, o().createElement(X, null, $.t("error.internal_issues")), o().createElement(Q, null, $.t("error.help_us")), o().createElement(V, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: R => this.handleTextareaChange(R),
						disabled: this.state.submitted,
						placeholder: $.t("error.give_feedback")
					}), o().createElement(te, null, !this.state.submitted && o().createElement(g.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, $.t("common.submit")), this.state.submitted && o().createElement(H, null, $.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const Y = this.props.error;
					console.error(`SomethingWrong: ${Y}`), h.YA("user_feedback_form_displayed", "yes"), h.YA("normalizedPath", (0, E.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: Y
					} = this.props;
					return Y === "fullscreen" ? o().createElement("div", null, o().createElement(i.h4, null, o().createElement(t.Link, {
						to: "/"
					}, o().createElement(d.TR, null))), this.renderContent(Y), o().createElement(s.Z, null)) : this.renderContent(Y)
				}
			}
			G.propTypes = {
				type: u().oneOf(["fullscreen", "page"]),
				error: u().oneOfType([u().string, u().object]),
				eventId: u().string
			}, v.Z = G
		},
		"../react/app/redux/index.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				TZ: function() {
					return c
				},
				UM: function() {
					return m
				},
				ZS: function() {
					return u
				},
				p4: function() {
					return a
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e);
			const c = () => (0, e.useStore)(),
				u = () => c().getState(),
				m = () => (0, e.useDispatch)(),
				a = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(W, v, n) {
			"use strict";
			n.d(v, {
				P1: function() {
					return h
				},
				jQ: function() {
					return g
				},
				qR: function() {
					return t
				},
				uc: function() {
					return p
				}
			});
			var e = n("../react/pages/home/alerts/config.tsx"),
				o = n("../react/pages/workers/entityTypes.ts"),
				c = n("../react/pages/email/types.ts"),
				u = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				m = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				a = n.n(m);
			const g = m.static.from([{
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
					entityType: "advancedTCPPrefix"
				}, {
					entityType: "advancedTCPPrefixes",
					to: "advancedTCPPrefix"
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
					entityType: "customerMetadataBoundary"
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
					entityType: "hostnameRegions"
				}, {
					entityType: "http2ToOrigin"
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
					entityType: "languagePreference"
				}, {
					entityType: "loadBalancers",
					to: "loadBalancer"
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
					entityType: "firstPartyFonts"
				}, {
					entityType: "imageResizing"
				}, {
					entityType: "rateLimitingAnalytics"
				}, {
					entityType: "rulesets"
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
					entityType: c.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: c.BB.rule,
					idProp: "tag"
				}, {
					entityType: c.BB.rules,
					to: c.BB.rule
				}, {
					entityType: c.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: c.BB.dstAddresses,
					to: c.BB.dstAddress
				}, {
					entityType: c.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: c.BB.dnsRecords,
					to: c.BB.dnsRecord
				}, {
					entityType: c.BB.zone,
					idProp: "tag"
				}]),
				p = r => r.entities,
				h = (...r) => (0, u.P1)(g, p, ...r),
				t = (0, u.QB)(g)
		},
		"../react/app/redux/utils.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				F: function() {
					return c
				},
				_: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const o = u => (m, a, g) => (0, e.SC)(m, a, g, {
					hideErrorAlert: !0
				}).catch(u),
				c = u => m => {
					if (m.status === u) return m;
					throw m
				}
		},
		"../react/common/actionTypes.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Cm: function() {
					return a
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return g
				},
				Li: function() {
					return h
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return c
				},
				Yc: function() {
					return r
				},
				gM: function() {
					return u
				},
				lV: function() {
					return m
				},
				s1: function() {
					return p
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				c = "MODAL_OPEN",
				u = "MODAL_CLOSE",
				m = "TOGGLE_ON",
				a = "TOGGLE_OFF",
				g = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				h = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(i) {
				return i.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", i.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", i.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", i.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", i.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", i.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", i.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", i.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", i.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", i
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				AX: function() {
					return i
				},
				YT: function() {
					return h
				},
				ct: function() {
					return g
				},
				d6: function() {
					return t
				},
				kt: function() {
					return r
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/common/constants/index.ts");

			function c(d) {
				for (var s = 1; s < arguments.length; s++) {
					var E = arguments[s] != null ? Object(arguments[s]) : {},
						f = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(E).filter(function(S) {
						return Object.getOwnPropertyDescriptor(E, S).enumerable
					})), f.forEach(function(S) {
						u(d, S, E[S])
					})
				}
				return d
			}

			function u(d, s, E) {
				return s = m(s), s in d ? Object.defineProperty(d, s, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[s] = E, d
			}

			function m(d) {
				var s = a(d, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function a(d, s) {
				if (typeof d != "object" || d === null) return d;
				var E = d[Symbol.toPrimitive];
				if (E !== void 0) {
					var f = E.call(d, s || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(d)
			}
			const g = d => {
					const s = d.payload.map(E => c({}, E, {
						membershipId: E.id,
						id: E.account.id
					}));
					return c({}, d, {
						payload: s
					})
				},
				p = d => {
					const s = g(d);
					return Array.isArray(s.payload) ? c({}, d, {
						payload: s.payload[0]
					}) : c({}, d, {
						payload: null
					})
				},
				h = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", g),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...d) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: d
				}),
				i = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function(W, v, n) {
			"use strict";
			n.r(v), n.d(v, {
				closeModal: function() {
					return u
				},
				openModal: function() {
					return c
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function c(m, a, g = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: m,
						props: a
					},
					options: g
				}
			}

			function u(m) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: m
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				IH: function() {
					return m
				},
				Vp: function() {
					return a
				},
				ZK: function() {
					return p
				},
				um: function() {
					return g
				},
				vU: function() {
					return h
				}
			});
			var e = n("../react/common/actionTypes.ts");

			function o(t) {
				return {
					type: e.Ng,
					notification: t
				}
			}

			function c(t) {
				return {
					type: e.Cz,
					notificationId: t
				}
			}
			let u = 0;

			function m(t, r, i = {}) {
				return i = i || {},
					function(d) {
						let s = u++,
							E = {
								id: s,
								type: t,
								message: r,
								delay: i.delay,
								persist: i.persist === void 0 ? !1 : i.persist,
								closable: i.closable === void 0 ? !0 : i.closable,
								onClose() {
									d(c(s)), i.onClose && i.onClose.apply(null, arguments)
								}
							};
						d(o(E))
					}
			}

			function a(t, r) {
				return m("success", t, r)
			}

			function g(t, r) {
				return m("info", t, r)
			}

			function p(t, r) {
				return m("warning", t, r)
			}

			function h(t, r) {
				return m("error", t, r)
			}
		},
		"../react/common/actions/userActions.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				BT: function() {
					return g
				},
				Ut: function() {
					return S
				},
				V_: function() {
					return U
				},
				Y9: function() {
					return E
				},
				Z0: function() {
					return x
				},
				mp: function() {
					return f
				},
				r3: function() {
					return M
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/app/redux/utils.ts");

			function c(k) {
				for (var L = 1; L < arguments.length; L++) {
					var te = arguments[L] != null ? Object(arguments[L]) : {},
						X = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(te).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(te, Q).enumerable
					})), X.forEach(function(Q) {
						u(k, Q, te[Q])
					})
				}
				return k
			}

			function u(k, L, te) {
				return L = m(L), L in k ? Object.defineProperty(k, L, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[L] = te, k
			}

			function m(k) {
				var L = a(k, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function a(k, L) {
				if (typeof k != "object" || k === null) return k;
				var te = k[Symbol.toPrimitive];
				if (te !== void 0) {
					var X = te.call(k, L || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(k)
			}
			const g = (0, e.C)("user").get`/user`,
				p = (0, e.C)("user").patch`/user`,
				h = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/two_factor_authentication`,
				d = (0, e.C)("user").delete`/user/two_factor_authentication`,
				s = (0, e.C)("user").put`/user/email`;

			function E(...k) {
				return s(...k)
			}
			const f = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				S = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(k => c({}, k, {
					body: c({}, k.body, {
						result: {}
					})
				}))),
				U = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				M = (0, e.C)("userDetails").get`/user/details`,
				x = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/Apple/utils.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				PP: function() {
					return r
				},
				RJ: function() {
					return g
				},
				tz: function() {
					return i
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				m = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const a = () => p.test(window.location.pathname) || c.E.has(u.Qq),
				g = () => c.E.get(u.Qq),
				p = /^\/login\/apple(\/)?/,
				t = [p, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let d = !1;
					t.forEach(E => {
						if (E.test(window.location.pathname)) {
							d = !0;
							return
						}
					});
					const s = a() && d;
					return s && (0, m.C8)(m.LF.OFF), s
				},
				i = d => {
					d && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let s = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					d && (s = s + `&jwt=${d}`), window.location.href = s
				}
		},
		"../react/common/components/EmptyPage.jsx": function(W, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				u = n.n(c),
				m = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const a = ({
				children: g
			}) => o().createElement(m.xu, {
				height: 411
			}, g);
			a.propTypes = {
				children: u().node
			}, v.Z = a
		},
		"../react/common/components/ModalManager.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				ZP: function() {
					return i
				},
				dd: function() {
					return t
				},
				vR: function() {
					return h
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("webpack/sharing/consume/default/react-redux/react-redux");
			const u = d => d.application.modals;
			var m = n("../react/common/actions/modalActions.ts");

			function a() {
				return a = Object.assign ? Object.assign.bind() : function(d) {
					for (var s = 1; s < arguments.length; s++) {
						var E = arguments[s];
						for (var f in E) Object.prototype.hasOwnProperty.call(E, f) && (d[f] = E[f])
					}
					return d
				}, a.apply(this, arguments)
			}
			const g = o().createContext(null);
			class p extends o().Component {
				render() {
					const {
						modals: s,
						closeModal: E
					} = this.props;
					return o().createElement(o().Fragment, null, s.map(({
						ModalComponent: f,
						props: S = {},
						id: U
					}) => {
						const M = () => {
							typeof S.onClose == "function" && S.onClose(), E(f)
						};
						return o().createElement(g.Provider, {
							key: U,
							value: {
								closeModal: M
							}
						}, o().createElement(f, a({}, S, {
							isOpen: !0,
							closeModal: M
						})))
					}))
				}
			}

			function h() {
				const d = o().useContext(g);
				if (!d) throw new Error("useModalContext must be used within a ModalContext");
				return d
			}

			function t() {
				const d = (0, c.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...s) {
						return d(m.openModal(...s))
					}, [d]),
					closeModal: (0, e.useCallback)(function(...s) {
						return d(m.closeModal(...s))
					}, [d])
				}
			}
			var i = (0, c.connect)(d => ({
				modals: u(d)
			}), m)(p)
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				BQ: function() {
					return t
				},
				Gn: function() {
					return p
				},
				JR: function() {
					return h
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return a
				},
				ZI: function() {
					return m
				},
				if: function() {
					return o
				},
				q6: function() {
					return c
				},
				w_: function() {
					return u
				},
				zl: function() {
					return g
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				c = "date-from",
				u = "date-to",
				m = "from",
				a = "to",
				g = "all",
				p = {
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
			let h = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				t = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/constants/billing/index.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Gq: function() {
					return u
				},
				g$: function() {
					return c
				},
				WX: function() {
					return e
				},
				E0: function() {
					return h
				},
				Hw: function() {
					return a
				},
				Ed: function() {
					return m
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return d
				},
				hQ: function() {
					return g
				},
				SP: function() {
					return p
				}
			});
			let e = function(s) {
				return s.page_rules = "page_rules", s.automatic_platform_optimization = "automatic_platform_optimization", s
			}({});
			const o = "page_rules",
				c = "automatic_platform_optimization",
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
				m = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				a = {
					currency: "USD",
					frequency: "monthly",
					requests_included: 5e5,
					ubb_price: .5,
					ubb_frequency: 5e5
				},
				g = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e4,
					ubb_frequency: 1e4,
					ubb_price: .05
				},
				p = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					ubb_frequency: 1e3,
					ubb_storage_price: 5,
					ubb_streaming_price: 1,
					ubb_unit: "minute"
				},
				h = {
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
			var t = n("../react/common/constants/billing/tax.ts"),
				r = n("../react/common/constants/billing/tracking.ts"),
				i = n("../react/common/constants/billing/workers.ts");
			const d = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				FP: function() {
					return e
				},
				Nl: function() {
					return m
				},
				SO: function() {
					return c
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
				c = {
					BILLING: "billing"
				},
				u = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				m = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Dk: function() {
					return d
				},
				Dy: function() {
					return s
				},
				E_: function() {
					return a
				},
				Lv: function() {
					return E
				},
				S4: function() {
					return m
				},
				UM: function() {
					return t
				},
				Xf: function() {
					return h
				},
				Y1: function() {
					return g
				},
				p6: function() {
					return p
				},
				q0: function() {
					return u
				},
				rg: function() {
					return f
				},
				sJ: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const u = "healthy",
				m = "degraded",
				a = "critical",
				g = "unknown",
				p = "not-monitored",
				h = o().from({
					FREE: "free",
					PRO: "pro",
					BIZ: "business",
					ENT: "enterprise"
				}),
				t = {
					ZONES_ROOT_REQUESTED: "zones_root_requested",
					ZONES_ACCOUNT_REQUESTED: "zones_account_requested",
					ZONES_HEADER_REQUESTED: "zones_header_requested",
					MEMBERSHIPS_ROOT_REQUESTED: "membership_root_requested",
					ACCOUNT_MEMBERS_REQUESTED: "account_members_requested"
				},
				r = {
					f: h.FREE,
					p: h.PRO,
					b: h.BIZ
				},
				i = "marketing-pt",
				d = () => {
					const U = c.Z.get(i);
					if (!!U) return r[U]
				},
				s = ["gov"],
				E = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				f = "banner-notification-interactions",
				S = null
		},
		"../react/common/constants/index.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
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
			var e = n("../react/common/constants/constants.ts"),
				o = n("../react/common/constants/billing/index.ts")
		},
		"../react/common/hooks/suspenseHelpers.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				bt: function() {
					return g
				},
				nW: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const u = "suspenseComplete";

			function m() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(u))
				}, [])
			}

			function a(p) {
				(0, c.OR)(u, () => {
					window.setTimeout(p, 0)
				}, {
					target: window
				})
			}

			function g(...p) {
				const [h, t] = p;
				o().useLayoutEffect(h, t), a(h)
			}
		},
		"../react/common/hooks/useCachedState.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				j: function() {
					return u
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function u(m, {
				key: a,
				cache: g = c.E
			} = {}) {
				const p = a !== void 0 && g.get(a),
					[h, t] = (0, e.useState)(p || m);
				return [h, i => {
					t(d => (i instanceof Function && (i = i(d)), a !== void 0 && g.set(a, i), i))
				}]
			}
		},
		"../react/common/hooks/usePrevious.ts": function(W, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function c(u) {
				const m = (0, e.useRef)(u);
				return (0, e.useEffect)(() => {
					m.current = u
				}, [u]), m.current
			}
			v.Z = c
		},
		"../react/common/middleware/sparrow/errors.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Uh: function() {
					return m
				},
				ez: function() {
					return u
				},
				oV: function() {
					return a
				}
			});

			function e(g, p, h) {
				return p = o(p), p in g ? Object.defineProperty(g, p, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[p] = h, g
			}

			function o(g) {
				var p = c(g, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function c(g, p) {
				if (typeof g != "object" || g === null) return g;
				var h = g[Symbol.toPrimitive];
				if (h !== void 0) {
					var t = h.call(g, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(g)
			}
			class u extends Error {
				constructor(p, h) {
					super(h);
					e(this, "eventName", void 0), this.eventName = p, this.name = "SparrowValidationError"
				}
			}
			class m extends u {
				constructor(p) {
					super(p, `Event not allowed: "${p}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class a extends u {
				constructor(p, h) {
					super(p, `Found invalid properties on event: "${p}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = h
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				AC: function() {
					return Ke
				},
				Au: function() {
					return re
				},
				B: function() {
					return Ce
				},
				B3: function() {
					return He
				},
				BG: function() {
					return L
				},
				Bp: function() {
					return at
				},
				D0: function() {
					return U
				},
				DT: function() {
					return D
				},
				EL: function() {
					return b
				},
				GE: function() {
					return fe
				},
				Ko: function() {
					return ne
				},
				Kx: function() {
					return Q
				},
				Le: function() {
					return H
				},
				O4: function() {
					return je
				},
				Ou: function() {
					return z
				},
				Py: function() {
					return Ve
				},
				QI: function() {
					return Ie
				},
				RO: function() {
					return F
				},
				T3: function() {
					return Xe
				},
				T8: function() {
					return k
				},
				UX: function() {
					return _
				},
				VP: function() {
					return Pe
				},
				Xo: function() {
					return $e
				},
				Xu: function() {
					return $
				},
				Yi: function() {
					return it
				},
				Yj: function() {
					return Z
				},
				Zu: function() {
					return I
				},
				bC: function() {
					return ie
				},
				f8: function() {
					return j
				},
				hN: function() {
					return X
				},
				hX: function() {
					return ce
				},
				iq: function() {
					return Ue
				},
				nE: function() {
					return te
				},
				oD: function() {
					return P
				},
				oI: function() {
					return G
				},
				oJ: function() {
					return Ze
				},
				uF: function() {
					return R
				},
				ut: function() {
					return xe
				},
				vU: function() {
					return ke
				},
				wQ: function() {
					return ve
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				o = n("../../../../node_modules/lodash/get.js"),
				c = n.n(o),
				u = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				m = n.n(u),
				a = n("../../../../node_modules/reselect/lib/index.js"),
				g = n("../../../../node_modules/moment/moment.js"),
				p = n.n(g),
				h = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				r = n("../react/common/selectors/userSelectors.ts"),
				i = n("../react/common/selectors/entitlementsSelectors.ts"),
				d = n("../react/app/components/DeepLink/selectors.ts");

			function s(w) {
				for (var ee = 1; ee < arguments.length; ee++) {
					var ue = arguments[ee] != null ? Object(arguments[ee]) : {},
						me = Object.keys(ue);
					typeof Object.getOwnPropertySymbols == "function" && me.push.apply(me, Object.getOwnPropertySymbols(ue).filter(function(he) {
						return Object.getOwnPropertyDescriptor(ue, he).enumerable
					})), me.forEach(function(he) {
						E(w, he, ue[he])
					})
				}
				return w
			}

			function E(w, ee, ue) {
				return ee = f(ee), ee in w ? Object.defineProperty(w, ee, {
					value: ue,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[ee] = ue, w
			}

			function f(w) {
				var ee = S(w, "string");
				return typeof ee == "symbol" ? ee : String(ee)
			}

			function S(w, ee) {
				if (typeof w != "object" || w === null) return w;
				var ue = w[Symbol.toPrimitive];
				if (ue !== void 0) {
					var me = ue.call(w, ee || "default");
					if (typeof me != "object") return me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ee === "string" ? String : Number)(w)
			}
			const U = w => {
					const ee = R(w);
					return ee == null ? void 0 : ee.account
				},
				M = w => {
					const ee = (0, r.PR)(w);
					if (ee) {
						const ue = ee.id;
						return w.accountAccess[ue] || {}
					}
					return {}
				},
				x = w => w.accountsDetailed,
				k = (0, t.P1)("accountsDetailed", x),
				L = w => w.memberships,
				te = (0, a.P1)((0, t.P1)("memberships", L), d.U, (w, ee) => !!ee && !!w ? w.filter(ue => ee.includes(ue.id)) : w),
				X = w => w.accountFlags && w.accountFlags.data,
				Q = w => w.accountFlags,
				H = (w, ee, ue) => {
					const me = X(w);
					return !me || !me[ee] ? null : me[ee][ue]
				},
				V = w => w.accountFlags.isRequesting,
				G = (w, ...ee) => c()(w, ["accountFlagsChanges", "data", ...ee]),
				j = w => w.accountFlagsChanges.isRequesting,
				Y = (0, a.P1)(X, Q, (w, ee) => ({
					data: w,
					meta: ee
				})),
				C = (w, ee, ue) => !!(isEnterpriseSSEnabledSelector(w) && H(w, ee, ue)),
				$ = w => w.membership,
				R = (0, t.P1)("membership", $),
				ae = (0, a.P1)(R, $, (w, ee) => ({
					data: w,
					meta: ee
				})),
				z = w => {
					const {
						roles: ee = []
					} = R(w) || {};
					return Boolean(ee.find(ue => ue === "Super Administrator - All Privileges" || ue === "Billing"))
				},
				P = w => {
					const ee = M(w),
						ue = Ae.getMemberships(w) ? m().asMutable(Ae.getMemberships(w)) : [];
					if (!!ue) return m().from(ue.map(me => s({}, me, {
						lastSeen: ee[me.account.id] ? ee[me.account.id].lastSeen : null
					})).sort((me, he) => me.lastSeen && he.lastSeen ? he.lastSeen - me.lastSeen : 0))
				},
				_ = w => w.filteredMemberships,
				b = (0, t.P1)("filteredMemberships", _),
				I = (0, a.P1)(R, w => w == null ? void 0 : w.permissions),
				Z = (0, a.P1)(I, w => (0, e.Z)(ee => {
					var ue;
					return (ue = w == null ? void 0 : w[ee]) !== null && ue !== void 0 ? ue : {
						read: !1,
						edit: !1
					}
				})),
				ne = (0, a.P1)(R, w => w == null ? void 0 : w.policies),
				D = (w, ee, ue) => {
					let me = Ae.getMembership(w);
					if (!me) {
						const he = Ae.getMemberships(w);
						if (!he || !ee) return !1;
						me = he.find(Me => Me.account.id === ee)
					}
					if (!me || !ue) return !1;
					try {
						return ue(me.permissions)
					} catch {
						return !1
					}
				},
				q = w => {
					var ee, ue;
					return (ee = (ue = U(w)) === null || ue === void 0 ? void 0 : ue.meta.has_pro_zones) !== null && ee !== void 0 ? ee : !1
				},
				N = w => {
					var ee, ue;
					return (ee = (ue = U(w)) === null || ue === void 0 ? void 0 : ue.meta.has_business_zones) !== null && ee !== void 0 ? ee : !1
				},
				ie = w => N(w) || q(w),
				pe = (w, ee) => {
					const ue = ge(w, ee);
					return !!ue && !!ue.enabled
				},
				ge = (w, ee) => {
					const ue = Ae.getMembership(w),
						me = ue && ue.account;
					return me && me.legacy_flags && me.legacy_flags[ee]
				},
				ve = w => pe(w, "custom_pages"),
				Re = w => !!w && w["webhooks.webhooks.enabled"],
				we = w => H(w, "bots", "enabled"),
				De = w => H(w, "billing", "annual_subscriptions_enable"),
				F = w => w ? Boolean(H(w, "ConstellationAI", "v2_ui")) : !1,
				ce = w => w ? Boolean(H(w, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Ce = w => w ? Boolean(H(w, "AIgateway", "enabled")) : !1,
				Be = w => ge(w, "enterprise_zone_quota"),
				ze = w => {
					const ee = Be(w);
					return !ee || !ee.available ? -1 : ee.available
				},
				Ue = w => w.accountMembers,
				He = (0, t.P1)("accountMembers", Ue),
				je = w => w.accountMember && w.accountMember.isRequesting,
				et = w => w.accountRoles,
				Ke = (0, t.P1)("accountRoles", et),
				Ve = (w, ee) => {
					const ue = Ae.getMemberships(w),
						me = ue && ue.find(Je => Je.account.id === ee);
					if (me) return me.account.name.replace(" Account", " account");
					const he = Ae.getMembership(w),
						Me = he && he.account;
					return Me && Me.id === ee ? Me.name : null
				},
				xe = (w, ee) => {
					const ue = Ae.getMemberships(w),
						me = ue && ue.find(Je => Je.account.id === ee);
					if (me) return me.account.settings.access_approval_expiry;
					const he = Ae.getMembership(w),
						Me = he && he.account;
					return Me && Me.id === ee ? Me.settings.access_approval_expiry : null
				},
				$e = (w, ee) => {
					const ue = xe(w, ee);
					return ue ? p().utc(ue).isAfter() : !1
				},
				Xe = (w, ee, ue) => {
					const me = xe(w, ee);
					let he = me ? p().utc(me) : null;
					return !he || !he.isAfter() ? "" : he && he.year() === 3e3 ? ue("account.access_approval.card_expiration_forever") : ue("account.access_approval.card_expiration_text", {
						expiryTimestamp: he.local().format(h.U.DateTime)
					})
				},
				Ze = w => w && w.member && w.member.edit,
				re = (w, ee) => {
					const ue = Ae.getMembership(w),
						me = ue && ue.account;
					return me ? me.id !== ee : !1
				},
				le = w => w.dpa,
				A = (0, t.P1)("dpa", le),
				B = w => w.webhook,
				oe = w => w.webhooks,
				be = (0, t.P1)("webhook", oe),
				Pe = w => w.accountLegoContract,
				Oe = (0, t.P1)("accountLegoContract", Pe),
				Ie = w => {
					const ee = Oe(w);
					return (ee == null ? void 0 : ee.lego_state) ? ee.lego_state : ""
				},
				Se = w => Ie(w) === "signed",
				fe = w => Pe(w).isRequesting,
				ke = w => {
					const ee = Oe(w);
					return ee && ee.subscription_type ? ee.subscription_type : ""
				},
				Ge = w => ke(w) !== "",
				Ae = {
					getMembership: R,
					getMemberships: te,
					getFilteredMemberships: b,
					getAccountMembers: He,
					getAccountRoles: Ke
				},
				at = w => w.accountSingle,
				it = (0, t.P1)("accountSingle", at)
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				$f: function() {
					return s
				},
				AD: function() {
					return m
				},
				BF: function() {
					return d
				},
				Bs: function() {
					return x
				},
				Ci: function() {
					return D
				},
				E6: function() {
					return i
				},
				Hq: function() {
					return we
				},
				Ms: function() {
					return te
				},
				Q2: function() {
					return a
				},
				Td: function() {
					return U
				},
				Z: function() {
					return ie
				},
				a: function() {
					return M
				},
				a5: function() {
					return ge
				},
				du: function() {
					return p
				},
				ec: function() {
					return C
				},
				f: function() {
					return Re
				},
				hL: function() {
					return pe
				},
				ji: function() {
					return q
				},
				jo: function() {
					return X
				},
				k4: function() {
					return ve
				},
				lI: function() {
					return u
				},
				p1: function() {
					return f
				},
				pK: function() {
					return De
				},
				pf: function() {
					return t
				},
				qR: function() {
					return S
				},
				rV: function() {
					return g
				},
				u1: function() {
					return h
				},
				w4: function() {
					return r
				},
				yD: function() {
					return N
				}
			});
			var e = n("../react/utils/url.ts");

			function o(F, ce) {
				return F && F[ce]
			}
			const c = F => !u(F).isRequesting;

			function u(F) {
				return F.entitlements.zone
			}

			function m(F) {
				return u(F).data
			}
			const a = F => {
				var ce, Ce;
				return ((ce = u(F).paginationData) === null || ce === void 0 || (Ce = ce.options) === null || Ce === void 0 ? void 0 : Ce.editedDate) || {}
			};

			function g(F, ce) {
				const Ce = m(F);
				return Ce ? o(Ce, ce) : void 0
			}
			const p = (F, ce) => g(F, ce) === !0;

			function h(F) {
				return F.entitlements.account
			}

			function t(F) {
				return h(F).data
			}
			const r = F => {
				var ce, Ce;
				return ((ce = h(F).paginationData) === null || ce === void 0 || (Ce = ce.options) === null || Ce === void 0 ? void 0 : Ce.editedDate) || {}
			};

			function i(F) {
				return !h(F).isRequesting
			}

			function d(F, ce) {
				const Ce = t(F);
				return Ce ? o(Ce, ce) : void 0
			}

			function s(F, ce) {
				return d(F, ce) === !0
			}

			function E(F, ce) {
				return ce.every(Ce => s(F, Ce))
			}

			function f(F) {
				return s(F, "contract.customer_enabled")
			}

			function S(F) {
				return s(F, "contract.self_service_allowed")
			}

			function U(F) {
				return s(F, "billing.partners_managed")
			}
			const M = F => f(F) && S(F),
				x = F => s(F, "enterprise.ecp_allowed");

			function k(F) {
				return L(F) || s(F, "argo.allow_smart_routing") || s(F, "argo.allow_tiered_caching") || s(F, "rate_limiting.enabled") || s(F, "ctm.enabled") || s(F, "workers.enabled") || s(F, "workers.kv_store.enabled") || s(F, "stream.enabled")
			}
			const L = F => p(F, "argo.allow_smart_routing") || p(F, "argo.allow_tiered_caching"),
				te = F => s(F, "zone.cname_setup_allowed") || s(F, "zone.partial_setup_allowed") || p(F, "zone.partial_setup_allowed"),
				X = F => s(F, "argo.allow_smart_routing") || p(F, "argo.allow_smart_routing"),
				Q = F => s(F, "argo.allow_tiered_caching") || p(F, "argo.allow_tiered_caching"),
				H = F => X(F) || Q(F),
				V = F => s(F, "ctm.enabled"),
				G = F => {
					const ce = d(F, "ctm.load_balancers");
					return typeof ce == "number" ? ce : 0
				},
				j = F => {
					const ce = d(F, "ctm.pools");
					return typeof ce == "number" ? ce : 0
				},
				Y = F => {
					const ce = d(F, "ctm.origins");
					return typeof ce == "number" ? ce : 0
				},
				C = F => s(F, "workers.enabled"),
				$ = F => s(F, "stream.enabled"),
				R = F => {
					const ce = d(F, "access.users_allowed");
					return typeof ce == "number" ? ce : 0
				},
				ae = F => R(F) > 0,
				z = F => {
					const ce = g(F, "dedicated_certificates");
					return typeof ce == "number" ? ce : 0
				},
				P = F => z(F) > 0,
				_ = F => {
					const ce = g(F, "rate_limiting.max_rules");
					return typeof ce == "number" ? ce : 0
				},
				b = F => s(F, "rate_limiting.enabled"),
				I = F => {
					const ce = g(F, "page_rules");
					return typeof ce == "number" ? ce : 0
				},
				Z = F => I(F) > 0,
				ne = F => {
					const ce = d(F, "dns_firewall.max_clusters_allowed");
					return typeof ce == "number" ? ce : 0
				},
				D = F => ne(F) > 0,
				q = F => p(F, "zone.advanced_certificate_manager") || s(F, "zone.advanced_certificate_manager"),
				N = F => g(F, "authoritative_dns.proxy_record_allowed") === !1 || d(F, "authoritative_dns.proxy_record_allowed") === !1,
				ie = F => s(F, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				pe = F => g(F, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				ge = F => {
					const ce = g(F, "authoritative_dns.min_record_ttl_allowed");
					return typeof ce == "number" && ce > 1 ? ce : 60
				},
				ve = F => s(F, "foundation_dns.advanced_nameservers_allowed") || p(F, "foundation_dns.advanced_nameservers_allowed"),
				Re = (F, ce) => ((0, e.el)(window.location.pathname) ? g : d)(F, ce),
				we = F => s(F, "authoritative_dns.multi_provider_allowed") || p(F, "authoritative_dns.multi_provider_allowed"),
				De = F => s(F, "secondary_dns.secondary_overrides") || p(F, "secondary_dns.secondary_overrides")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				r: function() {
					return u
				},
				v: function() {
					return m
				}
			});
			var e = n("../react/utils/i18n.ts"),
				o = n("../../../common/intl/intl-types/src/index.ts"),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const u = a => {
				const g = a.userCommPreferences.data;
				if (g == null ? void 0 : g["language-locale"]) return c.Z.set(e.ly, g["language-locale"]), g["language-locale"];
				{
					c.Z.has(e.ly) || c.Z.set(e.ly, e.ZW);
					const p = c.Z.get(e.ly);
					return m(p) ? p : e.ZW
				}
			};

			function m(a) {
				const g = Object.keys(o.Q).find(p => o.Q[p] === a);
				return !!a && typeof a == "string" && g != null && (0, e.S8)(!1, g)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				$8: function() {
					return m
				},
				BG: function() {
					return h
				},
				BY: function() {
					return M
				},
				GP: function() {
					return s
				},
				GU: function() {
					return x
				},
				PR: function() {
					return c
				},
				h$: function() {
					return S
				},
				h8: function() {
					return t
				},
				kk: function() {
					return f
				},
				l8: function() {
					return g
				},
				mV: function() {
					return E
				},
				vW: function() {
					return a
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const o = k => k.user,
				c = (0, e.P1)("user", o),
				u = k => {
					var L;
					return (L = c(k)) === null || L === void 0 ? void 0 : L.email.endsWith("@cloudflare.com")
				},
				m = k => {
					var L;
					return !!((L = c(k)) === null || L === void 0 ? void 0 : L.id)
				},
				a = k => {
					const L = c(k);
					if (!!L) return L.first_name && L.last_name ? `${L.first_name} ${L.last_name}` : L.email
				},
				g = k => {
					const L = c(k);
					return L && L.has_enterprise_zones
				},
				p = k => k.userCommPreferences,
				h = (0, e.P1)("userCommPreferences", p),
				t = k => {
					const L = c(k);
					return L && L.email_verified
				},
				r = k => {
					const L = h(k);
					return L && L.preferences.marketing_communication
				},
				i = k => k.userDetails,
				d = (0, e.P1)("userDetails", i),
				s = k => {
					const L = d(k);
					return L && L["2FA-RECOVERY"] === "scheduled"
				},
				E = k => {
					const L = d(k);
					return L && L["2FA-RECOVERY"] === "interrupted"
				},
				f = k => {
					const L = d(k);
					return L == null ? void 0 : L["NEW-USER-EMAIL"]
				},
				S = k => k.gates.assignments,
				U = (k, L) => k && k[L];

			function M(k, L) {
				const te = S(k);
				return te ? U(te, L) : void 0
			}
			const x = (k, L) => M(k, L) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				$4: function() {
					return te
				},
				$t: function() {
					return $e
				},
				A4: function() {
					return f
				},
				Cu: function() {
					return S
				},
				DQ: function() {
					return ve
				},
				Ej: function() {
					return Q
				},
				FH: function() {
					return M
				},
				ID: function() {
					return b
				},
				Ko: function() {
					return Be
				},
				Le: function() {
					return De
				},
				Ly: function() {
					return ne
				},
				M3: function() {
					return et
				},
				N8: function() {
					return je
				},
				NY: function() {
					return ie
				},
				Ns: function() {
					return Z
				},
				Ox: function() {
					return re
				},
				P4: function() {
					return H
				},
				RO: function() {
					return P
				},
				SX: function() {
					return pe
				},
				Tr: function() {
					return Ce
				},
				U: function() {
					return U
				},
				Ug: function() {
					return k
				},
				V6: function() {
					return Ke
				},
				WR: function() {
					return le
				},
				Xg: function() {
					return E
				},
				ZB: function() {
					return we
				},
				cU: function() {
					return ze
				},
				cg: function() {
					return ge
				},
				d2: function() {
					return $
				},
				jN: function() {
					return G
				},
				jg: function() {
					return q
				},
				kC: function() {
					return X
				},
				kf: function() {
					return Ve
				},
				ko: function() {
					return z
				},
				mK: function() {
					return Xe
				},
				nA: function() {
					return s
				},
				oY: function() {
					return V
				},
				qM: function() {
					return F
				},
				rq: function() {
					return N
				},
				tS: function() {
					return L
				},
				tU: function() {
					return Y
				},
				vB: function() {
					return Ze
				},
				vM: function() {
					return j
				},
				wH: function() {
					return x
				},
				wn: function() {
					return Re
				},
				xU: function() {
					return C
				},
				xw: function() {
					return ce
				},
				z5: function() {
					return _
				},
				zO: function() {
					return Ue
				},
				zW: function() {
					return xe
				},
				zh: function() {
					return R
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				o = n("../react/app/redux/normalizer.js"),
				c = n("../../../../node_modules/lodash/get.js"),
				u = n.n(c),
				m = n("../../../../node_modules/moment/moment.js"),
				a = n.n(m),
				g = n("../react/common/constants/billing/index.ts");

			function p(A) {
				for (var B = 1; B < arguments.length; B++) {
					var oe = arguments[B] != null ? Object(arguments[B]) : {},
						be = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && be.push.apply(be, Object.getOwnPropertySymbols(oe).filter(function(Pe) {
						return Object.getOwnPropertyDescriptor(oe, Pe).enumerable
					})), be.forEach(function(Pe) {
						h(A, Pe, oe[Pe])
					})
				}
				return A
			}

			function h(A, B, oe) {
				return B = t(B), B in A ? Object.defineProperty(A, B, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[B] = oe, A
			}

			function t(A) {
				var B = r(A, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function r(A, B) {
				if (typeof A != "object" || A === null) return A;
				var oe = A[Symbol.toPrimitive];
				if (oe !== void 0) {
					var be = oe.call(A, B || "default");
					if (typeof be != "object") return be;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(A)
			}
			const i = (0, o.P1)("zone", A => A.zone),
				d = A => {
					var B;
					return (B = A.zoneVersioning) === null || B === void 0 ? void 0 : B.zoneVersionSelector
				},
				s = (0, e.P1)(i, d, (A, B) => {
					var oe, be, Pe;
					let Oe;
					if (Array.isArray(A) && A.length === 1 ? Oe = A[0] : A && !Array.isArray(A) && (Oe = A), !Oe) return;
					const Ie = !!(B == null ? void 0 : B.enabled);
					return p({}, Oe, Oe.name && {
						name: Ie ? B.rootZoneName : Oe.name
					}, {
						versioning: {
							enabled: Ie,
							isRoot: !((oe = Oe.name) === null || oe === void 0 ? void 0 : oe.endsWith(".config.cfdata.org")),
							version: Ie ? B.selectedVersion : 0,
							rootZoneId: Ie ? B.rootZoneId : (be = (Pe = Oe) === null || Pe === void 0 ? void 0 : Pe.id) !== null && be !== void 0 ? be : ""
						}
					})
				}),
				E = A => A.zone,
				f = (0, e.P1)(s, E, (A, B) => ({
					data: A,
					meta: B
				})),
				S = A => {
					var B, oe;
					return (B = (oe = s(A)) === null || oe === void 0 ? void 0 : oe.id) !== null && B !== void 0 ? B : ""
				},
				U = A => A.zones,
				M = A => A.zonesRoot,
				x = A => A.zonesAccount,
				k = (0, o.P1)("zones", U),
				L = (0, o.P1)("zonesRoot", M),
				te = (0, o.P1)("zonesAccount", x);

			function X(A) {
				const B = s(A);
				return B ? B.created_on : null
			}

			function Q(A, B, oe) {
				const be = X(A);
				if (!be) return;
				const Pe = a().duration(B, oe),
					Oe = new Date(be),
					Ie = new Date(new Date().getTime() - Pe.asMilliseconds());
				return Oe.getTime() > Ie.getTime()
			}

			function H(A) {
				const B = s(A);
				return B ? B.status : null
			}

			function V(A) {
				const B = s(A);
				return B ? B.type : null
			}

			function G(A) {
				return A.plan_pending ? A.plan_pending : A.plan
			}

			function j(A) {
				const B = s(A);
				if (!B) return;
				const oe = G(B);
				return oe && oe.legacy_id
			}

			function Y(A, B) {
				const oe = G(A);
				return !!oe && g.Gs.indexOf(oe.legacy_id) >= g.Gs.indexOf(B)
			}

			function C(A) {
				return !!A && A.status === "initializing"
			}

			function $(A) {
				return !!A && A.status === "pending"
			}

			function R(A) {
				return !!A && A.status === "active"
			}

			function ae(A, B) {
				if (!A) return !1;
				const oe = G(A);
				return !!oe && oe.legacy_id === B
			}

			function z(A) {
				return ae(A, "enterprise")
			}
			const P = A => z(s(A));

			function _(A) {
				return ae(A, "business")
			}
			const b = A => _(s(A));

			function I(A) {
				return ae(A, "pro")
			}

			function Z(A) {
				return ae(A, "free")
			}

			function ne(A) {
				return !z(A)
			}

			function D(A) {
				return A && A.owner
			}

			function q(A, B) {
				const oe = D(B);
				return !!oe && oe.type === "user" && oe.id === A.id
			}

			function N(A) {
				const B = s(A);
				return !!B && B.type === "partial"
			}

			function ie(A) {
				const B = s(A);
				return !!B && B.type === "secondary"
			}

			function pe(A) {
				const B = s(A);
				return B && N(A) && B.host
			}
			const ge = A => {
					var B;
					const oe = s(A);
					return !!(oe == null ? void 0 : oe.host) && !!((B = oe.plan) === null || B === void 0 ? void 0 : B.externally_managed)
				},
				ve = A => {
					const B = k(A);
					return B && B.some(z)
				},
				Re = (A, B) => {
					const oe = s(A);
					return oe && oe.betas ? oe.betas.includes(B) : !1
				},
				we = (A, ...B) => u()(A, ["zoneFlags", "data", ...B]),
				De = (A, ...B) => u()(A, ["accountFlags", "data", ...B]),
				F = A => A.accountFlags.isRequesting,
				ce = A => A.zoneFlags.isRequesting,
				Ce = (A, ...B) => u()(A, ["zoneFlagsChanges", "data", ...B]),
				Be = A => A.zoneFlagsChanges.isRequesting,
				ze = A => A.zoneFlags && A.zoneFlags.data,
				Ue = A => A.zoneFlags,
				He = (0, e.P1)(ze, Ue, (A, B) => ({
					data: A,
					meta: B
				})),
				je = (0, o.P1)("abuseUrls", A => A.overview.abuseUrls),
				et = A => {
					const B = s(A);
					return B ? `/${B.account.id}/${B.name}` : null
				},
				Ke = A => A.zoneMarketingCampaigns,
				Ve = A => A.overview.zoneBlocks.data,
				xe = A => A.overview.zoneBlocks.isRequesting,
				$e = A => A.overview.zoneBlocks.hasData,
				Xe = A => {
					var B, oe;
					return (A == null || (B = A.overview.zoneBlocks) === null || B === void 0 || (oe = B.paginationData) === null || oe === void 0 ? void 0 : oe.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				Ze = A => A.overview.zoneBlocksReview.isRequesting,
				re = A => A.overview.zoneHold,
				le = (0, o.P1)("zoneHold", re)
		},
		"../react/common/utils/formatDate.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			v.Z = (o, c, u = !1) => (0, e.p6)(o, c, u)
		},
		"../react/common/utils/isGuards.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Q$: function() {
					return c
				},
				t: function() {
					return a
				},
				v5: function() {
					return u
				},
				zE: function() {
					return m
				}
			});
			var e = n("../react/common/constants/index.ts"),
				o = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const c = g => g ? ["page", "per_page", "count", "total_count"].every(h => h in g && g[h]) : !1,
				u = (g = "") => e.Dy.includes(g.toLowerCase()),
				m = g => g !== null && typeof g == "object" && "name" in g && "size" in g && "type" in g && typeof g.slice == "function",
				a = g => (0, o.Z)(g)
		},
		"../react/common/validators/index.js": function(W, v, n) {
			"use strict";
			n.d(v, {
				K2: function() {
					return o
				},
				Lb: function() {
					return c
				},
				XI: function() {
					return u
				},
				jk: function() {
					return g
				},
				wb: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = p => /^https?:\/\/(.*)/.test(p),
				c = p => e.default.hostname.test(p),
				u = p => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(p),
				m = p => /^[!-~]+$/.test(p),
				a = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				g = p => a.test(p)
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Jz: function() {
					return h
				},
				OK: function() {
					return m
				},
				_Y: function() {
					return g
				},
				fD: function() {
					return r
				},
				h_: function() {
					return p
				},
				w6: function() {
					return i
				},
				yc: function() {
					return t
				}
			});

			function e(s) {
				for (var E = 1; E < arguments.length; E++) {
					var f = arguments[E] != null ? Object(arguments[E]) : {},
						S = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(f).filter(function(U) {
						return Object.getOwnPropertyDescriptor(f, U).enumerable
					})), S.forEach(function(U) {
						o(s, U, f[U])
					})
				}
				return s
			}

			function o(s, E, f) {
				return E = c(E), E in s ? Object.defineProperty(s, E, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[E] = f, s
			}

			function c(s) {
				var E = u(s, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function u(s, E) {
				if (typeof s != "object" || s === null) return s;
				var f = s[Symbol.toPrimitive];
				if (f !== void 0) {
					var S = f.call(s, E || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(s)
			}
			let m = function(s) {
					return s.Sending = "sending", s.Success = "success", s.Failed = "failed", s.Latent = "latent", s
				}({}),
				a = function(s) {
					return s[s.Success = 200] = "Success", s[s.BadRequest = 400] = "BadRequest", s
				}({});
			const g = {
					status: m.Latent,
					statusCode: void 0
				},
				p = {
					status: m.Sending
				},
				h = {
					status: m.Success,
					statusCode: a.Success
				},
				t = {
					status: m.Failed,
					statusCode: a.BadRequest
				},
				r = {
					token: null,
					zone: null,
					isTokenValid: !1,
					user: null
				},
				i = {
					appsList: e({
						value: []
					}, g),
					installsList: e({
						value: []
					}, g),
					categoriesList: e({
						value: []
					}, g),
					recommendedAppsList: e({
						value: []
					}, g),
					metadata: e({
						value: null
					}, g),
					app: e({
						value: null
					}, g),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, g)
				},
				d = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Ux: function() {
					return r
				},
				cz: function() {
					return d
				},
				im: function() {
					return g
				},
				pG: function() {
					return i
				},
				t$: function() {
					return s
				}
			});
			var e = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(f) {
				for (var S = 1; S < arguments.length; S++) {
					var U = arguments[S] != null ? Object(arguments[S]) : {},
						M = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(U).filter(function(x) {
						return Object.getOwnPropertyDescriptor(U, x).enumerable
					})), M.forEach(function(x) {
						c(f, x, U[x])
					})
				}
				return f
			}

			function c(f, S, U) {
				return S = u(S), S in f ? Object.defineProperty(f, S, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[S] = U, f
			}

			function u(f) {
				var S = m(f, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function m(f, S) {
				if (typeof f != "object" || f === null) return f;
				var U = f[Symbol.toPrimitive];
				if (U !== void 0) {
					var M = U.call(f, S || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(f)
			}
			const a = f => f.test(window.location.hostname),
				g = () => a(e.j9),
				p = () => a(MARKETPLACE_LOCAL_URL_REGEXP),
				h = (f, S) => {
					const U = random(0, 1) ? -1 : 1;
					return f.points === S.points || f.points >= APP_POINTS_THRESHOLD && S.points >= APP_POINTS_THRESHOLD ? U : f.points < 0 || S.points < 0 || f.points >= APP_POINTS_THRESHOLD || S.points >= APP_POINTS_THRESHOLD ? S.points - f.points : U
				},
				t = (f, S, U) => {
					const M = get(S, U),
						x = get(f, U);
					return M && !isEqual(M, x)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (f, S) => S.map(U => f.find(M => M.id === U)),
						addAppVersionInfo: (f, S) => o({}, S, {
							currentVersion: S.versions.find(U => U.tag === f.versionTag),
							latestVersion: S.versions.find(U => U.tag === S.infoVersion)
						}),
						addCurrentSiteInstall: (f, S) => o({}, S, {
							currentSiteInstall: f.find(U => U.appId === S.id)
						})
					}
				},
				i = (f, S, U) => o({}, f, S, U ? {
					value: U
				} : {}),
				d = f => f.map(S => S.status),
				s = f => f.apps ? f.apps : f,
				E = f => {
					let S = ["by-cloudflare"];
					return f.filter(U => !S.includes(U.id) && U.visible).sort((U, M) => U.points < M.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(W, v, n) {
			"use strict";
			n.r(v), n.d(v, {
				categorySlugTranslationKey: function() {
					return m
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return u
				},
				translations: function() {
					return c
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: c,
				namespace: u
			} = (0, e.x)("marketplace", {
				markets_metadata_label_popular: "Just show me the most popular apps",
				markets_metadata_label_blog: "Improve my blog or portfolio",
				markets_metadata_label_store: "Supercharge my online store",
				markets_metadata_label_marketing: "Improve my marketing and lead generation",
				nav_bar_explore_apps: "Explore Apps",
				nav_bar_installed_apps: "Your Installed Apps",
				nav_bar_developed_apps: "Your Developed Apps",
				common_card_button_show_all: "Show All",
				app_card_untitled_app: "Untitled App",
				app_card_installed_flag: "Installed",
				developer_footer_card_title: "developers",
				developer_footer_card_header: "Ship your code to 13 million sites.",
				developer_footer_card_body: "With Cloudflare Apps, getting your tool or service onto millions of sites has never been easier. Any Cloudflare user can preview & install your code on their site in seconds.",
				developer_footer_learn_more: "Learn more \u203A",
				recommended_apps_personalize_save: "Save",
				recommended_apps_personalize_customize: "Customize",
				recommended_apps_card_error_loading: "There was a problem loading popular apps.",
				angular_app_iframe_content: "Could not load content",
				home_page_errored: "There was an error!",
				home_page_apps_search_label: "Search Apps",
				home_page_categories_filter_label: "Filter Apps",
				home_page_categories_filter_options_all: "All",
				home_page_categories_filter_options_popular: "Popular",
				category_card_popular_title: "Popular<0> apps\u203A</0>",
				category_card_popular_subtitle: "Our most popular and highly rated apps.",
				home_page_categories_filter_options_ui_and_design: "UI & Design",
				home_page_categories_filter_options_widgets_and_plugins: "Widgets & Plugins",
				home_page_categories_filter_options_security: "Security",
				home_page_categories_filter_options_performance: "Performance",
				home_page_categories_filter_options_insights: "Insights",
				home_page_categories_filter_options_social_and_communication: "Social & Communication",
				category_card_ui_and_design_title: "UI & Design<0> apps\u203A</0>",
				category_card_ui_and_design_subtitle: "Apps that make your website more beautiful and user friendly.",
				category_card_widgets_and_plugins_title: "Widgets & Plugins<0> apps\u203A</0>",
				category_card_widgets_and_plugins_subtitle: "Apps that add functionality and services to your website.",
				category_card_security_title: "Security<0> apps\u203A</0>",
				category_card_security_subtitle: "Apps which make your site safer and protect you from threats.",
				category_card_insights_title: "Insights<0> apps\u203A</0>",
				category_card_insights_subtitle: "Apps that provide insight into your visitors.",
				category_card_performance_title: "Performance<0> apps\u203A</0>",
				category_card_performance_subtitle: "Improve the speed or perceived responsiveness of your website.",
				category_card_social_and_communication_title: "Social & Communication<0> apps\u203A</0>",
				category_card_social_and_communication_subtitle: "Apps that make it easier to communicate with your customers.",
				home_page_categories_filter_options_powr: "POWR",
				home_page_categories_filter_options_grow_your_email_list: "Grow Your Email List",
				home_page_categories_filter_options_make_money_on_your_site: "Make Money On Your Site",
				home_page_categories_filter_options_recommended_for_all_sites: "Recommended for All Sites",
				home_page_categories_filter_options_performance_and_security: "Performance & Security",
				home_page_categories_filter_options_recommended_for_stores: "Recommended For Stores",
				home_page_categories_filter_options_by_cloudflare: "Cloudflare Labs",
				home_page_categories_filter_options_get_more_customers: "Get More Customers",
				home_page_categories_filter_options_getting_started_apps: "Getting Started",
				home_page_categories_filter_options_recommended_for_marketing_sites: "Recommended for Marketing Sites",
				home_page_categories_filter_options_add_on: "Add-ons",
				home_page_categories_filter_options_communication: "Communication",
				home_page_categories_filter_options_humor: "Humor",
				home_page_categories_filter_options_design: "Design & Polish",
				home_page_categories_filter_options_for_developers: "For Developers",
				home_page_categories_filter_options_recommended_for_blogs: "Recommended for Blogs",
				home_page_categories_filter_options_marketing: "Marketing",
				home_page_categories_filter_options_social_media: "Social Media",
				home_page_categories_filter_options_e_commerce: "E-Commerce",
				home_page_categories_filter_options_analytics: "Analytics",
				category_card_recommended_all_sites_subtitle: "These apps are recommended for all site types.",
				category_card_powr_title: "POWR<0> apps\u203A</0>",
				category_card_powr_subtitle: "Apps created by POWR",
				category_card_grow_your_email_list_title: "Grow Your Email List<0> \u203A</0>",
				category_card_grow_your_email_list_subtitle: "Apps to help you grow your email subscribers.",
				category_card_make_money_on_your_site_title: "Make Money On Your Site<0> \u203A</0>",
				category_card_make_money_on_your_site_subtitle: "Apps to help you make money from your website.",
				category_card_recommended_for_all_sites_title: "Recommended for All Sites<0> \u203A</0>",
				category_card_recommended_for_all_sites_subtitle: "Apps that are recommended for all sites.",
				category_card_performance_and_security_title: "Performance & Security<0> apps\u203A</0>",
				category_card_performance_and_security_subtitle: "Apps that make your website faster and more secure.",
				category_card_recommended_for_stores_title: "Recommended For Stores<0> \u203A</0>",
				category_card_recommended_for_stores_subtitle: "Apps for stores in the recommendation engine.",
				category_card_by_cloudflare_title: "Cloudflare Labs<0> apps\u203A</0>",
				category_card_by_cloudflare_subtitle: "Apps made by Cloudflare.",
				category_card_get_more_customers_title: "Get More Customers<0> \u203A</0>",
				category_card_get_more_customers_subtitle: "Apps to help you grow your customer base.",
				category_card_getting_started_apps_title: "Getting Started<0> apps\u203A</0>",
				category_card_recommended_for_marketing_sites_title: "Recommended for Marketing Sites<0> \u203A</0>",
				category_card_recommended_for_marketing_sites_subtitle: "Apps for marketing sites in the recommendation engine.",
				category_card_add_on_title: "Add-ons<0> \u203A</0>",
				category_card_add_on_subtitle: "Drop-in components to add to your website.",
				category_card_communication_title: "Communication<0> apps\u203A</0>",
				category_card_communication_subtitle: "Communicate with and provide support to your website visitors.",
				category_card_humor_title: "Humor<0> apps\u203A</0>",
				category_card_humor_subtitle: "Apps that add fun widgets and Easter eggs to your site.",
				category_card_design_title: "Design & Polish<0> apps\u203A</0>",
				category_card_design_subtitle: "Improve the look & feel and ease-of-use of your website.",
				category_card_for_developers_title: "For Developers<0> \u203A</0>",
				category_card_for_developers_subtitle: "Apps made for web developers and designers.",
				category_card_recommended_for_blogs_title: "Recommended for Blogs<0> \u203A</0>",
				category_card_recommended_for_blogs_subtitle: "Apps for blogs in the recommendation engine.",
				category_card_marketing_title: "Marketing<0> apps\u203A</0>",
				category_card_marketing_subtitle: "Promote content, collect email addresses, and increase engagement.",
				category_card_social_media_title: "Social Media<0> apps\u203A</0>",
				category_card_social_media_subtitle: "Integrate your website with Twitter, Facebook, and other networks.",
				category_card_e_commerce_title: "E-Commerce<0> apps\u203A</0>",
				category_card_e_commerce_subtitle: "Tools to help your online business.",
				category_card_analytics_title: "Analytics<0> apps\u203A</0>",
				category_card_analytics_subtitle: "Collect and analyze data from your site visitors.",
				app_edit_install: "Edit Install",
				app_uninstall: "Uninstall",
				app_installed: "Installed",
				app_cancel: "Cancel",
				app_retry: "Retry",
				app_info_about: "About",
				app_info_no_description: "This app has no description.",
				app_info_no_description_link: "This app has no description.  <0>Add one here</0>.",
				app_info_try_on_your_site: "Try it out on your site now!",
				app_info_preview: "Preview",
				app_info_header_preview: "Preview on your site",
				app_info_starting_price: "Starting at %{appStartingPrice}",
				app_info_install_free: "Install for FREE",
				app_info_details: "Details",
				app_info_rating: "Rating",
				app_info_feedback_rating_error: "There was an error with your rating. Please try again and <0>contact us</0> if the issue persists.",
				app_info_installed_version: "%{appInstalledVersion} on %{appInstalledDate}",
				app_info_developer: "Developer",
				app_info_support_contact: "Support Contact",
				app_info_category: "Category",
				app_info_categories: "Categories",
				app_info_elsewhere: "Elsewhere",
				app_info_external_link_website: "Website \u203A",
				app_info_external_link_tos: "Terms of Service \u203A",
				app_info_external_link_privacy: "Privacy Policy \u203A",
				app_info_external_link_source: "Source Code \u203A",
				developed_app_card_configure: "Configure",
				developed_app_card_metrics: "Metrics",
				developed_app_card_status_approved: "Approved",
				developed_app_card_status_hidden: "Hidden",
				developed_app_card_status_draft: "Draft",
				developed_app_card_status_pending: "Awaiting approval...",
				installed_app_card_installed_date: "Installed %{appCreatedRelativeTime}",
				installed_app_card_leave_feedback: "Leave Feedback",
				installed_app_card_visit_vendor_site: "Visit vendor site",
				installed_app_card_visit_vendor: "Visit %{title}",
				installed_app_card_external_link: "External Link",
				installed_app_card_upgrade_version: "Upgrade version",
				installed_app_card_update: "Update",
				installed_app_card_default_release_notes: "Bugfixes and stability improvements.",
				installed_apps_group_title_all: "Installed on all pages",
				installed_apps_group_title_page: "Installed on <0>%{page}</0>",
				installed_apps_group_title_page_and_other: "Installed on <0>%{page}</0> and 1 other location",
				installed_apps_group_title_page_and_others: "Installed on <0>%{page}</0> and %{length} other locations",
				uninstall_confirm_all_sites: "Are you sure you want to uninstall %{title} from all sites?",
				uninstall_confirm_sites: "Are you sure you want to uninstall %{title} from the following sites and pages?",
				uninstall_error: "There was an error removing the app. Please try again later or <0>contact us</0> for assistance.",
				page_loading_error: "There was an error loading the page.",
				developed_apps_installed_toast: "Your developed apps can be fully installed and tested on any site managed by your Cloudflare account.",
				developed_apps_no_apps: "No apps were found.",
				developed_apps_create_app: "Create an App",
				developed_apps_banner_title: "Developers",
				developed_apps_banner_body: "To configure, manage, and monitor your developed apps, go to the Developer Dashboard.",
				developed_apps_banner_dashboard: "Developer Dashboard",
				installed_apps_heading: "Apps",
				installed_apps_update_toast: "You have 1 app with pending updates.",
				installed_apps_updates_toast: "You have %{length} apps with pending updates.",
				installed_apps_no_apps_installed_section: "No apps installed on <0>%{section}</0>.",
				installed_apps_no_apps_insatlled_site: "You haven't installed any apps on your site yet."
			});

			function m(a) {
				const g = a.replace(/-/g, "_");
				return Object.keys(o).includes(g) ? g : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				L: function() {
					return r
				}
			});
			var e = n("../../../../node_modules/lodash-es/defaults.js"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(i) {
				for (var d = 1; d < arguments.length; d++) {
					var s = arguments[d] != null ? Object(arguments[d]) : {},
						E = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(s).filter(function(f) {
						return Object.getOwnPropertyDescriptor(s, f).enumerable
					})), E.forEach(function(f) {
						a(i, f, s[f])
					})
				}
				return i
			}

			function u(i, d) {
				if (i == null) return {};
				var s = m(i, d),
					E, f;
				if (Object.getOwnPropertySymbols) {
					var S = Object.getOwnPropertySymbols(i);
					for (f = 0; f < S.length; f++) E = S[f], !(d.indexOf(E) >= 0) && (!Object.prototype.propertyIsEnumerable.call(i, E) || (s[E] = i[E]))
				}
				return s
			}

			function m(i, d) {
				if (i == null) return {};
				var s = {},
					E = Object.keys(i),
					f, S;
				for (S = 0; S < E.length; S++) f = E[S], !(d.indexOf(f) >= 0) && (s[f] = i[f]);
				return s
			}

			function a(i, d, s) {
				return d = g(d), d in i ? Object.defineProperty(i, d, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = s, i
			}

			function g(i) {
				var d = p(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function p(i, d) {
				if (typeof i != "object" || i === null) return i;
				var s = i[Symbol.toPrimitive];
				if (s !== void 0) {
					var E = s.call(i, d || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			const h = n("../../../../node_modules/url-join/lib/url-join.js");
			class t {
				constructor(d) {
					a(this, "token", void 0), a(this, "options", void 0), a(this, "setAuthHeader", s => {
						this.token = s
					}), this.token = "", this.options = (0, e.Z)(d, t.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(d = "GET", s, E = {}) {
					const {
						body: f
					} = E, S = u(E, ["body"]);
					return fetch(h(this.options.baseUrl, s), c({
						method: d
					}, S, f ? {
						body: JSON.stringify(f)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(c({
							Accept: "application/json, text/plain, */*"
						}, E.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(d, s = {}) {
					const E = await this.request("GET", d, s);
					return this.parseJSONResponse(E)
				}
				async postJSON(d, s = {}) {
					const E = await this.request("POST", d, c({}, s, {
						headers: c({}, s.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(E)
				}
				parseJSONResponse(d) {
					return d.json()
				}
			}
			a(t, "defaults", {
				baseUrl: (0, o.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const r = new t
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				JX: function() {
					return h
				},
				Jb: function() {
					return r
				},
				RX: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/lodash-es/upperFirst.js"),
				o = n("../../../../node_modules/lodash-es/isEmpty.js"),
				c = n("../../../../node_modules/query-string/query-string.js"),
				u = n.n(c),
				m = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				a = n("../react/pages/apps/marketplace/requests/Requester.ts"),
				g = n("../react/pages/apps/marketplace/libraries/resource.ts");

			function* p(s, E, f, S) {
				const U = (0, e.Z)(E),
					[M, x, k] = [`get${U}Sending`, `get${U}Success`, `get${U}Failed`];
				try {
					yield(0, m.gz)(s[M]());
					const L = yield(0, m.RE)(i, f);
					let te = L;
					if (te.error) {
						yield(0, m.gz)(s[k]());
						return
					}
					return S && (te = yield S(L)), yield(0, m.gz)(s[x](te)), te
				} catch {
					yield(0, m.gz)(s[k]())
				}
			}

			function* h(s, E, f, S) {
				const U = (0, e.Z)(E),
					M = `get${U}Sending`,
					x = `get${U}Success`,
					k = `get${U}Failed`;
				try {
					yield(0, m.gz)(s[M]());
					const L = yield(0, m.RE)(d, {
						url: f,
						data: S
					});
					return yield(0, m.gz)(s[x](L)), L
				} catch {
					yield(0, m.gz)(s[k]())
				}
			}
			const t = s => (0, o.Z)(s) ? "" : `?${c.stringify(s)}`,
				r = {
					app: new g.c({
						name: "app",
						url: (s, E) => `apps/${s}${t(E)}`
					}),
					apps: new g.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new g.c({
							name: "installs",
							url: s => `sites/${s}/installs`
						}),
						delete: new g.c({
							name: "installs",
							url: s => `installs/${s}`
						})
					},
					categories: new g.c({
						name: "categories",
						url: (s = {}) => "categories" + t(s)
					}),
					metadata: {
						get: new g.c({
							name: "metadata",
							url: s => `sites/${s}/metadata`
						}),
						post: new g.c({
							name: "metadata",
							url: s => `sites/${s}/metadata`
						})
					},
					ratings: {
						default: new g.c({
							name: "ratings",
							url: (s = {}) => "ratings" + t(s)
						}),
						delete: new g.c({
							name: "ratings",
							url: s => `ratings/${s}`
						})
					},
					recommendedApps: new g.c({
						name: "recommendedApps",
						url: (s = {}) => "apps/recommend" + t(s)
					}),
					developedApps: new g.c({
						name: "developedApps",
						url: s => `user/${s}/apps`
					})
				},
				i = async s => a.L.fetchJSON(s), d = async s => {
					const {
						url: E,
						data: f
					} = s;
					return a.L.postJSON(E, {
						body: f
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Nw: function() {
					return p
				},
				U4: function() {
					return g
				},
				XO: function() {
					return a
				},
				ZP: function() {
					return h
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function o(t) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						d = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(i).filter(function(s) {
						return Object.getOwnPropertyDescriptor(i, s).enumerable
					})), d.forEach(function(s) {
						c(t, s, i[s])
					})
				}
				return t
			}

			function c(t, r, i) {
				return r = u(r), r in t ? Object.defineProperty(t, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = i, t
			}

			function u(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var i = t[Symbol.toPrimitive];
				if (i !== void 0) {
					var d = i.call(t, r || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let a = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				g = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const p = {
				resetState: () => ({
					type: g.ResetState
				}),
				initSaga: t => ({
					type: g.InitSaga,
					zoneId: t
				}),
				setZone: t => ({
					type: g.SetZone,
					zone: t
				}),
				setToken: t => ({
					type: g.SetToken,
					token: t
				}),
				clearToken: () => ({
					type: g.ClearToken
				}),
				setTokenValid: t => ({
					type: g.SetTokenValid,
					isTokenValid: t
				}),
				getCurrentUserSaga: () => ({
					type: g.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: g.CurrentUserSending
				}),
				getCurrentUserSuccess: t => ({
					type: g.CurrentUserSuccess,
					user: t
				}),
				getCurrentUserFailed: () => ({
					type: g.CurrentUserFailed
				})
			};

			function h(t = e.fD, r) {
				switch (r.type) {
					case g.ResetState:
						return o({}, e.fD);
					case g.CurrentUserSending:
						return o({}, t);
					case g.CurrentUserSuccess:
						const {
							user: i
						} = r;
						return o({}, t, {
							user: i
						});
					case g.CurrentUserFailed:
						return o({}, t);
					case g.SetZone:
						const {
							zone: d
						} = r;
						return o({}, t, {
							zone: d
						});
					case g.SetToken:
						const {
							token: s
						} = r;
						return o({}, t, {
							token: s
						});
					case g.ClearToken:
						return o({}, t, {
							token: null
						});
					case g.SetTokenValid:
						const {
							isTokenValid: E
						} = r;
						return o({}, t, {
							isTokenValid: E
						});
					default:
						return t
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Nw: function() {
					return h
				},
				U4: function() {
					return p
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return g
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(r) {
				for (var i = 1; i < arguments.length; i++) {
					var d = arguments[i] != null ? Object(arguments[i]) : {},
						s = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && s.push.apply(s, Object.getOwnPropertySymbols(d).filter(function(E) {
						return Object.getOwnPropertyDescriptor(d, E).enumerable
					})), s.forEach(function(E) {
						u(r, E, d[E])
					})
				}
				return r
			}

			function u(r, i, d) {
				return i = m(i), i in r ? Object.defineProperty(r, i, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = d, r
			}

			function m(r) {
				var i = a(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function a(r, i) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var s = d.call(r, i || "default");
					if (typeof s != "object") return s;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			let g = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				p = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const h = {
				resetState: () => ({
					type: p.ResetState
				}),
				zoneChangedSaga: () => ({
					type: p.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (r, i) => ({
					type: p.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: i
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: p.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, i) => ({
					type: p.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: i
				}),
				getDevelopedAppsSending: () => ({
					type: p.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: r => ({
					type: p.GetDevelopedAppsSuccess,
					developedApps: r
				}),
				getDevelopedAppsFailed: () => ({
					type: p.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (r, i, d) => ({
					type: p.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: i,
					version: d
				}),
				setUpdatableInstalls: r => ({
					type: p.SetUpdatableInstalls,
					updatableInstallsList: r
				}),
				getAppSaga: r => ({
					type: p.GetAppSaga,
					appIdentifier: r
				}),
				getAppSending: () => ({
					type: p.GetAppSending
				}),
				getAppSuccess: r => ({
					type: p.GetAppSuccess,
					app: r
				}),
				getAppFailed: () => ({
					type: p.GetAppFailed
				}),
				clearApp: () => ({
					type: p.ClearApp
				}),
				getAppsSaga: () => ({
					type: p.GetAppsSaga
				}),
				getAppsSending: () => ({
					type: p.GetAppsSending
				}),
				getAppsSuccess: r => ({
					type: p.GetAppsSuccess,
					appsList: r
				}),
				getAppsFailed: () => ({
					type: p.GetAppsFailed
				}),
				getInstallsSaga: r => ({
					type: p.GetInstallsSaga,
					zoneId: r
				}),
				getInstallsSending: () => ({
					type: p.GetInstallsSending
				}),
				getInstallsSuccess: r => ({
					type: p.GetInstallsSuccess,
					installsList: r
				}),
				getInstallsFailed: () => ({
					type: p.GetInstallsFailed
				}),
				getCategoriesSaga: r => ({
					type: p.GetCategoriesSaga,
					queryParams: r
				}),
				getCategoriesSending: () => ({
					type: p.GetCategoriesSending
				}),
				getCategoriesSuccess: r => ({
					type: p.GetCategoriesSuccess,
					categoriesList: r
				}),
				getCategoriesFailed: () => ({
					type: p.GetCategoriesFailed
				}),
				getMetadataSaga: r => ({
					type: p.GetMetadataSaga,
					zoneId: r
				}),
				getMetadataSending: () => ({
					type: p.GetMetadataSending
				}),
				getMetadataSuccess: r => ({
					type: p.GetMetadataSuccess,
					metadata: r
				}),
				getMetadataFailed: () => ({
					type: p.GetMetadataFailed
				}),
				postMetadataSaga: (r, i) => ({
					type: p.PostMetadataSaga,
					zoneId: r,
					data: i
				}),
				postMetadataSending: () => ({
					type: p.PostMetadataSending
				}),
				postMetadataSuccess: r => ({
					type: p.PostMetadataSuccess,
					metadata: r
				}),
				postMetadataFailed: () => ({
					type: p.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (r, i, d) => ({
					type: p.GetRecommendedAppsSaga,
					appsList: r,
					installsList: i,
					metadata: d
				}),
				getRecommendedAppsSending: () => ({
					type: p.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: r => ({
					type: p.GetRecommendedAppsSuccess,
					recommendedAppsList: r
				}),
				getRecommendedAppsFailed: () => ({
					type: p.GetRecommendedAppsFailed
				})
			};

			function t(r = e.w6, i) {
				switch (i.type) {
					case p.ResetState:
						return c({}, e.w6);
					case p.ZoneChangedSaga:
						return c({}, r, {
							installsList: c({}, e.w6.installsList),
							recommendedAppsList: c({}, e.w6.recommendedAppsList),
							metadata: c({}, e.w6.metadata)
						});
					case p.GetAppsSending:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.h_))
						});
					case p.GetAppsSuccess:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.Jz, i.appsList))
						});
					case p.GetAppsFailed:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.yc))
						});
					case p.GetInstallsSending:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.h_))
						});
					case p.GetInstallsSuccess:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.Jz, i.installsList))
						});
					case p.GetInstallsFailed:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.yc))
						});
					case p.GetCategoriesSending:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case p.GetCategoriesSuccess:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.Jz, i.categoriesList))
						});
					case p.GetCategoriesFailed:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case p.GetMetadataSending:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.GetMetadataSuccess:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.Jz, i.metadata))
						});
					case p.GetMetadataFailed:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.PostMetadataSending:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.PostMetadataSuccess:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.Jz, i.metadata))
						});
					case p.PostMetadataFailed:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.GetRecommendedAppsSending:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case p.GetRecommendedAppsSuccess:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.Jz, i.recommendedAppsList))
						});
					case p.GetRecommendedAppsFailed:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case p.GetAppSending:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.h_))
						});
					case p.GetAppSuccess:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.Jz, i.app))
						});
					case p.GetAppFailed:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.yc))
						});
					case p.ClearApp:
						return c({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case p.SetUpdatableInstalls:
						return c({}, r, {
							updatableInstallsList: i.updatableInstallsList
						});
					case p.GetDevelopedAppsSending:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case p.GetDevelopedAppsSuccess:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.Jz, i.developedApps))
						});
					case p.GetDevelopedAppsFailed:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o
			}({})
		},
		"../react/pages/dns/dns-records/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				U: function() {
					return e
				},
				X: function() {
					return o
				}
			});
			let e = function(c) {
				return c.DNS_RECORD_CREATE = "create DNS records", c.DNS_RECORD_UPDATE = "update DNS records", c.DNS_RECORD_DELETE = "delete DNS records", c.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", c
			}({});
			const o = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				BB: function() {
					return o
				},
				Pm: function() {
					return c
				},
				UZ: function() {
					return e
				}
			});
			let e = function(m) {
				return m.ROOT = "root", m.DSTADDRS_CARD = "dstaddrs_card", m.RULES_CARD = "rules_card", m.CATCHALL_CARD = "catchall_card", m.SETTINGS_PAGE = "settings_page", m.WORKERS_PAGE = "workers_page", m
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
			let c = function(m) {
				return m[m.Verified = 0] = "Verified", m[m.Pending = 1] = "Pending", m[m.Missing = 2] = "Missing", m[m.WorkerNotFound = 3] = "WorkerNotFound", m[m.Unknown = 4] = "Unknown", m[m.Loading = 5] = "Loading", m
			}({});
			const u = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/analytics/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				AU: function() {
					return E
				},
				Bc: function() {
					return s
				},
				Bd: function() {
					return Y
				},
				Bt: function() {
					return i
				},
				Ji: function() {
					return H
				},
				LO: function() {
					return d
				},
				Pk: function() {
					return te
				},
				WB: function() {
					return j
				},
				Wd: function() {
					return G
				},
				Zj: function() {
					return M
				},
				e_: function() {
					return S
				},
				hk: function() {
					return Q
				},
				jY: function() {
					return L
				},
				kF: function() {
					return V
				},
				kg: function() {
					return X
				},
				oD: function() {
					return f
				},
				pP: function() {
					return k
				},
				q4: function() {
					return x
				},
				qC: function() {
					return U
				}
			});
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../../../common/component/component-filter-bar/src/index.js"),
				c = n("../../../../node_modules/@cloudflare/data-locations/es/index.js"),
				u = n("../../../../node_modules/@cloudflare/cf.util.patterns/index.js"),
				m = n.n(u),
				a = n("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				g = n("../react/common/constants/analytics/contentScanTypes.ts");

			function p(C) {
				for (var $ = 1; $ < arguments.length; $++) {
					var R = arguments[$] != null ? Object(arguments[$]) : {},
						ae = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(R).filter(function(z) {
						return Object.getOwnPropertyDescriptor(R, z).enumerable
					})), ae.forEach(function(z) {
						h(C, z, R[z])
					})
				}
				return C
			}

			function h(C, $, R) {
				return $ = t($), $ in C ? Object.defineProperty(C, $, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[$] = R, C
			}

			function t(C) {
				var $ = r(C, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function r(C, $) {
				if (typeof C != "object" || C === null) return C;
				var R = C[Symbol.toPrimitive];
				if (R !== void 0) {
					var ae = R.call(C, $ || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(C)
			}
			const i = {
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
					skip: "firewall.analytics.actions.labels.skip",
					force_connection_close: "firewall.analytics.actions.labels.force_connection_close"
				},
				d = {
					block: e.Rl.colors.categorical[0],
					allow: e.Rl.colors.categorical[1],
					challenge: e.Rl.colors.categorical[2],
					jschallenge: e.Rl.colors.categorical[3],
					log: e.Rl.colors.categorical[4],
					unknown: e.Rl.colors.categorical[5],
					connection_close: e.Rl.colors.categorical[6],
					bypass: e.Rl.colors.categorical[7],
					managed_challenge: e.Rl.colors.categorical[8],
					rewrite: e.Rl.colors.categorical[9],
					skip: e.Rl.colors.categorical[10],
					force_connection_close: e.Rl.colors.categorical[11]
				},
				s = {
					"Behavioral Analysis": "security_analytics.labels.bot_source.behavioral_analysis",
					Heuristics: "security_analytics.labels.bot_source.heuristics",
					"Machine Learning": "security_analytics.labels.bot_source.machine_learning",
					"Not Computed": "security_analytics.labels.bot_source.not_computed",
					"JS Fingerprinting": "security_analytics.labels.bot_source.js_fingerprinting",
					"Verified Bot": "security_analytics.labels.bot_source.verified_bot",
					"Cloudflare Service": "security_analytics.labels.bot_source.cloudflare_service"
				},
				E = {
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
				f = {
					[E.ASN]: e.Rl.colors.categorical[2],
					[E.COUNTRY]: e.Rl.colors.categorical[1],
					[E.IP]: e.Rl.colors.categorical[15],
					[E.IP_RANGE]: e.Rl.colors.categorical[15],
					[E.BOT_MANAGEMENT]: e.Rl.colors.categorical[14],
					[E.SECURITY_LEVEL]: e.Rl.colors.categorical[13],
					[E.ZONE_LOCKDOWN]: e.Rl.colors.categorical[12],
					[E.WAF]: e.Rl.colors.categorical[11],
					[E.FIREWALL_MANAGED]: e.Rl.colors.categorical[11],
					[E.UA_BLOCK]: e.Rl.colors.categorical[10],
					[E.RATE_LIMIT]: e.Rl.colors.categorical[9],
					[E.FIREWALL_RULES]: e.Rl.colors.categorical[8],
					[E.BIC]: e.Rl.colors.categorical[7],
					[E.HOT]: e.Rl.colors.categorical[6],
					[E.DLP]: e.Rl.colors.categorical[5],
					[E.L7DOS]: e.Rl.colors.categorical[4],
					[E.VALIDATION]: e.Rl.colors.categorical[3],
					[E.BOT_FIGHT_MODE]: e.Rl.colors.categorical[2],
					[E.API_SHIELD]: e.Rl.colors.categorical[1],
					[E.API_SHIELD_SCHEMA_VALIDATION]: e.Rl.colors.categorical[1],
					[E.API_SHIELD_TOKEN_VALIDATION]: e.Rl.colors.categorical[1],
					[E.FIREWALL_CUSTOM]: e.Rl.colors.categorical[0],
					[E.UNKNOWN]: e.Rl.colors.gray[5]
				},
				S = {
					[E.ASN]: "firewall.analytics.services.labels.asn",
					[E.COUNTRY]: "firewall.analytics.services.labels.country",
					[E.IP]: "firewall.analytics.services.labels.ip",
					[E.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[E.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[E.VALIDATION]: "firewall.analytics.services.labels.validation",
					[E.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[E.WAF]: "firewall.analytics.services.labels.waf",
					[E.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[E.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[E.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[E.BIC]: "firewall.analytics.services.labels.bic",
					[E.HOT]: "firewall.analytics.services.labels.hot",
					[E.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[E.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[E.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[E.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[E.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[E.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[E.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[E.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[E.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[E.DLP]: "firewall.analytics.services.labels.dlp",
					[E.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				},
				U = {
					action: {
						label: "firewall.analytics.filters.labels.action",
						type: o.kE.select,
						options: Object.keys(i).filter(C => !["challenge_solved", "challenge_failed", "challenge_bypassed", "jschallenge_solved", "jschallenge_failed", "jschallenge_bypassed", "unknown"].includes(C)),
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn]
					},
					botScore: {
						label: "firewall.analytics.filters.labels.botScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: C => parseInt(C, 10),
						validationMessage: "firewall.analytics.filters.errors.botScore",
						validate: C => {
							const $ = parseInt(C, 10);
							return $ >= 0 && $ <= 100
						},
						urlParam: "botScore"
					},
					botScoreSrcName: {
						label: "firewall.analytics.filters.labels.botScoreSrcName",
						type: o.kE.select,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						options: Object.keys(s),
						urlParam: "botScoreSrcName"
					},
					clientAsn: {
						label: "firewall.analytics.filters.labels.clientAsn",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: 13335,
						validationMessage: "firewall.analytics.filters.errors.asn",
						validate: C => !isNaN(parseFloat(C)) && isFinite(parseFloat(C)),
						urlParam: "asn"
					},
					clientCountryName: {
						label: "firewall.analytics.filters.labels.clientCountryName",
						type: o.kE.select,
						options: Object.keys(c.zY),
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						urlParam: "country"
					},
					clientIP: {
						label: "firewall.analytics.filters.labels.clientIP",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: "192.0.2.0",
						validationMessage: "firewall.analytics.filters.errors.ip",
						validate: C => !!C && !!C.length && (u.ipv4.test(C) || u.ipv6.test(C)),
						urlParam: "ip"
					},
					clientRequestHTTPHost: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPHost",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						example: "example.com",
						urlParam: "host"
					},
					clientRequestHTTPMethodName: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPMethodName",
						type: o.kE.select,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						options: ["GET", "POST", "PURGE", "PUT", "HEAD", "OPTIONS", "DELETE", "PATCH", "CONNECT", "TRACE"],
						urlParam: "http-method"
					},
					clientRequestHTTPProtocol: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPProtocol",
						type: o.kE.select,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						options: ["HTTP/1.0", "HTTP/1.1", "HTTP/1.2", "HTTP/2", "HTTP/3", "SPDY/3.1"],
						urlParam: "http-version"
					},
					contentScanObjResults: {
						label: "firewall.analytics.filters.labels.contentScanObjResults",
						type: o.kE.select,
						operators: [a.Gn.has, a.Gn.notHas, a.Gn.in, a.Gn.notIn],
						options: ["clean", "suspicious", "infected", "not scanned"],
						example: "clean",
						urlParam: "scanned-content-results"
					},
					contentScanObjTypes: {
						label: "firewall.analytics.filters.labels.contentScanObjTypes",
						type: o.kE.select,
						creatable: !0,
						options: Object.keys(g.L),
						operators: [a.Gn.has, a.Gn.notHas, a.Gn.in, a.Gn.notIn],
						example: "application/json",
						urlParam: "scanned-content-types"
					},
					contentScanObjSizes: {
						label: "firewall.analytics.filters.labels.contentScanObjSizes",
						type: o.kE.string,
						parse: C => parseInt(C, 10),
						operators: [a.Gn.has, a.Gn.notHas, a.Gn.in, a.Gn.notIn],
						example: "1000",
						urlParam: "scanned-content-sizes"
					},
					ja3Hash: {
						label: "firewall.analytics.filters.labels.ja3Hash",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: "df669e7ea913f1ac0c0cce9a201a2ec1",
						urlParam: "ja3-hash"
					},
					ja4: {
						label: "firewall.analytics.filters.labels.ja4",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: "t13d1516h2_8daaf6152771_b186095e22b6",
						urlParam: "ja4"
					},
					apiGatewayMatchedEndpoint: {
						label: "firewall.analytics.filters.labels.apiGatewayMatchedEndpoint",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						urlParam: "api-matched-endpoint",
						example: "/path/{var1}"
					},
					clientRequestPath: {
						label: "firewall.analytics.filters.labels.clientRequestPath",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						example: "/content",
						urlParam: "path"
					},
					clientRequestQuery: {
						label: "firewall.analytics.filters.labels.clientRequestQuery",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						example: "?example=1",
						urlParam: "query"
					},
					source: {
						label: "firewall.analytics.filters.labels.source",
						type: o.kE.select,
						options: Object.keys(S).filter(C => C !== "unknown"),
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						urlParam: "service"
					},
					rayName: {
						label: "firewall.analytics.filters.labels.rayName",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals],
						example: "1a79a4d60de6718e",
						urlParam: "ray-id",
						parse: C => C.replace(/-[A-Z]{3}$/, "")
					},
					ruleId: {
						label: "firewall.analytics.filters.labels.ruleId",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: 100001,
						urlParam: "rule-id"
					},
					rulesetId: {
						label: "firewall.analytics.filters.labels.rulesetId",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: "",
						urlParam: "ruleset-id"
					},
					userAgent: {
						label: "firewall.analytics.filters.labels.userAgent",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						example: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6)...",
						urlParam: "user-agent"
					},
					wafMlAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlAttackScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: C => parseInt(C, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: C => {
							const $ = parseInt(C, 10);
							return $ >= 0 && $ <= 100
						},
						urlParam: "waf-ml-score"
					},
					wafRceAttackScore: {
						label: "firewall.analytics.filters.labels.wafRceAttackScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: C => parseInt(C, 10),
						validationMessage: "firewall.analytics.filters.errors.wafRceAttackScore",
						validate: C => {
							const $ = parseInt(C, 10);
							return $ >= 0 && $ <= 100
						},
						urlParam: "waf-rce-score"
					},
					wafMlSqliAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlSqliAttackScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: C => parseInt(C, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: C => {
							const $ = parseInt(C, 10);
							return $ >= 0 && $ <= 100
						},
						urlParam: "waf-ml-sqli-score"
					},
					wafMlXssAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlXssAttackScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: C => parseInt(C, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: C => {
							const $ = parseInt(C, 10);
							return $ >= 0 && $ <= 100
						},
						urlParam: "waf-ml-xss-score"
					},
					wafAttackScoreClass: {
						label: "firewall.analytics.filters.labels.wafAttackScoreClass",
						type: o.kE.select,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						options: ["attack", "likely_attack", "likely_clean", "clean", "not_scored"],
						example: "Attack",
						urlParam: "waf-ml-score-class"
					},
					zoneVersion: {
						label: "firewall.analytics.filters.labels.zoneVersion",
						type: o.kE.string,
						example: 3,
						operators: [a.Gn.equals, a.Gn.notEquals],
						parse: C => parseInt(C, 10),
						validationMessage: "firewall.analytics.filters.errors.zoneVersion",
						validate: C => parseInt(C) >= 0,
						urlParam: "zone-version"
					},
					zoneTag: {
						label: "firewall.analytics.filters.labels.zoneTag",
						type: o.kE.string,
						example: "c40df159b74f0e1c0deedf29008ffc04",
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						urlParam: "zone-id"
					}
				},
				M = (C, $, R, ae, z, P, _) => {
					const b = p({}, U);
					return C || (delete b.botScore, delete b.botScoreSrcName), $ || (delete b.ja3Hash, delete b.ja4, delete b.ja4Signals), R || (delete b.wafMlAttackScore, delete b.wafMlSqliAttackScore, delete b.wafMlXssAttackScore, delete b.wafRceAttackScore), P || delete b.wafAttackScoreClass, ae || delete b.zoneVersion, z || delete b.apiGatewayMatchedEndpoint, _ || delete b.zoneTag, b
				},
				x = {
					ADD_FILTER: "Add filter",
					EDIT_FILTER: "Edit filter",
					REMOVE_FILTER: "Remove filter",
					CHANGE_TIME: "Change time window",
					FEED_PAGE_FORWARD: "Activity feed next page",
					FEED_PAGE_BACKWARD: "Activity feed previous page",
					FEED_EXPAND_EVENT: "Activity feed expand event",
					FEED_CLOSE_EVENT: "Activity feed close event",
					FEED_EXPAND_MATCHES: "Activity feed expand matches",
					OPEN_DOWNLOAD_MODAL: "Activity feed open download modal",
					CANCEL_DOWNLOAD_MODAL: "Activity feed cancel download modal",
					DOWNLOAD_FROM_DOWNLOAD_MODAL: "Activity feed download from modal",
					DOWNLOAD_FEED: "Activity feed download"
				},
				k = {
					TIMESERIES: "Timeseries Chart",
					DISTRIBUTION: "Source Distribution Chart",
					TOP_N: "Top N",
					FILTER_BAR: "Filter Bar"
				},
				L = "firewall-analytics",
				te = "encrypted_matched_data",
				X = {
					botScore: "cf.bot_management.score",
					clientAsn: "ip.geoip.asnum",
					clientCountryName: "ip.geoip.country",
					clientIP: "ip.src",
					clientRequestHTTPHost: "http.host",
					clientRequestHTTPMethodName: "http.request.method",
					clientRequestHTTPProtocol: "http.request.version",
					clientRequestPath: "http.request.uri.path",
					clientRequestQuery: "http.request.uri.query",
					ja3Hash: "cf.bot_management.ja3_hash",
					ja4: "cf.bot_management.ja4",
					userAgent: "http.user_agent",
					wafMlAttackScore: "cf.waf.score",
					wafAttackScore: "cf.waf.score",
					wafRceAttackScore: "cf.waf.score.rce",
					wafMlSqliAttackScore: "cf.waf.score.sqli",
					wafSqliAttackScore: "cf.waf.score.sqli",
					wafMlXssAttackScore: "cf.waf.score.xss",
					wafXssAttackScore: "cf.waf.score.xss"
				},
				Q = {
					ARGS_GET_NAMES: "http.request.uri.args.names",
					ARGS_GET: "http.request.uri.args",
					ARGS_JSON: "http.request.body.raw",
					ARGS_NAMES: "http.request.uri.args.names or http.request.body.raw",
					ARGS_POST: "http.request.body.raw",
					ARGS: "http.request.uri.args or http.request.body.raw",
					FILES: "Matched a body multipart file",
					QUERY_STRING: "http.request.uri.query",
					REMOTE_ADDR: "ip.src",
					REMOTE_ASN: "ip.geoip.asnum",
					REMOTE_COUNTRY: "ip.geoip.country",
					REQUEST_BODY: "http.request.body.raw",
					REQUEST_FILENAME: "http.request.uri.path",
					REQUEST_HEADERS_NAMES: "http.request.headers.names",
					"REQUEST_HEADERS:HOST": "http.host",
					"REQUEST_HEADERS:REFERER": "http.referer",
					"REQUEST_HEADERS:USER-AGENT": "http.user_agent",
					REQUEST_HEADERS: "http.request.headers",
					REQUEST_LINE: "http.request.method or http.request.uri",
					REQUEST_METHOD: "http.request.method",
					REQUEST_PROTOCOL: "http.request.version",
					REQUEST_URI: "http.request.uri",
					SERVER_PORT: "cf.edge.server_port"
				},
				H = {
					REQUEST_HEADERS_NAMES: "firewall.activity_log.matched_data.request_headers_names",
					FILES: "firewall.activity_log.matched_data.files",
					ARGS: "firewall.activity_log.matched_data.args",
					ARGS_POST_NAMES: "firewall.activity_log.matched_data.args_post_names",
					ARGS_GET_NAMES: "firewall.activity_log.matched_data.args_get_names",
					ARGS_GET: "firewall.activity_log.matched_data.args_get",
					REQUEST_HEADERS: "firewall.activity_log.matched_data.request_headers"
				},
				V = ["REQUEST_HEADERS:HOST", "REQUEST_HEADERS:REFERER", "REQUEST_HEADERS:USER-AGENT"],
				G = {
					OR: [{
						ruleId_like: "999___"
					}, {
						ruleId_like: "900___"
					}, {
						ruleId: "981176"
					}, {
						AND: [{
							ruleId_notlike: "9_____"
						}, {
							ruleId_notlike: "uri-9_____"
						}]
					}]
				},
				j = "13335",
				Y = "https://developers.cloudflare.com/ddos-protection/best-practices/respond-to-ddos-attacks/"
		},
		"../react/pages/firewall/api-shield/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Fj: function() {
					return p
				},
				kq: function() {
					return g
				},
				xr: function() {
					return h
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(t) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						d = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(i).filter(function(s) {
						return Object.getOwnPropertyDescriptor(i, s).enumerable
					})), d.forEach(function(s) {
						u(t, s, i[s])
					})
				}
				return t
			}

			function u(t, r, i) {
				return r = m(r), r in t ? Object.defineProperty(t, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = i, t
			}

			function m(t) {
				var r = a(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function a(t, r) {
				if (typeof t != "object" || t === null) return t;
				var i = t[Symbol.toPrimitive];
				if (i !== void 0) {
					var d = i.call(t, r || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let g = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.SEQUENCE_RULES = "Sequence Rules", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
			}({});
			const p = {
					[g.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[g.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[g.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[g.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[g.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[g.JWT_VALIDATION]: {
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
					[g.SETTINGS]: {
						redirectToFirewallRulesTemplate: "redirect to firewall rules",
						redirectToPages: "redirect to uploaded developer portal on pages",
						listSessionIdentifiers: "list session identifiers",
						listRequestsContainingSessionIdentifiers: "list requests containing session identifiers",
						addOrRemoveSessionIdentifiers: "add or remove session identifiers"
					}
				},
				h = ({
					name: t,
					category: r = "user journey",
					product: i = g.MAIN,
					productName: d,
					additionalData: s
				}) => {
					o().sendEvent(t, c({
						category: r,
						product: i,
						productName: d
					}, s || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				N3: function() {
					return e
				},
				UN: function() {
					return c
				},
				h1: function() {
					return o
				}
			});
			let e = function(u) {
					return u.INITIAL_FETCH_SCORES = "view bots scores distribution", u.FETCH_CONFIGURATION = "view bots configuration page", u.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", u.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", u.UPDATE_SETTINGS = "update bots settings", u.DELETE_RULE = "delete bots ruleset", u.UPDATE_RULE = "update bots ruleset", u.FETCH_RULES = "view bots ruleset", u.CONFIGURE_BOT_MANAGEMENT = "view bots management", u.WAF_RULES_REDIRECT = "redirect waf rules", u
				}({}),
				o = function(u) {
					return u.PROVIDED_TEMPLATE = "provided template link in detection card", u.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", u.USE_TEMPLATE = "use template", u.CREATE_FIREWALL_RULE = "create firewall rule", u.WAF_RULES = "waf rules", u
				}({});
			const c = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				F: function() {
					return e
				}
			});
			const e = {
				CONFIGURE_PAGE_SHIELD: "configure page shield",
				VIEW_PAGE_SHIELD_SETTINGS: "view page shield settings",
				VIEW_DETECTED_SCRIPTS: "view detected scripts",
				VIEW_DETECTED_CONNECTIONS: "view detected connections",
				VIEW_DETECTED_COOKIES: "view detected cookies",
				MANAGE_PAGE_SHIELD_POLICY: "manage page shield policy",
				VIEW_PAGE_SHIELD_POLICIES: "view page shield policies"
			}
		},
		"../react/pages/firewall/rulesets/tracking.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				QK: function() {
					return e
				},
				dy: function() {
					return o
				},
				sO: function() {
					return c
				},
				x4: function() {
					return u
				}
			});
			let e = function(m) {
				return m.DELETE = "delete", m.CREATE = "create", m.GET = "get", m.UPDATE = "update", m
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
					http_ratelimit: "rate limiting",
					http_request_firewall_custom: "custom",
					http_request_firewall_managed: "managed"
				},
				c = (m, a) => {
					var g;
					return `${a} ${(g=o[m])!==null&&g!==void 0?g:m} rule${a===e.GET?"s":""}`
				},
				u = () => {
					var m, a;
					return (m = Object.keys(o)) === null || m === void 0 || (a = m.map(g => {
						var p;
						return (p = Object.values(e)) === null || p === void 0 ? void 0 : p.map(h => c(g, h))
					})) === null || a === void 0 ? void 0 : a.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				AS: function() {
					return m
				},
				Gf: function() {
					return t
				},
				IK: function() {
					return r
				},
				Ki: function() {
					return o
				},
				Lz: function() {
					return i
				},
				nT: function() {
					return g
				},
				o4: function() {
					return d
				},
				oY: function() {
					return c
				},
				qH: function() {
					return h
				},
				x3: function() {
					return a
				}
			});
			var e = n("../react/pages/firewall/analytics/constants.ts");
			const o = ["block", "challenge", "jschallenge", "managedChallenge"],
				c = ["miss", "expired", "bypass", "dynamic"],
				u = s => Object.fromEntries(Object.entries(s).map(([E, f]) => [f, E])),
				m = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				a = u(m),
				g = {
					asn: e.AU.ASN,
					country: e.AU.COUNTRY,
					ip: e.AU.IP,
					ipRange: e.AU.IP_RANGE,
					securityLevel: e.AU.SECURITY_LEVEL,
					validation: e.AU.VALIDATION,
					zoneLockdown: e.AU.ZONE_LOCKDOWN,
					waf: e.AU.WAF,
					rateLimit: e.AU.RATE_LIMIT,
					firewallRules: e.AU.FIREWALL_RULES,
					bic: e.AU.BIC,
					hot: e.AU.HOT,
					unknown: e.AU.UNKNOWN,
					l7ddos: e.AU.L7DOS,
					botFight: e.AU.BOT_FIGHT_MODE,
					apiShield: e.AU.API_SHIELD,
					apiShieldSchemaValidation: e.AU.API_SHIELD_SCHEMA_VALIDATION,
					apiShieldTokenValidation: e.AU.API_SHIELD_TOKEN_VALIDATION,
					firewallCustom: e.AU.FIREWALL_CUSTOM,
					firewallManaged: e.AU.FIREWALL_MANAGED,
					dlp: e.AU.DLP,
					botManagement: e.AU.BOT_MANAGEMENT,
					uaBlock: e.AU.UA_BLOCK
				},
				p = u(g),
				h = {
					"Not Computed": "not_computed",
					"Machine Learning": "machine_learning",
					Heuristics: "heuristics",
					"Behavioral Analysis": "behavioral_analysis",
					"JS Fingerprinting": "js_fingerprinting",
					"Verified Bot": "verified_bot",
					"Cloudflare Service": "cloudflare_service"
				},
				t = u(h);
			let r = function(s) {
				return s.SAMPLED = "sampled", s.RAW = "raw", s
			}({});
			const i = "security-analytics-log-explorer";
			let d = function(s) {
				return s.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', s.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', s.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', s.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', s.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', s
			}({})
		},
		"../react/pages/home/alerts/config.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				jk: function() {
					return S
				},
				w8: function() {
					return U
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				c = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				u = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function m(M) {
				for (var x = 1; x < arguments.length; x++) {
					var k = arguments[x] != null ? Object(arguments[x]) : {},
						L = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(k).filter(function(te) {
						return Object.getOwnPropertyDescriptor(k, te).enumerable
					})), L.forEach(function(te) {
						a(M, te, k[te])
					})
				}
				return M
			}

			function a(M, x, k) {
				return x = g(x), x in M ? Object.defineProperty(M, x, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[x] = k, M
			}

			function g(M) {
				var x = p(M, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function p(M, x) {
				if (typeof M != "object" || M === null) return M;
				var k = M[Symbol.toPrimitive];
				if (k !== void 0) {
					var L = k.call(M, x || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(M)
			}
			const h = "Notifications",
				t = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				i = (0, e.BC)`${r}/notifications`,
				d = (0, e.BC)`${i}/destinations`,
				s = (0, e.BC)`${i}/create`,
				E = (0, e.BC)`${s}/${"alertType"}`,
				f = (0, e.BC)`${i}/edit/${"alertId"}`,
				S = m({
					account: r,
					alerts: i,
					destinations: d,
					createAlert: s,
					createAlertWithSelection: E,
					editAlert: f
				}, o._j, c._j),
				U = m({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, u.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				_j: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				c = (0, e.BC)`${o}/pagerduty/connect`,
				u = (0, e.BC)`${o}/pagerduty/register`,
				m = (0, e.BC)`${o}/pagerduty`,
				a = {
					pagerDutyConnect: c,
					pagerDutyRegister: u,
					pagerDutyList: m
				};
			var g = null
		},
		"../react/pages/home/alerts/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_LIST = "create list", o.DELETE_LIST = "delete list", o.ADD_LIST_ITEM = "add list item", o.DELETE_LIST_ITEM = "delete list item", o
			}({})
		},
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				AA: function() {
					return ge
				},
				AN: function() {
					return Te
				},
				AY: function() {
					return st
				},
				Am: function() {
					return M
				},
				B2: function() {
					return I
				},
				BB: function() {
					return H
				},
				BF: function() {
					return Oe
				},
				BQ: function() {
					return he
				},
				E8: function() {
					return nt
				},
				Fl: function() {
					return Ot
				},
				Fu: function() {
					return j
				},
				G_: function() {
					return S
				},
				Gc: function() {
					return it
				},
				Hc: function() {
					return Wt
				},
				IO: function() {
					return Me
				},
				JK: function() {
					return je
				},
				K: function() {
					return te
				},
				LI: function() {
					return me
				},
				LX: function() {
					return be
				},
				L_: function() {
					return xe
				},
				Ly: function() {
					return It
				},
				MR: function() {
					return ne
				},
				Mj: function() {
					return q
				},
				NB: function() {
					return Lt
				},
				Or: function() {
					return ie
				},
				P5: function() {
					return xt
				},
				PE: function() {
					return Ce
				},
				Pd: function() {
					return $t
				},
				Pk: function() {
					return ze
				},
				Pp: function() {
					return Ze
				},
				Q1: function() {
					return G
				},
				Qr: function() {
					return Pe
				},
				Qv: function() {
					return Be
				},
				Rp: function() {
					return Fe
				},
				Sh: function() {
					return Ft
				},
				TZ: function() {
					return pe
				},
				Tg: function() {
					return et
				},
				Tp: function() {
					return at
				},
				Uy: function() {
					return wt
				},
				Vw: function() {
					return C
				},
				W3: function() {
					return A
				},
				WR: function() {
					return Je
				},
				WX: function() {
					return we
				},
				XF: function() {
					return Bt
				},
				Xc: function() {
					return ke
				},
				ZB: function() {
					return V
				},
				Zs: function() {
					return Ve
				},
				_f: function() {
					return Ie
				},
				_k: function() {
					return Ae
				},
				b4: function() {
					return Re
				},
				c2: function() {
					return Z
				},
				cE: function() {
					return jt
				},
				dh: function() {
					return Xe
				},
				fE: function() {
					return $e
				},
				g7: function() {
					return ce
				},
				hO: function() {
					return le
				},
				hV: function() {
					return Gt
				},
				hk: function() {
					return x
				},
				hr: function() {
					return ve
				},
				it: function() {
					return re
				},
				jG: function() {
					return fe
				},
				jN: function() {
					return He
				},
				m8: function() {
					return P
				},
				nm: function() {
					return Ut
				},
				oW: function() {
					return St
				},
				oc: function() {
					return U
				},
				pH: function() {
					return _
				},
				pi: function() {
					return z
				},
				rI: function() {
					return D
				},
				s7: function() {
					return w
				},
				sO: function() {
					return Ge
				},
				sg: function() {
					return ot
				},
				tB: function() {
					return f
				},
				tN: function() {
					return F
				},
				vV: function() {
					return Se
				},
				vc: function() {
					return Ue
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				o = n.n(e),
				c = n("../../../../node_modules/moment/moment.js"),
				u = n.n(c),
				m = n("../../../common/util/types/src/api/domain.ts"),
				a = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				g = n("../react/utils/translator.tsx"),
				p = n("../react/utils/url.ts"),
				h = n("../react/pages/home/domain-registration/config.ts"),
				t = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = n("../react/pages/home/domain-registration/types.ts");

			function i(l) {
				for (var T = 1; T < arguments.length; T++) {
					var se = arguments[T] != null ? Object(arguments[T]) : {},
						ye = Object.keys(se);
					typeof Object.getOwnPropertySymbols == "function" && ye.push.apply(ye, Object.getOwnPropertySymbols(se).filter(function(Le) {
						return Object.getOwnPropertyDescriptor(se, Le).enumerable
					})), ye.forEach(function(Le) {
						d(l, Le, se[Le])
					})
				}
				return l
			}

			function d(l, T, se) {
				return T = s(T), T in l ? Object.defineProperty(l, T, {
					value: se,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[T] = se, l
			}

			function s(l) {
				var T = E(l, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function E(l, T) {
				if (typeof l != "object" || l === null) return l;
				var se = l[Symbol.toPrimitive];
				if (se !== void 0) {
					var ye = se.call(l, T || "default");
					if (typeof ye != "object") return ye;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(l)
			}

			function f(l) {
				return l.filter(T => T.isSelected).reduce((T, {
					transferFee: se,
					isZoneEntitlementPresent: ye
				}) => ye ? T : T + se, 0)
			}

			function S(l) {
				return (l / 100).toLocaleString("en-US", {
					style: "currency",
					currency: "USD"
				})
			}

			function U(l) {
				return l.filter(T => T.registrar.toLowerCase() === "godaddy")
			}
			const M = "MMM D, YYYY";

			function x(l, T, se, ye) {
				var Le, Ye, Dt, ct, lt, Rt, gt, We, mt, ut, dt, ft, Et, yt, _t, vt, ht, Ct, Tt, bt, kt;
				const zt = (((Le = T.fees) === null || Le === void 0 ? void 0 : Le.registration_fee) !== r.Xp && ((Ye = T.fees) === null || Ye === void 0 ? void 0 : Ye.registration_fee) || 0) * 100,
					Ht = (((Dt = T.fees) === null || Dt === void 0 ? void 0 : Dt.transfer_fee) !== r.Xp && ((ct = T.fees) === null || ct === void 0 ? void 0 : ct.transfer_fee) || 0) * 100,
					Kt = (((lt = T.fees) === null || lt === void 0 ? void 0 : lt.registration_fee) !== r.Xp && ((Rt = T.fees) === null || Rt === void 0 ? void 0 : Rt.registration_fee) || 0) * 100,
					Mt = (((gt = T.fees) === null || gt === void 0 ? void 0 : gt.renewal_fee) !== r.Xp && ((We = T.fees) === null || We === void 0 ? void 0 : We.renewal_fee) || 0) * 100,
					Vt = (((mt = T.fees) === null || mt === void 0 ? void 0 : mt.redemption_fee) !== r.Xp && ((ut = T.fees) === null || ut === void 0 ? void 0 : ut.redemption_fee) || 0) * 100,
					Ne = l[T.name];
				return {
					name: T.name,
					zone: Ne,
					entitlements: se,
					registryCheck: ye,
					nameservers: T.name_servers,
					isAvailable: T.available,
					lastKnownStatus: T.last_known_status,
					authCode: T.auth_code,
					isEnterpriseZone: (Ne == null || (dt = Ne.plan) === null || dt === void 0 ? void 0 : dt.legacy_id) === "enterprise",
					isActiveZone: (Ne == null ? void 0 : Ne.status) === "active",
					corResponsesPending: T.cor_responses_pending,
					isCorLocked: T.cor_locked,
					corLockedUntil: T.cor_locked_until ? u()(T.cor_locked_until).format(M) : null,
					isFullZone: (Ne == null ? void 0 : Ne.type) == r.xd.Full,
					isLocked: T.locked,
					registrar: T.current_registrar || h.JM,
					zoneId: Ne == null ? void 0 : Ne.id,
					currentExpiration: u()(T.expires_at).format(M),
					newExpiration: u()(T.expires_at).add(1, "year").format(M),
					wholesaleCost: zt,
					transferFee: Ht,
					registrationFee: Kt,
					renewalFee: Mt,
					redemptionFee: Vt,
					lastEntitledAt: T.last_entitled_at ? new Date(T.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(se) && !!se.find(Nt => Nt.id === h.g5 && Nt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: T.transfer_in && L(T.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: T.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: T.transfer_in,
					transferOut: T.transfer_out,
					autoRenew: T.auto_renew === !0,
					lastTransferredAt: T.last_transferred_at,
					createdAt: T.created_at,
					paymentExpiresAt: u()(T.payment_expires_at).isValid() ? u()(T.payment_expires_at) : u()(T.expires_at).isValid() ? u()(T.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (ft = T.contacts) === null || ft === void 0 || (Et = ft.administrator) === null || Et === void 0 ? void 0 : Et.id,
						[r.l2.Billing]: (yt = T.contacts) === null || yt === void 0 || (_t = yt.billing) === null || _t === void 0 ? void 0 : _t.id,
						[r.l2.Registrant]: (vt = T.contacts) === null || vt === void 0 || (ht = vt.registrant) === null || ht === void 0 ? void 0 : ht.id,
						[r.l2.Technical]: (Ct = T.contacts) === null || Ct === void 0 || (Tt = Ct.technical) === null || Tt === void 0 ? void 0 : Tt.id
					},
					landing: T.landing,
					whois: T.whois,
					emailVerified: T.email_verified,
					materialChanges: X(T.material_changes),
					corChanges: T.cor_changes ? H(Object.assign(i({}, k), T.cor_changes)) : {},
					registryStatuses: T.registry_statuses ? T.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (bt = T.domain_protection_services) === null || bt === void 0 ? void 0 : bt.status
					},
					deletion: {
						isDeletable: T == null || (kt = T.deletion) === null || kt === void 0 ? void 0 : kt.is_deletable
					},
					premiumType: T == null ? void 0 : T.premiumType,
					fees: T == null ? void 0 : T.fees
				}
			}
			const k = {
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

			function L(l) {
				switch (l.enter_auth_code) {
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

			function te(l) {
				let T = l.extensions;
				(T == null ? void 0 : T.application_purpose) && (T == null ? void 0 : T.nexus_category) && (l.extensions = {
					nexusCategory: T.nexus_category,
					applicationPurpose: T.application_purpose
				});
				let se = i({}, typeof l.id == "string" ? {
					id: l.id
				} : {}, {
					first_name: l.firstName,
					organization: l.organization,
					address: l.address1,
					city: l.city,
					state: l.state || "N/A",
					zip: l.zip,
					country: l.country,
					phone: l.phone,
					email: l.email,
					fax: "",
					last_name: l.lastName,
					address2: l.address2,
					email_verified: l.emailVerified
				}, l.extensions ? {
					extensions: {
						nexus_category: l.extensions.nexusCategory,
						application_purpose: l.extensions.applicationPurpose
					}
				} : {});
				return Ke(se)
			}

			function X(l) {
				let T = [];
				const se = {
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
				for (const ye in l) {
					const Le = l[ye],
						Ye = se[Le];
					T.push(Ye)
				}
				return T
			}
			const Q = l => {
				if (!l) return null;
				let T = l;
				return l.includes("C31") && (T = "C31"), l.includes("C32") && (T = "C32"), T
			};

			function H(l) {
				return i({}, typeof l.id == "string" ? {
					id: l.id
				} : {}, {
					firstName: l.first_name,
					organization: l.organization,
					address1: l.address,
					city: l.city,
					state: l.state,
					zip: l.zip,
					country: l.country,
					phone: l.phone.trim(),
					email: l.email.trim(),
					lastName: l.last_name,
					address2: l.address2,
					emailVerified: l.email_verified
				}, l.extensions ? {
					extensions: {
						nexusCategory: Q(l.extensions.nexus_category),
						applicationPurpose: l.extensions.application_purpose
					}
				} : {})
			}

			function V(l = {}) {
				const T = {
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
						}, l.zone && l.zone.plan || {}),
						type: r.xd.Full
					}, l.zone || {}),
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
					wholesaleCost: 8.79,
					transferFee: 8.79,
					registrationFee: 8.79,
					renewalFee: 10.76,
					redemptionFee: 10.76,
					lastEntitledAt: null,
					isZoneEntitlementPresent: null,
					registrar: "",
					autoTransferStatus: r._n.Pending,
					transferAuthCode: "",
					authCodeStatus: r.BJ.Pending,
					transferApiCallStatus: r.Yh.Pending,
					transferConditions: i({
						exists: !0,
						supported_tld: !0,
						not_secure: !0,
						not_waiting: !0,
						not_started: !0,
						not_premium: !0
					}, l.transferConditions || {}),
					transferIn: i({
						unlock_domain: r.lW.UNKNOWN,
						disable_privacy: r.lW.UNKNOWN,
						enter_auth_code: r.lW.UNKNOWN,
						approve_transfer: r.lW.UNKNOWN,
						accept_foa: r.lW.UNKNOWN,
						can_cancel_transfer: !1
					}, l.transferIn || {}),
					lastTransferredAt: "",
					paymentExpiresAt: "",
					contactIds: {},
					landing: {
						eligible: !1,
						enabled: !1
					},
					whois: {
						raw: "",
						privacy: !0
					},
					materialChanges: [],
					corChanges: {},
					registryStatuses: null,
					deletion: {
						isDeletable: !1
					},
					premiumType: r.Vs.Not_Premium,
					fees: null
				};
				return Object.assign(T, l)
			}

			function G(l = {}) {
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
				}, l)
			}

			function j(l) {
				const T = h.Py.concat(h.ui).reduce((se, ye) => i({}, se, {
					[ye]: []
				}), {});
				return l.forEach(se => {
					let ye = Y(se.registrar);
					ye in T || (ye = h.ui), ot(se.name) && (ye = "uk"), T[ye].push(se)
				}), Object.keys(T).sort((se, ye) => se.localeCompare(ye)).map(se => ({
					registrar: se,
					domains: T[se]
				})).filter(se => se.domains.length > 0)
			}

			function Y(l) {
				return l == null ? void 0 : l.toLowerCase().replace(/\s|,|\./g, "")
			}

			function C(l) {
				if (!l || !l.registrar) return "unknown";
				if (ot(l.name)) return "uk";
				const T = Y(l.registrar);
				return T in h.gM ? T : "unknown"
			}
			const $ = [];

			function R(l) {
				return $.some(T => l.endsWith("." + T))
			}

			function ae(l) {
				return !l.isEnterpriseZone || !Array.isArray(l.entitlements) ? !1 : !!l.entitlements.find(({
					id: T,
					allocation: se
				}) => T === h.g5 && se.value === !0)
			}

			function z(l) {
				var T;
				const se = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let ye = !1,
					Le = null;
				return (T = l.registryStatuses) === null || T === void 0 || T.some(Ye => {
					se.includes(Ye) && (Le = Ye, ye = !0)
				}), [ye, Le]
			}

			function P(l, T = !1) {
				if (!l) return [!1, t.keys.cannot_transfer_default];
				if (l.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!l.isFullZone && !ae(l)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (l.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (l.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!l.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (!T && wt(l == null ? void 0 : l.premiumType)) return [!1, t.keys.cannot_transfer_domain_premium];
				if (_(l)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let se;
				for (se in l.transferConditions)
					if (!l.transferConditions[se]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (R(l.name)) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [ye, Le] = z(l);
				return ye && Le ? [!1, t.keys.cannot_transfer_domain_registry_status[Le]] : [!0, ""]
			}

			function _(l) {
				var T, se;
				return !!l.transferIn && !((T = l.transferConditions) === null || T === void 0 ? void 0 : T.not_started) && !!(ot(l.name) || ((se = l.registryStatuses) === null || se === void 0 ? void 0 : se.includes(r.rj.PENDING_TRANSFER)))
			}

			function b(l) {
				return !!l.registrar && !!l.currentExpiration
			}

			function I(l, T = !1) {
				const [se] = P(l, T);
				return b(l) ? De(l) ? r.M5.InProgressOrOnCF : se ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function Z(l) {
				return l.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(l.transferIn.enter_auth_code) || !1
			}

			function ne(l) {
				return l.registrar === "Cloudflare"
			}

			function D(l) {
				return !!(l == null ? void 0 : l.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function q(l) {
				return !!(l == null ? void 0 : l.includes(r.rj.PENDING_TRANSFER))
			}
			const N = "Invalid date";

			function ie(l) {
				return l.newExpiration === N ? "Unavailable" : l.newExpiration
			}

			function pe(l) {
				return l.currentExpiration === N ? "Unavailable" : l.currentExpiration
			}

			function ge(l) {
				return l.substring(l.indexOf("."))
			}

			function ve(l) {
				return l.map(T => T.name).map(T => ge(T)).filter((T, se, ye) => !ye.includes(T, se + 1))
			}

			function Re(l) {
				if (h.no) return [!0, ""];
				if (!ne(l)) return [!1, r.ok.NotOnCF];
				if (l.isCorLocked) return [!1, l.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (l.lastTransferredAt) {
					const T = u()(l.lastTransferredAt),
						se = u().duration(u()().diff(T)).as("days"),
						ye = ot(l.name);
					if (se < (ye ? 1 : 60)) return [!1, ye ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (l.createdAt) {
					const T = u()(l.createdAt);
					if (u().duration(u()().diff(T)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function we(l) {
				return !!(h.Bc || l.transferOut)
			}

			function De(l) {
				return ce(l) || ne(l)
			}

			function F(l) {
				return !ce(l) && ne(l)
			}

			function ce(l) {
				return !l || l.lastKnownStatus === "pendingTransfer" || l.lastKnownStatus === "transferFOAPending" || !ne(l) && l.transferConditions && !l.transferConditions.not_started || !1
			}

			function Ce(l) {
				return !(R(l.name) || l.transferConditions && !l.transferConditions.supported_tld)
			}

			function Be(l) {
				return (l == null ? void 0 : l.includes("/")) ? !0 : l.split("").some(T => T.charCodeAt(0) > 123)
			}

			function ze(l) {
				switch (l) {
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

			function Ue(l) {
				return u()(l.paymentExpiresAt).isBefore(u()())
			}

			function He(l) {
				return l.transferIn && l.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function je(l) {
				const T = ["CU", "KP", "IR", "SY"];
				return l.filter(se => !T.includes(se.code))
			}

			function et(l) {
				if (!!l) return `${l.charAt(0).toUpperCase()}${l.slice(1)}${l.charAt(l.length-1)==="."?"":"."}`
			}

			function Ke(l) {
				const T = {};
				for (const [se, ye] of Object.entries(l)) {
					if (ye && typeof ye == "string") {
						Object.assign(T, {
							[se]: ye.trim()
						});
						continue
					}
					Object.assign(T, {
						[se]: ye
					})
				}
				return T
			}

			function Ve(l) {
				return u()(l).add(40, "days")
			}

			function xe(l) {
				const T = l.paymentExpiresAt || l.payment_expires_at,
					se = Ve(T);
				return u()().isBetween(T, se)
			}

			function $e(l) {
				var T;
				return !(l == null ? void 0 : l.registryStatuses) || !Array.isArray(l == null ? void 0 : l.registryStatuses) && !(0, e.isString)(l == null ? void 0 : l.registryStatuses) ? !1 : (T = l.registryStatuses) === null || T === void 0 ? void 0 : T.includes(r.rj.REDEMPTION_PERIOD)
			}

			function Xe(l) {
				var T;
				return !(l == null ? void 0 : l.registryStatuses) || !Array.isArray(l == null ? void 0 : l.registryStatuses) && !(0, e.isString)(l == null ? void 0 : l.registryStatuses) ? !1 : (T = l.registryStatuses) === null || T === void 0 ? void 0 : T.includes(r.rj.PENDING_DELETE)
			}

			function Ze(l) {
				return [".us"].includes(l)
			}

			function re(l) {
				return [".us"].includes(l)
			}

			function le(l) {
				switch (l) {
					case ".us":
						return oe();
					default:
						return []
				}
			}

			function A(l) {
				switch (l) {
					case ".us":
						return B;
					default:
						return {}
				}
			}
			const B = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function oe() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([l, T]) => ({
						value: l,
						label: T
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([l, T]) => ({
						value: l,
						label: T
					}))
				}]
			}

			function be(l, T, se) {
				return T[T.length - 1][se] === l[se]
			}

			function Pe(l) {
				return Boolean(Object.keys(l).length === 0)
			}

			function Oe(l) {
				return u()().add(l, "year").format(M)
			}

			function Ie({
				accountName: l
			}) {
				var T;
				const se = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((T = l.toLowerCase().match(se)) === null || T === void 0 ? void 0 : T[0]) || ""
			}

			function Se(l) {
				return !!l.match(a.default.email)
			}

			function fe(l) {
				return l === "Registration banned zone error"
			}

			function ke(l) {
				return l == null ? void 0 : l.startsWith("Quote error")
			}

			function Ge(l) {
				return l === (0, g.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function Ae(l) {
				return l === "DNS conflict"
			}

			function at(l) {
				return l === m.W7.PENDING_UPDATE
			}

			function it(l) {
				return l ? Object.values(m.wR).filter(T => T !== m.wR.OFFBOARDED).includes(l) : !1
			}

			function w(l) {
				return l ? [m.wR.LOCKED, m.wR.ONBOARDED, m.wR.ONBOARDING_INITIATED, m.wR.PENDING_REGISTRY_LOCK, m.wR.PENDING_REGISTRY_UNLOCK, m.wR.PENDING_UNLOCK_APPROVAL].includes(l) : !1
			}

			function ee(l) {
				return l ? m.wR.UNLOCKED === l : !1
			}

			function ue(l) {
				return l ? m.wR.LOCKED === l : !1
			}

			function me(l) {
				return l ? m.wR.PENDING_REGISTRY_LOCK === l : !1
			}

			function he(l) {
				return l ? [m.wR.PENDING_REGISTRY_UNLOCK, m.wR.PENDING_UNLOCK_APPROVAL].includes(l) : !1
			}

			function Me(l) {
				var T;
				return !1
			}

			function Je(l) {
				var T;
				return !1
			}

			function Te(l) {
				var T;
				return !1
			}

			function Bt(l) {
				var T;
				return !1
			}

			function nt(l) {
				var T;
				return !1
			}

			function St(l) {
				return Object.keys(m.wR).find(T => m.wR[T].toLowerCase() === l.toLowerCase())
			}

			function st(l) {
				var T;
				const se = (T = St(l)) === null || T === void 0 ? void 0 : T.toLowerCase();
				return se ? t.keys.protection_status[se] : t.keys.protection_status.unknown
			}

			function qe(l) {
				return ["com", "net"].includes(l)
			}

			function Ot(l) {
				const T = (0, p.pu)(l);
				return qe(T) ? m.wR.PENDING_REGISTRY_LOCK : m.wR.LOCKED
			}

			function Ft(l) {
				return (0, p.pu)(l) === "co" ? 5 : 10
			}

			function Ut(l, T) {
				return T ? 1 : (0, p.pu)(l) === "co" ? 5 : (0, p.pu)(l) === "org" ? 1 : 10
			}

			function ot(l) {
				return (0, p.pu)(l) === "uk"
			}

			function jt(l) {
				return (0, p.pu)(l) === "us"
			}

			function Fe(l) {
				return u()(l).isValid()
			}

			function It(l) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(l)
			}

			function xt(l) {
				return !!(l == null ? void 0 : l.id)
			}

			function Lt(l) {
				return l ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(l) : !1
			}

			function $t(l) {
				return l ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(l) : !1
			}

			function Gt(l) {
				var T;
				return (l == null ? void 0 : l.lastKnownStatus) ? (T = l.lastKnownStatus) === null || T === void 0 ? void 0 : T.includes("deletionIrredeemable") : !1
			}

			function wt(l) {
				switch (l) {
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

			function Wt(l) {
				if (!l || !l.message) return r.OJ.DEFAULT;
				const {
					message: T
				} = l;
				switch (!0) {
					case T.includes("feature disabled"):
						return r.OJ.FEATURE_DISABLED;
					case T.includes("email unverified"):
						return r.OJ.EMAIL_UNVERIFIED;
					case T.includes("account blocked"):
						return r.OJ.ACCOUNT_BLOCKED;
					default:
						return r.OJ.DEFAULT
				}
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Bc: function() {
					return h
				},
				Hv: function() {
					return $
				},
				JM: function() {
					return c
				},
				Py: function() {
					return a
				},
				WK: function() {
					return r
				},
				g5: function() {
					return i
				},
				gM: function() {
					return m
				},
				gf: function() {
					return p
				},
				jk: function() {
					return C
				},
				no: function() {
					return t
				},
				uY: function() {
					return g
				},
				ui: function() {
					return u
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../flags.js");
			const c = "Unknown",
				u = "unknown",
				m = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				a = Object.keys(m),
				g = !0,
				p = (0, o.J8)("registrar_mock_data") || !1,
				h = (0, o.J8)("registrar_mock_transfer_out") || !1,
				t = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				i = "cf_registrar.enabled",
				d = "@abcABC1234567890123456",
				s = (0, e.BC)`/${"accountId"}`,
				E = (0, e.BC)`${s}/add-site`,
				f = (0, e.BC)`${s}/domains`,
				S = (0, e.BC)`${f}/${"zoneName"}`,
				U = (0, e.BC)`${S}/configuration`,
				M = (0, e.BC)`${S}/contacts`,
				x = (0, e.BC)`${f}/pricing`,
				k = (0, e.BC)`${f}/protection`,
				L = (0, e.BC)`${f}/register`,
				te = (0, e.BC)`${L}/checkout`,
				X = (0, e.BC)`${L}/success`,
				Q = (0, e.BC)`${f}/tlds`,
				H = (0, e.BC)`${f}/transfer`,
				V = (0, e.BC)`${f}/transfer/${"zoneName"}`,
				G = (0, e.BC)`/registrar/accounts/verify_email`,
				j = (0, e.BC)`/registrar/domains/verify_email`,
				Y = (0, e.BC)`${f}/verify-email`,
				C = {
					addSite: E,
					domains: f,
					domainsDomain: S,
					domainsDomainConfiguration: U,
					domainsDomainContacts: M,
					domainsPricing: x,
					domainsProtection: k,
					domainsRegister: L,
					domainsRegisterCheckout: te,
					domainsRegisterSuccess: X,
					domainsTlds: Q,
					domainsTransfer: H,
					domainsTransferZone: V,
					registrarAccountsVerifyEmail: G,
					registrarDomainsVerifyEmail: j,
					verifyEmail: Y
				},
				$ = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				J: function() {
					return r
				},
				U: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				c = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = n.n(c),
				m = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function a(i) {
				for (var d = 1; d < arguments.length; d++) {
					var s = arguments[d] != null ? Object(arguments[d]) : {},
						E = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(s).filter(function(f) {
						return Object.getOwnPropertyDescriptor(s, f).enumerable
					})), E.forEach(function(f) {
						g(i, f, s[f])
					})
				}
				return i
			}

			function g(i, d, s) {
				return d = p(d), d in i ? Object.defineProperty(i, d, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = s, i
			}

			function p(i) {
				var d = h(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function h(i, d) {
				if (typeof i != "object" || i === null) return i;
				var s = i[Symbol.toPrimitive];
				if (s !== void 0) {
					var E = s.call(i, d || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			let t = function(i) {
				return i.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", i.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", i.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", i.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", i.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", i.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", i.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", i.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", i.RENEW_DOMAIN_COMPLETED = "domain renewal completed", i.RESTORE_DOMAIN_INIT = "click to open domain restore modal", i.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", i.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", i.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", i.RESTORE_DOMAIN_FAILURE = "domain restore failed", i.RESTORE_DOMAIN_COMPLETED = "domain restore completed", i.DOMAIN_DELETE_INIT = "click to begin domain delete", i.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", i.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", i.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", i.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", i.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", i.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", i.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", i.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", i.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", i.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", i
			}({});

			function r(i, d, s) {
				if (!(d == null ? void 0 : d.name)) return null;
				u().sendEvent(i, a({
					domain: {
						name: d.name,
						premium: (0, m.Uy)(d == null ? void 0 : d.premiumType),
						paymentExpiresAt: o()(d == null ? void 0 : d.paymentExpiresAt).format()
					},
					category: "registrar"
				}, s))
			}
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "update dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				KO: function() {
					return g
				},
				L9: function() {
					return t
				},
				N3: function() {
					return h
				},
				zE: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(r) {
				for (var i = 1; i < arguments.length; i++) {
					var d = arguments[i] != null ? Object(arguments[i]) : {},
						s = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && s.push.apply(s, Object.getOwnPropertySymbols(d).filter(function(E) {
						return Object.getOwnPropertyDescriptor(d, E).enumerable
					})), s.forEach(function(E) {
						u(r, E, d[E])
					})
				}
				return r
			}

			function u(r, i, d) {
				return i = m(i), i in r ? Object.defineProperty(r, i, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = d, r
			}

			function m(r) {
				var i = a(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function a(r, i) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var s = d.call(r, i || "default");
					if (typeof s != "object") return s;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			let g = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r
				}({}),
				p = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				h = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const t = (r, i = {}) => {
				o().sendEvent(r, c({}, i, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				_u: function() {
					return o
				},
				bK: function() {
					return e
				},
				lC: function() {
					return c
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
				c = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				lC: function() {
					return c
				},
				r8: function() {
					return e
				},
				wp: function() {
					return o
				}
			});
			const e = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				o = "Magic overview",
				c = "user journey"
		},
		"../react/pages/magic/packet-captures/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				W_: function() {
					return o
				},
				X: function() {
					return e
				},
				lC: function() {
					return c
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
				c = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				gb: function() {
					return t
				},
				iP: function() {
					return X
				},
				xL: function() {
					return U
				},
				rD: function() {
					return H
				},
				oT: function() {
					return s
				},
				i2: function() {
					return V
				},
				x1: function() {
					return a
				},
				lW: function() {
					return p
				},
				UA: function() {
					return L
				},
				K5: function() {
					return i
				},
				Ii: function() {
					return x
				},
				PJ: function() {
					return Q
				},
				bK: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				m = n("../../../../node_modules/@cloudflare/elements/es/index.js");
			const a = () => o().createElement(g, null, o().createElement("svg", {
					width: "94",
					height: "5",
					viewBox: "0 0 94 5",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M48.416 2.2002L1.99976 2.20021",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M66.3115 2.2002L59.3767 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M78.7949 2.2002L76.021 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M91.2773 2.2002L88.5034 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				g = (0, c.createComponent)(({
					theme: G
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
				p = () => o().createElement(h, null, o().createElement("svg", {
					width: "211",
					height: "71",
					viewBox: "0 0 211 71",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("circle", {
					cx: "175.5",
					cy: "35.5",
					r: "35.5",
					fill: "#044096"
				}), o().createElement("path", {
					d: "M48.7492 28L2.33298 28",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M66.6457 28L59.7109 28",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M79.1281 28L76.3542 28",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M91.6106 28.0005L88.8366 28.0005",
					stroke: "#E2F5FA",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M164.092 28.2002L100.767 28.2002",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				h = (0, c.createComponent)(({
					theme: G
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
				t = () => o().createElement(r, null, o().createElement(m.Ei, {
					alt: "airplane",
					src: u,
					width: "85%"
				})),
				r = (0, c.createComponent)(({
					theme: G
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
				i = () => o().createElement(d, null, o().createElement("svg", {
					width: "104",
					height: "23",
					viewBox: "0 0 104 23",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M93.7248 0H90.2837V7.74245H93.7248V0Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M103.187 9.4624H95.4448V12.9035H103.187V9.4624Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M93.7248 14.6245H90.2837V22.367H93.7248V14.6245Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M88.5632 9.4624H80.8208V12.9035H88.5632V9.4624Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M36.0259 10.627L2.00024 10.627",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M56.8198 10.627L44.5328 10.627",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M72.8872 10.627L65.326 10.627",
					stroke: "#C3E9F3",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				d = (0, c.createComponent)(({
					theme: G
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
				s = () => o().createElement(E, null, o().createElement("svg", {
					width: "13",
					height: "13",
					viewBox: "0 0 13 13",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("ellipse", {
					cx: "6.33672",
					cy: "6.34376",
					rx: "6.33672",
					ry: "6.34376",
					fill: "#086FFF"
				}))),
				E = (0, c.createComponent)(({
					theme: G
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
				f = () => o().createElement(S, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				S = (0, c.createComponent)(({
					theme: G
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
				U = () => o().createElement(M, null, o().createElement("svg", {
					width: "22",
					height: "22",
					viewBox: "0 0 22 22",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M12.6922 0H9.30762V7.61541H12.6922V0Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M22.0002 9.30762H14.3848V12.6922H22.0002V9.30762Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M12.6922 14.3848H9.30762V22.0002H12.6922V14.3848Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M7.61542 9.30762H0V12.6922H7.61542V9.30762Z",
					fill: "#C5EBF5"
				}))),
				M = (0, c.createComponent)(({
					theme: G
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
				x = () => o().createElement(k, null, o().createElement("svg", {
					width: "32",
					height: "32",
					viewBox: "0 0 32 32",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M18.0868 0H13.2637V10.852H18.0868V0Z",
					fill: "#FBAD41"
				}), o().createElement("path", {
					d: "M31.35 13.2637H20.498V18.0868H31.35V13.2637Z",
					fill: "#FBAD41"
				}), o().createElement("path", {
					d: "M18.0868 20.498H13.2637V31.35H18.0868V20.498Z",
					fill: "#FBAD41"
				}), o().createElement("path", {
					d: "M10.852 13.2637H0V18.0868H10.852V13.2637Z",
					fill: "#FBAD41"
				}))),
				k = (0, c.createComponent)(({
					theme: G
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
				L = () => o().createElement(te, null, o().createElement("svg", {
					width: "48",
					height: "15",
					viewBox: "0 0 48 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M40.25 3.0781e-07L33.1902 7.05981L40.25 14.1196L47.3098 7.05981L40.25 3.0781e-07Z",
					fill: "#6ECCE5"
				}), o().createElement("path", {
					d: "M20.9031 6.61694L1.99994 6.61694",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				te = (0, c.createComponent)(({
					theme: G
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
				X = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 40",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M12.4025 16.0001L10.265 13.8927L8.015 16.1427C8.86952 12.6096 10.8668 9.45753 13.6967 7.17612C16.5265 4.8947 20.0305 3.6116 23.6645 3.52609C27.2984 3.44059 30.8589 4.55747 33.7929 6.70326C36.3879 8.60112 38.3644 11.2099 39.492 14.2014L40.339 13.9224L41.5646 13.5186L42.4174 13.2377C41.0751 9.5683 38.6567 6.37586 35.4641 4.08759C31.9041 1.53603 27.5888 0.257281 23.2134 0.457383C18.838 0.657484 14.6574 2.32478 11.3452 5.19063C8.03295 8.05648 5.78199 11.954 4.955 16.2551L2.63 13.9151L0.5 16.0001L6.5 22.0001L12.4025 16.0001Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M47.5646 24.0049L41.5646 18.0049L35.6471 24.0049L37.7846 26.1124L40.0346 23.8624C39.1898 27.4009 37.1992 30.561 34.3725 32.851C31.5458 35.1411 28.0415 36.4328 24.4048 36.5252C20.768 36.6176 17.2027 35.5055 14.2634 33.3619C11.5162 31.3585 9.45991 28.559 8.36721 25.3515L7.54721 25.6183L6.37385 26.0001L5.5 26.2845C6.79997 30.1536 9.28442 33.5247 12.6114 35.9135C16.1663 38.4659 20.4765 39.7483 24.8486 39.5544C29.2206 39.3605 33.4003 37.7015 36.7153 34.8443C40.0303 31.9872 42.2878 28.098 43.1246 23.8024L45.4346 26.1199L47.5646 24.0049Z",
					fill: "#C5EBF5"
				})),
				Q = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 39 41",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M31.1271 6.20742L32.7396 3.67992C25.4571 -1.00008 13.5396 -1.00008 6.17465 3.67992L7.74965 6.21492C14.2521 2.11242 24.7221 2.11242 31.1271 6.20742Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M19.3896 4.67742C15.6941 4.70925 12.0606 5.63105 8.79679 7.36478C5.533 9.09851 2.73499 11.5931 0.639648 14.6374L3.16715 16.2499C5.00538 13.6448 7.43278 11.5105 10.2518 10.0209C13.0708 8.53125 16.2017 7.7283 19.3896 7.67742C28.3896 7.67742 34.1496 13.2724 35.9496 16.2274L38.4996 14.6749C36.4146 11.2174 29.7171 4.67742 19.3896 4.67742Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M19.3971 9.31242C13.4646 9.31242 8.46965 11.8849 5.34215 16.5574C3.6804 19.123 2.6668 22.0539 2.38852 25.0979C2.11024 28.142 2.57563 31.2081 3.74465 34.0324L6.51965 32.8924C5.53401 30.5237 5.1385 27.951 5.36713 25.3956C5.59576 22.8402 6.44168 20.3786 7.83215 18.2224C9.10397 16.3409 10.8316 14.8121 12.8539 13.7787C14.8762 12.7453 17.1272 12.2408 19.3971 12.3124C29.8296 12.3124 32.6421 20.8699 32.8446 24.1699C33.0771 28.0399 30.8646 28.4974 30.4446 28.5424L30.2046 28.5874C29.0973 28.8301 27.9393 28.6509 26.9571 28.0849C26.1096 27.4924 25.5846 26.4049 25.4046 24.8599C24.9171 20.6224 21.6546 18.8599 18.8796 19.0249C15.8271 19.2049 12.5421 21.6724 12.5421 26.6824C12.5421 33.9049 19.1721 39.7174 25.2921 40.9324L25.8921 37.9924C21.5646 37.1449 15.5421 32.7499 15.5421 26.6824C15.5421 23.5999 17.3046 22.1224 19.0521 22.0249C20.4246 21.9424 22.1421 22.7299 22.4271 25.2049C22.7121 27.6799 23.6721 29.4649 25.2771 30.5674C26.9271 31.5879 28.9083 31.9293 30.8046 31.5199C32.7547 31.3024 36.1746 29.4799 35.8372 24.0199C35.5896 19.9024 32.1471 9.31242 19.3971 9.31242Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M11.0346 23.1199C12.2496 19.2499 15.0771 16.9474 18.6471 16.9474C27.0396 16.9474 27.6921 24.1774 27.6921 26.3899H30.6921C30.6921 20.6524 27.5421 13.9474 18.6471 13.9474C13.7646 13.9474 9.75215 17.1274 8.14715 22.1974C7.17854 25.4217 7.25631 28.8699 8.3693 32.0471C9.4823 35.2244 11.5733 37.9674 14.3421 39.8824L16.0296 37.3999C13.7995 35.8488 12.116 33.6332 11.2191 31.069C10.3222 28.5048 10.2576 25.7229 11.0346 23.1199Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M22.9371 31.3399C22.1161 30.5273 21.4749 29.5512 21.055 28.475C20.6351 27.3988 20.4459 26.2464 20.4996 25.0924H17.4996C17.4514 26.6502 17.7256 28.2012 18.3051 29.648C18.8846 31.0948 19.7568 32.4062 20.8671 33.4999C23.4992 35.8335 26.9209 37.0778 30.4371 36.9799C30.7071 36.9799 30.9846 36.9799 31.2546 36.9799L31.1121 33.9799C27.8421 34.1299 24.8571 33.1699 22.9371 31.3399Z",
					fill: "#C5EBF5"
				})),
				H = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 28",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M24.0165 14.6841C25.4257 14.6841 26.8032 14.2662 27.9749 13.4833C29.1466 12.7004 30.0598 11.5876 30.5991 10.2857C31.1384 8.98378 31.2795 7.55118 31.0046 6.16907C30.7296 4.78695 30.051 3.5174 29.0546 2.52095C28.0581 1.5245 26.7886 0.84591 25.4065 0.57099C24.0244 0.29607 22.5918 0.437169 21.2898 0.976444C19.9879 1.51572 18.8751 2.42895 18.0922 3.60065C17.3093 4.77235 16.8915 6.14989 16.8915 7.55908C16.893 9.44827 17.6442 11.2596 18.9801 12.5955C20.3159 13.9313 22.1273 14.6825 24.0165 14.6841ZM24.0165 3.43783C24.8323 3.43783 25.6298 3.67976 26.3082 4.13302C26.9865 4.58628 27.5153 5.23052 27.8275 5.98427C28.1397 6.73801 28.2214 7.56741 28.0622 8.36758C27.903 9.16775 27.5102 9.90276 26.9333 10.4796C26.3564 11.0565 25.6214 11.4494 24.8212 11.6086C24.021 11.7677 23.1916 11.686 22.4379 11.3738C21.6841 11.0616 21.0399 10.5329 20.5866 9.85456C20.1334 9.17621 19.8915 8.37868 19.8915 7.56283C19.8915 6.46882 20.3261 5.41961 21.0996 4.64602C21.8732 3.87243 22.9224 3.43783 24.0165 3.43783Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M9.03896 17.7928C10.0773 17.7928 11.0923 17.4849 11.9557 16.9081C12.8191 16.3312 13.492 15.5112 13.8893 14.5519C14.2867 13.5926 14.3907 12.537 14.1881 11.5186C13.9855 10.5002 13.4855 9.56475 12.7513 8.83052C12.017 8.0963 11.0816 7.59628 10.0632 7.39371C9.04478 7.19114 7.98918 7.29511 7.02987 7.69247C6.07056 8.08983 5.25062 8.76273 4.67374 9.62609C4.09687 10.4894 3.78896 11.5045 3.78896 12.5428C3.79035 13.9348 4.34392 15.2693 5.32818 16.2536C6.31245 17.2379 7.647 17.7914 9.03896 17.7928ZM9.03896 10.2928C9.48397 10.2928 9.91898 10.4248 10.289 10.672C10.659 10.9193 10.9474 11.2707 11.1177 11.6818C11.288 12.0929 11.3325 12.5453 11.2457 12.9818C11.1589 13.4182 10.9446 13.8192 10.63 14.1338C10.3153 14.4485 9.91437 14.6628 9.47791 14.7496C9.04146 14.8364 8.58906 14.7919 8.17792 14.6216C7.76679 14.4513 7.41539 14.1629 7.16815 13.7929C6.92092 13.4229 6.78896 12.9878 6.78896 12.5428C6.78956 11.9465 7.02687 11.3748 7.44876 10.9533C7.87066 10.5318 8.44261 10.2951 9.03896 10.2951V10.2928Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M40.5112 18.5751H37.4865C36.3725 18.5741 35.2726 18.8238 34.2682 19.3056C33.2866 18.1392 32.0619 17.2014 30.6798 16.5581C29.2977 15.9147 27.7917 15.5813 26.2672 15.5811H21.7327C20.2109 15.5814 18.7076 15.9137 17.3275 16.5549C15.9474 17.1961 14.7238 18.1308 13.7422 19.2936C12.7413 18.8193 11.6473 18.5739 10.5397 18.5751H7.51571C5.5307 18.5773 3.62759 19.3667 2.22384 20.7701C0.820079 22.1736 0.0302906 24.0766 0.02771 26.0616L1.52771 27.5616H46.5L48 26.0616C47.9976 24.0764 47.2077 22.1732 45.8038 20.7697C44.3998 19.3661 42.4964 18.5769 40.5112 18.5751ZM7.51571 21.5751H10.5397C11.083 21.5778 11.6213 21.6794 12.1282 21.8751C11.7558 22.7322 11.5008 23.6356 11.37 24.5608H3.28571C3.59698 23.6878 4.17049 22.9323 4.92771 22.3978C5.68493 21.8634 6.58885 21.576 7.51571 21.5751ZM14.4007 24.5623C14.7489 22.8744 15.6681 21.358 17.0036 20.2685C18.3391 19.1791 20.0092 18.5831 21.7327 18.5811H26.2672C27.9907 18.5829 29.6609 19.1787 30.9966 20.268C32.3322 21.3573 33.2516 22.8736 33.6 24.5616L14.4007 24.5623ZM36.63 24.5623C36.4999 23.6397 36.2462 22.7389 35.8755 21.8841C36.3887 21.6824 36.935 21.5776 37.4865 21.5751H40.5112C41.4382 21.576 42.3422 21.8636 43.0993 22.3984C43.8564 22.9332 44.4297 23.689 44.7405 24.5623H36.63Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M39.0105 17.7928C40.0488 17.7928 41.0638 17.4849 41.9272 16.9081C42.7906 16.3312 43.4635 15.5112 43.8608 14.5519C44.2582 13.5926 44.3622 12.537 44.1596 11.5186C43.957 10.5002 43.457 9.56475 42.7228 8.83052C41.9885 8.0963 41.0531 7.59628 40.0347 7.39371C39.0163 7.19114 37.9607 7.29511 37.0014 7.69247C36.0421 8.08983 35.2221 8.76273 34.6452 9.62609C34.0684 10.4894 33.7605 11.5045 33.7605 12.5428C33.7619 13.9348 34.3154 15.2693 35.2997 16.2536C36.284 17.2379 37.6185 17.7914 39.0105 17.7928ZM39.0105 10.2928C39.4555 10.2928 39.8905 10.4248 40.2605 10.672C40.6305 10.9193 40.9189 11.2707 41.0892 11.6818C41.2595 12.0929 41.304 12.5453 41.2172 12.9818C41.1304 13.4182 40.9161 13.8192 40.6014 14.1338C40.2868 14.4485 39.8859 14.6628 39.4494 14.7496C39.013 14.8364 38.5606 14.7919 38.1494 14.6216C37.7383 14.4513 37.3869 14.1629 37.1397 13.7929C36.8924 13.4229 36.7605 12.9878 36.7605 12.5428C36.7611 11.9465 36.9984 11.3748 37.4203 10.9533C37.8422 10.5318 38.4141 10.2951 39.0105 10.2951V10.2928Z",
					fill: "#C5EBF5"
				})),
				V = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 40 46",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M26.4256 15.404C26.4243 15.3512 26.4193 15.2986 26.4106 15.2465C26.4031 15.1415 26.3956 15.0365 26.3806 14.939C26.38 14.9109 26.3749 14.8831 26.3656 14.8565C26.3665 14.8288 26.364 14.8011 26.3581 14.774C26.2831 13.9865 26.1781 13.214 26.0731 12.4715C26.0656 12.4715 26.0506 12.479 26.0506 12.4865C25.1206 12.839 24.1756 13.244 23.2081 13.6865C23.2606 14.084 23.3131 14.504 23.3581 14.9315L23.3656 14.939C23.388 15.0806 23.403 15.2233 23.4106 15.3665C23.4406 15.6065 23.4631 15.8465 23.4856 16.094C23.4931 16.214 23.5156 16.334 23.5156 16.4615C23.5156 16.589 23.5381 16.7165 23.5456 16.8365L23.5606 16.829C24.5581 16.349 25.5256 15.929 26.4406 15.5615H26.4481C26.4406 15.509 26.4331 15.464 26.4256 15.404ZM22.0531 16.3565C21.8356 16.229 21.6181 16.109 21.3931 15.9965C20.9731 15.764 20.5531 15.539 20.1256 15.329C20.0814 15.2982 20.0335 15.273 19.9831 15.254C19.9831 15.239 19.9831 15.239 19.9756 15.2465C18.9181 15.794 17.8581 16.3765 16.7956 16.994H16.7656C16.7131 17.0315 16.6531 17.0615 16.5931 17.099C16.5331 17.1365 16.4656 17.174 16.4131 17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856C12.2581 19.784 11.2756 20.444 10.3381 21.1115C9.46812 21.734 8.63562 22.3565 7.86312 22.9865C6.68838 23.9077 5.56424 24.8916 4.49562 25.934C1.00812 29.354 -0.199384 32.0765 0.918116 34.0115H0.925616C2.03562 35.939 4.99062 36.2465 9.70061 34.9415C10.4806 34.724 11.2981 34.469 12.1456 34.169C11.9956 33.1865 11.8606 32.1815 11.7481 31.124C7.11312 32.8115 4.08312 33.104 3.52062 32.519C3.49539 32.0868 3.62281 31.6594 3.88062 31.3115C4.70562 29.894 6.85062 27.5615 10.3306 24.854C10.6606 24.6065 10.9831 24.3515 11.3356 24.104C11.4481 24.014 11.5681 23.9315 11.6881 23.849C11.8831 23.7065 12.0781 23.564 12.2806 23.4215C12.3856 23.3465 12.4981 23.264 12.6106 23.1815C12.7006 23.114 12.7981 23.0465 12.8881 22.979C12.9931 22.904 13.0981 22.8365 13.1956 22.7615L13.2031 22.769C14.1331 22.124 15.1456 21.464 16.2181 20.804C16.8181 20.444 17.4481 20.069 18.0931 19.694C18.7381 19.319 19.3681 18.974 19.9831 18.6365C21.0931 18.0365 22.1731 17.4965 23.2006 16.994C22.8181 16.775 22.4356 16.5665 22.0531 16.3565ZM16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C15.4306 29.624 14.4706 30.0515 13.5556 30.419C13.5516 30.4231 13.5463 30.4257 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C13.9306 33.509 13.9306 33.5015 13.9456 33.5015C14.8681 33.1415 15.8131 32.7365 16.7806 32.2865C16.7356 31.889 16.6756 31.475 16.6306 31.049ZM39.0781 11.975H39.0706C37.9606 10.04 34.9981 9.72502 30.2881 11.03C29.5081 11.2475 28.6981 11.5025 27.8506 11.8025V11.8175C28.0006 12.7925 28.1356 13.805 28.2481 14.855C32.8531 13.1825 35.8756 12.8975 36.4756 13.475C36.7006 14.39 34.4431 17.405 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006C27.0031 23.06 26.8981 23.1275 26.7931 23.2025C25.8631 23.8475 24.8506 24.5 23.7706 25.175C23.1706 25.5425 22.5481 25.91 21.9031 26.285C21.2581 26.66 20.6206 27.005 20.0056 27.3425C18.8881 27.9425 17.8156 28.4975 16.7881 28.985C17.1631 29.2025 17.5381 29.4125 17.9131 29.615C18.0781 29.7125 18.2431 29.8025 18.4081 29.885C18.4883 29.9342 18.5709 29.9793 18.6556 30.02C19.0381 30.23 19.4206 30.4325 19.7956 30.6275C19.8631 30.665 19.9306 30.695 19.9981 30.725L20.0056 30.7325C21.0631 30.1925 22.1281 29.6 23.2006 28.9925L23.2156 28.985L23.2231 28.9775L23.5831 28.7675V28.76L23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1856 27.1925 26.4031 27.0575 26.6131 26.915L26.6956 26.855H26.7031C26.7707 26.8195 26.8359 26.7794 26.8981 26.735C27.3331 26.4575 27.7531 26.1725 28.1731 25.8875C28.3006 25.805 28.4281 25.715 28.5556 25.625C28.8031 25.46 29.0431 25.295 29.2831 25.1225C29.3956 25.0475 29.5006 24.965 29.6131 24.89L29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23C33.3003 22.0761 34.4244 21.0897 35.4931 20.045C36.6912 18.9223 37.7357 17.6463 38.5996 16.25C39.0383 15.5378 39.329 14.7445 39.4546 13.9175C39.5395 13.2464 39.4076 12.5658 39.0781 11.975Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M26.7931 22.784V22.775C26.7931 22.34 26.7856 21.9125 26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13V19.115C26.6956 19.04 26.6956 18.965 26.6881 18.89C26.6868 18.8198 26.6818 18.7497 26.6731 18.68C26.6656 18.545 26.6581 18.41 26.6581 18.275C26.6281 17.795 26.5981 17.33 26.5606 16.865C26.5531 16.775 26.5456 16.685 26.5381 16.6025C26.5156 16.3475 26.4931 16.1075 26.4706 15.86L26.4481 15.6125C26.442 15.5983 26.4394 15.5829 26.4406 15.5675L26.4481 15.56C26.4406 15.5075 26.4331 15.4625 26.4256 15.4025C26.4243 15.3497 26.4193 15.2971 26.4106 15.245C26.4031 15.14 26.3956 15.035 26.3806 14.9375C26.3799 14.9094 26.3749 14.8816 26.3656 14.855C26.3665 14.8273 26.364 14.7996 26.3581 14.7725C26.2831 13.985 26.1781 13.2125 26.0731 12.47C25.8559 10.9959 25.5631 9.534 25.1956 8.09002C23.9731 3.35752 22.2256 0.95752 19.9981 0.95752C17.7706 0.95752 16.0156 3.36502 14.7931 8.09752C14.5906 8.88502 14.4106 9.71752 14.2381 10.6025C15.1681 10.9625 16.1131 11.3525 17.0806 11.78C17.4032 9.38634 18.0991 7.05805 19.1431 4.88002C19.4581 4.34002 19.7506 4.03252 19.9981 3.96502C20.9056 4.22002 22.3831 7.68502 23.2081 13.685C23.2606 14.0825 23.3131 14.5025 23.3581 14.93L23.3656 14.9375C23.388 15.0791 23.403 15.2218 23.4106 15.365C23.4406 15.605 23.4631 15.845 23.4856 16.0925C23.4931 16.2125 23.5156 16.3325 23.5156 16.46C23.5156 16.5875 23.5381 16.715 23.5456 16.835C23.5531 16.955 23.5681 17.0825 23.5831 17.21V17.2175C23.6731 18.3575 23.7406 19.5575 23.7706 20.825C23.7856 21.53 23.8006 22.25 23.8006 22.9925C23.8006 23.735 23.7931 24.4625 23.7706 25.175C23.7331 26.435 23.6806 27.6275 23.5831 28.76V28.7675C23.6506 28.73 23.7181 28.685 23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1481 27.215 26.3356 27.1025 26.5081 26.99C26.5444 26.9668 26.5794 26.9418 26.6131 26.915L26.6956 26.855H26.7031C26.7631 25.67 26.7931 24.455 26.7931 23.2175L26.7931 23.2025C26.7995 23.1302 26.802 23.0576 26.8006 22.985V22.7975L26.7931 22.784ZM25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144L23.5531 29.1515C23.4631 30.269 23.3431 31.3115 23.2156 32.2865C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494L26.0731 33.4865C26.2231 32.504 26.3506 31.4765 26.4481 30.404C26.0746 30.2615 25.6996 30.104 25.3081 29.9315ZM25.7506 35.384C24.8281 35.024 23.8831 34.634 22.9231 34.2065C22.0606 39.0665 20.7931 41.819 20.0131 42.0215C19.1056 41.804 17.6056 38.339 16.7806 32.2865C16.7356 31.889 16.6756 31.4765 16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C16.4281 29.024 16.4206 28.8965 16.4056 28.769C16.3156 27.629 16.2556 26.429 16.2181 25.1615C16.2031 24.4565 16.1956 23.7365 16.1881 22.9865C16.1806 22.2365 16.2031 21.5165 16.2181 20.804C16.2556 19.5515 16.3156 18.359 16.4131 17.2265V17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856L13.2931 19.1315C13.2331 20.3165 13.1956 21.524 13.1956 22.7615L13.2031 22.769C13.2011 22.769 13.1992 22.7698 13.1978 22.7712C13.1964 22.7726 13.1956 22.7745 13.1956 22.7765C13.1919 22.8465 13.1919 22.9166 13.1956 22.9865V23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864C13.3381 28.0865 13.4281 29.2715 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C14.1329 34.982 14.4209 36.442 14.7931 37.8815C16.0081 42.6215 17.7706 45.0215 19.9906 45.0215H19.9996C21.3346 45.0215 22.4821 44.1665 23.4646 42.4715C24.2378 41.0254 24.8202 39.485 25.1971 37.889C25.3996 37.094 25.5946 36.2615 25.7596 35.384H25.7506ZM15.3406 13.064L14.6206 12.7715C14.3881 12.674 14.1556 12.5765 13.9231 12.4865L13.9156 12.494C13.7731 13.4765 13.6531 14.504 13.5481 15.569C13.9156 15.7265 14.2906 15.884 14.6881 16.0565H14.6956C15.2581 16.2965 15.8356 16.5665 16.4356 16.8515V16.829C16.5331 15.7115 16.6456 14.6765 16.7806 13.7015C16.2931 13.475 15.8206 13.274 15.3406 13.064Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M35.4331 25.904C34.8706 25.3415 34.2631 24.7865 33.6031 24.209H33.5956C32.8231 24.8315 32.0206 25.4465 31.1731 26.069L31.1656 26.0765C31.1581 26.0765 31.1581 26.084 31.1506 26.0915C34.8856 29.219 36.6181 31.6715 36.4006 32.444C35.7631 33.119 32.0506 32.6915 26.4481 30.404C26.0731 30.2615 25.6981 30.104 25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144C23.4406 29.084 23.3356 29.0315 23.2231 28.979L23.2156 28.9865C22.1881 28.4915 21.1231 27.944 20.0056 27.344C19.3756 27.0065 18.7456 26.654 18.0931 26.279C17.4406 25.904 16.8181 25.529 16.2181 25.1615C15.1456 24.494 14.1406 23.8415 13.2031 23.204L13.1956 23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864L13.3006 26.8565C14.2981 27.5065 15.3331 28.144 16.4056 28.769L16.7881 28.9865C17.1631 29.204 17.5381 29.414 17.9131 29.6165C18.0781 29.714 18.2431 29.804 18.4081 29.8865C18.4883 29.9357 18.5709 29.9808 18.6556 30.0215C19.0381 30.2315 19.4206 30.434 19.7956 30.629C19.8631 30.6665 19.9306 30.6965 19.9981 30.7265L20.0056 30.734C20.0731 30.7715 20.1406 30.809 20.2081 30.839C20.6656 31.079 21.1231 31.304 21.5806 31.5215C22.1131 31.784 22.6456 32.0315 23.1631 32.2715C23.1791 32.2731 23.1944 32.2782 23.2081 32.2865H23.2156C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494C26.4256 33.6365 26.7856 33.7715 27.1381 33.899C27.4906 34.0265 27.8356 34.1465 28.1806 34.2665C28.2068 34.2695 28.2322 34.2771 28.2556 34.289C28.5931 34.4015 28.9231 34.514 29.2381 34.604C29.5756 34.7165 29.9056 34.814 30.2356 34.904C30.5281 34.9865 30.8131 35.054 31.0906 35.1215C31.3681 35.189 31.6531 35.2565 31.9156 35.309C32.2081 35.369 32.4931 35.429 32.7706 35.474C33.3256 35.564 33.8506 35.6315 34.3306 35.6615C35.2141 35.7338 36.1035 35.6603 36.9631 35.444C37.2573 35.3636 37.5416 35.2504 37.8106 35.1065C38.301 34.8394 38.7084 34.4424 38.9881 33.959C40.1056 32.0315 38.9056 29.324 35.4331 25.904ZM10.3531 21.125H10.3456V21.1175L10.3381 21.11C9.46812 21.7325 8.63562 22.355 7.86312 22.985L7.88561 23C8.65811 23.615 9.46812 24.23 10.3306 24.8525C10.6606 24.605 10.9831 24.35 11.3356 24.1025C11.4481 24.0125 11.5681 23.93 11.6881 23.8475C11.8831 23.705 12.0781 23.5625 12.2806 23.42C12.3781 23.3525 12.4756 23.2775 12.5806 23.21C12.6856 23.1425 12.7756 23.0675 12.8806 22.9925C12.8826 22.9925 12.8845 22.9917 12.8859 22.9903C12.8873 22.9889 12.8881 22.987 12.8881 22.985V22.9775C11.9746 22.3415 11.1331 21.734 10.3531 21.125ZM26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13C25.6981 18.4775 24.6556 17.8475 23.5906 17.2175H23.5831V17.21L23.2006 16.9925C22.8181 16.775 22.4356 16.565 22.0531 16.355C21.8356 16.2275 21.6181 16.1075 21.3931 15.995C20.9731 15.7625 20.5531 15.5375 20.1256 15.3275C20.0814 15.2967 20.0335 15.2715 19.9831 15.2525C19.9831 15.2375 19.9831 15.2375 19.9756 15.245C19.4506 14.9675 18.9331 14.7125 18.4156 14.465C17.8681 14.195 17.3281 13.94 16.7881 13.7H16.7806C16.2931 13.475 15.8206 13.2725 15.3406 13.0625L14.6206 12.77C14.3881 12.6725 14.1556 12.575 13.9231 12.485C13.1956 12.2 12.4831 11.9375 11.7856 11.7125C11.0881 11.4725 10.4056 11.2625 9.75311 11.075C9.46811 11 9.17562 10.925 8.90562 10.865C8.62062 10.7975 8.34311 10.73 8.07311 10.67C7.60812 10.5725 7.16562 10.4975 6.73812 10.4375C6.34812 10.385 5.96562 10.3475 5.61312 10.325C5.31312 10.3025 5.02062 10.3025 4.75062 10.3025C4.48981 10.3046 4.22935 10.3221 3.97062 10.355L3.96312 10.3475C3.63076 10.3889 3.30223 10.4566 2.98062 10.55C2.86812 10.5875 2.75562 10.625 2.65062 10.6625C2.47191 10.7314 2.29888 10.8141 2.13312 10.91C1.89763 11.04 1.68278 11.2043 1.49562 11.3975C1.3031 11.5844 1.1366 11.7963 1.00062 12.0275C-0.116884 13.955 1.08312 16.6625 4.55562 20.0825C5.13312 20.6375 5.74062 21.2075 6.40812 21.77C7.18062 21.1475 7.98312 20.5325 8.83062 19.91C8.83812 19.91 8.83812 19.9025 8.84562 19.9025C5.13312 16.7825 3.39312 14.33 3.59562 13.5275C4.27062 12.875 7.97562 13.3025 13.5481 15.5675C13.9156 15.725 14.2906 15.8825 14.6881 16.055H14.6956C15.2581 16.295 15.8356 16.565 16.4356 16.85C16.5481 16.895 16.6531 16.9475 16.7656 16.9925C16.7697 16.9966 16.7749 16.9992 16.7806 17C17.8081 17.495 18.8756 18.04 19.9831 18.635C20.6131 18.9725 21.2431 19.3325 21.8881 19.7C22.5331 20.0675 23.1631 20.45 23.7706 20.825C24.8506 21.4925 25.8581 22.145 26.7931 22.7825L26.7931 22.775C26.7931 22.3415 26.7856 21.914 26.7781 21.4865L26.7781 21.485ZM32.1106 22.985C31.3381 22.37 30.5131 21.7475 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006L27.1081 23C28.0156 23.6375 28.8631 24.26 29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23L32.1106 22.985Z",
					fill: "#C5EBF5"
				}))
		},
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				A2: function() {
					return g
				},
				He: function() {
					return m
				},
				N$: function() {
					return a
				},
				Qq: function() {
					return c
				},
				ST: function() {
					return u
				},
				wM: function() {
					return o
				}
			});
			var e = n("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				c = "login-apple-jwt",
				u = "cf-test",
				m = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				a = p => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: p ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: p ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: p ? e.rD : e.PJ
				}, {
					title: "apple.sign_in_with_apple.impact.title",
					description: "apple.sign_in_with_apple.impact.description",
					icon: e.i2
				}],
				g = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/pages/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				A: function() {
					return f
				},
				C1: function() {
					return h
				},
				Dp: function() {
					return H
				},
				HD: function() {
					return M
				},
				IK: function() {
					return m
				},
				L7: function() {
					return c
				},
				Li: function() {
					return E
				},
				Ni: function() {
					return te
				},
				OG: function() {
					return C
				},
				QF: function() {
					return j
				},
				QV: function() {
					return L
				},
				Sx: function() {
					return x
				},
				Ub: function() {
					return G
				},
				X3: function() {
					return r
				},
				aP: function() {
					return g
				},
				eO: function() {
					return i
				},
				fH: function() {
					return s
				},
				fQ: function() {
					return S
				},
				fR: function() {
					return e
				},
				hE: function() {
					return V
				},
				iS: function() {
					return U
				},
				ku: function() {
					return Q
				},
				nY: function() {
					return k
				},
				w3: function() {
					return u
				},
				wJ: function() {
					return p
				},
				wp: function() {
					return d
				},
				yu: function() {
					return t
				},
				zG: function() {
					return X
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-pages",
				c = {
					dns: "https://cloudflare.com/dns",
					access: "https://www.cloudflare.com/teams-access/",
					access_dashboard: "https://one.dash.cloudflare.com",
					community: "https://community.cloudflare.com/tag/cloudflarepages",
					documentation: {
						access: "https://developers.cloudflare.com/pages/configuration/preview-deployments/#customize-preview-deployments-access",
						buildConfig: "https://developers.cloudflare.com/pages/configuration/build-configuration/",
						buildCache: "https://developers.cloudflare.com/pages/configuration/build-caching/#build-caching-beta",
						configuration: "https://developers.cloudflare.com/pages/configuration/",
						gettingStarted: "https://developers.cloudflare.com/pages/getting-started",
						configuringBuilds: "https://developers.cloudflare.com/pages/platform/build-configuration",
						supportedFrameworks: "https://developers.cloudflare.com/pages/platform/build-configuration#framework-presets",
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
						configFile: "https://developers.cloudflare.com/pages/functions/wrangler-configuration/"
					},
					github: {
						appHomepage: `https://github.com/apps/${o}`,
						newInstallation: `https://github.com/apps/${o}/installations/new`
					},
					gitlab: {
						authorize: "https://gitlab.com/oauth/authorize",
						manage: "https://gitlab.com/-/profile/applications"
					},
					webAnalytics: "https://developers.cloudflare.com/analytics/web-analytics/"
				},
				u = "Allow Members - Cloudflare Pages",
				m = 58,
				a = {
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
				g = "production",
				p = 2e3,
				h = 100,
				t = 350,
				r = 1e7,
				i = ["Success:", "Error:", "Failed:"],
				d = 10,
				s = "_headers",
				E = "_redirects",
				f = "_routes.json",
				S = "_worker.js",
				U = "do-a-barrel-roll",
				M = [s, E, f, S],
				x = 1024 * 1024 * 25,
				k = 1e3,
				L = {
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
				te = 1e5,
				X = 75e3,
				Q = "workers",
				H = "cloudflare_pages_build_caching",
				V = 2;
			let G = function($) {
				return $[$.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", $[$.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", $[$.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", $[$.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", $[$.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", $[$.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", $
			}({});
			const j = 1,
				Y = 2,
				C = 2
		},
		"../react/pages/pages/routes.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return c
				},
				_j: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
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
					projectIntegrationsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations`,
					projectIntegrations: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations/${"deploymentType"}(preview|production)`,
					projectIntegrationsSetupFlow: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations/${"deploymentType"}(preview|production)/${"integrationId"}/integrations-setup`,
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
				c = {
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
				u = m => `${m.subdomain}.pages.dev`
		},
		"../react/pages/r2/routes.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return c
				},
				Jg: function() {
					return a
				},
				_j: function() {
					return o
				},
				pZ: function() {
					return g
				},
				vF: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
					root: (0, e.BC)`/${"accountId"}/r2`,
					overview: (0, e.BC)`/${"accountId"}/r2/overview`,
					cliQuickStart: (0, e.BC)`/${"accountId"}/r2/cli`,
					createBucket: (0, e.BC)`/${"accountId"}/r2/new`,
					bucketDetails: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}`,
					bucketDetailsSettings: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/settings`,
					bucketDetailsCors: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/cors/${"op"}`,
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
					migrator: (0, e.BC)`/${"accountId"}/r2/slurper`
				},
				c = {
					canUnsubscribe: (0, e.BC)`/accounts/${"accountId"}/r2/canUnsubscribe`,
					defaultRegion: (0, e.BC)`/accounts/${"accountId"}/r2/defaultRegion`,
					buckets: (0, e.BC)`/accounts/${"accountId"}/r2/buckets`,
					bucket: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}`,
					objects: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects`,
					object: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects/${"objectKey"}`,
					bucketUsage: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/usage`,
					bucketAccess: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/policy`,
					bucketCustomDomains: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/custom_domains`,
					bucketCustomDomain: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/custom_domains/${"domainName"}`,
					bucketCors: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/cors`,
					bucketEventConfig: (0, e.BC)`/accounts/${"accountId"}/event_notifications/r2/${"bucketName"}/configuration`,
					bucketEventConfigQueue: (0, e.BC)`/accounts/${"accountId"}/event_notifications/r2/${"bucketName"}/configuration/queues/${"queueId"}`,
					bucketLifecycle: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lifecycle`,
					bucketMultipartUploads: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/uploads`,
					bucketSippy: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/sippy`,
					apiTokens: (0, e.BC)`/user/tokens`,
					apiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					rollApiToken: (0, e.BC)`/user/tokens/${"tokenId"}/value`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					zones: (0, e.BC)`/zones`
				},
				u = t => {
					const r = "r2.cloudflarestorage.com";
					switch (t) {
						case "default":
							return r;
						case "eu":
							return `eu.${r}`
					}
				},
				m = (t, r) => {
					const i = u(r);
					return `https://${t}.${i}`
				},
				a = (t, r, i) => `${m(t,r)}/${i}`,
				g = () => "r2.dev",
				p = t => {
					const r = g();
					return `https://${t}.${r}`
				},
				h = (t, r) => `${p(t)}/${r}`
		},
		"../react/pages/security-center/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				R: function() {
					return e
				},
				v: function() {
					return o
				}
			});
			let e = function(c) {
				return c.LOAD_SCAN_INFO = "load url scan information", c.INITIATE_URL_SCAN = "initiate url scan", c
			}({});
			const o = {
				MANAGE_INSIGHT: "manage security insight",
				BULK_ARCHIVE: "bulk archive security insights",
				EXPAND_INSIGHT_ROW: "expand security issue row",
				CLICK_RESOLVE_BUTTON: "click resolve security issue button",
				FOLLOW_RESOLVE_URL: "follow security issue resolve url",
				CLICK_SCAN_NOW: "run security scan",
				CLICK_EXPORT_INSIGHTS: "click export insights"
			}
		},
		"../react/pages/spectrum/tracking.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o
			}({})
		},
		"../react/pages/traffic/argo/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o
			}({})
		},
		"../react/pages/traffic/load-balancing/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE = "create waiting room", o.UPDATE = "update waiting room", o.EVENTS = "view waiting rooms events", o.ANALYTICS = "view waiting room analytics", o.GENERATE_PREVIEW = "generate waiting room preview link", o
			}({})
		},
		"../react/pages/welcome/routes.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				d: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				default: (0, e.BC)`/${"accountId"}/`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`
			}
		},
		"../react/pages/zoneless-workers/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				CI: function() {
					return M
				},
				IS: function() {
					return g
				},
				L7: function() {
					return m
				},
				Oj: function() {
					return i
				},
				QV: function() {
					return d
				},
				X$: function() {
					return S
				},
				X6: function() {
					return h
				},
				fE: function() {
					return p
				},
				im: function() {
					return E
				},
				rL: function() {
					return t
				},
				wW: function() {
					return a
				}
			});

			function e(x) {
				for (var k = 1; k < arguments.length; k++) {
					var L = arguments[k] != null ? Object(arguments[k]) : {},
						te = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(L).filter(function(X) {
						return Object.getOwnPropertyDescriptor(L, X).enumerable
					})), te.forEach(function(X) {
						o(x, X, L[X])
					})
				}
				return x
			}

			function o(x, k, L) {
				return k = c(k), k in x ? Object.defineProperty(x, k, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[k] = L, x
			}

			function c(x) {
				var k = u(x, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function u(x, k) {
				if (typeof x != "object" || x === null) return x;
				var L = x[Symbol.toPrimitive];
				if (L !== void 0) {
					var te = L.call(x, k || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(x)
			}
			const m = {
					documentation: {
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
						kvBindings: "https://developers.cloudflare.com/workers/runtime-apis/kv#kv-bindings",
						kvNamespaces: "https://developers.cloudflare.com/workers/reference/storage/namespaces/",
						envVars: "https://developers.cloudflare.com/workers/reference/apis/environment-variables/",
						api: "https://workers.cloudflare.com/docs/reference/tooling/api",
						scheduledEventListener: "https://developers.cloudflare.com/workers/runtime-apis/add-event-listener#scheduled-listener",
						errors: "https://developers.cloudflare.com/workers/platform/limits",
						cpuLimits: "https://developers.cloudflare.com/workers/platform/limits/#cpu-runtime",
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
							browserRendering: "https://developers.cloudflare.com/browser-rendering",
							d1: "https://developers.cloudflare.com/d1",
							dispatchNamespace: "https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/get-started/configuration",
							durableObjects: "https://developers.cloudflare.com/durable-objects",
							hyperdrive: "https://developers.cloudflare.com/hyperdrive",
							kv: "https://developers.cloudflare.com/kv",
							mTLS: "https://developers.cloudflare.com/workers/runtime-apis/bindings/mtls",
							queues: "https://developers.cloudflare.com/queues/configuration/javascript-apis",
							r2: "https://developers.cloudflare.com/r2/api/workers/workers-api-reference",
							rateLimiting: "https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit",
							service: "https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings",
							vectorize: "https://developers.cloudflare.com/vectorize/reference/client-api",
							versionMetadata: "https://developers.cloudflare.com/workers/runtime-apis/bindings/version-metadata"
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
							root: "https://developers.cloudflare.com/workers/about/metrics",
							requestsTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#requests",
							cpuTimeTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#cpu-time-per-execution",
							durationTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#duration-per-execution",
							requestDurationTimeseries: "https://developers.cloudflare.com/workers/learning/metrics-and-analytics/#request-duration",
							dataEgressTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#data-egress",
							invocationStatuses: "https://developers.cloudflare.com/workers/about/metrics/#invocation-statuses"
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
						gradualRollouts: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/gradual-deployments",
						rollbacks: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/rollbacks",
						moduleSyntax: "https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/#migrate-from-service-workers-to-es-modules",
						configureQueues: "https://developers.cloudflare.com/queues/configuration/configure-queues/"
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
				a = 800,
				g = "40rem",
				p = {
					pricing: {
						requests: .15,
						duration: 12.5,
						egress: .045,
						storage: .2,
						read_units: .2,
						write_units: 1,
						delete: 1,
						currency: "USD"
					}
				},
				h = {
					d1_included_capacity: 5e9,
					d1_included_read_count: 25e9,
					d1_included_write_count: 5e7,
					pricing: {
						storage: .75,
						read_units: .001,
						write_units: 1
					}
				},
				t = {
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
					}, t),
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
				d = {
					enableWorkers: "enable workers",
					setupSubdomain: "set up subdomain",
					selectPlan: "select workers plan",
					selectTemplate: "select workers template",
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
					clickedDiscordLink: "clicked sidebar Discord link",
					clickedCommunityLink: "clicked sidebar Community Forum link",
					clickDetailTab: "click worker detail tab",
					clickedBundledUsageModel: "Workers:Clicked Bundled Usage Model",
					clickedUnboundUsageModel: "Workers:Clicked Unbound Usage Model",
					clickedGreenComputeSetting: "Workers:Clicked Green Compute Setting",
					clickedGlobalComputeSetting: "Workers:Clicked Global Compute Setting"
				},
				s = "workers.dev",
				E = "YYYY-MM-DD HH:mm:SS ZZ",
				f = "active",
				S = ["bundled", "unbound", "standard"],
				U = null,
				M = {
					bandaWorkersCI: "banda-workers-ui"
				}
		},
		"../react/pages/zoneless-workers/routes.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return g
				},
				L: function() {
					return c
				},
				Q9: function() {
					return u
				},
				_j: function() {
					return m
				},
				ky: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = p => `${p}.workers.dev`,
				c = (p, h, t) => `${t?`${t}.`:""}${p}.${o(h)}`,
				u = (p, h, t) => `https://${c(p,h,t)}`,
				m = {
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
					createService: (0, e.BC)`/${"accountId"}/workers/services/new`,
					manageService: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					renameService: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/rename`,
					serviceDetailsRoot: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}`,
					serviceDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}`,
					serviceDetailsBuildDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/builds/${"build_uuid"}`,
					serviceDetailsDeployments: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/deployments`,
					serviceDetailsIntegrationsFlow: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/${"integrationId"}/integrations-setup`,
					serviceDetailsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/triggers`,
					serviceDetailsIntegrations: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/integrations`,
					serviceDetailsSettings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings`,
					serviceDetailsSettingsGeneral: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/general`,
					serviceDetailsSettingsBindings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/bindings`,
					serviceDetailsSettingsBuilds: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/builds`,
					serviceDetailsSettingsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/triggers`,
					serviceDetailsLogs: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs`,
					serviceDetailsLogsLive: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/live`,
					serviceDetailsLogpush: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/logpush`,
					serviceDetailsLogsCron: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/cron`,
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
					emailRouting: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes`,
					emailRoutingRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes/${"ruleId"}`,
					zones: (0, e.BC)`/${"accountId"}`,
					developerPlatform_workers_create: (0, e.BC)`/${"accountId"}/developer-platform/workers/onboarding`,
					developerPlatform_workers_success: (0, e.BC)`/${"accountId"}/developer-platform/workers/success`,
					logpush: (0, e.BC)`/${"accountId"}/logs`,
					members: (0, e.BC)`/${"accountId"}/members`
				},
				a = "https://cron-triggers.cloudflareworkers.com",
				g = {
					accountMtlsCertificates: (0, e.BC)`/accounts/${"accountId"}/mtls_certificates`,
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/workers/account-settings`,
					builds: {
						build: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}`,
						buildLogLines: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/logs`,
						buildsByScriptId: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/builds`,
						buildTokens: (0, e.BC)`/accounts/${"accountId"}/builds/tokens`,
						repoConnections: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections`,
						repoConnection: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections/${"repo_connection_uuid"}`,
						triggers: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections/${"repo_connection_uuid"}/triggers`,
						trigger: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections/${"repo_connection_uuid"}/triggers/${"trigger_uuid"}`,
						workerTriggers: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/triggers`
					},
					certificates: (0, e.BC)`/zones/${"zoneId"}/ssl/certificate_packs/${"certId"}`,
					createApiToken: (0, e.BC)`/user/tokens`,
					createTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails`,
					deleteApiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					deleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails/${"tailId"}`,
					deployments: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/deployments`,
					describeCron: `${a}/describe`,
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
					enableDurableObjects: (0, e.BC)`/accounts/${"accountId"}/flags/products/edgeworker/changes`,
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
					kvRequestMetrics: (0, e.BC)`/accounts/${"accountId"}/storage/analytics`,
					kvStorageMetrics: (0, e.BC)`/accounts/${"accountId"}/storage/analytics/stored`,
					newVersions: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/versions`,
					nextCron: `${a}/next`,
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
					validateCron: `${a}/validate`,
					versions: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}`,
					version: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}/detail/${"versionTag"}`,
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/shims/focus-visible.js": function() {
			(function(W, v) {
				v()
			})(this, function() {
				"use strict";

				function W() {
					var n = !0,
						e = !1,
						o = null,
						c = {
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

					function u(f) {
						return !!(f && f !== document && f.nodeName !== "HTML" && f.nodeName !== "BODY" && "classList" in f && "contains" in f.classList)
					}

					function m(f) {
						var S = f.type,
							U = f.tagName;
						return !!(U == "INPUT" && c[S] && !f.readOnly || U == "TEXTAREA" && !f.readOnly || f.isContentEditable)
					}

					function a(f) {
						f.getAttribute("is-focus-visible") !== "" && f.setAttribute("is-focus-visible", "")
					}

					function g(f) {
						f.getAttribute("is-focus-visible") === "" && f.removeAttribute("is-focus-visible")
					}

					function p(f) {
						u(document.activeElement) && a(document.activeElement), n = !0
					}

					function h(f) {
						n = !1
					}

					function t(f) {
						!u(f.target) || (n || m(f.target)) && a(f.target)
					}

					function r(f) {
						!u(f.target) || f.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), g(f.target))
					}

					function i(f) {
						document.visibilityState == "hidden" && (e && (n = !0), d())
					}

					function d() {
						document.addEventListener("mousemove", E), document.addEventListener("mousedown", E), document.addEventListener("mouseup", E), document.addEventListener("pointermove", E), document.addEventListener("pointerdown", E), document.addEventListener("pointerup", E), document.addEventListener("touchmove", E), document.addEventListener("touchstart", E), document.addEventListener("touchend", E)
					}

					function s() {
						document.removeEventListener("mousemove", E), document.removeEventListener("mousedown", E), document.removeEventListener("mouseup", E), document.removeEventListener("pointermove", E), document.removeEventListener("pointerdown", E), document.removeEventListener("pointerup", E), document.removeEventListener("touchmove", E), document.removeEventListener("touchstart", E), document.removeEventListener("touchend", E)
					}

					function E(f) {
						f.target.nodeName.toLowerCase() !== "html" && (n = !1, s())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", h, !0), document.addEventListener("pointerdown", h, !0), document.addEventListener("touchstart", h, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", i, !0), d(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function v(n) {
					var e;

					function o() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && v(W)
			})
		},
		"../react/utils/api.ts": function(W, v, n) {
			"use strict";
			n.r(v), n.d(v, {
				attachAtokHeader: function() {
					return S
				},
				attachErrorHandler: function() {
					return x
				},
				authyAuthConfirmNumber: function() {
					return R
				},
				authyAuthPutSave: function() {
					return ae
				},
				basePath: function() {
					return E
				},
				fetchCertificateApiKey: function() {
					return G
				},
				fetchUserServiceKey: function() {
					return H
				},
				performLogout: function() {
					return Q
				},
				prependApiRoute: function() {
					return U
				},
				sendCookies: function() {
					return M
				},
				twoFacDisableDelete: function() {
					return $
				},
				twoFacGoogleAuthEnablePost: function() {
					return Y
				},
				twoFacGoogleAuthQRCodeGet: function() {
					return C
				},
				updateCertificateApiKey: function() {
					return j
				},
				updateUserServiceKey: function() {
					return V
				},
				validateOptions: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e),
				c = n("../react/app/providers/storeContainer.js"),
				u = n("../react/common/actions/notificationsActions.ts"),
				m = n("../react/utils/translator.tsx"),
				a = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				g = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				h = n.n(p),
				t = n("../../../../node_modules/@sentry/core/esm/exports.js");

			function r(z) {
				for (var P = 1; P < arguments.length; P++) {
					var _ = arguments[P] != null ? Object(arguments[P]) : {},
						b = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(_).filter(function(I) {
						return Object.getOwnPropertyDescriptor(_, I).enumerable
					})), b.forEach(function(I) {
						i(z, I, _[I])
					})
				}
				return z
			}

			function i(z, P, _) {
				return P = d(P), P in z ? Object.defineProperty(z, P, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[P] = _, z
			}

			function d(z) {
				var P = s(z, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function s(z, P) {
				if (typeof z != "object" || z === null) return z;
				var _ = z[Symbol.toPrimitive];
				if (_ !== void 0) {
					var b = _.call(z, P || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(z)
			}
			const E = "/api/v4",
				f = z => {
					z.url.charAt(0) !== "/" && (z.url = `/${z.url}`)
				},
				S = z => {
					n.g.bootstrap && n.g.bootstrap.atok && (z.headers = r({}, z.headers, {
						"X-ATOK": n.g.bootstrap.atok
					}))
				},
				U = z => {
					z.url = E + z.url
				},
				M = z => {
					z.credentials = "same-origin"
				},
				x = z => {
					const P = z.callback;
					z.callback = (_, b) => {
						_ && !z.hideErrorAlert && k(_, z), P && P(_, b)
					}
				},
				k = (z, P) => {
					const _ = z.body && z.body.errors;
					(_ ? te(P, _) : X(P, z)).forEach(I => {
						(0, c.bh)().dispatch(u.IH("error", typeof I == "string" ? I : I.message)), h().sendEvent("error notification shown", {
							errorCode: typeof I == "string" ? void 0 : I.code
						}), {
							REDUX_LOGGER: void 0
						}.TESTING && n.g.logAppError(typeof I == "string" ? I : I.message)
					})
				};

			function L(z, P) {
				return !!(P.code === 1001 && z.url && z.url.match(/subscription/gi) || P.code === 10042 && z.url && z.url.match(/r2/gi))
			}
			const te = (z, P) => P.filter(_ => !L(z, _)).map(({
					message: _,
					code: b,
					error_chain: I
				}) => {
					switch (b) {
						case 9300:
						case 9301:
						case 9303:
							Q();
						default:
							break
					}
					const Z = _.split(" ").length > 1,
						ne = _.split(".").length > 1,
						D = !Z && ne;
					let q = _;
					if (D) try {
						q = (0, m.ZP)(_)
					} catch {}
					if (_.startsWith("billing.")) return {
						message: `Error while processing payment: ${q}.`,
						code: b
					};
					const N = Array.isArray(I) ? I.map(ie => ie.message).join(". ") : "";
					return {
						message: `${q}${typeof b!="undefined"?` (Code: ${b})`:""} ${N}`,
						code: b
					}
				}),
				X = (z, P) => [`API Request Failed: ${z.method} ${z.url} (${P.status})`];
			e.beforeSend(f), e.beforeSend(S), e.beforeSend(U), e.beforeSend(M), e.beforeSend(x);
			const Q = z => e.del("/user/sessions/current").then(P => {
				if (a.E.remove(g.Qq), z) window.location.href = z;
				else {
					var _, b;
					const I = (_ = (b = P.body.result) === null || b === void 0 ? void 0 : b.redirect_uri) !== null && _ !== void 0 ? _ : "/login";
					window.location.href = I
				}
			}).catch(P => {
				console.error("Failed to logout", P), t.Tb(P)
			});

			function H(z) {
				return e.get("/user/service_keys/" + z)
			}

			function V(z, P) {
				return e.put("/user/service_keys/" + z, {
					body: P
				})
			}

			function G(z) {
				return e.post("/user/service_keys/certificateapi", {
					body: z
				})
			}

			function j(z) {
				return e.put("/user/service_keys/certificateapi", {
					body: z
				})
			}
			const Y = function(z, P) {
					var _ = {
						google_auth_code: z
					};
					return e.post("/user/two_factor_authentication/google_authenticator/enable", {
						body: _
					}, P)
				},
				C = function(z) {
					return e.get("/user/two_factor_authentication/google_authenticator/qr_code", void 0, z)
				},
				$ = function(z, P) {
					var _ = {
						auth_token: z
					};
					return e.del("/user/two_factor_authentication", {
						body: _
					}, P)
				},
				R = function(z, P) {
					return e.post("/user/two_factor_authentication", {
						body: z
					}, P)
				},
				ae = function(z, P) {
					return e.put("/user/two_factor_authentication", {
						body: z
					}, P)
				}
		},
		"../react/utils/bootstrap.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				$8: function() {
					return o
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return u
				},
				gm: function() {
					return c
				}
			});
			const e = () => {
					var m, a, g;
					return (m = window) === null || m === void 0 || (a = m.bootstrap) === null || a === void 0 || (g = a.data) === null || g === void 0 ? void 0 : g.security_token
				},
				o = () => {
					var m, a, g;
					return !!((m = n.g.bootstrap) === null || m === void 0 || (a = m.data) === null || a === void 0 || (g = a.user) === null || g === void 0 ? void 0 : g.id)
				},
				c = () => {
					var m, a;
					return !!((m = n.g.bootstrap) === null || m === void 0 || (a = m.data) === null || a === void 0 ? void 0 : a.is_kendo)
				},
				u = () => {
					var m, a, g, p;
					return (m = window) === null || m === void 0 || (a = m.bootstrap) === null || a === void 0 || (g = a.data) === null || g === void 0 || (p = g.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				O5: function() {
					return u
				},
				Xm: function() {
					return c
				},
				kT: function() {
					return g
				},
				wV: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var t;
					return ((t = window) === null || t === void 0 ? void 0 : t.OnetrustActiveGroups) || ""
				},
				c = () => (o() || "").indexOf("C0002") !== -1,
				u = () => (o() || "").indexOf("C0003") !== -1,
				m = () => (o() || "").indexOf("C0004") !== -1,
				a = () => (o() || "").indexOf("C0005") !== -1,
				g = t => {
					const r = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				p = () => {
					var t;
					const r = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				h = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				AI: function() {
					return S
				},
				S8: function() {
					return f
				},
				ZW: function() {
					return a
				},
				ay: function() {
					return U
				},
				fh: function() {
					return M
				},
				ly: function() {
					return p
				},
				th: function() {
					return m
				},
				ti: function() {
					return h
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				c = n("../../../common/intl/intl-types/src/index.ts"),
				u = n("../../../common/util/types/src/utils/index.ts");
			const m = "cf-sync-locale-with-cps",
				a = c.Q.en_US,
				g = "en_US",
				p = "cf-locale",
				h = te => (0, u.Yd)(c.Q).find(X => c.Q[X] === te) || g,
				t = [],
				r = [],
				i = [c.Q.de_DE, c.Q.en_US, c.Q.es_ES, c.Q.fr_FR, c.Q.it_IT, c.Q.pt_BR, c.Q.ko_KR, c.Q.ja_JP, c.Q.zh_CN, c.Q.zh_TW],
				d = [c.Q.de_DE, c.Q.en_US, c.Q.es_ES, c.Q.es_CL, c.Q.es_EC, c.Q.es_MX, c.Q.es_PE, c.Q.fr_FR, c.Q.it_IT, c.Q.ja_JP, c.Q.ko_KR, c.Q.pt_BR, c.Q.zh_CN, c.Q.zh_TW],
				s = {
					test: [...i, ...r, ...t],
					development: [...i, ...r, ...t],
					staging: [...i, ...r, ...t],
					production: [...i, ...r]
				},
				E = {
					test: [...d, ...r, ...t],
					development: [...d, ...r, ...t],
					staging: [...d, ...r, ...t],
					production: [...d, ...r]
				},
				f = (te, X) => {
					const Q = c.Q[X];
					return te ? s.production.includes(Q) : E.production.includes(Q)
				},
				S = te => Object.keys(c.Q).filter(X => f(te, X)),
				U = te => {
					const X = c.Q[te];
					return r.includes(X)
				},
				M = (te, X) => te ? x[X] : k[X],
				x = {
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
				k = {
					de_DE: "Deutsch",
					en_US: "English (US)",
					es_CL: "Espa\xF1ol (Chile)",
					es_EC: "Espa\xF1ol (Ecuador)",
					es_ES: "Espa\xF1ol (Espa\xF1a)",
					es_MX: "Espa\xF1ol (Mexico)",
					es_PE: "Espa\xF1ol (Peru)",
					fr_FR: "Fran\xE7ais (France)",
					ja_JP: "\u65E5\u672C\u8A9E",
					ko_KR: "\uD55C\uAD6D\uC5B4(\uB300\uD55C\uBBFC\uAD6D)",
					it_IT: "Italiano (Italia)",
					pt_BR: "Portugu\xEAs (Brasil)",
					zh_CN: "\u7B80\u4F53\u4E2D\u6587",
					zh_TW: "\u4E2D\u6587 (\u53F0\u7063)"
				},
				L = o().locale();
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
			}), o().locale(L)
		},
		"../react/utils/translator.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				QT: function() {
					return d
				},
				Vb: function() {
					return g
				},
				Yi: function() {
					return h
				},
				ZP: function() {
					return a
				},
				_m: function() {
					return t
				},
				cC: function() {
					return r
				},
				oc: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = n("../../../common/intl/intl-core/src/Translator.ts"),
				c = n("../../../common/intl/intl-react/src/index.ts");
			const u = n("../flags.js").J8,
				m = new o.Z({
					pseudoLoc: u("is_pseudo_loc")
				});

			function a(s, ...E) {
				return m.t(s, ...E)
			}
			const g = m;

			function p(s, ...E) {
				return markdown(a(s, E))
			}

			function h(s) {
				if (Number(s) !== 0) {
					if (s % 86400 == 0) return a("time.num_days", {
						smart_count: s / 86400
					});
					if (s % 3600 == 0) return a("time.num_hours", {
						smart_count: s / 3600
					});
					if (s % 60 == 0) return a("time.num_minutes", {
						smart_count: s / 60
					})
				}
				return a("time.num_seconds", {
					smart_count: s
				})
			}

			function t(s, E) {
				return s in E ? E[s] : void 0
			}
			const r = c.cC,
				i = c.oc,
				d = c.QT
		},
		"../react/utils/url.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Ct: function() {
					return x
				},
				Fl: function() {
					return I
				},
				KT: function() {
					return ne
				},
				NF: function() {
					return E
				},
				Nw: function() {
					return U
				},
				Pd: function() {
					return S
				},
				Uh: function() {
					return P
				},
				Y_: function() {
					return s
				},
				e1: function() {
					return M
				},
				el: function() {
					return G
				},
				hW: function() {
					return Y
				},
				pu: function() {
					return Z
				},
				qR: function() {
					return V
				},
				td: function() {
					return f
				},
				uW: function() {
					return $
				}
			});
			var e = n("../../../../node_modules/query-string/query-string.js"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				u = n("../react/pages/stream/routes.ts"),
				m = n("../react/pages/r2/routes.ts"),
				a = n("../react/pages/zoneless-workers/routes.ts"),
				g = n("../react/pages/pages/routes.ts");

			function p(D) {
				for (var q = 1; q < arguments.length; q++) {
					var N = arguments[q] != null ? Object(arguments[q]) : {},
						ie = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(N).filter(function(pe) {
						return Object.getOwnPropertyDescriptor(N, pe).enumerable
					})), ie.forEach(function(pe) {
						h(D, pe, N[pe])
					})
				}
				return D
			}

			function h(D, q, N) {
				return q = t(q), q in D ? Object.defineProperty(D, q, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[q] = N, D
			}

			function t(D) {
				var q = r(D, "string");
				return typeof q == "symbol" ? q : String(q)
			}

			function r(D, q) {
				if (typeof D != "object" || D === null) return D;
				var N = D[Symbol.toPrimitive];
				if (N !== void 0) {
					var ie = N.call(D, q || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (q === "string" ? String : Number)(D)
			}
			const {
				endsWithSlash: i
			} = c.default, d = (D, q) => {
				const N = D.replace(i, "").split("/");
				return N.slice(0, 2).concat([q]).concat(N.slice(3)).join("/")
			}, s = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), E = D => `/${D.replace(i,"").replace(/^\//,"")}`, f = D => U("add-site", D), S = D => U("billing", D), U = (D, q) => q ? `/${q}${D?`/${D}`:""}` : `/?to=/:account/${D}`, M = () => {
				const D = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return D ? D[1] : null
			}, x = (D, q) => o().stringify(p({}, o().parse(D), q)), k = (D = "") => D.toString().replace(/([\/]{1,})$/, ""), L = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], te = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, X = /^\/(\w{32,})(\/[^.]*)?/, Q = D => L.includes(D), H = D => !Q(D), V = D => !Q(D) && X.test(D), G = D => !Q(D) && te.test(D), j = D => te.exec(D), Y = D => {
				if (G(D)) return D.split("/").filter(q => q.length > 0)[1]
			}, C = D => X.exec(D), $ = D => {
				if (V(D)) {
					const q = C(D);
					if (q) return q[1]
				}
			}, R = D => V(D) && D.split("/")[2] === "register-domain", ae = D => R(D) ? D.split("/") : null, z = D => {
				if (G(D)) {
					const [, , , q, N, ie, pe, ge] = D.split("/");
					return q === "traffic" && N === "load-balancing" && ie === "pools" && pe === "edit" && ge
				}
			}, P = D => {
				const q = ae(D);
				if (q) return q[3]
			}, _ = (D, q) => {
				var N, ie;
				return ((N = D.pattern.match(/\:/g)) !== null && N !== void 0 ? N : []).length - ((ie = q.pattern.match(/\:/g)) !== null && ie !== void 0 ? ie : []).length
			}, b = [...Object.values(u.C), ...Object.values(m._j), ...Object.values(a._j), ...Object.values(g._j)].sort(_);

			function I(D) {
				if (!H(D)) return D;
				for (const ge of b)
					if (ge.expression.test(D)) return ge.pattern;
				const q = ae(D);
				if (q) {
					const [, , ge, , ...ve] = q;
					return `/:accountId/${ge}/:domainName/${ve.join("/")}`
				}
				if (z(D)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const ie = j(D);
				if (ie) {
					const [, , , , ge] = ie;
					return `/:accountId/:zoneName${ge||""}`
				}
				const pe = C(D);
				if (pe) {
					const [, , ge] = pe;
					return `/:accountId${ge||""}`
				}
				return D
			}

			function Z(D) {
				if (!!D) try {
					const N = D.split(".").pop();
					if (N && N.length > 0) return N
				} catch {}
			}

			function ne(D, q = document.location.href) {
				try {
					const N = new URL(D),
						ie = new URL(q);
					if (N.origin === ie.origin) return `${N.pathname}${N.search}${N.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = n("../utils/zaraz.ts")
		},
		"../utils/getDashVersion.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				p: function() {
					return c
				},
				t: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var u, m;
					return (u = window) === null || u === void 0 || (m = u.build) === null || m === void 0 ? void 0 : m.dashVersion
				},
				c = () => {
					var u;
					return ((0, e.parse)((u = document) === null || u === void 0 ? void 0 : u.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Wi: function() {
					return Ze
				},
				IM: function() {
					return Xe
				},
				yV: function() {
					return xe
				},
				Ug: function() {
					return Ve
				},
				v_: function() {
					return $e
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				c = n("../react/utils/bootstrap.ts"),
				u = n("../react/app/providers/storeContainer.js"),
				m = n("../react/common/selectors/languagePreferenceSelector.ts"),
				a = n("../flags.js"),
				g = n("../../../../node_modules/cookie/index.js"),
				p = n("../react/utils/url.ts"),
				h = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../../../../node_modules/lodash-es/memoize.js"),
				i = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				d = n("../utils/getDashVersion.ts"),
				s = n("../react/common/selectors/accountSelectors.ts");

			function E(re) {
				for (var le = 1; le < arguments.length; le++) {
					var A = arguments[le] != null ? Object(arguments[le]) : {},
						B = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(A).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(A, oe).enumerable
					})), B.forEach(function(oe) {
						f(re, oe, A[oe])
					})
				}
				return re
			}

			function f(re, le, A) {
				return le = S(le), le in re ? Object.defineProperty(re, le, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : re[le] = A, re
			}

			function S(re) {
				var le = U(re, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function U(re, le) {
				if (typeof re != "object" || re === null) return re;
				var A = re[Symbol.toPrimitive];
				if (A !== void 0) {
					var B = A.call(re, le || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(re)
			}
			const M = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				x = (0, r.Z)(re => {
					try {
						return M.assertDecode((0, g.parse)(re))
					} catch (le) {
						return console.error(le), {}
					}
				}),
				k = re => (le, A, B) => {
					try {
						const Ie = window.location.pathname,
							Se = (0, u.bh)().getState(),
							fe = x(document.cookie),
							ke = E({
								page: (0, p.Fl)(B.page || window.location.pathname),
								dashVersion: (0, d.t)()
							}, fe);
						if (le === "identify") {
							var oe, be;
							const Ge = {
								gates: (0, i.T2)(Se) || {},
								country: (oe = n.g) === null || oe === void 0 || (be = oe.bootstrap) === null || be === void 0 ? void 0 : be.ip_country
							};
							return re(le, A, E({}, ke, Ge, B))
						} else {
							const Ge = {
								accountId: (0, p.uW)(Ie),
								zoneName: (0, p.hW)(Ie),
								domainName: (0, p.Uh)(Ie)
							};
							if ((0, p.qR)(Ie)) {
								var Pe;
								const Ae = (0, s.D0)(Se);
								Ge.isEntAccount = Ae == null || (Pe = Ae.meta) === null || Pe === void 0 ? void 0 : Pe.has_enterprise_zones
							}
							if ((0, p.el)(Ie)) {
								var Oe;
								const Ae = (0, h.nA)(Se);
								Ge.zoneId = Ae == null ? void 0 : Ae.id, Ge.plan = Ae == null || (Oe = Ae.plan) === null || Oe === void 0 ? void 0 : Oe.legacy_id
							}
							return re(le, A, E({}, ke, Ge, B))
						}
					} catch (Ie) {
						return console.error(Ie), re(le, A, B)
					}
				},
				L = re => async (le, A, B) => {
					try {
						return await re(le, A, B)
					} catch (oe) {
						if (console.error(oe), !$e()) throw oe;
						return {
							status: "rejected",
							reason: oe
						}
					}
				};
			var te = n("../react/common/middleware/sparrow/errors.ts"),
				X = n("../react/pages/firewall/bots/tracking.ts"),
				Q = n("../react/pages/caching/tracking.tsx"),
				H = n("../react/pages/magic/packet-captures/constants.ts"),
				V = n("../react/pages/firewall/page-shield/tracking.ts"),
				G = n("../react/pages/firewall/rulesets/tracking.tsx"),
				j = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Y = n("../react/pages/spectrum/tracking.tsx"),
				C = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				$ = n("../react/pages/security-center/tracking.ts"),
				R = n("../react/pages/firewall/api-shield/tracking.ts"),
				ae = n("../react/pages/home/configurations/lists/tracking.ts"),
				z = n("../react/pages/traffic/load-balancing/tracking.ts"),
				P = n("../react/pages/home/alerts/tracking.ts"),
				_ = n("../react/pages/dns/dns-records/tracking.ts"),
				b = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				I = n("../react/pages/traffic/argo/tracking.ts"),
				Z = n("../react/pages/magic/network-monitoring/constants.ts"),
				ne = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				D = n("../react/pages/magic/overview/tracking.ts"),
				q = n("../react/pages/hyperdrive/tracking.ts"),
				N = n("../react/pages/home/domain-registration/tracking.ts"),
				ie = n("../react/pages/zoneless-workers/constants.ts"),
				pe = n("../react/pages/pages/constants.ts");
			const ve = ((re, le, ...A) => t.eg.union([t.eg.literal(re), t.eg.literal(le), ...A.map(B => t.eg.literal(B))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click cancel downgrade", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create database dropdown", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on edit snippet", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open configuration switcher sidemodal", "open create database panel", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", ie.QV.clickedDownloadAnalytics, ie.QV.clickedPrintAnalytics, ie.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", pe.QV.toggledPagesSmartPlacement, pe.QV.downloadDemoProject, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", X.N3.INITIAL_FETCH_SCORES, X.N3.FETCH_CONFIGURATION, X.N3.INITIAL_FETCH_TIME_SERIES, X.N3.INITIAL_FETCH_ATTRIBUTES, X.N3.UPDATE_SETTINGS, X.N3.DELETE_RULE, X.N3.UPDATE_RULE, X.N3.FETCH_RULES, X.N3.CONFIGURE_BOT_MANAGEMENT, X.N3.WAF_RULES_REDIRECT, C.F.TOGGLE_TCP_PROTECTION, C.F.GET_TCP_PROTECTION_PREFIXES, C.F.CREATE_TCP_PROTECTION_PREFIXES, C.F.CREATE_TCP_PROTECTION_PREFIX, C.F.UPDATE_TCP_PROTECTION_PREFIX, C.F.DELETE_TCP_PROTECTION_PREFIX, C.F.DELETE_TCP_PROTECTION_PREFIXES, C.F.GET_TCP_PROTECTION_ALLOWLIST, C.F.CREATE_TCP_PROTECTION_ALLOWLIST, C.F.UPDATE_TCP_PROTECTION_ALLOWLIST, C.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, C.F.DELETE_TCP_PROTECTION_ALLOWLIST, C.F.GET_SYN_PROTECTION_RULES, C.F.GET_SYN_PROTECTION_RULE, C.F.CREATE_SYN_PROTECTION_RULE, C.F.UPDATE_SYN_PROTECTION_RULE, C.F.DELETE_SYN_PROTECTION_RULE, C.F.GET_TCP_FLOW_PROTECTION_RULES, C.F.GET_TCP_FLOW_PROTECTION_RULE, C.F.CREATE_TCP_FLOW_PROTECTION_RULE, C.F.UPDATE_TCP_FLOW_PROTECTION_RULE, C.F.DELETE_TCP_FLOW_PROTECTION_RULE, C.F.GET_SYN_PROTECTION_FILTERS, C.F.GET_SYN_PROTECTION_FILTER, C.F.CREATE_SYN_PROTECTION_FILTER, C.F.UPDATE_SYN_PROTECTION_FILTER, C.F.DELETE_SYN_PROTECTION_FILTER, C.F.GET_TCP_FLOW_PROTECTION_FILTERS, C.F.GET_TCP_FLOW_PROTECTION_FILTER, C.F.CREATE_TCP_FLOW_PROTECTION_FILTER, C.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, C.F.DELETE_TCP_FLOW_PROTECTION_FILTER, C.F.GET_DNS_PROTECTION_RULES, C.F.GET_DNS_PROTECTION_RULE, C.F.CREATE_DNS_PROTECTION_RULE, C.F.UPDATE_DNS_PROTECTION_RULE, C.F.DELETE_DNS_PROTECTION_RULE, V.F.MANAGE_PAGE_SHIELD_POLICY, V.F.CONFIGURE_PAGE_SHIELD, V.F.VIEW_DETECTED_CONNECTIONS, V.F.VIEW_DETECTED_SCRIPTS, V.F.VIEW_PAGE_SHIELD_POLICIES, V.F.VIEW_PAGE_SHIELD_SETTINGS, ae.y.CREATE_LIST, ae.y.DELETE_LIST, ae.y.ADD_LIST_ITEM, ae.y.DELETE_LIST_ITEM, q.KO.PURCHASE_WORKERS_PAID, q.KO.LIST_CONFIGS, q.KO.CREATE_HYPERDRIVE_CONFIG, q.KO.VIEW_CONFIG_DETAILS, q.KO.UPDATE_CACHING_SETTINGS, q.KO.DELETE_HYPERDRIVE_CONFIG, q.KO.CLICK_HYPERDRIVE_DOCUMENTATION, q.KO.CLICK_GET_STARTED_GUIDE, q.KO.CLICK_CONNECTIVITY_GUIDES, q.KO.CLICK_QUICK_LINK, Y.N.CNAME, Y.N.IP_ADDRESS, Y.N.LB, Y.N.UPDATE_CNAME, Y.N.UPDATE_IP_ADDRESS, Y.N.UPDATE_LB, Y.N.DISABLE, Q.N.TIERED_CACHE, Q.N.CACHE_PURGE, Q.N.CACHE_ANALYTICS, ...(0, G.x4)(), j.N.CREATE, j.N.EVENTS, j.N.ANALYTICS, j.N.UPDATE, j.N.GENERATE_PREVIEW, $.R.INITIATE_URL_SCAN, $.R.LOAD_SCAN_INFO, $.v.EXPAND_INSIGHT_ROW, $.v.CLICK_RESOLVE_BUTTON, $.v.FOLLOW_RESOLVE_URL, $.v.MANAGE_INSIGHT, $.v.CLICK_SCAN_NOW, $.v.CLICK_EXPORT_INSIGHTS, $.v.BULK_ARCHIVE, R.Fj[R.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, R.Fj[R.kq.ENDPOINT_MANAGEMENT].detailedMetrics, R.Fj[R.kq.ENDPOINT_MANAGEMENT].createEndpoint, R.Fj[R.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, R.Fj[R.kq.ENDPOINT_MANAGEMENT].deployRouting, R.Fj[R.kq.ENDPOINT_MANAGEMENT].deleteRouting, R.Fj[R.kq.API_DISCOVERY].viewDiscoveredEndpoints, R.Fj[R.kq.API_DISCOVERY].saveDiscoveredEndpoint, R.Fj[R.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, R.Fj[R.kq.SCHEMA_VALIDATION].viewSchemasList, R.Fj[R.kq.SCHEMA_VALIDATION].uploadSchema, R.Fj[R.kq.SCHEMA_VALIDATION].viewSchemaAdoption, R.Fj[R.kq.SCHEMA_VALIDATION].downloadSchema, R.Fj[R.kq.SCHEMA_VALIDATION].deleteSchema, R.Fj[R.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, R.Fj[R.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, R.Fj[R.kq.SEQUENCE_ANALYTICS].viewSequencesPage, R.Fj[R.kq.JWT_VALIDATION].viewJWTRules, R.Fj[R.kq.JWT_VALIDATION].addJWTRule, R.Fj[R.kq.JWT_VALIDATION].editJWTRule, R.Fj[R.kq.JWT_VALIDATION].deleteJWTRule, R.Fj[R.kq.JWT_VALIDATION].reprioritizeJWTRule, R.Fj[R.kq.JWT_VALIDATION].viewJWTConfigs, R.Fj[R.kq.JWT_VALIDATION].addJWTConfig, R.Fj[R.kq.JWT_VALIDATION].editJWTConfig, R.Fj[R.kq.JWT_VALIDATION].deleteJWTConfig, R.Fj[R.kq.SETTINGS].redirectToFirewallRulesTemplate, R.Fj[R.kq.SETTINGS].redirectToPages, R.Fj[R.kq.SETTINGS].listSessionIdentifiers, R.Fj[R.kq.SETTINGS].listRequestsContainingSessionIdentifiers, R.Fj[R.kq.SETTINGS].addOrRemoveSessionIdentifiers, R.Fj[R.kq.SEQUENCE_RULES].listSequenceRules, R.Fj[R.kq.SEQUENCE_RULES].deleteSequenceRule, R.Fj[R.kq.SEQUENCE_RULES].reorderSequenceRule, R.Fj[R.kq.SEQUENCE_RULES].createSequenceRule, R.Fj[R.kq.SEQUENCE_RULES].editSequenceRule, z.Z.CREATE_AND_DEPLOY, z.Z.ANALYTICS, P.y.SECONDARY_DNS_NOTIFICATION_CREATE, P.y.SECONDARY_DNS_NOTIFICATION_UPDATE, P.y.SECONDARY_DNS_NOTIFICATION_DELETE, _.U.ZONE_TRANSFER_SUCCESS, _.U.DNS_RECORD_CREATE, _.U.DNS_RECORD_UPDATE, _.U.DNS_RECORD_DELETE, b.Y.PEER_DNS_CREATE, b.Y.PEER_DNS_UPDATE, b.Y.PEER_DNS_DELETE, b.Y.ZONE_TRANSFER_ENABLE, b.Y.ZONE_TRANSFER_DISABLE, I.V.ARGO_ENABLEMENT, I.V.ARGO_GEO_ANALYTICS_FETCH, I.V.ARGO_GLOBAL_ANALYTICS_FETCH, H.X.VIEW_BUCKETS_LIST, H.X.CREATE_BUCKET, H.X.VALIDATE_BUCKET, H.X.DELETE_BUCKET, H.X.VIEW_CAPTURES_LIST, H.X.CREATE_SIMPLE_CAPTURE, H.X.CREATE_FULL_CAPTURE, H.X.VIEW_FULL_CAPTURE, H.X.DOWNLOAD_SIMPLE_CAPTURE, Z.bK.VIEW_RULES, Z.bK.CREATE_RULE, Z.bK.UPDATE_RULE, Z.bK.DELETE_RULE, Z.bK.VIEW_CONFIGURATION, Z.bK.CREATE_CONFIGURATION, Z.bK.UPDATE_CONFIGURATION, Z.bK.DELETE_CONFIGURATION, D.r8.VIEW_ALERTS, D.r8.VIEW_ALERTS_HISTORY, D.r8.MAGIC_OVERVIEW_ANALYTICS, ne.o4.CLICK_ADAPTIVE_SAMPLING, ne.o4.CLICK_TO_LOG_EXPLORER_BANNER, ne.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, ne.o4.CLICK_SWITCH_TO_RAW_LOGS, ne.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", N.U.REGISTER_DOMAIN_SEARCH_SUBMIT, N.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, N.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, N.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, N.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, N.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, N.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, N.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, N.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, N.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, N.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, N.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, N.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, N.U.REGISTER_DOMAIN_CHECKOUT_ERROR, N.U.TRANSFER_DOMAIN_CHANGE_STEP, N.U.RENEW_DOMAIN_COMPLETED, N.U.RESTORE_DOMAIN_INIT, N.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, N.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, N.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, N.U.RESTORE_DOMAIN_FAILURE, N.U.RESTORE_DOMAIN_COMPLETED, N.U.DOMAIN_DELETE_INIT, N.U.DOMAIN_DELETE_COMPLETED, N.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, N.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, N.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, N.U.DOMAIN_DELETE_CONFIRM_DELETE, N.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, N.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, N.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, N.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, N.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL),
				Re = t.eg.exactStrict(t.eg.object({
					".agency": t.eg.any.optional,
					".auction": t.eg.any.optional,
					".bet": t.eg.any.optional,
					".center": t.eg.any.optional,
					".church": t.eg.any.optional,
					".com": t.eg.any.optional,
					".community": t.eg.any.optional,
					".energy": t.eg.any.optional,
					".fitness": t.eg.any.optional,
					".guru": t.eg.any.optional,
					".io": t.eg.any.optional,
					".info": t.eg.any.optional,
					".immo": t.eg.any.optional,
					".lgbt": t.eg.any.optional,
					".life": t.eg.any.optional,
					".live": t.eg.any.optional,
					".media": t.eg.any.optional,
					".mobi": t.eg.any.optional,
					".net": t.eg.any.optional,
					".network": t.eg.any.optional,
					".ninja": t.eg.any.optional,
					".online": t.eg.any.optional,
					".org": t.eg.any.optional,
					".photography": t.eg.any.optional,
					".plus": t.eg.any.optional,
					".press": t.eg.any.optional,
					".pro": t.eg.any.optional,
					".services": t.eg.any.optional,
					".store": t.eg.any.optional,
					".tech": t.eg.any.optional,
					".wiki": t.eg.any.optional,
					".wtf": t.eg.any.optional,
					".xyz": t.eg.any.optional,
					_lpchecked: t.eg.any.optional,
					a: t.eg.any.optional,
					absolute: t.eg.any.optional,
					access: t.eg.any.optional,
					access_users_allowed: t.eg.any.optional,
					account: t.eg.any.optional,
					accountId: t.eg.any.optional,
					"accountResolver/SELECT_ACCOUNT": t.eg.any.optional,
					"accountResolver/NO_ACTION": t.eg.any.optional,
					accountResolverTotalCpuTime: t.eg.any.optional,
					accountResolverTotalTime: t.eg.any.optional,
					accountResolverTotalUserActionsTime: t.eg.any.optional,
					action: t.eg.any.optional,
					addedRecords: t.eg.any.optional,
					addon: t.eg.any.optional,
					address: t.eg.any.optional,
					argo_accelerated_gigabytes: t.eg.any.optional,
					"aria-current": t.eg.any.optional,
					"aria-controls": t.eg.any.optional,
					"aria-label": t.eg.any.optional,
					"aria-selected": t.eg.any.optional,
					authHeaders: t.eg.any.optional,
					autocomplete: t.eg.any.optional,
					autoRenew: t.eg.any.optional,
					autoSetup: t.eg.any.optional,
					b: t.eg.any.optional,
					buckets: t.eg.string.optional,
					banner: t.eg.any.optional,
					bot_management: t.eg.any.optional,
					brokenExpression: t.eg.any.optional,
					bundle: t.eg.any.optional,
					c: t.eg.any.optional,
					cacheKey: t.eg.any.optional,
					cache_by_device_type: t.eg.any.optional,
					cache_rules: t.eg.any.optional,
					campaignId: t.eg.any.optional,
					campaignID: t.eg.any.optional,
					cancelled: t.eg.any.optional,
					category: t.eg.any.optional,
					cd43: t.eg.any.optional,
					cd45: t.eg.any.optional,
					cd47: t.eg.any.optional,
					certificate_pack_id: t.eg.any.optional,
					certificate_pack_type: t.eg.any.optional,
					cf: t.eg.any.optional,
					cfPlan: t.eg.any.optional,
					chartName: t.eg.any.optional,
					charts: t.eg.any.optional,
					childrenCount: t.eg.any.optional,
					childrenSelected: t.eg.any.optional,
					class: t.eg.any.optional,
					code0: t.eg.any.optional,
					columnName: t.eg.string.optional,
					completedTasks: t.eg.any.optional,
					component: t.eg.any.optional,
					component_values: t.eg.any.optional,
					configuration_rules: t.eg.any.optional,
					contentfulId: t.eg.any.optional,
					country: t.eg.any.optional,
					currentCA: t.eg.any.optional,
					currentPerPage: t.eg.any.optional,
					currentPage: t.eg.any.optional,
					d: t.eg.any.optional,
					"data-children-count": t.eg.any.optional,
					"data-tracking-name": t.eg.any.optional,
					"data-tracking-id": t.eg.any.optional,
					"data-testid": t.eg.any.optional,
					dataset: t.eg.any.optional,
					databaseId: t.eg.any.optional,
					dateCreated: t.eg.any.optional,
					dateModified: t.eg.any.optional,
					ddos: t.eg.any.optional,
					description: t.eg.string.optional,
					dedicated_certificates: t.eg.any.optional,
					dedicated_certificates_custom: t.eg.any.optional,
					deepLink: t.eg.any.optional,
					default: t.eg.any.optional,
					destinationPage: t.eg.string.optional,
					detailType: t.eg.any.optional,
					deviceViewport: t.eg.any.optional,
					direction: t.eg.any.optional,
					directive: t.eg.any.optional,
					domainName: t.eg.any.optional,
					download: t.eg.any.optional,
					duration: t.eg.any.optional,
					dynamic_redirects: t.eg.any.optional,
					e: t.eg.any.optional,
					email_count: t.eg.any.optional,
					end: t.eg.any.optional,
					endDate: t.eg.any.optional,
					enabled: t.eg.any.optional,
					entitled: t.eg.any.optional,
					environment: t.eg.string.optional,
					error: t.eg.any.optional,
					errorCode: t.eg.any.optional,
					errorMessage: t.eg.any.optional,
					errors: t.eg.any.optional,
					exclude_cdn_cgi: t.eg.any.optional,
					expand: t.eg.any.optional,
					experiment: t.eg.any.optional,
					expression: t.eg.any.optional,
					features: t.eg.array(t.eg.string).optional,
					failureReasons: t.eg.any.optional,
					featureChange: t.eg.any.optional,
					featureImproved: t.eg.any.optional,
					featureName: t.eg.any.optional,
					featureOriginal: t.eg.any.optional,
					field: t.eg.any.optional,
					fieldName: t.eg.any.optional,
					filterId: t.eg.any.optional,
					firewall_rules: t.eg.any.optional,
					flow: t.eg.any.optional,
					"font-size": t.eg.any.optional,
					form: t.eg.any.optional,
					formView: t.eg.any.optional,
					frequency: t.eg.any.optional,
					from: t.eg.any.optional,
					fromCategorySearch: t.eg.any.optional,
					fromStreamRatePlanId: t.eg.any.optional,
					toStreamRatePlanId: t.eg.any.optional,
					gatesDelayed: t.eg.any.optional,
					geo: t.eg.any.optional,
					guid: t.eg.any.optional,
					hasData: t.eg.any.optional,
					hasRecords: t.eg.any.optional,
					hasSidebarNav: t.eg.boolean.optional,
					"hasTest2019-06-03": t.eg.any.optional,
					hCaptchaDisplayed: t.eg.any.optional,
					header_modification: t.eg.any.optional,
					hostname_count: t.eg.any.optional,
					hostParam: t.eg.any.optional,
					href: t.eg.any.optional,
					id: t.eg.any.optional,
					index: t.eg.any.optional,
					indexLevel: t.eg.any.optional,
					initialRecommendation: t.eg.any.optional,
					ip_access_rules: t.eg.any.optional,
					items: t.eg.number.optional,
					isAuthenticated: t.eg.any.optional,
					isPaused: t.eg.any.optional,
					isCloudflare: t.eg.any.optional,
					isExpanding: t.eg.boolean.optional,
					isEntAccount: t.eg.boolean.optional,
					isEnterprise: t.eg.boolean.optional,
					isInactive: t.eg.boolean.optional,
					isOpen: t.eg.boolean.optional,
					isScript: t.eg.any.optional,
					isSPA: t.eg.any.optional,
					isStreaming: t.eg.any.optional,
					isStripeBilling: t.eg.boolean.optional,
					isParent: t.eg.any.optional,
					isViewAll: t.eg.any.optional,
					isEditingSubscription: t.eg.any.optional,
					is_replacing: t.eg.any.optional,
					isRaw: t.eg.any.optional,
					jurisdiction: t.eg.any.optional,
					key: t.eg.any.optional,
					label: t.eg.any.optional,
					lastTimestamp: t.eg.any.optional,
					last_scan_days_ago: t.eg.any.optional,
					level: t.eg.any.optional,
					limit: t.eg.any.optional,
					link: t.eg.any.optional,
					listType: t.eg.any.optional,
					load_balancing: t.eg.any.optional,
					load_balancing_base: t.eg.any.optional,
					load_balancing_dns_queries: t.eg.any.optional,
					load_balancing_geo_routing: t.eg.any.optional,
					load_balancing_monitor_interval: t.eg.any.optional,
					load_balancing_origins: t.eg.any.optional,
					load_balancing_probe_regions: t.eg.any.optional,
					legacyDeepLink: t.eg.any.optional,
					locale: t.eg.any.optional,
					location: t.eg.any.optional,
					locationHint: t.eg.any.optional,
					maliciousCode: t.eg.any.optional,
					maliciousDomain: t.eg.any.optional,
					maliciousURL: t.eg.any.optional,
					managed_rules: t.eg.any.optional,
					marketingPlan: t.eg.any.optional,
					matchesCount: t.eg.any.optional,
					matchingRequestPercentage: t.eg.any.optional,
					matchingRequests: t.eg.any.optional,
					message0: t.eg.any.optional,
					method: t.eg.any.optional,
					millis: t.eg.any.optional,
					"mirage-recommendation": t.eg.any.optional,
					mode: t.eg.any.optional,
					monitor: t.eg.string.optional,
					monitorType: t.eg.any.optional,
					mrktCheckboxDisplayed: t.eg.any.optional,
					name: t.eg.any.optional,
					newTotalCount: t.eg.any.optional,
					novalidate: t.eg.any.optional,
					numAccounts: t.eg.any.optional,
					numRecords: t.eg.any.optional,
					numRecordsToApply: t.eg.any.optional,
					numRecordsToPrompt: t.eg.any.optional,
					numRecordsToRemove: t.eg.any.optional,
					numRows: t.eg.any.optional,
					origin_rules: t.eg.any.optional,
					numFilters: t.eg.any.optional,
					numRawLogs: t.eg.any.optional,
					numSampledLogs: t.eg.any.optional,
					moreRawLogs: t.eg.any.optional,
					old_expires_on: t.eg.any.optional,
					old_mode: t.eg.any.optional,
					oldFrequency: t.eg.string.optional,
					oldPlan: t.eg.any.optional,
					oldPrice: t.eg.number.optional,
					oldRatePlan: t.eg.string.optional,
					oldStep: t.eg.any.optional,
					oldSubscriptionValues: t.eg.record(t.eg.string, t.eg.any).optional,
					oldValue: t.eg.any.optional,
					onboarding: t.eg.any.optional,
					operator: t.eg.any.optional,
					order: t.eg.string.optional,
					order_by: t.eg.any.optional,
					page: t.eg.any.optional,
					page_rules: t.eg.any.optional,
					pageName: t.eg.any.optional,
					pageNumber: t.eg.any.optional,
					params: t.eg.any.optional,
					paused: t.eg.any.optional,
					origin_url: t.eg.string.optional,
					payment_country: t.eg.string.optional,
					payment_gateway: t.eg.string.optional,
					percentages: t.eg.array(t.eg.number).optional,
					permission: t.eg.string.optional,
					personalisation: t.eg.boolean.optional,
					personalized: t.eg.boolean.optional,
					per_page: t.eg.any.optional,
					plan: t.eg.any.optional,
					plans: t.eg.any.optional,
					planVolume: t.eg.any.optional,
					position: t.eg.number.optional,
					prefs: t.eg.any.optional,
					previousPage: t.eg.any.optional,
					previousTotalCount: t.eg.any.optional,
					price: t.eg.any.optional,
					priority: t.eg.any.optional,
					product: t.eg.any.optional,
					prioritize_malicious: t.eg.any.optional,
					products: t.eg.any.optional,
					productName: t.eg.any.optional,
					productCategory: t.eg.any.optional,
					provider: t.eg.any.optional,
					question: t.eg.any.optional,
					quota: t.eg.any.optional,
					ratePlan: t.eg.any.optional,
					rayId: t.eg.any.optional,
					readTasks: t.eg.any.optional,
					reason: t.eg.any.optional,
					recommendation: t.eg.any.optional,
					recommendationType: t.eg.any.optional,
					recordAdditionMethod: t.eg.any.optional,
					recordTypes: t.eg.any.optional,
					region: t.eg.any.optional,
					resourceName: t.eg.string.optional,
					rulesCount: t.eg.any.optional,
					gclid: t.eg.any.optional,
					gclsrc: t.eg.any.optional,
					dclid: t.eg.any.optional,
					utm_source: t.eg.any.optional,
					utm_medium: t.eg.any.optional,
					utm_campaign: t.eg.any.optional,
					utm_term: t.eg.any.optional,
					utm_content: t.eg.any.optional,
					rangeMax: t.eg.number.optional,
					rangeMin: t.eg.number.optional,
					rate_limiting: t.eg.any.optional,
					ratePlanId: t.eg.any.optional,
					referring_domain: t.eg.any.optional,
					referrer: t.eg.any.optional,
					registrationPeriod: t.eg.any.optional,
					registrationStatus: t.eg.any.optional,
					rel: t.eg.any.optional,
					relativeTimeRange: t.eg.any.optional,
					resultRank: t.eg.number.optional,
					"rocket_loader-recommendation": t.eg.any.optional,
					role: t.eg.any.optional,
					ruleDescription: t.eg.any.optional,
					ruleId: t.eg.any.optional,
					scanFailed: t.eg.any.optional,
					scope: t.eg.any.optional,
					searchAction: t.eg.any.optional,
					searchDescription: t.eg.any.optional,
					searchParam: t.eg.any.optional,
					searchStatus: t.eg.any.optional,
					searchTerm: t.eg.any.optional,
					searchValue: t.eg.any.optional,
					section: t.eg.any.optional,
					seenOnParam: t.eg.any.optional,
					selected: t.eg.any.optional,
					series: t.eg.any.optional,
					service: t.eg.any.optional,
					setting: t.eg.any.optional,
					setup: t.eg.any.optional,
					showErrors: t.eg.any.optional,
					sortDirection: t.eg.string.optional,
					sortBy: t.eg.string.optional,
					source: t.eg.any.optional,
					startDate: t.eg.any.optional,
					state: t.eg.any.optional,
					status: t.eg.any.optional,
					step: t.eg.any.optional,
					storageClass: t.eg.any.optional,
					string: t.eg.any.optional,
					stream_storage_thousand_minutes: t.eg.any.optional,
					stream_viewed_thousand_minutes: t.eg.any.optional,
					subcategory: t.eg.any.optional,
					subscribedToMarketing: t.eg.any.optional,
					subscriptionValues: t.eg.record(t.eg.string, t.eg.any).optional,
					success: t.eg.any.optional,
					supportLevel: t.eg.any.optional,
					tab: t.eg.any.optional,
					tableName: t.eg.any.optional,
					tag: t.eg.any.optional,
					target: t.eg.any.optional,
					targetPage: t.eg.any.optional,
					targetCA: t.eg.any.optional,
					target_pack_type: t.eg.any.optional,
					task: t.eg.any.optional,
					text: t.eg.any.optional,
					timeRange: t.eg.any.optional,
					title: t.eg.any.optional,
					tld: t.eg.string.optional,
					to: t.eg.any.optional,
					touched: t.eg.any.optional,
					total: t.eg.number.optional,
					transform_rules: t.eg.any.optional,
					topic: t.eg.any.optional,
					totalCount: t.eg.any.optional,
					totalCpuTime: t.eg.any.optional,
					totalLevels: t.eg.any.optional,
					totalRequests: t.eg.any.optional,
					totalTime: t.eg.any.optional,
					totalUserActionsTime: t.eg.any.optional,
					type: t.eg.any.optional,
					upgrade: t.eg.boolean.optional,
					uploadFailed: t.eg.any.optional,
					url_rewrites: t.eg.any.optional,
					hosts: t.eg.string.optional,
					uiType: t.eg.string.optional,
					userId: t.eg.any.optional,
					userType: t.eg.any.optional,
					utm_referrer: t.eg.any.optional,
					validation_method: t.eg.any.optional,
					validity_days: t.eg.any.optional,
					value: t.eg.any.optional,
					visibility: t.eg.any.optional,
					via: t.eg.any.optional,
					waf: t.eg.any.optional,
					wizardName: t.eg.any.optional,
					wordpress: t.eg.any.optional,
					workers: t.eg.any.optional,
					worker_kv_deletes: t.eg.any.optional,
					worker_kv_lists: t.eg.any.optional,
					worker_kv_reads: t.eg.any.optional,
					worker_kv_storage: t.eg.any.optional,
					worker_kv_writes: t.eg.any.optional,
					worker_requests: t.eg.any.optional,
					wp_plugin: t.eg.any.optional,
					zone: t.eg.any.optional,
					zoneId: t.eg.any.optional,
					zoneName: t.eg.any.optional,
					"zoneResolver/NO_ACTION": t.eg.any.optional,
					"zoneResolver/SELECT_ZONE": t.eg.any.optional,
					zoneResolverTotalCpuTime: t.eg.any.optional,
					zoneResolverTotalTime: t.eg.any.optional,
					zoneResolverTotalUserActionsTime: t.eg.any.optional,
					zones: t.eg.any.optional,
					zoneStatus: t.eg.any.optional,
					zoneType: t.eg.any.optional,
					audit: t.eg.any.optional,
					score: t.eg.any.optional,
					potentialSavings: t.eg.any.optional,
					feature: t.eg.any.optional,
					days: t.eg.any.optional,
					minutes: t.eg.any.optional,
					customRange: t.eg.any.optional,
					metric: t.eg.any.optional,
					url: t.eg.any.optional,
					previousPlan: t.eg.any.optional,
					isStarring: t.eg.any.optional,
					isStarred: t.eg.any.optional,
					totalStarredZones: t.eg.number.optional,
					totalZones: t.eg.number.optional,
					widgetName: t.eg.any.optional,
					statusType: t.eg.any.optional,
					outcome: t.eg.any.optional,
					marketingOptInChecked: t.eg.boolean.optional,
					prompt: t.eg.any.optional,
					positive: t.eg.any.optional,
					endpoint: t.eg.any.optional,
					isArgoEnabled: t.eg.any.optional,
					insightClass: t.eg.string.optional,
					insightType: t.eg.string.optional,
					severity: t.eg.string.optional,
					domain: t.eg.any.optional,
					exact: t.eg.any.optional,
					fees: t.eg.any.optional,
					new_selection: t.eg.any.optional,
					numDomainsInCart: t.eg.any.optional,
					payment_method: t.eg.string.optional,
					payment_option: t.eg.string.optional,
					premium: t.eg.any.optional,
					previous_selection: t.eg.any.optional,
					pricing_local: t.eg.any.optional,
					selection: t.eg.any.optional,
					uniqueTopLevelDomains: t.eg.any.optional
				})),
				we = (re, le) => {
					const [A, B] = De(le);
					let oe, be;
					return (0, t.nM)(ve.decode(re)) && (oe = new te.Uh(re)), B && B.length > 0 && (be = new te.oV(re, B)), [A, oe, be]
				},
				De = re => {
					const le = Re.decode(re);
					if ((0, t.nM)(le)) {
						const A = le.left.map(({
							context: B
						}) => B.map(({
							key: oe
						}) => oe)).reduce((B, oe) => B.concat(oe), []).filter(B => B in re);
						return [F(A, re), A]
					}
					return [re, []]
				},
				F = (re, le) => Object.entries(le).reduce((A, [B, oe]) => (re.includes(B) || (A[B] = oe), A), {}),
				ce = re => (le, A, B) => {
					const [oe, be, Pe] = we(A, B);
					if (be) throw be;
					return Pe && console.error(Pe), re(le, A, oe)
				};
			var Ce = n("../react/utils/zaraz.ts");
			const Be = {
					identify: !0
				},
				ze = re => (le, A, B) => (Be[A] || Ce.tg === null || Ce.tg === void 0 || Ce.tg.track(A, B), re(le, A, B));
			var Ue = n("../react/utils/cookiePreferences.ts");

			function He(re) {
				for (var le = 1; le < arguments.length; le++) {
					var A = arguments[le] != null ? Object(arguments[le]) : {},
						B = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(A).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(A, oe).enumerable
					})), B.forEach(function(oe) {
						je(re, oe, A[oe])
					})
				}
				return re
			}

			function je(re, le, A) {
				return le = et(le), le in re ? Object.defineProperty(re, le, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : re[le] = A, re
			}

			function et(re) {
				var le = Ke(re, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function Ke(re, le) {
				if (typeof re != "object" || re === null) return re;
				var A = re[Symbol.toPrimitive];
				if (A !== void 0) {
					var B = A.call(re, le || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(re)
			}
			const Ve = re => {
					o().init(He({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: $e() && !(0, c.gm)() && Ze(),
						middlewares: [L, ce, k, ze]
					}, re))
				},
				xe = () => {
					o().identify(He({}, (0, e.getAttribution)(), {
						locale: (0, m.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, a.Jd)()
					}))
				},
				$e = () => !0,
				Xe = () => {
					(0, Ue.kT)("sparrow_id")
				},
				Ze = () => (0, Ue.Xm)()
		},
		"../utils/initStyles.ts": function(W, v, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../react/app/providers/storeContainer.js");
			const c = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				m = g => {
					const p = [];
					for (let h in g.colors) {
						const t = g.colors[h];
						if (Array.isArray(t) && h !== "categorical")
							for (let r = 0; r < t.length; ++r) p.push(`--cf-${h}-${r}:${t[r]};`)
					}
					return p.join(`
`)
				},
				a = () => {
					const g = (0, e.Yc)(),
						p = `
    * {
      box-sizing: border-box;
    }

    ::placeholder {
      color: ${e.Rl.colors.gray[5]}
    }

    html, body, button {
      font-size: 16px;
    }

    html {
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
    }

    body {
      line-height: 1.5;
      color: ${e.Rl.colors.gray[1]};
      background-color: ${e.Rl.colors.background};
      font-family: ${e.Rl.fontFamily};
    }

    text {
      fill: ${e.Rl.colors.gray[1]};
    }

    body, html, ul, ol, li, p, h1, h2, h3, h4, h5, h6 {
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
      background-color: ${g?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${g?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${g?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${g?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${g?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${g?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
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
      ${m(e.Rl)}
    }
    
    .mode-transition *,
    .mode-transition body,
    .mode-transition input,
    .mode-transition button,
    .mode-transition footer,
    .mode-transition header,
    .mode-transition div {
      transition-duration: ${e.Rl.modeTransitionTime}ms !important;
      transition-property: color, background, background-color, fill, opacity, border, border-color !important;
      transition-timing-function: ease-out !important;
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
					let h = document.getElementById(c);
					h ? h.innerText = "" : (h = document.createElement("style"), h.id = c, u.appendChild(h)), h.appendChild(document.createTextNode(p)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(a), v.Z = a
		},
		"../utils/sentry/lastSentEventId.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let c = "";
				return {
					setEventId: a => (!a || typeof a != "string" || (c = a), c),
					getEventId: () => c
				}
			})()
		},
		"../utils/zaraz.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Ro: function() {
					return r
				},
				bM: function() {
					return p
				},
				tg: function() {
					return g
				},
				yn: function() {
					return t
				}
			});

			function e(i) {
				for (var d = 1; d < arguments.length; d++) {
					var s = arguments[d] != null ? Object(arguments[d]) : {},
						E = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(s).filter(function(f) {
						return Object.getOwnPropertyDescriptor(s, f).enumerable
					})), E.forEach(function(f) {
						o(i, f, s[f])
					})
				}
				return i
			}

			function o(i, d, s) {
				return d = c(d), d in i ? Object.defineProperty(i, d, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = s, i
			}

			function c(i) {
				var d = u(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function u(i, d) {
				if (typeof i != "object" || i === null) return i;
				var s = i[Symbol.toPrimitive];
				if (s !== void 0) {
					var E = s.call(i, d || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			const m = {
					track: (i, d) => null,
					set: (i, d) => console.log(`zaraz.set(${i}, ${d})`)
				},
				a = {
					track: (i, d) => {
						var s;
						(s = window.zaraz) === null || s === void 0 || s.track(i, e({}, d, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (i, d) => {
						var s;
						return (s = window.zaraz) === null || s === void 0 ? void 0 : s.set(i, d)
					}
				};
			let g;
			const p = () => {
					window.zaraz, g = a
				},
				h = ["email", "first_name", "last_name"],
				t = i => {
					h.forEach(d => {
						var s;
						(s = g) === null || s === void 0 || s.set(d, i[d])
					})
				},
				r = () => {
					t({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(W, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				u = n.n(c),
				m = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				a = n("../../../common/intl/intl-react/src/index.ts"),
				g = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				p = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				h = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				t = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				r = n("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				i = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/elements/es/index.js"),
				d = n("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				s = n("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				E = n("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				f = n("../../../common/component/component-filter-bar/src/constants.js"),
				S = n("../../../common/component/component-filter-bar/src/utils.js");

			function U(P) {
				for (var _ = 1; _ < arguments.length; _++) {
					var b = arguments[_] != null ? Object(arguments[_]) : {},
						I = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(b).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(b, Z).enumerable
					})), I.forEach(function(Z) {
						M(P, Z, b[Z])
					})
				}
				return P
			}

			function M(P, _, b) {
				return _ = x(_), _ in P ? Object.defineProperty(P, _, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[_] = b, P
			}

			function x(P) {
				var _ = k(P, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function k(P, _) {
				if (typeof P != "object" || P === null) return P;
				var b = P[Symbol.toPrimitive];
				if (b !== void 0) {
					var I = b.call(P, _ || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(P)
			}
			const L = 70,
				te = (0, m.createStyledComponent)(({
					showOverflow: P
				}) => U({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, P ? {} : {
					maxHeight: L,
					overflow: "hidden"
				})),
				X = (0, m.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				Q = (0, m.createStyledComponent)(({
					theme: P
				}) => ({
					backgroundColor: P.colors.background,
					py: 1,
					px: 2,
					borderRadius: P.radii[2],
					border: `1px solid ${P.colors.gray[7]}`,
					fontSize: P.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: P.colors.gray[4]
					}
				}), "div"),
				H = (0, m.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				V = (0, m.createStyledComponent)(({
					theme: P
				}) => ({
					color: P.colors.gray[4],
					mr: 1
				}), "span"),
				G = (0, m.createStyledComponent)(() => ({
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
				j = (0, m.createStyledComponent)(({
					buttonStyle: P
				}) => U({
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
				}, P), p.zx),
				Y = (0, m.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				C = (0, m.createStyledComponent)(({
					theme: P
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: P.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: P.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: P.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: P.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				$ = (0, m.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				R = P => P.current ? [...P.current.children].reduce((_, b) => (b.offsetTop >= L && _++, _), 0) : 0;
			let ae = 0;
			class z extends e.Component {
				constructor() {
					super();
					M(this, "overflowWrapper", (0, e.createRef)()), M(this, "hasOverflowed", _ => {
						const b = R(this.overflowWrapper);
						_.scrollHeight > L && b >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (_.scrollHeight < L || b === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), M(this, "addNewFilter", () => {
						const {
							filterDefinitions: _
						} = this.props, b = (0, S.TE)(_), I = Object.keys(b)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: I,
								operator: (0, S.uv)(I, b),
								value: (0, S.TT)(I, b)
							}
						})
					}), M(this, "handleOpenFilterEdit", _ => {
						this.setState({
							openFilter: _,
							filterChanges: U({}, this.props.filters[_])
						})
					}), M(this, "handleRemoveFilterClick", (_, b) => {
						_.stopPropagation(), this.removeFilter(b)
					}), M(this, "removeFilter", _ => {
						const {
							handleFiltersChange: b
						} = this.props, I = [...this.props.filters], Z = I[_];
						I.splice(_, 1), b(I), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: Z.key,
							operator: Z.operator,
							value: Z.value
						})
					}), M(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), M(this, "handleFilterSubmit", _ => {
						const {
							filterDefinitions: b
						} = this.props;
						_.preventDefault();
						const {
							filterChanges: I
						} = this.state, Z = typeof b[I.key].parse == "function" ? Array.isArray(I.value) ? I.value.map(b[I.key].parse) : b[I.key].parse(I.value) : I.value;
						if (b[I.key].validate && (Array.isArray(Z) ? !Z.every(b[I.key].validate) : !b[I.key].validate(Z))) return this.setState({
							invalid: !0
						});
						const ne = [...this.props.filters],
							D = U({}, I, {
								value: Z
							}),
							q = !ne[this.state.openFilter];
						q ? ne.push(D) : ne[this.state.openFilter] = U({}, I), this.props.handleFiltersChange(ne, D), (q ? this.props.onAddFilter : this.props.onEditFilter)({
							field: D.key,
							operator: D.operator,
							value: D.value
						}), this.closeOpenFilterChanges()
					}), M(this, "handlePendingKeyChange", ({
						value: _
					}) => {
						const {
							filterDefinitions: b
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: _,
								operator: (0, S.uv)(_, b),
								value: (0, S.TT)(_, b)
							}
						})
					}), M(this, "handlePendingOperatorChange", ({
						value: _
					}) => {
						let b = U({}, this.state.filterChanges, {
							operator: _
						});
						if ((0, S.dr)(_)) {
							var I, Z;
							((I = this.state.filterChanges) === null || I === void 0 ? void 0 : I.value) && !Array.isArray((Z = this.state.filterChanges) === null || Z === void 0 ? void 0 : Z.value) && (b.value = [this.state.filterChanges.value])
						} else {
							var ne, D, q;
							((ne = this.state.filterChanges) === null || ne === void 0 ? void 0 : ne.value) && Array.isArray((D = this.state.filterChanges) === null || D === void 0 ? void 0 : D.value) && ((q = this.state.filterChanges) === null || q === void 0 ? void 0 : q.value.length) > 0 && (b.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: b
						})
					}), M(this, "handlePendingValueChange", _ => {
						this.setState({
							invalid: !1,
							filterChanges: U({}, this.state.filterChanges, {
								value: _
							})
						})
					}), M(this, "handleShowOverflow", () => {
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
						id: ++ae
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(_) {
					_.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(_) {
					const {
						formatLabel: b,
						filterDefinitions: I
					} = this.props, {
						operator: Z
					} = this.state.filterChanges, ne = I[this.state.filterChanges.key], D = this.state.filterChanges.value, q = N => Array.isArray(N) ? N.map(ie => ie.value) : (N == null ? void 0 : N.value) || null;
					if (ne.renderValueComponent) return ne.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (ne.type) {
						case f.k.select:
							return (0, S.dr)(Z) ? o().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !ne.options,
								value: typeof D.split == "function" ? D == null ? void 0 : D.split(",") : Array.isArray(D) ? D : [],
								options: ne.options ? ne.options.map(N => ({
									value: N.value || N,
									label: N.label || b(this.state.filterChanges.key, N, _)
								})) : D ? (Array.isArray(D) ? D : D.split(",")).map(N => ({
									label: N,
									value: N
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(a.cC, {
									id: ne.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: ne.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: N => {
									this.handlePendingValueChange(q(N))
								},
								isValidNewOption: N => {
									const ie = ne.validate;
									return !ie && N || N && ie([N])
								},
								getNewOptionData: (N, ie) => ({
									value: N,
									label: ie
								})
							}) : o().createElement(r.hQ, {
								hideLabel: !0,
								value: D,
								options: ne.options.map(N => ({
									value: N,
									label: b(this.state.filterChanges.key, N, _)
								})),
								onChange: ({
									value: N
								}) => this.handlePendingValueChange(N)
							});
						case f.k.string:
						default:
							return (0, S.dr)(Z) ? o().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof D.split == "function" ? D == null ? void 0 : D.split(",") : Array.isArray(D) ? D : [],
								options: D ? (Array.isArray(D) ? D : D.split(",")).map(N => ({
									label: N,
									value: N
								})) : [],
								noOptionsMessage: () => null,
								placeholder: _.t("analytics.report.filters.labels.placeholder", {
									example: I[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: N => {
									this.handlePendingValueChange(q(N))
								},
								isValidNewOption: N => {
									const ie = ne.validate;
									return !ie && N || N && ie([N])
								},
								getNewOptionData: (N, ie) => ({
									value: N,
									label: ie
								}),
								formatCreateLabel: N => _.t("filter_editor.value_create_label", {
									value: N
								})
							}) : o().createElement(a.oc, null, N => o().createElement(g.I, {
								value: this.state.filterChanges.value,
								onChange: ie => this.handlePendingValueChange(ie.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: N.t("analytics.report.filters.labels.placeholder", {
									example: I[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: _,
						filterDefinitions: b,
						modalStyles: I,
						filterIconType: Z,
						buttonStyle: ne
					} = this.props, D = R(this.overflowWrapper), q = `filterPanel${this.state.id}`, N = this.state.openFilter !== null;
					return o().createElement(a.oc, null, ie => o().createElement(i.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement($, null, o().createElement(j, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": N,
						"aria-controls": q,
						inverted: !0,
						buttonStyle: ne
					}, o().createElement(h.J, {
						type: Z || "add",
						mr: 1,
						label: ie.t("common.add", {
							_: "Add"
						})
					}), o().createElement(a.cC, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(Y, null, o().createElement(a.cC, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(te, {
						innerRef: this.overflowWrapper,
						overflowLimit: L,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((pe, ge) => {
						const {
							key: ve,
							operator: Re,
							value: we
						} = pe, De = b[ve].ignoreLabelTranslation ? b[ve].label : ie.t(b[ve].label), F = ie.t(`analytics.report.filters.operators.${Re}`), ce = Array.isArray(we) ? we.map(Be => _(ve, Be, ie)).join(", ") : _(ve, we, ie), Ce = `${De} ${F} ${ce}`;
						return o().createElement(X, {
							key: `${ve}-${Re}-${we}`,
							title: Ce
						}, o().createElement(Q, {
							onClick: () => this.handleOpenFilterEdit(ge)
						}, o().createElement(i.ZC, {
							display: "flex"
						}, o().createElement(H, null, De), o().createElement(V, null, F), o().createElement(G, null, ce), (0, S.oN)(pe, b) ? o().createElement(t.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(C, {
							onClick: Be => this.handleRemoveFilterClick(Be, ge),
							"aria-label": "remove"
						}, o().createElement(h.J, {
							type: "remove"
						})))))
					})), N && o().createElement(E.Z, {
						id: q,
						filterDefinitions: b,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, S.oN)(this.state.filterChanges, b),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: _,
						modalStyles: I
					}), this.state.hasOverflowed && o().createElement(s.Z, {
						count: D,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			M(z, "propTypes", {
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
				buttonStyle: u().object
			}), v.Z = z
		},
		"../../../common/component/component-filter-bar/src/index.js": function(W, v, n) {
			"use strict";
			n.d(v, {
				ME: function() {
					return o.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return c.k
				},
				oN: function() {
					return u.oN
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = n("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				c = n("../../../common/component/component-filter-bar/src/constants.js"),
				u = n("../../../common/component/component-filter-bar/src/utils.js")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				OZ: function() {
					return m
				},
				YB: function() {
					return u
				}
			});

			function e(g, p, h) {
				return p = o(p), p in g ? Object.defineProperty(g, p, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[p] = h, g
			}

			function o(g) {
				var p = c(g, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function c(g, p) {
				if (typeof g != "object" || g === null) return g;
				var h = g[Symbol.toPrimitive];
				if (h !== void 0) {
					var t = h.call(g, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(g)
			}
			class u extends Error {
				constructor(p, h) {
					super(h);
					e(this, "translationKey", void 0), this.translationKey = p, this.name = "TranslatorError"
				}
			}
			class m extends u {
				constructor(p) {
					super(p, `Translation key not found: ${p}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var a = null
		},
		"../../../common/intl/intl-react/src/I18nProvider.tsx": function(W, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function u() {
				return u = Object.assign ? Object.assign.bind() : function(h) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (h[i] = r[i])
					}
					return h
				}, u.apply(this, arguments)
			}

			function m(h, t) {
				if (h == null) return {};
				var r = a(h, t),
					i, d;
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(h);
					for (d = 0; d < s.length; d++) i = s[d], !(t.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(h, i) || (r[i] = h[i]))
				}
				return r
			}

			function a(h, t) {
				if (h == null) return {};
				var r = {},
					i = Object.keys(h),
					d, s;
				for (s = 0; s < i.length; s++) d = i[s], !(t.indexOf(d) >= 0) && (r[d] = h[d]);
				return r
			}
			class g extends e.Component {
				constructor(t) {
					super(t);
					const {
						locale: r,
						phrases: i,
						translator: d
					} = t;
					r && d.locale(r), i && d.extend(i)
				}
				componentDidUpdate(t) {
					t.phrases !== this.props.phrases && this.props.phrases && this.props.translator.locale(this.props.locale)
				}
				render() {
					const {
						children: t
					} = this.props;
					return t
				}
			}
			const p = h => {
				let {
					translator: t
				} = h, r = m(h, ["translator"]);
				const i = () => e.createElement(c.oc, null, d => e.createElement(g, u({
					translator: d
				}, r)));
				return t ? (t.locale(r.locale), e.createElement(c.bd, {
					value: t
				}, i())) : i()
			};
			v.Z = p
		},
		"../../../common/intl/intl-react/src/index.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				oc: function() {
					return p.oc
				},
				lm: function() {
					return o.Z
				},
				bd: function() {
					return e.Z
				},
				RD: function() {
					return X
				},
				cC: function() {
					return x
				},
				QT: function() {
					return L.Q
				}
			});
			var e = n("../../../common/intl/intl-react/src/I18nProvider.tsx"),
				o = n("../../../common/intl/intl-react/src/I18nLoader.tsx"),
				c = n("webpack/sharing/consume/default/react/react"),
				u = n.n(c),
				m = n("../../../../node_modules/lodash/escape.js"),
				a = n.n(m),
				g = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				p = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function h(Q) {
				for (var H = 1; H < arguments.length; H++) {
					var V = arguments[H] != null ? Object(arguments[H]) : {},
						G = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(V).filter(function(j) {
						return Object.getOwnPropertyDescriptor(V, j).enumerable
					})), G.forEach(function(j) {
						t(Q, j, V[j])
					})
				}
				return Q
			}

			function t(Q, H, V) {
				return H = r(H), H in Q ? Object.defineProperty(Q, H, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[H] = V, Q
			}

			function r(Q) {
				var H = i(Q, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function i(Q, H) {
				if (typeof Q != "object" || Q === null) return Q;
				var V = Q[Symbol.toPrimitive];
				if (V !== void 0) {
					var G = V.call(Q, H || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(Q)
			}

			function d() {
				return d = Object.assign ? Object.assign.bind() : function(Q) {
					for (var H = 1; H < arguments.length; H++) {
						var V = arguments[H];
						for (var G in V) Object.prototype.hasOwnProperty.call(V, G) && (Q[G] = V[G])
					}
					return Q
				}, d.apply(this, arguments)
			}
			const s = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				E = /(?:\r\n|\r|\n)/g;

			function f(Q, H, V) {
				return c.createElement("span", {
					key: Q,
					"data-testid": V,
					dangerouslySetInnerHTML: {
						__html: H
					}
				})
			}

			function S(Q, H = [], V = [], G) {
				let j = 0;
				const Y = Q.replace(E, "").split(s);
				if (Y.length === 1) return [f(j, Q, G)];
				const C = [],
					$ = Y.shift();
				if ($) {
					const R = f(j, $, G);
					C.push(R), typeof R != "string" && j++
				}
				for (const [R, ae, z] of U(Y)) {
					H[R] || window.console && console.warn(`Missing Component for translation key: ${Q}, index: ${R}. Fragment will be used.`);
					const P = H[R] || c.Fragment,
						_ = V[R] || {},
						b = f(0, ae);
					if (C.push(c.createElement(P, d({
							key: j
						}, _), b)), j++, z) {
						const I = f(j, z);
						C.push(I), typeof I != "string" && j++
					}
				}
				return C
			}

			function U(Q) {
				if (!Q.length) return [];
				const [H, V, G, j] = Q.slice(0, 4);
				return [
					[parseInt(H || G), V || "", j]
				].concat(U(Q.slice(4, Q.length)))
			}

			function M({
				id: Q = "",
				smartCount: H,
				_: V,
				values: G,
				applyMarkdown: j,
				Components: Y,
				componentProps: C,
				testId: $
			}) {
				return c.createElement(p.oc, null, R => {
					G && Object.keys(G).forEach(_ => G[_] = a()(G[_])), C && C.forEach(_ => {
						Object.keys(_).forEach(b => {
							typeof _[b] == "string" && (_[b] = a()(_[b]))
						})
					});
					const ae = h({
							smart_count: H,
							_: V
						}, G),
						z = j ? (0, g.Z)(R.t(Q.toString(), ae), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : R.t(Q.toString(), ae),
						P = S(z, Y, C, $);
					return P.length > 1 ? c.createElement(c.Fragment, null, P) : P[0]
				})
			}
			var x = M,
				k = n("../../../common/intl/intl-react/src/withTranslator.tsx"),
				L = n("../../../common/intl/intl-react/src/useI18n.tsx"),
				te = n("../../../common/intl/intl-types/src/index.ts"),
				X = u().createContext(te.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Aw: function() {
					return te
				},
				Ib: function() {
					return k
				},
				Ks: function() {
					return X
				},
				MS: function() {
					return L
				},
				PN: function() {
					return E
				},
				Pp: function() {
					return u
				},
				Q3: function() {
					return d
				},
				TS: function() {
					return s
				},
				W7: function() {
					return U
				},
				dN: function() {
					return Q
				},
				eF: function() {
					return x
				},
				qp: function() {
					return t
				},
				wR: function() {
					return h
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				c = e.eg.object({
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
				m = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				a = e.eg.object({
					registrant: u.optional,
					technical: u.optional,
					administrator: u.optional,
					billing: u.optional
				}),
				g = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: a.optional,
					years: e.eg.number
				}),
				p = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let h = function(H) {
				return H.ONBOARDING_INITIATED = "Onboarding Initiated", H.ONBOARDED = "Onboarded", H.PENDING_REGISTRY_LOCK = "Pending Registry Lock", H.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", H.REGISTRY_UNLOCKED = "Registry Unlocked", H.LOCKED = "Locked", H.FAILED_TO_LOCK = "Failed To Lock", H.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", H.UNLOCKED = "Unlocked", H.OFFBOARDED = "Offboarded", H
			}({});
			const t = e.eg.object({
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
						status: e.eg.enum(h).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: p.optional,
					landing: e.eg.union([c, e.eg.boolean]).optional,
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
					transfer_conditions: m.optional,
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
					result: e.eg.array(t),
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
				d = e.eg.object({
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
				s = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let E = function(H) {
				return H.PENDING = "pending", H.VERIFIED = "verified", H.REJECTED = "rejected", H.PENDING_DELETE = "pending_delete", H.DELETED = "deleted", H
			}({});
			const f = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(E),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				S = e.eg.object({
					designated_approvers: e.eg.array(f)
				});
			let U = function(H) {
				return H.PENDING = "pending", H.PENDING_UPDATE = "pending_update", H.ENABLED = "enabled", H.DISABLED = "disabled", H
			}({});
			const M = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(U)
				}),
				x = e.eg.intersection([M, S]),
				k = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let L = function(H) {
				return H.UNLOCK_APPROVAL = "UnlockApprovalRequest", H.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", H.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", H.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", H
			}({});
			const te = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				X = e.eg.object({
					message: e.eg.string
				}),
				Q = e.eg.object({
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
		"../../../common/util/types/src/utils/index.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Yd: function() {
					return e
				},
				vE: function() {
					return o
				}
			});

			function e(c) {
				return Object.keys(c)
			}
			const o = (c, u) => {
				if (u !== void 0) throw new Error("Unexpected object: " + c);
				return u
			}
		},
		"../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$": function(W, v, n) {
			var e = {
				"./favicon-cookie.ico": "../react/app/assets/favicon-cookie.ico",
				"./favicon-dev.ico": "../react/app/assets/favicon-dev.ico",
				"./favicon-staging.ico": "../react/app/assets/favicon-staging.ico",
				"./favicon-zeit.ico": "../react/app/assets/favicon-zeit.ico"
			};

			function o(u) {
				var m = c(u);
				return n(m)
			}

			function c(u) {
				if (!n.o(e, u)) {
					var m = new Error("Cannot find module '" + u + "'");
					throw m.code = "MODULE_NOT_FOUND", m
				}
				return e[u]
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.resolve = c, W.exports = o, o.id = "../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$"
		},
		"../react/app/assets/favicon-cookie.ico": function(W, v, n) {
			"use strict";
			W.exports = n.p + "3f95af1452696b3d93d3.ico"
		},
		"../react/app/assets/favicon-dev.ico": function(W, v, n) {
			"use strict";
			W.exports = n.p + "1022a975e95038d58c62.ico"
		},
		"../react/app/assets/favicon-staging.ico": function(W, v, n) {
			"use strict";
			W.exports = n.p + "67b31fd5804672d4ab2d.ico"
		},
		"../react/app/assets/favicon-zeit.ico": function(W, v, n) {
			"use strict";
			W.exports = n.p + "d9aa8f47b1687e407e0f.ico"
		}
	}
]);

//# debugId=994ab916-b4fa-553f-8776-7270c5f5ba44