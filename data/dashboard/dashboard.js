! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8472244d-171a-595a-964c-a9119f3cf962")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				J8: function() {
					return a
				},
				Jd: function() {
					return i
				},
				QY: function() {
					return E
				},
				Qw: function() {
					return d
				},
				ki: function() {
					return p
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/utils/url.ts"),
				s = n("../node_modules/query-string/query-string.js"),
				m = n.n(s),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f;
			const d = () => Object.keys(c.Z).reduce((g, I) => (I.indexOf("cf_beta.") === 0 && c.Z.get(I) === "true" && g.push(I.split(".").slice(1).join(".")), g), []),
				p = () => {
					var g, I, v;
					return ((g = window) === null || g === void 0 || (I = g.bootstrap) === null || I === void 0 || (v = I.data) === null || v === void 0 ? void 0 : v.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((f = window) === null || f === void 0 ? void 0 : f.location) && c.Z) {
				const g = m().parse(window.location.search);
				g.beta_on && c.Z.set(`cf_beta.${g.beta_on}`, !0), g.beta_off && c.Z.set(`cf_beta.${g.beta_off}`, !1)
			}
			const _ = {},
				t = g => {
					var I, v, b;
					return Object.prototype.hasOwnProperty.call(_, g) ? _[g] : ((I = window) === null || I === void 0 || (v = I.bootstrap) === null || v === void 0 || (b = v.data) === null || b === void 0 ? void 0 : b.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(R => R === g) ? (_[g] = !0, !0) : (_[g] = !1, !1)
				},
				r = g => c.Z ? c.Z.get(`cf_beta.${g}`) === !0 : !1,
				a = g => r(g) || t(g),
				l = () => !0,
				i = () => {
					var g, I, v;
					return ((g = window) === null || g === void 0 || (I = g.bootstrap) === null || I === void 0 || (v = I.data) === null || v === void 0 ? void 0 : v.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				E = g => {
					const I = (0, e.uF)(g),
						v = (I == null ? void 0 : I.roles) || [];
					return (0, o.qR)(location.pathname) && v.length === 1 && v.some(b => b === "Administrator Read Only")
				}
		},
		"../init.ts": function(z, y, n) {
			"use strict";
			n.r(y);
			var e = n("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = n("../../../../node_modules/url-search-params-polyfill/index.js"),
				s = n("../libs/init/initGlobal.ts"),
				m = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				c = n("../../../../node_modules/fetch-intercept/lib/browser.js");

			function f(T) {
				for (var w = 1; w < arguments.length; w++) {
					var K = arguments[w] != null ? Object(arguments[w]) : {},
						ne = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(K).filter(function(de) {
						return Object.getOwnPropertyDescriptor(K, de).enumerable
					})), ne.forEach(function(de) {
						d(T, de, K[de])
					})
				}
				return T
			}

			function d(T, w, K) {
				return w = p(w), w in T ? Object.defineProperty(T, w, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[w] = K, T
			}

			function p(T) {
				var w = _(T, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function _(T, w) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var ne = K.call(T, w || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(T)
			}
			const t = T => {
				const w = T && T.headers || {},
					K = new Headers(w);
				return K.append("X-Cross-Site-Security", "dash"), f({}, T, {
					headers: K
				})
			};
			(0, c.register)({
				request: (T, w) => {
					try {
						return new URL(T), T === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", w] : [T, w]
					} catch {
						return [T, t(w)]
					}
				}
			});
			var r = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				a = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = n("../react/app/providers/storeContainer.js");
			let i = "";
			const E = 61;

			function g(T) {
				const w = T.substr(1);
				if (w && i !== w) {
					const K = document.getElementById(w);
					if (K) {
						const ne = K.getBoundingClientRect().top;
						if (ne > 0) {
							const de = ne - E;
							document.documentElement.scrollTop = de
						}
					}
				}
				i = w
			}

			function I(T) {
				T.listen(w => g(w.hash))
			}
			var v = n("../../../../node_modules/cookie/index.js"),
				b = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const R = "CF_dash_version",
				D = "current",
				h = "hash",
				J = "deploymentPreview",
				q = T => T === D ? Q() : Z(),
				Q = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				Z = (T = 72) => {
					const w = 36e5;
					return new Date(Date.now() + T * w)
				},
				G = T => {
					switch (T) {
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
				j = (T, w = !1) => {
					var K;
					const ne = G(T),
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
    <h1 id="error-title">${ne.title}</h1>
    <p id="error-description">${ne.description}</p>
  </div>
  `,
						Te = w ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${b.fk.orange[9]};
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
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return de + Te
				},
				$ = T => {
					var w;
					const K = document.getElementById(T);
					!K || (w = K.parentNode) === null || w === void 0 || w.removeChild(K)
				};

			function X() {
				const T = document.getElementById("loading-state");
				T == null || T.classList.add("hide"), T == null || T.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach($)
				})
			}

			function V(T) {
				var w;
				const K = document.getElementById("loading-state"),
					ne = !!((w = v.parse(document.cookie)) === null || w === void 0 ? void 0 : w[R]);
				!K || (K.innerHTML = j(T == null ? void 0 : T.code, ne))
			}
			var H = n("../utils/initStyles.ts"),
				le = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				W = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				Ee = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				F = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				S = n("../../../../node_modules/history/esm/history.js"),
				Y = (0, S.lX)(),
				oe = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				k = n("../react/utils/url.ts");
			const C = (0, oe.Rf)();
			let P;

			function A(T) {
				return U(T, "react-router-v5")
			}

			function U(T, w) {
				return (K, ne = !0, de = !0) => {
					ne && C && C.location && (P = K({
						name: (0, k.Fl)(C.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": w
						}
					})), de && T.listen && T.listen((Te, ve) => {
						if (ve && (ve === "PUSH" || ve === "POP")) {
							P && P.finish();
							const je = {
								"routing.instrumentation": w
							};
							P = K({
								name: (0, k.Fl)(Te.pathname),
								op: "navigation",
								tags: je
							})
						}
					})
				}
			}
			var B = n("../react/common/selectors/languagePreferenceSelector.ts"),
				ae = n("../flags.ts"),
				fe = n("../utils/getDashVersion.ts"),
				Oe = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				Pe = n.n(Oe),
				N = n("../../../common/intl/intl-core/src/errors.ts"),
				ce = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				Se = n("../react/common/middleware/sparrow/errors.ts");
			const Fe = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				Ue = !0,
				Je = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				Ve = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function We(T, w, K) {
				return w = st(w), w in T ? Object.defineProperty(T, w, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[w] = K, T
			}

			function st(T) {
				var w = $e(T, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function $e(T, w) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var ne = K.call(T, w || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(T)
			}
			class Ne {
				constructor() {
					We(this, "name", Ne.id)
				}
				setupOnce() {
					n.g.console && (0, ce.hl)(n.g.console, "error", w => (...K) => {
						const ne = K.find(de => de instanceof Error);
						if (Fe && ne) {
							let de, Te = !0;
							if (ne instanceof Se.ez) {
								const ve = ne instanceof Se.oV ? ne.invalidProperties : void 0;
								de = {
									tags: {
										"sparrow.eventName": ne.eventName
									},
									extra: {
										sparrow: {
											eventName: ne.eventName,
											invalidProperties: ve
										}
									},
									fingerprint: [ne.name ? ne.name : "SparrowValidationError"]
								}, Te = !1
							} else if (ne instanceof Oe.SparrowIdCookieError) de = {
								extra: {
									sparrowIdCookie: ne.cookie
								},
								fingerprint: [ne.name ? ne.name : "SparrowIdCookieError"]
							};
							else if (ne.name === "ChunkLoadError") {
								de = {
									fingerprint: [ne.name]
								};
								try {
									de.tags = {
										chunkId: ne.message.split(" ")[2],
										chunkUrl: ne.request
									}
								} catch {}
							} else ne instanceof N.YB && (de = {
								fingerprint: ["TranslatorError", ne.translationKey]
							});
							Te && r.Tb(ne, de)
						}
						typeof w == "function" && w.apply(n.g.console, K)
					})
				}
			}
			We(Ne, "id", "ConsoleErrorIntegration");
			var rt = null,
				Ye = n("../utils/sentry/lastSentEventId.ts"),
				ze = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				qe = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const Ge = T => {
					const w = async K => {
						var ne, de;
						const Te = {
							envelope: K.body,
							url: T.url,
							isPreviewDeploy: (ne = window) === null || ne === void 0 || (de = ne.build) === null || de === void 0 ? void 0 : de.isPreviewDeploy,
							release: (0, fe.t)()
						};
						try {
							const ve = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(Te)
							});
							return {
								statusCode: ve.status,
								headers: {
									"x-sentry-rate-limits": ve.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": ve.headers.get("Retry-After")
								}
							}
						} catch (ve) {
							return console.log(ve), (0, qe.$2)(ve)
						}
					};
					return ze.q(T, w)
				},
				et = () => {
					if (Fe && Ue) {
						var T, w, K, ne, de, Te, ve, je, ot, it;
						let ht = "production";
						((T = window) === null || T === void 0 || (w = T.build) === null || w === void 0 ? void 0 : w.isPreviewDeploy) && (ht += "-preview"), W.S({
							dsn: Fe,
							release: (0, fe.t)(),
							environment: ht,
							ignoreErrors: Ve,
							allowUrls: Je,
							autoSessionTracking: !1,
							integrations: [new Ee.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new Ne, new F.jK.BrowserTracing({
								routingInstrumentation: A(Y)
							})],
							tracesSampleRate: 0,
							transport: Ge,
							beforeSend: Nt => (Ye.e.setEventId(Nt.event_id), Nt)
						});
						const xt = (0, l.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, ae.Qw)(),
							USER_BETA_FLAGS: (0, ae.ki)(),
							meta: {
								connection: {
									type: (K = window) === null || K === void 0 || (ne = K.navigator) === null || ne === void 0 || (de = ne.connection) === null || de === void 0 ? void 0 : de.effectiveType,
									bandwidth: (Te = window) === null || Te === void 0 || (ve = Te.navigator) === null || ve === void 0 || (je = ve.connection) === null || je === void 0 ? void 0 : je.downlink
								},
								languagePreference: (0, B.r)(xt),
								isPreviewDeploy: (ot = window) === null || ot === void 0 || (it = ot.build) === null || it === void 0 ? void 0 : it.isPreviewDeploy
							},
							utilGates: (0, le.T2)(xt)
						}), window.addEventListener("unhandledrejection", function(Nt) {})
					}
				},
				Qe = T => {
					T ? r.av({
						id: T
					}) : r.av(null)
				};
			var De = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				ee = () => {
					let T;
					try {
						T = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), T = window.location.search
					}
					if (!T.includes("remote[")) return;
					const w = new URLSearchParams(T),
						K = {};
					for (let [ne, de] of w) ne.includes("remote") && (K[ne.replace(/remote\[|\]/g, "")] = de);
					De.Z.set("mfe-remotes", JSON.stringify(K))
				},
				me = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				re = n("../node_modules/uuid/dist/esm-browser/v4.js");
			const ie = "ANON_USER_ID";

			function pe() {
				var T, w, K, ne;
				let de = (T = n.g) === null || T === void 0 || (w = T.bootstrap) === null || w === void 0 || (K = w.data) === null || K === void 0 || (ne = K.user) === null || ne === void 0 ? void 0 : ne.id;
				if (!de) {
					let Te = De.Z.get(ie);
					if (!Te) {
						let ve = (0, re.Z)();
						De.Z.set(ie, ve), Te = ve
					}
					return Te
				}
				return de
			}
			async function ge() {
				const T = (0, l.bh)();
				T.dispatch((0, me.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await T.dispatch((0, le.UL)({
					userId: pe()
				}))
			}
			var be = n("../libs/init/initBootstrap.ts"),
				Ae = n("webpack/sharing/consume/default/react/react"),
				_e = n.n(Ae),
				ke = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Be = n("webpack/sharing/consume/default/react-dom/react-dom"),
				Ke = n("webpack/sharing/consume/default/react-redux/react-redux"),
				we = n("../../../../node_modules/swr/core/dist/index.mjs"),
				tt = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				He = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Re = n("../react/shims/focus-visible.js"),
				L = n("../react/app/components/DeepLink/index.ts"),
				te = n("../../../../node_modules/prop-types/index.js"),
				ue = n.n(te),
				ye = n("../react/utils/translator.tsx"),
				Ie = n("../../../common/intl/intl-react/src/index.ts"),
				he = n("../../../dash/intl/intl-translations/src/index.ts"),
				at = n("../node_modules/query-string/query-string.js"),
				ct = n.n(at),
				Dt = n("../react/common/actions/userActions.ts"),
				dt = n("../react/common/selectors/userSelectors.ts"),
				nt = n("../react/utils/i18n.ts"),
				Ct = n("../react/utils/bootstrap.ts");

			function lt(T) {
				for (var w = 1; w < arguments.length; w++) {
					var K = arguments[w] != null ? Object(arguments[w]) : {},
						ne = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(K).filter(function(de) {
						return Object.getOwnPropertyDescriptor(K, de).enumerable
					})), ne.forEach(function(de) {
						Lt(T, de, K[de])
					})
				}
				return T
			}

			function Lt(T, w, K) {
				return w = wt(w), w in T ? Object.defineProperty(T, w, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[w] = K, T
			}

			function wt(T) {
				var w = kt(T, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function kt(T, w) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var ne = K.call(T, w || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(T)
			}
			let xe = ct().parse(location.search);
			const bt = T => {
					const w = (0, Ct.$8)() ? [(0, he.Fy)(he.if.changes), (0, he.Fy)(he.if.common), (0, he.Fy)(he.if.navigation), (0, he.Fy)(he.if.overview), (0, he.Fy)(he.if.onboarding), (0, he.Fy)(he.if.invite), (0, he.Fy)(he.if.login), (0, he.Fy)(he.if.dns), (0, he.Fy)(he.n4.ssl_tls), (0, he.Fy)(he.if.message_inbox)] : [(0, he.Fy)(he.if.common), (0, he.Fy)(he.if.invite), (0, he.Fy)(he.if.login), (0, he.Fy)(he.if.onboarding)];
					xe.lang ? Mt(T) : De.Z.get(nt.th) && Tt(T, De.Z.get(nt.ly));
					const K = async ne => (await Promise.all(w.map(Te => Te(ne)))).reduce((Te, ve) => lt({}, Te, ve), {});
					return _e().createElement(Ie.RD.Provider, {
						value: T.languagePreference
					}, _e().createElement(Ie.bd, {
						translator: ye.Vb,
						locale: T.languagePreference
					}, _e().createElement(Ie.lm, {
						loadPhrases: K
					}, T.children)))
				},
				Mt = async T => {
					let w = xe.lang.substring(0, xe.lang.length - 2) + xe.lang.substring(xe.lang.length - 2, xe.lang.length).toUpperCase();
					if (!(0, B.v)(w)) {
						console.warn(`${w} is not a supported locale.`), delete xe.lang, T.history.replace({
							search: ct().stringify(xe)
						});
						return
					}
					De.Z.set(nt.ly, w), delete xe.lang, Tt(T, w), T.isAuthenticated || T.history.replace({
						search: ct().stringify(xe)
					})
				}, Tt = async (T, w) => {
					if (T.isAuthenticated) try {
						await T.setUserCommPreferences({
							"language-locale": w
						}, {
							hideErrorAlert: !0
						}), De.Z.remove(nt.th), T.history.replace({
							search: ct().stringify(xe)
						})
					} catch (K) {
						De.Z.set(nt.th, !0), console.error(K)
					} else De.Z.set(nt.th, !0)
				}, Pt = T => {
					const w = (0, dt.PR)(T);
					return {
						isAuthenticated: !!(w && w.id),
						languagePreference: De.Z.get(nt.ly) || (0, B.r)(T)
					}
				}, Rt = {
					setUserCommPreferences: Dt.V_
				};
			var u = (0, ke.withRouter)((0, Ke.connect)(Pt, Rt)(bt));
			bt.propTypes = {
				history: ue().object,
				languagePreference: ue().string.isRequired,
				children: ue().node.isRequired,
				isAuthenticated: ue().bool,
				setUserCommPreferences: ue().func.isRequired
			};
			var O = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				se = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let Ce;
			const Le = ({
				selectorPrefix: T = "c_"
			} = {}) => (Ce || (Ce = (0, se.Z)({
				dev: !1,
				selectorPrefix: T
			})), Ce);
			var Xe = n("../react/common/components/ModalManager.tsx"),
				gt = n("../react/app/components/ErrorBoundary.tsx"),
				ft = n("../react/common/actions/notificationsActions.ts");
			const pt = (n.g.bootstrap || {}).data || {};
			class mt extends _e().Component {
				componentDidMount() {
					pt.messages && this.dispatchNotificationActions(pt.messages)
				}
				dispatchNotificationActions(w) {
					w.forEach(K => {
						const {
							type: ne,
							message: de,
							persist: Te
						} = K;
						["success", "info", "warn", "error"].includes(ne) && this.props.notifyAdd(ne, (0, ye.ZP)(de), {
							persist: !!Te
						})
					})
				}
				render() {
					return null
				}
			}
			var Et = (0, ke.withRouter)((0, Ke.connect)(null, {
				notifyAdd: ft.IH
			})(mt));
			mt.propTypes = {
				notifyAdd: ue().func.isRequired
			};
			var Ze = n("../react/app/redux/index.ts");

			function yt() {
				var T;
				const w = (0, Ze.p4)(dt.PR),
					K = (w == null || (T = w.email) === null || T === void 0 ? void 0 : T.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ne = (0, me.Yc)();
				(0, Ae.useEffect)(() => {
					ne({
						userType: K
					})
				}, [K, ne])
			}
			var Me = n("../react/common/selectors/entitlementsSelectors.ts"),
				_t = n("../react/common/selectors/accountSelectors.ts");
			const $t = ["accountId", "is_ent"];

			function Wt() {
				const T = (0, me.f7)(),
					w = (0, ke.useHistory)(),
					K = (0, k.uW)(w.location.pathname),
					ne = (0, me.Yc)(),
					de = (0, me.O$)(),
					Te = (0, Ze.p4)(Me.u1),
					ve = !Te.isRequesting && !!Te.data,
					je = (0, Ze.p4)(Me.p1),
					ot = (0, Ze.p4)(_t.Xu),
					it = (0, Ze.p4)(_t.uF),
					ht = !ot.isRequesting && !!ot.data;
				(0, Ae.useEffect)(() => {
					K && ht && it && ve && K === it.account.id ? ne({
						accountId: it.account.id,
						is_ent: je
					}) : (!K || K in T && T.accountId !== K) && de($t)
				}, [ht, it, ne, de, ve, je, K, T])
			}
			var zt = n("../react/common/selectors/zoneSelectors.ts");

			function Gt() {
				const T = (0, Ze.p4)(zt.nA),
					w = (0, me.Yc)();
				(0, Ae.useEffect)(() => {
					var K;
					w({
						zone_id: T == null ? void 0 : T.id,
						zone_plan: T == null || (K = T.plan) === null || K === void 0 ? void 0 : K.legacy_id
					})
				}, [T, w])
			}
			const Kt = () => (yt(), Wt(), Gt(), null);
			var Ht = n("../react/app/components/Persistence/index.tsx"),
				Zt = n("../node_modules/@cloudflare/elements/es/index.js"),
				Vt = n("../react/app/components/LoadingSuspense.tsx");
			const Yt = _e().lazy(() => Promise.all([n.e(28868), n.e(2480), n.e(10008), n.e(49146), n.e(39115), n.e(94012), n.e(72019), n.e(13262), n.e(5668), n.e(60091), n.e(89263), n.e(77216), n.e(39760), n.e(94923), n.e(60734), n.e(40758), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var Qt = () => _e().createElement(Vt.Z, null, _e().createElement(Yt, null));
			const Xt = () => (Ae.useEffect(() => X, []), null);
			var Jt = n("../../../../node_modules/moment/moment.js"),
				Bt = n.n(Jt);
			const qt = T => {
					switch (T) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return T.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return T.toLowerCase();
						default:
							return "en"
					}
				},
				en = () => {
					const T = (0, Ze.p4)(B.r);
					(0, Ae.useEffect)(() => {
						const w = qt(T);
						w !== Bt().locale() && Bt().locale(w), document.documentElement.lang = T
					}, [T])
				},
				tn = () => {
					(0, Ae.useEffect)(() => {
						async function T() {
							var w, K;
							let ne;
							if (((w = window) === null || w === void 0 || (K = w.build) === null || K === void 0 ? void 0 : K.isPreviewDeploy) && (ne = "cookie"), !!ne) try {
								const de = document.head.querySelector("link[rel=icon]");
								de && (de.href = (await n("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${ne}.ico`)).default)
							} catch {}
						}
						T()
					}, [])
				};
			var nn = n("../react/common/constants/constants.ts");
			const on = () => {
					var T;
					const w = (0, ke.useLocation)(),
						[K, ne] = (0, Ae.useState)(((T = window) === null || T === void 0 ? void 0 : T.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Ae.useEffect)(() => {
						const de = ct().parse(w.search);
						if (de.pt && De.Z.set(nn.sJ, de.pt), de == null ? void 0 : de.devPanel) {
							var Te, ve;
							(Te = window) === null || Te === void 0 || (ve = Te.localStorage) === null || ve === void 0 || ve.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ne(!0)
						}
					}, [w.search]), {
						devPanelEnabled: K
					}
				},
				rn = _e().lazy(() => Promise.all([n.e(28868), n.e(2480), n.e(10008), n.e(49146), n.e(39115), n.e(94012), n.e(72019), n.e(13262), n.e(14696), n.e(31112), n.e(60091), n.e(89263), n.e(77216), n.e(39760), n.e(94923), n.e(60734), n.e(40758), n.e(88846), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				an = _e().lazy(() => Promise.all([n.e(83741), n.e(65447), n.e(28868), n.e(39115), n.e(14696), n.e(26337), n.e(60091), n.e(60734), n.e(69088), n.e(88846), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var sn = ({
					userIsAuthed: T
				}) => {
					en(), tn();
					const {
						devPanelEnabled: w
					} = on();
					return _e().createElement(Ae.Suspense, {
						fallback: _e().createElement(Xt, null)
					}, _e().createElement(ke.Switch, null, !T && !0 && _e().createElement(ke.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, _e().createElement(an, null)), _e().createElement(ke.Route, {
						render: () => _e().createElement(Zt.ZC, {
							minHeight: "100vh"
						}, _e().createElement(rn, null))
					})), w && _e().createElement(Qt, null))
				},
				It = n("../../../../node_modules/yup/es/index.js"),
				cn = n("../../../common/util/types/src/utils/index.ts");
			const jt = {
				cfEmail: () => It.Z_().email((0, ye.ZP)("common.validation.email")).required((0, ye.ZP)("common.validation.email")),
				cfPassword: () => It.Z_().required((0, ye.ZP)("common.validation.required"))
			};
			(0, cn.Yd)(jt).forEach(T => {
				It.kM(It.Z_, T, jt[T])
			});
			const Ft = _e().lazy(() => Promise.all([n.e(10008), n.e(94012), n.e(6368), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				ln = () => {
					const T = (0, Ct.$8)(),
						[w, K] = (0, Ae.useState)(T ? Ft : _e().Fragment),
						[ne, de] = (0, Ae.useState)((0, b.Yc)());
					(0, Ae.useEffect)(() => {
						(0, b.fF)(() => de((0, b.Yc)()))
					}, []);
					const Te = ve => {
						de(ve), (0, b.C8)(ve)
					};
					return (0, Ae.useEffect)(() => {
						K(T ? Ft : _e().Fragment)
					}, [T]), (0, Ae.useEffect)(() => {
						const ve = () => Te(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", ve), () => {
							window.removeEventListener("storage", ve)
						}
					}, []), _e().createElement(Ae.Suspense, {
						fallback: null
					}, _e().createElement(Ke.Provider, {
						store: (0, l.bh)()
					}, _e().createElement(ke.Router, {
						history: Y
					}, _e().createElement(w, null, _e().createElement(O.Z, {
						renderer: Le()
					}, _e().createElement(u, null, _e().createElement(gt.Z, {
						sentryTag: "Root"
					}, _e().createElement(we.J$, {
						value: {
							fetcher: ve => fetch(ve).then(je => je.json())
						}
					}, _e().createElement(Kt, null), _e().createElement(Et, null), _e().createElement(Ht.Z_, {
						onDarkModeChangeCb: Te
					}, _e().createElement(L.ZP, null, _e().createElement(sn, {
						userIsAuthed: T
					}))), _e().createElement(Xe.ZP, null), _e().createElement(tt.F0, null)))))))))
				},
				un = () => {
					(0, Be.render)(_e().createElement(ln, null), document.getElementById("react-app"))
				};
			var ut = n("../utils/initSparrow.ts"),
				vt = n("../utils/zaraz.ts");
			const dn = () => {
					const T = (0, dt.PR)((0, l.bh)().getState());
					pn(), (0, ut.Ug)(), (0, vt.bM)(), (T == null ? void 0 : T.id) && Pe().setUserId(T == null ? void 0 : T.id), (0, ut.yV)(), !(0, ut.Wi)() && (0, ut.IM)(), T ? (0, vt.yn)(T) : (0, vt.Ro)()
				},
				pn = () => {
					var T, w;
					(T = window) === null || T === void 0 || (w = T.OneTrust) === null || w === void 0 || w.OnConsentChanged(() => {
						const K = (0, dt.PR)((0, l.bh)().getState());
						(0, ut.Wi)() ? (Pe().setEnabled(!0), (K == null ? void 0 : K.id) ? (Pe().setUserId(K.id), (0, vt.yn)(K)) : (0, vt.Ro)(), (0, ut.yV)()) : (Pe().setEnabled(!1), (0, ut.IM)())
					})
				};

			function mn(T) {
				for (var w = 1; w < arguments.length; w++) {
					var K = arguments[w] != null ? Object(arguments[w]) : {},
						ne = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(K).filter(function(de) {
						return Object.getOwnPropertyDescriptor(K, de).enumerable
					})), ne.forEach(function(de) {
						gn(T, de, K[de])
					})
				}
				return T
			}

			function gn(T, w, K) {
				return w = fn(w), w in T ? Object.defineProperty(T, w, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[w] = K, T
			}

			function fn(T) {
				var w = En(T, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function En(T, w) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var ne = K.call(T, w || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(T)
			}
			const yn = "init",
				Ut = (T, w) => {
					r.$e(function(K) {
						K.setTag(yn, w), r.Tb(T)
					}), V(T)
				},
				St = async (T, w) => {
					try {
						return await T(), !0
					} catch (K) {
						return Ut(K, w), !1
					}
				};
			(async () => {
				try {
					var T, w, K;
					n.g.build = mn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "ea6c75fed8cf71958cf2462d8882f1b95f91ee5a",
						dashVersion: "27489727",
						env: "production",
						builtAt: 1727284087467,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, fe.p)()
					}), et();
					const ne = [{
						fn: () => n.e(4374).then(n.bind(n, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => I(Y),
						tag: "hashScroll"
					}, {
						fn: H.Z,
						tag: "styles"
					}, {
						fn: ee,
						tag: "mfePreviewData"
					}];
					for (const ot of ne)
						if (!await St(ot.fn, ot.tag)) return;
					let de;
					if (!await St(async () => {
							de = await (0, be.k)()
						}, "bootstrap")) return;
					const Te = (0, l.bh)(),
						ve = ((T = de) === null || T === void 0 ? void 0 : T.data) || {};
					Te.dispatch((0, a.mW)("user", ve == null ? void 0 : ve.user));
					const je = (w = de) === null || w === void 0 || (K = w.data) === null || K === void 0 ? void 0 : K.user;
					return n.g.bootstrap = de, je && je.id && Qe(je.id), !await St(ge, "gates") || !await St(dn, "tracking") ? void 0 : un()
				} catch (ne) {
					Ut(ne, "global")
				}
			})()
		},
		"../libs/init/initBootstrap.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				k: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/@sentry/core/esm/exports.js");
			class o extends Error {
				constructor(f, d) {
					super(d);
					this.name = `${f} ${d}`
				}
			}
			const s = () => {
					document.cookie.split(";").forEach(f => {
						const [d] = f.trim().split("=");
						document.cookie = `${d}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				m = async () => {
					let c = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!c.ok) throw c.headers.get("content-type") === "text/html" && (await c.text()).toLowerCase().includes("cookie too large") && (e.$e(function(_) {
						_.setTag("init", "cookieTooLarge"), e.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), s(), window.location.reload()), new o("Bootstrap API Failure", c == null ? void 0 : c.status);
					return (await c.json()).result.data
				}
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../react/app/redux/index.ts"),
				m = n("../react/common/selectors/userSelectors.ts"),
				c = n("../react/common/selectors/zoneSelectors.ts"),
				f = n("../react/common/selectors/accountSelectors.ts"),
				d = n("../react/common/utils/isGuards.ts"),
				p = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				_ = n.n(p);

			function t() {
				return t = Object.assign ? Object.assign.bind() : function(l) {
					for (var i = 1; i < arguments.length; i++) {
						var E = arguments[i];
						for (var g in E) Object.prototype.hasOwnProperty.call(E, g) && (l[g] = E[g])
					}
					return l
				}, t.apply(this, arguments)
			}
			const r = l => {
				function i(E) {
					const g = (0, s.UM)(),
						I = (0, p.useHistory)(),
						v = (0, p.useLocation)(),
						b = (0, p.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						R = (0, s.p4)(m.PR) || null,
						D = (0, s.p4)(c.nA) || null,
						h = (0, s.p4)(f.uF),
						J = h ? h.account : null;
					if (!b) return null;
					const {
						accountId: q,
						app: Q,
						tab: Z
					} = b.params, G = b.params.zoneName && ((0, d.v5)(b.params.zoneName) || b.params.zoneName.indexOf(".") > 0) ? b.params.zoneName : void 0;
					return o().createElement(l, t({
						dispatch: g,
						history: I,
						location: v,
						match: b,
						user: R,
						membership: q ? h : null,
						account: q ? J : null,
						accountId: q || null,
						zone: G ? D : null,
						zoneName: G || null,
						app: G ? Q : null,
						tab: G ? Z : null
					}, E))
				}
				return i.displayName = `withEntities(${a(l)})`, i
			};

			function a(l) {
				return l.displayName || l.name || "Component"
			}
			y.Z = r
		},
		"../react/app/components/DeepLink/actions.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				BQ: function() {
					return p
				},
				Bh: function() {
					return f
				},
				CM: function() {
					return _
				},
				MF: function() {
					return o
				},
				TS: function() {
					return a
				},
				WF: function() {
					return c
				},
				Wz: function() {
					return t
				},
				bk: function() {
					return d
				},
				fj: function() {
					return r
				},
				r4: function() {
					return m
				},
				zq: function() {
					return s
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
				s = (0, e.R)(o.ADD_SITE, l => ({
					payload: l
				})),
				m = (0, e.R)(o.RESOLVING_START),
				c = (0, e.R)(o.RESOLVING_COMPLETE),
				f = (0, e.R)(o.SELECT_ZONE, l => ({
					payload: l
				})),
				d = (0, e.R)(o.SELECT_ACCOUNT, l => ({
					payload: l
				})),
				p = (0, e.R)(o.SELECT_PAGES_PROJECT, l => ({
					payload: l
				})),
				_ = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, l => ({
					payload: l
				})),
				t = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, l => ({
					accountIds: l
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				a = (0, e.R)(o.SELECT_WORKER, l => ({
					payload: l
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				BV: function() {
					return e
				},
				Dz: function() {
					return _
				},
				Fj: function() {
					return m
				},
				Kt: function() {
					return f
				},
				O5: function() {
					return c
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return t
				},
				dB: function() {
					return s
				},
				s$: function() {
					return d
				}
			});
			const e = "to",
				o = "_gl",
				s = "freeTrial",
				m = "deepLinkQueryParams",
				c = "resolvedDeepLinkQueryParams",
				f = "add",
				d = "multiSkuProducts",
				p = "/:account/billing/checkout",
				_ = "/:account/:zone/billing/checkout",
				t = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				ZP: function() {
					return Z
				},
				U: function() {
					return d.U
				},
				dd: function() {
					return d.dd
				},
				bk: function() {
					return f.bk
				},
				Bh: function() {
					return f.Bh
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n("../react/app/redux/index.ts"),
				s = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				m = n("../react/app/components/DeepLink/utils.ts"),
				c = n("../react/utils/bootstrap.ts"),
				f = n("../react/app/components/DeepLink/actions.ts"),
				d = n("../react/app/components/DeepLink/selectors.ts"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				_ = n.n(p);

			function t(G) {
				for (var j = 1; j < arguments.length; j++) {
					var $ = arguments[j] != null ? Object(arguments[j]) : {},
						X = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols($).filter(function(V) {
						return Object.getOwnPropertyDescriptor($, V).enumerable
					})), X.forEach(function(V) {
						r(G, V, $[V])
					})
				}
				return G
			}

			function r(G, j, $) {
				return j = a(j), j in G ? Object.defineProperty(G, j, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[j] = $, G
			}

			function a(G) {
				var j = l(G, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function l(G, j) {
				if (typeof G != "object" || G === null) return G;
				var $ = G[Symbol.toPrimitive];
				if ($ !== void 0) {
					var X = $.call(G, j || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(G)
			}
			class i {
				constructor(j, $) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", X => {
						this.resolvers.set(X, {
							name: X,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", X => {
						const V = this.resolvers.get(X);
						V && (V.endTime = Date.now(), this.resolvers.set(X, V))
					}), r(this, "resolverCancel", X => {
						this.resolverDone(X), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", X => {
						const V = "NO_ACTION",
							H = {
								actionType: V,
								startTime: 0
							};
						return {
							start: (le = V) => {
								const W = this.resolvers.get(X);
								H.actionType = le, H.startTime = Date.now(), W && W.userActions.push(H)
							},
							finish: (le = V) => {
								H.actionType = le, H.endTime = Date.now()
							},
							cancel: (le = V) => {
								H.actionType = le, H.endTime = Date.now(), this.resolverCancel(X)
							}
						}
					}), this.deepLink = j, this.legacyDeepLink = $, this.resolvers = new Map
				}
				track(j) {
					try {
						if (this._done) return;
						this._done = !0;
						const $ = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: E(this.startTime, this.endTime),
								totalCpuTime: E(this.startTime, this.endTime)
							},
							X = this.resolvers.size === 0 ? $ : Array.from(this.resolvers.values()).reduce((V, H) => {
								const le = E(H.startTime, H.endTime),
									W = H.userActions.reduce((F, S) => {
										const x = E(S.startTime, S.endTime);
										return {
											totalTime: F.totalTime + x,
											actions: F.actions.set(S.actionType, x)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									Ee = le - W.totalTime;
								return t({}, V, {
									totalTime: V.totalTime + le,
									totalUserActionsTime: V.totalUserActionsTime + W.totalTime,
									totalCpuTime: V.totalCpuTime + Ee,
									[`${H.name}ResolverTotalTime`]: le,
									[`${H.name}ResolverTotalCpuTime`]: Ee,
									[`${H.name}ResolverTotalUserActionsTime`]: W.totalTime
								}, Array.from(W.actions.keys()).reduce((F, S) => t({}, F, {
									[`${H.name}Resolver/${S}`]: W.actions.get(S)
								}), {}))
							}, t({}, $, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						_().sendEvent(j, X)
					} catch ($) {
						console.error($)
					}
				}
			}

			function E(G = Date.now(), j = Date.now()) {
				return (j - G) / 1e3
			}
			var g = n("../react/app/components/DeepLink/constants.ts"),
				I = n("../react/common/hooks/useCachedState.ts"),
				v = n("../react/common/hooks/usePrevious.ts");

			function b(G) {
				for (var j = 1; j < arguments.length; j++) {
					var $ = arguments[j] != null ? Object(arguments[j]) : {},
						X = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols($).filter(function(V) {
						return Object.getOwnPropertyDescriptor($, V).enumerable
					})), X.forEach(function(V) {
						R(G, V, $[V])
					})
				}
				return G
			}

			function R(G, j, $) {
				return j = D(j), j in G ? Object.defineProperty(G, j, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[j] = $, G
			}

			function D(G) {
				var j = h(G, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function h(G, j) {
				if (typeof G != "object" || G === null) return G;
				var $ = G[Symbol.toPrimitive];
				if ($ !== void 0) {
					var X = $.call(G, j || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(G)
			}
			var q = ({
					children: G
				}) => {
					const j = (0, o.TZ)(),
						$ = (0, s.useHistory)(),
						X = (0, v.Z)($.location.pathname),
						V = (0, o.p4)(d.dd),
						[H, le] = (0, e.useState)(!0),
						[W, Ee] = (0, I.j)(void 0, {
							key: g.Fj
						}),
						[F, S] = (0, I.j)(void 0, {
							key: g.O5
						}),
						[x, Y] = (0, I.j)(void 0, {
							key: g.s$
						}),
						oe = (0, c.$8)();
					let k = new URLSearchParams($.location.search);
					const C = (0, m.mL)($.location.pathname, k);
					let P = null,
						A = null;
					if (k.has(g.Tc) && k.delete(g.Tc), k.get(g.BV)) P = k.get(g.BV), $.location.hash && (A = $.location.hash);
					else if (W) {
						const B = new URLSearchParams(W);
						B.get(g.BV) && (P = B.get(g.BV), k = B)
					} else C && (k.set(g.BV, C), P = C);
					if (P && g._h.test(P)) {
						const B = k.getAll(g.Kt),
							ae = JSON.stringify(B);
						B.length && ae !== x && Y(ae), k.has(g.Tc) && k.delete(g.Tc), k.delete(g.Kt)
					}!oe && W === void 0 && P && Ee(k.toString());
					const U = async () => {
						try {
							if ((0, m.I3)(P) && oe && !V) {
								W && Ee(void 0), j.dispatch((0, f.r4)()), le(!0), P && P !== F && S(P);
								const B = await (0, m.py)(P, le, j, $, X, new i(P, C ? `${$.location.pathname}${$.location.search}` : void 0));
								k.delete(g.BV);
								const ae = k.toString();
								$.replace(b({}, $.location, {
									pathname: B,
									search: ae
								}, A ? {
									hash: A
								} : {})), j.dispatch((0, f.WF)())
							}
						} catch (B) {
							j.dispatch((0, f.WF)()), console.error(B)
						} finally {
							le(!1)
						}
					};
					return (0, e.useEffect)(() => {
						U()
					}, [$.location.pathname, $.location.search, V]), (H || (0, m.I3)(P)) && oe ? null : G
				},
				Q = n("../react/app/components/DeepLink/reducer.ts"),
				Z = q
		},
		"../react/app/components/DeepLink/reducer.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				E: function() {
					return m
				},
				r: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				s = n("../react/app/components/DeepLink/actions.ts");
			const m = null,
				c = o().from({
					lastAction: m,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function f(d = c, p) {
				if (p.type === s.MF.RESOLVING_COMPLETE) return c;
				if (p.type === s.MF.RESOLVING_START) return d.set("isResolving", !0);
				if (d.isResolving) {
					if (p.type === s.MF.RESOLVING_COMPLETE) return d.set("isResolving", !1);
					if (p.type === s.MF.SET_FILTERED_ACCOUNT_IDS) return d.set("filteredAccountIds", p.accountIds);
					if (p.type === s.MF.DELETE_FILTERED_ACCOUNT_IDS) return d.set("filteredAccountIds", void 0);
					{
						let _ = d;
						try {
							_ = d.set("lastAction", p)
						} catch {
							_ = d.set("lastAction", {
								type: p.type
							})
						}
						return _
					}
				} else return d
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
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
			const e = m => m.deepLink.lastAction,
				o = m => m.deepLink.isResolving,
				s = m => m.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				I3: function() {
					return l
				},
				X1: function() {
					return r
				},
				mL: function() {
					return v
				},
				py: function() {
					return I
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../react/app/components/DeepLink/reducer.ts"),
				s = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const m = b => b.replace(s.default.endsWithSlash, ""),
				c = b => {
					const R = m(b).split("/").slice(3);
					return R.length ? "/" + R.join("/") : ""
				},
				f = b => {
					const R = m(b).split("/").slice(2);
					return R.length ? `apps/${R.join("/")}` : "apps"
				};
			var d = n("../react/app/components/DeepLink/selectors.ts"),
				p = n("../react/app/components/DeepLink/constants.ts"),
				_ = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const r = b => (0, _.Lb)(b) && (b.split(".").length > 1 || (0, t.v5)(b)),
				a = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				l = b => typeof b == "string" && b.startsWith("/"),
				i = (b, R) => D => new Promise((h, J) => {
					R.start();
					const q = b.subscribe(() => {
						const Q = (0, d.yI)(b.getState());
						Q === o.E ? (R.cancel(), q(), J("DeepLink: waitForAction out of context.")) : D(Q) && (R.finish(Q.type), q(), h(Q))
					})
				}),
				E = (b, R, D) => (h, J) => new Promise((q, Q) => {
					D.start();
					const Z = R.location.pathname;
					h = new URL(h, window.location.href).pathname, Z !== h && (D.cancel(), Q(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${h}", but on "${Z}". You need to redirect to "${h}", and unblockRouter in your Resolver, before you use this function.`));
					const G = b.subscribe(() => {
						const j = (0, d.yI)(b.getState()),
							$ = R.location.pathname,
							V = new URLSearchParams(R.location.search).get(p.BV);
						($ !== h || !!V) && (D.cancel(), G(), Q(`DeepLink: waitForPageAction user navigated away from "${h}" to "${$}${V?R.location.search:""}"`)), j === o.E ? (D.cancel(), G(), Q("DeepLink: waitForPageAction out of context.")) : J(j) && (D.finish(j.type), G(), q(j))
					})
				});

			function g(b) {
				const R = [],
					D = b.split("?")[0].split("/");
				for (let h of D) h.length !== 0 && (h.startsWith(":") ? R.push({
					value: h.substring(1),
					type: "dynamic"
				}) : R.push({
					value: h,
					type: "static"
				}));
				return R
			}
			async function I(b, R, D, h, J, q) {
				q.start();
				const Q = g(b),
					G = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(60091), n.e(94923), n.e(8756)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					j = {};
				let $ = "";
				for (const [X, V] of Q.entries())
					if (V.type === "static") $ = [$, V.value].join("/");
					else if (V.type === "dynamic" && a.is(V.value) && V.value in G) {
					q.resolverStart(V.value);
					const H = await G[V.value]({
						deepLink: b,
						blockRouter: () => R(!0),
						unblockRouter: () => R(!1),
						routerHistory: h,
						resolvedValues: j,
						store: D,
						referringRoute: J,
						uri: {
							currentPartIdx: X,
							parts: Q
						},
						waitForAction: i(D, q.createUserActionTracker(V.value)),
						waitForPageAction: E(D, h, q.createUserActionTracker(V.value))
					});
					q.resolverDone(V.value), $ = [$, H].join("/"), j[V.value] = H
				} else throw q.cancel(), new Error(`DeepLink: Resolver with name '${V.value}' is not supported.`);
				return q.done(), $
			}

			function v(b, R) {
				const D = ":account",
					h = ":zone",
					J = R.get("zone");
				if (J) return R.delete("zone"), `/${D}/${h}/${J}`;
				const q = R.get("account");
				if (q) return R.delete("account"), `/${D}/${q}`;
				if (b === "/overview") return `/${D}/${h}`;
				if (b === "/apps") return `/${D}/${h}/${f(b)}`;
				const Q = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const Z of Q) {
					const G = Z.length;
					if (b.startsWith(Z) && (b.length === G || b[G] === "/")) return `/${D}/${h}${b}`
				}
				switch (b) {
					case "/account/billing":
						return `/${D}/billing`;
					case "/account/subscriptions":
						return `/${D}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${D}/dns-firewall`;
					case "/account/audit-log":
						return `/${D}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				m = n("../react/app/components/SomethingWrong.jsx"),
				c = n("../utils/sentry/lastSentEventId.ts"),
				f = n("../react/utils/zaraz.ts"),
				d = n("../react/utils/url.ts");
			const p = ({
				sentryTag: _,
				children: t
			}) => o().createElement(s.SV, {
				beforeCapture: r => {
					_ && r.setTag("errorBoundary", _), f.tg === null || f.tg === void 0 || f.tg.track("page-error", {
						page: (0, d.Fl)(window.location.pathname)
					})
				},
				onError: r => {
					({
						REDUX_LOGGER: void 0
					}).TESTING && n.g.logAppError(r)
				},
				fallback: ({
					error: r,
					eventId: a
				}) => {
					const l = c.e.getEventId() || a;
					return o().createElement(m.Z, {
						type: "page",
						error: r,
						eventId: l
					})
				}
			}, t);
			y.Z = p
		},
		"../react/app/components/Footer.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				Z: function() {
					return C
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				m = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = n("../node_modules/@cloudflare/elements/es/index.js"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				_ = n.n(p),
				t = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				r = n("../react/common/components/Apple/utils.tsx"),
				a = n("../react/utils/translator.tsx"),
				l = n("../../../../node_modules/moment/moment.js"),
				i = n.n(l);
			const E = () => {
					const P = i()().format("YYYY"),
						A = U => {
							_().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: U
							})
						};
					return o().createElement(g, {
						marginTop: "auto"
					}, o().createElement(I, null, o().createElement(v, null, o().createElement(b, null, "\xA9 ", P, " Cloudflare, Inc."), o().createElement(b, null, o().createElement(R, null, o().createElement(D, {
						showOnDeskTop: !1
					}, o().createElement(h, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => A("Support")
					}, o().createElement(a.cC, {
						id: "common.support"
					}))), o().createElement(D, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => A("Privacy Policy")
					}, o().createElement(a.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(D, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => A("Terms of Use")
					}, o().createElement(a.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(D, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => A("Cookie Preferences")
					}, o().createElement(a.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(D, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => A("Trademark")
					}, o().createElement(a.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(R, null, o().createElement(D, null, o().createElement(h, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => A("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(a.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				g = (0, f.createComponent)(({
					theme: P,
					marginTop: A
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: A
				})),
				I = (0, f.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				v = (0, f.createComponent)(({
					theme: P
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${P.space[3]}px`
					}
				})),
				b = (0, f.createComponent)(({
					theme: P
				}) => ({
					width: "100%",
					color: P.colors.white,
					fontSize: P.fontSizes[1],
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
				R = (0, f.createComponent)(({
					theme: P
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: P.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				D = (0, f.createComponent)(({
					showOnDeskTop: P = !0,
					theme: A
				}) => ({
					color: A.colors.white,
					fontSize: A.fontSizes[1],
					height: "20px",
					display: P ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: A.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: A.space[3],
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
				h = (0, f.createStyledComponent)(({
					theme: P
				}) => ({
					textDecoration: "none",
					color: P.colors.white,
					"&:hover": {
						color: P.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var J = E,
				q = n("../react/common/hooks/useGate.ts"),
				Q = n("../react/pages/welcome/routes.ts"),
				Z = n("../react/utils/cookiePreferences.ts"),
				G = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				$ = () => {
					const [P, A] = (0, e.useState)(!1), U = (0, Z.wV)(), B = () => {
						A(!0)
					}, ae = () => {
						A(!1)
					}, fe = U && U === "US" ? (0, a.ZP)("footer.cpra_cta.privacy_choices") : (0, a.ZP)("footer.cpra_cta.cookie_preferences"), Oe = {
						background: "transparent",
						borderRadius: "none",
						color: P ? (0, d.Yc)() ? "#ee730a" : "#003681" : (0, d.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: P ? "underline" : "none",
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
					return o().createElement(c.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: Oe,
						onMouseEnter: B,
						onMouseLeave: ae
					}, o().createElement(c.Ei, {
						height: 15,
						src: G,
						mr: 2,
						alt: fe
					}), fe)
				};

			function X() {
				return X = Object.assign ? Object.assign.bind() : function(P) {
					for (var A = 1; A < arguments.length; A++) {
						var U = arguments[A];
						for (var B in U) Object.prototype.hasOwnProperty.call(U, B) && (P[B] = U[B])
					}
					return P
				}, X.apply(this, arguments)
			}

			function V(P, A) {
				if (P == null) return {};
				var U = H(P, A),
					B, ae;
				if (Object.getOwnPropertySymbols) {
					var fe = Object.getOwnPropertySymbols(P);
					for (ae = 0; ae < fe.length; ae++) B = fe[ae], !(A.indexOf(B) >= 0) && (!Object.prototype.propertyIsEnumerable.call(P, B) || (U[B] = P[B]))
				}
				return U
			}

			function H(P, A) {
				if (P == null) return {};
				var U = {},
					B = Object.keys(P),
					ae, fe;
				for (fe = 0; fe < B.length; fe++) ae = B[fe], !(A.indexOf(ae) >= 0) && (U[ae] = P[ae]);
				return U
			}
			const le = 24,
				W = (0, f.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,d.Yc)()?d.rS.colors.orange[6]:d.rS.colors.blue[4]}`
					}
				}), c.A),
				Ee = (0, f.createStyledComponent)(({
					theme: P
				}) => ({
					color: P.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, t.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: P.colors.gray[4]
					}
				}), c.A),
				F = P => {
					let {
						onClick: A
					} = P, U = V(P, ["onClick"]);
					return o().createElement(W, X({
						onClick: B => {
							_().sendEvent("navigate footer nav", {
								destinationPage: U.href
							}), A && A(B)
						}
					}, U))
				},
				S = P => {
					let {
						children: A,
						target: U,
						rel: B
					} = P, ae = V(P, ["children", "target", "rel"]);
					return o().createElement(F, X({
						target: U || "_blank",
						rel: B || "noopener noreferrer"
					}, ae), A, o().createElement(m.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				},
				x = P => {
					let {
						children: A,
						target: U,
						rel: B
					} = P, ae = V(P, ["children", "target", "rel"]);
					return o().createElement(Ee, X({
						target: U || "_blank",
						rel: B || "noopener noreferrer"
					}, ae), A)
				},
				Y = (0, f.createStyledComponent)(({
					theme: P
				}) => ({
					flex: 1,
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					flexWrap: "wrap",
					marginLeft: 0,
					"& > li": {
						fontSize: P.fontSizes[2],
						display: "contents",
						"&:not(:first-child)": {
							"&::before": {
								content: "'|'",
								color: P.colors.gray[4],
								marginTop: (0, t.tq)() ? "8px" : 0,
								paddingLeft: "8px",
								paddingRight: "8px"
							}
						},
						"& > button": {
							marginTop: (0, t.tq)() ? "8px" : 0
						}
					}
				}), c.Ul),
				oe = (0, f.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, t.tq)() ? "column" : "row",
					justifyContent: "space-between"
				}), c.ZC);
			var C = () => {
				var P, A;
				const U = [Q.d.root.pattern].some(Pe => (0, s.matchPath)(location.pathname, {
						path: Pe
					})),
					B = location.pathname === "/sign-up",
					ae = (0, q.Z)("dx-footer-simplify") === "experiment",
					fe = (0, q.Z)("prg-signup-next-steps-experiment") === "experiment" && B;
				if ((0, r.PP)()) return o().createElement(J, null);
				if (U) return null;
				const Oe = new Date().getFullYear();
				return o().createElement(c.$_, X({
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: ae ? "19px" : 4,
					px: [4, 3, 3],
					mt: fe ? 0 : "auto"
				}, fe && ae && {
					height: "10vh"
				}), ae ? o().createElement(oe, null, o().createElement(Y, null, o().createElement(c.Li, null, o().createElement(x, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("common.support"))), o().createElement(c.Li, null, o().createElement(x, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(c.Dr, {
					textTransform: "capitalize"
				}, (0, a.ZP)("footer.system_status")))), o().createElement(c.Li, null, o().createElement(x, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, a.ZP)("footer.careers"))), o().createElement(c.Li, null, o().createElement(x, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos_reduced"))), o().createElement(c.Li, null, o().createElement(x, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, a.ZP)("footer.security_issues"))), o().createElement(c.Li, null, o().createElement(x, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))), o().createElement(c.Li, null, o().createElement($, null))), o().createElement(c.ZC, {
					display: "flex",
					justifyContent: "center",
					mt: (0, t.tq)() ? 2 : 0
				}, o().createElement(c.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", Oe, " Cloudflare, Inc."))) : o().createElement(c.ZC, {
					display: "flex",
					flexWrap: "wrap",
					mx: "auto",
					maxWidth: "64rem"
				}, o().createElement(c.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.contact")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.contact_support"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, a.ZP)("footer.contact_sales"))), o().createElement(c.Dd, {
					mt: 3
				}, o().createElement(c.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, o().createElement(F, {
					"aria-label": (0, a.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${le}px`
				}, o().createElement(m.J, {
					type: "twitter",
					size: le
				})), o().createElement(F, {
					"aria-label": (0, a.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${le}px`
				}, o().createElement(m.J, {
					type: "facebook",
					size: le
				})), o().createElement(F, {
					"aria-label": (0, a.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${le}px`
				}, o().createElement(m.J, {
					type: "linkedin",
					size: le
				})))))), o().createElement(c.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.what_we_do")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://www.cloudflare.com/plans"
				}, (0, a.ZP)("footer.plans"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://www.cloudflare.com/overview"
				}, (0, a.ZP)("footer.about"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, a.ZP)("footer.network_map"))))), o().createElement(c.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.resources")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://developers.cloudflare.com"
				}, (0, a.ZP)("footer.product_docs"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://blog.cloudflare.com"
				}, (0, a.ZP)("footer.blog"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, a.ZP)("footer.testimonials"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://partners.cloudflare.com"
				}, (0, a.ZP)("footer.hosting_partners"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://api.cloudflare.com"
				}, (0, a.ZP)("footer.api"))))), o().createElement(c.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement("div", {
					"aria-hidden": "true",
					title: `Current version: ${((P=window)===null||P===void 0||(A=P.build)===null||A===void 0?void 0:A.dashVersion)||"unknown"}`
				}), o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.support")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.help_center"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://community.cloudflare.com"
				}, (0, a.ZP)("footer.community"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://www.cloudflarestatus.com"
				}, (0, a.ZP)("footer.system_status"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, a.ZP)("footer.trust_safety"))))), o().createElement(c.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.about_us")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://www.cloudflare.com/people"
				}, (0, a.ZP)("footer.team"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://www.cloudflare.com/careers"
				}, (0, a.ZP)("footer.careers"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, a.ZP)("footer.press"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, a.ZP)("footer.subs_agreement"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(S, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))))), o().createElement($, null)))
			}
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				S: function() {
					return a
				},
				Z: function() {
					return oe
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				m = n("../node_modules/@cloudflare/elements/es/index.js"),
				c = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				p = n("../react/common/components/AccessControl/index.js"),
				_ = n("../react/common/components/ButtonWithDropdown.tsx"),
				t = n("../react/common/components/Dropdown/index.tsx"),
				r = n("../react/utils/translator.tsx");
			const a = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				l = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: a.EXISTING_DOMAIN,
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
					trackingEvent: a.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/domains/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: a.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: a.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: a.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: a.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: a.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var i = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				E = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = n.n(E);

			function I(k) {
				for (var C = 1; C < arguments.length; C++) {
					var P = arguments[C] != null ? Object(arguments[C]) : {},
						A = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(P).filter(function(U) {
						return Object.getOwnPropertyDescriptor(P, U).enumerable
					})), A.forEach(function(U) {
						v(k, U, P[U])
					})
				}
				return k
			}

			function v(k, C, P) {
				return C = b(C), C in k ? Object.defineProperty(k, C, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[C] = P, k
			}

			function b(k) {
				var C = R(k, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function R(k, C) {
				if (typeof k != "object" || k === null) return k;
				var P = k[Symbol.toPrimitive];
				if (P !== void 0) {
					var A = P.call(k, C || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(k)
			}

			function D() {
				return D = Object.assign ? Object.assign.bind() : function(k) {
					for (var C = 1; C < arguments.length; C++) {
						var P = arguments[C];
						for (var A in P) Object.prototype.hasOwnProperty.call(P, A) && (k[A] = P[A])
					}
					return k
				}, D.apply(this, arguments)
			}

			function h(k, C) {
				if (k == null) return {};
				var P = J(k, C),
					A, U;
				if (Object.getOwnPropertySymbols) {
					var B = Object.getOwnPropertySymbols(k);
					for (U = 0; U < B.length; U++) A = B[U], !(C.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(k, A) || (P[A] = k[A]))
				}
				return P
			}

			function J(k, C) {
				if (k == null) return {};
				var P = {},
					A = Object.keys(k),
					U, B;
				for (B = 0; B < A.length; B++) U = A[B], !(C.indexOf(U) >= 0) && (P[U] = k[U]);
				return P
			}
			const q = k => {
					let {
						title: C,
						trackingEvent: P,
						icon: A,
						url: U,
						description: B,
						disabled: ae
					} = k, fe = h(k, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(Q, D({
						to: !ae && U || "#",
						"aria-disabled": ae,
						onClick: () => {
							g().sendEvent(P, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, fe), o().createElement(m.ZC, {
						display: "flex"
					}, o().createElement(s.J, {
						type: A,
						size: 24,
						mr: 2
					}), o().createElement(m.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(m.ZC, {
						fontSize: 3
					}, o().createElement(r.cC, C)), o().createElement(m.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(r.cC, B)))))
				},
				Q = (0, f.createStyledComponent)(({
					theme: k
				}) => {
					const C = {
						cursor: "pointer",
						backgroundColor: (0, c.Yc)() ? k.colors.gray[8] : k.colors.gray[9],
						color: k.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: 16,
						py: 8,
						background: k.colors.background,
						color: k.colors.gray[2],
						fontSize: k.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': C,
						':focus-within:not([aria-disabled="true"])': I({}, C, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: k.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, i.Link);
			var Z = q,
				G = n("../react/common/hooks/useGate.ts");

			function j() {
				return j = Object.assign ? Object.assign.bind() : function(k) {
					for (var C = 1; C < arguments.length; C++) {
						var P = arguments[C];
						for (var A in P) Object.prototype.hasOwnProperty.call(P, A) && (k[A] = P[A])
					}
					return k
				}, j.apply(this, arguments)
			}

			function $(k) {
				for (var C = 1; C < arguments.length; C++) {
					var P = arguments[C] != null ? Object(arguments[C]) : {},
						A = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(P).filter(function(U) {
						return Object.getOwnPropertyDescriptor(P, U).enumerable
					})), A.forEach(function(U) {
						X(k, U, P[U])
					})
				}
				return k
			}

			function X(k, C, P) {
				return C = V(C), C in k ? Object.defineProperty(k, C, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[C] = P, k
			}

			function V(k) {
				var C = H(k, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function H(k, C) {
				if (typeof k != "object" || k === null) return k;
				var P = k[Symbol.toPrimitive];
				if (P !== void 0) {
					var A = P.call(k, C || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(k)
			}

			function le(k, C) {
				if (k == null) return {};
				var P = W(k, C),
					A, U;
				if (Object.getOwnPropertySymbols) {
					var B = Object.getOwnPropertySymbols(k);
					for (U = 0; U < B.length; U++) A = B[U], !(C.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(k, A) || (P[A] = k[A]))
				}
				return P
			}

			function W(k, C) {
				if (k == null) return {};
				var P = {},
					A = Object.keys(k),
					U, B;
				for (B = 0; B < A.length; B++) U = A[B], !(C.indexOf(U) >= 0) && (P[U] = k[U]);
				return P
			}
			const Ee = "GLOBAL_ADD_DROPDOWN",
				F = ({
					disableProducts: k
				}) => {
					const C = (0, G.Z)("dashon-18-reduced-add-button-on-mobile") === "experiment" && (0, d.tq)();
					return o().createElement(S, {
						role: "group",
						"data-testid": Ee
					}, o().createElement(t.Lt, {
						trigger: o().createElement(x, null, o().createElement(s.J, {
							label: "plus",
							type: "plus"
						}), !C && o().createElement(o().Fragment, null, o().createElement(r.cC, {
							id: "common.add"
						}), " ", o().createElement(s.J, {
							label: "arrow",
							type: "caret-down"
						}))),
						menu: o().createElement(_.v2, {
							overflow: "auto",
							maxHeight: "80vh",
							width: "min(50vw, 340px)",
							whiteSpace: "normal",
							mr: 1,
							p: "8px 0",
							bottom: "auto",
							zIndex: 1200
						}, l.map(P => {
							const A = P || {},
								{
									disableOn: U,
									permissionCheck: B
								} = A,
								ae = le(A, ["disableOn", "permissionCheck"]),
								fe = U && k[U],
								Oe = $({}, ae, {
									disabled: fe
								});
							return B ? o().createElement(p.Z, {
								key: P.title.id,
								edit: B
							}, ({
								isEditable: Pe
							}) => Pe && o().createElement(Z, Oe)) : o().createElement(Z, j({
								key: P.url
							}, Oe))
						}))
					}))
				},
				S = (0, f.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				x = (0, f.createStyledComponent)(({
					theme: k
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: k.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, c.Yc)() ? k.colors.gray[1] : k.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, c.Yc)() ? k.colors.gray[8] : k.colors.gray[9]
					}
				}), m.zx);
			var Y = F,
				oe = Y
		},
		"../react/app/components/LoadingSuspense.tsx": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				m = n("../node_modules/@cloudflare/elements/es/index.js"),
				c = n("../react/utils/translator.tsx"),
				f = n("../react/app/components/ErrorStatus.tsx"),
				d = n("../react/common/components/EmptyPage.jsx"),
				p = n("../react/common/hooks/suspenseHelpers.ts");

			function _(a) {
				const [l, i] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const E = window.setTimeout(() => i(!0), a);
					return () => window.clearTimeout(E)
				}, []), l
			}
			const t = ({
					loadingTimeout: a = 1e3,
					stillLoadingTimeout: l = 9e3
				}) => {
					const i = _(a),
						E = _(l);
					if ((0, p.nW)(), !i && !E) return o().createElement(d.Z, null);
					const g = E ? o().createElement(c.cC, {
						id: "common.still_loading"
					}) : i ? o().createElement(c.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(f.Z, {
						size: 5
					}, o().createElement(m.ZC, {
						mr: 3
					}, o().createElement(s.g, {
						size: "2x"
					})), g)
				},
				r = ({
					children: a
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(t, null)
				}, a);
			y.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				C8: function() {
					return p
				},
				d3: function() {
					return d
				},
				dr: function() {
					return c
				},
				lt: function() {
					return f
				},
				m6: function() {
					return t
				},
				n: function() {
					return _
				},
				yl: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const s = "/persistence/user",
				m = async () => {
					try {
						return await (await e.get(s, {
							hideErrorAlert: !0
						})).body
					} catch (r) {
						console.error(r)
					}
				}, c = async r => {
					try {
						return await (await e.get(`/accounts/${r}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, f = async (r, a) => {
					try {
						return await (await e.post(`${s}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: a
							}),
							hideErrorAlert: !0
						})).body
					} catch (l) {
						return console.error(l), []
					}
				}, d = async (r, a) => {
					try {
						return await e.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: a
							}),
							hideErrorAlert: !0
						}), !0
					} catch (l) {
						return console.error(l), !1
					}
				}, p = async r => {
					try {
						return await (await e.post(s, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (a) {
						console.error(a)
					}
				}, _ = async r => {
					try {
						return await (await e.post(`${s}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, t = async r => {
					try {
						return await (await e.post(`${s}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						throw console.error(a), a
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				Wl: function() {
					return _
				},
				lp: function() {
					return g
				},
				Z_: function() {
					return v
				},
				r7: function() {
					return G
				},
				Tv: function() {
					return Ee
				},
				yZ: function() {
					return b
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../react/app/redux/index.ts"),
				m = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = n.n(m),
				f = n("../react/utils/bootstrap.ts"),
				d = n("../react/common/selectors/zoneSelectors.ts"),
				p = n("../react/app/components/Persistence/api.ts");
			const _ = 10;

			function t(F) {
				for (var S = 1; S < arguments.length; S++) {
					var x = arguments[S] != null ? Object(arguments[S]) : {},
						Y = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(x).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(x, oe).enumerable
					})), Y.forEach(function(oe) {
						r(F, oe, x[oe])
					})
				}
				return F
			}

			function r(F, S, x) {
				return S = a(S), S in F ? Object.defineProperty(F, S, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[S] = x, F
			}

			function a(F) {
				var S = l(F, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function l(F, S) {
				if (typeof F != "object" || F === null) return F;
				var x = F[Symbol.toPrimitive];
				if (x !== void 0) {
					var Y = x.call(F, S || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(F)
			}
			const i = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				E = t({}, i, {
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
				g = (0, e.createContext)(E),
				I = g.Consumer,
				v = ({
					children: F,
					onDarkModeChangeCb: S
				}) => {
					const [x, Y] = (0, e.useState)(i), [oe, k] = (0, e.useState)(E.isLoading), C = (0, f.$8)(), P = (0, s.p4)(B => (0, d.wH)(B));
					(0, e.useEffect)(() => {
						C ? (0, p.yl)().then(B => {
							B && (Y(B), S(B.darkMode))
						}).finally(() => k(!1)) : k(!1)
					}, [C]);
					const A = (B, ae) => !!x.favorites.find(fe => fe.type === "zone" && fe.name === B && fe.accountId === ae),
						U = B => x.favorites.filter(fe => fe.type === "zone" && fe.accountId === B).length < _;
					return o().createElement(g.Provider, {
						value: t({}, x, {
							isLoading: oe,
							actions: {
								canAccountStarZone: U,
								isZoneStarred: A,
								starZone: async (B, ae) => {
									var fe;
									const Oe = !A(B, ae),
										Pe = U(ae);
									if (Oe && !Pe) {
										console.log("can not star zone - account is at limit");
										return
									}
									const N = await (0, p.lt)(B, ae);
									c().sendEvent("click star zone", {
										isStarring: Oe,
										totalStarredZones: N.filter(ce => ce.accountId === ae && ce.type === "zone").length,
										totalZones: P == null || (fe = P.paginationData) === null || fe === void 0 ? void 0 : fe.info.total_count
									}), Y(t({}, x, {
										favorites: N
									}))
								},
								setDarkMode: async B => {
									const ae = await (0, p.C8)(B);
									Y(ae), S(ae.darkMode)
								},
								logRouteVisited: async B => {
									var ae;
									const fe = await (0, p.n)(B);
									Y((ae = fe) !== null && ae !== void 0 ? ae : t({}, x))
								},
								viewChange: async B => {
									const ae = await (0, p.m6)(B);
									Y(t({}, x, {
										viewedChanges: ae
									}))
								}
							}
						})
					}, F)
				},
				b = () => (0, e.useContext)(g);
			var R = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				D = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function h() {
				return h = Object.assign ? Object.assign.bind() : function(F) {
					for (var S = 1; S < arguments.length; S++) {
						var x = arguments[S];
						for (var Y in x) Object.prototype.hasOwnProperty.call(x, Y) && (F[Y] = x[Y])
					}
					return F
				}, h.apply(this, arguments)
			}

			function J(F, S) {
				if (F == null) return {};
				var x = q(F, S),
					Y, oe;
				if (Object.getOwnPropertySymbols) {
					var k = Object.getOwnPropertySymbols(F);
					for (oe = 0; oe < k.length; oe++) Y = k[oe], !(S.indexOf(Y) >= 0) && (!Object.prototype.propertyIsEnumerable.call(F, Y) || (x[Y] = F[Y]))
				}
				return x
			}

			function q(F, S) {
				if (F == null) return {};
				var x = {},
					Y = Object.keys(F),
					oe, k;
				for (k = 0; k < Y.length; k++) oe = Y[k], !(S.indexOf(oe) >= 0) && (x[oe] = F[oe]);
				return x
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
			var G = F => {
					let {
						isStarred: S,
						size: x = 16
					} = F, Y = J(F, ["isStarred", "size"]);
					const oe = Q[(0, R.Yc)() ? "dark" : "light"];
					return o().createElement(D.J, h({
						type: S ? "star" : "star-outline",
						color: S ? oe.gold : oe.gray,
						size: x
					}, Y))
				},
				j = n("../node_modules/@cloudflare/elements/es/index.js");

			function $(F) {
				for (var S = 1; S < arguments.length; S++) {
					var x = arguments[S] != null ? Object(arguments[S]) : {},
						Y = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(x).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(x, oe).enumerable
					})), Y.forEach(function(oe) {
						X(F, oe, x[oe])
					})
				}
				return F
			}

			function X(F, S, x) {
				return S = V(S), S in F ? Object.defineProperty(F, S, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[S] = x, F
			}

			function V(F) {
				var S = H(F, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function H(F, S) {
				if (typeof F != "object" || F === null) return F;
				var x = F[Symbol.toPrimitive];
				if (x !== void 0) {
					var Y = x.call(F, S || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(F)
			}
			const le = {
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
			var Ee = (0, e.forwardRef)(({
				featurePreview: F = !1,
				isStarred: S,
				onClickFn: x,
				isDisabled: Y,
				testId: oe,
				buttonText: k,
				size: C = "large"
			}, P) => {
				const A = le[(0, R.Yc)() ? "dark" : "light"][S && !F ? "active" : "default"],
					U = $({}, C === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, C === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return o().createElement(j.zx, {
					innerRef: P,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: U.paddingRight,
					gap: 1,
					pl: U.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: F || Y ? "default" : "pointer",
					backgroundColor: A.bg,
					color: A.text,
					borderColor: A.border,
					onClick: x,
					opacity: Y ? .5 : 1,
					disabled: Y,
					fontSize: U.fontSize,
					height: U.height,
					"data-testid": oe
				}, o().createElement(G, {
					isStarred: F ? !1 : S,
					size: U.starIconSize
				}), k)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/prop-types/index.js"),
				m = n.n(s),
				c = n("../../../common/intl/intl-react/src/index.ts"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../node_modules/@cloudflare/component-button/es/index.js"),
				p = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				_ = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				r = n.n(t),
				a = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				i = n("../react/app/components/Footer.tsx"),
				E = n("../react/utils/url.ts");

			function g($) {
				for (var X = 1; X < arguments.length; X++) {
					var V = arguments[X] != null ? Object(arguments[X]) : {},
						H = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(V).filter(function(le) {
						return Object.getOwnPropertyDescriptor(V, le).enumerable
					})), H.forEach(function(le) {
						I($, le, V[le])
					})
				}
				return $
			}

			function I($, X, V) {
				return X = v(X), X in $ ? Object.defineProperty($, X, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[X] = V, $
			}

			function v($) {
				var X = b($, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function b($, X) {
				if (typeof $ != "object" || $ === null) return $;
				var V = $[Symbol.toPrimitive];
				if (V !== void 0) {
					var H = V.call($, X || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)($)
			}
			const R = (0, f.createComponent)(({
					type: $
				}) => ({
					height: $ !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				D = (0, f.createComponent)(({
					theme: $,
					margin: X,
					size: V = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: $.colors.gray[3],
					height: X ? "auto" : "100%",
					padding: X ? 0 : $.space[V > 1 ? V - 2 : 0],
					margin: X,
					justifyContent: "center",
					alignItems: "center"
				})),
				h = (0, f.createComponent)(() => ({
					textAlign: "left"
				})),
				J = (0, f.createComponent)(() => ({
					textAlign: "right"
				})),
				q = (0, f.createComponent)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[6]
				})),
				Q = (0, f.createComponent)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[4]
				})),
				Z = (0, f.createComponent)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[3]
				})),
				G = (0, f.createComponent)(({
					theme: $
				}) => ({
					width: "100%",
					height: 125,
					marginTop: $.space[4],
					padding: $.space[2]
				}), "textarea");
			class j extends o().Component {
				constructor(...X) {
					super(...X);
					I(this, "state", {
						value: "",
						submitted: !1
					}), I(this, "handleTextareaChange", V => {
						this.setState({
							value: V.target.value
						})
					}), I(this, "sendErrToSentry10", async () => {
						try {
							var V, H, le, W;
							const Ee = ((V = window) === null || V === void 0 || (H = V.bootstrap) === null || H === void 0 || (le = H.data) === null || le === void 0 || (W = le.user) === null || W === void 0 ? void 0 : W.id) || "Unknown",
								F = this.props.eventId || p.eW(),
								S = {
									name: Ee,
									email: `${Ee}@userid.com`,
									comments: this.state.value,
									eventId: F,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: g({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(S)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (Ee) {
							console.error(Ee)
						}
					}), I(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), I(this, "renderContent", V => o().createElement(c.oc, null, H => o().createElement(R, {
						type: V
					}, o().createElement(D, null, o().createElement(h, null, o().createElement(q, null, H.t("error.internal_issues")), o().createElement(Q, null, H.t("error.help_us")), o().createElement(G, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: le => this.handleTextareaChange(le),
						disabled: this.state.submitted,
						placeholder: H.t("error.give_feedback")
					}), o().createElement(J, null, !this.state.submitted && o().createElement(d.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, H.t("common.submit")), this.state.submitted && o().createElement(Z, null, H.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const X = this.props.error;
					console.error(`SomethingWrong: ${X}`), _.YA("user_feedback_form_displayed", "yes"), _.YA("normalizedPath", (0, E.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: X
					} = this.props;
					return X === "fullscreen" ? o().createElement("div", null, o().createElement(a.h4, null, o().createElement(t.Link, {
						to: "/"
					}, o().createElement(l.TR, null))), this.renderContent(X), o().createElement(i.Z, null)) : this.renderContent(X)
				}
			}
			j.propTypes = {
				type: m().oneOf(["fullscreen", "page"]),
				error: m().oneOfType([m().string, m().object]),
				eventId: m().string
			}, y.Z = j
		},
		"../react/app/redux/index.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				TZ: function() {
					return s
				},
				UM: function() {
					return c
				},
				ZS: function() {
					return m
				},
				p4: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e);
			const s = () => (0, e.useStore)(),
				m = () => s().getState(),
				c = () => (0, e.useDispatch)(),
				f = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(z, y, n) {
			"use strict";
			n.d(y, {
				P1: function() {
					return _
				},
				jQ: function() {
					return d
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
				s = n("../react/pages/email/types.ts"),
				m = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				c = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				f = n.n(c);
			const d = c.static.from([{
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
				p = r => r.entities,
				_ = (...r) => (0, m.P1)(d, p, ...r),
				t = (0, m.QB)(d)
		},
		"../react/app/redux/utils.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				F: function() {
					return s
				},
				_: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const o = m => (c, f, d) => (0, e.SC)(c, f, d, {
					hideErrorAlert: !0
				}).catch(m),
				s = m => c => {
					if (c.status === m) return c;
					throw c
				}
		},
		"../react/common/actionTypes.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Cm: function() {
					return f
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return d
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
					return m
				},
				lV: function() {
					return c
				},
				s1: function() {
					return p
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				s = "MODAL_OPEN",
				m = "MODAL_CLOSE",
				c = "TOGGLE_ON",
				f = "TOGGLE_OFF",
				d = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				_ = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				AX: function() {
					return a
				},
				YT: function() {
					return _
				},
				ct: function() {
					return d
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

			function s(l) {
				for (var i = 1; i < arguments.length; i++) {
					var E = arguments[i] != null ? Object(arguments[i]) : {},
						g = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(E).filter(function(I) {
						return Object.getOwnPropertyDescriptor(E, I).enumerable
					})), g.forEach(function(I) {
						m(l, I, E[I])
					})
				}
				return l
			}

			function m(l, i, E) {
				return i = c(i), i in l ? Object.defineProperty(l, i, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[i] = E, l
			}

			function c(l) {
				var i = f(l, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function f(l, i) {
				if (typeof l != "object" || l === null) return l;
				var E = l[Symbol.toPrimitive];
				if (E !== void 0) {
					var g = E.call(l, i || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(l)
			}
			const d = l => {
					const i = l.payload.map(E => s({}, E, {
						membershipId: E.id,
						id: E.account.id
					}));
					return s({}, l, {
						payload: i
					})
				},
				p = l => {
					const i = d(l);
					return Array.isArray(i.payload) ? s({}, l, {
						payload: i.payload[0]
					}) : s({}, l, {
						payload: null
					})
				},
				_ = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", d),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...l) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: l
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function(z, y, n) {
			"use strict";
			n.r(y), n.d(y, {
				closeModal: function() {
					return m
				},
				openModal: function() {
					return s
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function s(c, f, d = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: c,
						props: f
					},
					options: d
				}
			}

			function m(c) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: c
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				IH: function() {
					return c
				},
				Vp: function() {
					return f
				},
				ZK: function() {
					return p
				},
				um: function() {
					return d
				},
				vU: function() {
					return _
				}
			});
			var e = n("../react/common/actionTypes.ts");

			function o(t) {
				return {
					type: e.Ng,
					notification: t
				}
			}

			function s(t) {
				return {
					type: e.Cz,
					notificationId: t
				}
			}
			let m = 0;

			function c(t, r, a = {}) {
				return a = a || {},
					function(l) {
						let i = m++,
							E = {
								id: i,
								type: t,
								message: r,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									l(s(i)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						l(o(E))
					}
			}

			function f(t, r) {
				return c("success", t, r)
			}

			function d(t, r) {
				return c("info", t, r)
			}

			function p(t, r) {
				return c("warning", t, r)
			}

			function _(t, r) {
				return c("error", t, r)
			}
		},
		"../react/common/actions/userActions.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				BT: function() {
					return d
				},
				Ut: function() {
					return I
				},
				V_: function() {
					return v
				},
				Y9: function() {
					return E
				},
				Z0: function() {
					return R
				},
				mp: function() {
					return g
				},
				r3: function() {
					return b
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/app/redux/utils.ts");

			function s(D) {
				for (var h = 1; h < arguments.length; h++) {
					var J = arguments[h] != null ? Object(arguments[h]) : {},
						q = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(J).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(J, Q).enumerable
					})), q.forEach(function(Q) {
						m(D, Q, J[Q])
					})
				}
				return D
			}

			function m(D, h, J) {
				return h = c(h), h in D ? Object.defineProperty(D, h, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[h] = J, D
			}

			function c(D) {
				var h = f(D, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function f(D, h) {
				if (typeof D != "object" || D === null) return D;
				var J = D[Symbol.toPrimitive];
				if (J !== void 0) {
					var q = J.call(D, h || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(D)
			}
			const d = (0, e.C)("user").get`/user`,
				p = (0, e.C)("user").patch`/user`,
				_ = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				l = (0, e.C)("user").delete`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/email`;

			function E(...D) {
				return i(...D)
			}
			const g = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				I = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(D => s({}, D, {
					body: s({}, D.body, {
						result: {}
					})
				}))),
				v = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				b = (0, e.C)("userDetails").get`/user/details`,
				R = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(z, y, n) {
			"use strict";
			n.d(y, {
				a: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e),
				s = n("../react/common/selectors/accountSelectors.ts");
			const m = f => {
					if (typeof f != "string") throw new Error("invalid Param Type provided");
					const d = f.slice(1).split(":");
					if (d.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: d[0],
						value: d[1]
					}
				},
				c = (f, d) => {
					const {
						resourceId: p,
						accountId: _,
						legacyPermission: t
					} = d;
					let {
						read: r,
						edit: a
					} = d;
					const l = {};
					t && (a = `#${t}:edit`, r = `#${t}:read`);
					const i = p || _;
					if (r) {
						const E = Array.isArray(r) ? r : [r];
						l.isReadable = E.some(g => {
							const I = m(g);
							return (0, s.DT)(f, i, v => !!(v[I.key] && v[I.key][I.value]))
						})
					}
					if (a) {
						const E = Array.isArray(a) ? a : [a];
						l.isEditable = E.some(g => {
							const I = m(g);
							return (0, s.DT)(f, i, v => !!(v[I.key] && v[I.key][I.value]))
						})
					}
					return l
				};
			y.Z = (0, e.connect)(c)
		},
		"../react/common/components/AccessControl/index.js": function(z, y, n) {
			"use strict";
			var e = n("../../../../node_modules/prop-types/index.js"),
				o = n.n(e),
				s = n("../react/app/HoCs/withEntities.tsx"),
				m = n("../react/common/components/AccessControl/SAAConnect.js");

			function c(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(E) {
						return Object.getOwnPropertyDescriptor(l, E).enumerable
					})), i.forEach(function(E) {
						f(r, E, l[E])
					})
				}
				return r
			}

			function f(r, a, l) {
				return a = d(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function d(r) {
				var a = p(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function p(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}

			function _(r) {
				const l = ["isReadable", "isEditable"].reduce((i, E) => r.hasOwnProperty(E) ? c({}, i, {
					[E]: r[E]
				}) : i, {});
				return r.children(l)
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
			const t = (0, s.Z)((0, m.Z)(_));
			t.displayName = "AccessControl", y.Z = t
		},
		"../react/common/components/Apple/utils.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				PP: function() {
					return r
				},
				RJ: function() {
					return d
				},
				tz: function() {
					return a
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				c = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const f = () => p.test(window.location.pathname) || s.E.has(m.Qq),
				d = () => s.E.get(m.Qq),
				p = /^\/login\/apple(\/)?/,
				t = [p, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let l = !1;
					t.forEach(E => {
						if (E.test(window.location.pathname)) {
							l = !0;
							return
						}
					});
					const i = f() && l;
					return i && (0, c.C8)(c.LF.OFF), i
				},
				a = l => {
					l && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let i = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					l && (i = i + `&jwt=${l}`), window.location.href = i
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				oG: function() {
					return l
				},
				sN: function() {
					return d.sN
				},
				v2: function() {
					return d.v2
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../node_modules/@cloudflare/component-button/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = n("../../../common/intl/intl-react/src/index.ts"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../react/common/components/Dropdown/index.tsx"),
				p = n("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function _() {
				return _ = Object.assign ? Object.assign.bind() : function(i) {
					for (var E = 1; E < arguments.length; E++) {
						var g = arguments[E];
						for (var I in g) Object.prototype.hasOwnProperty.call(g, I) && (i[I] = g[I])
					}
					return i
				}, _.apply(this, arguments)
			}

			function t(i, E) {
				if (i == null) return {};
				var g = r(i, E),
					I, v;
				if (Object.getOwnPropertySymbols) {
					var b = Object.getOwnPropertySymbols(i);
					for (v = 0; v < b.length; v++) I = b[v], !(E.indexOf(I) >= 0) && (!Object.prototype.propertyIsEnumerable.call(i, I) || (g[I] = i[I]))
				}
				return g
			}

			function r(i, E) {
				if (i == null) return {};
				var g = {},
					I = Object.keys(i),
					v, b;
				for (b = 0; b < I.length; b++) v = I[b], !(E.indexOf(v) >= 0) && (g[v] = i[v]);
				return g
			}
			const a = (0, f.createStyledComponent)(({
				theme: i
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${i.radii[2]}px 0 0 ${i.radii[2]}px`,
					borderRight: `1px solid ${i.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${i.radii[2]}px ${i.radii[2]}px 0`,
					paddingRight: i.space[2],
					paddingLeft: i.space[2]
				},
				"& button": {
					color: (0, p.Yc)() ? i.colors.text : void 0
				},
				"& button:hover": {
					color: (0, p.Yc)() ? i.colors.text : void 0
				}
			}));

			function l(i) {
				let {
					menu: E,
					containerProps: g,
					disabled: I,
					disabledDropdown: v = I
				} = i, b = t(i, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: R
				} = (0, c.QT)();
				return o().createElement(a, _({}, g, {
					role: "group"
				}), o().createElement(s.zx, _({}, b, {
					disabled: I
				})), o().createElement(d.Lt, {
					trigger: o().createElement(s.zx, {
						type: b.type,
						"aria-haspopup": "menu",
						disabled: v
					}, o().createElement(m.J, {
						type: "caret-down",
						label: R("common.more"),
						size: 12
					})),
					menu: E
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/prop-types/index.js"),
				m = n.n(s),
				c = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const f = ({
				children: d
			}) => o().createElement(c.xu, {
				height: 411
			}, d);
			f.propTypes = {
				children: m().node
			}, y.Z = f
		},
		"../react/common/components/ModalManager.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				ZP: function() {
					return i
				},
				dd: function() {
					return a
				},
				vR: function() {
					return r
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("webpack/sharing/consume/default/react-redux/react-redux");
			const m = E => E.application.modals;
			var c = n("../react/common/actions/modalActions.ts"),
				f = n("../../../../node_modules/swr/core/dist/index.mjs"),
				d = n("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function p() {
				return p = Object.assign ? Object.assign.bind() : function(E) {
					for (var g = 1; g < arguments.length; g++) {
						var I = arguments[g];
						for (var v in I) Object.prototype.hasOwnProperty.call(I, v) && (E[v] = I[v])
					}
					return E
				}, p.apply(this, arguments)
			}
			const _ = o().createContext(null);
			class t extends o().Component {
				render() {
					const {
						modals: g,
						closeModal: I
					} = this.props;
					return o().createElement(o().Fragment, null, g.map(({
						ModalComponent: v,
						props: b = {},
						id: R
					}) => {
						const D = () => {
							typeof b.onClose == "function" && b.onClose(), I(v)
						};
						return o().createElement(_.Provider, {
							key: R,
							value: {
								closeModal: D
							}
						}, o().createElement(f.J$, {
							value: d.ZP
						}, o().createElement(v, p({}, b, {
							isOpen: !0,
							closeModal: D
						}))))
					}))
				}
			}

			function r() {
				const E = o().useContext(_);
				if (!E) throw new Error("useModalContext must be used within a ModalContext");
				return E
			}

			function a() {
				const E = (0, s.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...g) {
						return E(c.openModal(...g))
					}, [E]),
					closeModal: (0, e.useCallback)(function(...g) {
						return E(c.closeModal(...g))
					}, [E])
				}
			}
			var i = (0, s.connect)(E => ({
				modals: m(E)
			}), c)(t)
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				BQ: function() {
					return t
				},
				Gn: function() {
					return p
				},
				JR: function() {
					return _
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return f
				},
				ZI: function() {
					return c
				},
				if: function() {
					return o
				},
				q6: function() {
					return s
				},
				w_: function() {
					return m
				},
				zl: function() {
					return d
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				s = "date-from",
				m = "date-to",
				c = "from",
				f = "to",
				d = "all",
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
			let _ = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				t = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/constants/analytics/botScoreSrc.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				EG: function() {
					return s
				},
				Me: function() {
					return c
				},
				sk: function() {
					return m
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/index.js"),
				o = n("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let s = function(f) {
				return f.NOT_COMPUTED = "not_computed", f.MACHINE_LEARNING = "machine_learning", f.HEURISTICS = "heuristics", f.BEHAVIORAL_ANALYSIS = "behavioral_analysis", f.JS_FINGERPRINTING = "js_fingerprinting", f.VERIFIED_BOT = "verified_bot", f.CLOUDFLARE_SERVICE = "cloudflare_service", f
			}({});
			const m = {
					[s.NOT_COMPUTED]: "Not Computed",
					[s.MACHINE_LEARNING]: "Machine Learning",
					[s.HEURISTICS]: "Heuristics",
					[s.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[s.JS_FINGERPRINTING]: "JS Fingerprinting",
					[s.VERIFIED_BOT]: "Verified Bot",
					[s.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				c = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [s.NOT_COMPUTED, s.MACHINE_LEARNING, s.HEURISTICS, s.BEHAVIORAL_ANALYSIS, s.JS_FINGERPRINTING, s.VERIFIED_BOT, s.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Gq: function() {
					return m
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
					return f
				},
				Ed: function() {
					return c
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return l
				},
				hQ: function() {
					return d
				},
				SP: function() {
					return p
				}
			});
			let e = function(i) {
				return i.page_rules = "page_rules", i.automatic_platform_optimization = "automatic_platform_optimization", i
			}({});
			const o = "page_rules",
				s = "automatic_platform_optimization",
				m = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					volume_included: 1,
					ubb_frequency: 1,
					ubb_price: .1,
					ubb_unit: "gigabyte"
				},
				c = {
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
				d = {
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
			var t = n("../react/common/constants/billing/tax.ts"),
				r = n("../react/common/constants/billing/tracking.ts"),
				a = n("../react/common/constants/billing/workers.ts");
			const l = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				FP: function() {
					return e
				},
				Nl: function() {
					return c
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
				m = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				c = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Dk: function() {
					return l
				},
				Dy: function() {
					return i
				},
				E_: function() {
					return f
				},
				K$: function() {
					return v
				},
				Lv: function() {
					return E
				},
				S4: function() {
					return c
				},
				UM: function() {
					return t
				},
				Xf: function() {
					return _
				},
				Y1: function() {
					return d
				},
				p6: function() {
					return p
				},
				q0: function() {
					return m
				},
				rg: function() {
					return g
				},
				sJ: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const m = "healthy",
				c = "degraded",
				f = "critical",
				d = "unknown",
				p = "not-monitored",
				_ = o().from({
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
					f: _.FREE,
					p: _.PRO,
					b: _.BIZ
				},
				a = "marketing-pt",
				l = () => {
					const b = s.Z.get(a);
					if (!!b) return r[b]
				},
				i = ["gov"],
				E = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				g = "banner-notification-interactions",
				I = null;
			let v = function(b) {
				return b.SUPER_ADMIN = "Super Administrator - All Privileges", b.ADMIN = "Administrator", b.ADMIN_READ_ONLY = "Administrator Read Only", b
			}({})
		},
		"../react/common/constants/index.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
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
				K$: function() {
					return e.K$
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
		"../react/common/hooks/suspenseHelpers.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				bt: function() {
					return d
				},
				nW: function() {
					return c
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const m = "suspenseComplete";

			function c() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(m))
				}, [])
			}

			function f(p) {
				(0, s.OR)(m, () => {
					window.setTimeout(p, 0)
				}, {
					target: window
				})
			}

			function d(...p) {
				const [_, t] = p;
				o().useLayoutEffect(_, t), f(_)
			}
		},
		"../react/common/hooks/useCachedState.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				j: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function m(c, {
				key: f,
				cache: d = s.E
			} = {}) {
				const p = f !== void 0 && d.get(f),
					[_, t] = (0, e.useState)(p || c);
				return [_, a => {
					t(l => (a instanceof Function && (a = a(l)), f !== void 0 && d.set(f, a), a))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(z, y, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(s) {
				return (0, e.qf)(s)
			}
			y.Z = o
		},
		"../react/common/hooks/usePrevious.ts": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function s(m) {
				const c = (0, e.useRef)(m);
				return (0, e.useEffect)(() => {
					c.current = m
				}, [m]), c.current
			}
			y.Z = s
		},
		"../react/common/middleware/sparrow/errors.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Uh: function() {
					return c
				},
				ez: function() {
					return m
				},
				oV: function() {
					return f
				}
			});

			function e(d, p, _) {
				return p = o(p), p in d ? Object.defineProperty(d, p, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = _, d
			}

			function o(d) {
				var p = s(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function s(d, p) {
				if (typeof d != "object" || d === null) return d;
				var _ = d[Symbol.toPrimitive];
				if (_ !== void 0) {
					var t = _.call(d, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			class m extends Error {
				constructor(p, _) {
					super(_);
					e(this, "eventName", void 0), this.eventName = p, this.name = "SparrowValidationError"
				}
			}
			class c extends m {
				constructor(p) {
					super(p, `Event not allowed: "${p}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class f extends m {
				constructor(p, _) {
					super(p, `Found invalid properties on event: "${p}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = _
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				AC: function() {
					return ze
				},
				Au: function() {
					return M
				},
				B: function() {
					return Ve
				},
				B3: function() {
					return Ne
				},
				BG: function() {
					return q
				},
				Bp: function() {
					return tt
				},
				D0: function() {
					return R
				},
				DT: function() {
					return U
				},
				EL: function() {
					return k
				},
				GE: function() {
					return ke
				},
				Ko: function() {
					return A
				},
				Kx: function() {
					return G
				},
				Le: function() {
					return j
				},
				O4: function() {
					return rt
				},
				Ou: function() {
					return S
				},
				Py: function() {
					return qe
				},
				QI: function() {
					return Ae
				},
				RO: function() {
					return Ue
				},
				T3: function() {
					return Qe
				},
				T8: function() {
					return J
				},
				UX: function() {
					return oe
				},
				VP: function() {
					return ge
				},
				Xo: function() {
					return et
				},
				Xu: function() {
					return W
				},
				Yi: function() {
					return He
				},
				Yj: function() {
					return P
				},
				Zu: function() {
					return C
				},
				bC: function() {
					return fe
				},
				f8: function() {
					return V
				},
				hI: function() {
					return Re
				},
				hN: function() {
					return Z
				},
				hX: function() {
					return Je
				},
				iq: function() {
					return $e
				},
				nE: function() {
					return Q
				},
				oD: function() {
					return Y
				},
				oI: function() {
					return X
				},
				oJ: function() {
					return De
				},
				tM: function() {
					return x
				},
				uF: function() {
					return Ee
				},
				ut: function() {
					return Ge
				},
				vU: function() {
					return Be
				},
				wQ: function() {
					return N
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				o = n("../../../../node_modules/lodash/get.js"),
				s = n.n(o),
				m = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				c = n.n(m),
				f = n("../../../../node_modules/reselect/lib/index.js"),
				d = n("../../../../node_modules/moment/moment.js"),
				p = n.n(d),
				_ = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				r = n("../react/common/selectors/userSelectors.ts"),
				a = n("../react/common/selectors/entitlementsSelectors.ts"),
				l = n("../react/app/components/DeepLink/selectors.ts"),
				i = n("../react/common/constants/index.ts"),
				E = n("../react/common/utils/hasRole.ts");

			function g(L) {
				for (var te = 1; te < arguments.length; te++) {
					var ue = arguments[te] != null ? Object(arguments[te]) : {},
						ye = Object.keys(ue);
					typeof Object.getOwnPropertySymbols == "function" && ye.push.apply(ye, Object.getOwnPropertySymbols(ue).filter(function(Ie) {
						return Object.getOwnPropertyDescriptor(ue, Ie).enumerable
					})), ye.forEach(function(Ie) {
						I(L, Ie, ue[Ie])
					})
				}
				return L
			}

			function I(L, te, ue) {
				return te = v(te), te in L ? Object.defineProperty(L, te, {
					value: ue,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[te] = ue, L
			}

			function v(L) {
				var te = b(L, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function b(L, te) {
				if (typeof L != "object" || L === null) return L;
				var ue = L[Symbol.toPrimitive];
				if (ue !== void 0) {
					var ye = ue.call(L, te || "default");
					if (typeof ye != "object") return ye;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(L)
			}
			const R = L => {
					const te = Ee(L);
					return te == null ? void 0 : te.account
				},
				D = L => {
					const te = (0, r.PR)(L);
					if (te) {
						const ue = te.id;
						return L.accountAccess[ue] || {}
					}
					return {}
				},
				h = L => L.accountsDetailed,
				J = (0, t.P1)("accountsDetailed", h),
				q = L => L.memberships,
				Q = (0, f.P1)((0, t.P1)("memberships", q), l.U, (L, te) => !!te && !!L ? L.filter(ue => te.includes(ue.id)) : L),
				Z = L => L.accountFlags && L.accountFlags.data,
				G = L => L.accountFlags,
				j = (L, te, ue) => {
					const ye = Z(L);
					return !ye || !ye[te] ? null : ye[te][ue]
				},
				$ = L => L.accountFlags.isRequesting,
				X = (L, ...te) => s()(L, ["accountFlagsChanges", "data", ...te]),
				V = L => L.accountFlagsChanges.isRequesting,
				H = (0, f.P1)(Z, G, (L, te) => ({
					data: L,
					meta: te
				})),
				le = (L, te, ue) => !!(isEnterpriseSSEnabledSelector(L) && j(L, te, ue)),
				W = L => L.membership,
				Ee = (0, t.P1)("membership", W),
				F = (0, f.P1)(Ee, W, (L, te) => ({
					data: L,
					meta: te
				})),
				S = L => {
					const {
						roles: te = []
					} = Ee(L) || {};
					return Boolean(te.find(ue => ue === "Super Administrator - All Privileges" || ue === "Billing"))
				},
				x = L => {
					const te = [i.K$.SUPER_ADMIN];
					return (0, E.n)(L, te)
				},
				Y = L => {
					const te = D(L),
						ue = we.getMemberships(L) ? c().asMutable(we.getMemberships(L)) : [];
					if (!!ue) return c().from(ue.map(ye => g({}, ye, {
						lastSeen: te[ye.account.id] ? te[ye.account.id].lastSeen : null
					})).sort((ye, Ie) => ye.lastSeen && Ie.lastSeen ? Ie.lastSeen - ye.lastSeen : 0))
				},
				oe = L => L.filteredMemberships,
				k = (0, t.P1)("filteredMemberships", oe),
				C = (0, f.P1)(Ee, L => L == null ? void 0 : L.permissions),
				P = (0, f.P1)(C, L => (0, e.Z)(te => {
					var ue;
					return (ue = L == null ? void 0 : L[te]) !== null && ue !== void 0 ? ue : {
						read: !1,
						edit: !1
					}
				})),
				A = (0, f.P1)(Ee, L => L == null ? void 0 : L.policies),
				U = (L, te, ue) => {
					let ye = we.getMembership(L);
					if (!ye) {
						const Ie = we.getMemberships(L);
						if (!Ie || !te) return !1;
						ye = Ie.find(he => he.account.id === te)
					}
					if (!ye || !ue) return !1;
					try {
						return ue(ye.permissions)
					} catch {
						return !1
					}
				},
				B = L => {
					var te, ue;
					return (te = (ue = R(L)) === null || ue === void 0 ? void 0 : ue.meta.has_pro_zones) !== null && te !== void 0 ? te : !1
				},
				ae = L => {
					var te, ue;
					return (te = (ue = R(L)) === null || ue === void 0 ? void 0 : ue.meta.has_business_zones) !== null && te !== void 0 ? te : !1
				},
				fe = L => ae(L) || B(L),
				Oe = (L, te) => {
					const ue = Pe(L, te);
					return !!ue && !!ue.enabled
				},
				Pe = (L, te) => {
					const ue = we.getMembership(L),
						ye = ue && ue.account;
					return ye && ye.legacy_flags && ye.legacy_flags[te]
				},
				N = L => Oe(L, "custom_pages"),
				ce = L => !!L && L["webhooks.webhooks.enabled"],
				Se = L => j(L, "bots", "enabled"),
				Fe = L => j(L, "billing", "annual_subscriptions_enable"),
				Ue = L => L ? Boolean(j(L, "ConstellationAI", "v2_ui")) : !1,
				Je = L => L ? Boolean(j(L, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Ve = L => L ? Boolean(j(L, "AIgateway", "enabled")) : !1,
				We = L => Pe(L, "enterprise_zone_quota"),
				st = L => {
					const te = We(L);
					return !te || !te.available ? -1 : te.available
				},
				$e = L => L.accountMembers,
				Ne = (0, t.P1)("accountMembers", $e),
				rt = L => L.accountMember && L.accountMember.isRequesting,
				Ye = L => L.accountRoles,
				ze = (0, t.P1)("accountRoles", Ye),
				qe = (L, te) => {
					const ue = we.getMemberships(L),
						ye = ue && ue.find(at => at.account.id === te);
					if (ye) return ye.account.name.replace(" Account", " account");
					const Ie = we.getMembership(L),
						he = Ie && Ie.account;
					return he && he.id === te ? he.name : null
				},
				Ge = (L, te) => {
					const ue = we.getMemberships(L),
						ye = ue && ue.find(at => at.account.id === te);
					if (ye) return ye.account.settings.access_approval_expiry;
					const Ie = we.getMembership(L),
						he = Ie && Ie.account;
					return he && he.id === te ? he.settings.access_approval_expiry : null
				},
				et = (L, te) => {
					const ue = Ge(L, te);
					return ue ? p().utc(ue).isAfter() : !1
				},
				Qe = (L, te, ue) => {
					const ye = Ge(L, te);
					let Ie = ye ? p().utc(ye) : null;
					return !Ie || !Ie.isAfter() ? "" : Ie && Ie.year() === 3e3 ? ue("account.access_approval.card_expiration_forever") : ue("account.access_approval.card_expiration_text", {
						expiryTimestamp: Ie.local().format(_.U.DateTime)
					})
				},
				De = L => L && L.member && L.member.edit,
				M = (L, te) => {
					const ue = we.getMembership(L),
						ye = ue && ue.account;
					return ye ? ye.id !== te : !1
				},
				ee = L => L.dpa,
				me = (0, t.P1)("dpa", ee),
				re = L => L.webhook,
				ie = L => L.webhooks,
				pe = (0, t.P1)("webhook", ie),
				ge = L => L.accountLegoContract,
				be = (0, t.P1)("accountLegoContract", ge),
				Ae = L => {
					const te = be(L);
					return (te == null ? void 0 : te.lego_state) ? te.lego_state : ""
				},
				_e = L => Ae(L) === "signed",
				ke = L => ge(L).isRequesting,
				Be = L => {
					const te = be(L);
					return te && te.subscription_type ? te.subscription_type : ""
				},
				Ke = L => Be(L) !== "",
				we = {
					getMembership: Ee,
					getMemberships: Q,
					getFilteredMemberships: k,
					getAccountMembers: Ne,
					getAccountRoles: ze
				},
				tt = L => L.accountSingle,
				He = (0, t.P1)("accountSingle", tt),
				Re = L => {
					const te = [i.K$.SUPER_ADMIN, i.K$.ADMIN];
					return (0, E.n)(L, te)
				}
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				$f: function() {
					return i
				},
				AD: function() {
					return c
				},
				BF: function() {
					return l
				},
				Bs: function() {
					return R
				},
				Ci: function() {
					return C
				},
				E6: function() {
					return a
				},
				Hq: function() {
					return Pe
				},
				Ms: function() {
					return J
				},
				Q2: function() {
					return f
				},
				Td: function() {
					return v
				},
				Z: function() {
					return U
				},
				a: function() {
					return b
				},
				a5: function() {
					return ae
				},
				du: function() {
					return p
				},
				ec: function() {
					return V
				},
				f: function() {
					return Oe
				},
				hL: function() {
					return B
				},
				ji: function() {
					return P
				},
				jo: function() {
					return q
				},
				k4: function() {
					return fe
				},
				lI: function() {
					return m
				},
				p1: function() {
					return g
				},
				pf: function() {
					return t
				},
				qR: function() {
					return I
				},
				rV: function() {
					return d
				},
				u1: function() {
					return _
				},
				w4: function() {
					return r
				},
				yD: function() {
					return A
				}
			});
			var e = n("../react/utils/url.ts");

			function o(N, ce) {
				return N && N[ce]
			}
			const s = N => !m(N).isRequesting;

			function m(N) {
				return N.entitlements.zone
			}

			function c(N) {
				return m(N).data
			}
			const f = N => {
				var ce, Se;
				return ((ce = m(N).paginationData) === null || ce === void 0 || (Se = ce.options) === null || Se === void 0 ? void 0 : Se.editedDate) || {}
			};

			function d(N, ce) {
				const Se = c(N);
				return Se ? o(Se, ce) : void 0
			}
			const p = (N, ce) => d(N, ce) === !0;

			function _(N) {
				return N.entitlements.account
			}

			function t(N) {
				return _(N).data
			}
			const r = N => {
				var ce, Se;
				return ((ce = _(N).paginationData) === null || ce === void 0 || (Se = ce.options) === null || Se === void 0 ? void 0 : Se.editedDate) || {}
			};

			function a(N) {
				return !_(N).isRequesting
			}

			function l(N, ce) {
				const Se = t(N);
				return Se ? o(Se, ce) : void 0
			}

			function i(N, ce) {
				return l(N, ce) === !0
			}

			function E(N, ce) {
				return ce.every(Se => i(N, Se))
			}

			function g(N) {
				return i(N, "contract.customer_enabled")
			}

			function I(N) {
				return i(N, "contract.self_service_allowed")
			}

			function v(N) {
				return i(N, "billing.partners_managed")
			}
			const b = N => g(N) && I(N),
				R = N => i(N, "enterprise.ecp_allowed");

			function D(N) {
				return h(N) || i(N, "argo.allow_smart_routing") || i(N, "argo.allow_tiered_caching") || i(N, "rate_limiting.enabled") || i(N, "ctm.enabled") || i(N, "workers.enabled") || i(N, "workers.kv_store.enabled") || i(N, "stream.enabled")
			}
			const h = N => p(N, "argo.allow_smart_routing") || p(N, "argo.allow_tiered_caching"),
				J = N => i(N, "zone.cname_setup_allowed") || i(N, "zone.partial_setup_allowed") || p(N, "zone.partial_setup_allowed"),
				q = N => i(N, "argo.allow_smart_routing") || p(N, "argo.allow_smart_routing"),
				Q = N => i(N, "argo.allow_tiered_caching") || p(N, "argo.allow_tiered_caching"),
				Z = N => q(N) || Q(N),
				G = N => i(N, "ctm.enabled"),
				j = N => {
					const ce = l(N, "ctm.load_balancers");
					return typeof ce == "number" ? ce : 0
				},
				$ = N => {
					const ce = l(N, "ctm.pools");
					return typeof ce == "number" ? ce : 0
				},
				X = N => {
					const ce = l(N, "ctm.origins");
					return typeof ce == "number" ? ce : 0
				},
				V = N => i(N, "workers.enabled"),
				H = N => i(N, "stream.enabled"),
				le = N => {
					const ce = l(N, "access.users_allowed");
					return typeof ce == "number" ? ce : 0
				},
				W = N => le(N) > 0,
				Ee = N => {
					const ce = d(N, "dedicated_certificates");
					return typeof ce == "number" ? ce : 0
				},
				F = N => Ee(N) > 0,
				S = N => {
					const ce = d(N, "rate_limiting.max_rules");
					return typeof ce == "number" ? ce : 0
				},
				x = N => i(N, "rate_limiting.enabled"),
				Y = N => {
					const ce = d(N, "page_rules");
					return typeof ce == "number" ? ce : 0
				},
				oe = N => Y(N) > 0,
				k = N => {
					const ce = l(N, "dns_firewall.max_clusters_allowed");
					return typeof ce == "number" ? ce : 0
				},
				C = N => k(N) > 0,
				P = N => p(N, "zone.advanced_certificate_manager") || i(N, "zone.advanced_certificate_manager"),
				A = N => d(N, "authoritative_dns.proxy_record_allowed") === !1 || l(N, "authoritative_dns.proxy_record_allowed") === !1,
				U = N => i(N, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				B = N => d(N, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				ae = N => {
					const ce = d(N, "authoritative_dns.min_record_ttl_allowed");
					return typeof ce == "number" && ce > 1 ? ce : 60
				},
				fe = N => i(N, "foundation_dns.advanced_nameservers_allowed") || p(N, "foundation_dns.advanced_nameservers_allowed"),
				Oe = (N, ce) => ((0, e.el)(window.location.pathname) ? d : l)(N, ce),
				Pe = N => i(N, "authoritative_dns.multi_provider_allowed") || p(N, "authoritative_dns.multi_provider_allowed")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				r: function() {
					return m
				},
				v: function() {
					return c
				}
			});
			var e = n("../react/utils/i18n.ts"),
				o = n("../../../common/intl/intl-types/src/index.ts"),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const m = f => {
				const d = f.userCommPreferences.data;
				if (d == null ? void 0 : d["language-locale"]) return s.Z.set(e.ly, d["language-locale"]), d["language-locale"];
				{
					s.Z.has(e.ly) || s.Z.set(e.ly, e.ZW);
					const p = s.Z.get(e.ly);
					return c(p) ? p : e.ZW
				}
			};

			function c(f) {
				const d = Object.keys(o.Q).find(p => o.Q[p] === f);
				return !!f && typeof f == "string" && d != null && (0, e.S8)(!1, d)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				$8: function() {
					return c
				},
				BG: function() {
					return _
				},
				BY: function() {
					return b
				},
				GP: function() {
					return i
				},
				GU: function() {
					return R
				},
				PR: function() {
					return s
				},
				h$: function() {
					return I
				},
				h8: function() {
					return t
				},
				kk: function() {
					return g
				},
				l8: function() {
					return d
				},
				mV: function() {
					return E
				},
				vW: function() {
					return f
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const o = D => D.user,
				s = (0, e.P1)("user", o),
				m = D => {
					var h;
					return (h = s(D)) === null || h === void 0 ? void 0 : h.email.endsWith("@cloudflare.com")
				},
				c = D => {
					var h;
					return !!((h = s(D)) === null || h === void 0 ? void 0 : h.id)
				},
				f = D => {
					const h = s(D);
					if (!!h) return h.first_name && h.last_name ? `${h.first_name} ${h.last_name}` : h.email
				},
				d = D => {
					const h = s(D);
					return h && h.has_enterprise_zones
				},
				p = D => D.userCommPreferences,
				_ = (0, e.P1)("userCommPreferences", p),
				t = D => {
					const h = s(D);
					return h && h.email_verified
				},
				r = D => {
					const h = _(D);
					return h && h.preferences.marketing_communication
				},
				a = D => D.userDetails,
				l = (0, e.P1)("userDetails", a),
				i = D => {
					const h = l(D);
					return h && h["2FA-RECOVERY"] === "scheduled"
				},
				E = D => {
					const h = l(D);
					return h && h["2FA-RECOVERY"] === "interrupted"
				},
				g = D => {
					const h = l(D);
					return h == null ? void 0 : h["NEW-USER-EMAIL"]
				},
				I = D => D.gates.assignments,
				v = (D, h) => D && D[h];

			function b(D, h) {
				const J = I(D);
				return J ? v(J, h) : void 0
			}
			const R = (D, h) => b(D, h) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				$4: function() {
					return J
				},
				$t: function() {
					return qe
				},
				A4: function() {
					return g
				},
				Cu: function() {
					return I
				},
				DQ: function() {
					return Oe
				},
				Ej: function() {
					return Q
				},
				FH: function() {
					return b
				},
				ID: function() {
					return x
				},
				Ko: function() {
					return Je
				},
				Le: function() {
					return ce
				},
				Ly: function() {
					return C
				},
				M3: function() {
					return Ne
				},
				N8: function() {
					return $e
				},
				NY: function() {
					return B
				},
				Ns: function() {
					return oe
				},
				Ox: function() {
					return Qe
				},
				P4: function() {
					return Z
				},
				RO: function() {
					return F
				},
				SX: function() {
					return ae
				},
				Tr: function() {
					return Ue
				},
				U: function() {
					return v
				},
				Ug: function() {
					return D
				},
				V6: function() {
					return rt
				},
				WR: function() {
					return De
				},
				Xg: function() {
					return E
				},
				ZB: function() {
					return N
				},
				_y: function() {
					return Y
				},
				cU: function() {
					return Ve
				},
				cg: function() {
					return fe
				},
				d2: function() {
					return H
				},
				il: function() {
					return k
				},
				jN: function() {
					return j
				},
				jg: function() {
					return A
				},
				kC: function() {
					return q
				},
				kf: function() {
					return Ye
				},
				ko: function() {
					return Ee
				},
				mK: function() {
					return Ge
				},
				nA: function() {
					return i
				},
				oY: function() {
					return G
				},
				qM: function() {
					return Se
				},
				rq: function() {
					return U
				},
				tS: function() {
					return h
				},
				tU: function() {
					return X
				},
				vB: function() {
					return et
				},
				vM: function() {
					return $
				},
				wH: function() {
					return R
				},
				wn: function() {
					return Pe
				},
				xU: function() {
					return V
				},
				xw: function() {
					return Fe
				},
				z5: function() {
					return S
				},
				zO: function() {
					return We
				},
				zW: function() {
					return ze
				},
				zh: function() {
					return le
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				o = n("../react/app/redux/normalizer.js"),
				s = n("../../../../node_modules/lodash/get.js"),
				m = n.n(s),
				c = n("../../../../node_modules/moment/moment.js"),
				f = n.n(c),
				d = n("../react/common/constants/billing/index.ts");

			function p(M) {
				for (var ee = 1; ee < arguments.length; ee++) {
					var me = arguments[ee] != null ? Object(arguments[ee]) : {},
						re = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(me).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(me, ie).enumerable
					})), re.forEach(function(ie) {
						_(M, ie, me[ie])
					})
				}
				return M
			}

			function _(M, ee, me) {
				return ee = t(ee), ee in M ? Object.defineProperty(M, ee, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[ee] = me, M
			}

			function t(M) {
				var ee = r(M, "string");
				return typeof ee == "symbol" ? ee : String(ee)
			}

			function r(M, ee) {
				if (typeof M != "object" || M === null) return M;
				var me = M[Symbol.toPrimitive];
				if (me !== void 0) {
					var re = me.call(M, ee || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ee === "string" ? String : Number)(M)
			}
			const a = (0, o.P1)("zone", M => M.zone),
				l = M => {
					var ee;
					return (ee = M.zoneVersioning) === null || ee === void 0 ? void 0 : ee.zoneVersionSelector
				},
				i = (0, e.P1)(a, l, (M, ee) => {
					var me, re, ie;
					let pe;
					if (Array.isArray(M) && M.length === 1 ? pe = M[0] : M && !Array.isArray(M) && (pe = M), !pe) return;
					const ge = !!(ee == null ? void 0 : ee.enabled);
					return p({}, pe, pe.name && {
						name: ge ? ee.rootZoneName : pe.name
					}, {
						versioning: {
							enabled: ge,
							isRoot: !((me = pe.name) === null || me === void 0 ? void 0 : me.endsWith(".config.cfdata.org")),
							version: ge ? ee.selectedVersion : 0,
							rootZoneId: ge ? ee.rootZoneId : (re = (ie = pe) === null || ie === void 0 ? void 0 : ie.id) !== null && re !== void 0 ? re : ""
						}
					})
				}),
				E = M => M.zone,
				g = (0, e.P1)(i, E, (M, ee) => ({
					data: M,
					meta: ee
				})),
				I = M => {
					var ee, me;
					return (ee = (me = i(M)) === null || me === void 0 ? void 0 : me.id) !== null && ee !== void 0 ? ee : ""
				},
				v = M => M.zones,
				b = M => M.zonesRoot,
				R = M => M.zonesAccount,
				D = (0, o.P1)("zones", v),
				h = (0, o.P1)("zonesRoot", b),
				J = (0, o.P1)("zonesAccount", R);

			function q(M) {
				const ee = i(M);
				return ee ? ee.created_on : null
			}

			function Q(M, ee, me) {
				const re = q(M);
				if (!re) return;
				const ie = f().duration(ee, me),
					pe = new Date(re),
					ge = new Date(new Date().getTime() - ie.asMilliseconds());
				return pe.getTime() > ge.getTime()
			}

			function Z(M) {
				const ee = i(M);
				return ee ? ee.status : null
			}

			function G(M) {
				const ee = i(M);
				return ee ? ee.type : null
			}

			function j(M) {
				return M.plan_pending ? M.plan_pending : M.plan
			}

			function $(M) {
				const ee = i(M);
				if (!ee) return;
				const me = j(ee);
				return me && me.legacy_id
			}

			function X(M, ee) {
				const me = j(M);
				return !!me && d.Gs.indexOf(me.legacy_id) >= d.Gs.indexOf(ee)
			}

			function V(M) {
				return !!M && M.status === "initializing"
			}

			function H(M) {
				return !!M && M.status === "pending"
			}

			function le(M) {
				return !!M && M.status === "active"
			}

			function W(M, ee) {
				if (!M) return !1;
				const me = j(M);
				return !!me && me.legacy_id === ee
			}

			function Ee(M) {
				return W(M, "enterprise")
			}
			const F = M => Ee(i(M));

			function S(M) {
				return W(M, "business")
			}
			const x = M => S(i(M));

			function Y(M) {
				return W(M, "pro")
			}

			function oe(M) {
				return W(M, "free")
			}
			const k = M => oe(i(M));

			function C(M) {
				return !Ee(M)
			}

			function P(M) {
				return M && M.owner
			}

			function A(M, ee) {
				const me = P(ee);
				return !!me && me.type === "user" && me.id === M.id
			}

			function U(M) {
				const ee = i(M);
				return !!ee && ee.type === "partial"
			}

			function B(M) {
				const ee = i(M);
				return !!ee && ee.type === "secondary"
			}

			function ae(M) {
				const ee = i(M);
				return ee && U(M) && ee.host
			}
			const fe = M => {
					var ee;
					const me = i(M);
					return !!(me == null ? void 0 : me.host) && !!((ee = me.plan) === null || ee === void 0 ? void 0 : ee.externally_managed)
				},
				Oe = M => {
					const ee = D(M);
					return ee && ee.some(Ee)
				},
				Pe = (M, ee) => {
					const me = i(M);
					return me && me.betas ? me.betas.includes(ee) : !1
				},
				N = (M, ...ee) => m()(M, ["zoneFlags", "data", ...ee]),
				ce = (M, ...ee) => m()(M, ["accountFlags", "data", ...ee]),
				Se = M => M.accountFlags.isRequesting,
				Fe = M => M.zoneFlags.isRequesting,
				Ue = (M, ...ee) => m()(M, ["zoneFlagsChanges", "data", ...ee]),
				Je = M => M.zoneFlagsChanges.isRequesting,
				Ve = M => M.zoneFlags && M.zoneFlags.data,
				We = M => M.zoneFlags,
				st = (0, e.P1)(Ve, We, (M, ee) => ({
					data: M,
					meta: ee
				})),
				$e = (0, o.P1)("abuseUrls", M => M.overview.abuseUrls),
				Ne = M => {
					const ee = i(M);
					return ee ? `/${ee.account.id}/${ee.name}` : null
				},
				rt = M => M.zoneMarketingCampaigns,
				Ye = M => M.overview.zoneBlocks.data,
				ze = M => M.overview.zoneBlocks.isRequesting,
				qe = M => M.overview.zoneBlocks.hasData,
				Ge = M => {
					var ee, me;
					return (M == null || (ee = M.overview.zoneBlocks) === null || ee === void 0 || (me = ee.paginationData) === null || me === void 0 ? void 0 : me.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				et = M => M.overview.zoneBlocksReview.isRequesting,
				Qe = M => M.overview.zoneHold,
				De = (0, o.P1)("zoneHold", Qe)
		},
		"../react/common/utils/formatDate.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			y.Z = (o, s, m = !1) => (0, e.p6)(o, s, m)
		},
		"../react/common/utils/hasRole.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				n: function() {
					return o
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts");
			const o = (s, m) => {
				const {
					roles: c = []
				} = (0, e.uF)(s) || {};
				return m.some(f => c.includes(f))
			}
		},
		"../react/common/utils/isGuards.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Q$: function() {
					return s
				},
				t: function() {
					return f
				},
				v5: function() {
					return m
				},
				zE: function() {
					return c
				}
			});
			var e = n("../react/common/constants/index.ts"),
				o = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const s = d => d ? ["page", "per_page", "count", "total_count"].every(_ => _ in d && d[_]) : !1,
				m = (d = "") => e.Dy.includes(d.toLowerCase()),
				c = d => d !== null && typeof d == "object" && "name" in d && "size" in d && "type" in d && typeof d.slice == "function",
				f = d => (0, o.Z)(d)
		},
		"../react/common/validators/index.js": function(z, y, n) {
			"use strict";
			n.d(y, {
				K2: function() {
					return o
				},
				Lb: function() {
					return s
				},
				XI: function() {
					return m
				},
				bK: function() {
					return p
				},
				jk: function() {
					return d
				},
				wb: function() {
					return c
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = _ => /^https?:\/\/(.*)/.test(_),
				s = _ => e.default.hostname.test(_),
				m = _ => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(_),
				c = _ => /^[!-~]+$/.test(_),
				f = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				d = _ => f.test(_),
				p = _ => !!_ && !!_.length && /^[ -~]+$/.test(_)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(z, y, n) {
			"use strict";
			n.d(y, {
				DZ: function() {
					return m
				},
				GA: function() {
					return _
				},
				hT: function() {
					return f
				},
				p6: function() {
					return s
				},
				qc: function() {
					return c
				},
				w9: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e);
			const s = a => o().utc(a).format("YYYY-MM-DD"),
				m = a => o().utc(a).format(),
				c = a => o().utc(a).startOf("minute").format(),
				f = a => new Date(a),
				d = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				p = a => {
					const l = a / 60 / 60 / 1e3;
					return d[Object.keys(d).sort((i, E) => E - i).find(i => l >= i)]
				},
				_ = (a, l = i => i.avg && i.avg.sampleInterval ? i.avg.sampleInterval : 1) => a.length === 0 ? 1 : a.reduce((i, E) => i + l(E), 0) / a.length,
				t = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = a => t[a]
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Jz: function() {
					return _
				},
				OK: function() {
					return c
				},
				_Y: function() {
					return d
				},
				fD: function() {
					return r
				},
				h_: function() {
					return p
				},
				w6: function() {
					return a
				},
				yc: function() {
					return t
				}
			});

			function e(i) {
				for (var E = 1; E < arguments.length; E++) {
					var g = arguments[E] != null ? Object(arguments[E]) : {},
						I = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(g).filter(function(v) {
						return Object.getOwnPropertyDescriptor(g, v).enumerable
					})), I.forEach(function(v) {
						o(i, v, g[v])
					})
				}
				return i
			}

			function o(i, E, g) {
				return E = s(E), E in i ? Object.defineProperty(i, E, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[E] = g, i
			}

			function s(i) {
				var E = m(i, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function m(i, E) {
				if (typeof i != "object" || i === null) return i;
				var g = i[Symbol.toPrimitive];
				if (g !== void 0) {
					var I = g.call(i, E || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(i)
			}
			let c = function(i) {
					return i.Sending = "sending", i.Success = "success", i.Failed = "failed", i.Latent = "latent", i
				}({}),
				f = function(i) {
					return i[i.Success = 200] = "Success", i[i.BadRequest = 400] = "BadRequest", i
				}({});
			const d = {
					status: c.Latent,
					statusCode: void 0
				},
				p = {
					status: c.Sending
				},
				_ = {
					status: c.Success,
					statusCode: f.Success
				},
				t = {
					status: c.Failed,
					statusCode: f.BadRequest
				},
				r = {
					token: null,
					zone: null,
					isTokenValid: !1,
					user: null
				},
				a = {
					appsList: e({
						value: []
					}, d),
					installsList: e({
						value: []
					}, d),
					categoriesList: e({
						value: []
					}, d),
					recommendedAppsList: e({
						value: []
					}, d),
					metadata: e({
						value: null
					}, d),
					app: e({
						value: null
					}, d),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, d)
				},
				l = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Dl: function() {
					return a
				},
				Ux: function() {
					return l
				},
				cz: function() {
					return E
				},
				im: function() {
					return _
				},
				pG: function() {
					return i
				},
				t$: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/lodash-es/get.js"),
				o = n("../../../../node_modules/lodash-es/isEqual.js"),
				s = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function m(v) {
				for (var b = 1; b < arguments.length; b++) {
					var R = arguments[b] != null ? Object(arguments[b]) : {},
						D = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(R).filter(function(h) {
						return Object.getOwnPropertyDescriptor(R, h).enumerable
					})), D.forEach(function(h) {
						c(v, h, R[h])
					})
				}
				return v
			}

			function c(v, b, R) {
				return b = f(b), b in v ? Object.defineProperty(v, b, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[b] = R, v
			}

			function f(v) {
				var b = d(v, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function d(v, b) {
				if (typeof v != "object" || v === null) return v;
				var R = v[Symbol.toPrimitive];
				if (R !== void 0) {
					var D = R.call(v, b || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(v)
			}
			const p = v => v.test(window.location.hostname),
				_ = () => p(s.j9),
				t = () => p(MARKETPLACE_LOCAL_URL_REGEXP),
				r = (v, b) => {
					const R = random(0, 1) ? -1 : 1;
					return v.points === b.points || v.points >= APP_POINTS_THRESHOLD && b.points >= APP_POINTS_THRESHOLD ? R : v.points < 0 || b.points < 0 || v.points >= APP_POINTS_THRESHOLD || b.points >= APP_POINTS_THRESHOLD ? b.points - v.points : R
				},
				a = (v, b, R) => {
					const D = (0, e.Z)(b, R),
						h = (0, e.Z)(v, R);
					return D && !(0, o.Z)(D, h)
				},
				l = {
					transformers: {
						transformAppIdsToApps: (v, b) => b.map(R => v.find(D => D.id === R)),
						addAppVersionInfo: (v, b) => m({}, b, {
							currentVersion: b.versions.find(R => R.tag === v.versionTag),
							latestVersion: b.versions.find(R => R.tag === b.infoVersion)
						}),
						addCurrentSiteInstall: (v, b) => m({}, b, {
							currentSiteInstall: v.find(R => R.appId === b.id)
						})
					}
				},
				i = (v, b, R) => m({}, v, b, R ? {
					value: R
				} : {}),
				E = v => v.map(b => b.status),
				g = v => v.apps ? v.apps : v,
				I = v => {
					let b = ["by-cloudflare"];
					return v.filter(R => !b.includes(R.id) && R.visible).sort((R, D) => R.points < D.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(z, y, n) {
			"use strict";
			n.r(y), n.d(y, {
				categorySlugTranslationKey: function() {
					return c
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return m
				},
				translations: function() {
					return s
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: s,
				namespace: m
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

			function c(f) {
				const d = f.replace(/-/g, "_");
				return Object.keys(o).includes(d) ? d : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				L: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/url-join/lib/url-join.js"),
				o = n.n(e),
				s = n("../../../../node_modules/lodash-es/defaults.js"),
				m = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(l) {
				for (var i = 1; i < arguments.length; i++) {
					var E = arguments[i] != null ? Object(arguments[i]) : {},
						g = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(E).filter(function(I) {
						return Object.getOwnPropertyDescriptor(E, I).enumerable
					})), g.forEach(function(I) {
						p(l, I, E[I])
					})
				}
				return l
			}

			function f(l, i) {
				if (l == null) return {};
				var E = d(l, i),
					g, I;
				if (Object.getOwnPropertySymbols) {
					var v = Object.getOwnPropertySymbols(l);
					for (I = 0; I < v.length; I++) g = v[I], !(i.indexOf(g) >= 0) && (!Object.prototype.propertyIsEnumerable.call(l, g) || (E[g] = l[g]))
				}
				return E
			}

			function d(l, i) {
				if (l == null) return {};
				var E = {},
					g = Object.keys(l),
					I, v;
				for (v = 0; v < g.length; v++) I = g[v], !(i.indexOf(I) >= 0) && (E[I] = l[I]);
				return E
			}

			function p(l, i, E) {
				return i = _(i), i in l ? Object.defineProperty(l, i, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[i] = E, l
			}

			function _(l) {
				var i = t(l, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function t(l, i) {
				if (typeof l != "object" || l === null) return l;
				var E = l[Symbol.toPrimitive];
				if (E !== void 0) {
					var g = E.call(l, i || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(l)
			}
			class r {
				constructor(i) {
					p(this, "token", void 0), p(this, "options", void 0), p(this, "setAuthHeader", E => {
						this.token = E
					}), this.token = "", this.options = (0, s.Z)(i, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(i = "GET", E, g = {}) {
					const {
						body: I
					} = g, v = f(g, ["body"]);
					return fetch(o()(this.options.baseUrl, E), c({
						method: i
					}, v, I ? {
						body: JSON.stringify(I)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(c({
							Accept: "application/json, text/plain, */*"
						}, g.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(i, E = {}) {
					const g = await this.request("GET", i, E);
					return this.parseJSONResponse(g)
				}
				async postJSON(i, E = {}) {
					const g = await this.request("POST", i, c({}, E, {
						headers: c({}, E.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(g)
				}
				parseJSONResponse(i) {
					return i.json()
				}
			}
			p(r, "defaults", {
				baseUrl: (0, m.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const a = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				JX: function() {
					return _
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
				s = n("../node_modules/query-string/query-string.js"),
				m = n.n(s),
				c = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				f = n("../react/pages/apps/marketplace/requests/Requester.ts"),
				d = n("../react/pages/apps/marketplace/libraries/resource.ts");

			function* p(i, E, g, I) {
				const v = (0, e.Z)(E),
					[b, R, D] = [`get${v}Sending`, `get${v}Success`, `get${v}Failed`];
				try {
					yield(0, c.gz)(i[b]());
					const h = yield(0, c.RE)(a, g);
					let J = h;
					if (J.error) {
						yield(0, c.gz)(i[D]());
						return
					}
					return I && (J = yield I(h)), yield(0, c.gz)(i[R](J)), J
				} catch {
					yield(0, c.gz)(i[D]())
				}
			}

			function* _(i, E, g, I) {
				const v = (0, e.Z)(E),
					b = `get${v}Sending`,
					R = `get${v}Success`,
					D = `get${v}Failed`;
				try {
					yield(0, c.gz)(i[b]());
					const h = yield(0, c.RE)(l, {
						url: g,
						data: I
					});
					return yield(0, c.gz)(i[R](h)), h
				} catch {
					yield(0, c.gz)(i[D]())
				}
			}
			const t = i => (0, o.Z)(i) ? "" : `?${s.stringify(i)}`,
				r = {
					app: new d.c({
						name: "app",
						url: (i, E) => `apps/${i}${t(E)}`
					}),
					apps: new d.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new d.c({
							name: "installs",
							url: i => `sites/${i}/installs`
						}),
						delete: new d.c({
							name: "installs",
							url: i => `installs/${i}`
						})
					},
					categories: new d.c({
						name: "categories",
						url: (i = {}) => "categories" + t(i)
					}),
					metadata: {
						get: new d.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						}),
						post: new d.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						})
					},
					ratings: {
						default: new d.c({
							name: "ratings",
							url: (i = {}) => "ratings" + t(i)
						}),
						delete: new d.c({
							name: "ratings",
							url: i => `ratings/${i}`
						})
					},
					recommendedApps: new d.c({
						name: "recommendedApps",
						url: (i = {}) => "apps/recommend" + t(i)
					}),
					developedApps: new d.c({
						name: "developedApps",
						url: i => `user/${i}/apps`
					})
				},
				a = async i => f.L.fetchJSON(i), l = async i => {
					const {
						url: E,
						data: g
					} = i;
					return f.L.postJSON(E, {
						body: g
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Nw: function() {
					return p
				},
				U4: function() {
					return d
				},
				XO: function() {
					return f
				},
				ZP: function() {
					return _
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function o(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), l.forEach(function(i) {
						s(t, i, a[i])
					})
				}
				return t
			}

			function s(t, r, a) {
				return r = m(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function m(t) {
				var r = c(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function c(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let f = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				d = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const p = {
				resetState: () => ({
					type: d.ResetState
				}),
				initSaga: t => ({
					type: d.InitSaga,
					zoneId: t
				}),
				setZone: t => ({
					type: d.SetZone,
					zone: t
				}),
				setToken: t => ({
					type: d.SetToken,
					token: t
				}),
				clearToken: () => ({
					type: d.ClearToken
				}),
				setTokenValid: t => ({
					type: d.SetTokenValid,
					isTokenValid: t
				}),
				getCurrentUserSaga: () => ({
					type: d.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: d.CurrentUserSending
				}),
				getCurrentUserSuccess: t => ({
					type: d.CurrentUserSuccess,
					user: t
				}),
				getCurrentUserFailed: () => ({
					type: d.CurrentUserFailed
				})
			};

			function _(t = e.fD, r) {
				switch (r.type) {
					case d.ResetState:
						return o({}, e.fD);
					case d.CurrentUserSending:
						return o({}, t);
					case d.CurrentUserSuccess:
						const {
							user: a
						} = r;
						return o({}, t, {
							user: a
						});
					case d.CurrentUserFailed:
						return o({}, t);
					case d.SetZone:
						const {
							zone: l
						} = r;
						return o({}, t, {
							zone: l
						});
					case d.SetToken:
						const {
							token: i
						} = r;
						return o({}, t, {
							token: i
						});
					case d.ClearToken:
						return o({}, t, {
							token: null
						});
					case d.SetTokenValid:
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
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Nw: function() {
					return _
				},
				U4: function() {
					return p
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return d
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(E) {
						return Object.getOwnPropertyDescriptor(l, E).enumerable
					})), i.forEach(function(E) {
						m(r, E, l[E])
					})
				}
				return r
			}

			function m(r, a, l) {
				return a = c(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function c(r) {
				var a = f(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let d = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				p = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const _ = {
				resetState: () => ({
					type: p.ResetState
				}),
				zoneChangedSaga: () => ({
					type: p.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (r, a) => ({
					type: p.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: a
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: p.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, a) => ({
					type: p.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: a
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
				getAppInfoAssetsSaga: (r, a, l) => ({
					type: p.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: a,
					version: l
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
				postMetadataSaga: (r, a) => ({
					type: p.PostMetadataSaga,
					zoneId: r,
					data: a
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
				getRecommendedAppsSaga: (r, a, l) => ({
					type: p.GetRecommendedAppsSaga,
					appsList: r,
					installsList: a,
					metadata: l
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

			function t(r = e.w6, a) {
				switch (a.type) {
					case p.ResetState:
						return s({}, e.w6);
					case p.ZoneChangedSaga:
						return s({}, r, {
							installsList: s({}, e.w6.installsList),
							recommendedAppsList: s({}, e.w6.recommendedAppsList),
							metadata: s({}, e.w6.metadata)
						});
					case p.GetAppsSending:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.h_))
						});
					case p.GetAppsSuccess:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.Jz, a.appsList))
						});
					case p.GetAppsFailed:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.yc))
						});
					case p.GetInstallsSending:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.h_))
						});
					case p.GetInstallsSuccess:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.Jz, a.installsList))
						});
					case p.GetInstallsFailed:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.yc))
						});
					case p.GetCategoriesSending:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case p.GetCategoriesSuccess:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.Jz, a.categoriesList))
						});
					case p.GetCategoriesFailed:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case p.GetMetadataSending:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.GetMetadataSuccess:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case p.GetMetadataFailed:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.PostMetadataSending:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.PostMetadataSuccess:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case p.PostMetadataFailed:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.GetRecommendedAppsSending:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case p.GetRecommendedAppsSuccess:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.Jz, a.recommendedAppsList))
						});
					case p.GetRecommendedAppsFailed:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case p.GetAppSending:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.h_))
						});
					case p.GetAppSuccess:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.Jz, a.app))
						});
					case p.GetAppFailed:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.yc))
						});
					case p.ClearApp:
						return s({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case p.SetUpdatableInstalls:
						return s({}, r, {
							updatableInstallsList: a.updatableInstallsList
						});
					case p.GetDevelopedAppsSending:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case p.GetDevelopedAppsSuccess:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.Jz, a.developedApps))
						});
					case p.GetDevelopedAppsFailed:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o
			}({})
		},
		"../react/pages/dns/dns-records/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
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
		"../react/pages/email/types.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
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
			let e = function(c) {
				return c.ROOT = "root", c.DSTADDRS_CARD = "dstaddrs_card", c.RULES_CARD = "rules_card", c.CATCHALL_CARD = "catchall_card", c.SETTINGS_PAGE = "settings_page", c.WORKERS_PAGE = "workers_page", c
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
			let s = function(c) {
				return c[c.Verified = 0] = "Verified", c[c.Pending = 1] = "Pending", c[c.Missing = 2] = "Missing", c[c.WorkerNotFound = 3] = "WorkerNotFound", c[c.Unknown = 4] = "Unknown", c[c.Loading = 5] = "Loading", c
			}({});
			const m = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/api-shield/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Fj: function() {
					return p
				},
				kq: function() {
					return d
				},
				xr: function() {
					return _
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), l.forEach(function(i) {
						m(t, i, a[i])
					})
				}
				return t
			}

			function m(t, r, a) {
				return r = c(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function c(t) {
				var r = f(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function f(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let d = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.SEQUENCE_RULES = "Sequence Rules", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
			}({});
			const p = {
					[d.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[d.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[d.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[d.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[d.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[d.JWT_VALIDATION]: {
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
					[d.SETTINGS]: {
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
					name: t,
					category: r = "user journey",
					product: a = d.MAIN,
					productName: l,
					additionalData: i
				}) => {
					o().sendEvent(t, s({
						category: r,
						product: a,
						productName: l
					}, i || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
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
			let e = function(m) {
					return m.INITIAL_FETCH_SCORES = "view bots scores distribution", m.FETCH_CONFIGURATION = "view bots configuration page", m.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", m.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", m.UPDATE_SETTINGS = "update bots settings", m.DELETE_RULE = "delete bots ruleset", m.UPDATE_RULE = "update bots ruleset", m.FETCH_RULES = "view bots ruleset", m.CONFIGURE_BOT_MANAGEMENT = "view bots management", m.WAF_RULES_REDIRECT = "redirect waf rules", m
				}({}),
				o = function(m) {
					return m.PROVIDED_TEMPLATE = "provided template link in detection card", m.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", m.USE_TEMPLATE = "use template", m.CREATE_FIREWALL_RULE = "create firewall rule", m.WAF_RULES = "waf rules", m
				}({});
			const s = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
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
		"../react/pages/firewall/rulesets/tracking.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
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
					return m
				}
			});
			let e = function(c) {
				return c.DELETE = "delete", c.CREATE = "create", c.GET = "get", c.UPDATE = "update", c
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
				s = (c, f) => {
					var d;
					return `${f} ${(d=o[c])!==null&&d!==void 0?d:c} rule${f===e.GET?"s":""}`
				},
				m = () => {
					var c, f;
					return (c = Object.keys(o)) === null || c === void 0 || (f = c.map(d => {
						var p;
						return (p = Object.values(e)) === null || p === void 0 ? void 0 : p.map(_ => s(d, _))
					})) === null || f === void 0 ? void 0 : f.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				AS: function() {
					return f
				},
				IK: function() {
					return r
				},
				Ki: function() {
					return s
				},
				Lz: function() {
					return a
				},
				nT: function() {
					return p
				},
				o4: function() {
					return l
				},
				oY: function() {
					return m
				},
				qH: function() {
					return t
				},
				x3: function() {
					return d
				}
			});
			var e = n("../react/pages/firewall/analytics/labels.ts"),
				o = n("../react/common/constants/analytics/botScoreSrc.ts");
			const s = ["block", "challenge", "jschallenge", "managedChallenge"],
				m = ["miss", "expired", "bypass", "dynamic"],
				c = i => Object.fromEntries(Object.entries(i).map(([E, g]) => [g, E])),
				f = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				d = c(f),
				p = {
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
				_ = c(p),
				t = c(o.EG);
			let r = function(i) {
				return i.SAMPLED = "sampled", i.RAW = "raw", i
			}({});
			const a = "security-analytics-log-explorer";
			let l = function(i) {
				return i.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', i.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', i.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', i.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', i.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', i
			}({})
		},
		"../react/pages/firewall/settings/cards/security-txt/helpers.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				$E: function() {
					return r
				},
				Mb: function() {
					return a
				},
				Q4: function() {
					return i
				},
				QF: function() {
					return _
				},
				Wv: function() {
					return l
				},
				f6: function() {
					return t
				},
				vc: function() {
					return E
				}
			});
			var e = n("../react/pages/firewall/settings/cards/security-txt/types.ts"),
				o = n("../../../../node_modules/yup/es/index.js"),
				s = n("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				m = n("../react/pages/analytics/common/utils/gqlUtils.js");

			function c(g) {
				for (var I = 1; I < arguments.length; I++) {
					var v = arguments[I] != null ? Object(arguments[I]) : {},
						b = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(v).filter(function(R) {
						return Object.getOwnPropertyDescriptor(v, R).enumerable
					})), b.forEach(function(R) {
						f(g, R, v[R])
					})
				}
				return g
			}

			function f(g, I, v) {
				return I = d(I), I in g ? Object.defineProperty(g, I, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[I] = v, g
			}

			function d(g) {
				var I = p(g, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function p(g, I) {
				if (typeof g != "object" || g === null) return g;
				var v = g[Symbol.toPrimitive];
				if (v !== void 0) {
					var b = v.call(g, I || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(g)
			}
			const _ = {
					[e.T.ENABLED]: !0,
					[e.T.CONTACT]: [""],
					[e.T.EXPIRES]: ""
				},
				t = "security-txt-enabled",
				r = {
					[e.T.CONTACT]: {
						label: "security_txt.fields.contact",
						tooltip: "security_txt.fields.contact.description",
						placeholder: "security_txt.fields.contact.placeholder"
					},
					[e.T.EXPIRES]: {
						label: "security_txt.fields.expires",
						tooltip: "security_txt.fields.expires.description",
						placeholder: "security_txt.fields.expires.placeholder"
					},
					[e.T.ENCRYPTION]: {
						label: "security_txt.fields.encryption",
						tooltip: "security_txt.fields.encryption.description",
						placeholder: "security_txt.fields.encryption.placeholder"
					},
					[e.T.ACKNOWLEDGMENTS]: {
						label: "security_txt.fields.acknowledgements",
						tooltip: "security_txt.fields.acknowledgements.description",
						placeholder: "security_txt.fields.acknowledgements.placeholder"
					},
					[e.T.CANONICAL]: {
						label: "security_txt.fields.canonical",
						tooltip: "security_txt.fields.canonical.description",
						placeholder: "security_txt.fields.canonical.placeholder"
					},
					[e.T.POLICY]: {
						label: "security_txt.fields.policy",
						tooltip: "security_txt.fields.policy.description",
						placeholder: "security_txt.fields.policy.placeholder"
					},
					[e.T.HIRING]: {
						label: "security_txt.fields.hiring",
						tooltip: "security_txt.fields.hiring.description",
						placeholder: "security_txt.fields.hiring.placeholder"
					},
					[e.T.PREFERRED_LANGUAGES]: {
						label: "security_txt.fields.preferred_languages",
						tooltip: "security_txt.fields.preferred_languages.description",
						placeholder: "security_txt.fields.preferred_languages.placeholder"
					}
				},
				a = g => o.Ry({
					[e.T.CONTACT]: o.IX().of(o.Z_().required(g("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, g("security_txt.fields.contact.format_error"))),
					[e.T.EXPIRES]: o.hT().required(g("common.required")).min(new Date, g("security_txt.fields.expires.min_error"))
				}),
				l = g => {
					const I = {};
					for (const v in g) I[v] = Array.isArray(g[v]) ? g[v].filter(b => !!b) : g[v];
					return c({}, I, {
						expires: (0, m.DZ)(g.expires)
					})
				},
				i = (g, I, v) => {
					const b = [...new Set([e.T.CONTACT, e.T.EXPIRES, ...Object.values(e.T)])],
						R = Object.entries(g).sort(([D], [h]) => b.indexOf(D) - b.indexOf(h)).filter(([D, h]) => !!r[D] && !!h && (!Array.isArray(h) || !!h.length)).map(([D, h]) => Array.isArray(h) ? h.map(J => `${v(r[D].label)}: ${J}`).join(`
`) : `${v(r[D].label)}: ${h}`).join(`
`);
					(0, s.yH)(`Cloudflare_${I}_security.txt`, R, "text/plain;charset=utf-8")
				};
			let E = function(g) {
				return g.CREATED = "created security.txt", g.ENABLED = "enabled security.txt", g.DISABLED = "disabled security.txt", g.DOWNLOADED = "downloaded security.txt", g.UPDATED = "updated security.txt", g.DELETED = "deleted security.txt", g
			}({})
		},
		"../react/pages/firewall/settings/cards/security-txt/types.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				T: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ENABLED = "enabled", o.CONTACT = "contact", o.EXPIRES = "expires", o.ENCRYPTION = "encryption", o.ACKNOWLEDGMENTS = "acknowledgments", o.CANONICAL = "canonical", o.HIRING = "hiring", o.POLICY = "policy", o.PREFERRED_LANGUAGES = "preferred_languages", o
			}({})
		},
		"../react/pages/home/alerts/config.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				jk: function() {
					return I
				},
				w8: function() {
					return v
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				s = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				m = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function c(b) {
				for (var R = 1; R < arguments.length; R++) {
					var D = arguments[R] != null ? Object(arguments[R]) : {},
						h = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(D).filter(function(J) {
						return Object.getOwnPropertyDescriptor(D, J).enumerable
					})), h.forEach(function(J) {
						f(b, J, D[J])
					})
				}
				return b
			}

			function f(b, R, D) {
				return R = d(R), R in b ? Object.defineProperty(b, R, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[R] = D, b
			}

			function d(b) {
				var R = p(b, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function p(b, R) {
				if (typeof b != "object" || b === null) return b;
				var D = b[Symbol.toPrimitive];
				if (D !== void 0) {
					var h = D.call(b, R || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(b)
			}
			const _ = "Notifications",
				t = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				l = (0, e.BC)`${a}/destinations`,
				i = (0, e.BC)`${a}/create`,
				E = (0, e.BC)`${i}/${"alertType"}`,
				g = (0, e.BC)`${a}/edit/${"alertId"}`,
				I = c({
					account: r,
					alerts: a,
					destinations: l,
					createAlert: i,
					createAlertWithSelection: E,
					editAlert: g
				}, o._j, s._j),
				v = c({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, m.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				_j: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				s = (0, e.BC)`${o}/pagerduty/connect`,
				m = (0, e.BC)`${o}/pagerduty/register`,
				c = (0, e.BC)`${o}/pagerduty`,
				f = {
					pagerDutyConnect: s,
					pagerDutyRegister: m,
					pagerDutyList: c
				};
			var d = null
		},
		"../react/pages/home/alerts/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_LIST = "create list", o.DELETE_LIST = "delete list", o.ADD_LIST_ITEM = "add list item", o.DELETE_LIST_ITEM = "delete list item", o
			}({})
		},
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				AA: function() {
					return B
				},
				AN: function() {
					return ye
				},
				AY: function() {
					return ct
				},
				Am: function() {
					return v
				},
				B2: function() {
					return x
				},
				BB: function() {
					return Q
				},
				BF: function() {
					return re
				},
				BQ: function() {
					return L
				},
				E8: function() {
					return he
				},
				Fl: function() {
					return dt
				},
				Fu: function() {
					return j
				},
				Gc: function() {
					return Ke
				},
				Hc: function() {
					return Rt
				},
				IO: function() {
					return te
				},
				JK: function() {
					return We
				},
				K: function() {
					return h
				},
				LI: function() {
					return Re
				},
				LX: function() {
					return ee
				},
				L_: function() {
					return rt
				},
				Ly: function() {
					return kt
				},
				M9: function() {
					return Ae
				},
				MR: function() {
					return oe
				},
				Mj: function() {
					return C
				},
				NB: function() {
					return bt
				},
				Or: function() {
					return A
				},
				P5: function() {
					return xe
				},
				PE: function() {
					return Se
				},
				Pd: function() {
					return Mt
				},
				Pk: function() {
					return Ue
				},
				Pp: function() {
					return qe
				},
				Q1: function() {
					return G
				},
				Qr: function() {
					return me
				},
				Qv: function() {
					return Fe
				},
				Rp: function() {
					return wt
				},
				Sh: function() {
					return nt
				},
				TZ: function() {
					return U
				},
				Tg: function() {
					return st
				},
				Tp: function() {
					return Be
				},
				Uy: function() {
					return Pt
				},
				Vw: function() {
					return X
				},
				W3: function() {
					return Qe
				},
				WR: function() {
					return ue
				},
				WX: function() {
					return Oe
				},
				XF: function() {
					return Ie
				},
				Xc: function() {
					return be
				},
				ZB: function() {
					return Z
				},
				Zs: function() {
					return Ne
				},
				_f: function() {
					return ie
				},
				_k: function() {
					return ke
				},
				b4: function() {
					return fe
				},
				c2: function() {
					return Y
				},
				cE: function() {
					return Lt
				},
				dh: function() {
					return ze
				},
				fE: function() {
					return Ye
				},
				g7: function() {
					return ce
				},
				hO: function() {
					return et
				},
				hV: function() {
					return Tt
				},
				hk: function() {
					return b
				},
				hr: function() {
					return ae
				},
				it: function() {
					return Ge
				},
				jG: function() {
					return ge
				},
				jN: function() {
					return Ve
				},
				m8: function() {
					return Ee
				},
				nm: function() {
					return Ct
				},
				oW: function() {
					return at
				},
				oc: function() {
					return I
				},
				pH: function() {
					return F
				},
				pi: function() {
					return W
				},
				rI: function() {
					return k
				},
				s7: function() {
					return we
				},
				sO: function() {
					return _e
				},
				sg: function() {
					return lt
				},
				tB: function() {
					return g
				},
				tN: function() {
					return N
				},
				vV: function() {
					return pe
				},
				vc: function() {
					return Je
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				o = n.n(e),
				s = n("../../../../node_modules/moment/moment.js"),
				m = n.n(s),
				c = n("../../../common/util/types/src/api/domain.ts"),
				f = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				d = n("../react/utils/translator.tsx"),
				p = n("../react/utils/url.ts"),
				_ = n("../react/pages/home/domain-registration/config.ts"),
				t = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = n("../react/pages/home/domain-registration/types.ts");

			function a(u) {
				for (var O = 1; O < arguments.length; O++) {
					var se = arguments[O] != null ? Object(arguments[O]) : {},
						Ce = Object.keys(se);
					typeof Object.getOwnPropertySymbols == "function" && Ce.push.apply(Ce, Object.getOwnPropertySymbols(se).filter(function(Le) {
						return Object.getOwnPropertyDescriptor(se, Le).enumerable
					})), Ce.forEach(function(Le) {
						l(u, Le, se[Le])
					})
				}
				return u
			}

			function l(u, O, se) {
				return O = i(O), O in u ? Object.defineProperty(u, O, {
					value: se,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[O] = se, u
			}

			function i(u) {
				var O = E(u, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function E(u, O) {
				if (typeof u != "object" || u === null) return u;
				var se = u[Symbol.toPrimitive];
				if (se !== void 0) {
					var Ce = se.call(u, O || "default");
					if (typeof Ce != "object") return Ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(u)
			}

			function g(u) {
				return u.filter(O => O.isSelected).reduce((O, {
					fees: se,
					isZoneEntitlementPresent: Ce
				}) => Ce || !(0, e.isNumber)(se == null ? void 0 : se.transfer_fee) ? O : O + (se == null ? void 0 : se.transfer_fee), 0)
			}

			function I(u) {
				return u.filter(O => O.registrar.toLowerCase() === "godaddy")
			}
			const v = "MMM D, YYYY";

			function b(u, O, se, Ce) {
				var Le, Xe, gt, ft, At, pt, mt, Ot, Et, Ze, yt;
				const Me = u[O.name];
				return {
					name: O.name,
					zone: Me,
					entitlements: se,
					registryCheck: Ce,
					nameservers: O.name_servers,
					isAvailable: O.available,
					lastKnownStatus: O.last_known_status,
					authCode: O.auth_code,
					isEnterpriseZone: (Me == null || (Le = Me.plan) === null || Le === void 0 ? void 0 : Le.legacy_id) === "enterprise",
					isActiveZone: (Me == null ? void 0 : Me.status) === "active",
					corResponsesPending: O.cor_responses_pending,
					isCorLocked: O.cor_locked,
					corLockedUntil: O.cor_locked_until ? m()(O.cor_locked_until).format(v) : null,
					isFullZone: (Me == null ? void 0 : Me.type) == r.xd.Full,
					isLocked: O.locked,
					registrar: O.current_registrar || _.JM,
					zoneId: Me == null ? void 0 : Me.id,
					currentExpiration: m()(O.expires_at).format(v),
					newExpiration: m()(O.expires_at).add(1, "year").format(v),
					lastEntitledAt: O.last_entitled_at ? new Date(O.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(se) && !!se.find(_t => _t.id === _.g5 && _t.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: O.transfer_in && D(O.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: O.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: O.transfer_in,
					transferOut: O.transfer_out,
					autoRenew: O.auto_renew === !0,
					lastTransferredAt: O.last_transferred_at,
					createdAt: O.created_at,
					paymentExpiresAt: m()(O.payment_expires_at).isValid() ? m()(O.payment_expires_at) : m()(O.expires_at).isValid() ? m()(O.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (Xe = O.contacts) === null || Xe === void 0 || (gt = Xe.administrator) === null || gt === void 0 ? void 0 : gt.id,
						[r.l2.Billing]: (ft = O.contacts) === null || ft === void 0 || (At = ft.billing) === null || At === void 0 ? void 0 : At.id,
						[r.l2.Registrant]: (pt = O.contacts) === null || pt === void 0 || (mt = pt.registrant) === null || mt === void 0 ? void 0 : mt.id,
						[r.l2.Technical]: (Ot = O.contacts) === null || Ot === void 0 || (Et = Ot.technical) === null || Et === void 0 ? void 0 : Et.id
					},
					landing: O.landing,
					whois: O.whois,
					emailVerified: O.email_verified,
					materialChanges: J(O.material_changes),
					corChanges: O.cor_changes ? Q(Object.assign(a({}, R), O.cor_changes)) : {},
					registryStatuses: O.registry_statuses ? O.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Ze = O.domain_protection_services) === null || Ze === void 0 ? void 0 : Ze.status
					},
					deletion: {
						isDeletable: O == null || (yt = O.deletion) === null || yt === void 0 ? void 0 : yt.is_deletable
					},
					premiumType: O == null ? void 0 : O.premium_type,
					fees: O == null ? void 0 : O.fees
				}
			}
			const R = {
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

			function D(u) {
				switch (u.enter_auth_code) {
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

			function h(u) {
				let O = u.extensions;
				(O == null ? void 0 : O.application_purpose) && (O == null ? void 0 : O.nexus_category) && (u.extensions = {
					nexusCategory: O.nexus_category,
					applicationPurpose: O.application_purpose
				});
				let se = a({}, typeof u.id == "string" ? {
					id: u.id
				} : {}, {
					first_name: u.firstName,
					organization: u.organization,
					address: u.address1,
					city: u.city,
					state: u.state || "N/A",
					zip: u.zip,
					country: u.country,
					phone: u.phone,
					email: u.email,
					fax: "",
					last_name: u.lastName,
					address2: u.address2,
					email_verified: u.emailVerified
				}, u.extensions ? {
					extensions: {
						nexus_category: u.extensions.nexusCategory,
						application_purpose: u.extensions.applicationPurpose
					}
				} : {});
				return $e(se)
			}

			function J(u) {
				let O = [];
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
				for (const Ce in u) {
					const Le = u[Ce],
						Xe = se[Le];
					O.push(Xe)
				}
				return O
			}
			const q = u => {
				if (!u) return null;
				let O = u;
				return u.includes("C31") && (O = "C31"), u.includes("C32") && (O = "C32"), O
			};

			function Q(u) {
				return a({}, typeof u.id == "string" ? {
					id: u.id
				} : {}, {
					firstName: u.first_name,
					organization: u.organization,
					address1: u.address,
					city: u.city,
					state: u.state,
					zip: u.zip,
					country: u.country,
					phone: u.phone.trim(),
					email: u.email.trim(),
					lastName: u.last_name,
					address2: u.address2,
					emailVerified: u.email_verified
				}, u.extensions ? {
					extensions: {
						nexusCategory: q(u.extensions.nexus_category),
						applicationPurpose: u.extensions.application_purpose
					}
				} : {})
			}

			function Z(u = {}) {
				const O = {
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
						}, u.zone && u.zone.plan || {}),
						type: r.xd.Full
					}, u.zone || {}),
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
					autoTransferStatus: r._n.Pending,
					transferAuthCode: "",
					authCodeStatus: r.BJ.Pending,
					transferApiCallStatus: r.Yh.Pending,
					transferConditions: a({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, u.transferConditions || {}),
					transferIn: a({
						unlock_domain: r.lW.UNKNOWN,
						disable_privacy: r.lW.UNKNOWN,
						enter_auth_code: r.lW.UNKNOWN,
						approve_transfer: r.lW.UNKNOWN,
						accept_foa: r.lW.UNKNOWN,
						can_cancel_transfer: !1
					}, u.transferIn || {}),
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
				return Object.assign(O, u)
			}

			function G(u = {}) {
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
				}, u)
			}

			function j(u) {
				const O = _.Py.concat(_.ui).reduce((se, Ce) => a({}, se, {
					[Ce]: []
				}), {});
				return u.forEach(se => {
					let Ce = $(se.registrar);
					Ce in O || (Ce = _.ui), lt(se.name) && (Ce = "uk"), O[Ce].push(se)
				}), Object.keys(O).sort((se, Ce) => se.localeCompare(Ce)).map(se => ({
					registrar: se,
					domains: O[se]
				})).filter(se => se.domains.length > 0)
			}

			function $(u) {
				return u == null ? void 0 : u.toLowerCase().replace(/\s|,|\./g, "")
			}

			function X(u) {
				if (!u || !u.registrar) return "unknown";
				if (lt(u.name)) return "uk";
				const O = $(u.registrar);
				return O in _.gM ? O : "unknown"
			}
			const V = [];

			function H(u) {
				return V.some(O => u.endsWith("." + O))
			}

			function le(u) {
				return !u.isEnterpriseZone || !Array.isArray(u.entitlements) ? !1 : !!u.entitlements.find(({
					id: O,
					allocation: se
				}) => O === _.g5 && se.value === !0)
			}

			function W(u) {
				var O;
				const se = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let Ce = !1,
					Le = null;
				return (O = u.registryStatuses) === null || O === void 0 || O.some(Xe => {
					se.includes(Xe) && (Le = Xe, Ce = !0)
				}), [Ce, Le]
			}

			function Ee(u, O = !1) {
				if (!u) return [!1, t.keys.cannot_transfer_default];
				if (u.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!u.isFullZone && !le(u)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (u.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (u.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!u.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (!O && Pt(u == null ? void 0 : u.premiumType)) return [!1, t.keys.cannot_transfer_domain_premium];
				if (F(u)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let se;
				for (se in u.transferConditions)
					if (se !== "not_premium" && !u.transferConditions[se]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (H(u.name)) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [Ce, Le] = W(u);
				return Ce && Le ? [!1, t.keys.cannot_transfer_domain_registry_status[Le]] : [!0, ""]
			}

			function F(u) {
				var O, se;
				return !!u.transferIn && !((O = u.transferConditions) === null || O === void 0 ? void 0 : O.not_started) && !!(lt(u.name) || ((se = u.registryStatuses) === null || se === void 0 ? void 0 : se.includes(r.rj.PENDING_TRANSFER)))
			}

			function S(u) {
				return !!u.registrar && !!u.currentExpiration
			}

			function x(u, O = !1) {
				const [se] = Ee(u, O);
				return S(u) ? Pe(u) ? r.M5.InProgressOrOnCF : se ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function Y(u) {
				return u.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(u.transferIn.enter_auth_code) || !1
			}

			function oe(u) {
				return u.registrar === "Cloudflare"
			}

			function k(u) {
				return !!(u == null ? void 0 : u.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function C(u) {
				return !!(u == null ? void 0 : u.includes(r.rj.PENDING_TRANSFER))
			}
			const P = "Invalid date";

			function A(u) {
				return u.newExpiration === P ? "Unavailable" : u.newExpiration
			}

			function U(u) {
				return u.currentExpiration === P ? "Unavailable" : u.currentExpiration
			}

			function B(u) {
				return u.substring(u.indexOf("."))
			}

			function ae(u) {
				return u.map(O => O.name).map(O => B(O)).filter((O, se, Ce) => !Ce.includes(O, se + 1))
			}

			function fe(u) {
				if (_.no) return [!0, ""];
				if (!oe(u)) return [!1, r.ok.NotOnCF];
				if (u.isCorLocked) return [!1, u.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (u.lastTransferredAt) {
					const O = m()(u.lastTransferredAt),
						se = m().duration(m()().diff(O)).as("days"),
						Ce = lt(u.name);
					if (se < (Ce ? 1 : 60)) return [!1, Ce ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (u.createdAt) {
					const O = m()(u.createdAt);
					if (m().duration(m()().diff(O)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function Oe(u) {
				return !!(_.Bc || u.transferOut)
			}

			function Pe(u) {
				return ce(u) || oe(u)
			}

			function N(u) {
				return !ce(u) && oe(u)
			}

			function ce(u) {
				return !u || u.lastKnownStatus === "pendingTransfer" || u.lastKnownStatus === "transferFOAPending" || !oe(u) && u.transferConditions && !u.transferConditions.not_started || !1
			}

			function Se(u) {
				return !(H(u.name) || u.transferConditions && !u.transferConditions.supported_tld)
			}

			function Fe(u) {
				return (u == null ? void 0 : u.includes("/")) ? !0 : u.split("").some(O => O.charCodeAt(0) > 123)
			}

			function Ue(u) {
				switch (u) {
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

			function Je(u) {
				return m()(u.paymentExpiresAt).isBefore(m()())
			}

			function Ve(u) {
				return u.transferIn && u.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function We(u) {
				const O = ["CU", "KP", "IR", "SY"];
				return u.filter(se => !O.includes(se.code))
			}

			function st(u) {
				if (!!u) return `${u.charAt(0).toUpperCase()}${u.slice(1)}${u.charAt(u.length-1)==="."?"":"."}`
			}

			function $e(u) {
				const O = {};
				for (const [se, Ce] of Object.entries(u)) {
					if (Ce && typeof Ce == "string") {
						Object.assign(O, {
							[se]: Ce.trim()
						});
						continue
					}
					Object.assign(O, {
						[se]: Ce
					})
				}
				return O
			}

			function Ne(u) {
				return m()(u).add(40, "days")
			}

			function rt(u) {
				const O = u.paymentExpiresAt || u.payment_expires_at,
					se = Ne(O);
				return m()().isBetween(O, se)
			}

			function Ye(u) {
				var O;
				return !(u == null ? void 0 : u.registryStatuses) || !Array.isArray(u == null ? void 0 : u.registryStatuses) && !(0, e.isString)(u == null ? void 0 : u.registryStatuses) ? !1 : (O = u.registryStatuses) === null || O === void 0 ? void 0 : O.includes(r.rj.REDEMPTION_PERIOD)
			}

			function ze(u) {
				var O;
				return !(u == null ? void 0 : u.registryStatuses) || !Array.isArray(u == null ? void 0 : u.registryStatuses) && !(0, e.isString)(u == null ? void 0 : u.registryStatuses) ? !1 : (O = u.registryStatuses) === null || O === void 0 ? void 0 : O.includes(r.rj.PENDING_DELETE)
			}

			function qe(u) {
				return [".us"].includes(u)
			}

			function Ge(u) {
				return [".us"].includes(u)
			}

			function et(u) {
				switch (u) {
					case ".us":
						return M();
					default:
						return []
				}
			}

			function Qe(u) {
				switch (u) {
					case ".us":
						return De;
					default:
						return {}
				}
			}
			const De = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function M() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([u, O]) => ({
						value: u,
						label: O
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([u, O]) => ({
						value: u,
						label: O
					}))
				}]
			}

			function ee(u, O, se) {
				return O[O.length - 1][se] === u[se]
			}

			function me(u) {
				return Boolean(Object.keys(u).length === 0)
			}

			function re(u) {
				return m()().add(u, "year").format(v)
			}

			function ie({
				accountName: u
			}) {
				var O;
				const se = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((O = u.toLowerCase().match(se)) === null || O === void 0 ? void 0 : O[0]) || ""
			}

			function pe(u) {
				return !!u.match(f.default.email)
			}

			function ge(u) {
				return u === "Registration banned zone error"
			}

			function be(u) {
				return u == null ? void 0 : u.startsWith("Quote error")
			}

			function Ae(u) {
				return u == null ? void 0 : u.startsWith("Invalid acknowledgement")
			}

			function _e(u) {
				return u === (0, d.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function ke(u) {
				return u === "DNS conflict"
			}

			function Be(u) {
				return u === c.W7.PENDING_UPDATE
			}

			function Ke(u) {
				return u ? Object.values(c.wR).filter(O => O !== c.wR.OFFBOARDED).includes(u) : !1
			}

			function we(u) {
				return u ? [c.wR.LOCKED, c.wR.ONBOARDED, c.wR.ONBOARDING_INITIATED, c.wR.PENDING_REGISTRY_LOCK, c.wR.PENDING_REGISTRY_UNLOCK, c.wR.PENDING_UNLOCK_APPROVAL].includes(u) : !1
			}

			function tt(u) {
				return u ? c.wR.UNLOCKED === u : !1
			}

			function He(u) {
				return u ? c.wR.LOCKED === u : !1
			}

			function Re(u) {
				return u ? c.wR.PENDING_REGISTRY_LOCK === u : !1
			}

			function L(u) {
				return u ? [c.wR.PENDING_REGISTRY_UNLOCK, c.wR.PENDING_UNLOCK_APPROVAL].includes(u) : !1
			}

			function te(u) {
				var O;
				return !1
			}

			function ue(u) {
				var O;
				return !1
			}

			function ye(u) {
				var O;
				return !1
			}

			function Ie(u) {
				var O;
				return !1
			}

			function he(u) {
				var O;
				return !1
			}

			function at(u) {
				return Object.keys(c.wR).find(O => c.wR[O].toLowerCase() === u.toLowerCase())
			}

			function ct(u) {
				var O;
				const se = (O = at(u)) === null || O === void 0 ? void 0 : O.toLowerCase();
				return se ? t.keys.protection_status[se] : t.keys.protection_status.unknown
			}

			function Dt(u) {
				return ["com", "net"].includes(u)
			}

			function dt(u) {
				const O = (0, p.pu)(u);
				return Dt(O) ? c.wR.PENDING_REGISTRY_LOCK : c.wR.LOCKED
			}

			function nt(u) {
				return (0, p.pu)(u) === "co" ? 5 : 10
			}

			function Ct(u, O) {
				return O ? 1 : (0, p.pu)(u) === "co" ? 5 : (0, p.pu)(u) === "org" ? 1 : 10
			}

			function lt(u) {
				return (0, p.pu)(u) === "uk"
			}

			function Lt(u) {
				return (0, p.pu)(u) === "us"
			}

			function wt(u) {
				return m()(u).isValid()
			}

			function kt(u) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(u)
			}

			function xe(u) {
				return !!(u == null ? void 0 : u.id)
			}

			function bt(u) {
				return u ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(u) : !1
			}

			function Mt(u) {
				return u ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(u) : !1
			}

			function Tt(u) {
				var O;
				return (u == null ? void 0 : u.lastKnownStatus) ? (O = u.lastKnownStatus) === null || O === void 0 ? void 0 : O.includes("deletionIrredeemable") : !1
			}

			function Pt(u) {
				switch (u) {
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

			function Rt(u) {
				if (!u || !u.message) return r.OJ.DEFAULT;
				const {
					message: O
				} = u;
				switch (!0) {
					case O.includes("feature disabled"):
						return r.OJ.FEATURE_DISABLED;
					case O.includes("email unverified"):
						return r.OJ.EMAIL_UNVERIFIED;
					case O.includes("account blocked"):
						return r.OJ.ACCOUNT_BLOCKED;
					default:
						return r.OJ.DEFAULT
				}
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Bc: function() {
					return _
				},
				Hv: function() {
					return H
				},
				JM: function() {
					return s
				},
				Py: function() {
					return f
				},
				WK: function() {
					return r
				},
				g5: function() {
					return a
				},
				gM: function() {
					return c
				},
				gf: function() {
					return p
				},
				jk: function() {
					return V
				},
				no: function() {
					return t
				},
				uY: function() {
					return d
				},
				ui: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../flags.ts");
			const s = "Unknown",
				m = "unknown",
				c = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				f = Object.keys(c),
				d = !0,
				p = (0, o.J8)("registrar_mock_data") || !1,
				_ = (0, o.J8)("registrar_mock_transfer_out") || !1,
				t = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				a = "cf_registrar.enabled",
				l = "@abcABC1234567890123456",
				i = (0, e.BC)`/${"accountId"}`,
				E = (0, e.BC)`${i}/add-site`,
				g = (0, e.BC)`${i}/domains`,
				I = (0, e.BC)`${g}/${"zoneName"}`,
				v = (0, e.BC)`${I}/configuration`,
				b = (0, e.BC)`${I}/contacts`,
				R = (0, e.BC)`${g}/pricing`,
				D = (0, e.BC)`${g}/protection`,
				h = (0, e.BC)`${g}/register`,
				J = (0, e.BC)`${h}/checkout`,
				q = (0, e.BC)`${h}/success`,
				Q = (0, e.BC)`${g}/tlds`,
				Z = (0, e.BC)`${g}/transfer`,
				G = (0, e.BC)`${g}/transfer/${"zoneName"}`,
				j = (0, e.BC)`/registrar/accounts/verify_email`,
				$ = (0, e.BC)`/registrar/domains/verify_email`,
				X = (0, e.BC)`${g}/verify-email`,
				V = {
					addSite: E,
					domains: g,
					domainsDomain: I,
					domainsDomainConfiguration: v,
					domainsDomainContacts: b,
					domainsPricing: R,
					domainsProtection: D,
					domainsRegister: h,
					domainsRegisterCheckout: J,
					domainsRegisterSuccess: q,
					domainsTlds: Q,
					domainsTransfer: Z,
					domainsTransferZone: G,
					registrarAccountsVerifyEmail: j,
					registrarDomainsVerifyEmail: $,
					verifyEmail: X
				},
				H = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				J: function() {
					return r
				},
				U: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				s = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = n.n(s),
				c = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function f(a) {
				for (var l = 1; l < arguments.length; l++) {
					var i = arguments[l] != null ? Object(arguments[l]) : {},
						E = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(i).filter(function(g) {
						return Object.getOwnPropertyDescriptor(i, g).enumerable
					})), E.forEach(function(g) {
						d(a, g, i[g])
					})
				}
				return a
			}

			function d(a, l, i) {
				return l = p(l), l in a ? Object.defineProperty(a, l, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[l] = i, a
			}

			function p(a) {
				var l = _(a, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function _(a, l) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var E = i.call(a, l || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(a)
			}
			let t = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a
			}({});

			function r(a, l, i) {
				if (!(l == null ? void 0 : l.name)) return null;
				m().sendEvent(a, f({
					domain: {
						name: l.name,
						premium: (0, c.Uy)(l == null ? void 0 : l.premiumType),
						paymentExpiresAt: o()(l == null ? void 0 : l.paymentExpiresAt).format()
					},
					category: "registrar"
				}, i))
			}
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				KO: function() {
					return d
				},
				L9: function() {
					return t
				},
				N3: function() {
					return _
				},
				zE: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(E) {
						return Object.getOwnPropertyDescriptor(l, E).enumerable
					})), i.forEach(function(E) {
						m(r, E, l[E])
					})
				}
				return r
			}

			function m(r, a, l) {
				return a = c(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function c(r) {
				var a = f(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let d = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r
				}({}),
				p = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				_ = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const t = (r, a = {}) => {
				o().sendEvent(r, s({}, a, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				GF: function() {
					return a
				},
				H3: function() {
					return d
				},
				H8: function() {
					return c
				},
				J: function() {
					return i
				},
				Nz: function() {
					return p
				},
				UQ: function() {
					return g
				},
				Up: function() {
					return m
				},
				W8: function() {
					return _
				},
				Ws: function() {
					return I
				},
				Xg: function() {
					return r
				},
				_j: function() {
					return s
				},
				a4: function() {
					return l
				},
				jS: function() {
					return E
				},
				rF: function() {
					return f
				},
				rG: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/utils/translator.tsx");
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
					tunnelHealthCheckTunnels: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels`,
					tunnelHealthCheckTunnelsList: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/list`,
					tunnelHealthCheckTunnelsHighlight: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight`,
					tunnelHealthCheckTunnelsHighlightDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight/${"tunnelId"}`,
					tunnelHealthCheckTunnelsDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/${"tunnelId"}`
				},
				m = () => [{
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
				c = v => [{
					value: "low",
					label: v("setting.low")
				}, {
					value: "mid",
					label: v("setting.medium")
				}, {
					value: "high",
					label: v("setting.high")
				}],
				f = v => [{
					value: "request",
					label: v("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: v("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				d = v => [{
					value: "unidirectional",
					label: v("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: v("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				p = "magic-transit",
				_ = "magic-wan",
				t = "gre_tunnel",
				r = "ipsec_tunnel",
				a = 64,
				l = 1476,
				i = "mid",
				E = "reply",
				g = v => [{
					value: void 0,
					label: v("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: v("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: v("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				I = v => [{
					value: "all",
					label: v("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: v("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: v("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
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
				s = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				VZ: function() {
					return m
				},
				lC: function() {
					return s
				},
				r8: function() {
					return o
				},
				uB: function() {
					return c
				}
			});
			var e = n("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				s = "user journey",
				m = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				c = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				gb: function() {
					return t
				},
				iP: function() {
					return q
				},
				xL: function() {
					return v
				},
				rD: function() {
					return Z
				},
				oT: function() {
					return i
				},
				i2: function() {
					return G
				},
				x1: function() {
					return f
				},
				lW: function() {
					return p
				},
				UA: function() {
					return h
				},
				K5: function() {
					return a
				},
				Ii: function() {
					return R
				},
				PJ: function() {
					return Q
				},
				bK: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				c = n("../node_modules/@cloudflare/elements/es/index.js");
			const f = () => o().createElement(d, null, o().createElement("svg", {
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
				d = (0, s.createComponent)(({
					theme: j
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
				p = () => o().createElement(_, null, o().createElement("svg", {
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
				_ = (0, s.createComponent)(({
					theme: j
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
				t = () => o().createElement(r, null, o().createElement(c.Ei, {
					alt: "airplane",
					src: m,
					width: "85%"
				})),
				r = (0, s.createComponent)(({
					theme: j
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
				a = () => o().createElement(l, null, o().createElement("svg", {
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
				l = (0, s.createComponent)(({
					theme: j
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
				i = () => o().createElement(E, null, o().createElement("svg", {
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
				E = (0, s.createComponent)(({
					theme: j
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
				g = () => o().createElement(I, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				I = (0, s.createComponent)(({
					theme: j
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
				v = () => o().createElement(b, null, o().createElement("svg", {
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
				b = (0, s.createComponent)(({
					theme: j
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
				R = () => o().createElement(D, null, o().createElement("svg", {
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
				D = (0, s.createComponent)(({
					theme: j
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
				h = () => o().createElement(J, null, o().createElement("svg", {
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
				J = (0, s.createComponent)(({
					theme: j
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
				q = () => o().createElement("svg", {
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
				Z = () => o().createElement("svg", {
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
				G = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				A2: function() {
					return d
				},
				He: function() {
					return c
				},
				N$: function() {
					return f
				},
				Qq: function() {
					return s
				},
				ST: function() {
					return m
				},
				wM: function() {
					return o
				}
			});
			var e = n("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				s = "login-apple-jwt",
				m = "cf-test",
				c = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				f = p => [{
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
				d = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				_: function() {
					return s
				},
				c: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);
			let s = function(c) {
				return c.TEMPLATE_SELECTED = "template selected", c.TEMPLATE_PRODUCT_SELECTED = "template product selected", c.TEMPLATE_SAVE_DRAFT = "template save draft", c.TEMPLATE_CANCEL = "template cancel", c.TEMPLATE_DEPLOY = "template deploy", c
			}({});
			const m = (c, f) => o().sendEvent(c, {
				template_name: f
			})
		},
		"../react/pages/pages/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				A: function() {
					return g
				},
				C1: function() {
					return _
				},
				Dp: function() {
					return Z
				},
				HD: function() {
					return b
				},
				IK: function() {
					return c
				},
				L7: function() {
					return s
				},
				Li: function() {
					return E
				},
				Ni: function() {
					return J
				},
				OG: function() {
					return V
				},
				QF: function() {
					return $
				},
				QV: function() {
					return h
				},
				Sx: function() {
					return R
				},
				Ub: function() {
					return j
				},
				X3: function() {
					return r
				},
				aP: function() {
					return d
				},
				eO: function() {
					return a
				},
				fH: function() {
					return i
				},
				fQ: function() {
					return I
				},
				fR: function() {
					return e
				},
				hE: function() {
					return G
				},
				iS: function() {
					return v
				},
				ku: function() {
					return Q
				},
				nY: function() {
					return D
				},
				w3: function() {
					return m
				},
				wJ: function() {
					return p
				},
				wp: function() {
					return l
				},
				yu: function() {
					return t
				},
				zG: function() {
					return q
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
				m = "Allow Members - Cloudflare Pages",
				c = 58,
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
				d = "production",
				p = 2e3,
				_ = 100,
				t = 350,
				r = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				l = 10,
				i = "_headers",
				E = "_redirects",
				g = "_routes.json",
				I = "_worker.js",
				v = "do-a-barrel-roll",
				b = [i, E, g, I],
				R = 1024 * 1024 * 25,
				D = 1e3,
				h = {
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
				J = 1e5,
				q = 75e3,
				Q = "workers",
				Z = "cloudflare_pages_build_caching",
				G = 2;
			let j = function(H) {
				return H[H.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", H[H.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", H[H.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", H[H.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", H[H.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", H[H.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", H
			}({});
			const $ = 1,
				X = 2,
				V = 2
		},
		"../react/pages/pages/routes.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Hv: function() {
					return s
				},
				_j: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
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
				m = c => `${c.subdomain}.pages.dev`
		},
		"../react/pages/pipelines/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				KO: function() {
					return d
				},
				L9: function() {
					return _
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), l.forEach(function(i) {
						m(t, i, a[i])
					})
				}
				return t
			}

			function m(t, r, a) {
				return r = c(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function c(t) {
				var r = f(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function f(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let d = function(t) {
					return t.LIST_PIPELINES = "list pipelines", t.CREATE_PIPELINE = "create pipeline", t.VIEW_PIPELINE = "view pipeline details", t.DELETE_PIPELINE = "delete pipeline", t.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", t.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", t.CLICK_QUICK_LINK = "click pipeline quick link", t
				}({}),
				p = function(t) {
					return t[t.success = 0] = "success", t[t.failure = 1] = "failure", t
				}({});
			const _ = (t, r = {}) => {
				o().sendEvent(t, s({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Hv: function() {
					return s
				},
				Jg: function() {
					return f
				},
				_j: function() {
					return o
				},
				pZ: function() {
					return d
				},
				vF: function() {
					return c
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
					createBucketEventNotification: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/notifications/new`,
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
					migrator: (0, e.BC)`/${"accountId"}/r2/slurper`,
					workersPlans: (0, e.BC)`/${"accountId"}/workers/plans`
				},
				s = {
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
				m = t => {
					const r = "r2.cloudflarestorage.com";
					switch (t) {
						case "default":
							return r;
						case "eu":
							return `eu.${r}`;
						case "fedramp":
							return `fedramp.${r}`
					}
				},
				c = (t, r) => {
					const a = m(r);
					return `https://${t}.${a}`
				},
				f = (t, r, a) => `${c(t,r)}/${a}`,
				d = () => "r2.dev",
				p = t => {
					const r = d();
					return `https://${t}.${r}`
				},
				_ = (t, r) => `${p(t)}/${r}`
		},
		"../react/pages/security-center/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				R: function() {
					return e
				},
				v: function() {
					return o
				}
			});
			let e = function(s) {
				return s.LOAD_SCAN_INFO = "load url scan information", s.INITIATE_URL_SCAN = "initiate url scan", s
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
		"../react/pages/shared-config/sparrowEvents.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				D: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CLICK_MENU_ITEM_SHARE = "click on share item", o.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", o.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", o.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", o.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", o.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", o.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", o.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", o.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", o.CLICK_ON_DELETE_RULESET = "click on delete ruleset", o
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o
			}({})
		},
		"../react/pages/traffic/argo/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o
			}({})
		},
		"../react/pages/traffic/load-balancing/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE = "create waiting room", o.UPDATE = "update waiting room", o.EVENTS = "view waiting rooms events", o.ANALYTICS = "view waiting room analytics", o.GENERATE_PREVIEW = "generate waiting room preview link", o
			}({})
		},
		"../react/pages/turnstile/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				N3: function() {
					return p
				},
				P: function() {
					return t
				},
				Xh: function() {
					return _
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(E) {
						return Object.getOwnPropertyDescriptor(l, E).enumerable
					})), i.forEach(function(E) {
						m(r, E, l[E])
					})
				}
				return r
			}

			function m(r, a, l) {
				return a = c(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function c(r) {
				var a = f(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const d = "TURNSTILE";
			let p = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const _ = ({
					name: r,
					product: a = d,
					category: l = "user journey",
					page: i,
					additionalData: E = {}
				}) => {
					o().sendEvent(r, s({
						category: l,
						page: i,
						product: a
					}, E || {}))
				},
				t = () => {
					var r;
					return (r = Object.values(p)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				d: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				default: (0, e.BC)`/${"accountId"}/`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`,
				websites: (0, e.BC)`/${"accountId"}/websites`
			}
		},
		"../react/pages/zoneless-workers/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				$2: function() {
					return D
				},
				CI: function() {
					return b
				},
				IS: function() {
					return d
				},
				L7: function() {
					return c
				},
				Oj: function() {
					return a
				},
				QV: function() {
					return l
				},
				X$: function() {
					return I
				},
				X6: function() {
					return _
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
					return f
				}
			});

			function e(h) {
				for (var J = 1; J < arguments.length; J++) {
					var q = arguments[J] != null ? Object(arguments[J]) : {},
						Q = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && Q.push.apply(Q, Object.getOwnPropertySymbols(q).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(q, Z).enumerable
					})), Q.forEach(function(Z) {
						o(h, Z, q[Z])
					})
				}
				return h
			}

			function o(h, J, q) {
				return J = s(J), J in h ? Object.defineProperty(h, J, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[J] = q, h
			}

			function s(h) {
				var J = m(h, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function m(h, J) {
				if (typeof h != "object" || h === null) return h;
				var q = h[Symbol.toPrimitive];
				if (q !== void 0) {
					var Q = q.call(h, J || "default");
					if (typeof Q != "object") return Q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(h)
			}
			const c = {
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
						kvMetrics: "https://developers.cloudflare.com/kv/observability/metrics-analytics/",
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
							root: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/",
							requestsTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#requests",
							cpuTimeTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#cpu-time-per-execution",
							durationTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#execution-duration-gb-seconds",
							requestDurationTimeseries: "https://developers.cloudflare.com/workers/learning/metrics-and-analytics/#request-duration",
							dataEgressTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#data-egress",
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
						gradualRollouts: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/gradual-deployments",
						rollbacks: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/rollbacks",
						moduleSyntax: "https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/#migrate-from-service-workers-to-es-modules",
						configureQueues: "https://developers.cloudflare.com/queues/configuration/configure-queues/",
						observability: "https://developers.cloudflare.com/workers/observability/",
						observabilityLogs: "https://developers.cloudflare.com/workers/observability/logs/workers-logs/",
						workersAssets: "https://developers.cloudflare.com/workers/frameworks/"
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
				d = "40rem",
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
				l = {
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
				i = "workers.dev",
				E = "YYYY-MM-DD HH:mm:SS ZZ",
				g = "active",
				I = ["bundled", "unbound", "standard"],
				v = null,
				b = {
					bandaWorkersCI: "banda-workers-ui",
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled"
				};
			let R = function(h) {
				return h[h.NONE = 0] = "NONE", h[h.MISS = 1] = "MISS", h[h.EXPIRED = 2] = "EXPIRED", h[h.UPDATING = 3] = "UPDATING", h[h.STALE = 4] = "STALE", h[h.HIT = 5] = "HIT", h[h.IGNORED = 6] = "IGNORED", h[h.BYPASS = 7] = "BYPASS", h[h.REVALIDATED = 8] = "REVALIDATED", h[h.DYNAMIC = 9] = "DYNAMIC", h[h.STREAM_HIT = 10] = "STREAM_HIT", h[h.DEFERRED = 11] = "DEFERRED", h
			}({});
			const D = [R.HIT, R.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Hv: function() {
					return d
				},
				L: function() {
					return s
				},
				Q9: function() {
					return m
				},
				_j: function() {
					return c
				},
				ky: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = p => `${p}.workers.dev`,
				s = (p, _, t) => `${t?`${t}.`:""}${p}.${o(_)}`,
				m = (p, _, t) => `https://${s(p,_,t)}`,
				c = {
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
					serviceDetailsBuildDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/builds/${"build_uuid"}`,
					serviceDetailsDeployments: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/deployments`,
					serviceDetailsIntegrationsFlow: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/${"integrationId"}/integrations-setup`,
					serviceDetailsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/triggers`,
					serviceDetailsTriggersV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#domains`,
					serviceDetailsIntegrations: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/integrations`,
					serviceDetailsSettings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings`,
					serviceDetailsSettingsGeneral: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/general`,
					serviceDetailsSettingsGeneralV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#general`,
					serviceDetailsSettingsBindings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/bindings`,
					serviceDetailsSettingsBindingsV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#bindings`,
					serviceDetailsSettingsBuilds: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/builds`,
					serviceDetailsSettingsBuildsV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#builds`,
					serviceDetailsSettingsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/triggers`,
					serviceDetailsSettingsTriggersV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#trigger-events`,
					serviceDetailsSettingsObservabilityV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#observability`,
					serviceDetailsLogs: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs`,
					serviceDetailsLogsLive: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/live`,
					serviceDetailsLogpush: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/logpush`,
					serviceDetailsObservabilityLogs: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/observability/logs`,
					serviceDetailsLogsCron: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/cron`,
					serviceDetailsManage: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					serviceDetailsRename: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/rename`,
					createDeployment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deploy-version`,
					deploymentHistory: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deployment-history`,
					buildHistory: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/builds`,
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
				f = "https://cron-triggers.cloudflareworkers.com",
				d = {
					accountMtlsCertificates: (0, e.BC)`/accounts/${"accountId"}/mtls_certificates`,
					accountLogpushJobs: (0, e.BC)`/accounts/${"accountId"}/logpush/jobs`,
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/workers/account-settings`,
					builds: {
						build: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}`,
						cancelBuild: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/cancel`,
						latestBuildsByWorkers: (0, e.BC)`/accounts/${"accountId"}/builds/builds/latest`,
						buildLogs: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/logs`,
						buildsByScriptId: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/builds`,
						buildsByVersionIds: (0, e.BC)`/accounts/${"accountId"}/builds/builds`,
						buildTokens: (0, e.BC)`/accounts/${"accountId"}/builds/tokens`,
						repoConnections: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections`,
						repoConnection: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections/${"repo_connection_uuid"}`,
						triggers: (0, e.BC)`/accounts/${"accountId"}/builds/triggers`,
						trigger: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}`,
						triggerEnvironmentVariables: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/environment_variables`,
						triggerEnvironmentVariable: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/environment_variables/${"environment_variable_key"}`,
						workerTriggers: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/triggers`
					},
					certificates: (0, e.BC)`/zones/${"zoneId"}/ssl/certificate_packs/${"certId"}`,
					createApiToken: (0, e.BC)`/user/tokens`,
					createTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails`,
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
						ruok: (0, e.BC)`/accounts/${"accountId"}/workers/observability/ruok`,
						queryRun: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/query-run`,
						keys: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/keys`,
						values: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/values`
					},
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				MN: function() {
					return s
				},
				Yg: function() {
					return c
				},
				i$: function() {
					return m
				},
				l3: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const s = async ([d, p]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: d,
					variables: p
				})
			})).body, m = async (...d) => (await e.get(...d)).body, c = d => async (p, _) => {
				const t = await fetch(p, _).then(r => r.json());
				return d.assertDecode(t)
			}, f = async (...d) => (await m(...d)).result;
			y.ZP = {
				fetcher: d => Array.isArray(d) ? f(...d) : f(d)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(z, y) {
				y()
			})(this, function() {
				"use strict";

				function z() {
					var n = !0,
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

					function m(g) {
						return !!(g && g !== document && g.nodeName !== "HTML" && g.nodeName !== "BODY" && "classList" in g && "contains" in g.classList)
					}

					function c(g) {
						var I = g.type,
							v = g.tagName;
						return !!(v == "INPUT" && s[I] && !g.readOnly || v == "TEXTAREA" && !g.readOnly || g.isContentEditable)
					}

					function f(g) {
						g.getAttribute("is-focus-visible") !== "" && g.setAttribute("is-focus-visible", "")
					}

					function d(g) {
						g.getAttribute("is-focus-visible") === "" && g.removeAttribute("is-focus-visible")
					}

					function p(g) {
						m(document.activeElement) && f(document.activeElement), n = !0
					}

					function _(g) {
						n = !1
					}

					function t(g) {
						!m(g.target) || (n || c(g.target)) && f(g.target)
					}

					function r(g) {
						!m(g.target) || g.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), d(g.target))
					}

					function a(g) {
						document.visibilityState == "hidden" && (e && (n = !0), l())
					}

					function l() {
						document.addEventListener("mousemove", E), document.addEventListener("mousedown", E), document.addEventListener("mouseup", E), document.addEventListener("pointermove", E), document.addEventListener("pointerdown", E), document.addEventListener("pointerup", E), document.addEventListener("touchmove", E), document.addEventListener("touchstart", E), document.addEventListener("touchend", E)
					}

					function i() {
						document.removeEventListener("mousemove", E), document.removeEventListener("mousedown", E), document.removeEventListener("mouseup", E), document.removeEventListener("pointermove", E), document.removeEventListener("pointerdown", E), document.removeEventListener("pointerup", E), document.removeEventListener("touchmove", E), document.removeEventListener("touchstart", E), document.removeEventListener("touchend", E)
					}

					function E(g) {
						g.target.nodeName.toLowerCase() !== "html" && (n = !1, i())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", _, !0), document.addEventListener("pointerdown", _, !0), document.addEventListener("touchstart", _, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", a, !0), l(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function y(n) {
					var e;

					function o() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && y(z)
			})
		},
		"../react/utils/bootstrap.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				$8: function() {
					return o
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return m
				},
				gm: function() {
					return s
				}
			});
			const e = () => {
					var c, f, d;
					return (c = window) === null || c === void 0 || (f = c.bootstrap) === null || f === void 0 || (d = f.data) === null || d === void 0 ? void 0 : d.security_token
				},
				o = () => {
					var c, f, d;
					return !!((c = n.g.bootstrap) === null || c === void 0 || (f = c.data) === null || f === void 0 || (d = f.user) === null || d === void 0 ? void 0 : d.id)
				},
				s = () => {
					var c, f;
					return !!((c = n.g.bootstrap) === null || c === void 0 || (f = c.data) === null || f === void 0 ? void 0 : f.is_kendo)
				},
				m = () => {
					var c, f, d, p;
					return (c = window) === null || c === void 0 || (f = c.bootstrap) === null || f === void 0 || (d = f.data) === null || d === void 0 || (p = d.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				O5: function() {
					return m
				},
				Xm: function() {
					return s
				},
				kT: function() {
					return d
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
				s = () => (o() || "").indexOf("C0002") !== -1,
				m = () => (o() || "").indexOf("C0003") !== -1,
				c = () => (o() || "").indexOf("C0004") !== -1,
				f = () => (o() || "").indexOf("C0005") !== -1,
				d = t => {
					const r = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				p = () => {
					var t;
					const r = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				_ = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				AI: function() {
					return I
				},
				S8: function() {
					return g
				},
				ZW: function() {
					return f
				},
				ay: function() {
					return v
				},
				fh: function() {
					return b
				},
				ly: function() {
					return p
				},
				th: function() {
					return c
				},
				ti: function() {
					return _
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				s = n("../../../common/intl/intl-types/src/index.ts"),
				m = n("../../../common/util/types/src/utils/index.ts");
			const c = "cf-sync-locale-with-cps",
				f = s.Q.en_US,
				d = "en_US",
				p = "cf-locale",
				_ = J => (0, m.Yd)(s.Q).find(q => s.Q[q] === J) || d,
				t = [],
				r = [],
				a = [s.Q.de_DE, s.Q.en_US, s.Q.es_ES, s.Q.fr_FR, s.Q.it_IT, s.Q.pt_BR, s.Q.ko_KR, s.Q.ja_JP, s.Q.zh_CN, s.Q.zh_TW],
				l = [s.Q.de_DE, s.Q.en_US, s.Q.es_ES, s.Q.es_CL, s.Q.es_EC, s.Q.es_MX, s.Q.es_PE, s.Q.fr_FR, s.Q.it_IT, s.Q.ja_JP, s.Q.ko_KR, s.Q.pt_BR, s.Q.zh_CN, s.Q.zh_TW],
				i = {
					test: [...a, ...r, ...t],
					development: [...a, ...r, ...t],
					staging: [...a, ...r, ...t],
					production: [...a, ...r]
				},
				E = {
					test: [...l, ...r, ...t],
					development: [...l, ...r, ...t],
					staging: [...l, ...r, ...t],
					production: [...l, ...r]
				},
				g = (J, q) => {
					const Q = s.Q[q];
					return J ? i.production.includes(Q) : E.production.includes(Q)
				},
				I = J => Object.keys(s.Q).filter(q => g(J, q)),
				v = J => {
					const q = s.Q[J];
					return r.includes(q)
				},
				b = (J, q) => J ? R[q] : D[q],
				R = {
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
				D = {
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
				h = o().locale();
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
			}), o().locale(h)
		},
		"../react/utils/translator.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				QT: function() {
					return l
				},
				Vb: function() {
					return d
				},
				Yi: function() {
					return _
				},
				ZP: function() {
					return f
				},
				_m: function() {
					return t
				},
				cC: function() {
					return r
				},
				oc: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = n("../../../common/intl/intl-core/src/Translator.ts"),
				s = n("../../../common/intl/intl-react/src/index.ts"),
				m = n("../flags.ts");
			const c = new o.Z({
				pseudoLoc: (0, m.J8)("is_pseudo_loc")
			});

			function f(i, ...E) {
				return c.t(i, ...E)
			}
			const d = c;

			function p(i, ...E) {
				return markdown(f(i, E))
			}

			function _(i) {
				if (Number(i) !== 0) {
					if (i % 86400 == 0) return f("time.num_days", {
						smart_count: i / 86400
					});
					if (i % 3600 == 0) return f("time.num_hours", {
						smart_count: i / 3600
					});
					if (i % 60 == 0) return f("time.num_minutes", {
						smart_count: i / 60
					})
				}
				return f("time.num_seconds", {
					smart_count: i
				})
			}

			function t(i, E) {
				return i in E ? E[i] : void 0
			}
			const r = s.cC,
				a = s.oc,
				l = s.QT
		},
		"../react/utils/url.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Ct: function() {
					return R
				},
				Fl: function() {
					return Y
				},
				KT: function() {
					return k
				},
				NF: function() {
					return E
				},
				Nw: function() {
					return v
				},
				Pd: function() {
					return I
				},
				Uh: function() {
					return F
				},
				Y_: function() {
					return i
				},
				e1: function() {
					return b
				},
				el: function() {
					return j
				},
				hW: function() {
					return X
				},
				pu: function() {
					return oe
				},
				qR: function() {
					return G
				},
				td: function() {
					return g
				},
				uW: function() {
					return H
				}
			});
			var e = n("../node_modules/query-string/query-string.js"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				m = n("../react/pages/stream/routes.ts"),
				c = n("../react/pages/r2/routes.ts"),
				f = n("../react/pages/zoneless-workers/routes.ts"),
				d = n("../react/pages/pages/routes.ts");

			function p(C) {
				for (var P = 1; P < arguments.length; P++) {
					var A = arguments[P] != null ? Object(arguments[P]) : {},
						U = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(A).filter(function(B) {
						return Object.getOwnPropertyDescriptor(A, B).enumerable
					})), U.forEach(function(B) {
						_(C, B, A[B])
					})
				}
				return C
			}

			function _(C, P, A) {
				return P = t(P), P in C ? Object.defineProperty(C, P, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[P] = A, C
			}

			function t(C) {
				var P = r(C, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function r(C, P) {
				if (typeof C != "object" || C === null) return C;
				var A = C[Symbol.toPrimitive];
				if (A !== void 0) {
					var U = A.call(C, P || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(C)
			}
			const {
				endsWithSlash: a
			} = s.default, l = (C, P) => {
				const A = C.replace(a, "").split("/");
				return A.slice(0, 2).concat([P]).concat(A.slice(3)).join("/")
			}, i = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), E = C => `/${C.replace(a,"").replace(/^\//,"")}`, g = C => v("add-site", C), I = C => v("billing", C), v = (C, P) => P ? `/${P}${C?`/${C}`:""}` : `/?to=/:account/${C}`, b = () => {
				const C = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return C ? C[1] : null
			}, R = (C, P) => o().stringify(p({}, o().parse(C), P)), D = (C = "") => C.toString().replace(/([\/]{1,})$/, ""), h = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], J = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, q = /^\/(\w{32,})(\/[^.]*)?/, Q = C => h.includes(C), Z = C => !Q(C), G = C => !Q(C) && q.test(C), j = C => !Q(C) && J.test(C), $ = C => J.exec(C), X = C => {
				if (j(C)) return C.split("/").filter(P => P.length > 0)[1]
			}, V = C => q.exec(C), H = C => {
				if (G(C)) {
					const P = V(C);
					if (P) return P[1]
				}
			}, le = C => G(C) && C.split("/")[2] === "register-domain", W = C => le(C) ? C.split("/") : null, Ee = C => {
				if (j(C)) {
					const [, , , P, A, U, B, ae] = C.split("/");
					return P === "traffic" && A === "load-balancing" && U === "pools" && B === "edit" && ae
				}
			}, F = C => {
				const P = W(C);
				if (P) return P[3]
			}, S = (C, P) => {
				var A, U;
				return ((A = C.pattern.match(/\:/g)) !== null && A !== void 0 ? A : []).length - ((U = P.pattern.match(/\:/g)) !== null && U !== void 0 ? U : []).length
			}, x = [...Object.values(m.C), ...Object.values(c._j), ...Object.values(f._j), ...Object.values(d._j)].sort(S);

			function Y(C) {
				if (!Z(C)) return C;
				for (const ae of x)
					if (ae.expression.test(C)) return ae.pattern;
				const P = W(C);
				if (P) {
					const [, , ae, , ...fe] = P;
					return `/:accountId/${ae}/:domainName/${fe.join("/")}`
				}
				if (Ee(C)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const U = $(C);
				if (U) {
					const [, , , , ae] = U;
					return `/:accountId/:zoneName${ae||""}`
				}
				const B = V(C);
				if (B) {
					const [, , ae] = B;
					return `/:accountId${ae||""}`
				}
				return C
			}

			function oe(C) {
				if (!!C) try {
					const A = C.split(".").pop();
					if (A && A.length > 0) return A
				} catch {}
			}

			function k(C, P = document.location.href) {
				try {
					const A = new URL(C),
						U = new URL(P);
					if (A.origin === U.origin) return `${A.pathname}${A.search}${A.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = n("../utils/zaraz.ts")
		},
		"../utils/getDashVersion.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				p: function() {
					return s
				},
				t: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var m, c;
					return (m = window) === null || m === void 0 || (c = m.build) === null || c === void 0 ? void 0 : c.dashVersion
				},
				s = () => {
					var m;
					return ((0, e.parse)((m = document) === null || m === void 0 ? void 0 : m.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Wi: function() {
					return me
				},
				IM: function() {
					return ee
				},
				yV: function() {
					return De
				},
				Ug: function() {
					return Qe
				},
				v_: function() {
					return M
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				s = n("../react/utils/bootstrap.ts"),
				m = n("../react/app/providers/storeContainer.js"),
				c = n("../react/common/selectors/languagePreferenceSelector.ts"),
				f = n("../flags.ts"),
				d = n("../../../../node_modules/cookie/index.js"),
				p = n("../react/utils/url.ts"),
				_ = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../../../../node_modules/lodash-es/memoize.js"),
				a = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				l = n("../utils/getDashVersion.ts"),
				i = n("../react/common/selectors/accountSelectors.ts");

			function E(re) {
				for (var ie = 1; ie < arguments.length; ie++) {
					var pe = arguments[ie] != null ? Object(arguments[ie]) : {},
						ge = Object.keys(pe);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(pe).filter(function(be) {
						return Object.getOwnPropertyDescriptor(pe, be).enumerable
					})), ge.forEach(function(be) {
						g(re, be, pe[be])
					})
				}
				return re
			}

			function g(re, ie, pe) {
				return ie = I(ie), ie in re ? Object.defineProperty(re, ie, {
					value: pe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : re[ie] = pe, re
			}

			function I(re) {
				var ie = v(re, "string");
				return typeof ie == "symbol" ? ie : String(ie)
			}

			function v(re, ie) {
				if (typeof re != "object" || re === null) return re;
				var pe = re[Symbol.toPrimitive];
				if (pe !== void 0) {
					var ge = pe.call(re, ie || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ie === "string" ? String : Number)(re)
			}
			const b = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				R = (0, r.Z)(re => {
					try {
						return b.assertDecode((0, d.parse)(re))
					} catch (ie) {
						return console.error(ie), {}
					}
				}),
				D = re => (ie, pe, ge) => {
					try {
						const Be = window.location.pathname,
							Ke = (0, m.bh)().getState(),
							we = R(document.cookie),
							tt = E({
								page: (0, p.Fl)(ge.page || window.location.pathname),
								dashVersion: (0, l.t)()
							}, we);
						if (ie === "identify") {
							var be, Ae;
							const He = {
								gates: (0, a.T2)(Ke) || {},
								country: (be = n.g) === null || be === void 0 || (Ae = be.bootstrap) === null || Ae === void 0 ? void 0 : Ae.ip_country
							};
							return re(ie, pe, E({}, tt, He, ge))
						} else {
							const He = {
								accountId: (0, p.uW)(Be),
								zoneName: (0, p.hW)(Be),
								domainName: (0, p.Uh)(Be)
							};
							if ((0, p.qR)(Be)) {
								var _e;
								const Re = (0, i.D0)(Ke);
								He.isEntAccount = Re == null || (_e = Re.meta) === null || _e === void 0 ? void 0 : _e.has_enterprise_zones
							}
							if ((0, p.el)(Be)) {
								var ke;
								const Re = (0, _.nA)(Ke);
								He.zoneId = Re == null ? void 0 : Re.id, He.plan = Re == null || (ke = Re.plan) === null || ke === void 0 ? void 0 : ke.legacy_id
							}
							return re(ie, pe, E({}, tt, He, ge))
						}
					} catch (Be) {
						return console.error(Be), re(ie, pe, ge)
					}
				},
				h = re => async (ie, pe, ge) => {
					try {
						return await re(ie, pe, ge)
					} catch (be) {
						if (console.error(be), !M()) throw be;
						return {
							status: "rejected",
							reason: be
						}
					}
				};
			var J = n("../react/common/middleware/sparrow/errors.ts"),
				q = n("../react/pages/firewall/bots/tracking.ts"),
				Q = n("../react/pages/caching/tracking.tsx"),
				Z = n("../react/pages/turnstile/tracking.ts"),
				G = n("../react/pages/magic/packet-captures/constants.ts"),
				j = n("../react/pages/firewall/page-shield/tracking.ts"),
				$ = n("../react/pages/firewall/rulesets/tracking.tsx"),
				X = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				V = n("../react/pages/spectrum/tracking.tsx"),
				H = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				le = n("../react/pages/security-center/tracking.ts"),
				W = n("../react/pages/firewall/api-shield/tracking.ts"),
				Ee = n("../react/pages/home/configurations/lists/tracking.ts"),
				F = n("../react/pages/traffic/load-balancing/tracking.ts"),
				S = n("../react/pages/home/alerts/tracking.ts"),
				x = n("../react/pages/dns/dns-records/tracking.ts"),
				Y = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				oe = n("../react/pages/traffic/argo/tracking.ts"),
				k = n("../react/pages/magic/network-monitoring/constants.ts"),
				C = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				P = n("../react/pages/magic/overview/tracking.ts"),
				A = n("../react/pages/hyperdrive/tracking.ts"),
				U = n("../react/pages/pipelines/tracking.ts"),
				B = n("../react/pages/home/domain-registration/tracking.ts"),
				ae = n("../react/pages/zoneless-workers/constants.ts"),
				fe = n("../react/pages/pages/constants.ts"),
				Oe = n("../react/pages/page-rules/tracking.ts"),
				Pe = n("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				N = n("../react/pages/shared-config/sparrowEvents.tsx"),
				ce = n("../react/pages/firewall/settings/cards/security-txt/helpers.ts");
			const Fe = ((re, ie, ...pe) => t.eg.union([t.eg.literal(re), t.eg.literal(ie), ...pe.map(ge => t.eg.literal(ge))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on edit snippet", "click on exposed_credentials", "click on content_scanning", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table traffic chart click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "zones table insights click", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", ae.QV.clickedDownloadAnalytics, ae.QV.clickedPrintAnalytics, ae.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", fe.QV.toggledPagesSmartPlacement, fe.QV.downloadDemoProject, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", q.N3.INITIAL_FETCH_SCORES, q.N3.FETCH_CONFIGURATION, q.N3.INITIAL_FETCH_TIME_SERIES, q.N3.INITIAL_FETCH_ATTRIBUTES, q.N3.UPDATE_SETTINGS, q.N3.DELETE_RULE, q.N3.UPDATE_RULE, q.N3.FETCH_RULES, q.N3.CONFIGURE_BOT_MANAGEMENT, q.N3.WAF_RULES_REDIRECT, H.F.TOGGLE_TCP_PROTECTION, H.F.GET_TCP_PROTECTION_PREFIXES, H.F.CREATE_TCP_PROTECTION_PREFIXES, H.F.CREATE_TCP_PROTECTION_PREFIX, H.F.UPDATE_TCP_PROTECTION_PREFIX, H.F.DELETE_TCP_PROTECTION_PREFIX, H.F.DELETE_TCP_PROTECTION_PREFIXES, H.F.GET_TCP_PROTECTION_ALLOWLIST, H.F.CREATE_TCP_PROTECTION_ALLOWLIST, H.F.UPDATE_TCP_PROTECTION_ALLOWLIST, H.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, H.F.DELETE_TCP_PROTECTION_ALLOWLIST, H.F.GET_SYN_PROTECTION_RULES, H.F.GET_SYN_PROTECTION_RULE, H.F.CREATE_SYN_PROTECTION_RULE, H.F.UPDATE_SYN_PROTECTION_RULE, H.F.DELETE_SYN_PROTECTION_RULE, H.F.GET_TCP_FLOW_PROTECTION_RULES, H.F.GET_TCP_FLOW_PROTECTION_RULE, H.F.CREATE_TCP_FLOW_PROTECTION_RULE, H.F.UPDATE_TCP_FLOW_PROTECTION_RULE, H.F.DELETE_TCP_FLOW_PROTECTION_RULE, H.F.GET_SYN_PROTECTION_FILTERS, H.F.GET_SYN_PROTECTION_FILTER, H.F.CREATE_SYN_PROTECTION_FILTER, H.F.UPDATE_SYN_PROTECTION_FILTER, H.F.DELETE_SYN_PROTECTION_FILTER, H.F.GET_TCP_FLOW_PROTECTION_FILTERS, H.F.GET_TCP_FLOW_PROTECTION_FILTER, H.F.CREATE_TCP_FLOW_PROTECTION_FILTER, H.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, H.F.DELETE_TCP_FLOW_PROTECTION_FILTER, H.F.GET_DNS_PROTECTION_RULES, H.F.GET_DNS_PROTECTION_RULE, H.F.CREATE_DNS_PROTECTION_RULE, H.F.UPDATE_DNS_PROTECTION_RULE, H.F.DELETE_DNS_PROTECTION_RULE, j.F.MANAGE_PAGE_SHIELD_POLICY, j.F.CONFIGURE_PAGE_SHIELD, j.F.VIEW_DETECTED_CONNECTIONS, j.F.VIEW_DETECTED_SCRIPTS, j.F.VIEW_PAGE_SHIELD_POLICIES, j.F.VIEW_PAGE_SHIELD_SETTINGS, Ee.y.CREATE_LIST, Ee.y.DELETE_LIST, Ee.y.ADD_LIST_ITEM, Ee.y.DELETE_LIST_ITEM, A.KO.PURCHASE_WORKERS_PAID, A.KO.LIST_CONFIGS, A.KO.CREATE_HYPERDRIVE_CONFIG, A.KO.VIEW_CONFIG_DETAILS, A.KO.UPDATE_CACHING_SETTINGS, A.KO.DELETE_HYPERDRIVE_CONFIG, A.KO.CLICK_HYPERDRIVE_DOCUMENTATION, A.KO.CLICK_GET_STARTED_GUIDE, A.KO.CLICK_CONNECTIVITY_GUIDES, A.KO.CLICK_QUICK_LINK, V.N.CNAME, V.N.IP_ADDRESS, V.N.LB, V.N.UPDATE_CNAME, V.N.UPDATE_IP_ADDRESS, V.N.UPDATE_LB, V.N.DISABLE, Q.N.TIERED_CACHE, Q.N.CACHE_PURGE, Q.N.CACHE_ANALYTICS, ...(0, Z.P)(), ...(0, $.x4)(), X.N.CREATE, X.N.EVENTS, X.N.ANALYTICS, X.N.UPDATE, X.N.GENERATE_PREVIEW, le.R.INITIATE_URL_SCAN, le.R.LOAD_SCAN_INFO, le.v.EXPAND_INSIGHT_ROW, le.v.CLICK_RESOLVE_BUTTON, le.v.FOLLOW_RESOLVE_URL, le.v.MANAGE_INSIGHT, le.v.CLICK_SCAN_NOW, le.v.CLICK_EXPORT_INSIGHTS, le.v.BULK_ARCHIVE, W.Fj[W.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, W.Fj[W.kq.ENDPOINT_MANAGEMENT].detailedMetrics, W.Fj[W.kq.ENDPOINT_MANAGEMENT].createEndpoint, W.Fj[W.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, W.Fj[W.kq.ENDPOINT_MANAGEMENT].deployRouting, W.Fj[W.kq.ENDPOINT_MANAGEMENT].deleteRouting, W.Fj[W.kq.API_DISCOVERY].viewDiscoveredEndpoints, W.Fj[W.kq.API_DISCOVERY].saveDiscoveredEndpoint, W.Fj[W.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, W.Fj[W.kq.SCHEMA_VALIDATION].viewSchemasList, W.Fj[W.kq.SCHEMA_VALIDATION].uploadSchema, W.Fj[W.kq.SCHEMA_VALIDATION].viewSchemaAdoption, W.Fj[W.kq.SCHEMA_VALIDATION].downloadSchema, W.Fj[W.kq.SCHEMA_VALIDATION].deleteSchema, W.Fj[W.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, W.Fj[W.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, W.Fj[W.kq.SEQUENCE_ANALYTICS].viewSequencesPage, W.Fj[W.kq.JWT_VALIDATION].viewJWTRules, W.Fj[W.kq.JWT_VALIDATION].addJWTRule, W.Fj[W.kq.JWT_VALIDATION].editJWTRule, W.Fj[W.kq.JWT_VALIDATION].deleteJWTRule, W.Fj[W.kq.JWT_VALIDATION].reprioritizeJWTRule, W.Fj[W.kq.JWT_VALIDATION].viewJWTConfigs, W.Fj[W.kq.JWT_VALIDATION].addJWTConfig, W.Fj[W.kq.JWT_VALIDATION].editJWTConfig, W.Fj[W.kq.JWT_VALIDATION].deleteJWTConfig, W.Fj[W.kq.SETTINGS].redirectToFirewallRulesTemplate, W.Fj[W.kq.SETTINGS].redirectToPages, W.Fj[W.kq.SETTINGS].listSessionIdentifiers, W.Fj[W.kq.SETTINGS].listRequestsContainingSessionIdentifiers, W.Fj[W.kq.SETTINGS].addOrRemoveSessionIdentifiers, W.Fj[W.kq.SETTINGS].redirectToCustomRules, W.Fj[W.kq.SETTINGS].listAllFallthroughSchemas, W.Fj[W.kq.SEQUENCE_RULES].listSequenceRules, W.Fj[W.kq.SEQUENCE_RULES].deleteSequenceRule, W.Fj[W.kq.SEQUENCE_RULES].reorderSequenceRule, W.Fj[W.kq.SEQUENCE_RULES].createSequenceRule, W.Fj[W.kq.SEQUENCE_RULES].editSequenceRule, F.Z.CREATE_AND_DEPLOY, F.Z.ANALYTICS, S.y.SECONDARY_DNS_NOTIFICATION_CREATE, S.y.SECONDARY_DNS_NOTIFICATION_UPDATE, S.y.SECONDARY_DNS_NOTIFICATION_DELETE, x.U.ZONE_TRANSFER_SUCCESS, x.U.DNS_RECORD_CREATE, x.U.DNS_RECORD_UPDATE, x.U.DNS_RECORD_DELETE, Y.Y.PEER_DNS_CREATE, Y.Y.PEER_DNS_UPDATE, Y.Y.PEER_DNS_DELETE, Y.Y.ZONE_TRANSFER_ENABLE, Y.Y.ZONE_TRANSFER_DISABLE, oe.V.ARGO_ENABLEMENT, oe.V.ARGO_GEO_ANALYTICS_FETCH, oe.V.ARGO_GLOBAL_ANALYTICS_FETCH, G.X.VIEW_BUCKETS_LIST, G.X.CREATE_BUCKET, G.X.VALIDATE_BUCKET, G.X.DELETE_BUCKET, G.X.VIEW_CAPTURES_LIST, G.X.CREATE_SIMPLE_CAPTURE, G.X.CREATE_FULL_CAPTURE, G.X.VIEW_FULL_CAPTURE, G.X.DOWNLOAD_SIMPLE_CAPTURE, k.bK.VIEW_RULES, k.bK.CREATE_RULE, k.bK.UPDATE_RULE, k.bK.DELETE_RULE, k.bK.VIEW_CONFIGURATION, k.bK.CREATE_CONFIGURATION, k.bK.UPDATE_CONFIGURATION, k.bK.DELETE_CONFIGURATION, P.r8.VIEW_ALERTS, P.r8.VIEW_ALERTS_HISTORY, P.r8.MAGIC_OVERVIEW_ANALYTICS, P.VZ.CREATE_SITE, P.VZ.CREATE_TUNNEL, P.VZ.CREATE_STATIC_ROUTE, C.o4.CLICK_ADAPTIVE_SAMPLING, C.o4.CLICK_TO_LOG_EXPLORER_BANNER, C.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, C.o4.CLICK_SWITCH_TO_RAW_LOGS, C.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", B.U.REGISTER_DOMAIN_SEARCH_SUBMIT, B.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, B.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, B.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, B.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, B.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, B.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, B.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, B.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, B.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, B.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, B.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, B.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, B.U.REGISTER_DOMAIN_CHECKOUT_ERROR, B.U.TRANSFER_DOMAIN_CHANGE_STEP, B.U.RENEW_DOMAIN_COMPLETED, B.U.RESTORE_DOMAIN_INIT, B.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, B.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, B.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, B.U.RESTORE_DOMAIN_FAILURE, B.U.RESTORE_DOMAIN_COMPLETED, B.U.DOMAIN_DELETE_INIT, B.U.DOMAIN_DELETE_COMPLETED, B.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, B.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, B.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, B.U.DOMAIN_DELETE_CONFIRM_DELETE, B.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, B.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, B.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, B.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, B.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, U.KO.CLICK_GET_STARTED_GUIDE, U.KO.CLICK_PIPELINE_DOCUMENTATION, U.KO.CLICK_QUICK_LINK, U.KO.CREATE_PIPELINE, U.KO.DELETE_PIPELINE, U.KO.LIST_PIPELINES, U.KO.VIEW_PIPELINE, Pe.S.EXISTING_DOMAIN, Pe.S.NEW_DOMAIN, Pe.S.WAF_RULESET, Pe.S.WORKERS, Pe.S.PAGES, Pe.S.R2, Pe.S.ACCOUNT_MEMBERS, Oe._.TEMPLATE_PRODUCT_SELECTED, Oe._.TEMPLATE_SELECTED, Oe._.TEMPLATE_SAVE_DRAFT, Oe._.TEMPLATE_CANCEL, Oe._.TEMPLATE_DEPLOY, N.D.CLICK_GO_BACK_SHARE_MODAL, N.D.CLICK_MENU_ITEM_SHARE, N.D.CLICK_ON_CANCEL_SHARE_MODAL, N.D.CLICK_ON_CLOSE_SHARE_MODAL, N.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, N.D.CLICK_ON_DELETE_RULESET, N.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, N.D.CLICK_ON_EDIT_SHARE_PERMISSION, N.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, N.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, ce.vc.CREATED, ce.vc.ENABLED, ce.vc.DISABLED, ce.vc.DELETED, ce.vc.UPDATED, ce.vc.DOWNLOADED),
				Ue = t.eg.exactStrict(t.eg.object({
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
					_ga: t.eg.any.optional,
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
					apiUrl: t.eg.any.optional,
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
					dashVersion: t.eg.any.optional,
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
					expressionType: t.eg.any.optional,
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
					registrar: t.eg.any.optional,
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
					trialPlan: t.eg.any.optional,
					trialStart: t.eg.any.optional,
					topic: t.eg.any.optional,
					totalCount: t.eg.any.optional,
					totalCpuTime: t.eg.any.optional,
					totalLevels: t.eg.any.optional,
					totalRequests: t.eg.any.optional,
					totalTime: t.eg.any.optional,
					totalUserActionsTime: t.eg.any.optional,
					type: t.eg.any.optional,
					upgrade: t.eg.boolean.optional,
					uploading: t.eg.any.optional,
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
					uniqueTopLevelDomains: t.eg.any.optional,
					template_name: t.eg.any.optional,
					productResource: t.eg.any.optional
				})),
				Je = (re, ie) => {
					const [pe, ge] = Ve(ie);
					let be, Ae;
					return (0, t.nM)(Fe.decode(re)) && (be = new J.Uh(re)), ge && ge.length > 0 && (Ae = new J.oV(re, ge)), [pe, be, Ae]
				},
				Ve = re => {
					const ie = Ue.decode(re);
					if ((0, t.nM)(ie)) {
						const pe = ie.left.map(({
							context: ge
						}) => ge.map(({
							key: be
						}) => be)).reduce((ge, be) => ge.concat(be), []).filter(ge => ge in re);
						return [We(pe, re), pe]
					}
					return [re, []]
				},
				We = (re, ie) => Object.entries(ie).reduce((pe, [ge, be]) => (re.includes(ge) || (pe[ge] = be), pe), {}),
				st = re => (ie, pe, ge) => {
					const [be, Ae, _e] = Je(pe, ge);
					if (Ae) throw Ae;
					return _e && console.error(_e), re(ie, pe, be)
				};
			var $e = n("../react/utils/zaraz.ts");
			const Ne = {
					identify: !0
				},
				rt = re => (ie, pe, ge) => (Ne[pe] || $e.tg === null || $e.tg === void 0 || $e.tg.track(pe, ge), re(ie, pe, ge));
			var Ye = n("../react/utils/cookiePreferences.ts");

			function ze(re) {
				for (var ie = 1; ie < arguments.length; ie++) {
					var pe = arguments[ie] != null ? Object(arguments[ie]) : {},
						ge = Object.keys(pe);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(pe).filter(function(be) {
						return Object.getOwnPropertyDescriptor(pe, be).enumerable
					})), ge.forEach(function(be) {
						qe(re, be, pe[be])
					})
				}
				return re
			}

			function qe(re, ie, pe) {
				return ie = Ge(ie), ie in re ? Object.defineProperty(re, ie, {
					value: pe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : re[ie] = pe, re
			}

			function Ge(re) {
				var ie = et(re, "string");
				return typeof ie == "symbol" ? ie : String(ie)
			}

			function et(re, ie) {
				if (typeof re != "object" || re === null) return re;
				var pe = re[Symbol.toPrimitive];
				if (pe !== void 0) {
					var ge = pe.call(re, ie || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ie === "string" ? String : Number)(re)
			}
			const Qe = re => {
					o().init(ze({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: M() && !(0, s.gm)() && me(),
						middlewares: [h, st, D, rt]
					}, re))
				},
				De = () => {
					o().identify(ze({}, (0, e.getAttribution)(), {
						locale: (0, c.r)((0, m.bh)().getState()),
						isCloudflare: !!(0, f.Jd)()
					}))
				},
				M = () => !0,
				ee = () => {
					(0, Ye.kT)("sparrow_id")
				},
				me = () => (0, Ye.Xm)()
		},
		"../utils/initStyles.ts": function(z, y, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../react/app/providers/storeContainer.js");
			const s = "cfBaseStyles",
				m = document.head || document.getElementsByTagName("head")[0],
				c = d => {
					const p = [];
					for (let _ in d.colors) {
						const t = d.colors[_];
						if (Array.isArray(t) && _ !== "categorical")
							for (let r = 0; r < t.length; ++r) p.push(`--cf-${_}-${r}:${t[r]};`)
					}
					return p.join(`
`)
				},
				f = () => {
					const d = (0, e.Yc)(),
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
      background-color: ${d?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${d?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${d?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${d?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${d?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${d?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
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
      ${c(e.Rl)}
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
					let _ = document.getElementById(s);
					_ ? _.innerText = "" : (_ = document.createElement("style"), _.id = s, m.appendChild(_)), _.appendChild(document.createTextNode(p)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(f), y.Z = f
		},
		"../utils/sentry/lastSentEventId.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let s = "";
				return {
					setEventId: f => (!f || typeof f != "string" || (s = f), s),
					getEventId: () => s
				}
			})()
		},
		"../utils/zaraz.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Ro: function() {
					return r
				},
				bM: function() {
					return p
				},
				tg: function() {
					return d
				},
				yn: function() {
					return t
				}
			});

			function e(a) {
				for (var l = 1; l < arguments.length; l++) {
					var i = arguments[l] != null ? Object(arguments[l]) : {},
						E = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(i).filter(function(g) {
						return Object.getOwnPropertyDescriptor(i, g).enumerable
					})), E.forEach(function(g) {
						o(a, g, i[g])
					})
				}
				return a
			}

			function o(a, l, i) {
				return l = s(l), l in a ? Object.defineProperty(a, l, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[l] = i, a
			}

			function s(a) {
				var l = m(a, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function m(a, l) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var E = i.call(a, l || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(a)
			}
			const c = {
					track: (a, l) => null,
					set: (a, l) => console.log(`zaraz.set(${a}, ${l})`)
				},
				f = {
					track: (a, l) => {
						var i;
						(i = window.zaraz) === null || i === void 0 || i.track(a, e({}, l, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, l) => {
						var i;
						return (i = window.zaraz) === null || i === void 0 ? void 0 : i.set(a, l)
					}
				};
			let d;
			const p = () => {
					window.zaraz, d = f
				},
				_ = ["email", "first_name", "last_name"],
				t = a => {
					_.forEach(l => {
						var i;
						(i = d) === null || i === void 0 || i.set(l, a[l])
					})
				},
				r = () => {
					t({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				m = n.n(s),
				c = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = n("../../../common/intl/intl-react/src/index.ts"),
				d = n("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				p = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				_ = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				t = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				r = n("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				a = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				l = n("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				i = n("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				E = n("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				g = n("../../../common/component/component-filter-bar/src/constants.js"),
				I = n("../../../common/component/component-filter-bar/src/utils.js");

			function v(F) {
				for (var S = 1; S < arguments.length; S++) {
					var x = arguments[S] != null ? Object(arguments[S]) : {},
						Y = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(x).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(x, oe).enumerable
					})), Y.forEach(function(oe) {
						b(F, oe, x[oe])
					})
				}
				return F
			}

			function b(F, S, x) {
				return S = R(S), S in F ? Object.defineProperty(F, S, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[S] = x, F
			}

			function R(F) {
				var S = D(F, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function D(F, S) {
				if (typeof F != "object" || F === null) return F;
				var x = F[Symbol.toPrimitive];
				if (x !== void 0) {
					var Y = x.call(F, S || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(F)
			}
			const h = 70,
				J = (0, c.createStyledComponent)(({
					showOverflow: F
				}) => v({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, F ? {} : {
					maxHeight: h,
					overflow: "hidden"
				})),
				q = (0, c.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				Q = (0, c.createStyledComponent)(({
					theme: F
				}) => ({
					backgroundColor: F.colors.background,
					py: 1,
					px: 2,
					borderRadius: F.radii[2],
					border: `1px solid ${F.colors.gray[7]}`,
					fontSize: F.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: F.colors.gray[4]
					}
				}), "div"),
				Z = (0, c.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				G = (0, c.createStyledComponent)(({
					theme: F
				}) => ({
					color: F.colors.gray[4],
					mr: 1
				}), "span"),
				j = (0, c.createStyledComponent)(() => ({
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
				$ = (0, c.createStyledComponent)(({
					buttonStyle: F
				}) => v({
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
				}, F), p.zx),
				X = (0, c.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				V = (0, c.createStyledComponent)(({
					theme: F
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: F.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: F.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: F.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: F.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				H = (0, c.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				le = F => F.current ? [...F.current.children].reduce((S, x) => (x.offsetTop >= h && S++, S), 0) : 0;
			let W = 0;
			class Ee extends e.Component {
				constructor() {
					super();
					b(this, "overflowWrapper", (0, e.createRef)()), b(this, "hasOverflowed", S => {
						const x = le(this.overflowWrapper);
						S.scrollHeight > h && x >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (S.scrollHeight < h || x === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), b(this, "addNewFilter", () => {
						const {
							filterDefinitions: S
						} = this.props, x = (0, I.TE)(S), Y = Object.keys(x)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: Y,
								operator: (0, I.uv)(Y, x),
								value: (0, I.TT)(Y, x)
							}
						})
					}), b(this, "handleOpenFilterEdit", S => {
						this.setState({
							openFilter: S,
							filterChanges: v({}, this.props.filters[S])
						})
					}), b(this, "handleRemoveFilterClick", (S, x) => {
						S.stopPropagation(), this.removeFilter(x)
					}), b(this, "removeFilter", S => {
						const {
							handleFiltersChange: x
						} = this.props, Y = [...this.props.filters], oe = Y[S];
						Y.splice(S, 1), x(Y), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: oe.key,
							operator: oe.operator,
							value: oe.value
						})
					}), b(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), b(this, "handleFilterSubmit", S => {
						const {
							filterDefinitions: x
						} = this.props;
						S.preventDefault();
						const {
							filterChanges: Y
						} = this.state, oe = typeof x[Y.key].parse == "function" ? Array.isArray(Y.value) ? Y.value.map(x[Y.key].parse) : x[Y.key].parse(Y.value) : Y.value;
						if (x[Y.key].validate && (Array.isArray(oe) ? !oe.every(x[Y.key].validate) : !x[Y.key].validate(oe))) return this.setState({
							invalid: !0
						});
						const k = [...this.props.filters],
							C = v({}, Y, {
								value: oe
							}),
							P = !k[this.state.openFilter];
						P ? k.push(C) : k[this.state.openFilter] = v({}, Y), this.props.handleFiltersChange(k, C), (P ? this.props.onAddFilter : this.props.onEditFilter)({
							field: C.key,
							operator: C.operator,
							value: C.value
						}), this.closeOpenFilterChanges()
					}), b(this, "handlePendingKeyChange", ({
						value: S
					}) => {
						const {
							filterDefinitions: x
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: S,
								operator: (0, I.uv)(S, x),
								value: (0, I.TT)(S, x)
							}
						})
					}), b(this, "handlePendingOperatorChange", ({
						value: S
					}) => {
						let x = v({}, this.state.filterChanges, {
							operator: S
						});
						if ((0, I.dr)(S)) {
							var Y, oe;
							((Y = this.state.filterChanges) === null || Y === void 0 ? void 0 : Y.value) && !Array.isArray((oe = this.state.filterChanges) === null || oe === void 0 ? void 0 : oe.value) && (x.value = [this.state.filterChanges.value])
						} else {
							var k, C, P;
							((k = this.state.filterChanges) === null || k === void 0 ? void 0 : k.value) && Array.isArray((C = this.state.filterChanges) === null || C === void 0 ? void 0 : C.value) && ((P = this.state.filterChanges) === null || P === void 0 ? void 0 : P.value.length) > 0 && (x.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: x
						})
					}), b(this, "handlePendingValueChange", S => {
						this.setState({
							invalid: !1,
							filterChanges: v({}, this.state.filterChanges, {
								value: S
							})
						})
					}), b(this, "handleShowOverflow", () => {
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
				componentDidUpdate(S) {
					S.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(S) {
					const {
						formatLabel: x,
						filterDefinitions: Y
					} = this.props, {
						operator: oe
					} = this.state.filterChanges, k = Y[this.state.filterChanges.key], C = this.state.filterChanges.value, P = A => Array.isArray(A) ? A.map(U => U.value) : (A == null ? void 0 : A.value) || null;
					if (k.renderValueComponent) return k.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (k.type) {
						case g.k.select:
							return (0, I.dr)(oe) ? o().createElement(l.Z, {
								searchable: !0,
								multi: !0,
								creatable: !k.options,
								value: typeof C.split == "function" ? C == null ? void 0 : C.split(",") : Array.isArray(C) ? C : [],
								options: k.options ? k.options.map(A => ({
									value: A.value || A,
									label: A.label || x(this.state.filterChanges.key, A, S)
								})) : C ? (Array.isArray(C) ? C : C.split(",")).map(A => ({
									label: A,
									value: A
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(f.cC, {
									id: k.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: k.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: A => {
									this.handlePendingValueChange(P(A))
								},
								isValidNewOption: A => {
									const U = k.validate;
									return !U && A || A && U([A])
								},
								getNewOptionData: (A, U) => ({
									value: A,
									label: U
								})
							}) : o().createElement(r.hQ, {
								hideLabel: !0,
								value: C,
								options: k.options.map(A => ({
									value: A,
									label: x(this.state.filterChanges.key, A, S)
								})),
								onChange: ({
									value: A
								}) => this.handlePendingValueChange(A)
							});
						case g.k.string:
						default:
							return (0, I.dr)(oe) ? o().createElement(l.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof C.split == "function" ? C == null ? void 0 : C.split(",") : Array.isArray(C) ? C : [],
								options: C ? (Array.isArray(C) ? C : C.split(",")).map(A => ({
									label: A,
									value: A
								})) : [],
								noOptionsMessage: () => null,
								placeholder: S.t("analytics.report.filters.labels.placeholder", {
									example: Y[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: A => {
									this.handlePendingValueChange(P(A))
								},
								isValidNewOption: A => {
									const U = k.validate;
									return !U && A || A && U([A])
								},
								getNewOptionData: (A, U) => ({
									value: A,
									label: U
								}),
								formatCreateLabel: A => S.t("filter_editor.value_create_label", {
									value: A
								})
							}) : o().createElement(f.oc, null, A => o().createElement(d.I, {
								value: this.state.filterChanges.value,
								onChange: U => this.handlePendingValueChange(U.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: A.t("analytics.report.filters.labels.placeholder", {
									example: Y[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: S,
						filterDefinitions: x,
						modalStyles: Y,
						filterIconType: oe,
						buttonStyle: k
					} = this.props, C = le(this.overflowWrapper), P = `filterPanel${this.state.id}`, A = this.state.openFilter !== null;
					return o().createElement(f.oc, null, U => o().createElement(a.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(H, null, o().createElement($, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": A,
						"aria-controls": P,
						inverted: !0,
						buttonStyle: k
					}, o().createElement(_.J, {
						type: oe || "add",
						mr: 1,
						label: U.t("common.add", {
							_: "Add"
						})
					}), o().createElement(f.cC, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(X, null, o().createElement(f.cC, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(J, {
						innerRef: this.overflowWrapper,
						overflowLimit: h,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((B, ae) => {
						const {
							key: fe,
							operator: Oe,
							value: Pe
						} = B, N = x[fe].ignoreLabelTranslation ? x[fe].label : U.t(x[fe].label), ce = U.t(`analytics.report.filters.operators.${Oe}`), Se = Array.isArray(Pe) ? Pe.map(Ue => S(fe, Ue, U)).join(", ") : S(fe, Pe, U), Fe = `${N} ${ce} ${Se}`;
						return o().createElement(q, {
							key: `${fe}-${Oe}-${Pe}`,
							title: Fe
						}, o().createElement(Q, {
							onClick: () => this.handleOpenFilterEdit(ae)
						}, o().createElement(a.ZC, {
							display: "flex"
						}, o().createElement(Z, null, N), o().createElement(G, null, ce), o().createElement(j, null, Se), (0, I.oN)(B, x) ? o().createElement(t.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(V, {
							onClick: Ue => this.handleRemoveFilterClick(Ue, ae),
							"aria-label": "remove"
						}, o().createElement(_.J, {
							type: "remove"
						})))))
					})), A && o().createElement(E.Z, {
						id: P,
						filterDefinitions: x,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, I.oN)(this.state.filterChanges, x),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: S,
						modalStyles: Y
					}), this.state.hasOverflowed && o().createElement(i.Z, {
						count: C,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			b(Ee, "propTypes", {
				filterDefinitions: m().shape({}),
				filters: m().arrayOf(m().shape({
					key: m().string,
					operator: m().string,
					value: m().string
				})),
				handleFiltersChange: m().func.isRequired,
				formatLabel: m().func.isRequired,
				onAddFilter: m().func,
				onEditFilter: m().func,
				onRemoveFilter: m().func,
				children: m().node,
				modalStyles: m().object,
				filterIconType: m().string,
				buttonStyle: m().object
			}), y.Z = Ee
		},
		"../../../common/component/component-filter-bar/src/index.js": function(z, y, n) {
			"use strict";
			n.d(y, {
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
					return m.oN
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = n("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				s = n("../../../common/component/component-filter-bar/src/constants.js"),
				m = n("../../../common/component/component-filter-bar/src/utils.js")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				OZ: function() {
					return c
				},
				YB: function() {
					return m
				}
			});

			function e(d, p, _) {
				return p = o(p), p in d ? Object.defineProperty(d, p, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = _, d
			}

			function o(d) {
				var p = s(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function s(d, p) {
				if (typeof d != "object" || d === null) return d;
				var _ = d[Symbol.toPrimitive];
				if (_ !== void 0) {
					var t = _.call(d, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			class m extends Error {
				constructor(p, _) {
					super(_);
					e(this, "translationKey", void 0), this.translationKey = p, this.name = "TranslatorError"
				}
			}
			class c extends m {
				constructor(p) {
					super(p, `Translation key not found: ${p}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var f = null
		},
		"../../../common/intl/intl-react/src/I18nProvider.tsx": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(_) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (_[a] = r[a])
					}
					return _
				}, m.apply(this, arguments)
			}

			function c(_, t) {
				if (_ == null) return {};
				var r = f(_, t),
					a, l;
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(_);
					for (l = 0; l < i.length; l++) a = i[l], !(t.indexOf(a) >= 0) && (!Object.prototype.propertyIsEnumerable.call(_, a) || (r[a] = _[a]))
				}
				return r
			}

			function f(_, t) {
				if (_ == null) return {};
				var r = {},
					a = Object.keys(_),
					l, i;
				for (i = 0; i < a.length; i++) l = a[i], !(t.indexOf(l) >= 0) && (r[l] = _[l]);
				return r
			}
			class d extends e.Component {
				constructor(t) {
					super(t);
					const {
						locale: r,
						phrases: a,
						translator: l
					} = t;
					r && l.locale(r), a && l.extend(a)
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
			const p = _ => {
				let {
					translator: t
				} = _, r = c(_, ["translator"]);
				const a = () => e.createElement(s.oc, null, l => e.createElement(d, m({
					translator: l
				}, r)));
				return t ? (t.locale(r.locale), e.createElement(s.bd, {
					value: t
				}, a())) : a()
			};
			y.Z = p
		},
		"../../../common/intl/intl-react/src/index.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
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
					return q
				},
				cC: function() {
					return R
				},
				QT: function() {
					return h.Q
				}
			});
			var e = n("../../../common/intl/intl-react/src/I18nProvider.tsx"),
				o = n("../../../common/intl/intl-react/src/I18nLoader.tsx"),
				s = n("webpack/sharing/consume/default/react/react"),
				m = n.n(s),
				c = n("../../../../node_modules/lodash/escape.js"),
				f = n.n(c),
				d = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				p = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function _(Q) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var G = arguments[Z] != null ? Object(arguments[Z]) : {},
						j = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(G).filter(function($) {
						return Object.getOwnPropertyDescriptor(G, $).enumerable
					})), j.forEach(function($) {
						t(Q, $, G[$])
					})
				}
				return Q
			}

			function t(Q, Z, G) {
				return Z = r(Z), Z in Q ? Object.defineProperty(Q, Z, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[Z] = G, Q
			}

			function r(Q) {
				var Z = a(Q, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function a(Q, Z) {
				if (typeof Q != "object" || Q === null) return Q;
				var G = Q[Symbol.toPrimitive];
				if (G !== void 0) {
					var j = G.call(Q, Z || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(Q)
			}

			function l() {
				return l = Object.assign ? Object.assign.bind() : function(Q) {
					for (var Z = 1; Z < arguments.length; Z++) {
						var G = arguments[Z];
						for (var j in G) Object.prototype.hasOwnProperty.call(G, j) && (Q[j] = G[j])
					}
					return Q
				}, l.apply(this, arguments)
			}
			const i = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				E = /(?:\r\n|\r|\n)/g;

			function g(Q, Z, G) {
				return s.createElement("span", {
					key: Q,
					"data-testid": G,
					dangerouslySetInnerHTML: {
						__html: Z
					}
				})
			}

			function I(Q, Z = [], G = [], j) {
				let $ = 0;
				const X = Q.replace(E, "").split(i);
				if (X.length === 1) return [g($, Q, j)];
				const V = [],
					H = X.shift();
				if (H) {
					const le = g($, H, j);
					V.push(le), typeof le != "string" && $++
				}
				for (const [le, W, Ee] of v(X)) {
					Z[le] || window.console && console.warn(`Missing Component for translation key: ${Q}, index: ${le}. Fragment will be used.`);
					const F = Z[le] || s.Fragment,
						S = G[le] || {},
						x = g(0, W);
					if (V.push(s.createElement(F, l({
							key: $
						}, S), x)), $++, Ee) {
						const Y = g($, Ee);
						V.push(Y), typeof Y != "string" && $++
					}
				}
				return V
			}

			function v(Q) {
				if (!Q.length) return [];
				const [Z, G, j, $] = Q.slice(0, 4);
				return [
					[parseInt(Z || j), G || "", $]
				].concat(v(Q.slice(4, Q.length)))
			}

			function b({
				id: Q = "",
				smartCount: Z,
				_: G,
				values: j,
				applyMarkdown: $,
				Components: X,
				componentProps: V,
				testId: H
			}) {
				return s.createElement(p.oc, null, le => {
					j && Object.keys(j).forEach(S => j[S] = f()(j[S])), V && V.forEach(S => {
						Object.keys(S).forEach(x => {
							typeof S[x] == "string" && (S[x] = f()(S[x]))
						})
					});
					const W = _({
							smart_count: Z,
							_: G
						}, j),
						Ee = $ ? (0, d.Z)(le.t(Q.toString(), W), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : le.t(Q.toString(), W),
						F = I(Ee, X, V, H);
					return F.length > 1 ? s.createElement(s.Fragment, null, F) : F[0]
				})
			}
			var R = b,
				D = n("../../../common/intl/intl-react/src/withTranslator.tsx"),
				h = n("../../../common/intl/intl-react/src/useI18n.tsx"),
				J = n("../../../common/intl/intl-types/src/index.ts"),
				q = m().createContext(J.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Aw: function() {
					return J
				},
				Ib: function() {
					return D
				},
				Ks: function() {
					return q
				},
				MS: function() {
					return h
				},
				PN: function() {
					return E
				},
				Pp: function() {
					return m
				},
				Q3: function() {
					return l
				},
				TS: function() {
					return i
				},
				W7: function() {
					return v
				},
				dN: function() {
					return Q
				},
				eF: function() {
					return R
				},
				qp: function() {
					return t
				},
				wR: function() {
					return _
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				s = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				m = e.eg.object({
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
				c = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				f = e.eg.object({
					registrant: m.optional,
					technical: m.optional,
					administrator: m.optional,
					billing: m.optional
				}),
				d = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: f.optional,
					years: e.eg.number
				}),
				p = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let _ = function(Z) {
				return Z.ONBOARDING_INITIATED = "Onboarding Initiated", Z.ONBOARDED = "Onboarded", Z.PENDING_REGISTRY_LOCK = "Pending Registry Lock", Z.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", Z.REGISTRY_UNLOCKED = "Registry Unlocked", Z.LOCKED = "Locked", Z.FAILED_TO_LOCK = "Failed To Lock", Z.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", Z.UNLOCKED = "Unlocked", Z.OFFBOARDED = "Offboarded", Z
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
						status: e.eg.enum(_).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: p.optional,
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
					transfer_conditions: c.optional,
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
				a = e.eg.object({
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
				l = e.eg.object({
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
				i = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let E = function(Z) {
				return Z.PENDING = "pending", Z.VERIFIED = "verified", Z.REJECTED = "rejected", Z.PENDING_DELETE = "pending_delete", Z.DELETED = "deleted", Z
			}({});
			const g = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(E),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				I = e.eg.object({
					designated_approvers: e.eg.array(g)
				});
			let v = function(Z) {
				return Z.PENDING = "pending", Z.PENDING_UPDATE = "pending_update", Z.ENABLED = "enabled", Z.DISABLED = "disabled", Z
			}({});
			const b = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(v)
				}),
				R = e.eg.intersection([b, I]),
				D = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let h = function(Z) {
				return Z.UNLOCK_APPROVAL = "UnlockApprovalRequest", Z.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", Z.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", Z.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", Z
			}({});
			const J = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				q = e.eg.object({
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
		"../../../common/util/types/src/utils/index.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
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
			const o = (s, m) => {
				if (m !== void 0) throw new Error("Unexpected object: " + s);
				return m
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(z, y, n) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(s) {
				if (!n.o(e, s)) return Promise.resolve().then(function() {
					var f = new Error("Cannot find module '" + s + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				});
				var m = e[s],
					c = m[0];
				return n.e(m[1]).then(function() {
					return n.t(c, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", z.exports = o
		}
	}
]);

//# debugId=8472244d-171a-595a-964c-a9119f3cf962