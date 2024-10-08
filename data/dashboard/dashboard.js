! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1d52e149-05c0-50bf-8cd9-a5f759fb388c")
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
					return d
				},
				Qw: function() {
					return u
				},
				ki: function() {
					return p
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/utils/url.ts"),
				l = n("../node_modules/query-string/query-string.js"),
				f = n.n(l),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m;
			const u = () => Object.keys(s.Z).reduce((E, T) => (T.indexOf("cf_beta.") === 0 && s.Z.get(T) === "true" && E.push(T.split(".").slice(1).join(".")), E), []),
				p = () => {
					var E, T, h;
					return ((E = window) === null || E === void 0 || (T = E.bootstrap) === null || T === void 0 || (h = T.data) === null || h === void 0 ? void 0 : h.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((m = window) === null || m === void 0 ? void 0 : m.location) && s.Z) {
				const E = f().parse(window.location.search);
				E.beta_on && s.Z.set(`cf_beta.${E.beta_on}`, !0), E.beta_off && s.Z.set(`cf_beta.${E.beta_off}`, !1)
			}
			const v = {},
				t = E => {
					var T, h, C;
					return Object.prototype.hasOwnProperty.call(v, E) ? v[E] : ((T = window) === null || T === void 0 || (h = T.bootstrap) === null || h === void 0 || (C = h.data) === null || C === void 0 ? void 0 : C.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(D => D === E) ? (v[E] = !0, !0) : (v[E] = !1, !1)
				},
				r = E => s.Z ? s.Z.get(`cf_beta.${E}`) === !0 : !1,
				a = E => r(E) || t(E),
				c = () => !0,
				i = () => {
					var E, T, h;
					return ((E = window) === null || E === void 0 || (T = E.bootstrap) === null || T === void 0 || (h = T.data) === null || h === void 0 ? void 0 : h.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				d = E => {
					const T = (0, e.uF)(E),
						h = (T == null ? void 0 : T.roles) || [];
					return (0, o.qR)(location.pathname) && h.length === 1 && h.some(C => C === "Administrator Read Only")
				}
		},
		"../init.ts": function(z, y, n) {
			"use strict";
			n.r(y);
			var e = n("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = n("../../../../node_modules/url-search-params-polyfill/index.js"),
				l = n("../libs/init/initGlobal.ts"),
				f = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				s = n("../../../../node_modules/fetch-intercept/lib/browser.js");

			function m(A) {
				for (var R = 1; R < arguments.length; R++) {
					var V = arguments[R] != null ? Object(arguments[R]) : {},
						oe = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(V).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(V, ue).enumerable
					})), oe.forEach(function(ue) {
						u(A, ue, V[ue])
					})
				}
				return A
			}

			function u(A, R, V) {
				return R = p(R), R in A ? Object.defineProperty(A, R, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[R] = V, A
			}

			function p(A) {
				var R = v(A, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function v(A, R) {
				if (typeof A != "object" || A === null) return A;
				var V = A[Symbol.toPrimitive];
				if (V !== void 0) {
					var oe = V.call(A, R || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(A)
			}
			const t = A => {
				const R = A && A.headers || {},
					V = new Headers(R);
				return V.append("X-Cross-Site-Security", "dash"), m({}, A, {
					headers: V
				})
			};
			(0, s.register)({
				request: (A, R) => {
					try {
						return new URL(A), A === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", R] : [A, R]
					} catch {
						return [A, t(R)]
					}
				}
			});
			var r = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				a = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				c = n("../react/app/providers/storeContainer.js");
			let i = "";
			const d = 61;

			function E(A) {
				const R = A.substr(1);
				if (R && i !== R) {
					const V = document.getElementById(R);
					if (V) {
						const oe = V.getBoundingClientRect().top;
						if (oe > 0) {
							const ue = oe - d;
							document.documentElement.scrollTop = ue
						}
					}
				}
				i = R
			}

			function T(A) {
				A.listen(R => E(R.hash))
			}
			var h = n("../../../../node_modules/cookie/index.js"),
				C = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const D = "CF_dash_version",
				b = "cf_fv_preview",
				_ = "current",
				S = "hash",
				G = "deploymentPreview",
				j = "fragmentPreview",
				$ = A => A === _ ? Z() : k(),
				Z = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				k = (A = 72) => {
					const R = 36e5;
					return new Date(Date.now() + A * R)
				},
				F = A => {
					switch (A) {
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
				ne = (A, R = !1) => {
					var V;
					const oe = F(A),
						ue = `
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
    <h1 id="error-title">${oe.title}</h1>
    <p id="error-description">${oe.description}</p>
  </div>
  `,
						Ce = R ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${C.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(V=window.build)===null||V===void 0?void 0:V.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return ue + Ce
				},
				Y = A => {
					var R;
					const V = document.getElementById(A);
					!V || (R = V.parentNode) === null || R === void 0 || R.removeChild(V)
				};

			function re() {
				const A = document.getElementById("loading-state");
				A == null || A.classList.add("hide"), A == null || A.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(Y)
				})
			}

			function te(A) {
				var R;
				const V = document.getElementById("loading-state"),
					oe = !!((R = h.parse(document.cookie)) === null || R === void 0 ? void 0 : R[D]);
				!V || (V.innerHTML = ne(A == null ? void 0 : A.code, oe))
			}
			var pe = n("../utils/initStyles.ts"),
				W = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				U = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				w = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				K = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				ee = n("../../../../node_modules/history/esm/history.js"),
				N = (0, ee.lX)(),
				P = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				O = n("../react/utils/url.ts");
			const I = (0, P.Rf)();
			let H;

			function Q(A) {
				return X(A, "react-router-v5")
			}

			function X(A, R) {
				return (V, oe = !0, ue = !0) => {
					oe && I && I.location && (H = V({
						name: (0, O.Fl)(I.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": R
						}
					})), ue && A.listen && A.listen((Ce, ve) => {
						if (ve && (ve === "PUSH" || ve === "POP")) {
							H && H.finish();
							const Be = {
								"routing.instrumentation": R
							};
							H = V({
								name: (0, O.Fl)(Ce.pathname),
								op: "navigation",
								tags: Be
							})
						}
					})
				}
			}
			var me = n("../react/common/selectors/languagePreferenceSelector.ts"),
				Le = n("../flags.ts"),
				Ie = n("../utils/getDashVersion.ts"),
				x = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ie = n.n(x),
				be = n("../../../common/intl/intl-core/src/errors.ts"),
				xe = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				je = n("../react/common/middleware/sparrow/errors.ts");
			const He = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				Ye = !0,
				Qe = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				it = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function Ke(A, R, V) {
				return R = Ze(R), R in A ? Object.defineProperty(A, R, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[R] = V, A
			}

			function Ze(A) {
				var R = Ve(A, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function Ve(A, R) {
				if (typeof A != "object" || A === null) return A;
				var V = A[Symbol.toPrimitive];
				if (V !== void 0) {
					var oe = V.call(A, R || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(A)
			}
			class $e {
				constructor() {
					Ke(this, "name", $e.id)
				}
				setupOnce() {
					n.g.console && (0, xe.hl)(n.g.console, "error", R => (...V) => {
						const oe = V.find(ue => ue instanceof Error);
						if (He && oe) {
							let ue, Ce = !0;
							if (oe instanceof je.ez) {
								const ve = oe instanceof je.oV ? oe.invalidProperties : void 0;
								ue = {
									tags: {
										"sparrow.eventName": oe.eventName
									},
									extra: {
										sparrow: {
											eventName: oe.eventName,
											invalidProperties: ve
										}
									},
									fingerprint: [oe.name ? oe.name : "SparrowValidationError"]
								}, Ce = !1
							} else if (oe instanceof x.SparrowIdCookieError) ue = {
								extra: {
									sparrowIdCookie: oe.cookie
								},
								fingerprint: [oe.name ? oe.name : "SparrowIdCookieError"]
							};
							else if (oe.name === "ChunkLoadError") {
								ue = {
									fingerprint: [oe.name]
								};
								try {
									ue.tags = {
										chunkId: oe.message.split(" ")[2],
										chunkUrl: oe.request
									}
								} catch {}
							} else oe instanceof be.YB && (ue = {
								fingerprint: ["TranslatorError", oe.translationKey]
							});
							Ce && r.Tb(oe, ue)
						}
						typeof R == "function" && R.apply(n.g.console, V)
					})
				}
			}
			Ke($e, "id", "ConsoleErrorIntegration");
			var et = null,
				Xe = n("../utils/sentry/lastSentEventId.ts"),
				We = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				tt = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const Je = A => {
					const R = async V => {
						var oe, ue;
						const Ce = {
							envelope: V.body,
							url: A.url,
							isPreviewDeploy: (oe = window) === null || oe === void 0 || (ue = oe.build) === null || ue === void 0 ? void 0 : ue.isPreviewDeploy,
							release: (0, Ie.t)()
						};
						try {
							const ve = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(Ce)
							});
							return {
								statusCode: ve.status,
								headers: {
									"x-sentry-rate-limits": ve.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": ve.headers.get("Retry-After")
								}
							}
						} catch (ve) {
							return console.log(ve), (0, tt.$2)(ve)
						}
					};
					return We.q(A, R)
				},
				nt = () => {
					if (He && Ye) {
						var A, R, V, oe, ue, Ce, ve, Be, ot, at;
						let vt = "production";
						((A = window) === null || A === void 0 || (R = A.build) === null || R === void 0 ? void 0 : R.isPreviewDeploy) && (vt += "-preview"), U.S({
							dsn: He,
							release: (0, Ie.t)(),
							environment: vt,
							ignoreErrors: it,
							allowUrls: Qe,
							autoSessionTracking: !1,
							integrations: [new w.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new $e, new K.jK.BrowserTracing({
								routingInstrumentation: Q(N)
							})],
							tracesSampleRate: 0,
							transport: Je,
							beforeSend: Nt => (Xe.e.setEventId(Nt.event_id), Nt)
						});
						const Wt = (0, c.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, Le.Qw)(),
							USER_BETA_FLAGS: (0, Le.ki)(),
							meta: {
								connection: {
									type: (V = window) === null || V === void 0 || (oe = V.navigator) === null || oe === void 0 || (ue = oe.connection) === null || ue === void 0 ? void 0 : ue.effectiveType,
									bandwidth: (Ce = window) === null || Ce === void 0 || (ve = Ce.navigator) === null || ve === void 0 || (Be = ve.connection) === null || Be === void 0 ? void 0 : Be.downlink
								},
								languagePreference: (0, me.r)(Wt),
								isPreviewDeploy: (ot = window) === null || ot === void 0 || (at = ot.build) === null || at === void 0 ? void 0 : at.isPreviewDeploy
							},
							utilGates: (0, W.T2)(Wt)
						}), window.addEventListener("unhandledrejection", function(Nt) {})
					}
				},
				B = A => {
					A ? r.av({
						id: A
					}) : r.av(null)
				};
			var J = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Me = () => {
					let A;
					try {
						A = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), A = window.location.search
					}
					if (!A.includes("remote[")) return;
					const R = new URLSearchParams(A),
						V = {};
					for (let [oe, ue] of R) oe.includes("remote") && (V[oe.replace(/remote\[|\]/g, "")] = ue);
					J.Z.set("mfe-remotes", JSON.stringify(V))
				},
				De = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				se = n("../node_modules/uuid/dist/esm-browser/v4.js");
			const le = "ANON_USER_ID";

			function fe() {
				var A, R, V, oe;
				let ue = (A = n.g) === null || A === void 0 || (R = A.bootstrap) === null || R === void 0 || (V = R.data) === null || V === void 0 || (oe = V.user) === null || oe === void 0 ? void 0 : oe.id;
				if (!ue) {
					let Ce = J.Z.get(le);
					if (!Ce) {
						let ve = (0, se.Z)();
						J.Z.set(le, ve), Ce = ve
					}
					return Ce
				}
				return ue
			}
			async function _e() {
				const A = (0, c.bh)();
				A.dispatch((0, De.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await A.dispatch((0, W.UL)({
					userId: fe()
				}))
			}
			var Te = n("../libs/init/initBootstrap.ts"),
				Ae = n("webpack/sharing/consume/default/react/react"),
				Ee = n.n(Ae),
				Ne = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Se = n("webpack/sharing/consume/default/react-dom/react-dom"),
				ze = n("webpack/sharing/consume/default/react-redux/react-redux"),
				st = n("../../../../node_modules/swr/core/dist/index.mjs"),
				rt = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				M = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				q = n("../react/shims/focus-visible.js"),
				de = n("../react/app/components/DeepLink/index.ts"),
				ye = n("../../../../node_modules/prop-types/index.js"),
				Pe = n.n(ye),
				Re = n("../react/utils/translator.tsx"),
				qe = n("../../../common/intl/intl-react/src/index.ts"),
				Oe = n("../../../dash/intl/intl-translations/src/index.ts"),
				Dt = n("../node_modules/query-string/query-string.js"),
				ct = n.n(Dt),
				St = n("../react/common/actions/userActions.ts"),
				ut = n("../react/common/selectors/userSelectors.ts"),
				Ue = n("../react/utils/i18n.ts"),
				ht = n("../react/utils/bootstrap.ts");

			function wt(A) {
				for (var R = 1; R < arguments.length; R++) {
					var V = arguments[R] != null ? Object(arguments[R]) : {},
						oe = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(V).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(V, ue).enumerable
					})), oe.forEach(function(ue) {
						Mt(A, ue, V[ue])
					})
				}
				return A
			}

			function Mt(A, R, V) {
				return R = kt(R), R in A ? Object.defineProperty(A, R, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[R] = V, A
			}

			function kt(A) {
				var R = Rt(A, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function Rt(A, R) {
				if (typeof A != "object" || A === null) return A;
				var V = A[Symbol.toPrimitive];
				if (V !== void 0) {
					var oe = V.call(A, R || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(A)
			}
			let Fe = ct().parse(location.search);
			const Ct = A => {
					const R = (0, ht.$8)() ? [(0, Oe.Fy)(Oe.if.changes), (0, Oe.Fy)(Oe.if.common), (0, Oe.Fy)(Oe.if.navigation), (0, Oe.Fy)(Oe.if.overview), (0, Oe.Fy)(Oe.if.onboarding), (0, Oe.Fy)(Oe.if.invite), (0, Oe.Fy)(Oe.if.login), (0, Oe.Fy)(Oe.if.dns), (0, Oe.Fy)(Oe.n4.ssl_tls), (0, Oe.Fy)(Oe.if.message_inbox)] : [(0, Oe.Fy)(Oe.if.common), (0, Oe.Fy)(Oe.if.invite), (0, Oe.Fy)(Oe.if.login), (0, Oe.Fy)(Oe.if.onboarding)];
					Fe.lang ? bt(A) : J.Z.get(Ue.th) && Tt(A, J.Z.get(Ue.ly));
					const V = async oe => (await Promise.all(R.map(Ce => Ce(oe)))).reduce((Ce, ve) => wt({}, Ce, ve), {});
					return Ee().createElement(qe.RD.Provider, {
						value: A.languagePreference
					}, Ee().createElement(qe.bd, {
						translator: Re.Vb,
						locale: A.languagePreference
					}, Ee().createElement(qe.lm, {
						loadPhrases: V
					}, A.children)))
				},
				bt = async A => {
					let R = Fe.lang.substring(0, Fe.lang.length - 2) + Fe.lang.substring(Fe.lang.length - 2, Fe.lang.length).toUpperCase();
					if (!(0, me.v)(R)) {
						console.warn(`${R} is not a supported locale.`), delete Fe.lang, A.history.replace({
							search: ct().stringify(Fe)
						});
						return
					}
					J.Z.set(Ue.ly, R), delete Fe.lang, Tt(A, R), A.isAuthenticated || A.history.replace({
						search: ct().stringify(Fe)
					})
				}, Tt = async (A, R) => {
					if (A.isAuthenticated) try {
						await A.setUserCommPreferences({
							"language-locale": R
						}, {
							hideErrorAlert: !0
						}), J.Z.remove(Ue.th), A.history.replace({
							search: ct().stringify(Fe)
						})
					} catch (V) {
						J.Z.set(Ue.th, !0), console.error(V)
					} else J.Z.set(Ue.th, !0)
				}, g = A => {
					const R = (0, ut.PR)(A);
					return {
						isAuthenticated: !!(R && R.id),
						languagePreference: J.Z.get(Ue.ly) || (0, me.r)(A)
					}
				}, L = {
					setUserCommPreferences: St.V_
				};
			var ce = (0, Ne.withRouter)((0, ze.connect)(g, L)(Ct));
			Ct.propTypes = {
				history: Pe().object,
				languagePreference: Pe().string.isRequired,
				children: Pe().node.isRequired,
				isAuthenticated: Pe().bool,
				setUserCommPreferences: Pe().func.isRequired
			};
			var he = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				ke = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let Ge;
			const mt = ({
				selectorPrefix: A = "c_"
			} = {}) => (Ge || (Ge = (0, ke.Z)({
				dev: !1,
				selectorPrefix: A
			})), Ge);
			var gt = n("../react/common/components/ModalManager.tsx"),
				ft = n("../react/app/components/ErrorBoundary.tsx"),
				Et = n("../react/common/actions/notificationsActions.ts");
			const dt = (n.g.bootstrap || {}).data || {};
			class pt extends Ee().Component {
				componentDidMount() {
					dt.messages && this.dispatchNotificationActions(dt.messages)
				}
				dispatchNotificationActions(R) {
					R.forEach(V => {
						const {
							type: oe,
							message: ue,
							persist: Ce
						} = V;
						["success", "info", "warn", "error"].includes(oe) && this.props.notifyAdd(oe, (0, Re.ZP)(ue), {
							persist: !!Ce
						})
					})
				}
				render() {
					return null
				}
			}
			var _t = (0, Ne.withRouter)((0, ze.connect)(null, {
				notifyAdd: Et.IH
			})(pt));
			pt.propTypes = {
				notifyAdd: Pe().func.isRequired
			};
			var we = n("../react/app/redux/index.ts");

			function Ot() {
				var A;
				const R = (0, we.p4)(ut.PR),
					V = (R == null || (A = R.email) === null || A === void 0 ? void 0 : A.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					oe = (0, De.Yc)();
				(0, Ae.useEffect)(() => {
					oe({
						userType: V
					})
				}, [V, oe])
			}
			var Bt = n("../react/common/selectors/entitlementsSelectors.ts"),
				jt = n("../react/common/selectors/accountSelectors.ts");
			const zt = ["accountId", "is_ent"];

			function Gt() {
				const A = (0, De.f7)(),
					R = (0, Ne.useHistory)(),
					V = (0, O.uW)(R.location.pathname),
					oe = (0, De.Yc)(),
					ue = (0, De.O$)(),
					Ce = (0, we.p4)(Bt.u1),
					ve = !Ce.isRequesting && !!Ce.data,
					Be = (0, we.p4)(Bt.p1),
					ot = (0, we.p4)(jt.Xu),
					at = (0, we.p4)(jt.uF),
					vt = !ot.isRequesting && !!ot.data;
				(0, Ae.useEffect)(() => {
					V && vt && at && ve && V === at.account.id ? oe({
						accountId: at.account.id,
						is_ent: Be
					}) : (!V || V in A && A.accountId !== V) && ue(zt)
				}, [vt, at, oe, ue, ve, Be, V, A])
			}
			var Ht = n("../react/common/selectors/zoneSelectors.ts");

			function Kt() {
				const A = (0, we.p4)(Ht.nA),
					R = (0, De.Yc)();
				(0, Ae.useEffect)(() => {
					var V;
					R({
						zone_id: A == null ? void 0 : A.id,
						zone_plan: A == null || (V = A.plan) === null || V === void 0 ? void 0 : V.legacy_id
					})
				}, [A, R])
			}
			const Zt = () => (Ot(), Gt(), Kt(), null);
			var Vt = n("../react/app/components/Persistence/index.tsx"),
				Yt = n("../node_modules/@cloudflare/elements/es/index.js"),
				Qt = n("../react/app/components/LoadingSuspense.tsx");
			const Xt = Ee().lazy(() => Promise.all([n.e(43234), n.e(2480), n.e(10008), n.e(49146), n.e(94012), n.e(13142), n.e(72019), n.e(73562), n.e(5668), n.e(60091), n.e(89263), n.e(77216), n.e(39760), n.e(94923), n.e(60734), n.e(40758), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var Jt = () => Ee().createElement(Qt.Z, null, Ee().createElement(Xt, null));
			const qt = () => (Ae.useEffect(() => re, []), null);
			var en = n("../../../../node_modules/moment/moment.js"),
				Ut = n.n(en);
			const tn = A => {
					switch (A) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return A.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return A.toLowerCase();
						default:
							return "en"
					}
				},
				nn = () => {
					const A = (0, we.p4)(me.r);
					(0, Ae.useEffect)(() => {
						const R = tn(A);
						R !== Ut().locale() && Ut().locale(R), document.documentElement.lang = A
					}, [A])
				},
				on = () => {
					(0, Ae.useEffect)(() => {
						async function A() {
							var R, V;
							let oe;
							if (((R = window) === null || R === void 0 || (V = R.build) === null || V === void 0 ? void 0 : V.isPreviewDeploy) && (oe = "cookie"), !!oe) try {
								const ue = document.head.querySelector("link[rel=icon]");
								ue && (ue.href = (await n("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${oe}.ico`)).default)
							} catch {}
						}
						A()
					}, [])
				};
			var rn = n("../react/common/constants/constants.ts");
			const an = () => {
					var A;
					const R = (0, Ne.useLocation)(),
						[V, oe] = (0, Ae.useState)(((A = window) === null || A === void 0 ? void 0 : A.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Ae.useEffect)(() => {
						const ue = ct().parse(R.search);
						if (ue.pt && J.Z.set(rn.sJ, ue.pt), ue == null ? void 0 : ue.devPanel) {
							var Ce, ve;
							(Ce = window) === null || Ce === void 0 || (ve = Ce.localStorage) === null || ve === void 0 || ve.setItem("gates_devtools_ui_gates_controller_enabled", "true"), oe(!0)
						}
					}, [R.search]), {
						devPanelEnabled: V
					}
				},
				sn = Ee().lazy(() => Promise.all([n.e(43234), n.e(2480), n.e(10008), n.e(49146), n.e(94012), n.e(13142), n.e(72019), n.e(73562), n.e(14696), n.e(78059), n.e(60091), n.e(89263), n.e(77216), n.e(39760), n.e(94923), n.e(60734), n.e(40758), n.e(17526), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				cn = Ee().lazy(() => Promise.all([n.e(83741), n.e(65447), n.e(43234), n.e(13142), n.e(14696), n.e(26337), n.e(60091), n.e(60734), n.e(69088), n.e(17526), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var ln = ({
					userIsAuthed: A
				}) => {
					nn(), on();
					const {
						devPanelEnabled: R
					} = an();
					return Ee().createElement(Ae.Suspense, {
						fallback: Ee().createElement(qt, null)
					}, Ee().createElement(Ne.Switch, null, !A && !0 && Ee().createElement(Ne.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Ee().createElement(cn, null)), Ee().createElement(Ne.Route, {
						render: () => Ee().createElement(Yt.ZC, {
							minHeight: "100vh"
						}, Ee().createElement(sn, null))
					})), R && Ee().createElement(Jt, null))
				},
				It = n("../../../../node_modules/yup/es/index.js"),
				un = n("../../../common/util/types/src/utils/index.ts");
			const Ft = {
				cfEmail: () => It.Z_().email((0, Re.ZP)("common.validation.email")).required((0, Re.ZP)("common.validation.email")),
				cfPassword: () => It.Z_().required((0, Re.ZP)("common.validation.required"))
			};
			(0, un.Yd)(Ft).forEach(A => {
				It.kM(It.Z_, A, Ft[A])
			});
			const xt = Ee().lazy(() => Promise.all([n.e(10008), n.e(94012), n.e(6368), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				dn = () => {
					const A = (0, ht.$8)(),
						[R, V] = (0, Ae.useState)(A ? xt : Ee().Fragment),
						[oe, ue] = (0, Ae.useState)((0, C.Yc)());
					(0, Ae.useEffect)(() => {
						(0, C.fF)(() => ue((0, C.Yc)()))
					}, []);
					const Ce = ve => {
						ue(ve), (0, C.C8)(ve)
					};
					return (0, Ae.useEffect)(() => {
						V(A ? xt : Ee().Fragment)
					}, [A]), (0, Ae.useEffect)(() => {
						const ve = () => Ce(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", ve), () => {
							window.removeEventListener("storage", ve)
						}
					}, []), Ee().createElement(Ae.Suspense, {
						fallback: null
					}, Ee().createElement(ze.Provider, {
						store: (0, c.bh)()
					}, Ee().createElement(Ne.Router, {
						history: N
					}, Ee().createElement(R, null, Ee().createElement(he.Z, {
						renderer: mt()
					}, Ee().createElement(ce, null, Ee().createElement(ft.Z, {
						sentryTag: "Root"
					}, Ee().createElement(st.J$, {
						value: {
							fetcher: ve => fetch(ve).then(Be => Be.json())
						}
					}, Ee().createElement(Zt, null), Ee().createElement(_t, null), Ee().createElement(Vt.Z_, {
						onDarkModeChangeCb: Ce
					}, Ee().createElement(de.ZP, null, Ee().createElement(ln, {
						userIsAuthed: A
					}))), Ee().createElement(gt.ZP, null), Ee().createElement(rt.F0, null)))))))))
				},
				pn = () => {
					(0, Se.render)(Ee().createElement(dn, null), document.getElementById("react-app"))
				};
			var lt = n("../utils/initSparrow.ts"),
				yt = n("../utils/zaraz.ts");
			const mn = () => {
					const A = (0, ut.PR)((0, c.bh)().getState());
					gn(), (0, lt.Ug)(), (0, yt.bM)(), (A == null ? void 0 : A.id) && ie().setUserId(A == null ? void 0 : A.id), (0, lt.yV)(), !(0, lt.Wi)() && (0, lt.IM)(), A ? (0, yt.yn)(A) : (0, yt.Ro)()
				},
				gn = () => {
					var A, R;
					(A = window) === null || A === void 0 || (R = A.OneTrust) === null || R === void 0 || R.OnConsentChanged(() => {
						const V = (0, ut.PR)((0, c.bh)().getState());
						(0, lt.Wi)() ? (ie().setEnabled(!0), (V == null ? void 0 : V.id) ? (ie().setUserId(V.id), (0, yt.yn)(V)) : (0, yt.Ro)(), (0, lt.yV)()) : (ie().setEnabled(!1), (0, lt.IM)())
					})
				};

			function fn(A) {
				for (var R = 1; R < arguments.length; R++) {
					var V = arguments[R] != null ? Object(arguments[R]) : {},
						oe = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(V).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(V, ue).enumerable
					})), oe.forEach(function(ue) {
						En(A, ue, V[ue])
					})
				}
				return A
			}

			function En(A, R, V) {
				return R = _n(R), R in A ? Object.defineProperty(A, R, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[R] = V, A
			}

			function _n(A) {
				var R = yn(A, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function yn(A, R) {
				if (typeof A != "object" || A === null) return A;
				var V = A[Symbol.toPrimitive];
				if (V !== void 0) {
					var oe = V.call(A, R || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(A)
			}
			const vn = "init",
				$t = (A, R) => {
					r.$e(function(V) {
						V.setTag(vn, R), r.Tb(A)
					}), te(A)
				},
				Lt = async (A, R) => {
					try {
						return await A(), !0
					} catch (V) {
						return $t(V, R), !1
					}
				};
			(async () => {
				try {
					var A, R, V;
					n.g.build = fn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "08f7d327f918e6f5b3fe369ca24d780af08f98c9",
						dashVersion: "27853792",
						env: "production",
						builtAt: 1728419108778,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, Ie.p)()
					}), nt();
					const oe = [{
						fn: () => n.e(4374).then(n.bind(n, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => T(N),
						tag: "hashScroll"
					}, {
						fn: pe.Z,
						tag: "styles"
					}, {
						fn: Me,
						tag: "mfePreviewData"
					}];
					for (const ot of oe)
						if (!await Lt(ot.fn, ot.tag)) return;
					let ue;
					if (!await Lt(async () => {
							ue = await (0, Te.k)()
						}, "bootstrap")) return;
					const Ce = (0, c.bh)(),
						ve = ((A = ue) === null || A === void 0 ? void 0 : A.data) || {};
					Ce.dispatch((0, a.mW)("user", ve == null ? void 0 : ve.user));
					const Be = (R = ue) === null || R === void 0 || (V = R.data) === null || V === void 0 ? void 0 : V.user;
					return n.g.bootstrap = ue, Be && Be.id && B(Be.id), !await Lt(_e, "gates") || !await Lt(mn, "tracking") ? void 0 : pn()
				} catch (oe) {
					$t(oe, "global")
				}
			})()
		},
		"../libs/init/initBootstrap.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				k: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@sentry/core/esm/exports.js");
			class o extends Error {
				constructor(m, u) {
					super(u);
					this.name = `${m} ${u}`
				}
			}
			const l = () => {
					document.cookie.split(";").forEach(m => {
						const [u] = m.trim().split("=");
						document.cookie = `${u}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				f = async () => {
					let s = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!s.ok) throw s.headers.get("content-type") === "text/html" && (await s.text()).toLowerCase().includes("cookie too large") && (e.$e(function(v) {
						v.setTag("init", "cookieTooLarge"), e.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), l(), window.location.reload()), new o("Bootstrap API Failure", s == null ? void 0 : s.status);
					return (await s.json()).result.data
				}
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../react/app/redux/index.ts"),
				f = n("../react/common/selectors/userSelectors.ts"),
				s = n("../react/common/selectors/zoneSelectors.ts"),
				m = n("../react/common/selectors/accountSelectors.ts"),
				u = n("../react/common/utils/isGuards.ts"),
				p = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				v = n.n(p);

			function t() {
				return t = Object.assign ? Object.assign.bind() : function(c) {
					for (var i = 1; i < arguments.length; i++) {
						var d = arguments[i];
						for (var E in d) Object.prototype.hasOwnProperty.call(d, E) && (c[E] = d[E])
					}
					return c
				}, t.apply(this, arguments)
			}
			const r = c => {
				function i(d) {
					const E = (0, l.UM)(),
						T = (0, p.useHistory)(),
						h = (0, p.useLocation)(),
						C = (0, p.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						D = (0, l.p4)(f.PR) || null,
						b = (0, l.p4)(s.nA) || null,
						_ = (0, l.p4)(m.uF),
						S = _ ? _.account : null;
					if (!C) return null;
					const {
						accountId: G,
						app: j,
						tab: $
					} = C.params, Z = C.params.zoneName && ((0, u.v5)(C.params.zoneName) || C.params.zoneName.indexOf(".") > 0) ? C.params.zoneName : void 0;
					return o().createElement(c, t({
						dispatch: E,
						history: T,
						location: h,
						match: C,
						user: D,
						membership: G ? _ : null,
						account: G ? S : null,
						accountId: G || null,
						zone: Z ? b : null,
						zoneName: Z || null,
						app: Z ? j : null,
						tab: Z ? $ : null
					}, d))
				}
				return i.displayName = `withEntities(${a(c)})`, i
			};

			function a(c) {
				return c.displayName || c.name || "Component"
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
					return m
				},
				CM: function() {
					return v
				},
				MF: function() {
					return o
				},
				TS: function() {
					return a
				},
				WF: function() {
					return s
				},
				Wz: function() {
					return t
				},
				bk: function() {
					return u
				},
				fj: function() {
					return r
				},
				r4: function() {
					return f
				},
				zq: function() {
					return l
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
				l = (0, e.R)(o.ADD_SITE, c => ({
					payload: c
				})),
				f = (0, e.R)(o.RESOLVING_START),
				s = (0, e.R)(o.RESOLVING_COMPLETE),
				m = (0, e.R)(o.SELECT_ZONE, c => ({
					payload: c
				})),
				u = (0, e.R)(o.SELECT_ACCOUNT, c => ({
					payload: c
				})),
				p = (0, e.R)(o.SELECT_PAGES_PROJECT, c => ({
					payload: c
				})),
				v = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, c => ({
					payload: c
				})),
				t = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, c => ({
					accountIds: c
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				a = (0, e.R)(o.SELECT_WORKER, c => ({
					payload: c
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				BV: function() {
					return e
				},
				Dz: function() {
					return v
				},
				Fj: function() {
					return f
				},
				Kt: function() {
					return m
				},
				O5: function() {
					return s
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return t
				},
				dB: function() {
					return l
				},
				s$: function() {
					return u
				}
			});
			const e = "to",
				o = "_gl",
				l = "freeTrial",
				f = "deepLinkQueryParams",
				s = "resolvedDeepLinkQueryParams",
				m = "add",
				u = "multiSkuProducts",
				p = "/:account/billing/checkout",
				v = "/:account/:zone/billing/checkout",
				t = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				ZP: function() {
					return $
				},
				U: function() {
					return u.U
				},
				dd: function() {
					return u.dd
				},
				bk: function() {
					return m.bk
				},
				Bh: function() {
					return m.Bh
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n("../react/app/redux/index.ts"),
				l = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = n("../react/app/components/DeepLink/utils.ts"),
				s = n("../react/utils/bootstrap.ts"),
				m = n("../react/app/components/DeepLink/actions.ts"),
				u = n("../react/app/components/DeepLink/selectors.ts"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				v = n.n(p);

			function t(Z) {
				for (var k = 1; k < arguments.length; k++) {
					var F = arguments[k] != null ? Object(arguments[k]) : {},
						ne = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(F).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(F, Y).enumerable
					})), ne.forEach(function(Y) {
						r(Z, Y, F[Y])
					})
				}
				return Z
			}

			function r(Z, k, F) {
				return k = a(k), k in Z ? Object.defineProperty(Z, k, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[k] = F, Z
			}

			function a(Z) {
				var k = c(Z, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function c(Z, k) {
				if (typeof Z != "object" || Z === null) return Z;
				var F = Z[Symbol.toPrimitive];
				if (F !== void 0) {
					var ne = F.call(Z, k || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(Z)
			}
			class i {
				constructor(k, F) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", ne => {
						this.resolvers.set(ne, {
							name: ne,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", ne => {
						const Y = this.resolvers.get(ne);
						Y && (Y.endTime = Date.now(), this.resolvers.set(ne, Y))
					}), r(this, "resolverCancel", ne => {
						this.resolverDone(ne), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", ne => {
						const Y = "NO_ACTION",
							re = {
								actionType: Y,
								startTime: 0
							};
						return {
							start: (te = Y) => {
								const pe = this.resolvers.get(ne);
								re.actionType = te, re.startTime = Date.now(), pe && pe.userActions.push(re)
							},
							finish: (te = Y) => {
								re.actionType = te, re.endTime = Date.now()
							},
							cancel: (te = Y) => {
								re.actionType = te, re.endTime = Date.now(), this.resolverCancel(ne)
							}
						}
					}), this.deepLink = k, this.legacyDeepLink = F, this.resolvers = new Map
				}
				track(k) {
					try {
						if (this._done) return;
						this._done = !0;
						const F = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: d(this.startTime, this.endTime),
								totalCpuTime: d(this.startTime, this.endTime)
							},
							ne = this.resolvers.size === 0 ? F : Array.from(this.resolvers.values()).reduce((Y, re) => {
								const te = d(re.startTime, re.endTime),
									pe = re.userActions.reduce((U, w) => {
										const K = d(w.startTime, w.endTime);
										return {
											totalTime: U.totalTime + K,
											actions: U.actions.set(w.actionType, K)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									W = te - pe.totalTime;
								return t({}, Y, {
									totalTime: Y.totalTime + te,
									totalUserActionsTime: Y.totalUserActionsTime + pe.totalTime,
									totalCpuTime: Y.totalCpuTime + W,
									[`${re.name}ResolverTotalTime`]: te,
									[`${re.name}ResolverTotalCpuTime`]: W,
									[`${re.name}ResolverTotalUserActionsTime`]: pe.totalTime
								}, Array.from(pe.actions.keys()).reduce((U, w) => t({}, U, {
									[`${re.name}Resolver/${w}`]: pe.actions.get(w)
								}), {}))
							}, t({}, F, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						v().sendEvent(k, ne)
					} catch (F) {
						console.error(F)
					}
				}
			}

			function d(Z = Date.now(), k = Date.now()) {
				return (k - Z) / 1e3
			}
			var E = n("../react/app/components/DeepLink/constants.ts"),
				T = n("../react/common/hooks/useCachedState.ts"),
				h = n("../react/common/hooks/usePrevious.ts");

			function C(Z) {
				for (var k = 1; k < arguments.length; k++) {
					var F = arguments[k] != null ? Object(arguments[k]) : {},
						ne = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(F).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(F, Y).enumerable
					})), ne.forEach(function(Y) {
						D(Z, Y, F[Y])
					})
				}
				return Z
			}

			function D(Z, k, F) {
				return k = b(k), k in Z ? Object.defineProperty(Z, k, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[k] = F, Z
			}

			function b(Z) {
				var k = _(Z, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function _(Z, k) {
				if (typeof Z != "object" || Z === null) return Z;
				var F = Z[Symbol.toPrimitive];
				if (F !== void 0) {
					var ne = F.call(Z, k || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(Z)
			}
			var G = ({
					children: Z
				}) => {
					const k = (0, o.TZ)(),
						F = (0, l.useHistory)(),
						ne = (0, h.Z)(F.location.pathname),
						Y = (0, o.p4)(u.dd),
						[re, te] = (0, e.useState)(!0),
						[pe, W] = (0, T.j)(void 0, {
							key: E.Fj
						}),
						[U, w] = (0, T.j)(void 0, {
							key: E.O5
						}),
						[K, ee] = (0, T.j)(void 0, {
							key: E.s$
						}),
						ae = (0, s.$8)();
					let N = new URLSearchParams(F.location.search);
					const P = (0, f.mL)(F.location.pathname, N);
					let O = null,
						I = null;
					if (N.has(E.Tc) && N.delete(E.Tc), N.get(E.BV)) O = N.get(E.BV), F.location.hash && (I = F.location.hash);
					else if (pe) {
						const Q = new URLSearchParams(pe);
						Q.get(E.BV) && (O = Q.get(E.BV), N = Q)
					} else P && (N.set(E.BV, P), O = P);
					if (O && E._h.test(O)) {
						const Q = N.getAll(E.Kt),
							X = JSON.stringify(Q);
						Q.length && X !== K && ee(X), N.has(E.Tc) && N.delete(E.Tc), N.delete(E.Kt)
					}!ae && pe === void 0 && O && W(N.toString());
					const H = async () => {
						try {
							if ((0, f.I3)(O) && ae && !Y) {
								pe && W(void 0), k.dispatch((0, m.r4)()), te(!0), O && O !== U && w(O);
								const Q = await (0, f.py)(O, te, k, F, ne, new i(O, P ? `${F.location.pathname}${F.location.search}` : void 0));
								N.delete(E.BV);
								const X = N.toString();
								F.replace(C({}, F.location, {
									pathname: Q,
									search: X
								}, I ? {
									hash: I
								} : {})), k.dispatch((0, m.WF)())
							}
						} catch (Q) {
							k.dispatch((0, m.WF)()), console.error(Q)
						} finally {
							te(!1)
						}
					};
					return (0, e.useEffect)(() => {
						H()
					}, [F.location.pathname, F.location.search, Y]), (re || (0, f.I3)(O)) && ae ? null : Z
				},
				j = n("../react/app/components/DeepLink/reducer.ts"),
				$ = G
		},
		"../react/app/components/DeepLink/reducer.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				E: function() {
					return f
				},
				r: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				l = n("../react/app/components/DeepLink/actions.ts");
			const f = null,
				s = o().from({
					lastAction: f,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function m(u = s, p) {
				if (p.type === l.MF.RESOLVING_COMPLETE) return s;
				if (p.type === l.MF.RESOLVING_START) return u.set("isResolving", !0);
				if (u.isResolving) {
					if (p.type === l.MF.RESOLVING_COMPLETE) return u.set("isResolving", !1);
					if (p.type === l.MF.SET_FILTERED_ACCOUNT_IDS) return u.set("filteredAccountIds", p.accountIds);
					if (p.type === l.MF.DELETE_FILTERED_ACCOUNT_IDS) return u.set("filteredAccountIds", void 0);
					{
						let v = u;
						try {
							v = u.set("lastAction", p)
						} catch {
							v = u.set("lastAction", {
								type: p.type
							})
						}
						return v
					}
				} else return u
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				U: function() {
					return l
				},
				dd: function() {
					return o
				},
				yI: function() {
					return e
				}
			});
			const e = f => f.deepLink.lastAction,
				o = f => f.deepLink.isResolving,
				l = f => f.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				I3: function() {
					return c
				},
				X1: function() {
					return r
				},
				mL: function() {
					return h
				},
				py: function() {
					return T
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../react/app/components/DeepLink/reducer.ts"),
				l = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const f = C => C.replace(l.default.endsWithSlash, ""),
				s = C => {
					const D = f(C).split("/").slice(3);
					return D.length ? "/" + D.join("/") : ""
				},
				m = C => {
					const D = f(C).split("/").slice(2);
					return D.length ? `apps/${D.join("/")}` : "apps"
				};
			var u = n("../react/app/components/DeepLink/selectors.ts"),
				p = n("../react/app/components/DeepLink/constants.ts"),
				v = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const r = C => (0, v.Lb)(C) && (C.split(".").length > 1 || (0, t.v5)(C)),
				a = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				c = C => typeof C == "string" && C.startsWith("/"),
				i = (C, D) => b => new Promise((_, S) => {
					D.start();
					const G = C.subscribe(() => {
						const j = (0, u.yI)(C.getState());
						j === o.E ? (D.cancel(), G(), S("DeepLink: waitForAction out of context.")) : b(j) && (D.finish(j.type), G(), _(j))
					})
				}),
				d = (C, D, b) => (_, S) => new Promise((G, j) => {
					b.start();
					const $ = D.location.pathname;
					_ = new URL(_, window.location.href).pathname, $ !== _ && (b.cancel(), j(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${_}", but on "${$}". You need to redirect to "${_}", and unblockRouter in your Resolver, before you use this function.`));
					const Z = C.subscribe(() => {
						const k = (0, u.yI)(C.getState()),
							F = D.location.pathname,
							Y = new URLSearchParams(D.location.search).get(p.BV);
						(F !== _ || !!Y) && (b.cancel(), Z(), j(`DeepLink: waitForPageAction user navigated away from "${_}" to "${F}${Y?D.location.search:""}"`)), k === o.E ? (b.cancel(), Z(), j("DeepLink: waitForPageAction out of context.")) : S(k) && (b.finish(k.type), Z(), G(k))
					})
				});

			function E(C) {
				const D = [],
					b = C.split("?")[0].split("/");
				for (let _ of b) _.length !== 0 && (_.startsWith(":") ? D.push({
					value: _.substring(1),
					type: "dynamic"
				}) : D.push({
					value: _,
					type: "static"
				}));
				return D
			}
			async function T(C, D, b, _, S, G) {
				G.start();
				const j = E(C),
					Z = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(60091), n.e(94923), n.e(8756)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					k = {};
				let F = "";
				for (const [ne, Y] of j.entries())
					if (Y.type === "static") F = [F, Y.value].join("/");
					else if (Y.type === "dynamic" && a.is(Y.value) && Y.value in Z) {
					G.resolverStart(Y.value);
					const re = await Z[Y.value]({
						deepLink: C,
						blockRouter: () => D(!0),
						unblockRouter: () => D(!1),
						routerHistory: _,
						resolvedValues: k,
						store: b,
						referringRoute: S,
						uri: {
							currentPartIdx: ne,
							parts: j
						},
						waitForAction: i(b, G.createUserActionTracker(Y.value)),
						waitForPageAction: d(b, _, G.createUserActionTracker(Y.value))
					});
					G.resolverDone(Y.value), F = [F, re].join("/"), k[Y.value] = re
				} else throw G.cancel(), new Error(`DeepLink: Resolver with name '${Y.value}' is not supported.`);
				return G.done(), F
			}

			function h(C, D) {
				const b = ":account",
					_ = ":zone",
					S = D.get("zone");
				if (S) return D.delete("zone"), `/${b}/${_}/${S}`;
				const G = D.get("account");
				if (G) return D.delete("account"), `/${b}/${G}`;
				if (C === "/overview") return `/${b}/${_}`;
				if (C === "/apps") return `/${b}/${_}/${m(C)}`;
				const j = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const $ of j) {
					const Z = $.length;
					if (C.startsWith($) && (C.length === Z || C[Z] === "/")) return `/${b}/${_}${C}`
				}
				switch (C) {
					case "/account/billing":
						return `/${b}/billing`;
					case "/account/subscriptions":
						return `/${b}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${b}/dns-firewall`;
					case "/account/audit-log":
						return `/${b}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				f = n("../react/app/components/SomethingWrong.jsx"),
				s = n("../utils/sentry/lastSentEventId.ts"),
				m = n("../react/utils/zaraz.ts"),
				u = n("../react/utils/url.ts");
			const p = ({
				sentryTag: v,
				children: t
			}) => o().createElement(l.SV, {
				beforeCapture: r => {
					v && r.setTag("errorBoundary", v), m.tg === null || m.tg === void 0 || m.tg.track("page-error", {
						page: (0, u.Fl)(window.location.pathname)
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
					const c = s.e.getEventId() || a;
					return o().createElement(f.Z, {
						type: "page",
						error: r,
						eventId: c
					})
				}
			}, t);
			y.Z = p
		},
		"../react/app/components/Footer.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				Z: function() {
					return P
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = n("../node_modules/@cloudflare/elements/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				v = n.n(p),
				t = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				r = n("../react/common/components/Apple/utils.tsx"),
				a = n("../react/utils/translator.tsx"),
				c = n("../../../../node_modules/moment/moment.js"),
				i = n.n(c);
			const d = () => {
					const O = i()().format("YYYY"),
						I = H => {
							v().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: H
							})
						};
					return o().createElement(E, {
						marginTop: "auto"
					}, o().createElement(T, null, o().createElement(h, null, o().createElement(C, null, "\xA9 ", O, " Cloudflare, Inc."), o().createElement(C, null, o().createElement(D, null, o().createElement(b, {
						showOnDeskTop: !1
					}, o().createElement(_, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => I("Support")
					}, o().createElement(a.cC, {
						id: "common.support"
					}))), o().createElement(b, null, o().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => I("Privacy Policy")
					}, o().createElement(a.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(b, null, o().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => I("Terms of Use")
					}, o().createElement(a.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(b, null, o().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => I("Cookie Preferences")
					}, o().createElement(a.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(b, null, o().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => I("Trademark")
					}, o().createElement(a.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(D, null, o().createElement(b, null, o().createElement(_, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => I("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(a.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				E = (0, m.createComponent)(({
					theme: O,
					marginTop: I
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: I
				})),
				T = (0, m.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				h = (0, m.createComponent)(({
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
				C = (0, m.createComponent)(({
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
				D = (0, m.createComponent)(({
					theme: O
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: O.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				b = (0, m.createComponent)(({
					showOnDeskTop: O = !0,
					theme: I
				}) => ({
					color: I.colors.white,
					fontSize: I.fontSizes[1],
					height: "20px",
					display: O ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: I.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: I.space[3],
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
				_ = (0, m.createStyledComponent)(({
					theme: O
				}) => ({
					textDecoration: "none",
					color: O.colors.white,
					"&:hover": {
						color: O.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var S = d,
				G = n("../react/common/hooks/useGate.ts"),
				j = n("../react/pages/welcome/routes.ts"),
				$ = n("../react/utils/cookiePreferences.ts"),
				Z = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				F = () => {
					const [O, I] = (0, e.useState)(!1), H = (0, $.wV)(), Q = () => {
						I(!0)
					}, X = () => {
						I(!1)
					}, me = H && H === "US" ? (0, a.ZP)("footer.cpra_cta.privacy_choices") : (0, a.ZP)("footer.cpra_cta.cookie_preferences"), Le = {
						background: "transparent",
						borderRadius: "none",
						color: O ? (0, u.Yc)() ? "#ee730a" : "#003681" : (0, u.Yc)() ? "#4693ff" : "#0051c3",
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
					return o().createElement(s.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: Le,
						onMouseEnter: Q,
						onMouseLeave: X
					}, o().createElement(s.Ei, {
						height: 15,
						src: Z,
						mr: 2,
						alt: me
					}), me)
				};

			function ne() {
				return ne = Object.assign ? Object.assign.bind() : function(O) {
					for (var I = 1; I < arguments.length; I++) {
						var H = arguments[I];
						for (var Q in H) Object.prototype.hasOwnProperty.call(H, Q) && (O[Q] = H[Q])
					}
					return O
				}, ne.apply(this, arguments)
			}

			function Y(O, I) {
				if (O == null) return {};
				var H = re(O, I),
					Q, X;
				if (Object.getOwnPropertySymbols) {
					var me = Object.getOwnPropertySymbols(O);
					for (X = 0; X < me.length; X++) Q = me[X], !(I.indexOf(Q) >= 0) && (!Object.prototype.propertyIsEnumerable.call(O, Q) || (H[Q] = O[Q]))
				}
				return H
			}

			function re(O, I) {
				if (O == null) return {};
				var H = {},
					Q = Object.keys(O),
					X, me;
				for (me = 0; me < Q.length; me++) X = Q[me], !(I.indexOf(X) >= 0) && (H[X] = O[X]);
				return H
			}
			const te = 24,
				pe = (0, m.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,u.Yc)()?u.rS.colors.orange[6]:u.rS.colors.blue[4]}`
					}
				}), s.A),
				W = (0, m.createStyledComponent)(({
					theme: O
				}) => ({
					color: O.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, t.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: O.colors.gray[4]
					}
				}), s.A),
				U = O => {
					let {
						onClick: I
					} = O, H = Y(O, ["onClick"]);
					return o().createElement(pe, ne({
						onClick: Q => {
							v().sendEvent("navigate footer nav", {
								destinationPage: H.href
							}), I && I(Q)
						}
					}, H))
				},
				w = O => {
					let {
						children: I,
						target: H,
						rel: Q
					} = O, X = Y(O, ["children", "target", "rel"]);
					return o().createElement(U, ne({
						target: H || "_blank",
						rel: Q || "noopener noreferrer"
					}, X), I, o().createElement(f.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				},
				K = O => {
					let {
						children: I,
						target: H,
						rel: Q
					} = O, X = Y(O, ["children", "target", "rel"]);
					return o().createElement(W, ne({
						target: H || "_blank",
						rel: Q || "noopener noreferrer"
					}, X), I)
				},
				ee = (0, m.createStyledComponent)(({
					theme: O
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, t.tq)() ? "8px" : "16px",
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
				}), s.Ul),
				ae = (0, m.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, t.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), s.ZC);
			var P = () => {
				var O, I;
				const H = [j.d.root.pattern].some(Ie => (0, l.matchPath)(location.pathname, {
						path: Ie
					})),
					Q = location.pathname === "/sign-up",
					X = (0, G.Z)("dx-footer-simplify") === "experiment",
					me = (0, G.Z)("prg-signup-next-steps-experiment") === "experiment" && Q;
				if ((0, r.PP)()) return o().createElement(S, null);
				if (H) return null;
				const Le = new Date().getFullYear();
				return o().createElement(s.$_, ne({
					height: (0, t.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: X ? "19px" : 4,
					pb: 0,
					px: [4, 3, 3],
					mt: me ? 0 : "auto"
				}, me && X && {
					height: "10vh"
				}), X ? o().createElement(ae, null, o().createElement(ee, null, o().createElement(s.Li, null, o().createElement(K, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("common.support"))), o().createElement(s.Li, null, o().createElement(K, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(s.Dr, {
					textTransform: "capitalize"
				}, (0, a.ZP)("footer.system_status")))), o().createElement(s.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, a.ZP)("footer.careers"))), o().createElement(s.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos_reduced"))), o().createElement(s.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, a.ZP)("footer.security_issues"))), o().createElement(s.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))), o().createElement(s.Li, null, o().createElement(F, null)), o().createElement(s.Li, null, o().createElement(s.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", Le, " Cloudflare, Inc.")))) : o().createElement(s.ZC, {
					display: "flex",
					flexWrap: "wrap",
					mx: "auto",
					maxWidth: "64rem"
				}, o().createElement(s.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.contact")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.contact_support"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, a.ZP)("footer.contact_sales"))), o().createElement(s.Dd, {
					mt: 3
				}, o().createElement(s.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, o().createElement(U, {
					"aria-label": (0, a.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${te}px`
				}, o().createElement(f.J, {
					type: "twitter",
					size: te
				})), o().createElement(U, {
					"aria-label": (0, a.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${te}px`
				}, o().createElement(f.J, {
					type: "facebook",
					size: te
				})), o().createElement(U, {
					"aria-label": (0, a.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${te}px`
				}, o().createElement(f.J, {
					type: "linkedin",
					size: te
				})))))), o().createElement(s.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.what_we_do")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/plans"
				}, (0, a.ZP)("footer.plans"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/overview"
				}, (0, a.ZP)("footer.about"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, a.ZP)("footer.network_map"))))), o().createElement(s.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.resources")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://developers.cloudflare.com"
				}, (0, a.ZP)("footer.product_docs"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://blog.cloudflare.com"
				}, (0, a.ZP)("footer.blog"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, a.ZP)("footer.testimonials"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://partners.cloudflare.com"
				}, (0, a.ZP)("footer.hosting_partners"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://api.cloudflare.com"
				}, (0, a.ZP)("footer.api"))))), o().createElement(s.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement("div", {
					"aria-hidden": "true",
					title: `Current version: ${((O=window)===null||O===void 0||(I=O.build)===null||I===void 0?void 0:I.dashVersion)||"unknown"}`
				}), o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.support")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.help_center"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://community.cloudflare.com"
				}, (0, a.ZP)("footer.community"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflarestatus.com"
				}, (0, a.ZP)("footer.system_status"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, a.ZP)("footer.trust_safety"))))), o().createElement(s.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.about_us")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/people"
				}, (0, a.ZP)("footer.team"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/careers"
				}, (0, a.ZP)("footer.careers"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, a.ZP)("footer.press"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, a.ZP)("footer.subs_agreement"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))))), o().createElement(F, null)))
			}
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				S: function() {
					return a
				},
				Z: function() {
					return ae
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				f = n("../node_modules/@cloudflare/elements/es/index.js"),
				s = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				p = n("../react/common/components/AccessControl/index.js"),
				v = n("../react/common/components/ButtonWithDropdown.tsx"),
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
				c = [{
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
				d = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = n.n(d);

			function T(N) {
				for (var P = 1; P < arguments.length; P++) {
					var O = arguments[P] != null ? Object(arguments[P]) : {},
						I = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(O).filter(function(H) {
						return Object.getOwnPropertyDescriptor(O, H).enumerable
					})), I.forEach(function(H) {
						h(N, H, O[H])
					})
				}
				return N
			}

			function h(N, P, O) {
				return P = C(P), P in N ? Object.defineProperty(N, P, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[P] = O, N
			}

			function C(N) {
				var P = D(N, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function D(N, P) {
				if (typeof N != "object" || N === null) return N;
				var O = N[Symbol.toPrimitive];
				if (O !== void 0) {
					var I = O.call(N, P || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(N)
			}

			function b() {
				return b = Object.assign ? Object.assign.bind() : function(N) {
					for (var P = 1; P < arguments.length; P++) {
						var O = arguments[P];
						for (var I in O) Object.prototype.hasOwnProperty.call(O, I) && (N[I] = O[I])
					}
					return N
				}, b.apply(this, arguments)
			}

			function _(N, P) {
				if (N == null) return {};
				var O = S(N, P),
					I, H;
				if (Object.getOwnPropertySymbols) {
					var Q = Object.getOwnPropertySymbols(N);
					for (H = 0; H < Q.length; H++) I = Q[H], !(P.indexOf(I) >= 0) && (!Object.prototype.propertyIsEnumerable.call(N, I) || (O[I] = N[I]))
				}
				return O
			}

			function S(N, P) {
				if (N == null) return {};
				var O = {},
					I = Object.keys(N),
					H, Q;
				for (Q = 0; Q < I.length; Q++) H = I[Q], !(P.indexOf(H) >= 0) && (O[H] = N[H]);
				return O
			}
			const G = N => {
					let {
						title: P,
						trackingEvent: O,
						icon: I,
						url: H,
						description: Q,
						disabled: X
					} = N, me = _(N, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(j, b({
						to: !X && H || "#",
						"aria-disabled": X,
						onClick: () => {
							E().sendEvent(O, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, me), o().createElement(f.ZC, {
						display: "flex"
					}, o().createElement(l.J, {
						type: I,
						size: 24,
						mr: 2
					}), o().createElement(f.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(f.ZC, {
						fontSize: 3
					}, o().createElement(r.cC, P)), o().createElement(f.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(r.cC, Q)))))
				},
				j = (0, m.createStyledComponent)(({
					theme: N
				}) => {
					const P = {
						cursor: "pointer",
						backgroundColor: (0, s.Yc)() ? N.colors.gray[8] : N.colors.gray[9],
						color: N.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: 16,
						py: 8,
						background: N.colors.background,
						color: N.colors.gray[2],
						fontSize: N.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': P,
						':focus-within:not([aria-disabled="true"])': T({}, P, {
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
				}, i.Link);
			var $ = G,
				Z = n("../react/common/hooks/useGate.ts");

			function k() {
				return k = Object.assign ? Object.assign.bind() : function(N) {
					for (var P = 1; P < arguments.length; P++) {
						var O = arguments[P];
						for (var I in O) Object.prototype.hasOwnProperty.call(O, I) && (N[I] = O[I])
					}
					return N
				}, k.apply(this, arguments)
			}

			function F(N) {
				for (var P = 1; P < arguments.length; P++) {
					var O = arguments[P] != null ? Object(arguments[P]) : {},
						I = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(O).filter(function(H) {
						return Object.getOwnPropertyDescriptor(O, H).enumerable
					})), I.forEach(function(H) {
						ne(N, H, O[H])
					})
				}
				return N
			}

			function ne(N, P, O) {
				return P = Y(P), P in N ? Object.defineProperty(N, P, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[P] = O, N
			}

			function Y(N) {
				var P = re(N, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function re(N, P) {
				if (typeof N != "object" || N === null) return N;
				var O = N[Symbol.toPrimitive];
				if (O !== void 0) {
					var I = O.call(N, P || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(N)
			}

			function te(N, P) {
				if (N == null) return {};
				var O = pe(N, P),
					I, H;
				if (Object.getOwnPropertySymbols) {
					var Q = Object.getOwnPropertySymbols(N);
					for (H = 0; H < Q.length; H++) I = Q[H], !(P.indexOf(I) >= 0) && (!Object.prototype.propertyIsEnumerable.call(N, I) || (O[I] = N[I]))
				}
				return O
			}

			function pe(N, P) {
				if (N == null) return {};
				var O = {},
					I = Object.keys(N),
					H, Q;
				for (Q = 0; Q < I.length; Q++) H = I[Q], !(P.indexOf(H) >= 0) && (O[H] = N[H]);
				return O
			}
			const W = "GLOBAL_ADD_DROPDOWN",
				U = ({
					disableProducts: N
				}) => {
					const P = (0, Z.Z)("dashon-18-reduced-add-button-on-mobile") === "experiment" && (0, u.tq)();
					return o().createElement(w, {
						role: "group",
						"data-testid": W
					}, o().createElement(t.Lt, {
						trigger: o().createElement(K, null, o().createElement(l.J, {
							label: "plus",
							type: "plus"
						}), !P && o().createElement(o().Fragment, null, o().createElement(r.cC, {
							id: "common.add"
						}), " ", o().createElement(l.J, {
							label: "arrow",
							type: "caret-down"
						}))),
						menu: o().createElement(v.v2, {
							overflow: "auto",
							maxHeight: "80vh",
							width: "min(50vw, 340px)",
							whiteSpace: "normal",
							mr: 1,
							p: "8px 0",
							bottom: "auto",
							zIndex: 1200
						}, c.map(O => {
							const I = O || {},
								{
									disableOn: H,
									permissionCheck: Q
								} = I,
								X = te(I, ["disableOn", "permissionCheck"]),
								me = H && N[H],
								Le = F({}, X, {
									disabled: me
								});
							return Q ? o().createElement(p.Z, {
								key: O.title.id,
								edit: Q
							}, ({
								isEditable: Ie
							}) => Ie && o().createElement($, Le)) : o().createElement($, k({
								key: O.url
							}, Le))
						}))
					}))
				},
				w = (0, m.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				K = (0, m.createStyledComponent)(({
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
					color: (0, s.Yc)() ? N.colors.gray[1] : N.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, s.Yc)() ? N.colors.gray[8] : N.colors.gray[9]
					}
				}), f.zx);
			var ee = U,
				ae = ee
		},
		"../react/app/components/LoadingSuspense.tsx": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				f = n("../node_modules/@cloudflare/elements/es/index.js"),
				s = n("../react/utils/translator.tsx"),
				m = n("../react/app/components/ErrorStatus.tsx"),
				u = n("../react/common/components/EmptyPage.jsx"),
				p = n("../react/common/hooks/suspenseHelpers.ts");

			function v(a) {
				const [c, i] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const d = window.setTimeout(() => i(!0), a);
					return () => window.clearTimeout(d)
				}, []), c
			}
			const t = ({
					loadingTimeout: a = 1e3,
					stillLoadingTimeout: c = 9e3
				}) => {
					const i = v(a),
						d = v(c);
					if ((0, p.nW)(), !i && !d) return o().createElement(u.Z, null);
					const E = d ? o().createElement(s.cC, {
						id: "common.still_loading"
					}) : i ? o().createElement(s.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(m.Z, {
						size: 5
					}, o().createElement(f.ZC, {
						mr: 3
					}, o().createElement(l.g, {
						size: "2x"
					})), E)
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
					return u
				},
				dr: function() {
					return s
				},
				lt: function() {
					return m
				},
				m6: function() {
					return t
				},
				n: function() {
					return v
				},
				yl: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const l = "/persistence/user",
				f = async () => {
					try {
						return await (await e.get(l, {
							hideErrorAlert: !0
						})).body
					} catch (r) {
						console.error(r)
					}
				}, s = async r => {
					try {
						return await (await e.get(`/accounts/${r}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, m = async (r, a) => {
					try {
						return await (await e.post(`${l}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: a
							}),
							hideErrorAlert: !0
						})).body
					} catch (c) {
						return console.error(c), []
					}
				}, u = async (r, a) => {
					try {
						return await e.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: a
							}),
							hideErrorAlert: !0
						}), !0
					} catch (c) {
						return console.error(c), !1
					}
				}, p = async r => {
					try {
						return await (await e.post(l, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (a) {
						console.error(a)
					}
				}, v = async r => {
					try {
						return await (await e.post(`${l}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, t = async r => {
					try {
						return await (await e.post(`${l}/viewed-changes`, {
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
					return v
				},
				lp: function() {
					return E
				},
				Z_: function() {
					return h
				},
				r7: function() {
					return Z
				},
				Tv: function() {
					return W
				},
				yZ: function() {
					return C
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../react/app/redux/index.ts"),
				f = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = n.n(f),
				m = n("../react/utils/bootstrap.ts"),
				u = n("../react/common/selectors/zoneSelectors.ts"),
				p = n("../react/app/components/Persistence/api.ts");
			const v = 10;

			function t(U) {
				for (var w = 1; w < arguments.length; w++) {
					var K = arguments[w] != null ? Object(arguments[w]) : {},
						ee = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(K).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(K, ae).enumerable
					})), ee.forEach(function(ae) {
						r(U, ae, K[ae])
					})
				}
				return U
			}

			function r(U, w, K) {
				return w = a(w), w in U ? Object.defineProperty(U, w, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[w] = K, U
			}

			function a(U) {
				var w = c(U, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function c(U, w) {
				if (typeof U != "object" || U === null) return U;
				var K = U[Symbol.toPrimitive];
				if (K !== void 0) {
					var ee = K.call(U, w || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(U)
			}
			const i = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				d = t({}, i, {
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
				E = (0, e.createContext)(d),
				T = E.Consumer,
				h = ({
					children: U,
					onDarkModeChangeCb: w
				}) => {
					const [K, ee] = (0, e.useState)(i), [ae, N] = (0, e.useState)(d.isLoading), P = (0, m.$8)(), O = (0, l.p4)(Q => (0, u.wH)(Q));
					(0, e.useEffect)(() => {
						P ? (0, p.yl)().then(Q => {
							Q && (ee(Q), w(Q.darkMode))
						}).finally(() => N(!1)) : N(!1)
					}, [P]);
					const I = (Q, X) => !!K.favorites.find(me => me.type === "zone" && me.name === Q && me.accountId === X),
						H = Q => K.favorites.filter(me => me.type === "zone" && me.accountId === Q).length < v;
					return o().createElement(E.Provider, {
						value: t({}, K, {
							isLoading: ae,
							actions: {
								canAccountStarZone: H,
								isZoneStarred: I,
								starZone: async (Q, X) => {
									var me;
									const Le = !I(Q, X),
										Ie = H(X);
									if (Le && !Ie) {
										console.log("can not star zone - account is at limit");
										return
									}
									const x = await (0, p.lt)(Q, X);
									s().sendEvent("click star zone", {
										isStarring: Le,
										totalStarredZones: x.filter(ie => ie.accountId === X && ie.type === "zone").length,
										totalZones: O == null || (me = O.paginationData) === null || me === void 0 ? void 0 : me.info.total_count
									}), ee(t({}, K, {
										favorites: x
									}))
								},
								setDarkMode: async Q => {
									const X = await (0, p.C8)(Q);
									ee(X), w(X.darkMode)
								},
								logRouteVisited: async Q => {
									var X;
									const me = await (0, p.n)(Q);
									ee((X = me) !== null && X !== void 0 ? X : t({}, K))
								},
								viewChange: async Q => {
									const X = await (0, p.m6)(Q);
									ee(t({}, K, {
										viewedChanges: X
									}))
								}
							}
						})
					}, U)
				},
				C = () => (0, e.useContext)(E);
			var D = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				b = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function _() {
				return _ = Object.assign ? Object.assign.bind() : function(U) {
					for (var w = 1; w < arguments.length; w++) {
						var K = arguments[w];
						for (var ee in K) Object.prototype.hasOwnProperty.call(K, ee) && (U[ee] = K[ee])
					}
					return U
				}, _.apply(this, arguments)
			}

			function S(U, w) {
				if (U == null) return {};
				var K = G(U, w),
					ee, ae;
				if (Object.getOwnPropertySymbols) {
					var N = Object.getOwnPropertySymbols(U);
					for (ae = 0; ae < N.length; ae++) ee = N[ae], !(w.indexOf(ee) >= 0) && (!Object.prototype.propertyIsEnumerable.call(U, ee) || (K[ee] = U[ee]))
				}
				return K
			}

			function G(U, w) {
				if (U == null) return {};
				var K = {},
					ee = Object.keys(U),
					ae, N;
				for (N = 0; N < ee.length; N++) ae = ee[N], !(w.indexOf(ae) >= 0) && (K[ae] = U[ae]);
				return K
			}
			const j = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var Z = U => {
					let {
						isStarred: w,
						size: K = 16
					} = U, ee = S(U, ["isStarred", "size"]);
					const ae = j[(0, D.Yc)() ? "dark" : "light"];
					return o().createElement(b.J, _({
						type: w ? "star" : "star-outline",
						color: w ? ae.gold : ae.gray,
						size: K
					}, ee))
				},
				k = n("../node_modules/@cloudflare/elements/es/index.js");

			function F(U) {
				for (var w = 1; w < arguments.length; w++) {
					var K = arguments[w] != null ? Object(arguments[w]) : {},
						ee = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(K).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(K, ae).enumerable
					})), ee.forEach(function(ae) {
						ne(U, ae, K[ae])
					})
				}
				return U
			}

			function ne(U, w, K) {
				return w = Y(w), w in U ? Object.defineProperty(U, w, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[w] = K, U
			}

			function Y(U) {
				var w = re(U, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function re(U, w) {
				if (typeof U != "object" || U === null) return U;
				var K = U[Symbol.toPrimitive];
				if (K !== void 0) {
					var ee = K.call(U, w || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(U)
			}
			const te = {
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
			var W = (0, e.forwardRef)(({
				featurePreview: U = !1,
				isStarred: w,
				onClickFn: K,
				isDisabled: ee,
				testId: ae,
				buttonText: N,
				size: P = "large"
			}, O) => {
				const I = te[(0, D.Yc)() ? "dark" : "light"][w && !U ? "active" : "default"],
					H = F({}, P === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, P === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return o().createElement(k.zx, {
					innerRef: O,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: H.paddingRight,
					gap: 1,
					pl: H.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: U || ee ? "default" : "pointer",
					backgroundColor: I.bg,
					color: I.text,
					borderColor: I.border,
					onClick: K,
					opacity: ee ? .5 : 1,
					disabled: ee,
					fontSize: H.fontSize,
					height: H.height,
					"data-testid": ae
				}, o().createElement(Z, {
					isStarred: U ? !1 : w,
					size: H.starIconSize
				}), N)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/prop-types/index.js"),
				f = n.n(l),
				s = n("../../../common/intl/intl-react/src/index.ts"),
				m = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = n("../node_modules/@cloudflare/component-button/es/index.js"),
				p = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				v = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				r = n.n(t),
				a = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				c = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				i = n("../react/app/components/Footer.tsx"),
				d = n("../react/utils/url.ts");

			function E(F) {
				for (var ne = 1; ne < arguments.length; ne++) {
					var Y = arguments[ne] != null ? Object(arguments[ne]) : {},
						re = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(Y).filter(function(te) {
						return Object.getOwnPropertyDescriptor(Y, te).enumerable
					})), re.forEach(function(te) {
						T(F, te, Y[te])
					})
				}
				return F
			}

			function T(F, ne, Y) {
				return ne = h(ne), ne in F ? Object.defineProperty(F, ne, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[ne] = Y, F
			}

			function h(F) {
				var ne = C(F, "string");
				return typeof ne == "symbol" ? ne : String(ne)
			}

			function C(F, ne) {
				if (typeof F != "object" || F === null) return F;
				var Y = F[Symbol.toPrimitive];
				if (Y !== void 0) {
					var re = Y.call(F, ne || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ne === "string" ? String : Number)(F)
			}
			const D = (0, m.createComponent)(({
					type: F
				}) => ({
					height: F !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				b = (0, m.createComponent)(({
					theme: F,
					margin: ne,
					size: Y = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: F.colors.gray[3],
					height: ne ? "auto" : "100%",
					padding: ne ? 0 : F.space[Y > 1 ? Y - 2 : 0],
					margin: ne,
					justifyContent: "center",
					alignItems: "center"
				})),
				_ = (0, m.createComponent)(() => ({
					textAlign: "left"
				})),
				S = (0, m.createComponent)(() => ({
					textAlign: "right"
				})),
				G = (0, m.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[6]
				})),
				j = (0, m.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[4]
				})),
				$ = (0, m.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[3]
				})),
				Z = (0, m.createComponent)(({
					theme: F
				}) => ({
					width: "100%",
					height: 125,
					marginTop: F.space[4],
					padding: F.space[2]
				}), "textarea");
			class k extends o().Component {
				constructor(...ne) {
					super(...ne);
					T(this, "state", {
						value: "",
						submitted: !1
					}), T(this, "handleTextareaChange", Y => {
						this.setState({
							value: Y.target.value
						})
					}), T(this, "sendErrToSentry10", async () => {
						try {
							var Y, re, te, pe;
							const W = ((Y = window) === null || Y === void 0 || (re = Y.bootstrap) === null || re === void 0 || (te = re.data) === null || te === void 0 || (pe = te.user) === null || pe === void 0 ? void 0 : pe.id) || "Unknown",
								U = this.props.eventId || p.eW(),
								w = {
									name: W,
									email: `${W}@userid.com`,
									comments: this.state.value,
									eventId: U,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: E({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(w)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (W) {
							console.error(W)
						}
					}), T(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), T(this, "renderContent", Y => o().createElement(s.oc, null, re => o().createElement(D, {
						type: Y
					}, o().createElement(b, null, o().createElement(_, null, o().createElement(G, null, re.t("error.internal_issues")), o().createElement(j, null, re.t("error.help_us")), o().createElement(Z, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: te => this.handleTextareaChange(te),
						disabled: this.state.submitted,
						placeholder: re.t("error.give_feedback")
					}), o().createElement(S, null, !this.state.submitted && o().createElement(u.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, re.t("common.submit")), this.state.submitted && o().createElement($, null, re.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const ne = this.props.error;
					console.error(`SomethingWrong: ${ne}`), v.YA("user_feedback_form_displayed", "yes"), v.YA("normalizedPath", (0, d.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: ne
					} = this.props;
					return ne === "fullscreen" ? o().createElement("div", null, o().createElement(a.h4, null, o().createElement(t.Link, {
						to: "/"
					}, o().createElement(c.TR, null))), this.renderContent(ne), o().createElement(i.Z, null)) : this.renderContent(ne)
				}
			}
			k.propTypes = {
				type: f().oneOf(["fullscreen", "page"]),
				error: f().oneOfType([f().string, f().object]),
				eventId: f().string
			}, y.Z = k
		},
		"../react/app/redux/index.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				TZ: function() {
					return l
				},
				UM: function() {
					return s
				},
				ZS: function() {
					return f
				},
				p4: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e);
			const l = () => (0, e.useStore)(),
				f = () => l().getState(),
				s = () => (0, e.useDispatch)(),
				m = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(z, y, n) {
			"use strict";
			n.d(y, {
				P1: function() {
					return v
				},
				jQ: function() {
					return u
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
				l = n("../react/pages/email/types.ts"),
				f = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				s = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				m = n.n(s);
			const u = s.static.from([{
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
					entityType: l.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: l.BB.rule,
					idProp: "tag"
				}, {
					entityType: l.BB.rules,
					to: l.BB.rule
				}, {
					entityType: l.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: l.BB.dstAddresses,
					to: l.BB.dstAddress
				}, {
					entityType: l.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: l.BB.dnsRecords,
					to: l.BB.dnsRecord
				}, {
					entityType: l.BB.zone,
					idProp: "tag"
				}]),
				p = r => r.entities,
				v = (...r) => (0, f.P1)(u, p, ...r),
				t = (0, f.QB)(u)
		},
		"../react/app/redux/utils.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				F: function() {
					return l
				},
				_: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const o = f => (s, m, u) => (0, e.SC)(s, m, u, {
					hideErrorAlert: !0
				}).catch(f),
				l = f => s => {
					if (s.status === f) return s;
					throw s
				}
		},
		"../react/common/actionTypes.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Cm: function() {
					return m
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return u
				},
				Li: function() {
					return v
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return l
				},
				Yc: function() {
					return r
				},
				gM: function() {
					return f
				},
				lV: function() {
					return s
				},
				s1: function() {
					return p
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				l = "MODAL_OPEN",
				f = "MODAL_CLOSE",
				s = "TOGGLE_ON",
				m = "TOGGLE_OFF",
				u = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				v = "UPDATE_ACCOUNT_ACCESS",
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
					return v
				},
				ct: function() {
					return u
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

			function l(c) {
				for (var i = 1; i < arguments.length; i++) {
					var d = arguments[i] != null ? Object(arguments[i]) : {},
						E = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(d).filter(function(T) {
						return Object.getOwnPropertyDescriptor(d, T).enumerable
					})), E.forEach(function(T) {
						f(c, T, d[T])
					})
				}
				return c
			}

			function f(c, i, d) {
				return i = s(i), i in c ? Object.defineProperty(c, i, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = d, c
			}

			function s(c) {
				var i = m(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function m(c, i) {
				if (typeof c != "object" || c === null) return c;
				var d = c[Symbol.toPrimitive];
				if (d !== void 0) {
					var E = d.call(c, i || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}
			const u = c => {
					const i = c.payload.map(d => l({}, d, {
						membershipId: d.id,
						id: d.account.id
					}));
					return l({}, c, {
						payload: i
					})
				},
				p = c => {
					const i = u(c);
					return Array.isArray(i.payload) ? l({}, c, {
						payload: i.payload[0]
					}) : l({}, c, {
						payload: null
					})
				},
				v = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", u),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...c) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: c
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function(z, y, n) {
			"use strict";
			n.r(y), n.d(y, {
				closeModal: function() {
					return f
				},
				openModal: function() {
					return l
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function l(s, m, u = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: s,
						props: m
					},
					options: u
				}
			}

			function f(s) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: s
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				IH: function() {
					return s
				},
				Vp: function() {
					return m
				},
				ZK: function() {
					return p
				},
				um: function() {
					return u
				},
				vU: function() {
					return v
				}
			});
			var e = n("../react/common/actionTypes.ts");

			function o(t) {
				return {
					type: e.Ng,
					notification: t
				}
			}

			function l(t) {
				return {
					type: e.Cz,
					notificationId: t
				}
			}
			let f = 0;

			function s(t, r, a = {}) {
				return a = a || {},
					function(c) {
						let i = f++,
							d = {
								id: i,
								type: t,
								message: r,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									c(l(i)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						c(o(d))
					}
			}

			function m(t, r) {
				return s("success", t, r)
			}

			function u(t, r) {
				return s("info", t, r)
			}

			function p(t, r) {
				return s("warning", t, r)
			}

			function v(t, r) {
				return s("error", t, r)
			}
		},
		"../react/common/actions/userActions.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				BT: function() {
					return u
				},
				Ut: function() {
					return T
				},
				V_: function() {
					return h
				},
				Y9: function() {
					return d
				},
				Z0: function() {
					return D
				},
				mp: function() {
					return E
				},
				r3: function() {
					return C
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/app/redux/utils.ts");

			function l(b) {
				for (var _ = 1; _ < arguments.length; _++) {
					var S = arguments[_] != null ? Object(arguments[_]) : {},
						G = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(S).filter(function(j) {
						return Object.getOwnPropertyDescriptor(S, j).enumerable
					})), G.forEach(function(j) {
						f(b, j, S[j])
					})
				}
				return b
			}

			function f(b, _, S) {
				return _ = s(_), _ in b ? Object.defineProperty(b, _, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[_] = S, b
			}

			function s(b) {
				var _ = m(b, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function m(b, _) {
				if (typeof b != "object" || b === null) return b;
				var S = b[Symbol.toPrimitive];
				if (S !== void 0) {
					var G = S.call(b, _ || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(b)
			}
			const u = (0, e.C)("user").get`/user`,
				p = (0, e.C)("user").patch`/user`,
				v = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				c = (0, e.C)("user").delete`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/email`;

			function d(...b) {
				return i(...b)
			}
			const E = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				T = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(b => l({}, b, {
					body: l({}, b.body, {
						result: {}
					})
				}))),
				h = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				C = (0, e.C)("userDetails").get`/user/details`,
				D = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(z, y, n) {
			"use strict";
			n.d(y, {
				a: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e),
				l = n("../react/common/selectors/accountSelectors.ts");
			const f = m => {
					if (typeof m != "string") throw new Error("invalid Param Type provided");
					const u = m.slice(1).split(":");
					if (u.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: u[0],
						value: u[1]
					}
				},
				s = (m, u) => {
					const {
						resourceId: p,
						accountId: v,
						legacyPermission: t
					} = u;
					let {
						read: r,
						edit: a
					} = u;
					const c = {};
					t && (a = `#${t}:edit`, r = `#${t}:read`);
					const i = p || v;
					if (r) {
						const d = Array.isArray(r) ? r : [r];
						c.isReadable = d.some(E => {
							const T = f(E);
							return (0, l.DT)(m, i, h => !!(h[T.key] && h[T.key][T.value]))
						})
					}
					if (a) {
						const d = Array.isArray(a) ? a : [a];
						c.isEditable = d.some(E => {
							const T = f(E);
							return (0, l.DT)(m, i, h => !!(h[T.key] && h[T.key][T.value]))
						})
					}
					return c
				};
			y.Z = (0, e.connect)(s)
		},
		"../react/common/components/AccessControl/index.js": function(z, y, n) {
			"use strict";
			var e = n("../../../../node_modules/prop-types/index.js"),
				o = n.n(e),
				l = n("../react/app/HoCs/withEntities.tsx"),
				f = n("../react/common/components/AccessControl/SAAConnect.js");

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var c = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(c).filter(function(d) {
						return Object.getOwnPropertyDescriptor(c, d).enumerable
					})), i.forEach(function(d) {
						m(r, d, c[d])
					})
				}
				return r
			}

			function m(r, a, c) {
				return a = u(a), a in r ? Object.defineProperty(r, a, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = c, r
			}

			function u(r) {
				var a = p(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function p(r, a) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var i = c.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}

			function v(r) {
				const c = ["isReadable", "isEditable"].reduce((i, d) => r.hasOwnProperty(d) ? s({}, i, {
					[d]: r[d]
				}) : i, {});
				return r.children(c)
			}
			v.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const t = (0, l.Z)((0, f.Z)(v));
			t.displayName = "AccessControl", y.Z = t
		},
		"../react/common/components/Apple/utils.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				PP: function() {
					return r
				},
				RJ: function() {
					return u
				},
				tz: function() {
					return a
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				s = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const m = () => p.test(window.location.pathname) || l.E.has(f.Qq),
				u = () => l.E.get(f.Qq),
				p = /^\/login\/apple(\/)?/,
				t = [p, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let c = !1;
					t.forEach(d => {
						if (d.test(window.location.pathname)) {
							c = !0;
							return
						}
					});
					const i = m() && c;
					return i && (0, s.C8)(s.LF.OFF), i
				},
				a = c => {
					c && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let i = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					c && (i = i + `&jwt=${c}`), window.location.href = i
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				oG: function() {
					return c
				},
				sN: function() {
					return u.sN
				},
				v2: function() {
					return u.v2
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../node_modules/@cloudflare/component-button/es/index.js"),
				f = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = n("../../../common/intl/intl-react/src/index.ts"),
				m = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = n("../react/common/components/Dropdown/index.tsx"),
				p = n("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function v() {
				return v = Object.assign ? Object.assign.bind() : function(i) {
					for (var d = 1; d < arguments.length; d++) {
						var E = arguments[d];
						for (var T in E) Object.prototype.hasOwnProperty.call(E, T) && (i[T] = E[T])
					}
					return i
				}, v.apply(this, arguments)
			}

			function t(i, d) {
				if (i == null) return {};
				var E = r(i, d),
					T, h;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(i);
					for (h = 0; h < C.length; h++) T = C[h], !(d.indexOf(T) >= 0) && (!Object.prototype.propertyIsEnumerable.call(i, T) || (E[T] = i[T]))
				}
				return E
			}

			function r(i, d) {
				if (i == null) return {};
				var E = {},
					T = Object.keys(i),
					h, C;
				for (C = 0; C < T.length; C++) h = T[C], !(d.indexOf(h) >= 0) && (E[h] = i[h]);
				return E
			}
			const a = (0, m.createStyledComponent)(({
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

			function c(i) {
				let {
					menu: d,
					containerProps: E,
					disabled: T,
					disabledDropdown: h = T
				} = i, C = t(i, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: D
				} = (0, s.QT)();
				return o().createElement(a, v({}, E, {
					role: "group"
				}), o().createElement(l.zx, v({}, C, {
					disabled: T
				})), o().createElement(u.Lt, {
					trigger: o().createElement(l.zx, {
						type: C.type,
						"aria-haspopup": "menu",
						disabled: h
					}, o().createElement(f.J, {
						type: "caret-down",
						label: D("common.more"),
						size: 12
					})),
					menu: d
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/prop-types/index.js"),
				f = n.n(l),
				s = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const m = ({
				children: u
			}) => o().createElement(s.xu, {
				height: 411
			}, u);
			m.propTypes = {
				children: f().node
			}, y.Z = m
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
				l = n("webpack/sharing/consume/default/react-redux/react-redux");
			const f = d => d.application.modals;
			var s = n("../react/common/actions/modalActions.ts"),
				m = n("../../../../node_modules/swr/core/dist/index.mjs"),
				u = n("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function p() {
				return p = Object.assign ? Object.assign.bind() : function(d) {
					for (var E = 1; E < arguments.length; E++) {
						var T = arguments[E];
						for (var h in T) Object.prototype.hasOwnProperty.call(T, h) && (d[h] = T[h])
					}
					return d
				}, p.apply(this, arguments)
			}
			const v = o().createContext(null);
			class t extends o().Component {
				render() {
					const {
						modals: E,
						closeModal: T
					} = this.props;
					return o().createElement(o().Fragment, null, E.map(({
						ModalComponent: h,
						props: C = {},
						id: D
					}) => {
						const b = () => {
							typeof C.onClose == "function" && C.onClose(), T(h)
						};
						return o().createElement(v.Provider, {
							key: D,
							value: {
								closeModal: b
							}
						}, o().createElement(m.J$, {
							value: u.ZP
						}, o().createElement(h, p({}, C, {
							isOpen: !0,
							closeModal: b
						}))))
					}))
				}
			}

			function r() {
				const d = o().useContext(v);
				if (!d) throw new Error("useModalContext must be used within a ModalContext");
				return d
			}

			function a() {
				const d = (0, l.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...E) {
						return d(s.openModal(...E))
					}, [d]),
					closeModal: (0, e.useCallback)(function(...E) {
						return d(s.closeModal(...E))
					}, [d])
				}
			}
			var i = (0, l.connect)(d => ({
				modals: f(d)
			}), s)(t)
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
					return v
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
					return o
				},
				q6: function() {
					return l
				},
				w_: function() {
					return f
				},
				zl: function() {
					return u
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				l = "date-from",
				f = "date-to",
				s = "from",
				m = "to",
				u = "all",
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
			let v = function(r) {
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
					return l
				},
				Me: function() {
					return s
				},
				sk: function() {
					return f
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/index.js"),
				o = n("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let l = function(m) {
				return m.NOT_COMPUTED = "not_computed", m.MACHINE_LEARNING = "machine_learning", m.HEURISTICS = "heuristics", m.BEHAVIORAL_ANALYSIS = "behavioral_analysis", m.JS_FINGERPRINTING = "js_fingerprinting", m.VERIFIED_BOT = "verified_bot", m.CLOUDFLARE_SERVICE = "cloudflare_service", m
			}({});
			const f = {
					[l.NOT_COMPUTED]: "Not Computed",
					[l.MACHINE_LEARNING]: "Machine Learning",
					[l.HEURISTICS]: "Heuristics",
					[l.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[l.JS_FINGERPRINTING]: "JS Fingerprinting",
					[l.VERIFIED_BOT]: "Verified Bot",
					[l.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				s = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [l.NOT_COMPUTED, l.MACHINE_LEARNING, l.HEURISTICS, l.BEHAVIORAL_ANALYSIS, l.JS_FINGERPRINTING, l.VERIFIED_BOT, l.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Gq: function() {
					return f
				},
				g$: function() {
					return l
				},
				WX: function() {
					return e
				},
				E0: function() {
					return v
				},
				Hw: function() {
					return m
				},
				Ed: function() {
					return s
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return c
				},
				hQ: function() {
					return u
				},
				SP: function() {
					return p
				}
			});
			let e = function(i) {
				return i.page_rules = "page_rules", i.automatic_platform_optimization = "automatic_platform_optimization", i
			}({});
			const o = "page_rules",
				l = "automatic_platform_optimization",
				f = {
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
				u = {
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
				v = {
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
			const c = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				FP: function() {
					return e
				},
				Nl: function() {
					return s
				},
				SO: function() {
					return l
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
				l = {
					BILLING: "billing"
				},
				f = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				s = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Dk: function() {
					return c
				},
				Dy: function() {
					return i
				},
				E_: function() {
					return m
				},
				K$: function() {
					return h
				},
				Lv: function() {
					return d
				},
				S4: function() {
					return s
				},
				UM: function() {
					return t
				},
				Xf: function() {
					return v
				},
				Y1: function() {
					return u
				},
				p6: function() {
					return p
				},
				q0: function() {
					return f
				},
				rg: function() {
					return E
				},
				sJ: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const f = "healthy",
				s = "degraded",
				m = "critical",
				u = "unknown",
				p = "not-monitored",
				v = o().from({
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
					f: v.FREE,
					p: v.PRO,
					b: v.BIZ
				},
				a = "marketing-pt",
				c = () => {
					const C = l.Z.get(a);
					if (!!C) return r[C]
				},
				i = ["gov"],
				d = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				E = "banner-notification-interactions",
				T = null;
			let h = function(C) {
				return C.SUPER_ADMIN = "Super Administrator - All Privileges", C.ADMIN = "Administrator", C.ADMIN_READ_ONLY = "Administrator Read Only", C
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
					return u
				},
				nW: function() {
					return s
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const f = "suspenseComplete";

			function s() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(f))
				}, [])
			}

			function m(p) {
				(0, l.OR)(f, () => {
					window.setTimeout(p, 0)
				}, {
					target: window
				})
			}

			function u(...p) {
				const [v, t] = p;
				o().useLayoutEffect(v, t), m(v)
			}
		},
		"../react/common/hooks/useAccountId.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				F: function() {
					return s
				}
			});
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/accountSelectors.ts"),
				l = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = n.n(l);

			function s() {
				var m;
				const {
					accountId: u
				} = (0, l.useParams)(), p = (0, e.p4)(o.D0);
				if (u === void 0 && !p) throw new Error("Account ID not found in URL params");
				return (m = u) !== null && m !== void 0 ? m : p == null ? void 0 : p.id
			}
		},
		"../react/common/hooks/useCachedState.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				j: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function f(s, {
				key: m,
				cache: u = l.E
			} = {}) {
				const p = m !== void 0 && u.get(m),
					[v, t] = (0, e.useState)(p || s);
				return [v, a => {
					t(c => (a instanceof Function && (a = a(c)), m !== void 0 && u.set(m, a), a))
				}]
			}
		},
		"../react/common/hooks/usePrevious.ts": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function l(f) {
				const s = (0, e.useRef)(f);
				return (0, e.useEffect)(() => {
					s.current = f
				}, [f]), s.current
			}
			y.Z = l
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(z, y, n) {
			"use strict";
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts");

			function l(f) {
				return (0, e.p4)(s => (0, o.rV)(s, f))
			}
			y.Z = l
		},
		"../react/common/middleware/sparrow/errors.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Uh: function() {
					return s
				},
				ez: function() {
					return f
				},
				oV: function() {
					return m
				}
			});

			function e(u, p, v) {
				return p = o(p), p in u ? Object.defineProperty(u, p, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[p] = v, u
			}

			function o(u) {
				var p = l(u, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function l(u, p) {
				if (typeof u != "object" || u === null) return u;
				var v = u[Symbol.toPrimitive];
				if (v !== void 0) {
					var t = v.call(u, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(u)
			}
			class f extends Error {
				constructor(p, v) {
					super(v);
					e(this, "eventName", void 0), this.eventName = p, this.name = "SparrowValidationError"
				}
			}
			class s extends f {
				constructor(p) {
					super(p, `Event not allowed: "${p}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class m extends f {
				constructor(p, v) {
					super(p, `Found invalid properties on event: "${p}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = v
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				AC: function() {
					return et
				},
				Au: function() {
					return B
				},
				B: function() {
					return Ye
				},
				B3: function() {
					return Ze
				},
				BG: function() {
					return G
				},
				Bp: function() {
					return ze
				},
				D0: function() {
					return D
				},
				DT: function() {
					return H
				},
				EL: function() {
					return N
				},
				EU: function() {
					return X
				},
				GE: function() {
					return Ae
				},
				Ko: function() {
					return I
				},
				Kx: function() {
					return Z
				},
				Le: function() {
					return k
				},
				O4: function() {
					return Ve
				},
				Ou: function() {
					return w
				},
				Py: function() {
					return Xe
				},
				QI: function() {
					return _e
				},
				RO: function() {
					return je
				},
				T3: function() {
					return Je
				},
				T8: function() {
					return S
				},
				UX: function() {
					return ae
				},
				VP: function() {
					return le
				},
				Xo: function() {
					return tt
				},
				Xu: function() {
					return pe
				},
				Yi: function() {
					return st
				},
				Yj: function() {
					return O
				},
				Zu: function() {
					return P
				},
				bC: function() {
					return me
				},
				f8: function() {
					return Y
				},
				hI: function() {
					return rt
				},
				hN: function() {
					return $
				},
				hX: function() {
					return He
				},
				iq: function() {
					return Ke
				},
				nE: function() {
					return j
				},
				oD: function() {
					return ee
				},
				oI: function() {
					return ne
				},
				oJ: function() {
					return nt
				},
				tM: function() {
					return K
				},
				uF: function() {
					return W
				},
				ut: function() {
					return We
				},
				vU: function() {
					return Ee
				},
				wQ: function() {
					return x
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				o = n("../../../../node_modules/lodash/get.js"),
				l = n.n(o),
				f = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				s = n.n(f),
				m = n("../../../../node_modules/reselect/lib/index.js"),
				u = n("../../../../node_modules/moment/moment.js"),
				p = n.n(u),
				v = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				r = n("../react/common/selectors/userSelectors.ts"),
				a = n("../react/common/selectors/entitlementsSelectors.ts"),
				c = n("../react/app/components/DeepLink/selectors.ts"),
				i = n("../react/common/constants/index.ts"),
				d = n("../react/common/utils/hasRole.ts");

			function E(M) {
				for (var q = 1; q < arguments.length; q++) {
					var de = arguments[q] != null ? Object(arguments[q]) : {},
						ye = Object.keys(de);
					typeof Object.getOwnPropertySymbols == "function" && ye.push.apply(ye, Object.getOwnPropertySymbols(de).filter(function(Pe) {
						return Object.getOwnPropertyDescriptor(de, Pe).enumerable
					})), ye.forEach(function(Pe) {
						T(M, Pe, de[Pe])
					})
				}
				return M
			}

			function T(M, q, de) {
				return q = h(q), q in M ? Object.defineProperty(M, q, {
					value: de,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[q] = de, M
			}

			function h(M) {
				var q = C(M, "string");
				return typeof q == "symbol" ? q : String(q)
			}

			function C(M, q) {
				if (typeof M != "object" || M === null) return M;
				var de = M[Symbol.toPrimitive];
				if (de !== void 0) {
					var ye = de.call(M, q || "default");
					if (typeof ye != "object") return ye;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (q === "string" ? String : Number)(M)
			}
			const D = M => {
					const q = W(M);
					return q == null ? void 0 : q.account
				},
				b = M => {
					const q = (0, r.PR)(M);
					if (q) {
						const de = q.id;
						return M.accountAccess[de] || {}
					}
					return {}
				},
				_ = M => M.accountsDetailed,
				S = (0, t.P1)("accountsDetailed", _),
				G = M => M.memberships,
				j = (0, m.P1)((0, t.P1)("memberships", G), c.U, (M, q) => !!q && !!M ? M.filter(de => q.includes(de.id)) : M),
				$ = M => M.accountFlags && M.accountFlags.data,
				Z = M => M.accountFlags,
				k = (M, q, de) => {
					const ye = $(M);
					return !ye || !ye[q] ? null : ye[q][de]
				},
				F = M => M.accountFlags.isRequesting,
				ne = (M, ...q) => l()(M, ["accountFlagsChanges", "data", ...q]),
				Y = M => M.accountFlagsChanges.isRequesting,
				re = (0, m.P1)($, Z, (M, q) => ({
					data: M,
					meta: q
				})),
				te = (M, q, de) => !!(isEnterpriseSSEnabledSelector(M) && k(M, q, de)),
				pe = M => M.membership,
				W = (0, t.P1)("membership", pe),
				U = (0, m.P1)(W, pe, (M, q) => ({
					data: M,
					meta: q
				})),
				w = M => {
					const {
						roles: q = []
					} = W(M) || {};
					return Boolean(q.find(de => de === "Super Administrator - All Privileges" || de === "Billing"))
				},
				K = M => {
					const q = [i.K$.SUPER_ADMIN];
					return (0, d.n)(M, q)
				},
				ee = M => {
					const q = b(M),
						de = Se.getMemberships(M) ? s().asMutable(Se.getMemberships(M)) : [];
					if (!!de) return s().from(de.map(ye => E({}, ye, {
						lastSeen: q[ye.account.id] ? q[ye.account.id].lastSeen : null
					})).sort((ye, Pe) => ye.lastSeen && Pe.lastSeen ? Pe.lastSeen - ye.lastSeen : 0))
				},
				ae = M => M.filteredMemberships,
				N = (0, t.P1)("filteredMemberships", ae),
				P = (0, m.P1)(W, M => M == null ? void 0 : M.permissions),
				O = (0, m.P1)(P, M => (0, e.Z)(q => {
					var de;
					return (de = M == null ? void 0 : M[q]) !== null && de !== void 0 ? de : {
						read: !1,
						edit: !1
					}
				})),
				I = (0, m.P1)(W, M => M == null ? void 0 : M.policies),
				H = (M, q, de) => {
					let ye = Se.getMembership(M);
					if (!ye) {
						const Pe = Se.getMemberships(M);
						if (!Pe || !q) return !1;
						ye = Pe.find(Re => Re.account.id === q)
					}
					if (!ye || !de) return !1;
					try {
						return de(ye.permissions)
					} catch {
						return !1
					}
				},
				Q = M => {
					var q, de;
					return (q = (de = D(M)) === null || de === void 0 ? void 0 : de.meta.has_pro_zones) !== null && q !== void 0 ? q : !1
				},
				X = M => {
					var q, de;
					return (q = (de = D(M)) === null || de === void 0 ? void 0 : de.meta.has_business_zones) !== null && q !== void 0 ? q : !1
				},
				me = M => X(M) || Q(M),
				Le = (M, q) => {
					const de = Ie(M, q);
					return !!de && !!de.enabled
				},
				Ie = (M, q) => {
					const de = Se.getMembership(M),
						ye = de && de.account;
					return ye && ye.legacy_flags && ye.legacy_flags[q]
				},
				x = M => Le(M, "custom_pages"),
				ie = M => !!M && M["webhooks.webhooks.enabled"],
				be = M => k(M, "bots", "enabled"),
				xe = M => k(M, "billing", "annual_subscriptions_enable"),
				je = M => M ? Boolean(k(M, "ConstellationAI", "v2_ui")) : !1,
				He = M => M ? Boolean(k(M, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Ye = M => M ? Boolean(k(M, "AIgateway", "enabled")) : !1,
				Qe = M => Ie(M, "enterprise_zone_quota"),
				it = M => {
					const q = Qe(M);
					return !q || !q.available ? -1 : q.available
				},
				Ke = M => M.accountMembers,
				Ze = (0, t.P1)("accountMembers", Ke),
				Ve = M => M.accountMember && M.accountMember.isRequesting,
				$e = M => M.accountRoles,
				et = (0, t.P1)("accountRoles", $e),
				Xe = (M, q) => {
					const de = Se.getMemberships(M),
						ye = de && de.find(qe => qe.account.id === q);
					if (ye) return ye.account.name.replace(" Account", " account");
					const Pe = Se.getMembership(M),
						Re = Pe && Pe.account;
					return Re && Re.id === q ? Re.name : null
				},
				We = (M, q) => {
					const de = Se.getMemberships(M),
						ye = de && de.find(qe => qe.account.id === q);
					if (ye) return ye.account.settings.access_approval_expiry;
					const Pe = Se.getMembership(M),
						Re = Pe && Pe.account;
					return Re && Re.id === q ? Re.settings.access_approval_expiry : null
				},
				tt = (M, q) => {
					const de = We(M, q);
					return de ? p().utc(de).isAfter() : !1
				},
				Je = (M, q, de) => {
					const ye = We(M, q);
					let Pe = ye ? p().utc(ye) : null;
					return !Pe || !Pe.isAfter() ? "" : Pe && Pe.year() === 3e3 ? de("account.access_approval.card_expiration_forever") : de("account.access_approval.card_expiration_text", {
						expiryTimestamp: Pe.local().format(v.U.DateTime)
					})
				},
				nt = M => M && M.member && M.member.edit,
				B = (M, q) => {
					const de = Se.getMembership(M),
						ye = de && de.account;
					return ye ? ye.id !== q : !1
				},
				J = M => M.dpa,
				ge = (0, t.P1)("dpa", J),
				Me = M => M.webhook,
				De = M => M.webhooks,
				se = (0, t.P1)("webhook", De),
				le = M => M.accountLegoContract,
				fe = (0, t.P1)("accountLegoContract", le),
				_e = M => {
					const q = fe(M);
					return (q == null ? void 0 : q.lego_state) ? q.lego_state : ""
				},
				Te = M => _e(M) === "signed",
				Ae = M => le(M).isRequesting,
				Ee = M => {
					const q = fe(M);
					return q && q.subscription_type ? q.subscription_type : ""
				},
				Ne = M => Ee(M) !== "",
				Se = {
					getMembership: W,
					getMemberships: j,
					getFilteredMemberships: N,
					getAccountMembers: Ze,
					getAccountRoles: et
				},
				ze = M => M.accountSingle,
				st = (0, t.P1)("accountSingle", ze),
				rt = M => {
					const q = [i.K$.SUPER_ADMIN, i.K$.ADMIN];
					return (0, d.n)(M, q)
				}
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				$f: function() {
					return i
				},
				AD: function() {
					return s
				},
				BF: function() {
					return c
				},
				Bs: function() {
					return D
				},
				Ci: function() {
					return P
				},
				E6: function() {
					return a
				},
				Hq: function() {
					return Ie
				},
				Ms: function() {
					return S
				},
				Q2: function() {
					return m
				},
				Td: function() {
					return h
				},
				Z: function() {
					return H
				},
				a: function() {
					return C
				},
				a5: function() {
					return X
				},
				du: function() {
					return p
				},
				ec: function() {
					return Y
				},
				f: function() {
					return Le
				},
				hL: function() {
					return Q
				},
				ji: function() {
					return O
				},
				jo: function() {
					return G
				},
				k4: function() {
					return me
				},
				lI: function() {
					return f
				},
				p1: function() {
					return E
				},
				pf: function() {
					return t
				},
				qR: function() {
					return T
				},
				rV: function() {
					return u
				},
				u1: function() {
					return v
				},
				w4: function() {
					return r
				},
				yD: function() {
					return I
				}
			});
			var e = n("../react/utils/url.ts");

			function o(x, ie) {
				return x && x[ie]
			}
			const l = x => !f(x).isRequesting;

			function f(x) {
				return x.entitlements.zone
			}

			function s(x) {
				return f(x).data
			}
			const m = x => {
				var ie, be;
				return ((ie = f(x).paginationData) === null || ie === void 0 || (be = ie.options) === null || be === void 0 ? void 0 : be.editedDate) || {}
			};

			function u(x, ie) {
				const be = s(x);
				return be ? o(be, ie) : void 0
			}
			const p = (x, ie) => u(x, ie) === !0;

			function v(x) {
				return x.entitlements.account
			}

			function t(x) {
				return v(x).data
			}
			const r = x => {
				var ie, be;
				return ((ie = v(x).paginationData) === null || ie === void 0 || (be = ie.options) === null || be === void 0 ? void 0 : be.editedDate) || {}
			};

			function a(x) {
				return !v(x).isRequesting
			}

			function c(x, ie) {
				const be = t(x);
				return be ? o(be, ie) : void 0
			}

			function i(x, ie) {
				return c(x, ie) === !0
			}

			function d(x, ie) {
				return ie.every(be => i(x, be))
			}

			function E(x) {
				return i(x, "contract.customer_enabled")
			}

			function T(x) {
				return i(x, "contract.self_service_allowed")
			}

			function h(x) {
				return i(x, "billing.partners_managed")
			}
			const C = x => E(x) && T(x),
				D = x => i(x, "enterprise.ecp_allowed");

			function b(x) {
				return _(x) || i(x, "argo.allow_smart_routing") || i(x, "argo.allow_tiered_caching") || i(x, "rate_limiting.enabled") || i(x, "ctm.enabled") || i(x, "workers.enabled") || i(x, "workers.kv_store.enabled") || i(x, "stream.enabled")
			}
			const _ = x => p(x, "argo.allow_smart_routing") || p(x, "argo.allow_tiered_caching"),
				S = x => i(x, "zone.cname_setup_allowed") || i(x, "zone.partial_setup_allowed") || p(x, "zone.partial_setup_allowed"),
				G = x => i(x, "argo.allow_smart_routing") || p(x, "argo.allow_smart_routing"),
				j = x => i(x, "argo.allow_tiered_caching") || p(x, "argo.allow_tiered_caching"),
				$ = x => G(x) || j(x),
				Z = x => i(x, "ctm.enabled"),
				k = x => {
					const ie = c(x, "ctm.load_balancers");
					return typeof ie == "number" ? ie : 0
				},
				F = x => {
					const ie = c(x, "ctm.pools");
					return typeof ie == "number" ? ie : 0
				},
				ne = x => {
					const ie = c(x, "ctm.origins");
					return typeof ie == "number" ? ie : 0
				},
				Y = x => i(x, "workers.enabled"),
				re = x => i(x, "stream.enabled"),
				te = x => {
					const ie = c(x, "access.users_allowed");
					return typeof ie == "number" ? ie : 0
				},
				pe = x => te(x) > 0,
				W = x => {
					const ie = u(x, "dedicated_certificates");
					return typeof ie == "number" ? ie : 0
				},
				U = x => W(x) > 0,
				w = x => {
					const ie = u(x, "rate_limiting.max_rules");
					return typeof ie == "number" ? ie : 0
				},
				K = x => i(x, "rate_limiting.enabled"),
				ee = x => {
					const ie = u(x, "page_rules");
					return typeof ie == "number" ? ie : 0
				},
				ae = x => ee(x) > 0,
				N = x => {
					const ie = c(x, "dns_firewall.max_clusters_allowed");
					return typeof ie == "number" ? ie : 0
				},
				P = x => N(x) > 0,
				O = x => p(x, "zone.advanced_certificate_manager") || i(x, "zone.advanced_certificate_manager"),
				I = x => u(x, "authoritative_dns.proxy_record_allowed") === !1 || c(x, "authoritative_dns.proxy_record_allowed") === !1,
				H = x => i(x, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				Q = x => u(x, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				X = x => {
					const ie = u(x, "authoritative_dns.min_record_ttl_allowed");
					return typeof ie == "number" && ie > 1 ? ie : 60
				},
				me = x => i(x, "foundation_dns.advanced_nameservers_allowed") || p(x, "foundation_dns.advanced_nameservers_allowed"),
				Le = (x, ie) => ((0, e.el)(window.location.pathname) ? u : c)(x, ie),
				Ie = x => i(x, "authoritative_dns.multi_provider_allowed") || p(x, "authoritative_dns.multi_provider_allowed")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				r: function() {
					return f
				},
				v: function() {
					return s
				}
			});
			var e = n("../react/utils/i18n.ts"),
				o = n("../../../common/intl/intl-types/src/index.ts"),
				l = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const f = m => {
				const u = m.userCommPreferences.data;
				if (u == null ? void 0 : u["language-locale"]) return l.Z.set(e.ly, u["language-locale"]), u["language-locale"];
				{
					l.Z.has(e.ly) || l.Z.set(e.ly, e.ZW);
					const p = l.Z.get(e.ly);
					return s(p) ? p : e.ZW
				}
			};

			function s(m) {
				const u = Object.keys(o.Q).find(p => o.Q[p] === m);
				return !!m && typeof m == "string" && u != null && (0, e.S8)(u)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				$8: function() {
					return s
				},
				BG: function() {
					return v
				},
				BY: function() {
					return C
				},
				GP: function() {
					return i
				},
				GU: function() {
					return D
				},
				PR: function() {
					return l
				},
				h$: function() {
					return T
				},
				h8: function() {
					return t
				},
				kk: function() {
					return E
				},
				l8: function() {
					return u
				},
				mV: function() {
					return d
				},
				vW: function() {
					return m
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const o = b => b.user,
				l = (0, e.P1)("user", o),
				f = b => {
					var _;
					return (_ = l(b)) === null || _ === void 0 ? void 0 : _.email.endsWith("@cloudflare.com")
				},
				s = b => {
					var _;
					return !!((_ = l(b)) === null || _ === void 0 ? void 0 : _.id)
				},
				m = b => {
					const _ = l(b);
					if (!!_) return _.first_name && _.last_name ? `${_.first_name} ${_.last_name}` : _.email
				},
				u = b => {
					const _ = l(b);
					return _ && _.has_enterprise_zones
				},
				p = b => b.userCommPreferences,
				v = (0, e.P1)("userCommPreferences", p),
				t = b => {
					const _ = l(b);
					return _ && _.email_verified
				},
				r = b => {
					const _ = v(b);
					return _ && _.preferences.marketing_communication
				},
				a = b => b.userDetails,
				c = (0, e.P1)("userDetails", a),
				i = b => {
					const _ = c(b);
					return _ && _["2FA-RECOVERY"] === "scheduled"
				},
				d = b => {
					const _ = c(b);
					return _ && _["2FA-RECOVERY"] === "interrupted"
				},
				E = b => {
					const _ = c(b);
					return _ == null ? void 0 : _["NEW-USER-EMAIL"]
				},
				T = b => b.gates.assignments,
				h = (b, _) => b && b[_];

			function C(b, _) {
				const S = T(b);
				return S ? h(S, _) : void 0
			}
			const D = (b, _) => C(b, _) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				$4: function() {
					return S
				},
				$t: function() {
					return Xe
				},
				A4: function() {
					return E
				},
				Cu: function() {
					return T
				},
				DQ: function() {
					return Le
				},
				Ej: function() {
					return j
				},
				FH: function() {
					return C
				},
				ID: function() {
					return K
				},
				Ko: function() {
					return He
				},
				Le: function() {
					return ie
				},
				Ly: function() {
					return P
				},
				M3: function() {
					return Ze
				},
				N8: function() {
					return Ke
				},
				NY: function() {
					return Q
				},
				Ns: function() {
					return ae
				},
				Ox: function() {
					return Je
				},
				P4: function() {
					return $
				},
				RO: function() {
					return U
				},
				SX: function() {
					return X
				},
				Tr: function() {
					return je
				},
				U: function() {
					return h
				},
				Ug: function() {
					return b
				},
				V6: function() {
					return Ve
				},
				WR: function() {
					return nt
				},
				Xg: function() {
					return d
				},
				ZB: function() {
					return x
				},
				_y: function() {
					return ee
				},
				cU: function() {
					return Ye
				},
				cg: function() {
					return me
				},
				d2: function() {
					return re
				},
				il: function() {
					return N
				},
				jN: function() {
					return k
				},
				jg: function() {
					return I
				},
				kC: function() {
					return G
				},
				kf: function() {
					return $e
				},
				ko: function() {
					return W
				},
				mK: function() {
					return We
				},
				nA: function() {
					return i
				},
				oY: function() {
					return Z
				},
				qM: function() {
					return be
				},
				rq: function() {
					return H
				},
				tS: function() {
					return _
				},
				tU: function() {
					return ne
				},
				vB: function() {
					return tt
				},
				vM: function() {
					return F
				},
				wH: function() {
					return D
				},
				wn: function() {
					return Ie
				},
				xU: function() {
					return Y
				},
				xw: function() {
					return xe
				},
				z5: function() {
					return w
				},
				zO: function() {
					return Qe
				},
				zW: function() {
					return et
				},
				zh: function() {
					return te
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				o = n("../react/app/redux/normalizer.js"),
				l = n("../../../../node_modules/lodash/get.js"),
				f = n.n(l),
				s = n("../../../../node_modules/moment/moment.js"),
				m = n.n(s),
				u = n("../react/common/constants/billing/index.ts");

			function p(B) {
				for (var J = 1; J < arguments.length; J++) {
					var ge = arguments[J] != null ? Object(arguments[J]) : {},
						Me = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && Me.push.apply(Me, Object.getOwnPropertySymbols(ge).filter(function(De) {
						return Object.getOwnPropertyDescriptor(ge, De).enumerable
					})), Me.forEach(function(De) {
						v(B, De, ge[De])
					})
				}
				return B
			}

			function v(B, J, ge) {
				return J = t(J), J in B ? Object.defineProperty(B, J, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[J] = ge, B
			}

			function t(B) {
				var J = r(B, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function r(B, J) {
				if (typeof B != "object" || B === null) return B;
				var ge = B[Symbol.toPrimitive];
				if (ge !== void 0) {
					var Me = ge.call(B, J || "default");
					if (typeof Me != "object") return Me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(B)
			}
			const a = (0, o.P1)("zone", B => B.zone),
				c = B => {
					var J;
					return (J = B.zoneVersioning) === null || J === void 0 ? void 0 : J.zoneVersionSelector
				},
				i = (0, e.P1)(a, c, (B, J) => {
					var ge, Me, De;
					let se;
					if (Array.isArray(B) && B.length === 1 ? se = B[0] : B && !Array.isArray(B) && (se = B), !se) return;
					const le = !!(J == null ? void 0 : J.enabled);
					return p({}, se, se.name && {
						name: le ? J.rootZoneName : se.name
					}, {
						versioning: {
							enabled: le,
							isRoot: !((ge = se.name) === null || ge === void 0 ? void 0 : ge.endsWith(".config.cfdata.org")),
							version: le ? J.selectedVersion : 0,
							rootZoneId: le ? J.rootZoneId : (Me = (De = se) === null || De === void 0 ? void 0 : De.id) !== null && Me !== void 0 ? Me : ""
						}
					})
				}),
				d = B => B.zone,
				E = (0, e.P1)(i, d, (B, J) => ({
					data: B,
					meta: J
				})),
				T = B => {
					var J, ge;
					return (J = (ge = i(B)) === null || ge === void 0 ? void 0 : ge.id) !== null && J !== void 0 ? J : ""
				},
				h = B => B.zones,
				C = B => B.zonesRoot,
				D = B => B.zonesAccount,
				b = (0, o.P1)("zones", h),
				_ = (0, o.P1)("zonesRoot", C),
				S = (0, o.P1)("zonesAccount", D);

			function G(B) {
				const J = i(B);
				return J ? J.created_on : null
			}

			function j(B, J, ge) {
				const Me = G(B);
				if (!Me) return;
				const De = m().duration(J, ge),
					se = new Date(Me),
					le = new Date(new Date().getTime() - De.asMilliseconds());
				return se.getTime() > le.getTime()
			}

			function $(B) {
				const J = i(B);
				return J ? J.status : null
			}

			function Z(B) {
				const J = i(B);
				return J ? J.type : null
			}

			function k(B) {
				return B.plan_pending ? B.plan_pending : B.plan
			}

			function F(B) {
				const J = i(B);
				if (!J) return;
				const ge = k(J);
				return ge && ge.legacy_id
			}

			function ne(B, J) {
				const ge = k(B);
				return !!ge && u.Gs.indexOf(ge.legacy_id) >= u.Gs.indexOf(J)
			}

			function Y(B) {
				return !!B && B.status === "initializing"
			}

			function re(B) {
				return !!B && B.status === "pending"
			}

			function te(B) {
				return !!B && B.status === "active"
			}

			function pe(B, J) {
				if (!B) return !1;
				const ge = k(B);
				return !!ge && ge.legacy_id === J
			}

			function W(B) {
				return pe(B, "enterprise")
			}
			const U = B => W(i(B));

			function w(B) {
				return pe(B, "business")
			}
			const K = B => w(i(B));

			function ee(B) {
				return pe(B, "pro")
			}

			function ae(B) {
				return pe(B, "free")
			}
			const N = B => ae(i(B));

			function P(B) {
				return !W(B)
			}

			function O(B) {
				return B && B.owner
			}

			function I(B, J) {
				const ge = O(J);
				return !!ge && ge.type === "user" && ge.id === B.id
			}

			function H(B) {
				const J = i(B);
				return !!J && J.type === "partial"
			}

			function Q(B) {
				const J = i(B);
				return !!J && J.type === "secondary"
			}

			function X(B) {
				const J = i(B);
				return J && H(B) && J.host
			}
			const me = B => {
					var J;
					const ge = i(B);
					return !!(ge == null ? void 0 : ge.host) && !!((J = ge.plan) === null || J === void 0 ? void 0 : J.externally_managed)
				},
				Le = B => {
					const J = b(B);
					return J && J.some(W)
				},
				Ie = (B, J) => {
					const ge = i(B);
					return ge && ge.betas ? ge.betas.includes(J) : !1
				},
				x = (B, ...J) => f()(B, ["zoneFlags", "data", ...J]),
				ie = (B, ...J) => f()(B, ["accountFlags", "data", ...J]),
				be = B => B.accountFlags.isRequesting,
				xe = B => B.zoneFlags.isRequesting,
				je = (B, ...J) => f()(B, ["zoneFlagsChanges", "data", ...J]),
				He = B => B.zoneFlagsChanges.isRequesting,
				Ye = B => B.zoneFlags && B.zoneFlags.data,
				Qe = B => B.zoneFlags,
				it = (0, e.P1)(Ye, Qe, (B, J) => ({
					data: B,
					meta: J
				})),
				Ke = (0, o.P1)("abuseUrls", B => B.overview.abuseUrls),
				Ze = B => {
					const J = i(B);
					return J ? `/${J.account.id}/${J.name}` : null
				},
				Ve = B => B.zoneMarketingCampaigns,
				$e = B => B.overview.zoneBlocks.data,
				et = B => B.overview.zoneBlocks.isRequesting,
				Xe = B => B.overview.zoneBlocks.hasData,
				We = B => {
					var J, ge;
					return (B == null || (J = B.overview.zoneBlocks) === null || J === void 0 || (ge = J.paginationData) === null || ge === void 0 ? void 0 : ge.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				tt = B => B.overview.zoneBlocksReview.isRequesting,
				Je = B => B.overview.zoneHold,
				nt = (0, o.P1)("zoneHold", Je)
		},
		"../react/common/utils/formatDate.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			y.Z = (o, l, f = !1) => (0, e.p6)(o, l, f)
		},
		"../react/common/utils/hasRole.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				n: function() {
					return o
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts");
			const o = (l, f) => {
				const {
					roles: s = []
				} = (0, e.uF)(l) || {};
				return f.some(m => s.includes(m))
			}
		},
		"../react/common/utils/isGuards.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Q$: function() {
					return l
				},
				t: function() {
					return m
				},
				v5: function() {
					return f
				},
				zE: function() {
					return s
				}
			});
			var e = n("../react/common/constants/index.ts"),
				o = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const l = u => u ? ["page", "per_page", "count", "total_count"].every(v => v in u && u[v]) : !1,
				f = (u = "") => e.Dy.includes(u.toLowerCase()),
				s = u => u !== null && typeof u == "object" && "name" in u && "size" in u && "type" in u && typeof u.slice == "function",
				m = u => (0, o.Z)(u)
		},
		"../react/common/utils/useQueryCache.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				o: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/react-query/es/index.js");

			function o(u) {
				for (var p = 1; p < arguments.length; p++) {
					var v = arguments[p] != null ? Object(arguments[p]) : {},
						t = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && t.push.apply(t, Object.getOwnPropertySymbols(v).filter(function(r) {
						return Object.getOwnPropertyDescriptor(v, r).enumerable
					})), t.forEach(function(r) {
						l(u, r, v[r])
					})
				}
				return u
			}

			function l(u, p, v) {
				return p = f(p), p in u ? Object.defineProperty(u, p, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[p] = v, u
			}

			function f(u) {
				var p = s(u, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function s(u, p) {
				if (typeof u != "object" || u === null) return u;
				var v = u[Symbol.toPrimitive];
				if (v !== void 0) {
					var t = v.call(u, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(u)
			}
			const m = u => {
				const p = (0, e.useQueryClient)(),
					v = h => {
						var C;
						return p.getQueriesData((C = h) !== null && C !== void 0 ? C : u)
					},
					t = h => {
						var C;
						return p.getQueryData((C = h) !== null && C !== void 0 ? C : u)
					},
					r = h => {
						var C;
						return p.getQueriesData({
							queryKey: (C = h) !== null && C !== void 0 ? C : u,
							stale: !0
						})
					},
					a = (h, C) => {
						var D;
						p.setQueryData((D = C) !== null && D !== void 0 ? D : u, h)
					},
					c = async (h, C) => {
						var D, b;
						await p.invalidateQueries((D = h) !== null && D !== void 0 ? D : u, o({
							refetchActive: !1
						}, (b = C) !== null && b !== void 0 ? b : {}))
					}, i = async (h, C) => {
						const D = h || (b => {
							var _;
							return (b == null || (_ = b.queryKey) === null || _ === void 0 ? void 0 : _[0]) === u
						});
						await p.invalidateQueries(o({
							predicate: D,
							refetchActive: !1,
							refetchInactive: !1
						}, C))
					};
				return {
					cancelData: async () => {
						await p.cancelQueries(u)
					},
					invalidate: c,
					setData: a,
					getDataStale: r,
					getData: v,
					prefetchQuery: (h, C) => {
						var D;
						return p.prefetchQuery((D = C) !== null && D !== void 0 ? D : u, h)
					},
					getQueryData: t,
					predicateInvalidate: i,
					batchInvalidate: async ({
						queryKeysToInvalidate: h = [],
						queryKeysToPredicateInvalidate: C = [],
						refetchActive: D = !1,
						refetchInactive: b = !1
					}) => {
						const _ = h.map(G => c(G)),
							S = C.map(G => i(j => {
								var $;
								return (j == null || ($ = j.queryKey) === null || $ === void 0 ? void 0 : $[0]) === G
							}, {
								refetchActive: D,
								refetchInactive: b
							}));
						await Promise.all([..._, ...S])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(z, y, n) {
			"use strict";
			n.d(y, {
				K2: function() {
					return o
				},
				Lb: function() {
					return l
				},
				XI: function() {
					return f
				},
				bK: function() {
					return p
				},
				jk: function() {
					return u
				},
				wb: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = v => /^https?:\/\/(.*)/.test(v),
				l = v => e.default.hostname.test(v),
				f = v => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(v),
				s = v => /^[!-~]+$/.test(v),
				m = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				u = v => m.test(v),
				p = v => !!v && !!v.length && /^[ -~]+$/.test(v)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(z, y, n) {
			"use strict";
			n.d(y, {
				DZ: function() {
					return f
				},
				GA: function() {
					return v
				},
				hT: function() {
					return m
				},
				p6: function() {
					return l
				},
				qc: function() {
					return s
				},
				w9: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e);
			const l = a => o().utc(a).format("YYYY-MM-DD"),
				f = a => o().utc(a).format(),
				s = a => o().utc(a).startOf("minute").format(),
				m = a => new Date(a),
				u = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				p = a => {
					const c = a / 60 / 60 / 1e3;
					return u[Object.keys(u).sort((i, d) => d - i).find(i => c >= i)]
				},
				v = (a, c = i => i.avg && i.avg.sampleInterval ? i.avg.sampleInterval : 1) => a.length === 0 ? 1 : a.reduce((i, d) => i + c(d), 0) / a.length,
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
					return v
				},
				OK: function() {
					return s
				},
				_Y: function() {
					return u
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
				for (var d = 1; d < arguments.length; d++) {
					var E = arguments[d] != null ? Object(arguments[d]) : {},
						T = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(E).filter(function(h) {
						return Object.getOwnPropertyDescriptor(E, h).enumerable
					})), T.forEach(function(h) {
						o(i, h, E[h])
					})
				}
				return i
			}

			function o(i, d, E) {
				return d = l(d), d in i ? Object.defineProperty(i, d, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = E, i
			}

			function l(i) {
				var d = f(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function f(i, d) {
				if (typeof i != "object" || i === null) return i;
				var E = i[Symbol.toPrimitive];
				if (E !== void 0) {
					var T = E.call(i, d || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			let s = function(i) {
					return i.Sending = "sending", i.Success = "success", i.Failed = "failed", i.Latent = "latent", i
				}({}),
				m = function(i) {
					return i[i.Success = 200] = "Success", i[i.BadRequest = 400] = "BadRequest", i
				}({});
			const u = {
					status: s.Latent,
					statusCode: void 0
				},
				p = {
					status: s.Sending
				},
				v = {
					status: s.Success,
					statusCode: m.Success
				},
				t = {
					status: s.Failed,
					statusCode: m.BadRequest
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
					}, u),
					installsList: e({
						value: []
					}, u),
					categoriesList: e({
						value: []
					}, u),
					recommendedAppsList: e({
						value: []
					}, u),
					metadata: e({
						value: null
					}, u),
					app: e({
						value: null
					}, u),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, u)
				},
				c = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Dl: function() {
					return a
				},
				Ux: function() {
					return c
				},
				cz: function() {
					return d
				},
				im: function() {
					return v
				},
				pG: function() {
					return i
				},
				t$: function() {
					return E
				}
			});
			var e = n("../../../../node_modules/lodash-es/get.js"),
				o = n("../../../../node_modules/lodash-es/isEqual.js"),
				l = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function f(h) {
				for (var C = 1; C < arguments.length; C++) {
					var D = arguments[C] != null ? Object(arguments[C]) : {},
						b = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(D).filter(function(_) {
						return Object.getOwnPropertyDescriptor(D, _).enumerable
					})), b.forEach(function(_) {
						s(h, _, D[_])
					})
				}
				return h
			}

			function s(h, C, D) {
				return C = m(C), C in h ? Object.defineProperty(h, C, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[C] = D, h
			}

			function m(h) {
				var C = u(h, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function u(h, C) {
				if (typeof h != "object" || h === null) return h;
				var D = h[Symbol.toPrimitive];
				if (D !== void 0) {
					var b = D.call(h, C || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(h)
			}
			const p = h => h.test(window.location.hostname),
				v = () => p(l.j9),
				t = () => p(MARKETPLACE_LOCAL_URL_REGEXP),
				r = (h, C) => {
					const D = random(0, 1) ? -1 : 1;
					return h.points === C.points || h.points >= APP_POINTS_THRESHOLD && C.points >= APP_POINTS_THRESHOLD ? D : h.points < 0 || C.points < 0 || h.points >= APP_POINTS_THRESHOLD || C.points >= APP_POINTS_THRESHOLD ? C.points - h.points : D
				},
				a = (h, C, D) => {
					const b = (0, e.Z)(C, D),
						_ = (0, e.Z)(h, D);
					return b && !(0, o.Z)(b, _)
				},
				c = {
					transformers: {
						transformAppIdsToApps: (h, C) => C.map(D => h.find(b => b.id === D)),
						addAppVersionInfo: (h, C) => f({}, C, {
							currentVersion: C.versions.find(D => D.tag === h.versionTag),
							latestVersion: C.versions.find(D => D.tag === C.infoVersion)
						}),
						addCurrentSiteInstall: (h, C) => f({}, C, {
							currentSiteInstall: h.find(D => D.appId === C.id)
						})
					}
				},
				i = (h, C, D) => f({}, h, C, D ? {
					value: D
				} : {}),
				d = h => h.map(C => C.status),
				E = h => h.apps ? h.apps : h,
				T = h => {
					let C = ["by-cloudflare"];
					return h.filter(D => !C.includes(D.id) && D.visible).sort((D, b) => D.points < b.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(z, y, n) {
			"use strict";
			n.r(y), n.d(y, {
				categorySlugTranslationKey: function() {
					return s
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return f
				},
				translations: function() {
					return l
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: l,
				namespace: f
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

			function s(m) {
				const u = m.replace(/-/g, "_");
				return Object.keys(o).includes(u) ? u : void 0
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
				l = n("../../../../node_modules/lodash-es/defaults.js"),
				f = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function s(c) {
				for (var i = 1; i < arguments.length; i++) {
					var d = arguments[i] != null ? Object(arguments[i]) : {},
						E = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(d).filter(function(T) {
						return Object.getOwnPropertyDescriptor(d, T).enumerable
					})), E.forEach(function(T) {
						p(c, T, d[T])
					})
				}
				return c
			}

			function m(c, i) {
				if (c == null) return {};
				var d = u(c, i),
					E, T;
				if (Object.getOwnPropertySymbols) {
					var h = Object.getOwnPropertySymbols(c);
					for (T = 0; T < h.length; T++) E = h[T], !(i.indexOf(E) >= 0) && (!Object.prototype.propertyIsEnumerable.call(c, E) || (d[E] = c[E]))
				}
				return d
			}

			function u(c, i) {
				if (c == null) return {};
				var d = {},
					E = Object.keys(c),
					T, h;
				for (h = 0; h < E.length; h++) T = E[h], !(i.indexOf(T) >= 0) && (d[T] = c[T]);
				return d
			}

			function p(c, i, d) {
				return i = v(i), i in c ? Object.defineProperty(c, i, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = d, c
			}

			function v(c) {
				var i = t(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function t(c, i) {
				if (typeof c != "object" || c === null) return c;
				var d = c[Symbol.toPrimitive];
				if (d !== void 0) {
					var E = d.call(c, i || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}
			class r {
				constructor(i) {
					p(this, "token", void 0), p(this, "options", void 0), p(this, "setAuthHeader", d => {
						this.token = d
					}), this.token = "", this.options = (0, l.Z)(i, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(i = "GET", d, E = {}) {
					const {
						body: T
					} = E, h = m(E, ["body"]);
					return fetch(o()(this.options.baseUrl, d), s({
						method: i
					}, h, T ? {
						body: JSON.stringify(T)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(s({
							Accept: "application/json, text/plain, */*"
						}, E.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(i, d = {}) {
					const E = await this.request("GET", i, d);
					return this.parseJSONResponse(E)
				}
				async postJSON(i, d = {}) {
					const E = await this.request("POST", i, s({}, d, {
						headers: s({}, d.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(E)
				}
				parseJSONResponse(i) {
					return i.json()
				}
			}
			p(r, "defaults", {
				baseUrl: (0, f.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const a = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				JX: function() {
					return v
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
				l = n("../node_modules/query-string/query-string.js"),
				f = n.n(l),
				s = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				m = n("../react/pages/apps/marketplace/requests/Requester.ts"),
				u = n("../react/pages/apps/marketplace/libraries/resource.ts");

			function* p(i, d, E, T) {
				const h = (0, e.Z)(d),
					[C, D, b] = [`get${h}Sending`, `get${h}Success`, `get${h}Failed`];
				try {
					yield(0, s.gz)(i[C]());
					const _ = yield(0, s.RE)(a, E);
					let S = _;
					if (S.error) {
						yield(0, s.gz)(i[b]());
						return
					}
					return T && (S = yield T(_)), yield(0, s.gz)(i[D](S)), S
				} catch {
					yield(0, s.gz)(i[b]())
				}
			}

			function* v(i, d, E, T) {
				const h = (0, e.Z)(d),
					C = `get${h}Sending`,
					D = `get${h}Success`,
					b = `get${h}Failed`;
				try {
					yield(0, s.gz)(i[C]());
					const _ = yield(0, s.RE)(c, {
						url: E,
						data: T
					});
					return yield(0, s.gz)(i[D](_)), _
				} catch {
					yield(0, s.gz)(i[b]())
				}
			}
			const t = i => (0, o.Z)(i) ? "" : `?${l.stringify(i)}`,
				r = {
					app: new u.c({
						name: "app",
						url: (i, d) => `apps/${i}${t(d)}`
					}),
					apps: new u.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new u.c({
							name: "installs",
							url: i => `sites/${i}/installs`
						}),
						delete: new u.c({
							name: "installs",
							url: i => `installs/${i}`
						})
					},
					categories: new u.c({
						name: "categories",
						url: (i = {}) => "categories" + t(i)
					}),
					metadata: {
						get: new u.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						}),
						post: new u.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						})
					},
					ratings: {
						default: new u.c({
							name: "ratings",
							url: (i = {}) => "ratings" + t(i)
						}),
						delete: new u.c({
							name: "ratings",
							url: i => `ratings/${i}`
						})
					},
					recommendedApps: new u.c({
						name: "recommendedApps",
						url: (i = {}) => "apps/recommend" + t(i)
					}),
					developedApps: new u.c({
						name: "developedApps",
						url: i => `user/${i}/apps`
					})
				},
				a = async i => m.L.fetchJSON(i), c = async i => {
					const {
						url: d,
						data: E
					} = i;
					return m.L.postJSON(d, {
						body: E
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
					return u
				},
				XO: function() {
					return m
				},
				ZP: function() {
					return v
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function o(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						c = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), c.forEach(function(i) {
						l(t, i, a[i])
					})
				}
				return t
			}

			function l(t, r, a) {
				return r = f(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function f(t) {
				var r = s(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function s(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var c = a.call(t, r || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let m = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				u = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const p = {
				resetState: () => ({
					type: u.ResetState
				}),
				initSaga: t => ({
					type: u.InitSaga,
					zoneId: t
				}),
				setZone: t => ({
					type: u.SetZone,
					zone: t
				}),
				setToken: t => ({
					type: u.SetToken,
					token: t
				}),
				clearToken: () => ({
					type: u.ClearToken
				}),
				setTokenValid: t => ({
					type: u.SetTokenValid,
					isTokenValid: t
				}),
				getCurrentUserSaga: () => ({
					type: u.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: u.CurrentUserSending
				}),
				getCurrentUserSuccess: t => ({
					type: u.CurrentUserSuccess,
					user: t
				}),
				getCurrentUserFailed: () => ({
					type: u.CurrentUserFailed
				})
			};

			function v(t = e.fD, r) {
				switch (r.type) {
					case u.ResetState:
						return o({}, e.fD);
					case u.CurrentUserSending:
						return o({}, t);
					case u.CurrentUserSuccess:
						const {
							user: a
						} = r;
						return o({}, t, {
							user: a
						});
					case u.CurrentUserFailed:
						return o({}, t);
					case u.SetZone:
						const {
							zone: c
						} = r;
						return o({}, t, {
							zone: c
						});
					case u.SetToken:
						const {
							token: i
						} = r;
						return o({}, t, {
							token: i
						});
					case u.ClearToken:
						return o({}, t, {
							token: null
						});
					case u.SetTokenValid:
						const {
							isTokenValid: d
						} = r;
						return o({}, t, {
							isTokenValid: d
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
					return v
				},
				U4: function() {
					return p
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return u
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function l(r) {
				for (var a = 1; a < arguments.length; a++) {
					var c = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(c).filter(function(d) {
						return Object.getOwnPropertyDescriptor(c, d).enumerable
					})), i.forEach(function(d) {
						f(r, d, c[d])
					})
				}
				return r
			}

			function f(r, a, c) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = c, r
			}

			function s(r) {
				var a = m(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(r, a) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var i = c.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let u = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				p = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const v = {
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
				getAppInfoAssetsSaga: (r, a, c) => ({
					type: p.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: a,
					version: c
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
				getRecommendedAppsSaga: (r, a, c) => ({
					type: p.GetRecommendedAppsSaga,
					appsList: r,
					installsList: a,
					metadata: c
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
						return l({}, e.w6);
					case p.ZoneChangedSaga:
						return l({}, r, {
							installsList: l({}, e.w6.installsList),
							recommendedAppsList: l({}, e.w6.recommendedAppsList),
							metadata: l({}, e.w6.metadata)
						});
					case p.GetAppsSending:
						return l({}, r, {
							appsList: l({}, (0, o.pG)(r.appsList, e.h_))
						});
					case p.GetAppsSuccess:
						return l({}, r, {
							appsList: l({}, (0, o.pG)(r.appsList, e.Jz, a.appsList))
						});
					case p.GetAppsFailed:
						return l({}, r, {
							appsList: l({}, (0, o.pG)(r.appsList, e.yc))
						});
					case p.GetInstallsSending:
						return l({}, r, {
							installsList: l({}, (0, o.pG)(r.installsList, e.h_))
						});
					case p.GetInstallsSuccess:
						return l({}, r, {
							installsList: l({}, (0, o.pG)(r.installsList, e.Jz, a.installsList))
						});
					case p.GetInstallsFailed:
						return l({}, r, {
							installsList: l({}, (0, o.pG)(r.installsList, e.yc))
						});
					case p.GetCategoriesSending:
						return l({}, r, {
							categoriesList: l({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case p.GetCategoriesSuccess:
						return l({}, r, {
							categoriesList: l({}, (0, o.pG)(r.categoriesList, e.Jz, a.categoriesList))
						});
					case p.GetCategoriesFailed:
						return l({}, r, {
							categoriesList: l({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case p.GetMetadataSending:
						return l({}, r, {
							metadata: l({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.GetMetadataSuccess:
						return l({}, r, {
							metadata: l({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case p.GetMetadataFailed:
						return l({}, r, {
							metadata: l({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.PostMetadataSending:
						return l({}, r, {
							metadata: l({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.PostMetadataSuccess:
						return l({}, r, {
							metadata: l({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case p.PostMetadataFailed:
						return l({}, r, {
							metadata: l({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.GetRecommendedAppsSending:
						return l({}, r, {
							recommendedAppsList: l({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case p.GetRecommendedAppsSuccess:
						return l({}, r, {
							recommendedAppsList: l({}, (0, o.pG)(r.recommendedAppsList, e.Jz, a.recommendedAppsList))
						});
					case p.GetRecommendedAppsFailed:
						return l({}, r, {
							recommendedAppsList: l({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case p.GetAppSending:
						return l({}, r, {
							app: l({}, (0, o.pG)(r.app, e.h_))
						});
					case p.GetAppSuccess:
						return l({}, r, {
							app: l({}, (0, o.pG)(r.app, e.Jz, a.app))
						});
					case p.GetAppFailed:
						return l({}, r, {
							app: l({}, (0, o.pG)(r.app, e.yc))
						});
					case p.ClearApp:
						return l({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case p.SetUpdatableInstalls:
						return l({}, r, {
							updatableInstallsList: a.updatableInstallsList
						});
					case p.GetDevelopedAppsSending:
						return l({}, r, {
							developedApps: l({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case p.GetDevelopedAppsSuccess:
						return l({}, r, {
							developedApps: l({}, (0, o.pG)(r.developedApps, e.Jz, a.developedApps))
						});
					case p.GetDevelopedAppsFailed:
						return l({}, r, {
							developedApps: l({}, (0, o.pG)(r.developedApps, e.yc))
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
			let e = function(l) {
				return l.DNS_RECORD_CREATE = "create DNS records", l.DNS_RECORD_UPDATE = "update DNS records", l.DNS_RECORD_DELETE = "delete DNS records", l.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", l
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
					return l
				},
				UZ: function() {
					return e
				}
			});
			let e = function(s) {
				return s.ROOT = "root", s.DSTADDRS_CARD = "dstaddrs_card", s.RULES_CARD = "rules_card", s.CATCHALL_CARD = "catchall_card", s.SETTINGS_PAGE = "settings_page", s.WORKERS_PAGE = "workers_page", s
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
			let l = function(s) {
				return s[s.Verified = 0] = "Verified", s[s.Pending = 1] = "Pending", s[s.Missing = 2] = "Missing", s[s.WorkerNotFound = 3] = "WorkerNotFound", s[s.Unknown = 4] = "Unknown", s[s.Loading = 5] = "Loading", s
			}({});
			const f = {
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
					return u
				},
				xr: function() {
					return v
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function l(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						c = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), c.forEach(function(i) {
						f(t, i, a[i])
					})
				}
				return t
			}

			function f(t, r, a) {
				return r = s(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function s(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var c = a.call(t, r || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let u = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.SEQUENCE_RULES = "Sequence Rules", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
			}({});
			const p = {
					[u.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[u.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[u.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[u.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[u.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[u.JWT_VALIDATION]: {
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
					[u.SETTINGS]: {
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
				v = ({
					name: t,
					category: r = "user journey",
					product: a = u.MAIN,
					productName: c,
					additionalData: i
				}) => {
					o().sendEvent(t, l({
						category: r,
						product: a,
						productName: c
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
					return l
				},
				h1: function() {
					return o
				}
			});
			let e = function(f) {
					return f.INITIAL_FETCH_SCORES = "view bots scores distribution", f.FETCH_CONFIGURATION = "view bots configuration page", f.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", f.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", f.UPDATE_SETTINGS = "update bots settings", f.DELETE_RULE = "delete bots ruleset", f.UPDATE_RULE = "update bots ruleset", f.FETCH_RULES = "view bots ruleset", f.CONFIGURE_BOT_MANAGEMENT = "view bots management", f.WAF_RULES_REDIRECT = "redirect waf rules", f
				}({}),
				o = function(f) {
					return f.PROVIDED_TEMPLATE = "provided template link in detection card", f.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", f.USE_TEMPLATE = "use template", f.CREATE_FIREWALL_RULE = "create firewall rule", f.WAF_RULES = "waf rules", f
				}({});
			const l = "user journey"
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
					return l
				},
				x4: function() {
					return f
				}
			});
			let e = function(s) {
				return s.DELETE = "delete", s.CREATE = "create", s.GET = "get", s.UPDATE = "update", s
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
				l = (s, m) => {
					var u;
					return `${m} ${(u=o[s])!==null&&u!==void 0?u:s} rule${m===e.GET?"s":""}`
				},
				f = () => {
					var s, m;
					return (s = Object.keys(o)) === null || s === void 0 || (m = s.map(u => {
						var p;
						return (p = Object.values(e)) === null || p === void 0 ? void 0 : p.map(v => l(u, v))
					})) === null || m === void 0 ? void 0 : m.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				AS: function() {
					return m
				},
				IK: function() {
					return r
				},
				Ki: function() {
					return l
				},
				Lz: function() {
					return a
				},
				nT: function() {
					return p
				},
				o4: function() {
					return c
				},
				oY: function() {
					return f
				},
				qH: function() {
					return t
				},
				x3: function() {
					return u
				}
			});
			var e = n("../react/pages/firewall/analytics/labels.ts"),
				o = n("../react/common/constants/analytics/botScoreSrc.ts");
			const l = ["block", "challenge", "jschallenge", "managedChallenge"],
				f = ["miss", "expired", "bypass", "dynamic"],
				s = i => Object.fromEntries(Object.entries(i).map(([d, E]) => [E, d])),
				m = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				u = s(m),
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
				v = s(p),
				t = s(o.EG);
			let r = function(i) {
				return i.SAMPLED = "sampled", i.RAW = "raw", i
			}({});
			const a = "security-analytics-log-explorer";
			let c = function(i) {
				return i.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', i.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', i.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', i.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', i.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', i
			}({})
		},
		"../react/pages/firewall/settings/cards/security-txt/helpers.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				$E: function() {
					return t
				},
				Mb: function() {
					return r
				},
				Q4: function() {
					return c
				},
				QF: function() {
					return v
				},
				Wv: function() {
					return a
				},
				vc: function() {
					return i
				}
			});
			var e = n("../react/pages/firewall/settings/cards/security-txt/types.ts"),
				o = n("../../../../node_modules/yup/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				f = n("../react/pages/analytics/common/utils/gqlUtils.js");

			function s(d) {
				for (var E = 1; E < arguments.length; E++) {
					var T = arguments[E] != null ? Object(arguments[E]) : {},
						h = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(T).filter(function(C) {
						return Object.getOwnPropertyDescriptor(T, C).enumerable
					})), h.forEach(function(C) {
						m(d, C, T[C])
					})
				}
				return d
			}

			function m(d, E, T) {
				return E = u(E), E in d ? Object.defineProperty(d, E, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[E] = T, d
			}

			function u(d) {
				var E = p(d, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function p(d, E) {
				if (typeof d != "object" || d === null) return d;
				var T = d[Symbol.toPrimitive];
				if (T !== void 0) {
					var h = T.call(d, E || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(d)
			}
			const v = {
					[e.T.ENABLED]: !0,
					[e.T.CONTACT]: [""],
					[e.T.EXPIRES]: ""
				},
				t = {
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
				r = d => o.Ry({
					[e.T.CONTACT]: o.IX().of(o.Z_().required(d("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, d("security_txt.fields.contact.format_error"))),
					[e.T.EXPIRES]: o.hT().required(d("common.required")).min(new Date, d("security_txt.fields.expires.min_error"))
				}),
				a = d => {
					const E = {};
					for (const T in d) E[T] = Array.isArray(d[T]) ? d[T].filter(h => !!h) : d[T];
					return s({}, E, {
						expires: (0, f.DZ)(d.expires)
					})
				},
				c = (d, E, T) => {
					const h = [...new Set([e.T.CONTACT, e.T.EXPIRES, ...Object.values(e.T)])],
						C = Object.entries(d).sort(([D], [b]) => h.indexOf(D) - h.indexOf(b)).filter(([D, b]) => !!t[D] && !!b && (!Array.isArray(b) || !!b.length)).map(([D, b]) => Array.isArray(b) ? b.map(_ => `${T(t[D].label)}: ${_}`).join(`
`) : `${T(t[D].label)}: ${b}`).join(`
`);
					(0, l.yH)(`Cloudflare_${E}_security.txt`, C, "text/plain;charset=utf-8")
				};
			let i = function(d) {
				return d.CREATED = "created security.txt", d.ENABLED = "enabled security.txt", d.DISABLED = "disabled security.txt", d.DOWNLOADED = "downloaded security.txt", d.UPDATED = "updated security.txt", d.DELETED = "deleted security.txt", d
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
		"../react/pages/firewall/settings/labels/api/helpers.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Mi: function() {
					return C
				},
				hL: function() {
					return h
				}
			});
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/zoneSelectors.ts"),
				l = n("../react/common/utils/useQueryCache.ts"),
				f = n("../react/pages/firewall/settings/resources/constants/index.ts"),
				s = n("../react/common/hooks/useAccountId.ts"),
				m = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				u = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const p = {
				labels: (0, u.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, u.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, u.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, u.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, u.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, u.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, u.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, u.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var v = n("../../../../node_modules/lodash/lodash.js"),
				t = n("../react/pages/firewall/settings/resources/utils/index.ts"),
				r = n("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(b, _) {
				if (b == null) return {};
				var S = c(b, _),
					G, j;
				if (Object.getOwnPropertySymbols) {
					var $ = Object.getOwnPropertySymbols(b);
					for (j = 0; j < $.length; j++) G = $[j], !(_.indexOf(G) >= 0) && (!Object.prototype.propertyIsEnumerable.call(b, G) || (S[G] = b[G]))
				}
				return S
			}

			function c(b, _) {
				if (b == null) return {};
				var S = {},
					G = Object.keys(b),
					j, $;
				for ($ = 0; $ < G.length; $++) j = G[$], !(_.indexOf(j) >= 0) && (S[j] = b[j]);
				return S
			}

			function i(b) {
				for (var _ = 1; _ < arguments.length; _++) {
					var S = arguments[_] != null ? Object(arguments[_]) : {},
						G = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(S).filter(function(j) {
						return Object.getOwnPropertyDescriptor(S, j).enumerable
					})), G.forEach(function(j) {
						d(b, j, S[j])
					})
				}
				return b
			}

			function d(b, _, S) {
				return _ = E(_), _ in b ? Object.defineProperty(b, _, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[_] = S, b
			}

			function E(b) {
				var _ = T(b, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function T(b, _) {
				if (typeof b != "object" || b === null) return b;
				var S = b[Symbol.toPrimitive];
				if (S !== void 0) {
					var G = S.call(b, _ || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(b)
			}
			const h = b => {
					const _ = (0, e.p4)(o.Cu),
						S = (0, s.F)(),
						G = D.labels(i({
							accountId: S,
							zoneId: _
						}, b ? i({}, b) : {})),
						j = (0, l.o)(G);
					return i({
						zoneId: _,
						queryKey: G,
						batchInvalidateLabels: async () => {
							await j.batchInvalidate({
								queryKeysToPredicateInvalidate: [f.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, j)
				},
				C = {
					getLabels: async b => {
						var _, S, G, j;
						let {
							zoneId: $,
							hideErrorAlert: Z = !0
						} = b, k = a(b, ["zoneId", "hideErrorAlert"]);
						return (await m.get(p.labels.toUrl({
							zoneId: $
						}), {
							parameters: {
								page: k == null ? void 0 : k.page,
								per_page: k == null ? void 0 : k.per_page,
								with_mapped_resource_counts: k == null ? void 0 : k.with_mapped_resource_counts,
								filter: k == null || (_ = k.filters) === null || _ === void 0 ? void 0 : _.search,
								source: (0, t.sQ)(k == null || (S = k.filters) === null || S === void 0 ? void 0 : S.source),
								order: k == null || (G = k.sort) === null || G === void 0 ? void 0 : G.id,
								direction: (k == null ? void 0 : k.sort) ? (k == null || (j = k.sort) === null || j === void 0 ? void 0 : j.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: Z
						})).body
					},
					getLabel: async b => {
						let {
							zoneId: _,
							labelName: S,
							hideErrorAlert: G = !0
						} = b, j = a(b, ["zoneId", "labelName", "hideErrorAlert"]);
						const $ = (0, t.mm)(S) ? p.managedLabel.toUrl({
							zoneId: _,
							labelName: S
						}) : p.userLabel.toUrl({
							zoneId: _,
							labelName: S
						});
						return (await m.get($, {
							parameters: {
								with_mapped_resource_counts: j == null ? void 0 : j.with_mapped_resource_counts
							},
							hideErrorAlert: G
						})).body
					},
					editLabel: async ({
						zoneId: b,
						label: _,
						replace: S
					}) => {
						const {
							name: G
						} = _, j = a(_, ["name"]);
						return (await (S ? m.put : m.patch)(p.userLabel.toUrl({
							zoneId: b,
							labelName: _.name
						}), {
							body: j
						})).body
					},
					deleteLabel: async ({
						zoneId: b,
						labelName: _
					}) => (await m.del(p.userLabel.toUrl({
						zoneId: b,
						labelName: _
					}))).body,
					createLabel: async b => {
						let {
							zoneId: _
						} = b, S = a(b, ["zoneId"]);
						const {
							product: G
						} = S, j = a(S, ["product"]);
						return (await m.post(p.userLabels.toUrl({
							zoneId: _
						}), {
							body: [j]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: b,
						user: _,
						managed: S,
						operationIds: G,
						replace: j
					}) => (await (j ? m.put : m.post)(p.operationsLinkedToLabels.toUrl({
						zoneId: b
					}), {
						body: i({}, _ ? {
							user: {
								labels: _
							}
						} : {}, S ? {
							managed: {
								labels: S
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: G
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: b,
						labelName: _,
						operationIds: S
					}) => {
						const G = (0, t.mm)(_) ? p.managedLabelOperations.toUrl({
							zoneId: b,
							labelName: _
						}) : p.userLabelOperations.toUrl({
							zoneId: b,
							labelName: _
						});
						return (await m.put(G, {
							body: {
								selector: {
									include: {
										operation_ids: S
									}
								}
							}
						})).body
					}
				},
				D = {
					labels: b => {
						let {
							accountId: _,
							zoneId: S
						} = b, G = a(b, ["accountId", "zoneId"]);
						return [f.IQ.LABELS, _, S, ...(0, v.isEmpty)(G) ? [] : [G]]
					}
				}
		},
		"../react/pages/firewall/settings/labels/api/hooks/useGetLabel.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				E: function() {
					return v
				},
				V: function() {
					return t
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/react-query/es/index.js"),
				f = n("../react/pages/firewall/settings/labels/api/helpers.ts");

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var c = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(c).filter(function(d) {
						return Object.getOwnPropertyDescriptor(c, d).enumerable
					})), i.forEach(function(d) {
						m(r, d, c[d])
					})
				}
				return r
			}

			function m(r, a, c) {
				return a = u(a), a in r ? Object.defineProperty(r, a, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = c, r
			}

			function u(r) {
				var a = p(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function p(r, a) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var i = c.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const v = r => {
					const {
						queryKey: a,
						zoneId: c
					} = (0, f.hL)(r), {
						isLoading: i,
						isError: d,
						isSuccess: E,
						data: T,
						refetch: h,
						isRefetching: C
					} = (0, l.useQuery)({
						queryKey: a,
						queryFn: () => f.Mi.getLabel(s({
							zoneId: c
						}, r)),
						enabled: !!(r == null ? void 0 : r.labelName)
					});
					return {
						data: T == null ? void 0 : T.result,
						errors: T == null ? void 0 : T.errors,
						paginationData: T == null ? void 0 : T.result_info,
						isLoading: i,
						isError: d,
						isSuccess: E,
						refetch: h,
						isRefetching: C
					}
				},
				t = r => {
					const a = (0, l.useQueryClient)(),
						{
							queryKey: c,
							zoneId: i
						} = (0, f.hL)(r),
						d = (0, e.useCallback)(async ({
							labelName: T
						}) => {
							if (!T) throw new Error("Error: unable to get label; missing label name");
							return await f.Mi.getLabel(s({
								zoneId: i,
								labelName: T
							}, r))
						}, [i, r]);
					return {
						getLabel: (0, e.useCallback)(async ({
							labelName: T
						}) => await a.fetchQuery(c, () => d({
							labelName: T
						}), {
							staleTime: 0,
							cacheTime: 0
						}), [a, c, d])
					}
				}
		},
		"../react/pages/firewall/settings/resources/constants/constants.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				DG: function() {
					return i
				},
				GE: function() {
					return b
				},
				IQ: function() {
					return f
				},
				KV: function() {
					return m
				},
				QH: function() {
					return r
				},
				V: function() {
					return h
				},
				W3: function() {
					return l
				},
				_8: function() {
					return v
				},
				_c: function() {
					return C
				},
				aW: function() {
					return d
				},
				gY: function() {
					return D
				},
				jz: function() {
					return a
				},
				n5: function() {
					return E
				},
				pZ: function() {
					return t
				},
				wq: function() {
					return s
				},
				zF: function() {
					return _
				}
			});
			var e = n("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				o = n("../react/pages/firewall/settings/resources/constants/labelsTableProperties.tsx");
			const l = "all";
			let f = function(S) {
					return S.LABELS = "labels", S
				}({}),
				s = function(S) {
					return S.USER = "user", S.MANAGED = "managed", S
				}({}),
				m = function(S) {
					return S.SOURCE = "source", S
				}({});
			const v = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: o.o.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[m.SOURCE]: l
					}
				},
				filters: m,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					autoClearQs: !0
				}
			};
			let t = function(S) {
				return S.CREATED_LABEL = "createdLabel", S.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", S.DELETED_LABEL = "deletedLabel", S.APPLIED_LABEL = "appliedLabel", S.EDITED_LABEL = "editedLabel", S.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", S
			}({});
			const r = "650px",
				a = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				c = /^[\x20-\x7E]+$/,
				i = /^[A-Za-z0-9-]+$/,
				d = /^cf-/;
			let E = function(S) {
				return S.NAME = "name", S.DESCRIPTION = "description", S
			}({});
			const T = "all";
			let h = function(S) {
				return S.METHOD = "method", S.HOSTNAME = "hostname", S
			}({});
			const C = {
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
						[h.METHOD]: T,
						[h.HOSTNAME]: T
					}
				},
				filters: h
			};
			let D = function(S) {
				return S.TITLE = "title", S.DESCRIPTION = "description", S.SUBMIT = "submit", S
			}({});
			const b = 1e3,
				_ = {
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
				}
		},
		"../react/pages/firewall/settings/resources/constants/index.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				gY: function() {
					return e.gY
				},
				aW: function() {
					return e.aW
				},
				W3: function() {
					return e.W3
				},
				jz: function() {
					return e.jz
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return f
				},
				n5: function() {
					return e.n5
				},
				IQ: function() {
					return e.IQ
				},
				_c: function() {
					return e._c
				},
				V: function() {
					return e.V
				},
				j8: function() {
					return l
				},
				LABELS_LIST_TOASTS: function() {
					return e.pZ
				},
				_8: function() {
					return e._8
				},
				KV: function() {
					return e.KV
				},
				om: function() {
					return o.o
				},
				zF: function() {
					return e.zF
				},
				LABEL_SOURCES: function() {
					return e.wq
				},
				GE: function() {
					return e.GE
				},
				QH: function() {
					return e.QH
				}
			});
			var e = n("../react/pages/firewall/settings/resources/constants/constants.tsx"),
				o = n("../react/pages/firewall/settings/resources/constants/labelsTableProperties.tsx");
			let l = function(s) {
					return s.ENDPOINT = "endpoint", s.METHOD = "method", s.OPERATION_ID = "operationId", s
				}({}),
				f = function(s) {
					return s.NAME = "name", s.SOURCE = "source", s.NEW_LABEL_NAME = "newLabelName", s
				}({})
		},
		"../react/pages/firewall/settings/resources/constants/labelsTableProperties.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				o: function() {
					return e
				}
			});
			let e = function(o) {
				return o.NAME = "name", o.MAPPED_RESOURCES = "mapped_resources.operations", o.SOURCE = "source", o.APPLY = "apply", o
			}({})
		},
		"../react/pages/firewall/settings/resources/utils/index.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Iv: function() {
					return s.Iv
				},
				ZF: function() {
					return s.ZF
				},
				Vy: function() {
					return o
				},
				mm: function() {
					return f
				},
				m8: function() {
					return s.m8
				},
				sQ: function() {
					return l
				},
				vU: function() {
					return t
				},
				vE: function() {
					return T
				},
				u_: function() {
					return b
				},
				rP: function() {
					return v
				}
			});
			var e = n("../react/pages/firewall/settings/resources/constants/index.ts");
			const o = _ => (_ == null ? void 0 : _.source) === e.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (_ == null ? void 0 : _.source) === e.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				l = _ => _ === e.W3 ? void 0 : _,
				f = _ => e.aW.test(_);
			var s = n("../react/pages/firewall/settings/resources/utils/tracking.ts"),
				m = n("webpack/sharing/consume/default/react/react"),
				u = n("../../../../node_modules/lodash/lodash.js"),
				p = n("../react/pages/firewall/settings/labels/api/hooks/useGetLabel.ts");
			const v = () => {
					const [_, S] = (0, m.useState)(!0), [G, j] = (0, m.useState)(!1), [$, Z] = (0, m.useState)(!1), {
						getLabel: k
					} = (0, p.V)(), F = (0, m.useRef)(null), ne = (0, m.useRef)(""), Y = (0, m.useCallback)(async W => {
						j(!0);
						try {
							const {
								success: U
							} = await k({
								labelName: W
							});
							S(!U), ne.current = W
						} catch {
							S(!0)
						} finally {
							j(!1), Z(!1)
						}
					}, [k]), re = (0, m.useCallback)(W => {
						F.current || (F.current = (0, u.debounce)(Y, 400)), Z(!0), F.current(W)
					}, [Y]), te = (0, m.useCallback)(W => {
						const {
							value: U
						} = W.target;
						re(U)
					}, [re]), pe = (0, m.useCallback)(async W => {
						($ || W !== ne.current) && (F.current && F.current.cancel(), await Y(W))
					}, [$, Y]);
					return {
						isLabelUnique: _,
						setIsLabelUnique: S,
						handleInputChange: te,
						isLoading: G,
						isCheckPending: $,
						ensureChecked: pe
					}
				},
				t = ({
					modalHeaderFixedHeight: _ = 62,
					modalDefaultPaddings: S = 16
				} = {}) => {
					const G = (0, m.useRef)(null),
						j = (0, m.useRef)(null),
						[$, Z] = (0, m.useState)(0),
						[k, F] = (0, m.useState)(0),
						ne = `calc(100vh - ${$}px - ${k}px - ${S}px)`,
						[Y, re] = (0, m.useState)("");
					return (0, m.useEffect)(() => {
						const te = () => {
							var pe, W, U, w;
							const K = G == null || (pe = G.current) === null || pe === void 0 ? void 0 : pe.offsetHeight,
								ee = j == null || (W = j.current) === null || W === void 0 ? void 0 : W.offsetHeight,
								ae = ((U = K) !== null && U !== void 0 ? U : 0) + _,
								N = (w = ee) !== null && w !== void 0 ? w : 0;
							Z(ae), F(N)
						};
						return te(), window.addEventListener("resize", te), () => window.removeEventListener("resize", te)
					}, []), {
						searchTerm: Y,
						setSearchTerm: re,
						scrollableSectionMaxHeight: ne,
						topMenuRef: G,
						bottomMenuRef: j
					}
				};
			var r = n("../react/common/hooks/useZoneEntitlement.ts"),
				a = n("../react/common/hooks/useGate.ts");
			const c = "central_endpoint_list.endpoint_labels_allowed",
				i = "system-and-user-generated-labels",
				d = () => !!(0, a.Z)(i),
				E = () => !!(0, r.Z)(c),
				T = () => {
					const _ = d(),
						S = E();
					return {
						isLabelsGateOpen: _,
						hasEndpointLabelsEntitlement: S,
						hasLabels: _ && S
					}
				};
			var h = n("../../../../node_modules/yup/es/index.js"),
				C = n("../react/utils/translator.tsx"),
				D = n("../react/pages/firewall/settings/resources/constants/constants.tsx");
			const b = () => {
				const {
					t: _
				} = (0, C.QT)(), S = h.Z_().required(_("common.field_is_required")).max(24, _("labels.apply.form.name.error.max_characters")).matches(D.DG, _("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", _("labels.apply.form.name.error.cf_forbidden"), $ => !D.aW.test($)), G = {
					NAMES: {
						CREATE: "labels-create-form",
						EDIT: "labels-edit-form",
						APPLY: "labels-apply-form"
					},
					INITIAL_VALUES: {
						name: "",
						description: ""
					},
					VALIDATION_SCHEMA: $ => h.Ry().shape({
						[D.n5.NAME]: $ ? h.Z_() : S,
						[D.n5.DESCRIPTION]: $ ? h.Z_().optional() : h.Z_().max(150, _("labels.apply.form.description.error.max_characters"))
					})
				}, j = {
					NAME: "edit-labels-modal-form",
					INITIAL_VALUES: {
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.NAME]: "",
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.SOURCE]: D.W3,
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.NEW_LABEL_NAME]: ""
					},
					VALIDATION_SCHEMA: () => h.Ry().shape({
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.NEW_LABEL_NAME]: S
					})
				};
				return {
					LABELS_APPLY_FORM: G,
					EDIT_LABELS_MODAL_FORM: j
				}
			}
		},
		"../react/pages/firewall/settings/resources/utils/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Iv: function() {
					return p
				},
				QJ: function() {
					return a
				},
				R: function() {
					return u
				},
				Tf: function() {
					return c
				},
				ZF: function() {
					return v
				},
				eC: function() {
					return r
				},
				m8: function() {
					return i
				},
				tR: function() {
					return t
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function l(d) {
				for (var E = 1; E < arguments.length; E++) {
					var T = arguments[E] != null ? Object(arguments[E]) : {},
						h = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(T).filter(function(C) {
						return Object.getOwnPropertyDescriptor(T, C).enumerable
					})), h.forEach(function(C) {
						f(d, C, T[C])
					})
				}
				return d
			}

			function f(d, E, T) {
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
					var h = T.call(d, E || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(d)
			}
			let u = function(d) {
					return d.LABELS_LIST = "Labels List page", d.LABELS_APPLY = "Labels Apply page", d.LABELS_SIDE_MODAL = "Labels Side Modal", d.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", d.LABELS_OPERATION_DETAILS = "Operation Details page", d
				}({}),
				p = function(d) {
					return d.API_SHIELD = "API Shield", d.SECURITY_SETTINGS = "Security Settings", d
				}({}),
				v = function(d) {
					return d.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", d.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", d.OPERATIONS_TABLE_ROW = "Operations table row", d.OPERATION_DETAILS_PAGE = "Operation details page", d
				}({}),
				t = function(d) {
					return d.UPSERT = "upsert", d.OVERWRITE = "overwrite", d
				}({}),
				r = function(d) {
					return d.SINGLE = "single", d.MULTIPLE = "multiple", d
				}({}),
				a = function(d) {
					return d.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", d.DELETE_LABEL = "delete a user label in the settings page", d.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", d.CREATE_LABEL_CLICKED = "click create label button in the settings page", d.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", d.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", d.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", d.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", d.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", d.OPEN_LABELS_SIDE_MODAL = "open labels side modal", d.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", d.CREATE_NEW_LABEL = "create a new label", d
				}({});
			const c = ({
					name: d,
					product: E,
					category: T = "user journey",
					pageName: h,
					from: C,
					write_strategy: D,
					type: b,
					target: _
				}) => {
					o().sendEvent(d, l({
						category: T,
						pageName: h,
						product: E
					}, C ? {
						from: C
					} : {}, D ? {
						write_strategy: D
					} : {}, b ? {
						type: b
					} : {}, _ ? {
						target: _
					} : {}))
				},
				i = () => {
					var d;
					return (d = Object.values(a)) === null || d === void 0 ? void 0 : d.flat()
				}
		},
		"../react/pages/home/alerts/config.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				jk: function() {
					return T
				},
				w8: function() {
					return h
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				l = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				f = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function s(C) {
				for (var D = 1; D < arguments.length; D++) {
					var b = arguments[D] != null ? Object(arguments[D]) : {},
						_ = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(b).filter(function(S) {
						return Object.getOwnPropertyDescriptor(b, S).enumerable
					})), _.forEach(function(S) {
						m(C, S, b[S])
					})
				}
				return C
			}

			function m(C, D, b) {
				return D = u(D), D in C ? Object.defineProperty(C, D, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[D] = b, C
			}

			function u(C) {
				var D = p(C, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function p(C, D) {
				if (typeof C != "object" || C === null) return C;
				var b = C[Symbol.toPrimitive];
				if (b !== void 0) {
					var _ = b.call(C, D || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(C)
			}
			const v = "Notifications",
				t = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				c = (0, e.BC)`${a}/destinations`,
				i = (0, e.BC)`${a}/create`,
				d = (0, e.BC)`${i}/${"alertType"}`,
				E = (0, e.BC)`${a}/edit/${"alertId"}`,
				T = s({
					account: r,
					alerts: a,
					destinations: c,
					createAlert: i,
					createAlertWithSelection: d,
					editAlert: E
				}, o._j, l._j),
				h = s({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, f.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				_j: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				l = (0, e.BC)`${o}/pagerduty/connect`,
				f = (0, e.BC)`${o}/pagerduty/register`,
				s = (0, e.BC)`${o}/pagerduty`,
				m = {
					pagerDutyConnect: l,
					pagerDutyRegister: f,
					pagerDutyList: s
				};
			var u = null
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
					return Q
				},
				AN: function() {
					return ye
				},
				AY: function() {
					return Oe
				},
				Am: function() {
					return h
				},
				B2: function() {
					return K
				},
				BB: function() {
					return j
				},
				BF: function() {
					return Me
				},
				BQ: function() {
					return M
				},
				E8: function() {
					return Re
				},
				Fl: function() {
					return ct
				},
				Fu: function() {
					return k
				},
				Gc: function() {
					return Ne
				},
				Hc: function() {
					return Tt
				},
				IO: function() {
					return q
				},
				JK: function() {
					return Qe
				},
				K: function() {
					return _
				},
				LI: function() {
					return rt
				},
				LX: function() {
					return J
				},
				L_: function() {
					return Ve
				},
				Ly: function() {
					return Mt
				},
				M9: function() {
					return _e
				},
				MR: function() {
					return ae
				},
				Mj: function() {
					return P
				},
				NB: function() {
					return Rt
				},
				Or: function() {
					return I
				},
				P5: function() {
					return kt
				},
				PE: function() {
					return be
				},
				Pd: function() {
					return Fe
				},
				Pk: function() {
					return je
				},
				Pp: function() {
					return Xe
				},
				Q1: function() {
					return Z
				},
				Qr: function() {
					return ge
				},
				Qv: function() {
					return xe
				},
				Rp: function() {
					return wt
				},
				Sh: function() {
					return St
				},
				TZ: function() {
					return H
				},
				Tg: function() {
					return it
				},
				Tp: function() {
					return Ee
				},
				Uy: function() {
					return bt
				},
				Vw: function() {
					return ne
				},
				W3: function() {
					return Je
				},
				WR: function() {
					return de
				},
				WX: function() {
					return Le
				},
				XF: function() {
					return Pe
				},
				Xc: function() {
					return fe
				},
				ZB: function() {
					return $
				},
				Zs: function() {
					return Ze
				},
				_f: function() {
					return De
				},
				_k: function() {
					return Ae
				},
				b4: function() {
					return me
				},
				c2: function() {
					return ee
				},
				cE: function() {
					return ht
				},
				dh: function() {
					return et
				},
				fE: function() {
					return $e
				},
				g7: function() {
					return ie
				},
				hO: function() {
					return tt
				},
				hV: function() {
					return Ct
				},
				hk: function() {
					return C
				},
				hr: function() {
					return X
				},
				it: function() {
					return We
				},
				jG: function() {
					return le
				},
				jN: function() {
					return Ye
				},
				m8: function() {
					return W
				},
				nm: function() {
					return ut
				},
				oW: function() {
					return qe
				},
				oc: function() {
					return T
				},
				pH: function() {
					return U
				},
				pi: function() {
					return pe
				},
				rI: function() {
					return N
				},
				s7: function() {
					return Se
				},
				sO: function() {
					return Te
				},
				sg: function() {
					return Ue
				},
				tB: function() {
					return E
				},
				tN: function() {
					return x
				},
				vV: function() {
					return se
				},
				vc: function() {
					return He
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				o = n.n(e),
				l = n("../../../../node_modules/moment/moment.js"),
				f = n.n(l),
				s = n("../../../common/util/types/src/api/domain.ts"),
				m = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				u = n("../react/utils/translator.tsx"),
				p = n("../react/utils/url.ts"),
				v = n("../react/pages/home/domain-registration/config.ts"),
				t = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = n("../react/pages/home/domain-registration/types.ts");

			function a(g) {
				for (var L = 1; L < arguments.length; L++) {
					var ce = arguments[L] != null ? Object(arguments[L]) : {},
						he = Object.keys(ce);
					typeof Object.getOwnPropertySymbols == "function" && he.push.apply(he, Object.getOwnPropertySymbols(ce).filter(function(ke) {
						return Object.getOwnPropertyDescriptor(ce, ke).enumerable
					})), he.forEach(function(ke) {
						c(g, ke, ce[ke])
					})
				}
				return g
			}

			function c(g, L, ce) {
				return L = i(L), L in g ? Object.defineProperty(g, L, {
					value: ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[L] = ce, g
			}

			function i(g) {
				var L = d(g, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function d(g, L) {
				if (typeof g != "object" || g === null) return g;
				var ce = g[Symbol.toPrimitive];
				if (ce !== void 0) {
					var he = ce.call(g, L || "default");
					if (typeof he != "object") return he;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(g)
			}

			function E(g) {
				return g.filter(L => L.isSelected).reduce((L, {
					fees: ce,
					isZoneEntitlementPresent: he
				}) => he || !(0, e.isNumber)(ce == null ? void 0 : ce.transfer_fee) ? L : L + (ce == null ? void 0 : ce.transfer_fee), 0)
			}

			function T(g) {
				return g.filter(L => L.registrar.toLowerCase() === "godaddy")
			}
			const h = "MMM D, YYYY";

			function C(g, L, ce, he) {
				var ke, Ge, mt, gt, ft, Et, Pt, dt, pt, At, _t;
				const we = g[L.name];
				return {
					name: L.name,
					zone: we,
					entitlements: ce,
					registryCheck: he,
					nameservers: L.name_servers,
					isAvailable: L.available,
					lastKnownStatus: L.last_known_status,
					authCode: L.auth_code,
					isEnterpriseZone: (we == null || (ke = we.plan) === null || ke === void 0 ? void 0 : ke.legacy_id) === "enterprise",
					isActiveZone: (we == null ? void 0 : we.status) === "active",
					corResponsesPending: L.cor_responses_pending,
					isCorLocked: L.cor_locked,
					corLockedUntil: L.cor_locked_until ? f()(L.cor_locked_until).format(h) : null,
					isFullZone: (we == null ? void 0 : we.type) == r.xd.Full,
					isLocked: L.locked,
					registrar: L.current_registrar || v.JM,
					zoneId: we == null ? void 0 : we.id,
					currentExpiration: f()(L.expires_at).format(h),
					newExpiration: f()(L.expires_at).add(1, "year").format(h),
					lastEntitledAt: L.last_entitled_at ? new Date(L.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(ce) && !!ce.find(Ot => Ot.id === v.g5 && Ot.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: L.transfer_in && b(L.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: L.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: L.transfer_in,
					transferOut: L.transfer_out,
					autoRenew: L.auto_renew === !0,
					lastTransferredAt: L.last_transferred_at,
					createdAt: L.created_at,
					paymentExpiresAt: f()(L.payment_expires_at).isValid() ? f()(L.payment_expires_at) : f()(L.expires_at).isValid() ? f()(L.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (Ge = L.contacts) === null || Ge === void 0 || (mt = Ge.administrator) === null || mt === void 0 ? void 0 : mt.id,
						[r.l2.Billing]: (gt = L.contacts) === null || gt === void 0 || (ft = gt.billing) === null || ft === void 0 ? void 0 : ft.id,
						[r.l2.Registrant]: (Et = L.contacts) === null || Et === void 0 || (Pt = Et.registrant) === null || Pt === void 0 ? void 0 : Pt.id,
						[r.l2.Technical]: (dt = L.contacts) === null || dt === void 0 || (pt = dt.technical) === null || pt === void 0 ? void 0 : pt.id
					},
					landing: L.landing,
					whois: L.whois,
					emailVerified: L.email_verified,
					materialChanges: S(L.material_changes),
					corChanges: L.cor_changes ? j(Object.assign(a({}, D), L.cor_changes)) : {},
					registryStatuses: L.registry_statuses ? L.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (At = L.domain_protection_services) === null || At === void 0 ? void 0 : At.status
					},
					deletion: {
						isDeletable: L == null || (_t = L.deletion) === null || _t === void 0 ? void 0 : _t.is_deletable
					},
					premiumType: L == null ? void 0 : L.premium_type,
					fees: L == null ? void 0 : L.fees
				}
			}
			const D = {
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

			function b(g) {
				switch (g.enter_auth_code) {
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

			function _(g) {
				let L = g.extensions;
				(L == null ? void 0 : L.application_purpose) && (L == null ? void 0 : L.nexus_category) && (g.extensions = {
					nexusCategory: L.nexus_category,
					applicationPurpose: L.application_purpose
				});
				let ce = a({}, typeof g.id == "string" ? {
					id: g.id
				} : {}, {
					first_name: g.firstName,
					organization: g.organization,
					address: g.address1,
					city: g.city,
					state: g.state || "N/A",
					zip: g.zip,
					country: g.country,
					phone: g.phone,
					email: g.email,
					fax: "",
					last_name: g.lastName,
					address2: g.address2,
					email_verified: g.emailVerified
				}, g.extensions ? {
					extensions: {
						nexus_category: g.extensions.nexusCategory,
						application_purpose: g.extensions.applicationPurpose
					}
				} : {});
				return Ke(ce)
			}

			function S(g) {
				let L = [];
				const ce = {
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
				for (const he in g) {
					const ke = g[he],
						Ge = ce[ke];
					L.push(Ge)
				}
				return L
			}
			const G = g => {
				if (!g) return null;
				let L = g;
				return g.includes("C31") && (L = "C31"), g.includes("C32") && (L = "C32"), L
			};

			function j(g) {
				return a({}, typeof g.id == "string" ? {
					id: g.id
				} : {}, {
					firstName: g.first_name,
					organization: g.organization,
					address1: g.address,
					city: g.city,
					state: g.state,
					zip: g.zip,
					country: g.country,
					phone: g.phone.trim(),
					email: g.email.trim(),
					lastName: g.last_name,
					address2: g.address2,
					emailVerified: g.email_verified
				}, g.extensions ? {
					extensions: {
						nexusCategory: G(g.extensions.nexus_category),
						applicationPurpose: g.extensions.application_purpose
					}
				} : {})
			}

			function $(g = {}) {
				const L = {
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
						}, g.zone && g.zone.plan || {}),
						type: r.xd.Full
					}, g.zone || {}),
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
					}, g.transferConditions || {}),
					transferIn: a({
						unlock_domain: r.lW.UNKNOWN,
						disable_privacy: r.lW.UNKNOWN,
						enter_auth_code: r.lW.UNKNOWN,
						approve_transfer: r.lW.UNKNOWN,
						accept_foa: r.lW.UNKNOWN,
						can_cancel_transfer: !1
					}, g.transferIn || {}),
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
				return Object.assign(L, g)
			}

			function Z(g = {}) {
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
				}, g)
			}

			function k(g) {
				const L = v.Py.concat(v.ui).reduce((ce, he) => a({}, ce, {
					[he]: []
				}), {});
				return g.forEach(ce => {
					let he = F(ce.registrar);
					he in L || (he = v.ui), Ue(ce.name) && (he = "uk"), L[he].push(ce)
				}), Object.keys(L).sort((ce, he) => ce.localeCompare(he)).map(ce => ({
					registrar: ce,
					domains: L[ce]
				})).filter(ce => ce.domains.length > 0)
			}

			function F(g) {
				return g == null ? void 0 : g.toLowerCase().replace(/\s|,|\./g, "")
			}

			function ne(g) {
				if (!g || !g.registrar) return "unknown";
				if (Ue(g.name)) return "uk";
				const L = F(g.registrar);
				return L in v.gM ? L : "unknown"
			}
			const Y = [];

			function re(g) {
				return Y.some(L => g.endsWith("." + L))
			}

			function te(g) {
				return !g.isEnterpriseZone || !Array.isArray(g.entitlements) ? !1 : !!g.entitlements.find(({
					id: L,
					allocation: ce
				}) => L === v.g5 && ce.value === !0)
			}

			function pe(g) {
				var L;
				const ce = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let he = !1,
					ke = null;
				return (L = g.registryStatuses) === null || L === void 0 || L.some(Ge => {
					ce.includes(Ge) && (ke = Ge, he = !0)
				}), [he, ke]
			}

			function W(g, L = !1) {
				if (!g) return [!1, t.keys.cannot_transfer_default];
				if (g.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!g.isFullZone && !te(g)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (g.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (g.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!g.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (!L && bt(g == null ? void 0 : g.premiumType)) return [!1, t.keys.cannot_transfer_domain_premium];
				if (U(g)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let ce;
				for (ce in g.transferConditions)
					if (ce !== "not_premium" && !g.transferConditions[ce]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (re(g.name)) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [he, ke] = pe(g);
				return he && ke ? [!1, t.keys.cannot_transfer_domain_registry_status[ke]] : [!0, ""]
			}

			function U(g) {
				var L, ce;
				return !!g.transferIn && !((L = g.transferConditions) === null || L === void 0 ? void 0 : L.not_started) && !!(Ue(g.name) || ((ce = g.registryStatuses) === null || ce === void 0 ? void 0 : ce.includes(r.rj.PENDING_TRANSFER)))
			}

			function w(g) {
				return !!g.registrar && !!g.currentExpiration
			}

			function K(g, L = !1) {
				const [ce] = W(g, L);
				return w(g) ? Ie(g) ? r.M5.InProgressOrOnCF : ce ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function ee(g) {
				return g.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(g.transferIn.enter_auth_code) || !1
			}

			function ae(g) {
				return g.registrar === "Cloudflare"
			}

			function N(g) {
				return !!(g == null ? void 0 : g.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function P(g) {
				return !!(g == null ? void 0 : g.includes(r.rj.PENDING_TRANSFER))
			}
			const O = "Invalid date";

			function I(g) {
				return g.newExpiration === O ? "Unavailable" : g.newExpiration
			}

			function H(g) {
				return g.currentExpiration === O ? "Unavailable" : g.currentExpiration
			}

			function Q(g) {
				return g.substring(g.indexOf("."))
			}

			function X(g) {
				return g.map(L => L.name).map(L => Q(L)).filter((L, ce, he) => !he.includes(L, ce + 1))
			}

			function me(g) {
				if (v.no) return [!0, ""];
				if (!ae(g)) return [!1, r.ok.NotOnCF];
				if (g.isCorLocked) return [!1, g.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (g.lastTransferredAt) {
					const L = f()(g.lastTransferredAt),
						ce = f().duration(f()().diff(L)).as("days"),
						he = Ue(g.name);
					if (ce < (he ? 1 : 60)) return [!1, he ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (g.createdAt) {
					const L = f()(g.createdAt);
					if (f().duration(f()().diff(L)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function Le(g) {
				return !!(v.Bc || g.transferOut)
			}

			function Ie(g) {
				return ie(g) || ae(g)
			}

			function x(g) {
				return !ie(g) && ae(g)
			}

			function ie(g) {
				return !g || g.lastKnownStatus === "pendingTransfer" || g.lastKnownStatus === "transferFOAPending" || !ae(g) && g.transferConditions && !g.transferConditions.not_started || !1
			}

			function be(g) {
				return !(re(g.name) || g.transferConditions && !g.transferConditions.supported_tld)
			}

			function xe(g) {
				return (g == null ? void 0 : g.includes("/")) ? !0 : g.split("").some(L => L.charCodeAt(0) > 123)
			}

			function je(g) {
				switch (g) {
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

			function He(g) {
				return f()(g.paymentExpiresAt).isBefore(f()())
			}

			function Ye(g) {
				return g.transferIn && g.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function Qe(g) {
				const L = ["CU", "KP", "IR", "SY"];
				return g.filter(ce => !L.includes(ce.code))
			}

			function it(g) {
				if (!!g) return `${g.charAt(0).toUpperCase()}${g.slice(1)}${g.charAt(g.length-1)==="."?"":"."}`
			}

			function Ke(g) {
				const L = {};
				for (const [ce, he] of Object.entries(g)) {
					if (he && typeof he == "string") {
						Object.assign(L, {
							[ce]: he.trim()
						});
						continue
					}
					Object.assign(L, {
						[ce]: he
					})
				}
				return L
			}

			function Ze(g) {
				return f()(g).add(40, "days")
			}

			function Ve(g) {
				const L = g.paymentExpiresAt || g.payment_expires_at,
					ce = Ze(L);
				return f()().isBetween(L, ce)
			}

			function $e(g) {
				var L;
				return !(g == null ? void 0 : g.registryStatuses) || !Array.isArray(g == null ? void 0 : g.registryStatuses) && !(0, e.isString)(g == null ? void 0 : g.registryStatuses) ? !1 : (L = g.registryStatuses) === null || L === void 0 ? void 0 : L.includes(r.rj.REDEMPTION_PERIOD)
			}

			function et(g) {
				var L;
				return !(g == null ? void 0 : g.registryStatuses) || !Array.isArray(g == null ? void 0 : g.registryStatuses) && !(0, e.isString)(g == null ? void 0 : g.registryStatuses) ? !1 : (L = g.registryStatuses) === null || L === void 0 ? void 0 : L.includes(r.rj.PENDING_DELETE)
			}

			function Xe(g) {
				return [".us"].includes(g)
			}

			function We(g) {
				return [".us"].includes(g)
			}

			function tt(g) {
				switch (g) {
					case ".us":
						return B();
					default:
						return []
				}
			}

			function Je(g) {
				switch (g) {
					case ".us":
						return nt;
					default:
						return {}
				}
			}
			const nt = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function B() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([g, L]) => ({
						value: g,
						label: L
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([g, L]) => ({
						value: g,
						label: L
					}))
				}]
			}

			function J(g, L, ce) {
				return L[L.length - 1][ce] === g[ce]
			}

			function ge(g) {
				return Boolean(Object.keys(g).length === 0)
			}

			function Me(g) {
				return f()().add(g, "year").format(h)
			}

			function De({
				accountName: g
			}) {
				var L;
				const ce = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((L = g.toLowerCase().match(ce)) === null || L === void 0 ? void 0 : L[0]) || ""
			}

			function se(g) {
				return !!g.match(m.default.email)
			}

			function le(g) {
				return g === "Registration banned zone error"
			}

			function fe(g) {
				return g == null ? void 0 : g.startsWith("Quote error")
			}

			function _e(g) {
				return g == null ? void 0 : g.startsWith("Invalid acknowledgement")
			}

			function Te(g) {
				return g === (0, u.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function Ae(g) {
				return g === "DNS conflict"
			}

			function Ee(g) {
				return g === s.W7.PENDING_UPDATE
			}

			function Ne(g) {
				return g ? Object.values(s.wR).filter(L => L !== s.wR.OFFBOARDED).includes(g) : !1
			}

			function Se(g) {
				return g ? [s.wR.LOCKED, s.wR.ONBOARDED, s.wR.ONBOARDING_INITIATED, s.wR.PENDING_REGISTRY_LOCK, s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(g) : !1
			}

			function ze(g) {
				return g ? s.wR.UNLOCKED === g : !1
			}

			function st(g) {
				return g ? s.wR.LOCKED === g : !1
			}

			function rt(g) {
				return g ? s.wR.PENDING_REGISTRY_LOCK === g : !1
			}

			function M(g) {
				return g ? [s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(g) : !1
			}

			function q(g) {
				var L;
				return !1
			}

			function de(g) {
				var L;
				return !1
			}

			function ye(g) {
				var L;
				return !1
			}

			function Pe(g) {
				var L;
				return !1
			}

			function Re(g) {
				var L;
				return !1
			}

			function qe(g) {
				return Object.keys(s.wR).find(L => s.wR[L].toLowerCase() === g.toLowerCase())
			}

			function Oe(g) {
				var L;
				const ce = (L = qe(g)) === null || L === void 0 ? void 0 : L.toLowerCase();
				return ce ? t.keys.protection_status[ce] : t.keys.protection_status.unknown
			}

			function Dt(g) {
				return ["com", "net"].includes(g)
			}

			function ct(g) {
				const L = (0, p.pu)(g);
				return Dt(L) ? s.wR.PENDING_REGISTRY_LOCK : s.wR.LOCKED
			}

			function St(g) {
				return (0, p.pu)(g) === "co" ? 5 : 10
			}

			function ut(g, L) {
				return L ? 1 : (0, p.pu)(g) === "co" ? 5 : (0, p.pu)(g) === "org" ? 1 : 10
			}

			function Ue(g) {
				return (0, p.pu)(g) === "uk"
			}

			function ht(g) {
				return (0, p.pu)(g) === "us"
			}

			function wt(g) {
				return f()(g).isValid()
			}

			function Mt(g) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(g)
			}

			function kt(g) {
				return !!(g == null ? void 0 : g.id)
			}

			function Rt(g) {
				return g ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(g) : !1
			}

			function Fe(g) {
				return g ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(g) : !1
			}

			function Ct(g) {
				var L;
				return (g == null ? void 0 : g.lastKnownStatus) ? (L = g.lastKnownStatus) === null || L === void 0 ? void 0 : L.includes("deletionIrredeemable") : !1
			}

			function bt(g) {
				switch (g) {
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

			function Tt(g) {
				if (!g || !g.message) return r.OJ.DEFAULT;
				const {
					message: L
				} = g;
				switch (!0) {
					case L.includes("feature disabled"):
						return r.OJ.FEATURE_DISABLED;
					case L.includes("email unverified"):
						return r.OJ.EMAIL_UNVERIFIED;
					case L.includes("account blocked"):
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
					return v
				},
				Hv: function() {
					return re
				},
				JM: function() {
					return l
				},
				Py: function() {
					return m
				},
				WK: function() {
					return r
				},
				g5: function() {
					return a
				},
				gM: function() {
					return s
				},
				gf: function() {
					return p
				},
				jk: function() {
					return Y
				},
				no: function() {
					return t
				},
				uY: function() {
					return u
				},
				ui: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../flags.ts");
			const l = "Unknown",
				f = "unknown",
				s = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				m = Object.keys(s),
				u = !0,
				p = (0, o.J8)("registrar_mock_data") || !1,
				v = (0, o.J8)("registrar_mock_transfer_out") || !1,
				t = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				a = "cf_registrar.enabled",
				c = "@abcABC1234567890123456",
				i = (0, e.BC)`/${"accountId"}`,
				d = (0, e.BC)`${i}/add-site`,
				E = (0, e.BC)`${i}/domains`,
				T = (0, e.BC)`${E}/${"zoneName"}`,
				h = (0, e.BC)`${T}/configuration`,
				C = (0, e.BC)`${T}/contacts`,
				D = (0, e.BC)`${E}/pricing`,
				b = (0, e.BC)`${E}/protection`,
				_ = (0, e.BC)`${E}/register`,
				S = (0, e.BC)`${_}/checkout`,
				G = (0, e.BC)`${_}/success`,
				j = (0, e.BC)`${E}/tlds`,
				$ = (0, e.BC)`${E}/transfer`,
				Z = (0, e.BC)`${E}/transfer/${"zoneName"}`,
				k = (0, e.BC)`/registrar/accounts/verify_email`,
				F = (0, e.BC)`/registrar/domains/verify_email`,
				ne = (0, e.BC)`${E}/verify-email`,
				Y = {
					addSite: d,
					domains: E,
					domainsDomain: T,
					domainsDomainConfiguration: h,
					domainsDomainContacts: C,
					domainsPricing: D,
					domainsProtection: b,
					domainsRegister: _,
					domainsRegisterCheckout: S,
					domainsRegisterSuccess: G,
					domainsTlds: j,
					domainsTransfer: $,
					domainsTransferZone: Z,
					registrarAccountsVerifyEmail: k,
					registrarDomainsVerifyEmail: F,
					verifyEmail: ne
				},
				re = {
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
				l = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				f = n.n(l),
				s = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function m(a) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						d = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(i).filter(function(E) {
						return Object.getOwnPropertyDescriptor(i, E).enumerable
					})), d.forEach(function(E) {
						u(a, E, i[E])
					})
				}
				return a
			}

			function u(a, c, i) {
				return c = p(c), c in a ? Object.defineProperty(a, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[c] = i, a
			}

			function p(a) {
				var c = v(a, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function v(a, c) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var d = i.call(a, c || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(a)
			}
			let t = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a
			}({});

			function r(a, c, i) {
				if (!(c == null ? void 0 : c.name)) return null;
				f().sendEvent(a, m({
					domain: {
						name: c.name,
						premium: (0, s.Uy)(c == null ? void 0 : c.premiumType),
						paymentExpiresAt: o()(c == null ? void 0 : c.paymentExpiresAt).format()
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
					return u
				},
				L9: function() {
					return t
				},
				N3: function() {
					return v
				},
				zE: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function l(r) {
				for (var a = 1; a < arguments.length; a++) {
					var c = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(c).filter(function(d) {
						return Object.getOwnPropertyDescriptor(c, d).enumerable
					})), i.forEach(function(d) {
						f(r, d, c[d])
					})
				}
				return r
			}

			function f(r, a, c) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = c, r
			}

			function s(r) {
				var a = m(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(r, a) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var i = c.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let u = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r
				}({}),
				p = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				v = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const t = (r, a = {}) => {
				o().sendEvent(r, l({}, a, {
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
					return u
				},
				H8: function() {
					return s
				},
				J: function() {
					return i
				},
				Nz: function() {
					return p
				},
				UQ: function() {
					return E
				},
				Up: function() {
					return f
				},
				W8: function() {
					return v
				},
				Ws: function() {
					return T
				},
				Xg: function() {
					return r
				},
				_j: function() {
					return l
				},
				a4: function() {
					return c
				},
				jS: function() {
					return d
				},
				rF: function() {
					return m
				},
				rG: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/utils/translator.tsx");
			const l = {
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
				f = () => [{
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
				s = h => [{
					value: "low",
					label: h("setting.low")
				}, {
					value: "mid",
					label: h("setting.medium")
				}, {
					value: "high",
					label: h("setting.high")
				}],
				m = h => [{
					value: "request",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				u = h => [{
					value: "unidirectional",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				p = "magic-transit",
				v = "magic-wan",
				t = "gre_tunnel",
				r = "ipsec_tunnel",
				a = 64,
				c = 1476,
				i = "mid",
				d = "reply",
				E = h => [{
					value: void 0,
					label: h("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: h("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: h("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				T = h => [{
					value: "all",
					label: h("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: h("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: h("account.magic_transit.configuration.ipsec_tunnels")
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
					return l
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
				l = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				VZ: function() {
					return f
				},
				lC: function() {
					return l
				},
				r8: function() {
					return o
				},
				uB: function() {
					return s
				}
			});
			var e = n("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				l = "user journey",
				f = {
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
					return l
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
				l = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				gb: function() {
					return t
				},
				iP: function() {
					return G
				},
				xL: function() {
					return h
				},
				rD: function() {
					return $
				},
				oT: function() {
					return i
				},
				i2: function() {
					return Z
				},
				x1: function() {
					return m
				},
				lW: function() {
					return p
				},
				UA: function() {
					return _
				},
				K5: function() {
					return a
				},
				Ii: function() {
					return D
				},
				PJ: function() {
					return j
				},
				bK: function() {
					return E
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				s = n("../node_modules/@cloudflare/elements/es/index.js");
			const m = () => o().createElement(u, null, o().createElement("svg", {
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
				u = (0, l.createComponent)(({
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
				p = () => o().createElement(v, null, o().createElement("svg", {
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
				v = (0, l.createComponent)(({
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
				t = () => o().createElement(r, null, o().createElement(s.Ei, {
					alt: "airplane",
					src: f,
					width: "85%"
				})),
				r = (0, l.createComponent)(({
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
				a = () => o().createElement(c, null, o().createElement("svg", {
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
				c = (0, l.createComponent)(({
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
				i = () => o().createElement(d, null, o().createElement("svg", {
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
				d = (0, l.createComponent)(({
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
				E = () => o().createElement(T, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				T = (0, l.createComponent)(({
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
				h = () => o().createElement(C, null, o().createElement("svg", {
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
				C = (0, l.createComponent)(({
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
				D = () => o().createElement(b, null, o().createElement("svg", {
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
				b = (0, l.createComponent)(({
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
				_ = () => o().createElement(S, null, o().createElement("svg", {
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
				S = (0, l.createComponent)(({
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
				G = () => o().createElement("svg", {
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
				j = () => o().createElement("svg", {
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
				$ = () => o().createElement("svg", {
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
				Z = () => o().createElement("svg", {
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
					return u
				},
				He: function() {
					return s
				},
				N$: function() {
					return m
				},
				Qq: function() {
					return l
				},
				ST: function() {
					return f
				},
				wM: function() {
					return o
				}
			});
			var e = n("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				l = "login-apple-jwt",
				f = "cf-test",
				s = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				m = p => [{
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
				u = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				_: function() {
					return l
				},
				c: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);
			let l = function(s) {
				return s.TEMPLATE_SELECTED = "template selected", s.TEMPLATE_PRODUCT_SELECTED = "template product selected", s.TEMPLATE_SAVE_DRAFT = "template save draft", s.TEMPLATE_CANCEL = "template cancel", s.TEMPLATE_DEPLOY = "template deploy", s
			}({});
			const f = (s, m) => o().sendEvent(s, {
				template_name: m
			})
		},
		"../react/pages/pages/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				A: function() {
					return E
				},
				C1: function() {
					return v
				},
				Dp: function() {
					return $
				},
				HD: function() {
					return C
				},
				IK: function() {
					return s
				},
				L7: function() {
					return l
				},
				Li: function() {
					return d
				},
				Ni: function() {
					return S
				},
				OG: function() {
					return Y
				},
				QF: function() {
					return F
				},
				QV: function() {
					return _
				},
				Sx: function() {
					return D
				},
				Ub: function() {
					return k
				},
				X3: function() {
					return r
				},
				aP: function() {
					return u
				},
				eO: function() {
					return a
				},
				fH: function() {
					return i
				},
				fQ: function() {
					return T
				},
				fR: function() {
					return e
				},
				hE: function() {
					return Z
				},
				iS: function() {
					return h
				},
				ku: function() {
					return j
				},
				nY: function() {
					return b
				},
				w3: function() {
					return f
				},
				wJ: function() {
					return p
				},
				wp: function() {
					return c
				},
				yu: function() {
					return t
				},
				zG: function() {
					return G
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-workers-and-pages",
				l = {
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
				f = "Allow Members - Cloudflare Pages",
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
				u = "production",
				p = 2e3,
				v = 100,
				t = 350,
				r = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				c = 10,
				i = "_headers",
				d = "_redirects",
				E = "_routes.json",
				T = "_worker.js",
				h = "do-a-barrel-roll",
				C = [i, d, E, T],
				D = 1024 * 1024 * 25,
				b = 1e3,
				_ = {
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
				S = 1e5,
				G = 75e3,
				j = "workers",
				$ = "cloudflare_pages_build_caching",
				Z = 2;
			let k = function(re) {
				return re[re.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", re[re.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", re[re.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", re[re.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", re[re.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", re[re.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", re
			}({});
			const F = 1,
				ne = 2,
				Y = 2
		},
		"../react/pages/pages/routes.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Hv: function() {
					return l
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
				l = {
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
				f = s => `${s.subdomain}.pages.dev`
		},
		"../react/pages/pipelines/tracking.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				KO: function() {
					return u
				},
				L9: function() {
					return v
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function l(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						c = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), c.forEach(function(i) {
						f(t, i, a[i])
					})
				}
				return t
			}

			function f(t, r, a) {
				return r = s(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function s(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var c = a.call(t, r || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let u = function(t) {
					return t.LIST_PIPELINES = "list pipelines", t.CREATE_PIPELINE = "create pipeline", t.VIEW_PIPELINE = "view pipeline details", t.DELETE_PIPELINE = "delete pipeline", t.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", t.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", t.CLICK_QUICK_LINK = "click pipeline quick link", t
				}({}),
				p = function(t) {
					return t[t.success = 0] = "success", t[t.failure = 1] = "failure", t
				}({});
			const v = (t, r = {}) => {
				o().sendEvent(t, l({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Hv: function() {
					return l
				},
				Jg: function() {
					return m
				},
				_j: function() {
					return o
				},
				pZ: function() {
					return u
				},
				vF: function() {
					return s
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
				l = {
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
				f = t => {
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
				s = (t, r) => {
					const a = f(r);
					return `https://${t}.${a}`
				},
				m = (t, r, a) => `${s(t,r)}/${a}`,
				u = () => "r2.dev",
				p = t => {
					const r = u();
					return `https://${t}.${r}`
				},
				v = (t, r) => `${p(t)}/${r}`
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Gk: function() {
					return a
				},
				LA: function() {
					return v
				},
				Wk: function() {
					return r
				},
				_V: function() {
					return u
				},
				c5: function() {
					return t
				},
				om: function() {
					return p
				}
			});
			var e = n("../react/pages/security-center/BlockedContent/types.ts"),
				o = n("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function l(c) {
				for (var i = 1; i < arguments.length; i++) {
					var d = arguments[i] != null ? Object(arguments[i]) : {},
						E = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(d).filter(function(T) {
						return Object.getOwnPropertyDescriptor(d, T).enumerable
					})), E.forEach(function(T) {
						f(c, T, d[T])
					})
				}
				return c
			}

			function f(c, i, d) {
				return i = s(i), i in c ? Object.defineProperty(c, i, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = d, c
			}

			function s(c) {
				var i = m(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function m(c, i) {
				if (typeof c != "object" || c === null) return c;
				var d = c[Symbol.toPrimitive];
				if (d !== void 0) {
					var E = d.call(c, i || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}
			const u = "blocked-content-table-tooltip",
				p = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					canceled: "gray"
				},
				v = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				t = {
					[e.$E.Active]: [e.M3.Active, e.M3.InReview],
					[e.$E.Pending]: [e.M3.Pending, e.M3.Canceled]
				},
				r = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: e.fL.EnforcementDate,
						direction: o.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: Object.values(e.GH)
					},
					filters: Object.values(e.GH).reduce((c, i) => l({}, c, {
						[i]: i
					}), {})
				};
			let a = function(c) {
				return c.COPY_URL = "copy blocked content url", c.REQUEST_REVIEW = "request blocked content review", c.ADD_FILTER = "Add filter", c.REMOVE_FILTER = "Remove filter", c
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				$E: function() {
					return e
				},
				GH: function() {
					return l
				},
				M3: function() {
					return o
				},
				fL: function() {
					return f
				}
			});
			let e = function(m) {
					return m.Pending = "pending", m.Active = "active", m
				}({}),
				o = function(m) {
					return m.Active = "active", m.InReview = "in_review", m.Pending = "pending", m.Canceled = "canceled", m
				}({}),
				l = function(m) {
					return m.Domain = "domain", m.Status = "status", m.BlockType = "blockType", m
				}({}),
				f = function(m) {
					return m.EnforcementDate = "enforcementDate", m.BlockType = "blockType", m.Hostname = "hostname", m.Status = "status", m
				}({}),
				s = function(m) {
					return m.Removed = "removed", m.Misclassified = "misclassified", m
				}({})
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
			let e = function(l) {
				return l.LOAD_SCAN_INFO = "load url scan information", l.INITIATE_URL_SCAN = "initiate url scan", l
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
					return v
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function l(r) {
				for (var a = 1; a < arguments.length; a++) {
					var c = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(c).filter(function(d) {
						return Object.getOwnPropertyDescriptor(c, d).enumerable
					})), i.forEach(function(d) {
						f(r, d, c[d])
					})
				}
				return r
			}

			function f(r, a, c) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = c, r
			}

			function s(r) {
				var a = m(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(r, a) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var i = c.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const u = "TURNSTILE";
			let p = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const v = ({
					name: r,
					product: a = u,
					category: c = "user journey",
					page: i,
					additionalData: d = {}
				}) => {
					o().sendEvent(r, l({
						category: c,
						page: i,
						product: a
					}, d || {}))
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
					return b
				},
				CI: function() {
					return C
				},
				IS: function() {
					return u
				},
				L7: function() {
					return s
				},
				Oj: function() {
					return a
				},
				QV: function() {
					return c
				},
				X$: function() {
					return T
				},
				X6: function() {
					return v
				},
				fE: function() {
					return p
				},
				im: function() {
					return d
				},
				rL: function() {
					return t
				},
				wW: function() {
					return m
				}
			});

			function e(_) {
				for (var S = 1; S < arguments.length; S++) {
					var G = arguments[S] != null ? Object(arguments[S]) : {},
						j = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(G).filter(function($) {
						return Object.getOwnPropertyDescriptor(G, $).enumerable
					})), j.forEach(function($) {
						o(_, $, G[$])
					})
				}
				return _
			}

			function o(_, S, G) {
				return S = l(S), S in _ ? Object.defineProperty(_, S, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[S] = G, _
			}

			function l(_) {
				var S = f(_, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function f(_, S) {
				if (typeof _ != "object" || _ === null) return _;
				var G = _[Symbol.toPrimitive];
				if (G !== void 0) {
					var j = G.call(_, S || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(_)
			}
			const s = {
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
							assets: "https://developers.cloudflare.com/workers/static-assets/binding",
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
				u = "40rem",
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
				v = {
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
				c = {
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
					copiedVersionId: "workers copied version id",
					clickedDiscordLink: "clicked sidebar Discord link",
					clickedCommunityLink: "clicked sidebar Community Forum link",
					clickDetailTab: "click worker detail tab",
					clickedBundledUsageModel: "Workers:Clicked Bundled Usage Model",
					clickedUnboundUsageModel: "Workers:Clicked Unbound Usage Model",
					clickedGreenComputeSetting: "Workers:Clicked Green Compute Setting",
					clickedGlobalComputeSetting: "Workers:Clicked Global Compute Setting"
				},
				i = "workers.dev",
				d = "YYYY-MM-DD HH:mm:SS ZZ",
				E = "active",
				T = ["bundled", "unbound", "standard"],
				h = null,
				C = {
					bandaWorkersCI: "banda-workers-ui",
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled"
				};
			let D = function(_) {
				return _[_.NONE = 0] = "NONE", _[_.MISS = 1] = "MISS", _[_.EXPIRED = 2] = "EXPIRED", _[_.UPDATING = 3] = "UPDATING", _[_.STALE = 4] = "STALE", _[_.HIT = 5] = "HIT", _[_.IGNORED = 6] = "IGNORED", _[_.BYPASS = 7] = "BYPASS", _[_.REVALIDATED = 8] = "REVALIDATED", _[_.DYNAMIC = 9] = "DYNAMIC", _[_.STREAM_HIT = 10] = "STREAM_HIT", _[_.DEFERRED = 11] = "DEFERRED", _
			}({});
			const b = [D.HIT, D.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Hv: function() {
					return u
				},
				L: function() {
					return l
				},
				Q9: function() {
					return f
				},
				_j: function() {
					return s
				},
				ky: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = p => `${p}.workers.dev`,
				l = (p, v, t) => `${t?`${t}.`:""}${p}.${o(v)}`,
				f = (p, v, t) => `https://${l(p,v,t)}`,
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
				m = "https://cron-triggers.cloudflareworkers.com",
				u = {
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
						purgeTriggerCache: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/purge_build_cache`,
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
					return l
				},
				Yg: function() {
					return s
				},
				i$: function() {
					return f
				},
				l3: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const l = async ([u, p]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: u,
					variables: p
				})
			})).body, f = async (...u) => (await e.get(...u)).body, s = u => async (p, v) => {
				const t = await fetch(p, v).then(r => r.json());
				return u.assertDecode(t)
			}, m = async (...u) => (await f(...u)).result;
			y.ZP = {
				fetcher: u => Array.isArray(u) ? m(...u) : m(u)
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
						l = {
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

					function f(E) {
						return !!(E && E !== document && E.nodeName !== "HTML" && E.nodeName !== "BODY" && "classList" in E && "contains" in E.classList)
					}

					function s(E) {
						var T = E.type,
							h = E.tagName;
						return !!(h == "INPUT" && l[T] && !E.readOnly || h == "TEXTAREA" && !E.readOnly || E.isContentEditable)
					}

					function m(E) {
						E.getAttribute("is-focus-visible") !== "" && E.setAttribute("is-focus-visible", "")
					}

					function u(E) {
						E.getAttribute("is-focus-visible") === "" && E.removeAttribute("is-focus-visible")
					}

					function p(E) {
						f(document.activeElement) && m(document.activeElement), n = !0
					}

					function v(E) {
						n = !1
					}

					function t(E) {
						!f(E.target) || (n || s(E.target)) && m(E.target)
					}

					function r(E) {
						!f(E.target) || E.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), u(E.target))
					}

					function a(E) {
						document.visibilityState == "hidden" && (e && (n = !0), c())
					}

					function c() {
						document.addEventListener("mousemove", d), document.addEventListener("mousedown", d), document.addEventListener("mouseup", d), document.addEventListener("pointermove", d), document.addEventListener("pointerdown", d), document.addEventListener("pointerup", d), document.addEventListener("touchmove", d), document.addEventListener("touchstart", d), document.addEventListener("touchend", d)
					}

					function i() {
						document.removeEventListener("mousemove", d), document.removeEventListener("mousedown", d), document.removeEventListener("mouseup", d), document.removeEventListener("pointermove", d), document.removeEventListener("pointerdown", d), document.removeEventListener("pointerup", d), document.removeEventListener("touchmove", d), document.removeEventListener("touchstart", d), document.removeEventListener("touchend", d)
					}

					function d(E) {
						E.target.nodeName.toLowerCase() !== "html" && (n = !1, i())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", v, !0), document.addEventListener("pointerdown", v, !0), document.addEventListener("touchstart", v, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", a, !0), c(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
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
					return f
				},
				gm: function() {
					return l
				}
			});
			const e = () => {
					var s, m, u;
					return (s = window) === null || s === void 0 || (m = s.bootstrap) === null || m === void 0 || (u = m.data) === null || u === void 0 ? void 0 : u.security_token
				},
				o = () => {
					var s, m, u;
					return !!((s = n.g.bootstrap) === null || s === void 0 || (m = s.data) === null || m === void 0 || (u = m.user) === null || u === void 0 ? void 0 : u.id)
				},
				l = () => {
					var s, m;
					return !!((s = n.g.bootstrap) === null || s === void 0 || (m = s.data) === null || m === void 0 ? void 0 : m.is_kendo)
				},
				f = () => {
					var s, m, u, p;
					return (s = window) === null || s === void 0 || (m = s.bootstrap) === null || m === void 0 || (u = m.data) === null || u === void 0 || (p = u.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				O5: function() {
					return f
				},
				Xm: function() {
					return l
				},
				kT: function() {
					return u
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
				l = () => (o() || "").indexOf("C0002") !== -1,
				f = () => (o() || "").indexOf("C0003") !== -1,
				s = () => (o() || "").indexOf("C0004") !== -1,
				m = () => (o() || "").indexOf("C0005") !== -1,
				u = t => {
					const r = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				p = () => {
					var t;
					const r = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				v = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				AI: function() {
					return d
				},
				S8: function() {
					return i
				},
				ZW: function() {
					return m
				},
				ay: function() {
					return E
				},
				fh: function() {
					return T
				},
				ly: function() {
					return p
				},
				th: function() {
					return s
				},
				ti: function() {
					return v
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				l = n("../../../common/intl/intl-types/src/index.ts"),
				f = n("../../../common/util/types/src/utils/index.ts");
			const s = "cf-sync-locale-with-cps",
				m = l.Q.en_US,
				u = "en_US",
				p = "cf-locale",
				v = D => (0, f.Yd)(l.Q).find(b => l.Q[b] === D) || u,
				t = [],
				r = [],
				a = [l.Q.de_DE, l.Q.en_US, l.Q.es_ES, l.Q.fr_FR, l.Q.it_IT, l.Q.pt_BR, l.Q.ko_KR, l.Q.ja_JP, l.Q.zh_CN, l.Q.zh_TW],
				c = {
					test: [...a, ...r, ...t],
					development: [...a, ...r, ...t],
					staging: [...a, ...r, ...t],
					production: [...a, ...r]
				},
				i = D => {
					const b = l.Q[D];
					return c.production.includes(b)
				},
				d = () => Object.keys(l.Q).filter(D => i(D)),
				E = D => {
					const b = l.Q[D];
					return r.includes(b)
				},
				T = D => h[D],
				h = {
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
				C = o().locale();
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
			}), o().locale(C)
		},
		"../react/utils/translator.tsx": function(z, y, n) {
			"use strict";
			n.d(y, {
				QT: function() {
					return c
				},
				Vb: function() {
					return u
				},
				Yi: function() {
					return v
				},
				ZP: function() {
					return m
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
				l = n("../../../common/intl/intl-react/src/index.ts"),
				f = n("../flags.ts");
			const s = new o.Z({
				pseudoLoc: (0, f.J8)("is_pseudo_loc")
			});

			function m(i, ...d) {
				return s.t(i, ...d)
			}
			const u = s;

			function p(i, ...d) {
				return markdown(m(i, d))
			}

			function v(i) {
				if (Number(i) !== 0) {
					if (i % 86400 == 0) return m("time.num_days", {
						smart_count: i / 86400
					});
					if (i % 3600 == 0) return m("time.num_hours", {
						smart_count: i / 3600
					});
					if (i % 60 == 0) return m("time.num_minutes", {
						smart_count: i / 60
					})
				}
				return m("time.num_seconds", {
					smart_count: i
				})
			}

			function t(i, d) {
				return i in d ? d[i] : void 0
			}
			const r = l.cC,
				a = l.oc,
				c = l.QT
		},
		"../react/utils/url.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Ct: function() {
					return D
				},
				Fl: function() {
					return ee
				},
				KT: function() {
					return N
				},
				NF: function() {
					return d
				},
				Nw: function() {
					return h
				},
				Pd: function() {
					return T
				},
				Uh: function() {
					return U
				},
				Y_: function() {
					return i
				},
				e1: function() {
					return C
				},
				el: function() {
					return k
				},
				hW: function() {
					return ne
				},
				pu: function() {
					return ae
				},
				qR: function() {
					return Z
				},
				td: function() {
					return E
				},
				uW: function() {
					return re
				}
			});
			var e = n("../node_modules/query-string/query-string.js"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				f = n("../react/pages/stream/routes.ts"),
				s = n("../react/pages/r2/routes.ts"),
				m = n("../react/pages/zoneless-workers/routes.ts"),
				u = n("../react/pages/pages/routes.ts");

			function p(P) {
				for (var O = 1; O < arguments.length; O++) {
					var I = arguments[O] != null ? Object(arguments[O]) : {},
						H = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(I).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(I, Q).enumerable
					})), H.forEach(function(Q) {
						v(P, Q, I[Q])
					})
				}
				return P
			}

			function v(P, O, I) {
				return O = t(O), O in P ? Object.defineProperty(P, O, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[O] = I, P
			}

			function t(P) {
				var O = r(P, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function r(P, O) {
				if (typeof P != "object" || P === null) return P;
				var I = P[Symbol.toPrimitive];
				if (I !== void 0) {
					var H = I.call(P, O || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(P)
			}
			const {
				endsWithSlash: a
			} = l.default, c = (P, O) => {
				const I = P.replace(a, "").split("/");
				return I.slice(0, 2).concat([O]).concat(I.slice(3)).join("/")
			}, i = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), d = P => `/${P.replace(a,"").replace(/^\//,"")}`, E = P => h("add-site", P), T = P => h("billing", P), h = (P, O) => O ? `/${O}${P?`/${P}`:""}` : `/?to=/:account/${P}`, C = () => {
				const P = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return P ? P[1] : null
			}, D = (P, O) => o().stringify(p({}, o().parse(P), O)), b = (P = "") => P.toString().replace(/([\/]{1,})$/, ""), _ = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], S = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, G = /^\/(\w{32,})(\/[^.]*)?/, j = P => _.includes(P), $ = P => !j(P), Z = P => !j(P) && G.test(P), k = P => !j(P) && S.test(P), F = P => S.exec(P), ne = P => {
				if (k(P)) return P.split("/").filter(O => O.length > 0)[1]
			}, Y = P => G.exec(P), re = P => {
				if (Z(P)) {
					const O = Y(P);
					if (O) return O[1]
				}
			}, te = P => Z(P) && P.split("/")[2] === "register-domain", pe = P => te(P) ? P.split("/") : null, W = P => {
				if (k(P)) {
					const [, , , O, I, H, Q, X] = P.split("/");
					return O === "traffic" && I === "load-balancing" && H === "pools" && Q === "edit" && X
				}
			}, U = P => {
				const O = pe(P);
				if (O) return O[3]
			}, w = (P, O) => {
				var I, H;
				return ((I = P.pattern.match(/\:/g)) !== null && I !== void 0 ? I : []).length - ((H = O.pattern.match(/\:/g)) !== null && H !== void 0 ? H : []).length
			}, K = [...Object.values(f.C), ...Object.values(s._j), ...Object.values(m._j), ...Object.values(u._j)].sort(w);

			function ee(P) {
				if (!$(P)) return P;
				for (const X of K)
					if (X.expression.test(P)) return X.pattern;
				const O = pe(P);
				if (O) {
					const [, , X, , ...me] = O;
					return `/:accountId/${X}/:domainName/${me.join("/")}`
				}
				if (W(P)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const H = F(P);
				if (H) {
					const [, , , , X] = H;
					return `/:accountId/:zoneName${X||""}`
				}
				const Q = Y(P);
				if (Q) {
					const [, , X] = Q;
					return `/:accountId${X||""}`
				}
				return P
			}

			function ae(P) {
				if (!!P) try {
					const I = P.split(".").pop();
					if (I && I.length > 0) return I
				} catch {}
			}

			function N(P, O = document.location.href) {
				try {
					const I = new URL(P),
						H = new URL(O);
					if (I.origin === H.origin) return `${I.pathname}${I.search}${I.hash}`
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
					return l
				},
				t: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var f, s;
					return (f = window) === null || f === void 0 || (s = f.build) === null || s === void 0 ? void 0 : s.dashVersion
				},
				l = () => {
					var f;
					return ((0, e.parse)((f = document) === null || f === void 0 ? void 0 : f.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Wi: function() {
					return De
				},
				IM: function() {
					return Me
				},
				yV: function() {
					return J
				},
				Ug: function() {
					return B
				},
				v_: function() {
					return ge
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				l = n("../react/utils/bootstrap.ts"),
				f = n("../react/app/providers/storeContainer.js"),
				s = n("../react/common/selectors/languagePreferenceSelector.ts"),
				m = n("../flags.ts"),
				u = n("../../../../node_modules/cookie/index.js"),
				p = n("../react/utils/url.ts"),
				v = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../../../../node_modules/lodash-es/memoize.js"),
				a = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				c = n("../utils/getDashVersion.ts"),
				i = n("../react/common/selectors/accountSelectors.ts");

			function d(se) {
				for (var le = 1; le < arguments.length; le++) {
					var fe = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(fe).filter(function(Te) {
						return Object.getOwnPropertyDescriptor(fe, Te).enumerable
					})), _e.forEach(function(Te) {
						E(se, Te, fe[Te])
					})
				}
				return se
			}

			function E(se, le, fe) {
				return le = T(le), le in se ? Object.defineProperty(se, le, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : se[le] = fe, se
			}

			function T(se) {
				var le = h(se, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function h(se, le) {
				if (typeof se != "object" || se === null) return se;
				var fe = se[Symbol.toPrimitive];
				if (fe !== void 0) {
					var _e = fe.call(se, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(se)
			}
			const C = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				D = (0, r.Z)(se => {
					try {
						return C.assertDecode((0, u.parse)(se))
					} catch (le) {
						return console.error(le), {}
					}
				}),
				b = se => (le, fe, _e) => {
					try {
						const Se = window.location.pathname,
							ze = (0, f.bh)().getState(),
							st = D(document.cookie),
							rt = d({
								page: (0, p.Fl)(_e.page || window.location.pathname),
								dashVersion: (0, c.t)()
							}, st);
						if (le === "identify") {
							var Te, Ae;
							const M = {
								gates: (0, a.T2)(ze) || {},
								country: (Te = n.g) === null || Te === void 0 || (Ae = Te.bootstrap) === null || Ae === void 0 ? void 0 : Ae.ip_country
							};
							return se(le, fe, d({}, rt, M, _e))
						} else {
							const M = {
								accountId: (0, p.uW)(Se),
								zoneName: (0, p.hW)(Se),
								domainName: (0, p.Uh)(Se)
							};
							if ((0, p.qR)(Se)) {
								var Ee;
								const q = (0, i.D0)(ze);
								M.isEntAccount = q == null || (Ee = q.meta) === null || Ee === void 0 ? void 0 : Ee.has_enterprise_zones
							}
							if ((0, p.el)(Se)) {
								var Ne;
								const q = (0, v.nA)(ze);
								M.zoneId = q == null ? void 0 : q.id, M.plan = q == null || (Ne = q.plan) === null || Ne === void 0 ? void 0 : Ne.legacy_id
							}
							return se(le, fe, d({}, rt, M, _e))
						}
					} catch (Se) {
						return console.error(Se), se(le, fe, _e)
					}
				},
				_ = se => async (le, fe, _e) => {
					try {
						return await se(le, fe, _e)
					} catch (Te) {
						if (console.error(Te), !ge()) throw Te;
						return {
							status: "rejected",
							reason: Te
						}
					}
				};
			var S = n("../react/common/middleware/sparrow/errors.ts"),
				G = n("../react/pages/firewall/bots/tracking.ts"),
				j = n("../react/pages/caching/tracking.tsx"),
				$ = n("../react/pages/turnstile/tracking.ts"),
				Z = n("../react/pages/firewall/settings/resources/utils/index.ts"),
				k = n("../react/pages/magic/packet-captures/constants.ts"),
				F = n("../react/pages/firewall/page-shield/tracking.ts"),
				ne = n("../react/pages/firewall/rulesets/tracking.tsx"),
				Y = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				re = n("../react/pages/spectrum/tracking.tsx"),
				te = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				pe = n("../react/pages/security-center/tracking.ts"),
				W = n("../react/pages/firewall/api-shield/tracking.ts"),
				U = n("../react/pages/home/configurations/lists/tracking.ts"),
				w = n("../react/pages/traffic/load-balancing/tracking.ts"),
				K = n("../react/pages/home/alerts/tracking.ts"),
				ee = n("../react/pages/dns/dns-records/tracking.ts"),
				ae = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				N = n("../react/pages/traffic/argo/tracking.ts"),
				P = n("../react/pages/magic/network-monitoring/constants.ts"),
				O = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				I = n("../react/pages/magic/overview/tracking.ts"),
				H = n("../react/pages/hyperdrive/tracking.ts"),
				Q = n("../react/pages/pipelines/tracking.ts"),
				X = n("../react/pages/home/domain-registration/tracking.ts"),
				me = n("../react/pages/zoneless-workers/constants.ts"),
				Le = n("../react/pages/pages/constants.ts"),
				Ie = n("../react/pages/page-rules/tracking.ts"),
				x = n("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				ie = n("../react/pages/shared-config/sparrowEvents.tsx"),
				be = n("../react/pages/firewall/settings/cards/security-txt/helpers.ts"),
				xe = n("../react/pages/security-center/BlockedContent/constants.ts");
			const He = ((se, le, ...fe) => t.eg.union([t.eg.literal(se), t.eg.literal(le), ...fe.map(_e => t.eg.literal(_e))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", me.QV.clickedDownloadAnalytics, me.QV.clickedPrintAnalytics, me.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Le.QV.toggledPagesSmartPlacement, Le.QV.downloadDemoProject, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", G.N3.INITIAL_FETCH_SCORES, G.N3.FETCH_CONFIGURATION, G.N3.INITIAL_FETCH_TIME_SERIES, G.N3.INITIAL_FETCH_ATTRIBUTES, G.N3.UPDATE_SETTINGS, G.N3.DELETE_RULE, G.N3.UPDATE_RULE, G.N3.FETCH_RULES, G.N3.CONFIGURE_BOT_MANAGEMENT, G.N3.WAF_RULES_REDIRECT, te.F.TOGGLE_TCP_PROTECTION, te.F.GET_TCP_PROTECTION_PREFIXES, te.F.CREATE_TCP_PROTECTION_PREFIXES, te.F.CREATE_TCP_PROTECTION_PREFIX, te.F.UPDATE_TCP_PROTECTION_PREFIX, te.F.DELETE_TCP_PROTECTION_PREFIX, te.F.DELETE_TCP_PROTECTION_PREFIXES, te.F.GET_TCP_PROTECTION_ALLOWLIST, te.F.CREATE_TCP_PROTECTION_ALLOWLIST, te.F.UPDATE_TCP_PROTECTION_ALLOWLIST, te.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, te.F.DELETE_TCP_PROTECTION_ALLOWLIST, te.F.GET_SYN_PROTECTION_RULES, te.F.GET_SYN_PROTECTION_RULE, te.F.CREATE_SYN_PROTECTION_RULE, te.F.UPDATE_SYN_PROTECTION_RULE, te.F.DELETE_SYN_PROTECTION_RULE, te.F.GET_TCP_FLOW_PROTECTION_RULES, te.F.GET_TCP_FLOW_PROTECTION_RULE, te.F.CREATE_TCP_FLOW_PROTECTION_RULE, te.F.UPDATE_TCP_FLOW_PROTECTION_RULE, te.F.DELETE_TCP_FLOW_PROTECTION_RULE, te.F.GET_SYN_PROTECTION_FILTERS, te.F.GET_SYN_PROTECTION_FILTER, te.F.CREATE_SYN_PROTECTION_FILTER, te.F.UPDATE_SYN_PROTECTION_FILTER, te.F.DELETE_SYN_PROTECTION_FILTER, te.F.GET_TCP_FLOW_PROTECTION_FILTERS, te.F.GET_TCP_FLOW_PROTECTION_FILTER, te.F.CREATE_TCP_FLOW_PROTECTION_FILTER, te.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, te.F.DELETE_TCP_FLOW_PROTECTION_FILTER, te.F.GET_DNS_PROTECTION_RULES, te.F.GET_DNS_PROTECTION_RULE, te.F.CREATE_DNS_PROTECTION_RULE, te.F.UPDATE_DNS_PROTECTION_RULE, te.F.DELETE_DNS_PROTECTION_RULE, F.F.MANAGE_PAGE_SHIELD_POLICY, F.F.CONFIGURE_PAGE_SHIELD, F.F.VIEW_DETECTED_CONNECTIONS, F.F.VIEW_DETECTED_SCRIPTS, F.F.VIEW_PAGE_SHIELD_POLICIES, F.F.VIEW_PAGE_SHIELD_SETTINGS, U.y.CREATE_LIST, U.y.DELETE_LIST, U.y.ADD_LIST_ITEM, U.y.DELETE_LIST_ITEM, H.KO.PURCHASE_WORKERS_PAID, H.KO.LIST_CONFIGS, H.KO.CREATE_HYPERDRIVE_CONFIG, H.KO.VIEW_CONFIG_DETAILS, H.KO.UPDATE_CACHING_SETTINGS, H.KO.DELETE_HYPERDRIVE_CONFIG, H.KO.CLICK_HYPERDRIVE_DOCUMENTATION, H.KO.CLICK_GET_STARTED_GUIDE, H.KO.CLICK_CONNECTIVITY_GUIDES, H.KO.CLICK_QUICK_LINK, re.N.CNAME, re.N.IP_ADDRESS, re.N.LB, re.N.UPDATE_CNAME, re.N.UPDATE_IP_ADDRESS, re.N.UPDATE_LB, re.N.DISABLE, j.N.TIERED_CACHE, j.N.CACHE_PURGE, j.N.CACHE_ANALYTICS, ...(0, $.P)(), ...(0, ne.x4)(), ...(0, Z.m8)(), Y.N.CREATE, Y.N.EVENTS, Y.N.ANALYTICS, Y.N.UPDATE, Y.N.GENERATE_PREVIEW, pe.R.INITIATE_URL_SCAN, pe.R.LOAD_SCAN_INFO, pe.v.EXPAND_INSIGHT_ROW, pe.v.CLICK_RESOLVE_BUTTON, pe.v.FOLLOW_RESOLVE_URL, pe.v.MANAGE_INSIGHT, pe.v.CLICK_SCAN_NOW, pe.v.CLICK_EXPORT_INSIGHTS, pe.v.BULK_ARCHIVE, W.Fj[W.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, W.Fj[W.kq.ENDPOINT_MANAGEMENT].detailedMetrics, W.Fj[W.kq.ENDPOINT_MANAGEMENT].createEndpoint, W.Fj[W.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, W.Fj[W.kq.ENDPOINT_MANAGEMENT].deployRouting, W.Fj[W.kq.ENDPOINT_MANAGEMENT].deleteRouting, W.Fj[W.kq.API_DISCOVERY].viewDiscoveredEndpoints, W.Fj[W.kq.API_DISCOVERY].saveDiscoveredEndpoint, W.Fj[W.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, W.Fj[W.kq.SCHEMA_VALIDATION].viewSchemasList, W.Fj[W.kq.SCHEMA_VALIDATION].uploadSchema, W.Fj[W.kq.SCHEMA_VALIDATION].viewSchemaAdoption, W.Fj[W.kq.SCHEMA_VALIDATION].downloadSchema, W.Fj[W.kq.SCHEMA_VALIDATION].deleteSchema, W.Fj[W.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, W.Fj[W.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, W.Fj[W.kq.SEQUENCE_ANALYTICS].viewSequencesPage, W.Fj[W.kq.JWT_VALIDATION].viewJWTRules, W.Fj[W.kq.JWT_VALIDATION].addJWTRule, W.Fj[W.kq.JWT_VALIDATION].editJWTRule, W.Fj[W.kq.JWT_VALIDATION].deleteJWTRule, W.Fj[W.kq.JWT_VALIDATION].reprioritizeJWTRule, W.Fj[W.kq.JWT_VALIDATION].viewJWTConfigs, W.Fj[W.kq.JWT_VALIDATION].addJWTConfig, W.Fj[W.kq.JWT_VALIDATION].editJWTConfig, W.Fj[W.kq.JWT_VALIDATION].deleteJWTConfig, W.Fj[W.kq.SETTINGS].redirectToFirewallRulesTemplate, W.Fj[W.kq.SETTINGS].redirectToPages, W.Fj[W.kq.SETTINGS].listSessionIdentifiers, W.Fj[W.kq.SETTINGS].listRequestsContainingSessionIdentifiers, W.Fj[W.kq.SETTINGS].addOrRemoveSessionIdentifiers, W.Fj[W.kq.SETTINGS].redirectToCustomRules, W.Fj[W.kq.SETTINGS].listAllFallthroughSchemas, W.Fj[W.kq.SEQUENCE_RULES].listSequenceRules, W.Fj[W.kq.SEQUENCE_RULES].deleteSequenceRule, W.Fj[W.kq.SEQUENCE_RULES].reorderSequenceRule, W.Fj[W.kq.SEQUENCE_RULES].createSequenceRule, W.Fj[W.kq.SEQUENCE_RULES].editSequenceRule, w.Z.CREATE_AND_DEPLOY, w.Z.ANALYTICS, K.y.SECONDARY_DNS_NOTIFICATION_CREATE, K.y.SECONDARY_DNS_NOTIFICATION_UPDATE, K.y.SECONDARY_DNS_NOTIFICATION_DELETE, ee.U.ZONE_TRANSFER_SUCCESS, ee.U.DNS_RECORD_CREATE, ee.U.DNS_RECORD_UPDATE, ee.U.DNS_RECORD_DELETE, ae.Y.PEER_DNS_CREATE, ae.Y.PEER_DNS_UPDATE, ae.Y.PEER_DNS_DELETE, ae.Y.ZONE_TRANSFER_ENABLE, ae.Y.ZONE_TRANSFER_DISABLE, N.V.ARGO_ENABLEMENT, N.V.ARGO_GEO_ANALYTICS_FETCH, N.V.ARGO_GLOBAL_ANALYTICS_FETCH, k.X.VIEW_BUCKETS_LIST, k.X.CREATE_BUCKET, k.X.VALIDATE_BUCKET, k.X.DELETE_BUCKET, k.X.VIEW_CAPTURES_LIST, k.X.CREATE_SIMPLE_CAPTURE, k.X.CREATE_FULL_CAPTURE, k.X.VIEW_FULL_CAPTURE, k.X.DOWNLOAD_SIMPLE_CAPTURE, P.bK.VIEW_RULES, P.bK.CREATE_RULE, P.bK.UPDATE_RULE, P.bK.DELETE_RULE, P.bK.VIEW_CONFIGURATION, P.bK.CREATE_CONFIGURATION, P.bK.UPDATE_CONFIGURATION, P.bK.DELETE_CONFIGURATION, I.r8.VIEW_ALERTS, I.r8.VIEW_ALERTS_HISTORY, I.r8.MAGIC_OVERVIEW_ANALYTICS, I.VZ.CREATE_SITE, I.VZ.CREATE_TUNNEL, I.VZ.CREATE_STATIC_ROUTE, O.o4.CLICK_ADAPTIVE_SAMPLING, O.o4.CLICK_TO_LOG_EXPLORER_BANNER, O.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, O.o4.CLICK_SWITCH_TO_RAW_LOGS, O.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", X.U.REGISTER_DOMAIN_SEARCH_SUBMIT, X.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, X.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, X.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, X.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, X.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, X.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, X.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, X.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, X.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, X.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, X.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, X.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, X.U.REGISTER_DOMAIN_CHECKOUT_ERROR, X.U.TRANSFER_DOMAIN_CHANGE_STEP, X.U.RENEW_DOMAIN_COMPLETED, X.U.RESTORE_DOMAIN_INIT, X.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, X.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, X.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, X.U.RESTORE_DOMAIN_FAILURE, X.U.RESTORE_DOMAIN_COMPLETED, X.U.DOMAIN_DELETE_INIT, X.U.DOMAIN_DELETE_COMPLETED, X.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, X.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, X.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, X.U.DOMAIN_DELETE_CONFIRM_DELETE, X.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, X.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, X.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, X.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, X.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, Q.KO.CLICK_GET_STARTED_GUIDE, Q.KO.CLICK_PIPELINE_DOCUMENTATION, Q.KO.CLICK_QUICK_LINK, Q.KO.CREATE_PIPELINE, Q.KO.DELETE_PIPELINE, Q.KO.LIST_PIPELINES, Q.KO.VIEW_PIPELINE, x.S.EXISTING_DOMAIN, x.S.NEW_DOMAIN, x.S.WAF_RULESET, x.S.WORKERS, x.S.PAGES, x.S.R2, x.S.ACCOUNT_MEMBERS, Ie._.TEMPLATE_PRODUCT_SELECTED, Ie._.TEMPLATE_SELECTED, Ie._.TEMPLATE_SAVE_DRAFT, Ie._.TEMPLATE_CANCEL, Ie._.TEMPLATE_DEPLOY, ie.D.CLICK_GO_BACK_SHARE_MODAL, ie.D.CLICK_MENU_ITEM_SHARE, ie.D.CLICK_ON_CANCEL_SHARE_MODAL, ie.D.CLICK_ON_CLOSE_SHARE_MODAL, ie.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, ie.D.CLICK_ON_DELETE_RULESET, ie.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, ie.D.CLICK_ON_EDIT_SHARE_PERMISSION, ie.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, ie.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, be.vc.CREATED, be.vc.ENABLED, be.vc.DISABLED, be.vc.DELETED, be.vc.UPDATED, be.vc.DOWNLOADED, xe.Gk.REQUEST_REVIEW, xe.Gk.COPY_URL),
				Ye = t.eg.exactStrict(t.eg.object({
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
					phase: t.eg.any.optional,
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
					write_strategy: t.eg.any.optional,
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
				Qe = (se, le) => {
					const [fe, _e] = it(le);
					let Te, Ae;
					return (0, t.nM)(He.decode(se)) && (Te = new S.Uh(se)), _e && _e.length > 0 && (Ae = new S.oV(se, _e)), [fe, Te, Ae]
				},
				it = se => {
					const le = Ye.decode(se);
					if ((0, t.nM)(le)) {
						const fe = le.left.map(({
							context: _e
						}) => _e.map(({
							key: Te
						}) => Te)).reduce((_e, Te) => _e.concat(Te), []).filter(_e => _e in se);
						return [Ke(fe, se), fe]
					}
					return [se, []]
				},
				Ke = (se, le) => Object.entries(le).reduce((fe, [_e, Te]) => (se.includes(_e) || (fe[_e] = Te), fe), {}),
				Ze = se => (le, fe, _e) => {
					const [Te, Ae, Ee] = Qe(fe, _e);
					if (Ae) throw Ae;
					return Ee && console.error(Ee), se(le, fe, Te)
				};
			var Ve = n("../react/utils/zaraz.ts");
			const $e = {
					identify: !0
				},
				et = se => (le, fe, _e) => ($e[fe] || Ve.tg === null || Ve.tg === void 0 || Ve.tg.track(fe, _e), se(le, fe, _e));
			var Xe = n("../react/utils/cookiePreferences.ts");

			function We(se) {
				for (var le = 1; le < arguments.length; le++) {
					var fe = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(fe).filter(function(Te) {
						return Object.getOwnPropertyDescriptor(fe, Te).enumerable
					})), _e.forEach(function(Te) {
						tt(se, Te, fe[Te])
					})
				}
				return se
			}

			function tt(se, le, fe) {
				return le = Je(le), le in se ? Object.defineProperty(se, le, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : se[le] = fe, se
			}

			function Je(se) {
				var le = nt(se, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function nt(se, le) {
				if (typeof se != "object" || se === null) return se;
				var fe = se[Symbol.toPrimitive];
				if (fe !== void 0) {
					var _e = fe.call(se, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(se)
			}
			const B = se => {
					o().init(We({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: ge() && !(0, l.gm)() && De(),
						middlewares: [_, Ze, b, et]
					}, se))
				},
				J = () => {
					o().identify(We({}, (0, e.getAttribution)(), {
						locale: (0, s.r)((0, f.bh)().getState()),
						isCloudflare: !!(0, m.Jd)()
					}))
				},
				ge = () => !0,
				Me = () => {
					(0, Xe.kT)("sparrow_id")
				},
				De = () => (0, Xe.Xm)()
		},
		"../utils/initStyles.ts": function(z, y, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../react/app/providers/storeContainer.js");
			const l = "cfBaseStyles",
				f = document.head || document.getElementsByTagName("head")[0],
				s = u => {
					const p = [];
					for (let v in u.colors) {
						const t = u.colors[v];
						if (Array.isArray(t) && v !== "categorical")
							for (let r = 0; r < t.length; ++r) p.push(`--cf-${v}-${r}:${t[r]};`)
					}
					return p.join(`
`)
				},
				m = () => {
					const u = (0, e.Yc)(),
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
      background-color: ${u?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${u?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${u?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${u?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${u?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${u?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
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
					let v = document.getElementById(l);
					v ? v.innerText = "" : (v = document.createElement("style"), v.id = l, f.appendChild(v)), v.appendChild(document.createTextNode(p)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(m), y.Z = m
		},
		"../utils/sentry/lastSentEventId.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let l = "";
				return {
					setEventId: m => (!m || typeof m != "string" || (l = m), l),
					getEventId: () => l
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
					return u
				},
				yn: function() {
					return t
				}
			});

			function e(a) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						d = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(i).filter(function(E) {
						return Object.getOwnPropertyDescriptor(i, E).enumerable
					})), d.forEach(function(E) {
						o(a, E, i[E])
					})
				}
				return a
			}

			function o(a, c, i) {
				return c = l(c), c in a ? Object.defineProperty(a, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[c] = i, a
			}

			function l(a) {
				var c = f(a, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(a, c) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var d = i.call(a, c || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(a)
			}
			const s = {
					track: (a, c) => null,
					set: (a, c) => console.log(`zaraz.set(${a}, ${c})`)
				},
				m = {
					track: (a, c) => {
						var i;
						(i = window.zaraz) === null || i === void 0 || i.track(a, e({}, c, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, c) => {
						var i;
						return (i = window.zaraz) === null || i === void 0 ? void 0 : i.set(a, c)
					}
				};
			let u;
			const p = () => {
					window.zaraz, u = m
				},
				v = ["email", "first_name", "last_name"],
				t = a => {
					v.forEach(c => {
						var i;
						(i = u) === null || i === void 0 || i.set(c, a[c])
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
				l = n("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				f = n.n(l),
				s = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = n("../../../common/intl/intl-react/src/index.ts"),
				u = n("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				p = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				v = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				t = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				r = n("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				a = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				c = n("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				i = n("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				d = n("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				E = n("../../../common/component/component-filter-bar/src/constants.js"),
				T = n("../../../common/component/component-filter-bar/src/utils.js");

			function h(U) {
				for (var w = 1; w < arguments.length; w++) {
					var K = arguments[w] != null ? Object(arguments[w]) : {},
						ee = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(K).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(K, ae).enumerable
					})), ee.forEach(function(ae) {
						C(U, ae, K[ae])
					})
				}
				return U
			}

			function C(U, w, K) {
				return w = D(w), w in U ? Object.defineProperty(U, w, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[w] = K, U
			}

			function D(U) {
				var w = b(U, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function b(U, w) {
				if (typeof U != "object" || U === null) return U;
				var K = U[Symbol.toPrimitive];
				if (K !== void 0) {
					var ee = K.call(U, w || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(U)
			}
			const _ = 70,
				S = (0, s.createStyledComponent)(({
					showOverflow: U
				}) => h({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, U ? {} : {
					maxHeight: _,
					overflow: "hidden"
				})),
				G = (0, s.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				j = (0, s.createStyledComponent)(({
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
				$ = (0, s.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				Z = (0, s.createStyledComponent)(({
					theme: U
				}) => ({
					color: U.colors.gray[4],
					mr: 1
				}), "span"),
				k = (0, s.createStyledComponent)(() => ({
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
				F = (0, s.createStyledComponent)(({
					buttonStyle: U
				}) => h({
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
				}, U), p.zx),
				ne = (0, s.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				Y = (0, s.createStyledComponent)(({
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
				re = (0, s.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				te = U => U.current ? [...U.current.children].reduce((w, K) => (K.offsetTop >= _ && w++, w), 0) : 0;
			let pe = 0;
			class W extends e.Component {
				constructor() {
					super();
					C(this, "overflowWrapper", (0, e.createRef)()), C(this, "hasOverflowed", w => {
						const K = te(this.overflowWrapper);
						w.scrollHeight > _ && K >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (w.scrollHeight < _ || K === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), C(this, "addNewFilter", () => {
						const {
							filterDefinitions: w
						} = this.props, K = (0, T.TE)(w), ee = Object.keys(K)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: ee,
								operator: (0, T.uv)(ee, K),
								value: (0, T.TT)(ee, K)
							}
						})
					}), C(this, "handleOpenFilterEdit", w => {
						this.setState({
							openFilter: w,
							filterChanges: h({}, this.props.filters[w])
						})
					}), C(this, "handleRemoveFilterClick", (w, K) => {
						w.stopPropagation(), this.removeFilter(K)
					}), C(this, "removeFilter", w => {
						const {
							handleFiltersChange: K
						} = this.props, ee = [...this.props.filters], ae = ee[w];
						ee.splice(w, 1), K(ee), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: ae.key,
							operator: ae.operator,
							value: ae.value
						})
					}), C(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), C(this, "handleFilterSubmit", w => {
						const {
							filterDefinitions: K
						} = this.props;
						w.preventDefault();
						const {
							filterChanges: ee
						} = this.state, ae = typeof K[ee.key].parse == "function" ? Array.isArray(ee.value) ? ee.value.map(K[ee.key].parse) : K[ee.key].parse(ee.value) : ee.value;
						if (K[ee.key].validate && (Array.isArray(ae) ? !ae.every(K[ee.key].validate) : !K[ee.key].validate(ae))) return this.setState({
							invalid: !0
						});
						const N = [...this.props.filters],
							P = h({}, ee, {
								value: ae
							}),
							O = !N[this.state.openFilter];
						O ? N.push(P) : N[this.state.openFilter] = h({}, ee), this.props.handleFiltersChange(N, P), (O ? this.props.onAddFilter : this.props.onEditFilter)({
							field: P.key,
							operator: P.operator,
							value: P.value
						}), this.closeOpenFilterChanges()
					}), C(this, "handlePendingKeyChange", ({
						value: w
					}) => {
						const {
							filterDefinitions: K
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: w,
								operator: (0, T.uv)(w, K),
								value: (0, T.TT)(w, K)
							}
						})
					}), C(this, "handlePendingOperatorChange", ({
						value: w
					}) => {
						let K = h({}, this.state.filterChanges, {
							operator: w
						});
						if ((0, T.dr)(w)) {
							var ee, ae;
							((ee = this.state.filterChanges) === null || ee === void 0 ? void 0 : ee.value) && !Array.isArray((ae = this.state.filterChanges) === null || ae === void 0 ? void 0 : ae.value) && (K.value = [this.state.filterChanges.value])
						} else {
							var N, P, O;
							((N = this.state.filterChanges) === null || N === void 0 ? void 0 : N.value) && Array.isArray((P = this.state.filterChanges) === null || P === void 0 ? void 0 : P.value) && ((O = this.state.filterChanges) === null || O === void 0 ? void 0 : O.value.length) > 0 && (K.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: K
						})
					}), C(this, "handlePendingValueChange", w => {
						this.setState({
							invalid: !1,
							filterChanges: h({}, this.state.filterChanges, {
								value: w
							})
						})
					}), C(this, "handleShowOverflow", () => {
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
						id: ++pe
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(w) {
					w.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(w) {
					const {
						formatLabel: K,
						filterDefinitions: ee
					} = this.props, {
						operator: ae
					} = this.state.filterChanges, N = ee[this.state.filterChanges.key], P = this.state.filterChanges.value, O = I => Array.isArray(I) ? I.map(H => H.value) : (I == null ? void 0 : I.value) || null;
					if (N.renderValueComponent) return N.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (N.type) {
						case E.k.select:
							return (0, T.dr)(ae) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !N.options,
								value: typeof P.split == "function" ? P == null ? void 0 : P.split(",") : Array.isArray(P) ? P : [],
								options: N.options ? N.options.map(I => ({
									value: I.value || I,
									label: I.label || K(this.state.filterChanges.key, I, w)
								})) : P ? (Array.isArray(P) ? P : P.split(",")).map(I => ({
									label: I,
									value: I
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(m.cC, {
									id: N.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: N.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: I => {
									this.handlePendingValueChange(O(I))
								},
								isValidNewOption: I => {
									const H = N.validate;
									return !H && I || I && H([I])
								},
								getNewOptionData: (I, H) => ({
									value: I,
									label: H
								})
							}) : o().createElement(r.hQ, {
								hideLabel: !0,
								value: P,
								options: N.options.map(I => ({
									value: I,
									label: K(this.state.filterChanges.key, I, w)
								})),
								onChange: ({
									value: I
								}) => this.handlePendingValueChange(I)
							});
						case E.k.string:
						default:
							return (0, T.dr)(ae) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof P.split == "function" ? P == null ? void 0 : P.split(",") : Array.isArray(P) ? P : [],
								options: P ? (Array.isArray(P) ? P : P.split(",")).map(I => ({
									label: I,
									value: I
								})) : [],
								noOptionsMessage: () => null,
								placeholder: w.t("analytics.report.filters.labels.placeholder", {
									example: ee[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: I => {
									this.handlePendingValueChange(O(I))
								},
								isValidNewOption: I => {
									const H = N.validate;
									return !H && I || I && H([I])
								},
								getNewOptionData: (I, H) => ({
									value: I,
									label: H
								}),
								formatCreateLabel: I => w.t("filter_editor.value_create_label", {
									value: I
								})
							}) : o().createElement(m.oc, null, I => o().createElement(u.I, {
								value: this.state.filterChanges.value,
								onChange: H => this.handlePendingValueChange(H.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: I.t("analytics.report.filters.labels.placeholder", {
									example: ee[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: w,
						filterDefinitions: K,
						modalStyles: ee,
						filterIconType: ae,
						buttonStyle: N
					} = this.props, P = te(this.overflowWrapper), O = `filterPanel${this.state.id}`, I = this.state.openFilter !== null;
					return o().createElement(m.oc, null, H => o().createElement(a.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(re, null, o().createElement(F, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": I,
						"aria-controls": O,
						inverted: !0,
						buttonStyle: N
					}, o().createElement(v.J, {
						type: ae || "add",
						mr: 1,
						label: H.t("common.add", {
							_: "Add"
						})
					}), o().createElement(m.cC, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(ne, null, o().createElement(m.cC, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(S, {
						innerRef: this.overflowWrapper,
						overflowLimit: _,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((Q, X) => {
						const {
							key: me,
							operator: Le,
							value: Ie
						} = Q, x = K[me].ignoreLabelTranslation ? K[me].label : H.t(K[me].label), ie = H.t(`analytics.report.filters.operators.${Le}`), be = Array.isArray(Ie) ? Ie.map(je => w(me, je, H)).join(", ") : w(me, Ie, H), xe = `${x} ${ie} ${be}`;
						return o().createElement(G, {
							key: `${me}-${Le}-${Ie}`,
							title: xe
						}, o().createElement(j, {
							onClick: () => this.handleOpenFilterEdit(X)
						}, o().createElement(a.ZC, {
							display: "flex"
						}, o().createElement($, null, x), o().createElement(Z, null, ie), o().createElement(k, null, be), (0, T.oN)(Q, K) ? o().createElement(t.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(Y, {
							onClick: je => this.handleRemoveFilterClick(je, X),
							"aria-label": "remove"
						}, o().createElement(v.J, {
							type: "remove"
						})))))
					})), I && o().createElement(d.Z, {
						id: O,
						filterDefinitions: K,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, T.oN)(this.state.filterChanges, K),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: w,
						modalStyles: ee
					}), this.state.hasOverflowed && o().createElement(i.Z, {
						count: P,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			C(W, "propTypes", {
				filterDefinitions: f().shape({}),
				filters: f().arrayOf(f().shape({
					key: f().string,
					operator: f().string,
					value: f().string
				})),
				handleFiltersChange: f().func.isRequired,
				formatLabel: f().func.isRequired,
				onAddFilter: f().func,
				onEditFilter: f().func,
				onRemoveFilter: f().func,
				children: f().node,
				modalStyles: f().object,
				filterIconType: f().string,
				buttonStyle: f().object
			}), y.Z = W
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
					return l.k
				},
				oN: function() {
					return f.oN
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = n("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				l = n("../../../common/component/component-filter-bar/src/constants.js"),
				f = n("../../../common/component/component-filter-bar/src/utils.js")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				OZ: function() {
					return s
				},
				YB: function() {
					return f
				}
			});

			function e(u, p, v) {
				return p = o(p), p in u ? Object.defineProperty(u, p, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[p] = v, u
			}

			function o(u) {
				var p = l(u, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function l(u, p) {
				if (typeof u != "object" || u === null) return u;
				var v = u[Symbol.toPrimitive];
				if (v !== void 0) {
					var t = v.call(u, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(u)
			}
			class f extends Error {
				constructor(p, v) {
					super(v);
					e(this, "translationKey", void 0), this.translationKey = p, this.name = "TranslatorError"
				}
			}
			class s extends f {
				constructor(p) {
					super(p, `Translation key not found: ${p}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var m = null
		},
		"../../../common/intl/intl-react/src/I18nProvider.tsx": function(z, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(v) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (v[a] = r[a])
					}
					return v
				}, f.apply(this, arguments)
			}

			function s(v, t) {
				if (v == null) return {};
				var r = m(v, t),
					a, c;
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(v);
					for (c = 0; c < i.length; c++) a = i[c], !(t.indexOf(a) >= 0) && (!Object.prototype.propertyIsEnumerable.call(v, a) || (r[a] = v[a]))
				}
				return r
			}

			function m(v, t) {
				if (v == null) return {};
				var r = {},
					a = Object.keys(v),
					c, i;
				for (i = 0; i < a.length; i++) c = a[i], !(t.indexOf(c) >= 0) && (r[c] = v[c]);
				return r
			}
			class u extends e.Component {
				constructor(t) {
					super(t);
					const {
						locale: r,
						phrases: a,
						translator: c
					} = t;
					r && c.locale(r), a && c.extend(a)
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
			const p = v => {
				let {
					translator: t
				} = v, r = s(v, ["translator"]);
				const a = () => e.createElement(l.oc, null, c => e.createElement(u, f({
					translator: c
				}, r)));
				return t ? (t.locale(r.locale), e.createElement(l.bd, {
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
					return G
				},
				cC: function() {
					return D
				},
				QT: function() {
					return _.Q
				}
			});
			var e = n("../../../common/intl/intl-react/src/I18nProvider.tsx"),
				o = n("../../../common/intl/intl-react/src/I18nLoader.tsx"),
				l = n("webpack/sharing/consume/default/react/react"),
				f = n.n(l),
				s = n("../../../../node_modules/lodash/escape.js"),
				m = n.n(s),
				u = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				p = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function v(j) {
				for (var $ = 1; $ < arguments.length; $++) {
					var Z = arguments[$] != null ? Object(arguments[$]) : {},
						k = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(Z).filter(function(F) {
						return Object.getOwnPropertyDescriptor(Z, F).enumerable
					})), k.forEach(function(F) {
						t(j, F, Z[F])
					})
				}
				return j
			}

			function t(j, $, Z) {
				return $ = r($), $ in j ? Object.defineProperty(j, $, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[$] = Z, j
			}

			function r(j) {
				var $ = a(j, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function a(j, $) {
				if (typeof j != "object" || j === null) return j;
				var Z = j[Symbol.toPrimitive];
				if (Z !== void 0) {
					var k = Z.call(j, $ || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(j)
			}

			function c() {
				return c = Object.assign ? Object.assign.bind() : function(j) {
					for (var $ = 1; $ < arguments.length; $++) {
						var Z = arguments[$];
						for (var k in Z) Object.prototype.hasOwnProperty.call(Z, k) && (j[k] = Z[k])
					}
					return j
				}, c.apply(this, arguments)
			}
			const i = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				d = /(?:\r\n|\r|\n)/g;

			function E(j, $, Z) {
				return l.createElement("span", {
					key: j,
					"data-testid": Z,
					dangerouslySetInnerHTML: {
						__html: $
					}
				})
			}

			function T(j, $ = [], Z = [], k) {
				let F = 0;
				const ne = j.replace(d, "").split(i);
				if (ne.length === 1) return [E(F, j, k)];
				const Y = [],
					re = ne.shift();
				if (re) {
					const te = E(F, re, k);
					Y.push(te), typeof te != "string" && F++
				}
				for (const [te, pe, W] of h(ne)) {
					$[te] || window.console && console.warn(`Missing Component for translation key: ${j}, index: ${te}. Fragment will be used.`);
					const U = $[te] || l.Fragment,
						w = Z[te] || {},
						K = E(0, pe);
					if (Y.push(l.createElement(U, c({
							key: F
						}, w), K)), F++, W) {
						const ee = E(F, W);
						Y.push(ee), typeof ee != "string" && F++
					}
				}
				return Y
			}

			function h(j) {
				if (!j.length) return [];
				const [$, Z, k, F] = j.slice(0, 4);
				return [
					[parseInt($ || k), Z || "", F]
				].concat(h(j.slice(4, j.length)))
			}

			function C({
				id: j = "",
				smartCount: $,
				_: Z,
				values: k,
				applyMarkdown: F,
				Components: ne,
				componentProps: Y,
				testId: re
			}) {
				return l.createElement(p.oc, null, te => {
					k && Object.keys(k).forEach(w => k[w] = m()(k[w])), Y && Y.forEach(w => {
						Object.keys(w).forEach(K => {
							typeof w[K] == "string" && (w[K] = m()(w[K]))
						})
					});
					const pe = v({
							smart_count: $,
							_: Z
						}, k),
						W = F ? (0, u.Z)(te.t(j.toString(), pe), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : te.t(j.toString(), pe),
						U = T(W, ne, Y, re);
					return U.length > 1 ? l.createElement(l.Fragment, null, U) : U[0]
				})
			}
			var D = C,
				b = n("../../../common/intl/intl-react/src/withTranslator.tsx"),
				_ = n("../../../common/intl/intl-react/src/useI18n.tsx"),
				S = n("../../../common/intl/intl-types/src/index.ts"),
				G = f().createContext(S.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(z, y, n) {
			"use strict";
			n.d(y, {
				Aw: function() {
					return S
				},
				Ib: function() {
					return b
				},
				Ks: function() {
					return G
				},
				MS: function() {
					return _
				},
				PN: function() {
					return d
				},
				Pp: function() {
					return f
				},
				Q3: function() {
					return c
				},
				TS: function() {
					return i
				},
				W7: function() {
					return h
				},
				dN: function() {
					return j
				},
				eF: function() {
					return D
				},
				qp: function() {
					return t
				},
				wR: function() {
					return v
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				l = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				f = e.eg.object({
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
				s = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				m = e.eg.object({
					registrant: f.optional,
					technical: f.optional,
					administrator: f.optional,
					billing: f.optional
				}),
				u = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: m.optional,
					years: e.eg.number
				}),
				p = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let v = function($) {
				return $.ONBOARDING_INITIATED = "Onboarding Initiated", $.ONBOARDED = "Onboarded", $.PENDING_REGISTRY_LOCK = "Pending Registry Lock", $.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", $.REGISTRY_UNLOCKED = "Registry Unlocked", $.LOCKED = "Locked", $.FAILED_TO_LOCK = "Failed To Lock", $.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", $.UNLOCKED = "Unlocked", $.OFFBOARDED = "Offboarded", $
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
						status: e.eg.enum(v).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: p.optional,
					landing: e.eg.union([l, e.eg.boolean]).optional,
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
				c = e.eg.object({
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
			let d = function($) {
				return $.PENDING = "pending", $.VERIFIED = "verified", $.REJECTED = "rejected", $.PENDING_DELETE = "pending_delete", $.DELETED = "deleted", $
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
			let h = function($) {
				return $.PENDING = "pending", $.PENDING_UPDATE = "pending_update", $.ENABLED = "enabled", $.DISABLED = "disabled", $
			}({});
			const C = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(h)
				}),
				D = e.eg.intersection([C, T]),
				b = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let _ = function($) {
				return $.UNLOCK_APPROVAL = "UnlockApprovalRequest", $.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", $.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", $.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", $
			}({});
			const S = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				G = e.eg.object({
					message: e.eg.string
				}),
				j = e.eg.object({
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

			function e(l) {
				return Object.keys(l)
			}
			const o = (l, f) => {
				if (f !== void 0) throw new Error("Unexpected object: " + l);
				return f
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(z, y, n) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(l) {
				if (!n.o(e, l)) return Promise.resolve().then(function() {
					var m = new Error("Cannot find module '" + l + "'");
					throw m.code = "MODULE_NOT_FOUND", m
				});
				var f = e[l],
					s = f[0];
				return n.e(f[1]).then(function() {
					return n.t(s, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", z.exports = o
		}
	}
]);

//# debugId=1d52e149-05c0-50bf-8cd9-a5f759fb388c